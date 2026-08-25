import type { Page, Route } from '@playwright/test'

const observedAt = '2026-08-16T12:00:00+08:00'

export const communityQrPngBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6OZsAAAAASUVORK5CYII='

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

export const regularUser = {
  ...adminUser,
  id: 2,
  username: 'zero-one-user',
  email: 'user@01yapi.test',
  role: 'user',
  balance: 96.25,
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
    profile_navigation_enabled: true,
    subscription_navigation_enabled: true,
    model_plaza_placement: 'header',
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
    community_qr_enabled: false,
    community_qr_title: '交流群',
    community_qr_description: '扫码加入交流群获取支持',
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
  options: {
    authenticated?: boolean
    user?: typeof adminUser
    communityQrEnabled?: boolean
    communityQrImage?: string
    communityQrTitle?: string
    communityQrDescription?: string
    affiliateEnabled?: boolean
    locale?: 'en' | 'zh'
    profileNavigationEnabled?: boolean
    subscriptionNavigationEnabled?: boolean
    modelPlazaPlacement?: 'header' | 'sidebar'
    customMenuItems?: Array<{
      id: string
      label: string
      icon_svg: string
      url: string
      visibility: 'user' | 'admin' | 'all'
      placement?: 'sidebar' | 'header' | 'both'
      navigation_type?: 'qr'
      qr_description?: string
      qr_image?: string
      sort_order: number
    }>
  } = {},
) {
  const authenticated = options.authenticated ?? true
  const user = options.user ?? adminUser
  const locale = options.locale ?? 'zh'
  const settings = {
    ...publicSettings(mode),
    community_qr_enabled: options.communityQrEnabled ?? false,
    community_qr_title: options.communityQrTitle ?? '交流群',
    community_qr_description:
      options.communityQrDescription ?? '扫码加入交流群获取支持',
    affiliate_enabled: options.affiliateEnabled ?? false,
    affiliate_rebate_rate: 20,
    affiliate_rebate_freeze_hours: 24,
    affiliate_rebate_duration_days: 365,
    affiliate_rebate_per_invitee_cap: 0,
    affiliate_admin_recharge_enabled: false,
    custom_menu_items: options.customMenuItems ?? [],
    profile_navigation_enabled: options.profileNavigationEnabled ?? true,
    subscription_navigation_enabled: options.subscriptionNavigationEnabled ?? true,
    model_plaza_placement: options.modelPlazaPlacement ?? 'header',
  }
  let communityQrImage = options.communityQrImage ?? ''
  const affiliateUsers = [
    { id: 10, email: 'inviter@01yapi.test', username: '邀请人甲', role: 'user', status: 'active', created_at: '2026-02-01T00:00:00+08:00' },
    { id: 20, email: 'missed@01yapi.test', username: '遗漏客户乙', role: 'user', status: 'active', created_at: '2026-03-01T00:00:00+08:00' },
    { id: 21, email: 'bound@01yapi.test', username: '已绑定客户丙', role: 'user', status: 'disabled', created_at: '2026-04-01T00:00:00+08:00' },
  ]
  const allCustomers = [user, ...affiliateUsers]
  const affiliateInvites = [
    {
      inviter_id: 10,
      inviter_email: 'inviter@01yapi.test',
      inviter_username: '邀请人甲',
      invitee_id: 21,
      invitee_email: 'bound@01yapi.test',
      invitee_username: '已绑定客户丙',
      aff_code: 'INVITER10',
      total_rebate: 12.5,
      created_at: '2026-08-15T10:00:00+08:00',
    },
  ]
  await page.addInitScript(({ user, authenticated, locale }) => {
    if (authenticated) {
      localStorage.setItem('auth_token', 'visual-fixture-token')
      localStorage.setItem('auth_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
    }
    localStorage.setItem('sub2api_locale', locale)
    localStorage.setItem('theme', 'light')
    localStorage.setItem('admin_guide_1_admin_v4_interactive', 'true')
  }, { user, authenticated, locale })

  await page.route('**/setup/status', (route) =>
    fulfill(route, { needs_setup: false, step: 'completed' }),
  )

  await page.route('**/api/v1/**', async (route) => {
    const requestUrl = new URL(route.request().url())
    const path = requestUrl.pathname.replace(/^\/api\/v1/, '')
    if (path === '/auth/login') {
      return fulfill(route, {
        access_token: 'visual-fixture-token',
        refresh_token: 'visual-fixture-refresh-token',
        expires_in: 3600,
        user,
      })
    }
    if (path === '/auth/me') return fulfill(route, user)
    if (path === '/settings/community-qr') {
      if (route.request().headers().authorization !== 'Bearer visual-fixture-token') {
        return route.fulfill({ status: 401, body: 'unauthorized' })
      }
      if (!settings.community_qr_enabled || !communityQrImage) {
        return route.fulfill({ status: 404, body: 'not found' })
      }
      return route.fulfill({
        status: 200,
        contentType: 'image/png',
        headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
        body: Buffer.from(communityQrPngBase64, 'base64'),
      })
    }
    if (/^\/settings\/header-navigation\/[^/]+\/qr$/.test(path)) {
      if (route.request().headers().authorization !== 'Bearer visual-fixture-token') {
        return route.fulfill({ status: 401, body: 'unauthorized' })
      }
      const id = decodeURIComponent(path.split('/')[3])
      const item = settings.custom_menu_items.find((candidate) => candidate.id === id)
      if (!item || item.navigation_type !== 'qr' || !item.qr_image) {
        return route.fulfill({ status: 404, body: 'not found' })
      }
      return route.fulfill({
        status: 200,
        contentType: 'image/png',
        headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
        body: Buffer.from(communityQrPngBase64, 'base64'),
      })
    }
    if (path === '/settings/public') {
      return fulfill(route, {
        ...settings,
        custom_menu_items: settings.custom_menu_items
          .filter((item) => item.visibility !== 'admin')
          .map(({ qr_image: _qrImage, ...item }) => item),
      })
    }
    if (path === '/admin/settings' && route.request().method() === 'PUT') {
      const submitted = route.request().postDataJSON() as {
        community_qr_enabled?: boolean
        community_qr_image?: string
        community_qr_title?: string
        community_qr_description?: string
        custom_menu_items?: typeof settings.custom_menu_items
        profile_navigation_enabled?: boolean
        subscription_navigation_enabled?: boolean
        model_plaza_placement?: 'header' | 'sidebar'
        affiliate_enabled?: boolean
        affiliate_rebate_rate?: number
        affiliate_rebate_freeze_hours?: number
        affiliate_rebate_duration_days?: number
        affiliate_rebate_per_invitee_cap?: number
        affiliate_admin_recharge_enabled?: boolean
      }
      if (typeof submitted.community_qr_enabled === 'boolean') {
        settings.community_qr_enabled = submitted.community_qr_enabled
      }
      if (typeof submitted.community_qr_image === 'string') {
        communityQrImage = submitted.community_qr_image
      }
      if (typeof submitted.community_qr_title === 'string') {
        settings.community_qr_title = submitted.community_qr_title
      }
      if (typeof submitted.community_qr_description === 'string') {
        settings.community_qr_description = submitted.community_qr_description
      }
      if (Array.isArray(submitted.custom_menu_items)) {
        settings.custom_menu_items = submitted.custom_menu_items
      }
      if (typeof submitted.profile_navigation_enabled === 'boolean') {
        settings.profile_navigation_enabled = submitted.profile_navigation_enabled
      }
      if (typeof submitted.subscription_navigation_enabled === 'boolean') {
        settings.subscription_navigation_enabled = submitted.subscription_navigation_enabled
      }
      if (submitted.model_plaza_placement === 'header' || submitted.model_plaza_placement === 'sidebar') {
        settings.model_plaza_placement = submitted.model_plaza_placement
      }
      if (typeof submitted.affiliate_enabled === 'boolean') {
        settings.affiliate_enabled = submitted.affiliate_enabled
      }
      if (typeof submitted.affiliate_rebate_rate === 'number') {
        settings.affiliate_rebate_rate = submitted.affiliate_rebate_rate
      }
      if (typeof submitted.affiliate_rebate_freeze_hours === 'number') {
        settings.affiliate_rebate_freeze_hours = submitted.affiliate_rebate_freeze_hours
      }
      if (typeof submitted.affiliate_rebate_duration_days === 'number') {
        settings.affiliate_rebate_duration_days = submitted.affiliate_rebate_duration_days
      }
      if (typeof submitted.affiliate_rebate_per_invitee_cap === 'number') {
        settings.affiliate_rebate_per_invitee_cap = submitted.affiliate_rebate_per_invitee_cap
      }
      if (typeof submitted.affiliate_admin_recharge_enabled === 'boolean') {
        settings.affiliate_admin_recharge_enabled = submitted.affiliate_admin_recharge_enabled
      }
      return fulfill(route, { ...settings, community_qr_image: communityQrImage })
    }
    if (path === '/admin/settings') {
      return fulfill(route, { ...settings, community_qr_image: communityQrImage })
    }
    if (path === '/admin/groups/all') return fulfill(route, [])
    if (path === '/usage/dashboard/stats') return fulfill(route, dashboardStats)
    if (path === '/usage/dashboard/trend') {
      return fulfill(route, {
        trend: dashboardTrend,
        start_date: '2026-08-10',
        end_date: '2026-08-16',
        granularity: 'day',
      })
    }
    if (path === '/usage/dashboard/models') {
      return fulfill(route, {
        models: dashboardModels,
        start_date: '2026-08-10',
        end_date: '2026-08-16',
      })
    }
    if (path === '/usage') {
      return fulfill(route, { items: [], total: 0, page: 1, page_size: 100, pages: 0 })
    }
    if (path === '/user/aff') {
      return fulfill(route, {
        user_id: user.id,
        aff_code: 'ZEROONE2026',
        inviter_id: null,
        aff_count: 2,
        aff_quota: 12.5,
        aff_frozen_quota: 1.25,
        aff_history_quota: 48.75,
        effective_rebate_rate_percent: 20,
        invitees: [
          {
            user_id: 3,
            email: 'invitee@01yapi.test',
            username: '受邀用户',
            created_at: '2026-08-15T10:00:00+08:00',
            total_rebate: 8.5,
          },
        ],
      })
    }
    if (path === '/user/platform-quotas') return fulfill(route, { platform_quotas: [] })
    if (path === '/admin/usage') {
      return fulfill(route, { items: [], total: 0, page: 1, page_size: 20, pages: 0 })
    }
    if (path === '/admin/usage/stats') {
      return fulfill(route, {
        total_requests: 0,
        total_tokens: 0,
        total_cost: 0,
        total_actual_cost: 0,
        avg_duration_ms: 0,
      })
    }
    if (path === '/admin/users') {
      const query = requestUrl.searchParams.get('search')?.toLocaleLowerCase() || ''
      const pageNumber = Math.max(1, Number(requestUrl.searchParams.get('page') || 1))
      const pageSize = Math.max(1, Number(requestUrl.searchParams.get('page_size') || 20))
      const matches = allCustomers.filter((candidate) =>
        `${candidate.id} ${candidate.email} ${candidate.username}`.toLocaleLowerCase().includes(query),
      )
      const start = (pageNumber - 1) * pageSize
      return fulfill(route, {
        items: matches.slice(start, start + pageSize),
        total: matches.length,
        page: pageNumber,
        page_size: pageSize,
        pages: Math.ceil(matches.length / pageSize),
      })
    }
    if (path === '/admin/affiliates/users/lookup') {
      const query = requestUrl.searchParams.get('q')?.toLocaleLowerCase() || ''
      return fulfill(
        route,
        affiliateUsers.filter((candidate) =>
          `${candidate.id} ${candidate.email} ${candidate.username}`.toLocaleLowerCase().includes(query),
        ),
      )
    }
    if (path === '/admin/affiliates/users/batch-rate') {
      return fulfill(route, { affected: 1 })
    }
    if (/^\/admin\/affiliates\/users\/\d+\/overview$/.test(path)) {
      const userId = Number(path.split('/').at(-2))
      const customer = allCustomers.find((candidate) => candidate.id === userId)
      return fulfill(route, {
        user_id: userId,
        email: customer?.email || '',
        username: customer?.username || '',
        aff_code: userId === 10 ? 'INVITER10' : '',
        rebate_rate_percent: userId === 10 ? 25 : settings.affiliate_rebate_rate,
        invited_count: affiliateInvites.filter((entry) => entry.inviter_id === userId).length,
        rebated_invitee_count: affiliateInvites.filter(
          (entry) => entry.inviter_id === userId && entry.total_rebate > 0,
        ).length,
        available_quota: userId === 10 ? 8.25 : 0,
        history_quota: userId === 10 ? 12.5 : 0,
      })
    }
    if (/^\/admin\/affiliates\/users\/\d+$/.test(path)) {
      const userId = Number(path.split('/').at(-1))
      return fulfill(route, { user_id: userId })
    }
    if (path === '/admin/affiliates/users') {
      return fulfill(route, {
        items: [
          {
            user_id: 10,
            email: 'inviter@01yapi.test',
            username: '邀请人甲',
            aff_code: 'INVITER10',
            aff_code_custom: true,
            aff_rebate_rate_percent: 25,
            aff_count: affiliateInvites.filter((entry) => entry.inviter_id === 10).length,
          },
        ],
        total: 1,
        page: 1,
        page_size: 20,
        pages: 1,
      })
    }
    if (path === '/admin/affiliates/invites' && route.request().method() === 'POST') {
      const submitted = route.request().postDataJSON() as {
        inviter_id: number
        invitee_id: number
      }
      const inviter = affiliateUsers.find((candidate) => candidate.id === submitted.inviter_id)
      const invitee = affiliateUsers.find((candidate) => candidate.id === submitted.invitee_id)
      affiliateInvites.push({
        inviter_id: submitted.inviter_id,
        inviter_email: inviter?.email || '',
        inviter_username: inviter?.username || '',
        invitee_id: submitted.invitee_id,
        invitee_email: invitee?.email || '',
        invitee_username: invitee?.username || '',
        aff_code: 'INVITER10',
        total_rebate: 0,
        created_at: observedAt,
      })
      return fulfill(route, submitted)
    }
    if (path === '/admin/affiliates/invites') {
      const inviterId = Number(requestUrl.searchParams.get('inviter_id') || 0)
      const items = inviterId
        ? affiliateInvites.filter((entry) => entry.inviter_id === inviterId)
        : affiliateInvites
      return fulfill(route, {
        items,
        total: items.length,
        page: 1,
        page_size: 20,
        pages: items.length ? 1 : 0,
      })
    }
    if (path === '/admin/affiliates/rebates' || path === '/admin/affiliates/transfers') {
      return fulfill(route, { items: [], total: 0, page: 1, page_size: 20, pages: 0 })
    }
    if (path === '/user/totp/step-up') return fulfill(route, { verified: true })
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
    if (path === '/announcements') return fulfill(route, [])
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
  await page.route('**/api/v1/settings/public*', (route) => fulfill(route, publicSettings('v1')))
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
