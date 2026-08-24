import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import type { ModelPlazaData } from '../lib/modelPlaza'
import { ValuePricingSection } from './ContentSections'

afterEach(cleanup)

describe('ValuePricingSection', () => {
  it('displays the configured multiplier directly as the approximate discount', () => {
    const data: ModelPlazaData = {
      description: '',
      groups: [
        {
          id: 1,
          name: '最低倍率组',
          description: '',
          platform: 'openai',
          subscriptionType: 'standard',
          rateMultiplier: 0.19,
          peakRateEnabled: false,
          peakStart: '',
          peakEnd: '',
          peakRateMultiplier: 1,
          isExclusive: false,
          imageRateIndependent: false,
          imageRateMultiplier: 1,
          models: [],
        },
      ],
    }

    render(<ValuePricingSection modelPlazaData={data} />)

    expect(screen.getByRole('heading', { name: '低至约 0.19 折' })).toBeTruthy()
    expect(document.querySelector('.value-pricing-summary h3 > .shiny-text')).not.toBeNull()
    expect(screen.queryByText('低至约 1.9 折')).toBeNull()
  })
})
