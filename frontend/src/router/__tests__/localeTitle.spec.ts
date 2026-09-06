import { describe, expect, it, vi } from 'vitest'

vi.mock('@/stores/app', () => ({ useAppStore: () => ({ siteName: 'Test Site', cachedPublicSettings: {} }) }))
vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ isAdmin: false }) }))
vi.mock('@/stores/adminSettings', () => ({ useAdminSettingsStore: () => ({ customMenuItems: [] }) }))

import router from '@/router'
import { i18n, loadLocaleMessages, setLocale } from '@/i18n'

describe('Console locale title ownership', () => {
  it('updates the current route title after a locale change', async () => {
    await Promise.all([loadLocaleMessages('en'), loadLocaleMessages('zh')])
    // Vitest uses the runtime-only translator; production compiles these messages.
    i18n.global.setLocaleMessage('zh', { home: { login: () => '登录' } })
    i18n.global.setLocaleMessage('en', { home: { login: () => 'Login' } })
    router.currentRoute.value = {
      ...router.currentRoute.value,
      name: 'Login',
      meta: { title: 'Login', titleKey: 'home.login' },
    }
    await setLocale('en')
    await setLocale('zh')
    expect(document.title).toBe('登录 - Test Site')
    await setLocale('en')
    expect(document.title).toBe('Login - Test Site')
  })
})
