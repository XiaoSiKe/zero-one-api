import { reactive, watchSyncEffect } from 'vue'
import type { Provider } from '@/api/admin/channelMonitor'
import type { AccountPlatform, GroupPlatform } from '@/types'
import { listPlatforms } from './platformCatalog'

// type 别名（而非 interface）以便赋给 Select 组件的 Record<string, unknown>[] 选项类型。
export type PlatformOption<T extends string = string> = {
  value: T
  label: string
}

/**
 * Concrete upstream platforms supported by accounts and request routing.
 * Derived from the platform catalog (backend platform list, see platformCatalog.ts),
 * so newly registered providers show up in every selector without frontend
 * changes. Reactive so that tests replacing the catalog see the update.
 */
export const CONCRETE_PLATFORM_OPTIONS: PlatformOption<AccountPlatform>[] = reactive([])

/** Only providers with an implemented active probe belong to the monitor selector. */
export const MONITOR_PLATFORM_OPTIONS: PlatformOption<Provider>[] = reactive([])

/** Platforms that can own a group. */
export const GROUP_PLATFORM_OPTIONS: PlatformOption<GroupPlatform>[] = reactive([])

watchSyncEffect(() => {
  const concrete = listPlatforms().map(spec => ({ value: spec.id, label: spec.display_name }))
  CONCRETE_PLATFORM_OPTIONS.splice(0, CONCRETE_PLATFORM_OPTIONS.length, ...concrete)
  const probes = concrete.filter((option): option is PlatformOption<Provider> =>
    ['anthropic', 'openai', 'gemini', 'antigravity', 'grok', 'kimi', 'zhipu', 'deepseek', 'minimax', 'opencode_go'].includes(option.value)
  )
  MONITOR_PLATFORM_OPTIONS.splice(0, MONITOR_PLATFORM_OPTIONS.length, ...probes)
  GROUP_PLATFORM_OPTIONS.splice(0, GROUP_PLATFORM_OPTIONS.length, ...concrete, {
    value: 'composite',
    label: 'Composite'
  })
})
