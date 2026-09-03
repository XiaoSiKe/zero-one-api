import { B as n, a4 as De, a5 as Be, c as I, e as P, Q as Le, E as tt, a6 as ne, M as Ue, d as pt, u as kt, j as D, s as Tt, m as Vt, o as y, a as k, F as Q, r as Y, b as f, g as z, a0 as Z, h as at, _ as et, t as T, n as N, w as J, f as rt, G as Mt, V as ot, l as jt, J as Ot, k as ct, a1 as pe, a2 as he, v as vt, x as ye, y as we, a7 as se } from "./cnProviderAdminLeaf-DkKZCNPa.js";
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
  const i = {
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
      l && (i[`attr[${c}]`] = l);
  const { data: o } = await n.get("/admin/users", {
    params: i,
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
  const { data: i } = await n.post(`/admin/users/${t}/balance`, {
    balance: e,
    operation: a,
    notes: s || ""
  });
  return i;
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
async function ia(t, e) {
  return qt(t, { status: e });
}
async function ra(t) {
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
  const i = { page: e, page_size: a };
  s && (i.type = s);
  const { data: o } = await n.get(
    `/admin/users/${t}/balance-history`,
    { params: i }
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
  toggleStatus: ia,
  getUserApiKeys: ra,
  getUserUsageStats: oa,
  getUserBalanceHistory: ca,
  replaceGroup: la,
  bindUserAuthIdentity: ua,
  getPlatformQuotas: da,
  updatePlatformQuotas: ma,
  resetPlatformQuotaWindow: ga
};
async function pa(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/groups", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return i;
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
const Lt = /* @__PURE__ */ new Map();
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
function ie(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Ca(t) {
  var i, o;
  const e = xa(t);
  let a = e ? Lt.get(e.key) ?? $a(e.key) : null;
  if (!a) {
    const c = ((o = (i = globalThis.crypto) == null ? void 0 : i.randomUUID) == null ? void 0 : o.call(i)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `group-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (Lt.set(e.key, a), ie(e.key, a));
  const { data: s } = await n.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return e && (Lt.delete(e.key), ie(e.key, null)), s;
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
async function Ta(t, e) {
  const { data: a } = await n.post(
    `/admin/groups/${t}/composite-routes`,
    e
  );
  return a;
}
async function Ma(t, e, a) {
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
async function La(t, e) {
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
  createCompositeRoute: Ta,
  updateCompositeRoute: Ma,
  deleteCompositeRoute: Ra,
  previewCompositeRoute: za,
  getGroupRateMultipliers: Pa,
  clearGroupRateMultipliers: Ba,
  batchSetGroupRateMultipliers: La,
  getGroupRPMOverrides: Ua,
  clearGroupRPMOverrides: Fa,
  batchSetGroupRPMOverrides: Ka,
  updateSortOrder: Da,
  getUsageSummary: Na,
  getCapacitySummary: Wa
};
async function ja(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/accounts", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function qa(t = 1, e = 20, a, s) {
  var l;
  const i = {};
  s != null && s.etag && (i["If-None-Match"] = s.etag);
  const o = await n.get("/admin/accounts", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    headers: i,
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
const Ut = /* @__PURE__ */ new Map();
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
function re(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(Nt(t), e) : (s = globalThis.sessionStorage) == null || s.removeItem(Nt(t));
  } catch {
  }
}
async function Ja(t) {
  var s, i;
  let e = Ut.get(t) ?? Qa(t);
  if (!e) {
    const o = ((i = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : i.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    e = `account-duplicate-${t}-${o}`;
  }
  Ut.set(t, e), re(t, e);
  const { data: a } = await n.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": e }
  });
  return Ut.delete(t), re(t, null), a;
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
  const { data: i } = await n.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return i;
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
async function gn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function fn(t, e) {
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
    const { platform: s, type: i, status: o, group: c, privacy_mode: l, search: m, sort_by: C, sort_order: _ } = t.filters;
    s && (e.platform = s), i && (e.type = i), o && (e.status = o), c && (e.group = c), l && (e.privacy_mode = l), m && (e.search = m), C && (e.sort_by = C), _ && (e.sort_order = _);
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
async function Tn(t, e, a = "/admin/openai/refresh-token", s) {
  const i = {
    refresh_token: t
  };
  e && (i.proxy_id = e), s && (i.client_id = s);
  const { data: o } = await n.post(a, i);
  return o;
}
async function Mn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/revert-proxy-fallback`);
  return e;
}
async function Rn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-delete", {
    account_ids: t
  });
  return e;
}
async function zn(t) {
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
async function Dn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/set-privacy`);
  return e;
}
async function Bn(t) {
  const { data: e } = await n.post(
    `/admin/openai/accounts/${t}/quota/refresh`
  );
  return e;
}
async function Ln(t) {
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
  generateAuthUrl: gn,
  exchangeCode: fn,
  refreshOpenAIToken: Tn,
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
  batchDelete: Rn,
  batchClearError: zn,
  batchRefresh: Pn,
  setPrivacy: Dn,
  revertProxyFallback: Mn,
  refreshOpenAIQuota: Bn,
  resetOpenAIQuota: Ln,
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
  const { data: i } = await n.get("/admin/proxies", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return i;
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
async function is(t, e) {
  return Se(t, { status: e });
}
async function rs(t) {
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
    const { protocol: s, status: i, search: o, sort_by: c, sort_order: l } = t.filters;
    s && (e.protocol = s), i && (e.status = i), o && (e.search = o), c && (e.sort_by = c), l && (e.sort_order = l);
  }
  const { data: a } = await n.get("/admin/proxies/data", { params: e });
  return a;
}
async function gs(t) {
  const { data: e } = await n.post("/admin/proxies/data", t);
  return e;
}
const fs = {
  list: Yn,
  getAll: ts,
  getAllWithCount: es,
  getById: as,
  create: ns,
  update: Se,
  delete: ss,
  toggleStatus: is,
  testProxy: rs,
  checkProxyQuality: os,
  getStats: cs,
  getProxyAccounts: ls,
  batchCreate: us,
  batchDelete: ds,
  exportData: ms,
  importData: gs
};
async function ps(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/redeem-codes", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function hs(t) {
  const { data: e } = await n.get(`/admin/redeem-codes/${t}`);
  return e;
}
async function ys(t, e, a, s, i, o, c, l) {
  const m = {
    count: t,
    type: e,
    value: a
  };
  e === "subscription" && (m.group_id = s, i && i > 0 && (m.validity_days = i)), e === "mystery_box" && (m.min_value = c, m.max_value = l), o && o > 0 && (m.expires_in_days = o);
  const { data: C } = await n.post("/admin/redeem-codes/generate", m);
  return C;
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
  const { data: i } = await n.get("/admin/promo-codes", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return i;
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
const Ts = {
  list: Cs,
  getById: _s,
  create: Is,
  update: As,
  delete: Os,
  getUsages: Es
};
async function Ms(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/announcements", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function Rs(t) {
  const { data: e } = await n.get(`/admin/announcements/${t}`);
  return e;
}
async function zs(t) {
  const { data: e } = await n.post("/admin/announcements", t);
  return e;
}
async function Ps(t, e) {
  const { data: a } = await n.put(`/admin/announcements/${t}`, e);
  return a;
}
async function Ds(t) {
  const { data: e } = await n.delete(`/admin/announcements/${t}`);
  return e;
}
async function Bs(t, e = 1, a = 20, s, i) {
  const { data: o } = await n.get(
    `/admin/announcements/${t}/read-status`,
    {
      params: { page: e, page_size: a, ...s },
      signal: i == null ? void 0 : i.signal
    }
  );
  return o;
}
const Ls = {
  list: Ms,
  getById: Rs,
  create: zs,
  update: Ps,
  delete: Ds,
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
async function ti() {
  const { data: t } = await n.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function ei(t) {
  const { data: e } = await n.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return e;
}
async function ai() {
  const { data: t } = await n.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function ni(t) {
  const { data: e } = await n.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return e;
}
async function si() {
  const { data: t } = await n.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function ii(t) {
  const { data: e } = await n.put(
    "/admin/settings/stream-timeout",
    t
  );
  return e;
}
async function ri() {
  const { data: t } = await n.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function oi(t) {
  const { data: e } = await n.put(
    "/admin/settings/rectifier",
    t
  );
  return e;
}
async function ci() {
  const { data: t } = await n.get(
    "/admin/settings/beta-policy"
  );
  return t;
}
async function li(t) {
  const { data: e } = await n.put(
    "/admin/settings/beta-policy",
    t
  );
  return e;
}
async function ui() {
  const { data: t } = await n.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function di(t) {
  const { data: e } = await n.put(
    "/admin/settings/web-search-emulation",
    t
  );
  return e;
}
async function mi(t) {
  const { data: e } = await n.post(
    "/admin/settings/web-search-emulation/test",
    { query: t }
  );
  return e;
}
async function gi(t) {
  await n.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const fi = {
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
  getRateLimit429CooldownSettings: ti,
  updateRateLimit429CooldownSettings: ei,
  getPanelRateLimitSettings: ai,
  updatePanelRateLimitSettings: ni,
  getStreamTimeoutSettings: si,
  updateStreamTimeoutSettings: ii,
  getRectifierSettings: ri,
  updateRectifierSettings: oi,
  getBetaPolicySettings: ci,
  updateBetaPolicySettings: li,
  getWebSearchEmulationConfig: ui,
  updateWebSearchEmulationConfig: di,
  testWebSearchEmulation: mi,
  resetWebSearchUsage: gi
};
async function pi(t = 1, e = 20, a, s) {
  const { data: i } = await n.get(
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
  return i;
}
async function hi(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}`);
  return e;
}
async function yi(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}/progress`);
  return e;
}
async function wi(t) {
  const { data: e } = await n.post("/admin/subscriptions/assign", t);
  return e;
}
async function bi(t) {
  const { data: e } = await n.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return e;
}
async function vi(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/extend`,
    e
  );
  return a;
}
async function ki(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/revoke`);
  return e;
}
async function Si(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/restore`);
  return e;
}
async function xi(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/reset-quota`,
    e
  );
  return a;
}
async function $i(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
async function Ci(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
const _i = {
  list: pi,
  getById: hi,
  getProgress: yi,
  assign: wi,
  bulkAssign: bi,
  extend: vi,
  revoke: ki,
  restore: Si,
  resetQuota: xi,
  listByGroup: $i,
  listByUser: Ci
};
async function Ii(t, e) {
  const { data: a } = await n.get("/admin/usage", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Ai(t) {
  const { data: e } = await n.get("/admin/usage/stats", {
    params: t
  });
  return e;
}
async function Oi(t) {
  const { data: e } = await n.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return e;
}
async function Ei(t, e) {
  const a = {};
  t !== void 0 && (a.user_id = t), e && (a.q = e);
  const { data: s } = await n.get("/admin/usage/search-api-keys", {
    params: a
  });
  return s;
}
async function Ti(t, e) {
  const { data: a } = await n.get("/admin/usage/cleanup-tasks", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Mi(t) {
  const { data: e } = await n.post("/admin/usage/cleanup-tasks", t);
  return e;
}
async function Ri(t) {
  const { data: e } = await n.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return e;
}
const zi = {
  list: Ii,
  getStats: Ai,
  searchUsers: Oi,
  searchApiKeys: Ei,
  listCleanupTasks: Ti,
  createCleanupTask: Mi,
  cancelCleanupTask: Ri
};
async function Pi(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return e;
}
async function Di(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return e;
}
async function Bi() {
  const { data: t } = await n.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Li = { generateAuthUrl: Pi, exchangeCode: Di, getCapabilities: Bi };
async function Ui(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return e;
}
async function Ki(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return e;
}
async function Fi(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/antigravity/oauth/refresh-token",
    a
  );
  return s;
}
const Ni = { generateAuthUrl: Ui, exchangeCode: Ki, refreshAntigravityToken: Fi }, xe = 12e4;
async function Wi() {
  const { data: t } = await n.get("/admin/grok/oauth/capabilities");
  return t;
}
const Vi = 3, ji = 9e4, qi = 9e4;
function Hi(t) {
  return Math.ceil(Math.max(1, t) / Vi) * ji + qi;
}
async function Gi(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return e;
}
async function Qi(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return e;
}
async function Ji(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/grok/oauth/refresh-token",
    a
  );
  return s;
}
async function Zi(t) {
  const { data: e } = await n.get(`/admin/grok/accounts/${t}/quota`);
  return e;
}
async function Xi(t) {
  const { data: e } = await n.post(`/admin/grok/accounts/${t}/reset-quota`);
  return e;
}
async function Yi(t) {
  const { data: e } = await n.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Hi(t.sso_tokens.length) }
  );
  return e;
}
async function tr(t, e) {
  const a = { sso_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post("/admin/grok/oauth/sso-token", a, {
    timeout: xe
  });
  return s;
}
async function er(t, e) {
  const a = "----", s = t.indexOf(a), i = (s >= 0 ? t.slice(0, s) : t).trim(), o = s >= 0 ? t.slice(s + a.length) : "", c = { email: i, password: o };
  e && (c.proxy_id = e);
  const { data: l } = await n.post("/admin/grok/oauth/password", c, {
    timeout: xe
  });
  return l;
}
const ar = {
  generateAuthUrl: Gi,
  getCapabilities: Wi,
  exchangeCode: Qi,
  refreshGrokToken: Ji,
  queryQuota: Zi,
  resetQuota: Xi,
  createFromSSO: Yi,
  validateSSOToken: tr,
  authorizePassword: er
};
async function nr(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return e;
}
async function sr(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return e;
}
const ir = {
  queryQuota: nr,
  queryBalance: sr
};
async function rr() {
  const { data: t } = await n.get("/admin/user-attributes");
  return t;
}
async function or() {
  const { data: t } = await n.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function cr(t) {
  const { data: e } = await n.post("/admin/user-attributes", t);
  return e;
}
async function lr(t, e) {
  const { data: a } = await n.put(
    `/admin/user-attributes/${t}`,
    e
  );
  return a;
}
async function ur(t) {
  const { data: e } = await n.delete(`/admin/user-attributes/${t}`);
  return e;
}
async function dr(t) {
  const { data: e } = await n.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return e;
}
async function mr(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/attributes`
  );
  return e;
}
async function gr(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/attributes`,
    { values: e }
  );
  return a;
}
async function fr(t) {
  const { data: e } = await n.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return e;
}
const pr = {
  listDefinitions: rr,
  listEnabledDefinitions: or,
  createDefinition: cr,
  updateDefinition: lr,
  deleteDefinition: ur,
  reorderDefinitions: dr,
  getUserAttributeValues: mr,
  updateUserAttributeValues: gr,
  getBatchUserAttributes: fr
};
async function hr(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/concurrency", { params: a });
  return s;
}
async function yr() {
  const { data: t } = await n.get("/admin/ops/user-concurrency");
  return t;
}
async function wr(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/account-availability", { params: a });
  return s;
}
async function br(t, e, a) {
  const s = { window: t };
  e && (s.platform = e), typeof a == "number" && a > 0 && (s.group_id = a);
  const { data: i } = await n.get("/admin/ops/realtime-traffic", { params: s });
  return i;
}
const vr = {
  REALTIME_DISABLED: 4001
}, kr = "sub2api-admin";
function Sr(t, e = {}) {
  let a = null, s = 0;
  const i = Number.isFinite(e.maxReconnectAttempts) ? e.maxReconnectAttempts : 1 / 0, o = e.reconnectBaseDelayMs ?? 1e3, c = e.reconnectMaxDelayMs ?? 3e4;
  let l = null, m = !0, C = !1, _ = !1, A = 0;
  const $ = e.staleTimeoutMs ?? 12e4, O = e.staleCheckIntervalMs ?? 3e4;
  let b = null;
  const h = (q) => {
    var F;
    (F = e.onStatusChange) == null || F.call(e, q);
  }, S = () => {
    l && (clearTimeout(l), l = null);
  }, R = () => {
    b && (clearInterval(b), b = null);
  }, U = () => {
    R(), !(!$ || $ <= 0) && (b = setInterval(() => {
      if (!m || !a || a.readyState !== WebSocket.OPEN || !A) return;
      Date.now() - A > $ && a.close();
    }, O));
  }, p = () => {
    var H;
    if (!m || _ && s >= i) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      h("offline");
      return;
    }
    const q = o * Math.pow(2, s), F = Math.min(q, c), j = Math.floor(Math.random() * 250);
    S(), l = setTimeout(() => {
      s++, B();
    }, F + j), (H = e.onReconnectScheduled) == null || H.call(e, { attempt: s + 1, delayMs: F + j });
  }, M = () => {
    m && (a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || B());
  }, K = () => {
    h("offline");
  }, B = () => {
    if (!m || C || a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || _ && s >= i) return;
    C = !0, h(_ ? "reconnecting" : "connecting");
    const q = e.wsBaseUrl || void 0, F = q ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${q}/api/v1/admin/ops/ws/qps`) : new URL(De("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), j = String(e.token ?? localStorage.getItem("auth_token") ?? "").trim(), H = [kr];
    j && H.push(`jwt.${j}`), a = new WebSocket(F.toString(), H), a.onopen = () => {
      var W;
      s = 0, C = !1, _ = !0, S(), A = Date.now(), U(), h("connected"), (W = e.onOpen) == null || W.call(e);
    }, a.onmessage = (W) => {
      try {
        const G = JSON.parse(W.data);
        A = Date.now(), t(G);
      } catch (G) {
        console.warn("[OpsWS] Failed to parse message:", G);
      }
    }, a.onerror = (W) => {
      var G;
      console.error("[OpsWS] Connection error:", W), (G = e.onError) == null || G.call(e, W);
    }, a.onclose = (W) => {
      var G, V;
      if (C = !1, (G = e.onClose) == null || G.call(e, W), R(), a = null, W && typeof W.code == "number" && W.code === vr.REALTIME_DISABLED) {
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
async function xr(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function $r(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Cr(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function _r(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ir(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ar(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Or(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Er(t) {
  const { data: e } = await n.get("/admin/ops/errors", { params: t });
  return e;
}
async function Tr(t) {
  const { data: e } = await n.get(`/admin/ops/errors/${t}`);
  return e;
}
async function Mr(t, e) {
  await n.put(`/admin/ops/errors/${t}/resolve`, { resolved: e });
}
async function Rr(t) {
  const { data: e } = await n.get("/admin/ops/request-errors", { params: t });
  return e;
}
async function zr(t) {
  const { data: e } = await n.get("/admin/ops/upstream-errors", { params: t });
  return e;
}
async function Pr(t) {
  const { data: e } = await n.get(`/admin/ops/request-errors/${t}`);
  return e;
}
async function Dr(t) {
  const { data: e } = await n.get(`/admin/ops/upstream-errors/${t}`);
  return e;
}
async function Br(t, e) {
  await n.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: e });
}
async function Lr(t, e) {
  await n.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: e });
}
async function Ur(t, e = {}, a = {}) {
  const s = { ...e };
  a.include_detail && (s.include_detail = "1");
  const { data: i } = await n.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return i;
}
async function Kr(t) {
  const { data: e } = await n.get("/admin/ops/requests", { params: t });
  return e;
}
async function Fr() {
  const { data: t } = await n.get("/admin/ops/alert-rules");
  return t;
}
async function Nr(t) {
  const { data: e } = await n.post("/admin/ops/alert-rules", t);
  return e;
}
async function Wr(t, e) {
  const { data: a } = await n.put(`/admin/ops/alert-rules/${t}`, e);
  return a;
}
async function Vr(t) {
  await n.delete(`/admin/ops/alert-rules/${t}`);
}
async function jr(t = {}) {
  const { data: e } = await n.get("/admin/ops/alert-events", { params: t });
  return e;
}
async function qr(t) {
  const { data: e } = await n.get(`/admin/ops/alert-events/${t}`);
  return e;
}
async function Hr(t, e) {
  await n.put(`/admin/ops/alert-events/${t}/status`, { status: e });
}
async function Gr(t) {
  await n.post("/admin/ops/alert-silences", t);
}
async function Qr() {
  const { data: t } = await n.get("/admin/ops/email-notification/config");
  return t;
}
async function Jr(t) {
  const { data: e } = await n.put("/admin/ops/email-notification/config", t);
  return e;
}
async function Zr() {
  const { data: t } = await n.get("/admin/ops/runtime/alert");
  return t;
}
async function Xr(t) {
  const { data: e } = await n.put("/admin/ops/runtime/alert", t);
  return e;
}
async function Yr() {
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
async function io() {
  const { data: t } = await n.get("/admin/ops/advanced-settings");
  return t;
}
async function ro(t) {
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
  getDashboardSnapshotV2: $r,
  getDashboardOverview: xr,
  getThroughputTrend: Cr,
  getLatencyHistogram: _r,
  getErrorTrend: Ir,
  getErrorDistribution: Ar,
  getOpenAITokenStats: Or,
  getConcurrencyStats: hr,
  getUserConcurrencyStats: yr,
  getAccountAvailabilityStats: wr,
  getRealtimeTrafficSummary: br,
  subscribeQPS: Sr,
  // Legacy unified endpoints
  listErrorLogs: Er,
  getErrorLogDetail: Tr,
  updateErrorResolved: Mr,
  // New split endpoints
  listRequestErrors: Rr,
  listUpstreamErrors: zr,
  getRequestErrorDetail: Pr,
  getUpstreamErrorDetail: Dr,
  updateRequestErrorResolved: Br,
  updateUpstreamErrorResolved: Lr,
  listRequestErrorUpstreamErrors: Ur,
  listRequestDetails: Kr,
  listAlertRules: Fr,
  createAlertRule: Nr,
  updateAlertRule: Wr,
  deleteAlertRule: Vr,
  listAlertEvents: jr,
  getAlertEvent: qr,
  updateAlertEventStatus: Hr,
  createAlertSilence: Gr,
  getEmailNotificationConfig: Qr,
  updateEmailNotificationConfig: Jr,
  getAlertRuntimeSettings: Zr,
  updateAlertRuntimeSettings: Xr,
  getRuntimeLogConfig: Yr,
  updateRuntimeLogConfig: to,
  resetRuntimeLogConfig: eo,
  getAdvancedSettings: io,
  updateAdvancedSettings: ro,
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
async function go(t) {
  const { data: e } = await n.post("/admin/error-passthrough-rules", t);
  return e;
}
async function $e(t, e) {
  const { data: a } = await n.put(`/admin/error-passthrough-rules/${t}`, e);
  return a;
}
async function fo(t) {
  const { data: e } = await n.delete(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function po(t, e) {
  return $e(t, { enabled: e });
}
const ho = {
  list: uo,
  getById: mo,
  create: go,
  update: $e,
  delete: fo,
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
async function To(t) {
  const e = t.idempotency_key ? { "X-Idempotency-Key": t.idempotency_key } : void 0, { data: a } = await n.post(
    "/admin/data-management/backups",
    t,
    { headers: e }
  );
  return a;
}
async function Mo(t) {
  const { data: e } = await n.get("/admin/data-management/backups", {
    params: t
  });
  return e;
}
async function Ro(t) {
  const { data: e } = await n.get(`/admin/data-management/backups/${t}`);
  return e;
}
const zo = {
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
  createBackupJob: To,
  listBackupJobs: Mo,
  getBackupJob: Ro
};
async function Po(t, e) {
  const { data: a } = await n.put(`/admin/api-keys/${t}`, {
    group_id: e === null ? 0 : e
  });
  return a;
}
const Do = {
  updateApiKeyGroup: Po
};
async function Bo(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/scheduled-test-plans`
  );
  return e ?? [];
}
async function Lo(t) {
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
  create: Lo,
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
async function ic(t) {
  const { data: e } = await n.get(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
async function rc(t) {
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
  getById: ic,
  create: rc,
  update: oc,
  delete: cc
};
async function uc(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/channels", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function dc(t) {
  const { data: e } = await n.get(`/admin/channels/${t}`);
  return e;
}
async function mc(t) {
  const { data: e } = await n.post("/admin/channels", t);
  return e;
}
async function gc(t, e) {
  const { data: a } = await n.put(`/admin/channels/${t}`, e);
  return a;
}
async function fc(t) {
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
const yc = { list: uc, getById: dc, create: mc, update: gc, remove: fc, getModelDefaultPricing: pc, syncPricingModels: hc };
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
const Kt = /* @__PURE__ */ new Map();
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
function oe(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function $c(t) {
  var i, o;
  const e = Sc(t);
  let a = e ? Kt.get(e.key) ?? xc(e.key) : null;
  if (!a) {
    const c = ((o = (i = globalThis.crypto) == null ? void 0 : i.randomUUID) == null ? void 0 : o.call(i)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
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
async function Tc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}`
  );
  return e;
}
async function Mc(t) {
  const { data: e } = await n.post(
    "/admin/channel-monitor-templates",
    t
  );
  return e;
}
async function Rc(t, e) {
  const { data: a } = await n.put(
    `/admin/channel-monitor-templates/${t}`,
    e
  );
  return a;
}
async function zc(t) {
  await n.delete(`/admin/channel-monitor-templates/${t}`);
}
async function Pc(t, e) {
  const { data: a } = await n.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: e }
  );
  return a;
}
async function Dc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return e;
}
const Bc = {
  list: Ec,
  get: Tc,
  create: Mc,
  update: Rc,
  del: zc,
  apply: Pc,
  listAssociatedMonitors: Dc
}, Lc = {
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
}, il = {
  async getStatus() {
    const { data: t } = await n.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: e } = await n.post("/admin/compliance/accept", t);
    return e;
  }
};
async function rl(t) {
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
  list: rl,
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
async function gl(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/disable`);
  return e;
}
async function fl(t) {
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
  disable: gl,
  remove: fl,
  getConfig: pl,
  saveConfig: hl,
  test: yl,
  createUISession: wl
}, gd = {
  dashboard: Ze,
  users: fa,
  groups: Va,
  accounts: Xn,
  proxies: fs,
  redeem: $s,
  promo: Ts,
  announcements: Ls,
  settings: fi,
  system: Be,
  subscriptions: _i,
  usage: zi,
  gemini: Li,
  antigravity: Ni,
  grok: ar,
  cnProviders: ir,
  userAttributes: pr,
  ops: lo,
  errorPassthrough: ho,
  dataManagement: zo,
  apiKeys: Do,
  scheduledTests: No,
  backup: nc,
  tlsFingerprintProfiles: lc,
  channels: yc,
  channelMonitor: Oc,
  channelMonitorTemplate: Bc,
  payment: Lc,
  affiliates: Qc,
  riskControl: sl,
  compliance: il,
  audit: ll,
  plugins: bl
};
function ft(t, e, a) {
  let s = a.initialDeps ?? [], i, o = !0;
  function c() {
    var l, m, C;
    let _;
    a.key && ((l = a.debug) != null && l.call(a)) && (_ = Date.now());
    const A = t();
    if (!(A.length !== s.length || A.some((b, h) => s[h] !== b)))
      return i;
    s = A;
    let O;
    if (a.key && ((m = a.debug) != null && m.call(a)) && (O = Date.now()), i = e(...A), a.key && ((C = a.debug) != null && C.call(a))) {
      const b = Math.round((Date.now() - _) * 100) / 100, h = Math.round((Date.now() - O) * 100) / 100, S = h / 16, R = (U, p) => {
        for (U = String(U); U.length < p; )
          U = " " + U;
        return U;
      };
      console.info(
        `%c⏱ ${R(h, 5)} /${R(b, 5)} ms`,
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
    return a != null && a.onChange && !(o && a.skipInitialOnChange) && a.onChange(i), o = !1, i;
  }
  return c.updateDeps = (l) => {
    s = l;
  }, c;
}
function ce(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const vl = (t, e) => Math.abs(t - e) < 1.01, kl = (t, e, a) => {
  let s;
  return function(...i) {
    t.clearTimeout(s), s = t.setTimeout(() => e.apply(this, i), a);
  };
}, le = (t) => {
  const { offsetWidth: e, offsetHeight: a } = t;
  return { width: e, height: a };
}, Sl = (t) => t, xl = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), a = Math.min(t.endIndex + t.overscan, t.count - 1), s = [];
  for (let i = e; i <= a; i++)
    s.push(i);
  return s;
}, Ce = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  const i = (c) => {
    const { width: l, height: m } = c;
    e({ width: Math.round(l), height: Math.round(m) });
  };
  if (i(le(a)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((c) => {
    const l = () => {
      const m = c[0];
      if (m != null && m.borderBoxSize) {
        const C = m.borderBoxSize[0];
        if (C) {
          i({ width: C.inlineSize, height: C.blockSize });
          return;
        }
      }
      i(le(a));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return o.observe(a, { box: "border-box" }), () => {
    o.unobserve(a);
  };
}, ue = {
  passive: !0
}, de = typeof window > "u" ? !0 : "onscrollend" in window, $l = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  let i = 0;
  const o = t.options.useScrollendEvent && de ? () => {
  } : kl(
    s,
    () => {
      e(i, !1);
    },
    t.options.isScrollingResetDelay
  ), c = (_) => () => {
    const { horizontal: A, isRtl: $ } = t.options;
    i = A ? a.scrollLeft * ($ && -1 || 1) : a.scrollTop, o(), e(i, _);
  }, l = c(!0), m = c(!1);
  a.addEventListener("scroll", l, ue);
  const C = t.options.useScrollendEvent && de;
  return C && a.addEventListener("scrollend", m, ue), () => {
    a.removeEventListener("scroll", l), C && a.removeEventListener("scrollend", m);
  };
}, Cl = (t, e, a) => {
  if (e != null && e.borderBoxSize) {
    const s = e.borderBoxSize[0];
    if (s)
      return Math.round(
        s[a.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[a.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, _l = (t, {
  adjustments: e = 0,
  behavior: a
}, s) => {
  var i, o;
  const c = t + e;
  (o = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || o.call(i, {
    [s.options.horizontal ? "left" : "top"]: c,
    behavior: a
  });
};
class Il {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var a, s, i;
      return ((i = (s = (a = this.targetWindow) == null ? void 0 : a.performance) == null ? void 0 : s.now) == null ? void 0 : i.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let a = null;
      const s = () => a || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : a = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((o) => {
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
          var i;
          (i = s()) == null || i.disconnect(), a = null;
        },
        observe: (i) => {
          var o;
          return (o = s()) == null ? void 0 : o.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var o;
          return (o = s()) == null ? void 0 : o.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (a) => {
      Object.entries(a).forEach(([s, i]) => {
        typeof i > "u" && delete a[s];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Sl,
        rangeExtractor: xl,
        onChange: () => {
        },
        measureElement: Cl,
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
      var s, i;
      (i = (s = this.options).onChange) == null || i.call(s, this, a);
    }, this.maybeNotify = ft(
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
        this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((a = this.scrollElement) == null ? void 0 : a.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = o, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (a, s) => {
      const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      for (let c = s - 1; c >= 0; c--) {
        const l = a[c];
        if (i.has(l.lane))
          continue;
        const m = o.get(
          l.lane
        );
        if (m == null || l.end > m.end ? o.set(l.lane, l) : l.end < m.end && i.set(l.lane, !0), i.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((c, l) => c.end === l.end ? c.index - l.index : c.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = ft(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (a, s, i, o, c, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: a,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: o,
        enabled: c,
        lanes: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = ft(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: a, paddingStart: s, scrollMargin: i, getItemKey: o, enabled: c, lanes: l }, m) => {
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
          const O = o($), b = this.laneAssignments.get($);
          let h, S;
          if (b !== void 0 && this.options.lanes > 1) {
            h = b;
            const M = A[h], K = M !== void 0 ? _[M] : void 0;
            S = K ? K.end + this.options.gap : s + i;
          } else {
            const M = this.options.lanes === 1 ? _[$ - 1] : this.getFurthestMeasurement(_, $);
            S = M ? M.end + this.options.gap : s + i, h = M ? M.lane : $ % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set($, h);
          }
          const R = m.get(O), U = typeof R == "number" ? R : this.options.estimateSize($), p = S + U;
          _[$] = {
            index: $,
            start: S,
            size: U,
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
    ), this.calculateRange = ft(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (a, s, i, o) => this.range = a.length > 0 && s > 0 ? Al({
        measurements: a,
        outerSize: s,
        scrollOffset: i,
        lanes: o
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = ft(
      () => {
        let a = null, s = null;
        const i = this.calculateRange();
        return i && (a = i.startIndex, s = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, a, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          a,
          s
        ];
      },
      (a, s, i, o, c) => o === null || c === null ? [] : a({
        startIndex: o,
        endIndex: c,
        overscan: s,
        count: i
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (a) => {
      const s = this.options.indexAttribute, i = a.getAttribute(s);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (a) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const i = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (i !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), c = Math.max(0, i - o), l = Math.min(
          this.options.count - 1,
          i + o
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
      const s = this.indexFromElement(a), i = this.options.getItemKey(s), o = this.elementsCache.get(i);
      o !== a && (o && this.observer.unobserve(o), this.observer.observe(a), this.elementsCache.set(i, a)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(a, void 0, this));
    }, this.resizeItem = (a, s) => {
      var i;
      const o = this.measurementsCache[a];
      if (!o) return;
      const c = this.itemSizeCache.get(o.key) ?? o.size, l = s - c;
      l !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, s)), this.notify(!1));
    }, this.getVirtualItems = ft(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (a, s) => {
        const i = [];
        for (let o = 0, c = a.length; o < c; o++) {
          const l = a[o], m = s[l];
          i.push(m);
        }
        return i;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (a) => {
      const s = this.getMeasurements();
      if (s.length !== 0)
        return ce(
          s[_e(
            0,
            s.length - 1,
            (i) => ce(s[i]).start,
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
    }, this.getOffsetForAlignment = (a, s, i = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), c = this.getScrollOffset();
      s === "auto" && (s = a >= c + o ? "end" : "start"), s === "center" ? a += (i - o) / 2 : s === "end" && (a -= o);
      const l = this.getMaxScrollOffset();
      return Math.max(Math.min(l, a), 0);
    }, this.getOffsetForIndex = (a, s = "auto") => {
      a = Math.max(0, Math.min(a, this.options.count - 1));
      const i = this.getSize(), o = this.getScrollOffset(), c = this.measurementsCache[a];
      if (!c) return;
      if (s === "auto")
        if (c.end >= o + i - this.options.scrollPaddingEnd)
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
    }, this.scrollToOffset = (a, { align: s = "start", behavior: i = "auto" } = {}) => {
      const o = this.getOffsetForAlignment(a, s), c = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: i,
        startedAt: c,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (a, {
      align: s = "auto",
      behavior: i = "auto"
    } = {}) => {
      a = Math.max(0, Math.min(a, this.options.count - 1));
      const o = this.getOffsetForIndex(a, s);
      if (!o)
        return;
      const [c, l] = o, m = this.now();
      this.scrollState = {
        index: a,
        align: l,
        behavior: i,
        startedAt: m,
        lastTargetOffset: c,
        stableFrames: 0
      }, this._scrollToOffset(c, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (a, { behavior: s = "auto" } = {}) => {
      const i = this.getScrollOffset() + a, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var a;
      const s = this.getMeasurements();
      let i;
      if (s.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1)
        i = ((a = s[s.length - 1]) == null ? void 0 : a.end) ?? 0;
      else {
        const o = Array(this.options.lanes).fill(null);
        let c = s.length - 1;
        for (; c >= 0 && o.some((l) => l === null); ) {
          const l = s[c];
          o[l.lane] === null && (o[l.lane] = l.end), c--;
        }
        i = Math.max(...o.filter((l) => l !== null));
      }
      return Math.max(
        i - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (a, {
      adjustments: s,
      behavior: i
    }) => {
      this.options.scrollToFn(a, { behavior: i, adjustments: s }, this);
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, i = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, c = i !== this.scrollState.lastTargetOffset;
    if (!c && vl(i, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, c && (this.scrollState.lastTargetOffset = i, this.scrollState.behavior = "auto", this._scrollToOffset(i, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const _e = (t, e, a, s) => {
  for (; t <= e; ) {
    const i = (t + e) / 2 | 0, o = a(i);
    if (o < s)
      t = i + 1;
    else if (o > s)
      e = i - 1;
    else
      return i;
  }
  return t > 0 ? t - 1 : 0;
};
function Al({
  measurements: t,
  outerSize: e,
  scrollOffset: a,
  lanes: s
}) {
  const i = t.length - 1, o = (m) => t[m].start;
  if (t.length <= s)
    return {
      startIndex: 0,
      endIndex: i
    };
  let c = _e(
    0,
    i,
    o,
    a
  ), l = c;
  if (s === 1)
    for (; l < i && t[l].end < a + e; )
      l++;
  else if (s > 1) {
    const m = Array(s).fill(0);
    for (; l < i && m.some((_) => _ < a + e); ) {
      const _ = t[l];
      m[_.lane] = _.end, l++;
    }
    const C = Array(s).fill(a + e);
    for (; c >= 0 && C.some((_) => _ >= a); ) {
      const _ = t[c];
      C[_.lane] = _.start, c--;
    }
    c = Math.max(0, c - c % s), l = Math.min(i, l + (s - 1 - l % s));
  }
  return { startIndex: c, endIndex: l };
}
function Ol(t) {
  const e = new Il(P(t)), a = Le(e), s = e._didMount();
  return tt(
    () => P(t).getScrollElement(),
    (i) => {
      i && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), tt(
    () => P(t),
    (i) => {
      e.setOptions({
        ...i,
        onChange: (o, c) => {
          var l;
          ne(a), (l = i.onChange) == null || l.call(i, o, c);
        }
      }), e._willUpdate(), ne(a);
    },
    {
      immediate: !0
    }
  ), Ue(s), a;
}
function El(t) {
  return Ol(
    I(() => ({
      observeElementRect: Ce,
      observeElementOffset: $l,
      scrollToFn: _l,
      ...P(t)
    }))
  );
}
const Tl = {
  key: 0,
  class: "space-y-3"
}, Ml = { class: "space-y-3" }, Rl = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, zl = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, Pl = { class: "flex flex-col items-center" }, Dl = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, Bl = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, Ll = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, Ul = ["checked", "indeterminate"], Kl = ["onClick"], Fl = { class: "space-y-3" }, Nl = {
  key: 0,
  class: "flex justify-end"
}, Wl = ["checked", "aria-label", "onChange"], Vl = ["data-field"], jl = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, ql = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, Hl = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Gl = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, Ql = { class: "table-header bg-gray-50 dark:bg-dark-800" }, Jl = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, Zl = ["checked", "indeterminate", "aria-label"], Xl = ["aria-sort", "onClick"], Yl = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, tu = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, eu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, au = { key: 1 }, nu = ["colspan"], su = { class: "flex flex-col items-center" }, iu = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, ru = {
  key: 0,
  "aria-hidden": "true"
}, ou = ["colspan"], cu = ["data-row-id", "data-index", "onClick"], lu = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, uu = ["checked", "aria-label", "onChange"], du = {
  key: 1,
  "aria-hidden": "true"
}, mu = ["colspan"], me = "(min-width: 768px)", gu = /* @__PURE__ */ pt({
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
    const { t: s } = kt(), i = D(
      typeof window > "u" ? !0 : window.matchMedia(me).matches
    ), o = a, c = D(null), l = D(!1), m = D(!1), C = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), _ = (r, u) => Ce(r, (d) => {
      d.height > 0 && u(d);
    }), A = () => {
      c.value && (l.value = c.value.scrollWidth > c.value.clientWidth);
    }, $ = () => {
      if (!p.expandableActions) {
        m.value = !1, B.value = !1;
        return;
      }
      if (!c.value) return;
      const r = c.value.querySelector("tbody tr:first-child td:last-child");
      if (!r) return;
      const u = r.querySelector("div");
      if (!u) return;
      const d = B.value;
      B.value = !0, ot(() => {
        const x = u.querySelectorAll('button, a, [role="button"]');
        if (x.length <= 2) {
          m.value = !1, B.value = d;
          return;
        }
        let E = 0;
        x.forEach((gt, Bt) => {
          E += gt.offsetWidth, Bt < x.length - 1 && (E += 4);
        });
        const it = r.clientWidth - 32;
        m.value = E > it, B.value = d;
      });
    };
    let O = null, b = null, h = null, S = null;
    const R = () => {
      O == null || O.disconnect(), O = null, b && (window.removeEventListener("resize", b), b = null);
    }, U = () => {
      A(), $(), c.value && typeof ResizeObserver < "u" ? (O = new ResizeObserver(() => {
        A(), $();
      }), O.observe(c.value)) : (b = () => {
        A(), $();
      }, window.addEventListener("resize", b));
    };
    Tt(() => {
      typeof window < "u" && (h = window.matchMedia(me), i.value = h.matches, S = (r) => {
        i.value = r.matches;
      }, typeof h.addEventListener == "function" ? h.addEventListener("change", S) : h.addListener(S));
    }), Vt(() => {
      R(), h && S && (typeof h.removeEventListener == "function" ? h.removeEventListener("change", S) : h.removeListener(S), S = null), h = null;
    });
    const p = t, M = D(""), K = D("asc"), B = D(!1), q = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), F = () => {
      const r = /* @__PURE__ */ new Set();
      for (const u of p.columns)
        u.sortable && r.add(u.key);
      return r;
    }, j = (r) => r && F().has(r) ? r : "", H = (r) => r === "desc" ? "desc" : "asc", W = () => {
      if (!p.sortStorageKey) return null;
      try {
        const r = localStorage.getItem(p.sortStorageKey);
        if (!r) return null;
        const u = JSON.parse(r), d = j(typeof u.key == "string" ? u.key : "");
        return d ? { key: d, order: H(u.order) } : null;
      } catch (r) {
        return console.error("[DataTable] Failed to read persisted sort state:", r), null;
      }
    }, G = (r) => {
      if (p.sortStorageKey)
        try {
          localStorage.setItem(p.sortStorageKey, JSON.stringify(r));
        } catch (u) {
          console.error("[DataTable] Failed to persist sort state:", u);
        }
    }, V = () => {
      const r = W();
      if (r) return r;
      const u = j(p.defaultSortKey || "");
      return u ? { key: u, order: H(p.defaultSortOrder) } : null;
    }, st = (r) => {
      r && (M.value = r.key, K.value = r.order);
    }, ht = (r, u) => M.value === r && K.value === u ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", Rt = (r) => M.value !== r ? "none" : K.value === "asc" ? "ascending" : "descending", zt = (r) => {
      const u = r.class || "";
      return u.includes("text-center") ? "justify-center" : u.includes("text-right") ? "justify-end" : "justify-start";
    }, lt = (r) => r == null || r === "", ut = (r) => {
      if (typeof r == "number") return Number.isFinite(r) ? r : null;
      if (typeof r == "boolean") return r ? 1 : 0;
      if (typeof r == "string") {
        const u = r.trim();
        if (!u) return null;
        const d = Number(u);
        return Number.isFinite(d) ? d : null;
      }
      return null;
    }, St = (r) => {
      if (r == null) return "";
      if (typeof r == "string") return r;
      if (typeof r == "number" || typeof r == "boolean") return String(r);
      if (r instanceof Date) return r.toISOString();
      try {
        return JSON.stringify(r);
      } catch {
        return String(r);
      }
    }, xt = (r, u) => {
      const d = lt(r), x = lt(u);
      if (d && x) return 0;
      if (d) return 1;
      if (x) return -1;
      const E = ut(r), it = ut(u);
      if (E !== null && it !== null)
        return E === it ? 0 : E < it ? -1 : 1;
      const gt = St(r), Bt = St(u), ae = q.compare(gt, Bt);
      return ae === 0 ? 0 : ae < 0 ? -1 : 1;
    }, yt = (r) => typeof p.rowKey == "function" ? p.rowKey(r) ?? void 0 : typeof p.rowKey == "string" && p.rowKey ? (r == null ? void 0 : r[p.rowKey]) ?? void 0 : (r == null ? void 0 : r.id) ?? void 0, X = (r, u) => yt(r) ?? u, $t = I(() => p.columns.filter((r) => r.key !== "actions")), wt = I(
      () => p.columns.map((r) => `${r.key}:${r.sortable ? "1" : "0"}`).join("|")
    );
    tt(
      i,
      async (r) => {
        R(), r && (await ot(), U());
      },
      { immediate: !0, flush: "post" }
    ), tt(
      [() => p.data.length, wt],
      async () => {
        await ot(), A(), $();
      },
      { flush: "post" }
    ), tt(B, async () => {
      await ot(), A();
    });
    const Ct = (r) => {
      let u = "asc";
      M.value === r && (u = K.value === "asc" ? "desc" : "asc"), p.serverSideSort ? (M.value = r, K.value = u, o("sort", r, u)) : (M.value = r, K.value = u);
    }, g = I(() => {
      if (p.serverSideSort || !M.value || !p.data) return p.data;
      const r = M.value, u = K.value;
      return p.data.map((d, x) => ({ row: d, index: x })).sort((d, x) => {
        var it, gt;
        const E = xt((it = d.row) == null ? void 0 : it[r], (gt = x.row) == null ? void 0 : gt[r]);
        return E !== 0 ? u === "asc" ? E : -E : d.index - x.index;
      }).map((d) => d.row);
    }), w = I(() => p.columns.length + (p.selectable ? 1 : 0)), v = I(() => new Set(p.selectedKeys)), L = I(
      () => (g.value ?? []).map((r, u) => X(r, u))
    ), nt = I(
      () => L.value.length > 0 && L.value.every((r) => v.value.has(r))
    ), _t = I(() => nt.value ? !1 : L.value.some((r) => v.value.has(r))), dt = (r) => {
      const u = Array.from(r);
      o("update:selectedKeys", u), o("selectionChange", u);
    }, It = (r, u) => v.value.has(X(r, u)), Gt = (r, u) => typeof p.selectionLabel == "function" ? p.selectionLabel(r) : p.selectionLabel ? p.selectionLabel : `${s("common.selectOption")} ${X(r, u)}`, Qt = (r, u, d) => {
      const x = new Set(p.selectedKeys), E = X(r, u);
      d ? x.add(E) : x.delete(E), dt(x);
    }, Jt = (r) => {
      const u = new Set(p.selectedKeys);
      for (const d of L.value)
        r ? u.add(d) : u.delete(d);
      dt(u);
    }, Pt = I(
      () => {
        var r;
        return i.value && (((r = g.value) == null ? void 0 : r.length) ?? 0) > (p.virtualizeThreshold ?? 100);
      }
    ), mt = El(I(() => {
      var r;
      return {
        count: Pt.value ? ((r = g.value) == null ? void 0 : r.length) ?? 0 : 0,
        getScrollElement: () => c.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (u) => {
          var x;
          const d = (x = g.value) == null ? void 0 : x[u];
          return d != null ? X(d, u) : u;
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
    })), Dt = I(() => mt.value.getVirtualItems()), Zt = I(() => {
      const r = Dt.value;
      return r.length > 0 ? r[0].start : 0;
    }), Xt = I(() => {
      const r = Dt.value;
      return r.length === 0 ? 0 : mt.value.getTotalSize() - r[r.length - 1].end;
    }), Te = (r) => {
      r && mt.value.measureElement(r);
    }, Me = I(
      () => (g.value ?? []).map((r) => {
        const u = yt(r);
        return u !== void 0 ? u : r !== null && typeof r == "object" ? r : Symbol("unstable-row");
      })
    ), Re = (r, u) => {
      if (r.length !== u.length) return !1;
      const d = new Set(r), x = new Set(u);
      return d.size !== r.length || x.size !== u.length ? !1 : [...d].every((E) => x.has(E));
    };
    tt(
      Me,
      (r, u) => {
        Re(r, u) || (mt.value.measureElement(null), mt.value.measure());
      },
      { flush: "post" }
    );
    const ze = I(() => {
      const r = g.value ?? [];
      return Pt.value ? Dt.value.map((u) => ({ index: u.index, row: r[u.index], measure: !0 })) : r.map((u, d) => ({ index: d, row: u, measure: !1 }));
    }), Yt = I(() => p.columns.some((r) => r.key === "actions")), Pe = I(() => p.columns.length > 0 && p.columns[0].key === "select"), te = (r, u) => {
      const d = [];
      return p.stickyFirstColumn && (Pe.value ? u === 0 ? d.push("sticky-col sticky-col-left-first") : u === 1 && d.push("sticky-col sticky-col-left-second") : u === 0 && d.push("sticky-col sticky-col-left")), p.stickyActionsColumn && r.key === "actions" && d.push("sticky-col sticky-col-right"), d.join(" ");
    }, At = () => {
      const r = p.columns.length;
      return r >= 10 ? "px-2" : r >= 7 ? "px-3" : r >= 5 ? "px-4" : "px-6";
    }, ee = D(!1);
    return Tt(() => {
      const r = V();
      st(r), ee.value = !0;
    }), tt(
      wt,
      () => {
        const r = j(M.value);
        if (!M.value) {
          const u = V();
          st(u);
          return;
        }
        if (!r) {
          const u = V();
          u ? st(u) : (M.value = "", K.value = "asc");
        }
      },
      { flush: "post" }
    ), tt(
      [M, K],
      ([r, u]) => {
        if (!ee.value || !p.sortStorageKey) return;
        const d = j(r);
        d && G({ key: d, order: H(u) });
      },
      { flush: "post" }
    ), e({
      virtualizer: mt,
      shouldVirtualize: Pt,
      sortedData: g,
      resolveRowKey: X,
      tableWrapperEl: c
    }), (r, u) => i.value ? (y(), k("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: c,
      class: N(["table-wrapper", {
        "actions-expanded": B.value,
        "is-scrollable": l.value
      }])
    }, [
      f("table", Gl, [
        f("thead", Ql, [
          f("tr", null, [
            t.selectable ? (y(), k("th", Jl, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: nt.value,
                indeterminate: _t.value,
                "aria-label": P(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: u[2] || (u[2] = (d) => Jt(d.target.checked))
              }, null, 40, Zl)
            ])) : z("", !0),
            (y(!0), k(Q, null, Y(t.columns, (d, x) => (y(), k("th", {
              key: d.key,
              scope: "col",
              "aria-sort": d.sortable ? Rt(d.key) : void 0,
              class: N([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                At(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": d.sortable },
                te(d, x),
                d.class
              ]),
              onClick: (E) => d.sortable && Ct(d.key)
            }, [
              f("div", {
                class: N(["flex items-center space-x-1", zt(d)])
              }, [
                Z(r.$slots, `header-${d.key}`, {
                  column: d,
                  sortKey: M.value,
                  sortOrder: K.value
                }, () => [
                  f("span", null, T(d.label), 1)
                ], !0),
                d.sortable ? (y(), k("span", Yl, [
                  (y(), k("svg", {
                    class: N(["h-2.5 w-2.5", ht(d.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[6] || (u[6] = [
                    f("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (y(), k("svg", {
                    class: N(["-mt-0.5 h-2.5 w-2.5", ht(d.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[7] || (u[7] = [
                    f("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : z("", !0)
              ], 2)
            ], 10, Xl))), 128))
          ])
        ]),
        f("tbody", tu, [
          t.loading ? (y(), k(Q, { key: 0 }, Y(5, (d) => f("tr", { key: d }, [
            t.selectable ? (y(), k("td", eu, [...u[8] || (u[8] = [
              f("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : z("", !0),
            (y(!0), k(Q, null, Y(t.columns, (x) => (y(), k("td", {
              key: x.key,
              class: N(["whitespace-nowrap py-4", At()])
            }, [...u[9] || (u[9] = [
              f("div", { class: "animate-pulse" }, [
                f("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !t.data || t.data.length === 0 ? (y(), k("tr", au, [
            f("td", {
              colspan: w.value,
              class: N(["py-12 text-center text-gray-500 dark:text-dark-400", At()])
            }, [
              Z(r.$slots, "empty", {}, () => [
                f("div", su, [
                  at(et, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  f("p", iu, T(P(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, nu)
          ])) : (y(), k(Q, { key: 2 }, [
            Zt.value > 0 ? (y(), k("tr", ru, [
              f("td", {
                colspan: w.value,
                style: Mt({ height: Zt.value + "px", padding: 0, border: "none" })
              }, null, 12, ou)
            ])) : z("", !0),
            (y(!0), k(Q, null, Y(ze.value, (d) => (y(), k("tr", {
              key: X(d.row, d.index),
              "data-row-id": X(d.row, d.index),
              "data-index": d.index,
              ref_for: !0,
              ref: d.measure ? Te : void 0,
              class: N(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": t.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": t.selectable && It(d.row, d.index)
              }]),
              onClick: (x) => t.clickableRows && o("rowClick", d.row)
            }, [
              t.selectable ? (y(), k("td", lu, [
                f("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: It(d.row, d.index),
                  "aria-label": Gt(d.row, d.index),
                  "data-test": "select-row",
                  onClick: u[3] || (u[3] = J(() => {
                  }, ["stop"])),
                  onChange: (x) => Qt(d.row, d.index, x.target.checked)
                }, null, 40, uu)
              ])) : z("", !0),
              (y(!0), k(Q, null, Y(t.columns, (x, E) => (y(), k("td", {
                key: x.key,
                class: N([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  At(),
                  te(x, E),
                  x.class
                ])
              }, [
                Z(r.$slots, `cell-${x.key}`, {
                  row: d.row,
                  value: d.row[x.key],
                  expanded: B.value
                }, () => [
                  rt(T(x.formatter ? x.formatter(d.row[x.key], d.row) : d.row[x.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, cu))), 128)),
            Xt.value > 0 ? (y(), k("tr", du, [
              f("td", {
                colspan: w.value,
                style: Mt({ height: Xt.value + "px", padding: 0, border: "none" })
              }, null, 12, mu)
            ])) : z("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (y(), k("div", Tl, [
      t.loading ? (y(), k(Q, { key: 0 }, Y(5, (d) => f("div", {
        key: d,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        f("div", Ml, [
          (y(!0), k(Q, null, Y($t.value, (x) => (y(), k("div", {
            key: x.key,
            class: "flex justify-between"
          }, [...u[4] || (u[4] = [
            f("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            f("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          Yt.value ? (y(), k("div", Rl, [...u[5] || (u[5] = [
            f("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : z("", !0)
        ])
      ])), 64)) : !t.data || t.data.length === 0 ? (y(), k("div", zl, [
        Z(r.$slots, "empty", {}, () => [
          f("div", Pl, [
            at(et, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            f("p", Dl, T(P(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (y(), k(Q, { key: 2 }, [
        t.selectable ? (y(), k("div", Bl, [
          f("label", Ll, [
            f("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: nt.value,
              indeterminate: _t.value,
              "data-test": "select-all-mobile",
              onChange: u[0] || (u[0] = (d) => Jt(d.target.checked))
            }, null, 40, Ul),
            f("span", null, T(P(s)("common.selectAll")), 1)
          ])
        ])) : z("", !0),
        (y(!0), k(Q, null, Y(g.value, (d, x) => (y(), k("div", {
          key: X(d, x),
          class: N(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": t.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": t.selectable && It(d, x)
          }]),
          onClick: (E) => t.clickableRows && o("rowClick", d)
        }, [
          f("div", Fl, [
            t.selectable ? (y(), k("div", Nl, [
              f("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: It(d, x),
                "aria-label": Gt(d, x),
                "data-test": "select-row",
                onClick: u[1] || (u[1] = J(() => {
                }, ["stop"])),
                onChange: (E) => Qt(d, x, E.target.checked)
              }, null, 40, Wl)
            ])) : z("", !0),
            (y(!0), k(Q, null, Y($t.value, (E) => (y(), k("div", {
              key: E.key,
              "data-field": E.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              f("span", jl, T(E.label), 1),
              f("div", ql, [
                Z(r.$slots, `cell-${E.key}`, {
                  row: d,
                  value: d[E.key],
                  expanded: B.value
                }, () => [
                  rt(T(E.formatter ? E.formatter(d[E.key], d) : d[E.key]), 1)
                ], !0)
              ])
            ], 8, Vl))), 128)),
            Yt.value ? (y(), k("div", Hl, [
              Z(r.$slots, "cell-actions", {
                row: d,
                value: d.actions,
                expanded: B.value
              }, void 0, !0)
            ])) : z("", !0)
          ])
        ], 10, Kl))), 128))
      ], 64))
    ]));
  }
}), fd = /* @__PURE__ */ jt(gu, [["__scopeId", "data-v-2280f759"]]), fu = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], pu = { class: "select-value" }, hu = ["onKeydown"], yu = { class: "select-icon" }, wu = {
  key: 0,
  class: "select-search"
}, bu = ["placeholder", "aria-label"], vu = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], ku = {
  key: 0,
  class: "select-empty"
}, Ft = 8, Su = 200, xu = 300, $u = /* @__PURE__ */ pt({
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
    const { t: a } = kt(), s = `select-${Math.random().toString(36).substring(2, 9)}`, i = t, o = e, c = D(!1), l = D(""), m = D(-1), C = D(null), _ = D(null), A = D(null), $ = D(null), O = D(null), b = D("bottom"), h = D(null), S = I(() => i.placeholder ?? a("common.selectOption")), R = I(() => i.searchPlaceholder ?? a("common.searchPlaceholder")), U = I(() => i.emptyText ?? a("common.noOptionsFound"));
    let p = null;
    const M = I(() => i.remote ? !0 : i.searchable === "auto" ? i.options.length > 5 : i.searchable), K = I(() => {
      if (!h.value) return {};
      const g = h.value, w = Math.max(Ft, window.innerWidth - Ft), v = Math.min(
        Math.max(Ft, g.left),
        w
      ), L = Math.max(0, w - v), nt = Math.max(Su, g.width), _t = Math.min(nt, L), dt = {
        position: "fixed",
        left: `${v}px`,
        minWidth: `${_t}px`,
        maxWidth: `${L}px`,
        zIndex: "100000020"
      };
      return b.value === "top" ? dt.bottom = `${window.innerHeight - g.top + 4}px` : dt.top = `${g.bottom + 4}px`, dt;
    }), B = (g) => typeof g == "object" && g !== null ? g[i.valueKey] : g, q = (g) => String(typeof g == "object" && g !== null ? g[i.labelKey] ?? "" : g ?? ""), F = (g) => typeof g == "object" && g !== null ? !!g.disabled : !1, j = (g) => typeof g == "object" && g !== null ? g.kind === "group" : !1, H = I(() => i.options.find((g) => B(g) === i.modelValue) || null), W = I(() => H.value ? q(H.value) : i.creatable && i.modelValue ? String(i.modelValue) : S.value), G = I(
      () => i.modelValue !== null && i.modelValue !== void 0 && i.modelValue !== ""
    ), V = I(() => {
      let g = i.options;
      if (M.value && l.value && !i.remote) {
        const w = l.value.toLowerCase();
        if (g = g.filter((v) => !!(q(v).toLowerCase().includes(w) || v.description && String(v.description).toLowerCase().includes(w))), i.creatable && l.value.trim()) {
          const v = l.value.trim(), L = i.creatablePrefix || a("common.search");
          g = [{ [i.valueKey]: v, [i.labelKey]: `${L} "${v}"`, _creatable: !0 }, ...g];
        }
      }
      return g;
    }), st = (g) => B(g) === i.modelValue, ht = (g) => {
      const w = V.value;
      if (w.length === 0) return -1;
      for (let v = 0; v < w.length; v++) {
        const L = (g + v) % w.length;
        if (!F(w[L])) return L;
      }
      return -1;
    }, Rt = (g) => {
      const w = V.value;
      if (w.length === 0) return -1;
      for (let v = 0; v < w.length; v++) {
        const L = (g - v + w.length) % w.length;
        if (!F(w[L])) return L;
      }
      return -1;
    }, zt = (g, w) => {
      F(g) || j(g) || (m.value = w);
    }, lt = () => {
      C.value && (h.value = C.value.getBoundingClientRect());
    }, ut = () => {
      C.value && (lt(), ot(() => {
        if (!$.value || !h.value) return;
        const g = $.value.offsetHeight || 240, w = window.innerHeight - h.value.bottom, v = h.value.top;
        w < g && v > g ? b.value = "top" : b.value = "bottom";
      }));
    }, St = () => {
      i.disabled || (c.value = !c.value);
    };
    tt(c, (g) => {
      if (g) {
        if (ut(), V.value.length === 0)
          m.value = -1;
        else {
          const w = V.value.findIndex(st), v = w >= 0 ? w : 0;
          m.value = F(V.value[v]) ? ht(v + 1) : v;
        }
        M.value && ot(() => {
          var w;
          return (w = A.value) == null ? void 0 : w.focus();
        }), window.addEventListener("scroll", lt, { capture: !0, passive: !0 }), window.addEventListener("resize", ut);
      } else
        l.value = "", m.value = -1, p && (clearTimeout(p), p = null), window.removeEventListener("scroll", lt, { capture: !0 }), window.removeEventListener("resize", ut);
    }), tt(l, (g) => {
      !i.remote || !c.value || (p && clearTimeout(p), p = setTimeout(() => {
        p = null, o("search", g.trim());
      }, xu));
    });
    const xt = (g) => {
      var v;
      const w = B(g) ?? null;
      o("update:modelValue", w), o("change", w, g), c.value = !1, (v = _.value) == null || v.focus();
    }, yt = () => {
      i.disabled || (o("update:modelValue", null), o("change", null, null));
    }, X = () => {
      c.value || (c.value = !0);
    }, $t = (g) => {
      var w;
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), m.value = ht(m.value + 1), m.value >= 0 && wt();
          break;
        case "ArrowUp":
          g.preventDefault(), m.value = Rt(m.value - 1), m.value >= 0 && wt();
          break;
        case "Enter":
          if (g.preventDefault(), m.value >= 0 && m.value < V.value.length) {
            const v = V.value[m.value];
            F(v) || xt(v);
          }
          break;
        case "Escape":
          g.preventDefault(), c.value = !1, (w = _.value) == null || w.focus();
          break;
        case "Tab":
          c.value = !1;
          break;
      }
    }, wt = () => {
      ot(() => {
        const g = O.value;
        if (!g) return;
        const w = g.children[m.value];
        w && (w.offsetTop < g.scrollTop ? g.scrollTop = w.offsetTop : w.offsetTop + w.offsetHeight > g.scrollTop + g.offsetHeight && (g.scrollTop = w.offsetTop + w.offsetHeight - g.offsetHeight));
      });
    }, Ct = (g) => {
      var nt;
      const w = g.target, v = !!w.closest(`.${s}`), L = (nt = C.value) == null ? void 0 : nt.contains(w);
      !v && !L && c.value && (c.value = !1);
    };
    return Tt(() => {
      document.addEventListener("click", Ct);
    }), Vt(() => {
      document.removeEventListener("click", Ct), window.removeEventListener("scroll", lt, { capture: !0 }), window.removeEventListener("resize", ut), p && (clearTimeout(p), p = null);
    }), (g, w) => (y(), k("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: C
    }, [
      f("button", {
        ref_key: "triggerRef",
        ref: _,
        type: "button",
        onClick: St,
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
          Ot(J(X, ["prevent"]), ["down"]),
          Ot(J(X, ["prevent"]), ["up"])
        ]
      }, [
        f("span", pu, [
          Z(g.$slots, "selected", { option: H.value }, () => [
            rt(T(W.value), 1)
          ], !0)
        ]),
        t.clearable && G.value && !t.disabled ? (y(), k("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: J(yt, ["stop"]),
          onMousedown: w[0] || (w[0] = J(() => {
          }, ["stop"])),
          onKeydown: Ot(J(yt, ["stop", "prevent"]), ["enter"])
        }, [
          at(et, {
            name: "x",
            size: "sm"
          })
        ], 40, hu)) : z("", !0),
        f("span", yu, [
          at(et, {
            name: "chevronDown",
            size: "md",
            class: N(["transition-transform duration-200", c.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, fu),
      (y(), ct(pe, { to: "body" }, [
        at(he, { name: "select-dropdown" }, {
          default: vt(() => [
            c.value ? (y(), k("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: $,
              class: N(["select-dropdown-portal console-skin-select-menu", [s]]),
              style: Mt(K.value),
              role: "listbox",
              onClick: w[3] || (w[3] = J(() => {
              }, ["stop"])),
              onMousedown: w[4] || (w[4] = J(() => {
              }, ["stop"])),
              onKeydown: $t
            }, [
              M.value ? (y(), k("div", wu, [
                at(et, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                ye(f("input", {
                  ref_key: "searchInputRef",
                  ref: A,
                  "onUpdate:modelValue": w[1] || (w[1] = (v) => l.value = v),
                  type: "text",
                  placeholder: R.value,
                  "aria-label": R.value,
                  class: "select-search-input",
                  onClick: w[2] || (w[2] = J(() => {
                  }, ["stop"]))
                }, null, 8, bu), [
                  [we, l.value]
                ])
              ])) : z("", !0),
              f("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: O
              }, [
                (y(!0), k(Q, null, Y(V.value, (v, L) => (y(), k("div", {
                  key: `${typeof B(v)}:${String(B(v) ?? "")}`,
                  role: "option",
                  "aria-selected": st(v),
                  "aria-disabled": F(v),
                  onClick: J((nt) => !F(v) && xt(v), ["stop"]),
                  onMouseenter: (nt) => zt(v, L),
                  class: N([
                    "select-option",
                    j(v) && "select-option-group",
                    st(v) && "select-option-selected",
                    F(v) && !j(v) && "select-option-disabled",
                    m.value === L && !j(v) && "select-option-focused"
                  ])
                }, [
                  Z(g.$slots, "option", {
                    option: v,
                    selected: st(v)
                  }, () => [
                    v._creatable ? (y(), ct(et, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : z("", !0),
                    f("span", {
                      class: N(["select-option-label", v._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, T(q(v)), 3),
                    st(v) ? (y(), ct(et, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : z("", !0)
                  ], !0)
                ], 42, vu))), 128)),
                V.value.length === 0 ? (y(), k("div", ku, T(i.loading ? P(a)("common.loading") : U.value), 1)) : z("", !0)
              ], 512)
            ], 38)) : z("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Cu = /* @__PURE__ */ jt($u, [["__scopeId", "data-v-fbc717eb"]]), Ie = 5, _u = 1e3, Iu = 20, ge = [10, 20, 50, 100], Ae = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ie || e > _u ? null : e;
}, Au = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < Ie ? null : e;
}, Oe = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, Ou = () => {
  var e;
  const t = (e = Oe()) == null ? void 0 : e.table_page_size_options;
  return Array.isArray(t) ? Array.from(
    new Set(
      t.map((a) => Ae(a)).filter((a) => a !== null)
    )
  ).sort((a, s) => a - s) : [];
}, fe = (t, e) => {
  for (const a of e)
    if (a >= t)
      return a;
  return e[e.length - 1];
}, Et = () => {
  var e;
  const t = Ae((e = Oe()) == null ? void 0 : e.table_default_page_size);
  return t === null ? Iu : t;
}, Wt = () => {
  const t = Ou();
  return t.length === 0 ? [...ge] : t.length > 0 ? t : [...ge];
}, bt = (t) => {
  const e = Au(t), a = Et(), s = Wt();
  return fe(e !== null ? e : a, s);
}, Ee = "table-page-size";
function pd(t = Et()) {
  var e;
  if (typeof window < "u" && ((e = window.__APP_CONFIG__) == null ? void 0 : e.table_default_page_size) !== void 0)
    return bt(Et());
  if (typeof window < "u")
    try {
      const a = window.localStorage.getItem(Ee);
      if (a !== null) {
        const s = Number(a);
        if (Number.isFinite(s))
          return bt(s);
      }
    } catch (a) {
      console.warn("Failed to read persisted page size:", a);
    }
  return bt(Et() || t);
}
function Eu(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ee, String(t));
    } catch (e) {
      console.warn("Failed to persist page size:", e);
    }
}
const Tu = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, Mu = { class: "flex flex-1 items-center justify-between sm:hidden" }, Ru = ["disabled"], zu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Pu = ["disabled"], Du = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Bu = { class: "flex items-center space-x-4" }, Lu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Uu = { class: "font-medium" }, Ku = { class: "font-medium" }, Fu = { class: "font-medium" }, Nu = {
  key: 0,
  class: "flex items-center space-x-2"
}, Wu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Vu = { class: "page-size-select w-20" }, ju = {
  key: 1,
  class: "flex items-center space-x-2"
}, qu = { class: "text-sm text-gray-700 dark:text-gray-300" }, Hu = ["max", "placeholder"], Gu = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, Qu = ["disabled", "aria-label"], Ju = ["onClick", "disabled", "aria-label", "aria-current"], Zu = ["disabled", "aria-label"], Xu = /* @__PURE__ */ pt({
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
    const { t: a } = kt(), s = t, i = e, o = I(() => Math.ceil(s.total / s.pageSize)), c = I(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), l = I(() => {
      const b = s.page * s.pageSize;
      return b > s.total ? s.total : b;
    }), m = I(() => Array.from(
      /* @__PURE__ */ new Set([
        ...Wt(),
        bt(s.pageSize)
      ])
    ).sort((h, S) => h - S).map((h) => ({
      value: h,
      label: String(h)
    }))), C = D(""), _ = I(() => {
      const b = [], S = o.value;
      if (S <= 7)
        for (let R = 1; R <= S; R++)
          b.push(R);
      else {
        b.push(1);
        const R = Math.max(2, s.page - 2), U = Math.min(S - 1, s.page + 2);
        R > 2 && b.push("...");
        for (let p = R; p <= U; p++)
          b.push(p);
        U < S - 1 && b.push("..."), b.push(S);
      }
      return b;
    }), A = (b) => {
      b >= 1 && b <= o.value && b !== s.page && i("update:page", b);
    }, $ = (b) => {
      if (b === null || typeof b == "boolean") return;
      const h = bt(typeof b == "string" ? parseInt(b, 10) : b);
      Eu(h), i("update:pageSize", h);
    }, O = () => {
      const b = C.value.trim();
      if (!b) return;
      const h = Number.parseInt(b, 10);
      if (Number.isNaN(h)) return;
      const S = Math.min(Math.max(h, 1), o.value);
      C.value = "", A(S);
    };
    return (b, h) => (y(), k("div", Tu, [
      f("div", Mu, [
        f("button", {
          onClick: h[0] || (h[0] = (S) => A(t.page - 1)),
          disabled: t.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(P(a)("pagination.previous")), 9, Ru),
        f("span", zu, T(P(a)("pagination.pageOf", { page: t.page, total: o.value })), 1),
        f("button", {
          onClick: h[1] || (h[1] = (S) => A(t.page + 1)),
          disabled: t.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, T(P(a)("pagination.next")), 9, Pu)
      ]),
      f("div", Du, [
        f("div", Bu, [
          f("p", Lu, [
            rt(T(P(a)("pagination.showing")) + " ", 1),
            f("span", Uu, T(c.value), 1),
            rt(" " + T(P(a)("pagination.to")) + " ", 1),
            f("span", Ku, T(l.value), 1),
            rt(" " + T(P(a)("pagination.of")) + " ", 1),
            f("span", Fu, T(t.total), 1),
            rt(" " + T(P(a)("pagination.results")), 1)
          ]),
          t.showPageSizeSelector ? (y(), k("div", Nu, [
            f("span", Wu, T(P(a)("pagination.perPage")) + ":", 1),
            f("div", Vu, [
              at(Cu, {
                "model-value": t.pageSize,
                options: m.value,
                "onUpdate:modelValue": $
              }, null, 8, ["model-value", "options"])
            ])
          ])) : z("", !0),
          t.showJump ? (y(), k("div", ju, [
            f("span", qu, T(P(a)("pagination.jumpTo")), 1),
            ye(f("input", {
              "onUpdate:modelValue": h[2] || (h[2] = (S) => C.value = S),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: P(a)("pagination.jumpPlaceholder"),
              onKeyup: Ot(O, ["enter"])
            }, null, 40, Hu), [
              [we, C.value]
            ]),
            f("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: O
            }, T(P(a)("pagination.jumpAction")), 1)
          ])) : z("", !0)
        ]),
        f("nav", Gu, [
          f("button", {
            onClick: h[3] || (h[3] = (S) => A(t.page - 1)),
            disabled: t.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": P(a)("pagination.previous")
          }, [
            at(et, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, Qu),
          (y(!0), k(Q, null, Y(_.value, (S, R) => (y(), k("button", {
            key: `${S}-${R}`,
            onClick: (U) => typeof S == "number" && A(S),
            disabled: typeof S != "number",
            class: N([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              S === t.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof S != "number" && "cursor-default"
            ]),
            "aria-label": typeof S == "number" ? P(a)("pagination.goToPage", { page: S }) : void 0,
            "aria-current": S === t.page ? "page" : void 0
          }, T(S), 11, Ju))), 128)),
          f("button", {
            onClick: h[4] || (h[4] = (S) => A(t.page + 1)),
            disabled: t.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": P(a)("pagination.next")
          }, [
            at(et, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, Zu)
        ])
      ])
    ]));
  }
}), hd = /* @__PURE__ */ jt(Xu, [["__scopeId", "data-v-8e9f9f74"]]), Yu = { class: "modal-header" }, td = {
  key: 0,
  class: "modal-footer"
}, ed = /* @__PURE__ */ pt({
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
    const s = `modal-title-${++a}`, i = D(null), o = D(null);
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
    return tt(
      () => l.show,
      async (O) => {
        if (O) {
          if (c = document.activeElement, document.body.classList.add("modal-open"), await ot(), o.value && (o.value.scrollTop = 0), i.value) {
            const b = i.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            b == null || b.focus();
          }
        } else
          document.body.classList.remove("modal-open"), c && typeof c.focus == "function" && c.focus(), c = null;
      },
      { immediate: !0 }
    ), Tt(() => {
      document.addEventListener("keydown", $);
    }), Vt(() => {
      document.removeEventListener("keydown", $), document.body.classList.remove("modal-open");
    }), (O, b) => (y(), ct(pe, { to: "body" }, [
      at(he, { name: "modal" }, {
        default: vt(() => [
          t.show ? (y(), k("div", {
            key: 0,
            class: "modal-overlay",
            style: Mt(C.value),
            "aria-labelledby": s,
            role: "dialog",
            "aria-modal": "true",
            onClick: J(A, ["self"])
          }, [
            f("div", {
              ref_key: "dialogRef",
              ref: i,
              class: N(["modal-content", "base-dialog-surface", "console-skin-dialog", _.value, t.panelClass]),
              onClick: b[1] || (b[1] = J(() => {
              }, ["stop"]))
            }, [
              f("div", Yu, [
                f("h3", {
                  id: s,
                  class: "modal-title"
                }, T(t.title), 1),
                t.showCloseButton ? (y(), k("button", {
                  key: 0,
                  onClick: b[0] || (b[0] = (h) => m("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  at(et, {
                    name: "x",
                    size: "md"
                  })
                ])) : z("", !0)
              ]),
              f("div", {
                ref_key: "modalBodyRef",
                ref: o,
                class: "modal-body"
              }, [
                Z(O.$slots, "default")
              ], 512),
              O.$slots.footer ? (y(), k("div", td, [
                Z(O.$slots, "footer")
              ])) : z("", !0)
            ], 2)
          ], 4)) : z("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ad = { class: "space-y-4" }, nd = { class: "text-sm text-gray-600 dark:text-gray-400" }, sd = { class: "flex justify-end space-x-3" }, yd = /* @__PURE__ */ pt({
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
    const { t: a } = kt(), s = t, i = I(() => s.confirmText || a("common.confirm")), o = I(() => s.cancelText || a("common.cancel")), c = e, l = () => {
      c("confirm");
    }, m = () => {
      c("cancel");
    };
    return (C, _) => (y(), ct(ed, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: m
    }, {
      footer: vt(() => [
        f("div", sd, [
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
          }, T(i.value), 3)
        ])
      ]),
      default: vt(() => [
        f("div", ad, [
          f("p", nd, T(t.message), 1),
          Z(C.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
}), id = { class: "empty-state" }, rd = { class: "mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-dark-800" }, od = {
  key: 1,
  class: "empty-state-icon h-10 w-10",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5"
}, cd = { class: "empty-state-title" }, ld = { class: "empty-state-description" }, ud = {
  key: 0,
  class: "mt-6"
}, wd = /* @__PURE__ */ pt({
  __name: "EmptyState",
  props: {
    icon: {},
    title: {},
    description: { default: "" },
    actionText: {},
    actionTo: {},
    actionIcon: { type: Boolean, default: !0 },
    message: {}
  },
  emits: ["action"],
  setup(t) {
    const { t: e } = kt(), a = t, s = I(() => a.title || e("common.noData"));
    return (i, o) => (y(), k("div", id, [
      f("div", rd, [
        Z(i.$slots, "icon", {}, () => [
          t.icon ? (y(), ct(se(t.icon), {
            key: 0,
            class: "empty-state-icon h-10 w-10",
            "aria-hidden": "true"
          })) : (y(), k("svg", od, [...o[1] || (o[1] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            }, null, -1)
          ])]))
        ])
      ]),
      f("h3", cd, T(s.value), 1),
      f("p", ld, T(t.description), 1),
      t.actionText || i.$slots.action ? (y(), k("div", ud, [
        Z(i.$slots, "action", {}, () => [
          t.actionText ? (y(), ct(se(t.actionTo ? "RouterLink" : "button"), {
            key: 0,
            to: t.actionTo,
            onClick: o[0] || (o[0] = (c) => !t.actionTo && i.$emit("action")),
            class: "btn btn-primary"
          }, {
            default: vt(() => [
              t.actionIcon ? (y(), ct(et, {
                key: 0,
                name: "plus",
                size: "md",
                class: "mr-2"
              })) : z("", !0),
              rt(" " + T(t.actionText), 1)
            ]),
            _: 1
          }, 8, ["to"])) : z("", !0)
        ])
      ])) : z("", !0)
    ]));
  }
}), dd = [
  { value: "anthropic", label: "Anthropic" },
  { value: "openai", label: "OpenAI" },
  { value: "gemini", label: "Gemini" },
  { value: "antigravity", label: "Antigravity" },
  { value: "grok", label: "Grok" },
  { value: "kimi", label: "Kimi" },
  { value: "zhipu", label: "Zhipu GLM" },
  { value: "deepseek", label: "DeepSeek" }
], bd = [
  ...dd,
  { value: "composite", label: "Composite" }
];
export {
  dd as C,
  fd as D,
  bd as G,
  hd as P,
  Cu as S,
  ed as _,
  yd as a,
  gd as b,
  wd as c,
  pd as g,
  lo as o
};
