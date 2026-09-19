#!/usr/bin/env node
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const repositoryRoot = resolve(fileURLToPath(new URL('../..', import.meta.url)))
const targets = {
  'cn-provider-admin': 'vite.cn-provider-admin.config.ts',
  'online-image': 'vite.online-image.config.ts',
  'password-recovery': 'vite.password-recovery.config.mjs',
}

const target = process.argv[2]
const config = targets[target]
if (!config) {
  process.stderr.write(`usage: ${process.argv[1]} <${Object.keys(targets).join('|')}>\n`)
  process.exit(2)
}

const outputRoot = mkdtempSync(resolve(tmpdir(), `zero-one-${target}-`))
try {
  const result = spawnSync(
    'pnpm',
    ['--dir', 'frontend', 'exec', 'vite', 'build', '--config', config],
    {
      cwd: repositoryRoot,
      env: { ...process.env, ZERO_ONE_FROZEN_BUILD_ROOT: outputRoot },
      stdio: 'inherit',
    },
  )
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
  process.stdout.write(`Frozen Console source compatibility OK (${target}); repository assets unchanged\n`)
} finally {
  rmSync(outputRoot, { recursive: true, force: true })
}
