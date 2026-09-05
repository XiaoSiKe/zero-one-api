import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const frontendRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: frontendRoot,
  publicDir: false,
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
    outDir: resolve(frontendRoot, '../deploy/zero-one/recovered-frontend/console/assets/online-image-v14'),
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
