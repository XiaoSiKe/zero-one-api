import { expect, test } from '@playwright/test'
import { seedConsole } from './fixtures/api'

test.describe('Console visual contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
    await seedConsole(page)
  })

  test('serves the approved recovered Console snapshot', async ({ page }) => {
    const externalRequests: string[] = []
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.hostname !== '127.0.0.1') externalRequests.push(request.url())
    })
    const response = await page.goto('http://127.0.0.1:4173/login')
    expect(response?.status()).toBe(200)
    const html = await response!.text()
    expect(html).toContain('/assets/redeem-cachebust-20260820-fix6/index-9xJBhx8B.js')
    expect(html).toContain('/assets/zero-one-local-preview-guard-v1.js')
    expect(html).toContain('/assets/zero-one-floating-panels-v1.js')
    expect(html).not.toContain('/src/main.ts')
    expect(
      await page.evaluate(
        () =>
          (window as Window & { __ZERO_ONE_LOCAL_PREVIEW__?: boolean })
            .__ZERO_ONE_LOCAL_PREVIEW__,
      ),
    ).toBe(true)
    await expect(page).toHaveURL('http://127.0.0.1:4173/admin/dashboard')

    await page.evaluate(() => {
      const link = document.createElement('a')
      link.id = 'external-preview-link'
      link.href = 'https://example.com/production-only'
      link.textContent = 'external preview link'
      document.body.append(link)
    })
    const previewUrlBeforeExternalClick = page.url()
    await page.locator('#external-preview-link').dispatchEvent('click')
    await expect(page).toHaveURL(previewUrlBeforeExternalClick)
    await expect(page.locator('[data-zero-one-local-preview-notice]')).toHaveText(
      '本地预览已阻止外部跳转，当前页面仍连接本地 Docker。',
    )
    expect(externalRequests).toEqual([])
  })

  test('shell expanded in light mode and announcement table', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { name: '公告管理' })).toBeVisible()
    await expect(page.getByText('稳定版本发布公告')).toBeVisible()
    await expect(page).toHaveScreenshot('console-shell-light-expanded.png')
  })

  test('shell collapsed in dark mode', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await page.getByRole('button', { name: '深色模式' }).click()
    await page.locator('button[aria-label="收起"]').click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.locator('aside')).toHaveClass(/w-\[72px\]/)
    await expect(page).toHaveScreenshot('console-shell-dark-collapsed.png')
  })

  test('announcement editor dialog', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await page.getByRole('button', { name: '创建公告' }).first().click()
    const dialog = page.getByRole('dialog', { name: '创建公告' })
    await expect(dialog).toBeVisible()
    await expect(dialog).not.toHaveClass(/modal-enter-/)
    await expect(dialog).toHaveScreenshot('console-announcement-editor.png')
  })

  test('channel status v1', async ({ page }) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v1')
    await page.goto('http://127.0.0.1:4173/monitor')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('OpenAI 主线路')).toBeVisible()
    await expect(page.getByText('OPERATIONAL')).toBeVisible()
    await expect(page).toHaveScreenshot('console-channel-status-v1.png')
  })

  test('channel status v2', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/monitor')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('gpt-5').first()).toBeVisible()
    await expect(page).toHaveScreenshot('console-channel-status-v2.png')
  })

  test('model plaza pricing', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/model-plaza?embedded=1')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('claude-sonnet-4-6')).toBeVisible()
    await expect(page).toHaveScreenshot('console-model-plaza-pricing.png')
  })

  test('dashboard date panel stays above the chart cards', async ({ page }) => {
    const externalRequests: string[] = []
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.hostname !== '127.0.0.1') externalRequests.push(request.url())
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('今日请求')).toBeVisible()

    await page.locator('.date-picker-trigger').click()
    const panel = page.locator('.date-picker-dropdown')
    await expect(panel).toBeVisible()
    await expect(panel).toHaveCSS('position', 'fixed')
    await expect(panel).toHaveAttribute('data-zero-one-floating-panel', 'true')
    expect(await panel.evaluate((element) => element.parentElement === document.body)).toBe(true)

    const panelOwnsTopmostPoint = await panel.evaluate((element) => {
      const rect = element.getBoundingClientRect()
      const target = document.elementFromPoint(rect.left + rect.width / 2, rect.bottom - 12)
      return target === element || element.contains(target)
    })
    expect(panelOwnsTopmostPoint).toBe(true)

    const panelBox = await panel.boundingBox()
    expect(panelBox).not.toBeNull()
    expect(panelBox!.x).toBeGreaterThanOrEqual(0)
    expect(panelBox!.y).toBeGreaterThanOrEqual(0)
    expect(panelBox!.x + panelBox!.width).toBeLessThanOrEqual(1440)
    expect(panelBox!.y + panelBox!.height).toBeLessThanOrEqual(900)
    expect(externalRequests).toEqual([])
    await expect(page).toHaveScreenshot('console-dashboard-date-picker.png')
  })

  test('floating overlay handles the shared recovered Console panels', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/login')
    await page.evaluate(() => {
      const fixtures = [
        '<div class="relative"><button class="date-picker-trigger">date</button><div class="date-picker-dropdown">date panel</div></div>',
        '<div class="relative"><button class="select-trigger">proxy</button><div class="select-dropdown" data-v-60ed8961>proxy panel</div></div>',
        '<div class="relative mb-3"><div class="cursor-pointer" tabindex="0">models</div><div class="absolute left-0 right-0 top-full z-50"><div data-testid="model-option">model panel</div></div></div>',
        '<div class="relative"><button>refresh</button><div class="absolute right-0 z-20 mt-1 w-44">refresh panel</div></div>',
      ]
      const host = document.createElement('div')
      host.id = 'floating-overlay-fixtures'
      host.innerHTML = fixtures.join('')
      document.body.append(host)
    })

    const panels = page.locator('[data-zero-one-floating-panel="true"]')
    await expect(panels).toHaveCount(4)
    for (let index = 0; index < 4; index += 1) {
      const panel = panels.nth(index)
      await expect(panel).toHaveCSS('position', 'fixed')
      expect(await panel.evaluate((element) => element.parentElement === document.body)).toBe(true)
    }
  })

  test('floating overlay flips and clamps the date panel on a narrow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 })
    await page.goto('http://127.0.0.1:4173/login')
    await page.evaluate(() => {
      const container = document.createElement('div')
      container.id = 'narrow-date-fixture'
      Object.assign(container.style, {
        position: 'fixed',
        right: '0',
        bottom: '12px',
        width: '160px',
      })
      container.innerHTML = '<button class="date-picker-trigger" style="width:160px;height:40px">date</button><div class="date-picker-dropdown" style="height:320px">date panel</div>'
      document.body.append(container)
    })

    const trigger = page.locator('#narrow-date-fixture .date-picker-trigger')
    const panel = page.locator('.date-picker-dropdown[data-zero-one-floating-panel="true"]')
    await expect(panel).toBeVisible()

    const triggerBox = await trigger.boundingBox()
    const panelBox = await panel.boundingBox()
    expect(triggerBox).not.toBeNull()
    expect(panelBox).not.toBeNull()
    expect(panelBox!.x).toBe(16)
    expect(panelBox!.x + panelBox!.width).toBeLessThanOrEqual(304)
    expect(panelBox!.y).toBeLessThan(triggerBox!.y)
    expect(panelBox!.y + panelBox!.height).toBeLessThanOrEqual(704)

    await page.evaluate(() => {
      const container = document.querySelector<HTMLElement>('#narrow-date-fixture')!
      container.style.top = '20px'
      container.style.bottom = 'auto'
      window.dispatchEvent(new Event('resize'))
    })

    await expect.poll(async () => (await panel.boundingBox())?.y).toBeGreaterThan(60)
    const movedPanelBox = await panel.boundingBox()
    const movedTriggerBox = await trigger.boundingBox()
    expect(movedPanelBox!.y).toBeGreaterThan(movedTriggerBox!.y + movedTriggerBox!.height)
    expect(movedPanelBox!.y + movedPanelBox!.height).toBeLessThanOrEqual(704)
  })

  test('benefit and mystery-box generation forms', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/redeem')
    await page.evaluate(() => document.fonts.ready)
    const benefit = page.locator('[data-test="generate-benefit"]')
    const mysteryBox = page.locator('[data-test="generate-mystery-box"]')
    await expect(benefit).toBeVisible()
    await expect(mysteryBox).toBeVisible()

    await benefit.click()
    await expect(page.locator('input[step="0.01"]')).toBeVisible()
    await expect(page).toHaveScreenshot('console-redeem-benefit.png')

    await page.getByRole('button', { name: '取消' }).click()
    await mysteryBox.click()
    await expect(page.locator('input[min="0.01"][step="0.01"]')).toHaveCount(2)
    await expect(page).toHaveScreenshot('console-redeem-mystery-box.png')
  })

  test('user redeem form', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/redeem')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('#code')).toBeVisible()
    await expect(page).toHaveScreenshot('console-user-redeem.png')
  })
})
