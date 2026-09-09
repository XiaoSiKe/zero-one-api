import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { lstatSync, readFileSync, readlinkSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

import {
  APPROVED_SHELL_SOURCE,
  CN_PROVIDER_SHELL_ASSET,
  CN_PROVIDER_SHELL_DIRECTORY,
  NATIVE_COST_SHELL_DIRECTORY,
  DASHBOARD_SPEND_SHELL_DIRECTORY,
  DASHBOARD_USER_CLARITY_SHELL_DIRECTORY,
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
  dashboardUserClarityShellOverrides,
  nativeCostDashboardOverrides,
  declaredCostDashboardOverrides,
  patchNativeCostLocale,
  patchNativeCostModule,
  billingClarityShellOverrides,
  patchBillingClarityAccountsModule,
  patchBillingClarityFormatterModule,
  patchBillingClarityLocale,
  patchBillingClarityUsageModule,
  patchDashboardTrendModule,
  patchDashboardSpendCards,
  DECLARED_COST_OVERRIDE_FILES,
  RECOVERY_SHELL_DIRECTORY,
  CURRENT_PASSWORD_RECOVERY_DIRECTORY,
  NATIVE_COST_PASSWORD_RECOVERY_DIRECTORY,
  LEGACY_CN_PROVIDER_ADMIN_DIRECTORY,
  BILLING_CLARITY_CN_PROVIDER_ADMIN_DIRECTORY,
  BILLING_CLARITY_CN_PROVIDER_ADMIN_FILES,
  patchBillingClarityLegacyAccountsModule,
  patchBillingClarityLegacyAccountLocale,
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

test('current shell clarifies the new-users card and preserves the dashboard spend namespace', () => {
  const previous = dashboardSpendShellOverrides(assetsDirectory)
  const current = dashboardUserClarityShellOverrides(assetsDirectory)
  const dashboardName = 'DashboardView-CYAPqspo.js'
  assert.equal(
    readFileSync(resolve(assetsDirectory, DASHBOARD_SPEND_SHELL_DIRECTORY, dashboardName), 'utf8'),
    previous.get(dashboardName),
  )
  assert.equal(
    current.get(dashboardName),
    previous.get(dashboardName).replace('admin.dashboard.users', 'admin.dashboard.newUsersToday'),
  )
  assert.match(current.get(dashboardName), /admin\.dashboard\.newUsersToday/)
  assert.doesNotMatch(current.get(dashboardName), /admin\.dashboard\.users/)
})

test('v9 restores native cost display and adds range-aware spend and token trends', () => {
  const previous = dashboardUserClarityShellOverrides(assetsDirectory)
  const current = nativeCostDashboardOverrides(assetsDirectory)
  const dashboardName = 'DashboardView-CYAPqspo.js'
  assert.equal(
    readFileSync(resolve(assetsDirectory, DASHBOARD_USER_CLARITY_SHELL_DIRECTORY, dashboardName), 'utf8'),
    previous.get(dashboardName),
  )
  assert.equal(
    readFileSync(resolve(assetsDirectory, NATIVE_COST_SHELL_DIRECTORY, dashboardName), 'utf8'),
    current.get(dashboardName),
  )
  assert.match(current.get(dashboardName), /admin\.dashboard\.totalUsers/)
  assert.match(current.get(dashboardName), /admin\.dashboard\.newUsersToday/)
  assert.match(current.get(dashboardName), /metric:"cost"/)
  assert.match(current.get(dashboardName), /metric:"tokens"/)
  assert.match(current.get(dashboardName), /refresh:!0/)
  assert.doesNotMatch(current.get(dashboardName), /待确认|成本待确认/)
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    assert.doesNotMatch(current.get(name), /待确认|成本待确认|upstream_rate_multiplier/)
  }
  const sourceTrend = readFileSync(
    resolve(assetsDirectory, 'TokenUsageTrend.vue_vue_type_script_setup_true_lang-BKMiSAe-.js'),
    'utf8',
  )
  const trend = patchDashboardTrendModule(sourceTrend)
  assert.equal(
    readFileSync(resolve(assetsDirectory, NATIVE_COST_SHELL_DIRECTORY, 'TokenUsageTrend.vue_vue_type_script_setup_true_lang-BKMiSAe-.js'), 'utf8'),
    trend,
  )
  assert.match(trend, /admin\.dashboard\.consumptionTrend/)
  assert.match(trend, /admin\.dashboard\.totalTokens/)
  assert.throws(
    () => patchNativeCostModule('unrelated', 'UsageView-dsXbJO6P.js'),
    /usage export account rate seam count changed/,
  )
  assert.throws(() => patchNativeCostModule('unrelated', 'unknown.js'), /unexpected native cost module/)
  assert.throws(() => patchNativeCostLocale('unrelated'), /dashboard trend locale seam count changed/)
})

test('v10 clarifies account identity and uses request-time upstream account cost', () => {
  const previous = declaredCostDashboardOverrides(assetsDirectory)
  const current = billingClarityShellOverrides(assetsDirectory)
  const usageName = 'GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js'
  const accountsName = 'AccountsView-CM4yOmZE.js'
  const formatterName = 'EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js'
  const usageViewName = 'UsageView-dsXbJO6P.js'

  for (const name of [usageName, accountsName, formatterName, usageViewName, 'index-6pKNrg32.js', 'index-BBEtrNVx.js']) {
    assert.equal(
      readFileSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_DIRECTORY, name), 'utf8'),
      current.get(name),
      `v10 output drifted from its generator: ${name}`,
    )
  }

  const usage = current.get(usageName)
  assert.match(usage, /usage\.userRateMultiplier/)
  assert.match(usage, /usage\.providerAccount/)
  assert.match(usage, /usage\.accountMultiplierHint/)
  assert.match(usage, /upstream_rate_multiplier/)
  assert.match(usage, /account_id/)
  assert.match(usage, /usage\.accountCostPending/)
  assert.doesNotMatch(usage, /account_rate_multiplier\?\?1/)
  assert.doesNotMatch(usage, /" A \$"/)

  const accounts = current.get(accountsName)
  assert.match(accounts, /billing-rate-visible-by-default/)
  assert.match(accounts, /delete\("rate_multiplier"\)/)
  assert.doesNotMatch(accounts, /\["today_stats","proxy","notes","priority","scheduler_score","rate_multiplier"\]/)

  const formatter = current.get(formatterName)
  assert.match(formatter, /r===0\?"0\.00"/)
  assert.match(current.get(usageViewName), /usage\.userRateMultiplier/)

  const english = current.get('index-6pKNrg32.js')
  assert.match(english, /Request-time upstream rate/)
  assert.match(english, /Pending calculation/)
  assert.match(english, /Current Account Rate/)
  assert.match(english, /does not sync automatically/)
  const chinese = current.get('index-BBEtrNVx.js')
  assert.match(chinese, /请求时上游倍率/)
  assert.match(chinese, /待核算/)
  assert.match(chinese, /当前账号倍率/)
  assert.match(chinese, /不自动同步/)

  assert.throws(() => patchBillingClarityUsageModule('unrelated'), /usage account identity seam count changed/)
  assert.throws(() => patchBillingClarityAccountsModule('unrelated'), /account default hidden columns seam count changed/)
  assert.throws(() => patchBillingClarityFormatterModule('unrelated'), /zero multiplier formatter seam count changed/)
  assert.throws(() => patchBillingClarityLocale('unrelated'), /billing clarity locale seam changed/)
})

test('v8 account adapter patches only the immutable v1 account-rate seams', () => {
  const sourceDirectory = resolve(assetsDirectory, LEGACY_CN_PROVIDER_ADMIN_DIRECTORY)
  const targetDirectory = resolve(assetsDirectory, BILLING_CLARITY_CN_PROVIDER_ADMIN_DIRECTORY)
  assert.deepEqual(readdirSync(targetDirectory).sort(), [...BILLING_CLARITY_CN_PROVIDER_ADMIN_FILES].sort())
  for (const name of BILLING_CLARITY_CN_PROVIDER_ADMIN_FILES) {
    assert.ok(lstatSync(resolve(targetDirectory, name)).isFile(), `v8 asset must be a regular file: ${name}`)
  }

  const accountsSource = readFileSync(resolve(sourceDirectory, 'AccountsView-CqGntwat.js'), 'utf8')
  const accounts = readFileSync(resolve(targetDirectory, 'AccountsView-CqGntwat.js'), 'utf8')
  assert.equal(accounts, patchBillingClarityLegacyAccountsModule(accountsSource))
  assert.match(accounts, /billing-rate-visible-by-default/)
  assert.match(accounts, /delete\("rate_multiplier"\)/)

  for (const name of ['index-Cd_2Lby2.js', 'index-DIg8WdAu.js']) {
    const source = readFileSync(resolve(sourceDirectory, name), 'utf8')
    const current = readFileSync(resolve(targetDirectory, name), 'utf8')
    assert.equal(current, patchBillingClarityLegacyAccountLocale(source))
  }
  assert.match(readFileSync(resolve(targetDirectory, 'index-Cd_2Lby2.js'), 'utf8'), /Current Account Rate/)
  assert.match(readFileSync(resolve(targetDirectory, 'index-DIg8WdAu.js'), 'utf8'), /上游声明倍率（观测）/)

  for (const name of ['GroupsView-BoyyLsHH.js', 'cnProviderAdminLeaf-BhlEtnfM.js', 'platforms-DPfm85ol.js', 'logo.svg']) {
    assert.equal(
      readFileSync(resolve(targetDirectory, name), 'utf8'),
      readFileSync(resolve(sourceDirectory, name), 'utf8'),
      `unrelated v1 adapter asset changed: ${name}`,
    )
  }
  assert.throws(() => patchBillingClarityLegacyAccountsModule('unrelated'), /legacy account default hidden columns seam count changed/)
  assert.throws(() => patchBillingClarityLegacyAccountLocale('unrelated'), /legacy account locale seam changed/)
})


test('current password recovery imports the same Vue and application runtime as the current shell', () => {
  for (const name of ['ForgotPasswordView.js', 'ResetPasswordView.js']) {
    const module = readFileSync(resolve(assetsDirectory, CURRENT_PASSWORD_RECOVERY_DIRECTORY, name), 'utf8')
    assert.ok(module.includes(`/assets/${CN_PROVIDER_SHELL_DIRECTORY}/vendor-vue-`))
    assert.ok(!module.includes(`/assets/${NATIVE_COST_SHELL_DIRECTORY}/`))
  }
})

const nativeCostV9Digests = {
  'index-9xJBhx8B.js': 'ef2be89803d644b3f854f7aca9f653ae6de459b911d51fd7cd97c07fa9b53220',
  'AccountsView-CM4yOmZE.js': '247b608148f66330b61613847830ce4245aae09cf1a78f37e58a08aa9fc53cca',
  'GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js': '8604b1dc2f2478009d8f8eba6ac82f2fd9dafea073d18593185bd33cd69e19a2',
  'EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js': 'c1ca73a337c32894b07f45c67851943f324e17bacd504ed834052e4c462b00ee',
  'UsageView-dsXbJO6P.js': '1896e3071e653c7d4a8956576f6230379cd73907b75a369ed34e1aa683b517e3',
  'index-6pKNrg32.js': '16115c1ed533c7b15b96070ac673f62d993b39f99fd73cad410fdd6bf265fdbd',
  'index-BBEtrNVx.js': 'f4470d6d66f93aa49d9b1cdbd6a2a134dbe0919e0e3a2b3ede4e6fb3b8ea148a',
  'DashboardView-CYAPqspo.js': '8c76c04a57e2460ae2d6cb3a54b11e872bf0e87f682a1c419e85c583dfae3cb4',
  'TokenUsageTrend.vue_vue_type_script_setup_true_lang-BKMiSAe-.js': '6624ec5016ff62d730d2ba4cd19769ec9bd9dab6fa7ff05382aa3586c8c01350',
}

const passwordRecoveryV5Digests = {
  'ForgotPasswordView.js': '87dadb56578f94d12ec9513523a8fce9fc472315e0c4bf41cdcd55346b109906',
  'ResetPasswordView.js': '715ecc37cf06fa1e0eedf3cda14f02bcc48d1f8c23260b8cc4e8b2337e3a0694',
  '_plugin-vue_export-helper-BzMx7MZG.js': 'f709266e5ac4a7333df9d52bb4f5cb7b5e28bdcd2dd0895eec78f625168a5d7b',
  'assets/ForgotPasswordView-BbIC1f0l.css': '62be720292184d44d74b294e8a9224e58686e5e01e4de2ede97b56a1c1d28731',
  'assets/ResetPasswordView-DBZ0VY4g.css': 'fba119e03cc2b220405d7a7dcc04327aa3223265abc92dacd91703f9736f9a6a',
  'logo.svg': 'ce1f2ac07efcfff80904a9582578b5db8fdd14a3118a5c7b58f408ed06df18e1',
}

test('v9 shell and v5 password recovery remain immutable', () => {
  for (const [name, digest] of Object.entries(nativeCostV9Digests)) {
    assert.equal(
      createHash('sha256').update(readFileSync(resolve(assetsDirectory, NATIVE_COST_SHELL_DIRECTORY, name))).digest('hex'),
      digest,
    )
  }
  for (const [name, digest] of Object.entries(passwordRecoveryV5Digests)) {
    assert.equal(
      createHash('sha256').update(readFileSync(resolve(assetsDirectory, NATIVE_COST_PASSWORD_RECOVERY_DIRECTORY, name))).digest('hex'),
      digest,
    )
  }
})

const immutableAccountAdapterDigests = {
  'cn-provider-admin-v1/cn-provider-admin.js': 'ffb60fc74cdd331db6a67eadc85e0b49df1ce56b1fe19178d0089ffbc4498c68',
  'cn-provider-admin-v1/cn-provider-admin.css': '2ea8c1487d72dd9b0b0cf3ed1f7ed34a8b7ccbfba8ac0403296db6654c325851',
  'cn-provider-admin-v1/cnProviderAdminLeaf-BhlEtnfM.js': 'c6b786734406033b31cb34697b460d9bf2f7335fd9c1fb2b2eea983d9b911426',
  'cn-provider-admin-v1/AccountsView-CqGntwat.js': '66785f70d777c1729d385ab3b035ee7113de4915a85caa0b7727a1a2958ffe1f',
  'cn-provider-admin-v1/GroupsView-BoyyLsHH.js': 'af384328fbd5124ef1d822646c9c0a120bbeec650682ace296c99ec88a8f747e',
  'cn-provider-admin-v1/index-Cd_2Lby2.js': 'f094901e5edccc522f26981bfd20be673bb59daad279d2a68e8f00c0b572fe10',
  'cn-provider-admin-v1/index-DIg8WdAu.js': '903be8ec59946138a59540a9170c5a7d12020ed1b6d3677e3fe2393c9be8b050',
  'cn-provider-admin-v7/cn-provider-admin.js': 'ff717462e6d8df43f076cbb44f79205dd9d9d53503f1e92a3aee8fffa6404dfa',
  'cn-provider-admin-v7/cn-provider-admin.css': 'd9056413035642cb430801030fa95cc880d9524baed06020d710444e30ef1f92',
  'cn-provider-admin-v7/cnProviderAdminLeaf-BhkmpmLF.js': 'dc579499d5b907297393d4cd58242f9bfa7b459591578959ef7567538a771a3c',
}

test('v1 and v7 account adapters remain immutable while v8 is generated', () => {
  for (const [relativePath, digest] of Object.entries(immutableAccountAdapterDigests)) {
    assert.equal(
      createHash('sha256').update(readFileSync(resolve(assetsDirectory, relativePath))).digest('hex'),
      digest,
      relativePath,
    )
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
