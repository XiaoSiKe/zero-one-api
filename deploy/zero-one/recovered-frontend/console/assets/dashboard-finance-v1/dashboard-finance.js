// 二开保护：管理员账单收益界面。原仪表盘只提供选中日期，
// 金额全部读取绕过缓存的历史账单统计，禁止使用现倍率重算旧账。
import { calendarDays, dailyValues, dateInTimezone, billedSummary, formatTokenConsumption } from './data.js'

let Chart = null
let initialRefreshRequested = false
const metrics = [
  { key: 'tokens', title: '每日总 Token 消耗', unit: 'Token', color: '#6366f1' },
  { key: 'charged', title: '每日消费', unit: '$', color: '#3b82f6' },
  { key: 'earnings', title: '每日收益', unit: '$', color: '#16a34a' },
]
let snapshot = null
let identity = ''
let revision = 0
let renderedRevision = -1
let cards = null
let trends = null
let controller = null
let requestSequence = 0
let requestPending = false
let authRecoveryRequested = false
let charts = []
let theme = ''
let chartRows = []
let refreshTimer = 0
let lastUpdated = null
const REFRESH_INTERVAL_MS = 30_000
const REQUEST_TIMEOUT_MS = 20_000
const FIRST_BILLING_DATE = '1970-01-01'

function adminIdentity() {
  try {
    const user = JSON.parse(localStorage.getItem('auth_user') || 'null')
    return location.pathname === '/admin/dashboard' && user?.role === 'admin'
      ? localStorage.getItem('auth_token') || '' : ''
  } catch { return '' }
}

function element(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

function money(value) {
  if (value === null) return '—'
  return `${value < 0 ? '−' : ''}$${Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 8 })}`
}

function reset() {
  clearTimeout(refreshTimer)
  refreshTimer = 0
  lastUpdated = null
  controller?.abort()
  controller = null
  for (const chart of charts) chart.destroy()
  charts = []
  chartRows = []
  cards?.remove()
  trends?.remove()
  cards = trends = null
  snapshot = null
  identity = ''
  renderedRevision = -1
  requestPending = false
  initialRefreshRequested = false
  authRecoveryRequested = false
}

function drawCharts(rows) {
  if (!trends?.isConnected || !Chart) return
  chartRows = rows
  for (const chart of charts) chart.destroy()
  const dark = document.documentElement.classList.contains('dark')
  theme = dark ? 'dark' : 'light'
  charts = metrics.map((metric, index) => new Chart(trends.querySelectorAll('canvas')[index], {
    type: 'line',
    data: {
      labels: rows.map(row => row.date),
      datasets: [{
        label: metric.title,
        data: rows.map(row => row[metric.key]),
        borderColor: metric.color,
        backgroundColor: `${metric.color}12`,
        fill: true,
        tension: 0.25,
        cubicInterpolationMode: 'monotone',
        pointRadius: rows.length > 45 ? 0 : 2,
        pointHitRadius: 12,
        borderWidth: 2,
        spanGaps: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: context => `${metric.title}：${metric.key === 'tokens' ? formatTokenConsumption(context.parsed.y) : money(context.parsed.y)}` } },
      },
      scales: {
        x: { ticks: { color: dark ? '#a1a1aa' : '#6b7280', maxTicksLimit: 5, maxRotation: 0, callback: (_value, index) => rows[index]?.date.slice(5) }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { color: dark ? '#a1a1aa' : '#6b7280', maxTicksLimit: 5, callback: value => metric.key === 'tokens' ? formatTokenConsumption(Number(value)) : `$${value}` }, grid: { color: dark ? '#ffffff12' : '#0000000c' } },
      },
    },
  }))
  const body = trends.querySelector('tbody')
  body.replaceChildren(...rows.map(row => {
    const tr = element('tr')
    for (const value of [row.date, formatTokenConsumption(row.tokens), money(row.charged), row.earnings === null && row.charged !== null ? '待确认' : money(row.earnings)]) tr.append(element('td', '', value))
    return tr
  }))
}

function mount() {
  const root = document.querySelector('.app-shell main > .space-y-6')
  const statRows = root?.querySelectorAll(':scope > .grid.grid-cols-2')
  const dateCard = root?.querySelector('.date-picker-trigger')?.closest('.card')
  if (!root || statRows.length < 2 || !dateCard) return false
  if (!cards?.isConnected) {
    cards = element('section', 'dashboard-finance-summary')
    cards.dataset.zeroOneFinanceSummary = 'true'
    cards.setAttribute('aria-label', '实际消费与收益')
    for (const [index, title] of ['今日消费', '今日收益', '总消费', '总收益'].entries()) {
      const card = element('div', 'card p-4')
      card.append(element('p', 'dashboard-finance-label', title), element('strong', 'dashboard-finance-value', '—'), element('p', 'dashboard-finance-caption', index % 2 ? '实际扣费 − 账号成本' : '客户实际扣费'))
      cards.append(card)
    }
    statRows[1].after(cards)
  }
  if (!trends?.isConnected) {
    trends = element('section', 'dashboard-finance-trends')
    trends.dataset.zeroOneFinanceTrends = 'true'
    trends.setAttribute('aria-label', '每日用量与收益趋势')
    const header = element('div', 'dashboard-finance-heading')
    const copy = element('div')
    copy.append(element('h2', '', '每日用量与收益'), element('p', 'dashboard-finance-range'), element('p', 'dashboard-finance-updated', '尚未读取实时账单'))
    const retry = element('button', 'btn btn-secondary', '重新读取')
    retry.type = 'button'
    retry.addEventListener('click', () => { if (!requestPending) loadDays(); else dateCard.querySelector('button.btn')?.click() })
    header.append(copy, retry)
    const status = element('p', 'dashboard-finance-status')
    status.setAttribute('role', 'status')
    const grid = element('div', 'dashboard-finance-chart-grid')
    for (const metric of metrics) {
      const card = element('div', 'card p-4')
      card.append(element('h3', '', metric.title), element('p', 'dashboard-finance-caption', metric.unit))
      const plot = element('div', 'dashboard-finance-plot')
      const canvas = element('canvas')
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-label', `${metric.title}曲线图；精确数值见下方每日明细`)
      plot.append(canvas)
      card.append(plot)
      grid.append(card)
    }
    const details = element('details', 'dashboard-finance-details')
    details.append(element('summary', '', '查看每日明细'))
    const table = element('table')
    const head = element('thead')
    const row = element('tr')
    for (const text of ['日期', '总 Token', '实际消费', '收益']) { const th = element('th', '', text); th.scope = 'col'; row.append(th) }
    head.append(row)
    table.append(head, element('tbody'))
    details.append(table)
    trends.append(header, status, grid, element('p', 'dashboard-finance-caption', '收益按客户实际扣费减上游声明成本计算；成本使用请求时有效的上游声明倍率，缺少声明依据的历史账单标为待确认。不包含其他经营费用；总计统计全部保留账单。'), details)
    dateCard.after(trends)
  }
  return true
}

async function loadDays() {
  if (adminIdentity() !== identity) { reset(); reconcile(); return }
  if (requestPending || !snapshot || !trends?.isConnected || document.hidden) return
  clearTimeout(refreshTimer)
  controller?.abort()
  const activeController = new AbortController()
  controller = activeController
  const token = identity
  const current = snapshot
  const days = calendarDays(current.start, current.end)
  const status = trends.querySelector('[role="status"]')
  trends.querySelector('.dashboard-finance-range').textContent = `${current.start} 至 ${current.end} · 每日统计 · ${current.timezone}`
  trends.setAttribute('aria-busy', 'true')
  if (!days.length) { status.textContent = '日期范围无效，请重新选择。'; trends.setAttribute('aria-busy', 'false'); return }
  const today = dateInTimezone(new Date(), current.timezone)
  const rows = days.map(date => ({ date, tokens: null, charged: null, earnings: null }))
  let next = 0
  let complete = 0
  let failed = 0
  let todayStats = null
  let totalStats = null
  let authFailed = false
  status.textContent = `正在读取每日数据 · 0/${days.length}`
  try {
    const library = await import('../vendor-chart-IcnlmW08.js')
    Chart = library.C
    Chart.register(library.b, library.L, library.P, library.c, library.p, library.a, library.i)
  } catch {
    if (controller === activeController && trends?.isConnected) {
      trends.setAttribute('aria-busy', 'false')
      status.textContent = '图表资源未能加载，请刷新页面后重试。'
      controller = null
      scheduleRefresh()
    }
    return
  }
  if (activeController.signal.aborted || controller !== activeController) return
  // 统一三个并发上限；今日在已选日期内时复用同一次响应，避免卡片/曲线口径漂移。
  const jobs = [{ kind: 'total', start: FIRST_BILLING_DATE, end: today }]
  if (!days.includes(today)) jobs.push({ kind: 'today', start: today, end: today })
  days.forEach((date, index) => jobs.push({ kind: 'day', start: date, end: date, index }))
  const memo = new Map()
  async function readStats(job) {
    const key = `${job.start}:${job.end}`
    if (memo.has(key)) return memo.get(key)
    const read = (async () => {
      const params = new URLSearchParams({ start_date: job.start, end_date: job.end, timezone: current.timezone, nocache: 'true' })
      const response = await fetch(`/api/v1/admin/usage/stats?${params}`, {
        signal: AbortSignal.any([activeController.signal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)]),
        cache: 'no-store', headers: { Authorization: `Bearer ${token}` },
      })
      if (response.status === 401 || response.status === 403) authFailed = true
      const payload = await response.json()
      if (!response.ok || payload.code !== 0 || !payload.data) throw new Error('账单统计读取失败')
      return payload.data
    })()
    memo.set(key, read)
    return read
  }
  async function worker() {
    while (next < jobs.length && !activeController.signal.aborted && !authFailed) {
      const job = jobs[next++]
      try {
        const stats = await readStats(job)
        if (job.kind === 'total') totalStats = stats
        if (job.kind === 'today' || (job.kind === 'day' && job.start === today)) todayStats = stats
        if (job.kind === 'day') {
          rows[job.index] = { date: job.start, ...dailyValues(stats) }
          if (stats.total_tokens == null || stats.total_actual_cost == null) failed++
        }
      } catch {
        if (activeController.signal.aborted) return
        failed++
      }
      if (job.kind === 'day') complete++
      if (controller === activeController && status.isConnected) status.textContent = `正在读取实时账单 · ${complete}/${days.length} 天`
    }
  }
  await Promise.all(Array.from({ length: Math.min(3, jobs.length) }, worker))
  if (controller !== activeController || activeController.signal.aborted || adminIdentity() !== token) return
  const values = billedSummary(todayStats, totalStats)
  cards.querySelectorAll('.dashboard-finance-value').forEach((node, index) => {
    node.textContent = values[index] === null && index % 2 && (index === 1 ? todayStats : totalStats) ? '待确认' : money(values[index])
    node.classList.toggle('is-negative', values[index] !== null && values[index] < 0)
  })
  cards.title = `今日：${today}（${current.timezone}）；总计：全部保留账单。`
  drawCharts(rows)
  trends.setAttribute('aria-busy', 'false')
  if (failed || values[0] === null || values[2] === null || authFailed) {
    status.textContent = authFailed ? '登录状态失效或没有权限，请重新登录。' : '部分账单未能完整读取，缺失处已留空；请重新读取。'
    trends.querySelector('.dashboard-finance-updated').textContent = lastUpdated ? `本次更新未完成 · 上次完整更新 ${lastUpdated}` : '本次未完整更新'
  } else {
    lastUpdated = new Date().toLocaleTimeString('zh-CN', { timeZone: current.timezone, hour12: false })
    trends.querySelector('.dashboard-finance-updated').textContent = `更新于 ${lastUpdated} · 页面可见时每 30 秒自动刷新`
    status.textContent = values[1] === null || values[3] === null || rows.some(row => row.earnings === null) ? '部分账单缺少有效的历史上游声明倍率，成本与收益待确认；已确认日期正常显示。' : '金额来自已落库账单；点击或悬停曲线可查看数值。'
  }
  controller = null
  if (authFailed && !authRecoveryRequested) {
    // 续期只交给既有 Axios/鉴权客户端，最多请求一次原刷新动作，禁止自建续期循环。
    authRecoveryRequested = true
    document.querySelector('.app-shell main .date-picker-trigger')?.closest('.card')?.querySelector('button.btn')?.click()
  } else if (!authFailed) {
    authRecoveryRequested = false
    scheduleRefresh()
  }
}

function scheduleRefresh() {
  clearTimeout(refreshTimer)
  if (adminIdentity() && snapshot && !document.hidden) {
    refreshTimer = setTimeout(() => { if (!requestPending && !controller) loadDays() }, REFRESH_INTERVAL_MS)
  }
}

function resumeRefresh() {
  if (!document.hidden && adminIdentity() && snapshot && !requestPending && !controller) loadDays()
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearTimeout(refreshTimer)
    controller?.abort()
    controller = null
    if (trends?.isConnected) {
      trends.setAttribute('aria-busy', 'false')
      trends.querySelector('.dashboard-finance-updated').textContent = lastUpdated ? `已暂停自动刷新 · 上次完整更新 ${lastUpdated}` : '后台已暂停自动刷新'
    }
  } else resumeRefresh()
})
window.addEventListener('focus', resumeRefresh)
window.addEventListener('online', resumeRefresh)
window.addEventListener('storage', event => {
  if (event.key === 'auth_token' || event.key === 'auth_user' || event.key === null) { reset(); reconcile() }
})
window.addEventListener('pageshow', event => { if (event.persisted) resumeRefresh() })

function reconcile() {
  const token = adminIdentity()
  if (!token || (identity && identity !== token)) { reset(); return }
  if (!snapshot) {
    // 模块晚于原页面请求加载时，只补触发一次原刷新动作；
    // 不阻塞登录，不新建仪表盘或鉴权客户端。
    const refresh = document.querySelector('.app-shell main .date-picker-trigger')?.closest('.card')?.querySelector('button.btn')
    if (!requestPending && !initialRefreshRequested && refresh) {
      initialRefreshRequested = true
      refresh.click()
    }
    return
  }
  if (!mount()) return
  if (renderedRevision !== revision) {
    renderedRevision = revision
    loadDays()
  } else if (charts.length && theme !== (document.documentElement.classList.contains('dark') ? 'dark' : 'light')) drawCharts(chartRows)
}

// 只观察既有日期读取，不修改原请求、响应、鉴权和错误处理。
const originalOpen = XMLHttpRequest.prototype.open
const originalSend = XMLHttpRequest.prototype.send
const requests = new WeakMap()
XMLHttpRequest.prototype.open = function(method, url, ...args) {
  const target = new URL(String(url), location.origin)
  requests.delete(this)
  if (String(method).toUpperCase() === 'GET' && target.origin === location.origin && target.pathname === '/api/v1/admin/dashboard/snapshot-v2') requests.set(this, target)
  return originalOpen.call(this, method, url, ...args)
}
XMLHttpRequest.prototype.send = function(...args) {
  const url = requests.get(this)
  const token = adminIdentity()
  if (url && token) {
    const sequence = ++requestSequence
    requestPending = true
    clearTimeout(refreshTimer)
    controller?.abort()
    controller = null
    if (trends?.isConnected) {
      trends.setAttribute('aria-busy', 'true')
      drawCharts([])
      trends.querySelector('[role="status"]').textContent = '正在读取所选时间范围…'
      trends.querySelector('.dashboard-finance-range').textContent = `${url.searchParams.get('start_date')} 至 ${url.searchParams.get('end_date')} · 每日统计`
    }
    this.addEventListener('loadend', () => {
      if (sequence !== requestSequence || adminIdentity() !== token) return
      requestPending = false
      let payload
      try { payload = this.responseType === 'json' ? this.response : JSON.parse(this.responseText) } catch { /* 原仪表盘继续处理响应格式错误。 */ }
      // 日期由原页面发出的查询参数确定，主快照失败不应阻断独立账单读取。
      const data = payload?.data || {}
      const start = url.searchParams.get('start_date') || data.start_date
      const end = url.searchParams.get('end_date') || data.end_date
      if (!calendarDays(start, end).length) return
      identity = token
      snapshot = {
        start,
        end,
        timezone: url.searchParams.get('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
      revision++
      window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
    }, { once: true })
  }
  return originalSend.apply(this, args)
}

new MutationObserver(reconcile).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('dashboard-finance', reconcile)
