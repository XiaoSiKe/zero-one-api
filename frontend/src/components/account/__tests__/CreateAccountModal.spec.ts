import { defineComponent } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  BUILTIN_PLATFORM_CATALOG,
  resetPlatformCatalog,
  setPlatformCatalog,
} from '@/constants/platformCatalog'

import enAccounts from '@/i18n/locales/en/admin/accounts'
import zhAccounts from '@/i18n/locales/zh/admin/accounts'

const {
  createAccountMock,
  probeUpstreamBillingMock,
  importCodexSessionMock,
  createOpenAICodexPATMock,
} = vi.hoisted(() => ({
  createAccountMock: vi.fn(),
  probeUpstreamBillingMock: vi.fn(),
  importCodexSessionMock: vi.fn(),
  createOpenAICodexPATMock: vi.fn(),
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({
    showError: vi.fn(),
    showSuccess: vi.fn(),
    showWarning: vi.fn(),
  }),
}))

vi.mock('@/stores/auth', () => ({
  useAuthStore: () => ({ isSimpleMode: true }),
}))

vi.mock('@/api/admin', () => ({
  adminAPI: {
    accounts: {
      create: createAccountMock,
      probeUpstreamBilling: probeUpstreamBillingMock,
      checkMixedChannelRisk: vi.fn().mockResolvedValue({ has_risk: false }),
      importCodexSession: importCodexSessionMock,
      createOpenAICodexPAT: createOpenAICodexPATMock,
    },
    settings: {
      getWebSearchEmulationConfig: vi.fn().mockResolvedValue({ enabled: false, providers: [] }),
      getSettings: vi.fn().mockResolvedValue({}),
    },
    tlsFingerprintProfiles: {
      list: vi.fn().mockResolvedValue([]),
    },
  },
}))

vi.mock('@/api/admin/accounts', () => ({
  getAntigravityDefaultModelMapping: vi.fn().mockResolvedValue([]),
}))

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

import CreateAccountModal from '../CreateAccountModal.vue'

const BaseDialogStub = defineComponent({
  name: 'BaseDialog',
  props: { show: { type: Boolean, default: false } },
  template: '<div v-if="show"><slot /><slot name="footer" /></div>',
})

const OAuthAuthorizationFlowStub = defineComponent({
  name: 'OAuthAuthorizationFlow',
  props: {
    showManualOption: Boolean,
    showCodexSessionImportOption: Boolean,
    showAgentIdentityOption: Boolean,
    showCodexPatOption: Boolean,
    initialInputMethod: String,
  },
  data: () => ({ inputMethod: 'manual' }),
  emits: ['import-codex-session', 'import-codex-pat'],
  template: `
    <div>
      <button data-testid="import-codex-session" @click="$emit('import-codex-session', 'session-json')">session</button>
      <button data-testid="import-codex-pat" @click="$emit('import-codex-pat', 'pat-token')">pat</button>
    </div>
  `,
})

function mountModal() {
  return mount(CreateAccountModal, {
    props: { show: true, proxies: [], groups: [] },
    global: {
      stubs: {
        BaseDialog: BaseDialogStub,
        OAuthAuthorizationFlow: OAuthAuthorizationFlowStub,
        ConfirmDialog: true,
        Select: true,
        Icon: true,
        PlatformIcon: true,
        ProxySelector: true,
        ProxyAdBanner: true,
        GroupSelector: true,
        ModelWhitelistSelector: true,
        QuotaLimitCard: true,
      },
    },
  })
}

async function selectButtonByText(wrapper: ReturnType<typeof mountModal>, text: string) {
  const button = wrapper.findAll('button').find((candidate) => candidate.text().includes(text))
  expect(button).toBeDefined()
  await button?.trigger('click')
}

async function submitApiKeyAccount(
  platform: 'openai' | 'anthropic',
  enableLongContextBilling = false,
  disableUpstreamBillingProbe = false
) {
  const wrapper = mountModal()
  await selectButtonByText(wrapper, platform === 'openai' ? 'OpenAI' : 'admin.accounts.claudeConsole')
  if (platform === 'openai') {
    await selectButtonByText(wrapper, 'API Key')
  }
  await wrapper.get('form#create-account-form input[type="text"]').setValue(`${platform} account`)
  await wrapper.get('form#create-account-form input[type="password"]').setValue('test-api-key')
  if (enableLongContextBilling) {
    await wrapper.get('[data-testid="openai-long-context-billing-toggle"]').trigger('click')
  }
  if (disableUpstreamBillingProbe) {
    await wrapper.get('[data-testid="upstream-billing-auto-probe"]').trigger('click')
  }
  await wrapper.get('form#create-account-form').trigger('submit.prevent')
  await flushPromises()
  return wrapper
}

async function openCodexImportStep(toggleClicks = 0) {
  const wrapper = mountModal()
  await selectButtonByText(wrapper, 'OpenAI')
  for (let click = 0; click < toggleClicks; click += 1) {
    await wrapper.get('[data-testid="openai-long-context-billing-toggle"]').trigger('click')
  }
  await wrapper.get('form#create-account-form input[type="text"]').setValue('Codex import')
  await wrapper.get('form#create-account-form').trigger('submit.prevent')
  return wrapper
}

describe('CreateAccountModal OpenAI long-context billing', () => {
  beforeEach(() => {
    createAccountMock.mockReset().mockResolvedValue({ id: 42, platform: 'openai', type: 'apikey' })
    probeUpstreamBillingMock.mockReset().mockResolvedValue({})
    importCodexSessionMock.mockReset().mockResolvedValue({
      created: 1,
      updated: 0,
      skipped: 0,
      failed: 0,
      errors: [],
      warnings: [],
    })
    createOpenAICodexPATMock.mockReset().mockResolvedValue({})
  })

  afterEach(() => vi.useRealTimers())

  it('sets month and year expiry presets without submitting the account form', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2026-01-31T12:34:00'))
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenAI')
    await selectButtonByText(wrapper, 'API Key')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('expiry account')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('test-api-key')
    const input = wrapper.get<HTMLInputElement>('input[type="datetime-local"]')

    for (const [label, expected] of [
      ['payment.oneMonth', '2026-02-28T12:34'],
      ['payment.oneYear', '2027-01-31T12:34'],
    ]) {
      const button = wrapper.findAll('button').find((candidate) => candidate.text() === label)!
      expect(button.attributes('type')).toBe('button')
      await button.trigger('click')
      expect(input.element.value).toBe(expected)
      expect(createAccountMock).not.toHaveBeenCalled()
    }

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()
    expect(createAccountMock.mock.calls[0]?.[0]?.expires_at).toBe(new Date('2027-01-31T12:34:00').getTime() / 1000)
    wrapper.unmount()
  })

  it('allows a manually entered expiry to override a preset before account creation', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenAI')
    await selectButtonByText(wrapper, 'API Key')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('custom expiry account')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('test-api-key')
    await selectButtonByText(wrapper, 'payment.oneMonth')
    await wrapper.get('input[type="datetime-local"]').setValue('2030-04-15T09:20')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()
    expect(createAccountMock.mock.calls[0]?.[0]?.expires_at).toBe(new Date('2030-04-15T09:20:00').getTime() / 1000)
    wrapper.unmount()
  })

  it('sends false explicitly for normal OpenAI account creation by default', async () => {
    await submitApiKeyAccount('openai')

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(false)
  })

  // namespace 摊平是仅 OAuth 的兼容开关：API Key 走 chat completions 回退桥时由桥自行摊平
  it('shows the Codex namespace flatten toggle only for OpenAI OAuth accounts', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenAI')

    expect(wrapper.find('[data-testid="create-openai-flatten-namespaces-toggle"]').exists()).toBe(
      true
    )

    await selectButtonByText(wrapper, 'API Key')
    expect(wrapper.find('[data-testid="create-openai-flatten-namespaces-toggle"]').exists()).toBe(
      false
    )
  })

  it('enables upstream billing probes by default for new OpenAI API key accounts', async () => {
    await submitApiKeyAccount('openai')

    expect(createAccountMock.mock.calls[0]?.[0]?.upstream_billing_probe_enabled).toBe(true)
  })

  it('waits for the initial upstream billing probe before refreshing the account list', async () => {
    let resolveProbe: (() => void) | undefined
    probeUpstreamBillingMock.mockImplementationOnce(
      () => new Promise<void>((resolve) => {
        resolveProbe = resolve
      })
    )

    const wrapper = await submitApiKeyAccount('openai')

    expect(probeUpstreamBillingMock).toHaveBeenCalledWith(42)
    expect(wrapper.emitted('created')).toBeUndefined()

    resolveProbe?.()
    await flushPromises()

    expect(wrapper.emitted('created')).toHaveLength(1)
  })

  it('sends an explicit disabled state when the create toggle is turned off', async () => {
    await submitApiKeyAccount('openai', false, true)

    expect(createAccountMock.mock.calls[0]?.[0]?.upstream_billing_probe_enabled).toBe(false)
    expect(probeUpstreamBillingMock).not.toHaveBeenCalled()
  })

  it('submits OpenCode Zen default protocol rules with adaptive endpoints', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenCode')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('oc')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-opencode-zen')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.credentials).toMatchObject({
      account_mode: 'zen',
      api_protocol: 'adaptive',
      base_url: 'https://opencode.ai/zen/v1',
      api_base_urls: {
        chat_completions: 'https://opencode.ai/zen/v1',
        anthropic: 'https://opencode.ai/zen',
        responses: 'https://opencode.ai/zen/v1'
      },
      protocol_rules: [
        { pattern: 'grok-*', protocol: 'responses' },
        { pattern: 'gpt-*', protocol: 'responses' },
        { pattern: 'muse-spark-*', protocol: 'responses' },
        { pattern: 'claude-*', protocol: 'anthropic' },
        { pattern: 'qwen3.8-max', protocol: 'chat_completions' },
        { pattern: 'qwen*', protocol: 'anthropic' }
      ]
    })
  })

  it('submits OpenCode GO endpoints after switching account type', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenCode')
    await selectButtonByText(wrapper, 'admin.accounts.opencodeGo.accountMode.go')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('oc-go')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-opencode-go')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.credentials).toMatchObject({
      account_mode: 'go',
      api_protocol: 'adaptive',
      base_url: 'https://opencode.ai/zen/go/v1',
      api_base_urls: {
        chat_completions: 'https://opencode.ai/zen/go/v1',
        anthropic: 'https://opencode.ai/zen/go',
        responses: 'https://opencode.ai/zen/go/v1'
      },
      protocol_rules: [
        { pattern: 'grok-*', protocol: 'responses' },
        { pattern: 'gpt-*', protocol: 'responses' },
        { pattern: 'muse-spark-*', protocol: 'responses' },
        { pattern: 'minimax-*', protocol: 'anthropic' },
        { pattern: 'qwen*', protocol: 'anthropic' }
      ]
    })
  })

  describe('providers using the generic form', () => {
    const serverOnlyProviders = {
      platforms: [
        ...BUILTIN_PLATFORM_CATALOG.platforms,
        {
          id: 'acme_router',
          display_name: 'Acme Router',
          gateway: 'openai',
          cn_provider: false,
          multi_protocol: {
            default_mode: 'standard',
            routing: 'by_model',
            modes: [
              {
                mode: 'standard',
                base_urls: {
                  chat_completions: 'https://api.acme-router.example/provider/v1',
                  anthropic: 'https://api.acme-router.example/provider',
                },
                protocol_rules: [{ pattern: 'claude-*', protocol: 'anthropic' }],
              },
              {
                mode: 'team',
                base_urls: {
                  chat_completions: 'https://team.acme-router.example/provider/v1',
                  anthropic: 'https://team.acme-router.example/provider',
                },
                protocol_rules: [{ pattern: 'sonnet-*', protocol: 'anthropic' }],
              },
            ],
          },
        },
        {
          id: 'acme_chat',
          display_name: 'Acme Chat',
          gateway: 'openai',
          cn_provider: false,
          multi_protocol: {
            default_mode: 'pass',
            routing: 'by_inbound',
            modes: [{ mode: 'pass', base_urls: { chat_completions: 'https://api.acme-chat.example/v1' } }],
          },
        },
      ],
      composite_precedence: [...BUILTIN_PLATFORM_CATALOG.composite_precedence, 'acme_router', 'acme_chat'],
    }

    beforeEach(() => {
      setPlatformCatalog(serverOnlyProviders)
    })

    afterEach(() => {
      resetPlatformCatalog()
    })

    it('creates a by-model provider account from its profile defaults', async () => {
      const wrapper = mountModal()
      await wrapper.get('[data-testid="platform-button-acme_router"]').trigger('click')
      await wrapper.get('form#create-account-form input[type="text"]').setValue('cc')
      await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-cc')

      await wrapper.get('form#create-account-form').trigger('submit.prevent')
      await flushPromises()

      expect(createAccountMock).toHaveBeenCalledTimes(1)
      const payload = createAccountMock.mock.calls[0]?.[0]
      expect(payload?.platform).toBe('acme_router')
      expect(payload?.type).toBe('apikey')
      expect(payload?.credentials).toMatchObject({
        api_key: 'sk-cc',
        account_mode: 'standard',
        api_protocol: 'adaptive',
        base_url: 'https://api.acme-router.example/provider/v1',
        api_base_urls: {
          chat_completions: 'https://api.acme-router.example/provider/v1',
          anthropic: 'https://api.acme-router.example/provider',
        },
        protocol_rules: [{ pattern: 'claude-*', protocol: 'anthropic' }],
      })
      // 该供应商没有原生 Responses 端点，不下发 responses 基址。
      expect(payload?.credentials?.api_base_urls).not.toHaveProperty('responses')
      // 没有内置模型列表时不预填白名单，新账号不限制模型。
      expect(payload?.credentials).not.toHaveProperty('model_mapping')
    })

    it('switches endpoints and default rules with the provider mode', async () => {
      const wrapper = mountModal()
      await wrapper.get('[data-testid="platform-button-acme_router"]').trigger('click')
      await wrapper.get('[data-testid="generic-account-mode"]').findAll('button')[1].trigger('click')
      await wrapper.get('form#create-account-form input[type="text"]').setValue('cc-team')
      await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-cc')

      await wrapper.get('form#create-account-form').trigger('submit.prevent')
      await flushPromises()

      expect(createAccountMock.mock.calls[0]?.[0]?.credentials).toMatchObject({
        account_mode: 'team',
        base_url: 'https://team.acme-router.example/provider/v1',
        api_base_urls: {
          chat_completions: 'https://team.acme-router.example/provider/v1',
          anthropic: 'https://team.acme-router.example/provider',
        },
        protocol_rules: [{ pattern: 'sonnet-*', protocol: 'anthropic' }],
      })
    })

    it('creates a by-inbound provider account without protocol rules', async () => {
      const wrapper = mountModal()
      await wrapper.get('[data-testid="platform-button-acme_chat"]').trigger('click')
      // 单一接入模式时不显示模式选择。
      expect(wrapper.find('[data-testid="generic-account-mode"]').exists()).toBe(false)
      await wrapper.get('form#create-account-form input[type="text"]').setValue('acme-chat')
      await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-acme-chat')

      await wrapper.get('form#create-account-form').trigger('submit.prevent')
      await flushPromises()

      const credentials = createAccountMock.mock.calls[0]?.[0]?.credentials
      expect(credentials).toMatchObject({
        account_mode: 'pass',
        api_protocol: 'adaptive',
        base_url: 'https://api.acme-chat.example/v1',
        api_base_urls: { chat_completions: 'https://api.acme-chat.example/v1' },
      })
      expect(credentials).not.toHaveProperty('protocol_rules')
    })

    it('falls back to the Kimi default mode after a server-only provider', async () => {
      const wrapper = mountModal()
      await wrapper.get('[data-testid="platform-button-acme_router"]').trigger('click')
      await selectButtonByText(wrapper, 'Kimi')
      await wrapper.get('form#create-account-form input[type="text"]').setValue('kimi')
      await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-kimi')

      await wrapper.get('form#create-account-form').trigger('submit.prevent')
      await flushPromises()

      expect(createAccountMock.mock.calls[0]?.[0]?.credentials).toMatchObject({
        account_mode: 'payg',
        base_url: 'https://api.moonshot.cn/v1',
      })
      expect(createAccountMock.mock.calls[0]?.[0]?.credentials).not.toHaveProperty('protocol_rules')
    })
  })

  it('groups the aggregators on their own row below the CN providers', () => {
    const wrapper = mountModal()
    const labels = (testid: string) =>
      wrapper.get(`[data-testid="${testid}"]`).findAll('button').map(button => button.text().trim())
    expect(labels('platform-row-cn')).toEqual(['Kimi', 'Zhipu GLM', 'DeepSeek', 'MiniMax'])
    expect(labels('platform-row-aggregators')).toEqual(['OpenCode', 'Command Code', 'Cline'])
  })

  it('creates a Cline account without an account type and with only the Chat Completions endpoint', async () => {
    const wrapper = mountModal()
    await wrapper.get('[data-testid="platform-button-cline"]').trigger('click')
    // 积分与 ClinePass 共用同一个 Key，按模型计费，不需要选择账号类型。
    expect(wrapper.find('[data-testid="generic-account-mode"]').exists()).toBe(false)
    await wrapper.get('form#create-account-form input[type="text"]').setValue('cline')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-cline')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    const payload = createAccountMock.mock.calls[0]?.[0]
    expect(payload?.platform).toBe('cline')
    expect(payload?.credentials).toMatchObject({
      account_mode: 'payg',
      api_protocol: 'adaptive',
      base_url: 'https://api.cline.bot/api/v1',
      api_base_urls: { chat_completions: 'https://api.cline.bot/api/v1' },
    })
    expect(payload?.credentials).not.toHaveProperty('protocol_rules')
    expect(payload?.credentials?.api_base_urls).not.toHaveProperty('responses')
    expect(payload?.credentials?.api_base_urls).not.toHaveProperty('anthropic')
  })

  it('submits adaptive Kimi protocol endpoints', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'Kimi')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('Kimi adaptive')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-kimi')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]).toMatchObject({
      platform: 'kimi',
      type: 'apikey',
      credentials: {
        account_mode: 'payg',
        api_protocol: 'adaptive',
        base_url: 'https://api.moonshot.cn/v1',
        api_base_urls: {
          chat_completions: 'https://api.moonshot.cn/v1',
          anthropic: 'https://api.moonshot.cn/anthropic'
        }
      }
    })
  })

  it('persists CN header overrides and quota controls through the common create path', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'Kimi')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('Kimi controlled')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-kimi')

    const quota = wrapper.findComponent({ name: 'QuotaLimitCard' })
    expect(quota.exists()).toBe(true)
    quota.vm.$emit('update:totalLimit', 100)
    quota.vm.$emit('update:dailyLimit', 10)
    quota.vm.$emit('update:weeklyLimit', 50)
    quota.vm.$emit('update:dailyResetMode', 'fixed')
    quota.vm.$emit('update:dailyResetHour', 6)
    quota.vm.$emit('update:weeklyResetMode', 'fixed')
    quota.vm.$emit('update:weeklyResetDay', 2)
    quota.vm.$emit('update:weeklyResetHour', 7)
    quota.vm.$emit('update:resetTimezone', 'Asia/Shanghai')
    quota.vm.$emit('update:quotaNotifyDailyEnabled', true)
    quota.vm.$emit('update:quotaNotifyDailyThreshold', 80)
    await wrapper.vm.$nextTick()

    await wrapper.get('[data-testid="header-override-toggle"]').trigger('click')
    await selectButtonByText(wrapper, 'admin.accounts.headerOverride.addRow')
    const headerEditor = wrapper.findComponent({ name: 'HeaderOverrideEditor' })
    const headerInputs = headerEditor.findAll('input')
    await headerInputs[0].setValue('X-Trace-Mode')
    await headerInputs[1].setValue('cn-provider')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock.mock.calls[0]?.[0]).toMatchObject({
      platform: 'kimi',
      credentials: {
        header_override_enabled: true,
        header_overrides: { 'x-trace-mode': 'cn-provider' }
      },
      extra: {
        quota_limit: 100,
        quota_daily_limit: 10,
        quota_weekly_limit: 50,
        quota_daily_reset_mode: 'fixed',
        quota_daily_reset_hour: 6,
        quota_weekly_reset_mode: 'fixed',
        quota_weekly_reset_day: 2,
        quota_weekly_reset_hour: 7,
        quota_reset_timezone: 'Asia/Shanghai',
        quota_notify_daily_enabled: true,
        quota_notify_daily_threshold: 80,
        quota_notify_daily_threshold_type: 'fixed'
      }
    })
  })

  it('submits adaptive MiniMax protocol endpoints', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'MiniMax')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('MiniMax adaptive')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-minimax')

    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.credentials).toMatchObject({
      account_mode: 'payg',
      api_protocol: 'adaptive',
      base_url: 'https://api.minimaxi.com/v1',
      api_base_urls: {
        chat_completions: 'https://api.minimaxi.com/v1',
        anthropic: 'https://api.minimaxi.com/anthropic',
        responses: 'https://api.minimaxi.com/v1'
      }
    })
  })

  it('uses provider API key guidance for every CN provider', async () => {
    const wrapper = mountModal()

    for (const platform of ['Kimi', 'Zhipu GLM', 'DeepSeek', 'MiniMax']) {
      await selectButtonByText(wrapper, platform)
      expect(wrapper.text()).toContain('admin.accounts.cnProviders.apiKeyHint')
      expect(wrapper.text()).not.toContain('admin.accounts.apiKeyHint')
    }

    expect(zhAccounts.accounts.cnProviders.apiKeyHint).toBe(
      '请输入与所选账号类型及端点匹配的供应商 API Key'
    )
    expect(enAccounts.accounts.cnProviders.apiKeyHint).toBe(
      'Enter the provider API key that matches the selected account type and endpoint.'
    )
  })

  it('identifies Anthropic as a provider-compatible protocol', () => {
    expect(zhAccounts.accounts.cnProviders.apiProtocol.anthropic).toBe('Anthropic 兼容')
    expect(zhAccounts.accounts.cnProviders.apiProtocol.anthropicDesc).toContain(
      '请求仍发送到当前供应商'
    )
    expect(enAccounts.accounts.cnProviders.apiProtocol.anthropic).toBe('Anthropic-compatible')
    expect(enAccounts.accounts.cnProviders.apiProtocol.anthropicDesc).toContain(
      'Requests still go to the selected provider'
    )
  })

  it('exposes Agent Identity in the OpenAI authorization methods', async () => {
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'OpenAI')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('OpenAI account')
    await wrapper.get('form#create-account-form').trigger('submit.prevent')

    const flow = wrapper.getComponent(OAuthAuthorizationFlowStub)
    expect(flow.props('showManualOption')).toBe(true)
    expect(flow.props('showCodexSessionImportOption')).toBe(true)
    expect(flow.props('showAgentIdentityOption')).toBe(true)
    expect(flow.props('showCodexPatOption')).toBe(true)
    expect(flow.props('initialInputMethod')).toBe('manual')
  })

  it.each([
    ['camelCase', { authMode: 'agentIdentity', agentIdentity: { agentRuntimeId: 'runtime' } }],
    ['nested identity without auth_mode', { agent_identity: { agent_runtime_id: 'runtime' } }],
  ])('accepts backend-compatible %s Agent Identity imports', async (_name, content) => {
    const wrapper = await openCodexImportStep()
    const flow = wrapper.getComponent(OAuthAuthorizationFlowStub)
    flow.vm.inputMethod = 'agent_identity'

    flow.vm.$emit('import-codex-session', JSON.stringify(content))
    await flushPromises()

    expect(importCodexSessionMock).toHaveBeenCalledTimes(1)
  })

  it('sends true explicitly when OpenAI long-context billing is enabled', async () => {
    await submitApiKeyAccount('openai', true)

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(true)
  })

  it('omits the OpenAI setting for non-OpenAI account creation', async () => {
    await submitApiKeyAccount('anthropic')

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    expect(createAccountMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBeUndefined()
    // 上游倍率探测已放宽到全部 API-key 平台：非 OpenAI 平台与 OpenAI 一致，默认开启。
    expect(createAccountMock.mock.calls[0]?.[0]?.upstream_billing_probe_enabled).toBe(true)
  })

  it('sends an explicit disabled state when the non-OpenAI create toggle is turned off', async () => {
    await submitApiKeyAccount('anthropic', false, true)

    expect(createAccountMock.mock.calls[0]?.[0]?.upstream_billing_probe_enabled).toBe(false)
  })

  it('antigravity upstream 创建默认携带上游倍率探测开关', async () => {
    // antigravity upstream 走独立创建 helper，
    // 也必须与其余 API-key 平台一样默认开启探测并传递开关。
    const wrapper = mountModal()
    await selectButtonByText(wrapper, 'Antigravity')
    await selectButtonByText(wrapper, 'admin.accounts.types.antigravityApikey')
    await wrapper.get('form#create-account-form input[type="text"]').setValue('antigravity relay')
    const baseInput = wrapper
      .findAll('input')
      .find((candidate) => candidate.attributes('placeholder') === 'https://cloudcode-pa.googleapis.com')
    expect(baseInput).toBeDefined()
    await baseInput?.setValue('https://relay.example')
    await wrapper.get('form#create-account-form input[type="password"]').setValue('sk-upstream')
    await wrapper.get('form#create-account-form').trigger('submit.prevent')
    await flushPromises()

    expect(createAccountMock).toHaveBeenCalledTimes(1)
    const payload = createAccountMock.mock.calls[0]?.[0]
    expect(payload?.platform).toBe('antigravity')
    expect(payload?.type).toBe('apikey')
    expect(payload?.upstream_billing_probe_enabled).toBe(true)
    // 创建成功后前端立即发起一次首探（与其他 apikey 平台一致）。
    expect(probeUpstreamBillingMock).toHaveBeenCalledWith(42)
  })

  it('leaves Codex session import billing ownership to the backend', async () => {
    const wrapper = await openCodexImportStep()
    await wrapper.get('[data-testid="import-codex-session"]').trigger('click')
    await flushPromises()

    expect(importCodexSessionMock).toHaveBeenCalledTimes(1)
    expect(importCodexSessionMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBeUndefined()
  })

  it('leaves Codex PAT import billing ownership to the backend', async () => {
    const wrapper = await openCodexImportStep()
    await wrapper.get('[data-testid="import-codex-pat"]').trigger('click')
    await flushPromises()

    expect(createOpenAICodexPATMock).toHaveBeenCalledTimes(1)
    expect(createOpenAICodexPATMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBeUndefined()
  })

  it('sends explicit true for Codex session import after the toggle is enabled', async () => {
    const wrapper = await openCodexImportStep(1)
    await wrapper.get('[data-testid="import-codex-session"]').trigger('click')
    await flushPromises()

    expect(importCodexSessionMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(true)
  })

  it('sends explicit false for Codex session import after the toggle is changed back', async () => {
    const wrapper = await openCodexImportStep(2)
    await wrapper.get('[data-testid="import-codex-session"]').trigger('click')
    await flushPromises()

    expect(importCodexSessionMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(false)
  })

  it('sends explicit true for Codex PAT import after the toggle is enabled', async () => {
    const wrapper = await openCodexImportStep(1)
    await wrapper.get('[data-testid="import-codex-pat"]').trigger('click')
    await flushPromises()

    expect(createOpenAICodexPATMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(true)
  })

  it('sends explicit false for Codex PAT import after the toggle is changed back', async () => {
    const wrapper = await openCodexImportStep(2)
    await wrapper.get('[data-testid="import-codex-pat"]').trigger('click')
    await flushPromises()

    expect(createOpenAICodexPATMock.mock.calls[0]?.[0]?.extra?.openai_long_context_billing_enabled).toBe(false)
  })
})
