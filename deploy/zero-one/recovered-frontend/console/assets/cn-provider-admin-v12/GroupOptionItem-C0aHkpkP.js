import { _ as g, f as y, s as b } from "./GroupBadge.vue_vue_type_script_setup_true_lang-C60Vt3W6.js";
import { d as v, c as w, u as R, e as a, f as s, g as l, j as z, h as r, n as o, q as M, F as c, l as _, i as B, s as i, y as C } from "./cnProviderAdminLeaf-B6vuXkvp.js";
const E = { class: "flex min-w-0 flex-1 items-start justify-between gap-3" }, S = ["title"], T = {
  key: 0,
  class: "mt-1.5 w-full whitespace-pre-line [overflow-wrap:anywhere] text-left text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3"
}, I = { class: "flex shrink-0 items-center gap-2 pt-0.5" }, N = { class: "flex shrink-0 flex-col items-end gap-1" }, P = { class: "mr-1 line-through opacity-50" }, V = { class: "font-bold" }, j = ["title"], G = {
  key: 0,
  class: "h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "2"
}, L = /* @__PURE__ */ v({
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
  setup(e) {
    const { t: p } = w(), t = e, k = i(() => t.userRateMultiplier !== null && t.userRateMultiplier !== void 0 && t.rateMultiplier !== void 0 && t.userRateMultiplier !== t.rateMultiplier), m = R(), f = i(() => !!(t.peakRateEnabled && t.peakStart && t.peakEnd)), d = i(() => {
      var n;
      return y(
        {
          peak_rate_enabled: t.peakRateEnabled,
          peak_start: t.peakStart,
          peak_end: t.peakEnd,
          peak_rate_multiplier: t.peakRateMultiplier
        },
        b((n = m.cachedPublicSettings) == null ? void 0 : n.server_utc_offset)
      );
    }), x = i(() => p("common.peakRateTooltip", { window: d.value })), h = i(() => {
      switch (t.platform) {
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
    return (n, u) => (a(), s("div", E, [
      l("div", {
        class: "flex min-w-0 flex-1 flex-col items-start",
        title: e.description || void 0
      }, [
        z(g, {
          name: e.name,
          platform: e.platform,
          "subscription-type": e.subscriptionType,
          "show-rate": !1,
          class: "groupOptionItemBadge"
        }, null, 8, ["name", "platform", "subscription-type"]),
        e.description ? (a(), s("span", T, r(e.description), 1)) : o("", !0)
      ], 8, S),
      l("div", I, [
        l("div", N, [
          e.rateMultiplier !== void 0 ? (a(), s("span", {
            key: 0,
            class: M(["inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold", h.value])
          }, [
            k.value ? (a(), s(c, { key: 0 }, [
              l("span", P, r(e.rateMultiplier) + "x", 1),
              l("span", V, r(e.userRateMultiplier) + "x", 1)
            ], 64)) : (a(), s(c, { key: 1 }, [
              _(r(e.rateMultiplier) + "x " + r(B(p)("admin.groups.rateLabel")), 1)
            ], 64))
          ], 2)) : o("", !0),
          f.value ? (a(), s("span", {
            key: 1,
            class: "inline-flex items-center whitespace-nowrap rounded-full bg-zo-alert-50 px-3 py-1 text-xs font-semibold text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-300",
            title: x.value
          }, r(d.value), 9, j)) : o("", !0)
        ]),
        e.showCheckmark && e.selected ? (a(), s("svg", G, [...u[0] || (u[0] = [
          l("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M5 13l4 4L19 7"
          }, null, -1)
        ])])) : o("", !0)
      ])
    ]));
  }
}), q = /* @__PURE__ */ C(L, [["__scopeId", "data-v-f3e0187e"]]);
export {
  q as G
};
