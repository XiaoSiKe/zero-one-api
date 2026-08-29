import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const APPROVED_SHELL_SOURCE = 'index-9xJBhx8B.js'
export const CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v1'
export const CN_PROVIDER_SHELL_ASSET = `${CN_PROVIDER_SHELL_DIRECTORY}/${APPROVED_SHELL_SOURCE}`

const bootstrapNeedle = 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app")'
const bootstrapReplacement =
  'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()'
const placeholderLoader = 'import("./zero-one-cn-provider-route-placeholder-v1.js")'
const routeLoaders = [
  {
    surface: 'groups',
    pattern: /({path:"\/admin\/groups",name:"AdminGroups",component:)\(\)=>(y\(\(\)=>import\("\.\/GroupsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'accounts',
    pattern: /({path:"\/admin\/accounts",name:"AdminAccounts",component:)\(\)=>(y\(\(\)=>import\("\.\/AccountsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
]

export function patchApprovedShell(source) {
  const occurrences = source.split(bootstrapNeedle).length - 1
  if (occurrences !== 1) {
    throw new Error(`approved Console bootstrap seam count changed: expected 1, found ${occurrences}`)
  }
  let output = source.replace(bootstrapNeedle, bootstrapReplacement)
  for (const { surface, pattern } of routeLoaders) {
    const matches = [...output.matchAll(new RegExp(pattern.source, 'g'))]
    if (matches.length !== 1) {
      throw new Error(`approved ${surface} route seam count changed: expected 1, found ${matches.length}`)
    }
    output = output.replace(pattern, (_match, prefix) =>
      `${prefix}()=>${placeholderLoader}`,
    )
  }
  return output
}

export function buildCNProviderShell(consoleAssetsDirectory) {
  const sourcePath = resolve(consoleAssetsDirectory, APPROVED_SHELL_SOURCE)
  const targetDirectory = resolve(consoleAssetsDirectory, CN_PROVIDER_SHELL_DIRECTORY)
  const targetPath = resolve(targetDirectory, APPROVED_SHELL_SOURCE)
  const source = readFileSync(sourcePath, 'utf8')
  const output = patchApprovedShell(source)
  rmSync(targetDirectory, { recursive: true, force: true })
  mkdirSync(targetDirectory, { recursive: true })
  for (const entry of readdirSync(consoleAssetsDirectory, { withFileTypes: true })) {
    if (!entry.isFile() || entry.name === APPROVED_SHELL_SOURCE) continue
    symlinkSync(`../${entry.name}`, resolve(targetDirectory, entry.name))
  }
  writeFileSync(targetPath, output)
  return { sourcePath, targetPath }
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  const scriptDirectory = dirname(fileURLToPath(import.meta.url))
  const consoleAssetsDirectory = resolve(scriptDirectory, 'recovered-frontend/console/assets')
  const { targetPath } = buildCNProviderShell(consoleAssetsDirectory)
  console.log(`CN Provider approved shell built: ${targetPath}`)
}
