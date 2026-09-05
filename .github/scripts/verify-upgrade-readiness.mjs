#!/usr/bin/env node

import { execFileSync, spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {
  changedPaths,
  changedPathsBetween,
  evaluatePreservedPaths,
  evaluateProductReference,
  inspectRecordedUpstreamSync,
  validateBaseline,
} from './verify-upstream-boundary.mjs'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const stableReleasePattern = /^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/u

function git(args) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trimEnd() // Preserve the leading XY status columns of git porcelain.
}

function matchesPath(path, rule) {
  return rule.endsWith('/') ? path.startsWith(rule) : path === rule
}

export function parseArguments(argv) {
  const options = { recordedSync: false, worktree: false }
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]
    if (argument === '--recorded-sync') {
      options.recordedSync = true
      continue
    }
    if (argument === '--worktree') {
      options.worktree = true
      continue
    }
    if (argument === '--old-ref' || argument === '--new-ref') {
      const value = argv[index + 1]
      if (!value || value.startsWith('--')) throw new Error(`${argument} requires a value`)
      options[argument === '--old-ref' ? 'oldRef' : 'newRef'] = value
      index += 1
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

  if (options.recordedSync) {
    if (options.oldRef || options.newRef || options.productRef) {
      throw new Error('--recorded-sync cannot be combined with explicit release or product refs')
    }
    return options
  }

  if (!stableReleasePattern.test(options.oldRef || '')) {
    throw new Error('--old-ref must be a stable vMAJOR.MINOR.PATCH tag')
  }
  if (!stableReleasePattern.test(options.newRef || '')) {
    throw new Error('--new-ref must be a stable vMAJOR.MINOR.PATCH tag')
  }
  if (options.oldRef === options.newRef) throw new Error('old and new release tags must differ')
  if (!options.productRef) {
    throw new Error('--product-ref is required to protect product overlays during an upstream sync')
  }
  return options
}

export function classifyUIPaths(paths, manifest) {
  const unique = [...new Set(paths)].sort()
  const compatibility = unique.filter((path) =>
    manifest.compatibility_paths.some((rule) => matchesPath(path, rule)),
  )
  const protectedPaths = unique.filter(
    (path) =>
      manifest.protected_paths.some((rule) => matchesPath(path, rule)) &&
      !manifest.compatibility_paths.some((rule) => matchesPath(path, rule)),
  )
  return { compatibility, protected: protectedPaths }
}

export function evaluateProductChangeProtection(paths, baseline, uiManifest) {
  const preserved = new Set(baseline.preserve_on_upstream_sync)
  const legacyHotfix = new Set(baseline.legacy_hotfixes.flatMap((hotfix) => hotfix.paths))
  const approvedBackport = new Set(
    baseline.approved_backports.flatMap((backport) => Object.keys(backport.files)),
  )
  const result = {
    preserved: [],
    approved_ui: [],
    legacy_hotfix: [],
    approved_backport: [],
    unprotected: [],
  }

  for (const path of [...new Set(paths)].sort()) {
    if (preserved.has(path)) {
      result.preserved.push(path)
      continue
    }
    if (legacyHotfix.has(path)) {
      result.legacy_hotfix.push(path)
      continue
    }
    if (approvedBackport.has(path)) {
      result.approved_backport.push(path)
      continue
    }
    const uiProtected = uiManifest.protected_paths.some((rule) => matchesPath(path, rule))
    const uiCompatibility = uiManifest.compatibility_paths.some((rule) => matchesPath(path, rule))
    if (uiProtected && !uiCompatibility) {
      result.approved_ui.push(path)
      continue
    }
    result.unprotected.push(path)
  }
  return result
}

export function evaluateDirtyPreflight(statusLines) {
  const paths = statusLines
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => line.slice(3).trim())
  return paths.length === 0
    ? []
    : [`worktree must be isolated before upgrade verification: ${paths.sort().join(', ')}`]
}

export function evaluatePinnedRelease({ newRef, newCommit, baseline }) {
  const violations = []
  if (newRef !== baseline.release) {
    violations.push(`new release ${newRef} does not match baseline release ${baseline.release}`)
  }
  if (newCommit !== baseline.commit) {
    violations.push(`new release ${newRef} peels to ${newCommit}, expected ${baseline.commit}`)
  }
  return violations
}

export function evaluateRecordedPreviousRelease({ oldRef, oldCommit, baseline, recordedSync }) {
  if (!recordedSync || oldCommit === baseline.upstream_sync.previous_commit) return []
  return [
    `previous release ${oldRef} peels to ${oldCommit}, expected ${baseline.upstream_sync.previous_commit}`,
  ]
}

export function evaluateHotfixAudit(hotfixes, upstreamChangedPaths, matchesUpstreamPaths = []) {
  const changed = new Set(upstreamChangedPaths)
  const matchesUpstream = new Set(matchesUpstreamPaths)
  return hotfixes.map((hotfix) => {
    const overlaps = hotfix.paths.filter((path) => changed.has(path)).sort()
    const exitCandidates = hotfix.paths.filter((path) => matchesUpstream.has(path)).sort()
    return {
      name: hotfix.name,
      status: exitCandidates.length > 0 ? 'exit-required' : overlaps.length > 0 ? 'reviewed-overlap' : 'retained',
      overlaps,
      exit_candidates: exitCandidates,
    }
  })
}

function runAdapter(name, command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  return {
    name,
    ok: result.status === 0,
    output: [result.stdout, result.stderr]
      .filter(Boolean)
      .join('\n')
      .trim(),
  }
}

export function upstreamComparisonArgs(newCommit, path, includeWorktree) {
  return includeWorktree
    ? ['diff', '--quiet', newCommit, '--', path]
    : ['diff', '--quiet', newCommit, 'HEAD', '--', path]
}

function matchingUpstreamHotfixPaths(hotfixes, newCommit, includeWorktree) {
  return hotfixes
    .flatMap((hotfix) => hotfix.paths)
    .filter((path) => {
      const result = spawnSync('git', upstreamComparisonArgs(newCommit, path, includeWorktree), {
        cwd: repoRoot,
        stdio: 'ignore',
      })
      return result.status === 0
    })
}

function printResult(result, stream = process.stdout) {
  stream.write(`${JSON.stringify(result, null, 2)}\n`)
}

export function main(argv = process.argv.slice(2)) {
  const options = parseArguments(argv)
  const baseline = validateBaseline(
    JSON.parse(readFileSync(resolve(repoRoot, '.github/upstream-baseline.json'), 'utf8')),
  )
  const uiManifest = JSON.parse(readFileSync(resolve(repoRoot, '.github/scripts/ui-baseline.json'), 'utf8'))
  const oldRef = options.recordedSync ? baseline.upstream_sync.previous_release : options.oldRef
  const newRef = options.recordedSync ? baseline.release : options.newRef
  const productRef = options.recordedSync
    ? baseline.upstream_sync.product_commit
    : options.productRef
  const oldCommit = git(['rev-parse', '--verify', `${oldRef}^{commit}`])
  const newCommit = git(['rev-parse', '--verify', `${newRef}^{commit}`])
  const productCommit = git(['rev-parse', '--verify', `${productRef}^{commit}`])
  const headCommit = git(['rev-parse', '--verify', 'HEAD^{commit}'])
  const targetCommit = options.recordedSync ? baseline.upstream_sync.merge_commit : headCommit
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', productCommit, targetCommit], {
      cwd: repoRoot,
      stdio: 'ignore',
    })
  } catch {
    throw new Error(`product ref ${productCommit} is not an ancestor of target ${targetCommit}`)
  }
  const changedOutput = git([
    'diff',
    '--no-renames',
    '--name-only',
    '--diff-filter=ACDMRTUXB',
    oldCommit,
    newCommit,
    '--',
  ])
  const upstreamChangedPaths = changedOutput ? changedOutput.split(/\r?\n/u).filter(Boolean) : []
  const uiChanges = classifyUIPaths(upstreamChangedPaths, uiManifest)
  const statusOutput = git(['status', '--porcelain=v1', '--untracked-files=all'])
  const preflightViolations = evaluateDirtyPreflight(
    statusOutput ? statusOutput.split(/\r?\n/u) : [],
  )
  const pinnedViolations = evaluatePinnedRelease({
    newRef,
    newCommit,
    baseline,
  })
  const previousReleaseViolations = evaluateRecordedPreviousRelease({
    oldRef,
    oldCommit,
    baseline,
    recordedSync: options.recordedSync,
  })
  const hotfixAudit = evaluateHotfixAudit(
    baseline.legacy_hotfixes,
    upstreamChangedPaths,
    matchingUpstreamHotfixPaths(baseline.legacy_hotfixes, newCommit, options.worktree),
  )
  const exitCandidates = hotfixAudit.flatMap((hotfix) => hotfix.exit_candidates)
  const productReferenceViolations = evaluateProductReference(productCommit, headCommit)
  const productChangePaths = changedPaths(baseline.commit, options.worktree, repoRoot)
  const productChangeProtection = evaluateProductChangeProtection(
    productChangePaths,
    baseline,
    uiManifest,
  )
  const preservedChanges = options.recordedSync
    ? changedPathsBetween(productCommit, targetCommit, repoRoot)
    : changedPaths(productCommit, options.worktree, repoRoot)
  const recordedSyncViolations = options.recordedSync
    ? inspectRecordedUpstreamSync(baseline, headCommit, repoRoot)
    : []
  const preservedViolations = options.recordedSync
    ? []
    : evaluatePreservedPaths(preservedChanges, baseline)
  const worktreeArgs = options.worktree ? ['--worktree'] : []
  const upstreamAdapterArgs = options.recordedSync
    ? worktreeArgs
    : [...worktreeArgs, '--product-ref', productCommit]
  const adapters = [
    runAdapter(
      'upstream-boundary',
      process.execPath,
      ['.github/scripts/verify-upstream-boundary.mjs', ...upstreamAdapterArgs],
    ),
    runAdapter(
      'ui-boundary',
      process.execPath,
      ['.github/scripts/verify-ui-boundary.mjs', ...worktreeArgs],
    ),
    runAdapter('recovered-console-contract', 'sh', ['deploy/zero-one/test-routing.sh']),
  ]
  const violations = [
    ...preflightViolations,
    ...pinnedViolations,
    ...previousReleaseViolations,
    ...productReferenceViolations,
    ...recordedSyncViolations,
    ...preservedViolations,
    ...productChangeProtection.unprotected.map(
      (path) => `product change lacks a retention policy: ${path}`,
    ),
    ...exitCandidates.map((path) => `legacy hotfix matches upstream and must exit: ${path}`),
    ...adapters.filter((adapter) => !adapter.ok).map((adapter) => `${adapter.name} failed`),
  ]
  const result = {
    verdict: violations.length === 0 ? 'PASS' : 'FAIL',
    mode: options.recordedSync ? 'recorded-sync' : 'explicit-sync',
    releases: {
      old_ref: oldRef,
      old_commit: oldCommit,
      new_ref: newRef,
      new_commit: newCommit,
      product_ref: productRef,
      product_commit: productCommit,
      target_commit: targetCommit,
      head_commit: headCommit,
    },
    worktree: {
      included_in_adapters: options.worktree,
      clean: preflightViolations.length === 0,
    },
    upstream_changes: {
      total: upstreamChangedPaths.length,
      protected_ui: uiChanges.protected,
      compatibility_ui: uiChanges.compatibility,
    },
    preserve_on_upstream_sync: {
      registered: baseline.preserve_on_upstream_sync.length,
      changed: baseline.preserve_on_upstream_sync.filter((path) =>
        preservedChanges.includes(path),
      ),
    },
    product_change_protection: productChangeProtection,
    legacy_hotfixes: hotfixAudit,
    adapters,
    violations,
  }
  printResult(result, violations.length === 0 ? process.stdout : process.stderr)
  if (violations.length > 0) process.exitCode = 1
  return result
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main()
  } catch (error) {
    printResult(
      {
        verdict: 'FAIL',
        violations: [error instanceof Error ? error.message : String(error)],
      },
      process.stderr,
    )
    process.exitCode = 1
  }
}
