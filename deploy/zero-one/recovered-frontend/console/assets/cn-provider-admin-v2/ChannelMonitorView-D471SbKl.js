import { B as _e, d as ie, C as Ne, u as de, c as R, o as l, a as i, b as e, h as O, _ as se, x as J, y as Q, e as n, n as K, f as G, t as o, D as qe, j as S, E as pe, k as xe, v as j, F as q, r as W, g as I, G as Je, p as we, q as $e, w as Qe, s as Ye, H as ht, I as Ae, m as vt } from "./cnProviderAdminLeaf-BPO9X3xc.js";
import { _ as Te, e as le } from "./Toggle.vue_vue_type_script_setup_true_lang-DYpcY-Ah.js";
import { C as Ze, S as Ue, _ as Pe, b as ne, a as Xe, g as gt, P as yt, D as bt, c as _t } from "./platforms-Cmi8wUVf.js";
import { T as ft } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-BFK_SVVE.js";
import { _ as We } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-4nkGBfgk.js";
import { k as xt, _ as kt } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-Bz2x3djq.js";
import { _ as Mt } from "./GroupBadge.vue_vue_type_script_setup_true_lang-D4v2CTKh.js";
async function wt(s = 1, r = 10, p, k) {
  const { data: a } = await _e.get("/keys", {
    params: { page: s, page_size: r, ...p },
    signal: k == null ? void 0 : k.signal
  });
  return a;
}
async function $t(s) {
  const { data: r } = await _e.get(`/keys/${s}`);
  return r;
}
async function Ct(s, r, p, k, a, b, m, g) {
  const y = { name: s };
  r !== void 0 && (y.group_id = r), p && (y.custom_key = p), k && k.length > 0 && (y.ip_whitelist = k), a && a.length > 0 && (y.ip_blacklist = a), b !== void 0 && b > 0 && (y.quota = b), m !== void 0 && m > 0 && (y.expires_in_days = m), g != null && g.rate_limit_5h && g.rate_limit_5h > 0 && (y.rate_limit_5h = g.rate_limit_5h), g != null && g.rate_limit_1d && g.rate_limit_1d > 0 && (y.rate_limit_1d = g.rate_limit_1d), g != null && g.rate_limit_7d && g.rate_limit_7d > 0 && (y.rate_limit_7d = g.rate_limit_7d);
  const { data: z } = await _e.post("/keys", y);
  return z;
}
async function et(s, r) {
  const { data: p } = await _e.put(`/keys/${s}`, r);
  return p;
}
async function Vt(s) {
  const { data: r } = await _e.delete(`/keys/${s}`);
  return r;
}
async function zt(s, r) {
  return et(s, { status: r });
}
const Et = {
  list: wt,
  getById: $t,
  create: Ct,
  update: et,
  delete: Vt,
  toggleStatus: zt
};
async function St() {
  const { data: s } = await _e.get("/groups/available");
  return s;
}
async function Pt() {
  const { data: s } = await _e.get("/groups/rates");
  return s || {};
}
const Ot = {
  getAvailable: St,
  getUserGroupRates: Pt
}, At = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, Rt = { class: "flex flex-1 flex-wrap items-center gap-3" }, Tt = { class: "relative w-full sm:w-64" }, Ut = ["placeholder"], It = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, Nt = ["disabled", "title"], Dt = ["title"], Ht = /* @__PURE__ */ ie({
  __name: "MonitorFiltersBar",
  props: /* @__PURE__ */ qe({
    loading: { type: Boolean }
  }, {
    search: { required: !0 },
    searchModifiers: {},
    provider: { required: !0 },
    providerModifiers: {},
    enabled: { required: !0 },
    enabledModifiers: {}
  }),
  emits: /* @__PURE__ */ qe(["reload", "create", "manage-templates", "search-input"], ["update:search", "update:provider", "update:enabled"]),
  setup(s) {
    const r = Ne(s, "search"), p = Ne(s, "provider"), k = Ne(s, "enabled"), { t: a } = de(), b = R(() => [
      { value: "", label: a("admin.channelMonitor.allProviders") },
      ...Ze.map(({ value: g }) => ({
        value: g,
        label: a(`monitorCommon.providers.${g}`)
      }))
    ]), m = R(() => [
      { value: "", label: a("admin.channelMonitor.allStatus") },
      { value: "true", label: a("admin.channelMonitor.onlyEnabled") },
      { value: "false", label: a("admin.channelMonitor.onlyDisabled") }
    ]);
    return (g, y) => (l(), i("div", At, [
      e("div", Rt, [
        e("div", Tt, [
          O(se, {
            name: "search",
            size: "md",
            class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          }),
          J(e("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (z) => r.value = z),
            type: "text",
            placeholder: n(a)("admin.channelMonitor.searchPlaceholder"),
            class: "input pl-10",
            onInput: y[1] || (y[1] = (z) => g.$emit("search-input"))
          }, null, 40, Ut), [
            [Q, r.value]
          ])
        ]),
        O(Ue, {
          modelValue: p.value,
          "onUpdate:modelValue": y[2] || (y[2] = (z) => p.value = z),
          options: b.value,
          placeholder: n(a)("admin.channelMonitor.allProviders"),
          class: "w-44",
          onChange: y[3] || (y[3] = (z) => g.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"]),
        O(Ue, {
          modelValue: k.value,
          "onUpdate:modelValue": y[4] || (y[4] = (z) => k.value = z),
          options: m.value,
          placeholder: n(a)("admin.channelMonitor.enabledFilter"),
          class: "w-40",
          onChange: y[5] || (y[5] = (z) => g.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"])
      ]),
      e("div", It, [
        e("button", {
          onClick: y[6] || (y[6] = (z) => g.$emit("reload")),
          disabled: s.loading,
          class: "btn btn-secondary",
          title: n(a)("common.refresh")
        }, [
          O(se, {
            name: "refresh",
            size: "md",
            class: K(s.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, Nt),
        e("button", {
          onClick: y[7] || (y[7] = (z) => g.$emit("manage-templates")),
          class: "btn btn-secondary",
          title: n(a)("admin.channelMonitor.template.manageButton")
        }, [
          O(se, {
            name: "cog",
            size: "md",
            class: "mr-2"
          }),
          G(" " + o(n(a)("admin.channelMonitor.template.manageButton")), 1)
        ], 8, Dt),
        e("button", {
          onClick: y[8] || (y[8] = (z) => g.$emit("create")),
          class: "btn btn-primary"
        }, [
          O(se, {
            name: "plus",
            size: "md",
            class: "mr-2"
          }),
          G(" " + o(n(a)("admin.channelMonitor.createButton")), 1)
        ])
      ])
    ]));
  }
});
function Bt(s) {
  return s ? s.length <= 12 ? `${s.slice(0, 4)}***` : `${s.slice(0, 6)}...${s.slice(-4)}` : "";
}
const Ft = { class: "space-y-3" }, jt = { class: "text-xs text-gray-500 dark:text-gray-400" }, qt = { class: "relative" }, Kt = ["placeholder"], Lt = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-500"
}, Gt = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-500"
}, Jt = {
  key: 2,
  class: "max-h-96 overflow-auto rounded-lg border border-gray-200 dark:border-dark-600"
}, Qt = { class: "w-full text-sm" }, Yt = { class: "bg-gray-50 dark:bg-dark-800 sticky top-0 z-10" }, Zt = { class: "text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" }, Xt = { class: "px-3 py-2" }, Wt = { class: "px-3 py-2" }, en = { class: "px-3 py-2" }, tn = { class: "divide-y divide-gray-200 dark:divide-dark-700" }, nn = ["onClick"], an = { class: "px-3 py-2 font-medium text-gray-900 dark:text-white" }, on = { class: "px-3 py-2 font-mono text-xs text-gray-500 dark:text-gray-400" }, rn = { class: "px-3 py-2" }, ln = {
  key: 1,
  class: "text-xs text-gray-400"
}, sn = { class: "flex justify-end" }, dn = /* @__PURE__ */ ie({
  __name: "MonitorKeyPickerDialog",
  props: {
    show: { type: Boolean },
    loading: { type: Boolean },
    keys: {},
    provider: {},
    userGroupRates: { default: () => ({}) }
  },
  emits: ["close", "pick"],
  setup(s) {
    const r = s, { t: p } = de(), k = S("");
    pe(() => r.show, (b) => {
      b || (k.value = "");
    });
    const a = R(() => {
      const b = k.value.trim().toLowerCase();
      return r.keys.filter((m) => {
        var g, y;
        return ((g = m.group) == null ? void 0 : g.platform) !== r.provider ? !1 : b ? m.name.toLowerCase().includes(b) || m.key.toLowerCase().includes(b) || (((y = m.group) == null ? void 0 : y.name) || "").toLowerCase().includes(b) : !0;
      });
    });
    return (b, m) => (l(), xe(Pe, {
      show: s.show,
      title: n(p)("admin.channelMonitor.form.selectKeyTitle"),
      width: "wide",
      onClose: m[2] || (m[2] = (g) => b.$emit("close"))
    }, {
      footer: j(() => [
        e("div", sn, [
          e("button", {
            onClick: m[1] || (m[1] = (g) => b.$emit("close")),
            class: "btn btn-secondary"
          }, o(n(p)("common.cancel")), 1)
        ])
      ]),
      default: j(() => [
        e("div", Ft, [
          e("p", jt, o(n(p)("admin.channelMonitor.form.selectKeyHint")), 1),
          e("div", qt, [
            J(e("input", {
              "onUpdate:modelValue": m[0] || (m[0] = (g) => k.value = g),
              type: "text",
              class: "input pl-9",
              placeholder: n(p)("keys.searchPlaceholder")
            }, null, 8, Kt), [
              [Q, k.value]
            ]),
            m[3] || (m[3] = e("svg", {
              class: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              e("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }),
              e("path", { d: "m21 21-4.35-4.35" })
            ], -1))
          ]),
          s.loading ? (l(), i("div", Lt, o(n(p)("common.loading")), 1)) : a.value.length === 0 ? (l(), i("div", Gt, o(n(p)("admin.channelMonitor.form.noActiveKey")), 1)) : (l(), i("div", Jt, [
            e("table", Qt, [
              e("thead", Yt, [
                e("tr", Zt, [
                  e("th", Xt, o(n(p)("common.name")), 1),
                  e("th", Wt, o(n(p)("keys.apiKey")), 1),
                  e("th", en, o(n(p)("keys.group")), 1)
                ])
              ]),
              e("tbody", tn, [
                (l(!0), i(q, null, W(a.value, (g) => (l(), i("tr", {
                  key: g.id,
                  class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700",
                  onClick: (y) => b.$emit("pick", g)
                }, [
                  e("td", an, o(g.name), 1),
                  e("td", on, o(n(Bt)(g.key)), 1),
                  e("td", rn, [
                    g.group ? (l(), xe(Mt, {
                      key: 0,
                      name: g.group.name,
                      platform: g.group.platform,
                      "subscription-type": g.group.subscription_type,
                      "rate-multiplier": g.group.rate_multiplier,
                      "user-rate-multiplier": s.userGroupRates[g.group.id]
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "user-rate-multiplier"])) : (l(), i("span", ln, "—"))
                  ])
                ], 8, nn))), 128))
              ])
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), te = "openai", ke = "anthropic", Ie = "gemini", be = "grok", Me = "antigravity", ze = "kimi", Ee = "zhipu", Se = "deepseek", Ke = "https://api.x.ai", De = "grok-4.5", cn = "https://api.moonshot.cn", un = "https://open.bigmodel.cn", mn = "https://api.deepseek.com", Ve = "probe", Re = "quota", pn = "quota_probe", ue = "chat_completions", ge = "responses", tt = [
  te,
  ke,
  Ie,
  be,
  Me,
  ze,
  Ee,
  Se
], hn = "operational", vn = "degraded", gn = "failed", yn = "error", bn = 60, _n = { class: "space-y-4" }, fn = { class: "input-label" }, xn = { class: "space-y-1.5" }, kn = ["onUpdate:modelValue", "placeholder"], Mn = ["onUpdate:modelValue", "placeholder"], wn = ["title", "onClick"], $n = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Cn = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, Vn = { class: "input-label" }, zn = { class: "grid grid-cols-3 gap-3" }, En = ["onClick"], Sn = { class: "mt-1 text-xs text-gray-400" }, Pn = { key: 0 }, On = { class: "mb-1 flex items-center justify-between" }, An = { class: "input-label !mb-0" }, Rn = ["disabled"], Tn = ["placeholder"], Un = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, In = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, nt = /* @__PURE__ */ ie({
  __name: "MonitorAdvancedRequestConfig",
  props: {
    provider: {},
    apiMode: {},
    extraHeaders: {},
    bodyOverrideMode: {},
    bodyOverride: {}
  },
  emits: ["update:extraHeaders", "update:bodyOverrideMode", "update:bodyOverride"],
  setup(s, { emit: r }) {
    const p = s, k = r, { t: a } = de(), b = S(g(p.extraHeaders)), m = S("");
    pe(
      () => p.extraHeaders,
      ($) => {
        z(y(b.value), $) || (b.value = g($)), m.value = "";
      }
    );
    function g($) {
      const M = Object.entries($ || {});
      return M.length === 0 ? [{ name: "", value: "" }] : M.map(([D, L]) => ({ name: D, value: L }));
    }
    function y($) {
      const M = {};
      for (const D of $) {
        const L = D.name.trim();
        L !== "" && (M[L] = D.value);
      }
      return M;
    }
    function z($, M) {
      const D = Object.keys($), L = Object.keys(M || {});
      if (D.length !== L.length) return !1;
      for (const oe of D)
        if ($[oe] !== M[oe]) return !1;
      return !0;
    }
    function B() {
      for (const $ of b.value) {
        const M = $.name.trim();
        if (M !== "" && (M.includes(":") || /\s/.test(M))) {
          m.value = a("admin.channelMonitor.advanced.headerNameInvalid", { name: M });
          return;
        }
      }
      m.value = "", k("update:extraHeaders", y(b.value));
    }
    function w() {
      b.value.push({ name: "", value: "" });
    }
    function H($) {
      b.value.splice($, 1), b.value.length === 0 && b.value.push({ name: "", value: "" }), B();
    }
    const A = S(U(p.bodyOverride)), t = S("");
    pe(
      () => p.bodyOverride,
      ($) => {
        A.value = U($), t.value = "";
      }
    );
    function d() {
      if (p.bodyOverrideMode === "off")
        return;
      const $ = A.value.trim();
      if ($ === "") {
        k("update:bodyOverride", null), t.value = "";
        return;
      }
      try {
        const M = JSON.parse($);
        if (M === null || typeof M != "object" || Array.isArray(M)) {
          t.value = a("admin.channelMonitor.advanced.bodyJsonObjectError");
          return;
        }
        k("update:bodyOverride", M), t.value = "";
      } catch (M) {
        t.value = a("admin.channelMonitor.advanced.bodyJsonError") + ": " + (M instanceof Error ? M.message : String(M));
      }
    }
    function f() {
      const $ = A.value.trim();
      if ($ !== "")
        try {
          const M = JSON.parse($);
          A.value = JSON.stringify(M, null, 2), t.value = "", M && typeof M == "object" && !Array.isArray(M) && k("update:bodyOverride", M);
        } catch (M) {
          t.value = a("admin.channelMonitor.advanced.bodyJsonError") + ": " + (M instanceof Error ? M.message : String(M));
        }
    }
    function U($) {
      return !$ || Object.keys($).length === 0 ? "" : JSON.stringify($, null, 2);
    }
    function T($) {
      k("update:bodyOverrideMode", $), $ === "off" && k("update:bodyOverride", null);
    }
    const Y = R(() => [
      { value: "off", label: a("admin.channelMonitor.advanced.bodyModeOff") },
      { value: "merge", label: a("admin.channelMonitor.advanced.bodyModeMerge") },
      { value: "replace", label: a("admin.channelMonitor.advanced.bodyModeReplace") }
    ]);
    function ee($) {
      return p.bodyOverrideMode === $ ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300 dark:border-primary-400" : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    const ae = R(() => {
      switch (p.bodyOverrideMode) {
        case "merge":
          return a("admin.channelMonitor.advanced.bodyModeHintMerge");
        case "replace":
          return a("admin.channelMonitor.advanced.bodyModeHintReplace");
        default:
          return a("admin.channelMonitor.advanced.bodyModeHintOff");
      }
    }), he = R(() => p.provider === te && p.apiMode === ge ? p.bodyOverrideMode === "merge" ? `{
  "max_output_tokens": 20
}` : `{
  "model": "gpt-4o-mini",
  "instructions": "You are a health check endpoint. Reply briefly.",
  "input": "Reply with exactly: ok",
  "max_output_tokens": 20,
  "stream": false
}` : p.provider === te || p.provider === be ? p.bodyOverrideMode === "merge" ? `{
  "max_tokens": 20
}` : `{
  "model": "${p.provider === be ? De : "gpt-4o-mini"}",
  "messages": [{"role":"user","content":"Reply with exactly: ok"}],
  "max_tokens": 20,
  "stream": false
}` : p.bodyOverrideMode === "merge" ? `{
  "system": "You are Claude Code..."
}` : `{
  "model": "claude-x",
  "messages": [{"role":"user","content":"hi"}],
  "max_tokens": 10
}`);
    return ($, M) => (l(), i("div", _n, [
      e("div", null, [
        e("label", fn, o(n(a)("admin.channelMonitor.advanced.headers")), 1),
        e("div", xn, [
          (l(!0), i(q, null, W(b.value, (D, L) => (l(), i("div", {
            key: L,
            class: "flex items-center gap-2"
          }, [
            J(e("input", {
              "onUpdate:modelValue": (oe) => D.name = oe,
              type: "text",
              spellcheck: "false",
              placeholder: n(a)("admin.channelMonitor.advanced.headerNamePlaceholder"),
              class: "input w-52 flex-none font-mono text-xs",
              onBlur: B
            }, null, 40, kn), [
              [Q, D.name]
            ]),
            J(e("input", {
              "onUpdate:modelValue": (oe) => D.value = oe,
              type: "text",
              spellcheck: "false",
              placeholder: n(a)("admin.channelMonitor.advanced.headerValuePlaceholder"),
              class: "input flex-1 font-mono text-xs",
              onBlur: B
            }, null, 40, Mn), [
              [Q, D.value]
            ]),
            e("button", {
              type: "button",
              class: "flex-none rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400",
              title: n(a)("common.delete"),
              onClick: (oe) => H(L)
            }, [...M[1] || (M[1] = [
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
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, wn)
          ]))), 128)),
          e("button", {
            type: "button",
            class: "inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-500 hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
            onClick: w
          }, [
            M[2] || (M[2] = e("svg", {
              class: "h-3.5 w-3.5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 4v16m8-8H4"
              })
            ], -1)),
            G(" " + o(n(a)("admin.channelMonitor.advanced.headerAddRow")), 1)
          ])
        ]),
        m.value ? (l(), i("p", $n, o(m.value), 1)) : (l(), i("p", Cn, o(n(a)("admin.channelMonitor.advanced.headersHint")), 1))
      ]),
      e("div", null, [
        e("label", Vn, o(n(a)("admin.channelMonitor.advanced.bodyMode")), 1),
        e("div", zn, [
          (l(!0), i(q, null, W(Y.value, (D) => (l(), i("button", {
            key: D.value,
            type: "button",
            class: K(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", ee(D.value)]),
            onClick: (L) => T(D.value)
          }, o(D.label), 11, En))), 128))
        ]),
        e("p", Sn, o(ae.value), 1)
      ]),
      s.bodyOverrideMode !== "off" ? (l(), i("div", Pn, [
        e("div", On, [
          e("label", An, o(n(a)("admin.channelMonitor.advanced.bodyJson")), 1),
          e("button", {
            type: "button",
            class: "text-xs text-primary-600 hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline dark:text-primary-400",
            disabled: !A.value.trim(),
            onClick: f
          }, o(n(a)("admin.channelMonitor.advanced.bodyJsonFormat")), 9, Rn)
        ]),
        J(e("textarea", {
          "onUpdate:modelValue": M[0] || (M[0] = (D) => A.value = D),
          rows: "10",
          placeholder: he.value,
          class: "input font-mono text-xs",
          style: { "white-space": "pre", "overflow-wrap": "normal", "overflow-x": "auto" },
          spellcheck: "false",
          onBlur: d
        }, null, 40, Tn), [
          [Q, A.value]
        ]),
        t.value ? (l(), i("p", Un, o(t.value), 1)) : (l(), i("p", In, o(n(a)("admin.channelMonitor.advanced.bodyJsonHint")), 1))
      ])) : I("", !0)
    ]));
  }
}), Nn = ["width", "height"], Dn = ["d"], Hn = /* @__PURE__ */ ie({
  __name: "ProviderIcon",
  props: {
    provider: {},
    size: { default: 20 }
  },
  setup(s) {
    const r = {
      openai: {
        paths: [
          "M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z"
        ]
      },
      anthropic: {
        paths: [
          "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
        ]
      },
      gemini: {
        paths: [
          "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z"
        ]
      },
      grok: {
        paths: [
          "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
        ]
      },
      // antigravity / kimi / zhipu / deepseek 的官方 logo mark 搬自
      // src/components/common/PlatformIcon.vue，保持同步。
      antigravity: {
        paths: [
          "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        ]
      },
      kimi: {
        paths: [
          "M21.765.351C22.998.351 24 1.353 24 2.586S22.998 4.82 21.765 4.82h-1.974c-.15 0-.26-.12-.26-.26V2.586A2.237 2.237 0 0 1 21.765.35M9.41 13.388l8.447-8.377c.16-.16.07-.471-.14-.471h-4.55s-.1.02-.14.06l-9.099 9.029c-.14.14-.35.02-.35-.21V4.81c0-.15-.1-.27-.221-.27H.22c-.12 0-.22.12-.22.27v18.57c0 .15.1.27.22.27h3.137c.12 0 .22-.12.22-.27v-3.79c0-.08.03-.16.08-.21l2.826-2.796c.07-.07.16-.08.241-.03l7.546 5.551a8.9 8.9 0 0 0 4.018 1.493c.12.01.23-.11.23-.27V19.76c0-.14-.08-.25-.19-.26a5.8 5.8 0 0 1-2.355-.942l-6.533-4.73c-.14-.09-.15-.32-.03-.441"
        ]
      },
      zhipu: {
        paths: [
          "M11.991 23.503a.24.24 0 0 0-.244.248a.24.24 0 0 0 .244.249a.24.24 0 0 0 .245-.249a.24.24 0 0 0-.22-.247zM9.671 5.365a1.697 1.697 0 0 1 1.099 2.132l-.071.172l-.016.04l-.018.054c-.07.16-.104.32-.104.498c-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523c-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368c0 .124.018.23.053.337c.209.373.54.658.96.8c.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711c.854.284 1.378 1.226 1.099 2.167a1.66 1.66 0 0 1-2.077 1.102a1.7 1.7 0 0 1-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 0 0-1.954.746a1.66 1.66 0 0 1-1.065.764a1.677 1.677 0 0 1-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.5 1.5 0 0 1 .296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.3 1.3 0 0 0-.227-.693a2.5 2.5 0 0 1-.366-1.403a2.4 2.4 0 0 1 .366-1.208c.14-.195.21-.444.227-.693c.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.4 1.4 0 0 1-.299-.07l-.05-.019a1.7 1.7 0 0 1-1.047-2.114a1.68 1.68 0 0 1 2.094-1.101m-5.575 10.11c.26-.264.639-.367.994-.27s.633.379.728.74c.095.362-.007.748-.267 1.013c-.402.41-1.053.41-1.455 0a1.06 1.06 0 0 1 0-1.482zm14.845-.294c.359-.09.738.024.992.297c.254.274.344.665.237 1.025s-.396.634-.756.718c-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 0 1 .757-1.26zm-.064-4.39c.314.32.49.753.49 1.206s-.176.886-.49 1.206c-.315.32-.74.5-1.185.5c-.444 0-.87-.18-1.184-.5a1.727 1.727 0 0 1 0-2.412a1.654 1.654 0 0 1 2.369 0m-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 0 1-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 0 1 1.33-1.038a1.66 1.66 0 0 1 1.547.652m11.545-4.221c.368 0 .708.2.892.524s.184.724 0 1.048a1.03 1.03 0 0 1-.892.524a1.04 1.04 0 0 1-1.03-1.048a1.04 1.04 0 0 1 1.03-1.048m-14.358 0c.368 0 .707.2.891.524s.184.724 0 1.048a1.03 1.03 0 0 1-.891.524a1.04 1.04 0 0 1-1.03-1.048c0-.579.461-1.048 1.03-1.048m10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705s-1.674-.763-1.674-1.705s.75-1.706 1.674-1.706m-2.626-.684c.362-.082.653-.356.761-.718a1.06 1.06 0 0 0-.238-1.028a1.02 1.02 0 0 0-.996-.294c-.547.14-.881.7-.752 1.257c.13.558.675.907 1.225.783m0 16.876c.359-.087.644-.36.75-.72a1.06 1.06 0 0 0-.237-1.019a1.02 1.02 0 0 0-.985-.301a1.04 1.04 0 0 0-.762.717c-.108.361-.017.754.239 1.028c.245.263.606.377.953.305zM17.19 3.5a.63.63 0 0 0 .628-.64a.63.63 0 0 0-.628-.64a.63.63 0 0 0-.628.64c0 .355.28.64.628.64m-10.38 0a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64a.63.63 0 0 0-.628.64c0 .355.279.64.628.64m-5.182 7.852a.63.63 0 0 0-.628.64c0 .354.28.639.628.639a.63.63 0 0 0 .627-.606l.001-.034a.62.62 0 0 0-.628-.64zm5.182 9.13a.63.63 0 0 0-.628.64c0 .355.279.64.628.64a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64m10.38.018a.63.63 0 0 0-.628.64c0 .355.28.64.628.64a.63.63 0 0 0 .628-.64a.63.63 0 0 0-.628-.64m5.182-9.148a.63.63 0 0 0-.628.64c0 .354.279.639.628.639a.63.63 0 0 0 .628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 0 0 .244-.249a.24.24 0 0 0-.244-.249a.24.24 0 0 0-.244.249c0 .142.122.249.244.249M11.991.497a.24.24 0 0 0 .245-.248A.24.24 0 0 0 11.99 0a.24.24 0 0 0-.244.249c0 .133.108.236.223.247zM2.011 6.36a.24.24 0 0 0 .245-.249a.24.24 0 0 0-.244-.249a.24.24 0 0 0-.244.249a.24.24 0 0 0 .244.249zm0 11.263a.24.24 0 0 0-.243.248a.24.24 0 0 0 .244.249a.24.24 0 0 0 .244-.249a.25.25 0 0 0-.244-.248zm19.995-.018a.24.24 0 0 0-.245.248a.24.24 0 0 0 .245.25a.24.24 0 0 0 .244-.25a.25.25 0 0 0-.244-.248z"
        ]
      },
      deepseek: {
        paths: [
          "M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136a9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287a.3.3 0 0 1 .113.074a.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078a.253.253 0 0 1-.114-.358a1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45"
        ]
      }
    }, p = s, k = R(() => {
      const b = p.provider;
      return r[b] ?? null;
    }), a = R(
      () => (p.provider || "?").charAt(0).toUpperCase()
    );
    return (b, m) => k.value ? (l(), i("svg", {
      key: 0,
      width: s.size,
      height: s.size,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      "fill-rule": "evenodd",
      "aria-hidden": "true"
    }, [
      (l(!0), i(q, null, W(k.value.paths, (g, y) => (l(), i("path", {
        key: y,
        d: g
      }, null, 8, Dn))), 128))
    ], 8, Nn)) : (l(), i("span", {
      key: 1,
      class: "inline-flex items-center justify-center font-bold text-gray-500",
      style: Je({ width: `${s.size}px`, height: `${s.size}px`, fontSize: `${Math.round(s.size * 0.5)}px` })
    }, o(a.value), 5));
  }
}), Le = "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-300";
function Oe() {
  const { t: s } = de();
  function r(w) {
    return s(w ? `monitorCommon.status.${w}` : "monitorCommon.status.unknown");
  }
  function p(w) {
    switch (w) {
      case hn:
        return "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
      case vn:
        return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
      case gn:
        return "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300";
      case yn:
      default:
        return Le;
    }
  }
  function k(w) {
    return tt.includes(w) ? s(`monitorCommon.providers.${w}`) : w || "-";
  }
  function a(w) {
    return w === "probe" || w === "quota" || w === "quota_probe" ? s(`monitorCommon.checkMode.${w}`) : w || "-";
  }
  function b(w) {
    switch (w) {
      case te:
        return "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
      case ke:
        return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
      case Ie:
        return "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300";
      case be:
        return "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/15 dark:text-zinc-300";
      // 配色与 utils/platformColors.ts 的平台色对齐：antigravity=purple /
      // kimi=pink / zhipu=indigo / deepseek=teal。
      case Me:
        return "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300";
      case ze:
        return "bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300";
      case Ee:
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300";
      case Se:
        return "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300";
      default:
        return Le;
    }
  }
  function m(w, H) {
    switch (w) {
      case te:
        return H ? "border-zo-signal-500 bg-zo-signal-50 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300 dark:border-zo-signal-400" : "border-gray-200 bg-white text-gray-600 hover:border-zo-signal-300 hover:text-zo-signal-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-zo-signal-500/50";
      case ke:
        return H ? "border-zo-alert-500 bg-zo-alert-50 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300 dark:border-zo-alert-400" : "border-gray-200 bg-white text-gray-600 hover:border-zo-alert-300 hover:text-zo-alert-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-zo-alert-500/50";
      case Ie:
        return H ? "border-sky-500 bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-400" : "border-gray-200 bg-white text-gray-600 hover:border-sky-300 hover:text-sky-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-sky-500/50";
      case be:
        return H ? "border-zinc-500 bg-zinc-50 text-zinc-800 dark:bg-zinc-500/15 dark:text-zinc-200 dark:border-zinc-400" : "border-gray-200 bg-white text-gray-600 hover:border-zinc-400 hover:text-zinc-800 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-zinc-500/50";
      case Me:
        return H ? "border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300 dark:border-purple-400" : "border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-purple-500/50";
      case ze:
        return H ? "border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300 dark:border-pink-400" : "border-gray-200 bg-white text-gray-600 hover:border-pink-300 hover:text-pink-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-pink-500/50";
      case Ee:
        return H ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-400" : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-indigo-500/50";
      case Se:
        return H ? "border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300 dark:border-teal-400" : "border-gray-200 bg-white text-gray-600 hover:border-teal-300 hover:text-teal-700 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-teal-500/50";
      default:
        return H ? "border-gray-400 bg-gray-50 text-gray-700 dark:border-dark-500 dark:bg-dark-700 dark:text-gray-200" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
  }
  function g(w) {
    return w == null ? s("monitorCommon.latencyEmpty") : String(Math.round(w));
  }
  function y(w) {
    return w == null || Number.isNaN(w) ? "-" : `${w.toFixed(2)}%`;
  }
  function z(w) {
    return w.primary_status ? y(w.availability_7d) : "-";
  }
  function B(w) {
    if (!w) return s("monitorCommon.latencyEmpty");
    const H = Date.parse(w);
    if (Number.isNaN(H)) return s("monitorCommon.latencyEmpty");
    const A = Math.max(0, Math.floor((Date.now() - H) / 1e3));
    if (A < 60) return s("monitorCommon.relativeSecondsAgo", { n: A });
    const t = Math.floor(A / 60);
    if (t < 60) return s("monitorCommon.relativeMinutesAgo", { n: t });
    const d = Math.floor(t / 60);
    if (d < 24) return s("monitorCommon.relativeHoursAgo", { n: d });
    const f = Math.floor(d / 24);
    return s("monitorCommon.relativeDaysAgo", { n: f });
  }
  return {
    statusLabel: r,
    statusBadgeClass: p,
    providerLabel: k,
    checkModeLabel: a,
    providerBadgeClass: b,
    providerPickerClass: m,
    formatLatency: g,
    formatPercent: y,
    formatAvailability: z,
    formatRelativeTime: B
  };
}
const Bn = { class: "input-label" }, Fn = ["placeholder"], jn = { class: "input-label" }, qn = {
  class: "grid gap-3 sm:grid-cols-3",
  "data-testid": "monitor-check-mode"
}, Kn = ["data-testid", "aria-pressed", "disabled", "onClick"], Ln = { class: "block text-sm font-semibold" }, Gn = { class: "mt-0.5 block text-xs opacity-80" }, Jn = { class: "input-label" }, Qn = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Yn = ["data-testid", "aria-pressed", "onClick"], Zn = { key: 0 }, Xn = { class: "input-label" }, Wn = { "data-testid": "monitor-linked-account" }, ea = { class: "mt-1 text-xs text-gray-400" }, ta = {
  key: 0,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, na = {
  key: 1,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, aa = {
  key: 2,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, oa = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, ra = { class: "input-label" }, la = { class: "grid gap-3 sm:grid-cols-2" }, sa = ["aria-pressed", "onClick"], ia = { class: "block text-sm font-semibold" }, da = { class: "mt-0.5 block text-xs opacity-80" }, ca = { key: 2 }, ua = { class: "input-label" }, ma = { class: "flex gap-2" }, pa = ["placeholder"], ha = { key: 3 }, va = { class: "input-label" }, ga = {
  key: 0,
  class: "text-red-500"
}, ya = { class: "flex gap-2" }, ba = ["required", "placeholder"], _a = {
  key: 0,
  class: "mt-1 text-xs text-gray-400"
}, fa = { key: 4 }, xa = { class: "input-label" }, ka = ["placeholder"], Ma = { key: 5 }, wa = { class: "input-label" }, $a = { class: "input-label" }, Ca = ["placeholder"], Va = { class: "input-label" }, za = { class: "mt-1 text-xs text-gray-400" }, Ea = { class: "input-label" }, Sa = ["max"], Pa = { class: "mt-1 text-xs text-gray-400" }, Oa = { class: "flex items-center justify-between" }, Aa = { class: "input-label mb-0" }, Ra = {
  key: 6,
  class: "rounded-lg border border-gray-200 bg-gray-50/50 p-3 dark:border-dark-700 dark:bg-dark-900/30"
}, Ta = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, Ua = { class: "mt-1 text-xs text-gray-400" }, Ia = { class: "mt-4 space-y-4" }, Na = { class: "input-label" }, Da = { class: "mt-1 text-xs text-gray-400" }, Ha = { class: "flex justify-end gap-3" }, Ba = ["disabled"], Fa = /* @__PURE__ */ ie({
  __name: "MonitorFormDialog",
  props: {
    show: { type: Boolean },
    monitor: {}
  },
  emits: ["close", "saved"],
  setup(s, { emit: r }) {
    const p = s, k = r, { t: a } = de(), b = we(), { providerPickerClass: m } = Oe(), g = R(() => {
      var c;
      const u = (c = b.cachedPublicSettings) == null ? void 0 : c.channel_monitor_default_interval_seconds;
      return u && u > 0 ? u : bn;
    }), y = R(() => p.monitor), z = S(!1), B = S(!1), w = S(!1), H = S([]), A = S({}), t = $e({
      name: "",
      provider: ke,
      api_mode: ue,
      check_mode: Ve,
      account_id: null,
      endpoint: "",
      api_key: "",
      primary_model: "",
      extra_models: [],
      group_name: "",
      interval_seconds: g.value,
      jitter_seconds: 0,
      enabled: !0,
      template_id: null,
      extra_headers: {},
      body_override_mode: "off",
      body_override: null
    }), d = R(() => t.check_mode !== Ve), f = R(() => t.check_mode !== Re), U = R(() => Math.max(0, (t.interval_seconds || 0) - 15));
    let T = !1;
    const Y = S([]), ee = S(!1), ae = R(() => {
      const u = Y.value.filter((c) => c.provider !== t.provider ? !1 : t.provider !== te ? !0 : D(c.api_mode) === t.api_mode);
      return [
        { value: "", label: a("admin.channelMonitor.templateField.none") },
        ...u.map((c) => ({ value: String(c.id), label: oe(c) }))
      ];
    });
    async function he() {
      if (!(Y.value.length > 0)) {
        ee.value = !0;
        try {
          const { items: u } = await ne.channelMonitorTemplate.list();
          Y.value = u;
        } catch (u) {
          console.warn("load monitor templates failed", u);
        } finally {
          ee.value = !1;
        }
      }
    }
    const $ = R({
      get: () => t.template_id == null ? "" : String(t.template_id),
      set: (u) => {
        if (u === "") {
          t.template_id = null;
          return;
        }
        const c = Number(u);
        if (!Number.isFinite(c)) return;
        t.template_id = c;
        const v = Y.value.find((X) => X.id === c);
        v && (T = !0, t.api_mode = D(v.api_mode), t.template_id = c, t.extra_headers = { ...v.extra_headers || {} }, t.body_override_mode = v.body_override_mode, t.body_override = v.body_override ? { ...v.body_override } : null, T = !1);
      }
    }), M = R(() => [
      {
        value: ue,
        label: a("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: a("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ge,
        label: a("admin.channelMonitor.form.apiModeResponses"),
        hint: a("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    function D(u) {
      return u === ge ? ge : ue;
    }
    function L(u) {
      return t.api_mode === u ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function oe(u) {
      if (u.provider !== te) return u.name;
      const c = D(u.api_mode) === ge ? "admin.channelMonitor.form.apiModeResponses" : "admin.channelMonitor.form.apiModeChatCompletions";
      return `${u.name} · ${a(c)}`;
    }
    function Z() {
      t.template_id = null, t.extra_headers = {}, t.body_override_mode = "off", t.body_override = null;
    }
    const fe = R(() => Ze.map(({ value: u }) => ({
      value: u,
      label: a(`monitorCommon.providers.${u}`)
    }))), ye = {
      [ze]: cn,
      [Ee]: un,
      [Se]: mn
    }, E = R(() => [
      {
        value: Ve,
        label: a("admin.channelMonitor.form.checkModeProbe"),
        hint: a("admin.channelMonitor.form.checkModeProbeHint"),
        // antigravity 无探活 adapter，仅配额模式。
        disabled: t.provider === Me
      },
      {
        value: Re,
        label: a("admin.channelMonitor.form.checkModeQuota"),
        hint: a("admin.channelMonitor.form.checkModeQuotaHint"),
        disabled: !1
      },
      {
        value: pn,
        label: a("admin.channelMonitor.form.checkModeQuotaProbe"),
        hint: a("admin.channelMonitor.form.checkModeQuotaProbeHint"),
        // antigravity 无探活 adapter，只支持配额模式。
        disabled: t.provider === Me
      }
    ]);
    function x(u) {
      return t.check_mode === u ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function F(u) {
      var c;
      (c = E.value.find((v) => v.value === u)) != null && c.disabled || (t.check_mode = u, d.value || (t.account_id = null));
    }
    const re = S([]), C = S(!1), ce = S(""), me = S(!1), _ = S(null);
    let N = 0, h = null;
    const V = /* @__PURE__ */ new Set(), P = R(() => {
      const u = re.value.map((v) => ({
        value: String(v.id),
        label: `${v.name} (#${v.id})`
      })), c = _.value;
      return c && !re.value.some((v) => v.id === c.id) && u.unshift({ value: String(c.id), label: `${c.name} (#${c.id})` }), u;
    }), Ce = R({
      get: () => t.account_id == null ? "" : String(t.account_id),
      set: (u) => {
        if (u === "") {
          t.account_id = null, _.value = null, me.value = !1;
          return;
        }
        const c = Number(u);
        Number.isFinite(c) && (t.account_id = c, _.value = re.value.find((v) => v.id === c) ?? _.value);
      }
    });
    async function Be(u = "") {
      if (!d.value || !p.show) return;
      ce.value = u;
      const c = ++N;
      h == null || h.abort();
      const v = new AbortController();
      h = v, C.value = !0;
      try {
        const X = await ne.accounts.list(
          1,
          50,
          { platform: t.provider, ...u ? { search: u } : {} },
          { signal: v.signal }
        );
        if (c !== N) return;
        re.value = (X.items || []).map((ve) => ({ id: ve.id, name: ve.name })), await rt();
      } catch (X) {
        if (v.signal.aborted) return;
        console.warn("load linked accounts failed", X), u || (re.value = []);
      } finally {
        c === N && (C.value = !1);
      }
    }
    async function rt() {
      var c;
      const u = t.account_id;
      if (!(u == null || !d.value) && !(re.value.some((v) => v.id === u) || ((c = _.value) == null ? void 0 : c.id) === u) && !V.has(u)) {
        V.add(u);
        try {
          const v = await ne.accounts.getById(u);
          if (t.account_id !== u) return;
          if (String(v.platform) !== t.provider) {
            t.account_id = null, _.value = null, me.value = !0;
            return;
          }
          _.value = { id: v.id, name: v.name };
        } catch {
          t.account_id === u && (t.account_id = null, _.value = null, me.value = !0);
        }
      }
    }
    function lt(u) {
      Be(u);
    }
    pe(
      () => [p.show, t.provider, t.check_mode],
      ([u, c], v) => {
        const [X, ve] = v ?? [];
        if (!u) {
          h == null || h.abort();
          return;
        }
        (u !== X || c !== ve) && (V.clear(), me.value = !1, _.value = null), Be();
      },
      { immediate: !0 }
    );
    function st(u) {
      if (t.provider === u) return;
      const c = t.provider, v = c === be && t.endpoint === Ke, X = c === be && t.primary_model === De, ve = !!ye[c] && t.endpoint === ye[c];
      if (t.provider = u, t.account_id = null, _.value = null, me.value = !1, u === Me && t.check_mode !== Re && (t.check_mode = Re), u === be) {
        t.endpoint.trim() || (t.endpoint = Ke), t.primary_model.trim() || (t.primary_model = De);
        return;
      }
      (v || ve) && (t.endpoint = ""), X && (t.primary_model = "");
      const je = ye[u];
      je && !t.endpoint.trim() && (t.endpoint = je);
    }
    pe(() => t.provider, () => {
      T || (t.api_key = "", t.provider !== te && (t.api_mode = ue), Z());
    }, { flush: "sync" }), pe(() => t.api_mode, () => {
      T || t.provider === te && Z();
    }, { flush: "sync" });
    function it() {
      T = !0, t.name = "", t.provider = ke, t.api_mode = ue, t.check_mode = Ve, t.account_id = null, _.value = null, me.value = !1, t.endpoint = "", t.api_key = "", t.primary_model = "", t.extra_models = [], t.group_name = "", t.interval_seconds = g.value, t.jitter_seconds = 0, t.enabled = !0, t.template_id = null, t.extra_headers = {}, t.body_override_mode = "off", t.body_override = null, T = !1;
    }
    function dt(u) {
      T = !0, t.name = u.name, t.provider = u.provider, t.api_mode = D(u.api_mode), t.check_mode = u.check_mode || Ve, t.account_id = u.account_id ?? null, t.endpoint = u.endpoint, t.api_key = "", t.primary_model = u.primary_model, t.extra_models = [...u.extra_models || []], t.group_name = u.group_name || "", t.interval_seconds = u.interval_seconds || g.value, t.jitter_seconds = u.jitter_seconds || 0, t.enabled = u.enabled, t.template_id = u.template_id ?? null, t.extra_headers = { ...u.extra_headers || {} }, t.body_override_mode = u.body_override_mode || "off", t.body_override = u.body_override ? { ...u.body_override } : null, T = !1;
    }
    pe(
      () => [p.show, p.monitor],
      ([u, c]) => {
        u && (he(), c ? dt(c) : it());
      },
      { immediate: !0 }
    );
    function ct() {
      t.endpoint = window.location.origin;
    }
    async function ut() {
      if (B.value = !0, !(H.value.length > 0)) {
        w.value = !0;
        try {
          const [u, c] = await Promise.all([
            Et.list(1, 100, { status: "active" }),
            Ot.getUserGroupRates()
          ]), v = u.items || [], X = Date.now();
          H.value = v.filter((ve) => ve.status !== "active" ? !1 : ve.expires_at ? new Date(ve.expires_at).getTime() > X : !0), A.value = c;
        } catch (u) {
          b.showError(le(u, a("admin.channelMonitor.form.noActiveKey")));
        } finally {
          w.value = !1;
        }
      }
    }
    function mt(u) {
      t.api_key = u.key, B.value = !1;
    }
    function Fe() {
      return {
        name: t.name.trim(),
        provider: t.provider,
        api_mode: t.provider === te ? t.api_mode : ue,
        check_mode: t.check_mode,
        account_id: d.value ? t.account_id : null,
        endpoint: f.value ? t.endpoint.trim() : "",
        api_key: f.value ? t.api_key.trim() : "",
        primary_model: f.value ? t.primary_model.trim() : "quota",
        extra_models: f.value ? t.extra_models : [],
        group_name: t.group_name.trim(),
        enabled: t.enabled,
        interval_seconds: t.interval_seconds,
        jitter_seconds: t.jitter_seconds || 0,
        template_id: f.value ? t.template_id : null,
        extra_headers: t.extra_headers,
        body_override_mode: t.body_override_mode,
        body_override: t.body_override
      };
    }
    async function pt() {
      if (!z.value) {
        if (!t.name.trim()) {
          b.showError(a("admin.channelMonitor.nameRequired"));
          return;
        }
        if (d.value && t.account_id == null) {
          b.showError(a("admin.channelMonitor.linkedAccountRequired"));
          return;
        }
        if (f.value && !t.primary_model.trim()) {
          b.showError(a("admin.channelMonitor.primaryModelRequired"));
          return;
        }
        z.value = !0;
        try {
          const u = y.value;
          if (u) {
            const { api_key: c, ...v } = Fe(), X = { ...v };
            c && (X.api_key = c), f.value && t.template_id == null && (X.clear_template = !0, delete X.template_id), await ne.channelMonitor.update(u.id, X), b.showSuccess(a("admin.channelMonitor.updateSuccess"));
          } else
            await ne.channelMonitor.create(Fe()), b.showSuccess(a("admin.channelMonitor.createSuccess"));
          k("saved"), k("close");
        } catch (u) {
          b.showError(le(u, a("common.error")));
        } finally {
          z.value = !1;
        }
      }
    }
    return (u, c) => (l(), i(q, null, [
      O(Pe, {
        show: s.show,
        title: y.value ? n(a)("admin.channelMonitor.editTitle") : n(a)("admin.channelMonitor.createTitle"),
        width: "wide",
        onClose: c[15] || (c[15] = (v) => u.$emit("close"))
      }, {
        footer: j(() => [
          e("div", Ha, [
            e("button", {
              onClick: c[14] || (c[14] = (v) => u.$emit("close")),
              type: "button",
              class: "btn btn-secondary"
            }, o(n(a)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "channel-monitor-form",
              disabled: z.value,
              class: "btn btn-primary"
            }, o(z.value ? n(a)("common.submitting") : y.value ? n(a)("common.update") : n(a)("common.create")), 9, Ba)
          ])
        ]),
        default: j(() => [
          e("form", {
            id: "channel-monitor-form",
            onSubmit: Qe(pt, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Bn, [
                G(o(n(a)("admin.channelMonitor.form.name")) + " ", 1),
                c[17] || (c[17] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (v) => t.name = v),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(a)("admin.channelMonitor.form.namePlaceholder")
              }, null, 8, Fn), [
                [Q, t.name]
              ])
            ]),
            e("div", null, [
              e("label", jn, o(n(a)("admin.channelMonitor.form.checkMode")), 1),
              e("div", qn, [
                (l(!0), i(q, null, W(E.value, (v) => (l(), i("button", {
                  key: v.value,
                  type: "button",
                  "data-testid": `monitor-check-mode-${v.value}`,
                  "aria-pressed": t.check_mode === v.value,
                  disabled: v.disabled,
                  class: K(["rounded-lg border-2 px-3 py-2 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50", x(v.value)]),
                  onClick: (X) => F(v.value)
                }, [
                  e("span", Ln, o(v.label), 1),
                  e("span", Gn, o(v.hint), 1)
                ], 10, Kn))), 128))
              ])
            ]),
            e("div", null, [
              e("label", Jn, [
                G(o(n(a)("admin.channelMonitor.form.provider")) + " ", 1),
                c[18] || (c[18] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Qn, [
                (l(!0), i(q, null, W(fe.value, (v) => (l(), i("button", {
                  key: v.value,
                  type: "button",
                  "data-testid": `monitor-provider-${v.value}`,
                  "aria-pressed": t.provider === v.value,
                  class: K(["flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors", n(m)(v.value, t.provider === v.value)]),
                  onClick: (X) => st(v.value)
                }, [
                  O(Hn, {
                    provider: v.value,
                    size: 18
                  }, null, 8, ["provider"]),
                  e("span", null, o(v.label), 1)
                ], 10, Yn))), 128))
              ])
            ]),
            d.value ? (l(), i("div", Zn, [
              e("label", Xn, [
                G(o(n(a)("admin.channelMonitor.form.linkedAccount")) + " ", 1),
                c[19] || (c[19] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Wn, [
                O(Ue, {
                  modelValue: Ce.value,
                  "onUpdate:modelValue": c[1] || (c[1] = (v) => Ce.value = v),
                  options: P.value,
                  placeholder: n(a)("admin.channelMonitor.form.linkedAccountPlaceholder"),
                  remote: "",
                  loading: C.value,
                  onSearch: lt
                }, null, 8, ["modelValue", "options", "placeholder", "loading"])
              ]),
              e("p", ea, o(n(a)("admin.channelMonitor.form.linkedAccountHint")), 1),
              t.provider === n(te) ? (l(), i("p", ta, o(n(a)("admin.channelMonitor.form.openAIQuotaProbeHint")), 1)) : I("", !0),
              me.value ? (l(), i("p", na, o(n(a)("admin.channelMonitor.form.linkedAccountMissing")), 1)) : I("", !0),
              P.value.length === 0 && !C.value && !ce.value ? (l(), i("p", aa, o(n(a)("admin.channelMonitor.form.linkedAccountEmpty")), 1)) : I("", !0)
            ])) : I("", !0),
            t.provider === n(te) && f.value ? (l(), i("div", oa, [
              e("label", ra, o(n(a)("admin.channelMonitor.form.apiMode")), 1),
              e("div", la, [
                (l(!0), i(q, null, W(M.value, (v) => (l(), i("button", {
                  key: v.value,
                  type: "button",
                  "aria-pressed": t.api_mode === v.value,
                  class: K(["rounded-lg border-2 px-3 py-2 text-left transition-colors", L(v.value)]),
                  onClick: (X) => t.api_mode = v.value
                }, [
                  e("span", ia, o(v.label), 1),
                  e("span", da, o(v.hint), 1)
                ], 10, sa))), 128))
              ])
            ])) : I("", !0),
            f.value ? (l(), i("div", ca, [
              e("label", ua, [
                G(o(n(a)("admin.channelMonitor.form.endpoint")) + " ", 1),
                c[20] || (c[20] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", ma, [
                J(e("input", {
                  "onUpdate:modelValue": c[2] || (c[2] = (v) => t.endpoint = v),
                  "data-testid": "monitor-endpoint",
                  type: "text",
                  required: "",
                  class: "input flex-1",
                  placeholder: n(a)("admin.channelMonitor.form.endpointPlaceholder")
                }, null, 8, pa), [
                  [Q, t.endpoint]
                ]),
                e("button", {
                  type: "button",
                  onClick: ct,
                  class: "btn btn-secondary whitespace-nowrap"
                }, o(n(a)("admin.channelMonitor.form.useCurrentDomain")), 1)
              ])
            ])) : I("", !0),
            f.value ? (l(), i("div", ha, [
              e("label", va, [
                G(o(n(a)("admin.channelMonitor.form.apiKey")), 1),
                y.value ? I("", !0) : (l(), i("span", ga, " *"))
              ]),
              e("div", ya, [
                J(e("input", {
                  "onUpdate:modelValue": c[3] || (c[3] = (v) => t.api_key = v),
                  type: "password",
                  required: !y.value,
                  class: "input flex-1",
                  placeholder: y.value ? n(a)("admin.channelMonitor.form.apiKeyEditPlaceholder") : n(a)("admin.channelMonitor.form.apiKeyPlaceholder")
                }, null, 8, ba), [
                  [Q, t.api_key]
                ]),
                e("button", {
                  type: "button",
                  onClick: ut,
                  class: "btn btn-secondary whitespace-nowrap"
                }, o(n(a)("admin.channelMonitor.form.useMyKey")), 1)
              ]),
              y.value && y.value.api_key_masked ? (l(), i("p", _a, o(y.value.api_key_masked), 1)) : I("", !0)
            ])) : I("", !0),
            f.value ? (l(), i("div", fa, [
              e("label", xa, [
                G(o(n(a)("admin.channelMonitor.form.primaryModel")) + " ", 1),
                c[21] || (c[21] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": c[4] || (c[4] = (v) => t.primary_model = v),
                "data-testid": "monitor-primary-model",
                type: "text",
                required: "",
                class: K(["input font-medium", n(xt)(t.provider)]),
                placeholder: n(a)("admin.channelMonitor.form.primaryModelPlaceholder")
              }, null, 10, ka), [
                [Q, t.primary_model]
              ])
            ])) : I("", !0),
            f.value ? (l(), i("div", Ma, [
              e("label", wa, o(n(a)("admin.channelMonitor.form.extraModels")), 1),
              O(kt, {
                models: t.extra_models,
                platform: t.provider,
                placeholder: n(a)("admin.channelMonitor.form.extraModelsPlaceholder"),
                "onUpdate:models": c[5] || (c[5] = (v) => t.extra_models = v)
              }, null, 8, ["models", "platform", "placeholder"])
            ])) : I("", !0),
            e("div", null, [
              e("label", $a, o(n(a)("admin.channelMonitor.form.groupName")), 1),
              J(e("input", {
                "onUpdate:modelValue": c[6] || (c[6] = (v) => t.group_name = v),
                type: "text",
                class: "input",
                placeholder: n(a)("admin.channelMonitor.form.groupNamePlaceholder")
              }, null, 8, Ca), [
                [Q, t.group_name]
              ])
            ]),
            e("div", null, [
              e("label", Va, [
                G(o(n(a)("admin.channelMonitor.form.intervalSeconds")) + " ", 1),
                c[22] || (c[22] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": c[7] || (c[7] = (v) => t.interval_seconds = v),
                type: "number",
                min: "15",
                max: "3600",
                required: "",
                class: "input"
              }, null, 512), [
                [
                  Q,
                  t.interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", za, o(n(a)("admin.channelMonitor.form.intervalSecondsHint")), 1)
            ]),
            e("div", null, [
              e("label", Ea, o(n(a)("admin.channelMonitor.form.jitterSeconds")), 1),
              J(e("input", {
                "onUpdate:modelValue": c[8] || (c[8] = (v) => t.jitter_seconds = v),
                type: "number",
                min: "0",
                max: U.value,
                class: "input"
              }, null, 8, Sa), [
                [
                  Q,
                  t.jitter_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Pa, o(n(a)("admin.channelMonitor.form.jitterSecondsHint")), 1)
            ]),
            e("div", Oa, [
              e("label", Aa, o(n(a)("admin.channelMonitor.form.enabled")), 1),
              O(Te, {
                modelValue: t.enabled,
                "onUpdate:modelValue": c[9] || (c[9] = (v) => t.enabled = v)
              }, null, 8, ["modelValue"])
            ]),
            f.value ? (l(), i("details", Ra, [
              e("summary", Ta, o(n(a)("admin.channelMonitor.advanced.section")), 1),
              e("p", Ua, o(n(a)("admin.channelMonitor.advanced.sectionHint")), 1),
              e("div", Ia, [
                e("div", null, [
                  e("label", Na, o(n(a)("admin.channelMonitor.templateField.label")), 1),
                  O(Ue, {
                    modelValue: $.value,
                    "onUpdate:modelValue": c[10] || (c[10] = (v) => $.value = v),
                    options: ae.value,
                    placeholder: n(a)("admin.channelMonitor.templateField.placeholder")
                  }, null, 8, ["modelValue", "options", "placeholder"]),
                  e("p", Da, o(n(a)("admin.channelMonitor.templateField.applyHint")), 1)
                ]),
                O(nt, {
                  provider: t.provider,
                  "api-mode": t.api_mode,
                  "extra-headers": t.extra_headers,
                  "body-override-mode": t.body_override_mode,
                  "body-override": t.body_override,
                  "onUpdate:extraHeaders": c[11] || (c[11] = (v) => t.extra_headers = v),
                  "onUpdate:bodyOverrideMode": c[12] || (c[12] = (v) => t.body_override_mode = v),
                  "onUpdate:bodyOverride": c[13] || (c[13] = (v) => t.body_override = v)
                }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
              ])
            ])) : I("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      O(dn, {
        show: B.value,
        loading: w.value,
        keys: H.value,
        provider: t.provider,
        "user-group-rates": A.value,
        onClose: c[16] || (c[16] = (v) => B.value = !1),
        onPick: mt
      }, null, 8, ["show", "loading", "keys", "provider", "user-group-rates"])
    ], 64));
  }
}), ja = { class: "mb-3 text-sm text-gray-600 dark:text-gray-400" }, qa = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400"
}, Ka = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-400"
}, La = { key: 2 }, Ga = { class: "mb-2 flex items-center gap-3 text-xs" }, Ja = { class: "ml-auto text-gray-500 dark:text-gray-400" }, Qa = { class: "max-h-80 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-700" }, Ya = ["onClick"], Za = ["checked", "onClick"], Xa = { class: "font-medium text-gray-900 dark:text-white" }, Wa = { class: "text-xs text-gray-400" }, eo = {
  key: 0,
  class: "text-xs text-gray-400"
}, to = {
  key: 1,
  class: "ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-dark-700 dark:text-gray-400"
}, no = { class: "flex justify-end gap-2" }, ao = ["disabled"], oo = /* @__PURE__ */ ie({
  __name: "MonitorTemplateApplyPickerDialog",
  props: {
    show: { type: Boolean },
    templateId: {},
    templateName: {}
  },
  emits: ["close", "applied"],
  setup(s, { emit: r }) {
    const p = s, k = r, { t: a } = de(), b = we(), m = S(!1), g = S(!1), y = S([]), z = S([]), B = R(() => new Set(z.value));
    pe(
      () => [p.show, p.templateId],
      ([f, U]) => {
        !f || U == null || w(U);
      },
      { immediate: !0 }
    );
    async function w(f) {
      m.value = !0, y.value = [], z.value = [];
      try {
        const { items: U } = await ne.channelMonitorTemplate.listAssociatedMonitors(f);
        y.value = U, z.value = U.map((T) => T.id);
      } catch (U) {
        b.showError(le(U, a("common.error")));
      } finally {
        m.value = !1;
      }
    }
    function H(f) {
      const U = z.value.indexOf(f);
      U >= 0 ? z.value.splice(U, 1) : z.value.push(f);
    }
    function A() {
      z.value = y.value.map((f) => f.id);
    }
    function t() {
      z.value = [];
    }
    async function d() {
      if (!(p.templateId == null || z.value.length === 0 || g.value)) {
        g.value = !0;
        try {
          const { affected: f } = await ne.channelMonitorTemplate.apply(
            p.templateId,
            [...z.value]
          );
          b.showSuccess(a("admin.channelMonitor.template.applySuccess", { n: f })), k("applied", f), k("close");
        } catch (f) {
          b.showError(le(f, a("common.error")));
        } finally {
          g.value = !1;
        }
      }
    }
    return (f, U) => (l(), xe(Pe, {
      show: s.show,
      title: n(a)("admin.channelMonitor.template.applyPickerTitle", { name: s.templateName }),
      onClose: U[1] || (U[1] = (T) => f.$emit("close"))
    }, {
      footer: j(() => [
        e("div", no, [
          e("button", {
            class: "btn btn-secondary",
            onClick: U[0] || (U[0] = (T) => f.$emit("close"))
          }, o(n(a)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: g.value || z.value.length === 0,
            onClick: d
          }, o(g.value ? n(a)("common.submitting") : n(a)("admin.channelMonitor.template.applyPickerConfirm", { n: z.value.length })), 9, ao)
        ])
      ]),
      default: j(() => [
        e("p", ja, o(n(a)("admin.channelMonitor.template.applyPickerHint")), 1),
        m.value ? (l(), i("div", qa, o(n(a)("common.loading")), 1)) : y.value.length === 0 ? (l(), i("div", Ka, o(n(a)("admin.channelMonitor.template.applyPickerEmpty")), 1)) : (l(), i("div", La, [
          e("div", Ga, [
            e("button", {
              type: "button",
              class: "text-primary-600 hover:underline dark:text-primary-400",
              onClick: A
            }, o(n(a)("common.selectAll")), 1),
            e("button", {
              type: "button",
              class: "text-gray-500 hover:underline dark:text-gray-400",
              onClick: t
            }, o(n(a)("admin.channelMonitor.template.selectNone")), 1),
            e("span", Ja, o(n(a)("admin.channelMonitor.template.selectedCount", {
              n: z.value.length,
              total: y.value.length
            })), 1)
          ]),
          e("ul", Qa, [
            (l(!0), i(q, null, W(y.value, (T) => (l(), i("li", {
              key: T.id,
              class: "flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-dark-800",
              onClick: (Y) => H(T.id)
            }, [
              e("input", {
                type: "checkbox",
                checked: B.value.has(T.id),
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                onClick: Qe((Y) => H(T.id), ["stop"])
              }, null, 8, Za),
              e("span", Xa, o(T.name), 1),
              e("span", Wa, o(T.provider), 1),
              T.provider === "openai" ? (l(), i("span", eo, o(T.api_mode), 1)) : I("", !0),
              T.enabled ? I("", !0) : (l(), i("span", to, o(n(a)("admin.channelMonitor.onlyDisabled").replace(/^仅|^Only /, "")), 1))
            ], 8, Ya))), 128))
          ])
        ]))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), ro = { class: "mb-4 border-b border-gray-200 dark:border-dark-700" }, lo = {
  role: "tablist",
  class: "flex flex-wrap gap-1"
}, so = ["aria-selected", "onClick"], io = {
  key: 0,
  class: "ml-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-dark-700"
}, co = {
  key: 0,
  class: "space-y-2"
}, uo = { class: "flex justify-end" }, mo = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-400"
}, po = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400"
}, ho = { class: "flex items-start justify-between gap-3" }, vo = { class: "min-w-0 flex-1" }, go = { class: "flex items-center gap-2" }, yo = { class: "font-medium text-gray-900 dark:text-white" }, bo = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, _o = {
  key: 0,
  class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400"
}, fo = { class: "mt-1 text-xs text-gray-400" }, xo = { class: "flex flex-shrink-0 gap-2" }, ko = ["disabled", "title", "onClick"], Mo = ["onClick"], wo = ["onClick"], $o = {
  key: 1,
  class: "space-y-4"
}, Co = { class: "input-label" }, Vo = ["placeholder"], zo = { key: 0 }, Eo = { class: "input-label" }, So = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Po = ["onClick"], Oo = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, Ao = { class: "input-label" }, Ro = { class: "grid gap-3 sm:grid-cols-2" }, To = ["onClick"], Uo = { class: "block text-sm font-semibold" }, Io = { class: "mt-0.5 block text-xs opacity-80" }, No = { class: "input-label" }, Do = ["placeholder"], Ho = { class: "flex w-full items-center justify-between" }, Bo = { class: "flex gap-2" }, Fo = ["disabled"], jo = /* @__PURE__ */ ie({
  __name: "MonitorTemplateManagerDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "updated"],
  setup(s, { emit: r }) {
    const p = s, k = r, { t: a } = de(), b = we(), { providerPickerClass: m } = Oe(), g = R(() => [
      { value: ke, label: a("monitorCommon.providers.anthropic") },
      { value: te, label: a("monitorCommon.providers.openai") },
      { value: Ie, label: a("monitorCommon.providers.gemini") },
      { value: be, label: a("monitorCommon.providers.grok") },
      { value: Me, label: a("monitorCommon.providers.antigravity") },
      { value: ze, label: a("monitorCommon.providers.kimi") },
      { value: Ee, label: a("monitorCommon.providers.zhipu") },
      { value: Se, label: a("monitorCommon.providers.deepseek") }
    ]), y = S(ke), z = S([]), B = S(!1), w = R(
      () => z.value.filter((_) => _.provider === y.value)
    ), H = R(() => {
      const _ = Object.fromEntries(tt.map((N) => [N, 0]));
      for (const N of z.value) _[N.provider]++;
      return _;
    }), A = S(null), t = S(!1), d = $e(f(ke));
    function f(_) {
      return {
        id: null,
        name: "",
        provider: _,
        api_mode: ue,
        description: "",
        extra_headers: {},
        body_override_mode: "off",
        body_override: null
      };
    }
    function U(_) {
      d.id = _.id, d.name = _.name, d.provider = _.provider, d.api_mode = re(_.api_mode), d.description = _.description, d.extra_headers = { ..._.extra_headers || {} }, d.body_override_mode = _.body_override_mode, d.body_override = _.body_override ? { ..._.body_override } : null;
    }
    function T() {
      Object.assign(d, f(y.value)), A.value = "new";
    }
    function Y(_) {
      U(_), A.value = _.id;
    }
    function ee() {
      A.value = null;
    }
    async function ae() {
      B.value = !0;
      try {
        const { items: _ } = await ne.channelMonitorTemplate.list();
        z.value = _;
      } catch (_) {
        b.showError(le(_, a("common.error")));
      } finally {
        B.value = !1;
      }
    }
    pe(
      () => p.show,
      (_) => {
        _ && (A.value = null, ae());
      },
      { immediate: !0 }
    );
    async function he() {
      if (!t.value) {
        if (!d.name.trim()) {
          b.showError(a("admin.channelMonitor.template.missingName"));
          return;
        }
        t.value = !0;
        try {
          A.value === "new" ? (await ne.channelMonitorTemplate.create({
            name: d.name.trim(),
            provider: d.provider,
            api_mode: d.provider === te ? d.api_mode : ue,
            description: d.description.trim(),
            extra_headers: d.extra_headers,
            body_override_mode: d.body_override_mode,
            body_override: d.body_override
          }), b.showSuccess(a("admin.channelMonitor.template.createSuccess"))) : typeof A.value == "number" && (await ne.channelMonitorTemplate.update(A.value, {
            name: d.name.trim(),
            api_mode: d.provider === te ? d.api_mode : ue,
            description: d.description.trim(),
            extra_headers: d.extra_headers,
            body_override_mode: d.body_override_mode,
            body_override: d.body_override
          }), b.showSuccess(a("admin.channelMonitor.template.updateSuccess"))), await ae(), k("updated"), A.value = null;
        } catch (_) {
          b.showError(le(_, a("common.error")));
        } finally {
          t.value = !1;
        }
      }
    }
    const $ = $e({
      show: !1,
      tpl: null
    });
    function M(_) {
      $.tpl = _, $.show = !0;
    }
    async function D(_) {
      await ae(), k("updated");
    }
    const L = $e({
      show: !1,
      tpl: null
    });
    function oe(_) {
      L.tpl = _, L.show = !0;
    }
    const Z = R(() => {
      const _ = L.tpl;
      return _ ? a("admin.channelMonitor.template.deleteConfirm", {
        name: _.name,
        n: _.associated_monitors
      }) : "";
    });
    async function fe() {
      const _ = L.tpl;
      if (L.show = !1, !!_)
        try {
          await ne.channelMonitorTemplate.del(_.id), b.showSuccess(a("admin.channelMonitor.template.deleteSuccess")), await ae(), k("updated");
        } catch (N) {
          b.showError(le(N, a("common.error")));
        }
    }
    function ye(_) {
      return y.value === _ ? "border-b-2 border-primary-500 text-primary-600 dark:text-primary-400" : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";
    }
    function E(_) {
      switch (_) {
        case "merge":
          return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
        case "replace":
          return "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300";
        default:
          return "bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300";
      }
    }
    function x(_) {
      return a(`admin.channelMonitor.advanced.bodyMode${_.charAt(0).toUpperCase()}${_.slice(1)}`);
    }
    const F = R(() => [
      {
        value: ue,
        label: a("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: a("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ge,
        label: a("admin.channelMonitor.form.apiModeResponses"),
        hint: a("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    pe(() => d.provider, (_) => {
      _ !== te && (d.api_mode = ue);
    });
    function re(_) {
      return _ === ge ? ge : ue;
    }
    function C(_) {
      return d.api_mode === _ ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ce(_) {
      return re(_) === ge ? a("admin.channelMonitor.form.apiModeResponses") : a("admin.channelMonitor.form.apiModeChatCompletions");
    }
    function me(_) {
      return re(_) === ge ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
    }
    return (_, N) => (l(), i(q, null, [
      O(Pe, {
        show: s.show,
        title: n(a)("admin.channelMonitor.template.managerTitle"),
        width: "wide",
        onClose: N[6] || (N[6] = (h) => _.$emit("close"))
      }, {
        footer: j(() => [
          e("div", Ho, [
            e("div", null, [
              A.value ? (l(), i("button", {
                key: 0,
                class: "btn btn-secondary",
                onClick: ee
              }, o(n(a)("common.back")), 1)) : I("", !0)
            ]),
            e("div", Bo, [
              e("button", {
                class: "btn btn-secondary",
                onClick: N[5] || (N[5] = (h) => _.$emit("close"))
              }, o(n(a)("common.close")), 1),
              A.value ? (l(), i("button", {
                key: 0,
                class: "btn btn-primary",
                disabled: t.value,
                onClick: he
              }, o(t.value ? n(a)("common.submitting") : A.value === "new" ? n(a)("common.create") : n(a)("common.update")), 9, Fo)) : I("", !0)
            ])
          ])
        ]),
        default: j(() => [
          e("div", ro, [
            e("div", lo, [
              (l(!0), i(q, null, W(g.value, (h) => (l(), i("button", {
                key: h.value,
                type: "button",
                role: "tab",
                "aria-selected": y.value === h.value,
                class: K(["px-4 py-2 text-sm font-medium transition-colors", ye(h.value)]),
                onClick: (V) => y.value = h.value
              }, [
                G(o(h.label) + " ", 1),
                H.value[h.value] > 0 ? (l(), i("span", io, o(H.value[h.value]), 1)) : I("", !0)
              ], 10, so))), 128))
            ])
          ]),
          A.value ? (l(), i("div", $o, [
            e("div", null, [
              e("label", Co, [
                G(o(n(a)("admin.channelMonitor.template.form.name")) + " ", 1),
                N[9] || (N[9] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": N[0] || (N[0] = (h) => d.name = h),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(a)("admin.channelMonitor.template.form.namePlaceholder")
              }, null, 8, Vo), [
                [Q, d.name]
              ])
            ]),
            A.value === "new" ? (l(), i("div", zo, [
              e("label", Eo, [
                G(o(n(a)("admin.channelMonitor.form.provider")) + " ", 1),
                N[10] || (N[10] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", So, [
                (l(!0), i(q, null, W(g.value, (h) => (l(), i("button", {
                  key: h.value,
                  type: "button",
                  class: K(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", n(m)(h.value, d.provider === h.value)]),
                  onClick: (V) => d.provider = h.value
                }, o(h.label), 11, Po))), 128))
              ])
            ])) : I("", !0),
            d.provider === n(te) ? (l(), i("div", Oo, [
              e("label", Ao, o(n(a)("admin.channelMonitor.form.apiMode")), 1),
              e("div", Ro, [
                (l(!0), i(q, null, W(F.value, (h) => (l(), i("button", {
                  key: h.value,
                  type: "button",
                  class: K(["rounded-lg border-2 px-3 py-2 text-left transition-colors", C(h.value)]),
                  onClick: (V) => d.api_mode = h.value
                }, [
                  e("span", Uo, o(h.label), 1),
                  e("span", Io, o(h.hint), 1)
                ], 10, To))), 128))
              ])
            ])) : I("", !0),
            e("div", null, [
              e("label", No, o(n(a)("admin.channelMonitor.template.form.description")), 1),
              J(e("input", {
                "onUpdate:modelValue": N[1] || (N[1] = (h) => d.description = h),
                type: "text",
                class: "input",
                placeholder: n(a)("admin.channelMonitor.template.form.descriptionPlaceholder")
              }, null, 8, Do), [
                [Q, d.description]
              ])
            ]),
            O(nt, {
              provider: d.provider,
              "api-mode": d.api_mode,
              "extra-headers": d.extra_headers,
              "body-override-mode": d.body_override_mode,
              "body-override": d.body_override,
              "onUpdate:extraHeaders": N[2] || (N[2] = (h) => d.extra_headers = h),
              "onUpdate:bodyOverrideMode": N[3] || (N[3] = (h) => d.body_override_mode = h),
              "onUpdate:bodyOverride": N[4] || (N[4] = (h) => d.body_override = h)
            }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
          ])) : (l(), i("div", co, [
            e("div", uo, [
              e("button", {
                class: "btn btn-primary btn-sm",
                onClick: T
              }, [
                O(se, {
                  name: "plus",
                  size: "sm",
                  class: "mr-1"
                }),
                G(" " + o(n(a)("admin.channelMonitor.template.createButton")), 1)
              ])
            ]),
            B.value ? (l(), i("div", mo, o(n(a)("common.loading")), 1)) : w.value.length === 0 ? (l(), i("div", po, o(n(a)("admin.channelMonitor.template.emptyState")), 1)) : (l(!0), i(q, { key: 2 }, W(w.value, (h) => (l(), i("div", {
              key: h.id,
              class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
            }, [
              e("div", ho, [
                e("div", vo, [
                  e("div", go, [
                    e("span", yo, o(h.name), 1),
                    e("span", {
                      class: K(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", E(h.body_override_mode)])
                    }, o(x(h.body_override_mode)), 3),
                    h.provider === n(te) ? (l(), i("span", {
                      key: 0,
                      class: K(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", me(h.api_mode)])
                    }, o(ce(h.api_mode)), 3)) : I("", !0),
                    h.associated_monitors > 0 ? (l(), i("span", bo, o(n(a)("admin.channelMonitor.template.associatedCount", { n: h.associated_monitors })), 1)) : I("", !0)
                  ]),
                  h.description ? (l(), i("p", _o, o(h.description), 1)) : I("", !0),
                  e("p", fo, o(n(a)("admin.channelMonitor.template.headersSummary", {
                    n: Object.keys(h.extra_headers || {}).length
                  })), 1)
                ]),
                e("div", xo, [
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    disabled: h.associated_monitors === 0,
                    title: n(a)("admin.channelMonitor.template.applyTooltip"),
                    onClick: (V) => M(h)
                  }, [
                    O(se, {
                      name: "refresh",
                      size: "sm",
                      class: "mr-1"
                    }),
                    G(" " + o(n(a)("admin.channelMonitor.template.applyButton")), 1)
                  ], 8, ko),
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    onClick: (V) => Y(h)
                  }, o(n(a)("common.edit")), 9, Mo),
                  e("button", {
                    class: "btn btn-secondary btn-sm text-red-600",
                    onClick: (V) => oe(h)
                  }, o(n(a)("common.delete")), 9, wo)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        _: 1
      }, 8, ["show", "title"]),
      O(oo, {
        show: $.show,
        "template-id": $.tpl ? $.tpl.id : null,
        "template-name": $.tpl ? $.tpl.name : "",
        onClose: N[7] || (N[7] = (h) => $.show = !1),
        onApplied: D
      }, null, 8, ["show", "template-id", "template-name"]),
      O(Xe, {
        show: L.show,
        title: n(a)("common.delete"),
        message: Z.value,
        "confirm-text": n(a)("common.delete"),
        "cancel-text": n(a)("common.cancel"),
        danger: !0,
        onConfirm: fe,
        onCancel: N[8] || (N[8] = (h) => L.show = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
}), qo = {
  key: 0,
  class: "space-y-1",
  "data-testid": "monitor-quota-view"
}, Ko = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Lo = { class: "rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-dark-600 dark:text-gray-300" }, Go = {
  key: 1,
  class: "space-y-1"
}, Jo = ["title"], Qo = { class: "h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-dark-600" }, Yo = ["title"], Zo = {
  key: 2,
  class: "flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px]"
}, Xo = ["title"], at = /* @__PURE__ */ ie({
  __name: "MonitorQuotaView",
  props: {
    snapshot: {}
  },
  setup(s) {
    const r = s, { t: p, te: k } = de(), a = {
      "5h": "monitorCommon.quota.windows.5h",
      "7d": "monitorCommon.quota.windows.7d",
      "7d-sonnet": "monitorCommon.quota.windows.7dSonnet",
      "7d-fable": "monitorCommon.quota.windows.7dFable",
      weekly: "monitorCommon.quota.windows.weekly",
      daily: "monitorCommon.quota.windows.daily",
      "30d": "monitorCommon.quota.windows.30d",
      total: "monitorCommon.quota.windows.total"
    }, b = {
      requests: "monitorCommon.quota.labels.requests",
      tokens: "monitorCommon.quota.labels.tokens",
      shared: "monitorCommon.quota.labels.shared",
      pro: "monitorCommon.quota.labels.pro",
      flash: "monitorCommon.quota.labels.flash"
    };
    function m(t) {
      const d = a[t];
      return d && k(d) ? p(d) : t;
    }
    function g(t) {
      const d = m(t.window);
      if (!t.label) return d;
      const f = b[t.label];
      return `${f && k(f) ? p(f) : t.label}/${d}`;
    }
    const y = R(
      () => {
        var t;
        return (((t = r.snapshot) == null ? void 0 : t.tiers) || []).map((d, f) => ({
          key: `${d.window}-${d.label || ""}-${f}`,
          label: g(d),
          title: g(d),
          tier: d
        }));
      }
    ), z = R(() => {
      var d;
      const t = r.snapshot;
      return t ? (d = t.balances) != null && d.length ? t.balances : t.balance != null ? [{ currency: t.currency || "?", balance: t.balance }] : [] : [];
    }), B = R(() => {
      var d;
      const t = ((d = r.snapshot) == null ? void 0 : d.error) || p("monitorCommon.quota.unavailable");
      return t.length > 48 ? `${t.slice(0, 48)}…` : t;
    }), w = (t) => t >= 90 ? "bg-red-500" : t >= 75 ? "bg-amber-500" : "bg-emerald-500", H = (t) => t >= 90 ? "text-red-600 dark:text-red-400" : t >= 75 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400", A = (t) => {
      const d = new Date(t);
      if (isNaN(d.getTime())) return t;
      const f = Date.now(), U = d.getTime() - f;
      if (U <= 0) return p("monitorCommon.quota.resetSoon");
      if (U < 36e5) return `${Math.max(1, Math.round(U / 6e4))}m`;
      const T = Math.round(U / 36e5);
      if (T < 48) return `${T}h`;
      const Y = String(d.getMonth() + 1).padStart(2, "0"), ee = String(d.getDate()).padStart(2, "0");
      return `${Y}-${ee}`;
    };
    return (t, d) => s.snapshot ? (l(), i("div", qo, [
      s.snapshot.plan_level ? (l(), i("div", Ko, [
        e("span", Lo, o(s.snapshot.plan_level), 1)
      ])) : I("", !0),
      s.snapshot.success && y.value.length ? (l(), i("div", Go, [
        (l(!0), i(q, null, W(y.value, (f) => (l(), i("div", {
          key: f.key,
          class: "flex items-center gap-1.5 text-[10px]"
        }, [
          e("span", {
            class: "w-14 shrink-0 truncate text-gray-500 dark:text-gray-400",
            title: f.title
          }, o(f.label), 9, Jo),
          e("div", Qo, [
            e("div", {
              class: K(["h-full rounded-full transition-all", w(f.tier.used_percent)]),
              style: Je({ width: `${Math.min(100, Math.max(0, f.tier.used_percent))}%` })
            }, null, 6)
          ]),
          e("span", {
            class: K(["shrink-0 font-medium", H(f.tier.used_percent)])
          }, o(Math.round(f.tier.used_percent)) + "% ", 3),
          f.tier.reset_at ? (l(), i("span", {
            key: 0,
            class: "truncate text-gray-400 dark:text-gray-500",
            title: f.tier.reset_at
          }, " · " + o(A(f.tier.reset_at)), 9, Yo)) : I("", !0)
        ]))), 128))
      ])) : I("", !0),
      s.snapshot.success && z.value.length ? (l(), i("div", Zo, [
        (l(!0), i(q, null, W(z.value, (f) => (l(), i("span", {
          key: f.currency,
          class: K(["font-medium", f.balance <= 0 ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-300"])
        }, o(f.balance.toFixed(2)) + " " + o(f.currency), 3))), 128))
      ])) : I("", !0),
      s.snapshot.success ? I("", !0) : (l(), i("div", {
        key: 3,
        class: "truncate text-[10px] text-red-600 dark:text-red-400",
        title: s.snapshot.error,
        "data-testid": "monitor-quota-error"
      }, o(B.value), 9, Xo))
    ])) : I("", !0);
  }
}), Wo = { class: "space-y-2" }, er = { class: "flex flex-col" }, tr = { class: "font-medium text-gray-900 dark:text-white" }, nr = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, ar = { class: "flex items-center gap-2" }, or = { class: "text-xs text-gray-500 dark:text-gray-400" }, rr = { class: "flex justify-end" }, lr = /* @__PURE__ */ ie({
  __name: "MonitorRunResultDialog",
  props: {
    show: { type: Boolean },
    results: {}
  },
  emits: ["close"],
  setup(s) {
    const { t: r } = de(), { statusLabel: p, statusBadgeClass: k, formatLatency: a } = Oe();
    return (b, m) => (l(), xe(Pe, {
      show: s.show,
      title: n(r)("admin.channelMonitor.runResultTitle"),
      width: "normal",
      onClose: m[1] || (m[1] = (g) => b.$emit("close"))
    }, {
      footer: j(() => [
        e("div", rr, [
          e("button", {
            onClick: m[0] || (m[0] = (g) => b.$emit("close")),
            class: "btn btn-primary"
          }, o(n(r)("common.close")), 1)
        ])
      ]),
      default: j(() => [
        e("div", Wo, [
          (l(!0), i(q, null, W(s.results, (g) => (l(), i("div", {
            key: g.model,
            class: "flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-dark-600"
          }, [
            e("div", er, [
              e("span", tr, o(g.model), 1),
              g.message ? (l(), i("span", nr, o(g.message), 1)) : I("", !0),
              O(at, {
                snapshot: g.quota,
                class: "mt-1"
              }, null, 8, ["snapshot"])
            ]),
            e("div", ar, [
              e("span", {
                class: K(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", n(k)(g.status)])
              }, o(n(p)(g.status)), 3),
              e("span", or, o(n(a)(g.latency_ms)) + " ms", 1)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), sr = { class: "flex flex-col gap-0.5" }, ir = { class: "flex items-center gap-2" }, dr = { class: "text-sm text-gray-900 dark:text-gray-100" }, cr = { class: "space-y-2" }, ur = { class: "text-xs font-semibold text-gray-100" }, mr = {
  key: 0,
  class: "text-[11px] text-gray-300"
}, pr = {
  key: 1,
  class: "space-y-1"
}, hr = { class: "text-[11px] font-semibold uppercase tracking-wide text-gray-400" }, vr = { class: "w-full text-left text-[11px]" }, gr = { class: "text-gray-400" }, yr = { class: "py-0.5 pr-2 font-medium" }, br = { class: "py-0.5 pr-2 font-medium" }, _r = { class: "py-0.5 font-medium" }, fr = { class: "py-0.5 pr-2 text-gray-100" }, xr = { class: "py-0.5 pr-2" }, kr = { class: "py-0.5 text-gray-100" }, Mr = /* @__PURE__ */ ie({
  __name: "MonitorPrimaryModelCell",
  props: {
    row: {}
  },
  setup(s) {
    const { t: r } = de(), { statusLabel: p, statusBadgeClass: k, formatLatency: a } = Oe();
    return (b, m) => (l(), i("div", sr, [
      e("div", ir, [
        e("span", dr, o(s.row.primary_model), 1),
        O(We, null, {
          trigger: j(() => [
            e("span", {
              class: K(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", n(k)(s.row.primary_status)])
            }, o(n(p)(s.row.primary_status)), 3)
          ]),
          default: j(() => {
            var g;
            return [
              e("div", cr, [
                e("div", ur, [
                  G(o(s.row.primary_model) + " ", 1),
                  e("span", {
                    class: K(["ml-1 inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium", n(k)(s.row.primary_status)])
                  }, o(n(p)(s.row.primary_status)), 3)
                ]),
                (((g = s.row.extra_models) == null ? void 0 : g.length) ?? 0) === 0 ? (l(), i("div", mr, o(n(r)("monitorCommon.extraModelsEmpty")), 1)) : (l(), i("div", pr, [
                  e("div", hr, o(n(r)("monitorCommon.extraModelsHeader")), 1),
                  e("table", vr, [
                    e("thead", null, [
                      e("tr", gr, [
                        e("th", yr, o(n(r)("admin.channelMonitor.columns.primaryModel")), 1),
                        e("th", br, o(n(r)("admin.channelMonitor.columns.actions")), 1),
                        e("th", _r, o(n(r)("admin.channelMonitor.columns.latency")), 1)
                      ])
                    ]),
                    e("tbody", null, [
                      (l(!0), i(q, null, W(s.row.extra_models_status || [], (y) => (l(), i("tr", {
                        key: y.model
                      }, [
                        e("td", fr, o(y.model), 1),
                        e("td", xr, [
                          e("span", {
                            class: K(["inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]", n(k)(y.status)])
                          }, o(n(p)(y.status)), 3)
                        ]),
                        e("td", kr, o(n(a)(y.latency_ms)), 1)
                      ]))), 128))
                    ])
                  ])
                ]))
              ])
            ];
          }),
          _: 1
        })
      ]),
      O(at, {
        snapshot: s.row.latest_quota
      }, null, 8, ["snapshot"])
    ]));
  }
}), wr = { class: "flex items-center gap-1" }, $r = ["disabled"], Cr = { class: "text-xs" }, Vr = ["title", "disabled"], zr = { class: "text-xs" }, Er = { class: "text-xs" }, Sr = { class: "text-xs" }, Pr = /* @__PURE__ */ ie({
  __name: "MonitorActionsCell",
  props: {
    row: {},
    running: { type: Boolean },
    duplicating: { type: Boolean }
  },
  emits: ["run", "duplicate", "edit", "delete"],
  setup(s) {
    const r = s, { t: p } = de(), k = R(() => r.row.api_key_decrypt_failed ? p("admin.channelMonitor.duplicateKeyUnavailable") : r.duplicating ? p("admin.channelMonitor.duplicating") : p("admin.channelMonitor.duplicate"));
    return (a, b) => (l(), i("div", wr, [
      e("button", {
        onClick: b[0] || (b[0] = (m) => a.$emit("run", s.row)),
        disabled: s.running,
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "refresh",
          size: "sm",
          class: K(s.running ? "animate-spin" : "")
        }, null, 8, ["class"]),
        e("span", Cr, o(n(p)("admin.channelMonitor.runNow")), 1)
      ], 8, $r),
      e("button", {
        "data-testid": "monitor-duplicate",
        title: k.value,
        disabled: s.duplicating || !!s.row.api_key_decrypt_failed,
        onClick: b[1] || (b[1] = (m) => a.$emit("duplicate", s.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "copy",
          size: "sm"
        }),
        e("span", zr, o(s.duplicating ? n(p)("admin.channelMonitor.duplicating") : n(p)("admin.channelMonitor.duplicate")), 1)
      ], 8, Vr),
      e("button", {
        onClick: b[2] || (b[2] = (m) => a.$emit("edit", s.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "edit",
          size: "sm"
        }),
        e("span", Er, o(n(p)("common.edit")), 1)
      ]),
      e("button", {
        onClick: b[3] || (b[3] = (m) => a.$emit("delete", s.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
      }, [
        O(se, {
          name: "trash",
          size: "sm"
        }),
        e("span", Sr, o(n(p)("common.delete")), 1)
      ])
    ]));
  }
});
const Or = {
  channelMonitor: {
    key: "channel_monitor_enabled",
    mode: "opt-out",
    label: "Channel Monitor"
  }
};
function Ar(s) {
  var k;
  const p = (k = we().cachedPublicSettings) == null ? void 0 : k[s.key];
  return typeof p == "boolean" ? p : s.mode === "opt-out";
}
function ot() {
  return Ar(Or.channelMonitor);
}
function He() {
  var p;
  return ((p = we().cachedPublicSettings) == null ? void 0 : p.channel_monitor_mode) === "v2" ? "v2" : "v1";
}
function Ge() {
  return ot() && He() === "v1";
}
function Rr() {
  return ot() && He() === "v2";
}
const Tr = [
  "content_policy",
  "authentication",
  "context_limit",
  "invalid_request",
  "model_unsupported",
  "group_access",
  "quota_or_balance",
  "account_pool_unavailable",
  "rate_or_capacity",
  "timeout",
  "transport_or_stream",
  "upstream_forbidden",
  "not_found",
  "client_cancelled",
  "upstream_5xx",
  "internal",
  "other"
];
async function Ur() {
  const { data: s } = await _e.get("/admin/channel-monitor-v2/config");
  return s;
}
async function Ir(s) {
  const { data: r } = await _e.put("/admin/channel-monitor-v2/config", s);
  return r;
}
const Nr = { class: "mx-auto w-full max-w-6xl space-y-5 px-1 py-2 sm:px-2" }, Dr = { class: "page-header mb-0 flex flex-wrap items-center justify-between gap-3 px-1 py-2" }, Hr = { class: "min-w-0" }, Br = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Fr = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400" }, jr = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, qr = ["disabled"], Kr = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50/90 px-4 py-3 text-sm text-zo-alert-900 dark:border-zo-alert-800/50 dark:bg-zo-alert-900/20 dark:text-zo-alert-100",
  role: "status"
}, Lr = {
  key: 1,
  class: "card flex min-h-[200px] items-center justify-center !rounded-lg !border-0 text-sm text-gray-400 shadow-sm ring-1 ring-gray-900/5 dark:ring-dark-700"
}, Gr = { class: "animate-pulse" }, Jr = { class: "card divide-y divide-gray-100 !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:divide-dark-700 dark:!bg-dark-800 dark:ring-dark-700" }, Qr = { class: "flex flex-wrap items-center justify-between gap-4 px-5 py-4" }, Yr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Zr = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Xr = { class: "flex flex-wrap items-center justify-between gap-4 px-5 py-4" }, Wr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, el = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, tl = ["aria-label"], nl = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, al = { class: "card-header !py-3" }, ol = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, rl = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, ll = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, sl = { class: "text-sm font-medium text-gray-900 dark:text-white" }, il = ["value", "placeholder", "onChange"], dl = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, cl = { class: "card-header flex flex-wrap items-center justify-between gap-2 !py-3" }, ul = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, ml = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, pl = { class: "max-h-[min(40vh,280px)] overflow-y-auto px-3 py-2 sm:px-4" }, hl = { class: "grid grid-cols-1 gap-1 sm:grid-cols-2" }, vl = ["checked", "onChange"], gl = { class: "min-w-0 flex-1 truncate font-medium text-gray-800 dark:text-gray-100" }, yl = { class: "shrink-0 text-xs text-gray-400" }, bl = {
  key: 0,
  class: "empty-state py-8 text-sm text-gray-400"
}, _l = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, fl = { class: "card-header !py-3" }, xl = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, kl = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Ml = { class: "max-h-[min(40vh,320px)] overflow-y-auto px-3 py-2 sm:px-4" }, wl = { class: "grid grid-cols-1 gap-1 sm:grid-cols-2" }, $l = ["checked", "onChange"], Cl = { class: "min-w-0 flex-1 truncate font-medium text-gray-800 dark:text-gray-100" }, Vl = { class: "shrink-0 font-mono text-[10px] text-gray-400" }, zl = { class: "border-t border-gray-100 px-5 py-3 text-xs text-gray-500 dark:border-dark-700 dark:text-dark-400" }, El = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, Sl = { class: "card-header !py-3" }, Pl = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Ol = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Al = { class: "grid grid-cols-1 gap-4 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4" }, Rl = { class: "block" }, Tl = { class: "input-label" }, Ul = { class: "block" }, Il = { class: "input-label" }, Nl = { class: "block" }, Dl = { class: "input-label" }, Hl = { class: "block" }, Bl = { class: "input-label" }, Fl = { class: "block" }, jl = { class: "input-label" }, ql = { class: "block" }, Kl = { class: "input-label" }, Ll = { class: "block" }, Gl = { class: "input-label" }, Jl = { class: "block" }, Ql = { class: "input-label" }, Yl = { class: "space-y-2" }, Zl = { class: "rounded-2xl border border-primary-200 bg-primary-50/80 px-4 py-3 text-sm text-primary-900 dark:border-primary-800/50 dark:bg-primary-900/20 dark:text-primary-100" }, Xl = { class: "rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-xs text-gray-600 dark:border-dark-600 dark:bg-dark-800/50 dark:text-gray-300" }, Wl = { class: "font-medium text-gray-800 dark:text-gray-100" }, es = { class: "mt-1.5 list-disc space-y-0.5 pl-4" }, ts = /* @__PURE__ */ ie({
  __name: "MonitorSettingsPanel",
  setup(s) {
    const { t: r, te: p } = de(), k = we(), a = S(!0), b = S(!1), m = S(null), g = S(""), y = S([]), z = R(() => m.value ? JSON.stringify(m.value) !== g.value : !1), B = R(
      () => {
        var E;
        return ((E = m.value) == null ? void 0 : E.platforms.filter((x) => x.enabled).reduce((x, F) => x + F.models.length, 0)) || 0;
      }
    ), w = Tr, H = R(
      () => {
        var E, x;
        return w.length - (((x = (E = m.value) == null ? void 0 : E.ignored_error_categories) == null ? void 0 : x.length) || 0);
      }
    ), A = R(() => Rr()), t = R(() => {
      var E;
      return (E = k.cachedPublicSettings) != null && E.channel_monitor_enabled ? He() === "v1" ? r("channelMonitorV2.settings.modeV1") : r("channelMonitorV2.settings.modeV2") : r("channelMonitorV2.settings.modeClosed");
    }), d = {
      minimum_sample: 50,
      warning_error_rate: 0.05,
      critical_error_rate: 0.2,
      target_ttft_ms: 3e3,
      warning_ttft_ms: 3e3,
      critical_ttft_ms: 1e4,
      // Higher is better: below 85% watch, below 60% critical.
      warning_cache_rate: 0.85,
      critical_cache_rate: 0.6,
      error_weight: 0.6,
      ttft_weight: 0.2,
      cache_weight: 0.2
    }, f = [
      "authentication",
      "client_cancelled",
      "content_policy",
      "context_limit",
      "group_access",
      "model_unsupported",
      "not_found",
      "quota_or_balance"
    ];
    function U(E) {
      return R({
        get: () => {
          var x, F;
          return (((F = (x = m.value) == null ? void 0 : x.health_thresholds) == null ? void 0 : F[E]) ?? d[E]) * 100;
        },
        set: (x) => {
          m.value && (m.value.health_thresholds[E] = Math.max(0, Math.min(100, Number(x) || 0)) / 100);
        }
      });
    }
    const T = U("warning_error_rate"), Y = U("critical_error_rate"), ee = U("warning_cache_rate"), ae = U("critical_cache_rate");
    function he(E, x) {
      E.models = [
        ...new Set(
          x.target.value.split(",").map((F) => F.trim()).filter(Boolean)
        )
      ].sort();
    }
    function $(E) {
      m.value && (m.value.group_ids = m.value.group_ids.includes(E) ? m.value.group_ids.filter((x) => x !== E) : [...m.value.group_ids, E].sort((x, F) => x - F));
    }
    function M(E) {
      var x, F;
      return !!((F = (x = m.value) == null ? void 0 : x.ignored_error_categories) != null && F.includes(E));
    }
    function D(E) {
      if (!m.value) return;
      const x = new Set(m.value.ignored_error_categories || []);
      x.has(E) ? x.delete(E) : x.add(E), m.value.ignored_error_categories = [...x].sort();
    }
    function L(E) {
      const x = `channelMonitorV2.errorCategories.${E}`;
      return p(x) ? r(x) : E;
    }
    function oe(E) {
      return {
        anthropic: "Claude",
        openai: "OpenAI",
        grok: "Grok",
        kiro: "Kiro",
        gemini: "Gemini",
        antigravity: "Antigravity",
        composite: "Composite"
      }[E] || E;
    }
    function Z(E) {
      const x = E.ignored_error_categories;
      return {
        ...E,
        health_thresholds: { ...d, ...E.health_thresholds || {} },
        // Preserve explicit empty arrays from the server (operator cleared all).
        ignored_error_categories: [
          ...x ?? [...f]
        ].sort()
      };
    }
    async function fe() {
      a.value = !0;
      try {
        const [E, x] = await Promise.all([Ur(), ne.groups.getAllIncludingInactive()]), F = Z(E);
        m.value = structuredClone(F), y.value = x, g.value = JSON.stringify(F);
      } catch (E) {
        k.showError(le(E, r("channelMonitorV2.settings.loadFailed")));
      } finally {
        a.value = !1;
      }
    }
    async function ye() {
      if (m.value) {
        b.value = !0;
        try {
          const E = Z(m.value), x = await Ir(E), F = Z(x);
          m.value = structuredClone(F), g.value = JSON.stringify(F), k.showSuccess(r("channelMonitorV2.settings.saveSuccess"));
        } catch (E) {
          k.showError(le(E, r("channelMonitorV2.settings.saveFailed"))), await fe();
        } finally {
          b.value = !1;
        }
      }
    }
    return Ye(fe), (E, x) => {
      var re;
      const F = ht("router-link");
      return l(), i("section", Nr, [
        e("header", Dr, [
          e("div", Hr, [
            e("h2", Br, [
              e("span", Fr, [
                O(se, {
                  name: "chart",
                  size: "sm"
                })
              ]),
              G(" " + o(n(r)("channelMonitorV2.settings.title")), 1)
            ]),
            e("p", jr, o(n(r)("channelMonitorV2.settings.description")), 1)
          ]),
          e("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: b.value || !z.value,
            onClick: ye
          }, [
            O(se, {
              name: "check",
              size: "sm"
            }),
            G(" " + o(n(r)("channelMonitorV2.settings.save")), 1)
          ], 8, qr)
        ]),
        A.value ? I("", !0) : (l(), i("div", Kr, [
          G(o(n(r)("channelMonitorV2.settings.modeBanner", {
            mode: t.value,
            modeV2: n(r)("channelMonitorV2.settings.modeV2")
          })) + " ", 1),
          O(F, {
            class: "ml-1 font-medium underline",
            to: "/admin/settings"
          }, {
            default: j(() => [
              G(o(n(r)("admin.settings.tabs.features")), 1)
            ]),
            _: 1
          })
        ])),
        a.value ? (l(), i("div", Lr, [
          e("span", Gr, o(n(r)("channelMonitorV2.settings.loading")), 1)
        ])) : m.value ? (l(), i(q, { key: 2 }, [
          e("div", Jr, [
            e("div", Qr, [
              e("div", null, [
                e("strong", Yr, o(n(r)("channelMonitorV2.settings.enableTitle")), 1),
                e("p", Zr, o(n(r)("channelMonitorV2.settings.enableHint")), 1)
              ]),
              O(Te, {
                modelValue: m.value.enabled,
                "onUpdate:modelValue": x[0] || (x[0] = (C) => m.value.enabled = C)
              }, null, 8, ["modelValue"])
            ]),
            e("div", Xr, [
              e("div", null, [
                e("strong", Wr, o(n(r)("channelMonitorV2.settings.refreshTitle")), 1),
                e("p", el, o(n(r)("channelMonitorV2.settings.refreshHint")), 1)
              ]),
              e("div", {
                class: "tabs inline-flex w-auto",
                role: "group",
                "aria-label": n(r)("channelMonitorV2.settings.refreshAria")
              }, [
                e("button", {
                  type: "button",
                  class: K(["tab", m.value.refresh_interval_seconds === 60 ? "tab-active" : ""]),
                  onClick: x[1] || (x[1] = (C) => m.value.refresh_interval_seconds = 60)
                }, " 1 min ", 2),
                e("button", {
                  type: "button",
                  class: K(["tab", m.value.refresh_interval_seconds === 300 ? "tab-active" : ""]),
                  onClick: x[2] || (x[2] = (C) => m.value.refresh_interval_seconds = 300)
                }, " 5 min ", 2)
              ], 8, tl)
            ])
          ]),
          e("div", nl, [
            e("div", al, [
              e("h3", ol, o(n(r)("channelMonitorV2.settings.platformsTitle")), 1),
              e("p", rl, o(n(r)("channelMonitorV2.settings.platformsHint")), 1)
            ]),
            e("div", ll, [
              (l(!0), i(q, null, W(m.value.platforms, (C) => (l(), i("div", {
                key: C.platform,
                class: "grid grid-cols-1 items-center gap-3 px-5 py-3 sm:grid-cols-[auto_7rem_minmax(0,1fr)_auto]"
              }, [
                O(Te, {
                  modelValue: C.enabled,
                  "onUpdate:modelValue": (ce) => C.enabled = ce
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                e("strong", sl, o(oe(C.platform)), 1),
                e("input", {
                  class: "input",
                  value: C.models.join(", "),
                  type: "text",
                  placeholder: n(r)("channelMonitorV2.settings.modelsPlaceholder"),
                  onChange: (ce) => he(C, ce)
                }, null, 40, il),
                e("span", {
                  class: K(["badge justify-self-start sm:justify-self-end", C.models.length ? "badge-gray" : "badge badge-primary"])
                }, o(C.models.length ? n(r)("channelMonitorV2.settings.badgeOther") : n(r)("channelMonitorV2.settings.badgeAllModels")), 3)
              ]))), 128))
            ])
          ]),
          e("div", dl, [
            e("div", cl, [
              e("div", null, [
                e("h3", ul, o(n(r)("channelMonitorV2.settings.groupsTitle")), 1),
                e("p", ml, o(m.value.group_ids.length ? n(r)("channelMonitorV2.settings.groupsSelected", { count: m.value.group_ids.length }) : n(r)("channelMonitorV2.settings.groupsAll")), 1)
              ]),
              m.value.group_ids.length ? (l(), i("button", {
                key: 0,
                type: "button",
                class: "btn btn-ghost btn-sm",
                onClick: x[3] || (x[3] = (C) => m.value.group_ids = [])
              }, o(n(r)("channelMonitorV2.settings.groupsAll")), 1)) : I("", !0)
            ]),
            e("div", pl, [
              e("div", hl, [
                (l(!0), i(q, null, W(y.value, (C) => (l(), i("label", {
                  key: C.id,
                  class: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-gray-50 dark:hover:bg-dark-800/60"
                }, [
                  e("input", {
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500/40",
                    checked: m.value.group_ids.includes(C.id),
                    onChange: (ce) => $(C.id)
                  }, null, 40, vl),
                  e("span", gl, o(C.name), 1),
                  e("small", yl, o(oe(C.platform)) + " · #" + o(C.id), 1)
                ]))), 128))
              ]),
              y.value.length === 0 ? (l(), i("p", bl, o(n(r)("channelMonitorV2.settings.groupsEmpty")), 1)) : I("", !0)
            ])
          ]),
          e("div", _l, [
            e("div", fl, [
              e("h3", xl, o(n(r)("channelMonitorV2.settings.errorsTitle")), 1),
              e("p", kl, o(n(r)("channelMonitorV2.settings.errorsHint")), 1)
            ]),
            e("div", Ml, [
              e("div", wl, [
                (l(!0), i(q, null, W(n(w), (C) => (l(), i("label", {
                  key: C,
                  class: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-gray-50 dark:hover:bg-dark-800/60"
                }, [
                  e("input", {
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500/40",
                    checked: M(C),
                    onChange: (ce) => D(C)
                  }, null, 40, $l),
                  e("span", Cl, o(L(C)), 1),
                  e("small", Vl, o(C), 1)
                ]))), 128))
              ])
            ]),
            e("div", zl, o(n(r)("channelMonitorV2.settings.ignoredSummary", {
              ignored: ((re = m.value.ignored_error_categories) == null ? void 0 : re.length) || 0,
              counted: H.value
            })), 1)
          ]),
          e("div", El, [
            e("div", Sl, [
              e("h3", Pl, o(n(r)("channelMonitorV2.settings.healthTitle")), 1),
              e("p", Ol, o(n(r)("channelMonitorV2.settings.healthHint")), 1)
            ]),
            e("div", Al, [
              e("label", Rl, [
                e("span", Tl, o(n(r)("channelMonitorV2.settings.fields.minimumSample")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[4] || (x[4] = (C) => m.value.health_thresholds.minimum_sample = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "10000"
                }, null, 512), [
                  [
                    Q,
                    m.value.health_thresholds.minimum_sample,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Ul, [
                e("span", Il, o(n(r)("channelMonitorV2.settings.fields.warningError")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[5] || (x[5] = (C) => Ae(T) ? T.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    Q,
                    n(T),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Nl, [
                e("span", Dl, o(n(r)("channelMonitorV2.settings.fields.criticalError")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (C) => Ae(Y) ? Y.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    Q,
                    n(Y),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Hl, [
                e("span", Bl, o(n(r)("channelMonitorV2.settings.fields.targetTtft")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[7] || (x[7] = (C) => m.value.health_thresholds.target_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    Q,
                    m.value.health_thresholds.target_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Fl, [
                e("span", jl, o(n(r)("channelMonitorV2.settings.fields.warningTtft")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[8] || (x[8] = (C) => m.value.health_thresholds.warning_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    Q,
                    m.value.health_thresholds.warning_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", ql, [
                e("span", Kl, o(n(r)("channelMonitorV2.settings.fields.criticalTtft")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[9] || (x[9] = (C) => m.value.health_thresholds.critical_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    Q,
                    m.value.health_thresholds.critical_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Ll, [
                e("span", Gl, o(n(r)("channelMonitorV2.settings.fields.warningCache")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[10] || (x[10] = (C) => Ae(ee) ? ee.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    Q,
                    n(ee),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Jl, [
                e("span", Ql, o(n(r)("channelMonitorV2.settings.fields.criticalCache")), 1),
                J(e("input", {
                  "onUpdate:modelValue": x[11] || (x[11] = (C) => Ae(ae) ? ae.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    Q,
                    n(ae),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])
          ]),
          e("div", Yl, [
            e("div", Zl, [
              B.value === 0 ? (l(), i(q, { key: 0 }, [
                G(o(n(r)("channelMonitorV2.settings.namedModelsEmpty")), 1)
              ], 64)) : (l(), i(q, { key: 1 }, [
                G(o(n(r)("channelMonitorV2.settings.namedModelsCount", { count: B.value })), 1)
              ], 64))
            ]),
            e("div", Xl, [
              e("p", Wl, o(n(r)("channelMonitorV2.settings.userContractTitle")), 1),
              e("ul", es, [
                e("li", null, o(n(r)("channelMonitorV2.settings.userContract.health")), 1),
                e("li", null, o(n(r)("channelMonitorV2.settings.userContract.trend")), 1),
                e("li", null, o(n(r)("channelMonitorV2.settings.userContract.latency")), 1),
                e("li", null, o(n(r)("channelMonitorV2.settings.userContract.models")), 1)
              ])
            ])
          ])
        ], 64)) : I("", !0)
      ]);
    };
  }
}), ns = { class: "w-full min-w-0 space-y-6 pb-8" }, as = { class: "page-header mb-0 px-1 py-2" }, os = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, rs = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, ls = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, ss = { class: "mt-4 border-t border-gray-100 pt-4 dark:border-dark-700" }, is = ["aria-label"], ds = ["aria-selected"], cs = ["aria-selected"], us = { class: "flex items-center gap-1.5" }, ms = { class: "font-medium text-gray-900 dark:text-white" }, ps = { class: "text-sm text-gray-900 dark:text-gray-100" }, hs = { class: "text-sm text-gray-900 dark:text-gray-100" }, ks = /* @__PURE__ */ ie({
  __name: "ChannelMonitorView",
  setup(s) {
    const { t: r } = de(), p = we(), k = R(() => Ge()), a = S(Ge() ? "legacy" : "v2"), {
      providerLabel: b,
      providerBadgeClass: m,
      formatLatency: g,
      formatAvailability: y
    } = Oe(), z = S([]), B = S(!1), w = S(null), H = S(""), A = S(""), t = S(""), d = $e({ page: 1, page_size: gt(), total: 0 }), f = S(!1), U = S(!1), T = S(null), Y = S(!1), ee = S(null), ae = S(!1), he = S([]), $ = $e(/* @__PURE__ */ new Set());
    let M = null, D = null;
    const L = R(() => [
      { key: "name", label: r("admin.channelMonitor.columns.name"), sortable: !1 },
      { key: "provider", label: r("admin.channelMonitor.columns.provider"), sortable: !1 },
      { key: "primary_model", label: r("admin.channelMonitor.columns.primaryModel"), sortable: !1 },
      { key: "availability_7d", label: r("admin.channelMonitor.columns.availability7d"), sortable: !1 },
      { key: "latency", label: r("admin.channelMonitor.columns.latency"), sortable: !1 },
      { key: "enabled", label: r("admin.channelMonitor.columns.enabled"), sortable: !1 },
      { key: "actions", label: r("admin.channelMonitor.columns.actions"), sortable: !1 }
    ]), oe = R(() => {
      var V;
      const h = ((V = ee.value) == null ? void 0 : V.name) || "";
      return r("admin.channelMonitor.deleteConfirm", { name: h });
    });
    async function Z() {
      M && M.abort();
      const h = new AbortController();
      M = h, B.value = !0;
      try {
        const V = {
          page: d.page,
          page_size: d.page_size
        };
        A.value && (V.provider = A.value), t.value === "true" && (V.enabled = !0), t.value === "false" && (V.enabled = !1), H.value.trim() && (V.search = H.value.trim());
        const P = await ne.channelMonitor.list(V, { signal: h.signal });
        if (h.signal.aborted || M !== h) return;
        z.value = P.items || [], d.total = P.total;
      } catch (V) {
        const P = V;
        if ((P == null ? void 0 : P.name) === "AbortError" || (P == null ? void 0 : P.code) === "ERR_CANCELED") return;
        p.showError(le(V, r("admin.channelMonitor.loadError")));
      } finally {
        M === h && (B.value = !1, M = null);
      }
    }
    function fe() {
      D && clearTimeout(D), D = setTimeout(() => {
        d.page = 1, Z();
      }, 300);
    }
    function ye(h) {
      d.page = h, Z();
    }
    function E(h) {
      d.page_size = h, d.page = 1, Z();
    }
    function x() {
      T.value = null, f.value = !0;
    }
    function F(h) {
      T.value = h, f.value = !0;
    }
    function re() {
      f.value = !1, T.value = null;
    }
    async function C(h) {
      const V = !h.enabled;
      try {
        await ne.channelMonitor.update(h.id, { enabled: V }), h.enabled = V;
      } catch (P) {
        p.showError(le(P, r("common.error")));
      }
    }
    async function ce(h) {
      if (!k.value) {
        p.showError(r("admin.channelMonitor.runFailed"));
        return;
      }
      if (w.value == null) {
        w.value = h.id;
        try {
          const V = await ne.channelMonitor.runNow(h.id);
          he.value = V.results || [], ae.value = !0, p.showSuccess(r("admin.channelMonitor.runSuccess")), Z();
        } catch (V) {
          p.showError(le(V, r("admin.channelMonitor.runFailed")));
        } finally {
          w.value = null;
        }
      }
    }
    async function me(h) {
      if (h.api_key_decrypt_failed) {
        p.showError(r("admin.channelMonitor.duplicateKeyUnavailable"));
        return;
      }
      if (!$.has(h.id)) {
        $.add(h.id);
        try {
          const V = await ne.channelMonitor.duplicate(h.id);
          p.showSuccess(r("admin.channelMonitor.duplicateSuccess", { name: V.name })), await Z();
        } catch (V) {
          p.showError(le(V, r("admin.channelMonitor.duplicateFailed")));
        } finally {
          $.delete(h.id);
        }
      }
    }
    function _(h) {
      ee.value = h, Y.value = !0;
    }
    async function N() {
      if (ee.value)
        try {
          await ne.channelMonitor.del(ee.value.id), p.showSuccess(r("admin.channelMonitor.deleteSuccess")), Y.value = !1, ee.value = null, Z();
        } catch (h) {
          p.showError(le(h, r("common.error")));
        }
    }
    return pe(a, (h) => {
      h === "legacy" && z.value.length === 0 && Z();
    }), Ye(() => {
      a.value === "legacy" && Z();
    }), vt(() => {
      D && clearTimeout(D), M == null || M.abort();
    }), (h, V) => (l(), i(q, null, [
      e("div", ns, [
        e("header", as, [
          e("h1", os, [
            e("span", rs, [
              O(se, {
                name: "chart",
                size: "sm"
              })
            ]),
            G(" " + o(n(r)("admin.channelMonitor.title")), 1)
          ]),
          e("p", ls, o(k.value ? n(r)("channelMonitorV2.admin.descriptionV1") : n(r)("channelMonitorV2.admin.descriptionV2")), 1),
          e("div", ss, [
            e("div", {
              class: "tabs inline-flex w-full max-w-xl flex-wrap sm:w-auto",
              role: "tablist",
              "aria-label": n(r)("channelMonitorV2.admin.tabAria")
            }, [
              e("button", {
                type: "button",
                role: "tab",
                class: K(["tab flex-1 sm:flex-none", a.value === "v2" ? "tab-active" : ""]),
                "aria-selected": a.value === "v2",
                onClick: V[0] || (V[0] = (P) => a.value = "v2")
              }, o(n(r)("channelMonitorV2.admin.tabV2")), 11, ds),
              e("button", {
                type: "button",
                role: "tab",
                class: K(["tab flex-1 sm:flex-none", a.value === "legacy" ? "tab-active" : ""]),
                "aria-selected": a.value === "legacy",
                onClick: V[1] || (V[1] = (P) => a.value = "legacy")
              }, o(k.value ? n(r)("channelMonitorV2.admin.tabV1Active") : n(r)("channelMonitorV2.admin.tabV1History")), 11, cs)
            ], 8, is)
          ])
        ]),
        a.value === "v2" ? (l(), xe(ts, { key: 0 })) : (l(), xe(ft, { key: 1 }, {
          filters: j(() => [
            O(Ht, {
              search: H.value,
              "onUpdate:search": V[2] || (V[2] = (P) => H.value = P),
              provider: A.value,
              "onUpdate:provider": V[3] || (V[3] = (P) => A.value = P),
              enabled: t.value,
              "onUpdate:enabled": V[4] || (V[4] = (P) => t.value = P),
              loading: B.value,
              onReload: Z,
              onCreate: x,
              onManageTemplates: V[5] || (V[5] = (P) => U.value = !0),
              onSearchInput: fe
            }, null, 8, ["search", "provider", "enabled", "loading"])
          ]),
          table: j(() => [
            O(bt, {
              columns: L.value,
              data: z.value,
              loading: B.value
            }, {
              "cell-name": j(({ row: P, value: Ce }) => [
                e("div", us, [
                  e("span", ms, o(Ce), 1),
                  P.api_key_decrypt_failed ? (l(), xe(We, {
                    key: 0,
                    content: n(r)("admin.channelMonitor.apiKeyDecryptFailed")
                  }, {
                    default: j(() => [
                      O(se, {
                        name: "exclamationTriangle",
                        size: "sm",
                        class: "text-red-500"
                      })
                    ]),
                    _: 1
                  }, 8, ["content"])) : I("", !0)
                ])
              ]),
              "cell-provider": j(({ row: P }) => [
                e("span", {
                  class: K(["inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", n(m)(P.provider)])
                }, o(n(b)(P.provider)), 3)
              ]),
              "cell-primary_model": j(({ row: P }) => [
                O(Mr, { row: P }, null, 8, ["row"])
              ]),
              "cell-availability_7d": j(({ row: P }) => [
                e("span", ps, o(n(y)(P)), 1)
              ]),
              "cell-latency": j(({ row: P }) => [
                e("span", hs, o(n(g)(P.primary_latency_ms)), 1)
              ]),
              "cell-enabled": j(({ row: P }) => [
                O(Te, {
                  modelValue: P.enabled,
                  "onUpdate:modelValue": (Ce) => C(P)
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              "cell-actions": j(({ row: P }) => [
                O(Pr, {
                  row: P,
                  running: w.value === P.id,
                  duplicating: $.has(P.id),
                  onRun: ce,
                  onDuplicate: me,
                  onEdit: F,
                  onDelete: _
                }, null, 8, ["row", "running", "duplicating"])
              ]),
              empty: j(() => [
                O(_t, {
                  title: n(r)("admin.channelMonitor.noMonitorsYet"),
                  description: n(r)("admin.channelMonitor.createFirstMonitor"),
                  "action-text": n(r)("admin.channelMonitor.createButton"),
                  onAction: x
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: j(() => [
            d.total > 0 ? (l(), xe(yt, {
              key: 0,
              page: d.page,
              total: d.total,
              "page-size": d.page_size,
              "onUpdate:page": ye,
              "onUpdate:pageSize": E
            }, null, 8, ["page", "total", "page-size"])) : I("", !0)
          ]),
          _: 1
        }))
      ]),
      O(Fa, {
        show: f.value,
        monitor: T.value,
        onClose: re,
        onSaved: Z
      }, null, 8, ["show", "monitor"]),
      O(jo, {
        show: U.value,
        onClose: V[6] || (V[6] = (P) => U.value = !1),
        onUpdated: Z
      }, null, 8, ["show"]),
      O(lr, {
        show: ae.value,
        results: he.value,
        onClose: V[7] || (V[7] = (P) => ae.value = !1)
      }, null, 8, ["show", "results"]),
      O(Xe, {
        show: Y.value,
        title: n(r)("common.delete"),
        message: oe.value,
        "confirm-text": n(r)("common.delete"),
        "cancel-text": n(r)("common.cancel"),
        danger: !0,
        onConfirm: N,
        onCancel: V[8] || (V[8] = (P) => Y.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
});
export {
  ks as default
};
