// Affiliate administration compatibility layer for the approved recovered Console.
//
// The recovered snapshot predates the standalone affiliate workspace. Keep this
// adapter narrow: it changes only the affiliate navigation/settings surface and
// yields completely once a future native snapshot exposes the workspace marker.

const API_PREFIX = '/api/v1'
const AFFILIATE_PATH_PREFIX = '/admin/affiliates'
const AFFILIATE_SETTING_KEYS = [
  'affiliate_enabled',
  'affiliate_rebate_rate',
  'affiliate_rebate_freeze_hours',
  'affiliate_rebate_duration_days',
  'affiliate_rebate_per_invitee_cap',
  'affiliate_admin_recharge_enabled',
]

const workspaceState = {
  settings: null,
  settingsDraft: null,
  settingsLoading: false,
  settingsSaving: false,
  customUsers: [],
  customUsersLoading: false,
  customUsersPage: 1,
  customUsersPageSize: 20,
  customUsersSearch: '',
  customUsersTotal: 0,
  selectedCustomUsers: new Set(),
  customers: [],
  customersLoaded: false,
  customersLoading: false,
  customersPage: 1,
  customersPageSize: 20,
  customersSearch: '',
  customersTotal: 0,
  customersView: '',
  customerDetail: null,
  customerDetailUserId: null,
  customerDetailError: '',
  customerDetailLoading: false,
  customerInvitesPage: 1,
  customerInvitesPageSize: 20,
}

let activeDialog = null
let customUserSearchTimer = 0
let customerSearchTimer = 0
let customerListRequestVersion = 0
let customerDetailRequestVersion = 0

function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)
  for (const [name, value] of Object.entries(attributes)) {
    if (value === undefined || value === null || value === false) continue
    if (name === 'class') element.className = String(value)
    else if (name === 'dataset') Object.assign(element.dataset, value)
    else element.setAttribute(name, value === true ? '' : String(value))
  }
  if (text) element.textContent = text
  return element
}

function bindInternalLink(link) {
  if (typeof window.__ZERO_ONE_BIND_INTERNAL_LINK__ === 'function') {
    window.__ZERO_ONE_BIND_INTERNAL_LINK__(link)
  }
  return link
}

function readAuthenticatedUser() {
  try {
    return JSON.parse(localStorage.getItem('auth_user') || 'null')
  } catch {
    return null
  }
}

function isAdministrator() {
  return readAuthenticatedUser()?.role === 'admin'
}

function hasNativeWorkspace() {
  return Boolean(
    document.querySelector(
      '[data-testid="affiliate-admin-workspace"]:not([data-zero-one-affiliate-admin])',
    ),
  )
}

function apiHeaders(includeContentType = false) {
  const headers = {
    Accept: 'application/json',
    'Accept-Language':
      localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN',
    'X-Admin-UI-Request': '1',
  }
  const token = localStorage.getItem('auth_token')
  if (token) headers.Authorization = `Bearer ${token}`
  if (includeContentType) headers['Content-Type'] = 'application/json'
  return headers
}

function apiError(payload, status) {
  const error = new Error(payload?.message || payload?.detail || `HTTP ${status}`)
  error.status = status
  error.code = payload?.reason || payload?.code || ''
  error.payload = payload
  return error
}

async function apiRequest(path, options = {}) {
  const method = options.method || 'GET'
  const response = await fetch(`${API_PREFIX}${path}`, {
    method,
    cache: 'no-store',
    headers: apiHeaders(options.body !== undefined),
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  })
  const payload = await response.json().catch(() => null)
  if (!response.ok) throw apiError(payload, response.status)
  if (payload && typeof payload === 'object' && 'code' in payload) {
    if (payload.code !== 0) throw apiError(payload, response.status)
    return payload.data
  }
  return payload
}

function errorMessage(error, fallback = '请求失败，请稍后重试。') {
  if (error?.code === 'AFFILIATE_ALREADY_BOUND') return '该客户已经有邀请人，为了保护既有归属，系统不允许覆盖。'
  if (error?.code === 'AFFILIATE_SELF_BINDING') return '邀请人和客户不能是同一个用户。'
  if (error?.code === 'AFFILIATE_CYCLE') return '这次补绑会形成循环邀请链，系统已拒绝。'
  if (error?.code === 'STEP_UP_TOTP_NOT_ENABLED') return '此操作需要二次验证，请先在个人中心启用 TOTP。'
  if (error?.code === 'STEP_UP_ADMIN_API_KEY_FORBIDDEN') return '请使用已登录的管理员会话操作，不支持管理 API Key。'
  return error?.message || fallback
}

// The legacy SettingsView still serializes affiliate fields in its large form.
// Strip those stale fields only from its mixed payload; standalone affiliate
// requests and a future native workspace must pass through unchanged.
function installLegacySettingsWriteGuard() {
  if (XMLHttpRequest.prototype.__zeroOneAffiliateWriteGuard) return
  XMLHttpRequest.prototype.__zeroOneAffiliateWriteGuard = true

  const nativeOpen = XMLHttpRequest.prototype.open
  const nativeSend = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.open = function open(method, url, ...rest) {
    this.__zeroOneRequestMethod = String(method || '').toUpperCase()
    this.__zeroOneRequestURL = String(url || '')
    return nativeOpen.call(this, method, url, ...rest)
  }

  XMLHttpRequest.prototype.send = function send(body) {
    if (
      !hasNativeWorkspace() &&
      this.__zeroOneRequestMethod === 'PUT' &&
      /\/api\/v1\/admin\/settings(?:\?|$)/.test(this.__zeroOneRequestURL) &&
      typeof body === 'string'
    ) {
      try {
        const parsed = JSON.parse(body)
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          const keys = Object.keys(parsed)
          const hasAffiliateField = keys.some((key) => AFFILIATE_SETTING_KEYS.includes(key))
          const hasNonAffiliateField = keys.some((key) => !AFFILIATE_SETTING_KEYS.includes(key))
          if (hasAffiliateField && hasNonAffiliateField) {
            for (const key of AFFILIATE_SETTING_KEYS) delete parsed[key]
            body = JSON.stringify(parsed)
          }
        }
      } catch {
        // Leave non-JSON bodies untouched.
      }
    }
    return nativeSend.call(this, body)
  }
}

function createAffiliateIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '1.5')
  svg.setAttribute('class', 'h-5 w-5 flex-shrink-0')
  svg.setAttribute('aria-hidden', 'true')
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-linecap', 'round')
  path.setAttribute('stroke-linejoin', 'round')
  path.setAttribute('d', 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z')
  svg.append(path)
  return svg
}

function createStandaloneNavLink(collapsed) {
  const link = createElement('a', {
    href: '/admin/affiliates/invites',
    class: `sidebar-link mb-1${collapsed ? ' sidebar-link-collapsed' : ''}`,
    'aria-label': '邀请返利',
    'data-testid': 'admin-affiliate-nav',
    'data-zero-one-affiliate-admin': 'nav',
    'data-navigation-path': AFFILIATE_PATH_PREFIX,
  })
  link.append(
    createAffiliateIcon(),
    createElement(
      'span',
      {
        class: `sidebar-label${collapsed ? ' sidebar-label-collapsed' : ''}`,
        'aria-hidden': collapsed ? 'true' : 'false',
      },
      '邀请返利',
    ),
  )
  if (collapsed) link.title = '邀请返利'
  return bindInternalLink(link)
}

function hideLegacyAffiliateGroup(section) {
  const legacyLabels = new Set(['邀请返利', 'Affiliate Rebates'])
  const group = [...section.querySelectorAll('button')].find((candidate) => {
    if (legacyLabels.has(candidate.getAttribute('aria-label') || '')) return true
    const submenu = candidate.nextElementSibling
    return submenu instanceof HTMLElement &&
      Boolean(submenu.querySelector('a[href^="/admin/affiliates/"]'))
  })
  if (!(group instanceof HTMLButtonElement)) return null
  group.dataset.zeroOneAffiliateLegacyGroup = 'true'
  group.classList.add('zero-one-affiliate-legacy-hidden')
  group.hidden = true

  const submenu = group.nextElementSibling
  if (
    submenu instanceof HTMLElement &&
    submenu.querySelector('a[href^="/admin/affiliates/"]')
  ) {
    submenu.dataset.zeroOneAffiliateLegacySubmenu = 'true'
    submenu.classList.add('zero-one-affiliate-legacy-hidden')
    submenu.hidden = true
  }
  return group
}

function reconcileStandaloneNavLink(link, collapsed) {
  link.classList.toggle('sidebar-link-collapsed', collapsed)
  if (collapsed) link.title = '邀请返利'
  else link.removeAttribute('title')

  const label = link.querySelector('.sidebar-label')
  if (!(label instanceof HTMLElement)) return
  label.classList.toggle('sidebar-label-collapsed', collapsed)
  const ariaHidden = collapsed ? 'true' : 'false'
  if (label.getAttribute('aria-hidden') !== ariaHidden) {
    label.setAttribute('aria-hidden', ariaHidden)
  }
}

function nativeTopLevelAffiliateLink(section) {
  return [...section.querySelectorAll('a[href^="/admin/affiliates"]')].find((candidate) => {
    return candidate instanceof HTMLAnchorElement &&
      !candidate.hasAttribute('data-zero-one-affiliate-admin') &&
      !candidate.closest('[data-zero-one-affiliate-legacy-submenu]')
  })
}

function hideAdministratorPersonalAffiliateLink(aside) {
  for (const link of aside.querySelectorAll('a[href="/affiliate"]')) {
    if (!(link instanceof HTMLAnchorElement)) continue
    link.dataset.zeroOneAffiliatePersonalLink = 'true'
    link.classList.add('zero-one-affiliate-legacy-hidden')
    link.hidden = true
  }
}

function ensureStandaloneNavigation() {
  const aside = document.querySelector('aside')
  const adminSection = aside?.querySelector('nav .sidebar-section')
  if (!(adminSection instanceof HTMLElement)) return
  const collapsed = aside instanceof HTMLElement && aside.classList.contains('w-[72px]')

  hideAdministratorPersonalAffiliateLink(aside)
  const legacyGroup = hideLegacyAffiliateGroup(adminSection)
  let link = adminSection.querySelector('[data-zero-one-affiliate-admin="nav"]')
  if (nativeTopLevelAffiliateLink(adminSection)) {
    link?.remove()
    return
  }
  if (!(link instanceof HTMLAnchorElement)) {
    link = createStandaloneNavLink(collapsed)
    const insertionPoint =
      legacyGroup ||
      adminSection.querySelector('a[href="/admin/usage"]') ||
      adminSection.querySelector('a[href="/admin/settings"]')
    if (insertionPoint) {
      const start = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.rowNodes(insertionPoint)[0]
      start.before(link)
    }
    else adminSection.append(link)
  }
  reconcileStandaloneNavLink(link, collapsed)

  const active = window.location.pathname.startsWith(AFFILIATE_PATH_PREFIX)
  link.classList.toggle('sidebar-link-active', active)
  if (active) link.setAttribute('aria-current', 'page')
  else link.removeAttribute('aria-current')
}

function hideLegacySettingsCard() {
  if (window.location.pathname !== '/admin/settings') return
  const main = document.querySelector('.app-shell main')
  if (!(main instanceof HTMLElement)) return
  for (const heading of main.querySelectorAll('.card h2')) {
    if (![
      '邀请返利',
      'Affiliate Rebates',
      'Affiliate (Invite Rebate)',
    ].includes(heading.textContent?.trim() || '')) continue
    const card = heading.closest('.card')
    if (card instanceof HTMLElement) {
      card.dataset.zeroOneAffiliateLegacySettings = 'true'
      card.classList.add('zero-one-affiliate-legacy-hidden')
      card.hidden = true
    }
  }
}

function affiliateSection() {
  const path = window.location.pathname
  if (path.endsWith('/rebates')) return 'customers'
  if (path.endsWith('/transfers')) return 'transfers'
  const requested = new URLSearchParams(window.location.search).get('section')
  if (requested === 'customers' || requested === 'exclusive_agents' || requested === 'settings') return requested
  return 'invites'
}

function customerUserId() {
  if (!['customers', 'exclusive_agents'].includes(affiliateSection())) return null
  const value = Number(new URLSearchParams(window.location.search).get('user_id'))
  return Number.isInteger(value) && value > 0 ? value : null
}

function workspaceViewKey() {
  return `${affiliateSection()}:${customerUserId() || ''}`
}

function tabLink(label, href, section, currentSection) {
  const active = section === currentSection
  return bindInternalLink(createElement(
    'a',
    {
      href,
      class: `zero-one-affiliate-tab${active ? ' zero-one-affiliate-tab-active' : ''}`,
      'aria-current': active ? 'page' : undefined,
      'data-testid': `affiliate-tab-${section}`,
    },
    label,
  ))
}

function createWorkspaceShell(currentSection) {
  const root = createElement('section', {
    class: 'zero-one-affiliate-workspace',
    'data-testid': 'affiliate-admin-workspace',
    'data-zero-one-affiliate-admin': 'workspace',
  })
  const header = createElement('div', { class: 'zero-one-affiliate-workspace-header' })
  const tabs = createElement('nav', {
    class: 'zero-one-affiliate-tabs',
    'aria-label': '邀请返利管理',
  })
  tabs.append(
    tabLink('邀请记录', '/admin/affiliates/invites', 'invites', currentSection),
    tabLink(
      '客户关系',
      '/admin/affiliates/invites?section=customers',
      'customers',
      currentSection,
    ),
    tabLink(
      '专属代理',
      '/admin/affiliates/invites?section=exclusive_agents',
      'exclusive_agents',
      currentSection,
    ),
    tabLink('提取记录', '/admin/affiliates/transfers', 'transfers', currentSection),
    tabLink(
      '运营设置',
      '/admin/affiliates/invites?section=settings',
      'settings',
      currentSection,
    ),
  )
  header.append(tabs)
  root.append(header)
  return root
}

function affiliatePageCopy(section, userId) {
  const english = (localStorage.getItem('sub2api_locale') || document.documentElement.lang || '')
    .toLowerCase().startsWith('en')
  if (userId) return english
    ? ['Customer Detail', 'View invited users and cumulative rebate from each customer']
    : ['客户详情', '查看该客户邀请过的用户及逐客户累计返利']
  if (section === 'customers') return english
    ? ['Customer Relationships', 'View every user and open their invitation relationship details']
    : ['客户关系', '查看全部用户并进入其邀请关系详情']
  if (section === 'exclusive_agents') return english
    ? ['Exclusive Agents', 'View agents with an exclusive rebate rate']
    : ['专属代理', '查看全部设置了专属返利比例的代理']
  if (section === 'settings') return english
    ? ['Operations Settings', 'Manage global affiliate rules and per-user overrides']
    : ['运营设置', '管理全局邀请返利规则和用户专属配置']
  if (section === 'transfers') return english
    ? ['Transfer Records', 'View affiliate quota transfers into account balance']
    : ['提取记录', '查看返利额度转入账户余额的提取流水']
  return english
    ? ['Invite Records', 'View site-wide inviter and invitee relationships']
    : ['邀请记录', '查看全站邀请关系和被邀请用户累计返利']
}

function reconcileAffiliatePageHeader(section, userId) {
  const title = document.querySelector('header.app-header-surface h1')
  if (!(title instanceof HTMLElement)) return
  const description = title.nextElementSibling
  const [titleText, descriptionText] = affiliatePageCopy(section, userId)
  if (title.textContent !== titleText) title.textContent = titleText
  if (title.dataset.zeroOneAffiliateHeader !== 'true') title.dataset.zeroOneAffiliateHeader = 'true'
  if (description instanceof HTMLElement) {
    if (description.textContent !== descriptionText) description.textContent = descriptionText
    if (description.dataset.zeroOneAffiliateHeader !== 'true') {
      description.dataset.zeroOneAffiliateHeader = 'true'
    }
  }
}

function findAffiliateTableLayout(main) {
  return main.querySelector('.table-page-layout')
}

function restoreAffiliateTable(main) {
  const layout = findAffiliateTableLayout(main)
  if (layout instanceof HTMLElement) {
    layout.hidden = false
    layout.classList.remove('zero-one-affiliate-native-records-hidden')
    layout.removeAttribute('data-zero-one-affiliate-native-records')
    layout.removeAttribute('aria-hidden')
  }
}

function ensureAffiliateWorkspace() {
  if (!window.location.pathname.startsWith(AFFILIATE_PATH_PREFIX)) return
  const main = document.querySelector('.app-shell main')
  if (!(main instanceof HTMLElement)) return

  const currentSection = affiliateSection()
  reconcileAffiliatePageHeader(currentSection, customerUserId())
  const viewKey = workspaceViewKey()
  let workspace = main.querySelector('[data-zero-one-affiliate-admin="workspace"]')
  if (!(workspace instanceof HTMLElement) || workspace.dataset.viewKey !== viewKey) {
    workspace?.remove()
    workspace = createWorkspaceShell(currentSection)
    workspace.dataset.section = currentSection
    workspace.dataset.viewKey = viewKey
    main.prepend(workspace)
  }

  if (currentSection === 'settings' || currentSection === 'customers' || currentSection === 'exclusive_agents') {
    const layout = findAffiliateTableLayout(main)
    if (layout instanceof HTMLElement) {
      layout.hidden = true
      layout.classList.add('zero-one-affiliate-native-records-hidden')
      layout.dataset.zeroOneAffiliateNativeRecords = 'true'
      layout.setAttribute('aria-hidden', 'true')
    }
    if (currentSection === 'settings') ensureSettingsPanel(workspace)
    else ensureCustomersPanel(workspace, customerUserId())
  } else {
    restoreAffiliateTable(main)
  }
}

function formatDateTime(value) {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

function formatAmount(value) {
  const amount = Number(value || 0)
  return Number.isFinite(amount) ? amount.toFixed(2) : '0.00'
}

function customerRoleLabel(role) {
  if (role === 'admin') return '管理员'
  if (role === 'user') return '普通用户'
  return role || '-'
}

function customerRow(customer) {
  const row = createElement('tr')
  const userId = Number(customer.id)
  const section = workspaceState.customersView || 'customers'
  const identity = createElement('td')
  const detailLink = bindInternalLink(createElement('a', {
    href: `/admin/affiliates/invites?section=${section}&user_id=${encodeURIComponent(userId)}`,
    class: 'zero-one-affiliate-customer-link',
    'data-testid': `affiliate-customer-${userId}`,
  }))
  detailLink.append(
    createElement('strong', {}, customer.email || `#${userId}`),
    createElement('small', {}, customer.username || '无用户名'),
  )
  identity.append(detailLink)
  row.append(
    createElement('td', { class: 'font-mono' }, String(userId)),
    identity,
    createElement('td', {}, customer.exclusive_agent ? '专属代理' : customerRoleLabel(customer.role)),
    createElement('td', { class: 'zero-one-affiliate-amount' }, `$${formatAmount(customer.agent_value)}`),
    createElement('td', {}, formatDateTime(customer.created_at)),
  )
  return row
}

function renderCustomersList(panel) {
  panel.replaceChildren()
  const card = createElement('section', {
    class: 'card zero-one-affiliate-customers',
    'data-testid': 'affiliate-customers-list',
  })
  const heading = createElement('div', { class: 'zero-one-affiliate-card-heading' })
  const copy = createElement('div')
  const exclusiveOnly = workspaceState.customersView === 'exclusive_agents'
  copy.append(
    createElement('h2', { class: 'text-lg font-semibold text-gray-900 dark:text-white' }, exclusiveOnly ? '专属代理' : '客户关系'),
    createElement('p', { class: 'mt-1 text-sm text-gray-500 dark:text-gray-400' }, exclusiveOnly
      ? '查看全部设置了专属返利比例的代理。'
      : '查看全部客户，以及每位客户建立的邀请关系和累计返利。'),
  )
  heading.append(copy)

  const toolbar = createElement('div', { class: 'zero-one-affiliate-custom-toolbar' })
  const search = createElement('input', {
    type: 'search',
    class: 'input',
    placeholder: '搜索邮箱或用户名',
    'aria-label': exclusiveOnly ? '搜索专属代理' : '搜索全部客户',
    'data-testid': 'affiliate-customers-search',
  })
  search.value = workspaceState.customersSearch
  search.addEventListener('input', () => {
    workspaceState.customersSearch = search.value.trim()
    window.clearTimeout(customerSearchTimer)
    customerSearchTimer = window.setTimeout(() => {
      workspaceState.customersPage = 1
      workspaceState.customersLoaded = false
      const currentPanel = document.querySelector('[data-zero-one-affiliate-customers-panel]')
      if (currentPanel instanceof HTMLElement) void loadCustomers(currentPanel)
    }, 300)
  })
  toolbar.append(search)

  const tableWrap = createElement('div', { class: 'zero-one-affiliate-custom-table-wrap' })
  const table = createElement('table', { class: 'zero-one-affiliate-custom-table' })
  const head = createElement('thead')
  const headRow = createElement('tr')
  for (const label of ['用户 ID', '客户', '角色', '代理价值', '注册时间']) {
    headRow.append(createElement('th', {}, label))
  }
  head.append(headRow)
  const body = createElement('tbody')
  if (workspaceState.customersLoading) {
    const row = createElement('tr')
    row.append(createElement('td', { colspan: '5', class: 'zero-one-affiliate-empty' }, '正在加载全部客户…'))
    body.append(row)
  } else if (!workspaceState.customers.length) {
    const row = createElement('tr')
    row.append(createElement('td', { colspan: '5', class: 'zero-one-affiliate-empty' }, '没有匹配的客户'))
    body.append(row)
  } else {
    for (const customer of workspaceState.customers) body.append(customerRow(customer))
  }
  table.append(head, body)
  tableWrap.append(table)

  const pager = createElement('div', { class: 'zero-one-affiliate-pager' })
  const totalPages = Math.max(1, Math.ceil(workspaceState.customersTotal / workspaceState.customersPageSize))
  const previous = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '上一页')
  previous.disabled = workspaceState.customersLoading || workspaceState.customersPage <= 1
  previous.addEventListener('click', () => changeCustomersPage(workspaceState.customersPage - 1))
  const next = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '下一页')
  next.disabled = workspaceState.customersLoading || workspaceState.customersPage >= totalPages
  next.addEventListener('click', () => changeCustomersPage(workspaceState.customersPage + 1))
  const actions = createElement('div', { class: 'zero-one-affiliate-pager-actions' })
  actions.append(previous, next)
  pager.append(
    createElement('span', {}, `共 ${workspaceState.customersTotal} 人 · ${workspaceState.customersPage}/${totalPages} 页`),
    actions,
  )
  card.append(heading, toolbar, tableWrap, pager)
  panel.append(card)
}

async function loadCustomers(panel) {
  const requestVersion = ++customerListRequestVersion
  workspaceState.customersLoading = true
  renderCustomersList(panel)
  try {
    const params = new URLSearchParams({
      page: String(workspaceState.customersPage),
      page_size: String(workspaceState.customersPageSize),
      search: workspaceState.customersSearch,
      include_subscriptions: 'false',
      affiliate_view: workspaceState.customersView === 'exclusive_agents'
        ? 'exclusive_agents'
        : 'relationships',
    })
    const result = await apiRequest(`/admin/users?${params}`)
    if (requestVersion !== customerListRequestVersion) return
    workspaceState.customers = Array.isArray(result?.items) ? result.items : []
    workspaceState.customersTotal = Number(result?.total || 0)
    workspaceState.customersLoaded = true
  } catch {
    if (requestVersion !== customerListRequestVersion) return
    workspaceState.customers = []
    workspaceState.customersTotal = 0
    workspaceState.customersLoaded = true
  } finally {
    if (requestVersion !== customerListRequestVersion) return
    workspaceState.customersLoading = false
    if (panel.isConnected) renderCustomersList(panel)
  }
}

function changeCustomersPage(page) {
  workspaceState.customersPage = Math.max(1, page)
  workspaceState.customersLoaded = false
  const panel = document.querySelector('[data-zero-one-affiliate-customers-panel]')
  if (panel instanceof HTMLElement) void loadCustomers(panel)
}

function customerSummary(label, value, testId) {
  const item = createElement('div', {
    class: 'zero-one-affiliate-summary-item',
    'data-testid': testId,
  })
  item.append(createElement('span', {}, label), createElement('strong', {}, value))
  return item
}

function customerInviteRow(entry) {
  const row = createElement('tr')
  const identity = createElement('td')
  identity.append(
    createElement('strong', {}, entry.invitee_email || `#${entry.invitee_id}`),
    createElement('small', {}, entry.invitee_username || `ID ${entry.invitee_id}`),
  )
  row.append(
    identity,
    createElement('td', { class: 'font-mono' }, entry.aff_code || '-'),
    createElement('td', {}, formatDateTime(entry.created_at)),
    createElement('td', { class: 'zero-one-affiliate-amount' }, formatAmount(entry.total_rebate)),
  )
  return row
}

function renderCustomerDetail(panel, userId) {
  panel.replaceChildren()
  const detail = workspaceState.customerDetail
  if (workspaceState.customerDetailLoading || !detail || detail.user_id !== userId) {
    const message = workspaceState.customerDetailError ||
      (workspaceState.customerDetailLoading ? '正在加载客户详情…' : '客户详情暂时无法加载。')
    const state = createElement('section', {
      class: 'card zero-one-affiliate-detail-state',
      'data-testid': 'affiliate-customer-detail',
    }, message)
    const back = bindInternalLink(createElement('a', {
      href: `/admin/affiliates/invites?section=${workspaceState.customersView || 'customers'}`,
      class: 'btn btn-secondary btn-sm',
    }, '返回客户关系'))
    state.prepend(back)
    panel.append(state)
    return
  }

  const card = createElement('section', {
    class: 'card zero-one-affiliate-customer-detail',
    'data-testid': 'affiliate-customer-detail',
  })
  const heading = createElement('div', { class: 'zero-one-affiliate-card-heading' })
  const copy = createElement('div')
  const back = bindInternalLink(createElement('a', {
    href: `/admin/affiliates/invites?section=${workspaceState.customersView || 'customers'}`,
    class: 'zero-one-affiliate-back-link',
    'data-testid': 'affiliate-customer-back',
  }, '← 返回客户关系'))
  copy.append(
    back,
    createElement('h2', { class: 'text-lg font-semibold text-gray-900 dark:text-white' }, detail.email || `用户 #${userId}`),
    createElement('p', { class: 'mt-1 text-sm text-gray-500 dark:text-gray-400' }, `${detail.username || '无用户名'} · ID ${userId}`),
  )
  const bindButton = createElement('button', {
    type: 'button',
    class: 'btn btn-primary zero-one-affiliate-bind-button',
    'data-testid': 'affiliate-bind-open',
  }, '补充遗漏客户')
  bindButton.addEventListener('click', () => openBindDialog(detail))
  heading.append(copy, bindButton)

  const summary = createElement('div', { class: 'zero-one-affiliate-summary' })
  summary.append(
    customerSummary('邀请码', detail.aff_code || '-', 'affiliate-customer-code'),
    customerSummary('有效返利率', `${Number(detail.rebate_rate_percent || 0)}%`, 'affiliate-customer-rate'),
    customerSummary('邀请人数', String(detail.invited_count || 0), 'affiliate-customer-invited-count'),
    customerSummary('产生返利人数', String(detail.rebated_invitee_count || 0), 'affiliate-customer-rebated-count'),
    customerSummary('可用返利', formatAmount(detail.available_quota), 'affiliate-customer-available'),
    customerSummary('历史返利', formatAmount(detail.history_quota), 'affiliate-customer-history'),
  )

  const inviteHeading = createElement('div', { class: 'zero-one-affiliate-detail-section-heading' })
  inviteHeading.append(
    createElement('h3', {}, '邀请过的客户'),
    createElement('span', {}, `共 ${detail.invites_total || 0} 人`),
  )
  const tableWrap = createElement('div', { class: 'zero-one-affiliate-custom-table-wrap' })
  const table = createElement('table', { class: 'zero-one-affiliate-custom-table' })
  const head = createElement('thead')
  const headRow = createElement('tr')
  for (const label of ['受邀客户', '使用邀请码', '邀请时间', '累计返利']) {
    headRow.append(createElement('th', {}, label))
  }
  head.append(headRow)
  const body = createElement('tbody')
  if (!detail.invites.length) {
    const row = createElement('tr')
    row.append(createElement('td', { colspan: '4', class: 'zero-one-affiliate-empty' }, '该客户还没有邀请记录'))
    body.append(row)
  } else {
    for (const entry of detail.invites) body.append(customerInviteRow(entry))
  }
  table.append(head, body)
  tableWrap.append(table)

  const pager = createElement('div', { class: 'zero-one-affiliate-pager' })
  const totalPages = Math.max(1, Math.ceil(detail.invites_total / workspaceState.customerInvitesPageSize))
  const previous = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '上一页')
  previous.disabled = workspaceState.customerInvitesPage <= 1
  previous.addEventListener('click', () => changeCustomerInvitesPage(userId, workspaceState.customerInvitesPage - 1))
  const next = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '下一页')
  next.disabled = workspaceState.customerInvitesPage >= totalPages
  next.addEventListener('click', () => changeCustomerInvitesPage(userId, workspaceState.customerInvitesPage + 1))
  const actions = createElement('div', { class: 'zero-one-affiliate-pager-actions' })
  actions.append(previous, next)
  pager.append(createElement('span', {}, `${workspaceState.customerInvitesPage}/${totalPages} 页`), actions)

  card.append(heading, summary, inviteHeading, tableWrap, pager)
  panel.append(card)
}

async function loadCustomerDetail(panel, userId) {
  const requestVersion = ++customerDetailRequestVersion
  workspaceState.customerDetailLoading = true
  workspaceState.customerDetailUserId = userId
  workspaceState.customerDetailError = ''
  workspaceState.customerDetail = null
  renderCustomerDetail(panel, userId)
  try {
    const params = new URLSearchParams({
      page: String(workspaceState.customerInvitesPage),
      page_size: String(workspaceState.customerInvitesPageSize),
      search: '',
      inviter_id: String(userId),
      sort_by: 'created_at',
      sort_order: 'desc',
    })
    const [overview, invites] = await Promise.all([
      apiRequest(`/admin/affiliates/users/${userId}/overview`),
      apiRequest(`/admin/affiliates/invites?${params}`),
    ])
    if (requestVersion !== customerDetailRequestVersion) return
    workspaceState.customerDetail = {
      ...overview,
      user_id: Number(overview?.user_id || userId),
      invites: Array.isArray(invites?.items) ? invites.items : [],
      invites_total: Number(invites?.total || 0),
    }
  } catch (error) {
    if (requestVersion !== customerDetailRequestVersion) return
    workspaceState.customerDetailError = errorMessage(error, '客户详情暂时无法加载。')
  } finally {
    if (requestVersion !== customerDetailRequestVersion) return
    workspaceState.customerDetailLoading = false
    if (panel.isConnected) renderCustomerDetail(panel, userId)
  }
}

function changeCustomerInvitesPage(userId, page) {
  workspaceState.customerInvitesPage = Math.max(1, page)
  const panel = document.querySelector('[data-zero-one-affiliate-customers-panel]')
  if (panel instanceof HTMLElement) void loadCustomerDetail(panel, userId)
}

function ensureCustomersPanel(workspace, userId) {
  const requestedView = affiliateSection() === 'exclusive_agents' ? 'exclusive_agents' : 'customers'
  if (workspaceState.customersView !== requestedView) {
    workspaceState.customersView = requestedView
    workspaceState.customers = []
    workspaceState.customersLoaded = false
    workspaceState.customersPage = 1
    workspaceState.customersTotal = 0
  }
  let panel = workspace.querySelector('[data-zero-one-affiliate-customers-panel]')
  if (!(panel instanceof HTMLElement)) {
    panel = createElement('div', {
      class: 'zero-one-affiliate-customers-panel',
      'data-zero-one-affiliate-customers-panel': 'true',
    })
    workspace.append(panel)
  }
  if (userId) {
    if (workspaceState.customerDetailUserId !== userId) {
      workspaceState.customerInvitesPage = 1
      workspaceState.customerDetail = null
      workspaceState.customerDetailError = ''
    }
    if (
      workspaceState.customerDetailUserId !== userId ||
      (!workspaceState.customerDetail && !workspaceState.customerDetailLoading && !workspaceState.customerDetailError)
    ) {
      void loadCustomerDetail(panel, userId)
    } else if (!panel.childElementCount) {
      renderCustomerDetail(panel, userId)
    }
    return
  }
  if (!workspaceState.customersLoaded && !workspaceState.customersLoading) void loadCustomers(panel)
  else if (!panel.childElementCount) renderCustomersList(panel)
}

function fieldRow(label, hint, control) {
  const row = createElement('div', { class: 'zero-one-affiliate-field-row' })
  const copy = createElement('div', { class: 'zero-one-affiliate-field-copy' })
  copy.append(
    createElement('label', { class: 'text-sm font-medium text-gray-700 dark:text-gray-300' }, label),
    createElement('p', { class: 'mt-0.5 text-xs text-gray-500 dark:text-gray-400' }, hint),
  )
  row.append(copy, control)
  return row
}

function checkboxControl(testId) {
  const input = createElement('input', {
    type: 'checkbox',
    class: 'zero-one-affiliate-checkbox',
    'data-testid': testId,
  })
  return input
}

function numberControl(testId, min, max, step = '1') {
  return createElement('input', {
    type: 'number',
    min,
    max,
    step,
    class: 'input zero-one-affiliate-number-input',
    'data-testid': testId,
  })
}

function settingsDraftFrom(settings) {
  return {
    affiliate_enabled: Boolean(settings.affiliate_enabled),
    affiliate_admin_recharge_enabled: Boolean(settings.affiliate_admin_recharge_enabled),
    affiliate_rebate_rate: String(settings.affiliate_rebate_rate ?? 20),
    affiliate_rebate_freeze_hours: String(settings.affiliate_rebate_freeze_hours ?? 0),
    affiliate_rebate_duration_days: String(settings.affiliate_rebate_duration_days ?? 0),
    affiliate_rebate_per_invitee_cap: String(settings.affiliate_rebate_per_invitee_cap ?? 0),
  }
}

function renderSettingsPanel(panel) {
  panel.replaceChildren()
  const settings = workspaceState.settings
  if (!settings) {
    panel.append(
      createElement(
        'div',
        { class: 'card p-8 text-center text-sm text-gray-500' },
        workspaceState.settingsLoading ? '正在加载运营设置…' : '运营设置暂时无法加载。',
      ),
    )
    return
  }
  if (!workspaceState.settingsDraft) {
    workspaceState.settingsDraft = settingsDraftFrom(settings)
  }
  const draft = workspaceState.settingsDraft

  const form = createElement('form', {
    class: 'card zero-one-affiliate-settings-card',
    'data-testid': 'affiliate-settings-form',
  })
  const heading = createElement('div', { class: 'zero-one-affiliate-card-heading' })
  heading.append(
    createElement('h2', { class: 'text-lg font-semibold text-gray-900 dark:text-white' }, '邀请返利运营设置'),
    createElement(
      'p',
      { class: 'mt-1 text-sm text-gray-500 dark:text-gray-400' },
      '统一管理邀请开关、返利规则与专属用户配置。',
    ),
  )
  const fields = createElement('div', { class: 'zero-one-affiliate-settings-fields' })
  const enabled = checkboxControl('affiliate-settings-enabled')
  enabled.checked = Boolean(draft.affiliate_enabled)
  const adminRecharge = checkboxControl('affiliate-settings-admin-recharge')
  adminRecharge.checked = Boolean(draft.affiliate_admin_recharge_enabled)
  const rate = numberControl('affiliate-settings-rate', '0', '100', '0.01')
  rate.value = draft.affiliate_rebate_rate
  const freeze = numberControl('affiliate-settings-freeze', '0', '720')
  freeze.value = draft.affiliate_rebate_freeze_hours
  const duration = numberControl('affiliate-settings-duration', '0', '3650')
  duration.value = draft.affiliate_rebate_duration_days
  const cap = numberControl('affiliate-settings-cap', '0', undefined, '0.01')
  cap.value = draft.affiliate_rebate_per_invitee_cap

  const updateDraft = () => {
    workspaceState.settingsDraft = {
      affiliate_enabled: enabled.checked,
      affiliate_admin_recharge_enabled: adminRecharge.checked,
      affiliate_rebate_rate: rate.value,
      affiliate_rebate_freeze_hours: freeze.value,
      affiliate_rebate_duration_days: duration.value,
      affiliate_rebate_per_invitee_cap: cap.value,
    }
  }
  enabled.addEventListener('change', updateDraft)
  adminRecharge.addEventListener('change', updateDraft)
  for (const control of [rate, freeze, duration, cap]) {
    control.addEventListener('input', updateDraft)
  }

  fields.append(
    fieldRow('启用邀请返利', '关闭后普通用户不再看到邀请入口，管理员入口始终保留。', enabled),
    fieldRow('管理员充值计入返利', '控制后台人工充值是否触发邀请返利。', adminRecharge),
    fieldRow('全局返利比例（%）', '未配置专属比例的邀请人使用此数值。', rate),
    fieldRow('返利冻结时长（小时）', '0 表示入账后立即可提取。', freeze),
    fieldRow('返利有效期（天）', '有效期仍从客户原返利档案创建时间起算；0 表示不限。', duration),
    fieldRow('单客户返利上限', '0 表示不限制。', cap),
  )

  const footer = createElement('div', { class: 'zero-one-affiliate-settings-footer' })
  const status = createElement('p', {
    class: 'zero-one-affiliate-status',
    'aria-live': 'polite',
    'data-testid': 'affiliate-settings-status',
  })
  const save = createElement(
    'button',
    {
      type: 'submit',
      class: 'btn btn-primary',
      'data-testid': 'affiliate-settings-save',
    },
    '保存运营设置',
  )
  footer.append(status, save)
  form.append(heading, fields, footer)
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (workspaceState.settingsSaving) return
    const values = {
      affiliate_enabled: enabled.checked,
      affiliate_admin_recharge_enabled: adminRecharge.checked,
      affiliate_rebate_rate: Number(rate.value),
      affiliate_rebate_freeze_hours: Number(freeze.value),
      affiliate_rebate_duration_days: Number(duration.value),
      affiliate_rebate_per_invitee_cap: Number(cap.value),
    }
    const invalid =
      !Number.isFinite(values.affiliate_rebate_rate) ||
      values.affiliate_rebate_rate < 0 ||
      values.affiliate_rebate_rate > 100 ||
      !Number.isInteger(values.affiliate_rebate_freeze_hours) ||
      values.affiliate_rebate_freeze_hours < 0 ||
      values.affiliate_rebate_freeze_hours > 720 ||
      !Number.isInteger(values.affiliate_rebate_duration_days) ||
      values.affiliate_rebate_duration_days < 0 ||
      values.affiliate_rebate_duration_days > 3650 ||
      !Number.isFinite(values.affiliate_rebate_per_invitee_cap) ||
      values.affiliate_rebate_per_invitee_cap < 0
    if (invalid) {
      status.textContent = '请检查返利比例、冻结时长、有效期和上限的取值。'
      status.dataset.tone = 'error'
      return
    }
    workspaceState.settingsSaving = true
    save.disabled = true
    save.textContent = '正在保存…'
    try {
      const updated = await apiRequest('/admin/settings', { method: 'PUT', body: values })
      workspaceState.settings = { ...workspaceState.settings, ...values, ...updated }
      workspaceState.settingsDraft = settingsDraftFrom(workspaceState.settings)
      enabled.checked = workspaceState.settingsDraft.affiliate_enabled
      adminRecharge.checked = workspaceState.settingsDraft.affiliate_admin_recharge_enabled
      rate.value = workspaceState.settingsDraft.affiliate_rebate_rate
      freeze.value = workspaceState.settingsDraft.affiliate_rebate_freeze_hours
      duration.value = workspaceState.settingsDraft.affiliate_rebate_duration_days
      cap.value = workspaceState.settingsDraft.affiliate_rebate_per_invitee_cap
      if (window.__APP_CONFIG__) {
        window.__APP_CONFIG__.affiliate_enabled = workspaceState.settingsDraft.affiliate_enabled
      }
      status.textContent = '邀请返利运营设置已保存。'
      status.dataset.tone = 'success'
    } catch (error) {
      status.textContent = errorMessage(error, '保存运营设置失败。')
      status.dataset.tone = 'error'
    } finally {
      workspaceState.settingsSaving = false
      save.disabled = false
      save.textContent = '保存运营设置'
    }
  })

  panel.append(form, createCustomUsersPanel())
}

async function loadAffiliateSettings(panel) {
  if (workspaceState.settingsLoading) return
  workspaceState.settingsLoading = true
  renderSettingsPanel(panel)
  try {
    workspaceState.settings = await apiRequest('/admin/settings')
  } catch {
    workspaceState.settings = null
  } finally {
    workspaceState.settingsLoading = false
    renderSettingsPanel(panel)
    void loadCustomUsers(panel)
  }
}

function ensureSettingsPanel(workspace) {
  let panel = workspace.querySelector('[data-zero-one-affiliate-settings-panel]')
  if (!(panel instanceof HTMLElement)) {
    panel = createElement('div', {
      class: 'zero-one-affiliate-settings-panel',
      'data-zero-one-affiliate-settings-panel': 'true',
      'data-testid': 'affiliate-settings-panel',
    })
    workspace.append(panel)
    renderSettingsPanel(panel)
  }
  if (!workspaceState.settings && !workspaceState.settingsLoading) {
    void loadAffiliateSettings(panel)
  }
}

function createCustomUsersPanel() {
  const card = createElement('section', {
    class: 'card zero-one-affiliate-custom-users',
    'data-testid': 'affiliate-custom-users',
  })
  const header = createElement('div', { class: 'zero-one-affiliate-card-heading' })
  const headerCopy = createElement('div')
  headerCopy.append(
    createElement('h2', { class: 'text-lg font-semibold text-gray-900 dark:text-white' }, '专属用户配置'),
    createElement('p', { class: 'mt-1 text-sm text-gray-500 dark:text-gray-400' }, '为重点邀请人配置专属邀请码或返利比例。'),
  )
  const addButton = createElement('button', {
    type: 'button',
    class: 'btn btn-primary btn-sm',
    'data-testid': 'affiliate-custom-user-add',
  }, '+ 添加专属用户')
  addButton.addEventListener('click', () => openCustomUserDialog(null))
  header.append(headerCopy, addButton)

  const toolbar = createElement('div', { class: 'zero-one-affiliate-custom-toolbar' })
  const search = createElement('input', {
    type: 'search',
    class: 'input',
    placeholder: '搜索邮箱、用户名或邀请码',
    'aria-label': '搜索专属用户',
  })
  search.value = workspaceState.customUsersSearch
  search.addEventListener('input', () => {
    workspaceState.customUsersSearch = search.value.trim()
    window.clearTimeout(customUserSearchTimer)
    customUserSearchTimer = window.setTimeout(() => {
      workspaceState.customUsersPage = 1
      const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
      if (panel instanceof HTMLElement) void loadCustomUsers(panel)
    }, 300)
  })
  const batchButton = createElement('button', {
    type: 'button',
    class: 'btn btn-secondary btn-sm',
    'data-testid': 'affiliate-custom-user-batch',
  }, `批量设置比例（${workspaceState.selectedCustomUsers.size}）`)
  batchButton.disabled = workspaceState.selectedCustomUsers.size === 0
  batchButton.addEventListener('click', openBatchRateDialog)
  toolbar.append(search, batchButton)

  const tableWrap = createElement('div', { class: 'zero-one-affiliate-custom-table-wrap' })
  const table = createElement('table', { class: 'zero-one-affiliate-custom-table' })
  const head = createElement('thead')
  const headRow = createElement('tr')
  for (const label of ['', '用户', '邀请码', '专属比例', '已邀请', '操作']) {
    headRow.append(createElement('th', {}, label))
  }
  head.append(headRow)
  const body = createElement('tbody')
  if (workspaceState.customUsersLoading) {
    const row = createElement('tr')
    const cell = createElement('td', { colspan: '6', class: 'zero-one-affiliate-empty' }, '正在加载专属用户…')
    row.append(cell)
    body.append(row)
  } else if (workspaceState.customUsers.length === 0) {
    const row = createElement('tr')
    const cell = createElement('td', { colspan: '6', class: 'zero-one-affiliate-empty' }, '暂无专属用户配置')
    row.append(cell)
    body.append(row)
  } else {
    for (const entry of workspaceState.customUsers) body.append(customUserRow(entry))
  }
  table.append(head, body)
  tableWrap.append(table)

  const pager = createElement('div', { class: 'zero-one-affiliate-pager' })
  const totalPages = Math.max(1, Math.ceil(workspaceState.customUsersTotal / workspaceState.customUsersPageSize))
  const previous = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '上一页')
  previous.disabled = workspaceState.customUsersPage <= 1
  previous.addEventListener('click', () => changeCustomUsersPage(workspaceState.customUsersPage - 1))
  const next = createElement('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '下一页')
  next.disabled = workspaceState.customUsersPage >= totalPages
  next.addEventListener('click', () => changeCustomUsersPage(workspaceState.customUsersPage + 1))
  pager.append(
    createElement('span', {}, `共 ${workspaceState.customUsersTotal} 人 · ${workspaceState.customUsersPage}/${totalPages} 页`),
    createElement('div', { class: 'zero-one-affiliate-pager-actions' }),
  )
  pager.lastElementChild.append(previous, next)
  card.append(header, toolbar, tableWrap, pager)
  return card
}

function customUserRow(entry) {
  const row = createElement('tr')
  const selectCell = createElement('td')
  const checkbox = createElement('input', { type: 'checkbox', 'aria-label': `选择 ${entry.email || entry.user_id}` })
  checkbox.checked = workspaceState.selectedCustomUsers.has(entry.user_id)
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) workspaceState.selectedCustomUsers.add(entry.user_id)
    else workspaceState.selectedCustomUsers.delete(entry.user_id)
    rerenderSettingsPanel()
  })
  selectCell.append(checkbox)
  const userCell = createElement('td')
  userCell.append(
    createElement('strong', {}, entry.email || `#${entry.user_id}`),
    createElement('small', {}, entry.username || `ID ${entry.user_id}`),
  )
  const codeCell = createElement('td', { class: 'font-mono' }, entry.aff_code || '-')
  const rateCell = createElement('td', {}, entry.aff_rebate_rate_percent == null ? '使用全局' : `${entry.aff_rebate_rate_percent}%`)
  const countCell = createElement('td', {}, String(entry.aff_count ?? 0))
  const actions = createElement('td', { class: 'zero-one-affiliate-row-actions' })
  const edit = createElement('button', { type: 'button' }, '编辑')
  edit.addEventListener('click', () => openCustomUserDialog(entry))
  const reset = createElement('button', { type: 'button', class: 'is-danger' }, '重置')
  reset.addEventListener('click', () => resetCustomUser(entry))
  actions.append(edit, reset)
  row.append(selectCell, userCell, codeCell, rateCell, countCell, actions)
  return row
}

function rerenderSettingsPanel() {
  const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
  if (panel instanceof HTMLElement) renderSettingsPanel(panel)
}

async function loadCustomUsers(panel) {
  if (workspaceState.customUsersLoading) return
  workspaceState.customUsersLoading = true
  renderSettingsPanel(panel)
  try {
    const params = new URLSearchParams({
      page: String(workspaceState.customUsersPage),
      page_size: String(workspaceState.customUsersPageSize),
      search: workspaceState.customUsersSearch,
    })
    const result = await apiRequest(`/admin/affiliates/users?${params}`)
    workspaceState.customUsers = Array.isArray(result?.items) ? result.items : []
    workspaceState.customUsersTotal = Number(result?.total || 0)
    const visible = new Set(workspaceState.customUsers.map((entry) => entry.user_id))
    workspaceState.selectedCustomUsers = new Set(
      [...workspaceState.selectedCustomUsers].filter((id) => visible.has(id)),
    )
  } catch {
    workspaceState.customUsers = []
    workspaceState.customUsersTotal = 0
  } finally {
    workspaceState.customUsersLoading = false
    renderSettingsPanel(panel)
  }
}

function changeCustomUsersPage(page) {
  workspaceState.customUsersPage = Math.max(1, page)
  const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
  if (panel instanceof HTMLElement) void loadCustomUsers(panel)
}

function closeDialog() {
  activeDialog?.remove()
  activeDialog = null
  document.body.classList.remove('zero-one-affiliate-dialog-open')
}

function dialogShell(title, testId) {
  closeDialog()
  const overlay = createElement('div', {
    class: 'zero-one-affiliate-dialog-overlay',
    role: 'presentation',
    'data-testid': testId,
  })
  const dialog = createElement('section', {
    class: 'zero-one-affiliate-dialog',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': title,
  })
  const header = createElement('header', { class: 'zero-one-affiliate-dialog-header' })
  const close = createElement('button', { type: 'button', 'aria-label': '关闭' }, '×')
  close.addEventListener('click', closeDialog)
  header.append(createElement('h2', {}, title), close)
  const content = createElement('div', { class: 'zero-one-affiliate-dialog-content' })
  const footer = createElement('footer', { class: 'zero-one-affiliate-dialog-footer' })
  dialog.append(header, content, footer)
  overlay.append(dialog)
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeDialog()
  })
  document.body.append(overlay)
  document.body.classList.add('zero-one-affiliate-dialog-open')
  activeDialog = overlay
  return { overlay, dialog, content, footer }
}

function userPicker(label, testId, onSelect) {
  const wrapper = createElement('div', { class: 'zero-one-affiliate-picker' })
  wrapper.append(createElement('label', {}, label))
  const selected = createElement('div', {
    class: 'zero-one-affiliate-selected-user',
    'data-testid': `${testId}-selected`,
  })
  selected.hidden = true
  const input = createElement('input', {
    type: 'search',
    class: 'input',
    placeholder: '输入邮箱、用户名或用户 ID 搜索',
    'data-testid': `${testId}-search`,
  })
  const results = createElement('div', {
    class: 'zero-one-affiliate-picker-results',
    'data-testid': `${testId}-results`,
  })
  let timer = 0
  let requestVersion = 0

  function clearSelection() {
    selected.hidden = true
    selected.replaceChildren()
    input.hidden = false
    results.hidden = false
    input.value = ''
    onSelect(null)
    input.focus()
  }

  function choose(user) {
    selected.replaceChildren()
    const copy = createElement('span')
    copy.append(
      createElement('strong', {}, user.email || `#${user.id}`),
      createElement('small', {}, `${user.username || '无用户名'} · ID ${user.id}`),
    )
    const clear = createElement('button', { type: 'button', 'aria-label': '更换用户' }, '×')
    clear.addEventListener('click', clearSelection)
    selected.append(copy, clear)
    selected.hidden = false
    input.hidden = true
    results.hidden = true
    onSelect(user)
  }

  input.addEventListener('input', () => {
    window.clearTimeout(timer)
    const query = input.value.trim()
    if (!query) {
      results.replaceChildren()
      return
    }
    const version = ++requestVersion
    timer = window.setTimeout(async () => {
      try {
        const users = await apiRequest(`/admin/affiliates/users/lookup?q=${encodeURIComponent(query)}`)
        if (version !== requestVersion) return
        results.replaceChildren()
        for (const user of Array.isArray(users) ? users : []) {
          const option = createElement('button', {
            type: 'button',
            'data-testid': `${testId}-option-${user.id}`,
          })
          option.append(
            createElement('strong', {}, user.email || `#${user.id}`),
            createElement('small', {}, `${user.username || '无用户名'} · ID ${user.id}`),
          )
          option.addEventListener('click', () => choose(user))
          results.append(option)
        }
        if (!results.childElementCount) {
          results.append(createElement('p', {}, '没有匹配用户'))
        }
      } catch (error) {
        results.replaceChildren(createElement('p', {}, errorMessage(error)))
      }
    }, 250)
  })
  wrapper.append(selected, input, results)
  return { wrapper, input, choose, clearSelection }
}

async function promptForStepUp() {
  return new Promise((resolve, reject) => {
    // Keep the pending binding dialog mounted below the step-up challenge. If
    // verification is cancelled or fails, the administrator's selected users
    // and the backend error remain visible instead of being discarded.
    const overlay = createElement('div', {
      class: 'zero-one-affiliate-dialog-overlay zero-one-affiliate-step-up-overlay',
      role: 'presentation',
      'data-testid': 'affiliate-step-up-dialog',
      'data-zero-one-affiliate-admin': 'step-up-dialog',
    })
    const dialog = createElement('section', {
      class: 'zero-one-affiliate-dialog',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': '二次验证',
    })
    const header = createElement('header', { class: 'zero-one-affiliate-dialog-header' })
    const content = createElement('div', { class: 'zero-one-affiliate-dialog-content' })
    const footer = createElement('footer', { class: 'zero-one-affiliate-dialog-footer' })
    header.append(createElement('h2', {}, '二次验证'))
    dialog.append(header, content, footer)
    overlay.append(dialog)
    document.body.append(overlay)

    function closeStepUp() {
      overlay.remove()
    }

    content.append(
      createElement('p', { class: 'zero-one-affiliate-dialog-note' }, '该操作会改变后续返利归属，请输入 6 位 TOTP 验证码。'),
    )
    const input = createElement('input', {
      type: 'text',
      inputmode: 'numeric',
      autocomplete: 'one-time-code',
      maxlength: '6',
      pattern: '[0-9]{6}',
      class: 'input zero-one-affiliate-otp',
      'aria-label': 'TOTP 验证码',
    })
    const status = createElement('p', { class: 'zero-one-affiliate-status', role: 'alert' })
    content.append(input, status)
    const cancel = createElement('button', { type: 'button', class: 'btn btn-secondary' }, '取消')
    cancel.addEventListener('click', () => {
      closeStepUp()
      reject(new Error('已取消二次验证'))
    })
    const verify = createElement('button', { type: 'button', class: 'btn btn-primary' }, '验证并继续')
    verify.addEventListener('click', async () => {
      const code = input.value.replace(/\D/g, '')
      if (code.length !== 6) {
        status.textContent = '请输入 6 位验证码。'
        return
      }
      verify.disabled = true
      try {
        await apiRequest('/user/totp/step-up', { method: 'POST', body: { code } })
        closeStepUp()
        resolve()
      } catch (error) {
        status.textContent = errorMessage(error, '验证失败。')
        verify.disabled = false
        input.value = ''
        input.focus()
      }
    })
    footer.append(cancel, verify)
    input.focus()
  })
}

async function runSensitive(action) {
  try {
    return await action()
  } catch (error) {
    if (error?.code !== 'STEP_UP_REQUIRED') throw error
    await promptForStepUp()
    return action()
  }
}

function openBindDialog(inviter) {
  const inviterId = Number(inviter?.user_id || inviter?.id)
  if (!Number.isInteger(inviterId) || inviterId <= 0) return
  let invitee = null
  const { content, footer } = dialogShell('补充遗漏客户', 'affiliate-bind-dialog')
  const note = createElement(
    'div',
    { class: 'zero-one-affiliate-safety-note' },
    '仅能给尚未绑定邀请人的客户补充关系；不允许覆盖、自绑或循环归属。只影响后续付款，不补发历史返利，且返利有效期仍从客户原档案创建时间起算。',
  )
  const fixedInviter = createElement('div', {
    class: 'zero-one-affiliate-selected-user zero-one-affiliate-fixed-user',
    'data-testid': 'affiliate-bind-inviter-fixed',
  })
  const fixedCopy = createElement('span')
  fixedCopy.append(
    createElement('strong', {}, inviter.email || `#${inviterId}`),
    createElement('small', {}, `${inviter.username || '无用户名'} · ID ${inviterId} · 当前邀请人（不可更改）`),
  )
  fixedInviter.append(fixedCopy)
  const status = createElement('p', {
    class: 'zero-one-affiliate-status',
    role: 'alert',
    'data-testid': 'affiliate-bind-status',
  })
  const submit = createElement(
    'button',
    {
      type: 'button',
      class: 'btn btn-primary',
      disabled: true,
      'data-testid': 'affiliate-bind-submit',
    },
    '确认补绑',
  )

  function updateSubmitState() {
    const sameUser = invitee && inviterId === Number(invitee.id)
    submit.disabled = !invitee || sameUser
    if (sameUser) {
      status.textContent = '邀请人和客户不能是同一个用户。'
      status.dataset.tone = 'error'
    } else if (status.textContent?.includes('同一个用户')) {
      status.textContent = ''
      delete status.dataset.tone
    }
  }

  const inviteePicker = userPicker('遗漏客户', 'affiliate-bind-invitee', (user) => {
    invitee = user
    updateSubmitState()
  })
  content.append(note, createElement('label', {}, '邀请人'), fixedInviter, inviteePicker.wrapper, status)
  const cancel = createElement('button', { type: 'button', class: 'btn btn-secondary' }, '取消')
  cancel.addEventListener('click', closeDialog)
  submit.addEventListener('click', async () => {
    const inviteeId = Number(invitee?.id)
    if (!Number.isInteger(inviteeId) || inviteeId <= 0 || inviterId === inviteeId) return
    submit.disabled = true
    submit.textContent = '正在补绑…'
    status.textContent = ''
    try {
      await runSensitive(() =>
        apiRequest('/admin/affiliates/invites', {
          method: 'POST',
          body: { inviter_id: inviterId, invitee_id: inviteeId },
        }),
      )
      closeDialog()
      const panel = document.querySelector('[data-zero-one-affiliate-customers-panel]')
      if (panel instanceof HTMLElement) await loadCustomerDetail(panel, inviterId)
      showTransientNotice('邀请关系已补绑，后续付款将按现有规则计算返利。', 'success')
    } catch (error) {
      status.textContent = errorMessage(error, '补绑邀请关系失败。')
      status.dataset.tone = 'error'
      submit.disabled = false
      submit.textContent = '确认补绑'
    }
  })
  footer.append(cancel, submit)
  inviteePicker.input.focus()
}

function showTransientNotice(message, tone = 'success') {
  document.querySelector('[data-zero-one-affiliate-notice]')?.remove()
  const notice = createElement('div', {
    class: 'zero-one-affiliate-toast',
    role: 'status',
    'data-tone': tone,
    'data-zero-one-affiliate-notice': 'true',
  }, message)
  document.body.append(notice)
  window.setTimeout(() => notice.remove(), 5000)
}

function openCustomUserDialog(entry) {
  let selectedUser = entry
    ? { id: entry.user_id, email: entry.email, username: entry.username }
    : null
  const { content, footer } = dialogShell(entry ? '编辑专属用户' : '添加专属用户', 'affiliate-custom-user-dialog')
  const picker = userPicker('用户', 'affiliate-custom-picker', (user) => {
    selectedUser = user
  })
  if (entry) picker.choose(selectedUser)
  const codeLabel = createElement('label', {}, '专属邀请码')
  const code = createElement('input', {
    type: 'text',
    class: 'input font-mono',
    maxlength: '32',
    placeholder: '留空表示不修改',
    'data-testid': 'affiliate-custom-code',
  })
  code.value = entry?.aff_code_custom ? entry.aff_code || '' : ''
  const rateLabel = createElement('label', {}, '专属返利比例（%）')
  const rate = createElement('input', {
    type: 'number',
    min: '0',
    max: '100',
    step: '0.01',
    class: 'input',
    placeholder: '留空使用全局比例',
    'data-testid': 'affiliate-custom-rate',
  })
  rate.value = entry?.aff_rebate_rate_percent == null ? '' : String(entry.aff_rebate_rate_percent)
  const status = createElement('p', { class: 'zero-one-affiliate-status', role: 'alert' })
  content.append(picker.wrapper, codeLabel, code, rateLabel, rate, status)
  const cancel = createElement('button', { type: 'button', class: 'btn btn-secondary' }, '取消')
  cancel.addEventListener('click', closeDialog)
  const save = createElement('button', {
    type: 'button',
    class: 'btn btn-primary',
    'data-testid': 'affiliate-custom-save',
  }, '保存')
  save.addEventListener('click', async () => {
    if (!selectedUser) {
      status.textContent = '请先选择用户。'
      return
    }
    const payload = {}
    const normalizedCode = code.value.trim().toUpperCase()
    if (normalizedCode) payload.aff_code = normalizedCode
    if (rate.value.trim()) {
      const value = Number(rate.value)
      if (!Number.isFinite(value) || value < 0 || value > 100) {
        status.textContent = '返利比例必须在 0 到 100 之间。'
        return
      }
      payload.aff_rebate_rate_percent = value
    } else if (entry?.aff_rebate_rate_percent != null) {
      payload.clear_rebate_rate = true
    }
    if (!Object.keys(payload).length) {
      status.textContent = '请至少填写一项专属配置。'
      return
    }
    save.disabled = true
    try {
      await apiRequest(`/admin/affiliates/users/${selectedUser.id}`, { method: 'PUT', body: payload })
      closeDialog()
      const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
      if (panel instanceof HTMLElement) await loadCustomUsers(panel)
      showTransientNotice('专属用户配置已保存。')
    } catch (error) {
      status.textContent = errorMessage(error)
      save.disabled = false
    }
  })
  footer.append(cancel, save)
  if (!entry) picker.input.focus()
}

async function resetCustomUser(entry) {
  if (!window.confirm(`确认重置 ${entry.email || `#${entry.user_id}`} 的专属邀请码和返利比例？`)) return
  try {
    await apiRequest(`/admin/affiliates/users/${entry.user_id}`, { method: 'DELETE' })
    const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
    if (panel instanceof HTMLElement) await loadCustomUsers(panel)
    showTransientNotice('专属用户配置已重置。')
  } catch (error) {
    showTransientNotice(errorMessage(error), 'error')
  }
}

function openBatchRateDialog() {
  if (!workspaceState.selectedCustomUsers.size) return
  const { content, footer } = dialogShell('批量设置专属比例', 'affiliate-batch-rate-dialog')
  content.append(createElement('p', { class: 'zero-one-affiliate-dialog-note' }, `已选择 ${workspaceState.selectedCustomUsers.size} 个用户。留空并提交将清除专属比例。`))
  const rate = createElement('input', {
    type: 'number',
    min: '0',
    max: '100',
    step: '0.01',
    class: 'input',
    placeholder: '使用全局比例',
    'aria-label': '批量返利比例',
  })
  const status = createElement('p', { class: 'zero-one-affiliate-status', role: 'alert' })
  content.append(rate, status)
  const cancel = createElement('button', { type: 'button', class: 'btn btn-secondary' }, '取消')
  cancel.addEventListener('click', closeDialog)
  const submit = createElement('button', { type: 'button', class: 'btn btn-primary' }, '批量保存')
  submit.addEventListener('click', async () => {
    const raw = rate.value.trim()
    const payload = { user_ids: [...workspaceState.selectedCustomUsers] }
    if (!raw) payload.clear = true
    else {
      const value = Number(raw)
      if (!Number.isFinite(value) || value < 0 || value > 100) {
        status.textContent = '返利比例必须在 0 到 100 之间。'
        return
      }
      payload.aff_rebate_rate_percent = value
    }
    submit.disabled = true
    try {
      await apiRequest('/admin/affiliates/users/batch-rate', { method: 'POST', body: payload })
      workspaceState.selectedCustomUsers.clear()
      closeDialog()
      const panel = document.querySelector('[data-zero-one-affiliate-settings-panel]')
      if (panel instanceof HTMLElement) await loadCustomUsers(panel)
      showTransientNotice('批量返利比例已保存。')
    } catch (error) {
      status.textContent = errorMessage(error)
      submit.disabled = false
    }
  })
  footer.append(cancel, submit)
  rate.focus()
}

function removeCompatibilityLayer() {
  document.querySelectorAll('[data-zero-one-affiliate-admin]').forEach((element) => element.remove())
  document.querySelectorAll('[data-zero-one-affiliate-native-records]').forEach((element) => {
    if (!(element instanceof HTMLElement)) return
    element.hidden = false
    element.classList.remove('zero-one-affiliate-native-records-hidden')
    element.removeAttribute('data-zero-one-affiliate-native-records')
    element.removeAttribute('aria-hidden')
  })
  document.querySelectorAll('[data-zero-one-affiliate-legacy-group]').forEach((element) => {
    element.hidden = false
  })
  document.querySelectorAll('[data-zero-one-affiliate-legacy-submenu]').forEach((element) => {
    element.hidden = false
  })
  document.querySelectorAll('[data-zero-one-affiliate-legacy-settings]').forEach((element) => {
    element.hidden = false
  })
  document.querySelectorAll('[data-zero-one-affiliate-personal-link]').forEach((element) => {
    element.hidden = false
    element.classList.remove('zero-one-affiliate-legacy-hidden')
    element.removeAttribute('data-zero-one-affiliate-personal-link')
  })
  document.querySelectorAll('.zero-one-affiliate-legacy-hidden').forEach((element) => {
    element.classList.remove('zero-one-affiliate-legacy-hidden')
  })
}

function scanAffiliateAdmin() {
  if (!isAdministrator() || hasNativeWorkspace()) {
    removeCompatibilityLayer()
    return
  }
  if (window.location.pathname === '/admin/affiliates/rebates') {
    const router = document.querySelector('#app')?.__vue_app__?.config?.globalProperties?.$router
    const destination = '/admin/affiliates/invites?section=customers'
    if (router && typeof router.replace === 'function') {
      void router.replace(destination)
    } else {
      window.location.replace(destination)
    }
    return
  }
  ensureStandaloneNavigation()
  hideLegacySettingsCard()
  ensureAffiliateWorkspace()
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

installLegacySettingsWriteGuard()
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('affiliate-admin', scanAffiliateAdmin)
