import { W as e, a4 as Ft, af as Ht, ag as Vt, r as ct, ah as Qt, d as At, c as xt, w as Z, b as jt, o as Jt, f as U, g as C, A as X, z as P, q as N, N as ot, j as Q, _ as G, n as z, B as j, T as Yt, P as Zt, E as it, a as x, s as k, C as tt, e as S, l as Xt, h as K, x as ta, m as aa, v as ea, F as na, p as sa, i as oa, y as ia } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { _ as ra } from "./BaseDialog.vue_vue_type_script_setup_true_lang-DwR6Fyok.js";
async function ca() {
  const { data: t } = await e.get("/admin/dashboard/stats");
  return t;
}
async function ua() {
  const { data: t } = await e.get("/admin/dashboard/realtime");
  return t;
}
async function da(t) {
  const { data: a } = await e.get("/admin/dashboard/trend", { params: t });
  return a;
}
async function la(t) {
  const { data: a } = await e.get("/admin/dashboard/models", { params: t });
  return a;
}
async function pa(t) {
  const { data: a } = await e.get("/admin/dashboard/groups", { params: t });
  return a;
}
async function Cu(t) {
  const { data: a } = await e.get("/admin/dashboard/user-breakdown", {
    params: t
  });
  return a;
}
async function ma(t) {
  const { data: a } = await e.get("/admin/dashboard/snapshot-v2", {
    params: t
  });
  return a;
}
async function ga(t) {
  const { data: a } = await e.get("/admin/dashboard/api-keys-trend", {
    params: t
  });
  return a;
}
async function fa(t) {
  const { data: a } = await e.get("/admin/dashboard/users-trend", {
    params: t
  });
  return a;
}
async function ya(t) {
  const { data: a } = await e.get("/admin/dashboard/users-ranking", {
    params: t
  });
  return a;
}
async function ha(t) {
  const { data: a } = await e.post("/admin/dashboard/users-usage", {
    user_ids: t
  });
  return a;
}
async function wa(t) {
  const { data: a } = await e.post(
    "/admin/dashboard/api-keys-usage",
    {
      api_key_ids: t
    }
  );
  return a;
}
const ba = {
  getStats: ca,
  getRealtimeMetrics: ua,
  getUsageTrend: da,
  getModelStats: la,
  getGroupStats: pa,
  getSnapshotV2: ma,
  getApiKeyUsageTrend: ga,
  getUserUsageTrend: fa,
  getUserSpendingRanking: ya,
  getBatchUsersUsage: ha,
  getBatchApiKeysUsage: wa
}, _a = [{ id: "anthropic", display_name: "Anthropic", gateway: "anthropic", cn_provider: !1, litellm_provider: "anthropic" }, { id: "openai", display_name: "OpenAI", gateway: "openai", cn_provider: !1, litellm_provider: "openai" }, { id: "gemini", display_name: "Gemini", gateway: "gemini", cn_provider: !1, litellm_provider: "gemini" }, { id: "antigravity", display_name: "Antigravity", gateway: "antigravity", cn_provider: !1, litellm_provider: "anthropic" }, { id: "grok", display_name: "Grok", gateway: "openai", cn_provider: !1, litellm_provider: "xai" }, { id: "kimi", display_name: "Kimi", gateway: "openai", cn_provider: !0, litellm_provider: "moonshot", multi_protocol: { default_mode: "payg", routing: "by_inbound", modes: [{ mode: "payg", base_urls: { anthropic: "https://api.moonshot.cn/anthropic", chat_completions: "https://api.moonshot.cn/v1", responses: "https://api.moonshot.cn/v1" } }, { mode: "coding", base_urls: { anthropic: "https://api.kimi.com/coding", chat_completions: "https://api.kimi.com/coding/v1", responses: "https://api.kimi.com/coding/v1" } }] } }, { id: "zhipu", display_name: "Zhipu GLM", gateway: "openai", cn_provider: !0, litellm_provider: "zhipu", multi_protocol: { default_mode: "payg", routing: "by_inbound", modes: [{ mode: "payg", base_urls: { anthropic: "https://open.bigmodel.cn/api/anthropic", chat_completions: "https://open.bigmodel.cn/api/paas/v4" } }, { mode: "coding", base_urls: { anthropic: "https://open.bigmodel.cn/api/anthropic", chat_completions: "https://open.bigmodel.cn/api/coding/paas/v4" } }] } }, { id: "deepseek", display_name: "DeepSeek", gateway: "openai", cn_provider: !0, litellm_provider: "deepseek", multi_protocol: { default_mode: "payg", routing: "by_inbound", responses_path: "/responses", modes: [{ mode: "payg", base_urls: { anthropic: "https://api.deepseek.com/anthropic", chat_completions: "https://api.deepseek.com", responses: "https://api.deepseek.com" } }] } }, { id: "minimax", display_name: "MiniMax", gateway: "openai", cn_provider: !0, litellm_provider: "minimax", multi_protocol: { default_mode: "payg", routing: "by_inbound", modes: [{ mode: "payg", base_urls: { anthropic: "https://api.minimaxi.com/anthropic", chat_completions: "https://api.minimaxi.com/v1", responses: "https://api.minimaxi.com/v1" } }, { mode: "coding", base_urls: { anthropic: "https://api.minimaxi.com/anthropic", chat_completions: "https://api.minimaxi.com/v1", responses: "https://api.minimaxi.com/v1" } }] } }, { id: "opencode_go", display_name: "OpenCode", gateway: "openai", cn_provider: !1, litellm_provider: "opencode-go", multi_protocol: { default_mode: "go", routing: "by_model", modes: [{ mode: "go", base_urls: { anthropic: "https://opencode.ai/zen/go", chat_completions: "https://opencode.ai/zen/go/v1", responses: "https://opencode.ai/zen/go/v1" }, protocol_rules: [{ pattern: "grok-*", protocol: "responses" }, { pattern: "gpt-*", protocol: "responses" }, { pattern: "muse-spark-*", protocol: "responses" }, { pattern: "minimax-*", protocol: "anthropic" }, { pattern: "qwen*", protocol: "anthropic" }] }, { mode: "zen", base_urls: { anthropic: "https://opencode.ai/zen", chat_completions: "https://opencode.ai/zen/v1", responses: "https://opencode.ai/zen/v1" }, protocol_rules: [{ pattern: "grok-*", protocol: "responses" }, { pattern: "gpt-*", protocol: "responses" }, { pattern: "muse-spark-*", protocol: "responses" }, { pattern: "claude-*", protocol: "anthropic" }, { pattern: "qwen3.8-max", protocol: "chat_completions" }, { pattern: "qwen*", protocol: "anthropic" }] }] } }, { id: "typesafe", display_name: "TypeSafe / Jev", gateway: "anthropic", cn_provider: !1, litellm_provider: "typesafe" }, { id: "command_code", display_name: "Command Code", gateway: "openai", cn_provider: !1, multi_protocol: { default_mode: "payg", routing: "by_model", model_catalog: !0, modes: [{ mode: "payg", base_urls: { anthropic: "https://api.commandcode.ai/provider", chat_completions: "https://api.commandcode.ai/provider/v1", responses: "https://api.commandcode.ai/provider/v1" }, protocol_rules: [{ pattern: "claude-*", protocol: "anthropic" }, { pattern: "gpt-*", protocol: "responses", protocols: ["responses", "chat_completions"] }] }] } }, { id: "cline", display_name: "Cline", gateway: "openai", cn_provider: !1, multi_protocol: { default_mode: "payg", routing: "by_inbound", modes: [{ mode: "payg", base_urls: { chat_completions: "https://api.cline.bot/api/v1" } }] } }], va = ["anthropic", "gemini", "openai", "antigravity", "grok", "kimi", "zhipu", "deepseek", "minimax", "opencode_go", "typesafe", "command_code", "cline"], $a = {
  platforms: _a,
  composite_precedence: va
}, Sa = $a, Tt = Ft(Sa);
function It() {
  return Tt.value.platforms;
}
function Pt() {
  return It().map((t) => t.id);
}
function ut(t) {
  if (t)
    return Tt.value.platforms.find((a) => a.id === t);
}
function Au(t) {
  const a = ut(t == null ? void 0 : t.trim().toLowerCase());
  return a ? !!a.multi_protocol || ["anthropic", "openai", "gemini", "antigravity", "grok"].includes(a.id) : !1;
}
function xu(t) {
  var a, n;
  return !!((n = (a = ut(t == null ? void 0 : t.trim().toLowerCase())) == null ? void 0 : a.litellm_provider) != null && n.trim());
}
function ka(t) {
  var a;
  return ((a = ut(t)) == null ? void 0 : a.multi_protocol) ?? void 0;
}
function Tu(t, a) {
  const n = ka(t);
  if (!n) return;
  const s = (a ?? "").trim();
  return n.modes.find((o) => o.mode === s) ?? n.modes.find((o) => o.mode === n.default_mode) ?? n.modes[0];
}
async function Ca(t = 1, a = 20, n, s) {
  const o = {
    page: t,
    page_size: a,
    status: n == null ? void 0 : n.status,
    role: n == null ? void 0 : n.role,
    search: n == null ? void 0 : n.search,
    group_name: n == null ? void 0 : n.group_name,
    api_key_group_id: n == null ? void 0 : n.api_key_group_id,
    include_subscriptions: n == null ? void 0 : n.include_subscriptions,
    affiliate_view: n == null ? void 0 : n.affiliate_view,
    sort_by: n == null ? void 0 : n.sort_by,
    sort_order: n == null ? void 0 : n.sort_order
  };
  if (n != null && n.attributes)
    for (const [d, p] of Object.entries(n.attributes))
      p && (o[`attr[${d}]`] = p);
  const { data: u } = await e.get("/admin/users", {
    params: o,
    signal: s == null ? void 0 : s.signal
  });
  return u;
}
async function Aa(t, a = !1) {
  const n = a ? `/admin/users/${t}?include_deleted=true` : `/admin/users/${t}`, { data: s } = await e.get(n);
  return s;
}
async function xa(t) {
  const { data: a } = await e.post("/admin/users", t);
  return a;
}
async function dt(t, a) {
  const { data: n } = await e.put(`/admin/users/${t}`, a);
  return n;
}
async function Ta(t) {
  const { data: a } = await e.delete(`/admin/users/${t}`);
  return a;
}
async function Ia(t, a, n = "set", s) {
  const { data: o } = await e.post(`/admin/users/${t}/balance`, {
    balance: a,
    operation: n,
    notes: s || ""
  });
  return o;
}
async function Pa(t, a) {
  return dt(t, { concurrency: a });
}
async function Oa(t) {
  const { data: a } = await e.post(
    "/admin/users/batch-limits",
    t
  );
  return a;
}
async function Ma(t, a) {
  return dt(t, { status: a });
}
async function Ra(t) {
  const { data: a } = await e.get(`/admin/users/${t}/api-keys`);
  return a;
}
async function Ua(t, a = "month") {
  const { data: n } = await e.get(`/admin/users/${t}/usage`, {
    params: { period: a }
  });
  return n;
}
async function Ea(t, a = 1, n = 20, s) {
  const o = { page: a, page_size: n };
  s && (o.type = s);
  const { data: u } = await e.get(
    `/admin/users/${t}/balance-history`,
    { params: o }
  );
  return u;
}
async function Da(t, a, n) {
  const { data: s } = await e.post(
    `/admin/users/${t}/replace-group`,
    { old_group_id: a, new_group_id: n }
  );
  return s;
}
async function Ba(t, a) {
  const { data: n } = await e.post(
    `/admin/users/${t}/auth-identities`,
    a
  );
  return n;
}
async function La(t) {
  const { data: a } = await e.get(
    `/admin/users/${t}/platform-quotas`
  );
  return a;
}
async function za(t, a) {
  const { data: n } = await e.put(
    `/admin/users/${t}/platform-quotas`,
    { quotas: a }
  );
  return n;
}
async function Na(t, a, n) {
  const { data: s } = await e.post(
    `/admin/users/${t}/platform-quotas/reset`,
    { platform: a, window: n }
  );
  return s;
}
const Ka = {
  list: Ca,
  getById: Aa,
  create: xa,
  update: dt,
  delete: Ta,
  updateBalance: Ia,
  updateConcurrency: Pa,
  batchUpdateLimits: Oa,
  toggleStatus: Ma,
  getUserApiKeys: Ra,
  getUserUsageStats: Ua,
  getUserBalanceHistory: Ea,
  replaceGroup: Da,
  bindUserAuthIdentity: Ba,
  getPlatformQuotas: La,
  updatePlatformQuotas: za,
  resetPlatformQuotaWindow: Na
};
async function qa(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/groups", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function Ot(t) {
  const { data: a } = await e.get("/admin/groups/all", {
    params: t ? { platform: t } : void 0
  });
  return a;
}
async function Ga() {
  const { data: t } = await e.get("/admin/groups/all", {
    params: { include_inactive: !0 }
  });
  return t;
}
async function Wa(t) {
  return Ot(t);
}
async function Fa() {
  const { data: t } = await e.get("/admin/groups/live-capability");
  return t;
}
async function Ha(t) {
  const { data: a } = await e.get(`/admin/groups/${t}`);
  return a;
}
async function Va(t, a) {
  const { data: n } = await e.get(
    `/admin/groups/${t}/model-allowlist-candidates`,
    {
      params: a ? { platform: a } : void 0
    }
  );
  return n.models || [];
}
async function Qa(t) {
  const { data: a } = await e.post("/admin/groups", t);
  return a;
}
const at = /* @__PURE__ */ new Map();
function ja() {
  var t;
  try {
    const a = (t = globalThis.localStorage) == null ? void 0 : t.getItem("auth_user");
    if (!a) return null;
    const n = JSON.parse(a);
    if (typeof n != "object" || n === null) return null;
    const s = n.id;
    return typeof s != "number" || !Number.isSafeInteger(s) || s <= 0 ? null : String(s);
  } catch {
    return null;
  }
}
function Ja(t) {
  const a = ja();
  return a ? {
    adminID: a,
    key: `sub2api:admin:group-duplicate:${a}:${t}`
  } : null;
}
function Ya(t) {
  var a;
  try {
    return ((a = globalThis.sessionStorage) == null ? void 0 : a.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function _t(t, a) {
  var n, s;
  try {
    a ? (n = globalThis.sessionStorage) == null || n.setItem(t, a) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Za(t) {
  var o, u;
  const a = Ja(t);
  let n = a ? at.get(a.key) ?? Ya(a.key) : null;
  if (!n) {
    const d = ((u = (o = globalThis.crypto) == null ? void 0 : o.randomUUID) == null ? void 0 : u.call(o)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    n = `group-duplicate-${(a == null ? void 0 : a.adminID) ?? "unknown-admin"}-${t}-${d}`;
  }
  a && (at.set(a.key, n), _t(a.key, n));
  const { data: s } = await e.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": n }
  });
  return a && (at.delete(a.key), _t(a.key, null)), s;
}
async function Mt(t, a) {
  const { data: n } = await e.put(`/admin/groups/${t}`, a);
  return n;
}
async function Xa(t) {
  const { data: a } = await e.delete(`/admin/groups/${t}`);
  return a;
}
async function te(t, a) {
  return Mt(t, { status: a });
}
async function ae(t) {
  const { data: a } = await e.get(`/admin/groups/${t}/stats`);
  return a;
}
async function ee(t, a = 1, n = 20) {
  const { data: s } = await e.get(`/admin/groups/${t}/api-keys`, {
    params: { page: a, page_size: n }
  });
  return s;
}
async function ne(t) {
  const { data: a } = await e.get(`/admin/groups/${t}/composite-routes`);
  return a;
}
async function se(t, a) {
  const { data: n } = await e.post(
    `/admin/groups/${t}/composite-routes`,
    a
  );
  return n;
}
async function oe(t, a, n) {
  const { data: s } = await e.put(
    `/admin/groups/${t}/composite-routes/${a}`,
    n
  );
  return s;
}
async function ie(t, a) {
  const { data: n } = await e.delete(
    `/admin/groups/${t}/composite-routes/${a}`
  );
  return n;
}
async function re(t, a) {
  const { data: n } = await e.post(
    `/admin/groups/${t}/composite-routes/preview`,
    a
  );
  return n;
}
async function ce(t) {
  const { data: a } = await e.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return a;
}
async function ue(t) {
  const { data: a } = await e.put("/admin/groups/sort-order", {
    updates: t
  });
  return a;
}
async function de(t) {
  const { data: a } = await e.delete(`/admin/groups/${t}/rate-multipliers`);
  return a;
}
async function le(t, a) {
  const { data: n } = await e.put(
    `/admin/groups/${t}/rate-multipliers`,
    { entries: a }
  );
  return n;
}
async function pe(t) {
  const { data: a } = await e.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return a.filter((n) => n.rpm_override != null).map((n) => ({
    user_id: n.user_id,
    user_name: n.user_name,
    user_email: n.user_email,
    user_notes: n.user_notes,
    user_status: n.user_status,
    rpm_override: n.rpm_override
  }));
}
async function me(t, a) {
  const { data: n } = await e.put(
    `/admin/groups/${t}/rpm-overrides`,
    { entries: a }
  );
  return n;
}
async function ge(t) {
  const { data: a } = await e.delete(`/admin/groups/${t}/rpm-overrides`);
  return a;
}
async function fe() {
  const { data: t } = await e.get("/admin/groups/usage-summary");
  return t;
}
async function ye() {
  const { data: t } = await e.get("/admin/groups/capacity-summary");
  return t;
}
const he = {
  list: qa,
  getAll: Ot,
  getByPlatform: Wa,
  getAllIncludingInactive: Ga,
  getLiveCapability: Fa,
  getById: Ha,
  getModelAllowlistCandidates: Va,
  create: Qa,
  duplicate: Za,
  update: Mt,
  delete: Xa,
  toggleStatus: te,
  getStats: ae,
  getGroupApiKeys: ee,
  listCompositeRoutes: ne,
  createCompositeRoute: se,
  updateCompositeRoute: oe,
  deleteCompositeRoute: ie,
  previewCompositeRoute: re,
  getGroupRateMultipliers: ce,
  clearGroupRateMultipliers: de,
  batchSetGroupRateMultipliers: le,
  getGroupRPMOverrides: pe,
  clearGroupRPMOverrides: ge,
  batchSetGroupRPMOverrides: me,
  updateSortOrder: ue,
  getUsageSummary: fe,
  getCapacitySummary: ye
};
async function we(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/accounts", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function be(t = 1, a = 20, n, s) {
  var p;
  const o = {};
  s != null && s.etag && (o["If-None-Match"] = s.etag);
  const u = await e.get("/admin/accounts", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    headers: o,
    signal: s == null ? void 0 : s.signal,
    validateStatus: (l) => l >= 200 && l < 300 || l === 304
  }), d = typeof ((p = u.headers) == null ? void 0 : p.etag) == "string" ? u.headers.etag : null;
  return u.status === 304 ? {
    notModified: !0,
    etag: d,
    data: null
  } : {
    notModified: !1,
    etag: d,
    data: u.data
  };
}
async function _e(t) {
  const { data: a } = await e.get(`/admin/accounts/${t}`);
  return a;
}
async function ve(t) {
  const { data: a } = await e.post("/admin/accounts", t);
  return a;
}
const et = /* @__PURE__ */ new Map();
function rt(t) {
  return `sub2api:admin:account-duplicate:${t}`;
}
function $e(t) {
  var a;
  try {
    return ((a = globalThis.sessionStorage) == null ? void 0 : a.getItem(rt(t))) ?? null;
  } catch {
    return null;
  }
}
function vt(t, a) {
  var n, s;
  try {
    a ? (n = globalThis.sessionStorage) == null || n.setItem(rt(t), a) : (s = globalThis.sessionStorage) == null || s.removeItem(rt(t));
  } catch {
  }
}
async function Se(t) {
  var s, o;
  let a = et.get(t) ?? $e(t);
  if (!a) {
    const u = ((o = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : o.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `account-duplicate-${t}-${u}`;
  }
  et.set(t, a), vt(t, a);
  const { data: n } = await e.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return et.delete(t), vt(t, null), n;
}
async function Rt(t, a) {
  const { data: n } = await e.put(`/admin/accounts/${t}`, a);
  return n;
}
async function ke(t) {
  const { data: a } = await e.get(
    `/admin/accounts/${t}/grok-media-eligibility`
  );
  return a;
}
async function Ce(t, a) {
  const { data: n } = await e.put(
    `/admin/accounts/${t}/grok-media-eligibility`,
    { mode: a }
  );
  return n;
}
async function Ae(t) {
  const { data: a } = await e.post("/admin/accounts/check-mixed-channel", t);
  return a;
}
async function xe(t) {
  const { data: a } = await e.delete(`/admin/accounts/${t}`);
  return a;
}
async function Te(t, a) {
  return Rt(t, { status: a });
}
async function Ie(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/test`);
  return a;
}
async function Pe(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/refresh`);
  return "account" in a ? a : { account: a };
}
async function Oe(t, a) {
  const { data: n } = await e.post(
    `/admin/accounts/${t}/apply-oauth-credentials`,
    a
  );
  return n;
}
async function Me(t, a = 30) {
  const { data: n } = await e.get(`/admin/accounts/${t}/stats`, {
    params: { days: a }
  });
  return n;
}
async function Re(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/clear-error`);
  return a;
}
async function Ue(t, a, n) {
  const s = {};
  a && (s.source = a), n && (s.force = "true");
  const { data: o } = await e.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return o;
}
async function Ee(t, a) {
  const { data: n } = await e.post("/admin/accounts/usage/batch", {
    account_ids: t,
    force: a === !0
  });
  return n;
}
async function De(t) {
  const { data: a } = await e.post(
    `/admin/accounts/${t}/clear-rate-limit`
  );
  return a;
}
async function Be(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/recover-state`);
  return a;
}
async function Le(t) {
  const { data: a } = await e.post(
    `/admin/accounts/${t}/reset-quota`
  );
  return a;
}
async function ze(t) {
  const { data: a } = await e.get(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return a;
}
async function Ne(t) {
  const { data: a } = await e.delete(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return a;
}
async function Ke(t, a) {
  const { data: n } = await e.post(t, a);
  return n;
}
async function qe(t, a) {
  const { data: n } = await e.post(t, a);
  return n;
}
async function Ge(t) {
  const { data: a } = await e.post("/admin/accounts/batch", { accounts: t });
  return a;
}
async function We(t) {
  const { data: a } = await e.post("/admin/accounts/batch-update-credentials", t);
  return a;
}
async function Fe(t, a) {
  const n = Array.isArray(t) ? {
    account_ids: t,
    ...a ?? {}
  } : t, { data: s } = await e.post("/admin/accounts/bulk-update", n);
  return s;
}
async function He(t) {
  const { data: a } = await e.get(`/admin/accounts/${t}/today-stats`);
  return a;
}
async function Ve(t) {
  const { data: a } = await e.post("/admin/accounts/today-stats/batch", {
    account_ids: t
  });
  return a;
}
async function Qe(t, a) {
  const { data: n } = await e.post(`/admin/accounts/${t}/schedulable`, {
    schedulable: a
  });
  return n;
}
async function je(t) {
  const { data: a } = await e.get(`/admin/accounts/${t}/models`);
  return a;
}
async function Je(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/models/sync-upstream`);
  return a;
}
async function Ye(t) {
  const { data: a } = await e.post("/admin/accounts/models/sync-upstream-preview", t);
  return a;
}
async function Ze(t) {
  const { data: a } = await e.post("/admin/accounts/sync/crs/preview", t);
  return a;
}
async function Xe(t) {
  const { data: a } = await e.post("/admin/accounts/sync/crs", t, {
    timeout: 18e4
    // 180s timeout: sync refreshes each existing account's OAuth token serially
  });
  return a;
}
async function tn(t) {
  const a = {};
  if (t != null && t.ids && t.ids.length > 0)
    a.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { platform: s, type: o, status: u, group: d, privacy_mode: p, search: l, sort_by: m, sort_order: w } = t.filters;
    s && (a.platform = s), o && (a.type = o), u && (a.status = u), d && (a.group = d), p && (a.privacy_mode = p), l && (a.search = l), m && (a.sort_by = m), w && (a.sort_order = w);
  }
  (t == null ? void 0 : t.includeProxies) === !1 && (a.include_proxies = "false");
  const { data: n } = await e.get("/admin/accounts/data", { params: a });
  return n;
}
async function an(t) {
  const { data: a } = await e.post("/admin/accounts/data", {
    data: t.data,
    skip_default_group_bind: t.skip_default_group_bind
  });
  return a;
}
async function en(t) {
  const { data: a } = await e.post("/admin/accounts/import/codex-session", t, {
    timeout: 12e4
    // 120s timeout for large session imports
  });
  return a;
}
async function nn(t) {
  const { data: a } = await e.post("/admin/openai/create-from-codex-pat", t);
  return a;
}
async function sn() {
  const { data: t } = await e.get(
    "/admin/accounts/antigravity/default-model-mapping"
  );
  return t;
}
async function on(t, a, n = "/admin/openai/refresh-token", s) {
  const o = {
    refresh_token: t
  };
  a && (o.proxy_id = a), s && (o.client_id = s);
  const { data: u } = await e.post(n, o);
  return u;
}
async function rn(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/revert-proxy-fallback`);
  return a;
}
async function cn(t) {
  const { data: a } = await e.post("/admin/accounts/batch-delete", {
    account_ids: t
  });
  return a;
}
async function un(t) {
  const { data: a } = await e.post("/admin/accounts/batch-clear-error", {
    account_ids: t
  });
  return a;
}
async function dn(t) {
  const { data: a } = await e.post("/admin/accounts/batch-refresh", {
    account_ids: t
  }, {
    timeout: 12e4
    // 120s timeout for large batch refreshes
  });
  return a;
}
async function ln(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/set-privacy`);
  return a;
}
async function pn(t) {
  const { data: a } = await e.post(
    `/admin/openai/accounts/${t}/quota/refresh`
  );
  return a;
}
async function mn(t) {
  const { data: a } = await e.post(
    `/admin/openai/accounts/${t}/reset-quota`,
    void 0,
    { timeout: 9e4 }
  );
  return a;
}
async function gn(t, a) {
  const { data: n } = await e.post(`/admin/accounts/${t}/shadow`, a);
  return n;
}
async function fn() {
  const { data: t } = await e.get("/admin/accounts/upstream-billing-probe/settings");
  return t;
}
async function yn(t) {
  const { data: a } = await e.put(
    "/admin/accounts/upstream-billing-probe/settings",
    t
  );
  return a;
}
async function hn(t, a) {
  await e.put(`/admin/accounts/${t}/upstream-billing-probe`, { enabled: a });
}
async function wn(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/upstream-billing-probe`);
  return a;
}
async function bn(t) {
  const { data: a } = await e.post(
    "/admin/accounts/upstream-billing-probe/batch",
    { account_ids: t }
  );
  return a.results;
}
async function _n() {
  const { data: t } = await e.get("/admin/accounts/ollama-cloud-usage/settings");
  return t;
}
async function vn(t) {
  const { data: a } = await e.put(
    "/admin/accounts/ollama-cloud-usage/settings",
    t
  );
  return a;
}
async function $n(t) {
  const { data: a } = await e.get(`/admin/accounts/${t}/ollama-cloud-usage`);
  return a;
}
async function Sn(t, a) {
  const { data: n } = await e.put(`/admin/accounts/${t}/ollama-cloud-usage/session`, {
    session: a
  });
  return n;
}
async function kn(t) {
  const { data: a } = await e.delete(`/admin/accounts/${t}/ollama-cloud-usage/session`);
  return a;
}
async function Cn(t, a) {
  const { data: n } = await e.put(`/admin/accounts/${t}/ollama-cloud-usage/auto-refresh`, {
    enabled: a
  });
  return n;
}
async function An(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/ollama-cloud-usage/refresh`);
  return a;
}
async function xn() {
  const { data: t } = await e.get("/admin/accounts/opencode-go-usage/settings");
  return t;
}
async function Tn(t) {
  const { data: a } = await e.put(
    "/admin/accounts/opencode-go-usage/settings",
    t
  );
  return a;
}
async function In(t) {
  const { data: a } = await e.get(`/admin/accounts/${t}/opencode-go-usage`);
  return a;
}
async function Pn(t, a) {
  const { data: n } = await e.put(`/admin/accounts/${t}/opencode-go-usage/auto-refresh`, {
    enabled: a
  });
  return n;
}
async function On(t) {
  const { data: a } = await e.post(`/admin/accounts/${t}/opencode-go-usage/refresh`);
  return a;
}
const Mn = {
  list: we,
  listWithEtag: be,
  getById: _e,
  create: ve,
  duplicate: Se,
  update: Rt,
  getGrokMediaEligibility: ke,
  updateGrokMediaEligibility: Ce,
  checkMixedChannelRisk: Ae,
  delete: xe,
  toggleStatus: Te,
  testAccount: Ie,
  refreshCredentials: Pe,
  applyOAuthCredentials: Oe,
  getStats: Me,
  clearError: Re,
  getUsage: Ue,
  getBatchUsage: Ee,
  getTodayStats: He,
  getBatchTodayStats: Ve,
  clearRateLimit: De,
  recoverState: Be,
  resetAccountQuota: Le,
  getTempUnschedulableStatus: ze,
  resetTempUnschedulable: Ne,
  setSchedulable: Qe,
  getAvailableModels: je,
  syncUpstreamModels: Je,
  syncUpstreamModelsPreview: Ye,
  generateAuthUrl: Ke,
  exchangeCode: qe,
  refreshOpenAIToken: on,
  batchCreate: Ge,
  batchUpdateCredentials: We,
  bulkUpdate: Fe,
  previewFromCrs: Ze,
  syncFromCrs: Xe,
  exportData: tn,
  importData: an,
  importCodexSession: en,
  createOpenAICodexPAT: nn,
  getAntigravityDefaultModelMapping: sn,
  batchDelete: cn,
  batchClearError: un,
  batchRefresh: dn,
  setPrivacy: ln,
  revertProxyFallback: rn,
  refreshOpenAIQuota: pn,
  resetOpenAIQuota: mn,
  createSparkShadow: gn,
  getUpstreamBillingProbeSettings: fn,
  updateUpstreamBillingProbeSettings: yn,
  setUpstreamBillingProbeEnabled: hn,
  probeUpstreamBilling: wn,
  probeUpstreamBillingBatch: bn,
  getOllamaCloudUsageSettings: _n,
  updateOllamaCloudUsageSettings: vn,
  getOllamaCloudUsage: $n,
  saveOllamaCloudUsageSession: Sn,
  deleteOllamaCloudUsageSession: kn,
  setOllamaCloudUsageAutoRefresh: Cn,
  refreshOllamaCloudUsage: An,
  getOpenCodeGoUsageSettings: xn,
  updateOpenCodeGoUsageSettings: Tn,
  getOpenCodeGoUsage: In,
  setOpenCodeGoUsageAutoRefresh: Pn,
  refreshOpenCodeGoUsage: On
};
function lt(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid proxy list response");
}
async function Rn(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/proxies", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    signal: s == null ? void 0 : s.signal
  });
  return lt(o == null ? void 0 : o.items), o;
}
async function Un() {
  const { data: t } = await e.get("/admin/proxies/all");
  return lt(t), t;
}
async function En() {
  const { data: t } = await e.get("/admin/proxies/all", {
    params: { with_count: "true" }
  });
  return lt(t), t;
}
async function Dn(t) {
  const { data: a } = await e.get(`/admin/proxies/${t}`);
  return a;
}
async function Bn(t) {
  const { data: a } = await e.post("/admin/proxies", t);
  return a;
}
async function Ut(t, a) {
  const { data: n } = await e.put(`/admin/proxies/${t}`, a);
  return n;
}
async function Ln(t) {
  const { data: a } = await e.delete(`/admin/proxies/${t}`);
  return a;
}
async function zn(t, a) {
  return Ut(t, { status: a });
}
async function Nn(t) {
  const { data: a } = await e.post(`/admin/proxies/${t}/test`);
  return a;
}
async function Kn(t) {
  const { data: a } = await e.post(`/admin/proxies/${t}/quality-check`);
  return a;
}
async function qn(t) {
  const { data: a } = await e.get(`/admin/proxies/${t}/stats`);
  return a;
}
async function Gn(t) {
  const { data: a } = await e.get(`/admin/proxies/${t}/accounts`);
  return a;
}
async function Wn(t) {
  const { data: a } = await e.post("/admin/proxies/batch", { proxies: t });
  return a;
}
async function Fn(t) {
  const { data: a } = await e.post("/admin/proxies/batch-delete", { ids: t });
  return a;
}
async function Hn(t) {
  const a = {};
  if (t != null && t.ids && t.ids.length > 0)
    a.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { protocol: s, status: o, search: u, sort_by: d, sort_order: p } = t.filters;
    s && (a.protocol = s), o && (a.status = o), u && (a.search = u), d && (a.sort_by = d), p && (a.sort_order = p);
  }
  const { data: n } = await e.get("/admin/proxies/data", { params: a });
  return n;
}
async function Vn(t) {
  const { data: a } = await e.post("/admin/proxies/data", t);
  return a;
}
const Qn = {
  list: Rn,
  getAll: Un,
  getAllWithCount: En,
  getById: Dn,
  create: Bn,
  update: Ut,
  delete: Ln,
  toggleStatus: zn,
  testProxy: Nn,
  checkProxyQuality: Kn,
  getStats: qn,
  getProxyAccounts: Gn,
  batchCreate: Wn,
  batchDelete: Fn,
  exportData: Hn,
  importData: Vn
};
async function jn(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/redeem-codes", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function Jn(t) {
  const { data: a } = await e.get(`/admin/redeem-codes/${t}`);
  return a;
}
async function Yn(t, a, n, s, o, u, d, p) {
  const l = {
    count: t,
    type: a,
    value: n
  };
  a === "subscription" && (l.group_id = s, o && o > 0 && (l.validity_days = o)), a === "mystery_box" && (l.min_value = d, l.max_value = p), u && u > 0 && (l.expires_in_days = u);
  const { data: m } = await e.post("/admin/redeem-codes/generate", l);
  return m;
}
async function Zn(t) {
  const { data: a } = await e.delete(`/admin/redeem-codes/${t}`);
  return a;
}
async function Xn(t) {
  const { data: a } = await e.post("/admin/redeem-codes/batch-delete", { ids: t });
  return a;
}
async function ts(t, a) {
  const { data: n } = await e.post("/admin/redeem-codes/batch-update", { ids: t, fields: a });
  return n;
}
async function as(t) {
  const { data: a } = await e.post(`/admin/redeem-codes/${t}/expire`);
  return a;
}
async function es() {
  const { data: t } = await e.get("/admin/redeem-codes/stats");
  return t;
}
async function ns(t) {
  return (await e.get("/admin/redeem-codes/export", {
    params: t,
    responseType: "blob"
  })).data;
}
const ss = {
  list: jn,
  getById: Jn,
  generate: Yn,
  delete: Zn,
  batchDelete: Xn,
  batchUpdate: ts,
  expire: as,
  getStats: es,
  exportCodes: ns
};
async function os(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/promo-codes", {
    params: { page: t, page_size: a, ...n },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function is(t) {
  const { data: a } = await e.get(`/admin/promo-codes/${t}`);
  return a;
}
async function rs(t) {
  const { data: a } = await e.post("/admin/promo-codes", t);
  return a;
}
async function cs(t, a) {
  const { data: n } = await e.put(`/admin/promo-codes/${t}`, a);
  return n;
}
async function us(t) {
  const { data: a } = await e.delete(`/admin/promo-codes/${t}`);
  return a;
}
async function ds(t, a = 1, n = 20) {
  const { data: s } = await e.get(
    `/admin/promo-codes/${t}/usages`,
    { params: { page: a, page_size: n } }
  );
  return s;
}
const ls = {
  list: os,
  getById: is,
  create: rs,
  update: cs,
  delete: us,
  getUsages: ds
};
async function ps(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/announcements", {
    params: { page: t, page_size: a, ...n },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function ms(t) {
  const { data: a } = await e.get(`/admin/announcements/${t}`);
  return a;
}
async function gs(t) {
  const { data: a } = await e.post("/admin/announcements", t);
  return a;
}
async function fs(t, a) {
  const { data: n } = await e.put(`/admin/announcements/${t}`, a);
  return n;
}
async function ys(t) {
  const { data: a } = await e.delete(`/admin/announcements/${t}`);
  return a;
}
async function hs(t, a = 1, n = 20, s, o) {
  const { data: u } = await e.get(
    `/admin/announcements/${t}/read-status`,
    {
      params: { page: a, page_size: n, ...s },
      signal: o == null ? void 0 : o.signal
    }
  );
  return u;
}
const ws = {
  list: ps,
  getById: ms,
  create: gs,
  update: fs,
  delete: ys,
  getReadStatus: hs
}, bs = [
  "openai",
  "anthropic",
  "grok",
  "kimi",
  "zhipu",
  "minimax",
  "opencode_go",
  "command_code"
];
function _s(t) {
  const a = {};
  for (const n of bs) {
    const s = t == null ? void 0 : t[n];
    a[n] = typeof s == "number" && Number.isFinite(s) ? Math.min(100, Math.max(1, Math.trunc(s))) : 100;
  }
  return a;
}
function Iu(t) {
  return _s(t);
}
function vs(t) {
  const a = {};
  for (const n of Pt()) {
    const s = t == null ? void 0 : t[n];
    a[n] = {
      daily: typeof (s == null ? void 0 : s.daily) == "number" ? s.daily : null,
      weekly: typeof (s == null ? void 0 : s.weekly) == "number" ? s.weekly : null,
      monthly: typeof (s == null ? void 0 : s.monthly) == "number" ? s.monthly : null
    };
  }
  return a;
}
function $s(t) {
  const a = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0 ? s : null, n = {};
  for (const s of Pt()) {
    const o = t == null ? void 0 : t[s];
    n[s] = { daily: a(o == null ? void 0 : o.daily), weekly: a(o == null ? void 0 : o.weekly), monthly: a(o == null ? void 0 : o.monthly) };
  }
  return n;
}
const Et = [
  "email",
  "linuxdo",
  "oidc",
  "wechat",
  "github",
  "google",
  "dingtalk"
], Ss = 0, Dt = 5, ks = {
  open: "open",
  open_platform: "open",
  official: "open",
  wx_open: "open",
  mp: "mp",
  official_account: "mp",
  wechat_mp: "mp",
  mini_program: "mp",
  mobile: "mobile",
  mobile_app: "mobile",
  native_app: "mobile"
};
function Bt(t) {
  return Array.isArray(t) ? t.filter((a) => a.group_id > 0 && a.validity_days > 0).map((a) => ({
    group_id: Math.floor(a.group_id),
    validity_days: Math.min(
      36500,
      Math.max(1, Math.floor(a.validity_days))
    )
  })) : [];
}
function Pu(t) {
  const a = t;
  return Et.reduce((n, s) => {
    const o = a[`auth_source_default_${s}_subscriptions`];
    return n[s] = {
      balance: Number(
        a[`auth_source_default_${s}_balance`] ?? Ss
      ),
      concurrency: Math.max(
        1,
        Number(
          a[`auth_source_default_${s}_concurrency`] ?? Dt
        )
      ),
      subscriptions: Bt(
        Array.isArray(o) ? o : []
      ),
      grant_on_signup: a[`auth_source_default_${s}_grant_on_signup`] === !0,
      grant_on_first_bind: a[`auth_source_default_${s}_grant_on_first_bind`] === !0,
      platform_quotas: vs(a[`auth_source_default_${s}_platform_quotas`])
    }, n;
  }, {});
}
function Ou(t, a) {
  const n = t;
  for (const s of Et) {
    const o = a[s];
    n[`auth_source_default_${s}_balance`] = Number(o.balance) || 0, n[`auth_source_default_${s}_concurrency`] = Math.max(
      1,
      Math.floor(
        Number(o.concurrency) || Dt
      )
    ), n[`auth_source_default_${s}_subscriptions`] = Bt(o.subscriptions), n[`auth_source_default_${s}_grant_on_signup`] = o.grant_on_signup, n[`auth_source_default_${s}_grant_on_first_bind`] = o.grant_on_first_bind, n[`auth_source_default_${s}_platform_quotas`] = $s(o.platform_quotas);
  }
  return t;
}
function pt(t) {
  if (typeof t != "string") return "open";
  const a = t.trim().toLowerCase();
  return a ? ks[a] ?? "open" : "open";
}
function Mu(t) {
  switch (pt(t)) {
    case "mp":
      return "snsapi_userinfo";
    case "mobile":
      return "";
    default:
      return "snsapi_login";
  }
}
function Ru(t, a, n, s) {
  if (typeof t == "boolean" || typeof a == "boolean" || typeof n == "boolean")
    return {
      openEnabled: t === !0,
      mpEnabled: a === !0,
      mobileEnabled: n === !0
    };
  switch (pt(s)) {
    case "mp":
      return { openEnabled: !1, mpEnabled: !0, mobileEnabled: !1 };
    case "mobile":
      return { openEnabled: !1, mpEnabled: !1, mobileEnabled: !0 };
    default:
      return { openEnabled: !0, mpEnabled: !1, mobileEnabled: !1 };
  }
}
function Uu(t, a, n, s) {
  return a ? "mp" : n ? "mobile" : t ? "open" : pt(s);
}
async function Cs() {
  const { data: t } = await e.get("/admin/settings");
  return t;
}
async function As() {
  const { data: t } = await e.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return t;
}
async function xs(t) {
  const { data: a } = await e.put(
    "/admin/settings",
    t
  );
  return a;
}
async function Ts(t) {
  const { data: a } = await e.post(
    "/admin/settings/test-smtp",
    t
  );
  return a;
}
async function Is(t) {
  const { data: a } = await e.post(
    "/admin/settings/send-test-email",
    t
  );
  return a;
}
async function Ps() {
  const { data: t } = await e.get(
    "/admin/settings/email-templates"
  );
  return t;
}
async function Os(t, a) {
  const { data: n } = await e.get(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(a)}`
  );
  return n;
}
async function Ms(t, a, n) {
  const { data: s } = await e.put(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(a)}`,
    n
  );
  return s;
}
async function Rs(t, a) {
  const { data: n } = await e.post(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(a)}/restore-official`
  );
  return n;
}
async function Us(t) {
  const { data: a } = await e.post(
    "/admin/settings/email-template-preview",
    t
  );
  return a;
}
async function Es() {
  const { data: t } = await e.get(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Ds() {
  const { data: t } = await e.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return t;
}
async function Bs() {
  const { data: t } = await e.delete(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Ls() {
  const { data: t } = await e.get(
    "/admin/settings/overload-cooldown"
  );
  return t;
}
async function zs(t) {
  const { data: a } = await e.put(
    "/admin/settings/overload-cooldown",
    t
  );
  return a;
}
async function Ns() {
  const { data: t } = await e.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function Ks(t) {
  const { data: a } = await e.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return a;
}
async function qs() {
  const { data: t } = await e.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function Gs(t) {
  const { data: a } = await e.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return a;
}
async function Ws() {
  const { data: t } = await e.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function Fs(t) {
  const { data: a } = await e.put(
    "/admin/settings/stream-timeout",
    t
  );
  return a;
}
async function Hs() {
  const { data: t } = await e.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function Vs(t) {
  const { data: a } = await e.put(
    "/admin/settings/rectifier",
    t
  );
  return a;
}
async function Qs() {
  const { data: t } = await e.get(
    "/admin/settings/beta-policy"
  );
  return t;
}
async function js(t) {
  const { data: a } = await e.put(
    "/admin/settings/beta-policy",
    t
  );
  return a;
}
async function Js() {
  const { data: t } = await e.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function Ys(t) {
  const { data: a } = await e.put(
    "/admin/settings/web-search-emulation",
    t
  );
  return a;
}
async function Zs(t) {
  const { data: a } = await e.post(
    "/admin/settings/web-search-emulation/test",
    { query: t }
  );
  return a;
}
async function Xs(t) {
  await e.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const to = {
  getSettings: Cs,
  getNavigationSettings: As,
  updateSettings: xs,
  testSmtpConnection: Ts,
  sendTestEmail: Is,
  getEmailTemplates: Ps,
  getEmailTemplate: Os,
  updateEmailTemplate: Ms,
  restoreOfficialEmailTemplate: Rs,
  previewEmailTemplate: Us,
  getAdminApiKey: Es,
  regenerateAdminApiKey: Ds,
  deleteAdminApiKey: Bs,
  getOverloadCooldownSettings: Ls,
  updateOverloadCooldownSettings: zs,
  getRateLimit429CooldownSettings: Ns,
  updateRateLimit429CooldownSettings: Ks,
  getPanelRateLimitSettings: qs,
  updatePanelRateLimitSettings: Gs,
  getStreamTimeoutSettings: Ws,
  updateStreamTimeoutSettings: Fs,
  getRectifierSettings: Hs,
  updateRectifierSettings: Vs,
  getBetaPolicySettings: Qs,
  updateBetaPolicySettings: js,
  getWebSearchEmulationConfig: Js,
  updateWebSearchEmulationConfig: Ys,
  testWebSearchEmulation: Zs,
  resetWebSearchUsage: Xs
};
async function ao(t, a) {
  const { data: n } = await e.post(
    "/admin/subscriptions/bulk-action",
    t,
    { headers: { "Idempotency-Key": a } }
  );
  return n;
}
async function eo(t = 1, a = 20, n, s) {
  const { data: o } = await e.get(
    "/admin/subscriptions",
    {
      params: {
        page: t,
        page_size: a,
        ...n
      },
      signal: s == null ? void 0 : s.signal
    }
  );
  return o;
}
async function no(t) {
  const { data: a } = await e.get(`/admin/subscriptions/${t}`);
  return a;
}
async function so(t) {
  const { data: a } = await e.get(`/admin/subscriptions/${t}/progress`);
  return a;
}
async function oo(t) {
  const { data: a } = await e.post("/admin/subscriptions/assign", t);
  return a;
}
async function io(t) {
  const { data: a } = await e.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return a;
}
async function ro(t, a) {
  const { data: n } = await e.post(
    `/admin/subscriptions/${t}/extend`,
    a
  );
  return n;
}
async function co(t) {
  const { data: a } = await e.post(`/admin/subscriptions/${t}/revoke`);
  return a;
}
async function uo(t) {
  const { data: a } = await e.post(`/admin/subscriptions/${t}/restore`);
  return a;
}
async function lo(t, a) {
  const { data: n } = await e.post(
    `/admin/subscriptions/${t}/reset-quota`,
    a
  );
  return n;
}
async function po(t, a = 1, n = 20) {
  const { data: s } = await e.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: a, page_size: n }
    }
  );
  return s;
}
async function mo(t, a = 1, n = 20) {
  const { data: s } = await e.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: a, page_size: n }
    }
  );
  return s;
}
const go = {
  list: eo,
  getById: no,
  getProgress: so,
  assign: oo,
  bulkAssign: io,
  bulkAction: ao,
  extend: ro,
  revoke: co,
  restore: uo,
  resetQuota: lo,
  listByGroup: po,
  listByUser: mo
};
async function fo(t, a) {
  const { data: n } = await e.get("/admin/usage", {
    params: t,
    signal: a == null ? void 0 : a.signal
  });
  return n;
}
async function yo(t) {
  const { data: a } = await e.get("/admin/usage/stats", {
    params: t
  });
  return a;
}
async function ho(t) {
  const { data: a } = await e.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return a;
}
async function wo(t, a) {
  const n = {};
  t !== void 0 && (n.user_id = t), a && (n.q = a);
  const { data: s } = await e.get("/admin/usage/search-api-keys", {
    params: n
  });
  return s;
}
async function bo(t, a) {
  const { data: n } = await e.get("/admin/usage/cleanup-tasks", {
    params: t,
    signal: a == null ? void 0 : a.signal
  });
  return n;
}
async function _o(t) {
  const { data: a } = await e.post("/admin/usage/cleanup-tasks", t);
  return a;
}
async function vo(t) {
  const { data: a } = await e.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return a;
}
const $o = {
  list: fo,
  getStats: yo,
  searchUsers: ho,
  searchApiKeys: wo,
  listCleanupTasks: bo,
  createCleanupTask: _o,
  cancelCleanupTask: vo
};
async function So(t) {
  const { data: a } = await e.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return a;
}
async function ko(t) {
  const { data: a } = await e.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return a;
}
async function Co() {
  const { data: t } = await e.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Ao = { generateAuthUrl: So, exchangeCode: ko, getCapabilities: Co };
async function xo(t) {
  const { data: a } = await e.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return a;
}
async function To(t) {
  const { data: a } = await e.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return a;
}
async function Io(t, a) {
  const n = { refresh_token: t };
  a && (n.proxy_id = a);
  const { data: s } = await e.post(
    "/admin/antigravity/oauth/refresh-token",
    n
  );
  return s;
}
const Po = { generateAuthUrl: xo, exchangeCode: To, refreshAntigravityToken: Io }, Lt = 12e4;
async function Oo() {
  const { data: t } = await e.get("/admin/grok/oauth/capabilities");
  return t;
}
const Mo = 3, Ro = 9e4, Uo = 9e4;
function Eo(t) {
  return Math.ceil(Math.max(1, t) / Mo) * Ro + Uo;
}
async function Do(t) {
  const { data: a } = await e.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return a;
}
async function Bo(t) {
  const { data: a } = await e.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return a;
}
async function Lo(t, a) {
  const n = { refresh_token: t };
  a && (n.proxy_id = a);
  const { data: s } = await e.post(
    "/admin/grok/oauth/refresh-token",
    n
  );
  return s;
}
async function zo(t) {
  const { data: a } = await e.get(`/admin/grok/accounts/${t}/quota`);
  return a;
}
async function No(t) {
  const { data: a } = await e.post(`/admin/grok/accounts/${t}/reset-quota`);
  return a;
}
async function Ko(t) {
  const { data: a } = await e.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Eo(t.sso_tokens.length) }
  );
  return a;
}
async function qo(t, a) {
  const n = { sso_token: t };
  a && (n.proxy_id = a);
  const { data: s } = await e.post("/admin/grok/oauth/sso-token", n, {
    timeout: Lt
  });
  return s;
}
async function Go(t, a) {
  const n = "----", s = t.indexOf(n), o = (s >= 0 ? t.slice(0, s) : t).trim(), u = s >= 0 ? t.slice(s + n.length) : "", d = { email: o, password: u };
  a && (d.proxy_id = a);
  const { data: p } = await e.post("/admin/grok/oauth/password", d, {
    timeout: Lt
  });
  return p;
}
const Wo = {
  generateAuthUrl: Do,
  getCapabilities: Oo,
  exchangeCode: Bo,
  refreshGrokToken: Lo,
  queryQuota: zo,
  resetQuota: No,
  createFromSSO: Ko,
  validateSSOToken: qo,
  authorizePassword: Go
};
async function Fo(t) {
  const { data: a } = await e.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return a;
}
async function Ho(t) {
  const { data: a } = await e.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return a;
}
const Vo = {
  queryQuota: Fo,
  queryBalance: Ho
};
async function Qo() {
  const { data: t } = await e.get("/admin/user-attributes");
  return t;
}
async function jo() {
  const { data: t } = await e.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function Jo(t) {
  const { data: a } = await e.post("/admin/user-attributes", t);
  return a;
}
async function Yo(t, a) {
  const { data: n } = await e.put(
    `/admin/user-attributes/${t}`,
    a
  );
  return n;
}
async function Zo(t) {
  const { data: a } = await e.delete(`/admin/user-attributes/${t}`);
  return a;
}
async function Xo(t) {
  const { data: a } = await e.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return a;
}
async function ti(t) {
  const { data: a } = await e.get(
    `/admin/users/${t}/attributes`
  );
  return a;
}
async function ai(t, a) {
  const { data: n } = await e.put(
    `/admin/users/${t}/attributes`,
    { values: a }
  );
  return n;
}
async function ei(t) {
  const { data: a } = await e.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return a;
}
const ni = {
  listDefinitions: Qo,
  listEnabledDefinitions: jo,
  createDefinition: Jo,
  updateDefinition: Yo,
  deleteDefinition: Zo,
  reorderDefinitions: Xo,
  getUserAttributeValues: ti,
  updateUserAttributeValues: ai,
  getBatchUserAttributes: ei
};
async function si(t, a) {
  const n = {};
  t && (n.platform = t), typeof a == "number" && a > 0 && (n.group_id = a);
  const { data: s } = await e.get("/admin/ops/concurrency", { params: n });
  return s;
}
async function oi() {
  const { data: t } = await e.get("/admin/ops/user-concurrency");
  return t;
}
async function ii(t, a) {
  const n = {};
  t && (n.platform = t), typeof a == "number" && a > 0 && (n.group_id = a);
  const { data: s } = await e.get("/admin/ops/account-availability", { params: n });
  return s;
}
async function ri(t, a, n) {
  const s = { window: t };
  a && (s.platform = a), typeof n == "number" && n > 0 && (s.group_id = n);
  const { data: o } = await e.get("/admin/ops/realtime-traffic", { params: s });
  return o;
}
const ci = {
  REALTIME_DISABLED: 4001
}, ui = "sub2api-admin";
function di(t, a = {}) {
  let n = null, s = 0;
  const o = Number.isFinite(a.maxReconnectAttempts) ? a.maxReconnectAttempts : 1 / 0, u = a.reconnectBaseDelayMs ?? 1e3, d = a.reconnectMaxDelayMs ?? 3e4;
  let p = null, l = !0, m = !1, w = !1, M = 0;
  const R = a.staleTimeoutMs ?? 12e4, W = a.staleCheckIntervalMs ?? 3e4;
  let O = null;
  const h = (v) => {
    var g;
    (g = a.onStatusChange) == null || g.call(a, v);
  }, E = () => {
    p && (clearTimeout(p), p = null);
  }, D = () => {
    O && (clearInterval(O), O = null);
  }, J = () => {
    D(), !(!R || R <= 0) && (O = setInterval(() => {
      if (!l || !n || n.readyState !== WebSocket.OPEN || !M) return;
      Date.now() - M > R && n.close();
    }, W));
  }, b = () => {
    var I;
    if (!l || w && s >= o) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      h("offline");
      return;
    }
    const v = u * Math.pow(2, s), g = Math.min(v, d), A = Math.floor(Math.random() * 250);
    E(), p = setTimeout(() => {
      s++, T();
    }, g + A), (I = a.onReconnectScheduled) == null || I.call(a, { attempt: s + 1, delayMs: g + A });
  }, B = () => {
    l && (n && (n.readyState === WebSocket.OPEN || n.readyState === WebSocket.CONNECTING) || T());
  }, F = () => {
    h("offline");
  }, T = () => {
    if (!l || m || n && (n.readyState === WebSocket.OPEN || n.readyState === WebSocket.CONNECTING) || w && s >= o) return;
    m = !0, h(w ? "reconnecting" : "connecting");
    const v = a.wsBaseUrl || void 0, g = v ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${v}/api/v1/admin/ops/ws/qps`) : new URL(Ht("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), A = String(a.token ?? localStorage.getItem("auth_token") ?? "").trim(), I = [ui];
    A && I.push(`jwt.${A}`), n = new WebSocket(g.toString(), I), n.onopen = () => {
      var f;
      s = 0, m = !1, w = !0, E(), M = Date.now(), J(), h("connected"), (f = a.onOpen) == null || f.call(a);
    }, n.onmessage = (f) => {
      try {
        const $ = JSON.parse(f.data);
        M = Date.now(), t($);
      } catch ($) {
        console.warn("[OpsWS] Failed to parse message:", $);
      }
    }, n.onerror = (f) => {
      var $;
      console.error("[OpsWS] Connection error:", f), ($ = a.onError) == null || $.call(a, f);
    }, n.onclose = (f) => {
      var $, _;
      if (m = !1, ($ = a.onClose) == null || $.call(a, f), D(), n = null, f && typeof f.code == "number" && f.code === ci.REALTIME_DISABLED) {
        l = !1, E(), h("closed"), (_ = a.onFatalClose) == null || _.call(a, f);
        return;
      }
      b();
    };
  };
  return window.addEventListener("online", B), window.addEventListener("offline", F), T(), () => {
    l = !1, window.removeEventListener("online", B), window.removeEventListener("offline", F), E(), D(), n && n.close(), n = null, h("closed");
  };
}
async function li(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function pi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function mi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function gi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function fi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function yi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function hi(t, a = {}) {
  const { data: n } = await e.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: a.signal
  });
  return n;
}
async function wi(t) {
  const { data: a } = await e.get("/admin/ops/errors", { params: t });
  return a;
}
async function bi(t) {
  const { data: a } = await e.get(`/admin/ops/errors/${t}`);
  return a;
}
async function _i(t, a) {
  await e.put(`/admin/ops/errors/${t}/resolve`, { resolved: a });
}
async function vi(t) {
  const { data: a } = await e.get("/admin/ops/request-errors", { params: t });
  return a;
}
async function $i(t) {
  const { data: a } = await e.get("/admin/ops/upstream-errors", { params: t });
  return a;
}
async function Si(t) {
  const { data: a } = await e.get(`/admin/ops/request-errors/${t}`);
  return a;
}
async function ki(t) {
  const { data: a } = await e.get(`/admin/ops/upstream-errors/${t}`);
  return a;
}
async function Ci(t, a) {
  await e.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: a });
}
async function Ai(t, a) {
  await e.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: a });
}
async function xi(t, a = {}, n = {}) {
  const s = { ...a };
  n.include_detail && (s.include_detail = "1");
  const { data: o } = await e.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return o;
}
async function Ti(t) {
  const { data: a } = await e.get("/admin/ops/requests", { params: t });
  return a;
}
async function Ii() {
  const { data: t } = await e.get("/admin/ops/alert-rules");
  return t;
}
async function Pi(t) {
  const { data: a } = await e.post("/admin/ops/alert-rules", t);
  return a;
}
async function Oi(t, a) {
  const { data: n } = await e.put(`/admin/ops/alert-rules/${t}`, a);
  return n;
}
async function Mi(t) {
  await e.delete(`/admin/ops/alert-rules/${t}`);
}
async function Ri(t = {}) {
  const { data: a } = await e.get("/admin/ops/alert-events", { params: t });
  return a;
}
async function Ui(t) {
  const { data: a } = await e.get(`/admin/ops/alert-events/${t}`);
  return a;
}
async function Ei(t, a) {
  await e.put(`/admin/ops/alert-events/${t}/status`, { status: a });
}
async function Di(t) {
  await e.post("/admin/ops/alert-silences", t);
}
async function Bi() {
  const { data: t } = await e.get("/admin/ops/email-notification/config");
  return t;
}
async function Li(t) {
  const { data: a } = await e.put("/admin/ops/email-notification/config", t);
  return a;
}
async function zi() {
  const { data: t } = await e.get("/admin/ops/runtime/alert");
  return t;
}
async function Ni(t) {
  const { data: a } = await e.put("/admin/ops/runtime/alert", t);
  return a;
}
async function Ki() {
  const { data: t } = await e.get("/admin/ops/runtime/logging");
  return t;
}
async function qi(t) {
  const { data: a } = await e.put("/admin/ops/runtime/logging", t);
  return a;
}
async function Gi() {
  const { data: t } = await e.post("/admin/ops/runtime/logging/reset");
  return t;
}
async function Wi(t) {
  const { data: a } = await e.get("/admin/ops/system-logs", { params: t });
  return a;
}
async function Fi(t) {
  const { data: a } = await e.post("/admin/ops/system-logs/cleanup", t);
  return a;
}
async function Hi() {
  const { data: t } = await e.get("/admin/ops/system-logs/health");
  return t;
}
async function Vi() {
  const { data: t } = await e.get("/admin/ops/advanced-settings");
  return t;
}
async function Qi(t) {
  const { data: a } = await e.put("/admin/ops/advanced-settings", t);
  return a;
}
async function ji() {
  const { data: t } = await e.get("/admin/ops/settings/metric-thresholds");
  return t;
}
async function Ji(t) {
  await e.put("/admin/ops/settings/metric-thresholds", t);
}
const Yi = {
  getDashboardSnapshotV2: pi,
  getDashboardOverview: li,
  getThroughputTrend: mi,
  getLatencyHistogram: gi,
  getErrorTrend: fi,
  getErrorDistribution: yi,
  getOpenAITokenStats: hi,
  getConcurrencyStats: si,
  getUserConcurrencyStats: oi,
  getAccountAvailabilityStats: ii,
  getRealtimeTrafficSummary: ri,
  subscribeQPS: di,
  // Legacy unified endpoints
  listErrorLogs: wi,
  getErrorLogDetail: bi,
  updateErrorResolved: _i,
  // New split endpoints
  listRequestErrors: vi,
  listUpstreamErrors: $i,
  getRequestErrorDetail: Si,
  getUpstreamErrorDetail: ki,
  updateRequestErrorResolved: Ci,
  updateUpstreamErrorResolved: Ai,
  listRequestErrorUpstreamErrors: xi,
  listRequestDetails: Ti,
  listAlertRules: Ii,
  createAlertRule: Pi,
  updateAlertRule: Oi,
  deleteAlertRule: Mi,
  listAlertEvents: Ri,
  getAlertEvent: Ui,
  updateAlertEventStatus: Ei,
  createAlertSilence: Di,
  getEmailNotificationConfig: Bi,
  updateEmailNotificationConfig: Li,
  getAlertRuntimeSettings: zi,
  updateAlertRuntimeSettings: Ni,
  getRuntimeLogConfig: Ki,
  updateRuntimeLogConfig: qi,
  resetRuntimeLogConfig: Gi,
  getAdvancedSettings: Vi,
  updateAdvancedSettings: Qi,
  getMetricThresholds: ji,
  updateMetricThresholds: Ji,
  listSystemLogs: Wi,
  cleanupSystemLogs: Fi,
  getSystemLogSinkHealth: Hi
};
async function Zi() {
  const { data: t } = await e.get("/admin/error-passthrough-rules");
  return t;
}
async function Xi(t) {
  const { data: a } = await e.get(`/admin/error-passthrough-rules/${t}`);
  return a;
}
async function tr(t) {
  const { data: a } = await e.post("/admin/error-passthrough-rules", t);
  return a;
}
async function zt(t, a) {
  const { data: n } = await e.put(`/admin/error-passthrough-rules/${t}`, a);
  return n;
}
async function ar(t) {
  const { data: a } = await e.delete(`/admin/error-passthrough-rules/${t}`);
  return a;
}
async function er(t, a) {
  return zt(t, { enabled: a });
}
const nr = {
  list: Zi,
  getById: Xi,
  create: tr,
  update: zt,
  delete: ar,
  toggleEnabled: er
};
async function sr() {
  const { data: t } = await e.get("/admin/data-management/agent/health");
  return t;
}
async function or() {
  const { data: t } = await e.get("/admin/data-management/config");
  return t;
}
async function ir(t) {
  const { data: a } = await e.put("/admin/data-management/config", t);
  return a;
}
async function rr(t) {
  const { data: a } = await e.post("/admin/data-management/s3/test", t);
  return a;
}
async function cr(t) {
  const { data: a } = await e.get(`/admin/data-management/sources/${t}/profiles`);
  return a;
}
async function ur(t, a) {
  const { data: n } = await e.post(`/admin/data-management/sources/${t}/profiles`, a);
  return n;
}
async function dr(t, a, n) {
  const { data: s } = await e.put(`/admin/data-management/sources/${t}/profiles/${a}`, n);
  return s;
}
async function lr(t, a) {
  await e.delete(`/admin/data-management/sources/${t}/profiles/${a}`);
}
async function pr(t, a) {
  const { data: n } = await e.post(`/admin/data-management/sources/${t}/profiles/${a}/activate`);
  return n;
}
async function mr() {
  const { data: t } = await e.get("/admin/data-management/s3/profiles");
  return t;
}
async function gr(t) {
  const { data: a } = await e.post("/admin/data-management/s3/profiles", t);
  return a;
}
async function fr(t, a) {
  const { data: n } = await e.put(`/admin/data-management/s3/profiles/${t}`, a);
  return n;
}
async function yr(t) {
  await e.delete(`/admin/data-management/s3/profiles/${t}`);
}
async function hr(t) {
  const { data: a } = await e.post(`/admin/data-management/s3/profiles/${t}/activate`);
  return a;
}
async function wr(t) {
  const a = t.idempotency_key ? { "X-Idempotency-Key": t.idempotency_key } : void 0, { data: n } = await e.post(
    "/admin/data-management/backups",
    t,
    { headers: a }
  );
  return n;
}
async function br(t) {
  const { data: a } = await e.get("/admin/data-management/backups", {
    params: t
  });
  return a;
}
async function _r(t) {
  const { data: a } = await e.get(`/admin/data-management/backups/${t}`);
  return a;
}
const vr = {
  getAgentHealth: sr,
  getConfig: or,
  updateConfig: ir,
  listSourceProfiles: cr,
  createSourceProfile: ur,
  updateSourceProfile: dr,
  deleteSourceProfile: lr,
  setActiveSourceProfile: pr,
  testS3: rr,
  listS3Profiles: mr,
  createS3Profile: gr,
  updateS3Profile: fr,
  deleteS3Profile: yr,
  setActiveS3Profile: hr,
  createBackupJob: wr,
  listBackupJobs: br,
  getBackupJob: _r
};
async function $r(t, a) {
  const { data: n } = await e.put(`/admin/api-keys/${t}`, {
    group_id: a === null ? 0 : a
  });
  return n;
}
const Sr = {
  updateApiKeyGroup: $r
};
async function kr(t) {
  const { data: a } = await e.get(
    `/admin/accounts/${t}/scheduled-test-plans`
  );
  return a ?? [];
}
async function Cr(t) {
  const { data: a } = await e.post(
    "/admin/scheduled-test-plans",
    t
  );
  return a;
}
async function Ar(t, a) {
  const { data: n } = await e.put(
    `/admin/scheduled-test-plans/${t}`,
    a
  );
  return n;
}
async function xr(t) {
  await e.delete(`/admin/scheduled-test-plans/${t}`);
}
async function Tr(t, a) {
  const { data: n } = await e.get(
    `/admin/scheduled-test-plans/${t}/results`,
    {
      params: a ? { limit: a } : void 0
    }
  );
  return n ?? [];
}
const Ir = {
  listByAccount: kr,
  create: Cr,
  update: Ar,
  delete: xr,
  listResults: Tr
};
async function Pr() {
  const { data: t } = await e.get("/admin/backups/s3-config");
  return t;
}
async function Or(t) {
  const { data: a } = await e.put("/admin/backups/s3-config", t);
  return a;
}
async function Mr(t) {
  const { data: a } = await e.post("/admin/backups/s3-config/test", t);
  return a;
}
async function Rr() {
  const { data: t } = await e.get("/admin/backups/image-storage");
  return t;
}
async function Ur(t) {
  const { data: a } = await e.put("/admin/backups/image-storage", t);
  return a;
}
async function Er(t) {
  const { data: a } = await e.post(
    "/admin/backups/image-storage/test",
    t
  );
  return a;
}
async function Dr() {
  const { data: t } = await e.get("/admin/backups/schedule");
  return t;
}
async function Br(t) {
  const { data: a } = await e.put("/admin/backups/schedule", t);
  return a;
}
async function Lr(t) {
  const { data: a } = await e.post("/admin/backups", t || {});
  return a;
}
async function zr() {
  const { data: t } = await e.get("/admin/backups");
  return t;
}
async function Nr(t) {
  const { data: a } = await e.get(`/admin/backups/${t}`);
  return a;
}
async function Kr(t, a = !1) {
  await e.delete(`/admin/backups/${t}`, a ? { params: { delete_archived: !0 } } : void 0);
}
async function qr(t) {
  const { data: a } = await e.get(`/admin/backups/${t}/download-url`);
  return a;
}
async function Gr(t, a) {
  const { data: n } = await e.post(`/admin/backups/${t}/restore`, { password: a });
  return n;
}
const Wr = {
  getS3Config: Pr,
  updateS3Config: Or,
  testS3Connection: Mr,
  getImageStorageConfig: Rr,
  updateImageStorageConfig: Ur,
  testImageStorageConnection: Er,
  getSchedule: Dr,
  updateSchedule: Br,
  createBackup: Lr,
  listBackups: zr,
  getBackup: Nr,
  deleteBackup: Kr,
  getDownloadURL: qr,
  restoreBackup: Gr
};
async function Fr() {
  const { data: t } = await e.get("/admin/tls-fingerprint-profiles");
  return t;
}
async function Hr(t) {
  const { data: a } = await e.get(`/admin/tls-fingerprint-profiles/${t}`);
  return a;
}
async function Vr(t) {
  const { data: a } = await e.post("/admin/tls-fingerprint-profiles", t);
  return a;
}
async function Qr(t, a) {
  const { data: n } = await e.put(`/admin/tls-fingerprint-profiles/${t}`, a);
  return n;
}
async function jr(t) {
  const { data: a } = await e.delete(`/admin/tls-fingerprint-profiles/${t}`);
  return a;
}
const Jr = {
  list: Fr,
  getById: Hr,
  create: Vr,
  update: Qr,
  delete: jr
};
async function Yr(t = 1, a = 20, n, s) {
  const { data: o } = await e.get("/admin/channels", {
    params: {
      page: t,
      page_size: a,
      ...n
    },
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function Zr(t) {
  const { data: a } = await e.get(`/admin/channels/${t}`);
  return a;
}
async function Xr(t) {
  const { data: a } = await e.post("/admin/channels", t);
  return a;
}
async function tc(t, a) {
  const { data: n } = await e.put(`/admin/channels/${t}`, a);
  return n;
}
async function ac(t) {
  await e.delete(`/admin/channels/${t}`);
}
async function ec(t) {
  const { data: a } = await e.get("/admin/channels/model-pricing", {
    params: { model: t }
  });
  return a;
}
async function nc(t) {
  const { data: a } = await e.get("/admin/channels/pricing/sync-models", {
    params: { platform: t }
  });
  return a;
}
const sc = { list: Yr, getById: Zr, create: Xr, update: tc, remove: ac, getModelDefaultPricing: ec, syncPricingModels: nc };
async function oc(t = {}, a) {
  const { data: n } = await e.get("/admin/channel-monitors", {
    params: t,
    signal: a == null ? void 0 : a.signal
  });
  return n;
}
async function ic(t) {
  const { data: a } = await e.get(`/admin/channel-monitors/${t}`);
  return a;
}
async function rc(t) {
  const { data: a } = await e.post("/admin/channel-monitors", t);
  return a;
}
const nt = /* @__PURE__ */ new Map();
function cc() {
  var t;
  try {
    const a = (t = globalThis.localStorage) == null ? void 0 : t.getItem("auth_user");
    if (!a) return null;
    const n = JSON.parse(a);
    if (typeof n != "object" || n === null) return null;
    const s = n.id;
    return typeof s != "number" || !Number.isSafeInteger(s) || s <= 0 ? null : String(s);
  } catch {
    return null;
  }
}
function uc(t) {
  const a = cc();
  return a ? {
    adminID: a,
    key: `sub2api:admin:channel-monitor-duplicate:${a}:${t}`
  } : null;
}
function dc(t) {
  var a;
  try {
    return ((a = globalThis.sessionStorage) == null ? void 0 : a.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function $t(t, a) {
  var n, s;
  try {
    a ? (n = globalThis.sessionStorage) == null || n.setItem(t, a) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function lc(t) {
  var o, u;
  const a = uc(t);
  let n = a ? nt.get(a.key) ?? dc(a.key) : null;
  if (!n) {
    const d = ((u = (o = globalThis.crypto) == null ? void 0 : o.randomUUID) == null ? void 0 : u.call(o)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    n = `channel-monitor-duplicate-${(a == null ? void 0 : a.adminID) ?? "unknown-admin"}-${t}-${d}`;
  }
  a && (nt.set(a.key, n), $t(a.key, n));
  const { data: s } = await e.post(
    `/admin/channel-monitors/${t}/duplicate`,
    void 0,
    { headers: { "Idempotency-Key": n } }
  );
  return a && (nt.delete(a.key), $t(a.key, null)), s;
}
async function pc(t, a) {
  const { data: n } = await e.put(`/admin/channel-monitors/${t}`, a);
  return n;
}
async function mc(t) {
  await e.delete(`/admin/channel-monitors/${t}`);
}
async function gc(t) {
  const { data: a } = await e.post(`/admin/channel-monitors/${t}/run`);
  return a;
}
async function fc(t, a = {}) {
  const { data: n } = await e.get(
    `/admin/channel-monitors/${t}/history`,
    { params: a }
  );
  return n;
}
const yc = {
  list: oc,
  get: ic,
  create: rc,
  duplicate: lc,
  update: pc,
  del: mc,
  runNow: gc,
  listHistory: fc
};
async function hc(t = {}) {
  const { data: a } = await e.get("/admin/channel-monitor-templates", {
    params: t
  });
  return a;
}
async function wc(t) {
  const { data: a } = await e.get(
    `/admin/channel-monitor-templates/${t}`
  );
  return a;
}
async function bc(t) {
  const { data: a } = await e.post(
    "/admin/channel-monitor-templates",
    t
  );
  return a;
}
async function _c(t, a) {
  const { data: n } = await e.put(
    `/admin/channel-monitor-templates/${t}`,
    a
  );
  return n;
}
async function vc(t) {
  await e.delete(`/admin/channel-monitor-templates/${t}`);
}
async function $c(t, a) {
  const { data: n } = await e.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: a }
  );
  return n;
}
async function Sc(t) {
  const { data: a } = await e.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return a;
}
const kc = {
  list: hc,
  get: wc,
  create: bc,
  update: _c,
  del: vc,
  apply: $c,
  listAssociatedMonitors: Sc
}, Cc = {
  // ==================== Config ====================
  /** Get payment configuration (admin view) */
  getConfig() {
    return e.get("/admin/payment/config");
  },
  /** Update payment configuration */
  updateConfig(t) {
    return e.put("/admin/payment/config", t);
  },
  // ==================== Dashboard ====================
  /** Get payment dashboard statistics */
  getDashboard(t) {
    return e.get("/admin/payment/dashboard", {
      params: t ? { days: t } : void 0
    });
  },
  // ==================== Orders ====================
  /** Get all orders (paginated, with filters) */
  getOrders(t) {
    return e.get("/admin/payment/orders", { params: t });
  },
  /** Get a specific order by ID */
  getOrder(t) {
    return e.get(`/admin/payment/orders/${t}`);
  },
  /** Cancel an order (admin) */
  cancelOrder(t) {
    return e.post(`/admin/payment/orders/${t}/cancel`);
  },
  /** Retry recharge for a failed order */
  retryRecharge(t) {
    return e.post(`/admin/payment/orders/${t}/retry`);
  },
  /** Process a refund */
  refundOrder(t, a) {
    return e.post(`/admin/payment/orders/${t}/refund`, a);
  },
  /** Query and finalize a pending refund */
  queryRefund(t) {
    return e.post(`/admin/payment/orders/${t}/refund/query`);
  },
  // ==================== Channels ====================
  /** Get all payment channels */
  getChannels() {
    return e.get("/admin/payment/channels");
  },
  /** Create a payment channel */
  createChannel(t) {
    return e.post("/admin/payment/channels", t);
  },
  /** Update a payment channel */
  updateChannel(t, a) {
    return e.put(`/admin/payment/channels/${t}`, a);
  },
  /** Delete a payment channel */
  deleteChannel(t) {
    return e.delete(`/admin/payment/channels/${t}`);
  },
  // ==================== Subscription Plans ====================
  /** Get all subscription plans */
  getPlans() {
    return e.get("/admin/payment/plans");
  },
  /** Create a subscription plan */
  createPlan(t) {
    return e.post("/admin/payment/plans", t);
  },
  /** Update a subscription plan */
  updatePlan(t, a) {
    return e.put(`/admin/payment/plans/${t}`, a);
  },
  /** Delete a subscription plan */
  deletePlan(t) {
    return e.delete(`/admin/payment/plans/${t}`);
  },
  // ==================== Provider Instances ====================
  /** Get all provider instances */
  getProviders() {
    return e.get("/admin/payment/providers");
  },
  /** Create a provider instance */
  createProvider(t) {
    return e.post("/admin/payment/providers", t);
  },
  /** Update a provider instance */
  updateProvider(t, a) {
    return e.put(`/admin/payment/providers/${t}`, a);
  },
  /** Delete a provider instance */
  deleteProvider(t) {
    return e.delete(`/admin/payment/providers/${t}`);
  }
};
async function Ac(t = {}) {
  const { data: a } = await e.get(
    "/admin/affiliates/users",
    {
      params: {
        page: t.page ?? 1,
        page_size: t.page_size ?? 20,
        search: t.search ?? ""
      }
    }
  );
  return a;
}
async function xc(t) {
  const { data: a } = await e.get(
    "/admin/affiliates/users/lookup",
    { params: { q: t } }
  );
  return a;
}
async function Tc(t, a) {
  const { data: n } = await e.put(
    `/admin/affiliates/users/${t}`,
    a
  );
  return n;
}
async function Ic(t) {
  const { data: a } = await e.delete(
    `/admin/affiliates/users/${t}`
  );
  return a;
}
async function Pc(t) {
  const { data: a } = await e.post(
    "/admin/affiliates/users/batch-rate",
    t
  );
  return a;
}
function mt(t = {}) {
  return {
    page: t.page ?? 1,
    page_size: t.page_size ?? 20,
    search: t.search ?? "",
    inviter_id: t.inviter_id || void 0,
    start_at: t.start_at || void 0,
    end_at: t.end_at || void 0,
    sort_by: t.sort_by || void 0,
    sort_order: t.sort_order || void 0,
    timezone: t.timezone || void 0
  };
}
async function Oc(t = {}) {
  const { data: a } = await e.get(
    "/admin/affiliates/invites",
    { params: mt(t) }
  );
  return a;
}
async function Mc(t) {
  const { data: a } = await e.post(
    "/admin/affiliates/invites",
    t
  );
  return a;
}
async function Rc(t = {}) {
  const { data: a } = await e.get(
    "/admin/affiliates/rebates",
    { params: mt(t) }
  );
  return a;
}
async function Uc(t = {}) {
  const { data: a } = await e.get(
    "/admin/affiliates/transfers",
    { params: mt(t) }
  );
  return a;
}
async function Ec(t) {
  const { data: a } = await e.get(
    `/admin/affiliates/users/${t}/overview`
  );
  return a;
}
async function Dc(t, a, n) {
  var o;
  const s = await e.post(
    `/admin/affiliates/users/${t}/withdraw`,
    a,
    { headers: { "Idempotency-Key": n } }
  );
  return {
    result: s.data,
    replayed: ((o = s.headers) == null ? void 0 : o["x-idempotency-replayed"]) === "true"
  };
}
const Bc = {
  listUsers: Ac,
  lookupUsers: xc,
  updateUserSettings: Tc,
  clearUserSettings: Ic,
  batchSetRate: Pc,
  listInviteRecords: Oc,
  bindRelationship: Mc,
  listRebateRecords: Rc,
  listTransferRecords: Uc,
  getUserOverview: Ec,
  withdrawUserQuota: Dc
};
async function Lc() {
  const { data: t } = await e.get("/admin/risk-control/config");
  return t;
}
async function zc(t) {
  const { data: a } = await e.put("/admin/risk-control/config", t);
  return a;
}
async function Nc() {
  const { data: t } = await e.get("/admin/risk-control/status");
  return t;
}
async function Kc(t = {}) {
  const { data: a } = await e.post("/admin/risk-control/api-keys/test", t);
  return a;
}
async function qc(t = {}) {
  const { data: a } = await e.get("/admin/risk-control/logs", {
    params: t
  });
  return a;
}
async function Gc(t) {
  const { data: a } = await e.post(
    `/admin/risk-control/users/${t}/unban`
  );
  return a;
}
async function Wc(t) {
  const { data: a } = await e.delete("/admin/risk-control/hashes", {
    data: { input_hash: t }
  });
  return a;
}
async function Fc() {
  const { data: t } = await e.delete("/admin/risk-control/hashes/all");
  return t;
}
const Hc = {
  getConfig: Lc,
  updateConfig: zc,
  getStatus: Nc,
  testAPIKeys: Kc,
  listLogs: qc,
  unbanUser: Gc,
  deleteFlaggedHash: Wc,
  clearFlaggedHashes: Fc
}, Vc = {
  async getStatus() {
    const { data: t } = await e.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: a } = await e.post("/admin/compliance/accept", t);
    return a;
  }
};
async function Qc(t) {
  const { data: a } = await e.get("/admin/audit-logs", { params: t });
  return a;
}
async function jc(t) {
  const { data: a } = await e.get(`/admin/audit-logs/${t}`);
  return a;
}
async function Jc(t) {
  const { data: a } = await e.post("/admin/audit-logs/clear", { totp_code: t });
  return a;
}
const Yc = {
  list: Qc,
  get: jc,
  clear: Jc
};
async function Zc() {
  const { data: t } = await e.get("/admin/plugins");
  return t;
}
async function Xc(t) {
  const a = new FormData();
  a.append("plugin", t);
  const { data: n } = await e.post("/admin/plugins/upload", a, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 12e4
  });
  return n;
}
async function tu(t, a, n) {
  const { data: s } = await e.post(`/admin/plugins/${t}/enable`, {
    rollout_percent: a,
    accept_untested: n
  });
  return s;
}
async function au(t) {
  const { data: a } = await e.post(`/admin/plugins/${t}/disable`);
  return a;
}
async function eu(t) {
  await e.delete(`/admin/plugins/${t}`);
}
async function nu(t) {
  const { data: a } = await e.get(`/admin/plugins/${t}/config`);
  return a;
}
async function su(t, a) {
  const { data: n } = await e.put(`/admin/plugins/${t}/config`, a);
  return n;
}
async function ou(t) {
  const { data: a } = await e.post(`/admin/plugins/${t}/test`);
  return a;
}
async function iu(t) {
  const { data: a } = await e.get(`/admin/plugins/${t}/status`);
  return a;
}
async function ru(t) {
  const { data: a } = await e.post(`/admin/plugins/${t}/ui-session`);
  return a;
}
const cu = {
  list: Zc,
  upload: Xc,
  enable: tu,
  disable: au,
  remove: eu,
  getConfig: nu,
  saveConfig: su,
  test: ou,
  status: iu,
  createUISession: ru
}, Eu = {
  dashboard: ba,
  users: Ka,
  groups: he,
  accounts: Mn,
  proxies: Qn,
  redeem: ss,
  promo: ls,
  announcements: ws,
  settings: to,
  system: Vt,
  subscriptions: go,
  usage: $o,
  gemini: Ao,
  antigravity: Po,
  grok: Wo,
  cnProviders: Vo,
  userAttributes: ni,
  ops: Yi,
  errorPassthrough: nr,
  dataManagement: vr,
  apiKeys: Sr,
  scheduledTests: Ir,
  backup: Wr,
  tlsFingerprintProfiles: Jr,
  channels: sc,
  channelMonitor: yc,
  channelMonitorTemplate: kc,
  payment: Cc,
  affiliates: Bc,
  riskControl: Hc,
  compliance: Vc,
  audit: Yc,
  plugins: cu
}, St = ct([]), kt = ct([]), Ct = ct([]);
Qt(() => {
  const t = It().map((n) => ({ value: n.id, label: n.display_name }));
  St.splice(0, St.length, ...t);
  const a = t.filter(
    (n) => ["anthropic", "openai", "gemini", "antigravity", "grok", "kimi", "zhipu", "deepseek", "minimax", "opencode_go"].includes(n.value)
  );
  kt.splice(0, kt.length, ...a), Ct.splice(0, Ct.length, ...t, {
    value: "composite",
    label: "Composite"
  });
});
const uu = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], du = { class: "select-value" }, lu = ["onKeydown"], pu = { class: "select-icon" }, mu = {
  key: 0,
  class: "select-search"
}, gu = ["placeholder", "aria-label"], fu = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], yu = {
  key: 0,
  class: "select-empty"
}, st = 8, hu = 200, wu = 300, bu = /* @__PURE__ */ At({
  __name: "Select",
  props: {
    modelValue: { type: [String, Number, Boolean, null] },
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    searchable: { type: [Boolean, String], default: "auto" },
    searchPlaceholder: {},
    emptyText: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    creatable: { type: Boolean, default: !1 },
    creatablePrefix: { default: "" },
    clearable: { type: Boolean, default: !1 },
    id: {},
    ariaLabel: {},
    ariaDescribedby: {},
    remote: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(t, { emit: a }) {
    const { t: n } = xt(), s = `select-${Math.random().toString(36).substring(2, 9)}`, o = t, u = a, d = x(!1), p = x(""), l = x(-1), m = x(null), w = x(null), M = x(null), R = x(null), W = x(null), O = x("bottom"), h = x(null), E = k(() => o.placeholder ?? n("common.selectOption")), D = k(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), J = k(() => o.emptyText ?? n("common.noOptionsFound"));
    let b = null;
    const B = k(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), F = k(() => {
      if (!h.value) return {};
      const i = h.value, r = Math.max(st, window.innerWidth - st), c = Math.min(
        Math.max(st, i.left),
        r
      ), y = Math.max(0, r - c), L = Math.max(hu, i.width), Wt = Math.min(L, y), Y = {
        position: "fixed",
        left: `${c}px`,
        minWidth: `${Wt}px`,
        maxWidth: `${y}px`,
        zIndex: "100000020"
      };
      return O.value === "top" ? Y.bottom = `${window.innerHeight - i.top + 4}px` : Y.top = `${i.bottom + 4}px`, Y;
    }), T = (i) => typeof i == "object" && i !== null ? i[o.valueKey] : i, v = (i) => String(typeof i == "object" && i !== null ? i[o.labelKey] ?? "" : i ?? ""), g = (i) => typeof i == "object" && i !== null ? !!i.disabled : !1, A = (i) => typeof i == "object" && i !== null ? i.kind === "group" : !1, I = k(() => o.options.find((i) => T(i) === o.modelValue) || null), f = k(() => I.value ? v(I.value) : o.creatable && o.modelValue ? String(o.modelValue) : E.value), $ = k(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), _ = k(() => {
      let i = o.options;
      if (B.value && p.value && !o.remote) {
        const r = p.value.toLowerCase();
        if (i = i.filter((c) => !!(v(c).toLowerCase().includes(r) || c.description && String(c.description).toLowerCase().includes(r))), o.creatable && p.value.trim()) {
          const c = p.value.trim(), y = o.creatablePrefix || n("common.search");
          i = [{ [o.valueKey]: c, [o.labelKey]: `${y} "${c}"`, _creatable: !0 }, ...i];
        }
      }
      return i;
    }), q = (i) => T(i) === o.modelValue, gt = (i) => {
      const r = _.value;
      if (r.length === 0) return -1;
      for (let c = 0; c < r.length; c++) {
        const y = (i + c) % r.length;
        if (!g(r[y])) return y;
      }
      return -1;
    }, Nt = (i) => {
      const r = _.value;
      if (r.length === 0) return -1;
      for (let c = 0; c < r.length; c++) {
        const y = (i - c + r.length) % r.length;
        if (!g(r[y])) return y;
      }
      return -1;
    }, Kt = (i, r) => {
      g(i) || A(i) || (l.value = r);
    }, H = () => {
      m.value && (h.value = m.value.getBoundingClientRect());
    }, V = () => {
      m.value && (H(), tt(() => {
        if (!R.value || !h.value) return;
        const i = R.value.offsetHeight || 240, r = window.innerHeight - h.value.bottom, c = h.value.top;
        r < i && c > i ? O.value = "top" : O.value = "bottom";
      }));
    }, qt = () => {
      o.disabled || (d.value = !d.value);
    };
    Z(() => o.disabled, (i) => {
      i && (d.value = !1);
    }), Z(d, (i) => {
      if (i) {
        if (V(), _.value.length === 0)
          l.value = -1;
        else {
          const r = _.value.findIndex(q), c = r >= 0 ? r : 0;
          l.value = g(_.value[c]) ? gt(c + 1) : c;
        }
        B.value && tt(() => {
          var r;
          return (r = M.value) == null ? void 0 : r.focus();
        }), window.addEventListener("scroll", H, { capture: !0, passive: !0 }), window.addEventListener("resize", V);
      } else
        p.value = "", l.value = -1, b && (clearTimeout(b), b = null), window.removeEventListener("scroll", H, { capture: !0 }), window.removeEventListener("resize", V);
    }), Z(p, (i) => {
      !o.remote || !d.value || (b && clearTimeout(b), b = setTimeout(() => {
        b = null, u("search", i.trim());
      }, wu));
    });
    const ft = (i) => {
      var c;
      const r = T(i) ?? null;
      u("update:modelValue", r), u("change", r, i), d.value = !1, (c = w.value) == null || c.focus();
    }, yt = () => {
      o.disabled || (u("update:modelValue", null), u("change", null, null));
    }, ht = () => {
      d.value || (d.value = !0);
    }, Gt = (i) => {
      var r;
      if (!i.isComposing)
        switch (i.key) {
          case "ArrowDown":
            i.preventDefault(), l.value = gt(l.value + 1), l.value >= 0 && wt();
            break;
          case "ArrowUp":
            i.preventDefault(), l.value = Nt(l.value - 1), l.value >= 0 && wt();
            break;
          case "Enter":
            if (i.preventDefault(), l.value >= 0 && l.value < _.value.length) {
              const c = _.value[l.value];
              g(c) || ft(c);
            }
            break;
          case "Escape":
            i.preventDefault(), d.value = !1, (r = w.value) == null || r.focus();
            break;
          case "Tab":
            d.value = !1;
            break;
        }
    }, wt = () => {
      tt(() => {
        const i = W.value;
        if (!i) return;
        const r = i.children[l.value];
        r && (r.offsetTop < i.scrollTop ? i.scrollTop = r.offsetTop : r.offsetTop + r.offsetHeight > i.scrollTop + i.offsetHeight && (i.scrollTop = r.offsetTop + r.offsetHeight - i.offsetHeight));
      });
    }, bt = (i) => {
      var L;
      const r = i.target, c = !!r.closest(`.${s}`), y = (L = m.value) == null ? void 0 : L.contains(r);
      !c && !y && d.value && (d.value = !1);
    };
    return jt(() => {
      document.addEventListener("click", bt);
    }), Jt(() => {
      document.removeEventListener("click", bt), window.removeEventListener("scroll", H, { capture: !0 }), window.removeEventListener("resize", V), b && (clearTimeout(b), b = null);
    }), (i, r) => (S(), U("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: m
    }, [
      C("button", {
        ref_key: "triggerRef",
        ref: w,
        type: "button",
        onClick: qt,
        disabled: t.disabled,
        "aria-expanded": d.value,
        "aria-haspopup": !0,
        id: t.id,
        "aria-label": t.ariaLabel ?? "Select option",
        "aria-describedby": t.ariaDescribedby,
        class: N([
          "select-trigger",
          "console-skin-select-trigger",
          d.value && "select-trigger-open",
          t.error && "select-trigger-error",
          t.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          X(P(ht, ["prevent"]), ["down"]),
          X(P(ht, ["prevent"]), ["up"])
        ]
      }, [
        C("span", du, [
          ot(i.$slots, "selected", { option: I.value }, () => [
            Xt(K(f.value), 1)
          ], !0)
        ]),
        t.clearable && $.value && !t.disabled ? (S(), U("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: P(yt, ["stop"]),
          onMousedown: r[0] || (r[0] = P(() => {
          }, ["stop"])),
          onKeydown: X(P(yt, ["stop", "prevent"]), ["enter"])
        }, [
          Q(G, {
            name: "x",
            size: "sm"
          })
        ], 40, lu)) : z("", !0),
        C("span", pu, [
          Q(G, {
            name: "chevronDown",
            size: "md",
            class: N(["transition-transform duration-200", d.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, uu),
      (S(), j(Yt, { to: "body" }, [
        Q(Zt, { name: "select-dropdown" }, {
          default: it(() => [
            d.value ? (S(), U("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: R,
              class: N(["select-dropdown-portal console-skin-select-menu", [s]]),
              style: ta(F.value),
              role: "listbox",
              onClick: r[3] || (r[3] = P(() => {
              }, ["stop"])),
              onMousedown: r[4] || (r[4] = P(() => {
              }, ["stop"])),
              onKeydown: Gt
            }, [
              B.value ? (S(), U("div", mu, [
                Q(G, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                aa(C("input", {
                  ref_key: "searchInputRef",
                  ref: M,
                  "onUpdate:modelValue": r[1] || (r[1] = (c) => p.value = c),
                  type: "text",
                  placeholder: D.value,
                  "aria-label": D.value,
                  class: "select-search-input",
                  onClick: r[2] || (r[2] = P(() => {
                  }, ["stop"]))
                }, null, 8, gu), [
                  [ea, p.value]
                ])
              ])) : z("", !0),
              C("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: W
              }, [
                (S(!0), U(na, null, sa(_.value, (c, y) => (S(), U("div", {
                  key: `${typeof T(c)}:${String(T(c) ?? "")}`,
                  role: "option",
                  "aria-selected": q(c),
                  "aria-disabled": g(c),
                  onClick: P((L) => !g(c) && ft(c), ["stop"]),
                  onMouseenter: (L) => Kt(c, y),
                  class: N([
                    "select-option",
                    A(c) && "select-option-group",
                    q(c) && "select-option-selected",
                    g(c) && !A(c) && "select-option-disabled",
                    l.value === y && !A(c) && "select-option-focused"
                  ])
                }, [
                  ot(i.$slots, "option", {
                    option: c,
                    selected: q(c)
                  }, () => [
                    c._creatable ? (S(), j(G, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : z("", !0),
                    C("span", {
                      class: N(["select-option-label", c._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, K(v(c)), 3),
                    q(c) ? (S(), j(G, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : z("", !0)
                  ], !0)
                ], 42, fu))), 128)),
                _.value.length === 0 ? (S(), U("div", yu, K(o.loading ? oa(n)("common.loading") : J.value), 1)) : z("", !0)
              ], 512)
            ], 38)) : z("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Du = /* @__PURE__ */ ia(bu, [["__scopeId", "data-v-02ecdb4b"]]), _u = { class: "space-y-4" }, vu = { class: "text-sm text-gray-600 dark:text-gray-400" }, $u = { class: "flex justify-end space-x-3" }, Bu = /* @__PURE__ */ At({
  __name: "ConfirmDialog",
  props: {
    show: { type: Boolean },
    title: {},
    message: {},
    confirmText: {},
    cancelText: {},
    danger: { type: Boolean, default: !1 }
  },
  emits: ["confirm", "cancel"],
  setup(t, { emit: a }) {
    const { t: n } = xt(), s = t, o = k(() => s.confirmText || n("common.confirm")), u = k(() => s.cancelText || n("common.cancel")), d = a, p = () => {
      d("confirm");
    }, l = () => {
      d("cancel");
    };
    return (m, w) => (S(), j(ra, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: l
    }, {
      footer: it(() => [
        C("div", $u, [
          C("button", {
            onClick: l,
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 dark:focus:ring-offset-dark-800"
          }, K(u.value), 1),
          C("button", {
            onClick: p,
            type: "button",
            class: N([
              "rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800",
              t.danger ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
            ])
          }, K(o.value), 3)
        ])
      ]),
      default: it(() => [
        C("div", _u, [
          C("p", vu, K(t.message), 1),
          ot(m.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
});
export {
  Ou as A,
  Sa as B,
  St as C,
  Vc as D,
  Ct as G,
  kt as M,
  Du as S,
  Bu as _,
  sn as a,
  Eu as b,
  Mn as c,
  Tu as d,
  mn as e,
  Cu as f,
  ka as g,
  xu as h,
  ut as i,
  Ga as j,
  vs as k,
  It as l,
  Pu as m,
  _s as n,
  Yi as o,
  bs as p,
  Pt as q,
  pn as r,
  Au as s,
  Bt as t,
  Rt as u,
  Ru as v,
  Uu as w,
  Mu as x,
  $s as y,
  Iu as z
};
