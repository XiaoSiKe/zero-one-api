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
  dashboardSpendShellOverrides,
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

function collectJavaScriptClosure(directory, roots, label) {
  const javascriptAssets = new Set(
    readdirSync(directory).filter((name) => name.endsWith('.js')),
  )
  const reachableAssets = new Set()
  const queue = [...roots]
  const localJavaScriptReference = /["']\.\/([^"']+\.js)["']/g
  while (queue.length > 0) {
    const name = queue.pop()
    if (!name || reachableAssets.has(name)) continue
    if (!javascriptAssets.has(name)) {
      throw new Error(`${label} reachable JavaScript asset is missing: ${name}`)
    }
    reachableAssets.add(name)
    const source = read(resolve(directory, name), `${label} asset ${name}`)
    for (const match of source.matchAll(localJavaScriptReference)) queue.push(match[1])
  }
  const unreachableAssets = [...javascriptAssets].filter((name) => !reachableAssets.has(name))
  if (unreachableAssets.length > 0) {
    throw new Error(`${label} JavaScript assets are unreachable: ${unreachableAssets.join(', ')}`)
  }
  return [...reachableAssets]
    .sort()
    .map((name) => read(resolve(directory, name), `${label} asset ${name}`))
    .join('\n')
}

export function verifyCNProviderConsole(consoleDir) {
  const index = read(resolve(consoleDir, 'index.html'), 'Console entry')
  const registrationStart = index.indexOf('      if (isRegistrationEntry) {')
  const standardStart = index.indexOf('      } else {', registrationStart)
  const entryEnd = index.indexOf(
    '      await import("/assets/zero-one-floating-panels-v1.js?v=3")',
    standardStart,
  )
  if (registrationStart < 0 || standardStart < 0 || entryEnd < 0) {
    throw new Error('Console entry registration and standard branches are missing')
  }
  const registrationEntry = index.slice(registrationStart, standardStart)
  const standardEntry = index.slice(standardStart, entryEnd)
  const legacyAdapterImport = 'import("/assets/cn-provider-admin-v1/cn-provider-admin.js")'
  const adapterImport = 'import("/assets/cn-provider-admin-v4/cn-provider-admin.js")'
  const shellImport = `import("/assets/${CN_PROVIDER_SHELL_ASSET}")`
  requireMarkers(registrationEntry, [legacyAdapterImport, adapterImport, shellImport], 'Registration Console entry')
  requireMarkers(standardEntry, [`await ${legacyAdapterImport}`, `await ${adapterImport}`, `await ${shellImport}`], 'Standard Console entry')
  if (
    registrationEntry.indexOf(legacyAdapterImport) > registrationEntry.indexOf(adapterImport) ||
    registrationEntry.indexOf(adapterImport) > registrationEntry.indexOf(shellImport) ||
    standardEntry.indexOf(legacyAdapterImport) > standardEntry.indexOf(adapterImport) ||
    standardEntry.indexOf(adapterImport) > standardEntry.indexOf(shellImport)
  ) {
    throw new Error('CN Provider route seam must start before the approved Console shell')
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
  const overrides = dashboardSpendShellOverrides(assetsDirectory)
  for (const name of expectedLinks) {
    const linkPath = resolve(shellDirectory, name)
    if (overrides.has(name)) {
      if (lstatSync(linkPath).isSymbolicLink() || readFileSync(linkPath, 'utf8') !== overrides.get(name)) {
        throw new Error(`Console override differs from its canonical source: ${name}`)
      }
      continue
    }
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

  const legacyAdapterDirectory = resolve(consoleDir, 'assets/cn-provider-admin-v1')
  const legacyModuleSource = collectJavaScriptClosure(
    legacyAdapterDirectory,
    [
      'cn-provider-admin.js',
      // These roots were referenced by immutable v1 entry responses before the
      // current entry was deployed. Cached entries must retain their full closure.
      'cnProviderAdminLeaf-5Wps3W0p.js',
      'cnProviderAdminLeaf-D2Wwc1yV.js',
      'cnProviderAdminLeaf-B-djDzla.js',
    ],
    'Legacy CN Provider Admin',
  )
  requireMarkers(legacyModuleSource, [
    '/admin/accounts', '/admin/groups', 'Kimi', 'Zhipu GLM', 'DeepSeek',
    'account_mode', 'api_protocol', 'adaptive', 'api_base_urls',
    'https://api.moonshot.cn/v1', 'https://open.bigmodel.cn/api/paas/v4',
    'https://api.deepseek.com',
  ], 'Legacy CN Provider Admin route adapter')

  const adapterDirectory = resolve(consoleDir, 'assets/cn-provider-admin-v4')
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
  const moduleSource = collectJavaScriptClosure(
    adapterDirectory,
    ['cn-provider-admin.js'],
    'CN Provider',
  )

  requireMarkers(moduleSource, [
    '/admin/channels/pricing', '/admin/channels/monitor',
    '/admin/ops', '/admin/subscriptions',
    '__ZERO_ONE_NAVIGATION_RECONCILIATION__', 'provider-catalog-admin',
    '__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__', 'Management page failed to load',
    '/assets/cn-provider-admin-v4/cn-provider-admin.css',
    'Kimi', 'Zhipu GLM', 'DeepSeek',
    'ops-platform-filter', 'subscription-platform-filter',
  ], 'CN Provider Admin route adapter')
  requireMarkers(stylesheet, [
    'table-page-layout', 'table-scroll-container',
    'body.zero-one-provider-catalog-admin-active .border-pink-500',
    'body.zero-one-provider-catalog-admin-active .border-indigo-500',
    'body.zero-one-provider-catalog-admin-active .border-teal-500',
  ], 'CN Provider Admin stylesheet')

  return {
    shell: `/assets/${CN_PROVIDER_SHELL_ASSET}`,
    legacyModule: '/assets/cn-provider-admin-v1/cn-provider-admin.js',
    module: '/assets/cn-provider-admin-v4/cn-provider-admin.js',
    stylesheet: '/assets/cn-provider-admin-v4/cn-provider-admin.css',
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
