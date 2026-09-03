import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const frontendRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: frontendRoot,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(frontendRoot, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
    },
  },
  define: {
    __INTLIFY_JIT_COMPILATION__: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(frontendRoot, '../deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v3'),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(frontendRoot, 'src/entries/cnProviderAdmin.ts'),
      formats: ['es'],
      fileName: () => 'cn-provider-admin.js',
      cssFileName: 'cn-provider-admin',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'cn-provider-admin.css' : '[name]-[hash][extname]',
      },
    },
  },
})
