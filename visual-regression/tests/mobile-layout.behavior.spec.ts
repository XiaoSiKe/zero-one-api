import { expect, test, type Locator } from '@playwright/test'
import { regularUser, seedConsole, seedLanding } from './fixtures/api'

async function expectWithinViewport(elements: Locator, width: number) {
  const overflow = await elements.evaluateAll((nodes, viewportWidth) => nodes
    .filter((node) => {
      const rect = node.getBoundingClientRect()
      return rect.width > 0 && (rect.left < -1 || rect.right > viewportWidth + 1 || node.scrollWidth > node.clientWidth + 1)
    })
    .map((node) => node.textContent?.slice(0, 80)), width)
  expect(overflow).toEqual([])
}

test.describe('Phone UI layout', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    await page.emulateMedia({ reducedMotion: 'reduce' })
  })

  for (const width of [320, 390, 430]) {
    test(`landing fields and navigation fit ${width}px without sideways scrolling`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 })
      await seedLanding(page)
      await page.goto('http://127.0.0.1:4174/_landing/')
      await expect(page.locator('.price-table tbody tr')).toHaveCount(2)
      await expectWithinViewport(page.locator('.integration-tab, .filter-tabs button, .price-table tbody th, .price-table tbody td, .footer-column a'), width)
      const table = page.locator('.price-table-wrap')
      expect(await table.evaluate((node) => node.scrollWidth - node.clientWidth)).toBeLessThanOrEqual(1)
      const tab = page.getByRole('tab', { name: 'Claude Code CLI', exact: true })
      await tab.click()
      await expect(tab).toHaveAttribute('aria-selected', 'true')
      await expectWithinViewport(page.locator('.integration-copy h2, .integration-preview:not([hidden]) code'), width)
      await page.getByRole('searchbox', { name: '搜索模型或分组' }).fill('no-matching-model')
      await expect(page.getByText('没有匹配的模型')).toBeVisible()
      await expectWithinViewport(page.locator('.price-empty-row td'), width)
      await page.getByRole('button', { name: '清除筛选' }).click()
      await expect(page.locator('.price-table tbody tr')).toHaveCount(2)
    })

    test(`user quick actions follow performance stats at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 })
      await seedConsole(page, 'v2', { user: regularUser })
      await page.goto('http://127.0.0.1:4173/dashboard')
      const actions = page.locator('.card').filter({ has: page.getByRole('heading', { name: '快捷操作', exact: true }) })
      const response = page.locator('.card').filter({ has: page.getByText('平均响应', { exact: true }) })
      await expect(actions).toBeVisible()
      await expect(page.locator('main')).toHaveAttribute('data-zero-one-dashboard-layout', 'user')
      const actionRect = await actions.boundingBox()
      const responseRect = await response.boundingBox()
      expect(actionRect!.y - responseRect!.y - responseRect!.height).toBeCloseTo(16, 0)
      await expectWithinViewport(actions.locator('button'), width)
      await actions.getByRole('button', { name: /创建 API 密钥/ }).click()
      await expect(page).toHaveURL(/\/keys$/)
      await expect(page.locator('main')).not.toHaveAttribute('data-zero-one-dashboard-layout')
    })
  }
})
