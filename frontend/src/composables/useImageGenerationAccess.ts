import { createKeyCapabilityAccess } from '@/composables/keyCapabilityAccess'
import { keyAllowsImageGeneration } from '@/features/online-image/access'

const useAccess = createKeyCapabilityAccess(keyAllowsImageGeneration)

export function useImageGenerationAccess() {
  const access = useAccess()
  return {
    allowedImageKeys: access.allowedKeys,
    canUseImageGeneration: access.canAccess,
    imageGenerationAccessLoaded: access.loaded,
    imageGenerationAccessLoading: access.loading,
    refreshImageGenerationAccess: access.refresh,
  }
}
