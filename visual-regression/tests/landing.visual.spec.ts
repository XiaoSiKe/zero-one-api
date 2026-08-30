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

  test('desktop integration copy aligns with the preview card', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#quick-start', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => document.fonts.ready)

    const layout = await page.evaluate(() => {
      const rect = (selector: string) =>
        document.querySelector<HTMLElement>(selector)!.getBoundingClientRect()
      const badge = rect('.integration-badge')
      const title = rect('.integration-copy h2')
      const actions = rect('.integration-actions')
      const preview = rect('.integration-preview:not([hidden])')
      const panel = document.querySelector<HTMLElement>('.integration-panel')!
      const steps = document.querySelector<HTMLElement>('.integration-steps')!
      const step = document.querySelector<HTMLElement>('.integration-steps p')!
      return {
        badgeTopDelta: badge.top - preview.top,
        actionsBottomDelta: actions.bottom - preview.bottom,
        titleTopDelta: title.top - preview.top,
        panelBackground: getComputedStyle(panel).backgroundColor,
        stepsMarginTop: getComputedStyle(steps).marginTop,
        stepFontSize: getComputedStyle(step).fontSize,
      }
    })

    expect(layout.badgeTopDelta).toBeCloseTo(0, 0)
    expect(layout.actionsBottomDelta).toBeCloseTo(0, 0)
    expect(layout.titleTopDelta).toBeCloseTo(70, 0)
    expect(layout.panelBackground).toBe('rgba(9, 9, 9, 0.3)')
    expect(layout.stepsMarginTop).toBe('48px')
    expect(layout.stepFontSize).toBe('17.6px')
  })

  test('pricing focus, billing copy, and specular actions share the requested styles', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#pricing', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => document.fonts.ready)

    const search = page.getByRole('searchbox', { name: '搜索模型或分组' })
    const searchFrame = page.locator('.model-search')
    const unfocusedSearchStyle = await searchFrame.evaluate((element) => {
      const style = getComputedStyle(element)
      return { borderColor: style.borderColor, background: style.backgroundColor, boxShadow: style.boxShadow }
    })
    await search.click()
    const focusedSearchStyle = await searchFrame.evaluate((element) => {
      const style = getComputedStyle(element)
      return { borderColor: style.borderColor, background: style.backgroundColor, boxShadow: style.boxShadow }
    })
    expect(focusedSearchStyle).toEqual(unfocusedSearchStyle)
    expect(focusedSearchStyle).toEqual({
      borderColor: 'rgba(255, 255, 255, 0.16)',
      background: 'rgba(255, 255, 255, 0.04)',
      boxShadow: 'none',
    })
    const focusedInputStyle = await search.evaluate((element) => {
      const style = getComputedStyle(element)
      return { outline: style.outlineStyle, boxShadow: style.boxShadow }
    })
    expect(focusedInputStyle).toEqual({ outline: 'none', boxShadow: 'none' })

    const billingStyles = await page.evaluate(() => {
      const description = document.querySelector<HTMLElement>('.value-pricing-description span:first-child')!
      const reasons = document.querySelector<HTMLElement>('#value-pricing-reasons-title')!
      const titleBase = document.querySelector<HTMLElement>('#value-pricing-title .shiny-text__base')!
      const summaryFrame = document.querySelector<HTMLElement>('.value-pricing-summary')!
      const summaryTitle = summaryFrame.querySelector<HTMLElement>('h3')!
      const summaryBase = summaryTitle.querySelector<HTMLElement>('.shiny-text__base')!
      const pricingAction = document.querySelector<HTMLElement>('.value-pricing-action')!
      const badgeTopDeltas = Array.from(document.querySelectorAll<HTMLElement>('.price-table tbody tr'))
        .map((row) => Array.from(row.querySelectorAll<HTMLElement>('.rate-badge')))
        .filter((badges) => badges.length === 2)
        .map(([inputBadge, outputBadge]) =>
          outputBadge.getBoundingClientRect().top - inputBadge.getBoundingClientRect().top)
      return {
        descriptionFontSize: getComputedStyle(description).fontSize,
        reasonsFontSize: getComputedStyle(reasons).fontSize,
        titleBackground: getComputedStyle(titleBase).backgroundImage,
        summaryBackground: getComputedStyle(summaryBase).backgroundImage,
        summaryHasShine: Boolean(summaryTitle.querySelector('.shiny-text__shine')),
        summaryPaddingBottom: getComputedStyle(summaryFrame).paddingBottom,
        pricingActionBorderTop: getComputedStyle(pricingAction).borderTopWidth,
        badgeTopDeltas,
      }
    })
    expect(billingStyles.descriptionFontSize).toBe(billingStyles.reasonsFontSize)
    expect(billingStyles.summaryBackground).toBe(billingStyles.titleBackground)
    expect(billingStyles.summaryHasShine).toBe(true)
    expect(billingStyles.summaryPaddingBottom).toBe('8px')
    expect(billingStyles.pricingActionBorderTop).toBe('0px')
    expect(billingStyles.badgeTopDeltas.length).toBeGreaterThan(0)
    for (const topDelta of billingStyles.badgeTopDeltas) expect(topDelta).toBeCloseTo(0, 1)

    const specularAction = page.locator('.landing-action[data-specular-state="ready"]').first()
    await expect(specularAction).toBeVisible()
    const actionLayers = await specularAction.evaluate((element) => {
      const style = getComputedStyle(element)
      return { background: style.backgroundColor, backgroundImage: style.backgroundImage, borderColor: style.borderColor, boxShadow: style.boxShadow }
    })
    expect(actionLayers).toEqual({
      background: 'rgba(82, 82, 82, 0.26)',
      backgroundImage: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      boxShadow: 'none',
    })
    await expect(page.locator('.specular-effects-canvas')).toHaveCount(1)

    const heroActions = page.locator('.hero-actions .landing-action')
    await expect(heroActions).toHaveCount(2)
    await heroActions.first().scrollIntoViewIfNeeded()
    const readHeroGeometry = () =>
      heroActions.evaluateAll((elements) =>
        elements.map((element) => {
          const rect = element.getBoundingClientRect()
          return {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            transform: getComputedStyle(element).transform,
          }
        }),
      )
    const geometryBeforeHover = await readHeroGeometry()
    const firstHeroAction = await heroActions.first().boundingBox()
    expect(firstHeroAction).not.toBeNull()
    if (firstHeroAction) {
      for (let offset = 4; offset < firstHeroAction.width; offset += 8) {
        await page.mouse.move(firstHeroAction.x + offset, firstHeroAction.y + firstHeroAction.height / 2)
      }
    }
    expect(await readHeroGeometry()).toEqual(geometryBeforeHover)
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
    await expect(pricing.getByRole('group', { name: '按平台筛选' }).getByRole('button'))
      .toHaveText(['All', 'Claude', 'OpenAI'])
    await expect(pricing.getByRole('button', { name: 'Gemini' })).toHaveCount(0)
    await page.addStyleTag({
      content: `
        .skip-link,
        .threads-page-background,
        .site-background-shade,
        .site-header,
        .announcement-bar,
        .specular-effects-canvas { display: none !important; }
        #pricing { background: #000 !important; }
      `,
    })
    await expect(pricing).toHaveScreenshot('landing-model-plaza-pricing.png')
  })

  test('desktop configured token discount', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#billing')
    await page.evaluate(() => document.fonts.ready)
    const billing = page.locator('#billing')
    await expect(billing.getByRole('heading', { name: '低至约 0.19 折' })).toBeVisible()
    await expect(billing).toHaveScreenshot('landing-token-discount.png', {
      maxDiffPixels: 500,
    })
  })

  test('mobile configured token discount', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    await seedLanding(page)
    await page.goto('http://127.0.0.1:4174/#billing')
    await page.evaluate(() => document.fonts.ready)
    const billing = page.locator('#billing')
    await expect(billing.getByRole('heading', { name: '低至约 0.19 折' })).toBeVisible()
    await expect(billing).toHaveScreenshot('landing-mobile-token-discount.png', {
      maxDiffPixels: 500,
    })
  })
})
