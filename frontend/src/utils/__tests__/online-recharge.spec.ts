import { describe, expect, it } from 'vitest'

import { resolveOnlineRechargePath } from '../online-recharge'

const menuItem = {
  id: 'online-recharge',
  label: '在线充值',
  icon_svg: '',
  url: 'https://pay.01yapi.test',
  visibility: 'all' as const,
  placement: 'both' as const,
  sort_order: 0,
}

describe('resolveOnlineRechargePath', () => {
  it('uses the configured iframe navigation item', () => {
    expect(resolveOnlineRechargePath([menuItem])).toBe('/custom/online-recharge')
  })

  it('ignores QR-only navigation and falls back to the built-in recharge tab', () => {
    expect(resolveOnlineRechargePath([{ ...menuItem, navigation_type: 'qr' }]))
      .toBe('/purchase?tab=recharge')
  })
})
