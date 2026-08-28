import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { lstatSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import test from 'node:test'
import {
  changedPaths,
  evaluateApprovedBackportContents,
  evaluateChangedPaths,
  evaluatePreservedPaths,
  evaluatePreserveRegistryContinuity,
  evaluateProductReference,
  evaluateRecordedUpstreamSync,
  evaluateReleaseTag,
  inspectRecordedUpstreamSync,
  parseArguments,
  validateBaseline,
} from './verify-upstream-boundary.mjs'

const baseline = validateBaseline(
  JSON.parse(readFileSync(new URL('../upstream-baseline.json', import.meta.url), 'utf8')),
)
const repositoryRoot = new URL('../../', import.meta.url)

const redeemAndHTTPLifecyclePaths = [
  'CONTEXT.md',
  'backend/cmd/server/wire.go',
  'backend/cmd/server/wire_gen.go',
  'backend/internal/handler/admin/redeem_export_handler_test.go',
  'backend/internal/handler/gateway_handler.go',
  'backend/internal/handler/gateway_helper.go',
  'backend/internal/handler/openai_gateway_handler.go',
  'backend/internal/handler/openai_http_drain_slot_test.go',
  'backend/internal/handler/ops_flush_error_test.go',
  'backend/internal/pkg/gatewaytiming/timing.go',
  'backend/internal/pkg/gatewaytiming/timing_test.go',
  'backend/internal/repository/api_key_repo.go',
  'backend/internal/repository/api_key_last_used_monotonic_integration_test.go',
  'backend/internal/repository/redeem_cache.go',
  'backend/internal/repository/redeem_code_repo.go',
  'backend/internal/repository/redeem_code_repo_test.go',
  'backend/internal/repository/redeem_code_lifecycle_integration_test.go',
  'backend/internal/server/middleware/api_key_auth_last_used_async_test.go',
  'backend/internal/server/middleware/api_key_auth_google_test.go',
  'backend/internal/server/middleware/gateway_timing.go',
  'backend/internal/server/routes/gateway_timing_test.go',
  'backend/internal/service/api_key_last_used_writer.go',
  'backend/internal/service/api_key_last_used_benchmark_test.go',
  'backend/internal/service/api_key_service_touch_async_test.go',
  'backend/internal/service/gateway_http_timing.go',
  'backend/internal/service/gateway_http_timing_protocol_test.go',
  'backend/internal/service/gateway_http_timing_test.go',
  'backend/internal/service/openai_gateway_cc_pipeline.go',
  'backend/internal/service/openai_gateway_cc_lifecycle_test.go',
  'backend/internal/service/openai_http_drain.go',
  'backend/internal/service/openai_http_drain_test.go',
  'backend/internal/service/redeem_service.go',
  'backend/internal/service/redeem_mystery_box_test.go',
  'deploy/zero-one/benchmark-ttft.mjs',
  'deploy/zero-one/benchmark-ttft.test.mjs',
  'deploy/zero-one/recovered-frontend/console/assets/RedeemView-B-81-jXj.js',
  'deploy/zero-one/recovered-frontend/console/assets/RedeemView-Bn5PLb3-.js',
  'deploy/zero-one/recovered-frontend/console/assets/redeem-ttft-20260828',
  'deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-contract-20260828.js',
  'docs/adr/0008-redeem-and-http-stream-lifecycles.md',
  'frontend/src/api/redeem.ts',
  'frontend/src/features/redeem/cleanup.ts',
  'frontend/src/features/redeem/generation.ts',
  'frontend/src/features/redeem/__tests__/cleanup.spec.ts',
  'frontend/src/features/redeem/__tests__/generation.spec.ts',
  'frontend/src/features/redeem/__tests__/recoveredContract.spec.ts',
  'visual-regression/tests/redeem.behavior.spec.ts',
].sort()

function gitIn(cwd, args) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
}

function createRecordedSyncRepository(
  overwriteProtected,
  {
    currentPreserved = true,
    postMergeProtectedChange = false,
    productPreserved = false,
    preservedPath = 'backend/internal/service/affiliate_service.go',
  } = {},
) {
  const repository = mkdtempSync(resolve(tmpdir(), 'zero-one-recorded-sync-'))
  const affiliatePath = preservedPath
  const oldCommit = '1'.repeat(40)
  gitIn(repository, ['init', '--quiet', '--initial-branch=product'])
  gitIn(repository, ['config', 'user.name', 'Upgrade Guard Test'])
  gitIn(repository, ['config', 'user.email', 'upgrade-guard@example.invalid'])
  mkdirSync(resolve(repository, '.github'), { recursive: true })
  mkdirSync(resolve(repository, 'backend/internal/service'), { recursive: true })
  const oldBaseline = {
    schema_version: productPreserved ? 4 : 3,
    repository: baseline.repository,
    release: 'v0.1.178',
    commit: oldCommit,
  }
  if (productPreserved) oldBaseline.preserve_on_upstream_sync = [affiliatePath]
  writeFileSync(
    resolve(repository, '.github/upstream-baseline.json'),
    `${JSON.stringify(oldBaseline)}\n`,
  )
  writeFileSync(resolve(repository, affiliatePath), 'package service\n')
  gitIn(repository, ['add', '.'])
  gitIn(repository, ['commit', '--quiet', '-m', 'shared base'])
  const baseCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])

  writeFileSync(resolve(repository, 'product.txt'), 'product overlay\n')
  gitIn(repository, ['add', 'product.txt'])
  gitIn(repository, ['commit', '--quiet', '-m', 'pre-upgrade product'])
  const productCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])

  gitIn(repository, ['switch', '--quiet', '--create', 'upstream', baseCommit])
  writeFileSync(resolve(repository, 'upstream.txt'), 'new upstream release\n')
  if (overwriteProtected) {
    writeFileSync(resolve(repository, affiliatePath), 'package service\n\n// overwritten upstream\n')
  }
  gitIn(repository, ['add', '.'])
  gitIn(repository, ['commit', '--quiet', '-m', 'new upstream release'])
  const upstreamCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])

  gitIn(repository, ['switch', '--quiet', 'product'])
  gitIn(repository, ['merge', '--quiet', '--no-ff', '-m', 'sync upstream', 'upstream'])
  const mergeCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])
  const candidate = structuredClone(baseline)
  candidate.commit = upstreamCommit
  candidate.preserve_on_upstream_sync = currentPreserved ? [affiliatePath] : []
  candidate.upstream_sync = {
    previous_release: 'v0.1.178',
    previous_commit: oldCommit,
    product_commit: productCommit,
    merge_commit: mergeCommit,
  }
  writeFileSync(
    resolve(repository, '.github/upstream-baseline.json'),
    `${JSON.stringify(candidate, null, 2)}\n`,
  )
  gitIn(repository, ['add', '.github/upstream-baseline.json'])
  gitIn(repository, ['commit', '--quiet', '-m', 'record sync attestation'])
  if (postMergeProtectedChange) {
    writeFileSync(resolve(repository, affiliatePath), 'package service\n\n// later product work\n')
    gitIn(repository, ['add', affiliatePath])
    gitIn(repository, ['commit', '--quiet', '-m', 'later product change'])
  }
  const headCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])
  return { affiliatePath, baseline: candidate, headCommit, repository }
}

function readRepositoryPath(path) {
  const url = new URL(path, repositoryRoot)
  const stat = lstatSync(url)
  return {
    content: readFileSync(url),
    isRegularFile: stat.isFile(),
    mode: stat.mode & 0o111 ? '100755' : '100644',
  }
}

function baselineWithApprovedBackport() {
  const value = structuredClone(baseline)
  const files = {}
  // Product runtime Dockerfiles now have permanent ownership. Keep the fixture
  // on three untouched upstream files without weakening that ownership.
  for (const path of ['backend/.golangci.yml', 'backend/Dockerfile', 'backend/Makefile']) {
    const file = readRepositoryPath(path)
    files[path] = {
      sha256: createHash('sha256').update(file.content).digest('hex'),
      mode: file.mode,
    }
  }
  value.approved_backports = [
    {
      source_repository: value.repository,
      source_pull_request: 5639,
      source_commit: 'f'.repeat(40),
      valid_for_release: value.release,
      exit_condition:
        'Remove when the first stable upstream release containing the equivalent change becomes the baseline.',
      files,
    },
  ]
  return validateBaseline(value)
}

const approvedLegacyHotfixPaths = [
  'backend/cmd/server/VERSION',
  'backend/go.mod',
  'backend/go.sum',
  'backend/internal/handler/auth_current_user_test.go',
  'backend/internal/handler/admin/admin_basic_handlers_test.go',
  'backend/internal/handler/admin/admin_service_stub_test.go',
  'backend/internal/handler/admin/group_handler.go',
  'backend/internal/middleware/rate_limiter_integration_test.go',
  'backend/internal/repository/api_key_repo_profit_projection_integration_test.go',
  'backend/internal/repository/auth_cache_invalidation_profit_integration_test.go',
  'backend/internal/repository/integration_harness_test.go',
  'backend/internal/repository/migrations_schema_integration_test.go',
  'backend/internal/server/routes/auth_rate_limit_integration_test.go',
  'backend/internal/service/admin_group.go',
  'backend/internal/service/admin_group_duplicate.go',
  'backend/internal/service/admin_group_duplicate_test.go',
  'backend/internal/service/admin_group_model_pricing_test.go',
  'backend/internal/service/api_key_auth_cache_group_pricing_test.go',
  'backend/internal/service/api_key_auth_cache_impl.go',
  'backend/internal/service/api_key_auth_cache_profit_test.go',
  'backend/internal/service/api_key_service_cache_test.go',
  'backend/internal/service/batch_image_public.go',
  'backend/internal/service/batch_image_public_test.go',
  'backend/internal/service/billing_service.go',
  'backend/internal/service/billing_service_unified_test.go',
  'backend/internal/service/billing_cache_service_user_platform_quota_test.go',
  'backend/internal/service/model_pricing_resolver.go',
  'backend/internal/service/openai_model_mapping_test.go',
  'backend/internal/service/openai_gateway_record_usage_test.go',
  'backend/internal/service/channel_pricing_multipliers_test.go',
  'backend/internal/service/content_moderation.go',
  'backend/internal/service/content_moderation_cyber_test.go',
  'backend/internal/service/content_moderation_runtime_cache_test.go',
  'backend/internal/service/grok_oauth_service_test.go',
  'backend/internal/service/gateway_scheduling.go',
  'backend/internal/service/sticky_session_test.go',
  'backend/internal/service/usage_cleanup_service_test.go',
  'backend/migrations/222_group_pricing_auth_cache_invalidation.sql',
  'backend/migrations/group_pricing_auth_cache_migration_test.go',
].sort()

test('assigns additive surfaces to the five named overlays', () => {
  assert.deepEqual(
    evaluateChangedPaths(
      [
        '.github/workflows/zero-one-publish.yml',
        'README.md',
        'deploy/zero-one/compose.yml',
        'frontend/src/style.css',
        'landing/src/App.tsx',
        'artifacts/design-qa/latest-desktop-top-1440x900.png',
        'assets/posters/zero-one-api-pricing-poster-v1.png',
      ],
      baseline,
    ),
    [],
  )
})

test('permanently retains redeem, HTTP timing, and asynchronous metadata lifecycles', () => {
  assert.deepEqual(evaluateChangedPaths(redeemAndHTTPLifecyclePaths, baseline), [])
  for (const path of redeemAndHTTPLifecyclePaths) {
    assert.ok(baseline.preserve_on_upstream_sync.includes(path), `${path} must be permanently retained`)
    const owners = baseline.overlays.filter(({ paths }) => paths.some((rule) =>
      rule.endsWith('/') ? path.startsWith(rule) : path === rule))
    const expectedOwner = path.startsWith('deploy/') ? 'Supported Preview'
      : path.startsWith('visual-regression/') ? 'Visual Regression'
      : path.startsWith('frontend/src/features/') ? 'Console Skin' : 'Public Capabilities'
    assert.deepEqual(owners.map(({ owner }) => owner), [expectedOwner], `${path} must have one owner`)
    if (path.startsWith('backend/') || path === 'frontend/src/api/redeem.ts') {
      assert.ok(owners[0].paths.includes(path), `${path} needs an exact owner entry, not a directory exemption`)
    }
  }
  assert.deepEqual(
    evaluatePreservedPaths(redeemAndHTTPLifecyclePaths, baseline),
    redeemAndHTTPLifecyclePaths.map((path) =>
      `${path} differs from the pre-upgrade product ref; restore it and port upstream changes separately`),
    'an upstream sync must reject overwriting every registered lifecycle file',
  )
})

test('rejects recorded upstream merges that overwrite redeem, TTFT, or metadata implementations', (context) => {
  for (const path of [
    'backend/internal/service/redeem_service.go',
    'backend/internal/service/gateway_http_timing.go',
    'backend/internal/service/api_key_last_used_writer.go',
  ]) {
    const fixture = createRecordedSyncRepository(true, { productPreserved: true, preservedPath: path })
    context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
    assert.deepEqual(inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository), [
      `${path} differs from the pre-upgrade product ref; restore it and port upstream changes separately`,
    ], path)
  }
})

test('promotes only the gateway handler hotfix while preserving the remaining exit condition', () => {
  const hotfix = baseline.legacy_hotfixes.find(({ name }) =>
    name === 'approved-v0.1.179-remove-unconditional-sticky-debug-logs')
  assert.deepEqual(hotfix.paths, ['backend/internal/service/gateway_scheduling.go'])
  assert.equal(hotfix.exit_condition,
    'Remove this hotfix when the first stable upstream release removes or explicitly gates the equivalent per-request sticky-session debug logs.')
  assert.ok(baseline.preserve_on_upstream_sync.includes('backend/internal/handler/gateway_handler.go'))
  assert.equal(baseline.legacy_hotfixes.some(({ paths }) =>
    paths.includes('backend/internal/handler/gateway_handler.go')), false)
})

test('keeps the user redeem API exception exact and rejects neighboring backend/API paths', () => {
  assert.deepEqual(baseline.immutable_exceptions.find(({ path }) => path === 'frontend/src/api/redeem.ts'), {
    name: 'public-capabilities-user-redeem-api',
    owner: 'Public Capabilities',
    path: 'frontend/src/api/redeem.ts',
    immutable_path: 'frontend/src/api/',
  })
  assert.deepEqual(evaluateChangedPaths([
    'backend/internal/service/openai_http_drain_unreviewed.go',
    'frontend/src/api/redeem-unreviewed.ts',
  ], baseline), [
    'backend/internal/service/openai_http_drain_unreviewed.go is outside the approved overlay registry',
    'frontend/src/api/redeem-unreviewed.ts modifies immutable upstream path frontend/src/api/',
  ])
})

test('retains critical affiliate attribution and upgrade-guard files across upstream syncs', () => {
  const legacyPreservedPaths = [
      '.github/scripts/ui-baseline.json',
      '.github/scripts/verify-publish-source.mjs',
      '.github/scripts/verify-publish-source.test.mjs',
      '.github/scripts/verify-ui-boundary.mjs',
      '.github/scripts/verify-ui-boundary.test.mjs',
      '.github/scripts/verify-upgrade-readiness.mjs',
      '.github/scripts/verify-upgrade-readiness.test.mjs',
      '.github/scripts/verify-upstream-boundary.mjs',
      '.github/scripts/verify-upstream-boundary.test.mjs',
      '.github/upstream-baseline.json',
      '.github/workflows/zero-one-ci.yml',
      '.github/workflows/zero-one-publish.yml',
      'DEV_GUIDE.md',
      'backend/internal/handler/admin/affiliate_handler.go',
      'backend/internal/handler/admin/affiliate_handler_test.go',
      'backend/internal/handler/auth_email_oauth_test.go',
      'backend/internal/handler/page_handler.go',
      'backend/internal/handler/page_handler_test.go',
      'backend/internal/repository/affiliate_repo.go',
      'backend/internal/repository/affiliate_repo_integration_test.go',
      'backend/internal/repository/affiliate_repo_test.go',
      'backend/internal/repository/affiliate_manual_binding_migration_integration_test.go',
      'backend/internal/server/routes/admin.go',
      'backend/internal/server/routes/affiliate_routes_test.go',
      'backend/internal/service/affiliate_service.go',
      'backend/internal/service/affiliate_service_test.go',
      'backend/internal/service/payment_fulfillment.go',
      'backend/internal/service/payment_fulfillment_test.go',
      'backend/migrations/229_affiliate_manual_binding.sql',
      'backend/migrations/affiliate_manual_binding_migration_test.go',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.css',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.js',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-console-parity-v1.css',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-console-parity-v1.js',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.css',
      'deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.js',
      'deploy/zero-one/recovered-frontend/console/index.html',
      'deploy/zero-one/test-live-routing.sh',
      'deploy/zero-one/test-routing.sh',
      'docs/OPERATIONS.md',
      'docs/TECHNICAL-PLAN.md',
      'docs/adr/0006-admin-affiliate-attribution.md',
      'frontend/src/api/__tests__/admin.affiliates.spec.ts',
      'frontend/src/api/admin/affiliates.ts',
      'frontend/src/components/layout/AppHeader.vue',
      'frontend/src/components/layout/AppLayout.vue',
      'frontend/src/components/layout/AppSidebar.vue',
      'frontend/src/components/layout/TablePageLayout.vue',
      'frontend/src/components/layout/__tests__/AppHeader.affiliateTitle.spec.ts',
      'frontend/src/components/layout/__tests__/AppSidebar.spec.ts',
      'frontend/src/i18n/locales/en/admin/overview.ts',
      'frontend/src/i18n/locales/zh/admin/overview.ts',
      'frontend/src/style.css',
      'frontend/src/styles/__tests__/consoleSkin.spec.ts',
      'frontend/src/views/user/AffiliateView.vue',
      'frontend/src/views/user/__tests__/AffiliateView.spec.ts',
      'frontend/src/views/user/__tests__/KeysView.spec.ts',
      'frontend/src/views/admin/SettingsView.vue',
      'frontend/src/views/admin/__tests__/SettingsView.spec.ts',
      'frontend/src/views/admin/affiliates/AdminAffiliateCustomerDetail.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateCustomers.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateInvitesView.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateRebatesView.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateRecordsTable.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateSettingsPanel.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateTransfersView.vue',
      'frontend/src/views/admin/affiliates/AdminAffiliateWorkspace.vue',
      'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateCustomerDetail.spec.ts',
      'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateCustomers.spec.ts',
      'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateRecordsTable.spec.ts',
      'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateSettingsPanel.spec.ts',
      'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateWorkspace.spec.ts',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-affiliate-customers.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-announcement-editor.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-channel-status-v1.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-channel-status-v2.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-dashboard-date-picker.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-model-plaza-pricing.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-redeem-benefit.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-redeem-mystery-box.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-shell-dark-collapsed.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-shell-light-expanded.png',
      'visual-regression/tests/__screenshots__/chromium-desktop/console-user-redeem.png',
      'visual-regression/tests/__screenshots__/chromium-mobile/console-affiliate-customers.png',
      'visual-regression/tests/console.visual.spec.ts',
      'visual-regression/tests/fixtures/api.ts',
  ]
  const navigationPreservedPaths = [
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-community-qr-v1.js',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-floating-panels-v1.js',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-login-recovery-v2.js',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-navigation-reconciliation-v1.js',
    'docs/adr/0004-approved-ui-snapshot-at-edge.md',
    'frontend/src/App.vue',
    'frontend/src/__tests__/consoleShellOwnership.spec.ts',
    'frontend/src/router/index.ts',
    'frontend/src/router/meta.d.ts',
    'frontend/src/features/prompt-audit/PromptAuditView.vue',
    'frontend/src/views/admin/AccountsView.vue',
    'frontend/src/views/admin/AnnouncementsView.vue',
    'frontend/src/views/admin/AuditLogView.vue',
    'frontend/src/views/admin/ChannelMonitorView.vue',
    'frontend/src/views/admin/ChannelsView.vue',
    'frontend/src/views/admin/DashboardView.vue',
    'frontend/src/views/admin/GroupsView.vue',
    'frontend/src/views/admin/ops/OpsDashboard.vue',
    'frontend/src/views/admin/PromoCodesView.vue',
    'frontend/src/views/admin/ProxiesView.vue',
    'frontend/src/views/admin/RedeemView.vue',
    'frontend/src/views/admin/RiskControlView.vue',
    'frontend/src/views/admin/SubscriptionsView.vue',
    'frontend/src/views/admin/UsageView.vue',
    'frontend/src/views/admin/UsersView.vue',
    'frontend/src/views/admin/orders/AdminOrdersView.vue',
    'frontend/src/views/admin/orders/AdminPaymentDashboardView.vue',
    'frontend/src/views/admin/orders/AdminPaymentPlansView.vue',
    'frontend/src/views/user/AvailableChannelsView.vue',
    'frontend/src/views/user/BatchImageGuideView.vue',
    'frontend/src/views/user/ChannelStatusV1View.vue',
    'frontend/src/views/user/ChannelStatusV2View.vue',
    'frontend/src/views/user/CustomPageView.vue',
    'frontend/src/views/user/DashboardView.vue',
    'frontend/src/views/user/KeysView.vue',
    'frontend/src/views/user/PaymentQRCodeView.vue',
    'frontend/src/views/user/PaymentView.vue',
    'frontend/src/views/user/ProfileView.vue',
    'frontend/src/views/user/RedeemView.vue',
    'frontend/src/views/user/SubscriptionsView.vue',
    'frontend/src/views/user/UsageView.vue',
    'frontend/src/views/user/UserOrdersView.vue',
  ]
  const settingsAndRechargePreservedPaths = [
    'backend/internal/service/channel_monitor_quota_mode_test.go',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-actions-v1.css',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-actions-v1.js',
    'deploy/zero-one/safe-edge-switch.sh',
    'deploy/zero-one/test-safe-edge-switch.sh',
    'frontend/src/components/user/dashboard/UserDashboardQuickActions.vue',
    'frontend/src/components/user/dashboard/__tests__/UserDashboardQuickActions.spec.ts',
    'frontend/src/i18n/locales/en/dashboard.ts',
    'frontend/src/i18n/locales/en/misc.ts',
    'frontend/src/i18n/locales/zh/dashboard.ts',
    'frontend/src/i18n/locales/zh/misc.ts',
    'frontend/src/stores/__tests__/adminSettings.spec.ts',
    'frontend/src/stores/__tests__/app.spec.ts',
    'frontend/src/stores/adminSettings.ts',
    'frontend/src/stores/app.ts',
    'frontend/src/utils/__tests__/online-recharge.spec.ts',
    'frontend/src/utils/online-recharge.ts',
    'frontend/src/views/user/__tests__/CustomPageView.spec.ts',
    'frontend/src/views/user/__tests__/RedeemView.spec.ts',
  ].sort()
  const actualPaths = baseline.preserve_on_upstream_sync
  assert.deepEqual(
    actualPaths.filter((path) => legacyPreservedPaths.includes(path)),
    legacyPreservedPaths,
  )
  assert.deepEqual(
    actualPaths.filter((path) => navigationPreservedPaths.includes(path)),
    navigationPreservedPaths,
  )
  assert.deepEqual(
    actualPaths.filter((path) => settingsAndRechargePreservedPaths.includes(path)).sort(),
    settingsAndRechargePreservedPaths,
  )
  assert.ok(actualPaths.length >= legacyPreservedPaths.length + navigationPreservedPaths.length)
  assert.deepEqual(
    evaluatePreservedPaths(
      [
        'backend/internal/service/affiliate_service.go',
        'backend/internal/service/payment_order.go',
      ],
      baseline,
    ),
    [
      'backend/internal/service/affiliate_service.go differs from the pre-upgrade product ref; restore it and port upstream changes separately',
    ],
  )
  assert.deepEqual(
    evaluateChangedPaths(
      [
        'backend/internal/service/affiliate_service.go',
        'backend/internal/service/payment_order.go',
      ],
      baseline,
    ),
    ['backend/internal/service/payment_order.go is outside the approved overlay registry'],
  )
})

test('parses optional product-ref preservation checks', () => {
  assert.deepEqual(parseArguments([]), { includeWorktree: false, productRef: null })
  assert.deepEqual(parseArguments(['--worktree', '--product-ref', 'product-tip']), {
    includeWorktree: true,
    productRef: 'product-tip',
  })
  assert.throws(() => parseArguments(['--product-ref']), /requires a git ref/)
  assert.throws(() => parseArguments(['--unknown']), /unknown argument/)
})

test('blocks a protected affiliate change relative to a real pre-upgrade commit', (context) => {
  const repository = mkdtempSync(resolve(tmpdir(), 'zero-one-product-ref-'))
  context.after(() => rmSync(repository, { recursive: true, force: true }))
  gitIn(repository, ['init', '--quiet'])
  gitIn(repository, ['config', 'user.name', 'Upgrade Guard Test'])
  gitIn(repository, ['config', 'user.email', 'upgrade-guard@example.invalid'])

  const affiliatePath = 'backend/internal/service/affiliate_service.go'
  mkdirSync(resolve(repository, 'backend/internal/service'), { recursive: true })
  writeFileSync(resolve(repository, affiliatePath), 'package service\n')
  gitIn(repository, ['add', '--', affiliatePath])
  gitIn(repository, ['commit', '--quiet', '-m', 'pre-upgrade product'])
  const productCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])

  writeFileSync(resolve(repository, affiliatePath), 'package service\n\n// overwritten upstream\n')
  gitIn(repository, ['add', '--', affiliatePath])
  gitIn(repository, ['commit', '--quiet', '-m', 'upstream sync overwrites affiliate'])
  const headCommit = gitIn(repository, ['rev-parse', 'HEAD^{commit}'])

  assert.notEqual(productCommit, headCommit)
  assert.deepEqual(evaluateProductReference(productCommit, headCommit), [])
  const productChanges = changedPaths(productCommit, false, repository)
  assert.deepEqual(productChanges, [affiliatePath])
  assert.deepEqual(
    evaluatePreservedPaths(productChanges, { preserve_on_upstream_sync: [affiliatePath] }),
    [
      `${affiliatePath} differs from the pre-upgrade product ref; restore it and port upstream changes separately`,
    ],
  )
})

test('rejects same-HEAD product refs without disabling ordinary registry checks', () => {
  const headCommit = 'a'.repeat(40)
  assert.deepEqual(evaluateProductReference(headCommit, headCommit), [
    `product ref ${headCommit} resolves to current HEAD; provide the immutable pre-upgrade product commit`,
  ])
  assert.deepEqual(evaluateProductReference(null, headCommit), [])
  assert.deepEqual(parseArguments([]), { includeWorktree: false, productRef: null })
})

test('accepts a recorded merge with a real ancestor product ref and no protected overlap', (context) => {
  const fixture = createRecordedSyncRepository(false)
  context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
  assert.deepEqual(
    inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository),
    [],
  )
})

test('rejects a recorded merge that overwrites a protected affiliate file', (context) => {
  const fixture = createRecordedSyncRepository(true, { productPreserved: true })
  context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
  assert.deepEqual(
    inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository),
    [
      `${fixture.affiliatePath} differs from the pre-upgrade product ref; restore it and port upstream changes separately`,
    ],
  )
})

test('does not apply post-sync preserve additions retroactively to a schema v3 bootstrap', (context) => {
  const fixture = createRecordedSyncRepository(true)
  context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
  assert.deepEqual(
    inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository),
    [],
  )
})

test('rejects preserve-list deletion even when it hides the overwritten affiliate path', (context) => {
  const fixture = createRecordedSyncRepository(true, {
    currentPreserved: false,
    productPreserved: true,
  })
  context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
  assert.deepEqual(
    inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository),
    [
      `${fixture.affiliatePath} was protected at the pre-upgrade product ref and cannot be removed during upstream sync`,
      `${fixture.affiliatePath} differs from the pre-upgrade product ref; restore it and port upstream changes separately`,
    ],
  )
})

test('allows new preserve entries but rejects deleting an existing entry', () => {
  const productBaseline = {
    schema_version: 4,
    preserve_on_upstream_sync: ['frontend/src/views/user/AffiliateView.vue'],
  }
  assert.deepEqual(
    evaluatePreserveRegistryContinuity(
      {
        preserve_on_upstream_sync: [
          'frontend/src/views/user/AffiliateView.vue',
          'backend/internal/service/affiliate_service.go',
        ],
        upstream_sync: { product_commit: 'a'.repeat(40) },
      },
      productBaseline,
    ),
    [],
  )
  assert.deepEqual(
    evaluatePreserveRegistryContinuity(
      {
        preserve_on_upstream_sync: ['backend/internal/service/affiliate_service.go'],
        upstream_sync: { product_commit: 'a'.repeat(40) },
      },
      productBaseline,
    ),
    [
      'frontend/src/views/user/AffiliateView.vue was protected at the pre-upgrade product ref and cannot be removed during upstream sync',
    ],
  )
})

test('only schema v3 may bootstrap without a preserve registry', () => {
  const current = {
    preserve_on_upstream_sync: ['backend/internal/service/affiliate_service.go'],
    upstream_sync: { product_commit: 'a'.repeat(40) },
  }
  assert.deepEqual(evaluatePreserveRegistryContinuity(current, { schema_version: 3 }), [])
  assert.deepEqual(evaluatePreserveRegistryContinuity(current, { schema_version: 4 }), [
    `product commit ${'a'.repeat(40)} has an invalid preserve_on_upstream_sync registry`,
  ])
})

test('ignores normal protected product work committed after the recorded merge', (context) => {
  const fixture = createRecordedSyncRepository(false, {
    postMergeProtectedChange: true,
    productPreserved: true,
  })
  context.after(() => rmSync(fixture.repository, { recursive: true, force: true }))
  assert.deepEqual(
    inspectRecordedUpstreamSync(fixture.baseline, fixture.headCommit, fixture.repository),
    [],
  )
})

test('fails closed for missing, malformed, self-HEAD, and stale sync metadata', () => {
  const missing = structuredClone(baseline)
  delete missing.upstream_sync
  assert.throws(() => validateBaseline(missing), /upstream_sync metadata is required/)

  const malformed = structuredClone(baseline)
  malformed.upstream_sync.product_commit = ''
  assert.throws(() => validateBaseline(malformed), /product_commit must be a lowercase/)

  const selfMerge = structuredClone(baseline)
  selfMerge.upstream_sync.product_commit = selfMerge.upstream_sync.merge_commit
  assert.throws(() => validateBaseline(selfMerge), /product_commit must differ from merge_commit/)

  const headCommit = 'a'.repeat(40)
  const selfHead = structuredClone(baseline)
  selfHead.upstream_sync.product_commit = headCommit
  const violations = evaluateRecordedUpstreamSync({
    baseline: selfHead,
    headCommit,
    mergeParents: [selfHead.upstream_sync.product_commit, selfHead.commit],
    mergeIsAncestor: false,
    productBaseline: {
      repository: selfHead.repository,
      release: selfHead.upstream_sync.previous_release,
      commit: selfHead.upstream_sync.previous_commit,
    },
    preservedChanges: [],
  })
  assert.match(violations.join('\n'), /resolves to current HEAD/)
  assert.match(violations.join('\n'), /is not an ancestor of current HEAD/)
})

test('keeps temporary release-quality files in expiring legacy hotfix blocks', () => {
  assert.deepEqual(evaluateChangedPaths(approvedLegacyHotfixPaths, baseline), [])
  assert.deepEqual(
    baseline.legacy_hotfixes.flatMap((hotfix) => hotfix.paths).sort(),
    approvedLegacyHotfixPaths,
  )
  for (const hotfix of baseline.legacy_hotfixes) {
    assert.match(hotfix.exit_condition, /stable upstream release/)
  }
})

test('rejects adjacent backend and unrelated upstream changes', () => {
  assert.deepEqual(
    evaluateChangedPaths(
      [
        'backend/internal/service/channel.go',
        'backend/internal/server/routes/payment.go',
        'backend/migrations/223_unreviewed.sql',
        'frontend/src/views/user/UnreviewedView.vue',
      ],
      baseline,
    ),
    [
      'backend/internal/server/routes/payment.go is outside the approved overlay registry',
      'backend/internal/service/channel.go is outside the approved overlay registry',
      'backend/migrations/223_unreviewed.sql is outside the approved overlay registry',
      'frontend/src/views/user/UnreviewedView.vue is outside the approved overlay registry',
    ],
  )
})

test('allows named immutable exceptions while adjacent seam files still fail', () => {
  assert.deepEqual(
    evaluateChangedPaths(
      [
        'frontend/src/api/admin/settings.ts',
        'frontend/src/api/admin/affiliates.ts',
        'frontend/src/api/__tests__/admin.affiliates.spec.ts',
        'frontend/src/api/admin/redeem.ts',
        'frontend/src/api/__tests__/admin.redeem.spec.ts',
        'frontend/src/types/index.ts',
        'frontend/src/api/admin/users.ts',
        'frontend/src/types/admin.ts',
        'frontend/vite.config.ts',
        'frontend/src/router/index.ts',
      ],
      baseline,
    ),
    [
      'frontend/src/api/admin/users.ts modifies immutable upstream path frontend/src/api/',
      'frontend/src/types/admin.ts modifies immutable upstream path frontend/src/types/',
    ],
  )
  assert.deepEqual(
    baseline.immutable_exceptions,
    [
      {
        name: 'supported-preview-frontend-security-manifest',
        owner: 'Supported Preview',
        path: 'frontend/package.json',
        immutable_path: 'frontend/package.json',
      },
      {
        name: 'supported-preview-frontend-security-lockfile',
        owner: 'Supported Preview',
        path: 'frontend/pnpm-lock.yaml',
        immutable_path: 'frontend/pnpm-lock.yaml',
      },
      {
        name: 'console-skin-stable-console-shell-router',
        owner: 'Console Skin',
        path: 'frontend/src/router/index.ts',
        immutable_path: 'frontend/src/router/index.ts',
      },
      {
        name: 'public-capabilities-admin-settings-api',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/admin/settings.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'public-capabilities-admin-affiliates-api',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/admin/affiliates.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'public-capabilities-admin-affiliates-api-test',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/__tests__/admin.affiliates.spec.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'public-capabilities-shared-contract-types',
        owner: 'Public Capabilities',
        path: 'frontend/src/types/index.ts',
        immutable_path: 'frontend/src/types/',
      },
      {
        name: 'public-capabilities-redeem-api',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/admin/redeem.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'public-capabilities-redeem-api-test',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/__tests__/admin.redeem.spec.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'console-skin-vite-config',
        owner: 'Console Skin',
        path: 'frontend/vite.config.ts',
        immutable_path: 'frontend/vite.config.ts',
      },
      {
        name: 'supported-preview-v179-channel-pricing-api-compatibility',
        owner: 'Supported Preview',
        path: 'frontend/src/api/admin/channels.ts',
        immutable_path: 'frontend/src/api/',
      },
      {
        name: 'public-capabilities-user-redeem-api',
        owner: 'Public Capabilities',
        path: 'frontend/src/api/redeem.ts',
        immutable_path: 'frontend/src/api/',
      },
    ],
  )
})

test('keeps security manifests protected without pretending they are upstream backports', () => {
  const approvedPaths = baseline.approved_backports.flatMap((backport) => Object.keys(backport.files))
  const supportedPreview = baseline.overlays.find(({ owner }) => owner === 'Supported Preview')

  assert.deepEqual(evaluateChangedPaths(approvedPaths, baseline), [])
  assert.deepEqual(evaluateApprovedBackportContents(baseline, readRepositoryPath), [])
  assert.ok(baseline.immutable_paths.includes('frontend/pnpm-lock.yaml'))
  assert.ok(supportedPreview.paths.includes('frontend/package.json'))
  assert.ok(supportedPreview.paths.includes('frontend/pnpm-lock.yaml'))
  assert.ok(supportedPreview.paths.includes('frontend/pnpm-workspace.yaml'))
  assert.deepEqual(baseline.approved_backports, [])
})

test('requires the stable tag to peel to the pinned baseline commit', () => {
  assert.deepEqual(evaluateReleaseTag(baseline, baseline.commit), [])
  assert.deepEqual(evaluateReleaseTag(baseline, 'f'.repeat(40)), [
    `upstream release tag ${baseline.release} peels to ${'f'.repeat(40)}, expected ${baseline.commit}`,
  ])
})

test('rejects duplicate owners, overlapping paths, and unbound immutable exceptions', () => {
  const duplicateOwner = structuredClone(baseline)
  duplicateOwner.overlays[1].owner = duplicateOwner.overlays[0].owner
  assert.throws(() => validateBaseline(duplicateOwner), /duplicate overlay owner/)

  const overlappingPath = structuredClone(baseline)
  overlappingPath.overlays[2].paths.push('landing/src/App.tsx')
  assert.throws(() => validateBaseline(overlappingPath), /overlay path overlap/)

  const globPath = structuredClone(baseline)
  globPath.overlays[0].paths[0] = 'frontend/src/**/*.vue'
  assert.throws(() => validateBaseline(globPath), /path is invalid/)

  const wrongOwner = structuredClone(baseline)
  wrongOwner.immutable_exceptions.find((exception) =>
    exception.name === 'public-capabilities-admin-settings-api',
  ).owner = 'Console Skin'
  assert.throws(() => validateBaseline(wrongOwner), /must bind to exactly one path owned by Console Skin/)

  const directoryException = structuredClone(baseline)
  directoryException.immutable_exceptions.find((exception) =>
    exception.name === 'public-capabilities-admin-settings-api',
  ).path = 'frontend/src/api/admin/'
  assert.throws(() => validateBaseline(directoryException), /path is invalid/)

  const duplicatePreservedPath = structuredClone(baseline)
  duplicatePreservedPath.preserve_on_upstream_sync.push(
    duplicatePreservedPath.preserve_on_upstream_sync[0],
  )
  assert.throws(
    () => validateBaseline(duplicatePreservedPath),
    /duplicate preserve_on_upstream_sync path/,
  )

  const preservedDirectory = structuredClone(baseline)
  preservedDirectory.preserve_on_upstream_sync[0] = 'backend/internal/service/'
  assert.throws(() => validateBaseline(preservedDirectory), /path is invalid/)

  const preservedGlob = structuredClone(baseline)
  preservedGlob.preserve_on_upstream_sync[0] = 'backend/internal/service/affiliate_*.go'
  assert.throws(() => validateBaseline(preservedGlob), /path is invalid/)

  const unownedPreservedPath = structuredClone(baseline)
  unownedPreservedPath.preserve_on_upstream_sync[0] = 'backend/internal/service/payment_order.go'
  assert.throws(
    () => validateBaseline(unownedPreservedPath),
    /must belong to exactly one overlay/,
  )
})

test('rejects changed, missing, and non-regular approved backport files', () => {
  const approvedBaseline = baselineWithApprovedBackport()
  const changed = evaluateApprovedBackportContents(approvedBaseline, (path) => {
    const file = readRepositoryPath(path)
    return path === 'backend/Dockerfile'
      ? { ...file, content: Buffer.concat([file.content, Buffer.from('\n')]) }
      : file
  })
  assert.equal(changed.length, 1)
  assert.match(changed[0], /backend\/Dockerfile content mismatch/)

  const missing = evaluateApprovedBackportContents(approvedBaseline, (path) => {
    if (path === 'backend/Makefile') throw new Error('missing')
    return readRepositoryPath(path)
  })
  assert.deepEqual(missing, ['approved backport backend/Makefile is missing'])

  const nonRegular = evaluateApprovedBackportContents(approvedBaseline, (path) => {
    const file = readRepositoryPath(path)
    return path === 'backend/.golangci.yml' ? { ...file, isRegularFile: false } : file
  })
  assert.deepEqual(nonRegular, ['approved backport backend/.golangci.yml is not a regular file'])

  const executable = evaluateApprovedBackportContents(approvedBaseline, (path) => {
    const file = readRepositoryPath(path)
    return path === 'backend/.golangci.yml' ? { ...file, mode: '100755' } : file
  })
  assert.deepEqual(executable, [
    'approved backport backend/.golangci.yml mode mismatch: expected 100644, got 100755',
  ])
})

test('rejects stale or malformed approved backport metadata', () => {
  const approvedBaseline = baselineWithApprovedBackport()
  const clone = () => structuredClone(approvedBaseline)

  const stale = clone()
  stale.release = 'v0.1.176'
  assert.throws(() => validateBaseline(stale), /valid_for_release must match/)

  const wrongRepository = clone()
  wrongRepository.approved_backports[0].source_repository = 'example/other'
  assert.throws(() => validateBaseline(wrongRepository), /source_repository must match/)

  const badPullRequest = clone()
  badPullRequest.approved_backports[0].source_pull_request = 0
  assert.throws(() => validateBaseline(badPullRequest), /source_pull_request must be a positive integer/)

  const badCommit = clone()
  badCommit.approved_backports[0].source_commit = 'ABC'
  assert.throws(() => validateBaseline(badCommit), /source_commit must be a lowercase 40-character SHA/)

  const badHash = clone()
  badHash.approved_backports[0].files['backend/Dockerfile'].sha256 = '0'
  assert.throws(() => validateBaseline(badHash), /sha256 is invalid: backend\/Dockerfile/)

  const badMode = clone()
  badMode.approved_backports[0].files['backend/Dockerfile'].mode = '100600'
  assert.throws(() => validateBaseline(badMode), /mode is invalid: backend\/Dockerfile/)

  const duplicate = clone()
  duplicate.approved_backports.push(structuredClone(duplicate.approved_backports[0]))
  assert.throws(() => validateBaseline(duplicate), /duplicate approved backport path/)

  const traversal = clone()
  traversal.approved_backports[0].files['../backend/go.mod'] = {
    sha256: '0'.repeat(64),
    mode: '100644',
  }
  assert.throws(() => validateBaseline(traversal), /approved backport path is invalid/)

  for (const path of ['README.md', 'Dockerfile', 'deploy/Dockerfile']) {
    const alreadyAllowed = clone()
    alreadyAllowed.approved_backports[0].files[path] = {
      sha256: '0'.repeat(64),
      mode: '100644',
    }
    assert.throws(() => validateBaseline(alreadyAllowed), /already owned by another registry block/)
  }
})
