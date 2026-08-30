const ADMIN_SETTINGS_PATH = '/admin/settings'
const STANDALONE_SAVE_LABELS = new Set(['保存', 'Save'])
const MANAGED_CARD_ENDPOINTS = new Map([
  ['529 过载冷却', '/admin/settings/overload-cooldown'],
  ['529 Overload Cooldown', '/admin/settings/overload-cooldown'],
  ['429 默认回避', '/admin/settings/rate-limit-429-cooldown'],
  ['429 Default Cooldown', '/admin/settings/rate-limit-429-cooldown'],
  ['流超时处理', '/admin/settings/stream-timeout'],
  ['Stream Timeout Handling', '/admin/settings/stream-timeout'],
  ['请求整流器', '/admin/settings/rectifier'],
  ['Request Rectifier', '/admin/settings/rectifier'],
  ['Beta 策略', '/admin/settings/beta-policy'],
  ['Beta Policy', '/admin/settings/beta-policy'],
])
const EXPLICIT_SAVE_TARGETS = [
  ['[data-testid="panel-rate-limit-save"]', '/admin/settings/panel-rate-limit'],
  ['[data-testid="upstream-billing-probe-save"]', '/admin/accounts/upstream-billing-probe/settings'],
  ['[data-testid="ollama-cloud-usage-global-save"]', '/admin/accounts/ollama-cloud-usage/settings'],
]
const MANAGED_ENDPOINTS = new Set([
  ...MANAGED_CARD_ENDPOINTS.values(),
  ...EXPLICIT_SAVE_TARGETS.map(([, endpoint]) => endpoint),
])
const MANAGED_REQUEST_TIMEOUT_MS = 30_000
const MANAGED_REQUEST_REGISTRATION_TIMEOUT_MS = 5_000

let activeManagedRequestBatch = null

function localText(zh, en) {
  const locale = localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN'
  return locale.toLowerCase().startsWith('zh') ? zh : en
}

function endpointForURL(rawURL) {
  try {
    const path = new URL(rawURL, window.location.origin).pathname
    return [...MANAGED_ENDPOINTS].find((endpoint) => path.endsWith(endpoint)) || ''
  } catch {
    return ''
  }
}

function isMainSettingsURL(rawURL) {
  try {
    return new URL(rawURL, window.location.origin).pathname === '/api/v1/admin/settings'
  } catch {
    return false
  }
}

function managedResponseResult(request, endpoint) {
  let payload = null
  try {
    const raw = request.responseType && request.responseType !== 'text'
      ? request.response
      : request.responseText
    payload = typeof raw === 'string' ? JSON.parse(raw) : raw
  } catch {}
  const successfulStatus = request.status >= 200 && request.status < 300
  const successfulPayload = !payload || typeof payload !== 'object' || !('code' in payload) || payload.code === 0
  return {
    endpoint,
    ok: successfulStatus && successfulPayload,
    message: payload?.message || `HTTP ${request.status || 0}`,
  }
}

async function managedFetchResponseResult(response, endpoint) {
  let payload = null
  try {
    payload = await response.clone().json()
  } catch {}
  const successfulPayload = !payload || typeof payload !== 'object' || !('code' in payload) || payload.code === 0
  return {
    endpoint,
    ok: response.ok && successfulPayload,
    message: payload?.message || `HTTP ${response.status || 0}`,
  }
}

function installManagedFetchTracking() {
  if (window.__zeroOneUnifiedSaveFetchTracking === true) return
  window.__zeroOneUnifiedSaveFetchTracking = true
  const nativeFetch = window.fetch.bind(window)
  window.fetch = function trackedFetch(input, init) {
    const rawURL = input instanceof Request ? input.url : String(input)
    const method = String(init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase()
    const batch = activeManagedRequestBatch
    const endpoint = endpointForURL(rawURL)
    const request = nativeFetch(input, init)
    if (batch && method === 'PUT' && endpoint) {
      batch.requests.push({
        endpoint,
        result: request.then(
          (response) => managedFetchResponseResult(response, endpoint),
          (error) => ({
            endpoint,
            ok: false,
            message: error instanceof Error ? error.message : localText('请求失败。', 'Request failed.'),
          }),
        ),
      })
    }
    return request
  }
}

function installManagedRequestTracking() {
  const prototype = XMLHttpRequest.prototype
  if (prototype.__zeroOneUnifiedSaveTracking === true) return
  Object.defineProperty(prototype, '__zeroOneUnifiedSaveTracking', { value: true })

  const nativeOpen = prototype.open
  const nativeSend = prototype.send
  prototype.open = function open(method, url, ...rest) {
    this.__zeroOneUnifiedSaveMethod = String(method).toUpperCase()
    this.__zeroOneUnifiedSaveURL = String(url)
    return nativeOpen.call(this, method, url, ...rest)
  }
  prototype.send = function send(body) {
    const batch = activeManagedRequestBatch
    const endpoint = endpointForURL(this.__zeroOneUnifiedSaveURL)
    const isMainSettingsSave =
      this.__zeroOneUnifiedSaveMethod === 'PUT' &&
      isMainSettingsURL(this.__zeroOneUnifiedSaveURL)
    let settle
    if (batch && this.__zeroOneUnifiedSaveMethod === 'PUT' && endpoint) {
      const result = new Promise((resolve) => { settle = resolve })
      batch.requests.push({ endpoint, result })
      this.addEventListener('loadend', () => {
        settle(managedResponseResult(this, endpoint))
      }, { once: true })
    }
    if (isMainSettingsSave) {
      const form = document.querySelector('main form')
      const dirtyEntries = form instanceof HTMLFormElement
        ? standaloneSaveEntries(form).filter(({ card }) => card?.dataset.zeroOneSettingsDirty === 'true')
        : []
      const nativeLoadEnd = this.onloadend
      const nativeError = this.onerror
      if (dirtyEntries.length > 0 && typeof nativeLoadEnd === 'function') {
        this.onloadend = null
        setBridgeStatus(form)
        this.addEventListener('loadend', (event) => {
          // Network/abort/timeout handlers remain attached and already settle the
          // authenticated client for status 0. HTTP and application failures go
          // through the original loadend so step-up and validation keep working.
          if (this.status === 0) return
          const mainResult = managedResponseResult(this, '/admin/settings')
          if (!mainResult.ok) {
            nativeLoadEnd.call(this, event)
            return
          }

          void submitManagedCards(form, dirtyEntries)
            .then((result) => {
              if (result.ok) {
                nativeLoadEnd.call(this, event)
                return
              }
              setBridgeStatus(form, result.message)
              if (typeof nativeError === 'function') {
                nativeError.call(this, new ProgressEvent('error'))
              } else {
                nativeLoadEnd.call(this, event)
              }
            })
            .catch(() => {
              setBridgeStatus(
                form,
                localText('部分设置保存失败。主设置已提交，请检查错误后重试。', 'Some settings failed to save. The main settings were submitted; review the error and retry.'),
              )
              if (typeof nativeError === 'function') {
                nativeError.call(this, new ProgressEvent('error'))
              } else {
                nativeLoadEnd.call(this, event)
              }
            })
        }, { once: true })
      }
    }
    try {
      return nativeSend.call(this, body)
    } catch (error) {
      settle?.({
        endpoint,
        ok: false,
        message: error instanceof Error ? error.message : localText('请求未发出。', 'Request was not sent.'),
      })
      throw error
    }
  }
}

function standaloneSaveEntries(form) {
  const entries = new Map()
  for (const [selector, endpoint] of EXPLICIT_SAVE_TARGETS) {
    for (const button of form.querySelectorAll(selector)) {
      entries.set(button, { button, endpoint, card: button.closest('.card') })
    }
  }
  for (const card of form.querySelectorAll('.card')) {
    const title = card.querySelector('h2, h3')?.textContent?.trim() || ''
    const endpoint = MANAGED_CARD_ENDPOINTS.get(title)
    if (!endpoint) continue
    for (const button of card.querySelectorAll('button[type="button"]')) {
      if (STANDALONE_SAVE_LABELS.has(button.textContent?.trim() || '')) {
        entries.set(button, { button, endpoint, card })
      }
    }
  }
  return [...entries.values()]
}

function standaloneSaveButtons(form) {
  return standaloneSaveEntries(form).map(({ button }) => button)
}

function markManagedCardDirty(event) {
  const target = event.target
  if (!(target instanceof Element)) return
  const card = target.closest('.card')
  if (card?.querySelector('button[data-zero-one-standalone-save="true"]')) {
    card.dataset.zeroOneSettingsDirty = 'true'
  }
}

function setBridgeStatus(form, message = '') {
  let status = form.querySelector('[data-zero-one-settings-save-status]')
  if (!message) {
    status?.remove()
    return
  }
  if (!(status instanceof HTMLElement)) {
    status = document.createElement('p')
    status.setAttribute('data-zero-one-settings-save-status', 'true')
    status.setAttribute('role', 'alert')
    status.className = 'mt-2 text-right text-sm text-red-600 dark:text-red-400'
    const bottomSave = form.querySelector('button[data-zero-one-settings-save="true"]')
    bottomSave?.parentElement?.append(status)
  }
  status.textContent = message
}

function waitForManagedResults(requests) {
  let timeout
  const deadline = new Promise((resolve) => {
    timeout = window.setTimeout(() => resolve(null), MANAGED_REQUEST_TIMEOUT_MS)
  })
  return Promise.race([
    Promise.all(requests.map(({ result }) => result)),
    deadline,
  ]).finally(() => window.clearTimeout(timeout))
}

async function waitForManagedRequestRegistration(batch, expectedEndpoints) {
  const deadline = Date.now() + MANAGED_REQUEST_REGISTRATION_TIMEOUT_MS
  while (Date.now() < deadline) {
    const captured = batch.requests.map(({ endpoint }) => endpoint)
    if (expectedEndpoints.every((endpoint) => captured.includes(endpoint))) return
    await new Promise((resolve) => window.setTimeout(resolve, 10))
  }
}

async function submitManagedCards(form, entries) {
  if (entries.some(({ button }) => button.disabled)) {
    return {
      ok: false,
      message: localText('主设置已提交，但有辅助设置仍在保存，请稍后重试。', 'The main settings were submitted, but an auxiliary setting is still saving. Try again shortly.'),
    }
  }
  const expectedEndpoints = entries.map(({ endpoint }) => endpoint)
  const batch = { requests: [] }
  activeManagedRequestBatch = batch
  try {
    for (const { button } of entries) {
      button.click()
    }
    // Auth renewal and request interceptors may defer the transport beyond the
    // click microtask. Keep the batch open until every expected request has
    // registered or a bounded deadline proves that one was not issued.
    await waitForManagedRequestRegistration(batch, expectedEndpoints)
  } finally {
    if (activeManagedRequestBatch === batch) activeManagedRequestBatch = null
  }

  const capturedEndpoints = batch.requests.map(({ endpoint }) => endpoint)
  const missingEndpoint = expectedEndpoints.find((endpoint) => !capturedEndpoints.includes(endpoint))
  if (missingEndpoint) {
    return {
      ok: false,
      message: localText('主设置已提交，但有辅助设置未发出保存请求。', 'The main settings were submitted, but an auxiliary setting did not issue its save request.'),
    }
  }

  const results = await waitForManagedResults(batch.requests)
  if (!results) {
    return {
      ok: false,
      message: localText('主设置已提交，但部分辅助设置保存超时。', 'The main settings were submitted, but some auxiliary settings timed out.'),
    }
  }
  const failed = results.find((result) => !result.ok)
  if (failed) {
    return {
      ok: false,
      message: localText('主设置已提交，但部分辅助设置保存失败，请重试。', 'The main settings were submitted, but some auxiliary settings failed. Please retry.'),
    }
  }

  for (const { card } of entries) card?.removeAttribute('data-zero-one-settings-dirty')
  return { ok: true, message: '' }
}

function routeManagedEnter(form, event) {
  if (event.key !== 'Enter' || event.isComposing) return
  const target = event.target
  if (!(target instanceof HTMLInputElement)) return
  const card = target.closest('.card')
  if (!card?.querySelector('button[data-zero-one-standalone-save="true"]')) return

  event.preventDefault()
  event.stopImmediatePropagation()
  card.dataset.zeroOneSettingsDirty = 'true'
  const bottomSave = form.querySelector('button[data-zero-one-settings-save="true"]')
  if (bottomSave instanceof HTMLButtonElement && !bottomSave.disabled) {
    form.requestSubmit(bottomSave)
  }
}

function installUnifiedSubmit(form) {
  if (form.dataset.zeroOneUnifiedSettingsSubmit === 'true') return
  form.dataset.zeroOneUnifiedSettingsSubmit = 'true'
  form.addEventListener('input', markManagedCardDirty, { capture: true })
  form.addEventListener('change', markManagedCardDirty, { capture: true })
  form.addEventListener('click', markManagedCardDirty, { capture: true })
  form.addEventListener('keydown', (event) => routeManagedEnter(form, event), { capture: true })
}

function reconcileUnifiedSettingsSave() {
  if (window.location.pathname !== ADMIN_SETTINGS_PATH) return
  const form = document.querySelector('main form')
  if (!(form instanceof HTMLFormElement)) return

  installUnifiedSubmit(form)
  const bottomSave = form.querySelector('button[type="submit"]')
  if (bottomSave instanceof HTMLButtonElement) {
    bottomSave.dataset.zeroOneSettingsSave = 'true'
  }

  for (const button of standaloneSaveButtons(form)) {
    button.dataset.zeroOneStandaloneSave = 'true'
    button.hidden = true
    button.style.setProperty('display', 'none', 'important')
    const footer = button.parentElement
    if (footer?.children.length === 1) {
      footer.hidden = true
      footer.style.setProperty('display', 'none', 'important')
    }
  }
}

installManagedRequestTracking()
installManagedFetchTracking()

if (!window.__ZERO_ONE_NAVIGATION_RECONCILIATION__) {
  throw new Error('Unified settings save requires the approved navigation reconciliation module')
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register(
  'settings-unified-save',
  reconcileUnifiedSettingsSave,
)
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
