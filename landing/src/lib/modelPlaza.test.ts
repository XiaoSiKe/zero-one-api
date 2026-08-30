import { describe, expect, it, vi } from 'vitest'
import {
  fetchModelPlaza,
  filterPriceRows,
  formatIntervalLabel,
  formatPeakNote,
  formatPrice,
  listLandingPlatforms,
  parseModelPlazaResponse,
  selectRepresentativePriceRows,
  type ModelPlazaData,
  type ModelPricingInterval,
} from './modelPlaza'

function pricing(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    billing_mode: 'token',
    input_price: 3e-6,
    output_price: 15e-6,
    cache_write_price: null,
    cache_read_price: 0.3e-6,
    image_input_price: null,
    image_output_price: null,
    per_request_price: null,
    intervals: [],
    ...overrides,
  }
}

function official(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    input_price: 3e-6,
    output_price: 15e-6,
    cache_write_price: null,
    cache_read_price: 0.3e-6,
    ...overrides,
  }
}

function model(name: string, platform: string, overrides: Record<string, unknown> = {}) {
  return {
    name,
    platform,
    pricing: pricing(),
    official_pricing: official(),
    ...overrides,
  }
}

function group(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id: 1,
    name: '标准组',
    description: '',
    platform: 'anthropic',
    subscription_type: 'standard',
    rate_multiplier: 0.5,
    peak_rate_enabled: false,
    peak_start: '',
    peak_end: '',
    peak_rate_multiplier: 1,
    is_exclusive: false,
    image_rate_independent: false,
    image_rate_multiplier: 1,
    models: [model('claude-sonnet-4-6', 'anthropic')],
    ...overrides,
  }
}

function envelope(groups: unknown[] = [group()]): unknown {
  return { code: 0, message: 'success', data: { description: '', groups } }
}

function dataFrom(groups: unknown[]): ModelPlazaData {
  const parsed = parseModelPlazaResponse(envelope(groups))
  if (!parsed) throw new Error('test fixture did not parse')
  return parsed
}

describe('model plaza response parsing', () => {
  it('strictly normalizes the public DTO including intervals and optional official fields', () => {
    const parsed = parseModelPlazaResponse(
      envelope([
        group({
          subscription_type: 'subscription',
          user_rate_multiplier: 0.4,
          peak_rate_enabled: true,
          peak_start: '09:00',
          peak_end: '12:30',
          peak_rate_multiplier: 1.5,
          models: [
            model('claude-sonnet-4-6', 'anthropic', {
              pricing: pricing({
                input_price: null,
                output_price: null,
                intervals: [
                  {
                    min_tokens: 0,
                    max_tokens: 200_000,
                    tier_label: '',
                    input_price: 3e-6,
                    output_price: 15e-6,
                    cache_write_price: null,
                    cache_read_price: 0.3e-6,
                    per_request_price: null,
                  },
                ],
              }),
              official_pricing: official({ cache_write_1h_price: 6e-6 }),
            }),
          ],
        }),
      ]),
    )

    expect(parsed?.groups[0]).toMatchObject({
      userRateMultiplier: 0.4,
      peakRateEnabled: true,
      peakStart: '09:00',
      peakEnd: '12:30',
    })
    expect(parsed?.groups[0]?.models[0]?.pricing?.intervals[0]).toMatchObject({
      minTokens: 0,
      maxTokens: 200_000,
      inputPrice: 3e-6,
    })
    expect(parsed?.groups[0]?.models[0]?.officialPricing?.cacheWrite1hPrice).toBe(6e-6)
  })

  it('fails closed on malformed envelopes, prices, modes, intervals, and peak windows', () => {
    expect(parseModelPlazaResponse({ code: 1, data: {} })).toBeNull()
    expect(parseModelPlazaResponse({ code: 0, data: { groups: [] } })).toBeNull()
    expect(
      parseModelPlazaResponse(
        envelope([group({ models: [model('bad', 'openai', { pricing: pricing({ input_price: -1 }) })] })]),
      ),
    ).toBeNull()
    expect(
      parseModelPlazaResponse(
        envelope([group({ models: [model('bad', 'openai', { pricing: pricing({ billing_mode: 'hourly' }) })] })]),
      ),
    ).toBeNull()
    expect(
      parseModelPlazaResponse(
        envelope([
          group({
            models: [
              model('bad', 'openai', {
                pricing: pricing({
                  intervals: [
                    {
                      min_tokens: 200,
                      max_tokens: 100,
                      input_price: 1,
                      output_price: 1,
                      cache_write_price: null,
                      cache_read_price: null,
                      per_request_price: null,
                    },
                  ],
                }),
              }),
            ],
          }),
        ]),
      ),
    ).toBeNull()
    expect(
      parseModelPlazaResponse(
        envelope([
          group({
            subscription_type: 'subscription',
            peak_rate_enabled: true,
            peak_start: '22:00',
            peak_end: '02:00',
          }),
        ]),
      ),
    ).toBeNull()
  })
})

describe('landing price projection', () => {
  it('formats scaled token prices, missing values, and interval labels without float noise', () => {
    expect(formatPrice(3e-6, 1_000_000)).toBe('$3.00')
    expect(formatPrice(1.25e-8, 1_000_000)).toBe('$0.0125')
    expect(formatPrice(null)).toBe('—')

    const interval = (overrides: Partial<ModelPricingInterval> = {}): ModelPricingInterval => ({
      minTokens: 0,
      maxTokens: 200_000,
      tierLabel: '',
      inputPrice: null,
      outputPrice: null,
      cacheWritePrice: null,
      cacheReadPrice: null,
      perRequestPrice: null,
      ...overrides,
    })
    expect(formatIntervalLabel(interval())).toBe('≤200K')
    expect(formatIntervalLabel(interval({ minTokens: 200_000, maxTokens: null }))).toBe('>200K')
    expect(formatIntervalLabel(interval({ tierLabel: '4K' }))).toBe('4K')
  })

  it('projects token intervals with the user rate and includes an explicit peak note', () => {
    const data = dataFrom([
      group({
        subscription_type: 'subscription',
        user_rate_multiplier: 0.4,
        peak_rate_enabled: true,
        peak_start: '09:00',
        peak_end: '12:30',
        peak_rate_multiplier: 1.5,
        models: [
          model('claude-sonnet-4-6', 'anthropic', {
            pricing: pricing({
              intervals: [
                {
                  min_tokens: 0,
                  max_tokens: 200_000,
                  input_price: 3e-6,
                  output_price: 15e-6,
                  cache_write_price: null,
                  cache_read_price: 0.3e-6,
                  per_request_price: null,
                },
              ],
            }),
          }),
        ],
      }),
    ])
    const [row] = selectRepresentativePriceRows(data, { serverUtcOffset: '+08:00' })

    expect(row?.prices).toEqual([
      expect.objectContaining({
        label: '≤200K',
        input: '¥1.20',
        output: '¥6.00',
        cacheRead: '¥0.12',
      }),
    ])
    expect(row?.effectiveRateLabel).toBe('0.4×')
    expect(row?.peakNote).toBe('高峰时段 09:00–12:30 额外×1.5（UTC+08:00）')
    expect(formatPeakNote(data.groups[0]!, 'not-an-offset')).not.toContain('UTC')
  })

  it('uses the independent image rate and supports ordinary per-request prices', () => {
    const rows = selectRepresentativePriceRows(
      dataFrom([
        group({
          id: 1,
          name: '生图组',
          platform: 'gemini',
          rate_multiplier: 0.8,
          image_rate_independent: true,
          image_rate_multiplier: 0.25,
          models: [
            model('imagen-4', 'gemini', {
              pricing: pricing({
                billing_mode: 'image',
                input_price: null,
                output_price: null,
                image_output_price: 0.04,
                per_request_price: null,
              }),
            }),
          ],
        }),
        group({
          id: 2,
          name: '按次组',
          platform: 'openai',
          rate_multiplier: 0.5,
          models: [
            model('request-model', 'openai', {
              pricing: pricing({
                billing_mode: 'per_request',
                input_price: null,
                output_price: null,
                per_request_price: 0.2,
              }),
            }),
          ],
        }),
      ]),
    )

    const image = rows.find((row) => row.model === 'imagen-4')
    const request = rows.find((row) => row.model === 'request-model')
    expect(image).toMatchObject({ unit: '¥/张', effectiveRate: 0.25 })
    expect(image?.prices[0]?.request).toBe('¥0.01')
    expect(request).toMatchObject({ unit: '¥/次', effectiveRate: 0.5 })
    expect(request?.prices[0]?.request).toBe('¥0.10')
  })

  it('shows the server-time peak multiplier in token prices without changing request pricing', () => {
    const data = dataFrom([
      group({
        id: 1,
        name: '订阅高峰组',
        subscription_type: 'subscription',
        rate_multiplier: 0.5,
        user_rate_multiplier: 0.4,
        peak_rate_enabled: true,
        peak_start: '09:00',
        peak_end: '12:30',
        peak_rate_multiplier: 1.5,
        models: [
          model('claude-sonnet-4-6', 'anthropic', {
            pricing: pricing({ input_price: 3e-6, output_price: 15e-6 }),
          }),
          model('request-model', 'anthropic', {
            pricing: pricing({
              billing_mode: 'per_request',
              input_price: null,
              output_price: null,
              per_request_price: 0.2,
            }),
          }),
        ],
      }),
    ])

    const duringPeak = selectRepresentativePriceRows(data, {
      serverUtcOffset: '+08:00',
      now: new Date('2026-08-16T01:00:00Z'),
    })
    const token = duringPeak.find((row) => row.billingMode === 'token')
    const request = duringPeak.find((row) => row.billingMode === 'per_request')
    expect(token?.effectiveRate).toBeCloseTo(0.6)
    expect(token?.effectiveRateLabel).toBe('0.6×')
    expect(token?.prices[0]).toMatchObject({ input: '¥1.80', output: '¥9.00' })
    expect(request).toMatchObject({ effectiveRate: 0.4 })
    expect(request?.prices[0]?.request).toBe('¥0.08')

    const afterPeak = selectRepresentativePriceRows(data, {
      serverUtcOffset: '+08:00',
      now: new Date('2026-08-16T04:30:00Z'),
    })
    expect(afterPeak.find((row) => row.billingMode === 'token')).toMatchObject({
      effectiveRate: 0.4,
      effectiveRateLabel: '0.4×',
    })
  })

  it('deduplicates across groups by the cheapest offer, filters platforms, and caps at eight', () => {
    const models = Array.from({ length: 10 }, (_, index) =>
      model(`gpt-${index}`, 'openai', {
        pricing: pricing({ input_price: (index + 1) * 1e-6, output_price: (index + 2) * 1e-6 }),
      }),
    )
    const data = dataFrom([
      group({ id: 1, name: 'expensive', platform: 'openai', rate_multiplier: 1, models }),
      group({
        id: 2,
        name: 'cheap',
        platform: 'openai',
        rate_multiplier: 0.25,
        models: [model('gpt-9', 'openai')],
      }),
      group({
        id: 3,
        name: 'claude',
        models: [model('claude-sonnet-4-6', 'anthropic')],
      }),
      group({
        id: 4,
        name: 'deepseek',
        platform: 'deepseek',
        models: [model('deepseek-v3.2', 'deepseek')],
      }),
    ])

    const all = selectRepresentativePriceRows(data, { limit: 99 })
    expect(all).toHaveLength(8)
    expect(new Set(all.map((row) => row.key)).size).toBe(all.length)
    expect(all.find((row) => row.model === 'gpt-9')?.groupName).toBe('cheap')

    const openai = selectRepresentativePriceRows(data, { platform: 'openai', search: 'gpt-9' })
    expect(openai).toHaveLength(1)
    expect(openai[0]?.platformFilter).toBe('openai')
    expect(filterPriceRows(all, 'deepseek')).toEqual([
      expect.objectContaining({ model: 'deepseek-v3.2' }),
    ])
    expect(listLandingPlatforms(data)).toEqual(['anthropic', 'openai', 'deepseek'])
    expect(all).toEqual(expect.arrayContaining([
      expect.objectContaining({ model: 'deepseek-v3.2', platformFilter: 'deepseek' }),
    ]))
  })

  it('omits platforms that have no displayable price row', () => {
    const data = dataFrom([
      group({ platform: 'openai', models: [model('gpt-live', 'openai')] }),
      group({
        id: 2,
        name: 'gemini-without-price',
        platform: 'gemini',
        models: [model('gemini-hidden', 'gemini', { pricing: null })],
      }),
    ])

    expect(listLandingPlatforms(data)).toEqual(['openai'])
  })

  it('prefers a standard group before price and keeps different billing modes separate', () => {
    const sharedToken = model('shared-model', 'openai', {
      pricing: pricing({ input_price: 2e-6, output_price: 4e-6 }),
    })
    const rows = selectRepresentativePriceRows(
      dataFrom([
        group({
          id: 1,
          name: 'subscription-cheap',
          platform: 'openai',
          subscription_type: 'subscription',
          rate_multiplier: 0.1,
          models: [sharedToken],
        }),
        group({
          id: 2,
          name: 'standard-public',
          platform: 'openai',
          subscription_type: 'standard',
          rate_multiplier: 1,
          models: [sharedToken],
        }),
        group({
          id: 3,
          name: 'request-public',
          platform: 'openai',
          subscription_type: 'standard',
          models: [
            model('shared-model', 'openai', {
              pricing: pricing({
                billing_mode: 'per_request',
                input_price: null,
                output_price: null,
                per_request_price: 0.2,
              }),
            }),
          ],
        }),
      ]),
      { platform: 'openai' },
    )

    expect(rows.filter((row) => row.model === 'shared-model')).toHaveLength(2)
    expect(rows.find((row) => row.billingMode === 'token')).toMatchObject({
      groupName: 'standard-public',
      subscriptionType: 'standard',
    })
    expect(rows.find((row) => row.billingMode === 'per_request')?.key).toBe(
      'openai:shared-model:per_request',
    )
  })
})

describe('model plaza fetch states', () => {
  it('short-circuits when disabled and supports successful manual retries', async () => {
    const request = vi
      .fn<typeof fetch>()
      .mockRejectedValueOnce(new TypeError('offline'))
      .mockResolvedValueOnce(Response.json(envelope()))

    await expect(fetchModelPlaza({ enabled: false, request })).resolves.toEqual({ status: 'disabled' })
    expect(request).not.toHaveBeenCalled()
    await expect(fetchModelPlaza({ request })).resolves.toEqual({
      status: 'error',
      reason: 'network',
    })
    await expect(fetchModelPlaza({ request })).resolves.toMatchObject({ status: 'success' })
    expect(request).toHaveBeenCalledTimes(2)
    expect(request.mock.calls[1]?.[1]).toMatchObject({
      cache: 'no-store',
      credentials: 'omit',
    })
  })

  it.each([
    [401, { status: 'auth-required' }],
    [403, { status: 'forbidden' }],
    [404, { status: 'not-enabled' }],
    [500, { status: 'error', reason: 'server', httpStatus: 500 }],
    [503, { status: 'error', reason: 'server', httpStatus: 503 }],
  ])('maps HTTP %i to a stable UI state', async (status, expected) => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(new Response(null, { status }))
    await expect(fetchModelPlaza({ request })).resolves.toEqual(expected)
  })

  it('returns rate-limit retry seconds', async () => {
    const request = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(null, { status: 429, headers: { 'Retry-After': '12' } }))
    await expect(fetchModelPlaza({ request })).resolves.toEqual({
      status: 'rate-limited',
      retryAfter: 12,
    })
  })

  it('distinguishes timeout from caller cancellation', async () => {
    const request = vi.fn<typeof fetch>().mockImplementation(
      (_input, init) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))
        }),
    )
    await expect(fetchModelPlaza({ request, timeoutMs: 1 })).resolves.toEqual({
      status: 'error',
      reason: 'timeout',
    })

    const controller = new AbortController()
    controller.abort()
    await expect(fetchModelPlaza({ request, signal: controller.signal })).resolves.toEqual({
      status: 'error',
      reason: 'aborted',
    })
  })

  it('returns empty for valid responses with no displayable models and rejects malformed JSON', async () => {
    const emptyRequest = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json(envelope([group({ models: [] })])))
    await expect(fetchModelPlaza({ request: emptyRequest })).resolves.toMatchObject({ status: 'empty' })

    const unpricedRequest = vi.fn<typeof fetch>().mockResolvedValue(Response.json(envelope([
      group({
        platform: 'gemini',
        models: [model('gemini-without-price', 'gemini', { pricing: null })],
      }),
    ])))
    await expect(fetchModelPlaza({ request: unpricedRequest })).resolves.toMatchObject({ status: 'empty' })

    const invalidRequest = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response('{', { headers: { 'Content-Type': 'application/json' } }))
    await expect(fetchModelPlaza({ request: invalidRequest })).resolves.toEqual({
      status: 'error',
      reason: 'invalid-response',
    })
  })
})
