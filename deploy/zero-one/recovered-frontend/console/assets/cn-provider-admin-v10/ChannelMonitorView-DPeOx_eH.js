import { a as pe, d as le, Y as Te, u as se, p as S, m as c, f as v, g as e, q as C, _ as ee, x as J, y as Q, i as n, s as j, k as H, h as a, Z as He, r as E, w as re, A as fe, v as V, F as q, j as Z, l as T, e as Se, b as he, z as ze, c as dt, o as ct } from "./cnProviderAdminLeaf-DehadpuS.js";
import { a as W } from "./apiError-i2TfMBqu.js";
import { C as qe, S as Oe, b as K, _ as Ke, g as ut, P as mt, D as pt } from "./platforms-CS2OQNva.js";
import { T as vt } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-DZteJdhQ.js";
import { _ as yt } from "./EmptyState.vue_vue_type_script_setup_true_lang-Cfqco4L8.js";
import { _ as Ge } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-CtcKFU29.js";
import { _ as Le } from "./Toggle.vue_vue_type_script_setup_true_lang-BT8qn5t4.js";
import { _ as we } from "./BaseDialog.vue_vue_type_script_setup_true_lang-CoJJzgOV.js";
import { k as ht, _ as _t } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-c0R_y_x6.js";
import { _ as ft } from "./GroupBadge.vue_vue_type_script_setup_true_lang-Df44e9F1.js";
import { P as L, A as ae, a as _e, D as Ie, u as Ce, C as Me, b as X, c as $e, _ as bt, d as je, e as gt, f as xt, g as kt, h as Mt, i as Pe, j as Ee, k as $t, l as Je, m as Qe, n as Ye, o as Ze, p as wt, q as Ct, r as Et, s as Pt, t as Xe } from "./MonitorQuotaView.vue_vue_type_script_setup_true_lang-CD7IEQSQ.js";
async function Ot(m = 1, h = 10, p, x) {
  const { data: t } = await pe.get("/keys", {
    params: { page: m, page_size: h, ...p },
    signal: x == null ? void 0 : x.signal
  });
  return t;
}
async function St(m) {
  const { data: h } = await pe.get(`/keys/${m}`);
  return h;
}
async function Rt(m, h, p, x, t, f, k, u) {
  const y = { name: m };
  h !== void 0 && (y.group_id = h), p && (y.custom_key = p), x && x.length > 0 && (y.ip_whitelist = x), t && t.length > 0 && (y.ip_blacklist = t), f !== void 0 && f > 0 && (y.quota = f), k !== void 0 && k > 0 && (y.expires_in_days = k), u != null && u.rate_limit_5h && u.rate_limit_5h > 0 && (y.rate_limit_5h = u.rate_limit_5h), u != null && u.rate_limit_1d && u.rate_limit_1d > 0 && (y.rate_limit_1d = u.rate_limit_1d), u != null && u.rate_limit_7d && u.rate_limit_7d > 0 && (y.rate_limit_7d = u.rate_limit_7d);
  const { data: $ } = await pe.post("/keys", y);
  return $;
}
async function Ve(m, h) {
  const { data: p } = await pe.put(`/keys/${m}`, h);
  return p;
}
async function At(m, h) {
  const p = [...new Set(m)], x = { succeededIds: [], failures: [] };
  for (let t = 0; t < p.length; t += 5) {
    const f = p.slice(t, t + 5);
    (await Promise.allSettled(f.map((u) => Ve(u, h)))).forEach((u, y) => {
      u.status === "fulfilled" ? x.succeededIds.push(f[y]) : x.failures.push({ id: f[y], error: u.reason });
    });
  }
  return x;
}
async function Tt(m) {
  const { data: h } = await pe.delete(`/keys/${m}`);
  return h;
}
async function It(m, h) {
  return Ve(m, { status: h });
}
const Vt = {
  list: Ot,
  getById: St,
  create: Rt,
  update: Ve,
  bulkUpdate: At,
  delete: Tt,
  toggleStatus: It
};
async function Nt() {
  const { data: m } = await pe.get("/groups/available");
  return m;
}
async function Ut() {
  const { data: m } = await pe.get("/groups/rates");
  return m || {};
}
const Dt = {
  getAvailable: Nt,
  getUserGroupRates: Ut
}, Bt = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, Ft = { class: "flex flex-1 flex-wrap items-center gap-3" }, Ht = { class: "relative w-full sm:w-64" }, jt = ["placeholder"], zt = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, qt = ["disabled", "title"], Kt = ["title"], Gt = /* @__PURE__ */ le({
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
  setup(m) {
    const h = Te(m, "search"), p = Te(m, "provider"), x = Te(m, "enabled"), { t } = se(), f = S(() => [
      { value: "", label: t("admin.channelMonitor.allProviders") },
      ...qe.map(({ value: u }) => ({
        value: u,
        label: t(`monitorCommon.providers.${u}`)
      }))
    ]), k = S(() => [
      { value: "", label: t("admin.channelMonitor.allStatus") },
      { value: "true", label: t("admin.channelMonitor.onlyEnabled") },
      { value: "false", label: t("admin.channelMonitor.onlyDisabled") }
    ]);
    return (u, y) => (c(), v("div", Bt, [
      e("div", Ft, [
        e("div", Ht, [
          C(ee, {
            name: "search",
            size: "md",
            class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          }),
          J(e("input", {
            "onUpdate:modelValue": y[0] || (y[0] = ($) => h.value = $),
            type: "text",
            placeholder: n(t)("admin.channelMonitor.searchPlaceholder"),
            class: "input pl-10",
            onInput: y[1] || (y[1] = ($) => u.$emit("search-input"))
          }, null, 40, jt), [
            [Q, h.value]
          ])
        ]),
        C(Oe, {
          modelValue: p.value,
          "onUpdate:modelValue": y[2] || (y[2] = ($) => p.value = $),
          options: f.value,
          placeholder: n(t)("admin.channelMonitor.allProviders"),
          class: "w-44",
          onChange: y[3] || (y[3] = ($) => u.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"]),
        C(Oe, {
          modelValue: x.value,
          "onUpdate:modelValue": y[4] || (y[4] = ($) => x.value = $),
          options: k.value,
          placeholder: n(t)("admin.channelMonitor.enabledFilter"),
          class: "w-40",
          onChange: y[5] || (y[5] = ($) => u.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"])
      ]),
      e("div", zt, [
        e("button", {
          onClick: y[6] || (y[6] = ($) => u.$emit("reload")),
          disabled: m.loading,
          class: "btn btn-secondary",
          title: n(t)("common.refresh")
        }, [
          C(ee, {
            name: "refresh",
            size: "md",
            class: j(m.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, qt),
        e("button", {
          onClick: y[7] || (y[7] = ($) => u.$emit("manage-templates")),
          class: "btn btn-secondary",
          title: n(t)("admin.channelMonitor.template.manageButton")
        }, [
          C(ee, {
            name: "cog",
            size: "md",
            class: "mr-2"
          }),
          H(" " + a(n(t)("admin.channelMonitor.template.manageButton")), 1)
        ], 8, Kt),
        e("button", {
          onClick: y[8] || (y[8] = ($) => u.$emit("create")),
          class: "btn btn-primary"
        }, [
          C(ee, {
            name: "plus",
            size: "md",
            class: "mr-2"
          }),
          H(" " + a(n(t)("admin.channelMonitor.createButton")), 1)
        ])
      ])
    ]));
  }
});
function Lt(m) {
  return m ? m.length <= 12 ? `${m.slice(0, 4)}***` : `${m.slice(0, 6)}...${m.slice(-4)}` : "";
}
const Jt = { class: "space-y-3" }, Qt = { class: "text-xs text-gray-500 dark:text-gray-400" }, Yt = { class: "relative" }, Zt = ["placeholder"], Xt = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-500"
}, Wt = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-500"
}, eo = {
  key: 2,
  class: "max-h-96 overflow-auto rounded-lg border border-gray-200 dark:border-dark-600"
}, to = { class: "w-full text-sm" }, oo = { class: "bg-gray-50 dark:bg-dark-800 sticky top-0 z-10" }, no = { class: "text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" }, ao = { class: "px-3 py-2" }, ro = { class: "px-3 py-2" }, lo = { class: "px-3 py-2" }, so = { class: "divide-y divide-gray-200 dark:divide-dark-700" }, io = ["onClick"], co = { class: "px-3 py-2 font-medium text-gray-900 dark:text-white" }, uo = { class: "px-3 py-2 font-mono text-xs text-gray-500 dark:text-gray-400" }, mo = { class: "px-3 py-2" }, po = {
  key: 1,
  class: "text-xs text-gray-400"
}, vo = { class: "flex justify-end" }, yo = /* @__PURE__ */ le({
  __name: "MonitorKeyPickerDialog",
  props: {
    show: { type: Boolean },
    loading: { type: Boolean },
    keys: {},
    provider: {},
    userGroupRates: { default: () => ({}) }
  },
  emits: ["close", "pick"],
  setup(m) {
    const h = m, { t: p } = se(), x = E("");
    re(() => h.show, (f) => {
      f || (x.value = "");
    });
    const t = S(() => {
      const f = x.value.trim().toLowerCase();
      return h.keys.filter((k) => {
        var u, y;
        return ((u = k.group) == null ? void 0 : u.platform) !== h.provider ? !1 : f ? k.name.toLowerCase().includes(f) || k.key.toLowerCase().includes(f) || (((y = k.group) == null ? void 0 : y.name) || "").toLowerCase().includes(f) : !0;
      });
    });
    return (f, k) => (c(), fe(we, {
      show: m.show,
      title: n(p)("admin.channelMonitor.form.selectKeyTitle"),
      width: "wide",
      onClose: k[2] || (k[2] = (u) => f.$emit("close"))
    }, {
      footer: V(() => [
        e("div", vo, [
          e("button", {
            onClick: k[1] || (k[1] = (u) => f.$emit("close")),
            class: "btn btn-secondary"
          }, a(n(p)("common.cancel")), 1)
        ])
      ]),
      default: V(() => [
        e("div", Jt, [
          e("p", Qt, a(n(p)("admin.channelMonitor.form.selectKeyHint")), 1),
          e("div", Yt, [
            J(e("input", {
              "onUpdate:modelValue": k[0] || (k[0] = (u) => x.value = u),
              type: "text",
              class: "input pl-9",
              placeholder: n(p)("keys.searchPlaceholder")
            }, null, 8, Zt), [
              [Q, x.value]
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
          m.loading ? (c(), v("div", Xt, a(n(p)("common.loading")), 1)) : t.value.length === 0 ? (c(), v("div", Wt, a(n(p)("admin.channelMonitor.form.noActiveKey")), 1)) : (c(), v("div", eo, [
            e("table", to, [
              e("thead", oo, [
                e("tr", no, [
                  e("th", ao, a(n(p)("common.name")), 1),
                  e("th", ro, a(n(p)("keys.apiKey")), 1),
                  e("th", lo, a(n(p)("keys.group")), 1)
                ])
              ]),
              e("tbody", so, [
                (c(!0), v(q, null, Z(t.value, (u) => (c(), v("tr", {
                  key: u.id,
                  class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700",
                  onClick: (y) => f.$emit("pick", u)
                }, [
                  e("td", co, a(u.name), 1),
                  e("td", uo, a(n(Lt)(u.key)), 1),
                  e("td", mo, [
                    u.group ? (c(), fe(ft, {
                      key: 0,
                      name: u.group.name,
                      platform: u.group.platform,
                      "subscription-type": u.group.subscription_type,
                      "rate-multiplier": u.group.rate_multiplier,
                      "user-rate-multiplier": m.userGroupRates[u.group.id]
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "user-rate-multiplier"])) : (c(), v("span", po, "—"))
                  ])
                ], 8, io))), 128))
              ])
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), ho = { class: "space-y-4" }, _o = { class: "input-label" }, fo = { class: "space-y-1.5" }, bo = ["onUpdate:modelValue", "placeholder"], go = ["onUpdate:modelValue", "placeholder"], xo = ["title", "onClick"], ko = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Mo = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, $o = { class: "input-label" }, wo = { class: "grid grid-cols-3 gap-3" }, Co = ["onClick"], Eo = { class: "mt-1 text-xs text-gray-400" }, Po = { key: 0 }, Oo = { class: "mb-1 flex items-center justify-between" }, So = { class: "input-label !mb-0" }, Ro = ["disabled"], Ao = ["placeholder"], To = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Io = {
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
  setup(m, { emit: h }) {
    const p = m, x = h, { t } = se(), f = E(u(p.extraHeaders)), k = E("");
    re(
      () => p.extraHeaders,
      (g) => {
        $(y(f.value), g) || (f.value = u(g)), k.value = "";
      }
    );
    function u(g) {
      const M = Object.entries(g || {});
      return M.length === 0 ? [{ name: "", value: "" }] : M.map(([I, O]) => ({ name: I, value: O }));
    }
    function y(g) {
      const M = {};
      for (const I of g) {
        const O = I.name.trim();
        O !== "" && (M[O] = I.value);
      }
      return M;
    }
    function $(g, M) {
      const I = Object.keys(g), O = Object.keys(M || {});
      if (I.length !== O.length) return !1;
      for (const Y of I)
        if (g[Y] !== M[Y]) return !1;
      return !0;
    }
    function D() {
      for (const g of f.value) {
        const M = g.name.trim();
        if (M !== "" && (M.includes(":") || /\s/.test(M))) {
          k.value = t("admin.channelMonitor.advanced.headerNameInvalid", { name: M });
          return;
        }
      }
      k.value = "", x("update:extraHeaders", y(f.value));
    }
    function G() {
      f.value.push({ name: "", value: "" });
    }
    function z(g) {
      f.value.splice(g, 1), f.value.length === 0 && f.value.push({ name: "", value: "" }), D();
    }
    const P = E(R(p.bodyOverride)), o = E("");
    re(
      () => p.bodyOverride,
      (g) => {
        P.value = R(g), o.value = "";
      }
    );
    function b() {
      if (p.bodyOverrideMode === "off")
        return;
      const g = P.value.trim();
      if (g === "") {
        x("update:bodyOverride", null), o.value = "";
        return;
      }
      try {
        const M = JSON.parse(g);
        if (M === null || typeof M != "object" || Array.isArray(M)) {
          o.value = t("admin.channelMonitor.advanced.bodyJsonObjectError");
          return;
        }
        x("update:bodyOverride", M), o.value = "";
      } catch (M) {
        o.value = t("admin.channelMonitor.advanced.bodyJsonError") + ": " + (M instanceof Error ? M.message : String(M));
      }
    }
    function w() {
      const g = P.value.trim();
      if (g !== "")
        try {
          const M = JSON.parse(g);
          P.value = JSON.stringify(M, null, 2), o.value = "", M && typeof M == "object" && !Array.isArray(M) && x("update:bodyOverride", M);
        } catch (M) {
          o.value = t("admin.channelMonitor.advanced.bodyJsonError") + ": " + (M instanceof Error ? M.message : String(M));
        }
    }
    function R(g) {
      return !g || Object.keys(g).length === 0 ? "" : JSON.stringify(g, null, 2);
    }
    function A(g) {
      x("update:bodyOverrideMode", g), g === "off" && x("update:bodyOverride", null);
    }
    const te = S(() => [
      { value: "off", label: t("admin.channelMonitor.advanced.bodyModeOff") },
      { value: "merge", label: t("admin.channelMonitor.advanced.bodyModeMerge") },
      { value: "replace", label: t("admin.channelMonitor.advanced.bodyModeReplace") }
    ]);
    function ie(g) {
      return p.bodyOverrideMode === g ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300 dark:border-primary-400" : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    const N = S(() => {
      switch (p.bodyOverrideMode) {
        case "merge":
          return t("admin.channelMonitor.advanced.bodyModeHintMerge");
        case "replace":
          return t("admin.channelMonitor.advanced.bodyModeHintReplace");
        default:
          return t("admin.channelMonitor.advanced.bodyModeHintOff");
      }
    }), F = S(() => p.provider === L && p.apiMode === ae ? p.bodyOverrideMode === "merge" ? `{
  "max_output_tokens": 20
}` : `{
  "model": "gpt-4o-mini",
  "instructions": "You are a health check endpoint. Reply briefly.",
  "input": "Reply with exactly: ok",
  "max_output_tokens": 20,
  "stream": false
}` : p.provider === L || p.provider === _e ? p.bodyOverrideMode === "merge" ? `{
  "max_tokens": 20
}` : `{
  "model": "${p.provider === _e ? Ie : "gpt-4o-mini"}",
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
    return (g, M) => (c(), v("div", ho, [
      e("div", null, [
        e("label", _o, a(n(t)("admin.channelMonitor.advanced.headers")), 1),
        e("div", fo, [
          (c(!0), v(q, null, Z(f.value, (I, O) => (c(), v("div", {
            key: O,
            class: "flex items-center gap-2"
          }, [
            J(e("input", {
              "onUpdate:modelValue": (Y) => I.name = Y,
              type: "text",
              spellcheck: "false",
              placeholder: n(t)("admin.channelMonitor.advanced.headerNamePlaceholder"),
              class: "input w-52 flex-none font-mono text-xs",
              onBlur: D
            }, null, 40, bo), [
              [Q, I.name]
            ]),
            J(e("input", {
              "onUpdate:modelValue": (Y) => I.value = Y,
              type: "text",
              spellcheck: "false",
              placeholder: n(t)("admin.channelMonitor.advanced.headerValuePlaceholder"),
              class: "input flex-1 font-mono text-xs",
              onBlur: D
            }, null, 40, go), [
              [Q, I.value]
            ]),
            e("button", {
              type: "button",
              class: "flex-none rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400",
              title: n(t)("common.delete"),
              onClick: (Y) => z(O)
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
            ])], 8, xo)
          ]))), 128)),
          e("button", {
            type: "button",
            class: "inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-500 hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
            onClick: G
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
            H(" " + a(n(t)("admin.channelMonitor.advanced.headerAddRow")), 1)
          ])
        ]),
        k.value ? (c(), v("p", ko, a(k.value), 1)) : (c(), v("p", Mo, a(n(t)("admin.channelMonitor.advanced.headersHint")), 1))
      ]),
      e("div", null, [
        e("label", $o, a(n(t)("admin.channelMonitor.advanced.bodyMode")), 1),
        e("div", wo, [
          (c(!0), v(q, null, Z(te.value, (I) => (c(), v("button", {
            key: I.value,
            type: "button",
            class: j(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", ie(I.value)]),
            onClick: (O) => A(I.value)
          }, a(I.label), 11, Co))), 128))
        ]),
        e("p", Eo, a(N.value), 1)
      ]),
      m.bodyOverrideMode !== "off" ? (c(), v("div", Po, [
        e("div", Oo, [
          e("label", So, a(n(t)("admin.channelMonitor.advanced.bodyJson")), 1),
          e("button", {
            type: "button",
            class: "text-xs text-primary-600 hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline dark:text-primary-400",
            disabled: !P.value.trim(),
            onClick: w
          }, a(n(t)("admin.channelMonitor.advanced.bodyJsonFormat")), 9, Ro)
        ]),
        J(e("textarea", {
          "onUpdate:modelValue": M[0] || (M[0] = (I) => P.value = I),
          rows: "10",
          placeholder: F.value,
          class: "input font-mono text-xs",
          style: { "white-space": "pre", "overflow-wrap": "normal", "overflow-x": "auto" },
          spellcheck: "false",
          onBlur: b
        }, null, 40, Ao), [
          [Q, P.value]
        ]),
        o.value ? (c(), v("p", To, a(o.value), 1)) : (c(), v("p", Io, a(n(t)("admin.channelMonitor.advanced.bodyJsonHint")), 1))
      ])) : T("", !0)
    ]));
  }
}), Vo = 1440 * 60;
function No(m, h) {
  return !Number.isFinite(m) || m <= 0 || !Number.isFinite(h) || h <= 0 ? 0 : Math.round(Vo / m * h);
}
const Uo = { class: "input-label" }, Do = ["placeholder"], Bo = { class: "input-label" }, Fo = {
  class: "grid gap-3 sm:grid-cols-3",
  "data-testid": "monitor-check-mode"
}, Ho = ["data-testid", "aria-pressed", "disabled", "onClick"], jo = { class: "block text-sm font-semibold" }, zo = { class: "mt-0.5 block text-xs opacity-80" }, qo = ["data-daily-requests", "data-model-count"], Ko = { class: "font-semibold" }, Go = { class: "mt-1 text-xs leading-5" }, Lo = {
  key: 1,
  "data-testid": "monitor-quota-no-generation",
  class: "mt-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200"
}, Jo = { class: "input-label" }, Qo = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Yo = ["data-testid", "aria-pressed", "onClick"], Zo = { key: 0 }, Xo = { class: "input-label" }, Wo = { "data-testid": "monitor-linked-account" }, en = { class: "mt-1 text-xs text-gray-400" }, tn = {
  key: 0,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, on = {
  key: 1,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, nn = {
  key: 2,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, an = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, rn = { class: "input-label" }, ln = { class: "grid gap-3 sm:grid-cols-2" }, sn = ["aria-pressed", "onClick"], dn = { class: "block text-sm font-semibold" }, cn = { class: "mt-0.5 block text-xs opacity-80" }, un = { key: 2 }, mn = { class: "input-label" }, pn = { class: "flex gap-2" }, vn = ["placeholder"], yn = { key: 3 }, hn = { class: "input-label" }, _n = {
  key: 0,
  class: "text-red-500"
}, fn = { class: "flex gap-2" }, bn = ["required", "placeholder"], gn = {
  key: 0,
  class: "mt-1 text-xs text-gray-400"
}, xn = { key: 4 }, kn = { class: "input-label" }, Mn = ["placeholder"], $n = { key: 5 }, wn = { class: "input-label" }, Cn = { class: "input-label" }, En = ["placeholder"], Pn = { class: "input-label" }, On = { class: "mt-1 text-xs text-gray-400" }, Sn = { class: "input-label" }, Rn = ["max"], An = { class: "mt-1 text-xs text-gray-400" }, Tn = { class: "flex items-center justify-between" }, In = { class: "input-label mb-0" }, Vn = {
  key: 6,
  class: "rounded-lg border border-gray-200 bg-gray-50/50 p-3 dark:border-dark-700 dark:bg-dark-900/30"
}, Nn = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, Un = { class: "mt-1 text-xs text-gray-400" }, Dn = { class: "mt-4 space-y-4" }, Bn = { class: "input-label" }, Fn = { class: "mt-1 text-xs text-gray-400" }, Hn = { class: "flex justify-end gap-3" }, jn = ["disabled"], zn = /* @__PURE__ */ le({
  __name: "MonitorFormDialog",
  props: {
    show: { type: Boolean },
    monitor: {}
  },
  emits: ["close", "saved"],
  setup(m, { emit: h }) {
    const p = m, x = h, { t } = se(), f = Se(), { providerPickerClass: k } = Ce(), u = S(() => {
      var l;
      const i = (l = f.cachedPublicSettings) == null ? void 0 : l.channel_monitor_default_interval_seconds;
      return i && i > 0 ? i : wt;
    }), y = S(() => p.monitor), $ = E(!1), D = E(!1), G = E(!1), z = E([]), P = E({}), o = he({
      name: "",
      provider: $e,
      api_mode: X,
      check_mode: Me,
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
    }), b = S(() => o.check_mode !== Me), w = S(() => o.check_mode !== Ee), R = S(() => 1 + o.extra_models.filter((i) => i.trim()).length), A = S(() => No(o.interval_seconds, R.value)), te = S(() => new Intl.NumberFormat().format(A.value)), ie = S(() => Math.max(0, (o.interval_seconds || 0) - 15));
    let N = !1;
    const F = E([]), g = E(!1), M = S(() => {
      const i = F.value.filter((l) => l.provider !== o.provider ? !1 : o.provider !== L ? !0 : de(l.api_mode) === o.api_mode);
      return [
        { value: "", label: t("admin.channelMonitor.templateField.none") },
        ...i.map((l) => ({ value: String(l.id), label: ve(l) }))
      ];
    });
    async function I() {
      if (!(F.value.length > 0)) {
        g.value = !0;
        try {
          const { items: i } = await K.channelMonitorTemplate.list();
          F.value = i;
        } catch (i) {
          console.warn("load monitor templates failed", i);
        } finally {
          g.value = !1;
        }
      }
    }
    const O = S({
      get: () => o.template_id == null ? "" : String(o.template_id),
      set: (i) => {
        if (i === "") {
          o.template_id = null;
          return;
        }
        const l = Number(i);
        if (!Number.isFinite(l)) return;
        o.template_id = l;
        const d = F.value.find((B) => B.id === l);
        d && (N = !0, o.api_mode = de(d.api_mode), o.template_id = l, o.extra_headers = { ...d.extra_headers || {} }, o.body_override_mode = d.body_override_mode, o.body_override = d.body_override ? { ...d.body_override } : null, N = !1);
      }
    }), Y = S(() => [
      {
        value: X,
        label: t("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: t("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ae,
        label: t("admin.channelMonitor.form.apiModeResponses"),
        hint: t("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    function de(i) {
      return i === ae ? ae : X;
    }
    function be(i) {
      return o.api_mode === i ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ve(i) {
      if (i.provider !== L) return i.name;
      const l = de(i.api_mode) === ae ? "admin.channelMonitor.form.apiModeResponses" : "admin.channelMonitor.form.apiModeChatCompletions";
      return `${i.name} · ${t(l)}`;
    }
    function ye() {
      o.template_id = null, o.extra_headers = {}, o.body_override_mode = "off", o.body_override = null;
    }
    const ge = S(() => qe.map(({ value: i }) => ({
      value: i,
      label: t(`monitorCommon.providers.${i}`)
    }))), ue = {
      [Ze]: Mt,
      [Ye]: kt,
      [Qe]: xt,
      [Je]: gt
    }, ce = S(() => [
      {
        value: Me,
        label: t("admin.channelMonitor.form.checkModeProbe"),
        hint: t("admin.channelMonitor.form.checkModeProbeHint"),
        // antigravity 无探活 adapter，仅配额模式。
        disabled: o.provider === Pe
      },
      {
        value: Ee,
        label: t("admin.channelMonitor.form.checkModeQuota"),
        hint: t("admin.channelMonitor.form.checkModeQuotaHint"),
        disabled: !1
      },
      {
        value: $t,
        label: t("admin.channelMonitor.form.checkModeQuotaProbe"),
        hint: t("admin.channelMonitor.form.checkModeQuotaProbeHint"),
        // antigravity 无探活 adapter，只支持配额模式。
        disabled: o.provider === Pe
      }
    ]);
    function xe(i) {
      return o.check_mode === i ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ke(i) {
      var l;
      (l = ce.value.find((d) => d.value === i)) != null && l.disabled || (o.check_mode = i, b.value || (o.account_id = null));
    }
    const oe = E([]), s = E(!1), _ = E(""), r = E(!1), U = E(null);
    let Re = 0, me = null;
    const Ae = /* @__PURE__ */ new Set(), Ne = S(() => {
      const i = oe.value.map((d) => ({
        value: String(d.id),
        label: `${d.name} (#${d.id})`
      })), l = U.value;
      return l && !oe.value.some((d) => d.id === l.id) && i.unshift({ value: String(l.id), label: `${l.name} (#${l.id})` }), i;
    }), Ue = S({
      get: () => o.account_id == null ? "" : String(o.account_id),
      set: (i) => {
        if (i === "") {
          o.account_id = null, U.value = null, r.value = !1;
          return;
        }
        const l = Number(i);
        Number.isFinite(l) && (o.account_id = l, U.value = oe.value.find((d) => d.id === l) ?? U.value);
      }
    });
    async function De(i = "") {
      if (!b.value || !p.show) return;
      _.value = i;
      const l = ++Re;
      me == null || me.abort();
      const d = new AbortController();
      me = d, s.value = !0;
      try {
        const B = await K.accounts.list(
          1,
          50,
          { platform: o.provider, ...i ? { search: i } : {} },
          { signal: d.signal }
        );
        if (l !== Re) return;
        oe.value = (B.items || []).map((ne) => ({ id: ne.id, name: ne.name })), await et();
      } catch (B) {
        if (d.signal.aborted) return;
        console.warn("load linked accounts failed", B), i || (oe.value = []);
      } finally {
        l === Re && (s.value = !1);
      }
    }
    async function et() {
      var l;
      const i = o.account_id;
      if (!(i == null || !b.value) && !(oe.value.some((d) => d.id === i) || ((l = U.value) == null ? void 0 : l.id) === i) && !Ae.has(i)) {
        Ae.add(i);
        try {
          const d = await K.accounts.getById(i);
          if (o.account_id !== i) return;
          if (String(d.platform) !== o.provider) {
            o.account_id = null, U.value = null, r.value = !0;
            return;
          }
          U.value = { id: d.id, name: d.name };
        } catch {
          o.account_id === i && (o.account_id = null, U.value = null, r.value = !0);
        }
      }
    }
    function tt(i) {
      De(i);
    }
    re(
      () => [p.show, o.provider, o.check_mode],
      ([i, l], d) => {
        const [B, ne] = d ?? [];
        if (!i) {
          me == null || me.abort();
          return;
        }
        (i !== B || l !== ne) && (Ae.clear(), r.value = !1, U.value = null), De();
      },
      { immediate: !0 }
    );
    function ot(i) {
      if (o.provider === i) return;
      const l = o.provider, d = l === _e && o.endpoint === je, B = l === _e && o.primary_model === Ie, ne = !!ue[l] && o.endpoint === ue[l];
      if (o.provider = i, o.account_id = null, U.value = null, r.value = !1, i === Pe && o.check_mode !== Ee && (o.check_mode = Ee), i === _e) {
        o.endpoint.trim() || (o.endpoint = je), o.primary_model.trim() || (o.primary_model = Ie);
        return;
      }
      (d || ne) && (o.endpoint = ""), B && (o.primary_model = "");
      const Fe = ue[i];
      Fe && !o.endpoint.trim() && (o.endpoint = Fe);
    }
    re(() => o.provider, () => {
      N || (o.api_key = "", o.provider !== L && (o.api_mode = X), ye());
    }, { flush: "sync" }), re(() => o.api_mode, () => {
      N || o.provider === L && ye();
    }, { flush: "sync" });
    function nt() {
      N = !0, o.name = "", o.provider = $e, o.api_mode = X, o.check_mode = Me, o.account_id = null, U.value = null, r.value = !1, o.endpoint = "", o.api_key = "", o.primary_model = "", o.extra_models = [], o.group_name = "", o.interval_seconds = u.value, o.jitter_seconds = 0, o.enabled = !0, o.template_id = null, o.extra_headers = {}, o.body_override_mode = "off", o.body_override = null, N = !1;
    }
    function at(i) {
      N = !0, o.name = i.name, o.provider = i.provider, o.api_mode = de(i.api_mode), o.check_mode = i.check_mode || Me, o.account_id = i.account_id ?? null, o.endpoint = i.endpoint, o.api_key = "", o.primary_model = i.primary_model, o.extra_models = [...i.extra_models || []], o.group_name = i.group_name || "", o.interval_seconds = i.interval_seconds || u.value, o.jitter_seconds = i.jitter_seconds || 0, o.enabled = i.enabled, o.template_id = i.template_id ?? null, o.extra_headers = { ...i.extra_headers || {} }, o.body_override_mode = i.body_override_mode || "off", o.body_override = i.body_override ? { ...i.body_override } : null, N = !1;
    }
    re(
      () => [p.show, p.monitor],
      ([i, l]) => {
        i && (I(), l ? at(l) : nt());
      },
      { immediate: !0 }
    );
    function rt() {
      o.endpoint = window.location.origin;
    }
    async function lt() {
      if (D.value = !0, !(z.value.length > 0)) {
        G.value = !0;
        try {
          const [i, l] = await Promise.all([
            Vt.list(1, 100, { status: "active" }),
            Dt.getUserGroupRates()
          ]), d = i.items || [], B = Date.now();
          z.value = d.filter((ne) => ne.status !== "active" ? !1 : ne.expires_at ? new Date(ne.expires_at).getTime() > B : !0), P.value = l;
        } catch (i) {
          f.showError(W(i, t("admin.channelMonitor.form.noActiveKey")));
        } finally {
          G.value = !1;
        }
      }
    }
    function st(i) {
      o.api_key = i.key, D.value = !1;
    }
    function Be() {
      return {
        name: o.name.trim(),
        provider: o.provider,
        api_mode: o.provider === L ? o.api_mode : X,
        check_mode: o.check_mode,
        account_id: b.value ? o.account_id : null,
        endpoint: w.value ? o.endpoint.trim() : "",
        api_key: w.value ? o.api_key.trim() : "",
        primary_model: w.value ? o.primary_model.trim() : "quota",
        extra_models: w.value ? o.extra_models : [],
        group_name: o.group_name.trim(),
        enabled: o.enabled,
        interval_seconds: o.interval_seconds,
        jitter_seconds: o.jitter_seconds || 0,
        template_id: w.value ? o.template_id : null,
        extra_headers: o.extra_headers,
        body_override_mode: o.body_override_mode,
        body_override: o.body_override
      };
    }
    async function it() {
      if (!$.value) {
        if (!o.name.trim()) {
          f.showError(t("admin.channelMonitor.nameRequired"));
          return;
        }
        if (b.value && o.account_id == null) {
          f.showError(t("admin.channelMonitor.linkedAccountRequired"));
          return;
        }
        if (w.value && !o.primary_model.trim()) {
          f.showError(t("admin.channelMonitor.primaryModelRequired"));
          return;
        }
        $.value = !0;
        try {
          const i = y.value;
          if (i) {
            const { api_key: l, ...d } = Be(), B = { ...d };
            l && (B.api_key = l), w.value && o.template_id == null && (B.clear_template = !0, delete B.template_id), await K.channelMonitor.update(i.id, B), f.showSuccess(t("admin.channelMonitor.updateSuccess"));
          } else
            await K.channelMonitor.create(Be()), f.showSuccess(t("admin.channelMonitor.createSuccess"));
          x("saved"), x("close");
        } catch (i) {
          f.showError(W(i, t("common.error")));
        } finally {
          $.value = !1;
        }
      }
    }
    return (i, l) => (c(), v(q, null, [
      C(we, {
        show: m.show,
        title: y.value ? n(t)("admin.channelMonitor.editTitle") : n(t)("admin.channelMonitor.createTitle"),
        width: "wide",
        onClose: l[15] || (l[15] = (d) => i.$emit("close"))
      }, {
        footer: V(() => [
          e("div", Hn, [
            e("button", {
              onClick: l[14] || (l[14] = (d) => i.$emit("close")),
              type: "button",
              class: "btn btn-secondary"
            }, a(n(t)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "channel-monitor-form",
              disabled: $.value,
              class: "btn btn-primary"
            }, a($.value ? n(t)("common.submitting") : y.value ? n(t)("common.update") : n(t)("common.create")), 9, jn)
          ])
        ]),
        default: V(() => [
          e("form", {
            id: "channel-monitor-form",
            onSubmit: ze(it, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Uo, [
                H(a(n(t)("admin.channelMonitor.form.name")) + " ", 1),
                l[17] || (l[17] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (d) => o.name = d),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.form.namePlaceholder")
              }, null, 8, Do), [
                [Q, o.name]
              ])
            ]),
            e("div", null, [
              e("label", Bo, a(n(t)("admin.channelMonitor.form.checkMode")), 1),
              e("div", Fo, [
                (c(!0), v(q, null, Z(ce.value, (d) => (c(), v("button", {
                  key: d.value,
                  type: "button",
                  "data-testid": `monitor-check-mode-${d.value}`,
                  "aria-pressed": o.check_mode === d.value,
                  disabled: d.disabled,
                  class: j(["rounded-lg border-2 px-3 py-2 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50", xe(d.value)]),
                  onClick: (B) => ke(d.value)
                }, [
                  e("span", jo, a(d.label), 1),
                  e("span", zo, a(d.hint), 1)
                ], 10, Ho))), 128))
              ]),
              w.value ? (c(), v("div", {
                key: 0,
                "data-testid": "monitor-probe-billing-warning",
                "data-daily-requests": A.value,
                "data-model-count": R.value,
                class: "mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200"
              }, [
                e("p", Ko, a(n(t)("admin.channelMonitor.form.probeBillingWarning")), 1),
                e("p", Go, a(n(t)("admin.channelMonitor.form.probeDailyEstimate", { requests: te.value, models: R.value })), 1)
              ], 8, qo)) : (c(), v("div", Lo, a(n(t)("admin.channelMonitor.form.quotaNoGeneration")), 1))
            ]),
            e("div", null, [
              e("label", Jo, [
                H(a(n(t)("admin.channelMonitor.form.provider")) + " ", 1),
                l[18] || (l[18] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Qo, [
                (c(!0), v(q, null, Z(ge.value, (d) => (c(), v("button", {
                  key: d.value,
                  type: "button",
                  "data-testid": `monitor-provider-${d.value}`,
                  "aria-pressed": o.provider === d.value,
                  class: j(["flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors", n(k)(d.value, o.provider === d.value)]),
                  onClick: (B) => ot(d.value)
                }, [
                  C(bt, {
                    provider: d.value,
                    size: 18
                  }, null, 8, ["provider"]),
                  e("span", null, a(d.label), 1)
                ], 10, Yo))), 128))
              ])
            ]),
            b.value ? (c(), v("div", Zo, [
              e("label", Xo, [
                H(a(n(t)("admin.channelMonitor.form.linkedAccount")) + " ", 1),
                l[19] || (l[19] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Wo, [
                C(Oe, {
                  modelValue: Ue.value,
                  "onUpdate:modelValue": l[1] || (l[1] = (d) => Ue.value = d),
                  options: Ne.value,
                  placeholder: n(t)("admin.channelMonitor.form.linkedAccountPlaceholder"),
                  remote: "",
                  loading: s.value,
                  onSearch: tt
                }, null, 8, ["modelValue", "options", "placeholder", "loading"])
              ]),
              e("p", en, a(n(t)("admin.channelMonitor.form.linkedAccountHint")), 1),
              o.provider === n(L) ? (c(), v("p", tn, a(n(t)("admin.channelMonitor.form.openAIQuotaProbeHint")), 1)) : T("", !0),
              r.value ? (c(), v("p", on, a(n(t)("admin.channelMonitor.form.linkedAccountMissing")), 1)) : T("", !0),
              Ne.value.length === 0 && !s.value && !_.value ? (c(), v("p", nn, a(n(t)("admin.channelMonitor.form.linkedAccountEmpty")), 1)) : T("", !0)
            ])) : T("", !0),
            o.provider === n(L) && w.value ? (c(), v("div", an, [
              e("label", rn, a(n(t)("admin.channelMonitor.form.apiMode")), 1),
              e("div", ln, [
                (c(!0), v(q, null, Z(Y.value, (d) => (c(), v("button", {
                  key: d.value,
                  type: "button",
                  "aria-pressed": o.api_mode === d.value,
                  class: j(["rounded-lg border-2 px-3 py-2 text-left transition-colors", be(d.value)]),
                  onClick: (B) => o.api_mode = d.value
                }, [
                  e("span", dn, a(d.label), 1),
                  e("span", cn, a(d.hint), 1)
                ], 10, sn))), 128))
              ])
            ])) : T("", !0),
            w.value ? (c(), v("div", un, [
              e("label", mn, [
                H(a(n(t)("admin.channelMonitor.form.endpoint")) + " ", 1),
                l[20] || (l[20] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", pn, [
                J(e("input", {
                  "onUpdate:modelValue": l[2] || (l[2] = (d) => o.endpoint = d),
                  "data-testid": "monitor-endpoint",
                  type: "text",
                  required: "",
                  class: "input flex-1",
                  placeholder: n(t)("admin.channelMonitor.form.endpointPlaceholder")
                }, null, 8, vn), [
                  [Q, o.endpoint]
                ]),
                e("button", {
                  type: "button",
                  onClick: rt,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(t)("admin.channelMonitor.form.useCurrentDomain")), 1)
              ])
            ])) : T("", !0),
            w.value ? (c(), v("div", yn, [
              e("label", hn, [
                H(a(n(t)("admin.channelMonitor.form.apiKey")), 1),
                y.value ? T("", !0) : (c(), v("span", _n, " *"))
              ]),
              e("div", fn, [
                J(e("input", {
                  "onUpdate:modelValue": l[3] || (l[3] = (d) => o.api_key = d),
                  type: "password",
                  required: !y.value,
                  class: "input flex-1",
                  placeholder: y.value ? n(t)("admin.channelMonitor.form.apiKeyEditPlaceholder") : n(t)("admin.channelMonitor.form.apiKeyPlaceholder")
                }, null, 8, bn), [
                  [Q, o.api_key]
                ]),
                e("button", {
                  type: "button",
                  onClick: lt,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(t)("admin.channelMonitor.form.useMyKey")), 1)
              ]),
              y.value && y.value.api_key_masked ? (c(), v("p", gn, a(y.value.api_key_masked), 1)) : T("", !0)
            ])) : T("", !0),
            w.value ? (c(), v("div", xn, [
              e("label", kn, [
                H(a(n(t)("admin.channelMonitor.form.primaryModel")) + " ", 1),
                l[21] || (l[21] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": l[4] || (l[4] = (d) => o.primary_model = d),
                "data-testid": "monitor-primary-model",
                type: "text",
                required: "",
                class: j(["input font-medium", n(ht)(o.provider)]),
                placeholder: n(t)("admin.channelMonitor.form.primaryModelPlaceholder")
              }, null, 10, Mn), [
                [Q, o.primary_model]
              ])
            ])) : T("", !0),
            w.value ? (c(), v("div", $n, [
              e("label", wn, a(n(t)("admin.channelMonitor.form.extraModels")), 1),
              C(_t, {
                models: o.extra_models,
                platform: o.provider,
                placeholder: n(t)("admin.channelMonitor.form.extraModelsPlaceholder"),
                "onUpdate:models": l[5] || (l[5] = (d) => o.extra_models = d)
              }, null, 8, ["models", "platform", "placeholder"])
            ])) : T("", !0),
            e("div", null, [
              e("label", Cn, a(n(t)("admin.channelMonitor.form.groupName")), 1),
              J(e("input", {
                "onUpdate:modelValue": l[6] || (l[6] = (d) => o.group_name = d),
                type: "text",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.form.groupNamePlaceholder")
              }, null, 8, En), [
                [Q, o.group_name]
              ])
            ]),
            e("div", null, [
              e("label", Pn, [
                H(a(n(t)("admin.channelMonitor.form.intervalSeconds")) + " ", 1),
                l[22] || (l[22] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": l[7] || (l[7] = (d) => o.interval_seconds = d),
                type: "number",
                min: "15",
                max: "3600",
                required: "",
                class: "input"
              }, null, 512), [
                [
                  Q,
                  o.interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", On, a(n(t)("admin.channelMonitor.form.intervalSecondsHint")), 1)
            ]),
            e("div", null, [
              e("label", Sn, a(n(t)("admin.channelMonitor.form.jitterSeconds")), 1),
              J(e("input", {
                "onUpdate:modelValue": l[8] || (l[8] = (d) => o.jitter_seconds = d),
                type: "number",
                min: "0",
                max: ie.value,
                class: "input"
              }, null, 8, Rn), [
                [
                  Q,
                  o.jitter_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", An, a(n(t)("admin.channelMonitor.form.jitterSecondsHint")), 1)
            ]),
            e("div", Tn, [
              e("label", In, a(n(t)("admin.channelMonitor.form.enabled")), 1),
              C(Le, {
                modelValue: o.enabled,
                "onUpdate:modelValue": l[9] || (l[9] = (d) => o.enabled = d)
              }, null, 8, ["modelValue"])
            ]),
            w.value ? (c(), v("details", Vn, [
              e("summary", Nn, a(n(t)("admin.channelMonitor.advanced.section")), 1),
              e("p", Un, a(n(t)("admin.channelMonitor.advanced.sectionHint")), 1),
              e("div", Dn, [
                e("div", null, [
                  e("label", Bn, a(n(t)("admin.channelMonitor.templateField.label")), 1),
                  C(Oe, {
                    modelValue: O.value,
                    "onUpdate:modelValue": l[10] || (l[10] = (d) => O.value = d),
                    options: M.value,
                    placeholder: n(t)("admin.channelMonitor.templateField.placeholder")
                  }, null, 8, ["modelValue", "options", "placeholder"]),
                  e("p", Fn, a(n(t)("admin.channelMonitor.templateField.applyHint")), 1)
                ]),
                C(We, {
                  provider: o.provider,
                  "api-mode": o.api_mode,
                  "extra-headers": o.extra_headers,
                  "body-override-mode": o.body_override_mode,
                  "body-override": o.body_override,
                  "onUpdate:extraHeaders": l[11] || (l[11] = (d) => o.extra_headers = d),
                  "onUpdate:bodyOverrideMode": l[12] || (l[12] = (d) => o.body_override_mode = d),
                  "onUpdate:bodyOverride": l[13] || (l[13] = (d) => o.body_override = d)
                }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
              ])
            ])) : T("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      C(yo, {
        show: D.value,
        loading: G.value,
        keys: z.value,
        provider: o.provider,
        "user-group-rates": P.value,
        onClose: l[16] || (l[16] = (d) => D.value = !1),
        onPick: st
      }, null, 8, ["show", "loading", "keys", "provider", "user-group-rates"])
    ], 64));
  }
}), qn = { class: "mb-3 text-sm text-gray-600 dark:text-gray-400" }, Kn = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400"
}, Gn = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-400"
}, Ln = { key: 2 }, Jn = { class: "mb-2 flex items-center gap-3 text-xs" }, Qn = { class: "ml-auto text-gray-500 dark:text-gray-400" }, Yn = { class: "max-h-80 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-700" }, Zn = ["onClick"], Xn = ["checked", "onClick"], Wn = { class: "font-medium text-gray-900 dark:text-white" }, ea = { class: "text-xs text-gray-400" }, ta = {
  key: 0,
  class: "text-xs text-gray-400"
}, oa = {
  key: 1,
  class: "ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-dark-700 dark:text-gray-400"
}, na = { class: "flex justify-end gap-2" }, aa = ["disabled"], ra = /* @__PURE__ */ le({
  __name: "MonitorTemplateApplyPickerDialog",
  props: {
    show: { type: Boolean },
    templateId: {},
    templateName: {}
  },
  emits: ["close", "applied"],
  setup(m, { emit: h }) {
    const p = m, x = h, { t } = se(), f = Se(), k = E(!1), u = E(!1), y = E([]), $ = E([]), D = S(() => new Set($.value));
    re(
      () => [p.show, p.templateId],
      ([w, R]) => {
        !w || R == null || G(R);
      },
      { immediate: !0 }
    );
    async function G(w) {
      k.value = !0, y.value = [], $.value = [];
      try {
        const { items: R } = await K.channelMonitorTemplate.listAssociatedMonitors(w);
        y.value = R, $.value = R.map((A) => A.id);
      } catch (R) {
        f.showError(W(R, t("common.error")));
      } finally {
        k.value = !1;
      }
    }
    function z(w) {
      const R = $.value.indexOf(w);
      R >= 0 ? $.value.splice(R, 1) : $.value.push(w);
    }
    function P() {
      $.value = y.value.map((w) => w.id);
    }
    function o() {
      $.value = [];
    }
    async function b() {
      if (!(p.templateId == null || $.value.length === 0 || u.value)) {
        u.value = !0;
        try {
          const { affected: w } = await K.channelMonitorTemplate.apply(
            p.templateId,
            [...$.value]
          );
          f.showSuccess(t("admin.channelMonitor.template.applySuccess", { n: w })), x("applied", w), x("close");
        } catch (w) {
          f.showError(W(w, t("common.error")));
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, R) => (c(), fe(we, {
      show: m.show,
      title: n(t)("admin.channelMonitor.template.applyPickerTitle", { name: m.templateName }),
      onClose: R[1] || (R[1] = (A) => w.$emit("close"))
    }, {
      footer: V(() => [
        e("div", na, [
          e("button", {
            class: "btn btn-secondary",
            onClick: R[0] || (R[0] = (A) => w.$emit("close"))
          }, a(n(t)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: u.value || $.value.length === 0,
            onClick: b
          }, a(u.value ? n(t)("common.submitting") : n(t)("admin.channelMonitor.template.applyPickerConfirm", { n: $.value.length })), 9, aa)
        ])
      ]),
      default: V(() => [
        e("p", qn, a(n(t)("admin.channelMonitor.template.applyPickerHint")), 1),
        k.value ? (c(), v("div", Kn, a(n(t)("common.loading")), 1)) : y.value.length === 0 ? (c(), v("div", Gn, a(n(t)("admin.channelMonitor.template.applyPickerEmpty")), 1)) : (c(), v("div", Ln, [
          e("div", Jn, [
            e("button", {
              type: "button",
              class: "text-primary-600 hover:underline dark:text-primary-400",
              onClick: P
            }, a(n(t)("common.selectAll")), 1),
            e("button", {
              type: "button",
              class: "text-gray-500 hover:underline dark:text-gray-400",
              onClick: o
            }, a(n(t)("admin.channelMonitor.template.selectNone")), 1),
            e("span", Qn, a(n(t)("admin.channelMonitor.template.selectedCount", {
              n: $.value.length,
              total: y.value.length
            })), 1)
          ]),
          e("ul", Yn, [
            (c(!0), v(q, null, Z(y.value, (A) => (c(), v("li", {
              key: A.id,
              class: "flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-dark-800",
              onClick: (te) => z(A.id)
            }, [
              e("input", {
                type: "checkbox",
                checked: D.value.has(A.id),
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                onClick: ze((te) => z(A.id), ["stop"])
              }, null, 8, Xn),
              e("span", Wn, a(A.name), 1),
              e("span", ea, a(A.provider), 1),
              A.provider === "openai" ? (c(), v("span", ta, a(A.api_mode), 1)) : T("", !0),
              A.enabled ? T("", !0) : (c(), v("span", oa, a(n(t)("admin.channelMonitor.onlyDisabled").replace(/^仅|^Only /, "")), 1))
            ], 8, Zn))), 128))
          ])
        ]))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), la = { class: "mb-4 border-b border-gray-200 dark:border-dark-700" }, sa = {
  role: "tablist",
  class: "flex flex-wrap gap-1"
}, ia = ["aria-selected", "onClick"], da = {
  key: 0,
  class: "ml-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-dark-700"
}, ca = {
  key: 0,
  class: "space-y-2"
}, ua = { class: "flex justify-end" }, ma = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-400"
}, pa = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400"
}, va = { class: "flex items-start justify-between gap-3" }, ya = { class: "min-w-0 flex-1" }, ha = { class: "flex items-center gap-2" }, _a = { class: "font-medium text-gray-900 dark:text-white" }, fa = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, ba = {
  key: 0,
  class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400"
}, ga = { class: "mt-1 text-xs text-gray-400" }, xa = { class: "flex flex-shrink-0 gap-2" }, ka = ["disabled", "title", "onClick"], Ma = ["onClick"], $a = ["onClick"], wa = {
  key: 1,
  class: "space-y-4"
}, Ca = { class: "input-label" }, Ea = ["placeholder"], Pa = { key: 0 }, Oa = { class: "input-label" }, Sa = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, Ra = ["onClick"], Aa = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, Ta = { class: "input-label" }, Ia = { class: "grid gap-3 sm:grid-cols-2" }, Va = ["onClick"], Na = { class: "block text-sm font-semibold" }, Ua = { class: "mt-0.5 block text-xs opacity-80" }, Da = { class: "input-label" }, Ba = ["placeholder"], Fa = { class: "flex w-full items-center justify-between" }, Ha = { class: "flex gap-2" }, ja = ["disabled"], za = /* @__PURE__ */ le({
  __name: "MonitorTemplateManagerDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "updated"],
  setup(m, { emit: h }) {
    const p = m, x = h, { t } = se(), f = Se(), { providerPickerClass: k } = Ce(), u = S(() => [
      { value: $e, label: t("monitorCommon.providers.anthropic") },
      { value: L, label: t("monitorCommon.providers.openai") },
      { value: Et, label: t("monitorCommon.providers.gemini") },
      { value: _e, label: t("monitorCommon.providers.grok") },
      { value: Pe, label: t("monitorCommon.providers.antigravity") },
      { value: Ze, label: t("monitorCommon.providers.kimi") },
      { value: Ye, label: t("monitorCommon.providers.zhipu") },
      { value: Qe, label: t("monitorCommon.providers.deepseek") },
      { value: Je, label: t("monitorCommon.providers.minimax") },
      { value: Pt, label: t("monitorCommon.providers.opencode_go") }
    ]), y = E($e), $ = E([]), D = E(!1), G = S(
      () => $.value.filter((s) => s.provider === y.value)
    ), z = S(() => {
      const s = Object.fromEntries(Ct.map((_) => [_, 0]));
      for (const _ of $.value) s[_.provider]++;
      return s;
    }), P = E(null), o = E(!1), b = he(w($e));
    function w(s) {
      return {
        id: null,
        name: "",
        provider: s,
        api_mode: X,
        description: "",
        extra_headers: {},
        body_override_mode: "off",
        body_override: null
      };
    }
    function R(s) {
      b.id = s.id, b.name = s.name, b.provider = s.provider, b.api_mode = ce(s.api_mode), b.description = s.description, b.extra_headers = { ...s.extra_headers || {} }, b.body_override_mode = s.body_override_mode, b.body_override = s.body_override ? { ...s.body_override } : null;
    }
    function A() {
      Object.assign(b, w(y.value)), P.value = "new";
    }
    function te(s) {
      R(s), P.value = s.id;
    }
    function ie() {
      P.value = null;
    }
    async function N() {
      D.value = !0;
      try {
        const { items: s } = await K.channelMonitorTemplate.list();
        $.value = s;
      } catch (s) {
        f.showError(W(s, t("common.error")));
      } finally {
        D.value = !1;
      }
    }
    re(
      () => p.show,
      (s) => {
        s && (P.value = null, N());
      },
      { immediate: !0 }
    );
    async function F() {
      if (!o.value) {
        if (!b.name.trim()) {
          f.showError(t("admin.channelMonitor.template.missingName"));
          return;
        }
        o.value = !0;
        try {
          P.value === "new" ? (await K.channelMonitorTemplate.create({
            name: b.name.trim(),
            provider: b.provider,
            api_mode: b.provider === L ? b.api_mode : X,
            description: b.description.trim(),
            extra_headers: b.extra_headers,
            body_override_mode: b.body_override_mode,
            body_override: b.body_override
          }), f.showSuccess(t("admin.channelMonitor.template.createSuccess"))) : typeof P.value == "number" && (await K.channelMonitorTemplate.update(P.value, {
            name: b.name.trim(),
            api_mode: b.provider === L ? b.api_mode : X,
            description: b.description.trim(),
            extra_headers: b.extra_headers,
            body_override_mode: b.body_override_mode,
            body_override: b.body_override
          }), f.showSuccess(t("admin.channelMonitor.template.updateSuccess"))), await N(), x("updated"), P.value = null;
        } catch (s) {
          f.showError(W(s, t("common.error")));
        } finally {
          o.value = !1;
        }
      }
    }
    const g = he({
      show: !1,
      tpl: null
    });
    function M(s) {
      g.tpl = s, g.show = !0;
    }
    async function I(s) {
      await N(), x("updated");
    }
    const O = he({
      show: !1,
      tpl: null
    });
    function Y(s) {
      O.tpl = s, O.show = !0;
    }
    const de = S(() => {
      const s = O.tpl;
      return s ? t("admin.channelMonitor.template.deleteConfirm", {
        name: s.name,
        n: s.associated_monitors
      }) : "";
    });
    async function be() {
      const s = O.tpl;
      if (O.show = !1, !!s)
        try {
          await K.channelMonitorTemplate.del(s.id), f.showSuccess(t("admin.channelMonitor.template.deleteSuccess")), await N(), x("updated");
        } catch (_) {
          f.showError(W(_, t("common.error")));
        }
    }
    function ve(s) {
      return y.value === s ? "border-b-2 border-primary-500 text-primary-600 dark:text-primary-400" : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";
    }
    function ye(s) {
      switch (s) {
        case "merge":
          return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
        case "replace":
          return "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300";
        default:
          return "bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300";
      }
    }
    function ge(s) {
      return t(`admin.channelMonitor.advanced.bodyMode${s.charAt(0).toUpperCase()}${s.slice(1)}`);
    }
    const ue = S(() => [
      {
        value: X,
        label: t("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: t("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ae,
        label: t("admin.channelMonitor.form.apiModeResponses"),
        hint: t("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    re(() => b.provider, (s) => {
      s !== L && (b.api_mode = X);
    });
    function ce(s) {
      return s === ae ? ae : X;
    }
    function xe(s) {
      return b.api_mode === s ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ke(s) {
      return ce(s) === ae ? t("admin.channelMonitor.form.apiModeResponses") : t("admin.channelMonitor.form.apiModeChatCompletions");
    }
    function oe(s) {
      return ce(s) === ae ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
    }
    return (s, _) => (c(), v(q, null, [
      C(we, {
        show: m.show,
        title: n(t)("admin.channelMonitor.template.managerTitle"),
        width: "wide",
        onClose: _[6] || (_[6] = (r) => s.$emit("close"))
      }, {
        footer: V(() => [
          e("div", Fa, [
            e("div", null, [
              P.value ? (c(), v("button", {
                key: 0,
                class: "btn btn-secondary",
                onClick: ie
              }, a(n(t)("common.back")), 1)) : T("", !0)
            ]),
            e("div", Ha, [
              e("button", {
                class: "btn btn-secondary",
                onClick: _[5] || (_[5] = (r) => s.$emit("close"))
              }, a(n(t)("common.close")), 1),
              P.value ? (c(), v("button", {
                key: 0,
                class: "btn btn-primary",
                disabled: o.value,
                onClick: F
              }, a(o.value ? n(t)("common.submitting") : P.value === "new" ? n(t)("common.create") : n(t)("common.update")), 9, ja)) : T("", !0)
            ])
          ])
        ]),
        default: V(() => [
          e("div", la, [
            e("div", sa, [
              (c(!0), v(q, null, Z(u.value, (r) => (c(), v("button", {
                key: r.value,
                type: "button",
                role: "tab",
                "aria-selected": y.value === r.value,
                class: j(["px-4 py-2 text-sm font-medium transition-colors", ve(r.value)]),
                onClick: (U) => y.value = r.value
              }, [
                H(a(r.label) + " ", 1),
                z.value[r.value] > 0 ? (c(), v("span", da, a(z.value[r.value]), 1)) : T("", !0)
              ], 10, ia))), 128))
            ])
          ]),
          P.value ? (c(), v("div", wa, [
            e("div", null, [
              e("label", Ca, [
                H(a(n(t)("admin.channelMonitor.template.form.name")) + " ", 1),
                _[9] || (_[9] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              J(e("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (r) => b.name = r),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.template.form.namePlaceholder")
              }, null, 8, Ea), [
                [Q, b.name]
              ])
            ]),
            P.value === "new" ? (c(), v("div", Pa, [
              e("label", Oa, [
                H(a(n(t)("admin.channelMonitor.form.provider")) + " ", 1),
                _[10] || (_[10] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Sa, [
                (c(!0), v(q, null, Z(u.value, (r) => (c(), v("button", {
                  key: r.value,
                  type: "button",
                  class: j(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", n(k)(r.value, b.provider === r.value)]),
                  onClick: (U) => b.provider = r.value
                }, a(r.label), 11, Ra))), 128))
              ])
            ])) : T("", !0),
            b.provider === n(L) ? (c(), v("div", Aa, [
              e("label", Ta, a(n(t)("admin.channelMonitor.form.apiMode")), 1),
              e("div", Ia, [
                (c(!0), v(q, null, Z(ue.value, (r) => (c(), v("button", {
                  key: r.value,
                  type: "button",
                  class: j(["rounded-lg border-2 px-3 py-2 text-left transition-colors", xe(r.value)]),
                  onClick: (U) => b.api_mode = r.value
                }, [
                  e("span", Na, a(r.label), 1),
                  e("span", Ua, a(r.hint), 1)
                ], 10, Va))), 128))
              ])
            ])) : T("", !0),
            e("div", null, [
              e("label", Da, a(n(t)("admin.channelMonitor.template.form.description")), 1),
              J(e("input", {
                "onUpdate:modelValue": _[1] || (_[1] = (r) => b.description = r),
                type: "text",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.template.form.descriptionPlaceholder")
              }, null, 8, Ba), [
                [Q, b.description]
              ])
            ]),
            C(We, {
              provider: b.provider,
              "api-mode": b.api_mode,
              "extra-headers": b.extra_headers,
              "body-override-mode": b.body_override_mode,
              "body-override": b.body_override,
              "onUpdate:extraHeaders": _[2] || (_[2] = (r) => b.extra_headers = r),
              "onUpdate:bodyOverrideMode": _[3] || (_[3] = (r) => b.body_override_mode = r),
              "onUpdate:bodyOverride": _[4] || (_[4] = (r) => b.body_override = r)
            }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
          ])) : (c(), v("div", ca, [
            e("div", ua, [
              e("button", {
                class: "btn btn-primary btn-sm",
                onClick: A
              }, [
                C(ee, {
                  name: "plus",
                  size: "sm",
                  class: "mr-1"
                }),
                H(" " + a(n(t)("admin.channelMonitor.template.createButton")), 1)
              ])
            ]),
            D.value ? (c(), v("div", ma, a(n(t)("common.loading")), 1)) : G.value.length === 0 ? (c(), v("div", pa, a(n(t)("admin.channelMonitor.template.emptyState")), 1)) : (c(!0), v(q, { key: 2 }, Z(G.value, (r) => (c(), v("div", {
              key: r.id,
              class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
            }, [
              e("div", va, [
                e("div", ya, [
                  e("div", ha, [
                    e("span", _a, a(r.name), 1),
                    e("span", {
                      class: j(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", ye(r.body_override_mode)])
                    }, a(ge(r.body_override_mode)), 3),
                    r.provider === n(L) ? (c(), v("span", {
                      key: 0,
                      class: j(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", oe(r.api_mode)])
                    }, a(ke(r.api_mode)), 3)) : T("", !0),
                    r.associated_monitors > 0 ? (c(), v("span", fa, a(n(t)("admin.channelMonitor.template.associatedCount", { n: r.associated_monitors })), 1)) : T("", !0)
                  ]),
                  r.description ? (c(), v("p", ba, a(r.description), 1)) : T("", !0),
                  e("p", ga, a(n(t)("admin.channelMonitor.template.headersSummary", {
                    n: Object.keys(r.extra_headers || {}).length
                  })), 1)
                ]),
                e("div", xa, [
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    disabled: r.associated_monitors === 0,
                    title: n(t)("admin.channelMonitor.template.applyTooltip"),
                    onClick: (U) => M(r)
                  }, [
                    C(ee, {
                      name: "refresh",
                      size: "sm",
                      class: "mr-1"
                    }),
                    H(" " + a(n(t)("admin.channelMonitor.template.applyButton")), 1)
                  ], 8, ka),
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    onClick: (U) => te(r)
                  }, a(n(t)("common.edit")), 9, Ma),
                  e("button", {
                    class: "btn btn-secondary btn-sm text-red-600",
                    onClick: (U) => Y(r)
                  }, a(n(t)("common.delete")), 9, $a)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        _: 1
      }, 8, ["show", "title"]),
      C(ra, {
        show: g.show,
        "template-id": g.tpl ? g.tpl.id : null,
        "template-name": g.tpl ? g.tpl.name : "",
        onClose: _[7] || (_[7] = (r) => g.show = !1),
        onApplied: I
      }, null, 8, ["show", "template-id", "template-name"]),
      C(Ke, {
        show: O.show,
        title: n(t)("common.delete"),
        message: de.value,
        "confirm-text": n(t)("common.delete"),
        "cancel-text": n(t)("common.cancel"),
        danger: !0,
        onConfirm: be,
        onCancel: _[8] || (_[8] = (r) => O.show = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
}), qa = { class: "space-y-2" }, Ka = { class: "flex flex-col" }, Ga = { class: "font-medium text-gray-900 dark:text-white" }, La = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Ja = { class: "flex items-center gap-2" }, Qa = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ya = { class: "flex justify-end" }, Za = /* @__PURE__ */ le({
  __name: "MonitorRunResultDialog",
  props: {
    show: { type: Boolean },
    results: {}
  },
  emits: ["close"],
  setup(m) {
    const { t: h } = se(), { statusLabel: p, statusBadgeClass: x, formatLatency: t } = Ce();
    return (f, k) => (c(), fe(we, {
      show: m.show,
      title: n(h)("admin.channelMonitor.runResultTitle"),
      width: "normal",
      onClose: k[1] || (k[1] = (u) => f.$emit("close"))
    }, {
      footer: V(() => [
        e("div", Ya, [
          e("button", {
            onClick: k[0] || (k[0] = (u) => f.$emit("close")),
            class: "btn btn-primary"
          }, a(n(h)("common.close")), 1)
        ])
      ]),
      default: V(() => [
        e("div", qa, [
          (c(!0), v(q, null, Z(m.results, (u) => (c(), v("div", {
            key: u.model,
            class: "flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-dark-600"
          }, [
            e("div", Ka, [
              e("span", Ga, a(u.model), 1),
              u.message ? (c(), v("span", La, a(u.message), 1)) : T("", !0),
              C(Xe, {
                snapshot: u.quota,
                class: "mt-1"
              }, null, 8, ["snapshot"])
            ]),
            e("div", Ja, [
              e("span", {
                class: j(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", n(x)(u.status)])
              }, a(n(p)(u.status)), 3),
              e("span", Qa, a(n(t)(u.latency_ms)) + " ms", 1)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Xa = { class: "flex flex-col gap-0.5" }, Wa = { class: "flex items-center gap-2" }, er = { class: "text-sm text-gray-900 dark:text-gray-100" }, tr = { class: "space-y-2" }, or = { class: "text-xs font-semibold text-gray-100" }, nr = {
  key: 0,
  class: "text-[11px] text-gray-300"
}, ar = {
  key: 1,
  class: "space-y-1"
}, rr = { class: "text-[11px] font-semibold uppercase tracking-wide text-gray-400" }, lr = { class: "w-full text-left text-[11px]" }, sr = { class: "text-gray-400" }, ir = { class: "py-0.5 pr-2 font-medium" }, dr = { class: "py-0.5 pr-2 font-medium" }, cr = { class: "py-0.5 font-medium" }, ur = { class: "py-0.5 pr-2 text-gray-100" }, mr = { class: "py-0.5 pr-2" }, pr = { class: "py-0.5 text-gray-100" }, vr = /* @__PURE__ */ le({
  __name: "MonitorPrimaryModelCell",
  props: {
    row: {}
  },
  setup(m) {
    const { t: h } = se(), { statusLabel: p, statusBadgeClass: x, formatLatency: t } = Ce();
    return (f, k) => (c(), v("div", Xa, [
      e("div", Wa, [
        e("span", er, a(m.row.primary_model), 1),
        C(Ge, null, {
          trigger: V(() => [
            e("span", {
              class: j(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", n(x)(m.row.primary_status)])
            }, a(n(p)(m.row.primary_status)), 3)
          ]),
          default: V(() => {
            var u;
            return [
              e("div", tr, [
                e("div", or, [
                  H(a(m.row.primary_model) + " ", 1),
                  e("span", {
                    class: j(["ml-1 inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium", n(x)(m.row.primary_status)])
                  }, a(n(p)(m.row.primary_status)), 3)
                ]),
                (((u = m.row.extra_models) == null ? void 0 : u.length) ?? 0) === 0 ? (c(), v("div", nr, a(n(h)("monitorCommon.extraModelsEmpty")), 1)) : (c(), v("div", ar, [
                  e("div", rr, a(n(h)("monitorCommon.extraModelsHeader")), 1),
                  e("table", lr, [
                    e("thead", null, [
                      e("tr", sr, [
                        e("th", ir, a(n(h)("admin.channelMonitor.columns.primaryModel")), 1),
                        e("th", dr, a(n(h)("admin.channelMonitor.columns.actions")), 1),
                        e("th", cr, a(n(h)("admin.channelMonitor.columns.latency")), 1)
                      ])
                    ]),
                    e("tbody", null, [
                      (c(!0), v(q, null, Z(m.row.extra_models_status || [], (y) => (c(), v("tr", {
                        key: y.model
                      }, [
                        e("td", ur, a(y.model), 1),
                        e("td", mr, [
                          e("span", {
                            class: j(["inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]", n(x)(y.status)])
                          }, a(n(p)(y.status)), 3)
                        ]),
                        e("td", pr, a(n(t)(y.latency_ms)), 1)
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
      C(Xe, {
        snapshot: m.row.latest_quota
      }, null, 8, ["snapshot"])
    ]));
  }
}), yr = { class: "flex items-center gap-1" }, hr = ["disabled"], _r = { class: "text-xs" }, fr = ["title", "disabled"], br = { class: "text-xs" }, gr = { class: "text-xs" }, xr = { class: "text-xs" }, kr = /* @__PURE__ */ le({
  __name: "MonitorActionsCell",
  props: {
    row: {},
    running: { type: Boolean },
    duplicating: { type: Boolean }
  },
  emits: ["run", "duplicate", "edit", "delete"],
  setup(m) {
    const h = m, { t: p } = se(), x = S(() => h.row.api_key_decrypt_failed ? p("admin.channelMonitor.duplicateKeyUnavailable") : h.duplicating ? p("admin.channelMonitor.duplicating") : p("admin.channelMonitor.duplicate"));
    return (t, f) => (c(), v("div", yr, [
      e("button", {
        onClick: f[0] || (f[0] = (k) => t.$emit("run", m.row)),
        disabled: m.running,
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        C(ee, {
          name: "refresh",
          size: "sm",
          class: j(m.running ? "animate-spin" : "")
        }, null, 8, ["class"]),
        e("span", _r, a(n(p)("admin.channelMonitor.runNow")), 1)
      ], 8, hr),
      e("button", {
        "data-testid": "monitor-duplicate",
        title: x.value,
        disabled: m.duplicating || !!m.row.api_key_decrypt_failed,
        onClick: f[1] || (f[1] = (k) => t.$emit("duplicate", m.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        C(ee, {
          name: "copy",
          size: "sm"
        }),
        e("span", br, a(m.duplicating ? n(p)("admin.channelMonitor.duplicating") : n(p)("admin.channelMonitor.duplicate")), 1)
      ], 8, fr),
      e("button", {
        onClick: f[2] || (f[2] = (k) => t.$emit("edit", m.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        C(ee, {
          name: "edit",
          size: "sm"
        }),
        e("span", gr, a(n(p)("common.edit")), 1)
      ]),
      e("button", {
        onClick: f[3] || (f[3] = (k) => t.$emit("delete", m.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
      }, [
        C(ee, {
          name: "trash",
          size: "sm"
        }),
        e("span", xr, a(n(p)("common.delete")), 1)
      ])
    ]));
  }
}), Mr = { class: "w-full min-w-0 space-y-6 pb-8" }, $r = { class: "page-header mb-0 px-1 py-2" }, wr = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Cr = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Er = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Pr = { class: "flex items-center gap-1.5" }, Or = { class: "font-medium text-gray-900 dark:text-white" }, Sr = { class: "text-sm text-gray-900 dark:text-gray-100" }, Rr = { class: "text-sm text-gray-900 dark:text-gray-100" }, zr = /* @__PURE__ */ le({
  __name: "ChannelMonitorView",
  setup(m) {
    const { t: h } = se(), p = Se(), {
      providerLabel: x,
      providerBadgeClass: t,
      formatLatency: f,
      formatAvailability: k
    } = Ce(), u = E([]), y = E(!1), $ = E(null), D = E(""), G = E(""), z = E(""), P = he({ page: 1, page_size: ut(), total: 0 }), o = E(!1), b = E(!1), w = E(null), R = E(!1), A = E(null), te = E(!1), ie = E([]), N = he(/* @__PURE__ */ new Set());
    let F = null, g = null;
    const M = S(() => [
      { key: "name", label: h("admin.channelMonitor.columns.name"), sortable: !1 },
      { key: "provider", label: h("admin.channelMonitor.columns.provider"), sortable: !1 },
      { key: "primary_model", label: h("admin.channelMonitor.columns.primaryModel"), sortable: !1 },
      { key: "availability_7d", label: h("admin.channelMonitor.columns.availability7d"), sortable: !1 },
      { key: "latency", label: h("admin.channelMonitor.columns.latency"), sortable: !1 },
      { key: "enabled", label: h("admin.channelMonitor.columns.enabled"), sortable: !1 },
      { key: "actions", label: h("admin.channelMonitor.columns.actions"), sortable: !1 }
    ]), I = S(() => {
      var _;
      const s = ((_ = A.value) == null ? void 0 : _.name) || "";
      return h("admin.channelMonitor.deleteConfirm", { name: s });
    });
    async function O() {
      F && F.abort();
      const s = new AbortController();
      F = s, y.value = !0;
      try {
        const _ = {
          page: P.page,
          page_size: P.page_size
        };
        G.value && (_.provider = G.value), z.value === "true" && (_.enabled = !0), z.value === "false" && (_.enabled = !1), D.value.trim() && (_.search = D.value.trim());
        const r = await K.channelMonitor.list(_, { signal: s.signal });
        if (s.signal.aborted || F !== s) return;
        u.value = r.items || [], P.total = r.total;
      } catch (_) {
        const r = _;
        if ((r == null ? void 0 : r.name) === "AbortError" || (r == null ? void 0 : r.code) === "ERR_CANCELED") return;
        p.showError(W(_, h("admin.channelMonitor.loadError")));
      } finally {
        F === s && (y.value = !1, F = null);
      }
    }
    function Y() {
      g && clearTimeout(g), g = setTimeout(() => {
        P.page = 1, O();
      }, 300);
    }
    function de(s) {
      P.page = s, O();
    }
    function be(s) {
      P.page_size = s, P.page = 1, O();
    }
    function ve() {
      w.value = null, o.value = !0;
    }
    function ye(s) {
      w.value = s, o.value = !0;
    }
    function ge() {
      o.value = !1, w.value = null;
    }
    async function ue(s) {
      const _ = !s.enabled;
      try {
        await K.channelMonitor.update(s.id, { enabled: _ }), s.enabled = _;
      } catch (r) {
        p.showError(W(r, h("common.error")));
      }
    }
    async function ce(s) {
      if ($.value == null) {
        $.value = s.id;
        try {
          const _ = await K.channelMonitor.runNow(s.id);
          ie.value = _.results || [], te.value = !0, p.showSuccess(h("admin.channelMonitor.runSuccess")), O();
        } catch (_) {
          p.showError(W(_, h("admin.channelMonitor.runFailed")));
        } finally {
          $.value = null;
        }
      }
    }
    async function xe(s) {
      if (s.api_key_decrypt_failed) {
        p.showError(h("admin.channelMonitor.duplicateKeyUnavailable"));
        return;
      }
      if (!N.has(s.id)) {
        N.add(s.id);
        try {
          const _ = await K.channelMonitor.duplicate(s.id);
          p.showSuccess(h("admin.channelMonitor.duplicateSuccess", { name: _.name })), await O();
        } catch (_) {
          p.showError(W(_, h("admin.channelMonitor.duplicateFailed")));
        } finally {
          N.delete(s.id);
        }
      }
    }
    function ke(s) {
      A.value = s, R.value = !0;
    }
    async function oe() {
      if (A.value)
        try {
          await K.channelMonitor.del(A.value.id), p.showSuccess(h("admin.channelMonitor.deleteSuccess")), R.value = !1, A.value = null, O();
        } catch (s) {
          p.showError(W(s, h("common.error")));
        }
    }
    return dt(() => {
      O();
    }), ct(() => {
      g && clearTimeout(g), F == null || F.abort();
    }), (s, _) => (c(), v(q, null, [
      e("div", Mr, [
        e("header", $r, [
          e("h1", wr, [
            e("span", Cr, [
              C(ee, {
                name: "chart",
                size: "sm"
              })
            ]),
            H(" " + a(n(h)("admin.channelMonitor.title")), 1)
          ]),
          e("p", Er, a(n(h)("admin.channelMonitor.description")), 1)
        ]),
        C(vt, null, {
          filters: V(() => [
            C(Gt, {
              search: D.value,
              "onUpdate:search": _[0] || (_[0] = (r) => D.value = r),
              provider: G.value,
              "onUpdate:provider": _[1] || (_[1] = (r) => G.value = r),
              enabled: z.value,
              "onUpdate:enabled": _[2] || (_[2] = (r) => z.value = r),
              loading: y.value,
              onReload: O,
              onCreate: ve,
              onManageTemplates: _[3] || (_[3] = (r) => b.value = !0),
              onSearchInput: Y
            }, null, 8, ["search", "provider", "enabled", "loading"])
          ]),
          table: V(() => [
            C(pt, {
              columns: M.value,
              data: u.value,
              loading: y.value
            }, {
              "cell-name": V(({ row: r, value: U }) => [
                e("div", Pr, [
                  e("span", Or, a(U), 1),
                  r.api_key_decrypt_failed ? (c(), fe(Ge, {
                    key: 0,
                    content: n(h)("admin.channelMonitor.apiKeyDecryptFailed")
                  }, {
                    default: V(() => [
                      C(ee, {
                        name: "exclamationTriangle",
                        size: "sm",
                        class: "text-red-500"
                      })
                    ]),
                    _: 1
                  }, 8, ["content"])) : T("", !0)
                ])
              ]),
              "cell-provider": V(({ row: r }) => [
                e("span", {
                  class: j(["inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", n(t)(r.provider)])
                }, a(n(x)(r.provider)), 3)
              ]),
              "cell-primary_model": V(({ row: r }) => [
                C(vr, { row: r }, null, 8, ["row"])
              ]),
              "cell-availability_7d": V(({ row: r }) => [
                e("span", Sr, a(n(k)(r)), 1)
              ]),
              "cell-latency": V(({ row: r }) => [
                e("span", Rr, a(n(f)(r.primary_latency_ms)), 1)
              ]),
              "cell-enabled": V(({ row: r }) => [
                C(Le, {
                  modelValue: r.enabled,
                  "onUpdate:modelValue": (U) => ue(r)
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              "cell-actions": V(({ row: r }) => [
                C(kr, {
                  row: r,
                  running: $.value === r.id,
                  duplicating: N.has(r.id),
                  onRun: ce,
                  onDuplicate: xe,
                  onEdit: ye,
                  onDelete: ke
                }, null, 8, ["row", "running", "duplicating"])
              ]),
              empty: V(() => [
                C(yt, {
                  title: n(h)("admin.channelMonitor.noMonitorsYet"),
                  description: n(h)("admin.channelMonitor.createFirstMonitor"),
                  "action-text": n(h)("admin.channelMonitor.createButton"),
                  onAction: ve
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: V(() => [
            P.total > 0 ? (c(), fe(mt, {
              key: 0,
              page: P.page,
              total: P.total,
              "page-size": P.page_size,
              "onUpdate:page": de,
              "onUpdate:pageSize": be
            }, null, 8, ["page", "total", "page-size"])) : T("", !0)
          ]),
          _: 1
        })
      ]),
      C(zn, {
        show: o.value,
        monitor: w.value,
        onClose: ge,
        onSaved: O
      }, null, 8, ["show", "monitor"]),
      C(za, {
        show: b.value,
        onClose: _[4] || (_[4] = (r) => b.value = !1),
        onUpdated: O
      }, null, 8, ["show"]),
      C(Za, {
        show: te.value,
        results: ie.value,
        onClose: _[5] || (_[5] = (r) => te.value = !1)
      }, null, 8, ["show", "results"]),
      C(Ke, {
        show: R.value,
        title: n(h)("common.delete"),
        message: I.value,
        "confirm-text": n(h)("common.delete"),
        "cancel-text": n(h)("common.cancel"),
        danger: !0,
        onConfirm: oe,
        onCancel: _[6] || (_[6] = (r) => R.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
});
export {
  zr as default
};
