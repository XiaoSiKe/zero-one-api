import { d as mt, u as pt, c as S, p as gt, o as r, a as l, b as t, h as p, t as o, g as c, n as O, F as U, f as x, e as n, l as bt, j as m, q as W, s as Jt, m as Xt, H as ot, v as y, k as N, _ as k, r as de, G as $e, x as xe, y as he, w as Ue, a2 as Zt, a1 as es } from "./cnProviderAdminLeaf-BhkmpmLF.js";
import { g as ts, G as ss, P as as, D as is, c as ns, S as _e, _ as rt, a as Fe, b as $ } from "./platforms-B0OerLt9.js";
import { c as lt } from "./format-DjwOelSP.js";
import { T as os } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-XyZYJyVf.js";
import { f as rs, s as ls, _ as je } from "./GroupBadge.vue_vue_type_script_setup_true_lang-WbYiCOh5.js";
const us = { class: "flex min-w-0 flex-1 items-start justify-between gap-3" }, ds = ["title"], cs = {
  key: 0,
  class: "mt-1.5 w-full whitespace-pre-line [overflow-wrap:anywhere] text-left text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3"
}, ms = { class: "flex shrink-0 items-center gap-2 pt-0.5" }, ps = { class: "flex shrink-0 flex-col items-end gap-1" }, gs = { class: "mr-1 line-through opacity-50" }, bs = { class: "font-bold" }, ys = ["title"], vs = {
  key: 0,
  class: "h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "2"
}, fs = /* @__PURE__ */ mt({
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
  setup(g) {
    const { t: e } = pt(), d = g, h = S(() => d.userRateMultiplier !== null && d.userRateMultiplier !== void 0 && d.rateMultiplier !== void 0 && d.userRateMultiplier !== d.rateMultiplier), z = gt(), v = S(() => !!(d.peakRateEnabled && d.peakStart && d.peakEnd)), L = S(() => {
      var G;
      return rs(
        {
          peak_rate_enabled: d.peakRateEnabled,
          peak_start: d.peakStart,
          peak_end: d.peakEnd,
          peak_rate_multiplier: d.peakRateMultiplier
        },
        ls((G = z.cachedPublicSettings) == null ? void 0 : G.server_utc_offset)
      );
    }), Y = S(() => e("common.peakRateTooltip", { window: L.value })), B = S(() => {
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
    return (G, ce) => (r(), l("div", us, [
      t("div", {
        class: "flex min-w-0 flex-1 flex-col items-start",
        title: g.description || void 0
      }, [
        p(je, {
          name: g.name,
          platform: g.platform,
          "subscription-type": g.subscriptionType,
          "show-rate": !1,
          class: "groupOptionItemBadge"
        }, null, 8, ["name", "platform", "subscription-type"]),
        g.description ? (r(), l("span", cs, o(g.description), 1)) : c("", !0)
      ], 8, ds),
      t("div", ms, [
        t("div", ps, [
          g.rateMultiplier !== void 0 ? (r(), l("span", {
            key: 0,
            class: O(["inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold", B.value])
          }, [
            h.value ? (r(), l(U, { key: 0 }, [
              t("span", gs, o(g.rateMultiplier) + "x", 1),
              t("span", bs, o(g.userRateMultiplier) + "x", 1)
            ], 64)) : (r(), l(U, { key: 1 }, [
              x(o(g.rateMultiplier) + "x " + o(n(e)("admin.groups.rateLabel")), 1)
            ], 64))
          ], 2)) : c("", !0),
          v.value ? (r(), l("span", {
            key: 1,
            class: "inline-flex items-center whitespace-nowrap rounded-full bg-zo-alert-50 px-3 py-1 text-xs font-semibold text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-300",
            title: Y.value
          }, o(L.value), 9, ys)) : c("", !0)
        ]),
        g.showCheckmark && g.selected ? (r(), l("svg", vs, [...ce[0] || (ce[0] = [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M5 13l4 4L19 7"
          }, null, -1)
        ])])) : c("", !0)
      ])
    ]));
  }
}), xs = /* @__PURE__ */ bt(fs, [["__scopeId", "data-v-f3e0187e"]]), Ve = 1440 * 60 * 1e3;
function hs(g) {
  if (!g.starts_at || !g.expires_at) return !1;
  const e = new Date(g.starts_at).getTime(), d = new Date(g.expires_at).getTime();
  return !Number.isFinite(e) || !Number.isFinite(d) ? !1 : d <= e + Ve;
}
function ut(g, e = /* @__PURE__ */ new Date()) {
  const d = g instanceof Date ? g.getTime() : new Date(g).getTime(), h = e.getTime();
  if (!Number.isFinite(d) || !Number.isFinite(h)) return null;
  const z = d - h;
  if (z <= 0) return null;
  const v = Math.floor(z / (1e3 * 60)), L = Math.floor(v / 1440), Y = Math.floor(v % 1440 / 60), B = v % 60;
  return { days: L, hours: Y, minutes: B };
}
function _s(g, e = /* @__PURE__ */ new Date()) {
  const d = g instanceof Date ? g.getTime() : new Date(g).getTime(), h = e.getTime();
  if (!Number.isFinite(d) || !Number.isFinite(h)) return null;
  const z = d - h;
  if (z <= 0) return null;
  if (z >= Ve)
    return { unit: "days", days: Math.ceil(z / Ve) };
  const v = Math.ceil(z / (60 * 1e3));
  return {
    unit: "hoursMinutes",
    hours: Math.floor(v / 60),
    minutes: v % 60
  };
}
const ks = { class: "flex flex-wrap items-start justify-between gap-4" }, ws = { class: "flex flex-1 flex-wrap items-center gap-3" }, Cs = {
  class: "relative w-full sm:w-64",
  "data-filter-user-search": ""
}, Ss = ["placeholder"], zs = ["title"], Ms = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ts = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Es = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Ds = ["onClick"], Rs = { class: "font-medium text-gray-900 dark:text-white" }, $s = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Us = { class: "w-full sm:w-40" }, Fs = { class: "w-full sm:w-48" }, js = { class: "w-full sm:w-40" }, Vs = { class: "ml-auto flex flex-wrap items-center justify-end gap-3" }, As = ["disabled", "title"], Ps = ["title"], Is = { class: "hidden md:inline" }, Ns = {
  key: 0,
  class: "absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Os = { class: "p-2" }, Ls = { class: "mb-2 border-b border-gray-200 pb-2 dark:border-dark-700" }, Bs = { class: "px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400" }, Gs = ["onClick"], Qs = ["title"], Hs = { class: "flex items-center gap-2" }, qs = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30" }, Ks = { class: "text-sm font-medium text-primary-700 dark:text-primary-300" }, Ws = {
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
}, ja = ["onClick"], Va = { class: "font-medium text-gray-900 dark:text-white" }, Aa = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Pa = { class: "input-label" }, Ia = {
  key: 1,
  class: "text-gray-400"
}, Na = { class: "input-hint" }, Oa = { class: "input-label" }, La = { class: "input-hint" }, Ba = { class: "flex justify-end gap-3" }, Ga = ["disabled"], Qa = {
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
}, ii = ["disabled"], ni = { class: "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, oi = { class: "mb-4 text-lg font-bold text-gray-900 dark:text-white" }, ri = { class: "mb-5 text-sm text-gray-500 dark:text-gray-400" }, li = { class: "mb-5" }, ui = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, di = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, ci = { class: "ml-8 mt-2" }, mi = { class: "mb-5" }, pi = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, gi = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, bi = { class: "mb-5" }, yi = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, vi = { class: "ml-8 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, fi = { class: "w-full text-sm" }, xi = { class: "whitespace-nowrap bg-gray-50 px-3 py-2 font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-300" }, hi = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, _i = { class: "rounded-lg bg-blue-50 p-3 text-xs text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" }, ki = { class: "mt-4 text-right" }, dt = "subscription-user-column-mode", ct = "subscription-hidden-columns", wi = /* @__PURE__ */ mt({
  __name: "SubscriptionsView",
  setup(g) {
    const { t: e } = pt(), d = gt(), h = m(!1), z = S(() => [
      { action: e("admin.subscriptions.guide.actions.adjust"), desc: e("admin.subscriptions.guide.actions.adjustDesc") },
      { action: e("admin.subscriptions.guide.actions.resetQuota"), desc: e("admin.subscriptions.guide.actions.resetQuotaDesc") },
      { action: e("admin.subscriptions.guide.actions.revoke"), desc: e("admin.subscriptions.guide.actions.revokeDesc") }
    ]), v = m("email"), L = () => {
      try {
        const a = localStorage.getItem(dt);
        (a === "email" || a === "username") && (v.value = a);
      } catch (a) {
        console.error("Failed to load user column mode:", a);
      }
    }, Y = () => {
      try {
        localStorage.setItem(dt, v.value);
      } catch (a) {
        console.error("Failed to save user column mode:", a);
      }
    }, B = (a) => {
      v.value = a, Y();
    }, G = S(() => [
      {
        key: "user",
        label: v.value === "email" ? e("admin.subscriptions.columns.user") : e("admin.users.columns.username"),
        sortable: !1
      },
      { key: "group", label: e("admin.subscriptions.columns.group"), sortable: !1 },
      { key: "usage", label: e("admin.subscriptions.columns.usage"), sortable: !1 },
      { key: "expires_at", label: e("admin.subscriptions.columns.expires"), sortable: !0 },
      { key: "status", label: e("admin.subscriptions.columns.status"), sortable: !0 },
      { key: "actions", label: e("admin.subscriptions.columns.actions"), sortable: !1 }
    ]), ce = S(
      () => G.value.filter((a) => a.key !== "user" && a.key !== "actions")
    ), E = W(/* @__PURE__ */ new Set()), Ae = [], yt = () => {
      try {
        const a = localStorage.getItem(ct);
        a ? JSON.parse(a).forEach((u) => E.add(u)) : Ae.forEach((s) => E.add(s));
      } catch (a) {
        console.error("Failed to load saved columns:", a), Ae.forEach((s) => E.add(s));
      }
    }, vt = () => {
      try {
        localStorage.setItem(ct, JSON.stringify([...E]));
      } catch (a) {
        console.error("Failed to save columns:", a);
      }
    }, ft = (a) => {
      E.has(a) ? E.delete(a) : E.add(a), vt();
    }, xt = (a) => !E.has(a), ht = S(
      () => G.value.filter(
        (a) => a.key === "user" || a.key === "actions" || !E.has(a.key)
      )
    ), me = m(!1), ke = m(null), _t = S(() => [
      { value: "", label: e("admin.subscriptions.allStatus") },
      { value: "active", label: e("admin.subscriptions.status.active") },
      { value: "expired", label: e("admin.subscriptions.status.expired") },
      { value: "revoked", label: e("admin.subscriptions.status.revoked") }
    ]), Pe = m([]), we = m([]), J = m(!1);
    let Q = null;
    const V = m(""), A = m([]), Ce = m(!1), X = m(!1), H = m(null);
    let Z = null;
    const F = m(""), j = m([]), Se = m(!1), ee = m(!1), P = m(null);
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
      page_size: ts(),
      total: 0,
      pages: 0
    }), ge = m(!1), ze = m(!1), be = m(!1), ye = m(!1), ve = m(!1), D = m(!1), q = m(null), fe = m(!1), C = m(null), se = m(null), ae = m(null), f = W({
      user_id: null,
      group_id: null,
      validity_days: 30
    }), ie = W({
      days: 30
    }), kt = S(() => [
      { value: "", label: e("admin.subscriptions.allGroups") },
      ...we.value.map((a) => ({ value: a.id.toString(), label: a.name }))
    ]), wt = S(() => [
      { value: "", label: e("admin.subscriptions.allPlatforms") },
      ...ss
    ]), Ct = S(
      () => we.value.filter((a) => a.subscription_type === "subscription" && a.status === "active").map((a) => ({
        value: a.id,
        label: a.name,
        description: a.description,
        platform: a.platform,
        subscriptionType: a.subscription_type,
        rate: a.rate_multiplier
      }))
    ), K = () => {
      w.page = 1, M();
    }, M = async () => {
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
        Pe.value = u.items, w.total = u.total, w.pages = u.pages;
      } catch (u) {
        if (s.aborted || (u == null ? void 0 : u.name) === "AbortError" || (u == null ? void 0 : u.code) === "ERR_CANCELED")
          return;
        d.showError(e("admin.subscriptions.failedToLoad")), console.error("Error loading subscriptions:", u);
      } finally {
        Q === a && (J.value = !1, Q = null);
      }
    }, St = async () => {
      try {
        we.value = await $.groups.getAll();
      } catch (a) {
        console.error("Error loading groups:", a);
      }
    }, zt = () => {
      Z && clearTimeout(Z), Z = setTimeout(Mt, 300);
    }, Mt = async () => {
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
    }, Tt = (a) => {
      H.value = a, V.value = a.email, X.value = !1, _.user_id = a.id, K();
    }, Et = () => {
      H.value = null, V.value = "", A.value = [], X.value = !1, _.user_id = null, K();
    }, Dt = () => {
      te && clearTimeout(te), te = setTimeout(Rt, 300);
    }, Rt = async () => {
      const a = F.value.trim();
      if (P.value && a !== P.value.email && (P.value = null, f.user_id = null), !a) {
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
    }, $t = (a) => {
      P.value = a, F.value = a.email, ee.value = !1, f.user_id = a.id;
    }, Ut = () => {
      P.value = null, F.value = "", j.value = [], f.user_id = null;
    }, Ft = (a) => {
      w.page = a, M();
    }, jt = (a) => {
      w.page_size = a, w.page = 1, M();
    }, Vt = (a, s) => {
      pe.sort_by = a, pe.sort_order = s, w.page = 1, M();
    }, Me = () => {
      ge.value = !1, f.user_id = null, f.group_id = null, f.validity_days = 30, P.value = null, F.value = "", j.value = [], ee.value = !1;
    }, At = async () => {
      var a, s;
      if (!f.user_id) {
        d.showError(e("admin.subscriptions.pleaseSelectUser"));
        return;
      }
      if (!f.group_id) {
        d.showError(e("admin.subscriptions.pleaseSelectGroup"));
        return;
      }
      if (!f.validity_days || f.validity_days < 1) {
        d.showError(e("admin.subscriptions.validityDaysRequired"));
        return;
      }
      D.value = !0;
      try {
        await $.subscriptions.assign({
          user_id: f.user_id,
          group_id: f.group_id,
          validity_days: f.validity_days
        }), d.showSuccess(e("admin.subscriptions.subscriptionAssigned")), Me(), M();
      } catch (u) {
        d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || e("admin.subscriptions.failedToAssign")), console.error("Error assigning subscription:", u);
      } finally {
        D.value = !1;
      }
    }, Pt = (a) => {
      C.value = a, ie.days = 30, ze.value = !0;
    }, Te = () => {
      ze.value = !1, C.value = null;
    }, It = async () => {
      var a, s;
      if (C.value) {
        if (C.value.expires_at) {
          const u = new Date(C.value.expires_at);
          if (new Date(u.getTime() + ie.days * 24 * 60 * 60 * 1e3) <= /* @__PURE__ */ new Date()) {
            d.showError(e("admin.subscriptions.adjustWouldExpire"));
            return;
          }
        }
        D.value = !0;
        try {
          await $.subscriptions.extend(C.value.id, {
            days: ie.days
          }), d.showSuccess(e("admin.subscriptions.subscriptionAdjusted")), Te(), M();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || e("admin.subscriptions.failedToAdjust")), console.error("Error adjusting subscription:", u);
        } finally {
          D.value = !1;
        }
      }
    }, Nt = (a) => {
      se.value = a, be.value = !0;
    }, Ot = async () => {
      var a, s;
      if (se.value)
        try {
          await $.subscriptions.revoke(se.value.id), d.showSuccess(e("admin.subscriptions.subscriptionRevoked")), be.value = !1, se.value = null, M();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || e("admin.subscriptions.failedToRevoke")), console.error("Error revoking subscription:", u);
        }
    }, Lt = (a) => {
      ae.value = a, ye.value = !0;
    }, Bt = async () => {
      var a, s;
      if (ae.value)
        try {
          await $.subscriptions.restore(ae.value.id), d.showSuccess(e("admin.subscriptions.subscriptionRestored")), ye.value = !1, ae.value = null, M();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || e("admin.subscriptions.failedToRestore")), console.error("Error restoring subscription:", u);
        }
    }, Gt = (a) => {
      q.value = a, ve.value = !0;
    }, Qt = async () => {
      var a, s;
      if (q.value && !fe.value) {
        fe.value = !0;
        try {
          await $.subscriptions.resetQuota(q.value.id, { daily: !0, weekly: !0, monthly: !0 }), d.showSuccess(e("admin.subscriptions.quotaResetSuccess")), ve.value = !1, q.value = null, await M();
        } catch (u) {
          d.showError(((s = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || e("admin.subscriptions.failedToResetQuota")), console.error("Error resetting quota:", u);
        } finally {
          fe.value = !1;
        }
      }
    }, Ie = (a) => {
      const s = /* @__PURE__ */ new Date(), T = new Date(a).getTime() - s.getTime();
      return T < 0 ? null : Math.ceil(T / (1e3 * 60 * 60 * 24));
    }, Ht = (a) => {
      const s = _s(a);
      return s ? s.unit === "days" ? e("admin.subscriptions.daysRemaining", { days: s.days }) : s.hours ? e("admin.subscriptions.hoursMinutesRemaining", {
        hours: s.hours,
        minutes: s.minutes
      }) : e("admin.subscriptions.minutesRemaining", { minutes: s.minutes }) : null;
    }, qt = (a) => {
      const s = Ie(a);
      return s !== null && s <= 7;
    }, Ee = (a, s) => !s || s === 0 ? "0%" : `${Math.min((a ?? 0) / s * 100, 100)}%`, De = (a, s) => {
      if (!s || s === 0) return "bg-gray-400";
      const T = (a ?? 0) / s * 100;
      return T >= 90 ? "bg-red-500" : T >= 70 ? "bg-zo-alert-500" : "bg-zo-signal-500";
    }, Kt = (a) => a.days > 0 ? e("admin.subscriptions.resetInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? e("admin.subscriptions.resetInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : e("admin.subscriptions.resetInMinutes", { minutes: a.minutes }), Wt = (a) => a.days > 0 ? e("admin.subscriptions.quotaEndsInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? e("admin.subscriptions.quotaEndsInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : e("admin.subscriptions.quotaEndsInMinutes", { minutes: a.minutes }), Yt = (a) => {
      if (hs(a) && a.expires_at) {
        const s = ut(a.expires_at);
        return s ? Wt(s) : e("admin.subscriptions.windowNotActive");
      }
      return Re(a.daily_window_start, "daily");
    }, Re = (a, s) => {
      if (!a) return e("admin.subscriptions.windowNotActive");
      const u = new Date(a), T = /* @__PURE__ */ new Date();
      let I;
      switch (s) {
        case "daily":
          I = new Date(u.getTime() + 1440 * 60 * 1e3);
          break;
        case "weekly":
          I = new Date(u.getTime() + 10080 * 60 * 1e3);
          break;
        case "monthly":
          I = new Date(u.getTime() + 720 * 60 * 60 * 1e3);
          break;
      }
      const ne = ut(I, T);
      return ne ? Kt(ne) : e("admin.subscriptions.windowNotActive");
    }, Ne = (a) => {
      const s = a.target;
      s.closest("[data-assign-user-search]") || (ee.value = !1), s.closest("[data-filter-user-search]") || (X.value = !1), ke.value && !ke.value.contains(s) && (me.value = !1);
    };
    return Jt(() => {
      L(), yt(), M(), St(), document.addEventListener("click", Ne);
    }), Xt(() => {
      document.removeEventListener("click", Ne), Z && clearTimeout(Z), te && clearTimeout(te);
    }), (a, s) => {
      var I, ne, Oe, Le, Be, Ge;
      const u = ot("RouterLink"), T = ot("router-link");
      return r(), l(U, null, [
        p(os, null, {
          filters: y(() => [
            t("div", ks, [
              t("div", ws, [
                t("div", Cs, [
                  p(k, {
                    name: "search",
                    size: "md",
                    class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  }),
                  xe(t("input", {
                    "onUpdate:modelValue": s[0] || (s[0] = (i) => V.value = i),
                    type: "text",
                    placeholder: n(e)("admin.users.searchUsers"),
                    class: "input pl-10 pr-8",
                    onInput: zt,
                    onFocus: s[1] || (s[1] = (i) => X.value = !0)
                  }, null, 40, Ss), [
                    [he, V.value]
                  ]),
                  H.value ? (r(), l("button", {
                    key: 0,
                    onClick: Et,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                    title: n(e)("common.clear")
                  }, [
                    p(k, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ], 8, zs)) : c("", !0),
                  X.value && (A.value.length > 0 || V.value) ? (r(), l("div", Ms, [
                    Ce.value ? (r(), l("div", Ts, o(n(e)("common.loading")), 1)) : A.value.length === 0 && V.value ? (r(), l("div", Es, o(n(e)("common.noOptionsFound")), 1)) : c("", !0),
                    (r(!0), l(U, null, de(A.value, (i) => (r(), l("button", {
                      key: i.id,
                      type: "button",
                      onClick: (b) => Tt(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      t("span", Rs, o(i.email), 1),
                      t("span", $s, "#" + o(i.id), 1)
                    ], 8, Ds))), 128))
                  ])) : c("", !0)
                ]),
                t("div", Us, [
                  p(_e, {
                    modelValue: _.status,
                    "onUpdate:modelValue": s[2] || (s[2] = (i) => _.status = i),
                    options: _t.value,
                    placeholder: n(e)("admin.subscriptions.allStatus"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                t("div", Fs, [
                  p(_e, {
                    modelValue: _.group_id,
                    "onUpdate:modelValue": s[3] || (s[3] = (i) => _.group_id = i),
                    options: kt.value,
                    placeholder: n(e)("admin.subscriptions.allGroups"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                t("div", js, [
                  p(_e, {
                    "data-testid": "subscription-platform-filter",
                    modelValue: _.platform,
                    "onUpdate:modelValue": s[4] || (s[4] = (i) => _.platform = i),
                    options: wt.value,
                    placeholder: n(e)("admin.subscriptions.allPlatforms"),
                    onChange: K
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ])
              ]),
              t("div", Vs, [
                t("button", {
                  onClick: M,
                  disabled: J.value,
                  class: "btn btn-secondary",
                  title: n(e)("common.refresh")
                }, [
                  p(k, {
                    name: "refresh",
                    size: "md",
                    class: O(J.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, As),
                t("div", {
                  class: "relative",
                  ref_key: "columnDropdownRef",
                  ref: ke
                }, [
                  t("button", {
                    onClick: s[5] || (s[5] = (i) => me.value = !me.value),
                    class: "btn btn-secondary px-2 md:px-3",
                    title: n(e)("admin.users.columnSettings")
                  }, [
                    s[24] || (s[24] = t("svg", {
                      class: "h-4 w-4 md:mr-1.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5"
                    }, [
                      t("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                      })
                    ], -1)),
                    t("span", Is, o(n(e)("admin.users.columnSettings")), 1)
                  ], 8, Ps),
                  me.value ? (r(), l("div", Ns, [
                    t("div", Os, [
                      t("div", Ls, [
                        t("div", Bs, o(n(e)("admin.subscriptions.columns.user")), 1),
                        t("button", {
                          onClick: s[6] || (s[6] = (i) => B("email")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          t("span", null, o(n(e)("admin.users.columns.email")), 1),
                          v.value === "email" ? (r(), N(k, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : c("", !0)
                        ]),
                        t("button", {
                          onClick: s[7] || (s[7] = (i) => B("username")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          t("span", null, o(n(e)("admin.users.columns.username")), 1),
                          v.value === "username" ? (r(), N(k, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : c("", !0)
                        ])
                      ]),
                      (r(!0), l(U, null, de(ce.value, (i) => (r(), l("button", {
                        key: i.key,
                        onClick: (b) => ft(i.key),
                        class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                      }, [
                        t("span", null, o(i.label), 1),
                        xt(i.key) ? (r(), N(k, {
                          key: 0,
                          name: "check",
                          size: "sm",
                          class: "text-primary-500"
                        })) : c("", !0)
                      ], 8, Gs))), 128))
                    ])
                  ])) : c("", !0)
                ], 512),
                t("button", {
                  onClick: s[8] || (s[8] = (i) => h.value = !0),
                  class: "btn btn-secondary",
                  title: n(e)("admin.subscriptions.guide.showGuide")
                }, [
                  p(k, {
                    name: "questionCircle",
                    size: "md"
                  })
                ], 8, Qs),
                t("button", {
                  onClick: s[9] || (s[9] = (i) => ge.value = !0),
                  class: "btn btn-primary"
                }, [
                  p(k, {
                    name: "plus",
                    size: "md",
                    class: "mr-2"
                  }),
                  x(" " + o(n(e)("admin.subscriptions.assignSubscription")), 1)
                ])
              ])
            ])
          ]),
          table: y(() => [
            p(is, {
              columns: ht.value,
              data: Pe.value,
              loading: J.value,
              "server-side-sort": !0,
              "default-sort-key": "created_at",
              "default-sort-order": "desc",
              onSort: Vt
            }, {
              "cell-user": y(({ row: i }) => {
                var b, R, oe, re;
                return [
                  t("div", Hs, [
                    t("div", qs, [
                      t("span", Ks, o(v.value === "email" ? ((R = (b = i.user) == null ? void 0 : b.email) == null ? void 0 : R.charAt(0).toUpperCase()) || "?" : ((re = (oe = i.user) == null ? void 0 : oe.username) == null ? void 0 : re.charAt(0).toUpperCase()) || "?"), 1)
                    ]),
                    p(u, {
                      to: { path: "/admin/usage", query: { user_id: i.user_id } },
                      class: "rounded font-medium text-gray-900 hover:text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-white dark:hover:text-primary-400 dark:focus-visible:ring-offset-dark-800"
                    }, {
                      default: y(() => {
                        var le, ue;
                        return [
                          x(o(v.value === "email" ? ((le = i.user) == null ? void 0 : le.email) || n(e)("admin.redeem.userPrefix", { id: i.user_id }) : ((ue = i.user) == null ? void 0 : ue.username) || n(e)("admin.redeem.userPrefix", { id: i.user_id })), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ];
              }),
              "cell-group": y(({ row: i }) => [
                i.group ? (r(), N(je, {
                  key: 0,
                  name: i.group.name,
                  platform: i.group.platform,
                  "subscription-type": i.group.subscription_type,
                  "rate-multiplier": i.group.rate_multiplier,
                  "show-rate": !1
                }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), l("span", Ws, "-"))
              ]),
              "cell-usage": y(({ row: i }) => {
                var b, R, oe, re, le, ue, Qe, He, qe, Ke, We, Ye, Je, Xe, Ze, et, tt, st, at, it, nt;
                return [
                  t("div", Ys, [
                    (b = i.group) != null && b.daily_limit_usd ? (r(), l("div", Js, [
                      t("div", Xs, [
                        t("span", Zs, o(n(e)("admin.subscriptions.daily")), 1),
                        t("div", ea, [
                          t("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.daily_usage_usd, (R = i.group) == null ? void 0 : R.daily_limit_usd)]),
                            style: $e({
                              width: Ee(i.daily_usage_usd, (oe = i.group) == null ? void 0 : oe.daily_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        t("span", ta, [
                          x(" $" + o(((re = i.daily_usage_usd) == null ? void 0 : re.toFixed(2)) || "0.00") + " ", 1),
                          s[25] || (s[25] = t("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((ue = (le = i.group) == null ? void 0 : le.daily_limit_usd) == null ? void 0 : ue.toFixed(2)), 1)
                        ])
                      ]),
                      i.daily_window_start ? (r(), l("div", sa, [
                        s[26] || (s[26] = t("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          t("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        t("span", null, o(Yt(i)), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    (Qe = i.group) != null && Qe.weekly_limit_usd ? (r(), l("div", aa, [
                      t("div", ia, [
                        t("span", na, o(n(e)("admin.subscriptions.weekly")), 1),
                        t("div", oa, [
                          t("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.weekly_usage_usd, (He = i.group) == null ? void 0 : He.weekly_limit_usd)]),
                            style: $e({
                              width: Ee(i.weekly_usage_usd, (qe = i.group) == null ? void 0 : qe.weekly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        t("span", ra, [
                          x(" $" + o(((Ke = i.weekly_usage_usd) == null ? void 0 : Ke.toFixed(2)) || "0.00") + " ", 1),
                          s[27] || (s[27] = t("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((Ye = (We = i.group) == null ? void 0 : We.weekly_limit_usd) == null ? void 0 : Ye.toFixed(2)), 1)
                        ])
                      ]),
                      i.weekly_window_start ? (r(), l("div", la, [
                        s[28] || (s[28] = t("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          t("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        t("span", null, o(Re(i.weekly_window_start, "weekly")), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    (Je = i.group) != null && Je.monthly_limit_usd ? (r(), l("div", ua, [
                      t("div", da, [
                        t("span", ca, o(n(e)("admin.subscriptions.monthly")), 1),
                        t("div", ma, [
                          t("div", {
                            class: O(["h-1.5 rounded-full transition-all", De(i.monthly_usage_usd, (Xe = i.group) == null ? void 0 : Xe.monthly_limit_usd)]),
                            style: $e({
                              width: Ee(i.monthly_usage_usd, (Ze = i.group) == null ? void 0 : Ze.monthly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        t("span", pa, [
                          x(" $" + o(((et = i.monthly_usage_usd) == null ? void 0 : et.toFixed(2)) || "0.00") + " ", 1),
                          s[29] || (s[29] = t("span", { class: "text-gray-400" }, "/", -1)),
                          x(" $" + o((st = (tt = i.group) == null ? void 0 : tt.monthly_limit_usd) == null ? void 0 : st.toFixed(2)), 1)
                        ])
                      ]),
                      i.monthly_window_start ? (r(), l("div", ga, [
                        s[30] || (s[30] = t("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          t("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        t("span", null, o(Re(i.monthly_window_start, "monthly")), 1)
                      ])) : c("", !0)
                    ])) : c("", !0),
                    !((at = i.group) != null && at.daily_limit_usd) && !((it = i.group) != null && it.weekly_limit_usd) && !((nt = i.group) != null && nt.monthly_limit_usd) ? (r(), l("div", ba, [
                      s[31] || (s[31] = t("span", { class: "text-lg text-zo-signal-600 dark:text-zo-signal-400" }, "∞", -1)),
                      t("span", ya, o(n(e)("admin.subscriptions.unlimited")), 1)
                    ])) : c("", !0)
                  ])
                ];
              }),
              "cell-expires_at": y(({ value: i }) => [
                i ? (r(), l("div", va, [
                  t("span", {
                    class: O([
                      "text-sm",
                      qt(i) ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-gray-700 dark:text-gray-300"
                    ])
                  }, o(n(lt)(i)), 3),
                  (r(!0), l(U, null, de([Ht(i)], (b) => (r(), l(U, {
                    key: b ?? "expired"
                  }, [
                    b ? (r(), l("div", fa, o(b), 1)) : c("", !0)
                  ], 64))), 128))
                ])) : (r(), l("span", xa, o(n(e)("admin.subscriptions.noExpiration")), 1))
              ]),
              "cell-status": y(({ value: i }) => [
                t("span", {
                  class: O([
                    "badge",
                    i === "active" ? "badge-success" : i === "expired" ? "badge-warning" : "badge-danger"
                  ])
                }, o(n(e)(`admin.subscriptions.status.${i}`)), 3)
              ]),
              "cell-actions": y(({ row: i }) => {
                var b;
                return [
                  t("div", ha, [
                    i.status === "active" || i.status === "expired" ? (r(), l("button", {
                      key: 0,
                      onClick: (R) => Pt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    }, [
                      p(k, {
                        name: "calendar",
                        size: "sm"
                      }),
                      t("span", ka, o(n(e)("admin.subscriptions.adjust")), 1)
                    ], 8, _a)) : c("", !0),
                    i.status === "active" ? (r(), l("button", {
                      key: 1,
                      onClick: (R) => Gt(i),
                      disabled: fe.value && ((b = q.value) == null ? void 0 : b.id) === i.id,
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-alert-50 hover:text-zo-alert-600 dark:hover:bg-zo-alert-900/20 dark:hover:text-zo-alert-400 disabled:cursor-not-allowed disabled:opacity-50"
                    }, [
                      p(k, {
                        name: "refresh",
                        size: "sm"
                      }),
                      t("span", Ca, o(n(e)("admin.subscriptions.resetQuota")), 1)
                    ], 8, wa)) : c("", !0),
                    i.status === "active" ? (r(), l("button", {
                      key: 2,
                      onClick: (R) => Nt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    }, [
                      p(k, {
                        name: "ban",
                        size: "sm"
                      }),
                      t("span", za, o(n(e)("admin.subscriptions.revoke")), 1)
                    ], 8, Sa)) : c("", !0),
                    i.status === "revoked" ? (r(), l("button", {
                      key: 3,
                      onClick: (R) => Lt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-signal-50 hover:text-zo-signal-600 dark:hover:bg-zo-signal-900/20 dark:hover:text-zo-signal-400"
                    }, [
                      p(k, {
                        name: "refresh",
                        size: "sm"
                      }),
                      t("span", Ta, o(n(e)("admin.subscriptions.restore")), 1)
                    ], 8, Ma)) : c("", !0)
                  ])
                ];
              }),
              empty: y(() => [
                p(ns, {
                  title: n(e)("admin.subscriptions.noSubscriptionsYet"),
                  description: n(e)("admin.subscriptions.assignFirstSubscription"),
                  "action-text": n(e)("admin.subscriptions.assignSubscription"),
                  onAction: s[10] || (s[10] = (i) => ge.value = !0)
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: y(() => [
            w.total > 0 ? (r(), N(as, {
              key: 0,
              page: w.page,
              total: w.total,
              "page-size": w.page_size,
              "onUpdate:page": Ft,
              "onUpdate:pageSize": jt
            }, null, 8, ["page", "total", "page-size"])) : c("", !0)
          ]),
          _: 1
        }),
        p(rt, {
          show: ge.value,
          title: n(e)("admin.subscriptions.assignSubscription"),
          width: "normal",
          onClose: Me
        }, {
          footer: y(() => [
            t("div", Ba, [
              t("button", {
                onClick: Me,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(e)("common.cancel")), 1),
              t("button", {
                type: "submit",
                form: "assign-subscription-form",
                disabled: D.value,
                class: "btn btn-primary"
              }, [
                D.value ? (r(), l("svg", Qa, [...s[32] || (s[32] = [
                  t("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  t("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ])])) : c("", !0),
                x(" " + o(D.value ? n(e)("admin.subscriptions.assigning") : n(e)("admin.subscriptions.assign")), 1)
              ], 8, Ga)
            ])
          ]),
          default: y(() => [
            t("form", {
              id: "assign-subscription-form",
              onSubmit: Ue(At, ["prevent"]),
              class: "space-y-5"
            }, [
              t("div", null, [
                t("label", Ea, o(n(e)("admin.subscriptions.form.user")), 1),
                t("div", Da, [
                  xe(t("input", {
                    "onUpdate:modelValue": s[11] || (s[11] = (i) => F.value = i),
                    type: "text",
                    class: "input pr-8",
                    placeholder: n(e)("admin.usage.searchUserPlaceholder"),
                    onInput: Dt,
                    onFocus: s[12] || (s[12] = (i) => ee.value = !0)
                  }, null, 40, Ra), [
                    [he, F.value]
                  ]),
                  P.value ? (r(), l("button", {
                    key: 0,
                    onClick: Ut,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }, [
                    p(k, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ])) : c("", !0),
                  ee.value && (j.value.length > 0 || F.value) ? (r(), l("div", $a, [
                    Se.value ? (r(), l("div", Ua, o(n(e)("common.loading")), 1)) : j.value.length === 0 && F.value ? (r(), l("div", Fa, o(n(e)("common.noOptionsFound")), 1)) : c("", !0),
                    (r(!0), l(U, null, de(j.value, (i) => (r(), l("button", {
                      key: i.id,
                      type: "button",
                      onClick: (b) => $t(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      t("span", Va, o(i.email), 1),
                      t("span", Aa, "#" + o(i.id), 1)
                    ], 8, ja))), 128))
                  ])) : c("", !0)
                ])
              ]),
              t("div", null, [
                t("label", Pa, o(n(e)("admin.subscriptions.form.group")), 1),
                p(_e, {
                  modelValue: f.group_id,
                  "onUpdate:modelValue": s[13] || (s[13] = (i) => f.group_id = i),
                  options: Ct.value,
                  placeholder: n(e)("admin.subscriptions.selectGroup")
                }, {
                  selected: y(({ option: i }) => [
                    i ? (r(), N(je, {
                      key: 0,
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), l("span", Ia, o(n(e)("admin.subscriptions.selectGroup")), 1))
                  ]),
                  option: y(({ option: i, selected: b }) => [
                    p(xs, {
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
                t("p", Na, o(n(e)("admin.subscriptions.groupHint")), 1)
              ]),
              t("div", null, [
                t("label", Oa, o(n(e)("admin.subscriptions.form.validityDays")), 1),
                xe(t("input", {
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
                t("p", La, o(n(e)("admin.subscriptions.validityHint")), 1)
              ])
            ], 32)
          ]),
          _: 1
        }, 8, ["show", "title"]),
        p(rt, {
          show: ze.value,
          title: n(e)("admin.subscriptions.adjustSubscription"),
          width: "narrow",
          onClose: Te
        }, {
          footer: y(() => [
            C.value ? (r(), l("div", ai, [
              t("button", {
                onClick: Te,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(e)("common.cancel")), 1),
              t("button", {
                type: "submit",
                form: "extend-subscription-form",
                disabled: D.value,
                class: "btn btn-primary"
              }, o(D.value ? n(e)("admin.subscriptions.adjusting") : n(e)("admin.subscriptions.adjust")), 9, ii)
            ])) : c("", !0)
          ]),
          default: y(() => {
            var i;
            return [
              C.value ? (r(), l("form", {
                key: 0,
                id: "extend-subscription-form",
                onSubmit: Ue(It, ["prevent"]),
                class: "space-y-5"
              }, [
                t("div", Ha, [
                  t("p", qa, [
                    x(o(n(e)("admin.subscriptions.adjustingFor")) + " ", 1),
                    t("span", Ka, o((i = C.value.user) == null ? void 0 : i.email), 1)
                  ]),
                  t("p", Wa, [
                    x(o(n(e)("admin.subscriptions.currentExpiration")) + ": ", 1),
                    t("span", Ya, o(C.value.expires_at ? n(lt)(C.value.expires_at) : n(e)("admin.subscriptions.noExpiration")), 1)
                  ]),
                  C.value.expires_at ? (r(), l("p", Ja, [
                    x(o(n(e)("admin.subscriptions.remainingDays")) + ": ", 1),
                    t("span", Xa, o(Ie(C.value.expires_at) ?? 0), 1)
                  ])) : c("", !0)
                ]),
                t("div", null, [
                  t("label", Za, o(n(e)("admin.subscriptions.form.adjustDays")), 1),
                  t("div", ei, [
                    xe(t("input", {
                      "onUpdate:modelValue": s[15] || (s[15] = (b) => ie.days = b),
                      type: "number",
                      required: "",
                      class: "input text-center",
                      placeholder: n(e)("admin.subscriptions.adjustDaysPlaceholder")
                    }, null, 8, ti), [
                      [
                        he,
                        ie.days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  t("p", si, o(n(e)("admin.subscriptions.adjustHint")), 1)
                ])
              ], 32)) : c("", !0)
            ];
          }),
          _: 1
        }, 8, ["show", "title"]),
        p(Fe, {
          show: be.value,
          title: n(e)("admin.subscriptions.revokeSubscription"),
          message: n(e)("admin.subscriptions.revokeConfirm", { user: (ne = (I = se.value) == null ? void 0 : I.user) == null ? void 0 : ne.email }),
          "confirm-text": n(e)("admin.subscriptions.revoke"),
          "cancel-text": n(e)("common.cancel"),
          danger: !0,
          onConfirm: Ot,
          onCancel: s[16] || (s[16] = (i) => be.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        p(Fe, {
          show: ye.value,
          title: n(e)("admin.subscriptions.restoreSubscription"),
          message: n(e)("admin.subscriptions.restoreConfirm", { user: (Le = (Oe = ae.value) == null ? void 0 : Oe.user) == null ? void 0 : Le.email }),
          "confirm-text": n(e)("admin.subscriptions.restore"),
          "cancel-text": n(e)("common.cancel"),
          onConfirm: Bt,
          onCancel: s[17] || (s[17] = (i) => ye.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        p(Fe, {
          show: ve.value,
          title: n(e)("admin.subscriptions.resetQuotaTitle"),
          message: n(e)("admin.subscriptions.resetQuotaConfirm", { user: (Ge = (Be = q.value) == null ? void 0 : Be.user) == null ? void 0 : Ge.email }),
          "confirm-text": n(e)("admin.subscriptions.resetQuota"),
          "cancel-text": n(e)("common.cancel"),
          onConfirm: Qt,
          onCancel: s[18] || (s[18] = (i) => ve.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        (r(), N(es, { to: "body" }, [
          p(Zt, { name: "modal" }, {
            default: y(() => [
              h.value ? (r(), l("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4",
                onMousedown: s[23] || (s[23] = Ue((i) => h.value = !1, ["self"]))
              }, [
                t("div", {
                  class: "fixed inset-0 bg-black/50",
                  onClick: s[19] || (s[19] = (i) => h.value = !1)
                }),
                t("div", ni, [
                  t("button", {
                    type: "button",
                    class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                    onClick: s[20] || (s[20] = (i) => h.value = !1)
                  }, [...s[33] || (s[33] = [
                    t("svg", {
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      t("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])]),
                  t("h2", oi, o(n(e)("admin.subscriptions.guide.title")), 1),
                  t("p", ri, o(n(e)("admin.subscriptions.guide.subtitle")), 1),
                  t("div", li, [
                    t("h3", ui, [
                      s[34] || (s[34] = t("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "1", -1)),
                      x(" " + o(n(e)("admin.subscriptions.guide.step1.title")), 1)
                    ]),
                    t("ol", di, [
                      t("li", null, o(n(e)("admin.subscriptions.guide.step1.line1")), 1),
                      t("li", null, o(n(e)("admin.subscriptions.guide.step1.line2")), 1),
                      t("li", null, o(n(e)("admin.subscriptions.guide.step1.line3")), 1)
                    ]),
                    t("div", ci, [
                      p(T, {
                        to: "/admin/groups",
                        onClick: s[21] || (s[21] = (i) => h.value = !1),
                        class: "inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, {
                        default: y(() => [
                          x(o(n(e)("admin.subscriptions.guide.step1.link")) + " ", 1),
                          p(k, {
                            name: "arrowRight",
                            size: "xs"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  t("div", mi, [
                    t("h3", pi, [
                      s[35] || (s[35] = t("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "2", -1)),
                      x(" " + o(n(e)("admin.subscriptions.guide.step2.title")), 1)
                    ]),
                    t("ol", gi, [
                      t("li", null, o(n(e)("admin.subscriptions.guide.step2.line1")), 1),
                      t("li", null, o(n(e)("admin.subscriptions.guide.step2.line2")), 1),
                      t("li", null, o(n(e)("admin.subscriptions.guide.step2.line3")), 1)
                    ])
                  ]),
                  t("div", bi, [
                    t("h3", yi, [
                      s[36] || (s[36] = t("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "3", -1)),
                      x(" " + o(n(e)("admin.subscriptions.guide.step3.title")), 1)
                    ]),
                    t("div", vi, [
                      t("table", fi, [
                        t("tbody", null, [
                          (r(!0), l(U, null, de(z.value, (i, b) => (r(), l("tr", {
                            key: b,
                            class: "border-b border-gray-100 dark:border-dark-700 last:border-0"
                          }, [
                            t("td", xi, o(i.action), 1),
                            t("td", hi, o(i.desc), 1)
                          ]))), 128))
                        ])
                      ])
                    ])
                  ]),
                  t("div", _i, o(n(e)("admin.subscriptions.guide.tip")), 1),
                  t("div", ki, [
                    t("button", {
                      type: "button",
                      class: "btn btn-primary btn-sm",
                      onClick: s[22] || (s[22] = (i) => h.value = !1)
                    }, o(n(e)("common.close")), 1)
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
}), Ei = /* @__PURE__ */ bt(wi, [["__scopeId", "data-v-ed5442be"]]);
export {
  Ei as default
};
