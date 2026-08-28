import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const mainEvents = `  push:
    branches:
      - main
  pull_request:
    branches:
      - main`

const workflows = [
  ['backend-ci.yml', '', 'CI'],
  ['security-scan.yml', "\n  schedule:\n    - cron: '0 3 * * 1'", 'Security Scan'],
  ['zero-one-ci.yml', '\n  workflow_dispatch:', 'Zero One CI'],
  ['zero-one-visual-calibration.yml', '\n  workflow_dispatch:', 'Zero One Visual Calibration'],
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
    ]],
    backend: [30, ['run: make test-unit', 'run: make test-integration']],
    deployment: [45, [
      'sh -n deploy/zero-one/backup-postgres.sh',
      'sh -n deploy/zero-one/restore-drill.sh',
      'sh -n deploy/zero-one/safe-edge-switch.sh',
      'sh -n deploy/zero-one/test-direct-upstream.sh',
      'sh -n deploy/zero-one/test-safe-edge-switch.sh',
      'sh -n deploy/zero-one/test-compose.sh',
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
      'name: Chromium visual regression', 'runs-on: ubuntu-24.04',
      'image: mcr.microsoft.com/playwright:v1.55.1-noble',
      'run: npm audit --prefix visual-regression --audit-level=high',
      'run: npm run typecheck --prefix visual-regression',
      'run: npm run test:list --prefix visual-regression',
      'run: npm test --prefix visual-regression', 'uses: actions/upload-artifact@v7',
    ]],
  },
}

// These workflows deliberately use indented mapping blocks; no YAML dependency is needed.
function topLevelBlock(source, key) {
  const match = source.match(new RegExp(`^${key}:\\n((?: +.*\\n|\\n)*)`, 'm'))
  assert.ok(match, `missing ${key} mapping`)
  return match[1].trimEnd()
}

for (const [file, otherEvents, name] of workflows) {
  const source = readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8')
  const jobs = Object.fromEntries(
    [...topLevelBlock(source, 'jobs').matchAll(/^  ([\w-]+):\n((?: {4}.*(?:\n|$)|\n)*)/gm)]
      .map(([, id, body]) => [id, body]),
  )

  test(`${file}: validate main pushes and PRs without duplicate branch or tag runs`, () => {
    assert.equal(topLevelBlock(source, 'on'), mainEvents + otherEvents)
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
