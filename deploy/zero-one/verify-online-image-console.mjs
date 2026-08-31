import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

function read(path, label) {
  if (!existsSync(path)) throw new Error(`${label} is missing: ${path}`)
  return readFileSync(path, 'utf8')
}

function requireMarkers(source, markers, label) {
  const missing = markers.filter((marker) => !source.includes(marker))
  if (missing.length > 0) throw new Error(`${label} is missing contracts: ${missing.join(', ')}`)
}

export function verifyOnlineImageConsole(consoleDir) {
  const index = read(resolve(consoleDir, 'index.html'), 'Console entry')
  const registrationStart = index.indexOf('      if (isRegistrationEntry) {')
  const standardStart = index.indexOf('      } else {', registrationStart)
  const entryEnd = index.indexOf(
    '      await import("/assets/zero-one-floating-panels-v1.js?v=2")',
    standardStart,
  )
  if (registrationStart < 0 || standardStart < 0 || entryEnd < 0) {
    throw new Error('Console entry registration and standard branches are missing')
  }
  const registrationEntry = index.slice(registrationStart, standardStart)
  const standardEntry = index.slice(standardStart, entryEnd)
  const adapterImport = 'import("/assets/online-image-v10/online-image.js")'
  const shellImport = 'import("/assets/cn-provider-shell-v4/index-9xJBhx8B.js")'
  requireMarkers(registrationEntry, [adapterImport, shellImport], 'Registration Console entry')
  requireMarkers(standardEntry, [`await ${adapterImport}`, `await ${shellImport}`], 'Standard Console entry')
  if (
    registrationEntry.indexOf(adapterImport) > registrationEntry.indexOf(shellImport) ||
    standardEntry.indexOf(adapterImport) > standardEntry.indexOf(shellImport)
  ) {
    throw new Error('Online image route adapter must start before the approved Console shell')
  }

  const shell = read(
    resolve(consoleDir, 'assets/cn-provider-shell-v4/index-9xJBhx8B.js'),
    'Approved Console shell',
  )
  requireMarkers(shell, [
    'path:"/images",name:"ImageGeneration"',
    'zero-one-online-image-route-placeholder-v1.js',
    'title:"在线生图"',
    '__ZERO_ONE_ONLINE_IMAGE_ACCESS__',
  ], 'Approved Console shell')

  const placeholder = read(
    resolve(consoleDir, 'assets/zero-one-online-image-route-placeholder-v1.js'),
    'Online image route placeholder',
  )
  requireMarkers(placeholder, [
    './vendor-vue-iKpM1E08.js',
    './AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js',
    'ZeroOneOnlineImageRoutePlaceholder',
    '__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__',
  ], 'Online image route placeholder')

  const adapterDirectory = resolve(consoleDir, 'assets/online-image-v10')
  const entry = read(resolve(adapterDirectory, 'online-image.js'), 'Online image route adapter')
  const stylesheet = read(resolve(adapterDirectory, 'online-image.css'), 'Online image stylesheet')
  if (Buffer.byteLength(entry, 'utf8') > 50_000) {
    throw new Error('Online image route seam eagerly includes the leaf application runtime')
  }

  const javascriptAssets = readdirSync(adapterDirectory).filter((name) => name.endsWith('.js'))
  const moduleSource = javascriptAssets.sort().map((name) => (
    read(resolve(adapterDirectory, name), `Online image asset ${name}`)
  )).join('\n')
  requireMarkers(moduleSource, [
    '/v1/models', '/v1/images/generations', '/v1/images/edits',
    'online-image', '模型选择', '刷新密钥', '质量', '返回格式',
    '创建生图API密钥', '生图教程',
    'data-testid', 'model-count-row', 'quality-format-row', 'image-tutorial-link',
    'btn-primary', 'btn-specular',
    'allow_image_generation', '__ZERO_ONE_ONLINE_IMAGE_ACCESS__',
  ], 'Online image route adapter')
  if (moduleSource.includes('请填写当前密钥可访问的图片模型')) {
    throw new Error('Online image route still contains the removed manual-model contract')
  }
  requireMarkers(stylesheet, ['online-image-control', 'border-radius:8px'], 'Online image stylesheet')

  return {
    route: '/images',
    module: '/assets/online-image-v10/online-image.js',
    stylesheet: '/assets/online-image-v10/online-image.css',
  }
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  try {
    const consoleDir = process.argv[2]
    if (!consoleDir) throw new Error('usage: node verify-online-image-console.mjs CONSOLE_DIR')
    const assets = verifyOnlineImageConsole(resolve(consoleDir))
    console.log(`Online image Console contract OK (${Object.values(assets).join(', ')})`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}
