import { a as n, aa as Pe, ab as ze, p as I, i as P, Q as De, w as tt, ac as ne, $ as Ue, d as At, u as Ot, r as B, c as Lt, o as fe, m as b, f as $, F as Q, j as Z, g as f, l as F, J as at, q as st, _ as nt, h as M, s as W, z as X, k as ct, D as Kt, n as lt, B as Vt, E as _t, A as Ct, M as Be, T as Le, v as Ft, x as pe, y as he } from "./cnProviderAdminLeaf-DehadpuS.js";
import { _ as Ke } from "./BaseDialog.vue_vue_type_script_setup_true_lang-CoJJzgOV.js";
async function Fe() {
  const { data: t } = await n.get("/admin/dashboard/stats");
  return t;
}
async function Ne() {
  const { data: t } = await n.get("/admin/dashboard/realtime");
  return t;
}
async function We(t) {
  const { data: e } = await n.get("/admin/dashboard/trend", { params: t });
  return e;
}
async function Ve(t) {
  const { data: e } = await n.get("/admin/dashboard/models", { params: t });
  return e;
}
async function je(t) {
  const { data: e } = await n.get("/admin/dashboard/groups", { params: t });
  return e;
}
async function ud(t) {
  const { data: e } = await n.get("/admin/dashboard/user-breakdown", {
    params: t
  });
  return e;
}
async function qe(t) {
  const { data: e } = await n.get("/admin/dashboard/snapshot-v2", {
    params: t
  });
  return e;
}
async function Ge(t) {
  const { data: e } = await n.get("/admin/dashboard/api-keys-trend", {
    params: t
  });
  return e;
}
async function He(t) {
  const { data: e } = await n.get("/admin/dashboard/users-trend", {
    params: t
  });
  return e;
}
async function Qe(t) {
  const { data: e } = await n.get("/admin/dashboard/users-ranking", {
    params: t
  });
  return e;
}
async function Je(t) {
  const { data: e } = await n.post("/admin/dashboard/users-usage", {
    user_ids: t
  });
  return e;
}
async function Ze(t) {
  const { data: e } = await n.post(
    "/admin/dashboard/api-keys-usage",
    {
      api_key_ids: t
    }
  );
  return e;
}
const Xe = {
  getStats: Fe,
  getRealtimeMetrics: Ne,
  getUsageTrend: We,
  getModelStats: Ve,
  getGroupStats: je,
  getSnapshotV2: qe,
  getApiKeyUsageTrend: Ge,
  getUserUsageTrend: He,
  getUserSpendingRanking: Qe,
  getBatchUsersUsage: Je,
  getBatchApiKeysUsage: Ze
};
async function Ye(t = 1, e = 20, a, s) {
  const r = {
    page: t,
    page_size: e,
    status: a == null ? void 0 : a.status,
    role: a == null ? void 0 : a.role,
    search: a == null ? void 0 : a.search,
    group_name: a == null ? void 0 : a.group_name,
    api_key_group_id: a == null ? void 0 : a.api_key_group_id,
    include_subscriptions: a == null ? void 0 : a.include_subscriptions,
    affiliate_view: a == null ? void 0 : a.affiliate_view,
    sort_by: a == null ? void 0 : a.sort_by,
    sort_order: a == null ? void 0 : a.sort_order
  };
  if (a != null && a.attributes)
    for (const [c, l] of Object.entries(a.attributes))
      l && (r[`attr[${c}]`] = l);
  const { data: o } = await n.get("/admin/users", {
    params: r,
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function ta(t, e = !1) {
  const a = e ? `/admin/users/${t}?include_deleted=true` : `/admin/users/${t}`, { data: s } = await n.get(a);
  return s;
}
async function ea(t) {
  const { data: e } = await n.post("/admin/users", t);
  return e;
}
async function jt(t, e) {
  const { data: a } = await n.put(`/admin/users/${t}`, e);
  return a;
}
async function aa(t) {
  const { data: e } = await n.delete(`/admin/users/${t}`);
  return e;
}
async function na(t, e, a = "set", s) {
  const { data: r } = await n.post(`/admin/users/${t}/balance`, {
    balance: e,
    operation: a,
    notes: s || ""
  });
  return r;
}
async function sa(t, e) {
  return jt(t, { concurrency: e });
}
async function ra(t) {
  const { data: e } = await n.post(
    "/admin/users/batch-limits",
    t
  );
  return e;
}
async function ia(t, e) {
  return jt(t, { status: e });
}
async function oa(t) {
  const { data: e } = await n.get(`/admin/users/${t}/api-keys`);
  return e;
}
async function ca(t, e = "month") {
  const { data: a } = await n.get(`/admin/users/${t}/usage`, {
    params: { period: e }
  });
  return a;
}
async function la(t, e = 1, a = 20, s) {
  const r = { page: e, page_size: a };
  s && (r.type = s);
  const { data: o } = await n.get(
    `/admin/users/${t}/balance-history`,
    { params: r }
  );
  return o;
}
async function ua(t, e, a) {
  const { data: s } = await n.post(
    `/admin/users/${t}/replace-group`,
    { old_group_id: e, new_group_id: a }
  );
  return s;
}
async function da(t, e) {
  const { data: a } = await n.post(
    `/admin/users/${t}/auth-identities`,
    e
  );
  return a;
}
async function ma(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/platform-quotas`
  );
  return e;
}
async function ga(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/platform-quotas`,
    { quotas: e }
  );
  return a;
}
async function fa(t, e, a) {
  const { data: s } = await n.post(
    `/admin/users/${t}/platform-quotas/reset`,
    { platform: e, window: a }
  );
  return s;
}
const pa = {
  list: Ye,
  getById: ta,
  create: ea,
  update: jt,
  delete: aa,
  updateBalance: na,
  updateConcurrency: sa,
  batchUpdateLimits: ra,
  toggleStatus: ia,
  getUserApiKeys: oa,
  getUserUsageStats: ca,
  getUserBalanceHistory: la,
  replaceGroup: ua,
  bindUserAuthIdentity: da,
  getPlatformQuotas: ma,
  updatePlatformQuotas: ga,
  resetPlatformQuotaWindow: fa
};
async function ha(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/groups", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function ye(t) {
  const { data: e } = await n.get("/admin/groups/all", {
    params: t ? { platform: t } : void 0
  });
  return e;
}
async function ya() {
  const { data: t } = await n.get("/admin/groups/all", {
    params: { include_inactive: !0 }
  });
  return t;
}
async function wa(t) {
  return ye(t);
}
async function ba() {
  const { data: t } = await n.get("/admin/groups/live-capability");
  return t;
}
async function va(t) {
  const { data: e } = await n.get(`/admin/groups/${t}`);
  return e;
}
async function ka(t, e) {
  const { data: a } = await n.get(
    `/admin/groups/${t}/model-allowlist-candidates`,
    {
      params: e ? { platform: e } : void 0
    }
  );
  return a.models || [];
}
async function Sa(t) {
  const { data: e } = await n.post("/admin/groups", t);
  return e;
}
const zt = /* @__PURE__ */ new Map();
function $a() {
  var t;
  try {
    const e = (t = globalThis.localStorage) == null ? void 0 : t.getItem("auth_user");
    if (!e) return null;
    const a = JSON.parse(e);
    if (typeof a != "object" || a === null) return null;
    const s = a.id;
    return typeof s != "number" || !Number.isSafeInteger(s) || s <= 0 ? null : String(s);
  } catch {
    return null;
  }
}
function xa(t) {
  const e = $a();
  return e ? {
    adminID: e,
    key: `sub2api:admin:group-duplicate:${e}:${t}`
  } : null;
}
function _a(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function se(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Ca(t) {
  var r, o;
  const e = xa(t);
  let a = e ? zt.get(e.key) ?? _a(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `group-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (zt.set(e.key, a), se(e.key, a));
  const { data: s } = await n.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return e && (zt.delete(e.key), se(e.key, null)), s;
}
async function we(t, e) {
  const { data: a } = await n.put(`/admin/groups/${t}`, e);
  return a;
}
async function Ia(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}`);
  return e;
}
async function Aa(t, e) {
  return we(t, { status: e });
}
async function Oa(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/stats`);
  return e;
}
async function Ea(t, e = 1, a = 20) {
  const { data: s } = await n.get(`/admin/groups/${t}/api-keys`, {
    params: { page: e, page_size: a }
  });
  return s;
}
async function Ma(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/composite-routes`);
  return e;
}
async function Ta(t, e) {
  const { data: a } = await n.post(
    `/admin/groups/${t}/composite-routes`,
    e
  );
  return a;
}
async function Ra(t, e, a) {
  const { data: s } = await n.put(
    `/admin/groups/${t}/composite-routes/${e}`,
    a
  );
  return s;
}
async function Pa(t, e) {
  const { data: a } = await n.delete(
    `/admin/groups/${t}/composite-routes/${e}`
  );
  return a;
}
async function za(t, e) {
  const { data: a } = await n.post(
    `/admin/groups/${t}/composite-routes/preview`,
    e
  );
  return a;
}
async function Da(t) {
  const { data: e } = await n.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return e;
}
async function Ua(t) {
  const { data: e } = await n.put("/admin/groups/sort-order", {
    updates: t
  });
  return e;
}
async function Ba(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rate-multipliers`);
  return e;
}
async function La(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rate-multipliers`,
    { entries: e }
  );
  return a;
}
async function Ka(t) {
  const { data: e } = await n.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return e.filter((a) => a.rpm_override != null).map((a) => ({
    user_id: a.user_id,
    user_name: a.user_name,
    user_email: a.user_email,
    user_notes: a.user_notes,
    user_status: a.user_status,
    rpm_override: a.rpm_override
  }));
}
async function Fa(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rpm-overrides`,
    { entries: e }
  );
  return a;
}
async function Na(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rpm-overrides`);
  return e;
}
async function Wa() {
  const { data: t } = await n.get("/admin/groups/usage-summary");
  return t;
}
async function Va() {
  const { data: t } = await n.get("/admin/groups/capacity-summary");
  return t;
}
const ja = {
  list: ha,
  getAll: ye,
  getByPlatform: wa,
  getAllIncludingInactive: ya,
  getLiveCapability: ba,
  getById: va,
  getModelAllowlistCandidates: ka,
  create: Sa,
  duplicate: Ca,
  update: we,
  delete: Ia,
  toggleStatus: Aa,
  getStats: Oa,
  getGroupApiKeys: Ea,
  listCompositeRoutes: Ma,
  createCompositeRoute: Ta,
  updateCompositeRoute: Ra,
  deleteCompositeRoute: Pa,
  previewCompositeRoute: za,
  getGroupRateMultipliers: Da,
  clearGroupRateMultipliers: Ba,
  batchSetGroupRateMultipliers: La,
  getGroupRPMOverrides: Ka,
  clearGroupRPMOverrides: Na,
  batchSetGroupRPMOverrides: Fa,
  updateSortOrder: Ua,
  getUsageSummary: Wa,
  getCapacitySummary: Va
};
async function qa(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/accounts", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function Ga(t = 1, e = 20, a, s) {
  var l;
  const r = {};
  s != null && s.etag && (r["If-None-Match"] = s.etag);
  const o = await n.get("/admin/accounts", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    headers: r,
    signal: s == null ? void 0 : s.signal,
    validateStatus: (g) => g >= 200 && g < 300 || g === 304
  }), c = typeof ((l = o.headers) == null ? void 0 : l.etag) == "string" ? o.headers.etag : null;
  return o.status === 304 ? {
    notModified: !0,
    etag: c,
    data: null
  } : {
    notModified: !1,
    etag: c,
    data: o.data
  };
}
async function Ha(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}`);
  return e;
}
async function Qa(t) {
  const { data: e } = await n.post("/admin/accounts", t);
  return e;
}
const Dt = /* @__PURE__ */ new Map();
function Nt(t) {
  return `sub2api:admin:account-duplicate:${t}`;
}
function Ja(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(Nt(t))) ?? null;
  } catch {
    return null;
  }
}
function re(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(Nt(t), e) : (s = globalThis.sessionStorage) == null || s.removeItem(Nt(t));
  } catch {
  }
}
async function Za(t) {
  var s, r;
  let e = Dt.get(t) ?? Ja(t);
  if (!e) {
    const o = ((r = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : r.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    e = `account-duplicate-${t}-${o}`;
  }
  Dt.set(t, e), re(t, e);
  const { data: a } = await n.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": e }
  });
  return Dt.delete(t), re(t, null), a;
}
async function be(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}`, e);
  return a;
}
async function Xa(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/grok-media-eligibility`
  );
  return e;
}
async function Ya(t, e) {
  const { data: a } = await n.put(
    `/admin/accounts/${t}/grok-media-eligibility`,
    { mode: e }
  );
  return a;
}
async function tn(t) {
  const { data: e } = await n.post("/admin/accounts/check-mixed-channel", t);
  return e;
}
async function en(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}`);
  return e;
}
async function an(t, e) {
  return be(t, { status: e });
}
async function nn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/test`);
  return e;
}
async function sn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/refresh`);
  return "account" in e ? e : { account: e };
}
async function rn(t, e) {
  const { data: a } = await n.post(
    `/admin/accounts/${t}/apply-oauth-credentials`,
    e
  );
  return a;
}
async function on(t, e = 30) {
  const { data: a } = await n.get(`/admin/accounts/${t}/stats`, {
    params: { days: e }
  });
  return a;
}
async function cn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/clear-error`);
  return e;
}
async function ln(t, e, a) {
  const s = {};
  e && (s.source = e), a && (s.force = "true");
  const { data: r } = await n.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return r;
}
async function un(t, e) {
  const { data: a } = await n.post("/admin/accounts/usage/batch", {
    account_ids: t,
    force: e === !0
  });
  return a;
}
async function dn(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/clear-rate-limit`
  );
  return e;
}
async function mn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/recover-state`);
  return e;
}
async function gn(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/reset-quota`
  );
  return e;
}
async function fn(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function pn(t) {
  const { data: e } = await n.delete(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function hn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function yn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function wn(t) {
  const { data: e } = await n.post("/admin/accounts/batch", { accounts: t });
  return e;
}
async function bn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-update-credentials", t);
  return e;
}
async function vn(t, e) {
  const a = Array.isArray(t) ? {
    account_ids: t,
    ...e ?? {}
  } : t, { data: s } = await n.post("/admin/accounts/bulk-update", a);
  return s;
}
async function kn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/today-stats`);
  return e;
}
async function Sn(t) {
  const { data: e } = await n.post("/admin/accounts/today-stats/batch", {
    account_ids: t
  });
  return e;
}
async function $n(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/schedulable`, {
    schedulable: e
  });
  return a;
}
async function xn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/models`);
  return e;
}
async function _n(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/models/sync-upstream`);
  return e;
}
async function Cn(t) {
  const { data: e } = await n.post("/admin/accounts/models/sync-upstream-preview", t);
  return e;
}
async function In(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs/preview", t);
  return e;
}
async function An(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs", t, {
    timeout: 18e4
    // 180s timeout: sync refreshes each existing account's OAuth token serially
  });
  return e;
}
async function On(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { platform: s, type: r, status: o, group: c, privacy_mode: l, search: g, sort_by: x, sort_order: C } = t.filters;
    s && (e.platform = s), r && (e.type = r), o && (e.status = o), c && (e.group = c), l && (e.privacy_mode = l), g && (e.search = g), x && (e.sort_by = x), C && (e.sort_order = C);
  }
  (t == null ? void 0 : t.includeProxies) === !1 && (e.include_proxies = "false");
  const { data: a } = await n.get("/admin/accounts/data", { params: e });
  return a;
}
async function En(t) {
  const { data: e } = await n.post("/admin/accounts/data", {
    data: t.data,
    skip_default_group_bind: t.skip_default_group_bind
  });
  return e;
}
async function Mn(t) {
  const { data: e } = await n.post("/admin/accounts/import/codex-session", t, {
    timeout: 12e4
    // 120s timeout for large session imports
  });
  return e;
}
async function Tn(t) {
  const { data: e } = await n.post("/admin/openai/create-from-codex-pat", t);
  return e;
}
async function Rn() {
  const { data: t } = await n.get(
    "/admin/accounts/antigravity/default-model-mapping"
  );
  return t;
}
async function Pn(t, e, a = "/admin/openai/refresh-token", s) {
  const r = {
    refresh_token: t
  };
  e && (r.proxy_id = e), s && (r.client_id = s);
  const { data: o } = await n.post(a, r);
  return o;
}
async function zn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/revert-proxy-fallback`);
  return e;
}
async function Dn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-delete", {
    account_ids: t
  });
  return e;
}
async function Un(t) {
  const { data: e } = await n.post("/admin/accounts/batch-clear-error", {
    account_ids: t
  });
  return e;
}
async function Bn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-refresh", {
    account_ids: t
  }, {
    timeout: 12e4
    // 120s timeout for large batch refreshes
  });
  return e;
}
async function Ln(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/set-privacy`);
  return e;
}
async function Kn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/quota/refresh`
  );
  return e;
}
async function Fn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/reset-quota`,
    void 0,
    { timeout: 9e4 }
  );
  return e;
}
async function Nn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/shadow`, e);
  return a;
}
async function Wn() {
  const { data: t } = await n.get("/admin/accounts/upstream-billing-probe/settings");
  return t;
}
async function Vn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/upstream-billing-probe/settings",
    t
  );
  return e;
}
async function jn(t, e) {
  await n.put(`/admin/accounts/${t}/upstream-billing-probe`, { enabled: e });
}
async function qn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/upstream-billing-probe`);
  return e;
}
async function Gn(t) {
  const { data: e } = await n.post(
    "/admin/accounts/upstream-billing-probe/batch",
    { account_ids: t }
  );
  return e.results;
}
async function Hn() {
  const { data: t } = await n.get("/admin/accounts/ollama-cloud-usage/settings");
  return t;
}
async function Qn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/ollama-cloud-usage/settings",
    t
  );
  return e;
}
async function Jn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/ollama-cloud-usage`);
  return e;
}
async function Zn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/session`, {
    session: e
  });
  return a;
}
async function Xn(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}/ollama-cloud-usage/session`);
  return e;
}
async function Yn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/auto-refresh`, {
    enabled: e
  });
  return a;
}
async function ts(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/ollama-cloud-usage/refresh`);
  return e;
}
const es = {
  list: qa,
  listWithEtag: Ga,
  getById: Ha,
  create: Qa,
  duplicate: Za,
  update: be,
  getGrokMediaEligibility: Xa,
  updateGrokMediaEligibility: Ya,
  checkMixedChannelRisk: tn,
  delete: en,
  toggleStatus: an,
  testAccount: nn,
  refreshCredentials: sn,
  applyOAuthCredentials: rn,
  getStats: on,
  clearError: cn,
  getUsage: ln,
  getBatchUsage: un,
  getTodayStats: kn,
  getBatchTodayStats: Sn,
  clearRateLimit: dn,
  recoverState: mn,
  resetAccountQuota: gn,
  getTempUnschedulableStatus: fn,
  resetTempUnschedulable: pn,
  setSchedulable: $n,
  getAvailableModels: xn,
  syncUpstreamModels: _n,
  syncUpstreamModelsPreview: Cn,
  generateAuthUrl: hn,
  exchangeCode: yn,
  refreshOpenAIToken: Pn,
  batchCreate: wn,
  batchUpdateCredentials: bn,
  bulkUpdate: vn,
  previewFromCrs: In,
  syncFromCrs: An,
  exportData: On,
  importData: En,
  importCodexSession: Mn,
  createOpenAICodexPAT: Tn,
  getAntigravityDefaultModelMapping: Rn,
  batchDelete: Dn,
  batchClearError: Un,
  batchRefresh: Bn,
  setPrivacy: Ln,
  revertProxyFallback: zn,
  refreshOpenAIQuota: Kn,
  resetOpenAIQuota: Fn,
  createSparkShadow: Nn,
  getUpstreamBillingProbeSettings: Wn,
  updateUpstreamBillingProbeSettings: Vn,
  setUpstreamBillingProbeEnabled: jn,
  probeUpstreamBilling: qn,
  probeUpstreamBillingBatch: Gn,
  getOllamaCloudUsageSettings: Hn,
  updateOllamaCloudUsageSettings: Qn,
  getOllamaCloudUsage: Jn,
  saveOllamaCloudUsageSession: Zn,
  deleteOllamaCloudUsageSession: Xn,
  setOllamaCloudUsageAutoRefresh: Yn,
  refreshOllamaCloudUsage: ts
};
function qt(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid proxy list response");
}
async function as(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/proxies", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return qt(r == null ? void 0 : r.items), r;
}
async function ns() {
  const { data: t } = await n.get("/admin/proxies/all");
  return qt(t), t;
}
async function ss() {
  const { data: t } = await n.get("/admin/proxies/all", {
    params: { with_count: "true" }
  });
  return qt(t), t;
}
async function rs(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}`);
  return e;
}
async function is(t) {
  const { data: e } = await n.post("/admin/proxies", t);
  return e;
}
async function ve(t, e) {
  const { data: a } = await n.put(`/admin/proxies/${t}`, e);
  return a;
}
async function os(t) {
  const { data: e } = await n.delete(`/admin/proxies/${t}`);
  return e;
}
async function cs(t, e) {
  return ve(t, { status: e });
}
async function ls(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/test`);
  return e;
}
async function us(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/quality-check`);
  return e;
}
async function ds(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/stats`);
  return e;
}
async function ms(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/accounts`);
  return e;
}
async function gs(t) {
  const { data: e } = await n.post("/admin/proxies/batch", { proxies: t });
  return e;
}
async function fs(t) {
  const { data: e } = await n.post("/admin/proxies/batch-delete", { ids: t });
  return e;
}
async function ps(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { protocol: s, status: r, search: o, sort_by: c, sort_order: l } = t.filters;
    s && (e.protocol = s), r && (e.status = r), o && (e.search = o), c && (e.sort_by = c), l && (e.sort_order = l);
  }
  const { data: a } = await n.get("/admin/proxies/data", { params: e });
  return a;
}
async function hs(t) {
  const { data: e } = await n.post("/admin/proxies/data", t);
  return e;
}
const ys = {
  list: as,
  getAll: ns,
  getAllWithCount: ss,
  getById: rs,
  create: is,
  update: ve,
  delete: os,
  toggleStatus: cs,
  testProxy: ls,
  checkProxyQuality: us,
  getStats: ds,
  getProxyAccounts: ms,
  batchCreate: gs,
  batchDelete: fs,
  exportData: ps,
  importData: hs
};
async function ws(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/redeem-codes", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function bs(t) {
  const { data: e } = await n.get(`/admin/redeem-codes/${t}`);
  return e;
}
async function vs(t, e, a, s, r, o, c, l) {
  const g = {
    count: t,
    type: e,
    value: a
  };
  e === "subscription" && (g.group_id = s, r && r > 0 && (g.validity_days = r)), e === "mystery_box" && (g.min_value = c, g.max_value = l), o && o > 0 && (g.expires_in_days = o);
  const { data: x } = await n.post("/admin/redeem-codes/generate", g);
  return x;
}
async function ks(t) {
  const { data: e } = await n.delete(`/admin/redeem-codes/${t}`);
  return e;
}
async function Ss(t) {
  const { data: e } = await n.post("/admin/redeem-codes/batch-delete", { ids: t });
  return e;
}
async function $s(t, e) {
  const { data: a } = await n.post("/admin/redeem-codes/batch-update", { ids: t, fields: e });
  return a;
}
async function xs(t) {
  const { data: e } = await n.post(`/admin/redeem-codes/${t}/expire`);
  return e;
}
async function _s() {
  const { data: t } = await n.get("/admin/redeem-codes/stats");
  return t;
}
async function Cs(t) {
  return (await n.get("/admin/redeem-codes/export", {
    params: t,
    responseType: "blob"
  })).data;
}
const Is = {
  list: ws,
  getById: bs,
  generate: vs,
  delete: ks,
  batchDelete: Ss,
  batchUpdate: $s,
  expire: xs,
  getStats: _s,
  exportCodes: Cs
};
async function As(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/promo-codes", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function Os(t) {
  const { data: e } = await n.get(`/admin/promo-codes/${t}`);
  return e;
}
async function Es(t) {
  const { data: e } = await n.post("/admin/promo-codes", t);
  return e;
}
async function Ms(t, e) {
  const { data: a } = await n.put(`/admin/promo-codes/${t}`, e);
  return a;
}
async function Ts(t) {
  const { data: e } = await n.delete(`/admin/promo-codes/${t}`);
  return e;
}
async function Rs(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/promo-codes/${t}/usages`,
    { params: { page: e, page_size: a } }
  );
  return s;
}
const Ps = {
  list: As,
  getById: Os,
  create: Es,
  update: Ms,
  delete: Ts,
  getUsages: Rs
};
async function zs(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/announcements", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function Ds(t) {
  const { data: e } = await n.get(`/admin/announcements/${t}`);
  return e;
}
async function Us(t) {
  const { data: e } = await n.post("/admin/announcements", t);
  return e;
}
async function Bs(t, e) {
  const { data: a } = await n.put(`/admin/announcements/${t}`, e);
  return a;
}
async function Ls(t) {
  const { data: e } = await n.delete(`/admin/announcements/${t}`);
  return e;
}
async function Ks(t, e = 1, a = 20, s, r) {
  const { data: o } = await n.get(
    `/admin/announcements/${t}/read-status`,
    {
      params: { page: e, page_size: a, ...s },
      signal: r == null ? void 0 : r.signal
    }
  );
  return o;
}
const Fs = {
  list: zs,
  getById: Ds,
  create: Us,
  update: Bs,
  delete: Ls,
  getReadStatus: Ks
};
async function Ns() {
  const { data: t } = await n.get("/admin/settings");
  return t;
}
async function Ws() {
  const { data: t } = await n.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return t;
}
async function Vs(t) {
  const { data: e } = await n.put(
    "/admin/settings",
    t
  );
  return e;
}
async function js(t) {
  const { data: e } = await n.post(
    "/admin/settings/test-smtp",
    t
  );
  return e;
}
async function qs(t) {
  const { data: e } = await n.post(
    "/admin/settings/send-test-email",
    t
  );
  return e;
}
async function Gs() {
  const { data: t } = await n.get(
    "/admin/settings/email-templates"
  );
  return t;
}
async function Hs(t, e) {
  const { data: a } = await n.get(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`
  );
  return a;
}
async function Qs(t, e, a) {
  const { data: s } = await n.put(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`,
    a
  );
  return s;
}
async function Js(t, e) {
  const { data: a } = await n.post(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}/restore-official`
  );
  return a;
}
async function Zs(t) {
  const { data: e } = await n.post(
    "/admin/settings/email-template-preview",
    t
  );
  return e;
}
async function Xs() {
  const { data: t } = await n.get(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Ys() {
  const { data: t } = await n.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return t;
}
async function tr() {
  const { data: t } = await n.delete(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function er() {
  const { data: t } = await n.get(
    "/admin/settings/overload-cooldown"
  );
  return t;
}
async function ar(t) {
  const { data: e } = await n.put(
    "/admin/settings/overload-cooldown",
    t
  );
  return e;
}
async function nr() {
  const { data: t } = await n.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function sr(t) {
  const { data: e } = await n.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return e;
}
async function rr() {
  const { data: t } = await n.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function ir(t) {
  const { data: e } = await n.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return e;
}
async function or() {
  const { data: t } = await n.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function cr(t) {
  const { data: e } = await n.put(
    "/admin/settings/stream-timeout",
    t
  );
  return e;
}
async function lr() {
  const { data: t } = await n.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function ur(t) {
  const { data: e } = await n.put(
    "/admin/settings/rectifier",
    t
  );
  return e;
}
async function dr() {
  const { data: t } = await n.get(
    "/admin/settings/beta-policy"
  );
  return t;
}
async function mr(t) {
  const { data: e } = await n.put(
    "/admin/settings/beta-policy",
    t
  );
  return e;
}
async function gr() {
  const { data: t } = await n.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function fr(t) {
  const { data: e } = await n.put(
    "/admin/settings/web-search-emulation",
    t
  );
  return e;
}
async function pr(t) {
  const { data: e } = await n.post(
    "/admin/settings/web-search-emulation/test",
    { query: t }
  );
  return e;
}
async function hr(t) {
  await n.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const yr = {
  getSettings: Ns,
  getNavigationSettings: Ws,
  updateSettings: Vs,
  testSmtpConnection: js,
  sendTestEmail: qs,
  getEmailTemplates: Gs,
  getEmailTemplate: Hs,
  updateEmailTemplate: Qs,
  restoreOfficialEmailTemplate: Js,
  previewEmailTemplate: Zs,
  getAdminApiKey: Xs,
  regenerateAdminApiKey: Ys,
  deleteAdminApiKey: tr,
  getOverloadCooldownSettings: er,
  updateOverloadCooldownSettings: ar,
  getRateLimit429CooldownSettings: nr,
  updateRateLimit429CooldownSettings: sr,
  getPanelRateLimitSettings: rr,
  updatePanelRateLimitSettings: ir,
  getStreamTimeoutSettings: or,
  updateStreamTimeoutSettings: cr,
  getRectifierSettings: lr,
  updateRectifierSettings: ur,
  getBetaPolicySettings: dr,
  updateBetaPolicySettings: mr,
  getWebSearchEmulationConfig: gr,
  updateWebSearchEmulationConfig: fr,
  testWebSearchEmulation: pr,
  resetWebSearchUsage: hr
};
async function wr(t, e) {
  const { data: a } = await n.post(
    "/admin/subscriptions/bulk-action",
    t,
    { headers: { "Idempotency-Key": e } }
  );
  return a;
}
async function br(t = 1, e = 20, a, s) {
  const { data: r } = await n.get(
    "/admin/subscriptions",
    {
      params: {
        page: t,
        page_size: e,
        ...a
      },
      signal: s == null ? void 0 : s.signal
    }
  );
  return r;
}
async function vr(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}`);
  return e;
}
async function kr(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}/progress`);
  return e;
}
async function Sr(t) {
  const { data: e } = await n.post("/admin/subscriptions/assign", t);
  return e;
}
async function $r(t) {
  const { data: e } = await n.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return e;
}
async function xr(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/extend`,
    e
  );
  return a;
}
async function _r(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/revoke`);
  return e;
}
async function Cr(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/restore`);
  return e;
}
async function Ir(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/reset-quota`,
    e
  );
  return a;
}
async function Ar(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
async function Or(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
const Er = {
  list: br,
  getById: vr,
  getProgress: kr,
  assign: Sr,
  bulkAssign: $r,
  bulkAction: wr,
  extend: xr,
  revoke: _r,
  restore: Cr,
  resetQuota: Ir,
  listByGroup: Ar,
  listByUser: Or
};
async function Mr(t, e) {
  const { data: a } = await n.get("/admin/usage", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Tr(t) {
  const { data: e } = await n.get("/admin/usage/stats", {
    params: t
  });
  return e;
}
async function Rr(t) {
  const { data: e } = await n.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return e;
}
async function Pr(t, e) {
  const a = {};
  t !== void 0 && (a.user_id = t), e && (a.q = e);
  const { data: s } = await n.get("/admin/usage/search-api-keys", {
    params: a
  });
  return s;
}
async function zr(t, e) {
  const { data: a } = await n.get("/admin/usage/cleanup-tasks", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Dr(t) {
  const { data: e } = await n.post("/admin/usage/cleanup-tasks", t);
  return e;
}
async function Ur(t) {
  const { data: e } = await n.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return e;
}
const Br = {
  list: Mr,
  getStats: Tr,
  searchUsers: Rr,
  searchApiKeys: Pr,
  listCleanupTasks: zr,
  createCleanupTask: Dr,
  cancelCleanupTask: Ur
};
async function Lr(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return e;
}
async function Kr(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return e;
}
async function Fr() {
  const { data: t } = await n.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Nr = { generateAuthUrl: Lr, exchangeCode: Kr, getCapabilities: Fr };
async function Wr(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return e;
}
async function Vr(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return e;
}
async function jr(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/antigravity/oauth/refresh-token",
    a
  );
  return s;
}
const qr = { generateAuthUrl: Wr, exchangeCode: Vr, refreshAntigravityToken: jr }, ke = 12e4;
async function Gr() {
  const { data: t } = await n.get("/admin/grok/oauth/capabilities");
  return t;
}
const Hr = 3, Qr = 9e4, Jr = 9e4;
function Zr(t) {
  return Math.ceil(Math.max(1, t) / Hr) * Qr + Jr;
}
async function Xr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return e;
}
async function Yr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return e;
}
async function ti(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/grok/oauth/refresh-token",
    a
  );
  return s;
}
async function ei(t) {
  const { data: e } = await n.get(`/admin/grok/accounts/${t}/quota`);
  return e;
}
async function ai(t) {
  const { data: e } = await n.post(`/admin/grok/accounts/${t}/reset-quota`);
  return e;
}
async function ni(t) {
  const { data: e } = await n.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Zr(t.sso_tokens.length) }
  );
  return e;
}
async function si(t, e) {
  const a = { sso_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post("/admin/grok/oauth/sso-token", a, {
    timeout: ke
  });
  return s;
}
async function ri(t, e) {
  const a = "----", s = t.indexOf(a), r = (s >= 0 ? t.slice(0, s) : t).trim(), o = s >= 0 ? t.slice(s + a.length) : "", c = { email: r, password: o };
  e && (c.proxy_id = e);
  const { data: l } = await n.post("/admin/grok/oauth/password", c, {
    timeout: ke
  });
  return l;
}
const ii = {
  generateAuthUrl: Xr,
  getCapabilities: Gr,
  exchangeCode: Yr,
  refreshGrokToken: ti,
  queryQuota: ei,
  resetQuota: ai,
  createFromSSO: ni,
  validateSSOToken: si,
  authorizePassword: ri
};
async function oi(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return e;
}
async function ci(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return e;
}
const li = {
  queryQuota: oi,
  queryBalance: ci
};
async function ui() {
  const { data: t } = await n.get("/admin/user-attributes");
  return t;
}
async function di() {
  const { data: t } = await n.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function mi(t) {
  const { data: e } = await n.post("/admin/user-attributes", t);
  return e;
}
async function gi(t, e) {
  const { data: a } = await n.put(
    `/admin/user-attributes/${t}`,
    e
  );
  return a;
}
async function fi(t) {
  const { data: e } = await n.delete(`/admin/user-attributes/${t}`);
  return e;
}
async function pi(t) {
  const { data: e } = await n.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return e;
}
async function hi(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/attributes`
  );
  return e;
}
async function yi(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/attributes`,
    { values: e }
  );
  return a;
}
async function wi(t) {
  const { data: e } = await n.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return e;
}
const bi = {
  listDefinitions: ui,
  listEnabledDefinitions: di,
  createDefinition: mi,
  updateDefinition: gi,
  deleteDefinition: fi,
  reorderDefinitions: pi,
  getUserAttributeValues: hi,
  updateUserAttributeValues: yi,
  getBatchUserAttributes: wi
};
async function vi(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/concurrency", { params: a });
  return s;
}
async function ki() {
  const { data: t } = await n.get("/admin/ops/user-concurrency");
  return t;
}
async function Si(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/account-availability", { params: a });
  return s;
}
async function $i(t, e, a) {
  const s = { window: t };
  e && (s.platform = e), typeof a == "number" && a > 0 && (s.group_id = a);
  const { data: r } = await n.get("/admin/ops/realtime-traffic", { params: s });
  return r;
}
const xi = {
  REALTIME_DISABLED: 4001
}, _i = "sub2api-admin";
function Ci(t, e = {}) {
  let a = null, s = 0;
  const r = Number.isFinite(e.maxReconnectAttempts) ? e.maxReconnectAttempts : 1 / 0, o = e.reconnectBaseDelayMs ?? 1e3, c = e.reconnectMaxDelayMs ?? 3e4;
  let l = null, g = !0, x = !1, C = !1, O = 0;
  const _ = e.staleTimeoutMs ?? 12e4, R = e.staleCheckIntervalMs ?? 3e4;
  let v = null;
  const h = (q) => {
    var K;
    (K = e.onStatusChange) == null || K.call(e, q);
  }, k = () => {
    l && (clearTimeout(l), l = null);
  }, T = () => {
    v && (clearInterval(v), v = null);
  }, U = () => {
    T(), !(!_ || _ <= 0) && (v = setInterval(() => {
      if (!g || !a || a.readyState !== WebSocket.OPEN || !O) return;
      Date.now() - O > _ && a.close();
    }, R));
  }, p = () => {
    var G;
    if (!g || C && s >= r) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      h("offline");
      return;
    }
    const q = o * Math.pow(2, s), K = Math.min(q, c), j = Math.floor(Math.random() * 250);
    k(), l = setTimeout(() => {
      s++, z();
    }, K + j), (G = e.onReconnectScheduled) == null || G.call(e, { attempt: s + 1, delayMs: K + j });
  }, E = () => {
    g && (a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || z());
  }, L = () => {
    h("offline");
  }, z = () => {
    if (!g || x || a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || C && s >= r) return;
    x = !0, h(C ? "reconnecting" : "connecting");
    const q = e.wsBaseUrl || void 0, K = q ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${q}/api/v1/admin/ops/ws/qps`) : new URL(Pe("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), j = String(e.token ?? localStorage.getItem("auth_token") ?? "").trim(), G = [_i];
    j && G.push(`jwt.${j}`), a = new WebSocket(K.toString(), G), a.onopen = () => {
      var N;
      s = 0, x = !1, C = !0, k(), O = Date.now(), U(), h("connected"), (N = e.onOpen) == null || N.call(e);
    }, a.onmessage = (N) => {
      try {
        const H = JSON.parse(N.data);
        O = Date.now(), t(H);
      } catch (H) {
        console.warn("[OpsWS] Failed to parse message:", H);
      }
    }, a.onerror = (N) => {
      var H;
      console.error("[OpsWS] Connection error:", N), (H = e.onError) == null || H.call(e, N);
    }, a.onclose = (N) => {
      var H, V;
      if (x = !1, (H = e.onClose) == null || H.call(e, N), T(), a = null, N && typeof N.code == "number" && N.code === xi.REALTIME_DISABLED) {
        g = !1, k(), h("closed"), (V = e.onFatalClose) == null || V.call(e, N);
        return;
      }
      p();
    };
  };
  return window.addEventListener("online", E), window.addEventListener("offline", L), z(), () => {
    g = !1, window.removeEventListener("online", E), window.removeEventListener("offline", L), k(), T(), a && a.close(), a = null, h("closed");
  };
}
async function Ii(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ai(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Oi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ei(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Mi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ti(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ri(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Pi(t) {
  const { data: e } = await n.get("/admin/ops/errors", { params: t });
  return e;
}
async function zi(t) {
  const { data: e } = await n.get(`/admin/ops/errors/${t}`);
  return e;
}
async function Di(t, e) {
  await n.put(`/admin/ops/errors/${t}/resolve`, { resolved: e });
}
async function Ui(t) {
  const { data: e } = await n.get("/admin/ops/request-errors", { params: t });
  return e;
}
async function Bi(t) {
  const { data: e } = await n.get("/admin/ops/upstream-errors", { params: t });
  return e;
}
async function Li(t) {
  const { data: e } = await n.get(`/admin/ops/request-errors/${t}`);
  return e;
}
async function Ki(t) {
  const { data: e } = await n.get(`/admin/ops/upstream-errors/${t}`);
  return e;
}
async function Fi(t, e) {
  await n.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: e });
}
async function Ni(t, e) {
  await n.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: e });
}
async function Wi(t, e = {}, a = {}) {
  const s = { ...e };
  a.include_detail && (s.include_detail = "1");
  const { data: r } = await n.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return r;
}
async function Vi(t) {
  const { data: e } = await n.get("/admin/ops/requests", { params: t });
  return e;
}
async function ji() {
  const { data: t } = await n.get("/admin/ops/alert-rules");
  return t;
}
async function qi(t) {
  const { data: e } = await n.post("/admin/ops/alert-rules", t);
  return e;
}
async function Gi(t, e) {
  const { data: a } = await n.put(`/admin/ops/alert-rules/${t}`, e);
  return a;
}
async function Hi(t) {
  await n.delete(`/admin/ops/alert-rules/${t}`);
}
async function Qi(t = {}) {
  const { data: e } = await n.get("/admin/ops/alert-events", { params: t });
  return e;
}
async function Ji(t) {
  const { data: e } = await n.get(`/admin/ops/alert-events/${t}`);
  return e;
}
async function Zi(t, e) {
  await n.put(`/admin/ops/alert-events/${t}/status`, { status: e });
}
async function Xi(t) {
  await n.post("/admin/ops/alert-silences", t);
}
async function Yi() {
  const { data: t } = await n.get("/admin/ops/email-notification/config");
  return t;
}
async function to(t) {
  const { data: e } = await n.put("/admin/ops/email-notification/config", t);
  return e;
}
async function eo() {
  const { data: t } = await n.get("/admin/ops/runtime/alert");
  return t;
}
async function ao(t) {
  const { data: e } = await n.put("/admin/ops/runtime/alert", t);
  return e;
}
async function no() {
  const { data: t } = await n.get("/admin/ops/runtime/logging");
  return t;
}
async function so(t) {
  const { data: e } = await n.put("/admin/ops/runtime/logging", t);
  return e;
}
async function ro() {
  const { data: t } = await n.post("/admin/ops/runtime/logging/reset");
  return t;
}
async function io(t) {
  const { data: e } = await n.get("/admin/ops/system-logs", { params: t });
  return e;
}
async function oo(t) {
  const { data: e } = await n.post("/admin/ops/system-logs/cleanup", t);
  return e;
}
async function co() {
  const { data: t } = await n.get("/admin/ops/system-logs/health");
  return t;
}
async function lo() {
  const { data: t } = await n.get("/admin/ops/advanced-settings");
  return t;
}
async function uo(t) {
  const { data: e } = await n.put("/admin/ops/advanced-settings", t);
  return e;
}
async function mo() {
  const { data: t } = await n.get("/admin/ops/settings/metric-thresholds");
  return t;
}
async function go(t) {
  await n.put("/admin/ops/settings/metric-thresholds", t);
}
const fo = {
  getDashboardSnapshotV2: Ai,
  getDashboardOverview: Ii,
  getThroughputTrend: Oi,
  getLatencyHistogram: Ei,
  getErrorTrend: Mi,
  getErrorDistribution: Ti,
  getOpenAITokenStats: Ri,
  getConcurrencyStats: vi,
  getUserConcurrencyStats: ki,
  getAccountAvailabilityStats: Si,
  getRealtimeTrafficSummary: $i,
  subscribeQPS: Ci,
  // Legacy unified endpoints
  listErrorLogs: Pi,
  getErrorLogDetail: zi,
  updateErrorResolved: Di,
  // New split endpoints
  listRequestErrors: Ui,
  listUpstreamErrors: Bi,
  getRequestErrorDetail: Li,
  getUpstreamErrorDetail: Ki,
  updateRequestErrorResolved: Fi,
  updateUpstreamErrorResolved: Ni,
  listRequestErrorUpstreamErrors: Wi,
  listRequestDetails: Vi,
  listAlertRules: ji,
  createAlertRule: qi,
  updateAlertRule: Gi,
  deleteAlertRule: Hi,
  listAlertEvents: Qi,
  getAlertEvent: Ji,
  updateAlertEventStatus: Zi,
  createAlertSilence: Xi,
  getEmailNotificationConfig: Yi,
  updateEmailNotificationConfig: to,
  getAlertRuntimeSettings: eo,
  updateAlertRuntimeSettings: ao,
  getRuntimeLogConfig: no,
  updateRuntimeLogConfig: so,
  resetRuntimeLogConfig: ro,
  getAdvancedSettings: lo,
  updateAdvancedSettings: uo,
  getMetricThresholds: mo,
  updateMetricThresholds: go,
  listSystemLogs: io,
  cleanupSystemLogs: oo,
  getSystemLogSinkHealth: co
};
async function po() {
  const { data: t } = await n.get("/admin/error-passthrough-rules");
  return t;
}
async function ho(t) {
  const { data: e } = await n.get(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function yo(t) {
  const { data: e } = await n.post("/admin/error-passthrough-rules", t);
  return e;
}
async function Se(t, e) {
  const { data: a } = await n.put(`/admin/error-passthrough-rules/${t}`, e);
  return a;
}
async function wo(t) {
  const { data: e } = await n.delete(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function bo(t, e) {
  return Se(t, { enabled: e });
}
const vo = {
  list: po,
  getById: ho,
  create: yo,
  update: Se,
  delete: wo,
  toggleEnabled: bo
};
async function ko() {
  const { data: t } = await n.get("/admin/data-management/agent/health");
  return t;
}
async function So() {
  const { data: t } = await n.get("/admin/data-management/config");
  return t;
}
async function $o(t) {
  const { data: e } = await n.put("/admin/data-management/config", t);
  return e;
}
async function xo(t) {
  const { data: e } = await n.post("/admin/data-management/s3/test", t);
  return e;
}
async function _o(t) {
  const { data: e } = await n.get(`/admin/data-management/sources/${t}/profiles`);
  return e;
}
async function Co(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles`, e);
  return a;
}
async function Io(t, e, a) {
  const { data: s } = await n.put(`/admin/data-management/sources/${t}/profiles/${e}`, a);
  return s;
}
async function Ao(t, e) {
  await n.delete(`/admin/data-management/sources/${t}/profiles/${e}`);
}
async function Oo(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles/${e}/activate`);
  return a;
}
async function Eo() {
  const { data: t } = await n.get("/admin/data-management/s3/profiles");
  return t;
}
async function Mo(t) {
  const { data: e } = await n.post("/admin/data-management/s3/profiles", t);
  return e;
}
async function To(t, e) {
  const { data: a } = await n.put(`/admin/data-management/s3/profiles/${t}`, e);
  return a;
}
async function Ro(t) {
  await n.delete(`/admin/data-management/s3/profiles/${t}`);
}
async function Po(t) {
  const { data: e } = await n.post(`/admin/data-management/s3/profiles/${t}/activate`);
  return e;
}
async function zo(t) {
  const e = t.idempotency_key ? { "X-Idempotency-Key": t.idempotency_key } : void 0, { data: a } = await n.post(
    "/admin/data-management/backups",
    t,
    { headers: e }
  );
  return a;
}
async function Do(t) {
  const { data: e } = await n.get("/admin/data-management/backups", {
    params: t
  });
  return e;
}
async function Uo(t) {
  const { data: e } = await n.get(`/admin/data-management/backups/${t}`);
  return e;
}
const Bo = {
  getAgentHealth: ko,
  getConfig: So,
  updateConfig: $o,
  listSourceProfiles: _o,
  createSourceProfile: Co,
  updateSourceProfile: Io,
  deleteSourceProfile: Ao,
  setActiveSourceProfile: Oo,
  testS3: xo,
  listS3Profiles: Eo,
  createS3Profile: Mo,
  updateS3Profile: To,
  deleteS3Profile: Ro,
  setActiveS3Profile: Po,
  createBackupJob: zo,
  listBackupJobs: Do,
  getBackupJob: Uo
};
async function Lo(t, e) {
  const { data: a } = await n.put(`/admin/api-keys/${t}`, {
    group_id: e === null ? 0 : e
  });
  return a;
}
const Ko = {
  updateApiKeyGroup: Lo
};
async function Fo(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/scheduled-test-plans`
  );
  return e ?? [];
}
async function No(t) {
  const { data: e } = await n.post(
    "/admin/scheduled-test-plans",
    t
  );
  return e;
}
async function Wo(t, e) {
  const { data: a } = await n.put(
    `/admin/scheduled-test-plans/${t}`,
    e
  );
  return a;
}
async function Vo(t) {
  await n.delete(`/admin/scheduled-test-plans/${t}`);
}
async function jo(t, e) {
  const { data: a } = await n.get(
    `/admin/scheduled-test-plans/${t}/results`,
    {
      params: e ? { limit: e } : void 0
    }
  );
  return a ?? [];
}
const qo = {
  listByAccount: Fo,
  create: No,
  update: Wo,
  delete: Vo,
  listResults: jo
};
async function Go() {
  const { data: t } = await n.get("/admin/backups/s3-config");
  return t;
}
async function Ho(t) {
  const { data: e } = await n.put("/admin/backups/s3-config", t);
  return e;
}
async function Qo(t) {
  const { data: e } = await n.post("/admin/backups/s3-config/test", t);
  return e;
}
async function Jo() {
  const { data: t } = await n.get("/admin/backups/image-storage");
  return t;
}
async function Zo(t) {
  const { data: e } = await n.put("/admin/backups/image-storage", t);
  return e;
}
async function Xo(t) {
  const { data: e } = await n.post(
    "/admin/backups/image-storage/test",
    t
  );
  return e;
}
async function Yo() {
  const { data: t } = await n.get("/admin/backups/schedule");
  return t;
}
async function tc(t) {
  const { data: e } = await n.put("/admin/backups/schedule", t);
  return e;
}
async function ec(t) {
  const { data: e } = await n.post("/admin/backups", t || {});
  return e;
}
async function ac() {
  const { data: t } = await n.get("/admin/backups");
  return t;
}
async function nc(t) {
  const { data: e } = await n.get(`/admin/backups/${t}`);
  return e;
}
async function sc(t) {
  await n.delete(`/admin/backups/${t}`);
}
async function rc(t) {
  const { data: e } = await n.get(`/admin/backups/${t}/download-url`);
  return e;
}
async function ic(t, e) {
  const { data: a } = await n.post(`/admin/backups/${t}/restore`, { password: e });
  return a;
}
const oc = {
  getS3Config: Go,
  updateS3Config: Ho,
  testS3Connection: Qo,
  getImageStorageConfig: Jo,
  updateImageStorageConfig: Zo,
  testImageStorageConnection: Xo,
  getSchedule: Yo,
  updateSchedule: tc,
  createBackup: ec,
  listBackups: ac,
  getBackup: nc,
  deleteBackup: sc,
  getDownloadURL: rc,
  restoreBackup: ic
};
async function cc() {
  const { data: t } = await n.get("/admin/tls-fingerprint-profiles");
  return t;
}
async function lc(t) {
  const { data: e } = await n.get(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
async function uc(t) {
  const { data: e } = await n.post("/admin/tls-fingerprint-profiles", t);
  return e;
}
async function dc(t, e) {
  const { data: a } = await n.put(`/admin/tls-fingerprint-profiles/${t}`, e);
  return a;
}
async function mc(t) {
  const { data: e } = await n.delete(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
const gc = {
  list: cc,
  getById: lc,
  create: uc,
  update: dc,
  delete: mc
};
async function fc(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/channels", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function pc(t) {
  const { data: e } = await n.get(`/admin/channels/${t}`);
  return e;
}
async function hc(t) {
  const { data: e } = await n.post("/admin/channels", t);
  return e;
}
async function yc(t, e) {
  const { data: a } = await n.put(`/admin/channels/${t}`, e);
  return a;
}
async function wc(t) {
  await n.delete(`/admin/channels/${t}`);
}
async function bc(t) {
  const { data: e } = await n.get("/admin/channels/model-pricing", {
    params: { model: t }
  });
  return e;
}
async function vc(t) {
  const { data: e } = await n.get("/admin/channels/pricing/sync-models", {
    params: { platform: t }
  });
  return e;
}
const kc = { list: fc, getById: pc, create: hc, update: yc, remove: wc, getModelDefaultPricing: bc, syncPricingModels: vc };
async function Sc(t = {}, e) {
  const { data: a } = await n.get("/admin/channel-monitors", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function $c(t) {
  const { data: e } = await n.get(`/admin/channel-monitors/${t}`);
  return e;
}
async function xc(t) {
  const { data: e } = await n.post("/admin/channel-monitors", t);
  return e;
}
const Ut = /* @__PURE__ */ new Map();
function _c() {
  var t;
  try {
    const e = (t = globalThis.localStorage) == null ? void 0 : t.getItem("auth_user");
    if (!e) return null;
    const a = JSON.parse(e);
    if (typeof a != "object" || a === null) return null;
    const s = a.id;
    return typeof s != "number" || !Number.isSafeInteger(s) || s <= 0 ? null : String(s);
  } catch {
    return null;
  }
}
function Cc(t) {
  const e = _c();
  return e ? {
    adminID: e,
    key: `sub2api:admin:channel-monitor-duplicate:${e}:${t}`
  } : null;
}
function Ic(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function ie(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Ac(t) {
  var r, o;
  const e = Cc(t);
  let a = e ? Ut.get(e.key) ?? Ic(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `channel-monitor-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Ut.set(e.key, a), ie(e.key, a));
  const { data: s } = await n.post(
    `/admin/channel-monitors/${t}/duplicate`,
    void 0,
    { headers: { "Idempotency-Key": a } }
  );
  return e && (Ut.delete(e.key), ie(e.key, null)), s;
}
async function Oc(t, e) {
  const { data: a } = await n.put(`/admin/channel-monitors/${t}`, e);
  return a;
}
async function Ec(t) {
  await n.delete(`/admin/channel-monitors/${t}`);
}
async function Mc(t) {
  const { data: e } = await n.post(`/admin/channel-monitors/${t}/run`);
  return e;
}
async function Tc(t, e = {}) {
  const { data: a } = await n.get(
    `/admin/channel-monitors/${t}/history`,
    { params: e }
  );
  return a;
}
const Rc = {
  list: Sc,
  get: $c,
  create: xc,
  duplicate: Ac,
  update: Oc,
  del: Ec,
  runNow: Mc,
  listHistory: Tc
};
async function Pc(t = {}) {
  const { data: e } = await n.get("/admin/channel-monitor-templates", {
    params: t
  });
  return e;
}
async function zc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}`
  );
  return e;
}
async function Dc(t) {
  const { data: e } = await n.post(
    "/admin/channel-monitor-templates",
    t
  );
  return e;
}
async function Uc(t, e) {
  const { data: a } = await n.put(
    `/admin/channel-monitor-templates/${t}`,
    e
  );
  return a;
}
async function Bc(t) {
  await n.delete(`/admin/channel-monitor-templates/${t}`);
}
async function Lc(t, e) {
  const { data: a } = await n.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: e }
  );
  return a;
}
async function Kc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return e;
}
const Fc = {
  list: Pc,
  get: zc,
  create: Dc,
  update: Uc,
  del: Bc,
  apply: Lc,
  listAssociatedMonitors: Kc
}, Nc = {
  // ==================== Config ====================
  /** Get payment configuration (admin view) */
  getConfig() {
    return n.get("/admin/payment/config");
  },
  /** Update payment configuration */
  updateConfig(t) {
    return n.put("/admin/payment/config", t);
  },
  // ==================== Dashboard ====================
  /** Get payment dashboard statistics */
  getDashboard(t) {
    return n.get("/admin/payment/dashboard", {
      params: t ? { days: t } : void 0
    });
  },
  // ==================== Orders ====================
  /** Get all orders (paginated, with filters) */
  getOrders(t) {
    return n.get("/admin/payment/orders", { params: t });
  },
  /** Get a specific order by ID */
  getOrder(t) {
    return n.get(`/admin/payment/orders/${t}`);
  },
  /** Cancel an order (admin) */
  cancelOrder(t) {
    return n.post(`/admin/payment/orders/${t}/cancel`);
  },
  /** Retry recharge for a failed order */
  retryRecharge(t) {
    return n.post(`/admin/payment/orders/${t}/retry`);
  },
  /** Process a refund */
  refundOrder(t, e) {
    return n.post(`/admin/payment/orders/${t}/refund`, e);
  },
  /** Query and finalize a pending refund */
  queryRefund(t) {
    return n.post(`/admin/payment/orders/${t}/refund/query`);
  },
  // ==================== Channels ====================
  /** Get all payment channels */
  getChannels() {
    return n.get("/admin/payment/channels");
  },
  /** Create a payment channel */
  createChannel(t) {
    return n.post("/admin/payment/channels", t);
  },
  /** Update a payment channel */
  updateChannel(t, e) {
    return n.put(`/admin/payment/channels/${t}`, e);
  },
  /** Delete a payment channel */
  deleteChannel(t) {
    return n.delete(`/admin/payment/channels/${t}`);
  },
  // ==================== Subscription Plans ====================
  /** Get all subscription plans */
  getPlans() {
    return n.get("/admin/payment/plans");
  },
  /** Create a subscription plan */
  createPlan(t) {
    return n.post("/admin/payment/plans", t);
  },
  /** Update a subscription plan */
  updatePlan(t, e) {
    return n.put(`/admin/payment/plans/${t}`, e);
  },
  /** Delete a subscription plan */
  deletePlan(t) {
    return n.delete(`/admin/payment/plans/${t}`);
  },
  // ==================== Provider Instances ====================
  /** Get all provider instances */
  getProviders() {
    return n.get("/admin/payment/providers");
  },
  /** Create a provider instance */
  createProvider(t) {
    return n.post("/admin/payment/providers", t);
  },
  /** Update a provider instance */
  updateProvider(t, e) {
    return n.put(`/admin/payment/providers/${t}`, e);
  },
  /** Delete a provider instance */
  deleteProvider(t) {
    return n.delete(`/admin/payment/providers/${t}`);
  }
};
async function Wc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/users",
    {
      params: {
        page: t.page ?? 1,
        page_size: t.page_size ?? 20,
        search: t.search ?? ""
      }
    }
  );
  return e;
}
async function Vc(t) {
  const { data: e } = await n.get(
    "/admin/affiliates/users/lookup",
    { params: { q: t } }
  );
  return e;
}
async function jc(t, e) {
  const { data: a } = await n.put(
    `/admin/affiliates/users/${t}`,
    e
  );
  return a;
}
async function qc(t) {
  const { data: e } = await n.delete(
    `/admin/affiliates/users/${t}`
  );
  return e;
}
async function Gc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/users/batch-rate",
    t
  );
  return e;
}
function Gt(t = {}) {
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
async function Hc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/invites",
    { params: Gt(t) }
  );
  return e;
}
async function Qc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/invites",
    t
  );
  return e;
}
async function Jc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/rebates",
    { params: Gt(t) }
  );
  return e;
}
async function Zc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/transfers",
    { params: Gt(t) }
  );
  return e;
}
async function Xc(t) {
  const { data: e } = await n.get(
    `/admin/affiliates/users/${t}/overview`
  );
  return e;
}
const Yc = {
  listUsers: Wc,
  lookupUsers: Vc,
  updateUserSettings: jc,
  clearUserSettings: qc,
  batchSetRate: Gc,
  listInviteRecords: Hc,
  bindRelationship: Qc,
  listRebateRecords: Jc,
  listTransferRecords: Zc,
  getUserOverview: Xc
};
async function tl() {
  const { data: t } = await n.get("/admin/risk-control/config");
  return t;
}
async function el(t) {
  const { data: e } = await n.put("/admin/risk-control/config", t);
  return e;
}
async function al() {
  const { data: t } = await n.get("/admin/risk-control/status");
  return t;
}
async function nl(t = {}) {
  const { data: e } = await n.post("/admin/risk-control/api-keys/test", t);
  return e;
}
async function sl(t = {}) {
  const { data: e } = await n.get("/admin/risk-control/logs", {
    params: t
  });
  return e;
}
async function rl(t) {
  const { data: e } = await n.post(
    `/admin/risk-control/users/${t}/unban`
  );
  return e;
}
async function il(t) {
  const { data: e } = await n.delete("/admin/risk-control/hashes", {
    data: { input_hash: t }
  });
  return e;
}
async function ol() {
  const { data: t } = await n.delete("/admin/risk-control/hashes/all");
  return t;
}
const cl = {
  getConfig: tl,
  updateConfig: el,
  getStatus: al,
  testAPIKeys: nl,
  listLogs: sl,
  unbanUser: rl,
  deleteFlaggedHash: il,
  clearFlaggedHashes: ol
}, ll = {
  async getStatus() {
    const { data: t } = await n.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: e } = await n.post("/admin/compliance/accept", t);
    return e;
  }
};
async function ul(t) {
  const { data: e } = await n.get("/admin/audit-logs", { params: t });
  return e;
}
async function dl(t) {
  const { data: e } = await n.get(`/admin/audit-logs/${t}`);
  return e;
}
async function ml(t) {
  const { data: e } = await n.post("/admin/audit-logs/clear", { totp_code: t });
  return e;
}
const gl = {
  list: ul,
  get: dl,
  clear: ml
};
async function fl() {
  const { data: t } = await n.get("/admin/plugins");
  return t;
}
async function pl(t) {
  const e = new FormData();
  e.append("plugin", t);
  const { data: a } = await n.post("/admin/plugins/upload", e, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 12e4
  });
  return a;
}
async function hl(t, e, a) {
  const { data: s } = await n.post(`/admin/plugins/${t}/enable`, {
    rollout_percent: e,
    accept_untested: a
  });
  return s;
}
async function yl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/disable`);
  return e;
}
async function wl(t) {
  await n.delete(`/admin/plugins/${t}`);
}
async function bl(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/config`);
  return e;
}
async function vl(t, e) {
  const { data: a } = await n.put(`/admin/plugins/${t}/config`, e);
  return a;
}
async function kl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/test`);
  return e;
}
async function Sl(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/status`);
  return e;
}
async function $l(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/ui-session`);
  return e;
}
const xl = {
  list: fl,
  upload: pl,
  enable: hl,
  disable: yl,
  remove: wl,
  getConfig: bl,
  saveConfig: vl,
  test: kl,
  status: Sl,
  createUISession: $l
}, dd = {
  dashboard: Xe,
  users: pa,
  groups: ja,
  accounts: es,
  proxies: ys,
  redeem: Is,
  promo: Ps,
  announcements: Fs,
  settings: yr,
  system: ze,
  subscriptions: Er,
  usage: Br,
  gemini: Nr,
  antigravity: qr,
  grok: ii,
  cnProviders: li,
  userAttributes: bi,
  ops: fo,
  errorPassthrough: vo,
  dataManagement: Bo,
  apiKeys: Ko,
  scheduledTests: qo,
  backup: oc,
  tlsFingerprintProfiles: gc,
  channels: kc,
  channelMonitor: Rc,
  channelMonitorTemplate: Fc,
  payment: Nc,
  affiliates: Yc,
  riskControl: cl,
  compliance: ll,
  audit: gl,
  plugins: xl
}, $e = 5, _l = 1e3, Cl = 20, oe = [10, 20, 50, 100], xe = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < $e || e > _l ? null : e;
}, Il = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < $e ? null : e;
}, _e = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, Al = () => {
  var e;
  const t = (e = _e()) == null ? void 0 : e.table_page_size_options;
  return Array.isArray(t) ? Array.from(
    new Set(
      t.map((a) => xe(a)).filter((a) => a !== null)
    )
  ).sort((a, s) => a - s) : [];
}, ce = (t, e) => {
  for (const a of e)
    if (a >= t)
      return a;
  return e[e.length - 1];
}, It = () => {
  var e;
  const t = xe((e = _e()) == null ? void 0 : e.table_default_page_size);
  return t === null ? Cl : t;
}, Wt = () => {
  const t = Al();
  return t.length === 0 ? [...oe] : t.length > 0 ? t : [...oe];
}, yt = (t) => {
  const e = Il(t), a = It(), s = Wt();
  return ce(e !== null ? e : a, s);
}, Ce = "table-page-size";
function md(t = It()) {
  var e;
  if (typeof window < "u" && ((e = window.__APP_CONFIG__) == null ? void 0 : e.table_default_page_size) !== void 0)
    return yt(It());
  if (typeof window < "u")
    try {
      const a = window.localStorage.getItem(Ce);
      if (a !== null) {
        const s = Number(a);
        if (Number.isFinite(s))
          return yt(s);
      }
    } catch (a) {
      console.warn("Failed to read persisted page size:", a);
    }
  return yt(It() || t);
}
function Ol(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ce, String(t));
    } catch (e) {
      console.warn("Failed to persist page size:", e);
    }
}
function gt(t, e, a) {
  let s = a.initialDeps ?? [], r, o = !0;
  function c() {
    var l, g, x;
    let C;
    a.key && ((l = a.debug) != null && l.call(a)) && (C = Date.now());
    const O = t();
    if (!(O.length !== s.length || O.some((v, h) => s[h] !== v)))
      return r;
    s = O;
    let R;
    if (a.key && ((g = a.debug) != null && g.call(a)) && (R = Date.now()), r = e(...O), a.key && ((x = a.debug) != null && x.call(a))) {
      const v = Math.round((Date.now() - C) * 100) / 100, h = Math.round((Date.now() - R) * 100) / 100, k = h / 16, T = (U, p) => {
        for (U = String(U); U.length < p; )
          U = " " + U;
        return U;
      };
      console.info(
        `%c⏱ ${T(h, 5)} /${T(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * k, 120)
        )}deg 100% 31%);`,
        a == null ? void 0 : a.key
      );
    }
    return a != null && a.onChange && !(o && a.skipInitialOnChange) && a.onChange(r), o = !1, r;
  }
  return c.updateDeps = (l) => {
    s = l;
  }, c;
}
function le(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const El = (t, e) => Math.abs(t - e) < 1.01, Ml = (t, e, a) => {
  let s;
  return function(...r) {
    t.clearTimeout(s), s = t.setTimeout(() => e.apply(this, r), a);
  };
}, ue = (t) => {
  const { offsetWidth: e, offsetHeight: a } = t;
  return { width: e, height: a };
}, Tl = (t) => t, Rl = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), a = Math.min(t.endIndex + t.overscan, t.count - 1), s = [];
  for (let r = e; r <= a; r++)
    s.push(r);
  return s;
}, Ie = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  const r = (c) => {
    const { width: l, height: g } = c;
    e({ width: Math.round(l), height: Math.round(g) });
  };
  if (r(ue(a)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((c) => {
    const l = () => {
      const g = c[0];
      if (g != null && g.borderBoxSize) {
        const x = g.borderBoxSize[0];
        if (x) {
          r({ width: x.inlineSize, height: x.blockSize });
          return;
        }
      }
      r(ue(a));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return o.observe(a, { box: "border-box" }), () => {
    o.unobserve(a);
  };
}, de = {
  passive: !0
}, me = typeof window > "u" ? !0 : "onscrollend" in window, Pl = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  let r = 0;
  const o = t.options.useScrollendEvent && me ? () => {
  } : Ml(
    s,
    () => {
      e(r, !1);
    },
    t.options.isScrollingResetDelay
  ), c = (C) => () => {
    const { horizontal: O, isRtl: _ } = t.options;
    r = O ? a.scrollLeft * (_ && -1 || 1) : a.scrollTop, o(), e(r, C);
  }, l = c(!0), g = c(!1);
  a.addEventListener("scroll", l, de);
  const x = t.options.useScrollendEvent && me;
  return x && a.addEventListener("scrollend", g, de), () => {
    a.removeEventListener("scroll", l), x && a.removeEventListener("scrollend", g);
  };
}, zl = (t, e, a) => {
  if (e != null && e.borderBoxSize) {
    const s = e.borderBoxSize[0];
    if (s)
      return Math.round(
        s[a.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[a.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Dl = (t, {
  adjustments: e = 0,
  behavior: a
}, s) => {
  var r, o;
  const c = t + e;
  (o = (r = s.scrollElement) == null ? void 0 : r.scrollTo) == null || o.call(r, {
    [s.options.horizontal ? "left" : "top"]: c,
    behavior: a
  });
};
class Ul {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var a, s, r;
      return ((r = (s = (a = this.targetWindow) == null ? void 0 : a.performance) == null ? void 0 : s.now) == null ? void 0 : r.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let a = null;
      const s = () => a || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : a = new this.targetWindow.ResizeObserver((r) => {
        r.forEach((o) => {
          const c = () => {
            const l = o.target, g = this.indexFromElement(l);
            if (!l.isConnected) {
              this.observer.unobserve(l);
              return;
            }
            this.shouldMeasureDuringScroll(g) && this.resizeItem(
              g,
              this.options.measureElement(l, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
        });
      }));
      return {
        disconnect: () => {
          var r;
          (r = s()) == null || r.disconnect(), a = null;
        },
        observe: (r) => {
          var o;
          return (o = s()) == null ? void 0 : o.observe(r, { box: "border-box" });
        },
        unobserve: (r) => {
          var o;
          return (o = s()) == null ? void 0 : o.unobserve(r);
        }
      };
    })(), this.range = null, this.setOptions = (a) => {
      Object.entries(a).forEach(([s, r]) => {
        typeof r > "u" && delete a[s];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Tl,
        rangeExtractor: Rl,
        onChange: () => {
        },
        measureElement: zl,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...a
      };
    }, this.notify = (a) => {
      var s, r;
      (r = (s = this.options).onChange) == null || r.call(s, this, a);
    }, this.maybeNotify = gt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (a) => {
        this.notify(a);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((a) => a()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var a;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((a = this.scrollElement) == null ? void 0 : a.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = o, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (a, s) => {
      const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      for (let c = s - 1; c >= 0; c--) {
        const l = a[c];
        if (r.has(l.lane))
          continue;
        const g = o.get(
          l.lane
        );
        if (g == null || l.end > g.end ? o.set(l.lane, l) : l.end < g.end && r.set(l.lane, !0), r.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((c, l) => c.end === l.end ? c.index - l.index : c.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = gt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (a, s, r, o, c, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: a,
        paddingStart: s,
        scrollMargin: r,
        getItemKey: o,
        enabled: c,
        lanes: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = gt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: a, paddingStart: s, scrollMargin: r, getItemKey: o, enabled: c, lanes: l }, g) => {
        if (!c)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > a)
          for (const _ of this.laneAssignments.keys())
            _ >= a && this.laneAssignments.delete(_);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((_) => {
          this.itemSizeCache.set(_.key, _.size);
        }));
        const x = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === a && (this.lanesSettling = !1);
        const C = this.measurementsCache.slice(0, x), O = new Array(l).fill(
          void 0
        );
        for (let _ = 0; _ < x; _++) {
          const R = C[_];
          R && (O[R.lane] = _);
        }
        for (let _ = x; _ < a; _++) {
          const R = o(_), v = this.laneAssignments.get(_);
          let h, k;
          if (v !== void 0 && this.options.lanes > 1) {
            h = v;
            const E = O[h], L = E !== void 0 ? C[E] : void 0;
            k = L ? L.end + this.options.gap : s + r;
          } else {
            const E = this.options.lanes === 1 ? C[_ - 1] : this.getFurthestMeasurement(C, _);
            k = E ? E.end + this.options.gap : s + r, h = E ? E.lane : _ % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(_, h);
          }
          const T = g.get(R), U = typeof T == "number" ? T : this.options.estimateSize(_), p = k + U;
          C[_] = {
            index: _,
            start: k,
            size: U,
            end: p,
            key: R,
            lane: h
          }, O[h] = _;
        }
        return this.measurementsCache = C, C;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = gt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (a, s, r, o) => this.range = a.length > 0 && s > 0 ? Bl({
        measurements: a,
        outerSize: s,
        scrollOffset: r,
        lanes: o
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = gt(
      () => {
        let a = null, s = null;
        const r = this.calculateRange();
        return r && (a = r.startIndex, s = r.endIndex), this.maybeNotify.updateDeps([this.isScrolling, a, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          a,
          s
        ];
      },
      (a, s, r, o, c) => o === null || c === null ? [] : a({
        startIndex: o,
        endIndex: c,
        overscan: s,
        count: r
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (a) => {
      const s = this.options.indexAttribute, r = a.getAttribute(s);
      return r ? parseInt(r, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (a) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const r = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (r !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), c = Math.max(0, r - o), l = Math.min(
          this.options.count - 1,
          r + o
        );
        return a >= c && a <= l;
      }
      return !0;
    }, this.measureElement = (a) => {
      if (!a) {
        this.elementsCache.forEach((c, l) => {
          c.isConnected || (this.observer.unobserve(c), this.elementsCache.delete(l));
        });
        return;
      }
      const s = this.indexFromElement(a), r = this.options.getItemKey(s), o = this.elementsCache.get(r);
      o !== a && (o && this.observer.unobserve(o), this.observer.observe(a), this.elementsCache.set(r, a)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(a, void 0, this));
    }, this.resizeItem = (a, s) => {
      var r;
      const o = this.measurementsCache[a];
      if (!o) return;
      const c = this.itemSizeCache.get(o.key) ?? o.size, l = s - c;
      l !== 0 && (((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, s)), this.notify(!1));
    }, this.getVirtualItems = gt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (a, s) => {
        const r = [];
        for (let o = 0, c = a.length; o < c; o++) {
          const l = a[o], g = s[l];
          r.push(g);
        }
        return r;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (a) => {
      const s = this.getMeasurements();
      if (s.length !== 0)
        return le(
          s[Ae(
            0,
            s.length - 1,
            (r) => le(s[r]).start,
            a
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const a = this.scrollElement.document.documentElement;
        return this.options.horizontal ? a.scrollWidth - this.scrollElement.innerWidth : a.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (a, s, r = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), c = this.getScrollOffset();
      s === "auto" && (s = a >= c + o ? "end" : "start"), s === "center" ? a += (r - o) / 2 : s === "end" && (a -= o);
      const l = this.getMaxScrollOffset();
      return Math.max(Math.min(l, a), 0);
    }, this.getOffsetForIndex = (a, s = "auto") => {
      a = Math.max(0, Math.min(a, this.options.count - 1));
      const r = this.getSize(), o = this.getScrollOffset(), c = this.measurementsCache[a];
      if (!c) return;
      if (s === "auto")
        if (c.end >= o + r - this.options.scrollPaddingEnd)
          s = "end";
        else if (c.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && a === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const l = s === "end" ? c.end + this.options.scrollPaddingEnd : c.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, s, c.size),
        s
      ];
    }, this.scrollToOffset = (a, { align: s = "start", behavior: r = "auto" } = {}) => {
      const o = this.getOffsetForAlignment(a, s), c = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: r,
        startedAt: c,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: r }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (a, {
      align: s = "auto",
      behavior: r = "auto"
    } = {}) => {
      a = Math.max(0, Math.min(a, this.options.count - 1));
      const o = this.getOffsetForIndex(a, s);
      if (!o)
        return;
      const [c, l] = o, g = this.now();
      this.scrollState = {
        index: a,
        align: l,
        behavior: r,
        startedAt: g,
        lastTargetOffset: c,
        stableFrames: 0
      }, this._scrollToOffset(c, { adjustments: void 0, behavior: r }), this.scheduleScrollReconcile();
    }, this.scrollBy = (a, { behavior: s = "auto" } = {}) => {
      const r = this.getScrollOffset() + a, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var a;
      const s = this.getMeasurements();
      let r;
      if (s.length === 0)
        r = this.options.paddingStart;
      else if (this.options.lanes === 1)
        r = ((a = s[s.length - 1]) == null ? void 0 : a.end) ?? 0;
      else {
        const o = Array(this.options.lanes).fill(null);
        let c = s.length - 1;
        for (; c >= 0 && o.some((l) => l === null); ) {
          const l = s[c];
          o[l.lane] === null && (o[l.lane] = l.end), c--;
        }
        r = Math.max(...o.filter((l) => l !== null));
      }
      return Math.max(
        r - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (a, {
      adjustments: s,
      behavior: r
    }) => {
      this.options.scrollToFn(a, { behavior: r, adjustments: s }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, r = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, c = r !== this.scrollState.lastTargetOffset;
    if (!c && El(r, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, c && (this.scrollState.lastTargetOffset = r, this.scrollState.behavior = "auto", this._scrollToOffset(r, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const Ae = (t, e, a, s) => {
  for (; t <= e; ) {
    const r = (t + e) / 2 | 0, o = a(r);
    if (o < s)
      t = r + 1;
    else if (o > s)
      e = r - 1;
    else
      return r;
  }
  return t > 0 ? t - 1 : 0;
};
function Bl({
  measurements: t,
  outerSize: e,
  scrollOffset: a,
  lanes: s
}) {
  const r = t.length - 1, o = (g) => t[g].start;
  if (t.length <= s)
    return {
      startIndex: 0,
      endIndex: r
    };
  let c = Ae(
    0,
    r,
    o,
    a
  ), l = c;
  if (s === 1)
    for (; l < r && t[l].end < a + e; )
      l++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; l < r && g.some((C) => C < a + e); ) {
      const C = t[l];
      g[C.lane] = C.end, l++;
    }
    const x = Array(s).fill(a + e);
    for (; c >= 0 && x.some((C) => C >= a); ) {
      const C = t[c];
      x[C.lane] = C.start, c--;
    }
    c = Math.max(0, c - c % s), l = Math.min(r, l + (s - 1 - l % s));
  }
  return { startIndex: c, endIndex: l };
}
function Ll(t) {
  const e = new Ul(P(t)), a = De(e), s = e._didMount();
  return tt(
    () => P(t).getScrollElement(),
    (r) => {
      r && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), tt(
    () => P(t),
    (r) => {
      e.setOptions({
        ...r,
        onChange: (o, c) => {
          var l;
          ne(a), (l = r.onChange) == null || l.call(r, o, c);
        }
      }), e._willUpdate(), ne(a);
    },
    {
      immediate: !0
    }
  ), Ue(s), a;
}
function Kl(t) {
  return Ll(
    I(() => ({
      observeElementRect: Ie,
      observeElementOffset: Pl,
      scrollToFn: Dl,
      ...P(t)
    }))
  );
}
const Fl = {
  key: 0,
  class: "space-y-3"
}, Nl = { class: "space-y-3" }, Wl = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Vl = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, jl = { class: "flex flex-col items-center" }, ql = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, Gl = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, Hl = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, Ql = ["checked", "indeterminate"], Jl = ["onClick"], Zl = { class: "space-y-3" }, Xl = {
  key: 0,
  class: "flex justify-end"
}, Yl = ["checked", "aria-label", "onChange"], tu = ["data-field"], eu = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, au = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, nu = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, su = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, ru = { class: "table-header bg-gray-50 dark:bg-dark-800" }, iu = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, ou = ["checked", "indeterminate", "aria-label"], cu = ["aria-sort", "onClick"], lu = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, uu = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, du = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, mu = { key: 1 }, gu = ["colspan"], fu = { class: "flex flex-col items-center" }, pu = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, hu = {
  key: 0,
  "aria-hidden": "true"
}, yu = ["colspan"], wu = ["data-row-id", "data-index", "onClick"], bu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, vu = ["checked", "aria-label", "onChange"], ku = {
  key: 1,
  "aria-hidden": "true"
}, Su = ["colspan"], ge = "(min-width: 768px)", $u = /* @__PURE__ */ At({
  __name: "DataTable",
  props: {
    columns: {},
    data: {},
    loading: { type: Boolean, default: !1 },
    stickyFirstColumn: { type: Boolean, default: !0 },
    stickyActionsColumn: { type: Boolean, default: !0 },
    expandableActions: { type: Boolean, default: !0 },
    actionsCount: {},
    rowKey: {},
    defaultSortKey: {},
    defaultSortOrder: { default: "asc" },
    sortStorageKey: {},
    serverSideSort: { type: Boolean, default: !1 },
    clickableRows: { type: Boolean },
    estimateRowHeight: {},
    overscan: {},
    virtualizeThreshold: {},
    selectable: { type: Boolean, default: !1 },
    selectedKeys: { default: () => [] },
    selectionLabel: {}
  },
  emits: ["sort", "rowClick", "update:selectedKeys", "selectionChange"],
  setup(t, { expose: e, emit: a }) {
    const { t: s } = Ot(), r = B(
      typeof window > "u" ? !0 : window.matchMedia(ge).matches
    ), o = a, c = B(null), l = B(!1), g = B(!1), x = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), C = (i, u) => Ie(i, (d) => {
      d.height > 0 && u(d);
    }), O = () => {
      c.value && (l.value = c.value.scrollWidth > c.value.clientWidth);
    }, _ = () => {
      if (!p.expandableActions) {
        g.value = !1, z.value = !1;
        return;
      }
      if (!c.value) return;
      const i = c.value.querySelector("tbody tr:first-child td:last-child");
      if (!i) return;
      const u = i.querySelector("div");
      if (!u) return;
      const d = z.value;
      z.value = !0, lt(() => {
        const S = u.querySelectorAll('button, a, [role="button"]');
        if (S.length <= 2) {
          g.value = !1, z.value = d;
          return;
        }
        let A = 0;
        S.forEach((mt, Pt) => {
          A += mt.offsetWidth, Pt < S.length - 1 && (A += 4);
        });
        const rt = i.clientWidth - 32;
        g.value = A > rt, z.value = d;
      });
    };
    let R = null, v = null, h = null, k = null;
    const T = () => {
      R == null || R.disconnect(), R = null, v && (window.removeEventListener("resize", v), v = null);
    }, U = () => {
      O(), _(), c.value && typeof ResizeObserver < "u" ? (R = new ResizeObserver(() => {
        O(), _();
      }), R.observe(c.value)) : (v = () => {
        O(), _();
      }, window.addEventListener("resize", v));
    };
    Lt(() => {
      typeof window < "u" && (h = window.matchMedia(ge), r.value = h.matches, k = (i) => {
        r.value = i.matches;
      }, typeof h.addEventListener == "function" ? h.addEventListener("change", k) : h.addListener(k));
    }), fe(() => {
      T(), h && k && (typeof h.removeEventListener == "function" ? h.removeEventListener("change", k) : h.removeListener(k), k = null), h = null;
    });
    const p = t, E = B(""), L = B("asc"), z = B(!1), q = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), K = () => {
      const i = /* @__PURE__ */ new Set();
      for (const u of p.columns)
        u.sortable && i.add(u.key);
      return i;
    }, j = (i) => i && K().has(i) ? i : "", G = (i) => i === "desc" ? "desc" : "asc", N = () => {
      if (!p.sortStorageKey) return null;
      try {
        const i = localStorage.getItem(p.sortStorageKey);
        if (!i) return null;
        const u = JSON.parse(i), d = j(typeof u.key == "string" ? u.key : "");
        return d ? { key: d, order: G(u.order) } : null;
      } catch (i) {
        return console.error("[DataTable] Failed to read persisted sort state:", i), null;
      }
    }, H = (i) => {
      if (p.sortStorageKey)
        try {
          localStorage.setItem(p.sortStorageKey, JSON.stringify(i));
        } catch (u) {
          console.error("[DataTable] Failed to persist sort state:", u);
        }
    }, V = () => {
      const i = N();
      if (i) return i;
      const u = j(p.defaultSortKey || "");
      return u ? { key: u, order: G(p.defaultSortOrder) } : null;
    }, et = (i) => {
      i && (E.value = i.key, L.value = i.order);
    }, ft = (i, u) => E.value === i && L.value === u ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", Et = (i) => E.value !== i ? "none" : L.value === "asc" ? "ascending" : "descending", Mt = (i) => {
      const u = i.class || "";
      return u.includes("text-center") ? "justify-center" : u.includes("text-right") ? "justify-end" : "justify-start";
    }, it = (i) => i == null || i === "", ot = (i) => {
      if (typeof i == "number") return Number.isFinite(i) ? i : null;
      if (typeof i == "boolean") return i ? 1 : 0;
      if (typeof i == "string") {
        const u = i.trim();
        if (!u) return null;
        const d = Number(u);
        return Number.isFinite(d) ? d : null;
      }
      return null;
    }, wt = (i) => {
      if (i == null) return "";
      if (typeof i == "string") return i;
      if (typeof i == "number" || typeof i == "boolean") return String(i);
      if (i instanceof Date) return i.toISOString();
      try {
        return JSON.stringify(i);
      } catch {
        return String(i);
      }
    }, bt = (i, u) => {
      const d = it(i), S = it(u);
      if (d && S) return 0;
      if (d) return 1;
      if (S) return -1;
      const A = ot(i), rt = ot(u);
      if (A !== null && rt !== null)
        return A === rt ? 0 : A < rt ? -1 : 1;
      const mt = wt(i), Pt = wt(u), ae = q.compare(mt, Pt);
      return ae === 0 ? 0 : ae < 0 ? -1 : 1;
    }, pt = (i) => typeof p.rowKey == "function" ? p.rowKey(i) ?? void 0 : typeof p.rowKey == "string" && p.rowKey ? (i == null ? void 0 : i[p.rowKey]) ?? void 0 : (i == null ? void 0 : i.id) ?? void 0, J = (i, u) => pt(i) ?? u, vt = I(() => p.columns.filter((i) => i.key !== "actions")), ht = I(
      () => p.columns.map((i) => `${i.key}:${i.sortable ? "1" : "0"}`).join("|")
    );
    tt(
      r,
      async (i) => {
        T(), i && (await lt(), U());
      },
      { immediate: !0, flush: "post" }
    ), tt(
      [() => p.data.length, ht],
      async () => {
        await lt(), O(), _();
      },
      { flush: "post" }
    ), tt(z, async () => {
      await lt(), O();
    });
    const kt = (i) => {
      let u = "asc";
      E.value === i && (u = L.value === "asc" ? "desc" : "asc"), p.serverSideSort ? (E.value = i, L.value = u, o("sort", i, u)) : (E.value = i, L.value = u);
    }, m = I(() => {
      if (p.serverSideSort || !E.value || !p.data) return p.data;
      const i = E.value, u = L.value;
      return p.data.map((d, S) => ({ row: d, index: S })).sort((d, S) => {
        var rt, mt;
        const A = bt((rt = d.row) == null ? void 0 : rt[i], (mt = S.row) == null ? void 0 : mt[i]);
        return A !== 0 ? u === "asc" ? A : -A : d.index - S.index;
      }).map((d) => d.row);
    }), y = I(() => p.columns.length + (p.selectable ? 1 : 0)), w = I(() => new Set(p.selectedKeys)), D = I(
      () => (m.value ?? []).map((i, u) => J(i, u))
    ), Y = I(
      () => D.value.length > 0 && D.value.every((i) => w.value.has(i))
    ), St = I(() => Y.value ? !1 : D.value.some((i) => w.value.has(i))), ut = (i) => {
      const u = Array.from(i);
      o("update:selectedKeys", u), o("selectionChange", u);
    }, $t = (i, u) => w.value.has(J(i, u)), Ht = (i, u) => typeof p.selectionLabel == "function" ? p.selectionLabel(i) : p.selectionLabel ? p.selectionLabel : `${s("common.selectOption")} ${J(i, u)}`, Qt = (i, u, d) => {
      const S = new Set(p.selectedKeys), A = J(i, u);
      d ? S.add(A) : S.delete(A), ut(S);
    }, Jt = (i) => {
      const u = new Set(p.selectedKeys);
      for (const d of D.value)
        i ? u.add(d) : u.delete(d);
      ut(u);
    }, Tt = I(
      () => {
        var i;
        return r.value && (((i = m.value) == null ? void 0 : i.length) ?? 0) > (p.virtualizeThreshold ?? 100);
      }
    ), dt = Kl(I(() => {
      var i;
      return {
        count: Tt.value ? ((i = m.value) == null ? void 0 : i.length) ?? 0 : 0,
        getScrollElement: () => c.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (u) => {
          var S;
          const d = (S = m.value) == null ? void 0 : S[u];
          return d != null ? J(d, u) : u;
        },
        estimateSize: () => p.estimateRowHeight ?? 56,
        overscan: p.overscan ?? 5,
        // 兜底高度:首个有效高度读数到来前,先按一屏渲染,避免空白帧
        initialRect: { width: 0, height: x() },
        // 关键:过滤 0 高度读数,杜绝 scrollRect 被钉成 0 → calculateRange 返回 null → 整表空白
        observeElementRect: C,
        // 把测量类 ResizeObserver 回调批到 rAF,避免滚动中同步 reflow 风暴导致的校正抖动/空白
        useAnimationFrameWithResizeObserver: !0
      };
    })), Rt = I(() => dt.value.getVirtualItems()), Zt = I(() => {
      const i = Rt.value;
      return i.length > 0 ? i[0].start : 0;
    }), Xt = I(() => {
      const i = Rt.value;
      return i.length === 0 ? 0 : dt.value.getTotalSize() - i[i.length - 1].end;
    }), Oe = (i) => {
      i && dt.value.measureElement(i);
    }, Ee = I(
      () => (m.value ?? []).map((i) => {
        const u = pt(i);
        return u !== void 0 ? u : i !== null && typeof i == "object" ? i : Symbol("unstable-row");
      })
    ), Me = (i, u) => {
      if (i.length !== u.length) return !1;
      const d = new Set(i), S = new Set(u);
      return d.size !== i.length || S.size !== u.length ? !1 : [...d].every((A) => S.has(A));
    };
    tt(
      Ee,
      (i, u) => {
        Me(i, u) || (dt.value.measureElement(null), dt.value.measure());
      },
      { flush: "post" }
    );
    const Te = I(() => {
      const i = m.value ?? [];
      return Tt.value ? Rt.value.map((u) => ({ index: u.index, row: i[u.index], measure: !0 })) : i.map((u, d) => ({ index: d, row: u, measure: !1 }));
    }), Yt = I(() => p.columns.some((i) => i.key === "actions")), Re = I(() => p.columns.length > 0 && p.columns[0].key === "select"), te = (i, u) => {
      const d = [];
      return p.stickyFirstColumn && (Re.value ? u === 0 ? d.push("sticky-col sticky-col-left-first") : u === 1 && d.push("sticky-col sticky-col-left-second") : u === 0 && d.push("sticky-col sticky-col-left")), p.stickyActionsColumn && i.key === "actions" && d.push("sticky-col sticky-col-right"), d.join(" ");
    }, xt = () => {
      const i = p.columns.length;
      return i >= 10 ? "px-2" : i >= 7 ? "px-3" : i >= 5 ? "px-4" : "px-6";
    }, ee = B(!1);
    return Lt(() => {
      const i = V();
      et(i), ee.value = !0;
    }), tt(
      ht,
      () => {
        const i = j(E.value);
        if (!E.value) {
          const u = V();
          et(u);
          return;
        }
        if (!i) {
          const u = V();
          u ? et(u) : (E.value = "", L.value = "asc");
        }
      },
      { flush: "post" }
    ), tt(
      [E, L],
      ([i, u]) => {
        if (!ee.value || !p.sortStorageKey) return;
        const d = j(i);
        d && H({ key: d, order: G(u) });
      },
      { flush: "post" }
    ), e({
      virtualizer: dt,
      shouldVirtualize: Tt,
      sortedData: m,
      resolveRowKey: J,
      tableWrapperEl: c
    }), (i, u) => r.value ? (b(), $("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: c,
      class: W(["table-wrapper", {
        "actions-expanded": z.value,
        "is-scrollable": l.value
      }])
    }, [
      f("table", su, [
        f("thead", ru, [
          f("tr", null, [
            t.selectable ? (b(), $("th", iu, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: Y.value,
                indeterminate: St.value,
                "aria-label": P(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: u[2] || (u[2] = (d) => Jt(d.target.checked))
              }, null, 40, ou)
            ])) : F("", !0),
            (b(!0), $(Q, null, Z(t.columns, (d, S) => (b(), $("th", {
              key: d.key,
              scope: "col",
              "aria-sort": d.sortable ? Et(d.key) : void 0,
              class: W([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                xt(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": d.sortable },
                te(d, S),
                d.class
              ]),
              onClick: (A) => d.sortable && kt(d.key)
            }, [
              f("div", {
                class: W(["flex items-center space-x-1", Mt(d)])
              }, [
                at(i.$slots, `header-${d.key}`, {
                  column: d,
                  sortKey: E.value,
                  sortOrder: L.value
                }, () => [
                  f("span", null, M(d.label), 1)
                ], !0),
                d.sortable ? (b(), $("span", lu, [
                  (b(), $("svg", {
                    class: W(["h-2.5 w-2.5", ft(d.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[6] || (u[6] = [
                    f("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (b(), $("svg", {
                    class: W(["-mt-0.5 h-2.5 w-2.5", ft(d.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[7] || (u[7] = [
                    f("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : F("", !0)
              ], 2)
            ], 10, cu))), 128))
          ])
        ]),
        f("tbody", uu, [
          t.loading ? (b(), $(Q, { key: 0 }, Z(5, (d) => f("tr", { key: d }, [
            t.selectable ? (b(), $("td", du, [...u[8] || (u[8] = [
              f("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : F("", !0),
            (b(!0), $(Q, null, Z(t.columns, (S) => (b(), $("td", {
              key: S.key,
              class: W(["whitespace-nowrap py-4", xt()])
            }, [...u[9] || (u[9] = [
              f("div", { class: "animate-pulse" }, [
                f("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !t.data || t.data.length === 0 ? (b(), $("tr", mu, [
            f("td", {
              colspan: y.value,
              class: W(["py-12 text-center text-gray-500 dark:text-dark-400", xt()])
            }, [
              at(i.$slots, "empty", {}, () => [
                f("div", fu, [
                  st(nt, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  f("p", pu, M(P(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, gu)
          ])) : (b(), $(Q, { key: 2 }, [
            Zt.value > 0 ? (b(), $("tr", hu, [
              f("td", {
                colspan: y.value,
                style: Kt({ height: Zt.value + "px", padding: 0, border: "none" })
              }, null, 12, yu)
            ])) : F("", !0),
            (b(!0), $(Q, null, Z(Te.value, (d) => (b(), $("tr", {
              key: J(d.row, d.index),
              "data-row-id": J(d.row, d.index),
              "data-index": d.index,
              ref_for: !0,
              ref: d.measure ? Oe : void 0,
              class: W(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": t.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": t.selectable && $t(d.row, d.index)
              }]),
              onClick: (S) => t.clickableRows && o("rowClick", d.row)
            }, [
              t.selectable ? (b(), $("td", bu, [
                f("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: $t(d.row, d.index),
                  "aria-label": Ht(d.row, d.index),
                  "data-test": "select-row",
                  onClick: u[3] || (u[3] = X(() => {
                  }, ["stop"])),
                  onChange: (S) => Qt(d.row, d.index, S.target.checked)
                }, null, 40, vu)
              ])) : F("", !0),
              (b(!0), $(Q, null, Z(t.columns, (S, A) => (b(), $("td", {
                key: S.key,
                class: W([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  xt(),
                  te(S, A),
                  S.class
                ])
              }, [
                at(i.$slots, `cell-${S.key}`, {
                  row: d.row,
                  value: d.row[S.key],
                  expanded: z.value
                }, () => [
                  ct(M(S.formatter ? S.formatter(d.row[S.key], d.row) : d.row[S.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, wu))), 128)),
            Xt.value > 0 ? (b(), $("tr", ku, [
              f("td", {
                colspan: y.value,
                style: Kt({ height: Xt.value + "px", padding: 0, border: "none" })
              }, null, 12, Su)
            ])) : F("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (b(), $("div", Fl, [
      t.loading ? (b(), $(Q, { key: 0 }, Z(5, (d) => f("div", {
        key: d,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        f("div", Nl, [
          (b(!0), $(Q, null, Z(vt.value, (S) => (b(), $("div", {
            key: S.key,
            class: "flex justify-between"
          }, [...u[4] || (u[4] = [
            f("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            f("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          Yt.value ? (b(), $("div", Wl, [...u[5] || (u[5] = [
            f("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : F("", !0)
        ])
      ])), 64)) : !t.data || t.data.length === 0 ? (b(), $("div", Vl, [
        at(i.$slots, "empty", {}, () => [
          f("div", jl, [
            st(nt, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            f("p", ql, M(P(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (b(), $(Q, { key: 2 }, [
        t.selectable ? (b(), $("div", Gl, [
          f("label", Hl, [
            f("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: Y.value,
              indeterminate: St.value,
              "data-test": "select-all-mobile",
              onChange: u[0] || (u[0] = (d) => Jt(d.target.checked))
            }, null, 40, Ql),
            f("span", null, M(P(s)("common.selectAll")), 1)
          ])
        ])) : F("", !0),
        (b(!0), $(Q, null, Z(m.value, (d, S) => (b(), $("div", {
          key: J(d, S),
          class: W(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": t.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": t.selectable && $t(d, S)
          }]),
          onClick: (A) => t.clickableRows && o("rowClick", d)
        }, [
          f("div", Zl, [
            t.selectable ? (b(), $("div", Xl, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: $t(d, S),
                "aria-label": Ht(d, S),
                "data-test": "select-row",
                onClick: u[1] || (u[1] = X(() => {
                }, ["stop"])),
                onChange: (A) => Qt(d, S, A.target.checked)
              }, null, 40, Yl)
            ])) : F("", !0),
            (b(!0), $(Q, null, Z(vt.value, (A) => (b(), $("div", {
              key: A.key,
              "data-field": A.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              f("span", eu, M(A.label), 1),
              f("div", au, [
                at(i.$slots, `cell-${A.key}`, {
                  row: d,
                  value: d[A.key],
                  expanded: z.value
                }, () => [
                  ct(M(A.formatter ? A.formatter(d[A.key], d) : d[A.key]), 1)
                ], !0)
              ])
            ], 8, tu))), 128)),
            Yt.value ? (b(), $("div", nu, [
              at(i.$slots, "cell-actions", {
                row: d,
                value: d.actions,
                expanded: z.value
              }, void 0, !0)
            ])) : F("", !0)
          ])
        ], 10, Jl))), 128))
      ], 64))
    ]));
  }
}), gd = /* @__PURE__ */ Vt($u, [["__scopeId", "data-v-2280f759"]]), xu = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], _u = { class: "select-value" }, Cu = ["onKeydown"], Iu = { class: "select-icon" }, Au = {
  key: 0,
  class: "select-search"
}, Ou = ["placeholder", "aria-label"], Eu = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], Mu = {
  key: 0,
  class: "select-empty"
}, Bt = 8, Tu = 200, Ru = 300, Pu = /* @__PURE__ */ At({
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
  setup(t, { emit: e }) {
    const { t: a } = Ot(), s = `select-${Math.random().toString(36).substring(2, 9)}`, r = t, o = e, c = B(!1), l = B(""), g = B(-1), x = B(null), C = B(null), O = B(null), _ = B(null), R = B(null), v = B("bottom"), h = B(null), k = I(() => r.placeholder ?? a("common.selectOption")), T = I(() => r.searchPlaceholder ?? a("common.searchPlaceholder")), U = I(() => r.emptyText ?? a("common.noOptionsFound"));
    let p = null;
    const E = I(() => r.remote ? !0 : r.searchable === "auto" ? r.options.length > 5 : r.searchable), L = I(() => {
      if (!h.value) return {};
      const m = h.value, y = Math.max(Bt, window.innerWidth - Bt), w = Math.min(
        Math.max(Bt, m.left),
        y
      ), D = Math.max(0, y - w), Y = Math.max(Tu, m.width), St = Math.min(Y, D), ut = {
        position: "fixed",
        left: `${w}px`,
        minWidth: `${St}px`,
        maxWidth: `${D}px`,
        zIndex: "100000020"
      };
      return v.value === "top" ? ut.bottom = `${window.innerHeight - m.top + 4}px` : ut.top = `${m.bottom + 4}px`, ut;
    }), z = (m) => typeof m == "object" && m !== null ? m[r.valueKey] : m, q = (m) => String(typeof m == "object" && m !== null ? m[r.labelKey] ?? "" : m ?? ""), K = (m) => typeof m == "object" && m !== null ? !!m.disabled : !1, j = (m) => typeof m == "object" && m !== null ? m.kind === "group" : !1, G = I(() => r.options.find((m) => z(m) === r.modelValue) || null), N = I(() => G.value ? q(G.value) : r.creatable && r.modelValue ? String(r.modelValue) : k.value), H = I(
      () => r.modelValue !== null && r.modelValue !== void 0 && r.modelValue !== ""
    ), V = I(() => {
      let m = r.options;
      if (E.value && l.value && !r.remote) {
        const y = l.value.toLowerCase();
        if (m = m.filter((w) => !!(q(w).toLowerCase().includes(y) || w.description && String(w.description).toLowerCase().includes(y))), r.creatable && l.value.trim()) {
          const w = l.value.trim(), D = r.creatablePrefix || a("common.search");
          m = [{ [r.valueKey]: w, [r.labelKey]: `${D} "${w}"`, _creatable: !0 }, ...m];
        }
      }
      return m;
    }), et = (m) => z(m) === r.modelValue, ft = (m) => {
      const y = V.value;
      if (y.length === 0) return -1;
      for (let w = 0; w < y.length; w++) {
        const D = (m + w) % y.length;
        if (!K(y[D])) return D;
      }
      return -1;
    }, Et = (m) => {
      const y = V.value;
      if (y.length === 0) return -1;
      for (let w = 0; w < y.length; w++) {
        const D = (m - w + y.length) % y.length;
        if (!K(y[D])) return D;
      }
      return -1;
    }, Mt = (m, y) => {
      K(m) || j(m) || (g.value = y);
    }, it = () => {
      x.value && (h.value = x.value.getBoundingClientRect());
    }, ot = () => {
      x.value && (it(), lt(() => {
        if (!_.value || !h.value) return;
        const m = _.value.offsetHeight || 240, y = window.innerHeight - h.value.bottom, w = h.value.top;
        y < m && w > m ? v.value = "top" : v.value = "bottom";
      }));
    }, wt = () => {
      r.disabled || (c.value = !c.value);
    };
    tt(c, (m) => {
      if (m) {
        if (ot(), V.value.length === 0)
          g.value = -1;
        else {
          const y = V.value.findIndex(et), w = y >= 0 ? y : 0;
          g.value = K(V.value[w]) ? ft(w + 1) : w;
        }
        E.value && lt(() => {
          var y;
          return (y = O.value) == null ? void 0 : y.focus();
        }), window.addEventListener("scroll", it, { capture: !0, passive: !0 }), window.addEventListener("resize", ot);
      } else
        l.value = "", g.value = -1, p && (clearTimeout(p), p = null), window.removeEventListener("scroll", it, { capture: !0 }), window.removeEventListener("resize", ot);
    }), tt(l, (m) => {
      !r.remote || !c.value || (p && clearTimeout(p), p = setTimeout(() => {
        p = null, o("search", m.trim());
      }, Ru));
    });
    const bt = (m) => {
      var w;
      const y = z(m) ?? null;
      o("update:modelValue", y), o("change", y, m), c.value = !1, (w = C.value) == null || w.focus();
    }, pt = () => {
      r.disabled || (o("update:modelValue", null), o("change", null, null));
    }, J = () => {
      c.value || (c.value = !0);
    }, vt = (m) => {
      var y;
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault(), g.value = ft(g.value + 1), g.value >= 0 && ht();
          break;
        case "ArrowUp":
          m.preventDefault(), g.value = Et(g.value - 1), g.value >= 0 && ht();
          break;
        case "Enter":
          if (m.preventDefault(), g.value >= 0 && g.value < V.value.length) {
            const w = V.value[g.value];
            K(w) || bt(w);
          }
          break;
        case "Escape":
          m.preventDefault(), c.value = !1, (y = C.value) == null || y.focus();
          break;
        case "Tab":
          c.value = !1;
          break;
      }
    }, ht = () => {
      lt(() => {
        const m = R.value;
        if (!m) return;
        const y = m.children[g.value];
        y && (y.offsetTop < m.scrollTop ? m.scrollTop = y.offsetTop : y.offsetTop + y.offsetHeight > m.scrollTop + m.offsetHeight && (m.scrollTop = y.offsetTop + y.offsetHeight - m.offsetHeight));
      });
    }, kt = (m) => {
      var Y;
      const y = m.target, w = !!y.closest(`.${s}`), D = (Y = x.value) == null ? void 0 : Y.contains(y);
      !w && !D && c.value && (c.value = !1);
    };
    return Lt(() => {
      document.addEventListener("click", kt);
    }), fe(() => {
      document.removeEventListener("click", kt), window.removeEventListener("scroll", it, { capture: !0 }), window.removeEventListener("resize", ot), p && (clearTimeout(p), p = null);
    }), (m, y) => (b(), $("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: x
    }, [
      f("button", {
        ref_key: "triggerRef",
        ref: C,
        type: "button",
        onClick: wt,
        disabled: t.disabled,
        "aria-expanded": c.value,
        "aria-haspopup": !0,
        id: t.id,
        "aria-label": t.ariaLabel ?? "Select option",
        "aria-describedby": t.ariaDescribedby,
        class: W([
          "select-trigger",
          "console-skin-select-trigger",
          c.value && "select-trigger-open",
          t.error && "select-trigger-error",
          t.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          _t(X(J, ["prevent"]), ["down"]),
          _t(X(J, ["prevent"]), ["up"])
        ]
      }, [
        f("span", _u, [
          at(m.$slots, "selected", { option: G.value }, () => [
            ct(M(N.value), 1)
          ], !0)
        ]),
        t.clearable && H.value && !t.disabled ? (b(), $("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: X(pt, ["stop"]),
          onMousedown: y[0] || (y[0] = X(() => {
          }, ["stop"])),
          onKeydown: _t(X(pt, ["stop", "prevent"]), ["enter"])
        }, [
          st(nt, {
            name: "x",
            size: "sm"
          })
        ], 40, Cu)) : F("", !0),
        f("span", Iu, [
          st(nt, {
            name: "chevronDown",
            size: "md",
            class: W(["transition-transform duration-200", c.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, xu),
      (b(), Ct(Be, { to: "body" }, [
        st(Le, { name: "select-dropdown" }, {
          default: Ft(() => [
            c.value ? (b(), $("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: _,
              class: W(["select-dropdown-portal console-skin-select-menu", [s]]),
              style: Kt(L.value),
              role: "listbox",
              onClick: y[3] || (y[3] = X(() => {
              }, ["stop"])),
              onMousedown: y[4] || (y[4] = X(() => {
              }, ["stop"])),
              onKeydown: vt
            }, [
              E.value ? (b(), $("div", Au, [
                st(nt, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                pe(f("input", {
                  ref_key: "searchInputRef",
                  ref: O,
                  "onUpdate:modelValue": y[1] || (y[1] = (w) => l.value = w),
                  type: "text",
                  placeholder: T.value,
                  "aria-label": T.value,
                  class: "select-search-input",
                  onClick: y[2] || (y[2] = X(() => {
                  }, ["stop"]))
                }, null, 8, Ou), [
                  [he, l.value]
                ])
              ])) : F("", !0),
              f("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: R
              }, [
                (b(!0), $(Q, null, Z(V.value, (w, D) => (b(), $("div", {
                  key: `${typeof z(w)}:${String(z(w) ?? "")}`,
                  role: "option",
                  "aria-selected": et(w),
                  "aria-disabled": K(w),
                  onClick: X((Y) => !K(w) && bt(w), ["stop"]),
                  onMouseenter: (Y) => Mt(w, D),
                  class: W([
                    "select-option",
                    j(w) && "select-option-group",
                    et(w) && "select-option-selected",
                    K(w) && !j(w) && "select-option-disabled",
                    g.value === D && !j(w) && "select-option-focused"
                  ])
                }, [
                  at(m.$slots, "option", {
                    option: w,
                    selected: et(w)
                  }, () => [
                    w._creatable ? (b(), Ct(nt, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : F("", !0),
                    f("span", {
                      class: W(["select-option-label", w._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, M(q(w)), 3),
                    et(w) ? (b(), Ct(nt, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : F("", !0)
                  ], !0)
                ], 42, Eu))), 128)),
                V.value.length === 0 ? (b(), $("div", Mu, M(r.loading ? P(a)("common.loading") : U.value), 1)) : F("", !0)
              ], 512)
            ], 38)) : F("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), zu = /* @__PURE__ */ Vt(Pu, [["__scopeId", "data-v-fbc717eb"]]), Du = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, Uu = { class: "flex flex-1 items-center justify-between sm:hidden" }, Bu = ["disabled"], Lu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Ku = ["disabled"], Fu = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Nu = { class: "flex items-center space-x-4" }, Wu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Vu = { class: "font-medium" }, ju = { class: "font-medium" }, qu = { class: "font-medium" }, Gu = {
  key: 0,
  class: "flex items-center space-x-2"
}, Hu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Qu = { class: "page-size-select w-20" }, Ju = {
  key: 1,
  class: "flex items-center space-x-2"
}, Zu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Xu = ["max", "placeholder"], Yu = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, td = ["disabled", "aria-label"], ed = ["onClick", "disabled", "aria-label", "aria-current"], ad = ["disabled", "aria-label"], nd = /* @__PURE__ */ At({
  __name: "Pagination",
  props: {
    total: {},
    page: {},
    pageSize: {},
    pageSizeOptions: { default: () => Wt() },
    showPageSizeSelector: { type: Boolean, default: !0 },
    showJump: { type: Boolean, default: !1 }
  },
  emits: ["update:page", "update:pageSize"],
  setup(t, { emit: e }) {
    const { t: a } = Ot(), s = t, r = e, o = I(() => Math.ceil(s.total / s.pageSize)), c = I(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), l = I(() => {
      const v = s.page * s.pageSize;
      return v > s.total ? s.total : v;
    }), g = I(() => Array.from(
      /* @__PURE__ */ new Set([
        ...Wt(),
        yt(s.pageSize)
      ])
    ).sort((h, k) => h - k).map((h) => ({
      value: h,
      label: String(h)
    }))), x = B(""), C = I(() => {
      const v = [], k = o.value;
      if (k <= 7)
        for (let T = 1; T <= k; T++)
          v.push(T);
      else {
        v.push(1);
        const T = Math.max(2, s.page - 2), U = Math.min(k - 1, s.page + 2);
        T > 2 && v.push("...");
        for (let p = T; p <= U; p++)
          v.push(p);
        U < k - 1 && v.push("..."), v.push(k);
      }
      return v;
    }), O = (v) => {
      v >= 1 && v <= o.value && v !== s.page && r("update:page", v);
    }, _ = (v) => {
      if (v === null || typeof v == "boolean") return;
      const h = yt(typeof v == "string" ? parseInt(v, 10) : v);
      Ol(h), r("update:pageSize", h);
    }, R = () => {
      const v = String(x.value).trim();
      if (!v) return;
      const h = Number.parseInt(v, 10);
      if (Number.isNaN(h)) return;
      const k = Math.min(Math.max(h, 1), o.value);
      x.value = "", O(k);
    };
    return (v, h) => (b(), $("div", Du, [
      f("div", Uu, [
        f("button", {
          onClick: h[0] || (h[0] = (k) => O(t.page - 1)),
          disabled: t.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, M(P(a)("pagination.previous")), 9, Bu),
        f("span", Lu, M(P(a)("pagination.pageOf", { page: t.page, total: o.value })), 1),
        f("button", {
          onClick: h[1] || (h[1] = (k) => O(t.page + 1)),
          disabled: t.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, M(P(a)("pagination.next")), 9, Ku)
      ]),
      f("div", Fu, [
        f("div", Nu, [
          f("p", Wu, [
            ct(M(P(a)("pagination.showing")) + " ", 1),
            f("span", Vu, M(c.value), 1),
            ct(" " + M(P(a)("pagination.to")) + " ", 1),
            f("span", ju, M(l.value), 1),
            ct(" " + M(P(a)("pagination.of")) + " ", 1),
            f("span", qu, M(t.total), 1),
            ct(" " + M(P(a)("pagination.results")), 1)
          ]),
          t.showPageSizeSelector ? (b(), $("div", Gu, [
            f("span", Hu, M(P(a)("pagination.perPage")) + ":", 1),
            f("div", Qu, [
              st(zu, {
                "model-value": t.pageSize,
                options: g.value,
                "onUpdate:modelValue": _
              }, null, 8, ["model-value", "options"])
            ])
          ])) : F("", !0),
          t.showJump ? (b(), $("div", Ju, [
            f("span", Zu, M(P(a)("pagination.jumpTo")), 1),
            pe(f("input", {
              "onUpdate:modelValue": h[2] || (h[2] = (k) => x.value = k),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: P(a)("pagination.jumpPlaceholder"),
              onKeyup: _t(R, ["enter"])
            }, null, 40, Xu), [
              [he, x.value]
            ]),
            f("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: R
            }, M(P(a)("pagination.jumpAction")), 1)
          ])) : F("", !0)
        ]),
        f("nav", Yu, [
          f("button", {
            onClick: h[3] || (h[3] = (k) => O(t.page - 1)),
            disabled: t.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": P(a)("pagination.previous")
          }, [
            st(nt, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, td),
          (b(!0), $(Q, null, Z(C.value, (k, T) => (b(), $("button", {
            key: `${k}-${T}`,
            onClick: (U) => typeof k == "number" && O(k),
            disabled: typeof k != "number",
            class: W([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              k === t.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof k != "number" && "cursor-default"
            ]),
            "aria-label": typeof k == "number" ? P(a)("pagination.goToPage", { page: k }) : void 0,
            "aria-current": k === t.page ? "page" : void 0
          }, M(k), 11, ed))), 128)),
          f("button", {
            onClick: h[4] || (h[4] = (k) => O(t.page + 1)),
            disabled: t.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": P(a)("pagination.next")
          }, [
            st(nt, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, ad)
        ])
      ])
    ]));
  }
}), fd = /* @__PURE__ */ Vt(nd, [["__scopeId", "data-v-4125afbb"]]), sd = { class: "space-y-4" }, rd = { class: "text-sm text-gray-600 dark:text-gray-400" }, id = { class: "flex justify-end space-x-3" }, pd = /* @__PURE__ */ At({
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
  setup(t, { emit: e }) {
    const { t: a } = Ot(), s = t, r = I(() => s.confirmText || a("common.confirm")), o = I(() => s.cancelText || a("common.cancel")), c = e, l = () => {
      c("confirm");
    }, g = () => {
      c("cancel");
    };
    return (x, C) => (b(), Ct(Ke, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: g
    }, {
      footer: Ft(() => [
        f("div", id, [
          f("button", {
            onClick: g,
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 dark:focus:ring-offset-dark-800"
          }, M(o.value), 1),
          f("button", {
            onClick: l,
            type: "button",
            class: W([
              "rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800",
              t.danger ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
            ])
          }, M(r.value), 3)
        ])
      ]),
      default: Ft(() => [
        f("div", sd, [
          f("p", rd, M(t.message), 1),
          at(x.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
}), od = [
  { value: "anthropic", label: "Anthropic" },
  { value: "openai", label: "OpenAI" },
  { value: "gemini", label: "Gemini" },
  { value: "antigravity", label: "Antigravity" },
  { value: "grok", label: "Grok" },
  { value: "kimi", label: "Kimi" },
  { value: "zhipu", label: "Zhipu GLM" },
  { value: "deepseek", label: "DeepSeek" },
  { value: "minimax", label: "MiniMax" },
  { value: "opencode_go", label: "OpenCode" }
], hd = [
  ...od,
  { value: "composite", label: "Composite" }
];
export {
  od as C,
  gd as D,
  hd as G,
  fd as P,
  zu as S,
  pd as _,
  Rn as a,
  dd as b,
  es as c,
  Fn as d,
  ud as e,
  md as g,
  fo as o,
  Kn as r,
  Ol as s
};
