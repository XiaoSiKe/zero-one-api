import { describe, expect, it } from 'vitest'
import { CHANNEL_HEALTH_COLORS, CHANNEL_HEALTH_STYLE } from './lib/channelHealthPalette'

describe('landing channel health palette', () => {
  it('uses the shared blue, amber, red, and slate semantics', () => {
    expect(CHANNEL_HEALTH_COLORS).toEqual({
      operational: '#3B82F6',
      degraded: '#F59E0B',
      failed: '#EF4444',
      unknown: '#94A3B8',
    })
    expect(CHANNEL_HEALTH_STYLE).toMatchObject({
      '--channel-health-operational': '#3B82F6',
      '--channel-health-degraded': '#F59E0B',
      '--channel-health-failed': '#EF4444',
      '--channel-health-unknown': '#94A3B8',
    })
  })
})
