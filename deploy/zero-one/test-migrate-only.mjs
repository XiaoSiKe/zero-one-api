import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { randomBytes, randomUUID } from 'node:crypto'

const [image] = process.argv.slice(2)
assert.ok(image, 'Provide the candidate Backend image')
const prefix = `zero-one-migrations-${randomUUID().slice(0, 8)}`
const postgres = `${prefix}-postgres`
const password = randomBytes(24).toString('hex')
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
let networkCreated = false
let databaseCreated = false
try {
  docker('network', 'create', '--internal', prefix)
  networkCreated = true
  docker('run', '-d', '--name', postgres, '--label', 'verification=zero-one-migrations', '--network', prefix,
    '--network-alias', 'postgres', '-e', 'POSTGRES_USER=verification', '-e', 'POSTGRES_DB=verification',
    '-e', `POSTGRES_PASSWORD=${password}`, 'postgres:18.1-alpine3.23')
  databaseCreated = true
  for (let attempt = 0; ; attempt++) {
    try { docker('exec', postgres, 'pg_isready', '-U', 'verification'); break }
    catch { assert.ok(attempt < 60, 'PostgreSQL did not become ready'); await new Promise(r => setTimeout(r, 500)) }
  }
  const sql = query => docker('exec', postgres, 'psql', '-X', '-qAt', '-U', 'verification', '-d', 'verification', '-v', 'ON_ERROR_STOP=1', '-c', query)
  const env = { AUTO_SETUP: 'true', DATABASE_HOST: 'postgres', DATABASE_PORT: '5432', DATABASE_USER: 'verification',
    DATABASE_PASSWORD: password, DATABASE_DBNAME: 'verification', DATABASE_SSLMODE: 'disable', REDIS_HOST: 'unavailable', TZ: 'UTC' }
  // No Redis or JWT/TOTP/admin credentials are supplied. Migration-only must not
  // run setup, bootstrap secrets, background jobs or the HTTP listener.
  const args = ['run', '--rm', '--network', prefix, '--read-only', '--tmpfs', '/tmp',
    ...Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`]), image]
  docker(...args, '--migrate-only')
  const expected = ['232_add_usage_log_upstream_request_id.sql', '233_add_usage_log_upstream_request_id_index_notx.sql',
    '234_channel_max_reasoning_effort_multiplier.sql', '234_group_codex_models_manifest_config.sql', '234_upstream_declared_usage_cost.sql']
  for (const filename of expected) assert.equal(sql(`SELECT count(*) FROM schema_migrations WHERE filename='${filename}'`), '1')
  assert.equal(sql('SELECT count(*) FROM users'), '0', 'Migration-only must not create an administrator')
  assert.equal(sql("SELECT count(*) FROM settings WHERE key ILIKE '%secret%' OR key ILIKE '%encryption%'"), '0', 'Migration-only must not generate secrets')
  sql("INSERT INTO users (email,password_hash,role,status,balance,concurrency) VALUES ('migration@example.test','hash','user','active',123.456789,3)")
  const before = sql("SELECT md5(jsonb_agg(to_jsonb(u) ORDER BY id)::text) FROM users u")
  const ledger = sql("SELECT md5(jsonb_agg(to_jsonb(m) ORDER BY filename)::text) FROM schema_migrations m")
  docker(...args, '--migrate-only')
  assert.equal(sql("SELECT md5(jsonb_agg(to_jsonb(u) ORDER BY id)::text) FROM users u"), before)
  assert.equal(sql("SELECT md5(jsonb_agg(to_jsonb(m) ORDER BY filename)::text) FROM schema_migrations m"), ledger)
  const conflicting = spawnSync('docker', [...args, '--migrate-only', '--setup'], { encoding: 'utf8', timeout: 30000 })
  assert.equal(conflicting.status, 1)
  assert.match(`${conflicting.stdout}\n${conflicting.stderr}`, /cannot be combined/)
  // A checksum failure must remain fatal without rewriting business rows.
  sql("UPDATE schema_migrations SET checksum=repeat('0',64) WHERE filename='234_group_codex_models_manifest_config.sql'")
  const invalid = spawnSync('docker', [...args, '--migrate-only'], { encoding: 'utf8', timeout: 30000 })
  assert.equal(invalid.status, 1)
  assert.match(`${invalid.stdout}\n${invalid.stderr}`, /checksum mismatch/)
  assert.equal(sql("SELECT md5(jsonb_agg(to_jsonb(u) ORDER BY id)::text) FROM users u"), before)
  console.log('Migration-only passed: isolated network, no setup/services, full filename identity, repeatability and fail-closed checksums.')
} finally {
  if (databaseCreated) docker('rm', '-f', '-v', postgres)
  if (networkCreated) docker('network', 'rm', prefix)
}
