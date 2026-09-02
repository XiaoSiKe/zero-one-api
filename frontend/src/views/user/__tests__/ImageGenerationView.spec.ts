import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, ref } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { ApiKey, CustomMenuItem } from '@/types'

const harness = vi.hoisted(() => ({
  allowedImageKeys: null as ReturnType<typeof ref<ApiKey[]>> | null,
  refreshImageGenerationAccess: vi.fn(),
  listAccessibleImageModels: vi.fn(),
  generateImage: vi.fn(),
  showError: vi.fn(),
  showInfo: vi.fn(),
  showSuccess: vi.fn(),
  customMenuItems: [] as CustomMenuItem[],
  isAdmin: false,
  adminCustomMenuItems: [] as CustomMenuItem[],
  adminSettingsLoaded: false,
  adminSettingsFetch: vi.fn(),
}))

vi.mock('@/composables/useImageGenerationAccess', async () => {
  const { computed } = await import('vue')
  return {
    useImageGenerationAccess: () => ({
      allowedImageKeys: computed(() => harness.allowedImageKeys?.value || []),
      imageGenerationAccessLoading: computed(() => false),
      refreshImageGenerationAccess: harness.refreshImageGenerationAccess,
    }),
  }
})

vi.mock('@/features/online-image/api', () => ({
  generateImage: harness.generateImage,
  listAccessibleImageModels: harness.listAccessibleImageModels,
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({
    cachedPublicSettings: { custom_menu_items: harness.customMenuItems },
    showError: harness.showError,
    showInfo: harness.showInfo,
    showSuccess: harness.showSuccess,
  }),
}))

vi.mock('@/stores/auth', () => ({
  useAuthStore: () => ({ isAdmin: harness.isAdmin }),
}))

vi.mock('@/stores/adminSettings', () => ({
  useAdminSettingsStore: () => ({
    customMenuItems: harness.adminCustomMenuItems,
    loaded: harness.adminSettingsLoaded,
    fetch: harness.adminSettingsFetch,
  }),
}))

const messages: Record<string, string> = {
  'imageGeneration.controls.apiKey': 'API Key',
  'imageGeneration.controls.createImageApiKey': '创建生图API密钥',
  'imageGeneration.controls.refreshKeys': '刷新密钥',
  'imageGeneration.controls.modelSelection': '模型选择',
  'imageGeneration.controls.count': '张数',
  'imageGeneration.controls.imageSize': '尺寸',
  'imageGeneration.controls.quality': '质量',
  'imageGeneration.controls.responseFormat': '返回格式',
  'imageGeneration.controls.prompt': '提示词',
  'imageGeneration.controls.referenceImages': '参考图',
  'imageGeneration.controls.referenceImagesDrop': '拖拽参考图到这里，或点击选择文件',
  'imageGeneration.controls.chooseReferenceImages': '选择图片',
  'imageGeneration.controls.imageTutorial': '生图教程',
  'imageGeneration.controls.generate': '开始生成',
  'imageGeneration.controls.generating': '生成中',
  'imageGeneration.hints.apiKey': '这里只显示仍然可用、且所属分组已开启生图的密钥。',
  'imageGeneration.hints.responseFormat': '使用 base64 便于在浏览器内直接保存结果。',
  'imageGeneration.hints.referenceImages': '可选参考图',
  'imageGeneration.results.title': '生成结果',
  'imageGeneration.results.empty': '还没有生成图片',
  'imageGeneration.results.emptyHint': '填写提示词后点击开始生成。',
  'imageGeneration.results.download': '下载',
  'imageGeneration.results.open': '打开',
  'imageGeneration.history.title': '历史记录',
  'imageGeneration.history.hint': '记录保存在当前浏览器，可随时下载。',
  'imageGeneration.history.clear': '清空历史',
  'imageGeneration.history.empty': '暂无历史记录',
  'imageGeneration.messages.mobileSaveHint': '已打开图片，请长按图片保存。',
  'common.selectOption': '请选择',
  'common.loading': '加载中',
  'common.noOptionsFound': '无可用选项',
}

vi.mock('vue-i18n', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-i18n')>()
  return {
    ...actual,
    useI18n: () => ({
      t: (key: string, params?: Record<string, unknown>) => {
        const base = messages[key] || key
        if (!params) return base
        return Object.entries(params).reduce(
          (value, [name, replacement]) => value.replace(`{${name}}`, String(replacement)),
          base,
        )
      },
    }),
  }
})

const SelectStub = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: null },
    options: { type: Array, default: () => [] },
    disabled: Boolean,
    loading: Boolean,
  },
  emits: ['update:modelValue'],
  template: `
    <button
      type="button"
      v-bind="$attrs"
      :disabled="disabled"
      :data-options="JSON.stringify(options)"
      @click="$emit('update:modelValue', options[1]?.value ?? options[0]?.value ?? null)"
    >
      {{ options.find((option) => option.value === modelValue)?.label || '请选择' }}
    </button>
  `,
})

const BaseDialogStub = defineComponent({
  template: '<div v-if="$attrs.show"><slot /><slot name="footer" /></div>',
})

const IconStub = defineComponent({ template: '<span aria-hidden="true" />' })

function imageKey(id: number, key: string, name: string): ApiKey {
  return {
    id,
    user_id: 1,
    key,
    name,
    group_id: id,
    status: 'active',
    ip_whitelist: [],
    ip_blacklist: [],
    last_used_at: null,
    last_used_ip: null,
    quota: 0,
    quota_used: 0,
    expires_at: null,
    created_at: '2026-08-30T00:00:00Z',
    updated_at: '2026-08-30T00:00:00Z',
    current_concurrency: 0,
    rate_limit_5h: 0,
    rate_limit_1d: 0,
    rate_limit_7d: 0,
    usage_5h: 0,
    usage_1d: 0,
    usage_7d: 0,
    window_5h_start: null,
    window_1d_start: null,
    window_7d_start: null,
    reset_5h_at: null,
    reset_1d_at: null,
    reset_7d_at: null,
    group: {
      id,
      name: `${name}分组`,
      description: null,
      platform: 'openai',
      rate_multiplier: 1,
      is_exclusive: false,
      status: 'active',
      subscription_type: 'standard',
      daily_limit_usd: null,
      weekly_limit_usd: null,
      monthly_limit_usd: null,
      long_context_pricing_enabled: false,
      allow_image_generation: true,
      allow_batch_image_generation: false,
      image_rate_independent: false,
      image_rate_multiplier: 1,
      batch_image_discount_multiplier: 1,
      batch_image_hold_multiplier: 1,
      image_price_1k: null,
      image_price_2k: null,
      image_price_4k: null,
      video_rate_independent: false,
      video_rate_multiplier: 1,
      web_search_price_per_call: null,
      search_price_per_1k: null,
      audio_realtime_price_per_min: null,
      audio_tts_price_per_million_chars: null,
      audio_stt_price_per_hour: null,
      peak_rate_enabled: false,
      peak_start: '',
      peak_end: '',
      peak_rate_multiplier: 1,
      claude_code_only: false,
      fallback_group_id: null,
      fallback_group_id_on_invalid_request: null,
      allow_live: false,
      require_oauth_only: false,
      require_privacy_set: false,
      created_at: '2026-08-30T00:00:00Z',
      updated_at: '2026-08-30T00:00:00Z',
    },
  }
}

async function mountView() {
  const { default: ImageGenerationView } = await import('../ImageGenerationView.vue')
  const wrapper = mount(ImageGenerationView, {
    global: {
      stubs: {
        Select: SelectStub,
        BaseDialog: BaseDialogStub,
        Icon: IconStub,
      },
    },
  })
  await flushPromises()
  return wrapper
}

describe('ImageGenerationView', () => {
  beforeEach(() => {
    harness.allowedImageKeys = ref([
      imageKey(1, 'sk-first', '生图测试'),
      imageKey(2, 'sk-second', '备用生图'),
    ])
    harness.refreshImageGenerationAccess.mockReset().mockResolvedValue(undefined)
    harness.listAccessibleImageModels.mockReset().mockResolvedValue(['gpt-image-2', 'gpt-image-1.5'])
    harness.generateImage.mockReset()
    harness.showError.mockReset()
    harness.showInfo.mockReset()
    harness.showSuccess.mockReset()
    harness.isAdmin = false
    harness.adminCustomMenuItems = []
    harness.adminSettingsLoaded = false
    harness.adminSettingsFetch.mockReset().mockResolvedValue(undefined)
    harness.customMenuItems = [{
      id: 'image-tutorial',
      label: '生图教程',
      icon_svg: '',
      url: 'https://docs.example.com/image-generation',
      visibility: 'user',
      placement: 'sidebar',
      sort_order: 0,
    }]
  })

  it('uses the requested compact control order without the duplicate page hero', async () => {
    const wrapper = await mountView()

    expect(wrapper.find('[data-testid="image-generation-hero"]').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('清空结果')
    expect(wrapper.text()).not.toContain('/v1/models')
    expect(wrapper.get('[data-testid="model-select-label"]').text()).toBe('模型选择')

    const form = wrapper.get('[data-testid="image-generation-form"]').element
    const apiKeyRow = wrapper.get('[data-testid="api-key-row"]').element
    const createKey = wrapper.get('[data-testid="create-image-api-key"]')
    const apiKeySelect = wrapper.get('[data-testid="api-key-select"]').element
    const refresh = wrapper.get('[data-testid="refresh-keys"]').element
    const modelRow = wrapper.get('[data-testid="model-count-row"]').element
    const size = wrapper.get('[data-testid="size-control"]').element
    const qualityRow = wrapper.get('[data-testid="quality-format-row"]').element
    const referenceImages = wrapper.get('[data-testid="reference-images-panel"]').element
    const tutorial = wrapper.get('[data-testid="image-tutorial-link"]')
    const promptPanel = wrapper.get('[data-testid="prompt-panel"]').element
    const resultsPanel = wrapper.get('[data-testid="results-panel"]').element
    const follows = Node.DOCUMENT_POSITION_FOLLOWING

    expect(createKey.attributes('href')).toBe('/keys')
    expect(createKey.element.compareDocumentPosition(apiKeyRow) & follows).toBeTruthy()
    expect(apiKeyRow.contains(apiKeySelect)).toBe(true)
    expect(apiKeyRow.contains(refresh)).toBe(true)
    expect(apiKeySelect.compareDocumentPosition(refresh) & follows).toBeTruthy()
    expect(apiKeyRow.compareDocumentPosition(modelRow) & follows).toBeTruthy()
    expect(modelRow.compareDocumentPosition(size) & follows).toBeTruthy()
    expect(size.compareDocumentPosition(qualityRow) & follows).toBeTruthy()
    expect(referenceImages.compareDocumentPosition(tutorial.element) & follows).toBeTruthy()
    expect(tutorial.attributes('href')).toBe('/custom/image-tutorial')
    expect(promptPanel.compareDocumentPosition(resultsPanel) & follows).toBeTruthy()
    expect(form.contains(promptPanel)).toBe(true)
  })

  it('renders a model selector populated from the selected key instead of a text field', async () => {
    const wrapper = await mountView()

    expect(harness.listAccessibleImageModels).toHaveBeenCalledWith(
      'sk-first',
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    )
    const modelSelect = wrapper.get('[data-testid="model-select"]')
    expect(modelSelect.attributes('data-options')).toContain('gpt-image-2')
    expect(wrapper.find('[data-testid="model-input"]').exists()).toBe(false)

    await wrapper.get('[data-testid="api-key-select"]').trigger('click')
    await flushPromises()
    expect(harness.listAccessibleImageModels).toHaveBeenLastCalledWith(
      'sk-second',
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    )
  })

  it('keeps Console generation on the browser-stable Base64 response format', async () => {
    harness.generateImage.mockResolvedValue({
      model: 'gpt-image-2',
      data: [{ b64_json: 'aW1hZ2U=' }],
    })
    const wrapper = await mountView()

    expect(wrapper.get('[data-testid="response-format-select"]').attributes('data-options'))
      .toBe('[{"label":"Base64","value":"b64_json"}]')
    await wrapper.get('textarea').setValue('draw a cat')
    await wrapper.get('[data-testid="start-generation"]').trigger('click')
    await flushPromises()

    expect(harness.generateImage).toHaveBeenCalledWith(
      'sk-first',
      expect.objectContaining({ response_format: 'b64_json' }),
    )
  })

  it('opens the image for long-press saving inside WeChat instead of fetching it', async () => {
    harness.generateImage.mockResolvedValue({
      model: 'gpt-image-2',
      data: [{ url: 'https://files.example.com/image.png' }],
    })
    vi.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 MicroMessenger/8.0')
    const open = vi.spyOn(window, 'open').mockReturnValue(null)
    const fetch = vi.spyOn(globalThis, 'fetch')
    const wrapper = await mountView()

    await wrapper.get('textarea').setValue('draw a cat')
    await wrapper.get('[data-testid="start-generation"]').trigger('click')
    await flushPromises()
    await wrapper.get('[data-testid="result-download"]').trigger('click')

    expect(fetch).not.toHaveBeenCalled()
    expect(open).toHaveBeenCalledWith('https://files.example.com/image.png', '_blank', 'noopener,noreferrer')
    expect(harness.showInfo).toHaveBeenCalledWith('已打开图片，请长按图片保存。')
    open.mockRestore()
    fetch.mockRestore()
  })

  it('uses the native file share sheet on capable mobile browsers', async () => {
    harness.generateImage.mockResolvedValue({
      model: 'gpt-image-2',
      data: [{ b64_json: 'aW1hZ2U=', mime_type: 'image/png' }],
    })
    vi.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)')
    const share = vi.fn().mockResolvedValue(undefined)
    const originalShare = Object.getOwnPropertyDescriptor(window.navigator, 'share')
    const originalCanShare = Object.getOwnPropertyDescriptor(window.navigator, 'canShare')
    Object.defineProperty(window.navigator, 'share', { configurable: true, value: share })
    Object.defineProperty(window.navigator, 'canShare', { configurable: true, value: () => true })
    const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      blob: async () => new Blob(['image'], { type: 'image/png' }),
    } as Response)

    try {
      const wrapper = await mountView()
      await wrapper.get('textarea').setValue('draw a cat')
      await wrapper.get('[data-testid="start-generation"]').trigger('click')
      await flushPromises()
      await wrapper.get('[data-testid="result-download"]').trigger('click')
      await flushPromises()

      expect(share).toHaveBeenCalledTimes(1)
      expect(share.mock.calls[0][0].files).toHaveLength(1)
      expect(share.mock.calls[0][0].files[0].name).toMatch(/^online-image-.*\.png$/)
    } finally {
      fetch.mockRestore()
      if (originalShare) Object.defineProperty(window.navigator, 'share', originalShare)
      else delete (window.navigator as Navigator & { share?: Navigator['share'] }).share
      if (originalCanShare) Object.defineProperty(window.navigator, 'canShare', originalCanShare)
      else delete (window.navigator as Navigator & { canShare?: Navigator['canShare'] }).canShare
    }
  })

  it('keeps one primary generation action and uses neutral secondary actions elsewhere', async () => {
    const wrapper = await mountView()
    const actions = wrapper.findAll('[data-online-image-action]')
    const refresh = wrapper.get('[data-testid="refresh-keys"]')
    const generate = wrapper.get('[data-testid="start-generation"]')

    expect(actions.length).toBeGreaterThan(3)
    for (const action of actions) {
      expect(action.classes()).toContain('btn-specular')
    }
    expect(refresh.classes()).toContain('btn-secondary')
    expect(wrapper.get('[data-testid="create-image-api-key"]').classes()).toContain('btn-secondary')
    expect(wrapper.get('[data-testid="image-tutorial-link"]').classes()).toContain('btn-secondary')
    expect(refresh.classes()).not.toContain('btn-primary')
    expect(generate.classes()).toContain('btn-primary')
    expect(generate.classes()).not.toContain('btn-secondary')
    expect(actions.filter((action) => action.classes().includes('btn-secondary')).length).toBeGreaterThan(2)
  })

  it('uses the authenticated navigation projection for an admin-only tutorial', async () => {
    harness.isAdmin = true
    harness.customMenuItems = []
    harness.adminSettingsLoaded = true
    harness.adminCustomMenuItems = [{
      id: 'image-tutorial',
      label: '生图教程',
      icon_svg: '',
      url: 'https://docs.example.com/admin-image-generation',
      visibility: 'admin',
      placement: 'sidebar',
      sort_order: 0,
    }]

    const wrapper = await mountView()

    expect(wrapper.get('[data-testid="image-tutorial-link"]').attributes('href'))
      .toBe('/custom/image-tutorial')
    expect(harness.adminSettingsFetch).toHaveBeenCalledTimes(1)
  })

  it('delegates the tutorial action to the matching sidebar custom page link', async () => {
    harness.customMenuItems = [{
      id: 'legacy-image-guide',
      label: '生图教程',
      icon_svg: '',
      url: 'https://docs.example.com/image-generation',
      visibility: 'user',
      placement: 'sidebar',
      sort_order: 0,
    }]
    const sidebar = document.createElement('aside')
    const sidebarLink = document.createElement('a')
    sidebarLink.href = '/custom/legacy-image-guide'
    const clicked = vi.fn((event: Event) => event.preventDefault())
    sidebarLink.addEventListener('click', clicked)
    sidebar.append(sidebarLink)
    document.body.append(sidebar)

    const wrapper = await mountView()
    await wrapper.get('[data-testid="image-tutorial-link"]').trigger('click')

    expect(clicked).toHaveBeenCalledTimes(1)
    sidebar.remove()
  })
})
