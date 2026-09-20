import { describe, expect, it } from 'vitest'
import {
  CHANNEL_HEALTH_COLORS,
  channelHealthBadgeClass,
  channelHealthColor,
  channelHealthDotClass,
  channelHealthTextClass,
  channelHealthTone,
} from '../healthPalette'
import { estimateDailyProbeRequests } from '../probeBudget'

describe('channel health palette', () => {
  it('maps all monitor vocabularies to one semantic tone', () => {
    expect(channelHealthTone('operational')).toBe('healthy')
    expect(channelHealthTone('healthy')).toBe('healthy')
    expect(channelHealthTone('degraded')).toBe('warning')
    expect(channelHealthTone('warning')).toBe('warning')
    expect(channelHealthTone('failed')).toBe('critical')
    expect(channelHealthTone('error')).toBe('critical')
    expect(channelHealthTone('critical')).toBe('critical')
    expect(channelHealthTone('unavailable')).toBe('unknown')
  })

  it('uses blue, amber, red and slate without the global alert palette', () => {
    expect(channelHealthColor('operational')).toBe(CHANNEL_HEALTH_COLORS.healthy)
    expect(channelHealthColor('degraded')).toBe('#F59E0B')
    expect(channelHealthColor('error')).toBe('#EF4444')
    expect(channelHealthColor('unknown')).toBe('#94A3B8')
    expect(channelHealthBadgeClass('degraded')).toContain('bg-amber-100')
    expect(channelHealthTextClass('warning')).toContain('text-amber-700')
    expect(channelHealthDotClass('error')).toBe('bg-red-500')
    expect(channelHealthDotClass('operational', true)).toBe('bg-blue-500 animate-pulse')
  })
})

describe('probe request budget', () => {
  it('estimates primary and extra model requests per day', () => {
    expect(estimateDailyProbeRequests(120, 1)).toBe(720)
    expect(estimateDailyProbeRequests(120, 3)).toBe(2160)
    expect(estimateDailyProbeRequests(15, 1)).toBe(5760)
  })

  it('fails closed for invalid inputs', () => {
    expect(estimateDailyProbeRequests(0, 1)).toBe(0)
    expect(estimateDailyProbeRequests(60, 0)).toBe(0)
    expect(estimateDailyProbeRequests(Number.NaN, 1)).toBe(0)
  })
})
