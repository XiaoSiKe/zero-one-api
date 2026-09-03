import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getPublicSettings } from '@/api/auth'
import type { PublicSettings } from '@/types'

// 两条密码路由共享能力门禁；设置未返回或读取失败都不能开放提交。
export function usePasswordResetSettings(onSettings?: (settings: PublicSettings) => void) {
  const state = ref<'loading' | 'enabled' | 'disabled' | 'error'>('loading')
  let generation = 0

  async function loadSettings() {
    const request = ++generation
    state.value = 'loading'
    try {
      const settings = await getPublicSettings()
      if (request !== generation) return
      onSettings?.(settings)
      state.value = settings.password_reset_enabled === true && !settings.backend_mode_enabled
        ? 'enabled' : 'disabled'
    } catch {
      if (request === generation) state.value = 'error'
    }
  }

  function disablePasswordReset() {
    generation += 1
    state.value = 'disabled'
  }

  onMounted(loadSettings)
  onUnmounted(() => { generation += 1 })

  return {
    passwordResetEnabled: computed(() => state.value === 'enabled'),
    passwordResetSettingsFailed: computed(() => state.value === 'error'),
    passwordResetStatusKey: computed(() => state.value === 'loading'
      ? 'auth.passwordResetLoading'
      : state.value === 'error' ? 'auth.passwordResetSettingsFailed' : 'auth.passwordResetDisabled'),
    loadPasswordResetSettings: loadSettings,
    disablePasswordReset
  }
}
