import type { ApiKey } from '@/types'

export function keyAllowsImageGeneration(key: ApiKey): boolean {
  return (
    key.status === 'active' &&
    key.group?.allow_image_generation === true &&
    (key.group.platform === 'openai' || key.group.platform === 'grok')
  )
}
