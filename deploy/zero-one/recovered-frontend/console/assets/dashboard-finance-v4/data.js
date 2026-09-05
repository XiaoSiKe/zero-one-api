// 二开保护：仅根据后台历史账单结果展示金额。
// 禁止使用当前配置倍率重算旧账；失败或缺失不补成零收益。
export function amount(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function requestCount(value) {
  return Number.isInteger(value) && value >= 0 ? value : null
}

// New servers return an explicit finance scope so a legacy invoice without a
// declaration cannot hide the invoices that are provably costed. The fallback
// keeps this immutable UI namespace compatible with the immediately preceding
// server while a coherent release is rolling out.
export function financeValues(stats) {
  const charged = amount(stats?.total_actual_cost)
  const finance = stats?.finance
  const confirmedRequests = requestCount(finance?.confirmed_requests)
  const unconfirmedRequests = requestCount(finance?.unconfirmed_requests)
  const confirmedCharged = amount(finance?.confirmed_actual_cost)
  const confirmedCost = amount(finance?.confirmed_account_cost)
  const confirmedProfit = amount(finance?.confirmed_profit)
  const totalRequests = requestCount(stats?.total_requests)
  const countsMatch = totalRequests === null || (confirmedRequests !== null && unconfirmedRequests !== null && confirmedRequests + unconfirmedRequests === totalRequests)
  if (charged !== null && countsMatch && confirmedRequests !== null && unconfirmedRequests !== null && confirmedCharged !== null && confirmedCost !== null && confirmedProfit !== null) {
    const state = confirmedRequests + unconfirmedRequests === 0 ? 'empty'
      : unconfirmedRequests === 0 ? 'complete'
        : confirmedRequests === 0 ? 'unconfirmed' : 'partial'
    return { charged, confirmedCharged, confirmedCost, confirmedProfit: state === 'unconfirmed' ? null : confirmedProfit, confirmedRequests, unconfirmedRequests, state }
  }
  const legacyCost = amount(stats?.total_account_cost)
  const fallbackRequests = totalRequests ?? (charged === 0 ? 0 : 1)
  if (charged !== null && legacyCost !== null) {
    return { charged, confirmedCharged: charged, confirmedCost: legacyCost, confirmedProfit: charged - legacyCost, confirmedRequests: fallbackRequests, unconfirmedRequests: 0, state: fallbackRequests === 0 ? 'empty' : 'complete' }
  }
  return { charged, confirmedCharged: null, confirmedCost: null, confirmedProfit: null, confirmedRequests: 0, unconfirmedRequests: fallbackRequests, state: fallbackRequests === 0 ? 'empty' : 'unconfirmed' }
}

export function calendarDays(start, end) {
  const parse = (value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return NaN
    const time = Date.parse(`${value}T00:00:00Z`)
    return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN
  }
  const first = parse(start)
  const last = parse(end)
  if (!Number.isFinite(first) || !Number.isFinite(last) || first > last) return []
  const days = []
  for (let day = first; day <= last; day += 86400000) days.push(new Date(day).toISOString().slice(0, 10))
  return days
}

export function dailyValues(stats) {
  const finance = financeValues(stats)
  return {
    tokens: amount(stats?.total_tokens),
    charged: finance.charged,
    cost: finance.state === 'unconfirmed' ? null : finance.confirmedCost,
    earnings: finance.confirmedProfit,
    confirmedRequests: finance.confirmedRequests,
    unconfirmedRequests: finance.unconfirmedRequests,
    state: finance.state,
  }
}

// 统计日期采用与图表一致的 IANA 时区，不使用仪表盘 UTC 日桶。
export function dateInTimezone(now, timezone) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const value = type => parts.find(part => part.type === type).value
  return `${value('year')}-${value('month')}-${value('day')}`
}

export function billedSummary(today, total) {
  return { today: financeValues(today), total: financeValues(total) }
}

// Keep one formatter for the axis, tooltip and daily detail table.
export function formatTokenConsumption(value) {
  if (amount(value) === null || value < 0) return '—'
  const billions = value >= 1e9
  const scaled = value / (billions ? 1e9 : 1e6)
  return `${scaled.toFixed(2)}${billions ? 'B' : 'M'}`
}

export function formatMoney(value) {
  return amount(value) === null ? '—' : `${value < 0 ? '−' : ''}$${Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
