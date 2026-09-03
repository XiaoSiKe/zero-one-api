(() => {
  if (window.__ZERO_ONE_CCSWITCH_LAUNCH_GUARD__) return

  const LEGACY_PROBE_DELAY_MS = 100
  const PROBE_MATCH_WINDOW_MS = 1000
  const NOTICE_DURATION_MS = 6000
  const nativeOpen = window.open
  const nativeSetTimeout = window.setTimeout.bind(window)
  let ccSwitchOpenedAt = 0
  let noticeTimer = 0

  function launchProtocolLink(href) {
    const link = document.createElement('a')
    link.href = href
    link.hidden = true
    link.setAttribute('aria-hidden', 'true')
    document.body.append(link)
    try {
      link.click()
    } finally {
      link.remove()
    }
  }

  function showLaunchNotice() {
    let notice = document.querySelector('[data-zero-one-ccswitch-launch-notice]')
    if (!(notice instanceof HTMLElement)) {
      notice = document.createElement('div')
      notice.dataset.zeroOneCcswitchLaunchNotice = 'true'
      notice.setAttribute('role', 'status')
      notice.setAttribute('aria-live', 'polite')
      Object.assign(notice.style, {
        position: 'fixed',
        right: '16px',
        bottom: '16px',
        zIndex: '100000030',
        maxWidth: '420px',
        padding: '12px 16px',
        border: '1px solid rgba(148, 163, 184, 0.35)',
        borderRadius: '12px',
        background: 'rgba(15, 23, 42, 0.96)',
        color: '#f8fafc',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
        fontSize: '14px',
        lineHeight: '1.5',
      })
      document.body.append(notice)
    }
    const locale = window.localStorage.getItem('sub2api_locale') || document.documentElement.lang
    notice.textContent = String(locale).toLowerCase().startsWith('en')
      ? 'Opening CC-Switch. If it does not start, check the installation and allow external applications, or copy the API key manually.'
      : '正在尝试打开 CC-Switch。如果没有启动，请检查安装和浏览器外部应用权限，或手动复制 API 密钥。'
    window.clearTimeout(noticeTimer)
    noticeTimer = window.setTimeout(() => notice.remove(), NOTICE_DURATION_MS)
  }

  window.open = function patchedOpen(url, target, features) {
    const href = typeof url === 'string' ? url : url?.toString() || ''
    if (!href.startsWith('ccswitch://')) {
      return nativeOpen.call(window, url, target, features)
    }

    ccSwitchOpenedAt = Date.now()
    try {
      launchProtocolLink(href)
      showLaunchNotice()
      return null
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
