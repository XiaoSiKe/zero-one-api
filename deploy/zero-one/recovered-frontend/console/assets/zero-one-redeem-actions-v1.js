// Redeem action overlay for the approved recovered Console snapshot.
// It mirrors the source view while leaving the recovered base package unchanged.
const REDEEM_PATH = '/redeem'
const ONLINE_RECHARGE_LABEL = '在线充值'
const FALLBACK_RECHARGE_PATH = '/purchase?tab=recharge'
const ACTIONS_SELECTOR = '[data-zero-one-redeem-actions="true"]'

function localText(zh, en) {
  const locale = localStorage.getItem('sub2api_locale') || document.documentElement.lang || 'zh-CN'
  return locale.toLowerCase().startsWith('zh') ? zh : en
}

function findOnlineRechargeNavigation() {
  return [...document.querySelectorAll('header a[href], aside a[href]')].find((link) => {
    return link.textContent?.trim() === ONLINE_RECHARGE_LABEL
  }) || null
}

function currentRechargePath() {
  return findOnlineRechargeNavigation()?.getAttribute('href') || FALLBACK_RECHARGE_PATH
}

function enhanceRedeemActions() {
  if (window.location.pathname !== REDEEM_PATH) return

  const input = document.querySelector('main #code')
  const form = input?.closest('form')
  const submit = form?.querySelector('button[type="submit"]')
  if (!(form instanceof HTMLFormElement) || !(submit instanceof HTMLButtonElement)) return

  let actions = form.querySelector(ACTIONS_SELECTOR)
  if (!(actions instanceof HTMLElement)) {
    actions = document.createElement('div')
    actions.className = 'zero-one-redeem-actions'
    actions.dataset.zeroOneRedeemActions = 'true'
    submit.before(actions)
    actions.append(submit)
  }

  submit.classList.add('btn-specular')

  let recharge = actions.querySelector('[data-zero-one-redeem-recharge="true"]')
  if (!(recharge instanceof HTMLAnchorElement)) {
    recharge = document.createElement('a')
    recharge.className = 'btn btn-primary btn-specular w-full py-3'
    recharge.dataset.zeroOneRedeemRecharge = 'true'
    recharge.textContent = localText('在线充值', 'Top Up Online')
    actions.append(recharge)
    window.__ZERO_ONE_BIND_INTERNAL_LINK__?.(recharge)
  }

  recharge.href = currentRechargePath()
}

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('redeem-actions', enhanceRedeemActions)
