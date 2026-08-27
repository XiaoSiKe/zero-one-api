import { describe, expect, it } from 'vitest'
import { validateRedeemGeneration } from '../generation'

describe('Redeem Code generation validation', () => {
  it.each([0, 1e-9, 0.001, 1.001, Number.NaN, Infinity, 1_000_000_000_000])('rejects invalid benefit amount %s', (value) => {
    expect(validateRedeemGeneration({ count: 1, type: 'benefit', value })).toBe('invalidAmount')
  })

  it.each([0.01, 0.29, 1.25, 999_999_999_999.99])('accepts representable whole-cent amounts %s', (value) => {
    expect(validateRedeemGeneration({ count: 1, type: 'benefit', value })).toBeNull()
    expect(validateRedeemGeneration({ count: 1, type: 'mystery_box', value: 0, min_value: value, max_value: value })).toBeNull()
  })

  it.each([0, 1.1, 101, Number.NaN, Infinity])('rejects invalid batch count %s', (count) => {
    expect(validateRedeemGeneration({ count, type: 'benefit', value: 1 })).toBe('invalidCount')
  })

  it.each([[2, 1], [0.001, 1], [1, Infinity], [1, 1.001]])('rejects invalid mystery range %s..%s', (min_value, max_value) => {
    expect(validateRedeemGeneration({ count: 1, type: 'mystery_box', value: 0, min_value, max_value })).toBe('invalidMysteryBoxRange')
  })
})
