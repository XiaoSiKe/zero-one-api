import { P as bs, C as ks, r as S, w as ge, a0 as ws, e as xe, u as ye, d as x, c as Ct, g as i, s as Q, h as e, l as H, i as t, j as a, F as ue, m as M, q as U, k as pe, A as de, D as gt, v as ve, n, _ as Ve, x as re, y as ie, L as $s, B as Cs, f as st, b as Bt, z as kt, I as wt, E as ss, o as Ss, a1 as Rs, a2 as Ts } from "./cnProviderAdminLeaf-CHNemIo-.js";
import { b as At, S as me, _ as Je, o as ae, C as Ds, D as Es, P as Qt, d as qs } from "./platforms-PDcpwPD4.js";
import { _ as fe } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-Bi07Op2h.js";
import { m as Ls, j as Be, a as zs } from "./format-Dqf1XZPq.js";
import { C as St, A as Ms, p as Rt, c as Tt, D as As, f as Wt, e as Kt, L as Vt, P as Jt, d as Ft, i as Zt, g as Yt, B as Vs, k as Fs, l as Dt, a as Os, b as Is, u as js } from "./index-DxqD1oCG.js";
import { _ as at } from "./EmptyState.vue_vue_type_script_setup_true_lang-7SE9Jis_.js";
import { a as Ps } from "./apiError-i2TfMBqu.js";
import { _ as ze } from "./Toggle.vue_vue_type_script_setup_true_lang-D6oIi9q8.js";
const ds = bs("adminSettings", () => {
  const y = ks(), o = S(!1), s = S(!1), h = S(!0), r = S(!0), V = S("auto"), E = S(!1), k = S([]), C = S(null);
  let g = null, v = null, b = null, B = null, A = !1, p = 0, $ = 0, T = 0, f = 0;
  function J() {
    f += 1, p += 1, $ += 1, T += 1, g = v = null, b = B = null, o.value = s.value = A = !1, C.value = null, k.value = [], h.value = r.value = !0, V.value = "auto", E.value = !1;
  }
  ge(
    () => y.token && y.user ? `${y.user.id}:${y.user.role}` : "",
    J,
    { flush: "sync" }
  );
  function oe(j = !1) {
    if (b) {
      if (j && !B) {
        T += 1;
        const R = f, O = b.then(() => (B === O && (B = null), R === f ? oe(!0) : void 0)).finally(() => {
          B === O && (B = null);
        });
        B = O;
      }
      return j ? B : b;
    }
    if (A && !j) return Promise.resolve();
    const F = ++T, D = At.payment.getConfig().then((R) => {
      var O;
      F === T && (E.value = ((O = R.data) == null ? void 0 : O.enabled) ?? !1, A = !0);
    }).catch((R) => {
      F === T && console.error("[adminSettings] Failed to fetch payment settings:", R);
    }).finally(() => {
      b === D && (b = null);
    });
    return b = D, D;
  }
  function ee(j = !1) {
    var O;
    if (!y.token || ((O = y.user) == null ? void 0 : O.role) !== "admin") return Promise.resolve();
    if (g) {
      if (j && !v) {
        p += 1;
        const W = f, ce = g.then(() => (v === ce && (v = null), W === f ? ee(!0) : void 0)).finally(() => {
          v === ce && (v = null);
        });
        v = ce;
      }
      return j ? v : g;
    }
    if (oe(j), o.value && !j) return Promise.resolve();
    j && (p += 1), s.value = !0;
    const F = p, D = $, R = At.settings.getNavigationSettings().then((W) => {
      F === p && (D === $ && (h.value = W.ops_monitoring_enabled ?? !0, r.value = W.ops_realtime_monitoring_enabled ?? !0, V.value = W.ops_query_mode_default || "auto"), C.value = {
        ...W,
        ops_monitoring_enabled: h.value,
        ops_realtime_monitoring_enabled: r.value,
        ops_query_mode_default: V.value
      }, k.value = Array.isArray(W.custom_menu_items) ? W.custom_menu_items : [], o.value = !0);
    }).catch((W) => {
      F === p && console.error("[adminSettings] Failed to fetch settings:", W);
    }).finally(() => {
      g === R && (g = null, s.value = !1);
    });
    return g = R, R;
  }
  function Z(j) {
    $ += 1, h.value = j, C.value && (C.value.ops_monitoring_enabled = j);
  }
  function Y(j) {
    $ += 1, r.value = j, C.value && (C.value.ops_realtime_monitoring_enabled = j);
  }
  function q(j) {
    T += 1, E.value = j, A = !0;
  }
  function c(j) {
    $ += 1, V.value = j || "auto", C.value && (C.value.ops_query_mode_default = V.value);
  }
  const d = () => Z(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", d), ws(() => {
    J(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", d);
  }), {
    loaded: o,
    loading: s,
    opsMonitoringEnabled: h,
    opsRealtimeMonitoringEnabled: r,
    opsQueryModeDefault: V,
    paymentEnabled: E,
    customMenuItems: k,
    navigationSettings: C,
    fetch: ee,
    reset: J,
    setOpsMonitoringEnabledLocal: Z,
    setOpsRealtimeMonitoringEnabledLocal: Y,
    setPaymentEnabledLocal: q,
    setOpsQueryModeDefaultLocal: c
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
    const s = y, h = o, { t: r } = ye(), V = ds(), E = S("1min"), k = x(() => s.overview ?? null), C = x(() => {
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
        E.value = "1min", m();
      }
    );
    const B = S(!1), A = S(""), p = S("");
    function $(u, l) {
      const X = new Date(u), $e = new Date(l), He = (se) => {
        const Ke = String(se.getMonth() + 1).padStart(2, "0"), Mt = String(se.getDate()).padStart(2, "0"), pt = String(se.getHours()).padStart(2, "0"), mt = String(se.getMinutes()).padStart(2, "0");
        return `${Ke}-${Mt} ${pt}:${mt}`;
      };
      return `${He(X)} ~ ${He($e)}`;
    }
    const T = S([]), f = x(() => [
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
        label: s.timeRange === "custom" && s.customStartTime && s.customEndTime ? `${r("admin.ops.timeRange.custom")} (${$(s.customStartTime, s.customEndTime)})` : r("admin.ops.timeRange.custom")
      }
    ]);
    x(() => [
      { value: "auto", label: r("admin.ops.queryMode.auto") },
      { value: "raw", label: r("admin.ops.queryMode.raw") },
      { value: "preagg", label: r("admin.ops.queryMode.preagg") }
    ]);
    const oe = x(() => {
      const u = s.platform ? T.value.filter((l) => l.platform === s.platform) : T.value;
      return [{ value: null, label: r("common.all") }, ...u.map((l) => ({ value: l.id, label: l.name }))];
    });
    ge(
      () => s.platform,
      (u) => {
        if (!u) return;
        const l = T.value.find((X) => X.id === s.groupId);
        l && l.platform !== u && h("update:group", null);
      }
    ), Ct(async () => {
      try {
        const u = await At.groups.getAll();
        T.value = u.map((l) => ({ id: l.id, name: l.name, platform: l.platform }));
      } catch (u) {
        console.error("[OpsDashboardHeader] Failed to load groups", u), T.value = [];
      }
    });
    function ee(u) {
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
    function Y(u) {
      const l = String(u || "1h");
      if (l === "custom") {
        const X = /* @__PURE__ */ new Date(), $e = new Date(X.getTime() - 3600 * 1e3);
        A.value = $e.toISOString().slice(0, 16), p.value = X.toISOString().slice(0, 16), B.value = !0;
      } else
        h("update:timeRange", l);
    }
    function q() {
      if (!A.value || !p.value) return;
      const u = new Date(A.value).toISOString(), l = new Date(p.value).toISOString();
      h("update:customTimeRange", u, l), h("update:timeRange", "custom"), B.value = !1;
    }
    function c() {
      B.value = !1;
    }
    function d(u) {
      h("openRequestDetails", u);
    }
    function j(u) {
      h("openErrorDetails", u);
    }
    function F(u) {
      var $e;
      if (u == null) return "normal";
      const l = ($e = s.thresholds) == null ? void 0 : $e.sla_percent_min;
      if (l == null) return "normal";
      const X = 0.1;
      return u < l ? "critical" : u < l + X ? "warning" : "normal";
    }
    function D(u) {
      var X;
      if (u == null) return "normal";
      const l = (X = s.thresholds) == null ? void 0 : X.ttft_p99_ms_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function R(u) {
      var X;
      if (u == null) return "normal";
      const l = (X = s.thresholds) == null ? void 0 : X.request_error_rate_percent_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function O(u) {
      var X;
      if (u == null) return "normal";
      const l = (X = s.thresholds) == null ? void 0 : X.upstream_error_rate_percent_max;
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
    }), _e = S(null), N = S(!1);
    function _() {
      const u = (/* @__PURE__ */ new Date()).toISOString();
      return {
        window: E.value,
        start_time: u,
        end_time: u,
        platform: s.platform,
        group_id: s.groupId,
        qps: { current: 0, peak: 0, avg: 0 },
        tps: { current: 0, peak: 0, avg: 0 }
      };
    }
    async function m() {
      if (!N.value) {
        if (!V.opsRealtimeMonitoringEnabled) {
          _e.value = _();
          return;
        }
        N.value = !0;
        try {
          const u = await ae.getRealtimeTrafficSummary(E.value, s.platform, s.groupId);
          u && u.enabled === !1 && V.setOpsRealtimeMonitoringEnabledLocal(!1), _e.value = (u == null ? void 0 : u.summary) ?? null;
        } catch (u) {
          console.error("[OpsDashboardHeader] Failed to load realtime traffic summary", u), _e.value = null;
        } finally {
          N.value = !1;
        }
      }
    }
    ge(
      () => [E.value, s.platform, s.groupId],
      () => {
        m();
      },
      { immediate: !0 }
    ), ge(
      () => V.opsRealtimeMonitoringEnabled,
      (u) => {
        u ? m() : _e.value = _();
      },
      { immediate: !0 }
    ), ge(
      () => [s.autoRefreshEnabled, s.autoRefreshCountdown, s.loading],
      ([u, l, X]) => {
        u && (X || l === 0 && m());
      }
    );
    const L = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : X.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), le = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : X.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), Se = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : X.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Ee = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : X.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), qe = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.qps) == null ? void 0 : X.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Ie = x(() => {
      var l, X;
      const u = (X = (l = _e.value) == null ? void 0 : l.tps) == null ? void 0 : X.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), K = x(() => {
      var l, X;
      const u = (X = (l = k.value) == null ? void 0 : l.qps) == null ? void 0 : X.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), I = x(() => {
      var l, X;
      const u = (X = (l = k.value) == null ? void 0 : l.tps) == null ? void 0 : X.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), z = x(() => {
      var l, X;
      const u = (l = k.value) == null ? void 0 : l.sla;
      return typeof u != "number" || (((X = k.value) == null ? void 0 : X.request_count_sla) ?? 0) <= 0 ? null : u * 100;
    }), te = x(() => {
      var l;
      const u = (l = k.value) == null ? void 0 : l.error_rate;
      return typeof u != "number" ? null : u * 100;
    }), ne = x(() => {
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
      const l = ($e = u.qps) == null ? void 0 : $e.current, X = u.error_rate ?? 0;
      return (l ?? 0) === 0 && X === 0;
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
      const X = u.system_metrics;
      if (X) {
        X.db_ok === !1 && l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.dbDown"),
          impact: r("admin.ops.diagnosis.dbDownImpact"),
          action: r("admin.ops.diagnosis.dbDownAction")
        }), X.redis_ok === !1 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.redisDown"),
          impact: r("admin.ops.diagnosis.redisDownImpact"),
          action: r("admin.ops.diagnosis.redisDownAction")
        });
        const pt = X.cpu_usage_percent ?? 0;
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
        const mt = X.memory_usage_percent ?? 0;
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
      const se = (u.error_rate ?? 0) * 100;
      se > 3 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.errorHigh", { rate: se.toFixed(2) }),
        impact: r("admin.ops.diagnosis.errorHighImpact"),
        action: r("admin.ops.diagnosis.errorHighAction")
      }) : se > 0.5 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.errorElevated", { rate: se.toFixed(2) }),
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
      const u = (l = C.value) == null ? void 0 : l.cpu_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), It = x(() => {
      const u = yt.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 80 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), ht = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.memory_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), jt = x(() => {
      const u = ht.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 85 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), it = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.db_conn_active;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ue = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.db_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), qt = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.db_conn_waiting;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), bt = x(() => it.value == null || Ue.value == null ? null : it.value + Ue.value), dt = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.db_max_open_conns;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), et = x(() => bt.value == null || dt.value == null || dt.value <= 0 ? null : Math.min(100, Math.max(0, bt.value / dt.value * 100))), Pt = x(() => {
      var u, l;
      return ((u = C.value) == null ? void 0 : u.db_ok) === !1 ? "FAIL" : et.value != null ? `${et.value.toFixed(0)}%` : ((l = C.value) == null ? void 0 : l.db_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), Ut = x(() => {
      var u, l;
      return ((u = C.value) == null ? void 0 : u.db_ok) === !1 ? "text-rose-600 dark:text-rose-400" : et.value != null ? et.value >= 90 ? "text-rose-600 dark:text-rose-400" : et.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = C.value) == null ? void 0 : l.db_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), tt = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.redis_conn_total;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), ut = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.redis_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Lt = x(() => tt.value == null || ut.value == null ? null : Math.max(tt.value - ut.value, 0)), ct = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.redis_pool_size;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Me = x(() => tt.value == null || ct.value == null || ct.value <= 0 ? null : Math.min(100, Math.max(0, tt.value / ct.value * 100))), zt = x(() => {
      var u, l;
      return ((u = C.value) == null ? void 0 : u.redis_ok) === !1 ? "FAIL" : Me.value != null ? `${Me.value.toFixed(0)}%` : ((l = C.value) == null ? void 0 : l.redis_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), w = x(() => {
      var u, l;
      return ((u = C.value) == null ? void 0 : u.redis_ok) === !1 ? "text-rose-600 dark:text-rose-400" : Me.value != null ? Me.value >= 90 ? "text-rose-600 dark:text-rose-400" : Me.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = C.value) == null ? void 0 : l.redis_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), P = x(() => {
      var l;
      const u = (l = C.value) == null ? void 0 : l.goroutine_count;
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
    }), Nt = S(!1);
    function ys() {
      Nt.value = !0;
    }
    function hs() {
      m(), h("refresh");
    }
    return (u, l) => {
      var X, $e, He;
      return n(), i("div", {
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
            s.fullscreen ? M("", !0) : (n(), i("div", Bs, [
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
              s.autoRefreshEnabled && s.autoRefreshCountdown !== void 0 ? (n(), i(ue, { key: 0 }, [
                l[13] || (l[13] = e("span", null, "·", -1)),
                e("span", null, t(a(r)("admin.ops.autoRefreshRemaining", { seconds: s.autoRefreshCountdown })), 1)
              ], 64)) : M("", !0)
            ]))
          ]),
          e("div", Ws, [
            s.fullscreen ? M("", !0) : (n(), i(ue, { key: 0 }, [
              U(me, {
                "data-testid": "ops-platform-filter",
                "model-value": y.platform,
                options: f.value,
                class: "w-full sm:w-[140px]",
                "onUpdate:modelValue": ee
              }, null, 8, ["model-value", "options"]),
              U(me, {
                "model-value": y.groupId,
                options: oe.value,
                class: "w-full sm:w-[160px]",
                "onUpdate:modelValue": Z
              }, null, 8, ["model-value", "options"]),
              l[15] || (l[15] = e("div", { class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block" }, null, -1)),
              U(me, {
                "model-value": y.timeRange,
                options: J.value,
                class: "relative w-full sm:w-[150px]",
                "onUpdate:modelValue": Y
              }, null, 8, ["model-value", "options"])
            ], 64)),
            M("", !0),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 2,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
              disabled: y.loading,
              title: a(r)("common.refresh"),
              onClick: hs
            }, [
              (n(), i("svg", {
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
            s.fullscreen ? M("", !0) : (n(), i("div", Js)),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 4,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-blue-100 px-3 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",
              title: a(r)("admin.ops.alertRules.title"),
              onClick: l[0] || (l[0] = (se) => h("openAlertRules"))
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
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 5,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-gray-100 px-3 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.settings.title"),
              onClick: l[1] || (l[1] = (se) => h("openSettings"))
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
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 6,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.fullscreen.enter"),
              onClick: l[2] || (l[2] = (se) => h("enterFullscreen"))
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
        k.value ? (n(), i("div", sa, [
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
                      (n(!0), i(ue, null, pe(Ot.value, (se, Ke) => (n(), i("div", {
                        key: Ke,
                        class: "flex gap-3"
                      }, [
                        e("div", da, [
                          se.type === "critical" ? (n(), i("svg", ua, [...l[20] || (l[20] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : se.type === "warning" ? (n(), i("svg", ca, [...l[21] || (l[21] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : (n(), i("svg", pa, [...l[22] || (l[22] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 100 2 1 1 0 000-2zm-1 3a1 1 0 012 0v4a1 1 0 11-2 0v-4z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])]))
                        ]),
                        e("div", ma, [
                          e("div", ga, t(se.message), 1),
                          e("div", va, t(se.impact), 1),
                          se.action ? (n(), i("div", _a, [
                            U(Ve, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            H(" " + t(se.action), 1)
                          ])) : M("", !0)
                        ])
                      ]))), 128))
                    ]),
                    e("div", xa, t(a(r)("admin.ops.diagnosis.footer")), 1)
                  ])
                ]),
                e("div", fa, [
                  (n(), i("svg", {
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
                s.fullscreen ? M("", !0) : (n(), i("div", wa, [
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
                    s.fullscreen ? M("", !0) : (n(), de(fe, {
                      key: 0,
                      content: a(r)("admin.ops.tooltips.qps")
                    }, null, 8, ["content"]))
                  ]),
                  e("div", Da, [
                    (n(!0), i(ue, null, pe(b.value, (se) => (n(), i("button", {
                      key: se,
                      type: "button",
                      class: Q(["rounded px-1.5 py-0.5 text-[9px] font-bold transition-colors sm:px-2 sm:text-[10px]", E.value === se ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600"]),
                      onClick: (Ke) => E.value = se
                    }, t(se), 11, Ea))), 128))
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
                        }, t(le.value.toFixed(1)), 3),
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
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.totalRequests")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[3] || (l[3] = (se) => d({ title: a(r)("admin.ops.requestDetails.title") }))
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
                  e("span", ir, t(I.value), 1)
                ])
              ])
            ]),
            e("div", dr, [
              e("div", ur, [
                e("div", cr, [
                  e("span", pr, t(a(r)("admin.ops.sla")), 1),
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.sla")
                  }, null, 8, ["content"])),
                  e("span", {
                    class: Q(["h-1.5 w-1.5 rounded-full", F(z.value) === "critical" ? "bg-red-500" : F(z.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[4] || (l[4] = (se) => d({ title: a(r)("admin.ops.requestDetails.title"), kind: "error" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(F(z.value))])
              }, t(z.value == null ? "-" : `${z.value.toFixed(3)}%`), 3),
              e("div", mr, [
                e("div", {
                  class: Q(["h-full transition-all", F(z.value) === "critical" ? "bg-red-500" : F(z.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"]),
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
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.latency")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[5] || (l[5] = (se) => d({ title: a(r)("admin.ops.latencyDuration"), sort: "duration_desc" }))
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
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.ttft")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[6] || (l[6] = (se) => d({ title: a(r)("admin.ops.ttftLabel"), sort: "duration_desc" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", Or, [
                e("div", {
                  class: Q(["text-3xl font-black", W(D(je.value))])
                }, t(je.value ?? "-"), 3),
                l[39] || (l[39] = e("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              e("div", Ir, [
                e("div", jr, [
                  l[40] || (l[40] = e("span", { class: "text-gray-500" }, "P95:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(D(Fe.value))])
                  }, t(Fe.value ?? "-"), 3),
                  l[41] || (l[41] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Pr, [
                  l[42] || (l[42] = e("span", { class: "text-gray-500" }, "P90:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(D(rt.value))])
                  }, t(rt.value ?? "-"), 3),
                  l[43] || (l[43] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Ur, [
                  l[44] || (l[44] = e("span", { class: "text-gray-500" }, "P50:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(D(ot.value))])
                  }, t(ot.value ?? "-"), 3),
                  l[45] || (l[45] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Nr, [
                  l[46] || (l[46] = e("span", { class: "text-gray-500" }, "Avg:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(D(Pe.value))])
                  }, t(Pe.value ?? "-"), 3),
                  l[47] || (l[47] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Hr, [
                  l[48] || (l[48] = e("span", { class: "text-gray-500" }, "Max:", -1)),
                  e("span", {
                    class: Q(["font-bold", W(D(Xe.value))])
                  }, t(Xe.value ?? "-"), 3),
                  l[49] || (l[49] = e("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            e("div", Br, [
              e("div", Gr, [
                e("div", Qr, [
                  e("span", Wr, t(a(r)("admin.ops.requestErrors")), 1),
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.errors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[7] || (l[7] = (se) => j("request"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(R(te.value))])
              }, t(te.value == null ? "-" : `${te.value.toFixed(2)}%`), 3),
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
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.upstreamErrors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[8] || (l[8] = (se) => j("upstream"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-2 text-3xl font-black", W(O(ne.value))])
              }, t(ne.value == null ? "-" : `${ne.value.toFixed(2)}%`), 3),
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
        k.value ? (n(), i("div", mo, [
          e("div", go, [
            e("div", vo, [
              e("div", _o, [
                l[51] || (l[51] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "CPU", -1)),
                s.fullscreen ? M("", !0) : (n(), de(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.cpu")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", It.value])
              }, t(yt.value == null ? "-" : `${yt.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", xo, t(a(r)("common.warning")) + " 80% · " + t(a(r)("common.critical")) + " 95% ", 1))
            ]),
            e("div", fo, [
              e("div", yo, [
                e("div", ho, t(a(r)("admin.ops.memory")), 1),
                s.fullscreen ? M("", !0) : (n(), de(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.memory")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", jt.value])
              }, t(ht.value == null ? "-" : `${ht.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", bo, t(((X = C.value) == null ? void 0 : X.memory_used_mb) == null || (($e = C.value) == null ? void 0 : $e.memory_total_mb) == null ? "-" : `${a(as)(C.value.memory_used_mb)} / ${a(as)(C.value.memory_total_mb)}`), 1))
            ]),
            e("div", ko, [
              e("div", wo, [
                e("div", $o, t(a(r)("admin.ops.db")), 1),
                s.fullscreen ? M("", !0) : (n(), de(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.db")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", Ut.value])
              }, t(Pt.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Co, [
                H(t(a(r)("admin.ops.conns")) + " " + t(bt.value ?? "-") + " / " + t(dt.value ?? "-") + " · " + t(a(r)("admin.ops.active")) + " " + t(it.value ?? "-") + " · " + t(a(r)("admin.ops.idle")) + " " + t(Ue.value ?? "-") + " ", 1),
                qt.value != null ? (n(), i("span", So, " · " + t(a(r)("admin.ops.waiting")) + " " + t(qt.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", Ro, [
              e("div", To, [
                l[52] || (l[52] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "Redis", -1)),
                s.fullscreen ? M("", !0) : (n(), de(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.redis")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", w.value])
              }, t(zt.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Do, [
                H(t(a(r)("admin.ops.conns")) + " " + t(tt.value ?? "-") + " / " + t(ct.value ?? "-") + " ", 1),
                Lt.value != null ? (n(), i("span", Eo, " · " + t(a(r)("admin.ops.active")) + " " + t(Lt.value), 1)) : M("", !0),
                ut.value != null ? (n(), i("span", qo, " · " + t(a(r)("admin.ops.idle")) + " " + t(ut.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", Lo, [
              e("div", zo, [
                e("div", Mo, t(a(r)("admin.ops.goroutines")), 1),
                s.fullscreen ? M("", !0) : (n(), de(fe, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.goroutines")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", Ye.value])
              }, t(Ne.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Ao, [
                H(t(a(r)("admin.ops.current")) + " ", 1),
                e("span", Vo, t(P.value ?? "-"), 1),
                H(" · " + t(a(r)("common.warning")) + " ", 1),
                e("span", { class: "font-mono" }, t(rs)),
                H(" · " + t(a(r)("common.critical")) + " ", 1),
                e("span", { class: "font-mono" }, t(os)),
                ((He = C.value) == null ? void 0 : He.concurrency_queue_depth) != null ? (n(), i("span", Fo, [
                  H(" · " + t(a(r)("admin.ops.queue")) + " ", 1),
                  e("span", Oo, t(C.value.concurrency_queue_depth), 1)
                ])) : M("", !0)
              ]))
            ]),
            e("div", Io, [
              e("div", jo, [
                e("div", Po, [
                  e("div", Uo, t(a(r)("admin.ops.jobs")), 1),
                  s.fullscreen ? M("", !0) : (n(), de(fe, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.jobs")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: ys
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: Q(["mt-1 text-lg font-black", fs.value])
              }, t(xs.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", No, [
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
          onClose: l[9] || (l[9] = (se) => Nt.value = !1)
        }, {
          default: ve(() => [
            Ae.value.length ? (n(), i("div", Qo, [
              (n(!0), i(ue, null, pe(Ae.value, (se) => (n(), i("div", {
                key: se.job_name,
                class: "rounded-xl border border-gray-100 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
              }, [
                e("div", Wo, [
                  e("div", Ko, t(se.job_name), 1),
                  e("div", Jo, [
                    se.last_duration_ms != null ? (n(), i("span", Zo, t(se.last_duration_ms) + "ms", 1)) : M("", !0),
                    e("span", null, t(ft(se.updated_at)), 1)
                  ])
                ]),
                e("div", Yo, [
                  e("div", null, [
                    H(t(a(r)("admin.ops.lastSuccess")) + " ", 1),
                    e("span", Xo, t(ft(se.last_success_at)), 1)
                  ]),
                  e("div", null, [
                    H(t(a(r)("admin.ops.lastError")) + " ", 1),
                    e("span", en, t(ft(se.last_error_at)), 1)
                  ]),
                  e("div", null, [
                    H(t(a(r)("admin.ops.result")) + " ", 1),
                    e("span", tn, t(se.last_result || "-"), 1)
                  ])
                ]),
                se.last_error ? (n(), i("div", sn, t(se.last_error), 1)) : M("", !0)
              ]))), 128))
            ])) : (n(), i("div", Go, t(a(r)("admin.ops.noData")), 1))
          ]),
          _: 1
        }, 8, ["show", "title"]),
        U(Je, {
          show: B.value,
          title: a(r)("admin.ops.timeRange.custom"),
          width: "narrow",
          onClose: c
        }, {
          default: ve(() => [
            e("div", an, [
              e("div", null, [
                e("label", rn, t(a(r)("admin.ops.customTimeRange.startTime")), 1),
                re(e("input", {
                  "onUpdate:modelValue": l[10] || (l[10] = (se) => A.value = se),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [ie, A.value]
                ])
              ]),
              e("div", null, [
                e("label", on, t(a(r)("admin.ops.customTimeRange.endTime")), 1),
                re(e("input", {
                  "onUpdate:modelValue": l[11] || (l[11] = (se) => p.value = se),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [ie, p.value]
                ])
              ]),
              e("div", nn, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: c
                }, t(a(r)("common.cancel")), 1),
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600",
                  onClick: q
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
    return (s, h) => (n(), i("div", dn, [
      e("div", {
        class: Q(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", un, [
          h[1] || (h[1] = e("div", { class: "space-y-2" }, [
            e("div", { class: "h-6 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
            e("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
          ], -1)),
          o.fullscreen ? M("", !0) : (n(), i("div", cn, [...h[0] || (h[0] = [
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
                  (n(), i(ue, null, pe(4, (r) => e("div", {
                    key: r,
                    class: "h-14 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70"
                  })), 64))
                ])
              ])
            ])
          ]),
          e("div", xn, [
            e("div", fn, [
              (n(), i(ue, null, pe(6, (r) => e("div", {
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
        (n(), i(ue, null, pe(3, (r) => e("div", {
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
          o.fullscreen ? M("", !0) : (n(), i("div", kn, [...h[8] || (h[8] = [
            e("div", { class: "h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))
        ]),
        e("div", wn, [
          (n(), i(ue, null, pe(6, (r) => e("div", {
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
    const o = y, { t: s } = ye(), h = S(!1), r = S(""), V = S(null), E = S(null), k = S(null), C = S(!1), g = x(() => {
      var q, c;
      return (((q = V.value) == null ? void 0 : q.enabled) ?? !0) && (((c = E.value) == null ? void 0 : c.enabled) ?? !0);
    });
    function v(q) {
      return typeof q == "number" && Number.isFinite(q) ? q : 0;
    }
    const b = x(() => C.value ? "user" : typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? "account" : o.platformFilter ? "group" : "platform"), B = x(() => {
      var j, F;
      const q = ((j = V.value) == null ? void 0 : j.platform) || {}, c = ((F = E.value) == null ? void 0 : F.platform) || {}, d = /* @__PURE__ */ new Set([...Object.keys(q), ...Object.keys(c)]);
      return Array.from(d).map((D) => {
        const R = q[D] || {}, O = c[D] || {}, W = v(O.total_accounts), ce = v(O.available_count), he = v(R.max_capacity), _e = v(R.current_in_use);
        return {
          key: D,
          name: D.toUpperCase(),
          total_accounts: W,
          available_accounts: ce,
          rate_limited_accounts: v(O.rate_limit_count),
          error_accounts: v(O.error_count),
          total_concurrency: he,
          used_concurrency: _e,
          waiting_in_queue: v(R.waiting_in_queue),
          availability_percentage: W > 0 ? Math.round(ce / W * 100) : 0,
          concurrency_percentage: he > 0 ? Math.round(_e / he * 100) : 0
        };
      }).sort((D, R) => R.concurrency_percentage - D.concurrency_percentage);
    }), A = x(() => {
      var F, D;
      const q = ((F = V.value) == null ? void 0 : F.group) || {}, c = ((D = E.value) == null ? void 0 : D.group) || {}, d = /* @__PURE__ */ new Set([...Object.keys(q), ...Object.keys(c)]);
      return Array.from(d).map((R) => {
        const O = q[R] || {}, W = c[R] || {};
        if (o.platformFilter && O.platform !== o.platformFilter && W.platform !== o.platformFilter)
          return null;
        const ce = v(W.total_accounts), he = v(W.available_count), _e = v(O.max_capacity), N = v(O.current_in_use);
        return {
          key: R,
          name: String(O.group_name || W.group_name || `Group ${R}`),
          platform: String(O.platform || W.platform || ""),
          total_accounts: ce,
          available_accounts: he,
          rate_limited_accounts: v(W.rate_limit_count),
          error_accounts: v(W.error_count),
          total_concurrency: _e,
          used_concurrency: N,
          waiting_in_queue: v(O.waiting_in_queue),
          availability_percentage: ce > 0 ? Math.round(he / ce * 100) : 0,
          concurrency_percentage: _e > 0 ? Math.round(N / _e * 100) : 0
        };
      }).filter((R) => R !== null).sort((R, O) => O.concurrency_percentage - R.concurrency_percentage);
    }), p = x(() => {
      var F, D;
      const q = ((F = V.value) == null ? void 0 : F.account) || {}, c = ((D = E.value) == null ? void 0 : D.account) || {}, d = /* @__PURE__ */ new Set([...Object.keys(q), ...Object.keys(c)]);
      return Array.from(d).map((R) => {
        const O = q[R] || {}, W = c[R] || {};
        return typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 && O.group_id !== o.groupIdFilter && W.group_id !== o.groupIdFilter ? null : {
          key: R,
          name: String(O.account_name || W.account_name || `Account ${R}`),
          platform: String(O.platform || W.platform || ""),
          group_name: String(O.group_name || W.group_name || ""),
          current_in_use: v(O.current_in_use),
          max_capacity: v(O.max_capacity),
          waiting_in_queue: v(O.waiting_in_queue),
          load_percentage: v(O.load_percentage),
          is_available: W.is_available || !1,
          is_rate_limited: W.is_rate_limited || !1,
          rate_limit_remaining_sec: W.rate_limit_remaining_sec,
          is_overloaded: W.is_overloaded || !1,
          overload_remaining_sec: W.overload_remaining_sec,
          has_error: W.has_error || !1,
          error_message: W.error_message || ""
        };
      }).filter((R) => R !== null).sort((R, O) => R.has_error !== O.has_error ? R.has_error ? -1 : 1 : R.is_rate_limited !== O.is_rate_limited ? R.is_rate_limited ? -1 : 1 : O.load_percentage - R.load_percentage);
    }), $ = x(() => {
      var c;
      const q = ((c = k.value) == null ? void 0 : c.user) || {};
      return Object.keys(q).map((d) => {
        const j = q[d] || {};
        return {
          key: d,
          user_id: v(j.user_id),
          user_email: j.user_email || `User ${d}`,
          username: j.username || "",
          current_in_use: v(j.current_in_use),
          max_capacity: v(j.max_capacity),
          waiting_in_queue: v(j.waiting_in_queue),
          load_percentage: v(j.load_percentage)
        };
      }).sort((d, j) => j.current_in_use - d.current_in_use || j.load_percentage - d.load_percentage);
    }), T = x(() => b.value === "user" ? $.value : b.value === "account" ? p.value : b.value === "group" ? A.value : B.value), f = x(() => b.value === "user" ? s("admin.ops.concurrency.byUser") : b.value === "account" ? s("admin.ops.concurrency.byAccount") : b.value === "group" ? s("admin.ops.concurrency.byGroup") : s("admin.ops.concurrency.byPlatform"));
    async function J() {
      var q, c;
      h.value = !0, r.value = "";
      try {
        if (C.value) {
          const d = await ae.getUserConcurrencyStats();
          k.value = d;
        } else {
          const [d, j] = await Promise.all([
            ae.getConcurrencyStats(o.platformFilter, o.groupIdFilter),
            ae.getAccountAvailabilityStats(o.platformFilter, o.groupIdFilter)
          ]);
          V.value = d, E.value = j;
        }
      } catch (d) {
        console.error("[OpsConcurrencyCard] Failed to load data", d), r.value = ((c = (q = d == null ? void 0 : d.response) == null ? void 0 : q.data) == null ? void 0 : c.detail) || s("admin.ops.concurrency.loadFailed");
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
      () => C.value,
      () => {
        J();
      }
    );
    function oe(q) {
      return q >= 90 ? "bg-red-500 dark:bg-red-600" : q >= 70 || q >= 50 ? "bg-zo-alert-500 dark:bg-zo-alert-600" : "bg-zo-signal-500 dark:bg-zo-signal-600";
    }
    function ee(q) {
      return `width: ${Math.min(100, Math.max(0, q))}%`;
    }
    function Z(q) {
      return q >= 90 ? "text-red-600 dark:text-red-400" : q >= 70 || q >= 50 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }
    function Y(q) {
      if (q <= 0) return "0s";
      if (q < 60) return `${Math.round(q)}s`;
      const c = Math.floor(q / 60);
      return c < 60 ? `${c}m` : `${Math.floor(c / 60)}h`;
    }
    return ge(
      () => g.value,
      async (q) => {
        q && await J();
      },
      { immediate: !0 }
    ), (q, c) => (n(), i("div", Cn, [
      e("div", Sn, [
        e("h3", Rn, [
          c[1] || (c[1] = e("svg", {
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
            class: Q(["flex items-center justify-center rounded-lg px-2 py-1 transition-colors", C.value ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-300"]),
            title: C.value ? a(s)("admin.ops.concurrency.switchToPlatform") : a(s)("admin.ops.concurrency.switchToUser"),
            onClick: c[0] || (c[0] = (d) => C.value = !C.value)
          }, [...c[2] || (c[2] = [
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
            (n(), i("svg", {
              class: Q(["h-3 w-3", { "animate-spin": h.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...c[3] || (c[3] = [
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
      r.value ? (n(), i("div", qn, t(r.value), 1)) : M("", !0),
      g.value ? (n(), i("div", zn, [
        e("div", Mn, [
          e("span", An, t(f.value), 1),
          e("span", Vn, t(a(s)("admin.ops.concurrency.totalRows", { count: T.value.length })), 1)
        ]),
        T.value.length === 0 ? (n(), i("div", Fn, t(a(s)("admin.ops.concurrency.empty")), 1)) : b.value === "user" ? (n(), i("div", On, [
          (n(!0), i(ue, null, pe(T.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", In, [
              e("div", jn, [
                e("span", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.username || d.user_email
                }, t(d.username || d.user_email), 9, Pn),
                d.username ? (n(), i("span", {
                  key: 0,
                  class: "shrink-0 truncate text-[10px] text-gray-400 dark:text-gray-500",
                  title: d.user_email
                }, t(d.user_email), 9, Un)) : M("", !0)
              ]),
              e("div", Nn, [
                e("span", Hn, t(d.current_in_use) + "/" + t(d.max_capacity), 1),
                e("span", {
                  class: Q(["font-bold", Z(d.load_percentage)])
                }, t(Math.round(d.load_percentage)) + "% ", 3)
              ])
            ]),
            e("div", Bn, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", oe(d.load_percentage)]),
                style: gt(ee(d.load_percentage))
              }, null, 6)
            ]),
            d.waiting_in_queue > 0 ? (n(), i("div", Gn, [
              e("span", Qn, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ])) : b.value === "platform" || b.value === "group" ? (n(), i("div", Wn, [
          (n(!0), i(ue, null, pe(T.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-3 dark:bg-dark-900"
          }, [
            e("div", Kn, [
              e("div", Jn, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.name
                }, t(d.name), 9, Zn),
                b.value === "group" && d.platform ? (n(), i("span", Yn, t(d.platform.toUpperCase()), 1)) : M("", !0)
              ]),
              e("div", Xn, [
                e("span", el, t(d.used_concurrency) + "/" + t(d.total_concurrency), 1),
                e("span", {
                  class: Q(["font-bold", Z(d.concurrency_percentage)])
                }, t(d.concurrency_percentage) + "% ", 3)
              ])
            ]),
            e("div", tl, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", oe(d.concurrency_percentage)]),
                style: gt(ee(d.concurrency_percentage))
              }, null, 6)
            ]),
            e("div", sl, [
              e("div", al, [
                c[4] || (c[4] = e("svg", {
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
                  e("span", ol, t(d.available_accounts), 1),
                  H("/" + t(d.total_accounts), 1)
                ]),
                e("span", nl, t(d.availability_percentage) + "%", 1)
              ]),
              d.rate_limited_accounts > 0 ? (n(), i("span", ll, t(a(s)("admin.ops.concurrency.rateLimited", { count: d.rate_limited_accounts })), 1)) : M("", !0),
              d.error_accounts > 0 ? (n(), i("span", il, t(a(s)("admin.ops.concurrency.errorAccounts", { count: d.error_accounts })), 1)) : M("", !0),
              d.waiting_in_queue > 0 ? (n(), i("span", dl, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)) : M("", !0)
            ])
          ]))), 128))
        ])) : (n(), i("div", ul, [
          (n(!0), i(ue, null, pe(T.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", cl, [
              e("div", pl, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.name
                }, t(d.name), 9, ml),
                e("div", gl, t(d.group_name), 1)
              ]),
              e("div", vl, [
                e("span", _l, t(d.current_in_use) + "/" + t(d.max_capacity), 1),
                d.is_available ? (n(), i("span", xl, [
                  c[5] || (c[5] = e("svg", {
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
                ])) : d.is_rate_limited ? (n(), i("span", fl, [
                  c[6] || (c[6] = e("svg", {
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
                  H(" " + t(Y(d.rate_limit_remaining_sec || 0)), 1)
                ])) : d.is_overloaded ? (n(), i("span", yl, [
                  c[7] || (c[7] = e("svg", {
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
                  H(" " + t(Y(d.overload_remaining_sec || 0)), 1)
                ])) : d.has_error ? (n(), i("span", hl, [
                  c[8] || (c[8] = e("svg", {
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
                ])) : (n(), i("span", bl, t(a(s)("admin.ops.accountAvailability.unavailable")), 1))
              ])
            ]),
            e("div", kl, [
              e("div", {
                class: Q(["h-full rounded-full transition-all duration-300", oe(d.load_percentage)]),
                style: gt(ee(d.load_percentage))
              }, null, 6)
            ]),
            d.waiting_in_queue > 0 ? (n(), i("div", wl, [
              e("span", $l, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ]))
      ])) : (n(), i("div", Ln, t(a(s)("admin.ops.concurrency.disabledHint")), 1))
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
    const r = typeof h.type == "string" ? h.type.trim() : "", V = typeof h.message == "string" ? h.message.trim() : "";
    return !r && !V ? null : { type: r, message: V };
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
    const s = y, h = o, { t: r } = ye(), V = st(), E = S(!1), k = S(null), C = x(() => s.errorType === "request"), g = x(() => {
      var D, R;
      return ((D = k.value) == null ? void 0 : D.request_id) || ((R = k.value) == null ? void 0 : R.client_request_id) || "";
    }), v = x(() => El(k.value, s.errorType)), b = x(() => s.errorId ? r("admin.ops.errorDetail.titleWithId", { id: String(s.errorId) }) : r("admin.ops.errorDetail.title")), B = x(() => r("admin.ops.errorDetail.noErrorSelected"));
    function A(D) {
      if (!D) return !1;
      const R = String(D.phase || "").toLowerCase(), O = String(D.error_owner || "").toLowerCase();
      return R === "upstream" && O === "provider";
    }
    function p(D) {
      switch (D) {
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
    function $(D) {
      if (!D) return !1;
      const R = String(D.requested_model || "").trim(), O = String(D.upstream_model || "").trim();
      return !!R && !!O && R !== O;
    }
    function T(D) {
      if (!D) return "";
      const R = String(D.upstream_model || "").trim();
      if (R) return R;
      const O = String(D.requested_model || "").trim();
      return O || String(D.model || "").trim();
    }
    const f = S([]), J = S(!1), oe = x(() => f.value), ee = S(/* @__PURE__ */ new Set());
    function Z(D) {
      const R = us(D);
      return R || String(D.error_body || "").trim();
    }
    function Y(D) {
      const R = new Set(ee.value);
      R.has(D) ? R.delete(D) : R.add(D), ee.value = R;
    }
    async function q(D) {
      J.value = !0;
      try {
        const R = await ae.listRequestErrorUpstreamErrors(
          D,
          { page: 1, page_size: 100, view: "all" },
          { include_detail: !0 }
        );
        f.value = R.items || [];
      } catch (R) {
        console.error("[OpsErrorDetailModal] Failed to load correlated upstream errors", R), f.value = [];
      } finally {
        J.value = !1;
      }
    }
    function c() {
      h("update:show", !1);
    }
    function d(D) {
      if (!D) return "N/A";
      try {
        return JSON.stringify(JSON.parse(D), null, 2);
      } catch {
        return D;
      }
    }
    async function j(D) {
      var R;
      E.value = !0;
      try {
        const W = (s.errorType || (((R = k.value) == null ? void 0 : R.phase) === "upstream" ? "upstream" : "request")) === "upstream" ? await ae.getUpstreamErrorDetail(D) : await ae.getRequestErrorDetail(D);
        k.value = W;
      } catch (O) {
        k.value = null, V.showError((O == null ? void 0 : O.message) || r("admin.ops.failedToLoadErrorDetail"));
      } finally {
        E.value = !1;
      }
    }
    ge(
      () => [s.show, s.errorId],
      ([D, R]) => {
        if (!D) {
          k.value = null;
          return;
        }
        typeof R == "number" && R > 0 && (ee.value = /* @__PURE__ */ new Set(), j(R), s.errorType === "request" ? q(R) : f.value = []);
      },
      { immediate: !0 }
    );
    const F = x(() => {
      var R;
      const D = ((R = k.value) == null ? void 0 : R.status_code) ?? 0;
      return D >= 500 ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30" : D === 429 ? "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-500/30" : D >= 400 ? "bg-zo-alert-50 text-zo-alert-700 ring-zo-alert-600/20 dark:bg-zo-alert-900/30 dark:text-zo-alert-400 dark:ring-zo-alert-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-400 dark:ring-gray-500/30";
    });
    return (D, R) => (n(), de(Je, {
      show: y.show,
      title: b.value,
      width: "full",
      "close-on-click-outside": !0,
      onClose: c
    }, {
      default: ve(() => [
        E.value ? (n(), i("div", ql, [
          e("div", Ll, [
            R[0] || (R[0] = e("div", { class: "h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
            e("div", zl, t(a(r)("admin.ops.errorDetail.loading")), 1)
          ])
        ])) : k.value ? (n(), i("div", Al, [
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
              e("div", Hl, t(A(k.value) ? a(r)("admin.ops.errorDetail.account") : a(r)("admin.ops.errorDetail.user")), 1),
              e("div", Bl, [
                A(k.value) ? (n(), i(ue, { key: 0 }, [
                  H(t(k.value.account_name || (k.value.account_id != null ? String(k.value.account_id) : "—")), 1)
                ], 64)) : (n(), i(ue, { key: 1 }, [
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
                $(k.value) ? (n(), i(ue, { key: 0 }, [
                  e("span", ti, t(k.value.requested_model), 1),
                  R[1] || (R[1] = e("span", { class: "mx-1 text-gray-400" }, "→", -1)),
                  e("span", si, t(k.value.upstream_model), 1)
                ], 64)) : (n(), i(ue, { key: 1 }, [
                  H(t(T(k.value) || "—"), 1)
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
                  class: Q(["inline-flex items-center rounded-lg px-2 py-1 text-xs font-black ring-1 ring-inset shadow-sm", F.value])
                }, t(k.value.status_code), 3)
              ])
            ]),
            e("div", pi, [
              e("div", mi, t(a(r)("admin.ops.errorDetail.requestType")), 1),
              e("div", gi, t(p(k.value.request_type)), 1)
            ]),
            e("div", vi, [
              e("div", _i, t(a(r)("admin.ops.errorDetail.message")), 1),
              e("div", {
                class: "mt-1 truncate text-sm font-medium text-gray-900 dark:text-white",
                title: k.value.message
              }, t(k.value.message || "—"), 9, xi)
            ]),
            k.value.api_key_prefix ? (n(), i("div", fi, [
              e("div", yi, t(a(r)("admin.ops.errorDetail.apiKeyPrefix")), 1),
              e("div", hi, t(k.value.api_key_prefix), 1)
            ])) : M("", !0)
          ]),
          e("div", bi, [
            e("h3", ki, t(a(r)("admin.ops.errorDetail.responseBody")), 1),
            e("pre", wi, [
              e("code", null, t(d(v.value || "")), 1)
            ])
          ]),
          C.value ? (n(), i("div", $i, [
            e("div", Ci, [
              e("h3", Si, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 1),
              J.value ? (n(), i("div", Ri, t(a(r)("common.loading")), 1)) : M("", !0)
            ]),
            !J.value && !oe.value.length ? (n(), i("div", Ti, t(a(r)("common.noData")), 1)) : (n(), i("div", Di, [
              (n(!0), i(ue, null, pe(oe.value, (O, W) => (n(), i("div", {
                key: O.id,
                class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
              }, [
                e("div", Ei, [
                  e("div", qi, [
                    H(" #" + t(W + 1) + " ", 1),
                    O.type ? (n(), i("span", Li, t(O.type), 1)) : M("", !0)
                  ]),
                  e("div", zi, [
                    e("div", Mi, t(O.status_code ?? "—"), 1),
                    e("button", {
                      type: "button",
                      class: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-bold text-primary-700 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-60 dark:text-primary-200 dark:hover:bg-dark-700",
                      disabled: !Z(O),
                      title: Z(O) ? "" : a(r)("common.noData"),
                      onClick: (ce) => Y(O.id)
                    }, [
                      U(Ve, {
                        name: ee.value.has(O.id) ? "chevronDown" : "chevronRight",
                        size: "xs",
                        "stroke-width": 2
                      }, null, 8, ["name"]),
                      e("span", null, t(ee.value.has(O.id) ? a(r)("admin.ops.errorDetail.responsePreview.collapse") : a(r)("admin.ops.errorDetail.responsePreview.expand")), 1)
                    ], 8, Ai)
                  ])
                ]),
                e("div", Vi, [
                  e("div", null, [
                    e("span", Fi, t(a(r)("admin.ops.errorDetail.upstreamEvent.status")) + ":", 1),
                    e("span", Oi, t(O.status_code ?? "—"), 1)
                  ]),
                  e("div", null, [
                    e("span", Ii, t(a(r)("admin.ops.errorDetail.upstreamEvent.requestId")) + ":", 1),
                    e("span", ji, t(O.request_id || O.client_request_id || "—"), 1)
                  ])
                ]),
                O.message ? (n(), i("div", Pi, t(O.message), 1)) : M("", !0),
                ee.value.has(O.id) ? (n(), i("pre", Ui, [
                  e("code", null, t(d(Z(O))), 1)
                ])) : M("", !0)
              ]))), 128))
            ]))
          ])) : M("", !0)
        ])) : (n(), i("div", Ml, t(B.value), 1))
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
    const s = y, h = o, { t: r } = ye(), V = x(() => document.documentElement.classList.contains("dark")), E = x(() => ({
      blue: "#3b82f6",
      red: "#ef4444",
      orange: "#fb7185",
      gray: "#9ca3af",
      text: V.value ? "#9ca3af" : "#6b7280"
    })), k = x(
      () => {
        var p;
        return (((p = s.data) == null ? void 0 : p.items) ?? []).reduce(($, T) => $ + Number(T.sla || 0), 0);
      }
    ), C = x(() => k.value > 0), g = x(() => C.value ? "ready" : s.loading ? "loading" : "empty"), v = x(() => {
      if (!s.data) return [];
      let p = 0, $ = 0, T = 0, f = 0;
      for (const oe of s.data.items || []) {
        const ee = Number(oe.status_code || 0), Z = Number(oe.sla || 0);
        !Number.isFinite(ee) || !Number.isFinite(Z) || ([502, 503, 504].includes(ee) ? p += Z : ee >= 400 && ee < 500 ? $ += Z : ee === 500 ? T += Z : f += Z);
      }
      const J = [];
      return p > 0 && J.push({ label: r("admin.ops.upstream"), count: p, color: E.value.orange }), $ > 0 && J.push({ label: r("admin.ops.client"), count: $, color: E.value.blue }), T > 0 && J.push({ label: r("admin.ops.system"), count: T, color: E.value.red }), f > 0 && J.push({ label: r("admin.ops.other"), count: f, color: E.value.gray }), J;
    }), b = x(() => v.value.length === 0 ? null : v.value.reduce((p, $) => $.count > p.count ? $ : p)), B = x(() => !C.value || v.value.length === 0 ? null : {
      labels: v.value.map((p) => p.label),
      datasets: [
        {
          data: v.value.map((p) => p.count),
          backgroundColor: v.value.map((p) => p.color),
          borderWidth: 0
        }
      ]
    }), A = x(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: { display: !1 },
        tooltip: {
          backgroundColor: V.value ? "#1f2937" : "#ffffff",
          titleColor: V.value ? "#f3f4f6" : "#111827",
          bodyColor: V.value ? "#d1d5db" : "#4b5563"
        }
      }
    }));
    return (p, $) => (n(), i("div", Hi, [
      e("div", Bi, [
        e("h3", Gi, [
          $[1] || ($[1] = e("svg", {
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
          onClick: $[0] || ($[0] = (T) => h("openDetails"))
        }, t(a(r)("admin.ops.requestDetails.details")), 9, Qi)
      ]),
      e("div", Wi, [
        g.value === "ready" && B.value ? (n(), i("div", Ki, [
          e("div", Ji, [
            U(a(As), {
              data: B.value,
              options: { ...A.value, cutout: "65%" }
            }, null, 8, ["data", "options"])
          ]),
          e("div", Zi, [
            b.value ? (n(), i("div", Yi, [
              H(t(a(r)("admin.ops.top")) + ": ", 1),
              e("span", {
                style: gt({ color: b.value.color })
              }, t(b.value.label), 5)
            ])) : M("", !0),
            e("div", Xi, [
              (n(!0), i(ue, null, pe(v.value, (T) => (n(), i("div", {
                key: T.label,
                class: "flex items-center gap-1.5 text-xs"
              }, [
                e("span", {
                  class: "h-2 w-2 rounded-full",
                  style: gt({ backgroundColor: T.color })
                }, null, 4),
                e("span", ed, t(T.label) + " " + t(T.count), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), i("div", td, [
          g.value === "loading" ? (n(), i("div", sd, t(a(r)("common.loading")), 1)) : (n(), de(at, {
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
    const r = Number(o[1]), V = Number(o[2]);
    return r === 10 || r === 127 || r === 169 && V === 254 || r === 172 && V >= 16 && V <= 31 || r === 192 && V === 168;
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
    const V = Ce.get(r);
    es(V) || (V == null ? void 0 : V.status) === "loading" || s.push(r);
  }
  if (s.length === 0) return !0;
  s.forEach((r) => Ce.set(r, { status: "loading" }));
  let h = !0;
  for (let r = 0; r < s.length; r += ns) {
    const V = s.slice(r, r + ns);
    try {
      const E = await fetch(`${nd}?ip=${V.map(encodeURIComponent).join(",")}`);
      if (!E.ok) {
        V.forEach((g) => Ce.set(g, { status: "error" })), h = !1;
        continue;
      }
      const k = await E.json(), C = new Map(k.map((g) => [g.ip, g]));
      V.forEach((g) => _s(g, C.get(g))), ts();
    } catch {
      V.forEach((E) => Ce.set(E, { status: "error" })), h = !1;
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
      const C = h.value.detail;
      return C ? [
        C.organization ? `${s("usage.ipGeo.detailOrg")}: ${C.organization}` : "",
        C.timezone ? `${s("usage.ipGeo.detailTimezone")}: ${C.timezone}` : "",
        C.accuracy != null ? `${s("usage.ipGeo.detailAccuracy")}: ${C.accuracy}km` : "",
        C.latitude && C.longitude ? `${s("usage.ipGeo.detailCoordinates")}: ${C.latitude}, ${C.longitude}` : ""
      ].filter(Boolean).join(`
`) : "";
    }), V = () => {
      ls(o.ip);
    }, E = () => {
      ls(o.ip, !0);
    }, k = () => {
      window.open(
        `https://www.iplocation.net/ip-lookup?query=${encodeURIComponent(o.ip)}`,
        "_blank",
        "noopener,noreferrer"
      );
    };
    return (C, g) => h.value.status === "idle" ? (n(), i("div", cd, [
      e("button", {
        type: "button",
        class: "text-primary-600 underline decoration-dashed underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
        onClick: V
      }, t(a(s)("usage.ipGeo.fetch")), 1)
    ])) : h.value.status === "loading" ? (n(), i("div", pd, [
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
    ])) : h.value.status === "success" ? (n(), i("div", md, [
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
        onClick: E
      }, [
        U(Ve, {
          name: "refresh",
          size: "xs"
        })
      ], 8, vd)
    ])) : h.value.status === "error" ? (n(), i("div", _d, [
      e("button", {
        type: "button",
        class: "text-red-600 underline decoration-dashed underline-offset-2 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
        onClick: V
      }, t(a(s)("usage.ipGeo.failed")), 1)
    ])) : (n(), i("div", xd, t(a(s)("usage.ipGeo.private")), 1));
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
    const s = y, h = o, { t: r } = ye(), V = x(
      () => Array.from(new Set(s.ips.filter((g) => !!g)))
    ), E = x(
      () => V.value.filter((g) => {
        const v = vs(g).status;
        return v === "idle" || v === "error";
      }).length
    ), k = S(!1), C = async () => {
      k.value = !0;
      try {
        await ud(V.value) || h("failed");
      } finally {
        k.value = !1;
      }
    };
    return (g, v) => V.value.length > 0 ? (n(), i("div", yd, [
      E.value > 0 ? (n(), i("span", hd, t(a(r)("usage.ipGeo.pending", { count: E.value })), 1)) : M("", !0),
      e("button", {
        type: "button",
        class: "inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-400 dark:hover:bg-primary-900/30",
        disabled: k.value || E.value === 0,
        onClick: C
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
    ]), r = x(
      () => v.visibleColumnKeys ? h.value.filter(($) => v.visibleColumnKeys.includes($.key)) : h.value
    );
    function V($) {
      const T = String($.phase || "").toLowerCase(), f = String($.error_owner || "").toLowerCase();
      return T === "upstream" && f === "provider";
    }
    function E($) {
      const T = String($.requested_model || "").trim(), f = String($.upstream_model || "").trim();
      return !!T && !!f && T !== f;
    }
    function k($) {
      const T = String($.upstream_model || "").trim();
      if (T) return T;
      const f = String($.requested_model || "").trim();
      return f || String($.model || "").trim();
    }
    function C($) {
      switch ($) {
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
    function g($) {
      const T = String($.phase || "").toLowerCase(), f = String($.error_owner || "").toLowerCase();
      return V($) ? { label: s("admin.ops.errorLog.typeUpstream"), className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" } : T === "request" && f === "client" ? { label: s("admin.ops.errorLog.typeRequest"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : T === "auth" && f === "client" ? { label: s("admin.ops.errorLog.typeAuth"), className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" } : T === "account_auth" ? { label: s("admin.ops.errorLog.typeAccountAuth"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : T === "routing" && f === "platform" ? { label: s("admin.ops.errorLog.typeRouting"), className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" } : T === "internal" && f === "platform" ? { label: s("admin.ops.errorLog.typeInternal"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" } : { label: T || f || s("common.unknown"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" };
    }
    const v = y, b = o;
    function B($, T) {
      b("sort", Cd($), T);
    }
    const A = $d;
    function p($) {
      var T;
      if (!$) return "";
      if ($.startsWith("{") || $.startsWith("["))
        try {
          const f = JSON.parse($);
          if ((T = f == null ? void 0 : f.error) != null && T.message) return String(f.error.message);
          if (f != null && f.message) return String(f.message);
          if (f != null && f.detail) return String(f.detail);
          if (typeof f == "object") return JSON.stringify(f).substring(0, 150);
        } catch {
        }
      return $.includes("context deadline exceeded") ? s("admin.ops.errorLog.commonErrors.contextDeadlineExceeded") : $.includes("connection refused") ? s("admin.ops.errorLog.commonErrors.connectionRefused") : $.toLowerCase().includes("rate limit") ? s("admin.ops.errorLog.commonErrors.rateLimit") : $.length > 200 ? $.substring(0, 200) + "..." : $;
    }
    return ($, T) => (n(), i("div", Sd, [
      e("div", {
        class: Q(["flex min-h-0 flex-1 flex-col overflow-hidden", y.flat ? "" : "card"])
      }, [
        U(kd, {
          ips: y.rows.map((f) => f.client_ip),
          onFailed: T[0] || (T[0] = (f) => b("ipGeoBatchFailed"))
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
          onRowClick: T[2] || (T[2] = (f) => b("openErrorDetail", f.id))
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
            var J, oe;
            return [
              e("div", Td, [
                e("div", Dd, [
                  e("span", Ed, t(a(s)("usage.inbound")) + ":", 1),
                  e("span", qd, t(((J = f.inbound_endpoint) == null ? void 0 : J.trim()) || "-"), 1)
                ]),
                f.upstream_endpoint ? (n(), i("div", Ld, [
                  e("span", zd, t(a(s)("usage.upstream")) + ":", 1),
                  e("span", Md, t(((oe = f.upstream_endpoint) == null ? void 0 : oe.trim()) || "-"), 1)
                ])) : M("", !0)
              ])
            ];
          }),
          "cell-platform": ve(({ row: f }) => [
            e("span", Ad, t(f.platform || "-"), 1)
          ]),
          "cell-model": ve(({ row: f }) => [
            E(f) ? (n(), i("div", Vd, [
              e("div", Fd, t(f.requested_model), 1),
              e("div", Od, [
                T[5] || (T[5] = e("span", { class: "mr-0.5" }, "↳", -1)),
                H(t(f.upstream_model), 1)
              ])
            ])) : k(f) ? (n(), i("span", Id, t(k(f)), 1)) : (n(), i("span", jd, "-"))
          ]),
          "cell-group": ve(({ row: f }) => [
            f.group_id ? (n(), i("span", {
              key: 0,
              class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
              title: a(s)("admin.ops.errorLog.id") + " " + f.group_id
            }, t(f.group_name || "#" + f.group_id), 9, Pd)) : (n(), i("span", Ud, "-"))
          ]),
          "cell-user": ve(({ row: f }) => [
            f.user_id ? (n(), i("div", Nd, [
              y.userClickable && f.user_email ? (n(), i("button", {
                key: 0,
                class: "font-medium text-primary-600 underline decoration-dashed underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                title: a(s)("admin.usage.clickToViewBalance"),
                onClick: kt((J) => b("userClick", f.user_id, f.user_email), ["stop"])
              }, t(f.user_email), 9, Hd)) : (n(), i("span", Bd, t(f.user_email || "-"), 1)),
              e("span", Gd, "#" + t(f.user_id), 1)
            ])) : (n(), i("span", Qd, "-"))
          ]),
          "cell-api_key": ve(({ row: f }) => [
            f.api_key_id || f.api_key_name ? (n(), i("div", Wd, [
              e("span", Kd, t(f.api_key_name || "#" + f.api_key_id), 1),
              f.api_key_deleted ? (n(), i("span", Jd, t(a(s)("admin.ops.errorLog.keyDeletedBadge")), 1)) : M("", !0)
            ])) : (n(), i("span", Zd, "-"))
          ]),
          "cell-account": ve(({ row: f }) => [
            f.account_id ? (n(), i("span", {
              key: 0,
              class: "text-sm text-gray-900 dark:text-white",
              title: a(s)("admin.ops.errorLog.accountId") + " " + f.account_id
            }, t(f.account_name || "#" + f.account_id), 9, Yd)) : (n(), i("span", Xd, "-"))
          ]),
          "cell-category": ve(({ row: f }) => [
            e("span", eu, t(a(s)("usage.errors.categories." + a(wd)(f.phase, f.type))), 1)
          ]),
          "cell-status": ve(({ row: f }) => [
            e("div", tu, [
              e("span", {
                class: Q(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", a(A)(f.status_code)])
              }, t(f.status_code), 3),
              f.severity ? (n(), i("span", {
                key: 0,
                class: Q(["rounded px-1.5 py-0.5 text-[10px] font-medium", a(Us)(f.severity)])
              }, t(f.severity), 3)) : M("", !0),
              f.request_type != null && f.request_type > 0 ? (n(), i("span", su, t(C(f.request_type)), 1)) : M("", !0)
            ])
          ]),
          "cell-message": ve(({ row: f }) => [
            f.message ? (n(), i("span", {
              key: 0,
              class: "block max-w-[280px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: f.message
            }, t(p(f.message) || "-"), 9, au)) : (n(), i("span", ru, "-"))
          ]),
          "cell-user_agent": ve(({ row: f }) => [
            f.user_agent ? (n(), i("span", {
              key: 0,
              class: "block max-w-[320px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: f.user_agent
            }, t(f.user_agent), 9, ou)) : (n(), i("span", nu, "-"))
          ]),
          "cell-client_ip": ve(({ row: f }) => [
            e("div", {
              onClick: T[1] || (T[1] = kt(() => {
              }, ["stop"]))
            }, [
              f.client_ip ? (n(), i("div", lu, [
                e("span", iu, t(f.client_ip), 1),
                U(fd, {
                  ip: f.client_ip
                }, null, 8, ["ip"])
              ])) : (n(), i("span", du, "-"))
            ])
          ]),
          "cell-actions": ve(({ row: f }) => [
            e("button", {
              type: "button",
              class: "rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-600 dark:hover:text-primary-400",
              title: a(s)("admin.ops.errorLog.details"),
              onClick: kt((J) => b("openErrorDetail", f.id), ["stop"])
            }, [...T[6] || (T[6] = [
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
        y.total > 0 ? (n(), de(Qt, {
          key: 0,
          total: y.total,
          page: y.page,
          "page-size": y.pageSize,
          "onUpdate:page": T[3] || (T[3] = (f) => b("update:page", f)),
          "onUpdate:pageSize": T[4] || (T[4] = (f) => b("update:pageSize", f))
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
    const s = y, h = o, { t: r } = ye(), V = S(!1), E = S([]), k = S(0), C = S(1), g = S(10), v = S(""), b = S(null), B = S(""), A = S(""), p = S("errors"), $ = x(() => s.errorType === "upstream" ? r("admin.ops.errorDetails.upstreamErrors") : r("admin.ops.errorDetails.requestErrors")), T = x(() => {
      const F = [400, 401, 403, 404, 409, 422, 429, 500, 502, 503, 504, 529];
      return [
        { value: null, label: r("common.all") },
        ...F.map((D) => ({ value: D, label: String(D) })),
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
    ]), oe = x(() => [
      { value: "", label: r("common.all") },
      { value: "request", label: r("admin.ops.errorDetails.phase.request") || "request" },
      { value: "auth", label: r("admin.ops.errorDetails.phase.auth") || "auth" },
      { value: "account_auth", label: r("admin.ops.errorDetails.phase.account_auth") || "account_auth" },
      { value: "routing", label: r("admin.ops.errorDetails.phase.routing") || "routing" },
      { value: "upstream", label: r("admin.ops.errorDetails.phase.upstream") || "upstream" },
      { value: "network", label: r("admin.ops.errorDetails.phase.network") || "network" },
      { value: "internal", label: r("admin.ops.errorDetails.phase.internal") || "internal" }
    ]);
    function ee() {
      h("update:show", !1);
    }
    const Z = S("created_at"), Y = S("desc");
    function q(F, D) {
      Z.value = F, Y.value = D, C.value = 1, c();
    }
    async function c() {
      if (s.show) {
        V.value = !0;
        try {
          const F = {
            page: C.value,
            page_size: g.value,
            view: p.value,
            sort_by: Z.value,
            sort_order: Y.value
          };
          Object.assign(F, mu(s.timeRange, s.customStartTime, s.customEndTime)), s.timeRange === "custom" && (s.customStartTime && s.customEndTime ? (F.start_time = s.customStartTime, F.end_time = s.customEndTime, delete F.time_range) : F.time_range = "1h");
          const D = String(s.platform || "").trim();
          D && (F.platform = D), typeof s.groupId == "number" && s.groupId > 0 && (F.group_id = s.groupId), v.value.trim() && (F.q = v.value.trim()), b.value === "other" ? F.status_codes_other = "1" : typeof b.value == "number" && (F.status_codes = String(b.value));
          const R = String(B.value || "").trim();
          R && (F.phase = R);
          const O = String(A.value || "").trim();
          O && (F.error_owner = O);
          const W = s.errorType === "upstream" ? await ae.listUpstreamErrors(F) : await ae.listRequestErrors(F);
          E.value = W.items || [], k.value = W.total || 0;
        } catch (F) {
          console.error("[OpsErrorDetailsModal] Failed to fetch error logs", F), E.value = [], k.value = 0;
        } finally {
          V.value = !1;
        }
      }
    }
    function d() {
      v.value = "", b.value = null, B.value = s.errorType === "upstream" ? "upstream" : "", A.value = "", p.value = "errors", C.value = 1, c();
    }
    ge(
      () => s.show,
      (F) => {
        F && (C.value = 1, g.value = 10, d());
      }
    ), ge(
      () => [s.timeRange, s.customStartTime, s.customEndTime, s.platform, s.groupId],
      () => {
        s.show && (C.value = 1, c());
      }
    ), ge(
      () => [C.value, g.value],
      () => {
        s.show && c();
      }
    );
    let j = null;
    return ge(
      () => v.value,
      () => {
        s.show && (j && window.clearTimeout(j), j = window.setTimeout(() => {
          C.value = 1, c();
        }, 350));
      }
    ), ge(
      () => [b.value, B.value, A.value, p.value],
      () => {
        s.show && (C.value = 1, c());
      }
    ), (F, D) => (n(), de(Je, {
      show: y.show,
      title: $.value,
      width: "full",
      onClose: ee
    }, {
      default: ve(() => [
        e("div", gu, [
          e("div", vu, [
            e("div", _u, [
              e("div", xu, [
                e("div", fu, [
                  D[8] || (D[8] = e("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
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
                    "onUpdate:modelValue": D[0] || (D[0] = (R) => v.value = R),
                    type: "text",
                    class: "w-full rounded-lg border-gray-200 bg-gray-50/50 py-1.5 pl-9 pr-3 text-xs font-medium text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:focus:bg-dark-800",
                    placeholder: a(r)("admin.ops.errorDetails.searchPlaceholder")
                  }, null, 8, yu), [
                    [ie, v.value]
                  ])
                ])
              ]),
              e("div", hu, [
                U(me, {
                  "model-value": b.value,
                  options: T.value,
                  "onUpdate:modelValue": D[1] || (D[1] = (R) => b.value = R)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", bu, [
                U(me, {
                  "model-value": B.value,
                  options: oe.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (R) => B.value = String(R ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", ku, [
                U(me, {
                  "model-value": A.value,
                  options: f.value,
                  "onUpdate:modelValue": D[3] || (D[3] = (R) => A.value = String(R ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", wu, [
                U(me, {
                  "model-value": p.value,
                  options: J.value,
                  "onUpdate:modelValue": D[4] || (D[4] = (R) => p.value = R)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", $u, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: d
                }, t(a(r)("common.reset")), 1)
              ])
            ])
          ]),
          e("div", Cu, [
            e("div", Su, t(a(r)("admin.ops.errorDetails.total")) + " " + t(k.value), 1),
            U(pu, {
              class: "min-h-0 flex-1",
              rows: E.value,
              total: k.value,
              loading: V.value,
              page: C.value,
              "page-size": g.value,
              onOpenErrorDetail: D[5] || (D[5] = (R) => h("openErrorDetail", R)),
              onSort: q,
              "onUpdate:page": D[6] || (D[6] = (R) => C.value = R),
              "onUpdate:pageSize": D[7] || (D[7] = (R) => g.value = R)
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
    const s = y, h = o, { t: r } = ye(), V = x(() => document.documentElement.classList.contains("dark")), E = x(() => ({
      red: "#ef4444",
      redAlpha: "#ef444420",
      purple: "#8b5cf6",
      purpleAlpha: "#8b5cf620",
      gray: "#9ca3af",
      grid: V.value ? "#374151" : "#f3f4f6",
      text: V.value ? "#9ca3af" : "#6b7280"
    })), k = x(() => $t(s.points.map(($) => $.error_count_sla ?? 0))), C = x(
      () => $t(
        s.points.map(($) => ($.upstream_error_count_excl_429_529 ?? 0) + ($.upstream_429_count ?? 0) + ($.upstream_529_count ?? 0))
      )
    ), g = x(
      () => $t(s.points.map(($) => ($.error_count_sla ?? 0) + ($.upstream_error_count_excl_429_529 ?? 0) + ($.business_limited_count ?? 0)))
    ), v = x(() => k.value > 0), b = x(() => C.value > 0), B = x(() => !s.points.length || g.value <= 0 ? null : {
      labels: s.points.map(($) => Xt($.bucket_start, s.timeRange)),
      datasets: [
        {
          label: r("admin.ops.errorsSla"),
          data: s.points.map(($) => $.error_count_sla ?? 0),
          borderColor: E.value.red,
          backgroundColor: E.value.redAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.upstreamExcl429529"),
          data: s.points.map(($) => $.upstream_error_count_excl_429_529 ?? 0),
          borderColor: E.value.purple,
          backgroundColor: E.value.purpleAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.businessLimited"),
          data: s.points.map(($) => $.business_limited_count ?? 0),
          borderColor: E.value.gray,
          backgroundColor: "transparent",
          borderDash: [6, 6],
          fill: !1,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), A = x(() => B.value ? "ready" : s.loading ? "loading" : "empty"), p = x(() => {
      const $ = E.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: $.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: V.value ? "#1f2937" : "#ffffff",
            titleColor: V.value ? "#f3f4f6" : "#111827",
            bodyColor: V.value ? "#d1d5db" : "#4b5563",
            borderColor: $.grid,
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
              color: $.text,
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
            grid: { color: $.grid, borderDash: [4, 4] },
            ticks: { color: $.text, font: { size: 10 }, precision: 0 }
          }
        }
      };
    });
    return ($, T) => (n(), i("div", Tu, [
      e("div", Du, [
        e("h3", Eu, [
          T[2] || (T[2] = e("svg", {
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
            onClick: T[0] || (T[0] = (f) => h("openRequestErrors"))
          }, t(a(r)("admin.ops.errorDetails.requestErrors")), 9, Lu),
          e("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !b.value,
            onClick: T[1] || (T[1] = (f) => h("openUpstreamErrors"))
          }, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 9, zu)
        ])
      ]),
      e("div", Mu, [
        A.value === "ready" && B.value ? (n(), de(a(Yt), {
          key: 0,
          data: B.value,
          options: p.value
        }, null, 8, ["data", "options"])) : (n(), i("div", Au, [
          A.value === "loading" ? (n(), i("div", Vu, t(a(r)("common.loading")), 1)) : (n(), de(at, {
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
    })), V = x(() => {
      var g;
      return (((g = o.latencyData) == null ? void 0 : g.total_requests) ?? 0) > 0;
    }), E = x(() => V.value ? "ready" : o.loading ? "loading" : "empty"), k = x(() => {
      if (!o.latencyData || !V.value) return null;
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
    }), C = x(() => {
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
    return (g, v) => (n(), i("div", Ou, [
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
        E.value === "ready" && k.value ? (n(), de(a(Fs), {
          key: 0,
          data: k.value,
          options: C.value
        }, null, 8, ["data", "options"])) : (n(), i("div", Uu, [
          E.value === "loading" ? (n(), i("div", Nu, t(a(s)("common.loading")), 1)) : (n(), de(at, {
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
    const s = y, { t: h } = ye(), r = o, V = S(null);
    ge(
      () => s.timeRange,
      () => {
        setTimeout(() => {
          var $;
          const p = ($ = V.value) == null ? void 0 : $.chart;
          p && typeof p.resetZoom == "function" && p.resetZoom();
        }, 100);
      }
    );
    const E = x(() => document.documentElement.classList.contains("dark")), k = x(() => ({
      blue: "#3b82f6",
      blueAlpha: "#3b82f620",
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: E.value ? "#374151" : "#f3f4f6",
      text: E.value ? "#9ca3af" : "#6b7280"
    })), C = x(() => $t(s.points.map((p) => p.request_count))), g = x(() => !s.points.length || C.value <= 0 ? null : {
      labels: s.points.map((p) => Xt(p.bucket_start, s.timeRange)),
      datasets: [
        {
          label: "QPS",
          data: s.points.map((p) => p.qps ?? 0),
          borderColor: k.value.blue,
          backgroundColor: k.value.blueAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: h("admin.ops.tpsK"),
          data: s.points.map((p) => (p.tps ?? 0) / 1e3),
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
      const p = k.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: p.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: E.value ? "#1f2937" : "#ffffff",
            titleColor: E.value ? "#f3f4f6" : "#111827",
            bodyColor: E.value ? "#d1d5db" : "#4b5563",
            borderColor: p.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: ($) => {
                let T = $.dataset.label || "";
                return T && (T += ": "), $.raw !== null && (T += $.parsed.y.toFixed(1)), T;
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
              color: p.text,
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
            grid: { color: p.grid, borderDash: [4, 4] },
            ticks: { color: p.text, font: { size: 10 } }
          },
          y1: {
            type: "linear",
            display: !0,
            position: "right",
            grid: { display: !1 },
            ticks: { color: p.violet, font: { size: 10 } }
          }
        }
      };
    });
    function B() {
      var $;
      const p = ($ = V.value) == null ? void 0 : $.chart;
      p && typeof p.resetZoom == "function" && p.resetZoom();
    }
    function A() {
      var f;
      const p = (f = V.value) == null ? void 0 : f.chart;
      if (!p || typeof p.toBase64Image != "function") return;
      const $ = p.toBase64Image("image/png", 1), T = document.createElement("a");
      T.href = $, T.download = `ops-throughput-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`, T.click();
    }
    return (p, $) => {
      var T, f;
      return n(), i("div", Bu, [
        e("div", Gu, [
          e("h3", Qu, [
            $[1] || ($[1] = e("svg", {
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
            s.fullscreen ? M("", !0) : (n(), de(fe, {
              key: 0,
              content: a(h)("admin.ops.tooltips.throughputTrend")
            }, null, 8, ["content"]))
          ]),
          e("div", Wu, [
            $[3] || ($[3] = e("span", { class: "flex shrink-0 items-center gap-1" }, [
              e("span", { class: "h-2 w-2 rounded-full bg-blue-500" }),
              H("QPS")
            ], -1)),
            e("span", Ku, [
              $[2] || ($[2] = e("span", { class: "h-2 w-2 rounded-full bg-zo-signal-500" }, null, -1)),
              H(t(a(h)("admin.ops.tpsK")), 1)
            ]),
            s.fullscreen ? M("", !0) : (n(), i(ue, { key: 0 }, [
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: v.value !== "ready",
                title: a(h)("admin.ops.requestDetails.title"),
                onClick: $[0] || ($[0] = (J) => r("openDetails"))
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
                onClick: A
              }, t(a(h)("admin.ops.charts.downloadChart")), 9, Yu)
            ], 64))
          ])
        ]),
        (((T = s.topGroups) == null ? void 0 : T.length) ?? 0) > 0 ? (n(), i("div", Xu, [
          (n(!0), i(ue, null, pe(s.topGroups, (J) => (n(), i("button", {
            key: J.group_id,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (oe) => r("selectGroup", J.group_id)
          }, [
            e("span", tc, t(J.group_name || `#${J.group_id}`), 1),
            e("span", sc, t(a(Be)(J.request_count)), 1)
          ], 8, ec))), 128))
        ])) : (((f = s.byPlatform) == null ? void 0 : f.length) ?? 0) > 0 ? (n(), i("div", ac, [
          (n(!0), i(ue, null, pe(s.byPlatform, (J) => (n(), i("button", {
            key: J.platform,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (oe) => r("selectPlatform", J.platform)
          }, [
            e("span", oc, t(J.platform), 1),
            e("span", nc, t(a(Be)(J.request_count)), 1)
          ], 8, rc))), 128))
        ])) : M("", !0),
        e("div", lc, [
          v.value === "ready" && g.value ? (n(), de(a(Yt), {
            key: 0,
            ref_key: "throughputChartRef",
            ref: V,
            data: g.value,
            options: b.value
          }, null, 8, ["data", "options"])) : (n(), i("div", ic, [
            v.value === "loading" ? (n(), i("div", dc, t(a(h)("common.loading")), 1)) : (n(), de(at, {
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
    })), V = x(() => $t(o.points.map((g) => g.request_count))), E = x(() => !o.points.length || V.value <= 0 ? null : {
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
    }), k = x(() => E.value ? "ready" : o.loading ? "loading" : "empty"), C = x(() => {
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
    return (g, v) => (n(), i("div", cc, [
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
          o.fullscreen ? M("", !0) : (n(), de(fe, {
            key: 0,
            content: a(s)("admin.ops.tooltips.switchRateTrend")
          }, null, 8, ["content"]))
        ])
      ]),
      e("div", gc, [
        k.value === "ready" && E.value ? (n(), de(a(Yt), {
          key: 0,
          data: E.value,
          options: C.value
        }, null, 8, ["data", "options"])) : (n(), i("div", vc, [
          k.value === "loading" ? (n(), i("div", _c, t(a(s)("common.loading")), 1)) : (n(), de(at, {
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
    const { t: o } = ye(), s = st(), h = Dt("(min-width: 768px)"), r = S(!1), V = S(!1), E = S([]), k = S(!0), C = S(!1), g = S(null), v = S(!1), b = S(!1), B = S(!1), A = S([]), p = S("7d"), $ = x(() => [
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), T = S("1h"), f = x(() => [
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") }
    ]), J = S("24h"), oe = x(() => [
      { value: "5m", label: o("admin.ops.timeRange.5m") },
      { value: "30m", label: o("admin.ops.timeRange.30m") },
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "6h", label: o("admin.ops.timeRange.6h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), ee = S(""), Z = x(() => [
      { value: "", label: o("common.all") },
      { value: "P0", label: "P0" },
      { value: "P1", label: "P1" },
      { value: "P2", label: "P2" },
      { value: "P3", label: "P3" }
    ]), Y = S(""), q = x(() => [
      { value: "", label: o("common.all") },
      { value: "firing", label: o("admin.ops.alertEvents.status.firing") },
      { value: "resolved", label: o("admin.ops.alertEvents.status.resolved") },
      { value: "manual_resolved", label: o("admin.ops.alertEvents.status.manualResolved") }
    ]), c = S(""), d = x(() => [
      { value: "", label: o("common.all") },
      { value: "true", label: o("admin.ops.alertEvents.table.emailSent") },
      { value: "false", label: o("admin.ops.alertEvents.table.emailIgnored") }
    ]);
    function j(K = {}) {
      const I = {
        limit: Ht,
        time_range: J.value
      };
      return ee.value && (I.severity = ee.value), Y.value && (I.status = Y.value), c.value === "true" && (I.email_sent = !0), c.value === "false" && (I.email_sent = !1), { ...I, ...K };
    }
    async function F() {
      var K, I;
      r.value = !0;
      try {
        const z = await ae.listAlertEvents(j());
        E.value = z, k.value = z.length === Ht;
      } catch (z) {
        console.error("[OpsAlertEventsCard] Failed to load alert events", z), s.showError(((I = (K = z == null ? void 0 : z.response) == null ? void 0 : K.data) == null ? void 0 : I.detail) || o("admin.ops.alertEvents.loadFailed")), E.value = [], k.value = !1;
      } finally {
        r.value = !1;
      }
    }
    async function D() {
      if (V.value || r.value || !k.value) return;
      const K = E.value[E.value.length - 1];
      if (K) {
        V.value = !0;
        try {
          const I = await ae.listAlertEvents(
            j({ before_fired_at: K.fired_at || K.created_at, before_id: K.id })
          );
          if (!I.length) {
            k.value = !1;
            return;
          }
          E.value = [...E.value, ...I], I.length < Ht && (k.value = !1);
        } catch (I) {
          console.error("[OpsAlertEventsCard] Failed to load more alert events", I), k.value = !1;
        } finally {
          V.value = !1;
        }
      }
    }
    function R(K) {
      const I = K.target;
      if (!I) return;
      I.scrollTop + I.clientHeight >= I.scrollHeight - 120 && D();
    }
    function O(K, I) {
      var te;
      const z = (te = K == null ? void 0 : K.dimensions) == null ? void 0 : te[I];
      return z == null ? "" : typeof z == "string" ? z : typeof z == "number" || typeof z == "boolean" ? String(z) : "";
    }
    function W(K) {
      const I = Math.max(0, Math.floor(K)), z = Math.floor(I / 1e3);
      if (z < 60) return `${z}s`;
      const te = Math.floor(z / 60);
      if (te < 60) return `${te}m`;
      const ne = Math.floor(te / 60);
      return ne < 24 ? `${ne}h` : `${Math.floor(ne / 24)}d`;
    }
    function ce(K) {
      const I = new Date(K.fired_at || K.created_at);
      if (Number.isNaN(I.getTime())) return "-";
      const z = K.resolved_at || null, te = String(K.status || "").trim().toLowerCase();
      if (z) {
        const ke = new Date(z);
        if (!Number.isNaN(ke.getTime())) {
          const Re = ke.getTime() - I.getTime();
          return `${o(te === "manual_resolved" ? "admin.ops.alertEvents.status.manualResolved" : "admin.ops.alertEvents.status.resolved")} ${W(Re)}`;
        }
      }
      const be = Date.now() - I.getTime();
      return `${o("admin.ops.alertEvents.status.firing")} ${W(be)}`;
    }
    function he(K) {
      var be;
      const I = [], z = O(K, "platform");
      z && I.push(`platform=${z}`);
      const te = (be = K.dimensions) == null ? void 0 : be.group_id;
      te != null && te !== "" && I.push(`group_id=${String(te)}`);
      const ne = O(K, "region");
      return ne && I.push(`region=${ne}`), I.length ? I.join(" ") : "-";
    }
    function _e() {
      C.value = !1, g.value = null, A.value = [];
    }
    async function N(K) {
      var I, z;
      C.value = !0, g.value = K, v.value = !0, B.value = !0;
      try {
        const te = await ae.getAlertEvent(K.id);
        g.value = te;
      } catch (te) {
        console.error("[OpsAlertEventsCard] Failed to load alert detail", te), s.showError(((z = (I = te == null ? void 0 : te.response) == null ? void 0 : I.data) == null ? void 0 : z.detail) || o("admin.ops.alertEvents.detail.loadFailed"));
      } finally {
        v.value = !1;
      }
      await _();
    }
    async function _() {
      var I;
      const K = g.value;
      if (!K) {
        A.value = [], B.value = !1;
        return;
      }
      B.value = !0;
      try {
        const z = O(K, "platform"), te = (I = K.dimensions) == null ? void 0 : I.group_id, ne = typeof te == "number" ? te : void 0, be = await ae.listAlertEvents({
          limit: 20,
          time_range: p.value,
          platform: z || void 0,
          group_id: ne,
          status: ""
        });
        A.value = be.filter((ke) => {
          var je, Fe;
          if (ke.rule_id !== K.rule_id) return !1;
          const Re = O(ke, "platform"), Qe = O(K, "platform");
          if ((Re || "") !== (Qe || "")) return !1;
          const We = (je = ke.dimensions) == null ? void 0 : je.group_id, Ze = (Fe = K.dimensions) == null ? void 0 : Fe.group_id;
          return (We ?? null) === (Ze ?? null);
        });
      } catch (z) {
        console.error("[OpsAlertEventsCard] Failed to load alert history", z), A.value = [];
      } finally {
        B.value = !1;
      }
    }
    function m(K) {
      const I = Date.now();
      return K === "1h" ? new Date(I + 3600 * 1e3).toISOString() : K === "24h" ? new Date(I + 1440 * 60 * 1e3).toISOString() : K === "7d" ? new Date(I + 10080 * 60 * 1e3).toISOString() : new Date(I + 3600 * 1e3).toISOString();
    }
    async function L() {
      var I, z, te;
      const K = g.value;
      if (K && !b.value) {
        b.value = !0;
        try {
          const ne = O(K, "platform"), be = (I = K.dimensions) == null ? void 0 : I.group_id, ke = typeof be == "number" ? be : null, Re = O(K, "region") || null;
          await ae.createAlertSilence({
            rule_id: K.rule_id,
            platform: ne || "",
            group_id: ke ?? void 0,
            region: Re ?? void 0,
            until: m(T.value),
            reason: `silence from UI (${T.value})`
          }), s.showSuccess(o("admin.ops.alertEvents.detail.silenceSuccess"));
        } catch (ne) {
          console.error("[OpsAlertEventsCard] Failed to silence alert", ne), s.showError(((te = (z = ne == null ? void 0 : ne.response) == null ? void 0 : z.data) == null ? void 0 : te.detail) || o("admin.ops.alertEvents.detail.silenceFailed"));
        } finally {
          b.value = !1;
        }
      }
    }
    async function le() {
      var K, I;
      if (g.value && !b.value) {
        b.value = !0;
        try {
          await ae.updateAlertEventStatus(g.value.id, "manual_resolved"), s.showSuccess(o("admin.ops.alertEvents.detail.manualResolvedSuccess"));
          const z = await ae.getAlertEvent(g.value.id);
          g.value = z, await F(), await _();
        } catch (z) {
          console.error("[OpsAlertEventsCard] Failed to resolve alert", z), s.showError(((I = (K = z == null ? void 0 : z.response) == null ? void 0 : K.data) == null ? void 0 : I.detail) || o("admin.ops.alertEvents.detail.manualResolvedFailed"));
        } finally {
          b.value = !1;
        }
      }
    }
    Ct(() => {
      F();
    }), ge([J, ee, Y, c], () => {
      E.value = [], k.value = !0, F();
    }), ge(p, () => {
      C.value && _();
    });
    function Se(K) {
      const I = String(K || "").trim().toLowerCase();
      return I === "p0" || I === "critical" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : I === "p1" || I === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : I === "p2" || I === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300";
    }
    function Ee(K) {
      const I = String(K || "").trim().toLowerCase();
      return I === "firing" ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-500/30" : I === "resolved" ? "bg-zo-signal-50 text-zo-signal-700 ring-zo-signal-600/20 dark:bg-zo-signal-900/30 dark:text-zo-signal-300 dark:ring-zo-signal-500/30" : I === "manual_resolved" ? "bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-900/30 dark:text-slate-300 dark:ring-slate-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-500/30";
    }
    function qe(K) {
      const I = String(K || "").trim().toLowerCase();
      return I ? I === "firing" ? o("admin.ops.alertEvents.status.firing") : I === "resolved" ? o("admin.ops.alertEvents.status.resolved") : I === "manual_resolved" ? o("admin.ops.alertEvents.status.manualResolved") : I.toUpperCase() : "-";
    }
    const Ie = x(() => E.value.length === 0 && !r.value);
    return (K, I) => (n(), i("div", fc, [
      e("div", yc, [
        e("div", null, [
          e("h3", hc, t(a(o)("admin.ops.alertEvents.title")), 1),
          e("p", bc, t(a(o)("admin.ops.alertEvents.description")), 1)
        ]),
        e("div", kc, [
          U(me, {
            "model-value": J.value,
            options: oe.value,
            class: "w-[120px]",
            onChange: I[0] || (I[0] = (z) => J.value = String(z || "24h"))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": ee.value,
            options: Z.value,
            class: "w-[88px]",
            onChange: I[1] || (I[1] = (z) => ee.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": Y.value,
            options: q.value,
            class: "w-[110px]",
            onChange: I[2] || (I[2] = (z) => Y.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": c.value,
            options: d.value,
            class: "w-[110px]",
            onChange: I[3] || (I[3] = (z) => c.value = String(z || ""))
          }, null, 8, ["model-value", "options"]),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: F
          }, [
            (n(), i("svg", {
              class: Q(["h-3.5 w-3.5", { "animate-spin": r.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...I[6] || (I[6] = [
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
      r.value ? (n(), i("div", $c, [
        I[7] || (I[7] = e("svg", {
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
      ])) : Ie.value ? (n(), i("div", Cc, t(a(o)("admin.ops.alertEvents.empty")), 1)) : (n(), i("div", Sc, [
        e("div", {
          class: "max-h-[600px] overflow-y-auto",
          onScroll: R
        }, [
          a(h) ? (n(), i("table", Fc, [
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
              (n(!0), i(ue, null, pe(E.value, (z) => (n(), i("tr", {
                key: z.id,
                class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50",
                onClick: (te) => N(z),
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
                e("td", Yc, t(O(z, "platform") || "-"), 1),
                e("td", Xc, [
                  e("span", e0, "#" + t(z.rule_id), 1)
                ]),
                e("td", t0, [
                  e("div", s0, t(z.title || "-"), 1),
                  z.description ? (n(), i("div", a0, t(z.description), 1)) : M("", !0)
                ]),
                e("td", r0, t(ce(z)), 1),
                e("td", o0, t(he(z)), 1),
                e("td", n0, [
                  e("span", {
                    class: "inline-flex items-center justify-end gap-1.5",
                    title: z.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")
                  }, [
                    z.email_sent ? (n(), de(Ve, {
                      key: 0,
                      name: "checkCircle",
                      size: "sm",
                      class: "text-zo-signal-600 dark:text-zo-signal-400"
                    })) : (n(), de(Ve, {
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
          ])) : (n(), i("div", Rc, [
            (n(!0), i(ue, null, pe(E.value, (z) => (n(), i("div", {
              key: z.id,
              class: "cursor-pointer space-y-2 p-4 hover:bg-gray-50 dark:hover:bg-dark-700/50",
              onClick: (te) => N(z)
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
              z.description ? (n(), i("div", Lc, t(z.description), 1)) : M("", !0),
              e("div", zc, [
                e("span", null, [
                  e("span", Mc, "#" + t(z.rule_id), 1),
                  H(" · " + t(ce(z)), 1)
                ]),
                e("span", Ac, [
                  z.email_sent ? (n(), de(Ve, {
                    key: 0,
                    name: "checkCircle",
                    size: "xs",
                    class: "text-zo-signal-600 dark:text-zo-signal-400"
                  })) : (n(), de(Ve, {
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
          V.value ? (n(), i("div", d0, [
            I[8] || (I[8] = e("svg", {
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
          ])) : !k.value && E.value.length > 0 ? (n(), i("div", u0, " - ")) : M("", !0)
        ], 32)
      ])),
      U(Je, {
        show: C.value,
        title: a(o)("admin.ops.alertEvents.detail.title"),
        width: "wide",
        "close-on-click-outside": !0,
        onClose: _e
      }, {
        default: ve(() => {
          var z, te;
          return [
            v.value ? (n(), i("div", c0, t(a(o)("admin.ops.alertEvents.detail.loading")), 1)) : g.value ? (n(), i("div", m0, [
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
                    g.value.description ? (n(), i("div", f0, t(g.value.description), 1)) : M("", !0)
                  ]),
                  e("div", y0, [
                    e("div", h0, [
                      e("span", b0, t(a(o)("admin.ops.alertEvents.detail.silence")), 1),
                      U(me, {
                        "model-value": T.value,
                        options: f.value,
                        class: "w-[110px]",
                        onChange: I[4] || (I[4] = (ne) => T.value = String(ne || "1h"))
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
                      onClick: le
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
                      href: `/admin/ops?platform=${encodeURIComponent(O(g.value, "platform") || "")}&group_id=${((z = g.value.dimensions) == null ? void 0 : z.group_id) || ""}&error_type=request&open_error_details=1`
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
                    O(g.value, "platform") ? (n(), i("div", j0, "platform=" + t(O(g.value, "platform")), 1)) : M("", !0),
                    (te = g.value.dimensions) != null && te.group_id ? (n(), i("div", P0, "group_id=" + t(g.value.dimensions.group_id), 1)) : M("", !0),
                    O(g.value, "region") ? (n(), i("div", U0, "region=" + t(O(g.value, "region")), 1)) : M("", !0)
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
                    "model-value": p.value,
                    options: $.value,
                    class: "w-[140px]",
                    onChange: I[5] || (I[5] = (ne) => p.value = String(ne || "7d"))
                  }, null, 8, ["model-value", "options"])
                ]),
                B.value ? (n(), i("div", Q0, t(a(o)("admin.ops.alertEvents.detail.historyLoading")), 1)) : A.value.length === 0 ? (n(), i("div", W0, t(a(o)("admin.ops.alertEvents.detail.historyEmpty")), 1)) : (n(), i("div", K0, [
                  e("table", J0, [
                    e("thead", Z0, [
                      e("tr", null, [
                        e("th", Y0, t(a(o)("admin.ops.alertEvents.table.time")), 1),
                        e("th", X0, t(a(o)("admin.ops.alertEvents.table.status")), 1),
                        e("th", ep, t(a(o)("admin.ops.alertEvents.table.metric")), 1)
                      ])
                    ]),
                    e("tbody", tp, [
                      (n(!0), i(ue, null, pe(A.value, (ne) => (n(), i("tr", {
                        key: ne.id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        e("td", sp, t(a(Ge)(ne.fired_at || ne.created_at)), 1),
                        e("td", ap, [
                          e("span", {
                            class: Q(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Ee(ne.status)])
                          }, t(qe(ne.status)), 3)
                        ]),
                        e("td", rp, [
                          typeof ne.metric_value == "number" && typeof ne.threshold_value == "number" ? (n(), i("span", op, t(ne.metric_value.toFixed(2)) + " / " + t(ne.threshold_value.toFixed(2)), 1)) : (n(), i("span", np, "-"))
                        ])
                      ]))), 128))
                    ])
                  ])
                ]))
              ])
            ])) : (n(), i("div", p0, t(a(o)("admin.ops.alertEvents.detail.empty")), 1))
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
    const o = y, { t: s } = ye(), h = Dt("(min-width: 768px)"), r = S(!1), V = S(""), E = S(null), k = S("30d"), C = S("topn"), g = S(20), v = S(1), b = S(20), B = x(() => {
      var d;
      return ((d = E.value) == null ? void 0 : d.items) ?? [];
    }), A = x(() => {
      var d;
      return ((d = E.value) == null ? void 0 : d.total) ?? 0;
    }), p = x(() => {
      if (C.value !== "pagination") return 1;
      const d = b.value > 0 ? b.value : 20;
      return Math.max(1, Math.ceil(A.value / d));
    }), $ = x(() => [
      { value: "30m", label: s("admin.ops.timeRange.30m") },
      { value: "1h", label: s("admin.ops.timeRange.1h") },
      { value: "1d", label: s("admin.ops.timeRange.1d") },
      { value: "15d", label: s("admin.ops.timeRange.15d") },
      { value: "30d", label: s("admin.ops.timeRange.30d") }
    ]), T = x(() => [
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
    function oe(d) {
      return typeof d != "number" || !Number.isFinite(d) ? "-" : d.toFixed(2);
    }
    function ee(d) {
      return typeof d != "number" || !Number.isFinite(d) ? "-" : Be(Math.round(d));
    }
    function Z() {
      const d = {
        time_range: k.value,
        platform: o.platformFilter || void 0,
        group_id: typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? o.groupIdFilter : void 0
      };
      return C.value === "topn" ? d.top_n = g.value : (d.page = v.value, d.page_size = b.value), d;
    }
    async function Y() {
      r.value = !0, V.value = "";
      try {
        E.value = await ae.getOpenAITokenStats(Z()), C.value === "pagination" && v.value > p.value && (v.value = p.value, E.value = await ae.getOpenAITokenStats(Z()));
      } catch (d) {
        console.error("[OpsOpenAITokenStatsCard] Failed to load data", d), E.value = null, V.value = (d == null ? void 0 : d.message) || s("admin.ops.openaiTokenStats.failedToLoad");
      } finally {
        r.value = !1;
      }
    }
    ge(
      () => ({
        timeRange: k.value,
        viewMode: C.value,
        topN: g.value,
        page: v.value,
        pageSize: b.value,
        platform: o.platformFilter,
        groupId: o.groupIdFilter,
        refreshToken: o.refreshToken
      }),
      (d, j) => {
        const F = !j || d.timeRange !== j.timeRange || d.viewMode !== j.viewMode || d.pageSize !== j.pageSize || d.platform !== j.platform || d.groupId !== j.groupId;
        if (d.viewMode === "pagination" && F && d.page !== 1) {
          v.value = 1;
          return;
        }
        Y();
      },
      { immediate: !0 }
    );
    function q() {
      C.value === "pagination" && v.value > 1 && (v.value -= 1);
    }
    function c() {
      C.value === "pagination" && v.value < p.value && (v.value += 1);
    }
    return (d, j) => (n(), i("section", ip, [
      e("div", dp, [
        e("h3", up, t(a(s)("admin.ops.openaiTokenStats.title")), 1),
        e("div", cp, [
          e("div", pp, [
            U(me, {
              modelValue: k.value,
              "onUpdate:modelValue": j[0] || (j[0] = (F) => k.value = F),
              options: $.value
            }, null, 8, ["modelValue", "options"])
          ]),
          e("div", mp, [
            U(me, {
              modelValue: C.value,
              "onUpdate:modelValue": j[1] || (j[1] = (F) => C.value = F),
              options: T.value
            }, null, 8, ["modelValue", "options"])
          ]),
          C.value === "topn" ? (n(), i("div", gp, [
            U(me, {
              modelValue: g.value,
              "onUpdate:modelValue": j[2] || (j[2] = (F) => g.value = F),
              options: f.value
            }, null, 8, ["modelValue", "options"])
          ])) : (n(), i(ue, { key: 1 }, [
            e("div", vp, [
              U(me, {
                modelValue: b.value,
                "onUpdate:modelValue": j[3] || (j[3] = (F) => b.value = F),
                options: J.value
              }, null, 8, ["modelValue", "options"])
            ]),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || v.value <= 1,
              onClick: q
            }, t(a(s)("admin.ops.openaiTokenStats.prevPage")), 9, _p),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || v.value >= p.value,
              onClick: c
            }, t(a(s)("admin.ops.openaiTokenStats.nextPage")), 9, xp),
            e("span", fp, t(a(s)("admin.ops.openaiTokenStats.pageInfo", { page: v.value, total: p.value })), 1)
          ], 64))
        ])
      ]),
      V.value ? (n(), i("div", yp, t(V.value), 1)) : M("", !0),
      r.value ? (n(), i("div", hp, t(a(s)("admin.ops.loadingText")), 1)) : B.value.length === 0 ? (n(), de(at, {
        key: 2,
        title: a(s)("common.noData"),
        description: a(s)("admin.ops.openaiTokenStats.empty")
      }, null, 8, ["title", "description"])) : (n(), i("div", bp, [
        e("div", kp, [
          e("div", wp, [
            a(h) ? (n(), i("table", Bp, [
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
                (n(!0), i(ue, null, pe(B.value, (F) => (n(), i("tr", {
                  key: F.model,
                  class: "border-b border-gray-100 text-gray-700 last:border-b-0 dark:border-dark-800 dark:text-gray-200"
                }, [
                  e("td", tm, t(F.model), 1),
                  e("td", sm, t(ee(F.request_count)), 1),
                  e("td", am, t(oe(F.avg_tokens_per_sec)), 1),
                  e("td", rm, t(oe(F.avg_first_token_ms)), 1),
                  e("td", om, t(ee(F.total_output_tokens)), 1),
                  e("td", nm, t(ee(F.avg_duration_ms)), 1),
                  e("td", lm, t(ee(F.requests_with_first_token)), 1)
                ]))), 128))
              ])
            ])) : (n(), i("div", $p, [
              (n(!0), i(ue, null, pe(B.value, (F) => (n(), i("div", {
                key: F.model,
                class: "space-y-2 p-3"
              }, [
                e("div", Cp, t(F.model), 1),
                e("div", Sp, [
                  e("div", Rp, [
                    e("span", Tp, t(a(s)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                    e("span", Dp, t(ee(F.request_count)), 1)
                  ]),
                  e("div", Ep, [
                    e("span", qp, t(a(s)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                    e("span", Lp, t(oe(F.avg_tokens_per_sec)), 1)
                  ]),
                  e("div", zp, [
                    e("span", Mp, t(a(s)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                    e("span", Ap, t(oe(F.avg_first_token_ms)), 1)
                  ]),
                  e("div", Vp, [
                    e("span", Fp, t(a(s)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                    e("span", Op, t(ee(F.total_output_tokens)), 1)
                  ]),
                  e("div", Ip, [
                    e("span", jp, t(a(s)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                    e("span", Pp, t(ee(F.avg_duration_ms)), 1)
                  ]),
                  e("div", Up, [
                    e("span", Np, t(a(s)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1),
                    e("span", Hp, t(ee(F.requests_with_first_token)), 1)
                  ])
                ])
              ]))), 128))
            ]))
          ])
        ]),
        C.value === "topn" ? (n(), i("div", im, t(a(s)("admin.ops.openaiTokenStats.totalModels", { total: A.value })), 1)) : M("", !0)
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
    const o = st(), { t: s } = ye(), h = Dt("(min-width: 768px)"), r = y, V = S(!1), E = S([]), k = S(0), C = S(1), g = S(20), v = S({
      queue_depth: 0,
      queue_capacity: 0,
      dropped_count: 0,
      write_failed_count: 0,
      written_count: 0,
      avg_write_delay_ms: 0
    }), b = S(!1), B = S(!1), A = Bt({
      level: "info",
      persist_access_logs: !1,
      enable_sampling: !1,
      sampling_initial: 100,
      sampling_thereafter: 100,
      caller: !0,
      stacktrace_level: "error",
      retention_days: 30
    }), p = Bt({
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
    }), $ = [
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ], T = [
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
    ]), oe = (_) => {
      const m = String(_ || "").toLowerCase();
      return m === "error" || m === "fatal" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : m === "warn" || m === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : m === "debug" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    }, ee = (_) => {
      if (!_) return "-";
      const m = new Date(_);
      return Number.isNaN(m.getTime()) ? _ : m.toLocaleString();
    }, Z = (_, m) => {
      if (!_) return "";
      const L = _[m];
      return L == null ? "" : typeof L == "string" ? L.trim() : typeof L == "number" || typeof L == "boolean" ? String(L) : "";
    }, Y = (_) => {
      const m = [], L = String(_.message || "").trim();
      L && m.push(L);
      const le = _.extra || {}, Se = Z(le, "status_code"), Ee = Z(le, "latency_ms"), qe = Z(le, "method"), Ie = Z(le, "path"), K = Z(le, "client_ip"), I = Z(le, "protocol"), z = [];
      Se && z.push(`status=${Se}`), Ee && z.push(`latency_ms=${Ee}`), qe && z.push(`method=${qe}`), Ie && z.push(`path=${Ie}`), K && z.push(`ip=${K}`), I && z.push(`proto=${I}`), z.length > 0 && m.push(z.join(" "));
      const te = [];
      _.request_id && te.push(`req=${_.request_id}`), _.client_request_id && te.push(`client_req=${_.client_request_id}`), _.user_id != null && te.push(`user=${_.user_id}`), _.api_key_id != null && te.push(`key=${_.api_key_id}`), _.account_id != null && te.push(`acc=${_.account_id}`), _.platform && te.push(`platform=${_.platform}`), _.model && te.push(`model=${_.model}`), te.length > 0 && m.push(te.join(" "));
      const ne = Z(le, "errors");
      ne && m.push(`errors=${ne}`);
      const be = Z(le, "err") || Z(le, "error");
      return be && m.push(`error=${be}`), m.join("  ");
    }, q = (_) => {
      if (!_) return;
      const m = new Date(_);
      if (!Number.isNaN(m.getTime()))
        return m.toISOString();
    }, c = () => {
      const _ = {
        page: C.value,
        page_size: g.value,
        time_range: p.time_range
      };
      if (p.time_range === "30d" && (_.time_range = "30d"), p.start_time && (_.start_time = q(p.start_time)), p.end_time && (_.end_time = q(p.end_time)), p.host.trim() && (_.host = p.host.trim()), p.level.trim() && (_.level = p.level.trim()), p.component.trim() && (_.component = p.component.trim()), p.request_id.trim() && (_.request_id = p.request_id.trim()), p.client_request_id.trim() && (_.client_request_id = p.client_request_id.trim()), p.user_id.trim()) {
        const m = Number.parseInt(p.user_id.trim(), 10);
        Number.isFinite(m) && m > 0 && (_.user_id = m);
      }
      if (p.api_key_id.trim()) {
        const m = Number.parseInt(p.api_key_id.trim(), 10);
        Number.isFinite(m) && m > 0 && (_.api_key_id = m);
      }
      if (p.account_id.trim()) {
        const m = Number.parseInt(p.account_id.trim(), 10);
        Number.isFinite(m) && m > 0 && (_.account_id = m);
      }
      return p.platform.trim() && (_.platform = p.platform.trim()), p.model.trim() && (_.model = p.model.trim()), p.q.trim() && (_.q = p.q.trim()), _;
    }, d = async () => {
      var _, m;
      V.value = !0;
      try {
        const L = await ae.listSystemLogs(c());
        E.value = L.items || [], k.value = L.total || 0;
      } catch (L) {
        console.error("[OpsSystemLogTable] Failed to fetch logs", L), o.showError(((m = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : m.detail) || s("admin.ops.systemLogs.loadFailed"));
      } finally {
        V.value = !1;
      }
    }, j = async () => {
      try {
        v.value = await ae.getSystemLogSinkHealth();
      } catch {
      }
    }, F = async () => {
      b.value = !0;
      try {
        const _ = await ae.getRuntimeLogConfig();
        A.level = _.level, A.persist_access_logs = _.persist_access_logs, A.enable_sampling = _.enable_sampling, A.sampling_initial = _.sampling_initial, A.sampling_thereafter = _.sampling_thereafter, A.caller = _.caller, A.stacktrace_level = _.stacktrace_level, A.retention_days = _.retention_days;
      } catch (_) {
        console.error("[OpsSystemLogTable] Failed to load runtime log config", _);
      } finally {
        b.value = !1;
      }
    }, D = async () => {
      var _, m;
      B.value = !0;
      try {
        const L = await ae.updateRuntimeLogConfig({ ...A });
        A.level = L.level, A.persist_access_logs = L.persist_access_logs, A.enable_sampling = L.enable_sampling, A.sampling_initial = L.sampling_initial, A.sampling_thereafter = L.sampling_thereafter, A.caller = L.caller, A.stacktrace_level = L.stacktrace_level, A.retention_days = L.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigActive"));
      } catch (L) {
        console.error("[OpsSystemLogTable] Failed to save runtime log config", L), o.showError(((m = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : m.detail) || s("admin.ops.systemLogs.runtimeConfigSaveFailed"));
      } finally {
        B.value = !1;
      }
    }, R = async () => {
      var m, L;
      if (window.confirm(s("admin.ops.systemLogs.resetRuntimeConfigConfirm"))) {
        B.value = !0;
        try {
          const le = await ae.resetRuntimeLogConfig();
          A.level = le.level, A.persist_access_logs = le.persist_access_logs, A.enable_sampling = le.enable_sampling, A.sampling_initial = le.sampling_initial, A.sampling_thereafter = le.sampling_thereafter, A.caller = le.caller, A.stacktrace_level = le.stacktrace_level, A.retention_days = le.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigReset")), await j();
        } catch (le) {
          console.error("[OpsSystemLogTable] Failed to reset runtime log config", le), o.showError(((L = (m = le == null ? void 0 : le.response) == null ? void 0 : m.data) == null ? void 0 : L.detail) || s("admin.ops.systemLogs.runtimeConfigResetFailed"));
        } finally {
          B.value = !1;
        }
      }
    }, O = async () => {
      if (window.confirm(s("admin.ops.systemLogs.cleanupConfirm")))
        try {
          const m = {
            start_time: q(p.start_time),
            end_time: q(p.end_time),
            host: p.host.trim() || void 0,
            level: p.level.trim() || void 0,
            component: p.component.trim() || void 0,
            request_id: p.request_id.trim() || void 0,
            client_request_id: p.client_request_id.trim() || void 0,
            user_id: p.user_id.trim() ? Number.parseInt(p.user_id.trim(), 10) : void 0,
            api_key_id: p.api_key_id.trim() ? Number.parseInt(p.api_key_id.trim(), 10) : void 0,
            account_id: p.account_id.trim() ? Number.parseInt(p.account_id.trim(), 10) : void 0,
            platform: p.platform.trim() || void 0,
            model: p.model.trim() || void 0,
            q: p.q.trim() || void 0
          }, L = await ae.cleanupSystemLogs(m);
          o.showSuccess(s("admin.ops.systemLogs.cleanupSuccess", { count: L.deleted || 0 })), C.value = 1, await Promise.all([d(), j()]);
        } catch (m) {
          console.error("[OpsSystemLogTable] Failed to cleanup logs", m), o.showError(
            Ps(m, s("admin.ops.systemLogs.cleanupFailed"), {
              OPS_SYSTEM_LOG_CLEANUP_FILTER_REQUIRED: s("admin.ops.systemLogs.cleanupFilterRequired")
            })
          );
        }
    }, W = () => {
      p.time_range = "1h", p.start_time = "", p.end_time = "", p.host = "", p.level = "", p.component = "", p.request_id = "", p.client_request_id = "", p.user_id = "", p.api_key_id = "", p.account_id = "", p.platform = r.platformFilter || "", p.model = "", p.q = "", C.value = 1, d();
    };
    ge(() => r.platformFilter, (_) => {
      _ && !p.platform && (p.platform = _, C.value = 1, d());
    }), ge(() => r.refreshToken, () => {
      d(), j();
    });
    const ce = (_) => {
      C.value = _, d();
    }, he = (_) => {
      g.value = _, C.value = 1, d();
    }, _e = () => {
      C.value = 1, d();
    }, N = x(() => E.value.length > 0);
    return Ct(async () => {
      r.platformFilter && (p.platform = r.platformFilter), await Promise.all([d(), j(), F()]);
    }), (_, m) => (n(), i("section", um, [
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
          b.value ? (n(), i("span", km, t(a(s)("common.loading")), 1)) : M("", !0)
        ]),
        e("div", wm, [
          e("label", $m, [
            H(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
            U(me, {
              modelValue: A.level,
              "onUpdate:modelValue": m[0] || (m[0] = (L) => A.level = L),
              class: "mt-1",
              options: $
            }, null, 8, ["modelValue"])
          ]),
          e("label", Cm, [
            H(t(a(s)("admin.ops.systemLogs.stacktraceThreshold")) + " ", 1),
            U(me, {
              modelValue: A.stacktrace_level,
              "onUpdate:modelValue": m[1] || (m[1] = (L) => A.stacktrace_level = L),
              class: "mt-1",
              options: T
            }, null, 8, ["modelValue"])
          ]),
          e("label", Sm, [
            H(t(a(s)("admin.ops.systemLogs.samplingInitial")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": m[2] || (m[2] = (L) => A.sampling_initial = L),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                ie,
                A.sampling_initial,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Rm, [
            H(t(a(s)("admin.ops.systemLogs.samplingThereafter")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": m[3] || (m[3] = (L) => A.sampling_thereafter = L),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                ie,
                A.sampling_thereafter,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Tm, [
            H(t(a(s)("admin.ops.systemLogs.retentionDays")) + " ", 1),
            re(e("input", {
              "onUpdate:modelValue": m[4] || (m[4] = (L) => A.retention_days = L),
              type: "number",
              min: "1",
              max: "3650",
              class: "input mt-1"
            }, null, 512), [
              [
                ie,
                A.retention_days,
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
                    "onUpdate:modelValue": m[5] || (m[5] = (L) => A.caller = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, A.caller]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.caller")), 1)
                ]),
                e("label", Mm, [
                  re(e("input", {
                    "onUpdate:modelValue": m[6] || (m[6] = (L) => A.enable_sampling = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, A.enable_sampling]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.sampling")), 1)
                ]),
                e("label", Am, [
                  re(e("input", {
                    "onUpdate:modelValue": m[7] || (m[7] = (L) => A.persist_access_logs = L),
                    type: "checkbox"
                  }, null, 512), [
                    [wt, A.persist_access_logs]
                  ]),
                  H(" " + t(a(s)("admin.ops.systemLogs.persistAccessLogs")), 1)
                ])
              ]),
              e("div", Vm, [
                e("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  disabled: B.value,
                  onClick: D
                }, t(B.value ? a(s)("common.saving") : a(s)("admin.ops.systemLogs.saveAndApply")), 9, Fm),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: B.value,
                  onClick: R
                }, t(a(s)("admin.ops.systemLogs.resetDefaults")), 9, Om)
              ])
            ])
          ])
        ]),
        e("p", Im, t(a(s)("admin.ops.systemLogs.persistAccessLogsHint")), 1),
        v.value.last_error ? (n(), i("p", jm, t(a(s)("admin.ops.systemLogs.latestWriteError")) + " " + t(v.value.last_error), 1)) : M("", !0)
      ]),
      e("div", Pm, [
        e("label", Um, [
          H(t(a(s)("admin.ops.systemLogs.timeRange")) + " ", 1),
          U(me, {
            modelValue: p.time_range,
            "onUpdate:modelValue": m[8] || (m[8] = (L) => p.time_range = L),
            class: "mt-1",
            options: f
          }, null, 8, ["modelValue"])
        ]),
        e("label", Nm, [
          H(t(a(s)("admin.ops.systemLogs.startTime")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[9] || (m[9] = (L) => p.start_time = L),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.start_time]
          ])
        ]),
        e("label", Hm, [
          H(t(a(s)("admin.ops.systemLogs.endTime")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[10] || (m[10] = (L) => p.end_time = L),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.end_time]
          ])
        ]),
        e("label", Bm, [
          H(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
          U(me, {
            modelValue: p.level,
            "onUpdate:modelValue": m[11] || (m[11] = (L) => p.level = L),
            class: "mt-1",
            options: J.value
          }, null, 8, ["modelValue", "options"])
        ]),
        e("label", Gm, [
          H(t(a(s)("admin.ops.systemLogs.component")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[12] || (m[12] = (L) => p.component = L),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.componentPlaceholder")
          }, null, 8, Qm), [
            [ie, p.component]
          ])
        ]),
        e("label", Wm, [
          H(t(a(s)("admin.ops.systemLogs.host")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[13] || (m[13] = (L) => p.host = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.host]
          ])
        ]),
        e("label", Km, [
          m[22] || (m[22] = H(" request_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": m[14] || (m[14] = (L) => p.request_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.request_id]
          ])
        ]),
        e("label", Jm, [
          m[23] || (m[23] = H(" client_request_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": m[15] || (m[15] = (L) => p.client_request_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.client_request_id]
          ])
        ]),
        e("label", Zm, [
          m[24] || (m[24] = H(" user_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": m[16] || (m[16] = (L) => p.user_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.user_id]
          ])
        ]),
        e("label", Ym, [
          H(t(a(s)("admin.ops.systemLogs.keyId")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[17] || (m[17] = (L) => p.api_key_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.api_key_id]
          ])
        ]),
        e("label", Xm, [
          m[25] || (m[25] = H(" account_id ", -1)),
          re(e("input", {
            "onUpdate:modelValue": m[18] || (m[18] = (L) => p.account_id = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.account_id]
          ])
        ]),
        e("label", eg, [
          H(t(a(s)("admin.ops.systemLogs.platform")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[19] || (m[19] = (L) => p.platform = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.platform]
          ])
        ]),
        e("label", tg, [
          H(t(a(s)("admin.ops.systemLogs.model")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[20] || (m[20] = (L) => p.model = L),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [ie, p.model]
          ])
        ]),
        e("label", sg, [
          H(t(a(s)("admin.ops.systemLogs.keyword")) + " ", 1),
          re(e("input", {
            "onUpdate:modelValue": m[21] || (m[21] = (L) => p.q = L),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.keywordPlaceholder")
          }, null, 8, ag), [
            [ie, p.q]
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
          onClick: O
        }, t(a(s)("admin.ops.systemLogs.cleanCurrentFilters")), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: j
        }, t(a(s)("admin.ops.systemLogs.refreshHealth")), 1)
      ]),
      e("div", og, [
        V.value ? (n(), i("div", ng, t(a(s)("common.loading")), 1)) : N.value ? a(h) ? (n(), i("div", mg, [
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
              (n(!0), i(ue, null, pe(E.value, (L) => (n(), i("tr", {
                key: L.id,
                class: "align-top"
              }, [
                e("td", bg, t(ee(L.created_at)), 1),
                e("td", kg, [
                  e("span", {
                    class: "block truncate",
                    title: L.host || "-"
                  }, t(L.host || "-"), 9, wg)
                ]),
                e("td", $g, [
                  e("span", {
                    class: Q(["inline-flex rounded-full px-2 py-0.5 font-semibold", oe(L.level)])
                  }, t(L.level), 3)
                ]),
                e("td", Cg, t(Y(L)), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), i("div", ig, [
          (n(!0), i(ue, null, pe(E.value, (L) => (n(), i("div", {
            key: L.id,
            class: "space-y-1.5 p-3"
          }, [
            e("div", dg, [
              e("span", {
                class: Q(["inline-flex rounded-full px-2 py-0.5 text-xs font-semibold", oe(L.level)])
              }, t(L.level), 3),
              e("span", ug, t(ee(L.created_at)), 1)
            ]),
            L.host ? (n(), i("div", {
              key: 0,
              class: "truncate text-xs text-gray-500 dark:text-gray-400",
              title: L.host
            }, t(L.host), 9, cg)) : M("", !0),
            e("div", pg, t(Y(L)), 1)
          ]))), 128))
        ])) : (n(), i("div", lg, t(a(s)("admin.ops.systemLogs.empty")), 1)),
        U(Qt, {
          total: k.value,
          page: C.value,
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
    const s = y, h = o, { t: r } = ye(), V = st(), { copyToClipboard: E } = Os(), k = Dt("(min-width: 768px)"), C = S(!1), g = S([]), v = S(0), b = S(1), B = S(10), A = () => h("update:modelValue", !1), p = x(() => {
      const Y = Gt(s.timeRange);
      return Y >= 60 ? r("admin.ops.requestDetails.rangeHours", { n: Math.round(Y / 60) }) : r("admin.ops.requestDetails.rangeMinutes", { n: Y });
    });
    function $() {
      const Y = Gt(s.timeRange), q = /* @__PURE__ */ new Date();
      return {
        start_time: new Date(q.getTime() - Y * 60 * 1e3).toISOString(),
        end_time: q.toISOString()
      };
    }
    const T = async () => {
      if (s.modelValue) {
        C.value = !0;
        try {
          const Y = {
            ...$(),
            page: b.value,
            page_size: B.value,
            kind: s.preset.kind ?? "all",
            sort: s.preset.sort ?? "created_at_desc"
          }, q = (s.platform || "").trim();
          q && (Y.platform = q), typeof s.groupId == "number" && s.groupId > 0 && (Y.group_id = s.groupId), typeof s.preset.min_duration_ms == "number" && (Y.min_duration_ms = s.preset.min_duration_ms), typeof s.preset.max_duration_ms == "number" && (Y.max_duration_ms = s.preset.max_duration_ms);
          const c = await ae.listRequestDetails(Y);
          g.value = c.items || [], v.value = c.total || 0;
        } catch (Y) {
          console.error("[OpsRequestDetailsModal] Failed to fetch request details", Y), V.showError((Y == null ? void 0 : Y.message) || r("admin.ops.requestDetails.failedToLoad")), g.value = [], v.value = 0;
        } finally {
          C.value = !1;
        }
      }
    };
    ge(
      () => s.modelValue,
      (Y) => {
        Y && (b.value = 1, B.value = 10, T());
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
        s.modelValue && (b.value = 1, T());
      }
    );
    function f(Y) {
      b.value = Y, T();
    }
    function J(Y) {
      B.value = Y, b.value = 1, T();
    }
    async function oe(Y) {
      await E(Y, r("admin.ops.requestDetails.requestIdCopied")) || V.showWarning(r("admin.ops.requestDetails.copyFailed"));
    }
    function ee(Y) {
      Y && (A(), h("openErrorDetail", Y));
    }
    const Z = (Y) => Y === "error" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-300";
    return (Y, q) => (n(), de(Je, {
      show: y.modelValue,
      title: s.preset.title || a(r)("admin.ops.requestDetails.title"),
      width: "full",
      onClose: A
    }, {
      default: ve(() => [
        e("div", Rg, [
          e("div", Tg, [
            e("div", Dg, t(a(r)("admin.ops.requestDetails.rangeLabel", { range: p.value })), 1),
            e("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: T
            }, t(a(r)("common.refresh")), 1)
          ]),
          C.value ? (n(), i("div", Eg, [
            e("div", qg, [
              q[0] || (q[0] = e("svg", {
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
          ])) : (n(), i("div", zg, [
            g.value.length === 0 ? (n(), i("div", Mg, [
              e("div", Ag, t(a(r)("admin.ops.requestDetails.empty")), 1),
              e("div", Vg, t(a(r)("admin.ops.requestDetails.emptyHint")), 1)
            ])) : (n(), i("div", Fg, [
              e("div", Og, [
                a(k) ? (n(), i("table", Kg, [
                  e("thead", Jg, [
                    e("tr", null, [
                      e("th", Zg, t(a(r)("admin.ops.requestDetails.table.time")), 1),
                      e("th", Yg, t(a(r)("admin.ops.requestDetails.table.kind")), 1),
                      e("th", Xg, t(a(r)("admin.ops.requestDetails.table.platform")), 1),
                      e("th", ev, t(a(r)("admin.ops.requestDetails.table.model")), 1),
                      e("th", tv, t(a(r)("admin.ops.requestDetails.table.duration")), 1),
                      e("th", sv, t(a(r)("admin.ops.requestDetails.table.status")), 1),
                      e("th", av, t(a(r)("admin.ops.requestDetails.table.requestId")), 1),
                      e("th", rv, t(a(r)("admin.ops.requestDetails.table.actions")), 1)
                    ])
                  ]),
                  e("tbody", ov, [
                    (n(!0), i(ue, null, pe(g.value, (c, d) => (n(), i("tr", {
                      key: d,
                      class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                    }, [
                      e("td", nv, t(a(Ge)(c.created_at)), 1),
                      e("td", lv, [
                        e("span", {
                          class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", Z(c.kind)])
                        }, t(c.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3)
                      ]),
                      e("td", iv, t((c.platform || "unknown").toUpperCase()), 1),
                      e("td", {
                        class: "max-w-[240px] truncate px-4 py-3 text-xs text-gray-600 dark:text-gray-300",
                        title: c.model || ""
                      }, t(c.model || "-"), 9, dv),
                      e("td", uv, t(typeof c.duration_ms == "number" ? `${c.duration_ms} ms` : "-"), 1),
                      e("td", cv, t(c.status_code ?? "-"), 1),
                      e("td", pv, [
                        c.request_id ? (n(), i("div", mv, [
                          e("span", {
                            class: "max-w-[220px] truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                            title: c.request_id
                          }, t(c.request_id), 9, gv),
                          e("button", {
                            class: "rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                            onClick: (j) => oe(c.request_id)
                          }, t(a(r)("admin.ops.requestDetails.copy")), 9, vv)
                        ])) : (n(), i("span", _v, "-"))
                      ]),
                      e("td", xv, [
                        c.kind === "error" && c.error_id ? (n(), i("button", {
                          key: 0,
                          class: "rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                          onClick: (j) => ee(c.error_id)
                        }, t(a(r)("admin.ops.requestDetails.viewError")), 9, fv)) : (n(), i("span", yv, "-"))
                      ])
                    ]))), 128))
                  ])
                ])) : (n(), i("div", Ig, [
                  (n(!0), i(ue, null, pe(g.value, (c, d) => (n(), i("div", {
                    key: d,
                    class: "space-y-2 p-4"
                  }, [
                    e("div", jg, [
                      e("span", {
                        class: Q(["rounded-full px-2 py-1 text-[10px] font-bold", Z(c.kind)])
                      }, t(c.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3),
                      e("span", Pg, t((c.platform || "unknown").toUpperCase()), 1),
                      e("span", Ug, t(a(Ge)(c.created_at)), 1)
                    ]),
                    e("div", Ng, t(c.model || "-"), 1),
                    e("div", Hg, [
                      e("span", null, t(typeof c.duration_ms == "number" ? `${c.duration_ms} ms` : "-"), 1),
                      e("span", null, t(c.status_code ?? "-"), 1)
                    ]),
                    c.request_id ? (n(), i("div", Bg, [
                      e("span", {
                        class: "min-w-0 flex-1 truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                        title: c.request_id
                      }, t(c.request_id), 9, Gg),
                      e("button", {
                        class: "shrink-0 rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                        onClick: (j) => oe(c.request_id)
                      }, t(a(r)("admin.ops.requestDetails.copy")), 9, Qg)
                    ])) : M("", !0),
                    c.kind === "error" && c.error_id ? (n(), i("button", {
                      key: 1,
                      class: "w-full rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                      onClick: (j) => ee(c.error_id)
                    }, t(a(r)("admin.ops.requestDetails.viewError")), 9, Wg)) : M("", !0)
                  ]))), 128))
                ]))
              ]),
              U(Qt, {
                total: v.value,
                page: b.value,
                "page-size": B.value,
                "onUpdate:page": f,
                "onUpdate:pageSize": J
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
    const { t: s } = ye(), h = st(), r = y, V = o, E = S(!1), k = S(!1), C = S(null), g = S(null), v = S(null), b = S({
      sla_percent_min: 99.5,
      ttft_p99_ms_max: 500,
      request_error_rate_percent_max: 5,
      upstream_error_rate_percent_max: 5
    });
    async function B() {
      var q, c;
      E.value = !0;
      try {
        const [d, j, F, D] = await Promise.all([
          ae.getAlertRuntimeSettings(),
          ae.getEmailNotificationConfig(),
          ae.getAdvancedSettings(),
          ae.getMetricThresholds()
        ]);
        C.value = d, g.value = j, v.value = F, v.value && !v.value.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause = { default_threshold_5h: 0, default_threshold_7d: 0 }), D && Object.keys(D).length > 0 && (b.value = {
          sla_percent_min: D.sla_percent_min ?? 99.5,
          ttft_p99_ms_max: D.ttft_p99_ms_max ?? 500,
          request_error_rate_percent_max: D.request_error_rate_percent_max ?? 5,
          upstream_error_rate_percent_max: D.upstream_error_rate_percent_max ?? 5
        });
      } catch (d) {
        console.error("[OpsSettingsDialog] Failed to load settings", d), h.showError(((c = (q = d == null ? void 0 : d.response) == null ? void 0 : q.data) == null ? void 0 : c.detail) || s("admin.ops.settings.loadFailed"));
      } finally {
        E.value = !1;
      }
    }
    ge(() => r.show, (q) => {
      q && B();
    });
    const A = S(""), p = S(""), $ = [
      { value: "", label: s("admin.ops.email.minSeverityAll") },
      { value: "critical", label: s("common.critical") },
      { value: "warning", label: s("common.warning") },
      { value: "info", label: s("common.info") }
    ];
    function T(q) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q);
    }
    function f(q) {
      if (!g.value) return;
      const c = (q === "alert" ? A.value : p.value).trim();
      if (!c) return;
      if (!T(c)) {
        h.showError(s("common.invalidEmail"));
        return;
      }
      const d = c.toLowerCase(), j = q === "alert" ? g.value.alert.recipients : g.value.report.recipients;
      j.includes(d) || j.push(d), q === "alert" ? A.value = "" : p.value = "";
    }
    function J(q, c) {
      if (!g.value) return;
      const d = q === "alert" ? g.value.alert.recipients : g.value.report.recipients, j = d.indexOf(c);
      j >= 0 && d.splice(j, 1);
    }
    const oe = x({
      get() {
        var c, d;
        const q = (d = (c = v.value) == null ? void 0 : c.openai_account_quota_auto_pause) == null ? void 0 : d.default_threshold_5h;
        return q && q > 0 ? Math.round(q * 1e3) / 10 : null;
      },
      set(q) {
        var c;
        (c = v.value) != null && c.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause.default_threshold_5h = q != null && q > 0 ? q / 100 : 0);
      }
    }), ee = x({
      get() {
        var c, d;
        const q = (d = (c = v.value) == null ? void 0 : c.openai_account_quota_auto_pause) == null ? void 0 : d.default_threshold_7d;
        return q && q > 0 ? Math.round(q * 1e3) / 10 : null;
      },
      set(q) {
        var c;
        (c = v.value) != null && c.openai_account_quota_auto_pause && (v.value.openai_account_quota_auto_pause.default_threshold_7d = q != null && q > 0 ? q / 100 : 0);
      }
    }), Z = x(() => {
      const q = [];
      if (C.value) {
        const c = C.value.evaluation_interval_seconds;
        (!Number.isFinite(c) || c < 1 || c > 86400) && q.push(s("admin.ops.runtime.validation.evalIntervalRange"));
      }
      if (v.value) {
        const { error_log_retention_days: c, minute_metrics_retention_days: d, hourly_metrics_retention_days: j } = v.value.data_retention;
        (c < 0 || c > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange")), (d < 0 || d > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange")), (j < 0 || j > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange"));
        const { default_threshold_5h: F, default_threshold_7d: D } = v.value.openai_account_quota_auto_pause;
        (F < 0 || F > 1 || D < 0 || D > 1) && q.push(s("admin.ops.settings.validation.openaiQuotaAutoPauseRange"));
      }
      return b.value.sla_percent_min != null && (b.value.sla_percent_min < 0 || b.value.sla_percent_min > 100) && q.push(s("admin.ops.settings.validation.slaMinPercentRange")), b.value.ttft_p99_ms_max != null && b.value.ttft_p99_ms_max < 0 && q.push(s("admin.ops.settings.validation.ttftP99MaxRange")), b.value.request_error_rate_percent_max != null && (b.value.request_error_rate_percent_max < 0 || b.value.request_error_rate_percent_max > 100) && q.push(s("admin.ops.settings.validation.requestErrorRateMaxRange")), b.value.upstream_error_rate_percent_max != null && (b.value.upstream_error_rate_percent_max < 0 || b.value.upstream_error_rate_percent_max > 100) && q.push(s("admin.ops.settings.validation.upstreamErrorRateMaxRange")), { valid: q.length === 0, errors: q };
    });
    async function Y() {
      var q, c, d, j;
      if (!Z.value.valid) {
        h.showError(Z.value.errors[0]);
        return;
      }
      k.value = !0;
      try {
        g.value && (g.value.alert.enabled && g.value.alert.recipients.length === 0 && (g.value.alert.enabled = !1), g.value.report.enabled && g.value.report.recipients.length === 0 && (g.value.report.enabled = !1)), await Promise.all([
          C.value ? ae.updateAlertRuntimeSettings(C.value) : Promise.resolve(),
          g.value ? ae.updateEmailNotificationConfig(g.value) : Promise.resolve(),
          v.value ? ae.updateAdvancedSettings(v.value) : Promise.resolve(),
          ae.updateMetricThresholds(b.value)
        ]), h.showSuccess(s("admin.ops.settings.saveSuccess")), V("saved"), V("close");
      } catch (F) {
        console.error("[OpsSettingsDialog] Failed to save settings", F), h.showError(((c = (q = F == null ? void 0 : F.response) == null ? void 0 : q.data) == null ? void 0 : c.message) || ((j = (d = F == null ? void 0 : F.response) == null ? void 0 : d.data) == null ? void 0 : j.detail) || s("admin.ops.settings.saveFailed"));
      } finally {
        k.value = !1;
      }
    }
    return (q, c) => (n(), de(Je, {
      show: y.show,
      title: a(s)("admin.ops.settings.title"),
      width: "extra-wide",
      onClose: c[35] || (c[35] = (d) => V("close"))
    }, {
      footer: ve(() => [
        e("div", wx, [
          e("button", {
            class: "btn btn-secondary",
            onClick: c[34] || (c[34] = (d) => V("close"))
          }, t(a(s)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: k.value || !Z.value.valid,
            onClick: Y
          }, t(k.value ? a(s)("common.saving") : a(s)("common.save")), 9, $x)
        ])
      ]),
      default: ve(() => [
        E.value ? (n(), i("div", bv, t(a(s)("common.loading")), 1)) : C.value && g.value && v.value ? (n(), i("div", kv, [
          Z.value.valid ? M("", !0) : (n(), i("div", wv, [
            e("div", $v, t(a(s)("admin.ops.settings.validation.title")), 1),
            e("ul", Cv, [
              (n(!0), i(ue, null, pe(Z.value.errors, (d) => (n(), i("li", { key: d }, t(d), 1))), 128))
            ])
          ])),
          e("div", Sv, [
            e("h4", Rv, t(a(s)("admin.ops.settings.dataCollection")), 1),
            e("div", null, [
              e("label", Tv, t(a(s)("admin.ops.settings.evaluationInterval")), 1),
              re(e("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (d) => C.value.evaluation_interval_seconds = d),
                type: "number",
                min: "1",
                max: "86400",
                class: "input"
              }, null, 512), [
                [
                  ie,
                  C.value.evaluation_interval_seconds,
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
                  "onUpdate:modelValue": c[1] || (c[1] = (d) => g.value.alert.enabled = d)
                }, null, 8, ["modelValue"])
              ]),
              g.value.alert.enabled ? (n(), i("div", Av, [
                e("label", Vv, t(a(s)("admin.ops.settings.alertRecipients")), 1),
                e("div", Fv, [
                  re(e("input", {
                    "onUpdate:modelValue": c[2] || (c[2] = (d) => A.value = d),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: c[3] || (c[3] = ss(kt((d) => f("alert"), ["prevent"]), ["enter"]))
                  }, null, 40, Ov), [
                    [ie, A.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: c[4] || (c[4] = (d) => f("alert"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", Iv, [
                  (n(!0), i(ue, null, pe(g.value.alert.recipients, (d) => (n(), i("span", {
                    key: d,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    H(t(d) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (j) => J("alert", d)
                    }, "×", 8, jv)
                  ]))), 128))
                ]),
                e("p", Pv, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              g.value.alert.enabled ? (n(), i("div", Uv, [
                e("label", Nv, t(a(s)("admin.ops.settings.minSeverity")), 1),
                U(me, {
                  modelValue: g.value.alert.min_severity,
                  "onUpdate:modelValue": c[5] || (c[5] = (d) => g.value.alert.min_severity = d),
                  options: $
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
                  "onUpdate:modelValue": c[6] || (c[6] = (d) => g.value.report.enabled = d)
                }, null, 8, ["modelValue"])
              ]),
              g.value.report.enabled ? (n(), i("div", Kv, [
                e("label", Jv, t(a(s)("admin.ops.settings.reportRecipients")), 1),
                e("div", Zv, [
                  re(e("input", {
                    "onUpdate:modelValue": c[7] || (c[7] = (d) => p.value = d),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: c[8] || (c[8] = ss(kt((d) => f("report"), ["prevent"]), ["enter"]))
                  }, null, 40, Yv), [
                    [ie, p.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: c[9] || (c[9] = (d) => f("report"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", Xv, [
                  (n(!0), i(ue, null, pe(g.value.report.recipients, (d) => (n(), i("span", {
                    key: d,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    H(t(d) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (j) => J("report", d)
                    }, "×", 8, e_)
                  ]))), 128))
                ]),
                e("p", t_, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              g.value.report.enabled ? (n(), i("div", s_, [
                e("div", a_, [
                  e("label", r_, t(a(s)("admin.ops.settings.dailySummary")), 1),
                  U(ze, {
                    modelValue: g.value.report.daily_summary_enabled,
                    "onUpdate:modelValue": c[10] || (c[10] = (d) => g.value.report.daily_summary_enabled = d)
                  }, null, 8, ["modelValue"])
                ]),
                g.value.report.daily_summary_enabled ? (n(), i("div", o_, [
                  re(e("input", {
                    "onUpdate:modelValue": c[11] || (c[11] = (d) => g.value.report.daily_summary_schedule = d),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * *"
                  }, null, 512), [
                    [ie, g.value.report.daily_summary_schedule]
                  ])
                ])) : M("", !0),
                e("div", n_, [
                  e("label", l_, t(a(s)("admin.ops.settings.weeklySummary")), 1),
                  U(ze, {
                    modelValue: g.value.report.weekly_summary_enabled,
                    "onUpdate:modelValue": c[12] || (c[12] = (d) => g.value.report.weekly_summary_enabled = d)
                  }, null, 8, ["modelValue"])
                ]),
                g.value.report.weekly_summary_enabled ? (n(), i("div", i_, [
                  re(e("input", {
                    "onUpdate:modelValue": c[13] || (c[13] = (d) => g.value.report.weekly_summary_schedule = d),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * 1"
                  }, null, 512), [
                    [ie, g.value.report.weekly_summary_schedule]
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
                  "onUpdate:modelValue": c[14] || (c[14] = (d) => b.value.sla_percent_min = d),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    ie,
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
                  "onUpdate:modelValue": c[15] || (c[15] = (d) => b.value.ttft_p99_ms_max = d),
                  type: "number",
                  min: "0",
                  step: "50",
                  class: "input"
                }, null, 512), [
                  [
                    ie,
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
                  "onUpdate:modelValue": c[16] || (c[16] = (d) => b.value.request_error_rate_percent_max = d),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    ie,
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
                  "onUpdate:modelValue": c[17] || (c[17] = (d) => b.value.upstream_error_rate_percent_max = d),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    ie,
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
                    "onUpdate:modelValue": c[18] || (c[18] = (d) => v.value.data_retention.cleanup_enabled = d)
                  }, null, 8, ["modelValue"])
                ]),
                v.value.data_retention.cleanup_enabled ? (n(), i("div", T_, [
                  e("label", D_, t(a(s)("admin.ops.settings.cleanupSchedule")), 1),
                  re(e("input", {
                    "onUpdate:modelValue": c[19] || (c[19] = (d) => v.value.data_retention.cleanup_schedule = d),
                    type: "text",
                    class: "input",
                    placeholder: "0 2 * * *"
                  }, null, 512), [
                    [ie, v.value.data_retention.cleanup_schedule]
                  ]),
                  e("p", E_, t(a(s)("admin.ops.settings.cleanupScheduleHint")), 1)
                ])) : M("", !0),
                e("div", q_, [
                  e("div", null, [
                    e("label", L_, t(a(s)("admin.ops.settings.errorLogRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": c[20] || (c[20] = (d) => v.value.data_retention.error_log_retention_days = d),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        ie,
                        v.value.data_retention.error_log_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", z_, t(a(s)("admin.ops.settings.minuteMetricsRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": c[21] || (c[21] = (d) => v.value.data_retention.minute_metrics_retention_days = d),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        ie,
                        v.value.data_retention.minute_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", M_, t(a(s)("admin.ops.settings.hourlyMetricsRetentionDays")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": c[22] || (c[22] = (d) => v.value.data_retention.hourly_metrics_retention_days = d),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        ie,
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
                    "onUpdate:modelValue": c[23] || (c[23] = (d) => v.value.aggregation.aggregation_enabled = d)
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
                      "onUpdate:modelValue": c[24] || (c[24] = (d) => oe.value = d),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-5h"
                    }, null, 512), [
                      [
                        ie,
                        oe.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", G_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseDefault7d")), 1),
                    re(e("input", {
                      "onUpdate:modelValue": c[25] || (c[25] = (d) => ee.value = d),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-7d"
                    }, null, 512), [
                      [
                        ie,
                        ee.value,
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
                    "onUpdate:modelValue": c[26] || (c[26] = (d) => v.value.ignore_count_tokens_errors = d)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", X_, [
                  e("div", null, [
                    e("label", ex, t(a(s)("admin.ops.settings.ignoreContextCanceled")), 1),
                    e("p", tx, t(a(s)("admin.ops.settings.ignoreContextCanceledHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_context_canceled,
                    "onUpdate:modelValue": c[27] || (c[27] = (d) => v.value.ignore_context_canceled = d)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", sx, [
                  e("div", null, [
                    e("label", ax, t(a(s)("admin.ops.settings.ignoreNoAvailableAccounts")), 1),
                    e("p", rx, t(a(s)("admin.ops.settings.ignoreNoAvailableAccountsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_no_available_accounts,
                    "onUpdate:modelValue": c[28] || (c[28] = (d) => v.value.ignore_no_available_accounts = d)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ox, [
                  e("div", null, [
                    e("label", nx, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrors")), 1),
                    e("p", lx, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrorsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.ignore_insufficient_balance_errors,
                    "onUpdate:modelValue": c[29] || (c[29] = (d) => v.value.ignore_insufficient_balance_errors = d)
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
                    "onUpdate:modelValue": c[30] || (c[30] = (d) => v.value.auto_refresh_enabled = d)
                  }, null, 8, ["modelValue"])
                ]),
                v.value.auto_refresh_enabled ? (n(), i("div", mx, [
                  e("label", gx, t(a(s)("admin.ops.settings.refreshInterval")), 1),
                  U(me, {
                    modelValue: v.value.auto_refresh_interval_seconds,
                    "onUpdate:modelValue": c[31] || (c[31] = (d) => v.value.auto_refresh_interval_seconds = d),
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
                    "onUpdate:modelValue": c[32] || (c[32] = (d) => v.value.display_alert_events = d)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", hx, [
                  e("div", null, [
                    e("label", bx, t(a(s)("admin.ops.settings.displayOpenAITokenStats")), 1),
                    e("p", kx, t(a(s)("admin.ops.settings.displayOpenAITokenStatsHint")), 1)
                  ]),
                  U(ze, {
                    modelValue: v.value.display_openai_token_stats,
                    "onUpdate:modelValue": c[33] || (c[33] = (d) => v.value.display_openai_token_stats = d)
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
    const { t: o } = ye(), s = st(), h = Dt("(min-width: 768px)"), r = S(!1), V = S([]);
    async function E() {
      var N, _;
      r.value = !0;
      try {
        V.value = await ae.listAlertRules();
      } catch (m) {
        console.error("[OpsAlertRulesCard] Failed to load rules", m), s.showError(((_ = (N = m == null ? void 0 : m.response) == null ? void 0 : N.data) == null ? void 0 : _.detail) || o("admin.ops.alertRules.loadFailed")), V.value = [];
      } finally {
        r.value = !1;
      }
    }
    Ct(() => {
      E(), $();
    });
    const k = x(() => [...V.value].sort((N, _) => (_.id || 0) - (N.id || 0))), C = S(!1), g = S(!1), v = S(null), b = S(null), B = /* @__PURE__ */ new Set([
      "group_available_accounts",
      "group_available_ratio",
      "group_rate_limit_ratio"
    ]);
    function A(N) {
      if (N == null || typeof N == "boolean") return null;
      const _ = typeof N == "number" ? N : Number.parseInt(String(N), 10);
      return Number.isFinite(_) && _ > 0 ? _ : null;
    }
    const p = S([]);
    async function $() {
      try {
        const N = await At.groups.getAll();
        p.value = N.map((_) => ({ value: _.id, label: _.name }));
      } catch (N) {
        console.error("[OpsAlertRulesCard] Failed to load groups", N), p.value = [];
      }
    }
    const T = x(() => {
      var _;
      const N = (_ = b.value) == null ? void 0 : _.metric_type;
      return N ? B.has(N) : !1;
    }), f = x({
      get() {
        var N, _;
        return A((_ = (N = b.value) == null ? void 0 : N.filters) == null ? void 0 : _.group_id);
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
    }), J = x(() => T.value ? p.value : [{ value: null, label: o("admin.ops.alertRules.form.allGroups") }, ...p.value]), oe = x(() => [
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
    ]), ee = x(() => {
      var _;
      const N = (_ = b.value) == null ? void 0 : _.metric_type;
      return N ? oe.value.find((m) => m.type === N) ?? null : null;
    }), Z = x(() => {
      const N = (_) => {
        const m = oe.value.filter((le) => le.group === _);
        return m.length === 0 ? [] : [
          {
            value: `__group__${_}`,
            label: o(`admin.ops.alertRules.metricGroups.${_}`),
            disabled: !0,
            kind: "group"
          },
          ...m.map((le) => ({ value: le.type, label: le.label }))
        ];
      };
      return [...N("system"), ...N("group"), ...N("account")];
    }), Y = x(() => [">", ">=", "<", "<=", "==", "!="].map((_) => ({ value: _, label: _ }))), q = x(() => ["P0", "P1", "P2", "P3"].map((_) => ({ value: _, label: _ }))), c = x(() => [1, 5, 60].map((_) => ({ value: _, label: `${_}m` })));
    function d() {
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
    function j() {
      v.value = null, b.value = d(), C.value = !0;
    }
    function F(N) {
      v.value = N.id ?? null, b.value = JSON.parse(JSON.stringify(N)), C.value = !0;
    }
    const D = x(() => {
      var m;
      const N = [], _ = b.value;
      return _ ? ((!_.name || !_.name.trim()) && N.push(o("admin.ops.alertRules.validation.nameRequired")), _.metric_type || N.push(o("admin.ops.alertRules.validation.metricRequired")), B.has(_.metric_type) && !A((m = _.filters) == null ? void 0 : m.group_id) && N.push(o("admin.ops.alertRules.validation.groupIdRequired")), _.operator || N.push(o("admin.ops.alertRules.validation.operatorRequired")), typeof _.threshold == "number" && Number.isFinite(_.threshold) || N.push(o("admin.ops.alertRules.validation.thresholdRequired")), typeof _.window_minutes == "number" && Number.isFinite(_.window_minutes) && [1, 5, 60].includes(_.window_minutes) || N.push(o("admin.ops.alertRules.validation.windowRange")), typeof _.sustained_minutes == "number" && Number.isFinite(_.sustained_minutes) && _.sustained_minutes >= 1 && _.sustained_minutes <= 1440 || N.push(o("admin.ops.alertRules.validation.sustainedRange")), typeof _.cooldown_minutes == "number" && Number.isFinite(_.cooldown_minutes) && _.cooldown_minutes >= 0 && _.cooldown_minutes <= 1440 || N.push(o("admin.ops.alertRules.validation.cooldownRange")), { valid: N.length === 0, errors: N }) : { valid: !0, errors: N };
    });
    async function R() {
      var N, _;
      if (b.value) {
        if (!D.value.valid) {
          s.showError(D.value.errors[0] || o("admin.ops.alertRules.validation.invalid"));
          return;
        }
        g.value = !0;
        try {
          v.value ? await ae.updateAlertRule(v.value, b.value) : await ae.createAlertRule(b.value), C.value = !1, b.value = null, v.value = null, await E(), s.showSuccess(o("admin.ops.alertRules.saveSuccess"));
        } catch (m) {
          console.error("[OpsAlertRulesCard] Failed to save rule", m), s.showError(((_ = (N = m == null ? void 0 : m.response) == null ? void 0 : N.data) == null ? void 0 : _.detail) || o("admin.ops.alertRules.saveFailed"));
        } finally {
          g.value = !1;
        }
      }
    }
    const O = S(!1), W = S(null);
    function ce(N) {
      W.value = N, O.value = !0;
    }
    async function he() {
      var N, _, m;
      if ((N = W.value) != null && N.id)
        try {
          await ae.deleteAlertRule(W.value.id), O.value = !1, W.value = null, await E(), s.showSuccess(o("admin.ops.alertRules.deleteSuccess"));
        } catch (L) {
          console.error("[OpsAlertRulesCard] Failed to delete rule", L), s.showError(((m = (_ = L == null ? void 0 : L.response) == null ? void 0 : _.data) == null ? void 0 : m.detail) || o("admin.ops.alertRules.deleteFailed"));
        }
    }
    function _e() {
      O.value = !1, W.value = null;
    }
    return (N, _) => (n(), i("div", Sx, [
      e("div", Rx, [
        e("div", null, [
          e("h3", Tx, t(a(o)("admin.ops.alertRules.title")), 1),
          e("p", Dx, t(a(o)("admin.ops.alertRules.description")), 1)
        ]),
        e("div", Ex, [
          e("button", {
            class: "btn btn-sm btn-primary",
            disabled: r.value,
            onClick: j
          }, t(a(o)("admin.ops.alertRules.create")), 9, qx),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: E
          }, [
            (n(), i("svg", {
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
      r.value ? (n(), i("div", zx, t(a(o)("admin.ops.alertRules.loading")), 1)) : k.value.length === 0 ? (n(), i("div", Mx, t(a(o)("admin.ops.alertRules.empty")), 1)) : (n(), i("div", Ax, [
        e("div", Vx, [
          a(h) ? (n(), i("table", Xx, [
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
              (n(!0), i(ue, null, pe(k.value, (m) => (n(), i("tr", {
                key: m.id,
                class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
              }, [
                e("td", lf, [
                  e("div", df, t(m.name), 1),
                  m.description ? (n(), i("div", uf, t(m.description), 1)) : M("", !0),
                  m.updated_at ? (n(), i("div", cf, t(a(Ge)(m.updated_at)), 1)) : M("", !0)
                ]),
                e("td", pf, [
                  e("span", mf, t(m.metric_type), 1),
                  e("span", gf, t(m.operator), 1),
                  e("span", vf, t(m.threshold), 1)
                ]),
                e("td", _f, t(m.severity), 1),
                e("td", xf, t(m.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("td", ff, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (L) => F(m)
                  }, t(a(o)("common.edit")), 9, yf),
                  e("button", {
                    class: "ml-2 btn btn-sm btn-danger",
                    onClick: (L) => ce(m)
                  }, t(a(o)("common.delete")), 9, hf)
                ])
              ]))), 128))
            ])
          ])) : (n(), i("div", Fx, [
            (n(!0), i(ue, null, pe(k.value, (m) => (n(), i("div", {
              key: m.id,
              class: "space-y-2 p-4"
            }, [
              e("div", Ox, [
                e("div", Ix, [
                  e("div", jx, t(m.name), 1),
                  m.description ? (n(), i("div", Px, t(m.description), 1)) : M("", !0)
                ]),
                e("span", Ux, t(m.severity), 1)
              ]),
              e("div", Nx, [
                e("span", Hx, t(m.metric_type), 1),
                e("span", Bx, t(m.operator), 1),
                e("span", Gx, t(m.threshold), 1)
              ]),
              e("div", Qx, [
                e("span", Wx, t(m.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("div", Kx, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (L) => F(m)
                  }, t(a(o)("common.edit")), 9, Jx),
                  e("button", {
                    class: "btn btn-sm btn-danger",
                    onClick: (L) => ce(m)
                  }, t(a(o)("common.delete")), 9, Zx)
                ])
              ]),
              m.updated_at ? (n(), i("div", Yx, t(a(Ge)(m.updated_at)), 1)) : M("", !0)
            ]))), 128))
          ]))
        ])
      ])),
      U(Je, {
        show: C.value,
        title: v.value ? a(o)("admin.ops.alertRules.editTitle") : a(o)("admin.ops.alertRules.createTitle"),
        width: "wide",
        onClose: _[13] || (_[13] = (m) => C.value = !1)
      }, {
        footer: ve(() => [
          e("div", Gf, [
            e("button", {
              class: "btn btn-secondary",
              disabled: g.value,
              onClick: _[12] || (_[12] = (m) => C.value = !1)
            }, t(a(o)("common.cancel")), 9, Qf),
            e("button", {
              class: "btn btn-primary",
              disabled: g.value,
              onClick: R
            }, t(g.value ? a(o)("common.saving") : a(o)("common.save")), 9, Wf)
          ])
        ]),
        default: ve(() => [
          e("div", bf, [
            D.value.valid ? M("", !0) : (n(), i("div", kf, [
              e("div", wf, t(a(o)("admin.ops.alertRules.validation.title")), 1),
              e("ul", $f, [
                (n(!0), i(ue, null, pe(D.value.errors, (m) => (n(), i("li", { key: m }, t(m), 1))), 128))
              ])
            ])),
            e("div", Cf, [
              e("div", Sf, [
                e("label", Rf, t(a(o)("admin.ops.alertRules.form.name")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[0] || (_[0] = (m) => b.value.name = m),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [ie, b.value.name]
                ])
              ]),
              e("div", Tf, [
                e("label", Df, t(a(o)("admin.ops.alertRules.form.description")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => b.value.description = m),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [ie, b.value.description]
                ])
              ]),
              e("div", null, [
                e("label", Ef, t(a(o)("admin.ops.alertRules.form.metric")), 1),
                U(me, {
                  modelValue: b.value.metric_type,
                  "onUpdate:modelValue": _[2] || (_[2] = (m) => b.value.metric_type = m),
                  options: Z.value
                }, null, 8, ["modelValue", "options"]),
                ee.value ? (n(), i("div", qf, [
                  e("p", null, t(ee.value.description), 1),
                  e("p", null, t(a(o)("admin.ops.alertRules.hints.recommended", {
                    operator: ee.value.recommendedOperator,
                    threshold: ee.value.recommendedThreshold,
                    unit: ee.value.unit || ""
                  })), 1)
                ])) : M("", !0)
              ]),
              e("div", null, [
                e("label", Lf, t(a(o)("admin.ops.alertRules.form.operator")), 1),
                U(me, {
                  modelValue: b.value.operator,
                  "onUpdate:modelValue": _[3] || (_[3] = (m) => b.value.operator = m),
                  options: Y.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", zf, [
                e("label", Mf, [
                  H(t(a(o)("admin.ops.alertRules.form.groupId")) + " ", 1),
                  T.value ? (n(), i("span", Af, "*")) : M("", !0)
                ]),
                U(me, {
                  modelValue: f.value,
                  "onUpdate:modelValue": _[4] || (_[4] = (m) => f.value = m),
                  options: J.value,
                  searchable: "",
                  placeholder: a(o)("admin.ops.alertRules.form.groupPlaceholder"),
                  error: T.value && !f.value
                }, null, 8, ["modelValue", "options", "placeholder", "error"]),
                e("p", Vf, t(T.value ? a(o)("admin.ops.alertRules.hints.groupRequired") : a(o)("admin.ops.alertRules.hints.groupOptional")), 1)
              ]),
              e("div", null, [
                e("label", Ff, t(a(o)("admin.ops.alertRules.form.threshold")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[5] || (_[5] = (m) => b.value.threshold = m),
                  class: "input",
                  type: "number"
                }, null, 512), [
                  [
                    ie,
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
                  "onUpdate:modelValue": _[6] || (_[6] = (m) => b.value.severity = m),
                  options: q.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", If, t(a(o)("admin.ops.alertRules.form.window")), 1),
                U(me, {
                  modelValue: b.value.window_minutes,
                  "onUpdate:modelValue": _[7] || (_[7] = (m) => b.value.window_minutes = m),
                  options: c.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", jf, t(a(o)("admin.ops.alertRules.form.sustained")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[8] || (_[8] = (m) => b.value.sustained_minutes = m),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "1440"
                }, null, 512), [
                  [
                    ie,
                    b.value.sustained_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", null, [
                e("label", Pf, t(a(o)("admin.ops.alertRules.form.cooldown")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[9] || (_[9] = (m) => b.value.cooldown_minutes = m),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "1440"
                }, null, 512), [
                  [
                    ie,
                    b.value.cooldown_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", Uf, [
                e("span", Nf, t(a(o)("admin.ops.alertRules.form.enabled")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[10] || (_[10] = (m) => b.value.enabled = m),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [wt, b.value.enabled]
                ])
              ]),
              e("div", Hf, [
                e("span", Bf, t(a(o)("admin.ops.alertRules.form.notifyEmail")), 1),
                re(e("input", {
                  "onUpdate:modelValue": _[11] || (_[11] = (m) => b.value.notify_email = m),
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
        show: O.value,
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
}, is = 5, cy = /* @__PURE__ */ xe({
  __name: "OpsDashboard",
  setup(y) {
    const o = Ts(), s = Rs(), h = st(), r = ds(), { t: V } = ye(), E = x(() => r.opsMonitoringEnabled), k = /* @__PURE__ */ new Set(["5m", "30m", "1h", "6h", "24h", "custom"]), C = /* @__PURE__ */ new Set(["auto", "raw", "preagg"]), g = S(!0), v = S(!1), b = S(""), B = S(/* @__PURE__ */ new Date()), A = S("1h"), p = S(""), $ = S(null), T = S("auto"), f = S(null), J = S(null), oe = `${is}h`, ee = is * 60 * 60 * 1e3, Z = {
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
    }, Y = S(!1), q = S(!1), c = x(() => {
      const w = o.query[Z.fullscreen];
      return w === "1" || w === "true";
    });
    function d() {
      const w = { ...o.query };
      delete w[Z.fullscreen], s.replace({ query: w });
    }
    function j() {
      const w = { ...o.query, [Z.fullscreen]: "1" };
      s.replace({ query: w });
    }
    function F(w) {
      w.key === "Escape" && c.value && d();
    }
    let D = null, R = 0;
    function O(w) {
      return !!w && typeof w == "object" && "code" in w && w.code === "ERR_CANCELED";
    }
    function W() {
      D && (D.abort(), D = null);
    }
    const ce = (w) => {
      const P = o.query[w];
      return typeof P == "string" ? P : Array.isArray(P) && typeof P[0] == "string" ? P[0] : "";
    }, he = (w) => {
      const P = ce(w);
      if (!P) return null;
      const G = Number.parseInt(P, 10);
      return Number.isFinite(G) ? G : null;
    }, _e = () => {
      const w = ce(Z.timeRange);
      w && k.has(w) && (A.value = w), p.value = ce(Z.platform) || "";
      const P = he(Z.groupId);
      $.value = typeof P == "number" && P > 0 ? P : null;
      const G = ce(Z.queryMode);
      if (G && C.has(G))
        T.value = G;
      else {
        const Le = r.opsQueryModeDefault || "auto";
        T.value = C.has(Le) ? Le : "auto";
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
      const w = { ...o.query };
      return Object.values(Z).forEach((P) => {
        delete w[P];
      }), A.value !== "1h" && (w[Z.timeRange] = A.value), p.value && (w[Z.platform] = p.value), typeof $.value == "number" && $.value > 0 && (w[Z.groupId] = String($.value)), T.value !== "auto" && (w[Z.queryMode] = T.value), w;
    }, _ = js(async () => {
      if (Y.value) return;
      const w = N(), P = o.query, G = Object.keys(w), Ne = Object.keys(P);
      if (!(G.length === Ne.length && G.every((Le) => String(P[Le] ?? "") === String(w[Le] ?? ""))))
        try {
          q.value = !0, await s.replace({ query: w });
        } finally {
          q.value = !1;
        }
    }, 250), m = S(null), L = S(null), le = S(null), Se = S(!1), Ee = S(null), qe = S(!1), Ie = S(null), K = S(!1), I = S(null), z = S(!1), te = S(null), ne = S(!1), be = S(null), ke = S(!1), Re = S(!1), Qe = S("request"), We = S(!1), Ze = S({
      title: "",
      kind: "all",
      sort: "created_at_desc"
    }), je = S(!1), Fe = S(!1);
    _e();
    const rt = S(!0), ot = S(!1), Pe = S(!1), Xe = S(3e4), we = S(0), Te = S(0), { pause: Et, resume: vt } = Is(
      () => {
        if (Pe.value && E.value && !g.value) {
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
        const w = await ae.getAdvancedSettings();
        rt.value = w.display_alert_events, ot.value = w.display_openai_token_stats, Pe.value = w.auto_refresh_enabled, Xe.value = w.auto_refresh_interval_seconds * 1e3, we.value = w.auto_refresh_interval_seconds;
      } catch (w) {
        console.error("[OpsDashboard] Failed to load dashboard advanced settings", w), rt.value = !0, ot.value = !1, Pe.value = !1, Xe.value = 3e4, we.value = 0;
      }
    }
    function _t(w) {
      p.value = w || "", $.value = null;
    }
    function xt(w) {
      const P = Number.isFinite(w) && w > 0 ? w : null;
      $.value = P;
    }
    function nt(w) {
      const P = {
        title: V("admin.ops.requestDetails.title"),
        kind: "all",
        sort: "created_at_desc"
      };
      Ze.value = { ...P, ...w ?? {} }, Ze.value.title || (Ze.value.title = P.title), Re.value = !1, ke.value = !1, We.value = !0;
    }
    function lt(w) {
      Qe.value = w, We.value = !1, ke.value = !1, Re.value = !0;
    }
    function Ot(w) {
      typeof w == "string" && k.has(w) && (A.value = w);
    }
    function ft(w, P) {
      f.value = w, J.value = P;
    }
    async function yt() {
      await Oe(), zt(), Me();
    }
    function It(w) {
      p.value = typeof w == "string" ? w : "";
    }
    function ht(w) {
      if (w === null) {
        $.value = null;
        return;
      }
      if (typeof w == "number") {
        $.value = w > 0 ? w : null;
        return;
      }
      if (typeof w == "string") {
        const P = Number.parseInt(w, 10);
        $.value = Number.isFinite(P) && P > 0 ? P : null;
      }
    }
    function jt(w) {
      typeof w == "string" && C.has(w) && (T.value = w);
    }
    function it(w) {
      be.value = w, Re.value = !1, We.value = !1, ke.value = !0;
    }
    function Ue() {
      const w = {
        platform: p.value || void 0,
        group_id: $.value ?? void 0,
        mode: T.value
      };
      return A.value === "custom" ? f.value && J.value ? (w.start_time = f.value, w.end_time = J.value) : w.time_range = "1h" : w.time_range = A.value, w;
    }
    function qt() {
      const w = {
        platform: p.value || void 0,
        group_id: $.value ?? void 0,
        mode: T.value
      }, P = /* @__PURE__ */ new Date(), G = new Date(P.getTime() - ee);
      return w.start_time = G.toISOString(), w.end_time = P.toISOString(), w;
    }
    async function bt(w, P) {
      if (E.value)
        try {
          const G = await ae.getDashboardOverview(Ue(), { signal: P });
          if (w !== R) return;
          m.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          m.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadOverview"));
        }
    }
    async function dt(w, P) {
      if (E.value) {
        qe.value = !0;
        try {
          const G = await ae.getThroughputTrend(qt(), { signal: P });
          if (w !== R) return;
          Ee.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          Ee.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadSwitchTrend"));
        } finally {
          w === R && (qe.value = !1);
        }
      }
    }
    async function et(w, P) {
      if (E.value) {
        Se.value = !0;
        try {
          const G = await ae.getThroughputTrend(Ue(), { signal: P });
          if (w !== R) return;
          le.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          le.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadThroughputTrend"));
        } finally {
          w === R && (Se.value = !1);
        }
      }
    }
    async function Pt(w, P) {
      if (E.value) {
        Se.value = !0, z.value = !0;
        try {
          const G = await ae.getDashboardSnapshotV2(Ue(), { signal: P });
          if (w !== R) return;
          m.value = G.overview, le.value = G.throughput_trend, I.value = G.error_trend;
        } catch (G) {
          if (w !== R || O(G)) return;
          await Promise.all([
            bt(w, P),
            et(w, P),
            tt(w, P)
          ]);
        } finally {
          w === R && (Se.value = !1, z.value = !1);
        }
      }
    }
    async function Ut(w, P) {
      if (E.value) {
        K.value = !0;
        try {
          const G = await ae.getLatencyHistogram(Ue(), { signal: P });
          if (w !== R) return;
          Ie.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          Ie.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadLatencyHistogram"));
        } finally {
          w === R && (K.value = !1);
        }
      }
    }
    async function tt(w, P) {
      if (E.value) {
        z.value = !0;
        try {
          const G = await ae.getErrorTrend(Ue(), { signal: P });
          if (w !== R) return;
          I.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          I.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadErrorTrend"));
        } finally {
          w === R && (z.value = !1);
        }
      }
    }
    async function ut(w, P) {
      if (E.value) {
        ne.value = !0;
        try {
          const G = await ae.getErrorDistribution(Ue(), { signal: P });
          if (w !== R) return;
          te.value = G;
        } catch (G) {
          if (w !== R || O(G)) return;
          te.value = null, h.showError((G == null ? void 0 : G.message) || V("admin.ops.failedToLoadErrorDistribution"));
        } finally {
          w === R && (ne.value = !1);
        }
      }
    }
    async function Lt(w, P) {
      E.value && await Promise.all([
        Ut(w, P),
        ut(w, P)
      ]);
    }
    function ct(w) {
      return !!w && typeof w == "object" && "code" in w && typeof w.code == "string" && w.code === "OPS_DISABLED";
    }
    async function Me() {
      if (!E.value) return;
      W(), R += 1;
      const w = R;
      D = new AbortController(), g.value = !0, b.value = "";
      try {
        if (await Promise.all([
          Pt(w, D.signal),
          dt(w, D.signal)
        ]), w !== R) return;
        B.value = /* @__PURE__ */ new Date(), Te.value += 1, Pe.value && (we.value = Math.floor(Xe.value / 1e3)), Lt(w, D.signal);
      } catch (P) {
        ct(P) || (console.error("[ops] failed to fetch dashboard data", P), b.value = V("admin.ops.failedToLoadData"));
      } finally {
        w === R && (g.value = !1, v.value = !0);
      }
    }
    ge(
      () => [A.value, p.value, $.value, T.value],
      () => {
        Y.value || (E.value && Me(), _());
      }
    ), ge(
      () => o.query,
      () => {
        if (q.value) return;
        const w = A.value, P = p.value, G = $.value;
        Y.value = !0, _e(), Y.value = !1, (w !== A.value || P !== p.value || G !== $.value) && E.value && Me();
      }
    ), Ct(async () => {
      if (window.addEventListener("keydown", F), await r.fetch(), !r.opsMonitoringEnabled) {
        await s.replace("/admin/settings");
        return;
      }
      zt(), await Oe(), E.value && await Me(), Pe.value && vt();
    });
    async function zt() {
      try {
        const w = await ae.getMetricThresholds();
        L.value = w || null;
      } catch (w) {
        console.warn("[OpsDashboard] Failed to load thresholds", w), L.value = null;
      }
    }
    return Ss(() => {
      window.removeEventListener("keydown", F), W(), Et();
    }), ge(Pe, (w) => {
      w ? (we.value = Math.floor(Xe.value / 1e3), vt()) : (Et(), we.value = 0);
    }), ge(je, async (w) => {
      w || await Oe();
    }), (w, P) => {
      var G, Ne, Ye, Ae, Le;
      return n(), i("div", {
        class: Q([c.value ? "flex min-h-screen flex-col justify-center bg-gray-50 p-4 dark:bg-dark-950 md:p-6" : "", "space-y-6 pb-12"])
      }, [
        b.value ? (n(), i("div", Jf, t(b.value), 1)) : M("", !0),
        g.value && !v.value ? (n(), de($n, {
          key: 1,
          fullscreen: c.value
        }, null, 8, ["fullscreen"])) : E.value ? (n(), de(ln, {
          key: 2,
          overview: m.value,
          platform: p.value,
          "group-id": $.value,
          "time-range": A.value,
          "query-mode": T.value,
          loading: g.value,
          "last-updated": B.value,
          thresholds: L.value,
          "auto-refresh-enabled": Pe.value,
          "auto-refresh-countdown": we.value,
          fullscreen: c.value,
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
          onEnterFullscreen: j,
          onExitFullscreen: d
        }, null, 8, ["overview", "platform", "group-id", "time-range", "query-mode", "loading", "last-updated", "thresholds", "auto-refresh-enabled", "auto-refresh-countdown", "fullscreen", "custom-start-time", "custom-end-time"])) : M("", !0),
        E.value && !(g.value && !v.value) ? (n(), i("div", Zf, [
          e("div", Yf, [
            U(Sl, {
              "platform-filter": p.value,
              "group-id-filter": $.value,
              "refresh-token": Te.value
            }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
          ]),
          e("div", Xf, [
            U(xc, {
              points: ((G = Ee.value) == null ? void 0 : G.points) ?? [],
              loading: qe.value,
              "time-range": oe,
              fullscreen: c.value
            }, null, 8, ["points", "loading", "fullscreen"])
          ]),
          e("div", ey, [
            U(uc, {
              points: ((Ne = le.value) == null ? void 0 : Ne.points) ?? [],
              "by-platform": ((Ye = le.value) == null ? void 0 : Ye.by_platform) ?? [],
              "top-groups": ((Ae = le.value) == null ? void 0 : Ae.top_groups) ?? [],
              loading: Se.value,
              "time-range": A.value,
              fullscreen: c.value,
              onSelectPlatform: _t,
              onSelectGroup: xt,
              onOpenDetails: nt
            }, null, 8, ["points", "by-platform", "top-groups", "loading", "time-range", "fullscreen"])
          ])
        ])) : M("", !0),
        E.value && !(g.value && !v.value) ? (n(), i("div", ty, [
          U(Hu, {
            "latency-data": Ie.value,
            loading: K.value
          }, null, 8, ["latency-data", "loading"]),
          U(ad, {
            data: te.value,
            loading: ne.value,
            onOpenDetails: P[2] || (P[2] = (De) => lt("request"))
          }, null, 8, ["data", "loading"]),
          U(Fu, {
            points: ((Le = I.value) == null ? void 0 : Le.points) ?? [],
            loading: z.value,
            "time-range": A.value,
            onOpenRequestErrors: P[3] || (P[3] = (De) => lt("request")),
            onOpenUpstreamErrors: P[4] || (P[4] = (De) => lt("upstream"))
          }, null, 8, ["points", "loading", "time-range"])
        ])) : M("", !0),
        E.value && ot.value && !(g.value && !v.value) ? (n(), i("div", sy, [
          U(dm, {
            "platform-filter": p.value,
            "group-id-filter": $.value,
            "refresh-token": Te.value
          }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
        ])) : M("", !0),
        E.value && rt.value && !(g.value && !v.value) ? (n(), de(lp, { key: 6 })) : M("", !0),
        E.value && !(g.value && !v.value) ? (n(), de(Sg, {
          key: 7,
          "platform-filter": p.value,
          "refresh-token": Te.value
        }, null, 8, ["platform-filter", "refresh-token"])) : M("", !0),
        c.value ? M("", !0) : (n(), i(ue, { key: 8 }, [
          U(Cx, {
            show: je.value,
            onClose: P[5] || (P[5] = (De) => je.value = !1),
            onSaved: yt
          }, null, 8, ["show"]),
          U(Je, {
            show: Fe.value,
            title: a(V)("admin.ops.alertRules.title"),
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
            "time-range": A.value,
            "custom-start-time": f.value,
            "custom-end-time": J.value,
            platform: p.value,
            "group-id": $.value,
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
            "time-range": A.value,
            preset: Ze.value,
            platform: p.value,
            "group-id": $.value,
            onOpenErrorDetail: it
          }, null, 8, ["modelValue", "time-range", "preset", "platform", "group-id"])
        ], 64))
      ], 2);
    };
  }
});
export {
  cy as default
};
