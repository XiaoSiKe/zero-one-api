import { d as fe, u as he, c as Z, o as m, a as g, n as A, F as I, b as e, t as o, e as l, f as D, g as z, h as T, _ as W, i as Ge, r as j, j as U, w as Be, k as ae, l as He, m as Ke, p as Rt, q as pe, s as qt, v as G, x as ee, y as ce, z as Ut, A as De } from "./cnProviderAdminLeaf-CnhK13zM.js";
import { e as _e, _ as de } from "./Toggle.vue_vue_type_script_setup_true_lang-BjOfYlfI.js";
import { S as ue, g as It, C as Dt, _ as Ot, a as jt, b as K, P as Ft, D as Nt, c as Lt } from "./platforms-DwPJvXNe.js";
import { C as Gt, f as Bt, i as Ht, g as Kt, _ as Wt, c as ge, a as Oe, p as B, b as je, v as Yt, d as Xt, e as Qt, h as Zt, j as Fe, m as H } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-D9LHGOeq.js";
import { T as Jt, _ as Ne } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-CvgLH0jz.js";
const en = "bg-slate-500/10 text-slate-600 border-slate-500/30 dark:text-slate-400", tn = {
  anthropic: "bg-zo-alert-500/10 text-zo-alert-600 dark:bg-zo-alert-500/10 dark:text-zo-alert-300",
  openai: "bg-zo-signal-500/10 text-zo-signal-600 dark:bg-zo-signal-500/10 dark:text-zo-signal-300",
  antigravity: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-300",
  gemini: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
  grok: "bg-zinc-800/10 text-zinc-800 dark:bg-zinc-500/10 dark:text-zinc-200",
  kimi: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/10 dark:text-pink-300",
  zhipu: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
  deepseek: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/10 dark:text-teal-300",
  composite: "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300"
}, nn = {
  anthropic: "text-zo-alert-600 dark:text-zo-alert-400",
  openai: "text-zo-signal-600 dark:text-zo-signal-400",
  antigravity: "text-purple-600 dark:text-purple-400",
  gemini: "text-blue-600 dark:text-blue-400",
  grok: "text-zinc-800 dark:text-zinc-200",
  kimi: "text-pink-600 dark:text-pink-400",
  zhipu: "text-indigo-600 dark:text-indigo-400",
  deepseek: "text-teal-600 dark:text-teal-400",
  composite: "text-cyan-700 dark:text-cyan-300"
}, an = "text-primary-600 dark:text-primary-400";
function We(d) {
  return d === "anthropic" || d === "openai" || d === "antigravity" || d === "gemini" || d === "grok" || d === "kimi" || d === "zhipu" || d === "deepseek" || d === "composite";
}
function ln(d) {
  return We(d) ? tn[d] : en;
}
function Q(d) {
  return We(d) ? nn[d] : an;
}
const rn = { class: "w-20" }, sn = { class: "text-xs text-gray-400" }, on = ["value"], cn = { class: "w-20" }, dn = { class: "text-xs text-gray-400" }, un = { class: "text-gray-300" }, mn = ["value"], pn = { class: "flex-1" }, _n = { class: "text-xs text-gray-400" }, gn = {
  key: 0,
  class: "text-red-500"
}, fn = ["value"], hn = { class: "flex-1" }, bn = { class: "text-xs text-gray-400" }, xn = {
  key: 0,
  class: "text-red-500"
}, yn = ["value"], vn = { class: "flex-1" }, kn = { class: "text-xs text-gray-400" }, $n = ["value"], wn = { class: "flex-1" }, Cn = { class: "text-xs text-gray-400" }, Pn = ["value"], Sn = { class: "w-24" }, Tn = { class: "text-xs text-gray-400" }, En = ["value", "placeholder"], Vn = { class: "w-20" }, Mn = { class: "text-xs text-gray-400" }, An = ["value"], zn = { class: "w-20" }, Rn = { class: "text-xs text-gray-400" }, qn = { class: "text-gray-300" }, Un = ["value"], In = { class: "flex-1" }, Dn = { class: "text-xs text-gray-400" }, On = {
  key: 0,
  class: "text-red-500"
}, jn = ["value"], Te = /* @__PURE__ */ fe({
  __name: "IntervalRow",
  props: {
    interval: {},
    mode: {}
  },
  emits: ["update", "remove"],
  setup(d, { emit: r }) {
    const { t: c } = he(), k = d, E = r, M = Z(() => {
      const C = k.interval;
      return (C.input_price == null || C.input_price === "") && (C.output_price == null || C.output_price === "") && (C.cache_write_price == null || C.cache_write_price === "") && (C.cache_read_price == null || C.cache_read_price === "") && (C.per_request_price == null || C.per_request_price === "");
    });
    function R(C, f) {
      E("update", { ...k.interval, [C]: f === "" ? null : f });
    }
    function Y(C) {
      const f = parseInt(C, 10);
      return isNaN(f) ? 0 : f;
    }
    function v(C) {
      if (C === "") return null;
      const f = parseInt(C, 10);
      return isNaN(f) ? null : f;
    }
    return (C, f) => (m(), g("div", {
      class: A(["flex items-start gap-2 rounded border p-2", M.value ? "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-950/20" : "border-gray-200 bg-white dark:border-dark-500 dark:bg-dark-700"])
    }, [
      d.mode === "token" ? (m(), g(I, { key: 0 }, [
        e("div", rn, [
          e("label", sn, o(l(c)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: d.interval.min_tokens,
            onInput: f[0] || (f[0] = (P) => R("min_tokens", Y(P.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, on)
        ]),
        e("div", cn, [
          e("label", dn, [
            D(o(l(c)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", un, o(l(c)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: d.interval.max_tokens ?? "",
            onInput: f[1] || (f[1] = (P) => R("max_tokens", v(P.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, mn)
        ]),
        e("div", pn, [
          e("label", _n, [
            D(o(l(c)("admin.channels.form.inputPrice")) + " ", 1),
            M.value ? (m(), g("span", gn, "*")) : z("", !0),
            f[11] || (f[11] = D()),
            f[12] || (f[12] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: d.interval.input_price,
            onInput: f[2] || (f[2] = (P) => R("input_price", P.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, fn)
        ]),
        e("div", hn, [
          e("label", bn, [
            D(o(l(c)("admin.channels.form.outputPrice")) + " ", 1),
            M.value ? (m(), g("span", xn, "*")) : z("", !0),
            f[13] || (f[13] = D()),
            f[14] || (f[14] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: d.interval.output_price,
            onInput: f[3] || (f[3] = (P) => R("output_price", P.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, yn)
        ]),
        e("div", vn, [
          e("label", kn, [
            D(o(l(c)("admin.channels.form.cacheWritePriceShort")) + " ", 1),
            f[15] || (f[15] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: d.interval.cache_write_price,
            onInput: f[4] || (f[4] = (P) => R("cache_write_price", P.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, $n)
        ]),
        e("div", wn, [
          e("label", Cn, [
            D(o(l(c)("admin.channels.form.cacheReadPriceShort")) + " ", 1),
            f[16] || (f[16] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: d.interval.cache_read_price,
            onInput: f[5] || (f[5] = (P) => R("cache_read_price", P.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Pn)
        ])
      ], 64)) : (m(), g(I, { key: 1 }, [
        e("div", Sn, [
          e("label", Tn, o(d.mode === "image" ? l(c)("admin.channels.form.resolution") : l(c)("admin.channels.form.tierLabel")), 1),
          e("input", {
            value: d.interval.tier_label,
            onInput: f[6] || (f[6] = (P) => R("tier_label", P.target.value)),
            type: "text",
            class: "input mt-0.5 text-xs",
            placeholder: d.mode === "image" ? "1K / 2K / 4K" : ""
          }, null, 40, En)
        ]),
        e("div", Vn, [
          e("label", Mn, o(l(c)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: d.interval.min_tokens,
            onInput: f[7] || (f[7] = (P) => R("min_tokens", Y(P.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, An)
        ]),
        e("div", zn, [
          e("label", Rn, [
            D(o(l(c)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", qn, o(l(c)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: d.interval.max_tokens ?? "",
            onInput: f[8] || (f[8] = (P) => R("max_tokens", v(P.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, Un)
        ]),
        e("div", In, [
          e("label", Dn, [
            D(o(l(c)("admin.channels.form.perRequestPrice")) + " ", 1),
            M.value ? (m(), g("span", On, "*")) : z("", !0),
            f[17] || (f[17] = D()),
            f[18] || (f[18] = e("span", { class: "text-gray-300" }, "$", -1))
          ]),
          e("input", {
            value: d.interval.per_request_price,
            onInput: f[9] || (f[9] = (P) => R("per_request_price", P.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, jn)
        ])
      ], 64)),
      e("button", {
        type: "button",
        onClick: f[10] || (f[10] = (P) => E("remove")),
        class: "mt-4 rounded p-0.5 text-gray-400 hover:text-red-500"
      }, [
        T(W, {
          name: "x",
          size: "sm"
        })
      ])
    ], 2));
  }
}), Fn = { class: "mt-3 border-t border-gray-200 pt-3 dark:border-dark-600" }, Nn = { class: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" }, Ln = { class: "min-w-0 flex-1 sm:max-w-sm" }, Gn = { class: "block text-xs font-medium text-gray-500 dark:text-gray-400" }, Bn = { class: "mt-2 block text-xs text-gray-400" }, Hn = {
  key: 0,
  class: "mt-3 space-y-3"
}, Kn = { class: "min-w-0" }, Wn = ["for"], Yn = ["id", "value", "onInput"], Xn = { class: "min-w-0" }, Qn = ["for"], Zn = ["id", "value", "onInput"], Jn = { class: "min-w-0" }, ea = ["for"], ta = ["id", "value", "onInput", "onBlur"], na = ["title", "aria-label", "data-testid", "onClick"], aa = /* @__PURE__ */ fe({
  __name: "TimePricingSection",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: r }) {
    var q;
    const { t: c } = he(), k = d, E = r, M = `time-pricing-${(q = Ge()) == null ? void 0 : q.uid}`, R = Gt.map((b) => {
      const p = Bt(b);
      return { value: b, label: p ? `${b} (${p})` : b };
    });
    function Y(b) {
      E("update:modelValue", { ...k.modelValue, timezone: String(b ?? "") });
    }
    function v(b) {
      const p = b.replace(/：/g, ":");
      return p === "24:00:00" ? "00:00:00" : p;
    }
    function C() {
      E("update:modelValue", {
        ...k.modelValue,
        periods: [
          ...k.modelValue.periods,
          { start_time: "", end_time: "", multiplier: "1.00" }
        ]
      });
    }
    function f(b, p, h) {
      const $ = k.modelValue.periods.map((V, te) => te === b ? { ...V, [p]: h } : V);
      E("update:modelValue", { ...k.modelValue, periods: $ });
    }
    function P(b, p) {
      Ht(p) && f(b, "multiplier", Number(p).toFixed(2));
    }
    function L(b) {
      E("update:modelValue", {
        ...k.modelValue,
        periods: k.modelValue.periods.filter((p, h) => h !== b)
      });
    }
    return (b, p) => (m(), g("section", Fn, [
      e("div", Nn, [
        e("div", Ln, [
          e("label", Gn, o(l(c)("admin.channels.form.timePricing")), 1),
          e("label", Bn, o(l(c)("admin.channels.form.timezone")), 1),
          T(ue, {
            "model-value": d.modelValue.timezone,
            options: l(R),
            "aria-label": l(c)("admin.channels.form.timezone"),
            searchable: "",
            creatable: "",
            class: "mt-1 w-full",
            "onUpdate:modelValue": Y
          }, null, 8, ["model-value", "options", "aria-label"])
        ]),
        e("button", {
          type: "button",
          class: "self-start text-xs text-primary-600 hover:text-primary-700 sm:self-end sm:pb-2",
          "data-testid": "add-time-period",
          onClick: C
        }, " + " + o(l(c)("admin.channels.form.addTimePeriod")), 1)
      ]),
      d.modelValue.periods.length > 0 ? (m(), g("div", Hn, [
        (m(!0), g(I, null, j(d.modelValue.periods, (h, $) => (m(), g("div", {
          key: $,
          class: "grid grid-cols-1 gap-2 border-t border-gray-200 pt-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_2rem] sm:items-end dark:border-dark-600"
        }, [
          e("div", Kn, [
            e("label", {
              for: `${M}-start-${$}`,
              class: "block text-xs text-gray-400"
            }, o(l(c)("admin.channels.form.startTime")), 9, Wn),
            e("input", {
              id: `${M}-start-${$}`,
              value: h.start_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (V) => f($, "start_time", v(V.target.value))
            }, null, 40, Yn)
          ]),
          e("div", Xn, [
            e("label", {
              for: `${M}-end-${$}`,
              class: "block text-xs text-gray-400"
            }, o(l(c)("admin.channels.form.endTime")), 9, Qn),
            e("input", {
              id: `${M}-end-${$}`,
              value: h.end_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (V) => f($, "end_time", v(V.target.value))
            }, null, 40, Zn)
          ]),
          e("div", Jn, [
            e("label", {
              for: `${M}-multiplier-${$}`,
              class: "block text-xs text-gray-400"
            }, o(l(c)("admin.channels.form.multiplier")), 9, ea),
            e("input", {
              id: `${M}-multiplier-${$}`,
              value: h.multiplier,
              type: "number",
              min: "0.01",
              step: "0.01",
              class: "input mt-1 w-full text-sm",
              onInput: (V) => f($, "multiplier", V.target.value),
              onBlur: (V) => P($, V.target.value)
            }, null, 40, ta)
          ]),
          e("button", {
            type: "button",
            class: "flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:text-red-500",
            title: l(c)("admin.channels.form.removeTimePeriod"),
            "aria-label": l(c)("admin.channels.form.removeTimePeriod"),
            "data-testid": `remove-time-period-${$}`,
            onClick: (V) => L($)
          }, [
            T(W, {
              name: "trash",
              size: "sm"
            })
          ], 8, na)
        ]))), 128))
      ])) : z("", !0)
    ]));
  }
}), la = { class: "rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-dark-600 dark:bg-dark-800" }, ra = {
  key: 0,
  class: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden"
}, sa = { class: "flex min-w-0 flex-1 flex-wrap items-center gap-1" }, oa = {
  key: 0,
  class: "whitespace-nowrap text-xs text-gray-400"
}, ia = {
  key: 1,
  class: "text-xs italic text-gray-400"
}, ca = { class: "flex-shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300" }, da = {
  key: 1,
  class: "flex-1 text-xs font-medium text-gray-500 dark:text-gray-400"
}, ua = { class: "collapsible-inner" }, ma = { class: "mt-3 flex items-start gap-2" }, pa = { class: "flex-1" }, _a = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, ga = { class: "w-40" }, fa = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, ha = { key: 0 }, ba = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, xa = { class: "mt-1 grid grid-cols-2 gap-2 sm:grid-cols-6" }, ya = { class: "text-xs text-gray-400" }, va = ["value", "placeholder"], ka = { class: "text-xs text-gray-400" }, $a = ["value", "placeholder"], wa = { class: "text-xs text-gray-400" }, Ca = ["value", "placeholder"], Pa = { class: "text-xs text-gray-400" }, Sa = ["value", "placeholder"], Ta = { class: "text-xs text-gray-400" }, Ea = ["value", "placeholder"], Va = { class: "text-xs text-gray-400" }, Ma = ["value", "placeholder"], Aa = {
  key: 0,
  class: "mt-3"
}, za = { class: "flex items-center justify-between" }, Ra = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, qa = {
  key: 0,
  class: "mt-2 space-y-2"
}, Ua = { key: 1 }, Ia = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, Da = { class: "mt-1 w-48" }, Oa = ["value", "placeholder"], ja = { class: "mt-3 flex items-center justify-between" }, Fa = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Na = {
  key: 0,
  class: "mt-2 space-y-2"
}, La = {
  key: 1,
  class: "mt-2 rounded border border-dashed border-gray-300 p-3 text-center text-xs text-gray-400 dark:border-dark-500"
}, Ga = { key: 2 }, Ba = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, Ha = { class: "mt-1 w-48" }, Ka = ["value", "placeholder"], Wa = { class: "mt-3 flex items-center justify-between" }, Ya = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Xa = {
  key: 0,
  class: "mt-2 space-y-2"
}, Qa = /* @__PURE__ */ fe({
  __name: "PricingEntryCard",
  props: {
    entry: {},
    platform: {},
    hideTokenIntervals: { type: Boolean, default: !1 },
    enableTimePricing: { type: Boolean, default: !1 }
  },
  emits: ["update", "remove"],
  setup(d, { emit: r }) {
    const { t: c } = he(), k = d, E = r, M = U(k.entry.models.length > 0), R = Z(() => [
      { value: "token", label: c("admin.channels.billingMode.token") },
      { value: "per_request", label: c("admin.channels.billingMode.perRequest") },
      { value: "image", label: c("admin.channels.billingMode.image") },
      { value: "video", label: c("admin.channels.billingMode.video") }
    ]), Y = Z(() => {
      const b = R.value.find((p) => p.value === k.entry.billing_mode);
      return b ? b.label : k.entry.billing_mode;
    });
    function v(b, p) {
      E("update", { ...k.entry, [b]: p === "" ? null : p });
    }
    function C() {
      const b = [...k.entry.intervals || []];
      b.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: b.length
      }), E("update", { ...k.entry, intervals: b });
    }
    function f() {
      const b = [...k.entry.intervals || []], p = k.entry.billing_mode === "video" ? ["480p", "720p", "1080p"] : ["1K", "2K", "4K", "HD"];
      b.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: p[b.length] || "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: b.length
      }), E("update", { ...k.entry, intervals: b });
    }
    function P(b, p) {
      const h = [...k.entry.intervals || []];
      h[b] = p, E("update", { ...k.entry, intervals: h });
    }
    function L(b) {
      const p = [...k.entry.intervals || []];
      p.splice(b, 1), E("update", { ...k.entry, intervals: p });
    }
    function q(b) {
      E("update", { ...k.entry, models: b });
    }
    return (b, p) => (m(), g("div", la, [
      e("div", {
        class: "flex cursor-pointer select-none items-center gap-2",
        onClick: p[1] || (p[1] = (h) => M.value = !M.value)
      }, [
        T(W, {
          name: M.value ? "chevronRight" : "chevronDown",
          size: "sm",
          "stroke-width": 2,
          class: "flex-shrink-0 text-gray-400 transition-transform duration-200"
        }, null, 8, ["name"]),
        M.value ? (m(), g("div", ra, [
          e("div", sa, [
            (m(!0), g(I, null, j(d.entry.models.slice(0, 3), (h, $) => (m(), g("span", {
              key: $,
              class: A(["inline-flex shrink-0 rounded px-1.5 py-0.5 text-xs", l(Kt)(k.platform || "")])
            }, o(h), 3))), 128)),
            d.entry.models.length > 3 ? (m(), g("span", oa, " +" + o(d.entry.models.length - 3), 1)) : z("", !0),
            d.entry.models.length === 0 ? (m(), g("span", ia, o(l(c)("admin.channels.form.noModels")), 1)) : z("", !0)
          ]),
          e("span", ca, o(Y.value), 1)
        ])) : (m(), g("div", da, o(l(c)("admin.channels.form.pricingEntry")), 1)),
        e("button", {
          type: "button",
          onClick: p[0] || (p[0] = Be((h) => E("remove"), ["stop"])),
          class: "flex-shrink-0 rounded p-1 text-gray-400 hover:text-red-500"
        }, [
          T(W, {
            name: "trash",
            size: "sm"
          })
        ])
      ]),
      e("div", {
        class: A(["collapsible-content", { "collapsible-content--collapsed": M.value }])
      }, [
        e("div", ua, [
          e("div", ma, [
            e("div", pa, [
              e("label", _a, [
                D(o(l(c)("admin.channels.form.models")) + " ", 1),
                p[13] || (p[13] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              T(Wt, {
                models: d.entry.models,
                platform: k.platform,
                "onUpdate:models": p[2] || (p[2] = (h) => q(h)),
                placeholder: l(c)("admin.channels.form.modelsPlaceholder"),
                class: "mt-1"
              }, null, 8, ["models", "platform", "placeholder"])
            ]),
            e("div", ga, [
              e("label", fa, o(l(c)("admin.channels.form.billingMode")), 1),
              T(ue, {
                modelValue: d.entry.billing_mode,
                "onUpdate:modelValue": p[3] || (p[3] = (h) => E("update", {
                  ...d.entry,
                  billing_mode: h,
                  intervals: [],
                  time_pricing: { ...d.entry.time_pricing, periods: [] }
                })),
                options: R.value,
                class: "mt-1"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          d.entry.billing_mode === "token" ? (m(), g("div", ha, [
            e("label", ba, [
              D(o(l(c)("admin.channels.form.defaultPrices")) + " ", 1),
              p[14] || (p[14] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$/MTok", -1))
            ]),
            e("div", xa, [
              e("div", null, [
                e("label", ya, o(l(c)("admin.channels.form.inputPrice")), 1),
                e("input", {
                  value: d.entry.input_price,
                  onInput: p[4] || (p[4] = (h) => v("input_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, va)
              ]),
              e("div", null, [
                e("label", ka, o(l(c)("admin.channels.form.outputPrice")), 1),
                e("input", {
                  value: d.entry.output_price,
                  onInput: p[5] || (p[5] = (h) => v("output_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, $a)
              ]),
              e("div", null, [
                e("label", wa, o(l(c)("admin.channels.form.cacheWritePrice")), 1),
                e("input", {
                  value: d.entry.cache_write_price,
                  onInput: p[6] || (p[6] = (h) => v("cache_write_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, Ca)
              ]),
              e("div", null, [
                e("label", Pa, o(l(c)("admin.channels.form.cacheReadPrice")), 1),
                e("input", {
                  value: d.entry.cache_read_price,
                  onInput: p[7] || (p[7] = (h) => v("cache_read_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, Sa)
              ]),
              e("div", null, [
                e("label", Ta, o(l(c)("admin.channels.form.imageInputPrice")), 1),
                e("input", {
                  value: d.entry.image_input_price,
                  onInput: p[8] || (p[8] = (h) => v("image_input_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, Ea)
              ]),
              e("div", null, [
                e("label", Va, o(l(c)("admin.channels.form.imageTokenPrice")), 1),
                e("input", {
                  value: d.entry.image_output_price,
                  onInput: p[9] || (p[9] = (h) => v("image_output_price", h.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: l(c)("admin.channels.form.pricePlaceholder")
                }, null, 40, Ma)
              ])
            ]),
            d.hideTokenIntervals ? z("", !0) : (m(), g("div", Aa, [
              e("div", za, [
                e("label", Ra, [
                  D(o(l(c)("admin.channels.form.intervals")) + " ", 1),
                  p[15] || (p[15] = e("span", { class: "ml-1 font-normal text-gray-400" }, "(min, max]", -1))
                ]),
                e("button", {
                  type: "button",
                  onClick: C,
                  class: "text-xs text-primary-600 hover:text-primary-700"
                }, " + " + o(l(c)("admin.channels.form.addInterval")), 1)
              ]),
              d.entry.intervals && d.entry.intervals.length > 0 ? (m(), g("div", qa, [
                (m(!0), g(I, null, j(d.entry.intervals, (h, $) => (m(), ae(Te, {
                  key: $,
                  interval: h,
                  mode: d.entry.billing_mode,
                  onUpdate: (V) => P($, V),
                  onRemove: (V) => L($)
                }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
              ])) : z("", !0)
            ])),
            d.enableTimePricing ? (m(), ae(aa, {
              key: 1,
              "model-value": d.entry.time_pricing,
              "onUpdate:modelValue": p[10] || (p[10] = (h) => E("update", { ...d.entry, time_pricing: h }))
            }, null, 8, ["model-value"])) : z("", !0)
          ])) : d.entry.billing_mode === "per_request" ? (m(), g("div", Ua, [
            e("label", Ia, [
              D(o(l(c)("admin.channels.form.defaultPerRequestPrice")) + " ", 1),
              p[16] || (p[16] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", Da, [
              e("input", {
                value: d.entry.per_request_price,
                onInput: p[11] || (p[11] = (h) => v("per_request_price", h.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: l(c)("admin.channels.form.pricePlaceholder")
              }, null, 40, Oa)
            ]),
            e("div", ja, [
              e("label", Fa, o(l(c)("admin.channels.form.requestTiers")), 1),
              e("button", {
                type: "button",
                onClick: C,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + o(l(c)("admin.channels.form.addTier")), 1)
            ]),
            d.entry.intervals && d.entry.intervals.length > 0 ? (m(), g("div", Na, [
              (m(!0), g(I, null, j(d.entry.intervals, (h, $) => (m(), ae(Te, {
                key: $,
                interval: h,
                mode: d.entry.billing_mode,
                onUpdate: (V) => P($, V),
                onRemove: (V) => L($)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : (m(), g("div", La, o(l(c)("admin.channels.form.noTiersYet")), 1))
          ])) : d.entry.billing_mode === "image" || d.entry.billing_mode === "video" ? (m(), g("div", Ga, [
            e("label", Ba, [
              D(o(d.entry.billing_mode === "video" ? l(c)("admin.channels.form.defaultVideoPrice") : l(c)("admin.channels.form.defaultImagePrice")) + " ", 1),
              p[17] || (p[17] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", Ha, [
              e("input", {
                value: d.entry.per_request_price,
                onInput: p[12] || (p[12] = (h) => v("per_request_price", h.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: l(c)("admin.channels.form.pricePlaceholder")
              }, null, 40, Ka)
            ]),
            e("div", Wa, [
              e("label", Ya, o(d.entry.billing_mode === "video" ? l(c)("admin.channels.form.videoTiers") : l(c)("admin.channels.form.imageTiers")), 1),
              e("button", {
                type: "button",
                onClick: f,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + o(l(c)("admin.channels.form.addTier")), 1)
            ]),
            d.entry.intervals && d.entry.intervals.length > 0 ? (m(), g("div", Xa, [
              (m(!0), g(I, null, j(d.entry.intervals, (h, $) => (m(), ae(Te, {
                key: $,
                interval: h,
                mode: d.entry.billing_mode,
                onUpdate: (V) => P($, V),
                onRemove: (V) => L($)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : z("", !0)
          ])) : z("", !0)
        ])
      ], 2)
    ]));
  }
}), Le = /* @__PURE__ */ He(Qa, [["__scopeId", "data-v-7f9347d8"]]);
function Za(d) {
  const r = d.delay ?? 300, c = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), M = (v) => {
    const C = c.get(v);
    C && (clearTimeout(C), c.delete(v));
    const f = k.get(v);
    f && (f.abort(), k.delete(v)), E.delete(v);
  }, R = () => {
    (/* @__PURE__ */ new Set([
      ...c.keys(),
      ...k.keys(),
      ...E.keys()
    ])).forEach((C) => M(C));
  }, Y = (v, C) => {
    const f = (E.get(v) ?? 0) + 1;
    E.set(v, f);
    const P = c.get(v);
    P && (clearTimeout(P), c.delete(v));
    const L = k.get(v);
    L && (L.abort(), k.delete(v));
    const q = setTimeout(async () => {
      var h;
      c.delete(v);
      const b = new AbortController();
      k.set(v, b);
      const p = E.get(v);
      try {
        const $ = await d.search(C, { key: v, signal: b.signal });
        if (b.signal.aborted || E.get(v) !== p) return;
        d.onSuccess(v, $);
      } catch ($) {
        if (b.signal.aborted || E.get(v) !== p) return;
        (h = d.onError) == null || h.call(d, v, $);
      } finally {
        k.get(v) === b && k.delete(v);
      }
    }, r);
    c.set(v, q);
  };
  return Ge() && Ke(() => {
    R();
  }), {
    trigger: Y,
    clearKey: M,
    clearAll: R
  };
}
const Ja = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, el = { class: "flex flex-1 flex-wrap items-center gap-3" }, tl = { class: "relative w-full sm:w-64" }, nl = ["placeholder"], al = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, ll = ["disabled", "title"], rl = { class: "font-medium text-gray-900 dark:text-white" }, sl = { class: "text-sm text-gray-600 dark:text-gray-400" }, ol = { class: "inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, il = { class: "inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, cl = { class: "text-sm text-gray-600 dark:text-gray-400" }, dl = { class: "flex items-center gap-1" }, ul = ["onClick"], ml = { class: "text-xs" }, pl = ["onClick"], _l = { class: "text-xs" }, gl = { class: "channel-dialog-body" }, fl = { class: "flex items-center border-b border-gray-200 dark:border-dark-700 flex-shrink-0 -mx-4 sm:-mx-6 px-4 sm:px-6 -mt-3 sm:-mt-4" }, hl = ["onClick"], bl = { class: "space-y-5" }, xl = { class: "input-label" }, yl = ["placeholder"], vl = { class: "input-label" }, kl = ["placeholder"], $l = { key: 0 }, wl = { class: "input-label" }, Cl = { class: "flex items-center gap-2 cursor-pointer" }, Pl = { class: "input-label mb-0" }, Sl = { class: "mt-1 ml-6 text-xs text-gray-400" }, Tl = { class: "input-label" }, El = { class: "mt-1 text-xs text-gray-400" }, Vl = { class: "space-y-3" }, Ml = { class: "input-label mb-0" }, Al = { class: "flex flex-wrap gap-2" }, zl = ["checked", "onChange"], Rl = { class: "border-t border-gray-200 pt-4 dark:border-dark-700" }, ql = { class: "flex items-center justify-between" }, Ul = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Il = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, Dl = { class: "input-label text-xs" }, Ol = {
  key: 0,
  class: "ml-1 font-normal text-gray-400"
}, jl = { class: "max-h-40 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-2 dark:border-dark-600 dark:bg-dark-900" }, Fl = {
  key: 0,
  class: "py-2 text-center text-xs text-gray-500"
}, Nl = {
  key: 1,
  class: "py-2 text-center text-xs text-gray-500"
}, Ll = {
  key: 2,
  class: "flex flex-wrap gap-1"
}, Gl = ["checked", "disabled", "onChange"], Bl = { class: "text-[10px] text-gray-400" }, Hl = {
  key: 0,
  class: "text-[10px] text-gray-400"
}, Kl = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-600"
}, Wl = { class: "flex items-center justify-between" }, Yl = { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, Xl = { class: "mt-0.5 text-[11px] text-red-500 dark:text-red-400" }, Ql = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-600"
}, Zl = { class: "flex items-center justify-between gap-4" }, Jl = { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, er = { class: "mt-0.5 text-[11px] text-zo-alert-600 dark:text-zo-alert-400" }, tr = {
  key: 2,
  class: "border-t border-gray-200 pt-3 dark:border-dark-600"
}, nr = { class: "flex items-center justify-between gap-4" }, ar = { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, lr = { class: "mt-0.5 text-[11px] text-zo-alert-600 dark:text-zo-alert-400" }, rr = { class: "mb-1 flex items-center justify-between" }, sr = { class: "input-label text-xs mb-0" }, or = ["onClick"], ir = {
  key: 0,
  class: "rounded border border-dashed border-gray-300 p-2 text-center text-xs text-gray-400 dark:border-dark-500"
}, cr = {
  key: 1,
  class: "space-y-1"
}, dr = ["value", "placeholder", "onChange"], ur = ["value", "placeholder", "onInput"], mr = ["onClick"], pr = { class: "mb-1 flex items-center justify-between" }, _r = { class: "input-label text-xs mb-0" }, gr = { class: "flex items-center gap-2" }, fr = ["onClick", "disabled"], hr = ["onClick"], br = {
  key: 0,
  class: "rounded border border-dashed border-gray-300 p-2 text-center text-xs text-gray-400 dark:border-dark-500"
}, xr = {
  key: 1,
  class: "space-y-2"
}, yr = { class: "mt-4 border-t border-gray-200 pt-4 dark:border-dark-700 space-y-3" }, vr = { class: "flex items-center justify-between" }, kr = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, $r = ["onClick"], wr = {
  key: 0,
  class: "text-xs italic text-gray-400 dark:text-gray-500"
}, Cr = { class: "flex items-center justify-between" }, Pr = ["onUpdate:modelValue", "placeholder"], Sr = ["onClick"], Tr = { class: "text-xs text-gray-500 dark:text-gray-400" }, Er = { class: "mt-1 flex flex-wrap gap-1" }, Vr = ["checked", "onChange"], Mr = {
  key: 0,
  class: "mt-1 text-xs text-gray-400"
}, Ar = { class: "text-xs text-gray-500 dark:text-gray-400" }, zr = { class: "mt-1 flex flex-wrap gap-1" }, Rr = ["onClick"], qr = { class: "relative mt-1 rule-account-search-container" }, Ur = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], Ir = {
  key: 0,
  class: "absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, Dr = ["onClick", "disabled"], Or = { class: "ml-2 text-xs text-gray-400" }, jr = { class: "mt-1 text-xs text-gray-400" }, Fr = { class: "mb-1 flex items-center justify-between" }, Nr = { class: "text-xs text-gray-500 dark:text-gray-400" }, Lr = ["onClick"], Gr = {
  key: 0,
  class: "rounded border border-dashed border-gray-300 p-2 text-center text-xs text-gray-400 dark:border-dark-500"
}, Br = {
  key: 1,
  class: "space-y-2"
}, Hr = { class: "flex justify-end gap-3" }, Kr = ["disabled"], Wr = /* @__PURE__ */ fe({
  __name: "ChannelsView",
  setup(d) {
    const { t: r } = he(), c = Rt(), k = U(!1);
    async function E() {
      var n;
      try {
        const a = await K.settings.getWebSearchEmulationConfig();
        k.value = (a == null ? void 0 : a.enabled) === !0 && (((n = a == null ? void 0 : a.providers) == null ? void 0 : n.length) ?? 0) > 0;
      } catch (a) {
        console.warn("Failed to load web search global state:", a), k.value = !1;
      }
    }
    const M = Z(() => [
      { key: "name", label: r("admin.channels.columns.name", "Name"), sortable: !0 },
      { key: "description", label: r("admin.channels.columns.description", "Description"), sortable: !1 },
      { key: "status", label: r("admin.channels.columns.status", "Status"), sortable: !0 },
      { key: "group_count", label: r("admin.channels.columns.groups", "Groups"), sortable: !1 },
      { key: "pricing_count", label: r("admin.channels.columns.pricing", "Pricing"), sortable: !1 },
      { key: "created_at", label: r("admin.channels.columns.createdAt", "Created"), sortable: !0 },
      { key: "actions", label: r("admin.channels.columns.actions", "Actions"), sortable: !1 }
    ]), R = Z(() => [
      { value: "", label: r("admin.channels.allStatus", "All Status") },
      { value: "active", label: r("admin.channels.statusActive", "Active") },
      { value: "disabled", label: r("admin.channels.statusDisabled", "Disabled") }
    ]), Y = Z(() => [
      { value: "active", label: r("admin.channels.statusActive", "Active") },
      { value: "disabled", label: r("admin.channels.statusDisabled", "Disabled") }
    ]), v = Z(() => [
      { value: "channel_mapped", label: r("admin.channels.form.billingModelSourceChannelMapped", "Bill by channel-mapped model") },
      { value: "requested", label: r("admin.channels.form.billingModelSourceRequested", "Bill by requested model") },
      { value: "upstream", label: r("admin.channels.form.billingModelSourceUpstream", "Bill by final upstream model") },
      { value: "response_model", label: r("admin.channels.form.billingModelSourceResponse", "Bill by upstream response model") }
    ]), C = U([]), f = U(!1), P = U(""), L = pe({ status: "" }), q = pe({
      page: 1,
      page_size: It(),
      total: 0
    }), b = pe({
      sort_by: "created_at",
      sort_order: "desc"
    }), p = U(!1), h = U(null), $ = U(!1), V = U(!1), te = U(null), F = U("basic"), se = U([]), be = U(!1), xe = U([]), _ = pe({
      name: "",
      description: "",
      status: "active",
      restrict_models: !1,
      billing_model_source: "channel_mapped",
      platforms: [],
      apply_pricing_to_account_stats: !1
    });
    let J = null;
    const ye = Dt.map(({ value: n }) => n), ve = ["anthropic", "openai", "gemini", "antigravity", "grok"];
    function Ye(n) {
      return n ? new Date(n).toLocaleDateString() : "-";
    }
    const Ee = Z(() => _.platforms.filter((n) => n.enabled).map((n) => n.platform));
    function Xe(n) {
      _.platforms.push({
        platform: n,
        enabled: !0,
        collapsed: !1,
        group_ids: [],
        model_mapping: {},
        model_pricing: [],
        web_search_emulation: !1,
        codex_image_generation_bridge: !1,
        bedrock_cc_compat: !1,
        account_stats_pricing_rules: []
      });
    }
    function Qe(n) {
      const a = _.platforms.find((t) => t.platform === n);
      a ? (a.enabled = !a.enabled, !a.enabled && F.value === n && (F.value = "basic")) : Xe(n);
    }
    function Ve(n) {
      return se.value.filter(
        (a) => a.platform === n || a.platform === "composite" && ve.includes(n)
      );
    }
    const Me = Z(() => {
      const n = /* @__PURE__ */ new Map();
      for (const a of xe.value)
        if (!(h.value && a.id === h.value.id))
          for (const t of a.group_ids || [])
            n.set(t, a);
      return n;
    });
    function ke(n, a) {
      return Me.value.has(n);
    }
    function Ze(n) {
      var a;
      return ((a = Me.value.get(n)) == null ? void 0 : a.name) || "";
    }
    function Je(n) {
      const a = Ze(n);
      return r("admin.channels.form.inOtherChannel", { name: a }, `In "${a}"`);
    }
    const et = Z(() => {
      var a;
      const n = ((a = te.value) == null ? void 0 : a.name) || "";
      return r(
        "admin.channels.deleteConfirm",
        { name: n },
        `Are you sure you want to delete channel "${n}"? This action cannot be undone.`
      );
    });
    function tt(n, a) {
      const t = _.platforms[n], i = t.group_ids.indexOf(a);
      i >= 0 ? t.group_ids.splice(i, 1) : t.group_ids.push(a);
    }
    function nt(n) {
      _.platforms[n].model_pricing.push({
        models: [],
        billing_mode: "token",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        image_input_price: null,
        image_output_price: null,
        per_request_price: null,
        intervals: [],
        time_pricing: ge()
      });
    }
    const oe = U(null);
    async function at(n) {
      const a = _.platforms[n].platform;
      if (!oe.value) {
        oe.value = a;
        try {
          const t = await K.channels.syncPricingModels(a), i = /* @__PURE__ */ new Set();
          for (const u of _.platforms[n].model_pricing)
            for (const w of u.models) i.add(w);
          const s = t.models.filter((u) => !i.has(u));
          if (s.length === 0) {
            c.showSuccess(r("admin.channels.form.syncModelsAlreadyUpToDate"));
            return;
          }
          _.platforms[n].model_pricing.push({
            models: s,
            billing_mode: "token",
            input_price: null,
            output_price: null,
            cache_write_price: null,
            cache_read_price: null,
            image_input_price: null,
            image_output_price: null,
            per_request_price: null,
            intervals: [],
            time_pricing: ge()
          }), c.showSuccess(r("admin.channels.form.syncModelsSuccess", { count: s.length }));
        } catch (t) {
          c.showError(_e(t, r("admin.channels.form.syncModelsError")));
        } finally {
          oe.value = null;
        }
      }
    }
    function lt(n, a, t) {
      _.platforms[n].model_pricing.splice(a, 1, t);
    }
    function rt(n, a) {
      _.platforms[n].model_pricing.splice(a, 1);
    }
    function st(n) {
      const a = _.platforms[n].model_mapping;
      let t = "", i = 1;
      for (; t === "" || t in a; )
        t = `model-${i}`, i++;
      a[t] = "";
    }
    function ot(n, a) {
      delete _.platforms[n].model_mapping[a];
    }
    function it(n, a, t) {
      if (t = t.trim(), !t || t === a) return;
      const i = _.platforms[n].model_mapping;
      if (t in i) return;
      const s = i[a];
      delete i[a], i[t] = s;
    }
    function ct(n) {
      _.platforms[n].account_stats_pricing_rules.push({
        name: "",
        group_ids: [],
        account_ids: [],
        pricing: []
      });
    }
    function dt(n, a) {
      _.platforms[n].account_stats_pricing_rules[a].pricing.push({
        models: [],
        billing_mode: "token",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        image_input_price: null,
        image_output_price: null,
        per_request_price: null,
        intervals: [],
        time_pricing: ge()
      });
    }
    function ut(n, a) {
      _.platforms[n].account_stats_pricing_rules.splice(a, 1), ie.clearAll(), $e();
    }
    function mt(n, a, t) {
      _.platforms[n].account_stats_pricing_rules[a].pricing.splice(t, 1);
    }
    function pt(n) {
      const a = se.value.find((t) => t.id === n);
      return a ? a.name : `#${n}`;
    }
    const le = U({}), re = U({}), ne = U({}), me = U({}), ie = Za({
      delay: 300,
      search: async (n, { key: a, signal: t }) => {
        const i = a.split("-")[0];
        return (await K.accounts.list(1, 20, { platform: i, search: n }, { signal: t })).items.map((u) => ({ id: u.id, name: u.name, platform: u.platform }));
      },
      onSuccess: (n, a) => {
        re.value[n] = a;
      },
      onError: (n) => {
        re.value[n] = [];
      }
    });
    function _t(n, a) {
      const t = `${n}-${a}`;
      ne.value[t] = !0, ie.trigger(t, le.value[t] || "");
    }
    function gt(n, a) {
      var i;
      const t = `${n}-${a}`;
      ne.value[t] = !0, (i = re.value[t]) != null && i.length || ie.trigger(t, le.value[t] || "");
    }
    function ft(n, a, t, i) {
      n.account_ids.includes(a.id) || (n.account_ids.push(a.id), me.value[a.id] = a.name);
      const s = `${t}-${i}`;
      le.value[s] = "", ne.value[s] = !1;
    }
    function ht(n, a) {
      const t = n.account_ids.indexOf(a);
      t !== -1 && n.account_ids.splice(t, 1);
    }
    function bt(n) {
      const a = me.value[n];
      return a ? `${a} #${n}` : `#${n}`;
    }
    function Ae(n) {
      n.target.closest(".rule-account-search-container") || Object.keys(ne.value).forEach((t) => {
        ne.value[t] = !1;
      });
    }
    function $e() {
      le.value = {}, re.value = {}, ne.value = {};
    }
    function ze() {
      const n = [];
      for (const a of _.platforms)
        if (a.enabled)
          for (const t of a.account_stats_pricing_rules)
            n.push({
              name: t.name,
              group_ids: t.group_ids,
              account_ids: t.account_ids,
              pricing: t.pricing.filter((i) => i.models.length > 0).map((i) => ({
                platform: a.platform,
                models: i.models,
                billing_mode: i.billing_mode,
                input_price: H(i.input_price),
                output_price: H(i.output_price),
                cache_write_price: H(i.cache_write_price),
                cache_read_price: H(i.cache_read_price),
                image_input_price: H(i.image_input_price),
                image_output_price: H(i.image_output_price),
                per_request_price: i.per_request_price != null && i.per_request_price !== "" ? Number(i.per_request_price) : null,
                intervals: Fe(i.intervals || []),
                time_pricing: null
              }))
            });
      return n;
    }
    function xt() {
      var x;
      const n = [], a = [], t = {}, i = (x = h.value) != null && x.features_config ? { ...h.value.features_config } : {};
      for (const S of _.platforms)
        if (S.enabled) {
          n.push(...S.group_ids), Object.keys(S.model_mapping).length > 0 && (t[S.platform] = { ...S.model_mapping });
          for (const O of S.model_pricing)
            O.models.length !== 0 && a.push({
              platform: S.platform,
              models: O.models,
              billing_mode: O.billing_mode,
              input_price: H(O.input_price),
              output_price: H(O.output_price),
              cache_write_price: H(O.cache_write_price),
              cache_read_price: H(O.cache_read_price),
              image_input_price: H(O.image_input_price),
              image_output_price: H(O.image_output_price),
              per_request_price: O.per_request_price != null && O.per_request_price !== "" ? Number(O.per_request_price) : null,
              intervals: Fe(O.intervals || []),
              time_pricing: Zt(O.time_pricing)
            });
        }
      const s = Array.from(new Set(n)), u = {};
      for (const S of _.platforms)
        S.enabled && S.platform === "anthropic" && (u[S.platform] = !!S.web_search_emulation);
      Object.keys(u).length > 0 ? i.web_search_emulation = u : delete i.web_search_emulation;
      const w = {};
      for (const S of _.platforms)
        S.enabled && S.platform === "openai" && (w[S.platform] = !!S.codex_image_generation_bridge);
      Object.keys(w).length > 0 ? i.codex_image_generation_bridge = w : delete i.codex_image_generation_bridge;
      const y = {};
      for (const S of _.platforms)
        S.enabled && S.platform === "anthropic" && (y[S.platform] = !!S.bedrock_cc_compat);
      return Object.keys(y).length > 0 ? i.bedrock_cc_compat = y : delete i.bedrock_cc_compat, { group_ids: s, model_pricing: a, model_mapping: t, features_config: i };
    }
    function yt(n) {
      const a = /* @__PURE__ */ new Map();
      for (const s of se.value)
        a.set(s.id, s.platform);
      const t = /* @__PURE__ */ new Set();
      for (const s of n.group_ids || []) {
        const u = a.get(s);
        u === "composite" ? ve.forEach((w) => t.add(w)) : u && t.add(u);
      }
      for (const s of n.model_pricing || [])
        s.platform && t.add(s.platform);
      for (const s of Object.keys(n.model_mapping || {}))
        ye.includes(s) && t.add(s);
      const i = [];
      for (const s of ye) {
        if (!t.has(s)) continue;
        const u = (n.group_ids || []).filter((N) => {
          const Ie = a.get(N);
          return Ie === s || Ie === "composite" && ve.includes(s);
        }), w = (n.model_mapping || {})[s] || {}, y = (n.model_pricing || []).filter((N) => (N.platform || "anthropic") === s).map((N) => ({
          models: N.models || [],
          billing_mode: N.billing_mode,
          input_price: B(N.input_price),
          output_price: B(N.output_price),
          cache_write_price: B(N.cache_write_price),
          cache_read_price: B(N.cache_read_price),
          image_input_price: B(N.image_input_price),
          image_output_price: B(N.image_output_price),
          per_request_price: N.per_request_price,
          intervals: Oe(N.intervals || []),
          time_pricing: Qt(N.time_pricing)
        })), x = n.features_config, S = x == null ? void 0 : x.web_search_emulation, O = (S == null ? void 0 : S[s]) === !0, Se = x == null ? void 0 : x.codex_image_generation_bridge, At = (Se == null ? void 0 : Se[s]) === !0, zt = (x == null ? void 0 : x.bedrock_cc_compat) === !0;
        i.push({
          platform: s,
          enabled: !0,
          collapsed: !1,
          group_ids: u,
          model_mapping: { ...w },
          model_pricing: y,
          web_search_emulation: O,
          codex_image_generation_bridge: At,
          bedrock_cc_compat: zt,
          account_stats_pricing_rules: []
        });
      }
      return i;
    }
    async function X() {
      J && J.abort();
      const n = new AbortController();
      J = n, f.value = !0;
      try {
        const a = await K.channels.list(q.page, q.page_size, {
          status: L.status || void 0,
          search: P.value || void 0,
          sort_by: b.sort_by,
          sort_order: b.sort_order
        }, { signal: n.signal });
        if (n.signal.aborted || J !== n) return;
        C.value = a.items || [], q.total = a.total;
      } catch (a) {
        const t = a;
        if ((t == null ? void 0 : t.name) === "AbortError" || (t == null ? void 0 : t.code) === "ERR_CANCELED") return;
        c.showError(_e(a, r("admin.channels.loadError", "Failed to load channels")));
      } finally {
        J === n && (f.value = !1, J = null);
      }
    }
    async function we() {
      be.value = !0;
      try {
        se.value = await K.groups.getAll();
      } catch (n) {
        console.error("Error loading groups:", n);
      } finally {
        be.value = !1;
      }
    }
    async function Re() {
      try {
        const n = await K.channels.list(1, 1e3);
        xe.value = n.items || [];
      } catch {
        xe.value = C.value;
      }
    }
    let Ce;
    function vt() {
      clearTimeout(Ce), Ce = setTimeout(() => {
        q.page = 1, X();
      }, 300);
    }
    function kt(n) {
      q.page = n, X();
    }
    function $t(n) {
      q.page_size = n, q.page = 1, X();
    }
    function wt(n, a) {
      b.sort_by = n, b.sort_order = a, q.page = 1, X();
    }
    function qe() {
      _.name = "", _.description = "", _.status = "active", _.restrict_models = !1, _.billing_model_source = "channel_mapped", _.platforms = [], _.apply_pricing_to_account_stats = !1, F.value = "basic", ie.clearAll(), $e(), me.value = {};
    }
    async function Ue() {
      h.value = null, qe(), await Promise.all([we(), Re()]), p.value = !0;
    }
    async function Ct(n) {
      h.value = n, _.name = n.name, _.description = n.description || "", _.status = n.status, _.restrict_models = n.restrict_models || !1, _.billing_model_source = n.billing_model_source || "channel_mapped", _.apply_pricing_to_account_stats = n.apply_pricing_to_account_stats || !1, await Promise.all([we(), Re()]), _.platforms = yt(n), Pt(n.account_stats_pricing_rules || []), await St(), p.value = !0;
    }
    function Pt(n) {
      var t;
      const a = /* @__PURE__ */ new Map();
      for (const i of se.value)
        a.set(i.id, i.platform);
      for (const i of n) {
        const s = /* @__PURE__ */ new Set();
        for (const x of i.group_ids || []) {
          const S = a.get(x);
          S && S !== "composite" && s.add(S);
        }
        if (s.size === 0 && ((t = i.pricing) == null ? void 0 : t.length) > 0) {
          const x = i.pricing[0].platform;
          x && s.add(x);
        }
        const u = s.size >= 1 ? [...s][0] : null;
        if (!u) continue;
        const w = _.platforms.find((x) => x.platform === u);
        if (!w) continue;
        const y = {
          name: i.name || "",
          group_ids: [...i.group_ids || []],
          account_ids: [...i.account_ids || []],
          pricing: (i.pricing || []).map((x) => ({
            models: [...x.models || []],
            billing_mode: x.billing_mode,
            input_price: B(x.input_price),
            output_price: B(x.output_price),
            cache_write_price: B(x.cache_write_price),
            cache_read_price: B(x.cache_read_price),
            image_input_price: B(x.image_input_price),
            image_output_price: B(x.image_output_price),
            per_request_price: x.per_request_price,
            intervals: Oe(x.intervals || []),
            time_pricing: ge()
          }))
        };
        w.account_stats_pricing_rules.push(y);
      }
    }
    async function St() {
      const n = /* @__PURE__ */ new Set();
      for (const i of _.platforms)
        for (const s of i.account_stats_pricing_rules)
          for (const u of s.account_ids)
            n.add(u);
      if (n.size === 0) return;
      const a = [...n], t = await Promise.allSettled(
        a.map((i) => K.accounts.getById(i))
      );
      for (let i = 0; i < a.length; i++) {
        const s = t[i];
        s.status === "fulfilled" && (me.value[a[i]] = s.value.name);
      }
    }
    function Pe() {
      p.value = !1, h.value = null, qe();
    }
    async function Tt() {
      if ($.value) return;
      if (!_.name.trim()) {
        c.showError(r("admin.channels.nameRequired", "Please enter a channel name"));
        return;
      }
      for (const s of _.platforms.filter((u) => u.enabled)) {
        if (s.group_ids.length === 0) {
          const u = r("admin.groups.platforms." + s.platform, s.platform);
          c.showError(r("admin.channels.noGroupsSelected", { platform: u })), F.value = s.platform;
          return;
        }
        for (const u of s.model_pricing)
          if (u.models.length === 0) {
            const w = r("admin.groups.platforms." + s.platform, s.platform);
            c.showError(r("admin.channels.emptyModelsInPricing", { platform: w })), F.value = s.platform;
            return;
          }
      }
      for (const s of _.platforms.filter((u) => u.enabled)) {
        const u = [];
        for (const x of s.model_pricing)
          u.push(...x.models);
        const w = je(u);
        if (w) {
          c.showError(
            r(
              "admin.channels.modelConflict",
              { model1: w[0], model2: w[1] }
            )
          ), F.value = s.platform;
          return;
        }
        const y = Object.keys(s.model_mapping);
        if (y.length > 0) {
          const x = je(y);
          if (x) {
            c.showError(
              r(
                "admin.channels.mappingConflict",
                { model1: x[0], model2: x[1] }
              )
            ), F.value = s.platform;
            return;
          }
        }
      }
      for (const s of _.platforms.filter((u) => u.enabled))
        for (const u of s.model_pricing)
          if (u.models.length !== 0 && (u.billing_mode === "per_request" || u.billing_mode === "image") && (u.per_request_price == null || u.per_request_price === "") && (!u.intervals || u.intervals.length === 0)) {
            c.showError(r("admin.channels.form.perRequestPriceRequired"));
            return;
          }
      for (const s of _.platforms.filter((u) => u.enabled))
        for (const u of s.model_pricing) {
          if (!u.intervals || u.intervals.length === 0) continue;
          const w = Yt(u.intervals, u.billing_mode, r);
          if (w) {
            const y = r("admin.groups.platforms." + s.platform, s.platform), x = u.models.join(", ") || r("admin.channels.form.unnamed");
            c.showError(`${y} - ${x}: ${w}`), F.value = s.platform;
            return;
          }
        }
      for (const s of _.platforms.filter((u) => u.enabled))
        for (const u of s.model_pricing) {
          const w = Xt(u.time_pricing, r);
          if (w) {
            const y = r("admin.groups.platforms." + s.platform, s.platform), x = u.models.join(", ") || r("admin.channels.form.unnamed");
            c.showError(`${y} - ${x}: ${w}`), F.value = s.platform;
            return;
          }
        }
      const { group_ids: n, model_pricing: a, model_mapping: t, features_config: i } = xt();
      $.value = !0;
      try {
        if (h.value) {
          const s = {
            name: _.name.trim(),
            description: _.description.trim() || void 0,
            status: _.status,
            group_ids: n,
            model_pricing: a,
            model_mapping: Object.keys(t).length > 0 ? t : {},
            billing_model_source: _.billing_model_source,
            restrict_models: _.restrict_models,
            features_config: i,
            apply_pricing_to_account_stats: _.apply_pricing_to_account_stats,
            account_stats_pricing_rules: ze()
          };
          await K.channels.update(h.value.id, s), c.showSuccess(r("admin.channels.updateSuccess", "Channel updated"));
        } else {
          const s = {
            name: _.name.trim(),
            description: _.description.trim() || void 0,
            group_ids: n,
            model_pricing: a,
            model_mapping: Object.keys(t).length > 0 ? t : {},
            billing_model_source: _.billing_model_source,
            restrict_models: _.restrict_models,
            features_config: i,
            apply_pricing_to_account_stats: _.apply_pricing_to_account_stats,
            account_stats_pricing_rules: ze()
          };
          await K.channels.create(s), c.showSuccess(r("admin.channels.createSuccess", "Channel created"));
        }
        Pe(), X();
      } catch (s) {
        c.showError(_e(s, h.value ? r("admin.channels.updateError", "Failed to update channel") : r("admin.channels.createError", "Failed to create channel")));
      } finally {
        $.value = !1;
      }
    }
    async function Et(n) {
      const a = n.status === "active" ? "disabled" : "active";
      try {
        await K.channels.update(n.id, { status: a }), L.status && L.status !== a ? await X() : n.status = a;
      } catch (t) {
        c.showError(r("admin.channels.updateError", "Failed to update channel")), console.error("Error toggling channel status:", t);
      }
    }
    function Vt(n) {
      te.value = n, V.value = !0;
    }
    async function Mt() {
      if (te.value)
        try {
          await K.channels.remove(te.value.id), c.showSuccess(r("admin.channels.deleteSuccess", "Channel deleted")), V.value = !1, te.value = null, X();
        } catch (n) {
          c.showError(_e(n, r("admin.channels.deleteError", "Failed to delete channel")));
        }
    }
    return qt(() => {
      X(), we(), E(), document.addEventListener("click", Ae);
    }), Ke(() => {
      clearTimeout(Ce), J == null || J.abort(), document.removeEventListener("click", Ae), ie.clearAll(), $e();
    }), (n, a) => (m(), g(I, null, [
      T(Jt, null, {
        filters: G(() => [
          e("div", Ja, [
            e("div", el, [
              e("div", tl, [
                T(W, {
                  name: "search",
                  size: "md",
                  class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                }),
                ee(e("input", {
                  "onUpdate:modelValue": a[0] || (a[0] = (t) => P.value = t),
                  type: "text",
                  placeholder: l(r)("admin.channels.searchChannels", "Search channels..."),
                  class: "input pl-10",
                  onInput: vt
                }, null, 40, nl), [
                  [ce, P.value]
                ])
              ]),
              T(ue, {
                modelValue: L.status,
                "onUpdate:modelValue": a[1] || (a[1] = (t) => L.status = t),
                options: R.value,
                placeholder: l(r)("admin.channels.allStatus", "All Status"),
                class: "w-40",
                onChange: X
              }, null, 8, ["modelValue", "options", "placeholder"])
            ]),
            e("div", al, [
              e("button", {
                onClick: X,
                disabled: f.value,
                class: "btn btn-secondary",
                title: l(r)("common.refresh", "Refresh")
              }, [
                T(W, {
                  name: "refresh",
                  size: "md",
                  class: A(f.value ? "animate-spin" : "")
                }, null, 8, ["class"])
              ], 8, ll),
              e("button", {
                onClick: Ue,
                class: "btn btn-primary"
              }, [
                T(W, {
                  name: "plus",
                  size: "md",
                  class: "mr-2"
                }),
                D(" " + o(l(r)("admin.channels.createChannel", "Create Channel")), 1)
              ])
            ])
          ])
        ]),
        table: G(() => [
          T(Nt, {
            columns: M.value,
            data: C.value,
            loading: f.value,
            "server-side-sort": !0,
            "default-sort-key": "created_at",
            "default-sort-order": "desc",
            onSort: wt
          }, {
            "cell-name": G(({ value: t }) => [
              e("span", rl, o(t), 1)
            ]),
            "cell-description": G(({ value: t }) => [
              e("span", sl, o(t || "-"), 1)
            ]),
            "cell-status": G(({ row: t }) => [
              T(de, {
                modelValue: t.status === "active",
                "onUpdate:modelValue": (i) => Et(t)
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            "cell-group_count": G(({ row: t }) => [
              e("span", ol, o((t.group_ids || []).length) + " " + o(l(r)("admin.channels.groupsUnit", "groups")), 1)
            ]),
            "cell-pricing_count": G(({ row: t }) => [
              e("span", il, o((t.model_pricing || []).length) + " " + o(l(r)("admin.channels.pricingUnit", "pricing rules")), 1)
            ]),
            "cell-created_at": G(({ value: t }) => [
              e("span", cl, o(Ye(t)), 1)
            ]),
            "cell-actions": G(({ row: t }) => [
              e("div", dl, [
                e("button", {
                  onClick: (i) => Ct(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  T(W, {
                    name: "edit",
                    size: "sm"
                  }),
                  e("span", ml, o(l(r)("common.edit", "Edit")), 1)
                ], 8, ul),
                e("button", {
                  onClick: (i) => Vt(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                }, [
                  T(W, {
                    name: "trash",
                    size: "sm"
                  }),
                  e("span", _l, o(l(r)("common.delete", "Delete")), 1)
                ], 8, pl)
              ])
            ]),
            empty: G(() => [
              T(Lt, {
                title: l(r)("admin.channels.noChannelsYet", "No Channels Yet"),
                description: l(r)("admin.channels.createFirstChannel", "Create your first channel to manage model pricing"),
                "action-text": l(r)("admin.channels.createChannel", "Create Channel"),
                onAction: Ue
              }, null, 8, ["title", "description", "action-text"])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        pagination: G(() => [
          q.total > 0 ? (m(), ae(Ft, {
            key: 0,
            page: q.page,
            total: q.total,
            "page-size": q.page_size,
            "onUpdate:page": kt,
            "onUpdate:pageSize": $t
          }, null, 8, ["page", "total", "page-size"])) : z("", !0)
        ]),
        _: 1
      }),
      T(Ot, {
        show: p.value,
        title: h.value ? l(r)("admin.channels.editChannel", "Edit Channel") : l(r)("admin.channels.createChannel", "Create Channel"),
        width: "extra-wide",
        onClose: Pe
      }, {
        footer: G(() => [
          e("div", Hr, [
            e("button", {
              onClick: Pe,
              type: "button",
              class: "btn btn-secondary"
            }, o(l(r)("common.cancel", "Cancel")), 1),
            e("button", {
              type: "submit",
              form: "channel-form",
              disabled: $.value,
              class: "btn btn-primary"
            }, o($.value ? l(r)("common.submitting", "Submitting...") : h.value ? l(r)("common.update", "Update") : l(r)("common.create", "Create")), 9, Kr)
          ])
        ]),
        default: G(() => [
          e("div", gl, [
            e("div", fl, [
              e("button", {
                type: "button",
                onClick: a[2] || (a[2] = (t) => F.value = "basic"),
                class: A(["channel-tab", F.value === "basic" ? "channel-tab-active" : "channel-tab-inactive"])
              }, o(l(r)("admin.channels.form.basicSettings")), 3),
              (m(!0), g(I, null, j(_.platforms.filter((t) => t.enabled), (t) => (m(), g("button", {
                key: t.platform,
                type: "button",
                onClick: (i) => F.value = t.platform,
                class: A(["channel-tab group", F.value === t.platform ? "channel-tab-active" : "channel-tab-inactive"])
              }, [
                T(Ne, {
                  platform: t.platform,
                  size: "xs",
                  class: A(l(Q)(t.platform))
                }, null, 8, ["platform", "class"]),
                e("span", {
                  class: A(l(Q)(t.platform))
                }, o(l(r)("admin.groups.platforms." + t.platform, t.platform)), 3)
              ], 10, hl))), 128))
            ]),
            e("form", {
              id: "channel-form",
              onSubmit: Be(Tt, ["prevent"]),
              class: "flex-1 overflow-y-auto pt-4"
            }, [
              ee(e("div", bl, [
                e("div", null, [
                  e("label", xl, [
                    D(o(l(r)("admin.channels.form.name", "Name")) + " ", 1),
                    a[10] || (a[10] = e("span", { class: "text-red-500" }, "*", -1))
                  ]),
                  ee(e("input", {
                    "onUpdate:modelValue": a[3] || (a[3] = (t) => _.name = t),
                    type: "text",
                    required: "",
                    class: "input",
                    placeholder: l(r)("admin.channels.form.namePlaceholder", "Enter channel name")
                  }, null, 8, yl), [
                    [ce, _.name]
                  ])
                ]),
                e("div", null, [
                  e("label", vl, o(l(r)("admin.channels.form.description", "Description")), 1),
                  ee(e("textarea", {
                    "onUpdate:modelValue": a[4] || (a[4] = (t) => _.description = t),
                    rows: "2",
                    class: "input",
                    placeholder: l(r)("admin.channels.form.descriptionPlaceholder", "Optional description")
                  }, null, 8, kl), [
                    [ce, _.description]
                  ])
                ]),
                h.value ? (m(), g("div", $l, [
                  e("label", wl, o(l(r)("admin.channels.form.status", "Status")), 1),
                  T(ue, {
                    modelValue: _.status,
                    "onUpdate:modelValue": a[5] || (a[5] = (t) => _.status = t),
                    options: Y.value
                  }, null, 8, ["modelValue", "options"])
                ])) : z("", !0),
                e("div", null, [
                  e("label", Cl, [
                    ee(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": a[6] || (a[6] = (t) => _.restrict_models = t),
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    }, null, 512), [
                      [Ut, _.restrict_models]
                    ]),
                    e("span", Pl, o(l(r)("admin.channels.form.restrictModels", "Restrict Models")), 1)
                  ]),
                  e("p", Sl, o(l(r)("admin.channels.form.restrictModelsHint", "When enabled, only models in the pricing list are allowed. Others will be rejected.")), 1)
                ]),
                e("div", null, [
                  e("label", Tl, o(l(r)("admin.channels.form.billingModelSource", "Billing Basis")), 1),
                  T(ue, {
                    modelValue: _.billing_model_source,
                    "onUpdate:modelValue": a[7] || (a[7] = (t) => _.billing_model_source = t),
                    options: v.value
                  }, null, 8, ["modelValue", "options"]),
                  e("p", El, o(l(r)("admin.channels.form.billingModelSourceHint", "Controls which model name is used for pricing lookup")), 1)
                ]),
                e("div", Vl, [
                  e("label", Ml, o(l(r)("admin.channels.form.platformConfig")), 1),
                  e("div", Al, [
                    (m(!0), g(I, null, j(l(ye), (t) => (m(), g("label", {
                      key: t,
                      class: A(["inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors", Ee.value.includes(t) ? "bg-primary-50 border-primary-300 dark:bg-primary-900/20 dark:border-primary-700" : "border-gray-200 hover:bg-gray-50 dark:border-dark-600 dark:hover:bg-dark-700"])
                    }, [
                      e("input", {
                        type: "checkbox",
                        checked: Ee.value.includes(t),
                        class: "h-3.5 w-3.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                        onChange: (i) => Qe(t)
                      }, null, 40, zl),
                      T(Ne, {
                        platform: t,
                        size: "xs",
                        class: A(l(Q)(t))
                      }, null, 8, ["platform", "class"]),
                      e("span", {
                        class: A(l(Q)(t))
                      }, o(l(r)("admin.groups.platforms." + t, t)), 3)
                    ], 2))), 128))
                  ])
                ]),
                e("div", Rl, [
                  e("div", ql, [
                    e("div", null, [
                      e("label", Ul, o(l(r)("admin.channels.form.applyPricingToAccountStats")), 1),
                      e("p", Il, o(l(r)("admin.channels.form.applyPricingToAccountStatsDesc")), 1)
                    ]),
                    T(de, {
                      modelValue: _.apply_pricing_to_account_stats,
                      "onUpdate:modelValue": a[8] || (a[8] = (t) => _.apply_pricing_to_account_stats = t)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ], 512), [
                [De, F.value === "basic"]
              ]),
              (m(!0), g(I, null, j(_.platforms, (t, i) => ee((m(), g("div", {
                key: "tab-" + t.platform,
                class: "space-y-4"
              }, [
                e("div", null, [
                  e("label", Dl, [
                    D(o(l(r)("admin.channels.form.groups", "Associated Groups")) + " ", 1),
                    a[11] || (a[11] = e("span", { class: "text-red-500" }, "*", -1)),
                    t.group_ids.length > 0 ? (m(), g("span", Ol, " (" + o(l(r)("admin.channels.form.selectedCount", { count: t.group_ids.length })) + ") ", 1)) : z("", !0)
                  ]),
                  e("div", jl, [
                    be.value ? (m(), g("div", Fl, o(l(r)("common.loading", "Loading...")), 1)) : Ve(t.platform).length === 0 ? (m(), g("div", Nl, o(l(r)("admin.channels.form.noGroupsAvailable", "No groups available")), 1)) : (m(), g("div", Ll, [
                      (m(!0), g(I, null, j(Ve(t.platform), (s) => (m(), g("label", {
                        key: s.id,
                        class: A(["inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1 text-xs transition-colors hover:bg-gray-50 dark:border-dark-600 dark:hover:bg-dark-700", [
                          t.group_ids.includes(s.id) ? "bg-primary-50 border-primary-300 dark:bg-primary-900/20 dark:border-primary-700" : "",
                          ke(s.id, t.platform) ? "opacity-40" : ""
                        ]])
                      }, [
                        e("input", {
                          type: "checkbox",
                          checked: t.group_ids.includes(s.id),
                          disabled: ke(s.id, t.platform),
                          class: "h-3 w-3 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                          onChange: (u) => tt(i, s.id)
                        }, null, 40, Gl),
                        e("span", {
                          class: A(["font-medium", l(Q)(s.platform)])
                        }, o(s.name), 3),
                        e("span", {
                          class: A(["rounded-full px-1 py-0 text-[10px]", l(ln)(s.platform)])
                        }, o(s.rate_multiplier) + "x", 3),
                        e("span", Bl, o(s.account_count || 0), 1),
                        ke(s.id, t.platform) ? (m(), g("span", Hl, o(Je(s.id)), 1)) : z("", !0)
                      ], 2))), 128))
                    ]))
                  ])
                ]),
                t.platform === "anthropic" && k.value ? (m(), g("div", Kl, [
                  e("div", Wl, [
                    e("div", null, [
                      e("label", Yl, o(l(r)("admin.channels.form.webSearchEmulation")), 1),
                      e("p", Xl, o(l(r)("admin.channels.form.webSearchEmulationHint")), 1)
                    ]),
                    T(de, {
                      modelValue: t.web_search_emulation,
                      "onUpdate:modelValue": (s) => t.web_search_emulation = s
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])) : z("", !0),
                t.platform === "openai" ? (m(), g("div", Ql, [
                  e("div", Zl, [
                    e("div", null, [
                      e("label", Jl, o(l(r)("admin.channels.form.codexImageGenerationBridge")), 1),
                      e("p", er, o(l(r)("admin.channels.form.codexImageGenerationBridgeHint")), 1)
                    ]),
                    T(de, {
                      modelValue: t.codex_image_generation_bridge,
                      "onUpdate:modelValue": (s) => t.codex_image_generation_bridge = s
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])) : z("", !0),
                t.platform === "anthropic" ? (m(), g("div", tr, [
                  e("div", nr, [
                    e("div", null, [
                      e("label", ar, o(l(r)("admin.channels.form.bedrockCCCompat")), 1),
                      e("p", lr, o(l(r)("admin.channels.form.bedrockCCCompatHint")), 1)
                    ]),
                    T(de, {
                      modelValue: t.bedrock_cc_compat,
                      "onUpdate:modelValue": (s) => t.bedrock_cc_compat = s
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])) : z("", !0),
                e("div", null, [
                  e("div", rr, [
                    e("label", sr, o(l(r)("admin.channels.form.modelMapping", "Model Mapping")), 1),
                    e("button", {
                      type: "button",
                      onClick: (s) => st(i),
                      class: "text-xs text-primary-600 hover:text-primary-700"
                    }, " + " + o(l(r)("common.add", "Add")), 9, or)
                  ]),
                  Object.keys(t.model_mapping).length === 0 ? (m(), g("div", ir, o(l(r)("admin.channels.form.noMappingRules", 'No mapping rules. Click "Add" to create one.')), 1)) : (m(), g("div", cr, [
                    (m(!0), g(I, null, j(t.model_mapping, (s, u) => (m(), g("div", {
                      key: u,
                      class: "flex items-center gap-2"
                    }, [
                      e("input", {
                        value: u,
                        type: "text",
                        class: A(["input flex-1 text-xs", l(Q)(t.platform)]),
                        placeholder: l(r)("admin.channels.form.mappingSource", "Source model"),
                        onChange: (w) => it(i, u, w.target.value)
                      }, null, 42, dr),
                      a[12] || (a[12] = e("span", { class: "text-gray-400 text-xs" }, "→", -1)),
                      e("input", {
                        value: t.model_mapping[u],
                        type: "text",
                        class: A(["input flex-1 text-xs", l(Q)(t.platform)]),
                        placeholder: l(r)("admin.channels.form.mappingTarget", "Target model"),
                        onInput: (w) => t.model_mapping[u] = w.target.value
                      }, null, 42, ur),
                      e("button", {
                        type: "button",
                        onClick: (w) => ot(i, u),
                        class: "rounded p-0.5 text-gray-400 hover:text-red-500"
                      }, [
                        T(W, {
                          name: "trash",
                          size: "sm"
                        })
                      ], 8, mr)
                    ]))), 128))
                  ]))
                ]),
                e("div", null, [
                  e("div", pr, [
                    e("label", _r, o(l(r)("admin.channels.form.modelPricing", "Model Pricing")), 1),
                    e("div", gr, [
                      e("button", {
                        type: "button",
                        onClick: (s) => at(i),
                        disabled: oe.value === t.platform,
                        class: "text-xs text-gray-500 hover:text-primary-600 disabled:opacity-50"
                      }, o(oe.value === t.platform ? l(r)("admin.channels.form.syncingModels") : l(r)("admin.channels.form.syncLatestModels")), 9, fr),
                      e("button", {
                        type: "button",
                        onClick: (s) => nt(i),
                        class: "text-xs text-primary-600 hover:text-primary-700"
                      }, " + " + o(l(r)("common.add", "Add")), 9, hr)
                    ])
                  ]),
                  t.model_pricing.length === 0 ? (m(), g("div", br, o(l(r)("admin.channels.form.noPricingRules", 'No pricing rules yet. Click "Add" to create one.')), 1)) : (m(), g("div", xr, [
                    (m(!0), g(I, null, j(t.model_pricing, (s, u) => (m(), ae(Le, {
                      key: u,
                      entry: s,
                      platform: t.platform,
                      "enable-time-pricing": "",
                      onUpdate: (w) => lt(i, u, w),
                      onRemove: (w) => rt(i, u)
                    }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
                  ]))
                ]),
                e("div", yr, [
                  e("div", vr, [
                    e("h4", kr, o(l(r)("admin.channels.form.accountStatsPricingRules")), 1),
                    e("button", {
                      type: "button",
                      onClick: (s) => ct(i),
                      class: "rounded-lg border border-primary-300 px-3 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 dark:border-primary-600 dark:text-primary-400 dark:hover:bg-primary-900/20"
                    }, " + " + o(l(r)("admin.channels.form.addRule")), 9, $r)
                  ]),
                  t.account_stats_pricing_rules.length === 0 ? (m(), g("p", wr, o(l(r)("admin.channels.form.noRulesConfigured")), 1)) : z("", !0),
                  (m(!0), g(I, null, j(t.account_stats_pricing_rules, (s, u) => {
                    var w;
                    return m(), g("div", {
                      key: u,
                      class: "space-y-3 rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                    }, [
                      e("div", Cr, [
                        ee(e("input", {
                          "onUpdate:modelValue": (y) => s.name = y,
                          placeholder: l(r)("admin.channels.form.ruleName"),
                          class: "bg-transparent text-sm font-medium text-gray-700 placeholder-gray-400 outline-none dark:text-gray-300"
                        }, null, 8, Pr), [
                          [ce, s.name]
                        ]),
                        e("button", {
                          type: "button",
                          onClick: (y) => ut(i, u),
                          class: "text-xs text-red-500 hover:text-red-700"
                        }, o(l(r)("common.delete")), 9, Sr)
                      ]),
                      e("div", null, [
                        e("label", Tr, o(l(r)("admin.channels.form.ruleGroups")), 1),
                        e("div", Er, [
                          (m(!0), g(I, null, j(t.group_ids, (y) => (m(), g("label", {
                            key: y,
                            class: A(["inline-flex cursor-pointer items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors", s.group_ids.includes(y) ? "border-primary-300 bg-primary-50 dark:border-primary-700 dark:bg-primary-900/20" : "border-gray-200 hover:bg-gray-50 dark:border-dark-600 dark:hover:bg-dark-700"])
                          }, [
                            e("input", {
                              type: "checkbox",
                              checked: s.group_ids.includes(y),
                              class: "h-3 w-3 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                              onChange: (x) => s.group_ids.includes(y) ? s.group_ids.splice(s.group_ids.indexOf(y), 1) : s.group_ids.push(y)
                            }, null, 40, Vr),
                            e("span", {
                              class: A(["font-medium", l(Q)(t.platform)])
                            }, o(pt(y)), 3)
                          ], 2))), 128))
                        ]),
                        t.group_ids.length === 0 ? (m(), g("p", Mr, o(l(r)("admin.channels.form.noGroupsInChannel")), 1)) : z("", !0)
                      ]),
                      e("div", null, [
                        e("label", Ar, o(l(r)("admin.channels.form.ruleAccounts")), 1),
                        e("div", zr, [
                          (m(!0), g(I, null, j(s.account_ids, (y) => (m(), g("span", {
                            key: y,
                            class: "inline-flex items-center gap-1 rounded-md border border-primary-300 bg-primary-50 px-2 py-0.5 text-xs dark:border-primary-700 dark:bg-primary-900/20"
                          }, [
                            e("span", {
                              class: A(["font-medium", l(Q)(t.platform)])
                            }, o(bt(y)), 3),
                            e("button", {
                              type: "button",
                              onClick: (x) => ht(s, y),
                              class: "text-gray-400 hover:text-red-500"
                            }, [
                              T(W, {
                                name: "x",
                                size: "xs"
                              })
                            ], 8, Rr)
                          ]))), 128))
                        ]),
                        e("div", qr, [
                          ee(e("input", {
                            "onUpdate:modelValue": (y) => le.value[`${t.platform}-${u}`] = y,
                            type: "text",
                            class: "input text-sm",
                            placeholder: l(r)("admin.channels.form.searchAccountPlaceholder"),
                            onInput: (y) => _t(t.platform, u),
                            onFocus: (y) => gt(t.platform, u)
                          }, null, 40, Ur), [
                            [ce, le.value[`${t.platform}-${u}`]]
                          ]),
                          ne.value[`${t.platform}-${u}`] && (((w = re.value[`${t.platform}-${u}`]) == null ? void 0 : w.length) ?? 0) > 0 ? (m(), g("div", Ir, [
                            (m(!0), g(I, null, j(re.value[`${t.platform}-${u}`], (y) => (m(), g("button", {
                              key: y.id,
                              type: "button",
                              onClick: (x) => ft(s, y, t.platform, u),
                              class: A(["w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700", { "opacity-50": s.account_ids.includes(y.id) }]),
                              disabled: s.account_ids.includes(y.id)
                            }, [
                              e("span", {
                                class: A(l(Q)(y.platform))
                              }, o(y.name), 3),
                              e("span", Or, "#" + o(y.id), 1)
                            ], 10, Dr))), 128))
                          ])) : z("", !0)
                        ]),
                        e("p", jr, o(l(r)("admin.channels.form.ruleAccountsHint")), 1)
                      ]),
                      e("div", null, [
                        e("div", Fr, [
                          e("label", Nr, o(l(r)("admin.channels.form.ruleModelPricing")), 1),
                          e("button", {
                            type: "button",
                            onClick: (y) => dt(i, u),
                            class: "text-xs text-primary-600 hover:text-primary-700"
                          }, " + " + o(l(r)("common.add")), 9, Lr)
                        ]),
                        s.pricing.length === 0 ? (m(), g("div", Gr, o(l(r)("admin.channels.form.noPricingRules")), 1)) : (m(), g("div", Br, [
                          (m(!0), g(I, null, j(s.pricing, (y, x) => (m(), ae(Le, {
                            key: x,
                            entry: y,
                            platform: t.platform,
                            onUpdate: (S) => s.pricing.splice(x, 1, S),
                            onRemove: (S) => mt(i, u, x)
                          }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
                        ]))
                      ])
                    ]);
                  }), 128))
                ])
              ])), [
                [De, t.enabled && F.value === t.platform]
              ])), 128))
            ], 32)
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      T(jt, {
        show: V.value,
        title: l(r)("admin.channels.deleteChannel", "Delete Channel"),
        message: et.value,
        "confirm-text": l(r)("common.delete", "Delete"),
        "cancel-text": l(r)("common.cancel", "Cancel"),
        danger: !0,
        onConfirm: Mt,
        onCancel: a[9] || (a[9] = (t) => V.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
}), es = /* @__PURE__ */ He(Wr, [["__scopeId", "data-v-93e80ff0"]]);
export {
  es as default
};
