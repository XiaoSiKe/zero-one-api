import { ArrowRight, ExternalLink, RefreshCw, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import {
  fetchModelPlaza,
  listLandingPlatforms,
  selectRepresentativePriceRows,
  type LandingPlatformFilter,
  type LandingPriceRow,
  type ModelPlazaData,
  type ModelPlazaResult,
} from '../lib/modelPlaza'
import { consoleUrl } from '../siteConfig'
import Action from './Action'
import { subscribePageResume } from '../lib/pageResume'
import ShinyText from './ShinyText'

interface PricingSectionProps {
  enabled: boolean
  requireAuth: boolean
  serverUtcOffset: string
  onModelPlazaDataChange?: (data: ModelPlazaData | null) => void
}

type PricingViewState = { status: 'loading' } | ModelPlazaResult

const FILTER_LABELS = new Map<string, string>([
  ['all', 'All'],
  ['anthropic', 'Claude'],
  ['openai', 'OpenAI'],
  ['gemini', 'Gemini'],
  ['antigravity', 'Antigravity'],
  ['grok', 'Grok'],
  ['kimi', 'Kimi'],
  ['zhipu', 'Zhipu GLM'],
  ['deepseek', 'DeepSeek'],
])

function platformLabel(platform: string): string {
  return FILTER_LABELS.get(platform) ?? platform
}

function discountLabel(rateLabel: string): string {
  return rateLabel.endsWith('×') ? `${rateLabel.slice(0, -1)}折` : rateLabel
}

function PriceValues({ row, field }: { row: LandingPriceRow; field: 'input' | 'output' | 'request' }) {
  return (
    <div className="price-values">
      {row.prices.map((line, index) => (
        <span key={`${line.label}:${index}`}>
          {line.label ? <small>{line.label}</small> : null}
          <strong>{line[field]}</strong>
        </span>
      ))}
    </div>
  )
}

function PlatformPrice({ row, field }: { row: LandingPriceRow; field: 'input' | 'output' }) {
  const hasCache = row.prices.some((line) => line.cacheWrite !== '—' || line.cacheRead !== '—')
  return (
    <div className={`platform-price-cell${hasCache ? ' platform-price-cell--with-cache-line' : ''}`}>
      <PriceValues row={row} field={row.billingMode === 'token' ? field : field === 'input' ? 'request' : 'output'} />
      {hasCache && field === 'input' ? (
        <small className="cache-note">
          缓存写 {row.prices[0]?.cacheWrite ?? '—'} · 读 {row.prices[0]?.cacheRead ?? '—'}
        </small>
      ) : null}
      <small className="price-unit">{row.unit}</small>
      <span className="rate-badge">
        <span className="rate-badge-rate">{row.effectiveRateLabel}</span>
        <span className="rate-badge-separator" aria-hidden="true">·</span>
        <span className="rate-badge-discount">{discountLabel(row.effectiveRateLabel)}</span>
      </span>
    </div>
  )
}

function OfficialPrice({ value, cache }: { value: string; cache: string }) {
  return (
    <div className="official-price-cell">
      <strong>{value}</strong>
      {value !== '—' ? <small>$ / 1M tokens</small> : null}
      {cache !== '—' ? <small>缓存 {cache}</small> : null}
    </div>
  )
}

function billingLabel(row: LandingPriceRow): string {
  if (row.billingMode === 'token') return 'Token'
  if (row.billingMode === 'image') return '按张'
  if (row.billingMode === 'video') return '视频'
  return '按次'
}

function PriceTable({ rows, onClear }: { rows: LandingPriceRow[]; onClear: () => void }) {
  return (
      <div className="price-table-wrap" tabIndex={0} aria-label="模型价格横向滚动区域">
        <table className="price-table">
          <thead>
            <tr>
              <th scope="col">模型</th>
              <th scope="col">提供商</th>
              <th scope="col">计费</th>
              <th scope="col">输入（官方参考）</th>
              <th scope="col">输出（官方参考）</th>
              <th scope="col" className="paid-price-column paid-price-column--start">输入（零一 API）</th>
              <th scope="col" className="paid-price-column paid-price-column--end">输出（零一 API）</th>
            </tr>
          </thead>
          <tbody>
            {rows.length ? rows.map((row) => (
              <tr key={`${row.key}:${row.billingMode}`}>
                <th scope="row">
                  <span className="model-name">{row.model}</span>
                  <small>{row.groupName}</small>
                </th>
                <td><span className={`provider-mark provider-${row.platformFilter}`} />{row.platform}</td>
                <td>
                  <span>{billingLabel(row)}</span>
                  <small>{row.unit}</small>
                </td>
                <td><OfficialPrice value={row.officialInput} cache={row.officialCacheRead} /></td>
                <td><OfficialPrice value={row.officialOutput} cache="—" /></td>
                <td className="paid-price-column paid-price-column--start"><PlatformPrice row={row} field="input" /></td>
                <td className="paid-price-column paid-price-column--end"><PlatformPrice row={row} field="output" />{row.peakNote ? <small className="peak-note">{row.peakNote}</small> : null}</td>
              </tr>
            )) : (
              <tr className="price-empty-row">
                <td colSpan={7}>
                  <strong>没有匹配的模型</strong>
                  <span>调整平台筛选或搜索关键词后再试。</span>
                  <button type="button" onClick={onClear}>清除筛选</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  )
}

interface PricingMessageProps {
  state: Exclude<PricingViewState, { status: 'success' }>
  onRetry: () => void
}

function PricingMessage({ state, onRetry }: PricingMessageProps) {
  let title = '实时价目暂未公开'
  let description = '公开价格功能当前未开启，页面不会展示示例价格。'
  let retry = false

  if (state.status === 'loading') {
    title = '正在读取实时价格'
    description = '正在获取最新公开价格。'
  } else if (state.status === 'auth-required' || state.status === 'forbidden') {
    title = '登录后查看模型与价格'
    description = '当前站点要求登录后访问模型广场。'
  } else if (state.status === 'rate-limited') {
    title = '价格请求过于频繁'
    description = state.retryAfter
      ? `请在约 ${state.retryAfter} 秒后重试。`
      : '请稍后手动重试。'
    retry = true
  } else if (state.status === 'empty') {
    title = '暂无公开模型价格'
    description = '当前没有可公开展示的模型与计费配置。'
  } else if (state.status === 'error') {
    retry = state.reason !== 'aborted'
    if (state.reason === 'timeout') {
      title = '读取价格超时'
      description = '请求超过 3 秒，未展示任何缓存或示例价格。'
    } else if (state.reason === 'invalid-response') {
      title = '价格数据暂时不可用'
      description = '服务返回的数据格式无法安全展示。'
    } else if (state.reason === 'server') {
      title = '价格服务暂时不可用'
      description = '服务端暂时无法返回实时价目。'
    } else if (state.reason === 'aborted') {
      title = '价格读取已取消'
      description = '页面已停止本次价格请求。'
    } else {
      title = '暂时无法读取价格'
      description = '请检查网络后手动重试。'
    }
  }

  const needsLogin = state.status === 'auth-required' || state.status === 'forbidden'

  return (
    <div className={`pricing-message${state.status === 'loading' ? ' is-loading' : ''}`} role="status">
      <span className="pricing-message-mark" aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {needsLogin ? (
        <Action
          href={consoleUrl('/login?redirect=/model-plaza')}
        >
          登录查看
          <ArrowRight aria-hidden="true" />
        </Action>
      ) : null}
      {retry ? (
        <Action
          type="button"
          onClick={onRetry}
        >
          <RefreshCw aria-hidden="true" />
          重新读取
        </Action>
      ) : null}
    </div>
  )
}

export default function PricingSection({
  enabled,
  requireAuth,
  serverUtcOffset,
  onModelPlazaDataChange,
}: PricingSectionProps) {
  const [platform, setPlatform] = useState<LandingPlatformFilter>('all')
  const [search, setSearch] = useState('')
  const [attempt, setAttempt] = useState(0)
  const [now, setNow] = useState(() => new Date())
  const [state, setState] = useState<PricingViewState>(() => {
    if (!enabled) return { status: 'disabled' }
    if (requireAuth) return { status: 'auth-required' }
    return { status: 'loading' }
  })

  useEffect(() => {
    if (!enabled) {
      onModelPlazaDataChange?.(null)
      setState({ status: 'disabled' })
      return
    }
    if (requireAuth) {
      onModelPlazaDataChange?.(null)
      setState({ status: 'auth-required' })
      return
    }

    // ZERO-ONE 二开保护：短暂失败重试一次，返回官网后重读；并发事件共享本次请求。
    let active = true
    let controller: AbortController | null = null
    let retryTimer: number | undefined
    onModelPlazaDataChange?.(null)
    setState({ status: 'loading' })
    const load = async (mayRetry = true) => {
      if (controller) return
      window.clearTimeout(retryTimer)
      const requestController = new AbortController()
      controller = requestController
      const result = await fetchModelPlaza({ enabled: true, timeoutMs: 3_000, signal: requestController.signal })
      if (!active || requestController.signal.aborted) return
      controller = null
      if (mayRetry && result.status === 'error' && ['timeout', 'network', 'server'].includes(result.reason)) {
        retryTimer = window.setTimeout(() => void load(false), 1_000)
        return
      }
      onModelPlazaDataChange?.(result.status === 'success' ? result.data : null)
      setState(result)
    }
    const unsubscribe = subscribePageResume(() => void load())
    void load()
    return () => {
      active = false
      window.clearTimeout(retryTimer)
      controller?.abort()
      unsubscribe()
    }
  }, [attempt, enabled, onModelPlazaDataChange, requireAuth])

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(intervalId)
  }, [])

  const rows = useMemo(() => {
    if (state.status !== 'success') return []
    return selectRepresentativePriceRows(state.data, {
      platform,
      search,
      limit: 8,
      serverUtcOffset,
      now,
    })
  }, [now, platform, search, serverUtcOffset, state])

  const visiblePlatforms = useMemo(() => {
    if (state.status !== 'success') return []
    return listLandingPlatforms(state.data, { serverUtcOffset, now })
  }, [now, serverUtcOffset, state])

  useEffect(() => {
    if (platform !== 'all' && !visiblePlatforms.includes(platform)) setPlatform('all')
  }, [platform, visiblePlatforms])

  return (
    <section id="pricing" className="section pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-heading-row" data-reveal>
        <div className="section-heading">
          <h2 id="pricing-title"><ShinyText text="实时价格" speed={2} spread={120} /></h2>
        </div>
        <Action
          className="pricing-all-models"
          href={consoleUrl('/model-plaza')}
        >
          进入模型广场
          <ExternalLink aria-hidden="true" />
        </Action>
      </div>

      {state.status === 'success' ? (
        <div className="pricing-data-shell pricing-data-enter">
          <div className="price-controls">
            <div className="filter-tabs" role="group" aria-label="按平台筛选">
              {(['all', ...visiblePlatforms] as LandingPlatformFilter[]).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={platform === filter}
                  onClick={() => setPlatform(filter)}
                >
                  {platformLabel(filter)}
                </button>
              ))}
            </div>
            <label className="model-search">
              <span className="sr-only">搜索模型或分组</span>
              <Search aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="搜索模型或分组"
              />
            </label>
          </div>

          <PriceTable rows={rows} onClear={() => { setPlatform('all'); setSearch('') }} />
        </div>
      ) : (
        <div className="pricing-data-enter">
          <PricingMessage state={state} onRetry={() => setAttempt((value) => value + 1)} />
        </div>
      )}
    </section>
  )
}
