import { describe, expect, it } from 'vitest'
import { CONCRETE_PLATFORM_OPTIONS, GROUP_PLATFORM_OPTIONS } from '../platforms'

describe('provider platform catalog', () => {
  it('keeps every concrete Provider Account platform in one ordered catalog', () => {
    expect(CONCRETE_PLATFORM_OPTIONS.map(({ value }) => value)).toEqual([
      'anthropic',
      'openai',
      'gemini',
      'antigravity',
      'grok',
      'kimi',
      'zhipu',
      'deepseek'
    ])
  })

  it('adds only Composite to the group platform catalog', () => {
    expect(GROUP_PLATFORM_OPTIONS.map(({ value }) => value)).toEqual([
      'anthropic',
      'openai',
      'gemini',
      'antigravity',
      'grok',
      'kimi',
      'zhipu',
      'deepseek',
      'composite'
    ])
  })
})
