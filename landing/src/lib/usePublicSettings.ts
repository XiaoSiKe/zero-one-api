import { useEffect, useState } from 'react'
import { fetchPublicSettings, type PublicSettings } from './publicSettings'
import { subscribePageResume } from './pageResume'

// ZERO-ONE 二开保护：读取失败保持未授权，但不能被记成永久关闭；上游同步必须保留。
export function usePublicSettings(initialSettings: PublicSettings | null) {
  const [settings, setSettings] = useState(initialSettings)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let active = true
    let controller: AbortController | null = null
    let retryTimer: number | undefined
    const scheduleRetry = (delay: number) => {
      window.clearTimeout(retryTimer)
      retryTimer = window.setTimeout(() => {
        retryTimer = undefined
        if (document.hidden) scheduleRetry(30_000)
        else void load()
      }, delay)
    }
    const load = async () => {
      if (controller) return
      window.clearTimeout(retryTimer)
      retryTimer = undefined
      const requestController = new AbortController()
      controller = requestController
      const result = await fetchPublicSettings(undefined, undefined, requestController.signal)
      if (!active || requestController.signal.aborted) return
      controller = null
      setSettings(result)
      if (result === null) scheduleRetry(30_000)
    }
    const unsubscribe = subscribePageResume(() => void load())
    if (attempt > 0) void load()
    else if (initialSettings === null) scheduleRetry(1_000)
    return () => {
      active = false
      window.clearTimeout(retryTimer)
      controller?.abort()
      unsubscribe()
    }
  }, [initialSettings, attempt])

  return { settings, retry: () => setAttempt((value) => value + 1) }
}
