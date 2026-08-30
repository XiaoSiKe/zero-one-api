const DEFAULT_ENDPOINT = '/api/v1/model-plaza'
const DEFAULT_TIMEOUT_MS = 3_000
const MAX_LANDING_ROWS = 8
const PER_MILLION = 1_000_000

type UnknownRecord = Record<string, unknown>

export type ModelBillingMode = 'token' | 'per_request' | 'image' | 'video'
export type LandingPlatformFilter = string

const LANDING_PLATFORM_ORDER = [
  'anthropic',
  'openai',
  'gemini',
  'antigravity',
  'grok',
  'kimi',
  'zhipu',
  'deepseek',
] as const

export interface ModelPricingInterval {
  minTokens: number
  maxTokens: number | null
  tierLabel: string
  inputPrice: number | null
  outputPrice: number | null
  cacheWritePrice: number | null
  cacheReadPrice: number | null
  perRequestPrice: number | null
}

export interface ModelPricing {
  billingMode: ModelBillingMode
  inputPrice: number | null
  outputPrice: number | null
  cacheWritePrice: number | null
  cacheReadPrice: number | null
  imageInputPrice: number | null
  imageOutputPrice: number | null
  perRequestPrice: number | null
  intervals: ModelPricingInterval[]
}

export interface OfficialModelPricing {
  inputPrice: number | null
  outputPrice: number | null
  cacheWritePrice: number | null
  cacheWrite1hPrice: number | null
  cacheReadPrice: number | null
}

export interface ModelPlazaModel {
  name: string
  platform: string
  pricing: ModelPricing | null
  officialPricing: OfficialModelPricing | null
}

export interface ModelPlazaGroup {
  id: number
  name: string
  description: string
  platform: string
  subscriptionType: string
  rateMultiplier: number
  userRateMultiplier?: number
  peakRateEnabled: boolean
  peakStart: string
  peakEnd: string
  peakRateMultiplier: number
  isExclusive: boolean
  imageRateIndependent: boolean
  imageRateMultiplier: number
  models: ModelPlazaModel[]
}

export interface ModelPlazaData {
  description: string
  groups: ModelPlazaGroup[]
}

export interface LandingPriceLine {
  label: string
  input: string
  output: string
  cacheWrite: string
  cacheRead: string
  request: string
}

export interface LandingPriceRow {
  key: string
  model: string
  platform: string
  platformFilter: string
  groupId: number
  groupName: string
  subscriptionType: string
  billingMode: ModelBillingMode
  unit: '¥/1M tokens' | '¥/张' | '¥/次'
  prices: LandingPriceLine[]
  officialInput: string
  officialOutput: string
  officialCacheWrite: string
  officialCacheRead: string
  effectiveRate: number
  effectiveRateLabel: string
  peakNote: string
}

export type ModelPlazaErrorReason =
  | 'aborted'
  | 'timeout'
  | 'network'
  | 'server'
  | 'http'
  | 'invalid-response'

export type ModelPlazaResult =
  | { status: 'disabled' }
  | { status: 'not-enabled' }
  | { status: 'auth-required' }
  | { status: 'forbidden' }
  | { status: 'rate-limited'; retryAfter: number | null }
  | { status: 'error'; reason: ModelPlazaErrorReason; httpStatus?: number }
  | { status: 'empty'; data: ModelPlazaData }
  | { status: 'success'; data: ModelPlazaData }

export interface FetchModelPlazaOptions {
  /** Allows the public-settings feature switch to short-circuit without a request. */
  enabled?: boolean
  endpoint?: string
  request?: typeof fetch
  signal?: AbortSignal
  timeoutMs?: number
}

export interface SelectPriceRowsOptions {
  platform?: LandingPlatformFilter
  search?: string
  limit?: number
  serverUtcOffset?: string
  now?: Date
}

function asRecord(value: unknown): UnknownRecord | null {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null
}

function parseString(value: unknown, options: { allowEmpty?: boolean; max: number }): string | null {
  if (typeof value !== 'string' || value.length > options.max) return null
  const normalized = value.trim()
  if (!options.allowEmpty && !normalized) return null
  return normalized
}

function parseBoolean(value: unknown): boolean | null {
  return typeof value === 'boolean' ? value : null
}

function parseFiniteNumber(value: unknown, options: { integer?: boolean } = {}): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) return null
  if (options.integer && !Number.isSafeInteger(value)) return null
  return value
}

function parseNullablePrice(value: unknown): number | null | undefined {
  if (value === null) return null
  return parseFiniteNumber(value) ?? undefined
}

function parsePricingInterval(value: unknown): ModelPricingInterval | null {
  const interval = asRecord(value)
  if (!interval) return null

  const minTokens = parseFiniteNumber(interval.min_tokens, { integer: true })
  const maxTokens =
    interval.max_tokens === null
      ? null
      : parseFiniteNumber(interval.max_tokens, { integer: true })
  const tierLabel =
    interval.tier_label === undefined
      ? ''
      : parseString(interval.tier_label, { allowEmpty: true, max: 80 })
  const inputPrice = parseNullablePrice(interval.input_price)
  const outputPrice = parseNullablePrice(interval.output_price)
  const cacheWritePrice = parseNullablePrice(interval.cache_write_price)
  const cacheReadPrice = parseNullablePrice(interval.cache_read_price)
  const perRequestPrice = parseNullablePrice(interval.per_request_price)

  if (
    minTokens === null ||
    maxTokens === undefined ||
    (maxTokens !== null && maxTokens < minTokens) ||
    tierLabel === null ||
    inputPrice === undefined ||
    outputPrice === undefined ||
    cacheWritePrice === undefined ||
    cacheReadPrice === undefined ||
    perRequestPrice === undefined
  ) {
    return null
  }

  return {
    minTokens,
    maxTokens,
    tierLabel,
    inputPrice,
    outputPrice,
    cacheWritePrice,
    cacheReadPrice,
    perRequestPrice,
  }
}

function parseModelPricing(value: unknown): ModelPricing | null | undefined {
  if (value === null) return null
  const pricing = asRecord(value)
  if (!pricing) return undefined

  const billingMode = pricing.billing_mode
  if (
    billingMode !== 'token' &&
    billingMode !== 'per_request' &&
    billingMode !== 'image' &&
    billingMode !== 'video'
  ) {
    return undefined
  }

  const inputPrice = parseNullablePrice(pricing.input_price)
  const outputPrice = parseNullablePrice(pricing.output_price)
  const cacheWritePrice = parseNullablePrice(pricing.cache_write_price)
  const cacheReadPrice = parseNullablePrice(pricing.cache_read_price)
  const imageInputPrice = parseNullablePrice(pricing.image_input_price)
  const imageOutputPrice = parseNullablePrice(pricing.image_output_price)
  const perRequestPrice = parseNullablePrice(pricing.per_request_price)
  if (
    inputPrice === undefined ||
    outputPrice === undefined ||
    cacheWritePrice === undefined ||
    cacheReadPrice === undefined ||
    imageInputPrice === undefined ||
    imageOutputPrice === undefined ||
    perRequestPrice === undefined ||
    !Array.isArray(pricing.intervals)
  ) {
    return undefined
  }

  const intervals: ModelPricingInterval[] = []
  for (const rawInterval of pricing.intervals) {
    const interval = parsePricingInterval(rawInterval)
    if (!interval) return undefined
    intervals.push(interval)
  }

  return {
    billingMode,
    inputPrice,
    outputPrice,
    cacheWritePrice,
    cacheReadPrice,
    imageInputPrice,
    imageOutputPrice,
    perRequestPrice,
    intervals,
  }
}

function parseOfficialPricing(value: unknown): OfficialModelPricing | null | undefined {
  if (value === null) return null
  const pricing = asRecord(value)
  if (!pricing) return undefined

  const inputPrice = parseNullablePrice(pricing.input_price)
  const outputPrice = parseNullablePrice(pricing.output_price)
  const cacheWritePrice = parseNullablePrice(pricing.cache_write_price)
  const cacheReadPrice = parseNullablePrice(pricing.cache_read_price)
  const cacheWrite1hPrice =
    pricing.cache_write_1h_price === undefined
      ? null
      : parseNullablePrice(pricing.cache_write_1h_price)

  if (
    inputPrice === undefined ||
    outputPrice === undefined ||
    cacheWritePrice === undefined ||
    cacheReadPrice === undefined ||
    cacheWrite1hPrice === undefined
  ) {
    return undefined
  }

  return {
    inputPrice,
    outputPrice,
    cacheWritePrice,
    cacheWrite1hPrice,
    cacheReadPrice,
  }
}

function parseModel(value: unknown): ModelPlazaModel | null {
  const model = asRecord(value)
  if (!model) return null

  const name = parseString(model.name, { max: 256 })
  const platform = parseString(model.platform, { max: 64 })
  const pricing = parseModelPricing(model.pricing)
  const officialPricing = parseOfficialPricing(model.official_pricing)
  if (!name || !platform || pricing === undefined || officialPricing === undefined) return null

  return { name, platform, pricing, officialPricing }
}

function isValidPeakTime(value: string): boolean {
  const match = /^(\d{2}):(\d{2})$/.exec(value)
  if (!match) return false
  const hours = Number(match[1])
  const minutes = Number(match[2])
  return hours <= 23 && minutes <= 59
}

function parseGroup(value: unknown): ModelPlazaGroup | null {
  const group = asRecord(value)
  if (!group) return null

  const id = parseFiniteNumber(group.id, { integer: true })
  const name = parseString(group.name, { max: 256 })
  const description = parseString(group.description, { allowEmpty: true, max: 10_000 })
  const platform = parseString(group.platform, { max: 64 })
  const subscriptionType = parseString(group.subscription_type, { max: 64 })
  const rateMultiplier = parseFiniteNumber(group.rate_multiplier)
  const userRateMultiplier =
    group.user_rate_multiplier === undefined
      ? undefined
      : parseFiniteNumber(group.user_rate_multiplier)
  const peakRateEnabled = parseBoolean(group.peak_rate_enabled)
  const peakStart = parseString(group.peak_start, { allowEmpty: true, max: 5 })
  const peakEnd = parseString(group.peak_end, { allowEmpty: true, max: 5 })
  const peakRateMultiplier = parseFiniteNumber(group.peak_rate_multiplier)
  const isExclusive = parseBoolean(group.is_exclusive)
  const imageRateIndependent = parseBoolean(group.image_rate_independent)
  const imageRateMultiplier = parseFiniteNumber(group.image_rate_multiplier)

  if (
    id === null ||
    !name ||
    description === null ||
    !platform ||
    !subscriptionType ||
    rateMultiplier === null ||
    (group.user_rate_multiplier !== undefined && userRateMultiplier === null) ||
    peakRateEnabled === null ||
    peakStart === null ||
    peakEnd === null ||
    peakRateMultiplier === null ||
    isExclusive === null ||
    imageRateIndependent === null ||
    imageRateMultiplier === null ||
    !Array.isArray(group.models)
  ) {
    return null
  }

  if (
    peakRateEnabled &&
    (!isValidPeakTime(peakStart) ||
      !isValidPeakTime(peakEnd) ||
      peakStart >= peakEnd ||
      subscriptionType !== 'subscription')
  ) {
    return null
  }

  const models: ModelPlazaModel[] = []
  for (const rawModel of group.models) {
    const model = parseModel(rawModel)
    if (!model) return null
    models.push(model)
  }

  return {
    id,
    name,
    description,
    platform,
    subscriptionType,
    rateMultiplier,
    ...(typeof userRateMultiplier === 'number' ? { userRateMultiplier } : {}),
    peakRateEnabled,
    peakStart,
    peakEnd,
    peakRateMultiplier,
    isExclusive,
    imageRateIndependent,
    imageRateMultiplier,
    models,
  }
}

/** Strictly parses the backend response envelope; malformed payloads fail closed. */
export function parseModelPlazaResponse(payload: unknown): ModelPlazaData | null {
  const envelope = asRecord(payload)
  if (!envelope || envelope.code !== 0) return null
  const data = asRecord(envelope.data)
  if (!data || !Array.isArray(data.groups)) return null

  const description = parseString(data.description, { allowEmpty: true, max: 20_000 })
  if (description === null) return null

  const groups: ModelPlazaGroup[] = []
  for (const rawGroup of data.groups) {
    const group = parseGroup(rawGroup)
    if (!group) return null
    groups.push(group)
  }
  return { description, groups }
}

function parseRetryAfter(value: string | null): number | null {
  if (!value) return null
  const seconds = Number(value)
  if (Number.isFinite(seconds) && seconds >= 0) return Math.ceil(seconds)
  const at = Date.parse(value)
  if (!Number.isFinite(at)) return null
  return Math.max(0, Math.ceil((at - Date.now()) / 1_000))
}

/**
 * Fetches public model-plaza data. It is deliberately stateless, so callers can
 * invoke the same function again for a manual retry without resetting a cache.
 */
export async function fetchModelPlaza(
  options: FetchModelPlazaOptions = {},
): Promise<ModelPlazaResult> {
  if (options.enabled === false) return { status: 'disabled' }

  const request = options.request ?? fetch
  const controller = new AbortController()
  const timeoutMs = Math.max(0, options.timeoutMs ?? DEFAULT_TIMEOUT_MS)
  let timedOut = false

  const handleCallerAbort = () => controller.abort(options.signal?.reason)
  if (options.signal?.aborted) {
    return { status: 'error', reason: 'aborted' }
  }
  options.signal?.addEventListener('abort', handleCallerAbort, { once: true })
  const timeoutId = globalThis.setTimeout(() => {
    timedOut = true
    controller.abort()
  }, timeoutMs)

  try {
    const response = await request(options.endpoint ?? DEFAULT_ENDPOINT, {
      cache: 'no-store',
      credentials: 'omit',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })

    if (response.status === 401) return { status: 'auth-required' }
    if (response.status === 403) return { status: 'forbidden' }
    if (response.status === 404) return { status: 'not-enabled' }
    if (response.status === 429) {
      return {
        status: 'rate-limited',
        retryAfter: parseRetryAfter(response.headers.get('Retry-After')),
      }
    }
    if (response.status >= 500) {
      return { status: 'error', reason: 'server', httpStatus: response.status }
    }
    if (!response.ok) {
      return { status: 'error', reason: 'http', httpStatus: response.status }
    }

    let payload: unknown
    try {
      payload = await response.json()
    } catch {
      return { status: 'error', reason: 'invalid-response' }
    }
    const data = parseModelPlazaResponse(payload)
    if (!data) return { status: 'error', reason: 'invalid-response' }
    const hasDisplayableModels = listLandingPlatforms(data).length > 0
    return hasDisplayableModels ? { status: 'success', data } : { status: 'empty', data }
  } catch {
    if (timedOut) return { status: 'error', reason: 'timeout' }
    if (options.signal?.aborted) return { status: 'error', reason: 'aborted' }
    return { status: 'error', reason: 'network' }
  } finally {
    globalThis.clearTimeout(timeoutId)
    options.signal?.removeEventListener('abort', handleCallerAbort)
  }
}

function formatNumber(value: number, minFractionDigits: number): string {
  let output = value.toPrecision(10).replace(/\.?0+$/, '')
  if (minFractionDigits > 0 && !output.includes('e')) {
    const dot = output.indexOf('.')
    const currentDigits = dot === -1 ? 0 : output.length - dot - 1
    if (currentDigits < minFractionDigits) {
      output = (dot === -1 ? `${output}.` : output) + '0'.repeat(minFractionDigits - currentDigits)
    }
  }
  return output
}

/** Formats a non-negative price, preserving meaningful small decimals. */
export function formatPrice(
  value: number | null | undefined,
  scale = 1,
  minFractionDigits = 2,
  currency = '$',
): string {
  if (value == null || !Number.isFinite(value) || value < 0) return '—'
  return `${currency}${formatNumber(value * scale, minFractionDigits)}`
}

function formatTokenCount(value: number): string {
  if (value >= 1_000_000) return `${formatNumber(value / 1_000_000, 0)}M`
  if (value >= 1_000) return `${formatNumber(value / 1_000, 0)}K`
  return String(value)
}

export function formatIntervalLabel(interval: ModelPricingInterval): string {
  if (interval.tierLabel) return interval.tierLabel
  if (interval.maxTokens === null) return `>${formatTokenCount(interval.minTokens)}`
  if (interval.minTokens === 0) return `≤${formatTokenCount(interval.maxTokens)}`
  return `${formatTokenCount(interval.minTokens)}–${formatTokenCount(interval.maxTokens)}`
}

function normalizeUtcOffset(value: string | undefined): string {
  if (!value) return ''
  const match = /^([+-])(\d{2}):(\d{2})$/.exec(value.trim())
  if (!match) return ''
  const hours = Number(match[2])
  const minutes = Number(match[3])
  if (hours > 14 || minutes > 59 || (hours === 14 && minutes !== 0)) return ''
  return `${match[1]}${match[2]}:${match[3]}`
}

export function formatPeakNote(group: ModelPlazaGroup, serverUtcOffset = ''): string {
  if (!group.peakRateEnabled || !group.peakStart || !group.peakEnd) return ''
  const offset = normalizeUtcOffset(serverUtcOffset)
  const timezone = offset ? `（UTC${offset}）` : ''
  return `高峰时段 ${group.peakStart}–${group.peakEnd} 额外×${formatNumber(group.peakRateMultiplier, 0)}${timezone}`
}

function minutesFromTime(value: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value)
  if (!match) return null
  const hours = Number(match[1])
  const minutes = Number(match[2])
  if (hours > 23 || minutes > 59) return null
  return hours * 60 + minutes
}

/**
 * Matches Group.PeakMultiplierAt on the server. The public settings offset is
 * required so a visitor in another timezone still sees the server's current rate.
 */
export function peakMultiplierAt(
  group: ModelPlazaGroup,
  now: Date,
  serverUtcOffset = '',
): number {
  if (!group.peakRateEnabled || group.subscriptionType !== 'subscription') return 1
  const start = minutesFromTime(group.peakStart)
  const end = minutesFromTime(group.peakEnd)
  const offset = normalizeUtcOffset(serverUtcOffset)
  if (start === null || end === null || start >= end || !offset || !Number.isFinite(now.getTime())) return 1

  const sign = offset[0] === '-' ? -1 : 1
  const offsetMinutes = sign * (Number(offset.slice(1, 3)) * 60 + Number(offset.slice(4, 6)))
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes()
  const serverMinutes = (utcMinutes + offsetMinutes + 1_440) % 1_440
  return serverMinutes >= start && serverMinutes < end ? group.peakRateMultiplier : 1
}

export function platformFilterFor(platform: string): string {
  return platform.trim().toLowerCase() || 'other'
}

function effectiveRate(group: ModelPlazaGroup, now?: Date, serverUtcOffset?: string): number {
  const baseRate = group.userRateMultiplier ?? group.rateMultiplier
  return baseRate * (now ? peakMultiplierAt(group, now, serverUtcOffset) : 1)
}

function requestRate(group: ModelPlazaGroup, mode: ModelBillingMode): number {
  return mode === 'image' && group.imageRateIndependent
    ? group.imageRateMultiplier
    : group.userRateMultiplier ?? group.rateMultiplier
}

function emptyLine(label: string): LandingPriceLine {
  return {
    label,
    input: '—',
    output: '—',
    cacheWrite: '—',
    cacheRead: '—',
    request: '—',
  }
}

function buildPriceLines(
  group: ModelPlazaGroup,
  pricing: ModelPricing,
  now?: Date,
  serverUtcOffset?: string,
): LandingPriceLine[] {
  const tokenRate = effectiveRate(group, now, serverUtcOffset)
  if (pricing.billingMode === 'token') {
    const source = pricing.intervals.length
      ? pricing.intervals
      : [
          {
            minTokens: 0,
            maxTokens: null,
            tierLabel: '',
            inputPrice: pricing.inputPrice,
            outputPrice: pricing.outputPrice,
            cacheWritePrice: pricing.cacheWritePrice,
            cacheReadPrice: pricing.cacheReadPrice,
            perRequestPrice: null,
          },
        ]
    return source.map((interval) => ({
      ...emptyLine(pricing.intervals.length ? formatIntervalLabel(interval) : ''),
      input: formatPrice(interval.inputPrice === null ? null : interval.inputPrice * tokenRate, PER_MILLION, 2, '¥'),
      output: formatPrice(interval.outputPrice === null ? null : interval.outputPrice * tokenRate, PER_MILLION, 2, '¥'),
      cacheWrite: formatPrice(
        interval.cacheWritePrice === null ? null : interval.cacheWritePrice * tokenRate,
        PER_MILLION,
        2,
        '¥',
      ),
      cacheRead: formatPrice(
        interval.cacheReadPrice === null ? null : interval.cacheReadPrice * tokenRate,
        PER_MILLION,
        2,
        '¥',
      ),
    }))
  }

  const intervals = pricing.intervals.filter((interval) => interval.perRequestPrice !== null)
  const baseRequestPrice =
    pricing.perRequestPrice ?? (pricing.billingMode === 'image' ? pricing.imageOutputPrice : null)
  const source = intervals.length
    ? intervals
    : [
        {
          minTokens: 0,
          maxTokens: null,
          tierLabel: '',
          inputPrice: null,
          outputPrice: null,
          cacheWritePrice: null,
          cacheReadPrice: null,
          perRequestPrice: baseRequestPrice,
        },
      ]
  const rate = requestRate(group, pricing.billingMode)
  return source.map((interval) => ({
    ...emptyLine(intervals.length ? formatIntervalLabel(interval) : ''),
    request: formatPrice(
      interval.perRequestPrice === null ? null : interval.perRequestPrice * rate,
      1,
      2,
      '¥',
    ),
  }))
}

function rowScore(
  group: ModelPlazaGroup,
  pricing: ModelPricing,
  now?: Date,
  serverUtcOffset?: string,
): number {
  if (pricing.billingMode === 'token') {
    const values = pricing.intervals.length
      ? pricing.intervals.flatMap((interval) => [interval.outputPrice, interval.inputPrice])
      : [pricing.outputPrice, pricing.inputPrice]
    const first = values.find((value): value is number => value !== null)
    return first === undefined
      ? Number.POSITIVE_INFINITY
      : first * effectiveRate(group, now, serverUtcOffset)
  }
  const requestPrices = pricing.intervals
    .map((interval) => interval.perRequestPrice)
    .filter((value): value is number => value !== null)
  const first =
    requestPrices[0] ??
    pricing.perRequestPrice ??
    (pricing.billingMode === 'image' ? pricing.imageOutputPrice : null)
  return first === null ? Number.POSITIVE_INFINITY : first * requestRate(group, pricing.billingMode)
}

function toLandingPriceRow(
  group: ModelPlazaGroup,
  model: ModelPlazaModel,
  serverUtcOffset: string,
  now?: Date,
): (LandingPriceRow & { score: number }) | null {
  if (!model.pricing) return null
  const score = rowScore(group, model.pricing, now, serverUtcOffset)
  if (!Number.isFinite(score)) return null
  const mode = model.pricing.billingMode
  const rate = mode === 'token'
    ? effectiveRate(group, now, serverUtcOffset)
    : requestRate(group, mode)
  return {
    key: `${model.platform.toLowerCase()}:${model.name.toLowerCase()}:${mode}`,
    model: model.name,
    platform: model.platform,
    platformFilter: platformFilterFor(model.platform),
    groupId: group.id,
    groupName: group.name,
    subscriptionType: group.subscriptionType,
    billingMode: mode,
    unit: mode === 'token' ? '¥/1M tokens' : mode === 'image' ? '¥/张' : '¥/次',
    prices: buildPriceLines(group, model.pricing, now, serverUtcOffset),
    officialInput: formatPrice(model.officialPricing?.inputPrice, PER_MILLION),
    officialOutput: formatPrice(model.officialPricing?.outputPrice, PER_MILLION),
    officialCacheWrite: formatPrice(model.officialPricing?.cacheWritePrice, PER_MILLION),
    officialCacheRead: formatPrice(model.officialPricing?.cacheReadPrice, PER_MILLION),
    effectiveRate: rate,
    effectiveRateLabel: `${formatNumber(rate, 0)}×`,
    peakNote: mode === 'token' ? formatPeakNote(group, serverUtcOffset) : '',
    score,
  }
}

function compareRows(
  a: LandingPriceRow & { score: number },
  b: LandingPriceRow & { score: number },
): number {
  const tokenA = a.billingMode === 'token'
  const tokenB = b.billingMode === 'token'
  if (tokenA !== tokenB) return tokenA ? -1 : 1
  const officialA = a.officialOutput === '—' ? Number.NEGATIVE_INFINITY : 1
  const officialB = b.officialOutput === '—' ? Number.NEGATIVE_INFINITY : 1
  if (officialA !== officialB) return officialB - officialA
  return b.model.localeCompare(a.model, 'en', { numeric: true, sensitivity: 'base' })
}

function orderLandingPlatforms(platforms: Iterable<string>): string[] {
  const values = [...new Set(platforms)]
  const knownOrder = new Map<string, number>(
    LANDING_PLATFORM_ORDER.map((platform, index) => [platform, index]),
  )
  return values.sort((left, right) => {
    const leftIndex = knownOrder.get(left)
    const rightIndex = knownOrder.get(right)
    if (leftIndex !== undefined || rightIndex !== undefined) {
      return (leftIndex ?? Number.MAX_SAFE_INTEGER) - (rightIndex ?? Number.MAX_SAFE_INTEGER)
    }
    return left.localeCompare(right, 'en', { sensitivity: 'base' })
  })
}

export function listLandingPlatforms(
  data: ModelPlazaData,
  options: Pick<SelectPriceRowsOptions, 'serverUtcOffset' | 'now'> = {},
): string[] {
  const platforms: string[] = []
  for (const group of data.groups) {
    for (const model of group.models) {
      const row = toLandingPriceRow(
        group,
        model,
        options.serverUtcOffset ?? '',
        options.now,
      )
      if (row) platforms.push(row.platformFilter)
    }
  }
  return orderLandingPlatforms(platforms)
}

export function filterPriceRows<Row extends LandingPriceRow>(
  rows: readonly Row[],
  platform: LandingPlatformFilter = 'all',
  search = '',
): Row[] {
  const query = search.trim().toLowerCase()
  return rows.filter((row) => {
    if (platform !== 'all' && row.platformFilter !== platform) return false
    return !query || row.model.toLowerCase().includes(query) || row.groupName.toLowerCase().includes(query)
  })
}

/**
 * Flattens groups, prefers a standard public group and then its cheapest
 * comparable offer for duplicates, balances platforms, and caps output at 8.
 */
export function selectRepresentativePriceRows(
  data: ModelPlazaData,
  options: SelectPriceRowsOptions = {},
): LandingPriceRow[] {
  const byModel = new Map<string, LandingPriceRow & { score: number }>()
  for (const group of data.groups) {
    for (const model of group.models) {
      const row = toLandingPriceRow(group, model, options.serverUtcOffset ?? '', options.now)
      if (!row) continue
      const existing = byModel.get(row.key)
      const rowIsStandard = row.subscriptionType === 'standard'
      const existingIsStandard = existing?.subscriptionType === 'standard'
      if (
        !existing ||
        (rowIsStandard && !existingIsStandard) ||
        (rowIsStandard === existingIsStandard &&
          (row.score < existing.score ||
            (row.score === existing.score && row.groupName.localeCompare(existing.groupName) < 0)))
      ) {
        byModel.set(row.key, row)
      }
    }
  }

  const requestedLimit = Number.isFinite(options.limit) ? Math.floor(options.limit ?? MAX_LANDING_ROWS) : MAX_LANDING_ROWS
  const limit = Math.max(0, Math.min(MAX_LANDING_ROWS, requestedLimit))
  const platform = options.platform ?? 'all'
  const filtered = filterPriceRows([...byModel.values()], platform, options.search).sort(compareRows)
  if (platform !== 'all') return filtered.slice(0, limit).map(({ score: _, ...row }) => row)

  const order = orderLandingPlatforms(filtered.map((row) => row.platformFilter))
  const buckets = new Map<string, Array<LandingPriceRow & { score: number }>>(
    order.map((category) => [category, []]),
  )
  for (const row of filtered) buckets.get(row.platformFilter)?.push(row)

  const selected: Array<LandingPriceRow & { score: number }> = []
  while (selected.length < limit) {
    let added = false
    for (const category of order) {
      const row = buckets.get(category)?.shift()
      if (!row) continue
      selected.push(row)
      added = true
      if (selected.length === limit) break
    }
    if (!added) break
  }
  return selected.map(({ score: _, ...row }) => row)
}
