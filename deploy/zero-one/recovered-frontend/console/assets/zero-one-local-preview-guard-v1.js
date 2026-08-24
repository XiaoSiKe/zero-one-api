// Local-only network guard for the approved recovered Console snapshot.
const loopbackHosts = new Set(['127.0.0.1', 'localhost', '::1'])

if (loopbackHosts.has(window.location.hostname)) {
  const localOrigin = window.location.origin

  function isExternal(url) {
    try {
      const parsed = new URL(String(url), localOrigin)
      return ['http:', 'https:', 'ws:', 'wss:'].includes(parsed.protocol) && parsed.origin !== localOrigin
    } catch {
      return false
    }
  }

  function blockedError(url) {
    return new TypeError(`Local preview blocked an external request: ${String(url)}`)
  }

  const nativeFetch = window.fetch.bind(window)
  window.fetch = (input, init) => {
    const url = input instanceof Request ? input.url : input
    return isExternal(url) ? Promise.reject(blockedError(url)) : nativeFetch(input, init)
  }

  const nativeOpen = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function open(method, url, ...rest) {
    if (isExternal(url)) throw blockedError(url)
    return nativeOpen.call(this, method, url, ...rest)
  }

  function externalResource(node) {
    if (
      node instanceof HTMLScriptElement ||
      node instanceof HTMLIFrameElement ||
      node instanceof HTMLImageElement
    ) {
      return node.src && isExternal(node.src)
    }
    if (node instanceof HTMLLinkElement) return node.href && isExternal(node.href)
    return false
  }

  function rejectResource(node) {
    if (node instanceof HTMLIFrameElement) showBlockedNavigationNotice()
    queueMicrotask(() => node.dispatchEvent(new Event('error')))
  }

  let blockedNoticeTimer = 0

  function showBlockedNavigationNotice() {
    let notice = document.querySelector('[data-zero-one-local-preview-notice]')
    if (!(notice instanceof HTMLElement)) {
      notice = document.createElement('div')
      notice.dataset.zeroOneLocalPreviewNotice = 'true'
      notice.setAttribute('role', 'status')
      Object.assign(notice.style, {
        position: 'fixed',
        right: '16px',
        bottom: '16px',
        zIndex: '100000030',
        maxWidth: '360px',
        padding: '12px 16px',
        border: '1px solid rgba(148, 163, 184, 0.35)',
        borderRadius: '12px',
        background: 'rgba(15, 23, 42, 0.96)',
        color: '#f8fafc',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
        fontSize: '14px',
        lineHeight: '1.5',
      })
      document.body.append(notice)
    }
    notice.textContent = '本地预览已阻止外部跳转，当前页面仍连接本地 Docker。'
    window.clearTimeout(blockedNoticeTimer)
    blockedNoticeTimer = window.setTimeout(() => notice.remove(), 4000)
  }

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!(target instanceof HTMLAnchorElement) || !isExternal(target.href)) return
      event.preventDefault()
      event.stopImmediatePropagation()
      showBlockedNavigationNotice()
    },
    true,
  )

  const nativeWindowOpen = window.open.bind(window)
  window.open = (url, target, features) => {
    if (url && isExternal(url)) {
      showBlockedNavigationNotice()
      return null
    }
    return nativeWindowOpen(url, target, features)
  }

  const nativeAppendChild = Node.prototype.appendChild
  Node.prototype.appendChild = function appendChild(node) {
    if (externalResource(node)) {
      rejectResource(node)
      return node
    }
    return nativeAppendChild.call(this, node)
  }

  const nativeInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function insertBefore(node, reference) {
    if (externalResource(node)) {
      rejectResource(node)
      return node
    }
    return nativeInsertBefore.call(this, node, reference)
  }

  const nativeAppend = Element.prototype.append
  Element.prototype.append = function append(...nodes) {
    const allowedNodes = nodes.filter((node) => {
      if (!(node instanceof Node) || !externalResource(node)) return true
      rejectResource(node)
      return false
    })
    return nativeAppend.apply(this, allowedNodes)
  }

  const nativePrepend = Element.prototype.prepend
  Element.prototype.prepend = function prepend(...nodes) {
    const allowedNodes = nodes.filter((node) => {
      if (!(node instanceof Node) || !externalResource(node)) return true
      rejectResource(node)
      return false
    })
    return nativePrepend.apply(this, allowedNodes)
  }

  Object.defineProperty(window, '__ZERO_ONE_LOCAL_PREVIEW__', {
    configurable: false,
    value: true,
    writable: false,
  })
}
