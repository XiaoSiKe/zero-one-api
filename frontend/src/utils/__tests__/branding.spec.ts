import { beforeEach, describe, expect, it } from 'vitest'
import { PRODUCT_GITHUB_URL, updateFavicon } from '@/utils/branding'

describe('product repository', () => {
  it('links to the authorized current GitHub owner', () => {
    expect(PRODUCT_GITHUB_URL).toBe('https://github.com/XiaoSiKe/zero-one-api')
  })
})

describe('updateFavicon', () => {
  beforeEach(() => {
    document.head.innerHTML = '<link rel="icon" href="/logo.svg">'
  })

  it('replaces the default favicon with the configured logo', () => {
    updateFavicon('https://example.com/custom-logo.png')

    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    expect(link?.href).toBe('https://example.com/custom-logo.png')
  })

  it('ignores unsafe logo URLs', () => {
    updateFavicon('javascript:alert(1)')

    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    expect(link?.getAttribute('href')).toBe('/logo.svg')
  })
})
