import type { CustomMenuItem } from '@/types'

export const IMAGE_TUTORIAL_MENU_ID = 'image-tutorial'

const IMAGE_TUTORIAL_MENU_LABELS = new Set([
  '生图教程',
  'image tutorial',
  'image generation tutorial',
])

function isEmbeddableSidebarPage(item: CustomMenuItem): boolean {
  return (
    item.navigation_type !== 'qr' &&
    item.placement !== 'header' &&
    Boolean(item.id.trim()) &&
    Boolean(item.url.trim())
  )
}

export function findImageTutorialMenuItem(
  items: readonly CustomMenuItem[] | null | undefined,
): CustomMenuItem | undefined {
  const pages = items?.filter(isEmbeddableSidebarPage) ?? []
  return pages.find((item) => item.id === IMAGE_TUTORIAL_MENU_ID) ??
    pages.find((item) => IMAGE_TUTORIAL_MENU_LABELS.has(item.label.trim().toLowerCase()))
}

export function resolveImageTutorialPath(
  items: readonly CustomMenuItem[] | null | undefined,
): string {
  const item = findImageTutorialMenuItem(items)
  return item ? `/custom/${encodeURIComponent(item.id)}` : ''
}
