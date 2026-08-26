import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, RouterLinkStub, shallowMount } from '@vue/test-utils'
import RedeemView from '../RedeemView.vue'

const { appStore, getHistory } = vi.hoisted(() => ({
  appStore: {
    cachedPublicSettings: {
      contact_info: 'cached contact',
      custom_menu_items: [
        {
          id: 'cached-online-recharge',
          label: '在线充值',
          icon_svg: '',
          url: 'https://cached-recharge.example.com',
          visibility: 'all',
          placement: 'both',
          sort_order: 0,
        },
      ],
    },
    publicSettingsLoaded: true,
    fetchPublicSettings: vi.fn(),
    showError: vi.fn(),
    showSuccess: vi.fn(),
    showWarning: vi.fn(),
  },
  getHistory: vi.fn(),
}))

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

vi.mock('@/stores/auth', () => ({
  useAuthStore: () => ({
    user: { balance: 63.02, concurrency: 30 },
    refreshUser: vi.fn(),
  }),
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => appStore,
}))

vi.mock('@/stores/subscriptions', () => ({
  useSubscriptionStore: () => ({ fetchActiveSubscriptions: vi.fn() }),
}))

vi.mock('@/api', () => ({
  redeemAPI: {
    redeem: vi.fn(),
    getHistory,
  },
}))

describe('RedeemView actions', () => {
  beforeEach(() => {
    getHistory.mockReset().mockResolvedValue([])
    appStore.fetchPublicSettings.mockReset()
  })

  it('uses the shared cached settings for the online recharge action', async () => {
    const wrapper = shallowMount(RedeemView, {
      global: {
        stubs: {
          Icon: true,
          RouterLink: RouterLinkStub,
        },
      },
    })

    await flushPromises()

    expect(wrapper.get('button[type="submit"]').classes()).toEqual(
      expect.arrayContaining(['redeem-home-action', 'btn-specular'])
    )

    const rechargeLink = wrapper.getComponent(RouterLinkStub)
    expect(rechargeLink.classes()).toContain('redeem-home-action')
    expect(rechargeLink.classes()).toContain('btn-specular')
    expect(rechargeLink.props('to')).toBe('/custom/cached-online-recharge')
    expect(rechargeLink.text()).toContain('redeem.onlineRecharge')
    expect(appStore.fetchPublicSettings).not.toHaveBeenCalled()
  })
})
