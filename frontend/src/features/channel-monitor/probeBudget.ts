const SECONDS_PER_DAY = 24 * 60 * 60

export function estimateDailyProbeRequests(intervalSeconds: number, modelCount: number): number {
  if (!Number.isFinite(intervalSeconds) || intervalSeconds <= 0) return 0
  if (!Number.isFinite(modelCount) || modelCount <= 0) return 0
  return Math.round((SECONDS_PER_DAY / intervalSeconds) * modelCount)
}

