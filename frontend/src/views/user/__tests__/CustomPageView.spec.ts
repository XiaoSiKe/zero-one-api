import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'

import CustomPageView from '../CustomPageView.vue'

const { adminSettingsStore, appStore, authStore } = vi.hoisted(() => ({
  adminSettingsStore: {
    customMenuItems: [],
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

vi.mock('@/stores', () => ({ useAppStore: () => appStore }))
vi.mock('@/stores/auth', () => ({ useAuthStore: () => authStore }))
vi.mock('@/stores/adminSettings', () => ({
  useAdminSettingsStore: () => adminSettingsStore,
}))
vi.mock('@/utils/embedded-url', () => ({
  buildEmbeddedUrl: (url: string) => url,
  detectTheme: () => 'light',
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
    appStore.fetchPublicSettings.mockClear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('hides stale content and shows a loading message while switching custom pages', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/custom/:id', component: CustomPageView }],
    })
    await router.push('/custom/radar')
    await router.isReady()

    const wrapper = mount(CustomPageView, {
      global: {
        plugins: [router],
        stubs: {
          Icon: { template: '<span />' },
        },
      },
    })

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
})
