import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const APPROVED_SHELL_SOURCE = 'index-9xJBhx8B.js'
export const LEGACY_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v1'
export const PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v2'
export const PRIOR_CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v3'
export const PRE_RECOVERY_SHELL_DIRECTORY = 'cn-provider-shell-v4'
export const RECOVERY_SHELL_DIRECTORY = 'cn-provider-shell-v5'
export const DECLARED_COST_SHELL_DIRECTORY = 'cn-provider-shell-v6'
export const DASHBOARD_SPEND_SHELL_DIRECTORY = 'cn-provider-shell-v7'
export const DASHBOARD_USER_CLARITY_SHELL_DIRECTORY = 'cn-provider-shell-v8'
export const NATIVE_COST_SHELL_DIRECTORY = 'cn-provider-shell-v9'
export const CN_PROVIDER_SHELL_DIRECTORY = 'cn-provider-shell-v10'
export const CN_PROVIDER_SHELL_ASSET = `${CN_PROVIDER_SHELL_DIRECTORY}/${APPROVED_SHELL_SOURCE}`
export const APPROVED_LAYOUT_SOURCE = 'AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js'
export const DECLARED_COST_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v2'
export const DASHBOARD_SPEND_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v3'
export const DASHBOARD_USER_CLARITY_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v4'
export const NATIVE_COST_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v5'
export const CURRENT_PASSWORD_RECOVERY_DIRECTORY = 'password-recovery-v6'
export const LEGACY_CN_PROVIDER_ADMIN_DIRECTORY = 'cn-provider-admin-v1'
export const BILLING_CLARITY_CN_PROVIDER_ADMIN_DIRECTORY = 'cn-provider-admin-v8'
export const PASSWORD_RECOVERY_PAGES = {
  'ForgotPasswordView-DfgTg0iM.js': 'password-recovery-v1/ForgotPasswordView.js',
  'ResetPasswordView-CMRDA6OL.js': 'password-recovery-v1/ResetPasswordView.js',
}

const headerDocsPattern = /L\.value\?\(t\(\),r\("a",\{key:1,href:L\.value,[\s\S]*?n\(m\)\("nav\.docs"\)\),1\)\],8,\$n\)\):_\("",!0\)/g

export function patchApprovedHeader(source) {
  const matches = [...source.matchAll(headerDocsPattern)]
  if (matches.length !== 1 || !matches[0][0].includes('name:"book"')) {
    throw new Error('approved header documentation seam changed')
  }
  return source.replace(headerDocsPattern, '_("",!0)')
}

export function recoveryShellOverrides(assetsDirectory) {
  const overrides = new Map([
    [APPROVED_LAYOUT_SOURCE, patchApprovedHeader(readFileSync(resolve(assetsDirectory, APPROVED_LAYOUT_SOURCE), 'utf8'))],
  ])
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    // 生成入口前先验证两条源码路由已构建，缺失资源时禁止形成可发布命名空间。
    readFileSync(resolve(assetsDirectory, target), 'utf8')
    overrides.set(name, `export { default } from '../${target}';\n`)
  }
  return overrides
}

export const DECLARED_COST_OVERRIDE_FILES = [
  "AccountsView-CM4yOmZE.js",
  "DashboardView-CYAPqspo.js",
  "EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js",
  "GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js",
  "ModelDistributionChart.vue_vue_type_script_setup_true_lang-BkqQV0ng.js",
  "UsageView-dsXbJO6P.js",
  "index-6pKNrg32.js",
  "index-BBEtrNVx.js"
]

export function declaredCostShellOverrides(assetsDirectory) {
  const overrides = recoveryShellOverrides(assetsDirectory)
  const directory = resolve(assetsDirectory, '../overrides/declared-cost-v1')
  if (readdirSync(directory).sort().join('\n') !== [...DECLARED_COST_OVERRIDE_FILES].sort().join('\n')) {
    throw new Error('declared cost overrides differ from the reviewed module list')
  }
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${DECLARED_COST_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    overrides.set(name, readFileSync(resolve(directory, name), 'utf8'))
  }
  return overrides
}

function replaceExactlyOnce(source, before, after, label) {
  const occurrences = source.split(before).length - 1
  if (occurrences !== 1) {
    throw new Error(`${label} seam count changed: expected 1, found ${occurrences}`)
  }
  return source.replace(before, after)
}

export function patchDashboardSpendCards(source) {
  const replacements = [
    ['name:"key"', 'name:"dollar"', 'dashboard total-consumption icon'],
    ['name:"server"', 'name:"dollar"', 'dashboard today-consumption icon'],
    ['admin.dashboard.apiKeys', 'admin.dashboard.totalCost', 'dashboard total-consumption label'],
    ['admin.dashboard.accounts', 'admin.dashboard.todayCost', 'dashboard today-consumption label'],
    [
      't("p",Zt,s(d.value.total_api_keys),1)',
      't("p",Zt,"$"+s(W(d.value.total_actual_cost).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),1)',
      'dashboard total-consumption value',
    ],
    [
      't("p",Jt,s(d.value.active_api_keys)+" "+s(o(r)("common.active")),1)',
      't("p",Jt,s(o(r)("admin.dashboard.actual")),1)',
      'dashboard total-consumption caption',
    ],
    [
      't("p",ae,s(d.value.total_accounts),1)',
      't("p",ae,"$"+s(W(d.value.today_actual_cost).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),1)',
      'dashboard today-consumption value',
    ],
    [
      't("p",se,[t("span",re,s(d.value.normal_accounts)+" "+s(o(r)("common.active")),1),d.value.error_accounts>0?(_(),v("span",oe,s(d.value.error_accounts)+" "+s(o(r)("common.error")),1)):G("",!0)])',
      't("p",se,s(o(r)("admin.dashboard.actual")),1)',
      'dashboard today-consumption caption',
    ],
    [
      'Jt={class:"text-xs text-zo-signal-600 dark:text-zo-signal-400"}',
      'Jt={class:"text-xs text-gray-500 dark:text-gray-400"}',
      'dashboard total-consumption caption style',
    ],
    [
      'se={class:"text-xs"}',
      'se={class:"text-xs text-gray-500 dark:text-gray-400"}',
      'dashboard today-consumption caption style',
    ],
  ]
  return replacements.reduce(
    (output, [before, after, label]) => replaceExactlyOnce(output, before, after, label),
    source,
  )
}

export function dashboardSpendShellOverrides(assetsDirectory) {
  const overrides = declaredCostShellOverrides(assetsDirectory)
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${DASHBOARD_SPEND_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  overrides.set(
    'DashboardView-CYAPqspo.js',
    patchDashboardSpendCards(overrides.get('DashboardView-CYAPqspo.js')),
  )
  return overrides
}

export function dashboardUserClarityShellOverrides(assetsDirectory) {
  const overrides = dashboardSpendShellOverrides(assetsDirectory)
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${DASHBOARD_USER_CLARITY_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  overrides.set(
    'DashboardView-CYAPqspo.js',
    replaceExactlyOnce(
      overrides.get('DashboardView-CYAPqspo.js'),
      'admin.dashboard.users',
      'admin.dashboard.newUsersToday',
      'dashboard new-users label',
    ),
  )
  return overrides
}

const TOKEN_USAGE_TREND_ASSET = 'TokenUsageTrend.vue_vue_type_script_setup_true_lang-BKMiSAe-.js'

function replaceModuleSection(source, startNeedle, endNeedle, replacement, label) {
  const start = source.indexOf(startNeedle)
  const end = source.indexOf(endNeedle, start)
  if (start < 0 || end < 0 || source.indexOf(startNeedle, start + 1) >= 0) {
    throw new Error(`${label} seam changed`)
  }
  return source.slice(0, start) + replacement + source.slice(end)
}

const NATIVE_COST_MODULE_REPLACEMENTS = {
  'AccountsView-CM4yOmZE.js': [
    [
      'g.windowStats?.cost==null?"待确认":g.windowStats.cost.toFixed(2)',
      'g.windowStats?.cost==null?"0.0000":g.windowStats.cost.toFixed(2)',
      'account window cost fallback',
    ],
    [
      'u.todayStats?.cost==null?"待确认":u.todayStats.cost.toFixed(2)',
      'u.todayStats?.cost==null?"0.0000":u.todayStats.cost.toFixed(2)',
      'account today cost fallback',
    ],
    [
      'T=R=>R==null?"待确认":R>=1e3?(R/1e3).toFixed(2)+"K":R>=1?R.toFixed(2):R>=.01?R.toFixed(3):R.toFixed(4)',
      'T=R=>R==null?"0.0000":R>=1e3?(R/1e3).toFixed(2)+"K":R>=1?R.toFixed(2):R>=.01?R.toFixed(3):R.toFixed(4)',
      'account stats cost formatter',
    ],
  ],
  'DashboardView-CYAPqspo.js': [
    [
      'k=a=>{if(a==null)return"待确认";const e=W(a);return e>=1e3?(e/1e3).toFixed(2)+"K":e>=1?e.toFixed(2):e>=.01?e.toFixed(3):e.toFixed(4)}',
      'k=a=>{if(a==null)return"0.0000";const e=W(a);return e>=1e3?(e/1e3).toFixed(2)+"K":e>=1?e.toFixed(2):e>=.01?e.toFixed(3):e.toFixed(4)}',
      'dashboard cost formatter',
    ],
  ],
  'EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js': [
    [
      'y=t=>t==null?"待确认":t>=1e3?(t/1e3).toFixed(2)+"K":t>=1?t.toFixed(2):t>=.01?t.toFixed(3):t.toFixed(4)',
      'y=t=>t==null?"0.0000":t>=1e3?(t/1e3).toFixed(2)+"K":t>=1?t.toFixed(2):t>=.01?t.toFixed(3):t.toFixed(4)',
      'endpoint cost formatter',
    ],
    [
      'e("span",{class:"text-sm text-gray-500"},"成本待确认")',
      'e("span",{class:"text-sm text-gray-500"},"0.0000")',
      'endpoint empty cost',
    ],
  ],
  'GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js': [
    [
      'y.value?.toFixed(4)??"待确认"',
      'y.value?.toFixed(4)??"0.0000"',
      'usage summary account cost',
    ],
    [
      'c(n)?.toFixed(6)??"待确认"',
      'c(n)?.toFixed(6)??"0.0000"',
      'usage row account cost',
    ],
    [
      'function c(_){const C=_.account_stats_cost??_.total_cost,R=_.upstream_rate_multiplier;return C==null||R==null||!Number.isFinite(C)||!Number.isFinite(R)?null:C*R}',
      'function c(_){const C=_.account_stats_cost??_.total_cost??0,R=_.account_rate_multiplier??1;return Number.isFinite(C)&&Number.isFinite(R)?C*R:0}',
      'usage account cost source',
    ],
    [
      'l.value?.upstream_rate_multiplier==null?"待确认":a(Be)(l.value.upstream_rate_multiplier)+"x"',
      'l.value?.account_rate_multiplier==null?"0.0000":a(Be)(l.value.account_rate_multiplier)+"x"',
      'usage tooltip account rate',
    ],
    [
      'upstream_rate_multiplier:(be=l.value)==null?void 0:be.upstream_rate_multiplier})?.toFixed(6)??"待确认"',
      'account_rate_multiplier:(be=l.value)==null?void 0:be.account_rate_multiplier})?.toFixed(6)??"0.0000"',
      'usage tooltip account cost',
    ],
    [
      'D=h=>{if(h==null)return"待确认";const p=L(h);return p>=1e3?(p/1e3).toFixed(2)+"K":p>=1?p.toFixed(2):p>=.01?p.toFixed(3):p.toFixed(4)}',
      'D=h=>{if(h==null)return"0.0000";const p=L(h);return p>=1e3?(p/1e3).toFixed(2)+"K":p>=1?p.toFixed(2):p>=.01?p.toFixed(3):p.toFixed(4)}',
      'usage stats cost formatter',
    ],
  ],
  'ModelDistributionChart.vue_vue_type_script_setup_true_lang-BkqQV0ng.js': [
    [
      'b=u=>u==null?"待确认":u>=1e3?(u/1e3).toFixed(2)+"K":u>=1?u.toFixed(2):u>=.01?u.toFixed(3):u.toFixed(4)',
      'b=u=>u==null?"0.0000":u>=1e3?(u/1e3).toFixed(2)+"K":u>=1?u.toFixed(2):u>=.01?u.toFixed(3):u.toFixed(4)',
      'model user cost formatter',
    ],
    [
      '$=e=>{if(e==null)return"待确认";const a=y(e);return a>=1e3?(a/1e3).toFixed(2)+"K":a>=1?a.toFixed(2):a>=.01?a.toFixed(3):a.toFixed(4)}',
      '$=e=>{if(e==null)return"0.0000";const a=y(e);return a>=1e3?(a/1e3).toFixed(2)+"K":a>=1?a.toFixed(2):a>=.01?a.toFixed(3):a.toFixed(4)}',
      'model cost formatter',
    ],
  ],
  'UsageView-dsXbJO6P.js': [
    [
      'f.upstream_rate_multiplier?.toPrecision(4)??"待确认"',
      'f.account_rate_multiplier?.toPrecision(4)??"0.0000"',
      'usage export account rate',
    ],
    [
      'f.upstream_rate_multiplier==null?"成本待确认":((f.account_stats_cost??f.total_cost)*f.upstream_rate_multiplier).toFixed(6)',
      '((f.account_stats_cost??f.total_cost??0)*(f.account_rate_multiplier??1)).toFixed(6)',
      'usage export account cost source',
    ],
  ],
}

export function patchNativeCostModule(source, assetName) {
  const replacements = NATIVE_COST_MODULE_REPLACEMENTS[assetName]
  if (!replacements) throw new Error(`unexpected native cost module: ${assetName}`)
  return replacements.reduce((output, [before, after, label]) => {
    return replaceExactlyOnce(output, before, after, label)
  }, source)
}

export function patchNativeCostLocale(source) {
  const english = source.includes('tokenUsageTrend:"Token Usage Trend",')
  const replacements = english ? [
    ['accountMultiplier:"Upstream declared rate"', 'accountMultiplier:"Account rate"', 'English account rate label'],
    ['billingRateMultiplierHint:"Local account billing and scheduling; cost reports independently use valid upstream declared rates"', 'billingRateMultiplierHint:"Used for account scheduling and historical cost from the multiplier saved on each usage row"', 'English account rate hint'],
  ] : [
    ['accountMultiplier:"上游声明倍率"', 'accountMultiplier:"账号倍率"', 'Chinese account rate label'],
    ['billingRateMultiplierHint:"用于本地账号计费与调度；成本报表独立按有效上游声明倍率计算"', 'billingRateMultiplierHint:"用于账号调度，并按用量记录保存的历史倍率计算成本"', 'Chinese account rate hint'],
  ]
  let output = patchDashboardTrendLocale(source)
  return replacements.reduce(
    (current, [before, after, label]) => replaceExactlyOnce(current, before, after, label),
    output,
  )
}

export function patchDashboardTrendLocale(source) {
  const english = source.includes('tokenUsageTrend:"Token Usage Trend",')
  let output = source
  const trendBefore = english ? 'tokenUsageTrend:"Token Usage Trend",' : 'tokenUsageTrend:"Token 使用趋势",'
  const trendAfter = english
    ? 'tokenUsageTrend:"Token Usage Trend",consumptionTrend:"Consumption Trend",actualConsumption:"Actual Consumption",'
    : 'tokenUsageTrend:"Token 使用趋势",consumptionTrend:"消费趋势",actualConsumption:"实际消费",'
  const trendOccurrences = output.split(trendBefore).length - 1
  if (trendOccurrences !== 2) throw new Error(`dashboard trend locale seam count changed: expected 2, found ${trendOccurrences}`)
  output = output.split(trendBefore).join(trendAfter)
  return output
}

export function patchDashboardV9(source) {
  let output = source
  output = replaceExactlyOnce(
    output,
    'xt=()=>{const a=new Date,e=new Date(a.getTime()-24*60*60*1e3);return{start:Y(e),end:Y(a)}}',
    'xt=()=>{const a=Y(new Date);return{start:a,end:a}}',
    'dashboard default today range',
  )
  output = replaceExactlyOnce(output, 'admin.dashboard.users', 'admin.dashboard.totalUsers', 'dashboard total-users label')
  output = replaceExactlyOnce(
    output,
    't("p",he," +"+s(d.value.today_new_users),1)',
    't("p",he,s(Q(d.value.total_users)),1)',
    'dashboard total-users value',
  )
  output = replaceExactlyOnce(
    output,
    't("p",pe,s(o(r)("common.total"))+": "+s(Q(d.value.total_users)),1)',
    't("p",pe,s(o(r)("admin.dashboard.newUsersToday"))+": +"+s(d.value.today_new_users),1)',
    'dashboard today-new-users caption',
  )
  output = replaceExactlyOnce(
    output,
    'f=a=>a==null?"0":a>=1e9?`${(a/1e9).toFixed(2)}B`:a>=1e6?`${(a/1e6).toFixed(2)}M`:a>=1e3?`${(a/1e3).toFixed(2)}K`:a.toLocaleString()',
    'f=a=>{const e=Number(a)||0;return e>=1e9?(e/1e9).toFixed(2)+"B":(e/1e6).toFixed(2)+"M"}',
    'dashboard M/B token formatter',
  )
  output = replaceExactlyOnce(output, 's(f(d.value.rpm))', 's(Q(d.value.rpm))', 'dashboard RPM formatter')
  output = replaceExactlyOnce(
    output,
    'granularity:y.value,include_stats:a',
    'granularity:y.value,refresh:!0,include_stats:a',
    'dashboard snapshot refresh',
  )

  const gridStart = 't("div",fa,['
  const gridEnd = ']),t("div",ka,['
  const gridStartIndex = output.indexOf(gridStart)
  const gridEndIndex = output.indexOf(gridEnd, gridStartIndex)
  const tokenInvocation = ',i(zt,{"trend-data":O.value,loading:b.value},null,8,["trend-data","loading"])'
  if (gridStartIndex < 0 || gridEndIndex < 0) throw new Error('dashboard chart grid seam changed')
  const gridBody = output.slice(gridStartIndex + gridStart.length, gridEndIndex)
  if (!gridBody.endsWith(tokenInvocation)) throw new Error('dashboard token chart seam changed')
  const modelInvocation = gridBody.slice(0, -tokenInvocation.length).replace(
    'i(Rt,{',
    'i(Rt,{class:"lg:col-span-2",',
  )
  const trendInvocations = [
    'i(zt,{metric:"cost","trend-data":O.value,loading:b.value},null,8,["trend-data","loading"])',
    'i(zt,{metric:"tokens","trend-data":O.value,loading:b.value},null,8,["trend-data","loading"])',
  ].join(',')
  output = output.slice(0, gridStartIndex) + gridStart + trendInvocations + ',' + modelInvocation + output.slice(gridEndIndex)
  return output
}

export function patchDashboardTrendModule(source) {
  const replacement = `xe={class:"card p-4"},$e={class:"mb-4 text-sm font-semibold text-gray-900 dark:text-white"},we={key:0,class:"flex h-48 items-center justify-center"},Re={key:1,class:"h-48"},Se={key:2,class:"flex h-48 items-center justify-center text-sm text-gray-500 dark:text-gray-400"},ze=T({__name:"TokenUsageTrend",props:{trendData:{},loading:{type:Boolean},metric:{default:"tokens"}},setup(_){J.register(X,Z,ee,te,ae,ne,se,oe);const{t:x}=A(),c=_,D=v(()=>document.documentElement.classList.contains("dark")),s=v(()=>({text:D.value?"#e5e7eb":"#374151",grid:D.value?"#374151":"#e5e7eb",line:c.metric==="cost"?"#2563eb":"#7c5cfc"})),f=t=>{const n=Number(t)||0;return n>=1e9?(n/1e9).toFixed(2)+"B":(n/1e6).toFixed(2)+"M"},Pp=t=>{const n=String(t??"");return n.includes("T")||n.includes(" ")?n.slice(11,16):n.length>=10?n.slice(5,10):n},$=v(()=>{var t;if(!((t=c.trendData)!=null&&t.length))return null;const n=c.metric==="cost";return{labels:c.trendData.map(d=>Pp(d.date)),datasets:[{label:x(n?"admin.dashboard.actualConsumption":"admin.dashboard.totalTokens"),data:c.trendData.map(d=>n?d.actual_cost??0:d.total_tokens??0),borderColor:s.value.line,backgroundColor:s.value.line+"20",fill:!0,tension:.3}]} }),i=v(()=>({responsive:!0,maintainAspectRatio:!1,animation:!1,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!1},tooltip:{callbacks:{label:t=>{const n=c.trendData[t.dataIndex];if(!n)return[];return c.metric==="cost"?x("admin.dashboard.actualConsumption")+": $"+Number(n.actual_cost??0).toFixed(2):[x("admin.dashboard.totalTokens")+": "+f(n.total_tokens),x("admin.dashboard.input")+": "+f(n.input_tokens),x("admin.dashboard.output")+": "+f(n.output_tokens),x("admin.dashboard.cache")+": "+f((n.cache_creation_tokens??0)+(n.cache_read_tokens??0))]}}}},scales:{x:{grid:{color:s.value.grid},ticks:{color:s.value.text,font:{size:10}}},y:{beginAtZero:!0,grid:{color:s.value.grid},ticks:{color:s.value.text,font:{size:10},callback:t=>c.metric==="cost"?"$"+Number(t).toFixed(2):f(t)}}}}));return(t,n)=>(h(),g("div",xe,[r("h3",$e,p(m(x)(_.metric==="cost"?"admin.dashboard.consumptionTrend":"admin.dashboard.tokenUsageTrend")),1),_.loading?(h(),g("div",we,[k(le)])):_.trendData.length>0&&$.value?(h(),g("div",Re,[k(m(re),{data:$.value,options:i.value},null,8,["data","options"])])):(h(),g("div",Se,p(m(x)("admin.dashboard.noDataAvailable")),1))]))}})`
  return replaceModuleSection(
    source,
    'xe={class:"card p-4"}',
    ';export{Pe as D,ze as _};',
    replacement,
    'dashboard trend module',
  )
}

export function nativeCostDashboardOverrides(assetsDirectory) {
  const overrides = dashboardSpendShellOverrides(assetsDirectory)
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${NATIVE_COST_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  for (const name of DECLARED_COST_OVERRIDE_FILES) {
    const source = overrides.get(name)
    overrides.set(name, name.startsWith('index-') ? patchNativeCostLocale(source) : patchNativeCostModule(source, name))
  }
  overrides.set('DashboardView-CYAPqspo.js', patchDashboardV9(overrides.get('DashboardView-CYAPqspo.js')))
  overrides.set(
    TOKEN_USAGE_TREND_ASSET,
    patchDashboardTrendModule(readFileSync(resolve(assetsDirectory, TOKEN_USAGE_TREND_ASSET), 'utf8')),
  )
  return overrides
}

export function declaredCostDashboardOverrides(assetsDirectory) {
  const overrides = dashboardSpendShellOverrides(assetsDirectory)
  overrides.set('DashboardView-CYAPqspo.js', patchDashboardV9(overrides.get('DashboardView-CYAPqspo.js')))
  overrides.set(
    TOKEN_USAGE_TREND_ASSET,
    patchDashboardTrendModule(readFileSync(resolve(assetsDirectory, TOKEN_USAGE_TREND_ASSET), 'utf8')),
  )
  for (const name of DECLARED_COST_OVERRIDE_FILES.filter(name => name.startsWith('index-'))) {
    overrides.set(name, patchDashboardTrendLocale(overrides.get(name)))
  }
  return overrides
}

const BILLING_CLARITY_USAGE_ASSET = 'GroupDistributionChart.vue_vue_type_script_setup_true_lang-DfCAq0pi.js'
const BILLING_CLARITY_ACCOUNTS_ASSET = 'AccountsView-CM4yOmZE.js'
const BILLING_CLARITY_FORMATTER_ASSET = 'EndpointDistributionChart.vue_vue_type_script_setup_true_lang-DOhczKYp.js'
const BILLING_CLARITY_USAGE_VIEW_ASSET = 'UsageView-dsXbJO6P.js'

export function patchBillingClarityUsageModule(source) {
  const replacements = [
    [
      '"cell-account":b(({row:n})=>{var k;return[e("span",ps,s(((k=n.account)==null?void 0:k.name)||"-"),1)]})',
      '"cell-account":b(({row:n})=>{var k;return[e("div",{class:"flex items-baseline gap-1 text-sm"},[e("span",null,s(((k=n.account)==null?void 0:k.name)||"-"),1),e("span",{class:"font-mono text-xs text-gray-500 dark:text-gray-400"},"#"+s(n.account_id),1)])]})',
      'usage account identity',
    ],
    [
      'r("div",_a," A $"+s(c(n)?.toFixed(6)??"待确认"),1)',
      'r("div",_a,s(a(o)("usage.accountBilled"))+" "+s(c(n)==null?a(o)("usage.accountCostPending"):"$"+c(n).toFixed(6)),1)',
      'usage inline account cost label',
    ],
    ['"usage.rate"', '"usage.userRateMultiplier"', 'usage user rate label'],
    [
      's(l.value?.upstream_rate_multiplier==null?"待确认":a(Be)(l.value.upstream_rate_multiplier)+"x")',
      's(l.value?.upstream_rate_multiplier==null?a(o)("usage.accountCostPending"):a(Be)(l.value.upstream_rate_multiplier)+"x")',
      'usage historical upstream rate fallback',
    ],
    [
      'e("div",Ao,[e("span",Eo,s(a(o)("usage.accountMultiplier")),1),e("span",Ro,s(l.value?.upstream_rate_multiplier==null?a(o)("usage.accountCostPending"):a(Be)(l.value.upstream_rate_multiplier)+"x"),1)]),e("div",Oo,[e("span",No,s(a(o)("usage.accountBilled")),1),e("span",Uo," $"+s(c({total_cost:(ye=l.value)==null?void 0:ye.total_cost,account_stats_cost:(ve=l.value)==null?void 0:ve.account_stats_cost,upstream_rate_multiplier:(be=l.value)==null?void 0:be.upstream_rate_multiplier})?.toFixed(6)??"待确认"),1)])',
      'e("div",Ao,[e("span",{class:"text-gray-400",title:a(o)("usage.accountMultiplierHint")},s(a(o)("usage.accountMultiplier")),9,["title"]),e("span",Ro,s(l.value?.upstream_rate_multiplier==null?a(o)("usage.accountCostPending"):a(Be)(l.value.upstream_rate_multiplier)+"x"),1)]),e("div",Oo,[e("span",No,s(a(o)("usage.providerAccount")),1),e("span",Uo,s((l.value?.account?.name||"-")+" #"+(l.value?.account_id??"-")),1)]),e("div",Oo,[e("span",No,s(a(o)("usage.accountBilled")),1),e("span",Uo,s(c({total_cost:(ye=l.value)==null?void 0:ye.total_cost,account_stats_cost:(ve=l.value)==null?void 0:ve.account_stats_cost,upstream_rate_multiplier:(be=l.value)==null?void 0:be.upstream_rate_multiplier})==null?a(o)("usage.accountCostPending"):"$"+c({total_cost:(ye=l.value)==null?void 0:ye.total_cost,account_stats_cost:(ve=l.value)==null?void 0:ve.account_stats_cost,upstream_rate_multiplier:(be=l.value)==null?void 0:be.upstream_rate_multiplier}).toFixed(6)),1)])',
      'usage Provider Account detail',
    ],
  ]
  return replacements.reduce(
    (output, [before, after, label]) => replaceExactlyOnce(output, before, after, label),
    source,
  )
}

export function patchBillingClarityAccountsModule(source) {
  const replacements = [
    [
      'ot=["today_stats","proxy","notes","priority","scheduler_score","rate_multiplier"]',
      'ot=["today_stats","proxy","notes","priority","scheduler_score"]',
      'account default hidden columns',
    ],
    [
      'Zs="scheduler-score-hidden-by-default"',
      'Zs="billing-rate-visible-by-default"',
      'account column layout version',
    ],
    [
      'localStorage.getItem(Xs)!==Zs&&(lt.add("scheduler_score"),localStorage.setItem(bn,JSON.stringify([...lt])),localStorage.setItem(Xs,Zs))',
      'localStorage.getItem(Xs)!==Zs&&(lt.delete("rate_multiplier"),localStorage.setItem(bn,JSON.stringify([...lt])),localStorage.setItem(Xs,Zs))',
      'account column layout migration',
    ],
  ]
  return replacements.reduce(
    (output, [before, after, label]) => replaceExactlyOnce(output, before, after, label),
    source,
  )
}

export function patchBillingClarityFormatterModule(source) {
  return replaceExactlyOnce(
    source,
    'function St(r){return r<1e-4?r.toPrecision(2):r.toFixed(4).replace(/(\\.\\d{2}\\d*?)0+$/,"$1")}',
    'function St(r){return r===0?"0.00":r<1e-4?r.toPrecision(2):r.toFixed(4).replace(/(\\.\\d{2}\\d*?)0+$/,"$1")}',
    'zero multiplier formatter',
  )
}

export function patchBillingClarityLocale(source) {
  const english = source.includes('userBilled:"User billed"')
  const chinese = source.includes('userBilled:"用户扣费"')
  if (english === chinese) {
    throw new Error('billing clarity locale seam changed')
  }
  const replacements = english ? [
    [
      'userBilled:"User billed",accountBilled:"Account billed",resetNow:"Now",resetPending:"Pending refresh",accountMultiplier:"Upstream declared rate",avgDuration:',
      'userBilled:"User billed",accountBilled:"Account cost",resetNow:"Now",resetPending:"Pending refresh",userRateMultiplier:"User billing rate",accountMultiplier:"Request-time upstream rate",accountMultiplierHint:"The effective upstream-declared rate saved when this request started, including the declared peak window. Current account settings do not rewrite this bill.",accountCostPending:"Pending calculation",providerAccount:"Provider Account",avgDuration:',
      'English usage billing labels',
    ],
    [
      'billingRateMultiplier:"Billing Rate",upstreamBillingRate:"Upstream Declared Rate"',
      'billingRateMultiplier:"Current Account Rate",upstreamBillingRate:"Upstream Declared Rate (Observed)"',
      'English account rate columns',
    ],
    [
      'trustWarning:"This rate is declared by the upstream site for the current API key. Sub2API cannot verify that it matches actual charges. The upstream site or an intermediary may return forged, stale, or modified data. Verify it against bills, balance changes, and actual usage."',
      'trustWarning:\'This is an observed value. Probing does not change the current account rate. Only "Sync upstream declared rate" writes the successfully detected base rate, excluding peak hours, to the current account rate for future requests. Sub2API cannot verify that the upstream declaration matches actual charges; verify it against bills, balance changes, and actual usage.\'',
      'English upstream rate warning',
    ],
    ['manualProbe:"Probe upstream rate now"', 'manualProbe:"Probe upstream rate now (does not sync automatically)"', 'English probe action'],
    [
      'billingRateMultiplier:"Billing Rate Multiplier",billingRateMultiplierHint:"Local account billing and scheduling; cost reports independently use valid upstream declared rates"',
      'billingRateMultiplier:"Current Account Billing Rate",billingRateMultiplierHint:"Used for local account scheduling and quota accounting. Provider Account cost reports use the request-time upstream declaration instead."',
      'English account rate field',
    ],
  ] : [
    [
      'userBilled:"用户扣费",accountBilled:"账号计费",resetNow:"现在",resetPending:"待刷新",accountMultiplier:"上游声明倍率",avgDuration:',
      'userBilled:"用户扣费",accountBilled:"账号成本",resetNow:"现在",resetPending:"待刷新",userRateMultiplier:"用户计费倍率",accountMultiplier:"请求时上游倍率",accountMultiplierHint:"请求发起时保存的上游声明有效倍率，包含当时适用的高峰系数；当前账号设置不会改写这笔账单。",accountCostPending:"待核算",providerAccount:"上游账号",avgDuration:',
      'Chinese usage billing labels',
    ],
    [
      'billingRateMultiplier:"账号倍率",upstreamBillingRate:"上游声明倍率"',
      'billingRateMultiplier:"当前账号倍率",upstreamBillingRate:"上游声明倍率（观测）"',
      'Chinese account rate columns',
    ],
    [
      'trustWarning:"此倍率由上游站点针对当前 API Key 自行声明。Sub2API 无法验证该值是否与实际扣费一致；上游站点或中间代理可能返回伪造、过期或被篡改的数据。请结合账单、余额变化和实际用量自行核验。"',
      'trustWarning:"这是观测值；手动探测不会修改当前账号倍率。只有开启“同步上游声明倍率”后，成功探测才会把不含高峰的基准倍率写入当前账号倍率，并且只影响后续请求。该数据由上游站点声明，Sub2API 无法验证它是否与实际扣费一致，请结合账单、余额变化和实际用量复核。"',
      'Chinese upstream rate warning',
    ],
    ['manualProbe:"立即探测上游倍率"', 'manualProbe:"立即探测上游倍率（不自动同步）"', 'Chinese probe action'],
    [
      'billingRateMultiplier:"账号计费倍率",billingRateMultiplierHint:"用于本地账号计费与调度；成本报表独立按有效上游声明倍率计算"',
      'billingRateMultiplier:"当前账号计费倍率",billingRateMultiplierHint:"用于本地账号调度和额度核算；Provider Account 成本报表改用请求时保存的上游声明倍率。"',
      'Chinese account rate field',
    ],
  ]
  return replacements.reduce(
    (output, [before, after, label]) => replaceExactlyOnce(output, before, after, label),
    source,
  )
}

export function writeCurrentPasswordRecoveryVariant(assetsDirectory) {
  const sourceDirectory = resolve(assetsDirectory, NATIVE_COST_PASSWORD_RECOVERY_DIRECTORY)
  const targetDirectory = resolve(assetsDirectory, CURRENT_PASSWORD_RECOVERY_DIRECTORY)
  rmSync(targetDirectory, { recursive: true, force: true })
  cpSync(sourceDirectory, targetDirectory, { recursive: true })

  const runtimeFiles = ['ForgotPasswordView.js', 'ResetPasswordView.js', '_plugin-vue_export-helper-BzMx7MZG.js']
  const before = `/assets/${NATIVE_COST_SHELL_DIRECTORY}/`
  const after = `/assets/${CN_PROVIDER_SHELL_DIRECTORY}/`
  for (const name of runtimeFiles) {
    const path = resolve(targetDirectory, name)
    const source = readFileSync(path, 'utf8')
    if (!source.includes(before) || source.includes(after)) {
      throw new Error(`password recovery runtime seam changed: ${name}`)
    }
    writeFileSync(path, source.replaceAll(before, after))
  }
  return targetDirectory
}

export function verifyCurrentCNProviderAdminVariant(assetsDirectory) {
  const targetDirectory = resolve(assetsDirectory, BILLING_CLARITY_CN_PROVIDER_ADMIN_DIRECTORY)
  const entry = readFileSync(resolve(targetDirectory, 'cn-provider-admin.js'), 'utf8')
  const required = [
    '/assets/cn-provider-admin-v8/cn-provider-admin.css',
    '/admin/accounts',
    '/admin/groups',
    '/admin/channels/pricing',
    '/admin/channels/monitor',
    '/admin/ops',
    '/admin/subscriptions',
  ]
  for (const marker of required) {
    if (!entry.includes(marker)) throw new Error(`current CN Provider Admin is missing: ${marker}`)
  }
  if (entry.includes('/assets/cn-provider-admin-v7/cn-provider-admin.css')) {
    throw new Error('current CN Provider Admin still loads the immutable v7 stylesheet')
  }
  return targetDirectory
}

export function billingClarityShellOverrides(assetsDirectory) {
  const overrides = declaredCostDashboardOverrides(assetsDirectory)
  for (const [name, target] of Object.entries(PASSWORD_RECOVERY_PAGES)) {
    const currentTarget = `${CURRENT_PASSWORD_RECOVERY_DIRECTORY}/${basename(target)}`
    readFileSync(resolve(assetsDirectory, currentTarget), 'utf8')
    overrides.set(name, `export { default } from '../${currentTarget}';\n`)
  }
  overrides.set(BILLING_CLARITY_USAGE_ASSET, patchBillingClarityUsageModule(overrides.get(BILLING_CLARITY_USAGE_ASSET)))
  overrides.set(BILLING_CLARITY_ACCOUNTS_ASSET, patchBillingClarityAccountsModule(overrides.get(BILLING_CLARITY_ACCOUNTS_ASSET)))
  overrides.set(BILLING_CLARITY_FORMATTER_ASSET, patchBillingClarityFormatterModule(overrides.get(BILLING_CLARITY_FORMATTER_ASSET)))
  overrides.set(
    BILLING_CLARITY_USAGE_VIEW_ASSET,
    replaceExactlyOnce(overrides.get(BILLING_CLARITY_USAGE_VIEW_ASSET), '"usage.rate"', '"usage.userRateMultiplier"', 'usage export rate label'),
  )
  for (const name of DECLARED_COST_OVERRIDE_FILES.filter(name => name.startsWith('index-'))) {
    overrides.set(name, patchBillingClarityLocale(overrides.get(name)))
  }
  return overrides
}

const bootstrapNeedle = 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app")'
const onlineImageAccessClient =
  'window.__ZERO_ONE_ONLINE_IMAGE_ACCESS__?.setClient((page,signal)=>n.get("/keys",{params:{page,page_size:100,status:"active",sort_by:"created_at",sort_order:"desc"},signal}).then(response=>{const payload=response?.data??response;return payload?.data?.items?payload.data:payload}))'
const placeholderLoader = 'import("./zero-one-cn-provider-route-placeholder-v1.js")'
const onlineImageRouteNeedle = '},{path:"/batch-image"'
const onlineImageRouteReplacement = '},{path:"/images",name:"ImageGeneration",component:()=>import("./zero-one-online-image-route-placeholder-v1.js"),meta:{requiresAuth:!0,requiresAdmin:!1,title:"在线生图",description:"使用已开启生图权限的 API Key 生成图片，并在浏览器里直接预览或下载。"}},{path:"/batch-image"'
const priorRouteLoaders = [
  {
    surface: 'groups',
    pattern: /({path:"\/admin\/groups",name:"AdminGroups",component:)\(\)=>(y\(\(\)=>import\("\.\/GroupsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'accounts',
    pattern: /({path:"\/admin\/accounts",name:"AdminAccounts",component:)\(\)=>(y\(\(\)=>import\("\.\/AccountsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
]

const routeLoaders = [
  ...priorRouteLoaders,
  {
    surface: 'channels',
    pattern: /({path:"\/admin\/channels\/pricing",name:"AdminChannels",component:)\(\)=>(y\(\(\)=>import\("\.\/ChannelsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'channel-monitor',
    pattern: /({path:"\/admin\/channels\/monitor",name:"AdminChannelMonitor",component:)\(\)=>(y\(\(\)=>import\("\.\/ChannelMonitorView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'ops',
    pattern: /({path:"\/admin\/ops",name:"AdminOps",component:)\(\)=>(y\(\(\)=>import\("\.\/OpsDashboard-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
  {
    surface: 'subscriptions',
    pattern: /({path:"\/admin\/subscriptions",name:"AdminSubscriptions",component:)\(\)=>(y\(\(\)=>import\("\.\/SubscriptionsView-[^"]+\.js"\),__vite__mapDeps\(\[[^\]]+\]\)\))/,
  },
]

function patchShellRoutes(source, includeOnlineImage, includeOnlineImageAccess, loaders) {
  const occurrences = source.split(bootstrapNeedle).length - 1
  if (occurrences !== 1) {
    throw new Error(`approved Console bootstrap seam count changed: expected 1, found ${occurrences}`)
  }
  const bootstrapReplacement = includeOnlineImageAccess
    ? `await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),${onlineImageAccessClient},window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()`
    : 'await Na(),e.use(ae),e.use(D),await ae.isReady(),e.mount("#app"),window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.()'
  let output = source.replace(bootstrapNeedle, bootstrapReplacement)
  for (const { surface, pattern } of loaders) {
    const matches = [...output.matchAll(new RegExp(pattern.source, 'g'))]
    if (matches.length !== 1) {
      throw new Error(`approved ${surface} route seam count changed: expected 1, found ${matches.length}`)
    }
    output = output.replace(pattern, (_match, prefix) =>
      `${prefix}()=>${placeholderLoader}`,
    )
  }
  if (includeOnlineImage) {
    const onlineImageRouteOccurrences = output.split(onlineImageRouteNeedle).length - 1
    if (onlineImageRouteOccurrences !== 1) {
      throw new Error(`approved online image route seam count changed: expected 1, found ${onlineImageRouteOccurrences}`)
    }
    output = output.replace(onlineImageRouteNeedle, onlineImageRouteReplacement)
  }
  return output
}

export function patchLegacyApprovedShell(source) {
  return patchShellRoutes(source, false, false, priorRouteLoaders)
}

export function patchPreviousApprovedShell(source) {
  return patchShellRoutes(source, true, false, priorRouteLoaders)
}

export function patchPriorApprovedShell(source) {
  return patchShellRoutes(source, true, true, priorRouteLoaders)
}

export function patchApprovedShell(source) {
  return patchShellRoutes(source, true, true, routeLoaders)
}

function writeShellVariant(consoleAssetsDirectory, directory, output, excludedAssets = new Set()) {
  const targetDirectory = resolve(consoleAssetsDirectory, directory)
  const targetPath = resolve(targetDirectory, APPROVED_SHELL_SOURCE)
  rmSync(targetDirectory, { recursive: true, force: true })
  mkdirSync(targetDirectory, { recursive: true })
  for (const entry of readdirSync(consoleAssetsDirectory, { withFileTypes: true })) {
    if (
      !entry.isFile() ||
      entry.name === APPROVED_SHELL_SOURCE ||
      excludedAssets.has(entry.name)
    ) continue
    symlinkSync(`../${entry.name}`, resolve(targetDirectory, entry.name))
  }
  writeFileSync(targetPath, output)
  return targetPath
}

export function buildCNProviderShell(consoleAssetsDirectory) {
  const sourcePath = resolve(consoleAssetsDirectory, APPROVED_SHELL_SOURCE)
  const source = readFileSync(sourcePath, 'utf8')
  const legacyTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    LEGACY_CN_PROVIDER_SHELL_DIRECTORY,
    patchLegacyApprovedShell(source),
    new Set([
      'zero-one-online-image-route-placeholder-v1.js',
      'zero-one-settings-unified-save-v1.js',
    ]),
  )
  const previousTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY,
    patchPreviousApprovedShell(source),
  )
  const priorTargetPath = writeShellVariant(
    consoleAssetsDirectory,
    PRIOR_CN_PROVIDER_SHELL_DIRECTORY,
    patchPriorApprovedShell(source),
  )
  const targetPath = writeShellVariant(
    consoleAssetsDirectory,
    PRE_RECOVERY_SHELL_DIRECTORY,
    patchApprovedShell(source),
  )
  const recoveryOverrides = recoveryShellOverrides(consoleAssetsDirectory)
  const recoveryTargetPath = writeShellVariant(consoleAssetsDirectory, RECOVERY_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(recoveryOverrides.keys()))
  for (const [name, content] of recoveryOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, RECOVERY_SHELL_DIRECTORY, name), content)
  }
  const declaredCostOverrides = declaredCostShellOverrides(consoleAssetsDirectory)
  const declaredCostTargetPath = writeShellVariant(consoleAssetsDirectory, DECLARED_COST_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(declaredCostOverrides.keys()))
  for (const [name, content] of declaredCostOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, DECLARED_COST_SHELL_DIRECTORY, name), content)
  }
  const dashboardSpendOverrides = dashboardSpendShellOverrides(consoleAssetsDirectory)
  const dashboardSpendTargetPath = writeShellVariant(consoleAssetsDirectory, DASHBOARD_SPEND_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(dashboardSpendOverrides.keys()))
  for (const [name, content] of dashboardSpendOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, DASHBOARD_SPEND_SHELL_DIRECTORY, name), content)
  }
  const userClarityOverrides = dashboardUserClarityShellOverrides(consoleAssetsDirectory)
  const userClarityTargetPath = writeShellVariant(consoleAssetsDirectory, DASHBOARD_USER_CLARITY_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(userClarityOverrides.keys()))
  for (const [name, content] of userClarityOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, DASHBOARD_USER_CLARITY_SHELL_DIRECTORY, name), content)
  }
  const nativeCostOverrides = nativeCostDashboardOverrides(consoleAssetsDirectory)
  const nativeCostTargetPath = writeShellVariant(consoleAssetsDirectory, NATIVE_COST_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(nativeCostOverrides.keys()))
  for (const [name, content] of nativeCostOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, NATIVE_COST_SHELL_DIRECTORY, name), content)
  }
  writeCurrentPasswordRecoveryVariant(consoleAssetsDirectory)
  verifyCurrentCNProviderAdminVariant(consoleAssetsDirectory)
  const currentOverrides = billingClarityShellOverrides(consoleAssetsDirectory)
  const currentTargetPath = writeShellVariant(consoleAssetsDirectory, CN_PROVIDER_SHELL_DIRECTORY,
    patchApprovedShell(source), new Set(currentOverrides.keys()))
  for (const [name, content] of currentOverrides) {
    writeFileSync(resolve(consoleAssetsDirectory, CN_PROVIDER_SHELL_DIRECTORY, name), content)
  }
  return { sourcePath, legacyTargetPath, previousTargetPath, priorTargetPath,
    preRecoveryTargetPath: targetPath, recoveryTargetPath, declaredCostTargetPath,
    dashboardSpendTargetPath, userClarityTargetPath, nativeCostTargetPath,
    targetPath: currentTargetPath }

}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (invokedPath === fileURLToPath(import.meta.url)) {
  const scriptDirectory = dirname(fileURLToPath(import.meta.url))
  const consoleAssetsDirectory = resolve(scriptDirectory, 'recovered-frontend/console/assets')
  const { targetPath } = buildCNProviderShell(consoleAssetsDirectory)
  console.log(`CN Provider approved shell built: ${targetPath}`)
}
