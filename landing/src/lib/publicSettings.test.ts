import { describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_PUBLIC_SETTINGS,
  fetchPublicSettings,
  normalizeNoticeText,
  normalizePublicSettings,
  normalizeUtcOffset,
  sanitizeHttpUrl,
  sanitizeImageUrl,
  sanitizeLandingNoticeUrl,
} from './publicSettings'

describe('public settings normalization', () => {
  it('keeps the landing announcement disabled and empty by default', () => {
    expect(DEFAULT_PUBLIC_SETTINGS).toMatchObject({
      landingNoticeEnabled: false,
      landingNoticeText: '',
      landingNoticeUrl: '',
    })
    expect(normalizePublicSettings({ code: 0, data: {} })).toMatchObject({
      landingNoticeEnabled: false,
      landingNoticeText: '',
      landingNoticeUrl: '',
    })
  })

  it('uses supplied, safe public settings', () => {
    expect(
      normalizePublicSettings({
        code: 0,
        data: {
          site_name: '零一 API',
          site_logo: 'https://cdn.01yapi.com/logo.svg',
          site_subtitle: '稳定的模型调用入口。',
          doc_url: 'https://docs.01yapi.com/guide',
          landing_tutorial_url: '/guides/integration',
          registration_enabled: false,
          model_plaza_enabled: true,
          model_plaza_require_auth: false,
          channel_monitor_enabled: true,
          public_channel_status_enabled: true,
          server_utc_offset: '+08:00',
          landing_notice_enabled: true,
          landing_notice_text: '  新模型\n已上线  ',
          landing_notice_url: 'https://docs.01yapi.com/notices/new-model',
        },
      }),
    ).toEqual({
      siteName: '零一 API',
      siteLogo: 'https://cdn.01yapi.com/logo.svg',
      siteSubtitle: '稳定的模型调用入口。',
      docUrl: 'https://docs.01yapi.com/guide',
      landingTutorialUrl: '/guides/integration',
      registrationEnabled: false,
      modelPlazaEnabled: true,
      modelPlazaRequireAuth: false,
      channelMonitorEnabled: true,
      publicChannelStatusEnabled: true,
      serverUtcOffset: '+08:00',
      landingNoticeEnabled: true,
      landingNoticeText: '新模型 已上线',
      landingNoticeUrl: 'https://docs.01yapi.com/notices/new-model',
    })
  })

  it('falls back when the response is malformed or unsuccessful', () => {
    expect(normalizePublicSettings({ code: 500, data: {} })).toEqual(DEFAULT_PUBLIC_SETTINGS)
    expect(normalizePublicSettings({ code: 0, data: null })).toEqual(DEFAULT_PUBLIC_SETTINGS)
  })

  it('rejects unsafe document and logo URLs', () => {
    expect(sanitizeHttpUrl('javascript:alert(1)')).toBe('')
    expect(sanitizeImageUrl('//untrusted.example/logo.svg')).toBe('')
    expect(sanitizeImageUrl('/logo.svg')).toBe('/logo.svg')
  })

  it('normalizes optional landing controls with fail-closed notice behavior', () => {
    const normalized = normalizePublicSettings({
      code: 0,
      data: {
        landing_notice_enabled: true,
        landing_notice_text: '   ',
        landing_notice_url: 'javascript:alert(1)',
        model_plaza_enabled: 'true',
        model_plaza_require_auth: 1,
        channel_monitor_enabled: 'false',
        public_channel_status_enabled: 'true',
        server_utc_offset: 'UTC+08:00',
      },
    })
    expect(normalized).toEqual({
      ...DEFAULT_PUBLIC_SETTINGS,
      landingNoticeEnabled: false,
      landingNoticeText: '',
      landingNoticeUrl: '',
    })

    expect(normalizeNoticeText('  hello\u0000\nworld  ')).toBe('hello world')
    expect(normalizeNoticeText('模'.repeat(300))).toHaveLength(160)
    expect(normalizeUtcOffset('+14:00')).toBe('+14:00')
    expect(normalizeUtcOffset('+14:30')).toBe('')
    expect(normalizeUtcOffset('-05:30')).toBe('-05:30')
  })

  it('accepts only safe notice destinations while keeping omitted notices disabled', () => {
    expect(sanitizeLandingNoticeUrl('/keys?source=landing#new')).toBe('/keys?source=landing#new')
    expect(sanitizeLandingNoticeUrl('https://api.01yapi.com/keys')).toBe(
      'https://api.01yapi.com/keys',
    )
    expect(sanitizeLandingNoticeUrl('//evil.example/keys')).toBe('')
    expect(sanitizeLandingNoticeUrl('/\\evil.example/keys')).toBe('')
    expect(sanitizeLandingNoticeUrl('javascript:alert(1)')).toBe('')

    expect(normalizePublicSettings({ code: 0, data: {} })).toEqual(DEFAULT_PUBLIC_SETTINGS)
  })

  it('requests public settings from the same-origin API path', async () => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(
      Response.json({ code: 0, data: {} }),
    )

    await fetchPublicSettings(request)

    expect(request).toHaveBeenCalledTimes(1)
    expect(request.mock.calls[0]?.[0]).toBe('/api/v1/settings/public?scope=landing')
    expect(request.mock.calls[0]?.[1]).toMatchObject({
      cache: 'no-store',
      credentials: 'omit',
    })
  })

  it('distinguishes a failed request from valid disabled capabilities', async () => {
    const failedRequest = async () => {
      throw new TypeError('network unavailable')
    }

    await expect(fetchPublicSettings(failedRequest as typeof fetch)).resolves.toEqual(
      null,
    )
  })

  it('reports an unsuccessful response as unavailable', async () => {
    const rejectedResponse = async () => new Response(null, { status: 503 })

    await expect(fetchPublicSettings(rejectedResponse as typeof fetch)).resolves.toEqual(
      null,
    )
  })

  it.each([{ code: 1, data: {} }, { code: 0, data: null }, '<html>'])('rejects an invalid envelope: %j', async (payload) => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(Response.json(payload))
    await expect(fetchPublicSettings(request)).resolves.toBeNull()
  })

  it('keeps a valid disabled response distinct from request failure', async () => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(Response.json({ code: 0, data: {} }))
    await expect(fetchPublicSettings(request)).resolves.toEqual(DEFAULT_PUBLIC_SETTINGS)
  })

  it('cancels the actual settings request when its caller unmounts', async () => {
    const request = vi.fn<typeof fetch>((_url, options) => new Promise((_resolve, reject) => {
      options?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))
    }))
    const controller = new AbortController()
    const result = fetchPublicSettings(request, undefined, controller.signal)
    controller.abort()
    await expect(result).resolves.toBeNull()
    expect(request.mock.calls[0]?.[1]?.signal?.aborted).toBe(true)
  })

  it('reports the three-second timeout as unavailable so the page can recover', async () => {
    vi.useFakeTimers()
    try {
      const request = vi.fn<typeof fetch>((_url, options) => new Promise((_resolve, reject) => {
        options?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))
      }))
      const result = fetchPublicSettings(request)
      await vi.advanceTimersByTimeAsync(3_000)
      await expect(result).resolves.toBeNull()
    } finally {
      vi.useRealTimers()
    }
  })
})
