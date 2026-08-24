// Header custom-menu compatibility adapter for the approved recovered Console.
// The source Console owns this behavior; this layer only bridges the immutable
// preview snapshot and yields when native header placement controls are present.
const ADMIN_SETTINGS_API = '/api/v1/admin/settings'
const ADMIN_SETTINGS_PATH = '/admin/settings'
const MENU_GROUP_MARKER = 'zero-one-header-custom-menu-group'
const CUSTOM_MENU_DESCRIPTION = '添加自定义 iframe 页面到侧边栏、顶部导航或同时显示在两处。每个页面可以选择普通用户、管理员或全部登录用户可见。'

let adminMenuItems = []
let adminSettingsRequested = false

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

function currentMenuItems(user) {
  if (user?.role === 'admin') return adminMenuItems
  return normalizeMenuItems(window.__APP_CONFIG__?.custom_menu_items)
}

function isVisibleToUser(item, user) {
  const visibility = user?.role === 'admin' ? 'admin' : 'user'
  return item.visibility === visibility || item.visibility === 'all'
}

function visibleHeaderItems(user) {
  return currentMenuItems(user)
    .filter((item) => isVisibleToUser(item, user) && (item.placement === 'header' || item.placement === 'both'))
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

function createLinkIcon() {
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
  const signature = JSON.stringify(items.map((item) => [item.id, item.label, item.sort_order]))
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
    const link = document.createElement('a')
    link.className = 'zero-one-header-custom-menu-link'
    link.href = `/custom/${encodeURIComponent(item.id)}`
    link.setAttribute('data-testid', `header-custom-menu-${item.id}`)
    link.setAttribute('data-zero-one-header-menu', 'link')
    link.append(createLinkIcon())
    const label = document.createElement('span')
    label.textContent = item.label.trim()
    link.append(label)
    bindInternalLink(link)
    group.append(link)
  }

  if (modelPlaza) modelPlaza.after(group)
  else actionRow.prepend(group)
}

function createSidebarIcon() {
  const icon = createLinkIcon()
  icon.classList.remove('zero-one-header-custom-menu-icon')
  icon.classList.add('h-5', 'w-5', 'flex-shrink-0')
  return icon
}

function createSidebarLink(item, collapsed) {
  const link = document.createElement('a')
  link.href = `/custom/${encodeURIComponent(item.id)}`
  link.className = `sidebar-link mb-1${collapsed ? ' sidebar-link-collapsed' : ''}`
  link.setAttribute('aria-label', item.label.trim())
  link.setAttribute('data-testid', `sidebar-custom-menu-${item.id}`)
  link.setAttribute('data-zero-one-sidebar-shared-menu', item.id)
  if (collapsed) link.title = item.label.trim()
  link.append(createSidebarIcon())

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

  let previousLink = insertionAnchor
  for (const item of sidebarItems) {
    const link = [...aside.querySelectorAll(`a[href="/custom/${CSS.escape(item.id)}"]`)]
      .find((candidate) => candidate instanceof HTMLAnchorElement && !candidate.hidden)
    if (!(link instanceof HTMLAnchorElement) || link.parentElement !== container) continue
    if (previousLink.nextElementSibling !== link) previousLink.after(link)
    previousLink = link
  }
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
  return normalizeMenuItems(items).map((item, index) => ({
    ...item,
    placement: normalizePlacement(placements[index] ?? item.placement),
  }))
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
    const grid = itemCard.querySelector('.grid')
    if (!(grid instanceof HTMLElement)) return
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
            if (this.status >= 200 && this.status < 300) updateMenusAfterSave(payload.custom_menu_items)
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
  fetch(ADMIN_SETTINGS_API, {
    credentials: 'same-origin',
    headers: apiHeaders(),
  })
    .then(readApiResponse)
    .then((settings) => updateMenusAfterSave(settings?.custom_menu_items))
    .catch(() => {})
}

function scan() {
  const user = authenticatedUser()
  requestAdminSettings(user)
  renderHeaderMenu(user)
  reconcileSidebar(user)
  ensurePlacementControls(user)
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

installXHRSaveBridge()
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('header-custom-menu', scan)
