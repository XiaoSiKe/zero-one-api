import { describe, expect, it, vi } from 'vitest'

vi.mock('@/router', () => {
  throw new Error('Locale helpers must not load the Console router')
})

import { getLocale, initI18n, setLocale } from '@/i18n'

describe('isolated locale helpers', () => {
  it('loads and switches language without importing the Console application', async () => {
    await initI18n()
    await setLocale('zh')
    expect(getLocale()).toBe('zh')
    expect(document.documentElement.lang).toBe('zh')
    expect(localStorage.getItem('sub2api_locale')).toBe('zh')
    await setLocale('en')
    expect(getLocale()).toBe('en')
    await setLocale('invalid')
    expect(getLocale()).toBe('en')
  })
})
