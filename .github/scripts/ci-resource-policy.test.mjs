import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const mainEvents = `  push:
    branches:
      - main
  pull_request:
    branches:
      - main`

const workflows = [
  ['backend-ci.yml', '  workflow_dispatch:', 'CI'],
  ['security-scan.yml', mainEvents + "\n  schedule:\n    - cron: '0 3 * * 1'", 'Security Scan'],
  ['zero-one-ci.yml', mainEvents + '\n  workflow_dispatch:', 'Zero One CI'],
  ['zero-one-visual-calibration.yml', '  workflow_dispatch:', 'Zero One Visual Calibration'],
]

const jobPolicies = {
  'backend-ci.yml': {
    shell: [15, [
      '/bin/bash -n deploy/apple-container.sh',
      '/bin/bash deploy/tests/apple-container-test.sh',
      '/bin/sh deploy/tests/docker-compose-security-test.sh',
      '/bin/sh deploy/tests/docker-compose-gateway-env-test.sh',
      '/bin/sh deploy/tests/docker-runtime-resources-test.sh',
      '/bin/sh deploy/test-caddyfile-cache.sh',
    ]],
    test: [30, ['run: make test-unit', 'run: make test-integration']],
    frontend: [15, ['run: make test-frontend']],
    'golangci-lint': [40, ['uses: golangci/golangci-lint-action@v9', 'args: --timeout=30m']],
  },
  'security-scan.yml': {
    'backend-security': [15, ['govulncheck ./...']],
    'frontend-security': [15, [
      'pnpm audit --json > audit.json || true',
      'python tools/check_pnpm_audit_exceptions.py',
      '--exceptions .github/audit-exceptions.yml',
    ]],
  },
  'zero-one-ci.yml': {
    'upstream-boundary': [15, [
      'node --test .github/scripts/*.test.mjs',
      'node .github/scripts/verify-ui-boundary.mjs',
      'node .github/scripts/verify-ui-boundary.mjs --worktree',
      'node .github/scripts/verify-upstream-boundary.mjs',
      'node .github/scripts/verify-upstream-boundary.mjs --worktree',
      'node .github/scripts/verify-upgrade-readiness.mjs --recorded-sync --worktree',
    ]],
    landing: [15, [
      'run: npm audit --audit-level=high', 'run: npm run typecheck',
      'run: npm test', 'run: npm run build',
    ]],
    console: [20, [
      'run: pnpm run lint:check', 'run: pnpm run typecheck',
      'run: pnpm run test:run', 'run: pnpm run build',
      'run: pnpm run build:cn-provider-admin',
      'run: pnpm run build:cn-provider-shell',
      'run: pnpm run build:online-image',
      'run: test -z "$(git status --porcelain --untracked-files=all -- deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v1 deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v2 deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v3 deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v4 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v1 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v2 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v3 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v4 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v5 deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v6 deploy/zero-one/recovered-frontend/console/assets/online-image-v7 deploy/zero-one/recovered-frontend/console/assets/online-image-v8 deploy/zero-one/recovered-frontend/console/assets/online-image-v9 deploy/zero-one/recovered-frontend/console/assets/online-image-v10 deploy/zero-one/recovered-frontend/console/assets/online-image-v11 deploy/zero-one/recovered-frontend/console/assets/online-image-v12 deploy/zero-one/recovered-frontend/console/assets/online-image-v13 deploy/zero-one/recovered-frontend/console/assets/password-recovery-v1 deploy/zero-one/recovered-frontend/console/assets/password-recovery-v2)"',
    ]],
    backend: [30, ['run: go test ./...', 'run: make test-unit', 'run: make test-integration']],
    deployment: [45, [
      'sh -n deploy/zero-one/backup-postgres.sh',
      'sh -n deploy/zero-one/restore-drill.sh',
      'sh -n deploy/zero-one/safe-edge-switch.sh',
      'sh -n deploy/zero-one/test-direct-upstream.sh',
      'sh -n deploy/zero-one/test-safe-edge-switch.sh',
      'sh -n deploy/zero-one/test-compose.sh',
      'sh -n deploy/zero-one/test-build-context.sh',
      'sh -n deploy/zero-one/test-live-routing.sh',
      'sh -n deploy/zero-one/test-routing.sh',
      'node --check deploy/zero-one/test-upstream.mjs',
      'node --check deploy/zero-one/benchmark-ttft.mjs',
      'node --check deploy/zero-one/verify-marketing-sources.mjs',
      'node --check deploy/zero-one/verify-public-settings.mjs',
      'node --test deploy/zero-one/benchmark-ttft.test.mjs',
      'run: sh deploy/zero-one/test-routing.sh',
      'run: sh deploy/zero-one/test-direct-upstream.sh',
      'run: node deploy/zero-one/verify-marketing-sources.mjs',
      '| node deploy/zero-one/verify-public-settings.mjs -',
      'docker compose --env-file deploy/zero-one/.env.example -f deploy/zero-one/compose.yml config -q',
      'docker compose --env-file deploy/zero-one/.env.example -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml config -q',
      'run: sh deploy/zero-one/test-compose.sh',
      'run: sh deploy/zero-one/test-build-context.sh',
      'run: sh deploy/zero-one/test-safe-edge-switch.sh',
      'docker build --file Dockerfile --tag zero-one-sub2api:sha-${{ github.sha }} .',
      'docker build --build-arg VITE_LOCAL_EDGE_PREVIEW=false',
      '--file deploy/zero-one/Dockerfile.edge',
      'name: Validate production Caddy configuration',
      'name: Validate preview Caddy configuration',
      'caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile',
      'run: sh deploy/zero-one/test-live-routing.sh zero-one-edge:sha-${{ github.sha }}',
      'run: sh deploy/zero-one/test-live-routing.sh zero-one-edge:sha-${{ github.sha }} preview',
    ]],
  },
  'zero-one-visual-calibration.yml': {
    'chromium-calibration': [30, [
      'name: Diagnostic Chromium visual regression', 'runs-on: ubuntu-24.04',
      'image: mcr.microsoft.com/playwright:v1.55.1-noble',
      'run: npm audit --prefix visual-regression --audit-level=high',
      'run: npm run typecheck --prefix visual-regression',
      'run: npm run test:list --prefix visual-regression',
      'run: npm test --prefix visual-regression', 'uses: actions/upload-artifact@v7',
    ]],
  },
}

Object.assign(jobPolicies['zero-one-ci.yml'], {
  shell: jobPolicies['backend-ci.yml'].shell,
  'golangci-lint': jobPolicies['backend-ci.yml']['golangci-lint'],
  'chromium-calibration': [30, [
    'name: Chromium visual regression',
    ...jobPolicies['zero-one-visual-calibration.yml']['chromium-calibration'][1]
      .filter((command) => !command.startsWith('name:')),
  ]],
  test: [5, ['run: test "$REQUIRED_RESULT" = success']],
  frontend: [5, ['run: test "$REQUIRED_RESULT" = success']],
})

// These workflows deliberately use indented mapping blocks; no YAML dependency is needed.
function topLevelBlock(source, key) {
  const match = source.match(new RegExp(`^${key}:\\n((?: +.*\\n|\\n)*)`, 'm'))
  assert.ok(match, `missing ${key} mapping`)
  return match[1].trimEnd()
}

function workflowJobs(source) {
  return Object.fromEntries(
    [...topLevelBlock(source, 'jobs').matchAll(/^  ([\w-]+):\n((?: {4}.*(?:\n|$)|\n)*)/gm)]
      .map(([, id, body]) => [id, body]),
  )
}

test('legacy CI and visual calibration run only when explicitly requested', () => {
  for (const file of ['backend-ci.yml', 'zero-one-visual-calibration.yml']) {
    const source = readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8')
    assert.equal(topLevelBlock(source, 'on'), '  workflow_dispatch:')
  }
})

test('the automatic product pipeline retains shell, lint and native visual responsibilities', () => {
  const source = readFileSync(new URL('../workflows/zero-one-ci.yml', import.meta.url), 'utf8')
  const jobs = workflowJobs(source)
  for (const [file, id] of [
    ['backend-ci.yml', 'shell'],
    ['backend-ci.yml', 'golangci-lint'],
    ['zero-one-visual-calibration.yml', 'chromium-calibration'],
  ]) {
    assert.ok(jobs[id], `the automatic product pipeline must own ${id}`)
    for (const command of jobPolicies[file][id][1].filter((command) => !command.startsWith('name:'))) {
      assert.ok(jobs[id].includes(command), `${id} must still execute ${command}`)
    }
  }
})

test('compatibility checks propagate backend and Console failure, cancellation and skipped execution', () => {
  const source = readFileSync(new URL('../workflows/zero-one-ci.yml', import.meta.url), 'utf8')
  const jobs = workflowJobs(source)
  for (const [id, dependency] of [['test', 'backend'], ['frontend', 'console']]) {
    assert.ok(jobs[id], `missing required compatibility check ${id}`)
    assert.match(jobs[id], /^    if: always\(\)$/m)
    assert.ok(jobs[id].includes(`    needs: [${dependency}]`))
    assert.ok(jobs[id].includes(`REQUIRED_RESULT: \${{ needs.${dependency}.result }}`))
    const command = jobs[id].match(/^        run: (.+)$/m)?.[1]
    assert.ok(command, 'the compatibility check must execute its result assertion')
    assert.ok(!jobs[id].includes('uses:'), 'compatibility checks must not rebuild or retest')
    for (const result of ['success', 'failure', 'cancelled', 'skipped', '']) {
      const execution = spawnSync('/bin/sh', ['-eu', '-c', command], {
        env: { ...process.env, REQUIRED_RESULT: result },
      })
      assert.equal(execution.status === 0, result === 'success', `${id}: ${result || 'missing'} result`)
    }
  }
})

test('manual diagnostic checks cannot impersonate any of the twelve required checks', () => {
  const requiredNames = [
    'upstream-boundary', 'landing', 'console', 'backend', 'deployment',
    'shell', 'golangci-lint', 'Chromium visual regression', 'test', 'frontend',
    'backend-security', 'frontend-security',
  ]
  const checkNames = (file) => Object.entries(workflowJobs(
    readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8'),
  )).map(([id, body]) => body.match(/^    name: (.+)$/m)?.[1] ?? id)
  assert.deepEqual(
    [...checkNames('zero-one-ci.yml'), ...checkNames('security-scan.yml')].sort(),
    [...requiredNames].sort(),
  )
  for (const name of [...checkNames('backend-ci.yml'), ...checkNames('zero-one-visual-calibration.yml')]) {
    assert.match(name, /^Diagnostic /)
    assert.ok(!requiredNames.includes(name))
  }
})

test('automatic validation executes ordinary, unit, integration and full Console suites exactly once', () => {
  const source = ['zero-one-ci.yml', 'security-scan.yml']
    .map((file) => readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8'))
    .join('\n')
  const commands = source.split('\n').map((line) => line.trim())
  for (const command of [
    'run: go test ./...', 'run: make test-unit', 'run: make test-integration',
    'run: pnpm run lint:check', 'run: pnpm run typecheck', 'run: pnpm run test:run',
  ]) {
    assert.equal(commands.filter((line) => line === command).length, 1, command)
  }
  assert.ok(!commands.includes('run: make test-frontend'), 'the full Console suite includes the critical subset')
  assert.ok(!commands.includes('run: make test'), 'Go lint runs only in its dedicated job')
  assert.ok(!source.includes('continue-on-error:'), 'automatic gates must not hide failures')
})

for (const [file, events, name] of workflows) {
  const source = readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8')
  const jobs = workflowJobs(source)

  test(`${file}: use only the declared automatic or manual event boundary`, () => {
    assert.equal(topLevelBlock(source, 'on'), events)
  })

  test(`${file}: cancel only superseded PR runs, isolating workflows and other events`, () => {
    assert.equal(
      topLevelBlock(source, 'concurrency'),
      '  group: ${{ github.workflow }}-${{ github.event_name }}-${{ github.event.pull_request.number || github.ref }}\n' +
        "  cancel-in-progress: ${{ github.event_name == 'pull_request' }}",
    )
  })

  test(`${file}: retain every existing gate and read-only permissions`, () => {
    assert.equal(source.match(/^name: (.+)$/m)?.[1], name)
    assert.equal(topLevelBlock(source, 'permissions'), '  contents: read')
    assert.deepEqual(Object.keys(jobs), Object.keys(jobPolicies[file]))
    for (const [id, [, commands]] of Object.entries(jobPolicies[file])) {
      const lines = jobs[id].split('\n').map((line) => line.trimEnd().replace(/ \\$/, ''))
      for (const command of commands) {
        assert.ok(lines.some((line) => line.endsWith(command)), `${id} must retain ${command}`)
      }
    }
  })

  for (const [id, [minutes]] of Object.entries(jobPolicies[file])) {
    test(`${file}: ${id} has a ${minutes}-minute execution budget`, () => {
      assert.deepEqual(
        [...jobs[id].matchAll(/^    timeout-minutes: (\d+)$/gm)].map((match) => Number(match[1])),
        [minutes],
      )
    })
  }
}
