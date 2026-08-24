// Role-parity overlay for the approved recovered Console snapshot.
// It keeps post-login routing deterministic and adapts the recovered AppLayout
// to the shared User/Administrator card-motion interface.
const AUTH_USER_KEY = 'auth_user'
const USER_DASHBOARD_PATH = '/dashboard'
const ADMIN_DASHBOARD_PATH = '/admin/dashboard'
const NESTED_MOTION_HOST_SELECTOR = '.card, iframe'
let pendingDashboardPath = ''

function dashboardPathFor(rawUser) {
  try {
    return JSON.parse(rawUser)?.role === 'admin'
      ? ADMIN_DASHBOARD_PATH
      : USER_DASHBOARD_PATH
  } catch {
    return ''
  }
}

const nativeStorageSetItem = Storage.prototype.setItem
Storage.prototype.setItem = function setItem(key, value) {
  const capturesLogin =
    this === window.localStorage &&
    key === AUTH_USER_KEY &&
    window.location.pathname === '/login'
  const result = nativeStorageSetItem.call(this, key, value)
  if (capturesLogin) {
    pendingDashboardPath = dashboardPathFor(value)
    scheduleScan()
  }
  return result
}

function redirectCompletedLogin() {
  if (!pendingDashboardPath || window.location.pathname === '/login') return

  const targetPath = pendingDashboardPath
  if (window.location.pathname === targetPath) {
    pendingDashboardPath = ''
    return
  }

  const targetLink = document.querySelector(`aside a[href="${targetPath}"]`)
  if (!(targetLink instanceof HTMLAnchorElement)) return

  pendingDashboardPath = ''
  targetLink.click()
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

function markSidebarLinkActive(link) {
  const target = new URL(link.href, window.location.href)
  if (target.origin !== window.location.origin) return
  for (const current of document.querySelectorAll('aside a.sidebar-link-active')) {
    current.classList.remove('sidebar-link-active')
    current.removeAttribute('aria-current')
  }
  link.classList.add('sidebar-link-active')
  link.setAttribute('aria-current', 'page')
}

function installImmediateSidebarActiveState() {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element
      ? event.target.closest('aside a.sidebar-link')
      : null
    if (!(target instanceof HTMLAnchorElement) || !isPlainSidebarNavigation(event, target)) return
    markSidebarLinkActive(target)
  }, true)
}

function installConsoleCardMotion(surface) {
  if (surface.dataset.zeroOneCardMotion === 'true') return
  surface.dataset.zeroOneCardMotion = 'true'

  // Compatibility aliases for the already-approved dashboard contract.
  surface.dataset.zeroOneDashboardParity = 'true'
  surface.classList.add('console-card-motion-surface', 'console-dashboard-surface')

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  let activeCard = null
  let pointer = null

  surface.addEventListener('pointermove', (event) => {
    if ((event.pointerType !== 'mouse' && event.pointerType !== 'pen') || reducedMotion.matches) return
    const target = event.target instanceof Element ? event.target.closest('.card') : null
    if (
      !(target instanceof HTMLElement) ||
      !surface.contains(target) ||
      target.matches('.console-card-motion-static, .sticky') ||
      target.querySelector(NESTED_MOTION_HOST_SELECTOR)
    ) {
      return
    }

    activeCard = target
    pointer = { x: event.clientX, y: event.clientY }
    if (frame) return
    frame = window.requestAnimationFrame(() => {
      frame = 0
      if (!activeCard || !pointer) return
      const rect = activeCard.getBoundingClientRect()
      const angle =
        Math.atan2(
          pointer.y - (rect.top + rect.height / 2),
          pointer.x - (rect.left + rect.width / 2),
        ) *
          (180 / Math.PI) +
        120
      activeCard.style.setProperty('--console-card-angle', `${angle}deg`)
    })
  })
}

function enhanceConsoleCards() {
  const surface = document.querySelector('.app-shell main')
  if (surface instanceof HTMLElement) installConsoleCardMotion(surface)
}

function scanConsoleParity() {
  redirectCompletedLogin()
  enhanceConsoleCards()
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

installImmediateSidebarActiveState()
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('console-parity', scanConsoleParity)
