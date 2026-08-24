// Navigation reconciliation for the approved recovered Console snapshot.
//
// All recovered overlays register their idempotent reconcile work here. This
// keeps Router history hooks and DOM observation in one place, so route
// replacement cannot make each overlay write the navigation UI on a later frame.
(() => {
  if (window.__ZERO_ONE_NAVIGATION_RECONCILIATION__) return

  const reconciliations = new Map()
  let scheduled = false
  let appObserver = null
  let sidebarContinuityFrame = 0
  let sidebarContinuityTimeout = 0
  let sidebarContinuitySource = null

  function flush() {
    scheduled = false
    for (const reconcile of reconciliations.values()) {
      try {
        reconcile()
      } catch (error) {
        console.error('Recovered Console navigation reconcile failed:', error)
      }
    }
  }

  function request() {
    if (scheduled) return
    scheduled = true
    queueMicrotask(flush)
  }

  function observeApp() {
    if (appObserver) return
    const app = document.querySelector('#app')
    if (!(app instanceof HTMLElement)) return

    appObserver = new MutationObserver(request)
    appObserver.observe(app, { childList: true, subtree: true })
  }

  function register(name, reconcile) {
    if (typeof name !== 'string' || !name || typeof reconcile !== 'function') {
      throw new TypeError('Recovered Console reconcile registration is invalid')
    }
    reconciliations.set(name, reconcile)
    request()
    return () => reconciliations.delete(name)
  }

  function isPlainSidebarNavigation(event, link) {
    return !(
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.hasAttribute('download') ||
      (link.target && link.target.toLowerCase() !== '_self')
    )
  }

  function releaseSidebarContinuity() {
    if (sidebarContinuityFrame) cancelAnimationFrame(sidebarContinuityFrame)
    if (sidebarContinuityTimeout) clearTimeout(sidebarContinuityTimeout)
    sidebarContinuityFrame = 0
    sidebarContinuityTimeout = 0
    sidebarContinuitySource = null
    document.querySelector('[data-zero-one-sidebar-continuity]')?.remove()
  }

  function markContinuityTarget(sidebar, destination) {
    for (const link of sidebar.querySelectorAll('a.sidebar-link')) {
      if (!(link instanceof HTMLAnchorElement)) continue
      const current = new URL(link.href, window.location.href)
      const active = current.pathname === destination.pathname && current.search === destination.search
      link.classList.toggle('sidebar-link-active', active)
      if (active) link.setAttribute('aria-current', 'page')
      else link.removeAttribute('aria-current')
    }
  }

  function waitForSidebarContinuity(destination) {
    const current = document.querySelector('aside')
    const routeReached =
      window.location.pathname === destination.pathname &&
      window.location.search === destination.search
    const newSidebarReady =
      current instanceof HTMLElement &&
      current !== sidebarContinuitySource &&
      current.getBoundingClientRect().width > 0

    if (routeReached && (newSidebarReady || current === sidebarContinuitySource)) {
      request()
      sidebarContinuityFrame = requestAnimationFrame(releaseSidebarContinuity)
      return
    }
    sidebarContinuityFrame = requestAnimationFrame(() => waitForSidebarContinuity(destination))
  }

  function preserveSidebarContinuity(event) {
    const target = event.target instanceof Element
      ? event.target.closest('aside a.sidebar-link')
      : null
    if (!(target instanceof HTMLAnchorElement) || !isPlainSidebarNavigation(event, target)) return

    const destination = new URL(target.href, window.location.href)
    if (
      destination.origin !== window.location.origin ||
      (destination.pathname === window.location.pathname && destination.search === window.location.search)
    ) {
      return
    }

    const sidebar = target.closest('aside')
    if (!(sidebar instanceof HTMLElement)) return
    const rect = sidebar.getBoundingClientRect()
    if (rect.width <= 0 || rect.height <= 0) return

    releaseSidebarContinuity()
    const continuity = sidebar.cloneNode(true)
    if (!(continuity instanceof HTMLElement)) return
    markContinuityTarget(continuity, destination)
    continuity.dataset.zeroOneSidebarContinuity = 'true'
    continuity.setAttribute('aria-hidden', 'true')
    continuity.inert = true
    Object.assign(continuity.style, {
      position: 'fixed',
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: '0',
      maxWidth: 'none',
      maxHeight: 'none',
      transform: 'none',
      transition: 'none',
      pointerEvents: 'none',
      zIndex: '100000010',
    })
    document.body.append(continuity)
    sidebarContinuitySource = sidebar
    request()
    sidebarContinuityFrame = requestAnimationFrame(() => waitForSidebarContinuity(destination))
    sidebarContinuityTimeout = window.setTimeout(releaseSidebarContinuity, 750)
  }

  for (const method of ['pushState', 'replaceState']) {
    const nativeMethod = history[method]
    history[method] = function reconciledHistoryMutation(...args) {
      const result = nativeMethod.apply(this, args)
      request()
      return result
    }
  }

  window.addEventListener('popstate', request)
  window.addEventListener('hashchange', request)
  document.addEventListener('click', preserveSidebarContinuity, true)
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__ = { register, request }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeApp, { once: true })
  } else {
    observeApp()
  }
})()
