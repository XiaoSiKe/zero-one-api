// Authentication action overlay for the approved recovered Console snapshot.
// The protected production-equivalent Console is served from this snapshot,
// not rebuilt from frontend/src.

const RECOVERY_PATH = '/forgot-password'
const RECOVERY_SELECTOR = '[data-zero-one-login-recovery="true"]'
const SOURCE_SELECTOR = 'form [data-zero-one-recovery-source="true"]'
const LOGIN_BUTTON_CLASS = 'btn btn-primary btn-specular w-full'

function recoveryLabel() {
  const locale = window.localStorage.getItem('sub2api_locale') || document.documentElement.lang
  return String(locale).toLowerCase().startsWith('en') ? 'Recover password' : '找回密码'
}

function installRecoveryLink() {
  // 原生 LoginView 只在实时公开设置允许时渲染此链接。
  // 保留原节点供 Vue 管理，以它为能力依据，不能从注册按钮推断找回权限。
  const source = document.querySelector('form a[href="/forgot-password"]') || document.querySelector(SOURCE_SELECTOR)
  let recoveryLink = document.querySelector(RECOVERY_SELECTOR)
  if (!(source instanceof HTMLAnchorElement)) {
    recoveryLink?.remove()
    return
  }
  source.dataset.zeroOneRecoverySource = 'true'
  source.style.display = 'none'
  source.setAttribute('aria-hidden', 'true')
  source.tabIndex = -1
  source.removeAttribute('href')
  const registrationLink = document.querySelector('a[href="/register"].btn.btn-secondary')
  const placement = registrationLink || source.closest('form')
  if (!placement) return
  if (!(recoveryLink instanceof HTMLAnchorElement)) {
    recoveryLink = document.createElement('a')
    recoveryLink.setAttribute('href', RECOVERY_PATH)
    recoveryLink.dataset.zeroOneLoginRecovery = 'true'
    recoveryLink.style.marginTop = '12px'
  }
  const className = registrationLink?.className || 'btn btn-secondary w-full'
  if (recoveryLink.className !== className) recoveryLink.className = className
  const label = recoveryLabel()
  if (recoveryLink.textContent !== label) recoveryLink.textContent = label
  if (recoveryLink.getAttribute('aria-label') !== label) recoveryLink.setAttribute('aria-label', label)
  if (placement.nextElementSibling !== recoveryLink) placement.after(recoveryLink)
}

function styleForgotPasswordActions() {
  const sendResetLink = document.querySelector('form button[type="submit"]')
  if (sendResetLink instanceof HTMLButtonElement) {
    sendResetLink.className = LOGIN_BUTTON_CLASS
  }

  const backToLogin = document.querySelector('a[href="/login"]')
  if (!(backToLogin instanceof HTMLAnchorElement)) return
  if (backToLogin.dataset.zeroOneAuthButtonStyle === 'true') return

  const backWrapper = backToLogin.parentElement
  const label = backWrapper?.textContent?.replace(/\s+/g, ' ').trim()
  if (!(backWrapper instanceof HTMLElement) || !label) return

  backToLogin.className = LOGIN_BUTTON_CLASS
  backToLogin.dataset.zeroOneAuthButtonStyle = 'true'
  backToLogin.textContent = label
  backWrapper.removeAttribute('class')
  backWrapper.replaceChildren(backToLogin)
}

function installAuthActions() {
  if (window.location.pathname === '/login') {
    installRecoveryLink()
  } else if (window.location.pathname === '/forgot-password') {
    styleForgotPasswordActions()
  }
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('login-recovery', installAuthActions)
