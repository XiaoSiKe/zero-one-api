import { expect, test, type Page } from '@playwright/test'
import { regularUser, seedConsole } from './fixtures/api'

async function choose(page: Page, preset: string) {
  await page.locator('.date-picker-trigger').first().click()
  await page.locator('.date-picker-preset').getByText(preset, { exact: true }).click()
  await page.locator('.date-picker-apply').click()
  await expect(page.locator('.date-picker-dropdown')).toHaveCount(0)
}

test.describe('Dashboard consumption cards and repeatable date selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-09-04T12:00:00+08:00'))
    await page.emulateMedia({ reducedMotion: 'reduce' })
  })

  for (const path of ['/admin/dashboard', '/dashboard', '/admin/usage', '/usage']) {
    test(`date range can be selected and reopened repeatedly on ${path}`, async ({ page }) => {
      await seedConsole(page, 'v2', path.startsWith('/admin') ? {} : { user: regularUser })
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
    })
  }

  test('the existing API Key and Provider Account cards show total and today consumption', async ({ page }) => {
    await seedConsole(page)
    const financeRequests: string[] = []
    page.on('request', request => {
      if (new URL(request.url()).pathname === '/api/v1/admin/usage/stats') {
        financeRequests.push(request.url())
      }
    })

    await page.goto('http://127.0.0.1:4173/admin/dashboard')

    const coreRow = page.locator('.admin-dashboard-surface > .grid.grid-cols-2').first()
    const coreCards = coreRow.locator(':scope > .card')
    await expect(coreCards).toHaveCount(4)
    await expect(coreCards.nth(0)).toContainText('总消费')
    await expect(coreCards.nth(0)).toContainText('$1,940.00')
    await expect(coreCards.nth(0)).toContainText('实际')
    await expect(coreCards.nth(1)).toContainText('今日消费')
    await expect(coreCards.nth(1)).toContainText('$57.09')
    await expect(coreCards.nth(1)).toContainText('实际')
    await expect(page.getByText('今日收益', { exact: true })).toHaveCount(0)
    await expect(page.getByText('总收益', { exact: true })).toHaveCount(0)
    await expect(page.getByText('每日收益', { exact: true })).toHaveCount(0)
    await expect(page.locator('[data-zero-one-finance-summary], [data-zero-one-finance-trends]')).toHaveCount(0)
    expect(financeRequests).toEqual([])

    await expect(coreRow).toHaveScreenshot('console-dashboard-spend-cards.png')
  })

  test('the real date picker fits a 320px screen after reopening', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 })
    await seedConsole(page)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await choose(page, '昨天')
    await page.locator('.date-picker-trigger').click()
    const panel = page.locator('.date-picker-dropdown[data-zero-one-floating-panel="true"]')
    const box = await panel.boundingBox()
    expect(box!.x).toBeGreaterThanOrEqual(16)
    expect(box!.x + box!.width).toBeLessThanOrEqual(304)
    expect(await panel.evaluate(node => node.scrollWidth - node.clientWidth)).toBeLessThanOrEqual(1)
    await expect(panel.locator('.date-picker-custom')).toHaveCSS('flex-direction', 'column')
    await panel.locator('.date-picker-input').first().fill('2026-08-01')
    await panel.locator('.date-picker-apply').click()
    await expect(panel).toHaveCount(0)
  })
})
