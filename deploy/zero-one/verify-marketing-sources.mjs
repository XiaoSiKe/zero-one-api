import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  lstatSync,
  readFileSync,
  readdirSync,
} from 'node:fs'
import { dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const manifestPath = resolve(repoRoot, 'assets/MARKETING-SOURCES.md')
const dockerignorePath = resolve(repoRoot, '.dockerignore')
const expectedPaths = [
  'assets/marketing/zero-one-api-price-poster-v1.png',
  'assets/posters/zero-one-api-pricing-poster-v1.png',
  'assets/posters/zero-one-api-pricing-saving-80-imagegen-v2.png',
  'assets/posters/zero-one-api-pricing-savings-95-80-imagegen-v3.png',
]
const expectedSha256 = new Map([
  ['assets/marketing/zero-one-api-price-poster-v1.png', '3304dfd7fa0d76e4efc67289343401ff49eec9643b661669749e34968467eb83'],
  ['assets/posters/zero-one-api-pricing-poster-v1.png', '8bd6b2ae1903fdd2acdb9b906edf3e9d9262586823a664cee52497a3f1fdcdda'],
  ['assets/posters/zero-one-api-pricing-saving-80-imagegen-v2.png', '01b45e5d0e885471ad8481f46852972f84f9301d38de3f6acbb4115f263d4f3b'],
  ['assets/posters/zero-one-api-pricing-savings-95-80-imagegen-v3.png', '62c0b2c6aef903bfacba0a48e6c6b0aaf2f113cfeeed34de3723eca50b5d5f40'],
])
const expectedDockerIgnores = [
  'assets/marketing/',
  'assets/posters/',
]
const runtimeExtensions = new Set([
  '.cjs',
  '.css',
  '.go',
  '.html',
  '.js',
  '.jsx',
  '.json',
  '.mjs',
  '.sql',
  '.ts',
  '.tsx',
  '.vue',
  '.yaml',
  '.yml',
])

const fail = (message) => {
  throw new Error(`marketing source contract failed: ${message}`)
}

const listFiles = (root, include) => {
  const files = []
  const visit = (path) => {
    const stat = lstatSync(path)
    if (stat.isSymbolicLink()) fail(`${relative(repoRoot, path)} must not be a symlink`)
    if (stat.isDirectory()) {
      for (const entry of readdirSync(path, { withFileTypes: true })) {
        if (entry.name === 'node_modules' || entry.name === 'dist') continue
        visit(resolve(path, entry.name))
      }
      return
    }
    if (stat.isFile() && include(path)) files.push(path)
  }
  visit(root)
  return files
}

const manifestSource = readFileSync(manifestPath, 'utf8')
const manifestRows = [...manifestSource.matchAll(/^\| `([^`]+)` \| ([^|]+) \| ([^|]+) \|$/gmu)]
  .map((match) => ({
    path: `assets/${match[1]}`,
    purpose: match[2].trim(),
    status: match[3].trim(),
  }))
const manifestPaths = manifestRows.map((entry) => entry.path).sort()
if (JSON.stringify(manifestPaths) !== JSON.stringify([...expectedPaths].sort())) {
  fail('manifest must contain exactly the four approved poster paths')
}

for (const entry of manifestRows) {
  if (entry.status !== 'Managed source / not runtime') {
    fail(`${entry.path} must be managed-source and not runtime`)
  }
  if (entry.purpose === '') {
    fail(`${entry.path} must declare a purpose`)
  }

  const sourcePath = resolve(repoRoot, entry.path)
  if (!lstatSync(sourcePath).isFile()) fail(`${entry.path} must be a regular file`)
  const digest = createHash('sha256').update(readFileSync(sourcePath)).digest('hex')
  if (digest !== expectedSha256.get(entry.path)) fail(`${entry.path} sha256 is not approved`)

  try {
    execFileSync('git', ['check-ignore', '--quiet', '--', entry.path], {
      cwd: repoRoot,
      stdio: 'ignore',
    })
    fail(`${entry.path} must remain available for Git tracking`)
  } catch (error) {
    if (error.message?.startsWith('marketing source contract failed:')) throw error
    if (error.status !== 1) throw error
  }
}

const sourceInventory = [
  ...listFiles(resolve(repoRoot, 'assets/marketing'), (path) => extname(path) === '.png'),
  ...listFiles(resolve(repoRoot, 'assets/posters'), (path) => extname(path) === '.png'),
]
  .map((path) => relative(repoRoot, path))
  .sort()
if (JSON.stringify(sourceInventory) !== JSON.stringify([...expectedPaths].sort())) {
  fail('poster directories contain a PNG that is missing from the manifest')
}

const dockerignoreLines = new Set(
  readFileSync(dockerignorePath, 'utf8')
    .split(/\r?\n/u)
    .map((line) => line.trim()),
)
for (const pattern of expectedDockerIgnores) {
  if (!dockerignoreLines.has(pattern)) fail(`.dockerignore must contain exact rule ${pattern}`)
}

const runtimeRoots = [
  'backend',
  'frontend/src',
  'landing/src',
]
const runtimeFiles = runtimeRoots.flatMap((path) =>
  listFiles(resolve(repoRoot, path), (file) => runtimeExtensions.has(extname(file))),
)
runtimeFiles.push(resolve(repoRoot, 'Dockerfile'))
runtimeFiles.push(resolve(repoRoot, 'deploy/zero-one/Dockerfile.edge'))

const forbiddenReferences = expectedPaths.flatMap((path) => [path, path.split('/').at(-1)])
for (const runtimeFile of runtimeFiles) {
  const source = readFileSync(runtimeFile, 'utf8')
  const reference = forbiddenReferences.find((value) => source.includes(value))
  if (reference) {
    fail(`${relative(repoRoot, runtimeFile)} references managed source ${reference}`)
  }
}

console.log('zero-one marketing source contract OK')
