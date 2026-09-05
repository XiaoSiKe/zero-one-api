// 二开保护：仅根据后台历史账单结果展示金额。
// 禁止使用当前配置倍率重算旧账；失败或缺失不补成零收益。
export function amount(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

export function earnings(charged, accountCost) {
  const revenue = amount(charged)
  const cost = amount(accountCost)
  return revenue === null || cost === null ? null : revenue - cost
}

export function summaryValues(stats) {
  return [
    amount(stats?.today_actual_cost),
    earnings(stats?.today_actual_cost, stats?.today_account_cost),
    amount(stats?.total_actual_cost),
    earnings(stats?.total_actual_cost, stats?.total_account_cost),
  ]
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
  return {
    tokens: amount(stats?.total_tokens),
    charged: amount(stats?.total_actual_cost),
    earnings: earnings(stats?.total_actual_cost, stats?.total_account_cost),
  }
}

// 统计日期采用与图表一致的 IANA 时区，不使用仪表盘 UTC 日桶。
export function dateInTimezone(now, timezone) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const value = type => parts.find(part => part.type === type).value
  return `${value('year')}-${value('month')}-${value('day')}`
}

export function billedSummary(today, total) {
  return summaryValues({
    today_actual_cost: today?.total_actual_cost,
    today_account_cost: today?.total_account_cost,
    total_actual_cost: total?.total_actual_cost,
    total_account_cost: total?.total_account_cost,
  })
}

// Keep one formatter for the axis, tooltip and daily detail table.
export function formatTokenConsumption(value) {
  if (amount(value) === null || value < 0) return '—'
  const billions = value >= 1e9
  const scaled = value / (billions ? 1e9 : 1e6)
  const precision = scaled > 0 && scaled < 0.005 ? 6 : 2
  const formatted = precision === 6 ? scaled.toFixed(precision).replace(/0+$/, '') : scaled.toFixed(precision)
  return `${formatted}${billions ? 'B' : 'M'}`
}
