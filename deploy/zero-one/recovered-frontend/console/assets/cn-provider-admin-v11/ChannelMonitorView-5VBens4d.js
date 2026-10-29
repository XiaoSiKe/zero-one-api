import { W as ve, d as le, X as Ie, c as se, e as c, f as y, g as e, j as w, _ as ee, m as Q, v as Y, i as n, q, l as z, h as a, Y as He, s as O, w as re, B as ge, E as V, F as G, p as X, a as C, n as I, u as Re, r as _e, z as ze, J as dt, b as ct, o as ut } from "./cnProviderAdminLeaf-C3ObTkBL.js";
import { a as W } from "./apiError-i2TfMBqu.js";
import { S as Se, M as qe, b as L, _ as Ke } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DZ8D1X4J.js";
import { T as mt } from "./TablePageLayout-ctQ2q2qU.js";
import { g as pt, P as vt, D as yt } from "./Pagination-B2nllCXv.js";
import { _ as ht } from "./EmptyState.vue_vue_type_script_setup_true_lang-DPRPQ30t.js";
import { _ as Ge } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-CvTQ-EFq.js";
import { _ as Le } from "./Toggle.vue_vue_type_script_setup_true_lang-nUXt7GNr.js";
import { _ as Ce } from "./BaseDialog.vue_vue_type_script_setup_true_lang-BFnaBLr5.js";
import { k as ft, _ as _t } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-DMiEi8Ui.js";
import { _ as bt } from "./GroupBadge.vue_vue_type_script_setup_true_lang-WYEM3nbC.js";
import { P as J, A as ae, a as be, D as Te, u as Ee, C as $e, b as Z, c as we, _ as gt, d as je, e as xt, f as kt, g as Mt, h as $t, i as Oe, j as Pe, k as Je, l as Qe, m as Ye, n as Xe, o as wt, p as Ct, q as Et, r as Pt, s as Ot, t as Ze } from "./MonitorQuotaView.vue_vue_type_script_setup_true_lang-hIOUPyK1.js";
async function St(p = 1, f = 10, v, x) {
  const { data: o } = await ve.get("/keys", {
    params: { page: p, page_size: f, ...v },
    signal: x == null ? void 0 : x.signal
  });
  return o;
}
async function Rt(p) {
  const { data: f } = await ve.get(`/keys/${p}`);
  return f;
}
async function At(p, f, v, x, o, _, k, u) {
  const h = { name: p };
  f !== void 0 && (h.group_id = f), v && (h.custom_key = v), x && x.length > 0 && (h.ip_whitelist = x), o && o.length > 0 && (h.ip_blacklist = o), _ !== void 0 && _ > 0 && (h.quota = _), k !== void 0 && k > 0 && (h.expires_in_days = k), u != null && u.rate_limit_5h && u.rate_limit_5h > 0 && (h.rate_limit_5h = u.rate_limit_5h), u != null && u.rate_limit_1d && u.rate_limit_1d > 0 && (h.rate_limit_1d = u.rate_limit_1d), u != null && u.rate_limit_7d && u.rate_limit_7d > 0 && (h.rate_limit_7d = u.rate_limit_7d);
  const { data: M } = await ve.post("/keys", h);
  return M;
}
async function Ve(p, f) {
  const { data: v } = await ve.put(`/keys/${p}`, f);
  return v;
}
async function It(p, f) {
  const v = [...new Set(p)], x = { succeededIds: [], failures: [] };
  for (let o = 0; o < v.length; o += 5) {
    const _ = v.slice(o, o + 5);
    (await Promise.allSettled(_.map((u) => Ve(u, f)))).forEach((u, h) => {
      u.status === "fulfilled" ? x.succeededIds.push(_[h]) : x.failures.push({ id: _[h], error: u.reason });
    });
  }
  return x;
}
async function Tt(p) {
  const { data: f } = await ve.delete(`/keys/${p}`);
  return f;
}
async function Vt(p, f) {
  return Ve(p, { status: f });
}
const Ut = {
  list: St,
  getById: Rt,
  create: At,
  update: Ve,
  bulkUpdate: It,
  delete: Tt,
  toggleStatus: Vt
};
async function Nt() {
  const { data: p } = await ve.get("/groups/available");
  return p;
}
async function Dt() {
  const { data: p } = await ve.get("/groups/rates");
  return p || {};
}
const Bt = {
  getAvailable: Nt,
  getUserGroupRates: Dt
}, Ft = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, Ht = { class: "flex flex-1 flex-wrap items-center gap-3" }, jt = { class: "relative w-full sm:w-64" }, zt = ["placeholder"], qt = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, Kt = ["disabled", "title"], Gt = ["title"], Lt = /* @__PURE__ */ le({
  __name: "MonitorFiltersBar",
  props: /* @__PURE__ */ He({
    loading: { type: Boolean }
  }, {
    search: { required: !0 },
    searchModifiers: {},
    provider: { required: !0 },
    providerModifiers: {},
    enabled: { required: !0 },
    enabledModifiers: {}
  }),
  emits: /* @__PURE__ */ He(["reload", "create", "manage-templates", "search-input"], ["update:search", "update:provider", "update:enabled"]),
  setup(p) {
    const f = Ie(p, "search"), v = Ie(p, "provider"), x = Ie(p, "enabled"), { t: o } = se(), _ = O(() => [
      { value: "", label: o("admin.channelMonitor.allProviders") },
      ...qe.map(({ value: u }) => ({
        value: u,
        label: o(`monitorCommon.providers.${u}`)
      }))
    ]), k = O(() => [
      { value: "", label: o("admin.channelMonitor.allStatus") },
      { value: "true", label: o("admin.channelMonitor.onlyEnabled") },
      { value: "false", label: o("admin.channelMonitor.onlyDisabled") }
    ]);
    return (u, h) => (c(), y("div", Ft, [
      e("div", Ht, [
        e("div", jt, [
          w(ee, {
            name: "search",
            size: "md",
            class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          }),
          Q(e("input", {
            "onUpdate:modelValue": h[0] || (h[0] = (M) => f.value = M),
            type: "text",
            placeholder: n(o)("admin.channelMonitor.searchPlaceholder"),
            class: "input pl-10",
            onInput: h[1] || (h[1] = (M) => u.$emit("search-input"))
          }, null, 40, zt), [
            [Y, f.value]
          ])
        ]),
        w(Se, {
          modelValue: v.value,
          "onUpdate:modelValue": h[2] || (h[2] = (M) => v.value = M),
          options: _.value,
          placeholder: n(o)("admin.channelMonitor.allProviders"),
          class: "w-44",
          onChange: h[3] || (h[3] = (M) => u.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"]),
        w(Se, {
          modelValue: x.value,
          "onUpdate:modelValue": h[4] || (h[4] = (M) => x.value = M),
          options: k.value,
          placeholder: n(o)("admin.channelMonitor.enabledFilter"),
          class: "w-40",
          onChange: h[5] || (h[5] = (M) => u.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"])
      ]),
      e("div", qt, [
        e("button", {
          onClick: h[6] || (h[6] = (M) => u.$emit("reload")),
          disabled: p.loading,
          class: "btn btn-secondary",
          title: n(o)("common.refresh")
        }, [
          w(ee, {
            name: "refresh",
            size: "md",
            class: q(p.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, Kt),
        e("button", {
          onClick: h[7] || (h[7] = (M) => u.$emit("manage-templates")),
          class: "btn btn-secondary",
          title: n(o)("admin.channelMonitor.template.manageButton")
        }, [
          w(ee, {
            name: "cog",
            size: "md",
            class: "mr-2"
          }),
          z(" " + a(n(o)("admin.channelMonitor.template.manageButton")), 1)
        ], 8, Gt),
        e("button", {
          onClick: h[8] || (h[8] = (M) => u.$emit("create")),
          class: "btn btn-primary"
        }, [
          w(ee, {
            name: "plus",
            size: "md",
            class: "mr-2"
          }),
          z(" " + a(n(o)("admin.channelMonitor.createButton")), 1)
        ])
      ])
    ]));
  }
});
function Jt(p) {
  return p ? p.length <= 12 ? `${p.slice(0, 4)}***` : `${p.slice(0, 6)}...${p.slice(-4)}` : "";
}
const Qt = { class: "space-y-3" }, Yt = { class: "text-xs text-gray-500 dark:text-gray-400" }, Xt = { class: "relative" }, Zt = ["placeholder"], Wt = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-500"
}, eo = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-500"
}, to = {
  key: 2,
  class: "max-h-96 overflow-auto rounded-lg border border-gray-200 dark:border-dark-600"
}, oo = { class: "w-full text-sm" }, no = { class: "bg-gray-50 dark:bg-dark-800 sticky top-0 z-10" }, ao = { class: "text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ro = { class: "px-3 py-2" }, lo = { class: "px-3 py-2" }, so = { class: "px-3 py-2" }, io = { class: "divide-y divide-gray-200 dark:divide-dark-700" }, co = ["onClick"], uo = { class: "px-3 py-2 font-medium text-gray-900 dark:text-white" }, mo = { class: "px-3 py-2 font-mono text-xs text-gray-500 dark:text-gray-400" }, po = { class: "px-3 py-2" }, vo = {
  key: 1,
  class: "text-xs text-gray-400"
}, yo = { class: "flex justify-end" }, ho = /* @__PURE__ */ le({
  __name: "MonitorKeyPickerDialog",
  props: {
    show: { type: Boolean },
    loading: { type: Boolean },
    keys: {},
    provider: {},
    userGroupRates: { default: () => ({}) }
  },
  emits: ["close", "pick"],
  setup(p) {
    const f = p, { t: v } = se(), x = C("");
    re(() => f.show, (_) => {
      _ || (x.value = "");
    });
    const o = O(() => {
      const _ = x.value.trim().toLowerCase();
      return f.keys.filter((k) => {
        var u, h;
        return ((u = k.group) == null ? void 0 : u.platform) !== f.provider ? !1 : _ ? k.name.toLowerCase().includes(_) || k.key.toLowerCase().includes(_) || (((h = k.group) == null ? void 0 : h.name) || "").toLowerCase().includes(_) : !0;
      });
    });
    return (_, k) => (c(), ge(Ce, {
      show: p.show,
      title: n(v)("admin.channelMonitor.form.selectKeyTitle"),
      width: "wide",
      onClose: k[2] || (k[2] = (u) => _.$emit("close"))
    }, {
      footer: V(() => [
        e("div", yo, [
          e("button", {
            onClick: k[1] || (k[1] = (u) => _.$emit("close")),
            class: "btn btn-secondary"
          }, a(n(v)("common.cancel")), 1)
        ])
      ]),
      default: V(() => [
        e("div", Qt, [
          e("p", Yt, a(n(v)("admin.channelMonitor.form.selectKeyHint")), 1),
          e("div", Xt, [
            Q(e("input", {
              "onUpdate:modelValue": k[0] || (k[0] = (u) => x.value = u),
              type: "text",
              class: "input pl-9",
              placeholder: n(v)("keys.searchPlaceholder")
            }, null, 8, Zt), [
              [Y, x.value]
            ]),
            k[3] || (k[3] = e("svg", {
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
          p.loading ? (c(), y("div", Wt, a(n(v)("common.loading")), 1)) : o.value.length === 0 ? (c(), y("div", eo, a(n(v)("admin.channelMonitor.form.noActiveKey")), 1)) : (c(), y("div", to, [
            e("table", oo, [
              e("thead", no, [
                e("tr", ao, [
                  e("th", ro, a(n(v)("common.name")), 1),
                  e("th", lo, a(n(v)("keys.apiKey")), 1),
                  e("th", so, a(n(v)("keys.group")), 1)
                ])
              ]),
              e("tbody", io, [
                (c(!0), y(G, null, X(o.value, (u) => (c(), y("tr", {
                  key: u.id,
                  class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700",
                  onClick: (h) => _.$emit("pick", u)
                }, [
                  e("td", uo, a(u.name), 1),
                  e("td", mo, a(n(Jt)(u.key)), 1),
                  e("td", po, [
                    u.group ? (c(), ge(bt, {
                      key: 0,
                      name: u.group.name,
                      platform: u.group.platform,
                      "subscription-type": u.group.subscription_type,
                      "rate-multiplier": u.group.rate_multiplier,
                      "user-rate-multiplier": p.userGroupRates[u.group.id]
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "user-rate-multiplier"])) : (c(), y("span", vo, "—"))
                  ])
                ], 8, co))), 128))
              ])
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), fo = { class: "space-y-4" }, _o = { class: "input-label" }, bo = { class: "space-y-1.5" }, go = ["onUpdate:modelValue", "placeholder"], xo = ["onUpdate:modelValue", "placeholder"], ko = ["title", "onClick"], Mo = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, $o = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, wo = { class: "input-label" }, Co = { class: "grid grid-cols-3 gap-3" }, Eo = ["onClick"], Po = { class: "mt-1 text-xs text-gray-400" }, Oo = { key: 0 }, So = { class: "mb-1 flex items-center justify-between" }, Ro = { class: "input-label !mb-0" }, Ao = ["disabled"], Io = ["placeholder"], To = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Vo = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, We = /* @__PURE__ */ le({
  __name: "MonitorAdvancedRequestConfig",
  props: {
    provider: {},
    apiMode: {},
    extraHeaders: {},
    bodyOverrideMode: {},
    bodyOverride: {}
  },
  emits: ["update:extraHeaders", "update:bodyOverrideMode", "update:bodyOverride"],
  setup(p, { emit: f }) {
    const v = p, x = f, { t: o } = se(), _ = C(u(v.extraHeaders)), k = C("");
    re(
      () => v.extraHeaders,
      ($) => {
        M(h(_.value), $) || (_.value = u($)), k.value = "";
      }
    );
    function u($) {
      const g = Object.entries($ || {});
      return g.length === 0 ? [{ name: "", value: "" }] : g.map(([T, A]) => ({ name: T, value: A }));
    }
    function h($) {
      const g = {};
      for (const T of $) {
        const A = T.name.trim();
        A !== "" && (g[A] = T.value);
      }
      return g;
    }
    function M($, g) {
      const T = Object.keys($), A = Object.keys(g || {});
      if (T.length !== A.length) return !1;
      for (const F of T)
        if ($[F] !== g[F]) return !1;
      return !0;
    }
    function N() {
      for (const $ of _.value) {
        const g = $.name.trim();
        if (g !== "" && (g.includes(":") || /\s/.test(g))) {
          k.value = o("admin.channelMonitor.advanced.headerNameInvalid", { name: g });
          return;
        }
      }
      k.value = "", x("update:extraHeaders", h(_.value));
    }
    function B() {
      _.value.push({ name: "", value: "" });
    }
    function K($) {
      _.value.splice($, 1), _.value.length === 0 && _.value.push({ name: "", value: "" }), N();
    }
    const S = C(P(v.bodyOverride)), t = C("");
    re(
      () => v.bodyOverride,
      ($) => {
        S.value = P($), t.value = "";
      }
    );
    function D() {
      if (v.bodyOverrideMode === "off")
        return;
      const $ = S.value.trim();
      if ($ === "") {
        x("update:bodyOverride", null), t.value = "";
        return;
      }
      try {
        const g = JSON.parse($);
        if (g === null || typeof g != "object" || Array.isArray(g)) {
          t.value = o("admin.channelMonitor.advanced.bodyJsonObjectError");
          return;
        }
        x("update:bodyOverride", g), t.value = "";
      } catch (g) {
        t.value = o("admin.channelMonitor.advanced.bodyJsonError") + ": " + (g instanceof Error ? g.message : String(g));
      }
    }
    function d() {
      const $ = S.value.trim();
      if ($ !== "")
        try {
          const g = JSON.parse($);
          S.value = JSON.stringify(g, null, 2), t.value = "", g && typeof g == "object" && !Array.isArray(g) && x("update:bodyOverride", g);
        } catch (g) {
          t.value = o("admin.channelMonitor.advanced.bodyJsonError") + ": " + (g instanceof Error ? g.message : String(g));
        }
    }
    function P($) {
      return !$ || Object.keys($).length === 0 ? "" : JSON.stringify($, null, 2);
    }
    function R($) {
      x("update:bodyOverrideMode", $), $ === "off" && x("update:bodyOverride", null);
    }
    const te = O(() => [
      { value: "off", label: o("admin.channelMonitor.advanced.bodyModeOff") },
      { value: "merge", label: o("admin.channelMonitor.advanced.bodyModeMerge") },
      { value: "replace", label: o("admin.channelMonitor.advanced.bodyModeReplace") }
    ]);
    function de($) {
      return v.bodyOverrideMode === $ ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300 dark:border-primary-400" : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    const j = O(() => {
      switch (v.bodyOverrideMode) {
        case "merge":
          return o("admin.channelMonitor.advanced.bodyModeHintMerge");
        case "replace":
          return o("admin.channelMonitor.advanced.bodyModeHintReplace");
        default:
          return o("admin.channelMonitor.advanced.bodyModeHintOff");
      }
    }), U = O(() => v.provider === J && v.apiMode === ae ? v.bodyOverrideMode === "merge" ? `{
  "max_output_tokens": 20
}` : `{
  "model": "gpt-4o-mini",
  "instructions": "You are a health check endpoint. Reply briefly.",
  "input": "Reply with exactly: ok",
  "max_output_tokens": 20,
  "stream": false
}` : v.provider === J || v.provider === be ? v.bodyOverrideMode === "merge" ? `{
  "max_tokens": 20
}` : `{
  "model": "${v.provider === be ? Te : "gpt-4o-mini"}",
  "messages": [{"role":"user","content":"Reply with exactly: ok"}],
  "max_tokens": 20,
  "stream": false
}` : v.bodyOverrideMode === "merge" ? `{
  "system": "You are Claude Code..."
}` : `{
  "model": "claude-x",
  "messages": [{"role":"user","content":"hi"}],
  "max_tokens": 10
}`);
    return ($, g) => (c(), y("div", fo, [
      e("div", null, [
        e("label", _o, a(n(o)("admin.channelMonitor.advanced.headers")), 1),
        e("div", bo, [
          (c(!0), y(G, null, X(_.value, (T, A) => (c(), y("div", {
            key: A,
            class: "flex items-center gap-2"
          }, [
            Q(e("input", {
              "onUpdate:modelValue": (F) => T.name = F,
              type: "text",
              spellcheck: "false",
              placeholder: n(o)("admin.channelMonitor.advanced.headerNamePlaceholder"),
              class: "input w-52 flex-none font-mono text-xs",
              onBlur: N
            }, null, 40, go), [
              [Y, T.name]
            ]),
            Q(e("input", {
              "onUpdate:modelValue": (F) => T.value = F,
              type: "text",
              spellcheck: "false",
              placeholder: n(o)("admin.channelMonitor.advanced.headerValuePlaceholder"),
              class: "input flex-1 font-mono text-xs",
              onBlur: N
            }, null, 40, xo), [
              [Y, T.value]
            ]),
            e("button", {
              type: "button",
              class: "flex-none rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400",
              title: n(o)("common.delete"),
              onClick: (F) => K(A)
            }, [...g[1] || (g[1] = [
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
            ])], 8, ko)
          ]))), 128)),
          e("button", {
            type: "button",
            class: "inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-500 hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
            onClick: B
          }, [
            g[2] || (g[2] = e("svg", {
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
            z(" " + a(n(o)("admin.channelMonitor.advanced.headerAddRow")), 1)
          ])
        ]),
        k.value ? (c(), y("p", Mo, a(k.value), 1)) : (c(), y("p", $o, a(n(o)("admin.channelMonitor.advanced.headersHint")), 1))
      ]),
      e("div", null, [
        e("label", wo, a(n(o)("admin.channelMonitor.advanced.bodyMode")), 1),
        e("div", Co, [
          (c(!0), y(G, null, X(te.value, (T) => (c(), y("button", {
            key: T.value,
            type: "button",
            class: q(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", de(T.value)]),
            onClick: (A) => R(T.value)
          }, a(T.label), 11, Eo))), 128))
        ]),
        e("p", Po, a(j.value), 1)
      ]),
      p.bodyOverrideMode !== "off" ? (c(), y("div", Oo, [
        e("div", So, [
          e("label", Ro, a(n(o)("admin.channelMonitor.advanced.bodyJson")), 1),
          e("button", {
            type: "button",
            class: "text-xs text-primary-600 hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline dark:text-primary-400",
            disabled: !S.value.trim(),
            onClick: d
          }, a(n(o)("admin.channelMonitor.advanced.bodyJsonFormat")), 9, Ao)
        ]),
        Q(e("textarea", {
          "onUpdate:modelValue": g[0] || (g[0] = (T) => S.value = T),
          rows: "10",
          placeholder: U.value,
          class: "input font-mono text-xs",
          style: { "white-space": "pre", "overflow-wrap": "normal", "overflow-x": "auto" },
          spellcheck: "false",
          onBlur: D
        }, null, 40, Io), [
          [Y, S.value]
        ]),
        t.value ? (c(), y("p", To, a(t.value), 1)) : (c(), y("p", Vo, a(n(o)("admin.channelMonitor.advanced.bodyJsonHint")), 1))
      ])) : I("", !0)
    ]));
  }
}), Uo = 1440 * 60;
function No(p, f) {
  return !Number.isFinite(p) || p <= 0 || !Number.isFinite(f) || f <= 0 ? 0 : Math.round(Uo / p * f);
}
const Do = { class: "input-label" }, Bo = ["placeholder"], Fo = { class: "input-label" }, Ho = {
  class: "grid gap-3 sm:grid-cols-3",
  "data-testid": "monitor-check-mode"
}, jo = ["data-testid", "aria-pressed", "disabled", "onClick"], zo = { class: "block text-sm font-semibold" }, qo = { class: "mt-0.5 block text-xs opacity-80" }, Ko = ["data-daily-requests", "data-model-count"], Go = { class: "font-semibold" }, Lo = { class: "mt-1 text-xs leading-5" }, Jo = {
  key: 1,
  "data-testid": "monitor-quota-no-generation",
  class: "mt-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200"
}, Qo = { class: "input-label" }, Yo = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Xo = ["data-testid", "aria-pressed", "onClick"], Zo = { key: 0 }, Wo = { class: "input-label" }, en = { "data-testid": "monitor-linked-account" }, tn = { class: "mt-1 text-xs text-gray-400" }, on = {
  key: 0,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, nn = {
  key: 1,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, an = {
  key: 2,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, rn = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, ln = { class: "input-label" }, sn = { class: "grid gap-3 sm:grid-cols-2" }, dn = ["aria-pressed", "onClick"], cn = { class: "block text-sm font-semibold" }, un = { class: "mt-0.5 block text-xs opacity-80" }, mn = { key: 2 }, pn = { class: "input-label" }, vn = { class: "flex gap-2" }, yn = ["placeholder"], hn = { key: 3 }, fn = { class: "input-label" }, _n = {
  key: 0,
  class: "text-red-500"
}, bn = { class: "flex gap-2" }, gn = ["required", "placeholder"], xn = {
  key: 0,
  class: "mt-1 text-xs text-gray-400"
}, kn = { key: 4 }, Mn = { class: "input-label" }, $n = ["placeholder"], wn = { key: 5 }, Cn = { class: "input-label" }, En = { class: "input-label" }, Pn = ["placeholder"], On = { class: "input-label" }, Sn = { class: "mt-1 text-xs text-gray-400" }, Rn = { class: "input-label" }, An = ["max"], In = { class: "mt-1 text-xs text-gray-400" }, Tn = { class: "flex items-center justify-between" }, Vn = { class: "input-label mb-0" }, Un = {
  key: 6,
  class: "rounded-lg border border-gray-200 bg-gray-50/50 p-3 dark:border-dark-700 dark:bg-dark-900/30"
}, Nn = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, Dn = { class: "mt-1 text-xs text-gray-400" }, Bn = { class: "mt-4 space-y-4" }, Fn = { class: "input-label" }, Hn = { class: "mt-1 text-xs text-gray-400" }, jn = { class: "flex justify-end gap-3" }, zn = ["disabled"], qn = /* @__PURE__ */ le({
  __name: "MonitorFormDialog",
  props: {
    show: { type: Boolean },
    monitor: {}
  },
  emits: ["close", "saved"],
  setup(p, { emit: f }) {
    const v = p, x = f, { t: o } = se(), _ = Re(), { providerPickerClass: k } = Ee(), u = O(() => {
      var l;
      const s = (l = _.cachedPublicSettings) == null ? void 0 : l.channel_monitor_default_interval_seconds;
      return s && s > 0 ? s : wt;
    }), h = O(() => v.monitor), M = C(!1), N = C(!1), B = C(!1), K = C([]), S = C({}), t = _e({
      name: "",
      provider: we,
      api_mode: Z,
      check_mode: $e,
      account_id: null,
      endpoint: "",
      api_key: "",
      primary_model: "",
      extra_models: [],
      group_name: "",
      interval_seconds: u.value,
      jitter_seconds: 0,
      enabled: !0,
      template_id: null,
      extra_headers: {},
      body_override_mode: "off",
      body_override: null
    }), D = O(() => t.check_mode !== $e), d = O(() => t.check_mode !== Pe), P = O(() => 1 + t.extra_models.filter((s) => s.trim()).length), R = O(() => No(t.interval_seconds, P.value)), te = O(() => new Intl.NumberFormat().format(R.value)), de = O(() => Math.max(0, (t.interval_seconds || 0) - 15));
    let j = !1;
    const U = C([]), $ = C(!1), g = O(() => {
      const s = U.value.filter((l) => l.provider !== t.provider ? !1 : t.provider !== J ? !0 : ce(l.api_mode) === t.api_mode);
      return [
        { value: "", label: o("admin.channelMonitor.templateField.none") },
        ...s.map((l) => ({ value: String(l.id), label: ye(l) }))
      ];
    });
    async function T() {
      if (!(U.value.length > 0)) {
        $.value = !0;
        try {
          const { items: s } = await L.channelMonitorTemplate.list();
          U.value = s;
        } catch (s) {
          console.warn("load monitor templates failed", s);
        } finally {
          $.value = !1;
        }
      }
    }
    const A = O({
      get: () => t.template_id == null ? "" : String(t.template_id),
      set: (s) => {
        if (s === "") {
          t.template_id = null;
          return;
        }
        const l = Number(s);
        if (!Number.isFinite(l)) return;
        t.template_id = l;
        const i = U.value.find((H) => H.id === l);
        i && (j = !0, t.api_mode = ce(i.api_mode), t.template_id = l, t.extra_headers = { ...i.extra_headers || {} }, t.body_override_mode = i.body_override_mode, t.body_override = i.body_override ? { ...i.body_override } : null, j = !1);
      }
    }), F = O(() => [
      {
        value: Z,
        label: o("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: o("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ae,
        label: o("admin.channelMonitor.form.apiModeResponses"),
        hint: o("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    function ce(s) {
      return s === ae ? ae : Z;
    }
    function xe(s) {
      return t.api_mode === s ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ye(s) {
      if (s.provider !== J) return s.name;
      const l = ce(s.api_mode) === ae ? "admin.channelMonitor.form.apiModeResponses" : "admin.channelMonitor.form.apiModeChatCompletions";
      return `${s.name} · ${o(l)}`;
    }
    function he() {
      t.template_id = null, t.extra_headers = {}, t.body_override_mode = "off", t.body_override = null;
    }
    const ke = O(() => qe.map(({ value: s }) => ({
      value: s,
      label: o(`monitorCommon.providers.${s}`)
    }))), ue = {
      [Xe]: $t,
      [Ye]: Mt,
      [Qe]: kt,
      [Je]: xt
    }, fe = O(() => [
      {
        value: $e,
        label: o("admin.channelMonitor.form.checkModeProbe"),
        hint: o("admin.channelMonitor.form.checkModeProbeHint"),
        // antigravity 无探活 adapter，仅配额模式。
        disabled: t.provider === Oe
      },
      {
        value: Pe,
        label: o("admin.channelMonitor.form.checkModeQuota"),
        hint: o("admin.channelMonitor.form.checkModeQuotaHint"),
        disabled: !1
      },
      {
        value: Ct,
        label: o("admin.channelMonitor.form.checkModeQuotaProbe"),
        hint: o("admin.channelMonitor.form.checkModeQuotaProbeHint"),
        // antigravity 无探活 adapter，只支持配额模式。
        disabled: t.provider === Oe
      }
    ]);
    function me(s) {
      return t.check_mode === s ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function Me(s) {
      var l;
      (l = fe.value.find((i) => i.value === s)) != null && l.disabled || (t.check_mode = s, D.value || (t.account_id = null));
    }
    const oe = C([]), E = C(!1), r = C(""), m = C(!1), b = C(null);
    let ie = 0, pe = null;
    const Ae = /* @__PURE__ */ new Set(), Ue = O(() => {
      const s = oe.value.map((i) => ({
        value: String(i.id),
        label: `${i.name} (#${i.id})`
      })), l = b.value;
      return l && !oe.value.some((i) => i.id === l.id) && s.unshift({ value: String(l.id), label: `${l.name} (#${l.id})` }), s;
    }), Ne = O({
      get: () => t.account_id == null ? "" : String(t.account_id),
      set: (s) => {
        if (s === "") {
          t.account_id = null, b.value = null, m.value = !1;
          return;
        }
        const l = Number(s);
        Number.isFinite(l) && (t.account_id = l, b.value = oe.value.find((i) => i.id === l) ?? b.value);
      }
    });
    async function De(s = "") {
      if (!D.value || !v.show) return;
      r.value = s;
      const l = ++ie;
      pe == null || pe.abort();
      const i = new AbortController();
      pe = i, E.value = !0;
      try {
        const H = await L.accounts.list(
          1,
          50,
          { platform: t.provider, ...s ? { search: s } : {} },
          { signal: i.signal }
        );
        if (l !== ie) return;
        oe.value = (H.items || []).map((ne) => ({ id: ne.id, name: ne.name })), await et();
      } catch (H) {
        if (i.signal.aborted) return;
        console.warn("load linked accounts failed", H), s || (oe.value = []);
      } finally {
        l === ie && (E.value = !1);
      }
    }
    async function et() {
      var l;
      const s = t.account_id;
      if (!(s == null || !D.value) && !(oe.value.some((i) => i.id === s) || ((l = b.value) == null ? void 0 : l.id) === s) && !Ae.has(s)) {
        Ae.add(s);
        try {
          const i = await L.accounts.getById(s);
          if (t.account_id !== s) return;
          if (String(i.platform) !== t.provider) {
            t.account_id = null, b.value = null, m.value = !0;
            return;
          }
          b.value = { id: i.id, name: i.name };
        } catch {
          t.account_id === s && (t.account_id = null, b.value = null, m.value = !0);
        }
      }
    }
    function tt(s) {
      De(s);
    }
    re(
      () => [v.show, t.provider, t.check_mode],
      ([s, l], i) => {
        const [H, ne] = i ?? [];
        if (!s) {
          pe == null || pe.abort();
          return;
        }
        (s !== H || l !== ne) && (Ae.clear(), m.value = !1, b.value = null), De();
      },
      { immediate: !0 }
    );
    function ot(s) {
      if (t.provider === s) return;
      const l = t.provider, i = l === be && t.endpoint === je, H = l === be && t.primary_model === Te, ne = !!ue[l] && t.endpoint === ue[l];
      if (t.provider = s, t.account_id = null, b.value = null, m.value = !1, s === Oe && t.check_mode !== Pe && (t.check_mode = Pe), s === be) {
        t.endpoint.trim() || (t.endpoint = je), t.primary_model.trim() || (t.primary_model = Te);
        return;
      }
      (i || ne) && (t.endpoint = ""), H && (t.primary_model = "");
      const Fe = ue[s];
      Fe && !t.endpoint.trim() && (t.endpoint = Fe);
    }
    re(() => t.provider, () => {
      j || (t.api_key = "", t.provider !== J && (t.api_mode = Z), he());
    }, { flush: "sync" }), re(() => t.api_mode, () => {
      j || t.provider === J && he();
    }, { flush: "sync" });
    function nt() {
      j = !0, t.name = "", t.provider = we, t.api_mode = Z, t.check_mode = $e, t.account_id = null, b.value = null, m.value = !1, t.endpoint = "", t.api_key = "", t.primary_model = "", t.extra_models = [], t.group_name = "", t.interval_seconds = u.value, t.jitter_seconds = 0, t.enabled = !0, t.template_id = null, t.extra_headers = {}, t.body_override_mode = "off", t.body_override = null, j = !1;
    }
    function at(s) {
      j = !0, t.name = s.name, t.provider = s.provider, t.api_mode = ce(s.api_mode), t.check_mode = s.check_mode || $e, t.account_id = s.account_id ?? null, t.endpoint = s.endpoint, t.api_key = "", t.primary_model = s.primary_model, t.extra_models = [...s.extra_models || []], t.group_name = s.group_name || "", t.interval_seconds = s.interval_seconds || u.value, t.jitter_seconds = s.jitter_seconds || 0, t.enabled = s.enabled, t.template_id = s.template_id ?? null, t.extra_headers = { ...s.extra_headers || {} }, t.body_override_mode = s.body_override_mode || "off", t.body_override = s.body_override ? { ...s.body_override } : null, j = !1;
    }
    re(
      () => [v.show, v.monitor],
      ([s, l]) => {
        s && (T(), l ? at(l) : nt());
      },
      { immediate: !0 }
    );
    function rt() {
      t.endpoint = window.location.origin;
    }
    async function lt() {
      if (N.value = !0, !(K.value.length > 0)) {
        B.value = !0;
        try {
          const [s, l] = await Promise.all([
            Ut.list(1, 100, { status: "active" }),
            Bt.getUserGroupRates()
          ]), i = s.items || [], H = Date.now();
          K.value = i.filter((ne) => ne.status !== "active" ? !1 : ne.expires_at ? new Date(ne.expires_at).getTime() > H : !0), S.value = l;
        } catch (s) {
          _.showError(W(s, o("admin.channelMonitor.form.noActiveKey")));
        } finally {
          B.value = !1;
        }
      }
    }
    function st(s) {
      t.api_key = s.key, N.value = !1;
    }
    function Be() {
      return {
        name: t.name.trim(),
        provider: t.provider,
        api_mode: t.provider === J ? t.api_mode : Z,
        check_mode: t.check_mode,
        account_id: D.value ? t.account_id : null,
        endpoint: d.value ? t.endpoint.trim() : "",
        api_key: d.value ? t.api_key.trim() : "",
        primary_model: d.value ? t.primary_model.trim() : "quota",
        extra_models: d.value ? t.extra_models : [],
        group_name: t.group_name.trim(),
        enabled: t.enabled,
        interval_seconds: t.interval_seconds,
        jitter_seconds: t.jitter_seconds || 0,
        template_id: d.value ? t.template_id : null,
        extra_headers: t.extra_headers,
        body_override_mode: t.body_override_mode,
        body_override: t.body_override
      };
    }
    async function it() {
      if (!M.value) {
        if (!t.name.trim()) {
          _.showError(o("admin.channelMonitor.nameRequired"));
          return;
        }
        if (D.value && t.account_id == null) {
          _.showError(o("admin.channelMonitor.linkedAccountRequired"));
          return;
        }
        if (d.value && !t.primary_model.trim()) {
          _.showError(o("admin.channelMonitor.primaryModelRequired"));
          return;
        }
        M.value = !0;
        try {
          const s = h.value;
          if (s) {
            const { api_key: l, ...i } = Be(), H = { ...i };
            l && (H.api_key = l), d.value && t.template_id == null && (H.clear_template = !0, delete H.template_id), await L.channelMonitor.update(s.id, H), _.showSuccess(o("admin.channelMonitor.updateSuccess"));
          } else
            await L.channelMonitor.create(Be()), _.showSuccess(o("admin.channelMonitor.createSuccess"));
          x("saved"), x("close");
        } catch (s) {
          _.showError(W(s, o("common.error")));
        } finally {
          M.value = !1;
        }
      }
    }
    return (s, l) => (c(), y(G, null, [
      w(Ce, {
        show: p.show,
        title: h.value ? n(o)("admin.channelMonitor.editTitle") : n(o)("admin.channelMonitor.createTitle"),
        width: "wide",
        onClose: l[15] || (l[15] = (i) => s.$emit("close"))
      }, {
        footer: V(() => [
          e("div", jn, [
            e("button", {
              onClick: l[14] || (l[14] = (i) => s.$emit("close")),
              type: "button",
              class: "btn btn-secondary"
            }, a(n(o)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "channel-monitor-form",
              disabled: M.value,
              class: "btn btn-primary"
            }, a(M.value ? n(o)("common.submitting") : h.value ? n(o)("common.update") : n(o)("common.create")), 9, zn)
          ])
        ]),
        default: V(() => [
          e("form", {
            id: "channel-monitor-form",
            onSubmit: ze(it, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Do, [
                z(a(n(o)("admin.channelMonitor.form.name")) + " ", 1),
                l[17] || (l[17] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              Q(e("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (i) => t.name = i),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(o)("admin.channelMonitor.form.namePlaceholder")
              }, null, 8, Bo), [
                [Y, t.name]
              ])
            ]),
            e("div", null, [
              e("label", Fo, a(n(o)("admin.channelMonitor.form.checkMode")), 1),
              e("div", Ho, [
                (c(!0), y(G, null, X(fe.value, (i) => (c(), y("button", {
                  key: i.value,
                  type: "button",
                  "data-testid": `monitor-check-mode-${i.value}`,
                  "aria-pressed": t.check_mode === i.value,
                  disabled: i.disabled,
                  class: q(["rounded-lg border-2 px-3 py-2 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50", me(i.value)]),
                  onClick: (H) => Me(i.value)
                }, [
                  e("span", zo, a(i.label), 1),
                  e("span", qo, a(i.hint), 1)
                ], 10, jo))), 128))
              ]),
              d.value ? (c(), y("div", {
                key: 0,
                "data-testid": "monitor-probe-billing-warning",
                "data-daily-requests": R.value,
                "data-model-count": P.value,
                class: "mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200"
              }, [
                e("p", Go, a(n(o)("admin.channelMonitor.form.probeBillingWarning")), 1),
                e("p", Lo, a(n(o)("admin.channelMonitor.form.probeDailyEstimate", { requests: te.value, models: P.value })), 1)
              ], 8, Ko)) : (c(), y("div", Jo, a(n(o)("admin.channelMonitor.form.quotaNoGeneration")), 1))
            ]),
            e("div", null, [
              e("label", Qo, [
                z(a(n(o)("admin.channelMonitor.form.provider")) + " ", 1),
                l[18] || (l[18] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Yo, [
                (c(!0), y(G, null, X(ke.value, (i) => (c(), y("button", {
                  key: i.value,
                  type: "button",
                  "data-testid": `monitor-provider-${i.value}`,
                  "aria-pressed": t.provider === i.value,
                  class: q(["flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors", n(k)(i.value, t.provider === i.value)]),
                  onClick: (H) => ot(i.value)
                }, [
                  w(gt, {
                    provider: i.value,
                    size: 18
                  }, null, 8, ["provider"]),
                  e("span", null, a(i.label), 1)
                ], 10, Xo))), 128))
              ])
            ]),
            D.value ? (c(), y("div", Zo, [
              e("label", Wo, [
                z(a(n(o)("admin.channelMonitor.form.linkedAccount")) + " ", 1),
                l[19] || (l[19] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", en, [
                w(Se, {
                  modelValue: Ne.value,
                  "onUpdate:modelValue": l[1] || (l[1] = (i) => Ne.value = i),
                  options: Ue.value,
                  placeholder: n(o)("admin.channelMonitor.form.linkedAccountPlaceholder"),
                  remote: "",
                  loading: E.value,
                  onSearch: tt
                }, null, 8, ["modelValue", "options", "placeholder", "loading"])
              ]),
              e("p", tn, a(n(o)("admin.channelMonitor.form.linkedAccountHint")), 1),
              t.provider === n(J) ? (c(), y("p", on, a(n(o)("admin.channelMonitor.form.openAIQuotaProbeHint")), 1)) : I("", !0),
              m.value ? (c(), y("p", nn, a(n(o)("admin.channelMonitor.form.linkedAccountMissing")), 1)) : I("", !0),
              Ue.value.length === 0 && !E.value && !r.value ? (c(), y("p", an, a(n(o)("admin.channelMonitor.form.linkedAccountEmpty")), 1)) : I("", !0)
            ])) : I("", !0),
            t.provider === n(J) && d.value ? (c(), y("div", rn, [
              e("label", ln, a(n(o)("admin.channelMonitor.form.apiMode")), 1),
              e("div", sn, [
                (c(!0), y(G, null, X(F.value, (i) => (c(), y("button", {
                  key: i.value,
                  type: "button",
                  "aria-pressed": t.api_mode === i.value,
                  class: q(["rounded-lg border-2 px-3 py-2 text-left transition-colors", xe(i.value)]),
                  onClick: (H) => t.api_mode = i.value
                }, [
                  e("span", cn, a(i.label), 1),
                  e("span", un, a(i.hint), 1)
                ], 10, dn))), 128))
              ])
            ])) : I("", !0),
            d.value ? (c(), y("div", mn, [
              e("label", pn, [
                z(a(n(o)("admin.channelMonitor.form.endpoint")) + " ", 1),
                l[20] || (l[20] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", vn, [
                Q(e("input", {
                  "onUpdate:modelValue": l[2] || (l[2] = (i) => t.endpoint = i),
                  "data-testid": "monitor-endpoint",
                  type: "text",
                  required: "",
                  class: "input flex-1",
                  placeholder: n(o)("admin.channelMonitor.form.endpointPlaceholder")
                }, null, 8, yn), [
                  [Y, t.endpoint]
                ]),
                e("button", {
                  type: "button",
                  onClick: rt,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(o)("admin.channelMonitor.form.useCurrentDomain")), 1)
              ])
            ])) : I("", !0),
            d.value ? (c(), y("div", hn, [
              e("label", fn, [
                z(a(n(o)("admin.channelMonitor.form.apiKey")), 1),
                h.value ? I("", !0) : (c(), y("span", _n, " *"))
              ]),
              e("div", bn, [
                Q(e("input", {
                  "onUpdate:modelValue": l[3] || (l[3] = (i) => t.api_key = i),
                  type: "password",
                  required: !h.value,
                  class: "input flex-1",
                  placeholder: h.value ? n(o)("admin.channelMonitor.form.apiKeyEditPlaceholder") : n(o)("admin.channelMonitor.form.apiKeyPlaceholder")
                }, null, 8, gn), [
                  [Y, t.api_key]
                ]),
                e("button", {
                  type: "button",
                  onClick: lt,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(o)("admin.channelMonitor.form.useMyKey")), 1)
              ]),
              h.value && h.value.api_key_masked ? (c(), y("p", xn, a(h.value.api_key_masked), 1)) : I("", !0)
            ])) : I("", !0),
            d.value ? (c(), y("div", kn, [
              e("label", Mn, [
                z(a(n(o)("admin.channelMonitor.form.primaryModel")) + " ", 1),
                l[21] || (l[21] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              Q(e("input", {
                "onUpdate:modelValue": l[4] || (l[4] = (i) => t.primary_model = i),
                "data-testid": "monitor-primary-model",
                type: "text",
                required: "",
                class: q(["input font-medium", n(ft)(t.provider)]),
                placeholder: n(o)("admin.channelMonitor.form.primaryModelPlaceholder")
              }, null, 10, $n), [
                [Y, t.primary_model]
              ])
            ])) : I("", !0),
            d.value ? (c(), y("div", wn, [
              e("label", Cn, a(n(o)("admin.channelMonitor.form.extraModels")), 1),
              w(_t, {
                models: t.extra_models,
                platform: t.provider,
                placeholder: n(o)("admin.channelMonitor.form.extraModelsPlaceholder"),
                "onUpdate:models": l[5] || (l[5] = (i) => t.extra_models = i)
              }, null, 8, ["models", "platform", "placeholder"])
            ])) : I("", !0),
            e("div", null, [
              e("label", En, a(n(o)("admin.channelMonitor.form.groupName")), 1),
              Q(e("input", {
                "onUpdate:modelValue": l[6] || (l[6] = (i) => t.group_name = i),
                type: "text",
                class: "input",
                placeholder: n(o)("admin.channelMonitor.form.groupNamePlaceholder")
              }, null, 8, Pn), [
                [Y, t.group_name]
              ])
            ]),
            e("div", null, [
              e("label", On, [
                z(a(n(o)("admin.channelMonitor.form.intervalSeconds")) + " ", 1),
                l[22] || (l[22] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              Q(e("input", {
                "onUpdate:modelValue": l[7] || (l[7] = (i) => t.interval_seconds = i),
                type: "number",
                min: "15",
                max: "3600",
                required: "",
                class: "input"
              }, null, 512), [
                [
                  Y,
                  t.interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Sn, a(n(o)("admin.channelMonitor.form.intervalSecondsHint")), 1)
            ]),
            e("div", null, [
              e("label", Rn, a(n(o)("admin.channelMonitor.form.jitterSeconds")), 1),
              Q(e("input", {
                "onUpdate:modelValue": l[8] || (l[8] = (i) => t.jitter_seconds = i),
                type: "number",
                min: "0",
                max: de.value,
                class: "input"
              }, null, 8, An), [
                [
                  Y,
                  t.jitter_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", In, a(n(o)("admin.channelMonitor.form.jitterSecondsHint")), 1)
            ]),
            e("div", Tn, [
              e("label", Vn, a(n(o)("admin.channelMonitor.form.enabled")), 1),
              w(Le, {
                modelValue: t.enabled,
                "onUpdate:modelValue": l[9] || (l[9] = (i) => t.enabled = i)
              }, null, 8, ["modelValue"])
            ]),
            d.value ? (c(), y("details", Un, [
              e("summary", Nn, a(n(o)("admin.channelMonitor.advanced.section")), 1),
              e("p", Dn, a(n(o)("admin.channelMonitor.advanced.sectionHint")), 1),
              e("div", Bn, [
                e("div", null, [
                  e("label", Fn, a(n(o)("admin.channelMonitor.templateField.label")), 1),
                  w(Se, {
                    modelValue: A.value,
                    "onUpdate:modelValue": l[10] || (l[10] = (i) => A.value = i),
                    options: g.value,
                    placeholder: n(o)("admin.channelMonitor.templateField.placeholder")
                  }, null, 8, ["modelValue", "options", "placeholder"]),
                  e("p", Hn, a(n(o)("admin.channelMonitor.templateField.applyHint")), 1)
                ]),
                w(We, {
                  provider: t.provider,
                  "api-mode": t.api_mode,
                  "extra-headers": t.extra_headers,
                  "body-override-mode": t.body_override_mode,
                  "body-override": t.body_override,
                  "onUpdate:extraHeaders": l[11] || (l[11] = (i) => t.extra_headers = i),
                  "onUpdate:bodyOverrideMode": l[12] || (l[12] = (i) => t.body_override_mode = i),
                  "onUpdate:bodyOverride": l[13] || (l[13] = (i) => t.body_override = i)
                }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
              ])
            ])) : I("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      w(ho, {
        show: N.value,
        loading: B.value,
        keys: K.value,
        provider: t.provider,
        "user-group-rates": S.value,
        onClose: l[16] || (l[16] = (i) => N.value = !1),
        onPick: st
      }, null, 8, ["show", "loading", "keys", "provider", "user-group-rates"])
    ], 64));
  }
}), Kn = { class: "mb-3 text-sm text-gray-600 dark:text-gray-400" }, Gn = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400"
}, Ln = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-400"
}, Jn = { key: 2 }, Qn = { class: "mb-2 flex items-center gap-3 text-xs" }, Yn = { class: "ml-auto text-gray-500 dark:text-gray-400" }, Xn = { class: "max-h-80 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-700" }, Zn = ["onClick"], Wn = ["checked", "onClick"], ea = { class: "font-medium text-gray-900 dark:text-white" }, ta = { class: "text-xs text-gray-400" }, oa = {
  key: 0,
  class: "text-xs text-gray-400"
}, na = {
  key: 1,
  class: "ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-dark-700 dark:text-gray-400"
}, aa = { class: "flex justify-end gap-2" }, ra = ["disabled"], la = /* @__PURE__ */ le({
  __name: "MonitorTemplateApplyPickerDialog",
  props: {
    show: { type: Boolean },
    templateId: {},
    templateName: {}
  },
  emits: ["close", "applied"],
  setup(p, { emit: f }) {
    const v = p, x = f, { t: o } = se(), _ = Re(), k = C(!1), u = C(!1), h = C([]), M = C([]), N = O(() => new Set(M.value));
    re(
      () => [v.show, v.templateId],
      ([d, P]) => {
        !d || P == null || B(P);
      },
      { immediate: !0 }
    );
    async function B(d) {
      k.value = !0, h.value = [], M.value = [];
      try {
        const { items: P } = await L.channelMonitorTemplate.listAssociatedMonitors(d);
        h.value = P, M.value = P.map((R) => R.id);
      } catch (P) {
        _.showError(W(P, o("common.error")));
      } finally {
        k.value = !1;
      }
    }
    function K(d) {
      const P = M.value.indexOf(d);
      P >= 0 ? M.value.splice(P, 1) : M.value.push(d);
    }
    function S() {
      M.value = h.value.map((d) => d.id);
    }
    function t() {
      M.value = [];
    }
    async function D() {
      if (!(v.templateId == null || M.value.length === 0 || u.value)) {
        u.value = !0;
        try {
          const { affected: d } = await L.channelMonitorTemplate.apply(
            v.templateId,
            [...M.value]
          );
          _.showSuccess(o("admin.channelMonitor.template.applySuccess", { n: d })), x("applied", d), x("close");
        } catch (d) {
          _.showError(W(d, o("common.error")));
        } finally {
          u.value = !1;
        }
      }
    }
    return (d, P) => (c(), ge(Ce, {
      show: p.show,
      title: n(o)("admin.channelMonitor.template.applyPickerTitle", { name: p.templateName }),
      onClose: P[1] || (P[1] = (R) => d.$emit("close"))
    }, {
      footer: V(() => [
        e("div", aa, [
          e("button", {
            class: "btn btn-secondary",
            onClick: P[0] || (P[0] = (R) => d.$emit("close"))
          }, a(n(o)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: u.value || M.value.length === 0,
            onClick: D
          }, a(u.value ? n(o)("common.submitting") : n(o)("admin.channelMonitor.template.applyPickerConfirm", { n: M.value.length })), 9, ra)
        ])
      ]),
      default: V(() => [
        e("p", Kn, a(n(o)("admin.channelMonitor.template.applyPickerHint")), 1),
        k.value ? (c(), y("div", Gn, a(n(o)("common.loading")), 1)) : h.value.length === 0 ? (c(), y("div", Ln, a(n(o)("admin.channelMonitor.template.applyPickerEmpty")), 1)) : (c(), y("div", Jn, [
          e("div", Qn, [
            e("button", {
              type: "button",
              class: "text-primary-600 hover:underline dark:text-primary-400",
              onClick: S
            }, a(n(o)("common.selectAll")), 1),
            e("button", {
              type: "button",
              class: "text-gray-500 hover:underline dark:text-gray-400",
              onClick: t
            }, a(n(o)("admin.channelMonitor.template.selectNone")), 1),
            e("span", Yn, a(n(o)("admin.channelMonitor.template.selectedCount", {
              n: M.value.length,
              total: h.value.length
            })), 1)
          ]),
          e("ul", Xn, [
            (c(!0), y(G, null, X(h.value, (R) => (c(), y("li", {
              key: R.id,
              class: "flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-dark-800",
              onClick: (te) => K(R.id)
            }, [
              e("input", {
                type: "checkbox",
                checked: N.value.has(R.id),
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                onClick: ze((te) => K(R.id), ["stop"])
              }, null, 8, Wn),
              e("span", ea, a(R.name), 1),
              e("span", ta, a(R.provider), 1),
              R.provider === "openai" ? (c(), y("span", oa, a(R.api_mode), 1)) : I("", !0),
              R.enabled ? I("", !0) : (c(), y("span", na, a(n(o)("admin.channelMonitor.onlyDisabled").replace(/^仅|^Only /, "")), 1))
            ], 8, Zn))), 128))
          ])
        ]))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), sa = { class: "mb-4 border-b border-gray-200 dark:border-dark-700" }, ia = {
  role: "tablist",
  class: "flex flex-wrap gap-1"
}, da = ["aria-selected", "onClick"], ca = {
  key: 0,
  class: "ml-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-dark-700"
}, ua = {
  key: 0,
  class: "space-y-2"
}, ma = { class: "flex justify-end" }, pa = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-400"
}, va = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400"
}, ya = { class: "flex items-start justify-between gap-3" }, ha = { class: "min-w-0 flex-1" }, fa = { class: "flex items-center gap-2" }, _a = { class: "font-medium text-gray-900 dark:text-white" }, ba = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, ga = {
  key: 0,
  class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400"
}, xa = { class: "mt-1 text-xs text-gray-400" }, ka = { class: "flex flex-shrink-0 gap-2" }, Ma = ["disabled", "title", "onClick"], $a = ["onClick"], wa = ["onClick"], Ca = {
  key: 1,
  class: "space-y-4"
}, Ea = { class: "input-label" }, Pa = ["placeholder"], Oa = { key: 0 }, Sa = { class: "input-label" }, Ra = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Aa = ["onClick"], Ia = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, Ta = { class: "input-label" }, Va = { class: "grid gap-3 sm:grid-cols-2" }, Ua = ["onClick"], Na = { class: "block text-sm font-semibold" }, Da = { class: "mt-0.5 block text-xs opacity-80" }, Ba = { class: "input-label" }, Fa = ["placeholder"], Ha = { class: "flex w-full items-center justify-between" }, ja = { class: "flex gap-2" }, za = ["disabled"], qa = /* @__PURE__ */ le({
  __name: "MonitorTemplateManagerDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "updated"],
  setup(p, { emit: f }) {
    const v = p, x = f, { t: o } = se(), _ = Re(), { providerPickerClass: k } = Ee(), u = O(() => [
      { value: we, label: o("monitorCommon.providers.anthropic") },
      { value: J, label: o("monitorCommon.providers.openai") },
      { value: Et, label: o("monitorCommon.providers.gemini") },
      { value: be, label: o("monitorCommon.providers.grok") },
      { value: Oe, label: o("monitorCommon.providers.antigravity") },
      { value: Xe, label: o("monitorCommon.providers.kimi") },
      { value: Ye, label: o("monitorCommon.providers.zhipu") },
      { value: Qe, label: o("monitorCommon.providers.deepseek") },
      { value: Je, label: o("monitorCommon.providers.minimax") },
      { value: Pt, label: o("monitorCommon.providers.opencode_go") }
    ]), h = C(we), M = C([]), N = C(!1);
    let B = 0;
    dt(() => {
      B++;
    });
    const K = O(
      () => M.value.filter((r) => r.provider === h.value)
    ), S = O(() => {
      const r = Object.fromEntries(Ot.map((m) => [m, 0]));
      for (const m of M.value) r[m.provider]++;
      return r;
    }), t = C(null), D = C(!1), d = _e(P(we));
    function P(r) {
      return {
        id: null,
        name: "",
        provider: r,
        api_mode: Z,
        description: "",
        extra_headers: {},
        body_override_mode: "off",
        body_override: null
      };
    }
    function R(r) {
      d.id = r.id, d.name = r.name, d.provider = r.provider, d.api_mode = me(r.api_mode), d.description = r.description, d.extra_headers = { ...r.extra_headers || {} }, d.body_override_mode = r.body_override_mode, d.body_override = r.body_override ? { ...r.body_override } : null;
    }
    function te() {
      Object.assign(d, P(h.value)), t.value = "new";
    }
    function de(r) {
      R(r), t.value = r.id;
    }
    function j() {
      t.value = null;
    }
    async function U() {
      const r = ++B;
      N.value = !0;
      try {
        const { items: m } = await L.channelMonitorTemplate.list();
        if (r !== B) return;
        M.value = m;
      } catch (m) {
        if (r !== B) return;
        _.showError(W(m, o("common.error")));
      } finally {
        r === B && (N.value = !1);
      }
    }
    re(
      () => v.show,
      (r) => {
        r ? (t.value = null, U()) : (B++, N.value = !1);
      },
      { immediate: !0 }
    );
    async function $() {
      if (!D.value) {
        if (!d.name.trim()) {
          _.showError(o("admin.channelMonitor.template.missingName"));
          return;
        }
        D.value = !0;
        try {
          t.value === "new" ? (await L.channelMonitorTemplate.create({
            name: d.name.trim(),
            provider: d.provider,
            api_mode: d.provider === J ? d.api_mode : Z,
            description: d.description.trim(),
            extra_headers: d.extra_headers,
            body_override_mode: d.body_override_mode,
            body_override: d.body_override
          }), _.showSuccess(o("admin.channelMonitor.template.createSuccess"))) : typeof t.value == "number" && (await L.channelMonitorTemplate.update(t.value, {
            name: d.name.trim(),
            api_mode: d.provider === J ? d.api_mode : Z,
            description: d.description.trim(),
            extra_headers: d.extra_headers,
            body_override_mode: d.body_override_mode,
            body_override: d.body_override
          }), _.showSuccess(o("admin.channelMonitor.template.updateSuccess"))), await U(), x("updated"), t.value = null;
        } catch (r) {
          _.showError(W(r, o("common.error")));
        } finally {
          D.value = !1;
        }
      }
    }
    const g = _e({
      show: !1,
      tpl: null
    });
    function T(r) {
      g.tpl = r, g.show = !0;
    }
    async function A(r) {
      await U(), x("updated");
    }
    const F = _e({
      show: !1,
      tpl: null
    });
    function ce(r) {
      F.tpl = r, F.show = !0;
    }
    const xe = O(() => {
      const r = F.tpl;
      return r ? o("admin.channelMonitor.template.deleteConfirm", {
        name: r.name,
        n: r.associated_monitors
      }) : "";
    });
    async function ye() {
      const r = F.tpl;
      if (F.show = !1, !!r)
        try {
          await L.channelMonitorTemplate.del(r.id), _.showSuccess(o("admin.channelMonitor.template.deleteSuccess")), await U(), x("updated");
        } catch (m) {
          _.showError(W(m, o("common.error")));
        }
    }
    function he(r) {
      return h.value === r ? "border-b-2 border-primary-500 text-primary-600 dark:text-primary-400" : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";
    }
    function ke(r) {
      switch (r) {
        case "merge":
          return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
        case "replace":
          return "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300";
        default:
          return "bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300";
      }
    }
    function ue(r) {
      return o(`admin.channelMonitor.advanced.bodyMode${r.charAt(0).toUpperCase()}${r.slice(1)}`);
    }
    const fe = O(() => [
      {
        value: Z,
        label: o("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: o("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ae,
        label: o("admin.channelMonitor.form.apiModeResponses"),
        hint: o("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    re(() => d.provider, (r) => {
      r !== J && (d.api_mode = Z);
    });
    function me(r) {
      return r === ae ? ae : Z;
    }
    function Me(r) {
      return d.api_mode === r ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function oe(r) {
      return me(r) === ae ? o("admin.channelMonitor.form.apiModeResponses") : o("admin.channelMonitor.form.apiModeChatCompletions");
    }
    function E(r) {
      return me(r) === ae ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
    }
    return (r, m) => (c(), y(G, null, [
      w(Ce, {
        show: p.show,
        title: n(o)("admin.channelMonitor.template.managerTitle"),
        width: "wide",
        onClose: m[6] || (m[6] = (b) => r.$emit("close"))
      }, {
        footer: V(() => [
          e("div", Ha, [
            e("div", null, [
              t.value ? (c(), y("button", {
                key: 0,
                class: "btn btn-secondary",
                onClick: j
              }, a(n(o)("common.back")), 1)) : I("", !0)
            ]),
            e("div", ja, [
              e("button", {
                class: "btn btn-secondary",
                onClick: m[5] || (m[5] = (b) => r.$emit("close"))
              }, a(n(o)("common.close")), 1),
              t.value ? (c(), y("button", {
                key: 0,
                class: "btn btn-primary",
                disabled: D.value,
                onClick: $
              }, a(D.value ? n(o)("common.submitting") : t.value === "new" ? n(o)("common.create") : n(o)("common.update")), 9, za)) : I("", !0)
            ])
          ])
        ]),
        default: V(() => [
          e("div", sa, [
            e("div", ia, [
              (c(!0), y(G, null, X(u.value, (b) => (c(), y("button", {
                key: b.value,
                type: "button",
                role: "tab",
                "aria-selected": h.value === b.value,
                class: q(["px-4 py-2 text-sm font-medium transition-colors", he(b.value)]),
                onClick: (ie) => h.value = b.value
              }, [
                z(a(b.label) + " ", 1),
                S.value[b.value] > 0 ? (c(), y("span", ca, a(S.value[b.value]), 1)) : I("", !0)
              ], 10, da))), 128))
            ])
          ]),
          t.value ? (c(), y("div", Ca, [
            e("div", null, [
              e("label", Ea, [
                z(a(n(o)("admin.channelMonitor.template.form.name")) + " ", 1),
                m[9] || (m[9] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              Q(e("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (b) => d.name = b),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(o)("admin.channelMonitor.template.form.namePlaceholder")
              }, null, 8, Pa), [
                [Y, d.name]
              ])
            ]),
            t.value === "new" ? (c(), y("div", Oa, [
              e("label", Sa, [
                z(a(n(o)("admin.channelMonitor.form.provider")) + " ", 1),
                m[10] || (m[10] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Ra, [
                (c(!0), y(G, null, X(u.value, (b) => (c(), y("button", {
                  key: b.value,
                  type: "button",
                  class: q(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", n(k)(b.value, d.provider === b.value)]),
                  onClick: (ie) => d.provider = b.value
                }, a(b.label), 11, Aa))), 128))
              ])
            ])) : I("", !0),
            d.provider === n(J) ? (c(), y("div", Ia, [
              e("label", Ta, a(n(o)("admin.channelMonitor.form.apiMode")), 1),
              e("div", Va, [
                (c(!0), y(G, null, X(fe.value, (b) => (c(), y("button", {
                  key: b.value,
                  type: "button",
                  class: q(["rounded-lg border-2 px-3 py-2 text-left transition-colors", Me(b.value)]),
                  onClick: (ie) => d.api_mode = b.value
                }, [
                  e("span", Na, a(b.label), 1),
                  e("span", Da, a(b.hint), 1)
                ], 10, Ua))), 128))
              ])
            ])) : I("", !0),
            e("div", null, [
              e("label", Ba, a(n(o)("admin.channelMonitor.template.form.description")), 1),
              Q(e("input", {
                "onUpdate:modelValue": m[1] || (m[1] = (b) => d.description = b),
                type: "text",
                class: "input",
                placeholder: n(o)("admin.channelMonitor.template.form.descriptionPlaceholder")
              }, null, 8, Fa), [
                [Y, d.description]
              ])
            ]),
            w(We, {
              provider: d.provider,
              "api-mode": d.api_mode,
              "extra-headers": d.extra_headers,
              "body-override-mode": d.body_override_mode,
              "body-override": d.body_override,
              "onUpdate:extraHeaders": m[2] || (m[2] = (b) => d.extra_headers = b),
              "onUpdate:bodyOverrideMode": m[3] || (m[3] = (b) => d.body_override_mode = b),
              "onUpdate:bodyOverride": m[4] || (m[4] = (b) => d.body_override = b)
            }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
          ])) : (c(), y("div", ua, [
            e("div", ma, [
              e("button", {
                class: "btn btn-primary btn-sm",
                onClick: te
              }, [
                w(ee, {
                  name: "plus",
                  size: "sm",
                  class: "mr-1"
                }),
                z(" " + a(n(o)("admin.channelMonitor.template.createButton")), 1)
              ])
            ]),
            N.value ? (c(), y("div", pa, a(n(o)("common.loading")), 1)) : K.value.length === 0 ? (c(), y("div", va, a(n(o)("admin.channelMonitor.template.emptyState")), 1)) : (c(!0), y(G, { key: 2 }, X(K.value, (b) => (c(), y("div", {
              key: b.id,
              class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
            }, [
              e("div", ya, [
                e("div", ha, [
                  e("div", fa, [
                    e("span", _a, a(b.name), 1),
                    e("span", {
                      class: q(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", ke(b.body_override_mode)])
                    }, a(ue(b.body_override_mode)), 3),
                    b.provider === n(J) ? (c(), y("span", {
                      key: 0,
                      class: q(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", E(b.api_mode)])
                    }, a(oe(b.api_mode)), 3)) : I("", !0),
                    b.associated_monitors > 0 ? (c(), y("span", ba, a(n(o)("admin.channelMonitor.template.associatedCount", { n: b.associated_monitors })), 1)) : I("", !0)
                  ]),
                  b.description ? (c(), y("p", ga, a(b.description), 1)) : I("", !0),
                  e("p", xa, a(n(o)("admin.channelMonitor.template.headersSummary", {
                    n: Object.keys(b.extra_headers || {}).length
                  })), 1)
                ]),
                e("div", ka, [
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    disabled: b.associated_monitors === 0,
                    title: n(o)("admin.channelMonitor.template.applyTooltip"),
                    onClick: (ie) => T(b)
                  }, [
                    w(ee, {
                      name: "refresh",
                      size: "sm",
                      class: "mr-1"
                    }),
                    z(" " + a(n(o)("admin.channelMonitor.template.applyButton")), 1)
                  ], 8, Ma),
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    onClick: (ie) => de(b)
                  }, a(n(o)("common.edit")), 9, $a),
                  e("button", {
                    class: "btn btn-secondary btn-sm text-red-600",
                    onClick: (ie) => ce(b)
                  }, a(n(o)("common.delete")), 9, wa)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        _: 1
      }, 8, ["show", "title"]),
      w(la, {
        show: g.show,
        "template-id": g.tpl ? g.tpl.id : null,
        "template-name": g.tpl ? g.tpl.name : "",
        onClose: m[7] || (m[7] = (b) => g.show = !1),
        onApplied: A
      }, null, 8, ["show", "template-id", "template-name"]),
      w(Ke, {
        show: F.show,
        title: n(o)("common.delete"),
        message: xe.value,
        "confirm-text": n(o)("common.delete"),
        "cancel-text": n(o)("common.cancel"),
        danger: !0,
        onConfirm: ye,
        onCancel: m[8] || (m[8] = (b) => F.show = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
}), Ka = { class: "space-y-2" }, Ga = { class: "flex flex-col" }, La = { class: "font-medium text-gray-900 dark:text-white" }, Ja = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Qa = { class: "flex items-center gap-2" }, Ya = { class: "text-xs text-gray-500 dark:text-gray-400" }, Xa = { class: "flex justify-end" }, Za = /* @__PURE__ */ le({
  __name: "MonitorRunResultDialog",
  props: {
    show: { type: Boolean },
    results: {}
  },
  emits: ["close"],
  setup(p) {
    const { t: f } = se(), { statusLabel: v, statusBadgeClass: x, formatLatency: o } = Ee();
    return (_, k) => (c(), ge(Ce, {
      show: p.show,
      title: n(f)("admin.channelMonitor.runResultTitle"),
      width: "normal",
      onClose: k[1] || (k[1] = (u) => _.$emit("close"))
    }, {
      footer: V(() => [
        e("div", Xa, [
          e("button", {
            onClick: k[0] || (k[0] = (u) => _.$emit("close")),
            class: "btn btn-primary"
          }, a(n(f)("common.close")), 1)
        ])
      ]),
      default: V(() => [
        e("div", Ka, [
          (c(!0), y(G, null, X(p.results, (u) => (c(), y("div", {
            key: u.model,
            class: "flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-dark-600"
          }, [
            e("div", Ga, [
              e("span", La, a(u.model), 1),
              u.message ? (c(), y("span", Ja, a(u.message), 1)) : I("", !0),
              w(Ze, {
                snapshot: u.quota,
                class: "mt-1"
              }, null, 8, ["snapshot"])
            ]),
            e("div", Qa, [
              e("span", {
                class: q(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", n(x)(u.status)])
              }, a(n(v)(u.status)), 3),
              e("span", Ya, a(n(o)(u.latency_ms)) + " ms", 1)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Wa = { class: "flex flex-col gap-0.5" }, er = { class: "flex items-center gap-2" }, tr = { class: "text-sm text-gray-900 dark:text-gray-100" }, or = { class: "space-y-2" }, nr = { class: "text-xs font-semibold text-gray-100" }, ar = {
  key: 0,
  class: "text-[11px] text-gray-300"
}, rr = {
  key: 1,
  class: "space-y-1"
}, lr = { class: "text-[11px] font-semibold uppercase tracking-wide text-gray-400" }, sr = { class: "w-full text-left text-[11px]" }, ir = { class: "text-gray-400" }, dr = { class: "py-0.5 pr-2 font-medium" }, cr = { class: "py-0.5 pr-2 font-medium" }, ur = { class: "py-0.5 font-medium" }, mr = { class: "py-0.5 pr-2 text-gray-100" }, pr = { class: "py-0.5 pr-2" }, vr = { class: "py-0.5 text-gray-100" }, yr = /* @__PURE__ */ le({
  __name: "MonitorPrimaryModelCell",
  props: {
    row: {}
  },
  setup(p) {
    const { t: f } = se(), { statusLabel: v, statusBadgeClass: x, formatLatency: o } = Ee();
    return (_, k) => (c(), y("div", Wa, [
      e("div", er, [
        e("span", tr, a(p.row.primary_model), 1),
        w(Ge, null, {
          trigger: V(() => [
            e("span", {
              class: q(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", n(x)(p.row.primary_status)])
            }, a(n(v)(p.row.primary_status)), 3)
          ]),
          default: V(() => {
            var u;
            return [
              e("div", or, [
                e("div", nr, [
                  z(a(p.row.primary_model) + " ", 1),
                  e("span", {
                    class: q(["ml-1 inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium", n(x)(p.row.primary_status)])
                  }, a(n(v)(p.row.primary_status)), 3)
                ]),
                (((u = p.row.extra_models) == null ? void 0 : u.length) ?? 0) === 0 ? (c(), y("div", ar, a(n(f)("monitorCommon.extraModelsEmpty")), 1)) : (c(), y("div", rr, [
                  e("div", lr, a(n(f)("monitorCommon.extraModelsHeader")), 1),
                  e("table", sr, [
                    e("thead", null, [
                      e("tr", ir, [
                        e("th", dr, a(n(f)("admin.channelMonitor.columns.primaryModel")), 1),
                        e("th", cr, a(n(f)("admin.channelMonitor.columns.actions")), 1),
                        e("th", ur, a(n(f)("admin.channelMonitor.columns.latency")), 1)
                      ])
                    ]),
                    e("tbody", null, [
                      (c(!0), y(G, null, X(p.row.extra_models_status || [], (h) => (c(), y("tr", {
                        key: h.model
                      }, [
                        e("td", mr, a(h.model), 1),
                        e("td", pr, [
                          e("span", {
                            class: q(["inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]", n(x)(h.status)])
                          }, a(n(v)(h.status)), 3)
                        ]),
                        e("td", vr, a(n(o)(h.latency_ms)), 1)
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
      w(Ze, {
        snapshot: p.row.latest_quota
      }, null, 8, ["snapshot"])
    ]));
  }
}), hr = { class: "flex items-center gap-1" }, fr = ["disabled"], _r = { class: "text-xs" }, br = ["title", "disabled"], gr = { class: "text-xs" }, xr = { class: "text-xs" }, kr = { class: "text-xs" }, Mr = /* @__PURE__ */ le({
  __name: "MonitorActionsCell",
  props: {
    row: {},
    running: { type: Boolean },
    duplicating: { type: Boolean }
  },
  emits: ["run", "duplicate", "edit", "delete"],
  setup(p) {
    const f = p, { t: v } = se(), x = O(() => f.row.api_key_decrypt_failed ? v("admin.channelMonitor.duplicateKeyUnavailable") : f.duplicating ? v("admin.channelMonitor.duplicating") : v("admin.channelMonitor.duplicate"));
    return (o, _) => (c(), y("div", hr, [
      e("button", {
        onClick: _[0] || (_[0] = (k) => o.$emit("run", p.row)),
        disabled: p.running,
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        w(ee, {
          name: "refresh",
          size: "sm",
          class: q(p.running ? "animate-spin" : "")
        }, null, 8, ["class"]),
        e("span", _r, a(n(v)("admin.channelMonitor.runNow")), 1)
      ], 8, fr),
      e("button", {
        "data-testid": "monitor-duplicate",
        title: x.value,
        disabled: p.duplicating || !!p.row.api_key_decrypt_failed,
        onClick: _[1] || (_[1] = (k) => o.$emit("duplicate", p.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        w(ee, {
          name: "copy",
          size: "sm"
        }),
        e("span", gr, a(p.duplicating ? n(v)("admin.channelMonitor.duplicating") : n(v)("admin.channelMonitor.duplicate")), 1)
      ], 8, br),
      e("button", {
        onClick: _[2] || (_[2] = (k) => o.$emit("edit", p.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        w(ee, {
          name: "edit",
          size: "sm"
        }),
        e("span", xr, a(n(v)("common.edit")), 1)
      ]),
      e("button", {
        onClick: _[3] || (_[3] = (k) => o.$emit("delete", p.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
      }, [
        w(ee, {
          name: "trash",
          size: "sm"
        }),
        e("span", kr, a(n(v)("common.delete")), 1)
      ])
    ]));
  }
}), $r = { class: "w-full min-w-0 space-y-6 pb-8" }, wr = { class: "page-header mb-0 px-1 py-2" }, Cr = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Er = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Pr = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Or = { class: "flex items-center gap-1.5" }, Sr = { class: "font-medium text-gray-900 dark:text-white" }, Rr = { class: "text-sm text-gray-900 dark:text-gray-100" }, Ar = { class: "text-sm text-gray-900 dark:text-gray-100" }, Kr = /* @__PURE__ */ le({
  __name: "ChannelMonitorView",
  setup(p) {
    const { t: f } = se(), v = Re(), {
      providerLabel: x,
      providerBadgeClass: o,
      formatLatency: _,
      formatAvailability: k
    } = Ee(), u = C([]), h = C(!1), M = C(null), N = C(""), B = C(""), K = C(""), S = _e({ page: 1, page_size: pt(), total: 0 }), t = C(!1), D = C(!1), d = C(null), P = C(!1), R = C(null), te = C(!1), de = C([]), j = _e(/* @__PURE__ */ new Set());
    let U = null, $ = null;
    const g = O(() => [
      { key: "name", label: f("admin.channelMonitor.columns.name"), sortable: !1 },
      { key: "provider", label: f("admin.channelMonitor.columns.provider"), sortable: !1 },
      { key: "primary_model", label: f("admin.channelMonitor.columns.primaryModel"), sortable: !1 },
      { key: "availability_7d", label: f("admin.channelMonitor.columns.availability7d"), sortable: !1 },
      { key: "latency", label: f("admin.channelMonitor.columns.latency"), sortable: !1 },
      { key: "enabled", label: f("admin.channelMonitor.columns.enabled"), sortable: !1 },
      { key: "actions", label: f("admin.channelMonitor.columns.actions"), sortable: !1 }
    ]), T = O(() => {
      var r;
      const E = ((r = R.value) == null ? void 0 : r.name) || "";
      return f("admin.channelMonitor.deleteConfirm", { name: E });
    });
    async function A() {
      U && U.abort();
      const E = new AbortController();
      U = E, h.value = !0;
      try {
        const r = {
          page: S.page,
          page_size: S.page_size
        };
        B.value && (r.provider = B.value), K.value === "true" && (r.enabled = !0), K.value === "false" && (r.enabled = !1), N.value.trim() && (r.search = N.value.trim());
        const m = await L.channelMonitor.list(r, { signal: E.signal });
        if (E.signal.aborted || U !== E) return;
        u.value = m.items || [], S.total = m.total;
      } catch (r) {
        const m = r;
        if ((m == null ? void 0 : m.name) === "AbortError" || (m == null ? void 0 : m.code) === "ERR_CANCELED") return;
        v.showError(W(r, f("admin.channelMonitor.loadError")));
      } finally {
        U === E && (h.value = !1, U = null);
      }
    }
    function F() {
      $ && clearTimeout($), $ = setTimeout(() => {
        S.page = 1, A();
      }, 300);
    }
    function ce(E) {
      S.page = E, A();
    }
    function xe(E) {
      S.page_size = E, S.page = 1, A();
    }
    function ye() {
      d.value = null, t.value = !0;
    }
    function he(E) {
      d.value = E, t.value = !0;
    }
    function ke() {
      t.value = !1, d.value = null;
    }
    async function ue(E) {
      const r = !E.enabled;
      try {
        await L.channelMonitor.update(E.id, { enabled: r }), E.enabled = r;
      } catch (m) {
        v.showError(W(m, f("common.error")));
      }
    }
    async function fe(E) {
      if (M.value == null) {
        M.value = E.id;
        try {
          const r = await L.channelMonitor.runNow(E.id);
          de.value = r.results || [], te.value = !0, v.showSuccess(f("admin.channelMonitor.runSuccess")), A();
        } catch (r) {
          v.showError(W(r, f("admin.channelMonitor.runFailed")));
        } finally {
          M.value = null;
        }
      }
    }
    async function me(E) {
      if (E.api_key_decrypt_failed) {
        v.showError(f("admin.channelMonitor.duplicateKeyUnavailable"));
        return;
      }
      if (!j.has(E.id)) {
        j.add(E.id);
        try {
          const r = await L.channelMonitor.duplicate(E.id);
          v.showSuccess(f("admin.channelMonitor.duplicateSuccess", { name: r.name })), await A();
        } catch (r) {
          v.showError(W(r, f("admin.channelMonitor.duplicateFailed")));
        } finally {
          j.delete(E.id);
        }
      }
    }
    function Me(E) {
      R.value = E, P.value = !0;
    }
    async function oe() {
      if (R.value)
        try {
          await L.channelMonitor.del(R.value.id), v.showSuccess(f("admin.channelMonitor.deleteSuccess")), P.value = !1, R.value = null, A();
        } catch (E) {
          v.showError(W(E, f("common.error")));
        }
    }
    return ct(() => {
      A();
    }), ut(() => {
      $ && clearTimeout($), U == null || U.abort();
    }), (E, r) => (c(), y(G, null, [
      e("div", $r, [
        e("header", wr, [
          e("h1", Cr, [
            e("span", Er, [
              w(ee, {
                name: "chart",
                size: "sm"
              })
            ]),
            z(" " + a(n(f)("admin.channelMonitor.title")), 1)
          ]),
          e("p", Pr, a(n(f)("admin.channelMonitor.description")), 1)
        ]),
        w(mt, null, {
          filters: V(() => [
            w(Lt, {
              search: N.value,
              "onUpdate:search": r[0] || (r[0] = (m) => N.value = m),
              provider: B.value,
              "onUpdate:provider": r[1] || (r[1] = (m) => B.value = m),
              enabled: K.value,
              "onUpdate:enabled": r[2] || (r[2] = (m) => K.value = m),
              loading: h.value,
              onReload: A,
              onCreate: ye,
              onManageTemplates: r[3] || (r[3] = (m) => D.value = !0),
              onSearchInput: F
            }, null, 8, ["search", "provider", "enabled", "loading"])
          ]),
          table: V(() => [
            w(yt, {
              columns: g.value,
              data: u.value,
              loading: h.value
            }, {
              "cell-name": V(({ row: m, value: b }) => [
                e("div", Or, [
                  e("span", Sr, a(b), 1),
                  m.api_key_decrypt_failed ? (c(), ge(Ge, {
                    key: 0,
                    content: n(f)("admin.channelMonitor.apiKeyDecryptFailed")
                  }, {
                    default: V(() => [
                      w(ee, {
                        name: "exclamationTriangle",
                        size: "sm",
                        class: "text-red-500"
                      })
                    ]),
                    _: 1
                  }, 8, ["content"])) : I("", !0)
                ])
              ]),
              "cell-provider": V(({ row: m }) => [
                e("span", {
                  class: q(["inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", n(o)(m.provider)])
                }, a(n(x)(m.provider)), 3)
              ]),
              "cell-primary_model": V(({ row: m }) => [
                w(yr, { row: m }, null, 8, ["row"])
              ]),
              "cell-availability_7d": V(({ row: m }) => [
                e("span", Rr, a(n(k)(m)), 1)
              ]),
              "cell-latency": V(({ row: m }) => [
                e("span", Ar, a(n(_)(m.primary_latency_ms)), 1)
              ]),
              "cell-enabled": V(({ row: m }) => [
                w(Le, {
                  modelValue: m.enabled,
                  "onUpdate:modelValue": (b) => ue(m)
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              "cell-actions": V(({ row: m }) => [
                w(Mr, {
                  row: m,
                  running: M.value === m.id,
                  duplicating: j.has(m.id),
                  onRun: fe,
                  onDuplicate: me,
                  onEdit: he,
                  onDelete: Me
                }, null, 8, ["row", "running", "duplicating"])
              ]),
              empty: V(() => [
                w(ht, {
                  title: n(f)("admin.channelMonitor.noMonitorsYet"),
                  description: n(f)("admin.channelMonitor.createFirstMonitor"),
                  "action-text": n(f)("admin.channelMonitor.createButton"),
                  onAction: ye
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: V(() => [
            S.total > 0 ? (c(), ge(vt, {
              key: 0,
              page: S.page,
              total: S.total,
              "page-size": S.page_size,
              "onUpdate:page": ce,
              "onUpdate:pageSize": xe
            }, null, 8, ["page", "total", "page-size"])) : I("", !0)
          ]),
          _: 1
        })
      ]),
      w(qn, {
        show: t.value,
        monitor: d.value,
        onClose: ke,
        onSaved: A
      }, null, 8, ["show", "monitor"]),
      w(qa, {
        show: D.value,
        onClose: r[4] || (r[4] = (m) => D.value = !1),
        onUpdated: A
      }, null, 8, ["show"]),
      w(Za, {
        show: te.value,
        results: de.value,
        onClose: r[5] || (r[5] = (m) => te.value = !1)
      }, null, 8, ["show", "results"]),
      w(Ke, {
        show: P.value,
        title: n(f)("common.delete"),
        message: T.value,
        "confirm-text": n(f)("common.delete"),
        "cancel-text": n(f)("common.cancel"),
        danger: !0,
        onConfirm: oe,
        onCancel: r[6] || (r[6] = (m) => P.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
});
export {
  Kr as default
};
