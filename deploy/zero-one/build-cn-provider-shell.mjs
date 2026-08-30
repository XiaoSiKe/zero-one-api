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
export const LEGACY_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v1'
export const PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v2'
export const CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v3'
export const CN_PROVIDER_SHELL_ASSET = `${CN_PROVIDER_SHELL_DIRECTORY}/${APPROVED_SHELL_SOURCE}`

const bootstrapNeedle = 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app")'
const onlineImageAccessClient =
  'window.__ZERO_ONE_ONLINE_IMAGE_ACCESS__?.setClient((page,signal)=>n.get("/keys",{params:{page,page_size:100,status:"active",sort_by:"created_at",sort_order:"desc"},signal}).then(response=>{const payload=response?.data??response;return payload?.data?.items?payload.data:payload}))'
const placeholderLoader = 'import("./zero-one-cn-provider-route-placeholder-v1.js")'
const onlineImageRouteNeedle = '},{path:"/batch-image"'
const onlineImageRouteReplacement = '},{path:"/images",name:"ImageGeneration",component:()=>import("./zero-one-online-image-route-placeholder-v1.js"),meta:{requiresAuth:!0,requiresAdmin:!1,title:"在线生图",description:"使用已开启生图权限的 API Key 生成图片，并在浏览器里直接预览或下载。"}},{path:"/batch-image"'
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

function patchShellRoutes(source, includeOnlineImage, includeOnlineImageAccess) {
  const occurrences = source.split(bootstrapNeedle).length - 1
  if (occurrences !== 1) {
    throw new Error(`approved Console bootstrap seam count changed: expected 1, found ${occurrences}`)
  }
  const bootstrapReplacement = includeOnlineImageAccess
    ? `await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),${onlineImageAccessClient},window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()`
    : 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()'
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
  if (includeOnlineImage) {
    const onlineImageRouteOccurrences = output.split(onlineImageRouteNeedle).length - 1
    if (onlineImageRouteOccurrences !== 1) {
      throw new Error(`approved online image route seam count changed: expected 1, found ${onlineImageRouteOccurrences}`)
    }
    output = output.replace(onlineImageRouteNeedle, onlineImageRouteReplacement)
  }
  return output
}

export function patchLegacyApprovedShell(source) {
  return patchShellRoutes(source, false, false)
}

export function patchPreviousApprovedShell(source) {
  return patchShellRoutes(source, true, false)
}

export function patchApprovedShell(source) {
  return patchShellRoutes(source, true, true)
}

function writeShellVariant(consoleAssetsDirectory, directory, output, excludedAssets = new Set()) {
  const targetDirectory = resolve(consoleAssetsDirectory, directory)
  const targetPath = resolve(targetDirectory, APPROVED_SHELL_SOURCE)
  rmSync(targetDirectory, { recursive: true, force: true })
  mkdirSync(targetDirectory, { recursive: true })
  for (const entry of readdirSync(consoleAssetsDirectory, { withFileTypes: true })) {
    if (
      !entry.isFile() ||
      entry.name === APPROVED_SHELL_SOURCE ||
      excludedAssets.has(entry.name)
    ) continue
    symlinkSync(`../${entry.name}`, resolve(targetDirectory, entry.name))
  }
  writeFileSync(targetPath, output)
  return targetPath
}

export function buildCNProviderShell(consoleAssetsDirectory) {
  const sourcePath = resolve(consoleAssetsDirectory, APPROVED_SHELL_SOURCE)
  const source = readFileSync(sourcePath, 'utf8')
  const legacyTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    LEGACY_CN_PROVIDER_SHELL_DIRECTORY,
    patchLegacyApprovedShell(source),
    new Set([
      'zero-one-online-image-route-placeholder-v1.js',
      'zero-one-settings-unified-save-v1.js',
    ]),
  )
  const previousTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY,
    patchPreviousApprovedShell(source),
  )
  const targetPath = writeShellVariant(
    consoleAssetsDirectory,
    CN_PROVIDER_SHELL_DIRECTORY,
    patchApprovedShell(source),
  )
  return { sourcePath, legacyTargetPath, previousTargetPath, targetPath }
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  const scriptDirectory = dirname(fileURLToPath(import.meta.url))
  const consoleAssetsDirectory = resolve(scriptDirectory, 'recovered-frontend/console/assets')
  const { targetPath } = buildCNProviderShell(consoleAssetsDirectory)
  console.log(`CN Provider approved shell built: ${targetPath}`)
}
