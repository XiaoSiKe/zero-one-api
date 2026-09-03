import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CN_PROVIDER_SHELL_DIRECTORY } from '../deploy/zero-one/build-cn-provider-shell.mjs'

const root = fileURLToPath(new URL('.', import.meta.url))
const approved = `/assets/${CN_PROVIDER_SHELL_DIRECTORY}`
// 只编译两条维护中的密码路由；复用恢复版 Vue、路由、API 与 Store 单例。
const vueExports = {
  defineComponent: 'd', ref: 'r', reactive: 'q', computed: 'c', watch: 'w',
  onMounted: 'o', onUnmounted: 'a', openBlock: 'C', createBlock: 'D',
  createElementBlock: 'z', createElementVNode: 'B', createVNode: 'k',
  createCommentVNode: 'E', createTextVNode: 'H', toDisplayString: 'G', unref: 'u',
  withCtx: 'K', resolveComponent: 'a1', withDirectives: 'Q', vModelText: 'W',
  vModelDynamic: 'a2', withModifiers: 'U', normalizeClass: 'A'
}
const bridges = {
  vue: `export {${Object.entries(vueExports).map(([name, alias]) => `${alias} as ${name}`).join(',')}} from '${approved}/vendor-vue-iKpM1E08.js'`,
  'vue-router': `export {X as useRoute} from '${approved}/vendor-vue-iKpM1E08.js'`,
  'vue-i18n': `
    import {u as useApprovedI18n} from '${approved}/vendor-i18n-k5VB7a-q.js';
    import {passwordRecoveryMessages} from '${resolve(root, 'src/i18n/passwordRecovery.ts')}';
    export const useI18n = () => useApprovedI18n({useScope:'local',inheritLocale:true,
      messages:{zh:{auth:passwordRecoveryMessages.zh},en:{auth:passwordRecoveryMessages.en}},
      missingWarn:false,fallbackWarn:false});`,
  '@/api/auth': `export {I as getPublicSettings,Z as forgotPassword,$ as resetPassword} from '${approved}/index-9xJBhx8B.js'`,
  '@/stores': `export {a as useAppStore} from '${approved}/index-9xJBhx8B.js'`,
  '@/components/layout': `export {_ as AuthLayout} from '${approved}/AuthLayout.vue_vue_type_script_setup_true_lang-DghqD8r6.js'`,
  '@/components/icons/Icon.vue': `export {_ as default} from '${approved}/index-9xJBhx8B.js'`,
  '@/components/CaptchaChallenge.vue': `export {_ as default} from '${approved}/CaptchaChallenge.vue_vue_type_script_setup_true_lang-DJqyTVvj.js'`
}
const bridgeIDs = new Map()
for (const key of Object.keys(bridges)) {
  bridgeIDs.set(key, key)
  if (key.startsWith('@/')) {
    const path = resolve(root, 'src', key.slice(2))
    bridgeIDs.set(path, key)
    bridgeIDs.set(`${path}.ts`, key)
    bridgeIDs.set(`${path}/index.ts`, key)
  }
}

export default defineConfig({
  root,
  plugins: [
    {
      name: 'approved-password-recovery-runtime',
      enforce: 'pre',
      resolveId(id) {
        const key = bridgeIDs.get(id)
        if (key) return `\0password-recovery:${key}`
      },
      load(id) {
        if (id.startsWith('\0password-recovery:')) return bridges[id.slice('\0password-recovery:'.length)]
      }
    },
    vue()
  ],
  resolve: { alias: { '@': resolve(root, 'src') } },
  build: {
    outDir: resolve(root, '../deploy/zero-one/recovered-frontend/console/assets/password-recovery-v1'),
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: {
        ForgotPasswordView: resolve(root, 'src/views/auth/ForgotPasswordView.vue'),
        ResetPasswordView: resolve(root, 'src/views/auth/ResetPasswordView.vue')
      },
      external: (id) => id.startsWith('/assets/'),
      output: { entryFileNames: '[name].js', chunkFileNames: '[name]-[hash].js' }
    }
  }
})
