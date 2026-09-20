import { d as st, u as at, r as b, b as ue, Q as zt, p as z, w as hs, m as l, A as se, i as n, v as w, g as e, z as Oe, h as o, f as r, F as U, j as J, k as C, l as m, x as de, y as Me, I as At, s as ae, e as It, q as y, B as Ft, c as _s, o as ks, $ as Tt, _ as F, D as Je, T as xs, M as ws } from "./cnProviderAdminLeaf-DOTfdkE4.js";
import { b as W, g as Cs, G as Ss, P as $s, D as zs, _ as Ye } from "./platforms-CNf91vOK.js";
import { u as Ts } from "./useTableSelection-a04DggEP.js";
import { _ as Xe, S as Ne } from "./BaseDialog.vue_vue_type_script_setup_true_lang-B6Pfcffn.js";
import { d as Mt } from "./format-D_aVlXs8.js";
import { T as Ms } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-B2Zys8YY.js";
import { _ as Ds } from "./EmptyState.vue_vue_type_script_setup_true_lang-BTP-DF39.js";
import { f as Es, s as Rs, _ as Ze } from "./GroupBadge.vue_vue_type_script_setup_true_lang-DGHumabJ.js";
const et = /* @__PURE__ */ new Map();
function Us() {
  var d;
  try {
    const t = JSON.parse(((d = globalThis.localStorage) == null ? void 0 : d.getItem("auth_user")) ?? "null"), u = t == null ? void 0 : t.id;
    return typeof u == "number" && Number.isSafeInteger(u) && u > 0 ? u : null;
  } catch {
    return null;
  }
}
function As(d) {
  var t;
  try {
    return ((t = globalThis.sessionStorage) == null ? void 0 : t.getItem(d)) ?? null;
  } catch {
    return null;
  }
}
function jt(d, t) {
  var u, g;
  try {
    t ? (u = globalThis.sessionStorage) == null || u.setItem(d, t) : (g = globalThis.sessionStorage) == null || g.removeItem(d);
  } catch {
  }
}
function Is(d) {
  var R, V;
  const t = {
    subscription_ids: [...new Set(d.subscription_ids)].sort((T, N) => T - N),
    action: d.action
  };
  d.action === "extend" && (t.days = d.days), d.action === "reset_quota" && (t.daily = !!d.daily, t.weekly = !!d.weekly, t.monthly = !!d.monthly);
  const u = Us(), g = u ? `sub2api:admin:subscription-bulk:${u}:${JSON.stringify(t)}` : null;
  let p = g ? et.get(g) ?? As(g) : null;
  const k = !!p;
  if (!p) {
    const T = ((V = (R = globalThis.crypto) == null ? void 0 : R.randomUUID) == null ? void 0 : V.call(R)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    p = `subscription-bulk-${u ?? "unknown"}-${T}`;
  }
  return g && (et.set(g, p), jt(g, p)), { request: t, key: p, storageKey: g, outcomeUncertain: k };
}
function Dt(d) {
  d.storageKey && (et.delete(d.storageKey), jt(d.storageKey, null));
}
const Fs = { class: "mb-2 text-sm font-medium text-gray-900 dark:text-gray-100" }, js = { class: "max-h-48 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-600" }, Vs = { class: "break-all text-gray-900 dark:text-gray-100" }, Ns = { class: "break-words text-xs text-gray-500 dark:text-gray-400" }, Os = {
  key: 0,
  class: "ml-2"
}, qs = ["disabled"], Ps = { key: 0 }, Bs = {
  for: "bulk-subscription-days",
  class: "input-label"
}, Ls = ["disabled", "placeholder"], Hs = {
  id: "bulk-subscription-days-hint",
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Qs = { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, Gs = { class: "flex flex-wrap gap-5" }, Ks = ["onUpdate:modelValue", "name", "disabled"], Ws = { class: "text-xs text-gray-500 dark:text-gray-400" }, Js = {
  key: 2,
  class: "rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
}, Ys = {
  key: 0,
  role: "alert",
  class: "text-sm text-red-600 dark:text-red-400"
}, Xs = {
  key: 1,
  role: "alert",
  class: "space-y-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300"
}, Zs = { key: 0 }, ea = {
  key: 2,
  "aria-live": "polite",
  class: "space-y-3"
}, ta = { class: "rounded-lg bg-gray-50 p-3 text-sm font-medium text-gray-900 dark:bg-dark-700 dark:text-gray-100" }, sa = {
  key: 0,
  class: "max-h-48 space-y-2 overflow-y-auto"
}, aa = { class: "break-all font-medium" }, ia = { class: "mt-1 break-words" }, na = { class: "flex justify-end gap-3" }, oa = ["disabled"], la = ["disabled"], ra = /* @__PURE__ */ st({
  __name: "BulkSubscriptionActionDialog",
  props: {
    show: { type: Boolean },
    action: {},
    subscriptions: {}
  },
  emits: ["close", "completed"],
  setup(d, { emit: t }) {
    const u = d, g = t, { t: p } = at(), k = ["daily", "weekly", "monthly"], R = b(30), V = ue({ daily: !0, weekly: !0, monthly: !0 }), T = b(!1), N = b(""), A = zt(null), $ = zt(null), Y = b([]), ye = b(null), Z = z(() => ye.value ?? u.action), ie = z(() => T.value || !!$.value || !!A.value), ce = z(() => !T.value), De = z(() => {
      var h;
      return ((h = A.value) == null ? void 0 : h.results.filter((_) => !_.success)) ?? [];
    }), ee = z(() => {
      if (Y.value.length === 0) return p("admin.subscriptions.bulk.selectionRequired");
      if (Y.value.length > 100) return p("admin.subscriptions.bulk.selectionLimit");
      if (Z.value === "extend") {
        const h = Number(R.value);
        if (!Number.isInteger(h) || h === 0 || Math.abs(h) > 36500)
          return p("admin.subscriptions.bulk.invalidDays");
      }
      return Z.value === "reset_quota" && !k.some((h) => V[h]) ? p("admin.subscriptions.bulk.selectWindow") : "";
    });
    hs(() => u.subscriptions, (h) => {
      ie.value || (Y.value = h.map((_) => {
        var v, L;
        return {
          id: _.id,
          email: (v = _.user) == null ? void 0 : v.email,
          group: (L = _.group) == null ? void 0 : L.name,
          groupId: _.group_id
        };
      }));
    }, { immediate: !0 });
    function me() {
      ce.value && g("close");
    }
    function qe(h) {
      const _ = Y.value.find((v) => v.id === h);
      return _ != null && _.email ? `${_.email} · #${h}` : `#${h}`;
    }
    async function ne() {
      var _, v, L;
      if (T.value || A.value) return;
      if (!$.value) {
        if (ee.value) return;
        const H = {
          subscription_ids: Y.value.map((D) => D.id),
          action: u.action
        };
        H.action === "extend" && (H.days = Number(R.value)), H.action === "reset_quota" && Object.assign(H, { ...V }), $.value = Is(H), ye.value = H.action;
      }
      const h = $.value;
      T.value = !0, N.value = "";
      try {
        A.value = await W.subscriptions.bulkAction(h.request, h.key), Dt(h), $.value = null, g("completed", A.value);
      } catch (H) {
        const D = H;
        N.value = (D == null ? void 0 : D.message) || ((v = (_ = D == null ? void 0 : D.response) == null ? void 0 : _.data) == null ? void 0 : v.message) || p("admin.subscriptions.bulk.requestFailed");
        const B = (D == null ? void 0 : D.status) ?? ((L = D == null ? void 0 : D.response) == null ? void 0 : L.status);
        !h.outcomeUncertain && B && B >= 400 && B < 500 && B !== 408 && B !== 409 ? (Dt(h), $.value = null, ye.value = null) : h.outcomeUncertain = !0;
      } finally {
        T.value = !1;
      }
    }
    return (h, _) => (l(), se(Xe, {
      show: d.show,
      title: n(p)(`admin.subscriptions.bulk.${Z.value}`),
      width: "normal",
      "close-on-escape": ce.value,
      "show-close-button": ce.value,
      onClose: me
    }, {
      footer: w(() => [
        e("div", na, [
          e("button", {
            type: "button",
            class: "btn btn-secondary",
            disabled: !ce.value,
            onClick: me
          }, o(A.value ? n(p)("common.close") : n(p)("common.cancel")), 9, oa),
          A.value ? m("", !0) : (l(), r("button", {
            key: 0,
            type: "submit",
            form: "bulk-subscription-action-form",
            class: ae(["btn", Z.value === "revoke" ? "btn-danger" : "btn-primary"]),
            disabled: T.value || !$.value && !!ee.value
          }, o(T.value ? n(p)("common.processing") : $.value ? n(p)("admin.subscriptions.bulk.retry") : n(p)("admin.subscriptions.bulk.confirm")), 11, la))
        ])
      ]),
      default: w(() => [
        e("form", {
          id: "bulk-subscription-action-form",
          class: "space-y-4",
          novalidate: "",
          onSubmit: Oe(ne, ["prevent"])
        }, [
          e("div", null, [
            e("p", Fs, o(n(p)("admin.subscriptions.bulk.confirmTargets", { count: Y.value.length })), 1),
            e("ul", js, [
              (l(!0), r(U, null, J(Y.value, (v) => (l(), r("li", {
                key: v.id,
                class: "px-3 py-2 text-sm"
              }, [
                e("div", Vs, o(v.email || `#${v.id}`), 1),
                e("div", Ns, [
                  C(o(v.group || n(p)("admin.subscriptions.bulk.groupFallback", { id: v.groupId })) + " ", 1),
                  v.email ? (l(), r("span", Os, "#" + o(v.id), 1)) : m("", !0)
                ])
              ]))), 128))
            ])
          ]),
          e("fieldset", {
            disabled: ie.value,
            class: "space-y-3 disabled:opacity-70"
          }, [
            Z.value === "extend" ? (l(), r("div", Ps, [
              e("label", Bs, o(n(p)("admin.subscriptions.form.adjustDays")), 1),
              de(e("input", {
                id: "bulk-subscription-days",
                "onUpdate:modelValue": _[0] || (_[0] = (v) => R.value = v),
                type: "number",
                min: "-36500",
                max: "36500",
                step: "1",
                class: "input",
                disabled: ie.value,
                placeholder: n(p)("admin.subscriptions.adjustDaysPlaceholder"),
                "aria-describedby": "bulk-subscription-days-hint"
              }, null, 8, Ls), [
                [
                  Me,
                  R.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Hs, o(n(p)("admin.subscriptions.bulk.extendHint")), 1)
            ])) : Z.value === "reset_quota" ? (l(), r(U, { key: 1 }, [
              e("legend", Qs, o(n(p)("admin.subscriptions.bulk.resetWindows")), 1),
              e("div", Gs, [
                (l(), r(U, null, J(k, (v) => e("label", {
                  key: v,
                  class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                }, [
                  de(e("input", {
                    "onUpdate:modelValue": (L) => V[v] = L,
                    name: v,
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                    disabled: ie.value
                  }, null, 8, Ks), [
                    [At, V[v]]
                  ]),
                  C(" " + o(n(p)(`admin.subscriptions.${v}`)), 1)
                ])), 64))
              ]),
              e("p", Ws, o(n(p)("admin.subscriptions.bulk.resetHint")), 1)
            ], 64)) : (l(), r("p", Js, o(n(p)(`admin.subscriptions.bulk.${Z.value}Hint`)), 1))
          ], 8, qs),
          ee.value && !ie.value ? (l(), r("p", Ys, o(ee.value), 1)) : m("", !0),
          N.value ? (l(), r("div", Xs, [
            e("p", null, o(N.value), 1),
            $.value ? (l(), r("p", Zs, o(n(p)("admin.subscriptions.bulk.retryHint")), 1)) : m("", !0)
          ])) : m("", !0),
          A.value ? (l(), r("div", ea, [
            e("p", ta, o(n(p)("admin.subscriptions.bulk.result", { success: A.value.success_count, failed: A.value.failed_count })), 1),
            De.value.length ? (l(), r("ul", sa, [
              (l(!0), r(U, null, J(De.value, (v) => (l(), r("li", {
                key: v.subscription_id,
                class: "rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300"
              }, [
                e("p", aa, o(qe(v.subscription_id)), 1),
                e("p", ia, o(v.error || n(p)("admin.subscriptions.bulk.itemFailed")), 1)
              ]))), 128))
            ])) : m("", !0)
          ])) : m("", !0)
        ], 32)
      ]),
      _: 1
    }, 8, ["show", "title", "close-on-escape", "show-close-button"]));
  }
}), ua = { class: "flex min-w-0 flex-1 items-start justify-between gap-3" }, da = ["title"], ca = {
  key: 0,
  class: "mt-1.5 w-full whitespace-pre-line [overflow-wrap:anywhere] text-left text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3"
}, ma = { class: "flex shrink-0 items-center gap-2 pt-0.5" }, pa = { class: "flex shrink-0 flex-col items-end gap-1" }, ba = { class: "mr-1 line-through opacity-50" }, va = { class: "font-bold" }, ga = ["title"], ya = {
  key: 0,
  class: "h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "2"
}, fa = /* @__PURE__ */ st({
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
  setup(d) {
    const { t } = at(), u = d, g = z(() => u.userRateMultiplier !== null && u.userRateMultiplier !== void 0 && u.rateMultiplier !== void 0 && u.userRateMultiplier !== u.rateMultiplier), p = It(), k = z(() => !!(u.peakRateEnabled && u.peakStart && u.peakEnd)), R = z(() => {
      var N;
      return Es(
        {
          peak_rate_enabled: u.peakRateEnabled,
          peak_start: u.peakStart,
          peak_end: u.peakEnd,
          peak_rate_multiplier: u.peakRateMultiplier
        },
        Rs((N = p.cachedPublicSettings) == null ? void 0 : N.server_utc_offset)
      );
    }), V = z(() => t("common.peakRateTooltip", { window: R.value })), T = z(() => {
      switch (u.platform) {
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
    return (N, A) => (l(), r("div", ua, [
      e("div", {
        class: "flex min-w-0 flex-1 flex-col items-start",
        title: d.description || void 0
      }, [
        y(Ze, {
          name: d.name,
          platform: d.platform,
          "subscription-type": d.subscriptionType,
          "show-rate": !1,
          class: "groupOptionItemBadge"
        }, null, 8, ["name", "platform", "subscription-type"]),
        d.description ? (l(), r("span", ca, o(d.description), 1)) : m("", !0)
      ], 8, da),
      e("div", ma, [
        e("div", pa, [
          d.rateMultiplier !== void 0 ? (l(), r("span", {
            key: 0,
            class: ae(["inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold", T.value])
          }, [
            g.value ? (l(), r(U, { key: 0 }, [
              e("span", ba, o(d.rateMultiplier) + "x", 1),
              e("span", va, o(d.userRateMultiplier) + "x", 1)
            ], 64)) : (l(), r(U, { key: 1 }, [
              C(o(d.rateMultiplier) + "x " + o(n(t)("admin.groups.rateLabel")), 1)
            ], 64))
          ], 2)) : m("", !0),
          k.value ? (l(), r("span", {
            key: 1,
            class: "inline-flex items-center whitespace-nowrap rounded-full bg-zo-alert-50 px-3 py-1 text-xs font-semibold text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-300",
            title: V.value
          }, o(R.value), 9, ga)) : m("", !0)
        ]),
        d.showCheckmark && d.selected ? (l(), r("svg", ya, [...A[0] || (A[0] = [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M5 13l4 4L19 7"
          }, null, -1)
        ])])) : m("", !0)
      ])
    ]));
  }
}), ha = /* @__PURE__ */ Ft(fa, [["__scopeId", "data-v-f3e0187e"]]), tt = 1440 * 60 * 1e3;
function _a(d) {
  if (!d.starts_at || !d.expires_at) return !1;
  const t = new Date(d.starts_at).getTime(), u = new Date(d.expires_at).getTime();
  return !Number.isFinite(t) || !Number.isFinite(u) ? !1 : u <= t + tt;
}
function Et(d, t = /* @__PURE__ */ new Date()) {
  const u = d instanceof Date ? d.getTime() : new Date(d).getTime(), g = t.getTime();
  if (!Number.isFinite(u) || !Number.isFinite(g)) return null;
  const p = u - g;
  if (p <= 0) return null;
  const k = Math.floor(p / (1e3 * 60)), R = Math.floor(k / 1440), V = Math.floor(k % 1440 / 60), T = k % 60;
  return { days: R, hours: V, minutes: T };
}
function ka(d, t = /* @__PURE__ */ new Date()) {
  const u = d instanceof Date ? d.getTime() : new Date(d).getTime(), g = t.getTime();
  if (!Number.isFinite(u) || !Number.isFinite(g)) return null;
  const p = u - g;
  if (p <= 0) return null;
  if (p >= tt)
    return { unit: "days", days: Math.ceil(p / tt) };
  const k = Math.ceil(p / (60 * 1e3));
  return {
    unit: "hoursMinutes",
    hours: Math.floor(k / 60),
    minutes: k % 60
  };
}
const xa = { class: "flex flex-wrap items-start justify-between gap-4" }, wa = { class: "flex flex-1 flex-wrap items-center gap-3" }, Ca = {
  class: "relative w-full sm:w-64",
  "data-filter-user-search": ""
}, Sa = ["placeholder"], $a = ["title"], za = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ta = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Ma = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Da = ["onClick"], Ea = { class: "font-medium text-gray-900 dark:text-white" }, Ra = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Ua = { class: "w-full sm:w-40" }, Aa = { class: "w-full sm:w-48" }, Ia = { class: "w-full sm:w-40" }, Fa = { class: "ml-auto flex flex-wrap items-center justify-end gap-3" }, ja = ["disabled", "title"], Va = ["title"], Na = { class: "hidden md:inline" }, Oa = {
  key: 0,
  class: "absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, qa = { class: "p-2" }, Pa = { class: "mb-2 border-b border-gray-200 pb-2 dark:border-dark-700" }, Ba = { class: "px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400" }, La = ["onClick"], Ha = ["title"], Qa = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-primary-200 bg-primary-50 p-3 dark:border-primary-800 dark:bg-primary-900/20",
  "data-test": "subscription-bulk-actions"
}, Ga = { class: "flex flex-wrap items-center gap-2" }, Ka = { class: "mr-2 text-sm font-medium text-primary-800 dark:text-primary-200" }, Wa = ["data-test", "disabled", "onClick"], Ja = { class: "text-xs text-gray-600 dark:text-gray-400" }, Ya = { class: "flex items-center gap-2" }, Xa = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30" }, Za = { class: "text-sm font-medium text-primary-700 dark:text-primary-300" }, ei = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-dark-500"
}, ti = { class: "min-w-[280px] space-y-2" }, si = {
  key: 0,
  class: "usage-row"
}, ai = { class: "flex items-center gap-2" }, ii = { class: "usage-label" }, ni = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, oi = { class: "usage-amount" }, li = {
  key: 0,
  class: "reset-info"
}, ri = {
  key: 1,
  class: "usage-row"
}, ui = { class: "flex items-center gap-2" }, di = { class: "usage-label" }, ci = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, mi = { class: "usage-amount" }, pi = {
  key: 0,
  class: "reset-info"
}, bi = {
  key: 2,
  class: "usage-row"
}, vi = { class: "flex items-center gap-2" }, gi = { class: "usage-label" }, yi = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, fi = { class: "usage-amount" }, hi = {
  key: 0,
  class: "reset-info"
}, _i = {
  key: 3,
  class: "flex items-center gap-2 rounded-lg bg-zo-signal-50 px-3 py-2 dark:bg-zo-signal-900/20"
}, ki = { class: "text-xs font-medium text-zo-signal-700 dark:text-zo-signal-300" }, xi = { key: 0 }, wi = {
  key: 0,
  class: "text-xs text-gray-500"
}, Ci = {
  key: 1,
  class: "text-sm text-gray-500"
}, Si = { class: "flex items-center gap-1" }, $i = ["onClick"], zi = { class: "text-xs" }, Ti = ["onClick", "disabled"], Mi = { class: "text-xs" }, Di = ["onClick"], Ei = { class: "text-xs" }, Ri = ["onClick"], Ui = { class: "text-xs" }, Ai = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Ii = ["disabled"], Fi = {
  key: 0,
  class: "input-hint"
}, ji = { class: "input-label" }, Vi = {
  class: "relative",
  "data-assign-user-search": ""
}, Ni = ["disabled", "placeholder"], Oi = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, qi = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Pi = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Bi = ["disabled", "onClick"], Li = { class: "font-medium text-gray-900 dark:text-white" }, Hi = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Qi = {
  key: 0,
  class: "mt-2 space-y-2",
  "data-test": "assign-users"
}, Gi = { class: "text-sm text-gray-600 dark:text-gray-400" }, Ki = { class: "max-h-40 space-y-1 overflow-y-auto" }, Wi = { class: "truncate" }, Ji = { class: "text-gray-500" }, Yi = ["disabled", "aria-label", "onClick"], Xi = { class: "input-label" }, Zi = {
  key: 1,
  class: "text-gray-400"
}, en = { class: "input-hint" }, tn = { class: "input-label" }, sn = ["disabled"], an = { class: "input-hint" }, nn = {
  key: 1,
  class: "space-y-2 text-sm",
  role: "status",
  "data-test": "batch-assign-result"
}, on = {
  key: 0,
  class: "max-h-40 space-y-1 overflow-y-auto text-red-600 dark:text-red-400"
}, ln = {
  key: 1,
  class: "input-hint"
}, rn = { class: "flex justify-end gap-3" }, un = ["disabled"], dn = ["disabled"], cn = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, mn = { class: "rounded-lg bg-gray-50 p-4 dark:bg-dark-700" }, pn = { class: "text-sm text-gray-600 dark:text-gray-400" }, bn = { class: "font-medium text-gray-900 dark:text-white" }, vn = { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, gn = { class: "font-medium text-gray-900 dark:text-white" }, yn = {
  key: 0,
  class: "mt-1 text-sm text-gray-600 dark:text-gray-400"
}, fn = { class: "font-medium text-gray-900 dark:text-white" }, hn = { class: "input-label" }, _n = { class: "flex items-center gap-2" }, kn = ["placeholder"], xn = { class: "input-hint" }, wn = {
  key: 0,
  class: "flex justify-end gap-3"
}, Cn = ["disabled"], Sn = { class: "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, $n = { class: "mb-4 text-lg font-bold text-gray-900 dark:text-white" }, zn = { class: "mb-5 text-sm text-gray-500 dark:text-gray-400" }, Tn = { class: "mb-5" }, Mn = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, Dn = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, En = { class: "ml-8 mt-2" }, Rn = { class: "mb-5" }, Un = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, An = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, In = { class: "mb-5" }, Fn = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, jn = { class: "ml-8 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, Vn = { class: "w-full text-sm" }, Nn = { class: "whitespace-nowrap bg-gray-50 px-3 py-2 font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-300" }, On = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, qn = { class: "rounded-lg bg-blue-50 p-3 text-xs text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" }, Pn = { class: "mt-4 text-right" }, Rt = "subscription-user-column-mode", Ut = "subscription-hidden-columns", Bn = /* @__PURE__ */ st({
  __name: "SubscriptionsView",
  setup(d) {
    const { t } = at(), u = It(), g = b(!1), p = z(() => [
      { action: t("admin.subscriptions.guide.actions.adjust"), desc: t("admin.subscriptions.guide.actions.adjustDesc") },
      { action: t("admin.subscriptions.guide.actions.resetQuota"), desc: t("admin.subscriptions.guide.actions.resetQuotaDesc") },
      { action: t("admin.subscriptions.guide.actions.revoke"), desc: t("admin.subscriptions.guide.actions.revokeDesc") }
    ]), k = b("email"), R = () => {
      try {
        const a = localStorage.getItem(Rt);
        (a === "email" || a === "username") && (k.value = a);
      } catch (a) {
        console.error("Failed to load user column mode:", a);
      }
    }, V = () => {
      try {
        localStorage.setItem(Rt, k.value);
      } catch (a) {
        console.error("Failed to save user column mode:", a);
      }
    }, T = (a) => {
      k.value = a, V();
    }, N = z(() => [
      {
        key: "user",
        label: k.value === "email" ? t("admin.subscriptions.columns.user") : t("admin.users.columns.username"),
        sortable: !1
      },
      { key: "group", label: t("admin.subscriptions.columns.group"), sortable: !1 },
      { key: "usage", label: t("admin.subscriptions.columns.usage"), sortable: !1 },
      { key: "expires_at", label: t("admin.subscriptions.columns.expires"), sortable: !0 },
      { key: "status", label: t("admin.subscriptions.columns.status"), sortable: !0 },
      { key: "actions", label: t("admin.subscriptions.columns.actions"), sortable: !1 }
    ]), A = z(
      () => N.value.filter((a) => a.key !== "user" && a.key !== "actions")
    ), $ = ue(/* @__PURE__ */ new Set()), Y = [], ye = () => {
      try {
        const a = localStorage.getItem(Ut);
        a ? JSON.parse(a).forEach((c) => $.add(c)) : Y.forEach((s) => $.add(s));
      } catch (a) {
        console.error("Failed to load saved columns:", a), Y.forEach((s) => $.add(s));
      }
    }, Z = () => {
      try {
        localStorage.setItem(Ut, JSON.stringify([...$]));
      } catch (a) {
        console.error("Failed to save columns:", a);
      }
    }, ie = (a) => {
      $.has(a) ? $.delete(a) : $.add(a), Z();
    }, ce = (a) => !$.has(a), De = z(
      () => N.value.filter(
        (a) => a.key === "user" || a.key === "actions" || !$.has(a.key)
      )
    ), ee = b(!1), me = b(null), qe = z(() => [
      { value: "", label: t("admin.subscriptions.allStatus") },
      { value: "active", label: t("admin.subscriptions.status.active") },
      { value: "expired", label: t("admin.subscriptions.status.expired") },
      { value: "revoked", label: t("admin.subscriptions.status.revoked") }
    ]), ne = b([]), h = b([]), _ = b(!1);
    let v = null;
    const { selectedIds: L, selectedCount: H, setSelectedIds: D, clear: B, removeMany: Vt } = Ts({ rows: ne, getId: (a) => a.id }), Nt = ["extend", "reset_quota", "revoke", "restore"], Ee = b(null), it = b([]), Re = z(() => {
      const a = ne.value.filter((s) => L.value.includes(s.id));
      return {
        extend: a.filter((s) => ["active", "expired"].includes(s.status)),
        reset_quota: a.filter((s) => s.status === "active"),
        revoke: a.filter((s) => s.status === "active"),
        restore: a.filter((s) => s.status === "revoked")
      };
    }), Ot = (a) => t("admin.subscriptions.bulk.selectSubscription", { id: a.id }), qt = (a) => {
      const s = new Set(ne.value.map((c) => c.id));
      D(a.filter((c) => typeof c == "number" && s.has(c)));
    }, Pt = (a) => {
      _.value || Re.value[a].length === 0 || (it.value = [...Re.value[a]], Ee.value = a);
    }, Bt = async (a) => {
      Vt(a.results.filter((s) => s.success).map((s) => s.subscription_id)), await P();
    }, oe = b(""), le = b([]), Pe = b(!1), fe = b(!1), pe = b(null);
    let he = null;
    const X = b(""), te = b([]), Be = b(!1), be = b(!1), re = b(null), Q = b(!1), M = b([]), G = b(null);
    let _e = null;
    const j = ue({
      status: "active",
      group_id: "",
      platform: "",
      user_id: null
    }), Ue = ue({
      sort_by: "created_at",
      sort_order: "desc"
    }), O = ue({
      page: 1,
      page_size: Cs(),
      total: 0,
      pages: 0
    }), Ae = b(!1), Le = b(!1), Ie = b(!1), Fe = b(!1), je = b(!1), x = b(!1), ve = b(null), Ve = b(!1), q = b(null), ke = b(null), xe = b(null), S = ue({
      user_id: null,
      group_id: null,
      validity_days: 30
    }), we = ue({
      days: 30
    }), Lt = z(() => [
      { value: "", label: t("admin.subscriptions.allGroups") },
      ...h.value.map((a) => ({ value: a.id.toString(), label: a.name }))
    ]), Ht = z(() => [
      { value: "", label: t("admin.subscriptions.allPlatforms") },
      ...Ss
    ]), Qt = z(
      () => h.value.filter((a) => a.subscription_type === "subscription" && a.status === "active").map((a) => ({
        value: a.id,
        label: a.name,
        description: a.description,
        platform: a.platform,
        subscriptionType: a.subscription_type,
        rate: a.rate_multiplier
      }))
    ), ge = () => {
      B(), O.page = 1, P();
    }, P = async () => {
      v && v.abort();
      const a = new AbortController();
      v = a;
      const { signal: s } = a;
      _.value = !0;
      try {
        const c = await W.subscriptions.list(
          O.page,
          O.page_size,
          {
            status: j.status || void 0,
            group_id: j.group_id ? parseInt(j.group_id) : void 0,
            platform: j.platform || void 0,
            user_id: j.user_id || void 0,
            sort_by: Ue.sort_by,
            sort_order: Ue.sort_order
          },
          {
            signal: s
          }
        );
        if (s.aborted || v !== a) return;
        ne.value = c.items;
        const I = new Set(c.items.map((E) => E.id));
        D(L.value.filter((E) => I.has(E))), O.total = c.total, O.pages = c.pages;
      } catch (c) {
        if (s.aborted || (c == null ? void 0 : c.name) === "AbortError" || (c == null ? void 0 : c.code) === "ERR_CANCELED")
          return;
        u.showError(t("admin.subscriptions.failedToLoad")), console.error("Error loading subscriptions:", c);
      } finally {
        v === a && (_.value = !1, v = null);
      }
    }, Gt = async () => {
      try {
        h.value = await W.groups.getAll();
      } catch (a) {
        console.error("Error loading groups:", a);
      }
    }, Kt = () => {
      he && clearTimeout(he), he = setTimeout(Wt, 300);
    }, Wt = async () => {
      const a = oe.value.trim();
      if (pe.value && a !== pe.value.email && (pe.value = null, j.user_id = null, ge()), !a) {
        le.value = [];
        return;
      }
      Pe.value = !0;
      try {
        le.value = await W.usage.searchUsers(a);
      } catch (s) {
        console.error("Failed to search users:", s), le.value = [];
      } finally {
        Pe.value = !1;
      }
    }, Jt = (a) => {
      pe.value = a, oe.value = a.email, fe.value = !1, j.user_id = a.id, ge();
    }, Yt = () => {
      pe.value = null, oe.value = "", le.value = [], fe.value = !1, j.user_id = null, ge();
    }, Xt = () => {
      re.value && X.value.trim() !== re.value.email && (re.value = null, S.user_id = null), _e && clearTimeout(_e), _e = setTimeout(Zt, 300);
    }, Zt = async () => {
      const a = X.value.trim();
      if (!a) {
        te.value = [];
        return;
      }
      Be.value = !0;
      try {
        const s = await W.users.list(1, 30, {
          search: a,
          sort_by: "email",
          sort_order: "asc"
        });
        te.value = s.items;
      } catch (s) {
        console.error("Failed to search users:", s), te.value = [];
      } finally {
        Be.value = !1;
      }
    }, es = (a) => {
      if (!x.value) {
        if (Q.value) {
          M.value.length < 100 && !M.value.some((s) => s.id === a.id) && (M.value = [...M.value, a]), X.value = "", te.value = [], be.value = !1;
          return;
        }
        re.value = a, X.value = a.email, be.value = !1, S.user_id = a.id;
      }
    }, nt = () => {
      re.value = null, X.value = "", te.value = [], S.user_id = null;
    }, ts = () => {
      nt(), M.value = [], G.value = null;
    }, ss = (a) => {
      B(), O.page = a, P();
    }, as = (a) => {
      B(), O.page_size = a, O.page = 1, P();
    }, is = (a, s) => {
      B(), Ue.sort_by = a, Ue.sort_order = s, O.page = 1, P();
    }, He = () => {
      x.value || (Ae.value = !1, Q.value = !1, M.value = [], G.value = null, S.user_id = null, S.group_id = null, S.validity_days = 30, re.value = null, X.value = "", te.value = [], be.value = !1);
    }, ns = async () => {
      var a, s;
      if (!x.value) {
        if (Q.value ? M.value.length === 0 : !S.user_id) {
          u.showError(t("admin.subscriptions.pleaseSelectUser"));
          return;
        }
        if (!S.group_id) {
          u.showError(t("admin.subscriptions.pleaseSelectGroup"));
          return;
        }
        if (!Number.isInteger(S.validity_days) || S.validity_days < 1 || S.validity_days > 36500) {
          u.showError(t("admin.subscriptions.validityDaysRequired"));
          return;
        }
        x.value = !0;
        try {
          if (Q.value) {
            G.value = await W.subscriptions.bulkAssign({
              user_ids: M.value.map((E) => E.id),
              group_id: S.group_id,
              validity_days: S.validity_days
            });
            const c = G.value, I = new Set(c.subscriptions.map((E) => E.user_id));
            M.value = M.value.filter((E) => !I.has(E.id)), c.success_count > 0 && (u.showSuccess(t("admin.subscriptions.batchAssign.result", { success: c.success_count, failed: c.failed_count })), await P());
            return;
          }
          await W.subscriptions.assign({
            user_id: S.user_id,
            group_id: S.group_id,
            validity_days: S.validity_days
          }), u.showSuccess(t("admin.subscriptions.subscriptionAssigned")), x.value = !1, He(), P();
        } catch (c) {
          u.showError(((s = (a = c.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToAssign")), console.error("Error assigning subscription:", c);
        } finally {
          x.value = !1;
        }
      }
    }, os = (a) => {
      q.value = a, we.days = 30, Le.value = !0;
    }, Qe = () => {
      Le.value = !1, q.value = null;
    }, ls = async () => {
      var a, s;
      if (q.value) {
        if (q.value.expires_at) {
          const c = new Date(q.value.expires_at);
          if (new Date(c.getTime() + we.days * 24 * 60 * 60 * 1e3) <= /* @__PURE__ */ new Date()) {
            u.showError(t("admin.subscriptions.adjustWouldExpire"));
            return;
          }
        }
        x.value = !0;
        try {
          await W.subscriptions.extend(q.value.id, {
            days: we.days
          }), u.showSuccess(t("admin.subscriptions.subscriptionAdjusted")), Qe(), P();
        } catch (c) {
          u.showError(((s = (a = c.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToAdjust")), console.error("Error adjusting subscription:", c);
        } finally {
          x.value = !1;
        }
      }
    }, rs = (a) => {
      ke.value = a, Ie.value = !0;
    }, us = async () => {
      var a, s;
      if (ke.value)
        try {
          await W.subscriptions.revoke(ke.value.id), u.showSuccess(t("admin.subscriptions.subscriptionRevoked")), Ie.value = !1, ke.value = null, P();
        } catch (c) {
          u.showError(((s = (a = c.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToRevoke")), console.error("Error revoking subscription:", c);
        }
    }, ds = (a) => {
      xe.value = a, Fe.value = !0;
    }, cs = async () => {
      var a, s;
      if (xe.value)
        try {
          await W.subscriptions.restore(xe.value.id), u.showSuccess(t("admin.subscriptions.subscriptionRestored")), Fe.value = !1, xe.value = null, P();
        } catch (c) {
          u.showError(((s = (a = c.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToRestore")), console.error("Error restoring subscription:", c);
        }
    }, ms = (a) => {
      ve.value = a, je.value = !0;
    }, ps = async () => {
      var a, s;
      if (ve.value && !Ve.value) {
        Ve.value = !0;
        try {
          await W.subscriptions.resetQuota(ve.value.id, { daily: !0, weekly: !0, monthly: !0 }), u.showSuccess(t("admin.subscriptions.quotaResetSuccess")), je.value = !1, ve.value = null, await P();
        } catch (c) {
          u.showError(((s = (a = c.response) == null ? void 0 : a.data) == null ? void 0 : s.detail) || t("admin.subscriptions.failedToResetQuota")), console.error("Error resetting quota:", c);
        } finally {
          Ve.value = !1;
        }
      }
    }, ot = (a) => {
      const s = /* @__PURE__ */ new Date(), I = new Date(a).getTime() - s.getTime();
      return I < 0 ? null : Math.ceil(I / (1e3 * 60 * 60 * 24));
    }, bs = (a) => {
      const s = ka(a);
      return s ? s.unit === "days" ? t("admin.subscriptions.daysRemaining", { days: s.days }) : s.hours ? t("admin.subscriptions.hoursMinutesRemaining", {
        hours: s.hours,
        minutes: s.minutes
      }) : t("admin.subscriptions.minutesRemaining", { minutes: s.minutes }) : null;
    }, vs = (a) => {
      const s = ot(a);
      return s !== null && s <= 7;
    }, Ge = (a, s) => !s || s === 0 ? "0%" : `${Math.min((a ?? 0) / s * 100, 100)}%`, Ke = (a, s) => {
      if (!s || s === 0) return "bg-gray-400";
      const I = (a ?? 0) / s * 100;
      return I >= 90 ? "bg-red-500" : I >= 70 ? "bg-zo-alert-500" : "bg-zo-signal-500";
    }, gs = (a) => a.days > 0 ? t("admin.subscriptions.resetInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? t("admin.subscriptions.resetInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : t("admin.subscriptions.resetInMinutes", { minutes: a.minutes }), ys = (a) => a.days > 0 ? t("admin.subscriptions.quotaEndsInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? t("admin.subscriptions.quotaEndsInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : t("admin.subscriptions.quotaEndsInMinutes", { minutes: a.minutes }), fs = (a) => {
      if (_a(a) && a.expires_at) {
        const s = Et(a.expires_at);
        return s ? ys(s) : t("admin.subscriptions.windowNotActive");
      }
      return We(a.daily_window_start, "daily");
    }, We = (a, s) => {
      if (!a) return t("admin.subscriptions.windowNotActive");
      const c = new Date(a), I = /* @__PURE__ */ new Date();
      let E;
      switch (s) {
        case "daily":
          E = new Date(c.getTime() + 1440 * 60 * 1e3);
          break;
        case "weekly":
          E = new Date(c.getTime() + 10080 * 60 * 1e3);
          break;
        case "monthly":
          E = new Date(c.getTime() + 720 * 60 * 60 * 1e3);
          break;
      }
      const Ce = Et(E, I);
      return Ce ? gs(Ce) : t("admin.subscriptions.windowNotActive");
    }, lt = (a) => {
      const s = a.target;
      s.closest("[data-assign-user-search]") || (be.value = !1), s.closest("[data-filter-user-search]") || (fe.value = !1), me.value && !me.value.contains(s) && (ee.value = !1);
    };
    return _s(() => {
      R(), ye(), P(), Gt(), document.addEventListener("click", lt);
    }), ks(() => {
      document.removeEventListener("click", lt), he && clearTimeout(he), _e && clearTimeout(_e);
    }), (a, s) => {
      var E, Ce, rt, ut, dt, ct;
      const c = Tt("RouterLink"), I = Tt("router-link");
      return l(), r(U, null, [
        y(Ms, null, {
          filters: w(() => [
            e("div", xa, [
              e("div", wa, [
                e("div", Ca, [
                  y(F, {
                    name: "search",
                    size: "md",
                    class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  }),
                  de(e("input", {
                    "onUpdate:modelValue": s[0] || (s[0] = (i) => oe.value = i),
                    type: "text",
                    placeholder: n(t)("admin.users.searchUsers"),
                    class: "input pl-10 pr-8",
                    onInput: Kt,
                    onFocus: s[1] || (s[1] = (i) => fe.value = !0)
                  }, null, 40, Sa), [
                    [Me, oe.value]
                  ]),
                  pe.value ? (l(), r("button", {
                    key: 0,
                    onClick: Yt,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                    title: n(t)("common.clear")
                  }, [
                    y(F, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ], 8, $a)) : m("", !0),
                  fe.value && (le.value.length > 0 || oe.value) ? (l(), r("div", za, [
                    Pe.value ? (l(), r("div", Ta, o(n(t)("common.loading")), 1)) : le.value.length === 0 && oe.value ? (l(), r("div", Ma, o(n(t)("common.noOptionsFound")), 1)) : m("", !0),
                    (l(!0), r(U, null, J(le.value, (i) => (l(), r("button", {
                      key: i.id,
                      type: "button",
                      onClick: (f) => Jt(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      e("span", Ea, o(i.email), 1),
                      e("span", Ra, "#" + o(i.id), 1)
                    ], 8, Da))), 128))
                  ])) : m("", !0)
                ]),
                e("div", Ua, [
                  y(Ne, {
                    modelValue: j.status,
                    "onUpdate:modelValue": s[2] || (s[2] = (i) => j.status = i),
                    options: qe.value,
                    placeholder: n(t)("admin.subscriptions.allStatus"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                e("div", Aa, [
                  y(Ne, {
                    modelValue: j.group_id,
                    "onUpdate:modelValue": s[3] || (s[3] = (i) => j.group_id = i),
                    options: Lt.value,
                    placeholder: n(t)("admin.subscriptions.allGroups"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                e("div", Ia, [
                  y(Ne, {
                    "data-testid": "subscription-platform-filter",
                    modelValue: j.platform,
                    "onUpdate:modelValue": s[4] || (s[4] = (i) => j.platform = i),
                    options: Ht.value,
                    placeholder: n(t)("admin.subscriptions.allPlatforms"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ])
              ]),
              e("div", Fa, [
                e("button", {
                  onClick: P,
                  disabled: _.value,
                  class: "btn btn-secondary",
                  title: n(t)("common.refresh")
                }, [
                  y(F, {
                    name: "refresh",
                    size: "md",
                    class: ae(_.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, ja),
                e("div", {
                  class: "relative",
                  ref_key: "columnDropdownRef",
                  ref: me
                }, [
                  e("button", {
                    onClick: s[5] || (s[5] = (i) => ee.value = !ee.value),
                    class: "btn btn-secondary px-2 md:px-3",
                    title: n(t)("admin.users.columnSettings")
                  }, [
                    s[27] || (s[27] = e("svg", {
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
                    e("span", Na, o(n(t)("admin.users.columnSettings")), 1)
                  ], 8, Va),
                  ee.value ? (l(), r("div", Oa, [
                    e("div", qa, [
                      e("div", Pa, [
                        e("div", Ba, o(n(t)("admin.subscriptions.columns.user")), 1),
                        e("button", {
                          onClick: s[6] || (s[6] = (i) => T("email")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          e("span", null, o(n(t)("admin.users.columns.email")), 1),
                          k.value === "email" ? (l(), se(F, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : m("", !0)
                        ]),
                        e("button", {
                          onClick: s[7] || (s[7] = (i) => T("username")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          e("span", null, o(n(t)("admin.users.columns.username")), 1),
                          k.value === "username" ? (l(), se(F, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : m("", !0)
                        ])
                      ]),
                      (l(!0), r(U, null, J(A.value, (i) => (l(), r("button", {
                        key: i.key,
                        onClick: (f) => ie(i.key),
                        class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                      }, [
                        e("span", null, o(i.label), 1),
                        ce(i.key) ? (l(), se(F, {
                          key: 0,
                          name: "check",
                          size: "sm",
                          class: "text-primary-500"
                        })) : m("", !0)
                      ], 8, La))), 128))
                    ])
                  ])) : m("", !0)
                ], 512),
                e("button", {
                  onClick: s[8] || (s[8] = (i) => g.value = !0),
                  class: "btn btn-secondary",
                  title: n(t)("admin.subscriptions.guide.showGuide")
                }, [
                  y(F, {
                    name: "questionCircle",
                    size: "md"
                  })
                ], 8, Ha),
                e("button", {
                  onClick: s[9] || (s[9] = (i) => Ae.value = !0),
                  class: "btn btn-primary"
                }, [
                  y(F, {
                    name: "plus",
                    size: "md",
                    class: "mr-2"
                  }),
                  C(" " + o(n(t)("admin.subscriptions.assignSubscription")), 1)
                ])
              ])
            ]),
            n(H) > 0 ? (l(), r("div", Qa, [
              e("div", Ga, [
                e("span", Ka, o(n(t)("admin.subscriptions.bulk.selected", { count: n(H) })), 1),
                (l(), r(U, null, J(Nt, (i) => e("button", {
                  key: i,
                  type: "button",
                  class: ae(i === "revoke" ? "btn btn-danger btn-sm" : "btn btn-secondary btn-sm"),
                  "data-test": `bulk-${i}`,
                  disabled: _.value || Re.value[i].length === 0,
                  onClick: (f) => Pt(i)
                }, o(n(t)(`admin.subscriptions.bulk.${i}`)) + " (" + o(Re.value[i].length) + ") ", 11, Wa)), 64)),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  onClick: s[10] || (s[10] = //@ts-ignore
                  (...i) => n(B) && n(B)(...i))
                }, o(n(t)("admin.subscriptions.bulk.clearSelection")), 1)
              ]),
              e("p", Ja, o(n(t)("admin.subscriptions.bulk.selectionHint")), 1)
            ])) : m("", !0)
          ]),
          table: w(() => [
            y(zs, {
              columns: De.value,
              data: ne.value,
              loading: _.value,
              "row-key": "id",
              selectable: "",
              "selected-keys": n(L),
              "selection-label": Ot,
              "server-side-sort": !0,
              "default-sort-key": "created_at",
              "default-sort-order": "desc",
              onSort: is,
              "onUpdate:selectedKeys": qt
            }, {
              "cell-user": w(({ row: i }) => {
                var f, K, Se, $e;
                return [
                  e("div", Ya, [
                    e("div", Xa, [
                      e("span", Za, o(k.value === "email" ? ((K = (f = i.user) == null ? void 0 : f.email) == null ? void 0 : K.charAt(0).toUpperCase()) || "?" : (($e = (Se = i.user) == null ? void 0 : Se.username) == null ? void 0 : $e.charAt(0).toUpperCase()) || "?"), 1)
                    ]),
                    y(c, {
                      to: { path: "/admin/usage", query: { user_id: i.user_id } },
                      class: "rounded font-medium text-gray-900 hover:text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-white dark:hover:text-primary-400 dark:focus-visible:ring-offset-dark-800"
                    }, {
                      default: w(() => {
                        var ze, Te;
                        return [
                          C(o(k.value === "email" ? ((ze = i.user) == null ? void 0 : ze.email) || n(t)("admin.redeem.userPrefix", { id: i.user_id }) : ((Te = i.user) == null ? void 0 : Te.username) || n(t)("admin.redeem.userPrefix", { id: i.user_id })), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ];
              }),
              "cell-group": w(({ row: i }) => [
                i.group ? (l(), se(Ze, {
                  key: 0,
                  name: i.group.name,
                  platform: i.group.platform,
                  "subscription-type": i.group.subscription_type,
                  "rate-multiplier": i.group.rate_multiplier,
                  "show-rate": !1
                }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (l(), r("span", ei, "-"))
              ]),
              "cell-usage": w(({ row: i }) => {
                var f, K, Se, $e, ze, Te, mt, pt, bt, vt, gt, yt, ft, ht, _t, kt, xt, wt, Ct, St, $t;
                return [
                  e("div", ti, [
                    (f = i.group) != null && f.daily_limit_usd ? (l(), r("div", si, [
                      e("div", ai, [
                        e("span", ii, o(n(t)("admin.subscriptions.daily")), 1),
                        e("div", ni, [
                          e("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.daily_usage_usd, (K = i.group) == null ? void 0 : K.daily_limit_usd)]),
                            style: Je({
                              width: Ge(i.daily_usage_usd, (Se = i.group) == null ? void 0 : Se.daily_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", oi, [
                          C(" $" + o((($e = i.daily_usage_usd) == null ? void 0 : $e.toFixed(2)) || "0.00") + " ", 1),
                          s[28] || (s[28] = e("span", { class: "text-gray-400" }, "/", -1)),
                          C(" $" + o((Te = (ze = i.group) == null ? void 0 : ze.daily_limit_usd) == null ? void 0 : Te.toFixed(2)), 1)
                        ])
                      ]),
                      i.daily_window_start ? (l(), r("div", li, [
                        s[29] || (s[29] = e("svg", {
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
                        e("span", null, o(fs(i)), 1)
                      ])) : m("", !0)
                    ])) : m("", !0),
                    (mt = i.group) != null && mt.weekly_limit_usd ? (l(), r("div", ri, [
                      e("div", ui, [
                        e("span", di, o(n(t)("admin.subscriptions.weekly")), 1),
                        e("div", ci, [
                          e("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.weekly_usage_usd, (pt = i.group) == null ? void 0 : pt.weekly_limit_usd)]),
                            style: Je({
                              width: Ge(i.weekly_usage_usd, (bt = i.group) == null ? void 0 : bt.weekly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", mi, [
                          C(" $" + o(((vt = i.weekly_usage_usd) == null ? void 0 : vt.toFixed(2)) || "0.00") + " ", 1),
                          s[30] || (s[30] = e("span", { class: "text-gray-400" }, "/", -1)),
                          C(" $" + o((yt = (gt = i.group) == null ? void 0 : gt.weekly_limit_usd) == null ? void 0 : yt.toFixed(2)), 1)
                        ])
                      ]),
                      i.weekly_window_start ? (l(), r("div", pi, [
                        s[31] || (s[31] = e("svg", {
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
                        e("span", null, o(We(i.weekly_window_start, "weekly")), 1)
                      ])) : m("", !0)
                    ])) : m("", !0),
                    (ft = i.group) != null && ft.monthly_limit_usd ? (l(), r("div", bi, [
                      e("div", vi, [
                        e("span", gi, o(n(t)("admin.subscriptions.monthly")), 1),
                        e("div", yi, [
                          e("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.monthly_usage_usd, (ht = i.group) == null ? void 0 : ht.monthly_limit_usd)]),
                            style: Je({
                              width: Ge(i.monthly_usage_usd, (_t = i.group) == null ? void 0 : _t.monthly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        e("span", fi, [
                          C(" $" + o(((kt = i.monthly_usage_usd) == null ? void 0 : kt.toFixed(2)) || "0.00") + " ", 1),
                          s[32] || (s[32] = e("span", { class: "text-gray-400" }, "/", -1)),
                          C(" $" + o((wt = (xt = i.group) == null ? void 0 : xt.monthly_limit_usd) == null ? void 0 : wt.toFixed(2)), 1)
                        ])
                      ]),
                      i.monthly_window_start ? (l(), r("div", hi, [
                        s[33] || (s[33] = e("svg", {
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
                        e("span", null, o(We(i.monthly_window_start, "monthly")), 1)
                      ])) : m("", !0)
                    ])) : m("", !0),
                    !((Ct = i.group) != null && Ct.daily_limit_usd) && !((St = i.group) != null && St.weekly_limit_usd) && !(($t = i.group) != null && $t.monthly_limit_usd) ? (l(), r("div", _i, [
                      s[34] || (s[34] = e("span", { class: "text-lg text-zo-signal-600 dark:text-zo-signal-400" }, "∞", -1)),
                      e("span", ki, o(n(t)("admin.subscriptions.unlimited")), 1)
                    ])) : m("", !0)
                  ])
                ];
              }),
              "cell-expires_at": w(({ value: i }) => [
                i ? (l(), r("div", xi, [
                  e("span", {
                    class: ae([
                      "text-sm",
                      vs(i) ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-gray-700 dark:text-gray-300"
                    ])
                  }, o(n(Mt)(i)), 3),
                  (l(!0), r(U, null, J([bs(i)], (f) => (l(), r(U, {
                    key: f ?? "expired"
                  }, [
                    f ? (l(), r("div", wi, o(f), 1)) : m("", !0)
                  ], 64))), 128))
                ])) : (l(), r("span", Ci, o(n(t)("admin.subscriptions.noExpiration")), 1))
              ]),
              "cell-status": w(({ value: i }) => [
                e("span", {
                  class: ae([
                    "badge",
                    i === "active" ? "badge-success" : i === "expired" ? "badge-warning" : "badge-danger"
                  ])
                }, o(n(t)(`admin.subscriptions.status.${i}`)), 3)
              ]),
              "cell-actions": w(({ row: i }) => {
                var f;
                return [
                  e("div", Si, [
                    i.status === "active" || i.status === "expired" ? (l(), r("button", {
                      key: 0,
                      onClick: (K) => os(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    }, [
                      y(F, {
                        name: "calendar",
                        size: "sm"
                      }),
                      e("span", zi, o(n(t)("admin.subscriptions.adjust")), 1)
                    ], 8, $i)) : m("", !0),
                    i.status === "active" ? (l(), r("button", {
                      key: 1,
                      onClick: (K) => ms(i),
                      disabled: Ve.value && ((f = ve.value) == null ? void 0 : f.id) === i.id,
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-alert-50 hover:text-zo-alert-600 dark:hover:bg-zo-alert-900/20 dark:hover:text-zo-alert-400 disabled:cursor-not-allowed disabled:opacity-50"
                    }, [
                      y(F, {
                        name: "refresh",
                        size: "sm"
                      }),
                      e("span", Mi, o(n(t)("admin.subscriptions.resetQuota")), 1)
                    ], 8, Ti)) : m("", !0),
                    i.status === "active" ? (l(), r("button", {
                      key: 2,
                      onClick: (K) => rs(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    }, [
                      y(F, {
                        name: "ban",
                        size: "sm"
                      }),
                      e("span", Ei, o(n(t)("admin.subscriptions.revoke")), 1)
                    ], 8, Di)) : m("", !0),
                    i.status === "revoked" ? (l(), r("button", {
                      key: 3,
                      onClick: (K) => ds(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-signal-50 hover:text-zo-signal-600 dark:hover:bg-zo-signal-900/20 dark:hover:text-zo-signal-400"
                    }, [
                      y(F, {
                        name: "refresh",
                        size: "sm"
                      }),
                      e("span", Ui, o(n(t)("admin.subscriptions.restore")), 1)
                    ], 8, Ri)) : m("", !0)
                  ])
                ];
              }),
              empty: w(() => [
                y(Ds, {
                  title: n(t)("admin.subscriptions.noSubscriptionsYet"),
                  description: n(t)("admin.subscriptions.assignFirstSubscription"),
                  "action-text": n(t)("admin.subscriptions.assignSubscription"),
                  onAction: s[11] || (s[11] = (i) => Ae.value = !0)
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading", "selected-keys"])
          ]),
          pagination: w(() => [
            O.total > 0 ? (l(), se($s, {
              key: 0,
              page: O.page,
              total: O.total,
              "page-size": O.page_size,
              "onUpdate:page": ss,
              "onUpdate:pageSize": as
            }, null, 8, ["page", "total", "page-size"])) : m("", !0)
          ]),
          _: 1
        }),
        Ee.value !== null ? (l(), se(ra, {
          key: 0,
          show: !0,
          action: Ee.value,
          subscriptions: it.value,
          onClose: s[12] || (s[12] = (i) => Ee.value = null),
          onCompleted: Bt
        }, null, 8, ["action", "subscriptions"])) : m("", !0),
        y(Xe, {
          show: Ae.value,
          title: n(t)("admin.subscriptions.assignSubscription"),
          width: "normal",
          "show-close-button": !x.value,
          "close-on-escape": !x.value,
          onClose: He
        }, {
          footer: w(() => [
            e("div", rn, [
              e("button", {
                onClick: He,
                type: "button",
                disabled: x.value,
                class: "btn btn-secondary"
              }, o(G.value ? n(t)("common.close") : n(t)("common.cancel")), 9, un),
              e("button", {
                type: "submit",
                form: "assign-subscription-form",
                disabled: x.value || Q.value && M.value.length === 0,
                class: "btn btn-primary"
              }, [
                x.value ? (l(), r("svg", cn, [...s[35] || (s[35] = [
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
                ])])) : m("", !0),
                C(" " + o(x.value ? n(t)("admin.subscriptions.assigning") : n(t)("admin.subscriptions.assign")), 1)
              ], 8, dn)
            ])
          ]),
          default: w(() => [
            e("form", {
              id: "assign-subscription-form",
              onSubmit: Oe(ns, ["prevent"]),
              class: "space-y-5"
            }, [
              e("label", Ai, [
                de(e("input", {
                  "onUpdate:modelValue": s[13] || (s[13] = (i) => Q.value = i),
                  type: "checkbox",
                  disabled: x.value,
                  onChange: ts
                }, null, 40, Ii), [
                  [At, Q.value]
                ]),
                C(" " + o(n(t)("admin.subscriptions.batchAssign.enable")), 1)
              ]),
              Q.value ? (l(), r("p", Fi, o(n(t)("admin.subscriptions.batchAssign.hint")), 1)) : m("", !0),
              e("div", null, [
                e("label", ji, o(n(t)("admin.subscriptions.form.user")), 1),
                e("div", Vi, [
                  de(e("input", {
                    "onUpdate:modelValue": s[14] || (s[14] = (i) => X.value = i),
                    type: "text",
                    disabled: x.value || Q.value && M.value.length >= 100,
                    class: "input pr-8",
                    placeholder: n(t)("admin.usage.searchUserPlaceholder"),
                    onInput: Xt,
                    onFocus: s[15] || (s[15] = (i) => be.value = !0)
                  }, null, 40, Ni), [
                    [Me, X.value]
                  ]),
                  re.value ? (l(), r("button", {
                    key: 0,
                    onClick: nt,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }, [
                    y(F, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ])) : m("", !0),
                  be.value && (te.value.length > 0 || X.value) ? (l(), r("div", Oi, [
                    Be.value ? (l(), r("div", qi, o(n(t)("common.loading")), 1)) : te.value.length === 0 && X.value ? (l(), r("div", Pi, o(n(t)("common.noOptionsFound")), 1)) : m("", !0),
                    (l(!0), r(U, null, J(te.value, (i) => (l(), r("button", {
                      key: i.id,
                      type: "button",
                      disabled: x.value || Q.value && M.value.some((f) => f.id === i.id),
                      onClick: (f) => es(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 disabled:opacity-50 dark:hover:bg-dark-700"
                    }, [
                      e("span", Li, o(i.email), 1),
                      e("span", Hi, "#" + o(i.id), 1)
                    ], 8, Bi))), 128))
                  ])) : m("", !0)
                ]),
                Q.value && M.value.length > 0 ? (l(), r("div", Qi, [
                  e("p", Gi, o(n(t)("admin.subscriptions.batchAssign.selected", { count: M.value.length })), 1),
                  e("ul", Ki, [
                    (l(!0), r(U, null, J(M.value, (i) => (l(), r("li", {
                      key: i.id,
                      class: "flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-dark-700"
                    }, [
                      e("span", Wi, [
                        C(o(i.email) + " ", 1),
                        e("span", Ji, "#" + o(i.id), 1)
                      ]),
                      e("button", {
                        type: "button",
                        disabled: x.value,
                        "aria-label": n(t)("admin.subscriptions.batchAssign.removeUser", { email: i.email }),
                        onClick: (f) => M.value = M.value.filter((K) => K.id !== i.id)
                      }, [
                        y(F, {
                          name: "x",
                          size: "sm"
                        })
                      ], 8, Yi)
                    ]))), 128))
                  ])
                ])) : m("", !0)
              ]),
              e("div", null, [
                e("label", Xi, o(n(t)("admin.subscriptions.form.group")), 1),
                y(Ne, {
                  modelValue: S.group_id,
                  "onUpdate:modelValue": s[16] || (s[16] = (i) => S.group_id = i),
                  disabled: x.value,
                  options: Qt.value,
                  placeholder: n(t)("admin.subscriptions.selectGroup")
                }, {
                  selected: w(({ option: i }) => [
                    i ? (l(), se(Ze, {
                      key: 0,
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (l(), r("span", Zi, o(n(t)("admin.subscriptions.selectGroup")), 1))
                  ]),
                  option: w(({ option: i, selected: f }) => [
                    y(ha, {
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate,
                      description: i.description,
                      selected: f
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "description", "selected"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled", "options", "placeholder"]),
                e("p", en, o(n(t)("admin.subscriptions.groupHint")), 1)
              ]),
              e("div", null, [
                e("label", tn, o(n(t)("admin.subscriptions.form.validityDays")), 1),
                de(e("input", {
                  "onUpdate:modelValue": s[17] || (s[17] = (i) => S.validity_days = i),
                  type: "number",
                  min: "1",
                  max: "36500",
                  step: "1",
                  disabled: x.value,
                  class: "input"
                }, null, 8, sn), [
                  [
                    Me,
                    S.validity_days,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", an, o(n(t)("admin.subscriptions.validityHint")), 1)
              ]),
              G.value ? (l(), r("div", nn, [
                e("p", null, o(n(t)("admin.subscriptions.batchAssign.result", { success: G.value.success_count, failed: G.value.failed_count })), 1),
                G.value.errors.length ? (l(), r("ul", on, [
                  (l(!0), r(U, null, J(G.value.errors, (i, f) => (l(), r("li", { key: f }, o(i), 1))), 128))
                ])) : m("", !0),
                G.value.failed_count > 0 ? (l(), r("p", ln, o(n(t)("admin.subscriptions.batchAssign.retryHint")), 1)) : m("", !0)
              ])) : m("", !0)
            ], 32)
          ]),
          _: 1
        }, 8, ["show", "title", "show-close-button", "close-on-escape"]),
        y(Xe, {
          show: Le.value,
          title: n(t)("admin.subscriptions.adjustSubscription"),
          width: "narrow",
          onClose: Qe
        }, {
          footer: w(() => [
            q.value ? (l(), r("div", wn, [
              e("button", {
                onClick: Qe,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(t)("common.cancel")), 1),
              e("button", {
                type: "submit",
                form: "extend-subscription-form",
                disabled: x.value,
                class: "btn btn-primary"
              }, o(x.value ? n(t)("admin.subscriptions.adjusting") : n(t)("admin.subscriptions.adjust")), 9, Cn)
            ])) : m("", !0)
          ]),
          default: w(() => {
            var i;
            return [
              q.value ? (l(), r("form", {
                key: 0,
                id: "extend-subscription-form",
                onSubmit: Oe(ls, ["prevent"]),
                class: "space-y-5"
              }, [
                e("div", mn, [
                  e("p", pn, [
                    C(o(n(t)("admin.subscriptions.adjustingFor")) + " ", 1),
                    e("span", bn, o((i = q.value.user) == null ? void 0 : i.email), 1)
                  ]),
                  e("p", vn, [
                    C(o(n(t)("admin.subscriptions.currentExpiration")) + ": ", 1),
                    e("span", gn, o(q.value.expires_at ? n(Mt)(q.value.expires_at) : n(t)("admin.subscriptions.noExpiration")), 1)
                  ]),
                  q.value.expires_at ? (l(), r("p", yn, [
                    C(o(n(t)("admin.subscriptions.remainingDays")) + ": ", 1),
                    e("span", fn, o(ot(q.value.expires_at) ?? 0), 1)
                  ])) : m("", !0)
                ]),
                e("div", null, [
                  e("label", hn, o(n(t)("admin.subscriptions.form.adjustDays")), 1),
                  e("div", _n, [
                    de(e("input", {
                      "onUpdate:modelValue": s[18] || (s[18] = (f) => we.days = f),
                      type: "number",
                      required: "",
                      class: "input text-center",
                      placeholder: n(t)("admin.subscriptions.adjustDaysPlaceholder")
                    }, null, 8, kn), [
                      [
                        Me,
                        we.days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("p", xn, o(n(t)("admin.subscriptions.adjustHint")), 1)
                ])
              ], 32)) : m("", !0)
            ];
          }),
          _: 1
        }, 8, ["show", "title"]),
        y(Ye, {
          show: Ie.value,
          title: n(t)("admin.subscriptions.revokeSubscription"),
          message: n(t)("admin.subscriptions.revokeConfirm", { user: (Ce = (E = ke.value) == null ? void 0 : E.user) == null ? void 0 : Ce.email }),
          "confirm-text": n(t)("admin.subscriptions.revoke"),
          "cancel-text": n(t)("common.cancel"),
          danger: !0,
          onConfirm: us,
          onCancel: s[19] || (s[19] = (i) => Ie.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        y(Ye, {
          show: Fe.value,
          title: n(t)("admin.subscriptions.restoreSubscription"),
          message: n(t)("admin.subscriptions.restoreConfirm", { user: (ut = (rt = xe.value) == null ? void 0 : rt.user) == null ? void 0 : ut.email }),
          "confirm-text": n(t)("admin.subscriptions.restore"),
          "cancel-text": n(t)("common.cancel"),
          onConfirm: cs,
          onCancel: s[20] || (s[20] = (i) => Fe.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        y(Ye, {
          show: je.value,
          title: n(t)("admin.subscriptions.resetQuotaTitle"),
          message: n(t)("admin.subscriptions.resetQuotaConfirm", { user: (ct = (dt = ve.value) == null ? void 0 : dt.user) == null ? void 0 : ct.email }),
          "confirm-text": n(t)("admin.subscriptions.resetQuota"),
          "cancel-text": n(t)("common.cancel"),
          onConfirm: ps,
          onCancel: s[21] || (s[21] = (i) => je.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        (l(), se(ws, { to: "body" }, [
          y(xs, { name: "modal" }, {
            default: w(() => [
              g.value ? (l(), r("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4",
                onMousedown: s[26] || (s[26] = Oe((i) => g.value = !1, ["self"]))
              }, [
                e("div", {
                  class: "fixed inset-0 bg-black/50",
                  onClick: s[22] || (s[22] = (i) => g.value = !1)
                }),
                e("div", Sn, [
                  e("button", {
                    type: "button",
                    class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                    onClick: s[23] || (s[23] = (i) => g.value = !1)
                  }, [...s[36] || (s[36] = [
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
                  e("h2", $n, o(n(t)("admin.subscriptions.guide.title")), 1),
                  e("p", zn, o(n(t)("admin.subscriptions.guide.subtitle")), 1),
                  e("div", Tn, [
                    e("h3", Mn, [
                      s[37] || (s[37] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "1", -1)),
                      C(" " + o(n(t)("admin.subscriptions.guide.step1.title")), 1)
                    ]),
                    e("ol", Dn, [
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line1")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line2")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step1.line3")), 1)
                    ]),
                    e("div", En, [
                      y(I, {
                        to: "/admin/groups",
                        onClick: s[24] || (s[24] = (i) => g.value = !1),
                        class: "inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, {
                        default: w(() => [
                          C(o(n(t)("admin.subscriptions.guide.step1.link")) + " ", 1),
                          y(F, {
                            name: "arrowRight",
                            size: "xs"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  e("div", Rn, [
                    e("h3", Un, [
                      s[38] || (s[38] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "2", -1)),
                      C(" " + o(n(t)("admin.subscriptions.guide.step2.title")), 1)
                    ]),
                    e("ol", An, [
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line1")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line2")), 1),
                      e("li", null, o(n(t)("admin.subscriptions.guide.step2.line3")), 1)
                    ])
                  ]),
                  e("div", In, [
                    e("h3", Fn, [
                      s[39] || (s[39] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "3", -1)),
                      C(" " + o(n(t)("admin.subscriptions.guide.step3.title")), 1)
                    ]),
                    e("div", jn, [
                      e("table", Vn, [
                        e("tbody", null, [
                          (l(!0), r(U, null, J(p.value, (i, f) => (l(), r("tr", {
                            key: f,
                            class: "border-b border-gray-100 dark:border-dark-700 last:border-0"
                          }, [
                            e("td", Nn, o(i.action), 1),
                            e("td", On, o(i.desc), 1)
                          ]))), 128))
                        ])
                      ])
                    ])
                  ]),
                  e("div", qn, o(n(t)("admin.subscriptions.guide.tip")), 1),
                  e("div", Pn, [
                    e("button", {
                      type: "button",
                      class: "btn btn-primary btn-sm",
                      onClick: s[25] || (s[25] = (i) => g.value = !1)
                    }, o(n(t)("common.close")), 1)
                  ])
                ])
              ], 32)) : m("", !0)
            ]),
            _: 1
          })
        ]))
      ], 64);
    };
  }
}), Xn = /* @__PURE__ */ Ft(Bn, [["__scopeId", "data-v-97024dd3"]]);
export {
  Xn as default
};
