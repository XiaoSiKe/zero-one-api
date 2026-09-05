import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const APPROVED_SHELL_SOURCE = 'index-9xJBhx8B.js'
export const LEGACY_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v1'
export const PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v2'
export const PRIOR_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v3'
export const PRE_RECOVERY_SHELL_DIRECTORY = 'cn-provider-shell-v4'
export const RECOVERY_SHELL_DIRECTORY = 'cn-provider-shell-v5'
export const CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v6'
export const CN_PROVIDER_SHELL_ASSET = `${CN_PROVIDER_SHELL_DIRECTORY}/${APPROVED_SHELL_SOURCE}`
export const APPROVED_LAYOUT_SOURCE = 'AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js'
export const CURRENT_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v2'
export const PASSWORD_RECOVERY_PAGES = {
  'ForgotPasswordView-DfgTg0iM.js': 'password-recovery-v1/ForgotPasswordView.js',
  'ResetPasswordView-CMRDA6OL.js': 'password-recovery-v1/ResetPasswordView.js',
}

const headerDocsPattern = /L\.value\?\(t\(\),r\("a",\{key:1,href:L\.value,[\s\S]*?n\(m\)\("nav\.docs"\)\),1\)\],8,\$n\)\):_\("",!0\)/g

export function patchApprovedHeader(source) {
  const matches = [...source.matchAll(headerDocsPattern)]
  if (matches.length !== 1 || !matches[0][0].includes('name:"book"')) {
    throw new Error('approved header documentation seam changed')
  }
  return source.replace(headerDocsPattern, '_("",!0)')
}

export function recoveryShellOverrides(assetsDirectory) {
  const overrides = new Map([
    [APPROVED_LAYOUT_SOURCE, patchApprovedHeader(readFileSync(resolve(assetsDirectory, APPROVED_LAYOUT_SOURCE), 'utf8'))],
  ])
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    // 生成入口前先验证两条源码路由已构建，缺失资源时禁止形成可发布命名空间。
    readFileSync(resolve(assetsDirectory, target), 'utf8')
    overrides.set(name, `export { default } from '../${target}';\n`)
  }
  return overrides
}

export const DECLARED_COST_OVERRIDE_FILES = [
  "AccountsView-CM4yOmZE.js",
  "DashboardView-CYAPqspo.js",
  "EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js",
  "GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js",
  "ModelDistributionChart.vue_vue_type_script_setup_true_lang-BkqQV0ng.js",
  "UsageView-dsXbJO6P.js",
  "index-6pKNrg32.js",
  "index-BBEtrNVx.js"
]

export function declaredCostShellOverrides(assetsDirectory) {
  const overrides = recoveryShellOverrides(assetsDirectory)
  const directory = resolve(assetsDirectory, '../overrides/declared-cost-v1')
  if (readdirSync(directory).sort().join('\n') !== [...DECLARED_COST_OVERRIDE_FILES].sort().join('\n')) {
    throw new Error('declared cost overrides differ from the reviewed module list')
  }
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${CURRENT_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    overrides.set(name, readFileSync(resolve(directory, name), 'utf8'))
  }
  return overrides
}

const bootstrapNeedle = 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app")'
const onlineImageAccessClient =
  'window.__ZERO_ONE_ONLINE_IMAGE_ACCESS__?.setClient((page,signal)=>n.get("/keys",{params:{page,page_size:100,status:"active",sort_by:"created_at",sort_order:"desc"},signal}).then(response=>{const payload=response?.data??response;return payload?.data?.items?payload.data:payload}))'
const placeholderLoader = 'import("./zero-one-cn-provider-route-placeholder-v1.js")'
const onlineImageRouteNeedle = '},{path:"/batch-image"'
const onlineImageRouteReplacement = '},{path:"/images",name:"ImageGeneration",component:()=>import("./zero-one-online-image-route-placeholder-v1.js"),meta:{requiresAuth:!0,requiresAdmin:!1,title:"在线生图",description:"使用已开启生图权限的 API Key 生成图片，并在浏览器里直接预览或下载。"}},{path:"/batch-image"'
const priorRouteLoaders = [
  {
    surface: 'groups',
    pattern: /({path:"\/admin\/groups",name:"AdminGroups",component:)\(\)=>(y\(\(\)=>import\("\.\/GroupsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'accounts',
    pattern: /({path:"\/admin\/accounts",name:"AdminAccounts",component:)\(\)=>(y\(\(\)=>import\("\.\/AccountsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
]

const routeLoaders = [
  ...priorRouteLoaders,
  {
    surface: 'channels',
    pattern: /({path:"\/admin\/channels\/pricing",name:"AdminChannels",component:)\(\)=>(y\(\(\)=>import\("\.\/ChannelsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'channel-monitor',
    pattern: /({path:"\/admin\/channels\/monitor",name:"AdminChannelMonitor",component:)\(\)=>(y\(\(\)=>import\("\.\/ChannelMonitorView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'ops',
    pattern: /({path:"\/admin\/ops",name:"AdminOps",component:)\(\)=>(y\(\(\)=>import\("\.\/OpsDashboard-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'subscriptions',
    pattern: /({path:"\/admin\/subscriptions",name:"AdminSubscriptions",component:)\(\)=>(y\(\(\)=>import\("\.\/SubscriptionsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
]

function patchShellRoutes(source, includeOnlineImage, includeOnlineImageAccess, loaders) {
  const occurrences = source.split(bootstrapNeedle).length - 1
  if (occurrences !== 1) {
    throw new Error(`approved Console bootstrap seam count changed: expected 1, found ${occurrences}`)
  }
  const bootstrapReplacement = includeOnlineImageAccess
    ? `await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),${onlineImageAccessClient},window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()`
    : 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()'
  let output = source.replace(bootstrapNeedle, bootstrapReplacement)
  for (const { surface, pattern } of loaders) {
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
  return patchShellRoutes(source, false, false, priorRouteLoaders)
}

export function patchPreviousApprovedShell(source) {
  return patchShellRoutes(source, true, false, priorRouteLoaders)
}

export function patchPriorApprovedShell(source) {
  return patchShellRoutes(source, true, true, priorRouteLoaders)
}

export function patchApprovedShell(source) {
  return patchShellRoutes(source, true, true, routeLoaders)
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
  const priorTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    PRIOR_CN_PROVIDER_SHELL_DIRECTORY,
    patchPriorApprovedShell(source),
  )
  const targetPath = writeShellVariant(
    consoleAssetsDirectory,
    PRE_RECOVERY_SHELL_DIRECTORY,
    patchApprovedShell(source),
  )
  const recoveryOverrides = recoveryShellOverrides(consoleAssetsDirectory)
  const recoveryTargetPath = writeShellVariant(consoleAssetsDirectory, RECOVERY_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(recoveryOverrides.keys()))
  for (const [name, content] of recoveryOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, RECOVERY_SHELL_DIRECTORY, name), content)
  }
  const overrides = declaredCostShellOverrides(consoleAssetsDirectory)
  const currentTargetPath = writeShellVariant(consoleAssetsDirectory, CN_PROVIDER_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(overrides.keys()))
  for (const [name, content] of overrides) {
    writeFileSync(resolve(consoleAssetsDirectory, CN_PROVIDER_SHELL_DIRECTORY, name), content)
  }
  return { sourcePath, legacyTargetPath, previousTargetPath, priorTargetPath,
    preRecoveryTargetPath: targetPath, recoveryTargetPath, targetPath: currentTargetPath }

}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  const scriptDirectory = dirname(fileURLToPath(import.meta.url))
  const consoleAssetsDirectory = resolve(scriptDirectory, 'recovered-frontend/console/assets')
  const { targetPath } = buildCNProviderShell(consoleAssetsDirectory)
  console.log(`CN Provider approved shell built: ${targetPath}`)
}
