import { B as St, E as fe, F as Rt, u as Pe, G as Tt, H as Lt, _ as Dt, t as Et, S as It, p as Ye, I as zt, J as Nt, K as Bt, L as Pt, N as Ft, O as At, Q as jt, R as Ot, T as Wt, z as qt } from "./channelMonitorV2-Bm8vNoi3.js";
import { a as tt, d as Q, u as le, r as z, c as Fe, K as Ve, m as o, f as i, g as e, i as l, s as R, h as n, l as S, F as q, j as Z, p as k, k as J, q as j, _ as ce, A as ae, D as de, L as Ut, e as Ae, w as ne, v as Be, b as at, n as Je, M as nt, T as Ht, z as Qe, B as je, a0 as Gt, a1 as Zt, C as Kt } from "./cnProviderAdminLeaf-DOTfdkE4.js";
import { a as ke } from "./apiError-i2TfMBqu.js";
import { _ as Oe } from "./EmptyState.vue_vue_type_script_setup_true_lang-BTP-DF39.js";
import { _ as Xt, S as Yt } from "./BaseDialog.vue_vue_type_script_setup_true_lang-B6Pfcffn.js";
import { L as et } from "./LoadingSpinner-CeyzZQ7Y.js";
import { h as Jt } from "./format-D_aVlXs8.js";
import { C as Qt, b as ea, L as ta, P as aa, c as na, d as la, p as ra, a as oa, i as sa, e as ia } from "./index-BIadwKts.js";
async function ca(t) {
  const { data: a } = await tt.get("/channel-monitors", {
    signal: t == null ? void 0 : t.signal
  });
  return a;
}
async function lt(t) {
  const { data: a } = await tt.get(`/channel-monitors/${t}/status`);
  return a;
}
const ua = ["title"], da = {
  key: 0,
  class: "absolute right-0 z-20 mt-1 w-44 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, ma = { class: "p-1.5" }, ha = {
  key: 0,
  class: "h-4 w-4 text-primary-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, pa = ["onClick"], ga = {
  key: 0,
  class: "h-4 w-4 text-primary-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, fa = /* @__PURE__ */ Q({
  __name: "AutoRefreshButton",
  props: {
    enabled: { type: Boolean },
    intervalSeconds: {},
    countdown: {},
    intervals: {}
  },
  emits: ["update:enabled", "update:interval"],
  setup(t) {
    const { t: a } = le(), c = z(!1), m = z(null);
    function d(r) {
      m.value && !m.value.contains(r.target) && (c.value = !1);
    }
    return Fe(() => document.addEventListener("click", d)), Ve(() => document.removeEventListener("click", d)), (r, v) => (o(), i("div", {
      class: "relative",
      ref_key: "dropdownRef",
      ref: m
    }, [
      e("button", {
        onClick: v[0] || (v[0] = (b) => c.value = !c.value),
        class: "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300 dark:hover:bg-dark-700",
        title: l(a)("common.autoRefresh.title")
      }, [
        (o(), i("svg", {
          class: R(["h-3.5 w-3.5", t.enabled ? "animate-spin" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, [...v[2] || (v[2] = [
          e("path", {
            "fill-rule": "evenodd",
            d: "M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.312a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm-10.624-2.848a5.5 5.5 0 019.201-2.466l.312.311H11.768a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V3.537a.75.75 0 00-1.5 0v2.034l-.312-.312A7 7 0 002.628 8.397a.75.75 0 001.449.39z",
            "clip-rule": "evenodd"
          }, null, -1)
        ])], 2)),
        e("span", null, n(t.enabled ? l(a)("common.autoRefresh.countdown", { seconds: t.countdown }) : l(a)("common.autoRefresh.title")), 1)
      ], 8, ua),
      c.value ? (o(), i("div", da, [
        e("div", ma, [
          e("button", {
            onClick: v[1] || (v[1] = (b) => r.$emit("update:enabled", !t.enabled)),
            class: "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
          }, [
            e("span", null, n(l(a)("common.autoRefresh.enable")), 1),
            t.enabled ? (o(), i("svg", ha, [...v[3] || (v[3] = [
              e("path", {
                "fill-rule": "evenodd",
                d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                "clip-rule": "evenodd"
              }, null, -1)
            ])])) : S("", !0)
          ]),
          v[5] || (v[5] = e("div", { class: "my-1 border-t border-gray-100 dark:border-dark-700" }, null, -1)),
          (o(!0), i(q, null, Z(t.intervals, (b) => (o(), i("button", {
            key: b,
            onClick: (y) => r.$emit("update:interval", b),
            class: "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
          }, [
            e("span", null, n(l(a)("common.autoRefresh.seconds", { n: b })), 1),
            t.intervalSeconds === b ? (o(), i("svg", ga, [...v[4] || (v[4] = [
              e("path", {
                "fill-rule": "evenodd",
                d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                "clip-rule": "evenodd"
              }, null, -1)
            ])])) : S("", !0)
          ], 8, pa))), 128))
        ])
      ])) : S("", !0)
    ], 512));
  }
}), va = { class: "py-3 md:py-4" }, ba = { class: "flex items-center justify-end gap-3 flex-wrap" }, xa = {
  role: "tablist",
  class: "inline-flex p-0.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200/60 dark:border-dark-700/60 text-xs"
}, ya = ["aria-selected", "onClick"], ka = ["disabled", "title"], _a = /* @__PURE__ */ Q({
  __name: "MonitorHero",
  props: {
    overallStatus: {},
    intervalSeconds: {},
    window: {},
    loading: { type: Boolean },
    autoRefresh: {}
  },
  emits: ["update:window", "refresh"],
  setup(t, { emit: a }) {
    const c = t, m = a, { t: d } = le(), r = k(() => [
      { value: "7d", label: d("channelStatus.windowTab.7d") },
      { value: "15d", label: d("channelStatus.windowTab.15d") },
      { value: "30d", label: d("channelStatus.windowTab.30d") }
    ]), v = k(() => d(`channelStatus.overall.${c.overallStatus}`)), b = k(() => St(c.overallStatus)), y = k(() => fe(c.overallStatus, !0));
    return (g, T) => (o(), i("section", va, [
      e("div", ba, [
        e("div", xa, [
          (o(!0), i(q, null, Z(r.value, (V) => (o(), i("button", {
            key: V.value,
            type: "button",
            role: "tab",
            "aria-selected": t.window === V.value,
            class: R(["px-3 py-1 rounded-lg transition-colors", t.window === V.value ? "bg-white dark:bg-dark-700 shadow-sm text-gray-900 dark:text-white font-semibold" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"]),
            onClick: (I) => m("update:window", V.value)
          }, n(V.label), 11, ya))), 128))
        ]),
        e("span", {
          class: R(["inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase", b.value])
        }, [
          e("span", {
            class: R(["w-1.5 h-1.5 rounded-full mr-1.5", y.value])
          }, null, 2),
          J(" " + n(v.value), 1)
        ], 2),
        e("button", {
          type: "button",
          class: "h-8 w-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-dark-700 transition-colors disabled:opacity-50",
          disabled: t.loading,
          title: l(d)("common.refresh"),
          onClick: T[0] || (T[0] = (V) => m("refresh"))
        }, [
          j(ce, {
            name: "refresh",
            size: "md",
            class: R(t.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, ka),
        t.autoRefresh ? (o(), ae(fa, {
          key: 0,
          enabled: t.autoRefresh.enabled.value,
          "interval-seconds": t.autoRefresh.intervalSeconds.value,
          countdown: t.autoRefresh.countdown.value,
          intervals: t.autoRefresh.intervals,
          "onUpdate:enabled": t.autoRefresh.setEnabled,
          "onUpdate:interval": t.autoRefresh.setInterval
        }, null, 8, ["enabled", "interval-seconds", "countdown", "intervals", "onUpdate:enabled", "onUpdate:interval"])) : S("", !0)
      ])
    ]));
  }
}), wa = { class: "mt-5 grid grid-cols-2 gap-2" }, Ma = { class: "rounded-xl p-3 bg-gray-50/80 dark:bg-dark-900/40 border border-gray-100 dark:border-dark-700/50" }, $a = { class: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400" }, Va = { class: "mt-1.5 text-lg font-bold font-mono tabular-nums text-gray-900 dark:text-gray-100" }, Ca = { class: "text-xs font-normal text-gray-400 ml-0.5" }, Sa = { class: "rounded-xl p-3 bg-gray-50/80 dark:bg-dark-900/40 border border-gray-100 dark:border-dark-700/50" }, Ra = { class: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400" }, Ta = { class: "mt-1.5 text-lg font-bold font-mono tabular-nums text-gray-900 dark:text-gray-100" }, La = { class: "text-xs font-normal text-gray-400 ml-0.5" }, Da = /* @__PURE__ */ Q({
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
  setup(t) {
    return (a, c) => (o(), i("div", wa, [
      e("div", Ma, [
        e("div", $a, [
          j(ce, {
            name: t.primaryIcon,
            size: "xs"
          }, null, 8, ["name"]),
          e("span", null, n(t.primaryLabel), 1)
        ]),
        e("div", Va, [
          J(n(t.primaryValue), 1),
          e("span", Ca, n(t.primaryUnit), 1)
        ])
      ]),
      e("div", Sa, [
        e("div", Ra, [
          j(ce, {
            name: t.secondaryIcon,
            size: "xs"
          }, null, 8, ["name"]),
          e("span", null, n(t.secondaryLabel), 1)
        ]),
        e("div", Ta, [
          J(n(t.secondaryValue), 1),
          e("span", La, n(t.secondaryUnit), 1)
        ])
      ])
    ]));
  }
}), Ea = { class: "mt-3 flex items-end justify-between" }, Ia = { class: "text-[11px] uppercase tracking-widest text-gray-400" }, za = { class: "flex items-baseline gap-0.5" }, Na = {
  key: 0,
  class: "mt-1 text-[11px] text-gray-400 text-right"
}, Ba = /* @__PURE__ */ Q({
  __name: "MonitorAvailabilityRow",
  props: {
    windowLabel: {},
    value: {},
    samplesLabel: {}
  },
  setup(t) {
    const a = t, { t: c } = le(), m = k(() => a.value === null || Number.isNaN(a.value) ? c("monitorCommon.latencyEmpty") : a.value.toFixed(2)), d = k(() => {
      const r = Rt(a.value);
      return r ? { color: r } : { color: "rgb(156 163 175)" };
    });
    return (r, v) => (o(), i(q, null, [
      e("div", Ea, [
        e("div", Ia, n(t.windowLabel), 1),
        e("div", za, [
          e("span", {
            class: "text-3xl font-bold tabular-nums leading-none",
            style: de(d.value)
          }, n(m.value), 5),
          e("span", {
            class: "text-base font-semibold leading-none",
            style: de(d.value)
          }, "%", 4)
        ])
      ]),
      t.samplesLabel ? (o(), i("div", Na, n(t.samplesLabel), 1)) : S("", !0)
    ], 64));
  }
}), Pa = { class: "mt-4 pt-3 border-t border-gray-100 dark:border-dark-700/60" }, Fa = { class: "flex justify-between text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2" }, Aa = { class: "tabular-nums" }, ja = {
  key: 0,
  class: "flex h-5 w-full items-center justify-center rounded border border-dashed border-gray-300 dark:border-dark-600 text-[10px] uppercase tracking-widest text-gray-400"
}, Oa = {
  key: 1,
  class: "flex items-end gap-[2px] h-5 w-full"
}, Wa = ["title"], qa = { class: "mt-1 flex justify-between text-[9px] uppercase tracking-widest text-gray-400" }, Ua = /* @__PURE__ */ Q({
  __name: "MonitorTimeline",
  props: {
    buckets: { default: () => [] },
    countdownSeconds: {},
    length: { default: 60 },
    maintenance: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, { t: c } = le(), { statusLabel: m, formatLatency: d, formatRelativeTime: r } = Pe(), v = {
      operational: 100,
      degraded: 65,
      failed: 35,
      error: 35,
      empty: 15
    }, b = {
      operational: fe("operational"),
      degraded: fe("degraded"),
      failed: fe("failed"),
      error: fe("error"),
      empty: fe(void 0)
    }, y = k(() => {
      const g = [...a.buckets ?? []].slice(0, a.length).reverse(), T = Math.max(0, a.length - g.length), V = [];
      for (let I = 0; I < T; I += 1)
        V.push({
          colorClass: b.empty,
          heightPct: v.empty,
          title: ""
        });
      for (const I of g) {
        const A = I.status, K = b[A] ?? b.empty, h = v[A] ?? v.empty, w = d(I.latency_ms), F = r(I.checked_at), O = m(I.status);
        V.push({
          colorClass: K,
          heightPct: h,
          title: `${F} · ${O} · ${w}ms`
        });
      }
      return V;
    });
    return (g, T) => (o(), i("div", Pa, [
      e("div", Fa, [
        e("span", null, n(l(c)("monitorCommon.history60pts", { n: t.length })), 1),
        e("span", Aa, n(l(c)("monitorCommon.nextUpdateIn", { n: t.countdownSeconds })), 1)
      ]),
      t.maintenance ? (o(), i("div", ja, n(l(c)("monitorCommon.maintenancePaused")), 1)) : (o(), i("div", Oa, [
        (o(!0), i(q, null, Z(y.value, (V, I) => (o(), i("div", {
          key: I,
          class: R(["flex-1 min-w-0 rounded-sm", V.colorClass]),
          style: de({ height: V.heightPct + "%" }),
          title: V.title
        }, null, 14, Wa))), 128))
      ])),
      e("div", qa, [
        e("span", null, n(l(c)("monitorCommon.past")), 1),
        e("span", null, n(l(c)("monitorCommon.now")), 1)
      ])
    ]));
  }
}), Ha = { class: "flex items-start gap-3" }, Ga = { class: "flex-1 min-w-0" }, Za = { class: "text-base font-semibold truncate text-gray-900 dark:text-gray-100" }, Ka = { class: "mt-0.5 flex items-center gap-1.5 min-w-0" }, Xa = { class: "font-mono text-xs truncate text-gray-500 dark:text-gray-400" }, Ya = {
  key: 0,
  class: "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300 flex-shrink-0"
}, Ja = /* @__PURE__ */ Q({
  __name: "MonitorCard",
  props: {
    item: {},
    window: {},
    availabilityValue: {},
    countdownSeconds: {}
  },
  emits: ["click"],
  setup(t, { emit: a }) {
    const c = {
      openai: "text-zo-signal-600 dark:text-zo-signal-300",
      anthropic: "text-zo-alert-600 dark:text-zo-alert-300",
      gemini: "text-sky-600 dark:text-sky-300",
      grok: "text-zinc-700 dark:text-zinc-200",
      antigravity: "text-purple-600 dark:text-purple-300",
      kimi: "text-pink-600 dark:text-pink-300",
      zhipu: "text-indigo-600 dark:text-indigo-300",
      deepseek: "text-teal-600 dark:text-teal-300",
      opencode_go: "text-amber-700 dark:text-amber-300"
    }, m = t, d = a, { t: r } = le(), {
      statusLabel: v,
      statusBadgeClass: b,
      providerLabel: y,
      providerBadgeClass: g,
      formatLatency: T
    } = Pe(), V = k(
      () => c[m.item.provider] ?? "text-gray-500 dark:text-gray-300"
    ), I = k(
      () => Tt() && !!m.item.latest_quota
    ), A = k(() => {
      const h = r(`channelStatus.windowTab.${m.window}`);
      return `${r("monitorCommon.availabilityPrefix")} · ${h}`;
    }), K = k(() => {
      var w;
      const h = ((w = m.item.extra_models) == null ? void 0 : w.length) ?? 0;
      if (h !== 0)
        return r("monitorCommon.extraModelsCount", { n: h });
    });
    return (h, w) => (o(), i("button", {
      type: "button",
      class: "group text-left p-5 rounded-2xl min-h-[280px] w-full bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-card dark:bg-dark-800/60 dark:border-dark-700/70 hover:-translate-y-1 hover:shadow-card-hover dark:hover:border-primary-500/30 hover:border-gray-300 transition-all duration-300 ease-out flex flex-col",
      onClick: w[0] || (w[0] = (F) => d("click"))
    }, [
      e("div", Ha, [
        e("span", {
          class: R(["w-9 h-9 rounded-xl ring-1 ring-black/5 dark:ring-white/10 grid place-items-center flex-shrink-0", [l(Lt)(t.item.provider), V.value]])
        }, [
          j(Dt, {
            provider: t.item.provider,
            size: 20
          }, null, 8, ["provider"])
        ], 2),
        e("div", Ga, [
          e("div", Za, n(t.item.name), 1),
          e("div", Ka, [
            e("span", {
              class: R(["inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium flex-shrink-0", l(g)(t.item.provider)])
            }, n(l(y)(t.item.provider)), 3),
            e("span", Xa, n(t.item.primary_model), 1),
            t.item.group_name ? (o(), i("span", Ya, n(t.item.group_name), 1)) : S("", !0)
          ])
        ]),
        e("span", {
          class: R(["px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0", l(b)(t.item.primary_status)])
        }, n(l(v)(t.item.primary_status)), 3)
      ]),
      j(Da, {
        "primary-icon": "bolt",
        "primary-label": l(r)("monitorCommon.dialogLatency"),
        "primary-value": l(T)(t.item.primary_latency_ms),
        "primary-unit": "ms",
        "secondary-icon": "globe",
        "secondary-label": l(r)("monitorCommon.endpointPing"),
        "secondary-value": l(T)(t.item.primary_ping_latency_ms),
        "secondary-unit": "ms"
      }, null, 8, ["primary-label", "primary-value", "secondary-label", "secondary-value"]),
      I.value ? (o(), ae(Et, {
        key: 0,
        snapshot: t.item.latest_quota,
        class: "mt-2"
      }, null, 8, ["snapshot"])) : S("", !0),
      w[1] || (w[1] = e("div", { class: "mt-4 border-t border-gray-100 dark:border-dark-700/60" }, null, -1)),
      j(Ba, {
        "window-label": A.value,
        value: t.availabilityValue,
        "samples-label": K.value
      }, null, 8, ["window-label", "value", "samples-label"]),
      j(Ua, {
        buckets: t.item.timeline,
        "countdown-seconds": t.countdownSeconds
      }, null, 8, ["buckets", "countdown-seconds"])
    ]));
  }
}), Qa = {
  key: 0,
  class: "grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
}, en = {
  key: 2,
  class: "grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
}, tn = /* @__PURE__ */ Q({
  __name: "MonitorCardGrid",
  props: {
    items: {},
    window: {},
    countdownSeconds: {},
    loading: { type: Boolean },
    detailCache: {}
  },
  emits: ["cardClick"],
  setup(t, { emit: a }) {
    const c = t, m = a, { t: d } = le();
    function r(v) {
      if (c.window === "7d")
        return v.availability_7d ?? null;
      const b = c.detailCache[v.id];
      if (!b) return null;
      const y = b.models.find((g) => g.model === v.primary_model);
      return y ? c.window === "15d" ? y.availability_15d ?? null : y.availability_30d ?? null : null;
    }
    return (v, b) => (o(), i("div", null, [
      t.loading && t.items.length === 0 ? (o(), i("div", Qa, [
        (o(), i(q, null, Z(6, (y) => e("div", {
          key: y,
          class: "p-5 rounded-2xl min-h-[280px] bg-white/70 dark:bg-dark-800/60 border border-gray-200/80 dark:border-dark-700/70 animate-pulse"
        }, [...b[0] || (b[0] = [
          Ut('<div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-gray-200 dark:bg-dark-700"></div><div class="flex-1 space-y-2"><div class="h-4 w-2/3 rounded bg-gray-200 dark:bg-dark-700"></div><div class="h-3 w-1/2 rounded bg-gray-200 dark:bg-dark-700"></div></div><div class="h-6 w-16 rounded-full bg-gray-200 dark:bg-dark-700"></div></div><div class="mt-5 grid grid-cols-2 gap-2"><div class="h-16 rounded-xl bg-gray-100 dark:bg-dark-900/40"></div><div class="h-16 rounded-xl bg-gray-100 dark:bg-dark-900/40"></div></div><div class="mt-6 h-5 w-full rounded bg-gray-100 dark:bg-dark-900/40"></div>', 3)
        ])])), 64))
      ])) : t.items.length === 0 ? (o(), ae(Oe, {
        key: 1,
        title: l(d)("channelStatus.empty.title"),
        description: l(d)("channelStatus.empty.description")
      }, null, 8, ["title", "description"])) : (o(), i("div", en, [
        (o(!0), i(q, null, Z(t.items, (y) => (o(), ae(Ja, {
          key: y.id,
          item: y,
          window: t.window,
          "availability-value": r(y),
          "countdown-seconds": t.countdownSeconds,
          onClick: (g) => m("cardClick", y)
        }, null, 8, ["item", "window", "availability-value", "countdown-seconds", "onClick"]))), 128))
      ]))
    ]));
  }
}), an = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-500"
}, nn = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-500"
}, ln = {
  key: 2,
  class: "overflow-x-auto"
}, rn = { class: "w-full text-left text-sm" }, on = { class: "border-b border-gray-200 dark:border-dark-700" }, sn = { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, cn = { class: "py-2 pr-3" }, un = { class: "py-2 pr-3" }, dn = { class: "py-2 pr-3" }, mn = { class: "py-2 pr-3" }, hn = { class: "py-2 pr-3" }, pn = { class: "py-2 pr-3" }, gn = { class: "py-2 pr-3" }, fn = { class: "py-2 pr-3 font-medium text-gray-900 dark:text-gray-100" }, vn = { class: "py-2 pr-3" }, bn = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, xn = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, yn = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, kn = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, _n = { class: "py-2 pr-3 text-gray-700 dark:text-gray-300" }, wn = { class: "flex justify-end" }, Mn = /* @__PURE__ */ Q({
  __name: "MonitorDetailDialog",
  props: {
    show: { type: Boolean },
    monitorId: {},
    title: {}
  },
  emits: ["close"],
  setup(t) {
    const a = t, { t: c } = le(), m = Ae(), { statusLabel: d, statusBadgeClass: r, formatLatency: v, formatPercent: b } = Pe(), y = z(null), g = z(!1);
    async function T(V) {
      y.value = null, g.value = !0;
      try {
        y.value = await lt(V);
      } catch (I) {
        m.showError(ke(I, c("channelStatus.detailLoadError")));
      } finally {
        g.value = !1;
      }
    }
    return ne(
      () => [a.show, a.monitorId],
      ([V, I]) => {
        if (!V) {
          y.value = null;
          return;
        }
        I != null && T(I);
      },
      { immediate: !0 }
    ), (V, I) => (o(), ae(Xt, {
      show: t.show,
      title: t.title,
      width: "wide",
      onClose: I[1] || (I[1] = (A) => V.$emit("close"))
    }, {
      footer: Be(() => [
        e("div", wn, [
          e("button", {
            onClick: I[0] || (I[0] = (A) => V.$emit("close")),
            class: "btn btn-secondary"
          }, n(l(c)("channelStatus.closeDetail")), 1)
        ])
      ]),
      default: Be(() => [
        g.value ? (o(), i("div", an, n(l(c)("common.loading")), 1)) : y.value ? (o(), i("div", ln, [
          e("table", rn, [
            e("thead", on, [
              e("tr", sn, [
                e("th", cn, n(l(c)("channelStatus.detailColumns.model")), 1),
                e("th", un, n(l(c)("channelStatus.detailColumns.latestStatus")), 1),
                e("th", dn, n(l(c)("channelStatus.detailColumns.latestLatency")), 1),
                e("th", mn, n(l(c)("channelStatus.detailColumns.availability7d")), 1),
                e("th", hn, n(l(c)("channelStatus.detailColumns.availability15d")), 1),
                e("th", pn, n(l(c)("channelStatus.detailColumns.availability30d")), 1),
                e("th", gn, n(l(c)("channelStatus.detailColumns.avgLatency7d")), 1)
              ])
            ]),
            e("tbody", null, [
              (o(!0), i(q, null, Z(y.value.models, (A) => (o(), i("tr", {
                key: A.model,
                class: "border-b border-gray-100 dark:border-dark-800"
              }, [
                e("td", fn, n(A.model), 1),
                e("td", vn, [
                  e("span", {
                    class: R(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", l(r)(A.latest_status)])
                  }, n(l(d)(A.latest_status)), 3)
                ]),
                e("td", bn, n(l(v)(A.latest_latency_ms)), 1),
                e("td", xn, n(l(b)(A.availability_7d)), 1),
                e("td", yn, n(l(b)(A.availability_15d)), 1),
                e("td", kn, n(l(b)(A.availability_30d)), 1),
                e("td", _n, n(l(v)(A.avg_latency_7d_ms)), 1)
              ]))), 128))
            ])
          ])
        ])) : (o(), i("div", nn, n(l(c)("channelStatus.detailLoadError")), 1))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
});
function $n(t) {
  const {
    storageKey: a,
    intervals: c = [5, 10, 15, 30],
    defaultInterval: m,
    onRefresh: d,
    shouldPause: r
  } = t, v = z(!1), b = z(m ?? c[c.length - 1]), y = z(0), g = z(!1);
  let T;
  function V() {
    try {
      const P = localStorage.getItem(a);
      if (!P) return;
      const N = JSON.parse(P);
      v.value = N.enabled === !0;
      const $ = Number(N.interval_seconds);
      c.includes($) && (b.value = $);
    } catch {
    }
  }
  function I() {
    try {
      localStorage.setItem(a, JSON.stringify({
        enabled: v.value,
        interval_seconds: b.value
      }));
    } catch {
    }
  }
  async function A() {
    if (v.value && !(r != null && r()) && !g.value) {
      if (y.value <= 1) {
        y.value = b.value, g.value = !0;
        try {
          await d();
        } finally {
          g.value = !1;
        }
        return;
      }
      y.value -= 1;
    }
  }
  function K() {
    T === void 0 && (T = setInterval(A, 1e3));
  }
  function h() {
    T !== void 0 && (clearInterval(T), T = void 0);
  }
  function w(P) {
    v.value = P, I(), P ? (y.value = b.value, K()) : (h(), y.value = 0);
  }
  function F(P) {
    b.value = P, I(), v.value && (y.value = P);
  }
  function O() {
    y.value = b.value;
  }
  return V(), Ve(h), {
    enabled: v,
    intervalSeconds: b,
    countdown: y,
    fetching: g,
    intervals: c,
    setEnabled: w,
    setInterval: F,
    resetCountdown: O,
    start: K,
    stop: h
  };
}
const Vn = /* @__PURE__ */ Q({
  __name: "ChannelStatusV1View",
  setup(t) {
    const { t: a } = le(), c = Ae(), m = z([]), d = z(!1), r = z("7d"), v = at({}), b = z(!1), y = z(null);
    let g = null;
    const T = $n({
      storageKey: "channel-status-auto-refresh",
      intervals: [30, 60, 120],
      defaultInterval: Ye,
      onRefresh: w,
      shouldPause: () => document.hidden || d.value
    }), V = T.countdown, I = k(() => {
      if (m.value.length === 0) return "unavailable";
      let _ = !1, L = !1;
      for (const D of m.value) {
        if (D.primary_status === "failed" || D.primary_status === "error") return "failed";
        D.primary_status !== It && (D.primary_status === "degraded" ? L = !0 : _ = !0);
      }
      return L ? "degraded" : _ ? "unavailable" : "operational";
    }), A = k(() => {
      var _;
      return ((_ = y.value) == null ? void 0 : _.name) || a("channelStatus.detailTitle");
    });
    async function K(_ = !1) {
      g && g.abort();
      const L = new AbortController();
      g = L, _ || (d.value = !0);
      try {
        const D = await ca({ signal: L.signal });
        if (L.signal.aborted || g !== L) return;
        m.value = D.items || [];
      } catch (D) {
        const H = D;
        if ((H == null ? void 0 : H.name) === "AbortError" || (H == null ? void 0 : H.code) === "ERR_CANCELED") return;
        c.showError(ke(D, a("channelStatus.loadError")));
      } finally {
        g === L && (_ || (d.value = !1), T.resetCountdown(), g = null);
      }
    }
    async function h(_ = !1) {
      r.value !== "7d" && await Promise.all(m.value.map((L) => O(L.id, _)));
    }
    async function w() {
      await K(!0), await h(!0);
    }
    async function F() {
      await K(!1), await h(!0);
    }
    async function O(_, L = !1) {
      if (!(!L && v[_]))
        try {
          v[_] = await lt(_);
        } catch (D) {
          c.showError(ke(D, a("channelStatus.detailLoadError")));
        }
    }
    async function P() {
      await h(!1);
    }
    async function N(_) {
      r.value = _, await P();
    }
    function $(_) {
      y.value = _, b.value = !0;
    }
    function G() {
      b.value = !1, y.value = null;
    }
    function B() {
      document.visibilityState === "visible" && T.enabled.value && w();
    }
    return ne(m, () => {
      P();
    }), ne(
      () => {
        var _;
        return (_ = c.cachedPublicSettings) == null ? void 0 : _.channel_monitor_enabled;
      },
      (_) => {
        _ === !1 ? T.stop() : T.enabled.value && T.start();
      }
    ), Fe(() => {
      var _;
      K(!1), document.addEventListener("visibilitychange", B), ((_ = c.cachedPublicSettings) == null ? void 0 : _.channel_monitor_enabled) !== !1 && T.setEnabled(!0);
    }), Ve(() => {
      g && g.abort(), document.removeEventListener("visibilitychange", B);
    }), (_, L) => {
      var D;
      return o(), i(q, null, [
        j(_a, {
          "overall-status": I.value,
          "interval-seconds": l(Ye),
          window: r.value,
          loading: d.value,
          "auto-refresh": l(T),
          "onUpdate:window": N,
          onRefresh: F
        }, null, 8, ["overall-status", "interval-seconds", "window", "loading", "auto-refresh"]),
        j(tn, {
          items: m.value,
          window: r.value,
          "countdown-seconds": l(V),
          loading: d.value,
          "detail-cache": v,
          onCardClick: $
        }, null, 8, ["items", "window", "countdown-seconds", "loading", "detail-cache"]),
        j(Mn, {
          show: b.value,
          "monitor-id": ((D = y.value) == null ? void 0 : D.id) ?? null,
          title: A.value,
          onClose: G
        }, null, 8, ["show", "monitor-id", "title"])
      ], 64);
    };
  }
});
function We() {
  var t;
  if (typeof document < "u") {
    const a = (t = document.documentElement.getAttribute("lang")) == null ? void 0 : t.trim();
    if (a) return a;
  }
  return typeof navigator < "u" && navigator.language ? navigator.language : "zh-CN";
}
function qe(t) {
  if (t == null || Number.isNaN(Number(t))) return "0";
  const a = Number(t);
  return Math.abs(a) < 1e3 ? Intl.NumberFormat(We(), { maximumFractionDigits: 1 }).format(a) : Jt(a);
}
function Ue(t) {
  return t == null || Number.isNaN(Number(t)) ? 0 : Number(t) / 60;
}
function rt(t) {
  return qe(Ue(t));
}
function Re(t, a = We()) {
  return `${new Intl.NumberFormat(a, {
    minimumFractionDigits: t < 0.01 ? 2 : 1,
    maximumFractionDigits: t < 0.01 ? 2 : 1
  }).format((t || 0) * 100)}%`;
}
function ie(t) {
  return t == null ? "-" : t >= 1e3 ? `${(t / 1e3).toFixed(1)}s` : `${Math.round(t)}ms`;
}
function Cn(t) {
  return Re(1 - (t || 0));
}
function Sn(t) {
  if (t == null || Number.isNaN(t)) return "unknown";
  const a = Math.max(0, Math.min(100, t)), c = a === 100 ? 10 : Math.floor(a / 10);
  return `score${Math.max(0, Math.min(10, c))}`;
}
function ot(t, a) {
  return a === "success" ? t.error_rate_score ?? null : a === "ttft" ? t.ttft_score ?? null : a === "cache" ? t.cache_score ?? null : t.score ?? null;
}
function st(t, a, c) {
  const m = ot(t, a);
  if (a === "ttft" && m == null) return "channel-health-unknown";
  if (m == null) {
    if (c <= 0) return "channel-health-unknown";
    const d = a === "success" ? t.error_rate : a === "cache" ? t.cache : t.overall;
    return Ln(d);
  }
  return `channel-health-${Sn(m)}`;
}
function Rn(t) {
  return t == null ? !0 : t.p50_ms == null;
}
function Tn(t, a) {
  return Rn(a) ? "unknown" : t;
}
function Ln(t) {
  return `channel-health-${t || "unknown"}`;
}
function it(t, a, c, m) {
  const d = [];
  return c != null && d.push(`AVG ${ie(c)}`), t != null && d.push(`P50 ${ie(t)}`), a != null && d.push(`P90 ${ie(a)}`), a == null && m != null && d.push(`P95 ${ie(m)}`), d.length ? d.join(" · ") : "-";
}
function Dn(t, a, c) {
  const m = [];
  return t != null && Number.isFinite(t) && m.push(`AVG ${ie(t)}`), a != null && Number.isFinite(a) ? m.push(`P90 ${ie(a)}`) : c != null && Number.isFinite(c) && m.push(`P95 ${ie(c)}`), m.length ? m.join(" · ") : "-";
}
const En = ["aria-expanded", "aria-label"], In = ["aria-selected", "onClick"], zn = { class: "flex min-w-0 flex-1 items-center gap-2" }, Nn = { class: "min-w-0 flex-1 truncate" }, Bn = {
  key: 0,
  class: "text-xs text-gray-400"
}, Pn = {
  key: 0,
  class: "px-4 py-3 text-center text-xs text-gray-400"
}, Fn = /* @__PURE__ */ Q({
  __name: "FilterMultiSelect",
  props: {
    label: {},
    allLabel: {},
    modelValue: {},
    options: {},
    compact: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const c = t, m = a, { t: d, locale: r } = le(), v = z(null), b = z(null), y = z(null), g = z(!1), T = `filter-select-${Math.random().toString(36).slice(2, 9)}`, V = k(() => {
      var B;
      return c.modelValue.length === 0 ? c.allLabel : c.modelValue.length === 1 ? ((B = c.options.find((_) => _.value === c.modelValue[0])) == null ? void 0 : B.label) || c.modelValue[0] : d("channelMonitorV2.filters.selectedCount", { count: c.modelValue.length });
    }), I = k(() => {
      const B = b.value;
      if (!B) return {};
      const _ = B.getBoundingClientRect(), L = 8, D = Math.max(L, window.innerWidth - L), H = Math.min(Math.max(L, _.left), D), Y = Math.max(0, D - H), oe = Math.max(200, _.width), X = Math.min(oe, Y);
      return {
        position: "fixed",
        left: `${H}px`,
        top: `${_.bottom + 4}px`,
        minWidth: `${X}px`,
        maxWidth: `${Y}px`,
        zIndex: "100000020"
      };
    });
    function A() {
      m("update:modelValue", []);
    }
    function K(B) {
      const _ = new Set(c.modelValue);
      _.has(B) ? _.delete(B) : _.add(B), m("update:modelValue", [..._]);
    }
    function h() {
      g.value ? F() : w();
    }
    function w() {
      g.value = !0, Je(() => O());
    }
    function F() {
      g.value = !1;
    }
    function O() {
      const B = b.value, _ = y.value;
      if (!B || !_) return;
      const L = B.getBoundingClientRect(), D = 8, H = Math.max(D, window.innerWidth - D), Y = Math.min(Math.max(D, L.left), H), oe = Math.max(0, H - Y), X = Math.max(200, L.width), ee = Math.min(X, oe);
      _.style.left = `${Y}px`, _.style.top = `${L.bottom + 4}px`, _.style.minWidth = `${ee}px`, _.style.maxWidth = `${oe}px`;
    }
    function P(B) {
      return Intl.NumberFormat(r.value || We(), {
        notation: B >= 1e4 ? "compact" : "standard"
      }).format(B);
    }
    function N(B) {
      var L, D;
      if (!g.value) return;
      const _ = B.target;
      _ && ((L = v.value) != null && L.contains(_) || (D = y.value) != null && D.contains(_) || F());
    }
    function $(B) {
      B.key === "Escape" && F();
    }
    function G() {
      g.value && O();
    }
    return ne(g, async (B) => {
      B ? (await Je(), O(), document.addEventListener("mousedown", N), document.addEventListener("keydown", $), window.addEventListener("resize", G), window.addEventListener("scroll", G, !0)) : (document.removeEventListener("mousedown", N), document.removeEventListener("keydown", $), window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0));
    }), Ve(() => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", $), window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0);
    }), (B, _) => (o(), i("div", {
      ref_key: "containerRef",
      ref: v,
      class: R(["filter-menu relative", t.compact ? "min-w-[6.5rem] sm:min-w-[7.25rem]" : "min-w-[150px] sm:min-w-[160px]"])
    }, [
      e("button", {
        ref_key: "triggerRef",
        ref: b,
        type: "button",
        class: R(["select-trigger flex cursor-pointer list-none items-center justify-between gap-1.5 text-left", [
          g.value ? "select-trigger-open" : "",
          t.compact ? "h-8 rounded-lg !px-2 !py-1 text-xs" : "h-[42px]"
        ]]),
        "aria-expanded": g.value,
        "aria-haspopup": "listbox",
        "aria-label": t.label,
        onClick: h
      }, [
        e("span", {
          class: R(["select-value min-w-0 truncate", t.compact ? "max-w-[5.5rem] sm:max-w-[6.5rem]" : "max-w-[11rem]"])
        }, n(l(d)("channelMonitorV2.filters.labelValue", { label: t.label, value: V.value })), 3),
        e("span", {
          class: R(["select-icon shrink-0 text-gray-400 transition-transform", g.value ? "rotate-180" : ""])
        }, [
          j(ce, {
            name: "chevronDown",
            size: "sm"
          })
        ], 2)
      ], 10, En),
      (o(), ae(nt, { to: "body" }, [
        j(Ht, { name: "select-dropdown" }, {
          default: Be(() => [
            g.value ? (o(), i("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: y,
              class: R(["select-dropdown-portal dropdown filter-dropdown", [T]]),
              style: de(I.value),
              role: "listbox",
              "aria-multiselectable": "true",
              onClick: _[0] || (_[0] = Qe(() => {
              }, ["stop"])),
              onMousedown: _[1] || (_[1] = Qe(() => {
              }, ["stop"]))
            }, [
              e("button", {
                type: "button",
                class: "dropdown-item select-option select-option-group flex w-full items-center justify-between border-b border-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-dark-700 dark:text-gray-300 dark:hover:bg-dark-700",
                onClick: A
              }, [
                e("span", null, n(t.allLabel), 1),
                t.modelValue.length === 0 ? (o(), ae(ce, {
                  key: 0,
                  name: "check",
                  size: "sm",
                  class: "text-primary-500"
                })) : S("", !0)
              ]),
              (o(!0), i(q, null, Z(t.options, (L) => (o(), i("button", {
                key: L.value,
                type: "button",
                role: "option",
                class: R(["dropdown-item select-option flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700", t.modelValue.includes(L.value) ? "select-option-selected" : ""]),
                "aria-selected": t.modelValue.includes(L.value),
                onClick: (D) => K(L.value)
              }, [
                e("span", zn, [
                  e("span", {
                    class: R(["checkbox flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-primary-500 dark:border-dark-600 dark:bg-dark-900", t.modelValue.includes(L.value) ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30" : ""])
                  }, [
                    t.modelValue.includes(L.value) ? (o(), ae(ce, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500"
                    })) : S("", !0)
                  ], 2),
                  e("span", Nn, n(L.label), 1)
                ]),
                L.count != null ? (o(), i("small", Bn, n(P(L.count)), 1)) : S("", !0)
              ], 10, In))), 128)),
              t.options.length === 0 ? (o(), i("p", Pn, n(l(d)("channelMonitorV2.filters.empty")), 1)) : S("", !0)
            ], 38)) : S("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), Ne = /* @__PURE__ */ je(Fn, [["__scopeId", "data-v-166ad66b"]]), An = ["title"], jn = { class: "min-w-0 flex-1" }, On = { class: "stat-label text-[10px] font-bold uppercase tracking-wider text-gray-400" }, Wn = {
  key: 0,
  class: "mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] leading-snug text-gray-400 dark:text-dark-400"
}, qn = {
  key: 1,
  class: "mt-1.5 block text-[11px] leading-snug text-gray-400 dark:text-dark-400"
}, Me = /* @__PURE__ */ Q({
  __name: "MetricCell",
  props: {
    label: {},
    value: {},
    detail: {},
    state: {},
    title: {}
  },
  setup(t) {
    const a = t, c = k(() => {
      const b = (a.detail || "").trim();
      return !b || b === "-" ? [] : b.split(/\s*[·|]\s*/).map((y) => y.trim()).filter(Boolean);
    }), m = k(() => {
      const b = (a.value || "").trim();
      return b === "" || b === "-" || b === "—";
    }), d = k(() => m.value ? void 0 : a.state), r = k(() => d.value ? zt(d.value) : m.value ? "text-gray-500 dark:text-dark-400" : "text-gray-900 dark:text-white"), v = k(() => fe(d.value));
    return (b, y) => (o(), i("div", {
      class: "stat-card !min-h-[6.5rem] !rounded-lg !border-0 !p-4 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700",
      title: t.title || void 0
    }, [
      d.value ? (o(), i("div", {
        key: 0,
        class: R(["mt-1 h-2 w-2 shrink-0 rounded-full", v.value]),
        "aria-hidden": "true"
      }, null, 2)) : S("", !0),
      e("div", jn, [
        e("span", On, n(t.label), 1),
        e("strong", {
          class: R(["stat-value mt-1 block overflow-visible text-xl tabular-nums leading-tight !text-clip !whitespace-normal", r.value])
        }, n(t.value), 3),
        c.value.length > 1 ? (o(), i("div", Wn, [
          (o(!0), i(q, null, Z(c.value, (g, T) => (o(), i("span", {
            key: `${T}:${g}`,
            class: "whitespace-nowrap tabular-nums"
          }, n(g), 1))), 128))
        ])) : t.detail ? (o(), i("small", qn, n(t.detail), 1)) : S("", !0)
      ])
    ], 8, An));
  }
}), Un = ["title"], Hn = {
  key: 0,
  class: "rank-trophy shrink-0",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  "aria-hidden": "true"
}, Gn = ["fill"], Zn = ["fill"], Kn = ["fill"], Xn = ["fill"], Yn = ["fill"], Jn = {
  key: 1,
  class: "sr-only"
}, Qn = /* @__PURE__ */ Q({
  __name: "MonitorRankBadge",
  props: {
    rank: {}
  },
  setup(t) {
    const { t: a } = le(), c = {
      1: {
        // gold
        light: "#FFD524",
        mid: "#F5B200",
        dark: "#B45309"
      },
      2: {
        // silver
        light: "#E5E7EB",
        mid: "#9CA3AF",
        dark: "#4B5563"
      },
      3: {
        // bronze
        light: "#E8A86A",
        mid: "#CD7F32",
        dark: "#8B5A2B"
      }
    }, m = t, d = k(() => {
      const V = Number(m.rank);
      return Number.isFinite(V) && V > 0 ? Math.floor(V) : null;
    }), r = k(
      () => d.value != null && d.value >= 1 && d.value <= 3
    ), v = k(() => d.value === 1 || d.value === 2 || d.value === 3 ? c[d.value] : null), b = k(() => d.value == null || d.value <= 0 ? "—" : `#${d.value}`), y = k(() => d.value == null || d.value <= 0 ? a("channelMonitorV2.rank.unranked") : d.value === 1 ? a("channelMonitorV2.rank.gold") : d.value === 2 ? a("channelMonitorV2.rank.silver") : d.value === 3 ? a("channelMonitorV2.rank.bronze") : a("channelMonitorV2.rank.place", { n: d.value })), g = k(() => y.value), T = k(() => d.value === 1 ? "text-zo-alert-600 dark:text-zo-alert-400" : d.value === 2 ? "text-slate-500 dark:text-slate-300" : d.value === 3 ? "text-zo-alert-800 dark:text-zo-alert-600" : "");
    return (V, I) => (o(), i("span", {
      class: R(["inline-flex items-center gap-1.5 tabular-nums", T.value]),
      title: g.value
    }, [
      r.value && v.value ? (o(), i("svg", Hn, [
        e("path", {
          d: "M506.9 750.3c1.5 0 3-0.1 4.6-0.1 4.1 0 8.2 0.1 12.3 0.2V613.8h-16.9v136.5z",
          fill: v.value.mid
        }, null, 8, Gn),
        e("path", {
          d: "M585.3 815.7c25.5 17.4 49 44.5 56.8 84.9h98.3c-20.4-36.7-77-71.2-155.1-84.9z",
          fill: v.value.light
        }, null, 8, Zn),
        e("path", {
          d: "M922.2 64.2H757.7c-0.2 0-0.4 0.1-0.6 0.1-0.2 0-0.4-0.1-0.6-0.1h-229c-16.3 0-29.6 13.2-29.6 29.6s13.2 29.6 29.6 29.6h199.6l0.9 215.5c0 98.3-66.1 181.4-156.1 207.4-19 5.5-39 8.5-59.8 8.5-119 0-215.9-96.9-215.9-216l-0.9-215.3h48.5c16.3 0 29.6-13.2 29.6-29.6s-13.2-29.6-29.6-29.6H100.9c-16.3 0-29.6 13.2-29.6 29.6V135c0 66.3 33.3 127.3 89.1 163.2 5 3.2 10.5 4.7 16 4.7 9.7 0 19.2-4.8 24.9-13.5 8.8-13.7 4.9-32-8.8-40.9-38.8-25-62-67.4-62-113.5v-11.6H236l0.9 215.5c0 126.7 86.2 233.7 203 265.4v151.3c-11.8 1.7-23.5 3.7-34.9 6.3-15.9 3.6-25.9 19.5-22.3 35.4 3.6 15.9 19.5 25.9 35.4 22.3 29.6-6.7 61-10.1 93.3-10.1 26.3 0 50.9 2.3 73.8 6.4 78.2 13.7 134.8 48.2 155.1 84.9H282.2c10.2-19 29.8-37.1 57.1-52.1 14.3-7.9 19.5-25.9 11.6-40.2-7.9-14.3-25.9-19.5-40.2-11.6-61.7 34-95.7 81.4-95.7 133.5 0 16.3 13.2 29.6 29.6 29.6h533.5c16.3 0 29.6-13.2 29.6-29.6 0-85.9-94.3-155.9-224.9-174.9v-151C700.3 573.1 787 465.9 787 338.7l-0.9-215.3h106.6V135c-0.1-16.3-13.4-29.6-29.7-29.6zM523.8 750.4c-4.1-0.1-8.2-0.2-12.3-0.2-1.5 0-3 0.1-4.6 0.1-2.6 0-5.2 0.1-7.8 0.2V613.8h24.7v136.6z",
          fill: v.value.dark
        }, null, 8, Kn),
        e("path", {
          d: "M727.9 338.8l-0.9-215.5h-92.3l0.9 215.5c0 84.1-19.5 168.1-63.9 207.4 90.1-26 156.2-109.1 156.2-207.4z",
          fill: v.value.light
        }, null, 8, Xn),
        e("path", {
          d: "M433.2 123.3h1.8c16.3 0 29.6-13.2 29.6-29.6S451.4 64.2 435 64.2h-1.8c-16.3 0-29.6 13.2-29.6 29.6s13.3 29.5 29.6 29.5z",
          fill: v.value.dark
        }, null, 8, Yn)
      ])) : S("", !0),
      r.value ? (o(), i("span", Jn, n(y.value), 1)) : S("", !0),
      e("span", {
        class: R(["text-xs font-semibold", r.value ? T.value : "text-gray-500 dark:text-dark-300"])
      }, n(b.value), 3)
    ], 10, Un));
  }
}), el = { span: 1, offset: 0 }, ct = 0.12, tl = 0.12;
function $e(t, a, c) {
  return Math.min(c, Math.max(a, t));
}
function _e() {
  return { ...el };
}
function ut(t) {
  return t.span < 0.999 || t.offset > 1e-3;
}
function ye(t) {
  const a = $e(t.span, ct, 1), c = Math.max(0, 1 - a);
  return {
    span: a,
    offset: $e(t.offset, 0, c)
  };
}
function dt(t, a, c) {
  const m = $e(Number.isFinite(c) ? c : 0.5, 0, 1);
  if (a.shiftKey || Math.abs(a.deltaX) > Math.abs(a.deltaY)) {
    if (t.span >= 1) return ye(t);
    const V = (a.shiftKey ? a.deltaY : a.deltaX) / 400 * t.span;
    return ye({
      span: t.span,
      offset: t.offset + V
    });
  }
  const r = a.deltaY < 0 ? -1 : a.deltaY > 0 ? 1 : 0;
  if (r === 0) return ye(t);
  const v = $e(t.span * (1 + r * tl), ct, 1);
  if (Math.abs(v - t.span) < 1e-9) return ye(t);
  const g = t.offset + m * t.span - m * v;
  return ye({
    span: v,
    offset: g
  });
}
function mt(t, a) {
  if (!t.length) return [];
  const c = ye(a);
  if (c.span >= 0.999) return [...t];
  const m = Math.max(1, Math.ceil(t.length * c.span)), d = Math.max(0, t.length - m), r = Math.min(d, Math.max(0, Math.round(c.offset * t.length)));
  return t.slice(r, r + m);
}
function ht(t, a) {
  if (!a) return 0.5;
  const c = a.getBoundingClientRect();
  return c.width <= 0 ? 0.5 : $e((t - c.left) / c.width, 0, 1);
}
const al = { class: "card flex min-h-[360px] flex-col overflow-hidden !rounded-lg !border-0 !p-6 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, nl = { class: "card-header mb-4 flex shrink-0 flex-wrap items-start justify-between gap-3 !border-0 !p-0" }, ll = { class: "min-w-0" }, rl = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, ol = {
  class: "inline-flex h-4 w-4 text-sky-500",
  "aria-hidden": "true"
}, sl = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, il = { class: "flex w-full min-w-0 flex-wrap items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400 sm:w-auto" }, cl = { class: "flex shrink-0 items-center gap-1" }, ul = { class: "flex shrink-0 items-center gap-1" }, dl = { class: "flex shrink-0 items-center gap-1" }, ml = { class: "badge badge-gray shrink-0" }, hl = ["disabled"], pl = { class: "card-body min-h-0 flex-1 !p-0" }, gl = {
  key: 0,
  class: "flex h-[280px] items-center justify-center sm:h-[300px]"
}, fl = { class: "animate-pulse text-sm text-gray-400" }, vl = {
  key: 2,
  class: "flex h-[280px] items-center justify-center sm:h-[300px]"
}, bl = /* @__PURE__ */ Q({
  __name: "MonitorTrendChart",
  props: {
    trend: {},
    coverage: {},
    loading: { type: Boolean }
  },
  setup(t) {
    Qt.register(ea, ta, aa, na, la, ra, oa, sa);
    const { t: a, locale: c } = le(), m = t, d = z(null), r = z(_e()), v = k(() => ut(r.value)), b = k(
      () => typeof document < "u" && document.documentElement.classList.contains("dark")
    ), y = k(() => {
      var O;
      const w = (((O = m.coverage) == null ? void 0 : O.bucket_seconds) || 60) / 60;
      if (w < 60) return a("channelMonitorV2.bucket.minutes", { count: w });
      const F = w / 60;
      return F < 24 ? a("channelMonitorV2.bucket.hours", { count: F }) : a("channelMonitorV2.bucket.days", { count: F / 24 });
    }), g = k(() => {
      const h = T.value;
      if (!h.length) return null;
      const w = h.map(
        (N) => new Intl.DateTimeFormat(c.value || void 0, {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date(N.bucket_start))
      ), F = A(h.map((N) => (N.metrics.error_rate || 0) * 100)), O = A(h.map((N) => (N.metrics.cache_rate || 0) * 100)), P = A(h.map((N) => {
        var $;
        return (($ = N.metrics.ttft) == null ? void 0 : $.p50_ms) ?? null;
      }));
      return {
        labels: w,
        datasets: [
          {
            label: a("channelMonitorV2.chart.errorDataset"),
            data: F,
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 67, 67, 0.10)",
            yAxisID: "yPct",
            tension: 0.4,
            cubicInterpolationMode: "monotone",
            fill: "origin",
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHitRadius: 10,
            borderWidth: 2
          },
          {
            label: a("channelMonitorV2.chart.cacheDataset"),
            data: O,
            borderColor: "#7c5cfc",
            backgroundColor: "rgba(124, 92, 252, 0.08)",
            yAxisID: "yPct",
            tension: 0.4,
            cubicInterpolationMode: "monotone",
            fill: !1,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHitRadius: 10,
            borderWidth: 2
          },
          {
            label: a("channelMonitorV2.chart.ttftDataset"),
            data: P,
            borderColor: "#0ea5e9",
            backgroundColor: "rgba(14, 165, 233, 0.08)",
            yAxisID: "yTtft",
            tension: 0.4,
            cubicInterpolationMode: "monotone",
            fill: !1,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHitRadius: 10,
            borderWidth: 2,
            spanGaps: !0
          }
        ]
      };
    }), T = k(() => mt(m.trend || [], r.value));
    function V(h) {
      h.preventDefault();
      const w = ht(h.clientX, d.value);
      r.value = dt(r.value, h, w);
    }
    function I() {
      r.value = _e();
    }
    ne(() => m.trend, () => {
      r.value = _e();
    });
    function A(h) {
      return h.length <= 2 ? h : h.map((w, F) => {
        if (w == null) return null;
        const O = h.slice(Math.max(0, F - 1), Math.min(h.length, F + 2)).filter((P) => P != null);
        return O.length ? O.reduce((P, N) => P + N, 0) / O.length : w;
      });
    }
    const K = k(() => {
      const h = b.value ? "#9ca3af" : "#6b7280", w = b.value ? "#374151" : "#f3f4f6", F = b.value ? "#1f2937" : "#ffffff", O = b.value ? "#f3f4f6" : "#111827", P = b.value ? "#d1d5db" : "#4b5563";
      return {
        responsive: !0,
        maintainAspectRatio: !1,
        interaction: { mode: "index", intersect: !1 },
        plugins: {
          legend: { display: !1 },
          tooltip: {
            backgroundColor: F,
            titleColor: O,
            bodyColor: P,
            borderColor: w,
            borderWidth: 1,
            padding: 10,
            displayColors: !0,
            callbacks: {
              label(N) {
                const $ = N.dataset.label || "", G = N.parsed.y;
                return G == null ? `${$}: -` : $ === a("channelMonitorV2.chart.errorDataset") || $ === a("channelMonitorV2.chart.cacheDataset") ? `${$}: ${Re(G / 100)}` : `${$}: ${ie(G)}`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: { color: h, maxRotation: 0, autoSkip: !0, maxTicksLimit: 8, autoSkipPadding: 10, font: { size: 10 } },
            grid: { display: !1 }
          },
          yPct: {
            type: "linear",
            position: "left",
            min: 0,
            suggestedMax: 100,
            ticks: {
              color: h,
              font: { size: 10 },
              callback: (N) => `${N}%`
            },
            grid: { color: w, borderDash: [4, 4] },
            title: { display: !0, text: a("channelMonitorV2.chart.percentAxis"), color: h, font: { size: 11 } }
          },
          yTtft: {
            type: "linear",
            position: "right",
            min: 0,
            ticks: {
              color: "#0ea5e9",
              font: { size: 10 },
              callback: (N) => ie(Number(N))
            },
            grid: { display: !1 },
            title: { display: !0, text: a("channelMonitorV2.metrics.ttftP50"), color: "#0ea5e9", font: { size: 11 } }
          }
        }
      };
    });
    return (h, w) => (o(), i("section", al, [
      e("div", nl, [
        e("div", ll, [
          e("h2", rl, [
            e("span", ol, [
              j(ce, {
                name: "chart",
                size: "sm"
              })
            ]),
            J(" " + n(l(a)("channelMonitorV2.chart.title")), 1)
          ]),
          e("p", sl, n(l(a)("channelMonitorV2.chart.description")), 1)
        ]),
        e("div", il, [
          e("span", cl, [
            w[0] || (w[0] = e("span", { class: "h-2 w-2 rounded-full bg-red-500" }, null, -1)),
            J(n(l(a)("channelMonitorV2.chart.errorLegend")), 1)
          ]),
          e("span", ul, [
            w[1] || (w[1] = e("span", { class: "h-2 w-2 rounded-full bg-zo-signal-500" }, null, -1)),
            J(n(l(a)("channelMonitorV2.chart.cacheLegend")), 1)
          ]),
          e("span", dl, [
            w[2] || (w[2] = e("span", { class: "h-2 w-2 rounded-full bg-sky-500" }, null, -1)),
            J(n(l(a)("channelMonitorV2.chart.ttftLegend")), 1)
          ]),
          e("span", ml, n(y.value), 1),
          e("button", {
            type: "button",
            class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !v.value,
            onClick: I
          }, n(l(a)("channelMonitorV2.chart.resetZoom")), 9, hl)
        ])
      ]),
      e("div", pl, [
        t.loading ? (o(), i("div", gl, [
          e("div", fl, n(l(a)("common.loading")), 1)
        ])) : g.value ? (o(), i("div", {
          key: 1,
          ref_key: "chartRef",
          ref: d,
          class: "h-[280px] sm:h-[300px]",
          onWheel: V
        }, [
          j(l(ia), {
            data: g.value,
            options: K.value
          }, null, 8, ["data", "options"])
        ], 544)) : (o(), i("div", vl, [
          j(Oe, {
            title: l(a)("channelMonitorV2.chart.emptyTitle"),
            description: l(a)("channelMonitorV2.empty.description")
          }, null, 8, ["title", "description"])
        ]))
      ])
    ]));
  }
}), xl = { class: "card flex min-h-[360px] flex-col overflow-visible !rounded-lg !border-0 !p-6 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, yl = { class: "card-header mb-4 flex shrink-0 flex-wrap items-start justify-between gap-3 !border-0 !p-0" }, kl = { class: "min-w-0" }, _l = { class: "flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white" }, wl = {
  class: "inline-flex h-4 w-4 text-zo-signal-500",
  "aria-hidden": "true"
}, Ml = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, $l = { class: "flex w-full min-w-0 flex-wrap items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400 sm:w-auto" }, Vl = { class: "badge badge-gray shrink-0" }, Cl = { class: "hidden text-[11px] text-gray-400 dark:text-dark-400 sm:inline" }, Sl = ["disabled"], Rl = { class: "card-body min-h-0 flex-1 !p-0" }, Tl = { key: 0 }, Ll = { class: "pulse-axis flex justify-between gap-3" }, Dl = { class: "not-italic" }, El = { class: "not-italic" }, Il = ["title"], zl = { class: "truncate text-xs font-semibold text-gray-800 dark:text-gray-100" }, Nl = { class: "summary-value bg-white text-xs font-medium tabular-nums text-gray-600 dark:bg-dark-800 dark:text-gray-300" }, Bl = ["title"], Pl = ["title"], Fl = { class: "summary-value bg-white text-xs font-medium tabular-nums text-gray-600 dark:bg-dark-800 dark:text-gray-300" }, Al = ["title", "aria-label", "onMouseenter", "onFocus"], jl = {
  class: "pulse-tooltip",
  role: "tooltip"
}, Ol = { class: "pulse-tooltip-line pulse-tooltip-title" }, Wl = { class: "pulse-tooltip-line" }, ql = { class: "pulse-tooltip-line" }, Ul = { class: "pulse-tooltip-line" }, Hl = {
  key: 0,
  class: "pulse-tooltip-line"
}, Gl = { class: "pulse-tooltip-line" }, Zl = { class: "pulse-tooltip-line" }, Kl = {
  key: 1,
  class: "pulse-tooltip-line"
}, Xl = { class: "pulse-tooltip-line" }, Yl = { class: "pulse-tooltip-line pulse-tooltip-title" }, Jl = { class: "pulse-tooltip-line" }, Ql = {
  key: 1,
  class: "flex min-h-[200px] items-center justify-center py-8"
}, er = ["aria-label"], tr = { class: "flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400" }, ar = { class: "shrink-0" }, nr = { class: "shrink-0" }, lr = { class: "flex flex-wrap gap-4 text-[11px] text-gray-500 dark:text-gray-400" }, rr = { class: "inline-flex items-center gap-1.5" }, or = { class: "inline-flex items-center gap-1.5" }, sr = { class: "inline-flex items-center gap-1.5" }, ir = { class: "inline-flex items-center gap-1.5" }, cr = /* @__PURE__ */ Q({
  __name: "RelayPulseMatrix",
  props: {
    rows: {},
    coverage: {},
    healthMode: {},
    showThroughput: { type: Boolean, default: !0 }
  },
  setup(t) {
    const { t: a, locale: c } = le(), m = t, d = at({
      visible: !1,
      x: 0,
      y: 0,
      lines: []
    }), r = z(null), v = z(_e()), b = k(() => ut(v.value)), y = k(() => {
      const u = Math.max(60, m.coverage.bucket_seconds) * 1e3, f = new Date(m.coverage.requested_start).getTime(), M = m.coverage.requested_end ? new Date(m.coverage.requested_end).getTime() : NaN, C = new Date(m.coverage.data_through).getTime(), U = Number.isFinite(M) && M > f ? M : C;
      if (![f, U].every(Number.isFinite) || f >= U) return [];
      const ge = [];
      for (let se = Math.floor(f / u) * u; se < U; se += u)
        ge.push(new Date(se).toISOString());
      return ge;
    }), g = k(() => mt(y.value, v.value)), T = k(() => ({
      "--bucket-count": String(Math.max(1, g.value.length)),
      minWidth: b.value ? `calc(260px + ${V.value})` : "0"
    })), V = k(() => {
      const u = Math.max(1, g.value.length);
      if (!b.value) return "0px";
      const f = Math.min(12, Math.round((1 - v.value.span) / 0.08)), M = 6 + f * 4, C = f >= 4 ? 3 : 2;
      return `${u * M + Math.max(0, u - 1) * C}px`;
    }), I = k(() => {
      const u = Math.max(1, g.value.length), f = b.value ? Math.min(12, Math.round((1 - v.value.span) / 0.08)) : 0, M = b.value ? f >= 4 ? 3 : 2 : u > 24 ? 1 : 2, C = 16, U = b.value ? `${6 + f * 4}px` : "0";
      return {
        gridTemplateColumns: `repeat(${u}, minmax(${U}, 1fr))`,
        gap: `${M}px`,
        height: `${C}px`,
        minWidth: V.value
      };
    }), A = k(
      () => g.value.length ? xe(g.value[0]) : "时间脉冲"
    ), K = k(
      () => g.value.length ? xe(g.value[g.value.length - 1]) : ""
    ), h = k(() => {
      const u = m.coverage.bucket_seconds / 60;
      if (u < 60) return a("channelMonitorV2.bucket.minutes", { count: u });
      const f = u / 60;
      return f < 24 ? a("channelMonitorV2.bucket.hours", { count: f }) : a("channelMonitorV2.bucket.days", { count: f / 24 });
    }), w = k(() => {
      const u = /* @__PURE__ */ new Map();
      return g.value.forEach((f, M) => u.set(f, M)), u;
    }), F = k(() => {
      const u = g.value, f = w.value;
      return m.rows.map((M) => {
        const C = u.map((U) => ({ start: U }));
        for (const U of M.buckets || []) {
          const ge = new Date(U.bucket_start).toISOString(), se = f.get(ge);
          se != null && (C[se] = { start: u[se], bucket: U });
        }
        return { row: M, slots: C };
      });
    });
    function O(u) {
      const f = r.value, M = u.target, C = M == null ? void 0 : M.closest(".pulse-track"), U = !!(M != null && M.closest(".matrix-scroll")), ge = u.shiftKey || Math.abs(u.deltaX) > Math.abs(u.deltaY);
      if (!U && !C || !U && !ge) return;
      u.preventDefault();
      const se = C || f, Te = ht(u.clientX, se);
      v.value = dt(v.value, u, Te);
    }
    function P() {
      v.value = _e();
    }
    ne(
      () => [
        m.coverage.requested_start,
        m.coverage.requested_end,
        m.coverage.coverage_start,
        m.coverage.data_through,
        m.coverage.bucket_seconds
      ],
      () => {
        v.value = _e();
      }
    );
    function N(u, f) {
      return st(u, m.healthMode, f);
    }
    function $(u) {
      const f = [u.platform];
      return (u.group_name || u.group_id) && f.push(u.group_name || `#${u.group_id}`), u.model && f.push(u.model === "__other__" ? a("channelMonitorV2.otherModels") : u.model), f.join(" / ");
    }
    function G(u) {
      return [u.platform, u.group_id || 0, u.model || ""].join(":");
    }
    function B(u) {
      const f = u.request_count <= 0, M = (u.rpm || 0) <= 0 && (u.tpm || 0) <= 0;
      return f && M && m.showThroughput ? "-" : Cn(u.error_rate);
    }
    function _(u) {
      const f = ot(u, m.healthMode);
      return f == null ? "—" : `${Math.round(f)}`;
    }
    function L(u) {
      return D(u).join(`
`);
    }
    function D(u) {
      const f = u.metrics, M = [
        pe(u.bucket_start),
        a("channelMonitorV2.matrix.scoreLine", { score: _(u.health) }),
        a("channelMonitorV2.metrics.successRateValue", { value: B(f) }),
        a("channelMonitorV2.metrics.ttftValue", { value: re(f.ttft) })
      ];
      return m.showThroughput && M.push(a("channelMonitorV2.metrics.tpsValue", { value: he(f.tpm) })), M.push(
        a("channelMonitorV2.metrics.cacheRateValue", { value: me(f.cache_rate) }),
        a("channelMonitorV2.metrics.errorRateValue", { value: me(f.error_rate) })
      ), m.showThroughput && M.push(a("channelMonitorV2.metrics.rpmValue", { value: Ce(f.rpm) })), M.push(a("channelMonitorV2.metrics.durationValue", { value: re(f.duration) })), M;
    }
    function H(u) {
      return [pe(u), a("channelMonitorV2.matrix.noTraffic")];
    }
    function Y(u, f) {
      d.lines = f.bucket ? D(f.bucket) : H(f.start), d.visible = !0, ee(u);
    }
    function oe(u) {
      d.visible && ee(u);
    }
    function X() {
      d.visible = !1;
    }
    function ee(u) {
      if ("clientX" in u) {
        d.x = Math.min(window.innerWidth - 12, Math.max(12, u.clientX)), d.y = Math.min(window.innerHeight - 12, Math.max(12, u.clientY)) - 12;
        return;
      }
      const f = u.target, M = f == null ? void 0 : f.getBoundingClientRect();
      M && (d.x = M.left + M.width / 2, d.y = M.top - 10);
    }
    function re(u) {
      return it(u.p50_ms, u.p90_ms, u.avg_ms, u.p95_ms);
    }
    function me(u) {
      return Re(u);
    }
    function Ce(u) {
      return qe(u);
    }
    function he(u) {
      return rt(u);
    }
    function ve(u) {
      const f = Ue(u);
      return Intl.NumberFormat(c.value || void 0, { maximumFractionDigits: 3 }).format(f);
    }
    function be(u) {
      return ie(u);
    }
    function xe(u) {
      return new Intl.DateTimeFormat(c.value || void 0, {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(u));
    }
    function pe(u) {
      const f = new Date(u), M = new Date(f.getTime() + m.coverage.bucket_seconds * 1e3);
      return `${xe(f.toISOString())} - ${new Intl.DateTimeFormat(c.value || void 0, { hour: "2-digit", minute: "2-digit" }).format(M)}`;
    }
    return (u, f) => (o(), i("section", xl, [
      e("div", yl, [
        e("div", kl, [
          e("h2", _l, [
            e("span", wl, [
              j(ce, {
                name: "grid",
                size: "sm"
              })
            ]),
            J(" " + n(l(a)("channelMonitorV2.matrix.title")), 1)
          ]),
          e("p", Ml, n(l(a)("channelMonitorV2.matrix.description")), 1)
        ]),
        e("div", $l, [
          e("span", Vl, n(h.value), 1),
          e("span", Cl, n(l(a)("channelMonitorV2.matrix.wheelZoomX")), 1),
          e("button", {
            type: "button",
            class: "inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-dark-700 dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-dark-800",
            disabled: !b.value,
            onClick: P
          }, n(l(a)("channelMonitorV2.matrix.resetZoom")), 9, Sl)
        ])
      ]),
      e("div", Rl, [
        t.rows.length ? (o(), i("div", {
          key: 0,
          ref_key: "scrollRef",
          ref: r,
          class: "matrix-scroll max-h-[min(42vh,420px)] max-w-full overflow-auto rounded-2xl bg-gray-50/60 p-2 dark:bg-dark-900/30",
          onWheel: O
        }, [
          e("div", {
            class: "matrix-table w-full",
            style: de(T.value)
          }, [
            e("div", {
              class: R(["matrix-header matrix-row sticky top-0 z-[3] bg-gray-50 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:bg-dark-900 dark:text-gray-400", t.showThroughput ? "matrix-row--with-tps" : ""])
            }, [
              e("span", null, n(l(a)("channelMonitorV2.matrix.dimension")), 1),
              e("span", null, n(l(a)("channelMonitorV2.metrics.successRate")), 1),
              e("span", null, n(l(a)("channelMonitorV2.metrics.ttft")), 1),
              t.showThroughput ? (o(), i("span", Tl, n(l(a)("channelMonitorV2.metrics.tps")), 1)) : S("", !0),
              e("span", null, n(l(a)("channelMonitorV2.metrics.cacheRate")), 1),
              e("span", Ll, [
                e("i", Dl, n(A.value), 1),
                e("i", El, n(K.value), 1)
              ])
            ], 2),
            (o(!0), i(q, null, Z(F.value, (M) => (o(), i("div", {
              key: G(M.row),
              class: R(["matrix-row border-b border-gray-100/80 dark:border-dark-700/60", t.showThroughput ? "matrix-row--with-tps" : ""])
            }, [
              e("div", {
                class: "dimension-cell flex min-w-0 items-center gap-2 bg-white dark:bg-dark-800",
                title: $(M.row)
              }, [
                e("span", {
                  class: R(["status-dot", N(M.row.health, M.row.metrics.request_count)])
                }, null, 2),
                e("strong", zl, n($(M.row)), 1)
              ], 8, Il),
              e("strong", Nl, n(B(M.row.metrics)), 1),
              e("strong", {
                class: "summary-value bg-white text-xs font-medium tabular-nums text-gray-600 dark:bg-dark-800 dark:text-gray-300",
                title: re(M.row.metrics.ttft)
              }, n(be(M.row.metrics.ttft.p50_ms)), 9, Bl),
              t.showThroughput ? (o(), i("strong", {
                key: 0,
                class: "summary-value bg-white text-xs font-medium tabular-nums text-gray-600 dark:bg-dark-800 dark:text-gray-300",
                title: ve(M.row.metrics.tpm)
              }, n(he(M.row.metrics.tpm)), 9, Pl)) : S("", !0),
              e("strong", Fl, n(me(M.row.metrics.cache_rate)), 1),
              e("div", {
                class: "pulse-track grid items-stretch",
                style: de(I.value)
              }, [
                (o(!0), i(q, null, Z(M.slots, (C) => (o(), i("span", {
                  key: C.start,
                  class: R(["pulse-cell relative rounded-sm border-0 p-0 outline-offset-1", [
                    C.bucket ? N(C.bucket.health, C.bucket.metrics.request_count) : "channel-health-unknown",
                    C.bucket ? "has-data" : "is-empty"
                  ]]),
                  tabindex: "0",
                  role: "img",
                  title: C.bucket ? L(C.bucket) : l(a)("channelMonitorV2.matrix.noTrafficAt", { time: pe(C.start) }),
                  "aria-label": C.bucket ? L(C.bucket) : l(a)("channelMonitorV2.matrix.noTrafficAt", { time: pe(C.start) }),
                  onMouseenter: (U) => Y(U, C),
                  onMousemove: f[0] || (f[0] = (U) => oe(U)),
                  onMouseleave: X,
                  onFocus: (U) => Y(U, C),
                  onBlur: X
                }, [
                  e("span", jl, [
                    C.bucket ? (o(), i(q, { key: 0 }, [
                      e("span", Ol, n(pe(C.start)), 1),
                      e("span", Wl, n(l(a)("channelMonitorV2.matrix.scoreLine", { score: _(C.bucket.health) })), 1),
                      e("span", ql, n(l(a)("channelMonitorV2.metrics.successRateValue", { value: B(C.bucket.metrics) })), 1),
                      e("span", Ul, n(l(a)("channelMonitorV2.metrics.ttftValue", { value: re(C.bucket.metrics.ttft) })), 1),
                      t.showThroughput ? (o(), i("span", Hl, n(l(a)("channelMonitorV2.metrics.tpsValue", { value: he(C.bucket.metrics.tpm) })), 1)) : S("", !0),
                      e("span", Gl, n(l(a)("channelMonitorV2.metrics.cacheRateValue", { value: me(C.bucket.metrics.cache_rate) })), 1),
                      e("span", Zl, n(l(a)("channelMonitorV2.metrics.errorRateValue", { value: me(C.bucket.metrics.error_rate) })), 1),
                      t.showThroughput ? (o(), i("span", Kl, n(l(a)("channelMonitorV2.metrics.rpmValue", { value: Ce(C.bucket.metrics.rpm) })), 1)) : S("", !0),
                      e("span", Xl, n(l(a)("channelMonitorV2.metrics.durationValue", { value: re(C.bucket.metrics.duration) })), 1)
                    ], 64)) : (o(), i(q, { key: 1 }, [
                      e("span", Yl, n(pe(C.start)), 1),
                      e("span", Jl, n(l(a)("channelMonitorV2.matrix.noTraffic")), 1)
                    ], 64))
                  ])
                ], 42, Al))), 128))
              ], 4)
            ], 2))), 128))
          ], 4)
        ], 544)) : (o(), i("div", Ql, [
          j(Oe, {
            title: l(a)("channelMonitorV2.matrix.emptyTitle"),
            description: l(a)("channelMonitorV2.empty.description")
          }, null, 8, ["title", "description"])
        ])),
        e("div", {
          class: "mt-4 flex flex-col gap-2",
          "aria-label": l(a)("channelMonitorV2.matrix.legendAria")
        }, [
          e("div", tr, [
            e("span", ar, n(l(a)("channelMonitorV2.matrix.bad")), 1),
            f[1] || (f[1] = e("div", { class: "channel-health-score-legend h-2.5 flex-1 overflow-hidden rounded-full" }, null, -1)),
            e("span", nr, n(l(a)("channelMonitorV2.matrix.good")), 1)
          ]),
          e("div", lr, [
            e("span", rr, [
              f[2] || (f[2] = e("i", { class: "status-dot channel-health-score10" }, null, -1)),
              J(n(l(a)("channelMonitorV2.matrix.healthyLegend")), 1)
            ]),
            e("span", or, [
              f[3] || (f[3] = e("i", { class: "status-dot channel-health-score6" }, null, -1)),
              J(n(l(a)("channelMonitorV2.matrix.warningLegend")), 1)
            ]),
            e("span", sr, [
              f[4] || (f[4] = e("i", { class: "status-dot channel-health-score2" }, null, -1)),
              J(n(l(a)("channelMonitorV2.matrix.criticalLegend")), 1)
            ]),
            e("span", ir, [
              f[5] || (f[5] = e("i", { class: "status-dot channel-health-unknown" }, null, -1)),
              J(n(l(a)("channelMonitorV2.matrix.unknownLegend")), 1)
            ])
          ])
        ], 8, er)
      ]),
      (o(), ae(nt, { to: "body" }, [
        d.visible ? (o(), i("div", {
          key: 0,
          class: "matrix-floating-tooltip",
          style: de({ left: `${d.x}px`, top: `${d.y}px` }),
          role: "tooltip"
        }, [
          (o(!0), i(q, null, Z(d.lines, (M, C) => (o(), i("span", {
            key: `${C}:${M}`,
            class: R(["matrix-floating-tooltip-line", C === 0 ? "matrix-floating-tooltip-title" : ""])
          }, n(M), 3))), 128))
        ], 4)) : S("", !0)
      ]))
    ]));
  }
}), ur = /* @__PURE__ */ je(cr, [["__scopeId", "data-v-796a4fe5"]]), dr = { class: "space-y-6 pb-12" }, mr = { class: "card sticky top-0 z-20 !rounded-lg !border-0 p-0 shadow-sm ring-1 ring-gray-900/5 backdrop-blur-sm dark:!bg-dark-800 dark:ring-dark-700 supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-dark-800/95" }, hr = { class: "page-header mb-0 flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 dark:border-dark-700 sm:px-6" }, pr = { class: "min-w-0" }, gr = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, fr = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, vr = { class: "page-description mt-1.5 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400" }, br = { class: "relative flex h-2 w-2 shrink-0" }, xr = {
  key: 0,
  class: "inline-flex items-center gap-1 text-primary-600 dark:text-primary-300"
}, yr = { key: 1 }, kr = {
  key: 2,
  class: "text-gray-400"
}, _r = {
  key: 3,
  class: "badge badge-warning"
}, wr = {
  key: 4,
  class: "badge badge-primary inline-flex items-center gap-1"
}, Mr = ["title", "disabled"], $r = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50 px-5 py-3 dark:border-dark-700 dark:bg-dark-900/60 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Vr = { class: "flex flex-wrap items-start justify-between gap-3" }, Cr = { class: "min-w-0 flex-1" }, Sr = { class: "text-sm font-semibold text-gray-900 dark:text-gray-100" }, Rr = { class: "mt-0.5 text-xs text-gray-600 dark:text-gray-300" }, Tr = { class: "shrink-0 text-xs font-medium tabular-nums text-gray-700 dark:text-gray-200" }, Lr = ["aria-valuenow", "aria-label"], Dr = { class: "monitor-toolbar flex flex-nowrap items-center gap-1.5 overflow-x-auto px-4 py-3 sm:gap-2 sm:px-5" }, Er = ["aria-label"], Ir = ["onClick"], zr = ["disabled"], Nr = ["aria-label"], Br = ["aria-label"], Pr = ["onClick"], Fr = ["aria-label"], Ar = { class: "relative min-h-[320px]" }, jr = {
  key: 2,
  class: "card flex min-h-[320px] items-center justify-center !rounded-lg !border-0 text-sm text-gray-400 shadow-sm ring-1 ring-gray-900/5 dark:ring-dark-700"
}, Or = { class: "animate-pulse" }, Wr = { class: "card flex min-h-0 flex-col overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, qr = { class: "border-b border-gray-100 px-5 pt-4 dark:border-dark-700 sm:px-6" }, Ur = ["aria-label"], Hr = ["aria-selected", "onClick"], Gr = { class: "min-h-0 max-h-[min(52vh,520px)] overflow-auto p-4 sm:p-5" }, Zr = {
  key: 0,
  class: "table-container border-0"
}, Kr = { class: "table monitor-table min-w-[720px]" }, Xr = { key: 0 }, Yr = { key: 1 }, Jr = ["onClick"], Qr = { class: "flex items-center gap-2" }, eo = { class: "block text-xs text-gray-500 dark:text-dark-400" }, to = { class: "font-semibold text-gray-900 dark:text-white" }, ao = { class: "block" }, no = { class: "text-xs text-gray-400" }, lo = { class: "block" }, ro = { class: "text-xs text-gray-400" }, oo = ["title"], so = { key: 1 }, io = {
  key: 1,
  class: "space-y-3"
}, co = ["onClick"], uo = { class: "flex min-w-0 items-center gap-1.5 truncate text-gray-700 dark:text-gray-200" }, mo = { class: "truncate" }, ho = {
  key: 0,
  class: "badge badge-gray shrink-0 !px-1.5 !py-0 text-[10px]"
}, po = { class: "h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-dark-700" }, go = {
  key: 0,
  class: "mt-3 space-y-2 border-t border-gray-100 pt-3 dark:border-dark-700"
}, fo = { class: "mb-1 flex flex-wrap items-center gap-2" }, vo = { class: "badge badge-gray !px-1.5 !py-0 text-[10px]" }, bo = { class: "truncate font-medium" }, xo = {
  key: 0,
  class: "text-gray-400"
}, yo = {
  key: 1,
  class: "text-gray-400"
}, ko = { class: "ml-auto text-gray-400" }, _o = { class: "break-words leading-relaxed" }, wo = {
  key: 1,
  class: "text-xs text-gray-400"
}, Mo = {
  key: 2,
  class: "table-container border-0"
}, $o = { class: "table monitor-table min-w-[640px]" }, Vo = { class: "w-16" }, Co = { key: 0 }, So = { key: 1 }, Ro = {
  key: 0,
  class: "badge badge-primary ml-2 !px-1.5 !py-0 text-[10px]"
}, To = { class: "block" }, Lo = { class: "text-xs text-gray-400" }, Do = { class: "block" }, Eo = { class: "text-xs text-gray-400" }, Io = ["title"], zo = { key: 1 }, No = {
  key: 3,
  class: "empty-state py-10 text-sm text-gray-400"
}, Bo = {
  key: 4,
  class: "empty-state py-10"
}, Po = { class: "empty-state-title text-base" }, Fo = { class: "empty-state-description" }, Ao = /* @__PURE__ */ Q({
  __name: "ChannelStatusV2View",
  setup(t) {
    const a = Gt(), c = Zt(), m = Kt(), d = Ae(), { t: r, te: v, locale: b } = le(), y = k(() => m.isAdmin), g = k(() => y.value || !Nt()), T = k(() => y.value || !Bt()), V = k(() => [
      { value: "90m", label: r("channelMonitorV2.ranges.90m") },
      { value: "24h", label: r("channelMonitorV2.ranges.24h") },
      { value: "7d", label: r("channelMonitorV2.ranges.7d") },
      { value: "30d", label: r("channelMonitorV2.ranges.30d") }
    ]), I = k(() => {
      const s = [
        { value: "models", label: r("channelMonitorV2.tabs.models") },
        { value: "errors", label: r("channelMonitorV2.tabs.errors") }
      ];
      return T.value && s.push({ value: "users", label: r("channelMonitorV2.tabs.users") }), s;
    }), A = k(() => [
      { value: "platform", label: r("channelMonitorV2.groupBy.platform") },
      { value: "platform_group", label: r("channelMonitorV2.groupBy.platformGroup") },
      { value: "platform_model", label: r("channelMonitorV2.groupBy.platformModel") },
      { value: "platform_group_model", label: r("channelMonitorV2.groupBy.platformGroupModel") }
    ]), K = k(() => [
      { value: "overall", label: r("channelMonitorV2.healthMode.overall") },
      { value: "success", label: r("channelMonitorV2.healthMode.success") },
      { value: "ttft", label: r("channelMonitorV2.healthMode.ttft") },
      { value: "cache", label: r("channelMonitorV2.healthMode.cache") }
    ]), h = z({
      range: U(a.query.range),
      platforms: C(a.query.platform),
      groupIds: C(a.query.group).map(Number).filter(Boolean),
      models: C(a.query.model)
    }), w = z(se(a.query.tab, T.value)), F = z(ge(a.query.group_by)), O = z(Te(a.query.health_mode)), P = z(pt(a.query.trend_view)), N = z({ platforms: [], groups: [], models: [] }), $ = z(null), G = z(null), B = z([]), _ = z([]), L = z([]), D = z(!1), H = z(!1), Y = z(!1), oe = z(/* @__PURE__ */ new Set());
    let X = null, ee = 0, re = null;
    const me = k(
      () => h.value.platforms.length + h.value.groupIds.length + h.value.models.length > 0
    ), Ce = k(
      () => (N.value.platforms || []).map((s) => ({
        value: s.value,
        label: s.label
      }))
    ), he = k(() => new Set(h.value.platforms)), ve = k(
      () => (N.value.groups || []).filter(
        (s) => he.value.size === 0 || !s.platform || he.value.has(s.platform)
      ).map((s) => ({
        value: String(s.id),
        label: s.platform ? `${s.platform} / ${s.name || `#${s.id}`}` : s.name || `#${s.id}`
      }))
    ), be = k(
      () => (N.value.models || []).filter(
        (s) => he.value.size === 0 || !s.platform || he.value.has(s.platform)
      ).map((s) => ({
        value: s.value,
        label: s.platform && !s.label.includes(s.platform) ? `${s.platform} / ${s.label}` : s.label
      }))
    ), xe = k({
      get: () => h.value.groupIds.map(String),
      set: (s) => {
        h.value.groupIds = s.map(Number).filter((x) => Number.isInteger(x) && x > 0);
      }
    });
    ne(
      [ve, be],
      () => {
        if (ve.value.length > 0) {
          const s = new Set(ve.value.map((E) => E.value)), x = h.value.groupIds.filter((E) => s.has(String(E)));
          x.length !== h.value.groupIds.length && (h.value.groupIds = x);
        }
        if (be.value.length > 0) {
          const s = new Set(be.value.map((E) => E.value)), x = h.value.models.filter((E) => s.has(E));
          x.length !== h.value.models.length && (h.value.models = x);
        }
      },
      { flush: "post" }
    );
    const pe = k(
      () => w.value === "models" ? B.value.length === 0 : w.value === "errors" ? _.value.length === 0 : L.value.length === 0
    ), u = k(() => {
      var s, x, E;
      return !!((E = (x = (s = $.value) == null ? void 0 : s.coverage) == null ? void 0 : x.bootstrap) != null && E.active);
    }), f = k(() => {
      var x, E, W;
      const s = (W = (E = (x = $.value) == null ? void 0 : x.coverage) == null ? void 0 : E.bootstrap) == null ? void 0 : W.progress_percent;
      return typeof s != "number" || Number.isNaN(s) ? 0 : Math.min(100, Math.max(0, Math.round(s)));
    }), M = k(() => {
      var x;
      const s = ((x = G.value) == null ? void 0 : x.items) || [];
      return F.value === "platform_group" || F.value === "platform_group_model" ? s.filter((E) => E.group_id != null && Number(E.group_id) > 0) : s;
    });
    function C(s) {
      return typeof s == "string" ? s.split(",").filter(Boolean) : [];
    }
    function U(s) {
      return ["90m", "24h", "7d", "30d"].includes(String(s)) ? s : "90m";
    }
    function ge(s) {
      return [
        "platform",
        "platform_group",
        "platform_model",
        "platform_group_model"
      ].includes(s) ? s : "platform_group";
    }
    function se(s, x) {
      return (x ? ["models", "errors", "users"] : ["models", "errors"]).includes(s) ? s : "models";
    }
    function Te(s) {
      return ["overall", "success", "ttft", "cache"].includes(s) ? s : "overall";
    }
    function pt(s) {
      return s === "line" ? "line" : "pulse";
    }
    function we() {
      c.replace({
        query: {
          range: h.value.range,
          platform: h.value.platforms.join(",") || void 0,
          group: h.value.groupIds.join(",") || void 0,
          model: h.value.models.join(",") || void 0,
          group_by: F.value,
          health_mode: O.value,
          trend_view: P.value === "line" ? "line" : void 0,
          tab: w.value
        }
      });
    }
    async function gt(s, x = ee) {
      const E = {
        range: h.value.range,
        platforms: [],
        groupIds: [],
        models: []
      }, W = await jt(E, y.value, s);
      x === ee && (N.value = W);
    }
    async function He(s, x = ee) {
      const [E, W] = await Promise.all([
        Ot(h.value, y.value, s),
        Wt(h.value, F.value, y.value, s)
      ]);
      x === ee && ($.value = E, G.value = W, bt(), await Ze(s, x));
    }
    async function Se(s = !0) {
      X == null || X.abort();
      const x = new AbortController();
      X = x;
      const E = ++ee;
      Y.value = !0, s || (D.value = !0);
      try {
        await Promise.all([
          gt(x.signal, E),
          He(x.signal, E)
        ]);
      } catch (W) {
        W.name !== "CanceledError" && d.showError(ke(W, r("channelMonitorV2.loadFailed")));
      } finally {
        E === ee && (D.value = !1, H.value = !1, Y.value = !1);
      }
    }
    async function Ge(s = !0) {
      X == null || X.abort();
      const x = new AbortController();
      X = x;
      const E = ++ee;
      Y.value = !0, s || (D.value = !0);
      try {
        await He(x.signal, E);
      } catch (W) {
        W.name !== "CanceledError" && d.showError(ke(W, r("channelMonitorV2.loadFailed")));
      } finally {
        E === ee && (D.value = !1, H.value = !1, Y.value = !1);
      }
    }
    async function Ze(s, x = ee) {
      H.value = !0;
      try {
        w.value === "models" ? B.value = (await Pt(h.value, y.value, s)).items || [] : w.value === "errors" ? _.value = (await Ft(h.value, y.value, s)).items || [] : T.value ? L.value = (await At(h.value, y.value, s)).items || [] : L.value = [];
      } catch (E) {
        const W = E;
        if ((W == null ? void 0 : W.name) === "AbortError" || (W == null ? void 0 : W.name) === "CanceledError" || (W == null ? void 0 : W.code) === "ERR_CANCELED") return;
        d.showError(ke(E, r("channelMonitorV2.detailLoadFailed")));
      } finally {
        x === ee && (H.value = !1);
      }
    }
    function ft(s) {
      h.value.range = s;
    }
    function vt() {
      h.value = {
        ...h.value,
        platforms: [],
        groupIds: [],
        models: []
      };
    }
    function bt() {
      var x, E;
      re && (window.clearInterval(re), re = null);
      const s = u.value ? 10 : ((E = (x = $.value) == null ? void 0 : x.config) == null ? void 0 : E.refresh_interval_seconds) || 300;
      re = window.setInterval(() => {
        !D.value && !Y.value && Se(!0);
      }, Math.max(u.value ? 10 : 60, s) * 1e3);
    }
    function xt(s) {
      h.value.platforms = [s.platform], h.value.models = [s.model];
    }
    function Le(s) {
      return qe(s);
    }
    function yt(s) {
      return Intl.NumberFormat(b.value || void 0, { maximumFractionDigits: 2 }).format(s || 0);
    }
    function De(s) {
      return rt(s);
    }
    function Ee(s) {
      return Intl.NumberFormat(b.value || void 0, { maximumFractionDigits: 3 }).format(
        Ue(s)
      );
    }
    function ue(s) {
      return Re(s);
    }
    function Ie(s) {
      return ie(s);
    }
    function kt(s, x) {
      return Tn(s, x);
    }
    function ze(s) {
      return it(s.p50_ms, s.p90_ms, s.avg_ms, s.p95_ms);
    }
    function _t(s) {
      return Dn(s.avg_ms, s.p90_ms, s.p95_ms);
    }
    function wt(s) {
      return new Intl.DateTimeFormat(b.value || void 0, {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(s));
    }
    function Mt(s) {
      return !s || typeof s == "string" ? `status-dot health-${s || "unknown"}` : `status-dot ${s.score != null ? st(s, "overall", 0) : `health-${s.overall || "unknown"}`}`;
    }
    function $t(s) {
      const x = `channelMonitorV2.errorCategories.${s}`;
      return v(x) ? r(x) : s;
    }
    function Vt(s) {
      const x = new Set(oe.value);
      x.has(s) ? x.delete(s) : x.add(s), oe.value = x;
    }
    let Ke = h.value.range;
    return ne(
      h,
      () => {
        we();
        const s = h.value.range !== Ke;
        Ke = h.value.range, s ? Se(!0) : Ge(!0);
      },
      { deep: !0 }
    ), ne(F, () => {
      we(), Ge(!0);
    }), ne(O, we), ne(P, we), ne(w, () => {
      we(), Ze();
    }), ne(T, (s) => {
      !s && w.value === "users" && (w.value = "models");
    }), Fe(() => void Se(!1)), Ve(() => {
      X == null || X.abort(), re && window.clearInterval(re);
    }), (s, x) => {
      var E, W, Xe;
      return o(), i("div", dr, [
        e("section", mr, [
          e("header", hr, [
            e("div", pr, [
              e("h1", gr, [
                e("span", fr, [
                  j(ce, {
                    name: "chart",
                    size: "sm"
                  })
                ]),
                J(" " + n(l(r)("channelMonitorV2.title")), 1)
              ]),
              e("div", vr, [
                e("span", br, [
                  e("span", {
                    class: R(["relative inline-flex h-2 w-2 rounded-full", D.value || Y.value ? "bg-gray-400" : "bg-zo-signal-500"])
                  }, null, 2)
                ]),
                Y.value ? (o(), i("span", xr, [
                  j(et, { size: "sm" }),
                  J(" " + n(l(r)("channelMonitorV2.updating")), 1)
                ])) : (E = $.value) != null && E.coverage.data_through ? (o(), i("span", yr, n(l(r)("channelMonitorV2.updatedTo", { time: wt($.value.coverage.data_through) })), 1)) : (o(), i("span", kr, n(l(r)("common.loading")), 1)),
                $.value && !$.value.coverage.coverage_complete && !u.value ? (o(), i("span", _r, n(l(r)("channelMonitorV2.partialCoverage")), 1)) : S("", !0),
                u.value ? (o(), i("span", wr, [
                  j(et, { size: "sm" }),
                  J(" " + n(l(r)("channelMonitorV2.bootstrap.progress", { percent: f.value })), 1)
                ])) : S("", !0)
              ])
            ]),
            e("button", {
              class: "btn btn-secondary btn-icon flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
              type: "button",
              title: l(r)("common.refresh"),
              disabled: D.value,
              onClick: x[0] || (x[0] = (p) => Se(!1))
            }, [
              j(ce, {
                name: "refresh",
                size: "sm",
                class: R(D.value ? "animate-spin" : "")
              }, null, 8, ["class"])
            ], 8, Mr)
          ]),
          u.value ? (o(), i("div", $r, [
            e("div", Vr, [
              e("div", Cr, [
                e("p", Sr, n(l(r)("channelMonitorV2.bootstrap.title")), 1),
                e("p", Rr, n(l(r)("channelMonitorV2.bootstrap.description")), 1)
              ]),
              e("span", Tr, n(l(r)("channelMonitorV2.bootstrap.progress", { percent: f.value })), 1)
            ]),
            e("div", {
              class: "mt-2.5 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700",
              role: "progressbar",
              "aria-valuenow": f.value,
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              "aria-label": l(r)("channelMonitorV2.bootstrap.working")
            }, [
              e("div", {
                class: "h-full rounded-full bg-gray-900 transition-[width] duration-200 ease-out dark:bg-white",
                style: de({ width: `${f.value}%` })
              }, null, 4)
            ], 8, Lr)
          ])) : S("", !0),
          e("div", Dr, [
            e("div", {
              class: "tabs inline-flex shrink-0",
              role: "group",
              "aria-label": l(r)("channelMonitorV2.timeRange")
            }, [
              (o(!0), i(q, null, Z(V.value, (p) => (o(), i("button", {
                key: p.value,
                type: "button",
                class: R(["tab !px-2 !py-1 text-xs sm:!px-2.5", h.value.range === p.value ? "tab-active" : ""]),
                onClick: (te) => ft(p.value)
              }, n(p.label), 11, Ir))), 128))
            ], 8, Er),
            x[7] || (x[7] = e("span", {
              class: "mx-0.5 hidden h-5 w-px shrink-0 bg-gray-200 dark:bg-dark-700 sm:block",
              "aria-hidden": "true"
            }, null, -1)),
            j(Ne, {
              modelValue: h.value.platforms,
              "onUpdate:modelValue": x[1] || (x[1] = (p) => h.value.platforms = p),
              compact: "",
              label: l(r)("channelMonitorV2.filters.platform"),
              "all-label": l(r)("channelMonitorV2.filters.allPlatforms"),
              options: Ce.value
            }, null, 8, ["modelValue", "label", "all-label", "options"]),
            j(Ne, {
              modelValue: xe.value,
              "onUpdate:modelValue": x[2] || (x[2] = (p) => xe.value = p),
              compact: "",
              label: l(r)("channelMonitorV2.filters.group"),
              "all-label": l(r)("channelMonitorV2.filters.allGroups"),
              options: ve.value
            }, null, 8, ["modelValue", "label", "all-label", "options"]),
            j(Ne, {
              modelValue: h.value.models,
              "onUpdate:modelValue": x[3] || (x[3] = (p) => h.value.models = p),
              compact: "",
              label: l(r)("channelMonitorV2.filters.model"),
              "all-label": l(r)("channelMonitorV2.filters.allModels"),
              options: be.value
            }, null, 8, ["modelValue", "label", "all-label", "options"]),
            e("button", {
              type: "button",
              class: R(["btn btn-ghost btn-sm shrink-0 !px-2 !py-1 text-xs", me.value ? "" : "opacity-40"]),
              disabled: !me.value,
              onClick: vt
            }, n(l(r)("channelMonitorV2.clearFilters")), 11, zr),
            x[8] || (x[8] = e("span", {
              class: "mx-0.5 hidden h-5 w-px shrink-0 bg-gray-200 dark:bg-dark-700 md:block",
              "aria-hidden": "true"
            }, null, -1)),
            j(Yt, {
              modelValue: F.value,
              "onUpdate:modelValue": x[4] || (x[4] = (p) => F.value = p),
              options: A.value,
              placeholder: l(r)("channelMonitorV2.groupBy.label"),
              class: "monitor-toolbar-select w-[7.5rem] shrink-0 sm:w-[8.5rem]"
            }, null, 8, ["modelValue", "options", "placeholder"]),
            e("div", {
              class: "tabs inline-flex shrink-0",
              role: "group",
              "aria-label": l(r)("channelMonitorV2.trendView.label")
            }, [
              e("button", {
                type: "button",
                class: R(["tab !px-2 !py-1 text-xs", P.value === "pulse" ? "tab-active" : ""]),
                onClick: x[5] || (x[5] = (p) => P.value = "pulse")
              }, n(l(r)("channelMonitorV2.trendView.pulse")), 3),
              e("button", {
                type: "button",
                class: R(["tab !px-2 !py-1 text-xs", P.value === "line" ? "tab-active" : ""]),
                onClick: x[6] || (x[6] = (p) => P.value = "line")
              }, n(l(r)("channelMonitorV2.trendView.line")), 3)
            ], 8, Nr),
            P.value === "pulse" ? (o(), i("div", {
              key: 0,
              class: "tabs inline-flex shrink-0",
              role: "group",
              "aria-label": l(r)("channelMonitorV2.healthMode.label")
            }, [
              (o(!0), i(q, null, Z(K.value, (p) => (o(), i("button", {
                key: p.value,
                type: "button",
                class: R(["tab !px-2 !py-1 text-xs", O.value === p.value ? "tab-active" : ""]),
                onClick: (te) => O.value = p.value
              }, n(p.label), 11, Pr))), 128))
            ], 8, Br)) : S("", !0)
          ])
        ]),
        $.value ? (o(), i("section", {
          key: 0,
          class: R(["grid grid-cols-2 gap-3 sm:grid-cols-3", g.value ? "xl:grid-cols-5" : "xl:grid-cols-4"]),
          "aria-label": l(r)("channelMonitorV2.summaryAria")
        }, [
          j(Me, {
            label: l(r)("channelMonitorV2.metrics.successRate"),
            value: ue(1 - $.value.metrics.error_rate),
            detail: l(r)("channelMonitorV2.metrics.errorRateValue", { value: ue($.value.metrics.error_rate) }),
            state: $.value.health.error_rate
          }, null, 8, ["label", "value", "detail", "state"]),
          j(Me, {
            label: l(r)("channelMonitorV2.metrics.ttftP50"),
            value: Ie($.value.metrics.ttft.p50_ms),
            detail: _t($.value.metrics.ttft),
            title: ze($.value.metrics.ttft),
            state: kt($.value.health.ttft, $.value.metrics.ttft)
          }, null, 8, ["label", "value", "detail", "title", "state"]),
          g.value ? (o(), ae(Me, {
            key: 0,
            label: l(r)("channelMonitorV2.metrics.tps"),
            value: De($.value.metrics.tpm),
            detail: l(r)("channelMonitorV2.metrics.tpsDetail"),
            title: Ee($.value.metrics.tpm)
          }, null, 8, ["label", "value", "detail", "title"])) : S("", !0),
          j(Me, {
            label: l(r)("channelMonitorV2.metrics.cacheRate"),
            value: ue($.value.metrics.cache_rate),
            detail: l(r)("channelMonitorV2.metrics.cacheDetail"),
            state: $.value.health.cache || $.value.health.overall
          }, null, 8, ["label", "value", "detail", "state"]),
          g.value ? (o(), ae(Me, {
            key: 1,
            label: l(r)("channelMonitorV2.metrics.rpm"),
            value: Le($.value.metrics.rpm),
            detail: l(r)("channelMonitorV2.metrics.rpmDetail"),
            title: yt($.value.metrics.rpm)
          }, null, 8, ["label", "value", "detail", "title"])) : S("", !0)
        ], 10, Fr)) : D.value ? (o(), i("section", {
          key: 1,
          class: R(["grid grid-cols-2 gap-3 sm:grid-cols-3", g.value ? "xl:grid-cols-5" : "xl:grid-cols-4"]),
          "aria-hidden": "true"
        }, [
          (o(!0), i(q, null, Z(g.value ? 5 : 4, (p) => (o(), i("div", {
            key: p,
            class: "h-24 animate-pulse rounded-lg bg-gray-50 dark:bg-dark-900/30"
          }))), 128))
        ], 2)) : S("", !0),
        e("div", Ar, [
          P.value === "line" ? (o(), ae(bl, {
            key: 0,
            trend: ((W = $.value) == null ? void 0 : W.trend) || [],
            coverage: ((Xe = $.value) == null ? void 0 : Xe.coverage) || null,
            loading: D.value && !$.value
          }, null, 8, ["trend", "coverage", "loading"])) : G.value ? (o(), ae(ur, {
            key: 1,
            rows: M.value,
            coverage: G.value.coverage,
            "health-mode": O.value,
            "show-throughput": g.value
          }, null, 8, ["rows", "coverage", "health-mode", "show-throughput"])) : D.value ? (o(), i("div", jr, [
            e("span", Or, n(l(r)("common.loading")), 1)
          ])) : S("", !0)
        ]),
        e("section", Wr, [
          e("div", qr, [
            e("nav", {
              class: "tabs w-full max-w-md sm:w-auto",
              role: "tablist",
              "aria-label": l(r)("channelMonitorV2.tabs.aria")
            }, [
              (o(!0), i(q, null, Z(I.value, (p) => (o(), i("button", {
                key: p.value,
                type: "button",
                role: "tab",
                class: R(["tab flex-1 sm:flex-none", w.value === p.value ? "tab-active" : ""]),
                "aria-selected": w.value === p.value,
                onClick: (te) => w.value = p.value
              }, n(p.label), 11, Hr))), 128))
            ], 8, Ur)
          ]),
          e("div", Gr, [
            w.value === "models" ? (o(), i("div", Zr, [
              e("table", Kr, [
                e("thead", null, [
                  e("tr", null, [
                    e("th", null, n(l(r)("channelMonitorV2.table.platformModel")), 1),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.successRate")), 1),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.ttftP50")), 1),
                    g.value ? (o(), i("th", Xr, n(l(r)("channelMonitorV2.metrics.tps")), 1)) : S("", !0),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.cacheRate")), 1),
                    g.value ? (o(), i("th", Yr, n(l(r)("channelMonitorV2.metrics.rpm")), 1)) : S("", !0)
                  ])
                ]),
                e("tbody", null, [
                  (o(!0), i(q, null, Z(B.value, (p) => (o(), i("tr", {
                    key: `${p.platform}:${p.model}`,
                    class: "cursor-pointer",
                    onClick: (te) => xt(p)
                  }, [
                    e("td", null, [
                      e("div", Qr, [
                        e("span", {
                          class: R(Mt(p.health)),
                          "aria-hidden": "true"
                        }, null, 2),
                        e("div", null, [
                          e("span", eo, n(p.platform), 1),
                          e("strong", to, n(p.model === "__other__" ? l(r)("channelMonitorV2.otherModels") : p.model), 1)
                        ])
                      ])
                    ]),
                    e("td", null, [
                      e("span", ao, n(ue(1 - p.metrics.error_rate)), 1),
                      e("small", no, n(l(r)("channelMonitorV2.metrics.errorRateValue", { value: ue(p.metrics.error_rate) })), 1)
                    ]),
                    e("td", null, [
                      e("span", lo, n(Ie(p.metrics.ttft.p50_ms)), 1),
                      e("small", ro, n(ze(p.metrics.ttft)), 1)
                    ]),
                    g.value ? (o(), i("td", {
                      key: 0,
                      title: Ee(p.metrics.tpm)
                    }, n(De(p.metrics.tpm)), 9, oo)) : S("", !0),
                    e("td", null, n(ue(p.metrics.cache_rate)), 1),
                    g.value ? (o(), i("td", so, n(Le(p.metrics.rpm)), 1)) : S("", !0)
                  ], 8, Jr))), 128))
                ])
              ])
            ])) : w.value === "errors" ? (o(), i("div", io, [
              (o(!0), i(q, null, Z(_.value, (p) => (o(), i("div", {
                key: p.category,
                class: R(["rounded-lg bg-gray-50 p-4 text-sm dark:bg-dark-900/30", p.ignored ? "opacity-60" : ""])
              }, [
                e("button", {
                  type: "button",
                  class: "grid w-full grid-cols-[minmax(100px,200px)_1fr_auto_auto] items-center gap-3 text-left",
                  onClick: (te) => Vt(p.category)
                }, [
                  e("span", uo, [
                    e("span", mo, n($t(p.category)), 1),
                    p.ignored ? (o(), i("span", ho, n(l(r)("channelMonitorV2.ignored")), 1)) : S("", !0)
                  ]),
                  e("span", po, [
                    e("i", {
                      class: R(["block h-full rounded-full", p.ignored ? "bg-gray-400 dark:bg-gray-500" : "bg-red-500"]),
                      style: de({ width: `${Math.max(2, p.rate * 100)}%` })
                    }, null, 6)
                  ]),
                  e("small", {
                    class: R(["w-14 text-right text-xs tabular-nums", p.ignored ? "text-gray-400" : "text-gray-500"])
                  }, n(ue(p.rate)), 3),
                  j(ce, {
                    name: "chevronDown",
                    size: "sm",
                    class: R(["text-gray-400 transition-transform", oe.value.has(p.category) ? "rotate-180" : ""])
                  }, null, 8, ["class"])
                ], 8, co),
                oe.value.has(p.category) ? (o(), i("div", go, [
                  y.value && (p.details || []).length ? (o(!0), i(q, { key: 0 }, Z(p.details || [], (te, Ct) => (o(), i("div", {
                    key: `${p.category}:${Ct}:${te.message}`,
                    class: "rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600 dark:bg-dark-900/50 dark:text-dark-300"
                  }, [
                    e("div", fo, [
                      e("span", vo, n(te.platform || "-"), 1),
                      e("span", bo, n(te.model || "-"), 1),
                      te.status_code ? (o(), i("span", xo, n(l(r)("channelMonitorV2.errorDetail.http", { code: te.status_code })), 1)) : S("", !0),
                      te.upstream_status_code ? (o(), i("span", yo, n(l(r)("channelMonitorV2.errorDetail.upstream", { code: te.upstream_status_code })), 1)) : S("", !0),
                      e("span", ko, "×" + n(te.count), 1)
                    ]),
                    e("p", _o, n(te.message || te.error_type || l(r)("channelMonitorV2.errorDetail.noMessage")), 1)
                  ]))), 128)) : (o(), i("p", wo, n(l(r)("channelMonitorV2.errorDetail.empty")), 1))
                ])) : S("", !0)
              ], 2))), 128))
            ])) : (o(), i("div", Mo, [
              e("table", $o, [
                e("thead", null, [
                  e("tr", null, [
                    e("th", Vo, n(l(r)("channelMonitorV2.table.rank")), 1),
                    e("th", null, n(l(r)("channelMonitorV2.table.user")), 1),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.successRate")), 1),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.ttftP50")), 1),
                    g.value ? (o(), i("th", Co, n(l(r)("channelMonitorV2.metrics.tps")), 1)) : S("", !0),
                    e("th", null, n(l(r)("channelMonitorV2.metrics.cacheRate")), 1),
                    g.value ? (o(), i("th", So, n(l(r)("channelMonitorV2.metrics.rpm")), 1)) : S("", !0)
                  ])
                ]),
                e("tbody", null, [
                  (o(!0), i(q, null, Z(L.value, (p) => (o(), i("tr", {
                    key: p.user_id || p.display_label,
                    class: R(p.is_self ? "bg-primary-50 ring-1 ring-inset ring-primary-200/80 dark:bg-primary-900/25 dark:ring-primary-700/50" : "")
                  }, [
                    e("td", null, [
                      j(Qn, {
                        rank: p.rank
                      }, null, 8, ["rank"])
                    ]),
                    e("td", null, [
                      e("strong", {
                        class: R(["font-semibold", p.is_self ? "text-primary-700 dark:text-primary-300" : "text-gray-900 dark:text-white"])
                      }, [
                        J(n(p.display_label) + " ", 1),
                        p.is_self ? (o(), i("span", Ro, n(l(r)("channelMonitorV2.currentUser")), 1)) : S("", !0)
                      ], 2)
                    ]),
                    e("td", null, [
                      e("span", To, n(ue(1 - p.metrics.error_rate)), 1),
                      e("small", Lo, n(l(r)("channelMonitorV2.metrics.errorRateValue", { value: ue(p.metrics.error_rate) })), 1)
                    ]),
                    e("td", null, [
                      e("span", Do, n(Ie(p.metrics.ttft.p50_ms)), 1),
                      e("small", Eo, n(ze(p.metrics.ttft)), 1)
                    ]),
                    g.value ? (o(), i("td", {
                      key: 0,
                      title: Ee(p.metrics.tpm)
                    }, n(De(p.metrics.tpm)), 9, Io)) : S("", !0),
                    e("td", null, n(ue(p.metrics.cache_rate)), 1),
                    g.value ? (o(), i("td", zo, n(Le(p.metrics.rpm)), 1)) : S("", !0)
                  ], 2))), 128))
                ])
              ])
            ])),
            H.value ? (o(), i("div", No, n(l(r)("common.loading")), 1)) : pe.value ? (o(), i("div", Bo, [
              e("p", Po, n(u.value ? l(r)("channelMonitorV2.bootstrap.title") : l(r)("channelMonitorV2.empty.title")), 1),
              e("p", Fo, n(u.value ? l(r)("channelMonitorV2.bootstrap.description") : l(r)("channelMonitorV2.empty.description")), 1)
            ])) : S("", !0)
          ])
        ])
      ]);
    };
  }
}), jo = /* @__PURE__ */ je(Ao, [["__scopeId", "data-v-e9f00255"]]), Xo = /* @__PURE__ */ Q({
  __name: "ChannelStatusView",
  setup(t) {
    const a = k(() => qt());
    return (c, m) => a.value ? (o(), ae(Vn, { key: 0 })) : (o(), ae(jo, { key: 1 }));
  }
});
export {
  Xo as default
};
