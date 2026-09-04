import { expect, test, type Page } from '@playwright/test'
import { adminUser, regularUser, seedConsole } from './fixtures/api'

const consoleOrigin = 'http://127.0.0.1:4173'

const imageKeys = [
  {
    id: 101,
    user_id: adminUser.id,
    key: 'sk-visual-image-primary',
    name: '生图测试',
    group_id: 201,
    status: 'active',
    group: { id: 201, name: '生图专用模型', platform: 'openai', allow_image_generation: true },
  },
  {
    id: 102,
    user_id: adminUser.id,
    key: 'sk-visual-image-backup',
    name: '备用生图',
    group_id: 202,
    status: 'active',
    group: { id: 202, name: '备用图像模型', platform: 'openai', allow_image_generation: true },
  },
]

const imageTutorialMenu = {
  id: 'legacy-image-tutorial',
  label: '生图教程',
  icon_svg: '',
  url: 'https://docs.01yapi.test/image-generation',
  visibility: 'admin' as const,
  placement: 'sidebar' as const,
  sort_order: 0,
}

function collectRuntimeErrors(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  return errors
}

test.describe('Recovered online image generation contracts', () => {
  test.beforeEach(async ({ page }) => {
    await seedConsole(page, 'v2', {
      user: adminUser,
      imageGenerationKeys: imageKeys,
      customMenuItems: [imageTutorialMenu],
      userSidebarOrder: ['/custom/legacy-image-tutorial', '/images', '/keys'],
      theme: 'dark',
    })
    await page.route('**/v1/models', async (route) => {
      const authorization = route.request().headers().authorization
      const models = authorization === 'Bearer sk-visual-image-backup'
        ? ['gpt-image-1.5', 'gpt-image-1']
        : ['gpt-image-2', 'dall-e-3']
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({ object: 'list', data: models.map((id) => ({ id })) }),
      })
    })
  })

  test('keeps one page header and follows the requested compact control order', async ({ page }, testInfo) => {
    const runtimeErrors = collectRuntimeErrors(page)
    await page.goto(`${consoleOrigin}/images`)
    await page.waitForTimeout(1_000)
    expect(runtimeErrors).toEqual([])

    const host = page.locator('#zero-one-online-image')
    await expect(host.getByText('模型选择', { exact: true })).toBeVisible()
    await expect(page.locator('header h1')).toHaveText('在线生图')
    await expect(host.locator('h1')).toHaveCount(0)
    await expect(host.getByText('清空结果', { exact: true })).toHaveCount(0)
    await expect(host.getByText(/\/v1\/models/)).toHaveCount(0)

    const controlOrder = await host.locator('[data-testid="image-generation-form"]').evaluate((form) => {
      const testIds = ['create-image-api-key', 'api-key-row', 'model-count-row', 'size-control', 'quality-format-row', 'reference-images-panel', 'image-tutorial-link', 'prompt-panel', 'results-panel']
      return testIds.map((testId) => Array.from(form.querySelectorAll('*')).indexOf(
        form.querySelector(`[data-testid="${testId}"]`)!,
      ))
    })
    expect(controlOrder).toEqual([...controlOrder].sort((left, right) => left - right))
    const apiKeyRow = host.locator('[data-testid="api-key-row"]')
    await expect(apiKeyRow.locator('[data-testid="api-key-select"]')).toBeVisible()
    await expect(apiKeyRow.locator('[data-testid="refresh-keys"]')).toBeVisible()
    await expect(host.locator('[data-testid="create-image-api-key"]')).toHaveAttribute('href', '/keys')
    await expect(host.locator('[data-testid="image-tutorial-link"]')).toHaveAttribute('href', '/custom/legacy-image-tutorial')
    await expect(page.locator('aside a[href="/custom/legacy-image-tutorial"]')).toHaveCount(1)
    expect(await host.locator('[data-testid="image-tutorial-link"]').getAttribute('href'))
      .toBe(await page.locator('aside a[href="/custom/legacy-image-tutorial"]').getAttribute('href'))
    await expect(page.locator('aside a[data-zero-one-image-tutorial-link="true"]')).toHaveCount(0)
    if (testInfo.project.name === 'chromium-desktop') {
      const positions = await apiKeyRow.evaluate((row) => {
        const select = row.querySelector('[data-testid="api-key-select"] .select-trigger')
        const refresh = row.querySelector('[data-testid="refresh-keys"]')
        if (!select || !refresh) return null
        const selectRect = select.getBoundingClientRect()
        const refreshRect = refresh.getBoundingClientRect()
        return {
          sameRow: Math.abs(selectRect.top - refreshRect.top) < 2,
          refreshIsRight: refreshRect.left >= selectRect.right,
        }
      })
      expect(positions).toEqual({ sameRow: true, refreshIsRight: true })
    }
    expect(runtimeErrors).toEqual([])
  })

  test('loads model options from the selected key and keeps the planned action hierarchy', async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page)
    const modelAuthorizations: string[] = []
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === '/v1/models') {
        modelAuthorizations.push(request.headers().authorization || '')
      }
    })

    await page.goto(`${consoleOrigin}/images`)
    const host = page.locator('#zero-one-online-image')
    await expect(host.getByRole('button', { name: '模型选择' })).toContainText('gpt-image-2')

    await host.locator('[data-testid="api-key-select"] .select-trigger').click()
    await page.getByText('备用生图 · 备用图像模型', { exact: true }).click()
    await expect(host.getByRole('button', { name: '模型选择' })).toContainText('gpt-image-1.5')
    expect(modelAuthorizations).toContain('Bearer sk-visual-image-primary')
    expect(modelAuthorizations).toContain('Bearer sk-visual-image-backup')

    const refresh = host.locator('[data-testid="refresh-keys"]')
    const generate = host.locator('[data-testid="start-generation"]')
    await expect(refresh).toHaveClass(/btn-secondary/)
    await expect(host.locator('[data-testid="create-image-api-key"]')).toHaveClass(/btn-secondary/)
    await expect(host.locator('[data-testid="image-tutorial-link"]')).toHaveClass(/btn-secondary/)
    await expect(refresh).not.toHaveClass(/btn-primary/)
    await expect(refresh).toHaveClass(/btn-specular/)
    await expect(refresh).toHaveCSS('border-radius', '8px')
    await expect(refresh).not.toHaveCSS('background-color', 'rgb(255, 255, 255)')
    await expect(host.locator('[data-testid="image-size-trigger"]')).not.toHaveCSS('background-color', 'rgb(255, 255, 255)')
    await expect(generate).toHaveClass(/btn-primary/)
    await expect(generate).not.toHaveCSS('background-color', 'rgb(255, 255, 255)')
    expect(runtimeErrors).toEqual([])
  })

  test('submits and renders an image from a mobile browser', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile')
    const runtimeErrors = collectRuntimeErrors(page)
    const requests: Array<{ authorization: string; payload: Record<string, unknown> }> = []
    await page.route('**/v1/images/generations', async (route) => {
      requests.push({
        authorization: route.request().headers().authorization || '',
        payload: route.request().postDataJSON() as Record<string, unknown>,
      })
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({
          model: 'gpt-image-2',
          data: [{
            b64_json: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
            mime_type: 'image/png',
          }],
        }),
      })
    })

    await page.goto(`${consoleOrigin}/images`)
    const host = page.locator('#zero-one-online-image')
    await expect(host.getByRole('button', { name: '模型选择' })).toContainText('gpt-image-2')
    await host.locator('textarea').fill('一只坐在月球上的橘猫')
    await host.getByTestId('start-generation').click()

    await expect.poll(() => requests).toHaveLength(1)
    expect(requests[0]).toEqual({
      authorization: 'Bearer sk-visual-image-primary',
      payload: expect.objectContaining({
        model: 'gpt-image-2',
        prompt: '一只坐在月球上的橘猫',
        n: 1,
        size: '1152x2048',
        quality: 'high',
        response_format: 'b64_json',
      }),
    })
    await expect(host.locator('[data-testid="results-panel"] img')).toHaveCount(1)
    await expect(host.locator('[data-testid="results-panel"] img')).toHaveAttribute(
      'src',
      /^data:image\/png;base64,/,
    )
    expect(runtimeErrors).toEqual([])
  })

  test('keeps the online image link in the approved sidebar without a document reload', async ({ page }, testInfo) => {
    const runtimeErrors = collectRuntimeErrors(page)
    await page.goto(`${consoleOrigin}/admin/dashboard`)
    const continuityMarker = await page.evaluate(() => {
      const marker = `online-image-${Math.random()}`
      ;(window as typeof window & { __ONLINE_IMAGE_CONTINUITY__?: string }).__ONLINE_IMAGE_CONTINUITY__ = marker
      return marker
    })
    const link = page.locator('aside a[href="/images"]')
    await expect(link).toHaveText('在线生图')
    if (testInfo.project.name === 'chromium-mobile') {
      await page.getByRole('button', { name: '切换菜单' }).click()
    }
    await link.click()
    await expect(page).toHaveURL(`${consoleOrigin}/images`)
    await expect(page.locator('#zero-one-online-image')).not.toBeEmpty()
    expect(await page.evaluate(() => (
      window as typeof window & { __ONLINE_IMAGE_CONTINUITY__?: string }
    ).__ONLINE_IMAGE_CONTINUITY__)).toBe(continuityMarker)
    expect(runtimeErrors).toEqual([])
  })

  for (const keyState of ['empty', 'unavailable'] as const) {
    test(`new user can discover Online Images with ${keyState} keys`, async ({ page }, testInfo) => {
      await page.unroute('**/api/v1/**')
      await seedConsole(page, 'v2', { user: regularUser, imageGenerationKeys: [] })
      await page.route('**/api/v1/keys**', async (route) => {
        await route.fulfill({
          status: keyState === 'empty' ? 200 : 503,
          contentType: 'application/json',
          body: JSON.stringify({ code: keyState === 'empty' ? 0 : 503,
            data: { items: [], total: 0, page: 1, page_size: 100, pages: 1 } }),
        })
      })
      let generations = 0
      page.on('request', (request) => {
        if (request.url().includes('/v1/images/')) generations += 1
      })
      await page.goto(`${consoleOrigin}/dashboard`)
      const link = page.locator('aside a[href="/images"]')
      await expect(link).toHaveCount(1)
      await page.reload()
      await expect(link).toHaveCount(1)
      if (testInfo.project.name === 'chromium-mobile') {
        await page.getByRole('button', { name: '切换菜单' }).click()
      }
      if (keyState === 'empty') {
        await expect(page.locator('aside')).toHaveScreenshot('console-online-image-new-user-sidebar.png')
      }
      await link.click()
      await expect(page).toHaveURL(`${consoleOrigin}/images`)
      const host = page.locator('#zero-one-online-image')
      await expect(host.locator('[data-testid="create-image-api-key"]')).toBeVisible()
      await expect(host.getByRole('button', { name: '开始生成', exact: true })).toBeDisabled()
      expect(generations).toBe(0)
      if (keyState === 'empty') {
        await expect(host.getByRole('button', { name: '刷新密钥', exact: true })).toBeEnabled()
        await page.evaluate(() => window.scrollTo(0, 0))
        await expect(page).toHaveScreenshot('console-online-image-new-user-empty.png', { fullPage: true })
      }
      await host.locator('[data-testid="create-image-api-key"]').click()
      await expect(page).toHaveURL(`${consoleOrigin}/keys`)
    })
  }

  test('uses the custom page tutorial and only exposes the homepage tutorial setting', async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page)
    await page.goto(`${consoleOrigin}/admin/settings`)

    await expect(page.locator('[data-testid="image-tutorial-menu-url"]')).toHaveValue('https://docs.01yapi.test/image-generation')
    await expect(page.locator('[data-testid="landing-tutorial-url"]')).toHaveValue('https://docs.01yapi.test/getting-started')
    await page.locator('[data-testid="admin-sidebar-order-section"] summary').click()
    await expect(page.locator('[data-testid="admin-sidebar-order-list"] [data-sidebar-path="/custom/image-tutorial"]')).toContainText('生图教程')
    expect(runtimeErrors).toEqual([])
  })

  test('migrates the legacy tutorial id through the bottom settings save', async ({ page }) => {
    await page.goto(`${consoleOrigin}/admin/settings`)
    const request = page.waitForRequest((candidate) =>
      candidate.method() === 'PUT' && new URL(candidate.url()).pathname === '/api/v1/admin/settings',
    )
    await page.locator('button[data-zero-one-settings-save="true"]').click()
    const submitted = (await request).postDataJSON() as {
      custom_menu_items: Array<{ id: string; label: string }>
      user_sidebar_order: string[]
      admin_sidebar_order: string[]
    }

    expect(submitted.custom_menu_items.filter((item) => item.id === 'image-tutorial')).toEqual([
      expect.objectContaining({ id: 'image-tutorial', label: '生图教程' }),
    ])
    expect(submitted.custom_menu_items.some((item) => item.id === 'legacy-image-tutorial')).toBe(false)
    expect(submitted.user_sidebar_order).toContain('/custom/image-tutorial')
    expect(submitted.admin_sidebar_order).toContain('/custom/image-tutorial')
  })

  test('opens the image tutorial inside the Console custom page without reloading', async ({ page }) => {
    await page.goto(`${consoleOrigin}/images`)
    const marker = await page.evaluate(() => {
      const value = `tutorial-${Math.random()}`
      ;(window as typeof window & { __IMAGE_TUTORIAL_CONTINUITY__?: string })
        .__IMAGE_TUTORIAL_CONTINUITY__ = value
      return value
    })

    await page.locator('[data-testid="image-tutorial-link"]').click()
    await expect(page).toHaveURL(`${consoleOrigin}/custom/legacy-image-tutorial`)
    const tutorialFrame = page.locator('main iframe.custom-embed-frame')
    await expect(tutorialFrame).toHaveAttribute(
      'src',
      /^https:\/\/docs\.01yapi\.test\/image-generation/,
    )
    const tutorialURL = new URL((await tutorialFrame.getAttribute('src'))!)
    expect(tutorialURL.searchParams.has('user_id')).toBe(false)
    expect(tutorialURL.searchParams.has('token')).toBe(false)
    expect(await page.evaluate(() => (
      window as typeof window & { __IMAGE_TUTORIAL_CONTINUITY__?: string }
    ).__IMAGE_TUTORIAL_CONTINUITY__)).toBe(marker)
    await expect(page.locator('[data-zero-one-local-preview-notice]')).toHaveCount(0)
  })
})
