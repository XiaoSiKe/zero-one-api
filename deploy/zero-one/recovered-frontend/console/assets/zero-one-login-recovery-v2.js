// Authentication action overlay for the approved recovered Console snapshot.
// The protected production-equivalent Console is served from this snapshot,
// not rebuilt from frontend/src.

const RECOVERY_PATH = '/forgot-password'
const RECOVERY_SELECTOR = '[data-zero-one-login-recovery="true"]'
const LOGIN_BUTTON_CLASS = 'btn btn-primary btn-specular w-full'

function recoveryLabel() {
  const locale = window.localStorage.getItem('sub2api_locale') || document.documentElement.lang
  return String(locale).toLowerCase().startsWith('en') ? 'Recover password' : '找回密码'
}

function installRecoveryLink() {
  for (const inlineLink of document.querySelectorAll('form a[href="/forgot-password"]')) {
    inlineLink.remove()
  }

  const registrationLink = document.querySelector('a[href="/register"].btn.btn-secondary')
  if (!(registrationLink instanceof HTMLAnchorElement)) return
  if (document.querySelector(RECOVERY_SELECTOR)) return

  const recoveryLink = registrationLink.cloneNode(false)
  if (!(recoveryLink instanceof HTMLAnchorElement)) return

  recoveryLink.className = registrationLink.className
  recoveryLink.setAttribute('href', RECOVERY_PATH)
  recoveryLink.setAttribute('aria-label', recoveryLabel())
  recoveryLink.dataset.zeroOneLoginRecovery = 'true'
  recoveryLink.textContent = recoveryLabel()
  recoveryLink.style.marginTop = '12px'
  registrationLink.after(recoveryLink)
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
