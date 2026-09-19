import { i18n } from '@/i18n'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { CustomMenuItem } from '@/types'
import { DEFAULT_SITE_NAME } from '@/utils/branding'
import type { SiteBillingMode } from '@/utils/siteBillingMode'

export const PURCHASE_ROUTE_NAME = 'PurchaseSubscription'

interface RouteTitleOptions {
  billingMode?: SiteBillingMode
}

type RouteMetaSource = Pick<RouteLocationNormalizedLoaded, 'name' | 'meta'>

export function resolveRouteMetaKeys(
  route: RouteMetaSource,
  options: RouteTitleOptions = {},
): { titleKey: string | undefined; descriptionKey: string | undefined } {
  const titleKey = typeof route.meta.titleKey === 'string' ? route.meta.titleKey : undefined
  const descriptionKey = typeof route.meta.descriptionKey === 'string' ? route.meta.descriptionKey : undefined

  if (route.name !== PURCHASE_ROUTE_NAME) return { titleKey, descriptionKey }

  switch (options.billingMode) {
    case 'recharge_only':
      return { titleKey: 'nav.recharge', descriptionKey: 'purchase.rechargeDescription' }
    case 'subscription_only':
      return { titleKey: 'nav.subscribe', descriptionKey: 'purchase.subscriptionDescription' }
    default:
      return { titleKey, descriptionKey }
  }
}

/**
 * 统一生成页面标题，避免多处写入 document.title 产生覆盖冲突。
 * 优先使用 titleKey 通过 i18n 翻译，fallback 到静态 routeTitle。
 */
export function resolveDocumentTitle(routeTitle: unknown, siteName?: string, titleKey?: string): string {
  const normalizedSiteName = typeof siteName === 'string' && siteName.trim() ? siteName.trim() : DEFAULT_SITE_NAME

  if (typeof titleKey === 'string' && titleKey.trim()) {
    const translated = i18n.global.t(titleKey)
    if (translated && translated !== titleKey) {
      return `${translated} - ${normalizedSiteName}`
    }
  }

  if (typeof routeTitle === 'string' && routeTitle.trim()) {
    return `${routeTitle.trim()} - ${normalizedSiteName}`
  }

  return normalizedSiteName
}

export function resolveRouteDocumentTitle(
  route: Pick<RouteLocationNormalizedLoaded, 'name' | 'params' | 'meta'>,
  siteName: string | undefined,
  customMenuItems: CustomMenuItem[] = [],
  options: RouteTitleOptions = {},
): string {
  const id = typeof route.params.id === 'string' ? route.params.id : ''
  const menuItem = route.name === 'CustomPage' && id
    ? customMenuItems.find((item) => item.id === id)
    : undefined
  const menuTitle = menuItem?.label.trim()
  const { titleKey } = resolveRouteMetaKeys(route, options)

  return resolveDocumentTitle(menuTitle || route.meta.title, siteName, menuTitle ? undefined : titleKey)
}
