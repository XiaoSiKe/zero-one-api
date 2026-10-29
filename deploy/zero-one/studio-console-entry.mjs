// Join the existing reconciliation owner; never install another DOM observer.
const reconciliation = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__

function reconcileStudioEntry() {
  const app = document.querySelector('#app')?.__vue_app__
  const auth = app?.config.globalProperties.$pinia?._s?.get('auth')
  const nav = document.querySelector('aside nav')
  if (!nav) return
  const injected = [...nav.querySelectorAll('[data-zero-one-studio-link]')]
  if (!auth?.token || !auth.user || auth.runMode === 'simple') {
    injected.forEach((link) => link.remove())
    return
  }
  const native = nav.querySelector('a[href="/studio/"]:not([data-zero-one-studio-link])')
  if (native) {
    injected.forEach((link) => link.remove())
    return
  }
  const reference = nav.querySelector('a[href="/images"]') || nav.querySelector('a[href="/keys"]')
  if (!reference) return
  let link = injected[0]
  injected.slice(1).forEach((duplicate) => duplicate.remove())
  if (!link) {
    link = reference.cloneNode(true)
    link.setAttribute('data-zero-one-studio-link', '')
    link.removeAttribute('data-tour')
    link.removeAttribute('aria-current')
    link.href = '/studio/'
    link.dataset.navigationPath = '/studio/'
    link.classList.remove('sidebar-link-active', 'router-link-active', 'router-link-exact-active')
    reference.after(link)
  }
  const label = (localStorage.getItem('sub2api_locale') || 'zh').startsWith('zh') ? '无限画布' : 'Infinite Canvas'
  if (link.getAttribute('aria-label') !== label) link.setAttribute('aria-label', label)
  const title = reference.classList.contains('sidebar-link-collapsed') ? label : ''
  if (link.title !== title) link.title = title
  const labelNode = link.querySelector('.sidebar-label')
  if (labelNode && labelNode.textContent !== label) labelNode.textContent = label
}

reconciliation.register('infinite-canvas', reconcileStudioEntry)
