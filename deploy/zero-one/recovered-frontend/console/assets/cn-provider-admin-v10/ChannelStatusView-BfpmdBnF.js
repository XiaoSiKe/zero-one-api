import { a as Z, d as I, u as V, r as C, c as ee, K as G, m as i, f as u, g as t, i as n, s as R, h as l, l as D, F as T, j as M, p as $, k as O, q as E, _ as F, A as N, e as K, D as H, L as ne, w as q, v as X, b as le } from "./cnProviderAdminLeaf-DehadpuS.js";
import { a as W } from "./apiError-i2TfMBqu.js";
import { v as se, w as A, x as re, u as J, y as oe, _ as ie, t as de, S as ce, p as Y } from "./MonitorQuotaView.vue_vue_type_script_setup_true_lang-CD7IEQSQ.js";
import { _ as ue } from "./EmptyState.vue_vue_type_script_setup_true_lang-Cfqco4L8.js";
import { _ as me } from "./BaseDialog.vue_vue_type_script_setup_true_lang-CoJJzgOV.js";
async function ve(e) {
  const { data: r } = await Z.get("/channel-monitors", {
    signal: e == null ? void 0 : e.signal
  });
  return r;
}
async function te(e) {
  const { data: r } = await Z.get(`/channel-monitors/${e}/status`);
  return r;
}
const ye = ["title"], ge = {
  key: 0,
  class: "absolute right-0 z-20 mt-1 w-44 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, fe = { class: "p-1.5" }, he = {
  key: 0,
  class: "h-4 w-4 text-primary-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, be = ["onClick"], xe = {
  key: 0,
  class: "h-4 w-4 text-primary-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, pe = /* @__PURE__ */ I({
  __name: "AutoRefreshButton",
  props: {
    enabled: { type: Boolean },
    intervalSeconds: {},
    countdown: {},
    intervals: {}
  },
  emits: ["update:enabled", "update:interval"],
  setup(e) {
    const { t: r } = V(), a = C(!1), m = C(null);
    function v(c) {
      m.value && !m.value.contains(c.target) && (a.value = !1);
    }
    return ee(() => document.addEventListener("click", v)), G(() => document.removeEventListener("click", v)), (c, s) => (i(), u("div", {
      class: "relative",
      ref_key: "dropdownRef",
      ref: m
    }, [
      t("button", {
        onClick: s[0] || (s[0] = (d) => a.value = !a.value),
        class: "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300 dark:hover:bg-dark-700",
        title: n(r)("common.autoRefresh.title")
      }, [
        (i(), u("svg", {
          class: R(["h-3.5 w-3.5", e.enabled ? "animate-spin" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, [...s[2] || (s[2] = [
          t("path", {
            "fill-rule": "evenodd",
            d: "M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.312a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm-10.624-2.848a5.5 5.5 0 019.201-2.466l.312.311H11.768a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V3.537a.75.75 0 00-1.5 0v2.034l-.312-.312A7 7 0 002.628 8.397a.75.75 0 001.449.39z",
            "clip-rule": "evenodd"
          }, null, -1)
        ])], 2)),
        t("span", null, l(e.enabled ? n(r)("common.autoRefresh.countdown", { seconds: e.countdown }) : n(r)("common.autoRefresh.title")), 1)
      ], 8, ye),
      a.value ? (i(), u("div", ge, [
        t("div", fe, [
          t("button", {
            onClick: s[1] || (s[1] = (d) => c.$emit("update:enabled", !e.enabled)),
            class: "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
          }, [
            t("span", null, l(n(r)("common.autoRefresh.enable")), 1),
            e.enabled ? (i(), u("svg", he, [...s[3] || (s[3] = [
              t("path", {
                "fill-rule": "evenodd",
                d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                "clip-rule": "evenodd"
              }, null, -1)
            ])])) : D("", !0)
          ]),
          s[5] || (s[5] = t("div", { class: "my-1 border-t border-gray-100 dark:border-dark-700" }, null, -1)),
          (i(!0), u(T, null, M(e.intervals, (d) => (i(), u("button", {
            key: d,
            onClick: (o) => c.$emit("update:interval", d),
            class: "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
          }, [
            t("span", null, l(n(r)("common.autoRefresh.seconds", { n: d })), 1),
            e.intervalSeconds === d ? (i(), u("svg", xe, [...s[4] || (s[4] = [
              t("path", {
                "fill-rule": "evenodd",
                d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                "clip-rule": "evenodd"
              }, null, -1)
            ])])) : D("", !0)
          ], 8, be))), 128))
        ])
      ])) : D("", !0)
    ], 512));
  }
}), we = { class: "py-3 md:py-4" }, ke = { class: "flex items-center justify-end gap-3 flex-wrap" }, _e = {
  role: "tablist",
  class: "inline-flex p-0.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200/60 dark:border-dark-700/60 text-xs"
}, Ce = ["aria-selected", "onClick"], $e = ["disabled", "title"], Se = /* @__PURE__ */ I({
  __name: "MonitorHero",
  props: {
    overallStatus: {},
    intervalSeconds: {},
    window: {},
    loading: { type: Boolean },
    autoRefresh: {}
  },
  emits: ["update:window", "refresh"],
  setup(e, { emit: r }) {
    const a = e, m = r, { t: v } = V(), c = $(() => [
      { value: "7d", label: v("channelStatus.windowTab.7d") },
      { value: "15d", label: v("channelStatus.windowTab.15d") },
      { value: "30d", label: v("channelStatus.windowTab.30d") }
    ]), s = $(() => v(`channelStatus.overall.${a.overallStatus}`)), d = $(() => se(a.overallStatus)), o = $(() => A(a.overallStatus, !0));
    return (y, b) => (i(), u("section", we, [
      t("div", ke, [
        t("div", _e, [
          (i(!0), u(T, null, M(c.value, (g) => (i(), u("button", {
            key: g.value,
            type: "button",
            role: "tab",
            "aria-selected": e.window === g.value,
            class: R(["px-3 py-1 rounded-lg transition-colors", e.window === g.value ? "bg-white dark:bg-dark-700 shadow-sm text-gray-900 dark:text-white font-semibold" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"]),
            onClick: (f) => m("update:window", g.value)
          }, l(g.label), 11, Ce))), 128))
        ]),
        t("span", {
          class: R(["inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase", d.value])
        }, [
          t("span", {
            class: R(["w-1.5 h-1.5 rounded-full mr-1.5", o.value])
          }, null, 2),
          O(" " + l(s.value), 1)
        ], 2),
        t("button", {
          type: "button",
          class: "h-8 w-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-dark-700 transition-colors disabled:opacity-50",
          disabled: e.loading,
          title: n(v)("common.refresh"),
          onClick: b[0] || (b[0] = (g) => m("refresh"))
        }, [
          E(F, {
            name: "refresh",
            size: "md",
            class: R(e.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, $e),
        e.autoRefresh ? (i(), N(pe, {
          key: 0,
          enabled: e.autoRefresh.enabled.value,
          "interval-seconds": e.autoRefresh.intervalSeconds.value,
          countdown: e.autoRefresh.countdown.value,
          intervals: e.autoRefresh.intervals,
          "onUpdate:enabled": e.autoRefresh.setEnabled,
          "onUpdate:interval": e.autoRefresh.setInterval
        }, null, 8, ["enabled", "interval-seconds", "countdown", "intervals", "onUpdate:enabled", "onUpdate:interval"])) : D("", !0)
      ])
    ]));
  }
});
function Le() {
  var r;
  return ((r = K().cachedPublicSettings) == null ? void 0 : r.channel_monitor_show_quota) === !0;
}
const Re = { class: "mt-5 grid grid-cols-2 gap-2" }, Ee = { class: "rounded-xl p-3 bg-gray-50/80 dark:bg-dark-900/40 border border-gray-100 dark:border-dark-700/50" }, Ie = { class: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400" }, Te = { class: "mt-1.5 text-lg font-bold font-mono tabular-nums text-gray-900 dark:text-gray-100" }, Ve = { class: "text-xs font-normal text-gray-400 ml-0.5" }, De = { class: "rounded-xl p-3 bg-gray-50/80 dark:bg-dark-900/40 border border-gray-100 dark:border-dark-700/50" }, Be = { class: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400" }, ze = { class: "mt-1.5 text-lg font-bold font-mono tabular-nums text-gray-900 dark:text-gray-100" }, Ae = { class: "text-xs font-normal text-gray-400 ml-0.5" }, Me = /* @__PURE__ */ I({
  __name: "MonitorMetricPair",
  props: {
    primaryLabel: {},
    primaryValue: {},
    primaryUnit: {},
    primaryIcon: {},
    secondaryLabel: {},
    secondaryValue: {},
    secondaryUnit: {},
    secondaryIcon: {}
  },
  setup(e) {
    return (r, a) => (i(), u("div", Re, [
      t("div", Ee, [
        t("div", Ie, [
          E(F, {
            name: e.primaryIcon,
            size: "xs"
          }, null, 8, ["name"]),
          t("span", null, l(e.primaryLabel), 1)
        ]),
        t("div", Te, [
          O(l(e.primaryValue), 1),
          t("span", Ve, l(e.primaryUnit), 1)
        ])
      ]),
      t("div", De, [
        t("div", Be, [
          E(F, {
            name: e.secondaryIcon,
            size: "xs"
          }, null, 8, ["name"]),
          t("span", null, l(e.secondaryLabel), 1)
        ]),
        t("div", ze, [
          O(l(e.secondaryValue), 1),
          t("span", Ae, l(e.secondaryUnit), 1)
        ])
      ])
    ]));
  }
}), Ne = { class: "mt-3 flex items-end justify-between" }, Pe = { class: "text-[11px] uppercase tracking-widest text-gray-400" }, Ue = { class: "flex items-baseline gap-0.5" }, je = {
  key: 0,
  class: "mt-1 text-[11px] text-gray-400 text-right"
}, Oe = /* @__PURE__ */ I({
  __name: "MonitorAvailabilityRow",
  props: {
    windowLabel: {},
    value: {},
    samplesLabel: {}
  },
  setup(e) {
    const r = e, { t: a } = V(), m = $(() => r.value === null || Number.isNaN(r.value) ? a("monitorCommon.latencyEmpty") : r.value.toFixed(2)), v = $(() => {
      const c = re(r.value);
      return c ? { color: c } : { color: "rgb(156 163 175)" };
    });
    return (c, s) => (i(), u(T, null, [
      t("div", Ne, [
        t("div", Pe, l(e.windowLabel), 1),
        t("div", Ue, [
          t("span", {
            class: "text-3xl font-bold tabular-nums leading-none",
            style: H(v.value)
          }, l(m.value), 5),
          t("span", {
            class: "text-base font-semibold leading-none",
            style: H(v.value)
          }, "%", 4)
        ])
      ]),
      e.samplesLabel ? (i(), u("div", je, l(e.samplesLabel), 1)) : D("", !0)
    ], 64));
  }
}), Fe = { class: "mt-4 pt-3 border-t border-gray-100 dark:border-dark-700/60" }, He = { class: "flex justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2" }, qe = { class: "tabular-nums" }, We = {
  key: 0,
  class: "flex h-5 w-full items-center justify-center rounded border border-dashed border-gray-300 dark:border-dark-600 text-[10px] uppercase tracking-widest text-gray-400"
}, Ge = {
  key: 1,
  class: "flex items-end gap-[2px] h-5 w-full"
}, Ke = ["title"], Je = { class: "mt-1 flex justify-between text-[9px] uppercase tracking-widest text-gray-400" }, Qe = /* @__PURE__ */ I({
  __name: "MonitorTimeline",
  props: {
    buckets: { default: () => [] },
    countdownSeconds: {},
    length: { default: 60 },
    maintenance: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, { t: a } = V(), { statusLabel: m, formatLatency: v, formatRelativeTime: c } = J(), s = {
      operational: 100,
      degraded: 65,
      failed: 35,
      error: 35,
      empty: 15
    }, d = {
      operational: A("operational"),
      degraded: A("degraded"),
      failed: A("failed"),
      error: A("error"),
      empty: A(void 0)
    }, o = $(() => {
      const y = [...r.buckets ?? []].slice(0, r.length).reverse(), b = Math.max(0, r.length - y.length), g = [];
      for (let f = 0; f < b; f += 1)
        g.push({
          colorClass: d.empty,
          heightPct: s.empty,
          title: ""
        });
      for (const f of y) {
        const x = f.status, L = d[x] ?? d.empty, p = s[x] ?? s.empty, w = v(f.latency_ms), B = c(f.checked_at), P = m(f.status);
        g.push({
          colorClass: L,
          heightPct: p,
          title: `${B} · ${P} · ${w}ms`
        });
      }
      return g;
    });
    return (y, b) => (i(), u("div", Fe, [
      t("div", He, [
        t("span", null, l(n(a)("monitorCommon.history60pts", { n: e.length })), 1),
        t("span", qe, l(n(a)("monitorCommon.nextUpdateIn", { n: e.countdownSeconds })), 1)
      ]),
      e.maintenance ? (i(), u("div", We, l(n(a)("monitorCommon.maintenancePaused")), 1)) : (i(), u("div", Ge, [
        (i(!0), u(T, null, M(o.value, (g, f) => (i(), u("div", {
          key: f,
          class: R(["flex-1 min-w-0 rounded-sm", g.colorClass]),
          style: H({ height: g.heightPct + "%" }),
          title: g.title
        }, null, 14, Ke))), 128))
      ])),
      t("div", Je, [
        t("span", null, l(n(a)("monitorCommon.past")), 1),
        t("span", null, l(n(a)("monitorCommon.now")), 1)
      ])
    ]));
  }
}), Xe = { class: "flex items-start gap-3" }, Ye = { class: "flex-1 min-w-0" }, Ze = { class: "text-base font-semibold truncate text-gray-900 dark:text-gray-100" }, et = { class: "mt-0.5 flex items-center gap-1.5 min-w-0" }, tt = { class: "font-mono text-xs truncate text-gray-500 dark:text-gray-400" }, at = {
  key: 0,
  class: "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300 flex-shrink-0"
}, nt = /* @__PURE__ */ I({
  __name: "MonitorCard",
  props: {
    item: {},
    window: {},
    availabilityValue: {},
    countdownSeconds: {}
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const a = {
      openai: "text-zo-signal-600 dark:text-zo-signal-300",
      anthropic: "text-zo-alert-600 dark:text-zo-alert-300",
      gemini: "text-sky-600 dark:text-sky-300",
      grok: "text-zinc-700 dark:text-zinc-200",
      antigravity: "text-purple-600 dark:text-purple-300",
      kimi: "text-pink-600 dark:text-pink-300",
      zhipu: "text-indigo-600 dark:text-indigo-300",
      deepseek: "text-teal-600 dark:text-teal-300",
      opencode_go: "text-amber-700 dark:text-amber-300"
    }, m = e, v = r, { t: c } = V(), {
      statusLabel: s,
      statusBadgeClass: d,
      providerLabel: o,
      providerBadgeClass: y,
      formatLatency: b
    } = J(), g = $(
      () => a[m.item.provider] ?? "text-gray-500 dark:text-gray-300"
    ), f = $(
      () => Le() && !!m.item.latest_quota
    ), x = $(() => {
      const p = c(`channelStatus.windowTab.${m.window}`);
      return `${c("monitorCommon.availabilityPrefix")} · ${p}`;
    }), L = $(() => {
      var w;
      const p = ((w = m.item.extra_models) == null ? void 0 : w.length) ?? 0;
      if (p !== 0)
        return c("monitorCommon.extraModelsCount", { n: p });
    });
    return (p, w) => (i(), u("button", {
      type: "button",
      class: "group text-left p-5 rounded-2xl min-h-[280px] w-full bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-card dark:bg-dark-800/60 dark:border-dark-700/70 hover:-translate-y-1 hover:shadow-card-hover dark:hover:border-primary-500/30 hover:border-gray-300 transition-all duration-300 ease-out flex flex-col",
      onClick: w[0] || (w[0] = (B) => v("click"))
    }, [
      t("div", Xe, [
        t("span", {
          class: R(["w-9 h-9 rounded-xl ring-1 ring-black/5 dark:ring-white/10 grid place-items-center flex-shrink-0", [n(oe)(e.item.provider), g.value]])
        }, [
          E(ie, {
            provider: e.item.provider,
            size: 20
          }, null, 8, ["provider"])
        ], 2),
        t("div", Ye, [
          t("div", Ze, l(e.item.name), 1),
          t("div", et, [
            t("span", {
              class: R(["inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium flex-shrink-0", n(y)(e.item.provider)])
            }, l(n(o)(e.item.provider)), 3),
            t("span", tt, l(e.item.primary_model), 1),
            e.item.group_name ? (i(), u("span", at, l(e.item.group_name), 1)) : D("", !0)
          ])
        ]),
        t("span", {
          class: R(["px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0", n(d)(e.item.primary_status)])
        }, l(n(s)(e.item.primary_status)), 3)
      ]),
      E(Me, {
        "primary-icon": "bolt",
        "primary-label": n(c)("monitorCommon.dialogLatency"),
        "primary-value": n(b)(e.item.primary_latency_ms),
        "primary-unit": "ms",
        "secondary-icon": "globe",
        "secondary-label": n(c)("monitorCommon.endpointPing"),
        "secondary-value": n(b)(e.item.primary_ping_latency_ms),
        "secondary-unit": "ms"
      }, null, 8, ["primary-label", "primary-value", "secondary-label", "secondary-value"]),
      f.value ? (i(), N(de, {
        key: 0,
        snapshot: e.item.latest_quota,
        class: "mt-2"
      }, null, 8, ["snapshot"])) : D("", !0),
      w[1] || (w[1] = t("div", { class: "mt-4 border-t border-gray-100 dark:border-dark-700/60" }, null, -1)),
      E(Oe, {
        "window-label": x.value,
        value: e.availabilityValue,
        "samples-label": L.value
      }, null, 8, ["window-label", "value", "samples-label"]),
      E(Qe, {
        buckets: e.item.timeline,
        "countdown-seconds": e.countdownSeconds
      }, null, 8, ["buckets", "countdown-seconds"])
    ]));
  }
}), lt = {
  key: 0,
  class: "grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
}, st = {
  key: 2,
  class: "grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
}, rt = /* @__PURE__ */ I({
  __name: "MonitorCardGrid",
  props: {
    items: {},
    window: {},
    countdownSeconds: {},
    loading: { type: Boolean },
    detailCache: {}
  },
  emits: ["cardClick"],
  setup(e, { emit: r }) {
    const a = e, m = r, { t: v } = V();
    function c(s) {
      if (a.window === "7d")
        return s.availability_7d ?? null;
      const d = a.detailCache[s.id];
      if (!d) return null;
      const o = d.models.find((y) => y.model === s.primary_model);
      return o ? a.window === "15d" ? o.availability_15d ?? null : o.availability_30d ?? null : null;
    }
    return (s, d) => (i(), u("div", null, [
      e.loading && e.items.length === 0 ? (i(), u("div", lt, [
        (i(), u(T, null, M(6, (o) => t("div", {
          key: o,
          class: "p-5 rounded-2xl min-h-[280px] bg-white/70 dark:bg-dark-800/60 border border-gray-200/80 dark:border-dark-700/70 animate-pulse"
        }, [...d[0] || (d[0] = [
          ne('<div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="flex-1 space-y-2"><div class="h-4 w-2/3 rounded bg-gray-200 dark:bg-dark-700"></div><div class="h-3 w-1/2 rounded bg-gray-200 dark:bg-dark-700"></div></div><div class="h-6 w-16 rounded-full bg-gray-200 dark:bg-dark-700"></div></div><div class="mt-5 grid grid-cols-2 gap-2"><div class="h-16 rounded-xl bg-gray-100 dark:bg-dark-900/40"></div><div class="h-16 rounded-xl bg-gray-100 dark:bg-dark-900/40"></div></div><div class="mt-6 h-5 w-full rounded bg-gray-100 dark:bg-dark-900/40"></div>', 3)
        ])])), 64))
      ])) : e.items.length === 0 ? (i(), N(ue, {
        key: 1,
        title: n(v)("channelStatus.empty.title"),
        description: n(v)("channelStatus.empty.description")
      }, null, 8, ["title", "description"])) : (i(), u("div", st, [
        (i(!0), u(T, null, M(e.items, (o) => (i(), N(nt, {
          key: o.id,
          item: o,
          window: e.window,
          "availability-value": c(o),
          "countdown-seconds": e.countdownSeconds,
          onClick: (y) => m("cardClick", o)
        }, null, 8, ["item", "window", "availability-value", "countdown-seconds", "onClick"]))), 128))
      ]))
    ]));
  }
}), ot = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-500"
}, it = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-500"
}, dt = {
  key: 2,
  class: "overflow-x-auto"
}, ct = { class: "w-full text-left text-sm" }, ut = { class: "border-b border-gray-200 dark:border-dark-700" }, mt = { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, vt = { class: "py-2 pr-3" }, yt = { class: "py-2 pr-3" }, gt = { class: "py-2 pr-3" }, ft = { class: "py-2 pr-3" }, ht = { class: "py-2 pr-3" }, bt = { class: "py-2 pr-3" }, xt = { class: "py-2 pr-3" }, pt = { class: "py-2 pr-3 font-medium text-gray-900 dark:text-gray-100" }, wt = { class: "py-2 pr-3" }, kt = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, _t = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, Ct = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, $t = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, St = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, Lt = { class: "flex justify-end" }, Rt = /* @__PURE__ */ I({
  __name: "MonitorDetailDialog",
  props: {
    show: { type: Boolean },
    monitorId: {},
    title: {}
  },
  emits: ["close"],
  setup(e) {
    const r = e, { t: a } = V(), m = K(), { statusLabel: v, statusBadgeClass: c, formatLatency: s, formatPercent: d } = J(), o = C(null), y = C(!1);
    async function b(g) {
      o.value = null, y.value = !0;
      try {
        o.value = await te(g);
      } catch (f) {
        m.showError(W(f, a("channelStatus.detailLoadError")));
      } finally {
        y.value = !1;
      }
    }
    return q(
      () => [r.show, r.monitorId],
      ([g, f]) => {
        if (!g) {
          o.value = null;
          return;
        }
        f != null && b(f);
      },
      { immediate: !0 }
    ), (g, f) => (i(), N(me, {
      show: e.show,
      title: e.title,
      width: "wide",
      onClose: f[1] || (f[1] = (x) => g.$emit("close"))
    }, {
      footer: X(() => [
        t("div", Lt, [
          t("button", {
            onClick: f[0] || (f[0] = (x) => g.$emit("close")),
            class: "btn btn-secondary"
          }, l(n(a)("channelStatus.closeDetail")), 1)
        ])
      ]),
      default: X(() => [
        y.value ? (i(), u("div", ot, l(n(a)("common.loading")), 1)) : o.value ? (i(), u("div", dt, [
          t("table", ct, [
            t("thead", ut, [
              t("tr", mt, [
                t("th", vt, l(n(a)("channelStatus.detailColumns.model")), 1),
                t("th", yt, l(n(a)("channelStatus.detailColumns.latestStatus")), 1),
                t("th", gt, l(n(a)("channelStatus.detailColumns.latestLatency")), 1),
                t("th", ft, l(n(a)("channelStatus.detailColumns.availability7d")), 1),
                t("th", ht, l(n(a)("channelStatus.detailColumns.availability15d")), 1),
                t("th", bt, l(n(a)("channelStatus.detailColumns.availability30d")), 1),
                t("th", xt, l(n(a)("channelStatus.detailColumns.avgLatency7d")), 1)
              ])
            ]),
            t("tbody", null, [
              (i(!0), u(T, null, M(o.value.models, (x) => (i(), u("tr", {
                key: x.model,
                class: "border-b border-gray-100 dark:border-dark-800"
              }, [
                t("td", pt, l(x.model), 1),
                t("td", wt, [
                  t("span", {
                    class: R(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", n(c)(x.latest_status)])
                  }, l(n(v)(x.latest_status)), 3)
                ]),
                t("td", kt, l(n(s)(x.latest_latency_ms)), 1),
                t("td", _t, l(n(d)(x.availability_7d)), 1),
                t("td", Ct, l(n(d)(x.availability_15d)), 1),
                t("td", $t, l(n(d)(x.availability_30d)), 1),
                t("td", St, l(n(s)(x.avg_latency_7d_ms)), 1)
              ]))), 128))
            ])
          ])
        ])) : (i(), u("div", it, l(n(a)("channelStatus.detailLoadError")), 1))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
});
function Et(e) {
  const {
    storageKey: r,
    intervals: a = [5, 10, 15, 30],
    defaultInterval: m,
    onRefresh: v,
    shouldPause: c
  } = e, s = C(!1), d = C(m ?? a[a.length - 1]), o = C(0), y = C(!1);
  let b;
  function g() {
    try {
      const S = localStorage.getItem(r);
      if (!S) return;
      const U = JSON.parse(S);
      s.value = U.enabled === !0;
      const j = Number(U.interval_seconds);
      a.includes(j) && (d.value = j);
    } catch {
    }
  }
  function f() {
    try {
      localStorage.setItem(r, JSON.stringify({
        enabled: s.value,
        interval_seconds: d.value
      }));
    } catch {
    }
  }
  async function x() {
    if (s.value && !(c != null && c()) && !y.value) {
      if (o.value <= 1) {
        o.value = d.value, y.value = !0;
        try {
          await v();
        } finally {
          y.value = !1;
        }
        return;
      }
      o.value -= 1;
    }
  }
  function L() {
    b === void 0 && (b = setInterval(x, 1e3));
  }
  function p() {
    b !== void 0 && (clearInterval(b), b = void 0);
  }
  function w(S) {
    s.value = S, f(), S ? (o.value = d.value, L()) : (p(), o.value = 0);
  }
  function B(S) {
    d.value = S, f(), s.value && (o.value = S);
  }
  function P() {
    o.value = d.value;
  }
  return g(), G(p), {
    enabled: s,
    intervalSeconds: d,
    countdown: o,
    fetching: y,
    intervals: a,
    setEnabled: w,
    setInterval: B,
    resetCountdown: P,
    start: L,
    stop: p
  };
}
const It = /* @__PURE__ */ I({
  __name: "ChannelStatusV1View",
  setup(e) {
    const { t: r } = V(), a = K(), m = C([]), v = C(!1), c = C("7d"), s = le({}), d = C(!1), o = C(null);
    let y = null;
    const b = Et({
      storageKey: "channel-status-auto-refresh",
      intervals: [30, 60, 120],
      defaultInterval: Y,
      onRefresh: w,
      shouldPause: () => document.hidden || v.value
    }), g = b.countdown, f = $(() => {
      if (m.value.length === 0) return "unavailable";
      let h = !1, _ = !1;
      for (const k of m.value) {
        if (k.primary_status === "failed" || k.primary_status === "error") return "failed";
        k.primary_status !== ce && (k.primary_status === "degraded" ? _ = !0 : h = !0);
      }
      return _ ? "degraded" : h ? "unavailable" : "operational";
    }), x = $(() => {
      var h;
      return ((h = o.value) == null ? void 0 : h.name) || r("channelStatus.detailTitle");
    });
    async function L(h = !1) {
      y && y.abort();
      const _ = new AbortController();
      y = _, h || (v.value = !0);
      try {
        const k = await ve({ signal: _.signal });
        if (_.signal.aborted || y !== _) return;
        m.value = k.items || [];
      } catch (k) {
        const z = k;
        if ((z == null ? void 0 : z.name) === "AbortError" || (z == null ? void 0 : z.code) === "ERR_CANCELED") return;
        a.showError(W(k, r("channelStatus.loadError")));
      } finally {
        y === _ && (h || (v.value = !1), b.resetCountdown(), y = null);
      }
    }
    async function p(h = !1) {
      c.value !== "7d" && await Promise.all(m.value.map((_) => P(_.id, h)));
    }
    async function w() {
      await L(!0), await p(!0);
    }
    async function B() {
      await L(!1), await p(!0);
    }
    async function P(h, _ = !1) {
      if (!(!_ && s[h]))
        try {
          s[h] = await te(h);
        } catch (k) {
          a.showError(W(k, r("channelStatus.detailLoadError")));
        }
    }
    async function S() {
      await p(!1);
    }
    async function U(h) {
      c.value = h, await S();
    }
    function j(h) {
      o.value = h, d.value = !0;
    }
    function ae() {
      d.value = !1, o.value = null;
    }
    function Q() {
      document.visibilityState === "visible" && b.enabled.value && w();
    }
    return q(m, () => {
      S();
    }), q(
      () => {
        var h;
        return (h = a.cachedPublicSettings) == null ? void 0 : h.channel_monitor_enabled;
      },
      (h) => {
        h === !1 ? b.stop() : b.enabled.value && b.start();
      }
    ), ee(() => {
      var h;
      L(!1), document.addEventListener("visibilitychange", Q), ((h = a.cachedPublicSettings) == null ? void 0 : h.channel_monitor_enabled) !== !1 && b.setEnabled(!0);
    }), G(() => {
      y && y.abort(), document.removeEventListener("visibilitychange", Q);
    }), (h, _) => {
      var k;
      return i(), u(T, null, [
        E(Se, {
          "overall-status": f.value,
          "interval-seconds": n(Y),
          window: c.value,
          loading: v.value,
          "auto-refresh": n(b),
          "onUpdate:window": U,
          onRefresh: B
        }, null, 8, ["overall-status", "interval-seconds", "window", "loading", "auto-refresh"]),
        E(rt, {
          items: m.value,
          window: c.value,
          "countdown-seconds": n(g),
          loading: v.value,
          "detail-cache": s,
          onCardClick: j
        }, null, 8, ["items", "window", "countdown-seconds", "loading", "detail-cache"]),
        E(Rt, {
          show: d.value,
          "monitor-id": ((k = o.value) == null ? void 0 : k.id) ?? null,
          title: x.value,
          onClose: ae
        }, null, 8, ["show", "monitor-id", "title"])
      ], 64);
    };
  }
}), At = /* @__PURE__ */ I({
  __name: "ChannelStatusView",
  setup(e) {
    return (r, a) => (i(), N(It));
  }
});
export {
  At as default
};
