import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AppHeader from '../AppHeader.vue'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import { useAdminSettingsStore } from '@/stores/adminSettings'
import type { PublicSettings, User } from '@/types'

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
  useRoute: () => ({
    name: 'Dashboard',
    params: {},
    meta: { title: 'Dashboard' },
  }),
}))

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

const signedInUser = {
  id: 1,
  username: 'tester',
  email: 'tester@example.com',
  role: 'user',
  balance: 0,
  concurrency: 1,
  status: 'active',
  allowed_groups: null,
  balance_notify_enabled: false,
  balance_notify_threshold: null,
  balance_notify_extra_emails: [],
  created_at: '2026-01-01T00:00:00Z',
  updated_at: '2026-01-01T00:00:00Z',
} satisfies User

const adminUser = {
  ...signedInUser,
  id: 2,
  username: 'admin',
  email: 'admin@example.com',
  role: 'admin',
} satisfies User

let wrapper: VueWrapper | undefined

function mountHeader() {
  wrapper = mount(AppHeader, {
    global: {
      stubs: {
        AnnouncementBell: true,
        BaseDialog: true,
        Icon: true,
        LocaleSwitcher: true,
        RouterLink: { template: '<a><slot /></a>' },
        SubscriptionProgressMini: true,
      },
    },
  })
  return wrapper
}

describe('AppHeader custom header navigation', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    wrapper?.unmount()
    wrapper = undefined
  })

  it('renders configured header QR entries instead of legacy header links', () => {
    const appStore = useAppStore()
    const authStore = useAuthStore()
    authStore.user = signedInUser
    appStore.cachedPublicSettings = {
      model_plaza_enabled: false,
      custom_menu_items: [
        {
          id: 'support',
          label: '售后支持',
          icon_svg: '<svg viewBox="0 0 24 24"><path d="M4 12h16" /></svg>',
          url: '',
          visibility: 'all',
          placement: 'header',
          navigation_type: 'qr',
          qr_description: '扫码联系售后',
          sort_order: 0,
        },
      ],
    } as PublicSettings

    const mounted = mountHeader()

    expect(mounted.find('[data-testid="header-qr-support"]').exists()).toBe(true)
    expect(mounted.find('[data-testid="header-custom-menu-support"]').exists()).toBe(false)
  })

  it('hides header Model Plaza and subscription progress when configured for the sidebar or disabled', () => {
    const appStore = useAppStore()
    const authStore = useAuthStore()
    authStore.user = signedInUser
    appStore.cachedPublicSettings = {
      model_plaza_enabled: true,
      model_plaza_placement: 'sidebar',
      subscription_navigation_enabled: false,
      custom_menu_items: [],
    } as PublicSettings

    const mounted = mountHeader()

    expect(mounted.find('[data-testid="header-model-plaza"]').exists()).toBe(false)
    expect(mounted.findComponent({ name: 'SubscriptionProgressMini' }).exists()).toBe(false)
  })

  it('shows only dual-placement iframe pages in the header for regular users', () => {
    const appStore = useAppStore()
    const authStore = useAuthStore()
    authStore.user = signedInUser
    appStore.cachedPublicSettings = {
      model_plaza_enabled: false,
      custom_menu_items: [
        { id: 'user-header', label: '用户帮助', icon_svg: '', url: 'https://example.com/user', visibility: 'user', placement: 'header', sort_order: 1 },
        { id: 'user-sidebar', label: '侧边帮助', icon_svg: '', url: 'https://example.com/sidebar', visibility: 'user', placement: 'sidebar', sort_order: 2 },
        { id: 'user-both', label: '双栏帮助', icon_svg: '', url: 'https://example.com/both', visibility: 'user', placement: 'both', sort_order: 3 },
        { id: 'all-header', label: '全员帮助', icon_svg: '', url: 'https://example.com/all', visibility: 'all', placement: 'header', sort_order: 4 },
        { id: 'all-both', label: '全员双栏', icon_svg: '', url: 'https://example.com/all-both', visibility: 'all', placement: 'both', sort_order: 5 },
        { id: 'admin-header', label: '管理帮助', icon_svg: '', url: 'https://example.com/admin', visibility: 'admin', placement: 'header', sort_order: 6 },
      ],
    } as PublicSettings

    const mounted = mountHeader()
    expect(mounted.find('[data-testid="header-custom-menu-user-header"]').exists()).toBe(false)
    expect(mounted.find('[data-testid="header-custom-menu-user-both"]').exists()).toBe(true)
    expect(mounted.find('[data-testid="header-custom-menu-all-header"]').exists()).toBe(false)
    expect(mounted.find('[data-testid="header-custom-menu-all-both"]').exists()).toBe(true)
    expect(mounted.find('[data-testid="header-custom-menu-admin-header"]').exists()).toBe(false)
    expect(mounted.text()).not.toContain('用户帮助')
    expect(mounted.text()).toContain('双栏帮助')
    expect(mounted.text()).not.toContain('侧边帮助')
  })

  it('shows only dual-placement iframe pages in the header for administrators', () => {
    const authStore = useAuthStore()
    const adminSettingsStore = useAdminSettingsStore()
    authStore.user = adminUser
    adminSettingsStore.customMenuItems = [
      { id: 'admin-header', label: '管理帮助', icon_svg: '', url: 'https://example.com/admin', visibility: 'admin', placement: 'header', sort_order: 1 },
      { id: 'user-header', label: '用户帮助', icon_svg: '', url: 'https://example.com/user', visibility: 'user', placement: 'header', sort_order: 2 },
      { id: 'admin-both', label: '管理双栏', icon_svg: '', url: 'https://example.com/admin-both', visibility: 'admin', placement: 'both', sort_order: 3 },
      { id: 'all-header', label: '全员帮助', icon_svg: '', url: 'https://example.com/all', visibility: 'all', placement: 'header', sort_order: 4 },
      { id: 'all-both', label: '全员双栏', icon_svg: '', url: 'https://example.com/all-both', visibility: 'all', placement: 'both', sort_order: 5 },
    ]

    const mounted = mountHeader()
    expect(mounted.find('[data-testid="header-custom-menu-admin-header"]').exists()).toBe(false)
    expect(mounted.find('[data-testid="header-custom-menu-admin-both"]').exists()).toBe(true)
    expect(mounted.find('[data-testid="header-custom-menu-all-header"]').exists()).toBe(false)
    expect(mounted.find('[data-testid="header-custom-menu-all-both"]').exists()).toBe(true)
    expect(mounted.find('[data-testid="header-custom-menu-user-header"]').exists()).toBe(false)
  })
})
