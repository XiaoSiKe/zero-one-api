import type { CSSProperties } from 'react'

export const CHANNEL_HEALTH_COLORS = {
  operational: '#3B82F6',
  degraded: '#F59E0B',
  failed: '#EF4444',
  unknown: '#94A3B8',
} as const

export const CHANNEL_HEALTH_STYLE = {
  '--channel-health-operational': CHANNEL_HEALTH_COLORS.operational,
  '--channel-health-degraded': CHANNEL_HEALTH_COLORS.degraded,
  '--channel-health-failed': CHANNEL_HEALTH_COLORS.failed,
  '--channel-health-unknown': CHANNEL_HEALTH_COLORS.unknown,
} as CSSProperties
