export interface PublicSettings {
  siteName: string
  siteLogo: string
  siteSubtitle: string
  docUrl: string
  registrationEnabled: boolean
  modelPlazaEnabled: boolean
  modelPlazaRequireAuth: boolean
  channelMonitorEnabled: boolean
  publicChannelStatusEnabled: boolean
  serverUtcOffset: string
  landingNoticeEnabled: boolean
  landingNoticeText: string
  landingNoticeUrl: string
}

type UnknownRecord = Record<string, unknown>

export const DEFAULT_PUBLIC_SETTINGS: Readonly<PublicSettings> = Object.freeze({
  siteName: '零一 API',
  siteLogo: '',
  siteSubtitle: '从零到一，连接每一次模型调用。',
  docUrl: '',
  // Capability switches fail closed until the public settings endpoint answers.
  registrationEnabled: false,
  modelPlazaEnabled: false,
  modelPlazaRequireAuth: false,
  channelMonitorEnabled: false,
  publicChannelStatusEnabled: false,
  serverUtcOffset: '',
  landingNoticeEnabled: false,
  landingNoticeText: '',
  landingNoticeUrl: '',
})

function asRecord(value: unknown): UnknownRecord | null {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null
}

function asNonEmptyString(value: unknown, fallback = ''): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

/** Plain-text notices are whitespace-normalized, control-character free and bounded. */
export function normalizeNoticeText(value: unknown): string {
  if (typeof value !== 'string') return ''
  const normalized = value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return Array.from(normalized).slice(0, 160).join('')
}

/** Accept the server's canonical UTC offset without passing arbitrary text to the UI. */
export function normalizeUtcOffset(value: unknown): string {
  if (typeof value !== 'string') return ''
  const match = /^([+-])(\d{2}):(\d{2})$/.exec(value.trim())
  if (!match) return ''
  const hours = Number(match[2])
  const minutes = Number(match[3])
  if (hours > 14 || minutes > 59 || (hours === 14 && minutes !== 0)) return ''
  return `${match[1]}${match[2]}:${match[3]}`
}

/** Accept only values safe to use as an external document href. */
export function sanitizeHttpUrl(value: unknown): string {
  const candidate = asNonEmptyString(value)
  if (!candidate) return ''

  try {
    const parsed = new URL(candidate)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : ''
  } catch {
    return ''
  }
}

/** Landing notices may link to a safe same-origin path or an explicit HTTP(S) URL. */
export function sanitizeLandingNoticeUrl(value: unknown): string {
  const candidate = asNonEmptyString(value)
  if (!candidate) return ''
  if (/[\u0000-\u001f\u007f]/.test(candidate)) return ''

  if (candidate.startsWith('/') && !candidate.startsWith('//')) {
    try {
      const base = new URL('https://landing.invalid')
      const parsed = new URL(candidate, base)
      if (parsed.origin !== base.origin) return ''
      return `${parsed.pathname}${parsed.search}${parsed.hash}`
    } catch {
      return ''
    }
  }
  return sanitizeHttpUrl(candidate)
}

/** Mirrors the console's branding policy without allowing protocol-relative URLs. */
export function sanitizeImageUrl(value: unknown): string {
  const candidate = asNonEmptyString(value)
  if (!candidate) return ''

  if (candidate.startsWith('/') && !candidate.startsWith('//')) return candidate
  if (/^data:image\/(?:avif|gif|jpe?g|png|svg\+xml|webp);/i.test(candidate)) return candidate
  return sanitizeHttpUrl(candidate)
}

export function normalizePublicSettings(payload: unknown): PublicSettings {
  const response = asRecord(payload)
  if (!response || (typeof response.code === 'number' && response.code !== 0)) {
    return { ...DEFAULT_PUBLIC_SETTINGS }
  }

  const data = asRecord(response.data)
  if (!data) return { ...DEFAULT_PUBLIC_SETTINGS }

  const landingNoticeText =
    data.landing_notice_text === undefined
      ? DEFAULT_PUBLIC_SETTINGS.landingNoticeText
      : normalizeNoticeText(data.landing_notice_text)
  const landingNoticeUrl =
    data.landing_notice_url === undefined
      ? DEFAULT_PUBLIC_SETTINGS.landingNoticeUrl
      : sanitizeLandingNoticeUrl(data.landing_notice_url)
  const landingNoticeRequested =
    typeof data.landing_notice_enabled === 'boolean'
      ? data.landing_notice_enabled
      : DEFAULT_PUBLIC_SETTINGS.landingNoticeEnabled

  return {
    siteName: asNonEmptyString(data.site_name, DEFAULT_PUBLIC_SETTINGS.siteName),
    siteLogo: sanitizeImageUrl(data.site_logo),
    siteSubtitle: asNonEmptyString(data.site_subtitle, DEFAULT_PUBLIC_SETTINGS.siteSubtitle),
    docUrl: sanitizeHttpUrl(data.doc_url),
    registrationEnabled:
      typeof data.registration_enabled === 'boolean'
        ? data.registration_enabled
        : DEFAULT_PUBLIC_SETTINGS.registrationEnabled,
    modelPlazaEnabled:
      typeof data.model_plaza_enabled === 'boolean'
        ? data.model_plaza_enabled
        : DEFAULT_PUBLIC_SETTINGS.modelPlazaEnabled,
    modelPlazaRequireAuth:
      typeof data.model_plaza_require_auth === 'boolean'
        ? data.model_plaza_require_auth
        : DEFAULT_PUBLIC_SETTINGS.modelPlazaRequireAuth,
    channelMonitorEnabled:
      typeof data.channel_monitor_enabled === 'boolean'
        ? data.channel_monitor_enabled
        : DEFAULT_PUBLIC_SETTINGS.channelMonitorEnabled,
    publicChannelStatusEnabled:
      typeof data.public_channel_status_enabled === 'boolean'
        ? data.public_channel_status_enabled
        : DEFAULT_PUBLIC_SETTINGS.publicChannelStatusEnabled,
    serverUtcOffset: normalizeUtcOffset(data.server_utc_offset),
    landingNoticeEnabled: landingNoticeRequested && Boolean(landingNoticeText),
    landingNoticeText,
    landingNoticeUrl,
  }
}

export async function fetchPublicSettings(
  request: typeof fetch = fetch,
  endpoint = '/api/v1/settings/public?scope=landing',
): Promise<PublicSettings> {
  const controller = new AbortController()
  const timeoutId = globalThis.setTimeout(() => controller.abort(), 3_000)

  try {
    const response = await request(endpoint, {
      cache: 'no-store',
      credentials: 'omit',
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) return { ...DEFAULT_PUBLIC_SETTINGS }
    return normalizePublicSettings(await response.json())
  } catch {
    return { ...DEFAULT_PUBLIC_SETTINGS }
  } finally {
    globalThis.clearTimeout(timeoutId)
  }
}
