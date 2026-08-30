import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { nextTick, reactive } from 'vue'
import type { CustomMenuItem } from '@/types'

import CustomPageView from '../CustomPageView.vue'

const storeFixtures = vi.hoisted(() => ({
  detectedTheme: { value: 'light' as 'light' | 'dark' },
  adminSettingsStore: {
    customMenuItems: [] as CustomMenuItem[],
    fetch: vi.fn(),
  },
  appStore: {
    cachedPublicSettings: {
      custom_menu_items: [
        { id: 'radar', label: '雷达检测中心', url: 'https://embed.01yapi.test/radar' },
        { id: 'tutorial', label: '接入教程', url: 'https://embed.01yapi.test/tutorial' },
      ],
    },
    publicSettingsLoaded: true,
    fetchPublicSettings: vi.fn(),
  },
  authStore: {
    isAdmin: false,
    token: 'test-token',
    user: { id: 2 },
  },
}))

const adminSettingsStore = reactive(storeFixtures.adminSettingsStore)
const appStore = reactive(storeFixtures.appStore)
const authStore = reactive(storeFixtures.authStore)
enableAutoUnmount(afterEach)

vi.mock('@/stores', () => ({ useAppStore: () => appStore }))
vi.mock('@/stores/auth', () => ({ useAuthStore: () => authStore }))
vi.mock('@/stores/adminSettings', () => ({
  useAdminSettingsStore: () => adminSettingsStore,
}))
vi.mock('@/utils/embedded-url', () => ({
  buildEmbeddedUrl: (url: string, _userId: number, _token: string, theme: string) =>
    theme === 'dark' ? `${url}?theme=dark` : url,
  detectTheme: () => storeFixtures.detectedTheme.value,
}))
vi.mock('@/api/client', () => ({ buildApiUrl: (path: string) => path }))
vi.mock('vue-i18n', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-i18n')>()
  return {
    ...actual,
    useI18n: () => ({
      locale: { value: 'zh-CN' },
      t: (key: string) => key === 'customPage.loadingEmbedded'
        ? '正在全力加载中，请稍等！'
        : key,
    }),
  }
})

describe('CustomPageView iframe loading state', () => {
  beforeEach(() => {
    storeFixtures.detectedTheme.value = 'light'
    appStore.fetchPublicSettings.mockClear()
    appStore.publicSettingsLoaded = true
    appStore.cachedPublicSettings.custom_menu_items = [
      { id: 'radar', label: '雷达检测中心', url: 'https://embed.01yapi.test/radar' },
      { id: 'tutorial', label: '接入教程', url: 'https://embed.01yapi.test/tutorial' },
    ]
    adminSettingsStore.customMenuItems = []
    adminSettingsStore.fetch.mockReset().mockResolvedValue(undefined)
    authStore.isAdmin = false
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  async function mountPage(path = '/custom/radar') {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/custom/:id', component: CustomPageView }],
    })
    await router.push(path)
    await router.isReady()

    const wrapper = mount(CustomPageView, {
      global: {
        plugins: [router],
        stubs: {
          Icon: { template: '<span />' },
        },
      },
    })

    return { router, wrapper }
  }

  it('hides stale content and shows a loading message while switching custom pages', async () => {
    const { router, wrapper } = await mountPage()
    expect(wrapper.get('[data-testid="custom-page-loading"]').text())
      .toBe('正在全力加载中，请稍等！')
    await wrapper.get('iframe').trigger('load')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)

    await router.push('/custom/tutorial')

    expect(wrapper.get('[data-testid="custom-page-loading"]').text())
      .toBe('正在全力加载中，请稍等！')
    expect(wrapper.get('iframe').attributes('src')).toBe('https://embed.01yapi.test/tutorial')
    expect(wrapper.get('iframe').classes()).toContain('custom-embed-frame-loading')

    await wrapper.get('iframe').trigger('load')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
    expect(wrapper.get('iframe').classes()).not.toContain('custom-embed-frame-loading')

    wrapper.unmount()
  })

  it('starts a dark-theme custom page with its final URL instead of loading twice', async () => {
    storeFixtures.detectedTheme.value = 'dark'
    const { wrapper } = await mountPage()
    await nextTick()

    expect(wrapper.get('iframe').attributes('src')).toBe('https://embed.01yapi.test/radar?theme=dark')
    expect(wrapper.get('iframe').attributes('data-load-generation')).toBe('1')
  })

  it('retains a completed iframe while a slower public configuration request finishes', async () => {
    appStore.publicSettingsLoaded = false
    let resolveSettings!: () => void
    appStore.fetchPublicSettings.mockReturnValueOnce(new Promise<void>((resolve) => { resolveSettings = resolve }))
    const { wrapper } = await mountPage()
    const frame = wrapper.get('iframe').element
    await wrapper.get('iframe').trigger('load')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)

    resolveSettings()
    await flushPromises()
    expect(wrapper.get('iframe').element).toBe(frame)
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
  })

  it('ignores a previous load event after the URL of the current menu changes', async () => {
    const { wrapper } = await mountPage()
    const previousFrame = wrapper.get('iframe').element
    appStore.cachedPublicSettings.custom_menu_items[0].url = 'https://embed.01yapi.test/radar-v2'
    await nextTick()
    previousFrame.dispatchEvent(new Event('load'))
    await nextTick()

    expect(wrapper.get('iframe').element).not.toBe(previousFrame)
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(true)
    await wrapper.get('iframe').trigger('load')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
  })

  it('uses loaded admin metadata even when a stale public copy arrives afterwards', async () => {
    authStore.isAdmin = true
    appStore.cachedPublicSettings.custom_menu_items = []
    const { wrapper } = await mountPage()
    adminSettingsStore.customMenuItems = [{
      id: 'radar', label: '当前管理菜单', url: 'https://embed.01yapi.test/admin-radar',
      icon_svg: '', visibility: 'all', placement: 'both', sort_order: 0,
    }]
    await nextTick()
    await wrapper.get('iframe').trigger('load')
    const currentFrame = wrapper.get('iframe').element

    appStore.cachedPublicSettings.custom_menu_items = [
      { id: 'radar', label: '过期公开副本', url: 'https://embed.01yapi.test/old-radar' },
    ]
    await nextTick()
    expect(wrapper.get('iframe').element).toBe(currentFrame)
    expect(wrapper.get('iframe').attributes('src')).toBe('https://embed.01yapi.test/admin-radar')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
  })

  it('does not reload a finished page for the same route or an equivalent settings refresh', async () => {
    const { router, wrapper } = await mountPage()
    await wrapper.get('iframe').trigger('load')
    const frame = wrapper.get('iframe').element
    await router.push('/custom/radar')
    appStore.cachedPublicSettings.custom_menu_items = appStore.cachedPublicSettings.custom_menu_items.map((item) => ({ ...item }))
    await nextTick()
    expect(wrapper.get('iframe').element).toBe(frame)
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
  })

  it('shows a slow state after 15 seconds, retries only on demand, and accepts late success', async () => {
    vi.useFakeTimers()
    const { wrapper } = await mountPage()
    const frame = wrapper.get('iframe').element
    await vi.advanceTimersByTimeAsync(15000)
    expect(wrapper.find('[data-testid="custom-page-slow"]').exists()).toBe(true)
    expect(wrapper.get('a[target="_blank"]').attributes('href')).toBe('https://embed.01yapi.test/radar')
    expect(wrapper.get('iframe').element).toBe(frame)

    await wrapper.get('[data-testid="custom-page-retry"]').trigger('click')
    expect(wrapper.get('iframe').element).not.toBe(frame)
    frame.dispatchEvent(new Event('load'))
    await nextTick()
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(true)
    await vi.advanceTimersByTimeAsync(15000)
    await wrapper.get('iframe').trigger('load')
    expect(wrapper.find('[data-testid="custom-page-loading"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="custom-page-slow"]').exists()).toBe(false)
  })
})
