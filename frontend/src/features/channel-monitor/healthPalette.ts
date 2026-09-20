export type ChannelHealthTone = 'healthy' | 'warning' | 'critical' | 'unknown'

export const CHANNEL_HEALTH_COLORS = {
  healthy: '#3B82F6',
  warning: '#F59E0B',
  critical: '#EF4444',
  unknown: '#94A3B8',
} as const

export function channelHealthTone(status: string | null | undefined): ChannelHealthTone {
  switch (status) {
    case 'operational':
    case 'healthy':
      return 'healthy'
    case 'degraded':
    case 'warning':
      return 'warning'
    case 'failed':
    case 'error':
    case 'critical':
      return 'critical'
    default:
      return 'unknown'
  }
}

export function channelHealthBadgeClass(status: string | null | undefined): string {
  switch (channelHealthTone(status)) {
    case 'healthy':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
    case 'warning':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300'
    case 'critical':
      return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-300'
  }
}

export function channelHealthTextClass(status: string | null | undefined): string {
  switch (channelHealthTone(status)) {
    case 'healthy':
      return 'text-blue-600 dark:text-blue-400'
    case 'warning':
      return 'text-amber-700 dark:text-amber-300'
    case 'critical':
      return 'text-red-600 dark:text-red-400'
    default:
      return 'text-gray-500 dark:text-dark-400'
  }
}

export function channelHealthDotClass(status: string | null | undefined, pulse = false): string {
  const animation = pulse && channelHealthTone(status) !== 'unknown' ? ' animate-pulse' : ''
  switch (channelHealthTone(status)) {
    case 'healthy':
      return `bg-blue-500${animation}`
    case 'warning':
      return `bg-amber-500${animation}`
    case 'critical':
      return `bg-red-500${animation}`
    default:
      return 'bg-slate-400 dark:bg-slate-500'
  }
}

export function channelHealthColor(status: string | null | undefined): string {
  return CHANNEL_HEALTH_COLORS[channelHealthTone(status)]
}

