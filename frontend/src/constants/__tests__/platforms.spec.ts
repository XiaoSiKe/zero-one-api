import { describe, expect, it } from 'vitest'
import { CONCRETE_PLATFORM_OPTIONS, GROUP_PLATFORM_OPTIONS, MONITOR_PLATFORM_OPTIONS } from '../platforms'

const concretePlatforms = [
  'anthropic',
  'openai',
  'gemini',
  'antigravity',
  'grok',
  'kimi',
  'zhipu',
  'deepseek',
  'minimax',
  'opencode_go',
  'typesafe'
]

describe('provider platform catalog', () => {
  it('keeps every concrete Provider Account platform in one ordered catalog', () => {
    expect(CONCRETE_PLATFORM_OPTIONS.map((option) => option.value)).toEqual(concretePlatforms)
  })

  it('excludes System One from conversational active probes', () => {
    expect(MONITOR_PLATFORM_OPTIONS.map(({ value }) => value)).toEqual(concretePlatforms.filter(value => value !== 'typesafe'))
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
      'minimax',
      'opencode_go',
      'typesafe',
      'composite'
    ])
  })
})
