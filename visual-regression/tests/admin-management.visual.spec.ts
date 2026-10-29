import { expect, test } from '@playwright/test'
import { seedConsole } from './fixtures/api'

for (const theme of ['light', 'dark'] as const) {
  for (const locale of ['zh', 'en'] as const) {
    test(`scoped-key editor uses existing Console styles in ${theme}/${locale}`, async ({ page }, testInfo) => {
      await page.clock.setFixedTime(new Date('2026-08-29T12:00:00+08:00'))
      await seedConsole(page, 'v1', { theme, locale })
      await page.route('**/api/v1/admin/settings/admin-api-keys*', route => route.fulfill({
        contentType: 'application/json', body: JSON.stringify({ code: 0, data: {
          items: [], permissions: [
            { id: 'accounts.read', label: '读取账户', scope: 'account', category: '账户' },
            { id: 'groups.read', label: '读取分组', scope: 'group', category: '分组' },
          ],
        } }),
      }))
      await page.goto('http://127.0.0.1:4173/admin/settings')
      await page.getByRole('tab', { name: locale === 'zh' ? '安全与认证' : 'Security', exact: true }).click()
      const keys = page.locator('section.admin-access-keys')
      await expect(keys.getByTestId('admin-access-keys-empty')).toBeVisible()
      await keys.locator('[data-test="create"]').click()
      await keys.locator('[data-test="name"]').fill(locale === 'zh' ? '分组只读运维' : 'Group read-only operations')
      await expect(keys.locator('input[value="accounts.read"]')).toBeVisible()
      await expect(page.locator('[role="alert"]')).toHaveCount(0)
      await page.evaluate(() => window.scrollTo(0, 0))
      await expect(page).toHaveScreenshot(`console-scoped-key-editor-${theme}-${locale}.png`, { fullPage: true })
      expect(await keys.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
      if (testInfo.project.name === 'chromium-mobile' && locale === 'zh') {
        await page.setViewportSize({ width: 320, height: 844 })
        await page.evaluate(() => window.scrollTo(0, 0))
        await expect(page).toHaveScreenshot(`console-scoped-key-editor-320-${theme}.png`, { fullPage: true })
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      }
    })
  }
}
