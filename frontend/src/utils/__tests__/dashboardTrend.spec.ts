import { describe, expect, it } from 'vitest'
import { fillDashboardTrendBuckets, formatDashboardTokens, formatDashboardTrendLabel } from '../dashboardTrend'

describe('dashboard trend helpers', () => {
  it('fills missing hourly buckets and stops at the current hour', () => {
    const points = [{
      date: '2026-09-08 01:00', requests: 1, input_tokens: 1, output_tokens: 2,
      cache_creation_tokens: 3, cache_read_tokens: 4, total_tokens: 10, cost: 2, actual_cost: 1,
    }]
    const result = fillDashboardTrendBuckets(points, '2026-09-08', '2026-09-08', 'hour', new Date(2026, 8, 8, 2, 20))
    expect(result.map(point => point.date)).toEqual([
      '2026-09-08 00:00', '2026-09-08 01:00', '2026-09-08 02:00',
    ])
    expect(result.map(point => point.total_tokens)).toEqual([0, 10, 0])
  })

  it('fills daily buckets without adding future dates', () => {
    const result = fillDashboardTrendBuckets([], '2026-09-07', '2026-09-10', 'day', new Date(2026, 8, 8, 12))
    expect(result.map(point => point.date)).toEqual(['2026-09-07', '2026-09-08'])
  })

  it('formats dashboard token values with only M and B units', () => {
    expect(formatDashboardTokens(0)).toBe('0.00M')
    expect(formatDashboardTokens(12_500)).toBe('0.01M')
    expect(formatDashboardTokens(42_000_000)).toBe('42.00M')
    expect(formatDashboardTokens(1_250_000_000)).toBe('1.25B')
  })

  it('keeps chart labels compact for hourly and daily buckets', () => {
    expect(formatDashboardTrendLabel('2026-09-08 13:00')).toBe('13:00')
    expect(formatDashboardTrendLabel('2026-09-08T13:00:00+08:00')).toBe('13:00')
    expect(formatDashboardTrendLabel('2026-09-08')).toBe('09-08')
  })
})
