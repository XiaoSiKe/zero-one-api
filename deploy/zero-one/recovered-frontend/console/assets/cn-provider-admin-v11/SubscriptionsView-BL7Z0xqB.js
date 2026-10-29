import { d as Ms, c as As, w as yt, B as te, i as n, E as k, s as F, e as l, g as s, h as o, f as r, p as W, F as R, m as de, v as Ue, n as d, z as Oe, q as ae, a as p, a4 as Cs, l as S, H as Rs, r as ue, u as ft, b as _t, o as ht, j as g, P as xt, T as kt, L as Ss, _ as M, x as Je, y as wt } from "./cnProviderAdminLeaf-C3ObTkBL.js";
import { b as K, _ as Ye, S as Ne, G as Ct } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DZ8D1X4J.js";
import { u as St } from "./useTableSelection-DJW-l34P.js";
import { _ as Xe } from "./BaseDialog.vue_vue_type_script_setup_true_lang-BFnaBLr5.js";
import { d as $s } from "./format-DK49hlW4.js";
import { g as $t, P as Tt, D as Dt } from "./Pagination-B2nllCXv.js";
import { T as Ut } from "./TablePageLayout-ctQ2q2qU.js";
import { _ as zt } from "./EmptyState.vue_vue_type_script_setup_true_lang-DPRPQ30t.js";
import { _ as Ts } from "./GroupBadge.vue_vue_type_script_setup_true_lang-WYEM3nbC.js";
import { G as Et } from "./GroupOptionItem-BzuBC-wu.js";
const Ze = /* @__PURE__ */ new Map();
function Mt() {
  var b;
  try {
    const e = JSON.parse(((b = globalThis.localStorage) == null ? void 0 : b.getItem("auth_user")) ?? "null"), c = e == null ? void 0 : e.id;
    return typeof c == "number" && Number.isSafeInteger(c) && c > 0 ? c : null;
  } catch {
    return null;
  }
}
function At(b) {
  var e;
  try {
    return ((e = globalThis.sessionStorage) == null ? void 0 : e.getItem(b)) ?? null;
  } catch {
    return null;
  }
}
function Fs(b, e) {
  var c, y;
  try {
    e ? (c = globalThis.sessionStorage) == null || c.setItem(b, e) : (y = globalThis.sessionStorage) == null || y.removeItem(b);
  } catch {
  }
}
function Rt(b) {
  var I, P;
  const e = {
    subscription_ids: [...new Set(b.subscription_ids)].sort((z, X) => z - X),
    action: b.action
  };
  b.action === "extend" && (e.days = b.days), b.action === "reset_quota" && (e.daily = !!b.daily, e.weekly = !!b.weekly, e.monthly = !!b.monthly);
  const c = Mt(), y = c ? `sub2api:admin:subscription-bulk:${c}:${JSON.stringify(e)}` : null;
  let m = y ? Ze.get(y) ?? At(y) : null;
  const w = !!m;
  if (!m) {
    const z = ((P = (I = globalThis.crypto) == null ? void 0 : I.randomUUID) == null ? void 0 : P.call(I)) ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    m = `subscription-bulk-${c ?? "unknown"}-${z}`;
  }
  return y && (Ze.set(y, m), Fs(y, m)), { request: e, key: m, storageKey: y, outcomeUncertain: w };
}
function Ds(b) {
  b.storageKey && (Ze.delete(b.storageKey), Fs(b.storageKey, null));
}
const Ft = { class: "mb-2 text-sm font-medium text-gray-900 dark:text-gray-100" }, It = { class: "max-h-48 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-600" }, jt = { class: "break-all text-gray-900 dark:text-gray-100" }, Vt = { class: "break-words text-xs text-gray-500 dark:text-gray-400" }, Nt = {
  key: 0,
  class: "ml-2"
}, Ot = ["disabled"], qt = { key: 0 }, Pt = {
  for: "bulk-subscription-days",
  class: "input-label"
}, Lt = ["disabled", "placeholder"], Ht = {
  id: "bulk-subscription-days-hint",
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Bt = { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, Qt = { class: "flex flex-wrap gap-5" }, Gt = ["onUpdate:modelValue", "name", "disabled"], Kt = { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt = {
  key: 2,
  class: "rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
}, Jt = {
  key: 0,
  role: "alert",
  class: "text-sm text-red-600 dark:text-red-400"
}, Yt = {
  key: 1,
  role: "alert",
  class: "space-y-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300"
}, Xt = { key: 0 }, Zt = {
  key: 2,
  "aria-live": "polite",
  class: "space-y-3"
}, ea = { class: "rounded-lg bg-gray-50 p-3 text-sm font-medium text-gray-900 dark:bg-dark-700 dark:text-gray-100" }, sa = {
  key: 0,
  class: "max-h-48 space-y-2 overflow-y-auto"
}, ta = { class: "break-all font-medium" }, aa = { class: "mt-1 break-words" }, ia = { class: "flex justify-end gap-3" }, na = ["disabled"], oa = ["disabled"], la = /* @__PURE__ */ Ms({
  __name: "BulkSubscriptionActionDialog",
  props: {
    show: { type: Boolean },
    action: {},
    subscriptions: {}
  },
  emits: ["close", "completed"],
  setup(b, { emit: e }) {
    const c = b, y = e, { t: m } = As(), w = ["daily", "weekly", "monthly"], I = p(30), P = ue({ daily: !0, weekly: !0, monthly: !0 }), z = p(!1), X = p(""), O = Cs(null), $ = Cs(null), J = p([]), ye = p(null), Z = F(() => ye.value ?? c.action), ie = F(() => z.value || !!$.value || !!O.value), ce = F(() => !z.value), ze = F(() => {
      var _;
      return ((_ = O.value) == null ? void 0 : _.results.filter((h) => !h.success)) ?? [];
    }), ee = F(() => {
      if (J.value.length === 0) return m("admin.subscriptions.bulk.selectionRequired");
      if (J.value.length > 100) return m("admin.subscriptions.bulk.selectionLimit");
      if (Z.value === "extend") {
        const _ = Number(I.value);
        if (!Number.isInteger(_) || _ === 0 || Math.abs(_) > 36500)
          return m("admin.subscriptions.bulk.invalidDays");
      }
      return Z.value === "reset_quota" && !w.some((_) => P[_]) ? m("admin.subscriptions.bulk.selectWindow") : "";
    });
    yt(() => c.subscriptions, (_) => {
      ie.value || (J.value = _.map((h) => {
        var v, L;
        return {
          id: h.id,
          email: (v = h.user) == null ? void 0 : v.email,
          group: (L = h.group) == null ? void 0 : L.name,
          groupId: h.group_id
        };
      }));
    }, { immediate: !0 });
    function me() {
      ce.value && y("close");
    }
    function qe(_) {
      const h = J.value.find((v) => v.id === _);
      return h != null && h.email ? `${h.email} · #${_}` : `#${_}`;
    }
    async function ne() {
      var h, v, L;
      if (z.value || O.value) return;
      if (!$.value) {
        if (ee.value) return;
        const H = {
          subscription_ids: J.value.map((D) => D.id),
          action: c.action
        };
        H.action === "extend" && (H.days = Number(I.value)), H.action === "reset_quota" && Object.assign(H, { ...P }), $.value = Rt(H), ye.value = H.action;
      }
      const _ = $.value;
      z.value = !0, X.value = "";
      try {
        O.value = await K.subscriptions.bulkAction(_.request, _.key), Ds(_), $.value = null, y("completed", O.value);
      } catch (H) {
        const D = H;
        X.value = (D == null ? void 0 : D.message) || ((v = (h = D == null ? void 0 : D.response) == null ? void 0 : h.data) == null ? void 0 : v.message) || m("admin.subscriptions.bulk.requestFailed");
        const q = (D == null ? void 0 : D.status) ?? ((L = D == null ? void 0 : D.response) == null ? void 0 : L.status);
        !_.outcomeUncertain && q && q >= 400 && q < 500 && q !== 408 && q !== 409 ? (Ds(_), $.value = null, ye.value = null) : _.outcomeUncertain = !0;
      } finally {
        z.value = !1;
      }
    }
    return (_, h) => (l(), te(Xe, {
      show: b.show,
      title: n(m)(`admin.subscriptions.bulk.${Z.value}`),
      width: "normal",
      "close-on-escape": ce.value,
      "show-close-button": ce.value,
      onClose: me
    }, {
      footer: k(() => [
        s("div", ia, [
          s("button", {
            type: "button",
            class: "btn btn-secondary",
            disabled: !ce.value,
            onClick: me
          }, o(O.value ? n(m)("common.close") : n(m)("common.cancel")), 9, na),
          O.value ? d("", !0) : (l(), r("button", {
            key: 0,
            type: "submit",
            form: "bulk-subscription-action-form",
            class: ae(["btn", Z.value === "revoke" ? "btn-danger" : "btn-primary"]),
            disabled: z.value || !$.value && !!ee.value
          }, o(z.value ? n(m)("common.processing") : $.value ? n(m)("admin.subscriptions.bulk.retry") : n(m)("admin.subscriptions.bulk.confirm")), 11, oa))
        ])
      ]),
      default: k(() => [
        s("form", {
          id: "bulk-subscription-action-form",
          class: "space-y-4",
          novalidate: "",
          onSubmit: Oe(ne, ["prevent"])
        }, [
          s("div", null, [
            s("p", Ft, o(n(m)("admin.subscriptions.bulk.confirmTargets", { count: J.value.length })), 1),
            s("ul", It, [
              (l(!0), r(R, null, W(J.value, (v) => (l(), r("li", {
                key: v.id,
                class: "px-3 py-2 text-sm"
              }, [
                s("div", jt, o(v.email || `#${v.id}`), 1),
                s("div", Vt, [
                  S(o(v.group || n(m)("admin.subscriptions.bulk.groupFallback", { id: v.groupId })) + " ", 1),
                  v.email ? (l(), r("span", Nt, "#" + o(v.id), 1)) : d("", !0)
                ])
              ]))), 128))
            ])
          ]),
          s("fieldset", {
            disabled: ie.value,
            class: "space-y-3 disabled:opacity-70"
          }, [
            Z.value === "extend" ? (l(), r("div", qt, [
              s("label", Pt, o(n(m)("admin.subscriptions.form.adjustDays")), 1),
              de(s("input", {
                id: "bulk-subscription-days",
                "onUpdate:modelValue": h[0] || (h[0] = (v) => I.value = v),
                type: "number",
                min: "-36500",
                max: "36500",
                step: "1",
                class: "input",
                disabled: ie.value,
                placeholder: n(m)("admin.subscriptions.adjustDaysPlaceholder"),
                "aria-describedby": "bulk-subscription-days-hint"
              }, null, 8, Lt), [
                [
                  Ue,
                  I.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              s("p", Ht, o(n(m)("admin.subscriptions.bulk.extendHint")), 1)
            ])) : Z.value === "reset_quota" ? (l(), r(R, { key: 1 }, [
              s("legend", Bt, o(n(m)("admin.subscriptions.bulk.resetWindows")), 1),
              s("div", Qt, [
                (l(), r(R, null, W(w, (v) => s("label", {
                  key: v,
                  class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                }, [
                  de(s("input", {
                    "onUpdate:modelValue": (L) => P[v] = L,
                    name: v,
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                    disabled: ie.value
                  }, null, 8, Gt), [
                    [Rs, P[v]]
                  ]),
                  S(" " + o(n(m)(`admin.subscriptions.${v}`)), 1)
                ])), 64))
              ]),
              s("p", Kt, o(n(m)("admin.subscriptions.bulk.resetHint")), 1)
            ], 64)) : (l(), r("p", Wt, o(n(m)(`admin.subscriptions.bulk.${Z.value}Hint`)), 1))
          ], 8, Ot),
          ee.value && !ie.value ? (l(), r("p", Jt, o(ee.value), 1)) : d("", !0),
          X.value ? (l(), r("div", Yt, [
            s("p", null, o(X.value), 1),
            $.value ? (l(), r("p", Xt, o(n(m)("admin.subscriptions.bulk.retryHint")), 1)) : d("", !0)
          ])) : d("", !0),
          O.value ? (l(), r("div", Zt, [
            s("p", ea, o(n(m)("admin.subscriptions.bulk.result", { success: O.value.success_count, failed: O.value.failed_count })), 1),
            ze.value.length ? (l(), r("ul", sa, [
              (l(!0), r(R, null, W(ze.value, (v) => (l(), r("li", {
                key: v.subscription_id,
                class: "rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300"
              }, [
                s("p", ta, o(qe(v.subscription_id)), 1),
                s("p", aa, o(v.error || n(m)("admin.subscriptions.bulk.itemFailed")), 1)
              ]))), 128))
            ])) : d("", !0)
          ])) : d("", !0)
        ], 32)
      ]),
      _: 1
    }, 8, ["show", "title", "close-on-escape", "show-close-button"]));
  }
}), es = 1440 * 60 * 1e3;
function ra(b) {
  if (!b.starts_at || !b.expires_at) return !1;
  const e = new Date(b.starts_at).getTime(), c = new Date(b.expires_at).getTime();
  return !Number.isFinite(e) || !Number.isFinite(c) ? !1 : c <= e + es;
}
function Us(b, e = /* @__PURE__ */ new Date()) {
  const c = b instanceof Date ? b.getTime() : new Date(b).getTime(), y = e.getTime();
  if (!Number.isFinite(c) || !Number.isFinite(y)) return null;
  const m = c - y;
  if (m <= 0) return null;
  const w = Math.floor(m / (1e3 * 60)), I = Math.floor(w / 1440), P = Math.floor(w % 1440 / 60), z = w % 60;
  return { days: I, hours: P, minutes: z };
}
function ua(b, e = /* @__PURE__ */ new Date()) {
  const c = b instanceof Date ? b.getTime() : new Date(b).getTime(), y = e.getTime();
  if (!Number.isFinite(c) || !Number.isFinite(y)) return null;
  const m = c - y;
  if (m <= 0) return null;
  if (m >= es)
    return { unit: "days", days: Math.ceil(m / es) };
  const w = Math.ceil(m / (60 * 1e3));
  return {
    unit: "hoursMinutes",
    hours: Math.floor(w / 60),
    minutes: w % 60
  };
}
const da = { class: "flex flex-wrap items-start justify-between gap-4" }, ca = { class: "flex flex-1 flex-wrap items-center gap-3" }, ma = {
  class: "relative w-full sm:w-64",
  "data-filter-user-search": ""
}, pa = ["placeholder"], ba = ["title"], va = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, ga = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, ya = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, fa = ["onClick"], _a = { class: "font-medium text-gray-900 dark:text-white" }, ha = { class: "ml-2 text-gray-500 dark:text-gray-400" }, xa = { class: "w-full sm:w-40" }, ka = { class: "w-full sm:w-48" }, wa = { class: "w-full sm:w-40" }, Ca = { class: "ml-auto flex flex-wrap items-center justify-end gap-3" }, Sa = ["disabled", "title"], $a = ["title"], Ta = { class: "hidden md:inline" }, Da = {
  key: 0,
  class: "absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ua = { class: "p-2" }, za = { class: "mb-2 border-b border-gray-200 pb-2 dark:border-dark-700" }, Ea = { class: "px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400" }, Ma = ["onClick"], Aa = ["title"], Ra = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-primary-200 bg-primary-50 p-3 dark:border-primary-800 dark:bg-primary-900/20",
  "data-test": "subscription-bulk-actions"
}, Fa = { class: "flex flex-wrap items-center gap-2" }, Ia = { class: "mr-2 text-sm font-medium text-primary-800 dark:text-primary-200" }, ja = ["data-test", "disabled", "onClick"], Va = { class: "text-xs text-gray-600 dark:text-gray-400" }, Na = { class: "flex items-center gap-2" }, Oa = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30" }, qa = { class: "text-sm font-medium text-primary-700 dark:text-primary-300" }, Pa = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-dark-500"
}, La = { class: "min-w-[280px] space-y-2" }, Ha = {
  key: 0,
  class: "usage-row"
}, Ba = { class: "flex items-center gap-2" }, Qa = { class: "usage-label" }, Ga = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, Ka = { class: "usage-amount" }, Wa = {
  key: 0,
  class: "reset-info"
}, Ja = {
  key: 1,
  class: "usage-row"
}, Ya = { class: "flex items-center gap-2" }, Xa = { class: "usage-label" }, Za = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, ei = { class: "usage-amount" }, si = {
  key: 0,
  class: "reset-info"
}, ti = {
  key: 2,
  class: "usage-row"
}, ai = { class: "flex items-center gap-2" }, ii = { class: "usage-label" }, ni = { class: "h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-dark-600" }, oi = { class: "usage-amount" }, li = {
  key: 0,
  class: "reset-info"
}, ri = {
  key: 3,
  class: "flex items-center gap-2 rounded-lg bg-zo-signal-50 px-3 py-2 dark:bg-zo-signal-900/20"
}, ui = { class: "text-xs font-medium text-zo-signal-700 dark:text-zo-signal-300" }, di = { key: 0 }, ci = {
  key: 0,
  class: "text-xs text-gray-500"
}, mi = {
  key: 1,
  class: "text-sm text-gray-500"
}, pi = { class: "flex items-center gap-1" }, bi = ["onClick"], vi = { class: "text-xs" }, gi = ["onClick", "disabled"], yi = { class: "text-xs" }, fi = ["onClick"], _i = { class: "text-xs" }, hi = ["onClick"], xi = { class: "text-xs" }, ki = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, wi = ["disabled"], Ci = {
  key: 0,
  class: "input-hint"
}, Si = { class: "input-label" }, $i = {
  class: "relative",
  "data-assign-user-search": ""
}, Ti = ["disabled", "placeholder"], Di = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800"
}, Ui = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, zi = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Ei = ["disabled", "onClick"], Mi = { class: "font-medium text-gray-900 dark:text-white" }, Ai = { class: "ml-2 text-gray-500 dark:text-gray-400" }, Ri = {
  key: 0,
  class: "mt-2 space-y-2",
  "data-test": "assign-users"
}, Fi = { class: "text-sm text-gray-600 dark:text-gray-400" }, Ii = { class: "max-h-40 space-y-1 overflow-y-auto" }, ji = { class: "truncate" }, Vi = { class: "text-gray-500" }, Ni = ["disabled", "aria-label", "onClick"], Oi = { class: "input-label" }, qi = {
  key: 1,
  class: "text-gray-400"
}, Pi = { class: "input-hint" }, Li = { class: "input-label" }, Hi = ["disabled"], Bi = { class: "input-hint" }, Qi = {
  key: 1,
  class: "space-y-2 text-sm",
  role: "status",
  "data-test": "batch-assign-result"
}, Gi = {
  key: 0,
  class: "max-h-40 space-y-1 overflow-y-auto text-red-600 dark:text-red-400"
}, Ki = {
  key: 1,
  class: "input-hint"
}, Wi = { class: "flex justify-end gap-3" }, Ji = ["disabled"], Yi = ["disabled"], Xi = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Zi = { class: "rounded-lg bg-gray-50 p-4 dark:bg-dark-700" }, en = { class: "text-sm text-gray-600 dark:text-gray-400" }, sn = { class: "font-medium text-gray-900 dark:text-white" }, tn = { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, an = { class: "font-medium text-gray-900 dark:text-white" }, nn = {
  key: 0,
  class: "mt-1 text-sm text-gray-600 dark:text-gray-400"
}, on = { class: "font-medium text-gray-900 dark:text-white" }, ln = { class: "input-label" }, rn = { class: "flex items-center gap-2" }, un = ["placeholder"], dn = { class: "input-hint" }, cn = {
  key: 0,
  class: "flex justify-end gap-3"
}, mn = ["disabled"], pn = { class: "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, bn = { class: "mb-4 text-lg font-bold text-gray-900 dark:text-white" }, vn = { class: "mb-5 text-sm text-gray-500 dark:text-gray-400" }, gn = { class: "mb-5" }, yn = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, fn = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, _n = { class: "ml-8 mt-2" }, hn = { class: "mb-5" }, xn = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, kn = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, wn = { class: "mb-5" }, Cn = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, Sn = { class: "ml-8 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, $n = { class: "w-full text-sm" }, Tn = { class: "whitespace-nowrap bg-gray-50 px-3 py-2 font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-300" }, Dn = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Un = { class: "rounded-lg bg-blue-50 p-3 text-xs text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" }, zn = { class: "mt-4 text-right" }, zs = "subscription-user-column-mode", Es = "subscription-hidden-columns", En = /* @__PURE__ */ Ms({
  __name: "SubscriptionsView",
  setup(b) {
    const { t: e } = As(), c = ft(), y = p(!1), m = F(() => [
      { action: e("admin.subscriptions.guide.actions.adjust"), desc: e("admin.subscriptions.guide.actions.adjustDesc") },
      { action: e("admin.subscriptions.guide.actions.resetQuota"), desc: e("admin.subscriptions.guide.actions.resetQuotaDesc") },
      { action: e("admin.subscriptions.guide.actions.revoke"), desc: e("admin.subscriptions.guide.actions.revokeDesc") }
    ]), w = p("email"), I = () => {
      try {
        const a = localStorage.getItem(zs);
        (a === "email" || a === "username") && (w.value = a);
      } catch (a) {
        console.error("Failed to load user column mode:", a);
      }
    }, P = () => {
      try {
        localStorage.setItem(zs, w.value);
      } catch (a) {
        console.error("Failed to save user column mode:", a);
      }
    }, z = (a) => {
      w.value = a, P();
    }, X = F(() => [
      {
        key: "user",
        label: w.value === "email" ? e("admin.subscriptions.columns.user") : e("admin.users.columns.username"),
        sortable: !1
      },
      { key: "group", label: e("admin.subscriptions.columns.group"), sortable: !1 },
      { key: "usage", label: e("admin.subscriptions.columns.usage"), sortable: !1 },
      { key: "expires_at", label: e("admin.subscriptions.columns.expires"), sortable: !0 },
      { key: "status", label: e("admin.subscriptions.columns.status"), sortable: !0 },
      { key: "actions", label: e("admin.subscriptions.columns.actions"), sortable: !1 }
    ]), O = F(
      () => X.value.filter((a) => a.key !== "user" && a.key !== "actions")
    ), $ = ue(/* @__PURE__ */ new Set()), J = [], ye = () => {
      try {
        const a = localStorage.getItem(Es);
        a ? JSON.parse(a).forEach((u) => $.add(u)) : J.forEach((t) => $.add(t));
      } catch (a) {
        console.error("Failed to load saved columns:", a), J.forEach((t) => $.add(t));
      }
    }, Z = () => {
      try {
        localStorage.setItem(Es, JSON.stringify([...$]));
      } catch (a) {
        console.error("Failed to save columns:", a);
      }
    }, ie = (a) => {
      $.has(a) ? $.delete(a) : $.add(a), Z();
    }, ce = (a) => !$.has(a), ze = F(
      () => X.value.filter(
        (a) => a.key === "user" || a.key === "actions" || !$.has(a.key)
      )
    ), ee = p(!1), me = p(null), qe = F(() => [
      { value: "", label: e("admin.subscriptions.allStatus") },
      { value: "active", label: e("admin.subscriptions.status.active") },
      { value: "expired", label: e("admin.subscriptions.status.expired") },
      { value: "revoked", label: e("admin.subscriptions.status.revoked") }
    ]), ne = p([]), _ = p([]), h = p(!1);
    let v = null;
    const { selectedIds: L, selectedCount: H, setSelectedIds: D, clear: q, removeMany: Is } = St({ rows: ne, getId: (a) => a.id }), js = ["extend", "reset_quota", "revoke", "restore"], Ee = p(null), ss = p([]), Me = F(() => {
      const a = ne.value.filter((t) => L.value.includes(t.id));
      return {
        extend: a.filter((t) => ["active", "expired"].includes(t.status)),
        reset_quota: a.filter((t) => t.status === "active"),
        revoke: a.filter((t) => t.status === "active"),
        restore: a.filter((t) => t.status === "revoked")
      };
    }), Vs = (a) => e("admin.subscriptions.bulk.selectSubscription", { id: a.id }), Ns = (a) => {
      const t = new Set(ne.value.map((u) => u.id));
      D(a.filter((u) => typeof u == "number" && t.has(u)));
    }, Os = (a) => {
      h.value || Me.value[a].length === 0 || (ss.value = [...Me.value[a]], Ee.value = a);
    }, qs = async (a) => {
      Is(a.results.filter((t) => t.success).map((t) => t.subscription_id)), await N();
    }, oe = p(""), le = p([]), Pe = p(!1), fe = p(!1), pe = p(null);
    let _e = null;
    const Y = p(""), se = p([]), Le = p(!1), be = p(!1), re = p(null), B = p(!1), T = p([]), Q = p(null);
    let he = null;
    const A = ue({
      status: "active",
      group_id: "",
      platform: "",
      user_id: null
    }), Ae = ue({
      sort_by: "created_at",
      sort_order: "desc"
    }), j = ue({
      page: 1,
      page_size: $t(),
      total: 0,
      pages: 0
    }), Re = p(!1), He = p(!1), Fe = p(!1), Ie = p(!1), je = p(!1), x = p(!1), ve = p(null), Ve = p(!1), V = p(null), xe = p(null), ke = p(null), C = ue({
      user_id: null,
      group_id: null,
      validity_days: 30
    }), we = ue({
      days: 30
    }), Ps = F(() => [
      { value: "", label: e("admin.subscriptions.allGroups") },
      ..._.value.map((a) => ({ value: a.id.toString(), label: a.name }))
    ]), Ls = F(() => [
      { value: "", label: e("admin.subscriptions.allPlatforms") },
      ...Ct
    ]), Hs = F(
      () => _.value.filter((a) => a.subscription_type === "subscription" && a.status === "active").map((a) => ({
        value: a.id,
        label: a.name,
        description: a.description,
        platform: a.platform,
        subscriptionType: a.subscription_type,
        rate: a.rate_multiplier
      }))
    ), ge = () => {
      q(), j.page = 1, N();
    }, N = async () => {
      v && v.abort();
      const a = new AbortController();
      v = a;
      const { signal: t } = a;
      h.value = !0;
      try {
        const u = await K.subscriptions.list(
          j.page,
          j.page_size,
          {
            status: A.status || void 0,
            group_id: A.group_id ? parseInt(A.group_id) : void 0,
            platform: A.platform || void 0,
            user_id: A.user_id || void 0,
            sort_by: Ae.sort_by,
            sort_order: Ae.sort_order
          },
          {
            signal: t
          }
        );
        if (t.aborted || v !== a) return;
        ne.value = u.items;
        const E = new Set(u.items.map((U) => U.id));
        D(L.value.filter((U) => E.has(U))), j.total = u.total, j.pages = u.pages;
      } catch (u) {
        if (t.aborted || (u == null ? void 0 : u.name) === "AbortError" || (u == null ? void 0 : u.code) === "ERR_CANCELED")
          return;
        c.showError(e("admin.subscriptions.failedToLoad")), console.error("Error loading subscriptions:", u);
      } finally {
        v === a && (h.value = !1, v = null);
      }
    }, Bs = async () => {
      try {
        _.value = await K.groups.getAll();
      } catch (a) {
        console.error("Error loading groups:", a);
      }
    }, Qs = () => {
      _e && clearTimeout(_e), _e = setTimeout(Gs, 300);
    }, Gs = async () => {
      const a = oe.value.trim();
      if (pe.value && a !== pe.value.email && (pe.value = null, A.user_id = null, ge()), !a) {
        le.value = [];
        return;
      }
      Pe.value = !0;
      try {
        le.value = await K.usage.searchUsers(a);
      } catch (t) {
        console.error("Failed to search users:", t), le.value = [];
      } finally {
        Pe.value = !1;
      }
    }, Ks = (a) => {
      pe.value = a, oe.value = a.email, fe.value = !1, A.user_id = a.id, ge();
    }, Ws = () => {
      pe.value = null, oe.value = "", le.value = [], fe.value = !1, A.user_id = null, ge();
    }, Js = () => {
      re.value && Y.value.trim() !== re.value.email && (re.value = null, C.user_id = null), he && clearTimeout(he), he = setTimeout(Ys, 300);
    }, Ys = async () => {
      const a = Y.value.trim();
      if (!a) {
        se.value = [];
        return;
      }
      Le.value = !0;
      try {
        const t = await K.users.list(1, 30, {
          search: a,
          sort_by: "email",
          sort_order: "asc"
        });
        se.value = t.items;
      } catch (t) {
        console.error("Failed to search users:", t), se.value = [];
      } finally {
        Le.value = !1;
      }
    }, Xs = (a) => {
      if (!x.value) {
        if (B.value) {
          T.value.length < 100 && !T.value.some((t) => t.id === a.id) && (T.value = [...T.value, a]), Y.value = "", se.value = [], be.value = !1;
          return;
        }
        re.value = a, Y.value = a.email, be.value = !1, C.user_id = a.id;
      }
    }, ts = () => {
      re.value = null, Y.value = "", se.value = [], C.user_id = null;
    }, Zs = () => {
      ts(), T.value = [], Q.value = null;
    }, et = (a) => {
      q(), j.page = a, N();
    }, st = (a) => {
      q(), j.page_size = a, j.page = 1, N();
    }, tt = (a, t) => {
      q(), Ae.sort_by = a, Ae.sort_order = t, j.page = 1, N();
    }, Be = () => {
      x.value || (Re.value = !1, B.value = !1, T.value = [], Q.value = null, C.user_id = null, C.group_id = null, C.validity_days = 30, re.value = null, Y.value = "", se.value = [], be.value = !1);
    }, at = async () => {
      var a, t;
      if (!x.value) {
        if (B.value ? T.value.length === 0 : !C.user_id) {
          c.showError(e("admin.subscriptions.pleaseSelectUser"));
          return;
        }
        if (!C.group_id) {
          c.showError(e("admin.subscriptions.pleaseSelectGroup"));
          return;
        }
        if (!Number.isInteger(C.validity_days) || C.validity_days < 1 || C.validity_days > 36500) {
          c.showError(e("admin.subscriptions.validityDaysRequired"));
          return;
        }
        x.value = !0;
        try {
          if (B.value) {
            Q.value = await K.subscriptions.bulkAssign({
              user_ids: T.value.map((U) => U.id),
              group_id: C.group_id,
              validity_days: C.validity_days
            });
            const u = Q.value, E = new Set(u.subscriptions.map((U) => U.user_id));
            T.value = T.value.filter((U) => !E.has(U.id)), u.success_count > 0 && (c.showSuccess(e("admin.subscriptions.batchAssign.result", { success: u.success_count, failed: u.failed_count })), await N());
            return;
          }
          await K.subscriptions.assign({
            user_id: C.user_id,
            group_id: C.group_id,
            validity_days: C.validity_days
          }), c.showSuccess(e("admin.subscriptions.subscriptionAssigned")), x.value = !1, Be(), N();
        } catch (u) {
          c.showError(((t = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : t.detail) || e("admin.subscriptions.failedToAssign")), console.error("Error assigning subscription:", u);
        } finally {
          x.value = !1;
        }
      }
    }, it = (a) => {
      V.value = a, we.days = 30, He.value = !0;
    }, Qe = () => {
      He.value = !1, V.value = null;
    }, nt = async () => {
      var a, t;
      if (V.value) {
        if (V.value.expires_at) {
          const u = new Date(V.value.expires_at);
          if (new Date(u.getTime() + we.days * 24 * 60 * 60 * 1e3) <= /* @__PURE__ */ new Date()) {
            c.showError(e("admin.subscriptions.adjustWouldExpire"));
            return;
          }
        }
        x.value = !0;
        try {
          await K.subscriptions.extend(V.value.id, {
            days: we.days
          }), c.showSuccess(e("admin.subscriptions.subscriptionAdjusted")), Qe(), N();
        } catch (u) {
          c.showError(((t = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : t.detail) || e("admin.subscriptions.failedToAdjust")), console.error("Error adjusting subscription:", u);
        } finally {
          x.value = !1;
        }
      }
    }, ot = (a) => {
      xe.value = a, Fe.value = !0;
    }, lt = async () => {
      var a, t;
      if (xe.value)
        try {
          await K.subscriptions.revoke(xe.value.id), c.showSuccess(e("admin.subscriptions.subscriptionRevoked")), Fe.value = !1, xe.value = null, N();
        } catch (u) {
          c.showError(((t = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : t.detail) || e("admin.subscriptions.failedToRevoke")), console.error("Error revoking subscription:", u);
        }
    }, rt = (a) => {
      ke.value = a, Ie.value = !0;
    }, ut = async () => {
      var a, t;
      if (ke.value)
        try {
          await K.subscriptions.restore(ke.value.id), c.showSuccess(e("admin.subscriptions.subscriptionRestored")), Ie.value = !1, ke.value = null, N();
        } catch (u) {
          c.showError(((t = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : t.detail) || e("admin.subscriptions.failedToRestore")), console.error("Error restoring subscription:", u);
        }
    }, dt = (a) => {
      ve.value = a, je.value = !0;
    }, ct = async () => {
      var a, t;
      if (ve.value && !Ve.value) {
        Ve.value = !0;
        try {
          await K.subscriptions.resetQuota(ve.value.id, { daily: !0, weekly: !0, monthly: !0 }), c.showSuccess(e("admin.subscriptions.quotaResetSuccess")), je.value = !1, ve.value = null, await N();
        } catch (u) {
          c.showError(((t = (a = u.response) == null ? void 0 : a.data) == null ? void 0 : t.detail) || e("admin.subscriptions.failedToResetQuota")), console.error("Error resetting quota:", u);
        } finally {
          Ve.value = !1;
        }
      }
    }, as = (a) => {
      const t = /* @__PURE__ */ new Date(), E = new Date(a).getTime() - t.getTime();
      return E < 0 ? null : Math.ceil(E / (1e3 * 60 * 60 * 24));
    }, mt = (a) => {
      const t = ua(a);
      return t ? t.unit === "days" ? e("admin.subscriptions.daysRemaining", { days: t.days }) : t.hours ? e("admin.subscriptions.hoursMinutesRemaining", {
        hours: t.hours,
        minutes: t.minutes
      }) : e("admin.subscriptions.minutesRemaining", { minutes: t.minutes }) : null;
    }, pt = (a) => {
      const t = as(a);
      return t !== null && t <= 7;
    }, Ge = (a, t) => !t || t === 0 ? "0%" : `${Math.min((a ?? 0) / t * 100, 100)}%`, Ke = (a, t) => {
      if (!t || t === 0) return "bg-gray-400";
      const E = (a ?? 0) / t * 100;
      return E >= 90 ? "bg-red-500" : E >= 70 ? "bg-zo-alert-500" : "bg-zo-signal-500";
    }, bt = (a) => a.days > 0 ? e("admin.subscriptions.resetInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? e("admin.subscriptions.resetInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : e("admin.subscriptions.resetInMinutes", { minutes: a.minutes }), vt = (a) => a.days > 0 ? e("admin.subscriptions.quotaEndsInDaysHours", { days: a.days, hours: a.hours }) : a.hours > 0 ? e("admin.subscriptions.quotaEndsInHoursMinutes", { hours: a.hours, minutes: a.minutes }) : e("admin.subscriptions.quotaEndsInMinutes", { minutes: a.minutes }), gt = (a) => {
      if (ra(a) && a.expires_at) {
        const t = Us(a.expires_at);
        return t ? vt(t) : e("admin.subscriptions.windowNotActive");
      }
      return We(a.daily_window_start, "daily");
    }, We = (a, t) => {
      if (!a) return e("admin.subscriptions.windowNotActive");
      const u = new Date(a), E = /* @__PURE__ */ new Date();
      let U;
      switch (t) {
        case "daily":
          U = new Date(u.getTime() + 1440 * 60 * 1e3);
          break;
        case "weekly":
          U = new Date(u.getTime() + 10080 * 60 * 1e3);
          break;
        case "monthly":
          U = new Date(u.getTime() + 720 * 60 * 60 * 1e3);
          break;
      }
      const Ce = Us(U, E);
      return Ce ? bt(Ce) : e("admin.subscriptions.windowNotActive");
    }, is = (a) => {
      const t = a.target;
      t.closest("[data-assign-user-search]") || (be.value = !1), t.closest("[data-filter-user-search]") || (fe.value = !1), me.value && !me.value.contains(t) && (ee.value = !1);
    };
    return _t(() => {
      I(), ye(), N(), Bs(), document.addEventListener("click", is);
    }), ht(() => {
      document.removeEventListener("click", is), _e && clearTimeout(_e), he && clearTimeout(he);
    }), (a, t) => {
      var U, Ce, ns, os, ls, rs;
      const u = Ss("RouterLink"), E = Ss("router-link");
      return l(), r(R, null, [
        g(Ut, null, {
          filters: k(() => [
            s("div", da, [
              s("div", ca, [
                s("div", ma, [
                  g(M, {
                    name: "search",
                    size: "md",
                    class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  }),
                  de(s("input", {
                    "onUpdate:modelValue": t[0] || (t[0] = (i) => oe.value = i),
                    type: "text",
                    placeholder: n(e)("admin.users.searchUsers"),
                    class: "input pl-10 pr-8",
                    onInput: Qs,
                    onFocus: t[1] || (t[1] = (i) => fe.value = !0)
                  }, null, 40, pa), [
                    [Ue, oe.value]
                  ]),
                  pe.value ? (l(), r("button", {
                    key: 0,
                    onClick: Ws,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                    title: n(e)("common.clear")
                  }, [
                    g(M, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ], 8, ba)) : d("", !0),
                  fe.value && (le.value.length > 0 || oe.value) ? (l(), r("div", va, [
                    Pe.value ? (l(), r("div", ga, o(n(e)("common.loading")), 1)) : le.value.length === 0 && oe.value ? (l(), r("div", ya, o(n(e)("common.noOptionsFound")), 1)) : d("", !0),
                    (l(!0), r(R, null, W(le.value, (i) => (l(), r("button", {
                      key: i.id,
                      type: "button",
                      onClick: (f) => Ks(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700"
                    }, [
                      s("span", _a, o(i.email), 1),
                      s("span", ha, "#" + o(i.id), 1)
                    ], 8, fa))), 128))
                  ])) : d("", !0)
                ]),
                s("div", xa, [
                  g(Ne, {
                    modelValue: A.status,
                    "onUpdate:modelValue": t[2] || (t[2] = (i) => A.status = i),
                    options: qe.value,
                    placeholder: n(e)("admin.subscriptions.allStatus"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                s("div", ka, [
                  g(Ne, {
                    modelValue: A.group_id,
                    "onUpdate:modelValue": t[3] || (t[3] = (i) => A.group_id = i),
                    options: Ps.value,
                    placeholder: n(e)("admin.subscriptions.allGroups"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ]),
                s("div", wa, [
                  g(Ne, {
                    "data-testid": "subscription-platform-filter",
                    modelValue: A.platform,
                    "onUpdate:modelValue": t[4] || (t[4] = (i) => A.platform = i),
                    options: Ls.value,
                    placeholder: n(e)("admin.subscriptions.allPlatforms"),
                    onChange: ge
                  }, null, 8, ["modelValue", "options", "placeholder"])
                ])
              ]),
              s("div", Ca, [
                s("button", {
                  onClick: N,
                  disabled: h.value,
                  class: "btn btn-secondary",
                  title: n(e)("common.refresh")
                }, [
                  g(M, {
                    name: "refresh",
                    size: "md",
                    class: ae(h.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, Sa),
                s("div", {
                  class: "relative",
                  ref_key: "columnDropdownRef",
                  ref: me
                }, [
                  s("button", {
                    onClick: t[5] || (t[5] = (i) => ee.value = !ee.value),
                    class: "btn btn-secondary px-2 md:px-3",
                    title: n(e)("admin.users.columnSettings")
                  }, [
                    t[27] || (t[27] = s("svg", {
                      class: "h-4 w-4 md:mr-1.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5"
                    }, [
                      s("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                      })
                    ], -1)),
                    s("span", Ta, o(n(e)("admin.users.columnSettings")), 1)
                  ], 8, $a),
                  ee.value ? (l(), r("div", Da, [
                    s("div", Ua, [
                      s("div", za, [
                        s("div", Ea, o(n(e)("admin.subscriptions.columns.user")), 1),
                        s("button", {
                          onClick: t[6] || (t[6] = (i) => z("email")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          s("span", null, o(n(e)("admin.users.columns.email")), 1),
                          w.value === "email" ? (l(), te(M, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : d("", !0)
                        ]),
                        s("button", {
                          onClick: t[7] || (t[7] = (i) => z("username")),
                          class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                        }, [
                          s("span", null, o(n(e)("admin.users.columns.username")), 1),
                          w.value === "username" ? (l(), te(M, {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "text-primary-500"
                          })) : d("", !0)
                        ])
                      ]),
                      (l(!0), r(R, null, W(O.value, (i) => (l(), r("button", {
                        key: i.key,
                        onClick: (f) => ie(i.key),
                        class: "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                      }, [
                        s("span", null, o(i.label), 1),
                        ce(i.key) ? (l(), te(M, {
                          key: 0,
                          name: "check",
                          size: "sm",
                          class: "text-primary-500"
                        })) : d("", !0)
                      ], 8, Ma))), 128))
                    ])
                  ])) : d("", !0)
                ], 512),
                s("button", {
                  onClick: t[8] || (t[8] = (i) => y.value = !0),
                  class: "btn btn-secondary",
                  title: n(e)("admin.subscriptions.guide.showGuide")
                }, [
                  g(M, {
                    name: "questionCircle",
                    size: "md"
                  })
                ], 8, Aa),
                s("button", {
                  onClick: t[9] || (t[9] = (i) => Re.value = !0),
                  class: "btn btn-primary"
                }, [
                  g(M, {
                    name: "plus",
                    size: "md",
                    class: "mr-2"
                  }),
                  S(" " + o(n(e)("admin.subscriptions.assignSubscription")), 1)
                ])
              ])
            ]),
            n(H) > 0 ? (l(), r("div", Ra, [
              s("div", Fa, [
                s("span", Ia, o(n(e)("admin.subscriptions.bulk.selected", { count: n(H) })), 1),
                (l(), r(R, null, W(js, (i) => s("button", {
                  key: i,
                  type: "button",
                  class: ae(i === "revoke" ? "btn btn-danger btn-sm" : "btn btn-secondary btn-sm"),
                  "data-test": `bulk-${i}`,
                  disabled: h.value || Me.value[i].length === 0,
                  onClick: (f) => Os(i)
                }, o(n(e)(`admin.subscriptions.bulk.${i}`)) + " (" + o(Me.value[i].length) + ") ", 11, ja)), 64)),
                s("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  onClick: t[10] || (t[10] = //@ts-ignore
                  (...i) => n(q) && n(q)(...i))
                }, o(n(e)("admin.subscriptions.bulk.clearSelection")), 1)
              ]),
              s("p", Va, o(n(e)("admin.subscriptions.bulk.selectionHint")), 1)
            ])) : d("", !0)
          ]),
          table: k(() => [
            g(Dt, {
              columns: ze.value,
              data: ne.value,
              loading: h.value,
              "row-key": "id",
              selectable: "",
              "selected-keys": n(L),
              "selection-label": Vs,
              "server-side-sort": !0,
              "default-sort-key": "created_at",
              "default-sort-order": "desc",
              onSort: tt,
              "onUpdate:selectedKeys": Ns
            }, {
              "cell-user": k(({ row: i }) => {
                var f, G, Se, $e;
                return [
                  s("div", Na, [
                    s("div", Oa, [
                      s("span", qa, o(w.value === "email" ? ((G = (f = i.user) == null ? void 0 : f.email) == null ? void 0 : G.charAt(0).toUpperCase()) || "?" : (($e = (Se = i.user) == null ? void 0 : Se.username) == null ? void 0 : $e.charAt(0).toUpperCase()) || "?"), 1)
                    ]),
                    g(u, {
                      to: { path: "/admin/usage", query: { user_id: i.user_id } },
                      class: "rounded font-medium text-gray-900 hover:text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-white dark:hover:text-primary-400 dark:focus-visible:ring-offset-dark-800"
                    }, {
                      default: k(() => {
                        var Te, De;
                        return [
                          S(o(w.value === "email" ? ((Te = i.user) == null ? void 0 : Te.email) || n(e)("admin.redeem.userPrefix", { id: i.user_id }) : ((De = i.user) == null ? void 0 : De.username) || n(e)("admin.redeem.userPrefix", { id: i.user_id })), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ];
              }),
              "cell-group": k(({ row: i }) => [
                i.group ? (l(), te(Ts, {
                  key: 0,
                  name: i.group.name,
                  platform: i.group.platform,
                  "subscription-type": i.group.subscription_type,
                  "rate-multiplier": i.group.rate_multiplier,
                  "show-rate": !1
                }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (l(), r("span", Pa, "-"))
              ]),
              "cell-usage": k(({ row: i }) => {
                var f, G, Se, $e, Te, De, us, ds, cs, ms, ps, bs, vs, gs, ys, fs, _s, hs, xs, ks, ws;
                return [
                  s("div", La, [
                    (f = i.group) != null && f.daily_limit_usd ? (l(), r("div", Ha, [
                      s("div", Ba, [
                        s("span", Qa, o(n(e)("admin.subscriptions.daily")), 1),
                        s("div", Ga, [
                          s("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.daily_usage_usd, (G = i.group) == null ? void 0 : G.daily_limit_usd)]),
                            style: Je({
                              width: Ge(i.daily_usage_usd, (Se = i.group) == null ? void 0 : Se.daily_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        s("span", Ka, [
                          S(" $" + o((($e = i.daily_usage_usd) == null ? void 0 : $e.toFixed(2)) || "0.00") + " ", 1),
                          t[28] || (t[28] = s("span", { class: "text-gray-400" }, "/", -1)),
                          S(" $" + o((De = (Te = i.group) == null ? void 0 : Te.daily_limit_usd) == null ? void 0 : De.toFixed(2)), 1)
                        ])
                      ]),
                      i.daily_window_start ? (l(), r("div", Wa, [
                        t[29] || (t[29] = s("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          s("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        s("span", null, o(gt(i)), 1)
                      ])) : d("", !0)
                    ])) : d("", !0),
                    (us = i.group) != null && us.weekly_limit_usd ? (l(), r("div", Ja, [
                      s("div", Ya, [
                        s("span", Xa, o(n(e)("admin.subscriptions.weekly")), 1),
                        s("div", Za, [
                          s("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.weekly_usage_usd, (ds = i.group) == null ? void 0 : ds.weekly_limit_usd)]),
                            style: Je({
                              width: Ge(i.weekly_usage_usd, (cs = i.group) == null ? void 0 : cs.weekly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        s("span", ei, [
                          S(" $" + o(((ms = i.weekly_usage_usd) == null ? void 0 : ms.toFixed(2)) || "0.00") + " ", 1),
                          t[30] || (t[30] = s("span", { class: "text-gray-400" }, "/", -1)),
                          S(" $" + o((bs = (ps = i.group) == null ? void 0 : ps.weekly_limit_usd) == null ? void 0 : bs.toFixed(2)), 1)
                        ])
                      ]),
                      i.weekly_window_start ? (l(), r("div", si, [
                        t[31] || (t[31] = s("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          s("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        s("span", null, o(We(i.weekly_window_start, "weekly")), 1)
                      ])) : d("", !0)
                    ])) : d("", !0),
                    (vs = i.group) != null && vs.monthly_limit_usd ? (l(), r("div", ti, [
                      s("div", ai, [
                        s("span", ii, o(n(e)("admin.subscriptions.monthly")), 1),
                        s("div", ni, [
                          s("div", {
                            class: ae(["h-1.5 rounded-full transition-all", Ke(i.monthly_usage_usd, (gs = i.group) == null ? void 0 : gs.monthly_limit_usd)]),
                            style: Je({
                              width: Ge(i.monthly_usage_usd, (ys = i.group) == null ? void 0 : ys.monthly_limit_usd)
                            })
                          }, null, 6)
                        ]),
                        s("span", oi, [
                          S(" $" + o(((fs = i.monthly_usage_usd) == null ? void 0 : fs.toFixed(2)) || "0.00") + " ", 1),
                          t[32] || (t[32] = s("span", { class: "text-gray-400" }, "/", -1)),
                          S(" $" + o((hs = (_s = i.group) == null ? void 0 : _s.monthly_limit_usd) == null ? void 0 : hs.toFixed(2)), 1)
                        ])
                      ]),
                      i.monthly_window_start ? (l(), r("div", li, [
                        t[33] || (t[33] = s("svg", {
                          class: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          s("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ], -1)),
                        s("span", null, o(We(i.monthly_window_start, "monthly")), 1)
                      ])) : d("", !0)
                    ])) : d("", !0),
                    !((xs = i.group) != null && xs.daily_limit_usd) && !((ks = i.group) != null && ks.weekly_limit_usd) && !((ws = i.group) != null && ws.monthly_limit_usd) ? (l(), r("div", ri, [
                      t[34] || (t[34] = s("span", { class: "text-lg text-zo-signal-600 dark:text-zo-signal-400" }, "∞", -1)),
                      s("span", ui, o(n(e)("admin.subscriptions.unlimited")), 1)
                    ])) : d("", !0)
                  ])
                ];
              }),
              "cell-expires_at": k(({ value: i }) => [
                i ? (l(), r("div", di, [
                  s("span", {
                    class: ae([
                      "text-sm",
                      pt(i) ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-gray-700 dark:text-gray-300"
                    ])
                  }, o(n($s)(i)), 3),
                  (l(!0), r(R, null, W([mt(i)], (f) => (l(), r(R, {
                    key: f ?? "expired"
                  }, [
                    f ? (l(), r("div", ci, o(f), 1)) : d("", !0)
                  ], 64))), 128))
                ])) : (l(), r("span", mi, o(n(e)("admin.subscriptions.noExpiration")), 1))
              ]),
              "cell-status": k(({ value: i }) => [
                s("span", {
                  class: ae([
                    "badge",
                    i === "active" ? "badge-success" : i === "expired" ? "badge-warning" : "badge-danger"
                  ])
                }, o(n(e)(`admin.subscriptions.status.${i}`)), 3)
              ]),
              "cell-actions": k(({ row: i }) => {
                var f;
                return [
                  s("div", pi, [
                    i.status === "active" || i.status === "expired" ? (l(), r("button", {
                      key: 0,
                      onClick: (G) => it(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    }, [
                      g(M, {
                        name: "calendar",
                        size: "sm"
                      }),
                      s("span", vi, o(n(e)("admin.subscriptions.adjust")), 1)
                    ], 8, bi)) : d("", !0),
                    i.status === "active" ? (l(), r("button", {
                      key: 1,
                      onClick: (G) => dt(i),
                      disabled: Ve.value && ((f = ve.value) == null ? void 0 : f.id) === i.id,
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-alert-50 hover:text-zo-alert-600 dark:hover:bg-zo-alert-900/20 dark:hover:text-zo-alert-400 disabled:cursor-not-allowed disabled:opacity-50"
                    }, [
                      g(M, {
                        name: "refresh",
                        size: "sm"
                      }),
                      s("span", yi, o(n(e)("admin.subscriptions.resetQuota")), 1)
                    ], 8, gi)) : d("", !0),
                    i.status === "active" ? (l(), r("button", {
                      key: 2,
                      onClick: (G) => ot(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    }, [
                      g(M, {
                        name: "ban",
                        size: "sm"
                      }),
                      s("span", _i, o(n(e)("admin.subscriptions.revoke")), 1)
                    ], 8, fi)) : d("", !0),
                    i.status === "revoked" ? (l(), r("button", {
                      key: 3,
                      onClick: (G) => rt(i),
                      class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-zo-signal-50 hover:text-zo-signal-600 dark:hover:bg-zo-signal-900/20 dark:hover:text-zo-signal-400"
                    }, [
                      g(M, {
                        name: "refresh",
                        size: "sm"
                      }),
                      s("span", xi, o(n(e)("admin.subscriptions.restore")), 1)
                    ], 8, hi)) : d("", !0)
                  ])
                ];
              }),
              empty: k(() => [
                g(zt, {
                  title: n(e)("admin.subscriptions.noSubscriptionsYet"),
                  description: n(e)("admin.subscriptions.assignFirstSubscription"),
                  "action-text": n(e)("admin.subscriptions.assignSubscription"),
                  onAction: t[11] || (t[11] = (i) => Re.value = !0)
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading", "selected-keys"])
          ]),
          pagination: k(() => [
            j.total > 0 ? (l(), te(Tt, {
              key: 0,
              page: j.page,
              total: j.total,
              "page-size": j.page_size,
              "onUpdate:page": et,
              "onUpdate:pageSize": st
            }, null, 8, ["page", "total", "page-size"])) : d("", !0)
          ]),
          _: 1
        }),
        Ee.value !== null ? (l(), te(la, {
          key: 0,
          show: !0,
          action: Ee.value,
          subscriptions: ss.value,
          onClose: t[12] || (t[12] = (i) => Ee.value = null),
          onCompleted: qs
        }, null, 8, ["action", "subscriptions"])) : d("", !0),
        g(Xe, {
          show: Re.value,
          title: n(e)("admin.subscriptions.assignSubscription"),
          width: "normal",
          "show-close-button": !x.value,
          "close-on-escape": !x.value,
          onClose: Be
        }, {
          footer: k(() => [
            s("div", Wi, [
              s("button", {
                onClick: Be,
                type: "button",
                disabled: x.value,
                class: "btn btn-secondary"
              }, o(Q.value ? n(e)("common.close") : n(e)("common.cancel")), 9, Ji),
              s("button", {
                type: "submit",
                form: "assign-subscription-form",
                disabled: x.value || B.value && T.value.length === 0,
                class: "btn btn-primary"
              }, [
                x.value ? (l(), r("svg", Xi, [...t[35] || (t[35] = [
                  s("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  s("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ])])) : d("", !0),
                S(" " + o(x.value ? n(e)("admin.subscriptions.assigning") : n(e)("admin.subscriptions.assign")), 1)
              ], 8, Yi)
            ])
          ]),
          default: k(() => [
            s("form", {
              id: "assign-subscription-form",
              onSubmit: Oe(at, ["prevent"]),
              class: "space-y-5"
            }, [
              s("label", ki, [
                de(s("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (i) => B.value = i),
                  type: "checkbox",
                  disabled: x.value,
                  onChange: Zs
                }, null, 40, wi), [
                  [Rs, B.value]
                ]),
                S(" " + o(n(e)("admin.subscriptions.batchAssign.enable")), 1)
              ]),
              B.value ? (l(), r("p", Ci, o(n(e)("admin.subscriptions.batchAssign.hint")), 1)) : d("", !0),
              s("div", null, [
                s("label", Si, o(n(e)("admin.subscriptions.form.user")), 1),
                s("div", $i, [
                  de(s("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (i) => Y.value = i),
                    type: "text",
                    disabled: x.value || B.value && T.value.length >= 100,
                    class: "input pr-8",
                    placeholder: n(e)("admin.usage.searchUserPlaceholder"),
                    onInput: Js,
                    onFocus: t[15] || (t[15] = (i) => be.value = !0)
                  }, null, 40, Ti), [
                    [Ue, Y.value]
                  ]),
                  re.value ? (l(), r("button", {
                    key: 0,
                    onClick: ts,
                    type: "button",
                    class: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }, [
                    g(M, {
                      name: "x",
                      size: "sm",
                      "stroke-width": 2
                    })
                  ])) : d("", !0),
                  be.value && (se.value.length > 0 || Y.value) ? (l(), r("div", Di, [
                    Le.value ? (l(), r("div", Ui, o(n(e)("common.loading")), 1)) : se.value.length === 0 && Y.value ? (l(), r("div", zi, o(n(e)("common.noOptionsFound")), 1)) : d("", !0),
                    (l(!0), r(R, null, W(se.value, (i) => (l(), r("button", {
                      key: i.id,
                      type: "button",
                      disabled: x.value || B.value && T.value.some((f) => f.id === i.id),
                      onClick: (f) => Xs(i),
                      class: "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 disabled:opacity-50 dark:hover:bg-dark-700"
                    }, [
                      s("span", Mi, o(i.email), 1),
                      s("span", Ai, "#" + o(i.id), 1)
                    ], 8, Ei))), 128))
                  ])) : d("", !0)
                ]),
                B.value && T.value.length > 0 ? (l(), r("div", Ri, [
                  s("p", Fi, o(n(e)("admin.subscriptions.batchAssign.selected", { count: T.value.length })), 1),
                  s("ul", Ii, [
                    (l(!0), r(R, null, W(T.value, (i) => (l(), r("li", {
                      key: i.id,
                      class: "flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-dark-700"
                    }, [
                      s("span", ji, [
                        S(o(i.email) + " ", 1),
                        s("span", Vi, "#" + o(i.id), 1)
                      ]),
                      s("button", {
                        type: "button",
                        disabled: x.value,
                        "aria-label": n(e)("admin.subscriptions.batchAssign.removeUser", { email: i.email }),
                        onClick: (f) => T.value = T.value.filter((G) => G.id !== i.id)
                      }, [
                        g(M, {
                          name: "x",
                          size: "sm"
                        })
                      ], 8, Ni)
                    ]))), 128))
                  ])
                ])) : d("", !0)
              ]),
              s("div", null, [
                s("label", Oi, o(n(e)("admin.subscriptions.form.group")), 1),
                g(Ne, {
                  modelValue: C.group_id,
                  "onUpdate:modelValue": t[16] || (t[16] = (i) => C.group_id = i),
                  disabled: x.value,
                  options: Hs.value,
                  placeholder: n(e)("admin.subscriptions.selectGroup")
                }, {
                  selected: k(({ option: i }) => [
                    i ? (l(), te(Ts, {
                      key: 0,
                      name: i.label,
                      platform: i.platform,
                      "subscription-type": i.subscriptionType,
                      "rate-multiplier": i.rate
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (l(), r("span", qi, o(n(e)("admin.subscriptions.selectGroup")), 1))
                  ]),
                  option: k(({ option: i, selected: f }) => [
                    g(Et, {
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
                s("p", Pi, o(n(e)("admin.subscriptions.groupHint")), 1)
              ]),
              s("div", null, [
                s("label", Li, o(n(e)("admin.subscriptions.form.validityDays")), 1),
                de(s("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (i) => C.validity_days = i),
                  type: "number",
                  min: "1",
                  max: "36500",
                  step: "1",
                  disabled: x.value,
                  class: "input"
                }, null, 8, Hi), [
                  [
                    Ue,
                    C.validity_days,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                s("p", Bi, o(n(e)("admin.subscriptions.validityHint")), 1)
              ]),
              Q.value ? (l(), r("div", Qi, [
                s("p", null, o(n(e)("admin.subscriptions.batchAssign.result", { success: Q.value.success_count, failed: Q.value.failed_count })), 1),
                Q.value.errors.length ? (l(), r("ul", Gi, [
                  (l(!0), r(R, null, W(Q.value.errors, (i, f) => (l(), r("li", { key: f }, o(i), 1))), 128))
                ])) : d("", !0),
                Q.value.failed_count > 0 ? (l(), r("p", Ki, o(n(e)("admin.subscriptions.batchAssign.retryHint")), 1)) : d("", !0)
              ])) : d("", !0)
            ], 32)
          ]),
          _: 1
        }, 8, ["show", "title", "show-close-button", "close-on-escape"]),
        g(Xe, {
          show: He.value,
          title: n(e)("admin.subscriptions.adjustSubscription"),
          width: "narrow",
          onClose: Qe
        }, {
          footer: k(() => [
            V.value ? (l(), r("div", cn, [
              s("button", {
                onClick: Qe,
                type: "button",
                class: "btn btn-secondary"
              }, o(n(e)("common.cancel")), 1),
              s("button", {
                type: "submit",
                form: "extend-subscription-form",
                disabled: x.value,
                class: "btn btn-primary"
              }, o(x.value ? n(e)("admin.subscriptions.adjusting") : n(e)("admin.subscriptions.adjust")), 9, mn)
            ])) : d("", !0)
          ]),
          default: k(() => {
            var i;
            return [
              V.value ? (l(), r("form", {
                key: 0,
                id: "extend-subscription-form",
                onSubmit: Oe(nt, ["prevent"]),
                class: "space-y-5"
              }, [
                s("div", Zi, [
                  s("p", en, [
                    S(o(n(e)("admin.subscriptions.adjustingFor")) + " ", 1),
                    s("span", sn, o((i = V.value.user) == null ? void 0 : i.email), 1)
                  ]),
                  s("p", tn, [
                    S(o(n(e)("admin.subscriptions.currentExpiration")) + ": ", 1),
                    s("span", an, o(V.value.expires_at ? n($s)(V.value.expires_at) : n(e)("admin.subscriptions.noExpiration")), 1)
                  ]),
                  V.value.expires_at ? (l(), r("p", nn, [
                    S(o(n(e)("admin.subscriptions.remainingDays")) + ": ", 1),
                    s("span", on, o(as(V.value.expires_at) ?? 0), 1)
                  ])) : d("", !0)
                ]),
                s("div", null, [
                  s("label", ln, o(n(e)("admin.subscriptions.form.adjustDays")), 1),
                  s("div", rn, [
                    de(s("input", {
                      "onUpdate:modelValue": t[18] || (t[18] = (f) => we.days = f),
                      type: "number",
                      required: "",
                      class: "input text-center",
                      placeholder: n(e)("admin.subscriptions.adjustDaysPlaceholder")
                    }, null, 8, un), [
                      [
                        Ue,
                        we.days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  s("p", dn, o(n(e)("admin.subscriptions.adjustHint")), 1)
                ])
              ], 32)) : d("", !0)
            ];
          }),
          _: 1
        }, 8, ["show", "title"]),
        g(Ye, {
          show: Fe.value,
          title: n(e)("admin.subscriptions.revokeSubscription"),
          message: n(e)("admin.subscriptions.revokeConfirm", { user: (Ce = (U = xe.value) == null ? void 0 : U.user) == null ? void 0 : Ce.email }),
          "confirm-text": n(e)("admin.subscriptions.revoke"),
          "cancel-text": n(e)("common.cancel"),
          danger: !0,
          onConfirm: lt,
          onCancel: t[19] || (t[19] = (i) => Fe.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        g(Ye, {
          show: Ie.value,
          title: n(e)("admin.subscriptions.restoreSubscription"),
          message: n(e)("admin.subscriptions.restoreConfirm", { user: (os = (ns = ke.value) == null ? void 0 : ns.user) == null ? void 0 : os.email }),
          "confirm-text": n(e)("admin.subscriptions.restore"),
          "cancel-text": n(e)("common.cancel"),
          onConfirm: ut,
          onCancel: t[20] || (t[20] = (i) => Ie.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        g(Ye, {
          show: je.value,
          title: n(e)("admin.subscriptions.resetQuotaTitle"),
          message: n(e)("admin.subscriptions.resetQuotaConfirm", { user: (rs = (ls = ve.value) == null ? void 0 : ls.user) == null ? void 0 : rs.email }),
          "confirm-text": n(e)("admin.subscriptions.resetQuota"),
          "cancel-text": n(e)("common.cancel"),
          onConfirm: ct,
          onCancel: t[21] || (t[21] = (i) => je.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
        (l(), te(kt, { to: "body" }, [
          g(xt, { name: "modal" }, {
            default: k(() => [
              y.value ? (l(), r("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4",
                onMousedown: t[26] || (t[26] = Oe((i) => y.value = !1, ["self"]))
              }, [
                s("div", {
                  class: "fixed inset-0 bg-black/50",
                  onClick: t[22] || (t[22] = (i) => y.value = !1)
                }),
                s("div", pn, [
                  s("button", {
                    type: "button",
                    class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                    onClick: t[23] || (t[23] = (i) => y.value = !1)
                  }, [...t[36] || (t[36] = [
                    s("svg", {
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      s("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])]),
                  s("h2", bn, o(n(e)("admin.subscriptions.guide.title")), 1),
                  s("p", vn, o(n(e)("admin.subscriptions.guide.subtitle")), 1),
                  s("div", gn, [
                    s("h3", yn, [
                      t[37] || (t[37] = s("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "1", -1)),
                      S(" " + o(n(e)("admin.subscriptions.guide.step1.title")), 1)
                    ]),
                    s("ol", fn, [
                      s("li", null, o(n(e)("admin.subscriptions.guide.step1.line1")), 1),
                      s("li", null, o(n(e)("admin.subscriptions.guide.step1.line2")), 1),
                      s("li", null, o(n(e)("admin.subscriptions.guide.step1.line3")), 1)
                    ]),
                    s("div", _n, [
                      g(E, {
                        to: "/admin/groups",
                        onClick: t[24] || (t[24] = (i) => y.value = !1),
                        class: "inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, {
                        default: k(() => [
                          S(o(n(e)("admin.subscriptions.guide.step1.link")) + " ", 1),
                          g(M, {
                            name: "arrowRight",
                            size: "xs"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  s("div", hn, [
                    s("h3", xn, [
                      t[38] || (t[38] = s("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "2", -1)),
                      S(" " + o(n(e)("admin.subscriptions.guide.step2.title")), 1)
                    ]),
                    s("ol", kn, [
                      s("li", null, o(n(e)("admin.subscriptions.guide.step2.line1")), 1),
                      s("li", null, o(n(e)("admin.subscriptions.guide.step2.line2")), 1),
                      s("li", null, o(n(e)("admin.subscriptions.guide.step2.line3")), 1)
                    ])
                  ]),
                  s("div", wn, [
                    s("h3", Cn, [
                      t[39] || (t[39] = s("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "3", -1)),
                      S(" " + o(n(e)("admin.subscriptions.guide.step3.title")), 1)
                    ]),
                    s("div", Sn, [
                      s("table", $n, [
                        s("tbody", null, [
                          (l(!0), r(R, null, W(m.value, (i, f) => (l(), r("tr", {
                            key: f,
                            class: "border-b border-gray-100 dark:border-dark-700 last:border-0"
                          }, [
                            s("td", Tn, o(i.action), 1),
                            s("td", Dn, o(i.desc), 1)
                          ]))), 128))
                        ])
                      ])
                    ])
                  ]),
                  s("div", Un, o(n(e)("admin.subscriptions.guide.tip")), 1),
                  s("div", zn, [
                    s("button", {
                      type: "button",
                      class: "btn btn-primary btn-sm",
                      onClick: t[25] || (t[25] = (i) => y.value = !1)
                    }, o(n(e)("common.close")), 1)
                  ])
                ])
              ], 32)) : d("", !0)
            ]),
            _: 1
          })
        ]))
      ], 64);
    };
  }
}), Pn = /* @__PURE__ */ wt(En, [["__scopeId", "data-v-97024dd3"]]);
export {
  Pn as default
};
