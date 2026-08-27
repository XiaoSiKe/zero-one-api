import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { reactive } from 'vue'
import { flushPromises } from '@vue/test-utils'

import { useAdminSettingsStore } from '@/stores/adminSettings'
import { getNavigationSettings as readNavigationSettings, getSettings as readFullSettings } from '@/api/admin/settings'

const { getConfig, getSettings, getNavigationSettings, apiGet } = vi.hoisted(() => ({
  getConfig: vi.fn(),
  getSettings: vi.fn(),
  getNavigationSettings: vi.fn(),
  apiGet: vi.fn(),
}))
vi.mock('@/api/client', () => ({ default: { get: apiGet }, apiClient: { get: apiGet } }))

const authStore = reactive({ token: 'admin-token', user: { id: 1, role: 'admin' } as { id: number; role: string } | null })
vi.mock('@/stores/auth', () => ({ useAuthStore: () => authStore }))

vi.mock('@/api', () => ({
  adminAPI: {
    payment: { getConfig },
    settings: { getSettings, getNavigationSettings },
  },
}))

function createDeferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void
  const promise = new Promise<T>((resolvePromise) => {
    resolve = resolvePromise
  })
  return { promise, resolve }
}

function settings(label: string) {
  return {
    ops_monitoring_enabled: true,
    ops_realtime_monitoring_enabled: true,
    ops_query_mode_default: 'auto',
    custom_menu_items: [{
      id: label.toLowerCase(),
      label,
      icon_svg: '',
      url: `https://${label.toLowerCase()}.example.com`,
      visibility: 'all',
      placement: 'both',
      sort_order: 0,
    }],
    user_sidebar_order: ['/dashboard', '/keys'],
    admin_sidebar_order: ['/admin/dashboard', '/admin/channels'],
    profile_navigation_enabled: true,
    subscription_navigation_enabled: true,
    model_plaza_placement: 'header',
  }
}

describe('useAdminSettingsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    authStore.user = { id: 1, role: 'admin' }
    authStore.token = 'admin-token'
    getNavigationSettings.mockReset()
    getSettings.mockReset().mockImplementation(() => getNavigationSettings())
    getConfig.mockReset().mockResolvedValue({ data: { enabled: false } })
    apiGet.mockReset()
  })

  it('requests the navigation projection without changing the settings editor API', async () => {
    apiGet.mockResolvedValue({ data: settings('API') })
    await readNavigationSettings()
    expect(apiGet).toHaveBeenLastCalledWith('/admin/settings', { params: { scope: 'navigation' } })
    await readFullSettings()
    expect(apiGet).toHaveBeenLastCalledWith('/admin/settings')
  })

  it('shares one request between concurrent ordinary reads', async () => {
    const request = createDeferred<ReturnType<typeof settings>>()
    getNavigationSettings.mockReturnValue(request.promise)
    const store = useAdminSettingsStore()

    const first = store.fetch()
    const second = store.fetch()
    expect(getNavigationSettings).toHaveBeenCalledTimes(1)

    request.resolve(settings('Shared'))
    await Promise.all([first, second])
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Shared'])
    expect(getSettings).not.toHaveBeenCalled()
  })

  it('queues one forced refresh and ignores an older in-flight response', async () => {
    const staleRequest = createDeferred<ReturnType<typeof settings>>()
    const freshRequest = createDeferred<ReturnType<typeof settings>>()
    getNavigationSettings
      .mockReturnValueOnce(staleRequest.promise)
      .mockReturnValueOnce(freshRequest.promise)
    const store = useAdminSettingsStore()

    const first = store.fetch()
    const forced = store.fetch(true)
    const forcedAgain = store.fetch(true)
    expect(getNavigationSettings).toHaveBeenCalledTimes(1)

    staleRequest.resolve(settings('Stale'))
    await first
    await vi.waitFor(() => expect(getNavigationSettings).toHaveBeenCalledTimes(2))
    expect(store.customMenuItems).toEqual([])

    freshRequest.resolve(settings('Fresh'))
    await Promise.all([forced, forcedAgain])
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Fresh'])
  })

  it('publishes navigation while payment is still pending, including a forced refresh', async () => {
    const payment = createDeferred<{ data: { enabled: boolean } }>()
    getConfig.mockReturnValue(payment.promise)
    getNavigationSettings.mockResolvedValueOnce(settings('Ready')).mockResolvedValueOnce(settings('Saved'))
    const store = useAdminSettingsStore()
    const firstDone = vi.fn()
    void store.fetch().then(firstDone)
    await flushPromises()

    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Ready'])
    expect(firstDone).toHaveBeenCalledTimes(1)
    expect(store.loading).toBe(false)
    await store.fetch(true)
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Saved'])

    payment.resolve({ data: { enabled: true } })
    await flushPromises()
    expect(store.paymentEnabled).toBe(true)
  })

  it('invalidates a queued refresh when another save happens after that refresh has started', async () => {
    const initial = createDeferred<ReturnType<typeof settings>>()
    const firstSave = createDeferred<ReturnType<typeof settings>>()
    const secondSave = createDeferred<ReturnType<typeof settings>>()
    getNavigationSettings.mockReturnValueOnce(initial.promise)
      .mockReturnValueOnce(firstSave.promise).mockReturnValueOnce(secondSave.promise)
    const store = useAdminSettingsStore()
    const initialRead = store.fetch()
    const firstRefresh = store.fetch(true)
    initial.resolve(settings('Before'))
    await initialRead
    await flushPromises()
    expect(getNavigationSettings).toHaveBeenCalledTimes(2)

    const secondRefresh = store.fetch(true)
    firstSave.resolve(settings('FirstSave'))
    await firstRefresh
    await flushPromises()
    expect(store.customMenuItems).toEqual([])
    expect(getNavigationSettings).toHaveBeenCalledTimes(3)
    secondSave.resolve(settings('SecondSave'))
    await secondRefresh
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['SecondSave'])
  })

  it('keeps successful navigation when payment fails, and allows a failed navigation read to retry', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    getConfig.mockRejectedValue(new Error('payment unavailable'))
    getNavigationSettings.mockRejectedValueOnce(new Error('navigation unavailable')).mockResolvedValueOnce(settings('Retry'))
    const store = useAdminSettingsStore()
    await store.fetch()
    expect(store.loaded).toBe(false)
    await store.fetch()

    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Retry'])
    expect(store.loaded).toBe(true)
    expect(store.paymentEnabled).toBe(false)
    vi.restoreAllMocks()
  })

  it('discards old identity responses and cached flags after logout and a different admin login', async () => {
    const oldNavigation = createDeferred<ReturnType<typeof settings>>()
    const oldPayment = createDeferred<{ data: { enabled: boolean } }>()
    getNavigationSettings.mockReturnValueOnce(oldNavigation.promise).mockResolvedValueOnce(settings('Second'))
    getConfig.mockReturnValueOnce(oldPayment.promise).mockResolvedValue({ data: { enabled: false } })
    const store = useAdminSettingsStore()
    const first = store.fetch()
    const refresh = store.fetch(true)
    authStore.token = ''
    authStore.user = null
    await flushPromises()
    expect(store.customMenuItems).toEqual([])
    expect(store.loaded).toBe(false)

    authStore.user = { id: 2, role: 'admin' }
    authStore.token = 'second-token'
    await store.fetch()
    oldNavigation.resolve(settings('First'))
    oldPayment.resolve({ data: { enabled: true } })
    await Promise.all([first, refresh])
    await flushPromises()

    expect(getNavigationSettings).toHaveBeenCalledTimes(2)
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Second'])
    expect(store.paymentEnabled).toBe(false)
  })

  it('does not let pending navigation or payment overwrite local settings after saving', async () => {
    const request = createDeferred<ReturnType<typeof settings>>()
    const payment = createDeferred<{ data: { enabled: boolean } }>()
    getNavigationSettings.mockReturnValue(request.promise)
    getConfig.mockReturnValue(payment.promise)
    const store = useAdminSettingsStore()
    const pending = store.fetch()
    store.setOpsMonitoringEnabledLocal(false)
    store.setOpsRealtimeMonitoringEnabledLocal(false)
    store.setOpsQueryModeDefaultLocal('realtime')
    store.setPaymentEnabledLocal(false)
    request.resolve(settings('Stale'))
    payment.resolve({ data: { enabled: true } })
    await pending
    await flushPromises()

    expect(store.opsMonitoringEnabled).toBe(false)
    expect(store.opsRealtimeMonitoringEnabled).toBe(false)
    expect(store.opsQueryModeDefault).toBe('realtime')
    expect(store.paymentEnabled).toBe(false)
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Stale'])
    expect(store.loaded).toBe(true)
  })

  it('retains navigation through a token refresh but clears it when an admin is demoted', async () => {
    getNavigationSettings.mockResolvedValue(settings('Admin'))
    const store = useAdminSettingsStore()
    await store.fetch()
    authStore.token = 'refreshed-token'
    expect(store.loaded).toBe(true)
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Admin'])
    authStore.user = { id: 1, role: 'user' }
    expect(store.loaded).toBe(false)
    expect(store.navigationSettings).toBeNull()
    expect(store.customMenuItems).toEqual([])
    await store.fetch()
    expect(getNavigationSettings).toHaveBeenCalledTimes(1)
  })
})
