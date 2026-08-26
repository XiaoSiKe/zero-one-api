import type { CustomMenuItem } from '@/types'

export const ONLINE_RECHARGE_FALLBACK_PATH = '/purchase?tab=recharge'

export function resolveOnlineRechargePath(
  items: readonly CustomMenuItem[] | null | undefined,
): string {
  const item = items?.find(
    (candidate) =>
      candidate.navigation_type !== 'qr' &&
      candidate.label.trim() === '在线充值' &&
      candidate.id,
  )
  return item
    ? `/custom/${encodeURIComponent(item.id)}`
    : ONLINE_RECHARGE_FALLBACK_PATH
}
