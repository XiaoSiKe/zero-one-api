import { P as bs, C as ks, r as R, w as ge, $ as ws, d as xe, u as ye, p as x, c as Ct, f as d, s as Q, g as e, k as H, h as t, i as a, F as de, l as M, q as U, j as pe, A as ie, D as gt, v as ve, m as n, _ as Ve, x as re, y as le, L as $s, B as Cs, e as st, b as Bt, z as kt, I as wt, E as ss, o as Ss, a0 as Rs, a1 as Ts } from "./cnProviderAdminLeaf-DehadpuS.js";
import { _ as Je } from "./BaseDialog.vue_vue_type_script_setup_true_lang-CoJJzgOV.js";
import { b as At, S as me, o as se, C as Ds, D as Es, P as Qt, _ as qs } from "./platforms-CS2OQNva.js";
import { _ as fe } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-CtcKFU29.js";
import { m as Ls, j as Be, a as zs } from "./format-c7uY_FuB.js";
import { C as St, A as Ms, p as Rt, c as Tt, D as As, f as Wt, e as Kt, L as Vt, P as Jt, d as Ft, i as Zt, g as Yt, B as Vs, k as Fs, l as Dt, a as Os, b as Is, u as js } from "./index-Br_aRIgt.js";
import { _ as at } from "./EmptyState.vue_vue_type_script_setup_true_lang-Cfqco4L8.js";
import { a as Ps } from "./apiError-i2TfMBqu.js";
import { _ as ze } from "./Toggle.vue_vue_type_script_setup_true_lang-BT8qn5t4.js";
const ds = bs("adminSettings", () => {
  const y = ks(), o = R(!1), s = R(!1), h = R(!0), r = R(!0), F = R("auto"), q = R(!1), k = R([]), S = R(null);
  let g = null, v = null, b = null, B = null, V = !1, c = 0, w = 0, D = 0, f = 0;
  function J() {
    f += 1, c += 1, w += 1, D += 1, g = v = null, b = B = null, o.value = s.value = V = !1, S.value = null, k.value = [], h.value = r.value = !0, F.value = "auto", q.value = !1;
  }
  ge(
    () => y.token && y.user ? `${y.user.id}:${y.user.role}` : "",
    J,
    { flush: "sync" }
  );
  function ae(O = !1) {
    if (b) {
      if (O && !B) {
        D += 1;
        const T = f, I = b.then(() => (B === I && (B = null), T === f ? ae(!0) : void 0)).finally(() => {
          B === I && (B = null);
        });
        B = I;
      }
      return O ? B : b;
    }
    if (V && !O) return Promise.resolve();
    const C = ++D, E = At.payment.getConfig().then((T) => {
      var I;
      C === D && (q.value = ((I = T.data) == null ? void 0 : I.enabled) ?? !1, V = !0);
    }).catch((T) => {
      C === D && console.error("[adminSettings] Failed to fetch payment settings:", T);
    }).finally(() => {
      b === E && (b = null);
    });
    return b = E, E;
  }
  function X(O = !1) {
    var I;
    if (!y.token || ((I = y.user) == null ? void 0 : I.role) !== "admin") return Promise.resolve();
    if (g) {
      if (O && !v) {
        c += 1;
        const W = f, ce = g.then(() => (v === ce && (v = null), W === f ? X(!0) : void 0)).finally(() => {
          v === ce && (v = null);
        });
        v = ce;
      }
      return O ? v : g;
    }
    if (ae(O), o.value && !O) return Promise.resolve();
    O && (c += 1), s.value = !0;
    const C = c, E = w, T = At.settings.getNavigationSettings().then((W) => {
      C === c && (E === w && (h.value = W.ops_monitoring_enabled ?? !0, r.value = W.ops_realtime_monitoring_enabled ?? !0, F.value = W.ops_query_mode_default || "auto"), S.value = {
        ...W,
        ops_monitoring_enabled: h.value,
        ops_realtime_monitoring_enabled: r.value,
        ops_query_mode_default: F.value
      }, k.value = Array.isArray(W.custom_menu_items) ? W.custom_menu_items : [], o.value = !0);
    }).catch((W) => {
      C === c && console.error("[adminSettings] Failed to fetch settings:", W);
    }).finally(() => {
      g === T && (g = null, s.value = !1);
    });
    return g = T, T;
  }
  function Z(O) {
    w += 1, h.value = O, S.value && (S.value.ops_monitoring_enabled = O);
  }
  function ue(O) {
    w += 1, r.value = O, S.value && (S.value.ops_realtime_monitoring_enabled = O);
  }
  function A(O) {
    D += 1, q.value = O, V = !0;
  }
  function m(O) {
    w += 1, F.value = O || "auto", S.value && (S.value.ops_query_mode_default = F.value);
  }
  const i = () => Z(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", i), ws(() => {
    J(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", i);
  }), {
    loaded: o,
    loading: s,
    opsMonitoringEnabled: h,
    opsRealtimeMonitoringEnabled: r,
    opsQueryModeDefault: F,
    paymentEnabled: q,
    customMenuItems: k,
    navigationSettings: S,
    fetch: X,
    reset: J,
    setOpsMonitoringEnabledLocal: Z,
    setOpsRealtimeMonitoringEnabledLocal: ue,
    setPaymentEnabledLocal: A,
    setOpsQueryModeDefaultLocal: m
  };
});
function Us(y) {
  const o = {
    P0: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    P1: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P2: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P3: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
  };
  return o[String(y || "")] || o.P3;
}
function Ge(y) {
  const o = new Date(y);
  return Number.isNaN(o.getTime()) ? "" : `${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")} ${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}:${String(o.getSeconds()).padStart(2, "0")}`;
}
function $t(y) {
  return y.reduce((o, s) => {
    const h = typeof s == "number" && Number.isFinite(s) ? s : 0;
    return o + h;
  }, 0);
}
function Gt(y) {
  const o = (y || "").trim();
  if (!o) return 60;
  if (o.endsWith("m")) {
    const s = Number.parseInt(o.slice(0, -1), 10);
    return Number.isFinite(s) && s > 0 ? s : 60;
  }
  if (o.endsWith("h")) {
    const s = Number.parseInt(o.slice(0, -1), 10);
    return Number.isFinite(s) && s > 0 ? s * 60 : 60;
  }
  return 60;
}
function Xt(y, o) {
  if (!y) return "";
  const s = new Date(y);
  return Number.isNaN(s.getTime()) ? "" : Gt(o) >= 1440 ? `${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")} ${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}` : `${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}`;
}
function as(y) {
  return typeof y != "number" || !Number.isFinite(y) || y < 0 ? "-" : y === 0 ? "0 MB" : Ls(y * 1024 * 1024, 1);
}
const Ns = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, Hs = { class: "flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Bs = {
  key: 0,
  class: "mt-1 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400"
}, Gs = ["title"], Qs = { class: "relative flex h-2 w-2" }, Ws = { class: "flex flex-wrap items-center gap-3" }, Ks = ["disabled", "title"], Js = {
  key: 3,
  class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block"
}, Zs = ["title"], Ys = { class: "hidden sm:inline" }, Xs = ["title"], ea = { class: "hidden sm:inline" }, ta = ["title"], sa = {
  key: 0,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, aa = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, ra = { class: "group relative flex cursor-pointer flex-col items-center justify-center rounded-xl py-2 transition-all hover:bg-white/60 dark:hover:bg-dark-800/60 md:border-r md:border-gray-200 md:pr-6 dark:md:border-dark-700" }, oa = { class: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 md:left-full md:top-0 md:ml-2 md:mt-0 md:translate-x-0" }, na = { class: "rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-dark-800 dark:ring-white/10" }, la = { class: "mb-3 border-b border-gray-100 pb-2 text-sm font-bold text-gray-900 dark:border-dark-700 dark:text-white flex items-center gap-2" }, ia = { class: "space-y-3" }, da = { class: "mt-0.5 shrink-0" }, ua = {
  key: 0,
  class: "h-4 w-4 text-red-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ca = {
  key: 1,
  class: "h-4 w-4 text-zo-alert-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, pa = {
  key: 2,
  class: "h-4 w-4 text-blue-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ma = { class: "flex-1" }, ga = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, va = { class: "mt-0.5 text-[11px] text-gray-500 dark:text-gray-400" }, _a = {
  key: 0,
  class: "mt-1 text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1"
}, xa = { class: "mt-3 border-t border-gray-100 pt-2 text-[10px] text-gray-400 dark:border-dark-700" }, fa = { class: "relative flex items-center justify-center" }, ya = ["width", "height"], ha = ["cx", "cy", "r", "stroke-width"], ba = ["cx", "cy", "r", "stroke-width", "stroke", "stroke-dasharray", "stroke-dashoffset"], ka = { class: "absolute flex flex-col items-center" }, wa = {
  key: 0,
  class: "mt-4 text-center"
}, $a = { class: "flex items-center justify-center gap-1 text-xs font-medium text-gray-500" }, Ca = { class: "flex h-full flex-col justify-center py-2" }, Sa = { class: "mb-3 flex flex-wrap items-center justify-between gap-2" }, Ra = { class: "flex items-center gap-2" }, Ta = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Da = { class: "flex flex-wrap gap-1" }, Ea = ["onClick"], qa = { class: "mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-2" }, La = { class: "flex items-baseline gap-1.5" }, za = { class: "flex items-baseline gap-1.5" }, Ma = { class: "grid grid-cols-2 gap-3" }, Aa = { class: "flex items-baseline gap-1.5" }, Va = { class: "font-black text-gray-900 dark:text-white" }, Fa = { class: "flex items-baseline gap-1.5" }, Oa = { class: "font-black text-gray-900 dark:text-white" }, Ia = { class: "text-xs" }, ja = { class: "flex items-baseline gap-1.5" }, Pa = { class: "font-black text-gray-900 dark:text-white" }, Ua = { class: "flex items-baseline gap-1.5" }, Na = { class: "font-black text-gray-900 dark:text-white" }, Ha = { class: "text-xs" }, Ba = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3" }, Ga = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "1" }
}, Qa = { class: "flex items-center justify-between" }, Wa = { class: "flex items-center gap-1" }, Ka = { class: "text-[10px] font-bold uppercase text-gray-400" }, Ja = { class: "mt-2 space-y-2 text-xs" }, Za = { class: "flex justify-between" }, Ya = { class: "text-gray-500" }, Xa = { class: "font-bold text-gray-900 dark:text-white" }, er = { class: "flex justify-between" }, tr = { class: "text-gray-500" }, sr = { class: "font-bold text-gray-900 dark:text-white" }, ar = { class: "flex justify-between" }, rr = { class: "text-gray-500" }, or = { class: "font-bold text-gray-900 dark:text-white" }, nr = { class: "flex justify-between" }, lr = { class: "text-gray-500" }, ir = { class: "font-bold text-gray-900 dark:text-white" }, dr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "2" }
}, ur = { class: "flex items-center justify-between" }, cr = { class: "flex items-center gap-2" }, pr = { class: "text-[10px] font-bold uppercase text-gray-400" }, mr = { class: "mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, gr = { class: "mt-3 text-xs" }, vr = { class: "flex justify-between" }, _r = { class: "text-gray-500" }, xr = { class: "font-bold text-gray-900 dark:text-white" }, fr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "4" }
}, yr = { class: "flex items-center justify-between" }, hr = { class: "flex items-center gap-1" }, br = { class: "text-[10px] font-bold uppercase text-gray-400" }, kr = { class: "mt-2 flex items-baseline gap-2" }, wr = { class: "text-3xl font-black text-gray-900 dark:text-white" }, $r = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, Cr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Sr = { class: "font-bold text-gray-900 dark:text-white" }, Rr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Tr = { class: "font-bold text-gray-900 dark:text-white" }, Dr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Er = { class: "font-bold text-gray-900 dark:text-white" }, qr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Lr = { class: "font-bold text-gray-900 dark:text-white" }, zr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Mr = { class: "font-bold text-gray-900 dark:text-white" }, Ar = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "5" }
}, Vr = { class: "flex items-center justify-between" }, Fr = { class: "flex items-center gap-1" }, Or = { class: "mt-2 flex items-baseline gap-2" }, Ir = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, jr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Pr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Ur = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Nr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Hr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Br = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "3" }
}, Gr = { class: "flex items-center justify-between" }, Qr = { class: "flex items-center gap-1" }, Wr = { class: "text-[10px] font-bold uppercase text-gray-400" }, Kr = { class: "mt-3 space-y-1 text-xs" }, Jr = { class: "flex justify-between" }, Zr = { class: "text-gray-500" }, Yr = { class: "font-bold text-gray-900 dark:text-white" }, Xr = { class: "flex justify-between" }, eo = { class: "text-gray-500" }, to = { class: "font-bold text-gray-900 dark:text-white" }, so = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "6" }
}, ao = { class: "flex items-center justify-between" }, ro = { class: "flex items-center gap-1" }, oo = { class: "text-[10px] font-bold uppercase text-gray-400" }, no = { class: "mt-3 space-y-1 text-xs" }, lo = { class: "flex justify-between" }, io = { class: "text-gray-500" }, uo = { class: "font-bold text-gray-900 dark:text-white" }, co = { class: "flex justify-between" }, po = { class: "font-bold text-gray-900 dark:text-white" }, mo = {
  key: 1,
  class: "mt-2 border-t border-gray-100 pt-4 dark:border-dark-700"
}, go = { class: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" }, vo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, _o = { class: "flex items-center gap-1" }, xo = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, fo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, yo = { class: "flex items-center gap-1" }, ho = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, bo = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, ko = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, wo = { class: "flex items-center gap-1" }, $o = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Co = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, So = { key: 0 }, Ro = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, To = { class: "flex items-center gap-1" }, Do = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Eo = { key: 0 }, qo = { key: 1 }, Lo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, zo = { class: "flex items-center gap-1" }, Mo = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Ao = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Vo = { class: "font-mono" }, Fo = { key: 0 }, Oo = { class: "font-mono" }, Io = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, jo = { class: "flex items-center justify-between gap-2" }, Po = { class: "flex items-center gap-1" }, Uo = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, No = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Ho = { class: "font-mono" }, Bo = { class: "font-mono" }, Go = {
  key: 0,
  class: "text-sm text-gray-500 dark:text-gray-400"
}, Qo = {
  key: 1,
  class: "space-y-3"
}, Wo = { class: "flex items-center justify-between gap-3" }, Ko = { class: "truncate text-sm font-semibold text-gray-900 dark:text-white" }, Jo = { class: "flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400" }, Zo = {
  key: 0,
  class: "font-mono"
}, Yo = { class: "mt-2 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, Xo = { class: "font-mono" }, en = { class: "font-mono" }, tn = { class: "font-mono" }, sn = {
  key: 0,
  class: "mt-3 rounded-lg bg-rose-50 p-2 text-xs text-rose-700 dark:bg-rose-900/20 dark:text-rose-300"
}, an = { class: "space-y-4" }, rn = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, on = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, nn = { class: "flex justify-end gap-3 pt-2" }, rs = 8e3, os = 15e3, ln = /* @__PURE__ */ xe({
  __name: "OpsDashboardHeader",
  props: {
    overview: {},
    platform: {},
    groupId: {},
    timeRange: {},
    queryMode: {},
    loading: { type: Boolean },
    lastUpdated: {},
    thresholds: {},
    autoRefreshEnabled: { type: Boolean },
    autoRefreshCountdown: {},
    fullscreen: { type: Boolean },
    customStartTime: {},
    customEndTime: {}
  },
  emits: ["update:platform", "update:group", "update:timeRange", "update:queryMode", "update:customTimeRange", "refresh", "openRequestDetails", "openErrorDetails", "openSettings", "openAlertRules", "enterFullscreen", "exitFullscreen"],
  setup(y, { emit: o }) {
    const s = y, h = o, { t: r } = ye(), F = ds(), q = R("1min"), k = x(() => s.overview ?? null), S = x(() => {
      var u;
      return ((u = k.value) == null ? void 0 : u.system_metrics) ?? null;
    }), g = {
      "1min": 1,
      "5min": 5,
      "30min": 30,
      "1h": 60
    }, v = {
      "5m": 5,
      "30m": 30,
      "1h": 60,
      "6h": 360,
      "24h": 1440
    }, b = x(() => {
      const u = v[s.timeRange] ?? 60;
      return ["1min", "5min", "30min", "1h"].filter((l) => g[l] <= u);
    });
    ge(
      () => s.timeRange,
      () => {
        q.value = "1min", p();
      }
    );
    const B = R(!1), V = R(""), c = R("");
    function w(u, l) {
      const Y = new Date(u), $e = new Date(l), He = (te) => {
        const Ke = String(te.getMonth() + 1).padStart(2, "0"), Mt = String(te.getDate()).padStart(2, "0"), pt = String(te.getHours()).padStart(2, "0"), mt = String(te.getMinutes()).padStart(2, "0");
        return `${Ke}-${Mt} ${pt}:${mt}`;
      };
      return `${He(Y)} ~ ${He($e)}`;
    }
    const D = R([]), f = x(() => [
      { value: "", label: r("common.all") },
      ...Ds
    ]), J = x(() => [
      { value: "5m", label: r("admin.ops.timeRange.5m") },
      { value: "30m", label: r("admin.ops.timeRange.30m") },
      { value: "1h", label: r("admin.ops.timeRange.1h") },
      { value: "6h", label: r("admin.ops.timeRange.6h") },
      { value: "24h", label: r("admin.ops.timeRange.24h") },
      {
        value: "custom",
        label: s.timeRange === "custom" && s.customStartTime && s.customEndTime ? `${r("admin.ops.timeRange.custom")} (${w(s.customStartTime, s.customEndTime)})` : r("admin.ops.timeRange.custom")
      }
    ]);
    x(() => [
      { value: "auto", label: r("admin.ops.queryMode.auto") },
      { value: "raw", label: r("admin.ops.queryMode.raw") },
      { value: "preagg", label: r("admin.ops.queryMode.preagg") }
    ]);
    const ae = x(() => {
      const u = s.platform ? D.value.filter((l) => l.platform === s.platform) : D.value;
      return [{ value: null, label: r("common.all") }, ...u.map((l) => ({ value: l.id, label: l.name }))];
    });
    ge(
      () => s.platform,
      (u) => {
        if (!u) return;
        const l = D.value.find((Y) => Y.id === s.groupId);
        l && l.platform !== u && h("update:group", null);
      }
    ), Ct(async () => {
      try {
        const u = await At.groups.getAll();
        D.value = u.map((l) => ({ id: l.id, name: l.name, platform: l.platform }));
      } catch (u) {
        console.error("[OpsDashboardHeader] Failed to load groups", u), D.value = [];
      }
    });
    function X(u) {
      h("update:platform", String(u || ""));
    }
    function Z(u) {
      if (u === null || u === "" || typeof u == "boolean") {
        h("update:group", null);
        return;
      }
      const l = typeof u == "number" ? u : Number.parseInt(String(u), 10);
      h("update:group", Number.isFinite(l) && l > 0 ? l : null);
    }
    function ue(u) {
      const l = String(u || "1h");
      if (l === "custom") {
        const Y = /* @__PURE__ */ new Date(), $e = new Date(Y.getTime() - 3600 * 1e3);
        V.value = $e.toISOString().slice(0, 16), c.value = Y.toISOString().slice(0, 16), B.value = !0;
      } else
        h("update:timeRange", l);
    }
    function A() {
      if (!V.value || !c.value) return;
      const u = new Date(V.value).toISOString(), l = new Date(c.value).toISOString();
      h("update:customTimeRange", u, l), h("update:timeRange", "custom"), B.value = !1;
    }
    function m() {
      B.value = !1;
    }
    function i(u) {
      h("openRequestDetails", u);
    }
    function O(u) {
      h("openErrorDetails", u);
    }
    function C(u) {
      var $e;
      if (u == null) return "normal";
      const l = ($e = s.thresholds) == null ? void 0 : $e.sla_percent_min;
      if (l == null) return "normal";
      const Y = 0.1;
      return u < l ? "critical" : u < l + Y ? "warning" : "normal";
    }
    function E(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.ttft_p99_ms_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function T(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.request_error_rate_percent_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function I(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.upstream_error_rate_percent_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function W(u) {
      switch (u) {
        case "critical":
          return "text-red-600 dark:text-red-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-zo-signal-600 dark:text-zo-signal-400";
      }
    }
    const ce = x(() => {
      var u;
      return Be(((u = k.value) == null ? void 0 : u.request_count_total) ?? 0);
    }), he = x(() => {
      var u;
      return Be(((u = k.value) == null ? void 0 : u.token_consumed) ?? 0);
    }), _e = R(null), N = R(!1);
    function _() {
      const u = (/* @__PURE__ */ new Date()).toISOString();
      return {
        window: q.value,
        start_time: u,
        end_time: u,
        platform: s.platform,
        group_id: s.groupId,
        qps: { current: 0, peak: 0, avg: 0 },
        tps: { current: 0, peak: 0, avg: 0 }
      };
    }
    async function p() {
      if (!N.value) {
        if (!F.opsRealtimeMonitoringEnabled) {
          _e.value = _();
          return;
        }
        N.value = !0;
        try {
          const u = await se.getRealtimeTrafficSummary(q.value, s.platform, s.groupId);
          u && u.enabled === !1 && F.setOpsRealtimeMonitoringEnabledLocal(!1), _e.value = (u == null ? void 0 : u.summary) ?? null;
        } catch (u) {
          console.error("[OpsDashboardHeader] Failed to load realtime traffic summary", u), _e.value = null;
        } finally {
          N.value = !1;
        }
      }
    }
    ge(
      () => [q.value, s.platform, s.groupId],
      () => {
        p();
      },
      { immediate: !0 }
    ), ge(
      () => F.opsRealtimeMonitoringEnabled,
      (u) => {
        u ? p() : _e.value = _();
      },
      { immediate: !0 }
    ), ge(
      () => [s.autoRefreshEnabled, s.autoRefreshCountdown, s.loading],
      ([u, l, Y]) => {
        u && (Y || l === 0 && p());
      }
    );
    const L = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : Y.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), ne = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : Y.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), Se = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : Y.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Ee = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : Y.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), qe = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : Y.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Ie = x(() => {
      var l, Y;
      const u = (Y = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : Y.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), K = x(() => {
      var l, Y;
      const u = (Y = (l = k.value) == null ? void 0 : l.qps) == null ? void 0 : Y.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), j = x(() => {
      var l, Y;
      const u = (Y = (l = k.value) == null ? void 0 : l.tps) == null ? void 0 : Y.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), z = x(() => {
      var l, Y;
      const u = (l = k.value) == null ? void 0 : l.sla;
      return typeof u != "number" || (((Y = k.value) == null ? void 0 : Y.request_count_sla) ?? 0) <= 0 ? null : u * 100;
    }), ee = x(() => {
      var l;
      const u = (l = k.value) == null ? void 0 : l.error_rate;
      return typeof u != "number" ? null : u * 100;
    }), oe = x(() => {
      var l;
      const u = (l = k.value) == null ? void 0 : l.upstream_error_rate;
      return typeof u != "number" ? null : u * 100;
    }), be = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.p99_ms) ?? null;
    }), ke = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.p95_ms) ?? null;
    }), Re = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.p90_ms) ?? null;
    }), Qe = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.p50_ms) ?? null;
    }), We = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.avg_ms) ?? null;
    }), Ze = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.duration) == null ? void 0 : l.max_ms) ?? null;
    }), je = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p99_ms) ?? null;
    }), Fe = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p95_ms) ?? null;
    }), rt = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p90_ms) ?? null;
    }), ot = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p50_ms) ?? null;
    }), Pe = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.avg_ms) ?? null;
    }), Xe = x(() => {
      var u, l;
      return ((l = (u = k.value) == null ? void 0 : u.ttft) == null ? void 0 : l.max_ms) ?? null;
    }), we = x(() => {
      var $e;
      const u = k.value;
      if (!u) return !0;
      const l = ($e = u.qps) == null ? void 0 : $e.current, Y = u.error_rate ?? 0;
      return (l ?? 0) === 0 && Y === 0;
    }), Te = x(() => {
      var l;
      const u = (l = k.value) == null ? void 0 : l.health_score;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Et = x(() => {
      if (we.value) return "#9ca3af";
      const u = Te.value;
      return u == null ? "#9ca3af" : u >= 90 ? "#3b82f6" : u >= 60 ? "#a78bfa" : "#ef4444";
    }), vt = x(() => {
      if (we.value) return "text-gray-400";
      const u = Te.value;
      return u == null ? "text-gray-400" : u >= 90 ? "text-zo-signal-500" : u >= 60 ? "text-zo-alert-500" : "text-red-500";
    }), Oe = x(() => s.fullscreen ? 140 : 100), _t = x(() => s.fullscreen ? 10 : 8), xt = x(() => (Oe.value - _t.value) / 2), nt = x(() => 2 * Math.PI * xt.value), lt = x(() => {
      if (we.value || Te.value == null) return 0;
      const u = Math.max(0, Math.min(100, Te.value));
      return nt.value - u / 100 * nt.value;
    }), Ot = x(() => {
      var Mt;
      const u = k.value;
      if (!u) return [];
      const l = [];
      if (we.value)
        return l.push({
          type: "info",
          message: r("admin.ops.diagnosis.idle"),
          impact: r("admin.ops.diagnosis.idleImpact")
        }), l;
      const Y = u.system_metrics;
      if (Y) {
        Y.db_ok === !1 && l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.dbDown"),
          impact: r("admin.ops.diagnosis.dbDownImpact"),
          action: r("admin.ops.diagnosis.dbDownAction")
        }), Y.redis_ok === !1 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.redisDown"),
          impact: r("admin.ops.diagnosis.redisDownImpact"),
          action: r("admin.ops.diagnosis.redisDownAction")
        });
        const pt = Y.cpu_usage_percent ?? 0;
        pt > 90 ? l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.cpuCritical", { usage: pt.toFixed(1) }),
          impact: r("admin.ops.diagnosis.cpuCriticalImpact"),
          action: r("admin.ops.diagnosis.cpuCriticalAction")
        }) : pt > 80 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.cpuHigh", { usage: pt.toFixed(1) }),
          impact: r("admin.ops.diagnosis.cpuHighImpact"),
          action: r("admin.ops.diagnosis.cpuHighAction")
        });
        const mt = Y.memory_usage_percent ?? 0;
        mt > 90 ? l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.memoryCritical", { usage: mt.toFixed(1) }),
          impact: r("admin.ops.diagnosis.memoryCriticalImpact"),
          action: r("admin.ops.diagnosis.memoryCriticalAction")
        }) : mt > 85 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.memoryHigh", { usage: mt.toFixed(1) }),
          impact: r("admin.ops.diagnosis.memoryHighImpact"),
          action: r("admin.ops.diagnosis.memoryHighAction")
        });
      }
      const $e = ((Mt = u.ttft) == null ? void 0 : Mt.p99_ms) ?? 0;
      $e > 500 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.ttftHigh", { ttft: $e.toFixed(0) }),
        impact: r("admin.ops.diagnosis.ttftHighImpact"),
        action: r("admin.ops.diagnosis.ttftHighAction")
      });
      const He = (u.upstream_error_rate ?? 0) * 100;
      He > 5 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.upstreamCritical", { rate: He.toFixed(2) }),
        impact: r("admin.ops.diagnosis.upstreamCriticalImpact"),
        action: r("admin.ops.diagnosis.upstreamCriticalAction")
      }) : He > 2 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.upstreamHigh", { rate: He.toFixed(2) }),
        impact: r("admin.ops.diagnosis.upstreamHighImpact"),
        action: r("admin.ops.diagnosis.upstreamHighAction")
      });
      const te = (u.error_rate ?? 0) * 100;
      te > 3 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.errorHigh", { rate: te.toFixed(2) }),
        impact: r("admin.ops.diagnosis.errorHighImpact"),
        action: r("admin.ops.diagnosis.errorHighAction")
      }) : te > 0.5 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.errorElevated", { rate: te.toFixed(2) }),
        impact: r("admin.ops.diagnosis.errorElevatedImpact"),
        action: r("admin.ops.diagnosis.errorElevatedAction")
      });
      const Ke = (u.sla ?? 0) * 100;
      return Ke < 90 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.slaCritical", { sla: Ke.toFixed(2) }),
        impact: r("admin.ops.diagnosis.slaCriticalImpact"),
        action: r("admin.ops.diagnosis.slaCriticalAction")
      }) : Ke < 98 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.slaLow", { sla: Ke.toFixed(2) }),
        impact: r("admin.ops.diagnosis.slaLowImpact"),
        action: r("admin.ops.diagnosis.slaLowAction")
      }), Te.value != null && (Te.value < 60 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.healthCritical", { score: Te.value }),
        impact: r("admin.ops.diagnosis.healthCriticalImpact"),
        action: r("admin.ops.diagnosis.healthCriticalAction")
      }) : Te.value < 90 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.healthLow", { score: Te.value }),
        impact: r("admin.ops.diagnosis.healthLowImpact"),
        action: r("admin.ops.diagnosis.healthLowAction")
      })), l.length === 0 && l.push({
        type: "info",
        message: r("admin.ops.diagnosis.healthy"),
        impact: r("admin.ops.diagnosis.healthyImpact")
      }), l;
    });
    function ft(u) {
      if (!u) return "-";
      const l = new Date(u);
      return Number.isNaN(l.getTime()) ? "-" : l.toLocaleTimeString();
    }
    const yt = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.cpu_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), It = x(() => {
      const u = yt.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 80 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), ht = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.memory_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), jt = x(() => {
      const u = ht.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 85 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), it = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.db_conn_active;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ue = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.db_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), qt = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.db_conn_waiting;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), bt = x(() => it.value == null || Ue.value == null ? null : it.value + Ue.value), dt = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.db_max_open_conns;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), et = x(() => bt.value == null || dt.value == null || dt.value <= 0 ? null : Math.min(100, Math.max(0, bt.value / dt.value * 100))), Pt = x(() => {
      var u, l;
      return ((u = S.value) == null ? void 0 : u.db_ok) === !1 ? "FAIL" : et.value != null ? `${et.value.toFixed(0)}%` : ((l = S.value) == null ? void 0 : l.db_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), Ut = x(() => {
      var u, l;
      return ((u = S.value) == null ? void 0 : u.db_ok) === !1 ? "text-rose-600 dark:text-rose-400" : et.value != null ? et.value >= 90 ? "text-rose-600 dark:text-rose-400" : et.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = S.value) == null ? void 0 : l.db_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), tt = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.redis_conn_total;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), ut = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.redis_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Lt = x(() => tt.value == null || ut.value == null ? null : Math.max(tt.value - ut.value, 0)), ct = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.redis_pool_size;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Me = x(() => tt.value == null || ct.value == null || ct.value <= 0 ? null : Math.min(100, Math.max(0, tt.value / ct.value * 100))), zt = x(() => {
      var u, l;
      return ((u = S.value) == null ? void 0 : u.redis_ok) === !1 ? "FAIL" : Me.value != null ? `${Me.value.toFixed(0)}%` : ((l = S.value) == null ? void 0 : l.redis_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), $ = x(() => {
      var u, l;
      return ((u = S.value) == null ? void 0 : u.redis_ok) === !1 ? "text-rose-600 dark:text-rose-400" : Me.value != null ? Me.value >= 90 ? "text-rose-600 dark:text-rose-400" : Me.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = S.value) == null ? void 0 : l.redis_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), P = x(() => {
      var l;
      const u = (l = S.value) == null ? void 0 : l.goroutine_count;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), G = x(() => {
      const u = P.value;
      return u == null ? "unknown" : u >= os ? "critical" : u >= rs ? "warning" : "ok";
    }), Ne = x(() => {
      switch (G.value) {
        case "ok":
          return r("admin.ops.ok");
        case "warning":
          return r("common.warning");
        case "critical":
          return r("common.critical");
        default:
          return r("admin.ops.noData");
      }
    }), Ye = x(() => {
      switch (G.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        case "critical":
          return "text-rose-600 dark:text-rose-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Ae = x(() => {
      var u;
      return ((u = k.value) == null ? void 0 : u.job_heartbeats) ?? [];
    }), Le = x(() => {
      const u = Ae.value;
      if (!u.length) return "unknown";
      for (const l of u)
        if (l && l.last_error_at && (!l.last_success_at || l.last_error_at > l.last_success_at))
          return "warn";
      return "ok";
    }), De = x(() => {
      let u = 0;
      for (const l of Ae.value)
        l && l.last_error_at && (!l.last_success_at || l.last_error_at > l.last_success_at) && u++;
      return u;
    }), xs = x(() => {
      switch (Le.value) {
        case "ok":
          return r("admin.ops.ok");
        case "warn":
          return r("common.warning");
        default:
          return r("admin.ops.noData");
      }
    }), fs = x(() => {
      switch (Le.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warn":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Nt = R(!1);
    function ys() {
      Nt.value = !0;
    }
    function hs() {
      p(), h("refresh");
    }
    return (u, l) => {
      var Y, $e, He;
      return n(), d("div", {
        class: Q(["flex flex-col gap-4 rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", s.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", Ns, [
          e("div", null, [
            e("h1", Hs, [
              l[12] || (l[12] = e("svg", {
                class: "h-6 w-6 text-blue-500",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                })
              ], -1)),
              H(" " + t(a(r)("admin.ops.title")), 1)
            ]),
            s.fullscreen ? M("", !0) : (n(), d("div", Bs, [
              e("span", {
                class: "flex items-center gap-1.5",
                title: s.loading ? a(r)("admin.ops.loadingText") : a(r)("admin.ops.ready")
              }, [
                e("span", Qs, [
                  e("span", {
                    class: Q(["relative inline-flex h-2 w-2 rounded-full", s.loading ? "bg-gray-400" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                H(" " + t(s.loading ? a(r)("admin.ops.loadingText") : a(r)("admin.ops.ready")), 1)
              ], 8, Gs),
              l[14] || (l[14] = e("span", null, "·", -1)),
              e("span", null, t(a(r)("common.refresh")) + ": " + t(s.lastUpdated ? s.lastUpdated.toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/\//g, "-") : a(r)("common.unknown")), 1),
              s.autoRefreshEnabled && s.autoRefreshCountdown !== void 0 ? (n(), d(de, { key: 0 }, [
                l[13] || (l[13] = e("span", null, "·", -1)),
                e("span", null, t(a(r)("admin.ops.autoRefreshRemaining", { seconds: s.autoRefreshCountdown })), 1)
              ], 64)) : M("", !0)
            ]))
          ]),
          e("div", Ws, [
            s.fullscreen ? M("", !0) : (n(), d(de, { key: 0 }, [
              U(me, {
                "data-testid": "ops-platform-filter",
                "model-value": y.platform,
                options: f.value,
                class: "w-full sm:w-[140px]",
                "onUpdate:modelValue": X
              }, null, 8, ["model-value", "options"]),
              U(me, {
                "model-value": y.groupId,
                options: ae.value,
                class: "w-full sm:w-[160px]",
                "onUpdate:modelValue": Z
              }, null, 8, ["model-value", "options"]),
              l[15] || (l[15] = e("div", { class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block" }, null, -1)),
              U(me, {
                "model-value": y.timeRange,
                options: J.value,
                class: "relative w-full sm:w-[150px]",
                "onUpdate:modelValue": ue
              }, null, 8, ["model-value", "options"])
            ], 64)),
            M("", !0),
            s.fullscreen ? M("", !0) : (n(), d("button", {
              key: 2,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
              disabled: y.loading,
              title: a(r)("common.refresh"),
              onClick: hs
            }, [
              (n(), d("svg", {
                class: Q(["h-4 w-4", { "animate-spin": y.loading }]),
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [...l[16] || (l[16] = [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                }, null, -1)
              ])], 2))
            ], 8, Ks)),
            s.fullscreen ? M("", !0) : (n(), d("div", Js)),
            s.fullscreen ? M("", !0) : (n(), d("button", {
              key: 4,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-blue-100 px-3 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",
              title: a(r)("admin.ops.alertRules.title"),
              onClick: l[0] || (l[0] = (te) => h("openAlertRules"))
            }, [
              l[17] || (l[17] = e("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                })
              ], -1)),
              e("span", Ys, t(a(r)("admin.ops.alertRules.manage")), 1)
            ], 8, Zs)),
            s.fullscreen ? M("", !0) : (n(), d("button", {
              key: 5,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-gray-100 px-3 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.settings.title"),
              onClick: l[1] || (l[1] = (te) => h("openSettings"))
            }, [
              l[18] || (l[18] = e("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }),
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ], -1)),
              e("span", ea, t(a(r)("common.settings")), 1)
            ], 8, Xs)),
            s.fullscreen ? M("", !0) : (n(), d("button", {
              key: 6,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.fullscreen.enter"),
              onClick: l[2] || (l[2] = (te) => h("enterFullscreen"))
            }, [...l[19] || (l[19] = [
              e("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                })
              ], -1)
            ])], 8, ta))
          ])
        ]),
        k.value ? (n(), d("div", sa, [
          e("div", {
            class: Q(["rounded-2xl bg-gray-50 dark:bg-dark-900 lg:col-span-5", s.fullscreen ? "p-6" : "p-4"])
          }, [
            e("div", aa, [
              e("div", ra, [
                e("div", oa, [
                  e("div", na, [
                    e("h4", la, [
                      U(Ve, {
                        name: "brain",
                        size: "sm",
                        class: "text-blue-500"
                      }),
                      H(" " + t(a(r)("admin.ops.diagnosis.title")), 1)
                    ]),
                    e("div", ia, [
                      (n(!0), d(de, null, pe(Ot.value, (te, Ke) => (n(), d("div", {
                        key: Ke,
                        class: "flex gap-3"
                      }, [
                        e("div", da, [
                          te.type === "critical" ? (n(), d("svg", ua, [...l[20] || (l[20] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : te.type === "warning" ? (n(), d("svg", ca, [...l[21] || (l[21] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : (n(), d("svg", pa, [...l[22] || (l[22] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 100 2 1 1 0 000-2zm-1 3a1 1 0 012 0v4a1 1 0 11-2 0v-4z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])]))
                        ]),
                        e("div", ma, [
                          e("div", ga, t(te.message), 1),
                          e("div", va, t(te.impact), 1),
                          te.action ? (n(), d("div", _a, [
                            U(Ve, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            H(" " + t(te.action), 1)
                          ])) : M("", !0)
                        ])
                      ]))), 128))
                    ]),
                    e("div", xa, t(a(r)("admin.ops.diagnosis.footer")), 1)
                  ])
                ]),
                e("div", fa, [
                  (n(), d("svg", {
                    width: Oe.value,
                    height: Oe.value,
                    class: "-rotate-90 transform"
                  }, [
                    e("circle", {
                      cx: Oe.value / 2,
                      cy: Oe.value / 2,
                      r: xt.value,
                      "stroke-width": _t.value,
                      fill: "transparent",
                      class: "text-gray-200 dark:text-dark-700",
                      stroke: "currentColor"
                    }, null, 8, ha),
                    e("circle", {
                      cx: Oe.value / 2,
                      cy: Oe.value / 2,
                      r: xt.value,
                      "stroke-width": _t.value,
                      fill: "transparent",
                      stroke: Et.value,
                      "stroke-linecap": "round",
                      "stroke-dasharray": nt.value,
                      "stroke-dashoffset": lt.value,
                      class: "transition-all duration-1000 ease-out"
                    }, null, 8, ba)
                  ], 8, ya)),
                  e("div", ka, [
                    e("span", {
                      class: Q([s.fullscreen ? "text-5xl" : "text-3xl", "font-black", vt.value])
                    }, t(we.value ? a(r)("admin.ops.idleStatus") : k.value.health_score ?? "--"), 3),
                    e("span", {
                      class: Q([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase tracking-wider text-gray-400"])
                    }, t(a(r)("admin.ops.health")), 3)
                  ])
                ]),
                s.fullscreen ? M("", !0) : (n(), d("div", wa, [
                  e("div", $a, [
                    H(t(a(r)("admin.ops.healthCondition")) + " ", 1),
                    U(fe, {
                      content: a(r)("admin.ops.healthHelp")
                    }, null, 8, ["content"])
                  ]),
                  e("div", {
                    class: Q(["mt-1 text-xs font-bold", vt.value])
                  }, t(we.value ? a(r)("admin.ops.idleStatus") : typeof k.value.health_score == "number" && k.value.health_score >= 90 ? a(r)("admin.ops.healthyStatus") : a(r)("admin.ops.riskyStatus")), 3)
                ]))
              ]),
              e("div", Ca, [
                e("div", Sa, [
                  e("div", Ra, [
                    l[23] || (l[23] = e("div", { class: "relative flex h-3 w-3 shrink-0" }, [
                      e("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" }),
                      e("span", { class: "relative inline-flex h-3 w-3 rounded-full bg-blue-500" })
                    ], -1)),
                    e("h3", Ta, t(a(r)("admin.ops.realtime.title")), 1),
                    s.fullscreen ? M("", !0) : (n(), ie(fe, {
                      key: 0,
                      content: a(r)("admin.ops.tooltips.qps")
                    }, null, 8, ["content"]))
                  ]),
                  e("div", Da, [
                    (n(!0), d(de, null, pe(b.value, (te) => (n(), d("button", {
                      key: te,
                      type: "button",
                      class: Q(["rounded px-1.5 py-0.5 text-[9px] font-bold transition-colors sm:px-2 sm:text-[10px]", q.value === te ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600"]),
                      onClick: (Ke) => q.value = te
                    }, t(te), 11, Ea))), 128))
                  ])
                ]),
                e("div", {
                  class: Q(s.fullscreen ? "space-y-4" : "space-y-3")
                }, [
                  e("div", null, [
                    e("div", {
                      class: Q([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                    }, t(a(r)("admin.ops.current")), 3),
                    e("div", qa, [
                      e("div", La, [
                        e("span", {
                          class: Q([s.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, t(L.value.toFixed(1)), 3),
                        e("span", {
                          class: Q([s.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, "QPS", 2)
                      ]),
                      e("div", za, [
                        e("span", {
                          class: Q([s.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, t(ne.value.toFixed(1)), 3),
                        e("span", {
                          class: Q([s.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, t(a(r)("admin.ops.tps")), 3)
                      ])
                    ])
                  ]),
                  e("div", Ma, [
                    e("div", null, [
                      e("div", {
                        class: Q([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, t(a(r)("admin.ops.peak")), 3),
                      e("div", {
                        class: Q([s.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        e("div", Aa, [
                          e("span", Va, t(Se.value), 1),
                          l[24] || (l[24] = e("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        e("div", Fa, [
                          e("span", Oa, t(Ee.value), 1),
                          e("span", Ia, t(a(r)("admin.ops.tps")), 1)
                        ])
                      ], 2)
                    ]),
                    e("div", null, [
                      e("div", {
                        class: Q([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, t(a(r)("admin.ops.average")), 3),
                      e("div", {
                        class: Q([s.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        e("div", ja, [
                          e("span", Pa, t(qe.value), 1),
                          l[25] || (l[25] = e("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        e("div", Ua, [
                          e("span", Na, t(Ie.value), 1),
                          e("span", Ha, t(a(r)("admin.ops.tps")), 1)
                        ])
                      ], 2)
                    ])
                  ]),
                  l[26] || (l[26] = e("div", { class: "h-8 w-full overflow-hidden opacity-50" }, [
                    e("svg", {
                      class: "h-full w-full",
                      viewBox: "0 0 280 32",
                      preserveAspectRatio: "none"
                    }, [
                      e("path", {
                        d: "M0 16 Q 20 16, 40 16 T 80 16 T 120 10 T 160 22 T 200 16 T 240 16 T 280 16",
                        fill: "none",
                        stroke: "#3b82f6",
                        "stroke-width": "2",
                        "vector-effect": "non-scaling-stroke"
                      }, [
                        e("animate", {
                          attributeName: "d",
                          dur: "2s",
                          repeatCount: "indefinite",
                          values: `M0 16 Q 20 16, 40 16 T 80 16 T 120 10 T 160 22 T 200 16 T 240 16 T 280 16;
                              M0 16 Q 20 16, 40 16 T 80 16 T 120 16 T 160 16 T 200 10 T 240 22 T 280 16;
                              M0 16 Q 20 16, 40 16 T 80 16 T 120 16 T 160 16 T 200 16 T 240 16 T 280 16`,
                          keyTimes: "0;0.5;1"
                        })
                      ])
                    ])
                  ], -1))
                ], 2)
              ])
            ])
          ], 2),
          e("div", Ba, [
            e("div", Ga, [
              e("div", Qa, [
                e("div", Wa, [
                  e("span", Ka, t(a(r)("admin.ops.requestsTitle")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.totalRequests")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[3] || (l[3] = (te) => i({ title: a(r)("admin.ops.requestDetails.title") }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", Ja, [
                e("div", Za, [
                  e("span", Ya, t(a(r)("admin.ops.requests")) + ":", 1),
                  e("span", Xa, t(ce.value), 1)
                ]),
                e("div", er, [
                  e("span", tr, t(a(r)("admin.ops.tokens")) + ":", 1),
                  e("span", sr, t(he.value), 1)
                ]),
                e("div", ar, [
                  e("span", rr, t(a(r)("admin.ops.avgQps")) + ":", 1),
                  e("span", or, t(K.value), 1)
                ]),
                e("div", nr, [
                  e("span", lr, t(a(r)("admin.ops.avgTps")) + ":", 1),
                  e("span", ir, t(j.value), 1)
                ])
              ])
            ]),
            e("div", dr, [
              e("div", ur, [
                e("div", cr, [
                  e("span", pr, t(a(r)("admin.ops.sla")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.sla")
                  }, null, 8, ["content"])),
                  e("span", {
                    class: Q(["h-1.5 w-1.5 rounded-full", C(z.value) === "critical" ? "bg-red-500" : C(z.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[4] || (l[4] = (te) => i({ title: a(r)("admin.ops.requestDetails.title"), kind: "error" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(C(z.value))])
              }, t(z.value == null ? "-" : `${z.value.toFixed(3)}%`), 3),
              e("div", mr, [
                e("div", {
                  class: Q(["h-full transition-all", C(z.value) === "critical" ? "bg-red-500" : C(z.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"]),
                  style: gt({ width: `${Math.max((z.value ?? 0) - 90, 0) * 10}%` })
                }, null, 6)
              ]),
              e("div", gr, [
                e("div", vr, [
                  e("span", _r, t(a(r)("admin.ops.exceptions")) + ":", 1),
                  e("span", xr, t(a(Be)((k.value.request_count_sla ?? 0) - (k.value.success_count ?? 0))), 1)
                ])
              ])
            ]),
            e("div", fr, [
              e("div", yr, [
                e("div", hr, [
                  e("span", br, t(a(r)("admin.ops.latencyDuration")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.latency")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[5] || (l[5] = (te) => i({ title: a(r)("admin.ops.latencyDuration"), sort: "duration_desc" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", kr, [
                e("div", wr, t(be.value ?? "-"), 1),
                l[27] || (l[27] = e("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              e("div", $r, [
                e("div", Cr, [
                  l[28] || (l[28] = e("span", { class: "text-gray-500" }, "P95:", -1)),
                  e("span", Sr, t(ke.value ?? "-"), 1),
                  l[29] || (l[29] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Rr, [
                  l[30] || (l[30] = e("span", { class: "text-gray-500" }, "P90:", -1)),
                  e("span", Tr, t(Re.value ?? "-"), 1),
                  l[31] || (l[31] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Dr, [
                  l[32] || (l[32] = e("span", { class: "text-gray-500" }, "P50:", -1)),
                  e("span", Er, t(Qe.value ?? "-"), 1),
                  l[33] || (l[33] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", qr, [
                  l[34] || (l[34] = e("span", { class: "text-gray-500" }, "Avg:", -1)),
                  e("span", Lr, t(We.value ?? "-"), 1),
                  l[35] || (l[35] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", zr, [
                  l[36] || (l[36] = e("span", { class: "text-gray-500" }, "Max:", -1)),
                  e("span", Mr, t(Ze.value ?? "-"), 1),
                  l[37] || (l[37] = e("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            e("div", Ar, [
              e("div", Vr, [
                e("div", Fr, [
                  l[38] || (l[38] = e("span", { class: "text-[10px] font-bold uppercase text-gray-400" }, "TTFT", -1)),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.ttft")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[6] || (l[6] = (te) => i({ title: a(r)("admin.ops.ttftLabel"), kind: "success", sort: "ttft_desc" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", Or, [
                e("div", {
                  class: Q(["text-3xl font-black", W(E(je.value))])
                }, t(je.value ?? "-"), 3),
                l[39] || (l[39] = e("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              e("div", Ir, [
                e("div", jr, [
                  l[40] || (l[40] = e("span", { class: "text-gray-500" }, "P95:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(E(Fe.value))])
                  }, t(Fe.value ?? "-"), 3),
                  l[41] || (l[41] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Pr, [
                  l[42] || (l[42] = e("span", { class: "text-gray-500" }, "P90:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(E(rt.value))])
                  }, t(rt.value ?? "-"), 3),
                  l[43] || (l[43] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Ur, [
                  l[44] || (l[44] = e("span", { class: "text-gray-500" }, "P50:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(E(ot.value))])
                  }, t(ot.value ?? "-"), 3),
                  l[45] || (l[45] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Nr, [
                  l[46] || (l[46] = e("span", { class: "text-gray-500" }, "Avg:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(E(Pe.value))])
                  }, t(Pe.value ?? "-"), 3),
                  l[47] || (l[47] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Hr, [
                  l[48] || (l[48] = e("span", { class: "text-gray-500" }, "Max:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(E(Xe.value))])
                  }, t(Xe.value ?? "-"), 3),
                  l[49] || (l[49] = e("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            e("div", Br, [
              e("div", Gr, [
                e("div", Qr, [
                  e("span", Wr, t(a(r)("admin.ops.requestErrors")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.errors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[7] || (l[7] = (te) => O("request"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(T(ee.value))])
              }, t(ee.value == null ? "-" : `${ee.value.toFixed(2)}%`), 3),
              e("div", Kr, [
                e("div", Jr, [
                  e("span", Zr, t(a(r)("admin.ops.errorCount")) + ":", 1),
                  e("span", Yr, t(a(Be)(k.value.error_count_sla ?? 0)), 1)
                ]),
                e("div", Xr, [
                  e("span", eo, t(a(r)("admin.ops.businessLimited")) + ":", 1),
                  e("span", to, t(a(Be)(k.value.business_limited_count ?? 0)), 1)
                ])
              ])
            ]),
            e("div", so, [
              e("div", ao, [
                e("div", ro, [
                  e("span", oo, t(a(r)("admin.ops.upstreamErrors")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.upstreamErrors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[8] || (l[8] = (te) => O("upstream"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(I(oe.value))])
              }, t(oe.value == null ? "-" : `${oe.value.toFixed(2)}%`), 3),
              e("div", no, [
                e("div", lo, [
                  e("span", io, t(a(r)("admin.ops.errorCountExcl429529")) + ":", 1),
                  e("span", uo, t(a(Be)(k.value.upstream_error_count_excl_429_529 ?? 0)), 1)
                ]),
                e("div", co, [
                  l[50] || (l[50] = e("span", { class: "text-gray-500" }, "429/529:", -1)),
                  e("span", po, t(a(Be)((k.value.upstream_429_count ?? 0) + (k.value.upstream_529_count ?? 0))), 1)
                ])
              ])
            ])
          ])
        ])) : M("", !0),
        k.value ? (n(), d("div", mo, [
          e("div", go, [
            e("div", vo, [
              e("div", _o, [
                l[51] || (l[51] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "CPU", -1)),
                s.fullscreen ? M("", !0) : (n(), ie(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.cpu")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", It.value])
              }, t(yt.value == null ? "-" : `${yt.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", xo, t(a(r)("common.warning")) + " 80% · " + t(a(r)("common.critical")) + " 95% ", 1))
            ]),
            e("div", fo, [
              e("div", yo, [
                e("div", ho, t(a(r)("admin.ops.memory")), 1),
                s.fullscreen ? M("", !0) : (n(), ie(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.memory")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", jt.value])
              }, t(ht.value == null ? "-" : `${ht.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", bo, t(((Y = S.value) == null ? void 0 : Y.memory_used_mb) == null || (($e = S.value) == null ? void 0 : $e.memory_total_mb) == null ? "-" : `${a(as)(S.value.memory_used_mb)} / ${a(as)(S.value.memory_total_mb)}`), 1))
            ]),
            e("div", ko, [
              e("div", wo, [
                e("div", $o, t(a(r)("admin.ops.db")), 1),
                s.fullscreen ? M("", !0) : (n(), ie(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.db")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", Ut.value])
              }, t(Pt.value), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", Co, [
                H(t(a(r)("admin.ops.conns")) + " " + t(bt.value ?? "-") + " / " + t(dt.value ?? "-") + " · " + t(a(r)("admin.ops.active")) + " " + t(it.value ?? "-") + " · " + t(a(r)("admin.ops.idle")) + " " + t(Ue.value ?? "-") + " ", 1),
                qt.value != null ? (n(), d("span", So, " · " + t(a(r)("admin.ops.waiting")) + " " + t(qt.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", Ro, [
              e("div", To, [
                l[52] || (l[52] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "Redis", -1)),
                s.fullscreen ? M("", !0) : (n(), ie(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.redis")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", $.value])
              }, t(zt.value), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", Do, [
                H(t(a(r)("admin.ops.conns")) + " " + t(tt.value ?? "-") + " / " + t(ct.value ?? "-") + " ", 1),
                Lt.value != null ? (n(), d("span", Eo, " · " + t(a(r)("admin.ops.active")) + " " + t(Lt.value), 1)) : M("", !0),
                ut.value != null ? (n(), d("span", qo, " · " + t(a(r)("admin.ops.idle")) + " " + t(ut.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", Lo, [
              e("div", zo, [
                e("div", Mo, t(a(r)("admin.ops.goroutines")), 1),
                s.fullscreen ? M("", !0) : (n(), ie(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.goroutines")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", Ye.value])
              }, t(Ne.value), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", Ao, [
                H(t(a(r)("admin.ops.current")) + " ", 1),
                e("span", Vo, t(P.value ?? "-"), 1),
                H(" · " + t(a(r)("common.warning")) + " ", 1),
                e("span", { class: "font-mono" }, t(rs)),
                H(" · " + t(a(r)("common.critical")) + " ", 1),
                e("span", { class: "font-mono" }, t(os)),
                ((He = S.value) == null ? void 0 : He.concurrency_queue_depth) != null ? (n(), d("span", Fo, [
                  H(" · " + t(a(r)("admin.ops.queue")) + " ", 1),
                  e("span", Oo, t(S.value.concurrency_queue_depth), 1)
                ])) : M("", !0)
              ]))
            ]),
            e("div", Io, [
              e("div", jo, [
                e("div", Po, [
                  e("div", Uo, t(a(r)("admin.ops.jobs")), 1),
                  s.fullscreen ? M("", !0) : (n(), ie(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.jobs")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), d("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: ys
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", fs.value])
              }, t(xs.value), 3),
              s.fullscreen ? M("", !0) : (n(), d("div", No, [
                H(t(a(r)("common.total")) + " ", 1),
                e("span", Ho, t(Ae.value.length), 1),
                H(" · " + t(a(r)("common.warning")) + " ", 1),
                e("span", Bo, t(De.value), 1)
              ]))
            ])
          ])
        ])) : M("", !0),
        U(Je, {
          show: Nt.value,
          title: a(r)("admin.ops.jobs"),
          width: "wide",
          onClose: l[9] || (l[9] = (te) => Nt.value = !1)
        }, {
          default: ve(() => [
            Ae.value.length ? (n(), d("div", Qo, [
              (n(!0), d(de, null, pe(Ae.value, (te) => (n(), d("div", {
                key: te.job_name,
                class: "rounded-xl border border-gray-100 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
              }, [
                e("div", Wo, [
                  e("div", Ko, t(te.job_name), 1),
                  e("div", Jo, [
                    te.last_duration_ms != null ? (n(), d("span", Zo, t(te.last_duration_ms) + "ms", 1)) : M("", !0),
                    e("span", null, t(ft(te.updated_at)), 1)
                  ])
                ]),
                e("div", Yo, [
                  e("div", null, [
                    H(t(a(r)("admin.ops.lastSuccess")) + " ", 1),
                    e("span", Xo, t(ft(te.last_success_at)), 1)
                  ]),
                  e("div", null, [
                    H(t(a(r)("admin.ops.lastError")) + " ", 1),
                    e("span", en, t(ft(te.last_error_at)), 1)
                  ]),
                  e("div", null, [
                    H(t(a(r)("admin.ops.result")) + " ", 1),
                    e("span", tn, t(te.last_result || "-"), 1)
                  ])
                ]),
                te.last_error ? (n(), d("div", sn, t(te.last_error), 1)) : M("", !0)
              ]))), 128))
            ])) : (n(), d("div", Go, t(a(r)("admin.ops.noData")), 1))
          ]),
          _: 1
        }, 8, ["show", "title"]),
        U(Je, {
          show: B.value,
          title: a(r)("admin.ops.timeRange.custom"),
          width: "narrow",
          onClose: m
        }, {
          default: ve(() => [
            e("div", an, [
              e("div", null, [
                e("label", rn, t(a(r)("admin.ops.customTimeRange.startTime")), 1),
                re(e("input", {
                  "onUpdate:modelValue": l[10] || (l[10] = (te) => V.value = te),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [le, V.value]
                ])
              ]),
              e("div", null, [
                e("label", on, t(a(r)("admin.ops.customTimeRange.endTime")), 1),
                re(e("input", {
                  "onUpdate:modelValue": l[11] || (l[11] = (te) => c.value = te),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [le, c.value]
                ])
              ]),
              e("div", nn, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: m
                }, t(a(r)("common.cancel")), 1),
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600",
                  onClick: A
                }, t(a(r)("common.confirm")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ], 2);
    };
  }
}), dn = { class: "space-y-6" }, un = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, cn = {
  key: 0,
  class: "flex flex-wrap items-center gap-3"
}, pn = { class: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12" }, mn = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30 lg:col-span-5" }, gn = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, vn = { class: "space-y-4" }, _n = { class: "grid grid-cols-2 gap-3" }, xn = { class: "lg:col-span-7" }, fn = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:grid-cols-3" }, yn = { class: "grid grid-cols-1 gap-6 lg:grid-cols-4" }, hn = { class: "grid grid-cols-1 gap-6 md:grid-cols-3" }, bn = { class: "flex flex-wrap items-center justify-between gap-4" }, kn = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, wn = { class: "mt-6 space-y-3" }, $n = /* @__PURE__ */ xe({
  __name: "OpsDashboardSkeleton",
  props: {
    fullscreen: { type: Boolean, default: !1 }
  },
  setup(y) {
    const o = y;
    return (s, h) => (n(), d("div", dn, [
      e("div", {
        class: Q(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", un, [
          h[1] || (h[1] = e("div", { class: "space-y-2" }, [
            e("div", { class: "h-6 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
            e("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
          ], -1)),
          o.fullscreen ? M("", !0) : (n(), d("div", cn, [...h[0] || (h[0] = [
            $s('<div class="h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[160px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[150px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div>', 7)
          ])]))
        ]),
        e("div", pn, [
          e("div", mn, [
            e("div", gn, [
              h[3] || (h[3] = e("div", { class: "h-28 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)),
              e("div", vn, [
                h[2] || (h[2] = e("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
                e("div", _n, [
                  (n(), d(de, null, pe(4, (r) => e("div", {
                    key: r,
                    class: "h-14 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70"
                  })), 64))
                ])
              ])
            ])
          ]),
          e("div", xn, [
            e("div", fn, [
              (n(), d(de, null, pe(6, (r) => e("div", {
                key: r,
                class: "h-20 animate-pulse rounded-2xl bg-gray-50 dark:bg-dark-900/30"
              })), 64))
            ])
          ])
        ])
      ], 2),
      e("div", yn, [
        e("div", {
          class: Q(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", o.fullscreen ? "p-8" : "p-6"])
        }, [...h[4] || (h[4] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        e("div", {
          class: Q(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", o.fullscreen ? "p-8" : "p-6"])
        }, [...h[5] || (h[5] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        e("div", {
          class: Q(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-2", o.fullscreen ? "p-8" : "p-6"])
        }, [...h[6] || (h[6] = [
          e("div", { class: "h-4 w-56 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)
      ]),
      e("div", hn, [
        (n(), d(de, null, pe(3, (r) => e("div", {
          key: r,
          class: Q(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
        }, [...h[7] || (h[7] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)), 64))
      ]),
      e("div", {
        class: Q(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", bn, [
          h[9] || (h[9] = e("div", { class: "h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
          o.fullscreen ? M("", !0) : (n(), d("div", kn, [...h[8] || (h[8] = [
            e("div", { class: "h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))
        ]),
        e("div", wn, [
          (n(), d(de, null, pe(6, (r) => e("div", {
            key: r,
            class: "flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30"
          }, [...h[10] || (h[10] = [
            e("div", { class: "flex-1 space-y-2" }, [
              e("div", { class: "h-3 w-56 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
              e("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
            ], -1),
            e("div", { class: "h-7 w-20 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])), 64))
        ])
      ], 2)
    ]));
  }
}), Cn = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Sn = { class: "mb-4 flex shrink-0 items-center justify-between gap-3" }, Rn = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Tn = { class: "flex items-center gap-2" }, Dn = ["title"], En = ["disabled", "title"], qn = {
  key: 0,
  class: "mb-3 shrink-0 rounded-xl bg-red-50 p-2.5 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, Ln = {
  key: 1,
  class: "flex flex-1 items-center justify-center rounded-xl border border-dashed border-gray-200 text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, zn = {
  key: 2,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Mn = { class: "flex shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-dark-700 dark:bg-dark-900" }, An = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Vn = { class: "text-[10px] text-gray-500 dark:text-gray-400" }, Fn = {
  key: 0,
  class: "flex flex-1 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, On = {
  key: 1,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, In = { class: "mb-1.5 flex items-center justify-between gap-2" }, jn = { class: "flex min-w-0 flex-1 items-center gap-1.5" }, Pn = ["title"], Un = ["title"], Nn = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, Hn = { class: "font-mono font-bold text-gray-900 dark:text-white" }, Bn = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, Gn = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, Qn = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, Wn = {
  key: 2,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, Kn = { class: "mb-2 flex items-center justify-between gap-2" }, Jn = { class: "flex items-center gap-2" }, Zn = ["title"], Yn = {
  key: 0,
  class: "text-[10px] text-gray-400 dark:text-gray-500"
}, Xn = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, el = { class: "font-mono font-bold text-gray-900 dark:text-white" }, tl = { class: "mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, sl = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]" }, al = { class: "flex items-center gap-1" }, rl = { class: "text-gray-600 dark:text-gray-300" }, ol = { class: "font-bold text-zo-signal-600 dark:text-zo-signal-400" }, nl = { class: "text-gray-400 dark:text-gray-500" }, ll = {
  key: 0,
  class: "rounded-full bg-zo-alert-100 px-1.5 py-0.5 font-semibold text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, il = {
  key: 1,
  class: "rounded-full bg-red-100 px-1.5 py-0.5 font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, dl = {
  key: 2,
  class: "rounded-full bg-purple-100 px-1.5 py-0.5 font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
}, ul = {
  key: 3,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, cl = { class: "mb-1.5 flex items-center justify-between gap-2" }, pl = { class: "min-w-0 flex-1" }, ml = ["title"], gl = { class: "mt-0.5 text-[9px] text-gray-400 dark:text-gray-500" }, vl = { class: "flex shrink-0 items-center gap-2" }, _l = { class: "font-mono text-[11px] font-bold text-gray-900 dark:text-white" }, xl = {
  key: 0,
  class: "inline-flex items-center gap-1 rounded bg-zo-signal-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400"
}, fl = {
  key: 1,
  class: "inline-flex items-center gap-1 rounded bg-zo-alert-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, yl = {
  key: 2,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, hl = {
  key: 3,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, bl = {
  key: 4,
  class: "inline-flex items-center gap-1 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-400"
}, kl = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, wl = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, $l = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, Cl = /* @__PURE__ */ xe({
  __name: "OpsConcurrencyCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(y) {
    const o = y, { t: s } = ye(), h = R(!1), r = R(""), F = R(null), q = R(null), k = R(null), S = R(!1), g = x(() => {
      var A, m;
      return (((A = F.value) == null ? void 0 : A.enabled) ?? !0) && (((m = q.value) == null ? void 0 : m.enabled) ?? !0);
    });
    function v(A) {
      return typeof A == "number" && Number.isFinite(A) ? A : 0;
    }
    const b = x(() => S.value ? "user" : typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? "account" : o.platformFilter ? "group" : "platform"), B = x(() => {
      var O, C;
      const A = ((O = F.value) == null ? void 0 : O.platform) || {}, m = ((C = q.value) == null ? void 0 : C.platform) || {}, i = /* @__PURE__ */ new Set([...Object.keys(A), ...Object.keys(m)]);
      return Array.from(i).map((E) => {
        const T = A[E] || {}, I = m[E] || {}, W = v(I.total_accounts), ce = v(I.available_count), he = v(T.max_capacity), _e = v(T.current_in_use);
        return {
          key: E,
          name: E.toUpperCase(),
          total_accounts: W,
          available_accounts: ce,
          rate_limited_accounts: v(I.rate_limit_count),
          error_accounts: v(I.error_count),
          total_concurrency: he,
          used_concurrency: _e,
          waiting_in_queue: v(T.waiting_in_queue),
          availability_percentage: W > 0 ? Math.round(ce / W * 100) : 0,
          concurrency_percentage: he > 0 ? Math.round(_e / he * 100) : 0
        };
      }).sort((E, T) => T.concurrency_percentage - E.concurrency_percentage);
    }), V = x(() => {
      var C, E;
      const A = ((C = F.value) == null ? void 0 : C.group) || {}, m = ((E = q.value) == null ? void 0 : E.group) || {}, i = /* @__PURE__ */ new Set([...Object.keys(A), ...Object.keys(m)]);
      return Array.from(i).map((T) => {
        const I = A[T] || {}, W = m[T] || {};
        if (o.platformFilter && I.platform !== o.platformFilter && W.platform !== o.platformFilter)
          return null;
        const ce = v(W.total_accounts), he = v(W.available_count), _e = v(I.max_capacity), N = v(I.current_in_use);
        return {
          key: T,
          name: String(I.group_name || W.group_name || `Group ${T}`),
          platform: String(I.platform || W.platform || ""),
          total_accounts: ce,
          available_accounts: he,
          rate_limited_accounts: v(W.rate_limit_count),
          error_accounts: v(W.error_count),
          total_concurrency: _e,
          used_concurrency: N,
          waiting_in_queue: v(I.waiting_in_queue),
          availability_percentage: ce > 0 ? Math.round(he / ce * 100) : 0,
          concurrency_percentage: _e > 0 ? Math.round(N / _e * 100) : 0
        };
      }).filter((T) => T !== null).sort((T, I) => I.concurrency_percentage - T.concurrency_percentage);
    }), c = x(() => {
      var C, E;
      const A = ((C = F.value) == null ? void 0 : C.account) || {}, m = ((E = q.value) == null ? void 0 : E.account) || {}, i = /* @__PURE__ */ new Set([...Object.keys(A), ...Object.keys(m)]);
      return Array.from(i).map((T) => {
        const I = A[T] || {}, W = m[T] || {};
        return typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 && I.group_id !== o.groupIdFilter && W.group_id !== o.groupIdFilter ? null : {
          key: T,
          name: String(I.account_name || W.account_name || `Account ${T}`),
          platform: String(I.platform || W.platform || ""),
          group_name: String(I.group_name || W.group_name || ""),
          current_in_use: v(I.current_in_use),
          max_capacity: v(I.max_capacity),
          waiting_in_queue: v(I.waiting_in_queue),
          load_percentage: v(I.load_percentage),
          is_available: W.is_available || !1,
          is_rate_limited: W.is_rate_limited || !1,
          rate_limit_remaining_sec: W.rate_limit_remaining_sec,
          is_overloaded: W.is_overloaded || !1,
          overload_remaining_sec: W.overload_remaining_sec,
          has_error: W.has_error || !1,
          error_message: W.error_message || ""
        };
      }).filter((T) => T !== null).sort((T, I) => T.has_error !== I.has_error ? T.has_error ? -1 : 1 : T.is_rate_limited !== I.is_rate_limited ? T.is_rate_limited ? -1 : 1 : I.load_percentage - T.load_percentage);
    }), w = x(() => {
      var m;
      const A = ((m = k.value) == null ? void 0 : m.user) || {};
      return Object.keys(A).map((i) => {
        const O = A[i] || {};
        return {
          key: i,
          user_id: v(O.user_id),
          user_email: O.user_email || `User ${i}`,
          username: O.username || "",
          current_in_use: v(O.current_in_use),
          max_capacity: v(O.max_capacity),
          waiting_in_queue: v(O.waiting_in_queue),
          load_percentage: v(O.load_percentage)
        };
      }).sort((i, O) => O.current_in_use - i.current_in_use || O.load_percentage - i.load_percentage);
    }), D = x(() => b.value === "user" ? w.value : b.value === "account" ? c.value : b.value === "group" ? V.value : B.value), f = x(() => b.value === "user" ? s("admin.ops.concurrency.byUser") : b.value === "account" ? s("admin.ops.concurrency.byAccount") : b.value === "group" ? s("admin.ops.concurrency.byGroup") : s("admin.ops.concurrency.byPlatform"));
    async function J() {
      var A, m;
      h.value = !0, r.value = "";
      try {
        if (S.value) {
          const i = await se.getUserConcurrencyStats();
          k.value = i;
        } else {
          const [i, O] = await Promise.all([
            se.getConcurrencyStats(o.platformFilter, o.groupIdFilter),
            se.getAccountAvailabilityStats(o.platformFilter, o.groupIdFilter)
          ]);
          F.value = i, q.value = O;
        }
      } catch (i) {
        console.error("[OpsConcurrencyCard] Failed to load data", i), r.value = ((m = (A = i == null ? void 0 : i.response) == null ? void 0 : A.data) == null ? void 0 : m.detail) || s("admin.ops.concurrency.loadFailed");
      } finally {
        h.value = !1;
      }
    }
    ge(
      () => o.refreshToken,
      () => {
        g.value && J();
      }
    ), ge(
      () => S.value,
      () => {
        J();
      }
    );
    function ae(A) {
      return A >= 90 ? "bg-red-500 dark:bg-red-600" : A >= 70 || A >= 50 ? "bg-zo-alert-500 dark:bg-zo-alert-600" : "bg-zo-signal-500 dark:bg-zo-signal-600";
    }
    function X(A) {
      return `width: ${Math.min(100, Math.max(0, A))}%`;
    }
    function Z(A) {
      return A >= 90 ? "text-red-600 dark:text-red-400" : A >= 70 || A >= 50 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }
    function ue(A) {
      if (A <= 0) return "0s";
      if (A < 60) return `${Math.round(A)}s`;
      const m = Math.floor(A / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h`;
    }
    return ge(
      () => g.value,
      async (A) => {
        A && await J();
      },
      { immediate: !0 }
    ), (A, m) => (n(), d("div", Cn, [
      e("div", Sn, [
        e("h3", Rn, [
          m[1] || (m[1] = e("svg", {
            class: "h-4 w-4 text-blue-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M13 10V3L4 14h7v7l9-11h-7z"
            })
          ], -1)),
          H(" " + t(a(s)("admin.ops.concurrency.title")), 1)
        ]),
        e("div", Tn, [
          e("button", {
            class: Q(["flex items-center justify-center rounded-lg px-2 py-1 transition-colors", S.value ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-300"]),
            title: S.value ? a(s)("admin.ops.concurrency.switchToPlatform") : a(s)("admin.ops.concurrency.switchToUser"),
            onClick: m[0] || (m[0] = (i) => S.value = !S.value)
          }, [...m[2] || (m[2] = [
            e("svg", {
              class: "h-3.5 w-3.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ], -1)
          ])], 10, Dn),
          e("button", {
            class: "flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-[11px] font-semibold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: h.value,
            title: a(s)("common.refresh"),
            onClick: J
          }, [
            (n(), d("svg", {
              class: Q(["h-3 w-3", { "animate-spin": h.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...m[3] || (m[3] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2))
          ], 8, En)
        ])
      ]),
      r.value ? (n(), d("div", qn, t(r.value), 1)) : M("", !0),
      g.value ? (n(), d("div", zn, [
        e("div", Mn, [
          e("span", An, t(f.value), 1),
          e("span", Vn, t(a(s)("admin.ops.concurrency.totalRows", { count: D.value.length })), 1)
        ]),
        D.value.length === 0 ? (n(), d("div", Fn, t(a(s)("admin.ops.concurrency.empty")), 1)) : b.value === "user" ? (n(), d("div", On, [
          (n(!0), d(de, null, pe(D.value, (i) => (n(), d("div", {
            key: i.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", In, [
              e("div", jn, [
                e("span", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: i.username || i.user_email
                }, t(i.username || i.user_email), 9, Pn),
                i.username ? (n(), d("span", {
                  key: 0,
                  class: "shrink-0 truncate text-[10px] text-gray-400 dark:text-gray-500",
                  title: i.user_email
                }, t(i.user_email), 9, Un)) : M("", !0)
              ]),
              e("div", Nn, [
                e("span", Hn, t(i.current_in_use) + "/" + t(i.max_capacity), 1),
                e("span", {
                  class: Q(["font-bold", Z(i.load_percentage)])
                }, t(Math.round(i.load_percentage)) + "% ", 3)
              ])
            ]),
            e("div", Bn, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", ae(i.load_percentage)]),
                style: gt(X(i.load_percentage))
              }, null, 6)
            ]),
            i.waiting_in_queue > 0 ? (n(), d("div", Gn, [
              e("span", Qn, t(a(s)("admin.ops.concurrency.queued", { count: i.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ])) : b.value === "platform" || b.value === "group" ? (n(), d("div", Wn, [
          (n(!0), d(de, null, pe(D.value, (i) => (n(), d("div", {
            key: i.key,
            class: "rounded-lg bg-gray-50 p-3 dark:bg-dark-900"
          }, [
            e("div", Kn, [
              e("div", Jn, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: i.name
                }, t(i.name), 9, Zn),
                b.value === "group" && i.platform ? (n(), d("span", Yn, t(i.platform.toUpperCase()), 1)) : M("", !0)
              ]),
              e("div", Xn, [
                e("span", el, t(i.used_concurrency) + "/" + t(i.total_concurrency), 1),
                e("span", {
                  class: Q(["font-bold", Z(i.concurrency_percentage)])
                }, t(i.concurrency_percentage) + "% ", 3)
              ])
            ]),
            e("div", tl, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", ae(i.concurrency_percentage)]),
                style: gt(X(i.concurrency_percentage))
              }, null, 6)
            ]),
            e("div", sl, [
              e("div", al, [
                m[4] || (m[4] = e("svg", {
                  class: "h-3 w-3 text-gray-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  })
                ], -1)),
                e("span", rl, [
                  e("span", ol, t(i.available_accounts), 1),
                  H("/" + t(i.total_accounts), 1)
                ]),
                e("span", nl, t(i.availability_percentage) + "%", 1)
              ]),
              i.rate_limited_accounts > 0 ? (n(), d("span", ll, t(a(s)("admin.ops.concurrency.rateLimited", { count: i.rate_limited_accounts })), 1)) : M("", !0),
              i.error_accounts > 0 ? (n(), d("span", il, t(a(s)("admin.ops.concurrency.errorAccounts", { count: i.error_accounts })), 1)) : M("", !0),
              i.waiting_in_queue > 0 ? (n(), d("span", dl, t(a(s)("admin.ops.concurrency.queued", { count: i.waiting_in_queue })), 1)) : M("", !0)
            ])
          ]))), 128))
        ])) : (n(), d("div", ul, [
          (n(!0), d(de, null, pe(D.value, (i) => (n(), d("div", {
            key: i.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", cl, [
              e("div", pl, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: i.name
                }, t(i.name), 9, ml),
                e("div", gl, t(i.group_name), 1)
              ]),
              e("div", vl, [
                e("span", _l, t(i.current_in_use) + "/" + t(i.max_capacity), 1),
                i.is_available ? (n(), d("span", xl, [
                  m[5] || (m[5] = e("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M5 13l4 4L19 7"
                    })
                  ], -1)),
                  H(" " + t(a(s)("admin.ops.accountAvailability.available")), 1)
                ])) : i.is_rate_limited ? (n(), d("span", fl, [
                  m[6] || (m[6] = e("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ], -1)),
                  H(" " + t(ue(i.rate_limit_remaining_sec || 0)), 1)
                ])) : i.is_overloaded ? (n(), d("span", yl, [
                  m[7] || (m[7] = e("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                  ], -1)),
                  H(" " + t(ue(i.overload_remaining_sec || 0)), 1)
                ])) : i.has_error ? (n(), d("span", hl, [
                  m[8] || (m[8] = e("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)),
                  H(" " + t(a(s)("admin.ops.accountAvailability.accountError")), 1)
                ])) : (n(), d("span", bl, t(a(s)("admin.ops.accountAvailability.unavailable")), 1))
              ])
            ]),
            e("div", kl, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", ae(i.load_percentage)]),
                style: gt(X(i.load_percentage))
              }, null, 6)
            ]),
            i.waiting_in_queue > 0 ? (n(), d("div", wl, [
              e("span", $l, t(a(s)("admin.ops.concurrency.queued", { count: i.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ]))
      ])) : (n(), d("div", Ln, t(a(s)("admin.ops.concurrency.disabledHint")), 1))
    ]));
  }
}), Sl = /* @__PURE__ */ Cs(Cl, [["__scopeId", "data-v-6cb95ad3"]]), Rl = /* @__PURE__ */ new Set([
  "upstream request failed",
  "upstream request failed after retries",
  "upstream gateway error",
  "upstream service temporarily unavailable"
]);
function Tl(y) {
  const o = String(y || "").trim();
  if (!o) return null;
  try {
    const s = JSON.parse(o), h = s == null ? void 0 : s.error;
    if (!h || typeof h != "object") return null;
    const r = typeof h.type == "string" ? h.type.trim() : "", F = typeof h.message == "string" ? h.message.trim() : "";
    return !r && !F ? null : { type: r, message: F };
  } catch {
    return null;
  }
}
function Dl(y) {
  const o = Tl(y);
  return !o || o.type !== "upstream_error" ? !1 : Rl.has(o.message.toLowerCase());
}
function us(y) {
  if (!y) return "";
  const o = [
    y.upstream_error_detail,
    y.upstream_errors,
    y.upstream_error_message
  ];
  for (const s of o) {
    const h = String(s || "").trim();
    if (h && !(h === "[]" || h === "{}" || h.toLowerCase() === "null"))
      return h;
  }
  return "";
}
function El(y, o) {
  if (!y) return "";
  const s = us(y), h = String(y.error_body || "").trim();
  return o === "upstream" ? s || h : !h || s && Dl(h) ? s : h;
}
const ql = {
  key: 0,
  class: "flex items-center justify-center py-16"
}, Ll = { class: "flex flex-col items-center gap-3" }, zl = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, Ml = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, Al = {
  key: 2,
  class: "space-y-6 p-6"
}, Vl = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" }, Fl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Ol = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Il = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, jl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Pl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ul = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Nl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Hl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Bl = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Gl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Ql = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Wl = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Kl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Jl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Zl = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Yl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Xl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ei = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, ti = { class: "font-mono" }, si = { class: "font-mono text-primary-600 dark:text-primary-400" }, ai = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ri = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, oi = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, ni = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, li = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ii = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, di = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ui = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ci = { class: "mt-1" }, pi = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, mi = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, gi = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, vi = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, _i = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, xi = ["title"], fi = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900"
}, yi = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, hi = { class: "mt-1 font-mono text-sm font-medium text-gray-900 dark:text-white" }, bi = { class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900" }, ki = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, wi = { class: "mt-4 max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-100" }, $i = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900"
}, Ci = { class: "flex flex-wrap items-center justify-between gap-2" }, Si = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, Ri = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Ti = {
  key: 0,
  class: "mt-3 text-sm text-gray-500 dark:text-gray-400"
}, Di = {
  key: 1,
  class: "mt-4 space-y-3"
}, Ei = { class: "flex flex-wrap items-center justify-between gap-2" }, qi = { class: "text-xs font-black text-gray-900 dark:text-white" }, Li = {
  key: 0,
  class: "ml-2 rounded-md bg-gray-100 px-2 py-0.5 font-mono text-[10px] font-bold text-gray-700 dark:bg-dark-700 dark:text-gray-200"
}, zi = { class: "flex items-center gap-2" }, Mi = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, Ai = ["disabled", "title", "onClick"], Vi = { class: "mt-3 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, Fi = { class: "text-gray-400" }, Oi = { class: "ml-1 font-mono" }, Ii = { class: "text-gray-400" }, ji = { class: "ml-1 font-mono" }, Pi = {
  key: 0,
  class: "mt-3 break-words text-sm font-medium text-gray-900 dark:text-white"
}, Ui = {
  key: 1,
  class: "mt-3 max-h-[240px] overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-100"
}, Ni = /* @__PURE__ */ xe({
  __name: "OpsErrorDetailModal",
  props: {
    show: { type: Boolean },
    errorId: {},
    errorType: {}
  },
  emits: ["update:show"],
  setup(y, { emit: o }) {
    const s = y, h = o, { t: r } = ye(), F = st(), q = R(!1), k = R(null), S = x(() => s.errorType === "request"), g = x(() => {
      var E, T;
      return ((E = k.value) == null ? void 0 : E.request_id) || ((T = k.value) == null ? void 0 : T.client_request_id) || "";
    }), v = x(() => El(k.value, s.errorType)), b = x(() => s.errorId ? r("admin.ops.errorDetail.titleWithId", { id: String(s.errorId) }) : r("admin.ops.errorDetail.title")), B = x(() => r("admin.ops.errorDetail.noErrorSelected"));
    function V(E) {
      if (!E) return !1;
      const T = String(E.phase || "").toLowerCase(), I = String(E.error_owner || "").toLowerCase();
      return T === "upstream" && I === "provider";
    }
    function c(E) {
      switch (E) {
        case 1:
          return r("admin.ops.errorDetail.requestTypeSync");
        case 2:
          return r("admin.ops.errorDetail.requestTypeStream");
        case 3:
          return r("admin.ops.errorDetail.requestTypeWs");
        default:
          return r("admin.ops.errorDetail.requestTypeUnknown");
      }
    }
    function w(E) {
      if (!E) return !1;
      const T = String(E.requested_model || "").trim(), I = String(E.upstream_model || "").trim();
      return !!T && !!I && T !== I;
    }
    function D(E) {
      if (!E) return "";
      const T = String(E.upstream_model || "").trim();
      if (T) return T;
      const I = String(E.requested_model || "").trim();
      return I || String(E.model || "").trim();
    }
    const f = R([]), J = R(!1), ae = x(() => f.value), X = R(/* @__PURE__ */ new Set());
    function Z(E) {
      const T = us(E);
      return T || String(E.error_body || "").trim();
    }
    function ue(E) {
      const T = new Set(X.value);
      T.has(E) ? T.delete(E) : T.add(E), X.value = T;
    }
    async function A(E) {
      J.value = !0;
      try {
        const T = await se.listRequestErrorUpstreamErrors(
          E,
          { page: 1, page_size: 100, view: "all" },
          { include_detail: !0 }
        );
        f.value = T.items || [];
      } catch (T) {
        console.error("[OpsErrorDetailModal] Failed to load correlated upstream errors", T), f.value = [];
      } finally {
        J.value = !1;
      }
    }
    function m() {
      h("update:show", !1);
    }
    function i(E) {
      if (!E) return "N/A";
      try {
        return JSON.stringify(JSON.parse(E), null, 2);
      } catch {
        return E;
      }
    }
    async function O(E) {
      var T;
      q.value = !0;
      try {
        const W = (s.errorType || (((T = k.value) == null ? void 0 : T.phase) === "upstream" ? "upstream" : "request")) === "upstream" ? await se.getUpstreamErrorDetail(E) : await se.getRequestErrorDetail(E);
        k.value = W;
      } catch (I) {
        k.value = null, F.showError((I == null ? void 0 : I.message) || r("admin.ops.failedToLoadErrorDetail"));
      } finally {
        q.value = !1;
      }
    }
    ge(
      () => [s.show, s.errorId],
      ([E, T]) => {
        if (!E) {
          k.value = null;
          return;
        }
        typeof T == "number" && T > 0 && (X.value = /* @__PURE__ */ new Set(), O(T), s.errorType === "request" ? A(T) : f.value = []);
      },
      { immediate: !0 }
    );
    const C = x(() => {
      var T;
      const E = ((T = k.value) == null ? void 0 : T.status_code) ?? 0;
      return E >= 500 ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30" : E === 429 ? "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-500/30" : E >= 400 ? "bg-zo-alert-50 text-zo-alert-700 ring-zo-alert-600/20 dark:bg-zo-alert-900/30 dark:text-zo-alert-400 dark:ring-zo-alert-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-400 dark:ring-gray-500/30";
    });
    return (E, T) => (n(), ie(Je, {
      show: y.show,
      title: b.value,
      width: "full",
      "close-on-click-outside": !0,
      onClose: m
    }, {
      default: ve(() => [
        q.value ? (n(), d("div", ql, [
          e("div", Ll, [
            T[0] || (T[0] = e("div", { class: "h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
            e("div", zl, t(a(r)("admin.ops.errorDetail.loading")), 1)
          ])
        ])) : k.value ? (n(), d("div", Al, [
          e("div", Vl, [
            e("div", Fl, [
              e("div", Ol, t(a(r)("admin.ops.errorDetail.requestId")), 1),
              e("div", Il, t(g.value || "—"), 1)
            ]),
            e("div", jl, [
              e("div", Pl, t(a(r)("admin.ops.errorDetail.time")), 1),
              e("div", Ul, t(a(zs)(k.value.created_at)), 1)
            ]),
            e("div", Nl, [
              e("div", Hl, t(V(k.value) ? a(r)("admin.ops.errorDetail.account") : a(r)("admin.ops.errorDetail.user")), 1),
              e("div", Bl, [
                V(k.value) ? (n(), d(de, { key: 0 }, [
                  H(t(k.value.account_name || (k.value.account_id != null ? String(k.value.account_id) : "—")), 1)
                ], 64)) : (n(), d(de, { key: 1 }, [
                  H(t(k.value.user_email || (k.value.user_id != null ? String(k.value.user_id) : "—")), 1)
                ], 64))
              ])
            ]),
            e("div", Gl, [
              e("div", Ql, t(a(r)("admin.ops.errorDetail.platform")), 1),
              e("div", Wl, t(k.value.platform || "—"), 1)
            ]),
            e("div", Kl, [
              e("div", Jl, t(a(r)("admin.ops.errorDetail.group")), 1),
              e("div", Zl, t(k.value.group_name || (k.value.group_id != null ? String(k.value.group_id) : "—")), 1)
            ]),
            e("div", Yl, [
              e("div", Xl, t(a(r)("admin.ops.errorDetail.model")), 1),
              e("div", ei, [
                w(k.value) ? (n(), d(de, { key: 0 }, [
                  e("span", ti, t(k.value.requested_model), 1),
                  T[1] || (T[1] = e("span", { class: "mx-1 text-gray-400" }, "→", -1)),
                  e("span", si, t(k.value.upstream_model), 1)
                ], 64)) : (n(), d(de, { key: 1 }, [
                  H(t(D(k.value) || "—"), 1)
                ], 64))
              ])
            ]),
            e("div", ai, [
              e("div", ri, t(a(r)("admin.ops.errorDetail.inboundEndpoint")), 1),
              e("div", oi, t(k.value.inbound_endpoint || "—"), 1)
            ]),
            e("div", ni, [
              e("div", li, t(a(r)("admin.ops.errorDetail.upstreamEndpoint")), 1),
              e("div", ii, t(k.value.upstream_endpoint || "—"), 1)
            ]),
            e("div", di, [
              e("div", ui, t(a(r)("admin.ops.errorDetail.status")), 1),
              e("div", ci, [
                e("span", {
                  class: Q(["inline-flex items-center rounded-lg px-2 py-1 text-xs font-black ring-1 ring-inset shadow-sm", C.value])
                }, t(k.value.status_code), 3)
              ])
            ]),
            e("div", pi, [
              e("div", mi, t(a(r)("admin.ops.errorDetail.requestType")), 1),
              e("div", gi, t(c(k.value.request_type)), 1)
            ]),
            e("div", vi, [
              e("div", _i, t(a(r)("admin.ops.errorDetail.message")), 1),
              e("div", {
                class: "mt-1 truncate text-sm font-medium text-gray-900 dark:text-white",
                title: k.value.message
              }, t(k.value.message || "—"), 9, xi)
            ]),
            k.value.api_key_prefix ? (n(), d("div", fi, [
              e("div", yi, t(a(r)("admin.ops.errorDetail.apiKeyPrefix")), 1),
              e("div", hi, t(k.value.api_key_prefix), 1)
            ])) : M("", !0)
          ]),
          e("div", bi, [
            e("h3", ki, t(a(r)("admin.ops.errorDetail.responseBody")), 1),
            e("pre", wi, [
              e("code", null, t(i(v.value || "")), 1)
            ])
          ]),
          S.value ? (n(), d("div", $i, [
            e("div", Ci, [
              e("h3", Si, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 1),
              J.value ? (n(), d("div", Ri, t(a(r)("common.loading")), 1)) : M("", !0)
            ]),
            !J.value && !ae.value.length ? (n(), d("div", Ti, t(a(r)("common.noData")), 1)) : (n(), d("div", Di, [
              (n(!0), d(de, null, pe(ae.value, (I, W) => (n(), d("div", {
                key: I.id,
                class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
              }, [
                e("div", Ei, [
                  e("div", qi, [
                    H(" #" + t(W + 1) + " ", 1),
                    I.type ? (n(), d("span", Li, t(I.type), 1)) : M("", !0)
                  ]),
                  e("div", zi, [
                    e("div", Mi, t(I.status_code ?? "—"), 1),
                    e("button", {
                      type: "button",
                      class: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-bold text-primary-700 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-60 dark:text-primary-200 dark:hover:bg-dark-700",
                      disabled: !Z(I),
                      title: Z(I) ? "" : a(r)("common.noData"),
                      onClick: (ce) => ue(I.id)
                    }, [
                      U(Ve, {
                        name: X.value.has(I.id) ? "chevronDown" : "chevronRight",
                        size: "xs",
                        "stroke-width": 2
                      }, null, 8, ["name"]),
                      e("span", null, t(X.value.has(I.id) ? a(r)("admin.ops.errorDetail.responsePreview.collapse") : a(r)("admin.ops.errorDetail.responsePreview.expand")), 1)
                    ], 8, Ai)
                  ])
                ]),
                e("div", Vi, [
                  e("div", null, [
                    e("span", Fi, t(a(r)("admin.ops.errorDetail.upstreamEvent.status")) + ":", 1),
                    e("span", Oi, t(I.status_code ?? "—"), 1)
                  ]),
                  e("div", null, [
                    e("span", Ii, t(a(r)("admin.ops.errorDetail.upstreamEvent.requestId")) + ":", 1),
                    e("span", ji, t(I.request_id || I.client_request_id || "—"), 1)
                  ])
                ]),
                I.message ? (n(), d("div", Pi, t(I.message), 1)) : M("", !0),
                X.value.has(I.id) ? (n(), d("pre", Ui, [
                  e("code", null, t(i(Z(I))), 1)
                ])) : M("", !0)
              ]))), 128))
            ]))
          ])) : M("", !0)
        ])) : (n(), d("div", Ml, t(B.value), 1))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Hi = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Bi = { class: "mb-4 flex items-center justify-between" }, Gi = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Qi = ["disabled", "title"], Wi = { class: "relative min-h-0 flex-1" }, Ki = {
  key: 0,
  class: "flex h-full flex-col"
}, Ji = { class: "flex-1" }, Zi = { class: "mt-4 flex flex-col items-center gap-2" }, Yi = {
  key: 0,
  class: "text-xs font-bold text-gray-900 dark:text-white"
}, Xi = { class: "flex flex-wrap justify-center gap-3" }, ed = { class: "text-gray-500 dark:text-gray-400" }, td = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, sd = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, ad = /* @__PURE__ */ xe({
  __name: "OpsErrorDistributionChart",
  props: {
    data: {},
    loading: { type: Boolean }
  },
  emits: ["openDetails"],
  setup(y, { emit: o }) {
    St.register(Ms, Rt, Tt);
    const s = y, h = o, { t: r } = ye(), F = x(() => document.documentElement.classList.contains("dark")), q = x(() => ({
      blue: "#3b82f6",
      red: "#ef4444",
      orange: "#fb7185",
      gray: "#9ca3af",
      text: F.value ? "#9ca3af" : "#6b7280"
    })), k = x(
      () => {
        var c;
        return (((c = s.data) == null ? void 0 : c.items) ?? []).reduce((w, D) => w + Number(D.sla || 0), 0);
      }
    ), S = x(() => k.value > 0), g = x(() => S.value ? "ready" : s.loading ? "loading" : "empty"), v = x(() => {
      if (!s.data) return [];
      let c = 0, w = 0, D = 0, f = 0;
      for (const ae of s.data.items || []) {
        const X = Number(ae.status_code || 0), Z = Number(ae.sla || 0);
        !Number.isFinite(X) || !Number.isFinite(Z) || ([502, 503, 504].includes(X) ? c += Z : X >= 400 && X < 500 ? w += Z : X === 500 ? D += Z : f += Z);
      }
      const J = [];
      return c > 0 && J.push({ label: r("admin.ops.upstream"), count: c, color: q.value.orange }), w > 0 && J.push({ label: r("admin.ops.client"), count: w, color: q.value.blue }), D > 0 && J.push({ label: r("admin.ops.system"), count: D, color: q.value.red }), f > 0 && J.push({ label: r("admin.ops.other"), count: f, color: q.value.gray }), J;
    }), b = x(() => v.value.length === 0 ? null : v.value.reduce((c, w) => w.count > c.count ? w : c)), B = x(() => !S.value || v.value.length === 0 ? null : {
      labels: v.value.map((c) => c.label),
      datasets: [
        {
          data: v.value.map((c) => c.count),
          backgroundColor: v.value.map((c) => c.color),
          borderWidth: 0
        }
      ]
    }), V = x(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: { display: !1 },
        tooltip: {
          backgroundColor: F.value ? "#1f2937" : "#ffffff",
          titleColor: F.value ? "#f3f4f6" : "#111827",
          bodyColor: F.value ? "#d1d5db" : "#4b5563"
        }
      }
    }));
    return (c, w) => (n(), d("div", Hi, [
      e("div", Bi, [
        e("h3", Gi, [
          w[1] || (w[1] = e("svg", {
            class: "h-4 w-4 text-red-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            })
          ], -1)),
          H(" " + t(a(r)("admin.ops.errorDistribution")) + " ", 1),
          U(fe, {
            content: a(r)("admin.ops.tooltips.errorDistribution")
          }, null, 8, ["content"])
        ]),
        e("button", {
          type: "button",
          class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
          disabled: g.value !== "ready",
          title: a(r)("admin.ops.errorTrend"),
          onClick: w[0] || (w[0] = (D) => h("openDetails"))
        }, t(a(r)("admin.ops.requestDetails.details")), 9, Qi)
      ]),
      e("div", Wi, [
        g.value === "ready" && B.value ? (n(), d("div", Ki, [
          e("div", Ji, [
            U(a(As), {
              data: B.value,
              options: { ...V.value, cutout: "65%" }
            }, null, 8, ["data", "options"])
          ]),
          e("div", Zi, [
            b.value ? (n(), d("div", Yi, [
              H(t(a(r)("admin.ops.top")) + ": ", 1),
              e("span", {
                style: gt({ color: b.value.color })
              }, t(b.value.label), 5)
            ])) : M("", !0),
            e("div", Xi, [
              (n(!0), d(de, null, pe(v.value, (D) => (n(), d("div", {
                key: D.label,
                class: "flex items-center gap-1.5 text-xs"
              }, [
                e("span", {
                  class: "h-2 w-2 rounded-full",
                  style: gt({ backgroundColor: D.color })
                }, null, 4),
                e("span", ed, t(D.label) + " " + t(D.count), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), d("div", td, [
          g.value === "loading" ? (n(), d("div", sd, t(a(r)("common.loading")), 1)) : (n(), ie(at, {
            key: 1,
            title: a(r)("common.noData"),
            description: a(r)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), rd = { status: "idle" }, cs = "sub2api:ip-geo-cache:v1", ps = 1440 * 60 * 1e3, ns = 50, od = "https://get.geojs.io/v1/ip/geo", nd = "https://get.geojs.io/v1/ip/geo.json", Ce = Bt(/* @__PURE__ */ new Map());
function es(y) {
  return (y == null ? void 0 : y.status) === "success" && typeof y.fetchedAt == "number" && Date.now() - y.fetchedAt <= ps;
}
function ms(y) {
  const o = Ce.get(y);
  if ((o == null ? void 0 : o.status) === "success" && !es(o)) {
    Ce.delete(y), ts();
    return;
  }
  return o;
}
function gs(y) {
  const o = y.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (o) {
    const r = Number(o[1]), F = Number(o[2]);
    return r === 10 || r === 127 || r === 169 && F === 254 || r === 172 && F >= 16 && F <= 31 || r === 192 && F === 168;
  }
  const s = y.toLowerCase();
  if (s === "::1") return !0;
  const h = s.split(":", 1)[0];
  return !!(/^fe[89ab][0-9a-f]$/.test(h) || /^f[cd][0-9a-f]{2}$/.test(h));
}
function ld() {
  try {
    const y = localStorage.getItem(cs);
    if (!y) return;
    const o = JSON.parse(y), s = Date.now();
    for (const [h, r] of Object.entries(o))
      !r || typeof r.fetchedAt != "number" || s - r.fetchedAt > ps || Ce.set(h, { status: "success", label: r.label, detail: r.detail, fetchedAt: r.fetchedAt });
  } catch {
  }
}
function ts() {
  try {
    const y = {};
    for (const [o, s] of Ce.entries())
      s.status === "success" && s.label && s.fetchedAt && (y[o] = { label: s.label, detail: s.detail, fetchedAt: s.fetchedAt });
    localStorage.setItem(cs, JSON.stringify(y));
  } catch {
  }
}
ld();
function vs(y) {
  return ms(y) ?? rd;
}
function id(y) {
  return [y.countryCode, y.region, y.city].filter(
    (s) => !!(s && s.trim())
  ).join(" · ");
}
function dd(y) {
  return {
    countryCode: y.country_code,
    region: y.region,
    city: y.city,
    organization: y.organization,
    timezone: y.timezone,
    accuracy: y.accuracy,
    latitude: y.latitude,
    longitude: y.longitude
  };
}
function _s(y, o) {
  if (!o || !o.country_code) {
    Ce.set(y, { status: "error" });
    return;
  }
  const s = dd(o);
  Ce.set(y, {
    status: "success",
    label: id(s),
    detail: s,
    fetchedAt: Date.now()
  });
}
async function ls(y, o = !1) {
  if (gs(y)) {
    Ce.set(y, { status: "private" });
    return;
  }
  const s = ms(y);
  if (!(!o && (es(s) || (s == null ? void 0 : s.status) === "loading"))) {
    Ce.set(y, { status: "loading" });
    try {
      const h = await fetch(`${od}/${encodeURIComponent(y)}.json`);
      if (!h.ok) {
        Ce.set(y, { status: "error" });
        return;
      }
      const r = await h.json();
      _s(y, r), ts();
    } catch {
      Ce.set(y, { status: "error" });
    }
  }
}
async function ud(y) {
  const o = Array.from(new Set(y)), s = [];
  for (const r of o) {
    if (gs(r)) {
      Ce.set(r, { status: "private" });
      continue;
    }
    const F = Ce.get(r);
    es(F) || (F == null ? void 0 : F.status) === "loading" || s.push(r);
  }
  if (s.length === 0) return !0;
  s.forEach((r) => Ce.set(r, { status: "loading" }));
  let h = !0;
  for (let r = 0; r < s.length; r += ns) {
    const F = s.slice(r, r + ns);
    try {
      const q = await fetch(`${nd}?ip=${F.map(encodeURIComponent).join(",")}`);
      if (!q.ok) {
        F.forEach((g) => Ce.set(g, { status: "error" })), h = !1;
        continue;
      }
      const k = await q.json(), S = new Map(k.map((g) => [g.ip, g]));
      F.forEach((g) => _s(g, S.get(g))), ts();
    } catch {
      F.forEach((q) => Ce.set(q, { status: "error" })), h = !1;
    }
  }
  return h;
}
const cd = {
  key: 0,
  class: "mt-0.5 text-xs"
}, pd = {
  key: 1,
  class: "mt-0.5 flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"
}, md = {
  key: 2,
  class: "mt-0.5 flex items-center gap-1 text-xs"
}, gd = ["title"], vd = ["title"], _d = {
  key: 3,
  class: "mt-0.5 text-xs"
}, xd = {
  key: 4,
  class: "mt-0.5 text-xs text-gray-400 dark:text-gray-500"
}, fd = /* @__PURE__ */ xe({
  __name: "IpGeoCell",
  props: {
    ip: {}
  },
  setup(y) {
    const o = y, { t: s } = ye(), h = x(() => vs(o.ip)), r = x(() => {
      const S = h.value.detail;
      return S ? [
        S.organization ? `${s("usage.ipGeo.detailOrg")}: ${S.organization}` : "",
        S.timezone ? `${s("usage.ipGeo.detailTimezone")}: ${S.timezone}` : "",
        S.accuracy != null ? `${s("usage.ipGeo.detailAccuracy")}: ${S.accuracy}km` : "",
        S.latitude && S.longitude ? `${s("usage.ipGeo.detailCoordinates")}: ${S.latitude}, ${S.longitude}` : ""
      ].filter(Boolean).join(`
`) : "";
    }), F = () => {
      ls(o.ip);
    }, q = () => {
      ls(o.ip, !0);
    }, k = () => {
      window.open(
        `https://www.iplocation.net/ip-lookup?query=${encodeURIComponent(o.ip)}`,
        "_blank",
        "noopener,noreferrer"
      );
    };
    return (S, g) => h.value.status === "idle" ? (n(), d("div", cd, [
      e("button", {
        type: "button",
        class: "text-primary-600 underline decoration-dashed underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
        onClick: F
      }, t(a(s)("usage.ipGeo.fetch")), 1)
    ])) : h.value.status === "loading" ? (n(), d("div", pd, [
      g[0] || (g[0] = e("svg", {
        class: "h-3 w-3 animate-spin",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      }, [
        e("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        })
      ], -1)),
      H(" " + t(a(s)("usage.ipGeo.fetching")), 1)
    ])) : h.value.status === "success" ? (n(), d("div", md, [
      e("button", {
        type: "button",
        class: "truncate text-gray-500 underline decoration-dotted underline-offset-2 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",
        title: r.value,
        onClick: k
      }, t(h.value.label), 9, gd),
      e("button", {
        type: "button",
        class: "text-gray-400 hover:text-primary-600 dark:hover:text-primary-400",
        title: a(s)("usage.ipGeo.refreshTitle"),
        onClick: q
      }, [
        U(Ve, {
          name: "refresh",
          size: "xs"
        })
      ], 8, vd)
    ])) : h.value.status === "error" ? (n(), d("div", _d, [
      e("button", {
        type: "button",
        class: "text-red-600 underline decoration-dashed underline-offset-2 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
        onClick: F
      }, t(a(s)("usage.ipGeo.failed")), 1)
    ])) : (n(), d("div", xd, t(a(s)("usage.ipGeo.private")), 1));
  }
}), yd = {
  key: 0,
  class: "flex flex-shrink-0 items-center justify-end gap-2 border-b border-gray-200 px-4 py-2 dark:border-dark-700"
}, hd = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, bd = ["disabled"], kd = /* @__PURE__ */ xe({
  __name: "IpGeoBatchToolbar",
  props: {
    ips: {}
  },
  emits: ["failed"],
  setup(y, { emit: o }) {
    const s = y, h = o, { t: r } = ye(), F = x(
      () => Array.from(new Set(s.ips.filter((g) => !!g)))
    ), q = x(
      () => F.value.filter((g) => {
        const v = vs(g).status;
        return v === "idle" || v === "error";
      }).length
    ), k = R(!1), S = async () => {
      k.value = !0;
      try {
        await ud(F.value) || h("failed");
      } finally {
        k.value = !1;
      }
    };
    return (g, v) => F.value.length > 0 ? (n(), d("div", yd, [
      q.value > 0 ? (n(), d("span", hd, t(a(r)("usage.ipGeo.pending", { count: q.value })), 1)) : M("", !0),
      e("button", {
        type: "button",
        class: "inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-400 dark:hover:bg-primary-900/30",
        disabled: k.value || q.value === 0,
        onClick: S
      }, t(k.value ? a(r)("usage.ipGeo.batchFetching") : a(r)("usage.ipGeo.batchFetch")), 9, bd)
    ])) : M("", !0);
  }
});
function wd(y, o) {
  switch ((y || "").toLowerCase()) {
    case "auth":
      return "auth";
    case "routing":
      return "service_unavailable";
    case "account_auth":
    case "upstream":
    case "network":
      return "upstream";
    case "internal":
      return "internal";
    case "request":
      switch ((o || "").toLowerCase()) {
        case "rate_limit_error":
          return "rate_limit";
        case "billing_error":
        case "subscription_error":
          return "quota";
        case "invalid_request_error":
          return "invalid_request";
        case "cyber_policy":
          return "cyber";
      }
  }
  return "other";
}
function $d(y) {
  return y >= 500 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : y === 429 ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : y >= 400 ? "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" : "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200";
}
function Cd(y) {
  return y === "status" ? "status_code" : y;
}
const Sd = { class: "flex h-full min-h-0 flex-col" }, Rd = ["title"], Td = { class: "max-w-[320px] space-y-1 text-xs" }, Dd = { class: "break-all text-gray-700 dark:text-gray-300" }, Ed = { class: "font-medium text-gray-500 dark:text-gray-400" }, qd = { class: "ml-1" }, Ld = {
  key: 0,
  class: "break-all text-gray-700 dark:text-gray-300"
}, zd = { class: "font-medium text-gray-500 dark:text-gray-400" }, Md = { class: "ml-1" }, Ad = { class: "text-sm text-gray-900 dark:text-white" }, Vd = {
  key: 0,
  class: "space-y-0.5 text-xs"
}, Fd = { class: "break-all font-medium text-gray-900 dark:text-white" }, Od = { class: "break-all text-gray-500 dark:text-gray-400" }, Id = {
  key: 1,
  class: "text-sm font-medium text-gray-900 dark:text-white"
}, jd = {
  key: 2,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Pd = ["title"], Ud = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Nd = {
  key: 0,
  class: "text-sm"
}, Hd = ["title", "onClick"], Bd = {
  key: 1,
  class: "font-medium text-gray-900 dark:text-white"
}, Gd = { class: "ml-1 text-gray-500 dark:text-gray-400" }, Qd = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Wd = {
  key: 0,
  class: "text-sm"
}, Kd = { class: "text-gray-900 dark:text-white" }, Jd = {
  key: 0,
  class: "ml-1 inline-flex items-center rounded px-1 py-px text-[10px] font-medium leading-tight bg-rose-100 text-rose-600 ring-1 ring-inset ring-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30"
}, Zd = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Yd = ["title"], Xd = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, eu = { class: "text-sm text-gray-900 dark:text-white" }, tu = { class: "flex items-center gap-1.5" }, su = {
  key: 1,
  class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200"
}, au = ["title"], ru = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ou = ["title"], nu = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, lu = { key: 0 }, iu = { class: "text-sm font-mono text-gray-600 dark:text-gray-400" }, du = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, uu = ["title", "onClick"], cu = { class: "flex-shrink-0" }, pu = /* @__PURE__ */ xe({
  __name: "OpsErrorLogTable",
  props: {
    rows: {},
    total: {},
    loading: { type: Boolean },
    page: {},
    pageSize: {},
    userClickable: { type: Boolean },
    visibleColumnKeys: {},
    summaryFirst: { type: Boolean },
    flat: { type: Boolean }
  },
  emits: ["openErrorDetail", "update:page", "update:pageSize", "ipGeoBatchFailed", "sort", "userClick"],
  setup(y, { emit: o }) {
    const { t: s } = ye(), h = x(() => [
      { key: "user", label: s("admin.ops.errorLog.user") },
      { key: "api_key", label: s("admin.ops.errorLog.apiKey") },
      { key: "account", label: s("admin.ops.errorLog.account") },
      { key: "platform", label: s("admin.ops.errorLog.platform") },
      { key: "model", label: s("admin.ops.errorLog.model"), sortable: !0 },
      { key: "endpoint", label: s("admin.ops.errorLog.endpoint") },
      { key: "group", label: s("admin.ops.errorLog.group") },
      { key: "type", label: s("admin.ops.errorLog.type") },
      { key: "category", label: s("usage.errors.category") },
      { key: "status", label: s("admin.ops.errorLog.status"), sortable: !0 },
      { key: "message", label: s("admin.ops.errorLog.message") },
      { key: "created_at", label: s("admin.ops.errorLog.time"), sortable: !0 },
      { key: "user_agent", label: s("usage.userAgent") },
      { key: "client_ip", label: s("admin.ops.errorLog.ip") },
      { key: "actions", label: s("admin.ops.errorLog.action") }
    ]), r = x(() => {
      const w = v.visibleColumnKeys ? h.value.filter((D) => v.visibleColumnKeys.includes(D.key)) : h.value;
      return v.summaryFirst ? [
        ...w.filter((D) => D.key === "created_at"),
        ...w.filter((D) => D.key === "message"),
        ...w.filter((D) => D.key !== "created_at" && D.key !== "message")
      ] : w;
    });
    function F(w) {
      const D = String(w.phase || "").toLowerCase(), f = String(w.error_owner || "").toLowerCase();
      return D === "upstream" && f === "provider";
    }
    function q(w) {
      const D = String(w.requested_model || "").trim(), f = String(w.upstream_model || "").trim();
      return !!D && !!f && D !== f;
    }
    function k(w) {
      const D = String(w.upstream_model || "").trim();
      if (D) return D;
      const f = String(w.requested_model || "").trim();
      return f || String(w.model || "").trim();
    }
    function S(w) {
      switch (w) {
        case 1:
          return s("admin.ops.errorLog.requestTypeSync");
        case 2:
          return s("admin.ops.errorLog.requestTypeStream");
        case 3:
          return s("admin.ops.errorLog.requestTypeWs");
        default:
          return "";
      }
    }
    function g(w) {
      const D = String(w.phase || "").toLowerCase(), f = String(w.error_owner || "").toLowerCase();
      return F(w) ? { label: s("admin.ops.errorLog.typeUpstream"), className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" } : D === "request" && f === "client" ? { label: s("admin.ops.errorLog.typeRequest"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : D === "auth" && f === "client" ? { label: s("admin.ops.errorLog.typeAuth"), className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" } : D === "account_auth" ? { label: s("admin.ops.errorLog.typeAccountAuth"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : D === "routing" && f === "platform" ? { label: s("admin.ops.errorLog.typeRouting"), className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" } : D === "internal" && f === "platform" ? { label: s("admin.ops.errorLog.typeInternal"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" } : { label: D || f || s("common.unknown"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" };
    }
    const v = y, b = o;
    function B(w, D) {
      b("sort", Cd(w), D);
    }
    const V = $d;
    function c(w) {
      var D;
      if (!w) return "";
      if (w.startsWith("{") || w.startsWith("["))
        try {
          const f = JSON.parse(w);
          if ((D = f == null ? void 0 : f.error) != null && D.message) return String(f.error.message);
          if (f != null && f.message) return String(f.message);
          if (f != null && f.detail) return String(f.detail);
          if (typeof f == "object") return JSON.stringify(f).substring(0, 150);
        } catch {
        }
      return w.includes("context deadline exceeded") ? s("admin.ops.errorLog.commonErrors.contextDeadlineExceeded") : w.includes("connection refused") ? s("admin.ops.errorLog.commonErrors.connectionRefused") : w.toLowerCase().includes("rate limit") ? s("admin.ops.errorLog.commonErrors.rateLimit") : w.length > 200 ? w.substring(0, 200) + "..." : w;
    }
    return (w, D) => (n(), d("div", Sd, [
      e("div", {
        class: Q(["flex min-h-0 flex-1 flex-col overflow-hidden", y.flat ? "" : "card"])
      }, [
        U(kd, {
          ips: y.rows.map((f) => f.client_ip),
          onFailed: D[0] || (D[0] = (f) => b("ipGeoBatchFailed"))
        }, null, 8, ["ips"]),
        U(Es, {
          columns: r.value,
          data: y.rows,
          loading: y.loading,
          "clickable-rows": "",
          "server-side-sort": "",
          "default-sort-key": "created_at",
          "default-sort-order": "desc",
          onSort: B,
          onRowClick: D[2] || (D[2] = (f) => b("openErrorDetail", f.id))
        }, {
          "cell-created_at": ve(({ row: f }) => [
            e("span", {
              class: "text-sm text-gray-600 dark:text-gray-400",
              title: f.request_id || f.client_request_id
            }, t(a(Ge)(f.created_at)), 9, Rd)
          ]),
          "cell-type": ve(({ row: f }) => [
            e("span", {
              class: Q(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", g(f).className])
            }, t(g(f).label), 3)
          ]),
          "cell-endpoint": ve(({ row: f }) => {
            var J, ae;
            return [
              e("div", Td, [
                e("div", Dd, [
                  e("span", Ed, t(a(s)("usage.inbound")) + ":", 1),
                  e("span", qd, t(((J = f.inbound_endpoint) == null ? void 0 : J.trim()) || "-"), 1)
                ]),
                f.upstream_endpoint ? (n(), d("div", Ld, [
                  e("span", zd, t(a(s)("usage.upstream")) + ":", 1),
                  e("span", Md, t(((ae = f.upstream_endpoint) == null ? void 0 : ae.trim()) || "-"), 1)
                ])) : M("", !0)
              ])
            ];
          }),
          "cell-platform": ve(({ row: f }) => [
            e("span", Ad, t(f.platform || "-"), 1)
          ]),
          "cell-model": ve(({ row: f }) => [
            q(f) ? (n(), d("div", Vd, [
              e("div", Fd, t(f.requested_model), 1),
              e("div", Od, [
                D[5] || (D[5] = e("span", { class: "mr-0.5" }, "↳", -1)),
                H(t(f.upstream_model), 1)
              ])
            ])) : k(f) ? (n(), d("span", Id, t(k(f)), 1)) : (n(), d("span", jd, "-"))
          ]),
          "cell-group": ve(({ row: f }) => [
            f.group_id ? (n(), d("span", {
              key: 0,
              class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
              title: a(s)("admin.ops.errorLog.id") + " " + f.group_id
            }, t(f.group_name || "#" + f.group_id), 9, Pd)) : (n(), d("span", Ud, "-"))
          ]),
          "cell-user": ve(({ row: f }) => [
            f.user_id ? (n(), d("div", Nd, [
              y.userClickable && f.user_email ? (n(), d("button", {
                key: 0,
                class: "font-medium text-primary-600 underline decoration-dashed underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                title: a(s)("admin.usage.clickToViewBalance"),
                onClick: kt((J) => b("userClick", f.user_id, f.user_email), ["stop"])
              }, t(f.user_email), 9, Hd)) : (n(), d("span", Bd, t(f.user_email || "-"), 1)),
              e("span", Gd, "#" + t(f.user_id), 1)
            ])) : (n(), d("span", Qd, "-"))
          ]),
          "cell-api_key": ve(({ row: f }) => [
            f.api_key_id || f.api_key_name ? (n(), d("div", Wd, [
              e("span", Kd, t(f.api_key_name || "#" + f.api_key_id), 1),
              f.api_key_deleted ? (n(), d("span", Jd, t(a(s)("admin.ops.errorLog.keyDeletedBadge")), 1)) : M("", !0)
            ])) : (n(), d("span", Zd, "-"))
          ]),
          "cell-account": ve(({ row: f }) => [
            f.account_id ? (n(), d("span", {
              key: 0,
              class: "text-sm text-gray-900 dark:text-white",
              title: a(s)("admin.ops.errorLog.accountId") + " " + f.account_id
            }, t(f.account_name || "#" + f.account_id), 9, Yd)) : (n(), d("span", Xd, "-"))
          ]),
          "cell-category": ve(({ row: f }) => [
            e("span", eu, t(a(s)("usage.errors.categories." + a(wd)(f.phase, f.type))), 1)
          ]),
          "cell-status": ve(({ row: f }) => [
            e("div", tu, [
              e("span", {
                class: Q(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", a(V)(f.status_code)])
              }, t(f.status_code), 3),
              f.severity ? (n(), d("span", {
                key: 0,
                class: Q(["rounded px-1.5 py-0.5 text-[10px] font-medium", a(Us)(f.severity)])
              }, t(f.severity), 3)) : M("", !0),
              f.request_type != null && f.request_type > 0 ? (n(), d("span", su, t(S(f.request_type)), 1)) : M("", !0)
            ])
          ]),
          "cell-message": ve(({ row: f }) => [
            f.message ? (n(), d("span", {
              key: 0,
              class: "block max-w-[280px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: f.message
            }, t(c(f.message) || "-"), 9, au)) : (n(), d("span", ru, "-"))
          ]),
          "cell-user_agent": ve(({ row: f }) => [
            f.user_agent ? (n(), d("span", {
              key: 0,
              class: "block max-w-[320px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: f.user_agent
            }, t(f.user_agent), 9, ou)) : (n(), d("span", nu, "-"))
          ]),
          "cell-client_ip": ve(({ row: f }) => [
            e("div", {
              onClick: D[1] || (D[1] = kt(() => {
              }, ["stop"]))
            }, [
              f.client_ip ? (n(), d("div", lu, [
                e("span", iu, t(f.client_ip), 1),
                U(fd, {
                  ip: f.client_ip
                }, null, 8, ["ip"])
              ])) : (n(), d("span", du, "-"))
            ])
          ]),
          "cell-actions": ve(({ row: f }) => [
            e("button", {
              type: "button",
              class: "rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-600 dark:hover:text-primary-400",
              title: a(s)("admin.ops.errorLog.details"),
              onClick: kt((J) => b("openErrorDetail", f.id), ["stop"])
            }, [...D[6] || (D[6] = [
              e("svg", {
                class: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                })
              ], -1)
            ])], 8, uu)
          ]),
          empty: ve(() => [
            U(at, {
              message: a(s)("admin.ops.errorLog.noErrors")
            }, null, 8, ["message"])
          ]),
          _: 1
        }, 8, ["columns", "data", "loading"])
      ], 2),
      e("div", cu, [
        y.total > 0 ? (n(), ie(Qt, {
          key: 0,
          total: y.total,
          page: y.page,
          "page-size": y.pageSize,
          "onUpdate:page": D[3] || (D[3] = (f) => b("update:page", f)),
          "onUpdate:pageSize": D[4] || (D[4] = (f) => b("update:pageSize", f))
        }, null, 8, ["total", "page", "page-size"])) : M("", !0)
      ])
    ]));
  }
});
function mu(y, o, s) {
  return y === "custom" && o && s ? { start_time: o, end_time: s } : { time_range: y === "custom" ? "1h" : y };
}
const gu = { class: "flex h-full min-h-0 flex-col" }, vu = { class: "mb-4 flex-shrink-0 border-b border-gray-200 pb-4 dark:border-dark-700" }, _u = { class: "grid grid-cols-2 gap-2 md:grid-cols-8" }, xu = { class: "col-span-2 compact-select" }, fu = { class: "relative group" }, yu = ["placeholder"], hu = { class: "compact-select" }, bu = { class: "compact-select" }, ku = { class: "compact-select" }, wu = { class: "compact-select" }, $u = { class: "flex items-center justify-end" }, Cu = { class: "flex min-h-0 flex-1 flex-col" }, Su = { class: "mb-2 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400" }, Ru = /* @__PURE__ */ xe({
  __name: "OpsErrorDetailsModal",
  props: {
    show: { type: Boolean },
    timeRange: {},
    customStartTime: {},
    customEndTime: {},
    platform: {},
    groupId: {},
    errorType: {}
  },
  emits: ["update:show", "openErrorDetail"],
  setup(y, { emit: o }) {
    const s = y, h = o, { t: r } = ye(), F = R(!1), q = R([]), k = R(0), S = R(1), g = R(10), v = R(""), b = R(null), B = R(""), V = R(""), c = R("errors"), w = x(() => s.errorType === "upstream" ? r("admin.ops.errorDetails.upstreamErrors") : r("admin.ops.errorDetails.requestErrors")), D = x(() => {
      const C = [400, 401, 403, 404, 409, 422, 429, 500, 502, 503, 504, 529];
      return [
        { value: null, label: r("common.all") },
        ...C.map((E) => ({ value: E, label: String(E) })),
        { value: "other", label: r("admin.ops.errorDetails.statusCodeOther") || "Other" }
      ];
    }), f = x(() => [
      { value: "", label: r("common.all") },
      { value: "provider", label: r("admin.ops.errorDetails.owner.provider") || "provider" },
      { value: "client", label: r("admin.ops.errorDetails.owner.client") || "client" },
      { value: "platform", label: r("admin.ops.errorDetails.owner.platform") || "platform" }
    ]), J = x(() => [
      { value: "errors", label: r("admin.ops.errorDetails.viewErrors") || "errors" },
      { value: "excluded", label: r("admin.ops.errorDetails.viewExcluded") || "excluded" },
      { value: "all", label: r("common.all") }
    ]), ae = x(() => [
      { value: "", label: r("common.all") },
      { value: "request", label: r("admin.ops.errorDetails.phase.request") || "request" },
      { value: "auth", label: r("admin.ops.errorDetails.phase.auth") || "auth" },
      { value: "account_auth", label: r("admin.ops.errorDetails.phase.account_auth") || "account_auth" },
      { value: "routing", label: r("admin.ops.errorDetails.phase.routing") || "routing" },
      { value: "upstream", label: r("admin.ops.errorDetails.phase.upstream") || "upstream" },
      { value: "network", label: r("admin.ops.errorDetails.phase.network") || "network" },
      { value: "internal", label: r("admin.ops.errorDetails.phase.internal") || "internal" }
    ]);
    function X() {
      h("update:show", !1);
    }
    const Z = R("created_at"), ue = R("desc");
    function A(C, E) {
      Z.value = C, ue.value = E, S.value = 1, m();
    }
    async function m() {
      if (s.show) {
        F.value = !0;
        try {
          const C = {
            page: S.value,
            page_size: g.value,
            view: c.value,
            sort_by: Z.value,
            sort_order: ue.value
          };
          Object.assign(C, mu(s.timeRange, s.customStartTime, s.customEndTime)), s.timeRange === "custom" && (s.customStartTime && s.customEndTime ? (C.start_time = s.customStartTime, C.end_time = s.customEndTime, delete C.time_range) : C.time_range = "1h");
          const E = String(s.platform || "").trim();
          E && (C.platform = E), typeof s.groupId == "number" && s.groupId > 0 && (C.group_id = s.groupId), v.value.trim() && (C.q = v.value.trim()), b.value === "other" ? C.status_codes_other = "1" : typeof b.value == "number" && (C.status_codes = String(b.value));
          const T = String(B.value || "").trim();
          T && (C.phase = T);
          const I = String(V.value || "").trim();
          I && (C.error_owner = I);
          const W = s.errorType === "upstream" ? await se.listUpstreamErrors(C) : await se.listRequestErrors(C);
          q.value = W.items || [], k.value = W.total || 0;
        } catch (C) {
          console.error("[OpsErrorDetailsModal] Failed to fetch error logs", C), q.value = [], k.value = 0;
        } finally {
          F.value = !1;
        }
      }
    }
    function i() {
      v.value = "", b.value = null, B.value = s.errorType === "upstream" ? "upstream" : "", V.value = "", c.value = "errors", S.value = 1, m();
    }
    ge(
      () => s.show,
      (C) => {
        C && (S.value = 1, g.value = 10, i());
      }
    ), ge(
      () => [s.timeRange, s.customStartTime, s.customEndTime, s.platform, s.groupId],
      () => {
        s.show && (S.value = 1, m());
      }
    ), ge(
      () => [S.value, g.value],
      () => {
        s.show && m();
      }
    );
    let O = null;
    return ge(
      () => v.value,
      () => {
        s.show && (O && window.clearTimeout(O), O = window.setTimeout(() => {
          S.value = 1, m();
        }, 350));
      }
    ), ge(
      () => [b.value, B.value, V.value, c.value],
      () => {
        s.show && (S.value = 1, m());
      }
    ), (C, E) => (n(), ie(Je, {
      show: y.show,
      title: w.value,
      width: "full",
      onClose: X
    }, {
      default: ve(() => [
        e("div", gu, [
          e("div", vu, [
            e("div", _u, [
              e("div", xu, [
                e("div", fu, [
                  E[8] || (E[8] = e("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                    e("svg", {
                      class: "h-3.5 w-3.5 text-gray-400 transition-colors group-focus-within:text-blue-500",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2.5",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1)),
                  re(e("input", {
                    "onUpdate:modelValue": E[0] || (E[0] = (T) => v.value = T),
                    type: "text",
                    class: "w-full rounded-lg border-gray-200 bg-gray-50/50 py-1.5 pl-9 pr-3 text-xs font-medium text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:focus:bg-dark-800",
                    placeholder: a(r)("admin.ops.errorDetails.searchPlaceholder")
                  }, null, 8, yu), [
                    [le, v.value]
                  ])
                ])
              ]),
              e("div", hu, [
                U(me, {
                  "model-value": b.value,
                  options: D.value,
                  "onUpdate:modelValue": E[1] || (E[1] = (T) => b.value = T)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", bu, [
                U(me, {
                  "model-value": B.value,
                  options: ae.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (T) => B.value = String(T ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", ku, [
                U(me, {
                  "model-value": V.value,
                  options: f.value,
                  "onUpdate:modelValue": E[3] || (E[3] = (T) => V.value = String(T ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", wu, [
                U(me, {
                  "model-value": c.value,
                  options: J.value,
                  "onUpdate:modelValue": E[4] || (E[4] = (T) => c.value = T)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", $u, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: i
                }, t(a(r)("common.reset")), 1)
              ])
            ])
          ]),
          e("div", Cu, [
            e("div", Su, t(a(r)("admin.ops.errorDetails.total")) + " " + t(k.value), 1),
            U(pu, {
              class: "min-h-0 flex-1",
              "summary-first": "",
              rows: q.value,
              total: k.value,
              loading: F.value,
              page: S.value,
              "page-size": g.value,
              onOpenErrorDetail: E[5] || (E[5] = (T) => h("openErrorDetail", T)),
              onSort: A,
              "onUpdate:page": E[6] || (E[6] = (T) => S.value = T),
              "onUpdate:pageSize": E[7] || (E[7] = (T) => g.value = T)
            }, null, 8, ["rows", "total", "loading", "page", "page-size"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Tu = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Du = { class: "mb-4 flex shrink-0 items-center justify-between" }, Eu = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, qu = { class: "flex items-center gap-2" }, Lu = ["disabled"], zu = ["disabled"], Mu = { class: "min-h-0 flex-1" }, Au = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Vu = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Fu = /* @__PURE__ */ xe({
  __name: "OpsErrorTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {}
  },
  emits: ["openRequestErrors", "openUpstreamErrors"],
  setup(y, { emit: o }) {
    St.register(Wt, Rt, Tt, Kt, Vt, Jt, Ft, Zt);
    const s = y, h = o, { t: r } = ye(), F = x(() => document.documentElement.classList.contains("dark")), q = x(() => ({
      red: "#ef4444",
      redAlpha: "#ef444420",
      purple: "#8b5cf6",
      purpleAlpha: "#8b5cf620",
      gray: "#9ca3af",
      grid: F.value ? "#374151" : "#f3f4f6",
      text: F.value ? "#9ca3af" : "#6b7280"
    })), k = x(() => $t(s.points.map((w) => w.error_count_sla ?? 0))), S = x(
      () => $t(
        s.points.map((w) => (w.upstream_error_count_excl_429_529 ?? 0) + (w.upstream_429_count ?? 0) + (w.upstream_529_count ?? 0))
      )
    ), g = x(
      () => $t(s.points.map((w) => (w.error_count_sla ?? 0) + (w.upstream_error_count_excl_429_529 ?? 0) + (w.business_limited_count ?? 0)))
    ), v = x(() => k.value > 0), b = x(() => S.value > 0), B = x(() => !s.points.length || g.value <= 0 ? null : {
      labels: s.points.map((w) => Xt(w.bucket_start, s.timeRange)),
      datasets: [
        {
          label: r("admin.ops.errorsSla"),
          data: s.points.map((w) => w.error_count_sla ?? 0),
          borderColor: q.value.red,
          backgroundColor: q.value.redAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.upstreamExcl429529"),
          data: s.points.map((w) => w.upstream_error_count_excl_429_529 ?? 0),
          borderColor: q.value.purple,
          backgroundColor: q.value.purpleAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.businessLimited"),
          data: s.points.map((w) => w.business_limited_count ?? 0),
          borderColor: q.value.gray,
          backgroundColor: "transparent",
          borderDash: [6, 6],
          fill: !1,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), V = x(() => B.value ? "ready" : s.loading ? "loading" : "empty"), c = x(() => {
      const w = q.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: w.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: F.value ? "#1f2937" : "#ffffff",
            titleColor: F.value ? "#f3f4f6" : "#111827",
            bodyColor: F.value ? "#d1d5db" : "#4b5563",
            borderColor: w.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0
          }
        },
        scales: {
          x: {
            type: "category",
            grid: { display: !1 },
            ticks: {
              color: w.text,
              font: { size: 10 },
              maxTicksLimit: 8,
              autoSkip: !0,
              autoSkipPadding: 10
            }
          },
          y: {
            type: "linear",
            display: !0,
            position: "left",
            grid: { color: w.grid, borderDash: [4, 4] },
            ticks: { color: w.text, font: { size: 10 }, precision: 0 }
          }
        }
      };
    });
    return (w, D) => (n(), d("div", Tu, [
      e("div", Du, [
        e("h3", Eu, [
          D[2] || (D[2] = e("svg", {
            class: "h-4 w-4 text-rose-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            })
          ], -1)),
          H(" " + t(a(r)("admin.ops.errorTrend")) + " ", 1),
          U(fe, {
            content: a(r)("admin.ops.tooltips.errorTrend")
          }, null, 8, ["content"])
        ]),
        e("div", qu, [
          e("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !v.value,
            onClick: D[0] || (D[0] = (f) => h("openRequestErrors"))
          }, t(a(r)("admin.ops.errorDetails.requestErrors")), 9, Lu),
          e("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !b.value,
            onClick: D[1] || (D[1] = (f) => h("openUpstreamErrors"))
          }, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 9, zu)
        ])
      ]),
      e("div", Mu, [
        V.value === "ready" && B.value ? (n(), ie(a(Yt), {
          key: 0,
          data: B.value,
          options: c.value
        }, null, 8, ["data", "options"])) : (n(), d("div", Au, [
          V.value === "loading" ? (n(), d("div", Vu, t(a(r)("common.loading")), 1)) : (n(), ie(at, {
            key: 1,
            title: a(r)("common.noData"),
            description: a(r)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Ou = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Iu = { class: "mb-4 flex items-center justify-between" }, ju = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Pu = { class: "min-h-0 flex-1" }, Uu = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Nu = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Hu = /* @__PURE__ */ xe({
  __name: "OpsLatencyChart",
  props: {
    latencyData: {},
    loading: { type: Boolean }
  },
  setup(y) {
    St.register(Vs, Ft, Vt, Rt, Tt);
    const o = y, { t: s } = ye(), h = x(() => document.documentElement.classList.contains("dark")), r = x(() => ({
      blue: "#3b82f6",
      grid: h.value ? "#374151" : "#f3f4f6",
      text: h.value ? "#9ca3af" : "#6b7280"
    })), F = x(() => {
      var g;
      return (((g = o.latencyData) == null ? void 0 : g.total_requests) ?? 0) > 0;
    }), q = x(() => F.value ? "ready" : o.loading ? "loading" : "empty"), k = x(() => {
      if (!o.latencyData || !F.value) return null;
      const g = r.value;
      return {
        labels: o.latencyData.buckets.map((v) => v.range),
        datasets: [
          {
            label: s("admin.ops.requests"),
            data: o.latencyData.buckets.map((v) => v.count),
            backgroundColor: g.blue,
            borderRadius: 4,
            barPercentage: 0.6
          }
        ]
      };
    }), S = x(() => {
      const g = r.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
          legend: { display: !1 }
        },
        scales: {
          x: {
            grid: { display: !1 },
            ticks: { color: g.text, font: { size: 10 } }
          },
          y: {
            beginAtZero: !0,
            grid: { color: g.grid, borderDash: [4, 4] },
            ticks: { color: g.text, font: { size: 10 } }
          }
        }
      };
    });
    return (g, v) => (n(), d("div", Ou, [
      e("div", Iu, [
        e("h3", ju, [
          v[0] || (v[0] = e("svg", {
            class: "h-4 w-4 text-purple-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          ], -1)),
          H(" " + t(a(s)("admin.ops.latencyHistogram")) + " ", 1),
          U(fe, {
            content: a(s)("admin.ops.tooltips.latencyHistogram")
          }, null, 8, ["content"])
        ])
      ]),
      e("div", Pu, [
        q.value === "ready" && k.value ? (n(), ie(a(Fs), {
          key: 0,
          data: k.value,
          options: S.value
        }, null, 8, ["data", "options"])) : (n(), d("div", Uu, [
          q.value === "loading" ? (n(), d("div", Nu, t(a(s)("common.loading")), 1)) : (n(), ie(at, {
            key: 1,
            title: a(s)("common.noData"),
            description: a(s)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Bu = { class: "flex h-full min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Gu = {
  "data-testid": "throughput-chart-header",
  class: "mb-4 flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
}, Qu = { class: "flex min-w-0 items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Wu = {
  "data-testid": "throughput-chart-toolbar",
  class: "flex w-full min-w-0 flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:w-auto sm:justify-end"
}, Ku = { class: "flex shrink-0 items-center gap-1" }, Ju = ["disabled", "title"], Zu = ["disabled", "title"], Yu = ["disabled", "title"], Xu = {
  key: 0,
  class: "mb-3 flex flex-wrap gap-2"
}, ec = ["onClick"], tc = { class: "max-w-[180px] truncate" }, sc = { class: "text-gray-400 dark:text-gray-500" }, ac = {
  key: 1,
  class: "mb-3 flex flex-wrap gap-2"
}, rc = ["onClick"], oc = { class: "uppercase" }, nc = { class: "text-gray-400 dark:text-gray-500" }, lc = { class: "min-h-0 min-w-0 flex-1" }, ic = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, dc = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, uc = /* @__PURE__ */ xe({
  __name: "OpsThroughputTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {},
    byPlatform: {},
    topGroups: {},
    fullscreen: { type: Boolean }
  },
  emits: ["selectPlatform", "selectGroup", "openDetails"],
  setup(y, { emit: o }) {
    St.register(Wt, Rt, Tt, Kt, Vt, Jt, Ft, Zt);
    const s = y, { t: h } = ye(), r = o, F = R(null);
    ge(
      () => s.timeRange,
      () => {
        setTimeout(() => {
          var w;
          const c = (w = F.value) == null ? void 0 : w.chart;
          c && typeof c.resetZoom == "function" && c.resetZoom();
        }, 100);
      }
    );
    const q = x(() => document.documentElement.classList.contains("dark")), k = x(() => ({
      blue: "#3b82f6",
      blueAlpha: "#3b82f620",
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: q.value ? "#374151" : "#f3f4f6",
      text: q.value ? "#9ca3af" : "#6b7280"
    })), S = x(() => $t(s.points.map((c) => c.request_count))), g = x(() => !s.points.length || S.value <= 0 ? null : {
      labels: s.points.map((c) => Xt(c.bucket_start, s.timeRange)),
      datasets: [
        {
          label: "QPS",
          data: s.points.map((c) => c.qps ?? 0),
          borderColor: k.value.blue,
          backgroundColor: k.value.blueAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: h("admin.ops.tpsK"),
          data: s.points.map((c) => (c.tps ?? 0) / 1e3),
          borderColor: k.value.violet,
          backgroundColor: k.value.violetAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10,
          yAxisID: "y1"
        }
      ]
    }), v = x(() => g.value ? "ready" : s.loading ? "loading" : "empty"), b = x(() => {
      const c = k.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: c.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: q.value ? "#1f2937" : "#ffffff",
            titleColor: q.value ? "#f3f4f6" : "#111827",
            bodyColor: q.value ? "#d1d5db" : "#4b5563",
            borderColor: c.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: (w) => {
                let D = w.dataset.label || "";
                return D && (D += ": "), w.raw !== null && (D += w.parsed.y.toFixed(1)), D;
              }
            }
          },
          // Optional: if chartjs-plugin-zoom is installed, these options will enable zoom/pan.
          zoom: {
            pan: { enabled: !0, mode: "x", modifierKey: "ctrl" },
            zoom: { wheel: { enabled: !0 }, pinch: { enabled: !0 }, mode: "x" }
          }
        },
        scales: {
          x: {
            type: "category",
            grid: { display: !1 },
            ticks: {
              color: c.text,
              font: { size: 10 },
              maxTicksLimit: 8,
              autoSkip: !0,
              autoSkipPadding: 10
            }
          },
          y: {
            type: "linear",
            display: !0,
            position: "left",
            grid: { color: c.grid, borderDash: [4, 4] },
            ticks: { color: c.text, font: { size: 10 } }
          },
          y1: {
            type: "linear",
            display: !0,
            position: "right",
            grid: { display: !1 },
            ticks: { color: c.violet, font: { size: 10 } }
          }
        }
      };
    });
    function B() {
      var w;
      const c = (w = F.value) == null ? void 0 : w.chart;
      c && typeof c.resetZoom == "function" && c.resetZoom();
    }
    function V() {
      var f;
      const c = (f = F.value) == null ? void 0 : f.chart;
      if (!c || typeof c.toBase64Image != "function") return;
      const w = c.toBase64Image("image/png", 1), D = document.createElement("a");
      D.href = w, D.download = `ops-throughput-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`, D.click();
    }
    return (c, w) => {
      var D, f;
      return n(), d("div", Bu, [
        e("div", Gu, [
          e("h3", Qu, [
            w[1] || (w[1] = e("svg", {
              class: "h-4 w-4 text-blue-500",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              })
            ], -1)),
            H(" " + t(a(h)("admin.ops.throughputTrend")) + " ", 1),
            s.fullscreen ? M("", !0) : (n(), ie(fe, {
              key: 0,
              content: a(h)("admin.ops.tooltips.throughputTrend")
            }, null, 8, ["content"]))
          ]),
          e("div", Wu, [
            w[3] || (w[3] = e("span", { class: "flex shrink-0 items-center gap-1" }, [
              e("span", { class: "h-2 w-2 rounded-full bg-blue-500" }),
              H("QPS")
            ], -1)),
            e("span", Ku, [
              w[2] || (w[2] = e("span", { class: "h-2 w-2 rounded-full bg-zo-signal-500" }, null, -1)),
              H(t(a(h)("admin.ops.tpsK")), 1)
            ]),
            s.fullscreen ? M("", !0) : (n(), d(de, { key: 0 }, [
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: v.value !== "ready",
                title: a(h)("admin.ops.requestDetails.title"),
                onClick: w[0] || (w[0] = (J) => r("openDetails"))
              }, t(a(h)("admin.ops.requestDetails.details")), 9, Ju),
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: v.value !== "ready",
                title: a(h)("admin.ops.charts.resetZoomHint"),
                onClick: B
              }, t(a(h)("admin.ops.charts.resetZoom")), 9, Zu),
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: v.value !== "ready",
                title: a(h)("admin.ops.charts.downloadChartHint"),
                onClick: V
              }, t(a(h)("admin.ops.charts.downloadChart")), 9, Yu)
            ], 64))
          ])
        ]),
        (((D = s.topGroups) == null ? void 0 : D.length) ?? 0) > 0 ? (n(), d("div", Xu, [
          (n(!0), d(de, null, pe(s.topGroups, (J) => (n(), d("button", {
            key: J.group_id,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (ae) => r("selectGroup", J.group_id)
          }, [
            e("span", tc, t(J.group_name || `#${J.group_id}`), 1),
            e("span", sc, t(a(Be)(J.request_count)), 1)
          ], 8, ec))), 128))
        ])) : (((f = s.byPlatform) == null ? void 0 : f.length) ?? 0) > 0 ? (n(), d("div", ac, [
          (n(!0), d(de, null, pe(s.byPlatform, (J) => (n(), d("button", {
            key: J.platform,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (ae) => r("selectPlatform", J.platform)
          }, [
            e("span", oc, t(J.platform), 1),
            e("span", nc, t(a(Be)(J.request_count)), 1)
          ], 8, rc))), 128))
        ])) : M("", !0),
        e("div", lc, [
          v.value === "ready" && g.value ? (n(), ie(a(Yt), {
            key: 0,
            ref_key: "throughputChartRef",
            ref: F,
            data: g.value,
            options: b.value
          }, null, 8, ["data", "options"])) : (n(), d("div", ic, [
            v.value === "loading" ? (n(), d("div", dc, t(a(h)("common.loading")), 1)) : (n(), ie(at, {
              key: 1,
              title: a(h)("common.noData"),
              description: a(h)("admin.ops.charts.emptyRequest")
            }, null, 8, ["title", "description"]))
          ]))
        ])
      ]);
    };
  }
}), cc = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, pc = { class: "mb-4 flex shrink-0 items-center justify-between" }, mc = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, gc = { class: "min-h-0 flex-1" }, vc = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, _c = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, xc = /* @__PURE__ */ xe({
  __name: "OpsSwitchRateTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {},
    fullscreen: { type: Boolean }
  },
  setup(y) {
    St.register(Wt, Rt, Tt, Kt, Vt, Jt, Ft, Zt);
    const o = y, { t: s } = ye(), h = x(() => document.documentElement.classList.contains("dark")), r = x(() => ({
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: h.value ? "#374151" : "#f3f4f6",
      text: h.value ? "#9ca3af" : "#6b7280"
    })), F = x(() => $t(o.points.map((g) => g.request_count))), q = x(() => !o.points.length || F.value <= 0 ? null : {
      labels: o.points.map((g) => Xt(g.bucket_start, o.timeRange)),
      datasets: [
        {
          label: s("admin.ops.switchRate"),
          data: o.points.map((g) => {
            const v = g.request_count ?? 0, b = g.switch_count ?? 0;
            return v <= 0 ? 0 : b / v;
          }),
          borderColor: r.value.violet,
          backgroundColor: r.value.violetAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), k = x(() => q.value ? "ready" : o.loading ? "loading" : "empty"), S = x(() => {
      const g = r.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: g.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: h.value ? "#1f2937" : "#ffffff",
            titleColor: h.value ? "#f3f4f6" : "#111827",
            bodyColor: h.value ? "#d1d5db" : "#4b5563",
            borderColor: g.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: (v) => {
                var B;
                const b = typeof ((B = v == null ? void 0 : v.parsed) == null ? void 0 : B.y) == "number" ? v.parsed.y : 0;
                return `${s("admin.ops.switchRate")}: ${b.toFixed(3)}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: "category",
            grid: { display: !1 },
            ticks: {
              color: g.text,
              font: { size: 10 },
              maxTicksLimit: 8,
              autoSkip: !0,
              autoSkipPadding: 10
            }
          },
          y: {
            type: "linear",
            display: !0,
            position: "left",
            grid: { color: g.grid, borderDash: [4, 4] },
            ticks: {
              color: g.text,
              font: { size: 10 },
              callback: (v) => Number(v).toFixed(3)
            }
          }
        }
      };
    });
    return (g, v) => (n(), d("div", cc, [
      e("div", pc, [
        e("h3", mc, [
          v[0] || (v[0] = e("svg", {
            class: "h-4 w-4 text-zo-signal-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M7 7h10M7 12h6m-6 5h3"
            })
          ], -1)),
          H(" " + t(a(s)("admin.ops.switchRateTrend")) + " ", 1),
          o.fullscreen ? M("", !0) : (n(), ie(fe, {
            key: 0,
            content: a(s)("admin.ops.tooltips.switchRateTrend")
          }, null, 8, ["content"]))
        ])
      ]),
      e("div", gc, [
        k.value === "ready" && q.value ? (n(), ie(a(Yt), {
          key: 0,
          data: q.value,
          options: S.value
        }, null, 8, ["data", "options"])) : (n(), d("div", vc, [
          k.value === "loading" ? (n(), d("div", _c, t(a(s)("common.loading")), 1)) : (n(), ie(at, {
            key: 1,
            title: a(s)("common.noData"),
            description: a(s)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), fc = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, yc = { class: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4" }, hc = { class: "text-sm font-bold text-gray-900 dark:text-white" }, bc = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, kc = { class: "flex flex-wrap items-center gap-2" }, wc = ["disabled"], $c = {
  key: 0,
  class: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
}, Cc = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Sc = {
  key: 2,
  class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Rc = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Tc = ["onClick"], Dc = { class: "flex flex-wrap items-center gap-2" }, Ec = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, qc = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, Lc = {
  key: 0,
  class: "line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, zc = { class: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 dark:text-gray-400" }, Mc = { class: "font-mono" }, Ac = { class: "inline-flex items-center gap-1" }, Vc = { class: "text-[11px] text-gray-400 dark:text-gray-500" }, Fc = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, Oc = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, Ic = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, jc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Pc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Uc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Nc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Hc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Bc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Gc = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Qc = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, Wc = ["onClick", "title"], Kc = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, Jc = { class: "whitespace-nowrap px-4 py-3" }, Zc = { class: "flex items-center gap-2" }, Yc = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, Xc = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, e0 = { class: "font-mono" }, t0 = { class: "min-w-[260px] px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, s0 = { class: "font-semibold truncate max-w-[360px]" }, a0 = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, r0 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, o0 = { class: "whitespace-nowrap px-4 py-3 text-[11px] text-gray-500 dark:text-gray-400" }, n0 = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, l0 = ["title"], i0 = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, d0 = {
  key: 2,
  class: "flex items-center justify-center gap-2 py-3 text-xs text-gray-500 dark:text-gray-400"
}, u0 = {
  key: 3,
  class: "py-3 text-center text-xs text-gray-400"
}, c0 = {
  key: 0,
  class: "flex items-center justify-center py-10 text-sm text-gray-500 dark:text-gray-400"
}, p0 = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, m0 = {
  key: 2,
  class: "space-y-5"
}, g0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, v0 = { class: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between" }, _0 = { class: "flex flex-wrap items-center gap-2" }, x0 = { class: "mt-2 text-sm font-semibold text-gray-900 dark:text-white" }, f0 = {
  key: 0,
  class: "mt-1 whitespace-pre-wrap text-xs text-gray-600 dark:text-gray-300"
}, y0 = { class: "flex flex-wrap gap-2" }, h0 = { class: "flex items-center gap-2 rounded-lg bg-white px-2 py-1 ring-1 ring-gray-200 dark:bg-dark-800 dark:ring-dark-700" }, b0 = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, k0 = ["disabled"], w0 = ["disabled"], $0 = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2" }, C0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, S0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, R0 = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, T0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, D0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, E0 = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, q0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, L0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, z0 = { class: "mt-1 flex flex-wrap items-center gap-2" }, M0 = { class: "font-mono text-sm font-bold text-gray-900 dark:text-white" }, A0 = ["href"], V0 = ["href"], F0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, O0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, I0 = { class: "mt-1 text-sm text-gray-900 dark:text-white" }, j0 = { key: 0 }, P0 = { key: 1 }, U0 = { key: 2 }, N0 = { class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800" }, H0 = { class: "mb-3 flex flex-wrap items-center justify-between gap-3" }, B0 = { class: "text-sm font-bold text-gray-900 dark:text-white" }, G0 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, Q0 = {
  key: 0,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, W0 = {
  key: 1,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, K0 = {
  key: 2,
  class: "overflow-hidden rounded-lg border border-gray-100 dark:border-dark-700"
}, J0 = { class: "min-w-full divide-y divide-gray-100 dark:divide-dark-700" }, Z0 = { class: "bg-gray-50 dark:bg-dark-900" }, Y0 = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, X0 = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ep = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, tp = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, sp = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, ap = { class: "px-3 py-2 text-xs" }, rp = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, op = { key: 0 }, np = { key: 1 }, Ht = 10, lp = /* @__PURE__ */ xe({
  __name: "OpsAlertEventsCard",
  setup(y) {
    const { t: o } = ye(), s = st(), h = Dt("(min-width: 768px)"), r = R(!1), F = R(!1), q = R([]), k = R(!0), S = R(!1), g = R(null), v = R(!1), b = R(!1), B = R(!1), V = R([]), c = R("7d"), w = x(() => [
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), D = R("1h"), f = x(() => [
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") }
    ]), J = R("24h"), ae = x(() => [
      { value: "5m", label: o("admin.ops.timeRange.5m") },
      { value: "30m", label: o("admin.ops.timeRange.30m") },
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "6h", label: o("admin.ops.timeRange.6h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), X = R(""), Z = x(() => [
      { value: "", label: o("common.all") },
      { value: "P0", label: "P0" },
      { value: "P1", label: "P1" },
      { value: "P2", label: "P2" },
      { value: "P3", label: "P3" }
    ]), ue = R(""), A = x(() => [
      { value: "", label: o("common.all") },
      { value: "firing", label: o("admin.ops.alertEvents.status.firing") },
      { value: "resolved", label: o("admin.ops.alertEvents.status.resolved") },
      { value: "manual_resolved", label: o("admin.ops.alertEvents.status.manualResolved") }
    ]), m = R(""), i = x(() => [
      { value: "", label: o("common.all") },
      { value: "true", label: o("admin.ops.alertEvents.table.emailSent") },
      { value: "false", label: o("admin.ops.alertEvents.table.emailIgnored") }
    ]);
    function O(K = {}) {
      const j = {
        limit: Ht,
        time_range: J.value
      };
      return X.value && (j.severity = X.value), ue.value && (j.status = ue.value), m.value === "true" && (j.email_sent = !0), m.value === "false" && (j.email_sent = !1), { ...j, ...K };
    }
    async function C() {
      var K, j;
      r.value = !0;
      try {
        const z = await se.listAlertEvents(O());
        q.value = z, k.value = z.length === Ht;
      } catch (z) {
        console.error("[OpsAlertEventsCard] Failed to load alert events", z), s.showError(((j = (K = z == null ? void 0 : z.response) == null ? void 0 : K.data) == null ? void 0 : j.detail) || o("admin.ops.alertEvents.loadFailed")), q.value = [], k.value = !1;
      } finally {
        r.value = !1;
      }
    }
    async function E() {
      if (F.value || r.value || !k.value) return;
      const K = q.value[q.value.length - 1];
      if (K) {
        F.value = !0;
        try {
          const j = await se.listAlertEvents(
            O({ before_fired_at: K.fired_at || K.created_at, before_id: K.id })
          );
          if (!j.length) {
            k.value = !1;
            return;
          }
          q.value = [...q.value, ...j], j.length < Ht && (k.value = !1);
        } catch (j) {
          console.error("[OpsAlertEventsCard] Failed to load more alert events", j), k.value = !1;
        } finally {
          F.value = !1;
        }
      }
    }
    function T(K) {
      const j = K.target;
      if (!j) return;
      j.scrollTop + j.clientHeight >= j.scrollHeight - 120 && E();
    }
    function I(K, j) {
      var ee;
      const z = (ee = K == null ? void 0 : K.dimensions) == null ? void 0 : ee[j];
      return z == null ? "" : typeof z == "string" ? z : typeof z == "number" || typeof z == "boolean" ? String(z) : "";
    }
    function W(K) {
      const j = Math.max(0, Math.floor(K)), z = Math.floor(j / 1e3);
      if (z < 60) return `${z}s`;
      const ee = Math.floor(z / 60);
      if (ee < 60) return `${ee}m`;
      const oe = Math.floor(ee / 60);
      return oe < 24 ? `${oe}h` : `${Math.floor(oe / 24)}d`;
    }
    function ce(K) {
      const j = new Date(K.fired_at || K.created_at);
      if (Number.isNaN(j.getTime())) return "-";
      const z = K.resolved_at || null, ee = String(K.status || "").trim().toLowerCase();
      if (z) {
        const ke = new Date(z);
        if (!Number.isNaN(ke.getTime())) {
          const Re = ke.getTime() - j.getTime();
          return `${o(ee === "manual_resolved" ? "admin.ops.alertEvents.status.manualResolved" : "admin.ops.alertEvents.status.resolved")} ${W(Re)}`;
        }
      }
      const be = Date.now() - j.getTime();
      return `${o("admin.ops.alertEvents.status.firing")} ${W(be)}`;
    }
    function he(K) {
      var be;
      const j = [], z = I(K, "platform");
      z && j.push(`platform=${z}`);
      const ee = (be = K.dimensions) == null ? void 0 : be.group_id;
      ee != null && ee !== "" && j.push(`group_id=${String(ee)}`);
      const oe = I(K, "region");
      return oe && j.push(`region=${oe}`), j.length ? j.join(" ") : "-";
    }
    function _e() {
      S.value = !1, g.value = null, V.value = [];
    }
    async function N(K) {
      var j, z;
      S.value = !0, g.value = K, v.value = !0, B.value = !0;
      try {
        const ee = await se.getAlertEvent(K.id);
        g.value = ee;
      } catch (ee) {
        console.error("[OpsAlertEventsCard] Failed to load alert detail", ee), s.showError(((z = (j = ee == null ? void 0 : ee.response) == null ? void 0 : j.data) == null ? void 0 : z.detail) || o("admin.ops.alertEvents.detail.loadFailed"));
      } finally {
        v.value = !1;
      }
      await _();
    }
    async function _() {
      var j;
      const K = g.value;
      if (!K) {
        V.value = [], B.value = !1;
        return;
      }
      B.value = !0;
      try {
        const z = I(K, "platform"), ee = (j = K.dimensions) == null ? void 0 : j.group_id, oe = typeof ee == "number" ? ee : void 0, be = await se.listAlertEvents({
          limit: 20,
          time_range: c.value,
          platform: z || void 0,
          group_id: oe,
          status: ""
        });
        V.value = be.filter((ke) => {
          var je, Fe;
          if (ke.rule_id !== K.rule_id) return !1;
          const Re = I(ke, "platform"), Qe = I(K, "platform");
          if ((Re || "") !== (Qe || "")) return !1;
          const We = (je = ke.dimensions) == null ? void 0 : je.group_id, Ze = (Fe = K.dimensions) == null ? void 0 : Fe.group_id;
          return (We ?? null) === (Ze ?? null);
        });
      } catch (z) {
        console.error("[OpsAlertEventsCard] Failed to load alert history", z), V.value = [];
      } finally {
        B.value = !1;
      }
    }
    function p(K) {
      const j = Date.now();
      return K === "1h" ? new Date(j + 3600 * 1e3).toISOString() : K === "24h" ? new Date(j + 1440 * 60 * 1e3).toISOString() : K === "7d" ? new Date(j + 10080 * 60 * 1e3).toISOString() : new Date(j + 3600 * 1e3).toISOString();
    }
    async function L() {
      var j, z, ee;
      const K = g.value;
      if (K && !b.value) {
        b.value = !0;
        try {
          const oe = I(K, "platform"), be = (j = K.dimensions) == null ? void 0 : j.group_id, ke = typeof be == "number" ? be : null, Re = I(K, "region") || null;
          await se.createAlertSilence({
            rule_id: K.rule_id,
            platform: oe || "",
            group_id: ke ?? void 0,
            region: Re ?? void 0,
            until: p(D.value),
            reason: `silence from UI (${D.value})`
          }), s.showSuccess(o("admin.ops.alertEvents.detail.silenceSuccess"));
        } catch (oe) {
          console.error("[OpsAlertEventsCard] Failed to silence alert", oe), s.showError(((ee = (z = oe == null ? void 0 : oe.response) == null ? void 0 : z.data) == null ? void 0 : ee.detail) || o("admin.ops.alertEvents.detail.silenceFailed"));
        } finally {
          b.value = !1;
        }
      }
    }
    async function ne() {
      var K, j;
      if (g.value && !b.value) {
        b.value = !0;
        try {
          await se.updateAlertEventStatus(g.value.id, "manual_resolved"), s.showSuccess(o("admin.ops.alertEvents.detail.manualResolvedSuccess"));
          const z = await se.getAlertEvent(g.value.id);
          g.value = z, await C(), await _();
        } catch (z) {
          console.error("[OpsAlertEventsCard] Failed to resolve alert", z), s.showError(((j = (K = z == null ? void 0 : z.response) == null ? void 0 : K.data) == null ? void 0 : j.detail) || o("admin.ops.alertEvents.detail.manualResolvedFailed"));
        } finally {
          b.value = !1;
        }
      }
    }
    Ct(() => {
      C();
    }), ge([J, X, ue, m], () => {
      q.value = [], k.value = !0, C();
    }), ge(c, () => {
      S.value && _();
    });
    function Se(K) {
      const j = String(K || "").trim().toLowerCase();
      return j === "p0" || j === "critical" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : j === "p1" || j === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : j === "p2" || j === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300";
    }
    function Ee(K) {
      const j = String(K || "").trim().toLowerCase();
      return j === "firing" ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-500/30" : j === "resolved" ? "bg-zo-signal-50 text-zo-signal-700 ring-zo-signal-600/20 dark:bg-zo-signal-900/30 dark:text-zo-signal-300 dark:ring-zo-signal-500/30" : j === "manual_resolved" ? "bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-900/30 dark:text-slate-300 dark:ring-slate-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-500/30";
    }
    function qe(K) {
      const j = String(K || "").trim().toLowerCase();
      return j ? j === "firing" ? o("admin.ops.alertEvents.status.firing") : j === "resolved" ? o("admin.ops.alertEvents.status.resolved") : j === "manual_resolved" ? o("admin.ops.alertEvents.status.manualResolved") : j.toUpperCase() : "-";
    }
    const Ie = x(() => q.value.length === 0 && !r.value);
    return (K, j) => (n(), d("div", fc, [
      e("div", yc, [
        e("div", null, [
          e("h3", hc, t(a(o)("admin.ops.alertEvents.title")), 1),
          e("p", bc, t(a(o)("admin.ops.alertEvents.description")), 1)
        ]),
        e("div", kc, [
          U(me, {
            "model-value": J.value,
            options: ae.value,
            class: "w-[120px]",
            onChange: j[0] || (j[0] = (z) => J.value = String(z || "24h"))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": X.value,
            options: Z.value,
            class: "w-[88px]",
            onChange: j[1] || (j[1] = (z) => X.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": ue.value,
            options: A.value,
            class: "w-[110px]",
            onChange: j[2] || (j[2] = (z) => ue.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": m.value,
            options: i.value,
            class: "w-[110px]",
            onChange: j[3] || (j[3] = (z) => m.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: C
          }, [
            (n(), d("svg", {
              class: Q(["h-3.5 w-3.5", { "animate-spin": r.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...j[6] || (j[6] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            H(" " + t(a(o)("common.refresh")), 1)
          ], 8, wc)
        ])
      ]),
      r.value ? (n(), d("div", $c, [
        j[7] || (j[7] = e("svg", {
          class: "h-4 w-4 animate-spin",
          fill: "none",
          viewBox: "0 0 24 24"
        }, [
          e("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }),
          e("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          })
        ], -1)),
        H(" " + t(a(o)("admin.ops.alertEvents.loading")), 1)
      ])) : Ie.value ? (n(), d("div", Cc, t(a(o)("admin.ops.alertEvents.empty")), 1)) : (n(), d("div", Sc, [
        e("div", {
          class: "max-h-[600px] overflow-y-auto",
          onScroll: T
        }, [
          a(h) ? (n(), d("table", Fc, [
            e("thead", Oc, [
              e("tr", null, [
                e("th", Ic, t(a(o)("admin.ops.alertEvents.table.time")), 1),
                e("th", jc, t(a(o)("admin.ops.alertEvents.table.severity")), 1),
                e("th", Pc, t(a(o)("admin.ops.alertEvents.table.platform")), 1),
                e("th", Uc, t(a(o)("admin.ops.alertEvents.table.ruleId")), 1),
                e("th", Nc, t(a(o)("admin.ops.alertEvents.table.title")), 1),
                e("th", Hc, t(a(o)("admin.ops.alertEvents.table.duration")), 1),
                e("th", Bc, t(a(o)("admin.ops.alertEvents.table.dimensions")), 1),
                e("th", Gc, t(a(o)("admin.ops.alertEvents.table.email")), 1)
              ])
            ]),
            e("tbody", Qc, [
              (n(!0), d(de, null, pe(q.value, (z) => (n(), d("tr", {
                key: z.id,
                class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50",
                onClick: (ee) => N(z),
                title: z.title || ""
              }, [
                e("td", Kc, t(a(Ge)(z.fired_at || z.created_at)), 1),
                e("td", Jc, [
                  e("div", Zc, [
                    e("span", {
                      class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", Se(String(z.severity || ""))])
                    }, t(z.severity || "-"), 3),
                    e("span", {
                      class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Ee(z.status)])
                    }, t(qe(z.status)), 3)
                  ])
                ]),
                e("td", Yc, t(I(z, "platform") || "-"), 1),
                e("td", Xc, [
                  e("span", e0, "#" + t(z.rule_id), 1)
                ]),
                e("td", t0, [
                  e("div", s0, t(z.title || "-"), 1),
                  z.description ? (n(), d("div", a0, t(z.description), 1)) : M("", !0)
                ]),
                e("td", r0, t(ce(z)), 1),
                e("td", o0, t(he(z)), 1),
                e("td", n0, [
                  e("span", {
                    class: "inline-flex items-center justify-end gap-1.5",
                    title: z.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")
                  }, [
                    z.email_sent ? (n(), ie(Ve, {
                      key: 0,
                      name: "checkCircle",
                      size: "sm",
                      class: "text-zo-signal-600 dark:text-zo-signal-400"
                    })) : (n(), ie(Ve, {
                      key: 1,
                      name: "ban",
                      size: "sm",
                      class: "text-gray-400 dark:text-gray-500"
                    })),
                    e("span", i0, t(z.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")), 1)
                  ], 8, l0)
                ])
              ], 8, Wc))), 128))
            ])
          ])) : (n(), d("div", Rc, [
            (n(!0), d(de, null, pe(q.value, (z) => (n(), d("div", {
              key: z.id,
              class: "cursor-pointer space-y-2 p-4 hover:bg-gray-50 dark:hover:bg-dark-700/50",
              onClick: (ee) => N(z)
            }, [
              e("div", Dc, [
                e("span", {
                  class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", Se(String(z.severity || ""))])
                }, t(z.severity || "-"), 3),
                e("span", {
                  class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Ee(z.status)])
                }, t(qe(z.status)), 3),
                e("span", Ec, t(a(Ge)(z.fired_at || z.created_at)), 1)
              ]),
              e("div", qc, t(z.title || "-"), 1),
              z.description ? (n(), d("div", Lc, t(z.description), 1)) : M("", !0),
              e("div", zc, [
                e("span", null, [
                  e("span", Mc, "#" + t(z.rule_id), 1),
                  H(" · " + t(ce(z)), 1)
                ]),
                e("span", Ac, [
                  z.email_sent ? (n(), ie(Ve, {
                    key: 0,
                    name: "checkCircle",
                    size: "xs",
                    class: "text-zo-signal-600 dark:text-zo-signal-400"
                  })) : (n(), ie(Ve, {
                    key: 1,
                    name: "ban",
                    size: "xs",
                    class: "text-gray-400 dark:text-gray-500"
                  })),
                  H(" " + t(z.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")), 1)
                ])
              ]),
              e("div", Vc, t(he(z)), 1)
            ], 8, Tc))), 128))
          ])),
          F.value ? (n(), d("div", d0, [
            j[8] || (j[8] = e("svg", {
              class: "h-4 w-4 animate-spin",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              e("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              e("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)),
            H(" " + t(a(o)("admin.ops.alertEvents.loading")), 1)
          ])) : !k.value && q.value.length > 0 ? (n(), d("div", u0, " - ")) : M("", !0)
        ], 32)
      ])),
      U(Je, {
        show: S.value,
        title: a(o)("admin.ops.alertEvents.detail.title"),
        width: "wide",
        "close-on-click-outside": !0,
        onClose: _e
      }, {
        default: ve(() => {
          var z, ee;
          return [
            v.value ? (n(), d("div", c0, t(a(o)("admin.ops.alertEvents.detail.loading")), 1)) : g.value ? (n(), d("div", m0, [
              e("div", g0, [
                e("div", v0, [
                  e("div", null, [
                    e("div", _0, [
                      e("span", {
                        class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold", Se(String(g.value.severity || ""))])
                      }, t(g.value.severity || "-"), 3),
                      e("span", {
                        class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Ee(g.value.status)])
                      }, t(qe(g.value.status)), 3)
                    ]),
                    e("div", x0, t(g.value.title || "-"), 1),
                    g.value.description ? (n(), d("div", f0, t(g.value.description), 1)) : M("", !0)
                  ]),
                  e("div", y0, [
                    e("div", h0, [
                      e("span", b0, t(a(o)("admin.ops.alertEvents.detail.silence")), 1),
                      U(me, {
                        "model-value": D.value,
                        options: f.value,
                        class: "w-[110px]",
                        onChange: j[4] || (j[4] = (oe) => D.value = String(oe || "1h"))
                      }, null, 8, ["model-value", "options"]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        disabled: b.value,
                        onClick: L
                      }, [
                        U(Ve, {
                          name: "ban",
                          size: "sm"
                        }),
                        H(" " + t(a(o)("common.apply")), 1)
                      ], 8, k0)
                    ]),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      disabled: b.value,
                      onClick: ne
                    }, [
                      U(Ve, {
                        name: "checkCircle",
                        size: "sm"
                      }),
                      H(" " + t(a(o)("admin.ops.alertEvents.detail.manualResolve")), 1)
                    ], 8, w0)
                  ])
                ])
              ]),
              e("div", $0, [
                e("div", C0, [
                  e("div", S0, t(a(o)("admin.ops.alertEvents.detail.firedAt")), 1),
                  e("div", R0, t(a(Ge)(g.value.fired_at || g.value.created_at)), 1)
                ]),
                e("div", T0, [
                  e("div", D0, t(a(o)("admin.ops.alertEvents.detail.resolvedAt")), 1),
                  e("div", E0, t(g.value.resolved_at ? a(Ge)(g.value.resolved_at) : "-"), 1)
                ]),
                e("div", q0, [
                  e("div", L0, t(a(o)("admin.ops.alertEvents.detail.ruleId")), 1),
                  e("div", z0, [
                    e("div", M0, "#" + t(g.value.rule_id), 1),
                    e("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?open_alert_rules=1&alert_rule_id=${g.value.rule_id}`
                    }, [
                      U(Ve, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      H(" " + t(a(o)("admin.ops.alertEvents.detail.viewRule")), 1)
                    ], 8, A0),
                    e("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?platform=${encodeURIComponent(I(g.value, "platform") || "")}&group_id=${((z = g.value.dimensions) == null ? void 0 : z.group_id) || ""}&error_type=request&open_error_details=1`
                    }, [
                      U(Ve, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      H(" " + t(a(o)("admin.ops.alertEvents.detail.viewLogs")), 1)
                    ], 8, V0)
                  ])
                ]),
                e("div", F0, [
                  e("div", O0, t(a(o)("admin.ops.alertEvents.detail.dimensions")), 1),
                  e("div", I0, [
                    I(g.value, "platform") ? (n(), d("div", j0, "platform=" + t(I(g.value, "platform")), 1)) : M("", !0),
                    (ee = g.value.dimensions) != null && ee.group_id ? (n(), d("div", P0, "group_id=" + t(g.value.dimensions.group_id), 1)) : M("", !0),
                    I(g.value, "region") ? (n(), d("div", U0, "region=" + t(I(g.value, "region")), 1)) : M("", !0)
                  ])
                ])
              ]),
              e("div", N0, [
                e("div", H0, [
                  e("div", null, [
                    e("div", B0, t(a(o)("admin.ops.alertEvents.detail.historyTitle")), 1),
                    e("div", G0, t(a(o)("admin.ops.alertEvents.detail.historyHint")), 1)
                  ]),
                  U(me, {
                    "model-value": c.value,
                    options: w.value,
                    class: "w-[140px]",
                    onChange: j[5] || (j[5] = (oe) => c.value = String(oe || "7d"))
                  }, null, 8, ["model-value", "options"])
                ]),
                B.value ? (n(), d("div", Q0, t(a(o)("admin.ops.alertEvents.detail.historyLoading")), 1)) : V.value.length === 0 ? (n(), d("div", W0, t(a(o)("admin.ops.alertEvents.detail.historyEmpty")), 1)) : (n(), d("div", K0, [
                  e("table", J0, [
                    e("thead", Z0, [
                      e("tr", null, [
                        e("th", Y0, t(a(o)("admin.ops.alertEvents.table.time")), 1),
                        e("th", X0, t(a(o)("admin.ops.alertEvents.table.status")), 1),
                        e("th", ep, t(a(o)("admin.ops.alertEvents.table.metric")), 1)
                      ])
                    ]),
                    e("tbody", tp, [
                      (n(!0), d(de, null, pe(V.value, (oe) => (n(), d("tr", {
                        key: oe.id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        e("td", sp, t(a(Ge)(oe.fired_at || oe.created_at)), 1),
                        e("td", ap, [
                          e("span", {
                            class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Ee(oe.status)])
                          }, t(qe(oe.status)), 3)
                        ]),
                        e("td", rp, [
                          typeof oe.metric_value == "number" && typeof oe.threshold_value == "number" ? (n(), d("span", op, t(oe.metric_value.toFixed(2)) + " / " + t(oe.threshold_value.toFixed(2)), 1)) : (n(), d("span", np, "-"))
                        ])
                      ]))), 128))
                    ])
                  ])
                ]))
              ])
            ])) : (n(), d("div", p0, t(a(o)("admin.ops.alertEvents.detail.empty")), 1))
          ];
        }),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), ip = { class: "card p-4 md:p-5" }, dp = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, up = { class: "text-sm font-bold text-gray-900 dark:text-white" }, cp = { class: "flex flex-wrap items-center gap-2" }, pp = { class: "w-36" }, mp = { class: "w-36" }, gp = {
  key: 0,
  class: "w-28"
}, vp = { class: "w-24" }, _p = ["disabled"], xp = ["disabled"], fp = { class: "text-xs text-gray-500 dark:text-gray-400" }, yp = {
  key: 0,
  class: "mb-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, hp = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-500 dark:text-gray-400"
}, bp = {
  key: 3,
  class: "space-y-3"
}, kp = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, wp = { class: "max-h-[420px] overflow-auto" }, $p = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Cp = { class: "break-all text-xs font-medium text-gray-900 dark:text-gray-100" }, Sp = { class: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs" }, Rp = { class: "flex items-baseline justify-between gap-2" }, Tp = { class: "text-gray-500 dark:text-gray-400" }, Dp = { class: "text-gray-700 dark:text-gray-200" }, Ep = { class: "flex items-baseline justify-between gap-2" }, qp = { class: "text-gray-500 dark:text-gray-400" }, Lp = { class: "text-gray-700 dark:text-gray-200" }, zp = { class: "flex items-baseline justify-between gap-2" }, Mp = { class: "text-gray-500 dark:text-gray-400" }, Ap = { class: "text-gray-700 dark:text-gray-200" }, Vp = { class: "flex items-baseline justify-between gap-2" }, Fp = { class: "text-gray-500 dark:text-gray-400" }, Op = { class: "text-gray-700 dark:text-gray-200" }, Ip = { class: "flex items-baseline justify-between gap-2" }, jp = { class: "text-gray-500 dark:text-gray-400" }, Pp = { class: "text-gray-700 dark:text-gray-200" }, Up = { class: "flex items-baseline justify-between gap-2" }, Np = { class: "text-gray-500 dark:text-gray-400" }, Hp = { class: "text-gray-700 dark:text-gray-200" }, Bp = {
  key: 1,
  class: "min-w-full text-left text-xs md:text-sm"
}, Gp = { class: "sticky top-0 z-10 bg-white dark:bg-dark-800" }, Qp = { class: "border-b border-gray-200 text-gray-500 dark:border-dark-700 dark:text-gray-400" }, Wp = { class: "px-2 py-2 font-semibold" }, Kp = { class: "px-2 py-2 font-semibold" }, Jp = { class: "px-2 py-2 font-semibold" }, Zp = { class: "px-2 py-2 font-semibold" }, Yp = { class: "px-2 py-2 font-semibold" }, Xp = { class: "px-2 py-2 font-semibold" }, em = { class: "px-2 py-2 font-semibold" }, tm = { class: "px-2 py-2 font-medium" }, sm = { class: "px-2 py-2" }, am = { class: "px-2 py-2" }, rm = { class: "px-2 py-2" }, om = { class: "px-2 py-2" }, nm = { class: "px-2 py-2" }, lm = { class: "px-2 py-2" }, im = {
  key: 0,
  class: "mt-3 text-xs text-gray-500 dark:text-gray-400"
}, dm = /* @__PURE__ */ xe({
  __name: "OpsOpenAITokenStatsCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(y) {
    const o = y, { t: s } = ye(), h = Dt("(min-width: 768px)"), r = R(!1), F = R(""), q = R(null), k = R("30d"), S = R("topn"), g = R(20), v = R(1), b = R(20), B = x(() => {
      var i;
      return ((i = q.value) == null ? void 0 : i.items) ?? [];
    }), V = x(() => {
      var i;
      return ((i = q.value) == null ? void 0 : i.total) ?? 0;
    }), c = x(() => {
      if (S.value !== "pagination") return 1;
      const i = b.value > 0 ? b.value : 20;
      return Math.max(1, Math.ceil(V.value / i));
    }), w = x(() => [
      { value: "30m", label: s("admin.ops.timeRange.30m") },
      { value: "1h", label: s("admin.ops.timeRange.1h") },
      { value: "1d", label: s("admin.ops.timeRange.1d") },
      { value: "15d", label: s("admin.ops.timeRange.15d") },
      { value: "30d", label: s("admin.ops.timeRange.30d") }
    ]), D = x(() => [
      { value: "topn", label: s("admin.ops.openaiTokenStats.viewModeTopN") },
      { value: "pagination", label: s("admin.ops.openaiTokenStats.viewModePagination") }
    ]), f = x(() => [
      { value: 10, label: "Top 10" },
      { value: 20, label: "Top 20" },
      { value: 50, label: "Top 50" },
      { value: 100, label: "Top 100" }
    ]), J = x(() => [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 50, label: "50" },
      { value: 100, label: "100" }
    ]);
    function ae(i) {
      return typeof i != "number" || !Number.isFinite(i) ? "-" : i.toFixed(2);
    }
    function X(i) {
      return typeof i != "number" || !Number.isFinite(i) ? "-" : Be(Math.round(i));
    }
    function Z() {
      const i = {
        time_range: k.value,
        platform: o.platformFilter || void 0,
        group_id: typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? o.groupIdFilter : void 0
      };
      return S.value === "topn" ? i.top_n = g.value : (i.page = v.value, i.page_size = b.value), i;
    }
    async function ue() {
      r.value = !0, F.value = "";
      try {
        q.value = await se.getOpenAITokenStats(Z()), S.value === "pagination" && v.value > c.value && (v.value = c.value, q.value = await se.getOpenAITokenStats(Z()));
      } catch (i) {
        console.error("[OpsOpenAITokenStatsCard] Failed to load data", i), q.value = null, F.value = (i == null ? void 0 : i.message) || s("admin.ops.openaiTokenStats.failedToLoad");
      } finally {
        r.value = !1;
      }
    }
    ge(
      () => ({
        timeRange: k.value,
        viewMode: S.value,
        topN: g.value,
        page: v.value,
        pageSize: b.value,
        platform: o.platformFilter,
        groupId: o.groupIdFilter,
        refreshToken: o.refreshToken
      }),
      (i, O) => {
        const C = !O || i.timeRange !== O.timeRange || i.viewMode !== O.viewMode || i.pageSize !== O.pageSize || i.platform !== O.platform || i.groupId !== O.groupId;
        if (i.viewMode === "pagination" && C && i.page !== 1) {
          v.value = 1;
          return;
        }
        ue();
      },
      { immediate: !0 }
    );
    function A() {
      S.value === "pagination" && v.value > 1 && (v.value -= 1);
    }
    function m() {
      S.value === "pagination" && v.value < c.value && (v.value += 1);
    }
    return (i, O) => (n(), d("section", ip, [
      e("div", dp, [
        e("h3", up, t(a(s)("admin.ops.openaiTokenStats.title")), 1),
        e("div", cp, [
          e("div", pp, [
            U(me, {
              modelValue: k.value,
              "onUpdate:modelValue": O[0] || (O[0] = (C) => k.value = C),
              options: w.value
            }, null, 8, ["modelValue", "options"])
          ]),
          e("div", mp, [
            U(me, {
              modelValue: S.value,
              "onUpdate:modelValue": O[1] || (O[1] = (C) => S.value = C),
              options: D.value
            }, null, 8, ["modelValue", "options"])
          ]),
          S.value === "topn" ? (n(), d("div", gp, [
            U(me, {
              modelValue: g.value,
              "onUpdate:modelValue": O[2] || (O[2] = (C) => g.value = C),
              options: f.value
            }, null, 8, ["modelValue", "options"])
          ])) : (n(), d(de, { key: 1 }, [
            e("div", vp, [
              U(me, {
                modelValue: b.value,
                "onUpdate:modelValue": O[3] || (O[3] = (C) => b.value = C),
                options: J.value
              }, null, 8, ["modelValue", "options"])
            ]),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || v.value <= 1,
              onClick: A
            }, t(a(s)("admin.ops.openaiTokenStats.prevPage")), 9, _p),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || v.value >= c.value,
              onClick: m
            }, t(a(s)("admin.ops.openaiTokenStats.nextPage")), 9, xp),
            e("span", fp, t(a(s)("admin.ops.openaiTokenStats.pageInfo", { page: v.value, total: c.value })), 1)
          ], 64))
        ])
      ]),
      F.value ? (n(), d("div", yp, t(F.value), 1)) : M("", !0),
      r.value ? (n(), d("div", hp, t(a(s)("admin.ops.loadingText")), 1)) : B.value.length === 0 ? (n(), ie(at, {
        key: 2,
        title: a(s)("common.noData"),
        description: a(s)("admin.ops.openaiTokenStats.empty")
      }, null, 8, ["title", "description"])) : (n(), d("div", bp, [
        e("div", kp, [
          e("div", wp, [
            a(h) ? (n(), d("table", Bp, [
              e("thead", Gp, [
                e("tr", Qp, [
                  e("th", Wp, t(a(s)("admin.ops.openaiTokenStats.table.model")), 1),
                  e("th", Kp, t(a(s)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                  e("th", Jp, t(a(s)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                  e("th", Zp, t(a(s)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                  e("th", Yp, t(a(s)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                  e("th", Xp, t(a(s)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                  e("th", em, t(a(s)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1)
                ])
              ]),
              e("tbody", null, [
                (n(!0), d(de, null, pe(B.value, (C) => (n(), d("tr", {
                  key: C.model,
                  class: "border-b border-gray-100 text-gray-700 last:border-b-0 dark:border-dark-800 dark:text-gray-200"
                }, [
                  e("td", tm, t(C.model), 1),
                  e("td", sm, t(X(C.request_count)), 1),
                  e("td", am, t(ae(C.avg_tokens_per_sec)), 1),
                  e("td", rm, t(ae(C.avg_first_token_ms)), 1),
                  e("td", om, t(X(C.total_output_tokens)), 1),
                  e("td", nm, t(X(C.avg_duration_ms)), 1),
                  e("td", lm, t(X(C.requests_with_first_token)), 1)
                ]))), 128))
              ])
            ])) : (n(), d("div", $p, [
              (n(!0), d(de, null, pe(B.value, (C) => (n(), d("div", {
                key: C.model,
                class: "space-y-2 p-3"
              }, [
                e("div", Cp, t(C.model), 1),
                e("div", Sp, [
                  e("div", Rp, [
                    e("span", Tp, t(a(s)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                    e("span", Dp, t(X(C.request_count)), 1)
                  ]),
                  e("div", Ep, [
                    e("span", qp, t(a(s)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                    e("span", Lp, t(ae(C.avg_tokens_per_sec)), 1)
                  ]),
                  e("div", zp, [
                    e("span", Mp, t(a(s)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                    e("span", Ap, t(ae(C.avg_first_token_ms)), 1)
                  ]),
                  e("div", Vp, [
                    e("span", Fp, t(a(s)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                    e("span", Op, t(X(C.total_output_tokens)), 1)
                  ]),
                  e("div", Ip, [
                    e("span", jp, t(a(s)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                    e("span", Pp, t(X(C.avg_duration_ms)), 1)
                  ]),
                  e("div", Up, [
                    e("span", Np, t(a(s)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1),
                    e("span", Hp, t(X(C.requests_with_first_token)), 1)
                  ])
                ])
              ]))), 128))
            ]))
          ])
        ]),
        S.value === "topn" ? (n(), d("div", im, t(a(s)("admin.ops.openaiTokenStats.totalModels", { total: V.value })), 1)) : M("", !0)
      ]))
    ]));
  }
}), um = { class: "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-dark-700 dark:bg-dark-900/60" }, cm = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, pm = { class: "text-sm font-bold text-gray-900 dark:text-white" }, mm = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, gm = { class: "flex flex-wrap items-center gap-2 text-xs" }, vm = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, _m = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, xm = { class: "rounded-md bg-zo-alert-100 px-2 py-1 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" }, fm = { class: "rounded-md bg-red-100 px-2 py-1 text-red-700 dark:bg-red-900/30 dark:text-red-300" }, ym = { class: "mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-dark-700 dark:bg-dark-800/70" }, hm = { class: "mb-2 flex items-center justify-between" }, bm = { class: "text-xs font-semibold text-gray-700 dark:text-gray-200" }, km = {
  key: 0,
  class: "text-xs text-gray-500"
}, wm = { class: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6" }, $m = { class: "text-xs text-gray-600 dark:text-gray-300" }, Cm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Sm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Rm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Tm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Dm = { class: "mt-1 block text-[11px] text-gray-500 dark:text-gray-400" }, Em = { class: "md:col-span-2 xl:col-span-6" }, qm = { class: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end" }, Lm = { class: "flex flex-wrap items-center gap-x-4 gap-y-2" }, zm = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Mm = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Am = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Vm = { class: "flex flex-wrap items-center gap-2 lg:justify-end" }, Fm = ["disabled"], Om = ["disabled"], Im = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, jm = {
  key: 0,
  class: "mt-2 text-xs text-red-600 dark:text-red-400"
}, Pm = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-5" }, Um = { class: "text-xs text-gray-600 dark:text-gray-300" }, Nm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Hm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Bm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Gm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Qm = ["placeholder"], Wm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Km = { class: "text-xs text-gray-600 dark:text-gray-300" }, Jm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Zm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Ym = { class: "text-xs text-gray-600 dark:text-gray-300" }, Xm = { class: "text-xs text-gray-600 dark:text-gray-300" }, eg = { class: "text-xs text-gray-600 dark:text-gray-300" }, tg = { class: "text-xs text-gray-600 dark:text-gray-300" }, sg = { class: "text-xs text-gray-600 dark:text-gray-300" }, ag = ["placeholder"], rg = { class: "mb-3 flex flex-wrap gap-2" }, og = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, ng = {
  key: 0,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, lg = {
  key: 1,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, ig = {
  key: 2,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, dg = { class: "flex items-center justify-between gap-2" }, ug = { class: "text-xs text-gray-500 dark:text-gray-400" }, cg = ["title"], pg = { class: "whitespace-normal break-all text-xs text-gray-700 dark:text-gray-300" }, mg = {
  key: 3,
  class: "overflow-auto"
}, gg = { class: "min-w-full table-fixed divide-y divide-gray-200 dark:divide-dark-700" }, vg = { class: "bg-gray-50 dark:bg-dark-900" }, _g = { class: "w-[170px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, xg = { class: "w-[160px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, fg = { class: "w-[80px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, yg = { class: "px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, hg = { class: "divide-y divide-gray-100 dark:divide-dark-800" }, bg = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, kg = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, wg = ["title"], $g = { class: "px-3 py-2 text-xs" }, Cg = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300 whitespace-normal break-all" }, Sg = /* @__PURE__ */ xe({
  __name: "OpsSystemLogTable",
  props: {
    platformFilter: { default: "" },
    refreshToken: { default: 0 }
  },
  setup(y) {
    const o = st(), { t: s } = ye(), h = Dt("(min-width: 768px)"), r = y, F = R(!1), q = R([]), k = R(0), S = R(1), g = R(20), v = R({
      queue_depth: 0,
      queue_capacity: 0,
      dropped_count: 0,
      write_failed_count: 0,
      written_count: 0,
      avg_write_delay_ms: 0
    }), b = R(!1), B = R(!1), V = Bt({
      level: "info",
      persist_access_logs: !1,
      enable_sampling: !1,
      sampling_initial: 100,
      sampling_thereafter: 100,
      caller: !0,
      stacktrace_level: "error",
      retention_days: 30
    }), c = Bt({
      time_range: "1h",
      start_time: "",
      end_time: "",
      host: "",
      level: "",
      component: "",
      request_id: "",
      client_request_id: "",
      user_id: "",
      api_key_id: "",
      account_id: "",
      platform: "",
      model: "",
      q: ""
    }), w = [
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ], D = [
      { value: "none", label: "none" },
      { value: "error", label: "error" },
      { value: "fatal", label: "fatal" }
    ], f = [
      { value: "5m", label: "5m" },
      { value: "30m", label: "30m" },
      { value: "1h", label: "1h" },
      { value: "6h", label: "6h" },
      { value: "24h", label: "24h" },
      { value: "7d", label: "7d" },
      { value: "30d", label: "30d" }
    ], J = x(() => [
      { value: "", label: s("admin.ops.systemLogs.all") },
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ]), ae = (_) => {
      const p = String(_ || "").toLowerCase();
      return p === "error" || p === "fatal" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : p === "warn" || p === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : p === "debug" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    }, X = (_) => {
      if (!_) return "-";
      const p = new Date(_);
      return Number.isNaN(p.getTime()) ? _ : p.toLocaleString();
    }, Z = (_, p) => {
      if (!_) return "";
      const L = _[p];
      return L == null ? "" : typeof L == "string" ? L.trim() : typeof L == "number" || typeof L == "boolean" ? String(L) : "";
    }, ue = (_) => {
      const p = [], L = String(_.message || "").trim();
      L && p.push(L);
      const ne = _.extra || {}, Se = Z(ne, "status_code"), Ee = Z(ne, "latency_ms"), qe = Z(ne, "method"), Ie = Z(ne, "path"), K = Z(ne, "client_ip"), j = Z(ne, "protocol"), z = [];
      Se && z.push(`status=${Se}`), Ee && z.push(`latency_ms=${Ee}`), qe && z.push(`method=${qe}`), Ie && z.push(`path=${Ie}`), K && z.push(`ip=${K}`), j && z.push(`proto=${j}`), z.length > 0 && p.push(z.join(" "));
      const ee = [];
      _.request_id && ee.push(`req=${_.request_id}`), _.client_request_id && ee.push(`client_req=${_.client_request_id}`), _.user_id != null && ee.push(`user=${_.user_id}`), _.api_key_id != null && ee.push(`key=${_.api_key_id}`), _.account_id != null && ee.push(`acc=${_.account_id}`), _.platform && ee.push(`platform=${_.platform}`), _.model && ee.push(`model=${_.model}`), ee.length > 0 && p.push(ee.join(" "));
      const oe = Z(ne, "errors");
      oe && p.push(`errors=${oe}`);
      const be = Z(ne, "err") || Z(ne, "error");
      return be && p.push(`error=${be}`), p.join("  ");
    }, A = (_) => {
      if (!_) return;
      const p = new Date(_);
      if (!Number.isNaN(p.getTime()))
        return p.toISOString();
    }, m = () => {
      const _ = {
        page: S.value,
        page_size: g.value,
        time_range: c.time_range
      };
      if (c.time_range === "30d" && (_.time_range = "30d"), c.start_time && (_.start_time = A(c.start_time)), c.end_time && (_.end_time = A(c.end_time)), c.host.trim() && (_.host = c.host.trim()), c.level.trim() && (_.level = c.level.trim()), c.component.trim() && (_.component = c.component.trim()), c.request_id.trim() && (_.request_id = c.request_id.trim()), c.client_request_id.trim() && (_.client_request_id = c.client_request_id.trim()), c.user_id.trim()) {
        const p = Number.parseInt(c.user_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (_.user_id = p);
      }
      if (c.api_key_id.trim()) {
        const p = Number.parseInt(c.api_key_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (_.api_key_id = p);
      }
      if (c.account_id.trim()) {
        const p = Number.parseInt(c.account_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (_.account_id = p);
      }
      return c.platform.trim() && (_.platform = c.platform.trim()), c.model.trim() && (_.model = c.model.trim()), c.q.trim() && (_.q = c.q.trim()), _;
    }, i = async () => {
      var _, p;
      F.value = !0;
      try {
        const L = await se.listSystemLogs(m());
        q.value = L.items || [], k.value = L.total || 0;
      } catch (L) {
        console.error("[OpsSystemLogTable] Failed to fetch logs", L), o.showError(((p = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : p.detail) || s("admin.ops.systemLogs.loadFailed"));
      } finally {
        F.value = !1;
      }
    }, O = async () => {
      try {
        v.value = await se.getSystemLogSinkHealth();
      } catch {
      }
    }, C = async () => {
      b.value = !0;
      try {
        const _ = await se.getRuntimeLogConfig();
        V.level = _.level, V.persist_access_logs = _.persist_access_logs, V.enable_sampling = _.enable_sampling, V.sampling_initial = _.sampling_initial, V.sampling_thereafter = _.sampling_thereafter, V.caller = _.caller, V.stacktrace_level = _.stacktrace_level, V.retention_days = _.retention_days;
      } catch (_) {
        console.error("[OpsSystemLogTable] Failed to load runtime log config", _);
      } finally {
        b.value = !1;
      }
    }, E = async () => {
      var _, p;
      B.value = !0;
      try {
        const L = await se.updateRuntimeLogConfig({ ...V });
        V.level = L.level, V.persist_access_logs = L.persist_access_logs, V.enable_sampling = L.enable_sampling, V.sampling_initial = L.sampling_initial, V.sampling_thereafter = L.sampling_thereafter, V.caller = L.caller, V.stacktrace_level = L.stacktrace_level, V.retention_days = L.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigActive"));
      } catch (L) {
        console.error("[OpsSystemLogTable] Failed to save runtime log config", L), o.showError(((p = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : p.detail) || s("admin.ops.systemLogs.runtimeConfigSaveFailed"));
      } finally {
        B.value = !1;
      }
    }, T = async () => {
      var p, L;
      if (window.confirm(s("admin.ops.systemLogs.resetRuntimeConfigConfirm"))) {
        B.value = !0;
        try {
          const ne = await se.resetRuntimeLogConfig();
          V.level = ne.level, V.persist_access_logs = ne.persist_access_logs, V.enable_sampling = ne.enable_sampling, V.sampling_initial = ne.sampling_initial, V.sampling_thereafter = ne.sampling_thereafter, V.caller = ne.caller, V.stacktrace_level = ne.stacktrace_level, V.retention_days = ne.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigReset")), await O();
        } catch (ne) {
          console.error("[OpsSystemLogTable] Failed to reset runtime log config", ne), o.showError(((L = (p = ne == null ? void 0 : ne.response) == null ? void 0 : p.data) == null ? void 0 : L.detail) || s("admin.ops.systemLogs.runtimeConfigResetFailed"));
        } finally {
          B.value = !1;
        }
      }
    }, I = async () => {
      if (window.confirm(s("admin.ops.systemLogs.cleanupConfirm")))
        try {
          const p = {
            start_time: A(c.start_time),
            end_time: A(c.end_time),
            host: c.host.trim() || void 0,
            level: c.level.trim() || void 0,
            component: c.component.trim() || void 0,
            request_id: c.request_id.trim() || void 0,
            client_request_id: c.client_request_id.trim() || void 0,
            user_id: c.user_id.trim() ? Number.parseInt(c.user_id.trim(), 10) : void 0,
            api_key_id: c.api_key_id.trim() ? Number.parseInt(c.api_key_id.trim(), 10) : void 0,
            account_id: c.account_id.trim() ? Number.parseInt(c.account_id.trim(), 10) : void 0,
            platform: c.platform.trim() || void 0,
            model: c.model.trim() || void 0,
            q: c.q.trim() || void 0
          }, L = await se.cleanupSystemLogs(p);
          o.showSuccess(s("admin.ops.systemLogs.cleanupSuccess", { count: L.deleted || 0 })), S.value = 1, await Promise.all([i(), O()]);
        } catch (p) {
          console.error("[OpsSystemLogTable] Failed to cleanup logs", p), o.showError(
            Ps(p, s("admin.ops.systemLogs.cleanupFailed"), {
              OPS_SYSTEM_LOG_CLEANUP_FILTER_REQUIRED: s("admin.ops.systemLogs.cleanupFilterRequired")
            })
          );
        }
    }, W = () => {
      c.time_range = "1h", c.start_time = "", c.end_time = "", c.host = "", c.level = "", c.component = "", c.request_id = "", c.client_request_id = "", c.user_id = "", c.api_key_id = "", c.account_id = "", c.platform = r.platformFilter || "", c.model = "", c.q = "", S.value = 1, i();
    };
    ge(() => r.platformFilter, (_) => {
      _ && !c.platform && (c.platform = _, S.value = 1, i());
    }), ge(() => r.refreshToken, () => {
      i(), O();
    });
    const ce = (_) => {
      S.value = _, i();
    }, he = (_) => {
      g.value = _, S.value = 1, i();
    }, _e = () => {
      S.value = 1, i();
    }, N = x(() => q.value.length > 0);
    return Ct(async () => {
      r.platformFilter && (c.platform = r.platformFilter), await Promise.all([i(), O(), C()]);
    }), (_, p) => (n(), d("section", um, [
      e("div", cm, [
        e("div", null, [
          e("h3", pm, t(a(s)("admin.ops.systemLogs.title")), 1),
          e("p", mm, t(a(s)("admin.ops.systemLogs.description")), 1)
        ]),
        e("div", gm, [
          e("span", vm, t(a(s)("admin.ops.systemLogs.queue")) + " " + t(v.value.queue_depth) + "/" + t(v.value.queue_capacity), 1),
          e("span", _m, t(a(s)("admin.ops.systemLogs.written")) + " " + t(v.value.written_count), 1),
          e("span", xm, t(a(s)("admin.ops.systemLogs.dropped")) + " " + t(v.value.dropped_count), 1),
          e("span", fm, t(a(s)("admin.ops.systemLogs.failed")) + " " + t(v.value.write_failed_count), 1)
        ])
      ]),
      e("div", ym, [
        e("div", hm, [
          e("div", bm, t(a(s)("admin.ops.systemLogs.runtimeConfig")), 1),
          b.value ? (n(), d("span", km, t(a(s)("common.loading")), 1)) : M("", !0)
        ]),
        e("div", wm, [
          e("label", $m, [
            H(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
            U(me, {
              modelValue: V.level,
              "onUpdate:modelValue": p[0] || (p[0] = (L) => V.level = L),
              class: "mt-1",
              options: w
            }, null, 8, ["modelValue"])
          ]),
          e("label", Cm, [
            H(t(a(s)("admin.ops.systemLogs.stacktraceThreshold")) + " ", 1),
            U(me, {
              modelValue: V.stacktrace_level,
              "onUpdate:modelValue": p[1] || (p[1] = (L) => V.stacktrace_level = L),
              class: "mt-1",
              options: D
            }, null, 8, ["modelValue"])
          ]),
          e("label", Sm, [
            H(t(a(s)("admin.ops.systemLogs.samplingInitial")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (L) => V.sampling_initial = L),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                le,
                V.sampling_initial,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Rm, [
            H(t(a(s)("admin.ops.systemLogs.samplingThereafter")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": p[3] || (p[3] = (L) => V.sampling_thereafter = L),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                le,
                V.sampling_thereafter,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Tm, [
            H(t(a(s)("admin.ops.systemLogs.retentionDays")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": p[4] || (p[4] = (L) => V.retention_days = L),
              type: "number",
              min: "1",
              max: "3650",
              class: "input mt-1"
            }, null, 512), [
              [
                le,
                V.retention_days,
                void 0,
                { number: !0 }
              ]
            ]),
            e("span", Dm, t(a(s)("admin.ops.systemLogs.retentionDaysHint")), 1)
          ]),
          e("div", Em, [
            e("div", qm, [
              e("div", Lm, [
                e("label", zm, [
                  re(e("input", {
                    "onUpdate:modelValue": p[5] || (p[5] = (L) => V.caller = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, V.caller]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.caller")), 1)
                ]),
                e("label", Mm, [
                  re(e("input", {
                    "onUpdate:modelValue": p[6] || (p[6] = (L) => V.enable_sampling = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, V.enable_sampling]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.sampling")), 1)
                ]),
                e("label", Am, [
                  re(e("input", {
                    "onUpdate:modelValue": p[7] || (p[7] = (L) => V.persist_access_logs = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, V.persist_access_logs]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.persistAccessLogs")), 1)
                ])
              ]),
              e("div", Vm, [
                e("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  disabled: B.value,
                  onClick: E
                }, t(B.value ? a(s)("common.saving") : a(s)("admin.ops.systemLogs.saveAndApply")), 9, Fm),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: B.value,
                  onClick: T
                }, t(a(s)("admin.ops.systemLogs.resetDefaults")), 9, Om)
              ])
            ])
          ])
        ]),
        e("p", Im, t(a(s)("admin.ops.systemLogs.persistAccessLogsHint")), 1),
        v.value.last_error ? (n(), d("p", jm, t(a(s)("admin.ops.systemLogs.latestWriteError")) + " " + t(v.value.last_error), 1)) : M("", !0)
      ]),
      e("div", Pm, [
        e("label", Um, [
          H(t(a(s)("admin.ops.systemLogs.timeRange")) + " ", 1),
          U(me, {
            modelValue: c.time_range,
            "onUpdate:modelValue": p[8] || (p[8] = (L) => c.time_range = L),
            class: "mt-1",
            options: f
          }, null, 8, ["modelValue"])
        ]),
        e("label", Nm, [
          H(t(a(s)("admin.ops.systemLogs.startTime")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[9] || (p[9] = (L) => c.start_time = L),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [le, c.start_time]
          ])
        ]),
        e("label", Hm, [
          H(t(a(s)("admin.ops.systemLogs.endTime")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[10] || (p[10] = (L) => c.end_time = L),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [le, c.end_time]
          ])
        ]),
        e("label", Bm, [
          H(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
          U(me, {
            modelValue: c.level,
            "onUpdate:modelValue": p[11] || (p[11] = (L) => c.level = L),
            class: "mt-1",
            options: J.value
          }, null, 8, ["modelValue", "options"])
        ]),
        e("label", Gm, [
          H(t(a(s)("admin.ops.systemLogs.component")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[12] || (p[12] = (L) => c.component = L),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.componentPlaceholder")
          }, null, 8, Qm), [
            [le, c.component]
          ])
        ]),
        e("label", Wm, [
          H(t(a(s)("admin.ops.systemLogs.host")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[13] || (p[13] = (L) => c.host = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.host]
          ])
        ]),
        e("label", Km, [
          p[22] || (p[22] = H(" request_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": p[14] || (p[14] = (L) => c.request_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.request_id]
          ])
        ]),
        e("label", Jm, [
          p[23] || (p[23] = H(" client_request_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": p[15] || (p[15] = (L) => c.client_request_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.client_request_id]
          ])
        ]),
        e("label", Zm, [
          p[24] || (p[24] = H(" user_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": p[16] || (p[16] = (L) => c.user_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.user_id]
          ])
        ]),
        e("label", Ym, [
          H(t(a(s)("admin.ops.systemLogs.keyId")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[17] || (p[17] = (L) => c.api_key_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.api_key_id]
          ])
        ]),
        e("label", Xm, [
          p[25] || (p[25] = H(" account_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": p[18] || (p[18] = (L) => c.account_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.account_id]
          ])
        ]),
        e("label", eg, [
          H(t(a(s)("admin.ops.systemLogs.platform")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[19] || (p[19] = (L) => c.platform = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.platform]
          ])
        ]),
        e("label", tg, [
          H(t(a(s)("admin.ops.systemLogs.model")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[20] || (p[20] = (L) => c.model = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [le, c.model]
          ])
        ]),
        e("label", sg, [
          H(t(a(s)("admin.ops.systemLogs.keyword")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": p[21] || (p[21] = (L) => c.q = L),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.keywordPlaceholder")
          }, null, 8, ag), [
            [le, c.q]
          ])
        ])
      ]),
      e("div", rg, [
        e("button", {
          type: "button",
          class: "btn btn-primary btn-sm",
          onClick: _e
        }, t(a(s)("admin.ops.systemLogs.search")), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: W
        }, t(a(s)("common.reset")), 1),
        e("button", {
          type: "button",
          class: "btn btn-danger btn-sm",
          onClick: I
        }, t(a(s)("admin.ops.systemLogs.cleanCurrentFilters")), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: O
        }, t(a(s)("admin.ops.systemLogs.refreshHealth")), 1)
      ]),
      e("div", og, [
        F.value ? (n(), d("div", ng, t(a(s)("common.loading")), 1)) : N.value ? a(h) ? (n(), d("div", mg, [
          e("table", gg, [
            e("thead", vg, [
              e("tr", null, [
                e("th", _g, t(a(s)("admin.ops.systemLogs.time")), 1),
                e("th", xg, t(a(s)("admin.ops.systemLogs.host")), 1),
                e("th", fg, t(a(s)("admin.ops.systemLogs.level")), 1),
                e("th", yg, t(a(s)("admin.ops.systemLogs.logDetails")), 1)
              ])
            ]),
            e("tbody", hg, [
              (n(!0), d(de, null, pe(q.value, (L) => (n(), d("tr", {
                key: L.id,
                class: "align-top"
              }, [
                e("td", bg, t(X(L.created_at)), 1),
                e("td", kg, [
                  e("span", {
                    class: "block truncate",
                    title: L.host || "-"
                  }, t(L.host || "-"), 9, wg)
                ]),
                e("td", $g, [
                  e("span", {
                    class: Q(["inline-flex rounded-full px-2 py-0.5 font-semibold", ae(L.level)])
                  }, t(L.level), 3)
                ]),
                e("td", Cg, t(ue(L)), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), d("div", ig, [
          (n(!0), d(de, null, pe(q.value, (L) => (n(), d("div", {
            key: L.id,
            class: "space-y-1.5 p-3"
          }, [
            e("div", dg, [
              e("span", {
                class: Q(["inline-flex rounded-full px-2 py-0.5 text-xs font-semibold", ae(L.level)])
              }, t(L.level), 3),
              e("span", ug, t(X(L.created_at)), 1)
            ]),
            L.host ? (n(), d("div", {
              key: 0,
              class: "truncate text-xs text-gray-500 dark:text-gray-400",
              title: L.host
            }, t(L.host), 9, cg)) : M("", !0),
            e("div", pg, t(ue(L)), 1)
          ]))), 128))
        ])) : (n(), d("div", lg, t(a(s)("admin.ops.systemLogs.empty")), 1)),
        U(Qt, {
          total: k.value,
          page: S.value,
          "page-size": g.value,
          "onUpdate:page": ce,
          "onUpdate:pageSize": he
        }, null, 8, ["total", "page", "page-size"])
      ])
    ]));
  }
}), Rg = { class: "flex h-full min-h-0 flex-col" }, Tg = { class: "mb-4 flex flex-shrink-0 items-center justify-between" }, Dg = { class: "text-xs text-gray-500 dark:text-gray-400" }, Eg = {
  key: 0,
  class: "flex flex-1 items-center justify-center py-16"
}, qg = { class: "flex flex-col items-center gap-3" }, Lg = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, zg = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col"
}, Mg = {
  key: 0,
  class: "rounded-xl border border-dashed border-gray-200 p-10 text-center dark:border-dark-700"
}, Ag = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, Vg = { class: "mt-1 text-xs text-gray-400" }, Fg = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Og = { class: "min-h-0 flex-1 overflow-auto" }, Ig = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, jg = { class: "flex flex-wrap items-center gap-2" }, Pg = { class: "text-xs font-medium text-gray-700 dark:text-gray-200" }, Ug = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, Ng = { class: "break-all text-xs text-gray-600 dark:text-gray-300" }, Hg = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-300" }, Bg = {
  key: 0,
  class: "flex items-center gap-2"
}, Gg = ["title"], Qg = ["onClick"], Wg = ["onClick"], Kg = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, Jg = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, Zg = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Yg = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Xg = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ev = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, tv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, sv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, av = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, rv = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ov = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, nv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, lv = { class: "whitespace-nowrap px-4 py-3" }, iv = { class: "whitespace-nowrap px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-200" }, dv = ["title"], uv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, cv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, pv = { class: "px-4 py-3" }, mv = {
  key: 0,
  class: "flex items-center gap-2"
}, gv = ["title"], vv = ["onClick"], _v = {
  key: 1,
  class: "text-xs text-gray-400"
}, xv = { class: "whitespace-nowrap px-4 py-3 text-right" }, fv = ["onClick"], yv = {
  key: 1,
  class: "text-xs text-gray-400"
}, hv = /* @__PURE__ */ xe({
  __name: "OpsRequestDetailsModal",
  props: {
    modelValue: { type: Boolean },
    timeRange: {},
    preset: {},
    platform: {},
    groupId: {}
  },
  emits: ["update:modelValue", "openErrorDetail"],
  setup(y, { emit: o }) {
    const s = y, h = o, { t: r } = ye(), F = st(), { copyToClipboard: q } = Os(), k = Dt("(min-width: 768px)"), S = R(!1), g = R([]), v = R(0), b = R(1), B = R(10), V = () => h("update:modelValue", !1), c = x(() => s.preset.sort === "ttft_desc"), w = x(() => r(c.value ? "admin.ops.ttftLabel" : "admin.ops.requestDetails.table.duration"));
    function D(i) {
      const O = c.value ? i.first_token_ms : i.duration_ms;
      return typeof O == "number" ? `${O} ms` : "-";
    }
    const f = x(() => {
      const i = Gt(s.timeRange);
      return i >= 60 ? r("admin.ops.requestDetails.rangeHours", { n: Math.round(i / 60) }) : r("admin.ops.requestDetails.rangeMinutes", { n: i });
    });
    function J() {
      const i = Gt(s.timeRange), O = /* @__PURE__ */ new Date();
      return {
        start_time: new Date(O.getTime() - i * 60 * 1e3).toISOString(),
        end_time: O.toISOString()
      };
    }
    const ae = async () => {
      if (s.modelValue) {
        S.value = !0;
        try {
          const i = {
            ...J(),
            page: b.value,
            page_size: B.value,
            kind: s.preset.kind ?? "all",
            sort: s.preset.sort ?? "created_at_desc"
          }, O = (s.platform || "").trim();
          O && (i.platform = O), typeof s.groupId == "number" && s.groupId > 0 && (i.group_id = s.groupId), typeof s.preset.min_duration_ms == "number" && (i.min_duration_ms = s.preset.min_duration_ms), typeof s.preset.max_duration_ms == "number" && (i.max_duration_ms = s.preset.max_duration_ms);
          const C = await se.listRequestDetails(i);
          g.value = C.items || [], v.value = C.total || 0;
        } catch (i) {
          console.error("[OpsRequestDetailsModal] Failed to fetch request details", i), F.showError((i == null ? void 0 : i.message) || r("admin.ops.requestDetails.failedToLoad")), g.value = [], v.value = 0;
        } finally {
          S.value = !1;
        }
      }
    };
    ge(
      () => s.modelValue,
      (i) => {
        i && (b.value = 1, B.value = 10, ae());
      }
    ), ge(
      () => [
        s.timeRange,
        s.platform,
        s.groupId,
        s.preset.kind,
        s.preset.sort,
        s.preset.min_duration_ms,
        s.preset.max_duration_ms
      ],
      () => {
        s.modelValue && (b.value = 1, ae());
      }
    );
    function X(i) {
      b.value = i, ae();
    }
    function Z(i) {
      B.value = i, b.value = 1, ae();
    }
    async function ue(i) {
      await q(i, r("admin.ops.requestDetails.requestIdCopied")) || F.showWarning(r("admin.ops.requestDetails.copyFailed"));
    }
    function A(i) {
      i && (V(), h("openErrorDetail", i));
    }
    const m = (i) => i === "error" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-300";
    return (i, O) => (n(), ie(Je, {
      show: y.modelValue,
      title: s.preset.title || a(r)("admin.ops.requestDetails.title"),
      width: "full",
      onClose: V
    }, {
      default: ve(() => [
        e("div", Rg, [
          e("div", Tg, [
            e("div", Dg, t(a(r)("admin.ops.requestDetails.rangeLabel", { range: f.value })), 1),
            e("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: ae
            }, t(a(r)("common.refresh")), 1)
          ]),
          S.value ? (n(), d("div", Eg, [
            e("div", qg, [
              O[0] || (O[0] = e("svg", {
                class: "h-8 w-8 animate-spin text-blue-500",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                e("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }),
                e("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1)),
              e("span", Lg, t(a(r)("common.loading")), 1)
            ])
          ])) : (n(), d("div", zg, [
            g.value.length === 0 ? (n(), d("div", Mg, [
              e("div", Ag, t(a(r)("admin.ops.requestDetails.empty")), 1),
              e("div", Vg, t(a(r)("admin.ops.requestDetails.emptyHint")), 1)
            ])) : (n(), d("div", Fg, [
              e("div", Og, [
                a(k) ? (n(), d("table", Kg, [
                  e("thead", Jg, [
                    e("tr", null, [
                      e("th", Zg, t(a(r)("admin.ops.requestDetails.table.time")), 1),
                      e("th", Yg, t(a(r)("admin.ops.requestDetails.table.kind")), 1),
                      e("th", Xg, t(a(r)("admin.ops.requestDetails.table.platform")), 1),
                      e("th", ev, t(a(r)("admin.ops.requestDetails.table.model")), 1),
                      e("th", tv, t(w.value), 1),
                      e("th", sv, t(a(r)("admin.ops.requestDetails.table.status")), 1),
                      e("th", av, t(a(r)("admin.ops.requestDetails.table.requestId")), 1),
                      e("th", rv, t(a(r)("admin.ops.requestDetails.table.actions")), 1)
                    ])
                  ]),
                  e("tbody", ov, [
                    (n(!0), d(de, null, pe(g.value, (C, E) => (n(), d("tr", {
                      key: E,
                      class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                    }, [
                      e("td", nv, t(a(Ge)(C.created_at)), 1),
                      e("td", lv, [
                        e("span", {
                          class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", m(C.kind)])
                        }, t(C.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3)
                      ]),
                      e("td", iv, t((C.platform || "unknown").toUpperCase()), 1),
                      e("td", {
                        class: "max-w-[240px] truncate px-4 py-3 text-xs text-gray-600 dark:text-gray-300",
                        title: C.model || ""
                      }, t(C.model || "-"), 9, dv),
                      e("td", uv, t(D(C)), 1),
                      e("td", cv, t(C.status_code ?? "-"), 1),
                      e("td", pv, [
                        C.request_id ? (n(), d("div", mv, [
                          e("span", {
                            class: "max-w-[220px] truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                            title: C.request_id
                          }, t(C.request_id), 9, gv),
                          e("button", {
                            class: "rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                            onClick: (T) => ue(C.request_id)
                          }, t(a(r)("admin.ops.requestDetails.copy")), 9, vv)
                        ])) : (n(), d("span", _v, "-"))
                      ]),
                      e("td", xv, [
                        C.kind === "error" && C.error_id ? (n(), d("button", {
                          key: 0,
                          class: "rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                          onClick: (T) => A(C.error_id)
                        }, t(a(r)("admin.ops.requestDetails.viewError")), 9, fv)) : (n(), d("span", yv, "-"))
                      ])
                    ]))), 128))
                  ])
                ])) : (n(), d("div", Ig, [
                  (n(!0), d(de, null, pe(g.value, (C, E) => (n(), d("div", {
                    key: E,
                    class: "space-y-2 p-4"
                  }, [
                    e("div", jg, [
                      e("span", {
                        class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", m(C.kind)])
                      }, t(C.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3),
                      e("span", Pg, t((C.platform || "unknown").toUpperCase()), 1),
                      e("span", Ug, t(a(Ge)(C.created_at)), 1)
                    ]),
                    e("div", Ng, t(C.model || "-"), 1),
                    e("div", Hg, [
                      e("span", null, t(w.value) + ": " + t(D(C)), 1),
                      e("span", null, t(C.status_code ?? "-"), 1)
                    ]),
                    C.request_id ? (n(), d("div", Bg, [
                      e("span", {
                        class: "min-w-0 flex-1 truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                        title: C.request_id
                      }, t(C.request_id), 9, Gg),
                      e("button", {
                        class: "shrink-0 rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                        onClick: (T) => ue(C.request_id)
                      }, t(a(r)("admin.ops.requestDetails.copy")), 9, Qg)
                    ])) : M("", !0),
                    C.kind === "error" && C.error_id ? (n(), d("button", {
                      key: 1,
                      class: "w-full rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                      onClick: (T) => A(C.error_id)
                    }, t(a(r)("admin.ops.requestDetails.viewError")), 9, Wg)) : M("", !0)
                  ]))), 128))
                ]))
              ]),
              U(Qt, {
                total: v.value,
                page: b.value,
                "page-size": B.value,
                "onUpdate:page": X,
                "onUpdate:pageSize": Z
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), bv = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500"
}, kv = {
  key: 1,
  class: "space-y-6"
}, wv = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-3 text-xs text-zo-alert-800 dark:border-zo-alert-900/50 dark:bg-zo-alert-900/20 dark:text-zo-alert-200"
}, $v = { class: "font-bold" }, Cv = { class: "mt-1 list-disc space-y-1 pl-4" }, Sv = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Rv = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Tv = { class: "input-label" }, Dv = { class: "mt-1 text-xs text-gray-500" }, Ev = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, qv = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Lv = { class: "space-y-4" }, zv = { class: "flex items-center justify-between" }, Mv = { class: "font-medium text-gray-900 dark:text-white" }, Av = { key: 0 }, Vv = { class: "input-label" }, Fv = { class: "flex gap-2" }, Ov = ["placeholder"], Iv = { class: "mt-2 flex flex-wrap gap-2" }, jv = ["onClick"], Pv = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Uv = { key: 1 }, Nv = { class: "input-label" }, Hv = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Bv = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Gv = { class: "space-y-4" }, Qv = { class: "flex items-center justify-between" }, Wv = { class: "font-medium text-gray-900 dark:text-white" }, Kv = { key: 0 }, Jv = { class: "input-label" }, Zv = { class: "flex gap-2" }, Yv = ["placeholder"], Xv = { class: "mt-2 flex flex-wrap gap-2" }, e_ = ["onClick"], t_ = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, s_ = {
  key: 1,
  class: "grid grid-cols-1 gap-4 md:grid-cols-2"
}, a_ = { class: "flex items-center justify-between" }, r_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, o_ = { key: 0 }, n_ = { class: "flex items-center justify-between" }, l_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, i_ = { key: 1 }, d_ = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, u_ = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, c_ = { class: "mb-4 text-xs text-gray-500 dark:text-gray-400" }, p_ = { class: "space-y-4" }, m_ = { class: "input-label" }, g_ = { class: "mt-1 text-xs text-gray-500" }, v_ = { class: "input-label" }, __ = { class: "mt-1 text-xs text-gray-500" }, x_ = { class: "input-label" }, f_ = { class: "mt-1 text-xs text-gray-500" }, y_ = { class: "input-label" }, h_ = { class: "mt-1 text-xs text-gray-500" }, b_ = { class: "rounded-2xl bg-gray-50 dark:bg-dark-700/50" }, k_ = { class: "cursor-pointer p-4 text-sm font-semibold text-gray-900 dark:text-white" }, w_ = { class: "space-y-4 px-4 pb-4" }, $_ = { class: "space-y-3" }, C_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, S_ = { class: "flex items-center justify-between" }, R_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, T_ = { key: 0 }, D_ = { class: "input-label" }, E_ = { class: "mt-1 text-xs text-gray-500" }, q_ = { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, L_ = { class: "input-label" }, z_ = { class: "input-label" }, M_ = { class: "input-label" }, A_ = { class: "text-xs text-gray-500" }, V_ = { class: "space-y-3" }, F_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, O_ = { class: "flex items-center justify-between" }, I_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, j_ = { class: "mt-1 text-xs text-gray-500" }, P_ = { class: "space-y-3" }, U_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, N_ = { class: "text-xs text-gray-500" }, H_ = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, B_ = { class: "input-label" }, G_ = { class: "input-label" }, Q_ = { class: "text-xs text-gray-500" }, W_ = { class: "space-y-3" }, K_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, J_ = { class: "flex items-center justify-between" }, Z_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Y_ = { class: "mt-1 text-xs text-gray-500" }, X_ = { class: "flex items-center justify-between" }, ex = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, tx = { class: "mt-1 text-xs text-gray-500" }, sx = { class: "flex items-center justify-between" }, ax = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, rx = { class: "mt-1 text-xs text-gray-500" }, ox = { class: "flex items-center justify-between" }, nx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, lx = { class: "mt-1 text-xs text-gray-500" }, ix = { class: "space-y-3" }, dx = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, ux = { class: "flex items-center justify-between" }, cx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, px = { class: "mt-1 text-xs text-gray-500" }, mx = { key: 0 }, gx = { class: "input-label" }, vx = { class: "space-y-3" }, _x = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, xx = { class: "flex items-center justify-between" }, fx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, yx = { class: "mt-1 text-xs text-gray-500" }, hx = { class: "flex items-center justify-between" }, bx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, kx = { class: "mt-1 text-xs text-gray-500" }, wx = { class: "flex justify-end gap-2" }, $x = ["disabled"], Cx = /* @__PURE__ */ xe({
  __name: "OpsSettingsDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "saved"],
  setup(y, { emit: o }) {
    const { t: s } = ye(), h = st(), r = y, F = o, q = R(!1), k = R(!1), S = R(null), g = R(null), v = R(null), b = R({
      sla_percent_min: 99.5,
      ttft_p99_ms_max: 500,
      request_error_rate_percent_max: 5,
      upstream_error_rate_percent_max: 5
    });
    async function B() {
      var A, m;
      q.value = !0;
      try {
        const [i, O, C, E] = await Promise.all([
          se.getAlertRuntimeSettings(),
          se.getEmailNotificationConfig(),
          se.getAdvancedSettings(),
          se.getMetricThresholds()
        ]);
        S.value = i, g.value = O, v.value = C, v.value && !v.value.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause = { default_threshold_5h: 0, default_threshold_7d: 0 }), E && Object.keys(E).length > 0 && (b.value = {
          sla_percent_min: E.sla_percent_min ?? 99.5,
          ttft_p99_ms_max: E.ttft_p99_ms_max ?? 500,
          request_error_rate_percent_max: E.request_error_rate_percent_max ?? 5,
          upstream_error_rate_percent_max: E.upstream_error_rate_percent_max ?? 5
        });
      } catch (i) {
        console.error("[OpsSettingsDialog] Failed to load settings", i), h.showError(((m = (A = i == null ? void 0 : i.response) == null ? void 0 : A.data) == null ? void 0 : m.detail) || s("admin.ops.settings.loadFailed"));
      } finally {
        q.value = !1;
      }
    }
    ge(() => r.show, (A) => {
      A && B();
    });
    const V = R(""), c = R(""), w = [
      { value: "", label: s("admin.ops.email.minSeverityAll") },
      { value: "critical", label: s("common.critical") },
      { value: "warning", label: s("common.warning") },
      { value: "info", label: s("common.info") }
    ];
    function D(A) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A);
    }
    function f(A) {
      if (!g.value) return;
      const m = (A === "alert" ? V.value : c.value).trim();
      if (!m) return;
      if (!D(m)) {
        h.showError(s("common.invalidEmail"));
        return;
      }
      const i = m.toLowerCase(), O = A === "alert" ? g.value.alert.recipients : g.value.report.recipients;
      O.includes(i) || O.push(i), A === "alert" ? V.value = "" : c.value = "";
    }
    function J(A, m) {
      if (!g.value) return;
      const i = A === "alert" ? g.value.alert.recipients : g.value.report.recipients, O = i.indexOf(m);
      O >= 0 && i.splice(O, 1);
    }
    const ae = x({
      get() {
        var m, i;
        const A = (i = (m = v.value) == null ? void 0 : m.openai_account_quota_auto_pause) == null ? void 0 : i.default_threshold_5h;
        return A && A > 0 ? Math.round(A * 1e3) / 10 : null;
      },
      set(A) {
        var m;
        (m = v.value) != null && m.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause.default_threshold_5h = A != null && A > 0 ? A / 100 : 0);
      }
    }), X = x({
      get() {
        var m, i;
        const A = (i = (m = v.value) == null ? void 0 : m.openai_account_quota_auto_pause) == null ? void 0 : i.default_threshold_7d;
        return A && A > 0 ? Math.round(A * 1e3) / 10 : null;
      },
      set(A) {
        var m;
        (m = v.value) != null && m.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause.default_threshold_7d = A != null && A > 0 ? A / 100 : 0);
      }
    }), Z = x(() => {
      const A = [];
      if (S.value) {
        const m = S.value.evaluation_interval_seconds;
        (!Number.isFinite(m) || m < 1 || m > 86400) && A.push(s("admin.ops.runtime.validation.evalIntervalRange"));
      }
      if (v.value) {
        const { error_log_retention_days: m, minute_metrics_retention_days: i, hourly_metrics_retention_days: O } = v.value.data_retention;
        (m < 0 || m > 365) && A.push(s("admin.ops.settings.validation.retentionDaysRange")), (i < 0 || i > 365) && A.push(s("admin.ops.settings.validation.retentionDaysRange")), (O < 0 || O > 365) && A.push(s("admin.ops.settings.validation.retentionDaysRange"));
        const { default_threshold_5h: C, default_threshold_7d: E } = v.value.openai_account_quota_auto_pause;
        (C < 0 || C > 1 || E < 0 || E > 1) && A.push(s("admin.ops.settings.validation.openaiQuotaAutoPauseRange"));
      }
      return b.value.sla_percent_min != null && (b.value.sla_percent_min < 0 || b.value.sla_percent_min > 100) && A.push(s("admin.ops.settings.validation.slaMinPercentRange")), b.value.ttft_p99_ms_max != null && b.value.ttft_p99_ms_max < 0 && A.push(s("admin.ops.settings.validation.ttftP99MaxRange")), b.value.request_error_rate_percent_max != null && (b.value.request_error_rate_percent_max < 0 || b.value.request_error_rate_percent_max > 100) && A.push(s("admin.ops.settings.validation.requestErrorRateMaxRange")), b.value.upstream_error_rate_percent_max != null && (b.value.upstream_error_rate_percent_max < 0 || b.value.upstream_error_rate_percent_max > 100) && A.push(s("admin.ops.settings.validation.upstreamErrorRateMaxRange")), { valid: A.length === 0, errors: A };
    });
    async function ue() {
      var A, m, i, O;
      if (!Z.value.valid) {
        h.showError(Z.value.errors[0]);
        return;
      }
      k.value = !0;
      try {
        g.value && (g.value.alert.enabled && g.value.alert.recipients.length === 0 && (g.value.alert.enabled = !1), g.value.report.enabled && g.value.report.recipients.length === 0 && (g.value.report.enabled = !1)), await Promise.all([
          S.value ? se.updateAlertRuntimeSettings(S.value) : Promise.resolve(),
          g.value ? se.updateEmailNotificationConfig(g.value) : Promise.resolve(),
          v.value ? se.updateAdvancedSettings(v.value) : Promise.resolve(),
          se.updateMetricThresholds(b.value)
        ]), h.showSuccess(s("admin.ops.settings.saveSuccess")), F("saved"), F("close");
      } catch (C) {
        console.error("[OpsSettingsDialog] Failed to save settings", C), h.showError(((m = (A = C == null ? void 0 : C.response) == null ? void 0 : A.data) == null ? void 0 : m.message) || ((O = (i = C == null ? void 0 : C.response) == null ? void 0 : i.data) == null ? void 0 : O.detail) || s("admin.ops.settings.saveFailed"));
      } finally {
        k.value = !1;
      }
    }
    return (A, m) => (n(), ie(Je, {
      show: y.show,
      title: a(s)("admin.ops.settings.title"),
      width: "extra-wide",
      onClose: m[35] || (m[35] = (i) => F("close"))
    }, {
      footer: ve(() => [
        e("div", wx, [
          e("button", {
            class: "btn btn-secondary",
            onClick: m[34] || (m[34] = (i) => F("close"))
          }, t(a(s)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: k.value || !Z.value.valid,
            onClick: ue
          }, t(k.value ? a(s)("common.saving") : a(s)("common.save")), 9, $x)
        ])
      ]),
      default: ve(() => [
        q.value ? (n(), d("div", bv, t(a(s)("common.loading")), 1)) : S.value && g.value && v.value ? (n(), d("div", kv, [
          Z.value.valid ? M("", !0) : (n(), d("div", wv, [
            e("div", $v, t(a(s)("admin.ops.settings.validation.title")), 1),
            e("ul", Cv, [
              (n(!0), d(de, null, pe(Z.value.errors, (i) => (n(), d("li", { key: i }, t(i), 1))), 128))
            ])
          ])),
          e("div", Sv, [
            e("h4", Rv, t(a(s)("admin.ops.settings.dataCollection")), 1),
            e("div", null, [
              e("label", Tv, t(a(s)("admin.ops.settings.evaluationInterval")), 1),
              re(e("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (i) => S.value.evaluation_interval_seconds = i),
                type: "number",
                min: "1",
                max: "86400",
                class: "input"
              }, null, 512), [
                [
                  le,
                  S.value.evaluation_interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Dv, t(a(s)("admin.ops.settings.evaluationIntervalHint")), 1)
            ])
          ]),
          e("div", Ev, [
            e("h4", qv, t(a(s)("admin.ops.settings.alertConfig")), 1),
            e("div", Lv, [
              e("div", zv, [
                e("div", null, [
                  e("label", Mv, t(a(s)("admin.ops.settings.enableAlert")), 1)
                ]),
                U(ze, {
                  modelValue: g.value.alert.enabled,
                  "onUpdate:modelValue": m[1] || (m[1] = (i) => g.value.alert.enabled = i)
                }, null, 8, ["modelValue"])
              ]),
              g.value.alert.enabled ? (n(), d("div", Av, [
                e("label", Vv, t(a(s)("admin.ops.settings.alertRecipients")), 1),
                e("div", Fv, [
                  re(e("input", {
                    "onUpdate:modelValue": m[2] || (m[2] = (i) => V.value = i),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: m[3] || (m[3] = ss(kt((i) => f("alert"), ["prevent"]), ["enter"]))
                  }, null, 40, Ov), [
                    [le, V.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: m[4] || (m[4] = (i) => f("alert"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", Iv, [
                  (n(!0), d(de, null, pe(g.value.alert.recipients, (i) => (n(), d("span", {
                    key: i,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    H(t(i) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (O) => J("alert", i)
                    }, "×", 8, jv)
                  ]))), 128))
                ]),
                e("p", Pv, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              g.value.alert.enabled ? (n(), d("div", Uv, [
                e("label", Nv, t(a(s)("admin.ops.settings.minSeverity")), 1),
                U(me, {
                  modelValue: g.value.alert.min_severity,
                  "onUpdate:modelValue": m[5] || (m[5] = (i) => g.value.alert.min_severity = i),
                  options: w
                }, null, 8, ["modelValue"])
              ])) : M("", !0)
            ])
          ]),
          e("div", Hv, [
            e("h4", Bv, t(a(s)("admin.ops.settings.reportConfig")), 1),
            e("div", Gv, [
              e("div", Qv, [
                e("div", null, [
                  e("label", Wv, t(a(s)("admin.ops.settings.enableReport")), 1)
                ]),
                U(ze, {
                  modelValue: g.value.report.enabled,
                  "onUpdate:modelValue": m[6] || (m[6] = (i) => g.value.report.enabled = i)
                }, null, 8, ["modelValue"])
              ]),
              g.value.report.enabled ? (n(), d("div", Kv, [
                e("label", Jv, t(a(s)("admin.ops.settings.reportRecipients")), 1),
                e("div", Zv, [
                  re(e("input", {
                    "onUpdate:modelValue": m[7] || (m[7] = (i) => c.value = i),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: m[8] || (m[8] = ss(kt((i) => f("report"), ["prevent"]), ["enter"]))
                  }, null, 40, Yv), [
                    [le, c.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: m[9] || (m[9] = (i) => f("report"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", Xv, [
                  (n(!0), d(de, null, pe(g.value.report.recipients, (i) => (n(), d("span", {
                    key: i,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    H(t(i) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (O) => J("report", i)
                    }, "×", 8, e_)
                  ]))), 128))
                ]),
                e("p", t_, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              g.value.report.enabled ? (n(), d("div", s_, [
                e("div", a_, [
                  e("label", r_, t(a(s)("admin.ops.settings.dailySummary")), 1),
                  U(ze, {
                    modelValue: g.value.report.daily_summary_enabled,
                    "onUpdate:modelValue": m[10] || (m[10] = (i) => g.value.report.daily_summary_enabled = i)
                  }, null, 8, ["modelValue"])
                ]),
                g.value.report.daily_summary_enabled ? (n(), d("div", o_, [
                  re(e("input", {
                    "onUpdate:modelValue": m[11] || (m[11] = (i) => g.value.report.daily_summary_schedule = i),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * *"
                  }, null, 512), [
                    [le, g.value.report.daily_summary_schedule]
                  ])
                ])) : M("", !0),
                e("div", n_, [
                  e("label", l_, t(a(s)("admin.ops.settings.weeklySummary")), 1),
                  U(ze, {
                    modelValue: g.value.report.weekly_summary_enabled,
                    "onUpdate:modelValue": m[12] || (m[12] = (i) => g.value.report.weekly_summary_enabled = i)
                  }, null, 8, ["modelValue"])
                ]),
                g.value.report.weekly_summary_enabled ? (n(), d("div", i_, [
                  re(e("input", {
                    "onUpdate:modelValue": m[13] || (m[13] = (i) => g.value.report.weekly_summary_schedule = i),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * 1"
                  }, null, 512), [
                    [le, g.value.report.weekly_summary_schedule]
                  ])
                ])) : M("", !0)
              ])) : M("", !0)
            ])
          ]),
          e("div", d_, [
            e("h4", u_, t(a(s)("admin.ops.settings.metricThresholds")), 1),
            e("p", c_, t(a(s)("admin.ops.settings.metricThresholdsHint")), 1),
            e("div", p_, [
              e("div", null, [
                e("label", m_, t(a(s)("admin.ops.settings.slaMinPercent")), 1),
                re(e("input", {
                  "onUpdate:modelValue": m[14] || (m[14] = (i) => b.value.sla_percent_min = i),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    le,
                    b.value.sla_percent_min,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", g_, t(a(s)("admin.ops.settings.slaMinPercentHint")), 1)
              ]),
              e("div", null, [
                e("label", v_, t(a(s)("admin.ops.settings.ttftP99MaxMs")), 1),
                re(e("input", {
                  "onUpdate:modelValue": m[15] || (m[15] = (i) => b.value.ttft_p99_ms_max = i),
                  type: "number",
                  min: "0",
                  step: "50",
                  class: "input"
                }, null, 512), [
                  [
                    le,
                    b.value.ttft_p99_ms_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", __, t(a(s)("admin.ops.settings.ttftP99MaxMsHint")), 1)
              ]),
              e("div", null, [
                e("label", x_, t(a(s)("admin.ops.settings.requestErrorRateMaxPercent")), 1),
                re(e("input", {
                  "onUpdate:modelValue": m[16] || (m[16] = (i) => b.value.request_error_rate_percent_max = i),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    le,
                    b.value.request_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", f_, t(a(s)("admin.ops.settings.requestErrorRateMaxPercentHint")), 1)
              ]),
              e("div", null, [
                e("label", y_, t(a(s)("admin.ops.settings.upstreamErrorRateMaxPercent")), 1),
                re(e("input", {
                  "onUpdate:modelValue": m[17] || (m[17] = (i) => b.value.upstream_error_rate_percent_max = i),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    le,
                    b.value.upstream_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", h_, t(a(s)("admin.ops.settings.upstreamErrorRateMaxPercentHint")), 1)
              ])
            ])
          ]),
          e("details", b_, [
            e("summary", k_, t(a(s)("admin.ops.settings.advancedSettings")), 1),
            e("div", w_, [
              e("div", $_, [
                e("h5", C_, t(a(s)("admin.ops.settings.dataRetention")), 1),
                e("div", S_, [
                  e("label", R_, t(a(s)("admin.ops.settings.enableCleanup")), 1),
                  U(ze, {
                    modelValue: v.value.data_retention.cleanup_enabled,
                    "onUpdate:modelValue": m[18] || (m[18] = (i) => v.value.data_retention.cleanup_enabled = i)
                  }, null, 8, ["modelValue"])
                ]),
                v.value.data_retention.cleanup_enabled ? (n(), d("div", T_, [
                  e("label", D_, t(a(s)("admin.ops.settings.cleanupSchedule")), 1),
                  re(e("input", {
                    "onUpdate:modelValue": m[19] || (m[19] = (i) => v.value.data_retention.cleanup_schedule = i),
                    type: "text",
                    class: "input",
                    placeholder: "0 2 * * *"
                  }, null, 512), [
                    [le, v.value.data_retention.cleanup_schedule]
                  ]),
                  e("p", E_, t(a(s)("admin.ops.settings.cleanupScheduleHint")), 1)
                ])) : M("", !0),
                e("div", q_, [
                  e("div", null, [
                    e("label", L_, t(a(s)("admin.ops.settings.errorLogRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": m[20] || (m[20] = (i) => v.value.data_retention.error_log_retention_days = i),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        le,
                        v.value.data_retention.error_log_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", z_, t(a(s)("admin.ops.settings.minuteMetricsRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": m[21] || (m[21] = (i) => v.value.data_retention.minute_metrics_retention_days = i),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        le,
                        v.value.data_retention.minute_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", M_, t(a(s)("admin.ops.settings.hourlyMetricsRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": m[22] || (m[22] = (i) => v.value.data_retention.hourly_metrics_retention_days = i),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        le,
                        v.value.data_retention.hourly_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("p", A_, t(a(s)("admin.ops.settings.retentionDaysHint")), 1)
              ]),
              e("div", V_, [
                e("h5", F_, t(a(s)("admin.ops.settings.aggregation")), 1),
                e("div", O_, [
                  e("div", null, [
                    e("label", I_, t(a(s)("admin.ops.settings.enableAggregation")), 1),
                    e("p", j_, t(a(s)("admin.ops.settings.aggregationHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.aggregation.aggregation_enabled,
                    "onUpdate:modelValue": m[23] || (m[23] = (i) => v.value.aggregation.aggregation_enabled = i)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              e("div", P_, [
                e("h5", U_, t(a(s)("admin.ops.settings.openaiQuotaAutoPause")), 1),
                e("p", N_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseHint")), 1),
                e("div", H_, [
                  e("div", null, [
                    e("label", B_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseDefault5h")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": m[24] || (m[24] = (i) => ae.value = i),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-5h"
                    }, null, 512), [
                      [
                        le,
                        ae.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", G_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseDefault7d")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": m[25] || (m[25] = (i) => X.value = i),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-7d"
                    }, null, 512), [
                      [
                        le,
                        X.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("p", Q_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseThresholdHint")), 1)
              ]),
              e("div", W_, [
                e("h5", K_, t(a(s)("admin.ops.settings.errorFiltering")), 1),
                e("div", J_, [
                  e("div", null, [
                    e("label", Z_, t(a(s)("admin.ops.settings.ignoreCountTokensErrors")), 1),
                    e("p", Y_, t(a(s)("admin.ops.settings.ignoreCountTokensErrorsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_count_tokens_errors,
                    "onUpdate:modelValue": m[26] || (m[26] = (i) => v.value.ignore_count_tokens_errors = i)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", X_, [
                  e("div", null, [
                    e("label", ex, t(a(s)("admin.ops.settings.ignoreContextCanceled")), 1),
                    e("p", tx, t(a(s)("admin.ops.settings.ignoreContextCanceledHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_context_canceled,
                    "onUpdate:modelValue": m[27] || (m[27] = (i) => v.value.ignore_context_canceled = i)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", sx, [
                  e("div", null, [
                    e("label", ax, t(a(s)("admin.ops.settings.ignoreNoAvailableAccounts")), 1),
                    e("p", rx, t(a(s)("admin.ops.settings.ignoreNoAvailableAccountsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_no_available_accounts,
                    "onUpdate:modelValue": m[28] || (m[28] = (i) => v.value.ignore_no_available_accounts = i)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ox, [
                  e("div", null, [
                    e("label", nx, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrors")), 1),
                    e("p", lx, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrorsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_insufficient_balance_errors,
                    "onUpdate:modelValue": m[29] || (m[29] = (i) => v.value.ignore_insufficient_balance_errors = i)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              e("div", ix, [
                e("h5", dx, t(a(s)("admin.ops.settings.autoRefresh")), 1),
                e("div", ux, [
                  e("div", null, [
                    e("label", cx, t(a(s)("admin.ops.settings.enableAutoRefresh")), 1),
                    e("p", px, t(a(s)("admin.ops.settings.enableAutoRefreshHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.auto_refresh_enabled,
                    "onUpdate:modelValue": m[30] || (m[30] = (i) => v.value.auto_refresh_enabled = i)
                  }, null, 8, ["modelValue"])
                ]),
                v.value.auto_refresh_enabled ? (n(), d("div", mx, [
                  e("label", gx, t(a(s)("admin.ops.settings.refreshInterval")), 1),
                  U(me, {
                    modelValue: v.value.auto_refresh_interval_seconds,
                    "onUpdate:modelValue": m[31] || (m[31] = (i) => v.value.auto_refresh_interval_seconds = i),
                    options: [
                      { value: 15, label: a(s)("admin.ops.settings.refreshInterval15s") },
                      { value: 30, label: a(s)("admin.ops.settings.refreshInterval30s") },
                      { value: 60, label: a(s)("admin.ops.settings.refreshInterval60s") }
                    ]
                  }, null, 8, ["modelValue", "options"])
                ])) : M("", !0)
              ]),
              e("div", vx, [
                e("h5", _x, t(a(s)("admin.ops.settings.dashboardCards")), 1),
                e("div", xx, [
                  e("div", null, [
                    e("label", fx, t(a(s)("admin.ops.settings.displayAlertEvents")), 1),
                    e("p", yx, t(a(s)("admin.ops.settings.displayAlertEventsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.display_alert_events,
                    "onUpdate:modelValue": m[32] || (m[32] = (i) => v.value.display_alert_events = i)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", hx, [
                  e("div", null, [
                    e("label", bx, t(a(s)("admin.ops.settings.displayOpenAITokenStats")), 1),
                    e("p", kx, t(a(s)("admin.ops.settings.displayOpenAITokenStatsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.display_openai_token_stats,
                    "onUpdate:modelValue": m[33] || (m[33] = (i) => v.value.display_openai_token_stats = i)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ])
        ])) : M("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Sx = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Rx = { class: "mb-4 flex flex-wrap items-start justify-between gap-3 sm:gap-4" }, Tx = { class: "text-sm font-bold text-gray-900 dark:text-white" }, Dx = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Ex = { class: "flex items-center gap-2" }, qx = ["disabled"], Lx = ["disabled"], zx = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, Mx = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Ax = {
  key: 2,
  class: "max-h-[520px] overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Vx = { class: "max-h-[520px] overflow-y-auto" }, Fx = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Ox = { class: "flex items-start justify-between gap-2" }, Ix = { class: "min-w-0" }, jx = { class: "text-xs font-bold text-gray-900 dark:text-white" }, Px = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, Ux = { class: "shrink-0 text-xs font-bold text-gray-700 dark:text-gray-200" }, Nx = { class: "text-xs text-gray-700 dark:text-gray-200" }, Hx = { class: "font-mono" }, Bx = { class: "mx-1 text-gray-400" }, Gx = { class: "font-mono" }, Qx = { class: "flex items-center justify-between gap-2" }, Wx = { class: "text-xs text-gray-700 dark:text-gray-200" }, Kx = { class: "flex items-center gap-2" }, Jx = ["onClick"], Zx = ["onClick"], Yx = {
  key: 0,
  class: "text-[10px] text-gray-400"
}, Xx = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, ef = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, tf = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, sf = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, af = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, rf = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, of = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, nf = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, lf = { class: "px-4 py-3" }, df = { class: "text-xs font-bold text-gray-900 dark:text-white" }, uf = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, cf = {
  key: 1,
  class: "mt-1 text-[10px] text-gray-400"
}, pf = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, mf = { class: "font-mono" }, gf = { class: "mx-1 text-gray-400" }, vf = { class: "font-mono" }, _f = { class: "whitespace-nowrap px-4 py-3 text-xs font-bold text-gray-700 dark:text-gray-200" }, xf = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, ff = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, yf = ["onClick"], hf = ["onClick"], bf = { class: "space-y-4" }, kf = {
  key: 0,
  class: "rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300"
}, wf = { class: "font-bold" }, $f = { class: "mt-1 list-disc pl-5" }, Cf = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Sf = { class: "md:col-span-2" }, Rf = { class: "input-label" }, Tf = { class: "md:col-span-2" }, Df = { class: "input-label" }, Ef = { class: "input-label" }, qf = {
  key: 0,
  class: "mt-1 space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Lf = { class: "input-label" }, zf = { class: "md:col-span-2" }, Mf = { class: "input-label" }, Af = {
  key: 0,
  class: "ml-1 text-red-500"
}, Vf = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Ff = { class: "input-label" }, Of = { class: "input-label" }, If = { class: "input-label" }, jf = { class: "input-label" }, Pf = { class: "input-label" }, Uf = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, Nf = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, Hf = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, Bf = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, Gf = { class: "flex items-center justify-end gap-2" }, Qf = ["disabled"], Wf = ["disabled"], Kf = /* @__PURE__ */ xe({
  __name: "OpsAlertRulesCard",
  setup(y) {
    const { t: o } = ye(), s = st(), h = Dt("(min-width: 768px)"), r = R(!1), F = R([]);
    async function q() {
      var N, _;
      r.value = !0;
      try {
        F.value = await se.listAlertRules();
      } catch (p) {
        console.error("[OpsAlertRulesCard] Failed to load rules", p), s.showError(((_ = (N = p == null ? void 0 : p.response) == null ? void 0 : N.data) == null ? void 0 : _.detail) || o("admin.ops.alertRules.loadFailed")), F.value = [];
      } finally {
        r.value = !1;
      }
    }
    Ct(() => {
      q(), w();
    });
    const k = x(() => [...F.value].sort((N, _) => (_.id || 0) - (N.id || 0))), S = R(!1), g = R(!1), v = R(null), b = R(null), B = /* @__PURE__ */ new Set([
      "group_available_accounts",
      "group_available_ratio",
      "group_rate_limit_ratio"
    ]);
    function V(N) {
      if (N == null || typeof N == "boolean") return null;
      const _ = typeof N == "number" ? N : Number.parseInt(String(N), 10);
      return Number.isFinite(_) && _ > 0 ? _ : null;
    }
    const c = R([]);
    async function w() {
      try {
        const N = await At.groups.getAll();
        c.value = N.map((_) => ({ value: _.id, label: _.name }));
      } catch (N) {
        console.error("[OpsAlertRulesCard] Failed to load groups", N), c.value = [];
      }
    }
    const D = x(() => {
      var _;
      const N = (_ = b.value) == null ? void 0 : _.metric_type;
      return N ? B.has(N) : !1;
    }), f = x({
      get() {
        var N, _;
        return V((_ = (N = b.value) == null ? void 0 : N.filters) == null ? void 0 : _.group_id);
      },
      set(N) {
        if (b.value) {
          if (N == null) {
            if (!b.value.filters) return;
            delete b.value.filters.group_id, Object.keys(b.value.filters).length === 0 && delete b.value.filters;
            return;
          }
          b.value.filters || (b.value.filters = {}), b.value.filters.group_id = N;
        }
      }
    }), J = x(() => D.value ? c.value : [{ value: null, label: o("admin.ops.alertRules.form.allGroups") }, ...c.value]), ae = x(() => [
      // System-level metrics
      {
        type: "success_rate",
        group: "system",
        label: o("admin.ops.alertRules.metrics.successRate"),
        description: o("admin.ops.alertRules.metricDescriptions.successRate"),
        recommendedOperator: "<",
        recommendedThreshold: 99,
        unit: "%"
      },
      {
        type: "error_rate",
        group: "system",
        label: o("admin.ops.alertRules.metrics.errorRate"),
        description: o("admin.ops.alertRules.metricDescriptions.errorRate"),
        recommendedOperator: ">",
        recommendedThreshold: 1,
        unit: "%"
      },
      {
        type: "upstream_error_rate",
        group: "system",
        label: o("admin.ops.alertRules.metrics.upstreamErrorRate"),
        description: o("admin.ops.alertRules.metricDescriptions.upstreamErrorRate"),
        recommendedOperator: ">",
        recommendedThreshold: 1,
        unit: "%"
      },
      {
        type: "cpu_usage_percent",
        group: "system",
        label: o("admin.ops.alertRules.metrics.cpu"),
        description: o("admin.ops.alertRules.metricDescriptions.cpu"),
        recommendedOperator: ">",
        recommendedThreshold: 80,
        unit: "%"
      },
      {
        type: "memory_usage_percent",
        group: "system",
        label: o("admin.ops.alertRules.metrics.memory"),
        description: o("admin.ops.alertRules.metricDescriptions.memory"),
        recommendedOperator: ">",
        recommendedThreshold: 80,
        unit: "%"
      },
      {
        type: "concurrency_queue_depth",
        group: "system",
        label: o("admin.ops.alertRules.metrics.queueDepth"),
        description: o("admin.ops.alertRules.metricDescriptions.queueDepth"),
        recommendedOperator: ">",
        recommendedThreshold: 10
      },
      // Group-level metrics (requires group_id filter)
      {
        type: "group_available_accounts",
        group: "group",
        label: o("admin.ops.alertRules.metrics.groupAvailableAccounts"),
        description: o("admin.ops.alertRules.metricDescriptions.groupAvailableAccounts"),
        recommendedOperator: "<",
        recommendedThreshold: 1
      },
      {
        type: "group_available_ratio",
        group: "group",
        label: o("admin.ops.alertRules.metrics.groupAvailableRatio"),
        description: o("admin.ops.alertRules.metricDescriptions.groupAvailableRatio"),
        recommendedOperator: "<",
        recommendedThreshold: 50,
        unit: "%"
      },
      {
        type: "group_rate_limit_ratio",
        group: "group",
        label: o("admin.ops.alertRules.metrics.groupRateLimitRatio"),
        description: o("admin.ops.alertRules.metricDescriptions.groupRateLimitRatio"),
        recommendedOperator: ">",
        recommendedThreshold: 10,
        unit: "%"
      },
      // Account-level metrics
      {
        type: "account_rate_limited_count",
        group: "account",
        label: o("admin.ops.alertRules.metrics.accountRateLimitedCount"),
        description: o("admin.ops.alertRules.metricDescriptions.accountRateLimitedCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "account_error_count",
        group: "account",
        label: o("admin.ops.alertRules.metrics.accountErrorCount"),
        description: o("admin.ops.alertRules.metricDescriptions.accountErrorCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "account_error_ratio",
        group: "account",
        label: o("admin.ops.alertRules.metrics.accountErrorRatio"),
        description: o("admin.ops.alertRules.metricDescriptions.accountErrorRatio"),
        recommendedOperator: ">",
        recommendedThreshold: 5,
        unit: "%"
      },
      {
        type: "account_temp_unscheduled_count",
        group: "account",
        label: o("admin.ops.alertRules.metrics.accountTempUnscheduledCount"),
        description: o("admin.ops.alertRules.metricDescriptions.accountTempUnscheduledCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "overload_account_count",
        group: "account",
        label: o("admin.ops.alertRules.metrics.overloadAccountCount"),
        description: o("admin.ops.alertRules.metricDescriptions.overloadAccountCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      }
    ]), X = x(() => {
      var _;
      const N = (_ = b.value) == null ? void 0 : _.metric_type;
      return N ? ae.value.find((p) => p.type === N) ?? null : null;
    }), Z = x(() => {
      const N = (_) => {
        const p = ae.value.filter((ne) => ne.group === _);
        return p.length === 0 ? [] : [
          {
            value: `__group__${_}`,
            label: o(`admin.ops.alertRules.metricGroups.${_}`),
            disabled: !0,
            kind: "group"
          },
          ...p.map((ne) => ({ value: ne.type, label: ne.label }))
        ];
      };
      return [...N("system"), ...N("group"), ...N("account")];
    }), ue = x(() => [">", ">=", "<", "<=", "==", "!="].map((_) => ({ value: _, label: _ }))), A = x(() => ["P0", "P1", "P2", "P3"].map((_) => ({ value: _, label: _ }))), m = x(() => [1, 5, 60].map((_) => ({ value: _, label: `${_}m` })));
    function i() {
      return {
        name: "",
        description: "",
        enabled: !0,
        metric_type: "error_rate",
        operator: ">",
        threshold: 1,
        window_minutes: 1,
        sustained_minutes: 2,
        severity: "P1",
        cooldown_minutes: 10,
        notify_email: !0
      };
    }
    function O() {
      v.value = null, b.value = i(), S.value = !0;
    }
    function C(N) {
      v.value = N.id ?? null, b.value = JSON.parse(JSON.stringify(N)), S.value = !0;
    }
    const E = x(() => {
      var p;
      const N = [], _ = b.value;
      return _ ? ((!_.name || !_.name.trim()) && N.push(o("admin.ops.alertRules.validation.nameRequired")), _.metric_type || N.push(o("admin.ops.alertRules.validation.metricRequired")), B.has(_.metric_type) && !V((p = _.filters) == null ? void 0 : p.group_id) && N.push(o("admin.ops.alertRules.validation.groupIdRequired")), _.operator || N.push(o("admin.ops.alertRules.validation.operatorRequired")), typeof _.threshold == "number" && Number.isFinite(_.threshold) || N.push(o("admin.ops.alertRules.validation.thresholdRequired")), typeof _.window_minutes == "number" && Number.isFinite(_.window_minutes) && [1, 5, 60].includes(_.window_minutes) || N.push(o("admin.ops.alertRules.validation.windowRange")), typeof _.sustained_minutes == "number" && Number.isFinite(_.sustained_minutes) && _.sustained_minutes >= 1 && _.sustained_minutes <= 1440 || N.push(o("admin.ops.alertRules.validation.sustainedRange")), typeof _.cooldown_minutes == "number" && Number.isFinite(_.cooldown_minutes) && _.cooldown_minutes >= 0 && _.cooldown_minutes <= 1440 || N.push(o("admin.ops.alertRules.validation.cooldownRange")), { valid: N.length === 0, errors: N }) : { valid: !0, errors: N };
    });
    async function T() {
      var N, _;
      if (b.value) {
        if (!E.value.valid) {
          s.showError(E.value.errors[0] || o("admin.ops.alertRules.validation.invalid"));
          return;
        }
        g.value = !0;
        try {
          v.value ? await se.updateAlertRule(v.value, b.value) : await se.createAlertRule(b.value), S.value = !1, b.value = null, v.value = null, await q(), s.showSuccess(o("admin.ops.alertRules.saveSuccess"));
        } catch (p) {
          console.error("[OpsAlertRulesCard] Failed to save rule", p), s.showError(((_ = (N = p == null ? void 0 : p.response) == null ? void 0 : N.data) == null ? void 0 : _.detail) || o("admin.ops.alertRules.saveFailed"));
        } finally {
          g.value = !1;
        }
      }
    }
    const I = R(!1), W = R(null);
    function ce(N) {
      W.value = N, I.value = !0;
    }
    async function he() {
      var N, _, p;
      if ((N = W.value) != null && N.id)
        try {
          await se.deleteAlertRule(W.value.id), I.value = !1, W.value = null, await q(), s.showSuccess(o("admin.ops.alertRules.deleteSuccess"));
        } catch (L) {
          console.error("[OpsAlertRulesCard] Failed to delete rule", L), s.showError(((p = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : p.detail) || o("admin.ops.alertRules.deleteFailed"));
        }
    }
    function _e() {
      I.value = !1, W.value = null;
    }
    return (N, _) => (n(), d("div", Sx, [
      e("div", Rx, [
        e("div", null, [
          e("h3", Tx, t(a(o)("admin.ops.alertRules.title")), 1),
          e("p", Dx, t(a(o)("admin.ops.alertRules.description")), 1)
        ]),
        e("div", Ex, [
          e("button", {
            class: "btn btn-sm btn-primary",
            disabled: r.value,
            onClick: O
          }, t(a(o)("admin.ops.alertRules.create")), 9, qx),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: q
          }, [
            (n(), d("svg", {
              class: Q(["h-3.5 w-3.5", { "animate-spin": r.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [..._[14] || (_[14] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            H(" " + t(a(o)("common.refresh")), 1)
          ], 8, Lx)
        ])
      ]),
      r.value ? (n(), d("div", zx, t(a(o)("admin.ops.alertRules.loading")), 1)) : k.value.length === 0 ? (n(), d("div", Mx, t(a(o)("admin.ops.alertRules.empty")), 1)) : (n(), d("div", Ax, [
        e("div", Vx, [
          a(h) ? (n(), d("table", Xx, [
            e("thead", ef, [
              e("tr", null, [
                e("th", tf, t(a(o)("admin.ops.alertRules.table.name")), 1),
                e("th", sf, t(a(o)("admin.ops.alertRules.table.metric")), 1),
                e("th", af, t(a(o)("admin.ops.alertRules.table.severity")), 1),
                e("th", rf, t(a(o)("admin.ops.alertRules.table.enabled")), 1),
                e("th", of, t(a(o)("admin.ops.alertRules.table.actions")), 1)
              ])
            ]),
            e("tbody", nf, [
              (n(!0), d(de, null, pe(k.value, (p) => (n(), d("tr", {
                key: p.id,
                class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
              }, [
                e("td", lf, [
                  e("div", df, t(p.name), 1),
                  p.description ? (n(), d("div", uf, t(p.description), 1)) : M("", !0),
                  p.updated_at ? (n(), d("div", cf, t(a(Ge)(p.updated_at)), 1)) : M("", !0)
                ]),
                e("td", pf, [
                  e("span", mf, t(p.metric_type), 1),
                  e("span", gf, t(p.operator), 1),
                  e("span", vf, t(p.threshold), 1)
                ]),
                e("td", _f, t(p.severity), 1),
                e("td", xf, t(p.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("td", ff, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (L) => C(p)
                  }, t(a(o)("common.edit")), 9, yf),
                  e("button", {
                    class: "ml-2 btn btn-sm btn-danger",
                    onClick: (L) => ce(p)
                  }, t(a(o)("common.delete")), 9, hf)
                ])
              ]))), 128))
            ])
          ])) : (n(), d("div", Fx, [
            (n(!0), d(de, null, pe(k.value, (p) => (n(), d("div", {
              key: p.id,
              class: "space-y-2 p-4"
            }, [
              e("div", Ox, [
                e("div", Ix, [
                  e("div", jx, t(p.name), 1),
                  p.description ? (n(), d("div", Px, t(p.description), 1)) : M("", !0)
                ]),
                e("span", Ux, t(p.severity), 1)
              ]),
              e("div", Nx, [
                e("span", Hx, t(p.metric_type), 1),
                e("span", Bx, t(p.operator), 1),
                e("span", Gx, t(p.threshold), 1)
              ]),
              e("div", Qx, [
                e("span", Wx, t(p.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("div", Kx, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (L) => C(p)
                  }, t(a(o)("common.edit")), 9, Jx),
                  e("button", {
                    class: "btn btn-sm btn-danger",
                    onClick: (L) => ce(p)
                  }, t(a(o)("common.delete")), 9, Zx)
                ])
              ]),
              p.updated_at ? (n(), d("div", Yx, t(a(Ge)(p.updated_at)), 1)) : M("", !0)
            ]))), 128))
          ]))
        ])
      ])),
      U(Je, {
        show: S.value,
        title: v.value ? a(o)("admin.ops.alertRules.editTitle") : a(o)("admin.ops.alertRules.createTitle"),
        width: "wide",
        onClose: _[13] || (_[13] = (p) => S.value = !1)
      }, {
        footer: ve(() => [
          e("div", Gf, [
            e("button", {
              class: "btn btn-secondary",
              disabled: g.value,
              onClick: _[12] || (_[12] = (p) => S.value = !1)
            }, t(a(o)("common.cancel")), 9, Qf),
            e("button", {
              class: "btn btn-primary",
              disabled: g.value,
              onClick: T
            }, t(g.value ? a(o)("common.saving") : a(o)("common.save")), 9, Wf)
          ])
        ]),
        default: ve(() => [
          e("div", bf, [
            E.value.valid ? M("", !0) : (n(), d("div", kf, [
              e("div", wf, t(a(o)("admin.ops.alertRules.validation.title")), 1),
              e("ul", $f, [
                (n(!0), d(de, null, pe(E.value.errors, (p) => (n(), d("li", { key: p }, t(p), 1))), 128))
              ])
            ])),
            e("div", Cf, [
              e("div", Sf, [
                e("label", Rf, t(a(o)("admin.ops.alertRules.form.name")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[0] || (_[0] = (p) => b.value.name = p),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [le, b.value.name]
                ])
              ]),
              e("div", Tf, [
                e("label", Df, t(a(o)("admin.ops.alertRules.form.description")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (p) => b.value.description = p),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [le, b.value.description]
                ])
              ]),
              e("div", null, [
                e("label", Ef, t(a(o)("admin.ops.alertRules.form.metric")), 1),
                U(me, {
                  modelValue: b.value.metric_type,
                  "onUpdate:modelValue": _[2] || (_[2] = (p) => b.value.metric_type = p),
                  options: Z.value
                }, null, 8, ["modelValue", "options"]),
                X.value ? (n(), d("div", qf, [
                  e("p", null, t(X.value.description), 1),
                  e("p", null, t(a(o)("admin.ops.alertRules.hints.recommended", {
                    operator: X.value.recommendedOperator,
                    threshold: X.value.recommendedThreshold,
                    unit: X.value.unit || ""
                  })), 1)
                ])) : M("", !0)
              ]),
              e("div", null, [
                e("label", Lf, t(a(o)("admin.ops.alertRules.form.operator")), 1),
                U(me, {
                  modelValue: b.value.operator,
                  "onUpdate:modelValue": _[3] || (_[3] = (p) => b.value.operator = p),
                  options: ue.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", zf, [
                e("label", Mf, [
                  H(t(a(o)("admin.ops.alertRules.form.groupId")) + " ", 1),
                  D.value ? (n(), d("span", Af, "*")) : M("", !0)
                ]),
                U(me, {
                  modelValue: f.value,
                  "onUpdate:modelValue": _[4] || (_[4] = (p) => f.value = p),
                  options: J.value,
                  searchable: "",
                  placeholder: a(o)("admin.ops.alertRules.form.groupPlaceholder"),
                  error: D.value && !f.value
                }, null, 8, ["modelValue", "options", "placeholder", "error"]),
                e("p", Vf, t(D.value ? a(o)("admin.ops.alertRules.hints.groupRequired") : a(o)("admin.ops.alertRules.hints.groupOptional")), 1)
              ]),
              e("div", null, [
                e("label", Ff, t(a(o)("admin.ops.alertRules.form.threshold")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[5] || (_[5] = (p) => b.value.threshold = p),
                  class: "input",
                  type: "number"
                }, null, 512), [
                  [
                    le,
                    b.value.threshold,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", null, [
                e("label", Of, t(a(o)("admin.ops.alertRules.form.severity")), 1),
                U(me, {
                  modelValue: b.value.severity,
                  "onUpdate:modelValue": _[6] || (_[6] = (p) => b.value.severity = p),
                  options: A.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", If, t(a(o)("admin.ops.alertRules.form.window")), 1),
                U(me, {
                  modelValue: b.value.window_minutes,
                  "onUpdate:modelValue": _[7] || (_[7] = (p) => b.value.window_minutes = p),
                  options: m.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", jf, t(a(o)("admin.ops.alertRules.form.sustained")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[8] || (_[8] = (p) => b.value.sustained_minutes = p),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "1440"
                }, null, 512), [
                  [
                    le,
                    b.value.sustained_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", null, [
                e("label", Pf, t(a(o)("admin.ops.alertRules.form.cooldown")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[9] || (_[9] = (p) => b.value.cooldown_minutes = p),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "1440"
                }, null, 512), [
                  [
                    le,
                    b.value.cooldown_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", Uf, [
                e("span", Nf, t(a(o)("admin.ops.alertRules.form.enabled")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[10] || (_[10] = (p) => b.value.enabled = p),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [wt, b.value.enabled]
                ])
              ]),
              e("div", Hf, [
                e("span", Bf, t(a(o)("admin.ops.alertRules.form.notifyEmail")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[11] || (_[11] = (p) => b.value.notify_email = p),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [wt, b.value.notify_email]
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      U(qs, {
        show: I.value,
        title: a(o)("admin.ops.alertRules.deleteConfirmTitle"),
        message: a(o)("admin.ops.alertRules.deleteConfirmMessage"),
        confirmText: a(o)("common.delete"),
        cancelText: a(o)("common.cancel"),
        onConfirm: he,
        onCancel: _e
      }, null, 8, ["show", "title", "message", "confirmText", "cancelText"])
    ]));
  }
}), Jf = {
  key: 0,
  class: "rounded-2xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, Zf = {
  key: 3,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-4"
}, Yf = { class: "lg:col-span-1 min-h-[360px]" }, Xf = { class: "lg:col-span-1 h-[360px]" }, ey = { class: "lg:col-span-2 h-[360px]" }, ty = {
  key: 4,
  class: "grid grid-cols-1 gap-6 md:grid-cols-3"
}, sy = {
  key: 5,
  class: "grid grid-cols-1 gap-6"
}, is = 5, py = /* @__PURE__ */ xe({
  __name: "OpsDashboard",
  setup(y) {
    const o = Ts(), s = Rs(), h = st(), r = ds(), { t: F } = ye(), q = x(() => r.opsMonitoringEnabled), k = /* @__PURE__ */ new Set(["5m", "30m", "1h", "6h", "24h", "custom"]), S = /* @__PURE__ */ new Set(["auto", "raw", "preagg"]), g = R(!0), v = R(!1), b = R(""), B = R(/* @__PURE__ */ new Date()), V = R("1h"), c = R(""), w = R(null), D = R("auto"), f = R(null), J = R(null), ae = `${is}h`, X = is * 60 * 60 * 1e3, Z = {
      timeRange: "tr",
      platform: "platform",
      groupId: "group_id",
      queryMode: "mode",
      fullscreen: "fullscreen",
      // Deep links
      openErrorDetails: "open_error_details",
      errorType: "error_type",
      alertRuleId: "alert_rule_id",
      openAlertRules: "open_alert_rules"
    }, ue = R(!1), A = R(!1), m = x(() => {
      const $ = o.query[Z.fullscreen];
      return $ === "1" || $ === "true";
    });
    function i() {
      const $ = { ...o.query };
      delete $[Z.fullscreen], s.replace({ query: $ });
    }
    function O() {
      const $ = { ...o.query, [Z.fullscreen]: "1" };
      s.replace({ query: $ });
    }
    function C($) {
      $.key === "Escape" && m.value && i();
    }
    let E = null, T = 0;
    function I($) {
      return !!$ && typeof $ == "object" && "code" in $ && $.code === "ERR_CANCELED";
    }
    function W() {
      E && (E.abort(), E = null);
    }
    const ce = ($) => {
      const P = o.query[$];
      return typeof P == "string" ? P : Array.isArray(P) && typeof P[0] == "string" ? P[0] : "";
    }, he = ($) => {
      const P = ce($);
      if (!P) return null;
      const G = Number.parseInt(P, 10);
      return Number.isFinite(G) ? G : null;
    }, _e = () => {
      const $ = ce(Z.timeRange);
      $ && k.has($) && (V.value = $), c.value = ce(Z.platform) || "";
      const P = he(Z.groupId);
      w.value = typeof P == "number" && P > 0 ? P : null;
      const G = ce(Z.queryMode);
      if (G && S.has(G))
        D.value = G;
      else {
        const Le = r.opsQueryModeDefault || "auto";
        D.value = S.has(Le) ? Le : "auto";
      }
      const Ne = ce(Z.openAlertRules);
      (Ne === "1" || Ne === "true") && (Fe.value = !0);
      const Ye = he(Z.alertRuleId);
      typeof Ye == "number" && Ye > 0 && (Fe.value = !0);
      const Ae = ce(Z.openErrorDetails);
      if (Ae === "1" || Ae === "true") {
        const Le = ce(Z.errorType);
        Qe.value = Le === "upstream" ? "upstream" : "request", Re.value = !0;
      }
    }, N = () => {
      const $ = { ...o.query };
      return Object.values(Z).forEach((P) => {
        delete $[P];
      }), V.value !== "1h" && ($[Z.timeRange] = V.value), c.value && ($[Z.platform] = c.value), typeof w.value == "number" && w.value > 0 && ($[Z.groupId] = String(w.value)), D.value !== "auto" && ($[Z.queryMode] = D.value), $;
    }, _ = js(async () => {
      if (ue.value) return;
      const $ = N(), P = o.query, G = Object.keys($), Ne = Object.keys(P);
      if (!(G.length === Ne.length && G.every((Le) => String(P[Le] ?? "") === String($[Le] ?? ""))))
        try {
          A.value = !0, await s.replace({ query: $ });
        } finally {
          A.value = !1;
        }
    }, 250), p = R(null), L = R(null), ne = R(null), Se = R(!1), Ee = R(null), qe = R(!1), Ie = R(null), K = R(!1), j = R(null), z = R(!1), ee = R(null), oe = R(!1), be = R(null), ke = R(!1), Re = R(!1), Qe = R("request"), We = R(!1), Ze = R({
      title: "",
      kind: "all",
      sort: "created_at_desc"
    }), je = R(!1), Fe = R(!1);
    _e();
    const rt = R(!0), ot = R(!1), Pe = R(!1), Xe = R(3e4), we = R(0), Te = R(0), { pause: Et, resume: vt } = Is(
      () => {
        if (Pe.value && q.value && !g.value) {
          if (we.value <= 0) {
            Me();
            return;
          }
          we.value -= 1;
        }
      },
      1e3,
      { immediate: !1 }
    );
    async function Oe() {
      try {
        const $ = await se.getAdvancedSettings();
        rt.value = $.display_alert_events, ot.value = $.display_openai_token_stats, Pe.value = $.auto_refresh_enabled, Xe.value = $.auto_refresh_interval_seconds * 1e3, we.value = $.auto_refresh_interval_seconds;
      } catch ($) {
        console.error("[OpsDashboard] Failed to load dashboard advanced settings", $), rt.value = !0, ot.value = !1, Pe.value = !1, Xe.value = 3e4, we.value = 0;
      }
    }
    function _t($) {
      c.value = $ || "", w.value = null;
    }
    function xt($) {
      const P = Number.isFinite($) && $ > 0 ? $ : null;
      w.value = P;
    }
    function nt($) {
      const P = {
        title: F("admin.ops.requestDetails.title"),
        kind: "all",
        sort: "created_at_desc"
      };
      Ze.value = { ...P, ...$ ?? {} }, Ze.value.title || (Ze.value.title = P.title), Re.value = !1, ke.value = !1, We.value = !0;
    }
    function lt($) {
      Qe.value = $, We.value = !1, ke.value = !1, Re.value = !0;
    }
    function Ot($) {
      typeof $ == "string" && k.has($) && (V.value = $);
    }
    function ft($, P) {
      f.value = $, J.value = P;
    }
    async function yt() {
      await Oe(), zt(), Me();
    }
    function It($) {
      c.value = typeof $ == "string" ? $ : "";
    }
    function ht($) {
      if ($ === null) {
        w.value = null;
        return;
      }
      if (typeof $ == "number") {
        w.value = $ > 0 ? $ : null;
        return;
      }
      if (typeof $ == "string") {
        const P = Number.parseInt($, 10);
        w.value = Number.isFinite(P) && P > 0 ? P : null;
      }
    }
    function jt($) {
      typeof $ == "string" && S.has($) && (D.value = $);
    }
    function it($) {
      be.value = $, Re.value = !1, We.value = !1, ke.value = !0;
    }
    function Ue() {
      const $ = {
        platform: c.value || void 0,
        group_id: w.value ?? void 0,
        mode: D.value
      };
      return V.value === "custom" ? f.value && J.value ? ($.start_time = f.value, $.end_time = J.value) : $.time_range = "1h" : $.time_range = V.value, $;
    }
    function qt() {
      const $ = {
        platform: c.value || void 0,
        group_id: w.value ?? void 0,
        mode: D.value
      }, P = /* @__PURE__ */ new Date(), G = new Date(P.getTime() - X);
      return $.start_time = G.toISOString(), $.end_time = P.toISOString(), $;
    }
    async function bt($, P) {
      if (q.value)
        try {
          const G = await se.getDashboardOverview(Ue(), { signal: P });
          if ($ !== T) return;
          p.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          p.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadOverview"));
        }
    }
    async function dt($, P) {
      if (q.value) {
        qe.value = !0;
        try {
          const G = await se.getThroughputTrend(qt(), { signal: P });
          if ($ !== T) return;
          Ee.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          Ee.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadSwitchTrend"));
        } finally {
          $ === T && (qe.value = !1);
        }
      }
    }
    async function et($, P) {
      if (q.value) {
        Se.value = !0;
        try {
          const G = await se.getThroughputTrend(Ue(), { signal: P });
          if ($ !== T) return;
          ne.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          ne.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadThroughputTrend"));
        } finally {
          $ === T && (Se.value = !1);
        }
      }
    }
    async function Pt($, P) {
      if (q.value) {
        Se.value = !0, z.value = !0;
        try {
          const G = await se.getDashboardSnapshotV2(Ue(), { signal: P });
          if ($ !== T) return;
          p.value = G.overview, ne.value = G.throughput_trend, j.value = G.error_trend;
        } catch (G) {
          if ($ !== T || I(G)) return;
          await Promise.all([
            bt($, P),
            et($, P),
            tt($, P)
          ]);
        } finally {
          $ === T && (Se.value = !1, z.value = !1);
        }
      }
    }
    async function Ut($, P) {
      if (q.value) {
        K.value = !0;
        try {
          const G = await se.getLatencyHistogram(Ue(), { signal: P });
          if ($ !== T) return;
          Ie.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          Ie.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadLatencyHistogram"));
        } finally {
          $ === T && (K.value = !1);
        }
      }
    }
    async function tt($, P) {
      if (q.value) {
        z.value = !0;
        try {
          const G = await se.getErrorTrend(Ue(), { signal: P });
          if ($ !== T) return;
          j.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          j.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadErrorTrend"));
        } finally {
          $ === T && (z.value = !1);
        }
      }
    }
    async function ut($, P) {
      if (q.value) {
        oe.value = !0;
        try {
          const G = await se.getErrorDistribution(Ue(), { signal: P });
          if ($ !== T) return;
          ee.value = G;
        } catch (G) {
          if ($ !== T || I(G)) return;
          ee.value = null, h.showError((G == null ? void 0 : G.message) || F("admin.ops.failedToLoadErrorDistribution"));
        } finally {
          $ === T && (oe.value = !1);
        }
      }
    }
    async function Lt($, P) {
      q.value && await Promise.all([
        Ut($, P),
        ut($, P)
      ]);
    }
    function ct($) {
      return !!$ && typeof $ == "object" && "code" in $ && typeof $.code == "string" && $.code === "OPS_DISABLED";
    }
    async function Me() {
      if (!q.value) return;
      W(), T += 1;
      const $ = T;
      E = new AbortController(), g.value = !0, b.value = "";
      try {
        if (await Promise.all([
          Pt($, E.signal),
          dt($, E.signal)
        ]), $ !== T) return;
        B.value = /* @__PURE__ */ new Date(), Te.value += 1, Pe.value && (we.value = Math.floor(Xe.value / 1e3)), Lt($, E.signal);
      } catch (P) {
        ct(P) || (console.error("[ops] failed to fetch dashboard data", P), b.value = F("admin.ops.failedToLoadData"));
      } finally {
        $ === T && (g.value = !1, v.value = !0);
      }
    }
    ge(
      () => [V.value, c.value, w.value, D.value],
      () => {
        ue.value || (q.value && Me(), _());
      }
    ), ge(
      () => o.query,
      () => {
        if (A.value) return;
        const $ = V.value, P = c.value, G = w.value;
        ue.value = !0, _e(), ue.value = !1, ($ !== V.value || P !== c.value || G !== w.value) && q.value && Me();
      }
    ), Ct(async () => {
      if (window.addEventListener("keydown", C), await r.fetch(), !r.opsMonitoringEnabled) {
        await s.replace("/admin/settings");
        return;
      }
      zt(), await Oe(), q.value && await Me(), Pe.value && vt();
    });
    async function zt() {
      try {
        const $ = await se.getMetricThresholds();
        L.value = $ || null;
      } catch ($) {
        console.warn("[OpsDashboard] Failed to load thresholds", $), L.value = null;
      }
    }
    return Ss(() => {
      window.removeEventListener("keydown", C), W(), Et();
    }), ge(Pe, ($) => {
      $ ? (we.value = Math.floor(Xe.value / 1e3), vt()) : (Et(), we.value = 0);
    }), ge(je, async ($) => {
      $ || await Oe();
    }), ($, P) => {
      var G, Ne, Ye, Ae, Le;
      return n(), d("div", {
        class: Q([m.value ? "flex min-h-screen flex-col justify-center bg-gray-50 p-4 dark:bg-dark-950 md:p-6" : "", "space-y-6 pb-12"])
      }, [
        b.value ? (n(), d("div", Jf, t(b.value), 1)) : M("", !0),
        g.value && !v.value ? (n(), ie($n, {
          key: 1,
          fullscreen: m.value
        }, null, 8, ["fullscreen"])) : q.value ? (n(), ie(ln, {
          key: 2,
          overview: p.value,
          platform: c.value,
          "group-id": w.value,
          "time-range": V.value,
          "query-mode": D.value,
          loading: g.value,
          "last-updated": B.value,
          thresholds: L.value,
          "auto-refresh-enabled": Pe.value,
          "auto-refresh-countdown": we.value,
          fullscreen: m.value,
          "custom-start-time": f.value,
          "custom-end-time": J.value,
          "onUpdate:timeRange": Ot,
          "onUpdate:platform": It,
          "onUpdate:group": ht,
          "onUpdate:queryMode": jt,
          "onUpdate:customTimeRange": ft,
          onRefresh: Me,
          onOpenRequestDetails: nt,
          onOpenErrorDetails: lt,
          onOpenSettings: P[0] || (P[0] = (De) => je.value = !0),
          onOpenAlertRules: P[1] || (P[1] = (De) => Fe.value = !0),
          onEnterFullscreen: O,
          onExitFullscreen: i
        }, null, 8, ["overview", "platform", "group-id", "time-range", "query-mode", "loading", "last-updated", "thresholds", "auto-refresh-enabled", "auto-refresh-countdown", "fullscreen", "custom-start-time", "custom-end-time"])) : M("", !0),
        q.value && !(g.value && !v.value) ? (n(), d("div", Zf, [
          e("div", Yf, [
            U(Sl, {
              "platform-filter": c.value,
              "group-id-filter": w.value,
              "refresh-token": Te.value
            }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
          ]),
          e("div", Xf, [
            U(xc, {
              points: ((G = Ee.value) == null ? void 0 : G.points) ?? [],
              loading: qe.value,
              "time-range": ae,
              fullscreen: m.value
            }, null, 8, ["points", "loading", "fullscreen"])
          ]),
          e("div", ey, [
            U(uc, {
              points: ((Ne = ne.value) == null ? void 0 : Ne.points) ?? [],
              "by-platform": ((Ye = ne.value) == null ? void 0 : Ye.by_platform) ?? [],
              "top-groups": ((Ae = ne.value) == null ? void 0 : Ae.top_groups) ?? [],
              loading: Se.value,
              "time-range": V.value,
              fullscreen: m.value,
              onSelectPlatform: _t,
              onSelectGroup: xt,
              onOpenDetails: nt
            }, null, 8, ["points", "by-platform", "top-groups", "loading", "time-range", "fullscreen"])
          ])
        ])) : M("", !0),
        q.value && !(g.value && !v.value) ? (n(), d("div", ty, [
          U(Hu, {
            "latency-data": Ie.value,
            loading: K.value
          }, null, 8, ["latency-data", "loading"]),
          U(ad, {
            data: ee.value,
            loading: oe.value,
            onOpenDetails: P[2] || (P[2] = (De) => lt("request"))
          }, null, 8, ["data", "loading"]),
          U(Fu, {
            points: ((Le = j.value) == null ? void 0 : Le.points) ?? [],
            loading: z.value,
            "time-range": V.value,
            onOpenRequestErrors: P[3] || (P[3] = (De) => lt("request")),
            onOpenUpstreamErrors: P[4] || (P[4] = (De) => lt("upstream"))
          }, null, 8, ["points", "loading", "time-range"])
        ])) : M("", !0),
        q.value && ot.value && !(g.value && !v.value) ? (n(), d("div", sy, [
          U(dm, {
            "platform-filter": c.value,
            "group-id-filter": w.value,
            "refresh-token": Te.value
          }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
        ])) : M("", !0),
        q.value && rt.value && !(g.value && !v.value) ? (n(), ie(lp, { key: 6 })) : M("", !0),
        q.value && !(g.value && !v.value) ? (n(), ie(Sg, {
          key: 7,
          "platform-filter": c.value,
          "refresh-token": Te.value
        }, null, 8, ["platform-filter", "refresh-token"])) : M("", !0),
        m.value ? M("", !0) : (n(), d(de, { key: 8 }, [
          U(Cx, {
            show: je.value,
            onClose: P[5] || (P[5] = (De) => je.value = !1),
            onSaved: yt
          }, null, 8, ["show"]),
          U(Je, {
            show: Fe.value,
            title: a(F)("admin.ops.alertRules.title"),
            width: "extra-wide",
            onClose: P[6] || (P[6] = (De) => Fe.value = !1)
          }, {
            default: ve(() => [
              U(Kf)
            ]),
            _: 1
          }, 8, ["show", "title"]),
          U(Ru, {
            show: Re.value,
            "time-range": V.value,
            "custom-start-time": f.value,
            "custom-end-time": J.value,
            platform: c.value,
            "group-id": w.value,
            "error-type": Qe.value,
            "onUpdate:show": P[7] || (P[7] = (De) => Re.value = De),
            onOpenErrorDetail: it
          }, null, 8, ["show", "time-range", "custom-start-time", "custom-end-time", "platform", "group-id", "error-type"]),
          U(Ni, {
            show: ke.value,
            "onUpdate:show": P[8] || (P[8] = (De) => ke.value = De),
            "error-id": be.value,
            "error-type": Qe.value
          }, null, 8, ["show", "error-id", "error-type"]),
          U(hv, {
            modelValue: We.value,
            "onUpdate:modelValue": P[9] || (P[9] = (De) => We.value = De),
            "time-range": V.value,
            preset: Ze.value,
            platform: c.value,
            "group-id": w.value,
            onOpenErrorDetail: it
          }, null, 8, ["modelValue", "time-range", "preset", "platform", "group-id"])
        ], 64))
      ], 2);
    };
  }
});
export {
  py as default
};
