import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { adapterBoundary } from './vite.adapter-boundary'

const frontendRoot = fileURLToPath(new URL('.', import.meta.url))
const frozenBuildRoot = process.env.ZERO_ONE_FROZEN_BUILD_ROOT

export default defineConfig({
  root: frontendRoot,
  publicDir: false,
  plugins: [vue(), adapterBoundary()],
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
    outDir: frozenBuildRoot
      ? resolve(frozenBuildRoot, 'online-image-v17')
      : resolve(frontendRoot, '../deploy/zero-one/recovered-frontend/console/assets/online-image-v17'),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(frontendRoot, 'src/entries/onlineImage.ts'),
      formats: ['es'],
      fileName: () => 'online-image.js',
      cssFileName: 'online-image',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'online-image.css' : '[name]-[hash][extname]',
      },
    },
  },
})
