import { e as N, u as U, d as z, n as c, g as v, s as R, F as I, h as e, i as o, j as a, l as _, m as b, q as P, _ as C, V as S, k as V, r as E, z as j, A as M, B as O, o as F } from "./cnProviderAdminLeaf-CHNemIo-.js";
import { S as K } from "./platforms-PDcpwPD4.js";
import { C as H, h as D, i as A, j as L, _ as W } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-gEQjzuRj.js";
const Y = { class: "w-20" }, Z = { class: "text-xs text-gray-400" }, G = ["value"], J = { class: "w-20" }, Q = { class: "text-xs text-gray-400" }, X = { class: "text-gray-300" }, ee = ["value"], te = { class: "flex-1" }, ne = { class: "text-xs text-gray-400" }, le = {
  key: 0,
  class: "text-red-500"
}, se = ["value"], ae = { class: "flex-1" }, ie = { class: "text-xs text-gray-400" }, re = {
  key: 0,
  class: "text-red-500"
}, oe = ["value"], de = { class: "flex-1" }, me = { class: "text-xs text-gray-400" }, ue = ["value"], ce = { class: "flex-1" }, pe = { class: "text-xs text-gray-400" }, xe = ["value"], ve = { class: "w-24" }, ye = { class: "text-xs text-gray-400" }, ge = ["value", "placeholder"], fe = { class: "w-20" }, he = { class: "text-xs text-gray-400" }, _e = ["value"], be = { class: "w-20" }, ke = { class: "text-xs text-gray-400" }, $e = { class: "text-gray-300" }, we = ["value"], Ie = { class: "flex-1" }, Pe = { class: "text-xs text-gray-400" }, Te = {
  key: 0,
  class: "text-red-500"
}, Ve = ["value"], q = /* @__PURE__ */ N({
  __name: "IntervalRow",
  props: {
    interval: {},
    mode: {}
  },
  emits: ["update", "remove"],
  setup(n, { emit: w }) {
    const { t } = U(), m = n, y = w, g = z(() => {
      const p = m.interval;
      return (p.input_price == null || p.input_price === "") && (p.output_price == null || p.output_price === "") && (p.cache_write_price == null || p.cache_write_price === "") && (p.cache_read_price == null || p.cache_read_price === "") && (p.per_request_price == null || p.per_request_price === "");
    });
    function h(p, s) {
      y("update", { ...m.interval, [p]: s === "" ? null : s });
    }
    function k(p) {
      const s = parseInt(p, 10);
      return isNaN(s) ? 0 : s;
    }
    function d(p) {
      if (p === "") return null;
      const s = parseInt(p, 10);
      return isNaN(s) ? null : s;
    }
    return (p, s) => (c(), v("div", {
      class: R(["flex items-start gap-2 rounded border p-2", g.value ? "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-950/20" : "border-gray-200 bg-white dark:border-dark-500 dark:bg-dark-700"])
    }, [
      n.mode === "token" ? (c(), v(I, { key: 0 }, [
        e("div", Y, [
          e("label", Z, o(a(t)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: n.interval.min_tokens,
            onInput: s[0] || (s[0] = (x) => h("min_tokens", k(x.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, G)
        ]),
        e("div", J, [
          e("label", Q, [
            _(o(a(t)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", X, o(a(t)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: n.interval.max_tokens ?? "",
            onInput: s[1] || (s[1] = (x) => h("max_tokens", d(x.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, ee)
        ]),
        e("div", te, [
          e("label", ne, [
            _(o(a(t)("admin.channels.form.inputPrice")) + " ", 1),
            g.value ? (c(), v("span", le, "*")) : b("", !0),
            s[11] || (s[11] = _()),
            s[12] || (s[12] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: n.interval.input_price,
            onInput: s[2] || (s[2] = (x) => h("input_price", x.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, se)
        ]),
        e("div", ae, [
          e("label", ie, [
            _(o(a(t)("admin.channels.form.outputPrice")) + " ", 1),
            g.value ? (c(), v("span", re, "*")) : b("", !0),
            s[13] || (s[13] = _()),
            s[14] || (s[14] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: n.interval.output_price,
            onInput: s[3] || (s[3] = (x) => h("output_price", x.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, oe)
        ]),
        e("div", de, [
          e("label", me, [
            _(o(a(t)("admin.channels.form.cacheWritePriceShort")) + " ", 1),
            s[15] || (s[15] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: n.interval.cache_write_price,
            onInput: s[4] || (s[4] = (x) => h("cache_write_price", x.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, ue)
        ]),
        e("div", ce, [
          e("label", pe, [
            _(o(a(t)("admin.channels.form.cacheReadPriceShort")) + " ", 1),
            s[16] || (s[16] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: n.interval.cache_read_price,
            onInput: s[5] || (s[5] = (x) => h("cache_read_price", x.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, xe)
        ])
      ], 64)) : (c(), v(I, { key: 1 }, [
        e("div", ve, [
          e("label", ye, o(n.mode === "image" ? a(t)("admin.channels.form.resolution") : a(t)("admin.channels.form.tierLabel")), 1),
          e("input", {
            value: n.interval.tier_label,
            onInput: s[6] || (s[6] = (x) => h("tier_label", x.target.value)),
            type: "text",
            class: "input mt-0.5 text-xs",
            placeholder: n.mode === "image" ? "1K / 2K / 4K" : ""
          }, null, 40, ge)
        ]),
        e("div", fe, [
          e("label", he, o(a(t)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: n.interval.min_tokens,
            onInput: s[7] || (s[7] = (x) => h("min_tokens", k(x.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, _e)
        ]),
        e("div", be, [
          e("label", ke, [
            _(o(a(t)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", $e, o(a(t)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: n.interval.max_tokens ?? "",
            onInput: s[8] || (s[8] = (x) => h("max_tokens", d(x.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, we)
        ]),
        e("div", Ie, [
          e("label", Pe, [
            _(o(a(t)("admin.channels.form.perRequestPrice")) + " ", 1),
            g.value ? (c(), v("span", Te, "*")) : b("", !0),
            s[17] || (s[17] = _()),
            s[18] || (s[18] = e("span", { class: "text-gray-300" }, "$", -1))
          ]),
          e("input", {
            value: n.interval.per_request_price,
            onInput: s[9] || (s[9] = (x) => h("per_request_price", x.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Ve)
        ])
      ], 64)),
      e("button", {
        type: "button",
        onClick: s[10] || (s[10] = (x) => y("remove")),
        class: "mt-4 rounded p-0.5 text-gray-400 hover:text-red-500"
      }, [
        P(C, {
          name: "x",
          size: "sm"
        })
      ])
    ], 2));
  }
}), Me = { class: "mt-3 border-t border-gray-200 pt-3 dark:border-dark-600" }, Ce = { class: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" }, qe = { class: "min-w-0 flex-1 sm:max-w-sm" }, ze = { class: "block text-xs font-medium text-gray-500 dark:text-gray-400" }, Re = { class: "mt-2 block text-xs text-gray-400" }, Ne = {
  key: 0,
  class: "mt-3 space-y-3"
}, Ue = { class: "min-w-0" }, Se = ["for"], Ke = ["id", "value", "onInput"], Be = { class: "min-w-0" }, Ee = ["for"], je = ["id", "value", "onInput"], Oe = { class: "min-w-0" }, Fe = ["for"], He = ["id", "value", "onInput", "onBlur"], De = ["title", "aria-label", "data-testid", "onClick"], Ae = /* @__PURE__ */ N({
  __name: "TimePricingSection",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: w }) {
    var T;
    const { t } = U(), m = n, y = w, g = `time-pricing-${(T = S()) == null ? void 0 : T.uid}`, h = H.map((r) => {
      const l = D(r);
      return { value: r, label: l ? `${r} (${l})` : r };
    });
    function k(r) {
      y("update:modelValue", { ...m.modelValue, timezone: String(r ?? "") });
    }
    function d(r) {
      const l = r.replace(/：/g, ":");
      return l === "24:00:00" ? "00:00:00" : l;
    }
    function p() {
      y("update:modelValue", {
        ...m.modelValue,
        periods: [
          ...m.modelValue.periods,
          { start_time: "", end_time: "", multiplier: "1.00" }
        ]
      });
    }
    function s(r, l, i) {
      const u = m.modelValue.periods.map((f, B) => B === r ? { ...f, [l]: i } : f);
      y("update:modelValue", { ...m.modelValue, periods: u });
    }
    function x(r, l) {
      A(l) && s(r, "multiplier", Number(l).toFixed(2));
    }
    function $(r) {
      y("update:modelValue", {
        ...m.modelValue,
        periods: m.modelValue.periods.filter((l, i) => i !== r)
      });
    }
    return (r, l) => (c(), v("section", Me, [
      e("div", Ce, [
        e("div", qe, [
          e("label", ze, o(a(t)("admin.channels.form.timePricing")), 1),
          e("label", Re, o(a(t)("admin.channels.form.timezone")), 1),
          P(K, {
            "model-value": n.modelValue.timezone,
            options: a(h),
            "aria-label": a(t)("admin.channels.form.timezone"),
            searchable: "",
            creatable: "",
            class: "mt-1 w-full",
            "onUpdate:modelValue": k
          }, null, 8, ["model-value", "options", "aria-label"])
        ]),
        e("button", {
          type: "button",
          class: "self-start text-xs text-primary-600 hover:text-primary-700 sm:self-end sm:pb-2",
          "data-testid": "add-time-period",
          onClick: p
        }, " + " + o(a(t)("admin.channels.form.addTimePeriod")), 1)
      ]),
      n.modelValue.periods.length > 0 ? (c(), v("div", Ne, [
        (c(!0), v(I, null, V(n.modelValue.periods, (i, u) => (c(), v("div", {
          key: u,
          class: "grid grid-cols-1 gap-2 border-t border-gray-200 pt-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_2rem] sm:items-end dark:border-dark-600"
        }, [
          e("div", Ue, [
            e("label", {
              for: `${g}-start-${u}`,
              class: "block text-xs text-gray-400"
            }, o(a(t)("admin.channels.form.startTime")), 9, Se),
            e("input", {
              id: `${g}-start-${u}`,
              value: i.start_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (f) => s(u, "start_time", d(f.target.value))
            }, null, 40, Ke)
          ]),
          e("div", Be, [
            e("label", {
              for: `${g}-end-${u}`,
              class: "block text-xs text-gray-400"
            }, o(a(t)("admin.channels.form.endTime")), 9, Ee),
            e("input", {
              id: `${g}-end-${u}`,
              value: i.end_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (f) => s(u, "end_time", d(f.target.value))
            }, null, 40, je)
          ]),
          e("div", Oe, [
            e("label", {
              for: `${g}-multiplier-${u}`,
              class: "block text-xs text-gray-400"
            }, o(a(t)("admin.channels.form.multiplier")), 9, Fe),
            e("input", {
              id: `${g}-multiplier-${u}`,
              value: i.multiplier,
              type: "number",
              min: "0.01",
              step: "0.01",
              class: "input mt-1 w-full text-sm",
              onInput: (f) => s(u, "multiplier", f.target.value),
              onBlur: (f) => x(u, f.target.value)
            }, null, 40, He)
          ]),
          e("button", {
            type: "button",
            class: "flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:text-red-500",
            title: a(t)("admin.channels.form.removeTimePeriod"),
            "aria-label": a(t)("admin.channels.form.removeTimePeriod"),
            "data-testid": `remove-time-period-${u}`,
            onClick: (f) => $(u)
          }, [
            P(C, {
              name: "trash",
              size: "sm"
            })
          ], 8, De)
        ]))), 128))
      ])) : b("", !0)
    ]));
  }
}), Le = { class: "rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-dark-600 dark:bg-dark-800" }, We = {
  key: 0,
  class: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden"
}, Ye = { class: "flex min-w-0 flex-1 flex-wrap items-center gap-1" }, Ze = {
  key: 0,
  class: "whitespace-nowrap text-xs text-gray-400"
}, Ge = {
  key: 1,
  class: "text-xs italic text-gray-400"
}, Je = { class: "flex-shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300" }, Qe = {
  key: 1,
  class: "flex-1 text-xs font-medium text-gray-500 dark:text-gray-400"
}, Xe = { class: "collapsible-inner" }, et = { class: "mt-3 flex items-start gap-2" }, tt = { class: "flex-1" }, nt = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, lt = { class: "w-40" }, st = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, at = { key: 0 }, it = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, rt = { class: "mt-1 grid grid-cols-2 gap-2 sm:grid-cols-6" }, ot = { class: "text-xs text-gray-400" }, dt = ["value", "placeholder"], mt = { class: "text-xs text-gray-400" }, ut = ["value", "placeholder"], ct = { class: "text-xs text-gray-400" }, pt = ["value", "placeholder"], xt = { class: "text-xs text-gray-400" }, vt = ["value", "placeholder"], yt = { class: "text-xs text-gray-400" }, gt = ["value", "placeholder"], ft = { class: "text-xs text-gray-400" }, ht = ["value", "placeholder"], _t = {
  key: 0,
  class: "mt-3"
}, bt = { class: "flex items-center justify-between" }, kt = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, $t = {
  key: 0,
  class: "mt-2 space-y-2"
}, wt = { key: 1 }, It = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, Pt = { class: "mt-1 w-48" }, Tt = ["value", "placeholder"], Vt = { class: "mt-3 flex items-center justify-between" }, Mt = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Ct = {
  key: 0,
  class: "mt-2 space-y-2"
}, qt = {
  key: 1,
  class: "mt-2 rounded border border-dashed border-gray-300 p-3 text-center text-xs text-gray-400 dark:border-dark-500"
}, zt = { key: 2 }, Rt = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, Nt = { class: "mt-1 w-48" }, Ut = ["value", "placeholder"], St = { class: "mt-3 flex items-center justify-between" }, Kt = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Bt = {
  key: 0,
  class: "mt-2 space-y-2"
}, Et = /* @__PURE__ */ N({
  __name: "PricingEntryCard",
  props: {
    entry: {},
    platform: {},
    hideTokenIntervals: { type: Boolean, default: !1 },
    enableTimePricing: { type: Boolean, default: !1 }
  },
  emits: ["update", "remove"],
  setup(n, { emit: w }) {
    const { t } = U(), m = n, y = w, g = E(m.entry.models.length > 0), h = z(() => [
      { value: "token", label: t("admin.channels.billingMode.token") },
      { value: "per_request", label: t("admin.channels.billingMode.perRequest") },
      { value: "image", label: t("admin.channels.billingMode.image") },
      { value: "video", label: t("admin.channels.billingMode.video") }
    ]), k = z(() => {
      const r = h.value.find((l) => l.value === m.entry.billing_mode);
      return r ? r.label : m.entry.billing_mode;
    });
    function d(r, l) {
      y("update", { ...m.entry, [r]: l === "" ? null : l });
    }
    function p() {
      const r = [...m.entry.intervals || []];
      r.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: r.length
      }), y("update", { ...m.entry, intervals: r });
    }
    function s() {
      const r = [...m.entry.intervals || []], l = m.entry.billing_mode === "video" ? ["480p", "720p", "1080p"] : ["1K", "2K", "4K", "HD"];
      r.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: l[r.length] || "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: r.length
      }), y("update", { ...m.entry, intervals: r });
    }
    function x(r, l) {
      const i = [...m.entry.intervals || []];
      i[r] = l, y("update", { ...m.entry, intervals: i });
    }
    function $(r) {
      const l = [...m.entry.intervals || []];
      l.splice(r, 1), y("update", { ...m.entry, intervals: l });
    }
    function T(r) {
      y("update", { ...m.entry, models: r });
    }
    return (r, l) => (c(), v("div", Le, [
      e("div", {
        class: "flex cursor-pointer select-none items-center gap-2",
        onClick: l[1] || (l[1] = (i) => g.value = !g.value)
      }, [
        P(C, {
          name: g.value ? "chevronRight" : "chevronDown",
          size: "sm",
          "stroke-width": 2,
          class: "flex-shrink-0 text-gray-400 transition-transform duration-200"
        }, null, 8, ["name"]),
        g.value ? (c(), v("div", We, [
          e("div", Ye, [
            (c(!0), v(I, null, V(n.entry.models.slice(0, 3), (i, u) => (c(), v("span", {
              key: u,
              class: R(["inline-flex shrink-0 rounded px-1.5 py-0.5 text-xs", a(L)(m.platform || "")])
            }, o(i), 3))), 128)),
            n.entry.models.length > 3 ? (c(), v("span", Ze, " +" + o(n.entry.models.length - 3), 1)) : b("", !0),
            n.entry.models.length === 0 ? (c(), v("span", Ge, o(a(t)("admin.channels.form.noModels")), 1)) : b("", !0)
          ]),
          e("span", Je, o(k.value), 1)
        ])) : (c(), v("div", Qe, o(a(t)("admin.channels.form.pricingEntry")), 1)),
        e("button", {
          type: "button",
          onClick: l[0] || (l[0] = j((i) => y("remove"), ["stop"])),
          class: "flex-shrink-0 rounded p-1 text-gray-400 hover:text-red-500"
        }, [
          P(C, {
            name: "trash",
            size: "sm"
          })
        ])
      ]),
      e("div", {
        class: R(["collapsible-content", { "collapsible-content--collapsed": g.value }])
      }, [
        e("div", Xe, [
          e("div", et, [
            e("div", tt, [
              e("label", nt, [
                _(o(a(t)("admin.channels.form.models")) + " ", 1),
                l[13] || (l[13] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              P(W, {
                models: n.entry.models,
                platform: m.platform,
                "onUpdate:models": l[2] || (l[2] = (i) => T(i)),
                placeholder: a(t)("admin.channels.form.modelsPlaceholder"),
                class: "mt-1"
              }, null, 8, ["models", "platform", "placeholder"])
            ]),
            e("div", lt, [
              e("label", st, o(a(t)("admin.channels.form.billingMode")), 1),
              P(K, {
                modelValue: n.entry.billing_mode,
                "onUpdate:modelValue": l[3] || (l[3] = (i) => y("update", {
                  ...n.entry,
                  billing_mode: i,
                  intervals: [],
                  time_pricing: { ...n.entry.time_pricing, periods: [] }
                })),
                options: h.value,
                class: "mt-1"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          n.entry.billing_mode === "token" ? (c(), v("div", at, [
            e("label", it, [
              _(o(a(t)("admin.channels.form.defaultPrices")) + " ", 1),
              l[14] || (l[14] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$/MTok", -1))
            ]),
            e("div", rt, [
              e("div", null, [
                e("label", ot, o(a(t)("admin.channels.form.inputPrice")), 1),
                e("input", {
                  value: n.entry.input_price,
                  onInput: l[4] || (l[4] = (i) => d("input_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, dt)
              ]),
              e("div", null, [
                e("label", mt, o(a(t)("admin.channels.form.outputPrice")), 1),
                e("input", {
                  value: n.entry.output_price,
                  onInput: l[5] || (l[5] = (i) => d("output_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, ut)
              ]),
              e("div", null, [
                e("label", ct, o(a(t)("admin.channels.form.cacheWritePrice")), 1),
                e("input", {
                  value: n.entry.cache_write_price,
                  onInput: l[6] || (l[6] = (i) => d("cache_write_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, pt)
              ]),
              e("div", null, [
                e("label", xt, o(a(t)("admin.channels.form.cacheReadPrice")), 1),
                e("input", {
                  value: n.entry.cache_read_price,
                  onInput: l[7] || (l[7] = (i) => d("cache_read_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, vt)
              ]),
              e("div", null, [
                e("label", yt, o(a(t)("admin.channels.form.imageInputPrice")), 1),
                e("input", {
                  value: n.entry.image_input_price,
                  onInput: l[8] || (l[8] = (i) => d("image_input_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, gt)
              ]),
              e("div", null, [
                e("label", ft, o(a(t)("admin.channels.form.imageTokenPrice")), 1),
                e("input", {
                  value: n.entry.image_output_price,
                  onInput: l[9] || (l[9] = (i) => d("image_output_price", i.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: a(t)("admin.channels.form.pricePlaceholder")
                }, null, 40, ht)
              ])
            ]),
            n.hideTokenIntervals ? b("", !0) : (c(), v("div", _t, [
              e("div", bt, [
                e("label", kt, [
                  _(o(a(t)("admin.channels.form.intervals")) + " ", 1),
                  l[15] || (l[15] = e("span", { class: "ml-1 font-normal text-gray-400" }, "(min, max]", -1))
                ]),
                e("button", {
                  type: "button",
                  onClick: p,
                  class: "text-xs text-primary-600 hover:text-primary-700"
                }, " + " + o(a(t)("admin.channels.form.addInterval")), 1)
              ]),
              n.entry.intervals && n.entry.intervals.length > 0 ? (c(), v("div", $t, [
                (c(!0), v(I, null, V(n.entry.intervals, (i, u) => (c(), M(q, {
                  key: u,
                  interval: i,
                  mode: n.entry.billing_mode,
                  onUpdate: (f) => x(u, f),
                  onRemove: (f) => $(u)
                }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
              ])) : b("", !0)
            ])),
            n.enableTimePricing ? (c(), M(Ae, {
              key: 1,
              "model-value": n.entry.time_pricing,
              "onUpdate:modelValue": l[10] || (l[10] = (i) => y("update", { ...n.entry, time_pricing: i }))
            }, null, 8, ["model-value"])) : b("", !0)
          ])) : n.entry.billing_mode === "per_request" ? (c(), v("div", wt, [
            e("label", It, [
              _(o(a(t)("admin.channels.form.defaultPerRequestPrice")) + " ", 1),
              l[16] || (l[16] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", Pt, [
              e("input", {
                value: n.entry.per_request_price,
                onInput: l[11] || (l[11] = (i) => d("per_request_price", i.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: a(t)("admin.channels.form.pricePlaceholder")
              }, null, 40, Tt)
            ]),
            e("div", Vt, [
              e("label", Mt, o(a(t)("admin.channels.form.requestTiers")), 1),
              e("button", {
                type: "button",
                onClick: p,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + o(a(t)("admin.channels.form.addTier")), 1)
            ]),
            n.entry.intervals && n.entry.intervals.length > 0 ? (c(), v("div", Ct, [
              (c(!0), v(I, null, V(n.entry.intervals, (i, u) => (c(), M(q, {
                key: u,
                interval: i,
                mode: n.entry.billing_mode,
                onUpdate: (f) => x(u, f),
                onRemove: (f) => $(u)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : (c(), v("div", qt, o(a(t)("admin.channels.form.noTiersYet")), 1))
          ])) : n.entry.billing_mode === "image" || n.entry.billing_mode === "video" ? (c(), v("div", zt, [
            e("label", Rt, [
              _(o(n.entry.billing_mode === "video" ? a(t)("admin.channels.form.defaultVideoPrice") : a(t)("admin.channels.form.defaultImagePrice")) + " ", 1),
              l[17] || (l[17] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", Nt, [
              e("input", {
                value: n.entry.per_request_price,
                onInput: l[12] || (l[12] = (i) => d("per_request_price", i.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: a(t)("admin.channels.form.pricePlaceholder")
              }, null, 40, Ut)
            ]),
            e("div", St, [
              e("label", Kt, o(n.entry.billing_mode === "video" ? a(t)("admin.channels.form.videoTiers") : a(t)("admin.channels.form.imageTiers")), 1),
              e("button", {
                type: "button",
                onClick: s,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + o(a(t)("admin.channels.form.addTier")), 1)
            ]),
            n.entry.intervals && n.entry.intervals.length > 0 ? (c(), v("div", Bt, [
              (c(!0), v(I, null, V(n.entry.intervals, (i, u) => (c(), M(q, {
                key: u,
                interval: i,
                mode: n.entry.billing_mode,
                onUpdate: (f) => x(u, f),
                onRemove: (f) => $(u)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : b("", !0)
          ])) : b("", !0)
        ])
      ], 2)
    ]));
  }
}), Ht = /* @__PURE__ */ O(Et, [["__scopeId", "data-v-7f9347d8"]]);
function Dt(n) {
  const w = n.delay ?? 300, t = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = (d) => {
    const p = t.get(d);
    p && (clearTimeout(p), t.delete(d));
    const s = m.get(d);
    s && (s.abort(), m.delete(d)), y.delete(d);
  }, h = () => {
    (/* @__PURE__ */ new Set([
      ...t.keys(),
      ...m.keys(),
      ...y.keys()
    ])).forEach((p) => g(p));
  }, k = (d, p) => {
    const s = (y.get(d) ?? 0) + 1;
    y.set(d, s);
    const x = t.get(d);
    x && (clearTimeout(x), t.delete(d));
    const $ = m.get(d);
    $ && ($.abort(), m.delete(d));
    const T = setTimeout(async () => {
      var i;
      t.delete(d);
      const r = new AbortController();
      m.set(d, r);
      const l = y.get(d);
      try {
        const u = await n.search(p, { key: d, signal: r.signal });
        if (r.signal.aborted || y.get(d) !== l) return;
        n.onSuccess(d, u);
      } catch (u) {
        if (r.signal.aborted || y.get(d) !== l) return;
        (i = n.onError) == null || i.call(n, d, u);
      } finally {
        m.get(d) === r && m.delete(d);
      }
    }, w);
    t.set(d, T);
  };
  return S() && F(() => {
    h();
  }), {
    trigger: k,
    clearKey: g,
    clearAll: h
  };
}
export {
  Ht as P,
  Dt as u
};
