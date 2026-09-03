import { d as D, u as F, j as P, o as h, a as b, b as _, F as V, r as O, n as U, e as w, f as q, t as y, h as B, _ as K, x as W, y as R, J as T, w as z } from "./cnProviderAdminLeaf-DkKZCNPa.js";
const N = "Asia/Shanghai", M = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/, I = /^(?:[01]\d|2[0-3]):[0-5]\d$/, Z = /^\d+(?:\.\d{1,2})?$/;
function G(e) {
  const t = String(e), r = Number(t);
  return Z.test(t) && Number.isFinite(r) && r > 0;
}
const oe = [
  "UTC",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Asia/Singapore",
  "Asia/Kolkata",
  "Australia/Sydney",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "America/Sao_Paulo",
  "Pacific/Auckland",
  "Pacific/Honolulu"
];
function j() {
  return { timezone: N, periods: [] };
}
function se(e) {
  return e ? {
    timezone: e.timezone || N,
    periods: (e.periods || []).map((t) => ({
      start_time: I.test(t.start_time) ? `${t.start_time}:00` : t.start_time,
      end_time: I.test(t.end_time) ? `${t.end_time}:00` : t.end_time,
      multiplier: Number(t.multiplier).toFixed(2)
    }))
  } : j();
}
function le(e) {
  var r;
  return (r = e == null ? void 0 : e.periods) != null && r.length ? {
    timezone: typeof e.timezone == "string" ? e.timezone.trim() : "",
    periods: e.periods.map((n) => ({
      start_time: n.start_time,
      end_time: n.end_time,
      multiplier: Number(n.multiplier)
    }))
  } : null;
}
function C(e, t) {
  if (t && e === "00:00:00") return 1440 * 60;
  const [r, n, i] = e.split(":").map(Number);
  return r * 60 * 60 + n * 60 + i;
}
function c(e, t) {
  return e(`admin.channels.timePricingValidation.${t}`);
}
function ce(e, t) {
  var o;
  if (!((o = e == null ? void 0 : e.periods) != null && o.length)) return null;
  if (typeof e.timezone != "string" || e.timezone.trim() === "")
    return c(t, "timezone");
  const r = e.timezone.trim();
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: r });
  } catch {
    return c(t, "timezone");
  }
  const n = [];
  for (const a of e.periods) {
    if (!M.test(a.start_time) || !M.test(a.end_time))
      return c(t, "format");
    if (a.start_time === a.end_time)
      return c(t, "range");
    const s = C(a.start_time, !1), p = C(a.end_time, !0);
    if (s >= p) return c(t, "range");
    if (!G(a.multiplier))
      return c(t, "multiplier");
    n.push({ start: s, end: p });
  }
  const i = [...n].sort((a, s) => a.start - s.start);
  for (let a = 1; a < i.length; a++)
    if (i[a].start < i[a - 1].end)
      return c(t, "overlap");
  return null;
}
function ue(e, t = /* @__PURE__ */ new Date()) {
  var r;
  try {
    const n = (r = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "shortOffset"
    }).formatToParts(t).find((o) => o.type === "timeZoneName")) == null ? void 0 : r.value;
    if (!n || n === "GMT") return "UTC+00:00";
    const i = /^GMT([+-])(\d{1,2})(?::(\d{2}))?$/.exec(n);
    return i ? `UTC${i[1]}${i[2].padStart(2, "0")}:${i[3] || "00"}` : "";
  } catch {
    return "";
  }
}
const A = 1e6;
function E(e) {
  if (e == null || e === "") return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function g(e) {
  const t = E(e);
  return t === null ? null : parseFloat((t / A).toPrecision(10));
}
function x(e) {
  return e == null ? null : parseFloat((e * A).toPrecision(10));
}
function de(e) {
  return (e || []).map((t) => ({
    min_tokens: t.min_tokens,
    max_tokens: t.max_tokens,
    tier_label: t.tier_label || "",
    input_price: x(t.input_price),
    output_price: x(t.output_price),
    cache_write_price: x(t.cache_write_price),
    cache_read_price: x(t.cache_read_price),
    per_request_price: t.per_request_price,
    sort_order: t.sort_order
  }));
}
function me(e) {
  return (e || []).map((t) => ({
    min_tokens: t.min_tokens,
    max_tokens: t.max_tokens,
    tier_label: t.tier_label,
    input_price: g(t.input_price),
    output_price: g(t.output_price),
    cache_write_price: g(t.cache_write_price),
    cache_read_price: g(t.cache_read_price),
    per_request_price: E(t.per_request_price),
    sort_order: t.sort_order
  }));
}
function H(e) {
  const t = e.toLowerCase(), r = t.endsWith("*");
  return {
    pattern: e,
    prefix: r ? t.slice(0, -1) : t,
    wildcard: r
  };
}
function Y(e, t) {
  return !e.wildcard && !t.wildcard ? e.prefix === t.prefix : e.wildcard && !t.wildcard ? t.prefix.startsWith(e.prefix) : !e.wildcard && t.wildcard ? e.prefix.startsWith(t.prefix) : e.prefix.startsWith(t.prefix) || t.prefix.startsWith(e.prefix);
}
function pe(e) {
  const t = e.map(H);
  for (let r = 0; r < t.length; r++)
    for (let n = r + 1; n < t.length; n++)
      if (Y(t[r], t[n]))
        return [t[r].pattern, t[n].pattern];
  return null;
}
function fe(e, t, r) {
  if (!e || e.length === 0) return null;
  const n = [...e].sort((i, o) => i.min_tokens - o.min_tokens);
  for (let i = 0; i < n.length; i++) {
    const o = Q(n[i], i, r);
    if (o) return o;
  }
  return t !== "token" ? null : v(n, r);
}
function m(e, t, r) {
  return e(`admin.channels.intervalValidation.${t}`, r);
}
function J(e, t) {
  return e(`admin.channels.intervalValidation.price.${t}`);
}
function Q(e, t, r) {
  const n = t + 1;
  if (e.min_tokens < 0)
    return m(
      r,
      "negativeMin",
      { index: n, value: e.min_tokens }
    );
  if (e.max_tokens != null) {
    if (e.max_tokens <= 0)
      return m(
        r,
        "maxPositive",
        { index: n, value: e.max_tokens }
      );
    if (e.max_tokens <= e.min_tokens)
      return m(
        r,
        "maxGreaterThanMin",
        { index: n, max: e.max_tokens, min: e.min_tokens }
      );
  }
  return X(e, t, r);
}
function X(e, t, r) {
  const n = t + 1, i = [
    ["inputPrice", e.input_price],
    ["outputPrice", e.output_price],
    ["cacheWritePrice", e.cache_write_price],
    ["cacheReadPrice", e.cache_read_price],
    ["perRequestPrice", e.per_request_price]
  ];
  for (const [o, a] of i)
    if (a != null && a !== "" && Number(a) < 0) {
      const s = J(r, o);
      return m(
        r,
        "negativePrice",
        { index: n, field: s }
      );
    }
  return null;
}
function v(e, t) {
  for (let r = 0; r < e.length; r++) {
    if (e[r].max_tokens == null && r < e.length - 1)
      return m(
        t,
        "unboundedLast",
        { index: r + 1 }
      );
    if (r === 0) continue;
    const n = e[r - 1];
    if (n.max_tokens == null || n.max_tokens > e[r].min_tokens) {
      const i = n.max_tokens == null ? "∞" : String(n.max_tokens);
      return m(
        t,
        "overlap",
        { previousIndex: r, currentIndex: r + 1, previousMax: i, currentMin: e[r].min_tokens }
      );
    }
  }
  return null;
}
function ee(e) {
  switch (e) {
    case "anthropic":
      return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400";
    case "openai":
      return "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400";
    case "gemini":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "antigravity":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "grok":
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    case "kimi":
      return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400";
    case "zhipu":
      return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
    case "deepseek":
      return "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
  }
}
function _e(e) {
  switch (e) {
    case "anthropic":
      return "text-zo-alert-700 dark:text-zo-alert-400";
    case "openai":
      return "text-zo-signal-700 dark:text-zo-signal-400";
    case "gemini":
      return "text-blue-700 dark:text-blue-400";
    case "antigravity":
      return "text-purple-700 dark:text-purple-400";
    case "grok":
      return "text-slate-700 dark:text-slate-300";
    case "kimi":
      return "text-pink-700 dark:text-pink-400";
    case "zhipu":
      return "text-indigo-700 dark:text-indigo-400";
    case "deepseek":
      return "text-teal-700 dark:text-teal-400";
    default:
      return "";
  }
}
const te = { class: "flex flex-wrap gap-1.5 rounded-lg border border-gray-200 bg-white p-2 dark:border-dark-600 dark:bg-dark-800 min-h-[2.5rem]" }, re = ["onClick"], ne = ["placeholder", "onKeydown"], ie = { class: "mt-1 text-xs text-gray-400" }, ge = /* @__PURE__ */ D({
  __name: "ModelTagInput",
  props: {
    models: {},
    placeholder: {},
    platform: {}
  },
  emits: ["update:models"],
  setup(e, { emit: t }) {
    const { t: r } = F(), n = e, i = t, o = P(""), a = P();
    function s() {
      const l = o.value.trim();
      l && (n.models.includes(l) || i("update:models", [...n.models, l]), o.value = "");
    }
    function p(l) {
      const u = [...n.models];
      u.splice(l, 1), i("update:models", u);
    }
    function S() {
      o.value === "" && n.models.length > 0 && p(n.models.length - 1);
    }
    function $(l) {
      var k;
      l.preventDefault();
      const d = (((k = l.clipboardData) == null ? void 0 : k.getData("text")) || "").split(/[,\n;]+/).map((L) => L.trim()).filter(Boolean);
      if (d.length === 0) return;
      const f = [.../* @__PURE__ */ new Set([...n.models, ...d])];
      i("update:models", f), o.value = "";
    }
    return (l, u) => (h(), b("div", null, [
      _("div", te, [
        (h(!0), b(V, null, O(e.models, (d, f) => (h(), b("span", {
          key: f,
          class: U(["inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-sm", w(ee)(n.platform || "")])
        }, [
          q(y(d) + " ", 1),
          _("button", {
            type: "button",
            onClick: (k) => p(f),
            class: "ml-0.5 rounded-full p-0.5 hover:bg-primary-200 dark:hover:bg-primary-800"
          }, [
            B(K, {
              name: "x",
              size: "xs"
            })
          ], 8, re)
        ], 2))), 128)),
        W(_("input", {
          ref_key: "inputRef",
          ref: a,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          type: "text",
          class: "flex-1 min-w-[120px] border-none bg-transparent text-sm outline-none placeholder:text-gray-400 dark:text-white",
          placeholder: e.models.length === 0 ? e.placeholder : "",
          onKeydown: [
            T(z(s, ["prevent"]), ["enter"]),
            T(z(s, ["prevent"]), ["tab"]),
            T(S, ["delete"])
          ],
          onPaste: $,
          onBlur: s
        }, null, 40, ne), [
          [R, o.value]
        ])
      ]),
      _("p", ie, y(w(r)("admin.channels.form.modelInputHint", "Press Enter to add, supports paste for batch import.")), 1)
    ]));
  }
});
export {
  oe as C,
  ge as _,
  de as a,
  pe as b,
  j as c,
  ce as d,
  se as e,
  ue as f,
  ee as g,
  le as h,
  G as i,
  me as j,
  _e as k,
  g as m,
  x as p,
  fe as v
};
