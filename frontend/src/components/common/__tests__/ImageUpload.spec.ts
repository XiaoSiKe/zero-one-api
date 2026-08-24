import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ImageUpload from '../ImageUpload.vue'

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({
      t: (key: string, params?: Record<string, string>) =>
        key === 'common.unsupportedImageType'
          ? `unsupported: ${params?.types}`
          : key,
    }),
  }
})

describe('ImageUpload accepted MIME types', () => {
  it('publishes the browser accept list and rejects an unlisted image type', async () => {
    const wrapper = mount(ImageUpload, {
      props: {
        modelValue: '',
        acceptedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'],
      },
      global: { stubs: { Icon: true } },
    })
    const input = wrapper.get('input[type="file"]')

    expect(input.attributes('accept')).toBe('image/png,image/jpeg,image/webp')

    Object.defineProperty(input.element, 'files', {
      configurable: true,
      value: [new File(['<svg />'], 'qr.svg', { type: 'image/svg+xml' })],
    })
    await input.trigger('change')

    expect(wrapper.text()).toContain('unsupported: PNG, JPEG, WEBP')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})
