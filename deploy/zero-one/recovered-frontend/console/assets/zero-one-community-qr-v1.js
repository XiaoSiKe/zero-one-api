// Header-navigation settings adapter for the approved recovered Console.
// The legacy asset name is retained so existing immutable snapshots keep the
// same import URL. The former community QR entry is intentionally retired.
const ADMIN_SETTINGS_PATH = '/admin/settings'
const ADMIN_SETTINGS_API = '/api/v1/admin/settings'
const SETTINGS_MARKER = 'settings'
const MAX_MENU_ITEMS = 20

let adminMenuItems = []

function localText(zh, en) {
  const locale = localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN'
  return locale.toLowerCase().startsWith('zh') ? zh : en
}

function createElement(tagName, attributes = {}, text = '') {
  const element = document.createElement(tagName)
  for (const [name, value] of Object.entries(attributes)) {
    if (name === 'class') element.className = value
    else if (name === 'dataset') Object.assign(element.dataset, value)
    else element.setAttribute(name, value)
  }
  if (text) element.textContent = text
  return element
}

function readAuthenticatedUser() {
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
    if (payload.code !== 0) throw new Error(payload.message || localText('请求失败', 'Request failed'))
    return payload.data
  }
  return payload
}

function normalizeMenuItems(value) {
  if (!Array.isArray(value)) return []
  return value
    .filter((item) => item && typeof item === 'object')
    .map((item, index) => ({
      ...item,
      id: typeof item.id === 'string' ? item.id : '',
      label: typeof item.label === 'string' ? item.label : '',
      icon_svg: typeof item.icon_svg === 'string' ? item.icon_svg : '',
      url: typeof item.url === 'string' ? item.url : '',
      visibility: ['user', 'admin', 'all'].includes(item.visibility) ? item.visibility : 'all',
      placement: ['sidebar', 'header', 'both'].includes(item.placement)
        ? item.placement
        : 'sidebar',
      sort_order: Number.isFinite(Number(item.sort_order)) ? Number(item.sort_order) : index,
    }))
}

function reindexMenuItems() {
  adminMenuItems.forEach((item, index) => {
    item.sort_order = index
  })
}

function headerEntries() {
  return adminMenuItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.placement === 'header')
}

function createIconButton(label, text, testId) {
  return createElement('button', {
    type: 'button',
    class: 'zero-one-header-navigation-icon-button',
    'aria-label': label,
    title: label,
    'data-testid': testId,
  }, text)
}

function buildAdminPanel(cardBody) {
  const panel = createElement('section', {
    class: 'zero-one-header-navigation-settings',
    'data-testid': 'header-navigation-settings',
    'data-zero-one-header-navigation': SETTINGS_MARKER,
  })
  const header = createElement('div', { class: 'zero-one-header-navigation-header' })
  const heading = createElement('div')
  heading.append(
    createElement('h3', {}, localText('顶部导航入口', 'Header Navigation Entries')),
    createElement(
      'p',
      {},
      localText(
        '添加一个或多个自定义入口，按顺序显示在控制台顶部导航。',
        'Add one or more custom entries to the console header in display order.',
      ),
    ),
  )
  const addButton = createElement('button', {
    type: 'button',
    class: 'zero-one-header-navigation-add',
    'data-testid': 'header-navigation-add',
  }, localText('＋ 添加顶部入口', '+ Add Header Entry'))
  header.append(heading, addButton)

  const list = createElement('div', { class: 'zero-one-header-navigation-list' })
  const footer = createElement('div', { class: 'zero-one-header-navigation-footer' })
  const footerCopy = createElement('div')
  footerCopy.append(
    createElement(
      'p',
      { class: 'zero-one-header-navigation-hint' },
      localText(
        '这里只管理顶部专属入口；侧边栏和双位置页面仍在下方“自定义菜单页面”中管理。',
        'Header-only entries are managed here. Sidebar and dual-placement pages remain below.',
      ),
    ),
    createElement('p', {
      class: 'zero-one-header-navigation-status',
      role: 'status',
      'aria-live': 'polite',
      'data-testid': 'header-navigation-status',
    }),
  )
  const saveButton = createElement('button', {
    type: 'button',
    class: 'zero-one-header-navigation-save',
    'data-testid': 'header-navigation-save',
  }, localText('保存顶部导航', 'Save Header Navigation'))
  footer.append(footerCopy, saveButton)
  panel.append(header, list, footer)

  const landingNotice = cardBody.querySelector('[data-testid="landing-notice-settings"]')
  if (landingNotice) landingNotice.after(panel)
  else cardBody.prepend(panel)

  const status = footerCopy.querySelector('[data-testid="header-navigation-status"]')
  let saving = false

  function setStatus(message, tone = '') {
    status.textContent = message
    status.dataset.tone = tone
  }

  function moveEntry(visibleIndex, direction) {
    const entries = headerEntries()
    const targetVisibleIndex = visibleIndex + direction
    if (targetVisibleIndex < 0 || targetVisibleIndex >= entries.length) return
    const sourceIndex = entries[visibleIndex].index
    const targetIndex = entries[targetVisibleIndex].index
    const current = adminMenuItems[sourceIndex]
    adminMenuItems[sourceIndex] = adminMenuItems[targetIndex]
    adminMenuItems[targetIndex] = current
    reindexMenuItems()
    renderItems()
  }

  function renderItems() {
    list.replaceChildren()
    const entries = headerEntries()
    if (entries.length === 0) {
      list.append(createElement(
        'p',
        {
          class: 'zero-one-header-navigation-empty',
          'data-testid': 'header-navigation-empty',
        },
        localText(
          '尚未添加顶部入口。可按需添加一个或多个。',
          'No header entries yet. Add one or more as needed.',
        ),
      ))
      return
    }

    entries.forEach(({ item, index }, visibleIndex) => {
      const entry = createElement('div', { class: 'zero-one-header-navigation-entry' })
      const entryHeader = createElement('div', { class: 'zero-one-header-navigation-entry-header' })
      entryHeader.append(createElement(
        'strong',
        {},
        localText(`顶部入口 #${visibleIndex + 1}`, `Header Entry #${visibleIndex + 1}`),
      ))
      const actions = createElement('div', { class: 'zero-one-header-navigation-actions' })
      if (visibleIndex > 0) {
        const moveUp = createIconButton(
          localText('上移', 'Move up'),
          '↑',
          `header-navigation-move-up-${visibleIndex}`,
        )
        moveUp.addEventListener('click', () => moveEntry(visibleIndex, -1))
        actions.append(moveUp)
      }
      if (visibleIndex < entries.length - 1) {
        const moveDown = createIconButton(
          localText('下移', 'Move down'),
          '↓',
          `header-navigation-move-down-${visibleIndex}`,
        )
        moveDown.addEventListener('click', () => moveEntry(visibleIndex, 1))
        actions.append(moveDown)
      }
      const remove = createIconButton(
        localText('删除顶部入口', 'Remove header entry'),
        '×',
        `header-navigation-remove-${visibleIndex}`,
      )
      remove.classList.add('is-danger')
      remove.addEventListener('click', () => {
        adminMenuItems.splice(index, 1)
        reindexMenuItems()
        renderItems()
      })
      actions.append(remove)
      entryHeader.append(actions)

      const fields = createElement('div', { class: 'zero-one-header-navigation-fields' })
      const nameField = createElement('label')
      nameField.append(createElement('span', {}, localText('入口名称', 'Entry Name')))
      const nameInput = createElement('input', {
        type: 'text',
        maxlength: '50',
        placeholder: localText('如：在线充值', 'e.g. Recharge'),
        'data-testid': `header-navigation-name-${visibleIndex}`,
      })
      nameInput.value = item.label
      nameInput.addEventListener('input', () => { item.label = nameInput.value })
      nameField.append(nameInput)

      const visibilityField = createElement('label')
      visibilityField.append(createElement('span', {}, localText('可见范围', 'Visibility')))
      const visibility = createElement('select', {
        'data-testid': `header-navigation-visibility-${visibleIndex}`,
      })
      visibility.append(
        new Option(localText('普通用户和管理员都可见', 'All signed-in users'), 'all'),
        new Option(localText('仅普通用户', 'Regular users only'), 'user'),
        new Option(localText('仅管理员', 'Administrators only'), 'admin'),
      )
      visibility.value = item.visibility
      visibility.addEventListener('change', () => { item.visibility = visibility.value })
      visibilityField.append(visibility)

      const urlField = createElement('label', { class: 'zero-one-header-navigation-url-field' })
      urlField.append(createElement('span', {}, localText('跳转链接', 'Destination URL')))
      const urlInput = createElement('input', {
        type: 'url',
        placeholder: 'https://example.com',
        'data-testid': `header-navigation-url-${visibleIndex}`,
      })
      urlInput.value = item.url
      urlInput.addEventListener('input', () => { item.url = urlInput.value })
      urlField.append(urlInput)
      fields.append(nameField, visibilityField, urlField)
      entry.append(entryHeader, fields)
      list.append(entry)
    })
  }

  function applySettings(settings) {
    adminMenuItems = normalizeMenuItems(settings?.custom_menu_items)
    renderItems()
  }

  addButton.addEventListener('click', () => {
    if (adminMenuItems.length >= MAX_MENU_ITEMS) {
      setStatus(localText('自定义入口最多 20 个。', 'Custom entries are limited to 20.'), 'error')
      return
    }
    adminMenuItems.push({
      id: '',
      label: '',
      icon_svg: '',
      url: '',
      visibility: 'all',
      placement: 'header',
      sort_order: adminMenuItems.length,
    })
    renderItems()
    list.lastElementChild?.querySelector('input')?.focus()
    setStatus('')
  })

  saveButton.addEventListener('click', async () => {
    if (saving) return
    const invalid = headerEntries().find(({ item }) => !item.label.trim() || !item.url.trim())
    if (invalid) {
      setStatus(
        localText('请填写每个顶部入口的名称和跳转链接。', 'Enter a name and URL for every header entry.'),
        'error',
      )
      return
    }
    saving = true
    saveButton.disabled = true
    setStatus(localText('正在保存…', 'Saving…'))
    try {
      const settings = await fetch(ADMIN_SETTINGS_API, {
        method: 'PUT',
        credentials: 'same-origin',
        headers: apiHeaders(true),
        body: JSON.stringify({
          custom_menu_items: adminMenuItems,
          community_qr_enabled: false,
        }),
      }).then(readApiResponse)
      applySettings(settings)
      setStatus(localText('顶部导航已保存，正在刷新…', 'Header navigation saved. Refreshing…'), 'success')
      window.setTimeout(() => window.location.reload(), 350)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : localText('保存失败，请稍后重试。', 'Save failed.'), 'error')
    } finally {
      saving = false
      saveButton.disabled = false
    }
  })

  saveButton.disabled = true
  setStatus(localText('正在读取设置…', 'Loading settings…'))
  fetch(ADMIN_SETTINGS_API, {
    credentials: 'same-origin',
    headers: apiHeaders(),
  })
    .then(readApiResponse)
    .then((settings) => {
      if (!panel.isConnected) return
      applySettings(settings)
      setStatus('')
      saveButton.disabled = false
    })
    .catch((error) => {
      if (!panel.isConnected) return
      setStatus(error instanceof Error ? error.message : localText('读取设置失败。', 'Failed to load settings.'), 'error')
    })
}

function findSiteSettingsBody() {
  const heading = [...document.querySelectorAll('h1, h2, h3')].find((node) => {
    const text = node.textContent?.trim().toLowerCase()
    return text === '站点设置' || text === 'site settings'
  })
  const card = heading?.closest('.card')
  if (!(card instanceof HTMLElement)) return null
  return card.querySelector('.space-y-6.p-6') || card.lastElementChild
}

function removeRetiredCommunityUI() {
  document.querySelector('[data-zero-one-community-qr="button"]')?.remove()
  document.querySelector('[data-zero-one-community-qr="dialog"]')?.remove()
}

function ensureAdminSettings() {
  removeRetiredCommunityUI()
  const overlay = document.querySelector('[data-zero-one-header-navigation="settings"]')
  if (window.location.pathname !== ADMIN_SETTINGS_PATH || readAuthenticatedUser()?.role !== 'admin') {
    overlay?.remove()
    return
  }
  const nativePanel = [...document.querySelectorAll('[data-testid="header-navigation-settings"]')]
    .some((node) => !node.hasAttribute('data-zero-one-header-navigation'))
  if (nativePanel) {
    overlay?.remove()
    return
  }
  if (overlay) return
  const cardBody = findSiteSettingsBody()
  if (cardBody instanceof HTMLElement) buildAdminPanel(cardBody)
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register(
  'header-navigation-settings',
  ensureAdminSettings,
)
