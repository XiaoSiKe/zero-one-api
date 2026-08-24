(() => {
  if (window.__ZERO_ONE_CCSWITCH_LAUNCH_GUARD__) return

  const LEGACY_PROBE_DELAY_MS = 100
  const PROBE_MATCH_WINDOW_MS = 1000
  const nativeOpen = window.open
  const nativeSetTimeout = window.setTimeout.bind(window)
  let ccSwitchOpenedAt = 0

  window.open = function patchedOpen(url, target, features) {
    const href = typeof url === 'string' ? url : url?.toString() || ''
    if (!href.startsWith('ccswitch://')) {
      return nativeOpen.call(window, url, target, features)
    }

    ccSwitchOpenedAt = Date.now()
    try {
      return nativeOpen.call(window, url, target, features)
    } catch (error) {
      ccSwitchOpenedAt = 0
      throw error
    }
  }

  window.setTimeout = function patchedSetTimeout(handler, delay, ...args) {
    const isLegacyCcSwitchProbe =
      ccSwitchOpenedAt > 0 &&
      delay === LEGACY_PROBE_DELAY_MS &&
      Date.now() - ccSwitchOpenedAt <= PROBE_MATCH_WINDOW_MS &&
      typeof handler === 'function' &&
      Function.prototype.toString.call(handler).includes('keys.ccSwitchNotInstalled')

    if (!isLegacyCcSwitchProbe) {
      return nativeSetTimeout(handler, delay, ...args)
    }

    ccSwitchOpenedAt = 0
    return 0
  }

  window.__ZERO_ONE_CCSWITCH_LAUNCH_GUARD__ = true
})()
