import test from 'node:test'
import assert from 'node:assert/strict'
import { calendarDays, dailyValues, summaryValues, billedSummary, dateInTimezone } from './recovered-frontend/console/assets/dashboard-finance-v2/data.js'

test('revenue uses actual debits and profit subtracts historically recorded account cost', () => {
  assert.deepEqual(summaryValues({ today_cost: 1000, today_actual_cost: 12, today_account_cost: 5, total_cost: 9000, total_actual_cost: 30, total_account_cost: 40 }), [12, 7, 30, -10])
  assert.deepEqual(dailyValues({ total_tokens: 1234, total_cost: 500, total_actual_cost: 12, total_account_cost: 5 }), { tokens: 1234, charged: 12, earnings: 7 })
})

test('zero cost is valid; missing or invalid billing data never becomes invented earnings', () => {
  assert.deepEqual(dailyValues({ total_tokens: 0, total_actual_cost: 0, total_account_cost: 0 }), { tokens: 0, charged: 0, earnings: 0 })
  assert.deepEqual(dailyValues({ total_tokens: 12, total_actual_cost: 9 }), { tokens: 12, charged: 9, earnings: null })
  assert.deepEqual(summaryValues({ today_actual_cost: NaN, today_account_cost: 0, total_actual_cost: 2, total_account_cost: Infinity }), [null, null, 2, null])
})

test('calendar-day iteration includes both bounds and survives month, leap-day and DST boundaries', () => {
  assert.deepEqual(calendarDays('2024-02-28', '2024-03-01'), ['2024-02-28', '2024-02-29', '2024-03-01'])
  assert.equal(calendarDays('2026-03-07', '2026-03-09').length, 3)
  assert.deepEqual(calendarDays('2026-09-04', '2026-09-04'), ['2026-09-04'])
  for (const range of [['2026-02-30', '2026-03-01'], ['2026-03-02', '2026-03-01'], ['invalid', '2026-01-01']]) assert.deepEqual(calendarDays(...range), [])
})


test('bill-based totals are independent of rolling dashboard caches and share the selected timezone', () => {
  assert.deepEqual(billedSummary({total_actual_cost: 11, total_account_cost: 5}, {total_actual_cost: 51, total_account_cost: 20}), [11, 6, 51, 31])
  assert.equal(dateInTimezone(new Date('2026-09-03T16:30:00Z'), 'Asia/Shanghai'), '2026-09-04')
  assert.equal(dateInTimezone(new Date('2026-09-03T16:30:00Z'), 'America/Los_Angeles'), '2026-09-03')
})

test('token consumption uses M below one billion and B at the boundary', async () => {
  const { formatTokenConsumption } = await import('./recovered-frontend/console/assets/dashboard-finance-v2/data.js')
  for (const [input, expected] of [[517683278, '517.68M'], [1e9, '1.00B'], [12.02e9, '12.02B'], [999999999, '1000.00M'], [5000, '0.01M'], [1, '0.000001M'], [0, '0.00M'], [null, '—'], [NaN, '—']]) {
    assert.equal(formatTokenConsumption(input), expected)
  }
})
