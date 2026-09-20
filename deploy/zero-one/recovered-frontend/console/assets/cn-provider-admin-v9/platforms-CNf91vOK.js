import { a as n, a9 as Ae, aa as Oe, p as C, i as O, Q as Ee, w as Q, ab as qt, a2 as Me, d as St, u as $t, r as G, c as Gt, o as Re, m as b, f as v, F as U, j as F, g as m, l as D, J, q as at, _ as ut, h as A, s as B, z as Vt, k as et, D as Ht, n as ot, B as re, x as Pe, y as Te, E as ze, A as Ue, v as Qt } from "./cnProviderAdminLeaf-DOTfdkE4.js";
import { S as De, _ as Be } from "./BaseDialog.vue_vue_type_script_setup_true_lang-B6Pfcffn.js";
async function Le() {
  const { data: t } = await n.get("/admin/dashboard/stats");
  return t;
}
async function Ke() {
  const { data: t } = await n.get("/admin/dashboard/realtime");
  return t;
}
async function Fe(t) {
  const { data: e } = await n.get("/admin/dashboard/trend", { params: t });
  return e;
}
async function Ne(t) {
  const { data: e } = await n.get("/admin/dashboard/models", { params: t });
  return e;
}
async function We(t) {
  const { data: e } = await n.get("/admin/dashboard/groups", { params: t });
  return e;
}
async function Jl(t) {
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
async function Ve(t) {
  const { data: e } = await n.get("/admin/dashboard/users-ranking", {
    params: t
  });
  return e;
}
async function He(t) {
  const { data: e } = await n.post("/admin/dashboard/users-usage", {
    user_ids: t
  });
  return e;
}
async function Qe(t) {
  const { data: e } = await n.post(
    "/admin/dashboard/api-keys-usage",
    {
      api_key_ids: t
    }
  );
  return e;
}
const Je = {
  getStats: Le,
  getRealtimeMetrics: Ke,
  getUsageTrend: Fe,
  getModelStats: Ne,
  getGroupStats: We,
  getSnapshotV2: je,
  getApiKeyUsageTrend: qe,
  getUserUsageTrend: Ge,
  getUserSpendingRanking: Ve,
  getBatchUsersUsage: He,
  getBatchApiKeysUsage: Qe
};
async function Ze(t = 1, e = 20, a, s) {
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
    for (const [c, d] of Object.entries(a.attributes))
      d && (i[`attr[${c}]`] = d);
  const { data: o } = await n.get("/admin/users", {
    params: i,
    signal: s == null ? void 0 : s.signal
  });
  return o;
}
async function Xe(t, e = !1) {
  const a = e ? `/admin/users/${t}?include_deleted=true` : `/admin/users/${t}`, { data: s } = await n.get(a);
  return s;
}
async function Ye(t) {
  const { data: e } = await n.post("/admin/users", t);
  return e;
}
async function xt(t, e) {
  const { data: a } = await n.put(`/admin/users/${t}`, e);
  return a;
}
async function ta(t) {
  const { data: e } = await n.delete(`/admin/users/${t}`);
  return e;
}
async function ea(t, e, a = "set", s) {
  const { data: i } = await n.post(`/admin/users/${t}/balance`, {
    balance: e,
    operation: a,
    notes: s || ""
  });
  return i;
}
async function aa(t, e) {
  return xt(t, { concurrency: e });
}
async function na(t) {
  const { data: e } = await n.post(
    "/admin/users/batch-limits",
    t
  );
  return e;
}
async function sa(t, e) {
  return xt(t, { status: e });
}
async function ia(t) {
  const { data: e } = await n.get(`/admin/users/${t}/api-keys`);
  return e;
}
async function ra(t, e = "month") {
  const { data: a } = await n.get(`/admin/users/${t}/usage`, {
    params: { period: e }
  });
  return a;
}
async function oa(t, e = 1, a = 20, s) {
  const i = { page: e, page_size: a };
  s && (i.type = s);
  const { data: o } = await n.get(
    `/admin/users/${t}/balance-history`,
    { params: i }
  );
  return o;
}
async function ca(t, e, a) {
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
async function la(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/platform-quotas`
  );
  return e;
}
async function da(t, e) {
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
const ma = {
  list: Ze,
  getById: Xe,
  create: Ye,
  update: xt,
  delete: ta,
  updateBalance: ea,
  updateConcurrency: aa,
  batchUpdateLimits: na,
  toggleStatus: sa,
  getUserApiKeys: ia,
  getUserUsageStats: ra,
  getUserBalanceHistory: oa,
  replaceGroup: ca,
  bindUserAuthIdentity: ua,
  getPlatformQuotas: la,
  updatePlatformQuotas: da,
  resetPlatformQuotaWindow: ga
};
async function fa(t = 1, e = 20, a, s) {
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
async function oe(t) {
  const { data: e } = await n.get("/admin/groups/all", {
    params: t ? { platform: t } : void 0
  });
  return e;
}
async function pa() {
  const { data: t } = await n.get("/admin/groups/all", {
    params: { include_inactive: !0 }
  });
  return t;
}
async function ha(t) {
  return oe(t);
}
async function ya() {
  const { data: t } = await n.get("/admin/groups/live-capability");
  return t;
}
async function wa(t) {
  const { data: e } = await n.get(`/admin/groups/${t}`);
  return e;
}
async function ba(t, e) {
  const { data: a } = await n.get(
    `/admin/groups/${t}/model-allowlist-candidates`,
    {
      params: e ? { platform: e } : void 0
    }
  );
  return a.models || [];
}
async function va(t) {
  const { data: e } = await n.post("/admin/groups", t);
  return e;
}
const yt = /* @__PURE__ */ new Map();
function ka() {
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
function Sa(t) {
  const e = ka();
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
function Jt(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function xa(t) {
  var i, o;
  const e = Sa(t);
  let a = e ? yt.get(e.key) ?? $a(e.key) : null;
  if (!a) {
    const c = ((o = (i = globalThis.crypto) == null ? void 0 : i.randomUUID) == null ? void 0 : o.call(i)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `group-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (yt.set(e.key, a), Jt(e.key, a));
  const { data: s } = await n.post(`/admin/groups/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": a }
  });
  return e && (yt.delete(e.key), Jt(e.key, null)), s;
}
async function ce(t, e) {
  const { data: a } = await n.put(`/admin/groups/${t}`, e);
  return a;
}
async function _a(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}`);
  return e;
}
async function Ca(t, e) {
  return ce(t, { status: e });
}
async function Ia(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/stats`);
  return e;
}
async function Aa(t, e = 1, a = 20) {
  const { data: s } = await n.get(`/admin/groups/${t}/api-keys`, {
    params: { page: e, page_size: a }
  });
  return s;
}
async function Oa(t) {
  const { data: e } = await n.get(`/admin/groups/${t}/composite-routes`);
  return e;
}
async function Ea(t, e) {
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
async function Pa(t, e) {
  const { data: a } = await n.post(
    `/admin/groups/${t}/composite-routes/preview`,
    e
  );
  return a;
}
async function Ta(t) {
  const { data: e } = await n.get(
    `/admin/groups/${t}/rate-multipliers`
  );
  return e;
}
async function za(t) {
  const { data: e } = await n.put("/admin/groups/sort-order", {
    updates: t
  });
  return e;
}
async function Ua(t) {
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
async function Ba(t) {
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
async function La(t, e) {
  const { data: a } = await n.put(
    `/admin/groups/${t}/rpm-overrides`,
    { entries: e }
  );
  return a;
}
async function Ka(t) {
  const { data: e } = await n.delete(`/admin/groups/${t}/rpm-overrides`);
  return e;
}
async function Fa() {
  const { data: t } = await n.get("/admin/groups/usage-summary");
  return t;
}
async function Na() {
  const { data: t } = await n.get("/admin/groups/capacity-summary");
  return t;
}
const Wa = {
  list: fa,
  getAll: oe,
  getByPlatform: ha,
  getAllIncludingInactive: pa,
  getLiveCapability: ya,
  getById: wa,
  getModelAllowlistCandidates: ba,
  create: va,
  duplicate: xa,
  update: ce,
  delete: _a,
  toggleStatus: Ca,
  getStats: Ia,
  getGroupApiKeys: Aa,
  listCompositeRoutes: Oa,
  createCompositeRoute: Ea,
  updateCompositeRoute: Ma,
  deleteCompositeRoute: Ra,
  previewCompositeRoute: Pa,
  getGroupRateMultipliers: Ta,
  clearGroupRateMultipliers: Ua,
  batchSetGroupRateMultipliers: Da,
  getGroupRPMOverrides: Ba,
  clearGroupRPMOverrides: Ka,
  batchSetGroupRPMOverrides: La,
  updateSortOrder: za,
  getUsageSummary: Fa,
  getCapacitySummary: Na
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
  var d;
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
    validateStatus: (g) => g >= 200 && g < 300 || g === 304
  }), c = typeof ((d = o.headers) == null ? void 0 : d.etag) == "string" ? o.headers.etag : null;
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
async function Va(t) {
  const { data: e } = await n.post("/admin/accounts", t);
  return e;
}
const wt = /* @__PURE__ */ new Map();
function vt(t) {
  return `sub2api:admin:account-duplicate:${t}`;
}
function Ha(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(vt(t))) ?? null;
  } catch {
    return null;
  }
}
function Zt(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(vt(t), e) : (s = globalThis.sessionStorage) == null || s.removeItem(vt(t));
  } catch {
  }
}
async function Qa(t) {
  var s, i;
  let e = wt.get(t) ?? Ha(t);
  if (!e) {
    const o = ((i = (s = globalThis.crypto) == null ? void 0 : s.randomUUID) == null ? void 0 : i.call(s)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    e = `account-duplicate-${t}-${o}`;
  }
  wt.set(t, e), Zt(t, e);
  const { data: a } = await n.post(`/admin/accounts/${t}/duplicate`, void 0, {
    headers: { "Idempotency-Key": e }
  });
  return wt.delete(t), Zt(t, null), a;
}
async function ue(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}`, e);
  return a;
}
async function Ja(t) {
  const { data: e } = await n.get(
    `/admin/accounts/${t}/grok-media-eligibility`
  );
  return e;
}
async function Za(t, e) {
  const { data: a } = await n.put(
    `/admin/accounts/${t}/grok-media-eligibility`,
    { mode: e }
  );
  return a;
}
async function Xa(t) {
  const { data: e } = await n.post("/admin/accounts/check-mixed-channel", t);
  return e;
}
async function Ya(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}`);
  return e;
}
async function tn(t, e) {
  return ue(t, { status: e });
}
async function en(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/test`);
  return e;
}
async function an(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/refresh`);
  return "account" in e ? e : { account: e };
}
async function nn(t, e) {
  const { data: a } = await n.post(
    `/admin/accounts/${t}/apply-oauth-credentials`,
    e
  );
  return a;
}
async function sn(t, e = 30) {
  const { data: a } = await n.get(`/admin/accounts/${t}/stats`, {
    params: { days: e }
  });
  return a;
}
async function rn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/clear-error`);
  return e;
}
async function on(t, e, a) {
  const s = {};
  e && (s.source = e), a && (s.force = "true");
  const { data: i } = await n.get(`/admin/accounts/${t}/usage`, {
    params: Object.keys(s).length > 0 ? s : void 0
  });
  return i;
}
async function cn(t, e) {
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
async function ln(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/recover-state`);
  return e;
}
async function dn(t) {
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
async function pn(t, e) {
  const { data: a } = await n.post(t, e);
  return a;
}
async function hn(t) {
  const { data: e } = await n.post("/admin/accounts/batch", { accounts: t });
  return e;
}
async function yn(t) {
  const { data: e } = await n.post("/admin/accounts/batch-update-credentials", t);
  return e;
}
async function wn(t, e) {
  const a = Array.isArray(t) ? {
    account_ids: t,
    ...e ?? {}
  } : t, { data: s } = await n.post("/admin/accounts/bulk-update", a);
  return s;
}
async function bn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/today-stats`);
  return e;
}
async function vn(t) {
  const { data: e } = await n.post("/admin/accounts/today-stats/batch", {
    account_ids: t
  });
  return e;
}
async function kn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/schedulable`, {
    schedulable: e
  });
  return a;
}
async function Sn(t) {
  const { data: e } = await n.get(`/admin/accounts/${t}/models`);
  return e;
}
async function $n(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/models/sync-upstream`);
  return e;
}
async function xn(t) {
  const { data: e } = await n.post("/admin/accounts/models/sync-upstream-preview", t);
  return e;
}
async function _n(t) {
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
async function In(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { platform: s, type: i, status: o, group: c, privacy_mode: d, search: g, sort_by: S, sort_order: $ } = t.filters;
    s && (e.platform = s), i && (e.type = i), o && (e.status = o), c && (e.group = c), d && (e.privacy_mode = d), g && (e.search = g), S && (e.sort_by = S), $ && (e.sort_order = $);
  }
  (t == null ? void 0 : t.includeProxies) === !1 && (e.include_proxies = "false");
  const { data: a } = await n.get("/admin/accounts/data", { params: e });
  return a;
}
async function An(t) {
  const { data: e } = await n.post("/admin/accounts/data", {
    data: t.data,
    skip_default_group_bind: t.skip_default_group_bind
  });
  return e;
}
async function On(t) {
  const { data: e } = await n.post("/admin/accounts/import/codex-session", t, {
    timeout: 12e4
    // 120s timeout for large session imports
  });
  return e;
}
async function En(t) {
  const { data: e } = await n.post("/admin/openai/create-from-codex-pat", t);
  return e;
}
async function Mn() {
  const { data: t } = await n.get(
    "/admin/accounts/antigravity/default-model-mapping"
  );
  return t;
}
async function Rn(t, e, a = "/admin/openai/refresh-token", s) {
  const i = {
    refresh_token: t
  };
  e && (i.proxy_id = e), s && (i.client_id = s);
  const { data: o } = await n.post(a, i);
  return o;
}
async function Pn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/revert-proxy-fallback`);
  return e;
}
async function Tn(t) {
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
async function Un(t) {
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
async function Kn(t, e) {
  const { data: a } = await n.post(`/admin/accounts/${t}/shadow`, e);
  return a;
}
async function Fn() {
  const { data: t } = await n.get("/admin/accounts/upstream-billing-probe/settings");
  return t;
}
async function Nn(t) {
  const { data: e } = await n.put(
    "/admin/accounts/upstream-billing-probe/settings",
    t
  );
  return e;
}
async function Wn(t, e) {
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
async function Vn(t) {
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
async function Qn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/session`, {
    session: e
  });
  return a;
}
async function Jn(t) {
  const { data: e } = await n.delete(`/admin/accounts/${t}/ollama-cloud-usage/session`);
  return e;
}
async function Zn(t, e) {
  const { data: a } = await n.put(`/admin/accounts/${t}/ollama-cloud-usage/auto-refresh`, {
    enabled: e
  });
  return a;
}
async function Xn(t) {
  const { data: e } = await n.post(`/admin/accounts/${t}/ollama-cloud-usage/refresh`);
  return e;
}
const Yn = {
  list: ja,
  listWithEtag: qa,
  getById: Ga,
  create: Va,
  duplicate: Qa,
  update: ue,
  getGrokMediaEligibility: Ja,
  updateGrokMediaEligibility: Za,
  checkMixedChannelRisk: Xa,
  delete: Ya,
  toggleStatus: tn,
  testAccount: en,
  refreshCredentials: an,
  applyOAuthCredentials: nn,
  getStats: sn,
  clearError: rn,
  getUsage: on,
  getBatchUsage: cn,
  getTodayStats: bn,
  getBatchTodayStats: vn,
  clearRateLimit: un,
  recoverState: ln,
  resetAccountQuota: dn,
  getTempUnschedulableStatus: gn,
  resetTempUnschedulable: mn,
  setSchedulable: kn,
  getAvailableModels: Sn,
  syncUpstreamModels: $n,
  syncUpstreamModelsPreview: xn,
  generateAuthUrl: fn,
  exchangeCode: pn,
  refreshOpenAIToken: Rn,
  batchCreate: hn,
  batchUpdateCredentials: yn,
  bulkUpdate: wn,
  previewFromCrs: _n,
  syncFromCrs: Cn,
  exportData: In,
  importData: An,
  importCodexSession: On,
  createOpenAICodexPAT: En,
  getAntigravityDefaultModelMapping: Mn,
  batchDelete: Tn,
  batchClearError: zn,
  batchRefresh: Un,
  setPrivacy: Dn,
  revertProxyFallback: Pn,
  refreshOpenAIQuota: Bn,
  resetOpenAIQuota: Ln,
  createSparkShadow: Kn,
  getUpstreamBillingProbeSettings: Fn,
  updateUpstreamBillingProbeSettings: Nn,
  setUpstreamBillingProbeEnabled: Wn,
  probeUpstreamBilling: jn,
  probeUpstreamBillingBatch: qn,
  getOllamaCloudUsageSettings: Gn,
  updateOllamaCloudUsageSettings: Vn,
  getOllamaCloudUsage: Hn,
  saveOllamaCloudUsageSession: Qn,
  deleteOllamaCloudUsageSession: Jn,
  setOllamaCloudUsageAutoRefresh: Zn,
  refreshOllamaCloudUsage: Xn
};
function _t(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid proxy list response");
}
async function ts(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/proxies", {
    params: {
      page: t,
      page_size: e,
      ...a
    },
    signal: s == null ? void 0 : s.signal
  });
  return _t(i == null ? void 0 : i.items), i;
}
async function es() {
  const { data: t } = await n.get("/admin/proxies/all");
  return _t(t), t;
}
async function as() {
  const { data: t } = await n.get("/admin/proxies/all", {
    params: { with_count: "true" }
  });
  return _t(t), t;
}
async function ns(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}`);
  return e;
}
async function ss(t) {
  const { data: e } = await n.post("/admin/proxies", t);
  return e;
}
async function le(t, e) {
  const { data: a } = await n.put(`/admin/proxies/${t}`, e);
  return a;
}
async function is(t) {
  const { data: e } = await n.delete(`/admin/proxies/${t}`);
  return e;
}
async function rs(t, e) {
  return le(t, { status: e });
}
async function os(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/test`);
  return e;
}
async function cs(t) {
  const { data: e } = await n.post(`/admin/proxies/${t}/quality-check`);
  return e;
}
async function us(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/stats`);
  return e;
}
async function ls(t) {
  const { data: e } = await n.get(`/admin/proxies/${t}/accounts`);
  return e;
}
async function ds(t) {
  const { data: e } = await n.post("/admin/proxies/batch", { proxies: t });
  return e;
}
async function gs(t) {
  const { data: e } = await n.post("/admin/proxies/batch-delete", { ids: t });
  return e;
}
async function ms(t) {
  const e = {};
  if (t != null && t.ids && t.ids.length > 0)
    e.ids = t.ids.join(",");
  else if (t != null && t.filters) {
    const { protocol: s, status: i, search: o, sort_by: c, sort_order: d } = t.filters;
    s && (e.protocol = s), i && (e.status = i), o && (e.search = o), c && (e.sort_by = c), d && (e.sort_order = d);
  }
  const { data: a } = await n.get("/admin/proxies/data", { params: e });
  return a;
}
async function fs(t) {
  const { data: e } = await n.post("/admin/proxies/data", t);
  return e;
}
const ps = {
  list: ts,
  getAll: es,
  getAllWithCount: as,
  getById: ns,
  create: ss,
  update: le,
  delete: is,
  toggleStatus: rs,
  testProxy: os,
  checkProxyQuality: cs,
  getStats: us,
  getProxyAccounts: ls,
  batchCreate: ds,
  batchDelete: gs,
  exportData: ms,
  importData: fs
};
async function hs(t = 1, e = 20, a, s) {
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
async function ys(t) {
  const { data: e } = await n.get(`/admin/redeem-codes/${t}`);
  return e;
}
async function ws(t, e, a, s, i, o, c, d) {
  const g = {
    count: t,
    type: e,
    value: a
  };
  e === "subscription" && (g.group_id = s, i && i > 0 && (g.validity_days = i)), e === "mystery_box" && (g.min_value = c, g.max_value = d), o && o > 0 && (g.expires_in_days = o);
  const { data: S } = await n.post("/admin/redeem-codes/generate", g);
  return S;
}
async function bs(t) {
  const { data: e } = await n.delete(`/admin/redeem-codes/${t}`);
  return e;
}
async function vs(t) {
  const { data: e } = await n.post("/admin/redeem-codes/batch-delete", { ids: t });
  return e;
}
async function ks(t, e) {
  const { data: a } = await n.post("/admin/redeem-codes/batch-update", { ids: t, fields: e });
  return a;
}
async function Ss(t) {
  const { data: e } = await n.post(`/admin/redeem-codes/${t}/expire`);
  return e;
}
async function $s() {
  const { data: t } = await n.get("/admin/redeem-codes/stats");
  return t;
}
async function xs(t) {
  return (await n.get("/admin/redeem-codes/export", {
    params: t,
    responseType: "blob"
  })).data;
}
const _s = {
  list: hs,
  getById: ys,
  generate: ws,
  delete: bs,
  batchDelete: vs,
  batchUpdate: ks,
  expire: Ss,
  getStats: $s,
  exportCodes: xs
};
async function Cs(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/promo-codes", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function Is(t) {
  const { data: e } = await n.get(`/admin/promo-codes/${t}`);
  return e;
}
async function As(t) {
  const { data: e } = await n.post("/admin/promo-codes", t);
  return e;
}
async function Os(t, e) {
  const { data: a } = await n.put(`/admin/promo-codes/${t}`, e);
  return a;
}
async function Es(t) {
  const { data: e } = await n.delete(`/admin/promo-codes/${t}`);
  return e;
}
async function Ms(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/promo-codes/${t}/usages`,
    { params: { page: e, page_size: a } }
  );
  return s;
}
const Rs = {
  list: Cs,
  getById: Is,
  create: As,
  update: Os,
  delete: Es,
  getUsages: Ms
};
async function Ps(t = 1, e = 20, a, s) {
  const { data: i } = await n.get("/admin/announcements", {
    params: { page: t, page_size: e, ...a },
    signal: s == null ? void 0 : s.signal
  });
  return i;
}
async function Ts(t) {
  const { data: e } = await n.get(`/admin/announcements/${t}`);
  return e;
}
async function zs(t) {
  const { data: e } = await n.post("/admin/announcements", t);
  return e;
}
async function Us(t, e) {
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
  list: Ps,
  getById: Ts,
  create: zs,
  update: Us,
  delete: Ds,
  getReadStatus: Bs
};
async function Ks() {
  const { data: t } = await n.get("/admin/settings");
  return t;
}
async function Fs() {
  const { data: t } = await n.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return t;
}
async function Ns(t) {
  const { data: e } = await n.put(
    "/admin/settings",
    t
  );
  return e;
}
async function Ws(t) {
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
async function Vs(t, e, a) {
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
async function Qs(t) {
  const { data: e } = await n.post(
    "/admin/settings/email-template-preview",
    t
  );
  return e;
}
async function Js() {
  const { data: t } = await n.get(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Zs() {
  const { data: t } = await n.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return t;
}
async function Xs() {
  const { data: t } = await n.delete(
    "/admin/settings/admin-api-key"
  );
  return t;
}
async function Ys() {
  const { data: t } = await n.get(
    "/admin/settings/overload-cooldown"
  );
  return t;
}
async function ti(t) {
  const { data: e } = await n.put(
    "/admin/settings/overload-cooldown",
    t
  );
  return e;
}
async function ei() {
  const { data: t } = await n.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return t;
}
async function ai(t) {
  const { data: e } = await n.put(
    "/admin/settings/rate-limit-429-cooldown",
    t
  );
  return e;
}
async function ni() {
  const { data: t } = await n.get(
    "/admin/settings/panel-rate-limit"
  );
  return t;
}
async function si(t) {
  const { data: e } = await n.put(
    "/admin/settings/panel-rate-limit",
    t
  );
  return e;
}
async function ii() {
  const { data: t } = await n.get(
    "/admin/settings/stream-timeout"
  );
  return t;
}
async function ri(t) {
  const { data: e } = await n.put(
    "/admin/settings/stream-timeout",
    t
  );
  return e;
}
async function oi() {
  const { data: t } = await n.get(
    "/admin/settings/rectifier"
  );
  return t;
}
async function ci(t) {
  const { data: e } = await n.put(
    "/admin/settings/rectifier",
    t
  );
  return e;
}
async function ui() {
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
async function di() {
  const { data: t } = await n.get(
    "/admin/settings/web-search-emulation"
  );
  return t;
}
async function gi(t) {
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
async function fi(t) {
  await n.post(
    "/admin/settings/web-search-emulation/reset-usage",
    t
  );
}
const pi = {
  getSettings: Ks,
  getNavigationSettings: Fs,
  updateSettings: Ns,
  testSmtpConnection: Ws,
  sendTestEmail: js,
  getEmailTemplates: qs,
  getEmailTemplate: Gs,
  updateEmailTemplate: Vs,
  restoreOfficialEmailTemplate: Hs,
  previewEmailTemplate: Qs,
  getAdminApiKey: Js,
  regenerateAdminApiKey: Zs,
  deleteAdminApiKey: Xs,
  getOverloadCooldownSettings: Ys,
  updateOverloadCooldownSettings: ti,
  getRateLimit429CooldownSettings: ei,
  updateRateLimit429CooldownSettings: ai,
  getPanelRateLimitSettings: ni,
  updatePanelRateLimitSettings: si,
  getStreamTimeoutSettings: ii,
  updateStreamTimeoutSettings: ri,
  getRectifierSettings: oi,
  updateRectifierSettings: ci,
  getBetaPolicySettings: ui,
  updateBetaPolicySettings: li,
  getWebSearchEmulationConfig: di,
  updateWebSearchEmulationConfig: gi,
  testWebSearchEmulation: mi,
  resetWebSearchUsage: fi
};
async function hi(t, e) {
  const { data: a } = await n.post(
    "/admin/subscriptions/bulk-action",
    t,
    { headers: { "Idempotency-Key": e } }
  );
  return a;
}
async function yi(t = 1, e = 20, a, s) {
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
async function wi(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}`);
  return e;
}
async function bi(t) {
  const { data: e } = await n.get(`/admin/subscriptions/${t}/progress`);
  return e;
}
async function vi(t) {
  const { data: e } = await n.post("/admin/subscriptions/assign", t);
  return e;
}
async function ki(t) {
  const { data: e } = await n.post(
    "/admin/subscriptions/bulk-assign",
    t
  );
  return e;
}
async function Si(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/extend`,
    e
  );
  return a;
}
async function $i(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/revoke`);
  return e;
}
async function xi(t) {
  const { data: e } = await n.post(`/admin/subscriptions/${t}/restore`);
  return e;
}
async function _i(t, e) {
  const { data: a } = await n.post(
    `/admin/subscriptions/${t}/reset-quota`,
    e
  );
  return a;
}
async function Ci(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/groups/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
async function Ii(t, e = 1, a = 20) {
  const { data: s } = await n.get(
    `/admin/users/${t}/subscriptions`,
    {
      params: { page: e, page_size: a }
    }
  );
  return s;
}
const Ai = {
  list: yi,
  getById: wi,
  getProgress: bi,
  assign: vi,
  bulkAssign: ki,
  bulkAction: hi,
  extend: Si,
  revoke: $i,
  restore: xi,
  resetQuota: _i,
  listByGroup: Ci,
  listByUser: Ii
};
async function Oi(t, e) {
  const { data: a } = await n.get("/admin/usage", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Ei(t) {
  const { data: e } = await n.get("/admin/usage/stats", {
    params: t
  });
  return e;
}
async function Mi(t) {
  const { data: e } = await n.get("/admin/usage/search-users", {
    params: { q: t }
  });
  return e;
}
async function Ri(t, e) {
  const a = {};
  t !== void 0 && (a.user_id = t), e && (a.q = e);
  const { data: s } = await n.get("/admin/usage/search-api-keys", {
    params: a
  });
  return s;
}
async function Pi(t, e) {
  const { data: a } = await n.get("/admin/usage/cleanup-tasks", {
    params: t,
    signal: e == null ? void 0 : e.signal
  });
  return a;
}
async function Ti(t) {
  const { data: e } = await n.post("/admin/usage/cleanup-tasks", t);
  return e;
}
async function zi(t) {
  const { data: e } = await n.post(
    `/admin/usage/cleanup-tasks/${t}/cancel`
  );
  return e;
}
const Ui = {
  list: Oi,
  getStats: Ei,
  searchUsers: Mi,
  searchApiKeys: Ri,
  listCleanupTasks: Pi,
  createCleanupTask: Ti,
  cancelCleanupTask: zi
};
async function Di(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/auth-url",
    t
  );
  return e;
}
async function Bi(t) {
  const { data: e } = await n.post(
    "/admin/gemini/oauth/exchange-code",
    t
  );
  return e;
}
async function Li() {
  const { data: t } = await n.get("/admin/gemini/oauth/capabilities");
  return t;
}
const Ki = { generateAuthUrl: Di, exchangeCode: Bi, getCapabilities: Li };
async function Fi(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/auth-url",
    t
  );
  return e;
}
async function Ni(t) {
  const { data: e } = await n.post(
    "/admin/antigravity/oauth/exchange-code",
    t
  );
  return e;
}
async function Wi(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/antigravity/oauth/refresh-token",
    a
  );
  return s;
}
const ji = { generateAuthUrl: Fi, exchangeCode: Ni, refreshAntigravityToken: Wi }, de = 12e4;
async function qi() {
  const { data: t } = await n.get("/admin/grok/oauth/capabilities");
  return t;
}
const Gi = 3, Vi = 9e4, Hi = 9e4;
function Qi(t) {
  return Math.ceil(Math.max(1, t) / Gi) * Vi + Hi;
}
async function Ji(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/auth-url",
    t
  );
  return e;
}
async function Zi(t) {
  const { data: e } = await n.post(
    "/admin/grok/oauth/exchange-code",
    t
  );
  return e;
}
async function Xi(t, e) {
  const a = { refresh_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post(
    "/admin/grok/oauth/refresh-token",
    a
  );
  return s;
}
async function Yi(t) {
  const { data: e } = await n.get(`/admin/grok/accounts/${t}/quota`);
  return e;
}
async function tr(t) {
  const { data: e } = await n.post(`/admin/grok/accounts/${t}/reset-quota`);
  return e;
}
async function er(t) {
  const { data: e } = await n.post(
    "/admin/grok/sso-to-oauth",
    t,
    { timeout: Qi(t.sso_tokens.length) }
  );
  return e;
}
async function ar(t, e) {
  const a = { sso_token: t };
  e && (a.proxy_id = e);
  const { data: s } = await n.post("/admin/grok/oauth/sso-token", a, {
    timeout: de
  });
  return s;
}
async function nr(t, e) {
  const a = "----", s = t.indexOf(a), i = (s >= 0 ? t.slice(0, s) : t).trim(), o = s >= 0 ? t.slice(s + a.length) : "", c = { email: i, password: o };
  e && (c.proxy_id = e);
  const { data: d } = await n.post("/admin/grok/oauth/password", c, {
    timeout: de
  });
  return d;
}
const sr = {
  generateAuthUrl: Ji,
  getCapabilities: qi,
  exchangeCode: Zi,
  refreshGrokToken: Xi,
  queryQuota: Yi,
  resetQuota: tr,
  createFromSSO: er,
  validateSSOToken: ar,
  authorizePassword: nr
};
async function ir(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/quota`
  );
  return e;
}
async function rr(t) {
  const { data: e } = await n.get(
    `/admin/cn-providers/accounts/${t}/balance`
  );
  return e;
}
const or = {
  queryQuota: ir,
  queryBalance: rr
};
async function cr() {
  const { data: t } = await n.get("/admin/user-attributes");
  return t;
}
async function ur() {
  const { data: t } = await n.get("/admin/user-attributes", {
    params: { enabled: !0 }
  });
  return t;
}
async function lr(t) {
  const { data: e } = await n.post("/admin/user-attributes", t);
  return e;
}
async function dr(t, e) {
  const { data: a } = await n.put(
    `/admin/user-attributes/${t}`,
    e
  );
  return a;
}
async function gr(t) {
  const { data: e } = await n.delete(`/admin/user-attributes/${t}`);
  return e;
}
async function mr(t) {
  const { data: e } = await n.put("/admin/user-attributes/reorder", {
    ids: t
  });
  return e;
}
async function fr(t) {
  const { data: e } = await n.get(
    `/admin/users/${t}/attributes`
  );
  return e;
}
async function pr(t, e) {
  const { data: a } = await n.put(
    `/admin/users/${t}/attributes`,
    { values: e }
  );
  return a;
}
async function hr(t) {
  const { data: e } = await n.post(
    "/admin/user-attributes/batch",
    { user_ids: t }
  );
  return e;
}
const yr = {
  listDefinitions: cr,
  listEnabledDefinitions: ur,
  createDefinition: lr,
  updateDefinition: dr,
  deleteDefinition: gr,
  reorderDefinitions: mr,
  getUserAttributeValues: fr,
  updateUserAttributeValues: pr,
  getBatchUserAttributes: hr
};
async function wr(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/concurrency", { params: a });
  return s;
}
async function br() {
  const { data: t } = await n.get("/admin/ops/user-concurrency");
  return t;
}
async function vr(t, e) {
  const a = {};
  t && (a.platform = t), typeof e == "number" && e > 0 && (a.group_id = e);
  const { data: s } = await n.get("/admin/ops/account-availability", { params: a });
  return s;
}
async function kr(t, e, a) {
  const s = { window: t };
  e && (s.platform = e), typeof a == "number" && a > 0 && (s.group_id = a);
  const { data: i } = await n.get("/admin/ops/realtime-traffic", { params: s });
  return i;
}
const Sr = {
  REALTIME_DISABLED: 4001
}, $r = "sub2api-admin";
function xr(t, e = {}) {
  let a = null, s = 0;
  const i = Number.isFinite(e.maxReconnectAttempts) ? e.maxReconnectAttempts : 1 / 0, o = e.reconnectBaseDelayMs ?? 1e3, c = e.reconnectMaxDelayMs ?? 3e4;
  let d = null, g = !0, S = !1, $ = !1, _ = 0;
  const k = e.staleTimeoutMs ?? 12e4, M = e.staleCheckIntervalMs ?? 3e4;
  let w = null;
  const f = (N) => {
    var W;
    (W = e.onStatusChange) == null || W.call(e, N);
  }, h = () => {
    d && (clearTimeout(d), d = null);
  }, E = () => {
    w && (clearInterval(w), w = null);
  }, R = () => {
    E(), !(!k || k <= 0) && (w = setInterval(() => {
      if (!g || !a || a.readyState !== WebSocket.OPEN || !_) return;
      Date.now() - _ > k && a.close();
    }, M));
  }, p = () => {
    var j;
    if (!g || $ && s >= i) return;
    if (typeof navigator < "u" && "onLine" in navigator && !navigator.onLine) {
      f("offline");
      return;
    }
    const N = o * Math.pow(2, s), W = Math.min(N, c), K = Math.floor(Math.random() * 250);
    h(), d = setTimeout(() => {
      s++, z();
    }, W + K), (j = e.onReconnectScheduled) == null || j.call(e, { attempt: s + 1, delayMs: W + K });
  }, I = () => {
    g && (a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || z());
  }, P = () => {
    f("offline");
  }, z = () => {
    if (!g || S || a && (a.readyState === WebSocket.OPEN || a.readyState === WebSocket.CONNECTING) || $ && s >= i) return;
    S = !0, f($ ? "reconnecting" : "connecting");
    const N = e.wsBaseUrl || void 0, W = N ? new URL(`${window.location.protocol === "https:" ? "wss:" : "ws:"}//${N}/api/v1/admin/ops/ws/qps`) : new URL(Ae("/api/v1/admin/ops/ws/qps").replace(/^http/, "ws")), K = String(e.token ?? localStorage.getItem("auth_token") ?? "").trim(), j = [$r];
    K && j.push(`jwt.${K}`), a = new WebSocket(W.toString(), j), a.onopen = () => {
      var T;
      s = 0, S = !1, $ = !0, h(), _ = Date.now(), R(), f("connected"), (T = e.onOpen) == null || T.call(e);
    }, a.onmessage = (T) => {
      try {
        const L = JSON.parse(T.data);
        _ = Date.now(), t(L);
      } catch (L) {
        console.warn("[OpsWS] Failed to parse message:", L);
      }
    }, a.onerror = (T) => {
      var L;
      console.error("[OpsWS] Connection error:", T), (L = e.onError) == null || L.call(e, T);
    }, a.onclose = (T) => {
      var L, Z;
      if (S = !1, (L = e.onClose) == null || L.call(e, T), E(), a = null, T && typeof T.code == "number" && T.code === Sr.REALTIME_DISABLED) {
        g = !1, h(), f("closed"), (Z = e.onFatalClose) == null || Z.call(e, T);
        return;
      }
      p();
    };
  };
  return window.addEventListener("online", I), window.addEventListener("offline", P), z(), () => {
    g = !1, window.removeEventListener("online", I), window.removeEventListener("offline", P), h(), E(), a && a.close(), a = null, f("closed");
  };
}
async function _r(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/overview", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Cr(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/snapshot-v2", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ir(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/throughput-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Ar(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/latency-histogram", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Or(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-trend", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Er(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/error-distribution", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Mr(t, e = {}) {
  const { data: a } = await n.get("/admin/ops/dashboard/openai-token-stats", {
    params: t,
    signal: e.signal
  });
  return a;
}
async function Rr(t) {
  const { data: e } = await n.get("/admin/ops/errors", { params: t });
  return e;
}
async function Pr(t) {
  const { data: e } = await n.get(`/admin/ops/errors/${t}`);
  return e;
}
async function Tr(t, e) {
  await n.put(`/admin/ops/errors/${t}/resolve`, { resolved: e });
}
async function zr(t) {
  const { data: e } = await n.get("/admin/ops/request-errors", { params: t });
  return e;
}
async function Ur(t) {
  const { data: e } = await n.get("/admin/ops/upstream-errors", { params: t });
  return e;
}
async function Dr(t) {
  const { data: e } = await n.get(`/admin/ops/request-errors/${t}`);
  return e;
}
async function Br(t) {
  const { data: e } = await n.get(`/admin/ops/upstream-errors/${t}`);
  return e;
}
async function Lr(t, e) {
  await n.put(`/admin/ops/request-errors/${t}/resolve`, { resolved: e });
}
async function Kr(t, e) {
  await n.put(`/admin/ops/upstream-errors/${t}/resolve`, { resolved: e });
}
async function Fr(t, e = {}, a = {}) {
  const s = { ...e };
  a.include_detail && (s.include_detail = "1");
  const { data: i } = await n.get(`/admin/ops/request-errors/${t}/upstream-errors`, { params: s });
  return i;
}
async function Nr(t) {
  const { data: e } = await n.get("/admin/ops/requests", { params: t });
  return e;
}
async function Wr() {
  const { data: t } = await n.get("/admin/ops/alert-rules");
  return t;
}
async function jr(t) {
  const { data: e } = await n.post("/admin/ops/alert-rules", t);
  return e;
}
async function qr(t, e) {
  const { data: a } = await n.put(`/admin/ops/alert-rules/${t}`, e);
  return a;
}
async function Gr(t) {
  await n.delete(`/admin/ops/alert-rules/${t}`);
}
async function Vr(t = {}) {
  const { data: e } = await n.get("/admin/ops/alert-events", { params: t });
  return e;
}
async function Hr(t) {
  const { data: e } = await n.get(`/admin/ops/alert-events/${t}`);
  return e;
}
async function Qr(t, e) {
  await n.put(`/admin/ops/alert-events/${t}/status`, { status: e });
}
async function Jr(t) {
  await n.post("/admin/ops/alert-silences", t);
}
async function Zr() {
  const { data: t } = await n.get("/admin/ops/email-notification/config");
  return t;
}
async function Xr(t) {
  const { data: e } = await n.put("/admin/ops/email-notification/config", t);
  return e;
}
async function Yr() {
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
async function io(t) {
  const { data: e } = await n.post("/admin/ops/system-logs/cleanup", t);
  return e;
}
async function ro() {
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
async function uo() {
  const { data: t } = await n.get("/admin/ops/settings/metric-thresholds");
  return t;
}
async function lo(t) {
  await n.put("/admin/ops/settings/metric-thresholds", t);
}
const go = {
  getDashboardSnapshotV2: Cr,
  getDashboardOverview: _r,
  getThroughputTrend: Ir,
  getLatencyHistogram: Ar,
  getErrorTrend: Or,
  getErrorDistribution: Er,
  getOpenAITokenStats: Mr,
  getConcurrencyStats: wr,
  getUserConcurrencyStats: br,
  getAccountAvailabilityStats: vr,
  getRealtimeTrafficSummary: kr,
  subscribeQPS: xr,
  // Legacy unified endpoints
  listErrorLogs: Rr,
  getErrorLogDetail: Pr,
  updateErrorResolved: Tr,
  // New split endpoints
  listRequestErrors: zr,
  listUpstreamErrors: Ur,
  getRequestErrorDetail: Dr,
  getUpstreamErrorDetail: Br,
  updateRequestErrorResolved: Lr,
  updateUpstreamErrorResolved: Kr,
  listRequestErrorUpstreamErrors: Fr,
  listRequestDetails: Nr,
  listAlertRules: Wr,
  createAlertRule: jr,
  updateAlertRule: qr,
  deleteAlertRule: Gr,
  listAlertEvents: Vr,
  getAlertEvent: Hr,
  updateAlertEventStatus: Qr,
  createAlertSilence: Jr,
  getEmailNotificationConfig: Zr,
  updateEmailNotificationConfig: Xr,
  getAlertRuntimeSettings: Yr,
  updateAlertRuntimeSettings: to,
  getRuntimeLogConfig: eo,
  updateRuntimeLogConfig: ao,
  resetRuntimeLogConfig: no,
  getAdvancedSettings: oo,
  updateAdvancedSettings: co,
  getMetricThresholds: uo,
  updateMetricThresholds: lo,
  listSystemLogs: so,
  cleanupSystemLogs: io,
  getSystemLogSinkHealth: ro
};
async function mo() {
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
async function ge(t, e) {
  const { data: a } = await n.put(`/admin/error-passthrough-rules/${t}`, e);
  return a;
}
async function ho(t) {
  const { data: e } = await n.delete(`/admin/error-passthrough-rules/${t}`);
  return e;
}
async function yo(t, e) {
  return ge(t, { enabled: e });
}
const wo = {
  list: mo,
  getById: fo,
  create: po,
  update: ge,
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
async function $o(t) {
  const { data: e } = await n.get(`/admin/data-management/sources/${t}/profiles`);
  return e;
}
async function xo(t, e) {
  const { data: a } = await n.post(`/admin/data-management/sources/${t}/profiles`, e);
  return a;
}
async function _o(t, e, a) {
  const { data: s } = await n.put(`/admin/data-management/sources/${t}/profiles/${e}`, a);
  return s;
}
async function Co(t, e) {
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
async function Ro(t) {
  const { data: e } = await n.post(`/admin/data-management/s3/profiles/${t}/activate`);
  return e;
}
async function Po(t) {
  const e = t.idempotency_key ? { "X-Idempotency-Key": t.idempotency_key } : void 0, { data: a } = await n.post(
    "/admin/data-management/backups",
    t,
    { headers: e }
  );
  return a;
}
async function To(t) {
  const { data: e } = await n.get("/admin/data-management/backups", {
    params: t
  });
  return e;
}
async function zo(t) {
  const { data: e } = await n.get(`/admin/data-management/backups/${t}`);
  return e;
}
const Uo = {
  getAgentHealth: bo,
  getConfig: vo,
  updateConfig: ko,
  listSourceProfiles: $o,
  createSourceProfile: xo,
  updateSourceProfile: _o,
  deleteSourceProfile: Co,
  setActiveSourceProfile: Io,
  testS3: So,
  listS3Profiles: Ao,
  createS3Profile: Oo,
  updateS3Profile: Eo,
  deleteS3Profile: Mo,
  setActiveS3Profile: Ro,
  createBackupJob: Po,
  listBackupJobs: To,
  getBackupJob: zo
};
async function Do(t, e) {
  const { data: a } = await n.put(`/admin/api-keys/${t}`, {
    group_id: e === null ? 0 : e
  });
  return a;
}
const Bo = {
  updateApiKeyGroup: Do
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
const jo = {
  listByAccount: Lo,
  create: Ko,
  update: Fo,
  delete: No,
  listResults: Wo
};
async function qo() {
  const { data: t } = await n.get("/admin/backups/s3-config");
  return t;
}
async function Go(t) {
  const { data: e } = await n.put("/admin/backups/s3-config", t);
  return e;
}
async function Vo(t) {
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
const ic = {
  getS3Config: qo,
  updateS3Config: Go,
  testS3Connection: Vo,
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
async function rc() {
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
async function uc(t, e) {
  const { data: a } = await n.put(`/admin/tls-fingerprint-profiles/${t}`, e);
  return a;
}
async function lc(t) {
  const { data: e } = await n.delete(`/admin/tls-fingerprint-profiles/${t}`);
  return e;
}
const dc = {
  list: rc,
  getById: oc,
  create: cc,
  update: uc,
  delete: lc
};
async function gc(t = 1, e = 20, a, s) {
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
async function mc(t) {
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
const bc = { list: gc, getById: mc, create: fc, update: pc, remove: hc, getModelDefaultPricing: yc, syncPricingModels: wc };
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
const bt = /* @__PURE__ */ new Map();
function $c() {
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
function xc(t) {
  const e = $c();
  return e ? {
    adminID: e,
    key: `sub2api:admin:channel-monitor-duplicate:${e}:${t}`
  } : null;
}
function _c(t) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(t)) ?? null;
  } catch {
    return null;
  }
}
function Xt(t, e) {
  var a, s;
  try {
    e ? (a = globalThis.sessionStorage) == null || a.setItem(t, e) : (s = globalThis.sessionStorage) == null || s.removeItem(t);
  } catch {
  }
}
async function Cc(t) {
  var i, o;
  const e = xc(t);
  let a = e ? bt.get(e.key) ?? _c(e.key) : null;
  if (!a) {
    const c = ((o = (i = globalThis.crypto) == null ? void 0 : i.randomUUID) == null ? void 0 : o.call(i)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    a = `channel-monitor-duplicate-${(e == null ? void 0 : e.adminID) ?? "unknown-admin"}-${t}-${c}`;
  }
  e && (bt.set(e.key, a), Xt(e.key, a));
  const { data: s } = await n.post(
    `/admin/channel-monitors/${t}/duplicate`,
    void 0,
    { headers: { "Idempotency-Key": a } }
  );
  return e && (bt.delete(e.key), Xt(e.key, null)), s;
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
  duplicate: Cc,
  update: Ic,
  del: Ac,
  runNow: Oc,
  listHistory: Ec
};
async function Rc(t = {}) {
  const { data: e } = await n.get("/admin/channel-monitor-templates", {
    params: t
  });
  return e;
}
async function Pc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}`
  );
  return e;
}
async function Tc(t) {
  const { data: e } = await n.post(
    "/admin/channel-monitor-templates",
    t
  );
  return e;
}
async function zc(t, e) {
  const { data: a } = await n.put(
    `/admin/channel-monitor-templates/${t}`,
    e
  );
  return a;
}
async function Uc(t) {
  await n.delete(`/admin/channel-monitor-templates/${t}`);
}
async function Dc(t, e) {
  const { data: a } = await n.post(
    `/admin/channel-monitor-templates/${t}/apply`,
    { monitor_ids: e }
  );
  return a;
}
async function Bc(t) {
  const { data: e } = await n.get(
    `/admin/channel-monitor-templates/${t}/monitors`
  );
  return e;
}
const Lc = {
  list: Rc,
  get: Pc,
  create: Tc,
  update: zc,
  del: Uc,
  apply: Dc,
  listAssociatedMonitors: Bc
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
async function jc(t) {
  const { data: e } = await n.delete(
    `/admin/affiliates/users/${t}`
  );
  return e;
}
async function qc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/users/batch-rate",
    t
  );
  return e;
}
function Ct(t = {}) {
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
async function Gc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/invites",
    { params: Ct(t) }
  );
  return e;
}
async function Vc(t) {
  const { data: e } = await n.post(
    "/admin/affiliates/invites",
    t
  );
  return e;
}
async function Hc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/rebates",
    { params: Ct(t) }
  );
  return e;
}
async function Qc(t = {}) {
  const { data: e } = await n.get(
    "/admin/affiliates/transfers",
    { params: Ct(t) }
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
  clearUserSettings: jc,
  batchSetRate: qc,
  listInviteRecords: Gc,
  bindRelationship: Vc,
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
async function tu() {
  const { data: t } = await n.get("/admin/risk-control/status");
  return t;
}
async function eu(t = {}) {
  const { data: e } = await n.post("/admin/risk-control/api-keys/test", t);
  return e;
}
async function au(t = {}) {
  const { data: e } = await n.get("/admin/risk-control/logs", {
    params: t
  });
  return e;
}
async function nu(t) {
  const { data: e } = await n.post(
    `/admin/risk-control/users/${t}/unban`
  );
  return e;
}
async function su(t) {
  const { data: e } = await n.delete("/admin/risk-control/hashes", {
    data: { input_hash: t }
  });
  return e;
}
async function iu() {
  const { data: t } = await n.delete("/admin/risk-control/hashes/all");
  return t;
}
const ru = {
  getConfig: Xc,
  updateConfig: Yc,
  getStatus: tu,
  testAPIKeys: eu,
  listLogs: au,
  unbanUser: nu,
  deleteFlaggedHash: su,
  clearFlaggedHashes: iu
}, ou = {
  async getStatus() {
    const { data: t } = await n.get("/admin/compliance");
    return t;
  },
  async accept(t) {
    const { data: e } = await n.post("/admin/compliance/accept", t);
    return e;
  }
};
async function cu(t) {
  const { data: e } = await n.get("/admin/audit-logs", { params: t });
  return e;
}
async function uu(t) {
  const { data: e } = await n.get(`/admin/audit-logs/${t}`);
  return e;
}
async function lu(t) {
  const { data: e } = await n.post("/admin/audit-logs/clear", { totp_code: t });
  return e;
}
const du = {
  list: cu,
  get: uu,
  clear: lu
};
async function gu() {
  const { data: t } = await n.get("/admin/plugins");
  return t;
}
async function mu(t) {
  const e = new FormData();
  e.append("plugin", t);
  const { data: a } = await n.post("/admin/plugins/upload", e, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 12e4
  });
  return a;
}
async function fu(t, e, a) {
  const { data: s } = await n.post(`/admin/plugins/${t}/enable`, {
    rollout_percent: e,
    accept_untested: a
  });
  return s;
}
async function pu(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/disable`);
  return e;
}
async function hu(t) {
  await n.delete(`/admin/plugins/${t}`);
}
async function yu(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/config`);
  return e;
}
async function wu(t, e) {
  const { data: a } = await n.put(`/admin/plugins/${t}/config`, e);
  return a;
}
async function bu(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/test`);
  return e;
}
async function vu(t) {
  const { data: e } = await n.get(`/admin/plugins/${t}/status`);
  return e;
}
async function ku(t) {
  const { data: e } = await n.post(`/admin/plugins/${t}/ui-session`);
  return e;
}
const Su = {
  list: gu,
  upload: mu,
  enable: fu,
  disable: pu,
  remove: hu,
  getConfig: yu,
  saveConfig: wu,
  test: bu,
  status: vu,
  createUISession: ku
}, Zl = {
  dashboard: Je,
  users: ma,
  groups: Wa,
  accounts: Yn,
  proxies: ps,
  redeem: _s,
  promo: Rs,
  announcements: Ls,
  settings: pi,
  system: Oe,
  subscriptions: Ai,
  usage: Ui,
  gemini: Ki,
  antigravity: ji,
  grok: sr,
  cnProviders: or,
  userAttributes: yr,
  ops: go,
  errorPassthrough: wo,
  dataManagement: Uo,
  apiKeys: Bo,
  scheduledTests: jo,
  backup: ic,
  tlsFingerprintProfiles: dc,
  channels: bc,
  channelMonitor: Mc,
  channelMonitorTemplate: Lc,
  payment: Kc,
  affiliates: Zc,
  riskControl: ru,
  compliance: ou,
  audit: du,
  plugins: Su
}, me = 5, $u = 1e3, xu = 20, Yt = [10, 20, 50, 100], fe = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < me || e > $u ? null : e;
}, _u = (t) => {
  const e = Number(t);
  return !Number.isInteger(e) || e < me ? null : e;
}, pe = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, Cu = () => {
  var e;
  const t = (e = pe()) == null ? void 0 : e.table_page_size_options;
  return Array.isArray(t) ? Array.from(
    new Set(
      t.map((a) => fe(a)).filter((a) => a !== null)
    )
  ).sort((a, s) => a - s) : [];
}, te = (t, e) => {
  for (const a of e)
    if (a >= t)
      return a;
  return e[e.length - 1];
}, ct = () => {
  var e;
  const t = fe((e = pe()) == null ? void 0 : e.table_default_page_size);
  return t === null ? xu : t;
}, kt = () => {
  const t = Cu();
  return t.length === 0 ? [...Yt] : t.length > 0 ? t : [...Yt];
}, nt = (t) => {
  const e = _u(t), a = ct(), s = kt();
  return te(e !== null ? e : a, s);
}, he = "table-page-size";
function Xl(t = ct()) {
  var e;
  if (typeof window < "u" && ((e = window.__APP_CONFIG__) == null ? void 0 : e.table_default_page_size) !== void 0)
    return nt(ct());
  if (typeof window < "u")
    try {
      const a = window.localStorage.getItem(he);
      if (a !== null) {
        const s = Number(a);
        if (Number.isFinite(s))
          return nt(s);
      }
    } catch (a) {
      console.warn("Failed to read persisted page size:", a);
    }
  return nt(ct() || t);
}
function Iu(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(he, String(t));
    } catch (e) {
      console.warn("Failed to persist page size:", e);
    }
}
function tt(t, e, a) {
  let s = a.initialDeps ?? [], i, o = !0;
  function c() {
    var d, g, S;
    let $;
    a.key && ((d = a.debug) != null && d.call(a)) && ($ = Date.now());
    const _ = t();
    if (!(_.length !== s.length || _.some((w, f) => s[f] !== w)))
      return i;
    s = _;
    let M;
    if (a.key && ((g = a.debug) != null && g.call(a)) && (M = Date.now()), i = e(..._), a.key && ((S = a.debug) != null && S.call(a))) {
      const w = Math.round((Date.now() - $) * 100) / 100, f = Math.round((Date.now() - M) * 100) / 100, h = f / 16, E = (R, p) => {
        for (R = String(R); R.length < p; )
          R = " " + R;
        return R;
      };
      console.info(
        `%c⏱ ${E(f, 5)} /${E(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * h, 120)
        )}deg 100% 31%);`,
        a == null ? void 0 : a.key
      );
    }
    return a != null && a.onChange && !(o && a.skipInitialOnChange) && a.onChange(i), o = !1, i;
  }
  return c.updateDeps = (d) => {
    s = d;
  }, c;
}
function ee(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Au = (t, e) => Math.abs(t - e) < 1.01, Ou = (t, e, a) => {
  let s;
  return function(...i) {
    t.clearTimeout(s), s = t.setTimeout(() => e.apply(this, i), a);
  };
}, ae = (t) => {
  const { offsetWidth: e, offsetHeight: a } = t;
  return { width: e, height: a };
}, Eu = (t) => t, Mu = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), a = Math.min(t.endIndex + t.overscan, t.count - 1), s = [];
  for (let i = e; i <= a; i++)
    s.push(i);
  return s;
}, ye = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  const i = (c) => {
    const { width: d, height: g } = c;
    e({ width: Math.round(d), height: Math.round(g) });
  };
  if (i(ae(a)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((c) => {
    const d = () => {
      const g = c[0];
      if (g != null && g.borderBoxSize) {
        const S = g.borderBoxSize[0];
        if (S) {
          i({ width: S.inlineSize, height: S.blockSize });
          return;
        }
      }
      i(ae(a));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return o.observe(a, { box: "border-box" }), () => {
    o.unobserve(a);
  };
}, ne = {
  passive: !0
}, se = typeof window > "u" ? !0 : "onscrollend" in window, Ru = (t, e) => {
  const a = t.scrollElement;
  if (!a)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  let i = 0;
  const o = t.options.useScrollendEvent && se ? () => {
  } : Ou(
    s,
    () => {
      e(i, !1);
    },
    t.options.isScrollingResetDelay
  ), c = ($) => () => {
    const { horizontal: _, isRtl: k } = t.options;
    i = _ ? a.scrollLeft * (k && -1 || 1) : a.scrollTop, o(), e(i, $);
  }, d = c(!0), g = c(!1);
  a.addEventListener("scroll", d, ne);
  const S = t.options.useScrollendEvent && se;
  return S && a.addEventListener("scrollend", g, ne), () => {
    a.removeEventListener("scroll", d), S && a.removeEventListener("scrollend", g);
  };
}, Pu = (t, e, a) => {
  if (e != null && e.borderBoxSize) {
    const s = e.borderBoxSize[0];
    if (s)
      return Math.round(
        s[a.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[a.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Tu = (t, {
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
class zu {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var a, s, i;
      return ((i = (s = (a = this.targetWindow) == null ? void 0 : a.performance) == null ? void 0 : s.now) == null ? void 0 : i.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let a = null;
      const s = () => a || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : a = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((o) => {
          const c = () => {
            const d = o.target, g = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(g) && this.resizeItem(
              g,
              this.options.measureElement(d, o, this)
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
        getItemKey: Eu,
        rangeExtractor: Mu,
        onChange: () => {
        },
        measureElement: Pu,
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
    }, this.maybeNotify = tt(
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
        const d = a[c];
        if (i.has(d.lane))
          continue;
        const g = o.get(
          d.lane
        );
        if (g == null || d.end > g.end ? o.set(d.lane, d) : d.end < g.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((c, d) => c.end === d.end ? c.index - d.index : c.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = tt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (a, s, i, o, c, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: a,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: o,
        enabled: c,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = tt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: a, paddingStart: s, scrollMargin: i, getItemKey: o, enabled: c, lanes: d }, g) => {
        if (!c)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > a)
          for (const k of this.laneAssignments.keys())
            k >= a && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const S = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === a && (this.lanesSettling = !1);
        const $ = this.measurementsCache.slice(0, S), _ = new Array(d).fill(
          void 0
        );
        for (let k = 0; k < S; k++) {
          const M = $[k];
          M && (_[M.lane] = k);
        }
        for (let k = S; k < a; k++) {
          const M = o(k), w = this.laneAssignments.get(k);
          let f, h;
          if (w !== void 0 && this.options.lanes > 1) {
            f = w;
            const I = _[f], P = I !== void 0 ? $[I] : void 0;
            h = P ? P.end + this.options.gap : s + i;
          } else {
            const I = this.options.lanes === 1 ? $[k - 1] : this.getFurthestMeasurement($, k);
            h = I ? I.end + this.options.gap : s + i, f = I ? I.lane : k % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(k, f);
          }
          const E = g.get(M), R = typeof E == "number" ? E : this.options.estimateSize(k), p = h + R;
          $[k] = {
            index: k,
            start: h,
            size: R,
            end: p,
            key: M,
            lane: f
          }, _[f] = k;
        }
        return this.measurementsCache = $, $;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = tt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (a, s, i, o) => this.range = a.length > 0 && s > 0 ? Uu({
        measurements: a,
        outerSize: s,
        scrollOffset: i,
        lanes: o
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = tt(
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
        ), c = Math.max(0, i - o), d = Math.min(
          this.options.count - 1,
          i + o
        );
        return a >= c && a <= d;
      }
      return !0;
    }, this.measureElement = (a) => {
      if (!a) {
        this.elementsCache.forEach((c, d) => {
          c.isConnected || (this.observer.unobserve(c), this.elementsCache.delete(d));
        });
        return;
      }
      const s = this.indexFromElement(a), i = this.options.getItemKey(s), o = this.elementsCache.get(i);
      o !== a && (o && this.observer.unobserve(o), this.observer.observe(a), this.elementsCache.set(i, a)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(a, void 0, this));
    }, this.resizeItem = (a, s) => {
      var i;
      const o = this.measurementsCache[a];
      if (!o) return;
      const c = this.itemSizeCache.get(o.key) ?? o.size, d = s - c;
      d !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, d, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, s)), this.notify(!1));
    }, this.getVirtualItems = tt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (a, s) => {
        const i = [];
        for (let o = 0, c = a.length; o < c; o++) {
          const d = a[o], g = s[d];
          i.push(g);
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
        return ee(
          s[we(
            0,
            s.length - 1,
            (i) => ee(s[i]).start,
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
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, a), 0);
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
      const d = s === "end" ? c.end + this.options.scrollPaddingEnd : c.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, s, c.size),
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
      const [c, d] = o, g = this.now();
      this.scrollState = {
        index: a,
        align: d,
        behavior: i,
        startedAt: g,
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
        for (; c >= 0 && o.some((d) => d === null); ) {
          const d = s[c];
          o[d.lane] === null && (o[d.lane] = d.end), c--;
        }
        i = Math.max(...o.filter((d) => d !== null));
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
    if (!c && Au(i, this.getScrollOffset())) {
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
const we = (t, e, a, s) => {
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
function Uu({
  measurements: t,
  outerSize: e,
  scrollOffset: a,
  lanes: s
}) {
  const i = t.length - 1, o = (g) => t[g].start;
  if (t.length <= s)
    return {
      startIndex: 0,
      endIndex: i
    };
  let c = we(
    0,
    i,
    o,
    a
  ), d = c;
  if (s === 1)
    for (; d < i && t[d].end < a + e; )
      d++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; d < i && g.some(($) => $ < a + e); ) {
      const $ = t[d];
      g[$.lane] = $.end, d++;
    }
    const S = Array(s).fill(a + e);
    for (; c >= 0 && S.some(($) => $ >= a); ) {
      const $ = t[c];
      S[$.lane] = $.start, c--;
    }
    c = Math.max(0, c - c % s), d = Math.min(i, d + (s - 1 - d % s));
  }
  return { startIndex: c, endIndex: d };
}
function Du(t) {
  const e = new zu(O(t)), a = Ee(e), s = e._didMount();
  return Q(
    () => O(t).getScrollElement(),
    (i) => {
      i && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), Q(
    () => O(t),
    (i) => {
      e.setOptions({
        ...i,
        onChange: (o, c) => {
          var d;
          qt(a), (d = i.onChange) == null || d.call(i, o, c);
        }
      }), e._willUpdate(), qt(a);
    },
    {
      immediate: !0
    }
  ), Me(s), a;
}
function Bu(t) {
  return Du(
    C(() => ({
      observeElementRect: ye,
      observeElementOffset: Ru,
      scrollToFn: Tu,
      ...O(t)
    }))
  );
}
const Lu = {
  key: 0,
  class: "space-y-3"
}, Ku = { class: "space-y-3" }, Fu = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Nu = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, Wu = { class: "flex flex-col items-center" }, ju = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, qu = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, Gu = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, Vu = ["checked", "indeterminate"], Hu = ["onClick"], Qu = { class: "space-y-3" }, Ju = {
  key: 0,
  class: "flex justify-end"
}, Zu = ["checked", "aria-label", "onChange"], Xu = ["data-field"], Yu = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, tl = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, el = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, al = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, nl = { class: "table-header bg-gray-50 dark:bg-dark-800" }, sl = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, il = ["checked", "indeterminate", "aria-label"], rl = ["aria-sort", "onClick"], ol = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, cl = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, ul = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, ll = { key: 1 }, dl = ["colspan"], gl = { class: "flex flex-col items-center" }, ml = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, fl = {
  key: 0,
  "aria-hidden": "true"
}, pl = ["colspan"], hl = ["data-row-id", "data-index", "onClick"], yl = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, wl = ["checked", "aria-label", "onChange"], bl = {
  key: 1,
  "aria-hidden": "true"
}, vl = ["colspan"], ie = "(min-width: 768px)", kl = /* @__PURE__ */ St({
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
    const { t: s } = $t(), i = G(
      typeof window > "u" ? !0 : window.matchMedia(ie).matches
    ), o = a, c = G(null), d = G(!1), g = G(!1), S = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), $ = (r, u) => ye(r, (l) => {
      l.height > 0 && u(l);
    }), _ = () => {
      c.value && (d.value = c.value.scrollWidth > c.value.clientWidth);
    }, k = () => {
      if (!p.expandableActions) {
        g.value = !1, z.value = !1;
        return;
      }
      if (!c.value) return;
      const r = c.value.querySelector("tbody tr:first-child td:last-child");
      if (!r) return;
      const u = r.querySelector("div");
      if (!u) return;
      const l = z.value;
      z.value = !0, ot(() => {
        const y = u.querySelectorAll('button, a, [role="button"]');
        if (y.length <= 2) {
          g.value = !1, z.value = l;
          return;
        }
        let x = 0;
        y.forEach((Y, ht) => {
          x += Y.offsetWidth, ht < y.length - 1 && (x += 4);
        });
        const H = r.clientWidth - 32;
        g.value = x > H, z.value = l;
      });
    };
    let M = null, w = null, f = null, h = null;
    const E = () => {
      M == null || M.disconnect(), M = null, w && (window.removeEventListener("resize", w), w = null);
    }, R = () => {
      _(), k(), c.value && typeof ResizeObserver < "u" ? (M = new ResizeObserver(() => {
        _(), k();
      }), M.observe(c.value)) : (w = () => {
        _(), k();
      }, window.addEventListener("resize", w));
    };
    Gt(() => {
      typeof window < "u" && (f = window.matchMedia(ie), i.value = f.matches, h = (r) => {
        i.value = r.matches;
      }, typeof f.addEventListener == "function" ? f.addEventListener("change", h) : f.addListener(h));
    }), Re(() => {
      E(), f && h && (typeof f.removeEventListener == "function" ? f.removeEventListener("change", h) : f.removeListener(h), h = null), f = null;
    });
    const p = t, I = G(""), P = G("asc"), z = G(!1), N = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), W = () => {
      const r = /* @__PURE__ */ new Set();
      for (const u of p.columns)
        u.sortable && r.add(u.key);
      return r;
    }, K = (r) => r && W().has(r) ? r : "", j = (r) => r === "desc" ? "desc" : "asc", T = () => {
      if (!p.sortStorageKey) return null;
      try {
        const r = localStorage.getItem(p.sortStorageKey);
        if (!r) return null;
        const u = JSON.parse(r), l = K(typeof u.key == "string" ? u.key : "");
        return l ? { key: l, order: j(u.order) } : null;
      } catch (r) {
        return console.error("[DataTable] Failed to read persisted sort state:", r), null;
      }
    }, L = (r) => {
      if (p.sortStorageKey)
        try {
          localStorage.setItem(p.sortStorageKey, JSON.stringify(r));
        } catch (u) {
          console.error("[DataTable] Failed to persist sort state:", u);
        }
    }, Z = () => {
      const r = T();
      if (r) return r;
      const u = K(p.defaultSortKey || "");
      return u ? { key: u, order: j(p.defaultSortOrder) } : null;
    }, lt = (r) => {
      r && (I.value = r.key, P.value = r.order);
    }, It = (r, u) => I.value === r && P.value === u ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", be = (r) => I.value !== r ? "none" : P.value === "asc" ? "ascending" : "descending", ve = (r) => {
      const u = r.class || "";
      return u.includes("text-center") ? "justify-center" : u.includes("text-right") ? "justify-end" : "justify-start";
    }, At = (r) => r == null || r === "", Ot = (r) => {
      if (typeof r == "number") return Number.isFinite(r) ? r : null;
      if (typeof r == "boolean") return r ? 1 : 0;
      if (typeof r == "string") {
        const u = r.trim();
        if (!u) return null;
        const l = Number(u);
        return Number.isFinite(l) ? l : null;
      }
      return null;
    }, Et = (r) => {
      if (r == null) return "";
      if (typeof r == "string") return r;
      if (typeof r == "number" || typeof r == "boolean") return String(r);
      if (r instanceof Date) return r.toISOString();
      try {
        return JSON.stringify(r);
      } catch {
        return String(r);
      }
    }, ke = (r, u) => {
      const l = At(r), y = At(u);
      if (l && y) return 0;
      if (l) return 1;
      if (y) return -1;
      const x = Ot(r), H = Ot(u);
      if (x !== null && H !== null)
        return x === H ? 0 : x < H ? -1 : 1;
      const Y = Et(r), ht = Et(u), jt = N.compare(Y, ht);
      return jt === 0 ? 0 : jt < 0 ? -1 : 1;
    }, Mt = (r) => typeof p.rowKey == "function" ? p.rowKey(r) ?? void 0 : typeof p.rowKey == "string" && p.rowKey ? (r == null ? void 0 : r[p.rowKey]) ?? void 0 : (r == null ? void 0 : r.id) ?? void 0, q = (r, u) => Mt(r) ?? u, Rt = C(() => p.columns.filter((r) => r.key !== "actions")), Pt = C(
      () => p.columns.map((r) => `${r.key}:${r.sortable ? "1" : "0"}`).join("|")
    );
    Q(
      i,
      async (r) => {
        E(), r && (await ot(), R());
      },
      { immediate: !0, flush: "post" }
    ), Q(
      [() => p.data.length, Pt],
      async () => {
        await ot(), _(), k();
      },
      { flush: "post" }
    ), Q(z, async () => {
      await ot(), _();
    });
    const Se = (r) => {
      let u = "asc";
      I.value === r && (u = P.value === "asc" ? "desc" : "asc"), p.serverSideSort ? (I.value = r, P.value = u, o("sort", r, u)) : (I.value = r, P.value = u);
    }, V = C(() => {
      if (p.serverSideSort || !I.value || !p.data) return p.data;
      const r = I.value, u = P.value;
      return p.data.map((l, y) => ({ row: l, index: y })).sort((l, y) => {
        var H, Y;
        const x = ke((H = l.row) == null ? void 0 : H[r], (Y = y.row) == null ? void 0 : Y[r]);
        return x !== 0 ? u === "asc" ? x : -x : l.index - y.index;
      }).map((l) => l.row);
    }), dt = C(() => p.columns.length + (p.selectable ? 1 : 0)), gt = C(() => new Set(p.selectedKeys)), st = C(
      () => (V.value ?? []).map((r, u) => q(r, u))
    ), mt = C(
      () => st.value.length > 0 && st.value.every((r) => gt.value.has(r))
    ), Tt = C(() => mt.value ? !1 : st.value.some((r) => gt.value.has(r))), zt = (r) => {
      const u = Array.from(r);
      o("update:selectedKeys", u), o("selectionChange", u);
    }, it = (r, u) => gt.value.has(q(r, u)), Ut = (r, u) => typeof p.selectionLabel == "function" ? p.selectionLabel(r) : p.selectionLabel ? p.selectionLabel : `${s("common.selectOption")} ${q(r, u)}`, Dt = (r, u, l) => {
      const y = new Set(p.selectedKeys), x = q(r, u);
      l ? y.add(x) : y.delete(x), zt(y);
    }, Bt = (r) => {
      const u = new Set(p.selectedKeys);
      for (const l of st.value)
        r ? u.add(l) : u.delete(l);
      zt(u);
    }, ft = C(
      () => {
        var r;
        return i.value && (((r = V.value) == null ? void 0 : r.length) ?? 0) > (p.virtualizeThreshold ?? 100);
      }
    ), X = Bu(C(() => {
      var r;
      return {
        count: ft.value ? ((r = V.value) == null ? void 0 : r.length) ?? 0 : 0,
        getScrollElement: () => c.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (u) => {
          var y;
          const l = (y = V.value) == null ? void 0 : y[u];
          return l != null ? q(l, u) : u;
        },
        estimateSize: () => p.estimateRowHeight ?? 56,
        overscan: p.overscan ?? 5,
        // 兜底高度:首个有效高度读数到来前,先按一屏渲染,避免空白帧
        initialRect: { width: 0, height: S() },
        // 关键:过滤 0 高度读数,杜绝 scrollRect 被钉成 0 → calculateRange 返回 null → 整表空白
        observeElementRect: $,
        // 把测量类 ResizeObserver 回调批到 rAF,避免滚动中同步 reflow 风暴导致的校正抖动/空白
        useAnimationFrameWithResizeObserver: !0
      };
    })), pt = C(() => X.value.getVirtualItems()), Lt = C(() => {
      const r = pt.value;
      return r.length > 0 ? r[0].start : 0;
    }), Kt = C(() => {
      const r = pt.value;
      return r.length === 0 ? 0 : X.value.getTotalSize() - r[r.length - 1].end;
    }), $e = (r) => {
      r && X.value.measureElement(r);
    }, xe = C(
      () => (V.value ?? []).map((r) => {
        const u = Mt(r);
        return u !== void 0 ? u : r !== null && typeof r == "object" ? r : Symbol("unstable-row");
      })
    ), _e = (r, u) => {
      if (r.length !== u.length) return !1;
      const l = new Set(r), y = new Set(u);
      return l.size !== r.length || y.size !== u.length ? !1 : [...l].every((x) => y.has(x));
    };
    Q(
      xe,
      (r, u) => {
        _e(r, u) || (X.value.measureElement(null), X.value.measure());
      },
      { flush: "post" }
    );
    const Ce = C(() => {
      const r = V.value ?? [];
      return ft.value ? pt.value.map((u) => ({ index: u.index, row: r[u.index], measure: !0 })) : r.map((u, l) => ({ index: l, row: u, measure: !1 }));
    }), Ft = C(() => p.columns.some((r) => r.key === "actions")), Ie = C(() => p.columns.length > 0 && p.columns[0].key === "select"), Nt = (r, u) => {
      const l = [];
      return p.stickyFirstColumn && (Ie.value ? u === 0 ? l.push("sticky-col sticky-col-left-first") : u === 1 && l.push("sticky-col sticky-col-left-second") : u === 0 && l.push("sticky-col sticky-col-left")), p.stickyActionsColumn && r.key === "actions" && l.push("sticky-col sticky-col-right"), l.join(" ");
    }, rt = () => {
      const r = p.columns.length;
      return r >= 10 ? "px-2" : r >= 7 ? "px-3" : r >= 5 ? "px-4" : "px-6";
    }, Wt = G(!1);
    return Gt(() => {
      const r = Z();
      lt(r), Wt.value = !0;
    }), Q(
      Pt,
      () => {
        const r = K(I.value);
        if (!I.value) {
          const u = Z();
          lt(u);
          return;
        }
        if (!r) {
          const u = Z();
          u ? lt(u) : (I.value = "", P.value = "asc");
        }
      },
      { flush: "post" }
    ), Q(
      [I, P],
      ([r, u]) => {
        if (!Wt.value || !p.sortStorageKey) return;
        const l = K(r);
        l && L({ key: l, order: j(u) });
      },
      { flush: "post" }
    ), e({
      virtualizer: X,
      shouldVirtualize: ft,
      sortedData: V,
      resolveRowKey: q,
      tableWrapperEl: c
    }), (r, u) => i.value ? (b(), v("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: c,
      class: B(["table-wrapper", {
        "actions-expanded": z.value,
        "is-scrollable": d.value
      }])
    }, [
      m("table", al, [
        m("thead", nl, [
          m("tr", null, [
            t.selectable ? (b(), v("th", sl, [
              m("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: mt.value,
                indeterminate: Tt.value,
                "aria-label": O(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: u[2] || (u[2] = (l) => Bt(l.target.checked))
              }, null, 40, il)
            ])) : D("", !0),
            (b(!0), v(U, null, F(t.columns, (l, y) => (b(), v("th", {
              key: l.key,
              scope: "col",
              "aria-sort": l.sortable ? be(l.key) : void 0,
              class: B([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                rt(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": l.sortable },
                Nt(l, y),
                l.class
              ]),
              onClick: (x) => l.sortable && Se(l.key)
            }, [
              m("div", {
                class: B(["flex items-center space-x-1", ve(l)])
              }, [
                J(r.$slots, `header-${l.key}`, {
                  column: l,
                  sortKey: I.value,
                  sortOrder: P.value
                }, () => [
                  m("span", null, A(l.label), 1)
                ], !0),
                l.sortable ? (b(), v("span", ol, [
                  (b(), v("svg", {
                    class: B(["h-2.5 w-2.5", It(l.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[6] || (u[6] = [
                    m("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (b(), v("svg", {
                    class: B(["-mt-0.5 h-2.5 w-2.5", It(l.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...u[7] || (u[7] = [
                    m("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : D("", !0)
              ], 2)
            ], 10, rl))), 128))
          ])
        ]),
        m("tbody", cl, [
          t.loading ? (b(), v(U, { key: 0 }, F(5, (l) => m("tr", { key: l }, [
            t.selectable ? (b(), v("td", ul, [...u[8] || (u[8] = [
              m("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : D("", !0),
            (b(!0), v(U, null, F(t.columns, (y) => (b(), v("td", {
              key: y.key,
              class: B(["whitespace-nowrap py-4", rt()])
            }, [...u[9] || (u[9] = [
              m("div", { class: "animate-pulse" }, [
                m("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !t.data || t.data.length === 0 ? (b(), v("tr", ll, [
            m("td", {
              colspan: dt.value,
              class: B(["py-12 text-center text-gray-500 dark:text-dark-400", rt()])
            }, [
              J(r.$slots, "empty", {}, () => [
                m("div", gl, [
                  at(ut, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  m("p", ml, A(O(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, dl)
          ])) : (b(), v(U, { key: 2 }, [
            Lt.value > 0 ? (b(), v("tr", fl, [
              m("td", {
                colspan: dt.value,
                style: Ht({ height: Lt.value + "px", padding: 0, border: "none" })
              }, null, 12, pl)
            ])) : D("", !0),
            (b(!0), v(U, null, F(Ce.value, (l) => (b(), v("tr", {
              key: q(l.row, l.index),
              "data-row-id": q(l.row, l.index),
              "data-index": l.index,
              ref_for: !0,
              ref: l.measure ? $e : void 0,
              class: B(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": t.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": t.selectable && it(l.row, l.index)
              }]),
              onClick: (y) => t.clickableRows && o("rowClick", l.row)
            }, [
              t.selectable ? (b(), v("td", yl, [
                m("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: it(l.row, l.index),
                  "aria-label": Ut(l.row, l.index),
                  "data-test": "select-row",
                  onClick: u[3] || (u[3] = Vt(() => {
                  }, ["stop"])),
                  onChange: (y) => Dt(l.row, l.index, y.target.checked)
                }, null, 40, wl)
              ])) : D("", !0),
              (b(!0), v(U, null, F(t.columns, (y, x) => (b(), v("td", {
                key: y.key,
                class: B([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  rt(),
                  Nt(y, x),
                  y.class
                ])
              }, [
                J(r.$slots, `cell-${y.key}`, {
                  row: l.row,
                  value: l.row[y.key],
                  expanded: z.value
                }, () => [
                  et(A(y.formatter ? y.formatter(l.row[y.key], l.row) : l.row[y.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, hl))), 128)),
            Kt.value > 0 ? (b(), v("tr", bl, [
              m("td", {
                colspan: dt.value,
                style: Ht({ height: Kt.value + "px", padding: 0, border: "none" })
              }, null, 12, vl)
            ])) : D("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (b(), v("div", Lu, [
      t.loading ? (b(), v(U, { key: 0 }, F(5, (l) => m("div", {
        key: l,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        m("div", Ku, [
          (b(!0), v(U, null, F(Rt.value, (y) => (b(), v("div", {
            key: y.key,
            class: "flex justify-between"
          }, [...u[4] || (u[4] = [
            m("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            m("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          Ft.value ? (b(), v("div", Fu, [...u[5] || (u[5] = [
            m("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : D("", !0)
        ])
      ])), 64)) : !t.data || t.data.length === 0 ? (b(), v("div", Nu, [
        J(r.$slots, "empty", {}, () => [
          m("div", Wu, [
            at(ut, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            m("p", ju, A(O(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (b(), v(U, { key: 2 }, [
        t.selectable ? (b(), v("div", qu, [
          m("label", Gu, [
            m("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: mt.value,
              indeterminate: Tt.value,
              "data-test": "select-all-mobile",
              onChange: u[0] || (u[0] = (l) => Bt(l.target.checked))
            }, null, 40, Vu),
            m("span", null, A(O(s)("common.selectAll")), 1)
          ])
        ])) : D("", !0),
        (b(!0), v(U, null, F(V.value, (l, y) => (b(), v("div", {
          key: q(l, y),
          class: B(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": t.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": t.selectable && it(l, y)
          }]),
          onClick: (x) => t.clickableRows && o("rowClick", l)
        }, [
          m("div", Qu, [
            t.selectable ? (b(), v("div", Ju, [
              m("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: it(l, y),
                "aria-label": Ut(l, y),
                "data-test": "select-row",
                onClick: u[1] || (u[1] = Vt(() => {
                }, ["stop"])),
                onChange: (x) => Dt(l, y, x.target.checked)
              }, null, 40, Zu)
            ])) : D("", !0),
            (b(!0), v(U, null, F(Rt.value, (x) => (b(), v("div", {
              key: x.key,
              "data-field": x.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              m("span", Yu, A(x.label), 1),
              m("div", tl, [
                J(r.$slots, `cell-${x.key}`, {
                  row: l,
                  value: l[x.key],
                  expanded: z.value
                }, () => [
                  et(A(x.formatter ? x.formatter(l[x.key], l) : l[x.key]), 1)
                ], !0)
              ])
            ], 8, Xu))), 128)),
            Ft.value ? (b(), v("div", el, [
              J(r.$slots, "cell-actions", {
                row: l,
                value: l.actions,
                expanded: z.value
              }, void 0, !0)
            ])) : D("", !0)
          ])
        ], 10, Hu))), 128))
      ], 64))
    ]));
  }
}), Yl = /* @__PURE__ */ re(kl, [["__scopeId", "data-v-2280f759"]]), Sl = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, $l = { class: "flex flex-1 items-center justify-between sm:hidden" }, xl = ["disabled"], _l = { class: "text-sm text-gray-700 dark:text-gray-300" }, Cl = ["disabled"], Il = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Al = { class: "flex items-center space-x-4" }, Ol = { class: "text-sm text-gray-700 dark:text-gray-300" }, El = { class: "font-medium" }, Ml = { class: "font-medium" }, Rl = { class: "font-medium" }, Pl = {
  key: 0,
  class: "flex items-center space-x-2"
}, Tl = { class: "text-sm text-gray-700 dark:text-gray-300" }, zl = { class: "page-size-select w-20" }, Ul = {
  key: 1,
  class: "flex items-center space-x-2"
}, Dl = { class: "text-sm text-gray-700 dark:text-gray-300" }, Bl = ["max", "placeholder"], Ll = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, Kl = ["disabled", "aria-label"], Fl = ["onClick", "disabled", "aria-label", "aria-current"], Nl = ["disabled", "aria-label"], Wl = /* @__PURE__ */ St({
  __name: "Pagination",
  props: {
    total: {},
    page: {},
    pageSize: {},
    pageSizeOptions: { default: () => kt() },
    showPageSizeSelector: { type: Boolean, default: !0 },
    showJump: { type: Boolean, default: !1 }
  },
  emits: ["update:page", "update:pageSize"],
  setup(t, { emit: e }) {
    const { t: a } = $t(), s = t, i = e, o = C(() => Math.ceil(s.total / s.pageSize)), c = C(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), d = C(() => {
      const w = s.page * s.pageSize;
      return w > s.total ? s.total : w;
    }), g = C(() => Array.from(
      /* @__PURE__ */ new Set([
        ...kt(),
        nt(s.pageSize)
      ])
    ).sort((f, h) => f - h).map((f) => ({
      value: f,
      label: String(f)
    }))), S = G(""), $ = C(() => {
      const w = [], h = o.value;
      if (h <= 7)
        for (let E = 1; E <= h; E++)
          w.push(E);
      else {
        w.push(1);
        const E = Math.max(2, s.page - 2), R = Math.min(h - 1, s.page + 2);
        E > 2 && w.push("...");
        for (let p = E; p <= R; p++)
          w.push(p);
        R < h - 1 && w.push("..."), w.push(h);
      }
      return w;
    }), _ = (w) => {
      w >= 1 && w <= o.value && w !== s.page && i("update:page", w);
    }, k = (w) => {
      if (w === null || typeof w == "boolean") return;
      const f = nt(typeof w == "string" ? parseInt(w, 10) : w);
      Iu(f), i("update:pageSize", f);
    }, M = () => {
      const w = String(S.value).trim();
      if (!w) return;
      const f = Number.parseInt(w, 10);
      if (Number.isNaN(f)) return;
      const h = Math.min(Math.max(f, 1), o.value);
      S.value = "", _(h);
    };
    return (w, f) => (b(), v("div", Sl, [
      m("div", $l, [
        m("button", {
          onClick: f[0] || (f[0] = (h) => _(t.page - 1)),
          disabled: t.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, A(O(a)("pagination.previous")), 9, xl),
        m("span", _l, A(O(a)("pagination.pageOf", { page: t.page, total: o.value })), 1),
        m("button", {
          onClick: f[1] || (f[1] = (h) => _(t.page + 1)),
          disabled: t.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, A(O(a)("pagination.next")), 9, Cl)
      ]),
      m("div", Il, [
        m("div", Al, [
          m("p", Ol, [
            et(A(O(a)("pagination.showing")) + " ", 1),
            m("span", El, A(c.value), 1),
            et(" " + A(O(a)("pagination.to")) + " ", 1),
            m("span", Ml, A(d.value), 1),
            et(" " + A(O(a)("pagination.of")) + " ", 1),
            m("span", Rl, A(t.total), 1),
            et(" " + A(O(a)("pagination.results")), 1)
          ]),
          t.showPageSizeSelector ? (b(), v("div", Pl, [
            m("span", Tl, A(O(a)("pagination.perPage")) + ":", 1),
            m("div", zl, [
              at(De, {
                "model-value": t.pageSize,
                options: g.value,
                "onUpdate:modelValue": k
              }, null, 8, ["model-value", "options"])
            ])
          ])) : D("", !0),
          t.showJump ? (b(), v("div", Ul, [
            m("span", Dl, A(O(a)("pagination.jumpTo")), 1),
            Pe(m("input", {
              "onUpdate:modelValue": f[2] || (f[2] = (h) => S.value = h),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: O(a)("pagination.jumpPlaceholder"),
              onKeyup: ze(M, ["enter"])
            }, null, 40, Bl), [
              [Te, S.value]
            ]),
            m("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: M
            }, A(O(a)("pagination.jumpAction")), 1)
          ])) : D("", !0)
        ]),
        m("nav", Ll, [
          m("button", {
            onClick: f[3] || (f[3] = (h) => _(t.page - 1)),
            disabled: t.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": O(a)("pagination.previous")
          }, [
            at(ut, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, Kl),
          (b(!0), v(U, null, F($.value, (h, E) => (b(), v("button", {
            key: `${h}-${E}`,
            onClick: (R) => typeof h == "number" && _(h),
            disabled: typeof h != "number",
            class: B([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              h === t.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof h != "number" && "cursor-default"
            ]),
            "aria-label": typeof h == "number" ? O(a)("pagination.goToPage", { page: h }) : void 0,
            "aria-current": h === t.page ? "page" : void 0
          }, A(h), 11, Fl))), 128)),
          m("button", {
            onClick: f[4] || (f[4] = (h) => _(t.page + 1)),
            disabled: t.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": O(a)("pagination.next")
          }, [
            at(ut, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, Nl)
        ])
      ])
    ]));
  }
}), td = /* @__PURE__ */ re(Wl, [["__scopeId", "data-v-4125afbb"]]), jl = { class: "space-y-4" }, ql = { class: "text-sm text-gray-600 dark:text-gray-400" }, Gl = { class: "flex justify-end space-x-3" }, ed = /* @__PURE__ */ St({
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
    const { t: a } = $t(), s = t, i = C(() => s.confirmText || a("common.confirm")), o = C(() => s.cancelText || a("common.cancel")), c = e, d = () => {
      c("confirm");
    }, g = () => {
      c("cancel");
    };
    return (S, $) => (b(), Ue(Be, {
      show: t.show,
      title: t.title,
      width: "narrow",
      onClose: g
    }, {
      footer: Qt(() => [
        m("div", Gl, [
          m("button", {
            onClick: g,
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 dark:focus:ring-offset-dark-800"
          }, A(o.value), 1),
          m("button", {
            onClick: d,
            type: "button",
            class: B([
              "rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800",
              t.danger ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
            ])
          }, A(i.value), 3)
        ])
      ]),
      default: Qt(() => [
        m("div", jl, [
          m("p", ql, A(t.message), 1),
          J(S.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
}), Vl = [
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
], ad = [
  ...Vl,
  { value: "composite", label: "Composite" }
];
export {
  Vl as C,
  Yl as D,
  ad as G,
  td as P,
  ed as _,
  Mn as a,
  Zl as b,
  Yn as c,
  Ln as d,
  Jl as e,
  Xl as g,
  go as o,
  Bn as r,
  Iu as s
};
