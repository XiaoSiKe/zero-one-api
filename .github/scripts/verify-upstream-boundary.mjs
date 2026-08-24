import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { lstatSync, readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const DEFAULT_BASELINE_PATH = '.github/upstream-baseline.json'
const REQUIRED_OVERLAY_OWNERS = [
  'Console Skin',
  'Public Capabilities',
  'Supported Preview',
  'Visual Regression',
  'Marketing Source Assets',
]
const STABLE_RELEASE_PATTERN = /^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/u
const COMMIT_PATTERN = /^[0-9a-f]{40}$/u

function matchesPath(path, rule) {
  return rule.endsWith('/') ? path.startsWith(rule) : path === rule
}

function pathsOverlap(left, right) {
  return left === right || matchesPath(left, right) || matchesPath(right, left)
}

function validatePathRule(path, label, { allowDirectory = true } = {}) {
  if (
    typeof path !== 'string' ||
    !path ||
    path.startsWith('/') ||
    path.includes('\\') ||
    /[*?[\]]/.test(path) ||
    path.split('/').some((part) => part === '.' || part === '..') ||
    (!allowDirectory && path.endsWith('/'))
  ) {
    throw new Error(`${label} path is invalid: ${path || '<empty>'}`)
  }
}

function overlayRules(baseline) {
  return baseline.overlays.flatMap(({ owner, paths }) => paths.map((path) => ({ owner, path })))
}

function legacyHotfixPaths(baseline) {
  return new Set(baseline.legacy_hotfixes.flatMap((hotfix) => hotfix.paths))
}

function preservedOverlayPaths(baseline) {
  return new Set(baseline.preserve_on_upstream_sync)
}

export function validateBaseline(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('upstream baseline must be a JSON object')
  }
  if (value.schema_version !== 4) throw new Error('unsupported upstream baseline schema_version')
  if (typeof value.repository !== 'string' || !value.repository) {
    throw new Error('upstream baseline repository is required')
  }
  if (
    typeof value.release !== 'string' ||
    !STABLE_RELEASE_PATTERN.test(value.release)
  ) {
    throw new Error('upstream baseline release must be a stable vMAJOR.MINOR.PATCH tag')
  }
  if (typeof value.commit !== 'string' || !COMMIT_PATTERN.test(value.commit)) {
    throw new Error('upstream baseline commit must be a lowercase 40-character SHA')
  }
  const sync = value.upstream_sync
  if (!sync || typeof sync !== 'object' || Array.isArray(sync)) {
    throw new Error('upstream baseline upstream_sync metadata is required')
  }
  if (
    typeof sync.previous_release !== 'string' ||
    !STABLE_RELEASE_PATTERN.test(sync.previous_release) ||
    sync.previous_release === value.release
  ) {
    throw new Error('upstream_sync previous_release must be a different stable release tag')
  }
  for (const field of ['previous_commit', 'product_commit', 'merge_commit']) {
    if (typeof sync[field] !== 'string' || !COMMIT_PATTERN.test(sync[field])) {
      throw new Error(`upstream_sync ${field} must be a lowercase 40-character SHA`)
    }
  }
  if (sync.previous_commit === value.commit) {
    throw new Error('upstream_sync previous_commit must differ from the current upstream commit')
  }
  if (sync.product_commit === sync.merge_commit) {
    throw new Error('upstream_sync product_commit must differ from merge_commit')
  }
  if (sync.product_commit === value.commit || sync.merge_commit === value.commit) {
    throw new Error('upstream_sync product and merge commits must differ from the upstream commit')
  }
  if (
    !Array.isArray(value.immutable_paths) ||
    value.immutable_paths.some((path) => typeof path !== 'string' || !path)
  ) {
    throw new Error('upstream baseline immutable_paths must be an array of non-empty strings')
  }
  value.immutable_paths.forEach((path) => validatePathRule(path, 'immutable'))

  if (!Array.isArray(value.overlays)) throw new Error('upstream baseline overlays must be an array')
  const owners = new Set()
  const rules = []
  for (const overlay of value.overlays) {
    if (!overlay || typeof overlay !== 'object' || Array.isArray(overlay)) {
      throw new Error('overlay must be an object')
    }
    if (typeof overlay.owner !== 'string' || !overlay.owner.trim()) {
      throw new Error('overlay owner is required')
    }
    if (owners.has(overlay.owner)) throw new Error(`duplicate overlay owner: ${overlay.owner}`)
    if (!Array.isArray(overlay.paths) || overlay.paths.length === 0) {
      throw new Error(`overlay ${overlay.owner} paths must be a non-empty array`)
    }
    owners.add(overlay.owner)
    for (const path of overlay.paths) {
      validatePathRule(path, `overlay ${overlay.owner}`)
      for (const existing of rules) {
        if (pathsOverlap(path, existing.path)) {
          throw new Error(
            `overlay path overlap: ${existing.owner}:${existing.path} and ${overlay.owner}:${path}`,
          )
        }
      }
      rules.push({ owner: overlay.owner, path })
    }
  }
  const actualOwners = [...owners].sort()
  const requiredOwners = [...REQUIRED_OVERLAY_OWNERS].sort()
  if (JSON.stringify(actualOwners) !== JSON.stringify(requiredOwners)) {
    throw new Error(`overlay owners must be exactly: ${REQUIRED_OVERLAY_OWNERS.join(', ')}`)
  }

  if (!Array.isArray(value.preserve_on_upstream_sync)) {
    throw new Error('upstream baseline preserve_on_upstream_sync must be an array')
  }
  const preservedPaths = new Set()
  for (const path of value.preserve_on_upstream_sync) {
    validatePathRule(path, 'preserve_on_upstream_sync', { allowDirectory: false })
    if (preservedPaths.has(path)) {
      throw new Error(`duplicate preserve_on_upstream_sync path: ${path}`)
    }
    const matchingRules = rules.filter((rule) => matchesPath(path, rule.path))
    if (matchingRules.length !== 1) {
      throw new Error(
        `preserve_on_upstream_sync path must belong to exactly one overlay: ${path}`,
      )
    }
    preservedPaths.add(path)
  }

  if (!Array.isArray(value.immutable_exceptions)) {
    throw new Error('upstream baseline immutable_exceptions must be an array')
  }
  const exceptionNames = new Set()
  const exceptionPaths = new Set()
  for (const exception of value.immutable_exceptions) {
    if (!exception || typeof exception !== 'object' || Array.isArray(exception)) {
      throw new Error('immutable exception must be an object')
    }
    if (typeof exception.name !== 'string' || !exception.name.trim()) {
      throw new Error('immutable exception name is required')
    }
    if (exceptionNames.has(exception.name)) {
      throw new Error(`duplicate immutable exception name: ${exception.name}`)
    }
    if (!owners.has(exception.owner)) {
      throw new Error(`immutable exception owner is not an overlay owner: ${exception.owner}`)
    }
    validatePathRule(exception.path, `immutable exception ${exception.name}`, {
      allowDirectory: false,
    })
    if (exceptionPaths.has(exception.path)) {
      throw new Error(`duplicate immutable exception path: ${exception.path}`)
    }
    if (!value.immutable_paths.includes(exception.immutable_path)) {
      throw new Error(
        `immutable exception ${exception.name} references unknown immutable path ${exception.immutable_path}`,
      )
    }
    if (!matchesPath(exception.path, exception.immutable_path)) {
      throw new Error(
        `immutable exception ${exception.name} path is outside ${exception.immutable_path}`,
      )
    }
    const matchingRules = rules.filter(({ path }) => matchesPath(exception.path, path))
    if (matchingRules.length !== 1 || matchingRules[0].owner !== exception.owner) {
      throw new Error(
        `immutable exception ${exception.name} must bind to exactly one path owned by ${exception.owner}`,
      )
    }
    exceptionNames.add(exception.name)
    exceptionPaths.add(exception.path)
  }

  for (const rule of rules) {
    for (const immutablePath of value.immutable_paths) {
      if (!pathsOverlap(rule.path, immutablePath)) continue
      const exception = value.immutable_exceptions.find(
        (candidate) =>
          candidate.path === rule.path &&
          candidate.owner === rule.owner &&
          candidate.immutable_path === immutablePath,
      )
      if (!exception || rule.path.endsWith('/')) {
        throw new Error(
          `overlay ${rule.owner} path ${rule.path} overlaps immutable path ${immutablePath} without an exact named exception`,
        )
      }
    }
  }

  if (!Array.isArray(value.legacy_hotfixes)) {
    throw new Error('upstream baseline legacy_hotfixes must be an array')
  }
  const hotfixNames = new Set()
  const hotfixPaths = new Set()
  for (const hotfix of value.legacy_hotfixes) {
    if (!hotfix || typeof hotfix !== 'object' || Array.isArray(hotfix)) {
      throw new Error('legacy hotfix must be an object')
    }
    if (typeof hotfix.name !== 'string' || !hotfix.name.trim()) {
      throw new Error('legacy hotfix name is required')
    }
    if (hotfixNames.has(hotfix.name)) throw new Error(`duplicate legacy hotfix name: ${hotfix.name}`)
    if (hotfix.valid_for_release !== value.release) {
      throw new Error('legacy hotfix valid_for_release must match the baseline release')
    }
    if (typeof hotfix.exit_condition !== 'string' || !hotfix.exit_condition.trim()) {
      throw new Error('legacy hotfix exit_condition is required')
    }
    if (!Array.isArray(hotfix.paths) || hotfix.paths.length === 0) {
      throw new Error(`legacy hotfix ${hotfix.name} paths must be a non-empty array`)
    }
    for (const path of hotfix.paths) {
      validatePathRule(path, `legacy hotfix ${hotfix.name}`, { allowDirectory: false })
      if (hotfixPaths.has(path)) throw new Error(`duplicate legacy hotfix path: ${path}`)
      if (rules.some((rule) => pathsOverlap(path, rule.path))) {
        throw new Error(`legacy hotfix path overlaps an overlay: ${path}`)
      }
      if (value.immutable_paths.some((rule) => matchesPath(path, rule))) {
        throw new Error(`legacy hotfix path modifies immutable upstream path: ${path}`)
      }
      hotfixPaths.add(path)
    }
    hotfixNames.add(hotfix.name)
  }

  if (!Array.isArray(value.approved_backports)) {
    throw new Error('upstream baseline approved_backports must be an array')
  }
  const approvedPaths = new Set()
  for (const backport of value.approved_backports) {
    if (!backport || typeof backport !== 'object' || Array.isArray(backport)) {
      throw new Error('approved backport must be an object')
    }
    if (backport.source_repository !== value.repository) {
      throw new Error('approved backport source_repository must match the baseline repository')
    }
    if (!Number.isSafeInteger(backport.source_pull_request) || backport.source_pull_request <= 0) {
      throw new Error('approved backport source_pull_request must be a positive integer')
    }
    if (typeof backport.source_commit !== 'string' || !/^[0-9a-f]{40}$/.test(backport.source_commit)) {
      throw new Error('approved backport source_commit must be a lowercase 40-character SHA')
    }
    if (backport.valid_for_release !== value.release) {
      throw new Error('approved backport valid_for_release must match the baseline release')
    }
    if (typeof backport.exit_condition !== 'string' || !backport.exit_condition.trim()) {
      throw new Error('approved backport exit_condition is required')
    }
    if (
      !backport.files ||
      typeof backport.files !== 'object' ||
      Array.isArray(backport.files) ||
      Object.keys(backport.files).length === 0
    ) {
      throw new Error('approved backport files must be a non-empty object')
    }

    for (const [path, file] of Object.entries(backport.files)) {
      validatePathRule(path, 'approved backport', { allowDirectory: false })
      if (approvedPaths.has(path)) throw new Error(`duplicate approved backport path: ${path}`)
      if (!file || typeof file !== 'object' || Array.isArray(file)) {
        throw new Error(`approved backport file metadata is invalid: ${path}`)
      }
      if (typeof file.sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(file.sha256)) {
        throw new Error(`approved backport sha256 is invalid: ${path}`)
      }
      if (file.mode !== '100644' && file.mode !== '100755') {
        throw new Error(`approved backport mode is invalid: ${path}`)
      }
      if (rules.some((rule) => matchesPath(path, rule.path)) || hotfixPaths.has(path)) {
        throw new Error(`approved backport path is already owned by another registry block: ${path}`)
      }
      approvedPaths.add(path)
    }
  }
  return value
}

function approvedBackportFiles(baseline) {
  return new Map(
    baseline.approved_backports.flatMap((backport) =>
      Object.entries(backport.files).map(([path, file]) => [path, file]),
    ),
  )
}

export function evaluateReleaseTag(baseline, peeledCommit) {
  if (peeledCommit === baseline.commit) return []
  return [
    `upstream release tag ${baseline.release} peels to ${peeledCommit || '<missing>'}, expected ${baseline.commit}`,
  ]
}

export function evaluateChangedPaths(paths, baseline) {
  const backportFiles = approvedBackportFiles(baseline)
  const hotfixPaths = legacyHotfixPaths(baseline)
  const rules = overlayRules(baseline)
  const exceptions = new Set(baseline.immutable_exceptions.map(({ path }) => path))
  return [...new Set(paths)].sort().flatMap((path) => {
    if (backportFiles.has(path) || hotfixPaths.has(path)) return []
    const immutableRule = baseline.immutable_paths.find((rule) => matchesPath(path, rule))
    if (immutableRule && !exceptions.has(path)) {
      return [`${path} modifies immutable upstream path ${immutableRule}`]
    }
    if (!rules.some((rule) => matchesPath(path, rule.path))) {
      return [`${path} is outside the approved overlay registry`]
    }
    return []
  })
}

export function evaluatePreservedPaths(paths, baseline) {
  const preserved = preservedOverlayPaths(baseline)
  return [...new Set(paths)]
    .filter((path) => preserved.has(path))
    .sort()
    .map(
      (path) =>
        `${path} differs from the pre-upgrade product ref; restore it and port upstream changes separately`,
    )
}

export function evaluateProductReference(productCommit, headCommit) {
  if (!productCommit) return []
  if (productCommit !== headCommit) return []
  return [
    `product ref ${productCommit} resolves to current HEAD; provide the immutable pre-upgrade product commit`,
  ]
}

export function evaluatePreserveRegistryContinuity(baseline, productBaseline) {
  if (
    productBaseline?.schema_version !== 3 &&
    !Array.isArray(productBaseline?.preserve_on_upstream_sync)
  ) {
    return [
      `product commit ${baseline.upstream_sync.product_commit} has an invalid preserve_on_upstream_sync registry`,
    ]
  }
  const previous = Array.isArray(productBaseline?.preserve_on_upstream_sync)
    ? productBaseline.preserve_on_upstream_sync
    : []
  const current = new Set(baseline.preserve_on_upstream_sync)
  return [...new Set(previous)]
    .filter((path) => !current.has(path))
    .sort()
    .map(
      (path) =>
        `${path} was protected at the pre-upgrade product ref and cannot be removed during upstream sync`,
    )
}

export function evaluateRecordedUpstreamSync({
  baseline,
  headCommit,
  mergeParents,
  mergeIsAncestor,
  productBaseline,
  preservedChanges,
}) {
  const sync = baseline.upstream_sync
  const violations = evaluateProductReference(sync.product_commit, headCommit)
  if (!mergeIsAncestor) {
    violations.push(
      `recorded upstream merge ${sync.merge_commit} is not an ancestor of current HEAD ${headCommit}`,
    )
  }
  if (
    mergeParents.length !== 2 ||
    mergeParents[0] !== sync.product_commit ||
    mergeParents[1] !== baseline.commit
  ) {
    violations.push(
      `recorded upstream merge ${sync.merge_commit} must have product ${sync.product_commit} as first parent and upstream ${baseline.commit} as second parent`,
    )
  }
  if (
    productBaseline?.repository !== baseline.repository ||
    productBaseline?.release !== sync.previous_release ||
    productBaseline?.commit !== sync.previous_commit
  ) {
    violations.push(
      `product commit ${sync.product_commit} must record ${baseline.repository}@${sync.previous_release} (${sync.previous_commit})`,
    )
  }
  const preserveRegistryAtSync = {
    preserve_on_upstream_sync: Array.isArray(productBaseline?.preserve_on_upstream_sync)
      ? productBaseline.preserve_on_upstream_sync
      : [],
  }
  return [
    ...violations,
    ...evaluatePreserveRegistryContinuity(baseline, productBaseline),
    ...evaluatePreservedPaths(preservedChanges, preserveRegistryAtSync),
  ]
}

export function evaluateApprovedBackportContents(baseline, readPath) {
  const violations = []
  for (const [path, expected] of approvedBackportFiles(baseline)) {
    let file
    try {
      file = readPath(path)
    } catch {
      violations.push(`approved backport ${path} is missing`)
      continue
    }
    if (!file?.isRegularFile) {
      violations.push(`approved backport ${path} is not a regular file`)
      continue
    }
    if (file.mode !== expected.mode) {
      violations.push(
        `approved backport ${path} mode mismatch: expected ${expected.mode}, got ${file.mode}`,
      )
      continue
    }
    const actualSha256 = createHash('sha256').update(file.content).digest('hex')
    if (actualSha256 !== expected.sha256) {
      violations.push(
        `approved backport ${path} content mismatch: expected ${expected.sha256}, got ${actualSha256}`,
      )
    }
  }
  return violations
}

function git(args, options = {}) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...options }).trim()
}

function readHeadPath(path) {
  const entry = git(['ls-tree', 'HEAD', '--', path])
  if (!entry) throw new Error(`missing ${path}`)
  const mode = entry.split(/\s+/, 1)[0]
  return {
    content: execFileSync('git', ['show', `HEAD:${path}`], { stdio: ['ignore', 'pipe', 'pipe'] }),
    isRegularFile: mode === '100644' || mode === '100755',
    mode,
  }
}

function readWorktreePath(path) {
  const stat = lstatSync(path)
  if (!stat.isFile()) return { content: Buffer.alloc(0), isRegularFile: false, mode: null }
  return {
    content: readFileSync(path),
    isRegularFile: true,
    mode: stat.mode & 0o111 ? '100755' : '100644',
  }
}

export function changedPathsBetween(oldCommit, newCommit, cwd) {
  const options = cwd ? { cwd } : {}
  return git(
    [
      'diff',
      '--no-renames',
      '--name-only',
      '--diff-filter=ACDMRTUXB',
      oldCommit,
      newCommit,
      '--',
    ],
    options,
  )
    .split('\n')
    .filter(Boolean)
}

export function changedPaths(commit, includeWorktree, cwd) {
  const options = cwd ? { cwd } : {}
  const tracked = includeWorktree
    ? git(
        ['diff', '--no-renames', '--name-only', '--diff-filter=ACDMRTUXB', commit, '--'],
        options,
      )
        .split('\n')
        .filter(Boolean)
    : changedPathsBetween(commit, 'HEAD', cwd)
  if (!includeWorktree) return tracked
  const untracked = git(['ls-files', '--others', '--exclude-standard'], options)
    .split('\n')
    .filter(Boolean)
  return [...tracked, ...untracked]
}

export function inspectRecordedUpstreamSync(baseline, headCommit, cwd) {
  const options = cwd ? { cwd } : {}
  const sync = baseline.upstream_sync
  const mergeParents = git(['show', '-s', '--format=%P', sync.merge_commit], options)
    .split(/\s+/u)
    .filter(Boolean)
  let mergeIsAncestor = true
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', sync.merge_commit, headCommit], {
      cwd,
      stdio: 'ignore',
    })
  } catch {
    mergeIsAncestor = false
  }
  let productBaseline = null
  try {
    productBaseline = JSON.parse(
      git(['show', `${sync.product_commit}:${DEFAULT_BASELINE_PATH}`], options),
    )
  } catch {
    productBaseline = null
  }
  return evaluateRecordedUpstreamSync({
    baseline,
    headCommit,
    mergeParents,
    mergeIsAncestor,
    productBaseline,
    preservedChanges: changedPathsBetween(sync.product_commit, sync.merge_commit, cwd),
  })
}

export function parseArguments(argv) {
  const options = { includeWorktree: false, productRef: null }
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]
    if (argument === '--worktree') {
      options.includeWorktree = true
      continue
    }
    if (argument === '--product-ref') {
      const value = argv[index + 1]
      if (!value || value.startsWith('--')) throw new Error('--product-ref requires a git ref')
      options.productRef = value
      index += 1
      continue
    }
    throw new Error(`unknown argument: ${argument}`)
  }
  return options
}

export function main(argv = process.argv.slice(2)) {
  const { includeWorktree, productRef } = parseArguments(argv)

  const baseline = validateBaseline(JSON.parse(readFileSync(DEFAULT_BASELINE_PATH, 'utf8')))
  git(['cat-file', '-e', `${baseline.commit}^{commit}`])
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', baseline.commit, 'HEAD'], { stdio: 'ignore' })
  } catch {
    throw new Error(`upstream baseline ${baseline.commit} is not an ancestor of HEAD`)
  }

  let peeledCommit
  try {
    peeledCommit = git(['rev-parse', '--verify', `${baseline.release}^{commit}`])
  } catch {
    peeledCommit = null
  }

  const headCommit = git(['rev-parse', '--verify', 'HEAD^{commit}'])
  const paths = changedPaths(baseline.commit, includeWorktree)
  const recordedSyncViolations = inspectRecordedUpstreamSync(baseline, headCommit)
  let productCommit = null
  let productChanges = []
  if (productRef) {
    productCommit = git(['rev-parse', '--verify', `${productRef}^{commit}`])
    try {
      execFileSync('git', ['merge-base', '--is-ancestor', productCommit, 'HEAD'], {
        stdio: 'ignore',
      })
    } catch {
      throw new Error(`product ref ${productCommit} is not an ancestor of HEAD`)
    }
    productChanges = changedPaths(productCommit, includeWorktree)
  }
  const readPath = includeWorktree ? readWorktreePath : readHeadPath
  const violations = [
    ...evaluateReleaseTag(baseline, peeledCommit),
    ...evaluateChangedPaths(paths, baseline),
    ...recordedSyncViolations,
    ...evaluateProductReference(productCommit, headCommit),
    ...evaluatePreservedPaths(productChanges, baseline),
    ...evaluateApprovedBackportContents(baseline, readPath),
  ]
  if (violations.length) throw new Error(`upstream boundary violations:\n- ${violations.join('\n- ')}`)

  console.log(
    `upstream boundary OK: ${baseline.repository}@${baseline.release} (${baseline.commit}), recorded merge ${baseline.upstream_sync.merge_commit} preserves ${baseline.preserve_on_upstream_sync.length} protected product files, ${paths.length} changed paths checked across ${baseline.overlays.length} overlays, ${approvedBackportFiles(baseline).size} exact backports verified${productCommit ? `, current tree also unchanged from ${productCommit}` : ''}`,
  )
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main()
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}
