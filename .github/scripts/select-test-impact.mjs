import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const defaultPolicyURL = new URL('../test-impact-policy.json', import.meta.url)
const fullImpact = Object.freeze({
  landing: true,
  console: true,
  console_asset_scopes: 'none',
  backend_scope: 'full',
  deployment: true,
  shell: true,
  lint: true,
  visual_scope: 'full',
  backend_security: true,
  frontend_security: true,
})

function globRegex(pattern) {
  let output = '^'
  for (let index = 0; index < pattern.length; index += 1) {
    const char = pattern[index]
    if (char === '*' && pattern[index + 1] === '*') {
      index += 1
      if (pattern[index + 1] === '/') {
        index += 1
        output += '(?:.*/)?'
      } else {
        output += '.*'
      }
    } else if (char === '*') {
      output += '[^/]*'
    } else if (char === '?') {
      output += '[^/]'
    } else {
      output += char.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    }
  }
  return new RegExp(`${output}$`)
}

function matchesAny(path, patterns) {
  return patterns.some((pattern) => globRegex(pattern).test(path))
}

function mergeImpact(target, next, backendScopes, visualScopes, consoleAssetScopes) {
  for (const key of ['landing', 'console', 'deployment', 'shell', 'lint', 'backend_security', 'frontend_security']) {
    if (next[key]) target[key] = true
  }
  if (next.backend_scope && next.backend_scope !== 'none') backendScopes.add(next.backend_scope)
  if (next.visual_scope && next.visual_scope !== 'none') visualScopes.add(next.visual_scope)
  for (const scope of next.console_asset_scopes ?? []) consoleAssetScopes.add(scope)
}

export function validatePolicy(policy) {
  if (policy?.schema_version !== 1 || !Array.isArray(policy.rules) || !Array.isArray(policy.always_full)) {
    throw new Error('invalid test-impact policy schema')
  }
  for (const rule of policy.rules) {
    if (!Array.isArray(rule.patterns) || rule.patterns.length === 0 || typeof rule.impact !== 'object') {
      throw new Error('invalid test-impact rule')
    }
    for (const pattern of rule.patterns) globRegex(pattern)
  }
  return policy
}

export function selectTestImpact(paths, policyInput) {
  const policy = validatePolicy(policyInput)
  const uniquePaths = [...new Set(paths.map((path) => path.trim()).filter(Boolean))].sort()
  const forceFull = uniquePaths.length === 0 || uniquePaths.some((path) => matchesAny(path, policy.always_full))
  const impact = forceFull ? { ...fullImpact } : {
    landing: false,
    console: false,
    console_asset_scopes: 'none',
    backend_scope: 'none',
    deployment: false,
    shell: false,
    lint: false,
    visual_scope: 'none',
    backend_security: false,
    frontend_security: false,
  }
  const backendScopes = new Set()
  const visualScopes = new Set()
  const consoleAssetScopes = new Set()
  const unknown = []
  for (const path of uniquePaths) {
    if (matchesAny(path, policy.always_full)) continue
    const rule = policy.rules.find((candidate) => matchesAny(path, candidate.patterns))
    if (!rule) {
      unknown.push(path)
      continue
    }
    mergeImpact(impact, rule.impact, backendScopes, visualScopes, consoleAssetScopes)
  }
  const assetScope = consoleAssetScopes.has('all')
    ? 'all'
    : [...consoleAssetScopes].sort().join(',') || 'none'
  if (unknown.length > 0) return { ...fullImpact, console_asset_scopes: assetScope, reason: 'unknown-path', paths: uniquePaths, unknown }

  if (!forceFull) {
    if (backendScopes.size === 1) {
      impact.backend_scope = [...backendScopes][0]
    } else if (backendScopes.size > 1) {
      impact.backend_scope = 'full'
    }
    if (visualScopes.has('full') || visualScopes.size > 1) {
      impact.visual_scope = 'full'
    } else if (visualScopes.size === 1) {
      impact.visual_scope = [...visualScopes][0]
    }
  }
  if (impact.backend_scope !== 'none') impact.lint = true
  impact.console_asset_scopes = assetScope
  return {
    ...impact,
    reason: forceFull ? (uniquePaths.length === 0 ? 'missing-change-history' : 'test-policy-change') : 'matched-policy',
    paths: uniquePaths,
  }
}

export function parseNameStatus(source) {
  const paths = []
  for (const line of source.split('\n')) {
    if (!line.trim()) continue
    const fields = line.split('\t')
    if (/^[RC]/.test(fields[0])) {
      if (fields.length !== 3) throw new Error(`invalid rename/copy diff row: ${line}`)
      paths.push(fields[1], fields[2])
    } else {
      if (fields.length !== 2) throw new Error(`invalid diff row: ${line}`)
      paths.push(fields[1])
    }
  }
  return paths
}

export function changedPaths(base, head, mode = 'push') {
  if (!/^[0-9a-f]{40}$/.test(base) || !/^[0-9a-f]{40}$/.test(head) || /^0+$/.test(base)) return []
  const range = mode === 'pull_request' ? `${base}...${head}` : `${base}..${head}`
  const output = execFileSync('git', ['diff', '--name-status', '--find-renames', range], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  return parseNameStatus(output)
}

export function workingTreePaths() {
  const changed = execFileSync('git', ['diff', '--name-status', '--find-renames', 'HEAD'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  const untracked = execFileSync('git', ['ls-files', '--others', '--exclude-standard'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  return [...parseNameStatus(changed), ...untracked.split('\n').filter(Boolean)]
}

function parseArgs(argv) {
  const options = {}
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index]
    if (!key.startsWith('--')) throw new Error(`unexpected argument: ${key}`)
    if (key === '--all') {
      options.all = true
      continue
    }
    const value = argv[index + 1]
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${key}`)
    options[key.slice(2)] = value
    index += 1
  }
  return options
}

export function formatGitHubOutputs(impact) {
	const { paths = [], unknown = [], ...decision } = impact
	const evidence = {
		...decision,
		path_count: paths.length,
		unknown_paths: unknown,
	}
  const values = {
    landing: impact.landing,
    console: impact.console,
    console_asset_scopes: impact.console_asset_scopes,
    backend_scope: impact.backend_scope,
    deployment: impact.deployment,
    shell: impact.shell,
    lint: impact.lint,
    visual_scope: impact.visual_scope,
    backend_security: impact.backend_security,
    frontend_security: impact.frontend_security,
    impact_json: JSON.stringify(evidence),
  }
  return Object.entries(values).map(([key, value]) => `${key}=${value}`).join('\n')
}

export function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)
  const policy = validatePolicy(JSON.parse(readFileSync(options.policy ?? defaultPolicyURL, 'utf8')))
  const paths = options.paths
    ? options.paths.split(',')
    : options.all
      ? []
      : changedPaths(options.base ?? '', options.head ?? '', options.mode ?? 'push')
  const impact = options.all ? { ...fullImpact, reason: 'explicit-full-run', paths: [] } : selectTestImpact(paths, policy)
  process.stdout.write(`${formatGitHubOutputs(impact)}\n`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
