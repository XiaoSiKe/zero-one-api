import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../TablePageLayout.vue')
const componentSource = readFileSync(componentPath, 'utf8')
const appHeaderPath = resolve(dirname(fileURLToPath(import.meta.url)), '../AppHeader.vue')
const appHeaderSource = readFileSync(appHeaderPath, 'utf8')

describe('TablePageLayout responsive table scrolling', () => {
  it('does not disable the table horizontal scroll container in mobile mode', () => {
    const tableWrapperBlocks = Array.from(
      componentSource.matchAll(/([^{}]*:deep\(\.table-wrapper\)[^{}]*)\{([^{}]*)\}/g)
    )

    expect(tableWrapperBlocks.length).toBeGreaterThan(0)

    const baseBlock = tableWrapperBlocks.find(([selector]) => !selector.includes('.mobile-mode'))
    const mobileBlocks = tableWrapperBlocks.filter(([selector]) => selector.includes('.mobile-mode'))

    expect(baseBlock?.[2]).toContain('overflow-x-auto')
    expect(mobileBlocks.every(([, , declarations]) => !declarations.includes('overflow-visible'))).toBe(
      true
    )
  })

  it('keeps route toolbars below the app header while remaining above table content', () => {
    const fixedSectionBlock = componentSource.match(
      /\.layout-section-fixed\s*\{([\s\S]*?)\n\}/
    )

    expect(fixedSectionBlock).not.toBeNull()
    expect(fixedSectionBlock?.[1]).toContain('position: relative;')
    expect(fixedSectionBlock?.[1]).toContain('z-index: 20;')

    const followingFixedSectionBlock = componentSource.match(
      /\.layout-section-fixed \+ \.layout-section-fixed\s*\{([\s\S]*?)\n\}/
    )
    expect(followingFixedSectionBlock).not.toBeNull()
    expect(followingFixedSectionBlock?.[1]).toContain('z-index: 10;')
    expect(appHeaderSource).toContain('sticky top-0 z-30')
  })
})
