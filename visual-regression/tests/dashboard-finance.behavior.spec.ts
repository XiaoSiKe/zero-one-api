import { expect, test, type Page } from '@playwright/test'
import { regularUser, seedConsole } from './fixtures/api'

async function dailyFixture(page: Page, missingCost = false) {
  await page.route('**/api/v1/admin/usage/stats?*', async route => {
    const date = new URL(route.request().url()).searchParams.get('start_date')!
    const day = date === '1970-01-01' ? 50 : Number(date.slice(-2))
    await route.fulfill({ json: { code: 0, data: {
      total_tokens: day * 1000,
      total_actual_cost: day * 2,
      ...(missingCost ? {} : { total_account_cost: date === '1970-01-01' ? 40 : day * 3 }),
    } } })
  })
}

async function choose(page: Page, preset: string) {
  await page.locator('.date-picker-trigger').first().click()
  await page.locator('.date-picker-preset').getByText(preset, { exact: true }).click()
  await page.locator('.date-picker-apply').click()
  await expect(page.locator('.date-picker-dropdown')).toHaveCount(0)
}

test.describe('Dashboard finance and repeatable date selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-09-04T12:00:00+08:00'))
    await page.emulateMedia({ reducedMotion: 'reduce' })
  })

  for (const path of ['/admin/dashboard', '/dashboard', '/admin/usage', '/usage']) {
    test(`date range can be selected and reopened repeatedly on ${path}`, async ({ page }) => {
      await seedConsole(page, 'v2', path.startsWith('/admin') ? {} : { user: regularUser })
      await dailyFixture(page)
      const errors: string[] = []
      page.on('pageerror', error => errors.push(error.message))
      await page.goto(`http://127.0.0.1:4173${path}`)
      for (const preset of ['今天', '近 7 天', '昨天']) {
        await choose(page, preset)
        await page.locator('.date-picker-trigger').first().click()
        const panel = page.locator('.date-picker-dropdown')
        await expect(panel).toHaveAttribute('data-zero-one-floating-panel', 'true')
        expect(await panel.evaluate(node => node.parentElement?.tagName)).not.toBe('BODY')
        const box = await panel.boundingBox()
        expect(box!.x).toBeGreaterThanOrEqual(0)
        expect(box!.y).toBeGreaterThanOrEqual(0)
        expect(box!.x + box!.width).toBeLessThanOrEqual(page.viewportSize()!.width)
        expect(box!.y + box!.height).toBeLessThanOrEqual(page.viewportSize()!.height)
        await page.keyboard.press('Escape')
        await expect(panel).toHaveCount(0)
      }
      await page.locator('.date-picker-trigger').first().click()
      await page.locator('.date-picker-input').nth(0).fill('2026-08-01')
      await page.locator('.date-picker-input').nth(1).fill('2026-08-03')
      await page.locator('.date-picker-apply').click()
      await expect(page.locator('.date-picker-dropdown')).toHaveCount(0)
      await page.locator('.date-picker-trigger').first().click()
      await expect(page.locator('.date-picker-input').nth(0)).toHaveValue('2026-08-01')
      await expect(page.locator('.date-picker-input').nth(1)).toHaveValue('2026-08-03')
      expect(errors).toEqual([])
      if (!path.startsWith('/admin')) await expect(page.locator('[data-zero-one-finance-summary]')).toHaveCount(0)
    })
  }

  test('actual billing totals and losses are shown after the token row; daily charts follow the date range', async ({ page }) => {
    await seedConsole(page)
    const requestedDays: string[] = []
    page.on('request', request => {
      const url = new URL(request.url())
      if (url.pathname === '/api/v1/admin/usage/stats') requestedDays.push(url.searchParams.get('start_date')!)
    })
    await dailyFixture(page)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const summary = page.locator('[data-zero-one-finance-summary]')
    const trends = page.locator('[data-zero-one-finance-trends]')
    await expect(summary.locator('.dashboard-finance-value')).toHaveText(['$8.0000', '−$4.0000', '$100.0000', '$60.0000'])
    expect(await summary.evaluate(node => node.previousElementSibling?.textContent)).toContain('今日 Token')
    await expect(trends).toHaveAttribute('aria-busy', 'false')
    await expect(trends.locator('canvas')).toHaveCount(3)
    expect(await trends.evaluate(node => node.previousElementSibling?.textContent)).toContain('时间范围')
    await choose(page, '近 7 天')
    await expect(trends.locator('.dashboard-finance-range')).toContainText('2026-08-29 至 2026-09-04')
    await expect(trends).toHaveAttribute('aria-busy', 'false')
    await expect(trends.locator('tbody tr')).toHaveCount(7)
    await expect(trends.locator('tbody tr').last().locator('td')).toHaveText(['2026-09-04', '4,000', '$8.0000', '−$4.0000'])
    expect(requestedDays).toContain('2026-08-29')
    const overflow = await page.locator('.dashboard-finance-summary, .dashboard-finance-chart-grid').evaluateAll(nodes => nodes.some(node => node.scrollWidth > node.clientWidth + 1))
    expect(overflow).toBe(false)
    if (page.viewportSize()!.width < 768) await page.locator('header button').first().click()
    await page.locator('aside a.sidebar-link[href="/keys"]').first().click()
    await expect(summary).toHaveCount(0)
    await expect(trends).toHaveCount(0)
  })

  test('missing cost stays unavailable and new date ranges cancel old daily reads', async ({ page }) => {
    await seedConsole(page)
    await dailyFixture(page, true)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const trends = page.locator('[data-zero-one-finance-trends]')
    await expect(trends).toHaveAttribute('aria-busy', 'false')
    await expect(trends.locator('[role="status"]')).toContainText('未能完整读取')
    await expect(trends.locator('tbody tr').last().locator('td').last()).toHaveText('—')
    await page.unroute('**/api/v1/admin/usage/stats?*')
    await page.route('**/api/v1/admin/usage/stats?*', async route => {
      const day = new URL(route.request().url()).searchParams.get('start_date')!
      if (day !== '2026-09-04') await new Promise(resolve => setTimeout(resolve, 700))
      await route.fulfill({ json: { code: 0, data: { total_tokens: 10, total_actual_cost: 5, total_account_cost: 2 } } }).catch(() => {})
    })
    await choose(page, '近 7 天')
    await choose(page, '今天')
    await expect(trends).toHaveAttribute('aria-busy', 'false')
    await expect(trends.locator('tbody tr')).toHaveCount(1)
    await expect(trends.locator('tbody tr td').first()).toHaveText('2026-09-04')
    await page.waitForTimeout(900)
    await expect(trends.locator('tbody tr')).toHaveCount(1)
    await expect(trends.locator('tbody tr td').last()).toHaveText('$3.0000')
  })
  test('a delayed finance module does not block login and initializes after the dashboard has loaded', async ({ page }) => {
    await seedConsole(page, 'v2', { authenticated: false })
    await page.route('**/assets/dashboard-finance-v1/dashboard-finance.js', route => route.abort())
    await page.goto('http://127.0.0.1:4173/login')
    await expect(page.locator('#password')).toBeVisible()
    await page.unroute('**/assets/dashboard-finance-v1/dashboard-finance.js')
    await seedConsole(page)
    await dailyFixture(page)
    await page.route('**/assets/dashboard-finance-v1/dashboard-finance.js', async route => {
      await new Promise(resolve => setTimeout(resolve, 800))
      await route.continue()
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await expect(page.getByText('今日 Token', { exact: true })).toBeVisible()
    await expect(page.locator('[data-zero-one-finance-summary]')).toBeVisible()
    await expect(page.locator('[data-zero-one-finance-trends]')).toHaveAttribute('aria-busy', 'false')
  })

  test('live billing refresh bypasses caches, pauses in the background and resumes with fresh data', async ({ page }) => {
    await page.clock.install({ time: new Date('2026-09-04T12:00:00+08:00') })
    await seedConsole(page)
    let value = 10
    let fail = false
    let requests = 0
    await page.route('**/api/v1/admin/usage/stats?*', async route => {
      requests++
      expect(new URL(route.request().url()).searchParams.get('nocache')).toBe('true')
      if (fail) return route.fulfill({ status: 503, json: { code: 503 } })
      await route.fulfill({ json: { code: 0, data: { total_tokens: 100, total_actual_cost: value, total_account_cost: 2 } } })
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const cards = page.locator('.dashboard-finance-value')
    await expect(cards).toHaveText(['$10.0000', '$8.0000', '$10.0000', '$8.0000'])
    value = 20
    await page.clock.fastForward(31000)
    await expect(cards).toHaveText(['$20.0000', '$18.0000', '$20.0000', '$18.0000'])
    await expect(page.locator('.dashboard-finance-updated')).toContainText('每 30 秒自动刷新')
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, value: true })
      document.dispatchEvent(new Event('visibilitychange'))
    })
    const before = requests
    await page.clock.fastForward(90000)
    expect(requests).toBe(before)
    value = 30
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, value: false })
      document.dispatchEvent(new Event('visibilitychange'))
      window.dispatchEvent(new Event('online'))
      window.dispatchEvent(new Event('focus'))
    })
    await expect(cards).toHaveText(['$30.0000', '$28.0000', '$30.0000', '$28.0000'])
    expect(requests - before).toBe(3)
    fail = true
    await page.clock.fastForward(31000)
    await expect(cards).toHaveText(['—', '—', '—', '—'])
    await expect(page.locator('.dashboard-finance-updated')).toContainText('本次更新未完成')
    fail = false
    await page.locator('[data-zero-one-finance-trends]').getByRole('button', { name: '重新读取' }).click()
    await expect(cards).toHaveText(['$30.0000', '$28.0000', '$30.0000', '$28.0000'])
  })

  test('failed native snapshots still permit fresh billing and cross-tab logout removes financial data', async ({ page }) => {
    await page.clock.install({ time: new Date('2026-09-04T12:00:00+08:00') })
    await seedConsole(page)
    await dailyFixture(page)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await expect(page.locator('[data-zero-one-finance-trends]')).toHaveAttribute('aria-busy', 'false')
    await page.route('**/api/v1/admin/dashboard/snapshot-v2?*', route => route.fulfill({ status: 503, json: { code: 503 } }))
    await choose(page, '昨天')
    await expect(page.locator('.dashboard-finance-range')).toContainText('2026-09-03 至 2026-09-03')
    await expect(page.locator('[data-zero-one-finance-trends]')).toHaveAttribute('aria-busy', 'false')
    await expect(page.locator('.dashboard-finance-details tbody tr')).toHaveCount(1)
    await page.evaluate(() => {
      localStorage.removeItem('auth_token')
      window.dispatchEvent(new StorageEvent('storage', { key: 'auth_token', newValue: null }))
    })
    await expect(page.locator('[data-zero-one-finance-summary]')).toHaveCount(0)
    await expect(page.locator('[data-zero-one-finance-trends]')).toHaveCount(0)
  })

  test('billing authentication recovery delegates once to the native client', async ({ page }) => {
    await seedConsole(page)
    let snapshots = 0
    page.on('request', request => { if (request.url().includes('/admin/dashboard/snapshot-v2')) snapshots++ })
    await page.route('**/api/v1/admin/usage/stats?*', route => snapshots < 2
      ? route.fulfill({ status: 401, json: { code: 401 } })
      : route.fulfill({ json: { code: 0, data: { total_tokens: 100, total_actual_cost: 9, total_account_cost: 3 } } }))
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await expect(page.locator('.dashboard-finance-value')).toHaveText(['$9.0000', '$6.0000', '$9.0000', '$6.0000'])
    expect(snapshots).toBe(2)
  })

  test('live finance cards and daily curves retain the approved visual layout', async ({ page }) => {
    await seedConsole(page)
    await dailyFixture(page)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const trends = page.locator('[data-zero-one-finance-trends]')
    await expect(trends).toHaveAttribute('aria-busy', 'false')
    await page.addStyleTag({ content: 'header { visibility: hidden !important; }' })
    await expect(page.locator('[data-zero-one-finance-summary]')).toHaveScreenshot('console-finance-summary.png')
    await expect(trends).toHaveScreenshot('console-finance-trends.png')
  })

})
