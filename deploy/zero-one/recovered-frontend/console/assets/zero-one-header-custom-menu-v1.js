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
let publicNavigationSettings = window.__ZERO_ONE_PUBLIC_SETTINGS__ || window.__APP_CONFIG__ || null
let publicSettingsRequested = false
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
  if (user?.role === 'admin') return adminMenuItems
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

function openQRDialog(item) {
  document.querySelector('[data-zero-one-header-qr-dialog]')?.remove()
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
  close.setAttribute('aria-label', 'Close')
  header.append(title, close)
  const description = document.createElement('p')
  description.textContent = item.qr_description || ''
  const frame = document.createElement('div')
  frame.className = 'zero-one-header-qr-frame'
  frame.textContent = '正在加载二维码…'
  panel.append(header, description, frame)
  overlay.append(panel)
  document.body.append(overlay)

  let objectURL = ''
  const dismiss = () => {
    if (objectURL) URL.revokeObjectURL(objectURL)
    overlay.remove()
  }
  close.addEventListener('click', dismiss)
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) dismiss()
  })

  fetch('/api/v1/settings/header-navigation/' + encodeURIComponent(item.id) + '/qr', {
    credentials: 'same-origin',
    headers: apiHeaders(),
  })
    .then((response) => {
      if (!response.ok) throw new Error('QR unavailable')
      return response.blob()
    })
    .then((blob) => {
      if (!overlay.isConnected || !['image/png', 'image/jpeg', 'image/webp'].includes(blob.type)) return
      objectURL = URL.createObjectURL(blob)
      const image = document.createElement('img')
      image.src = objectURL
      image.alt = item.label
      frame.replaceChildren(image)
    })
    .catch(() => {
      if (overlay.isConnected) frame.textContent = '二维码暂时无法加载'
    })
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

  const settings = runtimeNavigationSettings(user) || {}
  const savedOrder = user.role === 'admin'
    ? settings.admin_sidebar_order
    : settings.user_sidebar_order
  if (normalizeSidebarOrder(savedOrder).length) return

  let previousLink = insertionAnchor
  for (const item of sidebarItems) {
    const link = [...aside.querySelectorAll(`a[href="/custom/${CSS.escape(item.id)}"]`)]
      .find((candidate) => candidate instanceof HTMLAnchorElement && !candidate.hidden)
    if (!(link instanceof HTMLAnchorElement) || link.parentElement !== container) continue
    if (previousLink.nextElementSibling !== link) previousLink.after(link)
    previousLink = link
  }
}

function runtimeNavigationSettings(user) {
  return user?.role === 'admin' ? adminNavigationSettings : publicNavigationSettings
}

function normalizeSidebarOrder(value) {
  if (!Array.isArray(value)) return []
  return [...new Set(value.filter((path) => typeof path === 'string' && path.startsWith('/')))]
}

function navigationPath(link) {
  if (!(link instanceof HTMLAnchorElement)) return ''
  const path = new URL(link.href, window.location.origin).pathname
  return path === '/model-plaza' ? '/model-plaza' : path
}

function reorderSidebarSection(section, order) {
  if (!(section instanceof HTMLElement) || !order.length) return
  const links = [...section.children].filter((node) => node instanceof HTMLAnchorElement && node.classList.contains('sidebar-link'))
  section.style.removeProperty('display')
  section.style.removeProperty('flex-direction')
  for (const link of links) link.style.removeProperty('order')
  const positions = new Map(order.map((path, index) => [path, index]))
  const sorted = links
    .map((link, index) => ({ link, index }))
    .sort((left, right) => {
      const leftPosition = positions.get(navigationPath(left.link)) ?? Number.MAX_SAFE_INTEGER
      const rightPosition = positions.get(navigationPath(right.link)) ?? Number.MAX_SAFE_INTEGER
      return leftPosition - rightPosition || left.index - right.index
    })
    .map(({ link }) => link)
  if (sorted.every((link, index) => link === links[index])) return
  for (const link of sorted) section.append(link)
}

function previewSidebarSectionOrder(section, order) {
  if (!(section instanceof HTMLElement) || !order.length) return
  const links = [...section.children].filter((node) => node instanceof HTMLAnchorElement && node.classList.contains('sidebar-link'))
  const positions = new Map(order.map((path, index) => [path, index]))
  section.style.setProperty('display', 'flex')
  section.style.setProperty('flex-direction', 'column')
  links.forEach((link, index) => {
    link.style.setProperty('order', String((positions.get(navigationPath(link)) ?? order.length + index) + 1))
  })
}

function reconcileSidebarOrder(user) {
  if (!user) return
  const settings = runtimeNavigationSettings(user) || {}
  const sections = [...document.querySelectorAll('aside nav .sidebar-section')]
  const reconcileSection = window.location.pathname === ADMIN_SETTINGS_PATH
    ? previewSidebarSectionOrder
    : reorderSidebarSection
  if (user.role === 'admin') {
    reconcileSection(sections[0], normalizeSidebarOrder(settings.admin_sidebar_order))
    reconcileSection(sections[1], normalizeSidebarOrder(settings.user_sidebar_order))
  } else {
    reconcileSection(sections[0], normalizeSidebarOrder(settings.user_sidebar_order))
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
  dashboard.after(link)
  syncModelPlazaActiveState(link)
}

function reconcileCustomPageFrame(user) {
  const match = window.location.pathname.match(/^\/custom\/([^/?#]+)$/)
  if (!match) return
  const id = decodeURIComponent(match[1])
  const frame = document.querySelector('main iframe.custom-embed-frame')
  if (!(frame instanceof HTMLIFrameElement)) return
  const item = currentMenuItems(user).find((candidate) => candidate.id === id)
  if (item?.label) frame.title = item.label.trim()

  if (frame.dataset.zeroOneCustomPageId !== id) {
    beginCustomPageLoad(id, frame)
  } else if (frame.dataset.zeroOneCustomPageLoaded !== 'true') {
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
}

function finishCustomPageLoad(frame) {
  const match = window.location.pathname.match(/^\/custom\/([^/?#]+)$/)
  if (!match) return
  const id = decodeURIComponent(match[1])
  if (frame.dataset.zeroOneCustomPageId !== id) return
  const item = currentMenuItems(authenticatedUser()).find((candidate) => candidate.id === id)
  if (!item || !configuredPageMatchesFrame(frame, item)) return

  frame.dataset.zeroOneCustomPageLoaded = 'true'
  frame.classList.remove('zero-one-custom-page-frame-loading')
  frame.closest('.custom-embed-shell')
    ?.querySelector('[data-testid="custom-page-loading"]')
    ?.remove()
}

function beginCustomPageLoad(id, candidateFrame) {
  const frame = candidateFrame || document.querySelector('main iframe.custom-embed-frame')
  if (!(frame instanceof HTMLIFrameElement)) return
  frame.dataset.zeroOneCustomPageId = id
  frame.dataset.zeroOneCustomPageLoaded = 'false'
  showCustomPageLoading(frame)

  if (frame.dataset.zeroOneCustomPageLoadBound !== 'true') {
    frame.dataset.zeroOneCustomPageLoadBound = 'true'
    frame.addEventListener('load', () => finishCustomPageLoad(frame))
  }
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

function updateMenusAfterSave(items) {
  adminMenuItems = normalizeMenuItems(items)
  customIconOverrides.clear()
  scheduleScan()
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
      const path = new URL(this.__zeroOneSettingsURL, window.location.origin).pathname
      if (this.__zeroOneSettingsMethod === 'PUT' && path === ADMIN_SETTINGS_API && typeof body === 'string') {
        const payload = JSON.parse(body)
        if (Array.isArray(payload.custom_menu_items)) {
          payload.custom_menu_items = augmentCustomMenuItems(payload.custom_menu_items)
          nextBody = JSON.stringify(payload)
          this.addEventListener('load', () => {
            if (this.status < 200 || this.status >= 300) return
            adminSettingsRevision += 1
            let savedSettings = null
            try {
              const response = typeof this.response === 'string'
                ? JSON.parse(this.response)
                : this.response
              savedSettings = response && typeof response === 'object' && 'code' in response
                ? response.data
                : response
            } catch {}
            if (savedSettings && typeof savedSettings === 'object') {
              adminNavigationSettings = savedSettings
            }
            updateMenusAfterSave(
              Array.isArray(savedSettings?.custom_menu_items)
                ? savedSettings.custom_menu_items
                : payload.custom_menu_items,
            )
          }, { once: true })
        }
      }
    } catch {}
    return nativeSend.call(this, nextBody)
  }
}

function requestAdminSettings(user) {
  if (user?.role !== 'admin' || adminSettingsRequested) return
  adminSettingsRequested = true
  const requestRevision = adminSettingsRevision
  fetch(ADMIN_SETTINGS_API, {
    credentials: 'same-origin',
    headers: apiHeaders(),
  })
    .then(readApiResponse)
    .then((settings) => {
      if (requestRevision !== adminSettingsRevision) return
      adminNavigationSettings = settings
      updateMenusAfterSave(settings?.custom_menu_items)
    })
    .catch(() => {})
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
  requestAdminSettings(user)
  requestPublicSettings(user)
  renderHeaderMenu(user)
  reconcileSidebar(user)
  reconcileBuiltInNavigation(user)
  reconcileSidebarOrder(user)
  ensurePlacementControls(user)
  reconcileCustomPageFrame(user)
  reconcileDashboardPurchaseAction(user)
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

installXHRSaveBridge()
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('header-custom-menu', scan)
