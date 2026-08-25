import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import NavigationIconPicker from '../NavigationIconPicker.vue'
import { NAVIGATION_ICON_PRESETS } from '@/constants/navigationIcons'

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

const ImageUploadStub = defineComponent({
  name: 'ImageUpload',
  props: { modelValue: { type: String, default: '' } },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    return () => h('button', {
      'data-testid': 'svg-upload',
      onClick: () => emit('update:modelValue', '<svg data-custom="true"></svg>'),
    }, 'upload')
  },
})

describe('NavigationIconPicker', () => {
  it('offers exactly five built-in SVG choices and keeps custom SVG upload', async () => {
    const wrapper = mount(NavigationIconPicker, {
      props: { modelValue: '' },
      global: { stubs: { ImageUpload: ImageUploadStub } },
    })

    const presets = wrapper.findAll('[data-testid^="navigation-icon-preset-"]')
    expect(presets).toHaveLength(5)
    expect(NAVIGATION_ICON_PRESETS).toHaveLength(5)

    await presets[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([
      NAVIGATION_ICON_PRESETS[2].svg,
    ])

    await wrapper.get('[data-testid="svg-upload"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([
      '<svg data-custom="true"></svg>',
    ])
  })
})
