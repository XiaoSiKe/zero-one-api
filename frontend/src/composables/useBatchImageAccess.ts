import { createKeyCapabilityAccess } from '@/composables/keyCapabilityAccess'
import type { ApiKey } from '@/types'

function keyAllowsBatchImage(key: ApiKey): boolean {
  return (
    key.status === 'active' &&
    key.group?.platform === 'gemini' &&
    key.group?.allow_batch_image_generation === true
  )
}

const useAccess = createKeyCapabilityAccess(keyAllowsBatchImage, { stopAfterFirst: true })

export function useBatchImageAccess() {
  const access = useAccess()

  return {
    canUseBatchImage: access.canAccess,
    batchImageAccessLoaded: access.loaded,
    batchImageAccessLoading: access.loading,
    refreshBatchImageAccess: async (force = false) => (await access.refresh(force)).length > 0,
  }
}
