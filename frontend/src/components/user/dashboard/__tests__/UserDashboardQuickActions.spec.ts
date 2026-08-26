import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'

import UserDashboardQuickActions from '../UserDashboardQuickActions.vue'

const { appStore, refreshBatchImageAccess } = vi.hoisted(() => ({
  appStore: {
    cachedPublicSettings: {
      custom_menu_items: [
        { id: 'recharge-page', label: '在线充值', url: 'https://pay.01yapi.test' },
      ],
    },
  },
  refreshBatchImageAccess: vi.fn(),
}))

vi.mock('@/stores', () => ({ useAppStore: () => appStore }))
vi.mock('@/composables/useBatchImageAccess', () => ({
  useBatchImageAccess: () => ({
    canUseBatchImage: false,
    refreshBatchImageAccess,
  }),
}))
vi.mock('vue-i18n', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-i18n')>()
  const messages: Record<string, string> = {
    'dashboard.purchaseCredits': '购买额度',
    'dashboard.purchaseCreditsDesc': '前往在线充值',
  }
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => messages[key] ?? key }),
  }
})

describe('UserDashboardQuickActions', () => {
  beforeEach(() => {
    refreshBatchImageAccess.mockClear()
  })

  it('routes the purchase credits action to the configured online recharge page', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/dashboard', component: { template: '<div />' } },
        { path: '/custom/:id', component: { template: '<div />' } },
      ],
    })
    await router.push('/dashboard')
    await router.isReady()

    const wrapper = mount(UserDashboardQuickActions, {
      global: {
        plugins: [router],
        stubs: { Icon: { template: '<span />' } },
      },
    })

    const action = wrapper.get('[data-testid="dashboard-purchase-credits"]')
    expect(action.text()).toContain('购买额度')
    expect(action.text()).toContain('前往在线充值')
    await action.trigger('click')
    await flushPromises()

    expect(router.currentRoute.value.fullPath).toBe('/custom/recharge-page')
  })
})
