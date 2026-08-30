import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const sourceRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const readSource = (path: string) => readFileSync(resolve(sourceRoot, path), 'utf8')

const consoleRouteNames = [
  'Dashboard', 'Keys', 'ImageGeneration', 'BatchImageGuide', 'Usage', 'Redeem', 'Affiliate',
  'UserAvailableChannels', 'Profile', 'Subscriptions', 'PurchaseSubscription', 'OrderList',
  'PaymentQRCode', 'CustomPage', 'AdminDashboard', 'AdminOps',
  'AdminAuditLogs', 'AdminUsers', 'AdminGroups', 'AdminChannels',
  'AdminChannelMonitor', 'ChannelStatus', 'AdminSubscriptions', 'AdminAccounts',
  'AdminAnnouncements', 'AdminProxies', 'AdminRedeem', 'AdminPromoCodes',
  'AdminSettings', 'AdminRiskControl', 'AdminPromptAudit', 'AdminUsage',
  'AdminAffiliateInvites', 'AdminAffiliateTransfers',
  'AdminPaymentDashboard', 'AdminOrders', 'AdminPaymentPlans',
]

const migratedLeafViews = [
  'views/user/DashboardView.vue', 'views/user/KeysView.vue',
  'views/user/ImageGenerationView.vue',
  'views/user/BatchImageGuideView.vue', 'views/user/UsageView.vue',
  'views/user/RedeemView.vue', 'views/user/AffiliateView.vue',
  'views/user/AvailableChannelsView.vue', 'views/user/ProfileView.vue',
  'views/user/SubscriptionsView.vue', 'views/user/PaymentView.vue',
  'views/user/UserOrdersView.vue', 'views/user/PaymentQRCodeView.vue',
  'views/user/CustomPageView.vue',
  'views/user/ChannelStatusV1View.vue', 'views/user/ChannelStatusV2View.vue',
  'views/admin/DashboardView.vue', 'views/admin/ops/OpsDashboard.vue',
  'views/admin/AuditLogView.vue',
  'views/admin/UsersView.vue', 'views/admin/GroupsView.vue',
  'views/admin/ChannelsView.vue', 'views/admin/ChannelMonitorView.vue',
  'views/admin/SubscriptionsView.vue', 'views/admin/AccountsView.vue',
  'views/admin/AnnouncementsView.vue', 'views/admin/ProxiesView.vue',
  'views/admin/RedeemView.vue', 'views/admin/PromoCodesView.vue',
  'views/admin/SettingsView.vue', 'views/admin/RiskControlView.vue',
  'views/admin/UsageView.vue', 'views/admin/affiliates/AdminAffiliateWorkspace.vue',
  'views/admin/orders/AdminPaymentDashboardView.vue',
  'views/admin/orders/AdminOrdersView.vue', 'views/admin/orders/AdminPaymentPlansView.vue',
  'features/prompt-audit/PromptAuditView.vue',
]

describe('Console shell ownership', () => {
  it('keeps the authenticated Console shell above its route content', () => {
    const app = readSource('App.vue')
    expect(app).toContain('<AppLayout v-if="usesConsoleShell">')
    expect(app).toContain('<RouterView />')
  })

  it('marks every migrated Console route as shell-owned', () => {
    const router = readSource('router/index.ts')
    for (const name of consoleRouteNames) {
      expect(router).toMatch(new RegExp(`name: '${name}'[\\s\\S]{0,500}?consoleShell: true`))
    }
  })

  it('does not let a migrated leaf view recreate AppLayout', () => {
    for (const path of migratedLeafViews) {
      const source = readSource(path)
      expect(source).not.toContain('<AppLayout')
      expect(source).not.toContain("from '@/components/layout/AppLayout.vue'")
    }
  })
})
