import { expect, test } from '@playwright/test'
import { seedLanding } from './fixtures/api'

test.describe('Landing visual contracts', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
  })

  test('desktop public announcements', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174')
    await expect(page.locator('[data-visual-ready="true"]')).toBeVisible()
    await page.evaluate(() => document.fonts.ready)
    await page.getByRole('button', { name: '公告', exact: true }).click()
    const dialog = page.getByRole('dialog', { name: '公告' })
    await expect(dialog.getByText('稳定版本发布公告')).toBeVisible()
    await expect(page).toHaveScreenshot('landing-public-announcements.png')
  })

  test('desktop active-probe status', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page, { status: 'active_probe' })
    await page.goto('http://127.0.0.1:4174/#status')
    await page.evaluate(() => document.fonts.ready)
    const status = page.locator('#status')
    await expect(status.getByText('99.92%')).toBeVisible()
    await expect(status).toHaveScreenshot('landing-active-probe-status.png')
  })

  test('mobile traffic status keeps the recovered empty-panel UI', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    await seedLanding(page, { status: 'traffic' })
    await page.goto('http://127.0.0.1:4174/#status')
    await page.evaluate(() => document.fonts.ready)
    const status = page.locator('#status')
    await expect(status.getByText('渠道', { exact: true })).toBeVisible()
    await expect(status.locator('.status-monitor-row')).toHaveCount(0)
    await expect(status).toHaveScreenshot('landing-mobile-traffic-status.png')
  })

  test('mobile status error and retry', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    await seedLanding(page, { status: 'error' })
    await page.goto('http://127.0.0.1:4174/#status')
    await page.evaluate(() => document.fonts.ready)
    const status = page.locator('#status')
    await expect(status.getByRole('button', { name: '重新读取' })).toBeVisible()
    await expect(status).toHaveScreenshot('landing-mobile-status-error.png')
  })

  test('channel status title matches realtime pricing typography', async ({ page }) => {
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174')
    await expect(page.locator('[data-visual-ready="true"]')).toBeVisible()

    const styles = await page.evaluate(() => {
      const read = (id: string) => {
        const heading = document.getElementById(id)!
        const base = heading.querySelector<HTMLElement>('.shiny-text__base')!
        const headingStyle = getComputedStyle(heading)
        const baseStyle = getComputedStyle(base)
        return {
          fontSize: headingStyle.fontSize,
          fontWeight: headingStyle.fontWeight,
          lineHeight: headingStyle.lineHeight,
          letterSpacing: headingStyle.letterSpacing,
          color: baseStyle.color,
          backgroundImage: baseStyle.backgroundImage,
        }
      }
      return { pricing: read('pricing-title'), status: read('status-title') }
    })

    expect(styles.status).toEqual(styles.pricing)
  })

  test('requested title shine is deterministic and reduced-motion safe', async ({ page }) => {
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174')
    await expect(page.locator('[data-visual-ready="true"]')).toBeVisible()

    const titles = page.locator([
      '#quick-start-title > .shiny-text',
      '#pricing-title > .shiny-text',
      '#value-pricing-title > .shiny-text',
      '#status-title > .shiny-text',
      '.footer-brand strong > .shiny-text',
      '.footer-brand p > .shiny-text',
    ].join(','))
    await expect(titles).toHaveCount(6)
    await expect(titles.first()).toHaveClass(/shiny-text--static/)
    await expect(titles.first().locator('.shiny-text__shine')).toHaveCSS('animation-name', 'none')

    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(titles.first().locator('.shiny-text__shine')).toHaveCSS('opacity', '0')
    await expect(titles.first().locator('.shiny-text__base')).toBeVisible()
  })

  test('footer shine layers overlap at the larger, slower typography', async ({ page }) => {
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174')
    await expect(page.locator('[data-visual-ready="true"]')).toBeVisible()

    const footerText = page.locator('.footer-brand .shiny-text')
    await expect(footerText).toHaveCount(2)

    const result = await footerText.evaluateAll((roots) =>
      roots.map((root) => {
        const base = root.querySelector<HTMLElement>('.shiny-text__base')!
        const shine = root.querySelector<HTMLElement>('.shiny-text__shine')!
        const baseRect = base.getBoundingClientRect()
        const shineRect = shine.getBoundingClientRect()
        return {
          speed: getComputedStyle(root).getPropertyValue('--shiny-text-speed'),
          fontSize: getComputedStyle(root).fontSize,
          baseRect: [baseRect.x, baseRect.y, baseRect.width, baseRect.height],
          shineRect: [shineRect.x, shineRect.y, shineRect.width, shineRect.height],
        }
      }),
    )

    expect(result).toEqual([
      expect.objectContaining({ speed: '2.6s', fontSize: '24px' }),
      expect.objectContaining({ speed: '2.6s', fontSize: '16px' }),
    ])
    for (const item of result) expect(item.shineRect).toEqual(item.baseRect)
  })

  test('desktop model plaza pricing', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#pricing')
    await page.evaluate(() => document.fonts.ready)
    const pricing = page.locator('#pricing')
    await expect(pricing.getByText('claude-sonnet-4-6')).toBeVisible()
    await expect(pricing).toHaveScreenshot('landing-model-plaza-pricing.png')
  })

  test('desktop configured token discount', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#billing')
    await page.evaluate(() => document.fonts.ready)
    const billing = page.locator('#billing')
    await expect(billing.getByRole('heading', { name: '低至约 0.19 折' })).toBeVisible()
    await expect(billing).toHaveScreenshot('landing-token-discount.png')
  })

  test('mobile configured token discount', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#billing')
    await page.evaluate(() => document.fonts.ready)
    const billing = page.locator('#billing')
    await expect(billing.getByRole('heading', { name: '低至约 0.19 折' })).toBeVisible()
    await expect(billing).toHaveScreenshot('landing-mobile-token-discount.png')
  })
})
