// Login footer overlay for the approved recovered Console snapshot.
// The protected production-equivalent Console is served from this snapshot,
// not rebuilt from frontend/src.

const RECOVERY_PATH = '/forgot-password'
const RECOVERY_SELECTOR = '[data-zero-one-login-recovery="true"]'
let scanFrame = 0

function recoveryLabel() {
  const locale = window.localStorage.getItem('sub2api_locale') || document.documentElement.lang
  return String(locale).toLowerCase().startsWith('en') ? 'Recover password' : '找回密码'
}

function installRecoveryLink() {
  scanFrame = 0
  if (window.location.pathname !== '/login') return

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

function scheduleScan() {
  if (scanFrame) return
  scanFrame = window.requestAnimationFrame(installRecoveryLink)
}

new MutationObserver(scheduleScan).observe(document.documentElement, {
  childList: true,
  subtree: true,
})

window.addEventListener('popstate', scheduleScan)
scheduleScan()
