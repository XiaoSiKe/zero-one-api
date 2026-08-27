import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, RouterLinkStub, shallowMount } from '@vue/test-utils'
import RedeemView from '../RedeemView.vue'

const { appStore, getHistory, redeem, refreshUser } = vi.hoisted(() => ({
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
  redeem: vi.fn(),
  refreshUser: vi.fn(),
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
    refreshUser,
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
    redeem,
    getHistory,
  },
}))

const mountView = () => shallowMount(RedeemView, {
  global: {
    stubs: {
      Icon: true,
      RouterLink: RouterLinkStub,
      transition: { template: '<div><slot /></div>' },
    },
  },
})

describe('RedeemView actions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    getHistory.mockReset().mockResolvedValue([])
    redeem.mockReset()
    refreshUser.mockReset().mockResolvedValue({ balance: 68.02, concurrency: 30 })
    appStore.fetchPublicSettings.mockReset()
  })

  it('shows the normalized batch-conflict reason without treating it as an unknown error', async () => {
    redeem.mockRejectedValue({ status: 409, reason: 'REDEEM_BATCH_ALREADY_CLAIMED', message: 'already claimed' })
    const wrapper = mountView()
    await wrapper.get('#code').setValue(' BENEFIT-CODE ')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(redeem).toHaveBeenCalledWith('BENEFIT-CODE')
    expect(wrapper.text()).toContain('redeem.batchAlreadyClaimed')
    expect(refreshUser).not.toHaveBeenCalled()
    expect(appStore.showSuccess).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it.each([undefined, 0, 408, 500, 503, 599])('keeps status %s unconfirmed and only refreshes reads', async (status) => {
    redeem.mockRejectedValue({ status, message: 'No reliable acknowledgement' })
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('#code').setValue('UNCERTAIN-CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(wrapper.text()).toContain('redeem.resultUncertain')
    expect(wrapper.text()).not.toContain('redeem.redeemFailed')
    expect(wrapper.text()).not.toContain('redeem.redeemSuccess')
    expect(wrapper.get<HTMLInputElement>('#code').element.value).toBe('UNCERTAIN-CODE')
    expect(refreshUser).not.toHaveBeenCalled()
    expect(appStore.showError).not.toHaveBeenCalled()

    getHistory.mockResolvedValue([{ id: 9, code: 'REDACTED', type: 'benefit', value: 5, status: 'used', used_at: '2026-08-28T00:00:00Z' }])
    for (let attempt = 0; attempt < 2; attempt += 1) {
      await wrapper.get('[data-test="redeem-refresh"]').trigger('click')
      await flushPromises()
    }
    expect(wrapper.text()).toContain('redeem.resultUncertainAfterRefresh')
    expect(wrapper.text()).not.toContain('redeem.redeemSuccess')
    expect(appStore.showSuccess).not.toHaveBeenCalled()
    expect(redeem).toHaveBeenCalledTimes(1)
    expect(refreshUser).toHaveBeenCalledTimes(2)
    expect(getHistory).toHaveBeenCalledTimes(3)
    expect(wrapper.get<HTMLInputElement>('#code').element.value).toBe('UNCERTAIN-CODE')
    wrapper.unmount()
  })

  it.each([400, 401, 403, 404, 409, 429])('keeps status %s as a definite rejected request', async (status) => {
    redeem.mockRejectedValue({ status, message: 'Explicit rejection' })
    const wrapper = mountView()
    await wrapper.get('#code').setValue('REJECTED-CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(wrapper.text()).toContain('Explicit rejection')
    expect(wrapper.text()).toContain('redeem.redeemFailed')
    expect(wrapper.find('[data-test="redeem-refresh"]').exists()).toBe(false)
    expect(refreshUser).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('keeps an unconfirmed result unconfirmed when its read refresh also fails', async () => {
    redeem.mockRejectedValue({ status: 0 })
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('#code').setValue('UNCERTAIN-CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    refreshUser.mockRejectedValueOnce({ status: 503 })
    await wrapper.get('[data-test="redeem-refresh"]').trigger('click')
    await flushPromises()
    expect(wrapper.text()).toContain('redeem.resultUncertainRefreshFailed')
    expect(wrapper.text()).not.toContain('redeem.redeemSuccess')
    expect(wrapper.text()).not.toContain('redeem.redeemFailed')
    expect(redeem).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  it('keeps a committed redemption successful when refresh fails and retries reads only', async () => {
    const result = { id: 9, code: 'BENEFIT-CODE', type: 'benefit', value: 5, status: 'used', used_at: '2026-08-28T00:00:00Z' }
    redeem.mockResolvedValue(result)
    refreshUser.mockRejectedValueOnce({ status: 503, message: 'temporary read failure' })
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('#code').setValue('BENEFIT-CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(wrapper.text()).toContain('redeem.redeemSuccess')
    expect(wrapper.text()).not.toContain('redeem.redeemFailed')
    expect(wrapper.get<HTMLInputElement>('#code').element.value).toBe('')
    expect(appStore.showSuccess).toHaveBeenCalledOnce()
    expect(appStore.showError).not.toHaveBeenCalled()
    expect(wrapper.get('[data-test="redeem-refresh"]').text()).toContain('redeem.retryRefresh')

    getHistory.mockResolvedValue([result])
    await wrapper.get('[data-test="redeem-refresh"]').trigger('click')
    await flushPromises()
    expect(redeem).toHaveBeenCalledTimes(1)
    expect(refreshUser).toHaveBeenCalledTimes(2)
    expect(wrapper.text()).toContain('redeem.benefitAddedRedeem')
    expect(wrapper.find('[data-test="redeem-refresh"]').exists()).toBe(false)
    wrapper.unmount()
  })

  it('sends only one redemption for synchronous duplicate submits', async () => {
    let resolveRedeem!: (result: unknown) => void
    redeem.mockReturnValue(new Promise((resolve) => { resolveRedeem = resolve }))
    const wrapper = mountView()
    await wrapper.get('#code').setValue('MYSTERY-CODE')
    const form = wrapper.get('form').element
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await flushPromises()
    expect(redeem).toHaveBeenCalledTimes(1)
    resolveRedeem({ id: 10, type: 'mystery_box', value: 1.25, status: 'used' })
    await flushPromises()
    expect(wrapper.text()).toContain('$1.25')
    wrapper.unmount()
  })

  it('does not replace fresh redemption history with an older initial read', async () => {
    let resolveInitial!: (result: unknown[]) => void
    getHistory.mockReturnValueOnce(new Promise((resolve) => { resolveInitial = resolve }))
    const result = { id: 9, code: 'CODE', type: 'mystery_box', value: 2.5, status: 'used', used_at: '2026-08-28T00:00:00Z' }
    getHistory.mockResolvedValue([result])
    redeem.mockResolvedValue(result)
    const wrapper = mountView()
    await wrapper.get('#code').setValue('CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(wrapper.text()).toContain('redeem.mysteryBoxAddedRedeem')
    resolveInitial([])
    await flushPromises()
    expect(wrapper.text()).toContain('redeem.mysteryBoxAddedRedeem')
    wrapper.unmount()
  })

  it('confirms the award immediately while balance refresh is still pending', async () => {
    let resolveRefresh!: (value: unknown) => void
    refreshUser.mockReturnValueOnce(new Promise((resolve) => { resolveRefresh = resolve }))
    redeem.mockResolvedValue({ id: 9, type: 'benefit', value: 5, status: 'used' })
    const wrapper = mountView()
    await wrapper.get('#code').setValue('CODE')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(wrapper.get<HTMLInputElement>('#code').element.value).toBe('')
    expect(wrapper.text()).toContain('redeem.redeemSuccess')
    expect(appStore.showSuccess).toHaveBeenCalledOnce()
    resolveRefresh({ balance: 68.02 })
    await flushPromises()
    wrapper.unmount()
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
