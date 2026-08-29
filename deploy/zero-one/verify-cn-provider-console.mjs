import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
  readlinkSync,
} from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  APPROVED_SHELL_SOURCE,
  CN_PROVIDER_SHELL_ASSET,
  CN_PROVIDER_SHELL_DIRECTORY,
  patchApprovedShell,
} from './build-cn-provider-shell.mjs'

function read(path, label) {
  if (!existsSync(path)) throw new Error(`${label} is missing: ${path}`)
  return readFileSync(path, 'utf8')
}

function requireMarkers(source, markers, label) {
  const missing = markers.filter((marker) => !source.includes(marker))
  if (missing.length > 0) {
    throw new Error(`${label} is missing contracts: ${missing.join(', ')}`)
  }
}

export function verifyCNProviderConsole(consoleDir) {
  const index = read(resolve(consoleDir, 'index.html'), 'Console entry')
  const adapterMarker = 'await import("/assets/cn-provider-admin-v1/cn-provider-admin.js")'
  const shellMarker = `await import("/assets/${CN_PROVIDER_SHELL_ASSET}")`
  requireMarkers(index, [adapterMarker, shellMarker], 'Console entry')
  if (index.indexOf(adapterMarker) > index.indexOf(shellMarker)) {
    throw new Error('CN Provider route seam must load before the approved Console shell')
  }

  const approvedShell = read(
    resolve(consoleDir, 'assets', APPROVED_SHELL_SOURCE),
    'Approved Console shell',
  )
  const cnProviderShell = read(
    resolve(consoleDir, 'assets', CN_PROVIDER_SHELL_ASSET),
    'CN Provider approved Console shell',
  )
  if (cnProviderShell !== patchApprovedShell(approvedShell)) {
    throw new Error('CN Provider Console shell differs from the approved shell outside its router seam')
  }
  const assetsDirectory = resolve(consoleDir, 'assets')
  const shellDirectory = resolve(assetsDirectory, CN_PROVIDER_SHELL_DIRECTORY)
  const shellEntryPath = resolve(shellDirectory, APPROVED_SHELL_SOURCE)
  if (!lstatSync(shellEntryPath).isFile() || lstatSync(shellEntryPath).isSymbolicLink()) {
    throw new Error('CN Provider approved shell entry must be a regular generated file')
  }
  const expectedLinks = readdirSync(assetsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name !== APPROVED_SHELL_SOURCE)
    .map((entry) => entry.name)
    .sort()
  const actualShellEntries = readdirSync(shellDirectory).sort()
  const expectedShellEntries = [...expectedLinks, APPROVED_SHELL_SOURCE].sort()
  if (actualShellEntries.join('\n') !== expectedShellEntries.join('\n')) {
    throw new Error('CN Provider approved shell namespace is missing or contains extra assets')
  }
  for (const name of expectedLinks) {
    const linkPath = resolve(shellDirectory, name)
    if (!lstatSync(linkPath).isSymbolicLink() || readlinkSync(linkPath) !== `../${name}`) {
      throw new Error(`CN Provider approved shell asset is not the expected relative symlink: ${name}`)
    }
  }
  requireMarkers(cnProviderShell, [
    'zero-one-cn-provider-route-placeholder-v1.js',
    '__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__',
  ], 'CN Provider approved Console shell')
  const routePlaceholder = read(
    resolve(consoleDir, 'assets/zero-one-cn-provider-route-placeholder-v1.js'),
    'CN Provider approved route placeholder',
  )
  requireMarkers(routePlaceholder, [
    './vendor-vue-iKpM1E08.js',
    './AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js',
    'ZeroOneCNProviderRoutePlaceholder',
    'data-zero-one-cn-provider-placeholder',
  ], 'CN Provider approved route placeholder')
  const namespacedRoutePlaceholder = read(
    resolve(shellDirectory, 'zero-one-cn-provider-route-placeholder-v1.js'),
    'Namespaced CN Provider approved route placeholder',
  )
  if (namespacedRoutePlaceholder !== routePlaceholder) {
    throw new Error('CN Provider namespaced route placeholder differs from its approved source')
  }

  const adapterDirectory = resolve(consoleDir, 'assets/cn-provider-admin-v1')
  const adapterEntry = read(
    resolve(adapterDirectory, 'cn-provider-admin.js'),
    'CN Provider Admin route adapter',
  )
  if (Buffer.byteLength(adapterEntry, 'utf8') > 50_000) {
    throw new Error('CN Provider route seam eagerly includes the leaf application runtime')
  }
  const stylesheet = read(
    resolve(adapterDirectory, 'cn-provider-admin.css'),
    'CN Provider Admin stylesheet',
  )
  const javascriptAssets = new Set(
    readdirSync(adapterDirectory).filter((name) => name.endsWith('.js')),
  )
  const reachableAssets = new Set()
  const queue = ['cn-provider-admin.js']
  const localJavaScriptReference = /["']\.\/([^"']+\.js)["']/g
  while (queue.length > 0) {
    const name = queue.pop()
    if (!name || reachableAssets.has(name)) continue
    if (!javascriptAssets.has(name)) {
      throw new Error(`CN Provider reachable JavaScript asset is missing: ${name}`)
    }
    reachableAssets.add(name)
    const source = read(resolve(adapterDirectory, name), `CN Provider asset ${name}`)
    for (const match of source.matchAll(localJavaScriptReference)) queue.push(match[1])
  }
  const unreachableJavaScript = [...javascriptAssets].filter((name) => !reachableAssets.has(name))
  if (unreachableJavaScript.length > 0) {
    throw new Error(`CN Provider JavaScript assets are unreachable: ${unreachableJavaScript.join(', ')}`)
  }
  const moduleSource = [...reachableAssets]
    .sort()
    .map((name) => read(resolve(adapterDirectory, name), `CN Provider asset ${name}`))
    .join('\n')

  requireMarkers(moduleSource, [
    '/admin/accounts', '/admin/groups',
    '__ZERO_ONE_NAVIGATION_RECONCILIATION__', 'cn-provider-admin',
    '__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__', 'Management page failed to load',
    '/assets/cn-provider-admin-v1/cn-provider-admin.css',
    'Kimi', 'Zhipu GLM', 'DeepSeek',
    'account_mode', 'api_protocol', 'adaptive', 'api_base_urls',
    'header_override_enabled', 'header_overrides',
    'quota_limit', 'quota_daily_limit', 'quota_weekly_limit',
    'https://api.moonshot.cn/v1',
    'https://open.bigmodel.cn/api/paas/v4',
    'https://api.deepseek.com',
    'kimi-for-coding', 'glm-4.6', 'deepseek-chat', 'deepseek-reasoner',
  ], 'CN Provider Admin route adapter')
  requireMarkers(stylesheet, [
    'table-page-layout', 'table-scroll-container',
    'body.zero-one-cn-provider-admin-active .border-pink-500',
    'body.zero-one-cn-provider-admin-active .border-indigo-500',
    'body.zero-one-cn-provider-admin-active .border-teal-500',
  ], 'CN Provider Admin stylesheet')

  return {
    shell: `/assets/${CN_PROVIDER_SHELL_ASSET}`,
    module: '/assets/cn-provider-admin-v1/cn-provider-admin.js',
    stylesheet: '/assets/cn-provider-admin-v1/cn-provider-admin.css',
  }
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  try {
    const consoleDir = process.argv[2]
    if (!consoleDir) throw new Error('usage: node verify-cn-provider-console.mjs CONSOLE_DIR')
    const assets = verifyCNProviderConsole(resolve(consoleDir))
    console.log(`CN Provider Console contract OK (${Object.values(assets).join(', ')})`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}
