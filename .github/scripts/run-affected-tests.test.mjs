import assert from 'node:assert/strict'
import test from 'node:test'

import { commandsForImpact } from './run-affected-tests.mjs'

const none = {
  landing: false, console: false, console_asset_scopes: 'none', backend_scope: 'none',
  deployment: false, shell: false, lint: false, visual_scope: 'none',
  backend_security: false, frontend_security: false,
}

test('documentation-only verification contains no product build or browser command', () => {
  const commands = commandsForImpact(none)
  assert.ok(commands.every((command) => !command.includes('visual-regression') && !command.includes('pnpm --dir frontend')))
  assert.ok(commands.every((command) => !command.includes('go test')))
})

test('Console behavior and adapter generation are independently selectable', () => {
  const behavior = commandsForImpact({ ...none, console: true })
  assert.ok(behavior.some((command) => command.includes('test:run')))
  assert.ok(behavior.every((command) => !command.includes('build:cn-provider-shell')))
  const assets = commandsForImpact({ ...none, console: true, console_asset_scopes: 'shell' })
  assert.ok(assets.some((command) => command.includes('build:cn-provider-shell')))
  assert.ok(
    assets.indexOf('pnpm --dir frontend run build:cn-provider-shell') <
      assets.indexOf('pnpm --dir frontend run build:password-recovery'),
    'password recovery must be the final writer after the shell compatibility generator',
  )
})

test('visual impact uses the pinned cross-platform runner', () => {
  const full = commandsForImpact({ ...none, visual_scope: 'full' })
  assert.ok(full.includes('sh deploy/zero-one/test-visual.sh'))
  const dashboard = commandsForImpact({ ...none, visual_scope: 'dashboard' })
  assert.ok(dashboard.includes(
    'sh deploy/zero-one/test-visual.sh tests/dashboard-spend.behavior.spec.ts',
  ))
})

test('redeem selection does not invoke unrelated backend or visual suites', () => {
  const commands = commandsForImpact({ ...none, backend_scope: 'redeem', lint: true })
  assert.ok(commands.some((command) => command.includes('Redeem|Benefit|Mystery|Balance')))
  assert.ok(commands.every((command) => !command.includes('make test-integration')))
  assert.ok(commands.every((command) => !command.includes('visual-regression')))
})
