import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  evaluateChangedPaths,
  evaluateConsoleEntryReferences,
  validateManifest,
} from './verify-ui-boundary.mjs'

const manifest = validateManifest(
  JSON.parse(readFileSync(new URL('./ui-baseline.json', import.meta.url), 'utf8')),
)

test('validates the approved UI baseline manifest', () => {
  assert.equal(manifest.baseline_ref, 'ui-approved-2026-08-25-r14')
  assert.equal(manifest.baseline_commit, '851a0b597a476968a47c33776ae2e2df50941812')
  assert.equal(manifest.edge_build.console_source, 'deploy/zero-one/recovered-frontend/console')
  assert.deepEqual(
    manifest.protected_surfaces.map(({ name }) => name),
    [
      'landing-home',
      'auth',
      'console-shell',
      'header-navigation-entries',
      'affiliate-attribution',
      'model-plaza-pricing',
      'redeem-benefits-mystery-box',
    ],
  )

  const affiliate = manifest.protected_surfaces.find(
    ({ name }) => name === 'affiliate-attribution',
  )
  assert.ok(affiliate)
  assert.deepEqual(affiliate.routes, [
    '/affiliate',
    '/admin/settings',
    '/admin/affiliates',
    '/admin/affiliates/invites',
    '/admin/affiliates/invites?section=customers',
    '/admin/affiliates/invites?section=customers&user_id={id}',
    '/admin/affiliates/invites?section=settings',
    '/admin/affiliates/rebates',
    '/admin/affiliates/transfers',
  ])
  assert.deepEqual(affiliate.paths, [
    'frontend/src/components/layout/AppHeader.vue',
    'frontend/src/components/layout/AppSidebar.vue',
    'frontend/src/components/layout/__tests__/AppHeader.affiliateTitle.spec.ts',
    'frontend/src/components/layout/__tests__/AppSidebar.spec.ts',
    'frontend/src/views/user/AffiliateView.vue',
    'frontend/src/views/user/__tests__/AffiliateView.spec.ts',
    'frontend/src/views/admin/SettingsView.vue',
    'frontend/src/views/admin/__tests__/SettingsView.spec.ts',
    'frontend/src/views/admin/affiliates/AdminAffiliateCustomerDetail.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateCustomers.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateInvitesView.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateRebatesView.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateSettingsPanel.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateRecordsTable.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateTransfersView.vue',
    'frontend/src/views/admin/affiliates/AdminAffiliateWorkspace.vue',
    'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateCustomerDetail.spec.ts',
    'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateCustomers.spec.ts',
    'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateSettingsPanel.spec.ts',
    'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateRecordsTable.spec.ts',
    'frontend/src/views/admin/affiliates/__tests__/AdminAffiliateWorkspace.spec.ts',
    'frontend/src/api/admin/affiliates.ts',
    'frontend/src/i18n/locales/en/admin/overview.ts',
    'frontend/src/i18n/locales/zh/admin/overview.ts',
    'deploy/zero-one/recovered-frontend/console/index.html',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.js',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.css',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.css',
    'deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.js',
    'deploy/zero-one/test-live-routing.sh',
    'deploy/zero-one/test-routing.sh',
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
  ])
})

test('rejects protected UI changes while allowing API compatibility files', () => {
  assert.deepEqual(
    evaluateChangedPaths(
      [
        'frontend/package.json',
        'frontend/pnpm-lock.yaml',
        'frontend/postcss.config.js',
        'frontend/public/logo.svg',
        'frontend/src/components/layout/AppLayout.vue',
        'frontend/src/views/admin/RedeemView.vue',
        'landing/package.json',
        'landing/package-lock.json',
        'landing/public/favicon.svg',
        'landing/src/styles.css',
        'deploy/zero-one/recovered-frontend/console/index.html',
        'deploy/zero-one/test-live-routing.sh',
        'deploy/zero-one/test-routing.sh',
        'visual-regression/tests/console.visual.spec.ts',
        'visual-regression/tests/fixtures/api.ts',
        'frontend/src/api/admin/redeem.ts',
        'frontend/src/types/index.ts',
      ],
      manifest,
    ),
    [
      'deploy/zero-one/recovered-frontend/console/index.html',
      'deploy/zero-one/test-live-routing.sh',
      'deploy/zero-one/test-routing.sh',
      'frontend/package.json',
      'frontend/pnpm-lock.yaml',
      'frontend/postcss.config.js',
      'frontend/public/logo.svg',
      'frontend/src/components/layout/AppLayout.vue',
      'frontend/src/views/admin/RedeemView.vue',
      'landing/package-lock.json',
      'landing/package.json',
      'landing/public/favicon.svg',
      'landing/src/styles.css',
      'visual-regression/tests/console.visual.spec.ts',
      'visual-regression/tests/fixtures/api.ts',
    ],
  )
})

test('requires compatibility paths to be inside protected source paths', () => {
  const invalid = structuredClone(manifest)
  invalid.compatibility_paths.push('backend/internal/service/')
  assert.throws(() => validateManifest(invalid), /outside protected paths/)
})

test('requires the console entry to keep the approved asset references', () => {
  const approved = [
    '<script type="module">await import("/assets/pricing-autofill-fix/index-approved.js")</script>',
    '<link rel="stylesheet" href="/assets/index-approved.css">',
  ].join('')
  assert.deepEqual(evaluateConsoleEntryReferences(approved, approved, 'console/index.html'), [])
  assert.deepEqual(
    evaluateConsoleEntryReferences(
      approved.replace('index-approved.js', 'repaired/index.js'),
      approved,
      'console/index.html',
    ),
    ['console/index.html asset references differ from approved baseline'],
  )
})
