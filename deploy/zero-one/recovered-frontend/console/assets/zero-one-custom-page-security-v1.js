/**
 * Compatibility guard for the approved recovered Console snapshot.
 *
 * The recovered CustomPageView predates the native same-origin credential
 * policy and appends the signed-in user's id and token to every embedded URL.
 * Strip those two values before a cross-origin custom page can navigate while
 * leaving the purchase and payment iframe contracts untouched.
 */

const SENSITIVE_QUERY_KEYS = ['user_id', 'token']

function isCustomPageRoute() {
  return window.location.pathname.startsWith('/custom/')
}

function withoutCrossOriginCredentials(value) {
  if (!isCustomPageRoute() || typeof value !== 'string' || value.length === 0) return value

  try {
    const url = new URL(value, window.location.href)
    if (!['http:', 'https:'].includes(url.protocol) || url.origin === window.location.origin) {
      return value
    }
    for (const key of SENSITIVE_QUERY_KEYS) url.searchParams.delete(key)
    return url.toString()
  } catch {
    return value
  }
}

function guardURLProperty(prototype, property) {
  const descriptor = Object.getOwnPropertyDescriptor(prototype, property)
  if (!descriptor?.get || !descriptor?.set || descriptor.configurable === false) return

  Object.defineProperty(prototype, property, {
    ...descriptor,
    set(value) {
      descriptor.set.call(this, withoutCrossOriginCredentials(value))
    },
  })
}

guardURLProperty(HTMLIFrameElement.prototype, 'src')
guardURLProperty(HTMLAnchorElement.prototype, 'href')
