var zr = Object.defineProperty;
var Ir = (s, t, e) => t in s ? zr(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var et = (s, t, e) => Ir(s, typeof t != "symbol" ? t + "" : t, e);
import { K as Fr, L as Vr, j as I, E as _t, M as Co, I as Br, e as f, N as jr, O as qr, c as P, s as Ze, i as Nr, d as Mt, u as Et, a as $, n as Z, b as l, f as Q, t as h, F as gt, g as W, h as K, r as vt, k as ft, G as gs, v as wt, o as v, _ as ee, x as lt, y as pt, P as Hr, l as Wr, p as Fe, Q as Mo, R as pi, S as Ur, m as Do, T as fi, U as Ro, V as Yr, q as gi, w as js, z as Rn, W as Gr, J as Qi, X as Xr, Y as Kr } from "./cnProviderAdminLeaf-BPO9X3xc.js";
import { b as Tn, S as kt, _ as Re, o as ot, C as Qr, c as ts, D as Jr, P as Di, a as Zr } from "./platforms-Cmi8wUVf.js";
import { _ as Ot } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-4nkGBfgk.js";
import { f as tl, a as me, b as el } from "./format-Umo1un89.js";
import { e as sl, _ as Kt } from "./Toggle.vue_vue_type_script_setup_true_lang-DYpcY-Ah.js";
const To = Fr("adminSettings", () => {
  const s = Vr(), t = I(!1), e = I(!1), n = I(!0), i = I(!0), a = I("auto"), o = I(!1), r = I([]), d = I(null);
  let c = null, u = null, p = null, m = null, _ = !1, g = 0, x = 0, b = 0, y = 0;
  function T() {
    y += 1, g += 1, x += 1, b += 1, c = u = null, p = m = null, t.value = e.value = _ = !1, d.value = null, r.value = [], n.value = i.value = !0, a.value = "auto", o.value = !1;
  }
  _t(
    () => s.token && s.user ? `${s.user.id}:${s.user.role}` : "",
    T,
    { flush: "sync" }
  );
  function B(V = !1) {
    if (p) {
      if (V && !m) {
        b += 1;
        const E = y, N = p.then(() => (m === N && (m = null), E === y ? B(!0) : void 0)).finally(() => {
          m === N && (m = null);
        });
        m = N;
      }
      return V ? m : p;
    }
    if (_ && !V) return Promise.resolve();
    const L = ++b, A = Tn.payment.getConfig().then((E) => {
      var N;
      L === b && (o.value = ((N = E.data) == null ? void 0 : N.enabled) ?? !1, _ = !0);
    }).catch((E) => {
      L === b && console.error("[adminSettings] Failed to fetch payment settings:", E);
    }).finally(() => {
      p === A && (p = null);
    });
    return p = A, A;
  }
  function F(V = !1) {
    var N;
    if (!s.token || ((N = s.user) == null ? void 0 : N.role) !== "admin") return Promise.resolve();
    if (c) {
      if (V && !u) {
        g += 1;
        const Y = y, nt = c.then(() => (u === nt && (u = null), Y === y ? F(!0) : void 0)).finally(() => {
          u === nt && (u = null);
        });
        u = nt;
      }
      return V ? u : c;
    }
    if (B(V), t.value && !V) return Promise.resolve();
    V && (g += 1), e.value = !0;
    const L = g, A = x, E = Tn.settings.getNavigationSettings().then((Y) => {
      L === g && (A === x && (n.value = Y.ops_monitoring_enabled ?? !0, i.value = Y.ops_realtime_monitoring_enabled ?? !0, a.value = Y.ops_query_mode_default || "auto"), d.value = {
        ...Y,
        ops_monitoring_enabled: n.value,
        ops_realtime_monitoring_enabled: i.value,
        ops_query_mode_default: a.value
      }, r.value = Array.isArray(Y.custom_menu_items) ? Y.custom_menu_items : [], t.value = !0);
    }).catch((Y) => {
      L === g && console.error("[adminSettings] Failed to fetch settings:", Y);
    }).finally(() => {
      c === E && (c = null, e.value = !1);
    });
    return c = E, E;
  }
  function O(V) {
    x += 1, n.value = V, d.value && (d.value.ops_monitoring_enabled = V);
  }
  function j(V) {
    x += 1, i.value = V, d.value && (d.value.ops_realtime_monitoring_enabled = V);
  }
  function D(V) {
    b += 1, o.value = V, _ = !0;
  }
  function S(V) {
    x += 1, a.value = V || "auto", d.value && (d.value.ops_query_mode_default = a.value);
  }
  const w = () => O(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", w), Co(() => {
    T(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", w);
  }), {
    loaded: t,
    loading: e,
    opsMonitoringEnabled: n,
    opsRealtimeMonitoringEnabled: i,
    opsQueryModeDefault: a,
    paymentEnabled: o,
    customMenuItems: r,
    navigationSettings: d,
    fetch: F,
    reset: T,
    setOpsMonitoringEnabledLocal: O,
    setOpsRealtimeMonitoringEnabledLocal: j,
    setPaymentEnabledLocal: D,
    setOpsQueryModeDefaultLocal: S
  };
});
function mi(s) {
  return jr() ? (Co(s), !0) : !1;
}
function Pn(s) {
  return typeof s == "function" ? s() : f(s);
}
const _i = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ji = () => {
};
function nl(s, t) {
  function e(...n) {
    return new Promise((i, a) => {
      Promise.resolve(s(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(i).catch(a);
    });
  }
  return e;
}
function il(s, t = {}) {
  let e, n, i = Ji;
  const a = (r) => {
    clearTimeout(r), i(), i = Ji;
  };
  return (r) => {
    const d = Pn(s), c = Pn(t.maxWait);
    return e && a(e), d <= 0 || c !== void 0 && c <= 0 ? (n && (a(n), n = null), Promise.resolve(r())) : new Promise((u, p) => {
      i = t.rejectOnCancel ? p : u, c && !n && (n = setTimeout(() => {
        e && a(e), n = null, u(r());
      }, c)), e = setTimeout(() => {
        n && a(n), n = null, u(r());
      }, d);
    });
  };
}
function al(s, t = 200, e = {}) {
  return nl(
    il(t, e),
    s
  );
}
function ol(s, t = 1e3, e = {}) {
  const {
    immediate: n = !0,
    immediateCallback: i = !1
  } = e;
  let a = null;
  const o = I(!1);
  function r() {
    a && (clearInterval(a), a = null);
  }
  function d() {
    o.value = !1, r();
  }
  function c() {
    const u = Pn(t);
    u <= 0 || (o.value = !0, i && s(), r(), a = setInterval(s, u));
  }
  if (n && _i && c(), Br(t) || typeof t == "function") {
    const u = _t(t, () => {
      o.value && _i && c();
    });
    mi(u);
  }
  return mi(d), {
    isActive: o,
    pause: d,
    resume: c
  };
}
const rl = _i ? window : void 0;
function ll() {
  const s = I(!1), t = Nr();
  return t && Ze(() => {
    s.value = !0;
  }, t), s;
}
function dl(s) {
  const t = ll();
  return P(() => (t.value, !!s()));
}
function en(s, t = {}) {
  const { window: e = rl } = t, n = dl(() => e && "matchMedia" in e && typeof e.matchMedia == "function");
  let i;
  const a = I(!1), o = (c) => {
    a.value = c.matches;
  }, r = () => {
    i && ("removeEventListener" in i ? i.removeEventListener("change", o) : i.removeListener(o));
  }, d = qr(() => {
    n.value && (r(), i = e.matchMedia(Pn(s)), "addEventListener" in i ? i.addEventListener("change", o) : i.addListener(o), a.value = i.matches);
  });
  return mi(() => {
    d(), r(), i = void 0;
  }), a;
}
function cl(s) {
  const t = {
    P0: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    P1: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P2: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-400",
    P3: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
  };
  return t[String(s || "")] || t.P3;
}
function _e(s) {
  const t = new Date(s);
  return Number.isNaN(t.getTime()) ? "" : `${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")} ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}
function qs(s) {
  return s.reduce((t, e) => {
    const n = typeof e == "number" && Number.isFinite(e) ? e : 0;
    return t + n;
  }, 0);
}
function xi(s) {
  const t = (s || "").trim();
  if (!t) return 60;
  if (t.endsWith("m")) {
    const e = Number.parseInt(t.slice(0, -1), 10);
    return Number.isFinite(e) && e > 0 ? e : 60;
  }
  if (t.endsWith("h")) {
    const e = Number.parseInt(t.slice(0, -1), 10);
    return Number.isFinite(e) && e > 0 ? e * 60 : 60;
  }
  return 60;
}
function Ri(s, t) {
  if (!s) return "";
  const e = new Date(s);
  return Number.isNaN(e.getTime()) ? "" : xi(t) >= 1440 ? `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}` : `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function Zi(s) {
  return typeof s != "number" || !Number.isFinite(s) || s < 0 ? "-" : s === 0 ? "0 MB" : tl(s * 1024 * 1024, 1);
}
const ul = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, hl = { class: "flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, pl = {
  key: 0,
  class: "mt-1 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400"
}, fl = ["title"], gl = { class: "relative flex h-2 w-2" }, ml = { class: "flex flex-wrap items-center gap-3" }, _l = ["disabled", "title"], xl = {
  key: 3,
  class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block"
}, yl = ["title"], bl = { class: "hidden sm:inline" }, vl = ["title"], kl = { class: "hidden sm:inline" }, wl = ["title"], Sl = {
  key: 0,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, $l = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, Cl = { class: "group relative flex cursor-pointer flex-col items-center justify-center rounded-xl py-2 transition-all hover:bg-white/60 dark:hover:bg-dark-800/60 md:border-r md:border-gray-200 md:pr-6 dark:md:border-dark-700" }, Ml = { class: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 md:left-full md:top-0 md:ml-2 md:mt-0 md:translate-x-0" }, Dl = { class: "rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-dark-800 dark:ring-white/10" }, Rl = { class: "mb-3 border-b border-gray-100 pb-2 text-sm font-bold text-gray-900 dark:border-dark-700 dark:text-white flex items-center gap-2" }, Tl = { class: "space-y-3" }, Pl = { class: "mt-0.5 shrink-0" }, Ol = {
  key: 0,
  class: "h-4 w-4 text-red-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, Al = {
  key: 1,
  class: "h-4 w-4 text-zo-alert-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, El = {
  key: 2,
  class: "h-4 w-4 text-blue-500",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, Ll = { class: "flex-1" }, zl = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, Il = { class: "mt-0.5 text-[11px] text-gray-500 dark:text-gray-400" }, Fl = {
  key: 0,
  class: "mt-1 text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1"
}, Vl = { class: "mt-3 border-t border-gray-100 pt-2 text-[10px] text-gray-400 dark:border-dark-700" }, Bl = { class: "relative flex items-center justify-center" }, jl = ["width", "height"], ql = ["cx", "cy", "r", "stroke-width"], Nl = ["cx", "cy", "r", "stroke-width", "stroke", "stroke-dasharray", "stroke-dashoffset"], Hl = { class: "absolute flex flex-col items-center" }, Wl = {
  key: 0,
  class: "mt-4 text-center"
}, Ul = { class: "flex items-center justify-center gap-1 text-xs font-medium text-gray-500" }, Yl = { class: "flex h-full flex-col justify-center py-2" }, Gl = { class: "mb-3 flex flex-wrap items-center justify-between gap-2" }, Xl = { class: "flex items-center gap-2" }, Kl = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ql = { class: "flex flex-wrap gap-1" }, Jl = ["onClick"], Zl = { class: "mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-2" }, td = { class: "flex items-baseline gap-1.5" }, ed = { class: "flex items-baseline gap-1.5" }, sd = { class: "grid grid-cols-2 gap-3" }, nd = { class: "flex items-baseline gap-1.5" }, id = { class: "font-black text-gray-900 dark:text-white" }, ad = { class: "flex items-baseline gap-1.5" }, od = { class: "font-black text-gray-900 dark:text-white" }, rd = { class: "text-xs" }, ld = { class: "flex items-baseline gap-1.5" }, dd = { class: "font-black text-gray-900 dark:text-white" }, cd = { class: "flex items-baseline gap-1.5" }, ud = { class: "font-black text-gray-900 dark:text-white" }, hd = { class: "text-xs" }, pd = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3" }, fd = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "1" }
}, gd = { class: "flex items-center justify-between" }, md = { class: "flex items-center gap-1" }, _d = { class: "text-[10px] font-bold uppercase text-gray-400" }, xd = { class: "mt-2 space-y-2 text-xs" }, yd = { class: "flex justify-between" }, bd = { class: "text-gray-500" }, vd = { class: "font-bold text-gray-900 dark:text-white" }, kd = { class: "flex justify-between" }, wd = { class: "text-gray-500" }, Sd = { class: "font-bold text-gray-900 dark:text-white" }, $d = { class: "flex justify-between" }, Cd = { class: "text-gray-500" }, Md = { class: "font-bold text-gray-900 dark:text-white" }, Dd = { class: "flex justify-between" }, Rd = { class: "text-gray-500" }, Td = { class: "font-bold text-gray-900 dark:text-white" }, Pd = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "2" }
}, Od = { class: "flex items-center justify-between" }, Ad = { class: "flex items-center gap-2" }, Ed = { class: "text-[10px] font-bold uppercase text-gray-400" }, Ld = { class: "mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, zd = { class: "mt-3 text-xs" }, Id = { class: "flex justify-between" }, Fd = { class: "text-gray-500" }, Vd = { class: "font-bold text-gray-900 dark:text-white" }, Bd = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "4" }
}, jd = { class: "flex items-center justify-between" }, qd = { class: "flex items-center gap-1" }, Nd = { class: "text-[10px] font-bold uppercase text-gray-400" }, Hd = { class: "mt-2 flex items-baseline gap-2" }, Wd = { class: "text-3xl font-black text-gray-900 dark:text-white" }, Ud = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, Yd = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Gd = { class: "font-bold text-gray-900 dark:text-white" }, Xd = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Kd = { class: "font-bold text-gray-900 dark:text-white" }, Qd = { class: "flex items-baseline gap-1 whitespace-nowrap" }, Jd = { class: "font-bold text-gray-900 dark:text-white" }, Zd = { class: "flex items-baseline gap-1 whitespace-nowrap" }, tc = { class: "font-bold text-gray-900 dark:text-white" }, ec = { class: "flex items-baseline gap-1 whitespace-nowrap" }, sc = { class: "font-bold text-gray-900 dark:text-white" }, nc = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "5" }
}, ic = { class: "flex items-center justify-between" }, ac = { class: "flex items-center gap-1" }, oc = { class: "mt-2 flex items-baseline gap-2" }, rc = { class: "mt-3 grid grid-cols-1 gap-x-3 gap-y-1 text-xs 2xl:grid-cols-2" }, lc = { class: "flex items-baseline gap-1 whitespace-nowrap" }, dc = { class: "flex items-baseline gap-1 whitespace-nowrap" }, cc = { class: "flex items-baseline gap-1 whitespace-nowrap" }, uc = { class: "flex items-baseline gap-1 whitespace-nowrap" }, hc = { class: "flex items-baseline gap-1 whitespace-nowrap" }, pc = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "3" }
}, fc = { class: "flex items-center justify-between" }, gc = { class: "flex items-center gap-1" }, mc = { class: "text-[10px] font-bold uppercase text-gray-400" }, _c = { class: "mt-3 space-y-1 text-xs" }, xc = { class: "flex justify-between" }, yc = { class: "text-gray-500" }, bc = { class: "font-bold text-gray-900 dark:text-white" }, vc = { class: "flex justify-between" }, kc = { class: "text-gray-500" }, wc = { class: "font-bold text-gray-900 dark:text-white" }, Sc = {
  class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900",
  style: { order: "6" }
}, $c = { class: "flex items-center justify-between" }, Cc = { class: "flex items-center gap-1" }, Mc = { class: "text-[10px] font-bold uppercase text-gray-400" }, Dc = { class: "mt-3 space-y-1 text-xs" }, Rc = { class: "flex justify-between" }, Tc = { class: "text-gray-500" }, Pc = { class: "font-bold text-gray-900 dark:text-white" }, Oc = { class: "flex justify-between" }, Ac = { class: "font-bold text-gray-900 dark:text-white" }, Ec = {
  key: 1,
  class: "mt-2 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Lc = { class: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" }, zc = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Ic = { class: "flex items-center gap-1" }, Fc = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Vc = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Bc = { class: "flex items-center gap-1" }, jc = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, qc = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Nc = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Hc = { class: "flex items-center gap-1" }, Wc = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Uc = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Yc = { key: 0 }, Gc = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, Xc = { class: "flex items-center gap-1" }, Kc = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, Qc = { key: 0 }, Jc = { key: 1 }, Zc = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, tu = { class: "flex items-center gap-1" }, eu = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, su = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, nu = { class: "font-mono" }, iu = { key: 0 }, au = { class: "font-mono" }, ou = { class: "rounded-xl bg-gray-50 p-3 dark:bg-dark-900" }, ru = { class: "flex items-center justify-between gap-2" }, lu = { class: "flex items-center gap-1" }, du = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, cu = {
  key: 0,
  class: "mt-1 text-[10px] text-gray-500 dark:text-gray-400"
}, uu = { class: "font-mono" }, hu = { class: "font-mono" }, pu = {
  key: 0,
  class: "text-sm text-gray-500 dark:text-gray-400"
}, fu = {
  key: 1,
  class: "space-y-3"
}, gu = { class: "flex items-center justify-between gap-3" }, mu = { class: "truncate text-sm font-semibold text-gray-900 dark:text-white" }, _u = { class: "flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400" }, xu = {
  key: 0,
  class: "font-mono"
}, yu = { class: "mt-2 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, bu = { class: "font-mono" }, vu = { class: "font-mono" }, ku = { class: "font-mono" }, wu = {
  key: 0,
  class: "mt-3 rounded-lg bg-rose-50 p-2 text-xs text-rose-700 dark:bg-rose-900/20 dark:text-rose-300"
}, Su = { class: "space-y-4" }, $u = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, Cu = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, Mu = { class: "flex justify-end gap-3 pt-2" }, ta = 8e3, ea = 15e3, Du = /* @__PURE__ */ Mt({
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
  setup(s, { emit: t }) {
    const e = s, n = t, { t: i } = Et(), a = To(), o = I("1min"), r = P(() => e.overview ?? null), d = P(() => {
      var C;
      return ((C = r.value) == null ? void 0 : C.system_metrics) ?? null;
    }), c = {
      "1min": 1,
      "5min": 5,
      "30min": 30,
      "1h": 60
    }, u = {
      "5m": 5,
      "30m": 30,
      "1h": 60,
      "6h": 360,
      "24h": 1440
    }, p = P(() => {
      const C = u[e.timeRange] ?? 60;
      return ["1min", "5min", "30min", "1h"].filter((k) => c[k] <= C);
    });
    _t(
      () => e.timeRange,
      () => {
        o.value = "1min", M();
      }
    );
    const m = I(!1), _ = I(""), g = I("");
    function x(C, k) {
      const st = new Date(C), qt = new Date(k), he = (at) => {
        const ke = String(at.getMonth() + 1).padStart(2, "0"), cn = String(at.getDate()).padStart(2, "0"), cs = String(at.getHours()).padStart(2, "0"), us = String(at.getMinutes()).padStart(2, "0");
        return `${ke}-${cn} ${cs}:${us}`;
      };
      return `${he(st)} ~ ${he(qt)}`;
    }
    const b = I([]), y = P(() => [
      { value: "", label: i("common.all") },
      ...Qr
    ]), T = P(() => [
      { value: "5m", label: i("admin.ops.timeRange.5m") },
      { value: "30m", label: i("admin.ops.timeRange.30m") },
      { value: "1h", label: i("admin.ops.timeRange.1h") },
      { value: "6h", label: i("admin.ops.timeRange.6h") },
      { value: "24h", label: i("admin.ops.timeRange.24h") },
      {
        value: "custom",
        label: e.timeRange === "custom" && e.customStartTime && e.customEndTime ? `${i("admin.ops.timeRange.custom")} (${x(e.customStartTime, e.customEndTime)})` : i("admin.ops.timeRange.custom")
      }
    ]);
    P(() => [
      { value: "auto", label: i("admin.ops.queryMode.auto") },
      { value: "raw", label: i("admin.ops.queryMode.raw") },
      { value: "preagg", label: i("admin.ops.queryMode.preagg") }
    ]);
    const B = P(() => {
      const C = e.platform ? b.value.filter((k) => k.platform === e.platform) : b.value;
      return [{ value: null, label: i("common.all") }, ...C.map((k) => ({ value: k.id, label: k.name }))];
    });
    _t(
      () => e.platform,
      (C) => {
        if (!C) return;
        const k = b.value.find((st) => st.id === e.groupId);
        k && k.platform !== C && n("update:group", null);
      }
    ), Ze(async () => {
      try {
        const C = await Tn.groups.getAll();
        b.value = C.map((k) => ({ id: k.id, name: k.name, platform: k.platform }));
      } catch (C) {
        console.error("[OpsDashboardHeader] Failed to load groups", C), b.value = [];
      }
    });
    function F(C) {
      n("update:platform", String(C || ""));
    }
    function O(C) {
      if (C === null || C === "" || typeof C == "boolean") {
        n("update:group", null);
        return;
      }
      const k = typeof C == "number" ? C : Number.parseInt(String(C), 10);
      n("update:group", Number.isFinite(k) && k > 0 ? k : null);
    }
    function j(C) {
      const k = String(C || "1h");
      if (k === "custom") {
        const st = /* @__PURE__ */ new Date(), qt = new Date(st.getTime() - 3600 * 1e3);
        _.value = qt.toISOString().slice(0, 16), g.value = st.toISOString().slice(0, 16), m.value = !0;
      } else
        n("update:timeRange", k);
    }
    function D() {
      if (!_.value || !g.value) return;
      const C = new Date(_.value).toISOString(), k = new Date(g.value).toISOString();
      n("update:customTimeRange", C, k), n("update:timeRange", "custom"), m.value = !1;
    }
    function S() {
      m.value = !1;
    }
    function w(C) {
      n("openRequestDetails", C);
    }
    function V(C) {
      n("openErrorDetails", C);
    }
    function L(C) {
      var qt;
      if (C == null) return "normal";
      const k = (qt = e.thresholds) == null ? void 0 : qt.sla_percent_min;
      if (k == null) return "normal";
      const st = 0.1;
      return C < k ? "critical" : C < k + st ? "warning" : "normal";
    }
    function A(C) {
      var st;
      if (C == null) return "normal";
      const k = (st = e.thresholds) == null ? void 0 : st.ttft_p99_ms_max;
      return k == null ? "normal" : C >= k ? "critical" : C >= k * 0.8 ? "warning" : "normal";
    }
    function E(C) {
      var st;
      if (C == null) return "normal";
      const k = (st = e.thresholds) == null ? void 0 : st.request_error_rate_percent_max;
      return k == null ? "normal" : C >= k ? "critical" : C >= k * 0.8 ? "warning" : "normal";
    }
    function N(C) {
      var st;
      if (C == null) return "normal";
      const k = (st = e.thresholds) == null ? void 0 : st.upstream_error_rate_percent_max;
      return k == null ? "normal" : C >= k ? "critical" : C >= k * 0.8 ? "warning" : "normal";
    }
    function Y(C) {
      switch (C) {
        case "critical":
          return "text-red-600 dark:text-red-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-zo-signal-600 dark:text-zo-signal-400";
      }
    }
    const nt = P(() => {
      var C;
      return me(((C = r.value) == null ? void 0 : C.request_count_total) ?? 0);
    }), ct = P(() => {
      var C;
      return me(((C = r.value) == null ? void 0 : C.token_consumed) ?? 0);
    }), ht = I(null), G = I(!1);
    function R() {
      const C = (/* @__PURE__ */ new Date()).toISOString();
      return {
        window: o.value,
        start_time: C,
        end_time: C,
        platform: e.platform,
        group_id: e.groupId,
        qps: { current: 0, peak: 0, avg: 0 },
        tps: { current: 0, peak: 0, avg: 0 }
      };
    }
    async function M() {
      if (!G.value) {
        if (!a.opsRealtimeMonitoringEnabled) {
          ht.value = R();
          return;
        }
        G.value = !0;
        try {
          const C = await ot.getRealtimeTrafficSummary(o.value, e.platform, e.groupId);
          C && C.enabled === !1 && a.setOpsRealtimeMonitoringEnabledLocal(!1), ht.value = (C == null ? void 0 : C.summary) ?? null;
        } catch (C) {
          console.error("[OpsDashboardHeader] Failed to load realtime traffic summary", C), ht.value = null;
        } finally {
          G.value = !1;
        }
      }
    }
    _t(
      () => [o.value, e.platform, e.groupId],
      () => {
        M();
      },
      { immediate: !0 }
    ), _t(
      () => a.opsRealtimeMonitoringEnabled,
      (C) => {
        C ? M() : ht.value = R();
      },
      { immediate: !0 }
    ), _t(
      () => [e.autoRefreshEnabled, e.autoRefreshCountdown, e.loading],
      ([C, k, st]) => {
        C && (st || k === 0 && M());
      }
    );
    const q = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.qps) == null ? void 0 : st.current;
      return typeof C == "number" && Number.isFinite(C) ? C : 0;
    }), rt = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.tps) == null ? void 0 : st.current;
      return typeof C == "number" && Number.isFinite(C) ? C : 0;
    }), Ct = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.qps) == null ? void 0 : st.peak;
      return typeof C == "number" && Number.isFinite(C) ? C.toFixed(1) : "-";
    }), Pt = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.tps) == null ? void 0 : st.peak;
      return typeof C == "number" && Number.isFinite(C) ? C.toFixed(1) : "-";
    }), Dt = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.qps) == null ? void 0 : st.avg;
      return typeof C == "number" && Number.isFinite(C) ? C.toFixed(1) : "-";
    }), re = P(() => {
      var k, st;
      const C = (st = (k = ht.value) == null ? void 0 : k.tps) == null ? void 0 : st.avg;
      return typeof C == "number" && Number.isFinite(C) ? C.toFixed(1) : "-";
    }), tt = P(() => {
      var k, st;
      const C = (st = (k = r.value) == null ? void 0 : k.qps) == null ? void 0 : st.avg;
      return typeof C != "number" ? "-" : C.toFixed(1);
    }), U = P(() => {
      var k, st;
      const C = (st = (k = r.value) == null ? void 0 : k.tps) == null ? void 0 : st.avg;
      return typeof C != "number" ? "-" : C.toFixed(1);
    }), H = P(() => {
      var k, st;
      const C = (k = r.value) == null ? void 0 : k.sla;
      return typeof C != "number" || (((st = r.value) == null ? void 0 : st.request_count_sla) ?? 0) <= 0 ? null : C * 100;
    }), it = P(() => {
      var k;
      const C = (k = r.value) == null ? void 0 : k.error_rate;
      return typeof C != "number" ? null : C * 100;
    }), dt = P(() => {
      var k;
      const C = (k = r.value) == null ? void 0 : k.upstream_error_rate;
      return typeof C != "number" ? null : C * 100;
    }), Lt = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.p99_ms) ?? null;
    }), zt = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.p95_ms) ?? null;
    }), Ht = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.p90_ms) ?? null;
    }), be = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.p50_ms) ?? null;
    }), ve = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.avg_ms) ?? null;
    }), Te = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.duration) == null ? void 0 : k.max_ms) ?? null;
    }), le = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.p99_ms) ?? null;
    }), ie = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.p95_ms) ?? null;
    }), ss = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.p90_ms) ?? null;
    }), ns = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.p50_ms) ?? null;
    }), de = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.avg_ms) ?? null;
    }), Be = P(() => {
      var C, k;
      return ((k = (C = r.value) == null ? void 0 : C.ttft) == null ? void 0 : k.max_ms) ?? null;
    }), jt = P(() => {
      var qt;
      const C = r.value;
      if (!C) return !0;
      const k = (qt = C.qps) == null ? void 0 : qt.current, st = C.error_rate ?? 0;
      return (k ?? 0) === 0 && st === 0;
    }), Wt = P(() => {
      var k;
      const C = (k = r.value) == null ? void 0 : k.health_score;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), on = P(() => {
      if (jt.value) return "#9ca3af";
      const C = Wt.value;
      return C == null ? "#9ca3af" : C >= 90 ? "#3b82f6" : C >= 60 ? "#a78bfa" : "#ef4444";
    }), Ss = P(() => {
      if (jt.value) return "text-gray-400";
      const C = Wt.value;
      return C == null ? "text-gray-400" : C >= 90 ? "text-zo-signal-500" : C >= 60 ? "text-zo-alert-500" : "text-red-500";
    }), ae = P(() => e.fullscreen ? 140 : 100), $s = P(() => e.fullscreen ? 10 : 8), Cs = P(() => (ae.value - $s.value) / 2), is = P(() => 2 * Math.PI * Cs.value), as = P(() => {
      if (jt.value || Wt.value == null) return 0;
      const C = Math.max(0, Math.min(100, Wt.value));
      return is.value - C / 100 * is.value;
    }), Un = P(() => {
      var cn;
      const C = r.value;
      if (!C) return [];
      const k = [];
      if (jt.value)
        return k.push({
          type: "info",
          message: i("admin.ops.diagnosis.idle"),
          impact: i("admin.ops.diagnosis.idleImpact")
        }), k;
      const st = C.system_metrics;
      if (st) {
        st.db_ok === !1 && k.push({
          type: "critical",
          message: i("admin.ops.diagnosis.dbDown"),
          impact: i("admin.ops.diagnosis.dbDownImpact"),
          action: i("admin.ops.diagnosis.dbDownAction")
        }), st.redis_ok === !1 && k.push({
          type: "warning",
          message: i("admin.ops.diagnosis.redisDown"),
          impact: i("admin.ops.diagnosis.redisDownImpact"),
          action: i("admin.ops.diagnosis.redisDownAction")
        });
        const cs = st.cpu_usage_percent ?? 0;
        cs > 90 ? k.push({
          type: "critical",
          message: i("admin.ops.diagnosis.cpuCritical", { usage: cs.toFixed(1) }),
          impact: i("admin.ops.diagnosis.cpuCriticalImpact"),
          action: i("admin.ops.diagnosis.cpuCriticalAction")
        }) : cs > 80 && k.push({
          type: "warning",
          message: i("admin.ops.diagnosis.cpuHigh", { usage: cs.toFixed(1) }),
          impact: i("admin.ops.diagnosis.cpuHighImpact"),
          action: i("admin.ops.diagnosis.cpuHighAction")
        });
        const us = st.memory_usage_percent ?? 0;
        us > 90 ? k.push({
          type: "critical",
          message: i("admin.ops.diagnosis.memoryCritical", { usage: us.toFixed(1) }),
          impact: i("admin.ops.diagnosis.memoryCriticalImpact"),
          action: i("admin.ops.diagnosis.memoryCriticalAction")
        }) : us > 85 && k.push({
          type: "warning",
          message: i("admin.ops.diagnosis.memoryHigh", { usage: us.toFixed(1) }),
          impact: i("admin.ops.diagnosis.memoryHighImpact"),
          action: i("admin.ops.diagnosis.memoryHighAction")
        });
      }
      const qt = ((cn = C.ttft) == null ? void 0 : cn.p99_ms) ?? 0;
      qt > 500 && k.push({
        type: "warning",
        message: i("admin.ops.diagnosis.ttftHigh", { ttft: qt.toFixed(0) }),
        impact: i("admin.ops.diagnosis.ttftHighImpact"),
        action: i("admin.ops.diagnosis.ttftHighAction")
      });
      const he = (C.upstream_error_rate ?? 0) * 100;
      he > 5 ? k.push({
        type: "critical",
        message: i("admin.ops.diagnosis.upstreamCritical", { rate: he.toFixed(2) }),
        impact: i("admin.ops.diagnosis.upstreamCriticalImpact"),
        action: i("admin.ops.diagnosis.upstreamCriticalAction")
      }) : he > 2 && k.push({
        type: "warning",
        message: i("admin.ops.diagnosis.upstreamHigh", { rate: he.toFixed(2) }),
        impact: i("admin.ops.diagnosis.upstreamHighImpact"),
        action: i("admin.ops.diagnosis.upstreamHighAction")
      });
      const at = (C.error_rate ?? 0) * 100;
      at > 3 ? k.push({
        type: "critical",
        message: i("admin.ops.diagnosis.errorHigh", { rate: at.toFixed(2) }),
        impact: i("admin.ops.diagnosis.errorHighImpact"),
        action: i("admin.ops.diagnosis.errorHighAction")
      }) : at > 0.5 && k.push({
        type: "warning",
        message: i("admin.ops.diagnosis.errorElevated", { rate: at.toFixed(2) }),
        impact: i("admin.ops.diagnosis.errorElevatedImpact"),
        action: i("admin.ops.diagnosis.errorElevatedAction")
      });
      const ke = (C.sla ?? 0) * 100;
      return ke < 90 ? k.push({
        type: "critical",
        message: i("admin.ops.diagnosis.slaCritical", { sla: ke.toFixed(2) }),
        impact: i("admin.ops.diagnosis.slaCriticalImpact"),
        action: i("admin.ops.diagnosis.slaCriticalAction")
      }) : ke < 98 && k.push({
        type: "warning",
        message: i("admin.ops.diagnosis.slaLow", { sla: ke.toFixed(2) }),
        impact: i("admin.ops.diagnosis.slaLowImpact"),
        action: i("admin.ops.diagnosis.slaLowAction")
      }), Wt.value != null && (Wt.value < 60 ? k.push({
        type: "critical",
        message: i("admin.ops.diagnosis.healthCritical", { score: Wt.value }),
        impact: i("admin.ops.diagnosis.healthCriticalImpact"),
        action: i("admin.ops.diagnosis.healthCriticalAction")
      }) : Wt.value < 90 && k.push({
        type: "warning",
        message: i("admin.ops.diagnosis.healthLow", { score: Wt.value }),
        impact: i("admin.ops.diagnosis.healthLowImpact"),
        action: i("admin.ops.diagnosis.healthLowAction")
      })), k.length === 0 && k.push({
        type: "info",
        message: i("admin.ops.diagnosis.healthy"),
        impact: i("admin.ops.diagnosis.healthyImpact")
      }), k;
    });
    function Ms(C) {
      if (!C) return "-";
      const k = new Date(C);
      return Number.isNaN(k.getTime()) ? "-" : k.toLocaleTimeString();
    }
    const Ds = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.cpu_usage_percent;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), Yn = P(() => {
      const C = Ds.value;
      return C == null ? "text-gray-900 dark:text-white" : C >= 95 ? "text-rose-600 dark:text-rose-400" : C >= 80 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), Rs = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.memory_usage_percent;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), Gn = P(() => {
      const C = Rs.value;
      return C == null ? "text-gray-900 dark:text-white" : C >= 95 ? "text-rose-600 dark:text-rose-400" : C >= 85 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }), os = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.db_conn_active;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), ce = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.db_conn_idle;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), rn = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.db_conn_waiting;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), Ts = P(() => os.value == null || ce.value == null ? null : os.value + ce.value), rs = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.db_max_open_conns;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), je = P(() => Ts.value == null || rs.value == null || rs.value <= 0 ? null : Math.min(100, Math.max(0, Ts.value / rs.value * 100))), Xn = P(() => {
      var C, k;
      return ((C = d.value) == null ? void 0 : C.db_ok) === !1 ? "FAIL" : je.value != null ? `${je.value.toFixed(0)}%` : ((k = d.value) == null ? void 0 : k.db_ok) === !0 ? i("admin.ops.ok") : i("admin.ops.noData");
    }), Kn = P(() => {
      var C, k;
      return ((C = d.value) == null ? void 0 : C.db_ok) === !1 ? "text-rose-600 dark:text-rose-400" : je.value != null ? je.value >= 90 ? "text-rose-600 dark:text-rose-400" : je.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((k = d.value) == null ? void 0 : k.db_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), qe = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.redis_conn_total;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), ls = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.redis_conn_idle;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), ln = P(() => qe.value == null || ls.value == null ? null : Math.max(qe.value - ls.value, 0)), ds = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.redis_pool_size;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), Jt = P(() => qe.value == null || ds.value == null || ds.value <= 0 ? null : Math.min(100, Math.max(0, qe.value / ds.value * 100))), dn = P(() => {
      var C, k;
      return ((C = d.value) == null ? void 0 : C.redis_ok) === !1 ? "FAIL" : Jt.value != null ? `${Jt.value.toFixed(0)}%` : ((k = d.value) == null ? void 0 : k.redis_ok) === !0 ? i("admin.ops.ok") : i("admin.ops.noData");
    }), z = P(() => {
      var C, k;
      return ((C = d.value) == null ? void 0 : C.redis_ok) === !1 ? "text-rose-600 dark:text-rose-400" : Jt.value != null ? Jt.value >= 90 ? "text-rose-600 dark:text-rose-400" : Jt.value >= 70 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400" : ((k = d.value) == null ? void 0 : k.redis_ok) === !0 ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-900 dark:text-white";
    }), X = P(() => {
      var k;
      const C = (k = d.value) == null ? void 0 : k.goroutine_count;
      return typeof C == "number" && Number.isFinite(C) ? C : null;
    }), J = P(() => {
      const C = X.value;
      return C == null ? "unknown" : C >= ea ? "critical" : C >= ta ? "warning" : "ok";
    }), ue = P(() => {
      switch (J.value) {
        case "ok":
          return i("admin.ops.ok");
        case "warning":
          return i("common.warning");
        case "critical":
          return i("common.critical");
        default:
          return i("admin.ops.noData");
      }
    }), Pe = P(() => {
      switch (J.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warning":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        case "critical":
          return "text-rose-600 dark:text-rose-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Zt = P(() => {
      var C;
      return ((C = r.value) == null ? void 0 : C.job_heartbeats) ?? [];
    }), Xt = P(() => {
      const C = Zt.value;
      if (!C.length) return "unknown";
      for (const k of C)
        if (k && k.last_error_at && (!k.last_success_at || k.last_error_at > k.last_success_at))
          return "warn";
      return "ok";
    }), Ut = P(() => {
      let C = 0;
      for (const k of Zt.value)
        k && k.last_error_at && (!k.last_success_at || k.last_error_at > k.last_success_at) && C++;
      return C;
    }), Or = P(() => {
      switch (Xt.value) {
        case "ok":
          return i("admin.ops.ok");
        case "warn":
          return i("common.warning");
        default:
          return i("admin.ops.noData");
      }
    }), Ar = P(() => {
      switch (Xt.value) {
        case "ok":
          return "text-zo-signal-600 dark:text-zo-signal-400";
        case "warn":
          return "text-zo-alert-600 dark:text-zo-alert-400";
        default:
          return "text-gray-900 dark:text-white";
      }
    }), Qn = I(!1);
    function Er() {
      Qn.value = !0;
    }
    function Lr() {
      M(), n("refresh");
    }
    return (C, k) => {
      var st, qt, he;
      return v(), $("div", {
        class: Z(["flex flex-col gap-4 rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", e.fullscreen ? "p-8" : "p-6"])
      }, [
        l("div", ul, [
          l("div", null, [
            l("h1", hl, [
              k[12] || (k[12] = l("svg", {
                class: "h-6 w-6 text-blue-500",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                })
              ], -1)),
              Q(" " + h(f(i)("admin.ops.title")), 1)
            ]),
            e.fullscreen ? W("", !0) : (v(), $("div", pl, [
              l("span", {
                class: "flex items-center gap-1.5",
                title: e.loading ? f(i)("admin.ops.loadingText") : f(i)("admin.ops.ready")
              }, [
                l("span", gl, [
                  l("span", {
                    class: Z(["relative inline-flex h-2 w-2 rounded-full", e.loading ? "bg-gray-400" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                Q(" " + h(e.loading ? f(i)("admin.ops.loadingText") : f(i)("admin.ops.ready")), 1)
              ], 8, fl),
              k[14] || (k[14] = l("span", null, "·", -1)),
              l("span", null, h(f(i)("common.refresh")) + ": " + h(e.lastUpdated ? e.lastUpdated.toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/\//g, "-") : f(i)("common.unknown")), 1),
              e.autoRefreshEnabled && e.autoRefreshCountdown !== void 0 ? (v(), $(gt, { key: 0 }, [
                k[13] || (k[13] = l("span", null, "·", -1)),
                l("span", null, h(f(i)("admin.ops.autoRefreshRemaining", { seconds: e.autoRefreshCountdown })), 1)
              ], 64)) : W("", !0)
            ]))
          ]),
          l("div", ml, [
            e.fullscreen ? W("", !0) : (v(), $(gt, { key: 0 }, [
              K(kt, {
                "data-testid": "ops-platform-filter",
                "model-value": s.platform,
                options: y.value,
                class: "w-full sm:w-[140px]",
                "onUpdate:modelValue": F
              }, null, 8, ["model-value", "options"]),
              K(kt, {
                "model-value": s.groupId,
                options: B.value,
                class: "w-full sm:w-[160px]",
                "onUpdate:modelValue": O
              }, null, 8, ["model-value", "options"]),
              k[15] || (k[15] = l("div", { class: "mx-1 hidden h-4 w-[1px] bg-gray-200 dark:bg-dark-700 sm:block" }, null, -1)),
              K(kt, {
                "model-value": s.timeRange,
                options: T.value,
                class: "relative w-full sm:w-[150px]",
                "onUpdate:modelValue": j
              }, null, 8, ["model-value", "options"])
            ], 64)),
            W("", !0),
            e.fullscreen ? W("", !0) : (v(), $("button", {
              key: 2,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
              disabled: s.loading,
              title: f(i)("common.refresh"),
              onClick: Lr
            }, [
              (v(), $("svg", {
                class: Z(["h-4 w-4", { "animate-spin": s.loading }]),
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [...k[16] || (k[16] = [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                }, null, -1)
              ])], 2))
            ], 8, _l)),
            e.fullscreen ? W("", !0) : (v(), $("div", xl)),
            e.fullscreen ? W("", !0) : (v(), $("button", {
              key: 4,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-blue-100 px-3 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",
              title: f(i)("admin.ops.alertRules.title"),
              onClick: k[0] || (k[0] = (at) => n("openAlertRules"))
            }, [
              k[17] || (k[17] = l("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                })
              ], -1)),
              l("span", bl, h(f(i)("admin.ops.alertRules.manage")), 1)
            ], 8, yl)),
            e.fullscreen ? W("", !0) : (v(), $("button", {
              key: 5,
              type: "button",
              class: "flex h-8 items-center gap-1.5 rounded-lg bg-gray-100 px-3 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: f(i)("admin.ops.settings.title"),
              onClick: k[1] || (k[1] = (at) => n("openSettings"))
            }, [
              k[18] || (k[18] = l("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }),
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ], -1)),
              l("span", kl, h(f(i)("common.settings")), 1)
            ], 8, vl)),
            e.fullscreen ? W("", !0) : (v(), $("button", {
              key: 6,
              type: "button",
              class: "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              title: f(i)("admin.ops.fullscreen.enter"),
              onClick: k[2] || (k[2] = (at) => n("enterFullscreen"))
            }, [...k[19] || (k[19] = [
              l("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                })
              ], -1)
            ])], 8, wl))
          ])
        ]),
        r.value ? (v(), $("div", Sl, [
          l("div", {
            class: Z(["rounded-2xl bg-gray-50 dark:bg-dark-900 lg:col-span-5", e.fullscreen ? "p-6" : "p-4"])
          }, [
            l("div", $l, [
              l("div", Cl, [
                l("div", Ml, [
                  l("div", Dl, [
                    l("h4", Rl, [
                      K(ee, {
                        name: "brain",
                        size: "sm",
                        class: "text-blue-500"
                      }),
                      Q(" " + h(f(i)("admin.ops.diagnosis.title")), 1)
                    ]),
                    l("div", Tl, [
                      (v(!0), $(gt, null, vt(Un.value, (at, ke) => (v(), $("div", {
                        key: ke,
                        class: "flex gap-3"
                      }, [
                        l("div", Pl, [
                          at.type === "critical" ? (v(), $("svg", Ol, [...k[20] || (k[20] = [
                            l("path", {
                              "fill-rule": "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : at.type === "warning" ? (v(), $("svg", Al, [...k[21] || (k[21] = [
                            l("path", {
                              "fill-rule": "evenodd",
                              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])])) : (v(), $("svg", El, [...k[22] || (k[22] = [
                            l("path", {
                              "fill-rule": "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 100 2 1 1 0 000-2zm-1 3a1 1 0 012 0v4a1 1 0 11-2 0v-4z",
                              "clip-rule": "evenodd"
                            }, null, -1)
                          ])]))
                        ]),
                        l("div", Ll, [
                          l("div", zl, h(at.message), 1),
                          l("div", Il, h(at.impact), 1),
                          at.action ? (v(), $("div", Fl, [
                            K(ee, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            Q(" " + h(at.action), 1)
                          ])) : W("", !0)
                        ])
                      ]))), 128))
                    ]),
                    l("div", Vl, h(f(i)("admin.ops.diagnosis.footer")), 1)
                  ])
                ]),
                l("div", Bl, [
                  (v(), $("svg", {
                    width: ae.value,
                    height: ae.value,
                    class: "-rotate-90 transform"
                  }, [
                    l("circle", {
                      cx: ae.value / 2,
                      cy: ae.value / 2,
                      r: Cs.value,
                      "stroke-width": $s.value,
                      fill: "transparent",
                      class: "text-gray-200 dark:text-dark-700",
                      stroke: "currentColor"
                    }, null, 8, ql),
                    l("circle", {
                      cx: ae.value / 2,
                      cy: ae.value / 2,
                      r: Cs.value,
                      "stroke-width": $s.value,
                      fill: "transparent",
                      stroke: on.value,
                      "stroke-linecap": "round",
                      "stroke-dasharray": is.value,
                      "stroke-dashoffset": as.value,
                      class: "transition-all duration-1000 ease-out"
                    }, null, 8, Nl)
                  ], 8, jl)),
                  l("div", Hl, [
                    l("span", {
                      class: Z([e.fullscreen ? "text-5xl" : "text-3xl", "font-black", Ss.value])
                    }, h(jt.value ? f(i)("admin.ops.idleStatus") : r.value.health_score ?? "--"), 3),
                    l("span", {
                      class: Z([e.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase tracking-wider text-gray-400"])
                    }, h(f(i)("admin.ops.health")), 3)
                  ])
                ]),
                e.fullscreen ? W("", !0) : (v(), $("div", Wl, [
                  l("div", Ul, [
                    Q(h(f(i)("admin.ops.healthCondition")) + " ", 1),
                    K(Ot, {
                      content: f(i)("admin.ops.healthHelp")
                    }, null, 8, ["content"])
                  ]),
                  l("div", {
                    class: Z(["mt-1 text-xs font-bold", Ss.value])
                  }, h(jt.value ? f(i)("admin.ops.idleStatus") : typeof r.value.health_score == "number" && r.value.health_score >= 90 ? f(i)("admin.ops.healthyStatus") : f(i)("admin.ops.riskyStatus")), 3)
                ]))
              ]),
              l("div", Yl, [
                l("div", Gl, [
                  l("div", Xl, [
                    k[23] || (k[23] = l("div", { class: "relative flex h-3 w-3 shrink-0" }, [
                      l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" }),
                      l("span", { class: "relative inline-flex h-3 w-3 rounded-full bg-blue-500" })
                    ], -1)),
                    l("h3", Kl, h(f(i)("admin.ops.realtime.title")), 1),
                    e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                      key: 0,
                      content: f(i)("admin.ops.tooltips.qps")
                    }, null, 8, ["content"]))
                  ]),
                  l("div", Ql, [
                    (v(!0), $(gt, null, vt(p.value, (at) => (v(), $("button", {
                      key: at,
                      type: "button",
                      class: Z(["rounded px-1.5 py-0.5 text-[9px] font-bold transition-colors sm:px-2 sm:text-[10px]", o.value === at ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600"]),
                      onClick: (ke) => o.value = at
                    }, h(at), 11, Jl))), 128))
                  ])
                ]),
                l("div", {
                  class: Z(e.fullscreen ? "space-y-4" : "space-y-3")
                }, [
                  l("div", null, [
                    l("div", {
                      class: Z([e.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                    }, h(f(i)("admin.ops.current")), 3),
                    l("div", Zl, [
                      l("div", td, [
                        l("span", {
                          class: Z([e.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, h(q.value.toFixed(1)), 3),
                        l("span", {
                          class: Z([e.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, "QPS", 2)
                      ]),
                      l("div", ed, [
                        l("span", {
                          class: Z([e.fullscreen ? "text-4xl" : "text-xl sm:text-2xl", "font-black text-gray-900 dark:text-white"])
                        }, h(rt.value.toFixed(1)), 3),
                        l("span", {
                          class: Z([e.fullscreen ? "text-sm" : "text-xs", "font-bold text-gray-500"])
                        }, h(f(i)("admin.ops.tps")), 3)
                      ])
                    ])
                  ]),
                  l("div", sd, [
                    l("div", null, [
                      l("div", {
                        class: Z([e.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, h(f(i)("admin.ops.peak")), 3),
                      l("div", {
                        class: Z([e.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        l("div", nd, [
                          l("span", id, h(Ct.value), 1),
                          k[24] || (k[24] = l("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        l("div", ad, [
                          l("span", od, h(Pt.value), 1),
                          l("span", rd, h(f(i)("admin.ops.tps")), 1)
                        ])
                      ], 2)
                    ]),
                    l("div", null, [
                      l("div", {
                        class: Z([e.fullscreen ? "text-xs" : "text-[10px]", "font-bold uppercase text-gray-400"])
                      }, h(f(i)("admin.ops.average")), 3),
                      l("div", {
                        class: Z([e.fullscreen ? "text-base" : "text-sm", "mt-1 space-y-0.5 font-medium text-gray-600 dark:text-gray-400"])
                      }, [
                        l("div", ld, [
                          l("span", dd, h(Dt.value), 1),
                          k[25] || (k[25] = l("span", { class: "text-xs" }, "QPS", -1))
                        ]),
                        l("div", cd, [
                          l("span", ud, h(re.value), 1),
                          l("span", hd, h(f(i)("admin.ops.tps")), 1)
                        ])
                      ], 2)
                    ])
                  ]),
                  k[26] || (k[26] = l("div", { class: "h-8 w-full overflow-hidden opacity-50" }, [
                    l("svg", {
                      class: "h-full w-full",
                      viewBox: "0 0 280 32",
                      preserveAspectRatio: "none"
                    }, [
                      l("path", {
                        d: "M0 16 Q 20 16, 40 16 T 80 16 T 120 10 T 160 22 T 200 16 T 240 16 T 280 16",
                        fill: "none",
                        stroke: "#3b82f6",
                        "stroke-width": "2",
                        "vector-effect": "non-scaling-stroke"
                      }, [
                        l("animate", {
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
          l("div", pd, [
            l("div", fd, [
              l("div", gd, [
                l("div", md, [
                  l("span", _d, h(f(i)("admin.ops.requestsTitle")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.totalRequests")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: k[3] || (k[3] = (at) => w({ title: f(i)("admin.ops.requestDetails.title") }))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", xd, [
                l("div", yd, [
                  l("span", bd, h(f(i)("admin.ops.requests")) + ":", 1),
                  l("span", vd, h(nt.value), 1)
                ]),
                l("div", kd, [
                  l("span", wd, h(f(i)("admin.ops.tokens")) + ":", 1),
                  l("span", Sd, h(ct.value), 1)
                ]),
                l("div", $d, [
                  l("span", Cd, h(f(i)("admin.ops.avgQps")) + ":", 1),
                  l("span", Md, h(tt.value), 1)
                ]),
                l("div", Dd, [
                  l("span", Rd, h(f(i)("admin.ops.avgTps")) + ":", 1),
                  l("span", Td, h(U.value), 1)
                ])
              ])
            ]),
            l("div", Pd, [
              l("div", Od, [
                l("div", Ad, [
                  l("span", Ed, h(f(i)("admin.ops.sla")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.sla")
                  }, null, 8, ["content"])),
                  l("span", {
                    class: Z(["h-1.5 w-1.5 rounded-full", L(H.value) === "critical" ? "bg-red-500" : L(H.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: k[4] || (k[4] = (at) => w({ title: f(i)("admin.ops.requestDetails.title"), kind: "error" }))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", {
                class: Z(["mt-2 text-3xl font-black", Y(L(H.value))])
              }, h(H.value == null ? "-" : `${H.value.toFixed(3)}%`), 3),
              l("div", Ld, [
                l("div", {
                  class: Z(["h-full transition-all", L(H.value) === "critical" ? "bg-red-500" : L(H.value) === "warning" ? "bg-zo-alert-500" : "bg-zo-signal-500"]),
                  style: gs({ width: `${Math.max((H.value ?? 0) - 90, 0) * 10}%` })
                }, null, 6)
              ]),
              l("div", zd, [
                l("div", Id, [
                  l("span", Fd, h(f(i)("admin.ops.exceptions")) + ":", 1),
                  l("span", Vd, h(f(me)((r.value.request_count_sla ?? 0) - (r.value.success_count ?? 0))), 1)
                ])
              ])
            ]),
            l("div", Bd, [
              l("div", jd, [
                l("div", qd, [
                  l("span", Nd, h(f(i)("admin.ops.latencyDuration")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.latency")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: k[5] || (k[5] = (at) => w({ title: f(i)("admin.ops.latencyDuration"), sort: "duration_desc" }))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", Hd, [
                l("div", Wd, h(Lt.value ?? "-"), 1),
                k[27] || (k[27] = l("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              l("div", Ud, [
                l("div", Yd, [
                  k[28] || (k[28] = l("span", { class: "text-gray-500" }, "P95:", -1)),
                  l("span", Gd, h(zt.value ?? "-"), 1),
                  k[29] || (k[29] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", Xd, [
                  k[30] || (k[30] = l("span", { class: "text-gray-500" }, "P90:", -1)),
                  l("span", Kd, h(Ht.value ?? "-"), 1),
                  k[31] || (k[31] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", Qd, [
                  k[32] || (k[32] = l("span", { class: "text-gray-500" }, "P50:", -1)),
                  l("span", Jd, h(be.value ?? "-"), 1),
                  k[33] || (k[33] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", Zd, [
                  k[34] || (k[34] = l("span", { class: "text-gray-500" }, "Avg:", -1)),
                  l("span", tc, h(ve.value ?? "-"), 1),
                  k[35] || (k[35] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", ec, [
                  k[36] || (k[36] = l("span", { class: "text-gray-500" }, "Max:", -1)),
                  l("span", sc, h(Te.value ?? "-"), 1),
                  k[37] || (k[37] = l("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            l("div", nc, [
              l("div", ic, [
                l("div", ac, [
                  k[38] || (k[38] = l("span", { class: "text-[10px] font-bold uppercase text-gray-400" }, "TTFT", -1)),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.ttft")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-blue-500 hover:underline",
                  type: "button",
                  onClick: k[6] || (k[6] = (at) => w({ title: f(i)("admin.ops.ttftLabel"), sort: "duration_desc" }))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", oc, [
                l("div", {
                  class: Z(["text-3xl font-black", Y(A(le.value))])
                }, h(le.value ?? "-"), 3),
                k[39] || (k[39] = l("span", { class: "text-xs font-bold text-gray-400" }, "ms (P99)", -1))
              ]),
              l("div", rc, [
                l("div", lc, [
                  k[40] || (k[40] = l("span", { class: "text-gray-500" }, "P95:", -1)),
                  l("span", {
                    class: Z(["font-bold", Y(A(ie.value))])
                  }, h(ie.value ?? "-"), 3),
                  k[41] || (k[41] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", dc, [
                  k[42] || (k[42] = l("span", { class: "text-gray-500" }, "P90:", -1)),
                  l("span", {
                    class: Z(["font-bold", Y(A(ss.value))])
                  }, h(ss.value ?? "-"), 3),
                  k[43] || (k[43] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", cc, [
                  k[44] || (k[44] = l("span", { class: "text-gray-500" }, "P50:", -1)),
                  l("span", {
                    class: Z(["font-bold", Y(A(ns.value))])
                  }, h(ns.value ?? "-"), 3),
                  k[45] || (k[45] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", uc, [
                  k[46] || (k[46] = l("span", { class: "text-gray-500" }, "Avg:", -1)),
                  l("span", {
                    class: Z(["font-bold", Y(A(de.value))])
                  }, h(de.value ?? "-"), 3),
                  k[47] || (k[47] = l("span", { class: "text-gray-400" }, "ms", -1))
                ]),
                l("div", hc, [
                  k[48] || (k[48] = l("span", { class: "text-gray-500" }, "Max:", -1)),
                  l("span", {
                    class: Z(["font-bold", Y(A(Be.value))])
                  }, h(Be.value ?? "-"), 3),
                  k[49] || (k[49] = l("span", { class: "text-gray-400" }, "ms", -1))
                ])
              ])
            ]),
            l("div", pc, [
              l("div", fc, [
                l("div", gc, [
                  l("span", mc, h(f(i)("admin.ops.requestErrors")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.errors")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: k[7] || (k[7] = (at) => V("request"))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", {
                class: Z(["mt-2 text-3xl font-black", Y(E(it.value))])
              }, h(it.value == null ? "-" : `${it.value.toFixed(2)}%`), 3),
              l("div", _c, [
                l("div", xc, [
                  l("span", yc, h(f(i)("admin.ops.errorCount")) + ":", 1),
                  l("span", bc, h(f(me)(r.value.error_count_sla ?? 0)), 1)
                ]),
                l("div", vc, [
                  l("span", kc, h(f(i)("admin.ops.businessLimited")) + ":", 1),
                  l("span", wc, h(f(me)(r.value.business_limited_count ?? 0)), 1)
                ])
              ])
            ]),
            l("div", Sc, [
              l("div", $c, [
                l("div", Cc, [
                  l("span", Mc, h(f(i)("admin.ops.upstreamErrors")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.upstreamErrors")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: k[8] || (k[8] = (at) => V("upstream"))
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", {
                class: Z(["mt-2 text-3xl font-black", Y(N(dt.value))])
              }, h(dt.value == null ? "-" : `${dt.value.toFixed(2)}%`), 3),
              l("div", Dc, [
                l("div", Rc, [
                  l("span", Tc, h(f(i)("admin.ops.errorCountExcl429529")) + ":", 1),
                  l("span", Pc, h(f(me)(r.value.upstream_error_count_excl_429_529 ?? 0)), 1)
                ]),
                l("div", Oc, [
                  k[50] || (k[50] = l("span", { class: "text-gray-500" }, "429/529:", -1)),
                  l("span", Ac, h(f(me)((r.value.upstream_429_count ?? 0) + (r.value.upstream_529_count ?? 0))), 1)
                ])
              ])
            ])
          ])
        ])) : W("", !0),
        r.value ? (v(), $("div", Ec, [
          l("div", Lc, [
            l("div", zc, [
              l("div", Ic, [
                k[51] || (k[51] = l("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "CPU", -1)),
                e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                  key: 0,
                  content: f(i)("admin.ops.tooltips.cpu")
                }, null, 8, ["content"]))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", Yn.value])
              }, h(Ds.value == null ? "-" : `${Ds.value.toFixed(1)}%`), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", Fc, h(f(i)("common.warning")) + " 80% · " + h(f(i)("common.critical")) + " 95% ", 1))
            ]),
            l("div", Vc, [
              l("div", Bc, [
                l("div", jc, h(f(i)("admin.ops.memory")), 1),
                e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                  key: 0,
                  content: f(i)("admin.ops.tooltips.memory")
                }, null, 8, ["content"]))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", Gn.value])
              }, h(Rs.value == null ? "-" : `${Rs.value.toFixed(1)}%`), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", qc, h(((st = d.value) == null ? void 0 : st.memory_used_mb) == null || ((qt = d.value) == null ? void 0 : qt.memory_total_mb) == null ? "-" : `${f(Zi)(d.value.memory_used_mb)} / ${f(Zi)(d.value.memory_total_mb)}`), 1))
            ]),
            l("div", Nc, [
              l("div", Hc, [
                l("div", Wc, h(f(i)("admin.ops.db")), 1),
                e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                  key: 0,
                  content: f(i)("admin.ops.tooltips.db")
                }, null, 8, ["content"]))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", Kn.value])
              }, h(Xn.value), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", Uc, [
                Q(h(f(i)("admin.ops.conns")) + " " + h(Ts.value ?? "-") + " / " + h(rs.value ?? "-") + " · " + h(f(i)("admin.ops.active")) + " " + h(os.value ?? "-") + " · " + h(f(i)("admin.ops.idle")) + " " + h(ce.value ?? "-") + " ", 1),
                rn.value != null ? (v(), $("span", Yc, " · " + h(f(i)("admin.ops.waiting")) + " " + h(rn.value), 1)) : W("", !0)
              ]))
            ]),
            l("div", Gc, [
              l("div", Xc, [
                k[52] || (k[52] = l("div", { class: "text-[10px] font-bold uppercase tracking-wider text-gray-400" }, "Redis", -1)),
                e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                  key: 0,
                  content: f(i)("admin.ops.tooltips.redis")
                }, null, 8, ["content"]))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", z.value])
              }, h(dn.value), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", Kc, [
                Q(h(f(i)("admin.ops.conns")) + " " + h(qe.value ?? "-") + " / " + h(ds.value ?? "-") + " ", 1),
                ln.value != null ? (v(), $("span", Qc, " · " + h(f(i)("admin.ops.active")) + " " + h(ln.value), 1)) : W("", !0),
                ls.value != null ? (v(), $("span", Jc, " · " + h(f(i)("admin.ops.idle")) + " " + h(ls.value), 1)) : W("", !0)
              ]))
            ]),
            l("div", Zc, [
              l("div", tu, [
                l("div", eu, h(f(i)("admin.ops.goroutines")), 1),
                e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                  key: 0,
                  content: f(i)("admin.ops.tooltips.goroutines")
                }, null, 8, ["content"]))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", Pe.value])
              }, h(ue.value), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", su, [
                Q(h(f(i)("admin.ops.current")) + " ", 1),
                l("span", nu, h(X.value ?? "-"), 1),
                Q(" · " + h(f(i)("common.warning")) + " ", 1),
                l("span", { class: "font-mono" }, h(ta)),
                Q(" · " + h(f(i)("common.critical")) + " ", 1),
                l("span", { class: "font-mono" }, h(ea)),
                ((he = d.value) == null ? void 0 : he.concurrency_queue_depth) != null ? (v(), $("span", iu, [
                  Q(" · " + h(f(i)("admin.ops.queue")) + " ", 1),
                  l("span", au, h(d.value.concurrency_queue_depth), 1)
                ])) : W("", !0)
              ]))
            ]),
            l("div", ou, [
              l("div", ru, [
                l("div", lu, [
                  l("div", du, h(f(i)("admin.ops.jobs")), 1),
                  e.fullscreen ? W("", !0) : (v(), ft(Ot, {
                    key: 0,
                    content: f(i)("admin.ops.tooltips.jobs")
                  }, null, 8, ["content"]))
                ]),
                e.fullscreen ? W("", !0) : (v(), $("button", {
                  key: 0,
                  class: "text-[10px] font-bold text-gray-600 hover:underline dark:text-dark-300",
                  type: "button",
                  onClick: Er
                }, h(f(i)("admin.ops.requestDetails.details")), 1))
              ]),
              l("div", {
                class: Z(["mt-1 text-lg font-black", Ar.value])
              }, h(Or.value), 3),
              e.fullscreen ? W("", !0) : (v(), $("div", cu, [
                Q(h(f(i)("common.total")) + " ", 1),
                l("span", uu, h(Zt.value.length), 1),
                Q(" · " + h(f(i)("common.warning")) + " ", 1),
                l("span", hu, h(Ut.value), 1)
              ]))
            ])
          ])
        ])) : W("", !0),
        K(Re, {
          show: Qn.value,
          title: f(i)("admin.ops.jobs"),
          width: "wide",
          onClose: k[9] || (k[9] = (at) => Qn.value = !1)
        }, {
          default: wt(() => [
            Zt.value.length ? (v(), $("div", fu, [
              (v(!0), $(gt, null, vt(Zt.value, (at) => (v(), $("div", {
                key: at.job_name,
                class: "rounded-xl border border-gray-100 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
              }, [
                l("div", gu, [
                  l("div", mu, h(at.job_name), 1),
                  l("div", _u, [
                    at.last_duration_ms != null ? (v(), $("span", xu, h(at.last_duration_ms) + "ms", 1)) : W("", !0),
                    l("span", null, h(Ms(at.updated_at)), 1)
                  ])
                ]),
                l("div", yu, [
                  l("div", null, [
                    Q(h(f(i)("admin.ops.lastSuccess")) + " ", 1),
                    l("span", bu, h(Ms(at.last_success_at)), 1)
                  ]),
                  l("div", null, [
                    Q(h(f(i)("admin.ops.lastError")) + " ", 1),
                    l("span", vu, h(Ms(at.last_error_at)), 1)
                  ]),
                  l("div", null, [
                    Q(h(f(i)("admin.ops.result")) + " ", 1),
                    l("span", ku, h(at.last_result || "-"), 1)
                  ])
                ]),
                at.last_error ? (v(), $("div", wu, h(at.last_error), 1)) : W("", !0)
              ]))), 128))
            ])) : (v(), $("div", pu, h(f(i)("admin.ops.noData")), 1))
          ]),
          _: 1
        }, 8, ["show", "title"]),
        K(Re, {
          show: m.value,
          title: f(i)("admin.ops.timeRange.custom"),
          width: "narrow",
          onClose: S
        }, {
          default: wt(() => [
            l("div", Su, [
              l("div", null, [
                l("label", $u, h(f(i)("admin.ops.customTimeRange.startTime")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": k[10] || (k[10] = (at) => _.value = at),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [pt, _.value]
                ])
              ]),
              l("div", null, [
                l("label", Cu, h(f(i)("admin.ops.customTimeRange.endTime")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": k[11] || (k[11] = (at) => g.value = at),
                  type: "datetime-local",
                  class: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-600 dark:bg-dark-800 dark:text-white"
                }, null, 512), [
                  [pt, g.value]
                ])
              ]),
              l("div", Mu, [
                l("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: S
                }, h(f(i)("common.cancel")), 1),
                l("button", {
                  type: "button",
                  class: "rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600",
                  onClick: D
                }, h(f(i)("common.confirm")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ], 2);
    };
  }
}), Ru = { class: "space-y-6" }, Tu = { class: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-dark-700" }, Pu = {
  key: 0,
  class: "flex flex-wrap items-center gap-3"
}, Ou = { class: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12" }, Au = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30 lg:col-span-5" }, Eu = { class: "grid h-full grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center" }, Lu = { class: "space-y-4" }, zu = { class: "grid grid-cols-2 gap-3" }, Iu = { class: "lg:col-span-7" }, Fu = { class: "grid h-full grid-cols-1 content-center gap-4 sm:grid-cols-2 lg:grid-cols-3" }, Vu = { class: "grid grid-cols-1 gap-6 lg:grid-cols-4" }, Bu = { class: "grid grid-cols-1 gap-6 md:grid-cols-3" }, ju = { class: "flex flex-wrap items-center justify-between gap-4" }, qu = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, Nu = { class: "mt-6 space-y-3" }, Hu = /* @__PURE__ */ Mt({
  __name: "OpsDashboardSkeleton",
  props: {
    fullscreen: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s;
    return (e, n) => (v(), $("div", Ru, [
      l("div", {
        class: Z(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", t.fullscreen ? "p-8" : "p-6"])
      }, [
        l("div", Tu, [
          n[1] || (n[1] = l("div", { class: "space-y-2" }, [
            l("div", { class: "h-6 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
            l("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
          ], -1)),
          t.fullscreen ? W("", !0) : (v(), $("div", Pu, [...n[0] || (n[0] = [
            Hr('<div class="h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[160px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-[150px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-28 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="h-9 w-9 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700"></div>', 7)
          ])]))
        ]),
        l("div", Ou, [
          l("div", Au, [
            l("div", Eu, [
              n[3] || (n[3] = l("div", { class: "h-28 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)),
              l("div", Lu, [
                n[2] || (n[2] = l("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
                l("div", zu, [
                  (v(), $(gt, null, vt(4, (i) => l("div", {
                    key: i,
                    class: "h-14 animate-pulse rounded-xl bg-gray-100 dark:bg-dark-700/70"
                  })), 64))
                ])
              ])
            ])
          ]),
          l("div", Iu, [
            l("div", Fu, [
              (v(), $(gt, null, vt(6, (i) => l("div", {
                key: i,
                class: "h-20 animate-pulse rounded-2xl bg-gray-50 dark:bg-dark-900/30"
              })), 64))
            ])
          ])
        ])
      ], 2),
      l("div", Vu, [
        l("div", {
          class: Z(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", t.fullscreen ? "p-8" : "p-6"])
        }, [...n[4] || (n[4] = [
          l("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          l("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        l("div", {
          class: Z(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-1", t.fullscreen ? "p-8" : "p-6"])
        }, [...n[5] || (n[5] = [
          l("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          l("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2),
        l("div", {
          class: Z(["min-h-[360px] rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700 lg:col-span-2", t.fullscreen ? "p-8" : "p-6"])
        }, [...n[6] || (n[6] = [
          l("div", { class: "h-4 w-56 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          l("div", { class: "mt-6 h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)
      ]),
      l("div", Bu, [
        (v(), $(gt, null, vt(3, (i) => l("div", {
          key: i,
          class: Z(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", t.fullscreen ? "p-8" : "p-6"])
        }, [...n[7] || (n[7] = [
          l("div", { class: "h-4 w-44 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
          l("div", { class: "mt-6 h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-dark-700/70" }, null, -1)
        ])], 2)), 64))
      ]),
      l("div", {
        class: Z(["rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700", t.fullscreen ? "p-8" : "p-6"])
      }, [
        l("div", ju, [
          n[9] || (n[9] = l("div", { class: "h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)),
          t.fullscreen ? W("", !0) : (v(), $("div", qu, [...n[8] || (n[8] = [
            l("div", { class: "h-9 w-[140px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            l("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1),
            l("div", { class: "h-9 w-[120px] animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))
        ]),
        l("div", Nu, [
          (v(), $(gt, null, vt(6, (i) => l("div", {
            key: i,
            class: "flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-dark-900/30"
          }, [...n[10] || (n[10] = [
            l("div", { class: "flex-1 space-y-2" }, [
              l("div", { class: "h-3 w-56 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }),
              l("div", { class: "h-3 w-80 max-w-full animate-pulse rounded bg-gray-100 dark:bg-dark-700/70" })
            ], -1),
            l("div", { class: "h-7 w-20 animate-pulse rounded-xl bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])), 64))
        ])
      ], 2)
    ]));
  }
}), Wu = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Uu = { class: "mb-4 flex shrink-0 items-center justify-between gap-3" }, Yu = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Gu = { class: "flex items-center gap-2" }, Xu = ["title"], Ku = ["disabled", "title"], Qu = {
  key: 0,
  class: "mb-3 shrink-0 rounded-xl bg-red-50 p-2.5 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, Ju = {
  key: 1,
  class: "flex flex-1 items-center justify-center rounded-xl border border-dashed border-gray-200 text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Zu = {
  key: 2,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, th = { class: "flex shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-dark-700 dark:bg-dark-900" }, eh = { class: "text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, sh = { class: "text-[10px] text-gray-500 dark:text-gray-400" }, nh = {
  key: 0,
  class: "flex flex-1 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, ih = {
  key: 1,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, ah = { class: "mb-1.5 flex items-center justify-between gap-2" }, oh = { class: "flex min-w-0 flex-1 items-center gap-1.5" }, rh = ["title"], lh = ["title"], dh = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, ch = { class: "font-mono font-bold text-gray-900 dark:text-white" }, uh = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, hh = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, ph = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, fh = {
  key: 2,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, gh = { class: "mb-2 flex items-center justify-between gap-2" }, mh = { class: "flex items-center gap-2" }, _h = ["title"], xh = {
  key: 0,
  class: "text-[10px] text-gray-400 dark:text-gray-500"
}, yh = { class: "flex shrink-0 items-center gap-2 text-[10px]" }, bh = { class: "font-mono font-bold text-gray-900 dark:text-white" }, vh = { class: "mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, kh = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]" }, wh = { class: "flex items-center gap-1" }, Sh = { class: "text-gray-600 dark:text-gray-300" }, $h = { class: "font-bold text-zo-signal-600 dark:text-zo-signal-400" }, Ch = { class: "text-gray-400 dark:text-gray-500" }, Mh = {
  key: 0,
  class: "rounded-full bg-zo-alert-100 px-1.5 py-0.5 font-semibold text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, Dh = {
  key: 1,
  class: "rounded-full bg-red-100 px-1.5 py-0.5 font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, Rh = {
  key: 2,
  class: "rounded-full bg-purple-100 px-1.5 py-0.5 font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
}, Th = {
  key: 3,
  class: "custom-scrollbar max-h-[360px] flex-1 space-y-2 overflow-y-auto p-3"
}, Ph = { class: "mb-1.5 flex items-center justify-between gap-2" }, Oh = { class: "min-w-0 flex-1" }, Ah = ["title"], Eh = { class: "mt-0.5 text-[9px] text-gray-400 dark:text-gray-500" }, Lh = { class: "flex shrink-0 items-center gap-2" }, zh = { class: "font-mono text-[11px] font-bold text-gray-900 dark:text-white" }, Ih = {
  key: 0,
  class: "inline-flex items-center gap-1 rounded bg-zo-signal-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400"
}, Fh = {
  key: 1,
  class: "inline-flex items-center gap-1 rounded bg-zo-alert-100 px-1.5 py-0.5 text-[10px] font-medium text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400"
}, Vh = {
  key: 2,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, Bh = {
  key: 3,
  class: "inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, jh = {
  key: 4,
  class: "inline-flex items-center gap-1 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-400"
}, qh = { class: "h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700" }, Nh = {
  key: 0,
  class: "mt-1.5 flex justify-end"
}, Hh = { class: "rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }, Wh = /* @__PURE__ */ Mt({
  __name: "OpsConcurrencyCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(s) {
    const t = s, { t: e } = Et(), n = I(!1), i = I(""), a = I(null), o = I(null), r = I(null), d = I(!1), c = P(() => {
      var D, S;
      return (((D = a.value) == null ? void 0 : D.enabled) ?? !0) && (((S = o.value) == null ? void 0 : S.enabled) ?? !0);
    });
    function u(D) {
      return typeof D == "number" && Number.isFinite(D) ? D : 0;
    }
    const p = P(() => d.value ? "user" : typeof t.groupIdFilter == "number" && t.groupIdFilter > 0 ? "account" : t.platformFilter ? "group" : "platform"), m = P(() => {
      var V, L;
      const D = ((V = a.value) == null ? void 0 : V.platform) || {}, S = ((L = o.value) == null ? void 0 : L.platform) || {}, w = /* @__PURE__ */ new Set([...Object.keys(D), ...Object.keys(S)]);
      return Array.from(w).map((A) => {
        const E = D[A] || {}, N = S[A] || {}, Y = u(N.total_accounts), nt = u(N.available_count), ct = u(E.max_capacity), ht = u(E.current_in_use);
        return {
          key: A,
          name: A.toUpperCase(),
          total_accounts: Y,
          available_accounts: nt,
          rate_limited_accounts: u(N.rate_limit_count),
          error_accounts: u(N.error_count),
          total_concurrency: ct,
          used_concurrency: ht,
          waiting_in_queue: u(E.waiting_in_queue),
          availability_percentage: Y > 0 ? Math.round(nt / Y * 100) : 0,
          concurrency_percentage: ct > 0 ? Math.round(ht / ct * 100) : 0
        };
      }).sort((A, E) => E.concurrency_percentage - A.concurrency_percentage);
    }), _ = P(() => {
      var L, A;
      const D = ((L = a.value) == null ? void 0 : L.group) || {}, S = ((A = o.value) == null ? void 0 : A.group) || {}, w = /* @__PURE__ */ new Set([...Object.keys(D), ...Object.keys(S)]);
      return Array.from(w).map((E) => {
        const N = D[E] || {}, Y = S[E] || {};
        if (t.platformFilter && N.platform !== t.platformFilter && Y.platform !== t.platformFilter)
          return null;
        const nt = u(Y.total_accounts), ct = u(Y.available_count), ht = u(N.max_capacity), G = u(N.current_in_use);
        return {
          key: E,
          name: String(N.group_name || Y.group_name || `Group ${E}`),
          platform: String(N.platform || Y.platform || ""),
          total_accounts: nt,
          available_accounts: ct,
          rate_limited_accounts: u(Y.rate_limit_count),
          error_accounts: u(Y.error_count),
          total_concurrency: ht,
          used_concurrency: G,
          waiting_in_queue: u(N.waiting_in_queue),
          availability_percentage: nt > 0 ? Math.round(ct / nt * 100) : 0,
          concurrency_percentage: ht > 0 ? Math.round(G / ht * 100) : 0
        };
      }).filter((E) => E !== null).sort((E, N) => N.concurrency_percentage - E.concurrency_percentage);
    }), g = P(() => {
      var L, A;
      const D = ((L = a.value) == null ? void 0 : L.account) || {}, S = ((A = o.value) == null ? void 0 : A.account) || {}, w = /* @__PURE__ */ new Set([...Object.keys(D), ...Object.keys(S)]);
      return Array.from(w).map((E) => {
        const N = D[E] || {}, Y = S[E] || {};
        return typeof t.groupIdFilter == "number" && t.groupIdFilter > 0 && N.group_id !== t.groupIdFilter && Y.group_id !== t.groupIdFilter ? null : {
          key: E,
          name: String(N.account_name || Y.account_name || `Account ${E}`),
          platform: String(N.platform || Y.platform || ""),
          group_name: String(N.group_name || Y.group_name || ""),
          current_in_use: u(N.current_in_use),
          max_capacity: u(N.max_capacity),
          waiting_in_queue: u(N.waiting_in_queue),
          load_percentage: u(N.load_percentage),
          is_available: Y.is_available || !1,
          is_rate_limited: Y.is_rate_limited || !1,
          rate_limit_remaining_sec: Y.rate_limit_remaining_sec,
          is_overloaded: Y.is_overloaded || !1,
          overload_remaining_sec: Y.overload_remaining_sec,
          has_error: Y.has_error || !1,
          error_message: Y.error_message || ""
        };
      }).filter((E) => E !== null).sort((E, N) => E.has_error !== N.has_error ? E.has_error ? -1 : 1 : E.is_rate_limited !== N.is_rate_limited ? E.is_rate_limited ? -1 : 1 : N.load_percentage - E.load_percentage);
    }), x = P(() => {
      var S;
      const D = ((S = r.value) == null ? void 0 : S.user) || {};
      return Object.keys(D).map((w) => {
        const V = D[w] || {};
        return {
          key: w,
          user_id: u(V.user_id),
          user_email: V.user_email || `User ${w}`,
          username: V.username || "",
          current_in_use: u(V.current_in_use),
          max_capacity: u(V.max_capacity),
          waiting_in_queue: u(V.waiting_in_queue),
          load_percentage: u(V.load_percentage)
        };
      }).sort((w, V) => V.current_in_use - w.current_in_use || V.load_percentage - w.load_percentage);
    }), b = P(() => p.value === "user" ? x.value : p.value === "account" ? g.value : p.value === "group" ? _.value : m.value), y = P(() => p.value === "user" ? e("admin.ops.concurrency.byUser") : p.value === "account" ? e("admin.ops.concurrency.byAccount") : p.value === "group" ? e("admin.ops.concurrency.byGroup") : e("admin.ops.concurrency.byPlatform"));
    async function T() {
      var D, S;
      n.value = !0, i.value = "";
      try {
        if (d.value) {
          const w = await ot.getUserConcurrencyStats();
          r.value = w;
        } else {
          const [w, V] = await Promise.all([
            ot.getConcurrencyStats(t.platformFilter, t.groupIdFilter),
            ot.getAccountAvailabilityStats(t.platformFilter, t.groupIdFilter)
          ]);
          a.value = w, o.value = V;
        }
      } catch (w) {
        console.error("[OpsConcurrencyCard] Failed to load data", w), i.value = ((S = (D = w == null ? void 0 : w.response) == null ? void 0 : D.data) == null ? void 0 : S.detail) || e("admin.ops.concurrency.loadFailed");
      } finally {
        n.value = !1;
      }
    }
    _t(
      () => t.refreshToken,
      () => {
        c.value && T();
      }
    ), _t(
      () => d.value,
      () => {
        T();
      }
    );
    function B(D) {
      return D >= 90 ? "bg-red-500 dark:bg-red-600" : D >= 70 || D >= 50 ? "bg-zo-alert-500 dark:bg-zo-alert-600" : "bg-zo-signal-500 dark:bg-zo-signal-600";
    }
    function F(D) {
      return `width: ${Math.min(100, Math.max(0, D))}%`;
    }
    function O(D) {
      return D >= 90 ? "text-red-600 dark:text-red-400" : D >= 70 || D >= 50 ? "text-zo-alert-600 dark:text-zo-alert-400" : "text-zo-signal-600 dark:text-zo-signal-400";
    }
    function j(D) {
      if (D <= 0) return "0s";
      if (D < 60) return `${Math.round(D)}s`;
      const S = Math.floor(D / 60);
      return S < 60 ? `${S}m` : `${Math.floor(S / 60)}h`;
    }
    return _t(
      () => c.value,
      async (D) => {
        D && await T();
      },
      { immediate: !0 }
    ), (D, S) => (v(), $("div", Wu, [
      l("div", Uu, [
        l("h3", Yu, [
          S[1] || (S[1] = l("svg", {
            class: "h-4 w-4 text-blue-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            l("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M13 10V3L4 14h7v7l9-11h-7z"
            })
          ], -1)),
          Q(" " + h(f(e)("admin.ops.concurrency.title")), 1)
        ]),
        l("div", Gu, [
          l("button", {
            class: Z(["flex items-center justify-center rounded-lg px-2 py-1 transition-colors", d.value ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-300"]),
            title: d.value ? f(e)("admin.ops.concurrency.switchToPlatform") : f(e)("admin.ops.concurrency.switchToUser"),
            onClick: S[0] || (S[0] = (w) => d.value = !d.value)
          }, [...S[2] || (S[2] = [
            l("svg", {
              class: "h-3.5 w-3.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ], -1)
          ])], 10, Xu),
          l("button", {
            class: "flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-[11px] font-semibold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: n.value,
            title: f(e)("common.refresh"),
            onClick: T
          }, [
            (v(), $("svg", {
              class: Z(["h-3 w-3", { "animate-spin": n.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...S[3] || (S[3] = [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2))
          ], 8, Ku)
        ])
      ]),
      i.value ? (v(), $("div", Qu, h(i.value), 1)) : W("", !0),
      c.value ? (v(), $("div", Zu, [
        l("div", th, [
          l("span", eh, h(y.value), 1),
          l("span", sh, h(f(e)("admin.ops.concurrency.totalRows", { count: b.value.length })), 1)
        ]),
        b.value.length === 0 ? (v(), $("div", nh, h(f(e)("admin.ops.concurrency.empty")), 1)) : p.value === "user" ? (v(), $("div", ih, [
          (v(!0), $(gt, null, vt(b.value, (w) => (v(), $("div", {
            key: w.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            l("div", ah, [
              l("div", oh, [
                l("span", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: w.username || w.user_email
                }, h(w.username || w.user_email), 9, rh),
                w.username ? (v(), $("span", {
                  key: 0,
                  class: "shrink-0 truncate text-[10px] text-gray-400 dark:text-gray-500",
                  title: w.user_email
                }, h(w.user_email), 9, lh)) : W("", !0)
              ]),
              l("div", dh, [
                l("span", ch, h(w.current_in_use) + "/" + h(w.max_capacity), 1),
                l("span", {
                  class: Z(["font-bold", O(w.load_percentage)])
                }, h(Math.round(w.load_percentage)) + "% ", 3)
              ])
            ]),
            l("div", uh, [
              l("div", {
                class: Z(["h-full rounded-full transition-all duration-300", B(w.load_percentage)]),
                style: gs(F(w.load_percentage))
              }, null, 6)
            ]),
            w.waiting_in_queue > 0 ? (v(), $("div", hh, [
              l("span", ph, h(f(e)("admin.ops.concurrency.queued", { count: w.waiting_in_queue })), 1)
            ])) : W("", !0)
          ]))), 128))
        ])) : p.value === "platform" || p.value === "group" ? (v(), $("div", fh, [
          (v(!0), $(gt, null, vt(b.value, (w) => (v(), $("div", {
            key: w.key,
            class: "rounded-lg bg-gray-50 p-3 dark:bg-dark-900"
          }, [
            l("div", gh, [
              l("div", mh, [
                l("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: w.name
                }, h(w.name), 9, _h),
                p.value === "group" && w.platform ? (v(), $("span", xh, h(w.platform.toUpperCase()), 1)) : W("", !0)
              ]),
              l("div", yh, [
                l("span", bh, h(w.used_concurrency) + "/" + h(w.total_concurrency), 1),
                l("span", {
                  class: Z(["font-bold", O(w.concurrency_percentage)])
                }, h(w.concurrency_percentage) + "% ", 3)
              ])
            ]),
            l("div", vh, [
              l("div", {
                class: Z(["h-full rounded-full transition-all duration-300", B(w.concurrency_percentage)]),
                style: gs(F(w.concurrency_percentage))
              }, null, 6)
            ]),
            l("div", kh, [
              l("div", wh, [
                S[4] || (S[4] = l("svg", {
                  class: "h-3 w-3 text-gray-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  l("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  })
                ], -1)),
                l("span", Sh, [
                  l("span", $h, h(w.available_accounts), 1),
                  Q("/" + h(w.total_accounts), 1)
                ]),
                l("span", Ch, h(w.availability_percentage) + "%", 1)
              ]),
              w.rate_limited_accounts > 0 ? (v(), $("span", Mh, h(f(e)("admin.ops.concurrency.rateLimited", { count: w.rate_limited_accounts })), 1)) : W("", !0),
              w.error_accounts > 0 ? (v(), $("span", Dh, h(f(e)("admin.ops.concurrency.errorAccounts", { count: w.error_accounts })), 1)) : W("", !0),
              w.waiting_in_queue > 0 ? (v(), $("span", Rh, h(f(e)("admin.ops.concurrency.queued", { count: w.waiting_in_queue })), 1)) : W("", !0)
            ])
          ]))), 128))
        ])) : (v(), $("div", Th, [
          (v(!0), $(gt, null, vt(b.value, (w) => (v(), $("div", {
            key: w.key,
            class: "rounded-lg bg-gray-50 p-2.5 dark:bg-dark-900"
          }, [
            l("div", Ph, [
              l("div", Oh, [
                l("div", {
                  class: "truncate text-[11px] font-bold text-gray-900 dark:text-white",
                  title: w.name
                }, h(w.name), 9, Ah),
                l("div", Eh, h(w.group_name), 1)
              ]),
              l("div", Lh, [
                l("span", zh, h(w.current_in_use) + "/" + h(w.max_capacity), 1),
                w.is_available ? (v(), $("span", Ih, [
                  S[5] || (S[5] = l("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    l("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M5 13l4 4L19 7"
                    })
                  ], -1)),
                  Q(" " + h(f(e)("admin.ops.accountAvailability.available")), 1)
                ])) : w.is_rate_limited ? (v(), $("span", Fh, [
                  S[6] || (S[6] = l("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    l("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ], -1)),
                  Q(" " + h(j(w.rate_limit_remaining_sec || 0)), 1)
                ])) : w.is_overloaded ? (v(), $("span", Vh, [
                  S[7] || (S[7] = l("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    l("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                  ], -1)),
                  Q(" " + h(j(w.overload_remaining_sec || 0)), 1)
                ])) : w.has_error ? (v(), $("span", Bh, [
                  S[8] || (S[8] = l("svg", {
                    class: "h-3 w-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    l("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)),
                  Q(" " + h(f(e)("admin.ops.accountAvailability.accountError")), 1)
                ])) : (v(), $("span", jh, h(f(e)("admin.ops.accountAvailability.unavailable")), 1))
              ])
            ]),
            l("div", qh, [
              l("div", {
                class: Z(["h-full rounded-full transition-all duration-300", B(w.load_percentage)]),
                style: gs(F(w.load_percentage))
              }, null, 6)
            ]),
            w.waiting_in_queue > 0 ? (v(), $("div", Nh, [
              l("span", Hh, h(f(e)("admin.ops.concurrency.queued", { count: w.waiting_in_queue })), 1)
            ])) : W("", !0)
          ]))), 128))
        ]))
      ])) : (v(), $("div", Ju, h(f(e)("admin.ops.concurrency.disabledHint")), 1))
    ]));
  }
}), Uh = /* @__PURE__ */ Wr(Wh, [["__scopeId", "data-v-6cb95ad3"]]), Yh = /* @__PURE__ */ new Set([
  "upstream request failed",
  "upstream request failed after retries",
  "upstream gateway error",
  "upstream service temporarily unavailable"
]);
function Gh(s) {
  const t = String(s || "").trim();
  if (!t) return null;
  try {
    const e = JSON.parse(t), n = e == null ? void 0 : e.error;
    if (!n || typeof n != "object") return null;
    const i = typeof n.type == "string" ? n.type.trim() : "", a = typeof n.message == "string" ? n.message.trim() : "";
    return !i && !a ? null : { type: i, message: a };
  } catch {
    return null;
  }
}
function Xh(s) {
  const t = Gh(s);
  return !t || t.type !== "upstream_error" ? !1 : Yh.has(t.message.toLowerCase());
}
function Po(s) {
  if (!s) return "";
  const t = [
    s.upstream_error_detail,
    s.upstream_errors,
    s.upstream_error_message
  ];
  for (const e of t) {
    const n = String(e || "").trim();
    if (n && !(n === "[]" || n === "{}" || n.toLowerCase() === "null"))
      return n;
  }
  return "";
}
function Kh(s, t) {
  if (!s) return "";
  const e = Po(s), n = String(s.error_body || "").trim();
  return t === "upstream" ? e || n : !n || e && Xh(n) ? e : n;
}
const Qh = {
  key: 0,
  class: "flex items-center justify-center py-16"
}, Jh = { class: "flex flex-col items-center gap-3" }, Zh = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, tp = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, ep = {
  key: 2,
  class: "space-y-6 p-6"
}, sp = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" }, np = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, ip = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, ap = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, op = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, rp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, lp = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, dp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, cp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, up = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, hp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, pp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, fp = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, gp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, mp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, _p = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, xp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, yp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, bp = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, vp = { class: "font-mono" }, kp = { class: "font-mono text-primary-600 dark:text-primary-400" }, wp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Sp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, $p = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, Cp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Mp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Dp = { class: "mt-1 break-all font-mono text-sm font-medium text-gray-900 dark:text-white" }, Rp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Tp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Pp = { class: "mt-1" }, Op = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Ap = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ep = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Lp = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, zp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ip = ["title"], Fp = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900"
}, Vp = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Bp = { class: "mt-1 font-mono text-sm font-medium text-gray-900 dark:text-white" }, jp = { class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900" }, qp = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, Np = { class: "mt-4 max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-100" }, Hp = {
  key: 0,
  class: "rounded-xl bg-gray-50 p-6 dark:bg-dark-900"
}, Wp = { class: "flex flex-wrap items-center justify-between gap-2" }, Up = { class: "text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white" }, Yp = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Gp = {
  key: 0,
  class: "mt-3 text-sm text-gray-500 dark:text-gray-400"
}, Xp = {
  key: 1,
  class: "mt-4 space-y-3"
}, Kp = { class: "flex flex-wrap items-center justify-between gap-2" }, Qp = { class: "text-xs font-black text-gray-900 dark:text-white" }, Jp = {
  key: 0,
  class: "ml-2 rounded-md bg-gray-100 px-2 py-0.5 font-mono text-[10px] font-bold text-gray-700 dark:bg-dark-700 dark:text-gray-200"
}, Zp = { class: "flex items-center gap-2" }, tf = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, ef = ["disabled", "title", "onClick"], sf = { class: "mt-3 grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2" }, nf = { class: "text-gray-400" }, af = { class: "ml-1 font-mono" }, of = { class: "text-gray-400" }, rf = { class: "ml-1 font-mono" }, lf = {
  key: 0,
  class: "mt-3 break-words text-sm font-medium text-gray-900 dark:text-white"
}, df = {
  key: 1,
  class: "mt-3 max-h-[240px] overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-100"
}, cf = /* @__PURE__ */ Mt({
  __name: "OpsErrorDetailModal",
  props: {
    show: { type: Boolean },
    errorId: {},
    errorType: {}
  },
  emits: ["update:show"],
  setup(s, { emit: t }) {
    const e = s, n = t, { t: i } = Et(), a = Fe(), o = I(!1), r = I(null), d = P(() => e.errorType === "request"), c = P(() => {
      var A, E;
      return ((A = r.value) == null ? void 0 : A.request_id) || ((E = r.value) == null ? void 0 : E.client_request_id) || "";
    }), u = P(() => Kh(r.value, e.errorType)), p = P(() => e.errorId ? i("admin.ops.errorDetail.titleWithId", { id: String(e.errorId) }) : i("admin.ops.errorDetail.title")), m = P(() => i("admin.ops.errorDetail.noErrorSelected"));
    function _(A) {
      if (!A) return !1;
      const E = String(A.phase || "").toLowerCase(), N = String(A.error_owner || "").toLowerCase();
      return E === "upstream" && N === "provider";
    }
    function g(A) {
      switch (A) {
        case 1:
          return i("admin.ops.errorDetail.requestTypeSync");
        case 2:
          return i("admin.ops.errorDetail.requestTypeStream");
        case 3:
          return i("admin.ops.errorDetail.requestTypeWs");
        default:
          return i("admin.ops.errorDetail.requestTypeUnknown");
      }
    }
    function x(A) {
      if (!A) return !1;
      const E = String(A.requested_model || "").trim(), N = String(A.upstream_model || "").trim();
      return !!E && !!N && E !== N;
    }
    function b(A) {
      if (!A) return "";
      const E = String(A.upstream_model || "").trim();
      if (E) return E;
      const N = String(A.requested_model || "").trim();
      return N || String(A.model || "").trim();
    }
    const y = I([]), T = I(!1), B = P(() => y.value), F = I(/* @__PURE__ */ new Set());
    function O(A) {
      const E = Po(A);
      return E || String(A.error_body || "").trim();
    }
    function j(A) {
      const E = new Set(F.value);
      E.has(A) ? E.delete(A) : E.add(A), F.value = E;
    }
    async function D(A) {
      T.value = !0;
      try {
        const E = await ot.listRequestErrorUpstreamErrors(
          A,
          { page: 1, page_size: 100, view: "all" },
          { include_detail: !0 }
        );
        y.value = E.items || [];
      } catch (E) {
        console.error("[OpsErrorDetailModal] Failed to load correlated upstream errors", E), y.value = [];
      } finally {
        T.value = !1;
      }
    }
    function S() {
      n("update:show", !1);
    }
    function w(A) {
      if (!A) return "N/A";
      try {
        return JSON.stringify(JSON.parse(A), null, 2);
      } catch {
        return A;
      }
    }
    async function V(A) {
      var E;
      o.value = !0;
      try {
        const Y = (e.errorType || (((E = r.value) == null ? void 0 : E.phase) === "upstream" ? "upstream" : "request")) === "upstream" ? await ot.getUpstreamErrorDetail(A) : await ot.getRequestErrorDetail(A);
        r.value = Y;
      } catch (N) {
        r.value = null, a.showError((N == null ? void 0 : N.message) || i("admin.ops.failedToLoadErrorDetail"));
      } finally {
        o.value = !1;
      }
    }
    _t(
      () => [e.show, e.errorId],
      ([A, E]) => {
        if (!A) {
          r.value = null;
          return;
        }
        typeof E == "number" && E > 0 && (F.value = /* @__PURE__ */ new Set(), V(E), e.errorType === "request" ? D(E) : y.value = []);
      },
      { immediate: !0 }
    );
    const L = P(() => {
      var E;
      const A = ((E = r.value) == null ? void 0 : E.status_code) ?? 0;
      return A >= 500 ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30" : A === 429 ? "bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-500/30" : A >= 400 ? "bg-zo-alert-50 text-zo-alert-700 ring-zo-alert-600/20 dark:bg-zo-alert-900/30 dark:text-zo-alert-400 dark:ring-zo-alert-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-400 dark:ring-gray-500/30";
    });
    return (A, E) => (v(), ft(Re, {
      show: s.show,
      title: p.value,
      width: "full",
      "close-on-click-outside": !0,
      onClose: S
    }, {
      default: wt(() => [
        o.value ? (v(), $("div", Qh, [
          l("div", Jh, [
            E[0] || (E[0] = l("div", { class: "h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
            l("div", Zh, h(f(i)("admin.ops.errorDetail.loading")), 1)
          ])
        ])) : r.value ? (v(), $("div", ep, [
          l("div", sp, [
            l("div", np, [
              l("div", ip, h(f(i)("admin.ops.errorDetail.requestId")), 1),
              l("div", ap, h(c.value || "—"), 1)
            ]),
            l("div", op, [
              l("div", rp, h(f(i)("admin.ops.errorDetail.time")), 1),
              l("div", lp, h(f(el)(r.value.created_at)), 1)
            ]),
            l("div", dp, [
              l("div", cp, h(_(r.value) ? f(i)("admin.ops.errorDetail.account") : f(i)("admin.ops.errorDetail.user")), 1),
              l("div", up, [
                _(r.value) ? (v(), $(gt, { key: 0 }, [
                  Q(h(r.value.account_name || (r.value.account_id != null ? String(r.value.account_id) : "—")), 1)
                ], 64)) : (v(), $(gt, { key: 1 }, [
                  Q(h(r.value.user_email || (r.value.user_id != null ? String(r.value.user_id) : "—")), 1)
                ], 64))
              ])
            ]),
            l("div", hp, [
              l("div", pp, h(f(i)("admin.ops.errorDetail.platform")), 1),
              l("div", fp, h(r.value.platform || "—"), 1)
            ]),
            l("div", gp, [
              l("div", mp, h(f(i)("admin.ops.errorDetail.group")), 1),
              l("div", _p, h(r.value.group_name || (r.value.group_id != null ? String(r.value.group_id) : "—")), 1)
            ]),
            l("div", xp, [
              l("div", yp, h(f(i)("admin.ops.errorDetail.model")), 1),
              l("div", bp, [
                x(r.value) ? (v(), $(gt, { key: 0 }, [
                  l("span", vp, h(r.value.requested_model), 1),
                  E[1] || (E[1] = l("span", { class: "mx-1 text-gray-400" }, "→", -1)),
                  l("span", kp, h(r.value.upstream_model), 1)
                ], 64)) : (v(), $(gt, { key: 1 }, [
                  Q(h(b(r.value) || "—"), 1)
                ], 64))
              ])
            ]),
            l("div", wp, [
              l("div", Sp, h(f(i)("admin.ops.errorDetail.inboundEndpoint")), 1),
              l("div", $p, h(r.value.inbound_endpoint || "—"), 1)
            ]),
            l("div", Cp, [
              l("div", Mp, h(f(i)("admin.ops.errorDetail.upstreamEndpoint")), 1),
              l("div", Dp, h(r.value.upstream_endpoint || "—"), 1)
            ]),
            l("div", Rp, [
              l("div", Tp, h(f(i)("admin.ops.errorDetail.status")), 1),
              l("div", Pp, [
                l("span", {
                  class: Z(["inline-flex items-center rounded-lg px-2 py-1 text-xs font-black ring-1 ring-inset shadow-sm", L.value])
                }, h(r.value.status_code), 3)
              ])
            ]),
            l("div", Op, [
              l("div", Ap, h(f(i)("admin.ops.errorDetail.requestType")), 1),
              l("div", Ep, h(g(r.value.request_type)), 1)
            ]),
            l("div", Lp, [
              l("div", zp, h(f(i)("admin.ops.errorDetail.message")), 1),
              l("div", {
                class: "mt-1 truncate text-sm font-medium text-gray-900 dark:text-white",
                title: r.value.message
              }, h(r.value.message || "—"), 9, Ip)
            ]),
            r.value.api_key_prefix ? (v(), $("div", Fp, [
              l("div", Vp, h(f(i)("admin.ops.errorDetail.apiKeyPrefix")), 1),
              l("div", Bp, h(r.value.api_key_prefix), 1)
            ])) : W("", !0)
          ]),
          l("div", jp, [
            l("h3", qp, h(f(i)("admin.ops.errorDetail.responseBody")), 1),
            l("pre", Np, [
              l("code", null, h(w(u.value || "")), 1)
            ])
          ]),
          d.value ? (v(), $("div", Hp, [
            l("div", Wp, [
              l("h3", Up, h(f(i)("admin.ops.errorDetails.upstreamErrors")), 1),
              T.value ? (v(), $("div", Yp, h(f(i)("common.loading")), 1)) : W("", !0)
            ]),
            !T.value && !B.value.length ? (v(), $("div", Gp, h(f(i)("common.noData")), 1)) : (v(), $("div", Xp, [
              (v(!0), $(gt, null, vt(B.value, (N, Y) => (v(), $("div", {
                key: N.id,
                class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
              }, [
                l("div", Kp, [
                  l("div", Qp, [
                    Q(" #" + h(Y + 1) + " ", 1),
                    N.type ? (v(), $("span", Jp, h(N.type), 1)) : W("", !0)
                  ]),
                  l("div", Zp, [
                    l("div", tf, h(N.status_code ?? "—"), 1),
                    l("button", {
                      type: "button",
                      class: "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-bold text-primary-700 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-60 dark:text-primary-200 dark:hover:bg-dark-700",
                      disabled: !O(N),
                      title: O(N) ? "" : f(i)("common.noData"),
                      onClick: (nt) => j(N.id)
                    }, [
                      K(ee, {
                        name: F.value.has(N.id) ? "chevronDown" : "chevronRight",
                        size: "xs",
                        "stroke-width": 2
                      }, null, 8, ["name"]),
                      l("span", null, h(F.value.has(N.id) ? f(i)("admin.ops.errorDetail.responsePreview.collapse") : f(i)("admin.ops.errorDetail.responsePreview.expand")), 1)
                    ], 8, ef)
                  ])
                ]),
                l("div", sf, [
                  l("div", null, [
                    l("span", nf, h(f(i)("admin.ops.errorDetail.upstreamEvent.status")) + ":", 1),
                    l("span", af, h(N.status_code ?? "—"), 1)
                  ]),
                  l("div", null, [
                    l("span", of, h(f(i)("admin.ops.errorDetail.upstreamEvent.requestId")) + ":", 1),
                    l("span", rf, h(N.request_id || N.client_request_id || "—"), 1)
                  ])
                ]),
                N.message ? (v(), $("div", lf, h(N.message), 1)) : W("", !0),
                F.value.has(N.id) ? (v(), $("pre", df, [
                  l("code", null, h(w(O(N))), 1)
                ])) : W("", !0)
              ]))), 128))
            ]))
          ])) : W("", !0)
        ])) : (v(), $("div", tp, h(m.value), 1))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
});
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function sn(s) {
  return s + 0.5 | 0;
}
const Ae = (s, t, e) => Math.max(Math.min(s, e), t);
function zs(s) {
  return Ae(sn(s * 2.55), 0, 255);
}
function ze(s) {
  return Ae(sn(s * 255), 0, 255);
}
function Ce(s) {
  return Ae(sn(s / 2.55) / 100, 0, 1);
}
function sa(s) {
  return Ae(sn(s * 100), 0, 100);
}
const te = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, yi = [..."0123456789ABCDEF"], uf = (s) => yi[s & 15], hf = (s) => yi[(s & 240) >> 4] + yi[s & 15], un = (s) => (s & 240) >> 4 === (s & 15), pf = (s) => un(s.r) && un(s.g) && un(s.b) && un(s.a);
function ff(s) {
  var t = s.length, e;
  return s[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & te[s[1]] * 17,
    g: 255 & te[s[2]] * 17,
    b: 255 & te[s[3]] * 17,
    a: t === 5 ? te[s[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: te[s[1]] << 4 | te[s[2]],
    g: te[s[3]] << 4 | te[s[4]],
    b: te[s[5]] << 4 | te[s[6]],
    a: t === 9 ? te[s[7]] << 4 | te[s[8]] : 255
  })), e;
}
const gf = (s, t) => s < 255 ? t(s) : "";
function mf(s) {
  var t = pf(s) ? uf : hf;
  return s ? "#" + t(s.r) + t(s.g) + t(s.b) + gf(s.a, t) : void 0;
}
const _f = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Oo(s, t, e) {
  const n = t * Math.min(e, 1 - e), i = (a, o = (a + s / 30) % 12) => e - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function xf(s, t, e) {
  const n = (i, a = (i + s / 60) % 6) => e - e * t * Math.max(Math.min(a, 4 - a, 1), 0);
  return [n(5), n(3), n(1)];
}
function yf(s, t, e) {
  const n = Oo(s, 1, 0.5);
  let i;
  for (t + e > 1 && (i = 1 / (t + e), t *= i, e *= i), i = 0; i < 3; i++)
    n[i] *= 1 - t - e, n[i] += t;
  return n;
}
function bf(s, t, e, n, i) {
  return s === i ? (t - e) / n + (t < e ? 6 : 0) : t === i ? (e - s) / n + 2 : (s - t) / n + 4;
}
function Ti(s) {
  const e = s.r / 255, n = s.g / 255, i = s.b / 255, a = Math.max(e, n, i), o = Math.min(e, n, i), r = (a + o) / 2;
  let d, c, u;
  return a !== o && (u = a - o, c = r > 0.5 ? u / (2 - a - o) : u / (a + o), d = bf(e, n, i, u, a), d = d * 60 + 0.5), [d | 0, c || 0, r];
}
function Pi(s, t, e, n) {
  return (Array.isArray(t) ? s(t[0], t[1], t[2]) : s(t, e, n)).map(ze);
}
function Oi(s, t, e) {
  return Pi(Oo, s, t, e);
}
function vf(s, t, e) {
  return Pi(yf, s, t, e);
}
function kf(s, t, e) {
  return Pi(xf, s, t, e);
}
function Ao(s) {
  return (s % 360 + 360) % 360;
}
function wf(s) {
  const t = _f.exec(s);
  let e = 255, n;
  if (!t)
    return;
  t[5] !== n && (e = t[6] ? zs(+t[5]) : ze(+t[5]));
  const i = Ao(+t[2]), a = +t[3] / 100, o = +t[4] / 100;
  return t[1] === "hwb" ? n = vf(i, a, o) : t[1] === "hsv" ? n = kf(i, a, o) : n = Oi(i, a, o), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: e
  };
}
function Sf(s, t) {
  var e = Ti(s);
  e[0] = Ao(e[0] + t), e = Oi(e), s.r = e[0], s.g = e[1], s.b = e[2];
}
function $f(s) {
  if (!s)
    return;
  const t = Ti(s), e = t[0], n = sa(t[1]), i = sa(t[2]);
  return s.a < 255 ? `hsla(${e}, ${n}%, ${i}%, ${Ce(s.a)})` : `hsl(${e}, ${n}%, ${i}%)`;
}
const na = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, ia = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Cf() {
  const s = {}, t = Object.keys(ia), e = Object.keys(na);
  let n, i, a, o, r;
  for (n = 0; n < t.length; n++) {
    for (o = r = t[n], i = 0; i < e.length; i++)
      a = e[i], r = r.replace(a, na[a]);
    a = parseInt(ia[o], 16), s[r] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return s;
}
let hn;
function Mf(s) {
  hn || (hn = Cf(), hn.transparent = [0, 0, 0, 0]);
  const t = hn[s.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Df = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Rf(s) {
  const t = Df.exec(s);
  let e = 255, n, i, a;
  if (t) {
    if (t[7] !== n) {
      const o = +t[7];
      e = t[8] ? zs(o) : Ae(o * 255, 0, 255);
    }
    return n = +t[1], i = +t[3], a = +t[5], n = 255 & (t[2] ? zs(n) : Ae(n, 0, 255)), i = 255 & (t[4] ? zs(i) : Ae(i, 0, 255)), a = 255 & (t[6] ? zs(a) : Ae(a, 0, 255)), {
      r: n,
      g: i,
      b: a,
      a: e
    };
  }
}
function Tf(s) {
  return s && (s.a < 255 ? `rgba(${s.r}, ${s.g}, ${s.b}, ${Ce(s.a)})` : `rgb(${s.r}, ${s.g}, ${s.b})`);
}
const Jn = (s) => s <= 31308e-7 ? s * 12.92 : Math.pow(s, 1 / 2.4) * 1.055 - 0.055, hs = (s) => s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
function Pf(s, t, e) {
  const n = hs(Ce(s.r)), i = hs(Ce(s.g)), a = hs(Ce(s.b));
  return {
    r: ze(Jn(n + e * (hs(Ce(t.r)) - n))),
    g: ze(Jn(i + e * (hs(Ce(t.g)) - i))),
    b: ze(Jn(a + e * (hs(Ce(t.b)) - a))),
    a: s.a + e * (t.a - s.a)
  };
}
function pn(s, t, e) {
  if (s) {
    let n = Ti(s);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1)), n = Oi(n), s.r = n[0], s.g = n[1], s.b = n[2];
  }
}
function Eo(s, t) {
  return s && Object.assign(t || {}, s);
}
function aa(s) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(s) ? s.length >= 3 && (t = { r: s[0], g: s[1], b: s[2], a: 255 }, s.length > 3 && (t.a = ze(s[3]))) : (t = Eo(s, { r: 0, g: 0, b: 0, a: 1 }), t.a = ze(t.a)), t;
}
function Of(s) {
  return s.charAt(0) === "r" ? Rf(s) : wf(s);
}
class Ys {
  constructor(t) {
    if (t instanceof Ys)
      return t;
    const e = typeof t;
    let n;
    e === "object" ? n = aa(t) : e === "string" && (n = ff(t) || Mf(t) || Of(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Eo(this._rgb);
    return t && (t.a = Ce(t.a)), t;
  }
  set rgb(t) {
    this._rgb = aa(t);
  }
  rgbString() {
    return this._valid ? Tf(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? mf(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? $f(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb, i = t.rgb;
      let a;
      const o = e === a ? 0.5 : e, r = 2 * o - 1, d = n.a - i.a, c = ((r * d === -1 ? r : (r + d) / (1 + r * d)) + 1) / 2;
      a = 1 - c, n.r = 255 & c * n.r + a * i.r + 0.5, n.g = 255 & c * n.g + a * i.g + 0.5, n.b = 255 & c * n.b + a * i.b + 0.5, n.a = o * n.a + (1 - o) * i.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Pf(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ys(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ze(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = sn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return pn(this._rgb, 2, t), this;
  }
  darken(t) {
    return pn(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return pn(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return pn(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Sf(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function we() {
}
const Af = /* @__PURE__ */ (() => {
  let s = 0;
  return () => s++;
})();
function xt(s) {
  return s == null;
}
function Tt(s) {
  if (Array.isArray && Array.isArray(s))
    return !0;
  const t = Object.prototype.toString.call(s);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function mt(s) {
  return s !== null && Object.prototype.toString.call(s) === "[object Object]";
}
function Bt(s) {
  return (typeof s == "number" || s instanceof Number) && isFinite(+s);
}
function pe(s, t) {
  return Bt(s) ? s : t;
}
function ut(s, t) {
  return typeof s > "u" ? t : s;
}
const Ef = (s, t) => typeof s == "string" && s.endsWith("%") ? parseFloat(s) / 100 : +s / t, Lo = (s, t) => typeof s == "string" && s.endsWith("%") ? parseFloat(s) / 100 * t : +s;
function St(s, t, e) {
  if (s && typeof s.call == "function")
    return s.apply(e, t);
}
function yt(s, t, e, n) {
  let i, a, o;
  if (Tt(s))
    for (a = s.length, i = 0; i < a; i++)
      t.call(e, s[i], i);
  else if (mt(s))
    for (o = Object.keys(s), a = o.length, i = 0; i < a; i++)
      t.call(e, s[o[i]], o[i]);
}
function On(s, t) {
  let e, n, i, a;
  if (!s || !t || s.length !== t.length)
    return !1;
  for (e = 0, n = s.length; e < n; ++e)
    if (i = s[e], a = t[e], i.datasetIndex !== a.datasetIndex || i.index !== a.index)
      return !1;
  return !0;
}
function An(s) {
  if (Tt(s))
    return s.map(An);
  if (mt(s)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(s), n = e.length;
    let i = 0;
    for (; i < n; ++i)
      t[e[i]] = An(s[e[i]]);
    return t;
  }
  return s;
}
function zo(s) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(s) === -1;
}
function Lf(s, t, e, n) {
  if (!zo(s))
    return;
  const i = t[s], a = e[s];
  mt(i) && mt(a) ? Gs(i, a, n) : t[s] = An(a);
}
function Gs(s, t, e) {
  const n = Tt(t) ? t : [
    t
  ], i = n.length;
  if (!mt(s))
    return s;
  e = e || {};
  const a = e.merger || Lf;
  let o;
  for (let r = 0; r < i; ++r) {
    if (o = n[r], !mt(o))
      continue;
    const d = Object.keys(o);
    for (let c = 0, u = d.length; c < u; ++c)
      a(d[c], s, o, e);
  }
  return s;
}
function Ns(s, t) {
  return Gs(s, t, {
    merger: zf
  });
}
function zf(s, t, e) {
  if (!zo(s))
    return;
  const n = t[s], i = e[s];
  mt(n) && mt(i) ? Ns(n, i) : Object.prototype.hasOwnProperty.call(t, s) || (t[s] = An(i));
}
const oa = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (s) => s,
  // default resolvers
  x: (s) => s.x,
  y: (s) => s.y
};
function If(s) {
  const t = s.split("."), e = [];
  let n = "";
  for (const i of t)
    n += i, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (e.push(n), n = "");
  return e;
}
function Ff(s) {
  const t = If(s);
  return (e) => {
    for (const n of t) {
      if (n === "")
        break;
      e = e && e[n];
    }
    return e;
  };
}
function Qe(s, t) {
  return (oa[t] || (oa[t] = Ff(t)))(s);
}
function Ai(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
const Xs = (s) => typeof s < "u", Ie = (s) => typeof s == "function", ra = (s, t) => {
  if (s.size !== t.size)
    return !1;
  for (const e of s)
    if (!t.has(e))
      return !1;
  return !0;
};
function Vf(s) {
  return s.type === "mouseup" || s.type === "click" || s.type === "contextmenu";
}
const bt = Math.PI, $t = 2 * bt, Bf = $t + bt, En = Number.POSITIVE_INFINITY, jf = bt / 180, At = bt / 2, Ne = bt / 4, la = bt * 2 / 3, Io = Math.log10, ye = Math.sign;
function Hs(s, t, e) {
  return Math.abs(s - t) < e;
}
function da(s) {
  const t = Math.round(s);
  s = Hs(s, t, s / 1e3) ? t : s;
  const e = Math.pow(10, Math.floor(Io(s))), n = s / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function qf(s) {
  const t = [], e = Math.sqrt(s);
  let n;
  for (n = 1; n < e; n++)
    s % n === 0 && (t.push(n), t.push(s / n));
  return e === (e | 0) && t.push(e), t.sort((i, a) => i - a).pop(), t;
}
function Nf(s) {
  return typeof s == "symbol" || typeof s == "object" && s !== null && !(Symbol.toPrimitive in s || "toString" in s || "valueOf" in s);
}
function Ks(s) {
  return !Nf(s) && !isNaN(parseFloat(s)) && isFinite(s);
}
function Hf(s, t) {
  const e = Math.round(s);
  return e - t <= s && e + t >= s;
}
function Wf(s, t, e) {
  let n, i, a;
  for (n = 0, i = s.length; n < i; n++)
    a = s[n][e], isNaN(a) || (t.min = Math.min(t.min, a), t.max = Math.max(t.max, a));
}
function Me(s) {
  return s * (bt / 180);
}
function Uf(s) {
  return s * (180 / bt);
}
function ca(s) {
  if (!Bt(s))
    return;
  let t = 1, e = 0;
  for (; Math.round(s * t) / t !== s; )
    t *= 10, e++;
  return e;
}
function Fo(s, t) {
  const e = t.x - s.x, n = t.y - s.y, i = Math.sqrt(e * e + n * n);
  let a = Math.atan2(n, e);
  return a < -0.5 * bt && (a += $t), {
    angle: a,
    distance: i
  };
}
function bi(s, t) {
  return Math.sqrt(Math.pow(t.x - s.x, 2) + Math.pow(t.y - s.y, 2));
}
function Yf(s, t) {
  return (s - t + Bf) % $t - bt;
}
function Qt(s) {
  return (s % $t + $t) % $t;
}
function Qs(s, t, e, n) {
  const i = Qt(s), a = Qt(t), o = Qt(e), r = Qt(a - i), d = Qt(o - i), c = Qt(i - a), u = Qt(i - o);
  return i === a || i === o || n && a === o || r > d && c < u;
}
function Ft(s, t, e) {
  return Math.max(t, Math.min(e, s));
}
function Gf(s) {
  return Ft(s, -32768, 32767);
}
function De(s, t, e, n = 1e-6) {
  return s >= Math.min(t, e) - n && s <= Math.max(t, e) + n;
}
function Ei(s, t, e) {
  e = e || ((o) => s[o] < t);
  let n = s.length - 1, i = 0, a;
  for (; n - i > 1; )
    a = i + n >> 1, e(a) ? i = a : n = a;
  return {
    lo: i,
    hi: n
  };
}
const Ge = (s, t, e, n) => Ei(s, e, n ? (i) => {
  const a = s[i][t];
  return a < e || a === e && s[i + 1][t] === e;
} : (i) => s[i][t] < e), Xf = (s, t, e) => Ei(s, e, (n) => s[n][t] >= e);
function Kf(s, t, e) {
  let n = 0, i = s.length;
  for (; n < i && s[n] < t; )
    n++;
  for (; i > n && s[i - 1] > e; )
    i--;
  return n > 0 || i < s.length ? s.slice(n, i) : s;
}
const Vo = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Qf(s, t) {
  if (s._chartjs) {
    s._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(s, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Vo.forEach((e) => {
    const n = "_onData" + Ai(e), i = s[e];
    Object.defineProperty(s, e, {
      configurable: !0,
      enumerable: !1,
      value(...a) {
        const o = i.apply(this, a);
        return s._chartjs.listeners.forEach((r) => {
          typeof r[n] == "function" && r[n](...a);
        }), o;
      }
    });
  });
}
function ua(s, t) {
  const e = s._chartjs;
  if (!e)
    return;
  const n = e.listeners, i = n.indexOf(t);
  i !== -1 && n.splice(i, 1), !(n.length > 0) && (Vo.forEach((a) => {
    delete s[a];
  }), delete s._chartjs);
}
function Bo(s) {
  const t = new Set(s);
  return t.size === s.length ? s : Array.from(t);
}
const jo = (function() {
  return typeof window > "u" ? function(s) {
    return s();
  } : window.requestAnimationFrame;
})();
function qo(s, t) {
  let e = [], n = !1;
  return function(...i) {
    e = i, n || (n = !0, jo.call(window, () => {
      n = !1, s.apply(t, e);
    }));
  };
}
function Jf(s, t) {
  let e;
  return function(...n) {
    return t ? (clearTimeout(e), e = setTimeout(s, t, n)) : s.apply(this, n), t;
  };
}
const Li = (s) => s === "start" ? "left" : s === "end" ? "right" : "center", It = (s, t, e) => s === "start" ? t : s === "end" ? e : (t + e) / 2, Zf = (s, t, e, n) => s === (n ? "left" : "right") ? e : s === "center" ? (t + e) / 2 : t;
function tg(s, t, e) {
  const n = t.length;
  let i = 0, a = n;
  if (s._sorted) {
    const { iScale: o, vScale: r, _parsed: d } = s, c = s.dataset && s.dataset.options ? s.dataset.options.spanGaps : null, u = o.axis, { min: p, max: m, minDefined: _, maxDefined: g } = o.getUserBounds();
    if (_) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        Ge(d, u, p).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? n : Ge(t, u, o.getPixelForValue(p)).lo
      ), c) {
        const x = d.slice(0, i + 1).reverse().findIndex((b) => !xt(b[r.axis]));
        i -= Math.max(0, x);
      }
      i = Ft(i, 0, n - 1);
    }
    if (g) {
      let x = Math.max(
        // @ts-expect-error Need to type _parsed
        Ge(d, o.axis, m, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Ge(t, u, o.getPixelForValue(m), !0).hi + 1
      );
      if (c) {
        const b = d.slice(x - 1).findIndex((y) => !xt(y[r.axis]));
        x += Math.max(0, b);
      }
      a = Ft(x, i, n) - i;
    } else
      a = n - i;
  }
  return {
    start: i,
    count: a
  };
}
function eg(s) {
  const { xScale: t, yScale: e, _scaleRanges: n } = s, i = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!n)
    return s._scaleRanges = i, !0;
  const a = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== e.min || n.ymax !== e.max;
  return Object.assign(n, i), a;
}
const fn = (s) => s === 0 || s === 1, ha = (s, t, e) => -(Math.pow(2, 10 * (s -= 1)) * Math.sin((s - t) * $t / e)), pa = (s, t, e) => Math.pow(2, -10 * s) * Math.sin((s - t) * $t / e) + 1, Ws = {
  linear: (s) => s,
  easeInQuad: (s) => s * s,
  easeOutQuad: (s) => -s * (s - 2),
  easeInOutQuad: (s) => (s /= 0.5) < 1 ? 0.5 * s * s : -0.5 * (--s * (s - 2) - 1),
  easeInCubic: (s) => s * s * s,
  easeOutCubic: (s) => (s -= 1) * s * s + 1,
  easeInOutCubic: (s) => (s /= 0.5) < 1 ? 0.5 * s * s * s : 0.5 * ((s -= 2) * s * s + 2),
  easeInQuart: (s) => s * s * s * s,
  easeOutQuart: (s) => -((s -= 1) * s * s * s - 1),
  easeInOutQuart: (s) => (s /= 0.5) < 1 ? 0.5 * s * s * s * s : -0.5 * ((s -= 2) * s * s * s - 2),
  easeInQuint: (s) => s * s * s * s * s,
  easeOutQuint: (s) => (s -= 1) * s * s * s * s + 1,
  easeInOutQuint: (s) => (s /= 0.5) < 1 ? 0.5 * s * s * s * s * s : 0.5 * ((s -= 2) * s * s * s * s + 2),
  easeInSine: (s) => -Math.cos(s * At) + 1,
  easeOutSine: (s) => Math.sin(s * At),
  easeInOutSine: (s) => -0.5 * (Math.cos(bt * s) - 1),
  easeInExpo: (s) => s === 0 ? 0 : Math.pow(2, 10 * (s - 1)),
  easeOutExpo: (s) => s === 1 ? 1 : -Math.pow(2, -10 * s) + 1,
  easeInOutExpo: (s) => fn(s) ? s : s < 0.5 ? 0.5 * Math.pow(2, 10 * (s * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (s * 2 - 1)) + 2),
  easeInCirc: (s) => s >= 1 ? s : -(Math.sqrt(1 - s * s) - 1),
  easeOutCirc: (s) => Math.sqrt(1 - (s -= 1) * s),
  easeInOutCirc: (s) => (s /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - s * s) - 1) : 0.5 * (Math.sqrt(1 - (s -= 2) * s) + 1),
  easeInElastic: (s) => fn(s) ? s : ha(s, 0.075, 0.3),
  easeOutElastic: (s) => fn(s) ? s : pa(s, 0.075, 0.3),
  easeInOutElastic(s) {
    return fn(s) ? s : s < 0.5 ? 0.5 * ha(s * 2, 0.1125, 0.45) : 0.5 + 0.5 * pa(s * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(s) {
    return s * s * ((1.70158 + 1) * s - 1.70158);
  },
  easeOutBack(s) {
    return (s -= 1) * s * ((1.70158 + 1) * s + 1.70158) + 1;
  },
  easeInOutBack(s) {
    let t = 1.70158;
    return (s /= 0.5) < 1 ? 0.5 * (s * s * (((t *= 1.525) + 1) * s - t)) : 0.5 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2);
  },
  easeInBounce: (s) => 1 - Ws.easeOutBounce(1 - s),
  easeOutBounce(s) {
    return s < 1 / 2.75 ? 7.5625 * s * s : s < 2 / 2.75 ? 7.5625 * (s -= 1.5 / 2.75) * s + 0.75 : s < 2.5 / 2.75 ? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375 : 7.5625 * (s -= 2.625 / 2.75) * s + 0.984375;
  },
  easeInOutBounce: (s) => s < 0.5 ? Ws.easeInBounce(s * 2) * 0.5 : Ws.easeOutBounce(s * 2 - 1) * 0.5 + 0.5
};
function zi(s) {
  if (s && typeof s == "object") {
    const t = s.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function fa(s) {
  return zi(s) ? s : new Ys(s);
}
function Zn(s) {
  return zi(s) ? s : new Ys(s).saturate(0.5).darken(0.1).hexString();
}
const sg = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], ng = [
  "color",
  "borderColor",
  "backgroundColor"
];
function ig(s) {
  s.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), s.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), s.set("animations", {
    colors: {
      type: "color",
      properties: ng
    },
    numbers: {
      type: "number",
      properties: sg
    }
  }), s.describe("animations", {
    _fallback: "animation"
  }), s.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function ag(s) {
  s.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const ga = /* @__PURE__ */ new Map();
function og(s, t) {
  t = t || {};
  const e = s + JSON.stringify(t);
  let n = ga.get(e);
  return n || (n = new Intl.NumberFormat(s, t), ga.set(e, n)), n;
}
function Ii(s, t, e) {
  return og(t, e).format(s);
}
const rg = {
  values(s) {
    return Tt(s) ? s : "" + s;
  },
  numeric(s, t, e) {
    if (s === 0)
      return "0";
    const n = this.chart.options.locale;
    let i, a = s;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), a = lg(s, e);
    }
    const o = Io(Math.abs(a)), r = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), d = {
      notation: i,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(d, this.options.ticks.format), Ii(s, n, d);
  }
};
function lg(s, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && s !== Math.floor(s) && (e = s - Math.floor(s)), e;
}
var No = {
  formatters: rg
};
function dg(s) {
  s.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: No.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), s.route("scale.ticks", "color", "", "color"), s.route("scale.grid", "color", "", "borderColor"), s.route("scale.border", "color", "", "borderColor"), s.route("scale.title", "color", "", "color"), s.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), s.describe("scales", {
    _fallback: "scale"
  }), s.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Je = /* @__PURE__ */ Object.create(null), vi = /* @__PURE__ */ Object.create(null);
function Us(s, t) {
  if (!t)
    return s;
  const e = t.split(".");
  for (let n = 0, i = e.length; n < i; ++n) {
    const a = e[n];
    s = s[a] || (s[a] = /* @__PURE__ */ Object.create(null));
  }
  return s;
}
function ti(s, t, e) {
  return typeof t == "string" ? Gs(Us(s, t), e) : Gs(Us(s, ""), t);
}
class cg {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, i) => Zn(i.backgroundColor), this.hoverBorderColor = (n, i) => Zn(i.borderColor), this.hoverColor = (n, i) => Zn(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ti(this, t, e);
  }
  get(t) {
    return Us(this, t);
  }
  describe(t, e) {
    return ti(vi, t, e);
  }
  override(t, e) {
    return ti(Je, t, e);
  }
  route(t, e, n, i) {
    const a = Us(this, t), o = Us(this, n), r = "_" + e;
    Object.defineProperties(a, {
      [r]: {
        value: a[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const d = this[r], c = o[i];
          return mt(d) ? Object.assign({}, c, d) : ut(d, c);
        },
        set(d) {
          this[r] = d;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var Rt = /* @__PURE__ */ new cg({
  _scriptable: (s) => !s.startsWith("on"),
  _indexable: (s) => s !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  ig,
  ag,
  dg
]);
function ug(s) {
  return !s || xt(s.size) || xt(s.family) ? null : (s.style ? s.style + " " : "") + (s.weight ? s.weight + " " : "") + s.size + "px " + s.family;
}
function ma(s, t, e, n, i) {
  let a = t[i];
  return a || (a = t[i] = s.measureText(i).width, e.push(i)), a > n && (n = a), n;
}
function He(s, t, e) {
  const n = s.currentDevicePixelRatio, i = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - i) * n) / n + i;
}
function _a(s, t) {
  !t && !s || (t = t || s.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, s.width, s.height), t.restore());
}
function ki(s, t, e, n) {
  Ho(s, t, e, n, null);
}
function Ho(s, t, e, n, i) {
  let a, o, r, d, c, u, p, m;
  const _ = t.pointStyle, g = t.rotation, x = t.radius;
  let b = (g || 0) * jf;
  if (_ && typeof _ == "object" && (a = _.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) {
    s.save(), s.translate(e, n), s.rotate(b), s.drawImage(_, -_.width / 2, -_.height / 2, _.width, _.height), s.restore();
    return;
  }
  if (!(isNaN(x) || x <= 0)) {
    switch (s.beginPath(), _) {
      // Default includes circle
      default:
        i ? s.ellipse(e, n, i / 2, x, 0, 0, $t) : s.arc(e, n, x, 0, $t), s.closePath();
        break;
      case "triangle":
        u = i ? i / 2 : x, s.moveTo(e + Math.sin(b) * u, n - Math.cos(b) * x), b += la, s.lineTo(e + Math.sin(b) * u, n - Math.cos(b) * x), b += la, s.lineTo(e + Math.sin(b) * u, n - Math.cos(b) * x), s.closePath();
        break;
      case "rectRounded":
        c = x * 0.516, d = x - c, o = Math.cos(b + Ne) * d, p = Math.cos(b + Ne) * (i ? i / 2 - c : d), r = Math.sin(b + Ne) * d, m = Math.sin(b + Ne) * (i ? i / 2 - c : d), s.arc(e - p, n - r, c, b - bt, b - At), s.arc(e + m, n - o, c, b - At, b), s.arc(e + p, n + r, c, b, b + At), s.arc(e - m, n + o, c, b + At, b + bt), s.closePath();
        break;
      case "rect":
        if (!g) {
          d = Math.SQRT1_2 * x, u = i ? i / 2 : d, s.rect(e - u, n - d, 2 * u, 2 * d);
          break;
        }
        b += Ne;
      /* falls through */
      case "rectRot":
        p = Math.cos(b) * (i ? i / 2 : x), o = Math.cos(b) * x, r = Math.sin(b) * x, m = Math.sin(b) * (i ? i / 2 : x), s.moveTo(e - p, n - r), s.lineTo(e + m, n - o), s.lineTo(e + p, n + r), s.lineTo(e - m, n + o), s.closePath();
        break;
      case "crossRot":
        b += Ne;
      /* falls through */
      case "cross":
        p = Math.cos(b) * (i ? i / 2 : x), o = Math.cos(b) * x, r = Math.sin(b) * x, m = Math.sin(b) * (i ? i / 2 : x), s.moveTo(e - p, n - r), s.lineTo(e + p, n + r), s.moveTo(e + m, n - o), s.lineTo(e - m, n + o);
        break;
      case "star":
        p = Math.cos(b) * (i ? i / 2 : x), o = Math.cos(b) * x, r = Math.sin(b) * x, m = Math.sin(b) * (i ? i / 2 : x), s.moveTo(e - p, n - r), s.lineTo(e + p, n + r), s.moveTo(e + m, n - o), s.lineTo(e - m, n + o), b += Ne, p = Math.cos(b) * (i ? i / 2 : x), o = Math.cos(b) * x, r = Math.sin(b) * x, m = Math.sin(b) * (i ? i / 2 : x), s.moveTo(e - p, n - r), s.lineTo(e + p, n + r), s.moveTo(e + m, n - o), s.lineTo(e - m, n + o);
        break;
      case "line":
        o = i ? i / 2 : Math.cos(b) * x, r = Math.sin(b) * x, s.moveTo(e - o, n - r), s.lineTo(e + o, n + r);
        break;
      case "dash":
        s.moveTo(e, n), s.lineTo(e + Math.cos(b) * (i ? i / 2 : x), n + Math.sin(b) * x);
        break;
      case !1:
        s.closePath();
        break;
    }
    s.fill(), t.borderWidth > 0 && s.stroke();
  }
}
function Js(s, t, e) {
  return e = e || 0.5, !t || s && s.x > t.left - e && s.x < t.right + e && s.y > t.top - e && s.y < t.bottom + e;
}
function Bn(s, t) {
  s.save(), s.beginPath(), s.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), s.clip();
}
function jn(s) {
  s.restore();
}
function hg(s, t, e, n, i) {
  if (!t)
    return s.lineTo(e.x, e.y);
  if (i === "middle") {
    const a = (t.x + e.x) / 2;
    s.lineTo(a, t.y), s.lineTo(a, e.y);
  } else i === "after" != !!n ? s.lineTo(t.x, e.y) : s.lineTo(e.x, t.y);
  s.lineTo(e.x, e.y);
}
function pg(s, t, e, n) {
  if (!t)
    return s.lineTo(e.x, e.y);
  s.bezierCurveTo(n ? t.cp1x : t.cp2x, n ? t.cp1y : t.cp2y, n ? e.cp2x : e.cp1x, n ? e.cp2y : e.cp1y, e.x, e.y);
}
function fg(s, t) {
  t.translation && s.translate(t.translation[0], t.translation[1]), xt(t.rotation) || s.rotate(t.rotation), t.color && (s.fillStyle = t.color), t.textAlign && (s.textAlign = t.textAlign), t.textBaseline && (s.textBaseline = t.textBaseline);
}
function gg(s, t, e, n, i) {
  if (i.strikethrough || i.underline) {
    const a = s.measureText(n), o = t - a.actualBoundingBoxLeft, r = t + a.actualBoundingBoxRight, d = e - a.actualBoundingBoxAscent, c = e + a.actualBoundingBoxDescent, u = i.strikethrough ? (d + c) / 2 : c;
    s.strokeStyle = s.fillStyle, s.beginPath(), s.lineWidth = i.decorationWidth || 2, s.moveTo(o, u), s.lineTo(r, u), s.stroke();
  }
}
function mg(s, t) {
  const e = s.fillStyle;
  s.fillStyle = t.color, s.fillRect(t.left, t.top, t.width, t.height), s.fillStyle = e;
}
function Zs(s, t, e, n, i, a = {}) {
  const o = Tt(t) ? t : [
    t
  ], r = a.strokeWidth > 0 && a.strokeColor !== "";
  let d, c;
  for (s.save(), s.font = i.string, fg(s, a), d = 0; d < o.length; ++d)
    c = o[d], a.backdrop && mg(s, a.backdrop), r && (a.strokeColor && (s.strokeStyle = a.strokeColor), xt(a.strokeWidth) || (s.lineWidth = a.strokeWidth), s.strokeText(c, e, n, a.maxWidth)), s.fillText(c, e, n, a.maxWidth), gg(s, e, n, c, a), n += Number(i.lineHeight);
  s.restore();
}
function Ln(s, t) {
  const { x: e, y: n, w: i, h: a, radius: o } = t;
  s.arc(e + o.topLeft, n + o.topLeft, o.topLeft, 1.5 * bt, bt, !0), s.lineTo(e, n + a - o.bottomLeft), s.arc(e + o.bottomLeft, n + a - o.bottomLeft, o.bottomLeft, bt, At, !0), s.lineTo(e + i - o.bottomRight, n + a), s.arc(e + i - o.bottomRight, n + a - o.bottomRight, o.bottomRight, At, 0, !0), s.lineTo(e + i, n + o.topRight), s.arc(e + i - o.topRight, n + o.topRight, o.topRight, 0, -At, !0), s.lineTo(e + o.topLeft, n);
}
const _g = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, xg = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function yg(s, t) {
  const e = ("" + s).match(_g);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (s = +e[2], e[3]) {
    case "px":
      return s;
    case "%":
      s /= 100;
      break;
  }
  return t * s;
}
const bg = (s) => +s || 0;
function Fi(s, t) {
  const e = {}, n = mt(t), i = n ? Object.keys(t) : t, a = mt(s) ? n ? (o) => ut(s[o], s[t[o]]) : (o) => s[o] : () => s;
  for (const o of i)
    e[o] = bg(a(o));
  return e;
}
function Wo(s) {
  return Fi(s, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ms(s) {
  return Fi(s, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ne(s) {
  const t = Wo(s);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Vt(s, t) {
  s = s || {}, t = t || Rt.font;
  let e = ut(s.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = ut(s.style, t.style);
  n && !("" + n).match(xg) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const i = {
    family: ut(s.family, t.family),
    lineHeight: yg(ut(s.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: ut(s.weight, t.weight),
    string: ""
  };
  return i.string = ug(i), i;
}
function gn(s, t, e, n) {
  let i, a, o;
  for (i = 0, a = s.length; i < a; ++i)
    if (o = s[i], o !== void 0 && o !== void 0)
      return o;
}
function vg(s, t, e) {
  const { min: n, max: i } = s, a = Lo(t, (i - n) / 2), o = (r, d) => e && r === 0 ? 0 : r + d;
  return {
    min: o(n, -Math.abs(a)),
    max: o(i, a)
  };
}
function es(s, t) {
  return Object.assign(Object.create(s), t);
}
function Vi(s, t = [
  ""
], e, n, i = () => s[0]) {
  const a = e || s;
  typeof n > "u" && (n = Xo("_fallback", s));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: s,
    _rootScopes: a,
    _fallback: n,
    _getTarget: i,
    override: (r) => Vi([
      r,
      ...s
    ], t, a, n)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, d) {
      return delete r[d], delete r._keys, delete s[0][d], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, d) {
      return Yo(r, d, () => Rg(d, t, s, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, d) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], d);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(s[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(r, d) {
      return ya(r).includes(d);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return ya(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, d, c) {
      const u = r._storage || (r._storage = i());
      return r[d] = u[d] = c, delete r._keys, !0;
    }
  });
}
function ys(s, t, e, n) {
  const i = {
    _cacheable: !1,
    _proxy: s,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Uo(s, n),
    setContext: (a) => ys(s, a, e, n),
    override: (a) => ys(s.override(a), t, e, n)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, o) {
      return delete a[o], delete s[o], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, o, r) {
      return Yo(a, o, () => wg(a, o, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, o) {
      return a._descriptors.allKeys ? Reflect.has(s, o) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(s, o);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(s);
    },
    /**
    * A trap for the in operator.
    */
    has(a, o) {
      return Reflect.has(s, o);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(s);
    },
    /**
    * A trap for setting property values.
    */
    set(a, o, r) {
      return s[o] = r, delete a[o], !0;
    }
  });
}
function Uo(s, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: n = t.indexable, _allKeys: i = t.allKeys } = s;
  return {
    allKeys: i,
    scriptable: e,
    indexable: n,
    isScriptable: Ie(e) ? e : () => e,
    isIndexable: Ie(n) ? n : () => n
  };
}
const kg = (s, t) => s ? s + Ai(t) : t, Bi = (s, t) => mt(t) && s !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Yo(s, t, e) {
  if (Object.prototype.hasOwnProperty.call(s, t) || t === "constructor")
    return s[t];
  const n = e();
  return s[t] = n, n;
}
function wg(s, t, e) {
  const { _proxy: n, _context: i, _subProxy: a, _descriptors: o } = s;
  let r = n[t];
  return Ie(r) && o.isScriptable(t) && (r = Sg(t, r, s, e)), Tt(r) && r.length && (r = $g(t, r, s, o.isIndexable)), Bi(t, r) && (r = ys(r, i, a && a[t], o)), r;
}
function Sg(s, t, e, n) {
  const { _proxy: i, _context: a, _subProxy: o, _stack: r } = e;
  if (r.has(s))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + s);
  r.add(s);
  let d = t(a, o || n);
  return r.delete(s), Bi(s, d) && (d = ji(i._scopes, i, s, d)), d;
}
function $g(s, t, e, n) {
  const { _proxy: i, _context: a, _subProxy: o, _descriptors: r } = e;
  if (typeof a.index < "u" && n(s))
    return t[a.index % t.length];
  if (mt(t[0])) {
    const d = t, c = i._scopes.filter((u) => u !== d);
    t = [];
    for (const u of d) {
      const p = ji(c, i, s, u);
      t.push(ys(p, a, o && o[s], r));
    }
  }
  return t;
}
function Go(s, t, e) {
  return Ie(s) ? s(t, e) : s;
}
const Cg = (s, t) => s === !0 ? t : typeof s == "string" ? Qe(t, s) : void 0;
function Mg(s, t, e, n, i) {
  for (const a of t) {
    const o = Cg(e, a);
    if (o) {
      s.add(o);
      const r = Go(o._fallback, e, i);
      if (typeof r < "u" && r !== e && r !== n)
        return r;
    } else if (o === !1 && typeof n < "u" && e !== n)
      return null;
  }
  return !1;
}
function ji(s, t, e, n) {
  const i = t._rootScopes, a = Go(t._fallback, e, n), o = [
    ...s,
    ...i
  ], r = /* @__PURE__ */ new Set();
  r.add(n);
  let d = xa(r, o, e, a || e, n);
  return d === null || typeof a < "u" && a !== e && (d = xa(r, o, a, d, n), d === null) ? !1 : Vi(Array.from(r), [
    ""
  ], i, a, () => Dg(t, e, n));
}
function xa(s, t, e, n, i) {
  for (; e; )
    e = Mg(s, t, e, n, i);
  return e;
}
function Dg(s, t, e) {
  const n = s._getTarget();
  t in n || (n[t] = {});
  const i = n[t];
  return Tt(i) && mt(e) ? e : i || {};
}
function Rg(s, t, e, n) {
  let i;
  for (const a of t)
    if (i = Xo(kg(a, s), e), typeof i < "u")
      return Bi(s, i) ? ji(e, n, s, i) : i;
}
function Xo(s, t) {
  for (const e of t) {
    if (!e)
      continue;
    const n = e[s];
    if (typeof n < "u")
      return n;
  }
}
function ya(s) {
  let t = s._keys;
  return t || (t = s._keys = Tg(s._scopes)), t;
}
function Tg(s) {
  const t = /* @__PURE__ */ new Set();
  for (const e of s)
    for (const n of Object.keys(e).filter((i) => !i.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
const Pg = Number.EPSILON || 1e-14, bs = (s, t) => t < s.length && !s[t].skip && s[t], Ko = (s) => s === "x" ? "y" : "x";
function Og(s, t, e, n) {
  const i = s.skip ? t : s, a = t, o = e.skip ? t : e, r = bi(a, i), d = bi(o, a);
  let c = r / (r + d), u = d / (r + d);
  c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
  const p = n * c, m = n * u;
  return {
    previous: {
      x: a.x - p * (o.x - i.x),
      y: a.y - p * (o.y - i.y)
    },
    next: {
      x: a.x + m * (o.x - i.x),
      y: a.y + m * (o.y - i.y)
    }
  };
}
function Ag(s, t, e) {
  const n = s.length;
  let i, a, o, r, d, c = bs(s, 0);
  for (let u = 0; u < n - 1; ++u)
    if (d = c, c = bs(s, u + 1), !(!d || !c)) {
      if (Hs(t[u], 0, Pg)) {
        e[u] = e[u + 1] = 0;
        continue;
      }
      i = e[u] / t[u], a = e[u + 1] / t[u], r = Math.pow(i, 2) + Math.pow(a, 2), !(r <= 9) && (o = 3 / Math.sqrt(r), e[u] = i * o * t[u], e[u + 1] = a * o * t[u]);
    }
}
function Eg(s, t, e = "x") {
  const n = Ko(e), i = s.length;
  let a, o, r, d = bs(s, 0);
  for (let c = 0; c < i; ++c) {
    if (o = r, r = d, d = bs(s, c + 1), !r)
      continue;
    const u = r[e], p = r[n];
    o && (a = (u - o[e]) / 3, r[`cp1${e}`] = u - a, r[`cp1${n}`] = p - a * t[c]), d && (a = (d[e] - u) / 3, r[`cp2${e}`] = u + a, r[`cp2${n}`] = p + a * t[c]);
  }
}
function Lg(s, t = "x") {
  const e = Ko(t), n = s.length, i = Array(n).fill(0), a = Array(n);
  let o, r, d, c = bs(s, 0);
  for (o = 0; o < n; ++o)
    if (r = d, d = c, c = bs(s, o + 1), !!d) {
      if (c) {
        const u = c[t] - d[t];
        i[o] = u !== 0 ? (c[e] - d[e]) / u : 0;
      }
      a[o] = r ? c ? ye(i[o - 1]) !== ye(i[o]) ? 0 : (i[o - 1] + i[o]) / 2 : i[o - 1] : i[o];
    }
  Ag(s, i, a), Eg(s, a, t);
}
function mn(s, t, e) {
  return Math.max(Math.min(s, e), t);
}
function zg(s, t) {
  let e, n, i, a, o, r = Js(s[0], t);
  for (e = 0, n = s.length; e < n; ++e)
    o = a, a = r, r = e < n - 1 && Js(s[e + 1], t), a && (i = s[e], o && (i.cp1x = mn(i.cp1x, t.left, t.right), i.cp1y = mn(i.cp1y, t.top, t.bottom)), r && (i.cp2x = mn(i.cp2x, t.left, t.right), i.cp2y = mn(i.cp2y, t.top, t.bottom)));
}
function Ig(s, t, e, n, i) {
  let a, o, r, d;
  if (t.spanGaps && (s = s.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Lg(s, i);
  else {
    let c = n ? s[s.length - 1] : s[0];
    for (a = 0, o = s.length; a < o; ++a)
      r = s[a], d = Og(c, r, s[Math.min(a + 1, o - (n ? 0 : 1)) % o], t.tension), r.cp1x = d.previous.x, r.cp1y = d.previous.y, r.cp2x = d.next.x, r.cp2y = d.next.y, c = r;
  }
  t.capBezierPoints && zg(s, e);
}
function qi() {
  return typeof window < "u" && typeof document < "u";
}
function Ni(s) {
  let t = s.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function zn(s, t, e) {
  let n;
  return typeof s == "string" ? (n = parseInt(s, 10), s.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[e])) : n = s, n;
}
const qn = (s) => s.ownerDocument.defaultView.getComputedStyle(s, null);
function Fg(s, t) {
  return qn(s).getPropertyValue(t);
}
const Vg = [
  "top",
  "right",
  "bottom",
  "left"
];
function Xe(s, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let i = 0; i < 4; i++) {
    const a = Vg[i];
    n[a] = parseFloat(s[t + "-" + a + e]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const Bg = (s, t, e) => (s > 0 || t > 0) && (!e || !e.shadowRoot);
function jg(s, t) {
  const e = s.touches, n = e && e.length ? e[0] : s, { offsetX: i, offsetY: a } = n;
  let o = !1, r, d;
  if (Bg(i, a, s.target))
    r = i, d = a;
  else {
    const c = t.getBoundingClientRect();
    r = n.clientX - c.left, d = n.clientY - c.top, o = !0;
  }
  return {
    x: r,
    y: d,
    box: o
  };
}
function Ue(s, t) {
  if ("native" in s)
    return s;
  const { canvas: e, currentDevicePixelRatio: n } = t, i = qn(e), a = i.boxSizing === "border-box", o = Xe(i, "padding"), r = Xe(i, "border", "width"), { x: d, y: c, box: u } = jg(s, e), p = o.left + (u && r.left), m = o.top + (u && r.top);
  let { width: _, height: g } = t;
  return a && (_ -= o.width + r.width, g -= o.height + r.height), {
    x: Math.round((d - p) / _ * e.width / n),
    y: Math.round((c - m) / g * e.height / n)
  };
}
function qg(s, t, e) {
  let n, i;
  if (t === void 0 || e === void 0) {
    const a = s && Ni(s);
    if (!a)
      t = s.clientWidth, e = s.clientHeight;
    else {
      const o = a.getBoundingClientRect(), r = qn(a), d = Xe(r, "border", "width"), c = Xe(r, "padding");
      t = o.width - c.width - d.width, e = o.height - c.height - d.height, n = zn(r.maxWidth, a, "clientWidth"), i = zn(r.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: n || En,
    maxHeight: i || En
  };
}
const Ee = (s) => Math.round(s * 10) / 10;
function Ng(s, t, e, n) {
  const i = qn(s), a = Xe(i, "margin"), o = zn(i.maxWidth, s, "clientWidth") || En, r = zn(i.maxHeight, s, "clientHeight") || En, d = qg(s, t, e);
  let { width: c, height: u } = d;
  if (i.boxSizing === "content-box") {
    const m = Xe(i, "border", "width"), _ = Xe(i, "padding");
    c -= _.width + m.width, u -= _.height + m.height;
  }
  return c = Math.max(0, c - a.width), u = Math.max(0, n ? c / n : u - a.height), c = Ee(Math.min(c, o, d.maxWidth)), u = Ee(Math.min(u, r, d.maxHeight)), c && !u && (u = Ee(c / 2)), (t !== void 0 || e !== void 0) && n && d.height && u > d.height && (u = d.height, c = Ee(Math.floor(u * n))), {
    width: c,
    height: u
  };
}
function ba(s, t, e) {
  const n = t || 1, i = Ee(s.height * n), a = Ee(s.width * n);
  s.height = Ee(s.height), s.width = Ee(s.width);
  const o = s.canvas;
  return o.style && (e || !o.style.height && !o.style.width) && (o.style.height = `${s.height}px`, o.style.width = `${s.width}px`), s.currentDevicePixelRatio !== n || o.height !== i || o.width !== a ? (s.currentDevicePixelRatio = n, o.height = i, o.width = a, s.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const Hg = (function() {
  let s = !1;
  try {
    const t = {
      get passive() {
        return s = !0, !1;
      }
    };
    qi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return s;
})();
function va(s, t) {
  const e = Fg(s, t), n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Ye(s, t, e, n) {
  return {
    x: s.x + e * (t.x - s.x),
    y: s.y + e * (t.y - s.y)
  };
}
function Wg(s, t, e, n) {
  return {
    x: s.x + e * (t.x - s.x),
    y: n === "middle" ? e < 0.5 ? s.y : t.y : n === "after" ? e < 1 ? s.y : t.y : e > 0 ? t.y : s.y
  };
}
function Ug(s, t, e, n) {
  const i = {
    x: s.cp2x,
    y: s.cp2y
  }, a = {
    x: t.cp1x,
    y: t.cp1y
  }, o = Ye(s, i, e), r = Ye(i, a, e), d = Ye(a, t, e), c = Ye(o, r, e), u = Ye(r, d, e);
  return Ye(c, u, e);
}
const Yg = function(s, t) {
  return {
    x(e) {
      return s + s + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, n) {
      return e - n;
    },
    leftForLtr(e, n) {
      return e - n;
    }
  };
}, Gg = function() {
  return {
    x(s) {
      return s;
    },
    setWidth(s) {
    },
    textAlign(s) {
      return s;
    },
    xPlus(s, t) {
      return s + t;
    },
    leftForLtr(s, t) {
      return s;
    }
  };
};
function _s(s, t, e) {
  return s ? Yg(t, e) : Gg();
}
function Qo(s, t) {
  let e, n;
  (t === "ltr" || t === "rtl") && (e = s.canvas.style, n = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), s.prevTextDirection = n);
}
function Jo(s, t) {
  t !== void 0 && (delete s.prevTextDirection, s.canvas.style.setProperty("direction", t[0], t[1]));
}
function Zo(s) {
  return s === "angle" ? {
    between: Qs,
    compare: Yf,
    normalize: Qt
  } : {
    between: De,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function ka({ start: s, end: t, count: e, loop: n, style: i }) {
  return {
    start: s % e,
    end: t % e,
    loop: n && (t - s + 1) % e === 0,
    style: i
  };
}
function Xg(s, t, e) {
  const { property: n, start: i, end: a } = e, { between: o, normalize: r } = Zo(n), d = t.length;
  let { start: c, end: u, loop: p } = s, m, _;
  if (p) {
    for (c += d, u += d, m = 0, _ = d; m < _ && o(r(t[c % d][n]), i, a); ++m)
      c--, u--;
    c %= d, u %= d;
  }
  return u < c && (u += d), {
    start: c,
    end: u,
    loop: p,
    style: s.style
  };
}
function tr(s, t, e) {
  if (!e)
    return [
      s
    ];
  const { property: n, start: i, end: a } = e, o = t.length, { compare: r, between: d, normalize: c } = Zo(n), { start: u, end: p, loop: m, style: _ } = Xg(s, t, e), g = [];
  let x = !1, b = null, y, T, B;
  const F = () => d(i, B, y) && r(i, B) !== 0, O = () => r(a, y) === 0 || d(a, B, y), j = () => x || F(), D = () => !x || O();
  for (let S = u, w = u; S <= p; ++S)
    T = t[S % o], !T.skip && (y = c(T[n]), y !== B && (x = d(y, i, a), b === null && j() && (b = r(y, i) === 0 ? S : w), b !== null && D() && (g.push(ka({
      start: b,
      end: S,
      loop: m,
      count: o,
      style: _
    })), b = null), w = S, B = y));
  return b !== null && g.push(ka({
    start: b,
    end: p,
    loop: m,
    count: o,
    style: _
  })), g;
}
function er(s, t) {
  const e = [], n = s.segments;
  for (let i = 0; i < n.length; i++) {
    const a = tr(n[i], s.points, t);
    a.length && e.push(...a);
  }
  return e;
}
function Kg(s, t, e, n) {
  let i = 0, a = t - 1;
  if (e && !n)
    for (; i < t && !s[i].skip; )
      i++;
  for (; i < t && s[i].skip; )
    i++;
  for (i %= t, e && (a += i); a > i && s[a % t].skip; )
    a--;
  return a %= t, {
    start: i,
    end: a
  };
}
function Qg(s, t, e, n) {
  const i = s.length, a = [];
  let o = t, r = s[t], d;
  for (d = t + 1; d <= e; ++d) {
    const c = s[d % i];
    c.skip || c.stop ? r.skip || (n = !1, a.push({
      start: t % i,
      end: (d - 1) % i,
      loop: n
    }), t = o = c.stop ? d : null) : (o = d, r.skip && (t = d)), r = c;
  }
  return o !== null && a.push({
    start: t % i,
    end: o % i,
    loop: n
  }), a;
}
function Jg(s, t) {
  const e = s.points, n = s.options.spanGaps, i = e.length;
  if (!i)
    return [];
  const a = !!s._loop, { start: o, end: r } = Kg(e, i, a, n);
  if (n === !0)
    return wa(s, [
      {
        start: o,
        end: r,
        loop: a
      }
    ], e, t);
  const d = r < o ? r + i : r, c = !!s._fullLoop && o === 0 && r === i - 1;
  return wa(s, Qg(e, o, d, c), e, t);
}
function wa(s, t, e, n) {
  return !n || !n.setContext || !e ? t : Zg(s, t, e, n);
}
function Zg(s, t, e, n) {
  const i = s._chart.getContext(), a = Sa(s.options), { _datasetIndex: o, options: { spanGaps: r } } = s, d = e.length, c = [];
  let u = a, p = t[0].start, m = p;
  function _(g, x, b, y) {
    const T = r ? -1 : 1;
    if (g !== x) {
      for (g += d; e[g % d].skip; )
        g -= T;
      for (; e[x % d].skip; )
        x += T;
      g % d !== x % d && (c.push({
        start: g % d,
        end: x % d,
        loop: b,
        style: y
      }), u = y, p = x % d);
    }
  }
  for (const g of t) {
    p = r ? p : g.start;
    let x = e[p % d], b;
    for (m = p + 1; m <= g.end; m++) {
      const y = e[m % d];
      b = Sa(n.setContext(es(i, {
        type: "segment",
        p0: x,
        p1: y,
        p0DataIndex: (m - 1) % d,
        p1DataIndex: m % d,
        datasetIndex: o
      }))), t0(b, u) && _(p, m - 1, g.loop, u), x = y, u = b;
    }
    p < m - 1 && _(p, m - 1, g.loop, u);
  }
  return c;
}
function Sa(s) {
  return {
    backgroundColor: s.backgroundColor,
    borderCapStyle: s.borderCapStyle,
    borderDash: s.borderDash,
    borderDashOffset: s.borderDashOffset,
    borderJoinStyle: s.borderJoinStyle,
    borderWidth: s.borderWidth,
    borderColor: s.borderColor
  };
}
function t0(s, t) {
  if (!t)
    return !1;
  const e = [], n = function(i, a) {
    return zi(a) ? (e.includes(a) || e.push(a), e.indexOf(a)) : a;
  };
  return JSON.stringify(s, n) !== JSON.stringify(t, n);
}
function _n(s, t, e) {
  return s.options.clip ? s[e] : t[e];
}
function e0(s, t) {
  const { xScale: e, yScale: n } = s;
  return e && n ? {
    left: _n(e, t, "left"),
    right: _n(e, t, "right"),
    top: _n(n, t, "top"),
    bottom: _n(n, t, "bottom")
  } : t;
}
function sr(s, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const n = e0(t, s.chartArea);
  return {
    left: e.left === !1 ? 0 : n.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? s.width : n.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : n.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? s.height : n.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class s0 {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, n, i) {
    const a = e.listeners[i], o = e.duration;
    a.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: o,
      currentStep: Math.min(n - e.start, o)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = jo.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, i) => {
      if (!n.running || !n.items.length)
        return;
      const a = n.items;
      let o = a.length - 1, r = !1, d;
      for (; o >= 0; --o)
        d = a[o], d._active ? (d._total > n.duration && (n.duration = d._total), d.tick(t), r = !0) : (a[o] = a[a.length - 1], a.pop());
      r && (i.draw(), this._notify(i, n, t, "progress")), a.length || (n.running = !1, this._notify(i, n, t, "complete"), n.initial = !1), e += a.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, n)), n;
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((n, i) => Math.max(n, i._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const n = e.items;
    let i = n.length - 1;
    for (; i >= 0; --i)
      n[i].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Se = /* @__PURE__ */ new s0();
const $a = "transparent", n0 = {
  boolean(s, t, e) {
    return e > 0.5 ? t : s;
  },
  color(s, t, e) {
    const n = fa(s || $a), i = n.valid && fa(t || $a);
    return i && i.valid ? i.mix(n, e).hexString() : t;
  },
  number(s, t, e) {
    return s + (t - s) * e;
  }
};
class i0 {
  constructor(t, e, n, i) {
    const a = e[n];
    i = gn([
      t.to,
      i,
      a,
      t.from
    ]);
    const o = gn([
      t.from,
      a,
      i
    ]);
    this._active = !0, this._fn = t.fn || n0[t.type || typeof o], this._easing = Ws[t.easing] || Ws.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = n, this._from = o, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], a = n - this._start, o = this._duration - a;
      this._start = n, this._duration = Math.floor(Math.max(o, t.duration)), this._total += a, this._loop = !!t.loop, this._to = gn([
        t.to,
        e,
        i,
        t.from
      ]), this._from = gn([
        t.from,
        i,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, n = this._duration, i = this._prop, a = this._from, o = this._loop, r = this._to;
    let d;
    if (this._active = a !== r && (o || e < n), !this._active) {
      this._target[i] = r, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[i] = a;
      return;
    }
    d = e / n % 2, d = o && d > 1 ? 2 - d : d, d = this._easing(Math.min(1, Math.max(0, d))), this._target[i] = this._fn(a, r, d);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({
        res: e,
        rej: n
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", n = this._promises || [];
    for (let i = 0; i < n.length; i++)
      n[i][e]();
  }
}
class nr {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!mt(t))
      return;
    const e = Object.keys(Rt.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const a = t[i];
      if (!mt(a))
        return;
      const o = {};
      for (const r of e)
        o[r] = a[r];
      (Tt(a.properties) && a.properties || [
        i
      ]).forEach((r) => {
        (r === i || !n.has(r)) && n.set(r, o);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options, i = o0(t, n);
    if (!i)
      return [];
    const a = this._createAnimations(i, n);
    return n.$shared && a0(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), a;
  }
  _createAnimations(t, e) {
    const n = this._properties, i = [], a = t.$animations || (t.$animations = {}), o = Object.keys(e), r = Date.now();
    let d;
    for (d = o.length - 1; d >= 0; --d) {
      const c = o[d];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, e));
        continue;
      }
      const u = e[c];
      let p = a[c];
      const m = n.get(c);
      if (p)
        if (m && p.active()) {
          p.update(m, u, r);
          continue;
        } else
          p.cancel();
      if (!m || !m.duration) {
        t[c] = u;
        continue;
      }
      a[c] = p = new i0(m, t, c, u), i.push(p);
    }
    return i;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length)
      return Se.add(this._chart, n), !0;
  }
}
function a0(s, t) {
  const e = [], n = Object.keys(t);
  for (let i = 0; i < n.length; i++) {
    const a = s[n[i]];
    a && a.active() && e.push(a.wait());
  }
  return Promise.all(e);
}
function o0(s, t) {
  if (!t)
    return;
  let e = s.options;
  if (!e) {
    s.options = t;
    return;
  }
  return e.$shared && (s.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Ca(s, t) {
  const e = s && s.options || {}, n = e.reverse, i = e.min === void 0 ? t : 0, a = e.max === void 0 ? t : 0;
  return {
    start: n ? a : i,
    end: n ? i : a
  };
}
function r0(s, t, e) {
  if (e === !1)
    return !1;
  const n = Ca(s, e), i = Ca(t, e);
  return {
    top: i.end,
    right: n.end,
    bottom: i.start,
    left: n.start
  };
}
function l0(s) {
  let t, e, n, i;
  return mt(s) ? (t = s.top, e = s.right, n = s.bottom, i = s.left) : t = e = n = i = s, {
    top: t,
    right: e,
    bottom: n,
    left: i,
    disabled: s === !1
  };
}
function ir(s, t) {
  const e = [], n = s._getSortedDatasetMetas(t);
  let i, a;
  for (i = 0, a = n.length; i < a; ++i)
    e.push(n[i].index);
  return e;
}
function Ma(s, t, e, n = {}) {
  const i = s.keys, a = n.mode === "single";
  let o, r, d, c;
  if (t === null)
    return;
  let u = !1;
  for (o = 0, r = i.length; o < r; ++o) {
    if (d = +i[o], d === e) {
      if (u = !0, n.all)
        continue;
      break;
    }
    c = s.values[d], Bt(c) && (a || t === 0 || ye(t) === ye(c)) && (t += c);
  }
  return !u && !n.all ? 0 : t;
}
function d0(s, t) {
  const { iScale: e, vScale: n } = t, i = e.axis === "x" ? "x" : "y", a = n.axis === "x" ? "x" : "y", o = Object.keys(s), r = new Array(o.length);
  let d, c, u;
  for (d = 0, c = o.length; d < c; ++d)
    u = o[d], r[d] = {
      [i]: u,
      [a]: s[u]
    };
  return r;
}
function ei(s, t) {
  const e = s && s.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function c0(s, t, e) {
  return `${s.id}.${t.id}.${e.stack || e.type}`;
}
function u0(s) {
  const { min: t, max: e, minDefined: n, maxDefined: i } = s.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: i ? e : Number.POSITIVE_INFINITY
  };
}
function h0(s, t, e) {
  const n = s[t] || (s[t] = {});
  return n[e] || (n[e] = {});
}
function Da(s, t, e, n) {
  for (const i of t.getMatchingVisibleMetas(n).reverse()) {
    const a = s[i.index];
    if (e && a > 0 || !e && a < 0)
      return i.index;
  }
  return null;
}
function Ra(s, t) {
  const { chart: e, _cachedMeta: n } = s, i = e._stacks || (e._stacks = {}), { iScale: a, vScale: o, index: r } = n, d = a.axis, c = o.axis, u = c0(a, o, n), p = t.length;
  let m;
  for (let _ = 0; _ < p; ++_) {
    const g = t[_], { [d]: x, [c]: b } = g, y = g._stacks || (g._stacks = {});
    m = y[c] = h0(i, u, x), m[r] = b, m._top = Da(m, o, !0, n.type), m._bottom = Da(m, o, !1, n.type);
    const T = m._visualValues || (m._visualValues = {});
    T[r] = b;
  }
}
function si(s, t) {
  const e = s.scales;
  return Object.keys(e).filter((n) => e[n].axis === t).shift();
}
function p0(s, t) {
  return es(s, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function f0(s, t, e) {
  return es(s, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ps(s, t) {
  const e = s.controller.index, n = s.vScale && s.vScale.axis;
  if (n) {
    t = t || s._parsed;
    for (const i of t) {
      const a = i._stacks;
      if (!a || a[n] === void 0 || a[n][e] === void 0)
        return;
      delete a[n][e], a[n]._visualValues !== void 0 && a[n]._visualValues[e] !== void 0 && delete a[n]._visualValues[e];
    }
  }
}
const ni = (s) => s === "reset" || s === "none", Ta = (s, t) => t ? s : Object.assign({}, s), g0 = (s, t, e) => s && !t.hidden && t._stacked && {
  keys: ir(e, !0),
  values: null
};
class Ke {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ei(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ps(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, n = this.getDataset(), i = (p, m, _, g) => p === "x" ? m : p === "r" ? g : _, a = e.xAxisID = ut(n.xAxisID, si(t, "x")), o = e.yAxisID = ut(n.yAxisID, si(t, "y")), r = e.rAxisID = ut(n.rAxisID, si(t, "r")), d = e.indexAxis, c = e.iAxisID = i(d, a, o, r), u = e.vAxisID = i(d, o, a, r);
    e.xScale = this.getScaleForId(a), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ua(this._data, this), t._stacked && Ps(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
    if (mt(e)) {
      const i = this._cachedMeta;
      this._data = d0(e, i);
    } else if (n !== e) {
      if (n) {
        ua(n, this);
        const i = this._cachedMeta;
        Ps(i), i._parsed = [];
      }
      e && Object.isExtensible(e) && Qf(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, n = this.getDataset();
    let i = !1;
    this._dataCheck();
    const a = e._stacked;
    e._stacked = ei(e.vScale, e), e.stack !== n.stack && (i = !0, Ps(e), e.stack = n.stack), this._resyncElements(t), (i || a !== e._stacked) && (Ra(this, e._parsed), e._stacked = ei(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: i } = this, { iScale: a, _stacked: o } = n, r = a.axis;
    let d = t === 0 && e === i.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], u, p, m;
    if (this._parsing === !1)
      n._parsed = i, n._sorted = !0, m = i;
    else {
      Tt(i[t]) ? m = this.parseArrayData(n, i, t, e) : mt(i[t]) ? m = this.parseObjectData(n, i, t, e) : m = this.parsePrimitiveData(n, i, t, e);
      const _ = () => p[r] === null || c && p[r] < c[r];
      for (u = 0; u < e; ++u)
        n._parsed[u + t] = p = m[u], d && (_() && (d = !1), c = p);
      n._sorted = d;
    }
    o && Ra(this, m);
  }
  parsePrimitiveData(t, e, n, i) {
    const { iScale: a, vScale: o } = t, r = a.axis, d = o.axis, c = a.getLabels(), u = a === o, p = new Array(i);
    let m, _, g;
    for (m = 0, _ = i; m < _; ++m)
      g = m + n, p[m] = {
        [r]: u || a.parse(c[g], g),
        [d]: o.parse(e[g], g)
      };
    return p;
  }
  parseArrayData(t, e, n, i) {
    const { xScale: a, yScale: o } = t, r = new Array(i);
    let d, c, u, p;
    for (d = 0, c = i; d < c; ++d)
      u = d + n, p = e[u], r[d] = {
        x: a.parse(p[0], u),
        y: o.parse(p[1], u)
      };
    return r;
  }
  parseObjectData(t, e, n, i) {
    const { xScale: a, yScale: o } = t, { xAxisKey: r = "x", yAxisKey: d = "y" } = this._parsing, c = new Array(i);
    let u, p, m, _;
    for (u = 0, p = i; u < p; ++u)
      m = u + n, _ = e[m], c[u] = {
        x: a.parse(Qe(_, r), m),
        y: o.parse(Qe(_, d), m)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const i = this.chart, a = this._cachedMeta, o = e[t.axis], r = {
      keys: ir(i, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Ma(r, o, a.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, e, n, i) {
    const a = n[e.axis];
    let o = a === null ? NaN : a;
    const r = i && n._stacks[e.axis];
    i && r && (i.values = r, o = Ma(i, a, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
  }
  getMinMax(t, e) {
    const n = this._cachedMeta, i = n._parsed, a = n._sorted && t === n.iScale, o = i.length, r = this._getOtherScale(t), d = g0(e, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: p } = u0(r);
    let m, _;
    function g() {
      _ = i[m];
      const x = _[r.axis];
      return !Bt(_[t.axis]) || u > x || p < x;
    }
    for (m = 0; m < o && !(!g() && (this.updateRangeFromParsed(c, t, _, d), a)); ++m)
      ;
    if (a) {
      for (m = o - 1; m >= 0; --m)
        if (!g()) {
          this.updateRangeFromParsed(c, t, _, d);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, n = [];
    let i, a, o;
    for (i = 0, a = e.length; i < a; ++i)
      o = e[i][t.axis], Bt(o) && n.push(o);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = e.iScale, i = e.vScale, a = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(a[n.axis]) : "",
      value: i ? "" + i.getLabelForValue(a[i.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = l0(ut(this.options.clip, r0(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, n = this._cachedMeta, i = n.data || [], a = e.chartArea, o = [], r = this._drawStart || 0, d = this._drawCount || i.length - r, c = this.options.drawActiveElementsOnTop;
    let u;
    for (n.dataset && n.dataset.draw(t, a, r, d), u = r; u < r + d; ++u) {
      const p = i[u];
      p.hidden || (p.active && c ? o.push(p) : p.draw(t, a));
    }
    for (u = 0; u < o.length; ++u)
      o[u].draw(t, a);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const i = this.getDataset();
    let a;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      a = o.$context || (o.$context = f0(this.getContext(), t, o)), a.parsed = this.getParsed(t), a.raw = i.data[t], a.index = a.dataIndex = t;
    } else
      a = this.$context || (this.$context = p0(this.chart.getContext(), this.index)), a.dataset = i, a.index = a.datasetIndex = this.index;
    return a.active = !!e, a.mode = n, a;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const i = e === "active", a = this._cachedDataOpts, o = t + "-" + e, r = a[o], d = this.enableOptionSharing && Xs(n);
    if (r)
      return Ta(r, d);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), p = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], m = c.getOptionScopes(this.getDataset(), u), _ = Object.keys(Rt.elements[t]), g = () => this.getContext(n, i, e), x = c.resolveNamedOptions(m, _, g, p);
    return x.$shared && (x.$shared = d, a[o] = Object.freeze(Ta(x, d))), x;
  }
  _resolveAnimations(t, e, n) {
    const i = this.chart, a = this._cachedDataOpts, o = `animation-${e}`, r = a[o];
    if (r)
      return r;
    let d;
    if (i.options.animation !== !1) {
      const u = this.chart.config, p = u.datasetAnimationScopeKeys(this._type, e), m = u.getOptionScopes(this.getDataset(), p);
      d = u.createResolver(m, this.getContext(t, n, e));
    }
    const c = new nr(i, d && d.animations);
    return d && d._cacheable && (a[o] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ni(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e), i = this._sharedOptions, a = this.getSharedOptions(n), o = this.includeOptions(e, a) || a !== i;
    return this.updateSharedOptions(a, e, n), {
      sharedOptions: a,
      includeOptions: o
    };
  }
  updateElement(t, e, n, i) {
    ni(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !ni(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, i) {
    t.active = i;
    const a = this.getStyle(e, i);
    this._resolveAnimations(e, n, i).update(t, {
      options: !i && this.getSharedOptions(a) || a
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, n = this._cachedMeta.data;
    for (const [r, d, c] of this._syncList)
      this[r](d, c);
    this._syncList = [];
    const i = n.length, a = e.length, o = Math.min(a, i);
    o && this.parse(0, o), a > i ? this._insertElements(i, a - i, t) : a < i && this._removeElements(a, i - a);
  }
  _insertElements(t, e, n = !0) {
    const i = this._cachedMeta, a = i.data, o = t + e;
    let r;
    const d = (c) => {
      for (c.length += e, r = c.length - 1; r >= o; r--)
        c[r] = c[r - e];
    };
    for (d(a), r = t; r < o; ++r)
      a[r] = new this.dataElementType();
    this._parsing && d(i._parsed), this.parse(t, e), n && this.updateElements(a, t, e, "reset");
  }
  updateElements(t, e, n, i) {
  }
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const i = n._parsed.splice(t, e);
      n._stacked && Ps(n, i);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, n, i] = t;
      this[e](n, i);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
et(Ke, "defaults", {}), et(Ke, "datasetElementType", null), et(Ke, "dataElementType", null);
function m0(s, t) {
  if (!s._cache.$bar) {
    const e = s.getMatchingVisibleMetas(t);
    let n = [];
    for (let i = 0, a = e.length; i < a; i++)
      n = n.concat(e[i].controller.getAllParsedValues(s));
    s._cache.$bar = Bo(n.sort((i, a) => i - a));
  }
  return s._cache.$bar;
}
function _0(s) {
  const t = s.iScale, e = m0(t, s.type);
  let n = t._length, i, a, o, r;
  const d = () => {
    o === 32767 || o === -32768 || (Xs(r) && (n = Math.min(n, Math.abs(o - r) || n)), r = o);
  };
  for (i = 0, a = e.length; i < a; ++i)
    o = t.getPixelForValue(e[i]), d();
  for (r = void 0, i = 0, a = t.ticks.length; i < a; ++i)
    o = t.getPixelForTick(i), d();
  return n;
}
function x0(s, t, e, n) {
  const i = e.barThickness;
  let a, o;
  return xt(i) ? (a = t.min * e.categoryPercentage, o = e.barPercentage) : (a = i * n, o = 1), {
    chunk: a / n,
    ratio: o,
    start: t.pixels[s] - a / 2
  };
}
function y0(s, t, e, n) {
  const i = t.pixels, a = i[s];
  let o = s > 0 ? i[s - 1] : null, r = s < i.length - 1 ? i[s + 1] : null;
  const d = e.categoryPercentage;
  o === null && (o = a - (r === null ? t.end - t.start : r - a)), r === null && (r = a + a - o);
  const c = a - (a - Math.min(o, r)) / 2 * d;
  return {
    chunk: Math.abs(r - o) / 2 * d / n,
    ratio: e.barPercentage,
    start: c
  };
}
function b0(s, t, e, n) {
  const i = e.parse(s[0], n), a = e.parse(s[1], n), o = Math.min(i, a), r = Math.max(i, a);
  let d = o, c = r;
  Math.abs(o) > Math.abs(r) && (d = r, c = o), t[e.axis] = c, t._custom = {
    barStart: d,
    barEnd: c,
    start: i,
    end: a,
    min: o,
    max: r
  };
}
function ar(s, t, e, n) {
  return Tt(s) ? b0(s, t, e, n) : t[e.axis] = e.parse(s, n), t;
}
function Pa(s, t, e, n) {
  const i = s.iScale, a = s.vScale, o = i.getLabels(), r = i === a, d = [];
  let c, u, p, m;
  for (c = e, u = e + n; c < u; ++c)
    m = t[c], p = {}, p[i.axis] = r || i.parse(o[c], c), d.push(ar(m, p, a, c));
  return d;
}
function ii(s) {
  return s && s.barStart !== void 0 && s.barEnd !== void 0;
}
function v0(s, t, e) {
  return s !== 0 ? ye(s) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function k0(s) {
  let t, e, n, i, a;
  return s.horizontal ? (t = s.base > s.x, e = "left", n = "right") : (t = s.base < s.y, e = "bottom", n = "top"), t ? (i = "end", a = "start") : (i = "start", a = "end"), {
    start: e,
    end: n,
    reverse: t,
    top: i,
    bottom: a
  };
}
function w0(s, t, e, n) {
  let i = t.borderSkipped;
  const a = {};
  if (!i) {
    s.borderSkipped = a;
    return;
  }
  if (i === !0) {
    s.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: o, end: r, reverse: d, top: c, bottom: u } = k0(s);
  i === "middle" && e && (s.enableBorderRadius = !0, (e._top || 0) === n ? i = c : (e._bottom || 0) === n ? i = u : (a[Oa(u, o, r, d)] = !0, i = c)), a[Oa(i, o, r, d)] = !0, s.borderSkipped = a;
}
function Oa(s, t, e, n) {
  return n ? (s = S0(s, t, e), s = Aa(s, e, t)) : s = Aa(s, t, e), s;
}
function S0(s, t, e) {
  return s === t ? e : s === e ? t : s;
}
function Aa(s, t, e) {
  return s === "start" ? t : s === "end" ? e : s;
}
function $0(s, { inflateAmount: t }, e) {
  s.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Sn extends Ke {
  parsePrimitiveData(t, e, n, i) {
    return Pa(t, e, n, i);
  }
  parseArrayData(t, e, n, i) {
    return Pa(t, e, n, i);
  }
  parseObjectData(t, e, n, i) {
    const { iScale: a, vScale: o } = t, { xAxisKey: r = "x", yAxisKey: d = "y" } = this._parsing, c = a.axis === "x" ? r : d, u = o.axis === "x" ? r : d, p = [];
    let m, _, g, x;
    for (m = n, _ = n + i; m < _; ++m)
      x = e[m], g = {}, g[a.axis] = a.parse(Qe(x, c), m), p.push(ar(Qe(x, u), g, o, m));
    return p;
  }
  updateRangeFromParsed(t, e, n, i) {
    super.updateRangeFromParsed(t, e, n, i);
    const a = n._custom;
    a && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: n, vScale: i } = e, a = this.getParsed(t), o = a._custom, r = ii(o) ? "[" + o.start + ", " + o.end + "]" : "" + i.getLabelForValue(a[i.axis]);
    return {
      label: "" + n.getLabelForValue(a[n.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, n, i) {
    const a = i === "reset", { index: o, _cachedMeta: { vScale: r } } = this, d = r.getBasePixel(), c = r.isHorizontal(), u = this._getRuler(), { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, i);
    for (let _ = e; _ < e + n; _++) {
      const g = this.getParsed(_), x = a || xt(g[r.axis]) ? {
        base: d,
        head: d
      } : this._calculateBarValuePixels(_), b = this._calculateBarIndexPixels(_, u), y = (g._stacks || {})[r.axis], T = {
        horizontal: c,
        base: x.base,
        enableBorderRadius: !y || ii(g._custom) || o === y._top || o === y._bottom,
        x: c ? x.head : b.center,
        y: c ? b.center : x.head,
        height: c ? b.size : Math.abs(x.size),
        width: c ? Math.abs(x.size) : b.size
      };
      m && (T.options = p || this.resolveDataElementOptions(_, t[_].active ? "active" : i));
      const B = T.options || t[_].options;
      w0(T, B, y, o), $0(T, B, u.ratio), this.updateElement(t[_], _, T, i);
    }
  }
  _getStacks(t, e) {
    const { iScale: n } = this._cachedMeta, i = n.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), a = n.options.stacked, o = [], r = this._cachedMeta.controller.getParsed(e), d = r && r[n.axis], c = (u) => {
      const p = u._parsed.find((_) => _[n.axis] === d), m = p && p[u.vScale.axis];
      if (xt(m) || isNaN(m))
        return !0;
    };
    for (const u of i)
      if (!(e !== void 0 && c(u)) && ((a === !1 || o.indexOf(u.stack) === -1 || a === void 0 && u.stack === void 0) && o.push(u.stack), u.index === t))
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales, e = this.chart.options.indexAxis;
    return Object.keys(t).filter((n) => t[n].axis === e).shift();
  }
  _getAxis() {
    const t = {}, e = this.getFirstScaleIdForIndexAxis();
    for (const n of this.chart.data.datasets)
      t[ut(this.chart.options.indexAxis === "x" ? n.xAxisID : n.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, n) {
    const i = this._getStacks(t, n), a = e !== void 0 ? i.indexOf(e) : -1;
    return a === -1 ? i.length - 1 : a;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, n = e.iScale, i = [];
    let a, o;
    for (a = 0, o = e.data.length; a < o; ++a)
      i.push(n.getPixelForValue(this.getParsed(a)[n.axis], a));
    const r = t.barThickness;
    return {
      min: r || _0(e),
      pixels: i,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: n, index: i }, options: { base: a, minBarLength: o } } = this, r = a || 0, d = this.getParsed(t), c = d._custom, u = ii(c);
    let p = d[e.axis], m = 0, _ = n ? this.applyStack(e, d, n) : p, g, x;
    _ !== p && (m = _ - p, _ = p), u && (p = c.barStart, _ = c.barEnd - c.barStart, p !== 0 && ye(p) !== ye(c.barEnd) && (m = 0), m += p);
    const b = !xt(a) && !u ? a : m;
    let y = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(m + _) : g = y, x = g - y, Math.abs(x) < o) {
      x = v0(x, e, r) * o, p === r && (y -= x / 2);
      const T = e.getPixelForDecimal(0), B = e.getPixelForDecimal(1), F = Math.min(T, B), O = Math.max(T, B);
      y = Math.max(Math.min(y, O), F), g = y + x, n && !u && (d._stacks[e.axis]._visualValues[i] = e.getValueForPixel(g) - e.getValueForPixel(y));
    }
    if (y === e.getPixelForValue(r)) {
      const T = ye(x) * e.getLineWidthForValue(r) / 2;
      y += T, x -= T;
    }
    return {
      size: x,
      base: y,
      head: g,
      center: g + x / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const n = e.scale, i = this.options, a = i.skipNull, o = ut(i.maxBarThickness, 1 / 0);
    let r, d;
    const c = this._getAxisCount();
    if (e.grouped) {
      const u = a ? this._getStackCount(t) : e.stackCount, p = i.barThickness === "flex" ? y0(t, e, i, u * c) : x0(t, e, i, u * c), m = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, _ = this._getAxis().indexOf(ut(m, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0) + _;
      r = p.start + p.chunk * g + p.chunk / 2, d = Math.min(o, p.chunk * p.ratio);
    } else
      r = n.getPixelForValue(this.getParsed(t)[n.axis], t), d = Math.min(o, e.min * e.ratio);
    return {
      base: r - d / 2,
      head: r + d / 2,
      center: r,
      size: d
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, n = t.data, i = n.length;
    let a = 0;
    for (; a < i; ++a)
      this.getParsed(a)[e.axis] !== null && !n[a].hidden && n[a].draw(this._ctx);
  }
}
et(Sn, "id", "bar"), et(Sn, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), et(Sn, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
function C0(s, t, e) {
  let n = 1, i = 1, a = 0, o = 0;
  if (t < $t) {
    const r = s, d = r + t, c = Math.cos(r), u = Math.sin(r), p = Math.cos(d), m = Math.sin(d), _ = (B, F, O) => Qs(B, r, d, !0) ? 1 : Math.max(F, F * e, O, O * e), g = (B, F, O) => Qs(B, r, d, !0) ? -1 : Math.min(F, F * e, O, O * e), x = _(0, c, p), b = _(At, u, m), y = g(bt, c, p), T = g(bt + At, u, m);
    n = (x - y) / 2, i = (b - T) / 2, a = -(x + y) / 2, o = -(b + T) / 2;
  }
  return {
    ratioX: n,
    ratioY: i,
    offsetX: a,
    offsetY: o
  };
}
class Is extends Ke {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const n = this.getDataset().data, i = this._cachedMeta;
    if (this._parsing === !1)
      i._parsed = n;
    else {
      let a = (d) => +n[d];
      if (mt(n[t])) {
        const { key: d = "value" } = this._parsing;
        a = (c) => +Qe(n[c], d);
      }
      let o, r;
      for (o = t, r = t + e; o < r; ++o)
        i._parsed[o] = a(o);
    }
  }
  _getRotation() {
    return Me(this.options.rotation - 90);
  }
  _getCircumference() {
    return Me(this.options.circumference);
  }
  _getRotationExtents() {
    let t = $t, e = -$t;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const i = this.chart.getDatasetMeta(n).controller, a = i._getRotation(), o = i._getCircumference();
        t = Math.min(t, a), e = Math.max(e, a + o);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: n } = e, i = this._cachedMeta, a = i.data, o = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing, r = Math.max((Math.min(n.width, n.height) - o) / 2, 0), d = Math.min(Ef(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: p } = this._getRotationExtents(), { ratioX: m, ratioY: _, offsetX: g, offsetY: x } = C0(p, u, d), b = (n.width - o) / m, y = (n.height - o) / _, T = Math.max(Math.min(b, y) / 2, 0), B = Lo(this.options.radius, T), F = Math.max(B * d, 0), O = (B - F) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * B, this.offsetY = x * B, i.total = this.calculateTotal(), this.outerRadius = B - O * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - O * c, 0), this.updateElements(a, 0, a.length, t);
  }
  _circumference(t, e) {
    const n = this.options, i = this._cachedMeta, a = this._getCircumference();
    return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * a / $t);
  }
  updateElements(t, e, n, i) {
    const a = i === "reset", o = this.chart, r = o.chartArea, c = o.options.animation, u = (r.left + r.right) / 2, p = (r.top + r.bottom) / 2, m = a && c.animateScale, _ = m ? 0 : this.innerRadius, g = m ? 0 : this.outerRadius, { sharedOptions: x, includeOptions: b } = this._getSharedOptions(e, i);
    let y = this._getRotation(), T;
    for (T = 0; T < e; ++T)
      y += this._circumference(T, a);
    for (T = e; T < e + n; ++T) {
      const B = this._circumference(T, a), F = t[T], O = {
        x: u + this.offsetX,
        y: p + this.offsetY,
        startAngle: y,
        endAngle: y + B,
        circumference: B,
        outerRadius: g,
        innerRadius: _
      };
      b && (O.options = x || this.resolveDataElementOptions(T, F.active ? "active" : i)), y += B, this.updateElement(F, T, O, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let n = 0, i;
    for (i = 0; i < e.length; i++) {
      const a = t._parsed[i];
      a !== null && !isNaN(a) && this.chart.getDataVisibility(i) && !e[i].hidden && (n += Math.abs(a));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? $t * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = this.chart, i = n.data.labels || [], a = Ii(e._parsed[t], n.options.locale);
    return {
      label: i[t] || "",
      value: a
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let i, a, o, r, d;
    if (!t) {
      for (i = 0, a = n.data.datasets.length; i < a; ++i)
        if (n.isDatasetVisible(i)) {
          o = n.getDatasetMeta(i), t = o.data, r = o.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (i = 0, a = t.length; i < a; ++i)
      d = r.resolveDataElementOptions(i), d.borderAlign !== "inner" && (e = Math.max(e, d.borderWidth || 0, d.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, i = t.length; n < i; ++n) {
      const a = this.resolveDataElementOptions(n);
      e = Math.max(e, a.offset || 0, a.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(ut(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
et(Is, "id", "doughnut"), et(Is, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), et(Is, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), et(Is, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data, { labels: { pointStyle: n, textAlign: i, color: a, useBorderRadius: o, borderRadius: r } } = t.legend.options;
          return e.labels.length && e.datasets.length ? e.labels.map((d, c) => {
            const p = t.getDatasetMeta(0).controller.getStyle(c);
            return {
              text: d,
              fillStyle: p.backgroundColor,
              fontColor: a,
              hidden: !t.getDataVisibility(c),
              lineDash: p.borderDash,
              lineDashOffset: p.borderDashOffset,
              lineJoin: p.borderJoinStyle,
              lineWidth: p.borderWidth,
              strokeStyle: p.borderColor,
              textAlign: i,
              pointStyle: n,
              borderRadius: o && (r || p.borderRadius),
              index: c
            };
          }) : [];
        }
      },
      onClick(t, e, n) {
        n.chart.toggleDataVisibility(e.index), n.chart.update();
      }
    }
  }
});
class $n extends Ke {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: n, data: i = [], _dataset: a } = e, o = this.chart._animationsDisabled;
    let { start: r, count: d } = tg(e, i, o);
    this._drawStart = r, this._drawCount = d, eg(e) && (r = 0, d = i.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!a._decimated, n.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(n, void 0, {
      animated: !o,
      options: c
    }, t), this.updateElements(i, r, d, t);
  }
  updateElements(t, e, n, i) {
    const a = i === "reset", { iScale: o, vScale: r, _stacked: d, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: p } = this._getSharedOptions(e, i), m = o.axis, _ = r.axis, { spanGaps: g, segment: x } = this.options, b = Ks(g) ? g : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || a || i === "none", T = e + n, B = t.length;
    let F = e > 0 && this.getParsed(e - 1);
    for (let O = 0; O < B; ++O) {
      const j = t[O], D = y ? j : {};
      if (O < e || O >= T) {
        D.skip = !0;
        continue;
      }
      const S = this.getParsed(O), w = xt(S[_]), V = D[m] = o.getPixelForValue(S[m], O), L = D[_] = a || w ? r.getBasePixel() : r.getPixelForValue(d ? this.applyStack(r, S, d) : S[_], O);
      D.skip = isNaN(V) || isNaN(L) || w, D.stop = O > 0 && Math.abs(S[m] - F[m]) > b, x && (D.parsed = S, D.raw = c.data[O]), p && (D.options = u || this.resolveDataElementOptions(O, j.active ? "active" : i)), y || this.updateElement(j, O, D, i), F = S;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, n = e.options && e.options.borderWidth || 0, i = t.data || [];
    if (!i.length)
      return n;
    const a = i[0].size(this.resolveDataElementOptions(0)), o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(n, a, o) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
et($n, "id", "line"), et($n, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), et($n, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
function We() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Hi {
  constructor(t) {
    et(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Hi.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return We();
  }
  parse() {
    return We();
  }
  format() {
    return We();
  }
  add() {
    return We();
  }
  diff() {
    return We();
  }
  startOf() {
    return We();
  }
  endOf() {
    return We();
  }
}
var M0 = {
  _date: Hi
};
function D0(s, t, e, n) {
  const { controller: i, data: a, _sorted: o } = s, r = i._cachedMeta.iScale, d = s.dataset && s.dataset.options ? s.dataset.options.spanGaps : null;
  if (r && t === r.axis && t !== "r" && o && a.length) {
    const c = r._reversePixels ? Xf : Ge;
    if (n) {
      if (i._sharedOptions) {
        const u = a[0], p = typeof u.getRange == "function" && u.getRange(t);
        if (p) {
          const m = c(a, t, e - p), _ = c(a, t, e + p);
          return {
            lo: m.lo,
            hi: _.hi
          };
        }
      }
    } else {
      const u = c(a, t, e);
      if (d) {
        const { vScale: p } = i._cachedMeta, { _parsed: m } = s, _ = m.slice(0, u.lo + 1).reverse().findIndex((x) => !xt(x[p.axis]));
        u.lo -= Math.max(0, _);
        const g = m.slice(u.hi).findIndex((x) => !xt(x[p.axis]));
        u.hi += Math.max(0, g);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: a.length - 1
  };
}
function Nn(s, t, e, n, i) {
  const a = s.getSortedVisibleDatasetMetas(), o = e[t];
  for (let r = 0, d = a.length; r < d; ++r) {
    const { index: c, data: u } = a[r], { lo: p, hi: m } = D0(a[r], t, o, i);
    for (let _ = p; _ <= m; ++_) {
      const g = u[_];
      g.skip || n(g, c, _);
    }
  }
}
function R0(s) {
  const t = s.indexOf("x") !== -1, e = s.indexOf("y") !== -1;
  return function(n, i) {
    const a = t ? Math.abs(n.x - i.x) : 0, o = e ? Math.abs(n.y - i.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
  };
}
function ai(s, t, e, n, i) {
  const a = [];
  return !i && !s.isPointInArea(t) || Nn(s, e, t, function(r, d, c) {
    !i && !Js(r, s.chartArea, 0) || r.inRange(t.x, t.y, n) && a.push({
      element: r,
      datasetIndex: d,
      index: c
    });
  }, !0), a;
}
function T0(s, t, e, n) {
  let i = [];
  function a(o, r, d) {
    const { startAngle: c, endAngle: u } = o.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: p } = Fo(o, {
      x: t.x,
      y: t.y
    });
    Qs(p, c, u) && i.push({
      element: o,
      datasetIndex: r,
      index: d
    });
  }
  return Nn(s, e, t, a), i;
}
function P0(s, t, e, n, i, a) {
  let o = [];
  const r = R0(e);
  let d = Number.POSITIVE_INFINITY;
  function c(u, p, m) {
    const _ = u.inRange(t.x, t.y, i);
    if (n && !_)
      return;
    const g = u.getCenterPoint(i);
    if (!(!!a || s.isPointInArea(g)) && !_)
      return;
    const b = r(t, g);
    b < d ? (o = [
      {
        element: u,
        datasetIndex: p,
        index: m
      }
    ], d = b) : b === d && o.push({
      element: u,
      datasetIndex: p,
      index: m
    });
  }
  return Nn(s, e, t, c), o;
}
function oi(s, t, e, n, i, a) {
  return !a && !s.isPointInArea(t) ? [] : e === "r" && !n ? T0(s, t, e, i) : P0(s, t, e, n, i, a);
}
function Ea(s, t, e, n, i) {
  const a = [], o = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Nn(s, e, t, (d, c, u) => {
    d[o] && d[o](t[e], i) && (a.push({
      element: d,
      datasetIndex: c,
      index: u
    }), r = r || d.inRange(t.x, t.y, i));
  }), n && !r ? [] : a;
}
var O0 = {
  modes: {
    index(s, t, e, n) {
      const i = Ue(t, s), a = e.axis || "x", o = e.includeInvisible || !1, r = e.intersect ? ai(s, i, a, n, o) : oi(s, i, a, !1, n, o), d = [];
      return r.length ? (s.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = r[0].index, p = c.data[u];
        p && !p.skip && d.push({
          element: p,
          datasetIndex: c.index,
          index: u
        });
      }), d) : [];
    },
    dataset(s, t, e, n) {
      const i = Ue(t, s), a = e.axis || "xy", o = e.includeInvisible || !1;
      let r = e.intersect ? ai(s, i, a, n, o) : oi(s, i, a, !1, n, o);
      if (r.length > 0) {
        const d = r[0].datasetIndex, c = s.getDatasetMeta(d).data;
        r = [];
        for (let u = 0; u < c.length; ++u)
          r.push({
            element: c[u],
            datasetIndex: d,
            index: u
          });
      }
      return r;
    },
    point(s, t, e, n) {
      const i = Ue(t, s), a = e.axis || "xy", o = e.includeInvisible || !1;
      return ai(s, i, a, n, o);
    },
    nearest(s, t, e, n) {
      const i = Ue(t, s), a = e.axis || "xy", o = e.includeInvisible || !1;
      return oi(s, i, a, e.intersect, n, o);
    },
    x(s, t, e, n) {
      const i = Ue(t, s);
      return Ea(s, i, "x", e.intersect, n);
    },
    y(s, t, e, n) {
      const i = Ue(t, s);
      return Ea(s, i, "y", e.intersect, n);
    }
  }
};
const or = [
  "left",
  "top",
  "right",
  "bottom"
];
function Os(s, t) {
  return s.filter((e) => e.pos === t);
}
function La(s, t) {
  return s.filter((e) => or.indexOf(e.pos) === -1 && e.box.axis === t);
}
function As(s, t) {
  return s.sort((e, n) => {
    const i = t ? n : e, a = t ? e : n;
    return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
  });
}
function A0(s) {
  const t = [];
  let e, n, i, a, o, r;
  for (e = 0, n = (s || []).length; e < n; ++e)
    i = s[e], { position: a, options: { stack: o, stackWeight: r = 1 } } = i, t.push({
      index: e,
      box: i,
      pos: a,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: o && a + o,
      stackWeight: r
    });
  return t;
}
function E0(s) {
  const t = {};
  for (const e of s) {
    const { stack: n, pos: i, stackWeight: a } = e;
    if (!n || !or.includes(i))
      continue;
    const o = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    o.count++, o.weight += a;
  }
  return t;
}
function L0(s, t) {
  const e = E0(s), { vBoxMaxWidth: n, hBoxMaxHeight: i } = t;
  let a, o, r;
  for (a = 0, o = s.length; a < o; ++a) {
    r = s[a];
    const { fullSize: d } = r.box, c = e[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * n : d && t.availableWidth, r.height = i) : (r.width = n, r.height = u ? u * i : d && t.availableHeight);
  }
  return e;
}
function z0(s) {
  const t = A0(s), e = As(t.filter((c) => c.box.fullSize), !0), n = As(Os(t, "left"), !0), i = As(Os(t, "right")), a = As(Os(t, "top"), !0), o = As(Os(t, "bottom")), r = La(t, "x"), d = La(t, "y");
  return {
    fullSize: e,
    leftAndTop: n.concat(a),
    rightAndBottom: i.concat(d).concat(o).concat(r),
    chartArea: Os(t, "chartArea"),
    vertical: n.concat(i).concat(d),
    horizontal: a.concat(o).concat(r)
  };
}
function za(s, t, e, n) {
  return Math.max(s[e], t[e]) + Math.max(s[n], t[n]);
}
function rr(s, t) {
  s.top = Math.max(s.top, t.top), s.left = Math.max(s.left, t.left), s.bottom = Math.max(s.bottom, t.bottom), s.right = Math.max(s.right, t.right);
}
function I0(s, t, e, n) {
  const { pos: i, box: a } = e, o = s.maxPadding;
  if (!mt(i)) {
    e.size && (s[i] -= e.size);
    const p = n[e.stack] || {
      size: 0,
      count: 1
    };
    p.size = Math.max(p.size, e.horizontal ? a.height : a.width), e.size = p.size / p.count, s[i] += e.size;
  }
  a.getPadding && rr(o, a.getPadding());
  const r = Math.max(0, t.outerWidth - za(o, s, "left", "right")), d = Math.max(0, t.outerHeight - za(o, s, "top", "bottom")), c = r !== s.w, u = d !== s.h;
  return s.w = r, s.h = d, e.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function F0(s) {
  const t = s.maxPadding;
  function e(n) {
    const i = Math.max(t[n] - s[n], 0);
    return s[n] += i, i;
  }
  s.y += e("top"), s.x += e("left"), e("right"), e("bottom");
}
function V0(s, t) {
  const e = t.maxPadding;
  function n(i) {
    const a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((o) => {
      a[o] = Math.max(t[o], e[o]);
    }), a;
  }
  return n(s ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Fs(s, t, e, n) {
  const i = [];
  let a, o, r, d, c, u;
  for (a = 0, o = s.length, c = 0; a < o; ++a) {
    r = s[a], d = r.box, d.update(r.width || t.w, r.height || t.h, V0(r.horizontal, t));
    const { same: p, other: m } = I0(t, e, r, n);
    c |= p && i.length, u = u || m, d.fullSize || i.push(r);
  }
  return c && Fs(i, t, e, n) || u;
}
function xn(s, t, e, n, i) {
  s.top = e, s.left = t, s.right = t + n, s.bottom = e + i, s.width = n, s.height = i;
}
function Ia(s, t, e, n) {
  const i = e.padding;
  let { x: a, y: o } = t;
  for (const r of s) {
    const d = r.box, c = n[r.stack] || {
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const p = t.w * u, m = c.size || d.height;
      Xs(c.start) && (o = c.start), d.fullSize ? xn(d, i.left, o, e.outerWidth - i.right - i.left, m) : xn(d, t.left + c.placed, o, p, m), c.start = o, c.placed += p, o = d.bottom;
    } else {
      const p = t.h * u, m = c.size || d.width;
      Xs(c.start) && (a = c.start), d.fullSize ? xn(d, a, i.top, m, e.outerHeight - i.bottom - i.top) : xn(d, a, t.top + c.placed, m, p), c.start = a, c.placed += p, a = d.right;
    }
  }
  t.x = a, t.y = o;
}
var se = {
  addBox(s, t) {
    s.boxes || (s.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, s.boxes.push(t);
  },
  removeBox(s, t) {
    const e = s.boxes ? s.boxes.indexOf(t) : -1;
    e !== -1 && s.boxes.splice(e, 1);
  },
  configure(s, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(s, t, e, n) {
    if (!s)
      return;
    const i = ne(s.options.layout.padding), a = Math.max(t - i.width, 0), o = Math.max(e - i.height, 0), r = z0(s.boxes), d = r.vertical, c = r.horizontal;
    yt(s.boxes, (x) => {
      typeof x.beforeLayout == "function" && x.beforeLayout();
    });
    const u = d.reduce((x, b) => b.box.options && b.box.options.display === !1 ? x : x + 1, 0) || 1, p = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: i,
      availableWidth: a,
      availableHeight: o,
      vBoxMaxWidth: a / 2 / u,
      hBoxMaxHeight: o / 2
    }), m = Object.assign({}, i);
    rr(m, ne(n));
    const _ = Object.assign({
      maxPadding: m,
      w: a,
      h: o,
      x: i.left,
      y: i.top
    }, i), g = L0(d.concat(c), p);
    Fs(r.fullSize, _, p, g), Fs(d, _, p, g), Fs(c, _, p, g) && Fs(d, _, p, g), F0(_), Ia(r.leftAndTop, _, p, g), _.x += _.w, _.y += _.h, Ia(r.rightAndBottom, _, p, g), s.chartArea = {
      left: _.left,
      top: _.top,
      right: _.left + _.w,
      bottom: _.top + _.h,
      height: _.h,
      width: _.w
    }, yt(r.chartArea, (x) => {
      const b = x.box;
      Object.assign(b, s.chartArea), b.update(_.w, _.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class lr {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {
  }
  removeEventListener(t, e, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, i) {
    return e = Math.max(0, e || t.width), n = n || t.height, {
      width: e,
      height: Math.max(0, i ? Math.floor(e / i) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class B0 extends lr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Cn = "$chartjs", j0 = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Fa = (s) => s === null || s === "";
function q0(s, t) {
  const e = s.style, n = s.getAttribute("height"), i = s.getAttribute("width");
  if (s[Cn] = {
    initial: {
      height: n,
      width: i,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Fa(i)) {
    const a = va(s, "width");
    a !== void 0 && (s.width = a);
  }
  if (Fa(n))
    if (s.style.height === "")
      s.height = s.width / (t || 2);
    else {
      const a = va(s, "height");
      a !== void 0 && (s.height = a);
    }
  return s;
}
const dr = Hg ? {
  passive: !0
} : !1;
function N0(s, t, e) {
  s && s.addEventListener(t, e, dr);
}
function H0(s, t, e) {
  s && s.canvas && s.canvas.removeEventListener(t, e, dr);
}
function W0(s, t) {
  const e = j0[s.type] || s.type, { x: n, y: i } = Ue(s, t);
  return {
    type: e,
    chart: t,
    native: s,
    x: n !== void 0 ? n : null,
    y: i !== void 0 ? i : null
  };
}
function In(s, t) {
  for (const e of s)
    if (e === t || e.contains(t))
      return !0;
}
function U0(s, t, e) {
  const n = s.canvas, i = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || In(r.addedNodes, n), o = o && !In(r.removedNodes, n);
    o && e();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function Y0(s, t, e) {
  const n = s.canvas, i = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || In(r.removedNodes, n), o = o && !In(r.addedNodes, n);
    o && e();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const tn = /* @__PURE__ */ new Map();
let Va = 0;
function cr() {
  const s = window.devicePixelRatio;
  s !== Va && (Va = s, tn.forEach((t, e) => {
    e.currentDevicePixelRatio !== s && t();
  }));
}
function G0(s, t) {
  tn.size || window.addEventListener("resize", cr), tn.set(s, t);
}
function X0(s) {
  tn.delete(s), tn.size || window.removeEventListener("resize", cr);
}
function K0(s, t, e) {
  const n = s.canvas, i = n && Ni(n);
  if (!i)
    return;
  const a = qo((r, d) => {
    const c = i.clientWidth;
    e(r, d), c < i.clientWidth && e();
  }, window), o = new ResizeObserver((r) => {
    const d = r[0], c = d.contentRect.width, u = d.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return o.observe(i), G0(s, a), o;
}
function ri(s, t, e) {
  e && e.disconnect(), t === "resize" && X0(s);
}
function Q0(s, t, e) {
  const n = s.canvas, i = qo((a) => {
    s.ctx !== null && e(W0(a, s));
  }, s);
  return N0(n, t, i), i;
}
class J0 extends lr {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (q0(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Cn])
      return !1;
    const n = e[Cn].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const o = n[a];
      xt(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
    });
    const i = n.style || {};
    return Object.keys(i).forEach((a) => {
      e.style[a] = i[a];
    }), e.width = e.width, delete e[Cn], !0;
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const i = t.$proxies || (t.$proxies = {}), o = {
      attach: U0,
      detach: Y0,
      resize: K0
    }[e] || Q0;
    i[e] = o(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}), i = n[e];
    if (!i)
      return;
    ({
      attach: ri,
      detach: ri,
      resize: ri
    }[e] || H0)(t, e, i), n[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, i) {
    return Ng(t, e, n, i);
  }
  isAttached(t) {
    const e = t && Ni(t);
    return !!(e && e.isConnected);
  }
}
function Z0(s) {
  return !qi() || typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas ? B0 : J0;
}
class oe {
  constructor() {
    et(this, "x");
    et(this, "y");
    et(this, "active", !1);
    et(this, "options");
    et(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: n
    };
  }
  hasValue() {
    return Ks(this.x) && Ks(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n)
      return this;
    const i = {};
    return t.forEach((a) => {
      i[a] = n[a] && n[a].active() ? n[a]._to : this[a];
    }), i;
  }
}
et(oe, "defaults", {}), et(oe, "defaultRoutes");
function tm(s, t) {
  const e = s.options.ticks, n = em(s), i = Math.min(e.maxTicksLimit || n, n), a = e.major.enabled ? nm(t) : [], o = a.length, r = a[0], d = a[o - 1], c = [];
  if (o > i)
    return im(t, c, a, o / i), c;
  const u = sm(a, t, i);
  if (o > 0) {
    let p, m;
    const _ = o > 1 ? Math.round((d - r) / (o - 1)) : null;
    for (yn(t, c, u, xt(_) ? 0 : r - _, r), p = 0, m = o - 1; p < m; p++)
      yn(t, c, u, a[p], a[p + 1]);
    return yn(t, c, u, d, xt(_) ? t.length : d + _), c;
  }
  return yn(t, c, u), c;
}
function em(s) {
  const t = s.options.offset, e = s._tickSize(), n = s._length / e + (t ? 0 : 1), i = s._maxLength / e;
  return Math.floor(Math.min(n, i));
}
function sm(s, t, e) {
  const n = am(s), i = t.length / e;
  if (!n)
    return Math.max(i, 1);
  const a = qf(n);
  for (let o = 0, r = a.length - 1; o < r; o++) {
    const d = a[o];
    if (d > i)
      return d;
  }
  return Math.max(i, 1);
}
function nm(s) {
  const t = [];
  let e, n;
  for (e = 0, n = s.length; e < n; e++)
    s[e].major && t.push(e);
  return t;
}
function im(s, t, e, n) {
  let i = 0, a = e[0], o;
  for (n = Math.ceil(n), o = 0; o < s.length; o++)
    o === a && (t.push(s[o]), i++, a = e[i * n]);
}
function yn(s, t, e, n, i) {
  const a = ut(n, 0), o = Math.min(ut(i, s.length), s.length);
  let r = 0, d, c, u;
  for (e = Math.ceil(e), i && (d = i - n, e = d / Math.floor(d / e)), u = a; u < 0; )
    r++, u = Math.round(a + r * e);
  for (c = Math.max(a, 0); c < o; c++)
    c === u && (t.push(s[c]), r++, u = Math.round(a + r * e));
}
function am(s) {
  const t = s.length;
  let e, n;
  if (t < 2)
    return !1;
  for (n = s[0], e = 1; e < t; ++e)
    if (s[e] - s[e - 1] !== n)
      return !1;
  return n;
}
const om = (s) => s === "left" ? "right" : s === "right" ? "left" : s, Ba = (s, t, e) => t === "top" || t === "left" ? s[t] + e : s[t] - e, ja = (s, t) => Math.min(t || s, s);
function qa(s, t) {
  const e = [], n = s.length / t, i = s.length;
  let a = 0;
  for (; a < i; a += n)
    e.push(s[Math.floor(a)]);
  return e;
}
function rm(s, t, e) {
  const n = s.ticks.length, i = Math.min(t, n - 1), a = s._startPixel, o = s._endPixel, r = 1e-6;
  let d = s.getPixelForTick(i), c;
  if (!(e && (n === 1 ? c = Math.max(d - a, o - d) : t === 0 ? c = (s.getPixelForTick(1) - d) / 2 : c = (d - s.getPixelForTick(i - 1)) / 2, d += i < t ? c : -c, d < a - r || d > o + r)))
    return d;
}
function lm(s, t) {
  yt(s, (e) => {
    const n = e.gc, i = n.length / 2;
    let a;
    if (i > t) {
      for (a = 0; a < i; ++a)
        delete e.data[n[a]];
      n.splice(0, i);
    }
  });
}
function Es(s) {
  return s.drawTicks ? s.tickLength : 0;
}
function Na(s, t) {
  if (!s.display)
    return 0;
  const e = Vt(s.font, t), n = ne(s.padding);
  return (Tt(s.text) ? s.text.length : 1) * e.lineHeight + n.height;
}
function dm(s, t) {
  return es(s, {
    scale: t,
    type: "scale"
  });
}
function cm(s, t, e) {
  return es(s, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function um(s, t, e) {
  let n = Li(s);
  return (e && t !== "right" || !e && t === "right") && (n = om(n)), n;
}
function hm(s, t, e, n) {
  const { top: i, left: a, bottom: o, right: r, chart: d } = s, { chartArea: c, scales: u } = d;
  let p = 0, m, _, g;
  const x = o - i, b = r - a;
  if (s.isHorizontal()) {
    if (_ = It(n, a, r), mt(e)) {
      const y = Object.keys(e)[0], T = e[y];
      g = u[y].getPixelForValue(T) + x - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + x - t : g = Ba(s, e, t);
    m = r - a;
  } else {
    if (mt(e)) {
      const y = Object.keys(e)[0], T = e[y];
      _ = u[y].getPixelForValue(T) - b + t;
    } else e === "center" ? _ = (c.left + c.right) / 2 - b + t : _ = Ba(s, e, t);
    g = It(n, o, i), p = e === "left" ? -At : At;
  }
  return {
    titleX: _,
    titleY: g,
    maxWidth: m,
    rotation: p
  };
}
class ws extends oe {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i } = this;
    return t = pe(t, Number.POSITIVE_INFINITY), e = pe(e, Number.NEGATIVE_INFINITY), n = pe(n, Number.POSITIVE_INFINITY), i = pe(i, Number.NEGATIVE_INFINITY), {
      min: pe(t, n),
      max: pe(e, i),
      minDefined: Bt(t),
      maxDefined: Bt(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: i, maxDefined: a } = this.getUserBounds(), o;
    if (i && a)
      return {
        min: e,
        max: n
      };
    const r = this.getMatchingVisibleMetas();
    for (let d = 0, c = r.length; d < c; ++d)
      o = r[d].controller.getMinMax(this, t), i || (e = Math.min(e, o.min)), a || (n = Math.max(n, o.max));
    return e = a && e > n ? n : e, n = i && e > n ? e : n, {
      min: pe(e, pe(n, e)),
      max: pe(n, pe(e, n))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    St(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, n) {
    const { beginAtZero: i, grace: a, ticks: o } = this.options, r = o.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = vg(this, a, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const d = r < this.ticks.length;
    this._convertTicksToLabels(d ? qa(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = tm(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), d && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, n;
    this.isHorizontal() ? (e = this.left, n = this.right) : (e = this.top, n = this.bottom, t = !t), this._startPixel = e, this._endPixel = n, this._reversePixels = t, this._length = n - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    St(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    St(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    St(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), St(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    St(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, i, a;
    for (n = 0, i = t.length; n < i; n++)
      a = t[n], a.label = St(e.callback, [
        a.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    St(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    St(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, n = ja(this.ticks.length, t.ticks.maxTicksLimit), i = e.minRotation || 0, a = e.maxRotation;
    let o = i, r, d, c;
    if (!this._isVisible() || !e.display || i >= a || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), p = u.widest.width, m = u.highest.height, _ = Ft(this.chart.width - p, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / n : _ / (n - 1), p + 6 > r && (r = _ / (n - (t.offset ? 0.5 : 1)), d = this.maxHeight - Es(t.grid) - e.padding - Na(t.title, this.chart.options.font), c = Math.sqrt(p * p + m * m), o = Uf(Math.min(Math.asin(Ft((u.highest.height + 6) / r, -1, 1)), Math.asin(Ft(d / c, -1, 1)) - Math.asin(Ft(m / c, -1, 1)))), o = Math.max(i, Math.min(a, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    St(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    St(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: n, title: i, grid: a } } = this, o = this._isVisible(), r = this.isHorizontal();
    if (o) {
      const d = Na(i, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = Es(a) + d) : (t.height = this.maxHeight, t.width = Es(a) + d), n.display && this.ticks.length) {
        const { first: c, last: u, widest: p, highest: m } = this._getLabelSizes(), _ = n.padding * 2, g = Me(this.labelRotation), x = Math.cos(g), b = Math.sin(g);
        if (r) {
          const y = n.mirror ? 0 : b * p.width + x * m.height;
          t.height = Math.min(this.maxHeight, t.height + y + _);
        } else {
          const y = n.mirror ? 0 : x * p.width + b * m.height;
          t.width = Math.min(this.maxWidth, t.width + y + _);
        }
        this._calculatePadding(c, u, b, x);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, n, i) {
    const { ticks: { align: a, padding: o }, position: r } = this.options, d = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, p = this.right - this.getPixelForTick(this.ticks.length - 1);
      let m = 0, _ = 0;
      d ? c ? (m = i * t.width, _ = n * e.height) : (m = n * t.height, _ = i * e.width) : a === "start" ? _ = e.width : a === "end" ? m = t.width : a !== "inner" && (m = t.width / 2, _ = e.width / 2), this.paddingLeft = Math.max((m - u + o) * this.width / (this.width - u), 0), this.paddingRight = Math.max((_ - p + o) * this.width / (this.width - p), 0);
    } else {
      let u = e.height / 2, p = t.height / 2;
      a === "start" ? (u = 0, p = t.height) : a === "end" && (u = e.height, p = 0), this.paddingTop = u + o, this.paddingBottom = p + o;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    St(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, n;
    for (e = 0, n = t.length; e < n; e++)
      xt(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = qa(n, e)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: i, _longestTextCache: a } = this, o = [], r = [], d = Math.floor(e / ja(e, n));
    let c = 0, u = 0, p, m, _, g, x, b, y, T, B, F, O;
    for (p = 0; p < e; p += d) {
      if (g = t[p].label, x = this._resolveTickFontOptions(p), i.font = b = x.string, y = a[b] = a[b] || {
        data: {},
        gc: []
      }, T = x.lineHeight, B = F = 0, !xt(g) && !Tt(g))
        B = ma(i, y.data, y.gc, B, g), F = T;
      else if (Tt(g))
        for (m = 0, _ = g.length; m < _; ++m)
          O = g[m], !xt(O) && !Tt(O) && (B = ma(i, y.data, y.gc, B, O), F += T);
      o.push(B), r.push(F), c = Math.max(B, c), u = Math.max(F, u);
    }
    lm(a, e);
    const j = o.indexOf(c), D = r.indexOf(u), S = (w) => ({
      width: o[w] || 0,
      height: r[w] || 0
    });
    return {
      first: S(0),
      last: S(e - 1),
      widest: S(j),
      highest: S(D),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Gf(this._alignToPixels ? He(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = cm(this.getContext(), t, n));
    }
    return this.$context || (this.$context = dm(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Me(this.labelRotation), n = Math.abs(Math.cos(e)), i = Math.abs(Math.sin(e)), a = this._getLabelSizes(), o = t.autoSkipPadding || 0, r = a ? a.widest.width + o : 0, d = a ? a.highest.height + o : 0;
    return this.isHorizontal() ? d * n > r * i ? r / n : d / i : d * i < r * n ? d / n : r / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, n = this.chart, i = this.options, { grid: a, position: o, border: r } = i, d = a.offset, c = this.isHorizontal(), p = this.ticks.length + (d ? 1 : 0), m = Es(a), _ = [], g = r.setContext(this.getContext()), x = g.display ? g.width : 0, b = x / 2, y = function(nt) {
      return He(n, nt, x);
    };
    let T, B, F, O, j, D, S, w, V, L, A, E;
    if (o === "top")
      T = y(this.bottom), D = this.bottom - m, w = T - b, L = y(t.top) + b, E = t.bottom;
    else if (o === "bottom")
      T = y(this.top), L = t.top, E = y(t.bottom) - b, D = T + b, w = this.top + m;
    else if (o === "left")
      T = y(this.right), j = this.right - m, S = T - b, V = y(t.left) + b, A = t.right;
    else if (o === "right")
      T = y(this.left), V = t.left, A = y(t.right) - b, j = T + b, S = this.left + m;
    else if (e === "x") {
      if (o === "center")
        T = y((t.top + t.bottom) / 2 + 0.5);
      else if (mt(o)) {
        const nt = Object.keys(o)[0], ct = o[nt];
        T = y(this.chart.scales[nt].getPixelForValue(ct));
      }
      L = t.top, E = t.bottom, D = T + b, w = D + m;
    } else if (e === "y") {
      if (o === "center")
        T = y((t.left + t.right) / 2);
      else if (mt(o)) {
        const nt = Object.keys(o)[0], ct = o[nt];
        T = y(this.chart.scales[nt].getPixelForValue(ct));
      }
      j = T - b, S = j - m, V = t.left, A = t.right;
    }
    const N = ut(i.ticks.maxTicksLimit, p), Y = Math.max(1, Math.ceil(p / N));
    for (B = 0; B < p; B += Y) {
      const nt = this.getContext(B), ct = a.setContext(nt), ht = r.setContext(nt), G = ct.lineWidth, R = ct.color, M = ht.dash || [], q = ht.dashOffset, rt = ct.tickWidth, Ct = ct.tickColor, Pt = ct.tickBorderDash || [], Dt = ct.tickBorderDashOffset;
      F = rm(this, B, d), F !== void 0 && (O = He(n, F, G), c ? j = S = V = A = O : D = w = L = E = O, _.push({
        tx1: j,
        ty1: D,
        tx2: S,
        ty2: w,
        x1: V,
        y1: L,
        x2: A,
        y2: E,
        width: G,
        color: R,
        borderDash: M,
        borderDashOffset: q,
        tickWidth: rt,
        tickColor: Ct,
        tickBorderDash: Pt,
        tickBorderDashOffset: Dt
      }));
    }
    return this._ticksLength = p, this._borderValue = T, _;
  }
  _computeLabelItems(t) {
    const e = this.axis, n = this.options, { position: i, ticks: a } = n, o = this.isHorizontal(), r = this.ticks, { align: d, crossAlign: c, padding: u, mirror: p } = a, m = Es(n.grid), _ = m + u, g = p ? -u : _, x = -Me(this.labelRotation), b = [];
    let y, T, B, F, O, j, D, S, w, V, L, A, E = "middle";
    if (i === "top")
      j = this.bottom - g, D = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      j = this.top + g, D = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const Y = this._getYAxisLabelAlignment(m);
      D = Y.textAlign, O = Y.x;
    } else if (i === "right") {
      const Y = this._getYAxisLabelAlignment(m);
      D = Y.textAlign, O = Y.x;
    } else if (e === "x") {
      if (i === "center")
        j = (t.top + t.bottom) / 2 + _;
      else if (mt(i)) {
        const Y = Object.keys(i)[0], nt = i[Y];
        j = this.chart.scales[Y].getPixelForValue(nt) + _;
      }
      D = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (i === "center")
        O = (t.left + t.right) / 2 - _;
      else if (mt(i)) {
        const Y = Object.keys(i)[0], nt = i[Y];
        O = this.chart.scales[Y].getPixelForValue(nt);
      }
      D = this._getYAxisLabelAlignment(m).textAlign;
    }
    e === "y" && (d === "start" ? E = "top" : d === "end" && (E = "bottom"));
    const N = this._getLabelSizes();
    for (y = 0, T = r.length; y < T; ++y) {
      B = r[y], F = B.label;
      const Y = a.setContext(this.getContext(y));
      S = this.getPixelForTick(y) + a.labelOffset, w = this._resolveTickFontOptions(y), V = w.lineHeight, L = Tt(F) ? F.length : 1;
      const nt = L / 2, ct = Y.color, ht = Y.textStrokeColor, G = Y.textStrokeWidth;
      let R = D;
      o ? (O = S, D === "inner" && (y === T - 1 ? R = this.options.reverse ? "left" : "right" : y === 0 ? R = this.options.reverse ? "right" : "left" : R = "center"), i === "top" ? c === "near" || x !== 0 ? A = -L * V + V / 2 : c === "center" ? A = -N.highest.height / 2 - nt * V + V : A = -N.highest.height + V / 2 : c === "near" || x !== 0 ? A = V / 2 : c === "center" ? A = N.highest.height / 2 - nt * V : A = N.highest.height - L * V, p && (A *= -1), x !== 0 && !Y.showLabelBackdrop && (O += V / 2 * Math.sin(x))) : (j = S, A = (1 - L) * V / 2);
      let M;
      if (Y.showLabelBackdrop) {
        const q = ne(Y.backdropPadding), rt = N.heights[y], Ct = N.widths[y];
        let Pt = A - q.top, Dt = 0 - q.left;
        switch (E) {
          case "middle":
            Pt -= rt / 2;
            break;
          case "bottom":
            Pt -= rt;
            break;
        }
        switch (D) {
          case "center":
            Dt -= Ct / 2;
            break;
          case "right":
            Dt -= Ct;
            break;
          case "inner":
            y === T - 1 ? Dt -= Ct : y > 0 && (Dt -= Ct / 2);
            break;
        }
        M = {
          left: Dt,
          top: Pt,
          width: Ct + q.width,
          height: rt + q.height,
          color: Y.backdropColor
        };
      }
      b.push({
        label: F,
        font: w,
        textOffset: A,
        options: {
          rotation: x,
          color: ct,
          strokeColor: ht,
          strokeWidth: G,
          textAlign: R,
          textBaseline: E,
          translation: [
            O,
            j
          ],
          backdrop: M
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Me(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return e.align === "start" ? i = "left" : e.align === "end" ? i = "right" : e.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: n, mirror: i, padding: a } } = this.options, o = this._getLabelSizes(), r = t + a, d = o.widest.width;
    let c, u;
    return e === "left" ? i ? (u = this.right + a, n === "near" ? c = "left" : n === "center" ? (c = "center", u += d / 2) : (c = "right", u += d)) : (u = this.right - r, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= d / 2) : (c = "left", u = this.left)) : e === "right" ? i ? (u = this.left + a, n === "near" ? c = "right" : n === "center" ? (c = "center", u -= d / 2) : (c = "left", u -= d)) : (u = this.left + r, n === "near" ? c = "left" : n === "center" ? (c = "center", u += d / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: n, top: i, width: a, height: o } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(n, i, a, o), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const i = this.ticks.findIndex((a) => a.value === t);
    return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, n = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let a, o;
    const r = (d, c, u) => {
      !u.width || !u.color || (n.save(), n.lineWidth = u.width, n.strokeStyle = u.color, n.setLineDash(u.borderDash || []), n.lineDashOffset = u.borderDashOffset, n.beginPath(), n.moveTo(d.x, d.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (e.display)
      for (a = 0, o = i.length; a < o; ++a) {
        const d = i[a];
        e.drawOnChartArea && r({
          x: d.x1,
          y: d.y1
        }, {
          x: d.x2,
          y: d.y2
        }, d), e.drawTicks && r({
          x: d.tx1,
          y: d.ty1
        }, {
          x: d.tx2,
          y: d.ty2
        }, {
          color: d.tickColor,
          width: d.tickWidth,
          borderDash: d.tickBorderDash,
          borderDashOffset: d.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: n, grid: i } } = this, a = n.setContext(this.getContext()), o = n.display ? a.width : 0;
    if (!o)
      return;
    const r = i.setContext(this.getContext(0)).lineWidth, d = this._borderValue;
    let c, u, p, m;
    this.isHorizontal() ? (c = He(t, this.left, o) - o / 2, u = He(t, this.right, r) + r / 2, p = m = d) : (p = He(t, this.top, o) - o / 2, m = He(t, this.bottom, r) + r / 2, c = u = d), e.save(), e.lineWidth = a.width, e.strokeStyle = a.color, e.beginPath(), e.moveTo(c, p), e.lineTo(u, m), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, i = this._computeLabelArea();
    i && Bn(n, i);
    const a = this.getLabelItems(t);
    for (const o of a) {
      const r = o.options, d = o.font, c = o.label, u = o.textOffset;
      Zs(n, c, 0, u, d, r);
    }
    i && jn(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: n, reverse: i } } = this;
    if (!n.display)
      return;
    const a = Vt(n.font), o = ne(n.padding), r = n.align;
    let d = a.lineHeight / 2;
    e === "bottom" || e === "center" || mt(e) ? (d += o.bottom, Tt(n.text) && (d += a.lineHeight * (n.text.length - 1))) : d += o.top;
    const { titleX: c, titleY: u, maxWidth: p, rotation: m } = hm(this, d, e, r);
    Zs(t, n.text, 0, 0, a, {
      color: n.color,
      maxWidth: p,
      rotation: m,
      textAlign: um(r, e, i),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, n = ut(t.grid && t.grid.z, -1), i = ut(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ws.prototype.draw ? [
      {
        z: e,
        draw: (a) => {
          this.draw(a);
        }
      }
    ] : [
      {
        z: n,
        draw: (a) => {
          this.drawBackground(), this.drawGrid(a), this.drawTitle();
        }
      },
      {
        z: i,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (a) => {
          this.drawLabels(a);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", i = [];
    let a, o;
    for (a = 0, o = e.length; a < o; ++a) {
      const r = e[a];
      r[n] === this.id && (!t || r.type === t) && i.push(r);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Vt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class bn {
  constructor(t, e, n) {
    this.type = t, this.scope = e, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    gm(e) && (n = this.register(e));
    const i = this.items, a = t.id, o = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + t);
    return a in i || (i[a] = t, pm(t, o, n), this.override && Rt.override(t.id, t.overrides)), o;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, n = t.id, i = this.scope;
    n in e && delete e[n], i && n in Rt[i] && (delete Rt[i][n], this.override && delete Je[n]);
  }
}
function pm(s, t, e) {
  const n = Gs(/* @__PURE__ */ Object.create(null), [
    e ? Rt.get(e) : {},
    Rt.get(t),
    s.defaults
  ]);
  Rt.set(t, n), s.defaultRoutes && fm(t, s.defaultRoutes), s.descriptors && Rt.describe(t, s.descriptors);
}
function fm(s, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split("."), i = n.pop(), a = [
      s
    ].concat(n).join("."), o = t[e].split("."), r = o.pop(), d = o.join(".");
    Rt.route(a, i, d, r);
  });
}
function gm(s) {
  return "id" in s && "defaults" in s;
}
class mm {
  constructor() {
    this.controllers = new bn(Ke, "datasets", !0), this.elements = new bn(oe, "elements"), this.plugins = new bn(Object, "plugins"), this.scales = new bn(ws, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, n) {
    [
      ...e
    ].forEach((i) => {
      const a = n || this._getRegistryForType(i);
      n || a.isForType(i) || a === this.plugins && i.id ? this._exec(t, a, i) : yt(i, (o) => {
        const r = n || this._getRegistryForType(o);
        this._exec(t, r, o);
      });
    });
  }
  _exec(t, e, n) {
    const i = Ai(t);
    St(n["before" + i], [], n), e[t](n), St(n["after" + i], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const i = e.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return i;
  }
}
var ge = /* @__PURE__ */ new mm();
class _m {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, n, i) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const a = i ? this._descriptors(t).filter(i) : this._descriptors(t), o = this._notify(a, t, e, n);
    return e === "afterDestroy" && (this._notify(a, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), o;
  }
  _notify(t, e, n, i) {
    i = i || {};
    for (const a of t) {
      const o = a.plugin, r = o[n], d = [
        e,
        i,
        a.options
      ];
      if (St(r, d, o) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    xt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config, i = ut(n.options && n.options.plugins, {}), a = xm(n);
    return i === !1 && !e ? [] : bm(t, a, i, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], n = this._cache, i = (a, o) => a.filter((r) => !o.some((d) => r.plugin.id === d.plugin.id));
    this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start");
  }
}
function xm(s) {
  const t = {}, e = [], n = Object.keys(ge.plugins.items);
  for (let a = 0; a < n.length; a++)
    e.push(ge.getPlugin(n[a]));
  const i = s.plugins || [];
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    e.indexOf(o) === -1 && (e.push(o), t[o.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function ym(s, t) {
  return !t && s === !1 ? null : s === !0 ? {} : s;
}
function bm(s, { plugins: t, localIds: e }, n, i) {
  const a = [], o = s.getContext();
  for (const r of t) {
    const d = r.id, c = ym(n[d], i);
    c !== null && a.push({
      plugin: r,
      options: vm(s.config, {
        plugin: r,
        local: e[d]
      }, c, o)
    });
  }
  return a;
}
function vm(s, { plugin: t, local: e }, n, i) {
  const a = s.pluginScopeKeys(t), o = s.getOptionScopes(n, a);
  return e && t.defaults && o.push(t.defaults), s.createResolver(o, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function wi(s, t) {
  const e = Rt.datasets[s] || {};
  return ((t.datasets || {})[s] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function km(s, t) {
  let e = s;
  return s === "_index_" ? e = t : s === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function wm(s, t) {
  return s === t ? "_index_" : "_value_";
}
function Ha(s) {
  if (s === "x" || s === "y" || s === "r")
    return s;
}
function Sm(s) {
  if (s === "top" || s === "bottom")
    return "x";
  if (s === "left" || s === "right")
    return "y";
}
function Si(s, ...t) {
  if (Ha(s))
    return s;
  for (const e of t) {
    const n = e.axis || Sm(e.position) || s.length > 1 && Ha(s[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`);
}
function Wa(s, t, e) {
  if (e[t + "AxisID"] === s)
    return {
      axis: t
    };
}
function $m(s, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === s || n.yAxisID === s);
    if (e.length)
      return Wa(s, "x", e[0]) || Wa(s, "y", e[0]);
  }
  return {};
}
function Cm(s, t) {
  const e = Je[s.type] || {
    scales: {}
  }, n = t.scales || {}, i = wi(s.type, t), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((o) => {
    const r = n[o];
    if (!mt(r))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const d = Si(o, r, $m(o, s), Rt.scales[r.type]), c = wm(d, i), u = e.scales || {};
    a[o] = Ns(/* @__PURE__ */ Object.create(null), [
      {
        axis: d
      },
      r,
      u[d],
      u[c]
    ]);
  }), s.data.datasets.forEach((o) => {
    const r = o.type || s.type, d = o.indexAxis || wi(r, t), u = (Je[r] || {}).scales || {};
    Object.keys(u).forEach((p) => {
      const m = km(p, d), _ = o[m + "AxisID"] || m;
      a[_] = a[_] || /* @__PURE__ */ Object.create(null), Ns(a[_], [
        {
          axis: m
        },
        n[_],
        u[p]
      ]);
    });
  }), Object.keys(a).forEach((o) => {
    const r = a[o];
    Ns(r, [
      Rt.scales[r.type],
      Rt.scale
    ]);
  }), a;
}
function ur(s) {
  const t = s.options || (s.options = {});
  t.plugins = ut(t.plugins, {}), t.scales = Cm(s, t);
}
function hr(s) {
  return s = s || {}, s.datasets = s.datasets || [], s.labels = s.labels || [], s;
}
function Mm(s) {
  return s = s || {}, s.data = hr(s.data), ur(s), s;
}
const Ua = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Set();
function vn(s, t) {
  let e = Ua.get(s);
  return e || (e = t(), Ua.set(s, e), pr.add(e)), e;
}
const Ls = (s, t, e) => {
  const n = Qe(t, e);
  n !== void 0 && s.add(n);
};
class Dm {
  constructor(t) {
    this._config = Mm(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = hr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), ur(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return vn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return vn(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return vn(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, n = this.type;
    return vn(`${n}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let i = n.get(t);
    return (!i || e) && (i = /* @__PURE__ */ new Map(), n.set(t, i)), i;
  }
  getOptionScopes(t, e, n) {
    const { options: i, type: a } = this, o = this._cachedScopes(t, n), r = o.get(e);
    if (r)
      return r;
    const d = /* @__PURE__ */ new Set();
    e.forEach((u) => {
      t && (d.add(t), u.forEach((p) => Ls(d, t, p))), u.forEach((p) => Ls(d, i, p)), u.forEach((p) => Ls(d, Je[a] || {}, p)), u.forEach((p) => Ls(d, Rt, p)), u.forEach((p) => Ls(d, vi, p));
    });
    const c = Array.from(d);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), pr.has(e) && o.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Je[e] || {},
      Rt.datasets[e] || {},
      {
        type: e
      },
      Rt,
      vi
    ];
  }
  resolveNamedOptions(t, e, n, i = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: o, subPrefixes: r } = Ya(this._resolverCache, t, i);
    let d = o;
    if (Tm(o, e)) {
      a.$shared = !1, n = Ie(n) ? n() : n;
      const c = this.createResolver(t, n, r);
      d = ys(o, n, c);
    }
    for (const c of e)
      a[c] = d[c];
    return a;
  }
  createResolver(t, e, n = [
    ""
  ], i) {
    const { resolver: a } = Ya(this._resolverCache, t, n);
    return mt(e) ? ys(a, e, void 0, i) : a;
  }
}
function Ya(s, t, e) {
  let n = s.get(t);
  n || (n = /* @__PURE__ */ new Map(), s.set(t, n));
  const i = e.join();
  let a = n.get(i);
  return a || (a = {
    resolver: Vi(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, n.set(i, a)), a;
}
const Rm = (s) => mt(s) && Object.getOwnPropertyNames(s).some((t) => Ie(s[t]));
function Tm(s, t) {
  const { isScriptable: e, isIndexable: n } = Uo(s);
  for (const i of t) {
    const a = e(i), o = n(i), r = (o || a) && s[i];
    if (a && (Ie(r) || Rm(r)) || o && Tt(r))
      return !0;
  }
  return !1;
}
var Pm = "4.5.1";
const Om = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Ga(s, t) {
  return s === "top" || s === "bottom" || Om.indexOf(s) === -1 && t === "x";
}
function Xa(s, t) {
  return function(e, n) {
    return e[s] === n[s] ? e[t] - n[t] : e[s] - n[s];
  };
}
function Ka(s) {
  const t = s.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), St(e && e.onComplete, [
    s
  ], t);
}
function Am(s) {
  const t = s.chart, e = t.options.animation;
  St(e && e.onProgress, [
    s
  ], t);
}
function fr(s) {
  return qi() && typeof s == "string" ? s = document.getElementById(s) : s && s.length && (s = s[0]), s && s.canvas && (s = s.canvas), s;
}
const Mn = {}, Qa = (s) => {
  const t = fr(s);
  return Object.values(Mn).filter((e) => e.canvas === t).pop();
};
function Em(s, t, e) {
  const n = Object.keys(s);
  for (const i of n) {
    const a = +i;
    if (a >= t) {
      const o = s[i];
      delete s[i], (e > 0 || a > t) && (s[a + e] = o);
    }
  }
}
function Lm(s, t, e, n) {
  return !e || s.type === "mouseout" ? null : n ? t : s;
}
var Oe;
let Ve = (Oe = class {
  static register(...t) {
    ge.add(...t), Ja();
  }
  static unregister(...t) {
    ge.remove(...t), Ja();
  }
  constructor(t, e) {
    const n = this.config = new Dm(e), i = fr(t), a = Qa(i);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const o = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || Z0(i))(), this.platform.updateConfig(n);
    const r = this.platform.acquireContext(i, o.aspectRatio), d = r && r.canvas, c = d && d.height, u = d && d.width;
    if (this.id = Af(), this.ctx = r, this.canvas = d, this.width = u, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new _m(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Jf((p) => this.update(p), o.resizeDelay || 0), this._dataChanges = [], Mn[this.id] = this, !r || !d) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Se.listen(this, "complete", Ka), Se.listen(this, "progress", Am), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: n, height: i, _aspectRatio: a } = this;
    return xt(t) ? e && a ? a : i ? n / i : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return ge;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ba(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return _a(this.canvas, this.ctx), this;
  }
  stop() {
    return Se.stop(this), this;
  }
  resize(t, e) {
    Se.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options, i = this.canvas, a = n.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(i, t, e, a), r = n.devicePixelRatio || this.platform.getDevicePixelRatio(), d = this.width ? "resize" : "attach";
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ba(this, r, !0) && (this.notifyPlugins("resize", {
      size: o
    }), St(n.onResize, [
      this,
      o
    ], this), this.attached && this._doResize(d) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    yt(e, (n, i) => {
      n.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, n = this.scales, i = Object.keys(n).reduce((o, r) => (o[r] = !1, o), {});
    let a = [];
    e && (a = a.concat(Object.keys(e).map((o) => {
      const r = e[o], d = Si(o, r), c = d === "r", u = d === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), yt(a, (o) => {
      const r = o.options, d = r.id, c = Si(d, r), u = ut(r.type, o.dtype);
      (r.position === void 0 || Ga(r.position, c) !== Ga(o.dposition)) && (r.position = o.dposition), i[d] = !0;
      let p = null;
      if (d in n && n[d].type === u)
        p = n[d];
      else {
        const m = ge.getScale(u);
        p = new m({
          id: d,
          type: u,
          ctx: this.ctx,
          chart: this
        }), n[p.id] = p;
      }
      p.init(r, t);
    }), yt(i, (o, r) => {
      o || delete n[r];
    }), yt(n, (o) => {
      se.configure(this, o, o.options), se.addBox(this, o);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, n = t.length;
    if (t.sort((i, a) => i.index - a.index), n > e) {
      for (let i = e; i < n; ++i)
        this._destroyDatasetMeta(i);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(Xa("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((n, i) => {
      e.filter((a) => a === n._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let n, i;
    for (this._removeUnreferencedMetasets(), n = 0, i = e.length; n < i; n++) {
      const a = e[n];
      let o = this.getDatasetMeta(n);
      const r = a.type || this.config.type;
      if (o.type && o.type !== r && (this._destroyDatasetMeta(n), o = this.getDatasetMeta(n)), o.type = r, o.indexAxis = a.indexAxis || wi(r, this.options), o.order = a.order || 0, o.index = n, o.label = "" + a.label, o.visible = this.isDatasetVisible(n), o.controller)
        o.controller.updateIndex(n), o.controller.linkScales();
      else {
        const d = ge.getController(r), { datasetElementType: c, dataElementType: u } = Rt.datasets[r];
        Object.assign(d, {
          dataElementType: ge.getElement(u),
          datasetElementType: c && ge.getElement(c)
        }), o.controller = new d(this, n), t.push(o.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    yt(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const a = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: p } = this.getDatasetMeta(c), m = !i && a.indexOf(p) === -1;
      p.buildOrUpdateElements(m), o = Math.max(+p.getMaxOverflow(), o);
    }
    o = this._minPadding = n.layout.autoPadding ? o : 0, this._updateLayout(o), i || yt(a, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Xa("z", "_idx"));
    const { _active: r, _lastEvent: d } = this;
    d ? this._eventHandler(d, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    yt(this.scales, (t) => {
      se.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!ra(e, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: n, start: i, count: a } of e) {
      const o = n === "_removeElements" ? -a : a;
      Em(t, i, o);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, n = (a) => new Set(t.filter((o) => o[0] === a).map((o, r) => r + "," + o.splice(1).join(","))), i = n(0);
    for (let a = 1; a < e; a++)
      if (!ra(i, n(a)))
        return;
    return Array.from(i).map((a) => a.split(",")).map((a) => ({
      method: a[1],
      start: +a[2],
      count: +a[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    se.update(this, this.width, this.height, t);
    const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
    this._layers = [], yt(this.boxes, (i) => {
      n && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, a) => {
      i._idx = a;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, Ie(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t), i = {
      meta: n,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (n.controller._update(e), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Se.has(this) ? this.attached && !Se.running(this) && Se.start(this) : (this.draw(), Ka({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: i } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(n, i);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, n = [];
    let i, a;
    for (i = 0, a = e.length; i < a; ++i) {
      const o = e[i];
      (!t || o.visible) && n.push(o);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, n = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, i = sr(this, t);
    this.notifyPlugins("beforeDatasetDraw", n) !== !1 && (i && Bn(e, i), t.controller.draw(), i && jn(e), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
  }
  isPointInArea(t) {
    return Js(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, i) {
    const a = O0.modes[e];
    return typeof a == "function" ? a(this, t, n, i) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], n = this._metasets;
    let i = n.filter((a) => a && a._dataset === e).pop();
    return i || (i = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, n.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = es(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const n = this.getDatasetMeta(t);
    n.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const i = n ? "show" : "hide", a = this.getDatasetMeta(t), o = a.controller._resolveAnimations(void 0, i);
    Xs(e) ? (a.data[e].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), o.update(a, {
      visible: n
    }), this.update((r) => r.datasetIndex === t ? i : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Se.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), _a(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Mn[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, n = (a, o) => {
      e.addEventListener(this, a, o), t[a] = o;
    }, i = (a, o, r) => {
      a.offsetX = o, a.offsetY = r, this._eventHandler(a);
    };
    yt(this.options.events, (a) => n(a, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, n = (d, c) => {
      e.addEventListener(this, d, c), t[d] = c;
    }, i = (d, c) => {
      t[d] && (e.removeEventListener(this, d, c), delete t[d]);
    }, a = (d, c) => {
      this.canvas && this.resize(d, c);
    };
    let o;
    const r = () => {
      i("attach", r), this.attached = !0, this.resize(), n("resize", a), n("detach", o);
    };
    o = () => {
      this.attached = !1, i("resize", a), this._stop(), this._resize(0, 0), n("attach", r);
    }, e.isAttached(this.canvas) ? r() : o();
  }
  unbindEvents() {
    yt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, yt(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, n) {
    const i = n ? "set" : "remove";
    let a, o, r, d;
    for (e === "dataset" && (a = this.getDatasetMeta(t[0].datasetIndex), a.controller["_" + i + "DatasetHoverStyle"]()), r = 0, d = t.length; r < d; ++r) {
      o = t[r];
      const c = o && this.getDatasetMeta(o.datasetIndex).controller;
      c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], n = t.map(({ datasetIndex: a, index: o }) => {
      const r = this.getDatasetMeta(a);
      if (!r)
        throw new Error("No dataset found at index " + a);
      return {
        datasetIndex: a,
        element: r.data[o],
        index: o
      };
    });
    !On(n, e) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, n) {
    const i = this.options.hover, a = (d, c) => d.filter((u) => !c.some((p) => u.datasetIndex === p.datasetIndex && u.index === p.index)), o = a(e, t), r = n ? t : a(t, e);
    o.length && this.updateHoverStyle(o, i.mode, !1), r.length && i.mode && this.updateHoverStyle(r, i.mode, !0);
  }
  _eventHandler(t, e) {
    const n = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (o) => (o.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, i) === !1)
      return;
    const a = this._handleEvent(t, e, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, i), (a || n.changed) && this.render(), this;
  }
  _handleEvent(t, e, n) {
    const { _active: i = [], options: a } = this, o = e, r = this._getActiveElements(t, i, n, o), d = Vf(t), c = Lm(t, this._lastEvent, n, d);
    n && (this._lastEvent = null, St(a.onHover, [
      t,
      r,
      this
    ], this), d && St(a.onClick, [
      t,
      r,
      this
    ], this));
    const u = !On(r, i);
    return (u || e) && (this._active = r, this._updateHoverStyles(r, i, e)), this._lastEvent = c, u;
  }
  _getActiveElements(t, e, n, i) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e;
    const a = this.options.hover;
    return this.getElementsAtEventForMode(t, a.mode, a, i);
  }
}, et(Oe, "defaults", Rt), et(Oe, "instances", Mn), et(Oe, "overrides", Je), et(Oe, "registry", ge), et(Oe, "version", Pm), et(Oe, "getChart", Qa), Oe);
function Ja() {
  return yt(Ve.instances, (s) => s._plugins.invalidate());
}
function zm(s, t, e) {
  const { startAngle: n, x: i, y: a, outerRadius: o, innerRadius: r, options: d } = t, { borderWidth: c, borderJoinStyle: u } = d, p = Math.min(c / o, Qt(n - e));
  if (s.beginPath(), s.arc(i, a, o - c / 2, n + p / 2, e - p / 2), r > 0) {
    const m = Math.min(c / r, Qt(n - e));
    s.arc(i, a, r + c / 2, e - m / 2, n + m / 2, !0);
  } else {
    const m = Math.min(c / 2, o * Qt(n - e));
    if (u === "round")
      s.arc(i, a, m, e - bt / 2, n + bt / 2, !0);
    else if (u === "bevel") {
      const _ = 2 * m * m, g = -_ * Math.cos(e + bt / 2) + i, x = -_ * Math.sin(e + bt / 2) + a, b = _ * Math.cos(n + bt / 2) + i, y = _ * Math.sin(n + bt / 2) + a;
      s.lineTo(g, x), s.lineTo(b, y);
    }
  }
  s.closePath(), s.moveTo(0, 0), s.rect(0, 0, s.canvas.width, s.canvas.height), s.clip("evenodd");
}
function Im(s, t, e) {
  const { startAngle: n, pixelMargin: i, x: a, y: o, outerRadius: r, innerRadius: d } = t;
  let c = i / r;
  s.beginPath(), s.arc(a, o, r, n - c, e + c), d > i ? (c = i / d, s.arc(a, o, d, e + c, n - c, !0)) : s.arc(a, o, i, e + At, n - At), s.closePath(), s.clip();
}
function Fm(s) {
  return Fi(s, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Vm(s, t, e, n) {
  const i = Fm(s.options.borderRadius), a = (e - t) / 2, o = Math.min(a, n * t / 2), r = (d) => {
    const c = (e - Math.min(a, d)) * n / 2;
    return Ft(d, 0, Math.min(a, c));
  };
  return {
    outerStart: r(i.outerStart),
    outerEnd: r(i.outerEnd),
    innerStart: Ft(i.innerStart, 0, o),
    innerEnd: Ft(i.innerEnd, 0, o)
  };
}
function ps(s, t, e, n) {
  return {
    x: e + s * Math.cos(t),
    y: n + s * Math.sin(t)
  };
}
function Fn(s, t, e, n, i, a) {
  const { x: o, y: r, startAngle: d, pixelMargin: c, innerRadius: u } = t, p = Math.max(t.outerRadius + n + e - c, 0), m = u > 0 ? u + n + e + c : 0;
  let _ = 0;
  const g = i - d;
  if (n) {
    const Y = u > 0 ? u - n : 0, nt = p > 0 ? p - n : 0, ct = (Y + nt) / 2, ht = ct !== 0 ? g * ct / (ct + n) : g;
    _ = (g - ht) / 2;
  }
  const x = Math.max(1e-3, g * p - e / bt) / p, b = (g - x) / 2, y = d + b + _, T = i - b - _, { outerStart: B, outerEnd: F, innerStart: O, innerEnd: j } = Vm(t, m, p, T - y), D = p - B, S = p - F, w = y + B / D, V = T - F / S, L = m + O, A = m + j, E = y + O / L, N = T - j / A;
  if (s.beginPath(), a) {
    const Y = (w + V) / 2;
    if (s.arc(o, r, p, w, Y), s.arc(o, r, p, Y, V), F > 0) {
      const G = ps(S, V, o, r);
      s.arc(G.x, G.y, F, V, T + At);
    }
    const nt = ps(A, T, o, r);
    if (s.lineTo(nt.x, nt.y), j > 0) {
      const G = ps(A, N, o, r);
      s.arc(G.x, G.y, j, T + At, N + Math.PI);
    }
    const ct = (T - j / m + (y + O / m)) / 2;
    if (s.arc(o, r, m, T - j / m, ct, !0), s.arc(o, r, m, ct, y + O / m, !0), O > 0) {
      const G = ps(L, E, o, r);
      s.arc(G.x, G.y, O, E + Math.PI, y - At);
    }
    const ht = ps(D, y, o, r);
    if (s.lineTo(ht.x, ht.y), B > 0) {
      const G = ps(D, w, o, r);
      s.arc(G.x, G.y, B, y - At, w);
    }
  } else {
    s.moveTo(o, r);
    const Y = Math.cos(w) * p + o, nt = Math.sin(w) * p + r;
    s.lineTo(Y, nt);
    const ct = Math.cos(V) * p + o, ht = Math.sin(V) * p + r;
    s.lineTo(ct, ht);
  }
  s.closePath();
}
function Bm(s, t, e, n, i) {
  const { fullCircles: a, startAngle: o, circumference: r } = t;
  let d = t.endAngle;
  if (a) {
    Fn(s, t, e, n, d, i);
    for (let c = 0; c < a; ++c)
      s.fill();
    isNaN(r) || (d = o + (r % $t || $t));
  }
  return Fn(s, t, e, n, d, i), s.fill(), d;
}
function jm(s, t, e, n, i) {
  const { fullCircles: a, startAngle: o, circumference: r, options: d } = t, { borderWidth: c, borderJoinStyle: u, borderDash: p, borderDashOffset: m, borderRadius: _ } = d, g = d.borderAlign === "inner";
  if (!c)
    return;
  s.setLineDash(p || []), s.lineDashOffset = m, g ? (s.lineWidth = c * 2, s.lineJoin = u || "round") : (s.lineWidth = c, s.lineJoin = u || "bevel");
  let x = t.endAngle;
  if (a) {
    Fn(s, t, e, n, x, i);
    for (let b = 0; b < a; ++b)
      s.stroke();
    isNaN(r) || (x = o + (r % $t || $t));
  }
  g && Im(s, t, x), d.selfJoin && x - o >= bt && _ === 0 && u !== "miter" && zm(s, t, x), a || (Fn(s, t, e, n, x, i), s.stroke());
}
class Vs extends oe {
  constructor(e) {
    super();
    et(this, "circumference");
    et(this, "endAngle");
    et(this, "fullCircles");
    et(this, "innerRadius");
    et(this, "outerRadius");
    et(this, "pixelMargin");
    et(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, n, i) {
    const a = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = Fo(a, {
      x: e,
      y: n
    }), { startAngle: d, endAngle: c, innerRadius: u, outerRadius: p, circumference: m } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), _ = (this.options.spacing + this.options.borderWidth) / 2, g = ut(m, c - d), x = Qs(o, d, c) && d !== c, b = g >= $t || x, y = De(r, u + _, p + _);
    return b && y;
  }
  getCenterPoint(e) {
    const { x: n, y: i, startAngle: a, endAngle: o, innerRadius: r, outerRadius: d } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: c, spacing: u } = this.options, p = (a + o) / 2, m = (r + d + u + c) / 2;
    return {
      x: n + Math.cos(p) * m,
      y: i + Math.sin(p) * m
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: n, circumference: i } = this, a = (n.offset || 0) / 4, o = (n.spacing || 0) / 2, r = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > $t ? Math.floor(i / $t) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const d = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(d) * a, Math.sin(d) * a);
    const c = 1 - Math.sin(Math.min(bt, i || 0)), u = a * c;
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, Bm(e, this, u, o, r), jm(e, this, u, o, r), e.restore();
  }
}
et(Vs, "id", "arc"), et(Vs, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
  selfJoin: !1
}), et(Vs, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), et(Vs, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
function gr(s, t, e = t) {
  s.lineCap = ut(e.borderCapStyle, t.borderCapStyle), s.setLineDash(ut(e.borderDash, t.borderDash)), s.lineDashOffset = ut(e.borderDashOffset, t.borderDashOffset), s.lineJoin = ut(e.borderJoinStyle, t.borderJoinStyle), s.lineWidth = ut(e.borderWidth, t.borderWidth), s.strokeStyle = ut(e.borderColor, t.borderColor);
}
function qm(s, t, e) {
  s.lineTo(e.x, e.y);
}
function Nm(s) {
  return s.stepped ? hg : s.tension || s.cubicInterpolationMode === "monotone" ? pg : qm;
}
function mr(s, t, e = {}) {
  const n = s.length, { start: i = 0, end: a = n - 1 } = e, { start: o, end: r } = t, d = Math.max(i, o), c = Math.min(a, r), u = i < o && a < o || i > r && a > r;
  return {
    count: n,
    start: d,
    loop: t.loop,
    ilen: c < d && !u ? n + c - d : c - d
  };
}
function Hm(s, t, e, n) {
  const { points: i, options: a } = t, { count: o, start: r, loop: d, ilen: c } = mr(i, e, n), u = Nm(a);
  let { move: p = !0, reverse: m } = n || {}, _, g, x;
  for (_ = 0; _ <= c; ++_)
    g = i[(r + (m ? c - _ : _)) % o], !g.skip && (p ? (s.moveTo(g.x, g.y), p = !1) : u(s, x, g, m, a.stepped), x = g);
  return d && (g = i[(r + (m ? c : 0)) % o], u(s, x, g, m, a.stepped)), !!d;
}
function Wm(s, t, e, n) {
  const i = t.points, { count: a, start: o, ilen: r } = mr(i, e, n), { move: d = !0, reverse: c } = n || {};
  let u = 0, p = 0, m, _, g, x, b, y;
  const T = (F) => (o + (c ? r - F : F)) % a, B = () => {
    x !== b && (s.lineTo(u, b), s.lineTo(u, x), s.lineTo(u, y));
  };
  for (d && (_ = i[T(0)], s.moveTo(_.x, _.y)), m = 0; m <= r; ++m) {
    if (_ = i[T(m)], _.skip)
      continue;
    const F = _.x, O = _.y, j = F | 0;
    j === g ? (O < x ? x = O : O > b && (b = O), u = (p * u + F) / ++p) : (B(), s.lineTo(F, O), g = j, p = 0, x = b = O), y = O;
  }
  B();
}
function $i(s) {
  const t = s.options, e = t.borderDash && t.borderDash.length;
  return !s._decimated && !s._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Wm : Hm;
}
function Um(s) {
  return s.stepped ? Wg : s.tension || s.cubicInterpolationMode === "monotone" ? Ug : Ye;
}
function Ym(s, t, e, n) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, e, n) && i.closePath()), gr(s, t.options), s.stroke(i);
}
function Gm(s, t, e, n) {
  const { segments: i, options: a } = t, o = $i(t);
  for (const r of i)
    gr(s, a, r.style), s.beginPath(), o(s, t, r, {
      start: e,
      end: e + n - 1
    }) && s.closePath(), s.stroke();
}
const Xm = typeof Path2D == "function";
function Km(s, t, e, n) {
  Xm && !t.options.segment ? Ym(s, t, e, n) : Gm(s, t, e, n);
}
class xe extends oe {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
      const i = n.spanGaps ? this._loop : this._fullLoop;
      Ig(this._points, n, t, i, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Jg(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options, i = t[e], a = this.points, o = er(this, {
      property: e,
      start: i,
      end: i
    });
    if (!o.length)
      return;
    const r = [], d = Um(n);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: p, end: m } = o[c], _ = a[p], g = a[m];
      if (_ === g) {
        r.push(_);
        continue;
      }
      const x = Math.abs((i - _[e]) / (g[e] - _[e])), b = d(_, g, x, n.stepped);
      b[e] = t[e], r.push(b);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, n) {
    return $i(this)(t, this, e, n);
  }
  path(t, e, n) {
    const i = this.segments, a = $i(this);
    let o = this._loop;
    e = e || 0, n = n || this.points.length - e;
    for (const r of i)
      o &= a(t, this, r, {
        start: e,
        end: e + n - 1
      });
    return !!o;
  }
  draw(t, e, n, i) {
    const a = this.options || {};
    (this.points || []).length && a.borderWidth && (t.save(), Km(t, this, n, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
et(xe, "id", "line"), et(xe, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), et(xe, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), et(xe, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Za(s, t, e, n) {
  const i = s.options, { [e]: a } = s.getProps([
    e
  ], n);
  return Math.abs(t - a) < i.radius + i.hitRadius;
}
class xs extends oe {
  constructor(e) {
    super();
    et(this, "parsed");
    et(this, "skip");
    et(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, n, i) {
    const a = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(e - o, 2) + Math.pow(n - r, 2) < Math.pow(a.hitRadius + a.radius, 2);
  }
  inXRange(e, n) {
    return Za(this, e, "x", n);
  }
  inYRange(e, n) {
    return Za(this, e, "y", n);
  }
  getCenterPoint(e) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: n,
      y: i
    };
  }
  size(e) {
    e = e || this.options || {};
    let n = e.radius || 0;
    n = Math.max(n, n && e.hoverRadius || 0);
    const i = n && e.borderWidth || 0;
    return (n + i) * 2;
  }
  draw(e, n) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !Js(this, n, this.size(i) / 2) || (e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth, e.fillStyle = i.backgroundColor, ki(e, i, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
et(xs, "id", "point"), /**
* @type {any}
*/
et(xs, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
et(xs, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function _r(s, t) {
  const { x: e, y: n, base: i, width: a, height: o } = s.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, d, c, u, p;
  return s.horizontal ? (p = o / 2, r = Math.min(e, i), d = Math.max(e, i), c = n - p, u = n + p) : (p = a / 2, r = e - p, d = e + p, c = Math.min(n, i), u = Math.max(n, i)), {
    left: r,
    top: c,
    right: d,
    bottom: u
  };
}
function Le(s, t, e, n) {
  return s ? 0 : Ft(t, e, n);
}
function Qm(s, t, e) {
  const n = s.options.borderWidth, i = s.borderSkipped, a = Wo(n);
  return {
    t: Le(i.top, a.top, 0, e),
    r: Le(i.right, a.right, 0, t),
    b: Le(i.bottom, a.bottom, 0, e),
    l: Le(i.left, a.left, 0, t)
  };
}
function Jm(s, t, e) {
  const { enableBorderRadius: n } = s.getProps([
    "enableBorderRadius"
  ]), i = s.options.borderRadius, a = ms(i), o = Math.min(t, e), r = s.borderSkipped, d = n || mt(i);
  return {
    topLeft: Le(!d || r.top || r.left, a.topLeft, 0, o),
    topRight: Le(!d || r.top || r.right, a.topRight, 0, o),
    bottomLeft: Le(!d || r.bottom || r.left, a.bottomLeft, 0, o),
    bottomRight: Le(!d || r.bottom || r.right, a.bottomRight, 0, o)
  };
}
function Zm(s) {
  const t = _r(s), e = t.right - t.left, n = t.bottom - t.top, i = Qm(s, e / 2, n / 2), a = Jm(s, e / 2, n / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: n,
      radius: a
    },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: e - i.l - i.r,
      h: n - i.t - i.b,
      radius: {
        topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r))
      }
    }
  };
}
function li(s, t, e, n) {
  const i = t === null, a = e === null, r = s && !(i && a) && _r(s, n);
  return r && (i || De(t, r.left, r.right)) && (a || De(e, r.top, r.bottom));
}
function t_(s) {
  return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight;
}
function e_(s, t) {
  s.rect(t.x, t.y, t.w, t.h);
}
function di(s, t, e = {}) {
  const n = s.x !== e.x ? -t : 0, i = s.y !== e.y ? -t : 0, a = (s.x + s.w !== e.x + e.w ? t : 0) - n, o = (s.y + s.h !== e.y + e.h ? t : 0) - i;
  return {
    x: s.x + n,
    y: s.y + i,
    w: s.w + a,
    h: s.h + o,
    radius: s.radius
  };
}
class Dn extends oe {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: n, backgroundColor: i } } = this, { inner: a, outer: o } = Zm(this), r = t_(o.radius) ? Ln : e_;
    t.save(), (o.w !== a.w || o.h !== a.h) && (t.beginPath(), r(t, di(o, e, a)), t.clip(), r(t, di(a, -e, o)), t.fillStyle = n, t.fill("evenodd")), t.beginPath(), r(t, di(a, e)), t.fillStyle = i, t.fill(), t.restore();
  }
  inRange(t, e, n) {
    return li(this, t, e, n);
  }
  inXRange(t, e) {
    return li(this, t, null, e);
  }
  inYRange(t, e) {
    return li(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: n, base: i, horizontal: a } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: a ? (e + i) / 2 : e,
      y: a ? n : (n + i) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
et(Dn, "id", "bar"), et(Dn, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), et(Dn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function s_(s, t, e) {
  const n = s.segments, i = s.points, a = t.points, o = [];
  for (const r of n) {
    let { start: d, end: c } = r;
    c = Hn(d, c, i);
    const u = Ci(e, i[d], i[c], r.loop);
    if (!t.segments) {
      o.push({
        source: r,
        target: u,
        start: i[d],
        end: i[c]
      });
      continue;
    }
    const p = er(t, u);
    for (const m of p) {
      const _ = Ci(e, a[m.start], a[m.end], m.loop), g = tr(r, i, _);
      for (const x of g)
        o.push({
          source: x,
          target: m,
          start: {
            [e]: to(u, _, "start", Math.max)
          },
          end: {
            [e]: to(u, _, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function Ci(s, t, e, n) {
  if (n)
    return;
  let i = t[s], a = e[s];
  return s === "angle" && (i = Qt(i), a = Qt(a)), {
    property: s,
    start: i,
    end: a
  };
}
function n_(s, t) {
  const { x: e = null, y: n = null } = s || {}, i = t.points, a = [];
  return t.segments.forEach(({ start: o, end: r }) => {
    r = Hn(o, r, i);
    const d = i[o], c = i[r];
    n !== null ? (a.push({
      x: d.x,
      y: n
    }), a.push({
      x: c.x,
      y: n
    })) : e !== null && (a.push({
      x: e,
      y: d.y
    }), a.push({
      x: e,
      y: c.y
    }));
  }), a;
}
function Hn(s, t, e) {
  for (; t > s; t--) {
    const n = e[t];
    if (!isNaN(n.x) && !isNaN(n.y))
      break;
  }
  return t;
}
function to(s, t, e, n) {
  return s && t ? n(s[e], t[e]) : s ? s[e] : t ? t[e] : 0;
}
function xr(s, t) {
  let e = [], n = !1;
  return Tt(s) ? (n = !0, e = s) : e = n_(s, t), e.length ? new xe({
    points: e,
    options: {
      tension: 0
    },
    _loop: n,
    _fullLoop: n
  }) : null;
}
function eo(s) {
  return s && s.fill !== !1;
}
function i_(s, t, e) {
  let i = s[t].fill;
  const a = [
    t
  ];
  let o;
  if (!e)
    return i;
  for (; i !== !1 && a.indexOf(i) === -1; ) {
    if (!Bt(i))
      return i;
    if (o = s[i], !o)
      return !1;
    if (o.visible)
      return i;
    a.push(i), i = o.fill;
  }
  return !1;
}
function a_(s, t, e) {
  const n = d_(s);
  if (mt(n))
    return isNaN(n.value) ? !1 : n;
  let i = parseFloat(n);
  return Bt(i) && Math.floor(i) === i ? o_(n[0], t, i, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(n) >= 0 && n;
}
function o_(s, t, e, n) {
  return (s === "-" || s === "+") && (e = t + e), e === t || e < 0 || e >= n ? !1 : e;
}
function r_(s, t) {
  let e = null;
  return s === "start" ? e = t.bottom : s === "end" ? e = t.top : mt(s) ? e = t.getPixelForValue(s.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function l_(s, t, e) {
  let n;
  return s === "start" ? n = e : s === "end" ? n = t.options.reverse ? t.min : t.max : mt(s) ? n = s.value : n = t.getBaseValue(), n;
}
function d_(s) {
  const t = s.options, e = t.fill;
  let n = ut(e && e.target, e);
  return n === void 0 && (n = !!t.backgroundColor), n === !1 || n === null ? !1 : n === !0 ? "origin" : n;
}
function c_(s) {
  const { scale: t, index: e, line: n } = s, i = [], a = n.segments, o = n.points, r = u_(t, e);
  r.push(xr({
    x: null,
    y: t.bottom
  }, n));
  for (let d = 0; d < a.length; d++) {
    const c = a[d];
    for (let u = c.start; u <= c.end; u++)
      h_(i, o[u], r);
  }
  return new xe({
    points: i,
    options: {}
  });
}
function u_(s, t) {
  const e = [], n = s.getMatchingVisibleMetas("line");
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (a.index === t)
      break;
    a.hidden || e.unshift(a.dataset);
  }
  return e;
}
function h_(s, t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const a = e[i], { first: o, last: r, point: d } = p_(a, t, "x");
    if (!(!d || o && r)) {
      if (o)
        n.unshift(d);
      else if (s.push(d), !r)
        break;
    }
  }
  s.push(...n);
}
function p_(s, t, e) {
  const n = s.interpolate(t, e);
  if (!n)
    return {};
  const i = n[e], a = s.segments, o = s.points;
  let r = !1, d = !1;
  for (let c = 0; c < a.length; c++) {
    const u = a[c], p = o[u.start][e], m = o[u.end][e];
    if (De(i, p, m)) {
      r = i === p, d = i === m;
      break;
    }
  }
  return {
    first: r,
    last: d,
    point: n
  };
}
class yr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, n) {
    const { x: i, y: a, radius: o } = this;
    return e = e || {
      start: 0,
      end: $t
    }, t.arc(i, a, o, e.end, e.start, !0), !n.bounds;
  }
  interpolate(t) {
    const { x: e, y: n, radius: i } = this, a = t.angle;
    return {
      x: e + Math.cos(a) * i,
      y: n + Math.sin(a) * i,
      angle: a
    };
  }
}
function f_(s) {
  const { chart: t, fill: e, line: n } = s;
  if (Bt(e))
    return g_(t, e);
  if (e === "stack")
    return c_(s);
  if (e === "shape")
    return !0;
  const i = m_(s);
  return i instanceof yr ? i : xr(i, n);
}
function g_(s, t) {
  const e = s.getDatasetMeta(t);
  return e && s.isDatasetVisible(t) ? e.dataset : null;
}
function m_(s) {
  return (s.scale || {}).getPointPositionForValue ? x_(s) : __(s);
}
function __(s) {
  const { scale: t = {}, fill: e } = s, n = r_(e, t);
  if (Bt(n)) {
    const i = t.isHorizontal();
    return {
      x: i ? n : null,
      y: i ? null : n
    };
  }
  return null;
}
function x_(s) {
  const { scale: t, fill: e } = s, n = t.options, i = t.getLabels().length, a = n.reverse ? t.max : t.min, o = l_(e, t, a), r = [];
  if (n.grid.circular) {
    const d = t.getPointPositionForValue(0, a);
    return new yr({
      x: d.x,
      y: d.y,
      radius: t.getDistanceFromCenterForValue(o)
    });
  }
  for (let d = 0; d < i; ++d)
    r.push(t.getPointPositionForValue(d, o));
  return r;
}
function ci(s, t, e) {
  const n = f_(t), { chart: i, index: a, line: o, scale: r, axis: d } = t, c = o.options, u = c.fill, p = c.backgroundColor, { above: m = p, below: _ = p } = u || {}, g = i.getDatasetMeta(a), x = sr(i, g);
  n && o.points.length && (Bn(s, e), y_(s, {
    line: o,
    target: n,
    above: m,
    below: _,
    area: e,
    scale: r,
    axis: d,
    clip: x
  }), jn(s));
}
function y_(s, t) {
  const { line: e, target: n, above: i, below: a, area: o, scale: r, clip: d } = t, c = e._loop ? "angle" : t.axis;
  s.save();
  let u = a;
  a !== i && (c === "x" ? (so(s, n, o.top), ui(s, {
    line: e,
    target: n,
    color: i,
    scale: r,
    property: c,
    clip: d
  }), s.restore(), s.save(), so(s, n, o.bottom)) : c === "y" && (no(s, n, o.left), ui(s, {
    line: e,
    target: n,
    color: a,
    scale: r,
    property: c,
    clip: d
  }), s.restore(), s.save(), no(s, n, o.right), u = i)), ui(s, {
    line: e,
    target: n,
    color: u,
    scale: r,
    property: c,
    clip: d
  }), s.restore();
}
function so(s, t, e) {
  const { segments: n, points: i } = t;
  let a = !0, o = !1;
  s.beginPath();
  for (const r of n) {
    const { start: d, end: c } = r, u = i[d], p = i[Hn(d, c, i)];
    a ? (s.moveTo(u.x, u.y), a = !1) : (s.lineTo(u.x, e), s.lineTo(u.x, u.y)), o = !!t.pathSegment(s, r, {
      move: o
    }), o ? s.closePath() : s.lineTo(p.x, e);
  }
  s.lineTo(t.first().x, e), s.closePath(), s.clip();
}
function no(s, t, e) {
  const { segments: n, points: i } = t;
  let a = !0, o = !1;
  s.beginPath();
  for (const r of n) {
    const { start: d, end: c } = r, u = i[d], p = i[Hn(d, c, i)];
    a ? (s.moveTo(u.x, u.y), a = !1) : (s.lineTo(e, u.y), s.lineTo(u.x, u.y)), o = !!t.pathSegment(s, r, {
      move: o
    }), o ? s.closePath() : s.lineTo(e, p.y);
  }
  s.lineTo(e, t.first().y), s.closePath(), s.clip();
}
function ui(s, t) {
  const { line: e, target: n, property: i, color: a, scale: o, clip: r } = t, d = s_(e, n, i);
  for (const { source: c, target: u, start: p, end: m } of d) {
    const { style: { backgroundColor: _ = a } = {} } = c, g = n !== !0;
    s.save(), s.fillStyle = _, b_(s, o, r, g && Ci(i, p, m)), s.beginPath();
    const x = !!e.pathSegment(s, c);
    let b;
    if (g) {
      x ? s.closePath() : io(s, n, m, i);
      const y = !!n.pathSegment(s, u, {
        move: x,
        reverse: !0
      });
      b = x && y, b || io(s, n, p, i);
    }
    s.closePath(), s.fill(b ? "evenodd" : "nonzero"), s.restore();
  }
}
function b_(s, t, e, n) {
  const i = t.chart.chartArea, { property: a, start: o, end: r } = n || {};
  if (a === "x" || a === "y") {
    let d, c, u, p;
    a === "x" ? (d = o, c = i.top, u = r, p = i.bottom) : (d = i.left, c = o, u = i.right, p = r), s.beginPath(), e && (d = Math.max(d, e.left), u = Math.min(u, e.right), c = Math.max(c, e.top), p = Math.min(p, e.bottom)), s.rect(d, c, u - d, p - c), s.clip();
  }
}
function io(s, t, e, n) {
  const i = t.interpolate(e, n);
  i && s.lineTo(i.x, i.y);
}
var Wi = {
  id: "filler",
  afterDatasetsUpdate(s, t, e) {
    const n = (s.data.datasets || []).length, i = [];
    let a, o, r, d;
    for (o = 0; o < n; ++o)
      a = s.getDatasetMeta(o), r = a.dataset, d = null, r && r.options && r instanceof xe && (d = {
        visible: s.isDatasetVisible(o),
        index: o,
        fill: a_(r, o, n),
        chart: s,
        axis: a.controller.options.indexAxis,
        scale: a.vScale,
        line: r
      }), a.$filler = d, i.push(d);
    for (o = 0; o < n; ++o)
      d = i[o], !(!d || d.fill === !1) && (d.fill = i_(i, o, e.propagate));
  },
  beforeDraw(s, t, e) {
    const n = e.drawTime === "beforeDraw", i = s.getSortedVisibleDatasetMetas(), a = s.chartArea;
    for (let o = i.length - 1; o >= 0; --o) {
      const r = i[o].$filler;
      r && (r.line.updateControlPoints(a, r.axis), n && r.fill && ci(s.ctx, r, a));
    }
  },
  beforeDatasetsDraw(s, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const n = s.getSortedVisibleDatasetMetas();
    for (let i = n.length - 1; i >= 0; --i) {
      const a = n[i].$filler;
      eo(a) && ci(s.ctx, a, s.chartArea);
    }
  },
  beforeDatasetDraw(s, t, e) {
    const n = t.meta.$filler;
    !eo(n) || e.drawTime !== "beforeDatasetDraw" || ci(s.ctx, n, s.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const ao = (s, t) => {
  let { boxHeight: e = t, boxWidth: n = t } = s;
  return s.usePointStyle && (e = Math.min(e, t), n = s.pointStyleWidth || Math.min(n, t)), {
    boxWidth: n,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, v_ = (s, t) => s !== null && t !== null && s.datasetIndex === t.datasetIndex && s.index === t.index;
class oo extends oe {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, n) {
    this.maxWidth = t, this.maxHeight = e, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = St(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))), t.sort && (e = e.sort((n, i) => t.sort(n, i, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels, i = Vt(n.font), a = i.size, o = this._computeTitleHeight(), { boxWidth: r, itemHeight: d } = ao(n, a);
    let c, u;
    e.font = i.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(o, a, r, d) + 10) : (u = this.maxHeight, c = this._fitCols(o, i, r, d) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, n, i) {
    const { ctx: a, maxWidth: o, options: { labels: { padding: r } } } = this, d = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = i + r;
    let p = t;
    a.textAlign = "left", a.textBaseline = "middle";
    let m = -1, _ = -u;
    return this.legendItems.forEach((g, x) => {
      const b = n + e / 2 + a.measureText(g.text).width;
      (x === 0 || c[c.length - 1] + b + 2 * r > o) && (p += u, c[c.length - (x > 0 ? 0 : 1)] = 0, _ += u, m++), d[x] = {
        left: 0,
        top: _,
        row: m,
        width: b,
        height: i
      }, c[c.length - 1] += b + r;
    }), p;
  }
  _fitCols(t, e, n, i) {
    const { ctx: a, maxHeight: o, options: { labels: { padding: r } } } = this, d = this.legendHitBoxes = [], c = this.columnSizes = [], u = o - t;
    let p = r, m = 0, _ = 0, g = 0, x = 0;
    return this.legendItems.forEach((b, y) => {
      const { itemWidth: T, itemHeight: B } = k_(n, e, a, b, i);
      y > 0 && _ + B + 2 * r > u && (p += m + r, c.push({
        width: m,
        height: _
      }), g += m + r, x++, m = _ = 0), d[y] = {
        left: g,
        top: _,
        col: x,
        width: T,
        height: B
      }, m = Math.max(m, T), _ += B + r;
    }), p += m, c.push({
      width: m,
      height: _
    }), p;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: n, labels: { padding: i }, rtl: a } } = this, o = _s(a, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, d = It(n, this.left + i, this.right - this.lineWidths[r]);
      for (const c of e)
        r !== c.row && (r = c.row, d = It(n, this.left + i, this.right - this.lineWidths[r])), c.top += this.top + t + i, c.left = o.leftForLtr(o.x(d), c.width), d += c.width + i;
    } else {
      let r = 0, d = It(n, this.top + t + i, this.bottom - this.columnSizes[r].height);
      for (const c of e)
        c.col !== r && (r = c.col, d = It(n, this.top + t + i, this.bottom - this.columnSizes[r].height)), c.top = d, c.left += this.left + i, c.left = o.leftForLtr(o.x(c.left), c.width), d += c.height + i;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Bn(t, this), this._draw(), jn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this, { align: a, labels: o } = t, r = Rt.color, d = _s(t.rtl, this.left, this.width), c = Vt(o.font), { padding: u } = o, p = c.size, m = p / 2;
    let _;
    this.drawTitle(), i.textAlign = d.textAlign("left"), i.textBaseline = "middle", i.lineWidth = 0.5, i.font = c.string;
    const { boxWidth: g, boxHeight: x, itemHeight: b } = ao(o, p), y = function(j, D, S) {
      if (isNaN(g) || g <= 0 || isNaN(x) || x < 0)
        return;
      i.save();
      const w = ut(S.lineWidth, 1);
      if (i.fillStyle = ut(S.fillStyle, r), i.lineCap = ut(S.lineCap, "butt"), i.lineDashOffset = ut(S.lineDashOffset, 0), i.lineJoin = ut(S.lineJoin, "miter"), i.lineWidth = w, i.strokeStyle = ut(S.strokeStyle, r), i.setLineDash(ut(S.lineDash, [])), o.usePointStyle) {
        const V = {
          radius: x * Math.SQRT2 / 2,
          pointStyle: S.pointStyle,
          rotation: S.rotation,
          borderWidth: w
        }, L = d.xPlus(j, g / 2), A = D + m;
        Ho(i, V, L, A, o.pointStyleWidth && g);
      } else {
        const V = D + Math.max((p - x) / 2, 0), L = d.leftForLtr(j, g), A = ms(S.borderRadius);
        i.beginPath(), Object.values(A).some((E) => E !== 0) ? Ln(i, {
          x: L,
          y: V,
          w: g,
          h: x,
          radius: A
        }) : i.rect(L, V, g, x), i.fill(), w !== 0 && i.stroke();
      }
      i.restore();
    }, T = function(j, D, S) {
      Zs(i, S.text, j, D + b / 2, c, {
        strikethrough: S.hidden,
        textAlign: d.textAlign(S.textAlign)
      });
    }, B = this.isHorizontal(), F = this._computeTitleHeight();
    B ? _ = {
      x: It(a, this.left + u, this.right - n[0]),
      y: this.top + u + F,
      line: 0
    } : _ = {
      x: this.left + u,
      y: It(a, this.top + F + u, this.bottom - e[0].height),
      line: 0
    }, Qo(this.ctx, t.textDirection);
    const O = b + u;
    this.legendItems.forEach((j, D) => {
      i.strokeStyle = j.fontColor, i.fillStyle = j.fontColor;
      const S = i.measureText(j.text).width, w = d.textAlign(j.textAlign || (j.textAlign = o.textAlign)), V = g + m + S;
      let L = _.x, A = _.y;
      d.setWidth(this.width), B ? D > 0 && L + V + u > this.right && (A = _.y += O, _.line++, L = _.x = It(a, this.left + u, this.right - n[_.line])) : D > 0 && A + O > this.bottom && (L = _.x = L + e[_.line].width + u, _.line++, A = _.y = It(a, this.top + F + u, this.bottom - e[_.line].height));
      const E = d.x(L);
      if (y(E, A, j), L = Zf(w, L + g + m, B ? L + V : this.right, t.rtl), T(d.x(L), A, j), B)
        _.x += V + u;
      else if (typeof j.text != "string") {
        const N = c.lineHeight;
        _.y += br(j, N) + u;
      } else
        _.y += O;
    }), Jo(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, n = Vt(e.font), i = ne(e.padding);
    if (!e.display)
      return;
    const a = _s(t.rtl, this.left, this.width), o = this.ctx, r = e.position, d = n.size / 2, c = i.top + d;
    let u, p = this.left, m = this.width;
    if (this.isHorizontal())
      m = Math.max(...this.lineWidths), u = this.top + c, p = It(t.align, p, this.right - m);
    else {
      const g = this.columnSizes.reduce((x, b) => Math.max(x, b.height), 0);
      u = c + It(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const _ = It(r, p, p + m);
    o.textAlign = a.textAlign(Li(r)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = n.string, Zs(o, e.text, _, u, n);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = Vt(t.font), n = ne(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, i, a;
    if (De(t, this.left, this.right) && De(e, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, n = 0; n < a.length; ++n)
        if (i = a[n], De(t, i.left, i.left + i.width) && De(e, i.top, i.top + i.height))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!$_(t.type, e))
      return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem, a = v_(i, n);
      i && !a && St(e.onLeave, [
        t,
        i,
        this
      ], this), this._hoveredItem = n, n && !a && St(e.onHover, [
        t,
        n,
        this
      ], this);
    } else n && St(e.onClick, [
      t,
      n,
      this
    ], this);
  }
}
function k_(s, t, e, n, i) {
  const a = w_(n, s, t, e), o = S_(i, n, t.lineHeight);
  return {
    itemWidth: a,
    itemHeight: o
  };
}
function w_(s, t, e, n) {
  let i = s.text;
  return i && typeof i != "string" && (i = i.reduce((a, o) => a.length > o.length ? a : o)), t + e.size / 2 + n.measureText(i).width;
}
function S_(s, t, e) {
  let n = s;
  return typeof t.text != "string" && (n = br(t, e)), n;
}
function br(s, t) {
  const e = s.text ? s.text.length : 0;
  return t * e;
}
function $_(s, t) {
  return !!((s === "mousemove" || s === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (s === "click" || s === "mouseup"));
}
var nn = {
  id: "legend",
  _element: oo,
  start(s, t, e) {
    const n = s.legend = new oo({
      ctx: s.ctx,
      options: e,
      chart: s
    });
    se.configure(s, n, e), se.addBox(s, n);
  },
  stop(s) {
    se.removeBox(s, s.legend), delete s.legend;
  },
  beforeUpdate(s, t, e) {
    const n = s.legend;
    se.configure(s, n, e), n.options = e;
  },
  afterUpdate(s) {
    const t = s.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(s, t) {
    t.replay || s.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(s, t, e) {
      const n = t.datasetIndex, i = e.chart;
      i.isDatasetVisible(n) ? (i.hide(n), t.hidden = !0) : (i.show(n), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (s) => s.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(s) {
        const t = s.data.datasets, { labels: { usePointStyle: e, pointStyle: n, textAlign: i, color: a, useBorderRadius: o, borderRadius: r } } = s.legend.options;
        return s._getSortedDatasetMetas().map((d) => {
          const c = d.controller.getStyle(e ? 0 : void 0), u = ne(c.borderWidth);
          return {
            text: t[d.index].label,
            fillStyle: c.backgroundColor,
            fontColor: a,
            hidden: !d.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: o && (r || c.borderRadius),
            datasetIndex: d.index
          };
        }, this);
      }
    },
    title: {
      color: (s) => s.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (s) => !s.startsWith("on"),
    labels: {
      _scriptable: (s) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(s)
    }
  }
};
class vr extends oe {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const n = this.options;
    if (this.left = 0, this.top = 0, !n.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const i = Tt(n.text) ? n.text.length : 1;
    this._padding = ne(n.padding);
    const a = i * Vt(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = a : this.width = a;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: i, right: a, options: o } = this, r = o.align;
    let d = 0, c, u, p;
    return this.isHorizontal() ? (u = It(r, n, a), p = e + t, c = a - n) : (o.position === "left" ? (u = n + t, p = It(r, i, e), d = bt * -0.5) : (u = a - t, p = It(r, e, i), d = bt * 0.5), c = i - e), {
      titleX: u,
      titleY: p,
      maxWidth: c,
      rotation: d
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const n = Vt(e.font), a = n.lineHeight / 2 + this._padding.top, { titleX: o, titleY: r, maxWidth: d, rotation: c } = this._drawArgs(a);
    Zs(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: d,
      rotation: c,
      textAlign: Li(e.align),
      textBaseline: "middle",
      translation: [
        o,
        r
      ]
    });
  }
}
function C_(s, t) {
  const e = new vr({
    ctx: s.ctx,
    options: t,
    chart: s
  });
  se.configure(s, e, t), se.addBox(s, e), s.titleBlock = e;
}
var Ui = {
  id: "title",
  _element: vr,
  start(s, t, e) {
    C_(s, e);
  },
  stop(s) {
    const t = s.titleBlock;
    se.removeBox(s, t), delete s.titleBlock;
  },
  beforeUpdate(s, t, e) {
    const n = s.titleBlock;
    se.configure(s, n, e), n.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Bs = {
  average(s) {
    if (!s.length)
      return !1;
    let t, e, n = /* @__PURE__ */ new Set(), i = 0, a = 0;
    for (t = 0, e = s.length; t < e; ++t) {
      const r = s[t].element;
      if (r && r.hasValue()) {
        const d = r.tooltipPosition();
        n.add(d.x), i += d.y, ++a;
      }
    }
    return a === 0 || n.size === 0 ? !1 : {
      x: [
        ...n
      ].reduce((r, d) => r + d) / n.size,
      y: i / a
    };
  },
  nearest(s, t) {
    if (!s.length)
      return !1;
    let e = t.x, n = t.y, i = Number.POSITIVE_INFINITY, a, o, r;
    for (a = 0, o = s.length; a < o; ++a) {
      const d = s[a].element;
      if (d && d.hasValue()) {
        const c = d.getCenterPoint(), u = bi(t, c);
        u < i && (i = u, r = d);
      }
    }
    if (r) {
      const d = r.tooltipPosition();
      e = d.x, n = d.y;
    }
    return {
      x: e,
      y: n
    };
  }
};
function fe(s, t) {
  return t && (Tt(t) ? Array.prototype.push.apply(s, t) : s.push(t)), s;
}
function $e(s) {
  return (typeof s == "string" || s instanceof String) && s.indexOf(`
`) > -1 ? s.split(`
`) : s;
}
function M_(s, t) {
  const { element: e, datasetIndex: n, index: i } = t, a = s.getDatasetMeta(n).controller, { label: o, value: r } = a.getLabelAndValue(i);
  return {
    chart: s,
    label: o,
    parsed: a.getParsed(i),
    raw: s.data.datasets[n].data[i],
    formattedValue: r,
    dataset: a.getDataset(),
    dataIndex: i,
    datasetIndex: n,
    element: e
  };
}
function ro(s, t) {
  const e = s.chart.ctx, { body: n, footer: i, title: a } = s, { boxWidth: o, boxHeight: r } = t, d = Vt(t.bodyFont), c = Vt(t.titleFont), u = Vt(t.footerFont), p = a.length, m = i.length, _ = n.length, g = ne(t.padding);
  let x = g.height, b = 0, y = n.reduce((F, O) => F + O.before.length + O.lines.length + O.after.length, 0);
  if (y += s.beforeBody.length + s.afterBody.length, p && (x += p * c.lineHeight + (p - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const F = t.displayColors ? Math.max(r, d.lineHeight) : d.lineHeight;
    x += _ * F + (y - _) * d.lineHeight + (y - 1) * t.bodySpacing;
  }
  m && (x += t.footerMarginTop + m * u.lineHeight + (m - 1) * t.footerSpacing);
  let T = 0;
  const B = function(F) {
    b = Math.max(b, e.measureText(F).width + T);
  };
  return e.save(), e.font = c.string, yt(s.title, B), e.font = d.string, yt(s.beforeBody.concat(s.afterBody), B), T = t.displayColors ? o + 2 + t.boxPadding : 0, yt(n, (F) => {
    yt(F.before, B), yt(F.lines, B), yt(F.after, B);
  }), T = 0, e.font = u.string, yt(s.footer, B), e.restore(), b += g.width, {
    width: b,
    height: x
  };
}
function D_(s, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? "top" : e > s.height - n / 2 ? "bottom" : "center";
}
function R_(s, t, e, n) {
  const { x: i, width: a } = n, o = e.caretSize + e.caretPadding;
  if (s === "left" && i + a + o > t.width || s === "right" && i - a - o < 0)
    return !0;
}
function T_(s, t, e, n) {
  const { x: i, width: a } = e, { width: o, chartArea: { left: r, right: d } } = s;
  let c = "center";
  return n === "center" ? c = i <= (r + d) / 2 ? "left" : "right" : i <= a / 2 ? c = "left" : i >= o - a / 2 && (c = "right"), R_(c, s, t, e) && (c = "center"), c;
}
function lo(s, t, e) {
  const n = e.yAlign || t.yAlign || D_(s, e);
  return {
    xAlign: e.xAlign || t.xAlign || T_(s, t, e, n),
    yAlign: n
  };
}
function P_(s, t) {
  let { x: e, width: n } = s;
  return t === "right" ? e -= n : t === "center" && (e -= n / 2), e;
}
function O_(s, t, e) {
  let { y: n, height: i } = s;
  return t === "top" ? n += e : t === "bottom" ? n -= i + e : n -= i / 2, n;
}
function co(s, t, e, n) {
  const { caretSize: i, caretPadding: a, cornerRadius: o } = s, { xAlign: r, yAlign: d } = e, c = i + a, { topLeft: u, topRight: p, bottomLeft: m, bottomRight: _ } = ms(o);
  let g = P_(t, r);
  const x = O_(t, d, c);
  return d === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(u, m) + i : r === "right" && (g += Math.max(p, _) + i), {
    x: Ft(g, 0, n.width - t.width),
    y: Ft(x, 0, n.height - t.height)
  };
}
function kn(s, t, e) {
  const n = ne(e.padding);
  return t === "center" ? s.x + s.width / 2 : t === "right" ? s.x + s.width - n.right : s.x + n.left;
}
function uo(s) {
  return fe([], $e(s));
}
function A_(s, t, e) {
  return es(s, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function ho(s, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? s.override(e) : s;
}
const kr = {
  beforeTitle: we,
  title(s) {
    if (s.length > 0) {
      const t = s[0], e = t.chart.data.labels, n = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (n > 0 && t.dataIndex < n)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: we,
  beforeBody: we,
  beforeLabel: we,
  label(s) {
    if (this && this.options && this.options.mode === "dataset")
      return s.label + ": " + s.formattedValue || s.formattedValue;
    let t = s.dataset.label || "";
    t && (t += ": ");
    const e = s.formattedValue;
    return xt(e) || (t += e), t;
  },
  labelColor(s) {
    const e = s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(s) {
    const e = s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: we,
  afterBody: we,
  beforeFooter: we,
  footer: we,
  afterFooter: we
};
function Yt(s, t, e, n) {
  const i = s[t].call(e, n);
  return typeof i > "u" ? kr[t].call(e, n) : i;
}
class Mi extends oe {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, n = this.options.setContext(this.getContext()), i = n.enabled && e.options.animation && n.animations, a = new nr(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = A_(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: n } = e, i = Yt(n, "beforeTitle", this, t), a = Yt(n, "title", this, t), o = Yt(n, "afterTitle", this, t);
    let r = [];
    return r = fe(r, $e(i)), r = fe(r, $e(a)), r = fe(r, $e(o)), r;
  }
  getBeforeBody(t, e) {
    return uo(Yt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e, i = [];
    return yt(t, (a) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, r = ho(n, a);
      fe(o.before, $e(Yt(r, "beforeLabel", this, a))), fe(o.lines, Yt(r, "label", this, a)), fe(o.after, $e(Yt(r, "afterLabel", this, a))), i.push(o);
    }), i;
  }
  getAfterBody(t, e) {
    return uo(Yt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e, i = Yt(n, "beforeFooter", this, t), a = Yt(n, "footer", this, t), o = Yt(n, "afterFooter", this, t);
    let r = [];
    return r = fe(r, $e(i)), r = fe(r, $e(a)), r = fe(r, $e(o)), r;
  }
  _createItems(t) {
    const e = this._active, n = this.chart.data, i = [], a = [], o = [];
    let r = [], d, c;
    for (d = 0, c = e.length; d < c; ++d)
      r.push(M_(this.chart, e[d]));
    return t.filter && (r = r.filter((u, p, m) => t.filter(u, p, m, n))), t.itemSort && (r = r.sort((u, p) => t.itemSort(u, p, n))), yt(r, (u) => {
      const p = ho(t.callbacks, u);
      i.push(Yt(p, "labelColor", this, u)), a.push(Yt(p, "labelPointStyle", this, u)), o.push(Yt(p, "labelTextColor", this, u));
    }), this.labelColors = i, this.labelPointStyles = a, this.labelTextColors = o, this.dataPoints = r, r;
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()), i = this._active;
    let a, o = [];
    if (!i.length)
      this.opacity !== 0 && (a = {
        opacity: 0
      });
    else {
      const r = Bs[n.position].call(this, i, this._eventPosition);
      o = this._createItems(n), this.title = this.getTitle(o, n), this.beforeBody = this.getBeforeBody(o, n), this.body = this.getBody(o, n), this.afterBody = this.getAfterBody(o, n), this.footer = this.getFooter(o, n);
      const d = this._size = ro(this, n), c = Object.assign({}, r, d), u = lo(this.chart, n, c), p = co(n, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, a = {
        opacity: 1,
        x: p.x,
        y: p.y,
        width: d.width,
        height: d.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = o, this.$context = void 0, a && this._resolveAnimations().update(this, a), t && n.external && n.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, n, i) {
    const a = this.getCaretPosition(t, n, i);
    e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: i, yAlign: a } = this, { caretSize: o, cornerRadius: r } = n, { topLeft: d, topRight: c, bottomLeft: u, bottomRight: p } = ms(r), { x: m, y: _ } = t, { width: g, height: x } = e;
    let b, y, T, B, F, O;
    return a === "center" ? (F = _ + x / 2, i === "left" ? (b = m, y = b - o, B = F + o, O = F - o) : (b = m + g, y = b + o, B = F - o, O = F + o), T = b) : (i === "left" ? y = m + Math.max(d, u) + o : i === "right" ? y = m + g - Math.max(c, p) - o : y = this.caretX, a === "top" ? (B = _, F = B - o, b = y - o, T = y + o) : (B = _ + x, F = B + o, b = y + o, T = y - o), O = B), {
      x1: b,
      x2: y,
      x3: T,
      y1: B,
      y2: F,
      y3: O
    };
  }
  drawTitle(t, e, n) {
    const i = this.title, a = i.length;
    let o, r, d;
    if (a) {
      const c = _s(n.rtl, this.x, this.width);
      for (t.x = kn(this, n.titleAlign, n), e.textAlign = c.textAlign(n.titleAlign), e.textBaseline = "middle", o = Vt(n.titleFont), r = n.titleSpacing, e.fillStyle = n.titleColor, e.font = o.string, d = 0; d < a; ++d)
        e.fillText(i[d], c.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + r, d + 1 === a && (t.y += n.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, n, i, a) {
    const o = this.labelColors[n], r = this.labelPointStyles[n], { boxHeight: d, boxWidth: c } = a, u = Vt(a.bodyFont), p = kn(this, "left", a), m = i.x(p), _ = d < u.lineHeight ? (u.lineHeight - d) / 2 : 0, g = e.y + _;
    if (a.usePointStyle) {
      const x = {
        radius: Math.min(c, d) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, b = i.leftForLtr(m, c) + c / 2, y = g + d / 2;
      t.strokeStyle = a.multiKeyBackground, t.fillStyle = a.multiKeyBackground, ki(t, x, b, y), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ki(t, x, b, y);
    } else {
      t.lineWidth = mt(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
      const x = i.leftForLtr(m, c), b = i.leftForLtr(i.xPlus(m, 1), c - 2), y = ms(o.borderRadius);
      Object.values(y).some((T) => T !== 0) ? (t.beginPath(), t.fillStyle = a.multiKeyBackground, Ln(t, {
        x,
        y: g,
        w: c,
        h: d,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Ln(t, {
        x: b,
        y: g + 1,
        w: c - 2,
        h: d - 2,
        radius: y
      }), t.fill()) : (t.fillStyle = a.multiKeyBackground, t.fillRect(x, g, c, d), t.strokeRect(x, g, c, d), t.fillStyle = o.backgroundColor, t.fillRect(b, g + 1, c - 2, d - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: i } = this, { bodySpacing: a, bodyAlign: o, displayColors: r, boxHeight: d, boxWidth: c, boxPadding: u } = n, p = Vt(n.bodyFont);
    let m = p.lineHeight, _ = 0;
    const g = _s(n.rtl, this.x, this.width), x = function(S) {
      e.fillText(S, g.x(t.x + _), t.y + m / 2), t.y += m + a;
    }, b = g.textAlign(o);
    let y, T, B, F, O, j, D;
    for (e.textAlign = o, e.textBaseline = "middle", e.font = p.string, t.x = kn(this, b, n), e.fillStyle = n.bodyColor, yt(this.beforeBody, x), _ = r && b !== "right" ? o === "center" ? c / 2 + u : c + 2 + u : 0, F = 0, j = i.length; F < j; ++F) {
      for (y = i[F], T = this.labelTextColors[F], e.fillStyle = T, yt(y.before, x), B = y.lines, r && B.length && (this._drawColorBox(e, t, F, g, n), m = Math.max(p.lineHeight, d)), O = 0, D = B.length; O < D; ++O)
        x(B[O]), m = p.lineHeight;
      yt(y.after, x);
    }
    _ = 0, m = p.lineHeight, yt(this.afterBody, x), t.y -= a;
  }
  drawFooter(t, e, n) {
    const i = this.footer, a = i.length;
    let o, r;
    if (a) {
      const d = _s(n.rtl, this.x, this.width);
      for (t.x = kn(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = d.textAlign(n.footerAlign), e.textBaseline = "middle", o = Vt(n.footerFont), e.fillStyle = n.footerColor, e.font = o.string, r = 0; r < a; ++r)
        e.fillText(i[r], d.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + n.footerSpacing;
    }
  }
  drawBackground(t, e, n, i) {
    const { xAlign: a, yAlign: o } = this, { x: r, y: d } = t, { width: c, height: u } = n, { topLeft: p, topRight: m, bottomLeft: _, bottomRight: g } = ms(i.cornerRadius);
    e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth, e.beginPath(), e.moveTo(r + p, d), o === "top" && this.drawCaret(t, e, n, i), e.lineTo(r + c - m, d), e.quadraticCurveTo(r + c, d, r + c, d + m), o === "center" && a === "right" && this.drawCaret(t, e, n, i), e.lineTo(r + c, d + u - g), e.quadraticCurveTo(r + c, d + u, r + c - g, d + u), o === "bottom" && this.drawCaret(t, e, n, i), e.lineTo(r + _, d + u), e.quadraticCurveTo(r, d + u, r, d + u - _), o === "center" && a === "left" && this.drawCaret(t, e, n, i), e.lineTo(r, d + p), e.quadraticCurveTo(r, d, r + p, d), e.closePath(), e.fill(), i.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, n = this.$animations, i = n && n.x, a = n && n.y;
    if (i || a) {
      const o = Bs[t.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const r = this._size = ro(this, t), d = Object.assign({}, o, this._size), c = lo(e, t, d), u = co(t, d, c, e);
      (i._to !== u.x || a._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = o.x, this.caretY = o.y, this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n)
      return;
    this._updateAnimationTarget(e);
    const i = {
      width: this.width,
      height: this.height
    }, a = {
      x: this.x,
      y: this.y
    };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const o = ne(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = n, this.drawBackground(a, t, i, e), Qo(t, e.textDirection), a.y += o.top, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), Jo(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active, i = t.map(({ datasetIndex: r, index: d }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[d],
        index: d
      };
    }), a = !On(n, i), o = this._positionChanged(i, e);
    (a || o) && (this._active = i, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, a = this._active || [], o = this._getActiveElements(t, a, e, n), r = this._positionChanged(o, t), d = e || !On(o, a) || r;
    return d && (this._active = o, (i.enabled || i.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), d;
  }
  _getActiveElements(t, e, n, i) {
    const a = this.options;
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const o = this.chart.getElementsAtEventForMode(t, a.mode, a, n);
    return a.reverse && o.reverse(), o;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: i, options: a } = this, o = Bs[a.position].call(this, t, e);
    return o !== !1 && (n !== o.x || i !== o.y);
  }
}
et(Mi, "positioners", Bs);
var an = {
  id: "tooltip",
  _element: Mi,
  positioners: Bs,
  afterInit(s, t, e) {
    e && (s.tooltip = new Mi({
      chart: s,
      options: e
    }));
  },
  beforeUpdate(s, t, e) {
    s.tooltip && s.tooltip.initialize(e);
  },
  reset(s, t, e) {
    s.tooltip && s.tooltip.initialize(e);
  },
  afterDraw(s) {
    const t = s.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (s.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(s.ctx), s.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(s, t) {
    if (s.tooltip) {
      const e = t.replay;
      s.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (s, t) => t.bodyFont.size,
    boxWidth: (s, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: kr
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (s) => s !== "filter" && s !== "itemSort" && s !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const E_ = (s, t, e, n) => (typeof t == "string" ? (e = s.push(t) - 1, n.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function L_(s, t, e, n) {
  const i = s.indexOf(t);
  if (i === -1)
    return E_(s, t, e, n);
  const a = s.lastIndexOf(t);
  return i !== a ? e : i;
}
const z_ = (s, t) => s === null ? null : Ft(Math.round(s), 0, t);
function po(s) {
  const t = this.getLabels();
  return s >= 0 && s < t.length ? t[s] : s;
}
class vs extends ws {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: i, label: a } of e)
        n[i] === a && n.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (xt(t))
      return null;
    const n = this.getLabels();
    return e = isFinite(e) && n[e] === t ? e : L_(n, t, ut(e, t), this._addedLabels), z_(e, n.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (n = 0), e || (i = this.getLabels().length - 1)), this.min = n, this.max = i;
  }
  buildTicks() {
    const t = this.min, e = this.max, n = this.options.offset, i = [];
    let a = this.getLabels();
    a = t === 0 && e === a.length - 1 ? a : a.slice(t, e + 1), this._valueRange = Math.max(a.length - (n ? 0 : 1), 1), this._startValue = this.min - (n ? 0.5 : 0);
    for (let o = t; o <= e; o++)
      i.push({
        value: o
      });
    return i;
  }
  getLabelForValue(t) {
    return po.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
et(vs, "id", "category"), et(vs, "defaults", {
  ticks: {
    callback: po
  }
});
function I_(s, t) {
  const e = [], { bounds: i, step: a, min: o, max: r, precision: d, count: c, maxTicks: u, maxDigits: p, includeBounds: m } = s, _ = a || 1, g = u - 1, { min: x, max: b } = t, y = !xt(o), T = !xt(r), B = !xt(c), F = (b - x) / (p + 1);
  let O = da((b - x) / g / _) * _, j, D, S, w;
  if (O < 1e-14 && !y && !T)
    return [
      {
        value: x
      },
      {
        value: b
      }
    ];
  w = Math.ceil(b / O) - Math.floor(x / O), w > g && (O = da(w * O / g / _) * _), xt(d) || (j = Math.pow(10, d), O = Math.ceil(O * j) / j), i === "ticks" ? (D = Math.floor(x / O) * O, S = Math.ceil(b / O) * O) : (D = x, S = b), y && T && a && Hf((r - o) / a, O / 1e3) ? (w = Math.round(Math.min((r - o) / O, u)), O = (r - o) / w, D = o, S = r) : B ? (D = y ? o : D, S = T ? r : S, w = c - 1, O = (S - D) / w) : (w = (S - D) / O, Hs(w, Math.round(w), O / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
  const V = Math.max(ca(O), ca(D));
  j = Math.pow(10, xt(d) ? V : d), D = Math.round(D * j) / j, S = Math.round(S * j) / j;
  let L = 0;
  for (y && (m && D !== o ? (e.push({
    value: o
  }), D < o && L++, Hs(Math.round((D + L * O) * j) / j, o, fo(o, F, s)) && L++) : D < o && L++); L < w; ++L) {
    const A = Math.round((D + L * O) * j) / j;
    if (T && A > r)
      break;
    e.push({
      value: A
    });
  }
  return T && m && S !== r ? e.length && Hs(e[e.length - 1].value, r, fo(r, F, s)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!T || S === r) && e.push({
    value: S
  }), e;
}
function fo(s, t, { horizontal: e, minRotation: n }) {
  const i = Me(n), a = (e ? Math.sin(i) : Math.cos(i)) || 1e-3, o = 0.75 * t * ("" + s).length;
  return Math.min(t / a, o);
}
class F_ extends ws {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return xt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: i, max: a } = this;
    const o = (d) => i = e ? i : d, r = (d) => a = n ? a : d;
    if (t) {
      const d = ye(i), c = ye(a);
      d < 0 && c < 0 ? r(0) : d > 0 && c > 0 && o(0);
    }
    if (i === a) {
      let d = a === 0 ? 1 : Math.abs(a * 0.05);
      r(a + d), t || o(i - d);
    }
    this.min = i, this.max = a;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t, i;
    return n ? (i = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), e = e || 11), e && (i = Math.min(e, i)), i;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const i = {
      maxTicks: n,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, a = this._range || this, o = I_(i, a);
    return t.bounds === "ticks" && Wf(o, this, "value"), t.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const i = (n - e) / Math.max(t.length - 1, 1) / 2;
      e -= i, n += i;
    }
    this._startValue = e, this._endValue = n, this._valueRange = n - e;
  }
  getLabelForValue(t) {
    return Ii(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class ks extends F_ {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = Bt(t) ? t : 0, this.max = Bt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, n = Me(this.options.ticks.minRotation), i = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, a = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, a.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
et(ks, "id", "linear"), et(ks, "defaults", {
  ticks: {
    callback: No.formatters.numeric
  }
});
const Wn = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Gt = /* @__PURE__ */ Object.keys(Wn);
function go(s, t) {
  return s - t;
}
function mo(s, t) {
  if (xt(t))
    return null;
  const e = s._adapter, { parser: n, round: i, isoWeekday: a } = s._parseOpts;
  let o = t;
  return typeof n == "function" && (o = n(o)), Bt(o) || (o = typeof n == "string" ? e.parse(o, n) : e.parse(o)), o === null ? null : (i && (o = i === "week" && (Ks(a) || a === !0) ? e.startOf(o, "isoWeek", a) : e.startOf(o, i)), +o);
}
function _o(s, t, e, n) {
  const i = Gt.length;
  for (let a = Gt.indexOf(s); a < i - 1; ++a) {
    const o = Wn[Gt[a]], r = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((e - t) / (r * o.size)) <= n)
      return Gt[a];
  }
  return Gt[i - 1];
}
function V_(s, t, e, n, i) {
  for (let a = Gt.length - 1; a >= Gt.indexOf(e); a--) {
    const o = Gt[a];
    if (Wn[o].common && s._adapter.diff(i, n, o) >= t - 1)
      return o;
  }
  return Gt[e ? Gt.indexOf(e) : 0];
}
function B_(s) {
  for (let t = Gt.indexOf(s) + 1, e = Gt.length; t < e; ++t)
    if (Wn[Gt[t]].common)
      return Gt[t];
}
function xo(s, t, e) {
  if (!e)
    s[t] = !0;
  else if (e.length) {
    const { lo: n, hi: i } = Ei(e, t), a = e[n] >= t ? e[n] : e[i];
    s[a] = !0;
  }
}
function j_(s, t, e, n) {
  const i = s._adapter, a = +i.startOf(t[0].value, n), o = t[t.length - 1].value;
  let r, d;
  for (r = a; r <= o; r = +i.add(r, 1, n))
    d = e[r], d >= 0 && (t[d].major = !0);
  return t;
}
function yo(s, t, e) {
  const n = [], i = {}, a = t.length;
  let o, r;
  for (o = 0; o < a; ++o)
    r = t[o], i[r] = o, n.push({
      value: r,
      major: !1
    });
  return a === 0 || !e ? n : j_(s, n, i, e);
}
class Vn extends ws {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}), i = this._adapter = new M0._date(t.adapters.date);
    i.init(e), Ns(n.displayFormats, i.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : mo(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, n = t.time.unit || "day";
    let { min: i, max: a, minDefined: o, maxDefined: r } = this.getUserBounds();
    function d(c) {
      !o && !isNaN(c.min) && (i = Math.min(i, c.min)), !r && !isNaN(c.max) && (a = Math.max(a, c.max));
    }
    (!o || !r) && (d(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && d(this.getMinMax(!1))), i = Bt(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n), a = Bt(a) && !isNaN(a) ? a : +e.endOf(Date.now(), n) + 1, this.min = Math.min(i, a - 1), this.max = Math.max(i + 1, a);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], n = t[t.length - 1]), {
      min: e,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, n = t.ticks, i = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const a = this.min, o = this.max, r = Kf(i, a, o);
    return this._unit = e.unit || (n.autoSkip ? _o(e.minUnit, this.min, this.max, this._getLabelCapacity(a)) : V_(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : B_(this._unit), this.initOffsets(i), t.reverse && r.reverse(), yo(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, n = 0, i, a;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - i : e = (this.getDecimalForValue(t[1]) - i) / 2, a = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = a : n = (a - this.getDecimalForValue(t[t.length - 2])) / 2);
    const o = t.length < 3 ? 0.5 : 0.25;
    e = Ft(e, 0, o), n = Ft(n, 0, o), this._offsets = {
      start: e,
      end: n,
      factor: 1 / (e + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, n = this.max, i = this.options, a = i.time, o = a.unit || _o(a.minUnit, e, n, this._getLabelCapacity(e)), r = ut(i.ticks.stepSize, 1), d = o === "week" ? a.isoWeekday : !1, c = Ks(d) || d === !0, u = {};
    let p = e, m, _;
    if (c && (p = +t.startOf(p, "isoWeek", d)), p = +t.startOf(p, c ? "day" : o), t.diff(n, e, o) > 1e5 * r)
      throw new Error(e + " and " + n + " are too far apart with stepSize of " + r + " " + o);
    const g = i.ticks.source === "data" && this.getDataTimestamps();
    for (m = p, _ = 0; m < n; m = +t.add(m, r, o), _++)
      xo(u, m, g);
    return (m === n || i.bounds === "ticks" || _ === 1) && xo(u, m, g), Object.keys(u).sort(go).map((x) => +x);
  }
  getLabelForValue(t) {
    const e = this._adapter, n = this.options.time;
    return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const i = this.options.time.displayFormats, a = this._unit, o = e || i[a];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, e, n, i) {
    const a = this.options, o = a.ticks.callback;
    if (o)
      return St(o, [
        t,
        e,
        n
      ], this);
    const r = a.time.displayFormats, d = this._unit, c = this._majorUnit, u = d && r[d], p = c && r[c], m = n[e], _ = c && p && m && m.major;
    return this._adapter.format(t, i || (_ ? p : u));
  }
  generateTickLabels(t) {
    let e, n, i;
    for (e = 0, n = t.length; e < n; ++e)
      i = t[e], i.label = this._tickFormatFunction(i.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, n = this.ctx.measureText(t).width, i = Me(this.isHorizontal() ? e.maxRotation : e.minRotation), a = Math.cos(i), o = Math.sin(i), r = this._resolveTickFontOptions(0).size;
    return {
      w: n * a + r * o,
      h: n * o + r * a
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, n = e.displayFormats, i = n[e.unit] || n.millisecond, a = this._tickFormatFunction(t, 0, yo(this, [
      t
    ], this._majorUnit), i), o = this._getLabelSize(a), r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, n;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (e = 0, n = i.length; e < n; ++e)
      t = t.concat(i[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (e = 0, n = i.length; e < n; ++e)
      t.push(mo(this, i[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Bo(t.sort(go));
  }
}
et(Vn, "id", "time"), et(Vn, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function wn(s, t, e) {
  let n = 0, i = s.length - 1, a, o, r, d;
  e ? (t >= s[n].pos && t <= s[i].pos && ({ lo: n, hi: i } = Ge(s, "pos", t)), { pos: a, time: r } = s[n], { pos: o, time: d } = s[i]) : (t >= s[n].time && t <= s[i].time && ({ lo: n, hi: i } = Ge(s, "time", t)), { time: a, pos: r } = s[n], { time: o, pos: d } = s[i]);
  const c = o - a;
  return c ? r + (d - r) * (t - a) / c : r;
}
class bo extends Vn {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = wn(e, this.min), this._tableRange = wn(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this, i = [], a = [];
    let o, r, d, c, u;
    for (o = 0, r = t.length; o < r; ++o)
      c = t[o], c >= e && c <= n && i.push(c);
    if (i.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (o = 0, r = i.length; o < r; ++o)
      u = i[o + 1], d = i[o - 1], c = i[o], Math.round((u + d) / 2) !== c && a.push({
        time: c,
        pos: o / (r - 1)
      });
    return a;
  }
  _generate() {
    const t = this.min, e = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(t) || !n.length) && n.splice(0, 0, t), (!n.includes(e) || n.length === 1) && n.push(e), n.sort((i, a) => i - a);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return e.length && n.length ? t = this.normalize(e.concat(n)) : t = e.length ? e : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (wn(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return wn(this._table, n * this._tableRange + this._minPos, !0);
  }
}
et(bo, "id", "timeseries"), et(bo, "defaults", Vn.defaults);
const wr = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, q_ = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, N_ = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...wr,
  ...q_
}, H_ = Ur[0] === "2" ? (s, t) => Object.assign(s, {
  attrs: t
}) : (s, t) => Object.assign(s, t);
function fs(s) {
  return Ro(s) ? fi(s) : s;
}
function W_(s) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
  return Ro(t) ? new Proxy(s, {}) : s;
}
function U_(s, t) {
  const e = s.options;
  e && t && Object.assign(e, t);
}
function Sr(s, t) {
  s.labels = t;
}
function $r(s, t, e) {
  const n = [];
  s.datasets = t.map((i) => {
    const a = s.datasets.find((o) => o[e] === i[e]);
    return !a || !i.data || n.includes(a) ? {
      ...i
    } : (n.push(a), Object.assign(a, i), a);
  });
}
function Y_(s, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return Sr(e, s.labels), $r(e, s.datasets, t), e;
}
const G_ = Mt({
  props: N_,
  setup(s, t) {
    let { expose: e, slots: n } = t;
    const i = I(null), a = Mo(null);
    e({
      chart: a
    });
    const o = () => {
      if (!i.value) return;
      const { type: c, data: u, options: p, plugins: m, datasetIdKey: _ } = s, g = Y_(u, _), x = W_(g, u);
      a.value = new Ve(i.value, {
        type: c,
        data: x,
        options: {
          ...p
        },
        plugins: m
      });
    }, r = () => {
      const c = fi(a.value);
      c && (s.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), a.value = null;
      }, s.destroyDelay) : (c.destroy(), a.value = null));
    }, d = (c) => {
      c.update(s.updateMode);
    };
    return Ze(o), Do(r), _t([
      () => s.options,
      () => s.data
    ], (c, u) => {
      let [p, m] = c, [_, g] = u;
      const x = fi(a.value);
      if (!x)
        return;
      let b = !1;
      if (p) {
        const y = fs(p), T = fs(_);
        y && y !== T && (U_(x, y), b = !0);
      }
      if (m) {
        const y = fs(m.labels), T = fs(g.labels), B = fs(m.datasets), F = fs(g.datasets);
        y !== T && (Sr(x.config.data, y), b = !0), B && B !== F && ($r(x.config.data, B, s.datasetIdKey), b = !0);
      }
      b && Yr(() => {
        d(x);
      });
    }, {
      deep: !0
    }), () => pi("canvas", {
      role: "img",
      "aria-label": s.ariaLabel,
      "aria-describedby": s.ariaDescribedby,
      ref: i
    }, [
      pi("p", {}, [
        n.default ? n.default() : ""
      ])
    ]);
  }
});
function Yi(s, t) {
  return Ve.register(t), Mt({
    props: wr,
    setup(e, n) {
      let { expose: i } = n;
      const a = Mo(null), o = (r) => {
        a.value = r == null ? void 0 : r.chart;
      };
      return i({
        chart: a
      }), () => pi(G_, H_({
        ref: o
      }, {
        type: s,
        ...e
      }));
    }
  });
}
const X_ = /* @__PURE__ */ Yi("bar", Sn), K_ = /* @__PURE__ */ Yi("doughnut", Is), Gi = /* @__PURE__ */ Yi("line", $n), Q_ = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, J_ = { class: "mb-4 flex items-center justify-between" }, Z_ = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, tx = ["disabled", "title"], ex = { class: "relative min-h-0 flex-1" }, sx = {
  key: 0,
  class: "flex h-full flex-col"
}, nx = { class: "flex-1" }, ix = { class: "mt-4 flex flex-col items-center gap-2" }, ax = {
  key: 0,
  class: "text-xs font-bold text-gray-900 dark:text-white"
}, ox = { class: "flex flex-wrap justify-center gap-3" }, rx = { class: "text-gray-500 dark:text-gray-400" }, lx = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, dx = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, cx = /* @__PURE__ */ Mt({
  __name: "OpsErrorDistributionChart",
  props: {
    data: {},
    loading: { type: Boolean }
  },
  emits: ["openDetails"],
  setup(s, { emit: t }) {
    Ve.register(Vs, an, nn);
    const e = s, n = t, { t: i } = Et(), a = P(() => document.documentElement.classList.contains("dark")), o = P(() => ({
      blue: "#3b82f6",
      red: "#ef4444",
      orange: "#fb7185",
      gray: "#9ca3af",
      text: a.value ? "#9ca3af" : "#6b7280"
    })), r = P(
      () => {
        var g;
        return (((g = e.data) == null ? void 0 : g.items) ?? []).reduce((x, b) => x + Number(b.sla || 0), 0);
      }
    ), d = P(() => r.value > 0), c = P(() => d.value ? "ready" : e.loading ? "loading" : "empty"), u = P(() => {
      if (!e.data) return [];
      let g = 0, x = 0, b = 0, y = 0;
      for (const B of e.data.items || []) {
        const F = Number(B.status_code || 0), O = Number(B.sla || 0);
        !Number.isFinite(F) || !Number.isFinite(O) || ([502, 503, 504].includes(F) ? g += O : F >= 400 && F < 500 ? x += O : F === 500 ? b += O : y += O);
      }
      const T = [];
      return g > 0 && T.push({ label: i("admin.ops.upstream"), count: g, color: o.value.orange }), x > 0 && T.push({ label: i("admin.ops.client"), count: x, color: o.value.blue }), b > 0 && T.push({ label: i("admin.ops.system"), count: b, color: o.value.red }), y > 0 && T.push({ label: i("admin.ops.other"), count: y, color: o.value.gray }), T;
    }), p = P(() => u.value.length === 0 ? null : u.value.reduce((g, x) => x.count > g.count ? x : g)), m = P(() => !d.value || u.value.length === 0 ? null : {
      labels: u.value.map((g) => g.label),
      datasets: [
        {
          data: u.value.map((g) => g.count),
          backgroundColor: u.value.map((g) => g.color),
          borderWidth: 0
        }
      ]
    }), _ = P(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: { display: !1 },
        tooltip: {
          backgroundColor: a.value ? "#1f2937" : "#ffffff",
          titleColor: a.value ? "#f3f4f6" : "#111827",
          bodyColor: a.value ? "#d1d5db" : "#4b5563"
        }
      }
    }));
    return (g, x) => (v(), $("div", Q_, [
      l("div", J_, [
        l("h3", Z_, [
          x[1] || (x[1] = l("svg", {
            class: "h-4 w-4 text-red-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            l("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            })
          ], -1)),
          Q(" " + h(f(i)("admin.ops.errorDistribution")) + " ", 1),
          K(Ot, {
            content: f(i)("admin.ops.tooltips.errorDistribution")
          }, null, 8, ["content"])
        ]),
        l("button", {
          type: "button",
          class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
          disabled: c.value !== "ready",
          title: f(i)("admin.ops.errorTrend"),
          onClick: x[0] || (x[0] = (b) => n("openDetails"))
        }, h(f(i)("admin.ops.requestDetails.details")), 9, tx)
      ]),
      l("div", ex, [
        c.value === "ready" && m.value ? (v(), $("div", sx, [
          l("div", nx, [
            K(f(K_), {
              data: m.value,
              options: { ..._.value, cutout: "65%" }
            }, null, 8, ["data", "options"])
          ]),
          l("div", ix, [
            p.value ? (v(), $("div", ax, [
              Q(h(f(i)("admin.ops.top")) + ": ", 1),
              l("span", {
                style: gs({ color: p.value.color })
              }, h(p.value.label), 5)
            ])) : W("", !0),
            l("div", ox, [
              (v(!0), $(gt, null, vt(u.value, (b) => (v(), $("div", {
                key: b.label,
                class: "flex items-center gap-1.5 text-xs"
              }, [
                l("span", {
                  class: "h-2 w-2 rounded-full",
                  style: gs({ backgroundColor: b.color })
                }, null, 4),
                l("span", rx, h(b.label) + " " + h(b.count), 1)
              ]))), 128))
            ])
          ])
        ])) : (v(), $("div", lx, [
          c.value === "loading" ? (v(), $("div", dx, h(f(i)("common.loading")), 1)) : (v(), ft(ts, {
            key: 1,
            title: f(i)("common.noData"),
            description: f(i)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), ux = { status: "idle" }, Cr = "sub2api:ip-geo-cache:v1", Mr = 1440 * 60 * 1e3, vo = 50, hx = "https://get.geojs.io/v1/ip/geo", px = "https://get.geojs.io/v1/ip/geo.json", Nt = gi(/* @__PURE__ */ new Map());
function Xi(s) {
  return (s == null ? void 0 : s.status) === "success" && typeof s.fetchedAt == "number" && Date.now() - s.fetchedAt <= Mr;
}
function Dr(s) {
  const t = Nt.get(s);
  if ((t == null ? void 0 : t.status) === "success" && !Xi(t)) {
    Nt.delete(s), Ki();
    return;
  }
  return t;
}
function Rr(s) {
  const t = s.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (t) {
    const i = Number(t[1]), a = Number(t[2]);
    return i === 10 || i === 127 || i === 169 && a === 254 || i === 172 && a >= 16 && a <= 31 || i === 192 && a === 168;
  }
  const e = s.toLowerCase();
  if (e === "::1") return !0;
  const n = e.split(":", 1)[0];
  return !!(/^fe[89ab][0-9a-f]$/.test(n) || /^f[cd][0-9a-f]{2}$/.test(n));
}
function fx() {
  try {
    const s = localStorage.getItem(Cr);
    if (!s) return;
    const t = JSON.parse(s), e = Date.now();
    for (const [n, i] of Object.entries(t))
      !i || typeof i.fetchedAt != "number" || e - i.fetchedAt > Mr || Nt.set(n, { status: "success", label: i.label, detail: i.detail, fetchedAt: i.fetchedAt });
  } catch {
  }
}
function Ki() {
  try {
    const s = {};
    for (const [t, e] of Nt.entries())
      e.status === "success" && e.label && e.fetchedAt && (s[t] = { label: e.label, detail: e.detail, fetchedAt: e.fetchedAt });
    localStorage.setItem(Cr, JSON.stringify(s));
  } catch {
  }
}
fx();
function Tr(s) {
  return Dr(s) ?? ux;
}
function gx(s) {
  return [s.countryCode, s.region, s.city].filter(
    (e) => !!(e && e.trim())
  ).join(" · ");
}
function mx(s) {
  return {
    countryCode: s.country_code,
    region: s.region,
    city: s.city,
    organization: s.organization,
    timezone: s.timezone,
    accuracy: s.accuracy,
    latitude: s.latitude,
    longitude: s.longitude
  };
}
function Pr(s, t) {
  if (!t || !t.country_code) {
    Nt.set(s, { status: "error" });
    return;
  }
  const e = mx(t);
  Nt.set(s, {
    status: "success",
    label: gx(e),
    detail: e,
    fetchedAt: Date.now()
  });
}
async function ko(s, t = !1) {
  if (Rr(s)) {
    Nt.set(s, { status: "private" });
    return;
  }
  const e = Dr(s);
  if (!(!t && (Xi(e) || (e == null ? void 0 : e.status) === "loading"))) {
    Nt.set(s, { status: "loading" });
    try {
      const n = await fetch(`${hx}/${encodeURIComponent(s)}.json`);
      if (!n.ok) {
        Nt.set(s, { status: "error" });
        return;
      }
      const i = await n.json();
      Pr(s, i), Ki();
    } catch {
      Nt.set(s, { status: "error" });
    }
  }
}
async function _x(s) {
  const t = Array.from(new Set(s)), e = [];
  for (const i of t) {
    if (Rr(i)) {
      Nt.set(i, { status: "private" });
      continue;
    }
    const a = Nt.get(i);
    Xi(a) || (a == null ? void 0 : a.status) === "loading" || e.push(i);
  }
  if (e.length === 0) return !0;
  e.forEach((i) => Nt.set(i, { status: "loading" }));
  let n = !0;
  for (let i = 0; i < e.length; i += vo) {
    const a = e.slice(i, i + vo);
    try {
      const o = await fetch(`${px}?ip=${a.map(encodeURIComponent).join(",")}`);
      if (!o.ok) {
        a.forEach((c) => Nt.set(c, { status: "error" })), n = !1;
        continue;
      }
      const r = await o.json(), d = new Map(r.map((c) => [c.ip, c]));
      a.forEach((c) => Pr(c, d.get(c))), Ki();
    } catch {
      a.forEach((o) => Nt.set(o, { status: "error" })), n = !1;
    }
  }
  return n;
}
const xx = {
  key: 0,
  class: "mt-0.5 text-xs"
}, yx = {
  key: 1,
  class: "mt-0.5 flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"
}, bx = {
  key: 2,
  class: "mt-0.5 flex items-center gap-1 text-xs"
}, vx = ["title"], kx = ["title"], wx = {
  key: 3,
  class: "mt-0.5 text-xs"
}, Sx = {
  key: 4,
  class: "mt-0.5 text-xs text-gray-400 dark:text-gray-500"
}, $x = /* @__PURE__ */ Mt({
  __name: "IpGeoCell",
  props: {
    ip: {}
  },
  setup(s) {
    const t = s, { t: e } = Et(), n = P(() => Tr(t.ip)), i = P(() => {
      const d = n.value.detail;
      return d ? [
        d.organization ? `${e("usage.ipGeo.detailOrg")}: ${d.organization}` : "",
        d.timezone ? `${e("usage.ipGeo.detailTimezone")}: ${d.timezone}` : "",
        d.accuracy != null ? `${e("usage.ipGeo.detailAccuracy")}: ${d.accuracy}km` : "",
        d.latitude && d.longitude ? `${e("usage.ipGeo.detailCoordinates")}: ${d.latitude}, ${d.longitude}` : ""
      ].filter(Boolean).join(`
`) : "";
    }), a = () => {
      ko(t.ip);
    }, o = () => {
      ko(t.ip, !0);
    }, r = () => {
      window.open(
        `https://www.iplocation.net/ip-lookup?query=${encodeURIComponent(t.ip)}`,
        "_blank",
        "noopener,noreferrer"
      );
    };
    return (d, c) => n.value.status === "idle" ? (v(), $("div", xx, [
      l("button", {
        type: "button",
        class: "text-primary-600 underline decoration-dashed underline-offset-2 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
        onClick: a
      }, h(f(e)("usage.ipGeo.fetch")), 1)
    ])) : n.value.status === "loading" ? (v(), $("div", yx, [
      c[0] || (c[0] = l("svg", {
        class: "h-3 w-3 animate-spin",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        })
      ], -1)),
      Q(" " + h(f(e)("usage.ipGeo.fetching")), 1)
    ])) : n.value.status === "success" ? (v(), $("div", bx, [
      l("button", {
        type: "button",
        class: "truncate text-gray-500 underline decoration-dotted underline-offset-2 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",
        title: i.value,
        onClick: r
      }, h(n.value.label), 9, vx),
      l("button", {
        type: "button",
        class: "text-gray-400 hover:text-primary-600 dark:hover:text-primary-400",
        title: f(e)("usage.ipGeo.refreshTitle"),
        onClick: o
      }, [
        K(ee, {
          name: "refresh",
          size: "xs"
        })
      ], 8, kx)
    ])) : n.value.status === "error" ? (v(), $("div", wx, [
      l("button", {
        type: "button",
        class: "text-red-600 underline decoration-dashed underline-offset-2 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
        onClick: a
      }, h(f(e)("usage.ipGeo.failed")), 1)
    ])) : (v(), $("div", Sx, h(f(e)("usage.ipGeo.private")), 1));
  }
}), Cx = {
  key: 0,
  class: "flex flex-shrink-0 items-center justify-end gap-2 border-b border-gray-200 px-4 py-2 dark:border-dark-700"
}, Mx = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Dx = ["disabled"], Rx = /* @__PURE__ */ Mt({
  __name: "IpGeoBatchToolbar",
  props: {
    ips: {}
  },
  emits: ["failed"],
  setup(s, { emit: t }) {
    const e = s, n = t, { t: i } = Et(), a = P(
      () => Array.from(new Set(e.ips.filter((c) => !!c)))
    ), o = P(
      () => a.value.filter((c) => {
        const u = Tr(c).status;
        return u === "idle" || u === "error";
      }).length
    ), r = I(!1), d = async () => {
      r.value = !0;
      try {
        await _x(a.value) || n("failed");
      } finally {
        r.value = !1;
      }
    };
    return (c, u) => a.value.length > 0 ? (v(), $("div", Cx, [
      o.value > 0 ? (v(), $("span", Mx, h(f(i)("usage.ipGeo.pending", { count: o.value })), 1)) : W("", !0),
      l("button", {
        type: "button",
        class: "inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-400 dark:hover:bg-primary-900/30",
        disabled: r.value || o.value === 0,
        onClick: d
      }, h(r.value ? f(i)("usage.ipGeo.batchFetching") : f(i)("usage.ipGeo.batchFetch")), 9, Dx)
    ])) : W("", !0);
  }
});
function Tx(s, t) {
  switch ((s || "").toLowerCase()) {
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
      switch ((t || "").toLowerCase()) {
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
function Px(s) {
  return s >= 500 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : s === 429 ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : s >= 400 ? "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" : "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200";
}
function Ox(s) {
  return s === "status" ? "status_code" : s;
}
const Ax = { class: "flex h-full min-h-0 flex-col" }, Ex = ["title"], Lx = { class: "max-w-[320px] space-y-1 text-xs" }, zx = { class: "break-all text-gray-700 dark:text-gray-300" }, Ix = { class: "font-medium text-gray-500 dark:text-gray-400" }, Fx = { class: "ml-1" }, Vx = {
  key: 0,
  class: "break-all text-gray-700 dark:text-gray-300"
}, Bx = { class: "font-medium text-gray-500 dark:text-gray-400" }, jx = { class: "ml-1" }, qx = { class: "text-sm text-gray-900 dark:text-white" }, Nx = {
  key: 0,
  class: "space-y-0.5 text-xs"
}, Hx = { class: "break-all font-medium text-gray-900 dark:text-white" }, Wx = { class: "break-all text-gray-500 dark:text-gray-400" }, Ux = {
  key: 1,
  class: "text-sm font-medium text-gray-900 dark:text-white"
}, Yx = {
  key: 2,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Gx = ["title"], Xx = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, Kx = {
  key: 0,
  class: "text-sm"
}, Qx = ["title", "onClick"], Jx = {
  key: 1,
  class: "font-medium text-gray-900 dark:text-white"
}, Zx = { class: "ml-1 text-gray-500 dark:text-gray-400" }, ty = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ey = {
  key: 0,
  class: "text-sm"
}, sy = { class: "text-gray-900 dark:text-white" }, ny = {
  key: 0,
  class: "ml-1 inline-flex items-center rounded px-1 py-px text-[10px] font-medium leading-tight bg-rose-100 text-rose-600 ring-1 ring-inset ring-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30"
}, iy = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ay = ["title"], oy = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ry = { class: "text-sm text-gray-900 dark:text-white" }, ly = { class: "flex items-center gap-1.5" }, dy = {
  key: 1,
  class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200"
}, cy = ["title"], uy = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, hy = ["title"], py = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, fy = { key: 0 }, gy = { class: "text-sm font-mono text-gray-600 dark:text-gray-400" }, my = {
  key: 1,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, _y = ["title", "onClick"], xy = { class: "flex-shrink-0" }, yy = /* @__PURE__ */ Mt({
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
  setup(s, { emit: t }) {
    const { t: e } = Et(), n = P(() => [
      { key: "user", label: e("admin.ops.errorLog.user") },
      { key: "api_key", label: e("admin.ops.errorLog.apiKey") },
      { key: "account", label: e("admin.ops.errorLog.account") },
      { key: "platform", label: e("admin.ops.errorLog.platform") },
      { key: "model", label: e("admin.ops.errorLog.model"), sortable: !0 },
      { key: "endpoint", label: e("admin.ops.errorLog.endpoint") },
      { key: "group", label: e("admin.ops.errorLog.group") },
      { key: "type", label: e("admin.ops.errorLog.type") },
      { key: "category", label: e("usage.errors.category") },
      { key: "status", label: e("admin.ops.errorLog.status"), sortable: !0 },
      { key: "message", label: e("admin.ops.errorLog.message") },
      { key: "created_at", label: e("admin.ops.errorLog.time"), sortable: !0 },
      { key: "user_agent", label: e("usage.userAgent") },
      { key: "client_ip", label: e("admin.ops.errorLog.ip") },
      { key: "actions", label: e("admin.ops.errorLog.action") }
    ]), i = P(
      () => u.visibleColumnKeys ? n.value.filter((x) => u.visibleColumnKeys.includes(x.key)) : n.value
    );
    function a(x) {
      const b = String(x.phase || "").toLowerCase(), y = String(x.error_owner || "").toLowerCase();
      return b === "upstream" && y === "provider";
    }
    function o(x) {
      const b = String(x.requested_model || "").trim(), y = String(x.upstream_model || "").trim();
      return !!b && !!y && b !== y;
    }
    function r(x) {
      const b = String(x.upstream_model || "").trim();
      if (b) return b;
      const y = String(x.requested_model || "").trim();
      return y || String(x.model || "").trim();
    }
    function d(x) {
      switch (x) {
        case 1:
          return e("admin.ops.errorLog.requestTypeSync");
        case 2:
          return e("admin.ops.errorLog.requestTypeStream");
        case 3:
          return e("admin.ops.errorLog.requestTypeWs");
        default:
          return "";
      }
    }
    function c(x) {
      const b = String(x.phase || "").toLowerCase(), y = String(x.error_owner || "").toLowerCase();
      return a(x) ? { label: e("admin.ops.errorLog.typeUpstream"), className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" } : b === "request" && y === "client" ? { label: e("admin.ops.errorLog.typeRequest"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : b === "auth" && y === "client" ? { label: e("admin.ops.errorLog.typeAuth"), className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" } : b === "account_auth" ? { label: e("admin.ops.errorLog.typeAccountAuth"), className: "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900 dark:text-zo-alert-200" } : b === "routing" && y === "platform" ? { label: e("admin.ops.errorLog.typeRouting"), className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" } : b === "internal" && y === "platform" ? { label: e("admin.ops.errorLog.typeInternal"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" } : { label: b || y || e("common.unknown"), className: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200" };
    }
    const u = s, p = t;
    function m(x, b) {
      p("sort", Ox(x), b);
    }
    const _ = Px;
    function g(x) {
      var b;
      if (!x) return "";
      if (x.startsWith("{") || x.startsWith("["))
        try {
          const y = JSON.parse(x);
          if ((b = y == null ? void 0 : y.error) != null && b.message) return String(y.error.message);
          if (y != null && y.message) return String(y.message);
          if (y != null && y.detail) return String(y.detail);
          if (typeof y == "object") return JSON.stringify(y).substring(0, 150);
        } catch {
        }
      return x.includes("context deadline exceeded") ? e("admin.ops.errorLog.commonErrors.contextDeadlineExceeded") : x.includes("connection refused") ? e("admin.ops.errorLog.commonErrors.connectionRefused") : x.toLowerCase().includes("rate limit") ? e("admin.ops.errorLog.commonErrors.rateLimit") : x.length > 200 ? x.substring(0, 200) + "..." : x;
    }
    return (x, b) => (v(), $("div", Ax, [
      l("div", {
        class: Z(["flex min-h-0 flex-1 flex-col overflow-hidden", s.flat ? "" : "card"])
      }, [
        K(Rx, {
          ips: s.rows.map((y) => y.client_ip),
          onFailed: b[0] || (b[0] = (y) => p("ipGeoBatchFailed"))
        }, null, 8, ["ips"]),
        K(Jr, {
          columns: i.value,
          data: s.rows,
          loading: s.loading,
          "clickable-rows": "",
          "server-side-sort": "",
          "default-sort-key": "created_at",
          "default-sort-order": "desc",
          onSort: m,
          onRowClick: b[2] || (b[2] = (y) => p("openErrorDetail", y.id))
        }, {
          "cell-created_at": wt(({ row: y }) => [
            l("span", {
              class: "text-sm text-gray-600 dark:text-gray-400",
              title: y.request_id || y.client_request_id
            }, h(f(_e)(y.created_at)), 9, Ex)
          ]),
          "cell-type": wt(({ row: y }) => [
            l("span", {
              class: Z(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", c(y).className])
            }, h(c(y).label), 3)
          ]),
          "cell-endpoint": wt(({ row: y }) => {
            var T, B;
            return [
              l("div", Lx, [
                l("div", zx, [
                  l("span", Ix, h(f(e)("usage.inbound")) + ":", 1),
                  l("span", Fx, h(((T = y.inbound_endpoint) == null ? void 0 : T.trim()) || "-"), 1)
                ]),
                y.upstream_endpoint ? (v(), $("div", Vx, [
                  l("span", Bx, h(f(e)("usage.upstream")) + ":", 1),
                  l("span", jx, h(((B = y.upstream_endpoint) == null ? void 0 : B.trim()) || "-"), 1)
                ])) : W("", !0)
              ])
            ];
          }),
          "cell-platform": wt(({ row: y }) => [
            l("span", qx, h(y.platform || "-"), 1)
          ]),
          "cell-model": wt(({ row: y }) => [
            o(y) ? (v(), $("div", Nx, [
              l("div", Hx, h(y.requested_model), 1),
              l("div", Wx, [
                b[5] || (b[5] = l("span", { class: "mr-0.5" }, "↳", -1)),
                Q(h(y.upstream_model), 1)
              ])
            ])) : r(y) ? (v(), $("span", Ux, h(r(y)), 1)) : (v(), $("span", Yx, "-"))
          ]),
          "cell-group": wt(({ row: y }) => [
            y.group_id ? (v(), $("span", {
              key: 0,
              class: "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
              title: f(e)("admin.ops.errorLog.id") + " " + y.group_id
            }, h(y.group_name || "#" + y.group_id), 9, Gx)) : (v(), $("span", Xx, "-"))
          ]),
          "cell-user": wt(({ row: y }) => [
            y.user_id ? (v(), $("div", Kx, [
              s.userClickable && y.user_email ? (v(), $("button", {
                key: 0,
                class: "font-medium text-primary-600 underline decoration-dashed underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                title: f(e)("admin.usage.clickToViewBalance"),
                onClick: js((T) => p("userClick", y.user_id, y.user_email), ["stop"])
              }, h(y.user_email), 9, Qx)) : (v(), $("span", Jx, h(y.user_email || "-"), 1)),
              l("span", Zx, "#" + h(y.user_id), 1)
            ])) : (v(), $("span", ty, "-"))
          ]),
          "cell-api_key": wt(({ row: y }) => [
            y.api_key_id || y.api_key_name ? (v(), $("div", ey, [
              l("span", sy, h(y.api_key_name || "#" + y.api_key_id), 1),
              y.api_key_deleted ? (v(), $("span", ny, h(f(e)("admin.ops.errorLog.keyDeletedBadge")), 1)) : W("", !0)
            ])) : (v(), $("span", iy, "-"))
          ]),
          "cell-account": wt(({ row: y }) => [
            y.account_id ? (v(), $("span", {
              key: 0,
              class: "text-sm text-gray-900 dark:text-white",
              title: f(e)("admin.ops.errorLog.accountId") + " " + y.account_id
            }, h(y.account_name || "#" + y.account_id), 9, ay)) : (v(), $("span", oy, "-"))
          ]),
          "cell-category": wt(({ row: y }) => [
            l("span", ry, h(f(e)("usage.errors.categories." + f(Tx)(y.phase, y.type))), 1)
          ]),
          "cell-status": wt(({ row: y }) => [
            l("div", ly, [
              l("span", {
                class: Z(["inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", f(_)(y.status_code)])
              }, h(y.status_code), 3),
              y.severity ? (v(), $("span", {
                key: 0,
                class: Z(["rounded px-1.5 py-0.5 text-[10px] font-medium", f(cl)(y.severity)])
              }, h(y.severity), 3)) : W("", !0),
              y.request_type != null && y.request_type > 0 ? (v(), $("span", dy, h(d(y.request_type)), 1)) : W("", !0)
            ])
          ]),
          "cell-message": wt(({ row: y }) => [
            y.message ? (v(), $("span", {
              key: 0,
              class: "block max-w-[280px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: y.message
            }, h(g(y.message) || "-"), 9, cy)) : (v(), $("span", uy, "-"))
          ]),
          "cell-user_agent": wt(({ row: y }) => [
            y.user_agent ? (v(), $("span", {
              key: 0,
              class: "block max-w-[320px] truncate text-sm text-gray-600 dark:text-gray-400",
              title: y.user_agent
            }, h(y.user_agent), 9, hy)) : (v(), $("span", py, "-"))
          ]),
          "cell-client_ip": wt(({ row: y }) => [
            l("div", {
              onClick: b[1] || (b[1] = js(() => {
              }, ["stop"]))
            }, [
              y.client_ip ? (v(), $("div", fy, [
                l("span", gy, h(y.client_ip), 1),
                K($x, {
                  ip: y.client_ip
                }, null, 8, ["ip"])
              ])) : (v(), $("span", my, "-"))
            ])
          ]),
          "cell-actions": wt(({ row: y }) => [
            l("button", {
              type: "button",
              class: "rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-600 dark:hover:text-primary-400",
              title: f(e)("admin.ops.errorLog.details"),
              onClick: js((T) => p("openErrorDetail", y.id), ["stop"])
            }, [...b[6] || (b[6] = [
              l("svg", {
                class: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                l("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                })
              ], -1)
            ])], 8, _y)
          ]),
          empty: wt(() => [
            K(ts, {
              message: f(e)("admin.ops.errorLog.noErrors")
            }, null, 8, ["message"])
          ]),
          _: 1
        }, 8, ["columns", "data", "loading"])
      ], 2),
      l("div", xy, [
        s.total > 0 ? (v(), ft(Di, {
          key: 0,
          total: s.total,
          page: s.page,
          "page-size": s.pageSize,
          "onUpdate:page": b[3] || (b[3] = (y) => p("update:page", y)),
          "onUpdate:pageSize": b[4] || (b[4] = (y) => p("update:pageSize", y))
        }, null, 8, ["total", "page", "page-size"])) : W("", !0)
      ])
    ]));
  }
});
function by(s, t, e) {
  return s === "custom" && t && e ? { start_time: t, end_time: e } : { time_range: s === "custom" ? "1h" : s };
}
const vy = { class: "flex h-full min-h-0 flex-col" }, ky = { class: "mb-4 flex-shrink-0 border-b border-gray-200 pb-4 dark:border-dark-700" }, wy = { class: "grid grid-cols-2 gap-2 md:grid-cols-8" }, Sy = { class: "col-span-2 compact-select" }, $y = { class: "relative group" }, Cy = ["placeholder"], My = { class: "compact-select" }, Dy = { class: "compact-select" }, Ry = { class: "compact-select" }, Ty = { class: "compact-select" }, Py = { class: "flex items-center justify-end" }, Oy = { class: "flex min-h-0 flex-1 flex-col" }, Ay = { class: "mb-2 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400" }, Ey = /* @__PURE__ */ Mt({
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
  setup(s, { emit: t }) {
    const e = s, n = t, { t: i } = Et(), a = I(!1), o = I([]), r = I(0), d = I(1), c = I(10), u = I(""), p = I(null), m = I(""), _ = I(""), g = I("errors"), x = P(() => e.errorType === "upstream" ? i("admin.ops.errorDetails.upstreamErrors") : i("admin.ops.errorDetails.requestErrors")), b = P(() => {
      const L = [400, 401, 403, 404, 409, 422, 429, 500, 502, 503, 504, 529];
      return [
        { value: null, label: i("common.all") },
        ...L.map((A) => ({ value: A, label: String(A) })),
        { value: "other", label: i("admin.ops.errorDetails.statusCodeOther") || "Other" }
      ];
    }), y = P(() => [
      { value: "", label: i("common.all") },
      { value: "provider", label: i("admin.ops.errorDetails.owner.provider") || "provider" },
      { value: "client", label: i("admin.ops.errorDetails.owner.client") || "client" },
      { value: "platform", label: i("admin.ops.errorDetails.owner.platform") || "platform" }
    ]), T = P(() => [
      { value: "errors", label: i("admin.ops.errorDetails.viewErrors") || "errors" },
      { value: "excluded", label: i("admin.ops.errorDetails.viewExcluded") || "excluded" },
      { value: "all", label: i("common.all") }
    ]), B = P(() => [
      { value: "", label: i("common.all") },
      { value: "request", label: i("admin.ops.errorDetails.phase.request") || "request" },
      { value: "auth", label: i("admin.ops.errorDetails.phase.auth") || "auth" },
      { value: "account_auth", label: i("admin.ops.errorDetails.phase.account_auth") || "account_auth" },
      { value: "routing", label: i("admin.ops.errorDetails.phase.routing") || "routing" },
      { value: "upstream", label: i("admin.ops.errorDetails.phase.upstream") || "upstream" },
      { value: "network", label: i("admin.ops.errorDetails.phase.network") || "network" },
      { value: "internal", label: i("admin.ops.errorDetails.phase.internal") || "internal" }
    ]);
    function F() {
      n("update:show", !1);
    }
    const O = I("created_at"), j = I("desc");
    function D(L, A) {
      O.value = L, j.value = A, d.value = 1, S();
    }
    async function S() {
      if (e.show) {
        a.value = !0;
        try {
          const L = {
            page: d.value,
            page_size: c.value,
            view: g.value,
            sort_by: O.value,
            sort_order: j.value
          };
          Object.assign(L, by(e.timeRange, e.customStartTime, e.customEndTime)), e.timeRange === "custom" && (e.customStartTime && e.customEndTime ? (L.start_time = e.customStartTime, L.end_time = e.customEndTime, delete L.time_range) : L.time_range = "1h");
          const A = String(e.platform || "").trim();
          A && (L.platform = A), typeof e.groupId == "number" && e.groupId > 0 && (L.group_id = e.groupId), u.value.trim() && (L.q = u.value.trim()), p.value === "other" ? L.status_codes_other = "1" : typeof p.value == "number" && (L.status_codes = String(p.value));
          const E = String(m.value || "").trim();
          E && (L.phase = E);
          const N = String(_.value || "").trim();
          N && (L.error_owner = N);
          const Y = e.errorType === "upstream" ? await ot.listUpstreamErrors(L) : await ot.listRequestErrors(L);
          o.value = Y.items || [], r.value = Y.total || 0;
        } catch (L) {
          console.error("[OpsErrorDetailsModal] Failed to fetch error logs", L), o.value = [], r.value = 0;
        } finally {
          a.value = !1;
        }
      }
    }
    function w() {
      u.value = "", p.value = null, m.value = e.errorType === "upstream" ? "upstream" : "", _.value = "", g.value = "errors", d.value = 1, S();
    }
    _t(
      () => e.show,
      (L) => {
        L && (d.value = 1, c.value = 10, w());
      }
    ), _t(
      () => [e.timeRange, e.customStartTime, e.customEndTime, e.platform, e.groupId],
      () => {
        e.show && (d.value = 1, S());
      }
    ), _t(
      () => [d.value, c.value],
      () => {
        e.show && S();
      }
    );
    let V = null;
    return _t(
      () => u.value,
      () => {
        e.show && (V && window.clearTimeout(V), V = window.setTimeout(() => {
          d.value = 1, S();
        }, 350));
      }
    ), _t(
      () => [p.value, m.value, _.value, g.value],
      () => {
        e.show && (d.value = 1, S());
      }
    ), (L, A) => (v(), ft(Re, {
      show: s.show,
      title: x.value,
      width: "full",
      onClose: F
    }, {
      default: wt(() => [
        l("div", vy, [
          l("div", ky, [
            l("div", wy, [
              l("div", Sy, [
                l("div", $y, [
                  A[8] || (A[8] = l("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                    l("svg", {
                      class: "h-3.5 w-3.5 text-gray-400 transition-colors group-focus-within:text-blue-500",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      l("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2.5",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1)),
                  lt(l("input", {
                    "onUpdate:modelValue": A[0] || (A[0] = (E) => u.value = E),
                    type: "text",
                    class: "w-full rounded-lg border-gray-200 bg-gray-50/50 py-1.5 pl-9 pr-3 text-xs font-medium text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:focus:bg-dark-800",
                    placeholder: f(i)("admin.ops.errorDetails.searchPlaceholder")
                  }, null, 8, Cy), [
                    [pt, u.value]
                  ])
                ])
              ]),
              l("div", My, [
                K(kt, {
                  "model-value": p.value,
                  options: b.value,
                  "onUpdate:modelValue": A[1] || (A[1] = (E) => p.value = E)
                }, null, 8, ["model-value", "options"])
              ]),
              l("div", Dy, [
                K(kt, {
                  "model-value": m.value,
                  options: B.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (E) => m.value = String(E ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              l("div", Ry, [
                K(kt, {
                  "model-value": _.value,
                  options: y.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (E) => _.value = String(E ?? ""))
                }, null, 8, ["model-value", "options"])
              ]),
              l("div", Ty, [
                K(kt, {
                  "model-value": g.value,
                  options: T.value,
                  "onUpdate:modelValue": A[4] || (A[4] = (E) => g.value = E)
                }, null, 8, ["model-value", "options"])
              ]),
              l("div", Py, [
                l("button", {
                  type: "button",
                  class: "rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                  onClick: w
                }, h(f(i)("common.reset")), 1)
              ])
            ])
          ]),
          l("div", Oy, [
            l("div", Ay, h(f(i)("admin.ops.errorDetails.total")) + " " + h(r.value), 1),
            K(yy, {
              class: "min-h-0 flex-1",
              rows: o.value,
              total: r.value,
              loading: a.value,
              page: d.value,
              "page-size": c.value,
              onOpenErrorDetail: A[5] || (A[5] = (E) => n("openErrorDetail", E)),
              onSort: D,
              "onUpdate:page": A[6] || (A[6] = (E) => d.value = E),
              "onUpdate:pageSize": A[7] || (A[7] = (E) => c.value = E)
            }, null, 8, ["rows", "total", "loading", "page", "page-size"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Ly = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, zy = { class: "mb-4 flex shrink-0 items-center justify-between" }, Iy = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Fy = { class: "flex items-center gap-2" }, Vy = ["disabled"], By = ["disabled"], jy = { class: "min-h-0 flex-1" }, qy = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Ny = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Hy = /* @__PURE__ */ Mt({
  __name: "OpsErrorTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {}
  },
  emits: ["openRequestErrors", "openUpstreamErrors"],
  setup(s, { emit: t }) {
    Ve.register(Ui, an, nn, xe, ks, xs, vs, Wi);
    const e = s, n = t, { t: i } = Et(), a = P(() => document.documentElement.classList.contains("dark")), o = P(() => ({
      red: "#ef4444",
      redAlpha: "#ef444420",
      purple: "#8b5cf6",
      purpleAlpha: "#8b5cf620",
      gray: "#9ca3af",
      grid: a.value ? "#374151" : "#f3f4f6",
      text: a.value ? "#9ca3af" : "#6b7280"
    })), r = P(() => qs(e.points.map((x) => x.error_count_sla ?? 0))), d = P(
      () => qs(
        e.points.map((x) => (x.upstream_error_count_excl_429_529 ?? 0) + (x.upstream_429_count ?? 0) + (x.upstream_529_count ?? 0))
      )
    ), c = P(
      () => qs(e.points.map((x) => (x.error_count_sla ?? 0) + (x.upstream_error_count_excl_429_529 ?? 0) + (x.business_limited_count ?? 0)))
    ), u = P(() => r.value > 0), p = P(() => d.value > 0), m = P(() => !e.points.length || c.value <= 0 ? null : {
      labels: e.points.map((x) => Ri(x.bucket_start, e.timeRange)),
      datasets: [
        {
          label: i("admin.ops.errorsSla"),
          data: e.points.map((x) => x.error_count_sla ?? 0),
          borderColor: o.value.red,
          backgroundColor: o.value.redAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: i("admin.ops.upstreamExcl429529"),
          data: e.points.map((x) => x.upstream_error_count_excl_429_529 ?? 0),
          borderColor: o.value.purple,
          backgroundColor: o.value.purpleAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: i("admin.ops.businessLimited"),
          data: e.points.map((x) => x.business_limited_count ?? 0),
          borderColor: o.value.gray,
          backgroundColor: "transparent",
          borderDash: [6, 6],
          fill: !1,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), _ = P(() => m.value ? "ready" : e.loading ? "loading" : "empty"), g = P(() => {
      const x = o.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { intersect: !1, mode: "index" },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: { color: x.text, usePointStyle: !0, boxWidth: 6, font: { size: 10 } }
          },
          tooltip: {
            backgroundColor: a.value ? "#1f2937" : "#ffffff",
            titleColor: a.value ? "#f3f4f6" : "#111827",
            bodyColor: a.value ? "#d1d5db" : "#4b5563",
            borderColor: x.grid,
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
              color: x.text,
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
            grid: { color: x.grid, borderDash: [4, 4] },
            ticks: { color: x.text, font: { size: 10 }, precision: 0 }
          }
        }
      };
    });
    return (x, b) => (v(), $("div", Ly, [
      l("div", zy, [
        l("h3", Iy, [
          b[2] || (b[2] = l("svg", {
            class: "h-4 w-4 text-rose-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            l("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            })
          ], -1)),
          Q(" " + h(f(i)("admin.ops.errorTrend")) + " ", 1),
          K(Ot, {
            content: f(i)("admin.ops.tooltips.errorTrend")
          }, null, 8, ["content"])
        ]),
        l("div", Fy, [
          l("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !u.value,
            onClick: b[0] || (b[0] = (y) => n("openRequestErrors"))
          }, h(f(i)("admin.ops.errorDetails.requestErrors")), 9, Vy),
          l("button", {
            type: "button",
            class: "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !p.value,
            onClick: b[1] || (b[1] = (y) => n("openUpstreamErrors"))
          }, h(f(i)("admin.ops.errorDetails.upstreamErrors")), 9, By)
        ])
      ]),
      l("div", jy, [
        _.value === "ready" && m.value ? (v(), ft(f(Gi), {
          key: 0,
          data: m.value,
          options: g.value
        }, null, 8, ["data", "options"])) : (v(), $("div", qy, [
          _.value === "loading" ? (v(), $("div", Ny, h(f(i)("common.loading")), 1)) : (v(), ft(ts, {
            key: 1,
            title: f(i)("common.noData"),
            description: f(i)("admin.ops.charts.emptyError")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Wy = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Uy = { class: "mb-4 flex items-center justify-between" }, Yy = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, Gy = { class: "min-h-0 flex-1" }, Xy = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, Ky = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Qy = /* @__PURE__ */ Mt({
  __name: "OpsLatencyChart",
  props: {
    latencyData: {},
    loading: { type: Boolean }
  },
  setup(s) {
    Ve.register(Dn, vs, ks, an, nn);
    const t = s, { t: e } = Et(), n = P(() => document.documentElement.classList.contains("dark")), i = P(() => ({
      blue: "#3b82f6",
      grid: n.value ? "#374151" : "#f3f4f6",
      text: n.value ? "#9ca3af" : "#6b7280"
    })), a = P(() => {
      var c;
      return (((c = t.latencyData) == null ? void 0 : c.total_requests) ?? 0) > 0;
    }), o = P(() => a.value ? "ready" : t.loading ? "loading" : "empty"), r = P(() => {
      if (!t.latencyData || !a.value) return null;
      const c = i.value;
      return {
        labels: t.latencyData.buckets.map((u) => u.range),
        datasets: [
          {
            label: e("admin.ops.requests"),
            data: t.latencyData.buckets.map((u) => u.count),
            backgroundColor: c.blue,
            borderRadius: 4,
            barPercentage: 0.6
          }
        ]
      };
    }), d = P(() => {
      const c = i.value;
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
          legend: { display: !1 }
        },
        scales: {
          x: {
            grid: { display: !1 },
            ticks: { color: c.text, font: { size: 10 } }
          },
          y: {
            beginAtZero: !0,
            grid: { color: c.grid, borderDash: [4, 4] },
            ticks: { color: c.text, font: { size: 10 } }
          }
        }
      };
    });
    return (c, u) => (v(), $("div", Wy, [
      l("div", Uy, [
        l("h3", Yy, [
          u[0] || (u[0] = l("svg", {
            class: "h-4 w-4 text-purple-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            l("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          ], -1)),
          Q(" " + h(f(e)("admin.ops.latencyHistogram")) + " ", 1),
          K(Ot, {
            content: f(e)("admin.ops.tooltips.latencyHistogram")
          }, null, 8, ["content"])
        ])
      ]),
      l("div", Gy, [
        o.value === "ready" && r.value ? (v(), ft(f(X_), {
          key: 0,
          data: r.value,
          options: d.value
        }, null, 8, ["data", "options"])) : (v(), $("div", Xy, [
          o.value === "loading" ? (v(), $("div", Ky, h(f(e)("common.loading")), 1)) : (v(), ft(ts, {
            key: 1,
            title: f(e)("common.noData"),
            description: f(e)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), Jy = { class: "flex h-full min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Zy = {
  "data-testid": "throughput-chart-header",
  class: "mb-4 flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
}, tb = { class: "flex min-w-0 items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, eb = {
  "data-testid": "throughput-chart-toolbar",
  class: "flex w-full min-w-0 flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:w-auto sm:justify-end"
}, sb = { class: "flex shrink-0 items-center gap-1" }, nb = ["disabled", "title"], ib = ["disabled", "title"], ab = ["disabled", "title"], ob = {
  key: 0,
  class: "mb-3 flex flex-wrap gap-2"
}, rb = ["onClick"], lb = { class: "max-w-[180px] truncate" }, db = { class: "text-gray-400 dark:text-gray-500" }, cb = {
  key: 1,
  class: "mb-3 flex flex-wrap gap-2"
}, ub = ["onClick"], hb = { class: "uppercase" }, pb = { class: "text-gray-400 dark:text-gray-500" }, fb = { class: "min-h-0 min-w-0 flex-1" }, gb = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, mb = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, _b = /* @__PURE__ */ Mt({
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
  setup(s, { emit: t }) {
    Ve.register(Ui, an, nn, xe, ks, xs, vs, Wi);
    const e = s, { t: n } = Et(), i = t, a = I(null);
    _t(
      () => e.timeRange,
      () => {
        setTimeout(() => {
          var x;
          const g = (x = a.value) == null ? void 0 : x.chart;
          g && typeof g.resetZoom == "function" && g.resetZoom();
        }, 100);
      }
    );
    const o = P(() => document.documentElement.classList.contains("dark")), r = P(() => ({
      blue: "#3b82f6",
      blueAlpha: "#3b82f620",
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: o.value ? "#374151" : "#f3f4f6",
      text: o.value ? "#9ca3af" : "#6b7280"
    })), d = P(() => qs(e.points.map((g) => g.request_count))), c = P(() => !e.points.length || d.value <= 0 ? null : {
      labels: e.points.map((g) => Ri(g.bucket_start, e.timeRange)),
      datasets: [
        {
          label: "QPS",
          data: e.points.map((g) => g.qps ?? 0),
          borderColor: r.value.blue,
          backgroundColor: r.value.blueAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10
        },
        {
          label: n("admin.ops.tpsK"),
          data: e.points.map((g) => (g.tps ?? 0) / 1e3),
          borderColor: r.value.violet,
          backgroundColor: r.value.violetAlpha,
          fill: !0,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10,
          yAxisID: "y1"
        }
      ]
    }), u = P(() => c.value ? "ready" : e.loading ? "loading" : "empty"), p = P(() => {
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
            backgroundColor: o.value ? "#1f2937" : "#ffffff",
            titleColor: o.value ? "#f3f4f6" : "#111827",
            bodyColor: o.value ? "#d1d5db" : "#4b5563",
            borderColor: g.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: (x) => {
                let b = x.dataset.label || "";
                return b && (b += ": "), x.raw !== null && (b += x.parsed.y.toFixed(1)), b;
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
            ticks: { color: g.text, font: { size: 10 } }
          },
          y1: {
            type: "linear",
            display: !0,
            position: "right",
            grid: { display: !1 },
            ticks: { color: g.violet, font: { size: 10 } }
          }
        }
      };
    });
    function m() {
      var x;
      const g = (x = a.value) == null ? void 0 : x.chart;
      g && typeof g.resetZoom == "function" && g.resetZoom();
    }
    function _() {
      var y;
      const g = (y = a.value) == null ? void 0 : y.chart;
      if (!g || typeof g.toBase64Image != "function") return;
      const x = g.toBase64Image("image/png", 1), b = document.createElement("a");
      b.href = x, b.download = `ops-throughput-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`, b.click();
    }
    return (g, x) => {
      var b, y;
      return v(), $("div", Jy, [
        l("div", Zy, [
          l("h3", tb, [
            x[1] || (x[1] = l("svg", {
              class: "h-4 w-4 text-blue-500",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              })
            ], -1)),
            Q(" " + h(f(n)("admin.ops.throughputTrend")) + " ", 1),
            e.fullscreen ? W("", !0) : (v(), ft(Ot, {
              key: 0,
              content: f(n)("admin.ops.tooltips.throughputTrend")
            }, null, 8, ["content"]))
          ]),
          l("div", eb, [
            x[3] || (x[3] = l("span", { class: "flex shrink-0 items-center gap-1" }, [
              l("span", { class: "h-2 w-2 rounded-full bg-blue-500" }),
              Q("QPS")
            ], -1)),
            l("span", sb, [
              x[2] || (x[2] = l("span", { class: "h-2 w-2 rounded-full bg-zo-signal-500" }, null, -1)),
              Q(h(f(n)("admin.ops.tpsK")), 1)
            ]),
            e.fullscreen ? W("", !0) : (v(), $(gt, { key: 0 }, [
              l("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: u.value !== "ready",
                title: f(n)("admin.ops.requestDetails.title"),
                onClick: x[0] || (x[0] = (T) => i("openDetails"))
              }, h(f(n)("admin.ops.requestDetails.details")), 9, nb),
              l("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: u.value !== "ready",
                title: f(n)("admin.ops.charts.resetZoomHint"),
                onClick: m
              }, h(f(n)("admin.ops.charts.resetZoom")), 9, ib),
              l("button", {
                type: "button",
                class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
                disabled: u.value !== "ready",
                title: f(n)("admin.ops.charts.downloadChartHint"),
                onClick: _
              }, h(f(n)("admin.ops.charts.downloadChart")), 9, ab)
            ], 64))
          ])
        ]),
        (((b = e.topGroups) == null ? void 0 : b.length) ?? 0) > 0 ? (v(), $("div", ob, [
          (v(!0), $(gt, null, vt(e.topGroups, (T) => (v(), $("button", {
            key: T.group_id,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (B) => i("selectGroup", T.group_id)
          }, [
            l("span", lb, h(T.group_name || `#${T.group_id}`), 1),
            l("span", db, h(f(me)(T.request_count)), 1)
          ], 8, rb))), 128))
        ])) : (((y = e.byPlatform) == null ? void 0 : y.length) ?? 0) > 0 ? (v(), $("div", cb, [
          (v(!0), $(gt, null, vt(e.byPlatform, (T) => (v(), $("button", {
            key: T.platform,
            type: "button",
            class: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-200 dark:hover:bg-dark-800",
            onClick: (B) => i("selectPlatform", T.platform)
          }, [
            l("span", hb, h(T.platform), 1),
            l("span", pb, h(f(me)(T.request_count)), 1)
          ], 8, ub))), 128))
        ])) : W("", !0),
        l("div", fb, [
          u.value === "ready" && c.value ? (v(), ft(f(Gi), {
            key: 0,
            ref_key: "throughputChartRef",
            ref: a,
            data: c.value,
            options: p.value
          }, null, 8, ["data", "options"])) : (v(), $("div", gb, [
            u.value === "loading" ? (v(), $("div", mb, h(f(n)("common.loading")), 1)) : (v(), ft(ts, {
              key: 1,
              title: f(n)("common.noData"),
              description: f(n)("admin.ops.charts.emptyRequest")
            }, null, 8, ["title", "description"]))
          ]))
        ])
      ]);
    };
  }
}), xb = { class: "flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, yb = { class: "mb-4 flex shrink-0 items-center justify-between" }, bb = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, vb = { class: "min-h-0 flex-1" }, kb = {
  key: 1,
  class: "flex h-full items-center justify-center"
}, wb = {
  key: 0,
  class: "animate-pulse text-sm text-gray-400"
}, Sb = /* @__PURE__ */ Mt({
  __name: "OpsSwitchRateTrendChart",
  props: {
    points: {},
    loading: { type: Boolean },
    timeRange: {},
    fullscreen: { type: Boolean }
  },
  setup(s) {
    Ve.register(Ui, an, nn, xe, ks, xs, vs, Wi);
    const t = s, { t: e } = Et(), n = P(() => document.documentElement.classList.contains("dark")), i = P(() => ({
      violet: "#7c5cfc",
      violetAlpha: "#7c5cfc20",
      grid: n.value ? "#374151" : "#f3f4f6",
      text: n.value ? "#9ca3af" : "#6b7280"
    })), a = P(() => qs(t.points.map((c) => c.request_count))), o = P(() => !t.points.length || a.value <= 0 ? null : {
      labels: t.points.map((c) => Ri(c.bucket_start, t.timeRange)),
      datasets: [
        {
          label: e("admin.ops.switchRate"),
          data: t.points.map((c) => {
            const u = c.request_count ?? 0, p = c.switch_count ?? 0;
            return u <= 0 ? 0 : p / u;
          }),
          borderColor: i.value.violet,
          backgroundColor: i.value.violetAlpha,
          fill: !0,
          tension: 0.35,
          pointRadius: 0,
          pointHitRadius: 10
        }
      ]
    }), r = P(() => o.value ? "ready" : t.loading ? "loading" : "empty"), d = P(() => {
      const c = i.value;
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
            backgroundColor: n.value ? "#1f2937" : "#ffffff",
            titleColor: n.value ? "#f3f4f6" : "#111827",
            bodyColor: n.value ? "#d1d5db" : "#4b5563",
            borderColor: c.grid,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label: (u) => {
                var m;
                const p = typeof ((m = u == null ? void 0 : u.parsed) == null ? void 0 : m.y) == "number" ? u.parsed.y : 0;
                return `${e("admin.ops.switchRate")}: ${p.toFixed(3)}`;
              }
            }
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
            ticks: {
              color: c.text,
              font: { size: 10 },
              callback: (u) => Number(u).toFixed(3)
            }
          }
        }
      };
    });
    return (c, u) => (v(), $("div", xb, [
      l("div", yb, [
        l("h3", bb, [
          u[0] || (u[0] = l("svg", {
            class: "h-4 w-4 text-zo-signal-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            l("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M7 7h10M7 12h6m-6 5h3"
            })
          ], -1)),
          Q(" " + h(f(e)("admin.ops.switchRateTrend")) + " ", 1),
          t.fullscreen ? W("", !0) : (v(), ft(Ot, {
            key: 0,
            content: f(e)("admin.ops.tooltips.switchRateTrend")
          }, null, 8, ["content"]))
        ])
      ]),
      l("div", vb, [
        r.value === "ready" && o.value ? (v(), ft(f(Gi), {
          key: 0,
          data: o.value,
          options: d.value
        }, null, 8, ["data", "options"])) : (v(), $("div", kb, [
          r.value === "loading" ? (v(), $("div", wb, h(f(e)("common.loading")), 1)) : (v(), ft(ts, {
            key: 1,
            title: f(e)("common.noData"),
            description: f(e)("admin.ops.charts.emptyRequest")
          }, null, 8, ["title", "description"]))
        ]))
      ])
    ]));
  }
}), $b = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, Cb = { class: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4" }, Mb = { class: "text-sm font-bold text-gray-900 dark:text-white" }, Db = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Rb = { class: "flex flex-wrap items-center gap-2" }, Tb = ["disabled"], Pb = {
  key: 0,
  class: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
}, Ob = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, Ab = {
  key: 2,
  class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, Eb = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, Lb = ["onClick"], zb = { class: "flex flex-wrap items-center gap-2" }, Ib = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, Fb = { class: "text-xs font-semibold text-gray-900 dark:text-white" }, Vb = {
  key: 0,
  class: "line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, Bb = { class: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 dark:text-gray-400" }, jb = { class: "font-mono" }, qb = { class: "inline-flex items-center gap-1" }, Nb = { class: "text-[11px] text-gray-400 dark:text-gray-500" }, Hb = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, Wb = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, Ub = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Yb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Gb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Xb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Kb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Qb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Jb = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Zb = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, tv = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, ev = ["onClick", "title"], sv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, nv = { class: "whitespace-nowrap px-4 py-3" }, iv = { class: "flex items-center gap-2" }, av = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, ov = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, rv = { class: "font-mono" }, lv = { class: "min-w-[260px] px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, dv = { class: "font-semibold truncate max-w-[360px]" }, cv = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, uv = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, hv = { class: "whitespace-nowrap px-4 py-3 text-[11px] text-gray-500 dark:text-gray-400" }, pv = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, fv = ["title"], gv = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, mv = {
  key: 2,
  class: "flex items-center justify-center gap-2 py-3 text-xs text-gray-500 dark:text-gray-400"
}, _v = {
  key: 3,
  class: "py-3 text-center text-xs text-gray-400"
}, xv = {
  key: 0,
  class: "flex items-center justify-center py-10 text-sm text-gray-500 dark:text-gray-400"
}, yv = {
  key: 1,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, bv = {
  key: 2,
  class: "space-y-5"
}, vv = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, kv = { class: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between" }, wv = { class: "flex flex-wrap items-center gap-2" }, Sv = { class: "mt-2 text-sm font-semibold text-gray-900 dark:text-white" }, $v = {
  key: 0,
  class: "mt-1 whitespace-pre-wrap text-xs text-gray-600 dark:text-gray-300"
}, Cv = { class: "flex flex-wrap gap-2" }, Mv = { class: "flex items-center gap-2 rounded-lg bg-white px-2 py-1 ring-1 ring-gray-200 dark:bg-dark-800 dark:ring-dark-700" }, Dv = { class: "text-[11px] font-bold text-gray-600 dark:text-gray-300" }, Rv = ["disabled"], Tv = ["disabled"], Pv = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2" }, Ov = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Av = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Ev = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Lv = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, zv = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Iv = { class: "mt-1 text-sm font-medium text-gray-900 dark:text-white" }, Fv = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Vv = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Bv = { class: "mt-1 flex flex-wrap items-center gap-2" }, jv = { class: "font-mono text-sm font-bold text-gray-900 dark:text-white" }, qv = ["href"], Nv = ["href"], Hv = { class: "rounded-xl bg-gray-50 p-4 dark:bg-dark-900" }, Wv = { class: "text-xs font-bold uppercase tracking-wider text-gray-400" }, Uv = { class: "mt-1 text-sm text-gray-900 dark:text-white" }, Yv = { key: 0 }, Gv = { key: 1 }, Xv = { key: 2 }, Kv = { class: "rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800" }, Qv = { class: "mb-3 flex flex-wrap items-center justify-between gap-3" }, Jv = { class: "text-sm font-bold text-gray-900 dark:text-white" }, Zv = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, t1 = {
  key: 0,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, e1 = {
  key: 1,
  class: "py-6 text-center text-xs text-gray-500 dark:text-gray-400"
}, s1 = {
  key: 2,
  class: "overflow-hidden rounded-lg border border-gray-100 dark:border-dark-700"
}, n1 = { class: "min-w-full divide-y divide-gray-100 dark:divide-dark-700" }, i1 = { class: "bg-gray-50 dark:bg-dark-900" }, a1 = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, o1 = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, r1 = { class: "px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, l1 = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, d1 = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, c1 = { class: "px-3 py-2 text-xs" }, u1 = { class: "px-3 py-2 text-xs text-gray-600 dark:text-gray-300" }, h1 = { key: 0 }, p1 = { key: 1 }, hi = 10, f1 = /* @__PURE__ */ Mt({
  __name: "OpsAlertEventsCard",
  setup(s) {
    const { t } = Et(), e = Fe(), n = en("(min-width: 768px)"), i = I(!1), a = I(!1), o = I([]), r = I(!0), d = I(!1), c = I(null), u = I(!1), p = I(!1), m = I(!1), _ = I([]), g = I("7d"), x = P(() => [
      { value: "7d", label: t("admin.ops.timeRange.7d") },
      { value: "30d", label: t("admin.ops.timeRange.30d") }
    ]), b = I("1h"), y = P(() => [
      { value: "1h", label: t("admin.ops.timeRange.1h") },
      { value: "24h", label: t("admin.ops.timeRange.24h") },
      { value: "7d", label: t("admin.ops.timeRange.7d") }
    ]), T = I("24h"), B = P(() => [
      { value: "5m", label: t("admin.ops.timeRange.5m") },
      { value: "30m", label: t("admin.ops.timeRange.30m") },
      { value: "1h", label: t("admin.ops.timeRange.1h") },
      { value: "6h", label: t("admin.ops.timeRange.6h") },
      { value: "24h", label: t("admin.ops.timeRange.24h") },
      { value: "7d", label: t("admin.ops.timeRange.7d") },
      { value: "30d", label: t("admin.ops.timeRange.30d") }
    ]), F = I(""), O = P(() => [
      { value: "", label: t("common.all") },
      { value: "P0", label: "P0" },
      { value: "P1", label: "P1" },
      { value: "P2", label: "P2" },
      { value: "P3", label: "P3" }
    ]), j = I(""), D = P(() => [
      { value: "", label: t("common.all") },
      { value: "firing", label: t("admin.ops.alertEvents.status.firing") },
      { value: "resolved", label: t("admin.ops.alertEvents.status.resolved") },
      { value: "manual_resolved", label: t("admin.ops.alertEvents.status.manualResolved") }
    ]), S = I(""), w = P(() => [
      { value: "", label: t("common.all") },
      { value: "true", label: t("admin.ops.alertEvents.table.emailSent") },
      { value: "false", label: t("admin.ops.alertEvents.table.emailIgnored") }
    ]);
    function V(tt = {}) {
      const U = {
        limit: hi,
        time_range: T.value
      };
      return F.value && (U.severity = F.value), j.value && (U.status = j.value), S.value === "true" && (U.email_sent = !0), S.value === "false" && (U.email_sent = !1), { ...U, ...tt };
    }
    async function L() {
      var tt, U;
      i.value = !0;
      try {
        const H = await ot.listAlertEvents(V());
        o.value = H, r.value = H.length === hi;
      } catch (H) {
        console.error("[OpsAlertEventsCard] Failed to load alert events", H), e.showError(((U = (tt = H == null ? void 0 : H.response) == null ? void 0 : tt.data) == null ? void 0 : U.detail) || t("admin.ops.alertEvents.loadFailed")), o.value = [], r.value = !1;
      } finally {
        i.value = !1;
      }
    }
    async function A() {
      if (a.value || i.value || !r.value) return;
      const tt = o.value[o.value.length - 1];
      if (tt) {
        a.value = !0;
        try {
          const U = await ot.listAlertEvents(
            V({ before_fired_at: tt.fired_at || tt.created_at, before_id: tt.id })
          );
          if (!U.length) {
            r.value = !1;
            return;
          }
          o.value = [...o.value, ...U], U.length < hi && (r.value = !1);
        } catch (U) {
          console.error("[OpsAlertEventsCard] Failed to load more alert events", U), r.value = !1;
        } finally {
          a.value = !1;
        }
      }
    }
    function E(tt) {
      const U = tt.target;
      if (!U) return;
      U.scrollTop + U.clientHeight >= U.scrollHeight - 120 && A();
    }
    function N(tt, U) {
      var it;
      const H = (it = tt == null ? void 0 : tt.dimensions) == null ? void 0 : it[U];
      return H == null ? "" : typeof H == "string" ? H : typeof H == "number" || typeof H == "boolean" ? String(H) : "";
    }
    function Y(tt) {
      const U = Math.max(0, Math.floor(tt)), H = Math.floor(U / 1e3);
      if (H < 60) return `${H}s`;
      const it = Math.floor(H / 60);
      if (it < 60) return `${it}m`;
      const dt = Math.floor(it / 60);
      return dt < 24 ? `${dt}h` : `${Math.floor(dt / 24)}d`;
    }
    function nt(tt) {
      const U = new Date(tt.fired_at || tt.created_at);
      if (Number.isNaN(U.getTime())) return "-";
      const H = tt.resolved_at || null, it = String(tt.status || "").trim().toLowerCase();
      if (H) {
        const zt = new Date(H);
        if (!Number.isNaN(zt.getTime())) {
          const Ht = zt.getTime() - U.getTime();
          return `${t(it === "manual_resolved" ? "admin.ops.alertEvents.status.manualResolved" : "admin.ops.alertEvents.status.resolved")} ${Y(Ht)}`;
        }
      }
      const Lt = Date.now() - U.getTime();
      return `${t("admin.ops.alertEvents.status.firing")} ${Y(Lt)}`;
    }
    function ct(tt) {
      var Lt;
      const U = [], H = N(tt, "platform");
      H && U.push(`platform=${H}`);
      const it = (Lt = tt.dimensions) == null ? void 0 : Lt.group_id;
      it != null && it !== "" && U.push(`group_id=${String(it)}`);
      const dt = N(tt, "region");
      return dt && U.push(`region=${dt}`), U.length ? U.join(" ") : "-";
    }
    function ht() {
      d.value = !1, c.value = null, _.value = [];
    }
    async function G(tt) {
      var U, H;
      d.value = !0, c.value = tt, u.value = !0, m.value = !0;
      try {
        const it = await ot.getAlertEvent(tt.id);
        c.value = it;
      } catch (it) {
        console.error("[OpsAlertEventsCard] Failed to load alert detail", it), e.showError(((H = (U = it == null ? void 0 : it.response) == null ? void 0 : U.data) == null ? void 0 : H.detail) || t("admin.ops.alertEvents.detail.loadFailed"));
      } finally {
        u.value = !1;
      }
      await R();
    }
    async function R() {
      var U;
      const tt = c.value;
      if (!tt) {
        _.value = [], m.value = !1;
        return;
      }
      m.value = !0;
      try {
        const H = N(tt, "platform"), it = (U = tt.dimensions) == null ? void 0 : U.group_id, dt = typeof it == "number" ? it : void 0, Lt = await ot.listAlertEvents({
          limit: 20,
          time_range: g.value,
          platform: H || void 0,
          group_id: dt,
          status: ""
        });
        _.value = Lt.filter((zt) => {
          var le, ie;
          if (zt.rule_id !== tt.rule_id) return !1;
          const Ht = N(zt, "platform"), be = N(tt, "platform");
          if ((Ht || "") !== (be || "")) return !1;
          const ve = (le = zt.dimensions) == null ? void 0 : le.group_id, Te = (ie = tt.dimensions) == null ? void 0 : ie.group_id;
          return (ve ?? null) === (Te ?? null);
        });
      } catch (H) {
        console.error("[OpsAlertEventsCard] Failed to load alert history", H), _.value = [];
      } finally {
        m.value = !1;
      }
    }
    function M(tt) {
      const U = Date.now();
      return tt === "1h" ? new Date(U + 3600 * 1e3).toISOString() : tt === "24h" ? new Date(U + 1440 * 60 * 1e3).toISOString() : tt === "7d" ? new Date(U + 10080 * 60 * 1e3).toISOString() : new Date(U + 3600 * 1e3).toISOString();
    }
    async function q() {
      var U, H, it;
      const tt = c.value;
      if (tt && !p.value) {
        p.value = !0;
        try {
          const dt = N(tt, "platform"), Lt = (U = tt.dimensions) == null ? void 0 : U.group_id, zt = typeof Lt == "number" ? Lt : null, Ht = N(tt, "region") || null;
          await ot.createAlertSilence({
            rule_id: tt.rule_id,
            platform: dt || "",
            group_id: zt ?? void 0,
            region: Ht ?? void 0,
            until: M(b.value),
            reason: `silence from UI (${b.value})`
          }), e.showSuccess(t("admin.ops.alertEvents.detail.silenceSuccess"));
        } catch (dt) {
          console.error("[OpsAlertEventsCard] Failed to silence alert", dt), e.showError(((it = (H = dt == null ? void 0 : dt.response) == null ? void 0 : H.data) == null ? void 0 : it.detail) || t("admin.ops.alertEvents.detail.silenceFailed"));
        } finally {
          p.value = !1;
        }
      }
    }
    async function rt() {
      var tt, U;
      if (c.value && !p.value) {
        p.value = !0;
        try {
          await ot.updateAlertEventStatus(c.value.id, "manual_resolved"), e.showSuccess(t("admin.ops.alertEvents.detail.manualResolvedSuccess"));
          const H = await ot.getAlertEvent(c.value.id);
          c.value = H, await L(), await R();
        } catch (H) {
          console.error("[OpsAlertEventsCard] Failed to resolve alert", H), e.showError(((U = (tt = H == null ? void 0 : H.response) == null ? void 0 : tt.data) == null ? void 0 : U.detail) || t("admin.ops.alertEvents.detail.manualResolvedFailed"));
        } finally {
          p.value = !1;
        }
      }
    }
    Ze(() => {
      L();
    }), _t([T, F, j, S], () => {
      o.value = [], r.value = !0, L();
    }), _t(g, () => {
      d.value && R();
    });
    function Ct(tt) {
      const U = String(tt || "").trim().toLowerCase();
      return U === "p0" || U === "critical" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : U === "p1" || U === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : U === "p2" || U === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300";
    }
    function Pt(tt) {
      const U = String(tt || "").trim().toLowerCase();
      return U === "firing" ? "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-500/30" : U === "resolved" ? "bg-zo-signal-50 text-zo-signal-700 ring-zo-signal-600/20 dark:bg-zo-signal-900/30 dark:text-zo-signal-300 dark:ring-zo-signal-500/30" : U === "manual_resolved" ? "bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-900/30 dark:text-slate-300 dark:ring-slate-500/30" : "bg-gray-50 text-gray-700 ring-gray-600/20 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-500/30";
    }
    function Dt(tt) {
      const U = String(tt || "").trim().toLowerCase();
      return U ? U === "firing" ? t("admin.ops.alertEvents.status.firing") : U === "resolved" ? t("admin.ops.alertEvents.status.resolved") : U === "manual_resolved" ? t("admin.ops.alertEvents.status.manualResolved") : U.toUpperCase() : "-";
    }
    const re = P(() => o.value.length === 0 && !i.value);
    return (tt, U) => (v(), $("div", $b, [
      l("div", Cb, [
        l("div", null, [
          l("h3", Mb, h(f(t)("admin.ops.alertEvents.title")), 1),
          l("p", Db, h(f(t)("admin.ops.alertEvents.description")), 1)
        ]),
        l("div", Rb, [
          K(kt, {
            "model-value": T.value,
            options: B.value,
            class: "w-[120px]",
            onChange: U[0] || (U[0] = (H) => T.value = String(H || "24h"))
          }, null, 8, ["model-value", "options"]),
          K(kt, {
            "model-value": F.value,
            options: O.value,
            class: "w-[88px]",
            onChange: U[1] || (U[1] = (H) => F.value = String(H || ""))
          }, null, 8, ["model-value", "options"]),
          K(kt, {
            "model-value": j.value,
            options: D.value,
            class: "w-[110px]",
            onChange: U[2] || (U[2] = (H) => j.value = String(H || ""))
          }, null, 8, ["model-value", "options"]),
          K(kt, {
            "model-value": S.value,
            options: w.value,
            class: "w-[110px]",
            onChange: U[3] || (U[3] = (H) => S.value = String(H || ""))
          }, null, 8, ["model-value", "options"]),
          l("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: i.value,
            onClick: L
          }, [
            (v(), $("svg", {
              class: Z(["h-3.5 w-3.5", { "animate-spin": i.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...U[6] || (U[6] = [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            Q(" " + h(f(t)("common.refresh")), 1)
          ], 8, Tb)
        ])
      ]),
      i.value ? (v(), $("div", Pb, [
        U[7] || (U[7] = l("svg", {
          class: "h-4 w-4 animate-spin",
          fill: "none",
          viewBox: "0 0 24 24"
        }, [
          l("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }),
          l("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          })
        ], -1)),
        Q(" " + h(f(t)("admin.ops.alertEvents.loading")), 1)
      ])) : re.value ? (v(), $("div", Ob, h(f(t)("admin.ops.alertEvents.empty")), 1)) : (v(), $("div", Ab, [
        l("div", {
          class: "max-h-[600px] overflow-y-auto",
          onScroll: E
        }, [
          f(n) ? (v(), $("table", Hb, [
            l("thead", Wb, [
              l("tr", null, [
                l("th", Ub, h(f(t)("admin.ops.alertEvents.table.time")), 1),
                l("th", Yb, h(f(t)("admin.ops.alertEvents.table.severity")), 1),
                l("th", Gb, h(f(t)("admin.ops.alertEvents.table.platform")), 1),
                l("th", Xb, h(f(t)("admin.ops.alertEvents.table.ruleId")), 1),
                l("th", Kb, h(f(t)("admin.ops.alertEvents.table.title")), 1),
                l("th", Qb, h(f(t)("admin.ops.alertEvents.table.duration")), 1),
                l("th", Jb, h(f(t)("admin.ops.alertEvents.table.dimensions")), 1),
                l("th", Zb, h(f(t)("admin.ops.alertEvents.table.email")), 1)
              ])
            ]),
            l("tbody", tv, [
              (v(!0), $(gt, null, vt(o.value, (H) => (v(), $("tr", {
                key: H.id,
                class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50",
                onClick: (it) => G(H),
                title: H.title || ""
              }, [
                l("td", sv, h(f(_e)(H.fired_at || H.created_at)), 1),
                l("td", nv, [
                  l("div", iv, [
                    l("span", {
                      class: Z(["rounded-full px-2 py-1 text-[10px] font-bold", Ct(String(H.severity || ""))])
                    }, h(H.severity || "-"), 3),
                    l("span", {
                      class: Z(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Pt(H.status)])
                    }, h(Dt(H.status)), 3)
                  ])
                ]),
                l("td", av, h(N(H, "platform") || "-"), 1),
                l("td", ov, [
                  l("span", rv, "#" + h(H.rule_id), 1)
                ]),
                l("td", lv, [
                  l("div", dv, h(H.title || "-"), 1),
                  H.description ? (v(), $("div", cv, h(H.description), 1)) : W("", !0)
                ]),
                l("td", uv, h(nt(H)), 1),
                l("td", hv, h(ct(H)), 1),
                l("td", pv, [
                  l("span", {
                    class: "inline-flex items-center justify-end gap-1.5",
                    title: H.email_sent ? f(t)("admin.ops.alertEvents.table.emailSent") : f(t)("admin.ops.alertEvents.table.emailIgnored")
                  }, [
                    H.email_sent ? (v(), ft(ee, {
                      key: 0,
                      name: "checkCircle",
                      size: "sm",
                      class: "text-zo-signal-600 dark:text-zo-signal-400"
                    })) : (v(), ft(ee, {
                      key: 1,
                      name: "ban",
                      size: "sm",
                      class: "text-gray-400 dark:text-gray-500"
                    })),
                    l("span", gv, h(H.email_sent ? f(t)("admin.ops.alertEvents.table.emailSent") : f(t)("admin.ops.alertEvents.table.emailIgnored")), 1)
                  ], 8, fv)
                ])
              ], 8, ev))), 128))
            ])
          ])) : (v(), $("div", Eb, [
            (v(!0), $(gt, null, vt(o.value, (H) => (v(), $("div", {
              key: H.id,
              class: "cursor-pointer space-y-2 p-4 hover:bg-gray-50 dark:hover:bg-dark-700/50",
              onClick: (it) => G(H)
            }, [
              l("div", zb, [
                l("span", {
                  class: Z(["rounded-full px-2 py-1 text-[10px] font-bold", Ct(String(H.severity || ""))])
                }, h(H.severity || "-"), 3),
                l("span", {
                  class: Z(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Pt(H.status)])
                }, h(Dt(H.status)), 3),
                l("span", Ib, h(f(_e)(H.fired_at || H.created_at)), 1)
              ]),
              l("div", Fb, h(H.title || "-"), 1),
              H.description ? (v(), $("div", Vb, h(H.description), 1)) : W("", !0),
              l("div", Bb, [
                l("span", null, [
                  l("span", jb, "#" + h(H.rule_id), 1),
                  Q(" · " + h(nt(H)), 1)
                ]),
                l("span", qb, [
                  H.email_sent ? (v(), ft(ee, {
                    key: 0,
                    name: "checkCircle",
                    size: "xs",
                    class: "text-zo-signal-600 dark:text-zo-signal-400"
                  })) : (v(), ft(ee, {
                    key: 1,
                    name: "ban",
                    size: "xs",
                    class: "text-gray-400 dark:text-gray-500"
                  })),
                  Q(" " + h(H.email_sent ? f(t)("admin.ops.alertEvents.table.emailSent") : f(t)("admin.ops.alertEvents.table.emailIgnored")), 1)
                ])
              ]),
              l("div", Nb, h(ct(H)), 1)
            ], 8, Lb))), 128))
          ])),
          a.value ? (v(), $("div", mv, [
            U[8] || (U[8] = l("svg", {
              class: "h-4 w-4 animate-spin",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              l("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              l("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)),
            Q(" " + h(f(t)("admin.ops.alertEvents.loading")), 1)
          ])) : !r.value && o.value.length > 0 ? (v(), $("div", _v, " - ")) : W("", !0)
        ], 32)
      ])),
      K(Re, {
        show: d.value,
        title: f(t)("admin.ops.alertEvents.detail.title"),
        width: "wide",
        "close-on-click-outside": !0,
        onClose: ht
      }, {
        default: wt(() => {
          var H, it;
          return [
            u.value ? (v(), $("div", xv, h(f(t)("admin.ops.alertEvents.detail.loading")), 1)) : c.value ? (v(), $("div", bv, [
              l("div", vv, [
                l("div", kv, [
                  l("div", null, [
                    l("div", wv, [
                      l("span", {
                        class: Z(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold", Ct(String(c.value.severity || ""))])
                      }, h(c.value.severity || "-"), 3),
                      l("span", {
                        class: Z(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Pt(c.value.status)])
                      }, h(Dt(c.value.status)), 3)
                    ]),
                    l("div", Sv, h(c.value.title || "-"), 1),
                    c.value.description ? (v(), $("div", $v, h(c.value.description), 1)) : W("", !0)
                  ]),
                  l("div", Cv, [
                    l("div", Mv, [
                      l("span", Dv, h(f(t)("admin.ops.alertEvents.detail.silence")), 1),
                      K(kt, {
                        "model-value": b.value,
                        options: y.value,
                        class: "w-[110px]",
                        onChange: U[4] || (U[4] = (dt) => b.value = String(dt || "1h"))
                      }, null, 8, ["model-value", "options"]),
                      l("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        disabled: p.value,
                        onClick: q
                      }, [
                        K(ee, {
                          name: "ban",
                          size: "sm"
                        }),
                        Q(" " + h(f(t)("common.apply")), 1)
                      ], 8, Rv)
                    ]),
                    l("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      disabled: p.value,
                      onClick: rt
                    }, [
                      K(ee, {
                        name: "checkCircle",
                        size: "sm"
                      }),
                      Q(" " + h(f(t)("admin.ops.alertEvents.detail.manualResolve")), 1)
                    ], 8, Tv)
                  ])
                ])
              ]),
              l("div", Pv, [
                l("div", Ov, [
                  l("div", Av, h(f(t)("admin.ops.alertEvents.detail.firedAt")), 1),
                  l("div", Ev, h(f(_e)(c.value.fired_at || c.value.created_at)), 1)
                ]),
                l("div", Lv, [
                  l("div", zv, h(f(t)("admin.ops.alertEvents.detail.resolvedAt")), 1),
                  l("div", Iv, h(c.value.resolved_at ? f(_e)(c.value.resolved_at) : "-"), 1)
                ]),
                l("div", Fv, [
                  l("div", Vv, h(f(t)("admin.ops.alertEvents.detail.ruleId")), 1),
                  l("div", Bv, [
                    l("div", jv, "#" + h(c.value.rule_id), 1),
                    l("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?open_alert_rules=1&alert_rule_id=${c.value.rule_id}`
                    }, [
                      K(ee, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      Q(" " + h(f(t)("admin.ops.alertEvents.detail.viewRule")), 1)
                    ], 8, qv),
                    l("a", {
                      class: "inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-dark-800 dark:text-gray-200 dark:ring-dark-700 dark:hover:bg-dark-700",
                      href: `/admin/ops?platform=${encodeURIComponent(N(c.value, "platform") || "")}&group_id=${((H = c.value.dimensions) == null ? void 0 : H.group_id) || ""}&error_type=request&open_error_details=1`
                    }, [
                      K(ee, {
                        name: "externalLink",
                        size: "xs"
                      }),
                      Q(" " + h(f(t)("admin.ops.alertEvents.detail.viewLogs")), 1)
                    ], 8, Nv)
                  ])
                ]),
                l("div", Hv, [
                  l("div", Wv, h(f(t)("admin.ops.alertEvents.detail.dimensions")), 1),
                  l("div", Uv, [
                    N(c.value, "platform") ? (v(), $("div", Yv, "platform=" + h(N(c.value, "platform")), 1)) : W("", !0),
                    (it = c.value.dimensions) != null && it.group_id ? (v(), $("div", Gv, "group_id=" + h(c.value.dimensions.group_id), 1)) : W("", !0),
                    N(c.value, "region") ? (v(), $("div", Xv, "region=" + h(N(c.value, "region")), 1)) : W("", !0)
                  ])
                ])
              ]),
              l("div", Kv, [
                l("div", Qv, [
                  l("div", null, [
                    l("div", Jv, h(f(t)("admin.ops.alertEvents.detail.historyTitle")), 1),
                    l("div", Zv, h(f(t)("admin.ops.alertEvents.detail.historyHint")), 1)
                  ]),
                  K(kt, {
                    "model-value": g.value,
                    options: x.value,
                    class: "w-[140px]",
                    onChange: U[5] || (U[5] = (dt) => g.value = String(dt || "7d"))
                  }, null, 8, ["model-value", "options"])
                ]),
                m.value ? (v(), $("div", t1, h(f(t)("admin.ops.alertEvents.detail.historyLoading")), 1)) : _.value.length === 0 ? (v(), $("div", e1, h(f(t)("admin.ops.alertEvents.detail.historyEmpty")), 1)) : (v(), $("div", s1, [
                  l("table", n1, [
                    l("thead", i1, [
                      l("tr", null, [
                        l("th", a1, h(f(t)("admin.ops.alertEvents.table.time")), 1),
                        l("th", o1, h(f(t)("admin.ops.alertEvents.table.status")), 1),
                        l("th", r1, h(f(t)("admin.ops.alertEvents.table.metric")), 1)
                      ])
                    ]),
                    l("tbody", l1, [
                      (v(!0), $(gt, null, vt(_.value, (dt) => (v(), $("tr", {
                        key: dt.id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        l("td", d1, h(f(_e)(dt.fired_at || dt.created_at)), 1),
                        l("td", c1, [
                          l("span", {
                            class: Z(["inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ring-1 ring-inset", Pt(dt.status)])
                          }, h(Dt(dt.status)), 3)
                        ]),
                        l("td", u1, [
                          typeof dt.metric_value == "number" && typeof dt.threshold_value == "number" ? (v(), $("span", h1, h(dt.metric_value.toFixed(2)) + " / " + h(dt.threshold_value.toFixed(2)), 1)) : (v(), $("span", p1, "-"))
                        ])
                      ]))), 128))
                    ])
                  ])
                ]))
              ])
            ])) : (v(), $("div", yv, h(f(t)("admin.ops.alertEvents.detail.empty")), 1))
          ];
        }),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), g1 = { class: "card p-4 md:p-5" }, m1 = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, _1 = { class: "text-sm font-bold text-gray-900 dark:text-white" }, x1 = { class: "flex flex-wrap items-center gap-2" }, y1 = { class: "w-36" }, b1 = { class: "w-36" }, v1 = {
  key: 0,
  class: "w-28"
}, k1 = { class: "w-24" }, w1 = ["disabled"], S1 = ["disabled"], $1 = { class: "text-xs text-gray-500 dark:text-gray-400" }, C1 = {
  key: 0,
  class: "mb-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, M1 = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-500 dark:text-gray-400"
}, D1 = {
  key: 3,
  class: "space-y-3"
}, R1 = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, T1 = { class: "max-h-[420px] overflow-auto" }, P1 = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, O1 = { class: "break-all text-xs font-medium text-gray-900 dark:text-gray-100" }, A1 = { class: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs" }, E1 = { class: "flex items-baseline justify-between gap-2" }, L1 = { class: "text-gray-500 dark:text-gray-400" }, z1 = { class: "text-gray-700 dark:text-gray-200" }, I1 = { class: "flex items-baseline justify-between gap-2" }, F1 = { class: "text-gray-500 dark:text-gray-400" }, V1 = { class: "text-gray-700 dark:text-gray-200" }, B1 = { class: "flex items-baseline justify-between gap-2" }, j1 = { class: "text-gray-500 dark:text-gray-400" }, q1 = { class: "text-gray-700 dark:text-gray-200" }, N1 = { class: "flex items-baseline justify-between gap-2" }, H1 = { class: "text-gray-500 dark:text-gray-400" }, W1 = { class: "text-gray-700 dark:text-gray-200" }, U1 = { class: "flex items-baseline justify-between gap-2" }, Y1 = { class: "text-gray-500 dark:text-gray-400" }, G1 = { class: "text-gray-700 dark:text-gray-200" }, X1 = { class: "flex items-baseline justify-between gap-2" }, K1 = { class: "text-gray-500 dark:text-gray-400" }, Q1 = { class: "text-gray-700 dark:text-gray-200" }, J1 = {
  key: 1,
  class: "min-w-full text-left text-xs md:text-sm"
}, Z1 = { class: "sticky top-0 z-10 bg-white dark:bg-dark-800" }, tk = { class: "border-b border-gray-200 text-gray-500 dark:border-dark-700 dark:text-gray-400" }, ek = { class: "px-2 py-2 font-semibold" }, sk = { class: "px-2 py-2 font-semibold" }, nk = { class: "px-2 py-2 font-semibold" }, ik = { class: "px-2 py-2 font-semibold" }, ak = { class: "px-2 py-2 font-semibold" }, ok = { class: "px-2 py-2 font-semibold" }, rk = { class: "px-2 py-2 font-semibold" }, lk = { class: "px-2 py-2 font-medium" }, dk = { class: "px-2 py-2" }, ck = { class: "px-2 py-2" }, uk = { class: "px-2 py-2" }, hk = { class: "px-2 py-2" }, pk = { class: "px-2 py-2" }, fk = { class: "px-2 py-2" }, gk = {
  key: 0,
  class: "mt-3 text-xs text-gray-500 dark:text-gray-400"
}, mk = /* @__PURE__ */ Mt({
  __name: "OpsOpenAITokenStatsCard",
  props: {
    platformFilter: { default: "" },
    groupIdFilter: { default: null },
    refreshToken: {}
  },
  setup(s) {
    const t = s, { t: e } = Et(), n = en("(min-width: 768px)"), i = I(!1), a = I(""), o = I(null), r = I("30d"), d = I("topn"), c = I(20), u = I(1), p = I(20), m = P(() => {
      var w;
      return ((w = o.value) == null ? void 0 : w.items) ?? [];
    }), _ = P(() => {
      var w;
      return ((w = o.value) == null ? void 0 : w.total) ?? 0;
    }), g = P(() => {
      if (d.value !== "pagination") return 1;
      const w = p.value > 0 ? p.value : 20;
      return Math.max(1, Math.ceil(_.value / w));
    }), x = P(() => [
      { value: "30m", label: e("admin.ops.timeRange.30m") },
      { value: "1h", label: e("admin.ops.timeRange.1h") },
      { value: "1d", label: e("admin.ops.timeRange.1d") },
      { value: "15d", label: e("admin.ops.timeRange.15d") },
      { value: "30d", label: e("admin.ops.timeRange.30d") }
    ]), b = P(() => [
      { value: "topn", label: e("admin.ops.openaiTokenStats.viewModeTopN") },
      { value: "pagination", label: e("admin.ops.openaiTokenStats.viewModePagination") }
    ]), y = P(() => [
      { value: 10, label: "Top 10" },
      { value: 20, label: "Top 20" },
      { value: 50, label: "Top 50" },
      { value: 100, label: "Top 100" }
    ]), T = P(() => [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 50, label: "50" },
      { value: 100, label: "100" }
    ]);
    function B(w) {
      return typeof w != "number" || !Number.isFinite(w) ? "-" : w.toFixed(2);
    }
    function F(w) {
      return typeof w != "number" || !Number.isFinite(w) ? "-" : me(Math.round(w));
    }
    function O() {
      const w = {
        time_range: r.value,
        platform: t.platformFilter || void 0,
        group_id: typeof t.groupIdFilter == "number" && t.groupIdFilter > 0 ? t.groupIdFilter : void 0
      };
      return d.value === "topn" ? w.top_n = c.value : (w.page = u.value, w.page_size = p.value), w;
    }
    async function j() {
      i.value = !0, a.value = "";
      try {
        o.value = await ot.getOpenAITokenStats(O()), d.value === "pagination" && u.value > g.value && (u.value = g.value, o.value = await ot.getOpenAITokenStats(O()));
      } catch (w) {
        console.error("[OpsOpenAITokenStatsCard] Failed to load data", w), o.value = null, a.value = (w == null ? void 0 : w.message) || e("admin.ops.openaiTokenStats.failedToLoad");
      } finally {
        i.value = !1;
      }
    }
    _t(
      () => ({
        timeRange: r.value,
        viewMode: d.value,
        topN: c.value,
        page: u.value,
        pageSize: p.value,
        platform: t.platformFilter,
        groupId: t.groupIdFilter,
        refreshToken: t.refreshToken
      }),
      (w, V) => {
        const L = !V || w.timeRange !== V.timeRange || w.viewMode !== V.viewMode || w.pageSize !== V.pageSize || w.platform !== V.platform || w.groupId !== V.groupId;
        if (w.viewMode === "pagination" && L && w.page !== 1) {
          u.value = 1;
          return;
        }
        j();
      },
      { immediate: !0 }
    );
    function D() {
      d.value === "pagination" && u.value > 1 && (u.value -= 1);
    }
    function S() {
      d.value === "pagination" && u.value < g.value && (u.value += 1);
    }
    return (w, V) => (v(), $("section", g1, [
      l("div", m1, [
        l("h3", _1, h(f(e)("admin.ops.openaiTokenStats.title")), 1),
        l("div", x1, [
          l("div", y1, [
            K(kt, {
              modelValue: r.value,
              "onUpdate:modelValue": V[0] || (V[0] = (L) => r.value = L),
              options: x.value
            }, null, 8, ["modelValue", "options"])
          ]),
          l("div", b1, [
            K(kt, {
              modelValue: d.value,
              "onUpdate:modelValue": V[1] || (V[1] = (L) => d.value = L),
              options: b.value
            }, null, 8, ["modelValue", "options"])
          ]),
          d.value === "topn" ? (v(), $("div", v1, [
            K(kt, {
              modelValue: c.value,
              "onUpdate:modelValue": V[2] || (V[2] = (L) => c.value = L),
              options: y.value
            }, null, 8, ["modelValue", "options"])
          ])) : (v(), $(gt, { key: 1 }, [
            l("div", k1, [
              K(kt, {
                modelValue: p.value,
                "onUpdate:modelValue": V[3] || (V[3] = (L) => p.value = L),
                options: T.value
              }, null, 8, ["modelValue", "options"])
            ]),
            l("button", {
              class: "btn btn-secondary btn-sm",
              disabled: i.value || u.value <= 1,
              onClick: D
            }, h(f(e)("admin.ops.openaiTokenStats.prevPage")), 9, w1),
            l("button", {
              class: "btn btn-secondary btn-sm",
              disabled: i.value || u.value >= g.value,
              onClick: S
            }, h(f(e)("admin.ops.openaiTokenStats.nextPage")), 9, S1),
            l("span", $1, h(f(e)("admin.ops.openaiTokenStats.pageInfo", { page: u.value, total: g.value })), 1)
          ], 64))
        ])
      ]),
      a.value ? (v(), $("div", C1, h(a.value), 1)) : W("", !0),
      i.value ? (v(), $("div", M1, h(f(e)("admin.ops.loadingText")), 1)) : m.value.length === 0 ? (v(), ft(ts, {
        key: 2,
        title: f(e)("common.noData"),
        description: f(e)("admin.ops.openaiTokenStats.empty")
      }, null, 8, ["title", "description"])) : (v(), $("div", D1, [
        l("div", R1, [
          l("div", T1, [
            f(n) ? (v(), $("table", J1, [
              l("thead", Z1, [
                l("tr", tk, [
                  l("th", ek, h(f(e)("admin.ops.openaiTokenStats.table.model")), 1),
                  l("th", sk, h(f(e)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                  l("th", nk, h(f(e)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                  l("th", ik, h(f(e)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                  l("th", ak, h(f(e)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                  l("th", ok, h(f(e)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                  l("th", rk, h(f(e)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1)
                ])
              ]),
              l("tbody", null, [
                (v(!0), $(gt, null, vt(m.value, (L) => (v(), $("tr", {
                  key: L.model,
                  class: "border-b border-gray-100 text-gray-700 last:border-b-0 dark:border-dark-800 dark:text-gray-200"
                }, [
                  l("td", lk, h(L.model), 1),
                  l("td", dk, h(F(L.request_count)), 1),
                  l("td", ck, h(B(L.avg_tokens_per_sec)), 1),
                  l("td", uk, h(B(L.avg_first_token_ms)), 1),
                  l("td", hk, h(F(L.total_output_tokens)), 1),
                  l("td", pk, h(F(L.avg_duration_ms)), 1),
                  l("td", fk, h(F(L.requests_with_first_token)), 1)
                ]))), 128))
              ])
            ])) : (v(), $("div", P1, [
              (v(!0), $(gt, null, vt(m.value, (L) => (v(), $("div", {
                key: L.model,
                class: "space-y-2 p-3"
              }, [
                l("div", O1, h(L.model), 1),
                l("div", A1, [
                  l("div", E1, [
                    l("span", L1, h(f(e)("admin.ops.openaiTokenStats.table.requestCount")), 1),
                    l("span", z1, h(F(L.request_count)), 1)
                  ]),
                  l("div", I1, [
                    l("span", F1, h(f(e)("admin.ops.openaiTokenStats.table.avgTokensPerSec")), 1),
                    l("span", V1, h(B(L.avg_tokens_per_sec)), 1)
                  ]),
                  l("div", B1, [
                    l("span", j1, h(f(e)("admin.ops.openaiTokenStats.table.avgFirstTokenMs")), 1),
                    l("span", q1, h(B(L.avg_first_token_ms)), 1)
                  ]),
                  l("div", N1, [
                    l("span", H1, h(f(e)("admin.ops.openaiTokenStats.table.totalOutputTokens")), 1),
                    l("span", W1, h(F(L.total_output_tokens)), 1)
                  ]),
                  l("div", U1, [
                    l("span", Y1, h(f(e)("admin.ops.openaiTokenStats.table.avgDurationMs")), 1),
                    l("span", G1, h(F(L.avg_duration_ms)), 1)
                  ]),
                  l("div", X1, [
                    l("span", K1, h(f(e)("admin.ops.openaiTokenStats.table.requestsWithFirstToken")), 1),
                    l("span", Q1, h(F(L.requests_with_first_token)), 1)
                  ])
                ])
              ]))), 128))
            ]))
          ])
        ]),
        d.value === "topn" ? (v(), $("div", gk, h(f(e)("admin.ops.openaiTokenStats.totalModels", { total: _.value })), 1)) : W("", !0)
      ]))
    ]));
  }
}), _k = { class: "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-dark-700 dark:bg-dark-900/60" }, xk = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, yk = { class: "text-sm font-bold text-gray-900 dark:text-white" }, bk = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, vk = { class: "flex flex-wrap items-center gap-2 text-xs" }, kk = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, wk = { class: "rounded-md bg-gray-100 px-2 py-1 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Sk = { class: "rounded-md bg-zo-alert-100 px-2 py-1 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" }, $k = { class: "rounded-md bg-red-100 px-2 py-1 text-red-700 dark:bg-red-900/30 dark:text-red-300" }, Ck = { class: "mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-dark-700 dark:bg-dark-800/70" }, Mk = { class: "mb-2 flex items-center justify-between" }, Dk = { class: "text-xs font-semibold text-gray-700 dark:text-gray-200" }, Rk = {
  key: 0,
  class: "text-xs text-gray-500"
}, Tk = { class: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6" }, Pk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Ok = { class: "text-xs text-gray-600 dark:text-gray-300" }, Ak = { class: "text-xs text-gray-600 dark:text-gray-300" }, Ek = { class: "text-xs text-gray-600 dark:text-gray-300" }, Lk = { class: "text-xs text-gray-600 dark:text-gray-300" }, zk = { class: "md:col-span-2 xl:col-span-6" }, Ik = { class: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end" }, Fk = { class: "flex flex-wrap items-center gap-x-4 gap-y-2" }, Vk = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, Bk = { class: "inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300" }, jk = { class: "flex flex-wrap items-center gap-2 lg:justify-end" }, qk = ["disabled"], Nk = ["disabled"], Hk = {
  key: 0,
  class: "mt-2 text-xs text-red-600 dark:text-red-400"
}, Wk = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-5" }, Uk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Yk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Gk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Xk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Kk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Qk = ["placeholder"], Jk = { class: "text-xs text-gray-600 dark:text-gray-300" }, Zk = { class: "text-xs text-gray-600 dark:text-gray-300" }, t2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, e2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, s2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, n2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, i2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, a2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, o2 = { class: "text-xs text-gray-600 dark:text-gray-300" }, r2 = ["placeholder"], l2 = { class: "mb-3 flex flex-wrap gap-2" }, d2 = { class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700" }, c2 = {
  key: 0,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, u2 = {
  key: 1,
  class: "px-4 py-8 text-center text-sm text-gray-500"
}, h2 = {
  key: 2,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, p2 = { class: "flex items-center justify-between gap-2" }, f2 = { class: "text-xs text-gray-500 dark:text-gray-400" }, g2 = ["title"], m2 = { class: "whitespace-normal break-all text-xs text-gray-700 dark:text-gray-300" }, _2 = {
  key: 3,
  class: "overflow-auto"
}, x2 = { class: "min-w-full table-fixed divide-y divide-gray-200 dark:divide-dark-700" }, y2 = { class: "bg-gray-50 dark:bg-dark-900" }, b2 = { class: "w-[170px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, v2 = { class: "w-[160px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, k2 = { class: "w-[80px] px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, w2 = { class: "px-3 py-2 text-left text-[11px] font-semibold text-gray-500" }, S2 = { class: "divide-y divide-gray-100 dark:divide-dark-800" }, $2 = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, C2 = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300" }, M2 = ["title"], D2 = { class: "px-3 py-2 text-xs" }, R2 = { class: "px-3 py-2 text-xs text-gray-700 dark:text-gray-300 whitespace-normal break-all" }, T2 = /* @__PURE__ */ Mt({
  __name: "OpsSystemLogTable",
  props: {
    platformFilter: { default: "" },
    refreshToken: { default: 0 }
  },
  setup(s) {
    const t = Fe(), { t: e } = Et(), n = en("(min-width: 768px)"), i = s, a = I(!1), o = I([]), r = I(0), d = I(1), c = I(20), u = I({
      queue_depth: 0,
      queue_capacity: 0,
      dropped_count: 0,
      write_failed_count: 0,
      written_count: 0,
      avg_write_delay_ms: 0
    }), p = I(!1), m = I(!1), _ = gi({
      level: "info",
      enable_sampling: !1,
      sampling_initial: 100,
      sampling_thereafter: 100,
      caller: !0,
      stacktrace_level: "error",
      retention_days: 30
    }), g = gi({
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
    }), x = [
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ], b = [
      { value: "none", label: "none" },
      { value: "error", label: "error" },
      { value: "fatal", label: "fatal" }
    ], y = [
      { value: "5m", label: "5m" },
      { value: "30m", label: "30m" },
      { value: "1h", label: "1h" },
      { value: "6h", label: "6h" },
      { value: "24h", label: "24h" },
      { value: "7d", label: "7d" },
      { value: "30d", label: "30d" }
    ], T = P(() => [
      { value: "", label: e("admin.ops.systemLogs.all") },
      { value: "debug", label: "debug" },
      { value: "info", label: "info" },
      { value: "warn", label: "warn" },
      { value: "error", label: "error" }
    ]), B = (R) => {
      const M = String(R || "").toLowerCase();
      return M === "error" || M === "fatal" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : M === "warn" || M === "warning" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : M === "debug" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    }, F = (R) => {
      if (!R) return "-";
      const M = new Date(R);
      return Number.isNaN(M.getTime()) ? R : M.toLocaleString();
    }, O = (R, M) => {
      if (!R) return "";
      const q = R[M];
      return q == null ? "" : typeof q == "string" ? q.trim() : typeof q == "number" || typeof q == "boolean" ? String(q) : "";
    }, j = (R) => {
      const M = [], q = String(R.message || "").trim();
      q && M.push(q);
      const rt = R.extra || {}, Ct = O(rt, "status_code"), Pt = O(rt, "latency_ms"), Dt = O(rt, "method"), re = O(rt, "path"), tt = O(rt, "client_ip"), U = O(rt, "protocol"), H = [];
      Ct && H.push(`status=${Ct}`), Pt && H.push(`latency_ms=${Pt}`), Dt && H.push(`method=${Dt}`), re && H.push(`path=${re}`), tt && H.push(`ip=${tt}`), U && H.push(`proto=${U}`), H.length > 0 && M.push(H.join(" "));
      const it = [];
      R.request_id && it.push(`req=${R.request_id}`), R.client_request_id && it.push(`client_req=${R.client_request_id}`), R.user_id != null && it.push(`user=${R.user_id}`), R.api_key_id != null && it.push(`key=${R.api_key_id}`), R.account_id != null && it.push(`acc=${R.account_id}`), R.platform && it.push(`platform=${R.platform}`), R.model && it.push(`model=${R.model}`), it.length > 0 && M.push(it.join(" "));
      const dt = O(rt, "errors");
      dt && M.push(`errors=${dt}`);
      const Lt = O(rt, "err") || O(rt, "error");
      return Lt && M.push(`error=${Lt}`), M.join("  ");
    }, D = (R) => {
      if (!R) return;
      const M = new Date(R);
      if (!Number.isNaN(M.getTime()))
        return M.toISOString();
    }, S = () => {
      const R = {
        page: d.value,
        page_size: c.value,
        time_range: g.time_range
      };
      if (g.time_range === "30d" && (R.time_range = "30d"), g.start_time && (R.start_time = D(g.start_time)), g.end_time && (R.end_time = D(g.end_time)), g.host.trim() && (R.host = g.host.trim()), g.level.trim() && (R.level = g.level.trim()), g.component.trim() && (R.component = g.component.trim()), g.request_id.trim() && (R.request_id = g.request_id.trim()), g.client_request_id.trim() && (R.client_request_id = g.client_request_id.trim()), g.user_id.trim()) {
        const M = Number.parseInt(g.user_id.trim(), 10);
        Number.isFinite(M) && M > 0 && (R.user_id = M);
      }
      if (g.api_key_id.trim()) {
        const M = Number.parseInt(g.api_key_id.trim(), 10);
        Number.isFinite(M) && M > 0 && (R.api_key_id = M);
      }
      if (g.account_id.trim()) {
        const M = Number.parseInt(g.account_id.trim(), 10);
        Number.isFinite(M) && M > 0 && (R.account_id = M);
      }
      return g.platform.trim() && (R.platform = g.platform.trim()), g.model.trim() && (R.model = g.model.trim()), g.q.trim() && (R.q = g.q.trim()), R;
    }, w = async () => {
      var R, M;
      a.value = !0;
      try {
        const q = await ot.listSystemLogs(S());
        o.value = q.items || [], r.value = q.total || 0;
      } catch (q) {
        console.error("[OpsSystemLogTable] Failed to fetch logs", q), t.showError(((M = (R = q == null ? void 0 : q.response) == null ? void 0 : R.data) == null ? void 0 : M.detail) || e("admin.ops.systemLogs.loadFailed"));
      } finally {
        a.value = !1;
      }
    }, V = async () => {
      try {
        u.value = await ot.getSystemLogSinkHealth();
      } catch {
      }
    }, L = async () => {
      p.value = !0;
      try {
        const R = await ot.getRuntimeLogConfig();
        _.level = R.level, _.enable_sampling = R.enable_sampling, _.sampling_initial = R.sampling_initial, _.sampling_thereafter = R.sampling_thereafter, _.caller = R.caller, _.stacktrace_level = R.stacktrace_level, _.retention_days = R.retention_days;
      } catch (R) {
        console.error("[OpsSystemLogTable] Failed to load runtime log config", R);
      } finally {
        p.value = !1;
      }
    }, A = async () => {
      var R, M;
      m.value = !0;
      try {
        const q = await ot.updateRuntimeLogConfig({ ..._ });
        _.level = q.level, _.enable_sampling = q.enable_sampling, _.sampling_initial = q.sampling_initial, _.sampling_thereafter = q.sampling_thereafter, _.caller = q.caller, _.stacktrace_level = q.stacktrace_level, _.retention_days = q.retention_days, t.showSuccess(e("admin.ops.systemLogs.runtimeConfigActive"));
      } catch (q) {
        console.error("[OpsSystemLogTable] Failed to save runtime log config", q), t.showError(((M = (R = q == null ? void 0 : q.response) == null ? void 0 : R.data) == null ? void 0 : M.detail) || e("admin.ops.systemLogs.runtimeConfigSaveFailed"));
      } finally {
        m.value = !1;
      }
    }, E = async () => {
      var M, q;
      if (window.confirm(e("admin.ops.systemLogs.resetRuntimeConfigConfirm"))) {
        m.value = !0;
        try {
          const rt = await ot.resetRuntimeLogConfig();
          _.level = rt.level, _.enable_sampling = rt.enable_sampling, _.sampling_initial = rt.sampling_initial, _.sampling_thereafter = rt.sampling_thereafter, _.caller = rt.caller, _.stacktrace_level = rt.stacktrace_level, _.retention_days = rt.retention_days, t.showSuccess(e("admin.ops.systemLogs.runtimeConfigReset")), await V();
        } catch (rt) {
          console.error("[OpsSystemLogTable] Failed to reset runtime log config", rt), t.showError(((q = (M = rt == null ? void 0 : rt.response) == null ? void 0 : M.data) == null ? void 0 : q.detail) || e("admin.ops.systemLogs.runtimeConfigResetFailed"));
        } finally {
          m.value = !1;
        }
      }
    }, N = async () => {
      if (window.confirm(e("admin.ops.systemLogs.cleanupConfirm")))
        try {
          const M = {
            start_time: D(g.start_time),
            end_time: D(g.end_time),
            host: g.host.trim() || void 0,
            level: g.level.trim() || void 0,
            component: g.component.trim() || void 0,
            request_id: g.request_id.trim() || void 0,
            client_request_id: g.client_request_id.trim() || void 0,
            user_id: g.user_id.trim() ? Number.parseInt(g.user_id.trim(), 10) : void 0,
            api_key_id: g.api_key_id.trim() ? Number.parseInt(g.api_key_id.trim(), 10) : void 0,
            account_id: g.account_id.trim() ? Number.parseInt(g.account_id.trim(), 10) : void 0,
            platform: g.platform.trim() || void 0,
            model: g.model.trim() || void 0,
            q: g.q.trim() || void 0
          }, q = await ot.cleanupSystemLogs(M);
          t.showSuccess(e("admin.ops.systemLogs.cleanupSuccess", { count: q.deleted || 0 })), d.value = 1, await Promise.all([w(), V()]);
        } catch (M) {
          console.error("[OpsSystemLogTable] Failed to cleanup logs", M), t.showError(
            sl(M, e("admin.ops.systemLogs.cleanupFailed"), {
              OPS_SYSTEM_LOG_CLEANUP_FILTER_REQUIRED: e("admin.ops.systemLogs.cleanupFilterRequired")
            })
          );
        }
    }, Y = () => {
      g.time_range = "1h", g.start_time = "", g.end_time = "", g.host = "", g.level = "", g.component = "", g.request_id = "", g.client_request_id = "", g.user_id = "", g.api_key_id = "", g.account_id = "", g.platform = i.platformFilter || "", g.model = "", g.q = "", d.value = 1, w();
    };
    _t(() => i.platformFilter, (R) => {
      R && !g.platform && (g.platform = R, d.value = 1, w());
    }), _t(() => i.refreshToken, () => {
      w(), V();
    });
    const nt = (R) => {
      d.value = R, w();
    }, ct = (R) => {
      c.value = R, d.value = 1, w();
    }, ht = () => {
      d.value = 1, w();
    }, G = P(() => o.value.length > 0);
    return Ze(async () => {
      i.platformFilter && (g.platform = i.platformFilter), await Promise.all([w(), V(), L()]);
    }), (R, M) => (v(), $("section", _k, [
      l("div", xk, [
        l("div", null, [
          l("h3", yk, h(f(e)("admin.ops.systemLogs.title")), 1),
          l("p", bk, h(f(e)("admin.ops.systemLogs.description")), 1)
        ]),
        l("div", vk, [
          l("span", kk, h(f(e)("admin.ops.systemLogs.queue")) + " " + h(u.value.queue_depth) + "/" + h(u.value.queue_capacity), 1),
          l("span", wk, h(f(e)("admin.ops.systemLogs.written")) + " " + h(u.value.written_count), 1),
          l("span", Sk, h(f(e)("admin.ops.systemLogs.dropped")) + " " + h(u.value.dropped_count), 1),
          l("span", $k, h(f(e)("admin.ops.systemLogs.failed")) + " " + h(u.value.write_failed_count), 1)
        ])
      ]),
      l("div", Ck, [
        l("div", Mk, [
          l("div", Dk, h(f(e)("admin.ops.systemLogs.runtimeConfig")), 1),
          p.value ? (v(), $("span", Rk, h(f(e)("common.loading")), 1)) : W("", !0)
        ]),
        l("div", Tk, [
          l("label", Pk, [
            Q(h(f(e)("admin.ops.systemLogs.level")) + " ", 1),
            K(kt, {
              modelValue: _.level,
              "onUpdate:modelValue": M[0] || (M[0] = (q) => _.level = q),
              class: "mt-1",
              options: x
            }, null, 8, ["modelValue"])
          ]),
          l("label", Ok, [
            Q(h(f(e)("admin.ops.systemLogs.stacktraceThreshold")) + " ", 1),
            K(kt, {
              modelValue: _.stacktrace_level,
              "onUpdate:modelValue": M[1] || (M[1] = (q) => _.stacktrace_level = q),
              class: "mt-1",
              options: b
            }, null, 8, ["modelValue"])
          ]),
          l("label", Ak, [
            Q(h(f(e)("admin.ops.systemLogs.samplingInitial")) + " ", 1),
            lt(l("input", {
              "onUpdate:modelValue": M[2] || (M[2] = (q) => _.sampling_initial = q),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                pt,
                _.sampling_initial,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("label", Ek, [
            Q(h(f(e)("admin.ops.systemLogs.samplingThereafter")) + " ", 1),
            lt(l("input", {
              "onUpdate:modelValue": M[3] || (M[3] = (q) => _.sampling_thereafter = q),
              type: "number",
              min: "1",
              class: "input mt-1"
            }, null, 512), [
              [
                pt,
                _.sampling_thereafter,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("label", Lk, [
            Q(h(f(e)("admin.ops.systemLogs.retentionDays")) + " ", 1),
            lt(l("input", {
              "onUpdate:modelValue": M[4] || (M[4] = (q) => _.retention_days = q),
              type: "number",
              min: "1",
              max: "3650",
              class: "input mt-1"
            }, null, 512), [
              [
                pt,
                _.retention_days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("div", zk, [
            l("div", Ik, [
              l("div", Fk, [
                l("label", Vk, [
                  lt(l("input", {
                    "onUpdate:modelValue": M[5] || (M[5] = (q) => _.caller = q),
                    type: "checkbox"
                  }, null, 512), [
                    [Rn, _.caller]
                  ]),
                  Q(" " + h(f(e)("admin.ops.systemLogs.caller")), 1)
                ]),
                l("label", Bk, [
                  lt(l("input", {
                    "onUpdate:modelValue": M[6] || (M[6] = (q) => _.enable_sampling = q),
                    type: "checkbox"
                  }, null, 512), [
                    [Rn, _.enable_sampling]
                  ]),
                  Q(" " + h(f(e)("admin.ops.systemLogs.sampling")), 1)
                ])
              ]),
              l("div", jk, [
                l("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  disabled: m.value,
                  onClick: A
                }, h(m.value ? f(e)("common.saving") : f(e)("admin.ops.systemLogs.saveAndApply")), 9, qk),
                l("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: m.value,
                  onClick: E
                }, h(f(e)("admin.ops.systemLogs.resetDefaults")), 9, Nk)
              ])
            ])
          ])
        ]),
        u.value.last_error ? (v(), $("p", Hk, h(f(e)("admin.ops.systemLogs.latestWriteError")) + " " + h(u.value.last_error), 1)) : W("", !0)
      ]),
      l("div", Wk, [
        l("label", Uk, [
          Q(h(f(e)("admin.ops.systemLogs.timeRange")) + " ", 1),
          K(kt, {
            modelValue: g.time_range,
            "onUpdate:modelValue": M[7] || (M[7] = (q) => g.time_range = q),
            class: "mt-1",
            options: y
          }, null, 8, ["modelValue"])
        ]),
        l("label", Yk, [
          Q(h(f(e)("admin.ops.systemLogs.startTime")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[8] || (M[8] = (q) => g.start_time = q),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.start_time]
          ])
        ]),
        l("label", Gk, [
          Q(h(f(e)("admin.ops.systemLogs.endTime")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[9] || (M[9] = (q) => g.end_time = q),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.end_time]
          ])
        ]),
        l("label", Xk, [
          Q(h(f(e)("admin.ops.systemLogs.level")) + " ", 1),
          K(kt, {
            modelValue: g.level,
            "onUpdate:modelValue": M[10] || (M[10] = (q) => g.level = q),
            class: "mt-1",
            options: T.value
          }, null, 8, ["modelValue", "options"])
        ]),
        l("label", Kk, [
          Q(h(f(e)("admin.ops.systemLogs.component")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[11] || (M[11] = (q) => g.component = q),
            type: "text",
            class: "input mt-1",
            placeholder: f(e)("admin.ops.systemLogs.componentPlaceholder")
          }, null, 8, Qk), [
            [pt, g.component]
          ])
        ]),
        l("label", Jk, [
          Q(h(f(e)("admin.ops.systemLogs.host")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[12] || (M[12] = (q) => g.host = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.host]
          ])
        ]),
        l("label", Zk, [
          M[21] || (M[21] = Q(" request_id ", -1)),
          lt(l("input", {
            "onUpdate:modelValue": M[13] || (M[13] = (q) => g.request_id = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.request_id]
          ])
        ]),
        l("label", t2, [
          M[22] || (M[22] = Q(" client_request_id ", -1)),
          lt(l("input", {
            "onUpdate:modelValue": M[14] || (M[14] = (q) => g.client_request_id = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.client_request_id]
          ])
        ]),
        l("label", e2, [
          M[23] || (M[23] = Q(" user_id ", -1)),
          lt(l("input", {
            "onUpdate:modelValue": M[15] || (M[15] = (q) => g.user_id = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.user_id]
          ])
        ]),
        l("label", s2, [
          Q(h(f(e)("admin.ops.systemLogs.keyId")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[16] || (M[16] = (q) => g.api_key_id = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.api_key_id]
          ])
        ]),
        l("label", n2, [
          M[24] || (M[24] = Q(" account_id ", -1)),
          lt(l("input", {
            "onUpdate:modelValue": M[17] || (M[17] = (q) => g.account_id = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.account_id]
          ])
        ]),
        l("label", i2, [
          Q(h(f(e)("admin.ops.systemLogs.platform")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[18] || (M[18] = (q) => g.platform = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.platform]
          ])
        ]),
        l("label", a2, [
          Q(h(f(e)("admin.ops.systemLogs.model")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[19] || (M[19] = (q) => g.model = q),
            type: "text",
            class: "input mt-1"
          }, null, 512), [
            [pt, g.model]
          ])
        ]),
        l("label", o2, [
          Q(h(f(e)("admin.ops.systemLogs.keyword")) + " ", 1),
          lt(l("input", {
            "onUpdate:modelValue": M[20] || (M[20] = (q) => g.q = q),
            type: "text",
            class: "input mt-1",
            placeholder: f(e)("admin.ops.systemLogs.keywordPlaceholder")
          }, null, 8, r2), [
            [pt, g.q]
          ])
        ])
      ]),
      l("div", l2, [
        l("button", {
          type: "button",
          class: "btn btn-primary btn-sm",
          onClick: ht
        }, h(f(e)("admin.ops.systemLogs.search")), 1),
        l("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: Y
        }, h(f(e)("common.reset")), 1),
        l("button", {
          type: "button",
          class: "btn btn-danger btn-sm",
          onClick: N
        }, h(f(e)("admin.ops.systemLogs.cleanCurrentFilters")), 1),
        l("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: V
        }, h(f(e)("admin.ops.systemLogs.refreshHealth")), 1)
      ]),
      l("div", d2, [
        a.value ? (v(), $("div", c2, h(f(e)("common.loading")), 1)) : G.value ? f(n) ? (v(), $("div", _2, [
          l("table", x2, [
            l("thead", y2, [
              l("tr", null, [
                l("th", b2, h(f(e)("admin.ops.systemLogs.time")), 1),
                l("th", v2, h(f(e)("admin.ops.systemLogs.host")), 1),
                l("th", k2, h(f(e)("admin.ops.systemLogs.level")), 1),
                l("th", w2, h(f(e)("admin.ops.systemLogs.logDetails")), 1)
              ])
            ]),
            l("tbody", S2, [
              (v(!0), $(gt, null, vt(o.value, (q) => (v(), $("tr", {
                key: q.id,
                class: "align-top"
              }, [
                l("td", $2, h(F(q.created_at)), 1),
                l("td", C2, [
                  l("span", {
                    class: "block truncate",
                    title: q.host || "-"
                  }, h(q.host || "-"), 9, M2)
                ]),
                l("td", D2, [
                  l("span", {
                    class: Z(["inline-flex rounded-full px-2 py-0.5 font-semibold", B(q.level)])
                  }, h(q.level), 3)
                ]),
                l("td", R2, h(j(q)), 1)
              ]))), 128))
            ])
          ])
        ])) : (v(), $("div", h2, [
          (v(!0), $(gt, null, vt(o.value, (q) => (v(), $("div", {
            key: q.id,
            class: "space-y-1.5 p-3"
          }, [
            l("div", p2, [
              l("span", {
                class: Z(["inline-flex rounded-full px-2 py-0.5 text-xs font-semibold", B(q.level)])
              }, h(q.level), 3),
              l("span", f2, h(F(q.created_at)), 1)
            ]),
            q.host ? (v(), $("div", {
              key: 0,
              class: "truncate text-xs text-gray-500 dark:text-gray-400",
              title: q.host
            }, h(q.host), 9, g2)) : W("", !0),
            l("div", m2, h(j(q)), 1)
          ]))), 128))
        ])) : (v(), $("div", u2, h(f(e)("admin.ops.systemLogs.empty")), 1)),
        K(Di, {
          total: r.value,
          page: d.value,
          "page-size": c.value,
          "onUpdate:page": nt,
          "onUpdate:pageSize": ct
        }, null, 8, ["total", "page", "page-size"])
      ])
    ]));
  }
}), { t: wo } = Gr.global;
function P2() {
  return !!(navigator.clipboard && window.isSecureContext);
}
function So(s) {
  const t = document.createElement("textarea");
  t.value = s, t.setAttribute("readonly", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", document.body.appendChild(t), t.focus({ preventScroll: !0 }), t.select(), t.setSelectionRange(0, t.value.length);
  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(t);
  }
}
function O2() {
  const s = Fe(), t = I(!1);
  return { copied: t, copyToClipboard: async (n, i) => {
    if (!n) return !1;
    let a = !1;
    if (P2())
      try {
        await navigator.clipboard.writeText(n), a = !0;
      } catch {
        a = So(n);
      }
    else
      a = So(n);
    return a ? (t.value = !0, s.showSuccess(i || wo("common.copiedToClipboard")), setTimeout(() => {
      t.value = !1;
    }, 2e3)) : s.showError(wo("common.copyFailed")), a;
  } };
}
const A2 = { class: "flex h-full min-h-0 flex-col" }, E2 = { class: "mb-4 flex flex-shrink-0 items-center justify-between" }, L2 = { class: "text-xs text-gray-500 dark:text-gray-400" }, z2 = {
  key: 0,
  class: "flex flex-1 items-center justify-center py-16"
}, I2 = { class: "flex flex-col items-center gap-3" }, F2 = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, V2 = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col"
}, B2 = {
  key: 0,
  class: "rounded-xl border border-dashed border-gray-200 p-10 text-center dark:border-dark-700"
}, j2 = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, q2 = { class: "mt-1 text-xs text-gray-400" }, N2 = {
  key: 1,
  class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, H2 = { class: "min-h-0 flex-1 overflow-auto" }, W2 = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, U2 = { class: "flex flex-wrap items-center gap-2" }, Y2 = { class: "text-xs font-medium text-gray-700 dark:text-gray-200" }, G2 = { class: "ml-auto text-[11px] text-gray-500 dark:text-gray-400" }, X2 = { class: "break-all text-xs text-gray-600 dark:text-gray-300" }, K2 = { class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-300" }, Q2 = {
  key: 0,
  class: "flex items-center gap-2"
}, J2 = ["title"], Z2 = ["onClick"], tw = ["onClick"], ew = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, sw = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, nw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, iw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, aw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ow = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, rw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, lw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, dw = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, cw = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, uw = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, hw = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, pw = { class: "whitespace-nowrap px-4 py-3" }, fw = { class: "whitespace-nowrap px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-200" }, gw = ["title"], mw = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, _w = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-600 dark:text-gray-300" }, xw = { class: "px-4 py-3" }, yw = {
  key: 0,
  class: "flex items-center gap-2"
}, bw = ["title"], vw = ["onClick"], kw = {
  key: 1,
  class: "text-xs text-gray-400"
}, ww = { class: "whitespace-nowrap px-4 py-3 text-right" }, Sw = ["onClick"], $w = {
  key: 1,
  class: "text-xs text-gray-400"
}, Cw = /* @__PURE__ */ Mt({
  __name: "OpsRequestDetailsModal",
  props: {
    modelValue: { type: Boolean },
    timeRange: {},
    preset: {},
    platform: {},
    groupId: {}
  },
  emits: ["update:modelValue", "openErrorDetail"],
  setup(s, { emit: t }) {
    const e = s, n = t, { t: i } = Et(), a = Fe(), { copyToClipboard: o } = O2(), r = en("(min-width: 768px)"), d = I(!1), c = I([]), u = I(0), p = I(1), m = I(10), _ = () => n("update:modelValue", !1), g = P(() => {
      const j = xi(e.timeRange);
      return j >= 60 ? i("admin.ops.requestDetails.rangeHours", { n: Math.round(j / 60) }) : i("admin.ops.requestDetails.rangeMinutes", { n: j });
    });
    function x() {
      const j = xi(e.timeRange), D = /* @__PURE__ */ new Date();
      return {
        start_time: new Date(D.getTime() - j * 60 * 1e3).toISOString(),
        end_time: D.toISOString()
      };
    }
    const b = async () => {
      if (e.modelValue) {
        d.value = !0;
        try {
          const j = {
            ...x(),
            page: p.value,
            page_size: m.value,
            kind: e.preset.kind ?? "all",
            sort: e.preset.sort ?? "created_at_desc"
          }, D = (e.platform || "").trim();
          D && (j.platform = D), typeof e.groupId == "number" && e.groupId > 0 && (j.group_id = e.groupId), typeof e.preset.min_duration_ms == "number" && (j.min_duration_ms = e.preset.min_duration_ms), typeof e.preset.max_duration_ms == "number" && (j.max_duration_ms = e.preset.max_duration_ms);
          const S = await ot.listRequestDetails(j);
          c.value = S.items || [], u.value = S.total || 0;
        } catch (j) {
          console.error("[OpsRequestDetailsModal] Failed to fetch request details", j), a.showError((j == null ? void 0 : j.message) || i("admin.ops.requestDetails.failedToLoad")), c.value = [], u.value = 0;
        } finally {
          d.value = !1;
        }
      }
    };
    _t(
      () => e.modelValue,
      (j) => {
        j && (p.value = 1, m.value = 10, b());
      }
    ), _t(
      () => [
        e.timeRange,
        e.platform,
        e.groupId,
        e.preset.kind,
        e.preset.sort,
        e.preset.min_duration_ms,
        e.preset.max_duration_ms
      ],
      () => {
        e.modelValue && (p.value = 1, b());
      }
    );
    function y(j) {
      p.value = j, b();
    }
    function T(j) {
      m.value = j, p.value = 1, b();
    }
    async function B(j) {
      await o(j, i("admin.ops.requestDetails.requestIdCopied")) || a.showWarning(i("admin.ops.requestDetails.copyFailed"));
    }
    function F(j) {
      j && (_(), n("openErrorDetail", j));
    }
    const O = (j) => j === "error" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-300";
    return (j, D) => (v(), ft(Re, {
      show: s.modelValue,
      title: e.preset.title || f(i)("admin.ops.requestDetails.title"),
      width: "full",
      onClose: _
    }, {
      default: wt(() => [
        l("div", A2, [
          l("div", E2, [
            l("div", L2, h(f(i)("admin.ops.requestDetails.rangeLabel", { range: g.value })), 1),
            l("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: b
            }, h(f(i)("common.refresh")), 1)
          ]),
          d.value ? (v(), $("div", z2, [
            l("div", I2, [
              D[0] || (D[0] = l("svg", {
                class: "h-8 w-8 animate-spin text-blue-500",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                l("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }),
                l("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1)),
              l("span", F2, h(f(i)("common.loading")), 1)
            ])
          ])) : (v(), $("div", V2, [
            c.value.length === 0 ? (v(), $("div", B2, [
              l("div", j2, h(f(i)("admin.ops.requestDetails.empty")), 1),
              l("div", q2, h(f(i)("admin.ops.requestDetails.emptyHint")), 1)
            ])) : (v(), $("div", N2, [
              l("div", H2, [
                f(r) ? (v(), $("table", ew, [
                  l("thead", sw, [
                    l("tr", null, [
                      l("th", nw, h(f(i)("admin.ops.requestDetails.table.time")), 1),
                      l("th", iw, h(f(i)("admin.ops.requestDetails.table.kind")), 1),
                      l("th", aw, h(f(i)("admin.ops.requestDetails.table.platform")), 1),
                      l("th", ow, h(f(i)("admin.ops.requestDetails.table.model")), 1),
                      l("th", rw, h(f(i)("admin.ops.requestDetails.table.duration")), 1),
                      l("th", lw, h(f(i)("admin.ops.requestDetails.table.status")), 1),
                      l("th", dw, h(f(i)("admin.ops.requestDetails.table.requestId")), 1),
                      l("th", cw, h(f(i)("admin.ops.requestDetails.table.actions")), 1)
                    ])
                  ]),
                  l("tbody", uw, [
                    (v(!0), $(gt, null, vt(c.value, (S, w) => (v(), $("tr", {
                      key: w,
                      class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                    }, [
                      l("td", hw, h(f(_e)(S.created_at)), 1),
                      l("td", pw, [
                        l("span", {
                          class: Z(["rounded-full px-2 py-1 text-[10px] font-bold", O(S.kind)])
                        }, h(S.kind === "error" ? f(i)("admin.ops.requestDetails.kind.error") : f(i)("admin.ops.requestDetails.kind.success")), 3)
                      ]),
                      l("td", fw, h((S.platform || "unknown").toUpperCase()), 1),
                      l("td", {
                        class: "max-w-[240px] truncate px-4 py-3 text-xs text-gray-600 dark:text-gray-300",
                        title: S.model || ""
                      }, h(S.model || "-"), 9, gw),
                      l("td", mw, h(typeof S.duration_ms == "number" ? `${S.duration_ms} ms` : "-"), 1),
                      l("td", _w, h(S.status_code ?? "-"), 1),
                      l("td", xw, [
                        S.request_id ? (v(), $("div", yw, [
                          l("span", {
                            class: "max-w-[220px] truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                            title: S.request_id
                          }, h(S.request_id), 9, bw),
                          l("button", {
                            class: "rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                            onClick: (V) => B(S.request_id)
                          }, h(f(i)("admin.ops.requestDetails.copy")), 9, vw)
                        ])) : (v(), $("span", kw, "-"))
                      ]),
                      l("td", ww, [
                        S.kind === "error" && S.error_id ? (v(), $("button", {
                          key: 0,
                          class: "rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                          onClick: (V) => F(S.error_id)
                        }, h(f(i)("admin.ops.requestDetails.viewError")), 9, Sw)) : (v(), $("span", $w, "-"))
                      ])
                    ]))), 128))
                  ])
                ])) : (v(), $("div", W2, [
                  (v(!0), $(gt, null, vt(c.value, (S, w) => (v(), $("div", {
                    key: w,
                    class: "space-y-2 p-4"
                  }, [
                    l("div", U2, [
                      l("span", {
                        class: Z(["rounded-full px-2 py-1 text-[10px] font-bold", O(S.kind)])
                      }, h(S.kind === "error" ? f(i)("admin.ops.requestDetails.kind.error") : f(i)("admin.ops.requestDetails.kind.success")), 3),
                      l("span", Y2, h((S.platform || "unknown").toUpperCase()), 1),
                      l("span", G2, h(f(_e)(S.created_at)), 1)
                    ]),
                    l("div", X2, h(S.model || "-"), 1),
                    l("div", K2, [
                      l("span", null, h(typeof S.duration_ms == "number" ? `${S.duration_ms} ms` : "-"), 1),
                      l("span", null, h(S.status_code ?? "-"), 1)
                    ]),
                    S.request_id ? (v(), $("div", Q2, [
                      l("span", {
                        class: "min-w-0 flex-1 truncate font-mono text-[11px] text-gray-700 dark:text-gray-200",
                        title: S.request_id
                      }, h(S.request_id), 9, J2),
                      l("button", {
                        class: "shrink-0 rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
                        onClick: (V) => B(S.request_id)
                      }, h(f(i)("admin.ops.requestDetails.copy")), 9, Z2)
                    ])) : W("", !0),
                    S.kind === "error" && S.error_id ? (v(), $("button", {
                      key: 1,
                      class: "w-full rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
                      onClick: (V) => F(S.error_id)
                    }, h(f(i)("admin.ops.requestDetails.viewError")), 9, tw)) : W("", !0)
                  ]))), 128))
                ]))
              ]),
              K(Di, {
                total: u.value,
                page: p.value,
                "page-size": m.value,
                "onUpdate:page": y,
                "onUpdate:pageSize": T
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Mw = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500"
}, Dw = {
  key: 1,
  class: "space-y-6"
}, Rw = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-3 text-xs text-zo-alert-800 dark:border-zo-alert-900/50 dark:bg-zo-alert-900/20 dark:text-zo-alert-200"
}, Tw = { class: "font-bold" }, Pw = { class: "mt-1 list-disc space-y-1 pl-4" }, Ow = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Aw = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Ew = { class: "input-label" }, Lw = { class: "mt-1 text-xs text-gray-500" }, zw = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Iw = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Fw = { class: "space-y-4" }, Vw = { class: "flex items-center justify-between" }, Bw = { class: "font-medium text-gray-900 dark:text-white" }, jw = { key: 0 }, qw = { class: "input-label" }, Nw = { class: "flex gap-2" }, Hw = ["placeholder"], Ww = { class: "mt-2 flex flex-wrap gap-2" }, Uw = ["onClick"], Yw = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Gw = { key: 1 }, Xw = { class: "input-label" }, Kw = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, Qw = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Jw = { class: "space-y-4" }, Zw = { class: "flex items-center justify-between" }, t5 = { class: "font-medium text-gray-900 dark:text-white" }, e5 = { key: 0 }, s5 = { class: "input-label" }, n5 = { class: "flex gap-2" }, i5 = ["placeholder"], a5 = { class: "mt-2 flex flex-wrap gap-2" }, o5 = ["onClick"], r5 = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, l5 = {
  key: 1,
  class: "grid grid-cols-1 gap-4 md:grid-cols-2"
}, d5 = { class: "flex items-center justify-between" }, c5 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, u5 = { key: 0 }, h5 = { class: "flex items-center justify-between" }, p5 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, f5 = { key: 1 }, g5 = { class: "rounded-2xl bg-gray-50 p-4 dark:bg-dark-700/50" }, m5 = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, _5 = { class: "mb-4 text-xs text-gray-500 dark:text-gray-400" }, x5 = { class: "space-y-4" }, y5 = { class: "input-label" }, b5 = { class: "mt-1 text-xs text-gray-500" }, v5 = { class: "input-label" }, k5 = { class: "mt-1 text-xs text-gray-500" }, w5 = { class: "input-label" }, S5 = { class: "mt-1 text-xs text-gray-500" }, $5 = { class: "input-label" }, C5 = { class: "mt-1 text-xs text-gray-500" }, M5 = { class: "rounded-2xl bg-gray-50 dark:bg-dark-700/50" }, D5 = { class: "cursor-pointer p-4 text-sm font-semibold text-gray-900 dark:text-white" }, R5 = { class: "space-y-4 px-4 pb-4" }, T5 = { class: "space-y-3" }, P5 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, O5 = { class: "flex items-center justify-between" }, A5 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, E5 = { key: 0 }, L5 = { class: "input-label" }, z5 = { class: "mt-1 text-xs text-gray-500" }, I5 = { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, F5 = { class: "input-label" }, V5 = { class: "input-label" }, B5 = { class: "input-label" }, j5 = { class: "text-xs text-gray-500" }, q5 = { class: "space-y-3" }, N5 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, H5 = { class: "flex items-center justify-between" }, W5 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, U5 = { class: "mt-1 text-xs text-gray-500" }, Y5 = { class: "space-y-3" }, G5 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, X5 = { class: "text-xs text-gray-500" }, K5 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Q5 = { class: "input-label" }, J5 = { class: "input-label" }, Z5 = { class: "text-xs text-gray-500" }, t4 = { class: "space-y-3" }, e4 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, s4 = { class: "flex items-center justify-between" }, n4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, i4 = { class: "mt-1 text-xs text-gray-500" }, a4 = { class: "flex items-center justify-between" }, o4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, r4 = { class: "mt-1 text-xs text-gray-500" }, l4 = { class: "flex items-center justify-between" }, d4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, c4 = { class: "mt-1 text-xs text-gray-500" }, u4 = { class: "flex items-center justify-between" }, h4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, p4 = { class: "mt-1 text-xs text-gray-500" }, f4 = { class: "space-y-3" }, g4 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, m4 = { class: "flex items-center justify-between" }, _4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, x4 = { class: "mt-1 text-xs text-gray-500" }, y4 = { key: 0 }, b4 = { class: "input-label" }, v4 = { class: "space-y-3" }, k4 = { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, w4 = { class: "flex items-center justify-between" }, S4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, $4 = { class: "mt-1 text-xs text-gray-500" }, C4 = { class: "flex items-center justify-between" }, M4 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, D4 = { class: "mt-1 text-xs text-gray-500" }, R4 = { class: "flex justify-end gap-2" }, T4 = ["disabled"], P4 = /* @__PURE__ */ Mt({
  __name: "OpsSettingsDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "saved"],
  setup(s, { emit: t }) {
    const { t: e } = Et(), n = Fe(), i = s, a = t, o = I(!1), r = I(!1), d = I(null), c = I(null), u = I(null), p = I({
      sla_percent_min: 99.5,
      ttft_p99_ms_max: 500,
      request_error_rate_percent_max: 5,
      upstream_error_rate_percent_max: 5
    });
    async function m() {
      var D, S;
      o.value = !0;
      try {
        const [w, V, L, A] = await Promise.all([
          ot.getAlertRuntimeSettings(),
          ot.getEmailNotificationConfig(),
          ot.getAdvancedSettings(),
          ot.getMetricThresholds()
        ]);
        d.value = w, c.value = V, u.value = L, u.value && !u.value.openai_account_quota_auto_pause && (u.value.openai_account_quota_auto_pause = { default_threshold_5h: 0, default_threshold_7d: 0 }), A && Object.keys(A).length > 0 && (p.value = {
          sla_percent_min: A.sla_percent_min ?? 99.5,
          ttft_p99_ms_max: A.ttft_p99_ms_max ?? 500,
          request_error_rate_percent_max: A.request_error_rate_percent_max ?? 5,
          upstream_error_rate_percent_max: A.upstream_error_rate_percent_max ?? 5
        });
      } catch (w) {
        console.error("[OpsSettingsDialog] Failed to load settings", w), n.showError(((S = (D = w == null ? void 0 : w.response) == null ? void 0 : D.data) == null ? void 0 : S.detail) || e("admin.ops.settings.loadFailed"));
      } finally {
        o.value = !1;
      }
    }
    _t(() => i.show, (D) => {
      D && m();
    });
    const _ = I(""), g = I(""), x = [
      { value: "", label: e("admin.ops.email.minSeverityAll") },
      { value: "critical", label: e("common.critical") },
      { value: "warning", label: e("common.warning") },
      { value: "info", label: e("common.info") }
    ];
    function b(D) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D);
    }
    function y(D) {
      if (!c.value) return;
      const S = (D === "alert" ? _.value : g.value).trim();
      if (!S) return;
      if (!b(S)) {
        n.showError(e("common.invalidEmail"));
        return;
      }
      const w = S.toLowerCase(), V = D === "alert" ? c.value.alert.recipients : c.value.report.recipients;
      V.includes(w) || V.push(w), D === "alert" ? _.value = "" : g.value = "";
    }
    function T(D, S) {
      if (!c.value) return;
      const w = D === "alert" ? c.value.alert.recipients : c.value.report.recipients, V = w.indexOf(S);
      V >= 0 && w.splice(V, 1);
    }
    const B = P({
      get() {
        var S, w;
        const D = (w = (S = u.value) == null ? void 0 : S.openai_account_quota_auto_pause) == null ? void 0 : w.default_threshold_5h;
        return D && D > 0 ? Math.round(D * 1e3) / 10 : null;
      },
      set(D) {
        var S;
        (S = u.value) != null && S.openai_account_quota_auto_pause && (u.value.openai_account_quota_auto_pause.default_threshold_5h = D != null && D > 0 ? D / 100 : 0);
      }
    }), F = P({
      get() {
        var S, w;
        const D = (w = (S = u.value) == null ? void 0 : S.openai_account_quota_auto_pause) == null ? void 0 : w.default_threshold_7d;
        return D && D > 0 ? Math.round(D * 1e3) / 10 : null;
      },
      set(D) {
        var S;
        (S = u.value) != null && S.openai_account_quota_auto_pause && (u.value.openai_account_quota_auto_pause.default_threshold_7d = D != null && D > 0 ? D / 100 : 0);
      }
    }), O = P(() => {
      const D = [];
      if (d.value) {
        const S = d.value.evaluation_interval_seconds;
        (!Number.isFinite(S) || S < 1 || S > 86400) && D.push(e("admin.ops.runtime.validation.evalIntervalRange"));
      }
      if (u.value) {
        const { error_log_retention_days: S, minute_metrics_retention_days: w, hourly_metrics_retention_days: V } = u.value.data_retention;
        (S < 0 || S > 365) && D.push(e("admin.ops.settings.validation.retentionDaysRange")), (w < 0 || w > 365) && D.push(e("admin.ops.settings.validation.retentionDaysRange")), (V < 0 || V > 365) && D.push(e("admin.ops.settings.validation.retentionDaysRange"));
        const { default_threshold_5h: L, default_threshold_7d: A } = u.value.openai_account_quota_auto_pause;
        (L < 0 || L > 1 || A < 0 || A > 1) && D.push(e("admin.ops.settings.validation.openaiQuotaAutoPauseRange"));
      }
      return p.value.sla_percent_min != null && (p.value.sla_percent_min < 0 || p.value.sla_percent_min > 100) && D.push(e("admin.ops.settings.validation.slaMinPercentRange")), p.value.ttft_p99_ms_max != null && p.value.ttft_p99_ms_max < 0 && D.push(e("admin.ops.settings.validation.ttftP99MaxRange")), p.value.request_error_rate_percent_max != null && (p.value.request_error_rate_percent_max < 0 || p.value.request_error_rate_percent_max > 100) && D.push(e("admin.ops.settings.validation.requestErrorRateMaxRange")), p.value.upstream_error_rate_percent_max != null && (p.value.upstream_error_rate_percent_max < 0 || p.value.upstream_error_rate_percent_max > 100) && D.push(e("admin.ops.settings.validation.upstreamErrorRateMaxRange")), { valid: D.length === 0, errors: D };
    });
    async function j() {
      var D, S, w, V;
      if (!O.value.valid) {
        n.showError(O.value.errors[0]);
        return;
      }
      r.value = !0;
      try {
        c.value && (c.value.alert.enabled && c.value.alert.recipients.length === 0 && (c.value.alert.enabled = !1), c.value.report.enabled && c.value.report.recipients.length === 0 && (c.value.report.enabled = !1)), await Promise.all([
          d.value ? ot.updateAlertRuntimeSettings(d.value) : Promise.resolve(),
          c.value ? ot.updateEmailNotificationConfig(c.value) : Promise.resolve(),
          u.value ? ot.updateAdvancedSettings(u.value) : Promise.resolve(),
          ot.updateMetricThresholds(p.value)
        ]), n.showSuccess(e("admin.ops.settings.saveSuccess")), a("saved"), a("close");
      } catch (L) {
        console.error("[OpsSettingsDialog] Failed to save settings", L), n.showError(((S = (D = L == null ? void 0 : L.response) == null ? void 0 : D.data) == null ? void 0 : S.message) || ((V = (w = L == null ? void 0 : L.response) == null ? void 0 : w.data) == null ? void 0 : V.detail) || e("admin.ops.settings.saveFailed"));
      } finally {
        r.value = !1;
      }
    }
    return (D, S) => (v(), ft(Re, {
      show: s.show,
      title: f(e)("admin.ops.settings.title"),
      width: "extra-wide",
      onClose: S[35] || (S[35] = (w) => a("close"))
    }, {
      footer: wt(() => [
        l("div", R4, [
          l("button", {
            class: "btn btn-secondary",
            onClick: S[34] || (S[34] = (w) => a("close"))
          }, h(f(e)("common.cancel")), 1),
          l("button", {
            class: "btn btn-primary",
            disabled: r.value || !O.value.valid,
            onClick: j
          }, h(r.value ? f(e)("common.saving") : f(e)("common.save")), 9, T4)
        ])
      ]),
      default: wt(() => [
        o.value ? (v(), $("div", Mw, h(f(e)("common.loading")), 1)) : d.value && c.value && u.value ? (v(), $("div", Dw, [
          O.value.valid ? W("", !0) : (v(), $("div", Rw, [
            l("div", Tw, h(f(e)("admin.ops.settings.validation.title")), 1),
            l("ul", Pw, [
              (v(!0), $(gt, null, vt(O.value.errors, (w) => (v(), $("li", { key: w }, h(w), 1))), 128))
            ])
          ])),
          l("div", Ow, [
            l("h4", Aw, h(f(e)("admin.ops.settings.dataCollection")), 1),
            l("div", null, [
              l("label", Ew, h(f(e)("admin.ops.settings.evaluationInterval")), 1),
              lt(l("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (w) => d.value.evaluation_interval_seconds = w),
                type: "number",
                min: "1",
                max: "86400",
                class: "input"
              }, null, 512), [
                [
                  pt,
                  d.value.evaluation_interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              l("p", Lw, h(f(e)("admin.ops.settings.evaluationIntervalHint")), 1)
            ])
          ]),
          l("div", zw, [
            l("h4", Iw, h(f(e)("admin.ops.settings.alertConfig")), 1),
            l("div", Fw, [
              l("div", Vw, [
                l("div", null, [
                  l("label", Bw, h(f(e)("admin.ops.settings.enableAlert")), 1)
                ]),
                K(Kt, {
                  modelValue: c.value.alert.enabled,
                  "onUpdate:modelValue": S[1] || (S[1] = (w) => c.value.alert.enabled = w)
                }, null, 8, ["modelValue"])
              ]),
              c.value.alert.enabled ? (v(), $("div", jw, [
                l("label", qw, h(f(e)("admin.ops.settings.alertRecipients")), 1),
                l("div", Nw, [
                  lt(l("input", {
                    "onUpdate:modelValue": S[2] || (S[2] = (w) => _.value = w),
                    type: "email",
                    class: "input",
                    placeholder: f(e)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: S[3] || (S[3] = Qi(js((w) => y("alert"), ["prevent"]), ["enter"]))
                  }, null, 40, Hw), [
                    [pt, _.value]
                  ]),
                  l("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: S[4] || (S[4] = (w) => y("alert"))
                  }, h(f(e)("common.add")), 1)
                ]),
                l("div", Ww, [
                  (v(!0), $(gt, null, vt(c.value.alert.recipients, (w) => (v(), $("span", {
                    key: w,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    Q(h(w) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (V) => T("alert", w)
                    }, "×", 8, Uw)
                  ]))), 128))
                ]),
                l("p", Yw, h(f(e)("admin.ops.settings.recipientsHint")), 1)
              ])) : W("", !0),
              c.value.alert.enabled ? (v(), $("div", Gw, [
                l("label", Xw, h(f(e)("admin.ops.settings.minSeverity")), 1),
                K(kt, {
                  modelValue: c.value.alert.min_severity,
                  "onUpdate:modelValue": S[5] || (S[5] = (w) => c.value.alert.min_severity = w),
                  options: x
                }, null, 8, ["modelValue"])
              ])) : W("", !0)
            ])
          ]),
          l("div", Kw, [
            l("h4", Qw, h(f(e)("admin.ops.settings.reportConfig")), 1),
            l("div", Jw, [
              l("div", Zw, [
                l("div", null, [
                  l("label", t5, h(f(e)("admin.ops.settings.enableReport")), 1)
                ]),
                K(Kt, {
                  modelValue: c.value.report.enabled,
                  "onUpdate:modelValue": S[6] || (S[6] = (w) => c.value.report.enabled = w)
                }, null, 8, ["modelValue"])
              ]),
              c.value.report.enabled ? (v(), $("div", e5, [
                l("label", s5, h(f(e)("admin.ops.settings.reportRecipients")), 1),
                l("div", n5, [
                  lt(l("input", {
                    "onUpdate:modelValue": S[7] || (S[7] = (w) => g.value = w),
                    type: "email",
                    class: "input",
                    placeholder: f(e)("admin.ops.settings.emailPlaceholder"),
                    onKeydown: S[8] || (S[8] = Qi(js((w) => y("report"), ["prevent"]), ["enter"]))
                  }, null, 40, i5), [
                    [pt, g.value]
                  ]),
                  l("button", {
                    class: "btn btn-secondary whitespace-nowrap",
                    type: "button",
                    onClick: S[9] || (S[9] = (w) => y("report"))
                  }, h(f(e)("common.add")), 1)
                ]),
                l("div", a5, [
                  (v(!0), $(gt, null, vt(c.value.report.recipients, (w) => (v(), $("span", {
                    key: w,
                    class: "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-dark-300"
                  }, [
                    Q(h(w) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white",
                      onClick: (V) => T("report", w)
                    }, "×", 8, o5)
                  ]))), 128))
                ]),
                l("p", r5, h(f(e)("admin.ops.settings.recipientsHint")), 1)
              ])) : W("", !0),
              c.value.report.enabled ? (v(), $("div", l5, [
                l("div", d5, [
                  l("label", c5, h(f(e)("admin.ops.settings.dailySummary")), 1),
                  K(Kt, {
                    modelValue: c.value.report.daily_summary_enabled,
                    "onUpdate:modelValue": S[10] || (S[10] = (w) => c.value.report.daily_summary_enabled = w)
                  }, null, 8, ["modelValue"])
                ]),
                c.value.report.daily_summary_enabled ? (v(), $("div", u5, [
                  lt(l("input", {
                    "onUpdate:modelValue": S[11] || (S[11] = (w) => c.value.report.daily_summary_schedule = w),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * *"
                  }, null, 512), [
                    [pt, c.value.report.daily_summary_schedule]
                  ])
                ])) : W("", !0),
                l("div", h5, [
                  l("label", p5, h(f(e)("admin.ops.settings.weeklySummary")), 1),
                  K(Kt, {
                    modelValue: c.value.report.weekly_summary_enabled,
                    "onUpdate:modelValue": S[12] || (S[12] = (w) => c.value.report.weekly_summary_enabled = w)
                  }, null, 8, ["modelValue"])
                ]),
                c.value.report.weekly_summary_enabled ? (v(), $("div", f5, [
                  lt(l("input", {
                    "onUpdate:modelValue": S[13] || (S[13] = (w) => c.value.report.weekly_summary_schedule = w),
                    type: "text",
                    class: "input",
                    placeholder: "0 9 * * 1"
                  }, null, 512), [
                    [pt, c.value.report.weekly_summary_schedule]
                  ])
                ])) : W("", !0)
              ])) : W("", !0)
            ])
          ]),
          l("div", g5, [
            l("h4", m5, h(f(e)("admin.ops.settings.metricThresholds")), 1),
            l("p", _5, h(f(e)("admin.ops.settings.metricThresholdsHint")), 1),
            l("div", x5, [
              l("div", null, [
                l("label", y5, h(f(e)("admin.ops.settings.slaMinPercent")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": S[14] || (S[14] = (w) => p.value.sla_percent_min = w),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    pt,
                    p.value.sla_percent_min,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l("p", b5, h(f(e)("admin.ops.settings.slaMinPercentHint")), 1)
              ]),
              l("div", null, [
                l("label", v5, h(f(e)("admin.ops.settings.ttftP99MaxMs")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": S[15] || (S[15] = (w) => p.value.ttft_p99_ms_max = w),
                  type: "number",
                  min: "0",
                  step: "50",
                  class: "input"
                }, null, 512), [
                  [
                    pt,
                    p.value.ttft_p99_ms_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l("p", k5, h(f(e)("admin.ops.settings.ttftP99MaxMsHint")), 1)
              ]),
              l("div", null, [
                l("label", w5, h(f(e)("admin.ops.settings.requestErrorRateMaxPercent")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": S[16] || (S[16] = (w) => p.value.request_error_rate_percent_max = w),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    pt,
                    p.value.request_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l("p", S5, h(f(e)("admin.ops.settings.requestErrorRateMaxPercentHint")), 1)
              ]),
              l("div", null, [
                l("label", $5, h(f(e)("admin.ops.settings.upstreamErrorRateMaxPercent")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": S[17] || (S[17] = (w) => p.value.upstream_error_rate_percent_max = w),
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1",
                  class: "input"
                }, null, 512), [
                  [
                    pt,
                    p.value.upstream_error_rate_percent_max,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l("p", C5, h(f(e)("admin.ops.settings.upstreamErrorRateMaxPercentHint")), 1)
              ])
            ])
          ]),
          l("details", M5, [
            l("summary", D5, h(f(e)("admin.ops.settings.advancedSettings")), 1),
            l("div", R5, [
              l("div", T5, [
                l("h5", P5, h(f(e)("admin.ops.settings.dataRetention")), 1),
                l("div", O5, [
                  l("label", A5, h(f(e)("admin.ops.settings.enableCleanup")), 1),
                  K(Kt, {
                    modelValue: u.value.data_retention.cleanup_enabled,
                    "onUpdate:modelValue": S[18] || (S[18] = (w) => u.value.data_retention.cleanup_enabled = w)
                  }, null, 8, ["modelValue"])
                ]),
                u.value.data_retention.cleanup_enabled ? (v(), $("div", E5, [
                  l("label", L5, h(f(e)("admin.ops.settings.cleanupSchedule")), 1),
                  lt(l("input", {
                    "onUpdate:modelValue": S[19] || (S[19] = (w) => u.value.data_retention.cleanup_schedule = w),
                    type: "text",
                    class: "input",
                    placeholder: "0 2 * * *"
                  }, null, 512), [
                    [pt, u.value.data_retention.cleanup_schedule]
                  ]),
                  l("p", z5, h(f(e)("admin.ops.settings.cleanupScheduleHint")), 1)
                ])) : W("", !0),
                l("div", I5, [
                  l("div", null, [
                    l("label", F5, h(f(e)("admin.ops.settings.errorLogRetentionDays")), 1),
                    lt(l("input", {
                      "onUpdate:modelValue": S[20] || (S[20] = (w) => u.value.data_retention.error_log_retention_days = w),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        pt,
                        u.value.data_retention.error_log_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  l("div", null, [
                    l("label", V5, h(f(e)("admin.ops.settings.minuteMetricsRetentionDays")), 1),
                    lt(l("input", {
                      "onUpdate:modelValue": S[21] || (S[21] = (w) => u.value.data_retention.minute_metrics_retention_days = w),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        pt,
                        u.value.data_retention.minute_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  l("div", null, [
                    l("label", B5, h(f(e)("admin.ops.settings.hourlyMetricsRetentionDays")), 1),
                    lt(l("input", {
                      "onUpdate:modelValue": S[22] || (S[22] = (w) => u.value.data_retention.hourly_metrics_retention_days = w),
                      type: "number",
                      min: "0",
                      max: "365",
                      class: "input"
                    }, null, 512), [
                      [
                        pt,
                        u.value.data_retention.hourly_metrics_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                l("p", j5, h(f(e)("admin.ops.settings.retentionDaysHint")), 1)
              ]),
              l("div", q5, [
                l("h5", N5, h(f(e)("admin.ops.settings.aggregation")), 1),
                l("div", H5, [
                  l("div", null, [
                    l("label", W5, h(f(e)("admin.ops.settings.enableAggregation")), 1),
                    l("p", U5, h(f(e)("admin.ops.settings.aggregationHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.aggregation.aggregation_enabled,
                    "onUpdate:modelValue": S[23] || (S[23] = (w) => u.value.aggregation.aggregation_enabled = w)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              l("div", Y5, [
                l("h5", G5, h(f(e)("admin.ops.settings.openaiQuotaAutoPause")), 1),
                l("p", X5, h(f(e)("admin.ops.settings.openaiQuotaAutoPauseHint")), 1),
                l("div", K5, [
                  l("div", null, [
                    l("label", Q5, h(f(e)("admin.ops.settings.openaiQuotaAutoPauseDefault5h")), 1),
                    lt(l("input", {
                      "onUpdate:modelValue": S[24] || (S[24] = (w) => B.value = w),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-5h"
                    }, null, 512), [
                      [
                        pt,
                        B.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  l("div", null, [
                    l("label", J5, h(f(e)("admin.ops.settings.openaiQuotaAutoPauseDefault7d")), 1),
                    lt(l("input", {
                      "onUpdate:modelValue": S[25] || (S[25] = (w) => F.value = w),
                      type: "number",
                      min: "0",
                      max: "100",
                      step: "0.1",
                      class: "input",
                      "data-testid": "ops-quota-auto-pause-7d"
                    }, null, 512), [
                      [
                        pt,
                        F.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                l("p", Z5, h(f(e)("admin.ops.settings.openaiQuotaAutoPauseThresholdHint")), 1)
              ]),
              l("div", t4, [
                l("h5", e4, h(f(e)("admin.ops.settings.errorFiltering")), 1),
                l("div", s4, [
                  l("div", null, [
                    l("label", n4, h(f(e)("admin.ops.settings.ignoreCountTokensErrors")), 1),
                    l("p", i4, h(f(e)("admin.ops.settings.ignoreCountTokensErrorsHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.ignore_count_tokens_errors,
                    "onUpdate:modelValue": S[26] || (S[26] = (w) => u.value.ignore_count_tokens_errors = w)
                  }, null, 8, ["modelValue"])
                ]),
                l("div", a4, [
                  l("div", null, [
                    l("label", o4, h(f(e)("admin.ops.settings.ignoreContextCanceled")), 1),
                    l("p", r4, h(f(e)("admin.ops.settings.ignoreContextCanceledHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.ignore_context_canceled,
                    "onUpdate:modelValue": S[27] || (S[27] = (w) => u.value.ignore_context_canceled = w)
                  }, null, 8, ["modelValue"])
                ]),
                l("div", l4, [
                  l("div", null, [
                    l("label", d4, h(f(e)("admin.ops.settings.ignoreNoAvailableAccounts")), 1),
                    l("p", c4, h(f(e)("admin.ops.settings.ignoreNoAvailableAccountsHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.ignore_no_available_accounts,
                    "onUpdate:modelValue": S[28] || (S[28] = (w) => u.value.ignore_no_available_accounts = w)
                  }, null, 8, ["modelValue"])
                ]),
                l("div", u4, [
                  l("div", null, [
                    l("label", h4, h(f(e)("admin.ops.settings.ignoreInsufficientBalanceErrors")), 1),
                    l("p", p4, h(f(e)("admin.ops.settings.ignoreInsufficientBalanceErrorsHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.ignore_insufficient_balance_errors,
                    "onUpdate:modelValue": S[29] || (S[29] = (w) => u.value.ignore_insufficient_balance_errors = w)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              l("div", f4, [
                l("h5", g4, h(f(e)("admin.ops.settings.autoRefresh")), 1),
                l("div", m4, [
                  l("div", null, [
                    l("label", _4, h(f(e)("admin.ops.settings.enableAutoRefresh")), 1),
                    l("p", x4, h(f(e)("admin.ops.settings.enableAutoRefreshHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.auto_refresh_enabled,
                    "onUpdate:modelValue": S[30] || (S[30] = (w) => u.value.auto_refresh_enabled = w)
                  }, null, 8, ["modelValue"])
                ]),
                u.value.auto_refresh_enabled ? (v(), $("div", y4, [
                  l("label", b4, h(f(e)("admin.ops.settings.refreshInterval")), 1),
                  K(kt, {
                    modelValue: u.value.auto_refresh_interval_seconds,
                    "onUpdate:modelValue": S[31] || (S[31] = (w) => u.value.auto_refresh_interval_seconds = w),
                    options: [
                      { value: 15, label: f(e)("admin.ops.settings.refreshInterval15s") },
                      { value: 30, label: f(e)("admin.ops.settings.refreshInterval30s") },
                      { value: 60, label: f(e)("admin.ops.settings.refreshInterval60s") }
                    ]
                  }, null, 8, ["modelValue", "options"])
                ])) : W("", !0)
              ]),
              l("div", v4, [
                l("h5", k4, h(f(e)("admin.ops.settings.dashboardCards")), 1),
                l("div", w4, [
                  l("div", null, [
                    l("label", S4, h(f(e)("admin.ops.settings.displayAlertEvents")), 1),
                    l("p", $4, h(f(e)("admin.ops.settings.displayAlertEventsHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.display_alert_events,
                    "onUpdate:modelValue": S[32] || (S[32] = (w) => u.value.display_alert_events = w)
                  }, null, 8, ["modelValue"])
                ]),
                l("div", C4, [
                  l("div", null, [
                    l("label", M4, h(f(e)("admin.ops.settings.displayOpenAITokenStats")), 1),
                    l("p", D4, h(f(e)("admin.ops.settings.displayOpenAITokenStatsHint")), 1)
                  ]),
                  K(Kt, {
                    modelValue: u.value.display_openai_token_stats,
                    "onUpdate:modelValue": S[33] || (S[33] = (w) => u.value.display_openai_token_stats = w)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ])
        ])) : W("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), O4 = { class: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-dark-800 dark:ring-dark-700" }, A4 = { class: "mb-4 flex flex-wrap items-start justify-between gap-3 sm:gap-4" }, E4 = { class: "text-sm font-bold text-gray-900 dark:text-white" }, L4 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, z4 = { class: "flex items-center gap-2" }, I4 = ["disabled"], F4 = ["disabled"], V4 = {
  key: 0,
  class: "py-10 text-center text-sm text-gray-500 dark:text-gray-400"
}, B4 = {
  key: 1,
  class: "rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, j4 = {
  key: 2,
  class: "max-h-[520px] overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700"
}, q4 = { class: "max-h-[520px] overflow-y-auto" }, N4 = {
  key: 0,
  class: "divide-y divide-gray-100 dark:divide-dark-800"
}, H4 = { class: "flex items-start justify-between gap-2" }, W4 = { class: "min-w-0" }, U4 = { class: "text-xs font-bold text-gray-900 dark:text-white" }, Y4 = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, G4 = { class: "shrink-0 text-xs font-bold text-gray-700 dark:text-gray-200" }, X4 = { class: "text-xs text-gray-700 dark:text-gray-200" }, K4 = { class: "font-mono" }, Q4 = { class: "mx-1 text-gray-400" }, J4 = { class: "font-mono" }, Z4 = { class: "flex items-center justify-between gap-2" }, t3 = { class: "text-xs text-gray-700 dark:text-gray-200" }, e3 = { class: "flex items-center gap-2" }, s3 = ["onClick"], n3 = ["onClick"], i3 = {
  key: 0,
  class: "text-[10px] text-gray-400"
}, a3 = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 dark:divide-dark-700"
}, o3 = { class: "sticky top-0 z-10 bg-gray-50 dark:bg-dark-900" }, r3 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, l3 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, d3 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, c3 = { class: "px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, u3 = { class: "px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, h3 = { class: "divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-800" }, p3 = { class: "px-4 py-3" }, f3 = { class: "text-xs font-bold text-gray-900 dark:text-white" }, g3 = {
  key: 0,
  class: "mt-0.5 line-clamp-2 text-[11px] text-gray-500 dark:text-gray-400"
}, m3 = {
  key: 1,
  class: "mt-1 text-[10px] text-gray-400"
}, _3 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, x3 = { class: "font-mono" }, y3 = { class: "mx-1 text-gray-400" }, b3 = { class: "font-mono" }, v3 = { class: "whitespace-nowrap px-4 py-3 text-xs font-bold text-gray-700 dark:text-gray-200" }, k3 = { class: "whitespace-nowrap px-4 py-3 text-xs text-gray-700 dark:text-gray-200" }, w3 = { class: "whitespace-nowrap px-4 py-3 text-right text-xs" }, S3 = ["onClick"], $3 = ["onClick"], C3 = { class: "space-y-4" }, M3 = {
  key: 0,
  class: "rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300"
}, D3 = { class: "font-bold" }, R3 = { class: "mt-1 list-disc pl-5" }, T3 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, P3 = { class: "md:col-span-2" }, O3 = { class: "input-label" }, A3 = { class: "md:col-span-2" }, E3 = { class: "input-label" }, L3 = { class: "input-label" }, z3 = {
  key: 0,
  class: "mt-1 space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, I3 = { class: "input-label" }, F3 = { class: "md:col-span-2" }, V3 = { class: "input-label" }, B3 = {
  key: 0,
  class: "ml-1 text-red-500"
}, j3 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, q3 = { class: "input-label" }, N3 = { class: "input-label" }, H3 = { class: "input-label" }, W3 = { class: "input-label" }, U3 = { class: "input-label" }, Y3 = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, G3 = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, X3 = { class: "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-dark-800/50 md:col-span-2" }, K3 = { class: "text-xs font-bold text-gray-700 dark:text-gray-200" }, Q3 = { class: "flex items-center justify-end gap-2" }, J3 = ["disabled"], Z3 = ["disabled"], tS = /* @__PURE__ */ Mt({
  __name: "OpsAlertRulesCard",
  setup(s) {
    const { t } = Et(), e = Fe(), n = en("(min-width: 768px)"), i = I(!1), a = I([]);
    async function o() {
      var G, R;
      i.value = !0;
      try {
        a.value = await ot.listAlertRules();
      } catch (M) {
        console.error("[OpsAlertRulesCard] Failed to load rules", M), e.showError(((R = (G = M == null ? void 0 : M.response) == null ? void 0 : G.data) == null ? void 0 : R.detail) || t("admin.ops.alertRules.loadFailed")), a.value = [];
      } finally {
        i.value = !1;
      }
    }
    Ze(() => {
      o(), x();
    });
    const r = P(() => [...a.value].sort((G, R) => (R.id || 0) - (G.id || 0))), d = I(!1), c = I(!1), u = I(null), p = I(null), m = /* @__PURE__ */ new Set([
      "group_available_accounts",
      "group_available_ratio",
      "group_rate_limit_ratio"
    ]);
    function _(G) {
      if (G == null || typeof G == "boolean") return null;
      const R = typeof G == "number" ? G : Number.parseInt(String(G), 10);
      return Number.isFinite(R) && R > 0 ? R : null;
    }
    const g = I([]);
    async function x() {
      try {
        const G = await Tn.groups.getAll();
        g.value = G.map((R) => ({ value: R.id, label: R.name }));
      } catch (G) {
        console.error("[OpsAlertRulesCard] Failed to load groups", G), g.value = [];
      }
    }
    const b = P(() => {
      var R;
      const G = (R = p.value) == null ? void 0 : R.metric_type;
      return G ? m.has(G) : !1;
    }), y = P({
      get() {
        var G, R;
        return _((R = (G = p.value) == null ? void 0 : G.filters) == null ? void 0 : R.group_id);
      },
      set(G) {
        if (p.value) {
          if (G == null) {
            if (!p.value.filters) return;
            delete p.value.filters.group_id, Object.keys(p.value.filters).length === 0 && delete p.value.filters;
            return;
          }
          p.value.filters || (p.value.filters = {}), p.value.filters.group_id = G;
        }
      }
    }), T = P(() => b.value ? g.value : [{ value: null, label: t("admin.ops.alertRules.form.allGroups") }, ...g.value]), B = P(() => [
      // System-level metrics
      {
        type: "success_rate",
        group: "system",
        label: t("admin.ops.alertRules.metrics.successRate"),
        description: t("admin.ops.alertRules.metricDescriptions.successRate"),
        recommendedOperator: "<",
        recommendedThreshold: 99,
        unit: "%"
      },
      {
        type: "error_rate",
        group: "system",
        label: t("admin.ops.alertRules.metrics.errorRate"),
        description: t("admin.ops.alertRules.metricDescriptions.errorRate"),
        recommendedOperator: ">",
        recommendedThreshold: 1,
        unit: "%"
      },
      {
        type: "upstream_error_rate",
        group: "system",
        label: t("admin.ops.alertRules.metrics.upstreamErrorRate"),
        description: t("admin.ops.alertRules.metricDescriptions.upstreamErrorRate"),
        recommendedOperator: ">",
        recommendedThreshold: 1,
        unit: "%"
      },
      {
        type: "cpu_usage_percent",
        group: "system",
        label: t("admin.ops.alertRules.metrics.cpu"),
        description: t("admin.ops.alertRules.metricDescriptions.cpu"),
        recommendedOperator: ">",
        recommendedThreshold: 80,
        unit: "%"
      },
      {
        type: "memory_usage_percent",
        group: "system",
        label: t("admin.ops.alertRules.metrics.memory"),
        description: t("admin.ops.alertRules.metricDescriptions.memory"),
        recommendedOperator: ">",
        recommendedThreshold: 80,
        unit: "%"
      },
      {
        type: "concurrency_queue_depth",
        group: "system",
        label: t("admin.ops.alertRules.metrics.queueDepth"),
        description: t("admin.ops.alertRules.metricDescriptions.queueDepth"),
        recommendedOperator: ">",
        recommendedThreshold: 10
      },
      // Group-level metrics (requires group_id filter)
      {
        type: "group_available_accounts",
        group: "group",
        label: t("admin.ops.alertRules.metrics.groupAvailableAccounts"),
        description: t("admin.ops.alertRules.metricDescriptions.groupAvailableAccounts"),
        recommendedOperator: "<",
        recommendedThreshold: 1
      },
      {
        type: "group_available_ratio",
        group: "group",
        label: t("admin.ops.alertRules.metrics.groupAvailableRatio"),
        description: t("admin.ops.alertRules.metricDescriptions.groupAvailableRatio"),
        recommendedOperator: "<",
        recommendedThreshold: 50,
        unit: "%"
      },
      {
        type: "group_rate_limit_ratio",
        group: "group",
        label: t("admin.ops.alertRules.metrics.groupRateLimitRatio"),
        description: t("admin.ops.alertRules.metricDescriptions.groupRateLimitRatio"),
        recommendedOperator: ">",
        recommendedThreshold: 10,
        unit: "%"
      },
      // Account-level metrics
      {
        type: "account_rate_limited_count",
        group: "account",
        label: t("admin.ops.alertRules.metrics.accountRateLimitedCount"),
        description: t("admin.ops.alertRules.metricDescriptions.accountRateLimitedCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "account_error_count",
        group: "account",
        label: t("admin.ops.alertRules.metrics.accountErrorCount"),
        description: t("admin.ops.alertRules.metricDescriptions.accountErrorCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "account_error_ratio",
        group: "account",
        label: t("admin.ops.alertRules.metrics.accountErrorRatio"),
        description: t("admin.ops.alertRules.metricDescriptions.accountErrorRatio"),
        recommendedOperator: ">",
        recommendedThreshold: 5,
        unit: "%"
      },
      {
        type: "account_temp_unscheduled_count",
        group: "account",
        label: t("admin.ops.alertRules.metrics.accountTempUnscheduledCount"),
        description: t("admin.ops.alertRules.metricDescriptions.accountTempUnscheduledCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      },
      {
        type: "overload_account_count",
        group: "account",
        label: t("admin.ops.alertRules.metrics.overloadAccountCount"),
        description: t("admin.ops.alertRules.metricDescriptions.overloadAccountCount"),
        recommendedOperator: ">",
        recommendedThreshold: 0
      }
    ]), F = P(() => {
      var R;
      const G = (R = p.value) == null ? void 0 : R.metric_type;
      return G ? B.value.find((M) => M.type === G) ?? null : null;
    }), O = P(() => {
      const G = (R) => {
        const M = B.value.filter((rt) => rt.group === R);
        return M.length === 0 ? [] : [
          {
            value: `__group__${R}`,
            label: t(`admin.ops.alertRules.metricGroups.${R}`),
            disabled: !0,
            kind: "group"
          },
          ...M.map((rt) => ({ value: rt.type, label: rt.label }))
        ];
      };
      return [...G("system"), ...G("group"), ...G("account")];
    }), j = P(() => [">", ">=", "<", "<=", "==", "!="].map((R) => ({ value: R, label: R }))), D = P(() => ["P0", "P1", "P2", "P3"].map((R) => ({ value: R, label: R }))), S = P(() => [1, 5, 60].map((R) => ({ value: R, label: `${R}m` })));
    function w() {
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
    function V() {
      u.value = null, p.value = w(), d.value = !0;
    }
    function L(G) {
      u.value = G.id ?? null, p.value = JSON.parse(JSON.stringify(G)), d.value = !0;
    }
    const A = P(() => {
      var M;
      const G = [], R = p.value;
      return R ? ((!R.name || !R.name.trim()) && G.push(t("admin.ops.alertRules.validation.nameRequired")), R.metric_type || G.push(t("admin.ops.alertRules.validation.metricRequired")), m.has(R.metric_type) && !_((M = R.filters) == null ? void 0 : M.group_id) && G.push(t("admin.ops.alertRules.validation.groupIdRequired")), R.operator || G.push(t("admin.ops.alertRules.validation.operatorRequired")), typeof R.threshold == "number" && Number.isFinite(R.threshold) || G.push(t("admin.ops.alertRules.validation.thresholdRequired")), typeof R.window_minutes == "number" && Number.isFinite(R.window_minutes) && [1, 5, 60].includes(R.window_minutes) || G.push(t("admin.ops.alertRules.validation.windowRange")), typeof R.sustained_minutes == "number" && Number.isFinite(R.sustained_minutes) && R.sustained_minutes >= 1 && R.sustained_minutes <= 1440 || G.push(t("admin.ops.alertRules.validation.sustainedRange")), typeof R.cooldown_minutes == "number" && Number.isFinite(R.cooldown_minutes) && R.cooldown_minutes >= 0 && R.cooldown_minutes <= 1440 || G.push(t("admin.ops.alertRules.validation.cooldownRange")), { valid: G.length === 0, errors: G }) : { valid: !0, errors: G };
    });
    async function E() {
      var G, R;
      if (p.value) {
        if (!A.value.valid) {
          e.showError(A.value.errors[0] || t("admin.ops.alertRules.validation.invalid"));
          return;
        }
        c.value = !0;
        try {
          u.value ? await ot.updateAlertRule(u.value, p.value) : await ot.createAlertRule(p.value), d.value = !1, p.value = null, u.value = null, await o(), e.showSuccess(t("admin.ops.alertRules.saveSuccess"));
        } catch (M) {
          console.error("[OpsAlertRulesCard] Failed to save rule", M), e.showError(((R = (G = M == null ? void 0 : M.response) == null ? void 0 : G.data) == null ? void 0 : R.detail) || t("admin.ops.alertRules.saveFailed"));
        } finally {
          c.value = !1;
        }
      }
    }
    const N = I(!1), Y = I(null);
    function nt(G) {
      Y.value = G, N.value = !0;
    }
    async function ct() {
      var G, R, M;
      if ((G = Y.value) != null && G.id)
        try {
          await ot.deleteAlertRule(Y.value.id), N.value = !1, Y.value = null, await o(), e.showSuccess(t("admin.ops.alertRules.deleteSuccess"));
        } catch (q) {
          console.error("[OpsAlertRulesCard] Failed to delete rule", q), e.showError(((M = (R = q == null ? void 0 : q.response) == null ? void 0 : R.data) == null ? void 0 : M.detail) || t("admin.ops.alertRules.deleteFailed"));
        }
    }
    function ht() {
      N.value = !1, Y.value = null;
    }
    return (G, R) => (v(), $("div", O4, [
      l("div", A4, [
        l("div", null, [
          l("h3", E4, h(f(t)("admin.ops.alertRules.title")), 1),
          l("p", L4, h(f(t)("admin.ops.alertRules.description")), 1)
        ]),
        l("div", z4, [
          l("button", {
            class: "btn btn-sm btn-primary",
            disabled: i.value,
            onClick: V
          }, h(f(t)("admin.ops.alertRules.create")), 9, I4),
          l("button", {
            class: "flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
            disabled: i.value,
            onClick: o
          }, [
            (v(), $("svg", {
              class: Z(["h-3.5 w-3.5", { "animate-spin": i.value }]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [...R[14] || (R[14] = [
              l("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }, null, -1)
            ])], 2)),
            Q(" " + h(f(t)("common.refresh")), 1)
          ], 8, F4)
        ])
      ]),
      i.value ? (v(), $("div", V4, h(f(t)("admin.ops.alertRules.loading")), 1)) : r.value.length === 0 ? (v(), $("div", B4, h(f(t)("admin.ops.alertRules.empty")), 1)) : (v(), $("div", j4, [
        l("div", q4, [
          f(n) ? (v(), $("table", a3, [
            l("thead", o3, [
              l("tr", null, [
                l("th", r3, h(f(t)("admin.ops.alertRules.table.name")), 1),
                l("th", l3, h(f(t)("admin.ops.alertRules.table.metric")), 1),
                l("th", d3, h(f(t)("admin.ops.alertRules.table.severity")), 1),
                l("th", c3, h(f(t)("admin.ops.alertRules.table.enabled")), 1),
                l("th", u3, h(f(t)("admin.ops.alertRules.table.actions")), 1)
              ])
            ]),
            l("tbody", h3, [
              (v(!0), $(gt, null, vt(r.value, (M) => (v(), $("tr", {
                key: M.id,
                class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
              }, [
                l("td", p3, [
                  l("div", f3, h(M.name), 1),
                  M.description ? (v(), $("div", g3, h(M.description), 1)) : W("", !0),
                  M.updated_at ? (v(), $("div", m3, h(f(_e)(M.updated_at)), 1)) : W("", !0)
                ]),
                l("td", _3, [
                  l("span", x3, h(M.metric_type), 1),
                  l("span", y3, h(M.operator), 1),
                  l("span", b3, h(M.threshold), 1)
                ]),
                l("td", v3, h(M.severity), 1),
                l("td", k3, h(M.enabled ? f(t)("common.enabled") : f(t)("common.disabled")), 1),
                l("td", w3, [
                  l("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (q) => L(M)
                  }, h(f(t)("common.edit")), 9, S3),
                  l("button", {
                    class: "ml-2 btn btn-sm btn-danger",
                    onClick: (q) => nt(M)
                  }, h(f(t)("common.delete")), 9, $3)
                ])
              ]))), 128))
            ])
          ])) : (v(), $("div", N4, [
            (v(!0), $(gt, null, vt(r.value, (M) => (v(), $("div", {
              key: M.id,
              class: "space-y-2 p-4"
            }, [
              l("div", H4, [
                l("div", W4, [
                  l("div", U4, h(M.name), 1),
                  M.description ? (v(), $("div", Y4, h(M.description), 1)) : W("", !0)
                ]),
                l("span", G4, h(M.severity), 1)
              ]),
              l("div", X4, [
                l("span", K4, h(M.metric_type), 1),
                l("span", Q4, h(M.operator), 1),
                l("span", J4, h(M.threshold), 1)
              ]),
              l("div", Z4, [
                l("span", t3, h(M.enabled ? f(t)("common.enabled") : f(t)("common.disabled")), 1),
                l("div", e3, [
                  l("button", {
                    class: "btn btn-sm btn-secondary",
                    onClick: (q) => L(M)
                  }, h(f(t)("common.edit")), 9, s3),
                  l("button", {
                    class: "btn btn-sm btn-danger",
                    onClick: (q) => nt(M)
                  }, h(f(t)("common.delete")), 9, n3)
                ])
              ]),
              M.updated_at ? (v(), $("div", i3, h(f(_e)(M.updated_at)), 1)) : W("", !0)
            ]))), 128))
          ]))
        ])
      ])),
      K(Re, {
        show: d.value,
        title: u.value ? f(t)("admin.ops.alertRules.editTitle") : f(t)("admin.ops.alertRules.createTitle"),
        width: "wide",
        onClose: R[13] || (R[13] = (M) => d.value = !1)
      }, {
        footer: wt(() => [
          l("div", Q3, [
            l("button", {
              class: "btn btn-secondary",
              disabled: c.value,
              onClick: R[12] || (R[12] = (M) => d.value = !1)
            }, h(f(t)("common.cancel")), 9, J3),
            l("button", {
              class: "btn btn-primary",
              disabled: c.value,
              onClick: E
            }, h(c.value ? f(t)("common.saving") : f(t)("common.save")), 9, Z3)
          ])
        ]),
        default: wt(() => [
          l("div", C3, [
            A.value.valid ? W("", !0) : (v(), $("div", M3, [
              l("div", D3, h(f(t)("admin.ops.alertRules.validation.title")), 1),
              l("ul", R3, [
                (v(!0), $(gt, null, vt(A.value.errors, (M) => (v(), $("li", { key: M }, h(M), 1))), 128))
              ])
            ])),
            l("div", T3, [
              l("div", P3, [
                l("label", O3, h(f(t)("admin.ops.alertRules.form.name")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[0] || (R[0] = (M) => p.value.name = M),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [pt, p.value.name]
                ])
              ]),
              l("div", A3, [
                l("label", E3, h(f(t)("admin.ops.alertRules.form.description")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[1] || (R[1] = (M) => p.value.description = M),
                  class: "input",
                  type: "text"
                }, null, 512), [
                  [pt, p.value.description]
                ])
              ]),
              l("div", null, [
                l("label", L3, h(f(t)("admin.ops.alertRules.form.metric")), 1),
                K(kt, {
                  modelValue: p.value.metric_type,
                  "onUpdate:modelValue": R[2] || (R[2] = (M) => p.value.metric_type = M),
                  options: O.value
                }, null, 8, ["modelValue", "options"]),
                F.value ? (v(), $("div", z3, [
                  l("p", null, h(F.value.description), 1),
                  l("p", null, h(f(t)("admin.ops.alertRules.hints.recommended", {
                    operator: F.value.recommendedOperator,
                    threshold: F.value.recommendedThreshold,
                    unit: F.value.unit || ""
                  })), 1)
                ])) : W("", !0)
              ]),
              l("div", null, [
                l("label", I3, h(f(t)("admin.ops.alertRules.form.operator")), 1),
                K(kt, {
                  modelValue: p.value.operator,
                  "onUpdate:modelValue": R[3] || (R[3] = (M) => p.value.operator = M),
                  options: j.value
                }, null, 8, ["modelValue", "options"])
              ]),
              l("div", F3, [
                l("label", V3, [
                  Q(h(f(t)("admin.ops.alertRules.form.groupId")) + " ", 1),
                  b.value ? (v(), $("span", B3, "*")) : W("", !0)
                ]),
                K(kt, {
                  modelValue: y.value,
                  "onUpdate:modelValue": R[4] || (R[4] = (M) => y.value = M),
                  options: T.value,
                  searchable: "",
                  placeholder: f(t)("admin.ops.alertRules.form.groupPlaceholder"),
                  error: b.value && !y.value
                }, null, 8, ["modelValue", "options", "placeholder", "error"]),
                l("p", j3, h(b.value ? f(t)("admin.ops.alertRules.hints.groupRequired") : f(t)("admin.ops.alertRules.hints.groupOptional")), 1)
              ]),
              l("div", null, [
                l("label", q3, h(f(t)("admin.ops.alertRules.form.threshold")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[5] || (R[5] = (M) => p.value.threshold = M),
                  class: "input",
                  type: "number"
                }, null, 512), [
                  [
                    pt,
                    p.value.threshold,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              l("div", null, [
                l("label", N3, h(f(t)("admin.ops.alertRules.form.severity")), 1),
                K(kt, {
                  modelValue: p.value.severity,
                  "onUpdate:modelValue": R[6] || (R[6] = (M) => p.value.severity = M),
                  options: D.value
                }, null, 8, ["modelValue", "options"])
              ]),
              l("div", null, [
                l("label", H3, h(f(t)("admin.ops.alertRules.form.window")), 1),
                K(kt, {
                  modelValue: p.value.window_minutes,
                  "onUpdate:modelValue": R[7] || (R[7] = (M) => p.value.window_minutes = M),
                  options: S.value
                }, null, 8, ["modelValue", "options"])
              ]),
              l("div", null, [
                l("label", W3, h(f(t)("admin.ops.alertRules.form.sustained")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[8] || (R[8] = (M) => p.value.sustained_minutes = M),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "1440"
                }, null, 512), [
                  [
                    pt,
                    p.value.sustained_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              l("div", null, [
                l("label", U3, h(f(t)("admin.ops.alertRules.form.cooldown")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[9] || (R[9] = (M) => p.value.cooldown_minutes = M),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "1440"
                }, null, 512), [
                  [
                    pt,
                    p.value.cooldown_minutes,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              l("div", Y3, [
                l("span", G3, h(f(t)("admin.ops.alertRules.form.enabled")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[10] || (R[10] = (M) => p.value.enabled = M),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [Rn, p.value.enabled]
                ])
              ]),
              l("div", X3, [
                l("span", K3, h(f(t)("admin.ops.alertRules.form.notifyEmail")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": R[11] || (R[11] = (M) => p.value.notify_email = M),
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                }, null, 512), [
                  [Rn, p.value.notify_email]
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      K(Zr, {
        show: N.value,
        title: f(t)("admin.ops.alertRules.deleteConfirmTitle"),
        message: f(t)("admin.ops.alertRules.deleteConfirmMessage"),
        confirmText: f(t)("common.delete"),
        cancelText: f(t)("common.cancel"),
        onConfirm: ct,
        onCancel: ht
      }, null, 8, ["show", "title", "message", "confirmText", "cancelText"])
    ]));
  }
}), eS = {
  key: 0,
  class: "rounded-2xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400"
}, sS = {
  key: 3,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-4"
}, nS = { class: "lg:col-span-1 min-h-[360px]" }, iS = { class: "lg:col-span-1 h-[360px]" }, aS = { class: "lg:col-span-2 h-[360px]" }, oS = {
  key: 4,
  class: "grid grid-cols-1 gap-6 md:grid-cols-3"
}, rS = {
  key: 5,
  class: "grid grid-cols-1 gap-6"
}, $o = 5, gS = /* @__PURE__ */ Mt({
  __name: "OpsDashboard",
  setup(s) {
    const t = Kr(), e = Xr(), n = Fe(), i = To(), { t: a } = Et(), o = P(() => i.opsMonitoringEnabled), r = /* @__PURE__ */ new Set(["5m", "30m", "1h", "6h", "24h", "custom"]), d = /* @__PURE__ */ new Set(["auto", "raw", "preagg"]), c = I(!0), u = I(!1), p = I(""), m = I(/* @__PURE__ */ new Date()), _ = I("1h"), g = I(""), x = I(null), b = I("auto"), y = I(null), T = I(null), B = `${$o}h`, F = $o * 60 * 60 * 1e3, O = {
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
    }, j = I(!1), D = I(!1), S = P(() => {
      const z = t.query[O.fullscreen];
      return z === "1" || z === "true";
    });
    function w() {
      const z = { ...t.query };
      delete z[O.fullscreen], e.replace({ query: z });
    }
    function V() {
      const z = { ...t.query, [O.fullscreen]: "1" };
      e.replace({ query: z });
    }
    function L(z) {
      z.key === "Escape" && S.value && w();
    }
    let A = null, E = 0;
    function N(z) {
      return !!z && typeof z == "object" && "code" in z && z.code === "ERR_CANCELED";
    }
    function Y() {
      A && (A.abort(), A = null);
    }
    const nt = (z) => {
      const X = t.query[z];
      return typeof X == "string" ? X : Array.isArray(X) && typeof X[0] == "string" ? X[0] : "";
    }, ct = (z) => {
      const X = nt(z);
      if (!X) return null;
      const J = Number.parseInt(X, 10);
      return Number.isFinite(J) ? J : null;
    }, ht = () => {
      const z = nt(O.timeRange);
      z && r.has(z) && (_.value = z), g.value = nt(O.platform) || "";
      const X = ct(O.groupId);
      x.value = typeof X == "number" && X > 0 ? X : null;
      const J = nt(O.queryMode);
      if (J && d.has(J))
        b.value = J;
      else {
        const Xt = i.opsQueryModeDefault || "auto";
        b.value = d.has(Xt) ? Xt : "auto";
      }
      const ue = nt(O.openAlertRules);
      (ue === "1" || ue === "true") && (ie.value = !0);
      const Pe = ct(O.alertRuleId);
      typeof Pe == "number" && Pe > 0 && (ie.value = !0);
      const Zt = nt(O.openErrorDetails);
      if (Zt === "1" || Zt === "true") {
        const Xt = nt(O.errorType);
        be.value = Xt === "upstream" ? "upstream" : "request", Ht.value = !0;
      }
    }, G = () => {
      const z = { ...t.query };
      return Object.values(O).forEach((X) => {
        delete z[X];
      }), _.value !== "1h" && (z[O.timeRange] = _.value), g.value && (z[O.platform] = g.value), typeof x.value == "number" && x.value > 0 && (z[O.groupId] = String(x.value)), b.value !== "auto" && (z[O.queryMode] = b.value), z;
    }, R = al(async () => {
      if (j.value) return;
      const z = G(), X = t.query, J = Object.keys(z), ue = Object.keys(X);
      if (!(J.length === ue.length && J.every((Xt) => String(X[Xt] ?? "") === String(z[Xt] ?? ""))))
        try {
          D.value = !0, await e.replace({ query: z });
        } finally {
          D.value = !1;
        }
    }, 250), M = I(null), q = I(null), rt = I(null), Ct = I(!1), Pt = I(null), Dt = I(!1), re = I(null), tt = I(!1), U = I(null), H = I(!1), it = I(null), dt = I(!1), Lt = I(null), zt = I(!1), Ht = I(!1), be = I("request"), ve = I(!1), Te = I({
      title: "",
      kind: "all",
      sort: "created_at_desc"
    }), le = I(!1), ie = I(!1);
    ht();
    const ss = I(!0), ns = I(!1), de = I(!1), Be = I(3e4), jt = I(0), Wt = I(0), { pause: on, resume: Ss } = ol(
      () => {
        if (de.value && o.value && !c.value) {
          if (jt.value <= 0) {
            Jt();
            return;
          }
          jt.value -= 1;
        }
      },
      1e3,
      { immediate: !1 }
    );
    async function ae() {
      try {
        const z = await ot.getAdvancedSettings();
        ss.value = z.display_alert_events, ns.value = z.display_openai_token_stats, de.value = z.auto_refresh_enabled, Be.value = z.auto_refresh_interval_seconds * 1e3, jt.value = z.auto_refresh_interval_seconds;
      } catch (z) {
        console.error("[OpsDashboard] Failed to load dashboard advanced settings", z), ss.value = !0, ns.value = !1, de.value = !1, Be.value = 3e4, jt.value = 0;
      }
    }
    function $s(z) {
      g.value = z || "", x.value = null;
    }
    function Cs(z) {
      const X = Number.isFinite(z) && z > 0 ? z : null;
      x.value = X;
    }
    function is(z) {
      const X = {
        title: a("admin.ops.requestDetails.title"),
        kind: "all",
        sort: "created_at_desc"
      };
      Te.value = { ...X, ...z ?? {} }, Te.value.title || (Te.value.title = X.title), Ht.value = !1, zt.value = !1, ve.value = !0;
    }
    function as(z) {
      be.value = z, ve.value = !1, zt.value = !1, Ht.value = !0;
    }
    function Un(z) {
      typeof z == "string" && r.has(z) && (_.value = z);
    }
    function Ms(z, X) {
      y.value = z, T.value = X;
    }
    async function Ds() {
      await ae(), dn(), Jt();
    }
    function Yn(z) {
      g.value = typeof z == "string" ? z : "";
    }
    function Rs(z) {
      if (z === null) {
        x.value = null;
        return;
      }
      if (typeof z == "number") {
        x.value = z > 0 ? z : null;
        return;
      }
      if (typeof z == "string") {
        const X = Number.parseInt(z, 10);
        x.value = Number.isFinite(X) && X > 0 ? X : null;
      }
    }
    function Gn(z) {
      typeof z == "string" && d.has(z) && (b.value = z);
    }
    function os(z) {
      Lt.value = z, Ht.value = !1, ve.value = !1, zt.value = !0;
    }
    function ce() {
      const z = {
        platform: g.value || void 0,
        group_id: x.value ?? void 0,
        mode: b.value
      };
      return _.value === "custom" ? y.value && T.value ? (z.start_time = y.value, z.end_time = T.value) : z.time_range = "1h" : z.time_range = _.value, z;
    }
    function rn() {
      const z = {
        platform: g.value || void 0,
        group_id: x.value ?? void 0,
        mode: b.value
      }, X = /* @__PURE__ */ new Date(), J = new Date(X.getTime() - F);
      return z.start_time = J.toISOString(), z.end_time = X.toISOString(), z;
    }
    async function Ts(z, X) {
      if (o.value)
        try {
          const J = await ot.getDashboardOverview(ce(), { signal: X });
          if (z !== E) return;
          M.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          M.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadOverview"));
        }
    }
    async function rs(z, X) {
      if (o.value) {
        Dt.value = !0;
        try {
          const J = await ot.getThroughputTrend(rn(), { signal: X });
          if (z !== E) return;
          Pt.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          Pt.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadSwitchTrend"));
        } finally {
          z === E && (Dt.value = !1);
        }
      }
    }
    async function je(z, X) {
      if (o.value) {
        Ct.value = !0;
        try {
          const J = await ot.getThroughputTrend(ce(), { signal: X });
          if (z !== E) return;
          rt.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          rt.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadThroughputTrend"));
        } finally {
          z === E && (Ct.value = !1);
        }
      }
    }
    async function Xn(z, X) {
      if (o.value) {
        Ct.value = !0, H.value = !0;
        try {
          const J = await ot.getDashboardSnapshotV2(ce(), { signal: X });
          if (z !== E) return;
          M.value = J.overview, rt.value = J.throughput_trend, U.value = J.error_trend;
        } catch (J) {
          if (z !== E || N(J)) return;
          await Promise.all([
            Ts(z, X),
            je(z, X),
            qe(z, X)
          ]);
        } finally {
          z === E && (Ct.value = !1, H.value = !1);
        }
      }
    }
    async function Kn(z, X) {
      if (o.value) {
        tt.value = !0;
        try {
          const J = await ot.getLatencyHistogram(ce(), { signal: X });
          if (z !== E) return;
          re.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          re.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadLatencyHistogram"));
        } finally {
          z === E && (tt.value = !1);
        }
      }
    }
    async function qe(z, X) {
      if (o.value) {
        H.value = !0;
        try {
          const J = await ot.getErrorTrend(ce(), { signal: X });
          if (z !== E) return;
          U.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          U.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadErrorTrend"));
        } finally {
          z === E && (H.value = !1);
        }
      }
    }
    async function ls(z, X) {
      if (o.value) {
        dt.value = !0;
        try {
          const J = await ot.getErrorDistribution(ce(), { signal: X });
          if (z !== E) return;
          it.value = J;
        } catch (J) {
          if (z !== E || N(J)) return;
          it.value = null, n.showError((J == null ? void 0 : J.message) || a("admin.ops.failedToLoadErrorDistribution"));
        } finally {
          z === E && (dt.value = !1);
        }
      }
    }
    async function ln(z, X) {
      o.value && await Promise.all([
        Kn(z, X),
        ls(z, X)
      ]);
    }
    function ds(z) {
      return !!z && typeof z == "object" && "code" in z && typeof z.code == "string" && z.code === "OPS_DISABLED";
    }
    async function Jt() {
      if (!o.value) return;
      Y(), E += 1;
      const z = E;
      A = new AbortController(), c.value = !0, p.value = "";
      try {
        if (await Promise.all([
          Xn(z, A.signal),
          rs(z, A.signal)
        ]), z !== E) return;
        m.value = /* @__PURE__ */ new Date(), Wt.value += 1, de.value && (jt.value = Math.floor(Be.value / 1e3)), ln(z, A.signal);
      } catch (X) {
        ds(X) || (console.error("[ops] failed to fetch dashboard data", X), p.value = a("admin.ops.failedToLoadData"));
      } finally {
        z === E && (c.value = !1, u.value = !0);
      }
    }
    _t(
      () => [_.value, g.value, x.value, b.value],
      () => {
        j.value || (o.value && Jt(), R());
      }
    ), _t(
      () => t.query,
      () => {
        if (D.value) return;
        const z = _.value, X = g.value, J = x.value;
        j.value = !0, ht(), j.value = !1, (z !== _.value || X !== g.value || J !== x.value) && o.value && Jt();
      }
    ), Ze(async () => {
      if (window.addEventListener("keydown", L), await i.fetch(), !i.opsMonitoringEnabled) {
        await e.replace("/admin/settings");
        return;
      }
      dn(), await ae(), o.value && await Jt(), de.value && Ss();
    });
    async function dn() {
      try {
        const z = await ot.getMetricThresholds();
        q.value = z || null;
      } catch (z) {
        console.warn("[OpsDashboard] Failed to load thresholds", z), q.value = null;
      }
    }
    return Do(() => {
      window.removeEventListener("keydown", L), Y(), on();
    }), _t(de, (z) => {
      z ? (jt.value = Math.floor(Be.value / 1e3), Ss()) : (on(), jt.value = 0);
    }), _t(le, async (z) => {
      z || await ae();
    }), (z, X) => {
      var J, ue, Pe, Zt, Xt;
      return v(), $("div", {
        class: Z([S.value ? "flex min-h-screen flex-col justify-center bg-gray-50 p-4 dark:bg-dark-950 md:p-6" : "", "space-y-6 pb-12"])
      }, [
        p.value ? (v(), $("div", eS, h(p.value), 1)) : W("", !0),
        c.value && !u.value ? (v(), ft(Hu, {
          key: 1,
          fullscreen: S.value
        }, null, 8, ["fullscreen"])) : o.value ? (v(), ft(Du, {
          key: 2,
          overview: M.value,
          platform: g.value,
          "group-id": x.value,
          "time-range": _.value,
          "query-mode": b.value,
          loading: c.value,
          "last-updated": m.value,
          thresholds: q.value,
          "auto-refresh-enabled": de.value,
          "auto-refresh-countdown": jt.value,
          fullscreen: S.value,
          "custom-start-time": y.value,
          "custom-end-time": T.value,
          "onUpdate:timeRange": Un,
          "onUpdate:platform": Yn,
          "onUpdate:group": Rs,
          "onUpdate:queryMode": Gn,
          "onUpdate:customTimeRange": Ms,
          onRefresh: Jt,
          onOpenRequestDetails: is,
          onOpenErrorDetails: as,
          onOpenSettings: X[0] || (X[0] = (Ut) => le.value = !0),
          onOpenAlertRules: X[1] || (X[1] = (Ut) => ie.value = !0),
          onEnterFullscreen: V,
          onExitFullscreen: w
        }, null, 8, ["overview", "platform", "group-id", "time-range", "query-mode", "loading", "last-updated", "thresholds", "auto-refresh-enabled", "auto-refresh-countdown", "fullscreen", "custom-start-time", "custom-end-time"])) : W("", !0),
        o.value && !(c.value && !u.value) ? (v(), $("div", sS, [
          l("div", nS, [
            K(Uh, {
              "platform-filter": g.value,
              "group-id-filter": x.value,
              "refresh-token": Wt.value
            }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
          ]),
          l("div", iS, [
            K(Sb, {
              points: ((J = Pt.value) == null ? void 0 : J.points) ?? [],
              loading: Dt.value,
              "time-range": B,
              fullscreen: S.value
            }, null, 8, ["points", "loading", "fullscreen"])
          ]),
          l("div", aS, [
            K(_b, {
              points: ((ue = rt.value) == null ? void 0 : ue.points) ?? [],
              "by-platform": ((Pe = rt.value) == null ? void 0 : Pe.by_platform) ?? [],
              "top-groups": ((Zt = rt.value) == null ? void 0 : Zt.top_groups) ?? [],
              loading: Ct.value,
              "time-range": _.value,
              fullscreen: S.value,
              onSelectPlatform: $s,
              onSelectGroup: Cs,
              onOpenDetails: is
            }, null, 8, ["points", "by-platform", "top-groups", "loading", "time-range", "fullscreen"])
          ])
        ])) : W("", !0),
        o.value && !(c.value && !u.value) ? (v(), $("div", oS, [
          K(Qy, {
            "latency-data": re.value,
            loading: tt.value
          }, null, 8, ["latency-data", "loading"]),
          K(cx, {
            data: it.value,
            loading: dt.value,
            onOpenDetails: X[2] || (X[2] = (Ut) => as("request"))
          }, null, 8, ["data", "loading"]),
          K(Hy, {
            points: ((Xt = U.value) == null ? void 0 : Xt.points) ?? [],
            loading: H.value,
            "time-range": _.value,
            onOpenRequestErrors: X[3] || (X[3] = (Ut) => as("request")),
            onOpenUpstreamErrors: X[4] || (X[4] = (Ut) => as("upstream"))
          }, null, 8, ["points", "loading", "time-range"])
        ])) : W("", !0),
        o.value && ns.value && !(c.value && !u.value) ? (v(), $("div", rS, [
          K(mk, {
            "platform-filter": g.value,
            "group-id-filter": x.value,
            "refresh-token": Wt.value
          }, null, 8, ["platform-filter", "group-id-filter", "refresh-token"])
        ])) : W("", !0),
        o.value && ss.value && !(c.value && !u.value) ? (v(), ft(f1, { key: 6 })) : W("", !0),
        o.value && !(c.value && !u.value) ? (v(), ft(T2, {
          key: 7,
          "platform-filter": g.value,
          "refresh-token": Wt.value
        }, null, 8, ["platform-filter", "refresh-token"])) : W("", !0),
        S.value ? W("", !0) : (v(), $(gt, { key: 8 }, [
          K(P4, {
            show: le.value,
            onClose: X[5] || (X[5] = (Ut) => le.value = !1),
            onSaved: Ds
          }, null, 8, ["show"]),
          K(Re, {
            show: ie.value,
            title: f(a)("admin.ops.alertRules.title"),
            width: "extra-wide",
            onClose: X[6] || (X[6] = (Ut) => ie.value = !1)
          }, {
            default: wt(() => [
              K(tS)
            ]),
            _: 1
          }, 8, ["show", "title"]),
          K(Ey, {
            show: Ht.value,
            "time-range": _.value,
            "custom-start-time": y.value,
            "custom-end-time": T.value,
            platform: g.value,
            "group-id": x.value,
            "error-type": be.value,
            "onUpdate:show": X[7] || (X[7] = (Ut) => Ht.value = Ut),
            onOpenErrorDetail: os
          }, null, 8, ["show", "time-range", "custom-start-time", "custom-end-time", "platform", "group-id", "error-type"]),
          K(cf, {
            show: zt.value,
            "onUpdate:show": X[8] || (X[8] = (Ut) => zt.value = Ut),
            "error-id": Lt.value,
            "error-type": be.value
          }, null, 8, ["show", "error-id", "error-type"]),
          K(Cw, {
            modelValue: ve.value,
            "onUpdate:modelValue": X[9] || (X[9] = (Ut) => ve.value = Ut),
            "time-range": _.value,
            preset: Te.value,
            platform: g.value,
            "group-id": x.value,
            onOpenErrorDetail: os
          }, null, 8, ["modelValue", "time-range", "preset", "platform", "group-id"])
        ], 64))
      ], 2);
    };
  }
});
export {
  gS as default
};
