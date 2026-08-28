import { sanitizeUrl } from '@/utils/url'

export const DEFAULT_SITE_NAME = '零一 API'
export const DEFAULT_SITE_SUBTITLE = '从零到一，连接每一次模型调用。'
export const PRODUCT_GITHUB_URL = 'https://github.com/XiaoSiKe/zero-one-api'

export function updateFavicon(logoUrl: string): void {
  const sanitizedLogoUrl = sanitizeUrl(logoUrl, {
    allowRelative: true,
    allowDataUrl: true,
  })
  if (!sanitizedLogoUrl) {
    return
  }

  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }

  link.type = sanitizedLogoUrl.endsWith('.svg') ? 'image/svg+xml' : 'image/x-icon'
  link.href = sanitizedLogoUrl
}
