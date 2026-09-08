import { describe, expect, it } from 'vitest'
import { formatCompactCost, toFiniteNumber } from '../format'

describe('Console cost display contract', () => {
  it.each([
    [null, '0.0000'], [undefined, '0.0000'], [0, '0.0000'],
    [0.0099, '0.0099'], [0.01, '0.010'], [0.99, '0.990'],
    [1, '1.00'], [999, '999.00'], [1000, '1.00K'],
    [-0.02, '-0.0200'], [NaN, '0.0000'], [Infinity, '0.0000'],
  ])('preserves %s as %s', (input, expected) => {
    expect(formatCompactCost(input)).toBe(expected)
  })
  it('normalizes missing and invalid analytics values to zero', () => {
    expect(toFiniteNumber(null)).toBe(0)
    expect(toFiniteNumber('1.2')).toBe(1.2)
    expect(toFiniteNumber('invalid')).toBe(0)
  })
})
