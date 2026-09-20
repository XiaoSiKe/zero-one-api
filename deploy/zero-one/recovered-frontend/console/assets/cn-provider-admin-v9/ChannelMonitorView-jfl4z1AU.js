import { a as xe, d as me, Y as Ie, u as pe, p as R, m as l, f as u, g as e, q as O, _ as se, x as G, y as L, i as n, s as Q, k as F, h as a, Z as Fe, r as P, w as ue, A as ge, v as B, F as J, j as ne, l as N, e as Ce, b as ke, z as Ge, c as Le, $ as mt, W as Pe, o as pt } from "./cnProviderAdminLeaf-DOTfdkE4.js";
import { a as re } from "./apiError-i2TfMBqu.js";
import { C as Je, b as W, _ as Qe, g as ht, P as vt, D as _t } from "./platforms-CNf91vOK.js";
import { T as yt } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-B2Zys8YY.js";
import { _ as bt } from "./EmptyState.vue_vue_type_script_setup_true_lang-BTP-DF39.js";
import { _ as Ye } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-DLTPws2t.js";
import { _ as Re } from "./Toggle.vue_vue_type_script_setup_true_lang-Bpt9LJUS.js";
import { S as Ae, _ as Ve } from "./BaseDialog.vue_vue_type_script_setup_true_lang-B6Pfcffn.js";
import { k as gt, _ as ft } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-DEY1jpBZ.js";
import { _ as xt } from "./GroupBadge.vue_vue_type_script_setup_true_lang-DGHumabJ.js";
import { P as ae, A as ye, a as Me, D as Ue, u as Ee, C as $e, b as ie, c as we, _ as kt, d as qe, e as Mt, f as $t, g as wt, h as Ct, i as Se, j as Oe, k as Vt, l as Ze, m as Xe, n as We, o as et, p as Et, q as Pt, r as Ot, s as St, t as tt, M as Rt, v as At, w as Tt, x as It, y as Ut, z as Ke } from "./channelMonitorV2-Bm8vNoi3.js";
async function Nt(v = 1, r = 10, h, M) {
  const { data: t } = await xe.get("/keys", {
    params: { page: v, page_size: r, ...h },
    signal: M == null ? void 0 : M.signal
  });
  return t;
}
async function Dt(v) {
  const { data: r } = await xe.get(`/keys/${v}`);
  return r;
}
async function zt(v, r, h, M, t, y, m, p) {
  const _ = { name: v };
  r !== void 0 && (_.group_id = r), h && (_.custom_key = h), M && M.length > 0 && (_.ip_whitelist = M), t && t.length > 0 && (_.ip_blacklist = t), y !== void 0 && y > 0 && (_.quota = y), m !== void 0 && m > 0 && (_.expires_in_days = m), p != null && p.rate_limit_5h && p.rate_limit_5h > 0 && (_.rate_limit_5h = p.rate_limit_5h), p != null && p.rate_limit_1d && p.rate_limit_1d > 0 && (_.rate_limit_1d = p.rate_limit_1d), p != null && p.rate_limit_7d && p.rate_limit_7d > 0 && (_.rate_limit_7d = p.rate_limit_7d);
  const { data: V } = await xe.post("/keys", _);
  return V;
}
async function Ne(v, r) {
  const { data: h } = await xe.put(`/keys/${v}`, r);
  return h;
}
async function jt(v, r) {
  const h = [...new Set(v)], M = { succeededIds: [], failures: [] };
  for (let t = 0; t < h.length; t += 5) {
    const y = h.slice(t, t + 5);
    (await Promise.allSettled(y.map((p) => Ne(p, r)))).forEach((p, _) => {
      p.status === "fulfilled" ? M.succeededIds.push(y[_]) : M.failures.push({ id: y[_], error: p.reason });
    });
  }
  return M;
}
async function Bt(v) {
  const { data: r } = await xe.delete(`/keys/${v}`);
  return r;
}
async function Ht(v, r) {
  return Ne(v, { status: r });
}
const Ft = {
  list: Nt,
  getById: Dt,
  create: zt,
  update: Ne,
  bulkUpdate: jt,
  delete: Bt,
  toggleStatus: Ht
};
async function qt() {
  const { data: v } = await xe.get("/groups/available");
  return v;
}
async function Kt() {
  const { data: v } = await xe.get("/groups/rates");
  return v || {};
}
const Gt = {
  getAvailable: qt,
  getUserGroupRates: Kt
}, Lt = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, Jt = { class: "flex flex-1 flex-wrap items-center gap-3" }, Qt = { class: "relative w-full sm:w-64" }, Yt = ["placeholder"], Zt = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, Xt = ["disabled", "title"], Wt = ["title"], en = /* @__PURE__ */ me({
  __name: "MonitorFiltersBar",
  props: /* @__PURE__ */ Fe({
    loading: { type: Boolean }
  }, {
    search: { required: !0 },
    searchModifiers: {},
    provider: { required: !0 },
    providerModifiers: {},
    enabled: { required: !0 },
    enabledModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["reload", "create", "manage-templates", "search-input"], ["update:search", "update:provider", "update:enabled"]),
  setup(v) {
    const r = Ie(v, "search"), h = Ie(v, "provider"), M = Ie(v, "enabled"), { t } = pe(), y = R(() => [
      { value: "", label: t("admin.channelMonitor.allProviders") },
      ...Je.map(({ value: p }) => ({
        value: p,
        label: t(`monitorCommon.providers.${p}`)
      }))
    ]), m = R(() => [
      { value: "", label: t("admin.channelMonitor.allStatus") },
      { value: "true", label: t("admin.channelMonitor.onlyEnabled") },
      { value: "false", label: t("admin.channelMonitor.onlyDisabled") }
    ]);
    return (p, _) => (l(), u("div", Lt, [
      e("div", Jt, [
        e("div", Qt, [
          O(se, {
            name: "search",
            size: "md",
            class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          }),
          G(e("input", {
            "onUpdate:modelValue": _[0] || (_[0] = (V) => r.value = V),
            type: "text",
            placeholder: n(t)("admin.channelMonitor.searchPlaceholder"),
            class: "input pl-10",
            onInput: _[1] || (_[1] = (V) => p.$emit("search-input"))
          }, null, 40, Yt), [
            [L, r.value]
          ])
        ]),
        O(Ae, {
          modelValue: h.value,
          "onUpdate:modelValue": _[2] || (_[2] = (V) => h.value = V),
          options: y.value,
          placeholder: n(t)("admin.channelMonitor.allProviders"),
          class: "w-44",
          onChange: _[3] || (_[3] = (V) => p.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"]),
        O(Ae, {
          modelValue: M.value,
          "onUpdate:modelValue": _[4] || (_[4] = (V) => M.value = V),
          options: m.value,
          placeholder: n(t)("admin.channelMonitor.enabledFilter"),
          class: "w-40",
          onChange: _[5] || (_[5] = (V) => p.$emit("reload"))
        }, null, 8, ["modelValue", "options", "placeholder"])
      ]),
      e("div", Zt, [
        e("button", {
          onClick: _[6] || (_[6] = (V) => p.$emit("reload")),
          disabled: v.loading,
          class: "btn btn-secondary",
          title: n(t)("common.refresh")
        }, [
          O(se, {
            name: "refresh",
            size: "md",
            class: Q(v.loading ? "animate-spin" : "")
          }, null, 8, ["class"])
        ], 8, Xt),
        e("button", {
          onClick: _[7] || (_[7] = (V) => p.$emit("manage-templates")),
          class: "btn btn-secondary",
          title: n(t)("admin.channelMonitor.template.manageButton")
        }, [
          O(se, {
            name: "cog",
            size: "md",
            class: "mr-2"
          }),
          F(" " + a(n(t)("admin.channelMonitor.template.manageButton")), 1)
        ], 8, Wt),
        e("button", {
          onClick: _[8] || (_[8] = (V) => p.$emit("create")),
          class: "btn btn-primary"
        }, [
          O(se, {
            name: "plus",
            size: "md",
            class: "mr-2"
          }),
          F(" " + a(n(t)("admin.channelMonitor.createButton")), 1)
        ])
      ])
    ]));
  }
});
function tn(v) {
  return v ? v.length <= 12 ? `${v.slice(0, 4)}***` : `${v.slice(0, 6)}...${v.slice(-4)}` : "";
}
const nn = { class: "space-y-3" }, on = { class: "text-xs text-gray-500 dark:text-gray-400" }, an = { class: "relative" }, rn = ["placeholder"], sn = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-500"
}, ln = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-500"
}, dn = {
  key: 2,
  class: "max-h-96 overflow-auto rounded-lg border border-gray-200 dark:border-dark-600"
}, cn = { class: "w-full text-sm" }, un = { class: "bg-gray-50 dark:bg-dark-800 sticky top-0 z-10" }, mn = { class: "text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" }, pn = { class: "px-3 py-2" }, hn = { class: "px-3 py-2" }, vn = { class: "px-3 py-2" }, _n = { class: "divide-y divide-gray-200 dark:divide-dark-700" }, yn = ["onClick"], bn = { class: "px-3 py-2 font-medium text-gray-900 dark:text-white" }, gn = { class: "px-3 py-2 font-mono text-xs text-gray-500 dark:text-gray-400" }, fn = { class: "px-3 py-2" }, xn = {
  key: 1,
  class: "text-xs text-gray-400"
}, kn = { class: "flex justify-end" }, Mn = /* @__PURE__ */ me({
  __name: "MonitorKeyPickerDialog",
  props: {
    show: { type: Boolean },
    loading: { type: Boolean },
    keys: {},
    provider: {},
    userGroupRates: { default: () => ({}) }
  },
  emits: ["close", "pick"],
  setup(v) {
    const r = v, { t: h } = pe(), M = P("");
    ue(() => r.show, (y) => {
      y || (M.value = "");
    });
    const t = R(() => {
      const y = M.value.trim().toLowerCase();
      return r.keys.filter((m) => {
        var p, _;
        return ((p = m.group) == null ? void 0 : p.platform) !== r.provider ? !1 : y ? m.name.toLowerCase().includes(y) || m.key.toLowerCase().includes(y) || (((_ = m.group) == null ? void 0 : _.name) || "").toLowerCase().includes(y) : !0;
      });
    });
    return (y, m) => (l(), ge(Ve, {
      show: v.show,
      title: n(h)("admin.channelMonitor.form.selectKeyTitle"),
      width: "wide",
      onClose: m[2] || (m[2] = (p) => y.$emit("close"))
    }, {
      footer: B(() => [
        e("div", kn, [
          e("button", {
            onClick: m[1] || (m[1] = (p) => y.$emit("close")),
            class: "btn btn-secondary"
          }, a(n(h)("common.cancel")), 1)
        ])
      ]),
      default: B(() => [
        e("div", nn, [
          e("p", on, a(n(h)("admin.channelMonitor.form.selectKeyHint")), 1),
          e("div", an, [
            G(e("input", {
              "onUpdate:modelValue": m[0] || (m[0] = (p) => M.value = p),
              type: "text",
              class: "input pl-9",
              placeholder: n(h)("keys.searchPlaceholder")
            }, null, 8, rn), [
              [L, M.value]
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
          v.loading ? (l(), u("div", sn, a(n(h)("common.loading")), 1)) : t.value.length === 0 ? (l(), u("div", ln, a(n(h)("admin.channelMonitor.form.noActiveKey")), 1)) : (l(), u("div", dn, [
            e("table", cn, [
              e("thead", un, [
                e("tr", mn, [
                  e("th", pn, a(n(h)("common.name")), 1),
                  e("th", hn, a(n(h)("keys.apiKey")), 1),
                  e("th", vn, a(n(h)("keys.group")), 1)
                ])
              ]),
              e("tbody", _n, [
                (l(!0), u(J, null, ne(t.value, (p) => (l(), u("tr", {
                  key: p.id,
                  class: "cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700",
                  onClick: (_) => y.$emit("pick", p)
                }, [
                  e("td", bn, a(p.name), 1),
                  e("td", gn, a(n(tn)(p.key)), 1),
                  e("td", fn, [
                    p.group ? (l(), ge(xt, {
                      key: 0,
                      name: p.group.name,
                      platform: p.group.platform,
                      "subscription-type": p.group.subscription_type,
                      "rate-multiplier": p.group.rate_multiplier,
                      "user-rate-multiplier": v.userGroupRates[p.group.id]
                    }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "user-rate-multiplier"])) : (l(), u("span", xn, "—"))
                  ])
                ], 8, yn))), 128))
              ])
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), $n = { class: "space-y-4" }, wn = { class: "input-label" }, Cn = { class: "space-y-1.5" }, Vn = ["onUpdate:modelValue", "placeholder"], En = ["onUpdate:modelValue", "placeholder"], Pn = ["title", "onClick"], On = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Sn = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, Rn = { class: "input-label" }, An = { class: "grid grid-cols-3 gap-3" }, Tn = ["onClick"], In = { class: "mt-1 text-xs text-gray-400" }, Un = { key: 0 }, Nn = { class: "mb-1 flex items-center justify-between" }, Dn = { class: "input-label !mb-0" }, zn = ["disabled"], jn = ["placeholder"], Bn = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Hn = {
  key: 1,
  class: "mt-1 text-xs text-gray-400"
}, nt = /* @__PURE__ */ me({
  __name: "MonitorAdvancedRequestConfig",
  props: {
    provider: {},
    apiMode: {},
    extraHeaders: {},
    bodyOverrideMode: {},
    bodyOverride: {}
  },
  emits: ["update:extraHeaders", "update:bodyOverrideMode", "update:bodyOverride"],
  setup(v, { emit: r }) {
    const h = v, M = r, { t } = pe(), y = P(p(h.extraHeaders)), m = P("");
    ue(
      () => h.extraHeaders,
      ($) => {
        V(_(y.value), $) || (y.value = p($)), m.value = "";
      }
    );
    function p($) {
      const k = Object.entries($ || {});
      return k.length === 0 ? [{ name: "", value: "" }] : k.map(([U, j]) => ({ name: U, value: j }));
    }
    function _($) {
      const k = {};
      for (const U of $) {
        const j = U.name.trim();
        j !== "" && (k[j] = U.value);
      }
      return k;
    }
    function V($, k) {
      const U = Object.keys($), j = Object.keys(k || {});
      if (U.length !== j.length) return !1;
      for (const te of U)
        if ($[te] !== k[te]) return !1;
      return !0;
    }
    function q() {
      for (const $ of y.value) {
        const k = $.name.trim();
        if (k !== "" && (k.includes(":") || /\s/.test(k))) {
          m.value = t("admin.channelMonitor.advanced.headerNameInvalid", { name: k });
          return;
        }
      }
      m.value = "", M("update:extraHeaders", _(y.value));
    }
    function Z() {
      y.value.push({ name: "", value: "" });
    }
    function X($) {
      y.value.splice($, 1), y.value.length === 0 && y.value.push({ name: "", value: "" }), q();
    }
    const T = P(I(h.bodyOverride)), o = P("");
    ue(
      () => h.bodyOverride,
      ($) => {
        T.value = I($), o.value = "";
      }
    );
    function b() {
      if (h.bodyOverrideMode === "off")
        return;
      const $ = T.value.trim();
      if ($ === "") {
        M("update:bodyOverride", null), o.value = "";
        return;
      }
      try {
        const k = JSON.parse($);
        if (k === null || typeof k != "object" || Array.isArray(k)) {
          o.value = t("admin.channelMonitor.advanced.bodyJsonObjectError");
          return;
        }
        M("update:bodyOverride", k), o.value = "";
      } catch (k) {
        o.value = t("admin.channelMonitor.advanced.bodyJsonError") + ": " + (k instanceof Error ? k.message : String(k));
      }
    }
    function S() {
      const $ = T.value.trim();
      if ($ !== "")
        try {
          const k = JSON.parse($);
          T.value = JSON.stringify(k, null, 2), o.value = "", k && typeof k == "object" && !Array.isArray(k) && M("update:bodyOverride", k);
        } catch (k) {
          o.value = t("admin.channelMonitor.advanced.bodyJsonError") + ": " + (k instanceof Error ? k.message : String(k));
        }
    }
    function I($) {
      return !$ || Object.keys($).length === 0 ? "" : JSON.stringify($, null, 2);
    }
    function D($) {
      M("update:bodyOverrideMode", $), $ === "off" && M("update:bodyOverride", null);
    }
    const ee = R(() => [
      { value: "off", label: t("admin.channelMonitor.advanced.bodyModeOff") },
      { value: "merge", label: t("admin.channelMonitor.advanced.bodyModeMerge") },
      { value: "replace", label: t("admin.channelMonitor.advanced.bodyModeReplace") }
    ]);
    function oe($) {
      return h.bodyOverrideMode === $ ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300 dark:border-primary-400" : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    const H = R(() => {
      switch (h.bodyOverrideMode) {
        case "merge":
          return t("admin.channelMonitor.advanced.bodyModeHintMerge");
        case "replace":
          return t("admin.channelMonitor.advanced.bodyModeHintReplace");
        default:
          return t("admin.channelMonitor.advanced.bodyModeHintOff");
      }
    }), le = R(() => h.provider === ae && h.apiMode === ye ? h.bodyOverrideMode === "merge" ? `{
  "max_output_tokens": 20
}` : `{
  "model": "gpt-4o-mini",
  "instructions": "You are a health check endpoint. Reply briefly.",
  "input": "Reply with exactly: ok",
  "max_output_tokens": 20,
  "stream": false
}` : h.provider === ae || h.provider === Me ? h.bodyOverrideMode === "merge" ? `{
  "max_tokens": 20
}` : `{
  "model": "${h.provider === Me ? Ue : "gpt-4o-mini"}",
  "messages": [{"role":"user","content":"Reply with exactly: ok"}],
  "max_tokens": 20,
  "stream": false
}` : h.bodyOverrideMode === "merge" ? `{
  "system": "You are Claude Code..."
}` : `{
  "model": "claude-x",
  "messages": [{"role":"user","content":"hi"}],
  "max_tokens": 10
}`);
    return ($, k) => (l(), u("div", $n, [
      e("div", null, [
        e("label", wn, a(n(t)("admin.channelMonitor.advanced.headers")), 1),
        e("div", Cn, [
          (l(!0), u(J, null, ne(y.value, (U, j) => (l(), u("div", {
            key: j,
            class: "flex items-center gap-2"
          }, [
            G(e("input", {
              "onUpdate:modelValue": (te) => U.name = te,
              type: "text",
              spellcheck: "false",
              placeholder: n(t)("admin.channelMonitor.advanced.headerNamePlaceholder"),
              class: "input w-52 flex-none font-mono text-xs",
              onBlur: q
            }, null, 40, Vn), [
              [L, U.name]
            ]),
            G(e("input", {
              "onUpdate:modelValue": (te) => U.value = te,
              type: "text",
              spellcheck: "false",
              placeholder: n(t)("admin.channelMonitor.advanced.headerValuePlaceholder"),
              class: "input flex-1 font-mono text-xs",
              onBlur: q
            }, null, 40, En), [
              [L, U.value]
            ]),
            e("button", {
              type: "button",
              class: "flex-none rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400",
              title: n(t)("common.delete"),
              onClick: (te) => X(j)
            }, [...k[1] || (k[1] = [
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
            ])], 8, Pn)
          ]))), 128)),
          e("button", {
            type: "button",
            class: "inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-500 hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
            onClick: Z
          }, [
            k[2] || (k[2] = e("svg", {
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
            F(" " + a(n(t)("admin.channelMonitor.advanced.headerAddRow")), 1)
          ])
        ]),
        m.value ? (l(), u("p", On, a(m.value), 1)) : (l(), u("p", Sn, a(n(t)("admin.channelMonitor.advanced.headersHint")), 1))
      ]),
      e("div", null, [
        e("label", Rn, a(n(t)("admin.channelMonitor.advanced.bodyMode")), 1),
        e("div", An, [
          (l(!0), u(J, null, ne(ee.value, (U) => (l(), u("button", {
            key: U.value,
            type: "button",
            class: Q(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", oe(U.value)]),
            onClick: (j) => D(U.value)
          }, a(U.label), 11, Tn))), 128))
        ]),
        e("p", In, a(H.value), 1)
      ]),
      v.bodyOverrideMode !== "off" ? (l(), u("div", Un, [
        e("div", Nn, [
          e("label", Dn, a(n(t)("admin.channelMonitor.advanced.bodyJson")), 1),
          e("button", {
            type: "button",
            class: "text-xs text-primary-600 hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline dark:text-primary-400",
            disabled: !T.value.trim(),
            onClick: S
          }, a(n(t)("admin.channelMonitor.advanced.bodyJsonFormat")), 9, zn)
        ]),
        G(e("textarea", {
          "onUpdate:modelValue": k[0] || (k[0] = (U) => T.value = U),
          rows: "10",
          placeholder: le.value,
          class: "input font-mono text-xs",
          style: { "white-space": "pre", "overflow-wrap": "normal", "overflow-x": "auto" },
          spellcheck: "false",
          onBlur: b
        }, null, 40, jn), [
          [L, T.value]
        ]),
        o.value ? (l(), u("p", Bn, a(o.value), 1)) : (l(), u("p", Hn, a(n(t)("admin.channelMonitor.advanced.bodyJsonHint")), 1))
      ])) : N("", !0)
    ]));
  }
}), Fn = 1440 * 60;
function qn(v, r) {
  return !Number.isFinite(v) || v <= 0 || !Number.isFinite(r) || r <= 0 ? 0 : Math.round(Fn / v * r);
}
const Kn = { class: "input-label" }, Gn = ["placeholder"], Ln = { class: "input-label" }, Jn = {
  class: "grid gap-3 sm:grid-cols-3",
  "data-testid": "monitor-check-mode"
}, Qn = ["data-testid", "aria-pressed", "disabled", "onClick"], Yn = { class: "block text-sm font-semibold" }, Zn = { class: "mt-0.5 block text-xs opacity-80" }, Xn = ["data-daily-requests", "data-model-count"], Wn = { class: "font-semibold" }, eo = { class: "mt-1 text-xs leading-5" }, to = {
  key: 1,
  "data-testid": "monitor-quota-no-generation",
  class: "mt-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200"
}, no = { class: "input-label" }, oo = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, ao = ["data-testid", "aria-pressed", "onClick"], ro = { key: 0 }, so = { class: "input-label" }, lo = { "data-testid": "monitor-linked-account" }, io = { class: "mt-1 text-xs text-gray-400" }, co = {
  key: 0,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, uo = {
  key: 1,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, mo = {
  key: 2,
  class: "mt-1 text-xs text-amber-600 dark:text-amber-400"
}, po = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, ho = { class: "input-label" }, vo = { class: "grid gap-3 sm:grid-cols-2" }, _o = ["aria-pressed", "onClick"], yo = { class: "block text-sm font-semibold" }, bo = { class: "mt-0.5 block text-xs opacity-80" }, go = { key: 2 }, fo = { class: "input-label" }, xo = { class: "flex gap-2" }, ko = ["placeholder"], Mo = { key: 3 }, $o = { class: "input-label" }, wo = {
  key: 0,
  class: "text-red-500"
}, Co = { class: "flex gap-2" }, Vo = ["required", "placeholder"], Eo = {
  key: 0,
  class: "mt-1 text-xs text-gray-400"
}, Po = { key: 4 }, Oo = { class: "input-label" }, So = ["placeholder"], Ro = { key: 5 }, Ao = { class: "input-label" }, To = { class: "input-label" }, Io = ["placeholder"], Uo = { class: "input-label" }, No = { class: "mt-1 text-xs text-gray-400" }, Do = { class: "input-label" }, zo = ["max"], jo = { class: "mt-1 text-xs text-gray-400" }, Bo = { class: "flex items-center justify-between" }, Ho = { class: "input-label mb-0" }, Fo = {
  key: 6,
  class: "rounded-lg border border-gray-200 bg-gray-50/50 p-3 dark:border-dark-700 dark:bg-dark-900/30"
}, qo = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, Ko = { class: "mt-1 text-xs text-gray-400" }, Go = { class: "mt-4 space-y-4" }, Lo = { class: "input-label" }, Jo = { class: "mt-1 text-xs text-gray-400" }, Qo = { class: "flex justify-end gap-3" }, Yo = ["disabled"], Zo = /* @__PURE__ */ me({
  __name: "MonitorFormDialog",
  props: {
    show: { type: Boolean },
    monitor: {}
  },
  emits: ["close", "saved"],
  setup(v, { emit: r }) {
    const h = v, M = r, { t } = pe(), y = Ce(), { providerPickerClass: m } = Ee(), p = R(() => {
      var s;
      const i = (s = y.cachedPublicSettings) == null ? void 0 : s.channel_monitor_default_interval_seconds;
      return i && i > 0 ? i : Et;
    }), _ = R(() => h.monitor), V = P(!1), q = P(!1), Z = P(!1), X = P([]), T = P({}), o = ke({
      name: "",
      provider: we,
      api_mode: ie,
      check_mode: $e,
      account_id: null,
      endpoint: "",
      api_key: "",
      primary_model: "",
      extra_models: [],
      group_name: "",
      interval_seconds: p.value,
      jitter_seconds: 0,
      enabled: !0,
      template_id: null,
      extra_headers: {},
      body_override_mode: "off",
      body_override: null
    }), b = R(() => o.check_mode !== $e), S = R(() => o.check_mode !== Oe), I = R(() => 1 + o.extra_models.filter((i) => i.trim()).length), D = R(() => qn(o.interval_seconds, I.value)), ee = R(() => new Intl.NumberFormat().format(D.value)), oe = R(() => Math.max(0, (o.interval_seconds || 0) - 15));
    let H = !1;
    const le = P([]), $ = P(!1), k = R(() => {
      const i = le.value.filter((s) => s.provider !== o.provider ? !1 : o.provider !== ae ? !0 : K(s.api_mode) === o.api_mode);
      return [
        { value: "", label: t("admin.channelMonitor.templateField.none") },
        ...i.map((s) => ({ value: String(s.id), label: fe(s) }))
      ];
    });
    async function U() {
      if (!(le.value.length > 0)) {
        $.value = !0;
        try {
          const { items: i } = await W.channelMonitorTemplate.list();
          le.value = i;
        } catch (i) {
          console.warn("load monitor templates failed", i);
        } finally {
          $.value = !1;
        }
      }
    }
    const j = R({
      get: () => o.template_id == null ? "" : String(o.template_id),
      set: (i) => {
        if (i === "") {
          o.template_id = null;
          return;
        }
        const s = Number(i);
        if (!Number.isFinite(s)) return;
        o.template_id = s;
        const c = le.value.find((Y) => Y.id === s);
        c && (H = !0, o.api_mode = K(c.api_mode), o.template_id = s, o.extra_headers = { ...c.extra_headers || {} }, o.body_override_mode = c.body_override_mode, o.body_override = c.body_override ? { ...c.body_override } : null, H = !1);
      }
    }), te = R(() => [
      {
        value: ie,
        label: t("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: t("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ye,
        label: t("admin.channelMonitor.form.apiModeResponses"),
        hint: t("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    function K(i) {
      return i === ye ? ye : ie;
    }
    function be(i) {
      return o.api_mode === i ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function fe(i) {
      if (i.provider !== ae) return i.name;
      const s = K(i.api_mode) === ye ? "admin.channelMonitor.form.apiModeResponses" : "admin.channelMonitor.form.apiModeChatCompletions";
      return `${i.name} · ${t(s)}`;
    }
    function w() {
      o.template_id = null, o.extra_headers = {}, o.body_override_mode = "off", o.body_override = null;
    }
    const g = R(() => Je.map(({ value: i }) => ({
      value: i,
      label: t(`monitorCommon.providers.${i}`)
    }))), z = {
      [et]: Ct,
      [We]: wt,
      [Xe]: $t,
      [Ze]: Mt
    }, de = R(() => [
      {
        value: $e,
        label: t("admin.channelMonitor.form.checkModeProbe"),
        hint: t("admin.channelMonitor.form.checkModeProbeHint"),
        // antigravity 无探活 adapter，仅配额模式。
        disabled: o.provider === Se
      },
      {
        value: Oe,
        label: t("admin.channelMonitor.form.checkModeQuota"),
        hint: t("admin.channelMonitor.form.checkModeQuotaHint"),
        disabled: !1
      },
      {
        value: Vt,
        label: t("admin.channelMonitor.form.checkModeQuotaProbe"),
        hint: t("admin.channelMonitor.form.checkModeQuotaProbeHint"),
        // antigravity 无探活 adapter，只支持配额模式。
        disabled: o.provider === Se
      }
    ]);
    function C(i) {
      return o.check_mode === i ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ce(i) {
      var s;
      (s = de.value.find((c) => c.value === i)) != null && s.disabled || (o.check_mode = i, b.value || (o.account_id = null));
    }
    const he = P([]), f = P(!1), A = P(""), d = P(!1), x = P(null);
    let E = 0, ve = null;
    const Te = /* @__PURE__ */ new Set(), De = R(() => {
      const i = he.value.map((c) => ({
        value: String(c.id),
        label: `${c.name} (#${c.id})`
      })), s = x.value;
      return s && !he.value.some((c) => c.id === s.id) && i.unshift({ value: String(s.id), label: `${s.name} (#${s.id})` }), i;
    }), ze = R({
      get: () => o.account_id == null ? "" : String(o.account_id),
      set: (i) => {
        if (i === "") {
          o.account_id = null, x.value = null, d.value = !1;
          return;
        }
        const s = Number(i);
        Number.isFinite(s) && (o.account_id = s, x.value = he.value.find((c) => c.id === s) ?? x.value);
      }
    });
    async function je(i = "") {
      if (!b.value || !h.show) return;
      A.value = i;
      const s = ++E;
      ve == null || ve.abort();
      const c = new AbortController();
      ve = c, f.value = !0;
      try {
        const Y = await W.accounts.list(
          1,
          50,
          { platform: o.provider, ...i ? { search: i } : {} },
          { signal: c.signal }
        );
        if (s !== E) return;
        he.value = (Y.items || []).map((_e) => ({ id: _e.id, name: _e.name })), await ot();
      } catch (Y) {
        if (c.signal.aborted) return;
        console.warn("load linked accounts failed", Y), i || (he.value = []);
      } finally {
        s === E && (f.value = !1);
      }
    }
    async function ot() {
      var s;
      const i = o.account_id;
      if (!(i == null || !b.value) && !(he.value.some((c) => c.id === i) || ((s = x.value) == null ? void 0 : s.id) === i) && !Te.has(i)) {
        Te.add(i);
        try {
          const c = await W.accounts.getById(i);
          if (o.account_id !== i) return;
          if (String(c.platform) !== o.provider) {
            o.account_id = null, x.value = null, d.value = !0;
            return;
          }
          x.value = { id: c.id, name: c.name };
        } catch {
          o.account_id === i && (o.account_id = null, x.value = null, d.value = !0);
        }
      }
    }
    function at(i) {
      je(i);
    }
    ue(
      () => [h.show, o.provider, o.check_mode],
      ([i, s], c) => {
        const [Y, _e] = c ?? [];
        if (!i) {
          ve == null || ve.abort();
          return;
        }
        (i !== Y || s !== _e) && (Te.clear(), d.value = !1, x.value = null), je();
      },
      { immediate: !0 }
    );
    function rt(i) {
      if (o.provider === i) return;
      const s = o.provider, c = s === Me && o.endpoint === qe, Y = s === Me && o.primary_model === Ue, _e = !!z[s] && o.endpoint === z[s];
      if (o.provider = i, o.account_id = null, x.value = null, d.value = !1, i === Se && o.check_mode !== Oe && (o.check_mode = Oe), i === Me) {
        o.endpoint.trim() || (o.endpoint = qe), o.primary_model.trim() || (o.primary_model = Ue);
        return;
      }
      (c || _e) && (o.endpoint = ""), Y && (o.primary_model = "");
      const He = z[i];
      He && !o.endpoint.trim() && (o.endpoint = He);
    }
    ue(() => o.provider, () => {
      H || (o.api_key = "", o.provider !== ae && (o.api_mode = ie), w());
    }, { flush: "sync" }), ue(() => o.api_mode, () => {
      H || o.provider === ae && w();
    }, { flush: "sync" });
    function st() {
      H = !0, o.name = "", o.provider = we, o.api_mode = ie, o.check_mode = $e, o.account_id = null, x.value = null, d.value = !1, o.endpoint = "", o.api_key = "", o.primary_model = "", o.extra_models = [], o.group_name = "", o.interval_seconds = p.value, o.jitter_seconds = 0, o.enabled = !0, o.template_id = null, o.extra_headers = {}, o.body_override_mode = "off", o.body_override = null, H = !1;
    }
    function lt(i) {
      H = !0, o.name = i.name, o.provider = i.provider, o.api_mode = K(i.api_mode), o.check_mode = i.check_mode || $e, o.account_id = i.account_id ?? null, o.endpoint = i.endpoint, o.api_key = "", o.primary_model = i.primary_model, o.extra_models = [...i.extra_models || []], o.group_name = i.group_name || "", o.interval_seconds = i.interval_seconds || p.value, o.jitter_seconds = i.jitter_seconds || 0, o.enabled = i.enabled, o.template_id = i.template_id ?? null, o.extra_headers = { ...i.extra_headers || {} }, o.body_override_mode = i.body_override_mode || "off", o.body_override = i.body_override ? { ...i.body_override } : null, H = !1;
    }
    ue(
      () => [h.show, h.monitor],
      ([i, s]) => {
        i && (U(), s ? lt(s) : st());
      },
      { immediate: !0 }
    );
    function it() {
      o.endpoint = window.location.origin;
    }
    async function dt() {
      if (q.value = !0, !(X.value.length > 0)) {
        Z.value = !0;
        try {
          const [i, s] = await Promise.all([
            Ft.list(1, 100, { status: "active" }),
            Gt.getUserGroupRates()
          ]), c = i.items || [], Y = Date.now();
          X.value = c.filter((_e) => _e.status !== "active" ? !1 : _e.expires_at ? new Date(_e.expires_at).getTime() > Y : !0), T.value = s;
        } catch (i) {
          y.showError(re(i, t("admin.channelMonitor.form.noActiveKey")));
        } finally {
          Z.value = !1;
        }
      }
    }
    function ct(i) {
      o.api_key = i.key, q.value = !1;
    }
    function Be() {
      return {
        name: o.name.trim(),
        provider: o.provider,
        api_mode: o.provider === ae ? o.api_mode : ie,
        check_mode: o.check_mode,
        account_id: b.value ? o.account_id : null,
        endpoint: S.value ? o.endpoint.trim() : "",
        api_key: S.value ? o.api_key.trim() : "",
        primary_model: S.value ? o.primary_model.trim() : "quota",
        extra_models: S.value ? o.extra_models : [],
        group_name: o.group_name.trim(),
        enabled: o.enabled,
        interval_seconds: o.interval_seconds,
        jitter_seconds: o.jitter_seconds || 0,
        template_id: S.value ? o.template_id : null,
        extra_headers: o.extra_headers,
        body_override_mode: o.body_override_mode,
        body_override: o.body_override
      };
    }
    async function ut() {
      if (!V.value) {
        if (!o.name.trim()) {
          y.showError(t("admin.channelMonitor.nameRequired"));
          return;
        }
        if (b.value && o.account_id == null) {
          y.showError(t("admin.channelMonitor.linkedAccountRequired"));
          return;
        }
        if (S.value && !o.primary_model.trim()) {
          y.showError(t("admin.channelMonitor.primaryModelRequired"));
          return;
        }
        V.value = !0;
        try {
          const i = _.value;
          if (i) {
            const { api_key: s, ...c } = Be(), Y = { ...c };
            s && (Y.api_key = s), S.value && o.template_id == null && (Y.clear_template = !0, delete Y.template_id), await W.channelMonitor.update(i.id, Y), y.showSuccess(t("admin.channelMonitor.updateSuccess"));
          } else
            await W.channelMonitor.create(Be()), y.showSuccess(t("admin.channelMonitor.createSuccess"));
          M("saved"), M("close");
        } catch (i) {
          y.showError(re(i, t("common.error")));
        } finally {
          V.value = !1;
        }
      }
    }
    return (i, s) => (l(), u(J, null, [
      O(Ve, {
        show: v.show,
        title: _.value ? n(t)("admin.channelMonitor.editTitle") : n(t)("admin.channelMonitor.createTitle"),
        width: "wide",
        onClose: s[15] || (s[15] = (c) => i.$emit("close"))
      }, {
        footer: B(() => [
          e("div", Qo, [
            e("button", {
              onClick: s[14] || (s[14] = (c) => i.$emit("close")),
              type: "button",
              class: "btn btn-secondary"
            }, a(n(t)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "channel-monitor-form",
              disabled: V.value,
              class: "btn btn-primary"
            }, a(V.value ? n(t)("common.submitting") : _.value ? n(t)("common.update") : n(t)("common.create")), 9, Yo)
          ])
        ]),
        default: B(() => [
          e("form", {
            id: "channel-monitor-form",
            onSubmit: Ge(ut, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Kn, [
                F(a(n(t)("admin.channelMonitor.form.name")) + " ", 1),
                s[17] || (s[17] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              G(e("input", {
                "onUpdate:modelValue": s[0] || (s[0] = (c) => o.name = c),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.form.namePlaceholder")
              }, null, 8, Gn), [
                [L, o.name]
              ])
            ]),
            e("div", null, [
              e("label", Ln, a(n(t)("admin.channelMonitor.form.checkMode")), 1),
              e("div", Jn, [
                (l(!0), u(J, null, ne(de.value, (c) => (l(), u("button", {
                  key: c.value,
                  type: "button",
                  "data-testid": `monitor-check-mode-${c.value}`,
                  "aria-pressed": o.check_mode === c.value,
                  disabled: c.disabled,
                  class: Q(["rounded-lg border-2 px-3 py-2 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50", C(c.value)]),
                  onClick: (Y) => ce(c.value)
                }, [
                  e("span", Yn, a(c.label), 1),
                  e("span", Zn, a(c.hint), 1)
                ], 10, Qn))), 128))
              ]),
              S.value ? (l(), u("div", {
                key: 0,
                "data-testid": "monitor-probe-billing-warning",
                "data-daily-requests": D.value,
                "data-model-count": I.value,
                class: "mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200"
              }, [
                e("p", Wn, a(n(t)("admin.channelMonitor.form.probeBillingWarning")), 1),
                e("p", eo, a(n(t)("admin.channelMonitor.form.probeDailyEstimate", { requests: ee.value, models: I.value })), 1)
              ], 8, Xn)) : (l(), u("div", to, a(n(t)("admin.channelMonitor.form.quotaNoGeneration")), 1))
            ]),
            e("div", null, [
              e("label", no, [
                F(a(n(t)("admin.channelMonitor.form.provider")) + " ", 1),
                s[18] || (s[18] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", oo, [
                (l(!0), u(J, null, ne(g.value, (c) => (l(), u("button", {
                  key: c.value,
                  type: "button",
                  "data-testid": `monitor-provider-${c.value}`,
                  "aria-pressed": o.provider === c.value,
                  class: Q(["flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors", n(m)(c.value, o.provider === c.value)]),
                  onClick: (Y) => rt(c.value)
                }, [
                  O(kt, {
                    provider: c.value,
                    size: 18
                  }, null, 8, ["provider"]),
                  e("span", null, a(c.label), 1)
                ], 10, ao))), 128))
              ])
            ]),
            b.value ? (l(), u("div", ro, [
              e("label", so, [
                F(a(n(t)("admin.channelMonitor.form.linkedAccount")) + " ", 1),
                s[19] || (s[19] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", lo, [
                O(Ae, {
                  modelValue: ze.value,
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => ze.value = c),
                  options: De.value,
                  placeholder: n(t)("admin.channelMonitor.form.linkedAccountPlaceholder"),
                  remote: "",
                  loading: f.value,
                  onSearch: at
                }, null, 8, ["modelValue", "options", "placeholder", "loading"])
              ]),
              e("p", io, a(n(t)("admin.channelMonitor.form.linkedAccountHint")), 1),
              o.provider === n(ae) ? (l(), u("p", co, a(n(t)("admin.channelMonitor.form.openAIQuotaProbeHint")), 1)) : N("", !0),
              d.value ? (l(), u("p", uo, a(n(t)("admin.channelMonitor.form.linkedAccountMissing")), 1)) : N("", !0),
              De.value.length === 0 && !f.value && !A.value ? (l(), u("p", mo, a(n(t)("admin.channelMonitor.form.linkedAccountEmpty")), 1)) : N("", !0)
            ])) : N("", !0),
            o.provider === n(ae) && S.value ? (l(), u("div", po, [
              e("label", ho, a(n(t)("admin.channelMonitor.form.apiMode")), 1),
              e("div", vo, [
                (l(!0), u(J, null, ne(te.value, (c) => (l(), u("button", {
                  key: c.value,
                  type: "button",
                  "aria-pressed": o.api_mode === c.value,
                  class: Q(["rounded-lg border-2 px-3 py-2 text-left transition-colors", be(c.value)]),
                  onClick: (Y) => o.api_mode = c.value
                }, [
                  e("span", yo, a(c.label), 1),
                  e("span", bo, a(c.hint), 1)
                ], 10, _o))), 128))
              ])
            ])) : N("", !0),
            S.value ? (l(), u("div", go, [
              e("label", fo, [
                F(a(n(t)("admin.channelMonitor.form.endpoint")) + " ", 1),
                s[20] || (s[20] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", xo, [
                G(e("input", {
                  "onUpdate:modelValue": s[2] || (s[2] = (c) => o.endpoint = c),
                  "data-testid": "monitor-endpoint",
                  type: "text",
                  required: "",
                  class: "input flex-1",
                  placeholder: n(t)("admin.channelMonitor.form.endpointPlaceholder")
                }, null, 8, ko), [
                  [L, o.endpoint]
                ]),
                e("button", {
                  type: "button",
                  onClick: it,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(t)("admin.channelMonitor.form.useCurrentDomain")), 1)
              ])
            ])) : N("", !0),
            S.value ? (l(), u("div", Mo, [
              e("label", $o, [
                F(a(n(t)("admin.channelMonitor.form.apiKey")), 1),
                _.value ? N("", !0) : (l(), u("span", wo, " *"))
              ]),
              e("div", Co, [
                G(e("input", {
                  "onUpdate:modelValue": s[3] || (s[3] = (c) => o.api_key = c),
                  type: "password",
                  required: !_.value,
                  class: "input flex-1",
                  placeholder: _.value ? n(t)("admin.channelMonitor.form.apiKeyEditPlaceholder") : n(t)("admin.channelMonitor.form.apiKeyPlaceholder")
                }, null, 8, Vo), [
                  [L, o.api_key]
                ]),
                e("button", {
                  type: "button",
                  onClick: dt,
                  class: "btn btn-secondary whitespace-nowrap"
                }, a(n(t)("admin.channelMonitor.form.useMyKey")), 1)
              ]),
              _.value && _.value.api_key_masked ? (l(), u("p", Eo, a(_.value.api_key_masked), 1)) : N("", !0)
            ])) : N("", !0),
            S.value ? (l(), u("div", Po, [
              e("label", Oo, [
                F(a(n(t)("admin.channelMonitor.form.primaryModel")) + " ", 1),
                s[21] || (s[21] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              G(e("input", {
                "onUpdate:modelValue": s[4] || (s[4] = (c) => o.primary_model = c),
                "data-testid": "monitor-primary-model",
                type: "text",
                required: "",
                class: Q(["input font-medium", n(gt)(o.provider)]),
                placeholder: n(t)("admin.channelMonitor.form.primaryModelPlaceholder")
              }, null, 10, So), [
                [L, o.primary_model]
              ])
            ])) : N("", !0),
            S.value ? (l(), u("div", Ro, [
              e("label", Ao, a(n(t)("admin.channelMonitor.form.extraModels")), 1),
              O(ft, {
                models: o.extra_models,
                platform: o.provider,
                placeholder: n(t)("admin.channelMonitor.form.extraModelsPlaceholder"),
                "onUpdate:models": s[5] || (s[5] = (c) => o.extra_models = c)
              }, null, 8, ["models", "platform", "placeholder"])
            ])) : N("", !0),
            e("div", null, [
              e("label", To, a(n(t)("admin.channelMonitor.form.groupName")), 1),
              G(e("input", {
                "onUpdate:modelValue": s[6] || (s[6] = (c) => o.group_name = c),
                type: "text",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.form.groupNamePlaceholder")
              }, null, 8, Io), [
                [L, o.group_name]
              ])
            ]),
            e("div", null, [
              e("label", Uo, [
                F(a(n(t)("admin.channelMonitor.form.intervalSeconds")) + " ", 1),
                s[22] || (s[22] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              G(e("input", {
                "onUpdate:modelValue": s[7] || (s[7] = (c) => o.interval_seconds = c),
                type: "number",
                min: "15",
                max: "3600",
                required: "",
                class: "input"
              }, null, 512), [
                [
                  L,
                  o.interval_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", No, a(n(t)("admin.channelMonitor.form.intervalSecondsHint")), 1)
            ]),
            e("div", null, [
              e("label", Do, a(n(t)("admin.channelMonitor.form.jitterSeconds")), 1),
              G(e("input", {
                "onUpdate:modelValue": s[8] || (s[8] = (c) => o.jitter_seconds = c),
                type: "number",
                min: "0",
                max: oe.value,
                class: "input"
              }, null, 8, zo), [
                [
                  L,
                  o.jitter_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", jo, a(n(t)("admin.channelMonitor.form.jitterSecondsHint")), 1)
            ]),
            e("div", Bo, [
              e("label", Ho, a(n(t)("admin.channelMonitor.form.enabled")), 1),
              O(Re, {
                modelValue: o.enabled,
                "onUpdate:modelValue": s[9] || (s[9] = (c) => o.enabled = c)
              }, null, 8, ["modelValue"])
            ]),
            S.value ? (l(), u("details", Fo, [
              e("summary", qo, a(n(t)("admin.channelMonitor.advanced.section")), 1),
              e("p", Ko, a(n(t)("admin.channelMonitor.advanced.sectionHint")), 1),
              e("div", Go, [
                e("div", null, [
                  e("label", Lo, a(n(t)("admin.channelMonitor.templateField.label")), 1),
                  O(Ae, {
                    modelValue: j.value,
                    "onUpdate:modelValue": s[10] || (s[10] = (c) => j.value = c),
                    options: k.value,
                    placeholder: n(t)("admin.channelMonitor.templateField.placeholder")
                  }, null, 8, ["modelValue", "options", "placeholder"]),
                  e("p", Jo, a(n(t)("admin.channelMonitor.templateField.applyHint")), 1)
                ]),
                O(nt, {
                  provider: o.provider,
                  "api-mode": o.api_mode,
                  "extra-headers": o.extra_headers,
                  "body-override-mode": o.body_override_mode,
                  "body-override": o.body_override,
                  "onUpdate:extraHeaders": s[11] || (s[11] = (c) => o.extra_headers = c),
                  "onUpdate:bodyOverrideMode": s[12] || (s[12] = (c) => o.body_override_mode = c),
                  "onUpdate:bodyOverride": s[13] || (s[13] = (c) => o.body_override = c)
                }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
              ])
            ])) : N("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      O(Mn, {
        show: q.value,
        loading: Z.value,
        keys: X.value,
        provider: o.provider,
        "user-group-rates": T.value,
        onClose: s[16] || (s[16] = (c) => q.value = !1),
        onPick: ct
      }, null, 8, ["show", "loading", "keys", "provider", "user-group-rates"])
    ], 64));
  }
}), Xo = { class: "mb-3 text-sm text-gray-600 dark:text-gray-400" }, Wo = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400"
}, ea = {
  key: 1,
  class: "py-6 text-center text-sm text-gray-400"
}, ta = { key: 2 }, na = { class: "mb-2 flex items-center gap-3 text-xs" }, oa = { class: "ml-auto text-gray-500 dark:text-gray-400" }, aa = { class: "max-h-80 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-700 dark:border-dark-700" }, ra = ["onClick"], sa = ["checked", "onClick"], la = { class: "font-medium text-gray-900 dark:text-white" }, ia = { class: "text-xs text-gray-400" }, da = {
  key: 0,
  class: "text-xs text-gray-400"
}, ca = {
  key: 1,
  class: "ml-auto rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-dark-700 dark:text-gray-400"
}, ua = { class: "flex justify-end gap-2" }, ma = ["disabled"], pa = /* @__PURE__ */ me({
  __name: "MonitorTemplateApplyPickerDialog",
  props: {
    show: { type: Boolean },
    templateId: {},
    templateName: {}
  },
  emits: ["close", "applied"],
  setup(v, { emit: r }) {
    const h = v, M = r, { t } = pe(), y = Ce(), m = P(!1), p = P(!1), _ = P([]), V = P([]), q = R(() => new Set(V.value));
    ue(
      () => [h.show, h.templateId],
      ([S, I]) => {
        !S || I == null || Z(I);
      },
      { immediate: !0 }
    );
    async function Z(S) {
      m.value = !0, _.value = [], V.value = [];
      try {
        const { items: I } = await W.channelMonitorTemplate.listAssociatedMonitors(S);
        _.value = I, V.value = I.map((D) => D.id);
      } catch (I) {
        y.showError(re(I, t("common.error")));
      } finally {
        m.value = !1;
      }
    }
    function X(S) {
      const I = V.value.indexOf(S);
      I >= 0 ? V.value.splice(I, 1) : V.value.push(S);
    }
    function T() {
      V.value = _.value.map((S) => S.id);
    }
    function o() {
      V.value = [];
    }
    async function b() {
      if (!(h.templateId == null || V.value.length === 0 || p.value)) {
        p.value = !0;
        try {
          const { affected: S } = await W.channelMonitorTemplate.apply(
            h.templateId,
            [...V.value]
          );
          y.showSuccess(t("admin.channelMonitor.template.applySuccess", { n: S })), M("applied", S), M("close");
        } catch (S) {
          y.showError(re(S, t("common.error")));
        } finally {
          p.value = !1;
        }
      }
    }
    return (S, I) => (l(), ge(Ve, {
      show: v.show,
      title: n(t)("admin.channelMonitor.template.applyPickerTitle", { name: v.templateName }),
      onClose: I[1] || (I[1] = (D) => S.$emit("close"))
    }, {
      footer: B(() => [
        e("div", ua, [
          e("button", {
            class: "btn btn-secondary",
            onClick: I[0] || (I[0] = (D) => S.$emit("close"))
          }, a(n(t)("common.cancel")), 1),
          e("button", {
            class: "btn btn-primary",
            disabled: p.value || V.value.length === 0,
            onClick: b
          }, a(p.value ? n(t)("common.submitting") : n(t)("admin.channelMonitor.template.applyPickerConfirm", { n: V.value.length })), 9, ma)
        ])
      ]),
      default: B(() => [
        e("p", Xo, a(n(t)("admin.channelMonitor.template.applyPickerHint")), 1),
        m.value ? (l(), u("div", Wo, a(n(t)("common.loading")), 1)) : _.value.length === 0 ? (l(), u("div", ea, a(n(t)("admin.channelMonitor.template.applyPickerEmpty")), 1)) : (l(), u("div", ta, [
          e("div", na, [
            e("button", {
              type: "button",
              class: "text-primary-600 hover:underline dark:text-primary-400",
              onClick: T
            }, a(n(t)("common.selectAll")), 1),
            e("button", {
              type: "button",
              class: "text-gray-500 hover:underline dark:text-gray-400",
              onClick: o
            }, a(n(t)("admin.channelMonitor.template.selectNone")), 1),
            e("span", oa, a(n(t)("admin.channelMonitor.template.selectedCount", {
              n: V.value.length,
              total: _.value.length
            })), 1)
          ]),
          e("ul", aa, [
            (l(!0), u(J, null, ne(_.value, (D) => (l(), u("li", {
              key: D.id,
              class: "flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-dark-800",
              onClick: (ee) => X(D.id)
            }, [
              e("input", {
                type: "checkbox",
                checked: q.value.has(D.id),
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                onClick: Ge((ee) => X(D.id), ["stop"])
              }, null, 8, sa),
              e("span", la, a(D.name), 1),
              e("span", ia, a(D.provider), 1),
              D.provider === "openai" ? (l(), u("span", da, a(D.api_mode), 1)) : N("", !0),
              D.enabled ? N("", !0) : (l(), u("span", ca, a(n(t)("admin.channelMonitor.onlyDisabled").replace(/^仅|^Only /, "")), 1))
            ], 8, ra))), 128))
          ])
        ]))
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), ha = { class: "mb-4 border-b border-gray-200 dark:border-dark-700" }, va = {
  role: "tablist",
  class: "flex flex-wrap gap-1"
}, _a = ["aria-selected", "onClick"], ya = {
  key: 0,
  class: "ml-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-dark-700"
}, ba = {
  key: 0,
  class: "space-y-2"
}, ga = { class: "flex justify-end" }, fa = {
  key: 0,
  class: "py-8 text-center text-sm text-gray-400"
}, xa = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400"
}, ka = { class: "flex items-start justify-between gap-3" }, Ma = { class: "min-w-0 flex-1" }, $a = { class: "flex items-center gap-2" }, wa = { class: "font-medium text-gray-900 dark:text-white" }, Ca = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Va = {
  key: 0,
  class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Ea = { class: "mt-1 text-xs text-gray-400" }, Pa = { class: "flex flex-shrink-0 gap-2" }, Oa = ["disabled", "title", "onClick"], Sa = ["onClick"], Ra = ["onClick"], Aa = {
  key: 1,
  class: "space-y-4"
}, Ta = { class: "input-label" }, Ia = ["placeholder"], Ua = { key: 0 }, Na = { class: "input-label" }, Da = { class: "grid grid-cols-2 gap-3 sm:grid-cols-4" }, za = ["onClick"], ja = {
  key: 1,
  class: "rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-500/20 dark:bg-blue-500/10"
}, Ba = { class: "input-label" }, Ha = { class: "grid gap-3 sm:grid-cols-2" }, Fa = ["onClick"], qa = { class: "block text-sm font-semibold" }, Ka = { class: "mt-0.5 block text-xs opacity-80" }, Ga = { class: "input-label" }, La = ["placeholder"], Ja = { class: "flex w-full items-center justify-between" }, Qa = { class: "flex gap-2" }, Ya = ["disabled"], Za = /* @__PURE__ */ me({
  __name: "MonitorTemplateManagerDialog",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "updated"],
  setup(v, { emit: r }) {
    const h = v, M = r, { t } = pe(), y = Ce(), { providerPickerClass: m } = Ee(), p = R(() => [
      { value: we, label: t("monitorCommon.providers.anthropic") },
      { value: ae, label: t("monitorCommon.providers.openai") },
      { value: Ot, label: t("monitorCommon.providers.gemini") },
      { value: Me, label: t("monitorCommon.providers.grok") },
      { value: Se, label: t("monitorCommon.providers.antigravity") },
      { value: et, label: t("monitorCommon.providers.kimi") },
      { value: We, label: t("monitorCommon.providers.zhipu") },
      { value: Xe, label: t("monitorCommon.providers.deepseek") },
      { value: Ze, label: t("monitorCommon.providers.minimax") },
      { value: St, label: t("monitorCommon.providers.opencode_go") }
    ]), _ = P(we), V = P([]), q = P(!1), Z = R(
      () => V.value.filter((f) => f.provider === _.value)
    ), X = R(() => {
      const f = Object.fromEntries(Pt.map((A) => [A, 0]));
      for (const A of V.value) f[A.provider]++;
      return f;
    }), T = P(null), o = P(!1), b = ke(S(we));
    function S(f) {
      return {
        id: null,
        name: "",
        provider: f,
        api_mode: ie,
        description: "",
        extra_headers: {},
        body_override_mode: "off",
        body_override: null
      };
    }
    function I(f) {
      b.id = f.id, b.name = f.name, b.provider = f.provider, b.api_mode = de(f.api_mode), b.description = f.description, b.extra_headers = { ...f.extra_headers || {} }, b.body_override_mode = f.body_override_mode, b.body_override = f.body_override ? { ...f.body_override } : null;
    }
    function D() {
      Object.assign(b, S(_.value)), T.value = "new";
    }
    function ee(f) {
      I(f), T.value = f.id;
    }
    function oe() {
      T.value = null;
    }
    async function H() {
      q.value = !0;
      try {
        const { items: f } = await W.channelMonitorTemplate.list();
        V.value = f;
      } catch (f) {
        y.showError(re(f, t("common.error")));
      } finally {
        q.value = !1;
      }
    }
    ue(
      () => h.show,
      (f) => {
        f && (T.value = null, H());
      },
      { immediate: !0 }
    );
    async function le() {
      if (!o.value) {
        if (!b.name.trim()) {
          y.showError(t("admin.channelMonitor.template.missingName"));
          return;
        }
        o.value = !0;
        try {
          T.value === "new" ? (await W.channelMonitorTemplate.create({
            name: b.name.trim(),
            provider: b.provider,
            api_mode: b.provider === ae ? b.api_mode : ie,
            description: b.description.trim(),
            extra_headers: b.extra_headers,
            body_override_mode: b.body_override_mode,
            body_override: b.body_override
          }), y.showSuccess(t("admin.channelMonitor.template.createSuccess"))) : typeof T.value == "number" && (await W.channelMonitorTemplate.update(T.value, {
            name: b.name.trim(),
            api_mode: b.provider === ae ? b.api_mode : ie,
            description: b.description.trim(),
            extra_headers: b.extra_headers,
            body_override_mode: b.body_override_mode,
            body_override: b.body_override
          }), y.showSuccess(t("admin.channelMonitor.template.updateSuccess"))), await H(), M("updated"), T.value = null;
        } catch (f) {
          y.showError(re(f, t("common.error")));
        } finally {
          o.value = !1;
        }
      }
    }
    const $ = ke({
      show: !1,
      tpl: null
    });
    function k(f) {
      $.tpl = f, $.show = !0;
    }
    async function U(f) {
      await H(), M("updated");
    }
    const j = ke({
      show: !1,
      tpl: null
    });
    function te(f) {
      j.tpl = f, j.show = !0;
    }
    const K = R(() => {
      const f = j.tpl;
      return f ? t("admin.channelMonitor.template.deleteConfirm", {
        name: f.name,
        n: f.associated_monitors
      }) : "";
    });
    async function be() {
      const f = j.tpl;
      if (j.show = !1, !!f)
        try {
          await W.channelMonitorTemplate.del(f.id), y.showSuccess(t("admin.channelMonitor.template.deleteSuccess")), await H(), M("updated");
        } catch (A) {
          y.showError(re(A, t("common.error")));
        }
    }
    function fe(f) {
      return _.value === f ? "border-b-2 border-primary-500 text-primary-600 dark:text-primary-400" : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";
    }
    function w(f) {
      switch (f) {
        case "merge":
          return "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-500/15 dark:text-zo-alert-300";
        case "replace":
          return "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300";
        default:
          return "bg-gray-100 text-gray-600 dark:bg-dark-700 dark:text-gray-300";
      }
    }
    function g(f) {
      return t(`admin.channelMonitor.advanced.bodyMode${f.charAt(0).toUpperCase()}${f.slice(1)}`);
    }
    const z = R(() => [
      {
        value: ie,
        label: t("admin.channelMonitor.form.apiModeChatCompletions"),
        hint: t("admin.channelMonitor.form.apiModeChatCompletionsHint")
      },
      {
        value: ye,
        label: t("admin.channelMonitor.form.apiModeResponses"),
        hint: t("admin.channelMonitor.form.apiModeResponsesHint")
      }
    ]);
    ue(() => b.provider, (f) => {
      f !== ae && (b.api_mode = ie);
    });
    function de(f) {
      return f === ye ? ye : ie;
    }
    function C(f) {
      return b.api_mode === f ? "border-primary-500 bg-white text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-300" : "border-blue-100 bg-white/70 text-gray-600 hover:border-primary-300 dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400";
    }
    function ce(f) {
      return de(f) === ye ? t("admin.channelMonitor.form.apiModeResponses") : t("admin.channelMonitor.form.apiModeChatCompletions");
    }
    function he(f) {
      return de(f) === ye ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" : "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-500/15 dark:text-zo-signal-300";
    }
    return (f, A) => (l(), u(J, null, [
      O(Ve, {
        show: v.show,
        title: n(t)("admin.channelMonitor.template.managerTitle"),
        width: "wide",
        onClose: A[6] || (A[6] = (d) => f.$emit("close"))
      }, {
        footer: B(() => [
          e("div", Ja, [
            e("div", null, [
              T.value ? (l(), u("button", {
                key: 0,
                class: "btn btn-secondary",
                onClick: oe
              }, a(n(t)("common.back")), 1)) : N("", !0)
            ]),
            e("div", Qa, [
              e("button", {
                class: "btn btn-secondary",
                onClick: A[5] || (A[5] = (d) => f.$emit("close"))
              }, a(n(t)("common.close")), 1),
              T.value ? (l(), u("button", {
                key: 0,
                class: "btn btn-primary",
                disabled: o.value,
                onClick: le
              }, a(o.value ? n(t)("common.submitting") : T.value === "new" ? n(t)("common.create") : n(t)("common.update")), 9, Ya)) : N("", !0)
            ])
          ])
        ]),
        default: B(() => [
          e("div", ha, [
            e("div", va, [
              (l(!0), u(J, null, ne(p.value, (d) => (l(), u("button", {
                key: d.value,
                type: "button",
                role: "tab",
                "aria-selected": _.value === d.value,
                class: Q(["px-4 py-2 text-sm font-medium transition-colors", fe(d.value)]),
                onClick: (x) => _.value = d.value
              }, [
                F(a(d.label) + " ", 1),
                X.value[d.value] > 0 ? (l(), u("span", ya, a(X.value[d.value]), 1)) : N("", !0)
              ], 10, _a))), 128))
            ])
          ]),
          T.value ? (l(), u("div", Aa, [
            e("div", null, [
              e("label", Ta, [
                F(a(n(t)("admin.channelMonitor.template.form.name")) + " ", 1),
                A[9] || (A[9] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              G(e("input", {
                "onUpdate:modelValue": A[0] || (A[0] = (d) => b.name = d),
                type: "text",
                required: "",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.template.form.namePlaceholder")
              }, null, 8, Ia), [
                [L, b.name]
              ])
            ]),
            T.value === "new" ? (l(), u("div", Ua, [
              e("label", Na, [
                F(a(n(t)("admin.channelMonitor.form.provider")) + " ", 1),
                A[10] || (A[10] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              e("div", Da, [
                (l(!0), u(J, null, ne(p.value, (d) => (l(), u("button", {
                  key: d.value,
                  type: "button",
                  class: Q(["rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors", n(m)(d.value, b.provider === d.value)]),
                  onClick: (x) => b.provider = d.value
                }, a(d.label), 11, za))), 128))
              ])
            ])) : N("", !0),
            b.provider === n(ae) ? (l(), u("div", ja, [
              e("label", Ba, a(n(t)("admin.channelMonitor.form.apiMode")), 1),
              e("div", Ha, [
                (l(!0), u(J, null, ne(z.value, (d) => (l(), u("button", {
                  key: d.value,
                  type: "button",
                  class: Q(["rounded-lg border-2 px-3 py-2 text-left transition-colors", C(d.value)]),
                  onClick: (x) => b.api_mode = d.value
                }, [
                  e("span", qa, a(d.label), 1),
                  e("span", Ka, a(d.hint), 1)
                ], 10, Fa))), 128))
              ])
            ])) : N("", !0),
            e("div", null, [
              e("label", Ga, a(n(t)("admin.channelMonitor.template.form.description")), 1),
              G(e("input", {
                "onUpdate:modelValue": A[1] || (A[1] = (d) => b.description = d),
                type: "text",
                class: "input",
                placeholder: n(t)("admin.channelMonitor.template.form.descriptionPlaceholder")
              }, null, 8, La), [
                [L, b.description]
              ])
            ]),
            O(nt, {
              provider: b.provider,
              "api-mode": b.api_mode,
              "extra-headers": b.extra_headers,
              "body-override-mode": b.body_override_mode,
              "body-override": b.body_override,
              "onUpdate:extraHeaders": A[2] || (A[2] = (d) => b.extra_headers = d),
              "onUpdate:bodyOverrideMode": A[3] || (A[3] = (d) => b.body_override_mode = d),
              "onUpdate:bodyOverride": A[4] || (A[4] = (d) => b.body_override = d)
            }, null, 8, ["provider", "api-mode", "extra-headers", "body-override-mode", "body-override"])
          ])) : (l(), u("div", ba, [
            e("div", ga, [
              e("button", {
                class: "btn btn-primary btn-sm",
                onClick: D
              }, [
                O(se, {
                  name: "plus",
                  size: "sm",
                  class: "mr-1"
                }),
                F(" " + a(n(t)("admin.channelMonitor.template.createButton")), 1)
              ])
            ]),
            q.value ? (l(), u("div", fa, a(n(t)("common.loading")), 1)) : Z.value.length === 0 ? (l(), u("div", xa, a(n(t)("admin.channelMonitor.template.emptyState")), 1)) : (l(!0), u(J, { key: 2 }, ne(Z.value, (d) => (l(), u("div", {
              key: d.id,
              class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800"
            }, [
              e("div", ka, [
                e("div", Ma, [
                  e("div", $a, [
                    e("span", wa, a(d.name), 1),
                    e("span", {
                      class: Q(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", w(d.body_override_mode)])
                    }, a(g(d.body_override_mode)), 3),
                    d.provider === n(ae) ? (l(), u("span", {
                      key: 0,
                      class: Q(["inline-flex items-center rounded-md px-1.5 py-0.5 text-xs", he(d.api_mode)])
                    }, a(ce(d.api_mode)), 3)) : N("", !0),
                    d.associated_monitors > 0 ? (l(), u("span", Ca, a(n(t)("admin.channelMonitor.template.associatedCount", { n: d.associated_monitors })), 1)) : N("", !0)
                  ]),
                  d.description ? (l(), u("p", Va, a(d.description), 1)) : N("", !0),
                  e("p", Ea, a(n(t)("admin.channelMonitor.template.headersSummary", {
                    n: Object.keys(d.extra_headers || {}).length
                  })), 1)
                ]),
                e("div", Pa, [
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    disabled: d.associated_monitors === 0,
                    title: n(t)("admin.channelMonitor.template.applyTooltip"),
                    onClick: (x) => k(d)
                  }, [
                    O(se, {
                      name: "refresh",
                      size: "sm",
                      class: "mr-1"
                    }),
                    F(" " + a(n(t)("admin.channelMonitor.template.applyButton")), 1)
                  ], 8, Oa),
                  e("button", {
                    class: "btn btn-secondary btn-sm",
                    onClick: (x) => ee(d)
                  }, a(n(t)("common.edit")), 9, Sa),
                  e("button", {
                    class: "btn btn-secondary btn-sm text-red-600",
                    onClick: (x) => te(d)
                  }, a(n(t)("common.delete")), 9, Ra)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        _: 1
      }, 8, ["show", "title"]),
      O(pa, {
        show: $.show,
        "template-id": $.tpl ? $.tpl.id : null,
        "template-name": $.tpl ? $.tpl.name : "",
        onClose: A[7] || (A[7] = (d) => $.show = !1),
        onApplied: U
      }, null, 8, ["show", "template-id", "template-name"]),
      O(Qe, {
        show: j.show,
        title: n(t)("common.delete"),
        message: K.value,
        "confirm-text": n(t)("common.delete"),
        "cancel-text": n(t)("common.cancel"),
        danger: !0,
        onConfirm: be,
        onCancel: A[8] || (A[8] = (d) => j.show = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
}), Xa = { class: "space-y-2" }, Wa = { class: "flex flex-col" }, er = { class: "font-medium text-gray-900 dark:text-white" }, tr = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, nr = { class: "flex items-center gap-2" }, or = { class: "text-xs text-gray-500 dark:text-gray-400" }, ar = { class: "flex justify-end" }, rr = /* @__PURE__ */ me({
  __name: "MonitorRunResultDialog",
  props: {
    show: { type: Boolean },
    results: {}
  },
  emits: ["close"],
  setup(v) {
    const { t: r } = pe(), { statusLabel: h, statusBadgeClass: M, formatLatency: t } = Ee();
    return (y, m) => (l(), ge(Ve, {
      show: v.show,
      title: n(r)("admin.channelMonitor.runResultTitle"),
      width: "normal",
      onClose: m[1] || (m[1] = (p) => y.$emit("close"))
    }, {
      footer: B(() => [
        e("div", ar, [
          e("button", {
            onClick: m[0] || (m[0] = (p) => y.$emit("close")),
            class: "btn btn-primary"
          }, a(n(r)("common.close")), 1)
        ])
      ]),
      default: B(() => [
        e("div", Xa, [
          (l(!0), u(J, null, ne(v.results, (p) => (l(), u("div", {
            key: p.model,
            class: "flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-dark-600"
          }, [
            e("div", Wa, [
              e("span", er, a(p.model), 1),
              p.message ? (l(), u("span", tr, a(p.message), 1)) : N("", !0),
              O(tt, {
                snapshot: p.quota,
                class: "mt-1"
              }, null, 8, ["snapshot"])
            ]),
            e("div", nr, [
              e("span", {
                class: Q(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px]", n(M)(p.status)])
              }, a(n(h)(p.status)), 3),
              e("span", or, a(n(t)(p.latency_ms)) + " ms", 1)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), sr = { class: "flex flex-col gap-0.5" }, lr = { class: "flex items-center gap-2" }, ir = { class: "text-sm text-gray-900 dark:text-gray-100" }, dr = { class: "space-y-2" }, cr = { class: "text-xs font-semibold text-gray-100" }, ur = {
  key: 0,
  class: "text-[11px] text-gray-300"
}, mr = {
  key: 1,
  class: "space-y-1"
}, pr = { class: "text-[11px] font-semibold uppercase tracking-wide text-gray-400" }, hr = { class: "w-full text-left text-[11px]" }, vr = { class: "text-gray-400" }, _r = { class: "py-0.5 pr-2 font-medium" }, yr = { class: "py-0.5 pr-2 font-medium" }, br = { class: "py-0.5 font-medium" }, gr = { class: "py-0.5 pr-2 text-gray-100" }, fr = { class: "py-0.5 pr-2" }, xr = { class: "py-0.5 text-gray-100" }, kr = /* @__PURE__ */ me({
  __name: "MonitorPrimaryModelCell",
  props: {
    row: {}
  },
  setup(v) {
    const { t: r } = pe(), { statusLabel: h, statusBadgeClass: M, formatLatency: t } = Ee();
    return (y, m) => (l(), u("div", sr, [
      e("div", lr, [
        e("span", ir, a(v.row.primary_model), 1),
        O(Ye, null, {
          trigger: B(() => [
            e("span", {
              class: Q(["inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", n(M)(v.row.primary_status)])
            }, a(n(h)(v.row.primary_status)), 3)
          ]),
          default: B(() => {
            var p;
            return [
              e("div", dr, [
                e("div", cr, [
                  F(a(v.row.primary_model) + " ", 1),
                  e("span", {
                    class: Q(["ml-1 inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium", n(M)(v.row.primary_status)])
                  }, a(n(h)(v.row.primary_status)), 3)
                ]),
                (((p = v.row.extra_models) == null ? void 0 : p.length) ?? 0) === 0 ? (l(), u("div", ur, a(n(r)("monitorCommon.extraModelsEmpty")), 1)) : (l(), u("div", mr, [
                  e("div", pr, a(n(r)("monitorCommon.extraModelsHeader")), 1),
                  e("table", hr, [
                    e("thead", null, [
                      e("tr", vr, [
                        e("th", _r, a(n(r)("admin.channelMonitor.columns.primaryModel")), 1),
                        e("th", yr, a(n(r)("admin.channelMonitor.columns.actions")), 1),
                        e("th", br, a(n(r)("admin.channelMonitor.columns.latency")), 1)
                      ])
                    ]),
                    e("tbody", null, [
                      (l(!0), u(J, null, ne(v.row.extra_models_status || [], (_) => (l(), u("tr", {
                        key: _.model
                      }, [
                        e("td", gr, a(_.model), 1),
                        e("td", fr, [
                          e("span", {
                            class: Q(["inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]", n(M)(_.status)])
                          }, a(n(h)(_.status)), 3)
                        ]),
                        e("td", xr, a(n(t)(_.latency_ms)), 1)
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
      O(tt, {
        snapshot: v.row.latest_quota
      }, null, 8, ["snapshot"])
    ]));
  }
}), Mr = { class: "flex items-center gap-1" }, $r = ["disabled"], wr = { class: "text-xs" }, Cr = ["title", "disabled"], Vr = { class: "text-xs" }, Er = { class: "text-xs" }, Pr = { class: "text-xs" }, Or = /* @__PURE__ */ me({
  __name: "MonitorActionsCell",
  props: {
    row: {},
    running: { type: Boolean },
    duplicating: { type: Boolean }
  },
  emits: ["run", "duplicate", "edit", "delete"],
  setup(v) {
    const r = v, { t: h } = pe(), M = R(() => r.row.api_key_decrypt_failed ? h("admin.channelMonitor.duplicateKeyUnavailable") : r.duplicating ? h("admin.channelMonitor.duplicating") : h("admin.channelMonitor.duplicate"));
    return (t, y) => (l(), u("div", Mr, [
      e("button", {
        onClick: y[0] || (y[0] = (m) => t.$emit("run", v.row)),
        disabled: v.running,
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "refresh",
          size: "sm",
          class: Q(v.running ? "animate-spin" : "")
        }, null, 8, ["class"]),
        e("span", wr, a(n(h)("admin.channelMonitor.runNow")), 1)
      ], 8, $r),
      e("button", {
        "data-testid": "monitor-duplicate",
        title: M.value,
        disabled: v.duplicating || !!v.row.api_key_decrypt_failed,
        onClick: y[1] || (y[1] = (m) => t.$emit("duplicate", v.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "copy",
          size: "sm"
        }),
        e("span", Vr, a(v.duplicating ? n(h)("admin.channelMonitor.duplicating") : n(h)("admin.channelMonitor.duplicate")), 1)
      ], 8, Cr),
      e("button", {
        onClick: y[2] || (y[2] = (m) => t.$emit("edit", v.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
      }, [
        O(se, {
          name: "edit",
          size: "sm"
        }),
        e("span", Er, a(n(h)("common.edit")), 1)
      ]),
      e("button", {
        onClick: y[3] || (y[3] = (m) => t.$emit("delete", v.row)),
        class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
      }, [
        O(se, {
          name: "trash",
          size: "sm"
        }),
        e("span", Pr, a(n(h)("common.delete")), 1)
      ])
    ]));
  }
}), Sr = { class: "mx-auto w-full max-w-6xl space-y-5 px-1 py-2 sm:px-2" }, Rr = { class: "page-header mb-0 flex flex-wrap items-center justify-between gap-3 px-1 py-2" }, Ar = { class: "min-w-0" }, Tr = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Ir = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400" }, Ur = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Nr = ["disabled"], Dr = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50/90 px-4 py-3 text-sm text-zo-alert-900 dark:border-zo-alert-800/50 dark:bg-zo-alert-900/20 dark:text-zo-alert-100",
  role: "status"
}, zr = {
  key: 1,
  class: "card flex min-h-[200px] items-center justify-center !rounded-lg !border-0 text-sm text-gray-400 shadow-sm ring-1 ring-gray-900/5 dark:ring-dark-700"
}, jr = { class: "animate-pulse" }, Br = { class: "card divide-y divide-gray-100 !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:divide-dark-700 dark:!bg-dark-800 dark:ring-dark-700" }, Hr = { class: "flex flex-wrap items-center justify-between gap-4 px-5 py-4" }, Fr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, qr = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Kr = { class: "flex flex-wrap items-center justify-between gap-4 px-5 py-4" }, Gr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Lr = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Jr = ["aria-label"], Qr = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, Yr = { class: "card-header !py-3" }, Zr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Xr = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Wr = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, es = { class: "text-sm font-medium text-gray-900 dark:text-white" }, ts = ["value", "placeholder", "onChange"], ns = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, os = { class: "card-header flex flex-wrap items-center justify-between gap-2 !py-3" }, as = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, rs = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, ss = { class: "max-h-[min(40vh,280px)] overflow-y-auto px-3 py-2 sm:px-4" }, ls = { class: "grid grid-cols-1 gap-1 sm:grid-cols-2" }, is = ["checked", "onChange"], ds = { class: "min-w-0 flex-1 truncate font-medium text-gray-800 dark:text-gray-100" }, cs = { class: "shrink-0 text-xs text-gray-400" }, us = {
  key: 0,
  class: "empty-state py-8 text-sm text-gray-400"
}, ms = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, ps = { class: "card-header !py-3" }, hs = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, vs = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, _s = { class: "max-h-[min(40vh,320px)] overflow-y-auto px-3 py-2 sm:px-4" }, ys = { class: "grid grid-cols-1 gap-1 sm:grid-cols-2" }, bs = ["checked", "onChange"], gs = { class: "min-w-0 flex-1 truncate font-medium text-gray-800 dark:text-gray-100" }, fs = { class: "shrink-0 font-mono text-[10px] text-gray-400" }, xs = { class: "border-t border-gray-100 px-5 py-3 text-xs text-gray-500 dark:border-dark-700 dark:text-dark-400" }, ks = { class: "card overflow-hidden !rounded-lg !border-0 shadow-sm ring-1 ring-gray-900/5 dark:!bg-dark-800 dark:ring-dark-700" }, Ms = { class: "card-header !py-3" }, $s = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, ws = { class: "mt-0.5 text-xs text-gray-500 dark:text-dark-400" }, Cs = { class: "grid grid-cols-1 gap-4 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4" }, Vs = { class: "block" }, Es = { class: "input-label" }, Ps = { class: "block" }, Os = { class: "input-label" }, Ss = { class: "block" }, Rs = { class: "input-label" }, As = { class: "block" }, Ts = { class: "input-label" }, Is = { class: "block" }, Us = { class: "input-label" }, Ns = { class: "block" }, Ds = { class: "input-label" }, zs = { class: "block" }, js = { class: "input-label" }, Bs = { class: "block" }, Hs = { class: "input-label" }, Fs = { class: "space-y-2" }, qs = { class: "rounded-2xl border border-primary-200 bg-primary-50/80 px-4 py-3 text-sm text-primary-900 dark:border-primary-800/50 dark:bg-primary-900/20 dark:text-primary-100" }, Ks = { class: "rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-xs text-gray-600 dark:border-dark-600 dark:bg-dark-800/50 dark:text-gray-300" }, Gs = { class: "font-medium text-gray-800 dark:text-gray-100" }, Ls = { class: "mt-1.5 list-disc space-y-0.5 pl-4" }, Js = /* @__PURE__ */ me({
  __name: "MonitorSettingsPanel",
  setup(v) {
    const { t: r, te: h } = pe(), M = Ce(), t = P(!0), y = P(!1), m = P(null), p = P(""), _ = P([]), V = R(() => m.value ? JSON.stringify(m.value) !== p.value : !1), q = R(
      () => {
        var w;
        return ((w = m.value) == null ? void 0 : w.platforms.filter((g) => g.enabled).reduce((g, z) => g + z.models.length, 0)) || 0;
      }
    ), Z = Rt, X = R(
      () => {
        var w, g;
        return Z.length - (((g = (w = m.value) == null ? void 0 : w.ignored_error_categories) == null ? void 0 : g.length) || 0);
      }
    ), T = R(() => At()), o = R(() => {
      var w;
      return (w = M.cachedPublicSettings) != null && w.channel_monitor_enabled ? Tt() === "v1" ? r("channelMonitorV2.settings.modeV1") : r("channelMonitorV2.settings.modeV2") : r("channelMonitorV2.settings.modeClosed");
    }), b = {
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
    }, S = [
      "authentication",
      "client_cancelled",
      "content_policy",
      "context_limit",
      "group_access",
      "model_unsupported",
      "not_found",
      "quota_or_balance"
    ];
    function I(w) {
      return R({
        get: () => {
          var g, z;
          return (((z = (g = m.value) == null ? void 0 : g.health_thresholds) == null ? void 0 : z[w]) ?? b[w]) * 100;
        },
        set: (g) => {
          m.value && (m.value.health_thresholds[w] = Math.max(0, Math.min(100, Number(g) || 0)) / 100);
        }
      });
    }
    const D = I("warning_error_rate"), ee = I("critical_error_rate"), oe = I("warning_cache_rate"), H = I("critical_cache_rate");
    function le(w, g) {
      w.models = [
        ...new Set(
          g.target.value.split(",").map((z) => z.trim()).filter(Boolean)
        )
      ].sort();
    }
    function $(w) {
      m.value && (m.value.group_ids = m.value.group_ids.includes(w) ? m.value.group_ids.filter((g) => g !== w) : [...m.value.group_ids, w].sort((g, z) => g - z));
    }
    function k(w) {
      var g, z;
      return !!((z = (g = m.value) == null ? void 0 : g.ignored_error_categories) != null && z.includes(w));
    }
    function U(w) {
      if (!m.value) return;
      const g = new Set(m.value.ignored_error_categories || []);
      g.has(w) ? g.delete(w) : g.add(w), m.value.ignored_error_categories = [...g].sort();
    }
    function j(w) {
      const g = `channelMonitorV2.errorCategories.${w}`;
      return h(g) ? r(g) : w;
    }
    function te(w) {
      return {
        anthropic: "Claude",
        openai: "OpenAI",
        grok: "Grok",
        kiro: "Kiro",
        gemini: "Gemini",
        antigravity: "Antigravity",
        kimi: "Kimi",
        zhipu: "Zhipu GLM",
        deepseek: "DeepSeek",
        minimax: "MiniMax",
        composite: "Composite"
      }[w] || w;
    }
    function K(w) {
      const g = w.ignored_error_categories;
      return {
        ...w,
        health_thresholds: { ...b, ...w.health_thresholds || {} },
        // Preserve explicit empty arrays from the server (operator cleared all).
        ignored_error_categories: [
          ...g ?? [...S]
        ].sort()
      };
    }
    async function be() {
      t.value = !0;
      try {
        const [w, g] = await Promise.all([It(), W.groups.getAllIncludingInactive()]), z = K(w);
        m.value = structuredClone(z), _.value = g, p.value = JSON.stringify(z);
      } catch (w) {
        M.showError(re(w, r("channelMonitorV2.settings.loadFailed")));
      } finally {
        t.value = !1;
      }
    }
    async function fe() {
      if (m.value) {
        y.value = !0;
        try {
          const w = K(m.value), g = await Ut(w), z = K(g);
          m.value = structuredClone(z), p.value = JSON.stringify(z), M.showSuccess(r("channelMonitorV2.settings.saveSuccess"));
        } catch (w) {
          M.showError(re(w, r("channelMonitorV2.settings.saveFailed"))), await be();
        } finally {
          y.value = !1;
        }
      }
    }
    return Le(be), (w, g) => {
      var de;
      const z = mt("router-link");
      return l(), u("section", Sr, [
        e("header", Rr, [
          e("div", Ar, [
            e("h2", Tr, [
              e("span", Ir, [
                O(se, {
                  name: "chart",
                  size: "sm"
                })
              ]),
              F(" " + a(n(r)("channelMonitorV2.settings.title")), 1)
            ]),
            e("p", Ur, a(n(r)("channelMonitorV2.settings.description")), 1)
          ]),
          e("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: y.value || !V.value,
            onClick: fe
          }, [
            O(se, {
              name: "check",
              size: "sm"
            }),
            F(" " + a(n(r)("channelMonitorV2.settings.save")), 1)
          ], 8, Nr)
        ]),
        T.value ? N("", !0) : (l(), u("div", Dr, [
          F(a(n(r)("channelMonitorV2.settings.modeBanner", {
            mode: o.value,
            modeV2: n(r)("channelMonitorV2.settings.modeV2")
          })) + " ", 1),
          O(z, {
            class: "ml-1 font-medium underline",
            to: "/admin/settings"
          }, {
            default: B(() => [
              F(a(n(r)("admin.settings.tabs.features")), 1)
            ]),
            _: 1
          })
        ])),
        t.value ? (l(), u("div", zr, [
          e("span", jr, a(n(r)("channelMonitorV2.settings.loading")), 1)
        ])) : m.value ? (l(), u(J, { key: 2 }, [
          e("div", Br, [
            e("div", Hr, [
              e("div", null, [
                e("strong", Fr, a(n(r)("channelMonitorV2.settings.enableTitle")), 1),
                e("p", qr, a(n(r)("channelMonitorV2.settings.enableHint")), 1)
              ]),
              O(Re, {
                modelValue: m.value.enabled,
                "onUpdate:modelValue": g[0] || (g[0] = (C) => m.value.enabled = C)
              }, null, 8, ["modelValue"])
            ]),
            e("div", Kr, [
              e("div", null, [
                e("strong", Gr, a(n(r)("channelMonitorV2.settings.refreshTitle")), 1),
                e("p", Lr, a(n(r)("channelMonitorV2.settings.refreshHint")), 1)
              ]),
              e("div", {
                class: "tabs inline-flex w-auto",
                role: "group",
                "aria-label": n(r)("channelMonitorV2.settings.refreshAria")
              }, [
                e("button", {
                  type: "button",
                  class: Q(["tab", m.value.refresh_interval_seconds === 60 ? "tab-active" : ""]),
                  onClick: g[1] || (g[1] = (C) => m.value.refresh_interval_seconds = 60)
                }, " 1 min ", 2),
                e("button", {
                  type: "button",
                  class: Q(["tab", m.value.refresh_interval_seconds === 300 ? "tab-active" : ""]),
                  onClick: g[2] || (g[2] = (C) => m.value.refresh_interval_seconds = 300)
                }, " 5 min ", 2)
              ], 8, Jr)
            ])
          ]),
          e("div", Qr, [
            e("div", Yr, [
              e("h3", Zr, a(n(r)("channelMonitorV2.settings.platformsTitle")), 1),
              e("p", Xr, a(n(r)("channelMonitorV2.settings.platformsHint")), 1)
            ]),
            e("div", Wr, [
              (l(!0), u(J, null, ne(m.value.platforms, (C) => (l(), u("div", {
                key: C.platform,
                class: "grid grid-cols-1 items-center gap-3 px-5 py-3 sm:grid-cols-[auto_7rem_minmax(0,1fr)_auto]"
              }, [
                O(Re, {
                  modelValue: C.enabled,
                  "onUpdate:modelValue": (ce) => C.enabled = ce
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                e("strong", es, a(te(C.platform)), 1),
                e("input", {
                  class: "input",
                  value: C.models.join(", "),
                  type: "text",
                  placeholder: n(r)("channelMonitorV2.settings.modelsPlaceholder"),
                  onChange: (ce) => le(C, ce)
                }, null, 40, ts),
                e("span", {
                  class: Q(["badge justify-self-start sm:justify-self-end", C.models.length ? "badge-gray" : "badge badge-primary"])
                }, a(C.models.length ? n(r)("channelMonitorV2.settings.badgeOther") : n(r)("channelMonitorV2.settings.badgeAllModels")), 3)
              ]))), 128))
            ])
          ]),
          e("div", ns, [
            e("div", os, [
              e("div", null, [
                e("h3", as, a(n(r)("channelMonitorV2.settings.groupsTitle")), 1),
                e("p", rs, a(m.value.group_ids.length ? n(r)("channelMonitorV2.settings.groupsSelected", { count: m.value.group_ids.length }) : n(r)("channelMonitorV2.settings.groupsAll")), 1)
              ]),
              m.value.group_ids.length ? (l(), u("button", {
                key: 0,
                type: "button",
                class: "btn btn-ghost btn-sm",
                onClick: g[3] || (g[3] = (C) => m.value.group_ids = [])
              }, a(n(r)("channelMonitorV2.settings.groupsAll")), 1)) : N("", !0)
            ]),
            e("div", ss, [
              e("div", ls, [
                (l(!0), u(J, null, ne(_.value, (C) => (l(), u("label", {
                  key: C.id,
                  class: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-gray-50 dark:hover:bg-dark-800/60"
                }, [
                  e("input", {
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500/40",
                    checked: m.value.group_ids.includes(C.id),
                    onChange: (ce) => $(C.id)
                  }, null, 40, is),
                  e("span", ds, a(C.name), 1),
                  e("small", cs, a(te(C.platform)) + " · #" + a(C.id), 1)
                ]))), 128))
              ]),
              _.value.length === 0 ? (l(), u("p", us, a(n(r)("channelMonitorV2.settings.groupsEmpty")), 1)) : N("", !0)
            ])
          ]),
          e("div", ms, [
            e("div", ps, [
              e("h3", hs, a(n(r)("channelMonitorV2.settings.errorsTitle")), 1),
              e("p", vs, a(n(r)("channelMonitorV2.settings.errorsHint")), 1)
            ]),
            e("div", _s, [
              e("div", ys, [
                (l(!0), u(J, null, ne(n(Z), (C) => (l(), u("label", {
                  key: C,
                  class: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-gray-50 dark:hover:bg-dark-800/60"
                }, [
                  e("input", {
                    type: "checkbox",
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500/40",
                    checked: k(C),
                    onChange: (ce) => U(C)
                  }, null, 40, bs),
                  e("span", gs, a(j(C)), 1),
                  e("small", fs, a(C), 1)
                ]))), 128))
              ])
            ]),
            e("div", xs, a(n(r)("channelMonitorV2.settings.ignoredSummary", {
              ignored: ((de = m.value.ignored_error_categories) == null ? void 0 : de.length) || 0,
              counted: X.value
            })), 1)
          ]),
          e("div", ks, [
            e("div", Ms, [
              e("h3", $s, a(n(r)("channelMonitorV2.settings.healthTitle")), 1),
              e("p", ws, a(n(r)("channelMonitorV2.settings.healthHint")), 1)
            ]),
            e("div", Cs, [
              e("label", Vs, [
                e("span", Es, a(n(r)("channelMonitorV2.settings.fields.minimumSample")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[4] || (g[4] = (C) => m.value.health_thresholds.minimum_sample = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "10000"
                }, null, 512), [
                  [
                    L,
                    m.value.health_thresholds.minimum_sample,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Ps, [
                e("span", Os, a(n(r)("channelMonitorV2.settings.fields.warningError")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[5] || (g[5] = (C) => Pe(D) ? D.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    L,
                    n(D),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Ss, [
                e("span", Rs, a(n(r)("channelMonitorV2.settings.fields.criticalError")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[6] || (g[6] = (C) => Pe(ee) ? ee.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    L,
                    n(ee),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", As, [
                e("span", Ts, a(n(r)("channelMonitorV2.settings.fields.targetTtft")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[7] || (g[7] = (C) => m.value.health_thresholds.target_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    L,
                    m.value.health_thresholds.target_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Is, [
                e("span", Us, a(n(r)("channelMonitorV2.settings.fields.warningTtft")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[8] || (g[8] = (C) => m.value.health_thresholds.warning_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    L,
                    m.value.health_thresholds.warning_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Ns, [
                e("span", Ds, a(n(r)("channelMonitorV2.settings.fields.criticalTtft")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[9] || (g[9] = (C) => m.value.health_thresholds.critical_ttft_ms = C),
                  class: "input",
                  type: "number",
                  min: "1",
                  step: "100"
                }, null, 512), [
                  [
                    L,
                    m.value.health_thresholds.critical_ttft_ms,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", zs, [
                e("span", js, a(n(r)("channelMonitorV2.settings.fields.warningCache")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[10] || (g[10] = (C) => Pe(oe) ? oe.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    L,
                    n(oe),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("label", Bs, [
                e("span", Hs, a(n(r)("channelMonitorV2.settings.fields.criticalCache")), 1),
                G(e("input", {
                  "onUpdate:modelValue": g[11] || (g[11] = (C) => Pe(H) ? H.value = C : null),
                  class: "input",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "0.1"
                }, null, 512), [
                  [
                    L,
                    n(H),
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])
          ]),
          e("div", Fs, [
            e("div", qs, [
              q.value === 0 ? (l(), u(J, { key: 0 }, [
                F(a(n(r)("channelMonitorV2.settings.namedModelsEmpty")), 1)
              ], 64)) : (l(), u(J, { key: 1 }, [
                F(a(n(r)("channelMonitorV2.settings.namedModelsCount", { count: q.value })), 1)
              ], 64))
            ]),
            e("div", Ks, [
              e("p", Gs, a(n(r)("channelMonitorV2.settings.userContractTitle")), 1),
              e("ul", Ls, [
                e("li", null, a(n(r)("channelMonitorV2.settings.userContract.health")), 1),
                e("li", null, a(n(r)("channelMonitorV2.settings.userContract.trend")), 1),
                e("li", null, a(n(r)("channelMonitorV2.settings.userContract.latency")), 1),
                e("li", null, a(n(r)("channelMonitorV2.settings.userContract.models")), 1)
              ])
            ])
          ])
        ], 64)) : N("", !0)
      ]);
    };
  }
}), Qs = { class: "w-full min-w-0 space-y-6 pb-8" }, Ys = { class: "page-header mb-0 px-1 py-2" }, Zs = { class: "page-title flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white" }, Xs = { class: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Ws = { class: "page-description mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, el = { class: "mt-4 border-t border-gray-100 pt-4 dark:border-dark-700" }, tl = ["aria-label"], nl = ["aria-selected"], ol = ["aria-selected"], al = { class: "flex items-center gap-1.5" }, rl = { class: "font-medium text-gray-900 dark:text-white" }, sl = { class: "text-sm text-gray-900 dark:text-gray-100" }, ll = { class: "text-sm text-gray-900 dark:text-gray-100" }, gl = /* @__PURE__ */ me({
  __name: "ChannelMonitorView",
  setup(v) {
    const { t: r } = pe(), h = Ce(), M = R(() => Ke()), t = P(Ke() ? "legacy" : "v2"), {
      providerLabel: y,
      providerBadgeClass: m,
      formatLatency: p,
      formatAvailability: _
    } = Ee(), V = P([]), q = P(!1), Z = P(null), X = P(""), T = P(""), o = P(""), b = ke({ page: 1, page_size: ht(), total: 0 }), S = P(!1), I = P(!1), D = P(null), ee = P(!1), oe = P(null), H = P(!1), le = P([]), $ = ke(/* @__PURE__ */ new Set());
    let k = null, U = null;
    const j = R(() => [
      { key: "name", label: r("admin.channelMonitor.columns.name"), sortable: !1 },
      { key: "provider", label: r("admin.channelMonitor.columns.provider"), sortable: !1 },
      { key: "primary_model", label: r("admin.channelMonitor.columns.primaryModel"), sortable: !1 },
      { key: "availability_7d", label: r("admin.channelMonitor.columns.availability7d"), sortable: !1 },
      { key: "latency", label: r("admin.channelMonitor.columns.latency"), sortable: !1 },
      { key: "enabled", label: r("admin.channelMonitor.columns.enabled"), sortable: !1 },
      { key: "actions", label: r("admin.channelMonitor.columns.actions"), sortable: !1 }
    ]), te = R(() => {
      var x;
      const d = ((x = oe.value) == null ? void 0 : x.name) || "";
      return r("admin.channelMonitor.deleteConfirm", { name: d });
    });
    async function K() {
      k && k.abort();
      const d = new AbortController();
      k = d, q.value = !0;
      try {
        const x = {
          page: b.page,
          page_size: b.page_size
        };
        T.value && (x.provider = T.value), o.value === "true" && (x.enabled = !0), o.value === "false" && (x.enabled = !1), X.value.trim() && (x.search = X.value.trim());
        const E = await W.channelMonitor.list(x, { signal: d.signal });
        if (d.signal.aborted || k !== d) return;
        V.value = E.items || [], b.total = E.total;
      } catch (x) {
        const E = x;
        if ((E == null ? void 0 : E.name) === "AbortError" || (E == null ? void 0 : E.code) === "ERR_CANCELED") return;
        h.showError(re(x, r("admin.channelMonitor.loadError")));
      } finally {
        k === d && (q.value = !1, k = null);
      }
    }
    function be() {
      U && clearTimeout(U), U = setTimeout(() => {
        b.page = 1, K();
      }, 300);
    }
    function fe(d) {
      b.page = d, K();
    }
    function w(d) {
      b.page_size = d, b.page = 1, K();
    }
    function g() {
      D.value = null, S.value = !0;
    }
    function z(d) {
      D.value = d, S.value = !0;
    }
    function de() {
      S.value = !1, D.value = null;
    }
    async function C(d) {
      const x = !d.enabled;
      try {
        await W.channelMonitor.update(d.id, { enabled: x }), d.enabled = x;
      } catch (E) {
        h.showError(re(E, r("common.error")));
      }
    }
    async function ce(d) {
      if (!M.value) {
        h.showError(r("admin.channelMonitor.runFailed"));
        return;
      }
      if (Z.value == null) {
        Z.value = d.id;
        try {
          const x = await W.channelMonitor.runNow(d.id);
          le.value = x.results || [], H.value = !0, h.showSuccess(r("admin.channelMonitor.runSuccess")), K();
        } catch (x) {
          h.showError(re(x, r("admin.channelMonitor.runFailed")));
        } finally {
          Z.value = null;
        }
      }
    }
    async function he(d) {
      if (d.api_key_decrypt_failed) {
        h.showError(r("admin.channelMonitor.duplicateKeyUnavailable"));
        return;
      }
      if (!$.has(d.id)) {
        $.add(d.id);
        try {
          const x = await W.channelMonitor.duplicate(d.id);
          h.showSuccess(r("admin.channelMonitor.duplicateSuccess", { name: x.name })), await K();
        } catch (x) {
          h.showError(re(x, r("admin.channelMonitor.duplicateFailed")));
        } finally {
          $.delete(d.id);
        }
      }
    }
    function f(d) {
      oe.value = d, ee.value = !0;
    }
    async function A() {
      if (oe.value)
        try {
          await W.channelMonitor.del(oe.value.id), h.showSuccess(r("admin.channelMonitor.deleteSuccess")), ee.value = !1, oe.value = null, K();
        } catch (d) {
          h.showError(re(d, r("common.error")));
        }
    }
    return ue(t, (d) => {
      d === "legacy" && V.value.length === 0 && K();
    }), Le(() => {
      t.value === "legacy" && K();
    }), pt(() => {
      U && clearTimeout(U), k == null || k.abort();
    }), (d, x) => (l(), u(J, null, [
      e("div", Qs, [
        e("header", Ys, [
          e("h1", Zs, [
            e("span", Xs, [
              O(se, {
                name: "chart",
                size: "sm"
              })
            ]),
            F(" " + a(n(r)("admin.channelMonitor.title")), 1)
          ]),
          e("p", Ws, a(M.value ? n(r)("channelMonitorV2.admin.descriptionV1") : n(r)("channelMonitorV2.admin.descriptionV2")), 1),
          e("div", el, [
            e("div", {
              class: "tabs inline-flex w-full max-w-xl flex-wrap sm:w-auto",
              role: "tablist",
              "aria-label": n(r)("channelMonitorV2.admin.tabAria")
            }, [
              e("button", {
                type: "button",
                role: "tab",
                class: Q(["tab flex-1 sm:flex-none", t.value === "v2" ? "tab-active" : ""]),
                "aria-selected": t.value === "v2",
                onClick: x[0] || (x[0] = (E) => t.value = "v2")
              }, a(n(r)("channelMonitorV2.admin.tabV2")), 11, nl),
              e("button", {
                type: "button",
                role: "tab",
                class: Q(["tab flex-1 sm:flex-none", t.value === "legacy" ? "tab-active" : ""]),
                "aria-selected": t.value === "legacy",
                onClick: x[1] || (x[1] = (E) => t.value = "legacy")
              }, a(M.value ? n(r)("channelMonitorV2.admin.tabV1Active") : n(r)("channelMonitorV2.admin.tabV1History")), 11, ol)
            ], 8, tl)
          ])
        ]),
        t.value === "v2" ? (l(), ge(Js, { key: 0 })) : (l(), ge(yt, { key: 1 }, {
          filters: B(() => [
            O(en, {
              search: X.value,
              "onUpdate:search": x[2] || (x[2] = (E) => X.value = E),
              provider: T.value,
              "onUpdate:provider": x[3] || (x[3] = (E) => T.value = E),
              enabled: o.value,
              "onUpdate:enabled": x[4] || (x[4] = (E) => o.value = E),
              loading: q.value,
              onReload: K,
              onCreate: g,
              onManageTemplates: x[5] || (x[5] = (E) => I.value = !0),
              onSearchInput: be
            }, null, 8, ["search", "provider", "enabled", "loading"])
          ]),
          table: B(() => [
            O(_t, {
              columns: j.value,
              data: V.value,
              loading: q.value
            }, {
              "cell-name": B(({ row: E, value: ve }) => [
                e("div", al, [
                  e("span", rl, a(ve), 1),
                  E.api_key_decrypt_failed ? (l(), ge(Ye, {
                    key: 0,
                    content: n(r)("admin.channelMonitor.apiKeyDecryptFailed")
                  }, {
                    default: B(() => [
                      O(se, {
                        name: "exclamationTriangle",
                        size: "sm",
                        class: "text-red-500"
                      })
                    ]),
                    _: 1
                  }, 8, ["content"])) : N("", !0)
                ])
              ]),
              "cell-provider": B(({ row: E }) => [
                e("span", {
                  class: Q(["inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", n(m)(E.provider)])
                }, a(n(y)(E.provider)), 3)
              ]),
              "cell-primary_model": B(({ row: E }) => [
                O(kr, { row: E }, null, 8, ["row"])
              ]),
              "cell-availability_7d": B(({ row: E }) => [
                e("span", sl, a(n(_)(E)), 1)
              ]),
              "cell-latency": B(({ row: E }) => [
                e("span", ll, a(n(p)(E.primary_latency_ms)), 1)
              ]),
              "cell-enabled": B(({ row: E }) => [
                O(Re, {
                  modelValue: E.enabled,
                  "onUpdate:modelValue": (ve) => C(E)
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              "cell-actions": B(({ row: E }) => [
                O(Or, {
                  row: E,
                  running: Z.value === E.id,
                  duplicating: $.has(E.id),
                  onRun: ce,
                  onDuplicate: he,
                  onEdit: z,
                  onDelete: f
                }, null, 8, ["row", "running", "duplicating"])
              ]),
              empty: B(() => [
                O(bt, {
                  title: n(r)("admin.channelMonitor.noMonitorsYet"),
                  description: n(r)("admin.channelMonitor.createFirstMonitor"),
                  "action-text": n(r)("admin.channelMonitor.createButton"),
                  onAction: g
                }, null, 8, ["title", "description", "action-text"])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          pagination: B(() => [
            b.total > 0 ? (l(), ge(vt, {
              key: 0,
              page: b.page,
              total: b.total,
              "page-size": b.page_size,
              "onUpdate:page": fe,
              "onUpdate:pageSize": w
            }, null, 8, ["page", "total", "page-size"])) : N("", !0)
          ]),
          _: 1
        }))
      ]),
      O(Zo, {
        show: S.value,
        monitor: D.value,
        onClose: de,
        onSaved: K
      }, null, 8, ["show", "monitor"]),
      O(Za, {
        show: I.value,
        onClose: x[6] || (x[6] = (E) => I.value = !1),
        onUpdated: K
      }, null, 8, ["show"]),
      O(rr, {
        show: H.value,
        results: le.value,
        onClose: x[7] || (x[7] = (E) => H.value = !1)
      }, null, 8, ["show", "results"]),
      O(Qe, {
        show: ee.value,
        title: n(r)("common.delete"),
        message: te.value,
        "confirm-text": n(r)("common.delete"),
        "cancel-text": n(r)("common.cancel"),
        danger: !0,
        onConfirm: A,
        onCancel: x[8] || (x[8] = (E) => ee.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"])
    ], 64));
  }
});
export {
  gl as default
};
