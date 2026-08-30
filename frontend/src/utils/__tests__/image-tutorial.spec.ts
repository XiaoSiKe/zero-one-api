import { describe, expect, it } from 'vitest'

import { resolveImageTutorialPath } from '../image-tutorial'

const tutorial = {
  id: 'image-tutorial',
  label: '生图教程',
  icon_svg: '',
  url: 'https://docs.01yapi.test/images',
  visibility: 'user' as const,
  placement: 'sidebar' as const,
  sort_order: 0,
}

describe('resolveImageTutorialPath', () => {
  it('opens the configured custom page inside the Console', () => {
    expect(resolveImageTutorialPath([tutorial])).toBe('/custom/image-tutorial')
  })

  it('uses the actual sidebar route for a legacy tutorial menu id', () => {
    expect(resolveImageTutorialPath([{
      ...tutorial,
      id: 'legacy-image-guide',
      label: '生图教程',
    }])).toBe('/custom/legacy-image-guide')
  })

  it('does not confuse the integration tutorial with the image tutorial', () => {
    expect(resolveImageTutorialPath([{
      ...tutorial,
      id: 'legacy-integration-guide',
      label: '接入教程',
    }])).toBe('')
  })

  it('ignores QR navigation and unrelated custom pages', () => {
    expect(resolveImageTutorialPath([
      { ...tutorial, id: 'other-tutorial', label: '其他教程' },
      { ...tutorial, navigation_type: 'qr' },
    ])).toBe('')
  })
})
