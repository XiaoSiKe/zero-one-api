import { expect, test } from '@playwright/test'
import { seedLanding } from './fixtures/api'
import { extname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ZERO-ONE 二开保护：官网公开数据不依赖 Console 会话，失败和页面恢复必须可重读。
for (const surface of ['source', 'recovered'] as const) {
  test.describe(surface, () => {
    test.beforeEach(async ({ page }) => {
      // CI 用软件渲染 WebGL；数据恢复不应依赖持续动画的帧率，视觉由专门套件验证。
      await page.emulateMedia({ reducedMotion: 'reduce' })
      if (surface !== 'recovered') return
      await page.route('http://127.0.0.1:4174/**', async (route) => {
        const pathname = new URL(route.request().url()).pathname
        if (pathname !== '/' && !pathname.startsWith('/_landing/')) return route.fallback()
        const relative = pathname === '/' ? 'index.html' : pathname.slice('/_landing/'.length)
        const path = fileURLToPath(new URL(`../../deploy/zero-one/recovered-frontend/landing/${relative}`, import.meta.url))
        const contentType = ({ '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' } as Record<string, string>)[extname(path)]
        await route.fulfill({ path, ...(contentType ? { contentType } : {}) })
      })
    })

    for (const session of ['anonymous', 'returning-user'] as const) {
      test(`${session}: public settings recover after a transient failure`, async ({ page }) => {
        await seedLanding(page)
        await page.addInitScript((session) => {
          if (session === 'returning-user') {
            localStorage.setItem('auth_token', 'expired-console-token')
            localStorage.setItem('auth_user', JSON.stringify({ role: 'user' }))
          }
        }, session)
        let settingsRequests = 0
        await page.route('**/api/v1/settings/public*', async (route) => {
          settingsRequests += 1
          if (settingsRequests === 1) {
            return route.fulfill({ status: 503, contentType: 'application/json', body: '{}' })
          }
          return route.fallback()
        })
        const authHeaders: string[] = []
        page.on('request', (request) => {
          if (request.url().includes('/api/v1/')) {
            authHeaders.push(request.headers().authorization ?? '')
          }
        })

        await page.goto('http://127.0.0.1:4174/#pricing')
        await expect(page.locator('.price-table tbody tr').first()).toBeVisible()
        await page.locator('#status').scrollIntoViewIfNeeded()
        await expect(page.locator('#status').getByText('OpenAI 主线路')).toBeVisible()
        expect(settingsRequests).toBe(2)
        expect(authHeaders.every((value) => value === '')).toBe(true)
      })
    }

    test('returning to the page retries failed prices and refreshes channel status', async ({ page }) => {
      await seedLanding(page)
      let failPrices = true
      let statusRequests = 0
      await page.route('**/api/v1/model-plaza', async (route) => {
        if (failPrices) return route.fulfill({ status: 503, body: '{}' })
        return route.fallback()
      })
      page.on('request', (request) => {
        if (request.url().endsWith('/channel-status/summary')) statusRequests += 1
      })
      await page.goto('http://127.0.0.1:4174/#pricing')
      await expect(page.getByText('价格服务暂时不可用')).toBeVisible()
      const previousStatusRequests = statusRequests
      failPrices = false
      await page.evaluate(() => {
        localStorage.setItem('auth_token', 'expired-console-token')
        localStorage.setItem('auth_user', JSON.stringify({ role: 'user' }))
        window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }))
      })
      await expect(page.locator('.price-table tbody tr').first()).toBeVisible()
      await expect.poll(() => statusRequests).toBeGreaterThan(previousStatusRequests)
    })

    test('unavailable settings expose a working manual retry without authorizing data', async ({ page }) => {
      await seedLanding(page)
      const dataRequests: string[] = []
      await page.route('**/api/v1/settings/public*', async (route) => {
        const manuallyRequested = await page.evaluate(() => Boolean(
          (window as Window & { __manualSettingsRetry?: boolean }).__manualSettingsRetry,
        ))
        if (!manuallyRequested) return route.fulfill({ status: 503, body: '{}' })
        return route.fallback()
      })
      page.on('request', (request) => {
        if (/\/(model-plaza|channel-status\/summary)$/.test(request.url())) dataRequests.push(request.url())
      })
      await page.goto('http://127.0.0.1:4174/')
      await page.locator('#pricing').scrollIntoViewIfNeeded()
      await expect(page.getByRole('heading', { name: '官网数据暂时无法加载' })).toBeVisible()
      expect(dataRequests).toEqual([])
      await page.evaluate(() => {
        document.addEventListener('click', (event) => {
          const button = event.target instanceof Element ? event.target.closest('button') : null
          if (button?.textContent?.trim() === '重新读取') {
            (window as Window & { __manualSettingsRetry?: boolean }).__manualSettingsRetry = true
          }
        }, { capture: true })
      })
      await page.getByRole('button', { name: '重新读取', exact: true }).click()
      await expect(page.locator('.price-table tbody tr').first()).toBeVisible()
      await page.locator('#status').scrollIntoViewIfNeeded()
      await expect(page.locator('#status').getByText('OpenAI 主线路')).toBeVisible()
    })
  })
}
