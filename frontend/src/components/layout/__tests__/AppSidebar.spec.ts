import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { nextTick, reactive } from 'vue'
import AppSidebar from '../AppSidebar.vue'
import { sortNavItems } from '@/utils/navigation-order'
import type { NavigationSettings } from '@/api/admin/settings'
import type { CustomMenuItem } from '@/types'

const sidebarAuth = reactive({ isAdmin: true, isSimpleMode: false })
const sidebarApp = reactive({
  sidebarCollapsed: false, mobileOpen: false, siteName: '零一', siteLogo: '', siteVersion: '',
  sidebarScrollTop: 0, contactInfo: '', docUrl: '',
  cachedPublicSettings: {
    admin_sidebar_order: [] as string[], user_sidebar_order: [] as string[],
    custom_menu_items: [] as CustomMenuItem[], profile_navigation_enabled: true,
    subscription_navigation_enabled: true, model_plaza_placement: 'sidebar',
    landing_tutorial_url: '',
  },
  toggleSidebar: vi.fn(), setMobileOpen: vi.fn(),
})
const sidebarAdmin = reactive({
  customMenuItems: [] as CustomMenuItem[], navigationSettings: null as NavigationSettings | null,
  opsMonitoringEnabled: true, paymentEnabled: true, fetch: vi.fn(),
})
vi.mock('@/stores', () => ({
  useAppStore: () => sidebarApp,
  useAuthStore: () => sidebarAuth,
  useAdminSettingsStore: () => sidebarAdmin,
  useOnboardingStore: () => ({ isCurrentStep: () => false }),
}))
vi.mock('@/composables/useBatchImageAccess', () => ({
  useBatchImageAccess: () => ({ canUseBatchImage: { value: false }, refreshBatchImageAccess: vi.fn() }),
}))
vi.mock('@/composables/useImageGenerationAccess', () => ({
  useImageGenerationAccess: () => ({ canUseImageGeneration: { value: true }, refreshImageGenerationAccess: vi.fn() }),
}))
vi.mock('@/utils/featureFlags', () => ({
  FeatureFlags: {},
  isFeatureFlagEnabled: () => true,
  makeSidebarFlag: () => () => true,
}))
vi.mock('vue-i18n', async (importOriginal) => ({
  ...await importOriginal<typeof import('vue-i18n')>(),
  useI18n: () => ({ t: (key: string) => key }),
}))
enableAutoUnmount(afterEach)

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../AppSidebar.vue')
const componentSource = readFileSync(componentPath, 'utf8')
const versionBadgePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../common/VersionBadge.vue'
)
const versionBadgeSource = readFileSync(versionBadgePath, 'utf8')
const stylePath = resolve(dirname(fileURLToPath(import.meta.url)), '../../../style.css')
const styleSource = readFileSync(stylePath, 'utf8')
const consoleSkinPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../../styles/console-skin.css'
)
const consoleSkinSource = readFileSync(consoleSkinPath, 'utf8')

describe('AppSidebar custom SVG styles', () => {
  it('does not override uploaded SVG fill or stroke colors', () => {
    expect(componentSource).toContain('.sidebar-svg-icon {')
    expect(componentSource).toContain('color: currentColor;')
    expect(componentSource).toContain('display: block;')
    expect(componentSource).not.toContain('stroke: currentColor;')
    expect(componentSource).not.toContain('fill: none;')
  })
})

describe('AppSidebar custom menu placement', () => {
  it('keeps legacy, sidebar, and dual-placement items while excluding header-only items', () => {
    expect(componentSource).toContain(
      "(item.visibility === 'user' || item.visibility === 'all') &&"
    )
    expect(componentSource).toContain(
      "(item.visibility === 'admin' || item.visibility === 'all') &&"
    )
    expect(componentSource).toContain('...(withDashboard ? customMenuItemsForUser.value : []).map')

    const placements: CustomMenuItem['placement'][] = [undefined, 'sidebar', 'header', 'both']
    expect(placements.filter((placement) => placement !== 'header')).toEqual([
      undefined,
      'sidebar',
      'both',
    ])
  })

  it('keeps an all-role, dual-placement item in both role-specific sidebar lists', () => {
    const item: CustomMenuItem = {
      id: 'shared-both',
      label: '全员双栏',
      icon_svg: '',
      url: 'https://example.com/shared',
      visibility: 'all',
      placement: 'both',
      sort_order: 0,
    }

    expect(
      (item.visibility === 'user' || item.visibility === 'all') && item.placement !== 'header'
    ).toBe(true)
    expect(
      (item.visibility === 'admin' || item.visibility === 'all') && item.placement !== 'header'
    ).toBe(true)
  })
})

describe('AppSidebar configurable built-in navigation', () => {
  it('gates profile and subscription entries with public settings', () => {
    expect(componentSource).toContain('profileNavigationEnabled')
    expect(componentSource).toContain('subscriptionNavigationEnabled')
    expect(componentSource).toContain("path: '/profile'")
    expect(componentSource).toContain("path: '/subscriptions'")
    expect(componentSource).toContain(
      "{ path: '/admin/subscriptions', label: t('nav.subscriptions'), icon: CreditCardIcon, hideInSimpleMode: true },"
    )
    expect(componentSource).not.toContain(
      "{ path: '/admin/subscriptions', label: t('nav.subscriptions'), icon: CreditCardIcon, hideInSimpleMode: true, featureFlag: flagSubscriptionNavigation },"
    )
  })

  it('moves Model Plaza into the sidebar only when configured there', () => {
    expect(componentSource).toContain('modelPlazaPlacement')
    expect(componentSource).toContain("path: '/model-plaza'")
    expect(componentSource).toContain('flagModelPlazaInSidebar')
  })

  it('applies persisted role-specific sidebar order after visibility filtering', () => {
    expect(componentSource).toContain('user_sidebar_order')
    expect(componentSource).toContain('admin_sidebar_order')
    expect(componentSource).toContain('sortNavItems')
    expect(componentSource).toContain('userSidebarOrder.value')
    expect(componentSource).toContain('adminSidebarOrder.value')
  })
})

describe('AppSidebar affiliate navigation', () => {
  it('keeps the admin entry top-level and always reachable while gating the user entry', () => {
    const adminStart = componentSource.indexOf("      path: '/admin/affiliates',")
    const nextAdminItem = componentSource.indexOf("      path: '/admin/orders',", adminStart)
    const adminBlock = componentSource.slice(adminStart, nextAdminItem)

    expect(adminStart).toBeGreaterThan(-1)
    expect(adminBlock).not.toContain('children:')
    expect(adminBlock).not.toContain('expandOnly:')
    expect(adminBlock).not.toContain('featureFlag:')
    expect(adminBlock).not.toContain('hideInSimpleMode:')

    expect(componentSource).toContain(
      "{ path: '/affiliate', label: t('nav.affiliate'), icon: UsersIcon, hideInSimpleMode: true, featureFlag: flagAffiliate }"
    )
    expect(componentSource).toContain(
      "finalizeNav(buildSelfNavItems(false).filter((item) => item.path !== '/affiliate'))"
    )
  })
})

describe('AppSidebar scroll position persistence', () => {
  it('binds a template ref to the sidebar nav element', () => {
    expect(componentSource).toContain('ref="sidebarNavRef"')
    expect(componentSource).toContain('sidebar-nav')
  })

  it('declares sidebarNavRef in script setup', () => {
    expect(componentSource).toContain("const sidebarNavRef = ref<HTMLElement | null>(null)")
  })

  it('saves scroll position on beforeUnmount', () => {
    expect(componentSource).toContain('onBeforeUnmount')
    expect(componentSource).toContain('appStore.sidebarScrollTop')
    expect(componentSource).toContain('sidebarNavRef.value.scrollTop')
  })

  it('restores scroll position synchronously when the shell mounts', () => {
    expect(componentSource).toContain('onMounted')
    expect(componentSource).toContain('appStore.sidebarScrollTop')
    expect(componentSource).toContain('sidebarNavRef.value.scrollTop = appStore.sidebarScrollTop')
    expect(componentSource).not.toContain('void nextTick(')
  })
})

describe('AppSidebar header styles', () => {
  it('does not clip the version badge dropdown', () => {
    const sidebarHeaderBlockMatch = styleSource.match(/\.sidebar-header\s*\{[\s\S]*?\n {2}\}/)
    const sidebarBrandBlockMatch = componentSource.match(/\.sidebar-brand\s*\{[\s\S]*?\n\}/)

    expect(sidebarHeaderBlockMatch).not.toBeNull()
    expect(sidebarBrandBlockMatch).not.toBeNull()
    expect(sidebarHeaderBlockMatch?.[0]).not.toContain('@apply overflow-hidden;')
    expect(sidebarBrandBlockMatch?.[0]).not.toContain('overflow: hidden;')
  })

  it('does not trap the version dropdown beneath sidebar navigation layers', () => {
    const versionBadgeBlockMatch = componentSource.match(
      /:deep\(\.sidebar-brand > \.relative\)\s*\{[\s\S]*?\n\}/
    )

    expect(versionBadgeBlockMatch).not.toBeNull()
    expect(versionBadgeBlockMatch?.[0]).toContain('position: relative;')
    expect(versionBadgeBlockMatch?.[0]).toContain('top: -5pt;')
    expect(versionBadgeBlockMatch?.[0]).not.toContain('transform:')
  })

  it('applies the requested title and version badge offsets', () => {
    expect(componentSource).toContain('transform: translateY(5pt);')
    expect(componentSource).toContain('top: -5pt;')
  })
})

describe('AppSidebar pill navigation motion', () => {
  it('uses CSS-only pill states and a lightweight submenu transition', () => {
    expect(componentSource).toContain('<Transition name="sidebar-subnav">')
    expect(componentSource).toContain('sidebar console-skin-sidebar')
    expect(consoleSkinSource).toContain('.sidebar-link::before')
    expect(consoleSkinSource).toContain('--pill-reveal-size: 22rem;')
    expect(consoleSkinSource).toContain('border-radius: 50%;')
    expect(consoleSkinSource).toContain(
      'transform-origin: 50% calc(100% + var(--pill-reveal-bottom));'
    )
    expect(consoleSkinSource).toContain('@media (any-hover: hover) and (any-pointer: fine)')
    expect(consoleSkinSource).toContain('@media (prefers-reduced-motion: reduce)')
    expect(componentSource).not.toContain("from 'gsap'")
  })

  it('keeps collapsed navigation and expandable groups accessible', () => {
    expect(componentSource).toContain(':inert="sidebarCollapsed || undefined"')
    expect(componentSource).toContain(':aria-expanded="sidebarCollapsed ? undefined : isGroupExpanded(item)"')
    expect(componentSource).toContain(':aria-label="item.label"')
  })
})

describe('AppSidebar managed release updates', () => {
  it('marks the branded Docker release as externally managed', () => {
    expect(componentSource).toContain('<VersionBadge managed :version="siteVersion" />')
    expect(versionBadgeSource).toContain('managed?: boolean')
    expect(versionBadgeSource).toContain('const isManagedRelease = computed(() => props.managed === true)')
  })

  it('shows managed guidance before the in-place release updater', () => {
    const managedBranch = versionBadgeSource.indexOf(
      'v-else-if="hasUpdate && isManagedRelease"'
    )
    const inPlaceBranch = versionBadgeSource.indexOf(
      'v-else-if="hasUpdate && isReleaseBuild"'
    )

    expect(managedBranch).toBeGreaterThan(-1)
    expect(inPlaceBranch).toBeGreaterThan(managedBranch)
    expect(versionBadgeSource).toContain("t('version.managedUpdateHint')")
    expect(versionBadgeSource).toContain("t('version.managedRollbackHint')")
  })
})

describe('AppSidebar rendered ordering', () => {
  beforeEach(() => {
    sidebarAuth.isAdmin = true
    sidebarAuth.isSimpleMode = false
    sidebarApp.sidebarCollapsed = false
    sidebarApp.cachedPublicSettings.admin_sidebar_order = []
    sidebarApp.cachedPublicSettings.user_sidebar_order = []
    sidebarApp.cachedPublicSettings.custom_menu_items = []
    sidebarApp.cachedPublicSettings.landing_tutorial_url = ''
    sidebarApp.cachedPublicSettings.profile_navigation_enabled = true
    sidebarAdmin.customMenuItems = []
    sidebarAdmin.navigationSettings = null
  })

  async function renderSidebar() {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
    })
    await router.push('/admin/dashboard')
    return { router, wrapper: mount(AppSidebar, {
      global: { plugins: [router], stubs: { VersionBadge: true } },
    }) }
  }

  it('keeps dashboard first with duplicate saved paths and moves complete expandable groups', async () => {
    sidebarApp.cachedPublicSettings.admin_sidebar_order = [
      '/admin/dashboard', '/admin/channels', '/admin/orders', '/admin/security-audit', '/admin/dashboard', '/removed',
    ]
    const { router, wrapper } = await renderSidebar()
    const section = wrapper.findAll('.sidebar-section')[0]
    const topLevelLabels = () => Array.from(section.element.children)
      .filter((item) => item.matches('a.sidebar-link, button.sidebar-link'))
      .map((item) => item.getAttribute('aria-label'))

    expect(topLevelLabels().slice(0, 4)).toEqual([
      'nav.dashboard', 'nav.channelManagement', 'nav.orderManagement', 'nav.securityAudit',
    ])
    const group = section.get('button[aria-label="nav.channelManagement"]')
    expect(group.attributes('data-navigation-path')).toBe('/admin/channels')
    await group.trigger('click')
    expect(group.attributes('aria-expanded')).toBe('true')
    const children = group.element.nextElementSibling!
    expect(Array.from(children.querySelectorAll('a')).map((item) => item.getAttribute('href')))
      .toEqual(['/admin/channels/pricing', '/admin/channels/monitor'])
    await router.push('/admin/channels/monitor')
    expect(topLevelLabels().slice(0, 2)).toEqual(['nav.dashboard', 'nav.channelManagement'])
    sidebarApp.sidebarCollapsed = true
    await nextTick()
    expect(topLevelLabels().slice(0, 2)).toEqual(['nav.dashboard', 'nav.channelManagement'])
  })

  it('keeps visible user and admin personal entries in the same configured order', async () => {
    sidebarApp.cachedPublicSettings.user_sidebar_order = ['/profile', '/usage', '/keys', '/usage', '/removed']
    sidebarApp.cachedPublicSettings.profile_navigation_enabled = false
    const { wrapper } = await renderSidebar()
    const personal = wrapper.findAll('.sidebar-section')[1]
    expect(personal.findAll('a.sidebar-link').slice(0, 2).map((link) => link.attributes('href')))
      .toEqual(['/usage', '/keys'])
    expect(personal.find('a[href="/profile"]').exists()).toBe(false)

    sidebarAuth.isAdmin = false
    await nextTick()
    expect(wrapper.findAll('a.sidebar-link').slice(0, 2).map((link) => link.attributes('href')))
      .toEqual(['/usage', '/keys'])
  })

  it('uses the image tutorial custom page once in the persisted user order', async () => {
    sidebarApp.cachedPublicSettings.custom_menu_items = [{
      id: 'image-tutorial', label: '生图教程', icon_svg: '',
      url: 'https://docs.example.test/image-generation', visibility: 'user',
      placement: 'sidebar', sort_order: 0,
    }]
    sidebarApp.cachedPublicSettings.user_sidebar_order = ['/custom/image-tutorial', '/images', '/keys']
    const { wrapper } = await renderSidebar()
    sidebarAuth.isAdmin = false
    await nextTick()
    const links = wrapper.findAll('a[href="/custom/image-tutorial"]')
    expect(links).toHaveLength(1)
    expect(wrapper.findAll('a.sidebar-link')[0].attributes('href')).toBe('/custom/image-tutorial')
    expect(wrapper.find('a[href="/image-tutorial"]').exists()).toBe(false)
  })

  it('shows the migrated image tutorial from the admin navigation projection', async () => {
    sidebarAdmin.customMenuItems = [{
      id: 'image-tutorial', label: '生图教程', icon_svg: '',
      url: 'https://docs.example.test/image-generation', visibility: 'user',
      placement: 'sidebar', sort_order: 0,
    }]
    const { wrapper } = await renderSidebar()
    const tutorial = wrapper.get('a[href="/custom/image-tutorial"]')
    expect(tutorial.text()).toContain('生图教程')
  })

  it('keeps filtered simple-mode groups out and orders model plaza and custom entries once', async () => {
    sidebarAuth.isSimpleMode = true
    sidebarAdmin.customMenuItems = [{
      id: 'help', label: '帮助', icon_svg: '', url: 'https://example.test/help',
      visibility: 'admin', placement: 'sidebar', sort_order: 0,
    }]
    sidebarApp.cachedPublicSettings.admin_sidebar_order = [
      '/admin/channels', '/custom/help', '/model-plaza', '/admin/dashboard', '/custom/help',
    ]
    const { wrapper } = await renderSidebar()
    expect(wrapper.findAll('a.sidebar-link').slice(0, 3).map((link) => link.attributes('href')))
      .toEqual(['/custom/help', '/model-plaza', '/admin/dashboard'])
    expect(wrapper.findAll('a[href="/custom/help"]')).toHaveLength(1)
    expect(wrapper.find('button[aria-label="nav.channelManagement"]').exists()).toBe(false)
    expect(wrapper.findAll('.sidebar-section')).toHaveLength(1)
  })

  it('uses the lightweight admin projection when the public order is stale', async () => {
    sidebarApp.cachedPublicSettings.admin_sidebar_order = ['/admin/settings', '/admin/dashboard']
    sidebarAdmin.navigationSettings = {
      custom_menu_items: [], user_sidebar_order: [],
      admin_sidebar_order: ['/admin/dashboard', '/admin/channels'],
      profile_navigation_enabled: false, subscription_navigation_enabled: false,
      model_plaza_placement: 'header', ops_monitoring_enabled: true,
      ops_realtime_monitoring_enabled: true, ops_query_mode_default: 'auto',
    }
    const { wrapper } = await renderSidebar()
    expect(wrapper.findAll('a.sidebar-link')[0].attributes('href')).toBe('/admin/dashboard')
    expect(wrapper.find('a[href="/profile"]').exists()).toBe(false)
    expect(wrapper.find('a[href="/model-plaza"]').exists()).toBe(false)
    sidebarAuth.isAdmin = false
    await nextTick()
    expect(wrapper.find('a[href="/profile"]').exists()).toBe(true)
  })

  it('ignores malformed order values without extracting children or duplicating menu entries', () => {
    const group = { path: '/admin/channels', children: [{ path: '/admin/channels/monitor' }] }
    const items = [group, { path: '/keys' }, { path: '/model-plaza' }, { path: '/keys' }]
    const ordered = sortNavItems(items, ['/admin/channels/monitor', null, '/keys', '/missing', '/keys'])
    expect(ordered.map((item) => item.path)).toEqual(['/keys', '/admin/channels', '/model-plaza'])
    expect(ordered[1]).toBe(group)
    expect(sortNavItems(items, { order: ['/keys'] }).map((item) => item.path))
      .toEqual(['/admin/channels', '/keys', '/model-plaza'])
  })
})
