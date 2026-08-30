// Navigation settings adapter for the approved recovered Console.
// The legacy asset name is retained to preserve immutable snapshot URLs.
const ADMIN_SETTINGS_PATH = '/admin/settings'
const ADMIN_SETTINGS_API = '/api/v1/admin/settings'
const MAX_MENU_ITEMS = 20
const MAX_QR_BYTES = 300 * 1024
const MAX_SVG_BYTES = 10 * 1024
const SUPPORTED_QR_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp'])
const IMAGE_TUTORIAL_MENU_ID = 'image-tutorial'
const IMAGE_TUTORIAL_LABELS = new Set(['生图教程', 'image tutorial', 'image generation tutorial'])

const USER_SIDEBAR_ITEMS = [
  ['/dashboard', '仪表盘', 'Dashboard'],
  ['/model-plaza', '模型广场', 'Model Plaza'],
  ['/keys', 'API 密钥', 'API Keys'],
  ['/batch-image', '批量图片', 'Batch Images'],
  ['/usage', '使用记录', 'Usage'],
  ['/available-channels', '可用渠道', 'Available Channels'],
  ['/monitor', '渠道状态', 'Channel Status'],
  ['/subscriptions', '我的订阅', 'My Subscriptions'],
  ['/purchase', '购买订阅', 'Buy Subscription'],
  ['/orders', '我的订单', 'My Orders'],
  ['/redeem', '兑换', 'Redeem'],
  ['/images', '在线生图', 'Online Images'],
  ['/affiliate', '邀请返利', 'Affiliate'],
  ['/profile', '个人资料', 'Profile'],
]

const ADMIN_SIDEBAR_ITEMS = [
  ['/admin/dashboard', '仪表盘', 'Dashboard'],
  ['/model-plaza', '模型广场', 'Model Plaza'],
  ['/admin/ops', '运维监控', 'Operations'],
  ['/admin/users', '用户管理', 'Users'],
  ['/admin/groups', '分组管理', 'Groups'],
  ['/admin/channels', '渠道管理', 'Channels'],
  ['/admin/subscriptions', '订阅管理', 'Subscriptions'],
  ['/admin/accounts', '账号管理', 'Accounts'],
  ['/admin/announcements', '公告', 'Announcements'],
  ['/admin/proxies', 'IP 管理', 'IP Management'],
  ['/admin/security-audit', '安全审计', 'Security Audit'],
  ['/admin/redeem', '兑换码', 'Redeem Codes'],
  ['/admin/promo-codes', '优惠码', 'Promo Codes'],
  ['/admin/affiliates', '邀请返利', 'Affiliate'],
  ['/admin/orders', '订单管理', 'Orders'],
  ['/admin/usage', '使用记录', 'Usage'],
  ['/admin/audit-logs', '操作日志', 'Audit Logs'],
  ['/admin/settings', '系统设置', 'Settings'],
]

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.defaultSidebarOrders = {
  user: USER_SIDEBAR_ITEMS.map(([path]) => path),
  admin: ADMIN_SIDEBAR_ITEMS.flatMap(([path]) => path === '/admin/settings' ? ['/keys', path] : [path]),
}

const ICON_PRESETS = [
  ['link', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H15a4.5 4.5 0 010 9h-1.5m-3 0H9a4.5 4.5 0 010-9h1.5m-3 6h9"/></svg>'],
  ['users', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.1 9.1 0 00.98.06 8.96 8.96 0 003.02-.52 4.5 4.5 0 00-6.9-3.96M15 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 20.12a7.5 7.5 0 0115 0A17.9 17.9 0 0112 21.75a17.9 17.9 0 01-7.5-1.63z"/></svg>'],
  ['gift', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75h16.5v10.5H3.75V9.75zM2.25 6.75h19.5v3H2.25v-3zM12 6.75v13.5m0-13.5H9.75a2.25 2.25 0 110-4.5C12 2.25 12 6.75 12 6.75zm0 0h2.25a2.25 2.25 0 100-4.5C12 2.25 12 6.75 12 6.75z"/></svg>'],
  ['book', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5A2.25 2.25 0 016.75 2.25H12v18H6.75A2.25 2.25 0 004.5 22.5v-18zm15 0a2.25 2.25 0 00-2.25-2.25H12v18h5.25a2.25 2.25 0 012.25 2.25v-18z"/></svg>'],
  ['star', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.1a.56.56 0 00.47.34l5.5.44a.56.56 0 01.32.98l-4.2 3.59a.56.56 0 00-.18.55l1.28 5.37a.56.56 0 01-.84.61l-4.72-2.88a.56.56 0 00-.58 0l-4.72 2.88a.56.56 0 01-.84-.61l1.28-5.37a.56.56 0 00-.18-.55l-4.2-3.59a.56.56 0 01.32-.98l5.5-.44a.56.56 0 00.47-.34l2.12-5.1z"/></svg>'],
]
window.__ZERO_ONE_NAVIGATION_ICON_PRESETS__ = ICON_PRESETS

let adminMenuItems = []
let adminSettingsRequest = null
let adminSettingsController = null
let adminSettingsRevision = 0
let adminSettingsIdentity = ''
let adminSettingsReady = false
let profileNavigationEnabled = true
let subscriptionNavigationEnabled = true
let modelPlazaPlacement = 'header'
let landingTutorialURL = ''
let legacyImageTutorialURL = ''
let imageTutorialLegacyID = ''
let userSidebarOrder = []
let adminSidebarOrder = []

function mergeAdminMenuItemsForSave(nativeItems) {
  const eligibleNativeItems = nativeItems.filter(
    (item) => !imageTutorialLegacyID || item.id !== imageTutorialLegacyID,
  )
  const nativeByID = new Map(eligibleNativeItems.filter((item) => item.id).map((item) => [item.id, item]))
  const merged = adminMenuItems.map((item) => {
    if (item.placement === 'header' && item.navigation_type === 'qr') return { ...item }
    return item.id && nativeByID.has(item.id) ? nativeByID.get(item.id) : { ...item }
  })
  const knownIDs = new Set(merged.map((item) => item.id).filter(Boolean))
  for (const item of eligibleNativeItems) {
    if (!item.id || !knownIDs.has(item.id)) merged.push(item)
  }
  return merged.map((item, index) => ({ ...item, sort_order: index }))
}

window.__ZERO_ONE_HEADER_NAVIGATION_EDITOR__ = {
  augmentSettingsPayload(payload) {
    const identity = window.__ZERO_ONE_ADMIN_NAVIGATION__?.identity() || ''
    if (!adminSettingsReady || !identity || identity !== adminSettingsIdentity) return
    payload.custom_menu_items = mergeAdminMenuItemsForSave(payload.custom_menu_items)
    payload.profile_navigation_enabled = profileNavigationEnabled
    payload.subscription_navigation_enabled = subscriptionNavigationEnabled
    payload.model_plaza_placement = modelPlazaPlacement
    payload.landing_tutorial_url = landingTutorialURL
    payload.user_sidebar_order = userSidebarOrder
    payload.admin_sidebar_order = adminSidebarOrder
    payload.community_qr_enabled = false
  },
  applySavedSettings(settings) {
    const identity = window.__ZERO_ONE_ADMIN_NAVIGATION__?.identity() || ''
    if (!adminSettingsReady || !identity || identity !== adminSettingsIdentity) return
    applySettings(settings)
    const panel = document.querySelector('[data-zero-one-header-navigation="settings"]')
    if (panel instanceof HTMLElement) renderItems(panel)
  },
}

function localText(zh, en) {
  const locale = localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN'
  return locale.toLowerCase().startsWith('zh') ? zh : en
}

function createElement(tagName, attributes = {}, text = '') {
  const element = document.createElement(tagName)
  for (const [name, value] of Object.entries(attributes)) {
    if (name === 'class') element.className = value
    else element.setAttribute(name, value)
  }
  if (text) element.textContent = text
  return element
}

function authenticatedAdmin() {
  const token = localStorage.getItem('auth_token')
  const rawUser = localStorage.getItem('auth_user')
  if (!token || !rawUser) return false
  try {
    return JSON.parse(rawUser)?.role === 'admin'
  } catch {
    return false
  }
}

function apiHeaders(includeContentType = false) {
  const headers = {
    Accept: 'application/json',
    'Accept-Language': localStorage.getItem('sub2api_locale') || 'zh-CN',
    'X-Admin-UI-Request': '1',
  }
  const token = localStorage.getItem('auth_token')
  if (token) headers.Authorization = 'Bearer ' + token
  if (includeContentType) headers['Content-Type'] = 'application/json'
  return headers
}

async function readApiResponse(response) {
  const payload = await response.json().catch(() => null)
  if (!response.ok) throw new Error(payload?.message || 'HTTP ' + response.status)
  if (payload && typeof payload === 'object' && 'code' in payload) {
    if (payload.code !== 0) throw new Error(payload.message || localText('请求失败', 'Request failed'))
    return payload.data
  }
  return payload
}

function normalizeMenuItems(value) {
  if (!Array.isArray(value)) return []
  return value.filter((item) => item && typeof item === 'object').map((item, index) => ({
    ...item,
    id: typeof item.id === 'string' ? item.id : '',
    label: typeof item.label === 'string' ? item.label : '',
    icon_svg: typeof item.icon_svg === 'string' ? item.icon_svg : '',
    url: typeof item.url === 'string' ? item.url : '',
    visibility: ['user', 'admin', 'all'].includes(item.visibility) ? item.visibility : 'all',
    placement: ['sidebar', 'header', 'both'].includes(item.placement) ? item.placement : 'sidebar',
    navigation_type: item.navigation_type === 'qr' ? 'qr' : '',
    qr_description: typeof item.qr_description === 'string' ? item.qr_description : '',
    qr_image: typeof item.qr_image === 'string' ? item.qr_image : '',
    sort_order: Number.isFinite(Number(item.sort_order)) ? Number(item.sort_order) : index,
  }))
}

function normalizeSidebarOrder(value) {
  if (!Array.isArray(value)) return []
  return [...new Set(value.filter((path) => typeof path === 'string' && path.startsWith('/')))]
}

function imageTutorialMenuItem() {
  const pages = adminMenuItems.filter((item) =>
    item.navigation_type !== 'qr' && item.placement !== 'header' && item.id && item.url.trim()
  )
  return pages.find((item) => item.id === IMAGE_TUTORIAL_MENU_ID) || pages.find((item) => {
    const label = item.label.trim().toLowerCase()
    return IMAGE_TUTORIAL_LABELS.has(label)
  })
}

function replaceSidebarPath(order, from, to) {
  return [...new Set(order.map((path) => path === from ? to : path))]
}

function normalizeImageTutorialMenu() {
  const item = imageTutorialMenuItem()
  if (!item) return
  const previousID = item.id
  const previousPath = '/custom/' + previousID
  item.id = IMAGE_TUTORIAL_MENU_ID
  item.label = '生图教程'
  item.icon_svg = item.icon_svg || ICON_PRESETS[3][1]
  item.visibility = 'all'
  item.placement = 'sidebar'
  item.navigation_type = ''
  item.qr_description = ''
  item.qr_image = ''
  if (previousID !== IMAGE_TUTORIAL_MENU_ID) imageTutorialLegacyID = previousID
  userSidebarOrder = replaceSidebarPath(userSidebarOrder, previousPath, '/custom/' + IMAGE_TUTORIAL_MENU_ID)
  adminSidebarOrder = replaceSidebarPath(adminSidebarOrder, previousPath, '/custom/' + IMAGE_TUTORIAL_MENU_ID)
}

function setImageTutorialMenuURL(url) {
  const item = imageTutorialMenuItem()
  if (!url.trim()) {
    if (!item) return
    const path = '/custom/' + item.id
    adminMenuItems.splice(adminMenuItems.indexOf(item), 1)
    userSidebarOrder = userSidebarOrder.filter((candidate) => candidate !== path)
    adminSidebarOrder = adminSidebarOrder.filter((candidate) => candidate !== path)
    reindexMenuItems()
    return
  }
  if (item) item.url = url
  else if (adminMenuItems.length < MAX_MENU_ITEMS) {
    adminMenuItems.push({
      id: IMAGE_TUTORIAL_MENU_ID,
      label: '生图教程',
      icon_svg: ICON_PRESETS[3][1],
      url,
      visibility: 'all',
      placement: 'sidebar',
      navigation_type: '',
      qr_description: '',
      qr_image: '',
      sort_order: adminMenuItems.length,
    })
  }
  normalizeImageTutorialMenu()
}

function headerEntries() {
  return adminMenuItems.map((item, index) => ({ item, index }))
    .filter(({ item }) => item.placement === 'header')
}

function reindexMenuItems() {
  adminMenuItems.forEach((item, index) => { item.sort_order = index })
}

function safeSvgElement(raw, className = '') {
  if (typeof raw !== 'string' || !raw.trim()) return null
  const documentNode = new DOMParser().parseFromString(raw, 'image/svg+xml')
  const svg = documentNode.documentElement
  if (svg.nodeName.toLowerCase() !== 'svg' || documentNode.querySelector('parsererror')) return null
  for (const unsafe of svg.querySelectorAll('script, foreignObject, iframe, object, embed, style')) unsafe.remove()
  for (const node of [svg, ...svg.querySelectorAll('*')]) {
    for (const attribute of [...node.attributes]) {
      const name = attribute.name.toLowerCase()
      if (name.startsWith('on') || name === 'href' || name === 'xlink:href' || name === 'src') {
        node.removeAttribute(attribute.name)
      }
    }
  }
  const imported = document.importNode(svg, true)
  if (className) imported.setAttribute('class', className)
  imported.setAttribute('aria-hidden', 'true')
  return imported
}

function readFile(file, textMode) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error(localText('读取文件失败。', 'Failed to read file.')))
    if (textMode) reader.readAsText(file)
    else reader.readAsDataURL(file)
  })
}

function applySettings(settings) {
  adminMenuItems = normalizeMenuItems(settings?.custom_menu_items)
  profileNavigationEnabled = settings?.profile_navigation_enabled !== false
  subscriptionNavigationEnabled = settings?.subscription_navigation_enabled !== false
  modelPlazaPlacement = settings?.model_plaza_placement === 'sidebar' ? 'sidebar' : 'header'
  landingTutorialURL = typeof settings?.landing_tutorial_url === 'string' ? settings.landing_tutorial_url : ''
  legacyImageTutorialURL = typeof settings?.legacy_image_tutorial_url === 'string'
    ? settings.legacy_image_tutorial_url.trim()
    : ''
  userSidebarOrder = normalizeSidebarOrder(settings?.user_sidebar_order)
  adminSidebarOrder = normalizeSidebarOrder(settings?.admin_sidebar_order)
  imageTutorialLegacyID = ''
  if (!imageTutorialMenuItem() && legacyImageTutorialURL) {
    setImageTutorialMenuURL(legacyImageTutorialURL)
  }
  userSidebarOrder = replaceSidebarPath(userSidebarOrder, '/image-tutorial', '/custom/image-tutorial')
  adminSidebarOrder = replaceSidebarPath(adminSidebarOrder, '/image-tutorial', '/custom/image-tutorial')
  normalizeImageTutorialMenu()
}

function resetAdminSettingsState(identity = '') {
  adminSettingsRevision += 1
  adminSettingsController?.abort()
  adminSettingsController = null
  adminSettingsRequest = null
  adminSettingsIdentity = identity
  adminSettingsReady = false
  adminMenuItems = []
  profileNavigationEnabled = true
  subscriptionNavigationEnabled = true
  modelPlazaPlacement = 'header'
  landingTutorialURL = ''
  legacyImageTutorialURL = ''
  imageTutorialLegacyID = ''
  userSidebarOrder = []
  adminSidebarOrder = []
}

function sidebarOrderCandidates(role) {
  const base = (role === 'user' ? USER_SIDEBAR_ITEMS : ADMIN_SIDEBAR_ITEMS)
    .map(([path, zh, en]) => ({ path, label: localText(zh, en) }))
  const custom = adminMenuItems
    .filter((item) => {
      const visible = item.visibility === role || item.visibility === 'all'
      return visible && item.placement !== 'header'
    })
    .map((item) => ({ path: '/custom/' + item.id, label: item.label }))
  return [...base, ...custom]
}

function orderedSidebarItems(role) {
  const candidates = sidebarOrderCandidates(role)
  const byPath = new Map(candidates.map((item) => [item.path, item]))
  const order = role === 'user' ? userSidebarOrder : adminSidebarOrder
  const ordered = order.flatMap((path) => {
    const item = byPath.get(path)
    if (!item) return []
    byPath.delete(path)
    return [item]
  })
  return [...ordered, ...byPath.values()]
}

function renderSidebarOrderList(container, role) {
  container.replaceChildren()
  const items = orderedSidebarItems(role)
  const order = items.map((item) => item.path)
  if (role === 'user') userSidebarOrder = order
  else adminSidebarOrder = order
  items.forEach((item, index) => {
    const row = createElement('div', {
      class: 'zero-one-sidebar-order-item',
      'data-sidebar-path': item.path,
    })
    row.append(createElement('span', { class: 'zero-one-sidebar-order-index' }, String(index + 1)))
    row.append(createElement('span', { class: 'zero-one-sidebar-order-label' }, item.label))
    const actions = createElement('span', { class: 'zero-one-sidebar-order-actions' })
    ;[[-1, '↑', localText('上移', 'Move up'), 'up'], [1, '↓', localText('下移', 'Move down'), 'down']]
      .forEach(([direction, glyph, label, key]) => {
        const button = createElement('button', {
          type: 'button',
          'aria-label': label,
          'data-direction': key,
        }, glyph)
        button.disabled = index + direction < 0 || index + direction >= items.length
        button.addEventListener('click', () => {
          const next = [...order]
          const target = index + direction
          ;[next[index], next[target]] = [next[target], next[index]]
          if (role === 'user') userSidebarOrder = next
          else adminSidebarOrder = next
          renderSidebarOrderList(container, role)
        })
        actions.append(button)
      })
    row.append(actions)
    container.append(row)
  })
}

function createSidebarOrderEditor(role) {
  const details = createElement('details', {
    class: 'zero-one-sidebar-order-section',
    'data-testid': role + '-sidebar-order-section',
  })
  details.append(createElement('summary', {}, role === 'user'
    ? localText('普通用户侧栏顺序', 'Regular User Sidebar Order')
    : localText('管理员侧栏顺序', 'Administrator Sidebar Order')))
  details.append(createElement('p', {}, role === 'user'
    ? localText('同时用于管理员“我的账户”分区；隐藏项目保留其排序位置。', 'Also applies to the administrator My Account section; hidden items keep their position.')
    : localText('调整管理功能和管理员可见自定义页面的先后顺序。', 'Order administration features and administrator-visible custom pages.')))
  const list = createElement('div', {
    class: 'zero-one-sidebar-order-list',
    'data-testid': role + '-sidebar-order-list',
  })
  renderSidebarOrderList(list, role)
  details.append(list)
  return details
}

function createToggleRow(title, hint, checked, testId, onChange) {
  const row = createElement('label', { class: 'zero-one-navigation-toggle-row' })
  const copy = createElement('span')
  copy.append(createElement('strong', {}, title), createElement('small', {}, hint))
  const input = createElement('input', { type: 'checkbox', 'data-testid': testId })
  input.checked = checked
  input.addEventListener('change', () => onChange(input.checked))
  row.append(copy, input)
  return row
}

function createURLRow(title, hint, value, testId, onInput) {
  const row = createElement('label', { class: 'zero-one-navigation-url-row' })
  const copy = createElement('span')
  copy.append(createElement('strong', {}, title), createElement('small', {}, hint))
  const input = createElement('input', {
    type: 'text',
    placeholder: 'https://docs.example.com',
    'data-testid': testId,
  })
  input.value = value
  input.addEventListener('input', () => onInput(input.value))
  row.append(copy, input)
  return row
}

function createIconChooser(item, visibleIndex, rerender) {
  const editor = createElement('div', { class: 'zero-one-navigation-icon-editor' })
  editor.append(createElement('span', {}, localText('SVG 图标', 'SVG Icon')))
  const choices = createElement('div', {
    class: 'zero-one-navigation-icon-choices',
    role: 'group',
    'aria-label': localText('内置 SVG 图标', 'Built-in SVG icons'),
    'data-testid': 'header-navigation-icon-' + visibleIndex,
  })
  ICON_PRESETS.forEach(([id, svg]) => {
    const selected = item.icon_svg === svg
    const button = createElement('button', {
      type: 'button',
      class: 'zero-one-navigation-icon-choice' + (selected ? ' is-selected' : ''),
      title: id,
      'aria-label': id,
      'aria-pressed': selected ? 'true' : 'false',
      'data-testid': 'navigation-icon-preset-' + id,
    })
    const icon = safeSvgElement(svg)
    if (icon) button.append(icon)
    button.addEventListener('click', () => {
      item.icon_svg = svg
      rerender()
    })
    choices.append(button)
  })
  const uploadLabel = createElement('label', { class: 'zero-one-navigation-upload-button' }, localText('上传 SVG', 'Upload SVG'))
  const upload = createElement('input', { type: 'file', accept: '.svg' })
  upload.hidden = true
  upload.addEventListener('change', async () => {
    const file = upload.files?.[0]
    upload.value = ''
    if (!file || file.size > MAX_SVG_BYTES) return
    const raw = await readFile(file, true).catch(() => '')
    if (!safeSvgElement(raw)) return
    item.icon_svg = raw.trim()
    rerender()
  })
  uploadLabel.append(upload)
  editor.append(choices, uploadLabel)
  return editor
}

function renderItems(panel) {
  const list = panel.querySelector('.zero-one-header-navigation-list')
  if (!(list instanceof HTMLElement)) return
  const rerender = () => renderItems(panel)
  list.replaceChildren()
  const entries = headerEntries()
  if (!entries.length) {
    list.append(createElement('p', {
      class: 'zero-one-header-navigation-empty',
      'data-testid': 'header-navigation-empty',
    }, localText('尚未添加顶部入口。可按需添加一个或多个。', 'No header entries yet. Add one or more as needed.')))
    return
  }

  entries.forEach(({ item, index }, visibleIndex) => {
    const entry = createElement('div', { class: 'zero-one-header-navigation-entry' })
    const entryHeader = createElement('div', { class: 'zero-one-header-navigation-entry-header' })
    entryHeader.append(createElement('strong', {}, localText('顶部入口 #' + (visibleIndex + 1), 'Header Entry #' + (visibleIndex + 1))))
    const actions = createElement('div', { class: 'zero-one-header-navigation-actions' })
    ;[[-1, '↑'], [1, '↓']].forEach(([direction, text]) => {
      if (visibleIndex + direction < 0 || visibleIndex + direction >= entries.length) return
      const button = createElement('button', { type: 'button', class: 'zero-one-header-navigation-icon-button' }, text)
      button.addEventListener('click', () => {
        const target = headerEntries()[visibleIndex + direction].index
        const current = adminMenuItems[index]
        adminMenuItems[index] = adminMenuItems[target]
        adminMenuItems[target] = current
        reindexMenuItems()
        rerender()
      })
      actions.append(button)
    })
    const remove = createElement('button', {
      type: 'button',
      class: 'zero-one-header-navigation-icon-button is-danger',
      'aria-label': localText('删除', 'Remove'),
    }, '×')
    remove.addEventListener('click', () => {
      adminMenuItems.splice(index, 1)
      reindexMenuItems()
      rerender()
    })
    actions.append(remove)
    entryHeader.append(actions)

    const fields = createElement('div', { class: 'zero-one-header-navigation-fields' })
    const name = createElement('label')
    name.append(createElement('span', {}, localText('顶部按钮及弹窗标题', 'Button and Dialog Title')))
    const nameInput = createElement('input', {
      type: 'text',
      maxlength: '50',
      placeholder: localText('如：交流群', 'e.g. Community'),
      'data-testid': 'header-navigation-name-' + visibleIndex,
    })
    nameInput.value = item.label
    nameInput.addEventListener('input', () => { item.label = nameInput.value })
    name.append(nameInput)

    const visibilityField = createElement('label')
    visibilityField.append(createElement('span', {}, localText('可见范围', 'Visibility')))
    const visibility = createElement('select', { 'data-testid': 'header-navigation-visibility-' + visibleIndex })
    visibility.append(
      new Option(localText('普通用户和管理员都可见', 'All signed-in users'), 'all'),
      new Option(localText('仅普通用户', 'Regular users only'), 'user'),
      new Option(localText('仅管理员', 'Administrators only'), 'admin'),
    )
    visibility.value = item.visibility
    visibility.addEventListener('change', () => { item.visibility = visibility.value })
    visibilityField.append(visibility)

    const description = createElement('label', { class: 'zero-one-header-navigation-wide-field' })
    description.append(createElement('span', {}, localText('弹窗副标题', 'Dialog Subtitle')))
    const descriptionInput = createElement('input', {
      type: 'text',
      maxlength: '240',
      placeholder: localText('扫码加入交流群获取支持', 'Scan to join and get support'),
      'data-testid': 'header-navigation-description-' + visibleIndex,
    })
    descriptionInput.value = item.qr_description
    descriptionInput.addEventListener('input', () => { item.qr_description = descriptionInput.value })
    description.append(descriptionInput)

    const qrField = createElement('div', { class: 'zero-one-header-navigation-wide-field zero-one-navigation-qr-field' })
    qrField.append(createElement('span', {}, localText('二维码图片', 'QR Code Image')))
    const preview = createElement('div', { class: 'zero-one-navigation-qr-preview' })
    if (item.qr_image) preview.append(createElement('img', { src: item.qr_image, alt: '' }))
    else preview.append(createElement('span', {}, localText('尚未选择', 'Not selected')))
    const qrUploadLabel = createElement('label', {
      class: 'zero-one-navigation-upload-button',
      'data-testid': 'header-navigation-qr-upload-' + visibleIndex,
    }, localText('选择二维码', 'Select QR Code'))
    const qrUpload = createElement('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp' })
    qrUpload.hidden = true
    qrUpload.addEventListener('change', async () => {
      const file = qrUpload.files?.[0]
      qrUpload.value = ''
      if (!file || !SUPPORTED_QR_TYPES.has(file.type) || file.size > MAX_QR_BYTES) return
      item.qr_image = await readFile(file, false).catch(() => '')
      if (item.qr_image) {
        item.navigation_type = 'qr'
        item.url = ''
      }
      rerender()
    })
    qrUploadLabel.append(qrUpload)
    qrField.append(preview, qrUploadLabel)
    fields.append(name, visibilityField, description, qrField, createIconChooser(item, visibleIndex, rerender))
    entry.append(entryHeader, fields)
    list.append(entry)
  })
}

function buildAdminPanel(cardBody, settings) {
  applySettings(settings)
  adminSettingsReady = true
  const panel = createElement('section', {
    class: 'zero-one-header-navigation-settings',
    'data-testid': 'header-navigation-settings',
    'data-zero-one-header-navigation': 'settings',
  })

  const builtIn = createElement('div', { class: 'zero-one-navigation-built-in' })
  builtIn.append(
    createElement('h3', {}, localText('导航栏显示设置', 'Navigation Visibility')),
    createElement('p', {}, localText('控制内置入口，以及模型广场在控制台中的位置。', 'Control built-in entries and Model Plaza placement.')),
    createToggleRow(localText('个人资料', 'Profile'), localText('控制侧边导航入口。', 'Controls the sidebar entry.'), profileNavigationEnabled, 'profile-navigation-toggle', (value) => { profileNavigationEnabled = value }),
    createToggleRow(localText('我的订阅', 'My Subscriptions'), localText('控制“我的订阅”和顶部订阅进度入口。', 'Controls My Subscriptions and the header progress entry.'), subscriptionNavigationEnabled, 'subscription-navigation-toggle', (value) => { subscriptionNavigationEnabled = value }),
    createURLRow(localText('生图教程（特殊自定义菜单）', 'Image Tutorial (Special Custom Menu)'), localText('仍按标准自定义菜单保存，固定显示在左侧导航；在线生图按钮打开同一个站内 /custom/image-tutorial iframe 页面。目标网站必须允许 iframe 嵌入，留空会移除该菜单。', 'Saved as a standard custom-menu page fixed in the sidebar. The Online Images button opens the same internal /custom/image-tutorial iframe page. The target must allow iframe embedding; clear the field to remove it.'), imageTutorialMenuItem()?.url || '', 'image-tutorial-menu-url', setImageTutorialMenuURL),
    createURLRow(localText('首页接入教学文档链接', 'Homepage Integration Tutorial URL'), localText('用于首页“查看接入教学文档”按钮；留空时沿用开源知识库链接。', 'Used by the homepage integration tutorial button; falls back to the Open-source Knowledge Base URL.'), landingTutorialURL, 'landing-tutorial-url', (value) => { landingTutorialURL = value }),
  )
  const placementRow = createElement('label', { class: 'zero-one-navigation-placement-row' })
  const placementCopy = createElement('span')
  placementCopy.append(createElement('strong', {}, localText('模型广场位置', 'Model Plaza Placement')), createElement('small', {}, localText('只在选定的一个位置显示。', 'Shown in one selected area.')))
  const placement = createElement('select', { 'data-testid': 'model-plaza-placement' })
  placement.append(new Option(localText('顶部导航', 'Header'), 'header'), new Option(localText('侧边导航', 'Sidebar'), 'sidebar'))
  placement.value = modelPlazaPlacement
  placement.addEventListener('change', () => { modelPlazaPlacement = placement.value })
  placementRow.append(placementCopy, placement)
  builtIn.append(placementRow)
  const orderEditors = createElement('div', { class: 'zero-one-sidebar-order-grid' })
  orderEditors.append(createSidebarOrderEditor('user'), createSidebarOrderEditor('admin'))
  builtIn.append(orderEditors)

  const header = createElement('div', { class: 'zero-one-header-navigation-header' })
  const heading = createElement('div')
  heading.append(createElement('h3', {}, localText('顶部导航入口', 'Header Navigation Entries')), createElement('p', {}, localText('添加一个或多个二维码入口；点击顶部按钮后弹出二维码。', 'Add one or more QR entries shown as header buttons.')))
  const addButton = createElement('button', { type: 'button', class: 'zero-one-header-navigation-add', 'data-testid': 'header-navigation-add' }, localText('＋ 添加顶部入口', '+ Add Header Entry'))
  header.append(heading, addButton)

  const list = createElement('div', { class: 'zero-one-header-navigation-list' })
  const footer = createElement('div', { class: 'zero-one-header-navigation-footer' })
  const footerCopy = createElement('div')
  const status = createElement('p', { class: 'zero-one-header-navigation-status', role: 'status', 'aria-live': 'polite', 'data-testid': 'header-navigation-status' })
  footerCopy.append(createElement('p', { class: 'zero-one-header-navigation-hint' }, localText('这里只管理顶部二维码入口；侧边栏和双位置页面仍在下方管理。', 'This area manages header QR entries; other pages remain below.')), status)
  footer.append(footerCopy)
  panel.append(builtIn, header, list, footer)
  const landingNotice = cardBody.querySelector('[data-testid="landing-notice-settings"]')
  if (landingNotice) landingNotice.after(panel)
  else cardBody.prepend(panel)

  const setStatus = (message, tone = '') => {
    status.textContent = message
    status.dataset.tone = tone
  }
  addButton.addEventListener('click', () => {
    if (adminMenuItems.length >= MAX_MENU_ITEMS) return
    adminMenuItems.push({
      id: '',
      label: '',
      icon_svg: ICON_PRESETS[1][1],
      url: '',
      visibility: 'all',
      placement: 'header',
      navigation_type: 'qr',
      qr_description: '',
      qr_image: '',
      sort_order: adminMenuItems.length,
    })
    renderItems(panel)
  })
  cardBody.closest('form')?.addEventListener('submit', (event) => {
    const invalid = headerEntries().find(({ item }) => !item.label.trim() || (item.navigation_type === 'qr' && !item.qr_image))
    if (invalid) {
      event.preventDefault()
      event.stopImmediatePropagation()
      setStatus(localText('请填写标题并为新增入口选择二维码。', 'Enter a title and select a QR image.'), 'error')
      return
    }
    setStatus('')
  }, { capture: true })
  renderItems(panel)
}

function findSiteSettingsBody() {
  const heading = [...document.querySelectorAll('h1, h2, h3')].find((node) => {
    const text = node.textContent?.trim().toLowerCase()
    return text === '站点设置' || text === 'site settings'
  })
  const card = heading?.closest('.card')
  return card?.querySelector('.space-y-6.p-6') || card?.lastElementChild || null
}

function ensureAdminSettings() {
  let overlay = document.querySelector('[data-zero-one-header-navigation="settings"]')
  const identity = window.__ZERO_ONE_ADMIN_NAVIGATION__?.identity() || ''
  if (window.location.pathname !== ADMIN_SETTINGS_PATH || !authenticatedAdmin()) {
    overlay?.remove()
    if (adminSettingsIdentity || adminSettingsReady) resetAdminSettingsState()
    return
  }
  if (identity !== adminSettingsIdentity) {
    overlay?.remove()
    overlay = null
    resetAdminSettingsState(identity)
  }
  const nativePanel = [...document.querySelectorAll('[data-testid="header-navigation-settings"]')].some((node) => !node.hasAttribute('data-zero-one-header-navigation'))
  if (nativePanel) {
    overlay?.remove()
    return
  }
  if (overlay || adminSettingsRequest) return
  const cardBody = findSiteSettingsBody()
  if (!(cardBody instanceof HTMLElement)) return
  const revision = ++adminSettingsRevision
  const controller = new AbortController()
  adminSettingsController = controller
  const request = fetch(ADMIN_SETTINGS_API, {
    credentials: 'same-origin',
    headers: apiHeaders(),
    signal: controller.signal,
  })
    .then(readApiResponse)
    .then((settings) => {
      if (
        revision === adminSettingsRevision &&
        identity === (window.__ZERO_ONE_ADMIN_NAVIGATION__?.identity() || '') &&
        cardBody.isConnected
      ) {
        buildAdminPanel(cardBody, settings)
      }
    })
    .catch(() => {})
    .finally(() => {
      if (adminSettingsRequest === request) {
        adminSettingsRequest = null
        adminSettingsController = null
      }
      window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
    })
  adminSettingsRequest = request
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('header-navigation-settings', ensureAdminSettings)
