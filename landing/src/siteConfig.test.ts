import { describe, expect, it } from 'vitest'
import {
  API_ENDPOINT,
  API_V1_ENDPOINT,
  CANONICAL_PRODUCT_ORIGIN,
  DISPLAY_API_ENDPOINT,
  IS_LOCAL_PREVIEW,
  canLoadBrandImage,
  consoleUrl,
  documentUrl,
} from './siteConfig'

describe('site configuration', () => {
  it('uses the current browser origin for local data calls while preserving the public display address', () => {
    expect(IS_LOCAL_PREVIEW).toBe(true)
    expect(API_ENDPOINT).toBe(window.location.origin)
    expect(API_V1_ENDPOINT).toBe(`${window.location.origin}/v1`)
    expect(CANONICAL_PRODUCT_ORIGIN).toBe('https://api.01yapi.com')
    expect(DISPLAY_API_ENDPOINT).toBe('https://api.01yapi.com')
  })

  it('maps console actions to the real local console in development', () => {
    expect(consoleUrl('/model-plaza')).toBe('http://127.0.0.1:8080/model-plaza')
    expect(consoleUrl('/keys')).toBe('http://127.0.0.1:8080/keys')
    expect(consoleUrl('/usage')).toBe('http://127.0.0.1:8080/usage')
    expect(consoleUrl('/monitor')).toBe('http://127.0.0.1:8080/monitor')
    expect(consoleUrl('/redeem')).toBe('http://127.0.0.1:8080/redeem')
    expect(consoleUrl('/register')).toBe('http://127.0.0.1:8080/register')
    expect(consoleUrl('/login?redirect=/model-plaza')).toBe(
      'http://127.0.0.1:8080/login?redirect=/model-plaza',
    )

    for (const href of [
      consoleUrl('/model-plaza'),
      consoleUrl('/keys'),
      consoleUrl('/usage'),
      consoleUrl('/monitor'),
      consoleUrl('/redeem'),
      consoleUrl('/register'),
      consoleUrl('/login'),
    ]) {
      expect(new URL(href).origin).toBe('http://127.0.0.1:8080')
    }
  })

  it('keeps configured documentation and brand images intact during local development', () => {
    expect(documentUrl('https://docs.01yapi.com/guide')).toBe('https://docs.01yapi.com/guide')
    expect(canLoadBrandImage('https://cdn.01yapi.com/logo.svg')).toBe(true)
    expect(canLoadBrandImage('//cdn.01yapi.com/logo.svg')).toBe(true)
    expect(canLoadBrandImage('/logo.svg')).toBe(true)
    expect(canLoadBrandImage('data:image/svg+xml,%3Csvg/%3E')).toBe(true)
    expect(canLoadBrandImage('')).toBe(false)
  })
})
