import { a as n, ab as De, ac as Be, d as I, j as z, Q as Ue, w as Y, ad as se, a0 as Le, e as bt, u as Tt, r as P, c as Ot, o as Vt, n as v, g as k, F as Q, k as X, h as f, m as D, J as tt, q as et, _ as nt, i as T, s as N, z as J, l as lt, D as Et, p as it, B as jt, E as It, A as yt, M as pe, T as he, v as Mt, x as ye, y as we } from "./cnProviderAdminLeaf-CHNemIo-.js";
async function Ke() {
  const { data: t } = await n.get("/admin/dashboard/stats");
  return t;
}
async function Fe() {
  const { data: t } = await n.get("/admin/dashboard/realtime");
  return t;
}
async function Ne(t) {
  const { data: e } = await n.get("/admin/dashboard/trend", { params: t });
  return e;
}
async function We(t) {
  const { data: e } = await n.get("/admin/dashboard/models", { params: t });
  return e;
}
async function Ve(t) {
  const { data: e } = await n.get("/admin/dashboard/groups", { params: t });
  return e;
}
async function ld(t) {
  const { data: e } = await n.get("/admin/dashboard/user-breakdown", {
    params: t
  });
  return e;
}
async function je(t) {
  const { data: e } = await n.get("/admin/dashboard/snapshot-v2", {
    params: t
  });
  return e;
}
async function qe(t) {
  const { data: e } = await n.get("/admin/dashboard/api-keys-trend", {
    params: t
  });
  return e;
}
async function Ge(t) {
  const { data: e } = await n.get("/admin/dashboard/users-trend", {
    params: t
  });
  return e;
}
async function He(t) {
  const { data: e } = await n.get("/admin/dashboard/users-ranking", {
    params: t
  });
  return e;
}
async function Qe(t) {
  const { data: e } = await n.post("/admin/dashboard/users-usage", {
    user_ids: t
  });
  return e;
}
async function Je(t) {
  const { data: e } = await n.post(
    "/admin/dashboard/api-keys-usage",
    {
      api_key_ids: t
    }
  );
  return e;
}
const Ze = {
  getStats: Ke,
  getRealtimeMetrics: Fe,
  getUsageTrend: Ne,
  getModelStats: We,
  getGroupStats: Ve,
  getSnapshotV2: je,
  getApiKeyUsageTrend: qe,
  getUserUsageTrend: Ge,
  getUserSpendingRanking: He,
  getBatchUsersUsage: Qe,
  getBatchApiKeysUsage: Je
};
async function Xe(t = 1, e = 20, a, s) {
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
async function Ye(t, e = !1) {
  const a = e ? `/admin/users/${t}?include_deleted=true` : `/admin/users/${t}`, { data: s } = await n.get(a);
  return s;
}
async function ta(t) {
  const { data: e } = await n.post("/admin/users", t);
  return e;
}
async function qt(t, e) {
  const { data: a } = await n.put(`/admin/users/${t}`, e);
  return a;
}
async function ea(t) {
  const { data: e } = await n.delete(`/admin/users/${t}`);
  return e;
}
async function aa(t, e, a = "set", s) {
  const { data: r } = await n.post(`/admin/users/${t}/balance`, {
    balance: e,
    operation: a,
    notes: s || ""
  });
  return r;
}
async function na(t, e) {
  return qt(t, { concurrency: e });
}
async function sa(t) {
  const { data: e } = await n.post(
    "/admin/users/batch-limits",
    t
  );
  return e;
}
async function ra(t, e) {
  return qt(t, { status: e });
}
async function ia(t) {
  const { data: e } = await n.get(`/admin/users/${t}/api-keys`);
  return e;
}
async function oa(t, e = "month") {
  const { data: a } = await n.get(`/admin/users/${t}/usage`, {
    params: { period: e }
  });
  return a;
}
async function ca(t, e = 1, a = 20, s) {
  const r = { page: e, page_size: a };
  s && (r.type = s);
  const { data: o } = await n.get(
    `/admin/users/${t}/balance-history`,
    { params: r }
  );
  return o;
}
async function la(t, e, a) {
  const { data: s } = await n.post(
    `/admin/users/${t}/replace-group`,
    { old_group_id: e, new_group_id: a }
  );
  return s;
}
async function ua(t, e) {
  const { data: a } = await n.post(
    `/admin/users/${t}/auth-identities`,
    e
  );
  return a;
}
async function da(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/platform-quotas`
  );
  return e;
}
async function ma(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/platform-quotas`,
    { quotas: e }
  );
  return a;
}
async function ga(t, e, a) {
  const { data: s } = await n.post(
    `/admin/users/${t}/platform-quotas/reset`,
    { platform: e, window: a }
  );
  return s;
}
const fa = {
  list: Xe,
  getById: Ye,
  create: ta,
  update: qt,
  delete: ea,
  updateBalance: aa,
  updateConcurrency: na,
  batchUpdateLimits: sa,
  toggleStatus: ra,
  getUserApiKeys: ia,
  getUserUsageStats: oa,
  getUserBalanceHistory: ca,
  replaceGroup: la,
  bindUserAuthIdentity: ua,
  getPlatformQuotas: da,
  updatePlatformQuotas: ma,
  resetPlatformQuotaWindow: ga
};
async function pa(t = 1, e = 20, a, s) {
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
async function be(t) {
  const { data: e } = await n.get("/admin/groups/all", {
    params: t ? { platform: t } : void 0
  });
  return e;
}
async function ha() {
  const { data: t } = await n.get("/admin/groups/all", {
    params: { include_inactive: !0 }
  });
  return t;
}
async function ya(t) {
  return be(t);
}
async function wa() {
  const { data: t } = await n.get("/admin/groups/live-capability");
  return t;
}
async function ba(t) {
  const { data: e } = await n.get(`/admin/groups/${t}`);
  return e;
}
async function va(t, e) {
  const { data: a } = await n.get(
    `/admin/groups/${t}/model-allowlist-candidates`,
    {
      params: e ? { platform: e } : void 0
    }
  );
  return a.models || [];
}
async function ka(t) {
  const { data: e } = await n.post("/admin/groups", t);
  return e;
}
const Ut = /* @__PURE__ */ new Map();
function Sa() {
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
  const e = Sa();
  return e ? {
    adminID: e,
    key: `sub2api:admin:group-duplicate:${e}:${t}`
  } : null;
}
function $a(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function re(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Ca(t) {
  var r, o;
  const e = xa(t);
  let a = e ? Ut.get(e.key) ?? $a(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `group-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Ut.set(e.key, a), re(e.key, a));
  const { data: s } = await n.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return e && (Ut.delete(e.key), re(e.key, null)), s;
}
async function ve(t, e) {
  const { data: a } = await n.put(`/admin/groups/${t}`, e);
  return a;
}
async function _a(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}`);
  return e;
}
async function Ia(t, e) {
  return ve(t, { status: e });
}
async function Aa(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/stats`);
  return e;
}
async function Oa(t, e = 1, a = 20) {
  const { data: s } = await n.get(`/admin/groups/${t}/api-keys`, {
    params: { page: e, page_size: a }
  });
  return s;
}
async function Ea(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/composite-routes`);
  return e;
}
async function Ma(t, e) {
  const { data: a } = await n.post(
    `/admin/groups/${t}/composite-routes`,
    e
  );
  return a;
}
async function Ta(t, e, a) {
  const { data: s } = await n.put(
    `/admin/groups/${t}/composite-routes/${e}`,
    a
  );
  return s;
}
async function Ra(t, e) {
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
async function Pa(t) {
  const { data: e } = await n.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return e;
}
async function Da(t) {
  const { data: e } = await n.put("/admin/groups/sort-order", {
    updates: t
  });
  return e;
}
async function Ba(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rate-multipliers`);
  return e;
}
async function Ua(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rate-multipliers`,
    { entries: e }
  );
  return a;
}
async function La(t) {
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
async function Ka(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rpm-overrides`,
    { entries: e }
  );
  return a;
}
async function Fa(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rpm-overrides`);
  return e;
}
async function Na() {
  const { data: t } = await n.get("/admin/groups/usage-summary");
  return t;
}
async function Wa() {
  const { data: t } = await n.get("/admin/groups/capacity-summary");
  return t;
}
const Va = {
  list: pa,
  getAll: be,
  getByPlatform: ya,
  getAllIncludingInactive: ha,
  getLiveCapability: wa,
  getById: ba,
  getModelAllowlistCandidates: va,
  create: ka,
  duplicate: Ca,
  update: ve,
  delete: _a,
  toggleStatus: Ia,
  getStats: Aa,
  getGroupApiKeys: Oa,
  listCompositeRoutes: Ea,
  createCompositeRoute: Ma,
  updateCompositeRoute: Ta,
  deleteCompositeRoute: Ra,
  previewCompositeRoute: za,
  getGroupRateMultipliers: Pa,
  clearGroupRateMultipliers: Ba,
  batchSetGroupRateMultipliers: Ua,
  getGroupRPMOverrides: La,
  clearGroupRPMOverrides: Fa,
  batchSetGroupRPMOverrides: Ka,
  updateSortOrder: Da,
  getUsageSummary: Na,
  getCapacitySummary: Wa
};
async function ja(t = 1, e = 20, a, s) {
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
async function qa(t = 1, e = 20, a, s) {
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
    validateStatus: (m) => m >= 200 && m < 300 || m === 304
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
async function Ga(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}`);
  return e;
}
async function Ha(t) {
  const { data: e } = await n.post("/admin/accounts", t);
  return e;
}
const Lt = /* @__PURE__ */ new Map();
function Nt(t) {
  return `sub2api:admin:account-duplicate:${t}`;
}
function Qa(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(Nt(t))) ?? null;
  } catch {
    return null;
  }
}
function ie(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(Nt(t), e) : (s = globalThis.sessionStorage) == null || s.removeItem(Nt(t));
  } catch {
  }
}
async function Ja(t) {
  var s, r;
  let e = Lt.get(t) ?? Qa(t);
  if (!e) {
    const o = ((r = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : r.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    e = `account-duplicate-${t}-${o}`;
  }
  Lt.set(t, e), ie(t, e);
  const { data: a } = await n.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": e }
  });
  return Lt.delete(t), ie(t, null), a;
}
async function ke(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}`, e);
  return a;
}
async function Za(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/grok-media-eligibility`
  );
  return e;
}
async function Xa(t, e) {
  const { data: a } = await n.put(
    `/admin/accounts/${t}/grok-media-eligibility`,
    { mode: e }
  );
  return a;
}
async function Ya(t) {
  const { data: e } = await n.post("/admin/accounts/check-mixed-channel", t);
  return e;
}
async function tn(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}`);
  return e;
}
async function en(t, e) {
  return ke(t, { status: e });
}
async function an(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/test`);
  return e;
}
async function nn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/refresh`);
  return e;
}
async function sn(t, e) {
  const { data: a } = await n.post(
    `/admin/accounts/${t}/apply-oauth-credentials`,
    e
  );
  return a;
}
async function rn(t, e = 30) {
  const { data: a } = await n.get(`/admin/accounts/${t}/stats`, {
    params: { days: e }
  });
  return a;
}
async function on(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/clear-error`);
  return e;
}
async function cn(t, e, a) {
  const s = {};
  e && (s.source = e), a && (s.force = "true");
  const { data: r } = await n.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return r;
}
async function ln(t, e) {
  const { data: a } = await n.post("/admin/accounts/usage/batch", {
    account_ids: t,
    force: e === !0
  });
  return a;
}
async function un(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/clear-rate-limit`
  );
  return e;
}
async function dn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/recover-state`);
  return e;
}
async function mn(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/reset-quota`
  );
  return e;
}
async function gn(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function fn(t) {
  const { data: e } = await n.delete(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function pn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function hn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function yn(t) {
  const { data: e } = await n.post("/admin/accounts/batch", { accounts: t });
  return e;
}
async function wn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-update-credentials", t);
  return e;
}
async function bn(t, e) {
  const a = Array.isArray(t) ? {
    account_ids: t,
    ...e ?? {}
  } : t, { data: s } = await n.post("/admin/accounts/bulk-update", a);
  return s;
}
async function vn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/today-stats`);
  return e;
}
async function kn(t) {
  const { data: e } = await n.post("/admin/accounts/today-stats/batch", {
    account_ids: t
  });
  return e;
}
async function Sn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/schedulable`, {
    schedulable: e
  });
  return a;
}
async function xn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/models`);
  return e;
}
async function $n(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/models/sync-upstream`);
  return e;
}
async function Cn(t) {
  const { data: e } = await n.post("/admin/accounts/models/sync-upstream-preview", t);
  return e;
}
async function _n(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs/preview", t);
  return e;
}
async function In(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs", t, {
    timeout: 18e4
    // 180s timeout: sync refreshes each existing account's OAuth token serially
  });
  return e;
}
async function An(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { platform: s, type: r, status: o, group: c, privacy_mode: l, search: m, sort_by: C, sort_order: _ } = t.filters;
    s && (e.platform = s), r && (e.type = r), o && (e.status = o), c && (e.group = c), l && (e.privacy_mode = l), m && (e.search = m), C && (e.sort_by = C), _ && (e.sort_order = _);
  }
  (t == null ? void 0 : t.includeProxies) === !1 && (e.include_proxies = "false");
  const { data: a } = await n.get("/admin/accounts/data", { params: e });
  return a;
}
async function On(t) {
  const { data: e } = await n.post("/admin/accounts/data", {
    data: t.data,
    skip_default_group_bind: t.skip_default_group_bind
  });
  return e;
}
async function En(t) {
  const { data: e } = await n.post("/admin/accounts/import/codex-session", t, {
    timeout: 12e4
    // 120s timeout for large session imports
  });
  return e;
}
async function Mn(t) {
  const { data: e } = await n.post("/admin/openai/create-from-codex-pat", t);
  return e;
}
async function Tn() {
  const { data: t } = await n.get(
    "/admin/accounts/antigravity/default-model-mapping"
  );
  return t;
}
async function Rn(t, e, a = "/admin/openai/refresh-token", s) {
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
async function Pn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-delete", {
    account_ids: t
  });
  return e;
}
async function Dn(t) {
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
async function Un(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/set-privacy`);
  return e;
}
async function Ln(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/quota/refresh`
  );
  return e;
}
async function Kn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/reset-quota`,
    void 0,
    { timeout: 9e4 }
  );
  return e;
}
async function Fn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/shadow`, e);
  return a;
}
async function Nn() {
  const { data: t } = await n.get("/admin/accounts/upstream-billing-probe/settings");
  return t;
}
async function Wn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/upstream-billing-probe/settings",
    t
  );
  return e;
}
async function Vn(t, e) {
  await n.put(`/admin/accounts/${t}/upstream-billing-probe`, { enabled: e });
}
async function jn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/upstream-billing-probe`);
  return e;
}
async function qn(t) {
  const { data: e } = await n.post(
    "/admin/accounts/upstream-billing-probe/batch",
    { account_ids: t }
  );
  return e.results;
}
async function Gn() {
  const { data: t } = await n.get("/admin/accounts/ollama-cloud-usage/settings");
  return t;
}
async function Hn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/ollama-cloud-usage/settings",
    t
  );
  return e;
}
async function Qn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/ollama-cloud-usage`);
  return e;
}
async function Jn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/session`, {
    session: e
  });
  return a;
}
async function Zn(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}/ollama-cloud-usage/session`);
  return e;
}
async function Xn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/auto-refresh`, {
    enabled: e
  });
  return a;
}
async function Yn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/ollama-cloud-usage/refresh`);
  return e;
}
const ts = {
  list: ja,
  listWithEtag: qa,
  getById: Ga,
  create: Ha,
  duplicate: Ja,
  update: ke,
  getGrokMediaEligibility: Za,
  updateGrokMediaEligibility: Xa,
  checkMixedChannelRisk: Ya,
  delete: tn,
  toggleStatus: en,
  testAccount: an,
  refreshCredentials: nn,
  applyOAuthCredentials: sn,
  getStats: rn,
  clearError: on,
  getUsage: cn,
  getBatchUsage: ln,
  getTodayStats: vn,
  getBatchTodayStats: kn,
  clearRateLimit: un,
  recoverState: dn,
  resetAccountQuota: mn,
  getTempUnschedulableStatus: gn,
  resetTempUnschedulable: fn,
  setSchedulable: Sn,
  getAvailableModels: xn,
  syncUpstreamModels: $n,
  syncUpstreamModelsPreview: Cn,
  generateAuthUrl: pn,
  exchangeCode: hn,
  refreshOpenAIToken: Rn,
  batchCreate: yn,
  batchUpdateCredentials: wn,
  bulkUpdate: bn,
  previewFromCrs: _n,
  syncFromCrs: In,
  exportData: An,
  importData: On,
  importCodexSession: En,
  createOpenAICodexPAT: Mn,
  getAntigravityDefaultModelMapping: Tn,
  batchDelete: Pn,
  batchClearError: Dn,
  batchRefresh: Bn,
  setPrivacy: Un,
  revertProxyFallback: zn,
  refreshOpenAIQuota: Ln,
  resetOpenAIQuota: Kn,
  createSparkShadow: Fn,
  getUpstreamBillingProbeSettings: Nn,
  updateUpstreamBillingProbeSettings: Wn,
  setUpstreamBillingProbeEnabled: Vn,
  probeUpstreamBilling: jn,
  probeUpstreamBillingBatch: qn,
  getOllamaCloudUsageSettings: Gn,
  updateOllamaCloudUsageSettings: Hn,
  getOllamaCloudUsage: Qn,
  saveOllamaCloudUsageSession: Jn,
  deleteOllamaCloudUsageSession: Zn,
  setOllamaCloudUsageAutoRefresh: Xn,
  refreshOllamaCloudUsage: Yn
};
function Gt(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid proxy list response");
}
async function es(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/proxies", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return Gt(r == null ? void 0 : r.items), r;
}
async function as() {
  const { data: t } = await n.get("/admin/proxies/all");
  return Gt(t), t;
}
async function ns() {
  const { data: t } = await n.get("/admin/proxies/all", {
    params: { with_count: "true" }
  });
  return Gt(t), t;
}
async function ss(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}`);
  return e;
}
async function rs(t) {
  const { data: e } = await n.post("/admin/proxies", t);
  return e;
}
async function Se(t, e) {
  const { data: a } = await n.put(`/admin/proxies/${t}`, e);
  return a;
}
async function is(t) {
  const { data: e } = await n.delete(`/admin/proxies/${t}`);
  return e;
}
async function os(t, e) {
  return Se(t, { status: e });
}
async function cs(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/test`);
  return e;
}
async function ls(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/quality-check`);
  return e;
}
async function us(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/stats`);
  return e;
}
async function ds(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/accounts`);
  return e;
}
async function ms(t) {
  const { data: e } = await n.post("/admin/proxies/batch", { proxies: t });
  return e;
}
async function gs(t) {
  const { data: e } = await n.post("/admin/proxies/batch-delete", { ids: t });
  return e;
}
async function fs(t) {
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
async function ps(t) {
  const { data: e } = await n.post("/admin/proxies/data", t);
  return e;
}
const hs = {
  list: es,
  getAll: as,
  getAllWithCount: ns,
  getById: ss,
  create: rs,
  update: Se,
  delete: is,
  toggleStatus: os,
  testProxy: cs,
  checkProxyQuality: ls,
  getStats: us,
  getProxyAccounts: ds,
  batchCreate: ms,
  batchDelete: gs,
  exportData: fs,
  importData: ps
};
async function ys(t = 1, e = 20, a, s) {
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
async function ws(t) {
  const { data: e } = await n.get(`/admin/redeem-codes/${t}`);
  return e;
}
async function bs(t, e, a, s, r, o, c, l) {
  const m = {
    count: t,
    type: e,
    value: a
  };
  e === "subscription" && (m.group_id = s, r && r > 0 && (m.validity_days = r)), e === "mystery_box" && (m.min_value = c, m.max_value = l), o && o > 0 && (m.expires_in_days = o);
  const { data: C } = await n.post("/admin/redeem-codes/generate", m);
  return C;
}
async function vs(t) {
  const { data: e } = await n.delete(`/admin/redeem-codes/${t}`);
  return e;
}
async function ks(t) {
  const { data: e } = await n.post("/admin/redeem-codes/batch-delete", { ids: t });
  return e;
}
async function Ss(t, e) {
  const { data: a } = await n.post("/admin/redeem-codes/batch-update", { ids: t, fields: e });
  return a;
}
async function xs(t) {
  const { data: e } = await n.post(`/admin/redeem-codes/${t}/expire`);
  return e;
}
async function $s() {
  const { data: t } = await n.get("/admin/redeem-codes/stats");
  return t;
}
async function Cs(t) {
  return (await n.get("/admin/redeem-codes/export", {
    params: t,
    responseType: "blob"
  })).data;
}
const _s = {
  list: ys,
  getById: ws,
  generate: bs,
  delete: vs,
  batchDelete: ks,
  batchUpdate: Ss,
  expire: xs,
  getStats: $s,
  exportCodes: Cs
};
async function Is(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/promo-codes", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function As(t) {
  const { data: e } = await n.get(`/admin/promo-codes/${t}`);
  return e;
}
async function Os(t) {
  const { data: e } = await n.post("/admin/promo-codes", t);
  return e;
}
async function Es(t, e) {
  const { data: a } = await n.put(`/admin/promo-codes/${t}`, e);
  return a;
}
async function Ms(t) {
  const { data: e } = await n.delete(`/admin/promo-codes/${t}`);
  return e;
}
async function Ts(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/promo-codes/${t}/usages`,
    { params: { page: e, page_size: a } }
  );
  return s;
}
const Rs = {
  list: Is,
  getById: As,
  create: Os,
  update: Es,
  delete: Ms,
  getUsages: Ts
};
async function zs(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/announcements", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function Ps(t) {
  const { data: e } = await n.get(`/admin/announcements/${t}`);
  return e;
}
async function Ds(t) {
  const { data: e } = await n.post("/admin/announcements", t);
  return e;
}
async function Bs(t, e) {
  const { data: a } = await n.put(`/admin/announcements/${t}`, e);
  return a;
}
async function Us(t) {
  const { data: e } = await n.delete(`/admin/announcements/${t}`);
  return e;
}
async function Ls(t, e = 1, a = 20, s, r) {
  const { data: o } = await n.get(
    `/admin/announcements/${t}/read-status`,
    {
      params: { page: e, page_size: a, ...s },
      signal: r == null ? void 0 : r.signal
    }
  );
  return o;
}
const Ks = {
  list: zs,
  getById: Ps,
  create: Ds,
  update: Bs,
  delete: Us,
  getReadStatus: Ls
};
async function Fs() {
  const { data: t } = await n.get("/admin/settings");
  return t;
}
async function Ns() {
  const { data: t } = await n.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return t;
}
async function Ws(t) {
  const { data: e } = await n.put(
    "/admin/settings",
    t
  );
  return e;
}
async function Vs(t) {
  const { data: e } = await n.post(
    "/admin/settings/test-smtp",
    t
  );
  return e;
}
async function js(t) {
  const { data: e } = await n.post(
    "/admin/settings/send-test-email",
    t
  );
  return e;
}
async function qs() {
  const { data: t } = await n.get(
    "/admin/settings/email-templates"
  );
  return t;
}
async function Gs(t, e) {
  const { data: a } = await n.get(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`
  );
  return a;
}
async function Hs(t, e, a) {
  const { data: s } = await n.put(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`,
    a
  );
  return s;
}
async function Qs(t, e) {
  const { data: a } = await n.post(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}/restore-official`
  );
  return a;
}
async function Js(t) {
  const { data: e } = await n.post(
    "/admin/settings/email-template-preview",
    t
  );
  return e;
}
async function Zs() {
  const { data: t } = await n.get(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Xs() {
  const { data: t } = await n.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return t;
}
async function Ys() {
  const { data: t } = await n.delete(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function tr() {
  const { data: t } = await n.get(
    "/admin/settings/overload-cooldown"
  );
  return t;
}
async function er(t) {
  const { data: e } = await n.put(
    "/admin/settings/overload-cooldown",
    t
  );
  return e;
}
async function ar() {
  const { data: t } = await n.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function nr(t) {
  const { data: e } = await n.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return e;
}
async function sr() {
  const { data: t } = await n.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function rr(t) {
  const { data: e } = await n.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return e;
}
async function ir() {
  const { data: t } = await n.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function or(t) {
  const { data: e } = await n.put(
    "/admin/settings/stream-timeout",
    t
  );
  return e;
}
async function cr() {
  const { data: t } = await n.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function lr(t) {
  const { data: e } = await n.put(
    "/admin/settings/rectifier",
    t
  );
  return e;
}
async function ur() {
  const { data: t } = await n.get(
    "/admin/settings/beta-policy"
  );
  return t;
}
async function dr(t) {
  const { data: e } = await n.put(
    "/admin/settings/beta-policy",
    t
  );
  return e;
}
async function mr() {
  const { data: t } = await n.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function gr(t) {
  const { data: e } = await n.put(
    "/admin/settings/web-search-emulation",
    t
  );
  return e;
}
async function fr(t) {
  const { data: e } = await n.post(
    "/admin/settings/web-search-emulation/test",
    { query: t }
  );
  return e;
}
async function pr(t) {
  await n.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const hr = {
  getSettings: Fs,
  getNavigationSettings: Ns,
  updateSettings: Ws,
  testSmtpConnection: Vs,
  sendTestEmail: js,
  getEmailTemplates: qs,
  getEmailTemplate: Gs,
  updateEmailTemplate: Hs,
  restoreOfficialEmailTemplate: Qs,
  previewEmailTemplate: Js,
  getAdminApiKey: Zs,
  regenerateAdminApiKey: Xs,
  deleteAdminApiKey: Ys,
  getOverloadCooldownSettings: tr,
  updateOverloadCooldownSettings: er,
  getRateLimit429CooldownSettings: ar,
  updateRateLimit429CooldownSettings: nr,
  getPanelRateLimitSettings: sr,
  updatePanelRateLimitSettings: rr,
  getStreamTimeoutSettings: ir,
  updateStreamTimeoutSettings: or,
  getRectifierSettings: cr,
  updateRectifierSettings: lr,
  getBetaPolicySettings: ur,
  updateBetaPolicySettings: dr,
  getWebSearchEmulationConfig: mr,
  updateWebSearchEmulationConfig: gr,
  testWebSearchEmulation: fr,
  resetWebSearchUsage: pr
};
async function yr(t = 1, e = 20, a, s) {
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
async function wr(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}`);
  return e;
}
async function br(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}/progress`);
  return e;
}
async function vr(t) {
  const { data: e } = await n.post("/admin/subscriptions/assign", t);
  return e;
}
async function kr(t) {
  const { data: e } = await n.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return e;
}
async function Sr(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/extend`,
    e
  );
  return a;
}
async function xr(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/revoke`);
  return e;
}
async function $r(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/restore`);
  return e;
}
async function Cr(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/reset-quota`,
    e
  );
  return a;
}
async function _r(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
async function Ir(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
const Ar = {
  list: yr,
  getById: wr,
  getProgress: br,
  assign: vr,
  bulkAssign: kr,
  extend: Sr,
  revoke: xr,
  restore: $r,
  resetQuota: Cr,
  listByGroup: _r,
  listByUser: Ir
};
async function Or(t, e) {
  const { data: a } = await n.get("/admin/usage", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Er(t) {
  const { data: e } = await n.get("/admin/usage/stats", {
    params: t
  });
  return e;
}
async function Mr(t) {
  const { data: e } = await n.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return e;
}
async function Tr(t, e) {
  const a = {};
  t !== void 0 && (a.user_id = t), e && (a.q = e);
  const { data: s } = await n.get("/admin/usage/search-api-keys", {
    params: a
  });
  return s;
}
async function Rr(t, e) {
  const { data: a } = await n.get("/admin/usage/cleanup-tasks", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function zr(t) {
  const { data: e } = await n.post("/admin/usage/cleanup-tasks", t);
  return e;
}
async function Pr(t) {
  const { data: e } = await n.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return e;
}
const Dr = {
  list: Or,
  getStats: Er,
  searchUsers: Mr,
  searchApiKeys: Tr,
  listCleanupTasks: Rr,
  createCleanupTask: zr,
  cancelCleanupTask: Pr
};
async function Br(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return e;
}
async function Ur(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return e;
}
async function Lr() {
  const { data: t } = await n.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Kr = { generateAuthUrl: Br, exchangeCode: Ur, getCapabilities: Lr };
async function Fr(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return e;
}
async function Nr(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return e;
}
async function Wr(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/antigravity/oauth/refresh-token",
    a
  );
  return s;
}
const Vr = { generateAuthUrl: Fr, exchangeCode: Nr, refreshAntigravityToken: Wr }, xe = 12e4;
async function jr() {
  const { data: t } = await n.get("/admin/grok/oauth/capabilities");
  return t;
}
const qr = 3, Gr = 9e4, Hr = 9e4;
function Qr(t) {
  return Math.ceil(Math.max(1, t) / qr) * Gr + Hr;
}
async function Jr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return e;
}
async function Zr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return e;
}
async function Xr(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/grok/oauth/refresh-token",
    a
  );
  return s;
}
async function Yr(t) {
  const { data: e } = await n.get(`/admin/grok/accounts/${t}/quota`);
  return e;
}
async function ti(t) {
  const { data: e } = await n.post(`/admin/grok/accounts/${t}/reset-quota`);
  return e;
}
async function ei(t) {
  const { data: e } = await n.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Qr(t.sso_tokens.length) }
  );
  return e;
}
async function ai(t, e) {
  const a = { sso_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post("/admin/grok/oauth/sso-token", a, {
    timeout: xe
  });
  return s;
}
async function ni(t, e) {
  const a = "----", s = t.indexOf(a), r = (s >= 0 ? t.slice(0, s) : t).trim(), o = s >= 0 ? t.slice(s + a.length) : "", c = { email: r, password: o };
  e && (c.proxy_id = e);
  const { data: l } = await n.post("/admin/grok/oauth/password", c, {
    timeout: xe
  });
  return l;
}
const si = {
  generateAuthUrl: Jr,
  getCapabilities: jr,
  exchangeCode: Zr,
  refreshGrokToken: Xr,
  queryQuota: Yr,
  resetQuota: ti,
  createFromSSO: ei,
  validateSSOToken: ai,
  authorizePassword: ni
};
async function ri(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return e;
}
async function ii(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return e;
}
const oi = {
  queryQuota: ri,
  queryBalance: ii
};
async function ci() {
  const { data: t } = await n.get("/admin/user-attributes");
  return t;
}
async function li() {
  const { data: t } = await n.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function ui(t) {
  const { data: e } = await n.post("/admin/user-attributes", t);
  return e;
}
async function di(t, e) {
  const { data: a } = await n.put(
    `/admin/user-attributes/${t}`,
    e
  );
  return a;
}
async function mi(t) {
  const { data: e } = await n.delete(`/admin/user-attributes/${t}`);
  return e;
}
async function gi(t) {
  const { data: e } = await n.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return e;
}
async function fi(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/attributes`
  );
  return e;
}
async function pi(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/attributes`,
    { values: e }
  );
  return a;
}
async function hi(t) {
  const { data: e } = await n.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return e;
}
const yi = {
  listDefinitions: ci,
  listEnabledDefinitions: li,
  createDefinition: ui,
  updateDefinition: di,
  deleteDefinition: mi,
  reorderDefinitions: gi,
  getUserAttributeValues: fi,
  updateUserAttributeValues: pi,
  getBatchUserAttributes: hi
};
async function wi(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/concurrency", { params: a });
  return s;
}
async function bi() {
  const { data: t } = await n.get("/admin/ops/user-concurrency");
  return t;
}
async function vi(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/account-availability", { params: a });
  return s;
}
async function ki(t, e, a) {
  const s = { window: t };
  e && (s.platform = e), typeof a == "number" && a > 0 && (s.group_id = a);
  const { data: r } = await n.get("/admin/ops/realtime-traffic", { params: s });
  return r;
}
const Si = {
  REALTIME_DISABLED: 4001
}, xi = "sub2api-admin";
function $i(t, e = {}) {
  let a = null, s = 0;
  const r = Number.isFinite(e.maxReconnectAttempts) ? e.maxReconnectAttempts : 1 / 0, o = e.reconnectBaseDelayMs ?? 1e3, c = e.reconnectMaxDelayMs ?? 3e4;
  let l = null, m = !0, C = !1, _ = !1, A = 0;
  const $ = e.staleTimeoutMs ?? 12e4, O = e.staleCheckIntervalMs ?? 3e4;
  let w = null;
  const h = (q) => {
    var F;
    (F = e.onStatusChange) == null || F.call(e, q);
  }, S = () => {
    l && (clearTimeout(l), l = null);
  }, R = () => {
    w && (clearInterval(w), w = null);
  }, L = () => {
    R(), !(!$ || $ <= 0) && (w = setInterval(() => {
      if (!m || !a || a.readyState !== WebSocket.OPEN || !A) return;
      Date.now() - A > $ && a.close();
    }, O));
  }, p = () => {
    var G;
    if (!m || _ && s >= r) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      h("offline");
      return;
    }
    const q = o * Math.pow(2, s), F = Math.min(q, c), j = Math.floor(Math.random() * 250);
    S(), l = setTimeout(() => {
      s++, B();
    }, F + j), (G = e.onReconnectScheduled) == null || G.call(e, { attempt: s + 1, delayMs: F + j });
  }, M = () => {
    m && (a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || B());
  }, K = () => {
    h("offline");
  }, B = () => {
    if (!m || C || a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || _ && s >= r) return;
    C = !0, h(_ ? "reconnecting" : "connecting");
    const q = e.wsBaseUrl || void 0, F = q ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${q}/api/v1/admin/ops/ws/qps`) : new URL(De("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), j = String(e.token ?? localStorage.getItem("auth_token") ?? "").trim(), G = [xi];
    j && G.push(`jwt.${j}`), a = new WebSocket(F.toString(), G), a.onopen = () => {
      var W;
      s = 0, C = !1, _ = !0, S(), A = Date.now(), L(), h("connected"), (W = e.onOpen) == null || W.call(e);
    }, a.onmessage = (W) => {
      try {
        const H = JSON.parse(W.data);
        A = Date.now(), t(H);
      } catch (H) {
        console.warn("[OpsWS] Failed to parse message:", H);
      }
    }, a.onerror = (W) => {
      var H;
      console.error("[OpsWS] Connection error:", W), (H = e.onError) == null || H.call(e, W);
    }, a.onclose = (W) => {
      var H, V;
      if (C = !1, (H = e.onClose) == null || H.call(e, W), R(), a = null, W && typeof W.code == "number" && W.code === Si.REALTIME_DISABLED) {
        m = !1, S(), h("closed"), (V = e.onFatalClose) == null || V.call(e, W);
        return;
      }
      p();
    };
  };
  return window.addEventListener("online", M), window.addEventListener("offline", K), B(), () => {
    m = !1, window.removeEventListener("online", M), window.removeEventListener("offline", K), S(), R(), a && a.close(), a = null, h("closed");
  };
}
async function Ci(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function _i(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ii(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ai(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Oi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ei(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Mi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ti(t) {
  const { data: e } = await n.get("/admin/ops/errors", { params: t });
  return e;
}
async function Ri(t) {
  const { data: e } = await n.get(`/admin/ops/errors/${t}`);
  return e;
}
async function zi(t, e) {
  await n.put(`/admin/ops/errors/${t}/resolve`, { resolved: e });
}
async function Pi(t) {
  const { data: e } = await n.get("/admin/ops/request-errors", { params: t });
  return e;
}
async function Di(t) {
  const { data: e } = await n.get("/admin/ops/upstream-errors", { params: t });
  return e;
}
async function Bi(t) {
  const { data: e } = await n.get(`/admin/ops/request-errors/${t}`);
  return e;
}
async function Ui(t) {
  const { data: e } = await n.get(`/admin/ops/upstream-errors/${t}`);
  return e;
}
async function Li(t, e) {
  await n.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: e });
}
async function Ki(t, e) {
  await n.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: e });
}
async function Fi(t, e = {}, a = {}) {
  const s = { ...e };
  a.include_detail && (s.include_detail = "1");
  const { data: r } = await n.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return r;
}
async function Ni(t) {
  const { data: e } = await n.get("/admin/ops/requests", { params: t });
  return e;
}
async function Wi() {
  const { data: t } = await n.get("/admin/ops/alert-rules");
  return t;
}
async function Vi(t) {
  const { data: e } = await n.post("/admin/ops/alert-rules", t);
  return e;
}
async function ji(t, e) {
  const { data: a } = await n.put(`/admin/ops/alert-rules/${t}`, e);
  return a;
}
async function qi(t) {
  await n.delete(`/admin/ops/alert-rules/${t}`);
}
async function Gi(t = {}) {
  const { data: e } = await n.get("/admin/ops/alert-events", { params: t });
  return e;
}
async function Hi(t) {
  const { data: e } = await n.get(`/admin/ops/alert-events/${t}`);
  return e;
}
async function Qi(t, e) {
  await n.put(`/admin/ops/alert-events/${t}/status`, { status: e });
}
async function Ji(t) {
  await n.post("/admin/ops/alert-silences", t);
}
async function Zi() {
  const { data: t } = await n.get("/admin/ops/email-notification/config");
  return t;
}
async function Xi(t) {
  const { data: e } = await n.put("/admin/ops/email-notification/config", t);
  return e;
}
async function Yi() {
  const { data: t } = await n.get("/admin/ops/runtime/alert");
  return t;
}
async function to(t) {
  const { data: e } = await n.put("/admin/ops/runtime/alert", t);
  return e;
}
async function eo() {
  const { data: t } = await n.get("/admin/ops/runtime/logging");
  return t;
}
async function ao(t) {
  const { data: e } = await n.put("/admin/ops/runtime/logging", t);
  return e;
}
async function no() {
  const { data: t } = await n.post("/admin/ops/runtime/logging/reset");
  return t;
}
async function so(t) {
  const { data: e } = await n.get("/admin/ops/system-logs", { params: t });
  return e;
}
async function ro(t) {
  const { data: e } = await n.post("/admin/ops/system-logs/cleanup", t);
  return e;
}
async function io() {
  const { data: t } = await n.get("/admin/ops/system-logs/health");
  return t;
}
async function oo() {
  const { data: t } = await n.get("/admin/ops/advanced-settings");
  return t;
}
async function co(t) {
  const { data: e } = await n.put("/admin/ops/advanced-settings", t);
  return e;
}
async function lo() {
  const { data: t } = await n.get("/admin/ops/settings/metric-thresholds");
  return t;
}
async function uo(t) {
  await n.put("/admin/ops/settings/metric-thresholds", t);
}
const mo = {
  getDashboardSnapshotV2: _i,
  getDashboardOverview: Ci,
  getThroughputTrend: Ii,
  getLatencyHistogram: Ai,
  getErrorTrend: Oi,
  getErrorDistribution: Ei,
  getOpenAITokenStats: Mi,
  getConcurrencyStats: wi,
  getUserConcurrencyStats: bi,
  getAccountAvailabilityStats: vi,
  getRealtimeTrafficSummary: ki,
  subscribeQPS: $i,
  // Legacy unified endpoints
  listErrorLogs: Ti,
  getErrorLogDetail: Ri,
  updateErrorResolved: zi,
  // New split endpoints
  listRequestErrors: Pi,
  listUpstreamErrors: Di,
  getRequestErrorDetail: Bi,
  getUpstreamErrorDetail: Ui,
  updateRequestErrorResolved: Li,
  updateUpstreamErrorResolved: Ki,
  listRequestErrorUpstreamErrors: Fi,
  listRequestDetails: Ni,
  listAlertRules: Wi,
  createAlertRule: Vi,
  updateAlertRule: ji,
  deleteAlertRule: qi,
  listAlertEvents: Gi,
  getAlertEvent: Hi,
  updateAlertEventStatus: Qi,
  createAlertSilence: Ji,
  getEmailNotificationConfig: Zi,
  updateEmailNotificationConfig: Xi,
  getAlertRuntimeSettings: Yi,
  updateAlertRuntimeSettings: to,
  getRuntimeLogConfig: eo,
  updateRuntimeLogConfig: ao,
  resetRuntimeLogConfig: no,
  getAdvancedSettings: oo,
  updateAdvancedSettings: co,
  getMetricThresholds: lo,
  updateMetricThresholds: uo,
  listSystemLogs: so,
  cleanupSystemLogs: ro,
  getSystemLogSinkHealth: io
};
async function go() {
  const { data: t } = await n.get("/admin/error-passthrough-rules");
  return t;
}
async function fo(t) {
  const { data: e } = await n.get(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function po(t) {
  const { data: e } = await n.post("/admin/error-passthrough-rules", t);
  return e;
}
async function $e(t, e) {
  const { data: a } = await n.put(`/admin/error-passthrough-rules/${t}`, e);
  return a;
}
async function ho(t) {
  const { data: e } = await n.delete(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function yo(t, e) {
  return $e(t, { enabled: e });
}
const wo = {
  list: go,
  getById: fo,
  create: po,
  update: $e,
  delete: ho,
  toggleEnabled: yo
};
async function bo() {
  const { data: t } = await n.get("/admin/data-management/agent/health");
  return t;
}
async function vo() {
  const { data: t } = await n.get("/admin/data-management/config");
  return t;
}
async function ko(t) {
  const { data: e } = await n.put("/admin/data-management/config", t);
  return e;
}
async function So(t) {
  const { data: e } = await n.post("/admin/data-management/s3/test", t);
  return e;
}
async function xo(t) {
  const { data: e } = await n.get(`/admin/data-management/sources/${t}/profiles`);
  return e;
}
async function $o(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles`, e);
  return a;
}
async function Co(t, e, a) {
  const { data: s } = await n.put(`/admin/data-management/sources/${t}/profiles/${e}`, a);
  return s;
}
async function _o(t, e) {
  await n.delete(`/admin/data-management/sources/${t}/profiles/${e}`);
}
async function Io(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles/${e}/activate`);
  return a;
}
async function Ao() {
  const { data: t } = await n.get("/admin/data-management/s3/profiles");
  return t;
}
async function Oo(t) {
  const { data: e } = await n.post("/admin/data-management/s3/profiles", t);
  return e;
}
async function Eo(t, e) {
  const { data: a } = await n.put(`/admin/data-management/s3/profiles/${t}`, e);
  return a;
}
async function Mo(t) {
  await n.delete(`/admin/data-management/s3/profiles/${t}`);
}
async function To(t) {
  const { data: e } = await n.post(`/admin/data-management/s3/profiles/${t}/activate`);
  return e;
}
async function Ro(t) {
  const e = t.idempotency_key ? { "X-Idempotency-Key": t.idempotency_key } : void 0, { data: a } = await n.post(
    "/admin/data-management/backups",
    t,
    { headers: e }
  );
  return a;
}
async function zo(t) {
  const { data: e } = await n.get("/admin/data-management/backups", {
    params: t
  });
  return e;
}
async function Po(t) {
  const { data: e } = await n.get(`/admin/data-management/backups/${t}`);
  return e;
}
const Do = {
  getAgentHealth: bo,
  getConfig: vo,
  updateConfig: ko,
  listSourceProfiles: xo,
  createSourceProfile: $o,
  updateSourceProfile: Co,
  deleteSourceProfile: _o,
  setActiveSourceProfile: Io,
  testS3: So,
  listS3Profiles: Ao,
  createS3Profile: Oo,
  updateS3Profile: Eo,
  deleteS3Profile: Mo,
  setActiveS3Profile: To,
  createBackupJob: Ro,
  listBackupJobs: zo,
  getBackupJob: Po
};
async function Bo(t, e) {
  const { data: a } = await n.put(`/admin/api-keys/${t}`, {
    group_id: e === null ? 0 : e
  });
  return a;
}
const Uo = {
  updateApiKeyGroup: Bo
};
async function Lo(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/scheduled-test-plans`
  );
  return e ?? [];
}
async function Ko(t) {
  const { data: e } = await n.post(
    "/admin/scheduled-test-plans",
    t
  );
  return e;
}
async function Fo(t, e) {
  const { data: a } = await n.put(
    `/admin/scheduled-test-plans/${t}`,
    e
  );
  return a;
}
async function No(t) {
  await n.delete(`/admin/scheduled-test-plans/${t}`);
}
async function Wo(t, e) {
  const { data: a } = await n.get(
    `/admin/scheduled-test-plans/${t}/results`,
    {
      params: e ? { limit: e } : void 0
    }
  );
  return a ?? [];
}
const Vo = {
  listByAccount: Lo,
  create: Ko,
  update: Fo,
  delete: No,
  listResults: Wo
};
async function jo() {
  const { data: t } = await n.get("/admin/backups/s3-config");
  return t;
}
async function qo(t) {
  const { data: e } = await n.put("/admin/backups/s3-config", t);
  return e;
}
async function Go(t) {
  const { data: e } = await n.post("/admin/backups/s3-config/test", t);
  return e;
}
async function Ho() {
  const { data: t } = await n.get("/admin/backups/image-storage");
  return t;
}
async function Qo(t) {
  const { data: e } = await n.put("/admin/backups/image-storage", t);
  return e;
}
async function Jo(t) {
  const { data: e } = await n.post(
    "/admin/backups/image-storage/test",
    t
  );
  return e;
}
async function Zo() {
  const { data: t } = await n.get("/admin/backups/schedule");
  return t;
}
async function Xo(t) {
  const { data: e } = await n.put("/admin/backups/schedule", t);
  return e;
}
async function Yo(t) {
  const { data: e } = await n.post("/admin/backups", t || {});
  return e;
}
async function tc() {
  const { data: t } = await n.get("/admin/backups");
  return t;
}
async function ec(t) {
  const { data: e } = await n.get(`/admin/backups/${t}`);
  return e;
}
async function ac(t) {
  await n.delete(`/admin/backups/${t}`);
}
async function nc(t) {
  const { data: e } = await n.get(`/admin/backups/${t}/download-url`);
  return e;
}
async function sc(t, e) {
  const { data: a } = await n.post(`/admin/backups/${t}/restore`, { password: e });
  return a;
}
const rc = {
  getS3Config: jo,
  updateS3Config: qo,
  testS3Connection: Go,
  getImageStorageConfig: Ho,
  updateImageStorageConfig: Qo,
  testImageStorageConnection: Jo,
  getSchedule: Zo,
  updateSchedule: Xo,
  createBackup: Yo,
  listBackups: tc,
  getBackup: ec,
  deleteBackup: ac,
  getDownloadURL: nc,
  restoreBackup: sc
};
async function ic() {
  const { data: t } = await n.get("/admin/tls-fingerprint-profiles");
  return t;
}
async function oc(t) {
  const { data: e } = await n.get(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
async function cc(t) {
  const { data: e } = await n.post("/admin/tls-fingerprint-profiles", t);
  return e;
}
async function lc(t, e) {
  const { data: a } = await n.put(`/admin/tls-fingerprint-profiles/${t}`, e);
  return a;
}
async function uc(t) {
  const { data: e } = await n.delete(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
const dc = {
  list: ic,
  getById: oc,
  create: cc,
  update: lc,
  delete: uc
};
async function mc(t = 1, e = 20, a, s) {
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
async function gc(t) {
  const { data: e } = await n.get(`/admin/channels/${t}`);
  return e;
}
async function fc(t) {
  const { data: e } = await n.post("/admin/channels", t);
  return e;
}
async function pc(t, e) {
  const { data: a } = await n.put(`/admin/channels/${t}`, e);
  return a;
}
async function hc(t) {
  await n.delete(`/admin/channels/${t}`);
}
async function yc(t) {
  const { data: e } = await n.get("/admin/channels/model-pricing", {
    params: { model: t }
  });
  return e;
}
async function wc(t) {
  const { data: e } = await n.get("/admin/channels/pricing/sync-models", {
    params: { platform: t }
  });
  return e;
}
const bc = { list: mc, getById: gc, create: fc, update: pc, remove: hc, getModelDefaultPricing: yc, syncPricingModels: wc };
async function vc(t = {}, e) {
  const { data: a } = await n.get("/admin/channel-monitors", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function kc(t) {
  const { data: e } = await n.get(`/admin/channel-monitors/${t}`);
  return e;
}
async function Sc(t) {
  const { data: e } = await n.post("/admin/channel-monitors", t);
  return e;
}
const Kt = /* @__PURE__ */ new Map();
function xc() {
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
function $c(t) {
  const e = xc();
  return e ? {
    adminID: e,
    key: `sub2api:admin:channel-monitor-duplicate:${e}:${t}`
  } : null;
}
function Cc(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function oe(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function _c(t) {
  var r, o;
  const e = $c(t);
  let a = e ? Kt.get(e.key) ?? Cc(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `channel-monitor-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Kt.set(e.key, a), oe(e.key, a));
  const { data: s } = await n.post(
    `/admin/channel-monitors/${t}/duplicate`,
    void 0,
    { headers: { "Idempotency-Key": a } }
  );
  return e && (Kt.delete(e.key), oe(e.key, null)), s;
}
async function Ic(t, e) {
  const { data: a } = await n.put(`/admin/channel-monitors/${t}`, e);
  return a;
}
async function Ac(t) {
  await n.delete(`/admin/channel-monitors/${t}`);
}
async function Oc(t) {
  const { data: e } = await n.post(`/admin/channel-monitors/${t}/run`);
  return e;
}
async function Ec(t, e = {}) {
  const { data: a } = await n.get(
    `/admin/channel-monitors/${t}/history`,
    { params: e }
  );
  return a;
}
const Mc = {
  list: vc,
  get: kc,
  create: Sc,
  duplicate: _c,
  update: Ic,
  del: Ac,
  runNow: Oc,
  listHistory: Ec
};
async function Tc(t = {}) {
  const { data: e } = await n.get("/admin/channel-monitor-templates", {
    params: t
  });
  return e;
}
async function Rc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}`
  );
  return e;
}
async function zc(t) {
  const { data: e } = await n.post(
    "/admin/channel-monitor-templates",
    t
  );
  return e;
}
async function Pc(t, e) {
  const { data: a } = await n.put(
    `/admin/channel-monitor-templates/${t}`,
    e
  );
  return a;
}
async function Dc(t) {
  await n.delete(`/admin/channel-monitor-templates/${t}`);
}
async function Bc(t, e) {
  const { data: a } = await n.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: e }
  );
  return a;
}
async function Uc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return e;
}
const Lc = {
  list: Tc,
  get: Rc,
  create: zc,
  update: Pc,
  del: Dc,
  apply: Bc,
  listAssociatedMonitors: Uc
}, Kc = {
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
async function Fc(t = {}) {
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
async function Nc(t) {
  const { data: e } = await n.get(
    "/admin/affiliates/users/lookup",
    { params: { q: t } }
  );
  return e;
}
async function Wc(t, e) {
  const { data: a } = await n.put(
    `/admin/affiliates/users/${t}`,
    e
  );
  return a;
}
async function Vc(t) {
  const { data: e } = await n.delete(
    `/admin/affiliates/users/${t}`
  );
  return e;
}
async function jc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/users/batch-rate",
    t
  );
  return e;
}
function Ht(t = {}) {
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
async function qc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/invites",
    { params: Ht(t) }
  );
  return e;
}
async function Gc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/invites",
    t
  );
  return e;
}
async function Hc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/rebates",
    { params: Ht(t) }
  );
  return e;
}
async function Qc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/transfers",
    { params: Ht(t) }
  );
  return e;
}
async function Jc(t) {
  const { data: e } = await n.get(
    `/admin/affiliates/users/${t}/overview`
  );
  return e;
}
const Zc = {
  listUsers: Fc,
  lookupUsers: Nc,
  updateUserSettings: Wc,
  clearUserSettings: Vc,
  batchSetRate: jc,
  listInviteRecords: qc,
  bindRelationship: Gc,
  listRebateRecords: Hc,
  listTransferRecords: Qc,
  getUserOverview: Jc
};
async function Xc() {
  const { data: t } = await n.get("/admin/risk-control/config");
  return t;
}
async function Yc(t) {
  const { data: e } = await n.put("/admin/risk-control/config", t);
  return e;
}
async function tl() {
  const { data: t } = await n.get("/admin/risk-control/status");
  return t;
}
async function el(t = {}) {
  const { data: e } = await n.post("/admin/risk-control/api-keys/test", t);
  return e;
}
async function al(t = {}) {
  const { data: e } = await n.get("/admin/risk-control/logs", {
    params: t
  });
  return e;
}
async function nl(t) {
  const { data: e } = await n.post(
    `/admin/risk-control/users/${t}/unban`
  );
  return e;
}
async function sl(t) {
  const { data: e } = await n.delete("/admin/risk-control/hashes", {
    data: { input_hash: t }
  });
  return e;
}
async function rl() {
  const { data: t } = await n.delete("/admin/risk-control/hashes/all");
  return t;
}
const il = {
  getConfig: Xc,
  updateConfig: Yc,
  getStatus: tl,
  testAPIKeys: el,
  listLogs: al,
  unbanUser: nl,
  deleteFlaggedHash: sl,
  clearFlaggedHashes: rl
}, ol = {
  async getStatus() {
    const { data: t } = await n.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: e } = await n.post("/admin/compliance/accept", t);
    return e;
  }
};
async function cl(t) {
  const { data: e } = await n.get("/admin/audit-logs", { params: t });
  return e;
}
async function ll(t) {
  const { data: e } = await n.get(`/admin/audit-logs/${t}`);
  return e;
}
async function ul(t) {
  const { data: e } = await n.post("/admin/audit-logs/clear", { totp_code: t });
  return e;
}
const dl = {
  list: cl,
  get: ll,
  clear: ul
};
async function ml() {
  const { data: t } = await n.get("/admin/plugins");
  return t;
}
async function gl(t) {
  const e = new FormData();
  e.append("plugin", t);
  const { data: a } = await n.post("/admin/plugins/upload", e, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 12e4
  });
  return a;
}
async function fl(t, e, a) {
  const { data: s } = await n.post(`/admin/plugins/${t}/enable`, {
    rollout_percent: e,
    accept_untested: a
  });
  return s;
}
async function pl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/disable`);
  return e;
}
async function hl(t) {
  await n.delete(`/admin/plugins/${t}`);
}
async function yl(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/config`);
  return e;
}
async function wl(t, e) {
  const { data: a } = await n.put(`/admin/plugins/${t}/config`, e);
  return a;
}
async function bl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/test`);
  return e;
}
async function vl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/ui-session`);
  return e;
}
const kl = {
  list: ml,
  upload: gl,
  enable: fl,
  disable: pl,
  remove: hl,
  getConfig: yl,
  saveConfig: wl,
  test: bl,
  createUISession: vl
}, ud = {
  dashboard: Ze,
  users: fa,
  groups: Va,
  accounts: ts,
  proxies: hs,
  redeem: _s,
  promo: Rs,
  announcements: Ks,
  settings: hr,
  system: Be,
  subscriptions: Ar,
  usage: Dr,
  gemini: Kr,
  antigravity: Vr,
  grok: si,
  cnProviders: oi,
  userAttributes: yi,
  ops: mo,
  errorPassthrough: wo,
  dataManagement: Do,
  apiKeys: Uo,
  scheduledTests: Vo,
  backup: rc,
  tlsFingerprintProfiles: dc,
  channels: bc,
  channelMonitor: Mc,
  channelMonitorTemplate: Lc,
  payment: Kc,
  affiliates: Zc,
  riskControl: il,
  compliance: ol,
  audit: dl,
  plugins: kl
}, Ce = 5, Sl = 1e3, xl = 20, ce = [10, 20, 50, 100], _e = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ce || e > Sl ? null : e;
}, $l = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ce ? null : e;
}, Ie = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, Cl = () => {
  var e;
  const t = (e = Ie()) == null ? void 0 : e.table_page_size_options;
  return Array.isArray(t) ? Array.from(
    new Set(
      t.map((a) => _e(a)).filter((a) => a !== null)
    )
  ).sort((a, s) => a - s) : [];
}, le = (t, e) => {
  for (const a of e)
    if (a >= t)
      return a;
  return e[e.length - 1];
}, At = () => {
  var e;
  const t = _e((e = Ie()) == null ? void 0 : e.table_default_page_size);
  return t === null ? xl : t;
}, Wt = () => {
  const t = Cl();
  return t.length === 0 ? [...ce] : t.length > 0 ? t : [...ce];
}, wt = (t) => {
  const e = $l(t), a = At(), s = Wt();
  return le(e !== null ? e : a, s);
}, Ae = "table-page-size";
function dd(t = At()) {
  var e;
  if (typeof window < "u" && ((e = window.__APP_CONFIG__) == null ? void 0 : e.table_default_page_size) !== void 0)
    return wt(At());
  if (typeof window < "u")
    try {
      const a = window.localStorage.getItem(Ae);
      if (a !== null) {
        const s = Number(a);
        if (Number.isFinite(s))
          return wt(s);
      }
    } catch (a) {
      console.warn("Failed to read persisted page size:", a);
    }
  return wt(At() || t);
}
function _l(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ae, String(t));
    } catch (e) {
      console.warn("Failed to persist page size:", e);
    }
}
function gt(t, e, a) {
  let s = a.initialDeps ?? [], r, o = !0;
  function c() {
    var l, m, C;
    let _;
    a.key && ((l = a.debug) != null && l.call(a)) && (_ = Date.now());
    const A = t();
    if (!(A.length !== s.length || A.some((w, h) => s[h] !== w)))
      return r;
    s = A;
    let O;
    if (a.key && ((m = a.debug) != null && m.call(a)) && (O = Date.now()), r = e(...A), a.key && ((C = a.debug) != null && C.call(a))) {
      const w = Math.round((Date.now() - _) * 100) / 100, h = Math.round((Date.now() - O) * 100) / 100, S = h / 16, R = (L, p) => {
        for (L = String(L); L.length < p; )
          L = " " + L;
        return L;
      };
      console.info(
        `%c⏱ ${R(h, 5)} /${R(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
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
function ue(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Il = (t, e) => Math.abs(t - e) < 1.01, Al = (t, e, a) => {
  let s;
  return function(...r) {
    t.clearTimeout(s), s = t.setTimeout(() => e.apply(this, r), a);
  };
}, de = (t) => {
  const { offsetWidth: e, offsetHeight: a } = t;
  return { width: e, height: a };
}, Ol = (t) => t, El = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), a = Math.min(t.endIndex + t.overscan, t.count - 1), s = [];
  for (let r = e; r <= a; r++)
    s.push(r);
  return s;
}, Oe = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  const r = (c) => {
    const { width: l, height: m } = c;
    e({ width: Math.round(l), height: Math.round(m) });
  };
  if (r(de(a)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((c) => {
    const l = () => {
      const m = c[0];
      if (m != null && m.borderBoxSize) {
        const C = m.borderBoxSize[0];
        if (C) {
          r({ width: C.inlineSize, height: C.blockSize });
          return;
        }
      }
      r(de(a));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return o.observe(a, { box: "border-box" }), () => {
    o.unobserve(a);
  };
}, me = {
  passive: !0
}, ge = typeof window > "u" ? !0 : "onscrollend" in window, Ml = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  let r = 0;
  const o = t.options.useScrollendEvent && ge ? () => {
  } : Al(
    s,
    () => {
      e(r, !1);
    },
    t.options.isScrollingResetDelay
  ), c = (_) => () => {
    const { horizontal: A, isRtl: $ } = t.options;
    r = A ? a.scrollLeft * ($ && -1 || 1) : a.scrollTop, o(), e(r, _);
  }, l = c(!0), m = c(!1);
  a.addEventListener("scroll", l, me);
  const C = t.options.useScrollendEvent && ge;
  return C && a.addEventListener("scrollend", m, me), () => {
    a.removeEventListener("scroll", l), C && a.removeEventListener("scrollend", m);
  };
}, Tl = (t, e, a) => {
  if (e != null && e.borderBoxSize) {
    const s = e.borderBoxSize[0];
    if (s)
      return Math.round(
        s[a.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[a.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Rl = (t, {
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
class zl {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var a, s, r;
      return ((r = (s = (a = this.targetWindow) == null ? void 0 : a.performance) == null ? void 0 : s.now) == null ? void 0 : r.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let a = null;
      const s = () => a || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : a = new this.targetWindow.ResizeObserver((r) => {
        r.forEach((o) => {
          const c = () => {
            const l = o.target, m = this.indexFromElement(l);
            if (!l.isConnected) {
              this.observer.unobserve(l);
              return;
            }
            this.shouldMeasureDuringScroll(m) && this.resizeItem(
              m,
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
        getItemKey: Ol,
        rangeExtractor: El,
        onChange: () => {
        },
        measureElement: Tl,
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
        const m = o.get(
          l.lane
        );
        if (m == null || l.end > m.end ? o.set(l.lane, l) : l.end < m.end && r.set(l.lane, !0), r.size === this.options.lanes)
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
      ({ count: a, paddingStart: s, scrollMargin: r, getItemKey: o, enabled: c, lanes: l }, m) => {
        if (!c)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > a)
          for (const $ of this.laneAssignments.keys())
            $ >= a && this.laneAssignments.delete($);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(($) => {
          this.itemSizeCache.set($.key, $.size);
        }));
        const C = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === a && (this.lanesSettling = !1);
        const _ = this.measurementsCache.slice(0, C), A = new Array(l).fill(
          void 0
        );
        for (let $ = 0; $ < C; $++) {
          const O = _[$];
          O && (A[O.lane] = $);
        }
        for (let $ = C; $ < a; $++) {
          const O = o($), w = this.laneAssignments.get($);
          let h, S;
          if (w !== void 0 && this.options.lanes > 1) {
            h = w;
            const M = A[h], K = M !== void 0 ? _[M] : void 0;
            S = K ? K.end + this.options.gap : s + r;
          } else {
            const M = this.options.lanes === 1 ? _[$ - 1] : this.getFurthestMeasurement(_, $);
            S = M ? M.end + this.options.gap : s + r, h = M ? M.lane : $ % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set($, h);
          }
          const R = m.get(O), L = typeof R == "number" ? R : this.options.estimateSize($), p = S + L;
          _[$] = {
            index: $,
            start: S,
            size: L,
            end: p,
            key: O,
            lane: h
          }, A[h] = $;
        }
        return this.measurementsCache = _, _;
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
      (a, s, r, o) => this.range = a.length > 0 && s > 0 ? Pl({
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
          const l = a[o], m = s[l];
          r.push(m);
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
        return ue(
          s[Ee(
            0,
            s.length - 1,
            (r) => ue(s[r]).start,
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
      const [c, l] = o, m = this.now();
      this.scrollState = {
        index: a,
        align: l,
        behavior: r,
        startedAt: m,
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
    if (!c && Il(r, this.getScrollOffset())) {
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
const Ee = (t, e, a, s) => {
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
function Pl({
  measurements: t,
  outerSize: e,
  scrollOffset: a,
  lanes: s
}) {
  const r = t.length - 1, o = (m) => t[m].start;
  if (t.length <= s)
    return {
      startIndex: 0,
      endIndex: r
    };
  let c = Ee(
    0,
    r,
    o,
    a
  ), l = c;
  if (s === 1)
    for (; l < r && t[l].end < a + e; )
      l++;
  else if (s > 1) {
    const m = Array(s).fill(0);
    for (; l < r && m.some((_) => _ < a + e); ) {
      const _ = t[l];
      m[_.lane] = _.end, l++;
    }
    const C = Array(s).fill(a + e);
    for (; c >= 0 && C.some((_) => _ >= a); ) {
      const _ = t[c];
      C[_.lane] = _.start, c--;
    }
    c = Math.max(0, c - c % s), l = Math.min(r, l + (s - 1 - l % s));
  }
  return { startIndex: c, endIndex: l };
}
function Dl(t) {
  const e = new zl(z(t)), a = Ue(e), s = e._didMount();
  return Y(
    () => z(t).getScrollElement(),
    (r) => {
      r && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), Y(
    () => z(t),
    (r) => {
      e.setOptions({
        ...r,
        onChange: (o, c) => {
          var l;
          se(a), (l = r.onChange) == null || l.call(r, o, c);
        }
      }), e._willUpdate(), se(a);
    },
    {
      immediate: !0
    }
  ), Le(s), a;
}
function Bl(t) {
  return Dl(
    I(() => ({
      observeElementRect: Oe,
      observeElementOffset: Ml,
      scrollToFn: Rl,
      ...z(t)
    }))
  );
}
const Ul = {
  key: 0,
  class: "space-y-3"
}, Ll = { class: "space-y-3" }, Kl = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Fl = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, Nl = { class: "flex flex-col items-center" }, Wl = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, Vl = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, jl = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, ql = ["checked", "indeterminate"], Gl = ["onClick"], Hl = { class: "space-y-3" }, Ql = {
  key: 0,
  class: "flex justify-end"
}, Jl = ["checked", "aria-label", "onChange"], Zl = ["data-field"], Xl = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, Yl = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, tu = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, eu = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, au = { class: "table-header bg-gray-50 dark:bg-dark-800" }, nu = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, su = ["checked", "indeterminate", "aria-label"], ru = ["aria-sort", "onClick"], iu = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, ou = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, cu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, lu = { key: 1 }, uu = ["colspan"], du = { class: "flex flex-col items-center" }, mu = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, gu = {
  key: 0,
  "aria-hidden": "true"
}, fu = ["colspan"], pu = ["data-row-id", "data-index", "onClick"], hu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, yu = ["checked", "aria-label", "onChange"], wu = {
  key: 1,
  "aria-hidden": "true"
}, bu = ["colspan"], fe = "(min-width: 768px)", vu = /* @__PURE__ */ bt({
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
    const { t: s } = Tt(), r = P(
      typeof window > "u" ? !0 : window.matchMedia(fe).matches
    ), o = a, c = P(null), l = P(!1), m = P(!1), C = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), _ = (i, u) => Oe(i, (d) => {
      d.height > 0 && u(d);
    }), A = () => {
      c.value && (l.value = c.value.scrollWidth > c.value.clientWidth);
    }, $ = () => {
      if (!p.expandableActions) {
        m.value = !1, B.value = !1;
        return;
      }
      if (!c.value) return;
      const i = c.value.querySelector("tbody tr:first-child td:last-child");
      if (!i) return;
      const u = i.querySelector("div");
      if (!u) return;
      const d = B.value;
      B.value = !0, it(() => {
        const x = u.querySelectorAll('button, a, [role="button"]');
        if (x.length <= 2) {
          m.value = !1, B.value = d;
          return;
        }
        let E = 0;
        x.forEach((mt, Bt) => {
          E += mt.offsetWidth, Bt < x.length - 1 && (E += 4);
        });
        const rt = i.clientWidth - 32;
        m.value = E > rt, B.value = d;
      });
    };
    let O = null, w = null, h = null, S = null;
    const R = () => {
      O == null || O.disconnect(), O = null, w && (window.removeEventListener("resize", w), w = null);
    }, L = () => {
      A(), $(), c.value && typeof ResizeObserver < "u" ? (O = new ResizeObserver(() => {
        A(), $();
      }), O.observe(c.value)) : (w = () => {
        A(), $();
      }, window.addEventListener("resize", w));
    };
    Ot(() => {
      typeof window < "u" && (h = window.matchMedia(fe), r.value = h.matches, S = (i) => {
        r.value = i.matches;
      }, typeof h.addEventListener == "function" ? h.addEventListener("change", S) : h.addListener(S));
    }), Vt(() => {
      R(), h && S && (typeof h.removeEventListener == "function" ? h.removeEventListener("change", S) : h.removeListener(S), S = null), h = null;
    });
    const p = t, M = P(""), K = P("asc"), B = P(!1), q = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), F = () => {
      const i = /* @__PURE__ */ new Set();
      for (const u of p.columns)
        u.sortable && i.add(u.key);
      return i;
    }, j = (i) => i && F().has(i) ? i : "", G = (i) => i === "desc" ? "desc" : "asc", W = () => {
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
      const i = W();
      if (i) return i;
      const u = j(p.defaultSortKey || "");
      return u ? { key: u, order: G(p.defaultSortOrder) } : null;
    }, st = (i) => {
      i && (M.value = i.key, K.value = i.order);
    }, ft = (i, u) => M.value === i && K.value === u ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", Rt = (i) => M.value !== i ? "none" : K.value === "asc" ? "ascending" : "descending", zt = (i) => {
      const u = i.class || "";
      return u.includes("text-center") ? "justify-center" : u.includes("text-right") ? "justify-end" : "justify-start";
    }, ot = (i) => i == null || i === "", ct = (i) => {
      if (typeof i == "number") return Number.isFinite(i) ? i : null;
      if (typeof i == "boolean") return i ? 1 : 0;
      if (typeof i == "string") {
        const u = i.trim();
        if (!u) return null;
        const d = Number(u);
        return Number.isFinite(d) ? d : null;
      }
      return null;
    }, vt = (i) => {
      if (i == null) return "";
      if (typeof i == "string") return i;
      if (typeof i == "number" || typeof i == "boolean") return String(i);
      if (i instanceof Date) return i.toISOString();
      try {
        return JSON.stringify(i);
      } catch {
        return String(i);
      }
    }, kt = (i, u) => {
      const d = ot(i), x = ot(u);
      if (d && x) return 0;
      if (d) return 1;
      if (x) return -1;
      const E = ct(i), rt = ct(u);
      if (E !== null && rt !== null)
        return E === rt ? 0 : E < rt ? -1 : 1;
      const mt = vt(i), Bt = vt(u), ne = q.compare(mt, Bt);
      return ne === 0 ? 0 : ne < 0 ? -1 : 1;
    }, pt = (i) => typeof p.rowKey == "function" ? p.rowKey(i) ?? void 0 : typeof p.rowKey == "string" && p.rowKey ? (i == null ? void 0 : i[p.rowKey]) ?? void 0 : (i == null ? void 0 : i.id) ?? void 0, Z = (i, u) => pt(i) ?? u, St = I(() => p.columns.filter((i) => i.key !== "actions")), ht = I(
      () => p.columns.map((i) => `${i.key}:${i.sortable ? "1" : "0"}`).join("|")
    );
    Y(
      r,
      async (i) => {
        R(), i && (await it(), L());
      },
      { immediate: !0, flush: "post" }
    ), Y(
      [() => p.data.length, ht],
      async () => {
        await it(), A(), $();
      },
      { flush: "post" }
    ), Y(B, async () => {
      await it(), A();
    });
    const xt = (i) => {
      let u = "asc";
      M.value === i && (u = K.value === "asc" ? "desc" : "asc"), p.serverSideSort ? (M.value = i, K.value = u, o("sort", i, u)) : (M.value = i, K.value = u);
    }, g = I(() => {
      if (p.serverSideSort || !M.value || !p.data) return p.data;
      const i = M.value, u = K.value;
      return p.data.map((d, x) => ({ row: d, index: x })).sort((d, x) => {
        var rt, mt;
        const E = kt((rt = d.row) == null ? void 0 : rt[i], (mt = x.row) == null ? void 0 : mt[i]);
        return E !== 0 ? u === "asc" ? E : -E : d.index - x.index;
      }).map((d) => d.row);
    }), y = I(() => p.columns.length + (p.selectable ? 1 : 0)), b = I(() => new Set(p.selectedKeys)), U = I(
      () => (g.value ?? []).map((i, u) => Z(i, u))
    ), at = I(
      () => U.value.length > 0 && U.value.every((i) => b.value.has(i))
    ), $t = I(() => at.value ? !1 : U.value.some((i) => b.value.has(i))), ut = (i) => {
      const u = Array.from(i);
      o("update:selectedKeys", u), o("selectionChange", u);
    }, Ct = (i, u) => b.value.has(Z(i, u)), Qt = (i, u) => typeof p.selectionLabel == "function" ? p.selectionLabel(i) : p.selectionLabel ? p.selectionLabel : `${s("common.selectOption")} ${Z(i, u)}`, Jt = (i, u, d) => {
      const x = new Set(p.selectedKeys), E = Z(i, u);
      d ? x.add(E) : x.delete(E), ut(x);
    }, Zt = (i) => {
      const u = new Set(p.selectedKeys);
      for (const d of U.value)
        i ? u.add(d) : u.delete(d);
      ut(u);
    }, Pt = I(
      () => {
        var i;
        return r.value && (((i = g.value) == null ? void 0 : i.length) ?? 0) > (p.virtualizeThreshold ?? 100);
      }
    ), dt = Bl(I(() => {
      var i;
      return {
        count: Pt.value ? ((i = g.value) == null ? void 0 : i.length) ?? 0 : 0,
        getScrollElement: () => c.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (u) => {
          var x;
          const d = (x = g.value) == null ? void 0 : x[u];
          return d != null ? Z(d, u) : u;
        },
        estimateSize: () => p.estimateRowHeight ?? 56,
        overscan: p.overscan ?? 5,
        // 兜底高度:首个有效高度读数到来前,先按一屏渲染,避免空白帧
        initialRect: { width: 0, height: C() },
        // 关键:过滤 0 高度读数,杜绝 scrollRect 被钉成 0 → calculateRange 返回 null → 整表空白
        observeElementRect: _,
        // 把测量类 ResizeObserver 回调批到 rAF,避免滚动中同步 reflow 风暴导致的校正抖动/空白
        useAnimationFrameWithResizeObserver: !0
      };
    })), Dt = I(() => dt.value.getVirtualItems()), Xt = I(() => {
      const i = Dt.value;
      return i.length > 0 ? i[0].start : 0;
    }), Yt = I(() => {
      const i = Dt.value;
      return i.length === 0 ? 0 : dt.value.getTotalSize() - i[i.length - 1].end;
    }), Me = (i) => {
      i && dt.value.measureElement(i);
    }, Te = I(
      () => (g.value ?? []).map((i) => {
        const u = pt(i);
        return u !== void 0 ? u : i !== null && typeof i == "object" ? i : Symbol("unstable-row");
      })
    ), Re = (i, u) => {
      if (i.length !== u.length) return !1;
      const d = new Set(i), x = new Set(u);
      return d.size !== i.length || x.size !== u.length ? !1 : [...d].every((E) => x.has(E));
    };
    Y(
      Te,
      (i, u) => {
        Re(i, u) || (dt.value.measureElement(null), dt.value.measure());
      },
      { flush: "post" }
    );
    const ze = I(() => {
      const i = g.value ?? [];
      return Pt.value ? Dt.value.map((u) => ({ index: u.index, row: i[u.index], measure: !0 })) : i.map((u, d) => ({ index: d, row: u, measure: !1 }));
    }), te = I(() => p.columns.some((i) => i.key === "actions")), Pe = I(() => p.columns.length > 0 && p.columns[0].key === "select"), ee = (i, u) => {
      const d = [];
      return p.stickyFirstColumn && (Pe.value ? u === 0 ? d.push("sticky-col sticky-col-left-first") : u === 1 && d.push("sticky-col sticky-col-left-second") : u === 0 && d.push("sticky-col sticky-col-left")), p.stickyActionsColumn && i.key === "actions" && d.push("sticky-col sticky-col-right"), d.join(" ");
    }, _t = () => {
      const i = p.columns.length;
      return i >= 10 ? "px-2" : i >= 7 ? "px-3" : i >= 5 ? "px-4" : "px-6";
    }, ae = P(!1);
    return Ot(() => {
      const i = V();
      st(i), ae.value = !0;
    }), Y(
      ht,
      () => {
        const i = j(M.value);
        if (!M.value) {
          const u = V();
          st(u);
          return;
        }
        if (!i) {
          const u = V();
          u ? st(u) : (M.value = "", K.value = "asc");
        }
      },
      { flush: "post" }
    ), Y(
      [M, K],
      ([i, u]) => {
        if (!ae.value || !p.sortStorageKey) return;
        const d = j(i);
        d && H({ key: d, order: G(u) });
      },
      { flush: "post" }
    ), e({
      virtualizer: dt,
      shouldVirtualize: Pt,
      sortedData: g,
      resolveRowKey: Z,
      tableWrapperEl: c
    }), (i, u) => r.value ? (v(), k("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: c,
      class: N(["table-wrapper", {
        "actions-expanded": B.value,
        "is-scrollable": l.value
      }])
    }, [
      f("table", eu, [
        f("thead", au, [
          f("tr", null, [
            t.selectable ? (v(), k("th", nu, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: at.value,
                indeterminate: $t.value,
                "aria-label": z(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: u[2] || (u[2] = (d) => Zt(d.target.checked))
              }, null, 40, su)
            ])) : D("", !0),
            (v(!0), k(Q, null, X(t.columns, (d, x) => (v(), k("th", {
              key: d.key,
              scope: "col",
              "aria-sort": d.sortable ? Rt(d.key) : void 0,
              class: N([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                _t(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": d.sortable },
                ee(d, x),
                d.class
              ]),
              onClick: (E) => d.sortable && xt(d.key)
            }, [
              f("div", {
                class: N(["flex items-center space-x-1", zt(d)])
              }, [
                tt(i.$slots, `header-${d.key}`, {
                  column: d,
                  sortKey: M.value,
                  sortOrder: K.value
                }, () => [
                  f("span", null, T(d.label), 1)
                ], !0),
                d.sortable ? (v(), k("span", iu, [
                  (v(), k("svg", {
                    class: N(["h-2.5 w-2.5", ft(d.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[6] || (u[6] = [
                    f("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (v(), k("svg", {
                    class: N(["-mt-0.5 h-2.5 w-2.5", ft(d.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[7] || (u[7] = [
                    f("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : D("", !0)
              ], 2)
            ], 10, ru))), 128))
          ])
        ]),
        f("tbody", ou, [
          t.loading ? (v(), k(Q, { key: 0 }, X(5, (d) => f("tr", { key: d }, [
            t.selectable ? (v(), k("td", cu, [...u[8] || (u[8] = [
              f("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : D("", !0),
            (v(!0), k(Q, null, X(t.columns, (x) => (v(), k("td", {
              key: x.key,
              class: N(["whitespace-nowrap py-4", _t()])
            }, [...u[9] || (u[9] = [
              f("div", { class: "animate-pulse" }, [
                f("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !t.data || t.data.length === 0 ? (v(), k("tr", lu, [
            f("td", {
              colspan: y.value,
              class: N(["py-12 text-center text-gray-500 dark:text-dark-400", _t()])
            }, [
              tt(i.$slots, "empty", {}, () => [
                f("div", du, [
                  et(nt, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  f("p", mu, T(z(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, uu)
          ])) : (v(), k(Q, { key: 2 }, [
            Xt.value > 0 ? (v(), k("tr", gu, [
              f("td", {
                colspan: y.value,
                style: Et({ height: Xt.value + "px", padding: 0, border: "none" })
              }, null, 12, fu)
            ])) : D("", !0),
            (v(!0), k(Q, null, X(ze.value, (d) => (v(), k("tr", {
              key: Z(d.row, d.index),
              "data-row-id": Z(d.row, d.index),
              "data-index": d.index,
              ref_for: !0,
              ref: d.measure ? Me : void 0,
              class: N(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": t.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": t.selectable && Ct(d.row, d.index)
              }]),
              onClick: (x) => t.clickableRows && o("rowClick", d.row)
            }, [
              t.selectable ? (v(), k("td", hu, [
                f("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: Ct(d.row, d.index),
                  "aria-label": Qt(d.row, d.index),
                  "data-test": "select-row",
                  onClick: u[3] || (u[3] = J(() => {
                  }, ["stop"])),
                  onChange: (x) => Jt(d.row, d.index, x.target.checked)
                }, null, 40, yu)
              ])) : D("", !0),
              (v(!0), k(Q, null, X(t.columns, (x, E) => (v(), k("td", {
                key: x.key,
                class: N([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  _t(),
                  ee(x, E),
                  x.class
                ])
              }, [
                tt(i.$slots, `cell-${x.key}`, {
                  row: d.row,
                  value: d.row[x.key],
                  expanded: B.value
                }, () => [
                  lt(T(x.formatter ? x.formatter(d.row[x.key], d.row) : d.row[x.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, pu))), 128)),
            Yt.value > 0 ? (v(), k("tr", wu, [
              f("td", {
                colspan: y.value,
                style: Et({ height: Yt.value + "px", padding: 0, border: "none" })
              }, null, 12, bu)
            ])) : D("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (v(), k("div", Ul, [
      t.loading ? (v(), k(Q, { key: 0 }, X(5, (d) => f("div", {
        key: d,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        f("div", Ll, [
          (v(!0), k(Q, null, X(St.value, (x) => (v(), k("div", {
            key: x.key,
            class: "flex justify-between"
          }, [...u[4] || (u[4] = [
            f("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            f("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          te.value ? (v(), k("div", Kl, [...u[5] || (u[5] = [
            f("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : D("", !0)
        ])
      ])), 64)) : !t.data || t.data.length === 0 ? (v(), k("div", Fl, [
        tt(i.$slots, "empty", {}, () => [
          f("div", Nl, [
            et(nt, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            f("p", Wl, T(z(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (v(), k(Q, { key: 2 }, [
        t.selectable ? (v(), k("div", Vl, [
          f("label", jl, [
            f("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: at.value,
              indeterminate: $t.value,
              "data-test": "select-all-mobile",
              onChange: u[0] || (u[0] = (d) => Zt(d.target.checked))
            }, null, 40, ql),
            f("span", null, T(z(s)("common.selectAll")), 1)
          ])
        ])) : D("", !0),
        (v(!0), k(Q, null, X(g.value, (d, x) => (v(), k("div", {
          key: Z(d, x),
          class: N(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": t.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": t.selectable && Ct(d, x)
          }]),
          onClick: (E) => t.clickableRows && o("rowClick", d)
        }, [
          f("div", Hl, [
            t.selectable ? (v(), k("div", Ql, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: Ct(d, x),
                "aria-label": Qt(d, x),
                "data-test": "select-row",
                onClick: u[1] || (u[1] = J(() => {
                }, ["stop"])),
                onChange: (E) => Jt(d, x, E.target.checked)
              }, null, 40, Jl)
            ])) : D("", !0),
            (v(!0), k(Q, null, X(St.value, (E) => (v(), k("div", {
              key: E.key,
              "data-field": E.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              f("span", Xl, T(E.label), 1),
              f("div", Yl, [
                tt(i.$slots, `cell-${E.key}`, {
                  row: d,
                  value: d[E.key],
                  expanded: B.value
                }, () => [
                  lt(T(E.formatter ? E.formatter(d[E.key], d) : d[E.key]), 1)
                ], !0)
              ])
            ], 8, Zl))), 128)),
            te.value ? (v(), k("div", tu, [
              tt(i.$slots, "cell-actions", {
                row: d,
                value: d.actions,
                expanded: B.value
              }, void 0, !0)
            ])) : D("", !0)
          ])
        ], 10, Gl))), 128))
      ], 64))
    ]));
  }
}), md = /* @__PURE__ */ jt(vu, [["__scopeId", "data-v-2280f759"]]), ku = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], Su = { class: "select-value" }, xu = ["onKeydown"], $u = { class: "select-icon" }, Cu = {
  key: 0,
  class: "select-search"
}, _u = ["placeholder", "aria-label"], Iu = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], Au = {
  key: 0,
  class: "select-empty"
}, Ft = 8, Ou = 200, Eu = 300, Mu = /* @__PURE__ */ bt({
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
    const { t: a } = Tt(), s = `select-${Math.random().toString(36).substring(2, 9)}`, r = t, o = e, c = P(!1), l = P(""), m = P(-1), C = P(null), _ = P(null), A = P(null), $ = P(null), O = P(null), w = P("bottom"), h = P(null), S = I(() => r.placeholder ?? a("common.selectOption")), R = I(() => r.searchPlaceholder ?? a("common.searchPlaceholder")), L = I(() => r.emptyText ?? a("common.noOptionsFound"));
    let p = null;
    const M = I(() => r.remote ? !0 : r.searchable === "auto" ? r.options.length > 5 : r.searchable), K = I(() => {
      if (!h.value) return {};
      const g = h.value, y = Math.max(Ft, window.innerWidth - Ft), b = Math.min(
        Math.max(Ft, g.left),
        y
      ), U = Math.max(0, y - b), at = Math.max(Ou, g.width), $t = Math.min(at, U), ut = {
        position: "fixed",
        left: `${b}px`,
        minWidth: `${$t}px`,
        maxWidth: `${U}px`,
        zIndex: "100000020"
      };
      return w.value === "top" ? ut.bottom = `${window.innerHeight - g.top + 4}px` : ut.top = `${g.bottom + 4}px`, ut;
    }), B = (g) => typeof g == "object" && g !== null ? g[r.valueKey] : g, q = (g) => String(typeof g == "object" && g !== null ? g[r.labelKey] ?? "" : g ?? ""), F = (g) => typeof g == "object" && g !== null ? !!g.disabled : !1, j = (g) => typeof g == "object" && g !== null ? g.kind === "group" : !1, G = I(() => r.options.find((g) => B(g) === r.modelValue) || null), W = I(() => G.value ? q(G.value) : r.creatable && r.modelValue ? String(r.modelValue) : S.value), H = I(
      () => r.modelValue !== null && r.modelValue !== void 0 && r.modelValue !== ""
    ), V = I(() => {
      let g = r.options;
      if (M.value && l.value && !r.remote) {
        const y = l.value.toLowerCase();
        if (g = g.filter((b) => !!(q(b).toLowerCase().includes(y) || b.description && String(b.description).toLowerCase().includes(y))), r.creatable && l.value.trim()) {
          const b = l.value.trim(), U = r.creatablePrefix || a("common.search");
          g = [{ [r.valueKey]: b, [r.labelKey]: `${U} "${b}"`, _creatable: !0 }, ...g];
        }
      }
      return g;
    }), st = (g) => B(g) === r.modelValue, ft = (g) => {
      const y = V.value;
      if (y.length === 0) return -1;
      for (let b = 0; b < y.length; b++) {
        const U = (g + b) % y.length;
        if (!F(y[U])) return U;
      }
      return -1;
    }, Rt = (g) => {
      const y = V.value;
      if (y.length === 0) return -1;
      for (let b = 0; b < y.length; b++) {
        const U = (g - b + y.length) % y.length;
        if (!F(y[U])) return U;
      }
      return -1;
    }, zt = (g, y) => {
      F(g) || j(g) || (m.value = y);
    }, ot = () => {
      C.value && (h.value = C.value.getBoundingClientRect());
    }, ct = () => {
      C.value && (ot(), it(() => {
        if (!$.value || !h.value) return;
        const g = $.value.offsetHeight || 240, y = window.innerHeight - h.value.bottom, b = h.value.top;
        y < g && b > g ? w.value = "top" : w.value = "bottom";
      }));
    }, vt = () => {
      r.disabled || (c.value = !c.value);
    };
    Y(c, (g) => {
      if (g) {
        if (ct(), V.value.length === 0)
          m.value = -1;
        else {
          const y = V.value.findIndex(st), b = y >= 0 ? y : 0;
          m.value = F(V.value[b]) ? ft(b + 1) : b;
        }
        M.value && it(() => {
          var y;
          return (y = A.value) == null ? void 0 : y.focus();
        }), window.addEventListener("scroll", ot, { capture: !0, passive: !0 }), window.addEventListener("resize", ct);
      } else
        l.value = "", m.value = -1, p && (clearTimeout(p), p = null), window.removeEventListener("scroll", ot, { capture: !0 }), window.removeEventListener("resize", ct);
    }), Y(l, (g) => {
      !r.remote || !c.value || (p && clearTimeout(p), p = setTimeout(() => {
        p = null, o("search", g.trim());
      }, Eu));
    });
    const kt = (g) => {
      var b;
      const y = B(g) ?? null;
      o("update:modelValue", y), o("change", y, g), c.value = !1, (b = _.value) == null || b.focus();
    }, pt = () => {
      r.disabled || (o("update:modelValue", null), o("change", null, null));
    }, Z = () => {
      c.value || (c.value = !0);
    }, St = (g) => {
      var y;
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), m.value = ft(m.value + 1), m.value >= 0 && ht();
          break;
        case "ArrowUp":
          g.preventDefault(), m.value = Rt(m.value - 1), m.value >= 0 && ht();
          break;
        case "Enter":
          if (g.preventDefault(), m.value >= 0 && m.value < V.value.length) {
            const b = V.value[m.value];
            F(b) || kt(b);
          }
          break;
        case "Escape":
          g.preventDefault(), c.value = !1, (y = _.value) == null || y.focus();
          break;
        case "Tab":
          c.value = !1;
          break;
      }
    }, ht = () => {
      it(() => {
        const g = O.value;
        if (!g) return;
        const y = g.children[m.value];
        y && (y.offsetTop < g.scrollTop ? g.scrollTop = y.offsetTop : y.offsetTop + y.offsetHeight > g.scrollTop + g.offsetHeight && (g.scrollTop = y.offsetTop + y.offsetHeight - g.offsetHeight));
      });
    }, xt = (g) => {
      var at;
      const y = g.target, b = !!y.closest(`.${s}`), U = (at = C.value) == null ? void 0 : at.contains(y);
      !b && !U && c.value && (c.value = !1);
    };
    return Ot(() => {
      document.addEventListener("click", xt);
    }), Vt(() => {
      document.removeEventListener("click", xt), window.removeEventListener("scroll", ot, { capture: !0 }), window.removeEventListener("resize", ct), p && (clearTimeout(p), p = null);
    }), (g, y) => (v(), k("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: C
    }, [
      f("button", {
        ref_key: "triggerRef",
        ref: _,
        type: "button",
        onClick: vt,
        disabled: t.disabled,
        "aria-expanded": c.value,
        "aria-haspopup": !0,
        id: t.id,
        "aria-label": t.ariaLabel ?? "Select option",
        "aria-describedby": t.ariaDescribedby,
        class: N([
          "select-trigger",
          "console-skin-select-trigger",
          c.value && "select-trigger-open",
          t.error && "select-trigger-error",
          t.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          It(J(Z, ["prevent"]), ["down"]),
          It(J(Z, ["prevent"]), ["up"])
        ]
      }, [
        f("span", Su, [
          tt(g.$slots, "selected", { option: G.value }, () => [
            lt(T(W.value), 1)
          ], !0)
        ]),
        t.clearable && H.value && !t.disabled ? (v(), k("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: J(pt, ["stop"]),
          onMousedown: y[0] || (y[0] = J(() => {
          }, ["stop"])),
          onKeydown: It(J(pt, ["stop", "prevent"]), ["enter"])
        }, [
          et(nt, {
            name: "x",
            size: "sm"
          })
        ], 40, xu)) : D("", !0),
        f("span", $u, [
          et(nt, {
            name: "chevronDown",
            size: "md",
            class: N(["transition-transform duration-200", c.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, ku),
      (v(), yt(pe, { to: "body" }, [
        et(he, { name: "select-dropdown" }, {
          default: Mt(() => [
            c.value ? (v(), k("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: $,
              class: N(["select-dropdown-portal console-skin-select-menu", [s]]),
              style: Et(K.value),
              role: "listbox",
              onClick: y[3] || (y[3] = J(() => {
              }, ["stop"])),
              onMousedown: y[4] || (y[4] = J(() => {
              }, ["stop"])),
              onKeydown: St
            }, [
              M.value ? (v(), k("div", Cu, [
                et(nt, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                ye(f("input", {
                  ref_key: "searchInputRef",
                  ref: A,
                  "onUpdate:modelValue": y[1] || (y[1] = (b) => l.value = b),
                  type: "text",
                  placeholder: R.value,
                  "aria-label": R.value,
                  class: "select-search-input",
                  onClick: y[2] || (y[2] = J(() => {
                  }, ["stop"]))
                }, null, 8, _u), [
                  [we, l.value]
                ])
              ])) : D("", !0),
              f("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: O
              }, [
                (v(!0), k(Q, null, X(V.value, (b, U) => (v(), k("div", {
                  key: `${typeof B(b)}:${String(B(b) ?? "")}`,
                  role: "option",
                  "aria-selected": st(b),
                  "aria-disabled": F(b),
                  onClick: J((at) => !F(b) && kt(b), ["stop"]),
                  onMouseenter: (at) => zt(b, U),
                  class: N([
                    "select-option",
                    j(b) && "select-option-group",
                    st(b) && "select-option-selected",
                    F(b) && !j(b) && "select-option-disabled",
                    m.value === U && !j(b) && "select-option-focused"
                  ])
                }, [
                  tt(g.$slots, "option", {
                    option: b,
                    selected: st(b)
                  }, () => [
                    b._creatable ? (v(), yt(nt, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : D("", !0),
                    f("span", {
                      class: N(["select-option-label", b._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, T(q(b)), 3),
                    st(b) ? (v(), yt(nt, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : D("", !0)
                  ], !0)
                ], 42, Iu))), 128)),
                V.value.length === 0 ? (v(), k("div", Au, T(r.loading ? z(a)("common.loading") : L.value), 1)) : D("", !0)
              ], 512)
            ], 38)) : D("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Tu = /* @__PURE__ */ jt(Mu, [["__scopeId", "data-v-fbc717eb"]]), Ru = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, zu = { class: "flex flex-1 items-center justify-between sm:hidden" }, Pu = ["disabled"], Du = { class: "text-sm text-gray-700 dark:text-gray-300" }, Bu = ["disabled"], Uu = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Lu = { class: "flex items-center space-x-4" }, Ku = { class: "text-sm text-gray-700 dark:text-gray-300" }, Fu = { class: "font-medium" }, Nu = { class: "font-medium" }, Wu = { class: "font-medium" }, Vu = {
  key: 0,
  class: "flex items-center space-x-2"
}, ju = { class: "text-sm text-gray-700 dark:text-gray-300" }, qu = { class: "page-size-select w-20" }, Gu = {
  key: 1,
  class: "flex items-center space-x-2"
}, Hu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Qu = ["max", "placeholder"], Ju = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, Zu = ["disabled", "aria-label"], Xu = ["onClick", "disabled", "aria-label", "aria-current"], Yu = ["disabled", "aria-label"], td = /* @__PURE__ */ bt({
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
    const { t: a } = Tt(), s = t, r = e, o = I(() => Math.ceil(s.total / s.pageSize)), c = I(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), l = I(() => {
      const w = s.page * s.pageSize;
      return w > s.total ? s.total : w;
    }), m = I(() => Array.from(
      /* @__PURE__ */ new Set([
        ...Wt(),
        wt(s.pageSize)
      ])
    ).sort((h, S) => h - S).map((h) => ({
      value: h,
      label: String(h)
    }))), C = P(""), _ = I(() => {
      const w = [], S = o.value;
      if (S <= 7)
        for (let R = 1; R <= S; R++)
          w.push(R);
      else {
        w.push(1);
        const R = Math.max(2, s.page - 2), L = Math.min(S - 1, s.page + 2);
        R > 2 && w.push("...");
        for (let p = R; p <= L; p++)
          w.push(p);
        L < S - 1 && w.push("..."), w.push(S);
      }
      return w;
    }), A = (w) => {
      w >= 1 && w <= o.value && w !== s.page && r("update:page", w);
    }, $ = (w) => {
      if (w === null || typeof w == "boolean") return;
      const h = wt(typeof w == "string" ? parseInt(w, 10) : w);
      _l(h), r("update:pageSize", h);
    }, O = () => {
      const w = C.value.trim();
      if (!w) return;
      const h = Number.parseInt(w, 10);
      if (Number.isNaN(h)) return;
      const S = Math.min(Math.max(h, 1), o.value);
      C.value = "", A(S);
    };
    return (w, h) => (v(), k("div", Ru, [
      f("div", zu, [
        f("button", {
          onClick: h[0] || (h[0] = (S) => A(t.page - 1)),
          disabled: t.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(z(a)("pagination.previous")), 9, Pu),
        f("span", Du, T(z(a)("pagination.pageOf", { page: t.page, total: o.value })), 1),
        f("button", {
          onClick: h[1] || (h[1] = (S) => A(t.page + 1)),
          disabled: t.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(z(a)("pagination.next")), 9, Bu)
      ]),
      f("div", Uu, [
        f("div", Lu, [
          f("p", Ku, [
            lt(T(z(a)("pagination.showing")) + " ", 1),
            f("span", Fu, T(c.value), 1),
            lt(" " + T(z(a)("pagination.to")) + " ", 1),
            f("span", Nu, T(l.value), 1),
            lt(" " + T(z(a)("pagination.of")) + " ", 1),
            f("span", Wu, T(t.total), 1),
            lt(" " + T(z(a)("pagination.results")), 1)
          ]),
          t.showPageSizeSelector ? (v(), k("div", Vu, [
            f("span", ju, T(z(a)("pagination.perPage")) + ":", 1),
            f("div", qu, [
              et(Tu, {
                "model-value": t.pageSize,
                options: m.value,
                "onUpdate:modelValue": $
              }, null, 8, ["model-value", "options"])
            ])
          ])) : D("", !0),
          t.showJump ? (v(), k("div", Gu, [
            f("span", Hu, T(z(a)("pagination.jumpTo")), 1),
            ye(f("input", {
              "onUpdate:modelValue": h[2] || (h[2] = (S) => C.value = S),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: z(a)("pagination.jumpPlaceholder"),
              onKeyup: It(O, ["enter"])
            }, null, 40, Qu), [
              [we, C.value]
            ]),
            f("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: O
            }, T(z(a)("pagination.jumpAction")), 1)
          ])) : D("", !0)
        ]),
        f("nav", Ju, [
          f("button", {
            onClick: h[3] || (h[3] = (S) => A(t.page - 1)),
            disabled: t.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": z(a)("pagination.previous")
          }, [
            et(nt, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, Zu),
          (v(!0), k(Q, null, X(_.value, (S, R) => (v(), k("button", {
            key: `${S}-${R}`,
            onClick: (L) => typeof S == "number" && A(S),
            disabled: typeof S != "number",
            class: N([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              S === t.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof S != "number" && "cursor-default"
            ]),
            "aria-label": typeof S == "number" ? z(a)("pagination.goToPage", { page: S }) : void 0,
            "aria-current": S === t.page ? "page" : void 0
          }, T(S), 11, Xu))), 128)),
          f("button", {
            onClick: h[4] || (h[4] = (S) => A(t.page + 1)),
            disabled: t.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": z(a)("pagination.next")
          }, [
            et(nt, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, Yu)
        ])
      ])
    ]));
  }
}), gd = /* @__PURE__ */ jt(td, [["__scopeId", "data-v-8e9f9f74"]]), ed = { class: "modal-header" }, ad = {
  key: 0,
  class: "modal-footer"
}, nd = /* @__PURE__ */ bt({
  __name: "BaseDialog",
  props: {
    show: { type: Boolean },
    title: {},
    width: { default: "normal" },
    closeOnEscape: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !1 },
    showCloseButton: { type: Boolean, default: !0 },
    zIndex: { default: 50 },
    panelClass: { default: "" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    let a = 0;
    const s = `modal-title-${++a}`, r = P(null), o = P(null);
    let c = null;
    const l = t, m = e, C = I(() => l.zIndex !== 50 ? { zIndex: l.zIndex } : void 0), _ = I(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[l.width]), A = () => {
      l.closeOnClickOutside && m("close");
    }, $ = (O) => {
      l.show && l.closeOnEscape && O.key === "Escape" && m("close");
    };
    return Y(
      () => l.show,
      async (O) => {
        if (O) {
          if (c = document.activeElement, document.body.classList.add("modal-open"), await it(), o.value && (o.value.scrollTop = 0), r.value) {
            const w = r.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            w == null || w.focus();
          }
        } else
          document.body.classList.remove("modal-open"), c && typeof c.focus == "function" && c.focus(), c = null;
      },
      { immediate: !0 }
    ), Ot(() => {
      document.addEventListener("keydown", $);
    }), Vt(() => {
      document.removeEventListener("keydown", $), document.body.classList.remove("modal-open");
    }), (O, w) => (v(), yt(pe, { to: "body" }, [
      et(he, { name: "modal" }, {
        default: Mt(() => [
          t.show ? (v(), k("div", {
            key: 0,
            class: "modal-overlay",
            style: Et(C.value),
            "aria-labelledby": s,
            role: "dialog",
            "aria-modal": "true",
            onClick: J(A, ["self"])
          }, [
            f("div", {
              ref_key: "dialogRef",
              ref: r,
              class: N(["modal-content", "base-dialog-surface", "console-skin-dialog", _.value, t.panelClass]),
              onClick: w[1] || (w[1] = J(() => {
              }, ["stop"]))
            }, [
              f("div", ed, [
                f("h3", {
                  id: s,
                  class: "modal-title"
                }, T(t.title), 1),
                t.showCloseButton ? (v(), k("button", {
                  key: 0,
                  onClick: w[0] || (w[0] = (h) => m("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  et(nt, {
                    name: "x",
                    size: "md"
                  })
                ])) : D("", !0)
              ]),
              f("div", {
                ref_key: "modalBodyRef",
                ref: o,
                class: "modal-body"
              }, [
                tt(O.$slots, "default")
              ], 512),
              O.$slots.footer ? (v(), k("div", ad, [
                tt(O.$slots, "footer")
              ])) : D("", !0)
            ], 2)
          ], 4)) : D("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), sd = { class: "space-y-4" }, rd = { class: "text-sm text-gray-600 dark:text-gray-400" }, id = { class: "flex justify-end space-x-3" }, fd = /* @__PURE__ */ bt({
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
    const { t: a } = Tt(), s = t, r = I(() => s.confirmText || a("common.confirm")), o = I(() => s.cancelText || a("common.cancel")), c = e, l = () => {
      c("confirm");
    }, m = () => {
      c("cancel");
    };
    return (C, _) => (v(), yt(nd, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: m
    }, {
      footer: Mt(() => [
        f("div", id, [
          f("button", {
            onClick: m,
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 dark:focus:ring-offset-dark-800"
          }, T(o.value), 1),
          f("button", {
            onClick: l,
            type: "button",
            class: N([
              "rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800",
              t.danger ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
            ])
          }, T(r.value), 3)
        ])
      ]),
      default: Mt(() => [
        f("div", sd, [
          f("p", rd, T(t.message), 1),
          tt(C.$slots, "default")
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
  { value: "minimax", label: "MiniMax" }
], pd = [
  ...od,
  { value: "composite", label: "Composite" }
];
export {
  od as C,
  md as D,
  pd as G,
  gd as P,
  Tu as S,
  nd as _,
  Tn as a,
  ud as b,
  ts as c,
  fd as d,
  Kn as e,
  ld as f,
  dd as g,
  mo as o,
  Ln as r,
  _l as s
};
