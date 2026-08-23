import type { Page, Route } from '@playwright/test'

const observedAt = '2026-08-16T12:00:00+08:00'

export const adminUser = {
  id: 1,
  username: 'zero-one-admin',
  email: 'admin@01yapi.test',
  role: 'admin',
  balance: 1280.5,
  concurrency: 20,
  status: 'active',
  allowed_groups: null,
  balance_notify_enabled: false,
  balance_notify_threshold: null,
  balance_notify_extra_emails: [],
  created_at: '2026-01-01T00:00:00+08:00',
  updated_at: observedAt,
  run_mode: 'standard',
}

export function publicSettings(mode: 'v1' | 'v2' = 'v2') {
  return {
    registration_enabled: true,
    email_verify_enabled: false,
    force_email_on_third_party_signup: false,
    registration_email_suffix_whitelist: [],
    promo_code_enabled: false,
    password_reset_enabled: true,
    invitation_code_enabled: false,
    turnstile_enabled: false,
    turnstile_site_key: '',
    site_name: '零一 API',
    site_logo: '',
    site_subtitle: '从零到一，连接每一次模型调用。',
    api_base_url: 'https://api.01yapi.com',
    contact_info: '',
    doc_url: 'https://docs.01yapi.test/start',
    home_content: '',
    compact_home_enabled: false,
    hide_ccs_import_button: false,
    payment_enabled: false,
    risk_control_enabled: false,
    table_default_page_size: 20,
    table_page_size_options: [10, 20, 50, 100],
    custom_menu_items: [],
    custom_endpoints: [],
    linuxdo_oauth_enabled: false,
    wechat_oauth_enabled: false,
    oidc_oauth_enabled: false,
    oidc_oauth_provider_name: 'OIDC',
    github_oauth_enabled: false,
    google_oauth_enabled: false,
    backend_mode_enabled: false,
    version: '0.1.177',
    server_utc_offset: '+08:00',
    balance_low_notify_enabled: false,
    account_quota_notify_enabled: false,
    balance_low_notify_threshold: 0,
    channel_monitor_enabled: true,
    public_channel_status_enabled: true,
    channel_monitor_mode: mode,
    channel_monitor_default_interval_seconds: 300,
    channel_monitor_hide_throughput: false,
    available_channels_enabled: false,
    model_plaza_enabled: true,
    model_plaza_require_auth: false,
    service_quota_enabled: false,
    affiliate_enabled: false,
    landing_notice_enabled: true,
    landing_notice_text: '零一 API 已完成稳定基线升级，服务正常。',
    landing_notice_url: '/#status',
  }
}

const announcement = {
  id: 42,
  title: '稳定版本发布公告',
  content: '零一 API 已完成例行维护。公开接口与控制台均已恢复正常。',
  status: 'active',
  notify_mode: 'silent',
  public_visible: true,
  starts_at: null,
  ends_at: null,
  targeting: { any_of: [] },
  created_at: '2026-08-16T09:00:00+08:00',
  updated_at: observedAt,
}

const coverage = {
  requested_start: '2026-08-16T10:30:00+08:00',
  requested_end: observedAt,
  coverage_start: '2026-08-16T10:30:00+08:00',
  data_through: observedAt,
  computed_at: observedAt,
  aggregation_lag_seconds: 12,
  coverage_complete: true,
  bucket_seconds: 300,
}

const metric = {
  success_requests: 982,
  error_requests: 18,
  request_count: 1000,
  token_count: 456789,
  rpm: 12.4,
  tpm: 6080,
  error_rate: 0.018,
  cache_rate: 0.41,
  cache_rate_numerator: 320,
  cache_rate_denominator: 780,
  ttft: { sample_count: 982, p50_ms: 740, p90_ms: 1280, p95_ms: 1540, avg_ms: 810 },
  duration: { sample_count: 982, p50_ms: 2180, p90_ms: 3860, p95_ms: 4420, avg_ms: 2460 },
}

const health = {
  overall: 'healthy',
  error_rate: 'healthy',
  ttft: 'healthy',
  cache: 'healthy',
  score: 93,
  error_rate_score: 96,
  ttft_score: 91,
  cache_score: 88,
  minimum_sample: 20,
  thresholds: {
    minimum_sample: 20,
    warning_error_rate: 0.05,
    critical_error_rate: 0.15,
    target_ttft_ms: 800,
    warning_ttft_ms: 1500,
    critical_ttft_ms: 3000,
    warning_cache_rate: 0.2,
    critical_cache_rate: 0.05,
    error_weight: 0.5,
    ttft_weight: 0.35,
    cache_weight: 0.15,
  },
}

const modelPlaza = {
  description: '公开模型价格以当前生效倍率计算。',
  groups: [
    {
      id: 11,
      name: 'Claude 标准组',
      description: '稳定的 Anthropic 模型线路。',
      platform: 'anthropic',
      subscription_type: 'standard',
      rate_multiplier: 0.5,
      peak_rate_enabled: false,
      peak_start: '',
      peak_end: '',
      peak_rate_multiplier: 1,
      is_exclusive: false,
      image_rate_independent: false,
      image_rate_multiplier: 1,
      models: [{
        name: 'claude-sonnet-4-6',
        platform: 'anthropic',
        pricing: {
          billing_mode: 'token',
          input_price: 3e-6,
          output_price: 15e-6,
          cache_write_price: 3.75e-6,
          cache_read_price: 0.3e-6,
          image_input_price: null,
          image_output_price: null,
          per_request_price: null,
          intervals: [],
        },
        official_pricing: {
          input_price: 3e-6,
          output_price: 15e-6,
          cache_write_price: 3.75e-6,
          cache_write_1h_price: 6e-6,
          cache_read_price: 0.3e-6,
        },
      }],
    },
    {
      id: 12,
      name: 'OpenAI 标准组',
      description: '稳定的 OpenAI 模型线路。',
      platform: 'openai',
      subscription_type: 'standard',
      rate_multiplier: 0.19,
      peak_rate_enabled: false,
      peak_start: '',
      peak_end: '',
      peak_rate_multiplier: 1,
      is_exclusive: false,
      image_rate_independent: false,
      image_rate_multiplier: 1,
      models: [{
        name: 'gpt-5.4',
        platform: 'openai',
        pricing: {
          billing_mode: 'token',
          input_price: 2.5e-6,
          output_price: 15e-6,
          cache_write_price: null,
          cache_read_price: null,
          image_input_price: null,
          image_output_price: null,
          per_request_price: null,
          intervals: [],
        },
        official_pricing: {
          input_price: 2.5e-6,
          output_price: 15e-6,
          cache_write_price: null,
          cache_write_1h_price: null,
          cache_read_price: null,
        },
      }],
    },
  ],
}

const redeemCodes = {
  items: [
    {
      id: 91,
      code: 'BENEFIT-2026',
      type: 'benefit',
      value: 12.5,
      status: 'unused',
      used_by: null,
      used_at: null,
      created_at: observedAt,
      expires_at: null,
      batch_id: 'benefit-20260820',
    },
    {
      id: 92,
      code: 'MYSTERY-2026',
      type: 'mystery_box',
      value: 0,
      min_value: 1.25,
      max_value: 8.75,
      status: 'unused',
      used_by: null,
      used_at: null,
      created_at: observedAt,
      expires_at: null,
      batch_id: 'mystery-20260820',
    },
  ],
  total: 2,
  page: 1,
  page_size: 20,
  pages: 1,
}

const dashboardStats = {
  total_users: 107,
  today_new_users: 1,
  active_users: 12,
  hourly_active_users: 4,
  stats_updated_at: observedAt,
  stats_stale: false,
  total_api_keys: 89,
  active_api_keys: 87,
  total_accounts: 7,
  normal_accounts: 6,
  error_accounts: 1,
  ratelimit_accounts: 0,
  overload_accounts: 0,
  total_requests: 65_680,
  total_input_tokens: 4_200_000_000,
  total_output_tokens: 2_100_000_000,
  total_cache_creation_tokens: 420_000_000,
  total_cache_read_tokens: 950_000_000,
  total_tokens: 7_670_000_000,
  total_cost: 6_330,
  total_actual_cost: 1_940,
  total_account_cost: 7_830,
  today_requests: 1_165,
  today_input_tokens: 72_000_000,
  today_output_tokens: 38_000_000,
  today_cache_creation_tokens: 8_280_000,
  today_cache_read_tokens: 20_000_000,
  today_tokens: 138_280_000,
  today_cost: 131.72,
  today_actual_cost: 57.09,
  today_account_cost: 134.3,
  average_duration_ms: 26_790,
  uptime: 864_000,
  rpm: 0,
  tpm: 0,
}

const dashboardTrend = [0, 1, 2, 3, 4, 5].map((index) => ({
  date: `2026-08-16T${String(7 + index).padStart(2, '0')}:00:00+08:00`,
  requests: 120 + index * 16,
  input_tokens: 18_000_000 + index * 1_200_000,
  output_tokens: 6_000_000 + index * 600_000,
  cache_creation_tokens: 1_200_000,
  cache_read_tokens: 2_800_000 + index * 220_000,
  total_tokens: 28_000_000 + index * 2_020_000,
  cost: 12 + index,
  actual_cost: 5 + index * 0.4,
}))

const dashboardModels = [
  {
    model: 'gpt-5.6-sol',
    requests: 5_097,
    input_tokens: 410_000_000,
    output_tokens: 138_000_000,
    cache_creation_tokens: 12_000_000,
    cache_read_tokens: 64_930_000,
    total_tokens: 624_930_000,
    cost: 669.24,
    actual_cost: 286.15,
    account_cost: 669.24,
  },
  {
    model: 'claude-opus-5',
    requests: 191,
    input_tokens: 42_000_000,
    output_tokens: 12_000_000,
    cache_creation_tokens: 2_000_000,
    cache_read_tokens: 9_880_000,
    total_tokens: 65_880_000,
    cost: 41.2,
    actual_cost: 47.16,
    account_cost: 42.88,
  },
]

function envelope(data: unknown) {
  return JSON.stringify({ code: 0, message: 'ok', data })
}

async function fulfill(route: Route, data: unknown, status = 200) {
  await route.fulfill({
    status,
    contentType: 'application/json; charset=utf-8',
    headers: { 'Cache-Control': 'no-store' },
    body: envelope(data),
  })
}

export async function seedConsole(
  page: Page,
  mode: 'v1' | 'v2' = 'v2',
  options: { authenticated?: boolean } = {},
) {
  const authenticated = options.authenticated ?? true
  await page.addInitScript(({ user, authenticated }) => {
    if (authenticated) {
      localStorage.setItem('auth_token', 'visual-fixture-token')
      localStorage.setItem('auth_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
    }
    localStorage.setItem('sub2api_locale', 'zh')
    localStorage.setItem('theme', 'light')
    localStorage.setItem('admin_guide_1_admin_v4_interactive', 'true')
  }, { user: adminUser, authenticated })

  await page.route('**/setup/status', (route) =>
    fulfill(route, { needs_setup: false, step: 'completed' }),
  )

  await page.route('**/api/v1/**', async (route) => {
    const path = new URL(route.request().url()).pathname.replace(/^\/api\/v1/, '')
    if (path === '/auth/me') return fulfill(route, adminUser)
    if (path === '/settings/public') return fulfill(route, publicSettings(mode))
    if (path === '/admin/settings') return fulfill(route, publicSettings(mode))
    if (path === '/admin/groups/all') return fulfill(route, [])
    if (path === '/admin/redeem-codes') return fulfill(route, redeemCodes)
    if (path === '/admin/dashboard/snapshot-v2') {
      return fulfill(route, {
        generated_at: observedAt,
        start_date: '2026-08-15',
        end_date: '2026-08-16',
        granularity: 'hour',
        stats: dashboardStats,
        trend: dashboardTrend,
        models: dashboardModels,
        groups: [],
      })
    }
    if (path === '/admin/dashboard/users-trend') {
      return fulfill(route, {
        trend: [
          { date: '2026-08-16T10:00:00+08:00', user_id: 1, email: 'admin@01yapi.test', username: '零一场', requests: 88, tokens: 8_400_000, cost: 6.2, actual_cost: 2.4 },
          { date: '2026-08-16T11:00:00+08:00', user_id: 1, email: 'admin@01yapi.test', username: '零一场', requests: 94, tokens: 9_100_000, cost: 6.8, actual_cost: 2.7 },
        ],
        start_date: '2026-08-15',
        end_date: '2026-08-16',
        granularity: 'hour',
      })
    }
    if (path === '/admin/dashboard/users-ranking') {
      return fulfill(route, {
        ranking: [{ user_id: 1, email: 'admin@01yapi.test', username: '零一场', actual_cost: 286.15, requests: 5_097, tokens: 624_930_000 }],
        total_actual_cost: 286.15,
        total_requests: 5_097,
        total_tokens: 624_930_000,
        start_date: '2026-08-15',
        end_date: '2026-08-16',
      })
    }
    if (path === '/model-plaza') return fulfill(route, modelPlaza)
    if (path === '/redeem/history') return fulfill(route, [])
    if (path === '/admin/announcements') {
      return fulfill(route, { items: [announcement], total: 1, page: 1, page_size: 20, pages: 1 })
    }
    if (path === '/announcements/unread-count') return fulfill(route, { count: 0 })
    if (path === '/channel-monitors') {
      return fulfill(route, {
        items: [{
          id: 7,
          name: 'OpenAI 主线路',
          provider: 'openai',
          group_name: '默认分组',
          primary_model: 'gpt-5',
          primary_status: 'operational',
          primary_latency_ms: 826,
          primary_ping_latency_ms: 42,
          availability_7d: 99.92,
          extra_models: [],
          timeline: [
            { status: 'success', latency_ms: 812, ping_latency_ms: 40, checked_at: '2026-08-16T11:50:00+08:00' },
            { status: 'success', latency_ms: 826, ping_latency_ms: 42, checked_at: observedAt },
          ],
        }],
      })
    }
    if (/^\/channel-monitors\/7\/status$/.test(path)) {
      return fulfill(route, {
        id: 7,
        name: 'OpenAI 主线路',
        provider: 'openai',
        group_name: '默认分组',
        models: [{
          model: 'gpt-5',
          latest_status: 'success',
          latest_latency_ms: 826,
          availability_7d: 99.92,
          availability_15d: 99.88,
          availability_30d: 99.84,
          avg_latency_7d_ms: 790,
        }],
      })
    }
    if (path.endsWith('/channel-monitor-v2/dimensions')) {
      return fulfill(route, {
        platforms: [{ value: 'openai', label: 'OpenAI', request_count: 1000 }],
        groups: [{ id: 1, name: '默认分组', platform: 'openai', request_count: 1000 }],
        models: [{ value: 'gpt-5', label: 'gpt-5', platform: 'openai', request_count: 1000 }],
      })
    }
    if (path.endsWith('/channel-monitor-v2/snapshot')) {
      return fulfill(route, {
        config: {
          version: 1,
          enabled: true,
          refresh_interval_seconds: 300,
          platforms: [{ platform: 'openai', enabled: true, models: ['gpt-5'] }],
          group_ids: [1],
          health_thresholds: health.thresholds,
        },
        coverage,
        metrics: metric,
        health,
        trend: [0, 1, 2, 3, 4, 5].map((index) => ({
          bucket_start: `2026-08-16T${String(11 + Math.floor(index / 2)).padStart(2, '0')}:${index % 2 ? '30' : '00'}:00+08:00`,
          metrics: { ...metric, request_count: 840 + index * 32 },
          health,
        })),
      })
    }
    if (path.endsWith('/channel-monitor-v2/matrix')) {
      return fulfill(route, {
        coverage,
        group_by: 'platform_group_model',
        items: [{
          platform: 'openai',
          group_id: 1,
          group_name: '默认分组',
          model: 'gpt-5',
          metrics: metric,
          health,
          buckets: [],
        }],
      })
    }
    if (path.endsWith('/channel-monitor-v2/models')) {
      return fulfill(route, { coverage, items: [{ platform: 'openai', model: 'gpt-5', metrics: metric, health }] })
    }
    if (path.endsWith('/channel-monitor-v2/errors')) {
      return fulfill(route, { coverage, items: [{ category: 'timeout', count: 12, rate: 0.012 }] })
    }
    if (path.endsWith('/channel-monitor-v2/users')) return fulfill(route, { coverage, items: [] })
    return fulfill(route, {})
  })
}

export interface LandingFixtureOptions {
  status?: 'active_probe' | 'traffic' | 'error' | 'empty'
}

export async function seedLanding(page: Page, options: LandingFixtureOptions = {}) {
  const status = options.status ?? 'active_probe'
  await page.route('**/api/v1/settings/public', (route) => fulfill(route, publicSettings('v1')))
  await page.route('**/api/v1/announcements/public', (route) =>
    fulfill(route, [
      { id: 42, title: announcement.title, content: announcement.content },
      { id: 41, title: '公开状态说明', content: '首页状态仅展示匿名聚合，不包含渠道、模型或请求详情。' },
    ]),
  )
  await page.route('**/api/v1/model-plaza', (route) => fulfill(route, modelPlaza))
  await page.route('**/api/v1/channel-status/summary', async (route) => {
    if (status === 'error') {
      await route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ message: 'unavailable' }) })
      return
    }
    if (status === 'empty') {
      await fulfill(route, {
        mode: 'traffic',
        state: 'unknown',
        reason: 'insufficient_data',
        latency_ms: null,
        availability_7d: null,
        observed_at: observedAt,
      })
      return
    }
    await fulfill(route, {
      mode: status,
      state: status === 'traffic' ? 'degraded' : 'operational',
      reason: null,
      latency_ms: status === 'traffic' ? 1120 : 826,
      availability_7d: status === 'traffic' ? null : 99.92,
      observed_at: observedAt,
      items: status === 'active_probe'
        ? [{
            name: 'OpenAI 主线路',
            state: 'operational',
            availability_7d: 99.92,
            observed_at: observedAt,
            timeline: [],
          }]
        : [],
    })
  })
}
