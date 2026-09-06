import { execFileSync, spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

import { changedPaths, selectTestImpact, validatePolicy, workingTreePaths } from './select-test-impact.mjs'

function parseArgs(argv) {
  const result = { all: false, dryRun: false }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--all') result.all = true
    else if (arg === '--dry-run') result.dryRun = true
    else if (arg === '--base' || arg === '--head' || arg === '--mode') {
      result[arg.slice(2)] = argv[index + 1]
      index += 1
    } else throw new Error(`unexpected argument: ${arg}`)
  }
  return result
}

export function commandsForImpact(impact) {
  const commands = [
    'node --test .github/scripts/*.test.mjs',
    'node .github/scripts/verify-ui-boundary.mjs --worktree',
    'node .github/scripts/verify-upstream-boundary.mjs --worktree',
    'node .github/scripts/verify-upgrade-readiness.mjs --recorded-sync --worktree',
  ]
  if (impact.landing) commands.push(
    'npm run typecheck --prefix landing',
    'npm test --prefix landing',
    'npm run build --prefix landing',
  )
  if (impact.console) commands.push(
    'pnpm --dir frontend run lint:check',
    'pnpm --dir frontend run typecheck',
    'pnpm --dir frontend run test:run',
    'pnpm --dir frontend run build',
  )
  const assetScopes = new Set((impact.console_asset_scopes ?? 'none').split(','))
  if (assetScopes.has('cn_provider') || assetScopes.has('all')) {
    commands.push('pnpm --dir frontend run build:cn-provider-admin')
  }
  if (assetScopes.has('password') || assetScopes.has('shell') || assetScopes.has('all')) {
    commands.push('pnpm --dir frontend run build:password-recovery')
  }
  if (assetScopes.has('shell') || assetScopes.has('all')) {
    commands.push('pnpm --dir frontend run build:cn-provider-shell')
  }
  if (assetScopes.has('online') || assetScopes.has('all')) {
    commands.push('pnpm --dir frontend run build:online-image')
  }
  const backendCommands = {
    full: ['cd backend && go test ./...', 'cd backend && make test-unit', 'cd backend && make test-integration'],
    data: [
      "cd backend && go test ./internal/handler/admin ./internal/repository ./internal/service -run 'Dashboard|Usage|Billing|Payment|Affiliate|Subscription|User|APIKey'",
      "cd backend && go test -tags=unit ./internal/handler/admin ./internal/repository ./internal/service -run 'Dashboard|Usage|Billing|Payment|Affiliate|Subscription|User|APIKey'",
      "cd backend && go test -tags=integration ./internal/repository -run 'Dashboard|Usage|Billing|Payment|Affiliate|Subscription|User|APIKey'",
    ],
    gateway: [
      "cd backend && go test ./internal/handler ./internal/handler/admin ./internal/repository ./internal/service -run 'Gateway|ChannelMonitor|Account|Group|Concurrency|Failover|Stream|Upstream'",
      "cd backend && go test -tags=unit ./internal/handler ./internal/handler/admin ./internal/repository ./internal/service -run 'Gateway|ChannelMonitor|Account|Group|Concurrency|Failover|Stream|Upstream'",
      "cd backend && go test -tags=integration ./internal/handler ./internal/repository -run 'Gateway|ChannelMonitor|Account|Group|Concurrency|Failover|Stream|Upstream'",
    ],
    redeem: [
      "cd backend && go test ./internal/handler/admin ./internal/repository ./internal/service -run 'Redeem|Benefit|Mystery|Balance'",
      "cd backend && go test -tags=unit ./internal/handler/admin ./internal/repository ./internal/service -run 'Redeem|Benefit|Mystery|Balance'",
      "cd backend && go test -tags=integration ./internal/repository -run 'Redeem|Benefit|Mystery|Balance'",
    ],
  }
  commands.push(...(backendCommands[impact.backend_scope] ?? []))
  if (impact.lint) commands.push('cd backend && golangci-lint run ./...')
  if (impact.deployment) commands.push(
    'python3 deploy/zero-one/test-release-maintenance.py',
    'sh deploy/zero-one/test-routing.sh',
    'sh deploy/zero-one/test-direct-upstream.sh',
    'sh deploy/zero-one/test-compose.sh',
    'sh deploy/zero-one/test-build-context.sh',
  )
  if (impact.shell) commands.push(
    '/bin/bash -n deploy/apple-container.sh',
    '/bin/bash deploy/tests/apple-container-test.sh',
    '/bin/sh deploy/tests/docker-compose-security-test.sh',
  )
  if (impact.visual_scope === 'dashboard') {
    commands.push('npm test --prefix visual-regression -- tests/dashboard-spend.behavior.spec.ts')
  } else if (impact.visual_scope === 'full') {
    commands.push('npm test --prefix visual-regression')
  }
  if (impact.backend_security) commands.push('cd backend && govulncheck ./...')
  if (impact.frontend_security) commands.push('pnpm --dir frontend audit --audit-level=high')
  return commands
}

function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)
  const policy = validatePolicy(JSON.parse(readFileSync(new URL('../test-impact-policy.json', import.meta.url), 'utf8')))
  const head = options.head ?? execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
  const base = options.base ?? execFileSync('git', ['merge-base', head, 'origin/main'], { encoding: 'utf8' }).trim()
  const paths = options.all ? [] : [
    ...changedPaths(base, head, options.mode ?? 'pull_request'),
    ...workingTreePaths(),
  ]
  const impact = selectTestImpact(paths, policy)
  process.stdout.write(`${JSON.stringify(impact, null, 2)}\n`)
  for (const command of commandsForImpact(impact)) {
    process.stdout.write(`\n$ ${command}\n`)
    if (options.dryRun) continue
    const result = spawnSync(command, { shell: true, stdio: 'inherit' })
    if (result.status !== 0) process.exit(result.status ?? 1)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
