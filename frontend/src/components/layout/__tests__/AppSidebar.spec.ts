import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'
import type { CustomMenuItem } from '@/types'

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
