// Community QR adapter for the approved recovered Console snapshot.
//
// The source Console owns this feature going forward. This adapter keeps the
// currently deployed snapshot functional until a newly approved UI snapshot
// replaces it, and deliberately yields whenever native UI is present.
const ADMIN_SETTINGS_PATH = '/admin/settings'
const ADMIN_SETTINGS_API = '/api/v1/admin/settings'
const COMMUNITY_QR_IMAGE_URL = '/api/v1/settings/community-qr'
const MAX_IMAGE_BYTES = 300 * 1024
const SUPPORTED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp'])
const DEFAULT_COMMUNITY_TITLE = '交流群'
const DEFAULT_COMMUNITY_DESCRIPTION = '扫码加入交流群获取支持'
const communityConfig = window.__APP_CONFIG__ || {}

let communityEnabled = communityConfig.community_qr_enabled === true
let communityTitle = normalizedCopy(communityConfig.community_qr_title, DEFAULT_COMMUNITY_TITLE)
let communityDescription = normalizedCopy(
  communityConfig.community_qr_description,
  DEFAULT_COMMUNITY_DESCRIPTION,
)
let openDialog = null

function normalizedCopy(value, fallback) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
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

function isNativeElement(testId, overlayMarker) {
  return [...document.querySelectorAll(`[data-testid="${testId}"]`)].some(
    (element) => element.getAttribute('data-zero-one-community-qr') !== overlayMarker,
  )
}

function createCommunityIcon() {
  const svg = createElement('svg', {
    'aria-hidden': 'true',
    class: 'zero-one-community-qr-icon',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    'stroke-width': '1.7',
  })
  const people = createElement('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M18 18.75a6 6 0 00-12 0m9-10.5a3 3 0 11-6 0 3 3 0 016 0zm4.5 9.75a4.5 4.5 0 00-3.2-4.3m.95-7.45a2.25 2.25 0 010 4.5',
  })
  svg.append(people)
  return svg
}

function closeCommunityDialog() {
  if (!openDialog) return
  const {
    root,
    trigger,
    previousBodyOverflow,
    onKeyDown,
    imageAbortController,
    imageObjectUrl,
  } = openDialog
  openDialog = null
  imageAbortController.abort()
  if (imageObjectUrl) URL.revokeObjectURL(imageObjectUrl)
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = previousBodyOverflow
  root.remove()
  if (trigger?.isConnected) trigger.focus()
  trigger?.setAttribute('aria-expanded', 'false')
}

function openCommunityDialog(trigger) {
  if (openDialog) return

  const previousBodyOverflow = document.body.style.overflow
  const titleId = 'zero-one-community-qr-title'
  const descriptionId = 'zero-one-community-qr-description'
  const root = createElement('div', {
    class: 'zero-one-community-qr-backdrop',
    'data-testid': 'community-qr-dialog',
    'data-zero-one-community-qr': 'dialog',
  })
  const dialog = createElement('section', {
    class: 'zero-one-community-qr-dialog',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': titleId,
    'aria-describedby': descriptionId,
  })
  const header = createElement('header', { class: 'zero-one-community-qr-dialog-header' })
  const heading = createElement('div')
  heading.append(
    createElement('h2', { id: titleId }, communityTitle),
    createElement('p', { id: descriptionId }, communityDescription),
  )
  const closeButton = createElement('button', {
    class: 'zero-one-community-qr-close',
    type: 'button',
    'aria-label': '关闭交流群二维码',
    'data-testid': 'community-qr-dialog-close',
  }, '×')
  closeButton.addEventListener('click', closeCommunityDialog)
  header.append(heading, closeButton)

  const imageShell = createElement('div', { class: 'zero-one-community-qr-image-shell' })
  const image = createElement('img', {
    alt: '交流群二维码',
    'data-testid': 'community-qr-image',
    hidden: '',
  })
  const imageStatus = createElement(
    'p',
    { class: 'zero-one-community-qr-image-error', role: 'status', 'aria-live': 'polite' },
    '正在安全加载二维码…',
  )
  let dialogState = null
  image.addEventListener('error', () => {
    if (openDialog !== dialogState) return
    if (dialogState.imageObjectUrl) {
      URL.revokeObjectURL(dialogState.imageObjectUrl)
      dialogState.imageObjectUrl = ''
    }
    image.hidden = true
    imageStatus.textContent = '二维码暂时无法加载，请稍后重试。'
    imageStatus.setAttribute('role', 'alert')
    imageStatus.hidden = false
  })
  imageShell.append(image, imageStatus)
  dialog.append(header, imageShell)
  root.append(dialog)

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeCommunityDialog()
      return
    }
    if (event.key === 'Tab') {
      event.preventDefault()
      closeButton.focus()
    }
  }
  root.addEventListener('click', (event) => {
    if (event.target === root) closeCommunityDialog()
  })
  document.addEventListener('keydown', onKeyDown)
  document.body.append(root)
  document.body.style.overflow = 'hidden'
  trigger.setAttribute('aria-expanded', 'true')
  const imageAbortController = new AbortController()
  dialogState = {
    root,
    trigger,
    previousBodyOverflow,
    onKeyDown,
    imageAbortController,
    imageObjectUrl: '',
  }
  openDialog = dialogState
  void loadAuthenticatedCommunityQrImage(dialogState, image, imageStatus)
  closeButton.focus()
}

async function loadAuthenticatedCommunityQrImage(dialogState, image, imageStatus) {
  try {
    const headers = apiHeaders(false, false)
    headers.Accept = 'image/png, image/jpeg, image/webp'
    const response = await fetch(COMMUNITY_QR_IMAGE_URL, {
      credentials: 'same-origin',
      headers,
      signal: dialogState.imageAbortController.signal,
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const contentType = (response.headers.get('Content-Type') || '')
      .toLowerCase()
      .split(';', 1)[0]
    if (!SUPPORTED_IMAGE_TYPES.has(contentType)) {
      throw new Error('Unsupported community QR image response')
    }
    const imageBlob = await response.blob()
    if (imageBlob.size === 0) throw new Error('Empty community QR image response')
    if (openDialog !== dialogState) return

    const objectUrl = URL.createObjectURL(imageBlob)
    if (openDialog !== dialogState) {
      URL.revokeObjectURL(objectUrl)
      return
    }
    dialogState.imageObjectUrl = objectUrl
    image.src = objectUrl
    image.hidden = false
    imageStatus.hidden = true
  } catch {
    if (openDialog !== dialogState || dialogState.imageAbortController.signal.aborted) return
    image.hidden = true
    imageStatus.textContent = '二维码暂时无法加载，请稍后重试。'
    imageStatus.setAttribute('role', 'alert')
    imageStatus.hidden = false
  }
}

function removeOverlayButton() {
  document
    .querySelector('[data-zero-one-community-qr="button"]')
    ?.remove()
  closeCommunityDialog()
}

function ensureCommunityButton() {
  if (!communityEnabled || !readAuthenticatedUser()) {
    removeOverlayButton()
    return
  }
  if (isNativeElement('community-qr-button', 'button')) {
    removeOverlayButton()
    return
  }
  const existingButton = document.querySelector('[data-zero-one-community-qr="button"]')
  if (existingButton instanceof HTMLButtonElement) {
    const accessibleName = `打开${communityTitle}二维码`
    if (existingButton.getAttribute('aria-label') !== accessibleName) {
      existingButton.setAttribute('aria-label', accessibleName)
    }
    const label = existingButton.querySelector('span')
    if (label && label.textContent !== communityTitle) label.textContent = communityTitle
    return
  }

  const header = document.querySelector('header.app-header-surface')
  if (!(header instanceof HTMLElement)) return
  const modelPlaza = header.querySelector('a[href^="/model-plaza"]')
  const actionRow = modelPlaza?.parentElement || header.querySelector(':scope > div > div:last-child')
  if (!(actionRow instanceof HTMLElement)) return

  const button = createElement('button', {
    class: 'zero-one-community-qr-trigger',
    type: 'button',
    'aria-label': `打开${communityTitle}二维码`,
    'aria-haspopup': 'dialog',
    'aria-expanded': 'false',
    'data-testid': 'community-qr-button',
    'data-zero-one-community-qr': 'button',
  })
  button.append(createCommunityIcon(), createElement('span', {}, communityTitle))
  button.addEventListener('click', () => openCommunityDialog(button))

  if (modelPlaza) modelPlaza.after(button)
  else actionRow.prepend(button)
}

function apiHeaders(includeContentType = false, includeAdminMarker = true) {
  const headers = {
    Accept: 'application/json',
    'Accept-Language': localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN',
  }
  if (includeAdminMarker) Object.assign(headers, { 'X-Admin-UI-Request': '1' })
  const token = localStorage.getItem('auth_token')
  if (token) headers.Authorization = `Bearer ${token}`
  if (includeContentType) headers['Content-Type'] = 'application/json'
  return headers
}

async function readApiResponse(response) {
  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(payload?.message || `HTTP ${response.status}`)
  }
  if (payload && typeof payload === 'object' && 'code' in payload) {
    if (payload.code !== 0) throw new Error(payload.message || '请求失败')
    return payload.data
  }
  return payload
}

function supportedDataImage(value) {
  return typeof value === 'string' && /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value)
}

function createToggle(initialValue) {
  const label = createElement('label', { class: 'zero-one-community-qr-toggle' })
  const input = createElement('input', {
    type: 'checkbox',
    role: 'switch',
    'aria-label': '在顶部导航显示交流群入口',
    'data-testid': 'community-qr-toggle',
  })
  input.checked = initialValue
  input.setAttribute('aria-checked', String(initialValue))
  input.addEventListener('change', () => input.setAttribute('aria-checked', String(input.checked)))
  label.append(input, createElement('span', { 'aria-hidden': 'true' }))
  return { label, input }
}

function buildAdminPanel(cardBody) {
  const panel = createElement('section', {
    class: 'zero-one-community-qr-settings',
    'data-testid': 'community-qr-settings',
    'data-zero-one-community-qr': 'settings',
  })
  const header = createElement('div', { class: 'zero-one-community-qr-settings-header' })
  const heading = createElement('div')
  heading.append(
    createElement('h3', {}, '顶部交流群入口'),
    createElement('p', {}, '在控制台顶部展示交流群按钮，点击后打开二维码。'),
  )
  const toggle = createToggle(false)
  header.append(heading, toggle.label)

  const copyFields = createElement('div', { class: 'zero-one-community-qr-copy-fields' })
  const titleField = createElement('label', { class: 'zero-one-community-qr-copy-field' })
  titleField.append(createElement('span', {}, '顶部按钮及弹窗标题'))
  const titleInput = createElement('input', {
    type: 'text',
    maxlength: '80',
    placeholder: DEFAULT_COMMUNITY_TITLE,
    'data-testid': 'community-qr-title-input',
  })
  titleField.append(titleInput)
  const descriptionField = createElement('label', { class: 'zero-one-community-qr-copy-field' })
  descriptionField.append(createElement('span', {}, '弹窗副标题'))
  const descriptionInput = createElement('input', {
    type: 'text',
    maxlength: '240',
    placeholder: DEFAULT_COMMUNITY_DESCRIPTION,
    'data-testid': 'community-qr-description-input',
  })
  descriptionField.append(descriptionInput)
  copyFields.append(titleField, descriptionField)

  const uploadRow = createElement('div', { class: 'zero-one-community-qr-upload-row' })
  const preview = createElement('div', {
    class: 'zero-one-community-qr-preview',
    'data-testid': 'community-qr-preview',
  })
  const previewPlaceholder = createElement('span', {}, '尚未上传')
  const previewImage = createElement('img', { alt: '交流群二维码预览', hidden: '' })
  preview.append(previewPlaceholder, previewImage)

  const controls = createElement('div', { class: 'zero-one-community-qr-upload-controls' })
  const uploadLabel = createElement('label', { class: 'zero-one-community-qr-upload' }, '选择二维码')
  const fileInput = createElement('input', {
    type: 'file',
    accept: '.png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp',
    'data-testid': 'community-qr-file-input',
  })
  uploadLabel.append(fileInput)
  const removeButton = createElement('button', {
    class: 'zero-one-community-qr-remove',
    type: 'button',
    'data-testid': 'community-qr-remove',
  }, '移除')
  controls.append(
    createElement('p', {}, 'PNG、JPEG 或 WebP，最大 300 KiB。'),
    uploadLabel,
    removeButton,
  )
  uploadRow.append(preview, controls)

  const footer = createElement('div', { class: 'zero-one-community-qr-settings-footer' })
  const status = createElement('p', {
    class: 'zero-one-community-qr-status',
    role: 'status',
    'aria-live': 'polite',
    'data-testid': 'community-qr-status',
  })
  const saveButton = createElement('button', {
    class: 'zero-one-community-qr-save',
    type: 'button',
    'data-testid': 'community-qr-save',
  }, '保存交流群入口')
  footer.append(status, saveButton)
  panel.append(header, copyFields, uploadRow, footer)

  const landingNotice = cardBody.querySelector('[data-testid="landing-notice-settings"]')
  if (landingNotice) landingNotice.after(panel)
  else cardBody.prepend(panel)

  let imageValue = ''
  let saving = false

  function setStatus(message, tone = '') {
    status.textContent = message
    status.dataset.tone = tone
  }

  function renderPreview() {
    const hasImage = supportedDataImage(imageValue)
    previewImage.hidden = !hasImage
    previewPlaceholder.hidden = hasImage
    removeButton.disabled = !hasImage
    if (hasImage) previewImage.src = imageValue
    else previewImage.removeAttribute('src')
  }

  function applySettings(settings) {
    toggle.input.checked = settings?.community_qr_enabled === true
    toggle.input.setAttribute('aria-checked', String(toggle.input.checked))
    imageValue = supportedDataImage(settings?.community_qr_image)
      ? settings.community_qr_image
      : ''
    titleInput.value = normalizedCopy(settings?.community_qr_title, DEFAULT_COMMUNITY_TITLE)
    descriptionInput.value = normalizedCopy(
      settings?.community_qr_description,
      DEFAULT_COMMUNITY_DESCRIPTION,
    )
    renderPreview()
  }

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0]
    if (!file) return
    if (!SUPPORTED_IMAGE_TYPES.has(file.type)) {
      fileInput.value = ''
      setStatus('请选择 PNG、JPEG 或 WebP 图片。', 'error')
      return
    }
    if (file.size > MAX_IMAGE_BYTES) {
      fileInput.value = ''
      setStatus('图片不能超过 300 KiB。', 'error')
      return
    }
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (!supportedDataImage(reader.result)) {
        setStatus('图片读取失败，请重新选择。', 'error')
        return
      }
      imageValue = reader.result
      renderPreview()
      setStatus('二维码已导入，请保存设置。')
    })
    reader.addEventListener('error', () => setStatus('图片读取失败，请重新选择。', 'error'))
    reader.readAsDataURL(file)
  })

  removeButton.addEventListener('click', () => {
    imageValue = ''
    fileInput.value = ''
    toggle.input.checked = false
    toggle.input.setAttribute('aria-checked', 'false')
    renderPreview()
    setStatus('二维码已移除，请保存设置。')
  })

  saveButton.addEventListener('click', async () => {
    if (saving) return
    if (toggle.input.checked && !supportedDataImage(imageValue)) {
      setStatus('启用顶部入口前，请先导入二维码。', 'error')
      return
    }
    saving = true
    saveButton.disabled = true
    setStatus('正在保存…')
    const submitted = {
      community_qr_enabled: toggle.input.checked,
      community_qr_image: imageValue,
      community_qr_title: normalizedCopy(titleInput.value, DEFAULT_COMMUNITY_TITLE),
      community_qr_description: normalizedCopy(
        descriptionInput.value,
        DEFAULT_COMMUNITY_DESCRIPTION,
      ),
    }
    try {
      await fetch(ADMIN_SETTINGS_API, {
        method: 'PUT',
        credentials: 'same-origin',
        headers: apiHeaders(true),
        body: JSON.stringify(submitted),
      }).then(readApiResponse)
      communityEnabled = submitted.community_qr_enabled
      communityTitle = submitted.community_qr_title
      communityDescription = submitted.community_qr_description
      window.__APP_CONFIG__ = {
        ...(window.__APP_CONFIG__ || {}),
        community_qr_enabled: communityEnabled,
        community_qr_title: communityTitle,
        community_qr_description: communityDescription,
      }
      setStatus('交流群入口已保存。', 'success')
      scheduleScan()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '保存失败，请稍后重试。', 'error')
    } finally {
      saving = false
      saveButton.disabled = false
    }
  })

  saveButton.disabled = true
  setStatus('正在读取设置…')
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
      setStatus(error instanceof Error ? error.message : '读取设置失败。', 'error')
    })
}

function findSiteSettingsBody() {
  const headings = document.querySelectorAll('h1, h2, h3')
  const siteHeading = [...headings].find((heading) => {
    const text = heading.textContent?.trim().toLocaleLowerCase()
    return text === '站点设置' || text === 'site settings'
  })
  const card = siteHeading?.closest('.card')
  if (!(card instanceof HTMLElement)) return null
  return card.querySelector('.space-y-6.p-6') || card.lastElementChild
}

function ensureAdminSettings() {
  const overlayPanel = document.querySelector('[data-zero-one-community-qr="settings"]')
  if (window.location.pathname !== ADMIN_SETTINGS_PATH || readAuthenticatedUser()?.role !== 'admin') {
    overlayPanel?.remove()
    return
  }
  if (isNativeElement('community-qr-settings', 'settings')) {
    overlayPanel?.remove()
    return
  }
  if (overlayPanel) return
  const cardBody = findSiteSettingsBody()
  if (cardBody instanceof HTMLElement) buildAdminPanel(cardBody)
}

function scanCommunityQr() {
  ensureCommunityButton()
  ensureAdminSettings()
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('community-qr', scanCommunityQr)
