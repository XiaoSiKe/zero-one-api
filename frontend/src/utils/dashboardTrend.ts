import type { TrendDataPoint } from '@/types'

export type DashboardTrendGranularity = 'day' | 'hour'

const emptyPoint = (date: string): TrendDataPoint => ({
  date,
  requests: 0,
  input_tokens: 0,
  output_tokens: 0,
  cache_creation_tokens: 0,
  cache_read_tokens: 0,
  total_tokens: 0,
  cost: 0,
  actual_cost: 0,
})

const localDate = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

const localHour = (date: Date): string =>
  `${localDate(date)} ${String(date.getHours()).padStart(2, '0')}:00`

const startOfLocalDay = (value: string): Date => {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function fillDashboardTrendBuckets(
  points: TrendDataPoint[],
  startDate: string,
  endDate: string,
  granularity: DashboardTrendGranularity,
  now = new Date(),
): TrendDataPoint[] {
  const start = startOfLocalDay(startDate)
  const endExclusive = startOfLocalDay(endDate)
  endExclusive.setDate(endExclusive.getDate() + 1)
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(endExclusive.getTime()) || start >= endExclusive) {
    return []
  }

  const pointsByDate = new Map(points.map(point => [point.date, point]))
  const result: TrendDataPoint[] = []
  const cursor = new Date(start)
  if (granularity === 'hour') {
    const cappedEnd = endExclusive < now ? endExclusive : new Date(now.getTime() + 1)
    while (cursor < cappedEnd) {
      const key = localHour(cursor)
      result.push(pointsByDate.get(key) ?? emptyPoint(key))
      cursor.setHours(cursor.getHours() + 1)
    }
    return result
  }

  const today = startOfLocalDay(localDate(now))
  while (cursor < endExclusive && cursor <= today) {
    const key = localDate(cursor)
    result.push(pointsByDate.get(key) ?? emptyPoint(key))
    cursor.setDate(cursor.getDate() + 1)
  }
  return result
}

export function formatDashboardTokens(value: number | null | undefined): string {
  const tokens = Number.isFinite(Number(value)) ? Number(value) : 0
  return tokens >= 1_000_000_000
    ? `${(tokens / 1_000_000_000).toFixed(2)}B`
    : `${(tokens / 1_000_000).toFixed(2)}M`
}

export function formatDashboardTrendLabel(value: string): string {
  if (value.includes('T')) return value.slice(11, 16)
  if (value.includes(' ')) return value.slice(11, 16)
  return value.length >= 10 ? value.slice(5, 10) : value
}
