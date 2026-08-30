import { computed, ref, watch } from 'vue'
import { keysAPI } from '@/api/keys'
import { useAuthStore } from '@/stores/auth'
import type { ApiKey } from '@/types'

const pageSize = 100

interface KeyCapabilityOptions {
  stopAfterFirst?: boolean
}

function authIdentity(authStore: ReturnType<typeof useAuthStore>): string {
  if (!authStore.isAuthenticated || !authStore.token || !authStore.user) return ''
  return `${authStore.user.id}:${authStore.user.role}:${authStore.token}`
}

export function createKeyCapabilityAccess(
  predicate: (key: ApiKey) => boolean,
  options: KeyCapabilityOptions = {},
) {
  const loaded = ref(false)
  const loading = ref(false)
  const allowedKeys = ref<ApiKey[]>([])
  let identity = ''
  let revision = 0
  let pendingLoad: Promise<ApiKey[]> | null = null
  let activeController: AbortController | null = null

  function resetForIdentity(nextIdentity: string): boolean {
    if (identity === nextIdentity) return false
    identity = nextIdentity
    revision += 1
    activeController?.abort()
    activeController = null
    pendingLoad = null
    loaded.value = false
    loading.value = false
    allowedKeys.value = []
    return true
  }

  async function load(force = false): Promise<ApiKey[]> {
    const authStore = useAuthStore()
    const requestIdentity = authIdentity(authStore)
    resetForIdentity(requestIdentity)
    if (!requestIdentity) {
      loaded.value = true
      return []
    }
    if (loaded.value && !force) return allowedKeys.value
    if (pendingLoad && !force) return pendingLoad

    if (pendingLoad) {
      revision += 1
      activeController?.abort()
      activeController = null
      pendingLoad = null
    }

    const requestRevision = ++revision
    const controller = new AbortController()
    activeController = controller
    loading.value = true

    const request = (async () => {
      const result: ApiKey[] = []
      let page = 1
      while (true) {
        const response = await keysAPI.list(page, pageSize, {
          status: 'active',
          sort_by: 'created_at',
          sort_order: 'desc',
        }, { signal: controller.signal })
        if (requestRevision !== revision || requestIdentity !== identity) return []
        result.push(...(response.items || []).filter(predicate))
        if (options.stopAfterFirst && result.length > 0) break
        if (page >= response.pages || (response.items || []).length === 0) break
        page += 1
      }
      if (requestRevision !== revision || requestIdentity !== identity) return []
      allowedKeys.value = result
      loaded.value = true
      return result
    })()
      .catch(() => {
        if (requestRevision === revision && requestIdentity === identity) {
          allowedKeys.value = []
          loaded.value = true
        }
        return []
      })
      .finally(() => {
        if (pendingLoad === request) {
          pendingLoad = null
          activeController = null
          loading.value = false
        }
      })

    pendingLoad = request
    return request
  }

  return function useKeyCapabilityAccess() {
    const authStore = useAuthStore()
    watch(
      () => authIdentity(authStore),
      (nextIdentity) => {
        const hadState = loaded.value || pendingLoad !== null || allowedKeys.value.length > 0
        if (resetForIdentity(nextIdentity) && nextIdentity && hadState) void load()
      },
      { immediate: true },
    )
    return {
      allowedKeys: computed(() => allowedKeys.value),
      canAccess: computed(() => allowedKeys.value.length > 0),
      loaded: computed(() => loaded.value),
      loading: computed(() => loading.value),
      refresh: load,
    }
  }
}
