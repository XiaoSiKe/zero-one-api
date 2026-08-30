import { a as n, a5 as Le, a6 as Be, f as ut, r as B, d as vt, c as zt, k as h, E as M, z as q, q as P, l as f, s as p, L as Tt, e as I, u as L, V as De, w as tt, a7 as ne, o as Ue, h as Rt, v as it, F as J, n as Y, H as et, _ as nt, m as T, G as Z, p as lt, D as Et, N as At, A as wt, T as pe, I as he, J as Mt, B as ye, K as we } from "./cnProviderAdminLeaf-B-djDzla.js";
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
async function wd(t) {
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
async function He(t) {
  const { data: e } = await n.get("/admin/dashboard/users-trend", {
    params: t
  });
  return e;
}
async function Ge(t) {
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
  getUserUsageTrend: He,
  getUserSpendingRanking: Ge,
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
async function fa(t, e, a) {
  const { data: s } = await n.post(
    `/admin/users/${t}/platform-quotas/reset`,
    { platform: e, window: a }
  );
  return s;
}
const ga = {
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
  resetPlatformQuotaWindow: fa
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
    `/admin/groups/${t}/models-list-candidates`,
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
const Kt = /* @__PURE__ */ new Map();
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
  let a = e ? Kt.get(e.key) ?? $a(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `group-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Kt.set(e.key, a), se(e.key, a));
  const { data: s } = await n.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return e && (Kt.delete(e.key), se(e.key, null)), s;
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
async function za(t, e, a) {
  const { data: s } = await n.put(
    `/admin/groups/${t}/composite-routes/${e}`,
    a
  );
  return s;
}
async function Ta(t, e) {
  const { data: a } = await n.delete(
    `/admin/groups/${t}/composite-routes/${e}`
  );
  return a;
}
async function Ra(t, e) {
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
async function La(t) {
  const { data: e } = await n.put("/admin/groups/sort-order", {
    updates: t
  });
  return e;
}
async function Ba(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rate-multipliers`);
  return e;
}
async function Da(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rate-multipliers`,
    { entries: e }
  );
  return a;
}
async function Ua(t) {
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
  getModelsListCandidates: va,
  create: ka,
  duplicate: Ca,
  update: ve,
  delete: _a,
  toggleStatus: Ia,
  getStats: Aa,
  getGroupApiKeys: Oa,
  listCompositeRoutes: Ea,
  createCompositeRoute: Ma,
  updateCompositeRoute: za,
  deleteCompositeRoute: Ta,
  previewCompositeRoute: Ra,
  getGroupRateMultipliers: Pa,
  clearGroupRateMultipliers: Ba,
  batchSetGroupRateMultipliers: Da,
  getGroupRPMOverrides: Ua,
  clearGroupRPMOverrides: Fa,
  batchSetGroupRPMOverrides: Ka,
  updateSortOrder: La,
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
async function Ha(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}`);
  return e;
}
async function Ga(t) {
  const { data: e } = await n.post("/admin/accounts", t);
  return e;
}
const Ft = /* @__PURE__ */ new Map();
function Vt(t) {
  return `sub2api:admin:account-duplicate:${t}`;
}
function Qa(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(Vt(t))) ?? null;
  } catch {
    return null;
  }
}
function re(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(Vt(t), e) : (s = globalThis.sessionStorage) == null || s.removeItem(Vt(t));
  } catch {
  }
}
async function Ja(t) {
  var s, r;
  let e = Ft.get(t) ?? Qa(t);
  if (!e) {
    const o = ((r = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : r.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    e = `account-duplicate-${t}-${o}`;
  }
  Ft.set(t, e), re(t, e);
  const { data: a } = await n.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": e }
  });
  return Ft.delete(t), re(t, null), a;
}
async function ke(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}`, e);
  return a;
}
async function Za(t) {
  const { data: e } = await n.post("/admin/accounts/check-mixed-channel", t);
  return e;
}
async function Xa(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}`);
  return e;
}
async function Ya(t, e) {
  return ke(t, { status: e });
}
async function tn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/test`);
  return e;
}
async function en(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/refresh`);
  return e;
}
async function an(t, e) {
  const { data: a } = await n.post(
    `/admin/accounts/${t}/apply-oauth-credentials`,
    e
  );
  return a;
}
async function nn(t, e = 30) {
  const { data: a } = await n.get(`/admin/accounts/${t}/stats`, {
    params: { days: e }
  });
  return a;
}
async function sn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/clear-error`);
  return e;
}
async function rn(t, e, a) {
  const s = {};
  e && (s.source = e), a && (s.force = "true");
  const { data: r } = await n.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return r;
}
async function on(t, e) {
  const { data: a } = await n.post("/admin/accounts/usage/batch", {
    account_ids: t,
    force: e === !0
  });
  return a;
}
async function cn(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/clear-rate-limit`
  );
  return e;
}
async function ln(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/recover-state`);
  return e;
}
async function un(t) {
  const { data: e } = await n.post(
    `/admin/accounts/${t}/reset-quota`
  );
  return e;
}
async function dn(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function mn(t) {
  const { data: e } = await n.delete(
    `/admin/accounts/${t}/temp-unschedulable`
  );
  return e;
}
async function fn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function gn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function pn(t) {
  const { data: e } = await n.post("/admin/accounts/batch", { accounts: t });
  return e;
}
async function hn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-update-credentials", t);
  return e;
}
async function yn(t, e) {
  const a = Array.isArray(t) ? {
    account_ids: t,
    ...e ?? {}
  } : t, { data: s } = await n.post("/admin/accounts/bulk-update", a);
  return s;
}
async function wn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/today-stats`);
  return e;
}
async function bn(t) {
  const { data: e } = await n.post("/admin/accounts/today-stats/batch", {
    account_ids: t
  });
  return e;
}
async function vn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/schedulable`, {
    schedulable: e
  });
  return a;
}
async function kn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/models`);
  return e;
}
async function Sn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/models/sync-upstream`);
  return e;
}
async function xn(t) {
  const { data: e } = await n.post("/admin/accounts/models/sync-upstream-preview", t);
  return e;
}
async function $n(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs/preview", t);
  return e;
}
async function Cn(t) {
  const { data: e } = await n.post("/admin/accounts/sync/crs", t, {
    timeout: 18e4
    // 180s timeout: sync refreshes each existing account's OAuth token serially
  });
  return e;
}
async function _n(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { platform: s, type: r, status: o, group: c, privacy_mode: l, search: m, sort_by: x, sort_order: _ } = t.filters;
    s && (e.platform = s), r && (e.type = r), o && (e.status = o), c && (e.group = c), l && (e.privacy_mode = l), m && (e.search = m), x && (e.sort_by = x), _ && (e.sort_order = _);
  }
  (t == null ? void 0 : t.includeProxies) === !1 && (e.include_proxies = "false");
  const { data: a } = await n.get("/admin/accounts/data", { params: e });
  return a;
}
async function In(t) {
  const { data: e } = await n.post("/admin/accounts/data", {
    data: t.data,
    skip_default_group_bind: t.skip_default_group_bind
  });
  return e;
}
async function An(t) {
  const { data: e } = await n.post("/admin/accounts/import/codex-session", t, {
    timeout: 12e4
    // 120s timeout for large session imports
  });
  return e;
}
async function On(t) {
  const { data: e } = await n.post("/admin/openai/create-from-codex-pat", t);
  return e;
}
async function En() {
  const { data: t } = await n.get(
    "/admin/accounts/antigravity/default-model-mapping"
  );
  return t;
}
async function Mn(t, e, a = "/admin/openai/refresh-token", s) {
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
async function Tn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-delete", {
    account_ids: t
  });
  return e;
}
async function Rn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-clear-error", {
    account_ids: t
  });
  return e;
}
async function Pn(t) {
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
async function Bn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/quota/refresh`
  );
  return e;
}
async function Dn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/reset-quota`,
    void 0,
    { timeout: 9e4 }
  );
  return e;
}
async function Un(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/shadow`, e);
  return a;
}
async function Kn() {
  const { data: t } = await n.get("/admin/accounts/upstream-billing-probe/settings");
  return t;
}
async function Fn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/upstream-billing-probe/settings",
    t
  );
  return e;
}
async function Nn(t, e) {
  await n.put(`/admin/accounts/${t}/upstream-billing-probe`, { enabled: e });
}
async function Wn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/upstream-billing-probe`);
  return e;
}
async function Vn(t) {
  const { data: e } = await n.post(
    "/admin/accounts/upstream-billing-probe/batch",
    { account_ids: t }
  );
  return e.results;
}
async function jn() {
  const { data: t } = await n.get("/admin/accounts/ollama-cloud-usage/settings");
  return t;
}
async function qn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/ollama-cloud-usage/settings",
    t
  );
  return e;
}
async function Hn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/ollama-cloud-usage`);
  return e;
}
async function Gn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/session`, {
    session: e
  });
  return a;
}
async function Qn(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}/ollama-cloud-usage/session`);
  return e;
}
async function Jn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/auto-refresh`, {
    enabled: e
  });
  return a;
}
async function Zn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/ollama-cloud-usage/refresh`);
  return e;
}
const Xn = {
  list: ja,
  listWithEtag: qa,
  getById: Ha,
  create: Ga,
  duplicate: Ja,
  update: ke,
  checkMixedChannelRisk: Za,
  delete: Xa,
  toggleStatus: Ya,
  testAccount: tn,
  refreshCredentials: en,
  applyOAuthCredentials: an,
  getStats: nn,
  clearError: sn,
  getUsage: rn,
  getBatchUsage: on,
  getTodayStats: wn,
  getBatchTodayStats: bn,
  clearRateLimit: cn,
  recoverState: ln,
  resetAccountQuota: un,
  getTempUnschedulableStatus: dn,
  resetTempUnschedulable: mn,
  setSchedulable: vn,
  getAvailableModels: kn,
  syncUpstreamModels: Sn,
  syncUpstreamModelsPreview: xn,
  generateAuthUrl: fn,
  exchangeCode: gn,
  refreshOpenAIToken: Mn,
  batchCreate: pn,
  batchUpdateCredentials: hn,
  bulkUpdate: yn,
  previewFromCrs: $n,
  syncFromCrs: Cn,
  exportData: _n,
  importData: In,
  importCodexSession: An,
  createOpenAICodexPAT: On,
  getAntigravityDefaultModelMapping: En,
  batchDelete: Tn,
  batchClearError: Rn,
  batchRefresh: Pn,
  setPrivacy: Ln,
  revertProxyFallback: zn,
  refreshOpenAIQuota: Bn,
  resetOpenAIQuota: Dn,
  createSparkShadow: Un,
  getUpstreamBillingProbeSettings: Kn,
  updateUpstreamBillingProbeSettings: Fn,
  setUpstreamBillingProbeEnabled: Nn,
  probeUpstreamBilling: Wn,
  probeUpstreamBillingBatch: Vn,
  getOllamaCloudUsageSettings: jn,
  updateOllamaCloudUsageSettings: qn,
  getOllamaCloudUsage: Hn,
  saveOllamaCloudUsageSession: Gn,
  deleteOllamaCloudUsageSession: Qn,
  setOllamaCloudUsageAutoRefresh: Jn,
  refreshOllamaCloudUsage: Zn
};
async function Yn(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/proxies", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function ts() {
  const { data: t } = await n.get("/admin/proxies/all");
  return t;
}
async function es() {
  const { data: t } = await n.get("/admin/proxies/all", {
    params: { with_count: "true" }
  });
  return t;
}
async function as(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}`);
  return e;
}
async function ns(t) {
  const { data: e } = await n.post("/admin/proxies", t);
  return e;
}
async function Se(t, e) {
  const { data: a } = await n.put(`/admin/proxies/${t}`, e);
  return a;
}
async function ss(t) {
  const { data: e } = await n.delete(`/admin/proxies/${t}`);
  return e;
}
async function rs(t, e) {
  return Se(t, { status: e });
}
async function is(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/test`);
  return e;
}
async function os(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/quality-check`);
  return e;
}
async function cs(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/stats`);
  return e;
}
async function ls(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/accounts`);
  return e;
}
async function us(t) {
  const { data: e } = await n.post("/admin/proxies/batch", { proxies: t });
  return e;
}
async function ds(t) {
  const { data: e } = await n.post("/admin/proxies/batch-delete", { ids: t });
  return e;
}
async function ms(t) {
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
async function fs(t) {
  const { data: e } = await n.post("/admin/proxies/data", t);
  return e;
}
const gs = {
  list: Yn,
  getAll: ts,
  getAllWithCount: es,
  getById: as,
  create: ns,
  update: Se,
  delete: ss,
  toggleStatus: rs,
  testProxy: is,
  checkProxyQuality: os,
  getStats: cs,
  getProxyAccounts: ls,
  batchCreate: us,
  batchDelete: ds,
  exportData: ms,
  importData: fs
};
async function ps(t = 1, e = 20, a, s) {
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
async function hs(t) {
  const { data: e } = await n.get(`/admin/redeem-codes/${t}`);
  return e;
}
async function ys(t, e, a, s, r, o, c, l) {
  const m = {
    count: t,
    type: e,
    value: a
  };
  e === "subscription" && (m.group_id = s, r && r > 0 && (m.validity_days = r)), e === "mystery_box" && (m.min_value = c, m.max_value = l), o && o > 0 && (m.expires_in_days = o);
  const { data: x } = await n.post("/admin/redeem-codes/generate", m);
  return x;
}
async function ws(t) {
  const { data: e } = await n.delete(`/admin/redeem-codes/${t}`);
  return e;
}
async function bs(t) {
  const { data: e } = await n.post("/admin/redeem-codes/batch-delete", { ids: t });
  return e;
}
async function vs(t, e) {
  const { data: a } = await n.post("/admin/redeem-codes/batch-update", { ids: t, fields: e });
  return a;
}
async function ks(t) {
  const { data: e } = await n.post(`/admin/redeem-codes/${t}/expire`);
  return e;
}
async function Ss() {
  const { data: t } = await n.get("/admin/redeem-codes/stats");
  return t;
}
async function xs(t) {
  return (await n.get("/admin/redeem-codes/export", {
    params: t,
    responseType: "blob"
  })).data;
}
const $s = {
  list: ps,
  getById: hs,
  generate: ys,
  delete: ws,
  batchDelete: bs,
  batchUpdate: vs,
  expire: ks,
  getStats: Ss,
  exportCodes: xs
};
async function Cs(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/promo-codes", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function _s(t) {
  const { data: e } = await n.get(`/admin/promo-codes/${t}`);
  return e;
}
async function Is(t) {
  const { data: e } = await n.post("/admin/promo-codes", t);
  return e;
}
async function As(t, e) {
  const { data: a } = await n.put(`/admin/promo-codes/${t}`, e);
  return a;
}
async function Os(t) {
  const { data: e } = await n.delete(`/admin/promo-codes/${t}`);
  return e;
}
async function Es(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/promo-codes/${t}/usages`,
    { params: { page: e, page_size: a } }
  );
  return s;
}
const Ms = {
  list: Cs,
  getById: _s,
  create: Is,
  update: As,
  delete: Os,
  getUsages: Es
};
async function zs(t = 1, e = 20, a, s) {
  const { data: r } = await n.get("/admin/announcements", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return r;
}
async function Ts(t) {
  const { data: e } = await n.get(`/admin/announcements/${t}`);
  return e;
}
async function Rs(t) {
  const { data: e } = await n.post("/admin/announcements", t);
  return e;
}
async function Ps(t, e) {
  const { data: a } = await n.put(`/admin/announcements/${t}`, e);
  return a;
}
async function Ls(t) {
  const { data: e } = await n.delete(`/admin/announcements/${t}`);
  return e;
}
async function Bs(t, e = 1, a = 20, s, r) {
  const { data: o } = await n.get(
    `/admin/announcements/${t}/read-status`,
    {
      params: { page: e, page_size: a, ...s },
      signal: r == null ? void 0 : r.signal
    }
  );
  return o;
}
const Ds = {
  list: zs,
  getById: Ts,
  create: Rs,
  update: Ps,
  delete: Ls,
  getReadStatus: Bs
};
async function Us() {
  const { data: t } = await n.get("/admin/settings");
  return t;
}
async function Ks() {
  const { data: t } = await n.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return t;
}
async function Fs(t) {
  const { data: e } = await n.put(
    "/admin/settings",
    t
  );
  return e;
}
async function Ns(t) {
  const { data: e } = await n.post(
    "/admin/settings/test-smtp",
    t
  );
  return e;
}
async function Ws(t) {
  const { data: e } = await n.post(
    "/admin/settings/send-test-email",
    t
  );
  return e;
}
async function Vs() {
  const { data: t } = await n.get(
    "/admin/settings/email-templates"
  );
  return t;
}
async function js(t, e) {
  const { data: a } = await n.get(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`
  );
  return a;
}
async function qs(t, e, a) {
  const { data: s } = await n.put(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}`,
    a
  );
  return s;
}
async function Hs(t, e) {
  const { data: a } = await n.post(
    `/admin/settings/email-templates/${encodeURIComponent(t)}/${encodeURIComponent(e)}/restore-official`
  );
  return a;
}
async function Gs(t) {
  const { data: e } = await n.post(
    "/admin/settings/email-template-preview",
    t
  );
  return e;
}
async function Qs() {
  const { data: t } = await n.get(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Js() {
  const { data: t } = await n.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return t;
}
async function Zs() {
  const { data: t } = await n.delete(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Xs() {
  const { data: t } = await n.get(
    "/admin/settings/overload-cooldown"
  );
  return t;
}
async function Ys(t) {
  const { data: e } = await n.put(
    "/admin/settings/overload-cooldown",
    t
  );
  return e;
}
async function tr() {
  const { data: t } = await n.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function er(t) {
  const { data: e } = await n.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return e;
}
async function ar() {
  const { data: t } = await n.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function nr(t) {
  const { data: e } = await n.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return e;
}
async function sr() {
  const { data: t } = await n.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function rr(t) {
  const { data: e } = await n.put(
    "/admin/settings/stream-timeout",
    t
  );
  return e;
}
async function ir() {
  const { data: t } = await n.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function or(t) {
  const { data: e } = await n.put(
    "/admin/settings/rectifier",
    t
  );
  return e;
}
async function cr() {
  const { data: t } = await n.get(
    "/admin/settings/beta-policy"
  );
  return t;
}
async function lr(t) {
  const { data: e } = await n.put(
    "/admin/settings/beta-policy",
    t
  );
  return e;
}
async function ur() {
  const { data: t } = await n.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function dr(t) {
  const { data: e } = await n.put(
    "/admin/settings/web-search-emulation",
    t
  );
  return e;
}
async function mr(t) {
  const { data: e } = await n.post(
    "/admin/settings/web-search-emulation/test",
    { query: t }
  );
  return e;
}
async function fr(t) {
  await n.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const gr = {
  getSettings: Us,
  getNavigationSettings: Ks,
  updateSettings: Fs,
  testSmtpConnection: Ns,
  sendTestEmail: Ws,
  getEmailTemplates: Vs,
  getEmailTemplate: js,
  updateEmailTemplate: qs,
  restoreOfficialEmailTemplate: Hs,
  previewEmailTemplate: Gs,
  getAdminApiKey: Qs,
  regenerateAdminApiKey: Js,
  deleteAdminApiKey: Zs,
  getOverloadCooldownSettings: Xs,
  updateOverloadCooldownSettings: Ys,
  getRateLimit429CooldownSettings: tr,
  updateRateLimit429CooldownSettings: er,
  getPanelRateLimitSettings: ar,
  updatePanelRateLimitSettings: nr,
  getStreamTimeoutSettings: sr,
  updateStreamTimeoutSettings: rr,
  getRectifierSettings: ir,
  updateRectifierSettings: or,
  getBetaPolicySettings: cr,
  updateBetaPolicySettings: lr,
  getWebSearchEmulationConfig: ur,
  updateWebSearchEmulationConfig: dr,
  testWebSearchEmulation: mr,
  resetWebSearchUsage: fr
};
async function pr(t = 1, e = 20, a, s) {
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
async function hr(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}`);
  return e;
}
async function yr(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}/progress`);
  return e;
}
async function wr(t) {
  const { data: e } = await n.post("/admin/subscriptions/assign", t);
  return e;
}
async function br(t) {
  const { data: e } = await n.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return e;
}
async function vr(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/extend`,
    e
  );
  return a;
}
async function kr(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/revoke`);
  return e;
}
async function Sr(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/restore`);
  return e;
}
async function xr(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/reset-quota`,
    e
  );
  return a;
}
async function $r(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
async function Cr(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
const _r = {
  list: pr,
  getById: hr,
  getProgress: yr,
  assign: wr,
  bulkAssign: br,
  extend: vr,
  revoke: kr,
  restore: Sr,
  resetQuota: xr,
  listByGroup: $r,
  listByUser: Cr
};
async function Ir(t, e) {
  const { data: a } = await n.get("/admin/usage", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Ar(t) {
  const { data: e } = await n.get("/admin/usage/stats", {
    params: t
  });
  return e;
}
async function Or(t) {
  const { data: e } = await n.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return e;
}
async function Er(t, e) {
  const a = {};
  t !== void 0 && (a.user_id = t), e && (a.q = e);
  const { data: s } = await n.get("/admin/usage/search-api-keys", {
    params: a
  });
  return s;
}
async function Mr(t, e) {
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
async function Tr(t) {
  const { data: e } = await n.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return e;
}
const Rr = {
  list: Ir,
  getStats: Ar,
  searchUsers: Or,
  searchApiKeys: Er,
  listCleanupTasks: Mr,
  createCleanupTask: zr,
  cancelCleanupTask: Tr
};
async function Pr(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return e;
}
async function Lr(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return e;
}
async function Br() {
  const { data: t } = await n.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Dr = { generateAuthUrl: Pr, exchangeCode: Lr, getCapabilities: Br };
async function Ur(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return e;
}
async function Kr(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return e;
}
async function Fr(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/antigravity/oauth/refresh-token",
    a
  );
  return s;
}
const Nr = { generateAuthUrl: Ur, exchangeCode: Kr, refreshAntigravityToken: Fr }, xe = 12e4;
async function Wr() {
  const { data: t } = await n.get("/admin/grok/oauth/capabilities");
  return t;
}
const Vr = 3, jr = 9e4, qr = 9e4;
function Hr(t) {
  return Math.ceil(Math.max(1, t) / Vr) * jr + qr;
}
async function Gr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return e;
}
async function Qr(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return e;
}
async function Jr(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/grok/oauth/refresh-token",
    a
  );
  return s;
}
async function Zr(t) {
  const { data: e } = await n.get(`/admin/grok/accounts/${t}/quota`);
  return e;
}
async function Xr(t) {
  const { data: e } = await n.post(`/admin/grok/accounts/${t}/reset-quota`);
  return e;
}
async function Yr(t) {
  const { data: e } = await n.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Hr(t.sso_tokens.length) }
  );
  return e;
}
async function ti(t, e) {
  const a = { sso_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post("/admin/grok/oauth/sso-token", a, {
    timeout: xe
  });
  return s;
}
async function ei(t, e) {
  const a = "----", s = t.indexOf(a), r = (s >= 0 ? t.slice(0, s) : t).trim(), o = s >= 0 ? t.slice(s + a.length) : "", c = { email: r, password: o };
  e && (c.proxy_id = e);
  const { data: l } = await n.post("/admin/grok/oauth/password", c, {
    timeout: xe
  });
  return l;
}
const ai = {
  generateAuthUrl: Gr,
  getCapabilities: Wr,
  exchangeCode: Qr,
  refreshGrokToken: Jr,
  queryQuota: Zr,
  resetQuota: Xr,
  createFromSSO: Yr,
  validateSSOToken: ti,
  authorizePassword: ei
};
async function ni(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return e;
}
async function si(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return e;
}
const ri = {
  queryQuota: ni,
  queryBalance: si
};
async function ii() {
  const { data: t } = await n.get("/admin/user-attributes");
  return t;
}
async function oi() {
  const { data: t } = await n.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function ci(t) {
  const { data: e } = await n.post("/admin/user-attributes", t);
  return e;
}
async function li(t, e) {
  const { data: a } = await n.put(
    `/admin/user-attributes/${t}`,
    e
  );
  return a;
}
async function ui(t) {
  const { data: e } = await n.delete(`/admin/user-attributes/${t}`);
  return e;
}
async function di(t) {
  const { data: e } = await n.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return e;
}
async function mi(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/attributes`
  );
  return e;
}
async function fi(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/attributes`,
    { values: e }
  );
  return a;
}
async function gi(t) {
  const { data: e } = await n.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return e;
}
const pi = {
  listDefinitions: ii,
  listEnabledDefinitions: oi,
  createDefinition: ci,
  updateDefinition: li,
  deleteDefinition: ui,
  reorderDefinitions: di,
  getUserAttributeValues: mi,
  updateUserAttributeValues: fi,
  getBatchUserAttributes: gi
};
async function hi(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/concurrency", { params: a });
  return s;
}
async function yi() {
  const { data: t } = await n.get("/admin/ops/user-concurrency");
  return t;
}
async function wi(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/account-availability", { params: a });
  return s;
}
async function bi(t, e, a) {
  const s = { window: t };
  e && (s.platform = e), typeof a == "number" && a > 0 && (s.group_id = a);
  const { data: r } = await n.get("/admin/ops/realtime-traffic", { params: s });
  return r;
}
const vi = {
  REALTIME_DISABLED: 4001
}, ki = "sub2api-admin";
function Si(t, e = {}) {
  let a = null, s = 0;
  const r = Number.isFinite(e.maxReconnectAttempts) ? e.maxReconnectAttempts : 1 / 0, o = e.reconnectBaseDelayMs ?? 1e3, c = e.reconnectMaxDelayMs ?? 3e4;
  let l = null, m = !0, x = !1, _ = !1, A = 0;
  const C = e.staleTimeoutMs ?? 12e4, O = e.staleCheckIntervalMs ?? 3e4;
  let v = null;
  const w = (H) => {
    var N;
    (N = e.onStatusChange) == null || N.call(e, H);
  }, S = () => {
    l && (clearTimeout(l), l = null);
  }, R = () => {
    v && (clearInterval(v), v = null);
  }, K = () => {
    R(), !(!C || C <= 0) && (v = setInterval(() => {
      if (!m || !a || a.readyState !== WebSocket.OPEN || !A) return;
      Date.now() - A > C && a.close();
    }, O));
  }, y = () => {
    var G;
    if (!m || _ && s >= r) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      w("offline");
      return;
    }
    const H = o * Math.pow(2, s), N = Math.min(H, c), j = Math.floor(Math.random() * 250);
    S(), l = setTimeout(() => {
      s++, D();
    }, N + j), (G = e.onReconnectScheduled) == null || G.call(e, { attempt: s + 1, delayMs: N + j });
  }, z = () => {
    m && (a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || D());
  }, F = () => {
    w("offline");
  }, D = () => {
    if (!m || x || a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || _ && s >= r) return;
    x = !0, w(_ ? "reconnecting" : "connecting");
    const H = e.wsBaseUrl || void 0, N = H ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${H}/api/v1/admin/ops/ws/qps`) : new URL(Le("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), j = String(e.token ?? localStorage.getItem("auth_token") ?? "").trim(), G = [ki];
    j && G.push(`jwt.${j}`), a = new WebSocket(N.toString(), G), a.onopen = () => {
      var W;
      s = 0, x = !1, _ = !0, S(), A = Date.now(), K(), w("connected"), (W = e.onOpen) == null || W.call(e);
    }, a.onmessage = (W) => {
      try {
        const Q = JSON.parse(W.data);
        A = Date.now(), t(Q);
      } catch (Q) {
        console.warn("[OpsWS] Failed to parse message:", Q);
      }
    }, a.onerror = (W) => {
      var Q;
      console.error("[OpsWS] Connection error:", W), (Q = e.onError) == null || Q.call(e, W);
    }, a.onclose = (W) => {
      var Q, V;
      if (x = !1, (Q = e.onClose) == null || Q.call(e, W), R(), a = null, W && typeof W.code == "number" && W.code === vi.REALTIME_DISABLED) {
        m = !1, S(), w("closed"), (V = e.onFatalClose) == null || V.call(e, W);
        return;
      }
      y();
    };
  };
  return window.addEventListener("online", z), window.addEventListener("offline", F), D(), () => {
    m = !1, window.removeEventListener("online", z), window.removeEventListener("offline", F), S(), R(), a && a.close(), a = null, w("closed");
  };
}
async function xi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function $i(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ci(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function _i(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ii(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ai(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Oi(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ei(t) {
  const { data: e } = await n.get("/admin/ops/errors", { params: t });
  return e;
}
async function Mi(t) {
  const { data: e } = await n.get(`/admin/ops/errors/${t}`);
  return e;
}
async function zi(t, e) {
  await n.put(`/admin/ops/errors/${t}/resolve`, { resolved: e });
}
async function Ti(t) {
  const { data: e } = await n.get("/admin/ops/request-errors", { params: t });
  return e;
}
async function Ri(t) {
  const { data: e } = await n.get("/admin/ops/upstream-errors", { params: t });
  return e;
}
async function Pi(t) {
  const { data: e } = await n.get(`/admin/ops/request-errors/${t}`);
  return e;
}
async function Li(t) {
  const { data: e } = await n.get(`/admin/ops/upstream-errors/${t}`);
  return e;
}
async function Bi(t, e) {
  await n.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: e });
}
async function Di(t, e) {
  await n.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: e });
}
async function Ui(t, e = {}, a = {}) {
  const s = { ...e };
  a.include_detail && (s.include_detail = "1");
  const { data: r } = await n.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return r;
}
async function Ki(t) {
  const { data: e } = await n.get("/admin/ops/requests", { params: t });
  return e;
}
async function Fi() {
  const { data: t } = await n.get("/admin/ops/alert-rules");
  return t;
}
async function Ni(t) {
  const { data: e } = await n.post("/admin/ops/alert-rules", t);
  return e;
}
async function Wi(t, e) {
  const { data: a } = await n.put(`/admin/ops/alert-rules/${t}`, e);
  return a;
}
async function Vi(t) {
  await n.delete(`/admin/ops/alert-rules/${t}`);
}
async function ji(t = {}) {
  const { data: e } = await n.get("/admin/ops/alert-events", { params: t });
  return e;
}
async function qi(t) {
  const { data: e } = await n.get(`/admin/ops/alert-events/${t}`);
  return e;
}
async function Hi(t, e) {
  await n.put(`/admin/ops/alert-events/${t}/status`, { status: e });
}
async function Gi(t) {
  await n.post("/admin/ops/alert-silences", t);
}
async function Qi() {
  const { data: t } = await n.get("/admin/ops/email-notification/config");
  return t;
}
async function Ji(t) {
  const { data: e } = await n.put("/admin/ops/email-notification/config", t);
  return e;
}
async function Zi() {
  const { data: t } = await n.get("/admin/ops/runtime/alert");
  return t;
}
async function Xi(t) {
  const { data: e } = await n.put("/admin/ops/runtime/alert", t);
  return e;
}
async function Yi() {
  const { data: t } = await n.get("/admin/ops/runtime/logging");
  return t;
}
async function to(t) {
  const { data: e } = await n.put("/admin/ops/runtime/logging", t);
  return e;
}
async function eo() {
  const { data: t } = await n.post("/admin/ops/runtime/logging/reset");
  return t;
}
async function ao(t) {
  const { data: e } = await n.get("/admin/ops/system-logs", { params: t });
  return e;
}
async function no(t) {
  const { data: e } = await n.post("/admin/ops/system-logs/cleanup", t);
  return e;
}
async function so() {
  const { data: t } = await n.get("/admin/ops/system-logs/health");
  return t;
}
async function ro() {
  const { data: t } = await n.get("/admin/ops/advanced-settings");
  return t;
}
async function io(t) {
  const { data: e } = await n.put("/admin/ops/advanced-settings", t);
  return e;
}
async function oo() {
  const { data: t } = await n.get("/admin/ops/settings/metric-thresholds");
  return t;
}
async function co(t) {
  await n.put("/admin/ops/settings/metric-thresholds", t);
}
const lo = {
  getDashboardSnapshotV2: $i,
  getDashboardOverview: xi,
  getThroughputTrend: Ci,
  getLatencyHistogram: _i,
  getErrorTrend: Ii,
  getErrorDistribution: Ai,
  getOpenAITokenStats: Oi,
  getConcurrencyStats: hi,
  getUserConcurrencyStats: yi,
  getAccountAvailabilityStats: wi,
  getRealtimeTrafficSummary: bi,
  subscribeQPS: Si,
  // Legacy unified endpoints
  listErrorLogs: Ei,
  getErrorLogDetail: Mi,
  updateErrorResolved: zi,
  // New split endpoints
  listRequestErrors: Ti,
  listUpstreamErrors: Ri,
  getRequestErrorDetail: Pi,
  getUpstreamErrorDetail: Li,
  updateRequestErrorResolved: Bi,
  updateUpstreamErrorResolved: Di,
  listRequestErrorUpstreamErrors: Ui,
  listRequestDetails: Ki,
  listAlertRules: Fi,
  createAlertRule: Ni,
  updateAlertRule: Wi,
  deleteAlertRule: Vi,
  listAlertEvents: ji,
  getAlertEvent: qi,
  updateAlertEventStatus: Hi,
  createAlertSilence: Gi,
  getEmailNotificationConfig: Qi,
  updateEmailNotificationConfig: Ji,
  getAlertRuntimeSettings: Zi,
  updateAlertRuntimeSettings: Xi,
  getRuntimeLogConfig: Yi,
  updateRuntimeLogConfig: to,
  resetRuntimeLogConfig: eo,
  getAdvancedSettings: ro,
  updateAdvancedSettings: io,
  getMetricThresholds: oo,
  updateMetricThresholds: co,
  listSystemLogs: ao,
  cleanupSystemLogs: no,
  getSystemLogSinkHealth: so
};
async function uo() {
  const { data: t } = await n.get("/admin/error-passthrough-rules");
  return t;
}
async function mo(t) {
  const { data: e } = await n.get(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function fo(t) {
  const { data: e } = await n.post("/admin/error-passthrough-rules", t);
  return e;
}
async function $e(t, e) {
  const { data: a } = await n.put(`/admin/error-passthrough-rules/${t}`, e);
  return a;
}
async function go(t) {
  const { data: e } = await n.delete(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function po(t, e) {
  return $e(t, { enabled: e });
}
const ho = {
  list: uo,
  getById: mo,
  create: fo,
  update: $e,
  delete: go,
  toggleEnabled: po
};
async function yo() {
  const { data: t } = await n.get("/admin/data-management/agent/health");
  return t;
}
async function wo() {
  const { data: t } = await n.get("/admin/data-management/config");
  return t;
}
async function bo(t) {
  const { data: e } = await n.put("/admin/data-management/config", t);
  return e;
}
async function vo(t) {
  const { data: e } = await n.post("/admin/data-management/s3/test", t);
  return e;
}
async function ko(t) {
  const { data: e } = await n.get(`/admin/data-management/sources/${t}/profiles`);
  return e;
}
async function So(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles`, e);
  return a;
}
async function xo(t, e, a) {
  const { data: s } = await n.put(`/admin/data-management/sources/${t}/profiles/${e}`, a);
  return s;
}
async function $o(t, e) {
  await n.delete(`/admin/data-management/sources/${t}/profiles/${e}`);
}
async function Co(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles/${e}/activate`);
  return a;
}
async function _o() {
  const { data: t } = await n.get("/admin/data-management/s3/profiles");
  return t;
}
async function Io(t) {
  const { data: e } = await n.post("/admin/data-management/s3/profiles", t);
  return e;
}
async function Ao(t, e) {
  const { data: a } = await n.put(`/admin/data-management/s3/profiles/${t}`, e);
  return a;
}
async function Oo(t) {
  await n.delete(`/admin/data-management/s3/profiles/${t}`);
}
async function Eo(t) {
  const { data: e } = await n.post(`/admin/data-management/s3/profiles/${t}/activate`);
  return e;
}
async function Mo(t) {
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
async function To(t) {
  const { data: e } = await n.get(`/admin/data-management/backups/${t}`);
  return e;
}
const Ro = {
  getAgentHealth: yo,
  getConfig: wo,
  updateConfig: bo,
  listSourceProfiles: ko,
  createSourceProfile: So,
  updateSourceProfile: xo,
  deleteSourceProfile: $o,
  setActiveSourceProfile: Co,
  testS3: vo,
  listS3Profiles: _o,
  createS3Profile: Io,
  updateS3Profile: Ao,
  deleteS3Profile: Oo,
  setActiveS3Profile: Eo,
  createBackupJob: Mo,
  listBackupJobs: zo,
  getBackupJob: To
};
async function Po(t, e) {
  const { data: a } = await n.put(`/admin/api-keys/${t}`, {
    group_id: e === null ? 0 : e
  });
  return a;
}
const Lo = {
  updateApiKeyGroup: Po
};
async function Bo(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/scheduled-test-plans`
  );
  return e ?? [];
}
async function Do(t) {
  const { data: e } = await n.post(
    "/admin/scheduled-test-plans",
    t
  );
  return e;
}
async function Uo(t, e) {
  const { data: a } = await n.put(
    `/admin/scheduled-test-plans/${t}`,
    e
  );
  return a;
}
async function Ko(t) {
  await n.delete(`/admin/scheduled-test-plans/${t}`);
}
async function Fo(t, e) {
  const { data: a } = await n.get(
    `/admin/scheduled-test-plans/${t}/results`,
    {
      params: e ? { limit: e } : void 0
    }
  );
  return a ?? [];
}
const No = {
  listByAccount: Bo,
  create: Do,
  update: Uo,
  delete: Ko,
  listResults: Fo
};
async function Wo() {
  const { data: t } = await n.get("/admin/backups/s3-config");
  return t;
}
async function Vo(t) {
  const { data: e } = await n.put("/admin/backups/s3-config", t);
  return e;
}
async function jo(t) {
  const { data: e } = await n.post("/admin/backups/s3-config/test", t);
  return e;
}
async function qo() {
  const { data: t } = await n.get("/admin/backups/image-storage");
  return t;
}
async function Ho(t) {
  const { data: e } = await n.put("/admin/backups/image-storage", t);
  return e;
}
async function Go(t) {
  const { data: e } = await n.post(
    "/admin/backups/image-storage/test",
    t
  );
  return e;
}
async function Qo() {
  const { data: t } = await n.get("/admin/backups/schedule");
  return t;
}
async function Jo(t) {
  const { data: e } = await n.put("/admin/backups/schedule", t);
  return e;
}
async function Zo(t) {
  const { data: e } = await n.post("/admin/backups", t || {});
  return e;
}
async function Xo() {
  const { data: t } = await n.get("/admin/backups");
  return t;
}
async function Yo(t) {
  const { data: e } = await n.get(`/admin/backups/${t}`);
  return e;
}
async function tc(t) {
  await n.delete(`/admin/backups/${t}`);
}
async function ec(t) {
  const { data: e } = await n.get(`/admin/backups/${t}/download-url`);
  return e;
}
async function ac(t, e) {
  const { data: a } = await n.post(`/admin/backups/${t}/restore`, { password: e });
  return a;
}
const nc = {
  getS3Config: Wo,
  updateS3Config: Vo,
  testS3Connection: jo,
  getImageStorageConfig: qo,
  updateImageStorageConfig: Ho,
  testImageStorageConnection: Go,
  getSchedule: Qo,
  updateSchedule: Jo,
  createBackup: Zo,
  listBackups: Xo,
  getBackup: Yo,
  deleteBackup: tc,
  getDownloadURL: ec,
  restoreBackup: ac
};
async function sc() {
  const { data: t } = await n.get("/admin/tls-fingerprint-profiles");
  return t;
}
async function rc(t) {
  const { data: e } = await n.get(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
async function ic(t) {
  const { data: e } = await n.post("/admin/tls-fingerprint-profiles", t);
  return e;
}
async function oc(t, e) {
  const { data: a } = await n.put(`/admin/tls-fingerprint-profiles/${t}`, e);
  return a;
}
async function cc(t) {
  const { data: e } = await n.delete(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
const lc = {
  list: sc,
  getById: rc,
  create: ic,
  update: oc,
  delete: cc
};
async function uc(t = 1, e = 20, a, s) {
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
async function dc(t) {
  const { data: e } = await n.get(`/admin/channels/${t}`);
  return e;
}
async function mc(t) {
  const { data: e } = await n.post("/admin/channels", t);
  return e;
}
async function fc(t, e) {
  const { data: a } = await n.put(`/admin/channels/${t}`, e);
  return a;
}
async function gc(t) {
  await n.delete(`/admin/channels/${t}`);
}
async function pc(t) {
  const { data: e } = await n.get("/admin/channels/model-pricing", {
    params: { model: t }
  });
  return e;
}
async function hc(t) {
  const { data: e } = await n.get("/admin/channels/pricing/sync-models", {
    params: { platform: t }
  });
  return e;
}
const yc = { list: uc, getById: dc, create: mc, update: fc, remove: gc, getModelDefaultPricing: pc, syncPricingModels: hc };
async function wc(t = {}, e) {
  const { data: a } = await n.get("/admin/channel-monitors", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function bc(t) {
  const { data: e } = await n.get(`/admin/channel-monitors/${t}`);
  return e;
}
async function vc(t) {
  const { data: e } = await n.post("/admin/channel-monitors", t);
  return e;
}
const Nt = /* @__PURE__ */ new Map();
function kc() {
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
function Sc(t) {
  const e = kc();
  return e ? {
    adminID: e,
    key: `sub2api:admin:channel-monitor-duplicate:${e}:${t}`
  } : null;
}
function xc(t) {
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
async function $c(t) {
  var r, o;
  const e = Sc(t);
  let a = e ? Nt.get(e.key) ?? xc(e.key) : null;
  if (!a) {
    const c = ((o = (r = globalThis.crypto) == null ? void 0 : r.randomUUID) == null ? void 0 : o.call(r)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `channel-monitor-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Nt.set(e.key, a), ie(e.key, a));
  const { data: s } = await n.post(
    `/admin/channel-monitors/${t}/duplicate`,
    void 0,
    { headers: { "Idempotency-Key": a } }
  );
  return e && (Nt.delete(e.key), ie(e.key, null)), s;
}
async function Cc(t, e) {
  const { data: a } = await n.put(`/admin/channel-monitors/${t}`, e);
  return a;
}
async function _c(t) {
  await n.delete(`/admin/channel-monitors/${t}`);
}
async function Ic(t) {
  const { data: e } = await n.post(`/admin/channel-monitors/${t}/run`);
  return e;
}
async function Ac(t, e = {}) {
  const { data: a } = await n.get(
    `/admin/channel-monitors/${t}/history`,
    { params: e }
  );
  return a;
}
const Oc = {
  list: wc,
  get: bc,
  create: vc,
  duplicate: $c,
  update: Cc,
  del: _c,
  runNow: Ic,
  listHistory: Ac
};
async function Ec(t = {}) {
  const { data: e } = await n.get("/admin/channel-monitor-templates", {
    params: t
  });
  return e;
}
async function Mc(t) {
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
async function Tc(t, e) {
  const { data: a } = await n.put(
    `/admin/channel-monitor-templates/${t}`,
    e
  );
  return a;
}
async function Rc(t) {
  await n.delete(`/admin/channel-monitor-templates/${t}`);
}
async function Pc(t, e) {
  const { data: a } = await n.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: e }
  );
  return a;
}
async function Lc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return e;
}
const Bc = {
  list: Ec,
  get: Mc,
  create: zc,
  update: Tc,
  del: Rc,
  apply: Pc,
  listAssociatedMonitors: Lc
}, Dc = {
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
async function Uc(t = {}) {
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
async function Kc(t) {
  const { data: e } = await n.get(
    "/admin/affiliates/users/lookup",
    { params: { q: t } }
  );
  return e;
}
async function Fc(t, e) {
  const { data: a } = await n.put(
    `/admin/affiliates/users/${t}`,
    e
  );
  return a;
}
async function Nc(t) {
  const { data: e } = await n.delete(
    `/admin/affiliates/users/${t}`
  );
  return e;
}
async function Wc(t) {
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
async function Vc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/invites",
    { params: Ht(t) }
  );
  return e;
}
async function jc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/invites",
    t
  );
  return e;
}
async function qc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/rebates",
    { params: Ht(t) }
  );
  return e;
}
async function Hc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/transfers",
    { params: Ht(t) }
  );
  return e;
}
async function Gc(t) {
  const { data: e } = await n.get(
    `/admin/affiliates/users/${t}/overview`
  );
  return e;
}
const Qc = {
  listUsers: Uc,
  lookupUsers: Kc,
  updateUserSettings: Fc,
  clearUserSettings: Nc,
  batchSetRate: Wc,
  listInviteRecords: Vc,
  bindRelationship: jc,
  listRebateRecords: qc,
  listTransferRecords: Hc,
  getUserOverview: Gc
};
async function Jc() {
  const { data: t } = await n.get("/admin/risk-control/config");
  return t;
}
async function Zc(t) {
  const { data: e } = await n.put("/admin/risk-control/config", t);
  return e;
}
async function Xc() {
  const { data: t } = await n.get("/admin/risk-control/status");
  return t;
}
async function Yc(t = {}) {
  const { data: e } = await n.post("/admin/risk-control/api-keys/test", t);
  return e;
}
async function tl(t = {}) {
  const { data: e } = await n.get("/admin/risk-control/logs", {
    params: t
  });
  return e;
}
async function el(t) {
  const { data: e } = await n.post(
    `/admin/risk-control/users/${t}/unban`
  );
  return e;
}
async function al(t) {
  const { data: e } = await n.delete("/admin/risk-control/hashes", {
    data: { input_hash: t }
  });
  return e;
}
async function nl() {
  const { data: t } = await n.delete("/admin/risk-control/hashes/all");
  return t;
}
const sl = {
  getConfig: Jc,
  updateConfig: Zc,
  getStatus: Xc,
  testAPIKeys: Yc,
  listLogs: tl,
  unbanUser: el,
  deleteFlaggedHash: al,
  clearFlaggedHashes: nl
}, rl = {
  async getStatus() {
    const { data: t } = await n.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: e } = await n.post("/admin/compliance/accept", t);
    return e;
  }
};
async function il(t) {
  const { data: e } = await n.get("/admin/audit-logs", { params: t });
  return e;
}
async function ol(t) {
  const { data: e } = await n.get(`/admin/audit-logs/${t}`);
  return e;
}
async function cl(t) {
  const { data: e } = await n.post("/admin/audit-logs/clear", { totp_code: t });
  return e;
}
const ll = {
  list: il,
  get: ol,
  clear: cl
};
async function ul() {
  const { data: t } = await n.get("/admin/plugins");
  return t;
}
async function dl(t) {
  const e = new FormData();
  e.append("plugin", t);
  const { data: a } = await n.post("/admin/plugins/upload", e, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 12e4
  });
  return a;
}
async function ml(t, e, a) {
  const { data: s } = await n.post(`/admin/plugins/${t}/enable`, {
    rollout_percent: e,
    accept_untested: a
  });
  return s;
}
async function fl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/disable`);
  return e;
}
async function gl(t) {
  await n.delete(`/admin/plugins/${t}`);
}
async function pl(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/config`);
  return e;
}
async function hl(t, e) {
  const { data: a } = await n.put(`/admin/plugins/${t}/config`, e);
  return a;
}
async function yl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/test`);
  return e;
}
async function wl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/ui-session`);
  return e;
}
const bl = {
  list: ul,
  upload: dl,
  enable: ml,
  disable: fl,
  remove: gl,
  getConfig: pl,
  saveConfig: hl,
  test: yl,
  createUISession: wl
}, bd = {
  dashboard: Ze,
  users: ga,
  groups: Va,
  accounts: Xn,
  proxies: gs,
  redeem: $s,
  promo: Ms,
  announcements: Ds,
  settings: gr,
  system: Be,
  subscriptions: _r,
  usage: Rr,
  gemini: Dr,
  antigravity: Nr,
  grok: ai,
  cnProviders: ri,
  userAttributes: pi,
  ops: lo,
  errorPassthrough: ho,
  dataManagement: Ro,
  apiKeys: Lo,
  scheduledTests: No,
  backup: nc,
  tlsFingerprintProfiles: lc,
  channels: yc,
  channelMonitor: Oc,
  channelMonitorTemplate: Bc,
  payment: Dc,
  affiliates: Qc,
  riskControl: sl,
  compliance: rl,
  audit: ll,
  plugins: bl
}, Ce = 5, vl = 1e3, kl = 20, oe = [10, 20, 50, 100], _e = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ce || e > vl ? null : e;
}, Sl = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ce ? null : e;
}, Ie = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, xl = () => {
  var e;
  const t = (e = Ie()) == null ? void 0 : e.table_page_size_options;
  return Array.isArray(t) ? Array.from(
    new Set(
      t.map((a) => _e(a)).filter((a) => a !== null)
    )
  ).sort((a, s) => a - s) : [];
}, ce = (t, e) => {
  for (const a of e)
    if (a >= t)
      return a;
  return e[e.length - 1];
}, Ot = () => {
  var e;
  const t = _e((e = Ie()) == null ? void 0 : e.table_default_page_size);
  return t === null ? kl : t;
}, jt = () => {
  const t = xl();
  return t.length === 0 ? [...oe] : t.length > 0 ? t : [...oe];
}, bt = (t) => {
  const e = Sl(t), a = Ot(), s = jt();
  return ce(e !== null ? e : a, s);
}, Ae = "table-page-size";
function vd(t = Ot()) {
  var e;
  if (typeof window < "u" && ((e = window.__APP_CONFIG__) == null ? void 0 : e.table_default_page_size) !== void 0)
    return bt(Ot());
  if (typeof window < "u")
    try {
      const a = window.localStorage.getItem(Ae);
      if (a !== null) {
        const s = Number(a);
        if (Number.isFinite(s))
          return bt(s);
      }
    } catch (a) {
      console.warn("Failed to read persisted page size:", a);
    }
  return bt(Ot() || t);
}
function $l(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ae, String(t));
    } catch (e) {
      console.warn("Failed to persist page size:", e);
    }
}
const Cl = {
  key: 0,
  class: "layout-section-fixed"
}, _l = {
  key: 1,
  class: "layout-section-fixed"
}, Il = { class: "layout-section-scrollable" }, Al = { class: "card table-scroll-container frosted-table-shell console-skin-table" }, Ol = {
  key: 2,
  class: "layout-section-fixed"
}, El = /* @__PURE__ */ ut({
  __name: "TablePageLayout",
  setup(t) {
    const e = B(!1), a = () => {
      e.value = window.innerWidth <= 1024;
    };
    return vt(() => {
      a(), window.addEventListener("resize", a);
    }), zt(() => {
      window.removeEventListener("resize", a);
    }), (s, r) => (p(), h("div", {
      class: M(["table-page-layout", { "mobile-mode": e.value }])
    }, [
      s.$slots.actions ? (p(), h("div", Cl, [
        q(s.$slots, "actions", {}, void 0, !0)
      ])) : P("", !0),
      s.$slots.filters ? (p(), h("div", _l, [
        q(s.$slots, "filters", {}, void 0, !0)
      ])) : P("", !0),
      f("div", Il, [
        f("div", Al, [
          q(s.$slots, "table", {}, void 0, !0)
        ])
      ]),
      s.$slots.pagination ? (p(), h("div", Ol, [
        q(s.$slots, "pagination", {}, void 0, !0)
      ])) : P("", !0)
    ], 2));
  }
}), kd = /* @__PURE__ */ Tt(El, [["__scopeId", "data-v-75cc8a42"]]);
function gt(t, e, a) {
  let s = a.initialDeps ?? [], r, o = !0;
  function c() {
    var l, m, x;
    let _;
    a.key && ((l = a.debug) != null && l.call(a)) && (_ = Date.now());
    const A = t();
    if (!(A.length !== s.length || A.some((v, w) => s[w] !== v)))
      return r;
    s = A;
    let O;
    if (a.key && ((m = a.debug) != null && m.call(a)) && (O = Date.now()), r = e(...A), a.key && ((x = a.debug) != null && x.call(a))) {
      const v = Math.round((Date.now() - _) * 100) / 100, w = Math.round((Date.now() - O) * 100) / 100, S = w / 16, R = (K, y) => {
        for (K = String(K); K.length < y; )
          K = " " + K;
        return K;
      };
      console.info(
        `%c⏱ ${R(w, 5)} /${R(v, 5)} ms`,
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
function le(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Ml = (t, e) => Math.abs(t - e) < 1.01, zl = (t, e, a) => {
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
  if (r(ue(a)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((c) => {
    const l = () => {
      const m = c[0];
      if (m != null && m.borderBoxSize) {
        const x = m.borderBoxSize[0];
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
  } : zl(
    s,
    () => {
      e(r, !1);
    },
    t.options.isScrollingResetDelay
  ), c = (_) => () => {
    const { horizontal: A, isRtl: C } = t.options;
    r = A ? a.scrollLeft * (C && -1 || 1) : a.scrollTop, o(), e(r, _);
  }, l = c(!0), m = c(!1);
  a.addEventListener("scroll", l, de);
  const x = t.options.useScrollendEvent && me;
  return x && a.addEventListener("scrollend", m, de), () => {
    a.removeEventListener("scroll", l), x && a.removeEventListener("scrollend", m);
  };
}, Ll = (t, e, a) => {
  if (e != null && e.borderBoxSize) {
    const s = e.borderBoxSize[0];
    if (s)
      return Math.round(
        s[a.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[a.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Bl = (t, {
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
class Dl {
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
        getItemKey: Tl,
        rangeExtractor: Rl,
        onChange: () => {
        },
        measureElement: Ll,
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
          for (const C of this.laneAssignments.keys())
            C >= a && this.laneAssignments.delete(C);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((C) => {
          this.itemSizeCache.set(C.key, C.size);
        }));
        const x = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === a && (this.lanesSettling = !1);
        const _ = this.measurementsCache.slice(0, x), A = new Array(l).fill(
          void 0
        );
        for (let C = 0; C < x; C++) {
          const O = _[C];
          O && (A[O.lane] = C);
        }
        for (let C = x; C < a; C++) {
          const O = o(C), v = this.laneAssignments.get(C);
          let w, S;
          if (v !== void 0 && this.options.lanes > 1) {
            w = v;
            const z = A[w], F = z !== void 0 ? _[z] : void 0;
            S = F ? F.end + this.options.gap : s + r;
          } else {
            const z = this.options.lanes === 1 ? _[C - 1] : this.getFurthestMeasurement(_, C);
            S = z ? z.end + this.options.gap : s + r, w = z ? z.lane : C % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(C, w);
          }
          const R = m.get(O), K = typeof R == "number" ? R : this.options.estimateSize(C), y = S + K;
          _[C] = {
            index: C,
            start: S,
            size: K,
            end: y,
            key: O,
            lane: w
          }, A[w] = C;
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
      (a, s, r, o) => this.range = a.length > 0 && s > 0 ? Ul({
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
        return le(
          s[Ee(
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
    if (!c && Ml(r, this.getScrollOffset())) {
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
function Ul({
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
    const x = Array(s).fill(a + e);
    for (; c >= 0 && x.some((_) => _ >= a); ) {
      const _ = t[c];
      x[_.lane] = _.start, c--;
    }
    c = Math.max(0, c - c % s), l = Math.min(r, l + (s - 1 - l % s));
  }
  return { startIndex: c, endIndex: l };
}
function Kl(t) {
  const e = new Dl(L(t)), a = De(e), s = e._didMount();
  return tt(
    () => L(t).getScrollElement(),
    (r) => {
      r && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), tt(
    () => L(t),
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
function Fl(t) {
  return Kl(
    I(() => ({
      observeElementRect: Oe,
      observeElementOffset: Pl,
      scrollToFn: Bl,
      ...L(t)
    }))
  );
}
const Nl = {
  key: 0,
  class: "space-y-3"
}, Wl = { class: "space-y-3" }, Vl = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, jl = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, ql = { class: "flex flex-col items-center" }, Hl = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, Gl = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, Ql = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, Jl = ["checked", "indeterminate"], Zl = ["onClick"], Xl = { class: "space-y-3" }, Yl = {
  key: 0,
  class: "flex justify-end"
}, tu = ["checked", "aria-label", "onChange"], eu = ["data-field"], au = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, nu = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, su = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, ru = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, iu = { class: "table-header bg-gray-50 dark:bg-dark-800" }, ou = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, cu = ["checked", "indeterminate", "aria-label"], lu = ["aria-sort", "onClick"], uu = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, du = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, mu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, fu = { key: 1 }, gu = ["colspan"], pu = { class: "flex flex-col items-center" }, hu = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, yu = {
  key: 0,
  "aria-hidden": "true"
}, wu = ["colspan"], bu = ["data-row-id", "data-index", "onClick"], vu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, ku = ["checked", "aria-label", "onChange"], Su = {
  key: 1,
  "aria-hidden": "true"
}, xu = ["colspan"], fe = "(min-width: 768px)", $u = /* @__PURE__ */ ut({
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
    const { t: s } = Rt(), r = B(
      typeof window > "u" ? !0 : window.matchMedia(fe).matches
    ), o = a, c = B(null), l = B(!1), m = B(!1), x = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), _ = (i, u) => Oe(i, (d) => {
      d.height > 0 && u(d);
    }), A = () => {
      c.value && (l.value = c.value.scrollWidth > c.value.clientWidth);
    }, C = () => {
      if (!y.expandableActions) {
        m.value = !1, D.value = !1;
        return;
      }
      if (!c.value) return;
      const i = c.value.querySelector("tbody tr:first-child td:last-child");
      if (!i) return;
      const u = i.querySelector("div");
      if (!u) return;
      const d = D.value;
      D.value = !0, it(() => {
        const $ = u.querySelectorAll('button, a, [role="button"]');
        if ($.length <= 2) {
          m.value = !1, D.value = d;
          return;
        }
        let E = 0;
        $.forEach((ft, Ut) => {
          E += ft.offsetWidth, Ut < $.length - 1 && (E += 4);
        });
        const rt = i.clientWidth - 32;
        m.value = E > rt, D.value = d;
      });
    };
    let O = null, v = null, w = null, S = null;
    const R = () => {
      O == null || O.disconnect(), O = null, v && (window.removeEventListener("resize", v), v = null);
    }, K = () => {
      A(), C(), c.value && typeof ResizeObserver < "u" ? (O = new ResizeObserver(() => {
        A(), C();
      }), O.observe(c.value)) : (v = () => {
        A(), C();
      }, window.addEventListener("resize", v));
    };
    vt(() => {
      typeof window < "u" && (w = window.matchMedia(fe), r.value = w.matches, S = (i) => {
        r.value = i.matches;
      }, typeof w.addEventListener == "function" ? w.addEventListener("change", S) : w.addListener(S));
    }), zt(() => {
      R(), w && S && (typeof w.removeEventListener == "function" ? w.removeEventListener("change", S) : w.removeListener(S), S = null), w = null;
    });
    const y = t, z = B(""), F = B("asc"), D = B(!1), H = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), N = () => {
      const i = /* @__PURE__ */ new Set();
      for (const u of y.columns)
        u.sortable && i.add(u.key);
      return i;
    }, j = (i) => i && N().has(i) ? i : "", G = (i) => i === "desc" ? "desc" : "asc", W = () => {
      if (!y.sortStorageKey) return null;
      try {
        const i = localStorage.getItem(y.sortStorageKey);
        if (!i) return null;
        const u = JSON.parse(i), d = j(typeof u.key == "string" ? u.key : "");
        return d ? { key: d, order: G(u.order) } : null;
      } catch (i) {
        return console.error("[DataTable] Failed to read persisted sort state:", i), null;
      }
    }, Q = (i) => {
      if (y.sortStorageKey)
        try {
          localStorage.setItem(y.sortStorageKey, JSON.stringify(i));
        } catch (u) {
          console.error("[DataTable] Failed to persist sort state:", u);
        }
    }, V = () => {
      const i = W();
      if (i) return i;
      const u = j(y.defaultSortKey || "");
      return u ? { key: u, order: G(y.defaultSortOrder) } : null;
    }, st = (i) => {
      i && (z.value = i.key, F.value = i.order);
    }, pt = (i, u) => z.value === i && F.value === u ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", Pt = (i) => z.value !== i ? "none" : F.value === "asc" ? "ascending" : "descending", Lt = (i) => {
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
    }, kt = (i) => {
      if (i == null) return "";
      if (typeof i == "string") return i;
      if (typeof i == "number" || typeof i == "boolean") return String(i);
      if (i instanceof Date) return i.toISOString();
      try {
        return JSON.stringify(i);
      } catch {
        return String(i);
      }
    }, St = (i, u) => {
      const d = ot(i), $ = ot(u);
      if (d && $) return 0;
      if (d) return 1;
      if ($) return -1;
      const E = ct(i), rt = ct(u);
      if (E !== null && rt !== null)
        return E === rt ? 0 : E < rt ? -1 : 1;
      const ft = kt(i), Ut = kt(u), ae = H.compare(ft, Ut);
      return ae === 0 ? 0 : ae < 0 ? -1 : 1;
    }, ht = (i) => typeof y.rowKey == "function" ? y.rowKey(i) ?? void 0 : typeof y.rowKey == "string" && y.rowKey ? (i == null ? void 0 : i[y.rowKey]) ?? void 0 : (i == null ? void 0 : i.id) ?? void 0, X = (i, u) => ht(i) ?? u, xt = I(() => y.columns.filter((i) => i.key !== "actions")), yt = I(
      () => y.columns.map((i) => `${i.key}:${i.sortable ? "1" : "0"}`).join("|")
    );
    tt(
      r,
      async (i) => {
        R(), i && (await it(), K());
      },
      { immediate: !0, flush: "post" }
    ), tt(
      [() => y.data.length, yt],
      async () => {
        await it(), A(), C();
      },
      { flush: "post" }
    ), tt(D, async () => {
      await it(), A();
    });
    const $t = (i) => {
      let u = "asc";
      z.value === i && (u = F.value === "asc" ? "desc" : "asc"), y.serverSideSort ? (z.value = i, F.value = u, o("sort", i, u)) : (z.value = i, F.value = u);
    }, g = I(() => {
      if (y.serverSideSort || !z.value || !y.data) return y.data;
      const i = z.value, u = F.value;
      return y.data.map((d, $) => ({ row: d, index: $ })).sort((d, $) => {
        var rt, ft;
        const E = St((rt = d.row) == null ? void 0 : rt[i], (ft = $.row) == null ? void 0 : ft[i]);
        return E !== 0 ? u === "asc" ? E : -E : d.index - $.index;
      }).map((d) => d.row);
    }), b = I(() => y.columns.length + (y.selectable ? 1 : 0)), k = I(() => new Set(y.selectedKeys)), U = I(
      () => (g.value ?? []).map((i, u) => X(i, u))
    ), at = I(
      () => U.value.length > 0 && U.value.every((i) => k.value.has(i))
    ), Ct = I(() => at.value ? !1 : U.value.some((i) => k.value.has(i))), dt = (i) => {
      const u = Array.from(i);
      o("update:selectedKeys", u), o("selectionChange", u);
    }, _t = (i, u) => k.value.has(X(i, u)), Gt = (i, u) => typeof y.selectionLabel == "function" ? y.selectionLabel(i) : y.selectionLabel ? y.selectionLabel : `${s("common.selectOption")} ${X(i, u)}`, Qt = (i, u, d) => {
      const $ = new Set(y.selectedKeys), E = X(i, u);
      d ? $.add(E) : $.delete(E), dt($);
    }, Jt = (i) => {
      const u = new Set(y.selectedKeys);
      for (const d of U.value)
        i ? u.add(d) : u.delete(d);
      dt(u);
    }, Bt = I(
      () => {
        var i;
        return r.value && (((i = g.value) == null ? void 0 : i.length) ?? 0) > (y.virtualizeThreshold ?? 100);
      }
    ), mt = Fl(I(() => {
      var i;
      return {
        count: Bt.value ? ((i = g.value) == null ? void 0 : i.length) ?? 0 : 0,
        getScrollElement: () => c.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (u) => {
          var $;
          const d = ($ = g.value) == null ? void 0 : $[u];
          return d != null ? X(d, u) : u;
        },
        estimateSize: () => y.estimateRowHeight ?? 56,
        overscan: y.overscan ?? 5,
        // 兜底高度:首个有效高度读数到来前,先按一屏渲染,避免空白帧
        initialRect: { width: 0, height: x() },
        // 关键:过滤 0 高度读数,杜绝 scrollRect 被钉成 0 → calculateRange 返回 null → 整表空白
        observeElementRect: _,
        // 把测量类 ResizeObserver 回调批到 rAF,避免滚动中同步 reflow 风暴导致的校正抖动/空白
        useAnimationFrameWithResizeObserver: !0
      };
    })), Dt = I(() => mt.value.getVirtualItems()), Zt = I(() => {
      const i = Dt.value;
      return i.length > 0 ? i[0].start : 0;
    }), Xt = I(() => {
      const i = Dt.value;
      return i.length === 0 ? 0 : mt.value.getTotalSize() - i[i.length - 1].end;
    }), Me = (i) => {
      i && mt.value.measureElement(i);
    }, ze = I(
      () => (g.value ?? []).map((i) => {
        const u = ht(i);
        return u !== void 0 ? u : i !== null && typeof i == "object" ? i : Symbol("unstable-row");
      })
    ), Te = (i, u) => {
      if (i.length !== u.length) return !1;
      const d = new Set(i), $ = new Set(u);
      return d.size !== i.length || $.size !== u.length ? !1 : [...d].every((E) => $.has(E));
    };
    tt(
      ze,
      (i, u) => {
        Te(i, u) || (mt.value.measureElement(null), mt.value.measure());
      },
      { flush: "post" }
    );
    const Re = I(() => {
      const i = g.value ?? [];
      return Bt.value ? Dt.value.map((u) => ({ index: u.index, row: i[u.index], measure: !0 })) : i.map((u, d) => ({ index: d, row: u, measure: !1 }));
    }), Yt = I(() => y.columns.some((i) => i.key === "actions")), Pe = I(() => y.columns.length > 0 && y.columns[0].key === "select"), te = (i, u) => {
      const d = [];
      return y.stickyFirstColumn && (Pe.value ? u === 0 ? d.push("sticky-col sticky-col-left-first") : u === 1 && d.push("sticky-col sticky-col-left-second") : u === 0 && d.push("sticky-col sticky-col-left")), y.stickyActionsColumn && i.key === "actions" && d.push("sticky-col sticky-col-right"), d.join(" ");
    }, It = () => {
      const i = y.columns.length;
      return i >= 10 ? "px-2" : i >= 7 ? "px-3" : i >= 5 ? "px-4" : "px-6";
    }, ee = B(!1);
    return vt(() => {
      const i = V();
      st(i), ee.value = !0;
    }), tt(
      yt,
      () => {
        const i = j(z.value);
        if (!z.value) {
          const u = V();
          st(u);
          return;
        }
        if (!i) {
          const u = V();
          u ? st(u) : (z.value = "", F.value = "asc");
        }
      },
      { flush: "post" }
    ), tt(
      [z, F],
      ([i, u]) => {
        if (!ee.value || !y.sortStorageKey) return;
        const d = j(i);
        d && Q({ key: d, order: G(u) });
      },
      { flush: "post" }
    ), e({
      virtualizer: mt,
      shouldVirtualize: Bt,
      sortedData: g,
      resolveRowKey: X,
      tableWrapperEl: c
    }), (i, u) => r.value ? (p(), h("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: c,
      class: M(["table-wrapper", {
        "actions-expanded": D.value,
        "is-scrollable": l.value
      }])
    }, [
      f("table", ru, [
        f("thead", iu, [
          f("tr", null, [
            t.selectable ? (p(), h("th", ou, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: at.value,
                indeterminate: Ct.value,
                "aria-label": L(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: u[2] || (u[2] = (d) => Jt(d.target.checked))
              }, null, 40, cu)
            ])) : P("", !0),
            (p(!0), h(J, null, Y(t.columns, (d, $) => (p(), h("th", {
              key: d.key,
              scope: "col",
              "aria-sort": d.sortable ? Pt(d.key) : void 0,
              class: M([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                It(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": d.sortable },
                te(d, $),
                d.class
              ]),
              onClick: (E) => d.sortable && $t(d.key)
            }, [
              f("div", {
                class: M(["flex items-center space-x-1", Lt(d)])
              }, [
                q(i.$slots, `header-${d.key}`, {
                  column: d,
                  sortKey: z.value,
                  sortOrder: F.value
                }, () => [
                  f("span", null, T(d.label), 1)
                ], !0),
                d.sortable ? (p(), h("span", uu, [
                  (p(), h("svg", {
                    class: M(["h-2.5 w-2.5", pt(d.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[6] || (u[6] = [
                    f("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (p(), h("svg", {
                    class: M(["-mt-0.5 h-2.5 w-2.5", pt(d.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[7] || (u[7] = [
                    f("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : P("", !0)
              ], 2)
            ], 10, lu))), 128))
          ])
        ]),
        f("tbody", du, [
          t.loading ? (p(), h(J, { key: 0 }, Y(5, (d) => f("tr", { key: d }, [
            t.selectable ? (p(), h("td", mu, [...u[8] || (u[8] = [
              f("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : P("", !0),
            (p(!0), h(J, null, Y(t.columns, ($) => (p(), h("td", {
              key: $.key,
              class: M(["whitespace-nowrap py-4", It()])
            }, [...u[9] || (u[9] = [
              f("div", { class: "animate-pulse" }, [
                f("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !t.data || t.data.length === 0 ? (p(), h("tr", fu, [
            f("td", {
              colspan: b.value,
              class: M(["py-12 text-center text-gray-500 dark:text-dark-400", It()])
            }, [
              q(i.$slots, "empty", {}, () => [
                f("div", pu, [
                  et(nt, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  f("p", hu, T(L(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, gu)
          ])) : (p(), h(J, { key: 2 }, [
            Zt.value > 0 ? (p(), h("tr", yu, [
              f("td", {
                colspan: b.value,
                style: Et({ height: Zt.value + "px", padding: 0, border: "none" })
              }, null, 12, wu)
            ])) : P("", !0),
            (p(!0), h(J, null, Y(Re.value, (d) => (p(), h("tr", {
              key: X(d.row, d.index),
              "data-row-id": X(d.row, d.index),
              "data-index": d.index,
              ref_for: !0,
              ref: d.measure ? Me : void 0,
              class: M(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": t.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": t.selectable && _t(d.row, d.index)
              }]),
              onClick: ($) => t.clickableRows && o("rowClick", d.row)
            }, [
              t.selectable ? (p(), h("td", vu, [
                f("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: _t(d.row, d.index),
                  "aria-label": Gt(d.row, d.index),
                  "data-test": "select-row",
                  onClick: u[3] || (u[3] = Z(() => {
                  }, ["stop"])),
                  onChange: ($) => Qt(d.row, d.index, $.target.checked)
                }, null, 40, ku)
              ])) : P("", !0),
              (p(!0), h(J, null, Y(t.columns, ($, E) => (p(), h("td", {
                key: $.key,
                class: M([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  It(),
                  te($, E),
                  $.class
                ])
              }, [
                q(i.$slots, `cell-${$.key}`, {
                  row: d.row,
                  value: d.row[$.key],
                  expanded: D.value
                }, () => [
                  lt(T($.formatter ? $.formatter(d.row[$.key], d.row) : d.row[$.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, bu))), 128)),
            Xt.value > 0 ? (p(), h("tr", Su, [
              f("td", {
                colspan: b.value,
                style: Et({ height: Xt.value + "px", padding: 0, border: "none" })
              }, null, 12, xu)
            ])) : P("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (p(), h("div", Nl, [
      t.loading ? (p(), h(J, { key: 0 }, Y(5, (d) => f("div", {
        key: d,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        f("div", Wl, [
          (p(!0), h(J, null, Y(xt.value, ($) => (p(), h("div", {
            key: $.key,
            class: "flex justify-between"
          }, [...u[4] || (u[4] = [
            f("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            f("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          Yt.value ? (p(), h("div", Vl, [...u[5] || (u[5] = [
            f("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : P("", !0)
        ])
      ])), 64)) : !t.data || t.data.length === 0 ? (p(), h("div", jl, [
        q(i.$slots, "empty", {}, () => [
          f("div", ql, [
            et(nt, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            f("p", Hl, T(L(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (p(), h(J, { key: 2 }, [
        t.selectable ? (p(), h("div", Gl, [
          f("label", Ql, [
            f("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: at.value,
              indeterminate: Ct.value,
              "data-test": "select-all-mobile",
              onChange: u[0] || (u[0] = (d) => Jt(d.target.checked))
            }, null, 40, Jl),
            f("span", null, T(L(s)("common.selectAll")), 1)
          ])
        ])) : P("", !0),
        (p(!0), h(J, null, Y(g.value, (d, $) => (p(), h("div", {
          key: X(d, $),
          class: M(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": t.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": t.selectable && _t(d, $)
          }]),
          onClick: (E) => t.clickableRows && o("rowClick", d)
        }, [
          f("div", Xl, [
            t.selectable ? (p(), h("div", Yl, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: _t(d, $),
                "aria-label": Gt(d, $),
                "data-test": "select-row",
                onClick: u[1] || (u[1] = Z(() => {
                }, ["stop"])),
                onChange: (E) => Qt(d, $, E.target.checked)
              }, null, 40, tu)
            ])) : P("", !0),
            (p(!0), h(J, null, Y(xt.value, (E) => (p(), h("div", {
              key: E.key,
              "data-field": E.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              f("span", au, T(E.label), 1),
              f("div", nu, [
                q(i.$slots, `cell-${E.key}`, {
                  row: d,
                  value: d[E.key],
                  expanded: D.value
                }, () => [
                  lt(T(E.formatter ? E.formatter(d[E.key], d) : d[E.key]), 1)
                ], !0)
              ])
            ], 8, eu))), 128)),
            Yt.value ? (p(), h("div", su, [
              q(i.$slots, "cell-actions", {
                row: d,
                value: d.actions,
                expanded: D.value
              }, void 0, !0)
            ])) : P("", !0)
          ])
        ], 10, Zl))), 128))
      ], 64))
    ]));
  }
}), Sd = /* @__PURE__ */ Tt($u, [["__scopeId", "data-v-2280f759"]]), Cu = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], _u = { class: "select-value" }, Iu = ["onKeydown"], Au = { class: "select-icon" }, Ou = {
  key: 0,
  class: "select-search"
}, Eu = ["placeholder", "aria-label"], Mu = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], zu = {
  key: 0,
  class: "select-empty"
}, Wt = 8, Tu = 200, Ru = 300, Pu = /* @__PURE__ */ ut({
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
    const { t: a } = Rt(), s = `select-${Math.random().toString(36).substring(2, 9)}`, r = t, o = e, c = B(!1), l = B(""), m = B(-1), x = B(null), _ = B(null), A = B(null), C = B(null), O = B(null), v = B("bottom"), w = B(null), S = I(() => r.placeholder ?? a("common.selectOption")), R = I(() => r.searchPlaceholder ?? a("common.searchPlaceholder")), K = I(() => r.emptyText ?? a("common.noOptionsFound"));
    let y = null;
    const z = I(() => r.remote ? !0 : r.searchable === "auto" ? r.options.length > 5 : r.searchable), F = I(() => {
      if (!w.value) return {};
      const g = w.value, b = Math.max(Wt, window.innerWidth - Wt), k = Math.min(
        Math.max(Wt, g.left),
        b
      ), U = Math.max(0, b - k), at = Math.max(Tu, g.width), Ct = Math.min(at, U), dt = {
        position: "fixed",
        left: `${k}px`,
        minWidth: `${Ct}px`,
        maxWidth: `${U}px`,
        zIndex: "100000020"
      };
      return v.value === "top" ? dt.bottom = `${window.innerHeight - g.top + 4}px` : dt.top = `${g.bottom + 4}px`, dt;
    }), D = (g) => typeof g == "object" && g !== null ? g[r.valueKey] : g, H = (g) => String(typeof g == "object" && g !== null ? g[r.labelKey] ?? "" : g ?? ""), N = (g) => typeof g == "object" && g !== null ? !!g.disabled : !1, j = (g) => typeof g == "object" && g !== null ? g.kind === "group" : !1, G = I(() => r.options.find((g) => D(g) === r.modelValue) || null), W = I(() => G.value ? H(G.value) : r.creatable && r.modelValue ? String(r.modelValue) : S.value), Q = I(
      () => r.modelValue !== null && r.modelValue !== void 0 && r.modelValue !== ""
    ), V = I(() => {
      let g = r.options;
      if (z.value && l.value && !r.remote) {
        const b = l.value.toLowerCase();
        if (g = g.filter((k) => !!(H(k).toLowerCase().includes(b) || k.description && String(k.description).toLowerCase().includes(b))), r.creatable && l.value.trim()) {
          const k = l.value.trim(), U = r.creatablePrefix || a("common.search");
          g = [{ [r.valueKey]: k, [r.labelKey]: `${U} "${k}"`, _creatable: !0 }, ...g];
        }
      }
      return g;
    }), st = (g) => D(g) === r.modelValue, pt = (g) => {
      const b = V.value;
      if (b.length === 0) return -1;
      for (let k = 0; k < b.length; k++) {
        const U = (g + k) % b.length;
        if (!N(b[U])) return U;
      }
      return -1;
    }, Pt = (g) => {
      const b = V.value;
      if (b.length === 0) return -1;
      for (let k = 0; k < b.length; k++) {
        const U = (g - k + b.length) % b.length;
        if (!N(b[U])) return U;
      }
      return -1;
    }, Lt = (g, b) => {
      N(g) || j(g) || (m.value = b);
    }, ot = () => {
      x.value && (w.value = x.value.getBoundingClientRect());
    }, ct = () => {
      x.value && (ot(), it(() => {
        if (!C.value || !w.value) return;
        const g = C.value.offsetHeight || 240, b = window.innerHeight - w.value.bottom, k = w.value.top;
        b < g && k > g ? v.value = "top" : v.value = "bottom";
      }));
    }, kt = () => {
      r.disabled || (c.value = !c.value);
    };
    tt(c, (g) => {
      if (g) {
        if (ct(), V.value.length === 0)
          m.value = -1;
        else {
          const b = V.value.findIndex(st), k = b >= 0 ? b : 0;
          m.value = N(V.value[k]) ? pt(k + 1) : k;
        }
        z.value && it(() => {
          var b;
          return (b = A.value) == null ? void 0 : b.focus();
        }), window.addEventListener("scroll", ot, { capture: !0, passive: !0 }), window.addEventListener("resize", ct);
      } else
        l.value = "", m.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", ot, { capture: !0 }), window.removeEventListener("resize", ct);
    }), tt(l, (g) => {
      !r.remote || !c.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, o("search", g.trim());
      }, Ru));
    });
    const St = (g) => {
      var k;
      const b = D(g) ?? null;
      o("update:modelValue", b), o("change", b, g), c.value = !1, (k = _.value) == null || k.focus();
    }, ht = () => {
      r.disabled || (o("update:modelValue", null), o("change", null, null));
    }, X = () => {
      c.value || (c.value = !0);
    }, xt = (g) => {
      var b;
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), m.value = pt(m.value + 1), m.value >= 0 && yt();
          break;
        case "ArrowUp":
          g.preventDefault(), m.value = Pt(m.value - 1), m.value >= 0 && yt();
          break;
        case "Enter":
          if (g.preventDefault(), m.value >= 0 && m.value < V.value.length) {
            const k = V.value[m.value];
            N(k) || St(k);
          }
          break;
        case "Escape":
          g.preventDefault(), c.value = !1, (b = _.value) == null || b.focus();
          break;
        case "Tab":
          c.value = !1;
          break;
      }
    }, yt = () => {
      it(() => {
        const g = O.value;
        if (!g) return;
        const b = g.children[m.value];
        b && (b.offsetTop < g.scrollTop ? g.scrollTop = b.offsetTop : b.offsetTop + b.offsetHeight > g.scrollTop + g.offsetHeight && (g.scrollTop = b.offsetTop + b.offsetHeight - g.offsetHeight));
      });
    }, $t = (g) => {
      var at;
      const b = g.target, k = !!b.closest(`.${s}`), U = (at = x.value) == null ? void 0 : at.contains(b);
      !k && !U && c.value && (c.value = !1);
    };
    return vt(() => {
      document.addEventListener("click", $t);
    }), zt(() => {
      document.removeEventListener("click", $t), window.removeEventListener("scroll", ot, { capture: !0 }), window.removeEventListener("resize", ct), y && (clearTimeout(y), y = null);
    }), (g, b) => (p(), h("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: x
    }, [
      f("button", {
        ref_key: "triggerRef",
        ref: _,
        type: "button",
        onClick: kt,
        disabled: t.disabled,
        "aria-expanded": c.value,
        "aria-haspopup": !0,
        id: t.id,
        "aria-label": t.ariaLabel ?? "Select option",
        "aria-describedby": t.ariaDescribedby,
        class: M([
          "select-trigger",
          "console-skin-select-trigger",
          c.value && "select-trigger-open",
          t.error && "select-trigger-error",
          t.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          At(Z(X, ["prevent"]), ["down"]),
          At(Z(X, ["prevent"]), ["up"])
        ]
      }, [
        f("span", _u, [
          q(g.$slots, "selected", { option: G.value }, () => [
            lt(T(W.value), 1)
          ], !0)
        ]),
        t.clearable && Q.value && !t.disabled ? (p(), h("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Z(ht, ["stop"]),
          onMousedown: b[0] || (b[0] = Z(() => {
          }, ["stop"])),
          onKeydown: At(Z(ht, ["stop", "prevent"]), ["enter"])
        }, [
          et(nt, {
            name: "x",
            size: "sm"
          })
        ], 40, Iu)) : P("", !0),
        f("span", Au, [
          et(nt, {
            name: "chevronDown",
            size: "md",
            class: M(["transition-transform duration-200", c.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, Cu),
      (p(), wt(pe, { to: "body" }, [
        et(he, { name: "select-dropdown" }, {
          default: Mt(() => [
            c.value ? (p(), h("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: C,
              class: M(["select-dropdown-portal console-skin-select-menu", [s]]),
              style: Et(F.value),
              role: "listbox",
              onClick: b[3] || (b[3] = Z(() => {
              }, ["stop"])),
              onMousedown: b[4] || (b[4] = Z(() => {
              }, ["stop"])),
              onKeydown: xt
            }, [
              z.value ? (p(), h("div", Ou, [
                et(nt, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                ye(f("input", {
                  ref_key: "searchInputRef",
                  ref: A,
                  "onUpdate:modelValue": b[1] || (b[1] = (k) => l.value = k),
                  type: "text",
                  placeholder: R.value,
                  "aria-label": R.value,
                  class: "select-search-input",
                  onClick: b[2] || (b[2] = Z(() => {
                  }, ["stop"]))
                }, null, 8, Eu), [
                  [we, l.value]
                ])
              ])) : P("", !0),
              f("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: O
              }, [
                (p(!0), h(J, null, Y(V.value, (k, U) => (p(), h("div", {
                  key: `${typeof D(k)}:${String(D(k) ?? "")}`,
                  role: "option",
                  "aria-selected": st(k),
                  "aria-disabled": N(k),
                  onClick: Z((at) => !N(k) && St(k), ["stop"]),
                  onMouseenter: (at) => Lt(k, U),
                  class: M([
                    "select-option",
                    j(k) && "select-option-group",
                    st(k) && "select-option-selected",
                    N(k) && !j(k) && "select-option-disabled",
                    m.value === U && !j(k) && "select-option-focused"
                  ])
                }, [
                  q(g.$slots, "option", {
                    option: k,
                    selected: st(k)
                  }, () => [
                    k._creatable ? (p(), wt(nt, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : P("", !0),
                    f("span", {
                      class: M(["select-option-label", k._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, T(H(k)), 3),
                    st(k) ? (p(), wt(nt, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : P("", !0)
                  ], !0)
                ], 42, Mu))), 128)),
                V.value.length === 0 ? (p(), h("div", zu, T(r.loading ? L(a)("common.loading") : K.value), 1)) : P("", !0)
              ], 512)
            ], 38)) : P("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Lu = /* @__PURE__ */ Tt(Pu, [["__scopeId", "data-v-fbc717eb"]]), Bu = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, Du = { class: "flex flex-1 items-center justify-between sm:hidden" }, Uu = ["disabled"], Ku = { class: "text-sm text-gray-700 dark:text-gray-300" }, Fu = ["disabled"], Nu = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Wu = { class: "flex items-center space-x-4" }, Vu = { class: "text-sm text-gray-700 dark:text-gray-300" }, ju = { class: "font-medium" }, qu = { class: "font-medium" }, Hu = { class: "font-medium" }, Gu = {
  key: 0,
  class: "flex items-center space-x-2"
}, Qu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Ju = { class: "page-size-select w-20" }, Zu = {
  key: 1,
  class: "flex items-center space-x-2"
}, Xu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Yu = ["max", "placeholder"], td = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, ed = ["disabled", "aria-label"], ad = ["onClick", "disabled", "aria-label", "aria-current"], nd = ["disabled", "aria-label"], sd = /* @__PURE__ */ ut({
  __name: "Pagination",
  props: {
    total: {},
    page: {},
    pageSize: {},
    pageSizeOptions: { default: () => jt() },
    showPageSizeSelector: { type: Boolean, default: !0 },
    showJump: { type: Boolean, default: !1 }
  },
  emits: ["update:page", "update:pageSize"],
  setup(t, { emit: e }) {
    const { t: a } = Rt(), s = t, r = e, o = I(() => Math.ceil(s.total / s.pageSize)), c = I(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), l = I(() => {
      const v = s.page * s.pageSize;
      return v > s.total ? s.total : v;
    }), m = I(() => Array.from(
      /* @__PURE__ */ new Set([
        ...jt(),
        bt(s.pageSize)
      ])
    ).sort((w, S) => w - S).map((w) => ({
      value: w,
      label: String(w)
    }))), x = B(""), _ = I(() => {
      const v = [], S = o.value;
      if (S <= 7)
        for (let R = 1; R <= S; R++)
          v.push(R);
      else {
        v.push(1);
        const R = Math.max(2, s.page - 2), K = Math.min(S - 1, s.page + 2);
        R > 2 && v.push("...");
        for (let y = R; y <= K; y++)
          v.push(y);
        K < S - 1 && v.push("..."), v.push(S);
      }
      return v;
    }), A = (v) => {
      v >= 1 && v <= o.value && v !== s.page && r("update:page", v);
    }, C = (v) => {
      if (v === null || typeof v == "boolean") return;
      const w = bt(typeof v == "string" ? parseInt(v, 10) : v);
      $l(w), r("update:pageSize", w);
    }, O = () => {
      const v = x.value.trim();
      if (!v) return;
      const w = Number.parseInt(v, 10);
      if (Number.isNaN(w)) return;
      const S = Math.min(Math.max(w, 1), o.value);
      x.value = "", A(S);
    };
    return (v, w) => (p(), h("div", Bu, [
      f("div", Du, [
        f("button", {
          onClick: w[0] || (w[0] = (S) => A(t.page - 1)),
          disabled: t.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(L(a)("pagination.previous")), 9, Uu),
        f("span", Ku, T(L(a)("pagination.pageOf", { page: t.page, total: o.value })), 1),
        f("button", {
          onClick: w[1] || (w[1] = (S) => A(t.page + 1)),
          disabled: t.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(L(a)("pagination.next")), 9, Fu)
      ]),
      f("div", Nu, [
        f("div", Wu, [
          f("p", Vu, [
            lt(T(L(a)("pagination.showing")) + " ", 1),
            f("span", ju, T(c.value), 1),
            lt(" " + T(L(a)("pagination.to")) + " ", 1),
            f("span", qu, T(l.value), 1),
            lt(" " + T(L(a)("pagination.of")) + " ", 1),
            f("span", Hu, T(t.total), 1),
            lt(" " + T(L(a)("pagination.results")), 1)
          ]),
          t.showPageSizeSelector ? (p(), h("div", Gu, [
            f("span", Qu, T(L(a)("pagination.perPage")) + ":", 1),
            f("div", Ju, [
              et(Lu, {
                "model-value": t.pageSize,
                options: m.value,
                "onUpdate:modelValue": C
              }, null, 8, ["model-value", "options"])
            ])
          ])) : P("", !0),
          t.showJump ? (p(), h("div", Zu, [
            f("span", Xu, T(L(a)("pagination.jumpTo")), 1),
            ye(f("input", {
              "onUpdate:modelValue": w[2] || (w[2] = (S) => x.value = S),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: L(a)("pagination.jumpPlaceholder"),
              onKeyup: At(O, ["enter"])
            }, null, 40, Yu), [
              [we, x.value]
            ]),
            f("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: O
            }, T(L(a)("pagination.jumpAction")), 1)
          ])) : P("", !0)
        ]),
        f("nav", td, [
          f("button", {
            onClick: w[3] || (w[3] = (S) => A(t.page - 1)),
            disabled: t.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": L(a)("pagination.previous")
          }, [
            et(nt, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, ed),
          (p(!0), h(J, null, Y(_.value, (S, R) => (p(), h("button", {
            key: `${S}-${R}`,
            onClick: (K) => typeof S == "number" && A(S),
            disabled: typeof S != "number",
            class: M([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              S === t.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof S != "number" && "cursor-default"
            ]),
            "aria-label": typeof S == "number" ? L(a)("pagination.goToPage", { page: S }) : void 0,
            "aria-current": S === t.page ? "page" : void 0
          }, T(S), 11, ad))), 128)),
          f("button", {
            onClick: w[4] || (w[4] = (S) => A(t.page + 1)),
            disabled: t.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": L(a)("pagination.next")
          }, [
            et(nt, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, nd)
        ])
      ])
    ]));
  }
}), xd = /* @__PURE__ */ Tt(sd, [["__scopeId", "data-v-8e9f9f74"]]), rd = { class: "modal-header" }, id = {
  key: 0,
  class: "modal-footer"
}, od = /* @__PURE__ */ ut({
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
    const s = `modal-title-${++a}`, r = B(null), o = B(null);
    let c = null;
    const l = t, m = e, x = I(() => l.zIndex !== 50 ? { zIndex: l.zIndex } : void 0), _ = I(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[l.width]), A = () => {
      l.closeOnClickOutside && m("close");
    }, C = (O) => {
      l.show && l.closeOnEscape && O.key === "Escape" && m("close");
    };
    return tt(
      () => l.show,
      async (O) => {
        if (O) {
          if (c = document.activeElement, document.body.classList.add("modal-open"), await it(), o.value && (o.value.scrollTop = 0), r.value) {
            const v = r.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            v == null || v.focus();
          }
        } else
          document.body.classList.remove("modal-open"), c && typeof c.focus == "function" && c.focus(), c = null;
      },
      { immediate: !0 }
    ), vt(() => {
      document.addEventListener("keydown", C);
    }), zt(() => {
      document.removeEventListener("keydown", C), document.body.classList.remove("modal-open");
    }), (O, v) => (p(), wt(pe, { to: "body" }, [
      et(he, { name: "modal" }, {
        default: Mt(() => [
          t.show ? (p(), h("div", {
            key: 0,
            class: "modal-overlay",
            style: Et(x.value),
            "aria-labelledby": s,
            role: "dialog",
            "aria-modal": "true",
            onClick: Z(A, ["self"])
          }, [
            f("div", {
              ref_key: "dialogRef",
              ref: r,
              class: M(["modal-content", "base-dialog-surface", "console-skin-dialog", _.value, t.panelClass]),
              onClick: v[1] || (v[1] = Z(() => {
              }, ["stop"]))
            }, [
              f("div", rd, [
                f("h3", {
                  id: s,
                  class: "modal-title"
                }, T(t.title), 1),
                t.showCloseButton ? (p(), h("button", {
                  key: 0,
                  onClick: v[0] || (v[0] = (w) => m("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  et(nt, {
                    name: "x",
                    size: "md"
                  })
                ])) : P("", !0)
              ]),
              f("div", {
                ref_key: "modalBodyRef",
                ref: o,
                class: "modal-body"
              }, [
                q(O.$slots, "default")
              ], 512),
              O.$slots.footer ? (p(), h("div", id, [
                q(O.$slots, "footer")
              ])) : P("", !0)
            ], 2)
          ], 4)) : P("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), cd = { class: "space-y-4" }, ld = { class: "text-sm text-gray-600 dark:text-gray-400" }, ud = { class: "flex justify-end space-x-3" }, $d = /* @__PURE__ */ ut({
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
    const { t: a } = Rt(), s = t, r = I(() => s.confirmText || a("common.confirm")), o = I(() => s.cancelText || a("common.cancel")), c = e, l = () => {
      c("confirm");
    }, m = () => {
      c("cancel");
    };
    return (x, _) => (p(), wt(od, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: m
    }, {
      footer: Mt(() => [
        f("div", ud, [
          f("button", {
            onClick: m,
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 dark:focus:ring-offset-dark-800"
          }, T(o.value), 1),
          f("button", {
            onClick: l,
            type: "button",
            class: M([
              "rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800",
              t.danger ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
            ])
          }, T(r.value), 3)
        ])
      ]),
      default: Mt(() => [
        f("div", cd, [
          f("p", ld, T(t.message), 1),
          q(x.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
});
function dd(t) {
  var s, r;
  if (!t || typeof t != "object") return;
  const e = t, a = e.reason ?? e.code ?? ((r = (s = e.response) == null ? void 0 : s.data) == null ? void 0 : r.code);
  return a != null ? String(a) : void 0;
}
function md(t) {
  return !t || typeof t != "object" ? void 0 : t.metadata;
}
function ge(t, e, a) {
  const s = t(e);
  if (s === e) return a;
  const r = t.te;
  return r && !r(e) ? a : s;
}
function fd(t, e) {
  const a = { ...t };
  return typeof a.key == "string" && (a.key = ge(e, `admin.settings.payment.field_${a.key}`, a.key)), typeof a.keys == "string" && (a.keys = a.keys.split("/").map((s) => ge(e, `admin.settings.payment.field_${s}`, s)).join(" / ")), a;
}
function Cd(t, e, a, s) {
  const r = dd(t);
  if (r) {
    const o = `${a}.${r}`, c = md(t) ?? {}, l = fd(c, e), m = e(o, l);
    if (m !== o) return m;
    const x = e.te;
    if (x && x(o)) return m;
  }
  return gd(t, s);
}
function gd(t, e = "Unknown error", a) {
  var r, o, c, l;
  if (!t) return e;
  if (typeof t == "object" && t !== null) {
    const m = t;
    if (m.message) return m.message;
    if (m.error) return m.error;
    if ((o = (r = m.response) == null ? void 0 : r.data) != null && o.detail) return m.response.data.detail;
    if ((l = (c = m.response) == null ? void 0 : c.data) != null && l.message) return m.response.data.message;
  }
  if (t instanceof Error) return t.message;
  const s = String(t);
  return s === "[object Object]" ? e : s;
}
const _d = /* @__PURE__ */ ut({
  __name: "PlatformIcon",
  props: {
    platform: {},
    size: { default: "sm" }
  },
  setup(t) {
    const e = t, a = I(() => ({
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    })[e.size] + " flex-shrink-0");
    return (s, r) => t.platform === "anthropic" ? (p(), h("svg", {
      key: 0,
      class: M(a.value),
      viewBox: "0 0 16 16",
      fill: "currentColor"
    }, [...r[0] || (r[0] = [
      f("path", { d: "m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" }, null, -1)
    ])], 2)) : t.platform === "openai" ? (p(), h("svg", {
      key: 1,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[1] || (r[1] = [
      f("path", { d: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" }, null, -1)
    ])], 2)) : t.platform === "gemini" ? (p(), h("svg", {
      key: 2,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[2] || (r[2] = [
      f("path", { d: "M12 2l1.89 7.2L21 12l-7.11 2.8L12 22l-1.89-7.2L3 12l7.11-2.8L12 2z" }, null, -1)
    ])], 2)) : t.platform === "antigravity" ? (p(), h("svg", {
      key: 3,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[3] || (r[3] = [
      f("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" }, null, -1)
    ])], 2)) : t.platform === "grok" ? (p(), h("svg", {
      key: 4,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[4] || (r[4] = [
      f("path", { d: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" }, null, -1)
    ])], 2)) : t.platform === "kimi" ? (p(), h("svg", {
      key: 5,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[5] || (r[5] = [
      f("path", { d: "M21.765.351C22.998.351 24 1.353 24 2.586S22.998 4.82 21.765 4.82h-1.974c-.15 0-.26-.12-.26-.26V2.586A2.237 2.237 0 0 1 21.765.35M9.41 13.388l8.447-8.377c.16-.16.07-.471-.14-.471h-4.55s-.1.02-.14.06l-9.099 9.029c-.14.14-.35.02-.35-.21V4.81c0-.15-.1-.27-.221-.27H.22c-.12 0-.22.12-.22.27v18.57c0 .15.1.27.22.27h3.137c.12 0 .22-.12.22-.27v-3.79c0-.08.03-.16.08-.21l2.826-2.796c.07-.07.16-.08.241-.03l7.546 5.551a8.9 8.9 0 0 0 4.018 1.493c.12.01.23-.11.23-.27V19.76c0-.14-.08-.25-.19-.26a5.8 5.8 0 0 1-2.355-.942l-6.533-4.73c-.14-.09-.15-.32-.03-.441" }, null, -1)
    ])], 2)) : t.platform === "zhipu" ? (p(), h("svg", {
      key: 6,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[6] || (r[6] = [
      f("path", {
        "fill-rule": "evenodd",
        d: "M11.991 23.503a.24.24 0 0 0-.244.248a.24.24 0 0 0 .244.249a.24.24 0 0 0 .245-.249a.24.24 0 0 0-.22-.247zM9.671 5.365a1.697 1.697 0 0 1 1.099 2.132l-.071.172l-.016.04l-.018.054c-.07.16-.104.32-.104.498c-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523c-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368c0 .124.018.23.053.337c.209.373.54.658.96.8c.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711c.854.284 1.378 1.226 1.099 2.167a1.66 1.66 0 0 1-2.077 1.102a1.7 1.7 0 0 1-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 0 0-1.954.746a1.66 1.66 0 0 1-1.065.764a1.677 1.677 0 0 1-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.5 1.5 0 0 1 .296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.3 1.3 0 0 0-.227-.693a2.5 2.5 0 0 1-.366-1.403a2.4 2.4 0 0 1 .366-1.208c.14-.195.21-.444.227-.693c.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.4 1.4 0 0 1-.299-.07l-.05-.019a1.7 1.7 0 0 1-1.047-2.114a1.68 1.68 0 0 1 2.094-1.101m-5.575 10.11c.26-.264.639-.367.994-.27s.633.379.728.74c.095.362-.007.748-.267 1.013c-.402.41-1.053.41-1.455 0a1.06 1.06 0 0 1 0-1.482zm14.845-.294c.359-.09.738.024.992.297c.254.274.344.665.237 1.025s-.396.634-.756.718c-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 0 1 .757-1.26zm-.064-4.39c.314.32.49.753.49 1.206s-.176.886-.49 1.206c-.315.32-.74.5-1.185.5c-.444 0-.87-.18-1.184-.5a1.727 1.727 0 0 1 0-2.412a1.654 1.654 0 0 1 2.369 0m-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 0 1-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 0 1 1.33-1.038a1.66 1.66 0 0 1 1.547.652m11.545-4.221c.368 0 .708.2.892.524s.184.724 0 1.048a1.03 1.03 0 0 1-.892.524a1.04 1.04 0 0 1-1.03-1.048a1.04 1.04 0 0 1 1.03-1.048m-14.358 0c.368 0 .707.2.891.524s.184.724 0 1.048a1.03 1.03 0 0 1-.891.524a1.04 1.04 0 0 1-1.03-1.048c0-.579.461-1.048 1.03-1.048m10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705s-1.674-.763-1.674-1.705s.75-1.706 1.674-1.706m-2.626-.684c.362-.082.653-.356.761-.718a1.06 1.06 0 0 0-.238-1.028a1.02 1.02 0 0 0-.996-.294c-.547.14-.881.7-.752 1.257c.13.558.675.907 1.225.783m0 16.876c.359-.087.644-.36.75-.72a1.06 1.06 0 0 0-.237-1.019a1.02 1.02 0 0 0-.985-.301a1.04 1.04 0 0 0-.762.717c-.108.361-.017.754.239 1.028c.245.263.606.377.953.305zM17.19 3.5a.63.63 0 0 0 .628-.64a.63.63 0 0 0-.628-.64a.63.63 0 0 0-.628.64c0 .355.28.64.628.64m-10.38 0a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64a.63.63 0 0 0-.628.64c0 .355.279.64.628.64m-5.182 7.852a.63.63 0 0 0-.628.64c0 .354.28.639.628.639a.63.63 0 0 0 .627-.606l.001-.034a.62.62 0 0 0-.628-.64zm5.182 9.13a.63.63 0 0 0-.628.64c0 .355.279.64.628.64a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64m10.38.018a.63.63 0 0 0-.628.64c0 .355.28.64.628.64a.63.63 0 0 0 .628-.64a.63.63 0 0 0-.628-.64m5.182-9.148a.63.63 0 0 0-.628.64c0 .354.279.639.628.639a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 0 0 .244-.249a.24.24 0 0 0-.244-.249a.24.24 0 0 0-.244.249c0 .142.122.249.244.249M11.991.497a.24.24 0 0 0 .245-.248A.24.24 0 0 0 11.99 0a.24.24 0 0 0-.244.249c0 .133.108.236.223.247zM2.011 6.36a.24.24 0 0 0 .245-.249a.24.24 0 0 0-.244-.249a.24.24 0 0 0-.244.249a.24.24 0 0 0 .244.249zm0 11.263a.24.24 0 0 0-.243.248a.24.24 0 0 0 .244.249a.24.24 0 0 0 .244-.249a.25.25 0 0 0-.244-.248zm19.995-.018a.24.24 0 0 0-.245.248a.24.24 0 0 0 .245.25a.24.24 0 0 0 .244-.25a.25.25 0 0 0-.244-.248z"
      }, null, -1)
    ])], 2)) : t.platform === "deepseek" ? (p(), h("svg", {
      key: 7,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, [...r[7] || (r[7] = [
      f("path", { d: "M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136a9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287a.3.3 0 0 1 .113.074a.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078a.253.253 0 0 1-.114-.358a1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45" }, null, -1)
    ])], 2)) : t.platform === "composite" ? (p(), h("svg", {
      key: 8,
      class: M(a.value),
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }, [...r[8] || (r[8] = [
      f("circle", {
        cx: "6",
        cy: "12",
        r: "3"
      }, null, -1),
      f("circle", {
        cx: "18",
        cy: "6",
        r: "3"
      }, null, -1),
      f("circle", {
        cx: "18",
        cy: "18",
        r: "3"
      }, null, -1),
      f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M8.7 10.7 15.3 7.3M8.7 13.3l6.6 3.4"
      }, null, -1)
    ])], 2)) : (p(), h("svg", {
      key: 9,
      class: M(a.value),
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, [...r[9] || (r[9] = [
      f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }, null, -1)
    ])], 2));
  }
});
let pd = 0;
function Id(t = "item") {
  const e = /* @__PURE__ */ new WeakMap();
  return (a) => {
    const s = e.get(a);
    if (s)
      return s;
    const r = `${t}-${++pd}`;
    return e.set(a, r), r;
  };
}
const hd = [
  { value: "anthropic", label: "Anthropic" },
  { value: "openai", label: "OpenAI" },
  { value: "gemini", label: "Gemini" },
  { value: "antigravity", label: "Antigravity" },
  { value: "grok", label: "Grok" },
  { value: "kimi", label: "Kimi" },
  { value: "zhipu", label: "Zhipu GLM" },
  { value: "deepseek", label: "DeepSeek" }
], Ad = [
  ...hd,
  { value: "composite", label: "Composite" }
];
export {
  hd as C,
  Sd as D,
  Ad as G,
  xd as P,
  Lu as S,
  kd as T,
  _d as _,
  En as a,
  bd as b,
  gd as c,
  Xn as d,
  Cd as e,
  Id as f,
  vd as g,
  od as h,
  $d as i,
  Dn as j,
  wd as k,
  Bn as r,
  $l as s
};
