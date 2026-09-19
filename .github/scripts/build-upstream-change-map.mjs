#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const baselinePath = '.github/upstream-baseline.json'
const baseline = JSON.parse(readFileSync(baselinePath, 'utf8'))
const outputPath = `docs/upgrades/${baseline.release}-change-map.json`
const { previous_commit: previous, product_commit: product, merge_commit: merge } = baseline.upstream_sync
const upstream = baseline.commit

function git(args, { allowFailure = false } = {}) {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', allowFailure ? 'ignore' : 'inherit'] }).trim()
  } catch (error) {
    if (allowFailure) return null
    throw error
  }
}

function blob(commit, path) {
  return git(['rev-parse', `${commit}:${path}`], { allowFailure: true })
}

const paths = git(['diff', '--name-only', previous, upstream]).split('\n').filter(Boolean).sort()
const changes = paths.map((path) => {
  const upstreamBlob = blob(upstream, path)
  const productBlob = blob(product, path)
  const mergeBlob = blob(merge, path)
  let decision
  let reason
  if (path.startsWith('frontend/')) {
    decision = 'defer-production-ui'
    reason = 'source-compatible; production snapshot remains separately approved'
  } else if (mergeBlob === upstreamBlob) {
    decision = 'adopt'
    reason = 'recorded merge matches upstream blob'
  } else if (mergeBlob === productBlob) {
    decision = 'preserve'
    reason = 'recorded merge retains the product contract blob'
  } else {
    decision = 'adapt'
    reason = 'recorded merge combines upstream behavior with product contracts'
  }
  return { path, decision, reason }
})

const summary = Object.fromEntries(
  [...new Set(changes.map(({ decision }) => decision))]
    .sort()
    .map((decision) => [decision, changes.filter((change) => change.decision === decision).length]),
)

const document = {
  schema_version: 1,
  previous_upstream: previous,
  upstream,
  product,
  merge,
  path_count: changes.length,
  summary,
  rejected_policy_changes: [
    'revive retired product features',
    'derive historical account cost from mutable local rates or later probes',
    'replace approved production UI snapshots without approval',
    'prune Docker volumes, bind mounts, Redis, PostgreSQL, environment files, or release locks',
  ],
  changes,
}

writeFileSync(outputPath, `${JSON.stringify(document, null, 2)}\n`)
