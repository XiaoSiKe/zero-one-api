import { d as h, u as _, c as n, p as $, o as l, a as o, n as u, k as M, g as d, b as p, t as s, F as b, f as w } from "./cnProviderAdminLeaf-BPO9X3xc.js";
import { _ as B } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-BFK_SVVE.js";
function S(t) {
  return !!(t != null && t.peak_rate_enabled && t.peak_start && t.peak_end);
}
function T(t) {
  return t ? `UTC${t}` : "";
}
function C(t, e) {
  if (!S(t) || !t) return "";
  const i = `${t.peak_start}-${t.peak_end} ×${t.peak_rate_multiplier ?? 1}`;
  return e ? `${i} (${e})` : i;
}
const E = { class: "truncate" }, P = { class: "line-through opacity-50 mr-0.5" }, N = { class: "font-bold" }, V = ["title"], D = /* @__PURE__ */ h({
  __name: "GroupBadge",
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
    showRate: { type: Boolean, default: !0 },
    daysRemaining: { default: null },
    alwaysShowRate: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: i } = _(), r = n(() => e.subscriptionType === "subscription"), k = n(() => e.userRateMultiplier !== null && e.userRateMultiplier !== void 0 && e.rateMultiplier !== void 0 && e.userRateMultiplier !== e.rateMultiplier), c = $(), x = n(() => !!(e.showRate && e.peakRateEnabled && e.peakStart && e.peakEnd)), g = n(() => {
      var a;
      return C(
        {
          peak_rate_enabled: e.peakRateEnabled,
          peak_start: e.peakStart,
          peak_end: e.peakEnd,
          peak_rate_multiplier: e.peakRateMultiplier
        },
        T((a = c.cachedPublicSettings) == null ? void 0 : a.server_utc_offset)
      );
    }), m = n(() => i("common.peakRateTooltip", { window: g.value })), f = n(() => e.showRate ? r.value ? !0 : e.rateMultiplier !== void 0 || k.value : !1), z = n(() => {
      const a = e.rateMultiplier !== void 0 ? `${e.rateMultiplier}x` : "";
      return r.value && !e.alwaysShowRate ? e.daysRemaining !== null && e.daysRemaining !== void 0 ? e.daysRemaining <= 0 ? i("admin.users.expired") : i("admin.users.daysRemaining", { days: e.daysRemaining }) : i("groups.subscription") : a;
    }), y = n(() => {
      const a = "px-1.5 py-0.5 rounded text-[10px] font-semibold";
      if (!r.value)
        return `${a} bg-black/10 dark:bg-white/10`;
      if (e.daysRemaining !== null && e.daysRemaining !== void 0) {
        if (e.daysRemaining <= 0 || e.daysRemaining <= 3)
          return `${a} bg-red-200/80 text-red-800 dark:bg-red-800/50 dark:text-red-300`;
        if (e.daysRemaining <= 7)
          return `${a} bg-zo-alert-200/80 text-zo-alert-800 dark:bg-zo-alert-800/50 dark:text-zo-alert-300`;
      }
      return e.platform === "anthropic" ? `${a} bg-zo-alert-200/60 text-zo-alert-800 dark:bg-zo-alert-800/40 dark:text-zo-alert-300` : e.platform === "openai" ? `${a} bg-zo-signal-200/60 text-zo-signal-800 dark:bg-zo-signal-800/40 dark:text-zo-signal-300` : e.platform === "gemini" ? `${a} bg-blue-200/60 text-blue-800 dark:bg-blue-800/40 dark:text-blue-300` : e.platform === "antigravity" ? `${a} bg-purple-200/60 text-purple-800 dark:bg-purple-800/40 dark:text-purple-300` : e.platform === "grok" ? `${a} bg-zinc-300/70 text-zinc-800 dark:bg-zinc-700/60 dark:text-zinc-200` : e.platform === "kimi" ? `${a} bg-pink-200/60 text-pink-800 dark:bg-pink-800/40 dark:text-pink-300` : e.platform === "zhipu" ? `${a} bg-indigo-200/60 text-indigo-800 dark:bg-indigo-800/40 dark:text-indigo-300` : e.platform === "deepseek" ? `${a} bg-teal-200/60 text-teal-800 dark:bg-teal-800/40 dark:text-teal-300` : e.platform === "composite" ? `${a} bg-cyan-200/70 text-cyan-900 dark:bg-cyan-900/50 dark:text-cyan-300` : `${a} bg-violet-200/60 text-violet-800 dark:bg-violet-800/40 dark:text-violet-300`;
    }), v = n(() => "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-300"), R = n(() => e.platform === "anthropic" ? r.value ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : "bg-zo-alert-50 text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-400" : e.platform === "openai" ? r.value ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-zo-signal-50 text-zo-signal-700 dark:bg-zo-signal-900/20 dark:text-zo-signal-400" : e.platform === "gemini" ? r.value ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400" : e.platform === "antigravity" ? r.value ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/20 dark:text-fuchsia-400" : e.platform === "grok" ? r.value ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200" : e.platform === "kimi" ? r.value ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : "bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-400" : e.platform === "zhipu" ? r.value ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400" : e.platform === "deepseek" ? r.value ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400" : e.platform === "composite" ? r.value ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" : "bg-cyan-50 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300" : r.value ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400");
    return (a, F) => (l(), o("span", {
      class: u([
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
        R.value
      ])
    }, [
      t.platform ? (l(), M(B, {
        key: 0,
        platform: t.platform,
        size: "sm"
      }, null, 8, ["platform"])) : d("", !0),
      p("span", E, s(t.name), 1),
      f.value ? (l(), o("span", {
        key: 1,
        class: u(y.value)
      }, [
        k.value ? (l(), o(b, { key: 0 }, [
          p("span", P, s(t.rateMultiplier) + "x", 1),
          p("span", N, s(t.userRateMultiplier) + "x", 1)
        ], 64)) : (l(), o(b, { key: 1 }, [
          w(s(z.value), 1)
        ], 64))
      ], 2)) : d("", !0),
      x.value ? (l(), o("span", {
        key: 2,
        class: u(v.value),
        title: m.value
      }, s(g.value), 11, V)) : d("", !0)
    ], 2));
  }
});
export {
  D as _,
  C as f,
  T as s
};
