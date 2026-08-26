import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useAdminSettingsStore } from '@/stores/adminSettings'

const { getConfig, getSettings } = vi.hoisted(() => ({
  getConfig: vi.fn(),
  getSettings: vi.fn(),
}))

vi.mock('@/api', () => ({
  adminAPI: {
    payment: { getConfig },
    settings: { getSettings },
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
  }
}

describe('useAdminSettingsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    getSettings.mockReset()
    getConfig.mockReset().mockResolvedValue({ data: { enabled: false } })
  })

  it('shares one request between concurrent ordinary reads', async () => {
    const request = createDeferred<ReturnType<typeof settings>>()
    getSettings.mockReturnValue(request.promise)
    const store = useAdminSettingsStore()

    const first = store.fetch()
    const second = store.fetch()
    expect(getSettings).toHaveBeenCalledTimes(1)

    request.resolve(settings('Shared'))
    await Promise.all([first, second])
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Shared'])
  })

  it('queues one forced refresh and ignores an older in-flight response', async () => {
    const staleRequest = createDeferred<ReturnType<typeof settings>>()
    const freshRequest = createDeferred<ReturnType<typeof settings>>()
    getSettings
      .mockReturnValueOnce(staleRequest.promise)
      .mockReturnValueOnce(freshRequest.promise)
    const store = useAdminSettingsStore()

    const first = store.fetch()
    const forced = store.fetch(true)
    const forcedAgain = store.fetch(true)
    expect(getSettings).toHaveBeenCalledTimes(1)

    staleRequest.resolve(settings('Stale'))
    await first
    await vi.waitFor(() => expect(getSettings).toHaveBeenCalledTimes(2))
    expect(store.customMenuItems).toEqual([])

    freshRequest.resolve(settings('Fresh'))
    await Promise.all([forced, forcedAgain])
    expect(store.customMenuItems.map((item) => item.label)).toEqual(['Fresh'])
  })
})
