// 二开保护验收：仅在本脚本新建的隔离数据库中写测试账单，走真实 API 和浏览器。
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { randomBytes, randomUUID } from 'node:crypto'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const require = createRequire(resolve(root, 'visual-regression/package.json'))
const { chromium } = require('@playwright/test')
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const pause = ms => new Promise(done => setTimeout(done, ms))
const [backendImage, edgeImage] = process.argv.slice(2)
assert.ok(backendImage && edgeImage, '请提供本次 Backend 与 Edge 镜像')
const prefix = `zero-one-finance-${randomUUID().slice(0, 8)}`
const created = []
let browser
let networkCreated = false
const names = { postgres: `${prefix}-postgres`, redis: `${prefix}-redis`, backend: `${prefix}-backend`, edge: `${prefix}-edge`, browser: `${prefix}-browser` }
const run = (name, image, args, command = []) => { docker('run', '-d', '--name', name, '--label', 'verification=zero-one-dashboard-finance', ...args, image, ...command); created.push(name) }
try {
  docker('network', 'create', prefix); networkCreated = true
  const password = randomBytes(20).toString('hex')
  const email = 'admin@finance.example.test'
  run(names.postgres, 'postgres:18.1-alpine3.23', ['--network', prefix, '--network-alias', 'postgres', '-e', 'POSTGRES_USER=verification', '-e', 'POSTGRES_DB=verification', '-e', `POSTGRES_PASSWORD=${password}`])
  run(names.redis, 'redis:8.4-alpine', ['--network', prefix, '--network-alias', 'redis'])
  for (let i = 0; ; i++) { try { docker('exec', names.postgres, 'pg_isready', '-U', 'verification'); break } catch { assert.ok(i < 60); await pause(500) } }
  const env = { AUTO_SETUP: 'true', SERVER_HOST: '0.0.0.0', SERVER_PORT: '8080', SERVER_MODE: 'release', DATABASE_HOST: 'postgres', DATABASE_PORT: '5432', DATABASE_USER: 'verification', DATABASE_PASSWORD: password, DATABASE_DBNAME: 'verification', DATABASE_SSLMODE: 'disable', REDIS_HOST: 'redis', REDIS_PORT: '6379', ADMIN_EMAIL: email, ADMIN_PASSWORD: password, JWT_SECRET: randomBytes(32).toString('hex'), TOTP_ENCRYPTION_KEY: randomBytes(32).toString('hex'), TZ: 'Asia/Shanghai', DASHBOARD_AGG_ENABLED: 'false' }
  run(names.backend, backendImage, ['--network', prefix, '--network-alias', 'sub2api', ...Object.entries(env).flatMap(([k, v]) => ['-e', `${k}=${v}`])])
  run(names.edge, edgeImage, ['--network', prefix, '-p', '127.0.0.1::80', '-v', `${root}/deploy/zero-one/Caddyfile.preview:/etc/caddy/Caddyfile:ro`, '-v', `${root}/deploy/zero-one/recovered-frontend/console:/srv/console:ro`])
  const port = JSON.parse(docker('inspect', names.edge))[0].NetworkSettings.Ports['80/tcp'][0].HostPort
  const origin = `http://127.0.0.1:${port}`
  for (let i = 0; ; i++) { try { if ((await fetch(`${origin}/health`, { signal: AbortSignal.timeout(1000) })).ok) break } catch {} assert.ok(i < 120, '隔离后台未就绪'); await pause(500) }
  async function api(path, token, body) {
    const response = await fetch(`${origin}/api/v1${path}`, { method: body ? 'POST' : 'GET', signal: AbortSignal.timeout(20000), headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: body ? JSON.stringify(body) : undefined })
    const payload = await response.json()
    assert.equal(response.status, 200, `${path}: HTTP ${response.status}`)
    assert.equal(payload.code, 0, `${path}: API 错误`)
    return payload.data
  }
  const auth = await api('/auth/login', null, { email, password })
  const compliance = await api('/admin/compliance', auth.access_token)
  if (compliance.required) await api('/admin/compliance/accept', auth.access_token, { phrase: compliance.ack_phrase_zh, language: 'zh' })
  const sql = text => execFileSync('docker', ['exec', '-i', names.postgres, 'psql', '-U', 'verification', '-d', 'verification', '-v', 'ON_ERROR_STOP=1', '-At'], { input: text, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] })
  sql(`
    INSERT INTO users (id,email,password_hash,role,username) SELECT 900001,'customer@finance.example.test',password_hash,'user','验收客户' FROM users LIMIT 1;
    INSERT INTO groups (id,name,platform,rate_multiplier) VALUES (900001,'验收分组','openai',9);
    INSERT INTO accounts (id,name,platform,type,credentials,extra,rate_multiplier,schedulable) VALUES (900001,'验收号池','openai','apikey','{}','{}',8,false);
    INSERT INTO api_keys (id,user_id,key,name,group_id) VALUES (900001,900001,'finance-fixture-key','验收密钥',900001);
    INSERT INTO usage_logs (user_id,api_key_id,account_id,group_id,request_id,model,input_tokens,output_tokens,cache_creation_tokens,cache_read_tokens,total_cost,actual_cost,account_stats_cost,rate_multiplier,account_rate_multiplier,created_at) VALUES
      (900001,900001,900001,900001,'finance-today-early','test-model',100,30,5,20,10,5,10,0.5,0.2,TIMESTAMPTZ '2026-09-04 00:30:00+08'),
      (900001,900001,900001,900001,'finance-today','test-model',200,50,0,0,20,6,30,0.3,0.1,TIMESTAMPTZ '2026-09-04 12:00:00+08'),
      (900001,900001,900001,900001,'finance-old','test-model',300,10,0,0,100,40,60,0.4,0.25,TIMESTAMPTZ '2026-09-04 12:00:00+08'-interval '120 days');
  `)
  const { dateInTimezone } = await import('./recovered-frontend/console/assets/dashboard-finance-v1/data.js')
  const today = dateInTimezone(new Date('2026-09-04T12:00:00+08:00'), 'Asia/Shanghai')
  const day = await api(`/admin/usage/stats?start_date=${today}&end_date=${today}&timezone=Asia%2FShanghai&nocache=true`, auth.access_token)
  assert.equal(day.total_actual_cost, 11)
  assert.equal(day.total_account_cost, 5)
  assert.equal(day.total_tokens, 405)
  const total = await api(`/admin/usage/stats?start_date=1970-01-01&end_date=${today}&timezone=Asia%2FShanghai&nocache=true`, auth.access_token)
  assert.equal(total.total_actual_cost, 51, '总计必须包括 120 天前的账单')
  assert.equal(total.total_account_cost, 20)
  // 使用与视觉门禁相同版本的浏览器镜像，不依赖宿主机已安装 Chromium。
  run(names.browser, 'mcr.microsoft.com/playwright:v1.55.1-noble', [
    '--platform', process.arch === 'arm64' ? 'linux/arm64' : 'linux/amd64',
    '--cpus', '2', '--network', prefix, '-p', '127.0.0.1::3000', '-v', `${root}:/workspace:ro`,
  ], ['node', '-e', "require('/workspace/visual-regression/node_modules/playwright').chromium.launchServer({headless:true,host:'0.0.0.0',port:3000}).then(s=>console.log(s.wsEndpoint()))"])
  let endpoint
  for (let i = 0; ; i++) {
    const match = docker('logs', names.browser).match(/ws:\/\/[^\s]+/)
    if (match) { endpoint = new URL(match[0]); break }
    assert.ok(i < 60, '验收浏览器未就绪'); await pause(500)
  }
  const browserPort = JSON.parse(docker('inspect', names.browser))[0].NetworkSettings.Ports['3000/tcp'][0].HostPort
  browser = await chromium.connect(`ws://127.0.0.1:${browserPort}${endpoint.pathname}`)
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, timezoneId: 'Asia/Shanghai' })
  await page.clock.install({ time: new Date('2026-09-04T12:00:00+08:00') })
  await page.addInitScript(({ token, user }) => { localStorage.setItem('auth_token', token); localStorage.setItem('auth_user', JSON.stringify(user)); localStorage.setItem('sub2api_locale', 'zh'); localStorage.setItem('admin_guide_1_admin_v4_interactive', 'true') }, { token: auth.access_token, user: auth.user })
  const { expect } = require('@playwright/test')
  const errors = []; page.on('pageerror', e => errors.push(e.message))
  await page.goto(`http://${names.edge}/admin/dashboard`)
  const cards = page.locator('.dashboard-finance-value')
  await expect(cards).toHaveText(['$11.0000', '$6.0000', '$51.0000', '$31.0000'], { timeout: 30000 })
  await expect(page.locator('.dashboard-finance-updated')).toContainText('每 30 秒自动刷新')
  sql(`INSERT INTO usage_logs (user_id,api_key_id,account_id,group_id,request_id,model,total_cost,actual_cost,account_rate_multiplier,created_at) VALUES (900001,900001,900001,900001,'finance-live','test-model',2,0.5,0.2,TIMESTAMPTZ '2026-09-04 12:00:01+08'); UPDATE groups SET rate_multiplier=11 WHERE id=900001; UPDATE accounts SET rate_multiplier=12 WHERE id=900001;`)
  await page.clock.fastForward(31000)
  await expect(cards).toHaveText(['$11.5000', '$6.1000', '$51.5000', '$31.1000'], { timeout: 30000 })
  assert.deepEqual(errors, [])
  console.log('真实 API / PostgreSQL / 浏览器验收通过：跨 UTC 午夜、120 天历史账单、历史倍率、账号成本基数、自动刷新后新增账单均正确。')
} finally {
  await browser?.close()
  for (const name of created.reverse()) { try { docker('rm', '-f', '-v', name) } catch {} }
  if (networkCreated) { try { docker('network', 'rm', prefix) } catch {} }
}
