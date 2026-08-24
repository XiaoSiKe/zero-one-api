import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ModelPlazaData, ModelPlazaResult, ModelPricing } from '../lib/modelPlaza'
import PricingSection from './PricingSection'

const mocks = vi.hoisted(() => ({
  fetchModelPlaza: vi.fn(),
}))

vi.mock('../lib/modelPlaza', async (importOriginal) => {
  const original = await importOriginal<typeof import('../lib/modelPlaza')>()
  return { ...original, fetchModelPlaza: mocks.fetchModelPlaza }
})

function tokenPricing(inputPrice: number, outputPrice: number): ModelPricing {
  return {
    billingMode: 'token',
    inputPrice,
    outputPrice,
    cacheWritePrice: null,
    cacheReadPrice: null,
    imageInputPrice: null,
    imageOutputPrice: null,
    perRequestPrice: null,
    intervals: [],
  }
}

function plazaData(): ModelPlazaData {
  return {
    description: '',
    groups: [
      {
        id: 1,
        name: 'Claude 公开组',
        description: '',
        platform: 'anthropic',
        subscriptionType: 'standard',
        rateMultiplier: 0.5,
        peakRateEnabled: false,
        peakStart: '',
        peakEnd: '',
        peakRateMultiplier: 1,
        isExclusive: false,
        imageRateIndependent: false,
        imageRateMultiplier: 1,
        models: [
          {
            name: 'claude-sonnet-4-6',
            platform: 'anthropic',
            pricing: {
              ...tokenPricing(3e-6, 15e-6),
              cacheWritePrice: 3.75e-6,
              cacheReadPrice: 0.3e-6,
            },
            officialPricing: null,
          },
        ],
      },
      {
        id: 2,
        name: 'OpenAI 公开组',
        description: '',
        platform: 'openai',
        subscriptionType: 'standard',
        rateMultiplier: 0.4,
        peakRateEnabled: false,
        peakStart: '',
        peakEnd: '',
        peakRateMultiplier: 1,
        isExclusive: false,
        imageRateIndependent: false,
        imageRateMultiplier: 1,
        models: [
          {
            name: 'gpt-5.4',
            platform: 'openai',
            pricing: tokenPricing(2.5e-6, 15e-6),
            officialPricing: null,
          },
        ],
      },
      {
        id: 3,
        name: 'Gemini 公开组',
        description: '',
        platform: 'gemini',
        subscriptionType: 'standard',
        rateMultiplier: 0.6,
        peakRateEnabled: false,
        peakStart: '',
        peakEnd: '',
        peakRateMultiplier: 1,
        isExclusive: false,
        imageRateIndependent: false,
        imageRateMultiplier: 1,
        models: [
          {
            name: 'gemini-2.5-pro',
            platform: 'gemini',
            pricing: tokenPricing(1.25e-6, 10e-6),
            officialPricing: null,
          },
        ],
      },
    ],
  }
}

const success = (): ModelPlazaResult => ({ status: 'success', data: plazaData() })

describe('PricingSection', () => {
  beforeEach(() => mocks.fetchModelPlaza.mockReset())
  afterEach(cleanup)

  it('shows loading until the live model-plaza request resolves', async () => {
    let resolveRequest: (result: ModelPlazaResult) => void = () => {}
    mocks.fetchModelPlaza.mockReturnValue(
      new Promise<ModelPlazaResult>((resolve) => {
        resolveRequest = resolve
      }),
    )

    render(<PricingSection enabled requireAuth={false} serverUtcOffset="+08:00" />)
    expect(screen.getByText('正在读取实时价格')).toBeTruthy()
    expect(screen.queryByText('价格只在页面打开时读取一次。')).toBeNull()

    await act(async () => resolveRequest(success()))
    expect((await screen.findAllByText('claude-sonnet-4-6')).length).toBeGreaterThan(0)
    expect(
      screen.queryByText('价格来自公开模型广场配置。官方参考价与零一实付价分列展示，缺失数据保持为空。'),
    ).toBeNull()
    expect(screen.getAllByText('缓存写 ¥1.875 · 读 ¥0.15').length).toBeGreaterThan(0)
    expect(screen.getAllByText('0.5×')).toHaveLength(2)
    const firstPriceRow = screen.getByRole('row', { name: /claude-sonnet-4-6/ })
    expect(firstPriceRow.querySelectorAll('.rate-badge')).toHaveLength(2)
    expect(document.querySelectorAll('.price-table .paid-price-column').length).toBeGreaterThan(2)
    expect(mocks.fetchModelPlaza).toHaveBeenCalledWith(
      expect.objectContaining({ enabled: true, timeoutMs: 3_000, signal: expect.any(AbortSignal) }),
    )

    const filters = within(screen.getByRole('group', { name: '按平台筛选' }))
    expect(filters.getAllByRole('button').map((button) => button.textContent)).toEqual([
      'All',
      'Claude',
      'OpenAI',
      'Gemini',
    ])
    expect(filters.getByRole('button', { name: 'All' }).getAttribute('aria-pressed')).toBe('true')

    const headers = within(screen.getByRole('table'))
      .getAllByRole('columnheader')
      .map((header) => header.textContent)
    expect(headers).toEqual([
      '模型',
      '提供商',
      '计费',
      '输入（官方参考）',
      '输出（官方参考）',
      '输入（零一 API）',
      '输出（零一 API）',
    ])
    expect(
      screen.queryByText('最多展示 8 个代表模型，实际可用模型与结算以模型广场和调用记录为准。'),
    ).toBeNull()
    expect(screen.queryByText('价格在本次打开页面时读取')).toBeNull()
    expect(document.querySelector('.price-footnote')).toBeNull()
  })

  it.each([
    [false, false, '实时价目暂未公开'],
    [true, true, '登录后查看模型与价格'],
  ])(
    'does not request prices when enabled=%s and requireAuth=%s',
    (enabled, requireAuth, expectedTitle) => {
      render(
        <PricingSection
          enabled={enabled}
          requireAuth={requireAuth}
          serverUtcOffset="+08:00"
        />,
      )
      expect(screen.getByText(expectedTitle)).toBeTruthy()
      expect(mocks.fetchModelPlaza).not.toHaveBeenCalled()
    },
  )

  it('renders an authentication response without leaking price controls', async () => {
    mocks.fetchModelPlaza.mockResolvedValue({ status: 'auth-required' })
    render(<PricingSection enabled requireAuth={false} serverUtcOffset="+08:00" />)

    expect(await screen.findByText('登录后查看模型与价格')).toBeTruthy()
    expect(screen.getByRole('link', { name: '登录查看' }).getAttribute('href')).toBe(
      'http://127.0.0.1:8080/login?redirect=/model-plaza',
    )
    expect(screen.queryByRole('searchbox')).toBeNull()
  })

  it('shows precise errors and retries with a fresh request', async () => {
    const user = userEvent.setup()
    mocks.fetchModelPlaza
      .mockResolvedValueOnce({ status: 'error', reason: 'timeout' })
      .mockResolvedValueOnce(success())

    render(<PricingSection enabled requireAuth={false} serverUtcOffset="+08:00" />)
    expect(await screen.findByText('读取价格超时')).toBeTruthy()

    await user.click(screen.getByRole('button', { name: '重新读取' }))
    expect((await screen.findAllByText('gpt-5.4')).length).toBeGreaterThan(0)
    expect(mocks.fetchModelPlaza).toHaveBeenCalledTimes(2)
    const firstSignal = mocks.fetchModelPlaza.mock.calls[0]?.[0]?.signal
    const secondSignal = mocks.fetchModelPlaza.mock.calls[1]?.[0]?.signal
    expect(firstSignal).not.toBe(secondSignal)
  })

  it('reports rate limiting and retries when requested', async () => {
    const user = userEvent.setup()
    mocks.fetchModelPlaza
      .mockResolvedValueOnce({ status: 'rate-limited', retryAfter: 12 })
      .mockResolvedValueOnce(success())

    render(<PricingSection enabled requireAuth={false} serverUtcOffset="+08:00" />)
    expect(await screen.findByText('价格请求过于频繁')).toBeTruthy()
    expect(screen.getByText('请在约 12 秒后重试。')).toBeTruthy()
    await user.click(screen.getByRole('button', { name: '重新读取' }))
    expect((await screen.findAllByText('gemini-2.5-pro')).length).toBeGreaterThan(0)
  })

  it('filters by platform, searches by model, and clears an empty result', async () => {
    const user = userEvent.setup()
    mocks.fetchModelPlaza.mockResolvedValue(success())
    render(<PricingSection enabled requireAuth={false} serverUtcOffset="+08:00" />)

    expect((await screen.findAllByText('claude-sonnet-4-6')).length).toBeGreaterThan(0)
    await user.click(screen.getByRole('button', { name: 'OpenAI' }))
    expect(screen.queryByText('claude-sonnet-4-6')).toBeNull()
    expect(screen.getAllByText('gpt-5.4').length).toBeGreaterThan(0)

    expect(screen.getByRole('button', { name: 'OpenAI' }).getAttribute('aria-pressed')).toBe('true')

    await user.click(screen.getByRole('button', { name: 'All' }))
    const search = screen.getByRole('searchbox', { name: '搜索模型或分组' })
    await user.type(search, 'sonnet')
    expect(screen.getAllByText('claude-sonnet-4-6').length).toBeGreaterThan(0)
    expect(screen.queryByText('gpt-5.4')).toBeNull()

    await user.clear(search)
    await user.type(search, 'not-a-model')
    expect(screen.getByText('没有匹配的模型')).toBeTruthy()
    expect(screen.getByRole('table')).toBeTruthy()
    expect(
      within(screen.getByRole('table'))
        .getAllByRole('columnheader')
        .map((header) => header.textContent),
    ).toEqual([
      '模型',
      '提供商',
      '计费',
      '输入（官方参考）',
      '输出（官方参考）',
      '输入（零一 API）',
      '输出（零一 API）',
    ])
    await user.click(screen.getByRole('button', { name: '清除筛选' }))
    expect(screen.getAllByText('gemini-2.5-pro').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'All' }).getAttribute('aria-pressed')).toBe('true')
  })
})
