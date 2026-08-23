export const IS_LOCAL_PREVIEW = import.meta.env.DEV
const IS_LOCAL_EDGE_PREVIEW = import.meta.env.VITE_LOCAL_EDGE_PREVIEW === 'true'

const isLoopbackRuntime = () => {
  if (typeof window === 'undefined') return false
  return ['127.0.0.1', 'localhost', '::1'].includes(window.location.hostname)
}

const IS_LOCAL_EDGE_RUNTIME =
  IS_LOCAL_EDGE_PREVIEW || (!IS_LOCAL_PREVIEW && isLoopbackRuntime())
const IS_LOCAL_RUNTIME = IS_LOCAL_PREVIEW || IS_LOCAL_EDGE_RUNTIME

const browserOrigin = () => {
  if (typeof window === 'undefined') return 'http://localhost:3001'
  return window.location.origin
}

export const API_ENDPOINT = IS_LOCAL_RUNTIME ? browserOrigin() : 'https://api.01yapi.com'
export const API_V1_ENDPOINT = `${API_ENDPOINT}/v1`
/** The public address shown in the landing page and copied by visitors. */
export const DISPLAY_API_ENDPOINT = 'https://api.01yapi.com'
export const CONSOLE_ORIGIN = 'https://app.01yapi.com'
const LOCAL_CONSOLE_ORIGIN = 'http://127.0.0.1:8080'

/** Development opens the same embedded console served by the local backend. */
export const consoleUrl = (path: string): string => {
  const origin = IS_LOCAL_EDGE_RUNTIME
    ? browserOrigin()
    : IS_LOCAL_PREVIEW
      ? LOCAL_CONSOLE_ORIGIN
      : CONSOLE_ORIGIN
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export const documentUrl = (url: string): string => url

export const canLoadBrandImage = (url: string): boolean => Boolean(url)
