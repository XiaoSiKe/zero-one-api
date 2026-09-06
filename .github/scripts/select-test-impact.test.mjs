import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import { parseNameStatus, selectTestImpact, validatePolicy } from './select-test-impact.mjs'

const policy = validatePolicy(JSON.parse(readFileSync(new URL('../test-impact-policy.json', import.meta.url), 'utf8')))

test('documentation-only changes keep expensive product suites idle', () => {
  const impact = selectTestImpact(['docs/OPERATIONS.md'], policy)
  assert.equal(impact.backend_scope, 'none')
  assert.equal(impact.console, false)
  assert.equal(impact.visual_scope, 'none')
  assert.equal(impact.deployment, false)
})

test('dashboard API changes select data tests without visual tests', () => {
  const impact = selectTestImpact(['backend/internal/handler/admin/dashboard_snapshot_v2_handler.go'], policy)
  assert.equal(impact.backend_scope, 'data')
  assert.equal(impact.lint, true)
  assert.equal(impact.visual_scope, 'none')
})

test('redeem changes do not select unrelated full backend or browser suites', () => {
  const impact = selectTestImpact(['backend/internal/service/redeem_service.go'], policy)
  assert.equal(impact.backend_scope, 'redeem')
  assert.equal(impact.visual_scope, 'none')
})

test('shared balance changes combine redeem and data scopes into full backend verification', () => {
  const impact = selectTestImpact([
    'backend/internal/service/redeem_service.go',
    'backend/internal/service/user_service.go',
  ], policy)
  assert.equal(impact.backend_scope, 'full')
})

test('dashboard presentation changes select the focused visual suite', () => {
  const impact = selectTestImpact(['frontend/src/views/admin/DashboardView.vue'], policy)
  assert.equal(impact.console, true)
  assert.equal(impact.console_asset_scopes, 'shell')
  assert.equal(impact.visual_scope, 'dashboard')
})

test('shared Console shell changes select full visual verification', () => {
  const impact = selectTestImpact(['frontend/src/App.vue'], policy)
  assert.equal(impact.visual_scope, 'full')
})

test('dependency lock changes select the matching audit and UI checks', () => {
  const impact = selectTestImpact(['frontend/pnpm-lock.yaml'], policy)
  assert.equal(impact.console, true)
  assert.equal(impact.frontend_security, true)
  assert.equal(impact.visual_scope, 'full')
})

test('Console API-only changes do not rebuild recovered UI adapters', () => {
  const impact = selectTestImpact(['frontend/src/api/admin/dashboard.ts'], policy)
  assert.equal(impact.console, true)
  assert.equal(impact.console_asset_scopes, 'none')
  assert.equal(impact.visual_scope, 'none')
})

test('renames and deletions inspect both sides of a rename', () => {
  assert.deepEqual(
    parseNameStatus('R100\tdocs/old.md\tbackend/internal/service/redeem_service.go\nD\tfrontend/src/App.vue\n'),
    ['docs/old.md', 'backend/internal/service/redeem_service.go', 'frontend/src/App.vue'],
  )
})

test('unknown paths and missing history fail closed to full verification', () => {
  for (const paths of [[], ['unclassified/new.surface']]) {
    const impact = selectTestImpact(paths, policy)
    assert.equal(impact.backend_scope, 'full')
    assert.equal(impact.visual_scope, 'full')
    assert.equal(impact.backend_security, true)
    assert.equal(impact.frontend_security, true)
  }
})

test('policy and workflow changes require a complete baseline run', () => {
  for (const path of ['.github/test-impact-policy.json', '.github/workflows/zero-one-ci.yml']) {
    const impact = selectTestImpact([path], policy)
    assert.equal(impact.backend_scope, 'full')
    assert.equal(impact.visual_scope, 'full')
  }
})

test('complete baseline keeps only explicitly affected immutable generators', () => {
  const impact = selectTestImpact([
    '.github/workflows/zero-one-ci.yml',
    'frontend/src/views/admin/DashboardView.vue',
    'frontend/src/i18n/locales/zh/channelMonitorV2.ts',
  ], policy)
  assert.equal(impact.backend_scope, 'full')
  assert.equal(impact.visual_scope, 'full')
  assert.equal(impact.console_asset_scopes, 'cn_provider,shell')
  assert.equal(impact.reason, 'test-policy-change')
})

test('policy change cannot be narrowed by one backend or visual scope', () => {
  const impact = selectTestImpact([
    '.github/workflows/zero-one-ci.yml',
    'backend/internal/service/dashboard_service.go',
    'frontend/src/views/admin/DashboardView.vue',
  ], policy)
  assert.equal(impact.backend_scope, 'full')
  assert.equal(impact.visual_scope, 'full')
  assert.equal(impact.console_asset_scopes, 'shell')
})
