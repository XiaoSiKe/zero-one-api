import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, readlinkSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

import {
  APPROVED_SHELL_SOURCE,
  CN_PROVIDER_SHELL_ASSET,
  CN_PROVIDER_SHELL_DIRECTORY,
  DECLARED_COST_SHELL_DIRECTORY,
  LEGACY_CN_PROVIDER_SHELL_DIRECTORY,
  PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY,
  PRIOR_CN_PROVIDER_SHELL_DIRECTORY,
  PRE_RECOVERY_SHELL_DIRECTORY,
  APPROVED_LAYOUT_SOURCE,
  patchApprovedHeader,
  recoveryShellOverrides,
  declaredCostShellOverrides,
  dashboardSpendShellOverrides,
  patchDashboardSpendCards,
  DECLARED_COST_OVERRIDE_FILES,
  RECOVERY_SHELL_DIRECTORY,
  CURRENT_PASSWORD_RECOVERY_DIRECTORY,
  patchApprovedShell,
  patchLegacyApprovedShell,
  patchPriorApprovedShell,
  patchPreviousApprovedShell,
} from './build-cn-provider-shell.mjs'

const assetsDirectory = resolve(import.meta.dirname, 'recovered-frontend/console/assets')

test('CN Provider shell differs from the approved shell only at the router seam', () => {
  const approved = readFileSync(resolve(assetsDirectory, APPROVED_SHELL_SOURCE), 'utf8')
  const generated = readFileSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_ASSET), 'utf8')
  const legacy = readFileSync(
    resolve(assetsDirectory, LEGACY_CN_PROVIDER_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE),
    'utf8',
  )
  const previous = readFileSync(
    resolve(assetsDirectory, PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE),
    'utf8',
  )
  const prior = readFileSync(
    resolve(assetsDirectory, PRIOR_CN_PROVIDER_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE),
    'utf8',
  )

  assert.equal(generated, patchApprovedShell(approved))
  assert.equal(legacy, patchLegacyApprovedShell(approved))
  assert.equal(previous, patchPreviousApprovedShell(approved))
  assert.equal(prior, patchPriorApprovedShell(approved))
  assert.match(generated, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.doesNotMatch(approved, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.equal((generated.match(/zero-one-cn-provider-route-placeholder-v1\.js/g) || []).length, 6)
  assert.equal((generated.match(/zero-one-online-image-route-placeholder-v1\.js/g) || []).length, 1)
  assert.match(generated, /path:"\/images",name:"ImageGeneration"/)
  assert.match(generated, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.match(generated, /payload\?\.data\?\.items\?payload\.data:payload/)
  assert.doesNotMatch(legacy, /path:"\/images",name:"ImageGeneration"/)
  assert.doesNotMatch(legacy, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.match(previous, /path:"\/images",name:"ImageGeneration"/)
  assert.doesNotMatch(previous, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.equal((prior.match(/zero-one-cn-provider-route-placeholder-v1\.js/g) || []).length, 2)
  assert.match(prior, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.doesNotMatch(
    generated,
    /path:"\/admin\/(?:groups|accounts|channels\/pricing|channels\/monitor|ops|subscriptions)"[^}]+component:\(\)=>y\(\(\)=>import\("\.\/(?:GroupsView|AccountsView|ChannelsView|ChannelMonitorView|OpsDashboard|SubscriptionsView)-/,
  )
  assert.equal(
    readlinkSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_DIRECTORY, 'vendor-vue-iKpM1E08.js')),
    '../vendor-vue-iKpM1E08.js',
  )
})

test('CN Provider shell generation fails closed when the approved bootstrap changes', () => {
  assert.throws(() => patchApprovedShell('unrelated shell'), /bootstrap seam count changed/)
})

test('password recovery namespace preserves the previous shell and changes only three declared modules', () => {
  const current = readFileSync(resolve(assetsDirectory, `${RECOVERY_SHELL_DIRECTORY}/${APPROVED_SHELL_SOURCE}`), 'utf8')
  const previous = readFileSync(resolve(assetsDirectory, PRE_RECOVERY_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE), 'utf8')
  assert.equal(current, previous, '认证修复不能重写原来的 Router 或业务路由')
  const overrides = recoveryShellOverrides(assetsDirectory)
  assert.equal(overrides.size, 3)
  for (const [name, content] of overrides) {
    assert.equal(readFileSync(resolve(assetsDirectory, RECOVERY_SHELL_DIRECTORY, name), 'utf8'), content)
    assert.equal(readlinkSync(resolve(assetsDirectory, PRE_RECOVERY_SHELL_DIRECTORY, name)), `../${name}`)
  }
  const source = readFileSync(resolve(assetsDirectory, APPROVED_LAYOUT_SOURCE), 'utf8')
  const result = patchApprovedHeader(source)
  assert.equal(result.includes('nav.docs'), false)
  assert.ok(source.includes('nav.docs'), '原批准外壳继续保留')
  assert.throws(() => patchApprovedHeader(result), /documentation seam changed/)
})


test('declared cost modules use a new namespace and leave the recovery namespace on its original assets', () => {
  const overrides = declaredCostShellOverrides(assetsDirectory)
  assert.equal(overrides.size, 3 + DECLARED_COST_OVERRIDE_FILES.length)
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    assert.equal(readFileSync(resolve(assetsDirectory, DECLARED_COST_SHELL_DIRECTORY, name), 'utf8'), overrides.get(name))
    assert.equal(readlinkSync(resolve(assetsDirectory, RECOVERY_SHELL_DIRECTORY, name)), `../${name}`)
    assert.notEqual(overrides.get(name), readFileSync(resolve(assetsDirectory, name), 'utf8'))
  }
})

test('current shell changes only the two existing dashboard cards', () => {
  const previous = declaredCostShellOverrides(assetsDirectory)
  const current = dashboardSpendShellOverrides(assetsDirectory)
  assert.equal(current.size, previous.size)
  assert.equal(
    current.get('DashboardView-CYAPqspo.js'),
    patchDashboardSpendCards(previous.get('DashboardView-CYAPqspo.js')),
  )
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    if (name === 'DashboardView-CYAPqspo.js') continue
    assert.equal(current.get(name), previous.get(name), `${name} changed outside the dashboard seam`)
  }
  const dashboard = current.get('DashboardView-CYAPqspo.js')
  assert.match(dashboard, /admin\.dashboard\.totalCost/)
  assert.match(dashboard, /admin\.dashboard\.todayCost/)
  assert.match(dashboard, /minimumFractionDigits:2,maximumFractionDigits:2/)
  assert.doesNotMatch(dashboard, /admin\.dashboard\.(?:apiKeys|accounts)/)
})


test('current password recovery imports the same Vue and application runtime as the current shell', () => {
  for (const name of ['ForgotPasswordView.js', 'ResetPasswordView.js']) {
    const module = readFileSync(resolve(assetsDirectory, CURRENT_PASSWORD_RECOVERY_DIRECTORY, name), 'utf8')
    assert.ok(module.includes(`/assets/${CN_PROVIDER_SHELL_DIRECTORY}/vendor-vue-`))
    assert.ok(!module.includes(`/assets/${RECOVERY_SHELL_DIRECTORY}/`))
  }
})


// Original immutable URLs served by production revision 10da24948.
const originalCostModuleDigests = {
  "AccountsView-CM4yOmZE.js": "e754045e8a2d2bfb4c3e867db908fd3f07f4d29c715a84c018508bad99286b75",
  "DashboardView-CYAPqspo.js": "583f4e19cda7b314377ddf7919afb007cbad2a0c16efbc2353c981cffb09fe17",
  "EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js": "497f12185df159112a78d7b13446f0b138348d7a1c743b04c238d95810732836",
  "GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js": "e29fc2335c04b850ab85cda770873fa51d19124b6d3a819544d417ea5e12d438",
  "ModelDistributionChart.vue_vue_type_script_setup_true_lang-BkqQV0ng.js": "c9c8cdd7d0b44651d5bff2daa233587d705c3fd067cbb2847dfd35cd8e9ae379",
  "UsageView-dsXbJO6P.js": "756968c3bf6e78a9c479d97c0686d62ec7182a5e9ab4941517c2060d90cb38ea",
  "index-6pKNrg32.js": "9836d4754475c396d2c7ad1ea322a098314ff00c2989912c52a4d300f3c4b444",
  "index-BBEtrNVx.js": "07dbea874de692bcf910270e5a5374ddced641907124a6308853097802119abe"
}

test('old immutable cost assets remain byte-identical after the new namespace is built', () => {
  for (const [name, digest] of Object.entries(originalCostModuleDigests)) {
    for (const directory of ['', RECOVERY_SHELL_DIRECTORY]) {
      assert.equal(createHash('sha256').update(readFileSync(resolve(assetsDirectory, directory, name))).digest('hex'), digest)
    }
  }
})
