// Header custom-menu compatibility adapter for the approved recovered Console.
// The source Console owns this behavior; this layer only bridges the immutable
// preview snapshot and yields when native header placement controls are present.
const ADMIN_SETTINGS_API = '/api/v1/admin/settings'
const PUBLIC_SETTINGS_API = '/api/v1/settings/public'
const ADMIN_SETTINGS_PATH = '/admin/settings'
const MENU_GROUP_MARKER = 'zero-one-header-custom-menu-group'
const CUSTOM_MENU_DESCRIPTION = '添加自定义 iframe 页面到侧边栏、顶部导航或同时显示在两处。每个页面可以选择普通用户、管理员或全部登录用户可见。'

let adminMenuItems = []
let adminNavigationSettings = null
let adminSettingsRequested = false
let adminSettingsRevision = 0
let publishedNavigationRevision = -1
let adminNavigationRequest = null
let queuedNavigationRefresh = null
let navigationController = null
let navigationUserKey = ''
let adminRetryAfter = 0
let setNavigationClient
const navigationClientReady = new Promise((resolve) => { setNavigationClient = resolve })
let publicNavigationSettings = window.__ZERO_ONE_PUBLIC_SETTINGS__ || window.__APP_CONFIG__ || null
let publicSettingsRequested = Boolean(window.__ZERO_ONE_PUBLIC_SETTINGS__)
const customIconOverrides = new Map()

function localText(zh, en) {
  const locale = localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN'
  return locale.toLowerCase().startsWith('zh') ? zh : en
}

// Recovered adapters create plain anchors outside Vue's render tree. Bind them
// to the already-running Vue Router so internal navigation does not reload the
// document. A normal anchor remains the fallback when the router is unavailable.
function installInternalLinkBridge() {
  if (typeof window.__ZERO_ONE_BIND_INTERNAL_LINK__ === 'function') {
    return window.__ZERO_ONE_BIND_INTERNAL_LINK__
  }

  const bind = (link) => {
    if (!(link instanceof HTMLAnchorElement) || link.dataset.zeroOneSpaBound === 'true') return link
    link.dataset.zeroOneSpaBound = 'true'
    link.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.hasAttribute('download') ||
        (link.target && link.target.toLowerCase() !== '_self')
      ) return

      const target = new URL(link.href, window.location.href)
      if (target.origin !== window.location.origin) return
      const router = document.querySelector('#app')?.__vue_app__?.config?.globalProperties?.$router
      if (!router || typeof router.push !== 'function') return

      event.preventDefault()
      const customPageMatch = target.pathname.match(/^\/custom\/([^/?#]+)$/)
      const destinationChanged =
        target.pathname !== window.location.pathname ||
        target.search !== window.location.search ||
        target.hash !== window.location.hash
      if (customPageMatch && destinationChanged) {
        beginCustomPageLoad(decodeURIComponent(customPageMatch[1]))
      }
      const destination = `${target.pathname}${target.search}${target.hash}`
      try {
        const navigation = router.push(destination)
        if (navigation && typeof navigation.catch === 'function') {
          navigation.catch(() => window.location.assign(target.href))
        }
      } catch {
        window.location.assign(target.href)
      }
    })
    return link
  }

  window.__ZERO_ONE_BIND_INTERNAL_LINK__ = bind
  return bind
}

const bindInternalLink = installInternalLinkBridge()

function authenticatedUser() {
  const token = localStorage.getItem('auth_token')
  const rawUser = localStorage.getItem('auth_user')
  if (!token || !rawUser) return null
  try {
    const user = JSON.parse(rawUser)
    return user && typeof user === 'object' ? user : null
  } catch {
    return null
  }
}

function navigationIdentity(user = authenticatedUser()) {
  return user?.id != null ? `${user.id}:${user.role}` : ''
}

function ensureNavigationIdentity(user) {
  const identity = navigationIdentity(user)
  if (identity === navigationUserKey) return
  navigationUserKey = identity
  adminSettingsRevision += 1
  navigationController?.abort()
  navigationController = null
  adminNavigationRequest = null
  queuedNavigationRefresh = null
  adminSettingsRequested = false
  adminRetryAfter = 0
  adminNavigationSettings = null
  publishedNavigationRevision = -1
  adminMenuItems = []
  customIconOverrides.clear()
  activeQRDialog?.dismiss()
  window.dispatchEvent(new CustomEvent('zero-one-admin-navigation', { detail: null }))
}

function navigationProjection(settings) {
  const keys = [
    'user_sidebar_order', 'admin_sidebar_order', 'profile_navigation_enabled',
    'subscription_navigation_enabled', 'model_plaza_placement',
    'ops_monitoring_enabled', 'ops_realtime_monitoring_enabled', 'ops_query_mode_default',
  ]
  const projected = Object.fromEntries(keys.map((key) => [key, settings[key]]))
  projected.custom_menu_items = normalizeMenuItems(settings.custom_menu_items).map((item) => {
    const { qr_image, ...metadata } = item
    return metadata
  })
  return projected
}

function publishAdminNavigation(settings) {
  adminNavigationSettings = navigationProjection(settings)
  publishedNavigationRevision = adminSettingsRevision
  adminMenuItems = adminNavigationSettings.custom_menu_items
  window.dispatchEvent(new CustomEvent('zero-one-admin-navigation', {
    detail: { identity: navigationUserKey, settings: adminNavigationSettings },
  }))
  scheduleScan()
}

function acceptSavedNavigation(settings) {
  ensureNavigationIdentity(authenticatedUser())
  adminSettingsRevision += 1
  activeQRDialog?.dismiss()
  customIconOverrides.clear()
  publishAdminNavigation(settings)
}

// Native sidebar and recovered adapters share only this narrow read. Full
// settings GET/PUT calls still belong to their original editors.
function loadAdminNavigation(force = false) {
  const user = authenticatedUser()
  ensureNavigationIdentity(user)
  if (user?.role !== 'admin') return Promise.reject(new Error('Administrator required'))
  if (adminNavigationRequest) {
    if (force && !queuedNavigationRefresh) {
      adminSettingsRevision += 1
      const identity = navigationUserKey
      const refresh = adminNavigationRequest.catch(() => null).then(() => {
        if (queuedNavigationRefresh === refresh) queuedNavigationRefresh = null
        return identity === navigationUserKey ? loadAdminNavigation(true) : null
      })
      queuedNavigationRefresh = refresh
    }
    return force ? queuedNavigationRefresh : adminNavigationRequest
  }
  if (adminNavigationSettings && !force) return Promise.resolve(adminNavigationSettings)
  adminSettingsRevision += 1
  const revision = adminSettingsRevision
  const identity = navigationUserKey
  const controller = new AbortController()
  navigationController = controller
  const timeout = window.setTimeout(() => controller.abort(), 15_000)
  let cancelWaiting
  const aborted = new Promise((_, reject) => {
    cancelWaiting = () => reject(new DOMException('Navigation read cancelled', 'AbortError'))
    controller.signal.addEventListener('abort', cancelWaiting, { once: true })
  })
  // Use the existing authenticated client so token renewal, timezone and
  // cancellation keep the native shell's semantics. Adapters still share one read.
  const request = Promise.race([navigationClientReady, aborted])
    .then((read) => read(controller.signal))
    .then((settings) => {
      if (identity !== navigationIdentity()) return null
      if (revision === adminSettingsRevision) publishAdminNavigation(settings)
      return adminNavigationSettings
    })
    .finally(() => {
      clearTimeout(timeout)
      controller.signal.removeEventListener('abort', cancelWaiting)
      if (adminNavigationRequest === request) {
        adminNavigationRequest = null
        navigationController = null
      }
    })
  adminNavigationRequest = request
  return request
}

window.__ZERO_ONE_ADMIN_NAVIGATION__ = {
  load: loadAdminNavigation, apply: acceptSavedNavigation, identity: navigationIdentity,
  setClient: setNavigationClient,
  revision: () => adminSettingsRevision,
  current: () => ({ settings: adminNavigationSettings, revision: publishedNavigationRevision }),
}

function apiHeaders(includeContentType = false) {
  const headers = {
    Accept: 'application/json',
    'Accept-Language': localStorage.getItem('sub2api_locale') || 'zh-CN',
    'X-Admin-UI-Request': '1',
  }
  const token = localStorage.getItem('auth_token')
  if (token) headers.Authorization = `Bearer ${token}`
  if (includeContentType) headers['Content-Type'] = 'application/json'
  return headers
}

async function readApiResponse(response) {
  const payload = await response.json().catch(() => null)
  if (!response.ok) throw new Error(payload?.message || `HTTP ${response.status}`)
  if (payload && typeof payload === 'object' && 'code' in payload) {
    if (payload.code !== 0) throw new Error(payload.message || '请求失败')
    return payload.data
  }
  return payload
}

function normalizeMenuItems(value) {
  if (!Array.isArray(value)) return []
  return value.filter((item) => {
    return item && typeof item === 'object' &&
      typeof item.id === 'string' && /^[A-Za-z0-9_-]+$/.test(item.id) &&
      typeof item.label === 'string' && item.label.trim()
  })
}

function normalizeMenuItemsForSave(value) {
  if (!Array.isArray(value)) return []
  return value.filter((item) => {
    return item && typeof item === 'object' &&
      typeof item.id === 'string' &&
      typeof item.label === 'string' && item.label.trim()
  })
}

function currentMenuItems(user) {
  if (user?.role === 'admin') {
    return adminNavigationSettings ? adminMenuItems : normalizeMenuItems(publicNavigationSettings?.custom_menu_items)
  }
  return normalizeMenuItems(publicNavigationSettings?.custom_menu_items)
}

function isVisibleToUser(item, user) {
  const visibility = user?.role === 'admin' ? 'admin' : 'user'
  return item.visibility === visibility || item.visibility === 'all'
}

function visibleHeaderItems(user) {
  return currentMenuItems(user)
    .filter((item) => isVisibleToUser(item, user) && (
      item.placement === 'both' ||
      (item.placement === 'header' && item.navigation_type === 'qr')
    ))
    .sort((left, right) => Number(left.sort_order || 0) - Number(right.sort_order || 0))
}

function headerOnlyItems(user) {
  return currentMenuItems(user)
    .filter((item) => isVisibleToUser(item, user) && item.placement === 'header')
}

function visibleSidebarItems(user) {
  return currentMenuItems(user)
    .filter((item) => isVisibleToUser(item, user) && item.placement !== 'header')
    .sort((left, right) => Number(left.sort_order || 0) - Number(right.sort_order || 0))
}

function createFallbackIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '1.7')
  svg.setAttribute('aria-hidden', 'true')
  svg.classList.add('zero-one-header-custom-menu-icon')
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-linecap', 'round')
  path.setAttribute('stroke-linejoin', 'round')
  path.setAttribute('d', 'M13.5 6H15a4.5 4.5 0 010 9h-1.5m-3 0H9a4.5 4.5 0 010-9h1.5m-3 6h9')
  svg.append(path)
  return svg
}

function createMenuIcon(item, className = 'zero-one-header-custom-menu-icon') {
  const raw = typeof item?.icon_svg === 'string' ? item.icon_svg.trim() : ''
  if (!raw) {
    const fallback = createFallbackIcon()
    fallback.setAttribute('class', className)
    return fallback
  }
  const parsed = new DOMParser().parseFromString(raw, 'image/svg+xml')
  const svg = parsed.documentElement
  if (svg.nodeName.toLowerCase() !== 'svg' || parsed.querySelector('parsererror')) {
    const fallback = createFallbackIcon()
    fallback.setAttribute('class', className)
    return fallback
  }
  for (const unsafe of svg.querySelectorAll('script, foreignObject, iframe, object, embed, style')) unsafe.remove()
  for (const node of [svg, ...svg.querySelectorAll('*')]) {
    for (const attribute of [...node.attributes]) {
      const name = attribute.name.toLowerCase()
      if (name.startsWith('on') || name === 'href' || name === 'xlink:href' || name === 'src') {
        node.removeAttribute(attribute.name)
      }
    }
  }
  const icon = document.importNode(svg, true)
  icon.setAttribute('class', className)
  icon.setAttribute('aria-hidden', 'true')
  return icon
}

let activeQRDialog = null

function openQRDialog(item) {
  activeQRDialog?.dismiss()
  const identity = navigationIdentity()
  if (!identity) return
  const previousFocus = document.activeElement
  const overlay = document.createElement('div')
  overlay.className = 'zero-one-header-qr-overlay'
  overlay.setAttribute('data-zero-one-header-qr-dialog', item.id)
  const panel = document.createElement('section')
  panel.className = 'zero-one-header-qr-dialog'
  panel.setAttribute('role', 'dialog')
  panel.setAttribute('aria-modal', 'true')
  panel.setAttribute('aria-label', item.label)
  const header = document.createElement('div')
  header.className = 'zero-one-header-qr-dialog-header'
  const title = document.createElement('h2')
  title.textContent = item.label
  const close = document.createElement('button')
  close.type = 'button'
  close.textContent = '×'
  close.setAttribute('aria-label', localText('关闭', 'Close'))
  header.append(title, close)
  const description = document.createElement('p')
  description.textContent = item.qr_description || ''
  const frame = document.createElement('div')
  frame.className = 'zero-one-header-qr-frame'
  panel.append(header, description, frame)
  overlay.append(panel)
  document.body.append(overlay)

  let objectURL = ''
  let request = null
  let timeout = 0
  let generation = 0
  const releaseImage = () => {
    if (objectURL) URL.revokeObjectURL(objectURL)
    objectURL = ''
  }
  const dismiss = () => {
    generation += 1
    request?.abort()
    clearTimeout(timeout)
    releaseImage()
    overlay.remove()
    document.removeEventListener('keydown', onKeydown)
    if (activeQRDialog?.dismiss === dismiss) activeQRDialog = null
    if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus()
  }
  const onKeydown = (event) => {
    if (event.key === 'Escape') dismiss()
    if (event.key !== 'Tab') return
    const buttons = [...panel.querySelectorAll('button')]
    const first = buttons[0]
    const last = buttons.at(-1)
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
  activeQRDialog = { id: item.id, identity, dismiss }
  document.addEventListener('keydown', onKeydown)
  close.addEventListener('click', dismiss)
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) dismiss()
  })

  const showError = () => {
    releaseImage()
    const error = document.createElement('div')
    error.dataset.testid = 'community-qr-error'
    error.setAttribute('role', 'alert')
    const message = document.createElement('p')
    message.textContent = localText('二维码暂时无法加载，请稍后重试', 'Unable to load QR code. Please retry.')
    const retry = document.createElement('button')
    retry.type = 'button'
    retry.className = 'btn btn-secondary btn-sm'
    retry.dataset.testid = 'community-qr-retry'
    retry.textContent = localText('重试', 'Retry')
    retry.addEventListener('click', loadImage)
    error.append(message, retry)
    frame.replaceChildren(error)
  }

  async function loadImage() {
    const current = ++generation
    request?.abort()
    clearTimeout(timeout)
    releaseImage()
    const loading = document.createElement('span')
    loading.dataset.testid = 'community-qr-loading'
    loading.setAttribute('role', 'status')
    loading.textContent = localText('正在安全加载二维码…', 'Securely loading QR code…')
    frame.replaceChildren(loading)
    const controller = new AbortController()
    request = controller
    const live = () => current === generation && overlay.isConnected && navigationIdentity() === identity
    timeout = window.setTimeout(() => {
      if (!live()) return
      generation += 1
      controller.abort()
      request = null
      showError()
    }, 15_000)
    try {
      const response = await fetch('/api/v1/settings/header-navigation/' + encodeURIComponent(item.id) + '/qr', {
        credentials: 'same-origin',
        cache: 'no-store',
        headers: apiHeaders(),
        signal: controller.signal,
      })
      if (!response.ok) throw new Error('QR unavailable')
      const blob = await response.blob()
      if (!live()) return
      if (!blob.size || blob.size > 300 * 1024 || !['image/png', 'image/jpeg', 'image/webp'].includes(blob.type.toLowerCase().split(';')[0])) {
        throw new Error('Invalid QR response')
      }
      objectURL = URL.createObjectURL(blob)
      const image = document.createElement('img')
      image.src = objectURL
      image.alt = item.label
      image.dataset.testid = 'community-qr-image'
      await image.decode()
      if (!live()) return
      if (controller.signal.aborted) throw new Error('QR request timed out')
      frame.replaceChildren(image)
    } catch {
      if (live()) showError()
    } finally {
      if (current === generation) {
        clearTimeout(timeout)
        request = null
      }
    }
  }
  close.focus()
  void loadImage()
}

function removeHeaderGroup() {
  document.querySelector(`[data-zero-one-header-menu="${MENU_GROUP_MARKER}"]`)?.remove()
}

function renderHeaderMenu(user) {
  const nativeHeaderItem = [...document.querySelectorAll('[data-testid^="header-custom-menu-"]')]
    .some((node) => !node.hasAttribute('data-zero-one-header-menu'))
  if (nativeHeaderItem) {
    removeHeaderGroup()
    return
  }

  const items = visibleHeaderItems(user)
  const signature = JSON.stringify(items.map((item) => [item.id, item.label, item.icon_svg, item.navigation_type, item.qr_description, item.sort_order]))
  const existing = document.querySelector(`[data-zero-one-header-menu="${MENU_GROUP_MARKER}"]`)
  if (existing?.getAttribute('data-signature') === signature) return
  existing?.remove()
  if (!user || items.length === 0) return

  const header = document.querySelector('header.app-header-surface')
  const modelPlaza = header?.querySelector('a[href^="/model-plaza"]')
  const actionRow = modelPlaza?.parentElement || header?.querySelector(':scope > div > div:last-child')
  if (!(actionRow instanceof HTMLElement)) return

  const group = document.createElement('span')
  group.className = 'zero-one-header-custom-menu-group'
  group.setAttribute('data-zero-one-header-menu', MENU_GROUP_MARKER)
  group.setAttribute('data-signature', signature)
  for (const item of items) {
    if (item.placement === 'header' && item.navigation_type === 'qr') {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'zero-one-header-custom-menu-link'
      button.setAttribute('data-testid', `header-qr-${item.id}`)
      button.setAttribute('data-zero-one-header-menu', 'qr')
      button.append(createMenuIcon(item))
      const label = document.createElement('span')
      label.textContent = item.label.trim()
      button.append(label)
      button.addEventListener('click', () => openQRDialog(item))
      group.append(button)
      continue
    }
    const link = document.createElement('a')
    link.className = 'zero-one-header-custom-menu-link'
    link.href = `/custom/${encodeURIComponent(item.id)}`
    link.setAttribute('data-testid', `header-custom-menu-${item.id}`)
    link.setAttribute('data-zero-one-header-menu', 'link')
    link.append(createMenuIcon(item))
    const label = document.createElement('span')
    label.textContent = item.label.trim()
    link.append(label)
    bindInternalLink(link)
    group.append(link)
  }

  if (modelPlaza) modelPlaza.after(group)
  else actionRow.prepend(group)
}

function createSidebarIcon(item) {
  return createMenuIcon(item, 'h-5 w-5 flex-shrink-0')
}

function createSidebarLink(item, collapsed) {
  const link = document.createElement('a')
  link.href = `/custom/${encodeURIComponent(item.id)}`
  link.className = `sidebar-link mb-1${collapsed ? ' sidebar-link-collapsed' : ''}`
  link.setAttribute('aria-label', item.label.trim())
  link.setAttribute('data-testid', `sidebar-custom-menu-${item.id}`)
  link.setAttribute('data-zero-one-sidebar-shared-menu', item.id)
  if (collapsed) link.title = item.label.trim()
  link.append(createSidebarIcon(item))

  const label = document.createElement('span')
  label.className = `sidebar-label${collapsed ? ' sidebar-label-collapsed' : ''}`
  label.setAttribute('aria-hidden', collapsed ? 'true' : 'false')
  label.textContent = item.label.trim()
  link.append(label)
  bindInternalLink(link)
  return link
}

function reconcileSidebar(user) {
  const headerOnlyIds = new Set(headerOnlyItems(user).map((item) => item.id))
  const hiddenRoleIds = new Set(
    currentMenuItems(user)
      .filter((item) => !isVisibleToUser(item, user))
      .map((item) => item.id),
  )
  for (const link of document.querySelectorAll('aside a[data-zero-one-role-hidden="true"]')) {
    const id = link.getAttribute('href')?.match(/^\/custom\/([^/?#]+)$/)?.[1]
    if (id && (hiddenRoleIds.has(decodeURIComponent(id)) || headerOnlyIds.has(decodeURIComponent(id)))) continue
    link.hidden = false
    link.removeAttribute('data-zero-one-role-hidden')
  }
  for (const id of hiddenRoleIds) {
    for (const link of document.querySelectorAll(`aside a[href="/custom/${CSS.escape(id)}"]`)) {
      if (link instanceof HTMLAnchorElement) {
        link.hidden = true
        link.setAttribute('data-zero-one-role-hidden', 'true')
      }
    }
  }

  for (const link of document.querySelectorAll('aside a[data-zero-one-header-hidden="true"]')) {
    const id = link.getAttribute('href')?.match(/^\/custom\/([^/?#]+)$/)?.[1]
    if (id && (headerOnlyIds.has(decodeURIComponent(id)) || hiddenRoleIds.has(decodeURIComponent(id)))) continue
    link.hidden = false
    link.removeAttribute('data-zero-one-header-hidden')
  }

  for (const id of headerOnlyIds) {
    for (const link of document.querySelectorAll(`aside a[href="/custom/${CSS.escape(id)}"]`)) {
      if (link instanceof HTMLAnchorElement) {
        link.hidden = true
        link.setAttribute('data-zero-one-header-hidden', 'true')
      }
    }
  }

  const sidebarItems = visibleSidebarItems(user)
  const desiredSharedIds = new Set(
    sidebarItems.filter((item) => item.visibility === 'all').map((item) => item.id),
  )
  for (const link of document.querySelectorAll('aside a[data-zero-one-sidebar-shared-menu]')) {
    const id = link.getAttribute('data-zero-one-sidebar-shared-menu')
    if (!id || !desiredSharedIds.has(id)) link.remove()
  }
  if (!user || desiredSharedIds.size === 0) return

  const aside = document.querySelector('aside')
  const insertionAnchor = aside?.querySelector(
    user.role === 'admin' ? 'a[href="/admin/settings"]' : 'a[href="/profile"]',
  )
  const container = insertionAnchor?.parentElement
  if (!(aside instanceof HTMLElement) || !(container instanceof HTMLElement)) return
  const collapsed = aside.classList.contains('w-[72px]')

  for (const item of sidebarItems) {
    if (item.visibility !== 'all') continue
    const nativeLink = [...aside.querySelectorAll(`a[href="/custom/${CSS.escape(item.id)}"]`)]
      .find((link) => !link.hasAttribute('data-zero-one-sidebar-shared-menu'))
    const injectedLink = aside.querySelector(
      `a[data-zero-one-sidebar-shared-menu="${CSS.escape(item.id)}"]`,
    )
    if (nativeLink) {
      injectedLink?.remove()
      continue
    }
    if (injectedLink instanceof HTMLAnchorElement) {
      const signature = JSON.stringify([item.label.trim(), item.icon_svg || ''])
      if (injectedLink.dataset.zeroOneMenuSignature !== signature) {
        injectedLink.setAttribute('aria-label', item.label.trim())
        const label = injectedLink.querySelector('.sidebar-label')
        if (label && label.textContent !== item.label.trim()) label.textContent = item.label.trim()
        const icon = injectedLink.querySelector('svg')
        if (icon) icon.replaceWith(createMenuIcon(item, 'h-5 w-5 flex-shrink-0 zero-one-sidebar-navigation-icon'))
        injectedLink.dataset.zeroOneMenuSignature = signature
      }
      injectedLink.classList.toggle('sidebar-link-collapsed', collapsed)
      const label = injectedLink.querySelector('.sidebar-label')
      label?.classList.toggle('sidebar-label-collapsed', collapsed)
      label?.setAttribute('aria-hidden', collapsed ? 'true' : 'false')
      if (collapsed) injectedLink.title = item.label.trim()
      else injectedLink.removeAttribute('title')
      continue
    }
    container.append(createSidebarLink(item, collapsed))
  }

}

function runtimeNavigationSettings(user) {
  return user?.role === 'admin' ? adminNavigationSettings || publicNavigationSettings : publicNavigationSettings
}

function normalizeSidebarOrder(value) {
  if (!Array.isArray(value)) return []
  return [...new Set(value.filter((path) => typeof path === 'string' && path.startsWith('/')))]
}

function navigationPath(link) {
  if (link instanceof HTMLElement && link.dataset.navigationPath) return link.dataset.navigationPath
  if (!(link instanceof HTMLAnchorElement)) return ''
  return new URL(link.href, window.location.origin).pathname
}

// The recovered Vue template uses a Fragment for each admin row, and another
// Fragment for a collapsible group. Keep their text anchors and the transition
// subtree with the row: moving just an <a> breaks both ordering and Vue updates.
function sidebarRowNodes(row) {
  const depth = Number(row.dataset.navigationFragments || 0)
  let start = row
  for (let index = 0; index < depth; index += 1) {
    if (start.previousSibling?.nodeType !== Node.TEXT_NODE) return [row]
    start = start.previousSibling
  }
  let end = row
  let anchors = 0
  while (anchors < depth && end.nextSibling) {
    end = end.nextSibling
    if (end.nodeType === Node.TEXT_NODE) anchors += 1
  }
  if (anchors !== depth) return [row]
  const nodes = []
  for (let node = start; node; node = node.nextSibling) {
    nodes.push(node)
    if (node === end) break
  }
  return nodes
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.rowNodes = sidebarRowNodes

function reorderSidebarSection(section, order, role, user) {
  if (!(section instanceof HTMLElement)) return
  const rows = [...section.children].filter((node) =>
    node instanceof HTMLElement && node.classList.contains('sidebar-link'),
  )
  if (!rows.length) return
  section.style.removeProperty('display')
  section.style.removeProperty('flex-direction')
  const defaultPaths = [
    ...window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.defaultSidebarOrders[role],
    ...visibleSidebarItems(user).map((item) => `/custom/${item.id}`),
  ]
  const defaults = new Map(defaultPaths.map((path, index) => [path, index]))
  for (const row of rows) {
    row.style.removeProperty('order')
    const path = navigationPath(row)
    if (!defaults.has(path)) defaults.set(path, defaults.size)
  }
  const positions = new Map(order.map((path, index) => [path, index]))
  const units = rows.map((row) => ({ row, nodes: sidebarRowNodes(row) }))
  const sorted = [...units]
    .sort((left, right) => {
      const leftPath = navigationPath(left.row)
      const rightPath = navigationPath(right.row)
      const leftPosition = positions.get(leftPath) ?? Number.MAX_SAFE_INTEGER
      const rightPosition = positions.get(rightPath) ?? Number.MAX_SAFE_INTEGER
      return leftPosition - rightPosition || defaults.get(leftPath) - defaults.get(rightPath)
    })
  if (sorted.every((unit, index) => unit === units[index])) return
  let cursor = units[0].nodes[0]
  for (const unit of sorted) {
    for (const node of unit.nodes) {
      if (node === cursor) cursor = cursor.nextSibling
      else section.insertBefore(node, cursor)
    }
  }
}

function reconcileSidebarOrder(user) {
  if (!user) return
  const settings = runtimeNavigationSettings(user) || {}
  for (const aside of document.querySelectorAll('aside:not([data-zero-one-sidebar-continuity])')) {
    const nav = aside.querySelector(':scope > nav.sidebar-nav')
    if (!nav) continue
    const sections = [...nav.querySelectorAll(':scope > .sidebar-section')]
    if (user.role === 'admin') {
      reorderSidebarSection(sections[0], normalizeSidebarOrder(settings.admin_sidebar_order), 'admin', user)
      reorderSidebarSection(sections[1], normalizeSidebarOrder(settings.user_sidebar_order), 'user', user)
    } else {
      reorderSidebarSection(sections[0], normalizeSidebarOrder(settings.user_sidebar_order), 'user', user)
    }
  }
}

function syncModelPlazaActiveState(link) {
  if (!(link instanceof HTMLAnchorElement)) return
  link.classList.remove('router-link-active', 'router-link-exact-active')
  const active = window.location.pathname === '/model-plaza'
  link.classList.toggle('sidebar-link-active', active)
  if (active) link.setAttribute('aria-current', 'page')
  else link.removeAttribute('aria-current')
}

function setNavigationLinkHidden(selector, hidden, marker) {
  for (const link of document.querySelectorAll(selector)) {
    if (!(link instanceof HTMLElement)) continue
    link.hidden = hidden
    if (hidden) {
      link.setAttribute(marker, 'true')
      link.style.setProperty('display', 'none', 'important')
    } else {
      link.removeAttribute(marker)
      link.style.removeProperty('display')
    }
  }
}

function reconcileBuiltInNavigation(user) {
  if (!user) return
  const settings = runtimeNavigationSettings(user) || {}
  const profileEnabled = settings.profile_navigation_enabled !== false
  const subscriptionEnabled = settings.subscription_navigation_enabled !== false
  const placement = settings.model_plaza_placement === 'sidebar' ? 'sidebar' : 'header'

  setNavigationLinkHidden('aside a[href="/profile"]', !profileEnabled, 'data-zero-one-profile-hidden')
  setNavigationLinkHidden(
    'aside nav a[href="/subscriptions"]',
    !subscriptionEnabled,
    'data-zero-one-subscription-hidden',
  )

  for (const button of document.querySelectorAll('header button[title]')) {
    const title = button.getAttribute('title')?.toLowerCase() || ''
    if (!title.includes('订阅') && !title.includes('subscription')) continue
    const container = button.parentElement
    if (container instanceof HTMLElement) container.hidden = !subscriptionEnabled
  }

  setNavigationLinkHidden(
    'header a[href^="/model-plaza"]',
    placement !== 'header',
    'data-zero-one-model-plaza-hidden',
  )

  const aside = document.querySelector('aside')
  const existing = aside?.querySelector('[data-zero-one-model-plaza-sidebar]')
  if (placement !== 'sidebar' || !(aside instanceof HTMLElement)) {
    existing?.remove()
    return
  }
  if (existing instanceof HTMLAnchorElement) {
    syncModelPlazaActiveState(existing)
    return
  }
  const dashboardPath = user.role === 'admin' ? '/admin/dashboard' : '/dashboard'
  const dashboard = aside.querySelector('nav a.sidebar-link[href="' + dashboardPath + '"]')
  if (!(dashboard instanceof HTMLAnchorElement)) return
  const link = document.createElement('a')
  link.href = '/model-plaza?embedded=1'
  link.className = dashboard.className
  link.classList.remove('router-link-active', 'router-link-exact-active', 'sidebar-link-active')
  link.removeAttribute('aria-current')
  link.setAttribute('aria-label', localText('模型广场', 'Model Plaza'))
  link.setAttribute('data-zero-one-model-plaza-sidebar', 'true')
  const icon = createFallbackIcon()
  icon.setAttribute('class', 'h-5 w-5 flex-shrink-0 zero-one-sidebar-navigation-icon')
  link.append(icon)
  const label = document.createElement('span')
  label.className = 'sidebar-label'
  label.textContent = localText('模型广场', 'Model Plaza')
  link.append(label)
  bindInternalLink(link)
  sidebarRowNodes(dashboard).at(-1).after(link)
  syncModelPlazaActiveState(link)
}

const customPageLoads = new WeakMap()
let activeCustomPageFrame = null

function releaseCustomPageFrame() {
  const state = activeCustomPageFrame && customPageLoads.get(activeCustomPageFrame)
  if (state) clearTimeout(state.timeout)
  activeCustomPageFrame = null
}

function reconcileCustomPageFrame(user) {
  const match = window.location.pathname.match(/^\/custom\/([^/?#]+)$/)
  if (!match) {
    releaseCustomPageFrame()
    return
  }
  const id = decodeURIComponent(match[1])
  const frame = document.querySelector('main iframe.custom-embed-frame')
  if (!(frame instanceof HTMLIFrameElement)) {
    releaseCustomPageFrame()
    return
  }
  const item = currentMenuItems(user).find((candidate) => candidate.id === id)
  if (item?.label) frame.title = item.label.trim()
  const state = customPageLoads.get(frame)
  if (!state || state.id !== id || state.url !== frame.src) {
    beginCustomPageLoad(id, frame)
  }
  if (!finishCustomPageLoad(frame)) {
    showCustomPageLoading(frame)
  }
}

function configuredPageMatchesFrame(frame, item) {
  try {
    const configured = new URL(item.url, window.location.origin)
    const actual = new URL(frame.src, window.location.origin)
    return configured.origin === actual.origin && configured.pathname === actual.pathname
  } catch {
    return false
  }
}

function showCustomPageLoading(frame) {
  const shell = frame.closest('.custom-embed-shell')
  if (!(shell instanceof HTMLElement)) return
  frame.classList.add('zero-one-custom-page-frame-loading')

  let overlay = shell.querySelector('[data-testid="custom-page-loading"]')
  if (overlay?.querySelector('[data-testid="custom-page-slow"]') && !customPageLoads.get(frame)?.slow) {
    overlay.remove()
    overlay = null
  }
  if (!(overlay instanceof HTMLElement)) {
    overlay = document.createElement('div')
    overlay.className = 'zero-one-custom-page-loading'
    overlay.setAttribute('data-testid', 'custom-page-loading')
    overlay.setAttribute('role', 'status')
    overlay.setAttribute('aria-live', 'polite')
    const spinner = document.createElement('span')
    spinner.className = 'zero-one-custom-page-loading-spinner'
    spinner.setAttribute('aria-hidden', 'true')
    const text = document.createElement('span')
    text.textContent = localText(
      '正在全力加载中，请稍等！',
      'Loading at full speed. Please wait!',
    )
    overlay.append(spinner, text)
    shell.prepend(overlay)
  }
  const state = customPageLoads.get(frame)
  if (state?.slow && !overlay.querySelector('[data-testid="custom-page-slow"]')) {
    const message = document.createElement('p')
    message.dataset.testid = 'custom-page-slow'
    message.textContent = localText(
      '加载较慢，可以重试或在新窗口打开。',
      'This page is taking longer to load. Retry or open it in a new window.',
    )
    const retry = document.createElement('button')
    retry.type = 'button'
    retry.className = 'btn btn-secondary btn-sm'
    retry.dataset.testid = 'custom-page-retry'
    retry.textContent = localText('重试', 'Retry')
    retry.addEventListener('click', () => {
      if (frame === activeCustomPageFrame && frame.isConnected) {
        // The native component owns replacement, so stale frames/load events
        // cannot complete a retry or leave a detached iframe in Vue's tree.
        frame.dispatchEvent(new Event('retry'))
      }
    })
    overlay.replaceChildren(message, retry)
  }
}

function finishCustomPageLoad(frame) {
  if (!frame.isConnected || frame !== document.querySelector('main iframe.custom-embed-frame')) return false
  const match = window.location.pathname.match(/^\/custom\/([^/?#]+)$/)
  if (!match) return false
  const id = decodeURIComponent(match[1])
  const state = customPageLoads.get(frame)
  if (!state || state.id !== id || state.url !== frame.src || !state.loadSeen) return false
  const item = currentMenuItems(authenticatedUser()).find((candidate) => candidate.id === id)
  if (!item || !configuredPageMatchesFrame(frame, item)) return false

  clearTimeout(state.timeout)
  frame.dataset.zeroOneCustomPageLoaded = 'true'
  frame.classList.remove('zero-one-custom-page-frame-loading')
  frame.closest('.custom-embed-shell')
    ?.querySelector('[data-testid="custom-page-loading"]')
    ?.remove()
  return true
}

function beginCustomPageLoad(id, candidateFrame) {
  const frame = candidateFrame || document.querySelector('main iframe.custom-embed-frame')
  if (!(frame instanceof HTMLIFrameElement)) return
  if (frame.dataset.customPageId && frame.dataset.customPageId !== id) {
    // An internal link has been clicked but Vue has not replaced the old page.
    showCustomPageLoading(frame)
    return
  }
  if (frame !== activeCustomPageFrame) releaseCustomPageFrame()
  activeCustomPageFrame = frame
  const previous = customPageLoads.get(frame)
  if (previous) clearTimeout(previous.timeout)
  const state = { id, url: frame.src, loadSeen: false, slow: false, timeout: 0 }
  customPageLoads.set(frame, state)
  frame.dataset.zeroOneCustomPageId = id
  frame.dataset.zeroOneCustomPageLoaded = 'false'
  showCustomPageLoading(frame)

  state.timeout = window.setTimeout(() => {
    if (!frame.isConnected || customPageLoads.get(frame) !== state || frame !== activeCustomPageFrame) return
    state.slow = true
    showCustomPageLoading(frame)
  }, 15_000)
}

window.__ZERO_ONE_CUSTOM_PAGE_LOADED__ = (frame) => {
  if (!(frame instanceof HTMLIFrameElement) || !frame.isConnected || frame !== document.querySelector('main iframe.custom-embed-frame')) return
  const id = frame.dataset.customPageId
  let state = customPageLoads.get(frame)
  if (!state || state.id !== id || state.url !== frame.src) {
    beginCustomPageLoad(id, frame)
    state = customPageLoads.get(frame)
  }
  state.loadSeen = true
  finishCustomPageLoad(frame)
}

function onlineRechargePath() {
  const item = normalizeMenuItems(publicNavigationSettings?.custom_menu_items).find((candidate) =>
    candidate.navigation_type !== 'qr' &&
    candidate.label.trim() === '在线充值' &&
    candidate.id
  )
  return item ? `/custom/${encodeURIComponent(item.id)}` : '/purchase?tab=recharge'
}

function reconcileDashboardPurchaseAction(user) {
  if (!user || window.location.pathname !== '/dashboard') return
  const heading = [...document.querySelectorAll('main h2')].find((node) => {
    const text = node.textContent?.trim().toLowerCase()
    return text === '快捷操作' || text === 'quick actions'
  })
  const actions = heading?.parentElement?.nextElementSibling
  if (!(actions instanceof HTMLElement)) return
  if (actions.querySelector('[data-testid="dashboard-purchase-credits"]')) return

  const redeem = [...actions.querySelectorAll('button')].find((button) => {
    const text = button.textContent?.toLowerCase() || ''
    return text.includes('兑换码') || text.includes('redeem code')
  })
  if (!(redeem instanceof HTMLButtonElement)) return

  const action = redeem.cloneNode(true)
  if (!(action instanceof HTMLButtonElement)) return
  action.type = 'button'
  action.setAttribute('data-testid', 'dashboard-purchase-credits')
  const labels = action.querySelectorAll('p')
  if (labels[0]) labels[0].textContent = localText('购买额度', 'Purchase Credits')
  if (labels[1]) labels[1].textContent = localText('前往在线充值', 'Go to online recharge')
  action.addEventListener('click', () => {
    const router = document.querySelector('#app')?.__vue_app__?.config?.globalProperties?.$router
    if (router && typeof router.push === 'function') {
      void router.push(onlineRechargePath())
    }
  })
  redeem.before(action)
}

function findCustomMenuCard() {
  const heading = [...document.querySelectorAll('h1, h2, h3')].find((node) => {
    const text = node.textContent?.trim().toLowerCase()
    return text === '自定义菜单页面' || text === 'custom menu pages'
  })
  return heading?.closest('.card') || null
}

function placementValuesFromDOM() {
  return [...document.querySelectorAll('[data-zero-one-header-menu-placement]')]
    .map((node) => node instanceof HTMLSelectElement ? node.value : 'sidebar')
}

function normalizePlacement(value) {
  return value === 'header' || value === 'both' ? value : 'sidebar'
}

function augmentCustomMenuItems(items) {
  const placements = placementValuesFromDOM()
  return normalizeMenuItemsForSave(items).map((item, index) => ({
    ...item,
    placement: normalizePlacement(placements[index] ?? item.placement),
    icon_svg: customIconOverrides.get(index) || item.icon_svg,
  }))
}

function ensureIconPresetControls(grid, index) {
  if (grid.querySelector('[data-zero-one-custom-icon-presets]')) return
  const field = document.createElement('div')
  field.className = 'zero-one-custom-icon-presets'
  field.setAttribute('data-zero-one-custom-icon-presets', String(index))
  const label = document.createElement('label')
  label.textContent = localText('内置 SVG 图标', 'Built-in SVG Icons')
  const choices = document.createElement('div')
  choices.className = 'zero-one-custom-icon-preset-choices'
  const presets = window.__ZERO_ONE_NAVIGATION_ICON_PRESETS__ || []
  for (const [id, svg] of presets) {
    const button = document.createElement('button')
    button.type = 'button'
    button.title = id
    button.setAttribute('aria-label', id)
    button.append(createMenuIcon({ icon_svg: svg }, 'zero-one-custom-icon-preset-svg'))
    button.addEventListener('click', () => {
      customIconOverrides.set(index, svg)
      adminMenuItems[index].icon_svg = svg
      for (const sibling of choices.querySelectorAll('button')) sibling.classList.remove('is-selected')
      button.classList.add('is-selected')
    })
    choices.append(button)
  }
  field.append(label, choices)
  grid.append(field)
}

function ensurePlacementControls(user) {
  if (window.location.pathname !== ADMIN_SETTINGS_PATH || user?.role !== 'admin') return
  if (!adminNavigationSettings) return
  const card = findCustomMenuCard()
  if (!(card instanceof HTMLElement)) return

  const description = card.querySelector('h2 + p, h3 + p')
  if (description && description.textContent !== CUSTOM_MENU_DESCRIPTION) {
    description.textContent = CUSTOM_MENU_DESCRIPTION
  }

  const body = card.querySelector('.space-y-4.p-6') || card.lastElementChild
  if (!(body instanceof HTMLElement)) return
  const itemCards = [...body.children].filter((node) => {
    return node instanceof HTMLElement && node.querySelector('select') && node.querySelector('input')
  })
  itemCards.forEach((itemCard, index) => {
    itemCard.hidden = normalizePlacement(adminMenuItems[index]?.placement) === 'header'
    const grid = itemCard.querySelector('.grid')
    if (!(grid instanceof HTMLElement)) return
    ensureIconPresetControls(grid, index)
    const visibilitySelect = itemCard.querySelector(
      'select:not([data-zero-one-header-menu-placement])',
    )
    if (visibilitySelect instanceof HTMLSelectElement) {
      if (!visibilitySelect.querySelector('option[value="all"]')) {
        visibilitySelect.append(new Option('普通用户和管理员都可见', 'all'))
      }
      visibilitySelect.setAttribute('data-testid', `custom-menu-visibility-${index}`)
      if (!visibilitySelect.dataset.zeroOneSharedInitialized) {
        visibilitySelect.value = adminMenuItems[index]?.visibility || visibilitySelect.value
        visibilitySelect.dataset.zeroOneSharedInitialized = 'true'
      }
    }
    let field = itemCard.querySelector('[data-zero-one-header-menu-placement-field]')
    if (!(field instanceof HTMLElement)) {
      field = document.createElement('div')
      field.className = 'zero-one-header-menu-placement-field'
      field.setAttribute('data-zero-one-header-menu-placement-field', 'true')
      const label = document.createElement('label')
      label.textContent = '显示位置'
      const select = document.createElement('select')
      select.className = 'input text-sm'
      select.setAttribute('data-zero-one-header-menu-placement', 'true')
      select.append(
        new Option('侧边栏', 'sidebar'),
        new Option('顶部导航', 'header'),
        new Option('侧边栏和顶部栏都显示', 'both'),
      )
      field.append(label, select)
      const urlField = [...grid.children].find((node) => node.querySelector('input[type="url"]'))
      grid.insertBefore(field, urlField || null)
    }
    const select = field.querySelector('select')
    if (!(select instanceof HTMLSelectElement)) return
    select.setAttribute('data-testid', `custom-menu-placement-${index}`)
    if (!select.dataset.initialized) {
      select.value = normalizePlacement(adminMenuItems[index]?.placement)
      select.dataset.initialized = 'true'
    }
  })
}

function confirmedXHRSettings(request) {
  if (request.status < 200 || request.status >= 300) return null
  try {
    const payload = typeof request.response === 'string' ? JSON.parse(request.response) : request.response
    if (payload && 'code' in payload && payload.code !== 0) return null
    const settings = payload && typeof payload === 'object' && 'code' in payload ? payload.data : payload
    return settings && Array.isArray(settings.custom_menu_items) ? settings : null
  } catch {
    return null
  }
}

function installXHRSaveBridge() {
  const nativeOpen = XMLHttpRequest.prototype.open
  const nativeSend = XMLHttpRequest.prototype.send
  XMLHttpRequest.prototype.open = function open(method, url, ...rest) {
    this.__zeroOneSettingsMethod = String(method).toUpperCase()
    this.__zeroOneSettingsURL = String(url)
    return nativeOpen.call(this, method, url, ...rest)
  }
  XMLHttpRequest.prototype.send = function send(body) {
    let nextBody = body
    try {
      const requestURL = new URL(this.__zeroOneSettingsURL, window.location.origin)
      const path = requestURL.pathname
      if (this.__zeroOneSettingsMethod === 'GET' && path === ADMIN_SETTINGS_API && requestURL.searchParams.get('scope') !== 'navigation' && window.location.pathname === ADMIN_SETTINGS_PATH) {
        const identity = navigationIdentity()
        const revision = adminSettingsRevision
        this.addEventListener('load', () => {
          if (identity !== navigationIdentity() || revision !== adminSettingsRevision) return
          const settings = confirmedXHRSettings(this)
          // Reuse the editor's successful full read, without rewriting its
          // request or keeping its image bytes in the navigation cache.
          if (settings) publishAdminNavigation(settings)
        }, { once: true })
      }
      if (this.__zeroOneSettingsMethod === 'PUT' && path === ADMIN_SETTINGS_API && typeof body === 'string') {
        const payload = JSON.parse(body)
        if (Array.isArray(payload.custom_menu_items)) {
          const identity = navigationIdentity()
          payload.custom_menu_items = augmentCustomMenuItems(payload.custom_menu_items)
          nextBody = JSON.stringify(payload)
          this.addEventListener('load', () => {
            if (this.status < 200 || this.status >= 300 || identity !== navigationIdentity()) return
            const savedSettings = confirmedXHRSettings(this)
            if (savedSettings) {
              acceptSavedNavigation(savedSettings)
            } else {
              // Do not turn an unconfirmed request body into authoritative state.
              void loadAdminNavigation(true).catch(() => {})
            }
          }, { once: true })
        }
      }
    } catch {}
    return nativeSend.call(this, nextBody)
  }
}

function requestAdminSettings(user) {
  if (user?.role !== 'admin' || adminSettingsRequested || Date.now() < adminRetryAfter) return
  adminSettingsRequested = true
  const identity = navigationIdentity(user)
  void loadAdminNavigation().catch(() => {
    if (identity !== navigationUserKey) return
    adminSettingsRequested = false
    adminRetryAfter = Date.now() + 5_000
  })
}

function reconcileQRDialog(user) {
  if (!activeQRDialog) return
  const item = currentMenuItems(user).find((candidate) => candidate.id === activeQRDialog.id)
  if (
    activeQRDialog.identity !== navigationIdentity(user) || !item ||
    !isVisibleToUser(item, user) || item.placement !== 'header' || item.navigation_type !== 'qr'
  ) {
    activeQRDialog.dismiss()
  }
}

function requestPublicSettings(user) {
  if (!user || user.role === 'admin' || publicSettingsRequested) return
  publicSettingsRequested = true
  fetch(PUBLIC_SETTINGS_API, {
    credentials: 'same-origin',
    headers: apiHeaders(),
  })
    .then(readApiResponse)
    .then((settings) => {
      publicNavigationSettings = settings
      scheduleScan()
    })
    .catch(() => {})
}

function scan() {
  const user = authenticatedUser()
  ensureNavigationIdentity(user)
  requestAdminSettings(user)
  requestPublicSettings(user)
  renderHeaderMenu(user)
  reconcileSidebar(user)
  reconcileBuiltInNavigation(user)
  ensurePlacementControls(user)
  reconcileCustomPageFrame(user)
  reconcileQRDialog(user)
  reconcileDashboardPurchaseAction(user)
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

installXHRSaveBridge()
window.addEventListener('storage', scheduleScan)
window.addEventListener('online', () => { adminRetryAfter = 0; scheduleScan() })
window.addEventListener('pagehide', () => {
  activeQRDialog?.dismiss()
  releaseCustomPageFrame()
})
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('header-custom-menu', scan)
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('sidebar-order', () => {
  reconcileSidebarOrder(authenticatedUser())
}, { final: true })
