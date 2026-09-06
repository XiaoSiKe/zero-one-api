import type { Plugin } from 'vite'

/** Route-content adapters must never ship the unrelated Console router. */
export function adapterBoundary(): Plugin {
  return {
    name: 'zero-one-adapter-boundary',
    buildEnd(error) {
      if (error) return
      if ([...this.getModuleIds()].some((id) => id.replaceAll('\\', '/').endsWith('/src/router/index.ts'))) {
        this.error('Console adapter traverses the application router; keep shared helpers independent of application navigation')
      }
    },
  }
}
