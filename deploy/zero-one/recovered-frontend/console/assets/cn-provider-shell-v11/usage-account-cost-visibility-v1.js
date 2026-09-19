const STORAGE_KEY = 'zero-one:admin-usage:show-account-cost:v1'
const HIDDEN_ATTR = 'data-zero-one-account-cost-hidden'
const STYLE_ID = 'zero-one-account-cost-visibility-style'
let latestUsageItems = []

function isUsagePage() {
  return location.pathname === '/admin/usage'
}

function isVisible() {
  try { return localStorage.getItem(STORAGE_KEY) !== 'false' } catch { return true }
}

function setHidden(element, hidden) {
  if (!(element instanceof HTMLElement)) return
  if (hidden) element.setAttribute(HIDDEN_ATTR, 'true')
  else element.removeAttribute(HIDDEN_ATTR)
}

function normalizedText(element) {
  return (element.textContent || '').replace(/\s+/g, ' ').trim()
}

function costColumnIndexes(table) {
  const headings = [...table.querySelectorAll('thead th')].map(normalizedText)
  const isFinanceBreakdown = headings.some(text => /^(实际|Actual)$/.test(text)) &&
    headings.some(text => /^(标准|Standard)$/.test(text))
  return headings
    .map((text, index) => /^(账号成本|Account Cost|Account cost)$/.test(text) ||
      (isFinanceBreakdown && /^(成本|Cost)$/.test(text)) ? index + 1 : 0)
    .filter(Boolean)
}

function statusReason(status) {
  const english = document.documentElement.lang.toLowerCase().startsWith('en')
  if (status === 'unsupported_billing_scope') {
    return english ? 'unsupported billing scope' : '暂不支持该计费范围'
  }
  return english ? 'upstream evidence was not saved for this request' : '请求发生时未保存上游证据'
}

function decorateUnknownReasons() {
  const unknown = latestUsageItems.filter(item => item?.account_cost == null &&
    item?.account_cost_status && item.account_cost_status !== 'confirmed')
  if (!unknown.length) return
  for (const element of document.querySelectorAll('div, span, p')) {
    if (element.children.length) continue
    const text = normalizedText(element)
    if (!/^(账号成本 待核算|Account cost Pending calculation)$/.test(text)) continue
    let scope = element.closest('tr') || element
    let item = null
    for (let depth = 0; scope && depth < 12 && !item; depth += 1, scope = scope.parentElement) {
      const scopeText = normalizedText(scope)
      const matches = unknown.filter(value => {
        const account = value?.account?.name || ''
        const model = value?.model || ''
        return account && scopeText.includes(account) && (!model || scopeText.includes(model))
      })
      if (matches.length === 1) item = matches[0]
    }
    item ||= unknown.length === 1 ? unknown[0] : null
    if (!item) continue
    const prefix = text.startsWith('Account') ? 'Account cost' : '账号成本'
    element.textContent = prefix + ' —（' + statusReason(item.account_cost_status) + '）'
  }
}

function applyVisibility() {
  if (!isUsagePage()) return
  const hidden = !isVisible()
  document.querySelectorAll('[data-testid="usage-account-cost"]').forEach(element => setHidden(element, hidden))

  for (const table of document.querySelectorAll('table')) {
    for (const index of costColumnIndexes(table)) {
      table.querySelectorAll(`tr > :nth-child(${index})`).forEach(element => setHidden(element, hidden))
    }
  }

  for (const element of document.querySelectorAll('div, span, p')) {
    const text = normalizedText(element)
    if (/^(账号成本|Account cost) (?:\$|—|待核算|Pending calculation)/.test(text)) {
      setHidden(element, hidden)
    }
    if (/^(成本|Cost) \$[0-9—]/.test(text)) {
      const card = element.closest('.rounded-xl, .rounded-lg')
      if (card && /总消费|Total Cost/.test(normalizedText(card))) setHidden(element, hidden)
    }
    if (/^(请求时上游倍率|Request-time upstream rate|账号成本|Account cost)$/.test(text)) {
      const row = element.closest('div.flex.items-center.justify-between')
      if (row && !/^(上游账号|Provider Account)$/.test(text)) setHidden(row, hidden)
    }
  }

  const button = document.querySelector('[data-testid="toggle-account-cost"]')
  if (button) {
    button.setAttribute('aria-pressed', String(hidden))
    const english = document.documentElement.lang.toLowerCase().startsWith('en')
    button.textContent = hidden
      ? (english ? 'Show account cost' : '显示账号成本')
      : (english ? 'Hide account cost' : '隐藏账号成本')
  }
}

const originalOpen = XMLHttpRequest.prototype.open
const originalSend = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.open = function(method, url, ...rest) {
  this.__zeroOneUsageURL = String(url)
  return originalOpen.call(this, method, url, ...rest)
}
XMLHttpRequest.prototype.send = function(...args) {
  if (this.__zeroOneUsageURL?.includes('/api/v1/admin/usage')) {
    this.addEventListener('load', () => {
      try {
        const payload = JSON.parse(this.responseText)
        const body = payload?.data?.items ? payload.data : payload?.data?.data
        if (Array.isArray(body?.items)) latestUsageItems = body.items
      } catch {}
      refresh()
    }, { once: true })
  }
  return originalSend.apply(this, args)
}

function mountToggle() {
  if (!isUsagePage() || document.querySelector('[data-testid="toggle-account-cost"]')) return
  const columnButton = [...document.querySelectorAll('button')].find(button => {
    const value = `${button.getAttribute('title') || ''} ${normalizedText(button)}`
    return /列设置|Column Settings/i.test(value)
  })
  const anchor = columnButton?.parentElement
  if (!anchor?.parentElement) return
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn btn-secondary px-2 md:px-3'
  button.dataset.testid = 'toggle-account-cost'
  button.addEventListener('click', () => {
    try { localStorage.setItem(STORAGE_KEY, String(!isVisible())) } catch {}
    applyVisibility()
  })
  anchor.parentElement.insertBefore(button, anchor)
}

if (!document.getElementById(STYLE_ID)) {
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `[${HIDDEN_ATTR}="true"]{display:none!important}`
  document.head.appendChild(style)
}

let queued = false
const refresh = () => {
  if (queued) return
  queued = true
  requestAnimationFrame(() => {
    queued = false
    mountToggle()
    decorateUnknownReasons()
    applyVisibility()
  })
}
new MutationObserver(refresh).observe(document.documentElement, { childList: true, subtree: true })
window.addEventListener('popstate', refresh)
refresh()
