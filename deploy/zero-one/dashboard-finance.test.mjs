import test from 'node:test'
import assert from 'node:assert/strict'
import { calendarDays, dailyValues, financeValues, billedSummary, dateInTimezone, formatMoney } from './recovered-frontend/console/assets/dashboard-finance-v4/data.js'

test('revenue uses actual debits and profit subtracts historically recorded account cost', () => {
  const stats = { total_requests: 2, total_tokens: 1234, total_actual_cost: 12, total_account_cost: 5, finance: { confirmed_requests: 2, unconfirmed_requests: 0, confirmed_actual_cost: 12, confirmed_account_cost: 5, confirmed_profit: 7 } }
  assert.deepEqual(financeValues(stats), { charged: 12, confirmedCharged: 12, confirmedCost: 5, confirmedProfit: 7, confirmedRequests: 2, unconfirmedRequests: 0, state: 'complete' })
  assert.deepEqual(dailyValues(stats), { tokens: 1234, charged: 12, cost: 5, earnings: 7, confirmedRequests: 2, unconfirmedRequests: 0, state: 'complete' })
})

test('zero cost is valid; missing or invalid billing data never becomes invented earnings', () => {
  assert.equal(financeValues({ total_requests: 1, total_actual_cost: 0, total_account_cost: 0 }).confirmedProfit, 0)
  assert.deepEqual(financeValues({ total_requests: 3, total_actual_cost: 9 }), { charged: 9, confirmedCharged: null, confirmedCost: null, confirmedProfit: null, confirmedRequests: 0, unconfirmedRequests: 3, state: 'unconfirmed' })
  assert.equal(financeValues({ total_actual_cost: NaN, total_account_cost: 0 }).confirmedProfit, null)
})

test('partial finance subtracts cost only from the matching confirmed invoices', () => {
  const mixed = financeValues({ total_requests: 4, total_actual_cost: 50.5, finance: { confirmed_requests: 3, unconfirmed_requests: 1, confirmed_actual_cost: 11.5, confirmed_account_cost: 5.4, confirmed_profit: 6.1 } })
  assert.deepEqual(mixed, { charged: 50.5, confirmedCharged: 11.5, confirmedCost: 5.4, confirmedProfit: 6.1, confirmedRequests: 3, unconfirmedRequests: 1, state: 'partial' })
  assert.notEqual(mixed.confirmedProfit, mixed.charged - mixed.confirmedCost)
})

test('daily unknown cost is unavailable while confirmed zero and an empty day remain zero', () => {
  const unknown = { total_requests: 2, total_actual_cost: 39, finance: { confirmed_requests: 0, unconfirmed_requests: 2, confirmed_actual_cost: 0, confirmed_account_cost: 0, confirmed_profit: 0 } }
  assert.equal(dailyValues(unknown).cost, null)
  assert.equal(dailyValues(unknown).earnings, null)
  for (const requests of [0, 2]) {
    const known = { total_requests: requests, total_actual_cost: 0, finance: { confirmed_requests: requests, unconfirmed_requests: 0, confirmed_actual_cost: 0, confirmed_account_cost: 0, confirmed_profit: 0 } }
    assert.equal(dailyValues(known).cost, 0)
    assert.equal(dailyValues(known).earnings, 0)
  }
})

test('calendar-day iteration includes both bounds and survives month, leap-day and DST boundaries', () => {
  assert.deepEqual(calendarDays('2024-02-28', '2024-03-01'), ['2024-02-28', '2024-02-29', '2024-03-01'])
  assert.equal(calendarDays('2026-03-07', '2026-03-09').length, 3)
  assert.deepEqual(calendarDays('2026-09-04', '2026-09-04'), ['2026-09-04'])
  for (const range of [['2026-02-30', '2026-03-01'], ['2026-03-02', '2026-03-01'], ['invalid', '2026-01-01']]) assert.deepEqual(calendarDays(...range), [])
})


test('bill-based totals are independent of rolling dashboard caches and share the selected timezone', () => {
  assert.equal(billedSummary({total_actual_cost: 11, total_account_cost: 5}, {total_actual_cost: 51, total_account_cost: 20}).total.confirmedProfit, 31)
  assert.equal(dateInTimezone(new Date('2026-09-03T16:30:00Z'), 'Asia/Shanghai'), '2026-09-04')
  assert.equal(dateInTimezone(new Date('2026-09-03T16:30:00Z'), 'America/Los_Angeles'), '2026-09-03')
})

test('token consumption uses M below one billion and B at the boundary', async () => {
  const { formatTokenConsumption } = await import('./recovered-frontend/console/assets/dashboard-finance-v4/data.js')
  for (const [input, expected] of [[517683278, '517.68M'], [1e9, '1.00B'], [12.02e9, '12.02B'], [999999999, '1000.00M'], [5000, '0.01M'], [1, '0.00M'], [0, '0.00M'], [null, '—'], [NaN, '—']]) {
    assert.equal(formatTokenConsumption(input), expected)
  }
})

test('money display is consistently rounded to two decimals after aggregation', () => {
  assert.equal(formatMoney(1234.565), '$1,234.57')
  assert.equal(formatMoney(-4), '−$4.00')
  assert.equal(formatMoney(null), '—')
})
