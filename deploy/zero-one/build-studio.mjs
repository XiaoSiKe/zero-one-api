import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const temporary = mkdtempSync(join(tmpdir(), 'zero-one-studio-build-'))
const target = resolve(root, 'deploy/zero-one/recovered-frontend/studio')
const entrySource = resolve(root, 'deploy/zero-one/studio-console-entry.mjs')
const entryTarget = resolve(root, 'deploy/zero-one/recovered-frontend/console/assets/zero-one-studio-entry-v1.js')
const check = process.argv.includes('--check')

function files(directory, prefix = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(prefix, entry.name)
    return entry.isDirectory() ? files(join(directory, entry.name), path) : [path]
  })
}

try {
  execFileSync('npm', ['run', 'build', '--', '--outDir', temporary, '--emptyOutDir'], {
    cwd: resolve(root, 'studio/web'), stdio: 'inherit',
  })
  for (const file of files(temporary)) {
    const source = join(temporary, file)
    const destination = join(target, file)
    const equal = existsSync(destination) && readFileSync(source).equals(readFileSync(destination))
    if (check && !equal) throw new Error(`Studio build is stale: ${file}`)
    if (!check && file.startsWith('assets/') && existsSync(destination) && !equal) {
      throw new Error(`Refusing to overwrite an existing hashed Studio asset: ${file}`)
    }
  }
  if (check) {
    if (!readFileSync(entrySource).equals(readFileSync(entryTarget))) throw new Error('Studio Console entry is stale')
  } else {
    // Retain older hashed assets so open documents survive the next release.
    cpSync(temporary, target, { recursive: true })
    cpSync(entrySource, entryTarget)
  }
  console.log(check ? 'Studio assets match their sources.' : 'Studio assets generated.')
} finally {
  rmSync(temporary, { recursive: true, force: true })
}
