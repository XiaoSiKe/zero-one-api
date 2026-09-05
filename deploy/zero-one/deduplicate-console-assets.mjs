import { createHash, randomUUID } from 'node:crypto'
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const digest = bytes => createHash('sha256').update(bytes).digest('hex')
const namespace = /^(?:cn-provider-admin|online-image|password-recovery)-v\d+$/

// Filesystem aliases preserve the original HTTP URL and hence relative imports,
// module identity, MIME type and immutable response bytes. Never redirect URLs.
export function deduplicateConsoleAssets(assetsDirectory) {
  const root = realpathSync(assetsDirectory)
  const pool = resolve(root, 'shared-immutable')
  if (existsSync(pool) && (lstatSync(pool).isSymbolicLink() || !lstatSync(pool).isDirectory())) {
    throw new Error('shared asset pool must be a real directory')
  }
  const groups = new Map()
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || !namespace.test(entry.name)) continue
    for (const name of readdirSync(resolve(root, entry.name))) {
      if (!name.endsWith('.js')) continue
      const path = resolve(root, entry.name, name)
      const target = realpathSync(path)
      const inside = relative(root, target)
      if (isAbsolute(inside) || inside === '..' || inside.startsWith('../')) throw new Error(`asset escapes Console: ${path}`)
      const bytes = readFileSync(path)
      if (bytes.length < 1024) continue
      const key = digest(bytes)
      const group = groups.get(key) || { bytes, paths: [] }
      group.paths.push(path)
      groups.set(key, group)
    }
  }
  let aliases = 0
  let savedBytes = 0
  for (const [key, { bytes, paths }] of groups) {
    if (paths.length < 2) continue
    mkdirSync(pool, { recursive: true })
    const shared = resolve(pool, `${key}.js`)
    const existed = existsSync(shared)
    if (existed) {
      if (!lstatSync(shared).isFile() || digest(readFileSync(shared)) !== key) throw new Error(`shared asset mismatch: ${key}`)
    } else {
      writeFileSync(shared, bytes, { flag: 'wx' })
      savedBytes -= bytes.length
    }
    for (const path of paths) {
      if (realpathSync(path) === shared) continue
      if (lstatSync(path).isFile()) savedBytes += bytes.length
      const temporary = `${path}.${randomUUID()}.tmp`
      try {
        symlinkSync(relative(dirname(path), shared), temporary)
        renameSync(temporary, path)
      } finally {
        if (existsSync(temporary)) unlinkSync(temporary)
      }
      aliases++
    }
  }
  return { aliases, savedBytes }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const assets = resolve(dirname(fileURLToPath(import.meta.url)), 'recovered-frontend/console/assets')
  console.log('Console immutable asset deduplication:', deduplicateConsoleAssets(assets))
}
