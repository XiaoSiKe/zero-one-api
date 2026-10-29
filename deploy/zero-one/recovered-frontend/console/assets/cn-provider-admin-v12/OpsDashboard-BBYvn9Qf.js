import { d as fe, c as ye, w as xe, b as St, f as i, q as K, g as e, l as N, h as t, i as a, F as le, n as M, j as U, p as ce, B as ne, x as vt, E as ve, s as v, a as S, e as n, m as ae, v as de, _ as Oe, O as $s, y as Cs, u as nt, r as Ht, z as wt, J as Ss, H as $t, A as ss, o as Rs, Z as Ts, $ as Ds } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { _ as et } from "./BaseDialog.vue_vue_type_script_setup_true_lang-DwR6Fyok.js";
import { b as cs, S as me, o as se, C as Es, c as qs, _ as Ls } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-d3KA2Dbp.js";
import { u as ps } from "./adminSettings-BuVJozq4.js";
import { _ as _e } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-oR5Ce-E_.js";
import { m as zs, k as Ue, f as as, b as Ms } from "./format-ArXZdH6f.js";
import { C as Rt, A as As, p as Tt, b as Dt, D as Is, e as Qt, d as Wt, L as At, P as Kt, c as It, i as Jt, f as Zt, B as Vs, j as Fs, k as Et, a as Os, u as js } from "./index-BsT8PIkr.js";
import { _ as lt } from "./EmptyState.vue_vue_type_script_setup_true_lang-tCnmsjLY.js";
import { D as Ps, P as Yt } from "./Pagination-B284xh7f.js";
import { a as Us } from "./apiError-i2TfMBqu.js";
import { u as Ns } from "./useClipboard-B4DY1ZMB.js";
import { _ as qe } from "./Toggle.vue_vue_type_script_setup_true_lang-cjeor373.js";
function Bs(b) {
  const o = {
    P0: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    P1: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P2: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P3: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
  };
  return o[String(b || "")] || o.P3;
}
function Ke(b) {
  const o = new Date(b);
  return Number.isNaN(o.getTime()) ? "" : `${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")} ${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}:${String(o.getSeconds()).padStart(2, "0")}`;
}
function Ct(b) {
  return b.reduce((o, s) => {
    const k = typeof s == "number" && Number.isFinite(s) ? s : 0;
    return o + k;
  }, 0);
}
function Gt(b) {
  const o = (b || "").trim();
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
function Xt(b, o) {
  if (!b) return "";
  const s = new Date(b);
  return Number.isNaN(s.getTime()) ? "" : Gt(o) >= 1440 ? `${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")} ${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}` : `${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}`;
}
function rs(b) {
  return typeof b != "number" || !Number.isFinite(b) || b < 0 ? "-" : b === 0 ? "0 MB" : zs(b * 1024 * 1024, 1);
}
const Hs = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, Gs = { class: "flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Qs = {
  key: 0,
  class: "mt-1 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400"
}, Ws = ["title"], Ks = { class: "relative flex h-2 w-2" }, Js = { class: "flex flex-wrap items-center gap-3" }, Zs = ["disabled", "title"], Ys = {
  key: 3,
  class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block"
}, Xs = ["title"], ea = { class: "hidden sm:inline" }, ta = ["title"], sa = { class: "hidden sm:inline" }, aa = ["title"], ra = {
  key: 0,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, oa = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, na = { class: "group relative flex cursor-pointer flex-col items-center justify-center rounded-xl py-2 transition-all hover:bg-white/60 dark:hover:bg-dark-800/60 md:border-r md:border-gray-200 md:pr-6 dark:md:border-dark-700" }, la = { class: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 md:left-full md:top-0 md:ml-2 md:mt-0 md:translate-x-0" }, ia = { class: "rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-dark-800 dark:ring-white/10" }, da = { class: "mb-3 border-b border-gray-100 pb-2 text-sm font-bold text-gray-900 dark:border-dark-700 dark:text-white flex items-center gap-2" }, ua = { class: "space-y-3" }, ca = { class: "mt-0.5 shrink-0" }, pa = {
  key: 0,
  class: "h-4 w-4 text-red-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ma = {
  key: 1,
  class: "h-4 w-4 text-zo-alert-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ga = {
  key: 2,
  class: "h-4 w-4 text-blue-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, va = { class: "flex-1" }, xa = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, _a = { class: "mt-0.5 text-[11px] text-gray-500 dark:text-gray-400" }, fa = {
  key: 0,
  class: "mt-1 text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1"
}, ya = { class: "mt-3 border-t border-gray-100 pt-2 text-[10px] text-gray-400 dark:border-dark-700" }, ha = { class: "relative flex items-center justify-center" }, ba = ["width", "height"], ka = ["cx", "cy", "r", "stroke-width"], wa = ["cx", "cy", "r", "stroke-width", "stroke", "stroke-dasharray", "stroke-dashoffset"], $a = { class: "absolute flex flex-col items-center" }, Ca = {
  key: 0,
  class: "mt-4 text-center"
}, Sa = { class: "flex items-center justify-center gap-1 text-xs font-medium text-gray-500" }, Ra = { class: "flex h-full flex-col justify-center py-2" }, Ta = { class: "mb-3 flex flex-wrap items-center justify-between gap-2" }, Da = { class: "flex items-center gap-2" }, Ea = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, qa = { class: "flex flex-wrap gap-1" }, La = ["onClick"], za = { class: "mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-2" }, Ma = { class: "flex items-baseline gap-1.5" }, Aa = { class: "flex items-baseline gap-1.5" }, Ia = { class: "grid grid-cols-2 gap-3" }, Va = { class: "flex items-baseline gap-1.5" }, Fa = { class: "font-black text-gray-900 dark:text-white" }, Oa = { class: "flex items-baseline gap-1.5" }, ja = { class: "font-black text-gray-900 dark:text-white" }, Pa = { class: "text-xs" }, Ua = { class: "flex items-baseline gap-1.5" }, Na = { class: "font-black text-gray-900 dark:text-white" }, Ba = { class: "flex items-baseline gap-1.5" }, Ha = { class: "font-black text-gray-900 dark:text-white" }, Ga = { class: "text-xs" }, Qa = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3" }, Wa = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "1" }
}, Ka = { class: "flex items-center justify-between" }, Ja = { class: "flex items-center gap-1" }, Za = { class: "text-[10px] font-bold uppercase text-gray-400" }, Ya = { class: "mt-2 space-y-2 text-xs" }, Xa = { class: "flex justify-between" }, er = { class: "text-gray-500" }, tr = { class: "font-bold text-gray-900 dark:text-white" }, sr = { class: "flex justify-between" }, ar = { class: "text-gray-500" }, rr = { class: "font-bold text-gray-900 dark:text-white" }, or = { class: "flex justify-between" }, nr = { class: "text-gray-500" }, lr = { class: "font-bold text-gray-900 dark:text-white" }, ir = { class: "flex justify-between" }, dr = { class: "text-gray-500" }, ur = { class: "font-bold text-gray-900 dark:text-white" }, cr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "2" }
}, pr = { class: "flex items-center justify-between" }, mr = { class: "flex items-center gap-2" }, gr = { class: "text-[10px] font-bold uppercase text-gray-400" }, vr = { class: "mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, xr = { class: "mt-3 text-xs" }, _r = { class: "flex justify-between" }, fr = { class: "text-gray-500" }, yr = { class: "font-bold text-gray-900 dark:text-white" }, hr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "4" }
}, br = { class: "flex items-center justify-between" }, kr = { class: "flex items-center gap-1" }, wr = { class: "text-[10px] font-bold uppercase text-gray-400" }, $r = { class: "mt-2 flex items-baseline gap-2" }, Cr = { class: "text-3xl font-black text-gray-900 dark:text-white" }, Sr = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, Rr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Tr = { class: "font-bold text-gray-900 dark:text-white" }, Dr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Er = { class: "font-bold text-gray-900 dark:text-white" }, qr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Lr = { class: "font-bold text-gray-900 dark:text-white" }, zr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Mr = { class: "font-bold text-gray-900 dark:text-white" }, Ar = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Ir = { class: "font-bold text-gray-900 dark:text-white" }, Vr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "5" }
}, Fr = { class: "flex items-center justify-between" }, Or = { class: "flex items-center gap-1" }, jr = { class: "mt-2 flex items-baseline gap-2" }, Pr = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, Ur = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Nr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Br = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Hr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Gr = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Qr = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "3" }
}, Wr = { class: "flex items-center justify-between" }, Kr = { class: "flex items-center gap-1" }, Jr = { class: "text-[10px] font-bold uppercase text-gray-400" }, Zr = { class: "mt-3 space-y-1 text-xs" }, Yr = { class: "flex justify-between" }, Xr = { class: "text-gray-500" }, eo = { class: "font-bold text-gray-900 dark:text-white" }, to = { class: "flex justify-between" }, so = { class: "text-gray-500" }, ao = { class: "font-bold text-gray-900 dark:text-white" }, ro = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "6" }
}, oo = { class: "flex items-center justify-between" }, no = { class: "flex items-center gap-1" }, lo = { class: "text-[10px] font-bold uppercase text-gray-400" }, io = { class: "mt-3 space-y-1 text-xs" }, uo = { class: "flex justify-between" }, co = { class: "text-gray-500" }, po = { class: "font-bold text-gray-900 dark:text-white" }, mo = { class: "flex justify-between" }, go = { class: "font-bold text-gray-900 dark:text-white" }, vo = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  "data-testid": "output-tps-card",
  style: { order: "7" }
}, xo = { class: "flex items-center gap-1" }, _o = { class: "text-[10px] font-bold uppercase text-gray-400" }, fo = { class: "mt-2 flex flex-wrap items-baseline gap-2" }, yo = {
  class: "text-3xl font-black text-gray-900 dark:text-white",
  "data-testid": "output-tps-p50"
}, ho = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, bo = { class: "text-gray-500" }, ko = ["data-testid"], wo = {
  class: "mt-2 text-xs text-gray-500",
  "data-testid": "output-tps-samples"
}, $o = {
  key: 1,
  class: "mt-2 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Co = { class: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" }, So = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Ro = { class: "flex items-center gap-1" }, To = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Do = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Eo = { class: "flex items-center gap-1" }, qo = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Lo = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, zo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Mo = { class: "flex items-center gap-1" }, Ao = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Io = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Vo = { key: 0 }, Fo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Oo = { class: "flex items-center gap-1" }, jo = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Po = { key: 0 }, Uo = { key: 1 }, No = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Bo = { class: "flex items-center gap-1" }, Ho = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Go = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Qo = { class: "font-mono" }, Wo = { key: 0 }, Ko = { class: "font-mono" }, Jo = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Zo = { class: "flex items-center justify-between gap-2" }, Yo = { class: "flex items-center gap-1" }, Xo = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, en = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, tn = { class: "font-mono" }, sn = { class: "font-mono" }, an = {
  key: 0,
  class: "text-sm text-gray-500 dark:text-gray-400"
}, rn = {
  key: 1,
  class: "space-y-3"
}, on = { class: "flex items-center justify-between gap-3" }, nn = { class: "truncate text-sm font-semibold text-gray-900 dark:text-white" }, ln = { class: "flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400" }, dn = {
  key: 0,
  class: "font-mono"
}, un = { class: "mt-2 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, cn = { class: "font-mono" }, pn = { class: "font-mono" }, mn = { class: "font-mono" }, gn = {
  key: 0,
  class: "mt-3 rounded-lg bg-rose-50 p-2 text-xs text-rose-700 dark:bg-rose-900/20 dark:text-rose-300"
}, vn = { class: "space-y-4" }, xn = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, _n = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, fn = { class: "flex justify-end gap-3 pt-2" }, os = 8e3, ns = 15e3, yn = /* @__PURE__ */ fe({
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
  setup(b, { emit: o }) {
    const s = b, k = o, { t: r } = ye(), V = ps(), D = S("1min"), w = v(() => s.overview ?? null), R = v(() => {
      var u;
      return ((u = w.value) == null ? void 0 : u.system_metrics) ?? null;
    }), L = {
      "1min": 1,
      "5min": 5,
      "30min": 30,
      "1h": 60
    }, m = {
      "5m": 5,
      "30m": 30,
      "1h": 60,
      "6h": 360,
      "24h": 1440
    }, f = v(() => {
      const u = m[s.timeRange] ?? 60;
      return ["1min", "5min", "30min", "1h"].filter((l) => L[l] <= u);
    });
    xe(
      () => s.timeRange,
      () => {
        D.value = "1min", p();
      }
    );
    const j = S(!1), O = S(""), c = S("");
    function $(u, l) {
      const Y = new Date(u), $e = new Date(l), We = (Ve) => {
        const Ye = String(Ve.getMonth() + 1).padStart(2, "0"), te = String(Ve.getDate()).padStart(2, "0"), Fe = String(Ve.getHours()).padStart(2, "0"), Xe = String(Ve.getMinutes()).padStart(2, "0");
        return `${Ye}-${te} ${Fe}:${Xe}`;
      };
      return `${We(Y)} ~ ${We($e)}`;
    }
    const E = S([]), h = v(() => [
      { value: "", label: r("common.all") },
      ...Es
    ]), Z = v(() => [
      { value: "5m", label: r("admin.ops.timeRange.5m") },
      { value: "30m", label: r("admin.ops.timeRange.30m") },
      { value: "1h", label: r("admin.ops.timeRange.1h") },
      { value: "6h", label: r("admin.ops.timeRange.6h") },
      { value: "24h", label: r("admin.ops.timeRange.24h") },
      {
        value: "custom",
        label: s.timeRange === "custom" && s.customStartTime && s.customEndTime ? `${r("admin.ops.timeRange.custom")} (${$(s.customStartTime, s.customEndTime)})` : r("admin.ops.timeRange.custom")
      }
    ]), re = v(() => {
      const u = s.platform ? E.value.filter((l) => l.platform === s.platform) : E.value;
      return [{ value: null, label: r("common.all") }, ...u.map((l) => ({ value: l.id, label: l.name }))];
    });
    xe(
      () => s.platform,
      (u) => {
        if (!u) return;
        const l = E.value.find((Y) => Y.id === s.groupId);
        l && l.platform !== u && k("update:group", null);
      }
    ), St(async () => {
      try {
        const u = await cs.groups.getAll();
        E.value = u.map((l) => ({ id: l.id, name: l.name, platform: l.platform }));
      } catch (u) {
        console.error("[OpsDashboardHeader] Failed to load groups", u), E.value = [];
      }
    });
    function X(u) {
      k("update:platform", String(u || ""));
    }
    function J(u) {
      if (u === null || u === "" || typeof u == "boolean") {
        k("update:group", null);
        return;
      }
      const l = typeof u == "number" ? u : Number.parseInt(String(u), 10);
      k("update:group", Number.isFinite(l) && l > 0 ? l : null);
    }
    function ue(u) {
      const l = String(u || "1h");
      if (l === "custom") {
        const Y = /* @__PURE__ */ new Date(), $e = new Date(Y.getTime() - 3600 * 1e3);
        O.value = as($e.getTime() / 1e3), c.value = as(Y.getTime() / 1e3), j.value = !0;
      } else
        k("update:timeRange", l);
    }
    function H() {
      if (!O.value || !c.value) return;
      const u = new Date(O.value).toISOString(), l = new Date(c.value).toISOString();
      k("update:customTimeRange", u, l), k("update:timeRange", "custom"), j.value = !1;
    }
    function q() {
      j.value = !1;
    }
    function d(u) {
      k("openRequestDetails", u);
    }
    function _(u) {
      k("openErrorDetails", u);
    }
    function F(u) {
      var $e;
      if (u == null) return "normal";
      const l = ($e = s.thresholds) == null ? void 0 : $e.sla_percent_min;
      if (l == null) return "normal";
      const Y = 0.1;
      return u < l ? "critical" : u < l + Y ? "warning" : "normal";
    }
    function x(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.ttft_p99_ms_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function y(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.request_error_rate_percent_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function T(u) {
      var Y;
      if (u == null) return "normal";
      const l = (Y = s.thresholds) == null ? void 0 : Y.upstream_error_rate_percent_max;
      return l == null ? "normal" : u >= l ? "critical" : u >= l * 0.8 ? "warning" : "normal";
    }
    function G(u) {
      switch (u) {
        case "critical":
          return "text-red-600 dark:text-red-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-zo-signal-600 dark:text-zo-signal-400";
      }
    }
    const pe = v(() => {
      var u;
      return Ue(((u = w.value) == null ? void 0 : u.request_count_total) ?? 0);
    }), he = v(() => {
      var u;
      return Ue(((u = w.value) == null ? void 0 : u.token_consumed) ?? 0);
    }), ge = S(null), B = S(!1);
    function g() {
      const u = (/* @__PURE__ */ new Date()).toISOString();
      return {
        window: D.value,
        start_time: u,
        end_time: u,
        platform: s.platform,
        group_id: s.groupId,
        qps: { current: 0, peak: 0, avg: 0 },
        tps: { current: 0, peak: 0, avg: 0 }
      };
    }
    async function p() {
      if (!B.value) {
        if (!V.opsRealtimeMonitoringEnabled) {
          ge.value = g();
          return;
        }
        B.value = !0;
        try {
          const u = await se.getRealtimeTrafficSummary(D.value, s.platform, s.groupId);
          u && u.enabled === !1 && V.setOpsRealtimeMonitoringEnabledLocal(!1), ge.value = (u == null ? void 0 : u.summary) ?? null;
        } catch (u) {
          console.error("[OpsDashboardHeader] Failed to load realtime traffic summary", u), ge.value = null;
        } finally {
          B.value = !1;
        }
      }
    }
    xe(
      () => [D.value, s.platform, s.groupId],
      () => {
        p();
      },
      { immediate: !0 }
    ), xe(
      () => V.opsRealtimeMonitoringEnabled,
      (u) => {
        u ? p() : ge.value = g();
      },
      { immediate: !0 }
    ), xe(
      () => [s.autoRefreshEnabled, s.autoRefreshCountdown, s.loading],
      ([u, l, Y]) => {
        u && (Y || l === 0 && p());
      }
    );
    const z = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.qps) == null ? void 0 : Y.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), oe = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.tps) == null ? void 0 : Y.current;
      return typeof u == "number" && Number.isFinite(u) ? u : 0;
    }), Le = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.qps) == null ? void 0 : Y.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), ze = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.tps) == null ? void 0 : Y.peak;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Te = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.qps) == null ? void 0 : Y.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), De = v(() => {
      var l, Y;
      const u = (Y = (l = ge.value) == null ? void 0 : l.tps) == null ? void 0 : Y.avg;
      return typeof u == "number" && Number.isFinite(u) ? u.toFixed(1) : "-";
    }), Ne = v(() => {
      var l, Y;
      const u = (Y = (l = w.value) == null ? void 0 : l.qps) == null ? void 0 : Y.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), Q = v(() => {
      var l, Y;
      const u = (Y = (l = w.value) == null ? void 0 : l.tps) == null ? void 0 : Y.avg;
      return typeof u != "number" ? "-" : u.toFixed(1);
    }), A = v(() => {
      var l, Y;
      const u = (l = w.value) == null ? void 0 : l.sla;
      return typeof u != "number" || (((Y = w.value) == null ? void 0 : Y.request_count_sla) ?? 0) <= 0 ? null : u * 100;
    }), I = v(() => {
      var l;
      const u = (l = w.value) == null ? void 0 : l.error_rate;
      return typeof u != "number" ? null : u * 100;
    }), ee = v(() => {
      var l;
      const u = (l = w.value) == null ? void 0 : l.upstream_error_rate;
      return typeof u != "number" ? null : u * 100;
    }), ie = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.p99_ms) ?? null;
    }), be = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.p95_ms) ?? null;
    }), ke = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.p90_ms) ?? null;
    }), Me = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.p50_ms) ?? null;
    }), Be = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.avg_ms) ?? null;
    }), tt = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.duration) == null ? void 0 : l.max_ms) ?? null;
    }), Je = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p99_ms) ?? null;
    }), je = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p95_ms) ?? null;
    }), Ze = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p90_ms) ?? null;
    }), it = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.p50_ms) ?? null;
    }), He = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.avg_ms) ?? null;
    }), at = v(() => {
      var u, l;
      return ((l = (u = w.value) == null ? void 0 : u.ttft) == null ? void 0 : l.max_ms) ?? null;
    }), we = v(() => {
      var $e;
      const u = w.value;
      if (!u) return !0;
      const l = ($e = u.qps) == null ? void 0 : $e.current, Y = u.error_rate ?? 0;
      return (l ?? 0) === 0 && Y === 0;
    }), Se = v(() => {
      var l;
      const u = (l = w.value) == null ? void 0 : l.health_score;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), qt = v(() => {
      if (we.value) return "#9ca3af";
      const u = Se.value;
      return u == null ? "#9ca3af" : u >= 90 ? "#3b82f6" : u >= 60 ? "#a78bfa" : "#ef4444";
    }), xt = v(() => {
      if (we.value) return "text-gray-400";
      const u = Se.value;
      return u == null ? "text-gray-400" : u >= 90 ? "text-zo-signal-500" : u >= 60 ? "text-zo-alert-500" : "text-red-500";
    }), Pe = v(() => s.fullscreen ? 140 : 100), _t = v(() => s.fullscreen ? 10 : 8), ft = v(() => (Pe.value - _t.value) / 2), dt = v(() => 2 * Math.PI * ft.value), ut = v(() => {
      if (we.value || Se.value == null) return 0;
      const u = Math.max(0, Math.min(100, Se.value));
      return dt.value - u / 100 * dt.value;
    }), Vt = v(() => {
      var te;
      const u = w.value;
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
        const Fe = Y.cpu_usage_percent ?? 0;
        Fe > 90 ? l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.cpuCritical", { usage: Fe.toFixed(1) }),
          impact: r("admin.ops.diagnosis.cpuCriticalImpact"),
          action: r("admin.ops.diagnosis.cpuCriticalAction")
        }) : Fe > 80 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.cpuHigh", { usage: Fe.toFixed(1) }),
          impact: r("admin.ops.diagnosis.cpuHighImpact"),
          action: r("admin.ops.diagnosis.cpuHighAction")
        });
        const Xe = Y.memory_usage_percent ?? 0;
        Xe > 90 ? l.push({
          type: "critical",
          message: r("admin.ops.diagnosis.memoryCritical", { usage: Xe.toFixed(1) }),
          impact: r("admin.ops.diagnosis.memoryCriticalImpact"),
          action: r("admin.ops.diagnosis.memoryCriticalAction")
        }) : Xe > 85 && l.push({
          type: "warning",
          message: r("admin.ops.diagnosis.memoryHigh", { usage: Xe.toFixed(1) }),
          impact: r("admin.ops.diagnosis.memoryHighImpact"),
          action: r("admin.ops.diagnosis.memoryHighAction")
        });
      }
      const $e = ((te = u.ttft) == null ? void 0 : te.p99_ms) ?? 0;
      $e > 500 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.ttftHigh", { ttft: $e.toFixed(0) }),
        impact: r("admin.ops.diagnosis.ttftHighImpact"),
        action: r("admin.ops.diagnosis.ttftHighAction")
      });
      const We = (u.upstream_error_rate ?? 0) * 100;
      We > 5 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.upstreamCritical", { rate: We.toFixed(2) }),
        impact: r("admin.ops.diagnosis.upstreamCriticalImpact"),
        action: r("admin.ops.diagnosis.upstreamCriticalAction")
      }) : We > 2 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.upstreamHigh", { rate: We.toFixed(2) }),
        impact: r("admin.ops.diagnosis.upstreamHighImpact"),
        action: r("admin.ops.diagnosis.upstreamHighAction")
      });
      const Ve = (u.error_rate ?? 0) * 100;
      Ve > 3 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.errorHigh", { rate: Ve.toFixed(2) }),
        impact: r("admin.ops.diagnosis.errorHighImpact"),
        action: r("admin.ops.diagnosis.errorHighAction")
      }) : Ve > 0.5 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.errorElevated", { rate: Ve.toFixed(2) }),
        impact: r("admin.ops.diagnosis.errorElevatedImpact"),
        action: r("admin.ops.diagnosis.errorElevatedAction")
      });
      const Ye = (u.sla ?? 0) * 100;
      return Ye < 90 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.slaCritical", { sla: Ye.toFixed(2) }),
        impact: r("admin.ops.diagnosis.slaCriticalImpact"),
        action: r("admin.ops.diagnosis.slaCriticalAction")
      }) : Ye < 98 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.slaLow", { sla: Ye.toFixed(2) }),
        impact: r("admin.ops.diagnosis.slaLowImpact"),
        action: r("admin.ops.diagnosis.slaLowAction")
      }), Se.value != null && (Se.value < 60 ? l.push({
        type: "critical",
        message: r("admin.ops.diagnosis.healthCritical", { score: Se.value }),
        impact: r("admin.ops.diagnosis.healthCriticalImpact"),
        action: r("admin.ops.diagnosis.healthCriticalAction")
      }) : Se.value < 90 && l.push({
        type: "warning",
        message: r("admin.ops.diagnosis.healthLow", { score: Se.value }),
        impact: r("admin.ops.diagnosis.healthLowImpact"),
        action: r("admin.ops.diagnosis.healthLowAction")
      })), l.length === 0 && l.push({
        type: "info",
        message: r("admin.ops.diagnosis.healthy"),
        impact: r("admin.ops.diagnosis.healthyImpact")
      }), l;
    });
    function yt(u) {
      if (!u) return "-";
      const l = new Date(u);
      return Number.isNaN(l.getTime()) ? "-" : l.toLocaleTimeString();
    }
    const ht = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.cpu_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ft = v(() => {
      const u = ht.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 80 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), bt = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.memory_usage_percent;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ot = v(() => {
      const u = bt.value;
      return u == null ? "text-gray-900 dark:text-white" : u >= 95 ? "text-rose-600 dark:text-rose-400" : u >= 85 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), ct = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.db_conn_active;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ge = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.db_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Lt = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.db_conn_waiting;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), kt = v(() => ct.value == null || Ge.value == null ? null : ct.value + Ge.value), pt = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.db_max_open_conns;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), rt = v(() => kt.value == null || pt.value == null || pt.value <= 0 ? null : Math.min(100, Math.max(0, kt.value / pt.value * 100))), jt = v(() => {
      var u, l;
      return ((u = R.value) == null ? void 0 : u.db_ok) === !1 ? "FAIL" : rt.value != null ? `${rt.value.toFixed(0)}%` : ((l = R.value) == null ? void 0 : l.db_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), Pt = v(() => {
      var u, l;
      return ((u = R.value) == null ? void 0 : u.db_ok) === !1 ? "text-rose-600 dark:text-rose-400" : rt.value != null ? rt.value >= 90 ? "text-rose-600 dark:text-rose-400" : rt.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = R.value) == null ? void 0 : l.db_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), ot = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.redis_conn_total;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), mt = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.redis_conn_idle;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), zt = v(() => ot.value == null || mt.value == null ? null : Math.max(ot.value - mt.value, 0)), gt = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.redis_pool_size;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), Ae = v(() => ot.value == null || gt.value == null || gt.value <= 0 ? null : Math.min(100, Math.max(0, ot.value / gt.value * 100))), Mt = v(() => {
      var u, l;
      return ((u = R.value) == null ? void 0 : u.redis_ok) === !1 ? "FAIL" : Ae.value != null ? `${Ae.value.toFixed(0)}%` : ((l = R.value) == null ? void 0 : l.redis_ok) === !0 ? r("admin.ops.ok") : r("admin.ops.noData");
    }), C = v(() => {
      var u, l;
      return ((u = R.value) == null ? void 0 : u.redis_ok) === !1 ? "text-rose-600 dark:text-rose-400" : Ae.value != null ? Ae.value >= 90 ? "text-rose-600 dark:text-rose-400" : Ae.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((l = R.value) == null ? void 0 : l.redis_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), P = v(() => {
      var l;
      const u = (l = R.value) == null ? void 0 : l.goroutine_count;
      return typeof u == "number" && Number.isFinite(u) ? u : null;
    }), W = v(() => {
      const u = P.value;
      return u == null ? "unknown" : u >= ns ? "critical" : u >= os ? "warning" : "ok";
    }), Qe = v(() => {
      switch (W.value) {
        case "ok":
          return r("admin.ops.ok");
        case "warning":
          return r("common.warning");
        case "critical":
          return r("common.critical");
        default:
          return r("admin.ops.noData");
      }
    }), st = v(() => {
      switch (W.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        case "critical":
          return "text-rose-600 dark:text-rose-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Ie = v(() => {
      var u;
      return ((u = w.value) == null ? void 0 : u.job_heartbeats) ?? [];
    }), Ee = v(() => {
      const u = Ie.value;
      if (!u.length) return "unknown";
      for (const l of u)
        if (l && l.last_error_at && (!l.last_success_at || l.last_error_at > l.last_success_at))
          return "warn";
      return "ok";
    }), Re = v(() => {
      let u = 0;
      for (const l of Ie.value)
        l && l.last_error_at && (!l.last_success_at || l.last_error_at > l.last_success_at) && u++;
      return u;
    }), hs = v(() => {
      switch (Ee.value) {
        case "ok":
          return r("admin.ops.ok");
        case "warn":
          return r("common.warning");
        default:
          return r("admin.ops.noData");
      }
    }), bs = v(() => {
      switch (Ee.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warn":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Ut = S(!1);
    function ks() {
      Ut.value = !0;
    }
    function ws() {
      p(), k("refresh");
    }
    return (u, l) => {
      var Y, $e, We, Ve, Ye;
      return n(), i("div", {
        class: K(["flex flex-col gap-4 rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", s.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", Hs, [
          e("div", null, [
            e("h1", Gs, [
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
              N(" " + t(a(r)("admin.ops.title")), 1)
            ]),
            s.fullscreen ? M("", !0) : (n(), i("div", Qs, [
              e("span", {
                class: "flex items-center gap-1.5",
                title: s.loading ? a(r)("admin.ops.loadingText") : a(r)("admin.ops.ready")
              }, [
                e("span", Ks, [
                  e("span", {
                    class: K(["relative inline-flex h-2 w-2 rounded-full", s.loading ? "bg-gray-400" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                N(" " + t(s.loading ? a(r)("admin.ops.loadingText") : a(r)("admin.ops.ready")), 1)
              ], 8, Ws),
              l[14] || (l[14] = e("span", null, "·", -1)),
              e("span", null, t(a(r)("common.refresh")) + ": " + t(s.lastUpdated ? s.lastUpdated.toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/\//g, "-") : a(r)("common.unknown")), 1),
              s.autoRefreshEnabled && s.autoRefreshCountdown !== void 0 ? (n(), i(le, { key: 0 }, [
                l[13] || (l[13] = e("span", null, "·", -1)),
                e("span", null, t(a(r)("admin.ops.autoRefreshRemaining", { seconds: s.autoRefreshCountdown })), 1)
              ], 64)) : M("", !0)
            ]))
          ]),
          e("div", Js, [
            s.fullscreen ? M("", !0) : (n(), i(le, { key: 0 }, [
              U(me, {
                "data-testid": "ops-platform-filter",
                "model-value": b.platform,
                options: h.value,
                class: "w-full sm:w-[140px]",
                "onUpdate:modelValue": X
              }, null, 8, ["model-value", "options"]),
              U(me, {
                "model-value": b.groupId,
                options: re.value,
                class: "w-full sm:w-[160px]",
                "onUpdate:modelValue": J
              }, null, 8, ["model-value", "options"]),
              l[15] || (l[15] = e("div", { class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block" }, null, -1)),
              U(me, {
                "model-value": b.timeRange,
                options: Z.value,
                class: "relative w-full sm:w-[150px]",
                "onUpdate:modelValue": ue
              }, null, 8, ["model-value", "options"])
            ], 64)),
            M("", !0),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 2,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
              disabled: b.loading,
              title: a(r)("common.refresh"),
              onClick: ws
            }, [
              (n(), i("svg", {
                class: K(["h-4 w-4", { "animate-spin": b.loading }]),
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
            ], 8, Zs)),
            s.fullscreen ? M("", !0) : (n(), i("div", Ys)),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 4,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-blue-100 px-3 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",
              title: a(r)("admin.ops.alertRules.title"),
              onClick: l[0] || (l[0] = (te) => k("openAlertRules"))
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
              e("span", ea, t(a(r)("admin.ops.alertRules.manage")), 1)
            ], 8, Xs)),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 5,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-gray-100 px-3 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.settings.title"),
              onClick: l[1] || (l[1] = (te) => k("openSettings"))
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
              e("span", sa, t(a(r)("common.settings")), 1)
            ], 8, ta)),
            s.fullscreen ? M("", !0) : (n(), i("button", {
              key: 6,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: a(r)("admin.ops.fullscreen.enter"),
              onClick: l[2] || (l[2] = (te) => k("enterFullscreen"))
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
            ])], 8, aa))
          ])
        ]),
        w.value ? (n(), i("div", ra, [
          e("div", {
            class: K(["rounded-2xl bg-gray-50 dark:bg-dark-900 lg:col-span-5", s.fullscreen ? "p-6" : "p-4"])
          }, [
            e("div", oa, [
              e("div", na, [
                e("div", la, [
                  e("div", ia, [
                    e("h4", da, [
                      U(Oe, {
                        name: "brain",
                        size: "sm",
                        class: "text-blue-500"
                      }),
                      N(" " + t(a(r)("admin.ops.diagnosis.title")), 1)
                    ]),
                    e("div", ua, [
                      (n(!0), i(le, null, ce(Vt.value, (te, Fe) => (n(), i("div", {
                        key: Fe,
                        class: "flex gap-3"
                      }, [
                        e("div", ca, [
                          te.type === "critical" ? (n(), i("svg", pa, [...l[20] || (l[20] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : te.type === "warning" ? (n(), i("svg", ma, [...l[21] || (l[21] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : (n(), i("svg", ga, [...l[22] || (l[22] = [
                            e("path", {
                              "fill-rule": "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 100 2 1 1 0 000-2zm-1 3a1 1 0 012 0v4a1 1 0 11-2 0v-4z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])]))
                        ]),
                        e("div", va, [
                          e("div", xa, t(te.message), 1),
                          e("div", _a, t(te.impact), 1),
                          te.action ? (n(), i("div", fa, [
                            U(Oe, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            N(" " + t(te.action), 1)
                          ])) : M("", !0)
                        ])
                      ]))), 128))
                    ]),
                    e("div", ya, t(a(r)("admin.ops.diagnosis.footer")), 1)
                  ])
                ]),
                e("div", ha, [
                  (n(), i("svg", {
                    width: Pe.value,
                    height: Pe.value,
                    class: "-rotate-90 transform"
                  }, [
                    e("circle", {
                      cx: Pe.value / 2,
                      cy: Pe.value / 2,
                      r: ft.value,
                      "stroke-width": _t.value,
                      fill: "transparent",
                      class: "text-gray-200 dark:text-dark-700",
                      stroke: "currentColor"
                    }, null, 8, ka),
                    e("circle", {
                      cx: Pe.value / 2,
                      cy: Pe.value / 2,
                      r: ft.value,
                      "stroke-width": _t.value,
                      fill: "transparent",
                      stroke: qt.value,
                      "stroke-linecap": "round",
                      "stroke-dasharray": dt.value,
                      "stroke-dashoffset": ut.value,
                      class: "transition-all duration-1000 ease-out"
                    }, null, 8, wa)
                  ], 8, ba)),
                  e("div", $a, [
                    e("span", {
                      class: K([s.fullscreen ? "text-5xl" : "text-3xl", "font-black", xt.value])
                    }, t(we.value ? a(r)("admin.ops.idleStatus") : w.value.health_score ?? "--"), 3),
                    e("span", {
                      class: K([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase tracking-wider text-gray-400"])
                    }, t(a(r)("admin.ops.health")), 3)
                  ])
                ]),
                s.fullscreen ? M("", !0) : (n(), i("div", Ca, [
                  e("div", Sa, [
                    N(t(a(r)("admin.ops.healthCondition")) + " ", 1),
                    U(_e, {
                      content: a(r)("admin.ops.healthHelp")
                    }, null, 8, ["content"])
                  ]),
                  e("div", {
                    class: K(["mt-1 text-xs font-bold", xt.value])
                  }, t(we.value ? a(r)("admin.ops.idleStatus") : typeof w.value.health_score == "number" && w.value.health_score >= 90 ? a(r)("admin.ops.healthyStatus") : a(r)("admin.ops.riskyStatus")), 3)
                ]))
              ]),
              e("div", Ra, [
                e("div", Ta, [
                  e("div", Da, [
                    l[23] || (l[23] = e("div", { class: "relative flex h-3 w-3 shrink-0" }, [
                      e("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" }),
                      e("span", { class: "relative inline-flex h-3 w-3 rounded-full bg-blue-500" })
                    ], -1)),
                    e("h3", Ea, t(a(r)("admin.ops.realtime.title")), 1),
                    s.fullscreen ? M("", !0) : (n(), ne(_e, {
                      key: 0,
                      content: a(r)("admin.ops.tooltips.qps")
                    }, null, 8, ["content"]))
                  ]),
                  e("div", qa, [
                    (n(!0), i(le, null, ce(f.value, (te) => (n(), i("button", {
                      key: te,
                      type: "button",
                      class: K(["rounded px-1.5 py-0.5 text-[9px] font-bold transition-colors sm:px-2 sm:text-[10px]", D.value === te ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600"]),
                      onClick: (Fe) => D.value = te
                    }, t(te), 11, La))), 128))
                  ])
                ]),
                e("div", {
                  class: K(s.fullscreen ? "space-y-4" : "space-y-3")
                }, [
                  e("div", null, [
                    e("div", {
                      class: K([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                    }, t(a(r)("admin.ops.current")), 3),
                    e("div", za, [
                      e("div", Ma, [
                        e("span", {
                          class: K([s.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, t(z.value.toFixed(1)), 3),
                        e("span", {
                          class: K([s.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, "QPS", 2)
                      ]),
                      e("div", Aa, [
                        e("span", {
                          class: K([s.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, t(oe.value.toFixed(1)), 3),
                        e("span", {
                          class: K([s.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, t(a(r)("admin.ops.tps")), 3)
                      ])
                    ])
                  ]),
                  e("div", Ia, [
                    e("div", null, [
                      e("div", {
                        class: K([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, t(a(r)("admin.ops.peak")), 3),
                      e("div", {
                        class: K([s.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        e("div", Va, [
                          e("span", Fa, t(Le.value), 1),
                          l[24] || (l[24] = e("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        e("div", Oa, [
                          e("span", ja, t(ze.value), 1),
                          e("span", Pa, t(a(r)("admin.ops.tps")), 1)
                        ])
                      ], 2)
                    ]),
                    e("div", null, [
                      e("div", {
                        class: K([s.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, t(a(r)("admin.ops.average")), 3),
                      e("div", {
                        class: K([s.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        e("div", Ua, [
                          e("span", Na, t(Te.value), 1),
                          l[25] || (l[25] = e("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        e("div", Ba, [
                          e("span", Ha, t(De.value), 1),
                          e("span", Ga, t(a(r)("admin.ops.tps")), 1)
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
          e("div", Qa, [
            e("div", Wa, [
              e("div", Ka, [
                e("div", Ja, [
                  e("span", Za, t(a(r)("admin.ops.requestsTitle")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.totalRequests")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[3] || (l[3] = (te) => d({ title: a(r)("admin.ops.requestDetails.title") }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", Ya, [
                e("div", Xa, [
                  e("span", er, t(a(r)("admin.ops.requests")) + ":", 1),
                  e("span", tr, t(pe.value), 1)
                ]),
                e("div", sr, [
                  e("span", ar, t(a(r)("admin.ops.tokens")) + ":", 1),
                  e("span", rr, t(he.value), 1)
                ]),
                e("div", or, [
                  e("span", nr, t(a(r)("admin.ops.avgQps")) + ":", 1),
                  e("span", lr, t(Ne.value), 1)
                ]),
                e("div", ir, [
                  e("span", dr, t(a(r)("admin.ops.avgTps")) + ":", 1),
                  e("span", ur, t(Q.value), 1)
                ])
              ])
            ]),
            e("div", cr, [
              e("div", pr, [
                e("div", mr, [
                  e("span", gr, t(a(r)("admin.ops.sla")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.sla")
                  }, null, 8, ["content"])),
                  e("span", {
                    class: K(["h-1.5 w-1.5 rounded-full", F(A.value) === "critical" ? "bg-red-500" : F(A.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[4] || (l[4] = (te) => d({ title: a(r)("admin.ops.requestDetails.title"), kind: "error" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: K(["mt-2 text-3xl font-black", G(F(A.value))])
              }, t(A.value == null ? "-" : `${A.value.toFixed(3)}%`), 3),
              e("div", vr, [
                e("div", {
                  class: K(["h-full transition-all", F(A.value) === "critical" ? "bg-red-500" : F(A.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"]),
                  style: vt({ width: `${Math.max((A.value ?? 0) - 90, 0) * 10}%` })
                }, null, 6)
              ]),
              e("div", xr, [
                e("div", _r, [
                  e("span", fr, t(a(r)("admin.ops.exceptions")) + ":", 1),
                  e("span", yr, t(a(Ue)((w.value.request_count_sla ?? 0) - (w.value.success_count ?? 0))), 1)
                ])
              ])
            ]),
            e("div", hr, [
              e("div", br, [
                e("div", kr, [
                  e("span", wr, t(a(r)("admin.ops.latencyDuration")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.latency")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[5] || (l[5] = (te) => d({ title: a(r)("admin.ops.latencyDuration"), sort: "duration_desc" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", $r, [
                e("div", Cr, t(ie.value ?? "-"), 1),
                l[27] || (l[27] = e("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              e("div", Sr, [
                e("div", Rr, [
                  l[28] || (l[28] = e("span", { class: "text-gray-500" }, "P95:", -1)),
                  e("span", Tr, t(be.value ?? "-"), 1),
                  l[29] || (l[29] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Dr, [
                  l[30] || (l[30] = e("span", { class: "text-gray-500" }, "P90:", -1)),
                  e("span", Er, t(ke.value ?? "-"), 1),
                  l[31] || (l[31] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", qr, [
                  l[32] || (l[32] = e("span", { class: "text-gray-500" }, "P50:", -1)),
                  e("span", Lr, t(Me.value ?? "-"), 1),
                  l[33] || (l[33] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", zr, [
                  l[34] || (l[34] = e("span", { class: "text-gray-500" }, "Avg:", -1)),
                  e("span", Mr, t(Be.value ?? "-"), 1),
                  l[35] || (l[35] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Ar, [
                  l[36] || (l[36] = e("span", { class: "text-gray-500" }, "Max:", -1)),
                  e("span", Ir, t(tt.value ?? "-"), 1),
                  l[37] || (l[37] = e("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            e("div", Vr, [
              e("div", Fr, [
                e("div", Or, [
                  l[38] || (l[38] = e("span", { class: "text-[10px] font-bold uppercase text-gray-400" }, "TTFT", -1)),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.ttft")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: l[6] || (l[6] = (te) => d({ title: a(r)("admin.ops.ttftLabel"), kind: "success", sort: "ttft_desc" }))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", jr, [
                e("div", {
                  class: K(["text-3xl font-black", G(x(Je.value))])
                }, t(Je.value ?? "-"), 3),
                l[39] || (l[39] = e("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              e("div", Pr, [
                e("div", Ur, [
                  l[40] || (l[40] = e("span", { class: "text-gray-500" }, "P95:", -1)),
                  e("span", {
                    class: K(["font-bold", G(x(je.value))])
                  }, t(je.value ?? "-"), 3),
                  l[41] || (l[41] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Nr, [
                  l[42] || (l[42] = e("span", { class: "text-gray-500" }, "P90:", -1)),
                  e("span", {
                    class: K(["font-bold", G(x(Ze.value))])
                  }, t(Ze.value ?? "-"), 3),
                  l[43] || (l[43] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Br, [
                  l[44] || (l[44] = e("span", { class: "text-gray-500" }, "P50:", -1)),
                  e("span", {
                    class: K(["font-bold", G(x(it.value))])
                  }, t(it.value ?? "-"), 3),
                  l[45] || (l[45] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Hr, [
                  l[46] || (l[46] = e("span", { class: "text-gray-500" }, "Avg:", -1)),
                  e("span", {
                    class: K(["font-bold", G(x(He.value))])
                  }, t(He.value ?? "-"), 3),
                  l[47] || (l[47] = e("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                e("div", Gr, [
                  l[48] || (l[48] = e("span", { class: "text-gray-500" }, "Max:", -1)),
                  e("span", {
                    class: K(["font-bold", G(x(at.value))])
                  }, t(at.value ?? "-"), 3),
                  l[49] || (l[49] = e("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            e("div", Qr, [
              e("div", Wr, [
                e("div", Kr, [
                  e("span", Jr, t(a(r)("admin.ops.requestErrors")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.errors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[7] || (l[7] = (te) => _("request"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: K(["mt-2 text-3xl font-black", G(y(I.value))])
              }, t(I.value == null ? "-" : `${I.value.toFixed(2)}%`), 3),
              e("div", Zr, [
                e("div", Yr, [
                  e("span", Xr, t(a(r)("admin.ops.errorCount")) + ":", 1),
                  e("span", eo, t(a(Ue)(w.value.error_count_sla ?? 0)), 1)
                ]),
                e("div", to, [
                  e("span", so, t(a(r)("admin.ops.businessLimited")) + ":", 1),
                  e("span", ao, t(a(Ue)(w.value.business_limited_count ?? 0)), 1)
                ])
              ])
            ]),
            e("div", ro, [
              e("div", oo, [
                e("div", no, [
                  e("span", lo, t(a(r)("admin.ops.upstreamErrors")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.upstreamErrors")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: l[8] || (l[8] = (te) => _("upstream"))
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: K(["mt-2 text-3xl font-black", G(T(ee.value))])
              }, t(ee.value == null ? "-" : `${ee.value.toFixed(2)}%`), 3),
              e("div", io, [
                e("div", uo, [
                  e("span", co, t(a(r)("admin.ops.errorCountExcl429529")) + ":", 1),
                  e("span", po, t(a(Ue)(w.value.upstream_error_count_excl_429_529 ?? 0)), 1)
                ]),
                e("div", mo, [
                  l[50] || (l[50] = e("span", { class: "text-gray-500" }, "429/529:", -1)),
                  e("span", go, t(a(Ue)((w.value.upstream_429_count ?? 0) + (w.value.upstream_529_count ?? 0))), 1)
                ])
              ])
            ]),
            e("div", vo, [
              e("div", xo, [
                e("span", _o, t(a(r)("admin.ops.outputTps")), 1),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.outputTps")
                }, null, 8, ["content"]))
              ]),
              e("div", fo, [
                e("div", yo, t((($e = (Y = w.value.output_tps) == null ? void 0 : Y.p50) == null ? void 0 : $e.toFixed(1)) ?? "—"), 1),
                l[51] || (l[51] = e("span", { class: "text-xs font-bold text-gray-400" }, "tok/s (P50)", -1))
              ]),
              e("div", ho, [
                (n(), i(le, null, ce(["p5", "p10", "avg"], (te) => {
                  var Fe, Xe;
                  return e("div", {
                    key: te,
                    class: "flex items-baseline gap-1 whitespace-nowrap"
                  }, [
                    e("span", bo, t(te === "avg" ? "Avg" : te.toUpperCase()) + ":", 1),
                    e("span", {
                      class: "font-bold text-gray-900 dark:text-white",
                      "data-testid": `output-tps-${te}`
                    }, t(((Xe = (Fe = w.value.output_tps) == null ? void 0 : Fe[te]) == null ? void 0 : Xe.toFixed(1)) ?? "—"), 9, ko),
                    l[52] || (l[52] = e("span", { class: "text-gray-400" }, "tok/s", -1))
                  ]);
                }), 64))
              ]),
              e("div", wo, t(a(r)("admin.ops.outputTpsSamples", { count: w.value.output_tps == null ? "—" : a(Ue)(w.value.output_tps.sample_count) })), 1)
            ])
          ])
        ])) : M("", !0),
        w.value ? (n(), i("div", $o, [
          e("div", Co, [
            e("div", So, [
              e("div", Ro, [
                l[53] || (l[53] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "CPU", -1)),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.cpu")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", Ft.value])
              }, t(ht.value == null ? "-" : `${ht.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", To, t(a(r)("common.warning")) + " 80% · " + t(a(r)("common.critical")) + " 95% ", 1))
            ]),
            e("div", Do, [
              e("div", Eo, [
                e("div", qo, t(a(r)("admin.ops.memory")), 1),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.memory")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", Ot.value])
              }, t(bt.value == null ? "-" : `${bt.value.toFixed(1)}%`), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Lo, t(((We = R.value) == null ? void 0 : We.memory_used_mb) == null || ((Ve = R.value) == null ? void 0 : Ve.memory_total_mb) == null ? "-" : `${a(rs)(R.value.memory_used_mb)} / ${a(rs)(R.value.memory_total_mb)}`), 1))
            ]),
            e("div", zo, [
              e("div", Mo, [
                e("div", Ao, t(a(r)("admin.ops.db")), 1),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.db")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", Pt.value])
              }, t(jt.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Io, [
                N(t(a(r)("admin.ops.conns")) + " " + t(kt.value ?? "-") + " / " + t(pt.value ?? "-") + " · " + t(a(r)("admin.ops.active")) + " " + t(ct.value ?? "-") + " · " + t(a(r)("admin.ops.idle")) + " " + t(Ge.value ?? "-") + " ", 1),
                Lt.value != null ? (n(), i("span", Vo, " · " + t(a(r)("admin.ops.waiting")) + " " + t(Lt.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", Fo, [
              e("div", Oo, [
                l[54] || (l[54] = e("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "Redis", -1)),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.redis")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", C.value])
              }, t(Mt.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", jo, [
                N(t(a(r)("admin.ops.conns")) + " " + t(ot.value ?? "-") + " / " + t(gt.value ?? "-") + " ", 1),
                zt.value != null ? (n(), i("span", Po, " · " + t(a(r)("admin.ops.active")) + " " + t(zt.value), 1)) : M("", !0),
                mt.value != null ? (n(), i("span", Uo, " · " + t(a(r)("admin.ops.idle")) + " " + t(mt.value), 1)) : M("", !0)
              ]))
            ]),
            e("div", No, [
              e("div", Bo, [
                e("div", Ho, t(a(r)("admin.ops.goroutines")), 1),
                s.fullscreen ? M("", !0) : (n(), ne(_e, {
                  key: 0,
                  content: a(r)("admin.ops.tooltips.goroutines")
                }, null, 8, ["content"]))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", st.value])
              }, t(Qe.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", Go, [
                N(t(a(r)("admin.ops.current")) + " ", 1),
                e("span", Qo, t(P.value ?? "-"), 1),
                N(" · " + t(a(r)("common.warning")) + " ", 1),
                e("span", { class: "font-mono" }, t(os)),
                N(" · " + t(a(r)("common.critical")) + " ", 1),
                e("span", { class: "font-mono" }, t(ns)),
                ((Ye = R.value) == null ? void 0 : Ye.concurrency_queue_depth) != null ? (n(), i("span", Wo, [
                  N(" · " + t(a(r)("admin.ops.queue")) + " ", 1),
                  e("span", Ko, t(R.value.concurrency_queue_depth), 1)
                ])) : M("", !0)
              ]))
            ]),
            e("div", Jo, [
              e("div", Zo, [
                e("div", Yo, [
                  e("div", Xo, t(a(r)("admin.ops.jobs")), 1),
                  s.fullscreen ? M("", !0) : (n(), ne(_e, {
                    key: 0,
                    content: a(r)("admin.ops.tooltips.jobs")
                  }, null, 8, ["content"]))
                ]),
                s.fullscreen ? M("", !0) : (n(), i("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: ks
                }, t(a(r)("admin.ops.requestDetails.details")), 1))
              ]),
              e("div", {
                class: K(["mt-1 text-lg font-black", bs.value])
              }, t(hs.value), 3),
              s.fullscreen ? M("", !0) : (n(), i("div", en, [
                N(t(a(r)("common.total")) + " ", 1),
                e("span", tn, t(Ie.value.length), 1),
                N(" · " + t(a(r)("common.warning")) + " ", 1),
                e("span", sn, t(Re.value), 1)
              ]))
            ])
          ])
        ])) : M("", !0),
        U(et, {
          show: Ut.value,
          title: a(r)("admin.ops.jobs"),
          width: "wide",
          onClose: l[9] || (l[9] = (te) => Ut.value = !1)
        }, {
          default: ve(() => [
            Ie.value.length ? (n(), i("div", rn, [
              (n(!0), i(le, null, ce(Ie.value, (te) => (n(), i("div", {
                key: te.job_name,
                class: "rounded-xl border border-gray-100 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
              }, [
                e("div", on, [
                  e("div", nn, t(te.job_name), 1),
                  e("div", ln, [
                    te.last_duration_ms != null ? (n(), i("span", dn, t(te.last_duration_ms) + "ms", 1)) : M("", !0),
                    e("span", null, t(yt(te.updated_at)), 1)
                  ])
                ]),
                e("div", un, [
                  e("div", null, [
                    N(t(a(r)("admin.ops.lastSuccess")) + " ", 1),
                    e("span", cn, t(yt(te.last_success_at)), 1)
                  ]),
                  e("div", null, [
                    N(t(a(r)("admin.ops.lastError")) + " ", 1),
                    e("span", pn, t(yt(te.last_error_at)), 1)
                  ]),
                  e("div", null, [
                    N(t(a(r)("admin.ops.result")) + " ", 1),
                    e("span", mn, t(te.last_result || "-"), 1)
                  ])
                ]),
                te.last_error ? (n(), i("div", gn, t(te.last_error), 1)) : M("", !0)
              ]))), 128))
            ])) : (n(), i("div", an, t(a(r)("admin.ops.noData")), 1))
          ]),
          _: 1
        }, 8, ["show", "title"]),
        U(et, {
          show: j.value,
          title: a(r)("admin.ops.timeRange.custom"),
          width: "narrow",
          onClose: q
        }, {
          default: ve(() => [
            e("div", vn, [
              e("div", null, [
                e("label", xn, t(a(r)("admin.ops.customTimeRange.startTime")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": l[10] || (l[10] = (te) => O.value = te),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [de, O.value]
                ])
              ]),
              e("div", null, [
                e("label", _n, t(a(r)("admin.ops.customTimeRange.endTime")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": l[11] || (l[11] = (te) => c.value = te),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [de, c.value]
                ])
              ]),
              e("div", fn, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: q
                }, t(a(r)("common.cancel")), 1),
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600",
                  onClick: H
                }, t(a(r)("common.confirm")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ], 2);
    };
  }
}), hn = { class: "space-y-6" }, bn = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, kn = {
  key: 0,
  class: "flex flex-wrap items-center gap-3"
}, wn = { class: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12" }, $n = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30 lg:col-span-5" }, Cn = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, Sn = { class: "space-y-4" }, Rn = { class: "grid grid-cols-2 gap-3" }, Tn = { class: "lg:col-span-7" }, Dn = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:grid-cols-3" }, En = { class: "grid grid-cols-1 gap-6 lg:grid-cols-4" }, qn = { class: "grid grid-cols-1 gap-6 md:grid-cols-3" }, Ln = { class: "flex flex-wrap items-center justify-between gap-4" }, zn = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, Mn = { class: "mt-6 space-y-3" }, An = /* @__PURE__ */ fe({
  __name: "OpsDashboardSkeleton",
  props: {
    fullscreen: { type: Boolean, default: !1 }
  },
  setup(b) {
    const o = b;
    return (s, k) => (n(), i("div", hn, [
      e("div", {
        class: K(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", bn, [
          k[1] || (k[1] = e("div", { class: "space-y-2" }, [
            e("div", { class: "h-6 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
            e("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
          ], -1)),
          o.fullscreen ? M("", !0) : (n(), i("div", kn, [...k[0] || (k[0] = [
            $s('<div class="h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[160px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[150px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div>', 7)
          ])]))
        ]),
        e("div", wn, [
          e("div", $n, [
            e("div", Cn, [
              k[3] || (k[3] = e("div", { class: "h-28 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)),
              e("div", Sn, [
                k[2] || (k[2] = e("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
                e("div", Rn, [
                  (n(), i(le, null, ce(4, (r) => e("div", {
                    key: r,
                    class: "h-14 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70"
                  })), 64))
                ])
              ])
            ])
          ]),
          e("div", Tn, [
            e("div", Dn, [
              (n(), i(le, null, ce(7, (r) => e("div", {
                key: r,
                class: "h-20 animate-pulse rounded-2xl bg-gray-50 dark:bg-dark-900/30"
              })), 64))
            ])
          ])
        ])
      ], 2),
      e("div", En, [
        e("div", {
          class: K(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", o.fullscreen ? "p-8" : "p-6"])
        }, [...k[4] || (k[4] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        e("div", {
          class: K(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", o.fullscreen ? "p-8" : "p-6"])
        }, [...k[5] || (k[5] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        e("div", {
          class: K(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-2", o.fullscreen ? "p-8" : "p-6"])
        }, [...k[6] || (k[6] = [
          e("div", { class: "h-4 w-56 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)
      ]),
      e("div", qn, [
        (n(), i(le, null, ce(3, (r) => e("div", {
          key: r,
          class: K(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
        }, [...k[7] || (k[7] = [
          e("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          e("div", { class: "mt-6 h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)), 64))
      ]),
      e("div", {
        class: K(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", o.fullscreen ? "p-8" : "p-6"])
      }, [
        e("div", Ln, [
          k[9] || (k[9] = e("div", { class: "h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
          o.fullscreen ? M("", !0) : (n(), i("div", zn, [...k[8] || (k[8] = [
            e("div", { class: "h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            e("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))
        ]),
        e("div", Mn, [
          (n(), i(le, null, ce(6, (r) => e("div", {
            key: r,
            class: "flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30"
          }, [...k[10] || (k[10] = [
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
}), In = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Vn = { class: "mb-4 flex shrink-0 items-center justify-between gap-3" }, Fn = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, On = { class: "flex items-center gap-2" }, jn = ["title"], Pn = ["disabled", "title"], Un = {
  key: 0,
  class: "mb-3 shrink-0 rounded-xl bg-red-50 p-2.5 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, Nn = {
  key: 1,
  class: "flex flex-1 items-center justify-center rounded-xl border border-dashed border-gray-200 text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Bn = {
  key: 2,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Hn = { class: "flex shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-dark-700 dark:bg-dark-900" }, Gn = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Qn = { class: "text-[10px] text-gray-500 dark:text-gray-400" }, Wn = {
  key: 0,
  class: "flex flex-1 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, Kn = {
  key: 1,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, Jn = { class: "mb-1.5 flex items-center justify-between gap-2" }, Zn = { class: "flex min-w-0 flex-1 items-center gap-1.5" }, Yn = ["title"], Xn = ["title"], el = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, tl = { class: "font-mono font-bold text-gray-900 dark:text-white" }, sl = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, al = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, rl = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, ol = {
  key: 2,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, nl = { class: "mb-2 flex items-center justify-between gap-2" }, ll = { class: "flex items-center gap-2" }, il = ["title"], dl = {
  key: 0,
  class: "text-[10px] text-gray-400 dark:text-gray-500"
}, ul = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, cl = { class: "font-mono font-bold text-gray-900 dark:text-white" }, pl = { class: "mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, ml = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]" }, gl = { class: "flex items-center gap-1" }, vl = { class: "text-gray-600 dark:text-gray-300" }, xl = { class: "font-bold text-zo-signal-600 dark:text-zo-signal-400" }, _l = { class: "text-gray-400 dark:text-gray-500" }, fl = {
  key: 0,
  class: "rounded-full bg-zo-alert-100 px-1.5 py-0.5 font-semibold text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, yl = {
  key: 1,
  class: "rounded-full bg-red-100 px-1.5 py-0.5 font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, hl = {
  key: 2,
  class: "rounded-full bg-purple-100 px-1.5 py-0.5 font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
}, bl = {
  key: 3,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, kl = { class: "mb-1.5 flex items-center justify-between gap-2" }, wl = { class: "min-w-0 flex-1" }, $l = ["title"], Cl = { class: "mt-0.5 text-[9px] text-gray-400 dark:text-gray-500" }, Sl = { class: "flex shrink-0 items-center gap-2" }, Rl = { class: "font-mono text-[11px] font-bold text-gray-900 dark:text-white" }, Tl = {
  key: 0,
  class: "inline-flex items-center gap-1 rounded bg-zo-signal-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400"
}, Dl = {
  key: 1,
  class: "inline-flex items-center gap-1 rounded bg-zo-alert-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, El = {
  key: 2,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, ql = {
  key: 3,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, Ll = {
  key: 4,
  class: "inline-flex items-center gap-1 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-400"
}, zl = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, Ml = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, Al = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, Il = /* @__PURE__ */ fe({
  __name: "OpsConcurrencyCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(b) {
    const o = b, { t: s } = ye(), k = S(!1), r = S(""), V = S(null), D = S(null), w = S(null), R = S(!1), L = v(() => {
      var H, q;
      return (((H = V.value) == null ? void 0 : H.enabled) ?? !0) && (((q = D.value) == null ? void 0 : q.enabled) ?? !0);
    });
    function m(H) {
      return typeof H == "number" && Number.isFinite(H) ? H : 0;
    }
    const f = v(() => R.value ? "user" : typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? "account" : o.platformFilter ? "group" : "platform"), j = v(() => {
      var _, F;
      const H = ((_ = V.value) == null ? void 0 : _.platform) || {}, q = ((F = D.value) == null ? void 0 : F.platform) || {}, d = /* @__PURE__ */ new Set([...Object.keys(H), ...Object.keys(q)]);
      return Array.from(d).map((x) => {
        const y = H[x] || {}, T = q[x] || {}, G = m(T.total_accounts), pe = m(T.available_count), he = m(y.max_capacity), ge = m(y.current_in_use);
        return {
          key: x,
          name: x.toUpperCase(),
          total_accounts: G,
          available_accounts: pe,
          rate_limited_accounts: m(T.rate_limit_count),
          error_accounts: m(T.error_count),
          total_concurrency: he,
          used_concurrency: ge,
          waiting_in_queue: m(y.waiting_in_queue),
          availability_percentage: G > 0 ? Math.round(pe / G * 100) : 0,
          concurrency_percentage: he > 0 ? Math.round(ge / he * 100) : 0
        };
      }).sort((x, y) => y.concurrency_percentage - x.concurrency_percentage);
    }), O = v(() => {
      var F, x;
      const H = ((F = V.value) == null ? void 0 : F.group) || {}, q = ((x = D.value) == null ? void 0 : x.group) || {}, d = /* @__PURE__ */ new Set([...Object.keys(H), ...Object.keys(q)]);
      return Array.from(d).map((y) => {
        const T = H[y] || {}, G = q[y] || {};
        if (o.platformFilter && T.platform !== o.platformFilter && G.platform !== o.platformFilter)
          return null;
        const pe = m(G.total_accounts), he = m(G.available_count), ge = m(T.max_capacity), B = m(T.current_in_use);
        return {
          key: y,
          name: String(T.group_name || G.group_name || `Group ${y}`),
          platform: String(T.platform || G.platform || ""),
          total_accounts: pe,
          available_accounts: he,
          rate_limited_accounts: m(G.rate_limit_count),
          error_accounts: m(G.error_count),
          total_concurrency: ge,
          used_concurrency: B,
          waiting_in_queue: m(T.waiting_in_queue),
          availability_percentage: pe > 0 ? Math.round(he / pe * 100) : 0,
          concurrency_percentage: ge > 0 ? Math.round(B / ge * 100) : 0
        };
      }).filter((y) => y !== null).sort((y, T) => T.concurrency_percentage - y.concurrency_percentage);
    }), c = v(() => {
      var F, x;
      const H = ((F = V.value) == null ? void 0 : F.account) || {}, q = ((x = D.value) == null ? void 0 : x.account) || {}, d = /* @__PURE__ */ new Set([...Object.keys(H), ...Object.keys(q)]);
      return Array.from(d).map((y) => {
        const T = H[y] || {}, G = q[y] || {};
        return typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 && T.group_id !== o.groupIdFilter && G.group_id !== o.groupIdFilter ? null : {
          key: y,
          name: String(T.account_name || G.account_name || `Account ${y}`),
          platform: String(T.platform || G.platform || ""),
          group_name: String(T.group_name || G.group_name || ""),
          current_in_use: m(T.current_in_use),
          max_capacity: m(T.max_capacity),
          waiting_in_queue: m(T.waiting_in_queue),
          load_percentage: m(T.load_percentage),
          is_available: G.is_available || !1,
          is_rate_limited: G.is_rate_limited || !1,
          rate_limit_remaining_sec: G.rate_limit_remaining_sec,
          is_overloaded: G.is_overloaded || !1,
          overload_remaining_sec: G.overload_remaining_sec,
          has_error: G.has_error || !1,
          error_message: G.error_message || ""
        };
      }).filter((y) => y !== null).sort((y, T) => y.has_error !== T.has_error ? y.has_error ? -1 : 1 : y.is_rate_limited !== T.is_rate_limited ? y.is_rate_limited ? -1 : 1 : T.load_percentage - y.load_percentage);
    }), $ = v(() => {
      var q;
      const H = ((q = w.value) == null ? void 0 : q.user) || {};
      return Object.keys(H).map((d) => {
        const _ = H[d] || {};
        return {
          key: d,
          user_id: m(_.user_id),
          user_email: _.user_email || `User ${d}`,
          username: _.username || "",
          current_in_use: m(_.current_in_use),
          max_capacity: m(_.max_capacity),
          waiting_in_queue: m(_.waiting_in_queue),
          load_percentage: m(_.load_percentage)
        };
      }).sort((d, _) => _.current_in_use - d.current_in_use || _.load_percentage - d.load_percentage);
    }), E = v(() => f.value === "user" ? $.value : f.value === "account" ? c.value : f.value === "group" ? O.value : j.value), h = v(() => f.value === "user" ? s("admin.ops.concurrency.byUser") : f.value === "account" ? s("admin.ops.concurrency.byAccount") : f.value === "group" ? s("admin.ops.concurrency.byGroup") : s("admin.ops.concurrency.byPlatform"));
    async function Z() {
      var H, q;
      k.value = !0, r.value = "";
      try {
        if (R.value) {
          const d = await se.getUserConcurrencyStats();
          w.value = d;
        } else {
          const [d, _] = await Promise.all([
            se.getConcurrencyStats(o.platformFilter, o.groupIdFilter),
            se.getAccountAvailabilityStats(o.platformFilter, o.groupIdFilter)
          ]);
          V.value = d, D.value = _;
        }
      } catch (d) {
        console.error("[OpsConcurrencyCard] Failed to load data", d), r.value = ((q = (H = d == null ? void 0 : d.response) == null ? void 0 : H.data) == null ? void 0 : q.detail) || s("admin.ops.concurrency.loadFailed");
      } finally {
        k.value = !1;
      }
    }
    xe(
      () => o.refreshToken,
      () => {
        L.value && Z();
      }
    ), xe(
      () => R.value,
      () => {
        Z();
      }
    );
    function re(H) {
      return H >= 90 ? "bg-red-500 dark:bg-red-600" : H >= 70 || H >= 50 ? "bg-zo-alert-500 dark:bg-zo-alert-600" : "bg-zo-signal-500 dark:bg-zo-signal-600";
    }
    function X(H) {
      return `width: ${Math.min(100, Math.max(0, H))}%`;
    }
    function J(H) {
      return H >= 90 ? "text-red-600 dark:text-red-400" : H >= 70 || H >= 50 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }
    function ue(H) {
      if (H <= 0) return "0s";
      if (H < 60) return `${Math.round(H)}s`;
      const q = Math.floor(H / 60);
      return q < 60 ? `${q}m` : `${Math.floor(q / 60)}h`;
    }
    return xe(
      () => L.value,
      async (H) => {
        H && await Z();
      },
      { immediate: !0 }
    ), (H, q) => (n(), i("div", In, [
      e("div", Vn, [
        e("h3", Fn, [
          q[1] || (q[1] = e("svg", {
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
          N(" " + t(a(s)("admin.ops.concurrency.title")), 1)
        ]),
        e("div", On, [
          e("button", {
            class: K(["flex items-center justify-center rounded-lg px-2 py-1 transition-colors", R.value ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-300"]),
            title: R.value ? a(s)("admin.ops.concurrency.switchToPlatform") : a(s)("admin.ops.concurrency.switchToUser"),
            onClick: q[0] || (q[0] = (d) => R.value = !R.value)
          }, [...q[2] || (q[2] = [
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
          ])], 10, jn),
          e("button", {
            class: "flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-[11px] font-semibold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: k.value,
            title: a(s)("common.refresh"),
            onClick: Z
          }, [
            (n(), i("svg", {
              class: K(["h-3 w-3", { "animate-spin": k.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...q[3] || (q[3] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2))
          ], 8, Pn)
        ])
      ]),
      r.value ? (n(), i("div", Un, t(r.value), 1)) : M("", !0),
      L.value ? (n(), i("div", Bn, [
        e("div", Hn, [
          e("span", Gn, t(h.value), 1),
          e("span", Qn, t(a(s)("admin.ops.concurrency.totalRows", { count: E.value.length })), 1)
        ]),
        E.value.length === 0 ? (n(), i("div", Wn, t(a(s)("admin.ops.concurrency.empty")), 1)) : f.value === "user" ? (n(), i("div", Kn, [
          (n(!0), i(le, null, ce(E.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", Jn, [
              e("div", Zn, [
                e("span", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.username || d.user_email
                }, t(d.username || d.user_email), 9, Yn),
                d.username ? (n(), i("span", {
                  key: 0,
                  class: "shrink-0 truncate text-[10px] text-gray-400 dark:text-gray-500",
                  title: d.user_email
                }, t(d.user_email), 9, Xn)) : M("", !0)
              ]),
              e("div", el, [
                e("span", tl, t(d.current_in_use) + "/" + t(d.max_capacity), 1),
                e("span", {
                  class: K(["font-bold", J(d.load_percentage)])
                }, t(Math.round(d.load_percentage)) + "% ", 3)
              ])
            ]),
            e("div", sl, [
              e("div", {
                class: K(["h-full rounded-full transition-all duration-300", re(d.load_percentage)]),
                style: vt(X(d.load_percentage))
              }, null, 6)
            ]),
            d.waiting_in_queue > 0 ? (n(), i("div", al, [
              e("span", rl, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ])) : f.value === "platform" || f.value === "group" ? (n(), i("div", ol, [
          (n(!0), i(le, null, ce(E.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-3 dark:bg-dark-900"
          }, [
            e("div", nl, [
              e("div", ll, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.name
                }, t(d.name), 9, il),
                f.value === "group" && d.platform ? (n(), i("span", dl, t(d.platform.toUpperCase()), 1)) : M("", !0)
              ]),
              e("div", ul, [
                e("span", cl, t(d.used_concurrency) + "/" + t(d.total_concurrency), 1),
                e("span", {
                  class: K(["font-bold", J(d.concurrency_percentage)])
                }, t(d.concurrency_percentage) + "% ", 3)
              ])
            ]),
            e("div", pl, [
              e("div", {
                class: K(["h-full rounded-full transition-all duration-300", re(d.concurrency_percentage)]),
                style: vt(X(d.concurrency_percentage))
              }, null, 6)
            ]),
            e("div", ml, [
              e("div", gl, [
                q[4] || (q[4] = e("svg", {
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
                e("span", vl, [
                  e("span", xl, t(d.available_accounts), 1),
                  N("/" + t(d.total_accounts), 1)
                ]),
                e("span", _l, t(d.availability_percentage) + "%", 1)
              ]),
              d.rate_limited_accounts > 0 ? (n(), i("span", fl, t(a(s)("admin.ops.concurrency.rateLimited", { count: d.rate_limited_accounts })), 1)) : M("", !0),
              d.error_accounts > 0 ? (n(), i("span", yl, t(a(s)("admin.ops.concurrency.errorAccounts", { count: d.error_accounts })), 1)) : M("", !0),
              d.waiting_in_queue > 0 ? (n(), i("span", hl, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)) : M("", !0)
            ])
          ]))), 128))
        ])) : (n(), i("div", bl, [
          (n(!0), i(le, null, ce(E.value, (d) => (n(), i("div", {
            key: d.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            e("div", kl, [
              e("div", wl, [
                e("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: d.name
                }, t(d.name), 9, $l),
                e("div", Cl, t(d.group_name), 1)
              ]),
              e("div", Sl, [
                e("span", Rl, t(d.current_in_use) + "/" + t(d.max_capacity), 1),
                d.is_available ? (n(), i("span", Tl, [
                  q[5] || (q[5] = e("svg", {
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
                  N(" " + t(a(s)("admin.ops.accountAvailability.available")), 1)
                ])) : d.is_rate_limited ? (n(), i("span", Dl, [
                  q[6] || (q[6] = e("svg", {
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
                  N(" " + t(ue(d.rate_limit_remaining_sec || 0)), 1)
                ])) : d.is_overloaded ? (n(), i("span", El, [
                  q[7] || (q[7] = e("svg", {
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
                  N(" " + t(ue(d.overload_remaining_sec || 0)), 1)
                ])) : d.has_error ? (n(), i("span", ql, [
                  q[8] || (q[8] = e("svg", {
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
                  N(" " + t(a(s)("admin.ops.accountAvailability.accountError")), 1)
                ])) : (n(), i("span", Ll, t(a(s)("admin.ops.accountAvailability.unavailable")), 1))
              ])
            ]),
            e("div", zl, [
              e("div", {
                class: K(["h-full rounded-full transition-all duration-300", re(d.load_percentage)]),
                style: vt(X(d.load_percentage))
              }, null, 6)
            ]),
            d.waiting_in_queue > 0 ? (n(), i("div", Ml, [
              e("span", Al, t(a(s)("admin.ops.concurrency.queued", { count: d.waiting_in_queue })), 1)
            ])) : M("", !0)
          ]))), 128))
        ]))
      ])) : (n(), i("div", Nn, t(a(s)("admin.ops.concurrency.disabledHint")), 1))
    ]));
  }
}), Vl = /* @__PURE__ */ Cs(Il, [["__scopeId", "data-v-6cb95ad3"]]), Fl = /* @__PURE__ */ new Set([
  "upstream request failed",
  "upstream request failed after retries",
  "upstream gateway error",
  "upstream service temporarily unavailable"
]);
function Ol(b) {
  const o = String(b || "").trim();
  if (!o) return null;
  try {
    const s = JSON.parse(o), k = s == null ? void 0 : s.error;
    if (!k || typeof k != "object") return null;
    const r = typeof k.type == "string" ? k.type.trim() : "", V = typeof k.message == "string" ? k.message.trim() : "";
    return !r && !V ? null : { type: r, message: V };
  } catch {
    return null;
  }
}
function jl(b) {
  const o = Ol(b);
  return !o || o.type !== "upstream_error" ? !1 : Fl.has(o.message.toLowerCase());
}
function ms(b) {
  if (!b) return "";
  const o = [
    b.upstream_error_detail,
    b.upstream_errors,
    b.upstream_error_message
  ];
  for (const s of o) {
    const k = String(s || "").trim();
    if (k && !(k === "[]" || k === "{}" || k.toLowerCase() === "null"))
      return k;
  }
  return "";
}
function Pl(b, o) {
  if (!b) return "";
  const s = ms(b), k = String(b.error_body || "").trim();
  return o === "upstream" ? s || k : !k || s && jl(k) ? s : k;
}
const Ul = {
  key: 0,
  class: "flex items-center justify-center py-16"
}, Nl = { class: "flex flex-col items-center gap-3" }, Bl = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, Hl = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, Gl = {
  key: 2,
  class: "space-y-6 p-6"
}, Ql = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" }, Wl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Kl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Jl = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, Zl = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Yl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Xl = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, ei = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ti = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, si = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, ai = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ri = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, oi = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, ni = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, li = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ii = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, di = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ui = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ci = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, pi = { class: "font-mono" }, mi = { class: "font-mono text-primary-600 dark:text-primary-400" }, gi = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, vi = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, xi = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, _i = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, fi = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, yi = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, hi = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, bi = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ki = { class: "mt-1" }, wi = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, $i = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ci = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Si = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Ri = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ti = ["title"], Di = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900"
}, Ei = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, qi = { class: "mt-1 font-mono text-sm font-medium text-gray-900 dark:text-white" }, Li = { class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900" }, zi = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, Mi = { class: "mt-4 max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-100" }, Ai = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900"
}, Ii = { class: "flex flex-wrap items-center justify-between gap-2" }, Vi = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, Fi = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Oi = {
  key: 0,
  class: "mt-3 text-sm text-gray-500 dark:text-gray-400"
}, ji = {
  key: 1,
  class: "mt-4 space-y-3"
}, Pi = { class: "flex flex-wrap items-center justify-between gap-2" }, Ui = { class: "text-xs font-black text-gray-900 dark:text-white" }, Ni = {
  key: 0,
  class: "ml-2 rounded-md bg-gray-100 px-2 py-0.5 font-mono text-[10px] font-bold text-gray-700 dark:bg-dark-700 dark:text-gray-200"
}, Bi = { class: "flex items-center gap-2" }, Hi = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, Gi = ["disabled", "title", "onClick"], Qi = { class: "mt-3 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, Wi = { class: "text-gray-400" }, Ki = { class: "ml-1 font-mono" }, Ji = { class: "text-gray-400" }, Zi = { class: "ml-1 font-mono" }, Yi = {
  key: 0,
  class: "mt-3 break-words text-sm font-medium text-gray-900 dark:text-white"
}, Xi = {
  key: 1,
  class: "mt-3 max-h-[240px] overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-100"
}, ed = /* @__PURE__ */ fe({
  __name: "OpsErrorDetailModal",
  props: {
    show: { type: Boolean },
    errorId: {},
    errorType: {}
  },
  emits: ["update:show"],
  setup(b, { emit: o }) {
    const s = b, k = o, { t: r } = ye(), V = nt(), D = S(!1), w = S(null), R = v(() => s.errorType === "request"), L = v(() => {
      var x, y;
      return ((x = w.value) == null ? void 0 : x.request_id) || ((y = w.value) == null ? void 0 : y.client_request_id) || "";
    }), m = v(() => Pl(w.value, s.errorType)), f = v(() => s.errorId ? r("admin.ops.errorDetail.titleWithId", { id: String(s.errorId) }) : r("admin.ops.errorDetail.title")), j = v(() => r("admin.ops.errorDetail.noErrorSelected"));
    function O(x) {
      if (!x) return !1;
      const y = String(x.phase || "").toLowerCase(), T = String(x.error_owner || "").toLowerCase();
      return y === "upstream" && T === "provider";
    }
    function c(x) {
      switch (x) {
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
    function $(x) {
      if (!x) return !1;
      const y = String(x.requested_model || "").trim(), T = String(x.upstream_model || "").trim();
      return !!y && !!T && y !== T;
    }
    function E(x) {
      if (!x) return "";
      const y = String(x.upstream_model || "").trim();
      if (y) return y;
      const T = String(x.requested_model || "").trim();
      return T || String(x.model || "").trim();
    }
    const h = S([]), Z = S(!1), re = v(() => h.value), X = S(/* @__PURE__ */ new Set());
    function J(x) {
      const y = ms(x);
      return y || String(x.error_body || "").trim();
    }
    function ue(x) {
      const y = new Set(X.value);
      y.has(x) ? y.delete(x) : y.add(x), X.value = y;
    }
    async function H(x) {
      Z.value = !0;
      try {
        const y = await se.listRequestErrorUpstreamErrors(
          x,
          { page: 1, page_size: 100, view: "all" },
          { include_detail: !0 }
        );
        h.value = y.items || [];
      } catch (y) {
        console.error("[OpsErrorDetailModal] Failed to load correlated upstream errors", y), h.value = [];
      } finally {
        Z.value = !1;
      }
    }
    function q() {
      k("update:show", !1);
    }
    function d(x) {
      if (!x) return "N/A";
      try {
        return JSON.stringify(JSON.parse(x), null, 2);
      } catch {
        return x;
      }
    }
    async function _(x) {
      var y;
      D.value = !0;
      try {
        const G = (s.errorType || (((y = w.value) == null ? void 0 : y.phase) === "upstream" ? "upstream" : "request")) === "upstream" ? await se.getUpstreamErrorDetail(x) : await se.getRequestErrorDetail(x);
        w.value = G;
      } catch (T) {
        w.value = null, V.showError((T == null ? void 0 : T.message) || r("admin.ops.failedToLoadErrorDetail"));
      } finally {
        D.value = !1;
      }
    }
    xe(
      () => [s.show, s.errorId],
      ([x, y]) => {
        if (!x) {
          w.value = null;
          return;
        }
        typeof y == "number" && y > 0 && (X.value = /* @__PURE__ */ new Set(), _(y), s.errorType === "request" ? H(y) : h.value = []);
      },
      { immediate: !0 }
    );
    const F = v(() => {
      var y;
      const x = ((y = w.value) == null ? void 0 : y.status_code) ?? 0;
      return x >= 500 ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30" : x === 429 ? "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-500/30" : x >= 400 ? "bg-zo-alert-50 text-zo-alert-700 ring-zo-alert-600/20 dark:bg-zo-alert-900/30 dark:text-zo-alert-400 dark:ring-zo-alert-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-400 dark:ring-gray-500/30";
    });
    return (x, y) => (n(), ne(et, {
      show: b.show,
      title: f.value,
      width: "full",
      "close-on-click-outside": !0,
      onClose: q
    }, {
      default: ve(() => [
        D.value ? (n(), i("div", Ul, [
          e("div", Nl, [
            y[0] || (y[0] = e("div", { class: "h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
            e("div", Bl, t(a(r)("admin.ops.errorDetail.loading")), 1)
          ])
        ])) : w.value ? (n(), i("div", Gl, [
          e("div", Ql, [
            e("div", Wl, [
              e("div", Kl, t(a(r)("admin.ops.errorDetail.requestId")), 1),
              e("div", Jl, t(L.value || "—"), 1)
            ]),
            e("div", Zl, [
              e("div", Yl, t(a(r)("admin.ops.errorDetail.time")), 1),
              e("div", Xl, t(a(Ms)(w.value.created_at)), 1)
            ]),
            e("div", ei, [
              e("div", ti, t(O(w.value) ? a(r)("admin.ops.errorDetail.account") : a(r)("admin.ops.errorDetail.user")), 1),
              e("div", si, [
                O(w.value) ? (n(), i(le, { key: 0 }, [
                  N(t(w.value.account_name || (w.value.account_id != null ? String(w.value.account_id) : "—")), 1)
                ], 64)) : (n(), i(le, { key: 1 }, [
                  N(t(w.value.user_email || (w.value.user_id != null ? String(w.value.user_id) : "—")), 1)
                ], 64))
              ])
            ]),
            e("div", ai, [
              e("div", ri, t(a(r)("admin.ops.errorDetail.platform")), 1),
              e("div", oi, t(w.value.platform || "—"), 1)
            ]),
            e("div", ni, [
              e("div", li, t(a(r)("admin.ops.errorDetail.group")), 1),
              e("div", ii, t(w.value.group_name || (w.value.group_id != null ? String(w.value.group_id) : "—")), 1)
            ]),
            e("div", di, [
              e("div", ui, t(a(r)("admin.ops.errorDetail.model")), 1),
              e("div", ci, [
                $(w.value) ? (n(), i(le, { key: 0 }, [
                  e("span", pi, t(w.value.requested_model), 1),
                  y[1] || (y[1] = e("span", { class: "mx-1 text-gray-400" }, "→", -1)),
                  e("span", mi, t(w.value.upstream_model), 1)
                ], 64)) : (n(), i(le, { key: 1 }, [
                  N(t(E(w.value) || "—"), 1)
                ], 64))
              ])
            ]),
            e("div", gi, [
              e("div", vi, t(a(r)("admin.ops.errorDetail.inboundEndpoint")), 1),
              e("div", xi, t(w.value.inbound_endpoint || "—"), 1)
            ]),
            e("div", _i, [
              e("div", fi, t(a(r)("admin.ops.errorDetail.upstreamEndpoint")), 1),
              e("div", yi, t(w.value.upstream_endpoint || "—"), 1)
            ]),
            e("div", hi, [
              e("div", bi, t(a(r)("admin.ops.errorDetail.status")), 1),
              e("div", ki, [
                e("span", {
                  class: K(["inline-flex items-center rounded-lg px-2 py-1 text-xs font-black ring-1 ring-inset shadow-sm", F.value])
                }, t(w.value.status_code), 3)
              ])
            ]),
            e("div", wi, [
              e("div", $i, t(a(r)("admin.ops.errorDetail.requestType")), 1),
              e("div", Ci, t(c(w.value.request_type)), 1)
            ]),
            e("div", Si, [
              e("div", Ri, t(a(r)("admin.ops.errorDetail.message")), 1),
              e("div", {
                class: "mt-1 truncate text-sm font-medium text-gray-900 dark:text-white",
                title: w.value.message
              }, t(w.value.message || "—"), 9, Ti)
            ]),
            w.value.api_key_prefix ? (n(), i("div", Di, [
              e("div", Ei, t(a(r)("admin.ops.errorDetail.apiKeyPrefix")), 1),
              e("div", qi, t(w.value.api_key_prefix), 1)
            ])) : M("", !0)
          ]),
          e("div", Li, [
            e("h3", zi, t(a(r)("admin.ops.errorDetail.responseBody")), 1),
            e("pre", Mi, [
              e("code", null, t(d(m.value || "")), 1)
            ])
          ]),
          R.value ? (n(), i("div", Ai, [
            e("div", Ii, [
              e("h3", Vi, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 1),
              Z.value ? (n(), i("div", Fi, t(a(r)("common.loading")), 1)) : M("", !0)
            ]),
            !Z.value && !re.value.length ? (n(), i("div", Oi, t(a(r)("common.noData")), 1)) : (n(), i("div", ji, [
              (n(!0), i(le, null, ce(re.value, (T, G) => (n(), i("div", {
                key: T.id,
                class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
              }, [
                e("div", Pi, [
                  e("div", Ui, [
                    N(" #" + t(G + 1) + " ", 1),
                    T.type ? (n(), i("span", Ni, t(T.type), 1)) : M("", !0)
                  ]),
                  e("div", Bi, [
                    e("div", Hi, t(T.status_code ?? "—"), 1),
                    e("button", {
                      type: "button",
                      class: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-bold text-primary-700 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-60 dark:text-primary-200 dark:hover:bg-dark-700",
                      disabled: !J(T),
                      title: J(T) ? "" : a(r)("common.noData"),
                      onClick: (pe) => ue(T.id)
                    }, [
                      U(Oe, {
                        name: X.value.has(T.id) ? "chevronDown" : "chevronRight",
                        size: "xs",
                        "stroke-width": 2
                      }, null, 8, ["name"]),
                      e("span", null, t(X.value.has(T.id) ? a(r)("admin.ops.errorDetail.responsePreview.collapse") : a(r)("admin.ops.errorDetail.responsePreview.expand")), 1)
                    ], 8, Gi)
                  ])
                ]),
                e("div", Qi, [
                  e("div", null, [
                    e("span", Wi, t(a(r)("admin.ops.errorDetail.upstreamEvent.status")) + ":", 1),
                    e("span", Ki, t(T.status_code ?? "—"), 1)
                  ]),
                  e("div", null, [
                    e("span", Ji, t(a(r)("admin.ops.errorDetail.upstreamEvent.requestId")) + ":", 1),
                    e("span", Zi, t(T.request_id || T.client_request_id || "—"), 1)
                  ])
                ]),
                T.message ? (n(), i("div", Yi, t(T.message), 1)) : M("", !0),
                X.value.has(T.id) ? (n(), i("pre", Xi, [
                  e("code", null, t(d(J(T))), 1)
                ])) : M("", !0)
              ]))), 128))
            ]))
          ])) : M("", !0)
        ])) : (n(), i("div", Hl, t(j.value), 1))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), td = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, sd = { class: "mb-4 flex items-center justify-between" }, ad = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, rd = ["disabled", "title"], od = { class: "relative min-h-0 flex-1" }, nd = {
  key: 0,
  class: "flex h-full flex-col"
}, ld = { class: "flex-1" }, id = { class: "mt-4 flex flex-col items-center gap-2" }, dd = {
  key: 0,
  class: "text-xs font-bold text-gray-900 dark:text-white"
}, ud = { class: "flex flex-wrap justify-center gap-3" }, cd = { class: "text-gray-500 dark:text-gray-400" }, pd = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, md = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, gd = /* @__PURE__ */ fe({
  __name: "OpsErrorDistributionChart",
  props: {
    data: {},
    loading: { type: Boolean }
  },
  emits: ["openDetails"],
  setup(b, { emit: o }) {
    Rt.register(As, Tt, Dt);
    const s = b, k = o, { t: r } = ye(), V = v(() => document.documentElement.classList.contains("dark")), D = v(() => ({
      blue: "#3b82f6",
      red: "#ef4444",
      orange: "#fb7185",
      gray: "#9ca3af",
      text: V.value ? "#9ca3af" : "#6b7280"
    })), w = v(
      () => {
        var c;
        return (((c = s.data) == null ? void 0 : c.items) ?? []).reduce(($, E) => $ + Number(E.sla || 0), 0);
      }
    ), R = v(() => w.value > 0), L = v(() => R.value ? "ready" : s.loading ? "loading" : "empty"), m = v(() => {
      if (!s.data) return [];
      let c = 0, $ = 0, E = 0, h = 0;
      for (const re of s.data.items || []) {
        const X = Number(re.status_code || 0), J = Number(re.sla || 0);
        !Number.isFinite(X) || !Number.isFinite(J) || ([502, 503, 504].includes(X) ? c += J : X >= 400 && X < 500 ? $ += J : X === 500 ? E += J : h += J);
      }
      const Z = [];
      return c > 0 && Z.push({ label: r("admin.ops.upstream"), count: c, color: D.value.orange }), $ > 0 && Z.push({ label: r("admin.ops.client"), count: $, color: D.value.blue }), E > 0 && Z.push({ label: r("admin.ops.system"), count: E, color: D.value.red }), h > 0 && Z.push({ label: r("admin.ops.other"), count: h, color: D.value.gray }), Z;
    }), f = v(() => m.value.length === 0 ? null : m.value.reduce((c, $) => $.count > c.count ? $ : c)), j = v(() => !R.value || m.value.length === 0 ? null : {
      labels: m.value.map((c) => c.label),
      datasets: [
        {
          data: m.value.map((c) => c.count),
          backgroundColor: m.value.map((c) => c.color),
          borderWidth: 0
        }
      ]
    }), O = v(() => ({
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
    return (c, $) => (n(), i("div", td, [
      e("div", sd, [
        e("h3", ad, [
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
          N(" " + t(a(r)("admin.ops.errorDistribution")) + " ", 1),
          U(_e, {
            content: a(r)("admin.ops.tooltips.errorDistribution")
          }, null, 8, ["content"])
        ]),
        e("button", {
          type: "button",
          class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
          disabled: L.value !== "ready",
          title: a(r)("admin.ops.errorTrend"),
          onClick: $[0] || ($[0] = (E) => k("openDetails"))
        }, t(a(r)("admin.ops.requestDetails.details")), 9, rd)
      ]),
      e("div", od, [
        L.value === "ready" && j.value ? (n(), i("div", nd, [
          e("div", ld, [
            U(a(Is), {
              data: j.value,
              options: { ...O.value, cutout: "65%" }
            }, null, 8, ["data", "options"])
          ]),
          e("div", id, [
            f.value ? (n(), i("div", dd, [
              N(t(a(r)("admin.ops.top")) + ": ", 1),
              e("span", {
                style: vt({ color: f.value.color })
              }, t(f.value.label), 5)
            ])) : M("", !0),
            e("div", ud, [
              (n(!0), i(le, null, ce(m.value, (E) => (n(), i("div", {
                key: E.label,
                class: "flex items-center gap-1.5 text-xs"
              }, [
                e("span", {
                  class: "h-2 w-2 rounded-full",
                  style: vt({ backgroundColor: E.color })
                }, null, 4),
                e("span", cd, t(E.label) + " " + t(E.count), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), i("div", pd, [
          L.value === "loading" ? (n(), i("div", md, t(a(r)("common.loading")), 1)) : (n(), ne(lt, {
            key: 1,
            title: a(r)("common.noData"),
            description: a(r)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), vd = { status: "idle" }, gs = "sub2api:ip-geo-cache:v1", vs = 1440 * 60 * 1e3, ls = 50, xd = "https://get.geojs.io/v1/ip/geo", _d = "https://get.geojs.io/v1/ip/geo.json", Ce = Ht(/* @__PURE__ */ new Map());
function es(b) {
  return (b == null ? void 0 : b.status) === "success" && typeof b.fetchedAt == "number" && Date.now() - b.fetchedAt <= vs;
}
function xs(b) {
  const o = Ce.get(b);
  if ((o == null ? void 0 : o.status) === "success" && !es(o)) {
    Ce.delete(b), ts();
    return;
  }
  return o;
}
function _s(b) {
  const o = b.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (o) {
    const r = Number(o[1]), V = Number(o[2]);
    return r === 10 || r === 127 || r === 169 && V === 254 || r === 172 && V >= 16 && V <= 31 || r === 192 && V === 168;
  }
  const s = b.toLowerCase();
  if (s === "::1") return !0;
  const k = s.split(":", 1)[0];
  return !!(/^fe[89ab][0-9a-f]$/.test(k) || /^f[cd][0-9a-f]{2}$/.test(k));
}
function fd() {
  try {
    const b = localStorage.getItem(gs);
    if (!b) return;
    const o = JSON.parse(b), s = Date.now();
    for (const [k, r] of Object.entries(o))
      !r || typeof r.fetchedAt != "number" || s - r.fetchedAt > vs || Ce.set(k, { status: "success", label: r.label, detail: r.detail, fetchedAt: r.fetchedAt });
  } catch {
  }
}
function ts() {
  try {
    const b = {};
    for (const [o, s] of Ce.entries())
      s.status === "success" && s.label && s.fetchedAt && (b[o] = { label: s.label, detail: s.detail, fetchedAt: s.fetchedAt });
    localStorage.setItem(gs, JSON.stringify(b));
  } catch {
  }
}
fd();
function fs(b) {
  return xs(b) ?? vd;
}
function yd(b) {
  return [b.countryCode, b.region, b.city].filter(
    (s) => !!(s && s.trim())
  ).join(" · ");
}
function hd(b) {
  return {
    countryCode: b.country_code,
    region: b.region,
    city: b.city,
    organization: b.organization,
    timezone: b.timezone,
    accuracy: b.accuracy,
    latitude: b.latitude,
    longitude: b.longitude
  };
}
function ys(b, o) {
  if (!o || !o.country_code) {
    Ce.set(b, { status: "error" });
    return;
  }
  const s = hd(o);
  Ce.set(b, {
    status: "success",
    label: yd(s),
    detail: s,
    fetchedAt: Date.now()
  });
}
async function is(b, o = !1) {
  if (_s(b)) {
    Ce.set(b, { status: "private" });
    return;
  }
  const s = xs(b);
  if (!(!o && (es(s) || (s == null ? void 0 : s.status) === "loading"))) {
    Ce.set(b, { status: "loading" });
    try {
      const k = await fetch(`${xd}/${encodeURIComponent(b)}.json`);
      if (!k.ok) {
        Ce.set(b, { status: "error" });
        return;
      }
      const r = await k.json();
      ys(b, r), ts();
    } catch {
      Ce.set(b, { status: "error" });
    }
  }
}
async function bd(b) {
  const o = Array.from(new Set(b)), s = [];
  for (const r of o) {
    if (_s(r)) {
      Ce.set(r, { status: "private" });
      continue;
    }
    const V = Ce.get(r);
    es(V) || (V == null ? void 0 : V.status) === "loading" || s.push(r);
  }
  if (s.length === 0) return !0;
  s.forEach((r) => Ce.set(r, { status: "loading" }));
  let k = !0;
  for (let r = 0; r < s.length; r += ls) {
    const V = s.slice(r, r + ls);
    try {
      const D = await fetch(`${_d}?ip=${V.map(encodeURIComponent).join(",")}`);
      if (!D.ok) {
        V.forEach((L) => Ce.set(L, { status: "error" })), k = !1;
        continue;
      }
      const w = await D.json(), R = new Map(w.map((L) => [L.ip, L]));
      V.forEach((L) => ys(L, R.get(L))), ts();
    } catch {
      V.forEach((D) => Ce.set(D, { status: "error" })), k = !1;
    }
  }
  return k;
}
const kd = {
  key: 0,
  class: "mt-0.5 text-xs"
}, wd = {
  key: 1,
  class: "mt-0.5 flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"
}, $d = {
  key: 2,
  class: "mt-0.5 flex items-center gap-1 text-xs"
}, Cd = ["title"], Sd = ["title"], Rd = {
  key: 3,
  class: "mt-0.5 text-xs"
}, Td = {
  key: 4,
  class: "mt-0.5 text-xs text-gray-400 dark:text-gray-500"
}, Dd = /* @__PURE__ */ fe({
  __name: "IpGeoCell",
  props: {
    ip: {}
  },
  setup(b) {
    const o = b, { t: s } = ye(), k = v(() => fs(o.ip)), r = v(() => {
      const R = k.value.detail;
      return R ? [
        R.organization ? `${s("usage.ipGeo.detailOrg")}: ${R.organization}` : "",
        R.timezone ? `${s("usage.ipGeo.detailTimezone")}: ${R.timezone}` : "",
        R.accuracy != null ? `${s("usage.ipGeo.detailAccuracy")}: ${R.accuracy}km` : "",
        R.latitude && R.longitude ? `${s("usage.ipGeo.detailCoordinates")}: ${R.latitude}, ${R.longitude}` : ""
      ].filter(Boolean).join(`
`) : "";
    }), V = () => {
      is(o.ip);
    }, D = () => {
      is(o.ip, !0);
    }, w = () => {
      window.open(
        `https://www.iplocation.net/ip-lookup?query=${encodeURIComponent(o.ip)}`,
        "_blank",
        "noopener,noreferrer"
      );
    };
    return (R, L) => k.value.status === "idle" ? (n(), i("div", kd, [
      e("button", {
        type: "button",
        class: "text-primary-600 underline decoration-dashed underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
        onClick: V
      }, t(a(s)("usage.ipGeo.fetch")), 1)
    ])) : k.value.status === "loading" ? (n(), i("div", wd, [
      L[0] || (L[0] = e("svg", {
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
      N(" " + t(a(s)("usage.ipGeo.fetching")), 1)
    ])) : k.value.status === "success" ? (n(), i("div", $d, [
      e("button", {
        type: "button",
        class: "truncate text-gray-500 underline decoration-dotted underline-offset-2 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",
        title: r.value,
        onClick: w
      }, t(k.value.label), 9, Cd),
      e("button", {
        type: "button",
        class: "text-gray-400 hover:text-primary-600 dark:hover:text-primary-400",
        title: a(s)("usage.ipGeo.refreshTitle"),
        onClick: D
      }, [
        U(Oe, {
          name: "refresh",
          size: "xs"
        })
      ], 8, Sd)
    ])) : k.value.status === "error" ? (n(), i("div", Rd, [
      e("button", {
        type: "button",
        class: "text-red-600 underline decoration-dashed underline-offset-2 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
        onClick: V
      }, t(a(s)("usage.ipGeo.failed")), 1)
    ])) : (n(), i("div", Td, t(a(s)("usage.ipGeo.private")), 1));
  }
}), Ed = {
  key: 0,
  class: "flex flex-shrink-0 items-center justify-end gap-2 border-b border-gray-200 px-4 py-2 dark:border-dark-700"
}, qd = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Ld = ["disabled"], zd = /* @__PURE__ */ fe({
  __name: "IpGeoBatchToolbar",
  props: {
    ips: {}
  },
  emits: ["failed"],
  setup(b, { emit: o }) {
    const s = b, k = o, { t: r } = ye(), V = v(
      () => Array.from(new Set(s.ips.filter((L) => !!L)))
    ), D = v(
      () => V.value.filter((L) => {
        const m = fs(L).status;
        return m === "idle" || m === "error";
      }).length
    ), w = S(!1), R = async () => {
      w.value = !0;
      try {
        await bd(V.value) || k("failed");
      } finally {
        w.value = !1;
      }
    };
    return (L, m) => V.value.length > 0 ? (n(), i("div", Ed, [
      D.value > 0 ? (n(), i("span", qd, t(a(r)("usage.ipGeo.pending", { count: D.value })), 1)) : M("", !0),
      e("button", {
        type: "button",
        class: "inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-400 dark:hover:bg-primary-900/30",
        disabled: w.value || D.value === 0,
        onClick: R
      }, t(w.value ? a(r)("usage.ipGeo.batchFetching") : a(r)("usage.ipGeo.batchFetch")), 9, Ld)
    ])) : M("", !0);
  }
});
function Md(b, o) {
  switch ((b || "").toLowerCase()) {
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
function Ad(b) {
  return b >= 500 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : b === 429 ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : b >= 400 ? "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" : "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200";
}
function Id(b) {
  return b === "status" ? "status_code" : b;
}
const Vd = { class: "flex h-full min-h-0 flex-col" }, Fd = ["title"], Od = { class: "max-w-[320px] space-y-1 text-xs" }, jd = { class: "break-all text-gray-700 dark:text-gray-300" }, Pd = { class: "font-medium text-gray-500 dark:text-gray-400" }, Ud = { class: "ml-1" }, Nd = {
  key: 0,
  class: "break-all text-gray-700 dark:text-gray-300"
}, Bd = { class: "font-medium text-gray-500 dark:text-gray-400" }, Hd = { class: "ml-1" }, Gd = { class: "text-sm text-gray-900 dark:text-white" }, Qd = {
  key: 0,
  class: "space-y-0.5 text-xs"
}, Wd = { class: "break-all font-medium text-gray-900 dark:text-white" }, Kd = { class: "break-all text-gray-500 dark:text-gray-400" }, Jd = {
  key: 1,
  class: "text-sm font-medium text-gray-900 dark:text-white"
}, Zd = {
  key: 2,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Yd = ["title"], Xd = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, eu = {
  key: 0,
  class: "text-sm"
}, tu = ["title", "onClick"], su = {
  key: 1,
  class: "font-medium text-gray-900 dark:text-white"
}, au = { class: "ml-1 text-gray-500 dark:text-gray-400" }, ru = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ou = {
  key: 0,
  class: "text-sm"
}, nu = { class: "text-gray-900 dark:text-white" }, lu = {
  key: 0,
  class: "ml-1 inline-flex items-center rounded px-1 py-px text-[10px] font-medium leading-tight bg-rose-100 text-rose-600 ring-1 ring-inset ring-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30"
}, iu = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, du = ["title"], uu = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, cu = { class: "text-sm text-gray-900 dark:text-white" }, pu = { class: "flex items-center gap-1.5" }, mu = {
  key: 1,
  class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200"
}, gu = ["title"], vu = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, xu = ["title"], _u = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, fu = { key: 0 }, yu = { class: "text-sm font-mono text-gray-600 dark:text-gray-400" }, hu = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, bu = ["title", "onClick"], ku = { class: "flex-shrink-0" }, wu = /* @__PURE__ */ fe({
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
  setup(b, { emit: o }) {
    const { t: s } = ye(), k = v(() => [
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
    ]), r = v(() => {
      const $ = m.visibleColumnKeys ? k.value.filter((E) => m.visibleColumnKeys.includes(E.key)) : k.value;
      return m.summaryFirst ? [
        ...$.filter((E) => E.key === "created_at"),
        ...$.filter((E) => E.key === "message"),
        ...$.filter((E) => E.key !== "created_at" && E.key !== "message")
      ] : $;
    });
    function V($) {
      const E = String($.phase || "").toLowerCase(), h = String($.error_owner || "").toLowerCase();
      return E === "upstream" && h === "provider";
    }
    function D($) {
      const E = String($.requested_model || "").trim(), h = String($.upstream_model || "").trim();
      return !!E && !!h && E !== h;
    }
    function w($) {
      const E = String($.upstream_model || "").trim();
      if (E) return E;
      const h = String($.requested_model || "").trim();
      return h || String($.model || "").trim();
    }
    function R($) {
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
    function L($) {
      const E = String($.phase || "").toLowerCase(), h = String($.error_owner || "").toLowerCase();
      return V($) ? { label: s("admin.ops.errorLog.typeUpstream"), className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" } : E === "request" && h === "client" ? { label: s("admin.ops.errorLog.typeRequest"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : E === "auth" && h === "client" ? { label: s("admin.ops.errorLog.typeAuth"), className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" } : E === "account_auth" ? { label: s("admin.ops.errorLog.typeAccountAuth"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : E === "routing" && h === "platform" ? { label: s("admin.ops.errorLog.typeRouting"), className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" } : E === "internal" && h === "platform" ? { label: s("admin.ops.errorLog.typeInternal"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" } : { label: E || h || s("common.unknown"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" };
    }
    const m = b, f = o;
    function j($, E) {
      f("sort", Id($), E);
    }
    const O = Ad;
    function c($) {
      var E;
      if (!$) return "";
      if ($.startsWith("{") || $.startsWith("["))
        try {
          const h = JSON.parse($);
          if ((E = h == null ? void 0 : h.error) != null && E.message) return String(h.error.message);
          if (h != null && h.message) return String(h.message);
          if (h != null && h.detail) return String(h.detail);
          if (typeof h == "object") return JSON.stringify(h).substring(0, 150);
        } catch {
        }
      return $.includes("context deadline exceeded") ? s("admin.ops.errorLog.commonErrors.contextDeadlineExceeded") : $.includes("connection refused") ? s("admin.ops.errorLog.commonErrors.connectionRefused") : $.toLowerCase().includes("rate limit") ? s("admin.ops.errorLog.commonErrors.rateLimit") : $.length > 200 ? $.substring(0, 200) + "..." : $;
    }
    return ($, E) => (n(), i("div", Vd, [
      e("div", {
        class: K(["flex min-h-0 flex-1 flex-col overflow-hidden", b.flat ? "" : "card"])
      }, [
        U(zd, {
          ips: b.rows.map((h) => h.client_ip),
          onFailed: E[0] || (E[0] = (h) => f("ipGeoBatchFailed"))
        }, null, 8, ["ips"]),
        U(Ps, {
          columns: r.value,
          data: b.rows,
          loading: b.loading,
          "clickable-rows": "",
          "server-side-sort": "",
          "default-sort-key": "created_at",
          "default-sort-order": "desc",
          onSort: j,
          onRowClick: E[2] || (E[2] = (h) => f("openErrorDetail", h.id))
        }, {
          "cell-created_at": ve(({ row: h }) => [
            e("span", {
              class: "text-sm text-gray-600 dark:text-gray-400",
              title: h.request_id || h.client_request_id
            }, t(a(Ke)(h.created_at)), 9, Fd)
          ]),
          "cell-type": ve(({ row: h }) => [
            e("span", {
              class: K(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", L(h).className])
            }, t(L(h).label), 3)
          ]),
          "cell-endpoint": ve(({ row: h }) => {
            var Z, re;
            return [
              e("div", Od, [
                e("div", jd, [
                  e("span", Pd, t(a(s)("usage.inbound")) + ":", 1),
                  e("span", Ud, t(((Z = h.inbound_endpoint) == null ? void 0 : Z.trim()) || "-"), 1)
                ]),
                h.upstream_endpoint ? (n(), i("div", Nd, [
                  e("span", Bd, t(a(s)("usage.upstream")) + ":", 1),
                  e("span", Hd, t(((re = h.upstream_endpoint) == null ? void 0 : re.trim()) || "-"), 1)
                ])) : M("", !0)
              ])
            ];
          }),
          "cell-platform": ve(({ row: h }) => [
            e("span", Gd, t(h.platform || "-"), 1)
          ]),
          "cell-model": ve(({ row: h }) => [
            D(h) ? (n(), i("div", Qd, [
              e("div", Wd, t(h.requested_model), 1),
              e("div", Kd, [
                E[5] || (E[5] = e("span", { class: "mr-0.5" }, "↳", -1)),
                N(t(h.upstream_model), 1)
              ])
            ])) : w(h) ? (n(), i("span", Jd, t(w(h)), 1)) : (n(), i("span", Zd, "-"))
          ]),
          "cell-group": ve(({ row: h }) => [
            h.group_id ? (n(), i("span", {
              key: 0,
              class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
              title: a(s)("admin.ops.errorLog.id") + " " + h.group_id
            }, t(h.group_name || "#" + h.group_id), 9, Yd)) : (n(), i("span", Xd, "-"))
          ]),
          "cell-user": ve(({ row: h }) => [
            h.user_id ? (n(), i("div", eu, [
              b.userClickable && h.user_email ? (n(), i("button", {
                key: 0,
                class: "font-medium text-primary-600 underline decoration-dashed underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                title: a(s)("admin.usage.clickToViewBalance"),
                onClick: wt((Z) => f("userClick", h.user_id, h.user_email), ["stop"])
              }, t(h.user_email), 9, tu)) : (n(), i("span", su, t(h.user_email || "-"), 1)),
              e("span", au, "#" + t(h.user_id), 1)
            ])) : (n(), i("span", ru, "-"))
          ]),
          "cell-api_key": ve(({ row: h }) => [
            h.api_key_id || h.api_key_name ? (n(), i("div", ou, [
              e("span", nu, t(h.api_key_name || "#" + h.api_key_id), 1),
              h.api_key_deleted ? (n(), i("span", lu, t(a(s)("admin.ops.errorLog.keyDeletedBadge")), 1)) : M("", !0)
            ])) : (n(), i("span", iu, "-"))
          ]),
          "cell-account": ve(({ row: h }) => [
            h.account_id ? (n(), i("span", {
              key: 0,
              class: "text-sm text-gray-900 dark:text-white",
              title: a(s)("admin.ops.errorLog.accountId") + " " + h.account_id
            }, t(h.account_name || "#" + h.account_id), 9, du)) : (n(), i("span", uu, "-"))
          ]),
          "cell-category": ve(({ row: h }) => [
            e("span", cu, t(a(s)("usage.errors.categories." + a(Md)(h.phase, h.type))), 1)
          ]),
          "cell-status": ve(({ row: h }) => [
            e("div", pu, [
              e("span", {
                class: K(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", a(O)(h.status_code)])
              }, t(h.status_code), 3),
              h.severity ? (n(), i("span", {
                key: 0,
                class: K(["rounded px-1.5 py-0.5 text-[10px] font-medium", a(Bs)(h.severity)])
              }, t(h.severity), 3)) : M("", !0),
              h.request_type != null && h.request_type > 0 ? (n(), i("span", mu, t(R(h.request_type)), 1)) : M("", !0)
            ])
          ]),
          "cell-message": ve(({ row: h }) => [
            h.message ? (n(), i("span", {
              key: 0,
              class: "block max-w-[280px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: h.message
            }, t(c(h.message) || "-"), 9, gu)) : (n(), i("span", vu, "-"))
          ]),
          "cell-user_agent": ve(({ row: h }) => [
            h.user_agent ? (n(), i("span", {
              key: 0,
              class: "block max-w-[320px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: h.user_agent
            }, t(h.user_agent), 9, xu)) : (n(), i("span", _u, "-"))
          ]),
          "cell-client_ip": ve(({ row: h }) => [
            e("div", {
              onClick: E[1] || (E[1] = wt(() => {
              }, ["stop"]))
            }, [
              h.client_ip ? (n(), i("div", fu, [
                e("span", yu, t(h.client_ip), 1),
                U(Dd, {
                  ip: h.client_ip
                }, null, 8, ["ip"])
              ])) : (n(), i("span", hu, "-"))
            ])
          ]),
          "cell-actions": ve(({ row: h }) => [
            e("button", {
              type: "button",
              class: "rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-600 dark:hover:text-primary-400",
              title: a(s)("admin.ops.errorLog.details"),
              onClick: wt((Z) => f("openErrorDetail", h.id), ["stop"])
            }, [...E[6] || (E[6] = [
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
            ])], 8, bu)
          ]),
          empty: ve(() => [
            U(lt, {
              message: a(s)("admin.ops.errorLog.noErrors")
            }, null, 8, ["message"])
          ]),
          _: 1
        }, 8, ["columns", "data", "loading"])
      ], 2),
      e("div", ku, [
        b.total > 0 ? (n(), ne(Yt, {
          key: 0,
          total: b.total,
          page: b.page,
          "page-size": b.pageSize,
          "onUpdate:page": E[3] || (E[3] = (h) => f("update:page", h)),
          "onUpdate:pageSize": E[4] || (E[4] = (h) => f("update:pageSize", h))
        }, null, 8, ["total", "page", "page-size"])) : M("", !0)
      ])
    ]));
  }
});
function $u(b, o, s) {
  return b === "custom" && o && s ? { start_time: o, end_time: s } : { time_range: b === "custom" ? "1h" : b };
}
const Cu = { class: "flex h-full min-h-0 flex-col" }, Su = { class: "mb-4 flex-shrink-0 border-b border-gray-200 pb-4 dark:border-dark-700" }, Ru = { class: "grid grid-cols-2 gap-2 md:grid-cols-8" }, Tu = { class: "col-span-2 compact-select" }, Du = { class: "relative group" }, Eu = ["placeholder"], qu = { class: "compact-select" }, Lu = { class: "compact-select" }, zu = { class: "compact-select" }, Mu = { class: "compact-select" }, Au = { class: "flex items-center justify-end" }, Iu = { class: "flex min-h-0 flex-1 flex-col" }, Vu = { class: "mb-2 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400" }, Fu = /* @__PURE__ */ fe({
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
  setup(b, { emit: o }) {
    const s = b, k = o, { t: r } = ye(), V = S(!1), D = S([]), w = S(0), R = S(1), L = S(10), m = S(""), f = S(null), j = S(""), O = S(""), c = S("errors"), $ = v(() => s.errorType === "upstream" ? r("admin.ops.errorDetails.upstreamErrors") : r("admin.ops.errorDetails.requestErrors")), E = v(() => {
      const F = [400, 401, 403, 404, 409, 422, 429, 500, 502, 503, 504, 529];
      return [
        { value: null, label: r("common.all") },
        ...F.map((x) => ({ value: x, label: String(x) })),
        { value: "other", label: r("admin.ops.errorDetails.statusCodeOther") || "Other" }
      ];
    }), h = v(() => [
      { value: "", label: r("common.all") },
      { value: "provider", label: r("admin.ops.errorDetails.owner.provider") || "provider" },
      { value: "client", label: r("admin.ops.errorDetails.owner.client") || "client" },
      { value: "platform", label: r("admin.ops.errorDetails.owner.platform") || "platform" }
    ]), Z = v(() => [
      { value: "errors", label: r("admin.ops.errorDetails.viewErrors") || "errors" },
      { value: "excluded", label: r("admin.ops.errorDetails.viewExcluded") || "excluded" },
      { value: "all", label: r("common.all") }
    ]), re = v(() => [
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
      k("update:show", !1);
    }
    const J = S("created_at"), ue = S("desc");
    function H(F, x) {
      J.value = F, ue.value = x, R.value = 1, q();
    }
    async function q() {
      if (s.show) {
        V.value = !0;
        try {
          const F = {
            page: R.value,
            page_size: L.value,
            view: c.value,
            sort_by: J.value,
            sort_order: ue.value
          };
          Object.assign(F, $u(s.timeRange, s.customStartTime, s.customEndTime)), s.timeRange === "custom" && (s.customStartTime && s.customEndTime ? (F.start_time = s.customStartTime, F.end_time = s.customEndTime, delete F.time_range) : F.time_range = "1h");
          const x = String(s.platform || "").trim();
          x && (F.platform = x), typeof s.groupId == "number" && s.groupId > 0 && (F.group_id = s.groupId), m.value.trim() && (F.q = m.value.trim()), f.value === "other" ? F.status_codes_other = "1" : typeof f.value == "number" && (F.status_codes = String(f.value));
          const y = String(j.value || "").trim();
          y && (F.phase = y);
          const T = String(O.value || "").trim();
          T && (F.error_owner = T);
          const G = s.errorType === "upstream" ? await se.listUpstreamErrors(F) : await se.listRequestErrors(F);
          D.value = G.items || [], w.value = G.total || 0;
        } catch (F) {
          console.error("[OpsErrorDetailsModal] Failed to fetch error logs", F), D.value = [], w.value = 0;
        } finally {
          V.value = !1;
        }
      }
    }
    function d() {
      m.value = "", f.value = null, j.value = s.errorType === "upstream" ? "upstream" : "", O.value = "", c.value = "errors", R.value = 1, q();
    }
    xe(
      () => s.show,
      (F) => {
        F && (R.value = 1, L.value = 10, d());
      }
    ), xe(
      () => [s.timeRange, s.customStartTime, s.customEndTime, s.platform, s.groupId],
      () => {
        s.show && (R.value = 1, q());
      }
    ), xe(
      () => [R.value, L.value],
      () => {
        s.show && q();
      }
    );
    let _ = null;
    return xe(
      () => m.value,
      () => {
        s.show && (_ && window.clearTimeout(_), _ = window.setTimeout(() => {
          R.value = 1, q();
        }, 350));
      }
    ), xe(
      () => [f.value, j.value, O.value, c.value],
      () => {
        s.show && (R.value = 1, q());
      }
    ), (F, x) => (n(), ne(et, {
      show: b.show,
      title: $.value,
      width: "full",
      onClose: X
    }, {
      default: ve(() => [
        e("div", Cu, [
          e("div", Su, [
            e("div", Ru, [
              e("div", Tu, [
                e("div", Du, [
                  x[8] || (x[8] = e("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
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
                  ae(e("input", {
                    "onUpdate:modelValue": x[0] || (x[0] = (y) => m.value = y),
                    type: "text",
                    class: "w-full rounded-lg border-gray-200 bg-gray-50/50 py-1.5 pl-9 pr-3 text-xs font-medium text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:focus:bg-dark-800",
                    placeholder: a(r)("admin.ops.errorDetails.searchPlaceholder")
                  }, null, 8, Eu), [
                    [de, m.value]
                  ])
                ])
              ]),
              e("div", qu, [
                U(me, {
                  "model-value": f.value,
                  options: E.value,
                  "onUpdate:modelValue": x[1] || (x[1] = (y) => f.value = y)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", Lu, [
                U(me, {
                  "model-value": j.value,
                  options: re.value,
                  "onUpdate:modelValue": x[2] || (x[2] = (y) => j.value = String(y ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", zu, [
                U(me, {
                  "model-value": O.value,
                  options: h.value,
                  "onUpdate:modelValue": x[3] || (x[3] = (y) => O.value = String(y ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", Mu, [
                U(me, {
                  "model-value": c.value,
                  options: Z.value,
                  "onUpdate:modelValue": x[4] || (x[4] = (y) => c.value = y)
                }, null, 8, ["model-value", "options"])
              ]),
              e("div", Au, [
                e("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: d
                }, t(a(r)("common.reset")), 1)
              ])
            ])
          ]),
          e("div", Iu, [
            e("div", Vu, t(a(r)("admin.ops.errorDetails.total")) + " " + t(w.value), 1),
            U(wu, {
              class: "min-h-0 flex-1",
              "summary-first": "",
              rows: D.value,
              total: w.value,
              loading: V.value,
              page: R.value,
              "page-size": L.value,
              onOpenErrorDetail: x[5] || (x[5] = (y) => k("openErrorDetail", y)),
              onSort: H,
              "onUpdate:page": x[6] || (x[6] = (y) => R.value = y),
              "onUpdate:pageSize": x[7] || (x[7] = (y) => L.value = y)
            }, null, 8, ["rows", "total", "loading", "page", "page-size"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Ou = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, ju = { class: "mb-4 flex shrink-0 items-center justify-between" }, Pu = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Uu = { class: "flex items-center gap-2" }, Nu = ["disabled"], Bu = ["disabled"], Hu = { class: "min-h-0 flex-1" }, Gu = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Qu = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Wu = /* @__PURE__ */ fe({
  __name: "OpsErrorTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {}
  },
  emits: ["openRequestErrors", "openUpstreamErrors"],
  setup(b, { emit: o }) {
    Rt.register(Qt, Tt, Dt, Wt, At, Kt, It, Jt);
    const s = b, k = o, { t: r } = ye(), V = v(() => document.documentElement.classList.contains("dark")), D = v(() => ({
      red: "#ef4444",
      redAlpha: "#ef444420",
      purple: "#8b5cf6",
      purpleAlpha: "#8b5cf620",
      gray: "#9ca3af",
      grid: V.value ? "#374151" : "#f3f4f6",
      text: V.value ? "#9ca3af" : "#6b7280"
    })), w = v(() => Ct(s.points.map(($) => $.error_count_sla ?? 0))), R = v(
      () => Ct(
        s.points.map(($) => ($.upstream_error_count_excl_429_529 ?? 0) + ($.upstream_429_count ?? 0) + ($.upstream_529_count ?? 0))
      )
    ), L = v(
      () => Ct(s.points.map(($) => ($.error_count_sla ?? 0) + ($.upstream_error_count_excl_429_529 ?? 0) + ($.business_limited_count ?? 0)))
    ), m = v(() => w.value > 0), f = v(() => R.value > 0), j = v(() => !s.points.length || L.value <= 0 ? null : {
      labels: s.points.map(($) => Xt($.bucket_start, s.timeRange)),
      datasets: [
        {
          label: r("admin.ops.errorsSla"),
          data: s.points.map(($) => $.error_count_sla ?? 0),
          borderColor: D.value.red,
          backgroundColor: D.value.redAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.upstreamExcl429529"),
          data: s.points.map(($) => $.upstream_error_count_excl_429_529 ?? 0),
          borderColor: D.value.purple,
          backgroundColor: D.value.purpleAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: r("admin.ops.businessLimited"),
          data: s.points.map(($) => $.business_limited_count ?? 0),
          borderColor: D.value.gray,
          backgroundColor: "transparent",
          borderDash: [6, 6],
          fill: !1,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), O = v(() => j.value ? "ready" : s.loading ? "loading" : "empty"), c = v(() => {
      const $ = D.value;
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
    return ($, E) => (n(), i("div", Ou, [
      e("div", ju, [
        e("h3", Pu, [
          E[2] || (E[2] = e("svg", {
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
          N(" " + t(a(r)("admin.ops.errorTrend")) + " ", 1),
          U(_e, {
            content: a(r)("admin.ops.tooltips.errorTrend")
          }, null, 8, ["content"])
        ]),
        e("div", Uu, [
          e("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !m.value,
            onClick: E[0] || (E[0] = (h) => k("openRequestErrors"))
          }, t(a(r)("admin.ops.errorDetails.requestErrors")), 9, Nu),
          e("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !f.value,
            onClick: E[1] || (E[1] = (h) => k("openUpstreamErrors"))
          }, t(a(r)("admin.ops.errorDetails.upstreamErrors")), 9, Bu)
        ])
      ]),
      e("div", Hu, [
        O.value === "ready" && j.value ? (n(), ne(a(Zt), {
          key: 0,
          data: j.value,
          options: c.value
        }, null, 8, ["data", "options"])) : (n(), i("div", Gu, [
          O.value === "loading" ? (n(), i("div", Qu, t(a(r)("common.loading")), 1)) : (n(), ne(lt, {
            key: 1,
            title: a(r)("common.noData"),
            description: a(r)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Ku = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Ju = { class: "mb-4 flex items-center justify-between" }, Zu = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Yu = { class: "min-h-0 flex-1" }, Xu = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, ec = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, tc = /* @__PURE__ */ fe({
  __name: "OpsLatencyChart",
  props: {
    latencyData: {},
    loading: { type: Boolean }
  },
  setup(b) {
    Rt.register(Vs, It, At, Tt, Dt);
    const o = b, { t: s } = ye(), k = v(() => document.documentElement.classList.contains("dark")), r = v(() => ({
      blue: "#3b82f6",
      grid: k.value ? "#374151" : "#f3f4f6",
      text: k.value ? "#9ca3af" : "#6b7280"
    })), V = v(() => {
      var L;
      return (((L = o.latencyData) == null ? void 0 : L.total_requests) ?? 0) > 0;
    }), D = v(() => V.value ? "ready" : o.loading ? "loading" : "empty"), w = v(() => {
      if (!o.latencyData || !V.value) return null;
      const L = r.value;
      return {
        labels: o.latencyData.buckets.map((m) => m.range),
        datasets: [
          {
            label: s("admin.ops.requests"),
            data: o.latencyData.buckets.map((m) => m.count),
            backgroundColor: L.blue,
            borderRadius: 4,
            barPercentage: 0.6
          }
        ]
      };
    }), R = v(() => {
      const L = r.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
          legend: { display: !1 }
        },
        scales: {
          x: {
            grid: { display: !1 },
            ticks: { color: L.text, font: { size: 10 } }
          },
          y: {
            beginAtZero: !0,
            grid: { color: L.grid, borderDash: [4, 4] },
            ticks: { color: L.text, font: { size: 10 } }
          }
        }
      };
    });
    return (L, m) => (n(), i("div", Ku, [
      e("div", Ju, [
        e("h3", Zu, [
          m[0] || (m[0] = e("svg", {
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
          N(" " + t(a(s)("admin.ops.latencyHistogram")) + " ", 1),
          U(_e, {
            content: a(s)("admin.ops.tooltips.latencyHistogram")
          }, null, 8, ["content"])
        ])
      ]),
      e("div", Yu, [
        D.value === "ready" && w.value ? (n(), ne(a(Fs), {
          key: 0,
          data: w.value,
          options: R.value
        }, null, 8, ["data", "options"])) : (n(), i("div", Xu, [
          D.value === "loading" ? (n(), i("div", ec, t(a(s)("common.loading")), 1)) : (n(), ne(lt, {
            key: 1,
            title: a(s)("common.noData"),
            description: a(s)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), sc = { class: "flex h-full min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, ac = {
  "data-testid": "throughput-chart-header",
  class: "mb-4 flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
}, rc = { class: "flex min-w-0 items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, oc = {
  "data-testid": "throughput-chart-toolbar",
  class: "flex w-full min-w-0 flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:w-auto sm:justify-end"
}, nc = { class: "flex shrink-0 items-center gap-1" }, lc = ["disabled", "title"], ic = ["disabled", "title"], dc = ["disabled", "title"], uc = {
  key: 0,
  class: "mb-3 flex flex-wrap gap-2"
}, cc = ["onClick"], pc = { class: "max-w-[180px] truncate" }, mc = { class: "text-gray-400 dark:text-gray-500" }, gc = {
  key: 1,
  class: "mb-3 flex flex-wrap gap-2"
}, vc = ["onClick"], xc = { class: "uppercase" }, _c = { class: "text-gray-400 dark:text-gray-500" }, fc = { class: "min-h-0 min-w-0 flex-1" }, yc = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, hc = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, bc = /* @__PURE__ */ fe({
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
  setup(b, { emit: o }) {
    Rt.register(Qt, Tt, Dt, Wt, At, Kt, It, Jt);
    const s = b, { t: k } = ye(), r = o, V = S(null);
    xe(
      () => s.timeRange,
      () => {
        setTimeout(() => {
          var $;
          const c = ($ = V.value) == null ? void 0 : $.chart;
          c && typeof c.resetZoom == "function" && c.resetZoom();
        }, 100);
      }
    );
    const D = v(() => document.documentElement.classList.contains("dark")), w = v(() => ({
      blue: "#3b82f6",
      blueAlpha: "#3b82f620",
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: D.value ? "#374151" : "#f3f4f6",
      text: D.value ? "#9ca3af" : "#6b7280"
    })), R = v(() => Ct(s.points.map((c) => c.request_count))), L = v(() => !s.points.length || R.value <= 0 ? null : {
      labels: s.points.map((c) => Xt(c.bucket_start, s.timeRange)),
      datasets: [
        {
          label: "QPS",
          data: s.points.map((c) => c.qps ?? 0),
          borderColor: w.value.blue,
          backgroundColor: w.value.blueAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: k("admin.ops.tpsK"),
          data: s.points.map((c) => (c.tps ?? 0) / 1e3),
          borderColor: w.value.violet,
          backgroundColor: w.value.violetAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10,
          yAxisID: "y1"
        }
      ]
    }), m = v(() => L.value ? "ready" : s.loading ? "loading" : "empty"), f = v(() => {
      const c = w.value;
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
            backgroundColor: D.value ? "#1f2937" : "#ffffff",
            titleColor: D.value ? "#f3f4f6" : "#111827",
            bodyColor: D.value ? "#d1d5db" : "#4b5563",
            borderColor: c.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: ($) => {
                let E = $.dataset.label || "";
                return E && (E += ": "), $.raw !== null && (E += $.parsed.y.toFixed(1)), E;
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
    function j() {
      var $;
      const c = ($ = V.value) == null ? void 0 : $.chart;
      c && typeof c.resetZoom == "function" && c.resetZoom();
    }
    function O() {
      var h;
      const c = (h = V.value) == null ? void 0 : h.chart;
      if (!c || typeof c.toBase64Image != "function") return;
      const $ = c.toBase64Image("image/png", 1), E = document.createElement("a");
      E.href = $, E.download = `ops-throughput-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`, E.click();
    }
    return (c, $) => {
      var E, h;
      return n(), i("div", sc, [
        e("div", ac, [
          e("h3", rc, [
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
            N(" " + t(a(k)("admin.ops.throughputTrend")) + " ", 1),
            s.fullscreen ? M("", !0) : (n(), ne(_e, {
              key: 0,
              content: a(k)("admin.ops.tooltips.throughputTrend")
            }, null, 8, ["content"]))
          ]),
          e("div", oc, [
            $[3] || ($[3] = e("span", { class: "flex shrink-0 items-center gap-1" }, [
              e("span", { class: "h-2 w-2 rounded-full bg-blue-500" }),
              N("QPS")
            ], -1)),
            e("span", nc, [
              $[2] || ($[2] = e("span", { class: "h-2 w-2 rounded-full bg-zo-signal-500" }, null, -1)),
              N(t(a(k)("admin.ops.tpsK")), 1)
            ]),
            s.fullscreen ? M("", !0) : (n(), i(le, { key: 0 }, [
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: m.value !== "ready",
                title: a(k)("admin.ops.requestDetails.title"),
                onClick: $[0] || ($[0] = (Z) => r("openDetails"))
              }, t(a(k)("admin.ops.requestDetails.details")), 9, lc),
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: m.value !== "ready",
                title: a(k)("admin.ops.charts.resetZoomHint"),
                onClick: j
              }, t(a(k)("admin.ops.charts.resetZoom")), 9, ic),
              e("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: m.value !== "ready",
                title: a(k)("admin.ops.charts.downloadChartHint"),
                onClick: O
              }, t(a(k)("admin.ops.charts.downloadChart")), 9, dc)
            ], 64))
          ])
        ]),
        (((E = s.topGroups) == null ? void 0 : E.length) ?? 0) > 0 ? (n(), i("div", uc, [
          (n(!0), i(le, null, ce(s.topGroups, (Z) => (n(), i("button", {
            key: Z.group_id,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (re) => r("selectGroup", Z.group_id)
          }, [
            e("span", pc, t(Z.group_name || `#${Z.group_id}`), 1),
            e("span", mc, t(a(Ue)(Z.request_count)), 1)
          ], 8, cc))), 128))
        ])) : (((h = s.byPlatform) == null ? void 0 : h.length) ?? 0) > 0 ? (n(), i("div", gc, [
          (n(!0), i(le, null, ce(s.byPlatform, (Z) => (n(), i("button", {
            key: Z.platform,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (re) => r("selectPlatform", Z.platform)
          }, [
            e("span", xc, t(Z.platform), 1),
            e("span", _c, t(a(Ue)(Z.request_count)), 1)
          ], 8, vc))), 128))
        ])) : M("", !0),
        e("div", fc, [
          m.value === "ready" && L.value ? (n(), ne(a(Zt), {
            key: 0,
            ref_key: "throughputChartRef",
            ref: V,
            data: L.value,
            options: f.value
          }, null, 8, ["data", "options"])) : (n(), i("div", yc, [
            m.value === "loading" ? (n(), i("div", hc, t(a(k)("common.loading")), 1)) : (n(), ne(lt, {
              key: 1,
              title: a(k)("common.noData"),
              description: a(k)("admin.ops.charts.emptyRequest")
            }, null, 8, ["title", "description"]))
          ]))
        ])
      ]);
    };
  }
}), kc = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, wc = { class: "mb-4 flex shrink-0 items-center justify-between" }, $c = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Cc = { class: "min-h-0 flex-1" }, Sc = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Rc = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Tc = /* @__PURE__ */ fe({
  __name: "OpsSwitchRateTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {},
    fullscreen: { type: Boolean }
  },
  setup(b) {
    Rt.register(Qt, Tt, Dt, Wt, At, Kt, It, Jt);
    const o = b, { t: s } = ye(), k = v(() => document.documentElement.classList.contains("dark")), r = v(() => ({
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: k.value ? "#374151" : "#f3f4f6",
      text: k.value ? "#9ca3af" : "#6b7280"
    })), V = v(() => Ct(o.points.map((L) => L.request_count))), D = v(() => !o.points.length || V.value <= 0 ? null : {
      labels: o.points.map((L) => Xt(L.bucket_start, o.timeRange)),
      datasets: [
        {
          label: s("admin.ops.switchRate"),
          data: o.points.map((L) => {
            const m = L.request_count ?? 0, f = L.switch_count ?? 0;
            return m <= 0 ? 0 : f / m;
          }),
          borderColor: r.value.violet,
          backgroundColor: r.value.violetAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), w = v(() => D.value ? "ready" : o.loading ? "loading" : "empty"), R = v(() => {
      const L = r.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: L.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: k.value ? "#1f2937" : "#ffffff",
            titleColor: k.value ? "#f3f4f6" : "#111827",
            bodyColor: k.value ? "#d1d5db" : "#4b5563",
            borderColor: L.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: (m) => {
                var j;
                const f = typeof ((j = m == null ? void 0 : m.parsed) == null ? void 0 : j.y) == "number" ? m.parsed.y : 0;
                return `${s("admin.ops.switchRate")}: ${f.toFixed(3)}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: "category",
            grid: { display: !1 },
            ticks: {
              color: L.text,
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
            grid: { color: L.grid, borderDash: [4, 4] },
            ticks: {
              color: L.text,
              font: { size: 10 },
              callback: (m) => Number(m).toFixed(3)
            }
          }
        }
      };
    });
    return (L, m) => (n(), i("div", kc, [
      e("div", wc, [
        e("h3", $c, [
          m[0] || (m[0] = e("svg", {
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
          N(" " + t(a(s)("admin.ops.switchRateTrend")) + " ", 1),
          o.fullscreen ? M("", !0) : (n(), ne(_e, {
            key: 0,
            content: a(s)("admin.ops.tooltips.switchRateTrend")
          }, null, 8, ["content"]))
        ])
      ]),
      e("div", Cc, [
        w.value === "ready" && D.value ? (n(), ne(a(Zt), {
          key: 0,
          data: D.value,
          options: R.value
        }, null, 8, ["data", "options"])) : (n(), i("div", Sc, [
          w.value === "loading" ? (n(), i("div", Rc, t(a(s)("common.loading")), 1)) : (n(), ne(lt, {
            key: 1,
            title: a(s)("common.noData"),
            description: a(s)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Dc = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Ec = { class: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4" }, qc = { class: "text-sm font-bold text-gray-900 dark:text-white" }, Lc = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, zc = { class: "flex flex-wrap items-center gap-2" }, Mc = ["disabled"], Ac = {
  key: 0,
  class: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
}, Ic = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Vc = {
  key: 2,
  class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Fc = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Oc = ["onClick"], jc = { class: "flex flex-wrap items-center gap-2" }, Pc = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, Uc = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, Nc = {
  key: 0,
  class: "line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, Bc = { class: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 dark:text-gray-400" }, Hc = { class: "font-mono" }, Gc = { class: "inline-flex items-center gap-1" }, Qc = { class: "text-[11px] text-gray-400 dark:text-gray-500" }, Wc = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, Kc = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, Jc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Zc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Yc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Xc = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, e0 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, t0 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, s0 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, a0 = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, r0 = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, o0 = ["onClick", "title"], n0 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, l0 = { class: "whitespace-nowrap px-4 py-3" }, i0 = { class: "flex items-center gap-2" }, d0 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, u0 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, c0 = { class: "font-mono" }, p0 = { class: "min-w-[260px] px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, m0 = { class: "font-semibold truncate max-w-[360px]" }, g0 = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, v0 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, x0 = { class: "whitespace-nowrap px-4 py-3 text-[11px] text-gray-500 dark:text-gray-400" }, _0 = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, f0 = ["title"], y0 = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, h0 = {
  key: 2,
  class: "flex items-center justify-center gap-2 py-3 text-xs text-gray-500 dark:text-gray-400"
}, b0 = {
  key: 3,
  class: "py-3 text-center text-xs text-gray-400"
}, k0 = {
  key: 0,
  class: "flex items-center justify-center py-10 text-sm text-gray-500 dark:text-gray-400"
}, w0 = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, $0 = {
  key: 2,
  class: "space-y-5"
}, C0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, S0 = { class: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between" }, R0 = { class: "flex flex-wrap items-center gap-2" }, T0 = { class: "mt-2 text-sm font-semibold text-gray-900 dark:text-white" }, D0 = {
  key: 0,
  class: "mt-1 whitespace-pre-wrap text-xs text-gray-600 dark:text-gray-300"
}, E0 = { class: "flex flex-wrap gap-2" }, q0 = { class: "flex items-center gap-2 rounded-lg bg-white px-2 py-1 ring-1 ring-gray-200 dark:bg-dark-800 dark:ring-dark-700" }, L0 = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, z0 = ["disabled"], M0 = ["disabled"], A0 = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2" }, I0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, V0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, F0 = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, O0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, j0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, P0 = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, U0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, N0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, B0 = { class: "mt-1 flex flex-wrap items-center gap-2" }, H0 = { class: "font-mono text-sm font-bold text-gray-900 dark:text-white" }, G0 = ["href"], Q0 = ["href"], W0 = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, K0 = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, J0 = { class: "mt-1 text-sm text-gray-900 dark:text-white" }, Z0 = { key: 0 }, Y0 = { key: 1 }, X0 = { key: 2 }, ep = { class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800" }, tp = { class: "mb-3 flex flex-wrap items-center justify-between gap-3" }, sp = { class: "text-sm font-bold text-gray-900 dark:text-white" }, ap = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, rp = {
  key: 0,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, op = {
  key: 1,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, np = {
  key: 2,
  class: "overflow-hidden rounded-lg border border-gray-100 dark:border-dark-700"
}, lp = { class: "min-w-full divide-y divide-gray-100 dark:divide-dark-700" }, ip = { class: "bg-gray-50 dark:bg-dark-900" }, dp = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, up = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, cp = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, pp = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, mp = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, gp = { class: "px-3 py-2 text-xs" }, vp = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, xp = { key: 0 }, _p = { key: 1 }, Nt = 10, fp = /* @__PURE__ */ fe({
  __name: "OpsAlertEventsCard",
  setup(b) {
    const { t: o } = ye(), s = nt(), k = Et("(min-width: 768px)"), r = S(!1), V = S(!1), D = S([]), w = S(!0);
    let R = 0;
    Ss(() => {
      R++;
    });
    const L = S(!1), m = S(null), f = S(!1), j = S(!1), O = S(!1), c = S([]), $ = S("7d"), E = v(() => [
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), h = S("1h"), Z = v(() => [
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") }
    ]), re = S("24h"), X = v(() => [
      { value: "5m", label: o("admin.ops.timeRange.5m") },
      { value: "30m", label: o("admin.ops.timeRange.30m") },
      { value: "1h", label: o("admin.ops.timeRange.1h") },
      { value: "6h", label: o("admin.ops.timeRange.6h") },
      { value: "24h", label: o("admin.ops.timeRange.24h") },
      { value: "7d", label: o("admin.ops.timeRange.7d") },
      { value: "30d", label: o("admin.ops.timeRange.30d") }
    ]), J = S(""), ue = v(() => [
      { value: "", label: o("common.all") },
      { value: "P0", label: "P0" },
      { value: "P1", label: "P1" },
      { value: "P2", label: "P2" },
      { value: "P3", label: "P3" }
    ]), H = S(""), q = v(() => [
      { value: "", label: o("common.all") },
      { value: "firing", label: o("admin.ops.alertEvents.status.firing") },
      { value: "resolved", label: o("admin.ops.alertEvents.status.resolved") },
      { value: "manual_resolved", label: o("admin.ops.alertEvents.status.manualResolved") }
    ]), d = S(""), _ = v(() => [
      { value: "", label: o("common.all") },
      { value: "true", label: o("admin.ops.alertEvents.table.emailSent") },
      { value: "false", label: o("admin.ops.alertEvents.table.emailIgnored") }
    ]);
    function F(Q = {}) {
      const A = {
        limit: Nt,
        time_range: re.value
      };
      return J.value && (A.severity = J.value), H.value && (A.status = H.value), d.value === "true" && (A.email_sent = !0), d.value === "false" && (A.email_sent = !1), { ...A, ...Q };
    }
    async function x() {
      var A, I;
      const Q = ++R;
      V.value = !1, r.value = !0;
      try {
        const ee = await se.listAlertEvents(F());
        if (Q !== R) return;
        D.value = ee, w.value = ee.length === Nt;
      } catch (ee) {
        if (Q !== R) return;
        console.error("[OpsAlertEventsCard] Failed to load alert events", ee), s.showError(((I = (A = ee == null ? void 0 : ee.response) == null ? void 0 : A.data) == null ? void 0 : I.detail) || o("admin.ops.alertEvents.loadFailed")), D.value = [], w.value = !1;
      } finally {
        Q === R && (r.value = !1);
      }
    }
    async function y() {
      if (V.value || r.value || !w.value) return;
      const Q = D.value[D.value.length - 1];
      if (!Q) return;
      const A = R;
      V.value = !0;
      try {
        const I = await se.listAlertEvents(
          F({ before_fired_at: Q.fired_at || Q.created_at, before_id: Q.id })
        );
        if (A !== R) return;
        if (!I.length) {
          w.value = !1;
          return;
        }
        D.value = [...D.value, ...I], I.length < Nt && (w.value = !1);
      } catch (I) {
        if (A !== R) return;
        console.error("[OpsAlertEventsCard] Failed to load more alert events", I), w.value = !1;
      } finally {
        A === R && (V.value = !1);
      }
    }
    function T(Q) {
      const A = Q.target;
      if (!A) return;
      A.scrollTop + A.clientHeight >= A.scrollHeight - 120 && y();
    }
    function G(Q, A) {
      var ee;
      const I = (ee = Q == null ? void 0 : Q.dimensions) == null ? void 0 : ee[A];
      return I == null ? "" : typeof I == "string" ? I : typeof I == "number" || typeof I == "boolean" ? String(I) : "";
    }
    function pe(Q) {
      const A = Math.max(0, Math.floor(Q)), I = Math.floor(A / 1e3);
      if (I < 60) return `${I}s`;
      const ee = Math.floor(I / 60);
      if (ee < 60) return `${ee}m`;
      const ie = Math.floor(ee / 60);
      return ie < 24 ? `${ie}h` : `${Math.floor(ie / 24)}d`;
    }
    function he(Q) {
      const A = new Date(Q.fired_at || Q.created_at);
      if (Number.isNaN(A.getTime())) return "-";
      const I = Q.resolved_at || null, ee = String(Q.status || "").trim().toLowerCase();
      if (I) {
        const ke = new Date(I);
        if (!Number.isNaN(ke.getTime())) {
          const Me = ke.getTime() - A.getTime();
          return `${o(ee === "manual_resolved" ? "admin.ops.alertEvents.status.manualResolved" : "admin.ops.alertEvents.status.resolved")} ${pe(Me)}`;
        }
      }
      const be = Date.now() - A.getTime();
      return `${o("admin.ops.alertEvents.status.firing")} ${pe(be)}`;
    }
    function ge(Q) {
      var be;
      const A = [], I = G(Q, "platform");
      I && A.push(`platform=${I}`);
      const ee = (be = Q.dimensions) == null ? void 0 : be.group_id;
      ee != null && ee !== "" && A.push(`group_id=${String(ee)}`);
      const ie = G(Q, "region");
      return ie && A.push(`region=${ie}`), A.length ? A.join(" ") : "-";
    }
    function B() {
      L.value = !1, m.value = null, c.value = [];
    }
    async function g(Q) {
      var A, I;
      L.value = !0, m.value = Q, f.value = !0, O.value = !0;
      try {
        const ee = await se.getAlertEvent(Q.id);
        m.value = ee;
      } catch (ee) {
        console.error("[OpsAlertEventsCard] Failed to load alert detail", ee), s.showError(((I = (A = ee == null ? void 0 : ee.response) == null ? void 0 : A.data) == null ? void 0 : I.detail) || o("admin.ops.alertEvents.detail.loadFailed"));
      } finally {
        f.value = !1;
      }
      await p();
    }
    async function p() {
      var A;
      const Q = m.value;
      if (!Q) {
        c.value = [], O.value = !1;
        return;
      }
      O.value = !0;
      try {
        const I = G(Q, "platform"), ee = (A = Q.dimensions) == null ? void 0 : A.group_id, ie = typeof ee == "number" ? ee : void 0, be = await se.listAlertEvents({
          limit: 20,
          time_range: $.value,
          platform: I || void 0,
          group_id: ie,
          status: ""
        });
        c.value = be.filter((ke) => {
          var je, Ze;
          if (ke.rule_id !== Q.rule_id) return !1;
          const Me = G(ke, "platform"), Be = G(Q, "platform");
          if ((Me || "") !== (Be || "")) return !1;
          const tt = (je = ke.dimensions) == null ? void 0 : je.group_id, Je = (Ze = Q.dimensions) == null ? void 0 : Ze.group_id;
          return (tt ?? null) === (Je ?? null);
        });
      } catch (I) {
        console.error("[OpsAlertEventsCard] Failed to load alert history", I), c.value = [];
      } finally {
        O.value = !1;
      }
    }
    function z(Q) {
      const A = Date.now();
      return Q === "1h" ? new Date(A + 3600 * 1e3).toISOString() : Q === "24h" ? new Date(A + 1440 * 60 * 1e3).toISOString() : Q === "7d" ? new Date(A + 10080 * 60 * 1e3).toISOString() : new Date(A + 3600 * 1e3).toISOString();
    }
    async function oe() {
      var A, I, ee;
      const Q = m.value;
      if (Q && !j.value) {
        j.value = !0;
        try {
          const ie = G(Q, "platform"), be = (A = Q.dimensions) == null ? void 0 : A.group_id, ke = typeof be == "number" ? be : null, Me = G(Q, "region") || null;
          await se.createAlertSilence({
            rule_id: Q.rule_id,
            platform: ie || "",
            group_id: ke ?? void 0,
            region: Me ?? void 0,
            until: z(h.value),
            reason: `silence from UI (${h.value})`
          }), s.showSuccess(o("admin.ops.alertEvents.detail.silenceSuccess"));
        } catch (ie) {
          console.error("[OpsAlertEventsCard] Failed to silence alert", ie), s.showError(((ee = (I = ie == null ? void 0 : ie.response) == null ? void 0 : I.data) == null ? void 0 : ee.detail) || o("admin.ops.alertEvents.detail.silenceFailed"));
        } finally {
          j.value = !1;
        }
      }
    }
    async function Le() {
      var Q, A;
      if (m.value && !j.value) {
        j.value = !0;
        try {
          await se.updateAlertEventStatus(m.value.id, "manual_resolved"), s.showSuccess(o("admin.ops.alertEvents.detail.manualResolvedSuccess"));
          const I = await se.getAlertEvent(m.value.id);
          m.value = I, await x(), await p();
        } catch (I) {
          console.error("[OpsAlertEventsCard] Failed to resolve alert", I), s.showError(((A = (Q = I == null ? void 0 : I.response) == null ? void 0 : Q.data) == null ? void 0 : A.detail) || o("admin.ops.alertEvents.detail.manualResolvedFailed"));
        } finally {
          j.value = !1;
        }
      }
    }
    St(() => {
      x();
    }), xe([re, J, H, d], () => {
      D.value = [], w.value = !0, x();
    }), xe($, () => {
      L.value && p();
    });
    function ze(Q) {
      const A = String(Q || "").trim().toLowerCase();
      return A === "p0" || A === "critical" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : A === "p1" || A === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : A === "p2" || A === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300";
    }
    function Te(Q) {
      const A = String(Q || "").trim().toLowerCase();
      return A === "firing" ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-500/30" : A === "resolved" ? "bg-zo-signal-50 text-zo-signal-700 ring-zo-signal-600/20 dark:bg-zo-signal-900/30 dark:text-zo-signal-300 dark:ring-zo-signal-500/30" : A === "manual_resolved" ? "bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-900/30 dark:text-slate-300 dark:ring-slate-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-500/30";
    }
    function De(Q) {
      const A = String(Q || "").trim().toLowerCase();
      return A ? A === "firing" ? o("admin.ops.alertEvents.status.firing") : A === "resolved" ? o("admin.ops.alertEvents.status.resolved") : A === "manual_resolved" ? o("admin.ops.alertEvents.status.manualResolved") : A.toUpperCase() : "-";
    }
    const Ne = v(() => D.value.length === 0 && !r.value);
    return (Q, A) => (n(), i("div", Dc, [
      e("div", Ec, [
        e("div", null, [
          e("h3", qc, t(a(o)("admin.ops.alertEvents.title")), 1),
          e("p", Lc, t(a(o)("admin.ops.alertEvents.description")), 1)
        ]),
        e("div", zc, [
          U(me, {
            "model-value": re.value,
            options: X.value,
            class: "w-[120px]",
            onChange: A[0] || (A[0] = (I) => re.value = String(I || "24h"))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": J.value,
            options: ue.value,
            class: "w-[88px]",
            onChange: A[1] || (A[1] = (I) => J.value = String(I || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": H.value,
            options: q.value,
            class: "w-[110px]",
            onChange: A[2] || (A[2] = (I) => H.value = String(I || ""))
          }, null, 8, ["model-value", "options"]),
          U(me, {
            "model-value": d.value,
            options: _.value,
            class: "w-[110px]",
            onChange: A[3] || (A[3] = (I) => d.value = String(I || ""))
          }, null, 8, ["model-value", "options"]),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: x
          }, [
            (n(), i("svg", {
              class: K(["h-3.5 w-3.5", { "animate-spin": r.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...A[6] || (A[6] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            N(" " + t(a(o)("common.refresh")), 1)
          ], 8, Mc)
        ])
      ]),
      r.value ? (n(), i("div", Ac, [
        A[7] || (A[7] = e("svg", {
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
        N(" " + t(a(o)("admin.ops.alertEvents.loading")), 1)
      ])) : Ne.value ? (n(), i("div", Ic, t(a(o)("admin.ops.alertEvents.empty")), 1)) : (n(), i("div", Vc, [
        e("div", {
          class: "max-h-[600px] overflow-y-auto",
          onScroll: T
        }, [
          a(k) ? (n(), i("table", Wc, [
            e("thead", Kc, [
              e("tr", null, [
                e("th", Jc, t(a(o)("admin.ops.alertEvents.table.time")), 1),
                e("th", Zc, t(a(o)("admin.ops.alertEvents.table.severity")), 1),
                e("th", Yc, t(a(o)("admin.ops.alertEvents.table.platform")), 1),
                e("th", Xc, t(a(o)("admin.ops.alertEvents.table.ruleId")), 1),
                e("th", e0, t(a(o)("admin.ops.alertEvents.table.title")), 1),
                e("th", t0, t(a(o)("admin.ops.alertEvents.table.duration")), 1),
                e("th", s0, t(a(o)("admin.ops.alertEvents.table.dimensions")), 1),
                e("th", a0, t(a(o)("admin.ops.alertEvents.table.email")), 1)
              ])
            ]),
            e("tbody", r0, [
              (n(!0), i(le, null, ce(D.value, (I) => (n(), i("tr", {
                key: I.id,
                class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50",
                onClick: (ee) => g(I),
                title: I.title || ""
              }, [
                e("td", n0, t(a(Ke)(I.fired_at || I.created_at)), 1),
                e("td", l0, [
                  e("div", i0, [
                    e("span", {
                      class: K(["rounded-full px-2 py-1 text-[10px] font-bold", ze(String(I.severity || ""))])
                    }, t(I.severity || "-"), 3),
                    e("span", {
                      class: K(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Te(I.status)])
                    }, t(De(I.status)), 3)
                  ])
                ]),
                e("td", d0, t(G(I, "platform") || "-"), 1),
                e("td", u0, [
                  e("span", c0, "#" + t(I.rule_id), 1)
                ]),
                e("td", p0, [
                  e("div", m0, t(I.title || "-"), 1),
                  I.description ? (n(), i("div", g0, t(I.description), 1)) : M("", !0)
                ]),
                e("td", v0, t(he(I)), 1),
                e("td", x0, t(ge(I)), 1),
                e("td", _0, [
                  e("span", {
                    class: "inline-flex items-center justify-end gap-1.5",
                    title: I.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")
                  }, [
                    I.email_sent ? (n(), ne(Oe, {
                      key: 0,
                      name: "checkCircle",
                      size: "sm",
                      class: "text-zo-signal-600 dark:text-zo-signal-400"
                    })) : (n(), ne(Oe, {
                      key: 1,
                      name: "ban",
                      size: "sm",
                      class: "text-gray-400 dark:text-gray-500"
                    })),
                    e("span", y0, t(I.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")), 1)
                  ], 8, f0)
                ])
              ], 8, o0))), 128))
            ])
          ])) : (n(), i("div", Fc, [
            (n(!0), i(le, null, ce(D.value, (I) => (n(), i("div", {
              key: I.id,
              class: "cursor-pointer space-y-2 p-4 hover:bg-gray-50 dark:hover:bg-dark-700/50",
              onClick: (ee) => g(I)
            }, [
              e("div", jc, [
                e("span", {
                  class: K(["rounded-full px-2 py-1 text-[10px] font-bold", ze(String(I.severity || ""))])
                }, t(I.severity || "-"), 3),
                e("span", {
                  class: K(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Te(I.status)])
                }, t(De(I.status)), 3),
                e("span", Pc, t(a(Ke)(I.fired_at || I.created_at)), 1)
              ]),
              e("div", Uc, t(I.title || "-"), 1),
              I.description ? (n(), i("div", Nc, t(I.description), 1)) : M("", !0),
              e("div", Bc, [
                e("span", null, [
                  e("span", Hc, "#" + t(I.rule_id), 1),
                  N(" · " + t(he(I)), 1)
                ]),
                e("span", Gc, [
                  I.email_sent ? (n(), ne(Oe, {
                    key: 0,
                    name: "checkCircle",
                    size: "xs",
                    class: "text-zo-signal-600 dark:text-zo-signal-400"
                  })) : (n(), ne(Oe, {
                    key: 1,
                    name: "ban",
                    size: "xs",
                    class: "text-gray-400 dark:text-gray-500"
                  })),
                  N(" " + t(I.email_sent ? a(o)("admin.ops.alertEvents.table.emailSent") : a(o)("admin.ops.alertEvents.table.emailIgnored")), 1)
                ])
              ]),
              e("div", Qc, t(ge(I)), 1)
            ], 8, Oc))), 128))
          ])),
          V.value ? (n(), i("div", h0, [
            A[8] || (A[8] = e("svg", {
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
            N(" " + t(a(o)("admin.ops.alertEvents.loading")), 1)
          ])) : !w.value && D.value.length > 0 ? (n(), i("div", b0, " - ")) : M("", !0)
        ], 32)
      ])),
      U(et, {
        show: L.value,
        title: a(o)("admin.ops.alertEvents.detail.title"),
        width: "wide",
        "close-on-click-outside": !0,
        onClose: B
      }, {
        default: ve(() => {
          var I, ee;
          return [
            f.value ? (n(), i("div", k0, t(a(o)("admin.ops.alertEvents.detail.loading")), 1)) : m.value ? (n(), i("div", $0, [
              e("div", C0, [
                e("div", S0, [
                  e("div", null, [
                    e("div", R0, [
                      e("span", {
                        class: K(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold", ze(String(m.value.severity || ""))])
                      }, t(m.value.severity || "-"), 3),
                      e("span", {
                        class: K(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Te(m.value.status)])
                      }, t(De(m.value.status)), 3)
                    ]),
                    e("div", T0, t(m.value.title || "-"), 1),
                    m.value.description ? (n(), i("div", D0, t(m.value.description), 1)) : M("", !0)
                  ]),
                  e("div", E0, [
                    e("div", q0, [
                      e("span", L0, t(a(o)("admin.ops.alertEvents.detail.silence")), 1),
                      U(me, {
                        "model-value": h.value,
                        options: Z.value,
                        class: "w-[110px]",
                        onChange: A[4] || (A[4] = (ie) => h.value = String(ie || "1h"))
                      }, null, 8, ["model-value", "options"]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        disabled: j.value,
                        onClick: oe
                      }, [
                        U(Oe, {
                          name: "ban",
                          size: "sm"
                        }),
                        N(" " + t(a(o)("common.apply")), 1)
                      ], 8, z0)
                    ]),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      disabled: j.value,
                      onClick: Le
                    }, [
                      U(Oe, {
                        name: "checkCircle",
                        size: "sm"
                      }),
                      N(" " + t(a(o)("admin.ops.alertEvents.detail.manualResolve")), 1)
                    ], 8, M0)
                  ])
                ])
              ]),
              e("div", A0, [
                e("div", I0, [
                  e("div", V0, t(a(o)("admin.ops.alertEvents.detail.firedAt")), 1),
                  e("div", F0, t(a(Ke)(m.value.fired_at || m.value.created_at)), 1)
                ]),
                e("div", O0, [
                  e("div", j0, t(a(o)("admin.ops.alertEvents.detail.resolvedAt")), 1),
                  e("div", P0, t(m.value.resolved_at ? a(Ke)(m.value.resolved_at) : "-"), 1)
                ]),
                e("div", U0, [
                  e("div", N0, t(a(o)("admin.ops.alertEvents.detail.ruleId")), 1),
                  e("div", B0, [
                    e("div", H0, "#" + t(m.value.rule_id), 1),
                    e("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?open_alert_rules=1&alert_rule_id=${m.value.rule_id}`
                    }, [
                      U(Oe, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      N(" " + t(a(o)("admin.ops.alertEvents.detail.viewRule")), 1)
                    ], 8, G0),
                    e("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?platform=${encodeURIComponent(G(m.value, "platform") || "")}&group_id=${((I = m.value.dimensions) == null ? void 0 : I.group_id) || ""}&error_type=request&open_error_details=1`
                    }, [
                      U(Oe, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      N(" " + t(a(o)("admin.ops.alertEvents.detail.viewLogs")), 1)
                    ], 8, Q0)
                  ])
                ]),
                e("div", W0, [
                  e("div", K0, t(a(o)("admin.ops.alertEvents.detail.dimensions")), 1),
                  e("div", J0, [
                    G(m.value, "platform") ? (n(), i("div", Z0, "platform=" + t(G(m.value, "platform")), 1)) : M("", !0),
                    (ee = m.value.dimensions) != null && ee.group_id ? (n(), i("div", Y0, "group_id=" + t(m.value.dimensions.group_id), 1)) : M("", !0),
                    G(m.value, "region") ? (n(), i("div", X0, "region=" + t(G(m.value, "region")), 1)) : M("", !0)
                  ])
                ])
              ]),
              e("div", ep, [
                e("div", tp, [
                  e("div", null, [
                    e("div", sp, t(a(o)("admin.ops.alertEvents.detail.historyTitle")), 1),
                    e("div", ap, t(a(o)("admin.ops.alertEvents.detail.historyHint")), 1)
                  ]),
                  U(me, {
                    "model-value": $.value,
                    options: E.value,
                    class: "w-[140px]",
                    onChange: A[5] || (A[5] = (ie) => $.value = String(ie || "7d"))
                  }, null, 8, ["model-value", "options"])
                ]),
                O.value ? (n(), i("div", rp, t(a(o)("admin.ops.alertEvents.detail.historyLoading")), 1)) : c.value.length === 0 ? (n(), i("div", op, t(a(o)("admin.ops.alertEvents.detail.historyEmpty")), 1)) : (n(), i("div", np, [
                  e("table", lp, [
                    e("thead", ip, [
                      e("tr", null, [
                        e("th", dp, t(a(o)("admin.ops.alertEvents.table.time")), 1),
                        e("th", up, t(a(o)("admin.ops.alertEvents.table.status")), 1),
                        e("th", cp, t(a(o)("admin.ops.alertEvents.table.metric")), 1)
                      ])
                    ]),
                    e("tbody", pp, [
                      (n(!0), i(le, null, ce(c.value, (ie) => (n(), i("tr", {
                        key: ie.id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        e("td", mp, t(a(Ke)(ie.fired_at || ie.created_at)), 1),
                        e("td", gp, [
                          e("span", {
                            class: K(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Te(ie.status)])
                          }, t(De(ie.status)), 3)
                        ]),
                        e("td", vp, [
                          typeof ie.metric_value == "number" && typeof ie.threshold_value == "number" ? (n(), i("span", xp, t(ie.metric_value.toFixed(2)) + " / " + t(ie.threshold_value.toFixed(2)), 1)) : (n(), i("span", _p, "-"))
                        ])
                      ]))), 128))
                    ])
                  ])
                ]))
              ])
            ])) : (n(), i("div", w0, t(a(o)("admin.ops.alertEvents.detail.empty")), 1))
          ];
        }),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), yp = { class: "card p-4 md:p-5" }, hp = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, bp = { class: "text-sm font-bold text-gray-900 dark:text-white" }, kp = { class: "flex flex-wrap items-center gap-2" }, wp = { class: "w-36" }, $p = { class: "w-36" }, Cp = {
  key: 0,
  class: "w-28"
}, Sp = { class: "w-24" }, Rp = ["disabled"], Tp = ["disabled"], Dp = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ep = {
  key: 0,
  class: "mb-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, qp = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-500 dark:text-gray-400"
}, Lp = {
  key: 3,
  class: "space-y-3"
}, zp = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, Mp = { class: "max-h-[420px] overflow-auto" }, Ap = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Ip = { class: "break-all text-xs font-medium text-gray-900 dark:text-gray-100" }, Vp = { class: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs" }, Fp = { class: "flex items-baseline justify-between gap-2" }, Op = { class: "text-gray-500 dark:text-gray-400" }, jp = { class: "text-gray-700 dark:text-gray-200" }, Pp = { class: "flex items-baseline justify-between gap-2" }, Up = { class: "text-gray-500 dark:text-gray-400" }, Np = { class: "text-gray-700 dark:text-gray-200" }, Bp = { class: "flex items-baseline justify-between gap-2" }, Hp = { class: "text-gray-500 dark:text-gray-400" }, Gp = { class: "text-gray-700 dark:text-gray-200" }, Qp = { class: "flex items-baseline justify-between gap-2" }, Wp = { class: "text-gray-500 dark:text-gray-400" }, Kp = { class: "text-gray-700 dark:text-gray-200" }, Jp = { class: "flex items-baseline justify-between gap-2" }, Zp = { class: "text-gray-500 dark:text-gray-400" }, Yp = { class: "text-gray-700 dark:text-gray-200" }, Xp = { class: "flex items-baseline justify-between gap-2" }, em = { class: "text-gray-500 dark:text-gray-400" }, tm = { class: "text-gray-700 dark:text-gray-200" }, sm = {
  key: 1,
  class: "min-w-full text-left text-xs md:text-sm"
}, am = { class: "sticky top-0 z-10 bg-white dark:bg-dark-800" }, rm = { class: "border-b border-gray-200 text-gray-500 dark:border-dark-700 dark:text-gray-400" }, om = { class: "px-2 py-2 font-semibold" }, nm = { class: "px-2 py-2 font-semibold" }, lm = { class: "px-2 py-2 font-semibold" }, im = { class: "px-2 py-2 font-semibold" }, dm = { class: "px-2 py-2 font-semibold" }, um = { class: "px-2 py-2 font-semibold" }, cm = { class: "px-2 py-2 font-semibold" }, pm = { class: "px-2 py-2 font-medium" }, mm = { class: "px-2 py-2" }, gm = { class: "px-2 py-2" }, vm = { class: "px-2 py-2" }, xm = { class: "px-2 py-2" }, _m = { class: "px-2 py-2" }, fm = { class: "px-2 py-2" }, ym = {
  key: 0,
  class: "mt-3 text-xs text-gray-500 dark:text-gray-400"
}, hm = /* @__PURE__ */ fe({
  __name: "OpsOpenAITokenStatsCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(b) {
    const o = b, { t: s } = ye(), k = Et("(min-width: 768px)"), r = S(!1), V = S(""), D = S(null), w = S("30d"), R = S("topn"), L = S(20), m = S(1), f = S(20), j = v(() => {
      var d;
      return ((d = D.value) == null ? void 0 : d.items) ?? [];
    }), O = v(() => {
      var d;
      return ((d = D.value) == null ? void 0 : d.total) ?? 0;
    }), c = v(() => {
      if (R.value !== "pagination") return 1;
      const d = f.value > 0 ? f.value : 20;
      return Math.max(1, Math.ceil(O.value / d));
    }), $ = v(() => [
      { value: "30m", label: s("admin.ops.timeRange.30m") },
      { value: "1h", label: s("admin.ops.timeRange.1h") },
      { value: "1d", label: s("admin.ops.timeRange.1d") },
      { value: "15d", label: s("admin.ops.timeRange.15d") },
      { value: "30d", label: s("admin.ops.timeRange.30d") }
    ]), E = v(() => [
      { value: "topn", label: s("admin.ops.openaiTokenStats.viewModeTopN") },
      { value: "pagination", label: s("admin.ops.openaiTokenStats.viewModePagination") }
    ]), h = v(() => [
      { value: 10, label: "Top 10" },
      { value: 20, label: "Top 20" },
      { value: 50, label: "Top 50" },
      { value: 100, label: "Top 100" }
    ]), Z = v(() => [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 50, label: "50" },
      { value: 100, label: "100" }
    ]);
    function re(d) {
      return typeof d != "number" || !Number.isFinite(d) ? "-" : d.toFixed(2);
    }
    function X(d) {
      return typeof d != "number" || !Number.isFinite(d) ? "-" : Ue(Math.round(d));
    }
    function J() {
      const d = {
        time_range: w.value,
        platform: o.platformFilter || void 0,
        group_id: typeof o.groupIdFilter == "number" && o.groupIdFilter > 0 ? o.groupIdFilter : void 0
      };
      return R.value === "topn" ? d.top_n = L.value : (d.page = m.value, d.page_size = f.value), d;
    }
    async function ue() {
      r.value = !0, V.value = "";
      try {
        D.value = await se.getOpenAITokenStats(J()), R.value === "pagination" && m.value > c.value && (m.value = c.value, D.value = await se.getOpenAITokenStats(J()));
      } catch (d) {
        console.error("[OpsOpenAITokenStatsCard] Failed to load data", d), D.value = null, V.value = (d == null ? void 0 : d.message) || s("admin.ops.openaiTokenStats.failedToLoad");
      } finally {
        r.value = !1;
      }
    }
    xe(
      () => ({
        timeRange: w.value,
        viewMode: R.value,
        topN: L.value,
        page: m.value,
        pageSize: f.value,
        platform: o.platformFilter,
        groupId: o.groupIdFilter,
        refreshToken: o.refreshToken
      }),
      (d, _) => {
        const F = !_ || d.timeRange !== _.timeRange || d.viewMode !== _.viewMode || d.pageSize !== _.pageSize || d.platform !== _.platform || d.groupId !== _.groupId;
        if (d.viewMode === "pagination" && F && d.page !== 1) {
          m.value = 1;
          return;
        }
        ue();
      },
      { immediate: !0 }
    );
    function H() {
      R.value === "pagination" && m.value > 1 && (m.value -= 1);
    }
    function q() {
      R.value === "pagination" && m.value < c.value && (m.value += 1);
    }
    return (d, _) => (n(), i("section", yp, [
      e("div", hp, [
        e("h3", bp, t(a(s)("admin.ops.openaiTokenStats.title")), 1),
        e("div", kp, [
          e("div", wp, [
            U(me, {
              modelValue: w.value,
              "onUpdate:modelValue": _[0] || (_[0] = (F) => w.value = F),
              options: $.value
            }, null, 8, ["modelValue", "options"])
          ]),
          e("div", $p, [
            U(me, {
              modelValue: R.value,
              "onUpdate:modelValue": _[1] || (_[1] = (F) => R.value = F),
              options: E.value
            }, null, 8, ["modelValue", "options"])
          ]),
          R.value === "topn" ? (n(), i("div", Cp, [
            U(me, {
              modelValue: L.value,
              "onUpdate:modelValue": _[2] || (_[2] = (F) => L.value = F),
              options: h.value
            }, null, 8, ["modelValue", "options"])
          ])) : (n(), i(le, { key: 1 }, [
            e("div", Sp, [
              U(me, {
                modelValue: f.value,
                "onUpdate:modelValue": _[3] || (_[3] = (F) => f.value = F),
                options: Z.value
              }, null, 8, ["modelValue", "options"])
            ]),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || m.value <= 1,
              onClick: H
            }, t(a(s)("admin.ops.openaiTokenStats.prevPage")), 9, Rp),
            e("button", {
              class: "btn btn-secondary btn-sm",
              disabled: r.value || m.value >= c.value,
              onClick: q
            }, t(a(s)("admin.ops.openaiTokenStats.nextPage")), 9, Tp),
            e("span", Dp, t(a(s)("admin.ops.openaiTokenStats.pageInfo", { page: m.value, total: c.value })), 1)
          ], 64))
        ])
      ]),
      V.value ? (n(), i("div", Ep, t(V.value), 1)) : M("", !0),
      r.value ? (n(), i("div", qp, t(a(s)("admin.ops.loadingText")), 1)) : j.value.length === 0 ? (n(), ne(lt, {
        key: 2,
        title: a(s)("common.noData"),
        description: a(s)("admin.ops.openaiTokenStats.empty")
      }, null, 8, ["title", "description"])) : (n(), i("div", Lp, [
        e("div", zp, [
          e("div", Mp, [
            a(k) ? (n(), i("table", sm, [
              e("thead", am, [
                e("tr", rm, [
                  e("th", om, t(a(s)("admin.ops.openaiTokenStats.table.model")), 1),
                  e("th", nm, t(a(s)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                  e("th", lm, t(a(s)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                  e("th", im, t(a(s)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                  e("th", dm, t(a(s)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                  e("th", um, t(a(s)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                  e("th", cm, t(a(s)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1)
                ])
              ]),
              e("tbody", null, [
                (n(!0), i(le, null, ce(j.value, (F) => (n(), i("tr", {
                  key: F.model,
                  class: "border-b border-gray-100 text-gray-700 last:border-b-0 dark:border-dark-800 dark:text-gray-200"
                }, [
                  e("td", pm, t(F.model), 1),
                  e("td", mm, t(X(F.request_count)), 1),
                  e("td", gm, t(re(F.avg_tokens_per_sec)), 1),
                  e("td", vm, t(re(F.avg_first_token_ms)), 1),
                  e("td", xm, t(X(F.total_output_tokens)), 1),
                  e("td", _m, t(X(F.avg_duration_ms)), 1),
                  e("td", fm, t(X(F.requests_with_first_token)), 1)
                ]))), 128))
              ])
            ])) : (n(), i("div", Ap, [
              (n(!0), i(le, null, ce(j.value, (F) => (n(), i("div", {
                key: F.model,
                class: "space-y-2 p-3"
              }, [
                e("div", Ip, t(F.model), 1),
                e("div", Vp, [
                  e("div", Fp, [
                    e("span", Op, t(a(s)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                    e("span", jp, t(X(F.request_count)), 1)
                  ]),
                  e("div", Pp, [
                    e("span", Up, t(a(s)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                    e("span", Np, t(re(F.avg_tokens_per_sec)), 1)
                  ]),
                  e("div", Bp, [
                    e("span", Hp, t(a(s)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                    e("span", Gp, t(re(F.avg_first_token_ms)), 1)
                  ]),
                  e("div", Qp, [
                    e("span", Wp, t(a(s)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                    e("span", Kp, t(X(F.total_output_tokens)), 1)
                  ]),
                  e("div", Jp, [
                    e("span", Zp, t(a(s)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                    e("span", Yp, t(X(F.avg_duration_ms)), 1)
                  ]),
                  e("div", Xp, [
                    e("span", em, t(a(s)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1),
                    e("span", tm, t(X(F.requests_with_first_token)), 1)
                  ])
                ])
              ]))), 128))
            ]))
          ])
        ]),
        R.value === "topn" ? (n(), i("div", ym, t(a(s)("admin.ops.openaiTokenStats.totalModels", { total: O.value })), 1)) : M("", !0)
      ]))
    ]));
  }
}), bm = { class: "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-dark-700 dark:bg-dark-900/60" }, km = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, wm = { class: "text-sm font-bold text-gray-900 dark:text-white" }, $m = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Cm = { class: "flex flex-wrap items-center gap-2 text-xs" }, Sm = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Rm = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Tm = { class: "rounded-md bg-zo-alert-100 px-2 py-1 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" }, Dm = { class: "rounded-md bg-red-100 px-2 py-1 text-red-700 dark:bg-red-900/30 dark:text-red-300" }, Em = { class: "mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-dark-700 dark:bg-dark-800/70" }, qm = { class: "mb-2 flex items-center justify-between" }, Lm = { class: "text-xs font-semibold text-gray-700 dark:text-gray-200" }, zm = {
  key: 0,
  class: "text-xs text-gray-500"
}, Mm = { class: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6" }, Am = { class: "text-xs text-gray-600 dark:text-gray-300" }, Im = { class: "text-xs text-gray-600 dark:text-gray-300" }, Vm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Fm = { class: "text-xs text-gray-600 dark:text-gray-300" }, Om = { class: "text-xs text-gray-600 dark:text-gray-300" }, jm = { class: "mt-1 block text-[11px] text-gray-500 dark:text-gray-400" }, Pm = { class: "md:col-span-2 xl:col-span-6" }, Um = { class: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end" }, Nm = { class: "flex flex-wrap items-center gap-x-4 gap-y-2" }, Bm = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Hm = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Gm = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Qm = { class: "flex flex-wrap items-center gap-2 lg:justify-end" }, Wm = ["disabled"], Km = ["disabled"], Jm = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Zm = {
  key: 0,
  class: "mt-2 text-xs text-red-600 dark:text-red-400"
}, Ym = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-5" }, Xm = { class: "text-xs text-gray-600 dark:text-gray-300" }, eg = { class: "text-xs text-gray-600 dark:text-gray-300" }, tg = { class: "text-xs text-gray-600 dark:text-gray-300" }, sg = { class: "text-xs text-gray-600 dark:text-gray-300" }, ag = { class: "text-xs text-gray-600 dark:text-gray-300" }, rg = ["placeholder"], og = { class: "text-xs text-gray-600 dark:text-gray-300" }, ng = { class: "text-xs text-gray-600 dark:text-gray-300" }, lg = { class: "text-xs text-gray-600 dark:text-gray-300" }, ig = { class: "text-xs text-gray-600 dark:text-gray-300" }, dg = { class: "text-xs text-gray-600 dark:text-gray-300" }, ug = { class: "text-xs text-gray-600 dark:text-gray-300" }, cg = { class: "text-xs text-gray-600 dark:text-gray-300" }, pg = { class: "text-xs text-gray-600 dark:text-gray-300" }, mg = { class: "text-xs text-gray-600 dark:text-gray-300" }, gg = ["placeholder"], vg = { class: "mb-3 flex flex-wrap gap-2" }, xg = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, _g = {
  key: 0,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, fg = {
  key: 1,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, yg = {
  key: 2,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, hg = { class: "flex items-center justify-between gap-2" }, bg = { class: "text-xs text-gray-500 dark:text-gray-400" }, kg = ["title"], wg = { class: "whitespace-normal break-all text-xs text-gray-700 dark:text-gray-300" }, $g = {
  key: 3,
  class: "overflow-auto"
}, Cg = { class: "min-w-full table-fixed divide-y divide-gray-200 dark:divide-dark-700" }, Sg = { class: "bg-gray-50 dark:bg-dark-900" }, Rg = { class: "w-[170px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, Tg = { class: "w-[160px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, Dg = { class: "w-[80px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, Eg = { class: "px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, qg = { class: "divide-y divide-gray-100 dark:divide-dark-800" }, Lg = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, zg = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, Mg = ["title"], Ag = { class: "px-3 py-2 text-xs" }, Ig = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300 whitespace-normal break-all" }, Vg = /* @__PURE__ */ fe({
  __name: "OpsSystemLogTable",
  props: {
    platformFilter: { default: "" },
    refreshToken: { default: 0 }
  },
  setup(b) {
    const o = nt(), { t: s } = ye(), k = Et("(min-width: 768px)"), r = b, V = S(!1), D = S([]), w = S(0), R = S(1), L = S(20), m = S({
      queue_depth: 0,
      queue_capacity: 0,
      dropped_count: 0,
      write_failed_count: 0,
      written_count: 0,
      avg_write_delay_ms: 0
    }), f = S(!1), j = S(!1), O = Ht({
      level: "info",
      persist_access_logs: !1,
      enable_sampling: !1,
      sampling_initial: 100,
      sampling_thereafter: 100,
      caller: !0,
      stacktrace_level: "error",
      retention_days: 30
    }), c = Ht({
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
    ], E = [
      { value: "none", label: "none" },
      { value: "error", label: "error" },
      { value: "fatal", label: "fatal" }
    ], h = [
      { value: "5m", label: "5m" },
      { value: "30m", label: "30m" },
      { value: "1h", label: "1h" },
      { value: "6h", label: "6h" },
      { value: "24h", label: "24h" },
      { value: "7d", label: "7d" },
      { value: "30d", label: "30d" }
    ], Z = v(() => [
      { value: "", label: s("admin.ops.systemLogs.all") },
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ]), re = (g) => {
      const p = String(g || "").toLowerCase();
      return p === "error" || p === "fatal" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : p === "warn" || p === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : p === "debug" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    }, X = (g) => {
      if (!g) return "-";
      const p = new Date(g);
      return Number.isNaN(p.getTime()) ? g : p.toLocaleString();
    }, J = (g, p) => {
      if (!g) return "";
      const z = g[p];
      return z == null ? "" : typeof z == "string" ? z.trim() : typeof z == "number" || typeof z == "boolean" ? String(z) : "";
    }, ue = (g) => {
      const p = [], z = String(g.message || "").trim();
      z && p.push(z);
      const oe = g.extra || {}, Le = J(oe, "status_code"), ze = J(oe, "latency_ms"), Te = J(oe, "method"), De = J(oe, "path"), Ne = J(oe, "client_ip"), Q = J(oe, "protocol"), A = [];
      Le && A.push(`status=${Le}`), ze && A.push(`latency_ms=${ze}`), Te && A.push(`method=${Te}`), De && A.push(`path=${De}`), Ne && A.push(`ip=${Ne}`), Q && A.push(`proto=${Q}`), A.length > 0 && p.push(A.join(" "));
      const I = [];
      g.request_id && I.push(`req=${g.request_id}`), g.client_request_id && I.push(`client_req=${g.client_request_id}`), g.user_id != null && I.push(`user=${g.user_id}`), g.api_key_id != null && I.push(`key=${g.api_key_id}`), g.account_id != null && I.push(`acc=${g.account_id}`), g.platform && I.push(`platform=${g.platform}`), g.model && I.push(`model=${g.model}`), I.length > 0 && p.push(I.join(" "));
      const ee = J(oe, "errors");
      ee && p.push(`errors=${ee}`);
      const ie = J(oe, "err") || J(oe, "error");
      return ie && p.push(`error=${ie}`), p.join("  ");
    }, H = (g) => {
      if (!g) return;
      const p = new Date(g);
      if (!Number.isNaN(p.getTime()))
        return p.toISOString();
    }, q = () => {
      const g = {
        page: R.value,
        page_size: L.value,
        time_range: c.time_range
      };
      if (c.time_range === "30d" && (g.time_range = "30d"), c.start_time && (g.start_time = H(c.start_time)), c.end_time && (g.end_time = H(c.end_time)), c.host.trim() && (g.host = c.host.trim()), c.level.trim() && (g.level = c.level.trim()), c.component.trim() && (g.component = c.component.trim()), c.request_id.trim() && (g.request_id = c.request_id.trim()), c.client_request_id.trim() && (g.client_request_id = c.client_request_id.trim()), c.user_id.trim()) {
        const p = Number.parseInt(c.user_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (g.user_id = p);
      }
      if (c.api_key_id.trim()) {
        const p = Number.parseInt(c.api_key_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (g.api_key_id = p);
      }
      if (c.account_id.trim()) {
        const p = Number.parseInt(c.account_id.trim(), 10);
        Number.isFinite(p) && p > 0 && (g.account_id = p);
      }
      return c.platform.trim() && (g.platform = c.platform.trim()), c.model.trim() && (g.model = c.model.trim()), c.q.trim() && (g.q = c.q.trim()), g;
    }, d = async () => {
      var g, p;
      V.value = !0;
      try {
        const z = await se.listSystemLogs(q());
        D.value = z.items || [], w.value = z.total || 0;
      } catch (z) {
        console.error("[OpsSystemLogTable] Failed to fetch logs", z), o.showError(((p = (g = z == null ? void 0 : z.response) == null ? void 0 : g.data) == null ? void 0 : p.detail) || s("admin.ops.systemLogs.loadFailed"));
      } finally {
        V.value = !1;
      }
    }, _ = async () => {
      try {
        m.value = await se.getSystemLogSinkHealth();
      } catch {
      }
    }, F = async () => {
      f.value = !0;
      try {
        const g = await se.getRuntimeLogConfig();
        O.level = g.level, O.persist_access_logs = g.persist_access_logs, O.enable_sampling = g.enable_sampling, O.sampling_initial = g.sampling_initial, O.sampling_thereafter = g.sampling_thereafter, O.caller = g.caller, O.stacktrace_level = g.stacktrace_level, O.retention_days = g.retention_days;
      } catch (g) {
        console.error("[OpsSystemLogTable] Failed to load runtime log config", g);
      } finally {
        f.value = !1;
      }
    }, x = async () => {
      var g, p;
      j.value = !0;
      try {
        const z = await se.updateRuntimeLogConfig({ ...O });
        O.level = z.level, O.persist_access_logs = z.persist_access_logs, O.enable_sampling = z.enable_sampling, O.sampling_initial = z.sampling_initial, O.sampling_thereafter = z.sampling_thereafter, O.caller = z.caller, O.stacktrace_level = z.stacktrace_level, O.retention_days = z.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigActive"));
      } catch (z) {
        console.error("[OpsSystemLogTable] Failed to save runtime log config", z), o.showError(((p = (g = z == null ? void 0 : z.response) == null ? void 0 : g.data) == null ? void 0 : p.detail) || s("admin.ops.systemLogs.runtimeConfigSaveFailed"));
      } finally {
        j.value = !1;
      }
    }, y = async () => {
      var p, z;
      if (window.confirm(s("admin.ops.systemLogs.resetRuntimeConfigConfirm"))) {
        j.value = !0;
        try {
          const oe = await se.resetRuntimeLogConfig();
          O.level = oe.level, O.persist_access_logs = oe.persist_access_logs, O.enable_sampling = oe.enable_sampling, O.sampling_initial = oe.sampling_initial, O.sampling_thereafter = oe.sampling_thereafter, O.caller = oe.caller, O.stacktrace_level = oe.stacktrace_level, O.retention_days = oe.retention_days, o.showSuccess(s("admin.ops.systemLogs.runtimeConfigReset")), await _();
        } catch (oe) {
          console.error("[OpsSystemLogTable] Failed to reset runtime log config", oe), o.showError(((z = (p = oe == null ? void 0 : oe.response) == null ? void 0 : p.data) == null ? void 0 : z.detail) || s("admin.ops.systemLogs.runtimeConfigResetFailed"));
        } finally {
          j.value = !1;
        }
      }
    }, T = async () => {
      if (window.confirm(s("admin.ops.systemLogs.cleanupConfirm")))
        try {
          const p = {
            start_time: H(c.start_time),
            end_time: H(c.end_time),
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
          }, z = await se.cleanupSystemLogs(p);
          o.showSuccess(s("admin.ops.systemLogs.cleanupSuccess", { count: z.deleted || 0 })), R.value = 1, await Promise.all([d(), _()]);
        } catch (p) {
          console.error("[OpsSystemLogTable] Failed to cleanup logs", p), o.showError(
            Us(p, s("admin.ops.systemLogs.cleanupFailed"), {
              OPS_SYSTEM_LOG_CLEANUP_FILTER_REQUIRED: s("admin.ops.systemLogs.cleanupFilterRequired")
            })
          );
        }
    }, G = () => {
      c.time_range = "1h", c.start_time = "", c.end_time = "", c.host = "", c.level = "", c.component = "", c.request_id = "", c.client_request_id = "", c.user_id = "", c.api_key_id = "", c.account_id = "", c.platform = r.platformFilter || "", c.model = "", c.q = "", R.value = 1, d();
    };
    xe(() => r.platformFilter, (g) => {
      g && !c.platform && (c.platform = g, R.value = 1, d());
    }), xe(() => r.refreshToken, () => {
      d(), _();
    });
    const pe = (g) => {
      R.value = g, d();
    }, he = (g) => {
      L.value = g, R.value = 1, d();
    }, ge = () => {
      R.value = 1, d();
    }, B = v(() => D.value.length > 0);
    return St(async () => {
      r.platformFilter && (c.platform = r.platformFilter), await Promise.all([d(), _(), F()]);
    }), (g, p) => (n(), i("section", bm, [
      e("div", km, [
        e("div", null, [
          e("h3", wm, t(a(s)("admin.ops.systemLogs.title")), 1),
          e("p", $m, t(a(s)("admin.ops.systemLogs.description")), 1)
        ]),
        e("div", Cm, [
          e("span", Sm, t(a(s)("admin.ops.systemLogs.queue")) + " " + t(m.value.queue_depth) + "/" + t(m.value.queue_capacity), 1),
          e("span", Rm, t(a(s)("admin.ops.systemLogs.written")) + " " + t(m.value.written_count), 1),
          e("span", Tm, t(a(s)("admin.ops.systemLogs.dropped")) + " " + t(m.value.dropped_count), 1),
          e("span", Dm, t(a(s)("admin.ops.systemLogs.failed")) + " " + t(m.value.write_failed_count), 1)
        ])
      ]),
      e("div", Em, [
        e("div", qm, [
          e("div", Lm, t(a(s)("admin.ops.systemLogs.runtimeConfig")), 1),
          f.value ? (n(), i("span", zm, t(a(s)("common.loading")), 1)) : M("", !0)
        ]),
        e("div", Mm, [
          e("label", Am, [
            N(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
            U(me, {
              modelValue: O.level,
              "onUpdate:modelValue": p[0] || (p[0] = (z) => O.level = z),
              class: "mt-1",
              options: $
            }, null, 8, ["modelValue"])
          ]),
          e("label", Im, [
            N(t(a(s)("admin.ops.systemLogs.stacktraceThreshold")) + " ", 1),
            U(me, {
              modelValue: O.stacktrace_level,
              "onUpdate:modelValue": p[1] || (p[1] = (z) => O.stacktrace_level = z),
              class: "mt-1",
              options: E
            }, null, 8, ["modelValue"])
          ]),
          e("label", Vm, [
            N(t(a(s)("admin.ops.systemLogs.samplingInitial")) + " ", 1),
            ae(e("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (z) => O.sampling_initial = z),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                de,
                O.sampling_initial,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Fm, [
            N(t(a(s)("admin.ops.systemLogs.samplingThereafter")) + " ", 1),
            ae(e("input", {
              "onUpdate:modelValue": p[3] || (p[3] = (z) => O.sampling_thereafter = z),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                de,
                O.sampling_thereafter,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          e("label", Om, [
            N(t(a(s)("admin.ops.systemLogs.retentionDays")) + " ", 1),
            ae(e("input", {
              "onUpdate:modelValue": p[4] || (p[4] = (z) => O.retention_days = z),
              type: "number",
              min: "1",
              max: "3650",
              class: "input mt-1"
            }, null, 512), [
              [
                de,
                O.retention_days,
                void 0,
                { number: !0 }
              ]
            ]),
            e("span", jm, t(a(s)("admin.ops.systemLogs.retentionDaysHint")), 1)
          ]),
          e("div", Pm, [
            e("div", Um, [
              e("div", Nm, [
                e("label", Bm, [
                  ae(e("input", {
                    "onUpdate:modelValue": p[5] || (p[5] = (z) => O.caller = z),
                    type: "checkbox"
                  }, null, 512), [
                    [$t, O.caller]
                  ]),
                  N(" " + t(a(s)("admin.ops.systemLogs.caller")), 1)
                ]),
                e("label", Hm, [
                  ae(e("input", {
                    "onUpdate:modelValue": p[6] || (p[6] = (z) => O.enable_sampling = z),
                    type: "checkbox"
                  }, null, 512), [
                    [$t, O.enable_sampling]
                  ]),
                  N(" " + t(a(s)("admin.ops.systemLogs.sampling")), 1)
                ]),
                e("label", Gm, [
                  ae(e("input", {
                    "onUpdate:modelValue": p[7] || (p[7] = (z) => O.persist_access_logs = z),
                    type: "checkbox"
                  }, null, 512), [
                    [$t, O.persist_access_logs]
                  ]),
                  N(" " + t(a(s)("admin.ops.systemLogs.persistAccessLogs")), 1)
                ])
              ]),
              e("div", Qm, [
                e("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  disabled: j.value,
                  onClick: x
                }, t(j.value ? a(s)("common.saving") : a(s)("admin.ops.systemLogs.saveAndApply")), 9, Wm),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: j.value,
                  onClick: y
                }, t(a(s)("admin.ops.systemLogs.resetDefaults")), 9, Km)
              ])
            ])
          ])
        ]),
        e("p", Jm, t(a(s)("admin.ops.systemLogs.persistAccessLogsHint")), 1),
        m.value.last_error ? (n(), i("p", Zm, t(a(s)("admin.ops.systemLogs.latestWriteError")) + " " + t(m.value.last_error), 1)) : M("", !0)
      ]),
      e("div", Ym, [
        e("label", Xm, [
          N(t(a(s)("admin.ops.systemLogs.timeRange")) + " ", 1),
          U(me, {
            modelValue: c.time_range,
            "onUpdate:modelValue": p[8] || (p[8] = (z) => c.time_range = z),
            class: "mt-1",
            options: h
          }, null, 8, ["modelValue"])
        ]),
        e("label", eg, [
          N(t(a(s)("admin.ops.systemLogs.startTime")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[9] || (p[9] = (z) => c.start_time = z),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [de, c.start_time]
          ])
        ]),
        e("label", tg, [
          N(t(a(s)("admin.ops.systemLogs.endTime")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[10] || (p[10] = (z) => c.end_time = z),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [de, c.end_time]
          ])
        ]),
        e("label", sg, [
          N(t(a(s)("admin.ops.systemLogs.level")) + " ", 1),
          U(me, {
            modelValue: c.level,
            "onUpdate:modelValue": p[11] || (p[11] = (z) => c.level = z),
            class: "mt-1",
            options: Z.value
          }, null, 8, ["modelValue", "options"])
        ]),
        e("label", ag, [
          N(t(a(s)("admin.ops.systemLogs.component")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[12] || (p[12] = (z) => c.component = z),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.componentPlaceholder")
          }, null, 8, rg), [
            [de, c.component]
          ])
        ]),
        e("label", og, [
          N(t(a(s)("admin.ops.systemLogs.host")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[13] || (p[13] = (z) => c.host = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.host]
          ])
        ]),
        e("label", ng, [
          p[22] || (p[22] = N(" request_id ", -1)),
          ae(e("input", {
            "onUpdate:modelValue": p[14] || (p[14] = (z) => c.request_id = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.request_id]
          ])
        ]),
        e("label", lg, [
          p[23] || (p[23] = N(" client_request_id ", -1)),
          ae(e("input", {
            "onUpdate:modelValue": p[15] || (p[15] = (z) => c.client_request_id = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.client_request_id]
          ])
        ]),
        e("label", ig, [
          p[24] || (p[24] = N(" user_id ", -1)),
          ae(e("input", {
            "onUpdate:modelValue": p[16] || (p[16] = (z) => c.user_id = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.user_id]
          ])
        ]),
        e("label", dg, [
          N(t(a(s)("admin.ops.systemLogs.keyId")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[17] || (p[17] = (z) => c.api_key_id = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.api_key_id]
          ])
        ]),
        e("label", ug, [
          p[25] || (p[25] = N(" account_id ", -1)),
          ae(e("input", {
            "onUpdate:modelValue": p[18] || (p[18] = (z) => c.account_id = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.account_id]
          ])
        ]),
        e("label", cg, [
          N(t(a(s)("admin.ops.systemLogs.platform")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[19] || (p[19] = (z) => c.platform = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.platform]
          ])
        ]),
        e("label", pg, [
          N(t(a(s)("admin.ops.systemLogs.model")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[20] || (p[20] = (z) => c.model = z),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [de, c.model]
          ])
        ]),
        e("label", mg, [
          N(t(a(s)("admin.ops.systemLogs.keyword")) + " ", 1),
          ae(e("input", {
            "onUpdate:modelValue": p[21] || (p[21] = (z) => c.q = z),
            type: "text",
            class: "input mt-1",
            placeholder: a(s)("admin.ops.systemLogs.keywordPlaceholder")
          }, null, 8, gg), [
            [de, c.q]
          ])
        ])
      ]),
      e("div", vg, [
        e("button", {
          type: "button",
          class: "btn btn-primary btn-sm",
          onClick: ge
        }, t(a(s)("admin.ops.systemLogs.search")), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: G
        }, t(a(s)("common.reset")), 1),
        e("button", {
          type: "button",
          class: "btn btn-danger btn-sm",
          onClick: T
        }, t(a(s)("admin.ops.systemLogs.cleanCurrentFilters")), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: _
        }, t(a(s)("admin.ops.systemLogs.refreshHealth")), 1)
      ]),
      e("div", xg, [
        V.value ? (n(), i("div", _g, t(a(s)("common.loading")), 1)) : B.value ? a(k) ? (n(), i("div", $g, [
          e("table", Cg, [
            e("thead", Sg, [
              e("tr", null, [
                e("th", Rg, t(a(s)("admin.ops.systemLogs.time")), 1),
                e("th", Tg, t(a(s)("admin.ops.systemLogs.host")), 1),
                e("th", Dg, t(a(s)("admin.ops.systemLogs.level")), 1),
                e("th", Eg, t(a(s)("admin.ops.systemLogs.logDetails")), 1)
              ])
            ]),
            e("tbody", qg, [
              (n(!0), i(le, null, ce(D.value, (z) => (n(), i("tr", {
                key: z.id,
                class: "align-top"
              }, [
                e("td", Lg, t(X(z.created_at)), 1),
                e("td", zg, [
                  e("span", {
                    class: "block truncate",
                    title: z.host || "-"
                  }, t(z.host || "-"), 9, Mg)
                ]),
                e("td", Ag, [
                  e("span", {
                    class: K(["inline-flex rounded-full px-2 py-0.5 font-semibold", re(z.level)])
                  }, t(z.level), 3)
                ]),
                e("td", Ig, t(ue(z)), 1)
              ]))), 128))
            ])
          ])
        ])) : (n(), i("div", yg, [
          (n(!0), i(le, null, ce(D.value, (z) => (n(), i("div", {
            key: z.id,
            class: "space-y-1.5 p-3"
          }, [
            e("div", hg, [
              e("span", {
                class: K(["inline-flex rounded-full px-2 py-0.5 text-xs font-semibold", re(z.level)])
              }, t(z.level), 3),
              e("span", bg, t(X(z.created_at)), 1)
            ]),
            z.host ? (n(), i("div", {
              key: 0,
              class: "truncate text-xs text-gray-500 dark:text-gray-400",
              title: z.host
            }, t(z.host), 9, kg)) : M("", !0),
            e("div", wg, t(ue(z)), 1)
          ]))), 128))
        ])) : (n(), i("div", fg, t(a(s)("admin.ops.systemLogs.empty")), 1)),
        U(Yt, {
          total: w.value,
          page: R.value,
          "page-size": L.value,
          "onUpdate:page": pe,
          "onUpdate:pageSize": he
        }, null, 8, ["total", "page", "page-size"])
      ])
    ]));
  }
}), Fg = 1e3;
let Bt = null;
async function ds(b = !1) {
  if (!b && Bt) return Bt;
  const o = /* @__PURE__ */ new Map();
  let s = 1, k = Number.POSITIVE_INFINITY;
  for (; o.size < k; ) {
    const r = await qs.list(s, Fg, {
      lite: "1",
      include_scheduler_score: "0"
    });
    k = r.total || 0;
    const V = r.items || [];
    if (V.length === 0) break;
    for (const D of V) o.set(D.id, D.name);
    s++;
  }
  return Bt = o, o;
}
const Og = { class: "flex h-full min-h-0 flex-col" }, jg = { class: "mb-4 flex flex-shrink-0 items-center justify-between" }, Pg = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ug = {
  key: 0,
  class: "flex flex-1 items-center justify-center py-16"
}, Ng = { class: "flex flex-col items-center gap-3" }, Bg = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, Hg = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col"
}, Gg = {
  key: 0,
  class: "rounded-xl border border-dashed border-gray-200 p-10 text-center dark:border-dark-700"
}, Qg = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, Wg = { class: "mt-1 text-xs text-gray-400" }, Kg = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Jg = { class: "min-h-0 flex-1 overflow-auto" }, Zg = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Yg = { class: "flex flex-wrap items-center gap-2" }, Xg = { class: "text-xs font-medium text-gray-700 dark:text-gray-200" }, ev = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, tv = { class: "break-all text-xs text-gray-600 dark:text-gray-300" }, sv = ["title"], av = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-300" }, rv = {
  key: 1,
  class: "flex items-center gap-2"
}, ov = ["title"], nv = ["onClick"], lv = ["onClick"], iv = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, dv = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, uv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, cv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, pv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, mv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, gv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, vv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, xv = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, _v = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, fv = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, yv = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, hv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, bv = { class: "whitespace-nowrap px-4 py-3" }, kv = { class: "whitespace-nowrap px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-200" }, wv = ["title"], $v = ["title"], Cv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, Sv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, Rv = { class: "px-4 py-3" }, Tv = {
  key: 0,
  class: "flex items-center gap-2"
}, Dv = ["title"], Ev = ["onClick"], qv = {
  key: 1,
  class: "text-xs text-gray-400"
}, Lv = { class: "whitespace-nowrap px-4 py-3 text-right" }, zv = ["onClick"], Mv = {
  key: 1,
  class: "text-xs text-gray-400"
}, Av = /* @__PURE__ */ fe({
  __name: "OpsRequestDetailsModal",
  props: {
    modelValue: { type: Boolean },
    timeRange: {},
    preset: {},
    platform: {},
    groupId: {}
  },
  emits: ["update:modelValue", "openErrorDetail"],
  setup(b, { emit: o }) {
    const s = b, k = o, { t: r } = ye(), V = nt(), { copyToClipboard: D } = Ns(), w = Et("(min-width: 768px)"), R = S(!1), L = S([]), m = S(0), f = S(1), j = S(10), O = S(/* @__PURE__ */ new Map()), c = () => k("update:modelValue", !1), $ = v(() => s.preset.sort === "ttft_desc"), E = v(() => r($.value ? "admin.ops.ttftLabel" : "admin.ops.requestDetails.table.duration"));
    function h(x) {
      const y = $.value ? x.first_token_ms : x.duration_ms;
      return typeof y == "number" ? `${y} ms` : "-";
    }
    const Z = v(() => {
      const x = Gt(s.timeRange);
      return x >= 60 ? r("admin.ops.requestDetails.rangeHours", { n: Math.round(x / 60) }) : r("admin.ops.requestDetails.rangeMinutes", { n: x });
    });
    function re() {
      const x = Gt(s.timeRange), y = /* @__PURE__ */ new Date();
      return {
        start_time: new Date(y.getTime() - x * 60 * 1e3).toISOString(),
        end_time: y.toISOString()
      };
    }
    const X = async () => {
      if (s.modelValue) {
        R.value = !0;
        try {
          const x = {
            ...re(),
            page: f.value,
            page_size: j.value,
            kind: s.preset.kind ?? "all",
            sort: s.preset.sort ?? "created_at_desc"
          }, y = (s.platform || "").trim();
          y && (x.platform = y), typeof s.groupId == "number" && s.groupId > 0 && (x.group_id = s.groupId), typeof s.preset.min_duration_ms == "number" && (x.min_duration_ms = s.preset.min_duration_ms), typeof s.preset.max_duration_ms == "number" && (x.max_duration_ms = s.preset.max_duration_ms);
          const T = await se.listRequestDetails(x);
          L.value = T.items || [], m.value = T.total || 0, _();
        } catch (x) {
          console.error("[OpsRequestDetailsModal] Failed to fetch request details", x), V.showError((x == null ? void 0 : x.message) || r("admin.ops.requestDetails.failedToLoad")), L.value = [], m.value = 0;
        } finally {
          R.value = !1;
        }
      }
    };
    xe(
      () => s.modelValue,
      (x) => {
        x && (f.value = 1, j.value = 10, X());
      }
    ), xe(
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
        s.modelValue && (f.value = 1, X());
      }
    );
    function J(x) {
      f.value = x, X();
    }
    function ue(x) {
      j.value = x, f.value = 1, X();
    }
    async function H(x) {
      await D(x, r("admin.ops.requestDetails.requestIdCopied")) || V.showWarning(r("admin.ops.requestDetails.copyFailed"));
    }
    function q(x) {
      x && (c(), k("openErrorDetail", x));
    }
    const d = (x) => x === "error" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-300";
    async function _() {
      const x = L.value.map((y) => y.account_id).filter((y) => typeof y == "number" && y > 0);
      if (x.length !== 0)
        try {
          let y = await ds();
          x.some((T) => !y.has(T)) && (y = await ds(!0)), O.value = y;
        } catch (y) {
          console.warn("[OpsRequestDetailsModal] Failed to load account names", y);
        }
    }
    function F(x) {
      const y = x.account_id;
      return typeof y != "number" || y <= 0 ? "-" : O.value.get(y) || `#${y}`;
    }
    return (x, y) => (n(), ne(et, {
      show: b.modelValue,
      title: s.preset.title || a(r)("admin.ops.requestDetails.title"),
      width: "full",
      onClose: c
    }, {
      default: ve(() => [
        e("div", Og, [
          e("div", jg, [
            e("div", Pg, t(a(r)("admin.ops.requestDetails.rangeLabel", { range: Z.value })), 1),
            e("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: X
            }, t(a(r)("common.refresh")), 1)
          ]),
          R.value ? (n(), i("div", Ug, [
            e("div", Ng, [
              y[0] || (y[0] = e("svg", {
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
              e("span", Bg, t(a(r)("common.loading")), 1)
            ])
          ])) : (n(), i("div", Hg, [
            L.value.length === 0 ? (n(), i("div", Gg, [
              e("div", Qg, t(a(r)("admin.ops.requestDetails.empty")), 1),
              e("div", Wg, t(a(r)("admin.ops.requestDetails.emptyHint")), 1)
            ])) : (n(), i("div", Kg, [
              e("div", Jg, [
                a(w) ? (n(), i("table", iv, [
                  e("thead", dv, [
                    e("tr", null, [
                      e("th", uv, t(a(r)("admin.ops.requestDetails.table.time")), 1),
                      e("th", cv, t(a(r)("admin.ops.requestDetails.table.kind")), 1),
                      e("th", pv, t(a(r)("admin.ops.requestDetails.table.platform")), 1),
                      e("th", mv, t(a(r)("admin.ops.requestDetails.table.model")), 1),
                      e("th", gv, t(a(r)("admin.ops.requestDetails.table.account")), 1),
                      e("th", vv, t(E.value), 1),
                      e("th", xv, t(a(r)("admin.ops.requestDetails.table.status")), 1),
                      e("th", _v, t(a(r)("admin.ops.requestDetails.table.requestId")), 1),
                      e("th", fv, t(a(r)("admin.ops.requestDetails.table.actions")), 1)
                    ])
                  ]),
                  e("tbody", yv, [
                    (n(!0), i(le, null, ce(L.value, (T, G) => (n(), i("tr", {
                      key: G,
                      class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                    }, [
                      e("td", hv, t(a(Ke)(T.created_at)), 1),
                      e("td", bv, [
                        e("span", {
                          class: K(["rounded-full px-2 py-1 text-[10px] font-bold", d(T.kind)])
                        }, t(T.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3)
                      ]),
                      e("td", kv, t((T.platform || "unknown").toUpperCase()), 1),
                      e("td", {
                        class: "max-w-[240px] truncate px-4 py-3 text-xs text-gray-600 dark:text-gray-300",
                        title: T.model || ""
                      }, t(T.model || "-"), 9, wv),
                      e("td", {
                        class: "max-w-[180px] truncate px-4 py-3 text-xs text-gray-600 dark:text-gray-300",
                        title: F(T)
                      }, t(F(T)), 9, $v),
                      e("td", Cv, t(h(T)), 1),
                      e("td", Sv, t(T.status_code ?? "-"), 1),
                      e("td", Rv, [
                        T.request_id ? (n(), i("div", Tv, [
                          e("span", {
                            class: "max-w-[220px] truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                            title: T.request_id
                          }, t(T.request_id), 9, Dv),
                          e("button", {
                            class: "rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                            onClick: (pe) => H(T.request_id)
                          }, t(a(r)("admin.ops.requestDetails.copy")), 9, Ev)
                        ])) : (n(), i("span", qv, "-"))
                      ]),
                      e("td", Lv, [
                        T.kind === "error" && T.error_id ? (n(), i("button", {
                          key: 0,
                          class: "rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                          onClick: (pe) => q(T.error_id)
                        }, t(a(r)("admin.ops.requestDetails.viewError")), 9, zv)) : (n(), i("span", Mv, "-"))
                      ])
                    ]))), 128))
                  ])
                ])) : (n(), i("div", Zg, [
                  (n(!0), i(le, null, ce(L.value, (T, G) => (n(), i("div", {
                    key: G,
                    class: "space-y-2 p-4"
                  }, [
                    e("div", Yg, [
                      e("span", {
                        class: K(["rounded-full px-2 py-1 text-[10px] font-bold", d(T.kind)])
                      }, t(T.kind === "error" ? a(r)("admin.ops.requestDetails.kind.error") : a(r)("admin.ops.requestDetails.kind.success")), 3),
                      e("span", Xg, t((T.platform || "unknown").toUpperCase()), 1),
                      e("span", ev, t(a(Ke)(T.created_at)), 1)
                    ]),
                    e("div", tv, t(T.model || "-"), 1),
                    typeof T.account_id == "number" && T.account_id > 0 ? (n(), i("div", {
                      key: 0,
                      class: "break-all text-xs text-gray-500 dark:text-gray-400",
                      title: F(T)
                    }, t(a(r)("admin.ops.requestDetails.table.account")) + ": " + t(F(T)), 9, sv)) : M("", !0),
                    e("div", av, [
                      e("span", null, t(E.value) + ": " + t(h(T)), 1),
                      e("span", null, t(T.status_code ?? "-"), 1)
                    ]),
                    T.request_id ? (n(), i("div", rv, [
                      e("span", {
                        class: "min-w-0 flex-1 truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                        title: T.request_id
                      }, t(T.request_id), 9, ov),
                      e("button", {
                        class: "shrink-0 rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                        onClick: (pe) => H(T.request_id)
                      }, t(a(r)("admin.ops.requestDetails.copy")), 9, nv)
                    ])) : M("", !0),
                    T.kind === "error" && T.error_id ? (n(), i("button", {
                      key: 2,
                      class: "w-full rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                      onClick: (pe) => q(T.error_id)
                    }, t(a(r)("admin.ops.requestDetails.viewError")), 9, lv)) : M("", !0)
                  ]))), 128))
                ]))
              ]),
              U(Yt, {
                total: m.value,
                page: f.value,
                "page-size": j.value,
                "onUpdate:page": J,
                "onUpdate:pageSize": ue
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Iv = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500"
}, Vv = {
  key: 1,
  class: "space-y-6"
}, Fv = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-3 text-xs text-zo-alert-800 dark:border-zo-alert-900/50 dark:bg-zo-alert-900/20 dark:text-zo-alert-200"
}, Ov = { class: "font-bold" }, jv = { class: "mt-1 list-disc space-y-1 pl-4" }, Pv = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Uv = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Nv = { class: "input-label" }, Bv = { class: "mt-1 text-xs text-gray-500" }, Hv = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Gv = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Qv = { class: "space-y-4" }, Wv = { class: "flex items-center justify-between" }, Kv = { class: "font-medium text-gray-900 dark:text-white" }, Jv = { key: 0 }, Zv = { class: "input-label" }, Yv = { class: "flex gap-2" }, Xv = ["placeholder"], ex = { class: "mt-2 flex flex-wrap gap-2" }, tx = ["onClick"], sx = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, ax = { key: 1 }, rx = { class: "input-label" }, ox = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, nx = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, lx = { class: "space-y-4" }, ix = { class: "flex items-center justify-between" }, dx = { class: "font-medium text-gray-900 dark:text-white" }, ux = { key: 0 }, cx = { class: "input-label" }, px = { class: "flex gap-2" }, mx = ["placeholder"], gx = { class: "mt-2 flex flex-wrap gap-2" }, vx = ["onClick"], xx = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, _x = {
  key: 1,
  class: "grid grid-cols-1 gap-4 md:grid-cols-2"
}, fx = { class: "flex items-center justify-between" }, yx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, hx = { key: 0 }, bx = { class: "flex items-center justify-between" }, kx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, wx = { key: 1 }, $x = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Cx = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Sx = { class: "mb-4 text-xs text-gray-500 dark:text-gray-400" }, Rx = { class: "space-y-4" }, Tx = { class: "input-label" }, Dx = { class: "mt-1 text-xs text-gray-500" }, Ex = { class: "input-label" }, qx = { class: "mt-1 text-xs text-gray-500" }, Lx = { class: "input-label" }, zx = { class: "mt-1 text-xs text-gray-500" }, Mx = { class: "input-label" }, Ax = { class: "mt-1 text-xs text-gray-500" }, Ix = { class: "rounded-2xl bg-gray-50 dark:bg-dark-700/50" }, Vx = { class: "cursor-pointer p-4 text-sm font-semibold text-gray-900 dark:text-white" }, Fx = { class: "space-y-4 px-4 pb-4" }, Ox = { class: "space-y-3" }, jx = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, Px = { class: "flex items-center justify-between" }, Ux = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Nx = { key: 0 }, Bx = { class: "input-label" }, Hx = { class: "mt-1 text-xs text-gray-500" }, Gx = { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, Qx = { class: "input-label" }, Wx = { class: "input-label" }, Kx = { class: "input-label" }, Jx = { class: "text-xs text-gray-500" }, Zx = { class: "space-y-3" }, Yx = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, Xx = { class: "flex items-center justify-between" }, e_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, t_ = { class: "mt-1 text-xs text-gray-500" }, s_ = { class: "space-y-3" }, a_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, r_ = { class: "text-xs text-gray-500" }, o_ = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, n_ = { class: "input-label" }, l_ = { class: "input-label" }, i_ = { class: "text-xs text-gray-500" }, d_ = { class: "space-y-3" }, u_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, c_ = { class: "flex items-center justify-between" }, p_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, m_ = { class: "mt-1 text-xs text-gray-500" }, g_ = { class: "flex items-center justify-between" }, v_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, x_ = { class: "mt-1 text-xs text-gray-500" }, __ = { class: "flex items-center justify-between" }, f_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, y_ = { class: "mt-1 text-xs text-gray-500" }, h_ = { class: "flex items-center justify-between" }, b_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, k_ = { class: "mt-1 text-xs text-gray-500" }, w_ = { class: "space-y-3" }, $_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, C_ = { class: "flex items-center justify-between" }, S_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, R_ = { class: "mt-1 text-xs text-gray-500" }, T_ = { key: 0 }, D_ = { class: "input-label" }, E_ = { class: "space-y-3" }, q_ = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, L_ = { class: "flex items-center justify-between" }, z_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, M_ = { class: "mt-1 text-xs text-gray-500" }, A_ = { class: "flex items-center justify-between" }, I_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, V_ = { class: "mt-1 text-xs text-gray-500" }, F_ = { class: "flex justify-end gap-2" }, O_ = ["disabled"], j_ = /* @__PURE__ */ fe({
  __name: "OpsSettingsDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "saved"],
  setup(b, { emit: o }) {
    const { t: s } = ye(), k = nt(), r = b, V = o, D = S(!1), w = S(!1), R = S(!1), L = S(null), m = S(null), f = S(null), j = S({
      sla_percent_min: 99.5,
      ttft_p99_ms_max: 500,
      request_error_rate_percent_max: 5,
      upstream_error_rate_percent_max: 5
    });
    async function O() {
      var q, d;
      w.value = !1, D.value = !0;
      try {
        const [_, F, x, y] = await Promise.all([
          se.getAlertRuntimeSettings(),
          se.getEmailNotificationConfig(),
          se.getAdvancedSettings(),
          se.getMetricThresholds()
        ]);
        L.value = _, m.value = F, f.value = x, f.value && !f.value.openai_account_quota_auto_pause && (f.value.openai_account_quota_auto_pause = { default_threshold_5h: 0, default_threshold_7d: 0 }), y && Object.keys(y).length > 0 && (j.value = {
          sla_percent_min: y.sla_percent_min ?? 99.5,
          ttft_p99_ms_max: y.ttft_p99_ms_max ?? 500,
          request_error_rate_percent_max: y.request_error_rate_percent_max ?? 5,
          upstream_error_rate_percent_max: y.upstream_error_rate_percent_max ?? 5
        }), w.value = !0;
      } catch (_) {
        console.error("[OpsSettingsDialog] Failed to load settings", _), k.showError(((d = (q = _ == null ? void 0 : _.response) == null ? void 0 : q.data) == null ? void 0 : d.detail) || s("admin.ops.settings.loadFailed"));
      } finally {
        D.value = !1;
      }
    }
    xe(() => r.show, (q) => {
      q && O();
    });
    const c = S(""), $ = S(""), E = [
      { value: "", label: s("admin.ops.email.minSeverityAll") },
      { value: "critical", label: s("common.critical") },
      { value: "warning", label: s("common.warning") },
      { value: "info", label: s("common.info") }
    ];
    function h(q) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q);
    }
    function Z(q) {
      if (!m.value) return;
      const d = (q === "alert" ? c.value : $.value).trim();
      if (!d) return;
      if (!h(d)) {
        k.showError(s("common.invalidEmail"));
        return;
      }
      const _ = d.toLowerCase(), F = q === "alert" ? m.value.alert.recipients : m.value.report.recipients;
      F.includes(_) || F.push(_), q === "alert" ? c.value = "" : $.value = "";
    }
    function re(q, d) {
      if (!m.value) return;
      const _ = q === "alert" ? m.value.alert.recipients : m.value.report.recipients, F = _.indexOf(d);
      F >= 0 && _.splice(F, 1);
    }
    const X = v({
      get() {
        var d, _;
        const q = (_ = (d = f.value) == null ? void 0 : d.openai_account_quota_auto_pause) == null ? void 0 : _.default_threshold_5h;
        return q && q > 0 ? Math.round(q * 1e3) / 10 : null;
      },
      set(q) {
        var d;
        (d = f.value) != null && d.openai_account_quota_auto_pause && (f.value.openai_account_quota_auto_pause.default_threshold_5h = q != null && q > 0 ? q / 100 : 0);
      }
    }), J = v({
      get() {
        var d, _;
        const q = (_ = (d = f.value) == null ? void 0 : d.openai_account_quota_auto_pause) == null ? void 0 : _.default_threshold_7d;
        return q && q > 0 ? Math.round(q * 1e3) / 10 : null;
      },
      set(q) {
        var d;
        (d = f.value) != null && d.openai_account_quota_auto_pause && (f.value.openai_account_quota_auto_pause.default_threshold_7d = q != null && q > 0 ? q / 100 : 0);
      }
    }), ue = v(() => {
      const q = [];
      if (L.value) {
        const d = L.value.evaluation_interval_seconds;
        (!Number.isFinite(d) || d < 1 || d > 86400) && q.push(s("admin.ops.runtime.validation.evalIntervalRange"));
      }
      if (f.value) {
        const { error_log_retention_days: d, minute_metrics_retention_days: _, hourly_metrics_retention_days: F } = f.value.data_retention;
        (d < 0 || d > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange")), (_ < 0 || _ > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange")), (F < 0 || F > 365) && q.push(s("admin.ops.settings.validation.retentionDaysRange"));
        const { default_threshold_5h: x, default_threshold_7d: y } = f.value.openai_account_quota_auto_pause;
        (x < 0 || x > 1 || y < 0 || y > 1) && q.push(s("admin.ops.settings.validation.openaiQuotaAutoPauseRange"));
      }
      return j.value.sla_percent_min != null && (j.value.sla_percent_min < 0 || j.value.sla_percent_min > 100) && q.push(s("admin.ops.settings.validation.slaMinPercentRange")), j.value.ttft_p99_ms_max != null && j.value.ttft_p99_ms_max < 0 && q.push(s("admin.ops.settings.validation.ttftP99MaxRange")), j.value.request_error_rate_percent_max != null && (j.value.request_error_rate_percent_max < 0 || j.value.request_error_rate_percent_max > 100) && q.push(s("admin.ops.settings.validation.requestErrorRateMaxRange")), j.value.upstream_error_rate_percent_max != null && (j.value.upstream_error_rate_percent_max < 0 || j.value.upstream_error_rate_percent_max > 100) && q.push(s("admin.ops.settings.validation.upstreamErrorRateMaxRange")), { valid: q.length === 0, errors: q };
    });
    async function H() {
      var q, d, _, F;
      if (!(D.value || !w.value || R.value)) {
        if (!ue.value.valid) {
          k.showError(ue.value.errors[0]);
          return;
        }
        R.value = !0;
        try {
          m.value && (m.value.alert.enabled && m.value.alert.recipients.length === 0 && (m.value.alert.enabled = !1), m.value.report.enabled && m.value.report.recipients.length === 0 && (m.value.report.enabled = !1)), await Promise.all([
            L.value ? se.updateAlertRuntimeSettings(L.value) : Promise.resolve(),
            m.value ? se.updateEmailNotificationConfig(m.value) : Promise.resolve(),
            f.value ? se.updateAdvancedSettings(f.value) : Promise.resolve(),
            se.updateMetricThresholds(j.value)
          ]), k.showSuccess(s("admin.ops.settings.saveSuccess")), V("saved"), V("close");
        } catch (x) {
          console.error("[OpsSettingsDialog] Failed to save settings", x), k.showError(((d = (q = x == null ? void 0 : x.response) == null ? void 0 : q.data) == null ? void 0 : d.message) || ((F = (_ = x == null ? void 0 : x.response) == null ? void 0 : _.data) == null ? void 0 : F.detail) || s("admin.ops.settings.saveFailed"));
        } finally {
          R.value = !1;
        }
      }
    }
    return (q, d) => (n(), ne(et, {
      show: b.show,
      title: a(s)("admin.ops.settings.title"),
      width: "extra-wide",
      onClose: d[35] || (d[35] = (_) => V("close"))
    }, {
      footer: ve(() => [
        e("div", F_, [
          e("button", {
            class: "btn btn-secondary",
            onClick: d[34] || (d[34] = (_) => V("close"))
          }, t(a(s)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: D.value || !w.value || R.value || !ue.value.valid,
            onClick: H
          }, t(R.value ? a(s)("common.saving") : a(s)("common.save")), 9, O_)
        ])
      ]),
      default: ve(() => [
        D.value ? (n(), i("div", Iv, t(a(s)("common.loading")), 1)) : L.value && m.value && f.value ? (n(), i("div", Vv, [
          ue.value.valid ? M("", !0) : (n(), i("div", Fv, [
            e("div", Ov, t(a(s)("admin.ops.settings.validation.title")), 1),
            e("ul", jv, [
              (n(!0), i(le, null, ce(ue.value.errors, (_) => (n(), i("li", { key: _ }, t(_), 1))), 128))
            ])
          ])),
          e("div", Pv, [
            e("h4", Uv, t(a(s)("admin.ops.settings.dataCollection")), 1),
            e("div", null, [
              e("label", Nv, t(a(s)("admin.ops.settings.evaluationInterval")), 1),
              ae(e("input", {
                "onUpdate:modelValue": d[0] || (d[0] = (_) => L.value.evaluation_interval_seconds = _),
                type: "number",
                min: "1",
                max: "86400",
                class: "input"
              }, null, 512), [
                [
                  de,
                  L.value.evaluation_interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Bv, t(a(s)("admin.ops.settings.evaluationIntervalHint")), 1)
            ])
          ]),
          e("div", Hv, [
            e("h4", Gv, t(a(s)("admin.ops.settings.alertConfig")), 1),
            e("div", Qv, [
              e("div", Wv, [
                e("div", null, [
                  e("label", Kv, t(a(s)("admin.ops.settings.enableAlert")), 1)
                ]),
                U(qe, {
                  modelValue: m.value.alert.enabled,
                  "onUpdate:modelValue": d[1] || (d[1] = (_) => m.value.alert.enabled = _)
                }, null, 8, ["modelValue"])
              ]),
              m.value.alert.enabled ? (n(), i("div", Jv, [
                e("label", Zv, t(a(s)("admin.ops.settings.alertRecipients")), 1),
                e("div", Yv, [
                  ae(e("input", {
                    "onUpdate:modelValue": d[2] || (d[2] = (_) => c.value = _),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: d[3] || (d[3] = ss(wt((_) => Z("alert"), ["prevent"]), ["enter"]))
                  }, null, 40, Xv), [
                    [de, c.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: d[4] || (d[4] = (_) => Z("alert"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", ex, [
                  (n(!0), i(le, null, ce(m.value.alert.recipients, (_) => (n(), i("span", {
                    key: _,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    N(t(_) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (F) => re("alert", _)
                    }, "×", 8, tx)
                  ]))), 128))
                ]),
                e("p", sx, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              m.value.alert.enabled ? (n(), i("div", ax, [
                e("label", rx, t(a(s)("admin.ops.settings.minSeverity")), 1),
                U(me, {
                  modelValue: m.value.alert.min_severity,
                  "onUpdate:modelValue": d[5] || (d[5] = (_) => m.value.alert.min_severity = _),
                  options: E
                }, null, 8, ["modelValue"])
              ])) : M("", !0)
            ])
          ]),
          e("div", ox, [
            e("h4", nx, t(a(s)("admin.ops.settings.reportConfig")), 1),
            e("div", lx, [
              e("div", ix, [
                e("div", null, [
                  e("label", dx, t(a(s)("admin.ops.settings.enableReport")), 1)
                ]),
                U(qe, {
                  modelValue: m.value.report.enabled,
                  "onUpdate:modelValue": d[6] || (d[6] = (_) => m.value.report.enabled = _)
                }, null, 8, ["modelValue"])
              ]),
              m.value.report.enabled ? (n(), i("div", ux, [
                e("label", cx, t(a(s)("admin.ops.settings.reportRecipients")), 1),
                e("div", px, [
                  ae(e("input", {
                    "onUpdate:modelValue": d[7] || (d[7] = (_) => $.value = _),
                    type: "email",
                    class: "input",
                    placeholder: a(s)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: d[8] || (d[8] = ss(wt((_) => Z("report"), ["prevent"]), ["enter"]))
                  }, null, 40, mx), [
                    [de, $.value]
                  ]),
                  e("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: d[9] || (d[9] = (_) => Z("report"))
                  }, t(a(s)("common.add")), 1)
                ]),
                e("div", gx, [
                  (n(!0), i(le, null, ce(m.value.report.recipients, (_) => (n(), i("span", {
                    key: _,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    N(t(_) + " ", 1),
                    e("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (F) => re("report", _)
                    }, "×", 8, vx)
                  ]))), 128))
                ]),
                e("p", xx, t(a(s)("admin.ops.settings.recipientsHint")), 1)
              ])) : M("", !0),
              m.value.report.enabled ? (n(), i("div", _x, [
                e("div", fx, [
                  e("label", yx, t(a(s)("admin.ops.settings.dailySummary")), 1),
                  U(qe, {
                    modelValue: m.value.report.daily_summary_enabled,
                    "onUpdate:modelValue": d[10] || (d[10] = (_) => m.value.report.daily_summary_enabled = _)
                  }, null, 8, ["modelValue"])
                ]),
                m.value.report.daily_summary_enabled ? (n(), i("div", hx, [
                  ae(e("input", {
                    "onUpdate:modelValue": d[11] || (d[11] = (_) => m.value.report.daily_summary_schedule = _),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * *"
                  }, null, 512), [
                    [de, m.value.report.daily_summary_schedule]
                  ])
                ])) : M("", !0),
                e("div", bx, [
                  e("label", kx, t(a(s)("admin.ops.settings.weeklySummary")), 1),
                  U(qe, {
                    modelValue: m.value.report.weekly_summary_enabled,
                    "onUpdate:modelValue": d[12] || (d[12] = (_) => m.value.report.weekly_summary_enabled = _)
                  }, null, 8, ["modelValue"])
                ]),
                m.value.report.weekly_summary_enabled ? (n(), i("div", wx, [
                  ae(e("input", {
                    "onUpdate:modelValue": d[13] || (d[13] = (_) => m.value.report.weekly_summary_schedule = _),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * 1"
                  }, null, 512), [
                    [de, m.value.report.weekly_summary_schedule]
                  ])
                ])) : M("", !0)
              ])) : M("", !0)
            ])
          ]),
          e("div", $x, [
            e("h4", Cx, t(a(s)("admin.ops.settings.metricThresholds")), 1),
            e("p", Sx, t(a(s)("admin.ops.settings.metricThresholdsHint")), 1),
            e("div", Rx, [
              e("div", null, [
                e("label", Tx, t(a(s)("admin.ops.settings.slaMinPercent")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": d[14] || (d[14] = (_) => j.value.sla_percent_min = _),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    de,
                    j.value.sla_percent_min,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", Dx, t(a(s)("admin.ops.settings.slaMinPercentHint")), 1)
              ]),
              e("div", null, [
                e("label", Ex, t(a(s)("admin.ops.settings.ttftP99MaxMs")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": d[15] || (d[15] = (_) => j.value.ttft_p99_ms_max = _),
                  type: "number",
                  min: "0",
                  step: "50",
                  class: "input"
                }, null, 512), [
                  [
                    de,
                    j.value.ttft_p99_ms_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", qx, t(a(s)("admin.ops.settings.ttftP99MaxMsHint")), 1)
              ]),
              e("div", null, [
                e("label", Lx, t(a(s)("admin.ops.settings.requestErrorRateMaxPercent")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": d[16] || (d[16] = (_) => j.value.request_error_rate_percent_max = _),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    de,
                    j.value.request_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", zx, t(a(s)("admin.ops.settings.requestErrorRateMaxPercentHint")), 1)
              ]),
              e("div", null, [
                e("label", Mx, t(a(s)("admin.ops.settings.upstreamErrorRateMaxPercent")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": d[17] || (d[17] = (_) => j.value.upstream_error_rate_percent_max = _),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    de,
                    j.value.upstream_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", Ax, t(a(s)("admin.ops.settings.upstreamErrorRateMaxPercentHint")), 1)
              ])
            ])
          ]),
          e("details", Ix, [
            e("summary", Vx, t(a(s)("admin.ops.settings.advancedSettings")), 1),
            e("div", Fx, [
              e("div", Ox, [
                e("h5", jx, t(a(s)("admin.ops.settings.dataRetention")), 1),
                e("div", Px, [
                  e("label", Ux, t(a(s)("admin.ops.settings.enableCleanup")), 1),
                  U(qe, {
                    modelValue: f.value.data_retention.cleanup_enabled,
                    "onUpdate:modelValue": d[18] || (d[18] = (_) => f.value.data_retention.cleanup_enabled = _)
                  }, null, 8, ["modelValue"])
                ]),
                f.value.data_retention.cleanup_enabled ? (n(), i("div", Nx, [
                  e("label", Bx, t(a(s)("admin.ops.settings.cleanupSchedule")), 1),
                  ae(e("input", {
                    "onUpdate:modelValue": d[19] || (d[19] = (_) => f.value.data_retention.cleanup_schedule = _),
                    type: "text",
                    class: "input",
                    placeholder: "0 2 * * *"
                  }, null, 512), [
                    [de, f.value.data_retention.cleanup_schedule]
                  ]),
                  e("p", Hx, t(a(s)("admin.ops.settings.cleanupScheduleHint")), 1)
                ])) : M("", !0),
                e("div", Gx, [
                  e("div", null, [
                    e("label", Qx, t(a(s)("admin.ops.settings.errorLogRetentionDays")), 1),
                    ae(e("input", {
                      "onUpdate:modelValue": d[20] || (d[20] = (_) => f.value.data_retention.error_log_retention_days = _),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        de,
                        f.value.data_retention.error_log_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", Wx, t(a(s)("admin.ops.settings.minuteMetricsRetentionDays")), 1),
                    ae(e("input", {
                      "onUpdate:modelValue": d[21] || (d[21] = (_) => f.value.data_retention.minute_metrics_retention_days = _),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        de,
                        f.value.data_retention.minute_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", Kx, t(a(s)("admin.ops.settings.hourlyMetricsRetentionDays")), 1),
                    ae(e("input", {
                      "onUpdate:modelValue": d[22] || (d[22] = (_) => f.value.data_retention.hourly_metrics_retention_days = _),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        de,
                        f.value.data_retention.hourly_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("p", Jx, t(a(s)("admin.ops.settings.retentionDaysHint")), 1)
              ]),
              e("div", Zx, [
                e("h5", Yx, t(a(s)("admin.ops.settings.aggregation")), 1),
                e("div", Xx, [
                  e("div", null, [
                    e("label", e_, t(a(s)("admin.ops.settings.enableAggregation")), 1),
                    e("p", t_, t(a(s)("admin.ops.settings.aggregationHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.aggregation.aggregation_enabled,
                    "onUpdate:modelValue": d[23] || (d[23] = (_) => f.value.aggregation.aggregation_enabled = _)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              e("div", s_, [
                e("h5", a_, t(a(s)("admin.ops.settings.openaiQuotaAutoPause")), 1),
                e("p", r_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseHint")), 1),
                e("div", o_, [
                  e("div", null, [
                    e("label", n_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseDefault5h")), 1),
                    ae(e("input", {
                      "onUpdate:modelValue": d[24] || (d[24] = (_) => X.value = _),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-5h"
                    }, null, 512), [
                      [
                        de,
                        X.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", l_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseDefault7d")), 1),
                    ae(e("input", {
                      "onUpdate:modelValue": d[25] || (d[25] = (_) => J.value = _),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-7d"
                    }, null, 512), [
                      [
                        de,
                        J.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("p", i_, t(a(s)("admin.ops.settings.openaiQuotaAutoPauseThresholdHint")), 1)
              ]),
              e("div", d_, [
                e("h5", u_, t(a(s)("admin.ops.settings.errorFiltering")), 1),
                e("div", c_, [
                  e("div", null, [
                    e("label", p_, t(a(s)("admin.ops.settings.ignoreCountTokensErrors")), 1),
                    e("p", m_, t(a(s)("admin.ops.settings.ignoreCountTokensErrorsHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.ignore_count_tokens_errors,
                    "onUpdate:modelValue": d[26] || (d[26] = (_) => f.value.ignore_count_tokens_errors = _)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", g_, [
                  e("div", null, [
                    e("label", v_, t(a(s)("admin.ops.settings.ignoreContextCanceled")), 1),
                    e("p", x_, t(a(s)("admin.ops.settings.ignoreContextCanceledHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.ignore_context_canceled,
                    "onUpdate:modelValue": d[27] || (d[27] = (_) => f.value.ignore_context_canceled = _)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", __, [
                  e("div", null, [
                    e("label", f_, t(a(s)("admin.ops.settings.ignoreNoAvailableAccounts")), 1),
                    e("p", y_, t(a(s)("admin.ops.settings.ignoreNoAvailableAccountsHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.ignore_no_available_accounts,
                    "onUpdate:modelValue": d[28] || (d[28] = (_) => f.value.ignore_no_available_accounts = _)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", h_, [
                  e("div", null, [
                    e("label", b_, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrors")), 1),
                    e("p", k_, t(a(s)("admin.ops.settings.ignoreInsufficientBalanceErrorsHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.ignore_insufficient_balance_errors,
                    "onUpdate:modelValue": d[29] || (d[29] = (_) => f.value.ignore_insufficient_balance_errors = _)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              e("div", w_, [
                e("h5", $_, t(a(s)("admin.ops.settings.autoRefresh")), 1),
                e("div", C_, [
                  e("div", null, [
                    e("label", S_, t(a(s)("admin.ops.settings.enableAutoRefresh")), 1),
                    e("p", R_, t(a(s)("admin.ops.settings.enableAutoRefreshHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.auto_refresh_enabled,
                    "onUpdate:modelValue": d[30] || (d[30] = (_) => f.value.auto_refresh_enabled = _)
                  }, null, 8, ["modelValue"])
                ]),
                f.value.auto_refresh_enabled ? (n(), i("div", T_, [
                  e("label", D_, t(a(s)("admin.ops.settings.refreshInterval")), 1),
                  U(me, {
                    modelValue: f.value.auto_refresh_interval_seconds,
                    "onUpdate:modelValue": d[31] || (d[31] = (_) => f.value.auto_refresh_interval_seconds = _),
                    options: [
                      { value: 15, label: a(s)("admin.ops.settings.refreshInterval15s") },
                      { value: 30, label: a(s)("admin.ops.settings.refreshInterval30s") },
                      { value: 60, label: a(s)("admin.ops.settings.refreshInterval60s") }
                    ]
                  }, null, 8, ["modelValue", "options"])
                ])) : M("", !0)
              ]),
              e("div", E_, [
                e("h5", q_, t(a(s)("admin.ops.settings.dashboardCards")), 1),
                e("div", L_, [
                  e("div", null, [
                    e("label", z_, t(a(s)("admin.ops.settings.displayAlertEvents")), 1),
                    e("p", M_, t(a(s)("admin.ops.settings.displayAlertEventsHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.display_alert_events,
                    "onUpdate:modelValue": d[32] || (d[32] = (_) => f.value.display_alert_events = _)
                  }, null, 8, ["modelValue"])
                ]),
                e("div", A_, [
                  e("div", null, [
                    e("label", I_, t(a(s)("admin.ops.settings.displayOpenAITokenStats")), 1),
                    e("p", V_, t(a(s)("admin.ops.settings.displayOpenAITokenStatsHint")), 1)
                  ]),
                  U(qe, {
                    modelValue: f.value.display_openai_token_stats,
                    "onUpdate:modelValue": d[33] || (d[33] = (_) => f.value.display_openai_token_stats = _)
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
}), P_ = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, U_ = { class: "mb-4 flex flex-wrap items-start justify-between gap-3 sm:gap-4" }, N_ = { class: "text-sm font-bold text-gray-900 dark:text-white" }, B_ = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, H_ = { class: "flex items-center gap-2" }, G_ = ["disabled"], Q_ = ["disabled"], W_ = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, K_ = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, J_ = {
  key: 2,
  class: "max-h-[520px] overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Z_ = { class: "max-h-[520px] overflow-y-auto" }, Y_ = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, X_ = { class: "flex items-start justify-between gap-2" }, ef = { class: "min-w-0" }, tf = { class: "text-xs font-bold text-gray-900 dark:text-white" }, sf = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, af = { class: "shrink-0 text-xs font-bold text-gray-700 dark:text-gray-200" }, rf = { class: "text-xs text-gray-700 dark:text-gray-200" }, of = { class: "font-mono" }, nf = { class: "mx-1 text-gray-400" }, lf = { class: "font-mono" }, df = { class: "flex items-center justify-between gap-2" }, uf = { class: "text-xs text-gray-700 dark:text-gray-200" }, cf = { class: "flex items-center gap-2" }, pf = ["onClick"], mf = ["onClick"], gf = {
  key: 0,
  class: "text-[10px] text-gray-400"
}, vf = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, xf = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, _f = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ff = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, yf = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, hf = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, bf = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, kf = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, wf = { class: "px-4 py-3" }, $f = { class: "text-xs font-bold text-gray-900 dark:text-white" }, Cf = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, Sf = {
  key: 1,
  class: "mt-1 text-[10px] text-gray-400"
}, Rf = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, Tf = { class: "font-mono" }, Df = { class: "mx-1 text-gray-400" }, Ef = { class: "font-mono" }, qf = { class: "whitespace-nowrap px-4 py-3 text-xs font-bold text-gray-700 dark:text-gray-200" }, Lf = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, zf = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, Mf = ["onClick"], Af = ["onClick"], If = { class: "space-y-4" }, Vf = {
  key: 0,
  class: "rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300"
}, Ff = { class: "font-bold" }, Of = { class: "mt-1 list-disc pl-5" }, jf = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Pf = { class: "md:col-span-2" }, Uf = { class: "input-label" }, Nf = { class: "md:col-span-2" }, Bf = { class: "input-label" }, Hf = { class: "input-label" }, Gf = {
  key: 0,
  class: "mt-1 space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Qf = { class: "input-label" }, Wf = { class: "md:col-span-2" }, Kf = { class: "input-label" }, Jf = {
  key: 0,
  class: "ml-1 text-red-500"
}, Zf = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Yf = { class: "input-label" }, Xf = { class: "input-label" }, ey = { class: "input-label" }, ty = { class: "input-label" }, sy = { class: "input-label" }, ay = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, ry = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, oy = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, ny = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, ly = { class: "flex items-center justify-end gap-2" }, iy = ["disabled"], dy = ["disabled"], uy = /* @__PURE__ */ fe({
  __name: "OpsAlertRulesCard",
  setup(b) {
    const { t: o } = ye(), s = nt(), k = Et("(min-width: 768px)"), r = S(!1), V = S([]);
    async function D() {
      var B, g;
      r.value = !0;
      try {
        V.value = await se.listAlertRules();
      } catch (p) {
        console.error("[OpsAlertRulesCard] Failed to load rules", p), s.showError(((g = (B = p == null ? void 0 : p.response) == null ? void 0 : B.data) == null ? void 0 : g.detail) || o("admin.ops.alertRules.loadFailed")), V.value = [];
      } finally {
        r.value = !1;
      }
    }
    St(() => {
      D(), $();
    });
    const w = v(() => [...V.value].sort((B, g) => (g.id || 0) - (B.id || 0))), R = S(!1), L = S(!1), m = S(null), f = S(null), j = /* @__PURE__ */ new Set([
      "group_available_accounts",
      "group_available_ratio",
      "group_rate_limit_ratio"
    ]);
    function O(B) {
      if (B == null || typeof B == "boolean") return null;
      const g = typeof B == "number" ? B : Number.parseInt(String(B), 10);
      return Number.isFinite(g) && g > 0 ? g : null;
    }
    const c = S([]);
    async function $() {
      try {
        const B = await cs.groups.getAll();
        c.value = B.map((g) => ({ value: g.id, label: g.name }));
      } catch (B) {
        console.error("[OpsAlertRulesCard] Failed to load groups", B), c.value = [];
      }
    }
    const E = v(() => {
      var g;
      const B = (g = f.value) == null ? void 0 : g.metric_type;
      return B ? j.has(B) : !1;
    }), h = v({
      get() {
        var B, g;
        return O((g = (B = f.value) == null ? void 0 : B.filters) == null ? void 0 : g.group_id);
      },
      set(B) {
        if (f.value) {
          if (B == null) {
            if (!f.value.filters) return;
            delete f.value.filters.group_id, Object.keys(f.value.filters).length === 0 && delete f.value.filters;
            return;
          }
          f.value.filters || (f.value.filters = {}), f.value.filters.group_id = B;
        }
      }
    }), Z = v(() => E.value ? c.value : [{ value: null, label: o("admin.ops.alertRules.form.allGroups") }, ...c.value]), re = v(() => [
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
    ]), X = v(() => {
      var g;
      const B = (g = f.value) == null ? void 0 : g.metric_type;
      return B ? re.value.find((p) => p.type === B) ?? null : null;
    }), J = v(() => {
      const B = (g) => {
        const p = re.value.filter((oe) => oe.group === g);
        return p.length === 0 ? [] : [
          {
            value: `__group__${g}`,
            label: o(`admin.ops.alertRules.metricGroups.${g}`),
            disabled: !0,
            kind: "group"
          },
          ...p.map((oe) => ({ value: oe.type, label: oe.label }))
        ];
      };
      return [...B("system"), ...B("group"), ...B("account")];
    }), ue = v(() => [">", ">=", "<", "<=", "==", "!="].map((g) => ({ value: g, label: g }))), H = v(() => ["P0", "P1", "P2", "P3"].map((g) => ({ value: g, label: g }))), q = v(() => [1, 5, 60].map((g) => ({ value: g, label: `${g}m` })));
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
    function _() {
      m.value = null, f.value = d(), R.value = !0;
    }
    function F(B) {
      m.value = B.id ?? null, f.value = JSON.parse(JSON.stringify(B)), R.value = !0;
    }
    const x = v(() => {
      var p;
      const B = [], g = f.value;
      return g ? ((!g.name || !g.name.trim()) && B.push(o("admin.ops.alertRules.validation.nameRequired")), g.metric_type || B.push(o("admin.ops.alertRules.validation.metricRequired")), j.has(g.metric_type) && !O((p = g.filters) == null ? void 0 : p.group_id) && B.push(o("admin.ops.alertRules.validation.groupIdRequired")), g.operator || B.push(o("admin.ops.alertRules.validation.operatorRequired")), typeof g.threshold == "number" && Number.isFinite(g.threshold) || B.push(o("admin.ops.alertRules.validation.thresholdRequired")), typeof g.window_minutes == "number" && Number.isFinite(g.window_minutes) && [1, 5, 60].includes(g.window_minutes) || B.push(o("admin.ops.alertRules.validation.windowRange")), typeof g.sustained_minutes == "number" && Number.isInteger(g.sustained_minutes) && g.sustained_minutes >= 1 && g.sustained_minutes <= 1440 || B.push(o("admin.ops.alertRules.validation.sustainedRange")), typeof g.cooldown_minutes == "number" && Number.isInteger(g.cooldown_minutes) && g.cooldown_minutes >= 0 && g.cooldown_minutes <= 1440 || B.push(o("admin.ops.alertRules.validation.cooldownRange")), { valid: B.length === 0, errors: B }) : { valid: !0, errors: B };
    });
    async function y() {
      var B, g;
      if (f.value) {
        if (!x.value.valid) {
          s.showError(x.value.errors[0] || o("admin.ops.alertRules.validation.invalid"));
          return;
        }
        L.value = !0;
        try {
          m.value ? await se.updateAlertRule(m.value, f.value) : await se.createAlertRule(f.value), R.value = !1, f.value = null, m.value = null, await D(), s.showSuccess(o("admin.ops.alertRules.saveSuccess"));
        } catch (p) {
          console.error("[OpsAlertRulesCard] Failed to save rule", p), s.showError(((g = (B = p == null ? void 0 : p.response) == null ? void 0 : B.data) == null ? void 0 : g.detail) || o("admin.ops.alertRules.saveFailed"));
        } finally {
          L.value = !1;
        }
      }
    }
    const T = S(!1), G = S(null);
    function pe(B) {
      G.value = B, T.value = !0;
    }
    async function he() {
      var B, g, p;
      if ((B = G.value) != null && B.id)
        try {
          await se.deleteAlertRule(G.value.id), T.value = !1, G.value = null, await D(), s.showSuccess(o("admin.ops.alertRules.deleteSuccess"));
        } catch (z) {
          console.error("[OpsAlertRulesCard] Failed to delete rule", z), s.showError(((p = (g = z == null ? void 0 : z.response) == null ? void 0 : g.data) == null ? void 0 : p.detail) || o("admin.ops.alertRules.deleteFailed"));
        }
    }
    function ge() {
      T.value = !1, G.value = null;
    }
    return (B, g) => (n(), i("div", P_, [
      e("div", U_, [
        e("div", null, [
          e("h3", N_, t(a(o)("admin.ops.alertRules.title")), 1),
          e("p", B_, t(a(o)("admin.ops.alertRules.description")), 1)
        ]),
        e("div", H_, [
          e("button", {
            class: "btn btn-sm btn-primary",
            disabled: r.value,
            onClick: _
          }, t(a(o)("admin.ops.alertRules.create")), 9, G_),
          e("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: r.value,
            onClick: D
          }, [
            (n(), i("svg", {
              class: K(["h-3.5 w-3.5", { "animate-spin": r.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...g[14] || (g[14] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            N(" " + t(a(o)("common.refresh")), 1)
          ], 8, Q_)
        ])
      ]),
      r.value ? (n(), i("div", W_, t(a(o)("admin.ops.alertRules.loading")), 1)) : w.value.length === 0 ? (n(), i("div", K_, t(a(o)("admin.ops.alertRules.empty")), 1)) : (n(), i("div", J_, [
        e("div", Z_, [
          a(k) ? (n(), i("table", vf, [
            e("thead", xf, [
              e("tr", null, [
                e("th", _f, t(a(o)("admin.ops.alertRules.table.name")), 1),
                e("th", ff, t(a(o)("admin.ops.alertRules.table.metric")), 1),
                e("th", yf, t(a(o)("admin.ops.alertRules.table.severity")), 1),
                e("th", hf, t(a(o)("admin.ops.alertRules.table.enabled")), 1),
                e("th", bf, t(a(o)("admin.ops.alertRules.table.actions")), 1)
              ])
            ]),
            e("tbody", kf, [
              (n(!0), i(le, null, ce(w.value, (p) => (n(), i("tr", {
                key: p.id,
                class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
              }, [
                e("td", wf, [
                  e("div", $f, t(p.name), 1),
                  p.description ? (n(), i("div", Cf, t(p.description), 1)) : M("", !0),
                  p.updated_at ? (n(), i("div", Sf, t(a(Ke)(p.updated_at)), 1)) : M("", !0)
                ]),
                e("td", Rf, [
                  e("span", Tf, t(p.metric_type), 1),
                  e("span", Df, t(p.operator), 1),
                  e("span", Ef, t(p.threshold), 1)
                ]),
                e("td", qf, t(p.severity), 1),
                e("td", Lf, t(p.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("td", zf, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (z) => F(p)
                  }, t(a(o)("common.edit")), 9, Mf),
                  e("button", {
                    class: "ml-2 btn btn-sm btn-danger",
                    onClick: (z) => pe(p)
                  }, t(a(o)("common.delete")), 9, Af)
                ])
              ]))), 128))
            ])
          ])) : (n(), i("div", Y_, [
            (n(!0), i(le, null, ce(w.value, (p) => (n(), i("div", {
              key: p.id,
              class: "space-y-2 p-4"
            }, [
              e("div", X_, [
                e("div", ef, [
                  e("div", tf, t(p.name), 1),
                  p.description ? (n(), i("div", sf, t(p.description), 1)) : M("", !0)
                ]),
                e("span", af, t(p.severity), 1)
              ]),
              e("div", rf, [
                e("span", of, t(p.metric_type), 1),
                e("span", nf, t(p.operator), 1),
                e("span", lf, t(p.threshold), 1)
              ]),
              e("div", df, [
                e("span", uf, t(p.enabled ? a(o)("common.enabled") : a(o)("common.disabled")), 1),
                e("div", cf, [
                  e("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (z) => F(p)
                  }, t(a(o)("common.edit")), 9, pf),
                  e("button", {
                    class: "btn btn-sm btn-danger",
                    onClick: (z) => pe(p)
                  }, t(a(o)("common.delete")), 9, mf)
                ])
              ]),
              p.updated_at ? (n(), i("div", gf, t(a(Ke)(p.updated_at)), 1)) : M("", !0)
            ]))), 128))
          ]))
        ])
      ])),
      U(et, {
        show: R.value,
        title: m.value ? a(o)("admin.ops.alertRules.editTitle") : a(o)("admin.ops.alertRules.createTitle"),
        width: "wide",
        onClose: g[13] || (g[13] = (p) => R.value = !1)
      }, {
        footer: ve(() => [
          e("div", ly, [
            e("button", {
              class: "btn btn-secondary",
              disabled: L.value,
              onClick: g[12] || (g[12] = (p) => R.value = !1)
            }, t(a(o)("common.cancel")), 9, iy),
            e("button", {
              class: "btn btn-primary",
              disabled: L.value,
              onClick: y
            }, t(L.value ? a(o)("common.saving") : a(o)("common.save")), 9, dy)
          ])
        ]),
        default: ve(() => [
          e("div", If, [
            x.value.valid ? M("", !0) : (n(), i("div", Vf, [
              e("div", Ff, t(a(o)("admin.ops.alertRules.validation.title")), 1),
              e("ul", Of, [
                (n(!0), i(le, null, ce(x.value.errors, (p) => (n(), i("li", { key: p }, t(p), 1))), 128))
              ])
            ])),
            e("div", jf, [
              e("div", Pf, [
                e("label", Uf, t(a(o)("admin.ops.alertRules.form.name")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[0] || (g[0] = (p) => f.value.name = p),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [de, f.value.name]
                ])
              ]),
              e("div", Nf, [
                e("label", Bf, t(a(o)("admin.ops.alertRules.form.description")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[1] || (g[1] = (p) => f.value.description = p),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [de, f.value.description]
                ])
              ]),
              e("div", null, [
                e("label", Hf, t(a(o)("admin.ops.alertRules.form.metric")), 1),
                U(me, {
                  modelValue: f.value.metric_type,
                  "onUpdate:modelValue": g[2] || (g[2] = (p) => f.value.metric_type = p),
                  options: J.value
                }, null, 8, ["modelValue", "options"]),
                X.value ? (n(), i("div", Gf, [
                  e("p", null, t(X.value.description), 1),
                  e("p", null, t(a(o)("admin.ops.alertRules.hints.recommended", {
                    operator: X.value.recommendedOperator,
                    threshold: X.value.recommendedThreshold,
                    unit: X.value.unit || ""
                  })), 1)
                ])) : M("", !0)
              ]),
              e("div", null, [
                e("label", Qf, t(a(o)("admin.ops.alertRules.form.operator")), 1),
                U(me, {
                  modelValue: f.value.operator,
                  "onUpdate:modelValue": g[3] || (g[3] = (p) => f.value.operator = p),
                  options: ue.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", Wf, [
                e("label", Kf, [
                  N(t(a(o)("admin.ops.alertRules.form.groupId")) + " ", 1),
                  E.value ? (n(), i("span", Jf, "*")) : M("", !0)
                ]),
                U(me, {
                  modelValue: h.value,
                  "onUpdate:modelValue": g[4] || (g[4] = (p) => h.value = p),
                  options: Z.value,
                  searchable: "",
                  placeholder: a(o)("admin.ops.alertRules.form.groupPlaceholder"),
                  error: E.value && !h.value
                }, null, 8, ["modelValue", "options", "placeholder", "error"]),
                e("p", Zf, t(E.value ? a(o)("admin.ops.alertRules.hints.groupRequired") : a(o)("admin.ops.alertRules.hints.groupOptional")), 1)
              ]),
              e("div", null, [
                e("label", Yf, t(a(o)("admin.ops.alertRules.form.threshold")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[5] || (g[5] = (p) => f.value.threshold = p),
                  class: "input",
                  type: "number"
                }, null, 512), [
                  [
                    de,
                    f.value.threshold,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", null, [
                e("label", Xf, t(a(o)("admin.ops.alertRules.form.severity")), 1),
                U(me, {
                  modelValue: f.value.severity,
                  "onUpdate:modelValue": g[6] || (g[6] = (p) => f.value.severity = p),
                  options: H.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", ey, t(a(o)("admin.ops.alertRules.form.window")), 1),
                U(me, {
                  modelValue: f.value.window_minutes,
                  "onUpdate:modelValue": g[7] || (g[7] = (p) => f.value.window_minutes = p),
                  options: q.value
                }, null, 8, ["modelValue", "options"])
              ]),
              e("div", null, [
                e("label", ty, t(a(o)("admin.ops.alertRules.form.sustained")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[8] || (g[8] = (p) => f.value.sustained_minutes = p),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "1440"
                }, null, 512), [
                  [
                    de,
                    f.value.sustained_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", null, [
                e("label", sy, t(a(o)("admin.ops.alertRules.form.cooldown")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[9] || (g[9] = (p) => f.value.cooldown_minutes = p),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "1440"
                }, null, 512), [
                  [
                    de,
                    f.value.cooldown_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", ay, [
                e("span", ry, t(a(o)("admin.ops.alertRules.form.enabled")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[10] || (g[10] = (p) => f.value.enabled = p),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [$t, f.value.enabled]
                ])
              ]),
              e("div", oy, [
                e("span", ny, t(a(o)("admin.ops.alertRules.form.notifyEmail")), 1),
                ae(e("input", {
                  "onUpdate:modelValue": g[11] || (g[11] = (p) => f.value.notify_email = p),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [$t, f.value.notify_email]
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      U(Ls, {
        show: T.value,
        title: a(o)("admin.ops.alertRules.deleteConfirmTitle"),
        message: a(o)("admin.ops.alertRules.deleteConfirmMessage"),
        confirmText: a(o)("common.delete"),
        cancelText: a(o)("common.cancel"),
        onConfirm: he,
        onCancel: ge
      }, null, 8, ["show", "title", "message", "confirmText", "cancelText"])
    ]));
  }
}), cy = {
  key: 0,
  class: "rounded-2xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, py = {
  key: 3,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-4"
}, my = { class: "lg:col-span-1 min-h-[360px]" }, gy = { class: "lg:col-span-1 h-[360px]" }, vy = { class: "lg:col-span-2 h-[360px]" }, xy = {
  key: 4,
  class: "grid grid-cols-1 gap-6 md:grid-cols-3"
}, _y = {
  key: 5,
  class: "grid grid-cols-1 gap-6"
}, us = 5, Ey = /* @__PURE__ */ fe({
  __name: "OpsDashboard",
  setup(b) {
    const o = Ds(), s = Ts(), k = nt(), r = ps(), { t: V } = ye(), D = v(() => r.opsMonitoringEnabled), w = /* @__PURE__ */ new Set(["5m", "30m", "1h", "6h", "24h", "custom"]), R = /* @__PURE__ */ new Set(["auto", "raw", "preagg"]), L = S(!0), m = S(!1), f = S(""), j = S(/* @__PURE__ */ new Date()), O = S("1h"), c = S(""), $ = S(null), E = S("auto"), h = S(null), Z = S(null), re = `${us}h`, X = us * 60 * 60 * 1e3, J = {
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
    }, ue = S(!1), H = S(!1), q = v(() => {
      const C = o.query[J.fullscreen];
      return C === "1" || C === "true";
    });
    function d() {
      const C = { ...o.query };
      delete C[J.fullscreen], s.replace({ query: C });
    }
    function _() {
      const C = { ...o.query, [J.fullscreen]: "1" };
      s.replace({ query: C });
    }
    function F(C) {
      C.key === "Escape" && q.value && d();
    }
    let x = null, y = 0;
    function T(C) {
      return !!C && typeof C == "object" && "code" in C && C.code === "ERR_CANCELED";
    }
    function G() {
      x && (x.abort(), x = null);
    }
    const pe = (C) => {
      const P = o.query[C];
      return typeof P == "string" ? P : Array.isArray(P) && typeof P[0] == "string" ? P[0] : "";
    }, he = (C) => {
      const P = pe(C);
      if (!P) return null;
      const W = Number.parseInt(P, 10);
      return Number.isFinite(W) ? W : null;
    }, ge = () => {
      const C = pe(J.timeRange);
      C && w.has(C) && (O.value = C), c.value = pe(J.platform) || "";
      const P = he(J.groupId);
      $.value = typeof P == "number" && P > 0 ? P : null;
      const W = pe(J.queryMode);
      if (W && R.has(W))
        E.value = W;
      else {
        const Ee = r.opsQueryModeDefault || "auto";
        E.value = R.has(Ee) ? Ee : "auto";
      }
      const Qe = pe(J.openAlertRules);
      (Qe === "1" || Qe === "true") && (je.value = !0);
      const st = he(J.alertRuleId);
      typeof st == "number" && st > 0 && (je.value = !0);
      const Ie = pe(J.openErrorDetails);
      if (Ie === "1" || Ie === "true") {
        const Ee = pe(J.errorType);
        Me.value = Ee === "upstream" ? "upstream" : "request", ke.value = !0;
      }
    }, B = () => {
      const C = { ...o.query };
      return Object.values(J).forEach((P) => {
        delete C[P];
      }), O.value !== "1h" && (C[J.timeRange] = O.value), c.value && (C[J.platform] = c.value), typeof $.value == "number" && $.value > 0 && (C[J.groupId] = String($.value)), E.value !== "auto" && (C[J.queryMode] = E.value), C;
    }, g = js(async () => {
      if (ue.value) return;
      const C = B(), P = o.query, W = Object.keys(C), Qe = Object.keys(P);
      if (!(W.length === Qe.length && W.every((Ee) => String(P[Ee] ?? "") === String(C[Ee] ?? ""))))
        try {
          H.value = !0, await s.replace({ query: C });
        } finally {
          H.value = !1;
        }
    }, 250), p = S(null), z = S(null), oe = S(null), Le = S(!1), ze = S(null), Te = S(!1), De = S(null), Ne = S(!1), Q = S(null), A = S(!1), I = S(null), ee = S(!1), ie = S(null), be = S(!1), ke = S(!1), Me = S("request"), Be = S(!1), tt = S({
      title: "",
      kind: "all",
      sort: "created_at_desc"
    }), Je = S(!1), je = S(!1);
    ge();
    const Ze = S(!0), it = S(!1), He = S(!1), at = S(3e4), we = S(0), Se = S(0), { pause: qt, resume: xt } = Os(
      () => {
        if (He.value && D.value && !L.value) {
          if (we.value <= 0) {
            Ae();
            return;
          }
          we.value -= 1;
        }
      },
      1e3,
      { immediate: !1 }
    );
    async function Pe() {
      try {
        const C = await se.getAdvancedSettings();
        Ze.value = C.display_alert_events, it.value = C.display_openai_token_stats, He.value = C.auto_refresh_enabled, at.value = C.auto_refresh_interval_seconds * 1e3, we.value = C.auto_refresh_interval_seconds;
      } catch (C) {
        console.error("[OpsDashboard] Failed to load dashboard advanced settings", C), Ze.value = !0, it.value = !1, He.value = !1, at.value = 3e4, we.value = 0;
      }
    }
    function _t(C) {
      c.value = C || "", $.value = null;
    }
    function ft(C) {
      const P = Number.isFinite(C) && C > 0 ? C : null;
      $.value = P;
    }
    function dt(C) {
      const P = {
        title: V("admin.ops.requestDetails.title"),
        kind: "all",
        sort: "created_at_desc"
      };
      tt.value = { ...P, ...C ?? {} }, tt.value.title || (tt.value.title = P.title), ke.value = !1, be.value = !1, Be.value = !0;
    }
    function ut(C) {
      Me.value = C, Be.value = !1, be.value = !1, ke.value = !0;
    }
    function Vt(C) {
      typeof C == "string" && w.has(C) && (O.value = C);
    }
    function yt(C, P) {
      h.value = C, Z.value = P;
    }
    async function ht() {
      await Pe(), Mt(), Ae();
    }
    function Ft(C) {
      c.value = typeof C == "string" ? C : "";
    }
    function bt(C) {
      if (C === null) {
        $.value = null;
        return;
      }
      if (typeof C == "number") {
        $.value = C > 0 ? C : null;
        return;
      }
      if (typeof C == "string") {
        const P = Number.parseInt(C, 10);
        $.value = Number.isFinite(P) && P > 0 ? P : null;
      }
    }
    function Ot(C) {
      typeof C == "string" && R.has(C) && (E.value = C);
    }
    function ct(C) {
      ie.value = C, ke.value = !1, Be.value = !1, be.value = !0;
    }
    function Ge() {
      const C = {
        platform: c.value || void 0,
        group_id: $.value ?? void 0,
        mode: E.value
      };
      return O.value === "custom" ? h.value && Z.value ? (C.start_time = h.value, C.end_time = Z.value) : C.time_range = "1h" : C.time_range = O.value, C;
    }
    function Lt() {
      const C = {
        platform: c.value || void 0,
        group_id: $.value ?? void 0,
        mode: E.value
      }, P = /* @__PURE__ */ new Date(), W = new Date(P.getTime() - X);
      return C.start_time = W.toISOString(), C.end_time = P.toISOString(), C;
    }
    async function kt(C, P) {
      if (D.value)
        try {
          const W = await se.getDashboardOverview(Ge(), { signal: P });
          if (C !== y) return;
          p.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          p.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadOverview"));
        }
    }
    async function pt(C, P) {
      if (D.value) {
        Te.value = !0;
        try {
          const W = await se.getThroughputTrend(Lt(), { signal: P });
          if (C !== y) return;
          ze.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          ze.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadSwitchTrend"));
        } finally {
          C === y && (Te.value = !1);
        }
      }
    }
    async function rt(C, P) {
      if (D.value) {
        Le.value = !0;
        try {
          const W = await se.getThroughputTrend(Ge(), { signal: P });
          if (C !== y) return;
          oe.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          oe.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadThroughputTrend"));
        } finally {
          C === y && (Le.value = !1);
        }
      }
    }
    async function jt(C, P) {
      if (D.value) {
        Le.value = !0, A.value = !0;
        try {
          const W = await se.getDashboardSnapshotV2(Ge(), { signal: P });
          if (C !== y) return;
          p.value = W.overview, oe.value = W.throughput_trend, Q.value = W.error_trend;
        } catch (W) {
          if (C !== y || T(W)) return;
          await Promise.all([
            kt(C, P),
            rt(C, P),
            ot(C, P)
          ]);
        } finally {
          C === y && (Le.value = !1, A.value = !1);
        }
      }
    }
    async function Pt(C, P) {
      if (D.value) {
        Ne.value = !0;
        try {
          const W = await se.getLatencyHistogram(Ge(), { signal: P });
          if (C !== y) return;
          De.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          De.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadLatencyHistogram"));
        } finally {
          C === y && (Ne.value = !1);
        }
      }
    }
    async function ot(C, P) {
      if (D.value) {
        A.value = !0;
        try {
          const W = await se.getErrorTrend(Ge(), { signal: P });
          if (C !== y) return;
          Q.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          Q.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadErrorTrend"));
        } finally {
          C === y && (A.value = !1);
        }
      }
    }
    async function mt(C, P) {
      if (D.value) {
        ee.value = !0;
        try {
          const W = await se.getErrorDistribution(Ge(), { signal: P });
          if (C !== y) return;
          I.value = W;
        } catch (W) {
          if (C !== y || T(W)) return;
          I.value = null, k.showError((W == null ? void 0 : W.message) || V("admin.ops.failedToLoadErrorDistribution"));
        } finally {
          C === y && (ee.value = !1);
        }
      }
    }
    async function zt(C, P) {
      D.value && await Promise.all([
        Pt(C, P),
        mt(C, P)
      ]);
    }
    function gt(C) {
      return !!C && typeof C == "object" && "code" in C && typeof C.code == "string" && C.code === "OPS_DISABLED";
    }
    async function Ae() {
      if (!D.value) return;
      G(), y += 1;
      const C = y;
      x = new AbortController(), L.value = !0, f.value = "";
      try {
        if (await Promise.all([
          jt(C, x.signal),
          pt(C, x.signal)
        ]), C !== y) return;
        j.value = /* @__PURE__ */ new Date(), Se.value += 1, He.value && (we.value = Math.floor(at.value / 1e3)), zt(C, x.signal);
      } catch (P) {
        gt(P) || (console.error("[ops] failed to fetch dashboard data", P), f.value = V("admin.ops.failedToLoadData"));
      } finally {
        C === y && (L.value = !1, m.value = !0);
      }
    }
    xe(
      () => [O.value, c.value, $.value, E.value],
      () => {
        ue.value || (D.value && Ae(), g());
      }
    ), xe(
      () => o.query,
      () => {
        if (H.value) return;
        const C = O.value, P = c.value, W = $.value;
        ue.value = !0, ge(), ue.value = !1, (C !== O.value || P !== c.value || W !== $.value) && D.value && Ae();
      }
    ), St(async () => {
      if (window.addEventListener("keydown", F), await r.fetch(), !r.opsMonitoringEnabled) {
        await s.replace("/admin/settings");
        return;
      }
      Mt(), await Pe(), D.value && await Ae(), He.value && xt();
    });
    async function Mt() {
      try {
        const C = await se.getMetricThresholds();
        z.value = C || null;
      } catch (C) {
        console.warn("[OpsDashboard] Failed to load thresholds", C), z.value = null;
      }
    }
    return Rs(() => {
      window.removeEventListener("keydown", F), G(), qt();
    }), xe(He, (C) => {
      C ? (we.value = Math.floor(at.value / 1e3), xt()) : (qt(), we.value = 0);
    }), xe(Je, async (C) => {
      C || await Pe();
    }), (C, P) => {
      var W, Qe, st, Ie, Ee;
      return n(), i("div", {
        class: K([q.value ? "flex min-h-screen flex-col justify-center bg-gray-50 p-4 dark:bg-dark-950 md:p-6" : "", "space-y-6 pb-12"])
      }, [
        f.value ? (n(), i("div", cy, t(f.value), 1)) : M("", !0),
        L.value && !m.value ? (n(), ne(An, {
          key: 1,
          fullscreen: q.value
        }, null, 8, ["fullscreen"])) : D.value ? (n(), ne(yn, {
          key: 2,
          overview: p.value,
          platform: c.value,
          "group-id": $.value,
          "time-range": O.value,
          "query-mode": E.value,
          loading: L.value,
          "last-updated": j.value,
          thresholds: z.value,
          "auto-refresh-enabled": He.value,
          "auto-refresh-countdown": we.value,
          fullscreen: q.value,
          "custom-start-time": h.value,
          "custom-end-time": Z.value,
          "onUpdate:timeRange": Vt,
          "onUpdate:platform": Ft,
          "onUpdate:group": bt,
          "onUpdate:queryMode": Ot,
          "onUpdate:customTimeRange": yt,
          onRefresh: Ae,
          onOpenRequestDetails: dt,
          onOpenErrorDetails: ut,
          onOpenSettings: P[0] || (P[0] = (Re) => Je.value = !0),
          onOpenAlertRules: P[1] || (P[1] = (Re) => je.value = !0),
          onEnterFullscreen: _,
          onExitFullscreen: d
        }, null, 8, ["overview", "platform", "group-id", "time-range", "query-mode", "loading", "last-updated", "thresholds", "auto-refresh-enabled", "auto-refresh-countdown", "fullscreen", "custom-start-time", "custom-end-time"])) : M("", !0),
        D.value && !(L.value && !m.value) ? (n(), i("div", py, [
          e("div", my, [
            U(Vl, {
              "platform-filter": c.value,
              "group-id-filter": $.value,
              "refresh-token": Se.value
            }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
          ]),
          e("div", gy, [
            U(Tc, {
              points: ((W = ze.value) == null ? void 0 : W.points) ?? [],
              loading: Te.value,
              "time-range": re,
              fullscreen: q.value
            }, null, 8, ["points", "loading", "fullscreen"])
          ]),
          e("div", vy, [
            U(bc, {
              points: ((Qe = oe.value) == null ? void 0 : Qe.points) ?? [],
              "by-platform": ((st = oe.value) == null ? void 0 : st.by_platform) ?? [],
              "top-groups": ((Ie = oe.value) == null ? void 0 : Ie.top_groups) ?? [],
              loading: Le.value,
              "time-range": O.value,
              fullscreen: q.value,
              onSelectPlatform: _t,
              onSelectGroup: ft,
              onOpenDetails: dt
            }, null, 8, ["points", "by-platform", "top-groups", "loading", "time-range", "fullscreen"])
          ])
        ])) : M("", !0),
        D.value && !(L.value && !m.value) ? (n(), i("div", xy, [
          U(tc, {
            "latency-data": De.value,
            loading: Ne.value
          }, null, 8, ["latency-data", "loading"]),
          U(gd, {
            data: I.value,
            loading: ee.value,
            onOpenDetails: P[2] || (P[2] = (Re) => ut("request"))
          }, null, 8, ["data", "loading"]),
          U(Wu, {
            points: ((Ee = Q.value) == null ? void 0 : Ee.points) ?? [],
            loading: A.value,
            "time-range": O.value,
            onOpenRequestErrors: P[3] || (P[3] = (Re) => ut("request")),
            onOpenUpstreamErrors: P[4] || (P[4] = (Re) => ut("upstream"))
          }, null, 8, ["points", "loading", "time-range"])
        ])) : M("", !0),
        D.value && it.value && !(L.value && !m.value) ? (n(), i("div", _y, [
          U(hm, {
            "platform-filter": c.value,
            "group-id-filter": $.value,
            "refresh-token": Se.value
          }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
        ])) : M("", !0),
        D.value && Ze.value && !(L.value && !m.value) ? (n(), ne(fp, { key: 6 })) : M("", !0),
        D.value && !(L.value && !m.value) ? (n(), ne(Vg, {
          key: 7,
          "platform-filter": c.value,
          "refresh-token": Se.value
        }, null, 8, ["platform-filter", "refresh-token"])) : M("", !0),
        q.value ? M("", !0) : (n(), i(le, { key: 8 }, [
          U(j_, {
            show: Je.value,
            onClose: P[5] || (P[5] = (Re) => Je.value = !1),
            onSaved: ht
          }, null, 8, ["show"]),
          U(et, {
            show: je.value,
            title: a(V)("admin.ops.alertRules.title"),
            width: "extra-wide",
            onClose: P[6] || (P[6] = (Re) => je.value = !1)
          }, {
            default: ve(() => [
              U(uy)
            ]),
            _: 1
          }, 8, ["show", "title"]),
          U(Fu, {
            show: ke.value,
            "time-range": O.value,
            "custom-start-time": h.value,
            "custom-end-time": Z.value,
            platform: c.value,
            "group-id": $.value,
            "error-type": Me.value,
            "onUpdate:show": P[7] || (P[7] = (Re) => ke.value = Re),
            onOpenErrorDetail: ct
          }, null, 8, ["show", "time-range", "custom-start-time", "custom-end-time", "platform", "group-id", "error-type"]),
          U(ed, {
            show: be.value,
            "onUpdate:show": P[8] || (P[8] = (Re) => be.value = Re),
            "error-id": ie.value,
            "error-type": Me.value
          }, null, 8, ["show", "error-id", "error-type"]),
          U(Av, {
            modelValue: Be.value,
            "onUpdate:modelValue": P[9] || (P[9] = (Re) => Be.value = Re),
            "time-range": O.value,
            preset: tt.value,
            platform: c.value,
            "group-id": $.value,
            onOpenErrorDetail: ct
          }, null, 8, ["modelValue", "time-range", "preset", "platform", "group-id"])
        ], 64))
      ], 2);
    };
  }
});
export {
  Ey as default
};
