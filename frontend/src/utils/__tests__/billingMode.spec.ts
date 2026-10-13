import { describe, expect, it } from 'vitest'
import {
  BILLING_MODE_IMAGE,
  BILLING_MODE_TOKEN,
  BILLING_MODE_VIDEO,
  BILLING_MODE_CACHE_STORAGE,
  getBillingModeLabel,
  getDisplayBillingMode,
  isImageUsage
} from '../billingMode'

describe('billingMode helpers', () => {
  it('labels a recorded storage charge without presenting it as token usage', () => {
    expect(getDisplayBillingMode({ image_count: 0, billing_mode: BILLING_MODE_CACHE_STORAGE }))
      .toBe(BILLING_MODE_CACHE_STORAGE)
    expect(getBillingModeLabel(BILLING_MODE_CACHE_STORAGE, (key) => key))
      .toBe('admin.usage.billingModeCacheStorage')
  })
  it('prefers explicit video mode over image_count', () => {
    expect(
      getDisplayBillingMode({ image_count: 1, billing_mode: BILLING_MODE_VIDEO })
    ).toBe(BILLING_MODE_VIDEO)
    expect(isImageUsage({ image_count: 1, billing_mode: BILLING_MODE_VIDEO })).toBe(false)
  })

  it('infers image when image_count set and mode missing', () => {
    expect(getDisplayBillingMode({ image_count: 2, billing_mode: null })).toBe(BILLING_MODE_IMAGE)
  })

  it('keeps token mode even with image_count', () => {
    expect(
      getDisplayBillingMode({ image_count: 1, billing_mode: BILLING_MODE_TOKEN })
    ).toBe(BILLING_MODE_TOKEN)
  })
})
