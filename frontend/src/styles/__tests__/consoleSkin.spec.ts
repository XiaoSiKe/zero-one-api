import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const frontendRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')
const read = (path: string) => readFileSync(resolve(frontendRoot, path), 'utf8')

describe('Console Skin module boundary', () => {
  it('owns the shared shell, navigation, dialog, select, and table surfaces', () => {
    const skin = read('src/styles/console-skin.css')

    expect(skin).toContain('.console-skin-shell')
    expect(skin).toContain('.console-skin-header')
    expect(skin).toContain('.console-skin-sidebar')
    expect(skin).toContain('.console-skin-dialog')
    expect(skin).toContain('.console-skin-select-trigger')
    expect(skin).toContain('.console-skin-select-menu')
    expect(skin).toContain('.console-skin-table')
    expect(skin).toContain('@supports ((-webkit-backdrop-filter: blur(1px))')
    expect(skin).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('keeps upstream class names as compatibility aliases at each caller', () => {
    expect(read('src/components/layout/AppLayout.vue')).toContain(
      'app-shell console-skin-shell'
    )
    expect(read('src/components/layout/AppHeader.vue')).toContain(
      'app-header-surface console-skin-header'
    )
    expect(read('src/components/layout/AppSidebar.vue')).toContain(
      'sidebar console-skin-sidebar'
    )
    expect(read('src/components/common/BaseDialog.vue')).toContain(
      "'base-dialog-surface', 'console-skin-dialog'"
    )
    expect(read('src/components/common/Select.vue')).toContain(
      "'select-trigger',\n        'console-skin-select-trigger'"
    )
    expect(read('src/components/common/Select.vue')).toContain(
      'select-dropdown-portal console-skin-select-menu'
    )
    expect(read('src/components/layout/TablePageLayout.vue')).toContain(
      'frosted-table-shell console-skin-table'
    )
  })

  it('loads the skin after Tailwind component defaults so its surface contract wins', () => {
    const main = read('src/main.ts')
    const baseStyles = main.indexOf("import './style.css'")
    const skinStyles = main.indexOf("import './styles/console-skin.css'")

    expect(baseStyles).toBeGreaterThanOrEqual(0)
    expect(skinStyles).toBeGreaterThan(baseStyles)
    expect(read('src/style.css')).not.toContain("@import './styles/console-skin.css';")
  })

  it('keeps route and table content stationary during navigation', () => {
    const app = read('src/App.vue')
    const layout = read('src/components/layout/AppLayout.vue')
    const tableLayout = read('src/components/layout/TablePageLayout.vue')
    const globalStyles = read('src/style.css')

    expect(app).not.toContain('console-route-enter-from')
    expect(layout).toContain('console-route-content')
    expect(layout).not.toContain('console-route-content-in')
    expect(tableLayout).not.toContain('table-surface-stack-enter')
    expect(globalStyles).not.toContain('scroll-smooth')
  })

  it('shares card motion across User and Administrator routes while complex hosts use glow only', () => {
    const layout = read('src/components/layout/AppLayout.vue')
    const skin = read('src/styles/console-skin.css')

    expect(layout).toContain('console-card-motion-surface')
    expect(layout).toContain('data-zero-one-card-motion="true"')
    expect(layout).toContain('@pointermove.passive="trackConsoleCardMotion"')
    expect(skin).toContain('--console-card-angle')
    expect(skin).toContain('transform: translateY(-2px);')
    expect(skin).toContain('.console-card-motion-static')
    expect(skin).toContain('.console-card-motion-glow-only')
    expect(skin).toContain('.console-skin-table')
    expect(skin).toContain('.frosted-table-shell')
    expect(skin).toContain('.sticky')
    expect(skin).toContain(':has(.card, iframe, table, .fixed, .sticky)')
    expect(read('src/views/user/UsageView.vue')).toContain(
      'card console-card-motion-glow-only'
    )
    expect(read('src/views/admin/UsageView.vue')).toContain(
      'card console-card-motion-glow-only'
    )
    expect(read('src/components/user/profile/ProfileTotpCard.vue')).toContain(
      'card console-card-motion-static'
    )
    expect(read('src/components/user/profile/ProfilePasskeyCard.vue')).toContain(
      'card console-card-motion-static'
    )
  })
})
