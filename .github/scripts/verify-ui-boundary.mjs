import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const defaultManifestPath = '.github/scripts/ui-baseline.json'

function git(args) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
}

function matchesPath(path, rule) {
  return rule.endsWith('/') ? path.startsWith(rule) : path === rule
}

function validatePath(path, label) {
  if (
    typeof path !== 'string' ||
    !path ||
    path.startsWith('/') ||
    path.includes('\\') ||
    path.split('/').some((part) => part === '.' || part === '..')
  ) {
    throw new Error(`${label} path is invalid: ${path || '<empty>'}`)
  }
}

export function validateManifest(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('UI baseline must be a JSON object')
  }
  if (value.schema_version !== 1) throw new Error('unsupported UI baseline schema_version')
  if (!/^ui-approved-\d{4}-\d{2}-\d{2}(?:-[a-z0-9]+)*$/.test(value.baseline_ref || '')) {
    throw new Error('UI baseline_ref must be a dated ui-approved tag with an optional slug suffix')
  }
  if (!/^[0-9a-f]{40}$/.test(value.baseline_commit || '')) {
    throw new Error('UI baseline_commit must be a lowercase 40-character SHA')
  }
  for (const field of ['protected_paths', 'compatibility_paths']) {
    if (!Array.isArray(value[field]) || value[field].length === 0) {
      throw new Error(`UI baseline ${field} must be a non-empty array`)
    }
    const seen = new Set()
    for (const path of value[field]) {
      validatePath(path, `UI baseline ${field}`)
      if (seen.has(path)) throw new Error(`duplicate UI baseline path: ${path}`)
      seen.add(path)
    }
  }
  for (const path of value.compatibility_paths) {
    if (!value.protected_paths.some((rule) => matchesPath(path, rule))) {
      throw new Error(`compatibility path is outside protected paths: ${path}`)
    }
  }
  if (!Array.isArray(value.protected_surfaces) || value.protected_surfaces.length === 0) {
    throw new Error('UI baseline protected_surfaces must be a non-empty array')
  }
  const surfaceNames = new Set()
  for (const surface of value.protected_surfaces) {
    if (!surface || typeof surface !== 'object' || Array.isArray(surface)) {
      throw new Error('UI protected surface must be an object')
    }
    if (typeof surface.name !== 'string' || !surface.name.trim() || surfaceNames.has(surface.name)) {
      throw new Error(`UI protected surface name is missing or duplicated: ${surface.name || '<empty>'}`)
    }
    if (
      !Array.isArray(surface.routes) ||
      surface.routes.length === 0 ||
      surface.routes.some((route) => typeof route !== 'string' || (!route.startsWith('/') && !route.startsWith('#')))
    ) {
      throw new Error(`UI protected surface ${surface.name} routes must be absolute or hash paths`)
    }
    if (!Array.isArray(surface.paths) || surface.paths.length === 0) {
      throw new Error(`UI protected surface ${surface.name} paths must be a non-empty array`)
    }
    for (const path of surface.paths) {
      validatePath(path, `UI protected surface ${surface.name}`)
      if (!value.protected_paths.some((rule) => matchesPath(path, rule))) {
        throw new Error(`UI protected surface ${surface.name} path is outside protected paths: ${path}`)
      }
    }
    surfaceNames.add(surface.name)
  }
  if (!value.edge_build || typeof value.edge_build !== 'object') {
    throw new Error('UI baseline edge_build is required')
  }
  for (const field of ['dockerfile', 'landing_source', 'console_source']) {
    validatePath(value.edge_build[field], `UI baseline edge_build.${field}`)
  }
  if (!value.protected_paths.some((rule) => matchesPath(value.edge_build.dockerfile, rule))) {
    throw new Error('edge_build.dockerfile must be protected')
  }
  for (const field of ['landing_source', 'console_source']) {
    if (!value.protected_paths.some((rule) => matchesPath(value.edge_build[field], rule))) {
      throw new Error(`edge_build.${field} must be protected`)
    }
  }
  return value
}

export function evaluateChangedPaths(paths, manifest) {
  const uniquePaths = [...new Set(paths)].sort()
  return uniquePaths.filter(
    (path) =>
      !manifest.compatibility_paths.some((rule) => matchesPath(path, rule)) &&
      manifest.protected_paths.some((rule) => matchesPath(path, rule)),
  )
}

function consoleAssetReferences(html) {
  const references = []
  const pattern = /(?:src|href)=["']([^"']+)|\bimport\(["']([^"']+)["']\)/gu
  for (const match of html.matchAll(pattern)) {
    const reference = match[1] || match[2]
    if (reference && /(?:^|\/)assets\//u.test(reference)) references.push(reference)
  }
  return references
}

export function evaluateConsoleEntryReferences(currentHtml, baselineHtml, path) {
  const current = consoleAssetReferences(currentHtml)
  const baseline = consoleAssetReferences(baselineHtml)
  return JSON.stringify(current) === JSON.stringify(baseline)
    ? []
    : [`${path} asset references differ from approved baseline`]
}

function changedPaths(manifest, includeWorktree) {
  const committed = git(['diff', '--name-only', `${manifest.baseline_ref}...HEAD`])
  const paths = committed ? committed.split(/\r?\n/u).filter(Boolean) : []
  if (!includeWorktree) return paths

  const worktree = git(['diff', '--name-only', 'HEAD'])
  const untracked = git(['ls-files', '--others', '--exclude-standard'])
  return paths.concat(
    worktree ? worktree.split(/\r?\n/u).filter(Boolean) : [],
    untracked ? untracked.split(/\r?\n/u).filter(Boolean) : [],
  )
}

function verifyEdgeBuild(manifest) {
  const dockerfile = readFileSync(resolve(repoRoot, manifest.edge_build.dockerfile), 'utf8')
  const expectedCopies = [
    `COPY ${manifest.edge_build.landing_source} /srv/landing`,
    `COPY ${manifest.edge_build.console_source} /srv/console`,
  ]
  return expectedCopies
    .filter((expected) => !dockerfile.split(/\r?\n/u).some((line) => line.trim() === expected))
    .map((expected) => `${manifest.edge_build.dockerfile} must contain: ${expected}`)
}

function verifyConsoleEntry(manifest) {
  const path = `${manifest.edge_build.console_source}/index.html`
  const current = readFileSync(resolve(repoRoot, path), 'utf8')
  const baseline = git(['show', `${manifest.baseline_ref}:${path}`])
  return evaluateConsoleEntryReferences(current, baseline, path)
}

export function main(argv = process.argv.slice(2)) {
  const manifestPath = argv.find((arg) => !arg.startsWith('--')) || defaultManifestPath
  const includeWorktree = argv.includes('--worktree')
  const manifest = validateManifest(
    JSON.parse(readFileSync(resolve(repoRoot, manifestPath), 'utf8')),
  )
  const resolvedBaseline = git(['rev-parse', `${manifest.baseline_ref}^{commit}`])
  if (resolvedBaseline !== manifest.baseline_commit) {
    throw new Error(
      `UI baseline tag ${manifest.baseline_ref} resolves to ${resolvedBaseline}, expected ${manifest.baseline_commit}`,
    )
  }

  const violations = evaluateChangedPaths(changedPaths(manifest, includeWorktree), manifest)
  violations.push(...verifyEdgeBuild(manifest))
  violations.push(...verifyConsoleEntry(manifest))
  if (violations.length > 0) {
    throw new Error(
      [
        'UI baseline boundary failed.',
        `Approved baseline: ${manifest.baseline_ref} (${manifest.baseline_commit})`,
        'Protected UI paths changed or the edge build source moved:',
        ...violations.map((violation) => `- ${violation}`),
        'Update the UI intentionally only after visual review and moving the approved baseline tag.',
      ].join('\n'),
    )
  }

  console.log(
    `UI baseline boundary OK (${manifest.baseline_ref}; worktree=${includeWorktree ? 'included' : 'committed only'})`,
  )
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main()
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}
