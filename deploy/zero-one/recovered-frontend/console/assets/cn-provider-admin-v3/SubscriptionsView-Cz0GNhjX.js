import { d as dt, u as ct, c as S, p as mt, o as r, a as l, b as e, h as g, t as o, g as c, n as O, F as U, f as x, e as n, l as pt, j as m, q as W, s as Wt, m as Yt, H as Jt, v as y, k as P, _ as k, r as de, G as $e, x as xe, y as he, w as Ue, a2 as Xt, a1 as Zt } from "./cnProviderAdminLeaf-DkKZCNPa.js";
import { g as es, G as ts, P as ss, D as as, c as is, S as _e, _ as nt, a as Fe, b as $ } from "./platforms-Bfpq9CrM.js";
import { c as ot } from "./format-x-fWXJdI.js";
import { T as ns } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-D7pMn6W3.js";
import { f as os, s as rs, _ as je } from "./GroupBadge.vue_vue_type_script_setup_true_lang-BtsWAs1d.js";
const ls = { class: "flex min-w-0 flex-1 items-start justify-between gap-3" }, us = ["title"], ds = {
  key: 0,
  class: "mt-1.5 w-full whitespace-pre-line [overflow-wrap:anywhere] text-left text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3"
}, cs = { class: "flex shrink-0 items-center gap-2 pt-0.5" }, ms = { class: "flex shrink-0 flex-col items-end gap-1" }, ps = { class: "mr-1 line-through opacity-50" }, gs = { class: "font-bold" }, bs = ["title"], ys = {
  key: 0,
  class: "h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "2"
}, vs = /* @__PURE__ */ dt({
  __name: "GroupOptionItem",
  props: {
    name: {},
    platform: {},
    subscriptionType: { default: "standard" },
    rateMultiplier: {},
    userRateMultiplier: { default: null },
    peakRateEnabled: { type: Boolean, default: !1 },
    peakStart: {},
    peakEnd: {},
    peakRateMultiplier: {},
    description: {},
    selected: { type: Boolean, default: !1 },
    showCheckmark: { type: Boolean, default: !0 }
  },
  setup(p) {
    const { t } = ct(), d = p, h = S(() => d.userRateMultiplier !== null && d.userRateMultiplier !== void 0 && d.rateMultiplier !== void 0 && d.userRateMultiplier !== d.rateMultiplier), M = mt(), v = S(() => !!(d.peakRateEnabled && d.peakStart && d.peakEnd)), L = S(() => {
      var G;
      return os(
        {
          peak_rate_enabled: d.peakRateEnabled,
          peak_start: d.peakStart,
          peak_end: d.peakEnd,
          peak_rate_multiplier: d.peakRateMultiplier
        },
        rs((G = M.cachedPublicSettings) == null ? void 0 : G.server_utc_offset)
      );
    }), Y = S(() => t("common.peakRateTooltip", { window: L.value })), B = S(() => {
      switch (d.platform) {
        case "anthropic":
          return "bg-zo-alert-50 text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-400";
        case "openai":
          return "bg-zo-signal-50 text-zo-signal-700 dark:bg-zo-signal-900/20 dark:text-zo-signal-400";
        case "gemini":
          return "bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400";
        default:
          return "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400";
      }
    });
    return (G, ce) => (r(), l("div", ls, [
      e("div", {
        class: "flex min-w-0 flex-1 flex-col items-start",
        title: p.description || void 0
      }, [
        g(je, {
          name: p.name,
          platform: p.platform,
          "subscription-type": p.subscriptionType,
          "show-rate": !1,
          class: "groupOptionItemBadge"
        }, null, 8, ["name", "platform", "subscription-type"]),
        p.description ? (r(), l("span", ds, o(p.description), 1)) : c("", !0)
      ], 8, us),
      e("div", cs, [
        e("div", ms, [
          p.rateMultiplier !== void 0 ? (r(), l("span", {
            key: 0,
            class: O(["inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold", B.value])
          }, [
            h.value ? (r(), l(U, { key: 0 }, [
              e("span", ps, o(p.rateMultiplier) + "x", 1),
              e("span", gs, o(p.userRateMultiplier) + "x", 1)
            ], 64)) : (r(), l(U, { key: 1 }, [
              x(o(p.rateMultiplier) + "x " + o(n(t)("admin.groups.rateLabel")), 1)
            ], 64))
          ], 2)) : c("", !0),
          v.value ? (r(), l("span", {
            key: 1,
            class: "inline-flex items-center whitespace-nowrap rounded-full bg-zo-alert-50 px-3 py-1 text-xs font-semibold text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-300",
            title: Y.value
          }, o(L.value), 9, bs)) : c("", !0)
        ]),
        p.showCheckmark && p.selected ? (r(), l("svg", ys, [...ce[0] || (ce[0] = [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M5 13l4 4L19 7"
          }, null, -1)
        ])])) : c("", !0)
      ])
    ]));
  }
}), fs = /* @__PURE__ */ pt(vs, [["__scopeId", "data-v-f3e0187e"]]), Ve = 1440 * 60 * 1e3;
function xs(p) {
  if (!p.starts_at || !p.expires_at) return !1;
  const t = new Date(p.starts_at).getTime(), d = new Date(p.expires_at).getTime();
  return !Number.isFinite(t) || !Number.isFinite(d) ? !1 : d <= t + Ve;
}
function rt(p, t = /* @__PURE__ */ new Date()) {
  const d = p instanceof Date ? p.getTime() : new Date(p).getTime(), h = t.getTime();
  if (!Number.isFinite(d) || !Number.isFinite(h)) return null;
  const M = d - h;
  if (M <= 0) return null;
  const v = Math.floor(M / (1e3 * 60)), L = Math.floor(v / 1440), Y = Math.floor(v % 1440 / 60), B = v % 60;
  return { days: L, hours: Y, minutes: B };
}
function hs(p, t = /* @__PURE__ */ new Date()) {
  const d = p instanceof Date ? p.getTime() : new Date(p).getTime(), h = t.getTime();
  if (!Number.isFinite(d) || !Number.isFinite(h)) return null;
  const M = d - h;
  if (M <= 0) return null;
  if (M >= Ve)
    return { unit: "days", days: Math.ceil(M / Ve) };
  const v = Math.ceil(M / (60 * 1e3));
  return {
    unit: "hoursMinutes",
    hours: Math.floor(v / 60),
    minutes: v % 60
  };
}
const _s = { class: "flex flex-wrap items-start justify-between gap-4" }, ks = { class: "flex flex-1 flex-wrap items-center gap-3" }, ws = {
  class: "relative w-full sm:w-64",
  "data-filter-user-search": ""
}, Cs = ["placeholder"], Ss = ["title"], zs = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ms = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Ts = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Es = ["onClick"], Ds = { class: "font-medium text-gray-900 dark:text-white" }, Rs = { class: "ml-2 text-gray-500 dark:text-gray-400" }, $s = { class: "w-full sm:w-40" }, Us = { class: "w-full sm:w-48" }, Fs = { class: "w-full sm:w-40" }, js = { class: "ml-auto flex flex-wrap items-center justify-end gap-3" }, Vs = ["disabled", "title"], As = ["title"], Is = { class: "hidden md:inline" }, Ns = {
  key: 0,
  class: "absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ps = { class: "p-2" }, Os = { class: "mb-2 border-b border-gray-200 pb-2 dark:border-dark-700" }, Ls = { class: "px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400" }, Bs = ["onClick"], Gs = ["title"], Qs = { class: "flex items-center gap-2" }, Hs = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30" }, qs = { class: "text-sm font-medium text-primary-700 dark:text-primary-300" }, Ks = { class: "font-medium text-gray-900 dark:text-white" }, Ws = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-dark-500"
}, Ys = { class: "min-w-[280px] space-y-2" }, Js = {
  key: 0,
  class: "usage-row"
}, Xs = { class: "flex items-center gap-2" }, Zs = { class: "usage-label" }, ea = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, ta = { class: "usage-amount" }, sa = {
  key: 0,
  class: "reset-info"
}, aa = {
  key: 1,
  class: "usage-row"
}, ia = { class: "flex items-center gap-2" }, na = { class: "usage-label" }, oa = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, ra = { class: "usage-amount" }, la = {
  key: 0,
  class: "reset-info"
}, ua = {
  key: 2,
  class: "usage-row"
}, da = { class: "flex items-center gap-2" }, ca = { class: "usage-label" }, ma = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, pa = { class: "usage-amount" }, ga = {
  key: 0,
  class: "reset-info"
}, ba = {
  key: 3,
  class: "flex items-center gap-2 rounded-lg bg-zo-signal-50 px-3 py-2 dark:bg-zo-signal-900/20"
}, ya = { class: "text-xs font-medium text-zo-signal-700 dark:text-zo-signal-300" }, va = { key: 0 }, fa = {
  key: 0,
  class: "text-xs text-gray-500"
}, xa = {
  key: 1,
  class: "text-sm text-gray-500"
}, ha = { class: "flex items-center gap-1" }, _a = ["onClick"], ka = { class: "text-xs" }, wa = ["onClick", "disabled"], Ca = { class: "text-xs" }, Sa = ["onClick"], za = { class: "text-xs" }, Ma = ["onClick"], Ta = { class: "text-xs" }, Ea = { class: "input-label" }, Da = {
  class: "relative",
  "data-assign-user-search": ""
}, Ra = ["placeholder"], $a = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ua = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Fa = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, ja = ["onClick"], Va = { class: "font-medium text-gray-900 dark:text-white" }, Aa = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Ia = { class: "input-label" }, Na = {
  key: 1,
  class: "text-gray-400"
}, Pa = { class: "input-hint" }, Oa = { class: "input-label" }, La = { class: "input-hint" }, Ba = { class: "flex justify-end gap-3" }, Ga = ["disabled"], Qa = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ha = { class: "rounded-lg bg-gray-50 p-4 dark:bg-dark-700" }, qa = { class: "text-sm text-gray-600 dark:text-gray-400" }, Ka = { class: "font-medium text-gray-900 dark:text-white" }, Wa = { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, Ya = { class: "font-medium text-gray-900 dark:text-white" }, Ja = {
  key: 0,
  class: "mt-1 text-sm text-gray-600 dark:text-gray-400"
}, Xa = { class: "font-medium text-gray-900 dark:text-white" }, Za = { class: "input-label" }, ei = { class: "flex items-center gap-2" }, ti = ["placeholder"], si = { class: "input-hint" }, ai = {
  key: 0,
  class: "flex justify-end gap-3"
}, ii = ["disabled"], ni = { class: "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, oi = { class: "mb-4 text-lg font-bold text-gray-900 dark:text-white" }, ri = { class: "mb-5 text-sm text-gray-500 dark:text-gray-400" }, li = { class: "mb-5" }, ui = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, di = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, ci = { class: "ml-8 mt-2" }, mi = { class: "mb-5" }, pi = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, gi = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, bi = { class: "mb-5" }, yi = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, vi = { class: "ml-8 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, fi = { class: "w-full text-sm" }, xi = { class: "whitespace-nowrap bg-gray-50 px-3 py-2 font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-300" }, hi = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, _i = { class: "rounded-lg bg-blue-50 p-3 text-xs text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" }, ki = { class: "mt-4 text-right" }, lt = "subscription-user-column-mode", ut = "subscription-hidden-columns", wi = /* @__PURE__ */ dt({
  __name: "SubscriptionsView",
  setup(p) {
    const { t } = ct(), d = mt(), h = m(!1), M = S(() => [
      { action: t("admin.subscriptions.guide.actions.adjust"), desc: t("admin.subscriptions.guide.actions.adjustDesc") },
      { action: t("admin.subscriptions.guide.actions.resetQuota"), desc: t("admin.subscriptions.guide.actions.resetQuotaDesc") },
      { action: t("admin.subscriptions.guide.actions.revoke"), desc: t("admin.subscriptions.guide.actions.revokeDesc") }
    ]), v = m("email"), L = () => {
      try {
        const a = localStorage.getItem(lt);
        (a === "email" || a === "username") && (v.value = a);
      } catch (a) {
        console.error("Failed to load user column mode:", a);
      }
    }, Y = () => {
      try {
        localStorage.setItem(lt, v.value);
      } catch (a) {
        console.error("Failed to save user column mode:", a);
      }
    }, B = (a) => {
      v.value = a, Y();
    }, G = S(() => [
      {
        key: "user",
        label: v.value === "email" ? t("admin.subscriptions.columns.user") : t("admin.users.columns.username"),
        sortable: !1
      },
      { key: "group", label: t("admin.subscriptions.columns.group"), sortable: !1 },
      { key: "usage", label: t("admin.subscriptions.columns.usage"), sortable: !1 },
      { key: "expires_at", label: t("admin.subscriptions.columns.expires"), sortable: !0 },
      { key: "status", label: t("admin.subscriptions.columns.status"), sortable: !0 },
      { key: "actions", label: t("admin.subscriptions.columns.actions"), sortable: !1 }
    ]), ce = S(
      () => G.value.filter((a) => a.key !== "user" && a.key !== "actions")
    ), E = W(/* @__PURE__ */ new Set()), Ae = [], gt = () => {
      try {
        const a = localStorage.getItem(ut);
        a ? JSON.parse(a).forEach((u) => E.add(u)) : Ae.forEach((s) => E.add(s));
      } catch (a) {
        console.error("Failed to load saved columns:", a), Ae.forEach((s) => E.add(s));
      }
    }, bt = () => {
      try {
        localStorage.setItem(ut, JSON.stringify([...E]));
      } catch (a) {
        console.error("Failed to save columns:", a);
      }
    }, yt = (a) => {
      E.has(a) ? E.delete(a) : E.add(a), bt();
    }, vt = (a) => !E.has(a), ft = S(
      () => G.value.filter(
        (a) => a.key === "user" || a.key === "actions" || !E.has(a.key)
      )
    ), me = m(!1), ke = m(null), xt = S(() => [
      { value: "", label: t("admin.subscriptions.allStatus") },
      { value: "active", label: t("admin.subscriptions.status.active") },
      { value: "expired", label: t("admin.subscriptions.status.expired") },
      { value: "revoked", label: t("admin.subscriptions.status.revoked") }
    ]), Ie = m([]), we = m([]), J = m(!1);
    let Q = null;
    const V = m(""), A = m([]), Ce = m(!1), X = m(!1), H = m(null);
    let Z = null;
    const F = m(""), j = m([]), Se = m(!1), ee = m(!1), I = m(null);
    let te = null;
    const _ = W({
      status: "active",
      group_id: "",
      platform: "",
      user_id: null
    }), pe = W({
      sort_by: "created_at",
      sort_order: "desc"
    }), w = W({
      page: 1,
      page_size: es(),
      total: 0,
      pages: 0
    }), ge = m(!1), ze = m(!1), be = m(!1), ye = m(!1), ve = m(!1), D = m(!1), q = m(null), fe = m(!1), C = m(null), se = m(null), ae = m(null), f = W({
      user_id: null,
      group_id: null,
      validity_days: 30
    }), ie = W({
      days: 30
    }), ht = S(() => [
      { value: "", label: t("admin.subscriptions.allGroups") },
      ...we.value.map((a) => ({ value: a.id.toString(), label: a.name }))
    ]), _t = S(() => [
      { value: "", label: t("admin.subscriptions.allPlatforms") },
      ...ts
    ]), kt = S(
      () => we.value.filter((a) => a.subscription_type === "subscription" && a.status === "active").map((a) => ({
        value: a.id,
        label: a.name,
        description: a.description,
        platform: a.platform,
        subscriptionType: a.subscription_type,
        rate: a.rate_multiplier
      }))
    ), K = () => {
      w.page = 1, T();
    }, T = async () => {
      Q && Q.abort();
      const a = new AbortController();
      Q = a;
      const { signal: s } = a;
      J.value = !0;
      try {
        const u = await $.subscriptions.list(
          w.page,
          w.page_size,
          {
            status: _.status || void 0,
            group_id: _.group_id ? parseInt(_.group_id) : void 0,
            platform: _.platform || void 0,
            user_id: _.user_id || void 0,
            sort_by: pe.sort_by,
            sort_order: pe.sort_order
          },
          {
            signal: s
          }
        );
        if (s.aborted || Q !== a) return;
        Ie.value = u.items, w.total = u.total, w.pages = u.pages;
      } catch (u) {
        if (s.aborted || (u == null ? void 0 : u.name) === "AbortError" || (u == null ? void 0 : u.code) === "ERR_CANCELED")
          return;
        d.showError(t("admin.subscriptions.failedToLoad")), console.error("Error loading subscriptions:", u);
      } finally {
        Q === a && (J.value = !1, Q = null);
      }
    }, wt = async () => {
      try {
        we.value = await $.groups.getAll();
      } catch (a) {
        console.error("Error loading groups:", a);
      }
    }, Ct = () => {
      Z && clearTimeout(Z), Z = setTimeout(St, 300);
    }, St = async () => {
      const a = V.value.trim();
      if (H.value && a !== H.value.email && (H.value = null, _.user_id = null, K()), !a) {
        A.value = [];
        return;
      }
      Ce.value = !0;
      try {
        A.value = await $.usage.searchUsers(a);
      } catch (s) {
        console.error("Failed to search users:", s), A.value = [];
      } finally {
        Ce.value = !1;
      }
    }, zt = (a) => {
      H.value = a, V.value = a.email, X.value = !1, _.user_id = a.id, K();
    }, Mt = () => {
      H.value = null, V.value = "", A.value = [], X.value = !1, _.user_id = null, K();
    }, Tt = () => {
      te && clearTimeout(te), te = setTimeout(Et, 300);
    }, Et = async () => {
      const a = F.value.trim();
      if (I.value && a !== I.value.email && (I.value = null, f.user_id = null), !a) {
        j.value = [];
        return;
      }
      Se.value = !0;
      try {
        j.value = await $.usage.searchUsers(a);
      } catch (s) {
        console.error("Failed to search users:", s), j.value = [];
      } finally {
        Se.value = !1;
      }
    }, Dt = (a) => {
      I.value = a, F.value = a.email, ee.value = !1, f.user_id = a.id;
    }, Rt = () => {
      I.value = null, F.value = "", j.value = [], f.user_id = null;
    }, $t = (a) => {
      w.page = a, T();
    }, Ut = (a) => {
      w.page_size = a, w.page = 1, T();
    }, Ft = (a, s) => {
      pe.sort_by = a, pe.sort_order = s, w.page = 1, T();
    }, Me = () => {
      ge.value = !1, f.user_id = null, f.group_id = null, f.validity_days = 30, I.value = null, F.value = "", j.value = [], ee.value = !1;
    }, jt = async () => {
      var a, s;
      if (!f.user_id) {
        d.showError(t("admin.subscriptions.pleaseSelectUser"));
        return;
      }
      if (!f.group_id) {
        d.showError(t("admin.subscriptions.pleaseSelectGroup"));
        return;
      }
      if (!f.validity_days || f.validity_days < 1) {
        d.showError(t("admin.subscriptions.validityDaysRequired"));
        return;
      }
      D.value = !0;
      try {
        await $.subscriptions.assign({
          user_id: f.user_id,
          group_id: f.group_id,
          validity_days: f.validity_days
        }), d.showSuccess(t("admin.subscriptions.subscriptionAssigned")), Me(), T();
      } catch (u) {
        d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToAssign")), console.error("Error assigning subscription:", u);
      } finally {
        D.value = !1;
      }
    }, Vt = (a) => {
      C.value = a, ie.days = 30, ze.value = !0;
    }, Te = () => {
      ze.value = !1, C.value = null;
    }, At = async () => {
      var a, s;
      if (C.value) {
        if (C.value.expires_at) {
          const u = new Date(C.value.expires_at);
          if (new Date(u.getTime() + ie.days * 24 * 60 * 60 * 1e3) <= /* @__PURE__ */ new Date()) {
            d.showError(t("admin.subscriptions.adjustWouldExpire"));
            return;
          }
        }
        D.value = !0;
        try {
          await $.subscriptions.extend(C.value.id, {
            days: ie.days
          }), d.showSuccess(t("admin.subscriptions.subscriptionAdjusted")), Te(), T();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToAdjust")), console.error("Error adjusting subscription:", u);
        } finally {
          D.value = !1;
        }
      }
    }, It = (a) => {
      se.value = a, be.value = !0;
    }, Nt = async () => {
      var a, s;
      if (se.value)
        try {
          await $.subscriptions.revoke(se.value.id), d.showSuccess(t("admin.subscriptions.subscriptionRevoked")), be.value = !1, se.value = null, T();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToRevoke")), console.error("Error revoking subscription:", u);
        }
    }, Pt = (a) => {
      ae.value = a, ye.value = !0;
    }, Ot = async () => {
      var a, s;
      if (ae.value)
        try {
          await $.subscriptions.restore(ae.value.id), d.showSuccess(t("admin.subscriptions.subscriptionRestored")), ye.value = !1, ae.value = null, T();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToRestore")), console.error("Error restoring subscription:", u);
        }
    }, Lt = (a) => {
      q.value = a, ve.value = !0;
    }, Bt = async () => {
      var a, s;
      if (q.value && !fe.value) {
        fe.value = !0;
        try {
          await $.subscriptions.resetQuota(q.value.id, { daily: !0, weekly: !0, monthly: !0 }), d.showSuccess(t("admin.subscriptions.quotaResetSuccess")), ve.value = !1, q.value = null, await T();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToResetQuota")), console.error("Error resetting quota:", u);
        } finally {
          fe.value = !1;
        }
      }
    }, Ne = (a) => {
      const s = /* @__PURE__ */ new Date(), z = new Date(a).getTime() - s.getTime();
      return z < 0 ? null : Math.ceil(z / (1e3 * 60 * 60 * 24));
    }, Gt = (a) => {
      const s = hs(a);
      return s ? s.unit === "days" ? t("admin.subscriptions.daysRemaining", { days: s.days }) : s.hours ? t("admin.subscriptions.hoursMinutesRemaining", {
        hours: s.hours,
        minutes: s.minutes
      }) : t("admin.subscriptions.minutesRemaining", { minutes: s.minutes }) : null;
    }, Qt = (a) => {
      const s = Ne(a);
      return s !== null && s <= 7;
    }, Ee = (a, s) => !s || s === 0 ? "0%" : `${Math.min((a ?? 0) / s * 100, 100)}%`, De = (a, s) => {
      if (!s || s === 0) return "bg-gray-400";
      const z = (a ?? 0) / s * 100;
      return z >= 90 ? "bg-red-500" : z >= 70 ? "bg-zo-alert-500" : "bg-zo-signal-500";
    }, Ht = (a) => a.days > 0 ? t("admin.subscriptions.resetInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? t("admin.subscriptions.resetInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : t("admin.subscriptions.resetInMinutes", { minutes: a.minutes }), qt = (a) => a.days > 0 ? t("admin.subscriptions.quotaEndsInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? t("admin.subscriptions.quotaEndsInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : t("admin.subscriptions.quotaEndsInMinutes", { minutes: a.minutes }), Kt = (a) => {
      if (xs(a) && a.expires_at) {
        const s = rt(a.expires_at);
        return s ? qt(s) : t("admin.subscriptions.windowNotActive");
      }
      return Re(a.daily_window_start, "daily");
    }, Re = (a, s) => {
      if (!a) return t("admin.subscriptions.windowNotActive");
      const u = new Date(a), z = /* @__PURE__ */ new Date();
      let N;
      switch (s) {
        case "daily":
          N = new Date(u.getTime() + 1440 * 60 * 1e3);
          break;
        case "weekly":
          N = new Date(u.getTime() + 10080 * 60 * 1e3);
          break;
        case "monthly":
          N = new Date(u.getTime() + 720 * 60 * 60 * 1e3);
          break;
      }
      const ne = rt(N, z);
      return ne ? Ht(ne) : t("admin.subscriptions.windowNotActive");
    }, Pe = (a) => {
      const s = a.target;
      s.closest("[data-assign-user-search]") || (ee.value = !1), s.closest("[data-filter-user-search]") || (X.value = !1), ke.value && !ke.value.contains(s) && (me.value = !1);
    };
    return Wt(() => {
      L(), gt(), T(), wt(), document.addEventListener("click", Pe);
    }), Yt(() => {
      document.removeEventListener("click", Pe), Z && clearTimeout(Z), te && clearTimeout(te);
    }), (a, s) => {
      var z, N, ne, Oe, Le, Be;
      const u = Jt("router-link");
      return r(), l(U, null, [
        g(ns, null, {
          filters: y(() => [
            e("div", _s, [
              e("div", ks, [
                e("div", ws, [
                  g(k, {
                    name: "search",
                    size: "md",
                    class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  }),
                  xe(e("input", {
                    "onUpdate:modelValue": s[0] || (s[0] = (i) => V.value = i),
                    type: "text",
                    placeholder: n(t)("admin.users.searchUsers"),
                    class: "input pl-10 pr-8",
                    onInput: Ct,
                    onFocus: s[1] || (s[1] = (i) => X.value = !0)
                  }, null, 40, Cs), [
                    [he, V.value]
                  ]),
                  H.value ? (r(), l("button", {
                    key: 0,
                    onClick: Mt,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                    title: n(t)("common.clear")
                  }, [
                    g(k, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ], 8, Ss)) : c("", !0),
                  X.value && (A.value.length > 0 || V.value) ? (r(), l("div", zs, [
                    Ce.value ? (r(), l("div", Ms, o(n(t)("common.loading")), 1)) : A.value.length === 0 && V.value ? (r(), l("div", Ts, o(n(t)("common.noOptionsFound")), 1)) : c("", !0),
                    (r(!0), l(U, null, de(A.value, (i) => (r(), l("button", {
                      key: i.id,
                      type: "button",
                      onClick: (b) => zt(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      e("span", Ds, o(i.email), 1),
                      e("span", Rs, "#" + o(i.id), 1)
                    ], 8, Es))), 128))
                  ])) : c("", !0)
                ]),
                e("div", $s, [
                  g(_e, {
                    modelValue: _.status,
                    "onUpdate:modelValue": s[2] || (s[2] = (i) => _.status = i),
                    options: xt.value,
                    placeholder: n(t)("admin.subscriptions.allStatus"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                e("div", Us, [
                  g(_e, {
                    modelValue: _.group_id,
                    "onUpdate:modelValue": s[3] || (s[3] = (i) => _.group_id = i),
                    options: ht.value,
                    placeholder: n(t)("admin.subscriptions.allGroups"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                e("div", Fs, [
                  g(_e, {
                    "data-testid": "subscription-platform-filter",
                    modelValue: _.platform,
                    "onUpdate:modelValue": s[4] || (s[4] = (i) => _.platform = i),
                    options: _t.value,
                    placeholder: n(t)("admin.subscriptions.allPlatforms"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ])
              ]),
              e("div", js, [
                e("button", {
                  onClick: T,
                  disabled: J.value,
                  class: "btn btn-secondary",
                  title: n(t)("common.refresh")
                }, [
                  g(k, {
                    name: "refresh",
                    size: "md",
                    class: O(J.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, Vs),
                e("div", {
                  class: "relative",
                  ref_key: "columnDropdownRef",
                  ref: ke
                }, [
                  e("button", {
                    onClick: s[5] || (s[5] = (i) => me.value = !me.value),
                    class: "btn btn-secondary px-2 md:px-3",
                    title: n(t)("admin.users.columnSettings")
                  }, [
                    s[24] || (s[24] = e("svg", {
                      class: "h-4 w-4 md:mr-1.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5"
                    }, [
                      e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                      })
                    ], -1)),
                    e("span", Is, o(n(t)("admin.users.columnSettings")), 1)
                  ], 8, As),
                  me.value ? (r(), l("div", Ns, [
                    e("div", Ps, [
                      e("div", Os, [
                        e("div", Ls, o(n(t)("admin.subscriptions.columns.user")), 1),
                        e("button", {
                          onClick: s[6] || (s[6] = (i) => B("email")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          e("span", null, o(n(t)("admin.users.columns.email")), 1),
                          v.value === "email" ? (r(), P(k, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : c("", !0)
                        ]),
                        e("button", {
                          onClick: s[7] || (s[7] = (i) => B("username")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          e("span", null, o(n(t)("admin.users.columns.username")), 1),
                          v.value === "username" ? (r(), P(k, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : c("", !0)
                        ])
                      ]),
                      (r(!0), l(U, null, de(ce.value, (i) => (r(), l("button", {
                        key: i.key,
                        onClick: (b) => yt(i.key),
                        class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                      }, [
                        e("span", null, o(i.label), 1),
                        vt(i.key) ? (r(), P(k, {
                          key: 0,
                          name: "check",
                          size: "sm",
                          class: "text-primary-500"
                        })) : c("", !0)
                      ], 8, Bs))), 128))
                    ])
                  ])) : c("", !0)
                ], 512),
                e("button", {
                  onClick: s[8] || (s[8] = (i) => h.value = !0),
                  class: "btn btn-secondary",
                  title: n(t)("admin.subscriptions.guide.showGuide")
                }, [
                  g(k, {
                    name: "questionCircle",
                    size: "md"
                  })
                ], 8, Gs),
                e("button", {
                  onClick: s[9] || (s[9] = (i) => ge.value = !0),
                  class: "btn btn-primary"
                }, [
                  g(k, {
                    name: "plus",
                    size: "md",
                    class: "mr-2"
                  }),
                  x(" " + o(n(t)("admin.subscriptions.assignSubscription")), 1)
                ])
              ])
            ])
          ]),
          table: y(() => [
            g(as, {
              columns: ft.value,
              data: Ie.value,
              loading: J.value,
              "server-side-sort": !0,
              "default-sort-key": "created_at",
              "default-sort-order": "desc",
              onSort: Ft
            }, {
              "cell-user": y(({ row: i }) => {
                var b, R, oe, re, le, ue;
                return [
                  e("div", Qs, [
                    e("div", Hs, [
                      e("span", qs, o(v.value === "email" ? ((R = (b = i.user) == null ? void 0 : b.email) == null ? void 0 : R.charAt(0).toUpperCase()) || "?" : ((re = (oe = i.user) == null ? void 0 : oe.username) == null ? void 0 : re.charAt(0).toUpperCase()) || "?"), 1)
                    ]),
                    e("span", Ks, o(v.value === "email" ? ((le = i.user) == null ? void 0 : le.email) || n(t)("admin.redeem.userPrefix", { id: i.user_id }) : ((ue = i.user) == null ? void 0 : ue.username) || "-"), 1)
                  ])
                ];
              }),
              "cell-group": y(({ row: i }) => [
                i.group ? (r(), P(je, {
                  key: 0,
                  name: i.group.name,
                  platform: i.group.platform,
                  "subscription-type": i.group.subscription_type,
                  "rate-multiplier": i.group.rate_multiplier,
                  "show-rate": !1
                }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), l("span", Ws, "-"))
              ]),
              "cell-usage": y(({ row: i }) => {
                var b, R, oe, re, le, ue, Ge, Qe, He, qe, Ke, We, Ye, Je, Xe, Ze, et, tt, st, at, it;
                return [
                  e("div", Ys, [
                    (b = i.group) != null && b.daily_limit_usd ? (r(), l("div", Js, [
                      e("div", Xs, [
                        e("span", Zs, o(n(t)("admin.subscriptions.daily")), 1),
                        e("div", ea, [
                          e("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.daily_usage_usd, (R = i.group) == null ? void 0 : R.daily_limit_usd)]),
                            style: $e({
                              width: Ee(i.daily_usage_usd, (oe = i.group) == null ? void 0 : oe.daily_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", ta, [
                          x(" $" + o(((re = i.daily_usage_usd) == null ? void 0 : re.toFixed(2)) || "0.00") + " ", 1),
                          s[25] || (s[25] = e("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((ue = (le = i.group) == null ? void 0 : le.daily_limit_usd) == null ? void 0 : ue.toFixed(2)), 1)
                        ])
                      ]),
                      i.daily_window_start ? (r(), l("div", sa, [
                        s[26] || (s[26] = e("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        e("span", null, o(Kt(i)), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    (Ge = i.group) != null && Ge.weekly_limit_usd ? (r(), l("div", aa, [
                      e("div", ia, [
                        e("span", na, o(n(t)("admin.subscriptions.weekly")), 1),
                        e("div", oa, [
                          e("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.weekly_usage_usd, (Qe = i.group) == null ? void 0 : Qe.weekly_limit_usd)]),
                            style: $e({
                              width: Ee(i.weekly_usage_usd, (He = i.group) == null ? void 0 : He.weekly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", ra, [
                          x(" $" + o(((qe = i.weekly_usage_usd) == null ? void 0 : qe.toFixed(2)) || "0.00") + " ", 1),
                          s[27] || (s[27] = e("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((We = (Ke = i.group) == null ? void 0 : Ke.weekly_limit_usd) == null ? void 0 : We.toFixed(2)), 1)
                        ])
                      ]),
                      i.weekly_window_start ? (r(), l("div", la, [
                        s[28] || (s[28] = e("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        e("span", null, o(Re(i.weekly_window_start, "weekly")), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    (Ye = i.group) != null && Ye.monthly_limit_usd ? (r(), l("div", ua, [
                      e("div", da, [
                        e("span", ca, o(n(t)("admin.subscriptions.monthly")), 1),
                        e("div", ma, [
                          e("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.monthly_usage_usd, (Je = i.group) == null ? void 0 : Je.monthly_limit_usd)]),
                            style: $e({
                              width: Ee(i.monthly_usage_usd, (Xe = i.group) == null ? void 0 : Xe.monthly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", pa, [
                          x(" $" + o(((Ze = i.monthly_usage_usd) == null ? void 0 : Ze.toFixed(2)) || "0.00") + " ", 1),
                          s[29] || (s[29] = e("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((tt = (et = i.group) == null ? void 0 : et.monthly_limit_usd) == null ? void 0 : tt.toFixed(2)), 1)
                        ])
                      ]),
                      i.monthly_window_start ? (r(), l("div", ga, [
                        s[30] || (s[30] = e("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        e("span", null, o(Re(i.monthly_window_start, "monthly")), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    !((st = i.group) != null && st.daily_limit_usd) && !((at = i.group) != null && at.weekly_limit_usd) && !((it = i.group) != null && it.monthly_limit_usd) ? (r(), l("div", ba, [
                      s[31] || (s[31] = e("span", { class: "text-lg text-zo-signal-600 dark:text-zo-signal-400" }, "∞", -1)),
                      e("span", ya, o(n(t)("admin.subscriptions.unlimited")), 1)
                    ])) : c("", !0)
                  ])
                ];
              }),
              "cell-expires_at": y(({ value: i }) => [
                i ? (r(), l("div", va, [
                  e("span", {
                    class: O([
                      "text-sm",
                      Qt(i) ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-gray-700 dark:text-gray-300"
                    ])
                  }, o(n(ot)(i)), 3),
                  (r(!0), l(U, null, de([Gt(i)], (b) => (r(), l(U, {
                    key: b ?? "expired"
                  }, [
                    b ? (r(), l("div", fa, o(b), 1)) : c("", !0)
                  ], 64))), 128))
                ])) : (r(), l("span", xa, o(n(t)("admin.subscriptions.noExpiration")), 1))
              ]),
              "cell-status": y(({ value: i }) => [
                e("span", {
                  class: O([
                    "badge",
                    i === "active" ? "badge-success" : i === "expired" ? "badge-warning" : "badge-danger"
                  ])
                }, o(n(t)(`admin.subscriptions.status.${i}`)), 3)
              ]),
              "cell-actions": y(({ row: i }) => {
                var b;
                return [
                  e("div", ha, [
                    i.status === "active" || i.status === "expired" ? (r(), l("button", {
                      key: 0,
                      onClick: (R) => Vt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    }, [
                      g(k, {
                        name: "calendar",
                        size: "sm"
                      }),
                      e("span", ka, o(n(t)("admin.subscriptions.adjust")), 1)
                    ], 8, _a)) : c("", !0),
                    i.status === "active" ? (r(), l("button", {
                      key: 1,
                      onClick: (R) => Lt(i),
                      disabled: fe.value && ((b = q.value) == null ? void 0 : b.id) === i.id,
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-alert-50 hover:text-zo-alert-600 dark:hover:bg-zo-alert-900/20 dark:hover:text-zo-alert-400 disabled:cursor-not-allowed disabled:opacity-50"
                    }, [
                      g(k, {
                        name: "refresh",
                        size: "sm"
                      }),
                      e("span", Ca, o(n(t)("admin.subscriptions.resetQuota")), 1)
                    ], 8, wa)) : c("", !0),
                    i.status === "active" ? (r(), l("button", {
                      key: 2,
                      onClick: (R) => It(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    }, [
                      g(k, {
                        name: "ban",
                        size: "sm"
                      }),
                      e("span", za, o(n(t)("admin.subscriptions.revoke")), 1)
                    ], 8, Sa)) : c("", !0),
                    i.status === "revoked" ? (r(), l("button", {
                      key: 3,
                      onClick: (R) => Pt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-signal-50 hover:text-zo-signal-600 dark:hover:bg-zo-signal-900/20 dark:hover:text-zo-signal-400"
                    }, [
                      g(k, {
                        name: "refresh",
                        size: "sm"
                      }),
                      e("span", Ta, o(n(t)("admin.subscriptions.restore")), 1)
                    ], 8, Ma)) : c("", !0)
                  ])
                ];
              }),
              empty: y(() => [
                g(is, {
                  title: n(t)("admin.subscriptions.noSubscriptionsYet"),
                  description: n(t)("admin.subscriptions.assignFirstSubscription"),
                  "action-text": n(t)("admin.subscriptions.assignSubscription"),
                  onAction: s[10] || (s[10] = (i) => ge.value = !0)
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: y(() => [
            w.total > 0 ? (r(), P(ss, {
              key: 0,
              page: w.page,
              total: w.total,
              "page-size": w.page_size,
              "onUpdate:page": $t,
              "onUpdate:pageSize": Ut
            }, null, 8, ["page", "total", "page-size"])) : c("", !0)
          ]),
          _: 1
        }),
        g(nt, {
          show: ge.value,
          title: n(t)("admin.subscriptions.assignSubscription"),
          width: "normal",
          onClose: Me
        }, {
          footer: y(() => [
            e("div", Ba, [
              e("button", {
                onClick: Me,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(t)("common.cancel")), 1),
              e("button", {
                type: "submit",
                form: "assign-subscription-form",
                disabled: D.value,
                class: "btn btn-primary"
              }, [
                D.value ? (r(), l("svg", Qa, [...s[32] || (s[32] = [
                  e("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  e("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ])])) : c("", !0),
                x(" " + o(D.value ? n(t)("admin.subscriptions.assigning") : n(t)("admin.subscriptions.assign")), 1)
              ], 8, Ga)
            ])
          ]),
          default: y(() => [
            e("form", {
              id: "assign-subscription-form",
              onSubmit: Ue(jt, ["prevent"]),
              class: "space-y-5"
            }, [
              e("div", null, [
                e("label", Ea, o(n(t)("admin.subscriptions.form.user")), 1),
                e("div", Da, [
                  xe(e("input", {
                    "onUpdate:modelValue": s[11] || (s[11] = (i) => F.value = i),
                    type: "text",
                    class: "input pr-8",
                    placeholder: n(t)("admin.usage.searchUserPlaceholder"),
                    onInput: Tt,
                    onFocus: s[12] || (s[12] = (i) => ee.value = !0)
                  }, null, 40, Ra), [
                    [he, F.value]
                  ]),
                  I.value ? (r(), l("button", {
                    key: 0,
                    onClick: Rt,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }, [
                    g(k, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ])) : c("", !0),
                  ee.value && (j.value.length > 0 || F.value) ? (r(), l("div", $a, [
                    Se.value ? (r(), l("div", Ua, o(n(t)("common.loading")), 1)) : j.value.length === 0 && F.value ? (r(), l("div", Fa, o(n(t)("common.noOptionsFound")), 1)) : c("", !0),
                    (r(!0), l(U, null, de(j.value, (i) => (r(), l("button", {
                      key: i.id,
                      type: "button",
                      onClick: (b) => Dt(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      e("span", Va, o(i.email), 1),
                      e("span", Aa, "#" + o(i.id), 1)
                    ], 8, ja))), 128))
                  ])) : c("", !0)
                ])
              ]),
              e("div", null, [
                e("label", Ia, o(n(t)("admin.subscriptions.form.group")), 1),
                g(_e, {
                  modelValue: f.group_id,
                  "onUpdate:modelValue": s[13] || (s[13] = (i) => f.group_id = i),
                  options: kt.value,
                  placeholder: n(t)("admin.subscriptions.selectGroup")
                }, {
                  selected: y(({ option: i }) => [
                    i ? (r(), P(je, {
                      key: 0,
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), l("span", Na, o(n(t)("admin.subscriptions.selectGroup")), 1))
                  ]),
                  option: y(({ option: i, selected: b }) => [
                    g(fs, {
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate,
                      description: i.description,
                      selected: b
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "description", "selected"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "options", "placeholder"]),
                e("p", Pa, o(n(t)("admin.subscriptions.groupHint")), 1)
              ]),
              e("div", null, [
                e("label", Oa, o(n(t)("admin.subscriptions.form.validityDays")), 1),
                xe(e("input", {
                  "onUpdate:modelValue": s[14] || (s[14] = (i) => f.validity_days = i),
                  type: "number",
                  min: "1",
                  class: "input"
                }, null, 512), [
                  [
                    he,
                    f.validity_days,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", La, o(n(t)("admin.subscriptions.validityHint")), 1)
              ])
            ], 32)
          ]),
          _: 1
        }, 8, ["show", "title"]),
        g(nt, {
          show: ze.value,
          title: n(t)("admin.subscriptions.adjustSubscription"),
          width: "narrow",
          onClose: Te
        }, {
          footer: y(() => [
            C.value ? (r(), l("div", ai, [
              e("button", {
                onClick: Te,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(t)("common.cancel")), 1),
              e("button", {
                type: "submit",
                form: "extend-subscription-form",
                disabled: D.value,
                class: "btn btn-primary"
              }, o(D.value ? n(t)("admin.subscriptions.adjusting") : n(t)("admin.subscriptions.adjust")), 9, ii)
            ])) : c("", !0)
          ]),
          default: y(() => {
            var i;
            return [
              C.value ? (r(), l("form", {
                key: 0,
                id: "extend-subscription-form",
                onSubmit: Ue(At, ["prevent"]),
                class: "space-y-5"
              }, [
                e("div", Ha, [
                  e("p", qa, [
                    x(o(n(t)("admin.subscriptions.adjustingFor")) + " ", 1),
                    e("span", Ka, o((i = C.value.user) == null ? void 0 : i.email), 1)
                  ]),
                  e("p", Wa, [
                    x(o(n(t)("admin.subscriptions.currentExpiration")) + ": ", 1),
                    e("span", Ya, o(C.value.expires_at ? n(ot)(C.value.expires_at) : n(t)("admin.subscriptions.noExpiration")), 1)
                  ]),
                  C.value.expires_at ? (r(), l("p", Ja, [
                    x(o(n(t)("admin.subscriptions.remainingDays")) + ": ", 1),
                    e("span", Xa, o(Ne(C.value.expires_at) ?? 0), 1)
                  ])) : c("", !0)
                ]),
                e("div", null, [
                  e("label", Za, o(n(t)("admin.subscriptions.form.adjustDays")), 1),
                  e("div", ei, [
                    xe(e("input", {
                      "onUpdate:modelValue": s[15] || (s[15] = (b) => ie.days = b),
                      type: "number",
                      required: "",
                      class: "input text-center",
                      placeholder: n(t)("admin.subscriptions.adjustDaysPlaceholder")
                    }, null, 8, ti), [
                      [
                        he,
                        ie.days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("p", si, o(n(t)("admin.subscriptions.adjustHint")), 1)
                ])
              ], 32)) : c("", !0)
            ];
          }),
          _: 1
        }, 8, ["show", "title"]),
        g(Fe, {
          show: be.value,
          title: n(t)("admin.subscriptions.revokeSubscription"),
          message: n(t)("admin.subscriptions.revokeConfirm", { user: (N = (z = se.value) == null ? void 0 : z.user) == null ? void 0 : N.email }),
          "confirm-text": n(t)("admin.subscriptions.revoke"),
          "cancel-text": n(t)("common.cancel"),
          danger: !0,
          onConfirm: Nt,
          onCancel: s[16] || (s[16] = (i) => be.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        g(Fe, {
          show: ye.value,
          title: n(t)("admin.subscriptions.restoreSubscription"),
          message: n(t)("admin.subscriptions.restoreConfirm", { user: (Oe = (ne = ae.value) == null ? void 0 : ne.user) == null ? void 0 : Oe.email }),
          "confirm-text": n(t)("admin.subscriptions.restore"),
          "cancel-text": n(t)("common.cancel"),
          onConfirm: Ot,
          onCancel: s[17] || (s[17] = (i) => ye.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        g(Fe, {
          show: ve.value,
          title: n(t)("admin.subscriptions.resetQuotaTitle"),
          message: n(t)("admin.subscriptions.resetQuotaConfirm", { user: (Be = (Le = q.value) == null ? void 0 : Le.user) == null ? void 0 : Be.email }),
          "confirm-text": n(t)("admin.subscriptions.resetQuota"),
          "cancel-text": n(t)("common.cancel"),
          onConfirm: Bt,
          onCancel: s[18] || (s[18] = (i) => ve.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        (r(), P(Zt, { to: "body" }, [
          g(Xt, { name: "modal" }, {
            default: y(() => [
              h.value ? (r(), l("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4",
                onMousedown: s[23] || (s[23] = Ue((i) => h.value = !1, ["self"]))
              }, [
                e("div", {
                  class: "fixed inset-0 bg-black/50",
                  onClick: s[19] || (s[19] = (i) => h.value = !1)
                }),
                e("div", ni, [
                  e("button", {
                    type: "button",
                    class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                    onClick: s[20] || (s[20] = (i) => h.value = !1)
                  }, [...s[33] || (s[33] = [
                    e("svg", {
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])]),
                  e("h2", oi, o(n(t)("admin.subscriptions.guide.title")), 1),
                  e("p", ri, o(n(t)("admin.subscriptions.guide.subtitle")), 1),
                  e("div", li, [
                    e("h3", ui, [
                      s[34] || (s[34] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "1", -1)),
                      x(" " + o(n(t)("admin.subscriptions.guide.step1.title")), 1)
                    ]),
                    e("ol", di, [
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line1")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line2")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line3")), 1)
                    ]),
                    e("div", ci, [
                      g(u, {
                        to: "/admin/groups",
                        onClick: s[21] || (s[21] = (i) => h.value = !1),
                        class: "inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, {
                        default: y(() => [
                          x(o(n(t)("admin.subscriptions.guide.step1.link")) + " ", 1),
                          g(k, {
                            name: "arrowRight",
                            size: "xs"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  e("div", mi, [
                    e("h3", pi, [
                      s[35] || (s[35] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "2", -1)),
                      x(" " + o(n(t)("admin.subscriptions.guide.step2.title")), 1)
                    ]),
                    e("ol", gi, [
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line1")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line2")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line3")), 1)
                    ])
                  ]),
                  e("div", bi, [
                    e("h3", yi, [
                      s[36] || (s[36] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "3", -1)),
                      x(" " + o(n(t)("admin.subscriptions.guide.step3.title")), 1)
                    ]),
                    e("div", vi, [
                      e("table", fi, [
                        e("tbody", null, [
                          (r(!0), l(U, null, de(M.value, (i, b) => (r(), l("tr", {
                            key: b,
                            class: "border-b border-gray-100 dark:border-dark-700 last:border-0"
                          }, [
                            e("td", xi, o(i.action), 1),
                            e("td", hi, o(i.desc), 1)
                          ]))), 128))
                        ])
                      ])
                    ])
                  ]),
                  e("div", _i, o(n(t)("admin.subscriptions.guide.tip")), 1),
                  e("div", ki, [
                    e("button", {
                      type: "button",
                      class: "btn btn-primary btn-sm",
                      onClick: s[22] || (s[22] = (i) => h.value = !1)
                    }, o(n(t)("common.close")), 1)
                  ])
                ])
              ], 32)) : c("", !0)
            ]),
            _: 1
          })
        ]))
      ], 64);
    };
  }
}), Ei = /* @__PURE__ */ pt(wi, [["__scopeId", "data-v-7283cc7f"]]);
export {
  Ei as default
};
