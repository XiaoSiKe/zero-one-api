import { d as ft, e as r, f as d, g as e, h as n, q as ce, c as St, i as a, j as v, _ as Ae, n as T, F as K, p as ee, B as ct, s as W, w as Fn, E as Re, a as O, z as sa, l as q, m as p, v as k, ab as ji, M as rt, r as He, S as Pl, y as gt, u as $s, b as en, J as $l, H as tt, P as di, T as Ss, G as xt, o as Rl, N as Bt, W as Ua, L as Ll, D as ci, x as Ml, A as Dl } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { S as Ke, b as se, C as Ol, j as Il, n as os, k as ls, m as rs, p as zl, _ as Nl, q as Fl, t as ds, v as cs, w as Un, x as En, y as Hl, z as Bl, A as jl } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-d3KA2Dbp.js";
import { l as ql } from "./vue-draggable-plus-DLB1Jqdw.js";
import { _ as Kl } from "./BaseDialog.vue_vue_type_script_setup_true_lang-DwR6Fyok.js";
import { _ as Wl } from "./HelpTooltip.vue_vue_type_script_setup_true_lang-oR5Ce-E_.js";
import { _ as ui } from "./GroupBadge.vue_vue_type_script_setup_true_lang-C60Vt3W6.js";
import { G as mi } from "./GroupOptionItem-C0aHkpkP.js";
import { _ as B } from "./Toggle.vue_vue_type_script_setup_true_lang-cjeor373.js";
import { _ as Rs, u as Ls, i as Ht, a as qi, s as Ki, P as Gl } from "./ProxySelector-C3TDwbeU.js";
import { a as nt, e as Ca } from "./apiError-i2TfMBqu.js";
import { u as Yl } from "./useClipboard-B4DY1ZMB.js";
import { u as Ql } from "./adminSettings-BuVJozq4.js";
const Xl = { class: "flex flex-col items-center gap-0.5 cursor-pointer" }, Jl = { class: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap" }, Zl = ["aria-checked"], Aa = /* @__PURE__ */ ft({
  __name: "ToggleSwitch",
  props: {
    label: {},
    checked: { type: Boolean }
  },
  emits: ["toggle"],
  setup(u, { emit: t }) {
    const _ = t;
    return (x, U) => (r(), d("label", Xl, [
      e("span", Jl, n(u.label), 1),
      e("button", {
        type: "button",
        role: "switch",
        "aria-checked": u.checked,
        onClick: U[0] || (U[0] = (L) => _("toggle")),
        class: ce([
          "relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200",
          u.checked ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
        ])
      }, [
        e("span", {
          class: ce([
            "pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
            u.checked ? "translate-x-4" : "translate-x-0"
          ])
        }, null, 2)
      ], 10, Zl)
    ]));
  }
}), Xa = {
  easypay: ["alipay", "wxpay"],
  alipay: ["alipay"],
  wxpay: ["wxpay"],
  stripe: ["card", "alipay", "wxpay", "link"],
  airwallex: ["airwallex"]
}, Ja = "qrcode", As = "popup", Ts = "redirect", _i = [
  { value: "CNY", label: "CNY" },
  { value: "HKD", label: "HKD" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  { value: "AUD", label: "AUD" },
  { value: "CAD", label: "CAD" },
  { value: "SGD", label: "SGD" },
  { value: "JPY", label: "JPY" },
  { value: "KRW", label: "KRW" },
  { value: "NZD", label: "NZD" }
], er = "2026-03-25.dahlia", On = {
  easypay: "/api/v1/payment/webhook/easypay",
  alipay: "/api/v1/payment/webhook/alipay",
  wxpay: "/api/v1/payment/webhook/wxpay",
  stripe: "/api/v1/payment/webhook/stripe",
  airwallex: "/api/v1/payment/webhook/airwallex"
}, pi = "/payment/result", us = {
  easypay: { notifyUrl: On.easypay, returnUrl: pi },
  alipay: { notifyUrl: On.alipay, returnUrl: pi },
  wxpay: { notifyUrl: On.wxpay }
  // stripe: 不需要回调 URL 配置，Webhook 单独配置。
  // airwallex: 不需要回调 URL 配置，Webhook 在空中云汇后台配置。
}, Vn = {
  easypay: [
    { key: "pid", label: "PID", sensitive: !1 },
    { key: "pkey", label: "PKey", sensitive: !0 },
    { key: "apiBase", label: "", sensitive: !1 },
    { key: "cidAlipay", label: "", sensitive: !1, optional: !0 },
    { key: "cidWxpay", label: "", sensitive: !1, optional: !0 }
  ],
  alipay: [
    { key: "appId", label: "App ID", sensitive: !1 },
    { key: "privateKey", label: "", sensitive: !0 },
    { key: "publicKey", label: "", sensitive: !0 }
  ],
  wxpay: [
    { key: "appId", label: "App ID", sensitive: !1 },
    { key: "mchId", label: "", sensitive: !1 },
    { key: "privateKey", label: "", sensitive: !0 },
    { key: "apiV3Key", label: "", sensitive: !0 },
    { key: "certSerial", label: "", sensitive: !1 },
    { key: "publicKey", label: "", sensitive: !0 },
    { key: "publicKeyId", label: "", sensitive: !1 }
  ],
  stripe: [
    { key: "secretKey", label: "", sensitive: !0 },
    { key: "publishableKey", label: "", sensitive: !1 },
    { key: "webhookSecret", label: "", sensitive: !0 },
    { key: "currency", label: "", sensitive: !1, defaultValue: "CNY", hintKey: "admin.settings.payment.field_paymentCurrencyHint", options: _i }
  ],
  airwallex: [
    { key: "clientId", label: "", sensitive: !1 },
    { key: "apiKey", label: "", sensitive: !0 },
    { key: "webhookSecret", label: "", sensitive: !0 },
    { key: "apiBase", label: "", sensitive: !1, defaultValue: "https://api.airwallex.com/api/v1", hintKey: "admin.settings.payment.field_airwallexApiBaseHint" },
    { key: "countryCode", label: "", sensitive: !1, defaultValue: "CN" },
    { key: "currency", label: "", sensitive: !1, defaultValue: "CNY", hintKey: "admin.settings.payment.field_paymentCurrencyHint", options: _i },
    { key: "accountId", label: "", sensitive: !1, optional: !0, clearable: !0, hintKey: "admin.settings.payment.field_accountIdHint" }
  ]
};
function tr(u, t, _, x) {
  return _.find((U) => U.value === u) || { value: u, label: u };
}
function Wi(u, t, _) {
  return (Xa[u] || []).map((U) => tr(U, u, t));
}
function ar(u) {
  if (!u || !u.trim()) return [];
  try {
    const t = JSON.parse(u);
    return Array.isArray(t) ? t.map((_) => ({
      type: String((_ == null ? void 0 : _.type) || "").trim(),
      upstreamType: String((_ == null ? void 0 : _.upstreamType) || "").trim(),
      displayName: String((_ == null ? void 0 : _.displayName) || "").trim()
    })).filter((_) => _.type && _.upstreamType) : [];
  } catch {
    return [];
  }
}
function nr(u) {
  const t = u.map((_) => ({
    type: _.type.trim(),
    upstreamType: _.upstreamType.trim(),
    displayName: _.displayName.trim()
  })).filter((_) => _.type && _.upstreamType);
  return t.length ? JSON.stringify(t) : "";
}
function gi(u, t) {
  if (!u) return "";
  if (u.endsWith(t)) return u.slice(0, -t.length);
  try {
    return new URL(u).origin;
  } catch {
    return u;
  }
}
const sr = ["title"], ir = { class: "flex items-center gap-3" }, or = { class: "text-sm font-medium text-gray-900 dark:text-white" }, lr = { class: "text-xs text-gray-400 dark:text-gray-500" }, rr = {
  key: 0,
  class: "text-xs text-gray-400 dark:text-gray-500"
}, dr = {
  key: 1,
  class: "text-xs text-gray-300 dark:text-gray-600"
}, cr = {
  key: 2,
  class: "flex items-center gap-1"
}, ur = ["onClick"], mr = { class: "flex items-center gap-4" }, _r = { class: "flex items-center gap-2 border-l border-gray-200 pl-3 dark:border-dark-600" }, pr = { class: "text-xs" }, gr = { class: "text-xs" }, yr = /* @__PURE__ */ ft({
  __name: "ProviderCard",
  props: {
    provider: {},
    enabled: { type: Boolean },
    availableTypes: {}
  },
  emits: ["toggleField", "toggleType", "edit", "delete"],
  setup(u, { emit: t }) {
    const _ = {
      easypay: "admin.settings.payment.providerEasypay",
      alipay: "admin.settings.payment.providerAlipay",
      wxpay: "admin.settings.payment.providerWxpay",
      stripe: "admin.settings.payment.providerStripe",
      airwallex: "admin.settings.payment.providerAirwallex"
    }, x = u, U = t, { t: L } = St(), z = W(() => L(_[x.provider.provider_key] || x.provider.provider_key)), E = W(() => x.provider.payment_mode === Ja ? L("admin.settings.payment.modeQRCode") : x.provider.payment_mode === As ? L("admin.settings.payment.modePopup") : x.provider.payment_mode === Ts ? L("admin.settings.payment.modeRedirect") : "");
    function A(C) {
      return Array.isArray(x.provider.supported_types) && x.provider.supported_types.includes(C);
    }
    return (C, M) => (r(), d("div", {
      class: ce([
        "group relative rounded-lg border transition-all",
        u.enabled ? "border-gray-200 dark:border-dark-600" : "border-gray-200 bg-gray-50 opacity-50 dark:border-dark-700 dark:bg-dark-800/50"
      ]),
      title: u.enabled ? void 0 : a(L)("admin.settings.payment.typeDisabled") + " — " + a(L)("admin.settings.payment.enableTypesFirst")
    }, [
      e("div", {
        class: ce([
          "flex items-center justify-between px-4 py-2.5",
          !u.enabled && "pointer-events-none"
        ])
      }, [
        e("div", ir, [
          e("div", {
            class: ce([
              "rounded-md p-1.5",
              u.provider.enabled && u.enabled ? "bg-zo-signal-100 dark:bg-zo-signal-900/30" : "bg-gray-100 dark:bg-dark-700"
            ])
          }, [
            v(Ae, {
              name: "server",
              size: "sm",
              class: ce(u.provider.enabled && u.enabled ? "text-zo-signal-600 dark:text-zo-signal-400" : "text-gray-400")
            }, null, 8, ["class"])
          ], 2),
          e("span", or, n(u.provider.name), 1),
          e("span", lr, n(z.value), 1),
          u.provider.payment_mode ? (r(), d("span", rr, "· " + n(E.value), 1)) : T("", !0),
          u.enabled && u.availableTypes.length ? (r(), d("span", dr, "|")) : T("", !0),
          u.enabled ? (r(), d("div", cr, [
            (r(!0), d(K, null, ee(u.availableTypes, (F) => (r(), d("button", {
              key: F.value,
              type: "button",
              onClick: (G) => U("toggleType", F.value),
              class: ce([
                "rounded px-2 py-0.5 text-xs font-medium transition-all",
                A(F.value) ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-400 dark:bg-dark-700 dark:text-gray-500"
              ])
            }, n(F.label), 11, ur))), 128))
          ])) : T("", !0)
        ]),
        e("div", mr, [
          v(Aa, {
            label: a(L)("common.enabled"),
            checked: u.provider.enabled,
            onToggle: M[0] || (M[0] = (F) => U("toggleField", "enabled"))
          }, null, 8, ["label", "checked"]),
          v(Aa, {
            label: a(L)("admin.settings.payment.refundEnabled"),
            checked: u.provider.refund_enabled,
            onToggle: M[1] || (M[1] = (F) => U("toggleField", "refund_enabled"))
          }, null, 8, ["label", "checked"]),
          u.provider.refund_enabled ? (r(), ct(Aa, {
            key: 0,
            label: a(L)("admin.settings.payment.allowUserRefund"),
            checked: u.provider.allow_user_refund,
            onToggle: M[2] || (M[2] = (F) => U("toggleField", "allow_user_refund"))
          }, null, 8, ["label", "checked"])) : T("", !0),
          e("div", _r, [
            e("button", {
              type: "button",
              onClick: M[3] || (M[3] = (F) => U("edit")),
              class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-dark-700 dark:hover:text-white"
            }, [
              v(Ae, {
                name: "edit",
                size: "sm"
              }),
              e("span", pr, n(a(L)("common.edit")), 1)
            ]),
            e("button", {
              type: "button",
              onClick: M[4] || (M[4] = (F) => U("delete")),
              class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
            }, [
              v(Ae, {
                name: "trash",
                size: "sm"
              }),
              e("span", gr, n(a(L)("common.delete")), 1)
            ])
          ])
        ])
      ], 2)
    ], 10, sr));
  }
}), br = { class: "card" }, hr = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, xr = { class: "flex items-center justify-between" }, fr = { class: "text-base font-semibold text-gray-900 dark:text-white" }, kr = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, vr = { class: "flex items-center gap-2" }, wr = ["disabled", "title"], Cr = ["disabled"], Sr = { class: "p-4" }, Ar = {
  key: 0,
  class: "flex items-center justify-center py-6"
}, Tr = { class: "min-w-0 flex-1" }, Ur = {
  key: 2,
  class: "py-6 text-center"
}, Er = { class: "text-sm text-gray-500 dark:text-gray-400" }, Vr = /* @__PURE__ */ ft({
  __name: "PaymentProviderList",
  props: {
    providers: {},
    loading: { type: Boolean },
    canCreate: { type: Boolean },
    enabledPaymentTypes: {},
    allPaymentTypes: {},
    redirectLabel: {}
  },
  emits: ["refresh", "create", "edit", "delete", "toggleField", "toggleType", "reorder"],
  setup(u, { emit: t }) {
    const _ = u, x = t, { t: U } = St(), L = O([]);
    Fn(() => _.providers, (C) => {
      L.value = [...C];
    }, { immediate: !0 });
    function z() {
      const C = L.value.map((M, F) => ({
        id: M.id,
        sort_order: F
      }));
      x("reorder", C);
    }
    function E(C) {
      return _.enabledPaymentTypes.includes(C);
    }
    function A(C) {
      return Wi(C, _.allPaymentTypes, _.redirectLabel).map(
        (M) => M.label === M.value ? { ...M, label: U(`payment.methods.${M.value}`, M.value) } : M
      );
    }
    return (C, M) => (r(), d("div", br, [
      e("div", hr, [
        e("div", xr, [
          e("div", null, [
            e("h2", fr, n(a(U)("admin.settings.payment.providerManagement")), 1),
            e("p", kr, n(a(U)("admin.settings.payment.providerManagementDesc")), 1)
          ]),
          e("div", vr, [
            e("button", {
              type: "button",
              onClick: M[0] || (M[0] = (F) => x("refresh")),
              disabled: u.loading,
              class: "btn btn-secondary btn-sm",
              title: a(U)("common.refresh")
            }, [
              v(Ae, {
                name: "refresh",
                size: "sm",
                class: ce(u.loading ? "animate-spin" : "")
              }, null, 8, ["class"])
            ], 8, wr),
            e("button", {
              type: "button",
              onClick: M[1] || (M[1] = (F) => x("create")),
              disabled: !u.canCreate,
              class: ce(u.canCreate ? "btn btn-primary btn-sm" : "btn btn-secondary btn-sm cursor-not-allowed opacity-50")
            }, n(a(U)("admin.settings.payment.createProvider")), 11, Cr)
          ])
        ])
      ]),
      e("div", Sr, [
        u.loading && !u.providers.length ? (r(), d("div", Ar, [...M[4] || (M[4] = [
          e("div", { class: "h-5 w-5 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }, null, -1)
        ])])) : T("", !0),
        u.providers.length ? (r(), ct(a(ql), {
          key: 1,
          modelValue: L.value,
          "onUpdate:modelValue": M[2] || (M[2] = (F) => L.value = F),
          animation: 200,
          handle: ".drag-handle",
          class: "space-y-3",
          onEnd: z
        }, {
          default: Re(() => [
            (r(!0), d(K, null, ee(L.value, (F) => (r(), d("div", {
              key: F.id,
              class: "flex items-start gap-2"
            }, [
              M[5] || (M[5] = e("div", { class: "drag-handle mt-3 flex cursor-grab items-center text-gray-300 hover:text-gray-500 active:cursor-grabbing dark:text-dark-600 dark:hover:text-dark-400" }, [
                e("svg", {
                  class: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" })
                ])
              ], -1)),
              e("div", Tr, [
                v(yr, {
                  provider: F,
                  enabled: E(F.provider_key),
                  "available-types": A(F.provider_key),
                  onToggleField: (G) => x("toggleField", F, G),
                  onToggleType: (G) => x("toggleType", F, G),
                  onEdit: (G) => x("edit", F),
                  onDelete: (G) => x("delete", F)
                }, null, 8, ["provider", "enabled", "available-types", "onToggleField", "onToggleType", "onEdit", "onDelete"])
              ])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : u.loading ? T("", !0) : (r(), d("div", Ur, [
          e("p", Er, n(u.canCreate ? a(U)("admin.settings.payment.noProviders") : a(U)("admin.settings.payment.enableTypesFirst")), 1),
          u.canCreate ? (r(), d("button", {
            key: 0,
            type: "button",
            onClick: M[3] || (M[3] = (F) => x("create")),
            class: "btn btn-primary btn-sm mt-2"
          }, n(a(U)("admin.settings.payment.createProvider")), 1)) : T("", !0)
        ]))
      ])
    ]));
  }
}), Pr = { class: "grid grid-cols-2 gap-4" }, $r = { class: "input-label" }, Rr = { class: "input-label" }, Lr = { class: "flex flex-wrap items-center gap-x-5 gap-y-2" }, Mr = {
  key: 1,
  class: "flex items-center gap-2"
}, Dr = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Or = { class: "flex gap-1.5" }, Ir = ["onClick"], zr = {
  key: 2,
  class: "flex items-center gap-2"
}, Nr = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Fr = { class: "flex flex-wrap gap-1.5" }, Hr = ["onClick"], Br = {
  key: 0,
  class: "space-y-3 rounded-lg border border-gray-100 p-3 dark:border-dark-700"
}, jr = { class: "flex items-center justify-between gap-3" }, qr = { class: "text-sm font-medium text-gray-900 dark:text-white" }, Kr = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Wr = {
  key: 0,
  class: "space-y-2"
}, Gr = { class: "text-xs text-gray-500 dark:text-gray-400" }, Yr = ["onUpdate:modelValue"], Qr = { class: "text-xs text-gray-500 dark:text-gray-400" }, Xr = ["onUpdate:modelValue"], Jr = { class: "text-xs text-gray-500 dark:text-gray-400" }, Zr = ["onUpdate:modelValue", "placeholder"], ed = ["onClick"], td = { class: "border-t border-gray-200 pt-4 dark:border-dark-700" }, ad = { class: "mb-3 flex items-center gap-2" }, nd = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, sd = ["aria-label", "title"], id = { class: "space-y-3" }, od = { class: "font-medium text-white" }, ld = { class: "font-medium text-white" }, rd = { class: "text-gray-300" }, dd = { class: "text-gray-300" }, cd = { class: "text-gray-300" }, ud = {
  key: 0,
  class: "border-t border-white/10 pt-2 text-[11px] text-gray-300"
}, md = {
  key: 0,
  class: "mb-3 text-xs text-gray-500 dark:text-gray-400"
}, _d = { class: "space-y-3" }, pd = { class: "input-label" }, gd = {
  key: 0,
  class: "text-xs text-gray-400"
}, yd = {
  key: 1,
  class: "text-red-500"
}, bd = ["onUpdate:modelValue", "placeholder"], hd = {
  key: 1,
  class: "relative"
}, xd = ["type", "onUpdate:modelValue", "placeholder"], fd = ["onClick"], kd = {
  key: 0,
  class: "h-4 w-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, vd = {
  key: 1,
  class: "h-4 w-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, wd = ["onUpdate:modelValue", "placeholder"], Cd = {
  key: 4,
  class: "mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400"
}, Sd = {
  key: 1,
  class: "mt-4 space-y-3"
}, Ad = { key: 0 }, Td = { class: "input-label" }, Ud = { class: "flex" }, Ed = ["placeholder"], Vd = { class: "inline-flex items-center whitespace-nowrap rounded-r-lg border border-gray-300 bg-gray-50 px-3 text-xs text-gray-500 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400" }, Pd = { key: 1 }, $d = { class: "input-label" }, Rd = { class: "flex" }, Ld = ["placeholder"], Md = { class: "inline-flex items-center whitespace-nowrap rounded-r-lg border border-gray-300 bg-gray-50 px-3 text-xs text-gray-500 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400" }, Dd = {
  key: 2,
  class: "mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800/50 dark:bg-blue-900/20"
}, Od = { class: "text-xs text-blue-700 dark:text-blue-300" }, Id = { class: "mt-1 block break-all rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900/40 dark:text-blue-200" }, zd = {
  key: 0,
  class: "mt-2 text-xs leading-relaxed text-blue-700 dark:text-blue-300"
}, Nd = {
  key: 1,
  class: "border-t border-gray-200 pt-4 dark:border-dark-700"
}, Fd = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Hd = { class: "mt-3 space-y-3" }, Bd = { class: "mb-2 text-xs font-medium text-gray-700 dark:text-gray-300" }, jd = { class: "grid grid-cols-3 gap-3" }, qd = { class: "text-xs text-gray-500 dark:text-gray-400" }, Kd = ["value", "onInput", "placeholder"], Wd = { class: "text-xs text-gray-500 dark:text-gray-400" }, Gd = ["value", "onInput", "placeholder"], Yd = { class: "text-xs text-gray-500 dark:text-gray-400" }, Qd = ["value", "onInput", "placeholder"], Xd = { class: "text-xs text-gray-400 dark:text-gray-500" }, Jd = { class: "flex justify-end gap-3" }, Zd = ["disabled"], ec = /* @__PURE__ */ ft({
  __name: "PaymentProviderDialog",
  props: {
    show: { type: Boolean },
    saving: { type: Boolean },
    editing: {},
    allKeyOptions: {},
    enabledKeyOptions: {},
    allPaymentTypes: {},
    redirectLabel: {}
  },
  emits: ["close", "save"],
  setup(u, { expose: t, emit: _ }) {
    function x(R) {
      return R === "easypay" ? Ja : "";
    }
    function U(R) {
      return R === "easypay" || R === "alipay";
    }
    function L(R, S) {
      return R === "easypay" ? S === Ja || S === As : R === "alipay" ? S === "" || S === Ts : S === "";
    }
    const z = u, E = _, { t: A } = St(), C = He({
      name: "",
      provider_key: "easypay",
      supported_types: [],
      enabled: !0,
      payment_mode: Ja,
      refund_enabled: !1,
      allow_user_refund: !1
    }), M = He({}), F = He({}), G = O(""), ie = O(""), ye = O(!1), le = He({}), re = He([]), me = typeof window < "u" ? window.location.origin : "", we = {
      stripe: "admin.settings.payment.stripeWebhookHint",
      airwallex: "admin.settings.payment.airwallexWebhookHint"
    }, ne = W(() => {
      const R = On[C.provider_key];
      return we[C.provider_key] && R ? me + R : "";
    }), Y = W(
      () => we[C.provider_key] || "admin.settings.payment.stripeWebhookHint"
    ), J = W(() => us[C.provider_key] || null), te = W(() => U(C.provider_key)), Z = W(() => C.provider_key === "alipay" ? [
      { value: "", label: A("admin.settings.payment.modeQRCode") },
      { value: Ts, label: A("admin.settings.payment.modeRedirect") }
    ] : [
      { value: Ja, label: A("admin.settings.payment.modeQRCode") },
      { value: As, label: A("admin.settings.payment.modePopup") }
    ]), de = W(() => {
      const R = Wi(C.provider_key, z.allPaymentTypes, z.redirectLabel);
      if (C.provider_key === "easypay")
        for (const S of Ie())
          R.some((h) => h.value === S.type) || R.push({
            value: S.type,
            label: S.displayName || S.type
          });
      return R.map(
        (S) => S.label === S.value ? { ...S, label: A(`payment.methods.${S.value}`, S.value) } : S
      );
    }), Ce = W(() => (Vn[C.provider_key] || []).map((S) => ({
      ...S,
      label: S.label || A(`admin.settings.payment.field_${S.key}`)
    }))), ge = W(() => C.provider_key === "alipay" ? {
      summary: A("admin.settings.payment.alipayGuideSummary"),
      items: [
        {
          title: A("admin.settings.payment.alipayGuideFaceToFaceTitle"),
          open: A("admin.settings.payment.alipayGuideFaceToFaceOpen"),
          call: A("admin.settings.payment.alipayGuideFaceToFaceCall"),
          fallback: A("admin.settings.payment.alipayGuideFaceToFaceFallback")
        },
        {
          title: A("admin.settings.payment.alipayGuidePagePayTitle"),
          open: A("admin.settings.payment.alipayGuidePagePayOpen"),
          call: A("admin.settings.payment.alipayGuidePagePayCall"),
          fallback: A("admin.settings.payment.alipayGuidePagePayFallback")
        },
        {
          title: A("admin.settings.payment.alipayGuideWapTitle"),
          open: A("admin.settings.payment.alipayGuideWapOpen"),
          call: A("admin.settings.payment.alipayGuideWapCall"),
          fallback: A("admin.settings.payment.alipayGuideWapFallback")
        }
      ]
    } : C.provider_key === "wxpay" ? {
      summary: A("admin.settings.payment.wxpayGuideSummary"),
      note: A("admin.settings.payment.wxpayGuideNote"),
      items: [
        {
          title: A("admin.settings.payment.wxpayGuideNativeTitle"),
          open: A("admin.settings.payment.wxpayGuideNativeOpen"),
          call: A("admin.settings.payment.wxpayGuideNativeCall"),
          fallback: A("admin.settings.payment.wxpayGuideNativeFallback")
        },
        {
          title: A("admin.settings.payment.wxpayGuideJsapiTitle"),
          open: A("admin.settings.payment.wxpayGuideJsapiOpen"),
          call: A("admin.settings.payment.wxpayGuideJsapiCall"),
          fallback: A("admin.settings.payment.wxpayGuideJsapiFallback")
        },
        {
          title: A("admin.settings.payment.wxpayGuideH5Title"),
          open: A("admin.settings.payment.wxpayGuideH5Open"),
          call: A("admin.settings.payment.wxpayGuideH5Call"),
          fallback: A("admin.settings.payment.wxpayGuideH5Fallback")
        }
      ]
    } : C.provider_key === "airwallex" ? {
      summary: A("admin.settings.payment.airwallexGuideSummary"),
      note: A("admin.settings.payment.airwallexGuideNote"),
      items: []
    } : null), pe = W(() => C.provider_key === "stripe" ? [{ value: "stripe", label: "Stripe" }] : C.supported_types.filter((S) => S !== "easypay").map((S) => z.allPaymentTypes.find((y) => y.value === S) || { value: S, label: S }));
    function Ve(R) {
      return C.supported_types.includes(R);
    }
    function Pe(R) {
      C.supported_types.includes(R) ? C.supported_types = C.supported_types.filter((S) => S !== R) : C.supported_types = [...C.supported_types, R];
    }
    function Ie() {
      return re.map((R) => ({
        type: $e(R.type),
        upstreamType: $e(R.upstreamType),
        displayName: R.displayName.trim()
      })).filter((R) => R.type || R.upstreamType || R.displayName);
    }
    function $e(R) {
      return R.trim().toLowerCase();
    }
    function Be() {
      re.push({ type: "", upstreamType: "", displayName: "" });
    }
    function Oe(R) {
      re.splice(R, 1);
    }
    function Fe() {
      C.supported_types = [...Xa[C.provider_key] || []], C.payment_mode = x(C.provider_key), at(), Ue();
    }
    function at() {
      Object.keys(M).forEach((R) => delete M[R]), Object.keys(F).forEach((R) => delete F[R]), Object.keys(le).forEach((R) => delete le[R]), G.value = "", ie.value = "", ye.value = !1, re.splice(0, re.length);
    }
    function Ue() {
      for (const R of Vn[C.provider_key] || [])
        R.defaultValue && !M[R.key] && (M[R.key] = R.defaultValue);
    }
    function $(R, S) {
      var y;
      const h = (y = F[R]) == null ? void 0 : y[S];
      return h && h > 0 ? String(h) : "";
    }
    function X(R) {
      const S = F[R];
      return S ? S.singleMin > 0 || S.singleMax > 0 || S.dailyLimit > 0 : !1;
    }
    function I(R) {
      return X(R) ? A("admin.settings.payment.limitsNoLimit") : A("admin.settings.payment.limitsUseGlobal");
    }
    function he(R, S, h) {
      F[R] || (F[R] = {});
      const y = Number(h);
      if (h === "" || isNaN(y)) {
        delete F[R][S];
        return;
      }
      y <= 0 || (F[R][S] = y);
    }
    function Q() {
      const R = {};
      for (const [S, h] of Object.entries(F)) {
        const y = {};
        for (const [w, ke] of Object.entries(h))
          ke > 0 && (y[w] = ke);
        Object.keys(y).length > 0 && (R[S] = y);
      }
      return Object.keys(R).length > 0 ? JSON.stringify(R) : "";
    }
    function _e() {
      if (!C.name.trim()) {
        j(A("admin.settings.payment.validationNameRequired"));
        return;
      }
      if (C.provider_key === "easypay") {
        const y = H();
        if (y) {
          j(y);
          return;
        }
        De();
      }
      for (const y of Vn[C.provider_key] || []) {
        if (y.optional || z.editing && y.sensitive) continue;
        if (!(M[y.key] || "").trim()) {
          const ke = y.label || A(`admin.settings.payment.field_${y.key}`);
          j(A("admin.settings.payment.validationFieldRequired", { field: ke }));
          return;
        }
      }
      const R = new Set(
        (Vn[C.provider_key] || []).filter((y) => y.clearable).map((y) => y.key)
      ), S = {};
      for (const [y, w] of Object.entries(M)) {
        if (!w || !w.trim()) {
          R.has(y) && (S[y] = "");
          continue;
        }
        S[y] = w;
      }
      C.provider_key === "easypay" && (S.customMethods = nr(Ie()));
      const h = us[C.provider_key];
      if (h) {
        const y = G.value.trim() || me, w = ie.value.trim() || me;
        G.value = y, ie.value = w, h.notifyUrl && (S.notifyUrl = y + h.notifyUrl), h.returnUrl && (S.returnUrl = w + h.returnUrl);
      }
      E("save", {
        provider_key: C.provider_key,
        name: C.name,
        supported_types: C.supported_types,
        enabled: C.enabled,
        payment_mode: te.value ? C.payment_mode : "",
        refund_enabled: C.refund_enabled,
        allow_user_refund: C.refund_enabled ? C.allow_user_refund : !1,
        config: S,
        limits: Q()
      });
    }
    function De() {
      if (C.provider_key !== "easypay") return [];
      const R = new Set(Xa.easypay || []), S = [], h = /* @__PURE__ */ new Set();
      for (const y of Ie())
        !y.type || !y.upstreamType || h.has(y.type) || (h.add(y.type), S.push(y.type));
      C.supported_types = C.supported_types.map((y) => $e(y)).filter((y) => R.has(y) || S.includes(y));
      for (const y of S)
        C.supported_types.includes(y) || C.supported_types.push(y);
      return S;
    }
    function H() {
      const R = /* @__PURE__ */ new Set();
      for (const S of Ie())
        if (S.type || S.upstreamType || S.displayName) {
          if (!S.type || !S.upstreamType)
            return A("admin.settings.payment.validationEasyPayCustomMethodRequired");
          if (!/^[a-z0-9_-]+$/.test(S.type))
            return A("admin.settings.payment.validationEasyPayCustomMethodTypeInvalid");
          if (!/^[a-z0-9_.-]+$/.test(S.upstreamType))
            return A("admin.settings.payment.validationEasyPayCustomMethodUpstreamTypeInvalid");
          if ((Xa.easypay || []).includes(S.type))
            return A("admin.settings.payment.validationEasyPayCustomMethodReserved");
          if (S.type.startsWith("alipay") || S.type.startsWith("wxpay"))
            return A("admin.settings.payment.validationEasyPayCustomMethodPrefixReserved");
          if (R.has(S.type))
            return A("admin.settings.payment.validationEasyPayCustomMethodDuplicate");
          R.add(S.type);
        }
      return null;
    }
    function j(R) {
      import("./index-BjQDVt7W.js").then((S) => S.useAppStore().showError(R));
    }
    function fe(R) {
      C.name = "", C.provider_key = R, C.supported_types = [...Xa[R] || []], C.enabled = !0, C.payment_mode = x(R), C.refund_enabled = !1, C.allow_user_refund = !1, at(), Ue();
    }
    function xe(R) {
      if (C.name = R.name, C.provider_key = R.provider_key, C.supported_types = Array.isArray(R.supported_types) ? [...R.supported_types] : [], C.enabled = R.enabled, C.payment_mode = L(R.provider_key, R.payment_mode || "") ? R.payment_mode || "" : x(R.provider_key), C.refund_enabled = R.refund_enabled, C.allow_user_refund = R.allow_user_refund, at(), R.config) {
        for (const [h, y] of Object.entries(R.config))
          if (!(h === "notifyUrl" || h === "returnUrl")) {
            if (h === "customMethods" && R.provider_key === "easypay") {
              re.push(...ar(y));
              continue;
            }
            M[h] = y;
          }
        const S = us[R.provider_key];
        S != null && S.notifyUrl && R.config.notifyUrl && (G.value = gi(R.config.notifyUrl, S.notifyUrl)), S != null && S.returnUrl && R.config.returnUrl && (ie.value = gi(R.config.returnUrl, S.returnUrl));
      }
      if (Ue(), R.limits)
        try {
          const S = JSON.parse(R.limits);
          for (const [h, y] of Object.entries(S))
            F[h] = { ...y };
          ye.value = Object.keys(F).length > 0;
        } catch {
        }
    }
    return t({ reset: fe, loadProvider: xe }), (R, S) => (r(), ct(Kl, {
      show: u.show,
      title: u.editing ? a(A)("admin.settings.payment.editProvider") : a(A)("admin.settings.payment.createProvider"),
      width: "wide",
      onClose: S[9] || (S[9] = (h) => E("close"))
    }, {
      footer: Re(() => [
        e("div", Jd, [
          e("button", {
            type: "button",
            onClick: S[8] || (S[8] = (h) => E("close")),
            class: "btn btn-secondary"
          }, n(a(A)("common.cancel")), 1),
          e("button", {
            type: "submit",
            form: "provider-form",
            disabled: u.saving,
            class: "btn btn-primary"
          }, n(u.saving ? a(A)("common.saving") : a(A)("common.save")), 9, Zd)
        ])
      ]),
      default: Re(() => [
        e("form", {
          id: "provider-form",
          onSubmit: sa(_e, ["prevent"]),
          class: "space-y-4"
        }, [
          e("div", Pr, [
            e("div", null, [
              e("label", $r, [
                q(n(a(A)("admin.settings.payment.providerName")) + " ", 1),
                S[10] || (S[10] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              p(e("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (h) => C.name = h),
                type: "text",
                class: "input",
                required: ""
              }, null, 512), [
                [k, C.name]
              ])
            ]),
            e("div", null, [
              e("label", Rr, [
                q(n(a(A)("admin.settings.payment.providerKey")) + " ", 1),
                S[11] || (S[11] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              v(Ke, {
                modelValue: C.provider_key,
                "onUpdate:modelValue": S[1] || (S[1] = (h) => C.provider_key = h),
                options: u.editing ? u.allKeyOptions : u.enabledKeyOptions,
                disabled: !!u.editing,
                onChange: Fe
              }, null, 8, ["modelValue", "options", "disabled"])
            ])
          ]),
          e("div", Lr, [
            v(Aa, {
              label: a(A)("common.enabled"),
              checked: C.enabled,
              onToggle: S[2] || (S[2] = (h) => C.enabled = !C.enabled)
            }, null, 8, ["label", "checked"]),
            v(Aa, {
              label: a(A)("admin.settings.payment.refundEnabled"),
              checked: C.refund_enabled,
              onToggle: S[3] || (S[3] = (h) => {
                C.refund_enabled = !C.refund_enabled, C.refund_enabled || (C.allow_user_refund = !1);
              })
            }, null, 8, ["label", "checked"]),
            C.refund_enabled ? (r(), ct(Aa, {
              key: 0,
              label: a(A)("admin.settings.payment.allowUserRefund"),
              checked: C.allow_user_refund,
              onToggle: S[4] || (S[4] = (h) => C.allow_user_refund = !C.allow_user_refund)
            }, null, 8, ["label", "checked"])) : T("", !0),
            te.value ? (r(), d("div", Mr, [
              e("span", Dr, n(a(A)("admin.settings.payment.paymentMode")), 1),
              e("div", Or, [
                (r(!0), d(K, null, ee(Z.value, (h) => (r(), d("button", {
                  key: h.value,
                  type: "button",
                  onClick: (y) => C.payment_mode = h.value,
                  class: ce([
                    "rounded-lg border px-2.5 py-1 text-xs font-medium transition-all",
                    C.payment_mode === h.value ? "border-primary-500 bg-primary-500 text-white shadow-sm" : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300 dark:hover:border-dark-500"
                  ])
                }, n(h.label), 11, Ir))), 128))
              ])
            ])) : T("", !0),
            de.value.length > 1 ? (r(), d("div", zr, [
              e("span", Nr, n(a(A)("admin.settings.payment.supportedTypes")), 1),
              e("div", Fr, [
                (r(!0), d(K, null, ee(de.value, (h) => (r(), d("button", {
                  key: h.value,
                  type: "button",
                  onClick: (y) => Pe(h.value),
                  class: ce([
                    "rounded-lg border px-2.5 py-1 text-xs font-medium transition-all",
                    Ve(h.value) ? "border-primary-500 bg-primary-500 text-white shadow-sm" : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300 dark:hover:border-dark-500"
                  ])
                }, n(h.label), 11, Hr))), 128))
              ])
            ])) : T("", !0)
          ]),
          C.provider_key === "easypay" ? (r(), d("div", Br, [
            e("div", jr, [
              e("div", null, [
                e("h5", qr, n(a(A)("admin.settings.payment.easypayCustomMethods")), 1),
                e("p", Kr, n(a(A)("admin.settings.payment.easypayCustomMethodsHint")), 1)
              ]),
              e("button", {
                type: "button",
                class: "btn btn-secondary btn-sm",
                onClick: Be
              }, n(a(A)("admin.settings.payment.addCustomMethod")), 1)
            ]),
            re.length ? (r(), d("div", Wr, [
              (r(!0), d(K, null, ee(re, (h, y) => (r(), d("div", {
                key: y,
                class: "grid grid-cols-[1fr_1fr_1fr_auto] items-end gap-2"
              }, [
                e("div", null, [
                  e("label", Gr, n(a(A)("admin.settings.payment.customMethodType")), 1),
                  p(e("input", {
                    "onUpdate:modelValue": (w) => h.type = w,
                    type: "text",
                    class: "input mt-0.5",
                    placeholder: "credit_card"
                  }, null, 8, Yr), [
                    [k, h.type]
                  ])
                ]),
                e("div", null, [
                  e("label", Qr, n(a(A)("admin.settings.payment.customMethodUpstreamType")), 1),
                  p(e("input", {
                    "onUpdate:modelValue": (w) => h.upstreamType = w,
                    type: "text",
                    class: "input mt-0.5",
                    placeholder: "credit_card"
                  }, null, 8, Xr), [
                    [k, h.upstreamType]
                  ])
                ]),
                e("div", null, [
                  e("label", Jr, n(a(A)("admin.settings.payment.customMethodDisplayName")), 1),
                  p(e("input", {
                    "onUpdate:modelValue": (w) => h.displayName = w,
                    type: "text",
                    class: "input mt-0.5",
                    placeholder: a(A)("admin.settings.payment.customMethodDisplayNamePlaceholder")
                  }, null, 8, Zr), [
                    [k, h.displayName]
                  ])
                ]),
                e("button", {
                  type: "button",
                  class: "rounded-lg border border-red-200 px-2.5 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-800/60 dark:text-red-300 dark:hover:bg-red-900/20",
                  onClick: (w) => Oe(y)
                }, n(a(A)("common.delete")), 9, ed)
              ]))), 128))
            ])) : T("", !0)
          ])) : T("", !0),
          e("div", td, [
            e("div", ad, [
              e("h4", nd, n(a(A)("admin.settings.payment.providerConfig")), 1),
              ge.value ? (r(), ct(Wl, {
                key: 0,
                trigger: "click",
                "width-class": "w-80"
              }, {
                trigger: Re(() => [
                  e("button", {
                    type: "button",
                    class: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-[11px] font-semibold text-gray-400 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-dark-500 dark:text-gray-500 dark:hover:border-primary-400 dark:hover:text-primary-400",
                    "aria-label": a(A)("admin.settings.payment.paymentGuideTrigger"),
                    title: a(A)("admin.settings.payment.paymentGuideTrigger")
                  }, " ? ", 8, sd)
                ]),
                default: Re(() => [
                  e("div", id, [
                    e("p", od, n(ge.value.summary), 1),
                    (r(!0), d(K, null, ee(ge.value.items, (h) => (r(), d("div", {
                      key: h.title,
                      class: "space-y-1.5 border-t border-white/10 pt-2 first:border-t-0 first:pt-0"
                    }, [
                      e("p", ld, n(h.title), 1),
                      e("p", null, [
                        e("span", rd, n(a(A)("admin.settings.payment.guideOpenLabel")), 1),
                        q(n(h.open), 1)
                      ]),
                      e("p", null, [
                        e("span", dd, n(a(A)("admin.settings.payment.guideCallLabel")), 1),
                        q(n(h.call), 1)
                      ]),
                      e("p", null, [
                        e("span", cd, n(a(A)("admin.settings.payment.guideFallbackLabel")), 1),
                        q(n(h.fallback), 1)
                      ])
                    ]))), 128)),
                    ge.value.note ? (r(), d("p", ud, n(ge.value.note), 1)) : T("", !0)
                  ])
                ]),
                _: 1
              })) : T("", !0)
            ]),
            ge.value ? (r(), d("p", md, n(ge.value.summary), 1)) : T("", !0),
            e("div", _d, [
              (r(!0), d(K, null, ee(Ce.value, (h) => {
                var y;
                return r(), d("div", {
                  key: h.key
                }, [
                  e("label", pd, [
                    q(n(h.label) + " ", 1),
                    h.optional ? (r(), d("span", gd, "(" + n(a(A)("common.optional")) + ")", 1)) : (r(), d("span", yd, " *"))
                  ]),
                  h.sensitive && h.key.toLowerCase().includes("key") && h.key !== "pkey" ? p((r(), d("textarea", {
                    key: 0,
                    "onUpdate:modelValue": (w) => M[h.key] = w,
                    rows: "3",
                    class: "input font-mono text-xs",
                    autocomplete: "new-password",
                    "data-1p-ignore": "",
                    "data-lpignore": "true",
                    "data-bwignore": "true",
                    spellcheck: "false",
                    placeholder: u.editing ? a(A)("admin.accounts.leaveEmptyToKeep") : ""
                  }, null, 8, bd)), [
                    [k, M[h.key]]
                  ]) : h.sensitive ? (r(), d("div", hd, [
                    p(e("input", {
                      type: le[h.key] ? "text" : "password",
                      "onUpdate:modelValue": (w) => M[h.key] = w,
                      class: "input pr-10",
                      autocomplete: "new-password",
                      "data-1p-ignore": "",
                      "data-lpignore": "true",
                      "data-bwignore": "true",
                      spellcheck: "false",
                      placeholder: u.editing ? a(A)("admin.accounts.leaveEmptyToKeep") : h.defaultValue || ""
                    }, null, 8, xd), [
                      [ji, M[h.key]]
                    ]),
                    e("button", {
                      type: "button",
                      onClick: (w) => le[h.key] = !le[h.key],
                      class: "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    }, [
                      le[h.key] ? (r(), d("svg", kd, [...S[12] || (S[12] = [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        }, null, -1)
                      ])])) : (r(), d("svg", vd, [...S[13] || (S[13] = [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }, null, -1),
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        }, null, -1)
                      ])]))
                    ], 8, fd)
                  ])) : (y = h.options) != null && y.length ? (r(), ct(Ke, {
                    key: 2,
                    modelValue: M[h.key],
                    "onUpdate:modelValue": (w) => M[h.key] = w,
                    options: h.options,
                    searchable: h.options.length > 5
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "searchable"])) : p((r(), d("input", {
                    key: 3,
                    type: "text",
                    "onUpdate:modelValue": (w) => M[h.key] = w,
                    class: "input",
                    placeholder: h.defaultValue || ""
                  }, null, 8, wd)), [
                    [k, M[h.key]]
                  ]),
                  h.hintKey ? (r(), d("p", Cd, n(a(A)(h.hintKey)), 1)) : T("", !0)
                ]);
              }), 128))
            ]),
            J.value ? (r(), d("div", Sd, [
              J.value.notifyUrl ? (r(), d("div", Ad, [
                e("label", Td, [
                  q(n(a(A)("admin.settings.payment.field_notifyUrl")) + " ", 1),
                  S[14] || (S[14] = e("span", { class: "text-red-500" }, "*", -1))
                ]),
                e("div", Ud, [
                  p(e("input", {
                    "onUpdate:modelValue": S[5] || (S[5] = (h) => G.value = h),
                    type: "text",
                    class: "input min-w-0 flex-1 !rounded-r-none !border-r-0",
                    placeholder: a(me)
                  }, null, 8, Ed), [
                    [k, G.value]
                  ]),
                  e("span", Vd, n(J.value.notifyUrl), 1)
                ])
              ])) : T("", !0),
              J.value.returnUrl ? (r(), d("div", Pd, [
                e("label", $d, [
                  q(n(a(A)("admin.settings.payment.field_returnUrl")) + " ", 1),
                  S[15] || (S[15] = e("span", { class: "text-red-500" }, "*", -1))
                ]),
                e("div", Rd, [
                  p(e("input", {
                    "onUpdate:modelValue": S[6] || (S[6] = (h) => ie.value = h),
                    type: "text",
                    class: "input min-w-0 flex-1 !rounded-r-none !border-r-0",
                    placeholder: a(me)
                  }, null, 8, Ld), [
                    [k, ie.value]
                  ]),
                  e("span", Md, n(J.value.returnUrl), 1)
                ])
              ])) : T("", !0)
            ])) : T("", !0),
            ne.value ? (r(), d("div", Dd, [
              e("p", Od, n(a(A)(Y.value)), 1),
              e("code", Id, n(ne.value), 1),
              C.provider_key === "stripe" ? (r(), d("p", zd, n(a(A)("admin.settings.payment.stripeWebhookApiVersionHint", { version: a(er) })), 1)) : T("", !0)
            ])) : T("", !0)
          ]),
          pe.value.length ? (r(), d("div", Nd, [
            e("button", {
              type: "button",
              onClick: S[7] || (S[7] = (h) => ye.value = !ye.value),
              class: "flex w-full items-center justify-between"
            }, [
              e("h4", Fd, n(a(A)("admin.settings.payment.limitsTitle")), 1),
              (r(), d("svg", {
                class: ce(["h-4 w-4 text-gray-400 transition-transform", ye.value && "rotate-180"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...S[16] || (S[16] = [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 9l-7 7-7-7"
                }, null, -1)
              ])], 2))
            ]),
            p(e("div", Hd, [
              (r(!0), d(K, null, ee(pe.value, (h) => (r(), d("div", {
                key: h.value,
                class: "rounded-lg border border-gray-100 p-3 dark:border-dark-700"
              }, [
                e("p", Bd, n(h.label), 1),
                e("div", jd, [
                  e("div", null, [
                    e("label", qd, n(a(A)("admin.settings.payment.limitSingleMin")), 1),
                    e("input", {
                      type: "number",
                      value: $(h.value, "singleMin"),
                      onInput: (y) => he(h.value, "singleMin", y.target.value),
                      class: "input mt-0.5",
                      min: "1",
                      step: "0.01",
                      placeholder: I(h.value)
                    }, null, 40, Kd)
                  ]),
                  e("div", null, [
                    e("label", Wd, n(a(A)("admin.settings.payment.limitSingleMax")), 1),
                    e("input", {
                      type: "number",
                      value: $(h.value, "singleMax"),
                      onInput: (y) => he(h.value, "singleMax", y.target.value),
                      class: "input mt-0.5",
                      min: "1",
                      step: "0.01",
                      placeholder: I(h.value)
                    }, null, 40, Gd)
                  ]),
                  e("div", null, [
                    e("label", Yd, n(a(A)("admin.settings.payment.limitDaily")), 1),
                    e("input", {
                      type: "number",
                      value: $(h.value, "dailyLimit"),
                      onInput: (y) => he(h.value, "dailyLimit", y.target.value),
                      class: "input mt-0.5",
                      min: "1",
                      step: "0.01",
                      placeholder: I(h.value)
                    }, null, 40, Qd)
                  ])
                ])
              ]))), 128)),
              e("p", Xd, n(a(A)("admin.settings.payment.limitsHint")), 1)
            ], 512), [
              [rt, ye.value]
            ])
          ])) : T("", !0)
        ], 32)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
});
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
function yi(u, t) {
  (t == null || t > u.length) && (t = u.length);
  for (var _ = 0, x = Array(t); _ < t; _++) x[_] = u[_];
  return x;
}
function tc(u) {
  if (Array.isArray(u)) return u;
}
function ac(u, t) {
  var _ = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (_ != null) {
    var x, U, L, z, E = [], A = !0, C = !1;
    try {
      if (L = (_ = _.call(u)).next, t !== 0) for (; !(A = (x = L.call(_)).done) && (E.push(x.value), E.length !== t); A = !0) ;
    } catch (M) {
      C = !0, U = M;
    } finally {
      try {
        if (!A && _.return != null && (z = _.return(), Object(z) !== z)) return;
      } finally {
        if (C) throw U;
      }
    }
    return E;
  }
}
function nc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function sc(u, t) {
  return tc(u) || ac(u, t) || ic(u, t) || nc();
}
function ic(u, t) {
  if (u) {
    if (typeof u == "string") return yi(u, t);
    var _ = {}.toString.call(u).slice(8, -1);
    return _ === "Object" && u.constructor && (_ = u.constructor.name), _ === "Map" || _ === "Set" ? Array.from(u) : _ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_) ? yi(u, t) : void 0;
  }
}
const Gi = Object.entries, bi = Object.setPrototypeOf, oc = Object.isFrozen, Yi = Object.getPrototypeOf, Qi = Object.getOwnPropertyDescriptor;
let We = Object.freeze, Je = Object.seal, Sa = Object.create, Xi = typeof Reflect < "u" && Reflect, Us = Xi.apply, Es = Xi.construct;
We || (We = function(t) {
  return t;
});
Je || (Je = function(t) {
  return t;
});
Us || (Us = function(t, _) {
  for (var x = arguments.length, U = new Array(x > 2 ? x - 2 : 0), L = 2; L < x; L++) U[L - 2] = arguments[L];
  return t.apply(_, U);
});
Es || (Es = function(t) {
  for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), U = 1; U < _; U++) x[U - 1] = arguments[U];
  return new t(...x);
});
const Nt = Me(Array.prototype.forEach), lc = Me(Array.prototype.lastIndexOf), hi = Me(Array.prototype.pop), Ka = Me(Array.prototype.push), rc = Me(Array.prototype.slice), dc = Me(Array.prototype.splice), Ta = Array.isArray, ms = Ji(Set), _s = Me(Set.prototype.add), Wa = Me(Set.prototype.has), na = Me(String.prototype.toLowerCase), ps = Me(String.prototype.toString), xi = Me(String.prototype.match), Ga = Me(String.prototype.replace), fi = Me(String.prototype.indexOf), cc = Me(String.prototype.trim), uc = Me(Number.prototype.toString), mc = Me(Boolean.prototype.toString), ki = typeof BigInt > "u" ? null : Me(BigInt.prototype.toString), vi = typeof Symbol > "u" ? null : Me(Symbol.prototype.toString), dt = Me(Object.prototype.hasOwnProperty), Ya = Me(Object.prototype.toString), Xe = Me(RegExp.prototype.test), Ft = Ji(TypeError);
function Me(u) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), U = 1; U < _; U++) x[U - 1] = arguments[U];
    return Us(u, t, x);
  };
}
function Ji(u) {
  return function() {
    for (var t = arguments.length, _ = new Array(t), x = 0; x < t; x++) _[x] = arguments[x];
    return Es(u, _);
  };
}
function Se(u, t) {
  let _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : na;
  if (bi && bi(u, null), !Ta(t)) return u;
  let x = t.length;
  for (; x--; ) {
    let U = t[x];
    if (typeof U == "string") {
      const L = _(U);
      L !== U && (oc(t) || (t[x] = L), U = L);
    }
    u[U] = !0;
  }
  return u;
}
function _c(u) {
  for (let t = 0; t < u.length; t++) dt(u, t) || (u[t] = null);
  return u;
}
function pt(u) {
  const t = Sa(null);
  for (const x of Gi(u)) {
    var _ = sc(x, 2);
    const U = _[0], L = _[1];
    dt(u, U) && (Ta(L) ? t[U] = _c(L) : L && typeof L == "object" && L.constructor === Object ? t[U] = pt(L) : t[U] = L);
  }
  return t;
}
function pc(u) {
  switch (typeof u) {
    case "string":
      return u;
    case "number":
      return uc(u);
    case "boolean":
      return mc(u);
    case "bigint":
      return ki ? ki(u) : "0";
    case "symbol":
      return vi ? vi(u) : "Symbol()";
    case "undefined":
      return Ya(u);
    case "function":
    case "object": {
      if (u === null) return Ya(u);
      const t = u, _ = ht(t, "toString");
      if (typeof _ == "function") {
        const x = _(t);
        return typeof x == "string" ? x : Ya(x);
      }
      return Ya(u);
    }
    default:
      return Ya(u);
  }
}
function ht(u, t) {
  for (; u !== null; ) {
    const x = Qi(u, t);
    if (x) {
      if (x.get) return Me(x.get);
      if (typeof x.value == "function") return Me(x.value);
    }
    u = Yi(u);
  }
  function _() {
    return null;
  }
  return _;
}
function gc(u, t) {
  for (; u !== null; ) {
    const _ = Qi(u, t);
    if (_) return _.get ? Me(_.get) : null;
    u = Yi(u);
  }
  return null;
}
function yc(u) {
  try {
    return Xe(u, ""), !0;
  } catch {
    return !1;
  }
}
const wi = We([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), gs = We([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), ys = We([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), bc = We([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), bs = We([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), hc = We([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Ci = We(["#text"]), Si = We([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), hs = We([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Ai = We([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Pn = We([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), xc = Je(/{{[\w\W]*|^[\w\W]*}}/g), fc = Je(/<%[\w\W]*|^[\w\W]*%>/g), kc = Je(/\${[\w\W]*/g), vc = Je(/^data-[\-\w.\u00B7-\uFFFF]+$/), wc = Je(/^aria-[\-\w]+$/), Ti = Je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Cc = Je(/^(?:\w+script|data):/i), Sc = Je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ac = Je(/^html$/i), Tc = Je(/^[a-z][.\w]*(-[.\w]+)+$/i), xs = Je(/<[/\w!]/g), Ui = Je(/<[/\w]/g), Uc = Je(/<\/no(script|embed|frames)/i), Ei = Je(/\/>/i), Ne = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, Ec = We(Se({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), Vc = function() {
  return typeof window > "u" ? null : window;
}, Pc = function(t, _) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let x = null;
  const U = "data-tt-policy-suffix";
  _ && _.hasAttribute(U) && (x = _.getAttribute(U));
  const L = "dompurify" + (x ? "#" + x : "");
  try {
    return t.createPolicy(L, {
      createHTML(z) {
        return z;
      },
      createScriptURL(z) {
        return z;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + L + " could not be created."), null;
  }
}, Vi = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, Yt = function(t, _, x, U) {
  return dt(t, _) && Ta(t[_]) ? Se(U.base ? pt(U.base) : {}, t[_], U.transform) : x;
}, fs = function(t, _, x) {
  const U = dt(t, _) ? t[_] : void 0;
  return U && typeof U == "object" ? pt(U) : x();
};
function Zi() {
  let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vc();
  const t = (D) => Zi(D);
  if (t.version = "3.4.17", t.removed = [], !u || !u.document || u.document.nodeType !== Ne.document || !u.Element)
    return t.isSupported = !1, t;
  let _ = u.document;
  const x = _, U = x.currentScript;
  u.DocumentFragment;
  const L = u.HTMLTemplateElement, z = u.Node, E = u.Element, A = u.NodeFilter;
  u.NamedNodeMap === void 0 && (u.NamedNodeMap || u.MozNamedAttrMap), u.HTMLFormElement;
  const C = u.DOMParser, M = u.trustedTypes, F = E.prototype, G = ht(F, "cloneNode"), ie = ht(F, "remove"), ye = ht(F, "removeAttributeNode"), le = ht(F, "nextSibling"), re = ht(F, "childNodes"), me = ht(F, "parentNode"), we = ht(F, "shadowRoot"), ne = ht(F, "attributes"), Y = z && z.prototype ? ht(z.prototype, "nodeType") : null, J = z && z.prototype ? ht(z.prototype, "nodeName") : null, te = z && z.prototype ? ht(z.prototype, "ownerDocument") : null, Z = function(c) {
    return Y ? Y(c) : c.nodeType;
  }, de = function(c) {
    return J ? J(c) : c.nodeName;
  }, Ce = gc(F, "namespaceURI"), ge = function(c) {
    return Ce ? Ce(c) : c.namespaceURI;
  };
  if (typeof L == "function") {
    const D = _.createElement("template");
    D.content && D.content.ownerDocument && (_ = D.content.ownerDocument);
  }
  let pe, Ve = "", Pe, Ie = !1, $e = 0;
  const Be = function() {
    if ($e > 0) throw Ft('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Oe = function(c) {
    Be(), $e++;
    try {
      return pe.createHTML(c);
    } finally {
      $e--;
    }
  }, Fe = function(c) {
    Be(), $e++;
    try {
      return pe.createScriptURL(c);
    } finally {
      $e--;
    }
  }, at = function() {
    return Ie || (Pe = Pc(M, U), Ie = !0), Pe;
  }, Ue = _, $ = Ue.implementation, X = Ue.createNodeIterator, I = Ue.createDocumentFragment, he = Ue.getElementsByTagName, Q = x.importNode;
  let _e = Vi();
  t.isSupported = typeof Gi == "function" && typeof me == "function" && $ && $.createHTMLDocument !== void 0;
  const De = xc, H = fc, j = kc, fe = vc, xe = wc, R = Cc, S = Sc, h = Tc;
  let y = Ti, w = null;
  const ke = Se({}, [
    ...wi,
    ...gs,
    ...ys,
    ...bs,
    ...Ci
  ]);
  let ve = null;
  const Qt = Se({}, [
    ...Si,
    ...hs,
    ...Ai,
    ...Pn
  ]);
  let st = Object.seal(Sa(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Pt = null, Va = null;
  const kt = Object.seal(Sa(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let tn = !0, ia = !0, an = !1, oa = !0, ut = !1, $t = !0, it = !1, At = !1, la = null, ra = null, Xt = !1, Rt = !1, Ge = !1, Jt = !1, nn = !0, sn = !1;
  const on = "user-content-";
  let vt = !0, Pa = !1, Lt = null, jt = {}, Tt = null;
  const ln = Se({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let rn = null;
  const dn = Se({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let cn = null;
  const $a = Se({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Zt = "http://www.w3.org/1998/Math/MathML", s = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml";
  let Mt = ot, da = !1, ca = null;
  const ua = Se({}, [
    Zt,
    s,
    ot
  ], ps), ma = We([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ra = Se({}, ma);
  const La = We(["annotation-xml"]);
  let _a = Se({}, La);
  const un = Se({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ut = null;
  const pa = ["application/xhtml+xml", "text/html"], ga = "text/html";
  let Te = null, Dt = null;
  const Ma = _.createElement("form"), ya = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, ea = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Dt && Dt === c) return;
    (!c || typeof c != "object") && (c = {}), c = pt(c), Ut = pa.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? ga : c.PARSER_MEDIA_TYPE, Te = Ut === "application/xhtml+xml" ? ps : na, w = Yt(c, "ALLOWED_TAGS", ke, { transform: Te }), ve = Yt(c, "ALLOWED_ATTR", Qt, { transform: Te }), ca = Yt(c, "ALLOWED_NAMESPACES", ua, { transform: ps }), cn = Yt(c, "ADD_URI_SAFE_ATTR", $a, {
      transform: Te,
      base: $a
    }), rn = Yt(c, "ADD_DATA_URI_TAGS", dn, {
      transform: Te,
      base: dn
    }), Tt = Yt(c, "FORBID_CONTENTS", ln, { transform: Te }), Pt = Yt(c, "FORBID_TAGS", pt({}), { transform: Te }), Va = Yt(c, "FORBID_ATTR", pt({}), { transform: Te }), jt = dt(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? pt(c.USE_PROFILES) : c.USE_PROFILES : !1, tn = c.ALLOW_ARIA_ATTR !== !1, ia = c.ALLOW_DATA_ATTR !== !1, an = c.ALLOW_UNKNOWN_PROTOCOLS || !1, oa = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ut = c.SAFE_FOR_TEMPLATES || !1, $t = c.SAFE_FOR_XML !== !1, it = c.WHOLE_DOCUMENT || !1, Rt = c.RETURN_DOM || !1, Ge = c.RETURN_DOM_FRAGMENT || !1, Jt = c.RETURN_TRUSTED_TYPE || !1, Xt = c.FORCE_BODY || !1, nn = c.SANITIZE_DOM !== !1, sn = c.SANITIZE_NAMED_PROPS || !1, vt = c.KEEP_CONTENT !== !1, Pa = c.IN_PLACE || !1, y = yc(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : Ti, Mt = typeof c.NAMESPACE == "string" ? c.NAMESPACE : ot, Ra = fs(c, "MATHML_TEXT_INTEGRATION_POINTS", () => Se({}, ma)), _a = fs(c, "HTML_INTEGRATION_POINTS", () => Se({}, La));
    const f = fs(c, "CUSTOM_ELEMENT_HANDLING", () => Sa(null));
    if (st = Sa(null), dt(f, "tagNameCheck") && ya(f.tagNameCheck) && (st.tagNameCheck = f.tagNameCheck), dt(f, "attributeNameCheck") && ya(f.attributeNameCheck) && (st.attributeNameCheck = f.attributeNameCheck), dt(f, "allowCustomizedBuiltInElements") && typeof f.allowCustomizedBuiltInElements == "boolean" && (st.allowCustomizedBuiltInElements = f.allowCustomizedBuiltInElements), Je(st), ut && (ia = !1), Ge && (Rt = !0), jt && (w = Se({}, Ci), ve = Sa(null), jt.html === !0 && (Se(w, wi), Se(ve, Si)), jt.svg === !0 && (Se(w, gs), Se(ve, hs), Se(ve, Pn)), jt.svgFilters === !0 && (Se(w, ys), Se(ve, hs), Se(ve, Pn)), jt.mathMl === !0 && (Se(w, bs), Se(ve, Ai), Se(ve, Pn))), kt.tagCheck = null, kt.attributeCheck = null, dt(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? kt.tagCheck = c.ADD_TAGS : Ta(c.ADD_TAGS) && (w === ke && (w = pt(w)), Se(w, c.ADD_TAGS, Te))), dt(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? kt.attributeCheck = c.ADD_ATTR : Ta(c.ADD_ATTR) && (ve === Qt && (ve = pt(ve)), Se(ve, c.ADD_ATTR, Te))), dt(c, "ADD_FORBID_CONTENTS") && Ta(c.ADD_FORBID_CONTENTS) && (Tt === ln && (Tt = pt(Tt)), Se(Tt, c.ADD_FORBID_CONTENTS, Te)), vt && (w["#text"] = !0), it && Se(w, [
      "html",
      "head",
      "body"
    ]), w.table && (Se(w, ["tbody"]), delete Pt.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ft('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ft('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const V = pe;
      pe = c.TRUSTED_TYPES_POLICY;
      try {
        Ve = Oe("");
      } catch (P) {
        throw pe = V, P;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (pe = void 0, Ve = "") : (pe === void 0 && (pe = at()), pe && typeof Ve == "string" && (Ve = Oe("")));
    We && We(c), Dt = c;
  }, mn = Se({}, [
    ...gs,
    ...ys,
    ...bc
  ]), _n = Se({}, [...bs, ...hc]), Ee = function(c, f, V) {
    return f.namespaceURI === ot ? c === "svg" : f.namespaceURI === Zt ? c === "svg" && (V === "annotation-xml" || Ra[V]) : !!mn[c];
  }, pn = function(c, f, V) {
    return f.namespaceURI === ot ? c === "math" : f.namespaceURI === s ? c === "math" && _a[V] : !!_n[c];
  }, gn = function(c, f, V) {
    return f.namespaceURI === s && !_a[V] || f.namespaceURI === Zt && !Ra[V] ? !1 : !_n[c] && (un[c] || !mn[c]);
  }, je = function(c) {
    const f = ge(c), V = na(de(c)), P = me(c);
    let ae, oe;
    return P && Z(P) === Ne.element ? (ae = { namespaceURI: ge(P) }, oe = na(de(P))) : (ae = { namespaceURI: Mt }, oe = "template"), ca[f] ? f === s ? Ee(V, ae, oe) : f === Zt ? pn(V, ae, oe) : f === ot ? gn(V, ae, oe) : !!(Ut === "application/xhtml+xml" && ca[f]) : !1;
  }, yt = function(c) {
    Ka(t.removed, { element: c });
    try {
      me(c).removeChild(c);
    } catch {
      if (ie(c), !me(c)) throw Ft("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, mt = function(c, f, V) {
    try {
      ye(c, f);
    } catch {
      try {
        c.removeAttribute(V);
      } catch {
      }
    }
  }, _t = function(c) {
    qt(c);
    const f = re(c);
    f && Nt(rc(f), (P) => {
      try {
        ie(P);
      } catch {
      }
    });
    const V = Z(c) === Ne.element ? ne(c) : null;
    if (V) for (let P = V.length - 1; P >= 0; --P) {
      const ae = V[P], oe = ae && ae.name;
      typeof oe == "string" && mt(c, ae, oe);
    }
  }, Et = function(c, f, V) {
    if (!V) try {
      V = f.getAttributeNode(c);
    } catch {
      V = null;
    }
    Ka(t.removed, {
      attribute: V || null,
      from: f
    });
    try {
      V ? ye(f, V) : f.removeAttribute(c);
    } catch {
      try {
        f.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (Rt || Ge) try {
        yt(f);
      } catch {
      }
      else try {
        f.setAttribute(c, "");
      } catch {
      }
  }, ta = function(c) {
    const f = ne(c);
    if (f)
      for (let V = f.length - 1; V >= 0; --V) {
        const P = f[V], ae = P && P.name;
        typeof ae != "string" || ve[Te(ae)] || mt(c, P, ae);
      }
  }, wt = function(c, f) {
    let V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const P = [c];
    for (; P.length > 0; ) {
      const ae = P.pop();
      if (f(ae) === !1) continue;
      if (V && Z(ae) === Ne.element) {
        const be = we(ae);
        Ct(be) && P.push(be);
      }
      const oe = re(ae);
      if (oe) for (let be = oe.length - 1; be >= 0; --be) P.push(oe[be]);
    }
  }, qt = function(c) {
    wt(c, (f) => {
      Z(f) === Ne.element && ta(f);
    });
  }, Da = function(c) {
    const f = [];
    return wt(c, (V) => {
      f.push(V);
    }, !0), f;
  }, Hn = function(c, f) {
    const V = ms();
    Nt(Da(c), (P) => {
      Z(P) === Ne.element && _s(V, P);
    }), Nt(f, (P) => {
      Z(P) === Ne.element && !Wa(V, P) && ta(P);
    });
  }, yn = function(c, f) {
    let V = !1;
    return Nt(t.removed, (P) => {
      P.element && (V = V || P.element === c, qt(P.element));
    }), Hn(c, f), V;
  }, Bn = 8, jn = function(c, f) {
    const V = Lt;
    let P = null;
    const ae = () => (P || (P = ms(), Nt(f, (oe) => {
      _s(P, oe);
    })), P);
    for (let oe = 0; ; oe++) {
      const be = Da(c), ze = [c];
      let bt = !1;
      if (Nt(be, (Ye) => {
        Z(Ye) === Ne.documentFragment ? Ka(ze, Ye) : !bt && !Wa(V, Ye) && (bt = Wa(ae(), Ye));
      }), !bt) return;
      if (oe >= Bn) throw Ft("the tree kept changing during in-place sanitization; refusing to return it");
      Nt(ze, (Ye, qe) => {
        qn(Ye, qe > 0, c, ae());
      });
    }
  }, qn = function(c, f, V, P) {
    const ae = za(c);
    let oe;
    for (; oe = ae.nextNode(); )
      !Wa(P, oe) || Wa(Lt, oe) || (f && lt(_e.uponSanitizeShadowNode, oe, null), aa(oe, V), Fa(oe, V), Ct(oe.content) && It(oe.content));
  }, Oa = function(c) {
    Lt && _s(Lt, c);
  }, bn = function(c, f) {
    return $t ? c === "patchsrc" ? !0 : c === "for" && f !== "label" && f !== "output" : !1;
  }, Kn = function(c) {
    $t && wt(c, (f) => {
      const V = Z(f);
      if (V === Ne.processingInstruction || V === Ne.comment && Xe(Ui, f.data)) {
        try {
          ie(f);
        } catch {
        }
        return !1;
      }
      if (V === Ne.element) {
        const P = f, ae = Te(de(f));
        try {
          P.hasAttribute && P.hasAttribute("patchsrc") && P.removeAttribute("patchsrc"), P.hasAttribute && P.hasAttribute("for") && bn("for", ae) && P.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, Ia = function(c) {
    let f = null, V = null;
    if (Xt) c = "<remove></remove>" + c;
    else {
      const oe = xi(c, /^[\r\n\t ]+/);
      V = oe && oe[0];
    }
    Ut === "application/xhtml+xml" && Mt === ot && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const P = pe ? Oe(c) : c;
    if (Mt === ot) try {
      f = new C().parseFromString(P, Ut);
    } catch {
    }
    if (!f || !f.documentElement) {
      f = $.createDocument(Mt, "template", null);
      try {
        f.documentElement.innerHTML = da ? Ve : P;
      } catch {
      }
    }
    const ae = f.body || f.documentElement;
    return c && V && ae.insertBefore(_.createTextNode(V), ae.childNodes[0] || null), Mt === ot ? he.call(f, it ? "html" : "body")[0] : it ? f.documentElement : ae;
  }, za = function(c) {
    const f = te ? te(c) : c.ownerDocument;
    return X.call(f || c, c, A.SHOW_ELEMENT | A.SHOW_COMMENT | A.SHOW_TEXT | A.SHOW_PROCESSING_INSTRUCTION | A.SHOW_CDATA_SECTION, null);
  }, ba = function(c) {
    return c = Ga(c, De, " "), c = Ga(c, H, " "), c = Ga(c, j, " "), c;
  }, ha = function(c) {
    var f;
    hn(c);
    const V = (f = c.querySelectorAll) === null || f === void 0 ? void 0 : f.call(c, "template");
    V && Nt(V, (P) => {
      Ct(P.content) && ha(P.content);
    });
  }, hn = function(c) {
    c.normalize();
    const f = te ? te(c) : c.ownerDocument, V = X.call(f || c, c, A.SHOW_TEXT | A.SHOW_COMMENT | A.SHOW_CDATA_SECTION | A.SHOW_PROCESSING_INSTRUCTION, null);
    let P = V.nextNode();
    for (; P; )
      P.data = ba(P.data), P = V.nextNode();
  }, xa = function(c) {
    const f = J ? J(c) : null;
    return typeof f != "string" || Te(f) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || c.attributes !== ne(c) || typeof c.removeAttribute != "function" || typeof c.removeAttributeNode != "function" || typeof c.getAttributeNode != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || c.nodeType !== Y(c) || c.childNodes !== re(c);
  }, Ct = function(c) {
    if (!Y || typeof c != "object" || c === null) return !1;
    try {
      return Y(c) === Ne.documentFragment;
    } catch {
      return !1;
    }
  }, Kt = function(c) {
    if (!Y || typeof c != "object" || c === null) return !1;
    try {
      return typeof Y(c) == "number";
    } catch {
      return !1;
    }
  };
  function lt(D, c, f) {
    D.length !== 0 && Nt(D, (V) => {
      V.call(t, c, f, Dt);
    });
  }
  const xn = function(c, f) {
    return !!($t && c.hasChildNodes() && !Kt(c.firstElementChild) && Xe(xs, c.textContent) && Xe(xs, c.innerHTML) || $t && Ec[f] && Z(c) === Ne.element && ge(c) === ot && (Kt(c.firstElementChild) || typeof c.textContent == "string" && Xe(xs, c.textContent)) || c.nodeType === Ne.processingInstruction || $t && c.nodeType === Ne.comment && Xe(Ui, c.data));
  }, fa = function(c, f) {
    if (c instanceof RegExp) return Xe(c, f);
    if (c instanceof Function) {
      for (var V = arguments.length, P = new Array(V > 2 ? V - 2 : 0), ae = 2; ae < V; ae++) P[ae - 2] = arguments[ae];
      return !!c(f, ...P);
    }
    return !1;
  }, Wn = function(c, f, V) {
    if (!Pt[f] && Na(f) && fa(st.tagNameCheck, f)) return !1;
    if (vt && !Tt[f] && !Tt[na(f)]) {
      const P = me(c), ae = re(c);
      if (ae && P) {
        const oe = ae.length;
        for (let be = oe - 1; be >= 0; --be) {
          const ze = c === V ? G(ae[be], !0) : ae[be];
          P.insertBefore(ze, le(c));
        }
      }
    }
    return yt(c), !0;
  }, fn = function(c, f, V, P) {
    return c.length === 0 ? f : f === V || f === P ? pt(f) : f;
  }, Ot = function(c, f) {
    return c === f || me(c) !== null ? !1 : (Pa && qt(c), !0);
  }, aa = function(c, f) {
    if (Oa(c), lt(_e.beforeSanitizeElements, c, null), Ot(c, f)) return !0;
    if (xa(c))
      return yt(c), !0;
    const V = Te(de(c));
    if (w = fn(_e.uponSanitizeElement, w, ke, la), lt(_e.uponSanitizeElement, c, {
      tagName: V,
      allowedTags: w
    }), Ot(c, f)) return !0;
    if (xn(c, V))
      return yt(c), !0;
    if (Pt[V] || !(kt.tagCheck instanceof Function && kt.tagCheck(V)) && !w[V]) {
      const P = Wn(c, V, f);
      return P === !1 && (lt(_e.afterSanitizeElements, c, null), Ot(c, f)) ? !0 : P;
    }
    if (Z(c) === Ne.element && !je(c) || (V === "noscript" || V === "noembed" || V === "noframes") && Xe(Uc, c.innerHTML))
      return yt(c), !0;
    if (ut && c.nodeType === Ne.text) {
      const P = ba(c.textContent);
      c.textContent !== P && (Ka(t.removed, { element: c.cloneNode() }), c.textContent = P);
    }
    return lt(_e.afterSanitizeElements, c, null), Ot(c, f);
  }, kn = function(c, f, V) {
    if (Va[f] || bn(f, c) || nn && (f === "id" || f === "name") && (V in _ || V in Ma)) return !1;
    const P = ve[f] || kt.attributeCheck instanceof Function && kt.attributeCheck(f, c);
    return ia && Xe(fe, f) || tn && Xe(xe, f) ? !0 : P ? cn[f] || Xe(y, Ga(V, S, "")) || (f === "src" || f === "xlink:href" || f === "href") && c !== "script" && fi(V, "data:") === 0 && rn[c] || an && !Xe(R, Ga(V, S, "")) ? !0 : !V : Na(c) && fa(st.tagNameCheck, c) && fa(st.attributeNameCheck, f, c) || f === "is" && st.allowCustomizedBuiltInElements && fa(st.tagNameCheck, V);
  }, vn = Se({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Na = function(c) {
    return !vn[na(c)] && Xe(h, c);
  }, wn = function(c, f, V, P) {
    if (pe && typeof M == "object" && typeof M.getAttributeType == "function" && !V) switch (M.getAttributeType(c, f)) {
      case "TrustedHTML":
        return Oe(P);
      case "TrustedScriptURL":
        return Fe(P);
    }
    return P;
  }, Gn = function(c, f, V, P) {
    try {
      return V ? c.setAttributeNS(V, f, P) : c.setAttribute(f, P), xa(c) ? (yt(c), !1) : !0;
    } catch {
      return Et(f, c), !1;
    }
  }, Cn = function(c, f) {
    return $t && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, f) ? !0 : na(c) === "attributename" && xi(f, "href") !== null;
  }, Fa = function(c, f) {
    if (lt(_e.beforeSanitizeAttributes, c, null), Ot(c, f)) return;
    const V = c.attributes;
    if (!V || xa(c)) return;
    ve = fn(_e.uponSanitizeAttribute, ve, Qt, ra);
    const P = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ve,
      forceKeepAttr: void 0
    };
    let ae = V.length;
    const oe = Te(c.nodeName);
    for (; ae--; ) {
      const be = V[ae], ze = be.name, bt = be.namespaceURI, Ye = be.value, qe = Te(ze), Wt = Ye;
      let Ze = ze === "value" ? Wt : cc(Wt), Sn = !1;
      if (P.attrName = qe, P.attrValue = Ze, P.keepAttr = !0, P.forceKeepAttr = void 0, lt(_e.uponSanitizeAttribute, c, P), Ze = P.attrValue, sn && (qe === "id" || qe === "name") && fi(Ze, on) !== 0 && (Et(ze, c, be), Ze = on + Ze, Sn = !0), Cn(ze, Ze)) {
        Et(ze, c, be);
        continue;
      }
      if (!P.forceKeepAttr) {
        if (!P.keepAttr) {
          Et(ze, c, be);
          continue;
        }
        if (!oa && Xe(Ei, Ze)) {
          Et(ze, c, be);
          continue;
        }
        if (ut && (Ze = ba(Ze)), !kn(oe, qe, Ze)) {
          Et(ze, c, be);
          continue;
        }
        Ze = wn(oe, qe, bt, Ze), Ze !== Wt && Gn(c, ze, bt, Ze) && Sn && hi(t.removed);
      }
    }
    lt(_e.afterSanitizeAttributes, c, null), Ot(c, f);
  }, It = function(c) {
    let f = null;
    const V = za(c);
    for (lt(_e.beforeSanitizeShadowDOM, c, null); f = V.nextNode(); )
      if (lt(_e.uponSanitizeShadowNode, f, null), aa(f, c), Fa(f, c), Ct(f.content) && It(f.content), Z(f) === Ne.element) {
        const P = we(f);
        Ct(P) && (zt(P), It(P));
      }
    ut && hn(c), lt(_e.afterSanitizeShadowDOM, c, null);
  }, zt = function(c) {
    const f = [{
      node: c,
      shadow: null
    }];
    for (; f.length > 0; ) {
      const V = f.pop();
      if (V.shadow) {
        It(V.shadow);
        continue;
      }
      const P = V.node, ae = Z(P) === Ne.element, oe = re(P);
      if (oe) for (let be = oe.length - 1; be >= 0; --be) f.push({
        node: oe[be],
        shadow: null
      });
      if (ae) {
        const be = J ? J(P) : null;
        if (typeof be == "string" && Te(be) === "template") {
          const ze = P.content;
          Ct(ze) && f.push({
            node: ze,
            shadow: null
          });
        }
      }
      if (ae) {
        const be = we(P);
        Ct(be) && f.push({
          node: null,
          shadow: be
        }, {
          node: be,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = null, V = null, P = null, ae = null;
    if (da = !D, da && (D = "<!-->"), typeof D != "string" && !Kt(D) && (D = pc(D), typeof D != "string"))
      throw Ft("dirty is not a string, aborting");
    if (!t.isSupported) return D;
    At ? (w = la, ve = ra) : ea(c), (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && (w = pt(w)), _e.uponSanitizeAttribute.length > 0 && (ve = pt(ve)), t.removed = [];
    const oe = Pa && typeof D != "string" && Kt(D);
    let be = [];
    const ze = Lt;
    if (oe) {
      Kn(D);
      const qe = de(D);
      if (typeof qe == "string") {
        const Wt = Te(qe);
        if (!w[Wt] || Pt[Wt])
          throw _t(D), Ft("root node is forbidden and cannot be sanitized in-place");
      }
      if (xa(D))
        throw _t(D), Ft("root node is clobbered and cannot be sanitized in-place");
      be = Da(D), Lt = ms();
    } else if (Kt(D))
      f = Ia("<!---->"), V = f.ownerDocument.importNode(D, !0), V.nodeType === Ne.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? f = V : f.appendChild(V), zt(f);
    else {
      if (!Rt && !ut && !it && D.indexOf("<") === -1) return pe && Jt ? Oe(D) : D;
      if (f = Ia(D), !f) return Rt ? null : Jt ? Ve : "";
    }
    f && Xt && yt(f.firstChild);
    const bt = oe ? D : f;
    try {
      oe && zt(D);
      const qe = za(bt);
      for (; P = qe.nextNode(); )
        aa(P, bt), Fa(P, bt), Ct(P.content) && It(P.content);
      oe && jn(D, be);
    } catch (qe) {
      throw oe && (_t(D), yn(D, be)), qe;
    } finally {
      Lt = ze;
    }
    if (oe) {
      if (yn(D, be)) throw Ft("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ut && ha(D), D;
    }
    if (Rt) {
      if (ut && ha(f), Ge)
        for (ae = I.call(f.ownerDocument); f.firstChild; ) ae.appendChild(f.firstChild);
      else ae = f;
      return (ve.shadowroot || ve.shadowrootmode) && (ae = Q.call(x, ae, !0)), ae;
    }
    let Ye = it ? f.outerHTML : f.innerHTML;
    return it && w["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && Xe(Ac, f.ownerDocument.doctype.name) && (Ye = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + Ye), ut && (Ye = ba(Ye)), pe && Jt ? Oe(Ye) : Ye;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ea(D), At = !0, la = w, ra = ve;
  }, t.clearConfig = function() {
    Dt = null, At = !1, la = null, ra = null, pe = Pe, Ve = "";
  }, t.isValidAttribute = function(D, c, f) {
    Dt || ea({});
    const V = Te(D), P = Te(c);
    return typeof f == "string" && (Cn(c, f) || !oa && Xe(Ei, f)) ? !1 : kn(V, P, f);
  }, t.addHook = function(D, c) {
    typeof c == "function" && dt(_e, D) && Ka(_e[D], c);
  }, t.removeHook = function(D, c) {
    if (dt(_e, D)) {
      if (c !== void 0) {
        const f = lc(_e[D], c);
        return f === -1 ? void 0 : dc(_e[D], f, 1)[0];
      }
      return hi(_e[D]);
    }
  }, t.removeHooks = function(D) {
    dt(_e, D) && (_e[D] = []);
  }, t.removeAllHooks = function() {
    _e = Vi();
  }, t;
}
var $c = Zi();
function eo(u) {
  return u ? $c.sanitize(u, { USE_PROFILES: { svg: !0, svgFilters: !0 } }) : "";
}
const Rc = { class: "flex items-start gap-4" }, Lc = { class: "flex-shrink-0" }, Mc = ["innerHTML"], Dc = ["src"], Oc = { class: "flex-1 space-y-2" }, Ic = { class: "flex items-center gap-2" }, zc = { class: "btn btn-secondary btn-sm cursor-pointer" }, Nc = ["accept"], Fc = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Hc = {
  key: 1,
  class: "text-xs text-red-500"
}, In = /* @__PURE__ */ ft({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    mode: { default: "image" },
    size: { default: "md" },
    uploadLabel: { default: "" },
    removeLabel: { default: "" },
    hint: { default: "" },
    maxSize: { default: 300 * 1024 },
    acceptedMimeTypes: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const { t: _ } = St(), x = u, U = t, L = O(""), z = W(() => x.uploadLabel || _("common.upload")), E = W(() => x.removeLabel || _("common.remove")), A = W(() => x.mode === "svg" ? ".svg" : x.acceptedMimeTypes.length > 0 ? x.acceptedMimeTypes.join(",") : "image/*"), C = W(
      () => x.mode === "svg" ? eo(x.modelValue ?? "") : ""
    ), M = W(() => x.size === "sm" ? "h-14 w-14" : "h-20 w-20"), F = W(() => x.size === "sm" ? "h-7 w-7" : "h-12 w-12"), G = W(() => x.size === "sm" ? "h-5 w-5" : "h-8 w-8");
    function ie(ye) {
      var we;
      const le = ye.target, re = (we = le.files) == null ? void 0 : we[0];
      if (L.value = "", !re) return;
      if (x.mode === "image" && x.acceptedMimeTypes.length > 0 && !x.acceptedMimeTypes.includes(re.type.toLowerCase())) {
        L.value = _("common.unsupportedImageType", {
          types: x.acceptedMimeTypes.map((ne) => ne.replace(/^image\//, "").toUpperCase()).join(", ")
        }), le.value = "";
        return;
      }
      if (x.maxSize && re.size > x.maxSize) {
        L.value = _("common.fileTooLargeKb", {
          size: (re.size / 1024).toFixed(1),
          max: (x.maxSize / 1024).toFixed(0)
        }), le.value = "";
        return;
      }
      const me = new FileReader();
      if (x.mode === "svg")
        me.onload = (ne) => {
          var J;
          const Y = (J = ne.target) == null ? void 0 : J.result;
          Y && U("update:modelValue", Y.trim());
        }, me.readAsText(re);
      else {
        if (!re.type.startsWith("image/")) {
          L.value = _("common.selectImageFile"), le.value = "";
          return;
        }
        me.onload = (ne) => {
          var Y;
          U("update:modelValue", (Y = ne.target) == null ? void 0 : Y.result);
        }, me.readAsDataURL(re);
      }
      me.onerror = () => {
        L.value = _("common.fileReadFailed");
      }, le.value = "";
    }
    return (ye, le) => (r(), d("div", Rc, [
      e("div", Lc, [
        e("div", {
          class: ce(["flex items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 dark:border-dark-600 dark:bg-dark-800", [M.value, { "border-solid": !!u.modelValue }]])
        }, [
          u.mode === "svg" && u.modelValue ? (r(), d("span", {
            key: 0,
            class: ce(["text-gray-600 dark:text-gray-300 [&>svg]:h-full [&>svg]:w-full", F.value]),
            innerHTML: C.value
          }, null, 10, Mc)) : u.mode === "image" && u.modelValue ? (r(), d("img", {
            key: 1,
            src: u.modelValue,
            alt: "",
            class: "h-full w-full object-contain"
          }, null, 8, Dc)) : (r(), d("svg", {
            key: 2,
            class: ce(["text-gray-400 dark:text-dark-500", G.value]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...le[1] || (le[1] = [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            }, null, -1)
          ])], 2))
        ], 2)
      ]),
      e("div", Oc, [
        e("div", Ic, [
          e("label", zc, [
            e("input", {
              type: "file",
              accept: A.value,
              class: "hidden",
              onChange: ie
            }, null, 40, Nc),
            v(Ae, {
              name: "upload",
              size: "sm",
              class: "mr-1.5",
              "stroke-width": 2
            }),
            q(" " + n(z.value), 1)
          ]),
          u.modelValue ? (r(), d("button", {
            key: 0,
            type: "button",
            class: "btn btn-secondary btn-sm text-red-600 hover:text-red-700 dark:text-red-400",
            onClick: le[0] || (le[0] = (re) => ye.$emit("update:modelValue", ""))
          }, [
            v(Ae, {
              name: "trash",
              size: "sm",
              class: "mr-1.5",
              "stroke-width": 2
            }),
            q(" " + n(E.value), 1)
          ])) : T("", !0)
        ]),
        u.hint ? (r(), d("p", Fc, n(u.hint), 1)) : T("", !0),
        L.value ? (r(), d("p", Hc, n(L.value), 1)) : T("", !0)
      ])
    ]));
  }
}), Ms = [
  {
    id: "link",
    labelKey: "admin.settings.customMenu.iconPresets.link",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H15a4.5 4.5 0 010 9h-1.5m-3 0H9a4.5 4.5 0 010-9h1.5m-3 6h9"/></svg>'
  },
  {
    id: "users",
    labelKey: "admin.settings.customMenu.iconPresets.users",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.1 9.1 0 00.98.06 8.96 8.96 0 003.02-.52 4.5 4.5 0 00-6.9-3.96M15 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 20.12a7.5 7.5 0 0115 0A17.9 17.9 0 0112 21.75a17.9 17.9 0 01-7.5-1.63z"/></svg>'
  },
  {
    id: "gift",
    labelKey: "admin.settings.customMenu.iconPresets.gift",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75h16.5v10.5H3.75V9.75zM2.25 6.75h19.5v3H2.25v-3zM12 6.75v13.5m0-13.5H9.75a2.25 2.25 0 110-4.5C12 2.25 12 6.75 12 6.75zm0 0h2.25a2.25 2.25 0 100-4.5C12 2.25 12 6.75 12 6.75z"/></svg>'
  },
  {
    id: "book",
    labelKey: "admin.settings.customMenu.iconPresets.book",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5A2.25 2.25 0 016.75 2.25H12v18H6.75A2.25 2.25 0 004.5 22.5v-18zm15 0a2.25 2.25 0 00-2.25-2.25H12v18h5.25a2.25 2.25 0 012.25 2.25v-18z"/></svg>'
  },
  {
    id: "star",
    labelKey: "admin.settings.customMenu.iconPresets.star",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.1a.56.56 0 00.47.34l5.5.44a.56.56 0 01.32.98l-4.2 3.59a.56.56 0 00-.18.55l1.28 5.37a.56.56 0 01-.84.61l-4.72-2.88a.56.56 0 00-.58 0l-4.72 2.88a.56.56 0 01-.84-.61l1.28-5.37a.56.56 0 00-.18-.55l-4.2-3.59a.56.56 0 01.32-.98l5.5-.44a.56.56 0 00.47-.34l2.12-5.1z"/></svg>'
  }
], Bc = Ms[1].svg, ks = Ms[0].svg, jc = ["aria-label"], qc = ["aria-label", "aria-pressed", "title", "data-testid", "onClick"], Kc = ["innerHTML"], Wc = /* @__PURE__ */ ft({
  inheritAttrs: !1,
  __name: "NavigationIconPicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const _ = t, { t: x } = St();
    return (U, L) => (r(), d("div", Pl(U.$attrs, { class: "space-y-3" }), [
      e("div", {
        class: "navigation-icon-presets grid grid-cols-5 gap-2",
        role: "group",
        "aria-label": a(x)("admin.settings.customMenu.iconChoices")
      }, [
        (r(!0), d(K, null, ee(a(Ms), (z) => (r(), d("button", {
          key: z.id,
          type: "button",
          class: ce([
            "flex min-h-11 items-center justify-center rounded-lg border transition-colors",
            u.modelValue === z.svg ? "border-gray-900 bg-gray-100 text-gray-900 dark:border-white dark:bg-dark-700 dark:text-white" : "border-gray-200 text-gray-500 hover:border-gray-400 hover:bg-gray-50 dark:border-dark-600 dark:text-gray-300 dark:hover:border-dark-500 dark:hover:bg-dark-700"
          ]),
          "aria-label": a(x)(z.labelKey),
          "aria-pressed": u.modelValue === z.svg,
          title: a(x)(z.labelKey),
          "data-testid": `navigation-icon-preset-${z.id}`,
          onClick: (E) => _("update:modelValue", z.svg)
        }, [
          e("span", {
            class: "h-5 w-5 [&>svg]:h-full [&>svg]:w-full",
            innerHTML: a(eo)(z.svg)
          }, null, 8, Kc)
        ], 10, qc))), 128))
      ], 8, jc),
      v(In, {
        "model-value": u.modelValue,
        mode: "svg",
        size: "sm",
        "upload-label": a(x)("admin.settings.customMenu.uploadSvg"),
        "remove-label": a(x)("admin.settings.customMenu.removeSvg"),
        hint: a(x)("admin.settings.customMenu.iconHint"),
        "onUpdate:modelValue": L[0] || (L[0] = (z) => _("update:modelValue", z))
      }, null, 8, ["model-value", "upload-label", "remove-label", "hint"])
    ], 16));
  }
}), Pi = /* @__PURE__ */ gt(Wc, [["__scopeId", "data-v-8c8cfeb5"]]), Gc = { class: "space-y-6" }, Yc = { class: "card p-6" }, Qc = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, Xc = { class: "text-base font-semibold text-gray-900 dark:text-white" }, Jc = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Zc = { class: "grid grid-cols-1 gap-3 md:grid-cols-2" }, eu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, tu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, au = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, nu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, su = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, iu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, ou = ["placeholder"], lu = { class: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 md:col-span-2" }, ru = { class: "mt-4 flex flex-wrap gap-2" }, du = ["disabled"], cu = ["disabled"], uu = { class: "card p-6" }, mu = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, _u = { class: "text-base font-semibold text-gray-900 dark:text-white" }, pu = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, gu = { class: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, yu = { class: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, bu = { class: "mt-3 grid grid-cols-1 gap-3 md:grid-cols-2" }, hu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, xu = ["placeholder"], fu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, ku = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, vu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, wu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Cu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Su = ["placeholder"], Au = { class: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 md:col-span-2" }, Tu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Uu = ["placeholder"], Eu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Vu = { class: "mt-4 flex flex-wrap gap-2" }, Pu = ["disabled"], $u = ["disabled"], Ru = { class: "card p-6" }, Lu = { class: "mb-4" }, Mu = { class: "text-base font-semibold text-gray-900 dark:text-white" }, Du = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Ou = { class: "grid grid-cols-1 gap-3 md:grid-cols-2" }, Iu = { class: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 md:col-span-2" }, zu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Nu = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Fu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Hu = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Bu = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, ju = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, qu = { class: "mt-4" }, Ku = ["disabled"], Wu = { class: "card p-6" }, Gu = { class: "mb-4 flex flex-wrap items-center justify-between gap-3" }, Yu = { class: "text-base font-semibold text-gray-900 dark:text-white" }, Qu = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Xu = { class: "flex flex-wrap items-center gap-2" }, Ju = { class: "flex items-center gap-1" }, Zu = { class: "text-xs text-gray-600 dark:text-gray-400" }, em = ["disabled"], tm = ["disabled"], am = { class: "overflow-x-auto" }, nm = { class: "w-full min-w-[800px] text-sm" }, sm = { class: "border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500 dark:border-dark-700 dark:text-gray-400" }, im = { class: "py-2 pr-4" }, om = { class: "py-2 pr-4" }, lm = { class: "py-2 pr-4" }, rm = { class: "py-2 pr-4" }, dm = { class: "py-2 pr-4" }, cm = { class: "py-2 pr-4" }, um = { class: "py-2 pr-4" }, mm = { class: "py-2" }, _m = { class: "py-3 pr-4 font-mono text-xs" }, pm = { class: "py-3 pr-4" }, gm = { class: "py-3 pr-4 text-xs" }, ym = { class: "py-3 pr-4 text-xs" }, bm = { class: "py-3 pr-4 text-xs" }, hm = { class: "py-3 pr-4 text-xs" }, xm = { class: "py-3 pr-4 text-xs" }, fm = { class: "py-3 pr-4 text-xs" }, km = { class: "py-3 text-xs" }, vm = { class: "flex flex-wrap gap-1" }, wm = ["onClick"], Cm = ["disabled", "onClick"], Sm = ["onClick"], Am = { key: 0 }, Tm = {
  colspan: "9",
  class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400"
}, Um = { class: "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, Em = { class: "mb-4 text-lg font-bold text-gray-900 dark:text-white" }, Vm = { class: "mb-4 text-sm text-gray-500 dark:text-gray-400" }, Pm = { class: "mb-5" }, $m = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, Rm = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, Lm = { class: "mb-5" }, Mm = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, Dm = { class: "ml-8 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-300" }, Om = { class: "mt-2 rounded-lg bg-zo-alert-50 p-3 text-xs text-zo-alert-700 dark:bg-zo-alert-900/20 dark:text-zo-alert-300" }, Im = { class: "mb-5" }, zm = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, Nm = { class: "ml-8 text-sm text-gray-600 dark:text-gray-300" }, Fm = { class: "ml-8 mt-1 block rounded bg-gray-100 px-3 py-2 text-xs text-gray-800 dark:bg-dark-700 dark:text-gray-200" }, Hm = { class: "mb-5" }, Bm = { class: "mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white" }, jm = { class: "ml-8 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, qm = { class: "w-full text-sm" }, Km = { class: "whitespace-nowrap bg-gray-50 px-3 py-2 font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-300" }, Wm = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Gm = { class: "text-xs" }, Ym = { class: "rounded-lg bg-zo-signal-50 p-3 text-xs text-zo-signal-700 dark:bg-zo-signal-900/20 dark:text-zo-signal-300" }, Qm = { class: "mt-4 text-right" }, Xm = { class: "relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-dark-800" }, Jm = ["aria-label"], Zm = { class: "mb-1 text-lg font-bold text-gray-900 dark:text-white" }, e_ = { class: "mb-4 text-sm text-gray-500 dark:text-gray-400" }, t_ = { class: "space-y-2" }, a_ = { class: "text-sm text-gray-700 dark:text-gray-300" }, n_ = { class: "ml-2 text-xs text-gray-500 dark:text-gray-400" }, s_ = ["href"], i_ = { class: "mt-4 text-right" }, $i = 900, o_ = /* @__PURE__ */ ft({
  __name: "BackupView",
  setup(u) {
    const { t } = St(), _ = $s(), x = Ls();
    function U(h) {
      return qi(h) ? (_.showError(
        Ki(h) === "STEP_UP_ADMIN_API_KEY_FORBIDDEN" ? t("stepUp.adminApiKeyForbidden") : t("stepUp.notEnabled")
      ), !0) : !1;
    }
    const L = O({
      endpoint: "",
      region: "auto",
      bucket: "",
      access_key_id: "",
      secret_access_key: "",
      prefix: "backups/",
      force_path_style: !1
    }), z = O(!1), E = O(!1), A = O(!1), C = O({
      enabled: !1,
      reuse_backup_s3: !0,
      bucket: "",
      prefix: "images/",
      public_base_url: "",
      presign_expiry_hours: 24,
      max_download_bytes: 33554432,
      endpoint: "",
      region: "auto",
      access_key_id: "",
      secret_access_key: "",
      force_path_style: !1
    }), M = O(!1), F = O(!1), G = O(!1), ie = O({
      enabled: !1,
      cron_expr: "0 2 * * *",
      retain_days: 14,
      retain_count: 10
    }), ye = O(!1), le = O([]), re = O(!1), me = O(!1), we = O(""), ne = O(14), Y = O([]), J = O(!1), te = O(null), Z = O(null);
    let de = !1;
    function Ce(h) {
      const y = le.value.findIndex((w) => w.id === h.id);
      y >= 0 && (le.value[y] = h);
    }
    function ge(h) {
      if (de) return;
      pe();
      let y = 0;
      te.value = setInterval(async () => {
        if (y++ >= $i) {
          pe(), me.value = !1, _.showWarning(t("admin.backup.operations.backupRunning"));
          return;
        }
        try {
          const w = await se.backup.getBackup(h);
          Ce(w), (w.status === "completed" || w.status === "failed") && (pe(), me.value = !1, w.status === "completed" ? _.showSuccess(t("admin.backup.operations.backupCreated")) : _.showError(w.error_message || t("admin.backup.operations.backupFailed")), await Q());
        } catch {
        }
      }, 2e3);
    }
    function pe() {
      te.value && (clearInterval(te.value), te.value = null);
    }
    function Ve(h) {
      if (de) return;
      Pe();
      let y = 0;
      Z.value = setInterval(async () => {
        if (y++ >= $i) {
          Pe(), we.value = "", _.showWarning(t("admin.backup.operations.restoreRunning"));
          return;
        }
        try {
          const w = await se.backup.getBackup(h);
          Ce(w), (w.restore_status === "completed" || w.restore_status === "failed") && (Pe(), we.value = "", w.restore_status === "completed" ? _.showSuccess(t("admin.backup.actions.restoreSuccess")) : _.showError(w.restore_error || t("admin.backup.operations.restoreFailed")), await Q());
        } catch {
        }
      }, 2e3);
    }
    function Pe() {
      Z.value && (clearInterval(Z.value), Z.value = null);
    }
    function Ie() {
      document.hidden ? (pe(), Pe()) : Q().then(() => {
        const h = le.value.find((w) => w.status === "running");
        h && (me.value = !0, ge(h.id));
        const y = le.value.find((w) => w.restore_status === "running");
        y && (we.value = y.id, Ve(y.id));
      });
    }
    const $e = O(!1), Be = W(() => [
      { field: t("admin.backup.s3.endpoint"), value: "https://<account_id>.r2.cloudflarestorage.com" },
      { field: t("admin.backup.s3.region"), value: "auto" },
      { field: t("admin.backup.s3.bucket"), value: t("admin.backup.r2Guide.step4.bucketValue") },
      { field: t("admin.backup.s3.prefix"), value: "backups/" },
      { field: "Access Key ID", value: t("admin.backup.r2Guide.step4.fromStep2") },
      { field: "Secret Access Key", value: t("admin.backup.r2Guide.step4.fromStep2") },
      { field: t("admin.backup.s3.forcePathStyle"), value: t("admin.backup.r2Guide.step4.unchecked") }
    ]);
    async function Oe() {
      try {
        const h = await se.backup.getS3Config();
        L.value = {
          endpoint: h.endpoint || "",
          region: h.region || "auto",
          bucket: h.bucket || "",
          access_key_id: h.access_key_id || "",
          secret_access_key: "",
          prefix: h.prefix || "backups/",
          force_path_style: h.force_path_style
        }, z.value = !!h.access_key_id;
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      }
    }
    async function Fe() {
      E.value = !0;
      try {
        await x.run(() => se.backup.updateS3Config(L.value)), _.showSuccess(t("admin.backup.s3.saved")), await Oe();
      } catch (h) {
        if (Ht(h)) {
          E.value = !1;
          return;
        }
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        E.value = !1;
      }
    }
    async function at() {
      try {
        const { config: h, secret_configured: y } = await se.backup.getImageStorageConfig();
        C.value = {
          ...h,
          prefix: h.prefix || "images/",
          region: h.region || "auto",
          secret_access_key: ""
        }, M.value = y;
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      }
    }
    async function Ue() {
      F.value = !0;
      try {
        await x.run(() => se.backup.updateImageStorageConfig(C.value)), _.showSuccess(t("admin.backup.imageStorage.saved")), await at();
      } catch (h) {
        if (Ht(h)) {
          F.value = !1;
          return;
        }
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        F.value = !1;
      }
    }
    async function $() {
      G.value = !0;
      try {
        const h = await se.backup.testImageStorageConnection(C.value);
        h.ok ? _.showSuccess(h.message || t("admin.backup.s3.testSuccess")) : _.showError(h.message || t("admin.backup.s3.testFailed"));
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        G.value = !1;
      }
    }
    async function X() {
      A.value = !0;
      try {
        const h = await se.backup.testS3Connection(L.value);
        h.ok ? _.showSuccess(h.message || t("admin.backup.s3.testSuccess")) : _.showError(h.message || t("admin.backup.s3.testFailed"));
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        A.value = !1;
      }
    }
    async function I() {
      try {
        const h = await se.backup.getSchedule();
        ie.value = {
          enabled: h.enabled,
          cron_expr: h.cron_expr || "0 2 * * *",
          retain_days: h.retain_days || 14,
          retain_count: h.retain_count || 10
        };
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      }
    }
    async function he() {
      ye.value = !0;
      try {
        await se.backup.updateSchedule(ie.value), _.showSuccess(t("admin.backup.schedule.saved"));
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        ye.value = !1;
      }
    }
    async function Q() {
      re.value = !0;
      try {
        const h = await se.backup.listBackups();
        le.value = h.items || [];
      } catch (h) {
        _.showError((h == null ? void 0 : h.message) || t("errors.networkError"));
      } finally {
        re.value = !1;
      }
    }
    async function _e() {
      var h;
      me.value = !0;
      try {
        const y = await x.run(() => se.backup.createBackup({ expire_days: ne.value }));
        le.value.unshift(y), ge(y.id);
      } catch (y) {
        if (Ht(y)) {
          me.value = !1;
          return;
        }
        if (U(y)) {
          me.value = !1;
          return;
        }
        ((h = y == null ? void 0 : y.response) == null ? void 0 : h.status) === 409 ? _.showWarning(t("admin.backup.operations.alreadyInProgress")) : _.showError((y == null ? void 0 : y.message) || t("errors.networkError")), me.value = !1;
      }
    }
    async function De(h) {
      try {
        const y = await x.run(() => se.backup.getDownloadURL(h));
        if (y.parts && y.parts.length > 0) {
          Y.value = y.parts, J.value = !0;
          return;
        }
        if (!y.url)
          throw new Error(t("admin.backup.actions.downloadFailed"));
        const w = document.createElement("a");
        w.href = y.url, w.rel = "noopener", w.click();
      } catch (y) {
        if (Ht(y) || U(y)) return;
        _.showError((y == null ? void 0 : y.message) || t("errors.networkError"));
      }
    }
    function H() {
      J.value = !1, Y.value = [];
    }
    async function j(h) {
      var w;
      if (!window.confirm(t("admin.backup.actions.restoreConfirm"))) return;
      const y = window.prompt(t("admin.backup.actions.restorePasswordPrompt"));
      if (y) {
        we.value = h;
        try {
          const ke = await x.run(() => se.backup.restoreBackup(h, y));
          Ce(ke), Ve(h);
        } catch (ke) {
          if (we.value = "", Ht(ke) || U(ke)) return;
          (ke == null ? void 0 : ke.status) === 409 || ((w = ke == null ? void 0 : ke.response) == null ? void 0 : w.status) === 409 ? _.showWarning(t("admin.backup.operations.restoreRunning")) : _.showError((ke == null ? void 0 : ke.message) || t("errors.networkError"));
        }
      }
    }
    async function fe(h) {
      if (window.confirm(t("admin.backup.actions.deleteConfirm")))
        try {
          await se.backup.deleteBackup(h), _.showSuccess(t("admin.backup.actions.deleted")), await Q();
        } catch (y) {
          _.showError((y == null ? void 0 : y.message) || t("errors.networkError"));
        }
    }
    function xe(h) {
      switch (h) {
        case "completed":
          return "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-300";
        case "running":
          return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
        case "failed":
          return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
        default:
          return "bg-gray-100 text-gray-700 dark:bg-dark-800 dark:text-gray-300";
      }
    }
    function R(h) {
      return !h || h <= 0 ? "-" : h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function S(h) {
      if (!h) return "-";
      const y = new Date(h);
      return Number.isNaN(y.getTime()) ? h : y.toLocaleString();
    }
    return en(async () => {
      document.addEventListener("visibilitychange", Ie), await Promise.all([Oe(), at(), I(), Q()]);
      const h = le.value.find((w) => w.status === "running");
      h && (me.value = !0, ge(h.id));
      const y = le.value.find((w) => w.restore_status === "running");
      y && (we.value = y.id, Ve(y.id));
    }), $l(() => {
      de = !0, pe(), Pe(), document.removeEventListener("visibilitychange", Ie);
    }), (h, y) => (r(), d(K, null, [
      e("div", Gc, [
        e("div", Yc, [
          e("div", Qc, [
            e("div", null, [
              e("h3", Xc, n(a(t)("admin.backup.s3.title")), 1),
              e("p", Jc, [
                q(n(a(t)("admin.backup.s3.descriptionPrefix")) + " ", 1),
                e("button", {
                  type: "button",
                  class: "text-primary-600 underline hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                  onClick: y[0] || (y[0] = (w) => $e.value = !0)
                }, "Cloudflare R2"),
                q(" " + n(a(t)("admin.backup.s3.descriptionSuffix")), 1)
              ])
            ])
          ]),
          e("div", Zc, [
            e("div", null, [
              e("label", eu, n(a(t)("admin.backup.s3.endpoint")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[1] || (y[1] = (w) => L.value.endpoint = w),
                class: "input w-full",
                placeholder: "https://<account_id>.r2.cloudflarestorage.com"
              }, null, 512), [
                [k, L.value.endpoint]
              ])
            ]),
            e("div", null, [
              e("label", tu, n(a(t)("admin.backup.s3.region")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[2] || (y[2] = (w) => L.value.region = w),
                class: "input w-full",
                placeholder: "auto"
              }, null, 512), [
                [k, L.value.region]
              ])
            ]),
            e("div", null, [
              e("label", au, n(a(t)("admin.backup.s3.bucket")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[3] || (y[3] = (w) => L.value.bucket = w),
                class: "input w-full"
              }, null, 512), [
                [k, L.value.bucket]
              ])
            ]),
            e("div", null, [
              e("label", nu, n(a(t)("admin.backup.s3.prefix")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[4] || (y[4] = (w) => L.value.prefix = w),
                class: "input w-full",
                placeholder: "backups/"
              }, null, 512), [
                [k, L.value.prefix]
              ])
            ]),
            e("div", null, [
              e("label", su, n(a(t)("admin.backup.s3.accessKeyId")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[5] || (y[5] = (w) => L.value.access_key_id = w),
                class: "input w-full"
              }, null, 512), [
                [k, L.value.access_key_id]
              ])
            ]),
            e("div", null, [
              e("label", iu, n(a(t)("admin.backup.s3.secretAccessKey")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[6] || (y[6] = (w) => L.value.secret_access_key = w),
                type: "password",
                class: "input w-full",
                placeholder: z.value ? a(t)("admin.backup.s3.secretConfigured") : ""
              }, null, 8, ou), [
                [k, L.value.secret_access_key]
              ])
            ]),
            e("label", lu, [
              p(e("input", {
                "onUpdate:modelValue": y[7] || (y[7] = (w) => L.value.force_path_style = w),
                type: "checkbox"
              }, null, 512), [
                [tt, L.value.force_path_style]
              ]),
              e("span", null, n(a(t)("admin.backup.s3.forcePathStyle")), 1)
            ])
          ]),
          e("div", ru, [
            e("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              disabled: A.value,
              onClick: X
            }, n(A.value ? a(t)("common.loading") : a(t)("admin.backup.s3.testConnection")), 9, du),
            e("button", {
              type: "button",
              class: "btn btn-primary btn-sm",
              disabled: E.value,
              onClick: Fe
            }, n(E.value ? a(t)("common.loading") : a(t)("common.save")), 9, cu)
          ])
        ]),
        e("div", uu, [
          e("div", mu, [
            e("div", null, [
              e("h3", _u, n(a(t)("admin.backup.imageStorage.title")), 1),
              e("p", pu, n(a(t)("admin.backup.imageStorage.description")), 1)
            ]),
            e("label", gu, [
              p(e("input", {
                "onUpdate:modelValue": y[8] || (y[8] = (w) => C.value.enabled = w),
                type: "checkbox"
              }, null, 512), [
                [tt, C.value.enabled]
              ]),
              e("span", null, n(a(t)("admin.backup.imageStorage.enabled")), 1)
            ])
          ]),
          e("label", yu, [
            p(e("input", {
              "onUpdate:modelValue": y[9] || (y[9] = (w) => C.value.reuse_backup_s3 = w),
              type: "checkbox"
            }, null, 512), [
              [tt, C.value.reuse_backup_s3]
            ]),
            e("span", null, n(a(t)("admin.backup.imageStorage.reuseBackupS3")), 1)
          ]),
          e("div", bu, [
            e("div", null, [
              e("label", hu, n(a(t)("admin.backup.imageStorage.bucket")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[10] || (y[10] = (w) => C.value.bucket = w),
                class: "input w-full",
                placeholder: C.value.reuse_backup_s3 ? a(t)("admin.backup.imageStorage.bucketInherited") : ""
              }, null, 8, xu), [
                [k, C.value.bucket]
              ])
            ]),
            e("div", null, [
              e("label", fu, n(a(t)("admin.backup.imageStorage.prefix")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[11] || (y[11] = (w) => C.value.prefix = w),
                class: "input w-full",
                placeholder: "images/"
              }, null, 512), [
                [k, C.value.prefix]
              ])
            ]),
            C.value.reuse_backup_s3 ? T("", !0) : (r(), d(K, { key: 0 }, [
              e("div", null, [
                e("label", ku, n(a(t)("admin.backup.s3.endpoint")), 1),
                p(e("input", {
                  "onUpdate:modelValue": y[12] || (y[12] = (w) => C.value.endpoint = w),
                  class: "input w-full",
                  placeholder: "https://<account_id>.r2.cloudflarestorage.com"
                }, null, 512), [
                  [k, C.value.endpoint]
                ])
              ]),
              e("div", null, [
                e("label", vu, n(a(t)("admin.backup.s3.region")), 1),
                p(e("input", {
                  "onUpdate:modelValue": y[13] || (y[13] = (w) => C.value.region = w),
                  class: "input w-full",
                  placeholder: "auto"
                }, null, 512), [
                  [k, C.value.region]
                ])
              ]),
              e("div", null, [
                e("label", wu, n(a(t)("admin.backup.s3.accessKeyId")), 1),
                p(e("input", {
                  "onUpdate:modelValue": y[14] || (y[14] = (w) => C.value.access_key_id = w),
                  class: "input w-full"
                }, null, 512), [
                  [k, C.value.access_key_id]
                ])
              ]),
              e("div", null, [
                e("label", Cu, n(a(t)("admin.backup.s3.secretAccessKey")), 1),
                p(e("input", {
                  "onUpdate:modelValue": y[15] || (y[15] = (w) => C.value.secret_access_key = w),
                  type: "password",
                  class: "input w-full",
                  placeholder: M.value ? a(t)("admin.backup.s3.secretConfigured") : ""
                }, null, 8, Su), [
                  [k, C.value.secret_access_key]
                ])
              ]),
              e("label", Au, [
                p(e("input", {
                  "onUpdate:modelValue": y[16] || (y[16] = (w) => C.value.force_path_style = w),
                  type: "checkbox"
                }, null, 512), [
                  [tt, C.value.force_path_style]
                ]),
                e("span", null, n(a(t)("admin.backup.s3.forcePathStyle")), 1)
              ])
            ], 64)),
            e("div", null, [
              e("label", Tu, n(a(t)("admin.backup.imageStorage.publicBaseUrl")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[17] || (y[17] = (w) => C.value.public_base_url = w),
                class: "input w-full",
                placeholder: a(t)("admin.backup.imageStorage.publicBaseUrlPlaceholder")
              }, null, 8, Uu), [
                [k, C.value.public_base_url]
              ])
            ]),
            e("div", null, [
              e("label", Eu, n(a(t)("admin.backup.imageStorage.presignExpiryHours")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[18] || (y[18] = (w) => C.value.presign_expiry_hours = w),
                type: "number",
                min: "1",
                class: "input w-full"
              }, null, 512), [
                [
                  k,
                  C.value.presign_expiry_hours,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          e("div", Vu, [
            e("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              disabled: G.value,
              onClick: $
            }, n(G.value ? a(t)("common.loading") : a(t)("admin.backup.s3.testConnection")), 9, Pu),
            e("button", {
              type: "button",
              class: "btn btn-primary btn-sm",
              disabled: F.value,
              onClick: Ue
            }, n(F.value ? a(t)("common.loading") : a(t)("common.save")), 9, $u)
          ])
        ]),
        e("div", Ru, [
          e("div", Lu, [
            e("h3", Mu, n(a(t)("admin.backup.schedule.title")), 1),
            e("p", Du, n(a(t)("admin.backup.schedule.description")), 1)
          ]),
          e("div", Ou, [
            e("label", Iu, [
              p(e("input", {
                "onUpdate:modelValue": y[19] || (y[19] = (w) => ie.value.enabled = w),
                type: "checkbox"
              }, null, 512), [
                [tt, ie.value.enabled]
              ]),
              e("span", null, n(a(t)("admin.backup.schedule.enabled")), 1)
            ]),
            e("div", null, [
              e("label", zu, n(a(t)("admin.backup.schedule.cronExpr")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[20] || (y[20] = (w) => ie.value.cron_expr = w),
                class: "input w-full",
                placeholder: "0 2 * * *"
              }, null, 512), [
                [k, ie.value.cron_expr]
              ]),
              e("p", Nu, n(a(t)("admin.backup.schedule.cronHint")), 1)
            ]),
            e("div", null, [
              e("label", Fu, n(a(t)("admin.backup.schedule.retainDays")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[21] || (y[21] = (w) => ie.value.retain_days = w),
                type: "number",
                min: "0",
                class: "input w-full"
              }, null, 512), [
                [
                  k,
                  ie.value.retain_days,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", Hu, n(a(t)("admin.backup.schedule.retainDaysHint")), 1)
            ]),
            e("div", null, [
              e("label", Bu, n(a(t)("admin.backup.schedule.retainCount")), 1),
              p(e("input", {
                "onUpdate:modelValue": y[22] || (y[22] = (w) => ie.value.retain_count = w),
                type: "number",
                min: "0",
                class: "input w-full"
              }, null, 512), [
                [
                  k,
                  ie.value.retain_count,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", ju, n(a(t)("admin.backup.schedule.retainCountHint")), 1)
            ])
          ]),
          e("div", qu, [
            e("button", {
              type: "button",
              class: "btn btn-primary btn-sm",
              disabled: ye.value,
              onClick: he
            }, n(ye.value ? a(t)("common.loading") : a(t)("common.save")), 9, Ku)
          ])
        ]),
        e("div", Wu, [
          e("div", Gu, [
            e("div", null, [
              e("h3", Yu, n(a(t)("admin.backup.operations.title")), 1),
              e("p", Qu, n(a(t)("admin.backup.operations.description")), 1)
            ]),
            e("div", Xu, [
              e("div", Ju, [
                e("label", Zu, n(a(t)("admin.backup.operations.expireDays")), 1),
                p(e("input", {
                  "onUpdate:modelValue": y[23] || (y[23] = (w) => ne.value = w),
                  type: "number",
                  min: "0",
                  class: "input w-20 text-xs"
                }, null, 512), [
                  [
                    k,
                    ne.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("button", {
                type: "button",
                class: "btn btn-primary btn-sm",
                disabled: me.value,
                onClick: _e
              }, n(me.value ? a(t)("admin.backup.operations.backing") : a(t)("admin.backup.operations.createBackup")), 9, em),
              e("button", {
                type: "button",
                class: "btn btn-secondary btn-sm",
                disabled: re.value,
                onClick: Q
              }, n(re.value ? a(t)("common.loading") : a(t)("common.refresh")), 9, tm)
            ])
          ]),
          e("div", am, [
            e("table", nm, [
              e("thead", null, [
                e("tr", sm, [
                  y[28] || (y[28] = e("th", { class: "py-2 pr-4" }, "ID", -1)),
                  e("th", im, n(a(t)("admin.backup.columns.status")), 1),
                  e("th", om, n(a(t)("admin.backup.columns.fileName")), 1),
                  e("th", lm, n(a(t)("admin.backup.columns.size")), 1),
                  e("th", rm, n(a(t)("admin.backup.columns.parts")), 1),
                  e("th", dm, n(a(t)("admin.backup.columns.expiresAt")), 1),
                  e("th", cm, n(a(t)("admin.backup.columns.triggeredBy")), 1),
                  e("th", um, n(a(t)("admin.backup.columns.startedAt")), 1),
                  e("th", mm, n(a(t)("admin.backup.columns.actions")), 1)
                ])
              ]),
              e("tbody", null, [
                (r(!0), d(K, null, ee(le.value, (w) => {
                  var ke;
                  return r(), d("tr", {
                    key: w.id,
                    class: "border-b border-gray-100 align-top dark:border-dark-800"
                  }, [
                    e("td", _m, n(w.id), 1),
                    e("td", pm, [
                      e("span", {
                        class: ce(["rounded px-2 py-0.5 text-xs", xe(w.status)])
                      }, n(w.status === "running" && w.progress ? a(t)(`admin.backup.progress.${w.progress}`) : a(t)(`admin.backup.status.${w.status}`)), 3)
                    ]),
                    e("td", gm, n(w.file_name), 1),
                    e("td", ym, n(R(w.size_bytes)), 1),
                    e("td", bm, n(((ke = w.parts) == null ? void 0 : ke.length) || (w.status === "running" ? "-" : 1)), 1),
                    e("td", hm, n(w.expires_at ? S(w.expires_at) : a(t)("admin.backup.neverExpire")), 1),
                    e("td", xm, n(w.triggered_by === "scheduled" ? a(t)("admin.backup.trigger.scheduled") : a(t)("admin.backup.trigger.manual")), 1),
                    e("td", fm, n(S(w.started_at)), 1),
                    e("td", km, [
                      e("div", vm, [
                        w.status === "completed" ? (r(), d("button", {
                          key: 0,
                          type: "button",
                          class: "btn btn-secondary btn-xs",
                          onClick: (ve) => De(w.id)
                        }, n(a(t)("admin.backup.actions.download")), 9, wm)) : T("", !0),
                        w.status === "completed" ? (r(), d("button", {
                          key: 1,
                          type: "button",
                          class: "btn btn-secondary btn-xs",
                          disabled: we.value === w.id,
                          onClick: (ve) => j(w.id)
                        }, n(we.value === w.id ? a(t)("common.loading") : a(t)("admin.backup.actions.restore")), 9, Cm)) : T("", !0),
                        w.status !== "running" ? (r(), d("button", {
                          key: 2,
                          type: "button",
                          class: "btn btn-danger btn-xs",
                          onClick: (ve) => fe(w.id)
                        }, n(a(t)("common.delete")), 9, Sm)) : T("", !0)
                      ])
                    ])
                  ]);
                }), 128)),
                le.value.length === 0 ? (r(), d("tr", Am, [
                  e("td", Tm, n(a(t)("admin.backup.empty")), 1)
                ])) : T("", !0)
              ])
            ])
          ])
        ])
      ]),
      (r(), ct(Ss, { to: "body" }, [
        v(di, { name: "modal" }, {
          default: Re(() => [
            $e.value ? (r(), d("div", {
              key: 0,
              class: "fixed inset-0 z-50 flex items-center justify-center p-4",
              onMousedown: y[27] || (y[27] = sa((w) => $e.value = !1, ["self"]))
            }, [
              e("div", {
                class: "fixed inset-0 bg-black/50",
                onClick: y[24] || (y[24] = (w) => $e.value = !1)
              }),
              e("div", Um, [
                e("button", {
                  type: "button",
                  class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                  onClick: y[25] || (y[25] = (w) => $e.value = !1)
                }, [...y[29] || (y[29] = [
                  e("svg", {
                    class: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])]),
                e("h2", Em, n(a(t)("admin.backup.r2Guide.title")), 1),
                e("p", Vm, n(a(t)("admin.backup.r2Guide.intro")), 1),
                e("div", Pm, [
                  e("h3", $m, [
                    y[30] || (y[30] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "1", -1)),
                    q(" " + n(a(t)("admin.backup.r2Guide.step1.title")), 1)
                  ]),
                  e("ol", Rm, [
                    e("li", null, n(a(t)("admin.backup.r2Guide.step1.line1")), 1),
                    e("li", null, n(a(t)("admin.backup.r2Guide.step1.line2")), 1),
                    e("li", null, n(a(t)("admin.backup.r2Guide.step1.line3")), 1)
                  ])
                ]),
                e("div", Lm, [
                  e("h3", Mm, [
                    y[31] || (y[31] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "2", -1)),
                    q(" " + n(a(t)("admin.backup.r2Guide.step2.title")), 1)
                  ]),
                  e("ol", Dm, [
                    e("li", null, n(a(t)("admin.backup.r2Guide.step2.line1")), 1),
                    e("li", null, n(a(t)("admin.backup.r2Guide.step2.line2")), 1),
                    e("li", null, n(a(t)("admin.backup.r2Guide.step2.line3")), 1),
                    e("li", null, n(a(t)("admin.backup.r2Guide.step2.line4")), 1)
                  ]),
                  e("div", Om, n(a(t)("admin.backup.r2Guide.step2.warning")), 1)
                ]),
                e("div", Im, [
                  e("h3", zm, [
                    y[32] || (y[32] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "3", -1)),
                    q(" " + n(a(t)("admin.backup.r2Guide.step3.title")), 1)
                  ]),
                  e("p", Nm, n(a(t)("admin.backup.r2Guide.step3.desc")), 1),
                  e("code", Fm, "https://<" + n(a(t)("admin.backup.r2Guide.step3.accountId")) + ">.r2.cloudflarestorage.com", 1)
                ]),
                e("div", Hm, [
                  e("h3", Bm, [
                    y[33] || (y[33] = e("span", { class: "flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" }, "4", -1)),
                    q(" " + n(a(t)("admin.backup.r2Guide.step4.title")), 1)
                  ]),
                  e("div", jm, [
                    e("table", qm, [
                      e("tbody", null, [
                        (r(!0), d(K, null, ee(Be.value, (w, ke) => (r(), d("tr", {
                          key: ke,
                          class: "border-b border-gray-100 dark:border-dark-700 last:border-0"
                        }, [
                          e("td", Km, n(w.field), 1),
                          e("td", Wm, [
                            e("code", Gm, n(w.value), 1)
                          ])
                        ]))), 128))
                      ])
                    ])
                  ])
                ]),
                e("div", Ym, n(a(t)("admin.backup.r2Guide.freeTier")), 1),
                e("div", Qm, [
                  e("button", {
                    type: "button",
                    class: "btn btn-primary btn-sm",
                    onClick: y[26] || (y[26] = (w) => $e.value = !1)
                  }, n(a(t)("common.close")), 1)
                ])
              ])
            ], 32)) : T("", !0)
          ]),
          _: 1
        })
      ])),
      (r(), ct(Ss, { to: "body" }, [
        v(di, { name: "modal" }, {
          default: Re(() => [
            J.value ? (r(), d("div", {
              key: 0,
              class: "fixed inset-0 z-50 flex items-center justify-center p-4",
              onMousedown: sa(H, ["self"])
            }, [
              e("div", {
                class: "fixed inset-0 bg-black/50",
                onClick: H
              }),
              e("div", Xm, [
                e("button", {
                  type: "button",
                  class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                  "aria-label": a(t)("common.close"),
                  onClick: H
                }, [...y[34] || (y[34] = [
                  e("svg", {
                    class: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])], 8, Jm),
                e("h2", Zm, n(a(t)("admin.backup.actions.downloadParts")), 1),
                e("p", e_, n(a(t)("admin.backup.actions.downloadPartsHint")), 1),
                e("div", t_, [
                  (r(!0), d(K, null, ee(Y.value, (w) => (r(), d("div", {
                    key: w.index,
                    class: "flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-3 py-2 dark:border-dark-600"
                  }, [
                    e("span", a_, [
                      q(n(a(t)("admin.backup.actions.partLabel", { index: w.index })) + " ", 1),
                      e("span", n_, n(R(w.size_bytes)), 1)
                    ]),
                    e("a", {
                      href: w.url,
                      class: "btn btn-secondary btn-xs",
                      rel: "noopener"
                    }, n(a(t)("admin.backup.actions.download")), 9, s_)
                  ]))), 128))
                ]),
                e("div", i_, [
                  e("button", {
                    type: "button",
                    class: "btn btn-primary btn-sm",
                    onClick: H
                  }, n(a(t)("common.close")), 1)
                ])
              ])
            ], 32)) : T("", !0)
          ]),
          _: 1
        })
      ])),
      v(Rs, { controller: a(x) }, null, 8, ["controller"])
    ], 64));
  }
}), l_ = /* @__PURE__ */ gt(o_, [["__scopeId", "data-v-02e35a49"]]), r_ = { class: "card" }, d_ = { class: "flex flex-col gap-3 border-b border-gray-100 px-6 py-4 dark:border-dark-700 lg:flex-row lg:items-start lg:justify-between" }, c_ = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, u_ = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, m_ = { class: "flex flex-wrap gap-2" }, __ = ["disabled"], p_ = ["disabled"], g_ = ["disabled"], y_ = { class: "space-y-6 p-6" }, b_ = {
  key: 0,
  class: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
}, h_ = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, x_ = {
  class: "input-label",
  for: "email-template-event"
}, f_ = ["disabled"], k_ = ["value"], v_ = {
  class: "input-label",
  for: "email-template-locale"
}, w_ = ["disabled"], C_ = ["value"], S_ = {
  key: 0,
  class: "rounded-lg border border-primary-100 bg-primary-50/70 p-4 dark:border-primary-900/50 dark:bg-primary-950/20"
}, A_ = { class: "flex flex-wrap items-center gap-2" }, T_ = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, U_ = { class: "rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 dark:bg-dark-800 dark:text-gray-300 dark:ring-dark-600" }, E_ = { class: "mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300" }, V_ = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, P_ = {
  key: 1,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-4 text-sm text-zo-alert-700 dark:border-zo-alert-800 dark:bg-zo-alert-900/20 dark:text-zo-alert-300"
}, $_ = {
  key: 2,
  class: "grid grid-cols-1 gap-6 xl:grid-cols-2"
}, R_ = { class: "space-y-4" }, L_ = {
  class: "input-label",
  for: "email-template-subject"
}, M_ = ["disabled", "placeholder"], D_ = {
  class: "input-label",
  for: "email-template-html"
}, O_ = ["disabled", "placeholder"], I_ = { class: "rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-dark-700 dark:bg-dark-800/60" }, z_ = { class: "text-sm font-medium text-gray-900 dark:text-white" }, N_ = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, F_ = { class: "mt-3 flex flex-wrap gap-2" }, H_ = ["onClick"], B_ = { class: "space-y-4" }, j_ = { class: "rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800" }, q_ = { class: "flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, K_ = { class: "text-sm font-medium text-gray-900 dark:text-white" }, W_ = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, G_ = {
  key: 0,
  class: "rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
}, Y_ = { class: "bg-gray-100 p-3 dark:bg-dark-900" }, Q_ = ["srcdoc", "title"], X_ = { class: "text-xs text-gray-500 dark:text-gray-400" }, J_ = /* @__PURE__ */ ft({
  __name: "EmailTemplateEditor",
  setup(u) {
    const { t, locale: _ } = St(), x = $s(), U = [
      "{{site_name}}",
      "{{recipient_name}}",
      "{{recipient_email}}",
      "{{verification_code}}",
      "{{expires_in_minutes}}",
      "{{reset_url}}",
      "{{subscription_group}}",
      "{{subscription_days}}",
      "{{expiry_time}}",
      "{{days_remaining}}",
      "{{current_balance}}",
      "{{threshold}}",
      "{{recharge_url}}",
      "{{recharge_amount}}",
      "{{order_id}}",
      "{{unsubscribe_url}}",
      "{{account_id}}",
      "{{account_name}}",
      "{{platform}}",
      "{{quota_dimension}}",
      "{{quota_used}}",
      "{{quota_limit}}",
      "{{quota_remaining}}",
      "{{quota_threshold}}",
      "{{triggered_at}}",
      "{{group_name}}",
      "{{moderation_category}}",
      "{{moderation_score}}",
      "{{violation_count}}",
      "{{ban_threshold}}",
      "{{rule_name}}",
      "{{severity}}",
      "{{alert_status}}",
      "{{metric_type}}",
      "{{operator}}",
      "{{metric_value}}",
      "{{threshold_value}}",
      "{{alert_description}}",
      "{{report_name}}",
      "{{report_type}}",
      "{{report_start_time}}",
      "{{report_end_time}}",
      "{{report_summary_display}}",
      "{{report_detail_display}}",
      "{{report_total_requests}}",
      "{{report_success_count}}",
      "{{report_sla_error_count}}",
      "{{report_business_limited_count}}",
      "{{report_sla}}",
      "{{report_error_rate}}",
      "{{report_upstream_error_rate}}",
      "{{report_upstream_error_count_excl_429_529}}",
      "{{report_upstream_429_count}}",
      "{{report_upstream_529_count}}",
      "{{report_latency_p50}}",
      "{{report_latency_p99}}",
      "{{report_ttft_p50}}",
      "{{report_ttft_p99}}",
      "{{report_tokens}}",
      "{{report_qps_current}}",
      "{{report_qps_peak}}",
      "{{report_qps_avg}}",
      "{{report_tps_current}}",
      "{{report_tps_peak}}",
      "{{report_tps_avg}}",
      "{{report_html}}"
    ], L = O(!0), z = O(!1), E = O(!1), A = O(!1), C = O(!1), M = O([]), F = O([]), G = O(""), ie = O(""), ye = O(""), le = O(""), re = O(!1), me = O([]), we = O(""), ne = O(""), Y = O(!1);
    function J(H, j) {
      return _.value.toLowerCase().startsWith("zh") ? H : j;
    }
    const te = {
      "auth.verify_code": {
        label: "邮箱验证码",
        timing: "注册、绑定邮箱、OAuth 补全邮箱或 TOTP 邮箱校验时发送。",
        categoryLabel: "认证安全"
      },
      "auth.password_reset": {
        label: "密码重置",
        timing: "用户请求密码重置链接时发送。",
        categoryLabel: "认证安全"
      },
      "notification_email.verify_code": {
        label: "通知邮箱验证码",
        timing: "用户添加并验证额外通知邮箱时发送。",
        categoryLabel: "认证安全"
      },
      "subscription.purchase_success": {
        label: "订阅开通成功",
        timing: "订阅订单完成支付并成功开通或续期后发送。",
        categoryLabel: "订阅"
      },
      "subscription.expiry_reminder": {
        label: "订阅到期提醒",
        timing: "后台任务在订阅仍有效且距离到期剩余 7 天、3 天、1 天时各发送一次，可通过邮件设置中的开关关闭。",
        categoryLabel: "订阅"
      },
      "balance.low": {
        label: "余额不足提醒",
        timing: "用户余额低于全局或个人配置的提醒阈值时发送。",
        categoryLabel: "计费"
      },
      "balance.recharge_success": {
        label: "余额充值成功",
        timing: "余额充值订单支付完成并入账后发送。",
        categoryLabel: "计费"
      },
      "account.quota_alert": {
        label: "账号限额告警",
        timing: "上游账号的用量达到配置的额度告警阈值时发送给管理员通知邮箱。",
        categoryLabel: "管理告警"
      },
      "content_moderation.violation_notice": {
        label: "内容审计违规提醒",
        timing: "用户请求命中内容审计或风控规则、但尚未被禁用时发送。",
        categoryLabel: "风控"
      },
      "content_moderation.account_disabled": {
        label: "内容审计禁用账号",
        timing: "内容审计违规次数达到封禁阈值并自动禁用用户账号时发送。",
        categoryLabel: "风控"
      },
      "ops.alert": {
        label: "运维告警",
        timing: "运维监控规则触发告警并满足邮件通知配置时发送给运维收件人。",
        categoryLabel: "运维"
      },
      "ops.scheduled_report": {
        label: "运维定时报表",
        timing: "运维日报、周报、错误摘要或账号健康报表到达配置的发送时间时发送；日报和周报的完整指标均可在模板中编辑。",
        categoryLabel: "运维"
      }
    }, Z = {
      "auth.verify_code": {
        label: "Email Verification Code",
        timing: "Sent for registration, email binding, OAuth pending email completion, or TOTP email verification.",
        categoryLabel: "Auth"
      },
      "auth.password_reset": {
        label: "Password Reset",
        timing: "Sent when a user requests a password reset link.",
        categoryLabel: "Auth"
      },
      "notification_email.verify_code": {
        label: "Notification Email Verification",
        timing: "Sent when a user adds and verifies an extra notification email address.",
        categoryLabel: "Auth"
      },
      "subscription.purchase_success": {
        label: "Subscription Activated",
        timing: "Sent after a subscription order is paid and the subscription is activated or extended.",
        categoryLabel: "Subscription"
      },
      "subscription.expiry_reminder": {
        label: "Subscription Expiry Reminder",
        timing: "Sent by the background job when an active subscription has 7, 3, or 1 day remaining. It can be disabled in Email settings.",
        categoryLabel: "Subscription"
      },
      "balance.low": {
        label: "Low Balance Alert",
        timing: "Sent when a user's balance drops below the global or personal reminder threshold.",
        categoryLabel: "Billing"
      },
      "balance.recharge_success": {
        label: "Balance Recharge Success",
        timing: "Sent after a balance recharge order is paid and credited.",
        categoryLabel: "Billing"
      },
      "account.quota_alert": {
        label: "Account Quota Alert",
        timing: "Sent to admin notification emails when an upstream account reaches the configured quota alert threshold.",
        categoryLabel: "Admin"
      },
      "content_moderation.violation_notice": {
        label: "Risk Control Violation Notice",
        timing: "Sent when a user request triggers content moderation or risk-control rules but the account is not disabled yet.",
        categoryLabel: "Risk Control"
      },
      "content_moderation.account_disabled": {
        label: "Risk Control Account Disabled",
        timing: "Sent when content moderation reaches the ban threshold and automatically disables the user account.",
        categoryLabel: "Risk Control"
      },
      "ops.alert": {
        label: "Ops Alert",
        timing: "Sent to ops recipients when an ops monitoring rule fires and email notification settings allow it.",
        categoryLabel: "Ops"
      },
      "ops.scheduled_report": {
        label: "Ops Scheduled Report",
        timing: "Sent when a configured daily, weekly, error digest, or account health report reaches its scheduled send time. Every daily and weekly summary metric is editable in this template.",
        categoryLabel: "Ops"
      }
    };
    function de(H) {
      return typeof H == "string" ? { value: H } : H;
    }
    function Ce(H) {
      if (!H) return null;
      const j = (_.value.toLowerCase().startsWith("zh") ? te : Z)[H.value], fe = (j == null ? void 0 : j.label) || H.label || H.value, xe = (j == null ? void 0 : j.timing) || H.description || "", R = (j == null ? void 0 : j.categoryLabel) || pe(H.category || "");
      return {
        label: fe,
        timing: xe,
        categoryLabel: R,
        optional: H.optional === !0
      };
    }
    function ge(H) {
      const j = Ce(H);
      return j ? j.label : H.label || H.value;
    }
    function pe(H) {
      const j = H.trim().toLowerCase();
      if (!j) return J("通知", "Notification");
      const xe = {
        auth: { zh: "认证安全", en: "Auth" },
        subscription: { zh: "订阅", en: "Subscription" },
        billing: { zh: "计费", en: "Billing" },
        admin: { zh: "管理告警", en: "Admin" },
        risk_control: { zh: "风控", en: "Risk Control" },
        ops: { zh: "运维", en: "Ops" }
      }[j];
      return xe ? J(xe.zh, xe.en) : H;
    }
    const Ve = W(() => M.value.find((H) => H.value === G.value) || null), Pe = W(() => Ce(Ve.value)), Ie = W(() => {
      var H;
      return ((H = Ve.value) == null ? void 0 : H.description) || "";
    }), $e = W(() => {
      const H = me.value.length ? me.value : U;
      return Array.from(
        new Set(
          H.map((j) => Be(j)).filter((j) => j.length > 0)
        )
      );
    });
    function Be(H) {
      const j = H.trim();
      return j ? j.startsWith("{{") && j.endsWith("}}") ? j : `{{${j}}}` : "";
    }
    const Oe = W(
      () => !!(G.value && ie.value) && ye.value.trim().length > 0 && le.value.trim().length > 0
    ), Fe = W(
      () => !!(G.value && ie.value) && le.value.trim().length > 0
    );
    function at(H) {
      const j = H.toLowerCase();
      return j === "zh" || j.startsWith("zh-") ? t("admin.settings.emailTemplates.localeZh") : j === "en" || j.startsWith("en-") ? t("admin.settings.emailTemplates.localeEn") : H;
    }
    function Ue(H) {
      const j = _.value.toLowerCase(), fe = H.find(
        (S) => S.toLowerCase() === j
      );
      if (fe) return fe;
      const xe = j.split("-")[0], R = H.find(
        (S) => S.toLowerCase().split("-")[0] === xe
      );
      return R || H[0] || "";
    }
    function $(H) {
      ye.value = H.subject, le.value = H.html, re.value = H.is_custom === !0, me.value = H.placeholders || [];
    }
    async function X() {
      if (!(!G.value || !ie.value)) {
        z.value = !0;
        try {
          const H = await se.settings.getEmailTemplate(
            G.value,
            ie.value
          );
          $(H), await Q();
        } catch (H) {
          x.showError(nt(H, t("common.error")));
        } finally {
          z.value = !1;
        }
      }
    }
    async function I() {
      var H;
      L.value = !0;
      try {
        const j = await se.settings.getEmailTemplates();
        M.value = j.events.map(de), F.value = j.locales, me.value = j.placeholders || [], Y.value = !0, G.value = ((H = M.value[0]) == null ? void 0 : H.value) || "", ie.value = Ue(j.locales), await X(), Y.value = !1;
      } catch (j) {
        Y.value = !1, x.showError(nt(j, t("common.error")));
      } finally {
        L.value = !1;
      }
    }
    async function he() {
      if (!Oe.value) {
        x.showError(t("admin.settings.emailTemplates.validationRequired"));
        return;
      }
      E.value = !0;
      try {
        const H = await se.settings.updateEmailTemplate(
          G.value,
          ie.value,
          {
            subject: ye.value,
            html: le.value
          }
        );
        $(H), await Q(), x.showSuccess(t("admin.settings.emailTemplates.saveSuccess"));
      } catch (H) {
        x.showError(nt(H, t("common.error")));
      } finally {
        E.value = !1;
      }
    }
    async function Q() {
      if (!Fe.value) {
        we.value = "", ne.value = "";
        return;
      }
      A.value = !0;
      try {
        const H = await se.settings.previewEmailTemplate({
          event: G.value,
          locale: ie.value,
          subject: ye.value,
          html: le.value
        });
        we.value = H.subject, ne.value = H.html;
      } catch (H) {
        x.showError(nt(H, t("common.error")));
      } finally {
        A.value = !1;
      }
    }
    async function _e() {
      if (!(!G.value || !ie.value) && window.confirm(t("admin.settings.emailTemplates.restoreConfirm"))) {
        C.value = !0;
        try {
          const H = await se.settings.restoreOfficialEmailTemplate(
            G.value,
            ie.value
          );
          $(H), await Q(), x.showSuccess(t("admin.settings.emailTemplates.restoreSuccess"));
        } catch (H) {
          x.showError(nt(H, t("common.error")));
        } finally {
          C.value = !1;
        }
      }
    }
    async function De(H) {
      try {
        await navigator.clipboard.writeText(H), x.showSuccess(t("admin.settings.emailTemplates.placeholderCopied"));
      } catch {
        x.showError(t("common.error"));
      }
    }
    return Fn([G, ie], ([H, j], [fe, xe]) => {
      Y.value || !H || !j || H === fe && j === xe || X();
    }), en(() => {
      I();
    }), (H, j) => (r(), d("div", r_, [
      e("div", d_, [
        e("div", null, [
          e("h2", c_, n(a(t)("admin.settings.emailTemplates.title")), 1),
          e("p", u_, n(a(t)("admin.settings.emailTemplates.description")), 1)
        ]),
        e("div", m_, [
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            disabled: z.value || A.value || !Fe.value,
            onClick: Q
          }, n(A.value ? a(t)("admin.settings.emailTemplates.previewing") : a(t)("admin.settings.emailTemplates.preview")), 9, __),
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            disabled: z.value || C.value || !G.value || !ie.value,
            onClick: _e
          }, n(C.value ? a(t)("admin.settings.emailTemplates.restoring") : a(t)("admin.settings.emailTemplates.restoreOfficial")), 9, p_),
          e("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            disabled: z.value || E.value || !Oe.value,
            onClick: he
          }, n(E.value ? a(t)("admin.settings.emailTemplates.saving") : a(t)("admin.settings.emailTemplates.save")), 9, g_)
        ])
      ]),
      e("div", y_, [
        L.value ? (r(), d("div", b_, [
          j[4] || (j[4] = e("span", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
          q(" " + n(a(t)("common.loading")), 1)
        ])) : (r(), d(K, { key: 1 }, [
          e("div", h_, [
            e("div", null, [
              e("label", x_, n(a(t)("admin.settings.emailTemplates.event")), 1),
              p(e("select", {
                id: "email-template-event",
                "onUpdate:modelValue": j[0] || (j[0] = (fe) => G.value = fe),
                class: "input",
                disabled: z.value || M.value.length === 0
              }, [
                (r(!0), d(K, null, ee(M.value, (fe) => (r(), d("option", {
                  key: fe.value,
                  value: fe.value
                }, n(ge(fe)), 9, k_))), 128))
              ], 8, f_), [
                [xt, G.value]
              ])
            ]),
            e("div", null, [
              e("label", v_, n(a(t)("admin.settings.emailTemplates.locale")), 1),
              p(e("select", {
                id: "email-template-locale",
                "onUpdate:modelValue": j[1] || (j[1] = (fe) => ie.value = fe),
                class: "input",
                disabled: z.value || F.value.length === 0
              }, [
                (r(!0), d(K, null, ee(F.value, (fe) => (r(), d("option", {
                  key: fe,
                  value: fe
                }, n(at(fe)), 9, C_))), 128))
              ], 8, w_), [
                [xt, ie.value]
              ])
            ])
          ]),
          Pe.value ? (r(), d("div", S_, [
            e("div", A_, [
              e("div", T_, n(Pe.value.label), 1),
              e("span", U_, n(Pe.value.categoryLabel), 1),
              e("span", {
                class: ce([
                  "rounded-full px-2.5 py-1 text-xs font-medium",
                  Pe.value.optional ? "bg-zo-alert-100 text-zo-alert-800 dark:bg-zo-alert-900/30 dark:text-zo-alert-300" : "bg-zo-signal-100 text-zo-signal-800 dark:bg-zo-signal-900/30 dark:text-zo-signal-300"
                ])
              }, n(Pe.value.optional ? J("可退订通知", "Optional") : J("事务邮件", "Transactional")), 3)
            ]),
            e("p", E_, n(Pe.value.timing), 1),
            Ie.value ? (r(), d("p", V_, n(Ie.value), 1)) : T("", !0)
          ])) : T("", !0),
          !M.value.length || !F.value.length ? (r(), d("div", P_, n(a(t)("admin.settings.emailTemplates.empty")), 1)) : (r(), d("div", $_, [
            e("div", R_, [
              e("div", null, [
                e("label", L_, n(a(t)("admin.settings.emailTemplates.subject")), 1),
                p(e("input", {
                  id: "email-template-subject",
                  "onUpdate:modelValue": j[2] || (j[2] = (fe) => ye.value = fe),
                  type: "text",
                  class: "input",
                  disabled: z.value,
                  placeholder: a(t)("admin.settings.emailTemplates.subjectPlaceholder")
                }, null, 8, M_), [
                  [k, ye.value]
                ])
              ]),
              e("div", null, [
                e("label", D_, n(a(t)("admin.settings.emailTemplates.html")), 1),
                p(e("textarea", {
                  id: "email-template-html",
                  "onUpdate:modelValue": j[3] || (j[3] = (fe) => le.value = fe),
                  rows: "18",
                  class: "input min-h-[28rem] resize-y font-mono text-sm leading-6",
                  disabled: z.value,
                  placeholder: a(t)("admin.settings.emailTemplates.htmlPlaceholder")
                }, null, 8, O_), [
                  [k, le.value]
                ])
              ]),
              e("div", I_, [
                e("div", z_, n(a(t)("admin.settings.emailTemplates.placeholders")), 1),
                e("p", N_, n(a(t)("admin.settings.emailTemplates.placeholdersHelp")), 1),
                e("div", F_, [
                  (r(!0), d(K, null, ee($e.value, (fe) => (r(), d("button", {
                    key: fe,
                    type: "button",
                    class: "rounded-full border border-gray-200 bg-white px-3 py-1 font-mono text-xs text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:text-primary-300",
                    onClick: (xe) => De(fe)
                  }, n(fe), 9, H_))), 128))
                ])
              ])
            ]),
            e("div", B_, [
              e("div", j_, [
                e("div", q_, [
                  e("div", null, [
                    e("div", K_, n(a(t)("admin.settings.emailTemplates.livePreview")), 1),
                    e("div", W_, n(we.value || a(t)("admin.settings.emailTemplates.noPreview")), 1)
                  ]),
                  re.value ? (r(), d("span", G_, n(a(t)("admin.settings.emailTemplates.customized")), 1)) : T("", !0)
                ]),
                e("div", Y_, [
                  e("iframe", {
                    class: "h-[36rem] w-full rounded-md border border-gray-200 bg-white dark:border-dark-700",
                    sandbox: "",
                    srcdoc: ne.value,
                    title: a(t)("admin.settings.emailTemplates.livePreview")
                  }, null, 8, Q_)
                ])
              ]),
              e("p", X_, n(a(t)("admin.settings.emailTemplates.previewSecurityHint")), 1)
            ])
          ]))
        ], 64))
      ])
    ]));
  }
}), Ri = 20, to = 1e3, Z_ = 1e-9;
function ao(u, t = 2) {
  if (!Number.isFinite(u)) return 0;
  const _ = 10 ** t;
  return Math.round((u + Number.EPSILON) * _) / _;
}
function no(u) {
  return Math.abs(ao(u) - u) < Z_;
}
function so(u) {
  return String(u ?? "").trim().toLowerCase() === "discount" ? "discount" : "bonus";
}
function Nn(u) {
  return typeof u == "number" && Number.isFinite(u) && u >= 0 && no(u);
}
function io(u) {
  return typeof u == "number" && Number.isFinite(u) && u >= 0 && u <= to && no(u);
}
function Li(u, t) {
  return io(u) ? t !== "discount" || u < 100 : !1;
}
function Vs(u) {
  return ao(u).toFixed(2);
}
function oo(u) {
  const t = /* @__PURE__ */ new Set(), _ = [];
  for (const x of u) {
    const U = x.min_amount, L = x.bonus_percent;
    if (!Nn(U) || !io(L)) continue;
    const z = Vs(U);
    t.has(z) || (t.add(z), _.push({ min_amount: U, bonus_percent: L }));
  }
  return _.sort((x, U) => x.min_amount - U.min_amount), _;
}
function ep(u) {
  if (!Array.isArray(u)) return [];
  const t = [];
  for (const _ of u) {
    if (!_ || typeof _ != "object") continue;
    const x = _;
    t.push({
      min_amount: x.min_amount === null || x.min_amount === void 0 || x.min_amount === "" ? NaN : Number(x.min_amount),
      bonus_percent: x.bonus_percent === null || x.bonus_percent === void 0 || x.bonus_percent === "" ? NaN : Number(x.bonus_percent)
    });
  }
  return oo(t);
}
function lo(u) {
  return Array.isArray(u) ? oo(
    u.map((t) => ({
      min_amount: (t == null ? void 0 : t.min_amount) === null || (t == null ? void 0 : t.min_amount) === void 0 ? NaN : Number(t.min_amount),
      bonus_percent: (t == null ? void 0 : t.bonus_percent) === null || (t == null ? void 0 : t.bonus_percent) === void 0 ? NaN : Number(t.bonus_percent)
    }))
  ) : [];
}
function tp(u, t) {
  var U;
  const _ = (U = u[t]) == null ? void 0 : U.min_amount;
  if (!Nn(_)) return !1;
  const x = Vs(_);
  return u.some((L, z) => z !== t && Nn(L.min_amount) && Vs(L.min_amount) === x);
}
function ap(u) {
  const t = [...u].sort((x, U) => x.min_amount - U.min_amount), _ = [];
  return t.length === 0 || (t[0].min_amount > 0 && _.push({ from: 0, to: t[0].min_amount, percent: 0 }), t.forEach((x, U) => {
    var L;
    _.push({ from: x.min_amount, to: ((L = t[U + 1]) == null ? void 0 : L.min_amount) ?? null, percent: x.bonus_percent });
  })), _;
}
function vs(u) {
  return Number.isFinite(u) ? String(Number(u.toFixed(2))) : "0";
}
const np = {
  class: "card",
  "data-testid": "recharge-bonus-tier-editor"
}, sp = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, ip = { class: "flex items-center justify-between gap-3" }, op = { class: "min-w-0" }, lp = { class: "text-base font-semibold text-gray-900 dark:text-white" }, rp = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, dp = ["disabled"], cp = { class: "space-y-4 p-4" }, up = { class: "flex flex-wrap items-center gap-x-3 gap-y-2" }, mp = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, _p = {
  class: "inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5 dark:border-dark-600 dark:bg-dark-800",
  role: "group"
}, pp = ["aria-pressed", "data-testid", "onClick"], gp = { class: "text-xs text-gray-400 dark:text-gray-500" }, yp = {
  key: 0,
  class: "rounded-xl border border-dashed border-gray-300 px-4 py-3 text-sm text-gray-500 dark:border-dark-600 dark:text-gray-400"
}, bp = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-gray-200 dark:border-dark-600"
}, hp = { class: "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_2rem] items-center gap-3 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500 dark:bg-dark-800 dark:text-gray-400" }, xp = { class: "divide-y divide-gray-100 dark:divide-dark-700" }, fp = ["value", "onInput"], kp = { class: "relative" }, vp = ["value", "max", "onInput"], wp = ["title", "onClick"], Cp = {
  key: 0,
  class: "col-span-3 -mt-1 text-xs text-red-600 dark:text-red-400",
  "data-testid": "recharge-bonus-tier-error"
}, Sp = {
  key: 1,
  class: "col-span-3 -mt-1 text-xs text-gray-400 dark:text-gray-500",
  "data-testid": "recharge-bonus-tier-incomplete"
}, Ap = {
  key: 2,
  class: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400",
  "data-testid": "recharge-bonus-tier-preview"
}, Tp = { class: "font-medium text-gray-700 dark:text-gray-300" }, Up = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, Ep = { class: "input-label" }, Vp = ["value", "placeholder"], Pp = { class: "mt-1 text-xs text-gray-400" }, $p = /* @__PURE__ */ ft({
  __name: "RechargeBonusTierEditor",
  props: {
    modelValue: {},
    mode: {},
    notice: {}
  },
  emits: ["update:modelValue", "update:mode", "update:notice"],
  setup(u, { emit: t }) {
    const { t: _ } = St(), x = u, U = t, L = W(() => x.modelValue ?? []), z = W(() => so(x.mode)), E = W(() => [
      { value: "bonus", label: _("admin.settings.payment.rechargeBonus.modeBonus") },
      { value: "discount", label: _("admin.settings.payment.rechargeBonus.modeDiscount") }
    ]), A = W(() => ap(lo(L.value)));
    function C(ne) {
      ne !== z.value && U("update:mode", ne);
    }
    function M() {
      return L.value.map((ne) => ({ min_amount: ne.min_amount, bonus_percent: ne.bonus_percent }));
    }
    function F() {
      L.value.length >= Ri || U("update:modelValue", [...M(), { min_amount: null, bonus_percent: null }]);
    }
    function G(ne) {
      const Y = M();
      Y.splice(ne, 1), U("update:modelValue", Y);
    }
    function ie(ne) {
      const Y = ne.target.value;
      if (Y === "") return null;
      const J = Number(Y);
      return Number.isFinite(J) ? J : null;
    }
    function ye(ne, Y) {
      const J = M();
      J[ne].min_amount = ie(Y), U("update:modelValue", J);
    }
    function le(ne, Y) {
      const J = M();
      J[ne].bonus_percent = ie(Y), U("update:modelValue", J);
    }
    function re(ne) {
      const Y = L.value[ne];
      return Y ? Y.min_amount !== null && !Nn(Y.min_amount) ? "invalidMinAmount" : Y.bonus_percent !== null && !Li(Y.bonus_percent, z.value) ? z.value === "discount" && Li(Y.bonus_percent, "bonus") ? "invalidDiscountPercent" : "invalidPercent" : tp(L.value, ne) ? "duplicateMinAmount" : "" : "";
    }
    function me(ne) {
      const Y = L.value[ne];
      return !!Y && (Y.min_amount === null || Y.bonus_percent === null);
    }
    function we(ne) {
      const Y = vs(ne.from), J = vs(ne.percent), te = z.value === "discount";
      if (ne.to === null)
        return ne.percent <= 0 ? _("admin.settings.payment.rechargeBonus.previewOpenNone", { from: Y }) : te ? _("admin.settings.payment.rechargeBonus.previewOpenDiscount", { from: Y, percent: J }) : _("admin.settings.payment.rechargeBonus.previewOpen", { from: Y, percent: J });
      const Z = vs(ne.to);
      return ne.percent <= 0 ? _("admin.settings.payment.rechargeBonus.previewRangeNone", { from: Y, to: Z }) : te ? _("admin.settings.payment.rechargeBonus.previewRangeDiscount", { from: Y, to: Z, percent: J }) : _("admin.settings.payment.rechargeBonus.previewRange", { from: Y, to: Z, percent: J });
    }
    return (ne, Y) => (r(), d("div", np, [
      e("div", sp, [
        e("div", ip, [
          e("div", op, [
            e("h2", lp, n(a(_)("admin.settings.payment.rechargeBonus.label")), 1),
            e("p", rp, n(a(_)("admin.settings.payment.rechargeBonus.hint")), 1)
          ]),
          e("button", {
            type: "button",
            class: "btn btn-primary btn-sm shrink-0",
            disabled: L.value.length >= a(Ri),
            "data-testid": "recharge-bonus-tier-add",
            onClick: F
          }, [
            v(Ae, {
              name: "plus",
              size: "sm",
              class: "mr-1"
            }),
            q(" " + n(a(_)("admin.settings.payment.rechargeBonus.addTier")), 1)
          ], 8, dp)
        ])
      ]),
      e("div", cp, [
        e("div", up, [
          e("span", mp, n(a(_)("admin.settings.payment.rechargeBonus.modeLabel")), 1),
          e("div", _p, [
            (r(!0), d(K, null, ee(E.value, (J) => (r(), d("button", {
              key: J.value,
              type: "button",
              class: ce([
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                z.value === J.value ? "bg-white text-gray-900 shadow-sm dark:bg-dark-700 dark:text-white" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              ]),
              "aria-pressed": z.value === J.value,
              "data-testid": `recharge-bonus-mode-${J.value}`,
              onClick: (te) => C(J.value)
            }, n(J.label), 11, pp))), 128))
          ]),
          e("span", gp, n(z.value === "discount" ? a(_)("admin.settings.payment.rechargeBonus.modeDiscountHint") : a(_)("admin.settings.payment.rechargeBonus.modeBonusHint")), 1)
        ]),
        L.value.length === 0 ? (r(), d("div", yp, n(a(_)("admin.settings.payment.rechargeBonus.empty")), 1)) : (r(), d("div", bp, [
          e("div", hp, [
            e("span", null, n(a(_)("admin.settings.payment.rechargeBonus.minAmountLabel")), 1),
            e("span", null, n(z.value === "discount" ? a(_)("admin.settings.payment.rechargeBonus.percentLabelDiscount") : a(_)("admin.settings.payment.rechargeBonus.percentLabel")), 1),
            Y[1] || (Y[1] = e("span", null, null, -1))
          ]),
          e("div", xp, [
            (r(!0), d(K, null, ee(L.value, (J, te) => (r(), d("div", {
              key: te,
              class: "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_2rem] items-center gap-3 px-3 py-2",
              "data-testid": "recharge-bonus-tier-row"
            }, [
              e("input", {
                value: J.min_amount ?? "",
                type: "number",
                step: "0.01",
                min: "0",
                class: "input py-2",
                placeholder: "100",
                "data-testid": "recharge-bonus-tier-min-input",
                onInput: (Z) => ye(te, Z)
              }, null, 40, fp),
              e("div", kp, [
                e("input", {
                  value: J.bonus_percent ?? "",
                  type: "number",
                  step: "0.01",
                  min: "0",
                  max: z.value === "discount" ? 99.99 : a(to),
                  class: ce(["input py-2", z.value === "discount" ? "pr-16" : "pr-8"]),
                  placeholder: "20",
                  "data-testid": "recharge-bonus-tier-percent-input",
                  onInput: (Z) => le(te, Z)
                }, null, 42, vp),
                e("span", {
                  class: ce(["pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xs font-medium", z.value === "discount" ? "text-red-600 dark:text-red-400" : "text-gray-400"])
                }, n(z.value === "discount" ? "% OFF" : "%"), 3)
              ]),
              e("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-dark-700 dark:hover:text-red-400",
                title: a(_)("admin.settings.payment.rechargeBonus.removeTier"),
                "data-testid": "recharge-bonus-tier-remove",
                onClick: (Z) => G(te)
              }, [
                v(Ae, {
                  name: "x",
                  size: "sm"
                })
              ], 8, wp),
              re(te) ? (r(), d("p", Cp, n(a(_)(`admin.settings.payment.rechargeBonus.${re(te)}`)), 1)) : me(te) ? (r(), d("p", Sp, n(a(_)("admin.settings.payment.rechargeBonus.incompleteRow")), 1)) : T("", !0)
            ]))), 128))
          ])
        ])),
        A.value.length > 0 ? (r(), d("p", Ap, [
          e("span", Tp, n(a(_)("admin.settings.payment.rechargeBonus.previewTitle")), 1),
          (r(!0), d(K, null, ee(A.value, (J, te) => (r(), d("span", {
            key: te,
            class: "rounded-md bg-gray-100 px-2 py-0.5 dark:bg-dark-700"
          }, n(we(J)), 1))), 128))
        ])) : T("", !0),
        e("div", Up, [
          e("label", Ep, n(a(_)("admin.settings.payment.rechargeBonus.noticeLabel")), 1),
          e("textarea", {
            value: u.notice ?? "",
            rows: "3",
            class: "input",
            placeholder: a(_)("admin.settings.payment.rechargeBonus.noticePlaceholder"),
            "data-testid": "recharge-bonus-notice-input",
            onInput: Y[0] || (Y[0] = (J) => U("update:notice", J.target.value))
          }, null, 40, Vp),
          e("p", Pp, n(a(_)("admin.settings.payment.rechargeBonus.noticeHint")), 1)
        ])
      ])
    ]));
  }
}), Rp = {
  key: 0,
  class: "mb-2 flex flex-wrap gap-2"
}, Lp = ["title"], Mp = { class: "shrink-0 text-gray-400" }, Dp = {
  key: 0,
  class: "shrink-0 text-gray-400"
}, Op = ["aria-label", "title", "onClick"], Ip = { class: "relative" }, zp = ["placeholder"], Np = {
  key: 1,
  class: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-600 dark:bg-dark-700"
}, Fp = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Hp = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-500 dark:text-gray-400"
}, Bp = ["onClick"], jp = { class: "min-w-0 truncate font-medium text-gray-900 dark:text-white" }, qp = {
  key: 0,
  class: "ml-1 text-xs font-normal text-gray-400"
}, Kp = { class: "shrink-0 text-xs text-gray-400" }, Wp = /* @__PURE__ */ ft({
  __name: "OpenAIFastPolicyUserSelector",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const _ = u, x = t, { t: U } = St(), L = O(null), z = O(""), E = O([]), A = O(!1), C = O(!1), M = O({});
    let F = null, G = 0;
    const ie = W(
      () => Array.from(new Set(_.modelValue.filter((te) => Number.isInteger(te) && te > 0)))
    ), ye = W(() => {
      const te = new Set(ie.value);
      return E.value.filter((Z) => !te.has(Z.id)).sort((Z, de) => Number(Z.deleted) - Number(de.deleted));
    });
    function le(te) {
      var Z;
      return ((Z = M.value[te]) == null ? void 0 : Z.email) || U("admin.settings.openaiFastPolicy.userIdFallback", { id: te });
    }
    function re() {
      F && (clearTimeout(F), F = null), G += 1;
    }
    function me() {
      re();
      const te = z.value.trim();
      if (C.value = !0, !te) {
        E.value = [], A.value = !1;
        return;
      }
      const Z = G;
      F = setTimeout(async () => {
        A.value = !0;
        try {
          const de = await se.usage.searchUsers(te);
          Z === G && (E.value = de);
        } catch {
          Z === G && (E.value = []);
        } finally {
          Z === G && (A.value = !1);
        }
      }, 300);
    }
    function we(te) {
      M.value = { ...M.value, [te.id]: te }, x("update:modelValue", [...ie.value, te.id]), re(), z.value = "", E.value = [], A.value = !1, C.value = !1;
    }
    function ne(te) {
      x(
        "update:modelValue",
        ie.value.filter((Z) => Z !== te)
      );
    }
    async function Y(te) {
      const Z = te.filter((ge) => !M.value[ge]);
      if (Z.length === 0) return;
      const de = await Promise.all(
        Z.map(async (ge) => {
          try {
            const pe = await se.users.getById(ge, !0);
            return {
              id: pe.id,
              email: pe.email,
              deleted: !!pe.deleted_at
            };
          } catch {
            return null;
          }
        })
      ), Ce = { ...M.value };
      for (const ge of de)
        ge && _.modelValue.includes(ge.id) && (Ce[ge.id] = ge);
      M.value = Ce;
    }
    function J(te) {
      var de;
      const Z = te.target;
      Z && !((de = L.value) != null && de.contains(Z)) && (C.value = !1);
    }
    return Fn(
      ie,
      (te) => {
        Y(te);
      },
      { immediate: !0 }
    ), en(() => {
      document.addEventListener("click", J);
    }), Rl(() => {
      re(), document.removeEventListener("click", J);
    }), (te, Z) => (r(), d("div", {
      ref_key: "containerRef",
      ref: L,
      class: "relative"
    }, [
      ie.value.length > 0 ? (r(), d("div", Rp, [
        (r(!0), d(K, null, ee(ie.value, (de) => {
          var Ce;
          return r(), d("span", {
            key: de,
            class: "inline-flex max-w-full items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-700 dark:bg-dark-600 dark:text-gray-200"
          }, [
            e("span", {
              class: "max-w-64 truncate font-medium",
              title: le(de)
            }, n(le(de)), 9, Lp),
            e("span", Mp, "#" + n(de), 1),
            (Ce = M.value[de]) != null && Ce.deleted ? (r(), d("span", Dp, n(a(U)("admin.settings.openaiFastPolicy.userDeleted")), 1)) : T("", !0),
            e("button", {
              type: "button",
              class: "shrink-0 rounded text-gray-400 hover:text-red-600 dark:hover:text-red-400",
              "aria-label": a(U)("admin.settings.openaiFastPolicy.removeUser"),
              title: a(U)("admin.settings.openaiFastPolicy.removeUser"),
              onClick: (ge) => ne(de)
            }, [
              v(Ae, {
                name: "x",
                size: "xs",
                "stroke-width": 2
              })
            ], 8, Op)
          ]);
        }), 128))
      ])) : T("", !0),
      e("div", Ip, [
        v(Ae, {
          name: "search",
          size: "sm",
          class: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        }),
        p(e("input", {
          "onUpdate:modelValue": Z[0] || (Z[0] = (de) => z.value = de),
          type: "text",
          autocomplete: "off",
          class: "input input-sm w-full pl-9",
          placeholder: a(U)("admin.settings.openaiFastPolicy.userSearchPlaceholder"),
          onInput: me,
          onFocus: Z[1] || (Z[1] = (de) => C.value = !0)
        }, null, 40, zp), [
          [k, z.value]
        ])
      ]),
      C.value && z.value.trim() ? (r(), d("div", Np, [
        A.value ? (r(), d("div", Fp, n(a(U)("common.loading")), 1)) : ye.value.length === 0 ? (r(), d("div", Hp, n(a(U)("admin.settings.openaiFastPolicy.userSearchEmpty")), 1)) : (r(!0), d(K, { key: 2 }, ee(ye.value, (de) => (r(), d("button", {
          key: de.id,
          type: "button",
          class: "flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-600",
          onClick: (Ce) => we(de)
        }, [
          e("span", jp, [
            q(n(de.email) + " ", 1),
            de.deleted ? (r(), d("span", qp, n(a(U)("admin.settings.openaiFastPolicy.userDeleted")), 1)) : T("", !0)
          ]),
          e("span", Kp, "#" + n(de.id), 1)
        ], 8, Bp))), 128))
      ])) : T("", !0)
    ], 512));
  }
}), Gp = {}, Yp = { class: "space-y-6" };
function Qp(u, t) {
  return r(), d("div", Yp, [
    Bt(u.$slots, "default")
  ]);
}
const Mi = /* @__PURE__ */ gt(Gp, [["render", Qp]]), Xp = {}, Jp = { class: "space-y-6" };
function Zp(u, t) {
  return r(), d("div", Jp, [
    Bt(u.$slots, "default")
  ]);
}
const Di = /* @__PURE__ */ gt(Xp, [["render", Zp]]), eg = {}, tg = { class: "space-y-6" };
function ag(u, t) {
  return r(), d("div", tg, [
    Bt(u.$slots, "default")
  ]);
}
const ng = /* @__PURE__ */ gt(eg, [["render", ag]]), sg = {}, ig = { class: "space-y-6" };
function og(u, t) {
  return r(), d("div", ig, [
    Bt(u.$slots, "default")
  ]);
}
const lg = /* @__PURE__ */ gt(sg, [["render", og]]), rg = {}, dg = { class: "space-y-6" };
function cg(u, t) {
  return r(), d("div", dg, [
    Bt(u.$slots, "default")
  ]);
}
const ug = /* @__PURE__ */ gt(rg, [["render", cg]]), mg = {}, _g = { class: "space-y-6" };
function pg(u, t) {
  return r(), d("div", _g, [
    Bt(u.$slots, "default")
  ]);
}
const gg = /* @__PURE__ */ gt(mg, [["render", pg]]), yg = {}, bg = { class: "space-y-6" };
function hg(u, t) {
  return r(), d("div", bg, [
    Bt(u.$slots, "default")
  ]);
}
const xg = /* @__PURE__ */ gt(yg, [["render", hg]]), fg = {}, kg = { class: "space-y-6" };
function vg(u, t) {
  return r(), d("div", kg, [
    Bt(u.$slots, "default")
  ]);
}
const wg = /* @__PURE__ */ gt(fg, [["render", vg]]), Cg = {};
function Sg(u, t) {
  return r(), d("div", null, [
    Bt(u.$slots, "default")
  ]);
}
const Ag = /* @__PURE__ */ gt(Cg, [["render", Sg]]), Ea = "/admin/settings/admin-api-keys";
async function Tg() {
  return (await Ua.get(Ea)).data;
}
async function Ug(u) {
  return (await Ua.post(Ea, u)).data;
}
async function Oi(u, t) {
  return (await Ua.put(`${Ea}/${encodeURIComponent(u)}`, t)).data;
}
async function Eg(u) {
  return (await Ua.post(`${Ea}/${encodeURIComponent(u)}/rotate`)).data;
}
async function Vg(u) {
  return (await Ua.delete(`${Ea}/${encodeURIComponent(u)}`)).data;
}
async function Pg(u) {
  return (await Ua.delete(`${Ea}/${encodeURIComponent(u)}/record`)).data;
}
const $g = ["aria-label"], Rg = { class: "text-lg font-semibold" }, Lg = { class: "text-sm text-gray-500 dark:text-gray-400" }, Mg = { class: "rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-200" }, Dg = {
  key: 0,
  role: "alert",
  class: "text-sm text-red-600 dark:text-red-400"
}, Og = {
  key: 1,
  role: "status",
  class: "text-sm text-green-700 dark:text-green-400"
}, Ig = {
  key: 2,
  class: "space-y-2 rounded-lg border border-amber-300 p-4"
}, zg = { class: "block select-all break-all" }, Ng = { class: "flex flex-wrap gap-2" }, Fg = ["disabled"], Hg = ["disabled"], Bg = { key: 3 }, jg = {
  key: 4,
  class: "rounded-lg bg-gray-50 p-4 text-sm dark:bg-dark-900",
  "data-testid": "admin-access-keys-empty"
}, qg = { class: "font-medium text-gray-900 dark:text-gray-100" }, Kg = { class: "mt-1 text-gray-600 dark:text-gray-300" }, Wg = { class: "break-all font-medium text-gray-900 dark:text-gray-100" }, Gg = { class: "text-sm text-gray-500 dark:text-gray-400" }, Yg = { class: "text-sm text-gray-500 dark:text-gray-400" }, Qg = ["aria-label"], Xg = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, Jg = ["disabled", "onClick"], Zg = ["disabled", "onClick"], e0 = ["disabled", "onClick"], t0 = ["disabled", "onClick"], a0 = { key: 1 }, n0 = ["disabled", "onClick"], s0 = {
  key: 5,
  class: "space-y-4 rounded-lg border border-gray-200 p-4 dark:border-dark-700"
}, i0 = { class: "font-semibold" }, o0 = { class: "block" }, l0 = { class: "block" }, r0 = { class: "block" }, d0 = { class: "block" }, c0 = { class: "flex gap-2" }, u0 = { class: "flex gap-2" }, m0 = ["onUpdate:modelValue"], _0 = { class: "block" }, p0 = ["onUpdate:modelValue", "data-test", "disabled"], g0 = ["value"], y0 = { class: "flex gap-2" }, b0 = ["onUpdate:modelValue"], h0 = { class: "flex flex-wrap gap-4" }, x0 = ["onUpdate:modelValue", "value"], f0 = { class: "block" }, k0 = ["onUpdate:modelValue"], v0 = ["value"], w0 = { class: "grid gap-2 sm:grid-cols-2" }, C0 = ["onUpdate:modelValue", "value"], S0 = { class: "text-xs text-gray-500 dark:text-gray-400" }, A0 = {
  key: 0,
  class: "space-y-2 rounded border border-amber-300 p-3"
}, T0 = { class: "text-sm text-amber-700 dark:text-amber-300" }, U0 = { class: "grid gap-2 sm:grid-cols-2" }, E0 = ["onUpdate:modelValue", "value"], V0 = { class: "text-xs text-gray-500 dark:text-gray-400" }, P0 = ["onClick"], $0 = { class: "space-y-3 rounded-lg border border-amber-300 p-3" }, R0 = { class: "text-sm font-medium" }, L0 = ["value"], M0 = { class: "text-xs text-gray-500 dark:text-gray-400" }, D0 = { class: "flex gap-2" }, O0 = ["disabled"], I0 = ["disabled"], z0 = /* @__PURE__ */ ft({
  __name: "AdminAccessKeysSettings",
  setup(u) {
    const { t } = St(), _ = Ls(), x = O([]), U = O([]), L = O([]), z = O(!1), E = O(!1), A = O(!1), C = O(""), M = O(""), F = O(""), G = O(null), ie = O(""), ye = O(""), le = O(""), re = O(""), me = ["oauth", "setup-token", "apikey", "upstream", "bedrock", "service_account"], we = W(() => U.value.filter(($) => $.scope === "account")), ne = W(() => U.value.filter(($) => $.scope === "group")), Y = W(() => {
      const $ = /* @__PURE__ */ new Map();
      for (const X of U.value.filter((I) => I.scope === "global")) {
        const I = X.category || t("adminAccessKeys.other");
        $.set(I, [...$.get(I) || [], X]);
      }
      return Array.from($, ([X, I]) => ({ name: X, permissions: I }));
    });
    function J($) {
      var X, I;
      return { ...$, allowed_ips: $.allowed_ips ?? [], policy: {
        global_permissions: ((X = $.policy) == null ? void 0 : X.global_permissions) ?? [],
        rules: (((I = $.policy) == null ? void 0 : I.rules) ?? []).map((he) => ({
          ...he,
          permissions: he.permissions ?? [],
          group_ids: he.group_ids ?? [],
          account_types: he.account_types ?? [],
          platforms: he.platforms ?? []
        }))
      } };
    }
    function te($) {
      const I = ($.all_groups ? t("adminAccessKeys.allGroupsSummary") : $.group_ids.map((_e) => {
        var De;
        return ((De = L.value.find((H) => H.id === _e)) == null ? void 0 : De.name) || t("adminAccessKeys.groupFallback", { id: _e });
      }).join("、") || t("adminAccessKeys.noGroups")) + ($.include_ungrouped ? t("adminAccessKeys.ungroupedSummary") : ""), he = $.account_types.join("、") || t("adminAccessKeys.noAccountTypes"), Q = $.platforms.join("、") || t("adminAccessKeys.anyPlatform");
      return t("adminAccessKeys.ruleSummary", { groups: I, types: he, platforms: Q, count: $.permissions.length });
    }
    function Z() {
      return { permissions: [], group_ids: [], all_groups: !1, include_ungrouped: !1, account_types: [], platforms: [] };
    }
    function de($) {
      Ht($) || (C.value = ($ == null ? void 0 : $.message) || t("adminAccessKeys.operationFailed"));
    }
    async function Ce() {
      z.value = !0, E.value = !1, C.value = "";
      try {
        const [$, X] = await Promise.all([Tg(), Il()]);
        x.value = ($.items ?? []).map(J), U.value = $.permissions ?? [], L.value = X ?? [], E.value = !0;
      } catch ($) {
        de($);
      } finally {
        z.value = !1;
      }
    }
    function ge($) {
      C.value = "", M.value = "", F.value = "", ie.value = ($ == null ? void 0 : $.id) || "", G.value = $ ? JSON.parse(JSON.stringify({ name: $.name, description: $.description, enabled: $.enabled, expires_at: $.expires_at, allowed_ips: $.allowed_ips, policy: $.policy })) : { name: "", description: "", enabled: !0, expires_at: null, allowed_ips: [], policy: { rules: [Z()], global_permissions: [] } };
      const X = $ != null && $.expires_at ? new Date($.expires_at) : null;
      ye.value = X ? new Date(X.getTime() - X.getTimezoneOffset() * 6e4).toISOString().slice(0, 16) : "", le.value = ye.value, re.value = ($ == null ? void 0 : $.allowed_ips.join(`
`)) || "";
    }
    async function pe($) {
      if (!A.value) {
        A.value = !0, C.value = "", M.value = "", F.value = "";
        try {
          await _.run($);
        } catch (X) {
          de(X);
        } finally {
          A.value = !1;
        }
      }
    }
    function Ve($) {
      x.value = [J($), ...x.value.filter((X) => X.id !== $.id)];
    }
    async function Pe() {
      if (!G.value || A.value || !E.value) return;
      if (!G.value.name.trim()) {
        C.value = t("adminAccessKeys.nameRequired");
        return;
      }
      const $ = ye.value ? new Date(ye.value) : null;
      if ($ && !Number.isFinite($.getTime())) {
        C.value = t("adminAccessKeys.expirationInvalid");
        return;
      }
      const X = JSON.parse(JSON.stringify(G.value));
      X.name = X.name.trim(), ye.value !== le.value && (X.expires_at = ($ == null ? void 0 : $.toISOString()) || null), X.allowed_ips = re.value.split(/[\n,]/).map((I) => I.trim()).filter(Boolean), await pe(async () => {
        if (ie.value) Ve(await Oi(ie.value, X));
        else {
          const I = await Ug(X);
          Ve(I.item), F.value = I.key;
        }
        G.value = null, M.value = t("adminAccessKeys.saved");
      });
    }
    async function Ie($) {
      await pe(async () => {
        Ve(await Oi($.id, { name: $.name, description: $.description, enabled: !$.enabled, expires_at: $.expires_at, allowed_ips: $.allowed_ips, policy: $.policy })), M.value = t("adminAccessKeys.statusUpdated");
      });
    }
    async function $e($) {
      confirm(t("adminAccessKeys.rotateConfirm", { name: $.name })) && await pe(async () => {
        const X = await Eg($.id);
        Ve(X.item), F.value = X.key, M.value = t("adminAccessKeys.rotated");
      });
    }
    async function Be($) {
      confirm(t("adminAccessKeys.revokeConfirm", { name: $.name })) && await pe(async () => {
        await Vg($.id), Ve({ ...$, enabled: !1, revoked_at: (/* @__PURE__ */ new Date()).toISOString() }), ie.value === $.id && (G.value = null), M.value = t("adminAccessKeys.revoked");
      });
    }
    async function Oe($) {
      A.value || !$.revoked_at || confirm(t("adminAccessKeys.deleteConfirm", { name: $.name })) && await pe(async () => {
        await Pg($.id), x.value = x.value.filter((X) => X.id !== $.id), ie.value === $.id && (G.value = null), M.value = t("adminAccessKeys.removed");
      });
    }
    async function Fe() {
      try {
        await navigator.clipboard.writeText(F.value), M.value = t("adminAccessKeys.copied");
      } catch {
        C.value = t("adminAccessKeys.copyFailed");
      }
    }
    function at($) {
      return $.revoked_at ? t("adminAccessKeys.statusRevoked") : $.enabled ? $.expires_at && new Date($.expires_at).getTime() <= Date.now() ? t("adminAccessKeys.statusExpired") : t("adminAccessKeys.statusEnabled") : t("adminAccessKeys.statusDisabled");
    }
    en(Ce);
    function Ue($) {
      $.key !== "Enter" || !($.target instanceof HTMLInputElement) || ($.preventDefault(), $.stopPropagation(), $.target.dataset.test === "name" && Pe());
    }
    return ($, X) => (r(), d("section", {
      class: "admin-access-keys card space-y-4 p-6",
      "aria-label": a(t)("adminAccessKeys.title"),
      onKeydown: Ue
    }, [
      e("h2", Rg, n(a(t)("adminAccessKeys.title")), 1),
      e("p", Lg, n(a(t)("adminAccessKeys.authorizationHint")), 1),
      e("p", Mg, n(a(t)("adminAccessKeys.sharedAccountWarning")), 1),
      C.value ? (r(), d("p", Dg, n(C.value), 1)) : T("", !0),
      M.value ? (r(), d("p", Og, n(M.value), 1)) : T("", !0),
      F.value ? (r(), d("div", Ig, [
        e("p", null, n(a(t)("adminAccessKeys.secretWarning")), 1),
        e("code", zg, n(F.value), 1),
        e("button", {
          type: "button",
          class: "btn btn-secondary btn-sm",
          onClick: Fe
        }, n(a(t)("adminAccessKeys.copySecret")), 1),
        e("button", {
          type: "button",
          "data-test": "dismiss-secret",
          class: "btn btn-secondary btn-sm",
          onClick: X[0] || (X[0] = (I) => F.value = "")
        }, n(a(t)("adminAccessKeys.dismissSecret")), 1)
      ])) : T("", !0),
      e("div", Ng, [
        e("button", {
          type: "button",
          "data-test": "create",
          class: "btn btn-primary",
          disabled: A.value || z.value || !E.value,
          onClick: X[1] || (X[1] = (I) => ge())
        }, n(a(t)("adminAccessKeys.create")), 9, Fg),
        e("button", {
          type: "button",
          class: "btn btn-secondary",
          disabled: A.value || z.value,
          onClick: Ce
        }, n(a(t)("adminAccessKeys.refresh")), 9, Hg)
      ]),
      z.value ? (r(), d("p", Bg, n(a(t)("adminAccessKeys.loading")), 1)) : E.value && x.value.length === 0 ? (r(), d("div", jg, [
        e("p", qg, n(a(t)("adminAccessKeys.empty")), 1),
        e("p", Kg, n(a(t)("adminAccessKeys.emptyHint")), 1)
      ])) : T("", !0),
      (r(!0), d(K, null, ee(x.value, (I) => (r(), d("div", {
        key: I.id,
        class: "min-w-0 space-y-2 border-t border-gray-200 py-4 dark:border-dark-700",
        "data-testid": "admin-access-key-row"
      }, [
        e("p", Wg, [
          q(n(I.name) + " ", 1),
          e("code", null, n(I.key_prefix) + "…", 1),
          q(" · " + n(at(I)), 1)
        ]),
        e("p", Gg, n(I.description || a(t)("adminAccessKeys.noDescription")) + " · " + n(a(t)("adminAccessKeys.expires", { value: I.expires_at || a(t)("adminAccessKeys.never") })), 1),
        e("p", Yg, n(a(t)("adminAccessKeys.lastUsed", { value: I.last_used_at || a(t)("adminAccessKeys.neverUsed") })) + " " + n(I.last_used_ip), 1),
        e("div", {
          class: "space-y-1 text-sm text-gray-500 dark:text-gray-400",
          "aria-label": a(t)("adminAccessKeys.summaryLabel")
        }, [
          e("p", null, n(a(t)("adminAccessKeys.summary", { globals: I.policy.global_permissions.length, rules: I.policy.rules.length })), 1),
          (r(!0), d(K, null, ee(I.policy.rules, (he, Q) => (r(), d("p", { key: Q }, n(a(t)("adminAccessKeys.ruleLine", { index: Q + 1, summary: te(he) })), 1))), 128))
        ], 8, Qg),
        I.revoked_at ? (r(), d("div", a0, [
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm text-red-600",
            disabled: A.value,
            onClick: (he) => Oe(I)
          }, n(a(t)("adminAccessKeys.deleteRecord")), 9, n0)
        ])) : (r(), d("div", Xg, [
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            disabled: A.value || !E.value,
            onClick: (he) => ge(I)
          }, n(a(t)("adminAccessKeys.editPermissions")), 9, Jg),
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            disabled: A.value,
            onClick: (he) => Ie(I)
          }, n(I.enabled ? a(t)("adminAccessKeys.disable") : a(t)("adminAccessKeys.enable")), 9, Zg),
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            disabled: A.value,
            onClick: (he) => $e(I)
          }, n(a(t)("adminAccessKeys.rotate")), 9, e0),
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm text-red-600",
            disabled: A.value,
            onClick: (he) => Be(I)
          }, n(a(t)("adminAccessKeys.revoke")), 9, t0)
        ]))
      ]))), 128)),
      G.value ? (r(), d("div", s0, [
        e("h3", i0, n(ie.value ? a(t)("adminAccessKeys.editTitle") : a(t)("adminAccessKeys.createTitle")), 1),
        e("label", o0, [
          q(n(a(t)("adminAccessKeys.name")), 1),
          p(e("input", {
            "onUpdate:modelValue": X[2] || (X[2] = (I) => G.value.name = I),
            "data-test": "name",
            class: "input mt-1",
            maxlength: "100"
          }, null, 512), [
            [k, G.value.name]
          ])
        ]),
        e("label", l0, [
          q(n(a(t)("adminAccessKeys.description")), 1),
          p(e("textarea", {
            "onUpdate:modelValue": X[3] || (X[3] = (I) => G.value.description = I),
            class: "input mt-1",
            maxlength: "1000"
          }, null, 512), [
            [k, G.value.description]
          ])
        ]),
        e("label", r0, [
          q(n(a(t)("adminAccessKeys.expiration")), 1),
          p(e("input", {
            "onUpdate:modelValue": X[4] || (X[4] = (I) => ye.value = I),
            type: "datetime-local",
            class: "input mt-1"
          }, null, 512), [
            [k, ye.value]
          ])
        ]),
        e("label", d0, [
          q(n(a(t)("adminAccessKeys.allowedIps")), 1),
          p(e("textarea", {
            "onUpdate:modelValue": X[5] || (X[5] = (I) => re.value = I),
            class: "input mt-1",
            placeholder: `192.0.2.1
2001:db8::/32`
          }, null, 512), [
            [k, re.value]
          ])
        ]),
        e("label", c0, [
          p(e("input", {
            "onUpdate:modelValue": X[6] || (X[6] = (I) => G.value.enabled = I),
            type: "checkbox"
          }, null, 512), [
            [tt, G.value.enabled]
          ]),
          q(n(a(t)("adminAccessKeys.enabled")), 1)
        ]),
        (r(!0), d(K, null, ee(G.value.policy.rules, (I, he) => (r(), d("fieldset", {
          key: he,
          class: "space-y-3 rounded-lg border border-gray-200 p-3 dark:border-dark-700"
        }, [
          e("legend", null, n(a(t)("adminAccessKeys.ruleLegend", { index: he + 1 })), 1),
          e("label", u0, [
            p(e("input", {
              "onUpdate:modelValue": (Q) => I.all_groups = Q,
              type: "checkbox"
            }, null, 8, m0), [
              [tt, I.all_groups]
            ]),
            q(n(a(t)("adminAccessKeys.allGroups")), 1)
          ]),
          e("label", _0, [
            q(n(a(t)("adminAccessKeys.groups")), 1),
            p(e("select", {
              "onUpdate:modelValue": (Q) => I.group_ids = Q,
              "data-test": `groups-${he}`,
              multiple: "",
              class: "input mt-1",
              disabled: I.all_groups
            }, [
              (r(!0), d(K, null, ee(L.value, (Q) => (r(), d("option", {
                key: Q.id,
                value: Q.id
              }, n(Q.name), 9, g0))), 128))
            ], 8, p0), [
              [xt, I.group_ids]
            ])
          ]),
          e("label", y0, [
            p(e("input", {
              "onUpdate:modelValue": (Q) => I.include_ungrouped = Q,
              type: "checkbox"
            }, null, 8, b0), [
              [tt, I.include_ungrouped]
            ]),
            q(n(a(t)("adminAccessKeys.includeUngrouped")), 1)
          ]),
          e("div", null, [
            q(n(a(t)("adminAccessKeys.accountTypes")), 1),
            e("div", h0, [
              (r(), d(K, null, ee(me, (Q) => e("label", {
                key: Q,
                class: "flex gap-2"
              }, [
                p(e("input", {
                  "onUpdate:modelValue": (_e) => I.account_types = _e,
                  type: "checkbox",
                  value: Q
                }, null, 8, x0), [
                  [tt, I.account_types]
                ]),
                q(n(Q), 1)
              ])), 64))
            ])
          ]),
          e("label", f0, [
            q(n(a(t)("adminAccessKeys.platforms")), 1),
            p(e("select", {
              "onUpdate:modelValue": (Q) => I.platforms = Q,
              multiple: "",
              class: "input mt-1"
            }, [
              (r(!0), d(K, null, ee(a(Ol), (Q) => (r(), d("option", {
                key: Q.value,
                value: Q.value
              }, n(Q.label), 9, v0))), 128))
            ], 8, k0), [
              [xt, I.platforms]
            ])
          ]),
          e("div", null, [
            q(n(a(t)("adminAccessKeys.accountOperations")), 1),
            e("div", w0, [
              (r(!0), d(K, null, ee(we.value, (Q) => (r(), d("label", {
                key: Q.id,
                class: "flex gap-2"
              }, [
                p(e("input", {
                  "onUpdate:modelValue": (_e) => I.permissions = _e,
                  type: "checkbox",
                  value: Q.id
                }, null, 8, C0), [
                  [tt, I.permissions]
                ]),
                q(n(Q.label) + " ", 1),
                e("span", S0, n(Q.id), 1)
              ]))), 128))
            ])
          ]),
          ne.value.length ? (r(), d("div", A0, [
            e("p", null, n(a(t)("adminAccessKeys.groupOperations")), 1),
            e("p", T0, n(a(t)("adminAccessKeys.modelAllowlistHint")), 1),
            e("div", U0, [
              (r(!0), d(K, null, ee(ne.value, (Q) => (r(), d("label", {
                key: Q.id,
                class: "flex gap-2"
              }, [
                p(e("input", {
                  "onUpdate:modelValue": (_e) => I.permissions = _e,
                  type: "checkbox",
                  value: Q.id
                }, null, 8, E0), [
                  [tt, I.permissions]
                ]),
                q(n(Q.label) + " ", 1),
                e("span", V0, n(Q.id), 1)
              ]))), 128))
            ])
          ])) : T("", !0),
          e("button", {
            type: "button",
            class: "btn btn-secondary btn-sm",
            onClick: (Q) => G.value.policy.rules.splice(he, 1)
          }, n(a(t)("adminAccessKeys.removeRule")), 9, P0)
        ]))), 128)),
        e("button", {
          type: "button",
          "data-test": "add-rule",
          class: "btn btn-secondary btn-sm",
          onClick: X[7] || (X[7] = (I) => G.value.policy.rules.push(Z()))
        }, n(a(t)("adminAccessKeys.addRule")), 1),
        e("fieldset", $0, [
          e("legend", null, n(a(t)("adminAccessKeys.globalPermissions")), 1),
          (r(!0), d(K, null, ee(Y.value, (I) => (r(), d("fieldset", {
            key: I.name,
            class: "space-y-2 rounded border border-gray-200 p-3 dark:border-dark-700"
          }, [
            e("legend", R0, n(I.name), 1),
            (r(!0), d(K, null, ee(I.permissions, (he) => (r(), d("label", {
              key: he.id,
              class: "flex gap-2"
            }, [
              p(e("input", {
                "onUpdate:modelValue": X[8] || (X[8] = (Q) => G.value.policy.global_permissions = Q),
                type: "checkbox",
                value: he.id
              }, null, 8, L0), [
                [tt, G.value.policy.global_permissions]
              ]),
              q(n(he.label) + " ", 1),
              e("span", M0, n(he.id), 1)
            ]))), 128))
          ]))), 128))
        ]),
        e("div", D0, [
          e("button", {
            type: "button",
            "data-test": "save",
            class: "btn btn-primary",
            disabled: A.value,
            onClick: Pe
          }, n(A.value ? a(t)("adminAccessKeys.processing") : a(t)("adminAccessKeys.save")), 9, O0),
          e("button", {
            type: "button",
            class: "btn btn-secondary",
            disabled: A.value,
            onClick: X[9] || (X[9] = (I) => G.value = null)
          }, n(a(t)("adminAccessKeys.cancel")), 9, I0)
        ])
      ])) : T("", !0),
      (r(), ct(Ss, { to: "body" }, [
        v(Rs, { controller: a(_) }, null, 8, ["controller"])
      ]))
    ], 40, $g));
  }
}), N0 = /* @__PURE__ */ gt(z0, [["__scopeId", "data-v-3b983b75"]]);
function $n(u, t) {
  const _ = /* @__PURE__ */ new Map();
  for (const U of u)
    _.has(U.path) || _.set(U.path, U);
  const x = [];
  if (Array.isArray(t))
    for (const U of t) {
      const L = typeof U == "string" ? _.get(U) : void 0;
      L && (x.push(L), _.delete(U));
    }
  return [...x, ..._.values()];
}
const zn = "image-tutorial", F0 = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function H0(u) {
  return u.navigation_type !== "qr" && u.placement !== "header" && !!u.id.trim() && !!u.url.trim();
}
function Rn(u) {
  const t = (u == null ? void 0 : u.filter(H0)) ?? [];
  return t.find((_) => _.id === zn) ?? t.find((_) => F0.has(_.label.trim().toLowerCase()));
}
const B0 = {
  alipay: "alipay",
  alipay_direct: "alipay",
  wxpay: "wxpay",
  wxpay_direct: "wxpay",
  stripe: "stripe",
  airwallex: "airwallex"
};
function ws(u) {
  return B0[u.trim()] ?? "";
}
const j0 = /[\s,，]+/, Ii = /[^a-z0-9.-]/g, zi = /[^a-z0-9.-]/, ro = /^@+/, Za = "*.", Ni = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
function Ps(u) {
  let t = String(u || "").trim().toLowerCase();
  return t ? (t = t.replace(ro, ""), co(t, !1)) : "";
}
function Fi(u) {
  if (!u || u.length === 0)
    return [];
  const t = /* @__PURE__ */ new Set(), _ = [];
  for (const x of u) {
    const U = Ps(x);
    !Ds(U) || t.has(U) || (t.add(U), _.push(U));
  }
  return _;
}
function q0(u) {
  if (!u || !u.trim())
    return [];
  const t = /* @__PURE__ */ new Set(), _ = [];
  for (const x of u.split(j0)) {
    const U = K0(x);
    !Ds(U) || t.has(U) || (t.add(U), _.push(U));
  }
  return _;
}
function K0(u) {
  let t = String(u || "").trim().toLowerCase();
  return t ? (t = t.replace(ro, ""), co(t, !0)) : "";
}
function Ds(u) {
  return u ? u.startsWith(Za) ? Ni.test(u.slice(Za.length)) : !u.includes("*") && Ni.test(u) : !1;
}
function co(u, t) {
  if (u.startsWith(Za)) {
    const _ = u.slice(Za.length);
    return t && (!_ || zi.test(_)) ? "" : `${Za}${_.replace(Ii, "")}`;
  }
  return u === "*" ? t ? "" : u : t && zi.test(u) ? "" : u.replace(/[*]/g, "").replace(Ii, "");
}
const W0 = [
  "header_exact",
  "header_prefix",
  "body_path"
];
function G0(u) {
  if (!u || !u.trim()) return [];
  try {
    const t = JSON.parse(u);
    return Array.isArray(t) ? t.map((_) => ({
      type: W0.includes(_ == null ? void 0 : _.type) ? _.type : "header_exact",
      match: Array.isArray(_ == null ? void 0 : _.match) ? _.match.filter((x) => typeof x == "string").join(" / ") : "",
      required: (_ == null ? void 0 : _.required) === !0
    })) : [];
  } catch {
    return [];
  }
}
function Y0(u) {
  const t = u.map((_) => ({
    type: _.type,
    match: _.match.split("/").map((x) => x.trim()).filter((x) => x.length > 0),
    required: _.required === !0
  })).filter((_) => _.match.length > 0);
  return JSON.stringify(t);
}
function Q0() {
  return [
    { type: "header_prefix", match: "x-codex-", required: !0 },
    { type: "header_exact", match: "session-id / session_id", required: !1 },
    { type: "header_exact", match: "thread-id / thread_id", required: !1 },
    {
      type: "body_path",
      match: "client_metadata.x-codex-window-id / client_metadata.x-codex-installation-id",
      required: !1
    }
  ];
}
const X0 = {
  class: "mx-auto max-w-6xl space-y-6",
  "data-zero-one-native-settings": "true"
}, J0 = {
  key: 0,
  class: "flex items-center justify-center py-12"
}, Z0 = { class: "settings-tabs-shell" }, ey = ["aria-label"], ty = { class: "settings-tabs" }, ay = ["id", "aria-selected", "tabindex", "onClick", "onKeydown"], ny = { class: "settings-tab-icon" }, sy = { class: "settings-tab-label" }, iy = {
  key: 1,
  class: "card"
}, oy = { class: "cursor-pointer px-6 py-4 font-medium" }, ly = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, ry = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, dy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, cy = { class: "space-y-4 p-6" }, uy = { class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-4 dark:border-zo-alert-800 dark:bg-zo-alert-900/20" }, my = { class: "flex items-start" }, _y = { class: "ml-3 text-sm text-zo-alert-700 dark:text-zo-alert-300" }, py = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, gy = {
  key: 1,
  class: "space-y-4"
}, yy = { class: "flex items-center justify-between" }, by = { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300" }, hy = { class: "rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-900 dark:bg-dark-700 dark:text-gray-100" }, xy = { class: "flex gap-2" }, fy = ["disabled"], ky = ["disabled"], vy = {
  key: 0,
  class: "space-y-3 rounded-lg border border-zo-signal-200 bg-zo-signal-50 p-4 dark:border-zo-signal-800 dark:bg-zo-signal-900/20"
}, wy = { class: "text-sm font-medium text-zo-signal-700 dark:text-zo-signal-300" }, Cy = { class: "flex items-center gap-2" }, Sy = { class: "flex-1 select-all break-all rounded border border-zo-signal-300 bg-white px-3 py-2 font-mono text-sm dark:border-zo-signal-700 dark:bg-dark-800" }, Ay = { class: "text-xs text-zo-signal-600 dark:text-zo-signal-400" }, Ty = {
  class: "card",
  "data-testid": "overload-cooldown-settings"
}, Uy = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Ey = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Vy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Py = { class: "space-y-5 p-6" }, $y = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, Ry = { class: "flex items-center justify-between" }, Ly = { class: "font-medium text-gray-900 dark:text-white" }, My = { class: "text-sm text-gray-500 dark:text-gray-400" }, Dy = {
  key: 0,
  class: "space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Oy = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Iy = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, zy = {
  class: "card",
  "data-testid": "rate-limit-429-cooldown-settings"
}, Ny = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Fy = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Hy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, By = { class: "space-y-5 p-6" }, jy = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, qy = { class: "flex items-center justify-between" }, Ky = { class: "font-medium text-gray-900 dark:text-white" }, Wy = { class: "text-sm text-gray-500 dark:text-gray-400" }, Gy = {
  key: 0,
  class: "space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Yy = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Qy = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Xy = {
  class: "card",
  "data-testid": "stream-timeout-settings"
}, Jy = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Zy = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, eb = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, tb = { class: "space-y-5 p-6" }, ab = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, nb = { class: "flex items-center justify-between" }, sb = { class: "font-medium text-gray-900 dark:text-white" }, ib = { class: "text-sm text-gray-500 dark:text-gray-400" }, ob = {
  key: 0,
  class: "space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
}, lb = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, rb = { value: "temp_unsched" }, db = { value: "error" }, cb = { value: "none" }, ub = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, mb = { key: 0 }, _b = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, pb = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, gb = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, yb = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, bb = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, hb = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, xb = {
  class: "card",
  "data-testid": "rectifier-settings"
}, fb = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, kb = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, vb = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, wb = { class: "space-y-5 p-6" }, Cb = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, Sb = { class: "flex items-center justify-between" }, Ab = { class: "font-medium text-gray-900 dark:text-white" }, Tb = { class: "text-sm text-gray-500 dark:text-gray-400" }, Ub = {
  key: 0,
  class: "space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Eb = { class: "flex items-center justify-between" }, Vb = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Pb = { class: "text-xs text-gray-500 dark:text-gray-400" }, $b = { class: "flex items-center justify-between" }, Rb = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Lb = { class: "text-xs text-gray-500 dark:text-gray-400" }, Mb = { class: "flex items-center justify-between" }, Db = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Ob = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ib = {
  key: 0,
  class: "ml-4 space-y-3 border-l-2 border-gray-200 pl-4 dark:border-dark-600"
}, zb = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Nb = { class: "text-xs text-gray-500 dark:text-gray-400" }, Fb = ["onUpdate:modelValue", "placeholder"], Hb = ["onClick"], Bb = {
  class: "card",
  "data-testid": "beta-policy-settings"
}, jb = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, qb = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Kb = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Wb = { class: "space-y-5 p-6" }, Gb = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, Yb = { class: "mb-3 flex items-center gap-2" }, Qb = { class: "text-sm font-medium text-gray-900 dark:text-white" }, Xb = { class: "rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-dark-700 dark:text-gray-400" }, Jb = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2" }, Zb = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, eh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, th = {
  key: 0,
  class: "mt-3"
}, ah = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, nh = ["onUpdate:modelValue", "placeholder"], sh = { class: "mt-1 text-xs text-gray-400 dark:text-gray-500" }, ih = {
  key: 1,
  class: "mt-3"
}, oh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, lh = { class: "flex flex-wrap gap-2" }, rh = ["onClick", "title"], dh = { class: "mt-3" }, ch = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, uh = { class: "mb-2 text-xs text-gray-400 dark:text-gray-500" }, mh = ["onUpdate:modelValue", "placeholder"], _h = ["onClick"], ph = ["onClick"], gh = { class: "flex flex-wrap items-center gap-1.5" }, yh = { class: "text-xs text-gray-400 dark:text-gray-500" }, bh = ["onClick"], hh = {
  key: 2,
  class: "mt-3"
}, xh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, fh = { class: "mt-1 text-xs text-gray-400 dark:text-gray-500" }, kh = {
  key: 0,
  class: "mt-2"
}, vh = ["onUpdate:modelValue", "placeholder"], wh = { class: "mt-1 text-xs text-gray-400 dark:text-gray-500" }, Ch = { class: "card console-card-motion-static" }, Sh = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Ah = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Th = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Uh = { class: "space-y-5 p-6" }, Eh = {
  key: 0,
  class: "rounded-lg border border-dashed border-gray-200 p-6 text-center text-sm text-gray-500 dark:border-dark-600 dark:text-gray-400"
}, Vh = { class: "mb-3 flex items-center justify-between" }, Ph = { class: "text-sm font-medium text-gray-900 dark:text-white" }, $h = ["onClick", "title"], Rh = ["data-testid"], Lh = { class: "font-medium text-gray-700 dark:text-gray-300" }, Mh = { class: "inline-flex items-center rounded bg-primary-50 px-2 py-0.5 font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300" }, Dh = { class: "font-medium text-gray-700 dark:text-gray-300" }, Oh = { class: "inline-flex items-center rounded bg-gray-100 px-2 py-0.5 font-medium text-gray-700 dark:bg-dark-600 dark:text-gray-300" }, Ih = { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, zh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Nh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Fh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Hh = { class: "mt-3" }, Bh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, jh = { class: "mb-2 text-xs text-gray-400 dark:text-gray-500" }, qh = {
  key: 0,
  class: "mt-3"
}, Kh = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, Wh = ["onUpdate:modelValue", "placeholder"], Gh = { class: "mt-1 text-xs text-gray-400 dark:text-gray-500" }, Yh = ["aria-labelledby", "aria-describedby"], Qh = ["id"], Xh = ["id"], Jh = ["onUpdate:modelValue", "placeholder"], Zh = ["onClick"], ex = ["onClick"], tx = {
  key: 1,
  class: "mt-3"
}, ax = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, nx = { class: "mt-1 text-xs text-gray-400 dark:text-gray-500" }, sx = {
  key: 0,
  class: "mt-2"
}, ix = ["onUpdate:modelValue", "placeholder"], ox = { class: "mt-2 text-xs text-gray-400 dark:text-gray-500" }, lx = { class: "card" }, rx = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, dx = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, cx = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, ux = { class: "space-y-5 p-6" }, mx = { class: "flex items-center justify-between" }, _x = { class: "font-medium text-gray-900 dark:text-white" }, px = { class: "text-sm text-gray-500 dark:text-gray-400" }, gx = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, yx = { class: "font-medium text-gray-900 dark:text-white" }, bx = { class: "text-sm text-gray-500 dark:text-gray-400" }, hx = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, xx = { class: "font-medium text-gray-900 dark:text-white" }, fx = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, kx = { class: "mt-3 rounded-lg border border-gray-300 bg-white p-2 dark:border-dark-500 dark:bg-dark-700" }, vx = { class: "flex flex-wrap items-center gap-2" }, wx = ["onClick"], Cx = { class: "flex min-w-[220px] flex-1 items-center gap-1 rounded border border-transparent px-2 py-1 focus-within:border-primary-300 dark:focus-within:border-primary-700" }, Sx = ["placeholder"], Ax = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Tx = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, Ux = { class: "font-medium text-gray-900 dark:text-white" }, Ex = { class: "text-sm text-gray-500 dark:text-gray-400" }, Vx = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, Px = { class: "font-medium text-gray-900 dark:text-white" }, $x = { class: "text-sm text-gray-500 dark:text-gray-400" }, Rx = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, Lx = { class: "font-medium text-gray-900 dark:text-white" }, Mx = { class: "text-sm text-gray-500 dark:text-gray-400" }, Dx = {
  key: 0,
  class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700"
}, Ox = { class: "font-medium text-gray-900 dark:text-white" }, Ix = { class: "text-sm text-gray-500 dark:text-gray-400" }, zx = {
  key: 1,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, Nx = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Fx = ["placeholder"], Hx = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Bx = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, jx = { class: "font-medium text-gray-900 dark:text-white" }, qx = { class: "text-sm text-gray-500 dark:text-gray-400" }, Kx = {
  key: 0,
  class: "mt-2 text-sm text-zo-alert-600 dark:text-zo-alert-400"
}, Wx = {
  class: "border-t border-gray-100 pt-4 dark:border-dark-700",
  "data-testid": "passkey-settings"
}, Gx = { class: "flex items-start justify-between gap-4" }, Yx = { class: "font-medium text-gray-900 dark:text-white" }, Qx = { class: "text-sm text-gray-500 dark:text-gray-400" }, Xx = { class: "font-medium" }, Jx = { class: "mt-1 break-all" }, Zx = { class: "mt-1 break-all" }, ef = {
  key: 0,
  class: "mt-2"
}, tf = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, af = { class: "font-medium text-gray-900 dark:text-white" }, nf = { class: "text-sm text-gray-500 dark:text-gray-400" }, sf = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, of = { class: "font-medium text-gray-900 dark:text-white" }, lf = { class: "text-sm text-gray-500 dark:text-gray-400" }, rf = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, df = { class: "font-medium text-gray-900 dark:text-white" }, cf = { class: "text-sm text-gray-500 dark:text-gray-400" }, uf = { class: "card" }, mf = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, _f = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, pf = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, gf = { class: "space-y-5 p-6" }, yf = { class: "flex items-center justify-between gap-4" }, bf = { class: "font-medium text-gray-900 dark:text-white" }, hf = { class: "text-sm text-gray-500 dark:text-gray-400" }, xf = {
  key: 0,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, ff = {
  for: "forwarded-client-ip-headers",
  class: "font-medium text-gray-900 dark:text-white"
}, kf = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, vf = { class: "mt-3 rounded-lg border border-gray-300 bg-white p-2 dark:border-dark-500 dark:bg-dark-700" }, wf = { class: "flex flex-wrap items-center gap-2" }, Cf = ["aria-label", "onClick"], Sf = { class: "flex min-w-[220px] flex-1 items-center gap-1 rounded border border-transparent px-2 py-1 focus-within:border-primary-300 dark:focus-within:border-primary-700" }, Af = ["placeholder"], Tf = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Uf = { class: "card" }, Ef = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Vf = { class: "flex items-center gap-2" }, Pf = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, $f = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Rf = { class: "space-y-5 p-6" }, Lf = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, Mf = { class: "rounded-lg border border-sky-200 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-900/20" }, Df = { class: "flex items-start" }, Of = { class: "ml-3 text-sm text-sky-700 dark:text-sky-300" }, If = { class: "flex items-center justify-between" }, zf = { class: "font-medium text-gray-900 dark:text-white" }, Nf = { class: "text-sm text-gray-500 dark:text-gray-400" }, Ff = {
  key: 0,
  class: "space-y-5 border-t border-gray-100 pt-4 dark:border-dark-700"
}, Hf = { class: "grid grid-cols-1 gap-6 sm:grid-cols-2" }, Bf = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, jf = { class: "flex items-center gap-2" }, qf = { class: "text-sm text-gray-500 dark:text-gray-400" }, Kf = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Wf = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Gf = { class: "flex items-center gap-2" }, Yf = { class: "text-sm text-gray-500 dark:text-gray-400" }, Qf = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Xf = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Jf = { class: "flex items-center gap-2" }, Zf = { class: "text-sm text-gray-500 dark:text-gray-400" }, e1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, t1 = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, a1 = { class: "font-medium text-gray-900 dark:text-white" }, n1 = { class: "text-sm text-gray-500 dark:text-gray-400" }, s1 = { class: "card" }, i1 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, o1 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, l1 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, r1 = { class: "space-y-5 p-6" }, d1 = { class: "flex items-center justify-between" }, c1 = { class: "font-medium text-gray-900 dark:text-white" }, u1 = { class: "text-sm text-gray-500 dark:text-gray-400" }, m1 = {
  key: 0,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, _1 = { class: "mb-6" }, p1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, g1 = { class: "grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-dark-700" }, y1 = {
  key: 0,
  class: "grid grid-cols-1 gap-6"
}, b1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, h1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, x1 = {
  href: "https://dash.cloudflare.com/",
  target: "_blank",
  class: "text-primary-600 hover:text-primary-500"
}, f1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, k1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, v1 = { key: 1 }, w1 = { class: "mb-6 max-w-sm" }, C1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, S1 = { class: "grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-dark-700" }, A1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, T1 = { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, U1 = { class: "md:col-span-2" }, E1 = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, V1 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, P1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, $1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, R1 = ["placeholder"], L1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, M1 = { class: "border-t border-gray-100 pt-5 md:col-span-2 dark:border-dark-700" }, D1 = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, O1 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, I1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, z1 = ["placeholder"], N1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, F1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, H1 = ["placeholder"], B1 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, j1 = { class: "mt-5 text-xs text-gray-500 dark:text-gray-400" }, q1 = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, K1 = { class: "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm" }, W1 = ["href"], G1 = ["href"], Y1 = ["href"], Q1 = {
  key: 2,
  class: "grid grid-cols-1 gap-6"
}, X1 = { class: "grid grid-cols-1 gap-6 sm:grid-cols-2" }, J1 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Z1 = { class: "grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-dark-700" }, ek = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, tk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, ak = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, nk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, sk = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, ik = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, ok = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, lk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, rk = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, dk = { class: "card" }, ck = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, uk = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, mk = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, _k = { class: "space-y-5 p-6" }, pk = { class: "flex items-center justify-between" }, gk = { class: "font-medium text-gray-900 dark:text-white" }, yk = { class: "text-sm text-gray-500 dark:text-gray-400" }, bk = {
  key: 0,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, hk = { class: "grid grid-cols-1 gap-6" }, xk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, fk = ["placeholder"], kk = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, vk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, wk = ["placeholder"], Ck = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Sk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Ak = ["placeholder"], Tk = { class: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" }, Uk = {
  key: 0,
  class: "select-all break-all rounded bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300"
}, Ek = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Vk = { class: "card" }, Pk = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, $k = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Rk = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Lk = { class: "space-y-6 p-6" }, Mk = { class: "grid grid-cols-1 gap-6 xl:grid-cols-2" }, Dk = { class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700" }, Ok = { class: "flex items-start justify-between gap-4" }, Ik = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, zk = {
  key: 0,
  class: "mt-4 space-y-4"
}, Nk = { class: "rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300" }, Fk = { class: "grid grid-cols-1 gap-4 lg:grid-cols-2" }, Hk = ["placeholder"], Bk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, jk = { class: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" }, qk = {
  key: 0,
  class: "select-all break-all rounded bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300"
}, Kk = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Wk = { class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700" }, Gk = { class: "flex items-start justify-between gap-4" }, Yk = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Qk = {
  key: 0,
  class: "mt-4 space-y-4"
}, Xk = { class: "rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300" }, Jk = { class: "grid grid-cols-1 gap-4 lg:grid-cols-2" }, Zk = ["placeholder"], ev = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, tv = { class: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" }, av = {
  key: 0,
  class: "select-all break-all rounded bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300"
}, nv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, sv = { class: "card" }, iv = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, ov = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, lv = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, rv = { class: "space-y-5 p-6" }, dv = { class: "flex items-center justify-between" }, cv = { class: "font-medium text-gray-900 dark:text-white" }, uv = { class: "text-sm text-gray-500 dark:text-gray-400" }, mv = {
  key: 0,
  class: "space-y-6 border-t border-gray-100 pt-4 dark:border-dark-700"
}, _v = { class: "space-y-4" }, pv = { class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700" }, gv = { class: "flex items-start justify-between gap-4" }, yv = { class: "font-medium text-gray-900 dark:text-white" }, bv = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, hv = {
  key: 0,
  class: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2"
}, xv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, fv = ["placeholder"], kv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, vv = ["placeholder"], wv = { class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700" }, Cv = { class: "flex items-start justify-between gap-4" }, Sv = { class: "font-medium text-gray-900 dark:text-white" }, Av = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Tv = {
  key: 0,
  class: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2"
}, Uv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Ev = ["placeholder"], Vv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Pv = ["placeholder"], $v = { class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700" }, Rv = { class: "flex items-start justify-between gap-4" }, Lv = { class: "font-medium text-gray-900 dark:text-white" }, Mv = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Dv = {
  key: 0,
  class: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2"
}, Ov = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Iv = ["placeholder"], zv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Nv = ["placeholder"], Fv = {
  key: 0,
  class: "rounded-lg border border-zo-alert-200 bg-zo-alert-50 px-4 py-3 text-sm text-zo-alert-700 dark:border-zo-alert-900/40 dark:bg-zo-alert-900/10 dark:text-zo-alert-300"
}, Hv = { class: "grid grid-cols-1 gap-6 lg:grid-cols-2" }, Bv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, jv = ["placeholder"], qv = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Kv = { class: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" }, Wv = {
  key: 0,
  class: "select-all break-all rounded bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300"
}, Gv = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Yv = ["placeholder"], Qv = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Xv = { class: "card" }, Jv = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, Zv = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, e2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, t2 = { class: "space-y-5 p-6" }, a2 = { class: "flex items-center justify-between" }, n2 = { class: "font-medium text-gray-900 dark:text-white" }, s2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, i2 = {
  key: 0,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, o2 = { class: "grid grid-cols-1 gap-6" }, l2 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, r2 = ["placeholder"], d2 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, c2 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, u2 = ["placeholder"], m2 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, _2 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, p2 = ["placeholder"], g2 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, y2 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, b2 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, h2 = { class: "mb-3 text-xs text-gray-500 dark:text-gray-400" }, x2 = { class: "space-y-2" }, f2 = { class: "flex cursor-pointer items-center gap-3" }, k2 = { class: "text-sm text-gray-700 dark:text-gray-300" }, v2 = { class: "flex cursor-pointer items-center gap-3" }, w2 = { class: "text-sm text-gray-700 dark:text-gray-300" }, C2 = {
  key: 0,
  class: "flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-700"
}, S2 = { class: "font-medium text-gray-900 dark:text-white" }, A2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, T2 = {
  key: 1,
  class: "pt-4 border-t border-gray-100 dark:border-dark-700 space-y-2"
}, U2 = { class: "flex items-center justify-between" }, E2 = { class: "font-medium text-gray-900 dark:text-white" }, V2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, P2 = {
  key: 0,
  class: "space-y-2"
}, $2 = { class: "flex items-center gap-2" }, R2 = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, L2 = { class: "flex items-center gap-2" }, M2 = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, D2 = ["placeholder"], O2 = {
  key: 1,
  class: "text-xs text-gray-400 dark:text-gray-500"
}, I2 = {
  key: 2,
  class: "pt-4 border-t border-gray-100 dark:border-dark-700 space-y-2"
}, z2 = { class: "flex items-center justify-between" }, N2 = { class: "font-medium text-gray-900 dark:text-white" }, F2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, H2 = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400 mt-1" }, B2 = {
  key: 0,
  class: "space-y-2"
}, j2 = { class: "flex items-center gap-2" }, q2 = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, K2 = { class: "flex items-center gap-2" }, W2 = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, G2 = ["placeholder"], Y2 = {
  key: 1,
  class: "text-xs text-gray-400 dark:text-gray-500"
}, Q2 = {
  key: 3,
  class: "pt-4 border-t border-gray-100 dark:border-dark-700 space-y-2"
}, X2 = { class: "flex items-center justify-between" }, J2 = { class: "font-medium text-gray-900 dark:text-white" }, Z2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, ew = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400 mt-1" }, tw = {
  key: 0,
  class: "space-y-2"
}, aw = { class: "flex items-center gap-2" }, nw = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, sw = { class: "flex items-center gap-2" }, iw = { class: "text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap min-w-[5rem]" }, ow = ["placeholder"], lw = {
  key: 1,
  class: "text-xs text-gray-400 dark:text-gray-500"
}, rw = { class: "card" }, dw = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, cw = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, uw = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, mw = { class: "space-y-5 p-6" }, _w = { class: "flex items-center justify-between" }, pw = { class: "font-medium text-gray-900 dark:text-white" }, gw = { class: "text-sm text-gray-500 dark:text-gray-400" }, yw = {
  key: 0,
  class: "space-y-6 border-t border-gray-100 pt-4 dark:border-dark-700"
}, bw = { class: "grid grid-cols-1 gap-6 lg:grid-cols-3" }, hw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, xw = ["placeholder"], fw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, kw = ["placeholder"], vw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, ww = ["placeholder"], Cw = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Sw = { class: "grid grid-cols-1 gap-6 lg:grid-cols-2" }, Aw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Tw = ["placeholder"], Uw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Ew = ["placeholder"], Vw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Pw = ["placeholder"], $w = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Rw = ["placeholder"], Lw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Mw = ["placeholder"], Dw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Ow = ["placeholder"], Iw = { class: "grid grid-cols-1 gap-6 lg:grid-cols-2" }, zw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Nw = ["placeholder"], Fw = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Hw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Bw = ["placeholder"], jw = { class: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" }, qw = {
  key: 0,
  class: "select-all break-all rounded bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600 dark:bg-dark-800 dark:text-gray-300"
}, Kw = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Ww = { class: "lg:col-span-2" }, Gw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Yw = ["placeholder"], Qw = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Xw = { class: "grid grid-cols-1 gap-6 lg:grid-cols-3" }, Jw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, Zw = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, e4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, t4 = ["placeholder"], a4 = { class: "grid grid-cols-1 gap-6 lg:grid-cols-3" }, n4 = { class: "flex items-center justify-between rounded border border-gray-200 px-4 py-3 dark:border-dark-700" }, s4 = { class: "font-medium text-gray-900 dark:text-white" }, i4 = { class: "flex items-center justify-between rounded border border-gray-200 px-4 py-3 dark:border-dark-700" }, o4 = { class: "font-medium text-gray-900 dark:text-white" }, l4 = { class: "flex items-center justify-between rounded border border-gray-200 px-4 py-3 dark:border-dark-700" }, r4 = { class: "font-medium text-gray-900 dark:text-white" }, d4 = { class: "grid grid-cols-1 gap-6 lg:grid-cols-3" }, c4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, u4 = ["placeholder"], m4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, _4 = ["placeholder"], p4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, g4 = ["placeholder"], y4 = { class: "card" }, b4 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, h4 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, x4 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, f4 = { class: "space-y-6 p-6" }, k4 = { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, v4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, w4 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, C4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, S4 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, A4 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, T4 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, U4 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, E4 = { class: "mb-3 flex items-center justify-between" }, V4 = { class: "font-medium text-gray-900 dark:text-white" }, P4 = { class: "text-sm text-gray-500 dark:text-gray-400" }, $4 = ["disabled"], R4 = {
  key: 0,
  class: "rounded border border-dashed border-gray-300 px-4 py-3 text-sm text-gray-500 dark:border-dark-600 dark:text-gray-400"
}, L4 = {
  key: 1,
  class: "space-y-3"
}, M4 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, D4 = {
  key: 1,
  class: "text-gray-400"
}, O4 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, I4 = ["onUpdate:modelValue"], z4 = { class: "flex items-end" }, N4 = ["onClick"], F4 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, H4 = { class: "mb-3" }, B4 = { class: "font-medium text-gray-900 dark:text-white" }, j4 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, q4 = { class: "mt-0.5 text-xs text-zo-alert-600 dark:text-zo-alert-400" }, K4 = { class: "overflow-x-auto" }, W4 = { class: "min-w-full text-sm" }, G4 = { class: "text-left text-xs text-gray-500 dark:text-gray-400" }, Y4 = { class: "pb-2 pr-4 font-medium" }, Q4 = { class: "pb-2 pr-4 font-medium" }, X4 = { class: "pb-2 pr-4 font-medium" }, J4 = { class: "pb-2 font-medium" }, Z4 = { class: "space-y-2" }, e5 = { class: "pr-4 py-1" }, t5 = { class: "font-mono text-xs text-gray-700 dark:text-gray-300" }, a5 = { class: "pr-4 py-1" }, n5 = ["onUpdate:modelValue", "placeholder"], s5 = { class: "pr-4 py-1" }, i5 = ["onUpdate:modelValue", "placeholder"], o5 = { class: "py-1" }, l5 = ["onUpdate:modelValue", "placeholder"], r5 = { class: "card" }, d5 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, c5 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, u5 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, m5 = { class: "space-y-6 p-6" }, _5 = { class: "flex items-center justify-between rounded border border-gray-200 px-4 py-3 dark:border-dark-700" }, p5 = { class: "font-medium text-gray-900 dark:text-white" }, g5 = { class: "text-sm text-gray-500 dark:text-gray-400" }, y5 = { class: "space-y-4" }, b5 = { class: "flex items-center justify-between gap-4" }, h5 = { class: "font-medium text-gray-900 dark:text-white" }, x5 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, f5 = ["data-testid"], k5 = { class: "text-sm text-gray-500 dark:text-gray-400" }, v5 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, w5 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, C5 = ["onUpdate:modelValue"], S5 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, A5 = ["onUpdate:modelValue"], T5 = { class: "flex items-center justify-between rounded border border-gray-200 px-4 py-3 dark:border-dark-700" }, U5 = { class: "font-medium text-gray-900 dark:text-white" }, E5 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, V5 = { class: "mb-3 flex items-center justify-between" }, P5 = { class: "font-medium text-gray-900 dark:text-white" }, $5 = { class: "text-sm text-gray-500 dark:text-gray-400" }, R5 = ["onClick", "disabled"], L5 = {
  key: 0,
  class: "rounded border border-dashed border-gray-300 px-4 py-3 text-sm text-gray-500 dark:border-dark-600 dark:text-gray-400"
}, M5 = {
  key: 1,
  class: "space-y-3"
}, D5 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, O5 = {
  key: 1,
  class: "text-gray-400"
}, I5 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, z5 = ["onUpdate:modelValue"], N5 = { class: "flex items-end" }, F5 = ["onClick"], H5 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, B5 = { class: "mb-3" }, j5 = { class: "font-medium text-gray-900 dark:text-white" }, q5 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, K5 = { class: "overflow-x-auto" }, W5 = { class: "min-w-full text-sm" }, G5 = { class: "text-left text-xs text-gray-500 dark:text-gray-400" }, Y5 = { class: "pb-2 pr-4 font-medium" }, Q5 = { class: "pb-2 pr-4 font-medium" }, X5 = { class: "pb-2 pr-4 font-medium" }, J5 = { class: "pb-2 font-medium" }, Z5 = { class: "pr-4 py-1" }, e3 = { class: "font-mono text-xs text-gray-700 dark:text-gray-300" }, t3 = { class: "pr-4 py-1" }, a3 = ["onUpdate:modelValue", "placeholder"], n3 = { class: "pr-4 py-1" }, s3 = ["onUpdate:modelValue", "placeholder"], i3 = { class: "py-1" }, o3 = ["onUpdate:modelValue", "placeholder"], l3 = { class: "card" }, r3 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, d3 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, c3 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, u3 = { class: "p-6" }, m3 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, _3 = ["placeholder"], p3 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, g3 = { class: "mt-4" }, y3 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, b3 = ["placeholder"], h3 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, x3 = { class: "card" }, f3 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, k3 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, v3 = { class: "p-6 space-y-4" }, w3 = { class: "text-base font-semibold text-gray-900 dark:text-white" }, C3 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, S3 = { class: "grid gap-4 sm:grid-cols-2" }, A3 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, T3 = ["placeholder"], U3 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, E3 = ["placeholder"], V3 = { class: "text-xs text-gray-500 dark:text-gray-400" }, P3 = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, $3 = { class: "mb-2 mt-1 text-xs text-gray-500 dark:text-gray-400" }, R3 = ["onUpdate:modelValue"], L3 = { value: "header_exact" }, M3 = { value: "header_prefix" }, D3 = { value: "body_path" }, O3 = ["onUpdate:modelValue", "placeholder"], I3 = { class: "flex shrink-0 items-center gap-1 text-xs text-gray-600 dark:text-gray-400" }, z3 = ["onUpdate:modelValue"], N3 = ["onClick"], F3 = {
  key: 0,
  class: "mt-2 text-xs text-zo-alert-600 dark:text-zo-alert-500"
}, H3 = { class: "flex items-center justify-between" }, B3 = { class: "pr-4" }, j3 = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, q3 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, K3 = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, W3 = { class: "mb-2 mt-1 text-xs text-gray-500 dark:text-gray-400" }, G3 = ["onUpdate:modelValue", "placeholder"], Y3 = ["onUpdate:modelValue", "placeholder"], Q3 = ["onClick"], X3 = { class: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, J3 = { class: "mb-2 mt-1 text-xs text-gray-500 dark:text-gray-400" }, Z3 = ["onUpdate:modelValue", "placeholder"], e8 = ["onUpdate:modelValue", "placeholder"], t8 = ["title"], a8 = ["onUpdate:modelValue"], n8 = ["onClick"], s8 = {
  class: "card",
  "data-testid": "upstream-billing-probe-settings"
}, i8 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, o8 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, l8 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, r8 = { class: "space-y-5 p-6" }, d8 = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, c8 = { class: "flex items-center justify-between gap-4" }, u8 = { class: "font-medium text-gray-900 dark:text-white" }, m8 = { class: "text-sm text-gray-500 dark:text-gray-400" }, _8 = {
  key: 0,
  class: "border-t border-gray-100 pt-4 dark:border-dark-700"
}, p8 = {
  class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300",
  for: "upstream-billing-probe-interval"
}, g8 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, y8 = {
  class: "card",
  "data-testid": "ollama-cloud-usage-global-settings"
}, b8 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, h8 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, x8 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, f8 = { class: "space-y-5 p-6" }, k8 = {
  key: 0,
  class: "flex items-center gap-2 text-gray-500"
}, v8 = { class: "flex items-center justify-between gap-4" }, w8 = { class: "font-medium text-gray-900 dark:text-white" }, C8 = { class: "text-sm text-gray-500 dark:text-gray-400" }, S8 = {
  key: 0,
  class: "space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
}, A8 = {
  class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300",
  for: "ollama-cloud-usage-debounce"
}, T8 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, U8 = {
  class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300",
  for: "ollama-cloud-usage-interval"
}, E8 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, V8 = { class: "card" }, P8 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, $8 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, R8 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, L8 = { class: "space-y-5 p-6" }, M8 = { class: "flex items-center justify-between" }, D8 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, O8 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, I8 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, z8 = { class: "mb-3" }, N8 = { class: "font-medium text-gray-900 dark:text-white" }, F8 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, H8 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, B8 = { class: "mt-0.5 text-xs text-zo-alert-600 dark:text-zo-alert-400" }, j8 = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" }, q8 = { class: "flex items-start justify-between gap-3" }, K8 = { class: "font-mono text-sm font-medium text-gray-900 dark:text-white" }, W8 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, G8 = ["onUpdate:modelValue", "data-testid"], Y8 = {
  key: 0,
  class: "flex items-center justify-between border-t border-gray-100 pt-5 dark:border-dark-700"
}, Q8 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, X8 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, J8 = {
  key: 1,
  class: "flex flex-col items-stretch gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 dark:border-dark-700"
}, Z8 = { class: "min-w-0" }, e6 = {
  class: "text-sm font-medium text-gray-700 dark:text-gray-300",
  for: "openai-oauth-scheduling-rate-multiplier"
}, t6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, a6 = { class: "relative w-full shrink-0 sm:w-32" }, n6 = { class: "flex items-center justify-between border-t border-gray-100 pt-5 dark:border-dark-700" }, s6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, i6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, o6 = {
  key: 2,
  class: "flex items-center justify-between border-t border-gray-100 pt-5 dark:border-dark-700"
}, l6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, r6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, d6 = {
  key: 3,
  class: "flex items-center justify-between border-t border-gray-100 pt-5 dark:border-dark-700"
}, c6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, u6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, m6 = {
  key: 4,
  class: "flex flex-col items-stretch gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 dark:border-dark-700"
}, _6 = { class: "min-w-0" }, p6 = {
  class: "text-sm font-medium text-gray-700 dark:text-gray-300",
  for: "openai-oauth-scheduling-rate-multiplier"
}, g6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, y6 = { class: "relative w-full shrink-0 sm:w-32" }, b6 = {
  key: 5,
  class: "border-t border-gray-100 pt-5 dark:border-dark-700"
}, h6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, x6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, f6 = { class: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5" }, k6 = { class: "text-xs font-medium text-gray-600 dark:text-gray-400" }, v6 = ["onUpdate:modelValue", "placeholder"], w6 = { class: "card" }, C6 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, S6 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, A6 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, T6 = { class: "space-y-5 p-6" }, U6 = { class: "grid gap-5 border-b border-gray-100 pb-5 dark:border-dark-700 md:grid-cols-[minmax(0,1fr)_auto] md:items-end" }, E6 = {
  for: "grok-default-text-model",
  class: "text-sm font-medium text-gray-700 dark:text-gray-300"
}, V6 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, P6 = { class: "flex items-center justify-between gap-5 md:min-w-72" }, $6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, R6 = { class: "mt-0.5 max-w-sm text-xs text-gray-500 dark:text-gray-400" }, L6 = { class: "md:col-span-2" }, M6 = {
  for: "grok-default-base-url-mode",
  class: "text-sm font-medium text-gray-700 dark:text-gray-300"
}, D6 = { value: "cli" }, O6 = { value: "api" }, I6 = { value: "us-east-1" }, z6 = { value: "us-west-2" }, N6 = { value: "eu-west-1" }, F6 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, H6 = { class: "flex items-center justify-between" }, B6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, j6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, q6 = { class: "flex items-center justify-between" }, K6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, W6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, G6 = { class: "flex items-center justify-between" }, Y6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Q6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, X6 = { class: "flex items-center justify-between" }, J6 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Z6 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, e7 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, t7 = { class: "space-y-3" }, a7 = { class: "min-w-0" }, n7 = { class: "text-sm font-medium text-gray-900 dark:text-white" }, s7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, i7 = { class: "flex items-center gap-2" }, o7 = ["title", "aria-label", "onClick"], l7 = ["disabled", "onClick"], r7 = ["disabled", "onClick"], d7 = ["onClick"], c7 = { class: "grid gap-3 md:grid-cols-2" }, u7 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300" }, m7 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300" }, _7 = { class: "mt-3" }, p7 = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300" }, g7 = ["onUpdate:modelValue", "onInput"], y7 = { class: "mt-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_160px]" }, b7 = { class: "flex items-center justify-between gap-4" }, h7 = { class: "text-xs font-medium text-gray-600 dark:text-gray-300" }, x7 = { key: 0 }, f7 = { class: "mt-3 flex flex-wrap gap-2" }, k7 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, v7 = { class: "flex items-center justify-between" }, w7 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, C7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, S7 = { class: "flex items-center justify-between" }, A7 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, T7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, U7 = { class: "flex items-center justify-between" }, E7 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, V7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, P7 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, $7 = ["placeholder"], R7 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, L7 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, M7 = ["placeholder"], D7 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, O7 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, I7 = ["placeholder"], z7 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, N7 = { class: "flex items-center justify-between" }, F7 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, H7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, B7 = {
  key: 0,
  class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400"
}, j7 = { class: "card console-card-motion-static" }, q7 = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, K7 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, W7 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, G7 = { class: "space-y-5 p-6" }, Y7 = { class: "flex items-center justify-between" }, Q7 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, X7 = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, J7 = {
  key: 0,
  class: "space-y-4"
}, Z7 = { class: "flex items-center justify-between" }, eC = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, tC = {
  key: 0,
  class: "rounded-lg border border-dashed border-gray-300 p-4 text-center text-sm text-gray-400 dark:border-dark-600"
}, aC = ["onClick"], nC = { class: "flex items-center gap-3" }, sC = { class: "text-xs text-gray-400" }, iC = {
  key: 0,
  class: "text-xs text-zo-signal-500"
}, oC = ["onClick"], lC = {
  key: 0,
  class: "space-y-3 border-t border-gray-100 px-4 pb-4 pt-3 dark:border-dark-700"
}, rC = { class: "text-xs text-gray-500" }, dC = { class: "relative" }, cC = ["onUpdate:modelValue", "type", "placeholder"], uC = {
  key: 0,
  class: "absolute inset-y-0 right-0 flex items-center pr-1.5"
}, mC = ["title", "onClick"], _C = {
  key: 0,
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, pC = {
  key: 1,
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, gC = ["title", "disabled", "onClick"], yC = { class: "grid grid-cols-2 gap-3" }, bC = { class: "text-xs text-gray-500" }, hC = ["onUpdate:modelValue"], xC = { class: "mt-0.5 text-xs text-gray-400" }, fC = { class: "text-xs text-gray-500" }, kC = ["value", "onInput"], vC = { class: "mt-0.5 text-xs text-gray-400" }, wC = { class: "flex items-center gap-2" }, CC = { class: "text-xs text-gray-500" }, SC = {
  key: 0,
  class: "flex-1 rounded-full bg-gray-200 dark:bg-dark-600",
  style: { height: "6px" }
}, AC = {
  key: 1,
  class: "flex-1"
}, TC = { class: "text-xs text-gray-500" }, UC = ["onClick"], EC = { class: "flex items-end gap-3" }, VC = { class: "flex-1" }, PC = { class: "text-xs text-gray-500" }, $C = { class: "mx-4 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl dark:bg-dark-800" }, RC = { class: "mb-4 text-lg font-semibold text-gray-900 dark:text-white" }, LC = { class: "flex items-center gap-2" }, MC = ["placeholder"], DC = ["disabled"], OC = {
  key: 0,
  class: "mt-4 max-h-80 overflow-y-auto rounded-lg bg-gray-50 p-4 dark:bg-dark-700"
}, IC = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, zC = {
  key: 0,
  class: "text-sm text-gray-400"
}, NC = ["href"], FC = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, HC = { class: "mt-4 flex justify-end" }, BC = { class: "card" }, jC = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, qC = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, KC = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, WC = { class: "space-y-4 p-6" }, GC = { class: "flex items-center justify-between" }, YC = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, QC = { class: "text-xs text-gray-500 dark:text-gray-400" }, XC = { class: "toggle" }, JC = { class: "card" }, ZC = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, e9 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, t9 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, a9 = { class: "space-y-6 p-6" }, n9 = { class: "flex items-center justify-between rounded-lg border border-zo-alert-200 bg-zo-alert-50 p-4 dark:border-zo-alert-800 dark:bg-zo-alert-900/20" }, s9 = { class: "text-sm font-medium text-gray-900 dark:text-white" }, i9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, o9 = { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, l9 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, r9 = ["placeholder"], d9 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, c9 = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, u9 = ["placeholder"], m9 = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, _9 = {
  class: "border-t border-gray-100 pt-4 dark:border-dark-700",
  "data-testid": "landing-notice-settings"
}, p9 = { class: "flex items-center justify-between gap-4" }, g9 = { class: "text-sm font-medium text-gray-900 dark:text-white" }, y9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, b9 = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, h9 = { class: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2" }, x9 = {
  for: "landing-notice-text",
  class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
}, f9 = ["placeholder"], k9 = {
  id: "landing-notice-text-help",
  class: "mt-1.5 flex items-start justify-between gap-3 text-xs text-gray-500 dark:text-gray-400"
}, v9 = { class: "shrink-0 tabular-nums" }, w9 = {
  for: "landing-notice-url",
  class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
}, C9 = ["placeholder", "aria-invalid"], S9 = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, A9 = { class: "text-sm font-medium text-gray-900 dark:text-white" }, T9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, U9 = { class: "mt-4 divide-y divide-gray-100 dark:divide-dark-700" }, E9 = { class: "flex items-center justify-between gap-4 py-3" }, V9 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, P9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, $9 = { class: "flex items-center justify-between gap-4 py-3" }, R9 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, L9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, M9 = { class: "grid grid-cols-1 gap-3 py-3 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center" }, D9 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, O9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, I9 = { value: "header" }, z9 = { value: "sidebar" }, N9 = { class: "grid gap-4 py-4 lg:grid-cols-2" }, F9 = {
  class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600",
  "data-testid": "user-sidebar-order-section"
}, H9 = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, B9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, j9 = {
  class: "mt-3 space-y-2",
  "data-testid": "user-sidebar-order-list"
}, q9 = ["data-sidebar-path"], K9 = { class: "w-5 shrink-0 text-center text-xs tabular-nums text-gray-400" }, W9 = { class: "min-w-0 flex-1 truncate text-sm text-gray-700 dark:text-gray-300" }, G9 = { class: "flex shrink-0 gap-1" }, Y9 = ["aria-label", "disabled", "onClick"], Q9 = ["aria-label", "disabled", "onClick"], X9 = {
  class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600",
  "data-testid": "admin-sidebar-order-section"
}, J9 = { class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300" }, Z9 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, eS = {
  class: "mt-3 space-y-2",
  "data-testid": "admin-sidebar-order-list"
}, tS = ["data-sidebar-path"], aS = { class: "w-5 shrink-0 text-center text-xs tabular-nums text-gray-400" }, nS = { class: "min-w-0 flex-1 truncate text-sm text-gray-700 dark:text-gray-300" }, sS = { class: "flex shrink-0 gap-1" }, iS = ["aria-label", "disabled", "onClick"], oS = ["aria-label", "disabled", "onClick"], lS = {
  class: "border-t border-gray-100 pt-4 dark:border-dark-700",
  "data-testid": "header-navigation-settings"
}, rS = { class: "flex items-center justify-between gap-4" }, dS = { class: "text-sm font-medium text-gray-900 dark:text-white" }, cS = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, uS = {
  key: 0,
  class: "mt-4 rounded-lg border border-dashed border-gray-300 px-4 py-5 text-center text-sm text-gray-500 dark:border-dark-600 dark:text-gray-400",
  "data-testid": "header-navigation-empty"
}, mS = {
  key: 1,
  class: "mt-4 space-y-3"
}, _S = { class: "mb-3 flex items-center justify-between gap-3" }, pS = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, gS = { class: "flex items-center gap-1" }, yS = ["title", "onClick"], bS = ["title", "onClick"], hS = ["title", "onClick"], xS = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, fS = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, kS = ["onUpdate:modelValue", "data-testid", "placeholder"], vS = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, wS = ["onUpdate:modelValue", "data-testid"], CS = { value: "all" }, SS = { value: "user" }, AS = { value: "admin" }, TS = { class: "sm:col-span-2" }, US = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, ES = ["onUpdate:modelValue", "data-testid", "placeholder"], VS = { class: "sm:col-span-2" }, PS = { class: "mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400" }, $S = { class: "sm:col-span-2" }, RS = { class: "mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400" }, LS = { class: "mt-4" }, MS = { class: "text-xs text-gray-500 dark:text-gray-400" }, DS = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, OS = ["placeholder"], IS = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, zS = { class: "border-t border-gray-100 pt-4 dark:border-dark-700" }, NS = { class: "text-sm font-medium text-gray-900 dark:text-white" }, FS = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, HS = { class: "mt-4 grid grid-cols-1 gap-6 md:grid-cols-2" }, BS = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, jS = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, qS = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, KS = ["placeholder"], WS = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, GS = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, YS = { class: "mb-3 text-xs text-gray-500 dark:text-gray-400" }, QS = { class: "space-y-3" }, XS = { class: "mb-3 flex items-center justify-between" }, JS = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, ZS = ["onClick"], eA = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, tA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, aA = ["onUpdate:modelValue", "placeholder"], nA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, sA = ["onUpdate:modelValue", "placeholder"], iA = { class: "sm:col-span-2" }, oA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, lA = ["onUpdate:modelValue", "placeholder"], rA = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, dA = ["placeholder"], cA = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, uA = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, mA = ["placeholder"], _A = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, pA = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, gA = ["placeholder"], yA = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, bA = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, hA = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, xA = ["placeholder"], fA = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, kA = { class: "mt-2 text-xs text-zo-alert-600 dark:text-zo-alert-400" }, vA = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, wA = { class: "font-medium text-gray-900 dark:text-white" }, CA = { class: "text-sm text-gray-500 dark:text-gray-400" }, SA = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, AA = { class: "font-medium text-gray-900 dark:text-white" }, TA = { class: "text-sm text-gray-500 dark:text-gray-400" }, UA = { class: "card" }, EA = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, VA = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, PA = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, $A = { class: "space-y-4 p-6" }, RA = {
  class: "rounded-lg border border-primary-200 bg-primary-50/50 p-4 dark:border-primary-800 dark:bg-primary-900/10",
  "data-testid": "image-tutorial-menu-settings"
}, LA = { class: "mb-1 block text-sm font-medium text-gray-900 dark:text-white" }, MA = ["placeholder"], DA = { class: "mt-1.5 text-xs leading-5 text-gray-500 dark:text-gray-400" }, OA = { class: "mb-3 flex items-center justify-between" }, IA = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, zA = { class: "flex items-center gap-2" }, NA = ["title", "onClick"], FA = ["title", "onClick"], HA = ["title", "onClick"], BA = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, jA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, qA = ["onUpdate:modelValue", "placeholder"], KA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, WA = ["onUpdate:modelValue", "data-testid"], GA = { value: "user" }, YA = { value: "admin" }, QA = { value: "all" }, XA = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, JA = ["onUpdate:modelValue", "data-testid"], ZA = { value: "sidebar" }, eT = { value: "header" }, tT = { value: "both" }, aT = { class: "sm:col-span-2" }, nT = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, sT = ["onUpdate:modelValue", "placeholder"], iT = { class: "flex items-start gap-3 sm:col-span-2" }, oT = ["onUpdate:modelValue"], lT = { class: "block text-xs font-medium text-gray-600 dark:text-gray-400" }, rT = { class: "mt-0.5 block text-xs text-gray-500 dark:text-gray-500" }, dT = { class: "sm:col-span-2" }, cT = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, uT = { class: "card" }, mT = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, _T = { class: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between" }, pT = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, gT = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, yT = { class: "flex items-center gap-3" }, bT = { class: "text-sm text-gray-600 dark:text-gray-300" }, hT = { class: "space-y-6 p-6" }, xT = { class: "grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_220px]" }, fT = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, kT = { class: "grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-dark-700" }, vT = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, wT = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, CT = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, ST = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, AT = { class: "text-sm font-medium text-gray-900 dark:text-white" }, TT = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, UT = { class: "mt-4 space-y-3" }, ET = { class: "mb-3 flex items-center justify-between gap-3" }, VT = { class: "flex min-w-0 items-center gap-3" }, PT = { class: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-dark-200" }, $T = { class: "min-w-0" }, RT = { class: "truncate text-sm font-semibold text-gray-900 dark:text-white" }, LT = { class: "truncate text-xs text-gray-500 dark:text-gray-400" }, MT = ["disabled", "onClick"], DT = { class: "grid grid-cols-1 gap-3 lg:grid-cols-2" }, OT = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, IT = ["onUpdate:modelValue", "placeholder"], zT = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, NT = { class: "flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 dark:border-dark-600 dark:bg-dark-900" }, FT = ["onUpdate:modelValue"], HT = { class: "mt-3" }, BT = { class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400" }, jT = ["onUpdate:modelValue", "placeholder"], qT = { class: "card" }, KT = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, WT = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, GT = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, YT = { class: "mt-1.5 text-xs" }, QT = { class: "space-y-5 p-6" }, XT = { class: "flex items-center justify-between" }, JT = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, ZT = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, eU = { class: "flex items-start justify-between gap-4 border-t border-gray-100 pt-5 dark:border-dark-700" }, tU = { class: "min-w-0" }, aU = { class: "text-sm font-medium text-gray-900 dark:text-white" }, nU = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, sU = {
  key: 0,
  class: "space-y-5"
}, iU = { class: "input-label" }, oU = { class: "mt-1 text-xs text-gray-400" }, lU = { class: "flex items-start justify-between gap-4" }, rU = { class: "min-w-0" }, dU = { class: "text-sm font-medium text-gray-900 dark:text-white" }, cU = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, uU = { class: "card" }, mU = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, _U = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, pU = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, gU = { class: "mt-1.5 text-xs" }, yU = { class: "space-y-5 p-6" }, bU = { class: "flex items-center justify-between" }, hU = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, xU = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, fU = { class: "card" }, kU = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, vU = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, wU = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, CU = { class: "space-y-5 p-6" }, SU = { class: "flex items-center justify-between" }, AU = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, TU = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, UU = {
  key: 0,
  class: "flex items-center justify-between"
}, EU = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, VU = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, PU = { key: 1 }, $U = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, RU = { class: "mb-2 mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, LU = { class: "card" }, MU = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, DU = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, OU = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, IU = { class: "mt-1.5 text-xs" }, zU = { class: "space-y-5 p-6" }, NU = { class: "flex items-center justify-between" }, FU = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, HU = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, BU = { class: "flex items-center justify-between" }, jU = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, qU = { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, KU = { key: 0 }, WU = { class: "input-label" }, GU = { class: "card" }, YU = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, QU = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, XU = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, JU = ["href"], ZU = { class: "space-y-4 p-6" }, eE = { class: "flex items-center justify-between" }, tE = { class: "font-medium text-gray-900 dark:text-white" }, aE = { class: "text-sm text-gray-500 dark:text-gray-400" }, nE = { class: "grid grid-cols-1 gap-3 sm:grid-cols-3" }, sE = { class: "input-label" }, iE = { class: "input-label" }, oE = { class: "input-label" }, lE = { class: "rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300" }, rE = { class: "grid grid-cols-2 gap-3 sm:grid-cols-5" }, dE = { class: "input-label" }, cE = ["value", "placeholder"], uE = { class: "input-label" }, mE = ["value", "placeholder"], _E = { class: "input-label" }, pE = ["value", "placeholder"], gE = { class: "input-label" }, yE = ["value"], bE = { class: "mt-0.5 text-xs text-gray-400" }, hE = { class: "mt-1 text-xs font-medium text-primary-600 dark:text-primary-400" }, xE = { class: "input-label" }, fE = ["value", "placeholder"], kE = { class: "mt-0.5 text-xs text-gray-400" }, vE = { class: "input-label" }, wE = { class: "relative" }, CE = ["value"], SE = { class: "mt-0.5 text-xs text-gray-400" }, AE = {
  key: 0,
  class: "mt-1 text-xs font-medium text-primary-600 dark:text-primary-400"
}, TE = { class: "input-label" }, UE = { class: "mt-0.5 text-xs text-gray-400" }, EE = { class: "flex flex-wrap items-end gap-4" }, VE = { class: "w-28" }, PE = { class: "input-label" }, $E = { class: "input-label" }, RE = { class: "input-label" }, LE = { class: "flex items-center gap-2" }, ME = ["disabled"], DE = ["disabled"], OE = { class: "input-label" }, IE = { class: "flex items-center gap-2" }, zE = { class: "text-sm text-gray-500 dark:text-gray-400" }, NE = { class: "input-label" }, FE = { class: "flex items-center gap-2" }, HE = { class: "text-sm text-gray-500 dark:text-gray-400" }, BE = { class: "input-label" }, jE = { class: "mt-1.5 flex flex-wrap gap-2" }, qE = ["onClick"], KE = { class: "mt-2 text-xs text-gray-400 dark:text-gray-500" }, WE = ["href"], GE = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, YE = { class: "input-label" }, QE = { class: "input-label" }, XE = ["placeholder"], JE = {
  key: 0,
  class: "card"
}, ZE = { class: "p-6" }, eV = { class: "flex items-start gap-3" }, tV = { class: "font-medium text-gray-900 dark:text-white" }, aV = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, nV = {
  key: 1,
  class: "card"
}, sV = { class: "flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, iV = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, oV = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, lV = ["disabled"], rV = {
  key: 0,
  class: "h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, dV = { class: "space-y-6 p-6" }, cV = { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, uV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, mV = ["placeholder"], _V = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, pV = ["placeholder"], gV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, yV = ["placeholder"], bV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, hV = ["placeholder"], xV = { class: "mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, fV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, kV = ["placeholder"], vV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, wV = ["placeholder"], CV = { class: "flex items-center justify-between border-t border-gray-100 pt-4 dark:border-dark-700" }, SV = { class: "font-medium text-gray-900 dark:text-white" }, AV = { class: "text-sm text-gray-500 dark:text-gray-400" }, TV = {
  key: 2,
  class: "card"
}, UV = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, EV = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, VV = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, PV = { class: "p-6" }, $V = { class: "flex items-end gap-4" }, RV = { class: "flex-1" }, LV = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, MV = ["placeholder"], DV = ["disabled"], OV = {
  key: 0,
  class: "h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, IV = { class: "card" }, zV = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, NV = { class: "text-base font-medium text-gray-900 dark:text-white" }, FV = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, HV = { class: "px-6 py-6" }, BV = { class: "flex items-center justify-between gap-4" }, jV = { class: "mb-0 block text-sm font-medium text-gray-700 dark:text-gray-300" }, qV = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, KV = { class: "card" }, WV = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, GV = { class: "text-base font-medium text-gray-900 dark:text-white" }, YV = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, QV = { class: "px-6 py-6 space-y-4" }, XV = { class: "flex items-center justify-between" }, JV = { class: "mb-0 block text-sm font-medium text-gray-700 dark:text-gray-300" }, ZV = { key: 0 }, eP = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, tP = { class: "relative" }, aP = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, nP = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, sP = ["placeholder"], iP = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, oP = { class: "card" }, lP = { class: "border-b border-gray-100 px-6 py-4 dark:border-dark-700" }, rP = { class: "text-base font-medium text-gray-900 dark:text-white" }, dP = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, cP = { class: "px-6 py-6 space-y-4" }, uP = { class: "flex items-center justify-between" }, mP = { class: "mb-0 block text-sm font-medium text-gray-700 dark:text-gray-300" }, _P = { key: 0 }, pP = { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, gP = { class: "space-y-2" }, yP = { class: "relative inline-flex items-center cursor-pointer shrink-0" }, bP = ["checked", "onChange"], hP = ["onUpdate:modelValue", "placeholder"], xP = ["onClick"], fP = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, kP = { class: "space-y-2 text-right" }, vP = {
  key: 0,
  "data-zero-one-settings-save-status": "true",
  role: "alert",
  class: "text-sm text-red-600 dark:text-red-400"
}, wP = ["disabled"], CP = {
  key: 0,
  class: "h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ln = 5, Mn = 1e3, SP = 20, Hi = "", Bi = "", Dn = "You are Claude Code, Anthropic's official CLI for Claude.", Qa = `You are an interactive agent that helps users with software engineering tasks. Use the instructions below and the tools available to you to assist the user.

IMPORTANT: Assist with authorized security testing, defensive security, CTF challenges, and educational contexts. Refuse requests for destructive techniques, DoS attacks, mass targeting, supply chain compromise, or detection evasion for malicious purposes. Dual-use security tools (C2 frameworks, credential testing, exploit development) require clear authorization context: pentesting engagements, CTF competitions, security research, or defensive use cases.
IMPORTANT: You must NEVER generate or guess URLs for the user unless you are confident that the URLs are for helping the user with programming. You may use URLs provided by the user in their messages or local files.

# Tone and style
 - Only use emojis if the user explicitly requests it. Avoid using emojis in all communication unless asked.
 - Your responses should be short and concise.
 - When referencing specific functions or pieces of code include the pattern file_path:line_number to allow the user to easily navigate to the source code location.
 - When referencing GitHub issues or pull requests, use the owner/repo#123 format (e.g. anthropics/claude-code#100) so they render as clickable links.
 - Do not use a colon before tool calls. Your tool calls may not be shown directly in the output, so text like "Let me read the file:" followed by a read tool call should just be "Let me read the file." with a period.`, AP = 1e3, Cs = 16, TP = /* @__PURE__ */ ft({
  __name: "SettingsView",
  setup(u) {
    const { t, locale: _ } = St(), x = $s(), U = Ls(), L = Ql(), z = W(() => _.value.startsWith("zh"));
    function E(l, i) {
      return z.value ? l : i;
    }
    const A = W(
      () => _.value.startsWith("zh") ? "https://github.com/Wei-Shaw/sub2api/blob/main/docs/PAYMENT_CN.md" : "https://github.com/Wei-Shaw/sub2api/blob/main/docs/PAYMENT.md"
    ), C = W(
      () => _.value.startsWith("zh") ? "https://github.com/Wei-Shaw/sub2api/blob/main/docs/PAYMENT_CN.md#支持的支付方式" : "https://github.com/Wei-Shaw/sub2api/blob/main/docs/PAYMENT.md#supported-payment-methods"
    ), M = O("general"), F = [
      { key: "general", icon: "home" },
      { key: "agreement", icon: "document" },
      { key: "features", icon: "bolt" },
      { key: "security", icon: "shield" },
      { key: "users", icon: "user" },
      { key: "gateway", icon: "server" },
      { key: "payment", icon: "creditCard" },
      { key: "email", icon: "mail" },
      { key: "backup", icon: "database" }
    ], G = {
      ArrowLeft: -1,
      ArrowUp: -1,
      ArrowRight: 1,
      ArrowDown: 1,
      Home: "first",
      End: "last"
    };
    function ie(l) {
      M.value = l;
    }
    function ye(l) {
      window.requestAnimationFrame(() => {
        var i;
        (i = document.getElementById(`settings-tab-${l}`)) == null || i.focus();
      });
    }
    function le(l, i) {
      var N;
      const m = G[l.key];
      if (m === void 0)
        return;
      l.preventDefault();
      const o = F.findIndex((Le) => Le.key === i);
      let b = o < 0 ? 0 : o;
      m === "first" ? b = 0 : m === "last" ? b = F.length - 1 : b = (b + m + F.length) % F.length;
      const g = (N = F[b]) == null ? void 0 : N.key;
      g && (ie(g), ye(g));
    }
    const { copyToClipboard: re } = Yl(), me = O(!0), we = O(!1), ne = O(!1), Y = O(""), J = O(!1), te = O(!1), Z = O(!1), de = O(""), Ce = O([]), ge = O(""), pe = O(""), Ve = O("10, 20, 50, 100"), Pe = O(!0), Ie = O(!1), $e = O(""), Be = O(!1), Oe = O(""), Fe = O([]), at = /* @__PURE__ */ new Map();
    function Ue(l, i) {
      at.set(l, JSON.stringify(i));
    }
    function $(l, i) {
      const m = at.get(l);
      return m !== void 0 && m !== JSON.stringify(i);
    }
    const X = O(!0), I = He({
      enabled: !0,
      interval_minutes: 30
    }), he = O(!0), Q = He({
      enabled: !1,
      interval_minutes: 60,
      debounce_minutes: 1
    }), _e = O(!0), De = He({
      enabled: !0,
      cooldown_minutes: 10
    }), H = O(!0), j = He({
      enabled: !0,
      cooldown_seconds: 5
    }), fe = O(!0), xe = He({
      enabled: !0,
      user_rpm: 240,
      heavy_rpm: 60,
      exempt_admin: !0,
      public_ip_rpm: 300
    }), R = O(!0), S = He({
      enabled: !0,
      action: "temp_unsched",
      temp_unsched_minutes: 5,
      threshold_count: 3,
      threshold_window_minutes: 10
    }), h = O(!0), y = He({
      enabled: !0,
      thinking_signature_enabled: !0,
      thinking_budget_enabled: !0,
      apikey_signature_enabled: !1,
      apikey_signature_patterns: []
    }), w = O(!0), ke = He({
      rules: []
    }), ve = He({
      rules: []
    }), Qt = O(!1);
    function st(l) {
      if (!l) return !0;
      try {
        const i = new URL(l);
        return i.protocol === "http:" || i.protocol === "https:";
      } catch {
        return !1;
      }
    }
    function Pt(l) {
      return !l || l.startsWith("/") && !l.startsWith("//") && !l.includes("\\") && !Array.from(l).some((i) => {
        const m = i.charCodeAt(0);
        return m <= 31 || m === 127;
      }) ? !0 : st(l);
    }
    function Va() {
      return [
        {
          id: "terms",
          title: E("服务条款", "Terms of Service"),
          content_md: ""
        },
        {
          id: "usage-policy",
          title: E("使用政策", "Usage Policy"),
          content_md: ""
        },
        {
          id: "supported-regions",
          title: E("支持的国家和地区", "Supported Countries and Regions"),
          content_md: ""
        },
        {
          id: "service-specific-terms",
          title: E("服务特定条款", "Service-Specific Terms"),
          content_md: ""
        }
      ];
    }
    function kt(l) {
      return l.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/[-_]{2,}/g, "-").replace(/^[-_]+|[-_]+$/g, "");
    }
    function tn(l, i) {
      return `/legal/${kt(l.id || l.title) || `doc-${i + 1}`}`;
    }
    let ia = 0;
    function an() {
      return ia += 1, `claude-oauth-system-prompt-block-${ia}`;
    }
    function oa(l) {
      return typeof l == "string" && l.trim() ? l.trim() : "5m";
    }
    function ut(l) {
      const i = l.trim();
      return i === "{billing_header}" ? "billing" : i === "{claude_code_system_prompt}" || i === Dn ? "system" : i === "{claude_code_expansion_prompt}" || i === Qa ? "expansion" : "custom";
    }
    function $t(l, i = "") {
      const m = l.trim();
      return m === "{claude_code_system_prompt}" ? Dn : m === "{claude_code_expansion_prompt}" ? i.trim() || Qa : l;
    }
    function it(l = {}) {
      const i = l.text ?? "";
      return {
        id: an(),
        enabled: l.enabled ?? !0,
        expanded: l.expanded ?? !0,
        type: "text",
        preset: l.preset ?? ut(i),
        text: i,
        cacheControlEnabled: l.cacheControlEnabled ?? !1,
        cacheControlTTL: l.cacheControlTTL ?? "5m"
      };
    }
    function At(l = "") {
      const m = l.trim() || Qa;
      return [
        it({
          preset: "billing",
          text: "{billing_header}"
        }),
        it({
          preset: "system",
          text: Dn
        }),
        it({
          preset: m === Qa ? "expansion" : "custom",
          text: m,
          cacheControlEnabled: !0,
          cacheControlTTL: "5m"
        })
      ];
    }
    function la(l) {
      return l === !0 ? { enabled: !0, ttl: "5m" } : l && typeof l == "object" && !Array.isArray(l) ? {
        enabled: !0,
        ttl: oa(
          l.ttl
        )
      } : { enabled: !1, ttl: "5m" };
    }
    function ra(l, i = "") {
      const m = l.trim();
      if (!m)
        return At(i);
      try {
        const o = JSON.parse(m), b = Array.isArray(o) ? o : Array.isArray(o.blocks) ? o.blocks : [];
        return b.length === 0 ? At(i) : b.map((g) => {
          const N = la(
            g.cache_control
          ), Le = $t(
            typeof g.text == "string" ? g.text : "",
            i
          );
          return it({
            enabled: g.enabled !== !1,
            type: "text",
            text: Le,
            preset: ut(Le),
            cacheControlEnabled: N.enabled,
            cacheControlTTL: N.ttl
          });
        });
      } catch {
        return At(i);
      }
    }
    function Xt(l) {
      const m = (l.length > 0 ? l : [
        it({
          enabled: !1,
          preset: "custom",
          text: ""
        })
      ]).map((o) => {
        const b = {
          enabled: o.enabled,
          type: o.type || "text",
          text: o.text
        };
        return o.cacheControlEnabled && (b.cache_control = {
          type: "ephemeral",
          ttl: oa(o.cacheControlTTL)
        }), b;
      });
      return JSON.stringify(m, null, 2);
    }
    const Rt = Xt(
      At()
    ), Ge = O(
      At()
    ), Jt = W(() => [
      {
        value: "billing",
        label: t("admin.settings.gatewayForwarding.systemBlockPresetBilling")
      },
      {
        value: "system",
        label: t("admin.settings.gatewayForwarding.systemBlockPresetIdentity")
      },
      {
        value: "expansion",
        label: t("admin.settings.gatewayForwarding.systemBlockPresetExpansion")
      },
      {
        value: "custom",
        label: t("admin.settings.gatewayForwarding.systemBlockPresetCustom")
      }
    ]), nn = W(() => [
      {
        value: "text",
        label: t("admin.settings.gatewayForwarding.systemBlockTypeText")
      }
    ]), sn = W(() => [
      { value: "5m", label: t("admin.settings.gatewayForwarding.cacheTTL5m") },
      { value: "1h", label: t("admin.settings.gatewayForwarding.cacheTTL1h") }
    ]);
    function on(l) {
      var i;
      return ((i = Jt.value.find(
        (m) => m.value === l
      )) == null ? void 0 : i.label) || t("admin.settings.gatewayForwarding.systemBlockPresetCustom");
    }
    function vt() {
      s.claude_oauth_system_prompt_blocks = Xt(
        Ge.value
      );
    }
    function Pa() {
      Ge.value.push(
        it({
          expanded: !0,
          preset: "custom",
          text: ""
        })
      ), vt();
    }
    function Lt(l) {
      const i = Ge.value[l];
      i && (i.expanded = !i.expanded);
    }
    function jt(l) {
      Ge.value.splice(l, 1), vt();
    }
    function Tt(l, i) {
      const m = l + i;
      if (m < 0 || m >= Ge.value.length)
        return;
      const o = Ge.value, b = o[l];
      o[l] = o[m], o[m] = b, vt();
    }
    function ln(l, i) {
      const m = Ge.value[l];
      if (!m)
        return;
      const o = String(i || "custom");
      m.preset = o, m.type = "text", o === "billing" ? (m.text = "{billing_header}", m.cacheControlEnabled = !1, m.cacheControlTTL = "5m") : o === "system" ? (m.text = Dn, m.cacheControlEnabled = !1, m.cacheControlTTL = "5m") : o === "expansion" && (m.text = s.claude_oauth_system_prompt.trim() || Qa, m.cacheControlEnabled = !0, m.cacheControlTTL = "5m"), vt();
    }
    function rn(l) {
      l.preset = ut(l.text), vt();
    }
    function dn() {
      Ge.value = At(
        s.claude_oauth_system_prompt
      ), vt();
    }
    const cn = zl, $a = /* @__PURE__ */ new Set([
      "affiliate_enabled",
      "affiliate_rebate_rate",
      "affiliate_rebate_freeze_hours",
      "affiliate_rebate_duration_days",
      "affiliate_rebate_per_invitee_cap",
      "affiliate_admin_recharge_enabled"
    ]);
    function Zt(l) {
      return Fl().filter((i) => !!(l != null && l[i]));
    }
    const s = He({
      registration_enabled: !0,
      email_verify_enabled: !1,
      registration_email_suffix_whitelist: [],
      registration_email_domain_quota_enabled: !1,
      promo_code_enabled: !0,
      invitation_code_enabled: !1,
      password_reset_enabled: !1,
      totp_enabled: !1,
      totp_encryption_key_configured: !1,
      passkey_enabled: !1,
      passkey_configured: !1,
      passkey_rp_id: "",
      passkey_rp_origins: [],
      session_binding_enabled: !1,
      step_up_enabled: !1,
      audit_log_retention_days: 180,
      login_agreement_enabled: !1,
      login_agreement_mode: "modal",
      login_agreement_updated_at: "2026-03-31",
      login_agreement_documents: Va(),
      default_balance: 0,
      default_platform_quotas: ls(),
      account_scheduling_thresholds: os(),
      default_concurrency: 1,
      default_subscriptions: [],
      force_email_on_third_party_signup: !1,
      default_user_rpm_limit: 0,
      site_name: "Sub2API",
      site_logo: "",
      site_subtitle: "Subscription to API Conversion Platform",
      landing_notice_enabled: !1,
      landing_notice_text: Hi,
      landing_notice_url: Bi,
      community_qr_enabled: !1,
      community_qr_image: "",
      community_qr_title: "交流群",
      community_qr_description: "扫码加入交流群获取支持",
      api_base_url: "",
      contact_info: "",
      doc_url: "",
      landing_tutorial_url: "",
      home_content: "",
      compact_home_enabled: !1,
      backend_mode_enabled: !1,
      hide_ccs_import_button: !1,
      profile_navigation_enabled: !0,
      subscription_navigation_enabled: !0,
      model_plaza_placement: "header",
      user_sidebar_order: [],
      admin_sidebar_order: [],
      payment_enabled: !1,
      risk_control_enabled: !1,
      cyber_session_block_enabled: !1,
      cyber_session_block_ttl_seconds: 3600,
      payment_min_amount: 1,
      payment_max_amount: 1e4,
      payment_daily_limit: 5e4,
      payment_max_pending_orders: 3,
      payment_order_timeout_minutes: 30,
      payment_balance_disabled: !1,
      payment_balance_recharge_multiplier: 1,
      payment_subscription_usd_to_cny_rate: 0,
      payment_recharge_fee_rate: 0,
      payment_recharge_bonus_tiers: [],
      payment_recharge_bonus_mode: "bonus",
      payment_recharge_bonus_notice: "",
      payment_enabled_types: [],
      payment_help_image_url: "",
      payment_help_text: "",
      payment_product_name_prefix: "",
      payment_product_name_suffix: "",
      payment_load_balance_strategy: "round-robin",
      payment_cancel_rate_limit_enabled: !1,
      payment_cancel_rate_limit_max: 10,
      payment_cancel_rate_limit_window: 1,
      payment_cancel_rate_limit_unit: "day",
      payment_cancel_rate_limit_window_mode: "rolling",
      payment_alipay_force_qrcode: !1,
      payment_alipay_mobile_precreate_deep_link: !1,
      table_default_page_size: SP,
      table_page_size_options: [10, 20, 50, 100],
      custom_menu_items: [],
      custom_endpoints: [],
      frontend_url: "",
      smtp_host: "",
      smtp_port: 587,
      smtp_username: "",
      smtp_password: "",
      smtp_password_configured: !1,
      smtp_from_email: "",
      smtp_from_name: "",
      smtp_use_tls: !0,
      // Cloudflare Turnstile
      turnstile_enabled: !1,
      turnstile_site_key: "",
      turnstile_secret_key: "",
      turnstile_secret_key_configured: !1,
      tencent_captcha_enabled: !1,
      tencent_captcha_app_id: "",
      tencent_captcha_app_secret_key: "",
      tencent_captcha_app_secret_key_configured: !1,
      tencent_captcha_cloud_secret_id: "",
      tencent_captcha_cloud_secret_id_configured: !1,
      tencent_captcha_cloud_secret_key: "",
      tencent_captcha_cloud_secret_key_configured: !1,
      tencent_captcha_region: "cn",
      aliyun_captcha_enabled: !1,
      aliyun_captcha_access_key_id: "",
      aliyun_captcha_access_key_secret: "",
      aliyun_captcha_access_key_secret_configured: !1,
      aliyun_captcha_scene_id: "",
      aliyun_captcha_prefix: "",
      aliyun_captcha_region: "cn",
      api_key_acl_trust_forwarded_ip: !0,
      forwarded_client_ip_headers: [],
      // LinuxDo Connect OAuth 登录
      linuxdo_connect_enabled: !1,
      linuxdo_connect_client_id: "",
      linuxdo_connect_client_secret: "",
      linuxdo_connect_client_secret_configured: !1,
      linuxdo_connect_redirect_url: "",
      // DingTalk Connect OAuth 登录
      dingtalk_connect_enabled: !1,
      dingtalk_connect_client_id: "",
      dingtalk_connect_client_secret: "",
      dingtalk_connect_client_secret_configured: !1,
      dingtalk_connect_redirect_url: "",
      dingtalk_connect_corp_restriction_policy: "none",
      dingtalk_connect_internal_corp_id: "",
      dingtalk_connect_bypass_registration: !1,
      dingtalk_connect_sync_corp_email: !1,
      dingtalk_connect_sync_display_name: !1,
      dingtalk_connect_sync_dept: !1,
      dingtalk_connect_sync_corp_email_attr_key: "dingtalk_email",
      dingtalk_connect_sync_display_name_attr_key: "dingtalk_name",
      dingtalk_connect_sync_dept_attr_key: "dingtalk_department",
      dingtalk_connect_sync_corp_email_attr_name: E("钉钉企业邮箱", "DingTalk Corporate Email"),
      dingtalk_connect_sync_display_name_attr_name: E("钉钉姓名", "DingTalk Name"),
      dingtalk_connect_sync_dept_attr_name: E("钉钉部门", "DingTalk Department"),
      wechat_connect_enabled: !1,
      wechat_connect_app_id: "",
      wechat_connect_app_secret: "",
      wechat_connect_app_secret_configured: !1,
      wechat_connect_open_app_id: "",
      wechat_connect_open_app_secret: "",
      wechat_connect_open_app_secret_configured: !1,
      wechat_connect_mp_app_id: "",
      wechat_connect_mp_app_secret: "",
      wechat_connect_mp_app_secret_configured: !1,
      wechat_connect_mobile_app_id: "",
      wechat_connect_mobile_app_secret: "",
      wechat_connect_mobile_app_secret_configured: !1,
      wechat_connect_open_enabled: !1,
      wechat_connect_mp_enabled: !1,
      wechat_connect_mobile_enabled: !1,
      wechat_connect_mode: "open",
      wechat_connect_scopes: "snsapi_login",
      wechat_connect_redirect_url: "",
      wechat_connect_frontend_redirect_url: "/auth/wechat/callback",
      // Generic OIDC OAuth 登录
      oidc_connect_enabled: !1,
      oidc_connect_provider_name: "OIDC",
      oidc_connect_client_id: "",
      oidc_connect_client_secret: "",
      oidc_connect_client_secret_configured: !1,
      oidc_connect_issuer_url: "",
      oidc_connect_discovery_url: "",
      oidc_connect_authorize_url: "",
      oidc_connect_token_url: "",
      oidc_connect_userinfo_url: "",
      oidc_connect_jwks_url: "",
      oidc_connect_scopes: "openid email profile",
      oidc_connect_redirect_url: "",
      oidc_connect_frontend_redirect_url: "/auth/oidc/callback",
      oidc_connect_token_auth_method: "client_secret_post",
      oidc_connect_use_pkce: !1,
      oidc_connect_validate_id_token: !1,
      oidc_connect_allowed_signing_algs: "RS256,ES256,PS256",
      oidc_connect_clock_skew_seconds: 120,
      oidc_connect_require_email_verified: !1,
      oidc_connect_userinfo_email_path: "",
      oidc_connect_userinfo_id_path: "",
      oidc_connect_userinfo_username_path: "",
      // GitHub / Google 邮箱快捷登录
      github_oauth_enabled: !1,
      github_oauth_client_id: "",
      github_oauth_client_secret: "",
      github_oauth_client_secret_configured: !1,
      github_oauth_redirect_url: "",
      github_oauth_frontend_redirect_url: "/auth/oauth/callback",
      google_oauth_enabled: !1,
      google_oauth_client_id: "",
      google_oauth_client_secret: "",
      google_oauth_client_secret_configured: !1,
      google_oauth_redirect_url: "",
      google_oauth_frontend_redirect_url: "/auth/oauth/callback",
      // Model fallback
      enable_model_fallback: !1,
      fallback_model_anthropic: "claude-3-5-sonnet-20241022",
      fallback_model_openai: "gpt-4o",
      fallback_model_gemini: "gemini-2.5-pro",
      fallback_model_antigravity: "gemini-2.5-pro",
      grok_default_text_model: "grok-4.5",
      grok_cross_client_model_map_enabled: !1,
      grok_default_base_url_mode: "cli",
      // Identity patch (Claude -> Gemini)
      enable_identity_patch: !0,
      identity_patch_prompt: "",
      // Ops monitoring (vNext)
      ops_monitoring_enabled: !0,
      ops_realtime_monitoring_enabled: !0,
      ops_query_mode_default: "auto",
      ops_metrics_interval_seconds: 60,
      // Claude Code version check
      min_claude_code_version: "",
      max_claude_code_version: "",
      // 分组隔离
      allow_ungrouped_key_scheduling: !1,
      openai_low_upstream_rate_priority_enabled: !1,
      openai_oauth_scheduling_rate_multiplier: 1,
      openai_advanced_scheduler_enabled: !1,
      openai_advanced_scheduler_sticky_weighted_enabled: !1,
      openai_advanced_scheduler_subscription_priority_enabled: !1,
      openai_advanced_scheduler_lb_top_k: "",
      openai_advanced_scheduler_weight_priority: "",
      openai_advanced_scheduler_weight_load: "",
      openai_advanced_scheduler_weight_queue: "",
      openai_advanced_scheduler_weight_error_rate: "",
      openai_advanced_scheduler_weight_ttft: "",
      openai_advanced_scheduler_weight_reset: "",
      openai_advanced_scheduler_weight_quota_headroom: "",
      openai_advanced_scheduler_weight_upstream_cost: "",
      openai_advanced_scheduler_weight_previous_response: "",
      openai_advanced_scheduler_weight_session_sticky: "",
      // Gateway forwarding behavior
      enable_fingerprint_unification: !0,
      enable_metadata_passthrough: !1,
      enable_cch_signing: !1,
      enable_claude_oauth_system_prompt_injection: !0,
      claude_oauth_system_prompt: "",
      claude_oauth_system_prompt_blocks: Rt,
      enable_anthropic_cache_ttl_1h_injection: !1,
      rewrite_message_cache_control: !1,
      enable_client_dateline_normalization: !0,
      antigravity_user_agent_version: "",
      openai_codex_user_agent: "",
      openai_codex_client_version: "",
      // 只读展示：自动同步任务写入的官方最新稳定版，不参与提交（提交载荷按字段显式构造）
      openai_codex_client_version_synced: "",
      openai_codex_version_auto_sync_enabled: !0,
      // codex_cli_only 加固
      min_codex_version: "",
      max_codex_version: "",
      codex_cli_only_blacklist: "",
      codex_cli_only_whitelist: "",
      codex_cli_only_allow_app_server_clients: !1,
      codex_cli_only_engine_fingerprint_signals: "",
      // 余额、订阅到期与账号限额通知
      balance_low_notify_enabled: !1,
      balance_low_notify_threshold: 0,
      balance_low_notify_recharge_url: "",
      subscription_expiry_notify_enabled: !0,
      account_quota_notify_enabled: !1,
      account_quota_notify_emails: [],
      // Channel Monitor feature switch
      channel_monitor_enabled: !0,
      public_channel_status_enabled: !1,
      channel_monitor_default_interval_seconds: 60,
      channel_monitor_show_quota: !1,
      // Available Channels feature switch
      available_channels_enabled: !1,
      // Subscription feature switch
      subscription_enabled: !0,
      // Model Plaza feature switches + description
      model_plaza_enabled: !1,
      model_plaza_require_auth: !1,
      model_plaza_description: "",
      // Allow user view error requests
      allow_user_view_error_requests: !1
    }), ot = W(
      () => !Pt(s.landing_notice_url)
    ), Mt = W(
      () => s.custom_menu_items.map((l, i) => ({ item: l, index: i }))
    ), da = W(
      () => Rn(s.custom_menu_items)
    ), ca = W({
      get: () => {
        var l;
        return ((l = da.value) == null ? void 0 : l.url) ?? "";
      },
      set: (l) => zs(l)
    }), ua = W(
      () => Mt.value.filter(({ item: l }) => l.placement === "header")
    ), ma = W(
      () => Mt.value.filter(
        ({ item: l }) => l.placement !== "header" && l !== da.value
      )
    ), Ra = /^[A-Za-z0-9_-]+$/;
    function La(l) {
      return Ra.test(l.id);
    }
    const _a = W(() => [
      { path: "/dashboard", label: t("nav.dashboard") },
      { path: "/model-plaza", label: t("nav.modelPlaza") },
      { path: "/keys", label: t("nav.apiKeys") },
      { path: "/batch-image", label: t("nav.batchImage") },
      { path: "/usage", label: t("nav.usage") },
      { path: "/available-channels", label: t("nav.availableChannels") },
      { path: "/monitor", label: t("nav.channelStatus") },
      { path: "/subscriptions", label: t("nav.mySubscriptions") },
      { path: "/purchase", label: t("nav.buySubscription") },
      { path: "/orders", label: t("nav.myOrders") },
      { path: "/redeem", label: t("nav.redeem") },
      { path: "/images", label: t("nav.onlineImageGeneration") },
      { path: "/affiliate", label: t("nav.affiliate") },
      { path: "/profile", label: t("nav.profile") },
      ...s.custom_menu_items.filter(
        (l) => La(l) && (l.visibility === "user" || l.visibility === "all") && l.placement !== "header"
      ).map((l) => ({ path: `/custom/${l.id}`, label: l.label }))
    ]), un = W(() => [
      { path: "/admin/dashboard", label: t("nav.dashboard") },
      { path: "/model-plaza", label: t("nav.modelPlaza") },
      { path: "/admin/ops", label: t("nav.ops") },
      { path: "/admin/users", label: t("nav.users") },
      { path: "/admin/groups", label: t("nav.groups") },
      { path: "/admin/channels", label: t("nav.channelManagement") },
      { path: "/admin/subscriptions", label: t("nav.subscriptions") },
      { path: "/admin/accounts", label: t("nav.accounts") },
      { path: "/admin/announcements", label: t("nav.announcements") },
      { path: "/admin/proxies", label: t("nav.proxies") },
      { path: "/admin/security-audit", label: t("nav.securityAudit") },
      { path: "/admin/redeem", label: t("nav.redeemCodes") },
      { path: "/admin/promo-codes", label: t("nav.promoCodes") },
      { path: "/admin/affiliates", label: t("nav.affiliateManagement") },
      { path: "/admin/orders", label: t("nav.orderManagement") },
      { path: "/admin/usage", label: t("nav.usage") },
      { path: "/admin/audit-logs", label: t("nav.auditLogs") },
      { path: "/admin/settings", label: t("nav.settings") },
      ...s.custom_menu_items.filter(
        (l) => La(l) && (l.visibility === "admin" || l.visibility === "all") && l.placement !== "header"
      ).map((l) => ({ path: `/custom/${l.id}`, label: l.label }))
    ]), Ut = W(
      () => $n(_a.value, s.user_sidebar_order)
    ), pa = W(
      () => $n(un.value, s.admin_sidebar_order)
    );
    function ga(l, i, m) {
      const o = l === "user" ? Ut.value : pa.value, b = i + m;
      if (b < 0 || b >= o.length) return;
      const g = o.map((N) => N.path);
      [g[i], g[b]] = [g[b], g[i]], l === "user" ? s.user_sidebar_order = g : s.admin_sidebar_order = g;
    }
    const Te = O("turnstile");
    function Dt(l) {
      s.turnstile_enabled = l === "turnstile", s.tencent_captcha_enabled = l === "tencent", s.aliyun_captcha_enabled = l === "aliyun";
    }
    const Ma = W({
      get: () => s.turnstile_enabled || s.tencent_captcha_enabled || s.aliyun_captcha_enabled,
      set: (l) => Dt(l ? Te.value : null)
    });
    function ya(l) {
      Te.value = l, Dt(l);
    }
    const ea = W(
      () => s.tencent_captcha_region === "intl" ? {
        console: "https://console.tencentcloud.com/captcha/graphical",
        cloudKeys: "https://console.tencentcloud.com/cam/capi",
        webDocs: "https://www.tencentcloud.com/document/product/1159/49680"
      } : {
        console: "https://console.cloud.tencent.com/captcha",
        cloudKeys: "https://console.cloud.tencent.com/cam/capi",
        webDocs: "https://cloud.tencent.com/document/product/1110/36841"
      }
    );
    function mn() {
      s.tencent_captcha_enabled ? Te.value = "tencent" : s.aliyun_captcha_enabled ? Te.value = "aliyun" : s.turnstile_enabled && (Te.value = "turnstile");
    }
    const _n = W(() => {
      const l = (i, m) => {
        const o = String(
          s[i] ?? ""
        ).trim();
        return t("admin.settings.openaiExperimentalScheduler.defaultPlaceholder", {
          value: o || m
        });
      };
      return [
        {
          key: "openai_advanced_scheduler_lb_top_k",
          label: t("admin.settings.openaiExperimentalScheduler.topKLabel"),
          placeholder: l("openai_advanced_scheduler_effective_lb_top_k", "7")
        },
        {
          key: "openai_advanced_scheduler_weight_priority",
          label: t("admin.settings.openaiExperimentalScheduler.priorityWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_priority", "1")
        },
        {
          key: "openai_advanced_scheduler_weight_load",
          label: t("admin.settings.openaiExperimentalScheduler.loadWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_load", "1")
        },
        {
          key: "openai_advanced_scheduler_weight_queue",
          label: t("admin.settings.openaiExperimentalScheduler.queueWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_queue", "0.7")
        },
        {
          key: "openai_advanced_scheduler_weight_error_rate",
          label: t("admin.settings.openaiExperimentalScheduler.errorRateWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_error_rate", "0.8")
        },
        {
          key: "openai_advanced_scheduler_weight_ttft",
          label: t("admin.settings.openaiExperimentalScheduler.ttftWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_ttft", "0.5")
        },
        {
          key: "openai_advanced_scheduler_weight_reset",
          label: t("admin.settings.openaiExperimentalScheduler.resetWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_reset", "0")
        },
        {
          key: "openai_advanced_scheduler_weight_quota_headroom",
          label: t("admin.settings.openaiExperimentalScheduler.quotaHeadroomWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_quota_headroom", "0")
        },
        {
          key: "openai_advanced_scheduler_weight_upstream_cost",
          label: t("admin.settings.openaiExperimentalScheduler.upstreamCostWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_upstream_cost", "0")
        },
        {
          key: "openai_advanced_scheduler_weight_previous_response",
          label: t("admin.settings.openaiExperimentalScheduler.previousResponseWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_previous_response", "5")
        },
        {
          key: "openai_advanced_scheduler_weight_session_sticky",
          label: t("admin.settings.openaiExperimentalScheduler.sessionStickyWeight"),
          placeholder: l("openai_advanced_scheduler_effective_weight_session_sticky", "3")
        }
      ];
    }), Ee = He(
      rs({})
    ), pn = W(() => [
      {
        source: "email",
        title: t("admin.settings.authSourceDefaults.sources.email.title"),
        description: t("admin.settings.authSourceDefaults.sources.email.description")
      },
      {
        source: "linuxdo",
        title: t("admin.settings.authSourceDefaults.sources.linuxdo.title"),
        description: t("admin.settings.authSourceDefaults.sources.linuxdo.description")
      },
      {
        source: "oidc",
        title: t("admin.settings.authSourceDefaults.sources.oidc.title"),
        description: t("admin.settings.authSourceDefaults.sources.oidc.description")
      },
      {
        source: "wechat",
        title: t("admin.settings.authSourceDefaults.sources.wechat.title"),
        description: t("admin.settings.authSourceDefaults.sources.wechat.description")
      },
      {
        source: "github",
        title: "GitHub",
        description: E(
          "通过 GitHub 已验证邮箱首次注册或首次绑定时应用。",
          "Applied on first signup or first bind through a verified GitHub email."
        )
      },
      {
        source: "google",
        title: "Google",
        description: E(
          "通过 Google 已验证邮箱首次注册或首次绑定时应用。",
          "Applied on first signup or first bind through a verified Google email."
        )
      },
      {
        source: "dingtalk",
        title: t("auth.dingtalkProviderName"),
        description: E(
          "通过钉钉首次注册或首次绑定时应用。",
          "Applied on first signup or first bind through DingTalk."
        )
      }
    ]), gn = O([]), je = He({
      enabled: !1,
      providers: []
    }), yt = O(!1), mt = He({}), _t = He({}), Et = O(""), ta = O(!1), wt = O(null), qt = O(!1);
    function Da() {
      wt.value = null, qt.value = !0;
    }
    function Hn(l) {
      mt[l] = !mt[l];
    }
    function yn(l) {
      je.providers.splice(l, 1);
      const i = {}, m = {};
      for (let o = 0; o < je.providers.length; o++) {
        const b = o >= l ? o + 1 : o;
        i[o] = mt[b] ?? !1, m[o] = _t[b] ?? !1;
      }
      Object.keys(mt).forEach(
        (o) => delete mt[Number(o)]
      ), Object.keys(_t).forEach((o) => delete _t[Number(o)]), Object.assign(mt, i), Object.assign(_t, m);
    }
    function Bn() {
      const l = je.providers.length;
      je.providers.push({
        type: "brave",
        api_key: "",
        api_key_configured: !1,
        quota_limit: AP,
        subscribed_at: null,
        proxy_id: null,
        expires_at: null
      }), mt[l] = !0;
    }
    function jn(l) {
      if (!l) return "";
      const i = new Date(l * 1e3), m = i.getUTCFullYear(), o = String(i.getUTCMonth() + 1).padStart(2, "0"), b = String(i.getUTCDate()).padStart(2, "0");
      return `${m}-${o}-${b}`;
    }
    function qn(l) {
      return l ? Math.floor((/* @__PURE__ */ new Date(l + "T00:00:00Z")).getTime() / 1e3) : null;
    }
    function Oa(l) {
      return !l.quota_limit || l.quota_limit <= 0 ? 0 : (l.quota_used ?? 0) / l.quota_limit * 100;
    }
    async function bn(l) {
      const i = je.providers[l];
      if (i && confirm(t("admin.settings.webSearchEmulation.resetUsageConfirm")))
        try {
          await se.settings.resetWebSearchUsage({
            provider_type: i.type
          }), i.quota_used = 0, x.showSuccess(
            t("admin.settings.webSearchEmulation.resetUsageSuccess")
          );
        } catch (m) {
          x.showError(nt(m, t("common.error")));
        }
    }
    async function Kn(l) {
      var m;
      const i = (m = je.providers[l]) == null ? void 0 : m.api_key;
      if (!i) {
        x.showError(
          t("admin.settings.webSearchEmulation.apiKeyPlaceholder")
        );
        return;
      }
      try {
        await navigator.clipboard.writeText(i), x.showSuccess(t("admin.settings.webSearchEmulation.copied"));
      } catch {
        x.showError(t("common.error"));
      }
    }
    async function Ia() {
      ta.value = !0, wt.value = null;
      try {
        const l = Et.value.trim() || t("admin.settings.webSearchEmulation.testDefaultQuery");
        wt.value = await se.settings.testWebSearchEmulation(l);
      } catch (l) {
        x.showError(nt(l, t("common.error")));
      } finally {
        ta.value = !1;
      }
    }
    async function za() {
      try {
        const [l, i] = await Promise.all([
          se.settings.getWebSearchEmulationConfig(),
          se.proxies.list().catch(() => ({ items: [] }))
        ]);
        l && (je.enabled = l.enabled || !1, je.providers = l.providers || []), yt.value = !0, gn.value = i.items || [];
      } catch (l) {
        const i = l == null ? void 0 : l.status;
        yt.value = i === 404, i !== 404 && i !== void 0 && x.showError(nt(l, t("common.error")));
      }
    }
    async function ba() {
      if (!yt.value) return !0;
      try {
        for (const i of je.providers) {
          const m = i.quota_limit;
          if (m != null && Number(m) !== 0 && Number(m) < 1)
            return x.showError(
              t("admin.settings.webSearchEmulation.quotaLimitMustBePositive")
            ), !1;
        }
        const l = je.providers.map(
          (i) => ({
            ...i,
            quota_limit: Number(i.quota_limit) > 0 ? Number(i.quota_limit) : null
          })
        );
        return await se.settings.updateWebSearchEmulationConfig({
          enabled: je.enabled,
          providers: l
        }), !0;
      } catch (l) {
        return x.showError(nt(l, t("common.error"))), !1;
      }
    }
    const ha = W(
      () => Fe.value.map((l) => ({
        value: l.id,
        label: l.name,
        description: l.description,
        platform: l.platform,
        subscriptionType: l.subscription_type,
        rate: l.rate_multiplier
      }))
    ), hn = /* @__PURE__ */ new Set([
      " ",
      ",",
      "，",
      "Enter",
      "Tab"
    ]);
    function xa(l) {
      Ce.value = Ce.value.filter(
        (i) => i !== l
      );
    }
    function Ct(l) {
      const i = Ps(l);
      !Ds(i) || Ce.value.includes(i) || (Ce.value = [
        ...Ce.value,
        i
      ]);
    }
    function Kt() {
      ge.value && (Ct(
        ge.value
      ), ge.value = "");
    }
    function lt() {
      ge.value = Ps(
        ge.value
      );
    }
    function xn(l) {
      if (!l.isComposing) {
        if (hn.has(l.key)) {
          l.preventDefault(), Kt();
          return;
        }
        l.key === "Backspace" && !ge.value && Ce.value.length > 0 && Ce.value.pop();
      }
    }
    function fa(l) {
      var o;
      const i = ((o = l.clipboardData) == null ? void 0 : o.getData("text")) || "";
      if (!i.trim())
        return;
      l.preventDefault();
      const m = q0(i);
      for (const b of m)
        Ct(b);
    }
    const Wn = /* @__PURE__ */ new Set([
      " ",
      ",",
      "，",
      "Enter",
      "Tab"
    ]), fn = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function Ot(l) {
      const i = l.trim();
      return fn.test(i) ? i.toLowerCase().split("-").map((m) => `${m.charAt(0).toUpperCase()}${m.slice(1)}`).join("-") : "";
    }
    function aa(l) {
      if (!Array.isArray(l))
        return [];
      const i = [], m = /* @__PURE__ */ new Set();
      for (const o of l) {
        if (typeof o != "string")
          continue;
        const b = Ot(o), g = b.toLowerCase();
        !b || m.has(g) || i.length >= Cs || (m.add(g), i.push(b));
      }
      return i;
    }
    function kn(l) {
      s.forwarded_client_ip_headers = s.forwarded_client_ip_headers.filter(
        (i) => i !== l
      );
    }
    function vn(l) {
      const i = Ot(l);
      return i ? s.forwarded_client_ip_headers.some(
        (m) => m.toLowerCase() === i.toLowerCase()
      ) ? "duplicate" : s.forwarded_client_ip_headers.length >= Cs ? "full" : (s.forwarded_client_ip_headers = [
        ...s.forwarded_client_ip_headers,
        i
      ], "added") : "invalid";
    }
    function Na(l) {
      l === "invalid" ? x.showError(t("admin.settings.apiKeyAcl.forwardedClientIpHeaderInvalid")) : l === "full" && x.showError(
        t("admin.settings.apiKeyAcl.forwardedClientIpHeadersLimit", {
          max: Cs
        })
      );
    }
    function wn() {
      const l = pe.value;
      if (!l)
        return;
      const i = vn(l);
      Na(i), pe.value = "";
    }
    function Gn(l) {
      if (!l.isComposing) {
        if (Wn.has(l.key)) {
          l.preventDefault(), wn();
          return;
        }
        l.key === "Backspace" && !pe.value && s.forwarded_client_ip_headers.length > 0 && s.forwarded_client_ip_headers.pop();
      }
    }
    function Cn(l) {
      var o;
      const i = ((o = l.clipboardData) == null ? void 0 : o.getData("text")) || "";
      if (!i.trim())
        return;
      l.preventDefault();
      let m;
      for (const b of i.split(/[,，;\r\n]+/)) {
        if (!b.trim())
          continue;
        const g = vn(b);
        (g === "invalid" || g === "full") && (m = g);
      }
      m && Na(m);
    }
    const Fa = () => {
      s.account_quota_notify_emails || (s.account_quota_notify_emails = []), s.account_quota_notify_emails.push({
        email: "",
        disabled: !1,
        verified: !0
      });
    }, It = typeof window < "u" ? window.location.origin : "";
    function zt(l) {
      const i = (s.api_base_url || It).replace(/\/+$/, "");
      return `${i.endsWith("/api/v1") ? i : `${i}/api/v1`}${l.startsWith("/") ? l : `/${l}`}`;
    }
    const D = W(() => zt("/auth/oauth/linuxdo/callback"));
    async function c() {
      const l = D.value;
      l && (s.linuxdo_connect_redirect_url = l, await re(
        l,
        t("admin.settings.linuxdo.redirectUrlSetAndCopied")
      ));
    }
    const f = W(() => zt("/auth/oauth/github/callback")), V = W(() => zt("/auth/oauth/google/callback"));
    async function P(l) {
      const i = l === "github" ? f.value : V.value;
      i && (l === "github" ? s.github_oauth_redirect_url = i : s.google_oauth_redirect_url = i, await re(
        i,
        E("回调地址已写入并复制。", "Callback URL set and copied.")
      ));
    }
    const ae = W(() => zt("/auth/oauth/wechat/callback"));
    function oe(l) {
      s.wechat_connect_mp_enabled && s.wechat_connect_mobile_enabled && (l === "mobile" ? s.wechat_connect_mp_enabled = !1 : s.wechat_connect_mobile_enabled = !1);
      const i = cs(
        s.wechat_connect_open_enabled,
        s.wechat_connect_mp_enabled,
        s.wechat_connect_mobile_enabled,
        s.wechat_connect_mode
      );
      s.wechat_connect_open_enabled = i.openEnabled, s.wechat_connect_mp_enabled = i.mpEnabled, s.wechat_connect_mobile_enabled = i.mobileEnabled, s.wechat_connect_mode = Un(
        i.openEnabled,
        i.mpEnabled,
        i.mobileEnabled,
        s.wechat_connect_mode
      ), s.wechat_connect_scopes = En(
        s.wechat_connect_mode
      );
    }
    function be(l) {
      s.wechat_connect_open_enabled = l, oe(l ? "open" : void 0);
    }
    function ze(l) {
      s.wechat_connect_mp_enabled = l, l && (s.wechat_connect_mobile_enabled = !1), oe(l ? "mp" : void 0);
    }
    function bt(l) {
      s.wechat_connect_mobile_enabled = l, l && (s.wechat_connect_mp_enabled = !1), oe(l ? "mobile" : void 0);
    }
    async function Ye() {
      const l = ae.value;
      l && (s.wechat_connect_redirect_url = l, await re(
        l,
        t("admin.settings.wechatConnect.redirectUrlSetAndCopied")
      ));
    }
    const qe = W(() => zt("/auth/oauth/oidc/callback"));
    async function Wt() {
      const l = qe.value;
      l && (s.oidc_connect_redirect_url = l, await re(l, t("admin.settings.oidc.redirectUrlSetAndCopied")));
    }
    function Ze() {
      s.custom_menu_items.push({
        id: "",
        label: "",
        icon_svg: Bc,
        url: "",
        visibility: "all",
        placement: "header",
        navigation_type: "qr",
        qr_description: "",
        qr_image: "",
        sort_order: s.custom_menu_items.length
      });
    }
    function Sn(l, i) {
      const m = s.custom_menu_items[l];
      m && (m.qr_image = i, i.trim() && (m.navigation_type = "qr", m.url = ""));
    }
    function uo() {
      s.custom_menu_items.push({
        id: "",
        label: "",
        icon_svg: ks,
        url: "",
        hide_open_button: !1,
        visibility: "user",
        placement: "sidebar",
        sort_order: s.custom_menu_items.length
      });
    }
    function Os(l, i, m) {
      return [...new Set(l.map((o) => o === i ? m : o))];
    }
    function Is() {
      const l = Rn(s.custom_menu_items);
      if (!l) return;
      const i = `/custom/${l.id}`;
      l.id = zn, l.label = "生图教程", l.icon_svg = l.icon_svg || ks, l.visibility = "all", l.placement = "sidebar", delete l.navigation_type, delete l.qr_description, delete l.qr_image;
      const m = `/custom/${zn}`;
      s.user_sidebar_order = Os(
        s.user_sidebar_order,
        i,
        m
      ), s.admin_sidebar_order = Os(
        s.admin_sidebar_order,
        i,
        m
      );
    }
    function zs(l) {
      const i = Rn(s.custom_menu_items);
      if (!l.trim()) {
        if (!i) return;
        const m = `/custom/${i.id}`;
        s.custom_menu_items.splice(s.custom_menu_items.indexOf(i), 1), s.user_sidebar_order = s.user_sidebar_order.filter(
          (o) => o !== m
        ), s.admin_sidebar_order = s.admin_sidebar_order.filter(
          (o) => o !== m
        );
        return;
      }
      i ? i.url = l : s.custom_menu_items.push({
        id: zn,
        label: "生图教程",
        icon_svg: ks,
        url: l,
        visibility: "all",
        placement: "sidebar",
        sort_order: s.custom_menu_items.length
      }), Is();
    }
    function Ns(l) {
      s.custom_menu_items.splice(l, 1), s.custom_menu_items.forEach((i, m) => {
        i.sort_order = m;
      });
    }
    function Fs(l, i, m) {
      const o = i + m;
      if (o < 0 || o >= l.length) return;
      const b = l[i].index, g = l[o].index, N = s.custom_menu_items, Le = N[b];
      N[b] = N[g], N[g] = Le, N.forEach((va, ni) => {
        va.sort_order = ni;
      });
    }
    function Hs(l, i) {
      Fs(ua.value, l, i);
    }
    function Bs(l, i) {
      Fs(ma.value, l, i);
    }
    function mo() {
      s.custom_endpoints.push({ name: "", endpoint: "", description: "" });
    }
    function _o(l) {
      s.custom_endpoints.splice(l, 1);
    }
    function po() {
      s.login_agreement_documents.push({
        id: `custom-${Date.now().toString(36)}`,
        title: "",
        content_md: ""
      });
    }
    function go(l) {
      s.login_agreement_documents.splice(l, 1);
    }
    function yo() {
      return s.login_agreement_documents.map((l, i) => ({
        id: kt(l.id || l.title) || `doc-${i + 1}`,
        title: l.title.trim(),
        content_md: l.content_md.trim()
      })).filter((l) => l.title || l.content_md);
    }
    function bo(l) {
      const i = /* @__PURE__ */ new Set();
      for (const m of l) {
        if (i.has(m.id))
          return m.id;
        i.add(m.id);
      }
      return null;
    }
    function js(l) {
      return l.join(", ");
    }
    function ho(l) {
      const i = l.split(",").map((b) => b.trim()).filter((b) => b.length > 0);
      if (i.length === 0)
        return null;
      const m = i.map((b) => Number(b));
      if (m.some((b) => !Number.isInteger(b)))
        return null;
      const o = Array.from(new Set(m)).sort((b, g) => b - g);
      return o.some(
        (b) => b < Ln || b > Mn
      ) ? null : o;
    }
    const Ha = O([]), Ba = O([]), ka = O([]), xo = W(
      () => !ka.value.some((l) => l.required)
    );
    function fo() {
      ka.value.push({ type: "header_exact", match: "", required: !1 });
    }
    function ko(l) {
      ka.value.splice(l, 1);
    }
    function qs(l) {
      if (!l || !l.trim()) return [];
      try {
        const i = JSON.parse(l);
        return Array.isArray(i) ? i.map((m) => ({
          originator: typeof (m == null ? void 0 : m.originator) == "string" ? m.originator : "",
          uaContains: Array.isArray(m == null ? void 0 : m.ua_contains) ? m.ua_contains.filter((o) => typeof o == "string").join(", ") : "",
          skipEngineFingerprint: (m == null ? void 0 : m.skip_engine_fingerprint) === !0
        })) : [];
      } catch {
        return [];
      }
    }
    function Ks(l) {
      const i = l.map((m) => {
        const o = {
          originator: m.originator.trim(),
          ua_contains: m.uaContains.split(",").map((b) => b.trim()).filter((b) => b.length > 0)
        };
        return m.skipEngineFingerprint && (o.skip_engine_fingerprint = !0), o;
      }).filter((m) => m.originator !== "" || m.ua_contains.length > 0);
      return i.length > 0 ? JSON.stringify(i) : "";
    }
    function vo() {
      Ha.value.push({ originator: "", uaContains: "" });
    }
    function wo(l) {
      Ha.value.splice(l, 1);
    }
    function Co() {
      Ba.value.push({
        originator: "",
        uaContains: "",
        skipEngineFingerprint: !1
      });
    }
    function So(l) {
      Ba.value.splice(l, 1);
    }
    const Ws = W(() => {
      var i;
      const l = (i = s.openai_codex_client_version_synced) == null ? void 0 : i.trim();
      return l ? t("admin.settings.gatewayForwarding.openaiCodexVersionSyncedValue", {
        version: l
      }) : "";
    });
    async function Ao() {
      var l, i;
      me.value = !0, we.value = !1;
      try {
        const m = await se.settings.getSettings();
        m.payment_load_balance_strategy = m.payment_load_balance_strategy || "round-robin";
        for (const [N, Le] of Object.entries(m))
          !$a.has(N) && Le !== null && Le !== void 0 && (s[N] = Le);
        s.landing_notice_enabled = typeof m.landing_notice_enabled == "boolean" ? m.landing_notice_enabled : !1, s.landing_notice_text = typeof m.landing_notice_text == "string" ? m.landing_notice_text : Hi, s.landing_notice_url = typeof m.landing_notice_url == "string" ? m.landing_notice_url : Bi, s.community_qr_image = typeof m.community_qr_image == "string" ? m.community_qr_image.trim() : "", s.community_qr_enabled = m.community_qr_enabled === !0 && s.community_qr_image.length > 0, s.community_qr_title = typeof m.community_qr_title == "string" && m.community_qr_title.trim() ? m.community_qr_title.trim() : "交流群", s.community_qr_description = typeof m.community_qr_description == "string" ? m.community_qr_description.trim() : "扫码加入交流群获取支持", s.custom_menu_items = s.custom_menu_items.map((N) => ({
          ...N,
          hide_open_button: N.hide_open_button === !0,
          placement: N.placement === "header" || N.placement === "both" ? N.placement : "sidebar"
        })), !Rn(s.custom_menu_items) && ((l = m.legacy_image_tutorial_url) != null && l.trim()) && zs(m.legacy_image_tutorial_url), s.profile_navigation_enabled = m.profile_navigation_enabled !== !1, s.subscription_navigation_enabled = m.subscription_navigation_enabled !== !1, s.model_plaza_placement = m.model_plaza_placement === "sidebar" ? "sidebar" : "header", s.user_sidebar_order = $n(
          _a.value,
          Array.isArray(m.user_sidebar_order) ? m.user_sidebar_order : []
        ).map((N) => N.path), s.admin_sidebar_order = $n(
          un.value,
          Array.isArray(m.admin_sidebar_order) ? m.admin_sidebar_order : []
        ).map((N) => N.path), Is(), mn(), (i = s.claude_oauth_system_prompt_blocks) != null && i.trim() || (s.claude_oauth_system_prompt_blocks = Rt), Ge.value = ra(
          s.claude_oauth_system_prompt_blocks,
          s.claude_oauth_system_prompt
        ), vt(), Ha.value = qs(
          s.codex_cli_only_blacklist
        ), Ba.value = qs(
          s.codex_cli_only_whitelist
        ), ka.value = s.codex_cli_only_engine_fingerprint_signals ? G0(s.codex_cli_only_engine_fingerprint_signals) : Q0(), s.login_agreement_mode = m.login_agreement_mode === "checkbox" ? "checkbox" : "modal", s.public_channel_status_enabled = m.public_channel_status_enabled === !0, s.channel_monitor_show_quota = !!m.channel_monitor_show_quota, s.login_agreement_updated_at = m.login_agreement_updated_at || "2026-03-31", s.login_agreement_documents = Array.isArray(m.login_agreement_documents) && m.login_agreement_documents.length > 0 ? m.login_agreement_documents.map((N) => ({
          id: N.id || "",
          title: N.title || "",
          content_md: N.content_md || ""
        })) : Va(), Object.assign(Ee, rs(m)), s.payment_recharge_bonus_tiers = ep(
          m.payment_recharge_bonus_tiers
        ), s.payment_recharge_bonus_mode = so(
          m.payment_recharge_bonus_mode
        ), s.payment_recharge_bonus_notice = m.payment_recharge_bonus_notice || "", s.default_platform_quotas = ls(m.default_platform_quotas), s.account_scheduling_thresholds = os(
          m.account_scheduling_thresholds
        ), s.backend_mode_enabled = m.backend_mode_enabled, s.default_subscriptions = ds(
          m.default_subscriptions
        ), Ce.value = Fi(
          m.registration_email_suffix_whitelist
        ), s.forwarded_client_ip_headers = aa(
          m.forwarded_client_ip_headers
        ), pe.value = "", Ve.value = js(
          Array.isArray(m.table_page_size_options) ? m.table_page_size_options : [10, 20, 50, 100]
        ), ge.value = "", s.smtp_password = "", Z.value = !1, s.turnstile_secret_key = "", s.tencent_captcha_app_secret_key = "", s.tencent_captcha_cloud_secret_id = "", s.tencent_captcha_cloud_secret_key = "", s.aliyun_captcha_access_key_secret = "", s.linuxdo_connect_client_secret = "", s.dingtalk_connect_client_secret = "", s.github_oauth_client_secret = "", s.google_oauth_client_secret = "", s.wechat_connect_app_secret = "", s.wechat_connect_open_app_secret = "", s.wechat_connect_mp_app_secret = "", s.wechat_connect_mobile_app_secret = "";
        const o = cs(
          m.wechat_connect_open_enabled,
          m.wechat_connect_mp_enabled,
          m.wechat_connect_mobile_enabled,
          m.wechat_connect_mode
        );
        s.wechat_connect_open_enabled = o.openEnabled, s.wechat_connect_mp_enabled = o.mpEnabled, s.wechat_connect_mobile_enabled = o.mobileEnabled, s.wechat_connect_mode = Un(
          o.openEnabled,
          o.mpEnabled,
          o.mobileEnabled,
          m.wechat_connect_mode
        );
        const b = String(m.wechat_connect_app_id || "").trim(), g = !!m.wechat_connect_app_secret_configured;
        !s.wechat_connect_open_app_id && o.openEnabled && (s.wechat_connect_open_app_id = b), !s.wechat_connect_mp_app_id && o.mpEnabled && (s.wechat_connect_mp_app_id = b), !s.wechat_connect_mobile_app_id && o.mobileEnabled && (s.wechat_connect_mobile_app_id = b), !s.wechat_connect_open_app_secret_configured && o.openEnabled && (s.wechat_connect_open_app_secret_configured = g), !s.wechat_connect_mp_app_secret_configured && o.mpEnabled && (s.wechat_connect_mp_app_secret_configured = g), !s.wechat_connect_mobile_app_secret_configured && o.mobileEnabled && (s.wechat_connect_mobile_app_secret_configured = g), s.wechat_connect_scopes = En(
          s.wechat_connect_mode
        ), s.oidc_connect_client_secret = "", m.openai_fast_policy_settings && Array.isArray(m.openai_fast_policy_settings.rules) && (ve.rules = m.openai_fast_policy_settings.rules.map((N) => ({
          ...N,
          user_ids: N.user_ids ? [...N.user_ids] : [],
          model_whitelist: N.model_whitelist ? [...N.model_whitelist] : []
        })), Qt.value = !0), await za();
      } catch (m) {
        we.value = !0, x.showError(
          nt(m, t("admin.settings.failedToLoad"))
        );
      } finally {
        me.value = !1;
      }
    }
    async function To() {
      try {
        const l = await se.groups.getAll();
        Fe.value = l.filter(
          (i) => i.subscription_type === "subscription" && i.status === "active"
        );
      } catch {
        Fe.value = [];
      }
    }
    function Gs(l) {
      const i = new Set(l);
      return Fe.value.find((m) => !i.has(m.id));
    }
    function Uo() {
      if (Fe.value.length === 0) return;
      const l = Gs(
        s.default_subscriptions.map((i) => i.group_id)
      );
      l && s.default_subscriptions.push({
        group_id: l.id,
        validity_days: 30
      });
    }
    function Eo(l) {
      s.default_subscriptions.splice(l, 1);
    }
    function Vo(l) {
      if (Fe.value.length === 0) return;
      const i = Gs(
        Ee[l].subscriptions.map((m) => m.group_id)
      );
      i && Ee[l].subscriptions.push({
        group_id: i.id,
        validity_days: 30
      });
    }
    function Po(l, i) {
      Ee[l].subscriptions.splice(i, 1);
    }
    function Ys(l) {
      const i = /* @__PURE__ */ new Set();
      return l.find((m) => i.has(m.group_id) ? !0 : (i.add(m.group_id), !1));
    }
    async function $o() {
      var l, i, m, o, b, g;
      if (!ne.value) {
        ne.value = !0, Y.value = "";
        try {
          const N = Math.floor(
            Number(s.table_default_page_size)
          );
          if (!Number.isInteger(N) || N < Ln || N > Mn) {
            x.showError(
              t("admin.settings.site.tableDefaultPageSizeRangeError", {
                min: Ln,
                max: Mn
              })
            );
            return;
          }
          const Le = ho(
            Ve.value
          );
          if (!Le) {
            x.showError(
              t("admin.settings.site.tablePageSizeOptionsFormatError", {
                min: Ln,
                max: Mn
              })
            );
            return;
          }
          s.table_default_page_size = N, s.table_page_size_options = Le;
          const va = yo();
          if (s.login_agreement_enabled && va.length === 0) {
            x.showError(
              E(
                "启用登录条款确认时，至少需要保留一份文档。",
                "At least one document is required when login agreement is enabled."
              )
            );
            return;
          }
          if (va.find(
            (ue) => !ue.title
          )) {
            x.showError(
              E(
                "登录条款文档名称不能为空。",
                "Login agreement document title cannot be empty."
              )
            );
            return;
          }
          const ns = bo(va);
          if (ns) {
            x.showError(
              E(
                `登录条款文档路由不能重复：/legal/${ns}`,
                `Login agreement document routes cannot be duplicated: /legal/${ns}`
              )
            );
            return;
          }
          s.login_agreement_mode = s.login_agreement_mode === "checkbox" ? "checkbox" : "modal", s.login_agreement_documents = va, s.forwarded_client_ip_headers = aa(
            s.forwarded_client_ip_headers
          );
          const si = ds(
            s.default_subscriptions
          ), ii = Ys(
            si
          );
          if (ii) {
            x.showError(
              t("admin.settings.defaults.defaultSubscriptionsDuplicate", {
                groupId: ii.group_id
              })
            );
            return;
          }
          for (const ue of pn.value) {
            Ee[ue.source].subscriptions = ds(
              Ee[ue.source].subscriptions
            );
            const Qe = Ys(
              Ee[ue.source].subscriptions
            );
            if (Qe) {
              x.showError(
                `${ue.title}: ${t(
                  "admin.settings.defaults.defaultSubscriptionsDuplicate",
                  {
                    groupId: Qe.group_id
                  }
                )}`
              );
              return;
            }
          }
          if (s.wechat_connect_mp_enabled && s.wechat_connect_mobile_enabled) {
            x.showError(
              E(
                "公众号和移动应用不能同时启用。",
                "Official Account and Mobile App cannot be enabled at the same time."
              )
            );
            return;
          }
          if (s.custom_menu_items.find(
            (ue) => {
              var Qe;
              return ue.placement === "header" && ue.navigation_type === "qr" && !((Qe = ue.qr_image) != null && Qe.trim());
            }
          )) {
            x.showError(t("admin.settings.site.headerNavigation.qrRequired"));
            return;
          }
          st(s.frontend_url) || (s.frontend_url = ""), st(s.doc_url) || (s.doc_url = ""), Pt(s.landing_tutorial_url || "") || (s.landing_tutorial_url = ""), Pt(s.landing_notice_url) || (s.landing_notice_url = ""), oe();
          const oi = Un(
            s.wechat_connect_open_enabled,
            s.wechat_connect_mp_enabled,
            s.wechat_connect_mobile_enabled,
            s.wechat_connect_mode
          ), li = Xt(
            Ge.value
          );
          s.claude_oauth_system_prompt_blocks = li;
          const qa = {
            registration_enabled: s.registration_enabled,
            email_verify_enabled: s.email_verify_enabled,
            registration_email_suffix_whitelist: Ce.value.map(
              (ue) => ue.startsWith("*.") ? ue : `@${ue}`
            ),
            registration_email_domain_quota_enabled: s.registration_email_domain_quota_enabled,
            promo_code_enabled: s.promo_code_enabled,
            invitation_code_enabled: s.invitation_code_enabled,
            password_reset_enabled: s.password_reset_enabled,
            totp_enabled: s.totp_enabled,
            passkey_enabled: s.passkey_enabled,
            session_binding_enabled: s.session_binding_enabled,
            step_up_enabled: s.step_up_enabled,
            // 清空数字框时 v-model.number 会得到空串，后端 int 字段解析空串会 400 拒绝整次保存；
            // 空/非法值回退默认 180（与后端 parseAuditLogRetentionDays("") 语义一致，0 仍表示永久保留）。
            audit_log_retention_days: Number.isFinite(s.audit_log_retention_days) ? s.audit_log_retention_days : 180,
            login_agreement_enabled: s.login_agreement_enabled,
            login_agreement_mode: s.login_agreement_mode,
            login_agreement_updated_at: s.login_agreement_updated_at,
            login_agreement_documents: s.login_agreement_documents,
            default_balance: s.default_balance,
            default_concurrency: s.default_concurrency,
            default_subscriptions: si,
            force_email_on_third_party_signup: s.force_email_on_third_party_signup,
            default_user_rpm_limit: s.default_user_rpm_limit,
            site_name: s.site_name,
            site_logo: s.site_logo,
            site_subtitle: s.site_subtitle,
            landing_notice_enabled: s.landing_notice_enabled,
            landing_notice_text: s.landing_notice_text,
            landing_notice_url: s.landing_notice_url,
            community_qr_enabled: !1,
            community_qr_image: s.community_qr_image.trim(),
            community_qr_title: s.community_qr_title.trim() || "交流群",
            community_qr_description: s.community_qr_description.trim(),
            api_base_url: s.api_base_url,
            contact_info: s.contact_info,
            doc_url: s.doc_url,
            landing_tutorial_url: s.landing_tutorial_url,
            home_content: s.home_content,
            compact_home_enabled: s.compact_home_enabled,
            backend_mode_enabled: s.backend_mode_enabled,
            hide_ccs_import_button: s.hide_ccs_import_button,
            profile_navigation_enabled: s.profile_navigation_enabled,
            subscription_navigation_enabled: s.subscription_navigation_enabled,
            model_plaza_placement: s.model_plaza_placement,
            user_sidebar_order: Ut.value.map((ue) => ue.path),
            admin_sidebar_order: pa.value.map((ue) => ue.path),
            table_default_page_size: s.table_default_page_size,
            table_page_size_options: s.table_page_size_options,
            custom_menu_items: s.custom_menu_items,
            custom_endpoints: s.custom_endpoints,
            frontend_url: s.frontend_url,
            smtp_host: s.smtp_host,
            smtp_port: s.smtp_port,
            smtp_username: s.smtp_username,
            smtp_password: s.smtp_password || void 0,
            smtp_from_email: s.smtp_from_email,
            smtp_from_name: s.smtp_from_name,
            smtp_use_tls: s.smtp_use_tls,
            turnstile_enabled: s.turnstile_enabled,
            turnstile_site_key: s.turnstile_site_key,
            turnstile_secret_key: s.turnstile_secret_key || void 0,
            tencent_captcha_enabled: s.tencent_captcha_enabled,
            tencent_captcha_app_id: s.tencent_captcha_app_id,
            tencent_captcha_app_secret_key: s.tencent_captcha_app_secret_key || void 0,
            tencent_captcha_cloud_secret_id: s.tencent_captcha_cloud_secret_id || void 0,
            tencent_captcha_cloud_secret_key: s.tencent_captcha_cloud_secret_key || void 0,
            tencent_captcha_region: s.tencent_captcha_region,
            aliyun_captcha_enabled: s.aliyun_captcha_enabled,
            aliyun_captcha_access_key_id: s.aliyun_captcha_access_key_id,
            aliyun_captcha_access_key_secret: s.aliyun_captcha_access_key_secret || void 0,
            aliyun_captcha_scene_id: s.aliyun_captcha_scene_id,
            aliyun_captcha_prefix: s.aliyun_captcha_prefix,
            aliyun_captcha_region: s.aliyun_captcha_region,
            api_key_acl_trust_forwarded_ip: s.api_key_acl_trust_forwarded_ip,
            forwarded_client_ip_headers: s.forwarded_client_ip_headers,
            linuxdo_connect_enabled: s.linuxdo_connect_enabled,
            linuxdo_connect_client_id: s.linuxdo_connect_client_id,
            linuxdo_connect_client_secret: s.linuxdo_connect_client_secret || void 0,
            linuxdo_connect_redirect_url: s.linuxdo_connect_redirect_url,
            dingtalk_connect_enabled: s.dingtalk_connect_enabled,
            dingtalk_connect_client_id: s.dingtalk_connect_client_id,
            dingtalk_connect_client_secret: s.dingtalk_connect_client_secret || void 0,
            dingtalk_connect_redirect_url: s.dingtalk_connect_redirect_url,
            dingtalk_connect_corp_restriction_policy: s.dingtalk_connect_corp_restriction_policy,
            dingtalk_connect_internal_corp_id: s.dingtalk_connect_internal_corp_id,
            dingtalk_connect_bypass_registration: s.dingtalk_connect_bypass_registration,
            dingtalk_connect_sync_corp_email: s.dingtalk_connect_sync_corp_email,
            dingtalk_connect_sync_display_name: s.dingtalk_connect_sync_display_name,
            dingtalk_connect_sync_dept: s.dingtalk_connect_sync_dept,
            dingtalk_connect_sync_corp_email_attr_key: s.dingtalk_connect_sync_corp_email_attr_key,
            dingtalk_connect_sync_display_name_attr_key: s.dingtalk_connect_sync_display_name_attr_key,
            dingtalk_connect_sync_dept_attr_key: s.dingtalk_connect_sync_dept_attr_key,
            dingtalk_connect_sync_corp_email_attr_name: s.dingtalk_connect_sync_corp_email_attr_name,
            dingtalk_connect_sync_display_name_attr_name: s.dingtalk_connect_sync_display_name_attr_name,
            dingtalk_connect_sync_dept_attr_name: s.dingtalk_connect_sync_dept_attr_name,
            wechat_connect_enabled: s.wechat_connect_enabled,
            wechat_connect_app_id: s.wechat_connect_open_app_id || s.wechat_connect_mp_app_id || s.wechat_connect_mobile_app_id || s.wechat_connect_app_id,
            wechat_connect_app_secret: s.wechat_connect_app_secret || void 0,
            wechat_connect_open_app_id: s.wechat_connect_open_app_id,
            wechat_connect_open_app_secret: s.wechat_connect_open_app_secret || void 0,
            wechat_connect_mp_app_id: s.wechat_connect_mp_app_id,
            wechat_connect_mp_app_secret: s.wechat_connect_mp_app_secret || void 0,
            wechat_connect_mobile_app_id: s.wechat_connect_mobile_app_id,
            wechat_connect_mobile_app_secret: s.wechat_connect_mobile_app_secret || void 0,
            wechat_connect_open_enabled: s.wechat_connect_open_enabled,
            wechat_connect_mp_enabled: s.wechat_connect_mp_enabled,
            wechat_connect_mobile_enabled: s.wechat_connect_mobile_enabled,
            wechat_connect_mode: oi,
            wechat_connect_scopes: En(oi),
            wechat_connect_redirect_url: s.wechat_connect_redirect_url,
            wechat_connect_frontend_redirect_url: s.wechat_connect_frontend_redirect_url,
            oidc_connect_enabled: s.oidc_connect_enabled,
            oidc_connect_provider_name: s.oidc_connect_provider_name,
            oidc_connect_client_id: s.oidc_connect_client_id,
            oidc_connect_client_secret: s.oidc_connect_client_secret || void 0,
            oidc_connect_issuer_url: s.oidc_connect_issuer_url,
            oidc_connect_discovery_url: s.oidc_connect_discovery_url,
            oidc_connect_authorize_url: s.oidc_connect_authorize_url,
            oidc_connect_token_url: s.oidc_connect_token_url,
            oidc_connect_userinfo_url: s.oidc_connect_userinfo_url,
            oidc_connect_jwks_url: s.oidc_connect_jwks_url,
            oidc_connect_scopes: s.oidc_connect_scopes,
            oidc_connect_redirect_url: s.oidc_connect_redirect_url,
            oidc_connect_frontend_redirect_url: s.oidc_connect_frontend_redirect_url,
            oidc_connect_token_auth_method: s.oidc_connect_token_auth_method,
            oidc_connect_use_pkce: s.oidc_connect_use_pkce,
            oidc_connect_validate_id_token: s.oidc_connect_validate_id_token,
            oidc_connect_allowed_signing_algs: s.oidc_connect_allowed_signing_algs,
            oidc_connect_clock_skew_seconds: s.oidc_connect_clock_skew_seconds,
            oidc_connect_require_email_verified: s.oidc_connect_require_email_verified,
            oidc_connect_userinfo_email_path: s.oidc_connect_userinfo_email_path,
            oidc_connect_userinfo_id_path: s.oidc_connect_userinfo_id_path,
            oidc_connect_userinfo_username_path: s.oidc_connect_userinfo_username_path,
            github_oauth_enabled: s.github_oauth_enabled,
            github_oauth_client_id: s.github_oauth_client_id,
            github_oauth_client_secret: s.github_oauth_client_secret || void 0,
            github_oauth_redirect_url: s.github_oauth_redirect_url,
            github_oauth_frontend_redirect_url: s.github_oauth_frontend_redirect_url,
            google_oauth_enabled: s.google_oauth_enabled,
            google_oauth_client_id: s.google_oauth_client_id,
            google_oauth_client_secret: s.google_oauth_client_secret || void 0,
            google_oauth_redirect_url: s.google_oauth_redirect_url,
            google_oauth_frontend_redirect_url: s.google_oauth_frontend_redirect_url,
            enable_model_fallback: s.enable_model_fallback,
            fallback_model_anthropic: s.fallback_model_anthropic,
            fallback_model_openai: s.fallback_model_openai,
            fallback_model_gemini: s.fallback_model_gemini,
            fallback_model_antigravity: s.fallback_model_antigravity,
            grok_default_text_model: s.grok_default_text_model.trim() || "grok-4.5",
            grok_cross_client_model_map_enabled: s.grok_cross_client_model_map_enabled,
            grok_default_base_url_mode: s.grok_default_base_url_mode,
            enable_identity_patch: s.enable_identity_patch,
            identity_patch_prompt: s.identity_patch_prompt,
            min_claude_code_version: s.min_claude_code_version,
            max_claude_code_version: s.max_claude_code_version,
            allow_ungrouped_key_scheduling: s.allow_ungrouped_key_scheduling,
            enable_fingerprint_unification: s.enable_fingerprint_unification,
            enable_metadata_passthrough: s.enable_metadata_passthrough,
            enable_cch_signing: s.enable_cch_signing,
            enable_claude_oauth_system_prompt_injection: s.enable_claude_oauth_system_prompt_injection,
            claude_oauth_system_prompt: (l = s.claude_oauth_system_prompt) != null && l.trim() ? s.claude_oauth_system_prompt : "",
            claude_oauth_system_prompt_blocks: li,
            enable_anthropic_cache_ttl_1h_injection: s.enable_anthropic_cache_ttl_1h_injection,
            rewrite_message_cache_control: s.rewrite_message_cache_control,
            enable_client_dateline_normalization: s.enable_client_dateline_normalization,
            antigravity_user_agent_version: ((i = s.antigravity_user_agent_version) == null ? void 0 : i.trim()) || "",
            openai_codex_user_agent: ((m = s.openai_codex_user_agent) == null ? void 0 : m.trim()) || "",
            openai_codex_client_version: ((o = s.openai_codex_client_version) == null ? void 0 : o.trim()) || "",
            openai_codex_version_auto_sync_enabled: s.openai_codex_version_auto_sync_enabled,
            min_codex_version: ((b = s.min_codex_version) == null ? void 0 : b.trim()) || "",
            max_codex_version: ((g = s.max_codex_version) == null ? void 0 : g.trim()) || "",
            codex_cli_only_allow_app_server_clients: s.codex_cli_only_allow_app_server_clients,
            codex_cli_only_engine_fingerprint_signals: Y0(
              ka.value
            ),
            codex_cli_only_blacklist: Ks(
              Ha.value
            ),
            codex_cli_only_whitelist: Ks(
              Ba.value
            ),
            // Payment configuration
            payment_enabled: s.payment_enabled,
            risk_control_enabled: s.risk_control_enabled,
            cyber_session_block_enabled: s.cyber_session_block_enabled,
            cyber_session_block_ttl_seconds: Number(s.cyber_session_block_ttl_seconds) || 3600,
            payment_min_amount: Number(s.payment_min_amount) || 0,
            payment_max_amount: Number(s.payment_max_amount) || 0,
            payment_daily_limit: Number(s.payment_daily_limit) || 0,
            payment_max_pending_orders: Number(s.payment_max_pending_orders) || 0,
            payment_order_timeout_minutes: Number(s.payment_order_timeout_minutes) || 0,
            payment_balance_disabled: s.payment_balance_disabled,
            payment_balance_recharge_multiplier: Number(s.payment_balance_recharge_multiplier) || 1,
            payment_subscription_usd_to_cny_rate: Number(s.payment_subscription_usd_to_cny_rate) || 0,
            payment_recharge_fee_rate: Number(s.payment_recharge_fee_rate) || 0,
            payment_recharge_bonus_tiers: lo(
              s.payment_recharge_bonus_tiers
            ),
            payment_recharge_bonus_mode: s.payment_recharge_bonus_mode,
            payment_recharge_bonus_notice: s.payment_recharge_bonus_notice,
            payment_enabled_types: s.payment_enabled_types,
            payment_load_balance_strategy: s.payment_load_balance_strategy,
            payment_product_name_prefix: s.payment_product_name_prefix,
            payment_product_name_suffix: s.payment_product_name_suffix,
            payment_help_image_url: s.payment_help_image_url,
            payment_help_text: s.payment_help_text,
            payment_cancel_rate_limit_enabled: s.payment_cancel_rate_limit_enabled,
            payment_cancel_rate_limit_max: Number(s.payment_cancel_rate_limit_max) || 10,
            payment_cancel_rate_limit_window: Number(s.payment_cancel_rate_limit_window) || 1,
            payment_cancel_rate_limit_unit: s.payment_cancel_rate_limit_unit,
            payment_cancel_rate_limit_window_mode: s.payment_cancel_rate_limit_window_mode,
            payment_alipay_force_qrcode: s.payment_alipay_force_qrcode,
            payment_alipay_mobile_precreate_deep_link: s.payment_alipay_mobile_precreate_deep_link,
            openai_low_upstream_rate_priority_enabled: s.openai_low_upstream_rate_priority_enabled,
            openai_oauth_scheduling_rate_multiplier: s.openai_oauth_scheduling_rate_multiplier,
            openai_advanced_scheduler_enabled: s.openai_advanced_scheduler_enabled,
            openai_advanced_scheduler_sticky_weighted_enabled: s.openai_advanced_scheduler_sticky_weighted_enabled,
            openai_advanced_scheduler_subscription_priority_enabled: s.openai_advanced_scheduler_subscription_priority_enabled,
            openai_advanced_scheduler_lb_top_k: s.openai_advanced_scheduler_lb_top_k.trim(),
            openai_advanced_scheduler_weight_priority: s.openai_advanced_scheduler_weight_priority.trim(),
            openai_advanced_scheduler_weight_load: s.openai_advanced_scheduler_weight_load.trim(),
            openai_advanced_scheduler_weight_queue: s.openai_advanced_scheduler_weight_queue.trim(),
            openai_advanced_scheduler_weight_error_rate: s.openai_advanced_scheduler_weight_error_rate.trim(),
            openai_advanced_scheduler_weight_ttft: s.openai_advanced_scheduler_weight_ttft.trim(),
            openai_advanced_scheduler_weight_reset: s.openai_advanced_scheduler_weight_reset.trim(),
            openai_advanced_scheduler_weight_quota_headroom: s.openai_advanced_scheduler_weight_quota_headroom.trim(),
            openai_advanced_scheduler_weight_upstream_cost: s.openai_advanced_scheduler_weight_upstream_cost.trim(),
            openai_advanced_scheduler_weight_previous_response: s.openai_advanced_scheduler_weight_previous_response.trim(),
            openai_advanced_scheduler_weight_session_sticky: s.openai_advanced_scheduler_weight_session_sticky.trim(),
            // 余额、订阅到期与账号限额通知
            balance_low_notify_enabled: s.balance_low_notify_enabled,
            balance_low_notify_threshold: Number(s.balance_low_notify_threshold) || 0,
            balance_low_notify_recharge_url: s.balance_low_notify_recharge_url = s.balance_low_notify_recharge_url || It,
            subscription_expiry_notify_enabled: s.subscription_expiry_notify_enabled,
            account_quota_notify_enabled: s.account_quota_notify_enabled,
            account_quota_notify_emails: (s.account_quota_notify_emails || []).filter((ue) => ue.email.trim() !== ""),
            // Channel Monitor feature switch
            channel_monitor_enabled: s.channel_monitor_enabled,
            public_channel_status_enabled: s.public_channel_status_enabled,
            channel_monitor_default_interval_seconds: Number(s.channel_monitor_default_interval_seconds) || 60,
            channel_monitor_show_quota: !!s.channel_monitor_show_quota,
            // Available Channels feature switch
            available_channels_enabled: s.available_channels_enabled,
            // Subscription feature switch
            subscription_enabled: s.subscription_enabled,
            // Model Plaza feature switches + description
            model_plaza_enabled: s.model_plaza_enabled,
            model_plaza_require_auth: s.model_plaza_require_auth,
            model_plaza_description: s.model_plaza_description,
            allow_user_view_error_requests: s.allow_user_view_error_requests
          };
          Qt.value && (qa.openai_fast_policy_settings = {
            rules: ve.rules.map((ue) => {
              const Qe = (ue.model_whitelist || []).map((is) => is.trim()).filter((is) => is !== ""), ss = Qe.length > 0;
              return {
                service_tier: ue.service_tier,
                action: ue.action,
                scope: ue.scope,
                user_ids: ue.user_ids && ue.user_ids.length > 0 ? [...ue.user_ids] : void 0,
                error_message: ue.action === "block" ? ue.error_message : void 0,
                model_whitelist: ss ? Qe : void 0,
                fallback_action: ss ? ue.fallback_action || "pass" : void 0,
                fallback_error_message: ss && ue.fallback_action === "block" ? ue.fallback_error_message : void 0
              };
            })
          }), qa.default_platform_quotas = Hl(s.default_platform_quotas), qa.account_scheduling_thresholds = Bl(
            s.account_scheduling_thresholds
          ), jl(qa, Ee);
          const et = await U.run(
            () => se.settings.updateSettings(qa)
          );
          for (const [ue, Qe] of Object.entries(et))
            ue === "openai_fast_policy_settings" || $a.has(ue) || Qe != null && (s[ue] = Qe);
          Object.assign(Ee, rs(et)), s.default_platform_quotas = ls(et.default_platform_quotas), s.account_scheduling_thresholds = os(
            et.account_scheduling_thresholds
          ), Ce.value = Fi(
            et.registration_email_suffix_whitelist
          ), s.forwarded_client_ip_headers = aa(
            et.forwarded_client_ip_headers
          ), pe.value = "", Ve.value = js(
            Array.isArray(et.table_page_size_options) ? et.table_page_size_options : [10, 20, 50, 100]
          ), ge.value = "", s.smtp_password = "", Z.value = !1, s.turnstile_secret_key = "", s.aliyun_captcha_access_key_secret = "", s.linuxdo_connect_client_secret = "", s.dingtalk_connect_client_secret = "", s.github_oauth_client_secret = "", s.google_oauth_client_secret = "", s.wechat_connect_app_secret = "", s.wechat_connect_open_app_secret = "", s.wechat_connect_mp_app_secret = "", s.wechat_connect_mobile_app_secret = "";
          const wa = cs(
            et.wechat_connect_open_enabled,
            et.wechat_connect_mp_enabled,
            et.wechat_connect_mobile_enabled,
            et.wechat_connect_mode
          );
          s.wechat_connect_open_enabled = wa.openEnabled, s.wechat_connect_mp_enabled = wa.mpEnabled, s.wechat_connect_mobile_enabled = wa.mobileEnabled, s.wechat_connect_mode = Un(
            wa.openEnabled,
            wa.mpEnabled,
            wa.mobileEnabled,
            et.wechat_connect_mode
          ), s.wechat_connect_scopes = En(
            s.wechat_connect_mode
          ), s.oidc_connect_client_secret = "", et.openai_fast_policy_settings && Array.isArray(et.openai_fast_policy_settings.rules) && (ve.rules = et.openai_fast_policy_settings.rules.map((ue) => ({
            ...ue,
            user_ids: ue.user_ids ? [...ue.user_ids] : [],
            model_whitelist: ue.model_whitelist ? [...ue.model_whitelist] : []
          })), Qt.value = !0);
          let ri = !1;
          try {
            const [ue, Qe] = await Promise.allSettled([
              pl(),
              // Save web search emulation config separately (errors handled internally).
              ba()
            ]);
            if (ri = Qe.status === "fulfilled" && Qe.value, ue.status === "rejected")
              throw new Error(t("admin.settings.auxiliarySaveFailed"));
            if (Qe.status === "rejected")
              throw Qe.reason;
          } finally {
            await x.fetchPublicSettings(!0), await L.fetch(!0);
          }
          ri && x.showSuccess(t("admin.settings.settingsSaved"));
        } catch (N) {
          if (Ht(N))
            return;
          if (qi(N)) {
            x.showError(
              Ki(N) === "STEP_UP_ADMIN_API_KEY_FORBIDDEN" ? t("stepUp.adminApiKeyForbidden") : t("stepUp.notEnabled")
            );
            return;
          }
          if ((N == null ? void 0 : N.reason) === "STEP_UP_ENABLE_REQUIRES_TOTP") {
            x.showError(t("admin.settings.security.stepUpEnableRequiresTotp"));
            return;
          }
          Y.value = nt(N, t("admin.settings.failedToSave")), x.showError(Y.value);
        } finally {
          ne.value = !1;
        }
      }
    }
    async function Ro() {
      J.value = !0;
      try {
        const l = Z.value ? s.smtp_password : "", i = await se.settings.testSmtpConnection({
          smtp_host: s.smtp_host,
          smtp_port: s.smtp_port,
          smtp_username: s.smtp_username,
          smtp_password: l,
          smtp_use_tls: s.smtp_use_tls
        });
        x.showSuccess(
          i.message || t("admin.settings.smtpConnectionSuccess")
        );
      } catch (l) {
        x.showError(
          nt(l, t("admin.settings.failedToTestSmtp"))
        );
      } finally {
        J.value = !1;
      }
    }
    async function Lo() {
      if (!de.value) {
        x.showError(t("admin.settings.testEmail.enterRecipientHint"));
        return;
      }
      te.value = !0;
      try {
        const l = Z.value ? s.smtp_password : "", i = await se.settings.sendTestEmail({
          email: de.value,
          smtp_host: s.smtp_host,
          smtp_port: s.smtp_port,
          smtp_username: s.smtp_username,
          smtp_password: l,
          smtp_from_email: s.smtp_from_email,
          smtp_from_name: s.smtp_from_name,
          smtp_use_tls: s.smtp_use_tls
        });
        x.showSuccess(i.message || t("admin.settings.testEmailSent"));
      } catch (l) {
        x.showError(
          nt(l, t("admin.settings.failedToSendTestEmail"))
        );
      } finally {
        te.value = !1;
      }
    }
    async function Mo() {
      Pe.value = !0;
      try {
        const l = await se.settings.getAdminApiKey();
        Ie.value = l.exists, $e.value = l.masked_key;
      } catch {
      } finally {
        Pe.value = !1;
      }
    }
    async function Do() {
      if (Ie.value) {
        Be.value = !0;
        try {
          const l = await U.run(() => se.settings.regenerateAdminApiKey());
          Oe.value = l.key, Ie.value = !0, $e.value = l.key.substring(0, 10) + "..." + l.key.slice(-4), x.showSuccess(t("admin.settings.adminApiKey.keyGenerated"));
        } catch (l) {
          if (Ht(l)) return;
          x.showError(nt(l, t("common.error")));
        } finally {
          Be.value = !1;
        }
      }
    }
    async function Oo() {
      confirm(t("admin.settings.adminApiKey.regenerateConfirm")) && await Do();
    }
    async function Io() {
      if (confirm(t("admin.settings.adminApiKey.deleteConfirm"))) {
        Be.value = !0;
        try {
          await U.run(() => se.settings.deleteAdminApiKey()), Ie.value = !1, $e.value = "", Oe.value = "", x.showSuccess(t("admin.settings.adminApiKey.keyDeleted"));
        } catch (l) {
          if (Ht(l)) return;
          x.showError(nt(l, t("common.error")));
        } finally {
          Be.value = !1;
        }
      }
    }
    function zo() {
      navigator.clipboard.writeText(Oe.value).then(() => {
        x.showSuccess(t("admin.settings.adminApiKey.keyCopied"));
      }).catch(() => {
        x.showError(t("common.copyFailed"));
      });
    }
    async function No() {
      X.value = !0;
      try {
        Object.assign(
          I,
          await se.accounts.getUpstreamBillingProbeSettings()
        ), Ue("upstreamBillingProbe", I);
      } catch {
      } finally {
        X.value = !1;
      }
    }
    async function Fo() {
      const l = await se.accounts.updateUpstreamBillingProbeSettings({
        ...I
      });
      Object.assign(I, l), Ue("upstreamBillingProbe", I);
    }
    async function Ho() {
      he.value = !0;
      try {
        Object.assign(
          Q,
          await se.accounts.getOllamaCloudUsageSettings()
        ), Ue("ollamaCloudUsage", Q);
      } catch {
      } finally {
        he.value = !1;
      }
    }
    async function Bo() {
      const l = await se.accounts.updateOllamaCloudUsageSettings({
        ...Q
      });
      Object.assign(Q, l), Ue("ollamaCloudUsage", Q);
    }
    async function jo() {
      _e.value = !0;
      try {
        const l = await se.settings.getOverloadCooldownSettings();
        Object.assign(De, l), Ue("overloadCooldown", De);
      } catch {
      } finally {
        _e.value = !1;
      }
    }
    async function qo() {
      const l = await se.settings.updateOverloadCooldownSettings({
        enabled: De.enabled,
        cooldown_minutes: De.cooldown_minutes
      });
      Object.assign(De, l), Ue("overloadCooldown", De);
    }
    async function Ko() {
      fe.value = !0;
      try {
        const l = await se.settings.getPanelRateLimitSettings();
        Object.assign(xe, l), Ue("panelRateLimit", xe);
      } catch {
      } finally {
        fe.value = !1;
      }
    }
    async function Wo() {
      const l = await se.settings.updatePanelRateLimitSettings({
        enabled: xe.enabled,
        user_rpm: xe.user_rpm,
        heavy_rpm: xe.heavy_rpm,
        exempt_admin: xe.exempt_admin,
        public_ip_rpm: xe.public_ip_rpm
      });
      Object.assign(xe, l), Ue("panelRateLimit", xe);
    }
    async function Go() {
      H.value = !0;
      try {
        const l = await se.settings.getRateLimit429CooldownSettings();
        Object.assign(j, l), Ue("rateLimit429Cooldown", j);
      } catch {
      } finally {
        H.value = !1;
      }
    }
    async function Yo() {
      const l = await se.settings.updateRateLimit429CooldownSettings({
        enabled: j.enabled,
        cooldown_seconds: j.cooldown_seconds
      });
      Object.assign(j, l), Ue("rateLimit429Cooldown", j);
    }
    async function Qo() {
      R.value = !0;
      try {
        const l = await se.settings.getStreamTimeoutSettings();
        Object.assign(S, l), Ue("streamTimeout", S);
      } catch {
      } finally {
        R.value = !1;
      }
    }
    async function Xo() {
      const l = await se.settings.updateStreamTimeoutSettings({
        enabled: S.enabled,
        action: S.action,
        temp_unsched_minutes: S.temp_unsched_minutes,
        threshold_count: S.threshold_count,
        threshold_window_minutes: S.threshold_window_minutes
      });
      Object.assign(S, l), Ue("streamTimeout", S);
    }
    async function Jo() {
      h.value = !0;
      try {
        const l = await se.settings.getRectifierSettings();
        Object.assign(y, l), Array.isArray(y.apikey_signature_patterns) || (y.apikey_signature_patterns = []), Ue("rectifier", y);
      } catch {
      } finally {
        h.value = !1;
      }
    }
    async function Zo() {
      const l = await se.settings.updateRectifierSettings({
        enabled: y.enabled,
        thinking_signature_enabled: y.thinking_signature_enabled,
        thinking_budget_enabled: y.thinking_budget_enabled,
        apikey_signature_enabled: y.apikey_signature_enabled,
        apikey_signature_patterns: y.apikey_signature_patterns.filter(
          (i) => i.trim() !== ""
        )
      });
      Object.assign(y, l), Array.isArray(y.apikey_signature_patterns) || (y.apikey_signature_patterns = []), Ue("rectifier", y);
    }
    const Qs = W(() => [
      { value: "pass", label: t("admin.settings.betaPolicy.actionPass") },
      { value: "filter", label: t("admin.settings.betaPolicy.actionFilter") },
      { value: "block", label: t("admin.settings.betaPolicy.actionBlock") }
    ]), el = W(() => [
      { value: "all", label: t("admin.settings.betaPolicy.scopeAll") },
      { value: "oauth", label: t("admin.settings.betaPolicy.scopeOAuth") },
      { value: "apikey", label: t("admin.settings.betaPolicy.scopeAPIKey") },
      { value: "bedrock", label: t("admin.settings.betaPolicy.scopeBedrock") }
    ]), tl = {
      "fast-mode-2026-02-01": "Fast Mode",
      "context-1m-2025-08-07": "Context 1M"
    }, Xs = {
      "context-1m-2025-08-07": [
        {
          label: t("admin.settings.betaPolicy.presetOpusOnly"),
          description: t("admin.settings.betaPolicy.presetOpusOnlyDesc"),
          action: "pass",
          model_whitelist: ["claude-opus-4-6"],
          fallback_action: "filter"
        }
      ]
    }, al = [
      "claude-opus-4-6",
      "claude-sonnet-4-6",
      "claude-opus-*",
      "claude-sonnet-*"
    ];
    function nl(l) {
      return tl[l] || l;
    }
    function sl(l, i) {
      l.action = i.action, l.model_whitelist = [...i.model_whitelist], l.fallback_action = i.fallback_action;
    }
    function il(l, i) {
      l.model_whitelist || (l.model_whitelist = []), l.model_whitelist.includes(i) || l.model_whitelist.push(i);
    }
    async function ol() {
      w.value = !0;
      try {
        const l = await se.settings.getBetaPolicySettings();
        ke.rules = l.rules, Ue("betaPolicy", ke);
      } catch {
      } finally {
        w.value = !1;
      }
    }
    const ll = W(() => [
      { value: "all", label: t("admin.settings.openaiFastPolicy.tierAll") },
      {
        value: "priority",
        label: t("admin.settings.openaiFastPolicy.tierPriority")
      },
      { value: "flex", label: t("admin.settings.openaiFastPolicy.tierFlex") }
    ]), Js = W(() => [
      { value: "pass", label: t("admin.settings.openaiFastPolicy.actionPass") },
      { value: "filter", label: t("admin.settings.openaiFastPolicy.actionFilter") },
      {
        value: "force_priority",
        label: t("admin.settings.openaiFastPolicy.actionForcePriority")
      },
      { value: "block", label: t("admin.settings.openaiFastPolicy.actionBlock") }
    ]);
    function Zs(l) {
      return t(`admin.settings.openaiFastPolicy.summaryAction.${l}`);
    }
    function Yn(l) {
      var i;
      return !!((i = l.model_whitelist) != null && i.some((m) => m.trim() !== ""));
    }
    const rl = W(() => [
      { value: "all", label: t("admin.settings.openaiFastPolicy.scopeAll") },
      { value: "oauth", label: t("admin.settings.openaiFastPolicy.scopeOAuth") },
      { value: "apikey", label: t("admin.settings.openaiFastPolicy.scopeAPIKey") },
      {
        value: "bedrock",
        label: t("admin.settings.openaiFastPolicy.scopeBedrock")
      }
    ]);
    function dl() {
      ve.rules.push({
        service_tier: "priority",
        action: "filter",
        scope: "all",
        user_ids: [],
        error_message: "",
        model_whitelist: [],
        fallback_action: "pass",
        fallback_error_message: ""
      });
    }
    function cl(l) {
      ve.rules.splice(l, 1);
    }
    function ul(l) {
      l.model_whitelist || (l.model_whitelist = []), l.model_whitelist.push("");
    }
    function ml(l, i) {
      var m;
      (m = l.model_whitelist) == null || m.splice(i, 1);
    }
    async function _l() {
      const l = ke.rules.map((m) => {
        var g;
        const o = (g = m.model_whitelist) == null ? void 0 : g.filter((N) => N.trim() !== ""), b = o && o.length > 0;
        return {
          beta_token: m.beta_token,
          action: m.action,
          scope: m.scope,
          error_message: m.error_message,
          model_whitelist: b ? o : void 0,
          fallback_action: b ? m.fallback_action || "pass" : void 0,
          fallback_error_message: b && m.fallback_action === "block" ? m.fallback_error_message : void 0
        };
      }), i = await se.settings.updateBetaPolicySettings({ rules: l });
      ke.rules = i.rules, Ue("betaPolicy", ke);
    }
    async function pl() {
      const l = [];
      $("upstreamBillingProbe", I) && l.push(Fo()), $("ollamaCloudUsage", Q) && l.push(Bo()), $("overloadCooldown", De) && l.push(qo()), $("rateLimit429Cooldown", j) && l.push(Yo()), $("panelRateLimit", xe) && l.push(Wo()), $("streamTimeout", S) && l.push(Xo()), $("rectifier", y) && l.push(Zo()), $("betaPolicy", ke) && l.push(_l());
      const m = (await Promise.allSettled(l)).find(
        (o) => o.status === "rejected"
      );
      if (m)
        throw m.reason;
    }
    const Qn = W(() => [
      { value: "easypay", label: t("payment.methods.easypay") },
      { value: "alipay", label: t("payment.methods.alipay") },
      { value: "wxpay", label: t("payment.methods.wxpay") },
      { value: "stripe", label: t("payment.methods.stripe") },
      { value: "airwallex", label: t("payment.methods.airwallex") }
    ]);
    function gl(l) {
      return s.payment_enabled_types.includes(l);
    }
    const yl = W(
      () => s.payment_enabled_types.length > 0
    );
    function bl(l) {
      s.payment_enabled_types.includes(l) ? (s.payment_enabled_types = s.payment_enabled_types.filter(
        (i) => i !== l
      ), hl(l)) : s.payment_enabled_types = [...s.payment_enabled_types, l];
    }
    async function hl(l) {
      const i = An.value.filter(
        (m) => m.provider_key === l && m.enabled
      );
      for (const m of i)
        try {
          await se.payment.updateProvider(m.id, { enabled: !1 }), m.enabled = !1;
        } catch (o) {
          xl("disable provider failed", m.id, o);
        }
    }
    function xl(...l) {
      console.warn("[payment]", ...l);
    }
    const Xn = O(!1), Jn = O(!1), An = O([]), ja = O(!1), Tn = O(!1), Vt = O(null), Zn = O(null), es = O(null), ei = W(() => [
      { value: "easypay", label: t("admin.settings.payment.providerEasypay") },
      { value: "alipay", label: t("admin.settings.payment.providerAlipay") },
      { value: "wxpay", label: t("admin.settings.payment.providerWxpay") },
      { value: "stripe", label: t("admin.settings.payment.providerStripe") },
      { value: "airwallex", label: t("admin.settings.payment.providerAirwallex") }
    ]), ti = W(() => {
      const l = s.payment_enabled_types;
      return ei.value.filter((i) => l.includes(i.value));
    }), fl = W(() => [
      {
        value: "round-robin",
        label: t("admin.settings.payment.strategyRoundRobin")
      },
      {
        value: "least-amount",
        label: t("admin.settings.payment.strategyLeastAmount")
      }
    ]), kl = W(() => [
      {
        value: "minute",
        label: t("admin.settings.payment.cancelRateLimitUnitMinute")
      },
      { value: "hour", label: t("admin.settings.payment.cancelRateLimitUnitHour") },
      { value: "day", label: t("admin.settings.payment.cancelRateLimitUnitDay") }
    ]), vl = W(() => [
      {
        value: "rolling",
        label: t("admin.settings.payment.cancelRateLimitWindowModeRolling")
      },
      {
        value: "fixed",
        label: t("admin.settings.payment.cancelRateLimitWindowModeFixed")
      }
    ]);
    function ai(l) {
      if (!l.enabled)
        return [];
      const i = Array.isArray(l.supported_types) ? l.supported_types : [], m = /* @__PURE__ */ new Set(), o = (b) => {
        const g = ws(b);
        (g === "alipay" || g === "wxpay") && m.add(g);
      };
      return l.provider_key === "alipay" ? i.length === 0 ? m.add("alipay") : i.forEach((b) => {
        ws(b) === "alipay" && m.add("alipay");
      }) : l.provider_key === "wxpay" ? i.length === 0 ? m.add("wxpay") : i.forEach((b) => {
        ws(b) === "wxpay" && m.add("wxpay");
      }) : l.provider_key === "easypay" && i.forEach(o), Array.from(m);
    }
    function ts(l) {
      const i = ai(l);
      if (i.length === 0)
        return null;
      for (const m of An.value) {
        if (m.id === l.id || !m.enabled)
          continue;
        const o = ai(m), b = i.find(
          (g) => o.includes(g)
        );
        if (b)
          return {
            method: b,
            conflicting: m
          };
      }
      return null;
    }
    function as(l) {
      x.showError(
        t("admin.settings.payment.enableConflict", {
          method: t(`payment.methods.${l.method}`),
          provider: l.conflicting.name
        })
      );
    }
    async function Gt() {
      Xn.value = !0;
      try {
        const l = await se.payment.getProviders();
        An.value = (l.data || []).map((i) => ({
          ...i,
          supported_types: Array.isArray(i.supported_types) ? i.supported_types : []
        }));
      } catch (l) {
        x.showError(Ca(l, t, "payment.errors", t("common.error")));
      } finally {
        Xn.value = !1;
      }
    }
    function wl() {
      var l, i;
      Vt.value = null, (i = es.value) == null || i.reset(
        ((l = ti.value[0]) == null ? void 0 : l.value) || "easypay"
      ), ja.value = !0;
    }
    function Cl(l) {
      var i;
      Vt.value = l, (i = es.value) == null || i.loadProvider(l), ja.value = !0;
    }
    async function Sl(l) {
      var i, m, o, b, g;
      Jn.value = !0;
      try {
        const N = {
          id: ((i = Vt.value) == null ? void 0 : i.id) ?? 0,
          provider_key: l.provider_key ?? ((m = Vt.value) == null ? void 0 : m.provider_key) ?? "",
          supported_types: l.supported_types ?? ((o = Vt.value) == null ? void 0 : o.supported_types) ?? [],
          enabled: l.enabled ?? ((b = Vt.value) == null ? void 0 : b.enabled) ?? !1,
          name: l.name ?? ((g = Vt.value) == null ? void 0 : g.name) ?? ""
        }, Le = ts(N);
        if (Le) {
          as(Le);
          return;
        }
        Vt.value ? await se.payment.updateProvider(Vt.value.id, l) : await se.payment.createProvider(l), ja.value = !1, await Gt();
      } catch (N) {
        x.showError(Ca(N, t, "payment.errors", t("common.error")));
      } finally {
        Jn.value = !1;
      }
    }
    async function Al(l, i) {
      let m;
      if (i === "enabled" ? m = !l.enabled : i === "refund_enabled" ? m = !l.refund_enabled : m = !l.allow_user_refund, i === "enabled" && m) {
        const b = ts({
          id: l.id,
          provider_key: l.provider_key,
          supported_types: l.supported_types,
          enabled: !0,
          name: l.name
        });
        if (b) {
          as(b);
          return;
        }
      }
      const o = { [i]: m };
      i === "refund_enabled" && !m && (o.allow_user_refund = !1);
      try {
        await se.payment.updateProvider(l.id, o), await Gt();
      } catch (b) {
        x.showError(Ca(b, t, "payment.errors", t("common.error")));
      }
    }
    async function Tl(l, i) {
      const m = Array.isArray(l.supported_types) ? l.supported_types : [], o = m.includes(i) ? m.filter((g) => g !== i) : [...m, i], b = ts({
        id: l.id,
        provider_key: l.provider_key,
        supported_types: o,
        enabled: l.enabled,
        name: l.name
      });
      if (b) {
        as(b);
        return;
      }
      try {
        await se.payment.updateProvider(l.id, {
          supported_types: o
        }), await Gt();
      } catch (g) {
        x.showError(Ca(g, t, "payment.errors", t("common.error")));
      }
    }
    function Ul(l) {
      Zn.value = l.id, Tn.value = !0;
    }
    async function El(l) {
      try {
        await Promise.all(
          l.map(
            (i) => se.payment.updateProvider(i.id, {
              sort_order: i.sort_order
            })
          )
        ), await Gt();
      } catch (i) {
        x.showError(Ca(i, t, "payment.errors", t("common.error"))), Gt();
      }
    }
    async function Vl() {
      if (Zn.value)
        try {
          await se.payment.deleteProvider(Zn.value), x.showSuccess(t("common.deleted")), Tn.value = !1, Gt();
        } catch (l) {
          x.showError(Ca(l, t, "payment.errors", t("common.error")));
        }
    }
    return en(() => {
      Ao(), To(), Mo(), No(), Ho(), jo(), Go(), Ko(), Qo(), Jo(), ol(), Gt();
    }), Fn(
      () => s.dingtalk_connect_corp_restriction_policy,
      (l) => {
        l !== "internal_only" && (s.dingtalk_connect_bypass_registration && (s.dingtalk_connect_bypass_registration = !1), s.dingtalk_connect_sync_corp_email && (s.dingtalk_connect_sync_corp_email = !1), s.dingtalk_connect_sync_display_name && (s.dingtalk_connect_sync_display_name = !1), s.dingtalk_connect_sync_dept && (s.dingtalk_connect_sync_dept = !1));
      }
    ), (l, i) => {
      const m = Ll("router-link");
      return r(), d("div", X0, [
        me.value ? (r(), d("div", J0, [...i[237] || (i[237] = [
          e("div", { class: "h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)
        ])])) : (r(), d("form", {
          key: 1,
          onSubmit: sa($o, ["prevent"]),
          class: "space-y-6",
          novalidate: ""
        }, [
          e("div", Z0, [
            e("nav", {
              class: "settings-tabs-scroll",
              role: "tablist",
              "aria-label": a(t)("admin.settings.title")
            }, [
              e("div", ty, [
                (r(), d(K, null, ee(F, (o) => e("button", {
                  key: o.key,
                  id: `settings-tab-${o.key}`,
                  type: "button",
                  role: "tab",
                  "aria-selected": M.value === o.key,
                  tabindex: M.value === o.key ? 0 : -1,
                  class: ce([
                    "settings-tab",
                    M.value === o.key && "settings-tab-active"
                  ]),
                  onClick: (b) => ie(o.key),
                  onKeydown: (b) => le(b, o.key)
                }, [
                  e("span", ny, [
                    v(Ae, {
                      name: o.icon,
                      size: "sm"
                    }, null, 8, ["name"])
                  ]),
                  e("span", sy, n(a(t)(`admin.settings.tabs.${o.key}`)), 1)
                ], 42, ay)), 64))
              ])
            ], 8, ey)
          ]),
          p(v(Mi, null, {
            default: Re(() => [
              M.value === "security" ? (r(), ct(N0, { key: 0 })) : T("", !0),
              Ie.value ? (r(), d("details", iy, [
                e("summary", oy, n(a(t)("adminAccessKeys.legacy")), 1),
                e("div", ly, [
                  e("h2", ry, n(a(t)("admin.settings.adminApiKey.title")), 1),
                  e("p", dy, n(a(t)("admin.settings.adminApiKey.description")), 1)
                ]),
                e("div", cy, [
                  e("div", uy, [
                    e("div", my, [
                      v(Ae, {
                        name: "exclamationTriangle",
                        size: "md",
                        class: "mt-0.5 flex-shrink-0 text-zo-alert-500"
                      }),
                      e("p", _y, n(a(t)("admin.settings.adminApiKey.securityWarning")), 1)
                    ])
                  ]),
                  Pe.value ? (r(), d("div", py, [
                    i[238] || (i[238] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d("div", gy, [
                    e("div", yy, [
                      e("div", null, [
                        e("label", by, n(a(t)("admin.settings.adminApiKey.currentKey")), 1),
                        e("code", hy, n($e.value), 1)
                      ]),
                      e("div", xy, [
                        e("button", {
                          type: "button",
                          onClick: Oo,
                          disabled: Be.value,
                          class: "btn btn-secondary btn-sm"
                        }, n(Be.value ? a(t)("admin.settings.adminApiKey.regenerating") : a(t)("admin.settings.adminApiKey.regenerate")), 9, fy),
                        e("button", {
                          type: "button",
                          onClick: Io,
                          disabled: Be.value,
                          class: "btn btn-secondary btn-sm text-red-600 hover:text-red-700 dark:text-red-400"
                        }, n(a(t)("admin.settings.adminApiKey.delete")), 9, ky)
                      ])
                    ]),
                    Oe.value ? (r(), d("div", vy, [
                      e("p", wy, n(a(t)("admin.settings.adminApiKey.keyWarning")), 1),
                      e("div", Cy, [
                        e("code", Sy, n(Oe.value), 1),
                        e("button", {
                          type: "button",
                          onClick: zo,
                          class: "btn btn-primary btn-sm flex-shrink-0"
                        }, n(a(t)("admin.settings.adminApiKey.copyKey")), 1)
                      ]),
                      e("p", Ay, n(a(t)("admin.settings.adminApiKey.usage")), 1)
                    ])) : T("", !0)
                  ]))
                ])
              ])) : T("", !0)
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "security"]
          ]),
          p(v(Di, null, {
            default: Re(() => [
              e("div", Ty, [
                e("div", Uy, [
                  e("h2", Ey, n(a(t)("admin.settings.overloadCooldown.title")), 1),
                  e("p", Vy, n(a(t)("admin.settings.overloadCooldown.description")), 1)
                ]),
                e("div", Py, [
                  _e.value ? (r(), d("div", $y, [
                    i[239] || (i[239] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", Ry, [
                      e("div", null, [
                        e("label", Ly, n(a(t)("admin.settings.overloadCooldown.enabled")), 1),
                        e("p", My, n(a(t)("admin.settings.overloadCooldown.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: De.enabled,
                        "onUpdate:modelValue": i[0] || (i[0] = (o) => De.enabled = o),
                        "data-testid": "overload-cooldown-enabled"
                      }, null, 8, ["modelValue"])
                    ]),
                    De.enabled ? (r(), d("div", Dy, [
                      e("div", null, [
                        e("label", Oy, n(a(t)("admin.settings.overloadCooldown.cooldownMinutes")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[1] || (i[1] = (o) => De.cooldown_minutes = o),
                          "data-testid": "overload-cooldown-minutes",
                          type: "number",
                          min: "1",
                          max: "120",
                          class: "input w-32"
                        }, null, 512), [
                          [
                            k,
                            De.cooldown_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", Iy, n(a(t)("admin.settings.overloadCooldown.cooldownMinutesHint")), 1)
                      ])
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", zy, [
                e("div", Ny, [
                  e("h2", Fy, n(a(t)("admin.settings.rateLimit429Cooldown.title")), 1),
                  e("p", Hy, n(a(t)("admin.settings.rateLimit429Cooldown.description")), 1)
                ]),
                e("div", By, [
                  H.value ? (r(), d("div", jy, [
                    i[240] || (i[240] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", qy, [
                      e("div", null, [
                        e("label", Ky, n(a(t)("admin.settings.rateLimit429Cooldown.enabled")), 1),
                        e("p", Wy, n(a(t)("admin.settings.rateLimit429Cooldown.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: j.enabled,
                        "onUpdate:modelValue": i[2] || (i[2] = (o) => j.enabled = o),
                        "data-testid": "rate-limit-429-cooldown-enabled"
                      }, null, 8, ["modelValue"])
                    ]),
                    j.enabled ? (r(), d("div", Gy, [
                      e("div", null, [
                        e("label", Yy, n(a(t)(
                          "admin.settings.rateLimit429Cooldown.cooldownSeconds"
                        )), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[3] || (i[3] = (o) => j.cooldown_seconds = o),
                          "data-testid": "rate-limit-429-cooldown-seconds",
                          type: "number",
                          min: "1",
                          max: "7200",
                          class: "input w-32"
                        }, null, 512), [
                          [
                            k,
                            j.cooldown_seconds,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", Qy, n(a(t)(
                          "admin.settings.rateLimit429Cooldown.cooldownSecondsHint"
                        )), 1)
                      ])
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", Xy, [
                e("div", Jy, [
                  e("h2", Zy, n(a(t)("admin.settings.streamTimeout.title")), 1),
                  e("p", eb, n(a(t)("admin.settings.streamTimeout.description")), 1)
                ]),
                e("div", tb, [
                  R.value ? (r(), d("div", ab, [
                    i[241] || (i[241] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", nb, [
                      e("div", null, [
                        e("label", sb, n(a(t)("admin.settings.streamTimeout.enabled")), 1),
                        e("p", ib, n(a(t)("admin.settings.streamTimeout.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: S.enabled,
                        "onUpdate:modelValue": i[4] || (i[4] = (o) => S.enabled = o)
                      }, null, 8, ["modelValue"])
                    ]),
                    S.enabled ? (r(), d("div", ob, [
                      e("div", null, [
                        e("label", lb, n(a(t)("admin.settings.streamTimeout.action")), 1),
                        p(e("select", {
                          "onUpdate:modelValue": i[5] || (i[5] = (o) => S.action = o),
                          class: "input w-64"
                        }, [
                          e("option", rb, n(a(t)("admin.settings.streamTimeout.actionTempUnsched")), 1),
                          e("option", db, n(a(t)("admin.settings.streamTimeout.actionError")), 1),
                          e("option", cb, n(a(t)("admin.settings.streamTimeout.actionNone")), 1)
                        ], 512), [
                          [xt, S.action]
                        ]),
                        e("p", ub, n(a(t)("admin.settings.streamTimeout.actionHint")), 1)
                      ]),
                      S.action === "temp_unsched" ? (r(), d("div", mb, [
                        e("label", _b, n(a(t)("admin.settings.streamTimeout.tempUnschedMinutes")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[6] || (i[6] = (o) => S.temp_unsched_minutes = o),
                          type: "number",
                          min: "1",
                          max: "60",
                          class: "input w-32"
                        }, null, 512), [
                          [
                            k,
                            S.temp_unsched_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", pb, n(a(t)("admin.settings.streamTimeout.tempUnschedMinutesHint")), 1)
                      ])) : T("", !0),
                      e("div", null, [
                        e("label", gb, n(a(t)("admin.settings.streamTimeout.thresholdCount")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[7] || (i[7] = (o) => S.threshold_count = o),
                          "data-testid": "stream-timeout-threshold-count",
                          type: "number",
                          min: "1",
                          max: "10",
                          class: "input w-32"
                        }, null, 512), [
                          [
                            k,
                            S.threshold_count,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", yb, n(a(t)("admin.settings.streamTimeout.thresholdCountHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", bb, n(a(t)("admin.settings.streamTimeout.thresholdWindowMinutes")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[8] || (i[8] = (o) => S.threshold_window_minutes = o),
                          type: "number",
                          min: "1",
                          max: "60",
                          class: "input w-32"
                        }, null, 512), [
                          [
                            k,
                            S.threshold_window_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", hb, n(a(t)(
                          "admin.settings.streamTimeout.thresholdWindowMinutesHint"
                        )), 1)
                      ])
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", xb, [
                e("div", fb, [
                  e("h2", kb, n(a(t)("admin.settings.rectifier.title")), 1),
                  e("p", vb, n(a(t)("admin.settings.rectifier.description")), 1)
                ]),
                e("div", wb, [
                  h.value ? (r(), d("div", Cb, [
                    i[242] || (i[242] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", Sb, [
                      e("div", null, [
                        e("label", Ab, n(a(t)("admin.settings.rectifier.enabled")), 1),
                        e("p", Tb, n(a(t)("admin.settings.rectifier.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: y.enabled,
                        "onUpdate:modelValue": i[9] || (i[9] = (o) => y.enabled = o),
                        "data-testid": "rectifier-enabled"
                      }, null, 8, ["modelValue"])
                    ]),
                    y.enabled ? (r(), d("div", Ub, [
                      e("div", Eb, [
                        e("div", null, [
                          e("label", Vb, n(a(t)("admin.settings.rectifier.thinkingSignature")), 1),
                          e("p", Pb, n(a(t)("admin.settings.rectifier.thinkingSignatureHint")), 1)
                        ]),
                        v(B, {
                          modelValue: y.thinking_signature_enabled,
                          "onUpdate:modelValue": i[10] || (i[10] = (o) => y.thinking_signature_enabled = o)
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", $b, [
                        e("div", null, [
                          e("label", Rb, n(a(t)("admin.settings.rectifier.thinkingBudget")), 1),
                          e("p", Lb, n(a(t)("admin.settings.rectifier.thinkingBudgetHint")), 1)
                        ]),
                        v(B, {
                          modelValue: y.thinking_budget_enabled,
                          "onUpdate:modelValue": i[11] || (i[11] = (o) => y.thinking_budget_enabled = o)
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", Mb, [
                        e("div", null, [
                          e("label", Db, n(a(t)("admin.settings.rectifier.apikeySignature")), 1),
                          e("p", Ob, n(a(t)("admin.settings.rectifier.apikeySignatureHint")), 1)
                        ]),
                        v(B, {
                          modelValue: y.apikey_signature_enabled,
                          "onUpdate:modelValue": i[12] || (i[12] = (o) => y.apikey_signature_enabled = o)
                        }, null, 8, ["modelValue"])
                      ]),
                      y.apikey_signature_enabled ? (r(), d("div", Ib, [
                        e("div", null, [
                          e("label", zb, n(a(t)("admin.settings.rectifier.apikeyPatterns")), 1),
                          e("p", Nb, n(a(t)("admin.settings.rectifier.apikeyPatternsHint")), 1)
                        ]),
                        (r(!0), d(K, null, ee(y.apikey_signature_patterns, (o, b) => (r(), d("div", {
                          key: b,
                          class: "flex items-center gap-2"
                        }, [
                          p(e("input", {
                            "onUpdate:modelValue": (g) => y.apikey_signature_patterns[b] = g,
                            type: "text",
                            class: "input input-sm flex-1",
                            placeholder: a(t)("admin.settings.rectifier.apikeyPatternPlaceholder")
                          }, null, 8, Fb), [
                            [k, y.apikey_signature_patterns[b]]
                          ]),
                          e("button", {
                            type: "button",
                            onClick: (g) => y.apikey_signature_patterns.splice(
                              b,
                              1
                            ),
                            class: "btn btn-ghost btn-xs text-red-500 hover:text-red-700"
                          }, [...i[243] || (i[243] = [
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
                          ])], 8, Hb)
                        ]))), 128)),
                        e("button", {
                          type: "button",
                          onClick: i[13] || (i[13] = (o) => y.apikey_signature_patterns.push("")),
                          class: "btn btn-ghost btn-xs text-primary-600 dark:text-primary-400"
                        }, " + " + n(a(t)("admin.settings.rectifier.addPattern")), 1)
                      ])) : T("", !0)
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", Bb, [
                e("div", jb, [
                  e("h2", qb, n(a(t)("admin.settings.betaPolicy.title")), 1),
                  e("p", Kb, n(a(t)("admin.settings.betaPolicy.description")), 1)
                ]),
                e("div", Wb, [
                  w.value ? (r(), d("div", Gb, [
                    i[244] || (i[244] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(!0), d(K, { key: 1 }, ee(ke.rules, (o) => {
                    var b;
                    return r(), d("div", {
                      key: o.beta_token,
                      class: "rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                    }, [
                      e("div", Yb, [
                        e("span", Qb, n(nl(o.beta_token)), 1),
                        e("span", Xb, n(o.beta_token), 1)
                      ]),
                      e("div", Jb, [
                        e("div", null, [
                          e("label", Zb, n(a(t)("admin.settings.betaPolicy.action")), 1),
                          v(Ke, {
                            "data-testid": "beta-policy-action",
                            modelValue: o.action,
                            "onUpdate:modelValue": (g) => o.action = g,
                            options: Qs.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        e("div", null, [
                          e("label", eh, n(a(t)("admin.settings.betaPolicy.scope")), 1),
                          v(Ke, {
                            modelValue: o.scope,
                            "onUpdate:modelValue": (g) => o.scope = g,
                            options: el.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ])
                      ]),
                      o.action === "block" ? (r(), d("div", th, [
                        e("label", ah, n(a(t)("admin.settings.betaPolicy.errorMessage")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.error_message = g,
                          type: "text",
                          class: "input",
                          placeholder: a(t)("admin.settings.betaPolicy.errorMessagePlaceholder")
                        }, null, 8, nh), [
                          [k, o.error_message]
                        ]),
                        e("p", sh, n(a(t)("admin.settings.betaPolicy.errorMessageHint")), 1)
                      ])) : T("", !0),
                      (b = Xs[o.beta_token]) != null && b.length ? (r(), d("div", ih, [
                        e("label", oh, n(a(t)("admin.settings.betaPolicy.quickPresets")), 1),
                        e("div", lh, [
                          (r(!0), d(K, null, ee(Xs[o.beta_token], (g) => (r(), d("button", {
                            key: g.label,
                            type: "button",
                            class: "inline-flex items-center gap-1 rounded-md border border-primary-200 bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 transition-colors hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300 dark:hover:bg-primary-900/50",
                            onClick: (N) => sl(o, g),
                            title: g.description
                          }, n(g.label), 9, rh))), 128))
                        ])
                      ])) : T("", !0),
                      e("div", dh, [
                        e("label", ch, n(a(t)("admin.settings.betaPolicy.modelWhitelist")), 1),
                        e("p", uh, n(a(t)("admin.settings.betaPolicy.modelWhitelistHint")), 1),
                        (r(!0), d(K, null, ee(o.model_whitelist || [], (g, N) => (r(), d("div", {
                          key: N,
                          class: "mb-1.5 flex items-center gap-2"
                        }, [
                          p(e("input", {
                            "onUpdate:modelValue": (Le) => o.model_whitelist[N] = Le,
                            type: "text",
                            class: "input input-sm flex-1",
                            placeholder: a(t)("admin.settings.betaPolicy.modelPatternPlaceholder")
                          }, null, 8, mh), [
                            [k, o.model_whitelist[N]]
                          ]),
                          e("button", {
                            type: "button",
                            onClick: (Le) => o.model_whitelist.splice(N, 1),
                            class: "shrink-0 rounded p-1 text-red-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                          }, [...i[245] || (i[245] = [
                            e("svg", {
                              class: "h-4 w-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ])], 8, _h)
                        ]))), 128)),
                        e("button", {
                          type: "button",
                          onClick: (g) => {
                            o.model_whitelist || (o.model_whitelist = []), o.model_whitelist.push("");
                          },
                          class: "mb-2 inline-flex items-center gap-1 text-xs text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        }, [
                          i[246] || (i[246] = e("svg", {
                            class: "h-3.5 w-3.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M12 4v16m8-8H4"
                            })
                          ], -1)),
                          q(" " + n(a(t)("admin.settings.betaPolicy.addModelPattern")), 1)
                        ], 8, ph),
                        e("div", gh, [
                          e("span", yh, n(a(t)("admin.settings.betaPolicy.commonPatterns")) + ":", 1),
                          (r(), d(K, null, ee(al, (g) => e("button", {
                            key: g,
                            type: "button",
                            class: "rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-700 dark:hover:bg-primary-900/30 dark:hover:text-primary-300",
                            onClick: (N) => il(o, g)
                          }, n(g), 9, bh)), 64))
                        ])
                      ]),
                      o.model_whitelist && o.model_whitelist.length > 0 ? (r(), d("div", hh, [
                        e("label", xh, n(a(t)("admin.settings.betaPolicy.fallbackAction")), 1),
                        v(Ke, {
                          modelValue: o.fallback_action || "pass",
                          "onUpdate:modelValue": (g) => o.fallback_action = g,
                          options: Qs.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                        e("p", fh, n(a(t)("admin.settings.betaPolicy.fallbackActionHint")), 1),
                        o.fallback_action === "block" ? (r(), d("div", kh, [
                          p(e("input", {
                            "onUpdate:modelValue": (g) => o.fallback_error_message = g,
                            type: "text",
                            class: "input",
                            placeholder: a(t)(
                              "admin.settings.betaPolicy.fallbackErrorMessagePlaceholder"
                            )
                          }, null, 8, vh), [
                            [k, o.fallback_error_message]
                          ]),
                          e("p", wh, n(a(t)("admin.settings.betaPolicy.errorMessageHint")), 1)
                        ])) : T("", !0)
                      ])) : T("", !0)
                    ]);
                  }), 128))
                ])
              ]),
              e("div", Ch, [
                e("div", Sh, [
                  e("h2", Ah, n(a(t)("admin.settings.openaiFastPolicy.title")), 1),
                  e("p", Th, n(a(t)("admin.settings.openaiFastPolicy.description")), 1)
                ]),
                e("div", Uh, [
                  ve.rules.length === 0 ? (r(), d("div", Eh, n(a(t)("admin.settings.openaiFastPolicy.empty")), 1)) : T("", !0),
                  (r(!0), d(K, null, ee(ve.rules, (o, b) => (r(), d("div", {
                    key: b,
                    class: "rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                  }, [
                    e("div", Vh, [
                      e("span", Ph, n(a(t)("admin.settings.openaiFastPolicy.ruleHeader", {
                        index: b + 1
                      })), 1),
                      e("button", {
                        type: "button",
                        onClick: (g) => cl(b),
                        class: "rounded p-1 text-red-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20",
                        title: a(t)("admin.settings.openaiFastPolicy.removeRule")
                      }, [...i[247] || (i[247] = [
                        e("svg", {
                          class: "h-4 w-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ], -1)
                      ])], 8, $h)
                    ]),
                    e("div", {
                      class: "mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400",
                      "data-testid": `openai-fast-policy-summary-${b}`
                    }, [
                      e("span", Lh, n(a(t)(
                        Yn(o) ? "admin.settings.openaiFastPolicy.summaryTargetModels" : "admin.settings.openaiFastPolicy.summaryAllModels"
                      )), 1),
                      i[250] || (i[250] = e("span", { "aria-hidden": "true" }, "→", -1)),
                      e("span", Mh, n(Zs(o.action)), 1),
                      Yn(o) ? (r(), d(K, { key: 0 }, [
                        i[248] || (i[248] = e("span", { "aria-hidden": "true" }, "·", -1)),
                        e("span", Dh, n(a(t)(
                          "admin.settings.openaiFastPolicy.summaryOtherModels"
                        )), 1),
                        i[249] || (i[249] = e("span", { "aria-hidden": "true" }, "→", -1)),
                        e("span", Oh, n(Zs(
                          o.fallback_action || "pass"
                        )), 1)
                      ], 64)) : T("", !0)
                    ], 8, Rh),
                    e("div", Ih, [
                      e("div", null, [
                        e("label", zh, n(a(t)("admin.settings.openaiFastPolicy.serviceTier")), 1),
                        v(Ke, {
                          modelValue: o.service_tier,
                          "onUpdate:modelValue": (g) => o.service_tier = g,
                          options: ll.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      e("div", null, [
                        e("label", Nh, n(a(t)("admin.settings.openaiFastPolicy.action")), 1),
                        v(Ke, {
                          modelValue: o.action,
                          "onUpdate:modelValue": (g) => o.action = g,
                          options: Js.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      e("div", null, [
                        e("label", Fh, n(a(t)("admin.settings.openaiFastPolicy.scope")), 1),
                        v(Ke, {
                          modelValue: o.scope,
                          "onUpdate:modelValue": (g) => o.scope = g,
                          options: rl.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ])
                    ]),
                    e("div", Hh, [
                      e("label", Bh, n(a(t)("admin.settings.openaiFastPolicy.userIds")), 1),
                      e("p", jh, n(a(t)("admin.settings.openaiFastPolicy.userIdsHint")), 1),
                      v(Wp, {
                        "model-value": o.user_ids || [],
                        "onUpdate:modelValue": (g) => o.user_ids = g
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    o.action === "block" ? (r(), d("div", qh, [
                      e("label", Kh, n(a(t)("admin.settings.openaiFastPolicy.errorMessage")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.error_message = g,
                        type: "text",
                        class: "input",
                        placeholder: a(t)(
                          "admin.settings.openaiFastPolicy.errorMessagePlaceholder"
                        )
                      }, null, 8, Wh), [
                        [k, o.error_message]
                      ]),
                      e("p", Gh, n(a(t)("admin.settings.openaiFastPolicy.errorMessageHint")), 1)
                    ])) : T("", !0),
                    e("div", {
                      class: "mt-3",
                      role: "group",
                      "aria-labelledby": `openai-fast-policy-models-label-${b}`,
                      "aria-describedby": `openai-fast-policy-models-hint-${b}`
                    }, [
                      e("label", {
                        id: `openai-fast-policy-models-label-${b}`,
                        class: "mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400"
                      }, n(a(t)("admin.settings.openaiFastPolicy.modelWhitelist")), 9, Qh),
                      e("p", {
                        id: `openai-fast-policy-models-hint-${b}`,
                        class: "mb-2 text-xs text-gray-400 dark:text-gray-500"
                      }, n(a(t)("admin.settings.openaiFastPolicy.modelWhitelistHint")), 9, Xh),
                      (r(!0), d(K, null, ee(o.model_whitelist || [], (g, N) => (r(), d("div", {
                        key: N,
                        class: "mb-1.5 flex items-center gap-2"
                      }, [
                        p(e("input", {
                          "onUpdate:modelValue": (Le) => o.model_whitelist[N] = Le,
                          type: "text",
                          class: "input input-sm flex-1",
                          placeholder: a(t)(
                            "admin.settings.openaiFastPolicy.modelPatternPlaceholder"
                          )
                        }, null, 8, Jh), [
                          [k, o.model_whitelist[N]]
                        ]),
                        e("button", {
                          type: "button",
                          onClick: (Le) => ml(o, N),
                          class: "shrink-0 rounded p-1 text-red-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                        }, [...i[251] || (i[251] = [
                          e("svg", {
                            class: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          ], -1)
                        ])], 8, Zh)
                      ]))), 128)),
                      e("button", {
                        type: "button",
                        onClick: (g) => ul(o),
                        class: "mb-2 inline-flex items-center gap-1 text-xs text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, [
                        i[252] || (i[252] = e("svg", {
                          class: "h-3.5 w-3.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 4v16m8-8H4"
                          })
                        ], -1)),
                        q(" " + n(a(t)("admin.settings.openaiFastPolicy.addModelPattern")), 1)
                      ], 8, ex)
                    ], 8, Yh),
                    Yn(o) ? (r(), d("div", tx, [
                      e("label", ax, n(a(t)("admin.settings.openaiFastPolicy.fallbackAction")), 1),
                      v(Ke, {
                        modelValue: o.fallback_action || "pass",
                        "onUpdate:modelValue": (g) => o.fallback_action = g,
                        options: Js.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                      e("p", nx, n(a(t)("admin.settings.openaiFastPolicy.fallbackActionHint")), 1),
                      o.fallback_action === "block" ? (r(), d("div", sx, [
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.fallback_error_message = g,
                          type: "text",
                          class: "input",
                          placeholder: a(t)(
                            "admin.settings.openaiFastPolicy.fallbackErrorMessagePlaceholder"
                          )
                        }, null, 8, ix), [
                          [k, o.fallback_error_message]
                        ])
                      ])) : T("", !0)
                    ])) : T("", !0)
                  ]))), 128)),
                  e("div", null, [
                    e("button", {
                      type: "button",
                      onClick: dl,
                      class: "btn btn-secondary btn-sm inline-flex items-center gap-1"
                    }, [
                      i[253] || (i[253] = e("svg", {
                        class: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 4v16m8-8H4"
                        })
                      ], -1)),
                      q(" " + n(a(t)("admin.settings.openaiFastPolicy.addRule")), 1)
                    ]),
                    e("p", ox, n(a(t)("admin.settings.openaiFastPolicy.saveHint")), 1)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "gateway"]
          ]),
          p(v(Mi, null, {
            default: Re(() => [
              e("div", lx, [
                e("div", rx, [
                  e("h2", dx, n(a(t)("admin.settings.registration.title")), 1),
                  e("p", cx, n(a(t)("admin.settings.registration.description")), 1)
                ]),
                e("div", ux, [
                  e("div", mx, [
                    e("div", null, [
                      e("label", _x, n(a(t)("admin.settings.registration.enableRegistration")), 1),
                      e("p", px, n(a(t)("admin.settings.registration.enableRegistrationHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.registration_enabled,
                      "onUpdate:modelValue": i[14] || (i[14] = (o) => s.registration_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", gx, [
                    e("div", null, [
                      e("label", yx, n(a(t)("admin.settings.registration.emailVerification")), 1),
                      e("p", bx, n(a(t)("admin.settings.registration.emailVerificationHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.email_verify_enabled,
                      "onUpdate:modelValue": i[15] || (i[15] = (o) => s.email_verify_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", hx, [
                    e("label", xx, n(a(t)("admin.settings.registration.emailSuffixWhitelist")), 1),
                    e("p", fx, n(a(t)("admin.settings.registration.emailSuffixWhitelistHint")), 1),
                    e("div", kx, [
                      e("div", vx, [
                        (r(!0), d(K, null, ee(Ce.value, (o) => (r(), d("span", {
                          key: o,
                          class: "inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-mono text-gray-700 dark:bg-dark-600 dark:text-gray-200"
                        }, [
                          e("span", null, n(o), 1),
                          e("button", {
                            type: "button",
                            class: "rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-dark-500 dark:hover:text-white",
                            onClick: (b) => xa(o)
                          }, [
                            v(Ae, {
                              name: "x",
                              size: "xs",
                              class: "h-3.5 w-3.5",
                              "stroke-width": 2
                            })
                          ], 8, wx)
                        ]))), 128)),
                        e("div", Cx, [
                          p(e("input", {
                            "onUpdate:modelValue": i[16] || (i[16] = (o) => ge.value = o),
                            type: "text",
                            class: "w-full bg-transparent text-sm font-mono text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500",
                            placeholder: a(t)(
                              "admin.settings.registration.emailSuffixWhitelistPlaceholder"
                            ),
                            onInput: i[17] || (i[17] = //@ts-ignore
                            (...o) => lt && lt(...o)),
                            onKeydown: i[18] || (i[18] = //@ts-ignore
                            (...o) => xn && xn(...o)),
                            onBlur: Kt,
                            onPaste: fa
                          }, null, 40, Sx), [
                            [k, ge.value]
                          ])
                        ])
                      ])
                    ]),
                    e("p", Ax, n(a(t)(
                      "admin.settings.registration.emailSuffixWhitelistInputHint"
                    )), 1)
                  ]),
                  e("div", Tx, [
                    e("div", null, [
                      e("label", Ux, n(a(t)("admin.settings.registration.emailDomainQuota")), 1),
                      e("p", Ex, n(a(t)("admin.settings.registration.emailDomainQuotaHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.registration_email_domain_quota_enabled,
                      "onUpdate:modelValue": i[19] || (i[19] = (o) => s.registration_email_domain_quota_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", Vx, [
                    e("div", null, [
                      e("label", Px, n(a(t)("admin.settings.registration.promoCode")), 1),
                      e("p", $x, n(a(t)("admin.settings.registration.promoCodeHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.promo_code_enabled,
                      "onUpdate:modelValue": i[20] || (i[20] = (o) => s.promo_code_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", Rx, [
                    e("div", null, [
                      e("label", Lx, n(a(t)("admin.settings.registration.invitationCode")), 1),
                      e("p", Mx, n(a(t)("admin.settings.registration.invitationCodeHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.invitation_code_enabled,
                      "onUpdate:modelValue": i[21] || (i[21] = (o) => s.invitation_code_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.email_verify_enabled ? (r(), d("div", Dx, [
                    e("div", null, [
                      e("label", Ox, n(a(t)("admin.settings.registration.passwordReset")), 1),
                      e("p", Ix, n(a(t)("admin.settings.registration.passwordResetHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.password_reset_enabled,
                      "onUpdate:modelValue": i[22] || (i[22] = (o) => s.password_reset_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])) : T("", !0),
                  s.email_verify_enabled && s.password_reset_enabled ? (r(), d("div", zx, [
                    e("label", Nx, n(a(t)("admin.settings.registration.frontendUrl")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[23] || (i[23] = (o) => s.frontend_url = o),
                      type: "url",
                      class: "input",
                      placeholder: a(t)("admin.settings.registration.frontendUrlPlaceholder")
                    }, null, 8, Fx), [
                      [k, s.frontend_url]
                    ]),
                    e("p", Hx, n(a(t)("admin.settings.registration.frontendUrlHint")), 1)
                  ])) : T("", !0),
                  e("div", Bx, [
                    e("div", null, [
                      e("label", jx, n(a(t)("admin.settings.registration.totp")), 1),
                      e("p", qx, n(a(t)("admin.settings.registration.totpHint")), 1),
                      s.totp_encryption_key_configured ? T("", !0) : (r(), d("p", Kx, n(a(t)("admin.settings.registration.totpKeyNotConfigured")), 1))
                    ]),
                    v(B, {
                      modelValue: s.totp_enabled,
                      "onUpdate:modelValue": i[24] || (i[24] = (o) => s.totp_enabled = o),
                      disabled: !s.totp_encryption_key_configured
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  e("div", Wx, [
                    e("div", Gx, [
                      e("div", null, [
                        e("label", Yx, n(a(t)("admin.settings.security.passkey")), 1),
                        e("p", Qx, n(a(t)("admin.settings.security.passkeyHint")), 1)
                      ]),
                      v(B, {
                        modelValue: s.passkey_enabled,
                        "onUpdate:modelValue": i[25] || (i[25] = (o) => s.passkey_enabled = o),
                        "data-testid": "passkey-toggle",
                        disabled: !s.passkey_configured
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    e("div", {
                      class: ce([
                        "mt-3 rounded-lg border px-3 py-2 text-sm",
                        s.passkey_configured ? "border-zo-signal-200 bg-zo-signal-50 text-zo-signal-800 dark:border-zo-signal-900 dark:bg-zo-signal-950/40 dark:text-zo-signal-300" : "border-zo-alert-200 bg-zo-alert-50 text-zo-alert-800 dark:border-zo-alert-900 dark:bg-zo-alert-950/40 dark:text-zo-alert-300"
                      ]),
                      "data-testid": "passkey-config-status"
                    }, [
                      e("p", Xx, n(s.passkey_configured ? a(t)("admin.settings.security.passkeyConfigured") : a(t)("admin.settings.security.passkeyNotConfigured")), 1),
                      e("p", Jx, n(a(t)("admin.settings.security.passkeyRPID")) + ": " + n(s.passkey_rp_id || a(t)("admin.settings.security.passkeyValueNotConfigured")), 1),
                      e("p", Zx, n(a(t)("admin.settings.security.passkeyOrigins")) + ": " + n(s.passkey_rp_origins.length > 0 ? s.passkey_rp_origins.join(", ") : a(t)(
                        "admin.settings.security.passkeyValueNotConfigured"
                      )), 1),
                      s.passkey_configured ? T("", !0) : (r(), d("p", ef, n(a(t)("admin.settings.security.passkeyDeploymentHint")), 1))
                    ], 2)
                  ]),
                  e("div", tf, [
                    e("div", null, [
                      e("label", af, n(a(t)("admin.settings.security.stepUp")), 1),
                      e("p", nf, n(a(t)("admin.settings.security.stepUpHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.step_up_enabled,
                      "onUpdate:modelValue": i[26] || (i[26] = (o) => s.step_up_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", sf, [
                    e("div", null, [
                      e("label", of, n(a(t)("admin.settings.security.sessionBinding")), 1),
                      e("p", lf, n(a(t)("admin.settings.security.sessionBindingHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.session_binding_enabled,
                      "onUpdate:modelValue": i[27] || (i[27] = (o) => s.session_binding_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", rf, [
                    e("div", null, [
                      e("label", df, n(a(t)("admin.settings.security.auditRetention")), 1),
                      e("p", cf, n(a(t)("admin.settings.security.auditRetentionHint")), 1)
                    ]),
                    p(e("input", {
                      "onUpdate:modelValue": i[28] || (i[28] = (o) => s.audit_log_retention_days = o),
                      type: "number",
                      min: "0",
                      class: "input w-28 text-right"
                    }, null, 512), [
                      [
                        k,
                        s.audit_log_retention_days,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])
              ]),
              e("div", uf, [
                e("div", mf, [
                  e("h2", _f, n(a(t)("admin.settings.apiKeyAcl.title")), 1),
                  e("p", pf, n(a(t)("admin.settings.apiKeyAcl.description")), 1)
                ]),
                e("div", gf, [
                  e("div", yf, [
                    e("div", null, [
                      e("label", bf, n(a(t)("admin.settings.apiKeyAcl.trustForwardedIp")), 1),
                      e("p", hf, n(a(t)("admin.settings.apiKeyAcl.trustForwardedIpHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.api_key_acl_trust_forwarded_ip,
                      "onUpdate:modelValue": i[29] || (i[29] = (o) => s.api_key_acl_trust_forwarded_ip = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.api_key_acl_trust_forwarded_ip ? (r(), d("div", xf, [
                    e("label", ff, n(a(t)("admin.settings.apiKeyAcl.forwardedClientIpHeaders")), 1),
                    e("p", kf, n(a(t)("admin.settings.apiKeyAcl.forwardedClientIpHeadersHint")), 1),
                    e("div", vf, [
                      e("div", wf, [
                        (r(!0), d(K, null, ee(s.forwarded_client_ip_headers, (o) => (r(), d("span", {
                          key: o,
                          "data-testid": "forwarded-client-ip-header-tag",
                          class: "inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-mono text-gray-700 dark:bg-dark-600 dark:text-gray-200"
                        }, [
                          e("span", null, n(o), 1),
                          e("button", {
                            type: "button",
                            class: "rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-dark-500 dark:hover:text-white",
                            "aria-label": a(t)("admin.settings.apiKeyAcl.removeForwardedClientIpHeader", { header: o }),
                            onClick: (b) => kn(o)
                          }, [
                            v(Ae, {
                              name: "x",
                              size: "xs",
                              class: "h-3.5 w-3.5",
                              "stroke-width": 2
                            })
                          ], 8, Cf)
                        ]))), 128)),
                        e("div", Sf, [
                          p(e("input", {
                            id: "forwarded-client-ip-headers",
                            "onUpdate:modelValue": i[30] || (i[30] = (o) => pe.value = o),
                            "data-testid": "forwarded-client-ip-headers-input",
                            type: "text",
                            class: "w-full bg-transparent text-sm font-mono text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500",
                            placeholder: a(t)("admin.settings.apiKeyAcl.forwardedClientIpHeadersPlaceholder"),
                            onKeydown: Gn,
                            onBlur: wn,
                            onPaste: Cn
                          }, null, 40, Af), [
                            [k, pe.value]
                          ])
                        ])
                      ])
                    ]),
                    e("p", Tf, n(a(t)("admin.settings.apiKeyAcl.forwardedClientIpHeadersRiskHint")), 1)
                  ])) : T("", !0)
                ])
              ]),
              e("div", Uf, [
                e("div", Ef, [
                  e("div", Vf, [
                    v(Ae, {
                      name: "shield",
                      size: "md",
                      class: "text-primary-500"
                    }),
                    e("h2", Pf, n(a(t)("admin.settings.panelRateLimit.title")), 1)
                  ]),
                  e("p", $f, n(a(t)("admin.settings.panelRateLimit.description")), 1)
                ]),
                e("div", Rf, [
                  fe.value ? (r(), d("div", Lf, [
                    i[254] || (i[254] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", Mf, [
                      e("div", Df, [
                        v(Ae, {
                          name: "infoCircle",
                          size: "md",
                          class: "mt-0.5 flex-shrink-0 text-sky-500"
                        }),
                        e("p", Of, n(a(t)("admin.settings.panelRateLimit.proxySafeNote")), 1)
                      ])
                    ]),
                    e("div", If, [
                      e("div", null, [
                        e("label", zf, n(a(t)("admin.settings.panelRateLimit.enabled")), 1),
                        e("p", Nf, n(a(t)("admin.settings.panelRateLimit.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: xe.enabled,
                        "onUpdate:modelValue": i[31] || (i[31] = (o) => xe.enabled = o)
                      }, null, 8, ["modelValue"])
                    ]),
                    xe.enabled ? (r(), d("div", Ff, [
                      e("div", Hf, [
                        e("div", null, [
                          e("label", Bf, n(a(t)("admin.settings.panelRateLimit.userRpm")), 1),
                          e("div", jf, [
                            p(e("input", {
                              "onUpdate:modelValue": i[32] || (i[32] = (o) => xe.user_rpm = o),
                              "data-testid": "panel-rate-limit-user-rpm",
                              type: "number",
                              min: "0",
                              max: "100000",
                              class: "input w-32"
                            }, null, 512), [
                              [
                                k,
                                xe.user_rpm,
                                void 0,
                                { number: !0 }
                              ]
                            ]),
                            e("span", qf, n(a(t)("admin.settings.panelRateLimit.perMinute")), 1)
                          ]),
                          e("p", Kf, n(a(t)("admin.settings.panelRateLimit.userRpmHint")), 1)
                        ]),
                        e("div", null, [
                          e("label", Wf, n(a(t)("admin.settings.panelRateLimit.heavyRpm")), 1),
                          e("div", Gf, [
                            p(e("input", {
                              "onUpdate:modelValue": i[33] || (i[33] = (o) => xe.heavy_rpm = o),
                              type: "number",
                              min: "0",
                              max: "100000",
                              class: "input w-32"
                            }, null, 512), [
                              [
                                k,
                                xe.heavy_rpm,
                                void 0,
                                { number: !0 }
                              ]
                            ]),
                            e("span", Yf, n(a(t)("admin.settings.panelRateLimit.perMinute")), 1)
                          ]),
                          e("p", Qf, n(a(t)("admin.settings.panelRateLimit.heavyRpmHint")), 1)
                        ]),
                        e("div", null, [
                          e("label", Xf, n(a(t)("admin.settings.panelRateLimit.publicIpRpm")), 1),
                          e("div", Jf, [
                            p(e("input", {
                              "onUpdate:modelValue": i[34] || (i[34] = (o) => xe.public_ip_rpm = o),
                              type: "number",
                              min: "0",
                              max: "100000",
                              class: "input w-32"
                            }, null, 512), [
                              [
                                k,
                                xe.public_ip_rpm,
                                void 0,
                                { number: !0 }
                              ]
                            ]),
                            e("span", Zf, n(a(t)("admin.settings.panelRateLimit.perMinute")), 1)
                          ]),
                          e("p", e1, n(a(t)("admin.settings.panelRateLimit.publicIpRpmHint")), 1)
                        ])
                      ]),
                      e("div", t1, [
                        e("div", null, [
                          e("label", a1, n(a(t)("admin.settings.panelRateLimit.exemptAdmin")), 1),
                          e("p", n1, n(a(t)("admin.settings.panelRateLimit.exemptAdminHint")), 1)
                        ]),
                        v(B, {
                          modelValue: xe.exempt_admin,
                          "onUpdate:modelValue": i[35] || (i[35] = (o) => xe.exempt_admin = o)
                        }, null, 8, ["modelValue"])
                      ])
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", s1, [
                e("div", i1, [
                  e("h2", o1, n(a(t)("admin.settings.captcha.title")), 1),
                  e("p", l1, n(a(t)("admin.settings.captcha.description")), 1)
                ]),
                e("div", r1, [
                  e("div", d1, [
                    e("div", null, [
                      e("label", c1, n(a(t)("admin.settings.captcha.enable")), 1),
                      e("p", u1, n(a(t)("admin.settings.captcha.enableHint")), 1)
                    ]),
                    v(B, {
                      modelValue: Ma.value,
                      "onUpdate:modelValue": i[36] || (i[36] = (o) => Ma.value = o),
                      "data-testid": "captcha-enabled-toggle"
                    }, null, 8, ["modelValue"])
                  ]),
                  Ma.value ? (r(), d("div", m1, [
                    e("div", _1, [
                      e("label", p1, n(a(t)("admin.settings.captcha.provider")), 1),
                      e("div", g1, [
                        e("button", {
                          type: "button",
                          "data-testid": "captcha-provider-turnstile",
                          class: ce([
                            "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                            Te.value === "turnstile" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                          ]),
                          onClick: i[37] || (i[37] = (o) => ya("turnstile"))
                        }, n(a(t)("admin.settings.captcha.providerTurnstile")), 3),
                        e("button", {
                          type: "button",
                          "data-testid": "captcha-provider-tencent",
                          class: ce([
                            "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                            Te.value === "tencent" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                          ]),
                          onClick: i[38] || (i[38] = (o) => ya("tencent"))
                        }, n(a(t)("admin.settings.captcha.providerTencent")), 3),
                        e("button", {
                          type: "button",
                          "data-testid": "captcha-provider-aliyun",
                          class: ce([
                            "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                            Te.value === "aliyun" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                          ]),
                          onClick: i[39] || (i[39] = (o) => ya("aliyun"))
                        }, n(a(t)("admin.settings.captcha.providerAliyun")), 3)
                      ])
                    ]),
                    Te.value === "turnstile" ? (r(), d("div", y1, [
                      e("div", null, [
                        e("label", b1, n(a(t)("admin.settings.turnstile.siteKey")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[40] || (i[40] = (o) => s.turnstile_site_key = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: "0x4AAAAAAA..."
                        }, null, 512), [
                          [k, s.turnstile_site_key]
                        ]),
                        e("p", h1, [
                          q(n(a(t)("admin.settings.turnstile.siteKeyHint")) + " ", 1),
                          e("a", x1, n(a(t)("admin.settings.turnstile.cloudflareDashboard")), 1)
                        ])
                      ]),
                      e("div", null, [
                        e("label", f1, n(a(t)("admin.settings.turnstile.secretKey")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[41] || (i[41] = (o) => s.turnstile_secret_key = o),
                          type: "password",
                          class: "input font-mono text-sm",
                          placeholder: "0x4AAAAAAA..."
                        }, null, 512), [
                          [k, s.turnstile_secret_key]
                        ]),
                        e("p", k1, n(s.turnstile_secret_key_configured ? a(t)(
                          "admin.settings.turnstile.secretKeyConfiguredHint"
                        ) : a(t)("admin.settings.turnstile.secretKeyHint")), 1)
                      ])
                    ])) : Te.value === "tencent" ? (r(), d("div", v1, [
                      e("div", w1, [
                        e("label", C1, n(a(t)("admin.settings.tencentCaptcha.region")), 1),
                        e("div", S1, [
                          e("button", {
                            type: "button",
                            "data-testid": "tencent-captcha-region-cn",
                            class: ce([
                              "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition",
                              s.tencent_captcha_region !== "intl" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                            ]),
                            onClick: i[42] || (i[42] = (o) => s.tencent_captcha_region = "cn")
                          }, n(a(t)("admin.settings.tencentCaptcha.regionCn")), 3),
                          e("button", {
                            type: "button",
                            "data-testid": "tencent-captcha-region-intl",
                            class: ce([
                              "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition",
                              s.tencent_captcha_region === "intl" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                            ]),
                            onClick: i[43] || (i[43] = (o) => s.tencent_captcha_region = "intl")
                          }, n(a(t)("admin.settings.tencentCaptcha.regionIntl")), 3)
                        ]),
                        e("p", A1, n(a(t)("admin.settings.tencentCaptcha.regionHint")), 1)
                      ]),
                      e("div", T1, [
                        e("div", U1, [
                          e("h3", E1, n(a(t)("admin.settings.tencentCaptcha.appCredentialsTitle")), 1),
                          e("p", V1, n(a(t)("admin.settings.tencentCaptcha.appCredentialsHint")), 1)
                        ]),
                        e("div", null, [
                          e("label", P1, n(a(t)("admin.settings.tencentCaptcha.appId")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[44] || (i[44] = (o) => s.tencent_captcha_app_id = o),
                            type: "text",
                            inputmode: "numeric",
                            class: "input font-mono text-sm",
                            placeholder: "123456789"
                          }, null, 512), [
                            [k, s.tencent_captcha_app_id]
                          ])
                        ]),
                        e("div", null, [
                          e("label", $1, n(a(t)("admin.settings.tencentCaptcha.appSecretKey")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[45] || (i[45] = (o) => s.tencent_captcha_app_secret_key = o),
                            type: "password",
                            autocomplete: "new-password",
                            class: "input font-mono text-sm",
                            placeholder: a(t)("admin.settings.tencentCaptcha.keepExisting")
                          }, null, 8, R1), [
                            [k, s.tencent_captcha_app_secret_key]
                          ]),
                          e("p", L1, n(s.tencent_captcha_app_secret_key_configured ? a(t)("admin.settings.tencentCaptcha.configured") : a(t)("admin.settings.tencentCaptcha.required")), 1)
                        ]),
                        e("div", M1, [
                          e("h3", D1, n(a(t)("admin.settings.tencentCaptcha.cloudCredentialsTitle")), 1),
                          e("p", O1, n(a(t)("admin.settings.tencentCaptcha.cloudCredentialsHint")), 1)
                        ]),
                        e("div", null, [
                          e("label", I1, n(a(t)("admin.settings.tencentCaptcha.cloudSecretId")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[46] || (i[46] = (o) => s.tencent_captcha_cloud_secret_id = o),
                            type: "password",
                            autocomplete: "new-password",
                            class: "input font-mono text-sm",
                            placeholder: a(t)("admin.settings.tencentCaptcha.keepExisting")
                          }, null, 8, z1), [
                            [k, s.tencent_captcha_cloud_secret_id]
                          ]),
                          e("p", N1, n(s.tencent_captcha_cloud_secret_id_configured ? a(t)("admin.settings.tencentCaptcha.configured") : a(t)("admin.settings.tencentCaptcha.required")), 1)
                        ]),
                        e("div", null, [
                          e("label", F1, n(a(t)("admin.settings.tencentCaptcha.cloudSecretKey")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[47] || (i[47] = (o) => s.tencent_captcha_cloud_secret_key = o),
                            type: "password",
                            autocomplete: "new-password",
                            class: "input font-mono text-sm",
                            placeholder: a(t)("admin.settings.tencentCaptcha.keepExisting")
                          }, null, 8, H1), [
                            [k, s.tencent_captcha_cloud_secret_key]
                          ]),
                          e("p", B1, n(s.tencent_captcha_cloud_secret_key_configured ? a(t)("admin.settings.tencentCaptcha.configured") : a(t)("admin.settings.tencentCaptcha.required")), 1)
                        ])
                      ]),
                      e("p", j1, n(a(t)("admin.settings.tencentCaptcha.camPermissionHint")), 1),
                      e("p", q1, n(a(t)("admin.settings.tencentCaptcha.aidEncryptedHint")), 1),
                      e("div", K1, [
                        e("a", {
                          href: ea.value.console,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "text-primary-600 hover:text-primary-500"
                        }, n(a(t)("admin.settings.tencentCaptcha.openCaptchaConsole")), 9, W1),
                        e("a", {
                          href: ea.value.cloudKeys,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "text-primary-600 hover:text-primary-500"
                        }, n(a(t)("admin.settings.tencentCaptcha.createCloudKeys")), 9, G1),
                        e("a", {
                          href: ea.value.webDocs,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "text-primary-600 hover:text-primary-500"
                        }, n(a(t)("admin.settings.tencentCaptcha.openWebDocs")), 9, Y1)
                      ])
                    ])) : (r(), d("div", Q1, [
                      e("div", X1, [
                        e("div", null, [
                          e("label", J1, n(a(t)("admin.settings.aliyunCaptcha.region")), 1),
                          e("div", Z1, [
                            e("button", {
                              type: "button",
                              class: ce([
                                "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition",
                                s.aliyun_captcha_region !== "sgp" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                              ]),
                              onClick: i[48] || (i[48] = (o) => s.aliyun_captcha_region = "cn")
                            }, n(a(t)("admin.settings.aliyunCaptcha.regionCn")), 3),
                            e("button", {
                              type: "button",
                              class: ce([
                                "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition",
                                s.aliyun_captcha_region === "sgp" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                              ]),
                              onClick: i[49] || (i[49] = (o) => s.aliyun_captcha_region = "sgp")
                            }, n(a(t)("admin.settings.aliyunCaptcha.regionSgp")), 3)
                          ]),
                          e("p", ek, n(a(t)("admin.settings.aliyunCaptcha.regionHint")), 1)
                        ]),
                        e("div", null, [
                          e("label", tk, n(a(t)("admin.settings.aliyunCaptcha.prefix")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[50] || (i[50] = (o) => s.aliyun_captcha_prefix = o),
                            type: "text",
                            class: "input font-mono text-sm",
                            placeholder: "14xxxxx"
                          }, null, 512), [
                            [k, s.aliyun_captcha_prefix]
                          ]),
                          e("p", ak, n(a(t)("admin.settings.aliyunCaptcha.prefixHint")), 1)
                        ])
                      ]),
                      e("div", null, [
                        e("label", nk, n(a(t)("admin.settings.aliyunCaptcha.sceneId")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[51] || (i[51] = (o) => s.aliyun_captcha_scene_id = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: "1cxxxxxx"
                        }, null, 512), [
                          [k, s.aliyun_captcha_scene_id]
                        ]),
                        e("p", sk, n(a(t)("admin.settings.aliyunCaptcha.sceneIdHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", ik, n(a(t)("admin.settings.aliyunCaptcha.accessKeyId")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[52] || (i[52] = (o) => s.aliyun_captcha_access_key_id = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: "LTAI..."
                        }, null, 512), [
                          [k, s.aliyun_captcha_access_key_id]
                        ]),
                        e("p", ok, n(a(t)("admin.settings.aliyunCaptcha.accessKeyIdHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", lk, n(a(t)("admin.settings.aliyunCaptcha.accessKeySecret")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[53] || (i[53] = (o) => s.aliyun_captcha_access_key_secret = o),
                          type: "password",
                          autocomplete: "new-password",
                          class: "input font-mono text-sm",
                          placeholder: "••••••••"
                        }, null, 512), [
                          [k, s.aliyun_captcha_access_key_secret]
                        ]),
                        e("p", rk, n(s.aliyun_captcha_access_key_secret_configured ? a(t)(
                          "admin.settings.aliyunCaptcha.accessKeySecretConfiguredHint"
                        ) : a(t)("admin.settings.aliyunCaptcha.accessKeySecretHint")), 1)
                      ])
                    ]))
                  ])) : T("", !0)
                ])
              ]),
              e("div", dk, [
                e("div", ck, [
                  e("h2", uk, n(a(t)("admin.settings.linuxdo.title")), 1),
                  e("p", mk, n(a(t)("admin.settings.linuxdo.description")), 1)
                ]),
                e("div", _k, [
                  e("div", pk, [
                    e("div", null, [
                      e("label", gk, n(a(t)("admin.settings.linuxdo.enable")), 1),
                      e("p", yk, n(a(t)("admin.settings.linuxdo.enableHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.linuxdo_connect_enabled,
                      "onUpdate:modelValue": i[54] || (i[54] = (o) => s.linuxdo_connect_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.linuxdo_connect_enabled ? (r(), d("div", bk, [
                    e("div", hk, [
                      e("div", null, [
                        e("label", xk, n(a(t)("admin.settings.linuxdo.clientId")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[55] || (i[55] = (o) => s.linuxdo_connect_client_id = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.linuxdo.clientIdPlaceholder")
                        }, null, 8, fk), [
                          [k, s.linuxdo_connect_client_id]
                        ]),
                        e("p", kk, n(a(t)("admin.settings.linuxdo.clientIdHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", vk, n(a(t)("admin.settings.linuxdo.clientSecret")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[56] || (i[56] = (o) => s.linuxdo_connect_client_secret = o),
                          type: "password",
                          class: "input font-mono text-sm",
                          placeholder: s.linuxdo_connect_client_secret_configured ? a(t)(
                            "admin.settings.linuxdo.clientSecretConfiguredPlaceholder"
                          ) : a(t)("admin.settings.linuxdo.clientSecretPlaceholder")
                        }, null, 8, wk), [
                          [k, s.linuxdo_connect_client_secret]
                        ]),
                        e("p", Ck, n(s.linuxdo_connect_client_secret_configured ? a(t)(
                          "admin.settings.linuxdo.clientSecretConfiguredHint"
                        ) : a(t)("admin.settings.linuxdo.clientSecretHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", Sk, n(a(t)("admin.settings.linuxdo.redirectUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[57] || (i[57] = (o) => s.linuxdo_connect_redirect_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.linuxdo.redirectUrlPlaceholder")
                        }, null, 8, Ak), [
                          [k, s.linuxdo_connect_redirect_url]
                        ]),
                        e("div", Tk, [
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary btn-sm w-fit",
                            onClick: c
                          }, n(a(t)("admin.settings.linuxdo.quickSetCopy")), 1),
                          D.value ? (r(), d("code", Uk, n(D.value), 1)) : T("", !0)
                        ]),
                        e("p", Ek, n(a(t)("admin.settings.linuxdo.redirectUrlHint")), 1)
                      ])
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", Vk, [
                e("div", Pk, [
                  e("h2", $k, n(E("邮箱快捷登录", "Email OAuth Sign-in")), 1),
                  e("p", Rk, n(E(
                    "开启 GitHub 或 Google 邮箱授权登录后，系统会读取已验证邮箱，存在则直接登录，不存在则自动注册。",
                    "After GitHub or Google email OAuth is enabled, the system reads a verified email, signs in matching users, and auto-registers missing users."
                  )), 1)
                ]),
                e("div", Lk, [
                  e("div", Mk, [
                    e("div", Dk, [
                      e("div", Ok, [
                        e("div", null, [
                          i[255] || (i[255] = e("h3", { class: "font-medium text-gray-900 dark:text-white" }, " GitHub ", -1)),
                          e("p", Ik, n(E(
                            "GitHub OAuth App 需要 read:user user:email 权限，回调地址填写下方后端地址。",
                            "GitHub OAuth App needs read:user user:email scopes. Use the backend callback URL below."
                          )), 1)
                        ]),
                        v(B, {
                          modelValue: s.github_oauth_enabled,
                          "onUpdate:modelValue": i[58] || (i[58] = (o) => s.github_oauth_enabled = o)
                        }, null, 8, ["modelValue"])
                      ]),
                      s.github_oauth_enabled ? (r(), d("div", zk, [
                        e("div", Nk, [
                          z.value ? (r(), d(K, { key: 0 }, [
                            i[256] || (i[256] = q(" 开通引导：GitHub Settings → Developer settings → ", -1)),
                            i[257] || (i[257] = e("a", {
                              "data-testid": "github-oauth-apps-guide-link",
                              href: "https://github.com/settings/developers",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "font-medium text-primary-600 hover:underline dark:text-primary-400"
                            }, "OAuth Apps", -1)),
                            i[258] || (i[258] = q(" → New OAuth App；Homepage URL 填站点域名，Authorization callback URL 填下面的后端回调地址。 ", -1))
                          ], 64)) : (r(), d(K, { key: 1 }, [
                            i[259] || (i[259] = q(" Setup guide: GitHub Settings → Developer settings → ", -1)),
                            i[260] || (i[260] = e("a", {
                              "data-testid": "github-oauth-apps-guide-link",
                              href: "https://github.com/settings/developers",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "font-medium text-primary-600 hover:underline dark:text-primary-400"
                            }, "OAuth Apps", -1)),
                            i[261] || (i[261] = q(" → New OAuth App. Use your site origin as Homepage URL and the backend callback URL below as Authorization callback URL. ", -1))
                          ], 64))
                        ]),
                        e("div", Fk, [
                          e("div", null, [
                            i[262] || (i[262] = e("label", { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Client ID", -1)),
                            p(e("input", {
                              "onUpdate:modelValue": i[59] || (i[59] = (o) => s.github_oauth_client_id = o),
                              type: "text",
                              class: "input font-mono text-sm",
                              placeholder: "GitHub OAuth Client ID"
                            }, null, 512), [
                              [k, s.github_oauth_client_id]
                            ])
                          ]),
                          e("div", null, [
                            i[263] || (i[263] = e("label", { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Client Secret", -1)),
                            p(e("input", {
                              "onUpdate:modelValue": i[60] || (i[60] = (o) => s.github_oauth_client_secret = o),
                              type: "password",
                              class: "input font-mono text-sm",
                              placeholder: s.github_oauth_client_secret_configured ? E("密钥已配置，留空以保留当前值。", "Secret configured. Leave empty to keep the current value.") : "GitHub OAuth Client Secret"
                            }, null, 8, Hk), [
                              [k, s.github_oauth_client_secret]
                            ])
                          ])
                        ]),
                        e("div", null, [
                          e("label", Bk, n(E("后端回调地址", "Backend Callback URL")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[61] || (i[61] = (o) => s.github_oauth_redirect_url = o),
                            type: "url",
                            class: "input font-mono text-sm",
                            placeholder: "https://your-domain.com/api/v1/auth/oauth/github/callback"
                          }, null, 512), [
                            [k, s.github_oauth_redirect_url]
                          ]),
                          e("div", jk, [
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm w-fit",
                              onClick: i[62] || (i[62] = (o) => P("github"))
                            }, n(E("生成并复制", "Generate and copy")), 1),
                            f.value ? (r(), d("code", qk, n(f.value), 1)) : T("", !0)
                          ])
                        ]),
                        e("div", null, [
                          e("label", Kk, n(E("前端回跳地址", "Frontend Callback URL")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[63] || (i[63] = (o) => s.github_oauth_frontend_redirect_url = o),
                            type: "text",
                            class: "input font-mono text-sm",
                            placeholder: "/auth/oauth/callback"
                          }, null, 512), [
                            [k, s.github_oauth_frontend_redirect_url]
                          ])
                        ])
                      ])) : T("", !0)
                    ]),
                    e("div", Wk, [
                      e("div", Gk, [
                        e("div", null, [
                          i[264] || (i[264] = e("h3", { class: "font-medium text-gray-900 dark:text-white" }, " Google ", -1)),
                          e("p", Yk, n(E(
                            "Google OAuth 客户端需要 openid email profile 范围，并在凭据里登记后端回调地址。",
                            "Google OAuth client needs openid email profile scopes and the backend callback URL registered in credentials."
                          )), 1)
                        ]),
                        v(B, {
                          modelValue: s.google_oauth_enabled,
                          "onUpdate:modelValue": i[64] || (i[64] = (o) => s.google_oauth_enabled = o)
                        }, null, 8, ["modelValue"])
                      ]),
                      s.google_oauth_enabled ? (r(), d("div", Qk, [
                        e("div", Xk, n(E(
                          "开通引导：Google Cloud Console → APIs & Services → OAuth consent screen 完成同意屏幕；Credentials → Create Credentials → OAuth client ID，类型选择 Web application，并把下面地址加入 Authorized redirect URIs。",
                          "Setup guide: Google Cloud Console → APIs & Services → OAuth consent screen, then Credentials → Create Credentials → OAuth client ID, choose Web application, and add the URL below to Authorized redirect URIs."
                        )), 1),
                        e("div", Jk, [
                          e("div", null, [
                            i[265] || (i[265] = e("label", { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Client ID", -1)),
                            p(e("input", {
                              "onUpdate:modelValue": i[65] || (i[65] = (o) => s.google_oauth_client_id = o),
                              type: "text",
                              class: "input font-mono text-sm",
                              placeholder: "Google OAuth Client ID"
                            }, null, 512), [
                              [k, s.google_oauth_client_id]
                            ])
                          ]),
                          e("div", null, [
                            i[266] || (i[266] = e("label", { class: "mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Client Secret", -1)),
                            p(e("input", {
                              "onUpdate:modelValue": i[66] || (i[66] = (o) => s.google_oauth_client_secret = o),
                              type: "password",
                              class: "input font-mono text-sm",
                              placeholder: s.google_oauth_client_secret_configured ? E("密钥已配置，留空以保留当前值。", "Secret configured. Leave empty to keep the current value.") : "Google OAuth Client Secret"
                            }, null, 8, Zk), [
                              [k, s.google_oauth_client_secret]
                            ])
                          ])
                        ]),
                        e("div", null, [
                          e("label", ev, n(E("后端回调地址", "Backend Callback URL")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[67] || (i[67] = (o) => s.google_oauth_redirect_url = o),
                            type: "url",
                            class: "input font-mono text-sm",
                            placeholder: "https://your-domain.com/api/v1/auth/oauth/google/callback"
                          }, null, 512), [
                            [k, s.google_oauth_redirect_url]
                          ]),
                          e("div", tv, [
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm w-fit",
                              onClick: i[68] || (i[68] = (o) => P("google"))
                            }, n(E("生成并复制", "Generate and copy")), 1),
                            V.value ? (r(), d("code", av, n(V.value), 1)) : T("", !0)
                          ])
                        ]),
                        e("div", null, [
                          e("label", nv, n(E("前端回跳地址", "Frontend Callback URL")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": i[69] || (i[69] = (o) => s.google_oauth_frontend_redirect_url = o),
                            type: "text",
                            class: "input font-mono text-sm",
                            placeholder: "/auth/oauth/callback"
                          }, null, 512), [
                            [k, s.google_oauth_frontend_redirect_url]
                          ])
                        ])
                      ])) : T("", !0)
                    ])
                  ])
                ])
              ]),
              e("div", sv, [
                e("div", iv, [
                  e("h2", ov, n(a(t)("admin.settings.wechatConnect.title")), 1),
                  e("p", lv, n(a(t)("admin.settings.wechatConnect.description")), 1)
                ]),
                e("div", rv, [
                  e("div", dv, [
                    e("div", null, [
                      e("label", cv, n(a(t)("admin.settings.wechatConnect.enabledLabel")), 1),
                      e("p", uv, n(a(t)("admin.settings.wechatConnect.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.wechat_connect_enabled,
                      "onUpdate:modelValue": i[70] || (i[70] = (o) => s.wechat_connect_enabled = o),
                      "data-testid": "wechat-connect-enabled"
                    }, null, 8, ["modelValue"])
                  ]),
                  s.wechat_connect_enabled ? (r(), d("div", mv, [
                    e("div", _v, [
                      e("div", pv, [
                        e("div", gv, [
                          e("div", null, [
                            e("h3", yv, n(E("PC 应用", "PC App")), 1),
                            e("p", bv, n(E(
                              "桌面浏览器通过微信开放平台扫码登录。可与公众号或移动应用同时存在。",
                              "Desktop browsers sign in through WeChat Open Platform QR login. This can coexist with Official Account or Mobile App."
                            )), 1)
                          ]),
                          v(B, {
                            "model-value": s.wechat_connect_open_enabled,
                            "data-testid": "wechat-connect-open-enabled",
                            "onUpdate:modelValue": be
                          }, null, 8, ["model-value"])
                        ]),
                        s.wechat_connect_open_enabled ? (r(), d("div", hv, [
                          e("div", null, [
                            e("label", xv, n(E("PC AppID", "PC App ID")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[71] || (i[71] = (o) => s.wechat_connect_open_app_id = o),
                              "data-testid": "wechat-connect-open-app-id",
                              type: "text",
                              class: "input font-mono text-sm",
                              placeholder: E(
                                "微信开放平台 PC 应用 AppID",
                                "WeChat Open Platform PC App ID"
                              )
                            }, null, 8, fv), [
                              [k, s.wechat_connect_open_app_id]
                            ])
                          ]),
                          e("div", null, [
                            e("label", kv, n(E("PC AppSecret", "PC App Secret")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[72] || (i[72] = (o) => s.wechat_connect_open_app_secret = o),
                              "data-testid": "wechat-connect-open-app-secret",
                              type: "password",
                              class: "input font-mono text-sm",
                              placeholder: s.wechat_connect_open_app_secret_configured ? E(
                                "密钥已配置，留空以保留当前值。",
                                "Secret configured. Leave empty to keep the current value."
                              ) : E(
                                "微信开放平台 PC 应用 AppSecret",
                                "WeChat Open Platform PC App Secret"
                              )
                            }, null, 8, vv), [
                              [k, s.wechat_connect_open_app_secret]
                            ])
                          ])
                        ])) : T("", !0)
                      ]),
                      e("div", wv, [
                        e("div", Cv, [
                          e("div", null, [
                            e("h3", Sv, n(E("公众号", "Official Account")), 1),
                            e("p", Av, n(E(
                              "仅在微信内浏览器可用；非微信环境下会显示不可用。",
                              "Only available inside the WeChat browser. It is shown as unavailable outside WeChat."
                            )), 1)
                          ]),
                          v(B, {
                            "model-value": s.wechat_connect_mp_enabled,
                            "data-testid": "wechat-connect-mp-enabled",
                            "onUpdate:modelValue": ze
                          }, null, 8, ["model-value"])
                        ]),
                        s.wechat_connect_mp_enabled ? (r(), d("div", Tv, [
                          e("div", null, [
                            e("label", Uv, n(E("公众号 AppID", "Official Account App ID")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[73] || (i[73] = (o) => s.wechat_connect_mp_app_id = o),
                              "data-testid": "wechat-connect-mp-app-id",
                              type: "text",
                              class: "input font-mono text-sm",
                              placeholder: E(
                                "公众号 AppID",
                                "Official Account App ID"
                              )
                            }, null, 8, Ev), [
                              [k, s.wechat_connect_mp_app_id]
                            ])
                          ]),
                          e("div", null, [
                            e("label", Vv, n(E(
                              "公众号 AppSecret",
                              "Official Account App Secret"
                            )), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[74] || (i[74] = (o) => s.wechat_connect_mp_app_secret = o),
                              "data-testid": "wechat-connect-mp-app-secret",
                              type: "password",
                              class: "input font-mono text-sm",
                              placeholder: s.wechat_connect_mp_app_secret_configured ? E(
                                "密钥已配置，留空以保留当前值。",
                                "Secret configured. Leave empty to keep the current value."
                              ) : E(
                                "公众号 AppSecret",
                                "Official Account App Secret"
                              )
                            }, null, 8, Pv), [
                              [k, s.wechat_connect_mp_app_secret]
                            ])
                          ])
                        ])) : T("", !0)
                      ]),
                      e("div", $v, [
                        e("div", Rv, [
                          e("div", null, [
                            e("h3", Lv, n(E("移动应用", "Mobile App")), 1),
                            e("p", Mv, n(E(
                              "原生移动端通过微信 SDK 唤起授权，网页端不会直接发起该流程。",
                              "Native mobile clients start authorization through the WeChat SDK. The web UI does not launch this flow directly."
                            )), 1)
                          ]),
                          v(B, {
                            "model-value": s.wechat_connect_mobile_enabled,
                            "data-testid": "wechat-connect-mobile-enabled",
                            "onUpdate:modelValue": bt
                          }, null, 8, ["model-value"])
                        ]),
                        s.wechat_connect_mobile_enabled ? (r(), d("div", Dv, [
                          e("div", null, [
                            e("label", Ov, n(E("移动应用 AppID", "Mobile App ID")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[75] || (i[75] = (o) => s.wechat_connect_mobile_app_id = o),
                              "data-testid": "wechat-connect-mobile-app-id",
                              type: "text",
                              class: "input font-mono text-sm",
                              placeholder: E(
                                "移动应用 AppID",
                                "Mobile App ID"
                              )
                            }, null, 8, Iv), [
                              [k, s.wechat_connect_mobile_app_id]
                            ])
                          ]),
                          e("div", null, [
                            e("label", zv, n(E("移动应用 AppSecret", "Mobile App Secret")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[76] || (i[76] = (o) => s.wechat_connect_mobile_app_secret = o),
                              "data-testid": "wechat-connect-mobile-app-secret",
                              type: "password",
                              class: "input font-mono text-sm",
                              placeholder: s.wechat_connect_mobile_app_secret_configured ? E(
                                "密钥已配置，留空以保留当前值。",
                                "Secret configured. Leave empty to keep the current value."
                              ) : E(
                                "移动应用 AppSecret",
                                "Mobile App Secret"
                              )
                            }, null, 8, Nv), [
                              [k, s.wechat_connect_mobile_app_secret]
                            ])
                          ])
                        ])) : T("", !0)
                      ])
                    ]),
                    s.wechat_connect_open_enabled && (s.wechat_connect_mp_enabled || s.wechat_connect_mobile_enabled) ? (r(), d("div", Fv, n(E(
                      "如果同时启用 PC 应用和公众号/移动应用，这些应用需要挂在同一个微信开放平台主体下，否则 UnionID 无法稳定归并账号。",
                      "When PC App is enabled together with Official Account or Mobile App, they should belong to the same WeChat Open Platform account so UnionID can merge identities reliably."
                    )), 1)) : T("", !0),
                    e("div", Hv, [
                      e("div", null, [
                        e("label", Bv, n(E(
                          "浏览器回调地址",
                          "Browser Redirect URL"
                        )), 1),
                        p(e("input", {
                          "data-testid": "wechat-connect-redirect-url",
                          "onUpdate:modelValue": i[77] || (i[77] = (o) => s.wechat_connect_redirect_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.wechatConnect.redirectUrlPlaceholder")
                        }, null, 8, jv), [
                          [k, s.wechat_connect_redirect_url]
                        ]),
                        e("p", qv, n(E(
                          "用于 PC 应用和公众号的网页回调。移动应用走原生 SDK 时不直接使用这个浏览器回调。",
                          "Used by PC App and Official Account browser callbacks. Native mobile SDK flows do not start from this browser callback directly."
                        )), 1),
                        e("div", Kv, [
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary btn-sm w-fit",
                            onClick: Ye
                          }, n(a(t)("admin.settings.wechatConnect.generateAndCopy")), 1),
                          ae.value ? (r(), d("code", Wv, n(ae.value), 1)) : T("", !0)
                        ])
                      ])
                    ]),
                    e("div", null, [
                      e("label", Gv, n(a(t)("admin.settings.wechatConnect.frontendRedirectUrlLabel")), 1),
                      p(e("input", {
                        "data-testid": "wechat-connect-frontend-redirect-url",
                        "onUpdate:modelValue": i[78] || (i[78] = (o) => s.wechat_connect_frontend_redirect_url = o),
                        type: "text",
                        class: "input font-mono text-sm",
                        placeholder: a(t)("admin.settings.wechatConnect.frontendRedirectUrlPlaceholder")
                      }, null, 8, Yv), [
                        [k, s.wechat_connect_frontend_redirect_url]
                      ]),
                      e("p", Qv, n(a(t)("admin.settings.wechatConnect.frontendRedirectUrlHint")), 1)
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", Xv, [
                e("div", Jv, [
                  e("h2", Zv, n(a(t)("admin.settings.dingtalk.title")), 1),
                  e("p", e2, n(a(t)("admin.settings.dingtalk.description")), 1)
                ]),
                e("div", t2, [
                  e("div", a2, [
                    e("div", null, [
                      e("label", n2, n(a(t)("admin.settings.dingtalk.enable")), 1),
                      e("p", s2, n(a(t)("admin.settings.dingtalk.enableHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.dingtalk_connect_enabled,
                      "onUpdate:modelValue": i[79] || (i[79] = (o) => s.dingtalk_connect_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.dingtalk_connect_enabled ? (r(), d("div", i2, [
                    e("div", o2, [
                      e("div", null, [
                        e("label", l2, n(a(t)("admin.settings.dingtalk.clientId")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[80] || (i[80] = (o) => s.dingtalk_connect_client_id = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.dingtalk.clientIdPlaceholder")
                        }, null, 8, r2), [
                          [k, s.dingtalk_connect_client_id]
                        ]),
                        e("p", d2, n(a(t)("admin.settings.dingtalk.clientIdHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", c2, n(a(t)("admin.settings.dingtalk.clientSecret")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[81] || (i[81] = (o) => s.dingtalk_connect_client_secret = o),
                          type: "password",
                          class: "input font-mono text-sm",
                          placeholder: s.dingtalk_connect_client_secret_configured ? a(t)(
                            "admin.settings.dingtalk.clientSecretConfiguredPlaceholder"
                          ) : a(t)("admin.settings.dingtalk.clientSecretPlaceholder")
                        }, null, 8, u2), [
                          [k, s.dingtalk_connect_client_secret]
                        ]),
                        e("p", m2, n(s.dingtalk_connect_client_secret_configured ? a(t)(
                          "admin.settings.dingtalk.clientSecretConfiguredHint"
                        ) : a(t)("admin.settings.dingtalk.clientSecretHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", _2, n(a(t)("admin.settings.dingtalk.redirectUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[82] || (i[82] = (o) => s.dingtalk_connect_redirect_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.dingtalk.redirectUrlPlaceholder")
                        }, null, 8, p2), [
                          [k, s.dingtalk_connect_redirect_url]
                        ]),
                        e("p", g2, n(a(t)("admin.settings.dingtalk.redirectUrlHint")), 1)
                      ]),
                      e("div", y2, [
                        e("label", b2, n(a(t)("admin.settings.dingtalk.corpPolicy.label")), 1),
                        e("p", h2, n(a(t)("admin.settings.dingtalk.corpPolicy.hint")), 1),
                        e("div", x2, [
                          e("label", f2, [
                            p(e("input", {
                              "onUpdate:modelValue": i[83] || (i[83] = (o) => s.dingtalk_connect_corp_restriction_policy = o),
                              type: "radio",
                              value: "none",
                              class: "h-4 w-4 text-primary-600"
                            }, null, 512), [
                              [ci, s.dingtalk_connect_corp_restriction_policy]
                            ]),
                            e("span", k2, n(a(t)("admin.settings.dingtalk.corpPolicy.none")), 1)
                          ]),
                          e("label", v2, [
                            p(e("input", {
                              "onUpdate:modelValue": i[84] || (i[84] = (o) => s.dingtalk_connect_corp_restriction_policy = o),
                              type: "radio",
                              value: "internal_only",
                              class: "h-4 w-4 text-primary-600"
                            }, null, 512), [
                              [ci, s.dingtalk_connect_corp_restriction_policy]
                            ]),
                            e("span", w2, n(a(t)("admin.settings.dingtalk.corpPolicy.internalOnly")), 1)
                          ])
                        ])
                      ]),
                      s.dingtalk_connect_corp_restriction_policy === "internal_only" ? (r(), d("div", C2, [
                        e("div", null, [
                          e("label", S2, n(a(t)("admin.settings.dingtalk.bypassRegistration")), 1),
                          e("p", A2, n(a(t)("admin.settings.dingtalk.bypassRegistrationHint")), 1)
                        ]),
                        v(B, {
                          modelValue: s.dingtalk_connect_bypass_registration,
                          "onUpdate:modelValue": i[85] || (i[85] = (o) => s.dingtalk_connect_bypass_registration = o)
                        }, null, 8, ["modelValue"])
                      ])) : T("", !0),
                      s.dingtalk_connect_corp_restriction_policy === "internal_only" ? (r(), d("div", T2, [
                        e("div", U2, [
                          e("div", null, [
                            e("label", E2, n(a(t)("admin.settings.dingtalk.syncDisplayName")), 1),
                            e("p", V2, n(a(t)("admin.settings.dingtalk.syncDisplayNameHint")), 1)
                          ]),
                          v(B, {
                            modelValue: s.dingtalk_connect_sync_display_name,
                            "onUpdate:modelValue": i[86] || (i[86] = (o) => s.dingtalk_connect_sync_display_name = o)
                          }, null, 8, ["modelValue"])
                        ]),
                        s.dingtalk_connect_sync_display_name ? (r(), d("div", P2, [
                          e("div", $2, [
                            e("label", R2, n(a(t)("admin.settings.dingtalk.syncDisplayNameTarget")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[87] || (i[87] = (o) => s.dingtalk_connect_sync_display_name_attr_key = o),
                              type: "text",
                              placeholder: "dingtalk_name",
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 512), [
                              [k, s.dingtalk_connect_sync_display_name_attr_key]
                            ])
                          ]),
                          e("div", L2, [
                            e("label", M2, n(a(t)("admin.settings.dingtalk.syncAttrDisplayName")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[88] || (i[88] = (o) => s.dingtalk_connect_sync_display_name_attr_name = o),
                              type: "text",
                              placeholder: E("钉钉姓名", "DingTalk Name"),
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 8, D2), [
                              [k, s.dingtalk_connect_sync_display_name_attr_name]
                            ])
                          ])
                        ])) : T("", !0),
                        s.dingtalk_connect_sync_display_name ? (r(), d("p", O2, n(a(t)("admin.settings.dingtalk.syncDisplayNameTargetHint")), 1)) : T("", !0)
                      ])) : T("", !0),
                      s.dingtalk_connect_corp_restriction_policy === "internal_only" ? (r(), d("div", I2, [
                        e("div", z2, [
                          e("div", null, [
                            e("label", N2, n(a(t)("admin.settings.dingtalk.syncCorpEmail")), 1),
                            e("p", F2, n(a(t)("admin.settings.dingtalk.syncCorpEmailHint")), 1),
                            e("p", H2, n(a(t)("admin.settings.dingtalk.syncCorpEmailPermissionHint")), 1)
                          ]),
                          v(B, {
                            modelValue: s.dingtalk_connect_sync_corp_email,
                            "onUpdate:modelValue": i[89] || (i[89] = (o) => s.dingtalk_connect_sync_corp_email = o)
                          }, null, 8, ["modelValue"])
                        ]),
                        s.dingtalk_connect_sync_corp_email ? (r(), d("div", B2, [
                          e("div", j2, [
                            e("label", q2, n(a(t)("admin.settings.dingtalk.syncCorpEmailTarget")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[90] || (i[90] = (o) => s.dingtalk_connect_sync_corp_email_attr_key = o),
                              type: "text",
                              placeholder: "dingtalk_email",
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 512), [
                              [k, s.dingtalk_connect_sync_corp_email_attr_key]
                            ])
                          ]),
                          e("div", K2, [
                            e("label", W2, n(a(t)("admin.settings.dingtalk.syncAttrDisplayName")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[91] || (i[91] = (o) => s.dingtalk_connect_sync_corp_email_attr_name = o),
                              type: "text",
                              placeholder: E("钉钉企业邮箱", "DingTalk Corporate Email"),
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 8, G2), [
                              [k, s.dingtalk_connect_sync_corp_email_attr_name]
                            ])
                          ])
                        ])) : T("", !0),
                        s.dingtalk_connect_sync_corp_email ? (r(), d("p", Y2, n(a(t)("admin.settings.dingtalk.syncCorpEmailTargetHint")), 1)) : T("", !0)
                      ])) : T("", !0),
                      s.dingtalk_connect_corp_restriction_policy === "internal_only" ? (r(), d("div", Q2, [
                        e("div", X2, [
                          e("div", null, [
                            e("label", J2, n(a(t)("admin.settings.dingtalk.syncDept")), 1),
                            e("p", Z2, n(a(t)("admin.settings.dingtalk.syncDeptHint")), 1),
                            e("p", ew, n(a(t)("admin.settings.dingtalk.syncDeptPermissionHint")), 1)
                          ]),
                          v(B, {
                            modelValue: s.dingtalk_connect_sync_dept,
                            "onUpdate:modelValue": i[92] || (i[92] = (o) => s.dingtalk_connect_sync_dept = o)
                          }, null, 8, ["modelValue"])
                        ]),
                        s.dingtalk_connect_sync_dept ? (r(), d("div", tw, [
                          e("div", aw, [
                            e("label", nw, n(a(t)("admin.settings.dingtalk.syncDeptTarget")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[93] || (i[93] = (o) => s.dingtalk_connect_sync_dept_attr_key = o),
                              type: "text",
                              placeholder: "dingtalk_department",
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 512), [
                              [k, s.dingtalk_connect_sync_dept_attr_key]
                            ])
                          ]),
                          e("div", sw, [
                            e("label", iw, n(a(t)("admin.settings.dingtalk.syncAttrDisplayName")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": i[94] || (i[94] = (o) => s.dingtalk_connect_sync_dept_attr_name = o),
                              type: "text",
                              placeholder: E("钉钉部门", "DingTalk Department"),
                              class: "input text-sm flex-1 max-w-xs"
                            }, null, 8, ow), [
                              [k, s.dingtalk_connect_sync_dept_attr_name]
                            ])
                          ])
                        ])) : T("", !0),
                        s.dingtalk_connect_sync_dept ? (r(), d("p", lw, n(a(t)("admin.settings.dingtalk.syncDeptTargetHint")), 1)) : T("", !0)
                      ])) : T("", !0)
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", rw, [
                e("div", dw, [
                  e("h2", cw, n(a(t)("admin.settings.oidc.title")), 1),
                  e("p", uw, n(a(t)("admin.settings.oidc.description")), 1)
                ]),
                e("div", mw, [
                  e("div", _w, [
                    e("div", null, [
                      e("label", pw, n(a(t)("admin.settings.oidc.enable")), 1),
                      e("p", gw, n(a(t)("admin.settings.oidc.enableHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.oidc_connect_enabled,
                      "onUpdate:modelValue": i[95] || (i[95] = (o) => s.oidc_connect_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.oidc_connect_enabled ? (r(), d("div", yw, [
                    e("div", bw, [
                      e("div", null, [
                        e("label", hw, n(a(t)("admin.settings.oidc.providerName")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[96] || (i[96] = (o) => s.oidc_connect_provider_name = o),
                          type: "text",
                          class: "input",
                          placeholder: a(t)("admin.settings.oidc.providerNamePlaceholder")
                        }, null, 8, xw), [
                          [k, s.oidc_connect_provider_name]
                        ])
                      ]),
                      e("div", null, [
                        e("label", fw, n(a(t)("admin.settings.oidc.clientId")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[97] || (i[97] = (o) => s.oidc_connect_client_id = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.clientIdPlaceholder")
                        }, null, 8, kw), [
                          [k, s.oidc_connect_client_id]
                        ])
                      ]),
                      e("div", null, [
                        e("label", vw, n(a(t)("admin.settings.oidc.clientSecret")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[98] || (i[98] = (o) => s.oidc_connect_client_secret = o),
                          type: "password",
                          class: "input font-mono text-sm",
                          placeholder: s.oidc_connect_client_secret_configured ? a(t)(
                            "admin.settings.oidc.clientSecretConfiguredPlaceholder"
                          ) : a(t)("admin.settings.oidc.clientSecretPlaceholder")
                        }, null, 8, ww), [
                          [k, s.oidc_connect_client_secret]
                        ]),
                        e("p", Cw, n(s.oidc_connect_client_secret_configured ? a(t)("admin.settings.oidc.clientSecretConfiguredHint") : a(t)("admin.settings.oidc.clientSecretHint")), 1)
                      ])
                    ]),
                    e("div", Sw, [
                      e("div", null, [
                        e("label", Aw, n(a(t)("admin.settings.oidc.issuerUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[99] || (i[99] = (o) => s.oidc_connect_issuer_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.issuerUrlPlaceholder")
                        }, null, 8, Tw), [
                          [k, s.oidc_connect_issuer_url]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Uw, n(a(t)("admin.settings.oidc.discoveryUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[100] || (i[100] = (o) => s.oidc_connect_discovery_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.discoveryUrlPlaceholder")
                        }, null, 8, Ew), [
                          [k, s.oidc_connect_discovery_url]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Vw, n(a(t)("admin.settings.oidc.authorizeUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[101] || (i[101] = (o) => s.oidc_connect_authorize_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.authorizeUrlPlaceholder")
                        }, null, 8, Pw), [
                          [k, s.oidc_connect_authorize_url]
                        ])
                      ]),
                      e("div", null, [
                        e("label", $w, n(a(t)("admin.settings.oidc.tokenUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[102] || (i[102] = (o) => s.oidc_connect_token_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.tokenUrlPlaceholder")
                        }, null, 8, Rw), [
                          [k, s.oidc_connect_token_url]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Lw, n(a(t)("admin.settings.oidc.userinfoUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[103] || (i[103] = (o) => s.oidc_connect_userinfo_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.userinfoUrlPlaceholder")
                        }, null, 8, Mw), [
                          [k, s.oidc_connect_userinfo_url]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Dw, n(a(t)("admin.settings.oidc.jwksUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[104] || (i[104] = (o) => s.oidc_connect_jwks_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.jwksUrlPlaceholder")
                        }, null, 8, Ow), [
                          [k, s.oidc_connect_jwks_url]
                        ])
                      ])
                    ]),
                    e("div", Iw, [
                      e("div", null, [
                        e("label", zw, n(a(t)("admin.settings.oidc.scopes")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[105] || (i[105] = (o) => s.oidc_connect_scopes = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.scopesPlaceholder")
                        }, null, 8, Nw), [
                          [k, s.oidc_connect_scopes]
                        ]),
                        e("p", Fw, n(a(t)("admin.settings.oidc.scopesHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", Hw, n(a(t)("admin.settings.oidc.redirectUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[106] || (i[106] = (o) => s.oidc_connect_redirect_url = o),
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.redirectUrlPlaceholder")
                        }, null, 8, Bw), [
                          [k, s.oidc_connect_redirect_url]
                        ]),
                        e("div", jw, [
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary btn-sm w-fit",
                            onClick: Wt
                          }, n(a(t)("admin.settings.oidc.quickSetCopy")), 1),
                          qe.value ? (r(), d("code", qw, n(qe.value), 1)) : T("", !0)
                        ]),
                        e("p", Kw, n(a(t)("admin.settings.oidc.redirectUrlHint")), 1)
                      ]),
                      e("div", Ww, [
                        e("label", Gw, n(a(t)("admin.settings.oidc.frontendRedirectUrl")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[107] || (i[107] = (o) => s.oidc_connect_frontend_redirect_url = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.frontendRedirectUrlPlaceholder")
                        }, null, 8, Yw), [
                          [k, s.oidc_connect_frontend_redirect_url]
                        ]),
                        e("p", Qw, n(a(t)("admin.settings.oidc.frontendRedirectUrlHint")), 1)
                      ])
                    ]),
                    e("div", Xw, [
                      e("div", null, [
                        e("label", Jw, n(a(t)("admin.settings.oidc.tokenAuthMethod")), 1),
                        p(e("select", {
                          "onUpdate:modelValue": i[108] || (i[108] = (o) => s.oidc_connect_token_auth_method = o),
                          class: "input font-mono text-sm"
                        }, [...i[267] || (i[267] = [
                          e("option", { value: "client_secret_post" }, " client_secret_post ", -1),
                          e("option", { value: "client_secret_basic" }, " client_secret_basic ", -1),
                          e("option", { value: "none" }, "none", -1)
                        ])], 512), [
                          [xt, s.oidc_connect_token_auth_method]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Zw, n(a(t)("admin.settings.oidc.clockSkewSeconds")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[109] || (i[109] = (o) => s.oidc_connect_clock_skew_seconds = o),
                          type: "number",
                          min: "0",
                          max: "600",
                          class: "input"
                        }, null, 512), [
                          [
                            k,
                            s.oidc_connect_clock_skew_seconds,
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ]),
                      e("div", null, [
                        e("label", e4, n(a(t)("admin.settings.oidc.allowedSigningAlgs")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[110] || (i[110] = (o) => s.oidc_connect_allowed_signing_algs = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.allowedSigningAlgsPlaceholder")
                        }, null, 8, t4), [
                          [k, s.oidc_connect_allowed_signing_algs]
                        ])
                      ])
                    ]),
                    e("div", a4, [
                      e("div", n4, [
                        e("div", null, [
                          e("label", s4, n(a(t)("admin.settings.oidc.usePkce")), 1)
                        ]),
                        v(B, {
                          modelValue: s.oidc_connect_use_pkce,
                          "onUpdate:modelValue": i[111] || (i[111] = (o) => s.oidc_connect_use_pkce = o),
                          "data-testid": "oidc-connect-use-pkce"
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", i4, [
                        e("div", null, [
                          e("label", o4, n(a(t)("admin.settings.oidc.validateIdToken")), 1)
                        ]),
                        v(B, {
                          modelValue: s.oidc_connect_validate_id_token,
                          "onUpdate:modelValue": i[112] || (i[112] = (o) => s.oidc_connect_validate_id_token = o),
                          "data-testid": "oidc-connect-validate-id-token"
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", l4, [
                        e("div", null, [
                          e("label", r4, n(a(t)("admin.settings.oidc.requireEmailVerified")), 1)
                        ]),
                        v(B, {
                          modelValue: s.oidc_connect_require_email_verified,
                          "onUpdate:modelValue": i[113] || (i[113] = (o) => s.oidc_connect_require_email_verified = o)
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    e("div", d4, [
                      e("div", null, [
                        e("label", c4, n(a(t)("admin.settings.oidc.userinfoEmailPath")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[114] || (i[114] = (o) => s.oidc_connect_userinfo_email_path = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.userinfoEmailPathPlaceholder")
                        }, null, 8, u4), [
                          [k, s.oidc_connect_userinfo_email_path]
                        ])
                      ]),
                      e("div", null, [
                        e("label", m4, n(a(t)("admin.settings.oidc.userinfoIdPath")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[115] || (i[115] = (o) => s.oidc_connect_userinfo_id_path = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.userinfoIdPathPlaceholder")
                        }, null, 8, _4), [
                          [k, s.oidc_connect_userinfo_id_path]
                        ])
                      ]),
                      e("div", null, [
                        e("label", p4, n(a(t)("admin.settings.oidc.userinfoUsernamePath")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[116] || (i[116] = (o) => s.oidc_connect_userinfo_username_path = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.oidc.userinfoUsernamePathPlaceholder")
                        }, null, 8, g4), [
                          [k, s.oidc_connect_userinfo_username_path]
                        ])
                      ])
                    ])
                  ])) : T("", !0)
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "security"]
          ]),
          p(v(ng, null, {
            default: Re(() => [
              e("div", y4, [
                e("div", b4, [
                  e("h2", h4, n(a(t)("admin.settings.defaults.title")), 1),
                  e("p", x4, n(a(t)("admin.settings.defaults.description")), 1)
                ]),
                e("div", f4, [
                  e("div", k4, [
                    e("div", null, [
                      e("label", v4, n(a(t)("admin.settings.defaults.defaultBalance")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[117] || (i[117] = (o) => s.default_balance = o),
                        type: "number",
                        step: "0.01",
                        min: "0",
                        class: "input",
                        placeholder: "0.00"
                      }, null, 512), [
                        [
                          k,
                          s.default_balance,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      e("p", w4, n(a(t)("admin.settings.defaults.defaultBalanceHint")), 1)
                    ]),
                    e("div", null, [
                      e("label", C4, n(a(t)("admin.settings.defaults.defaultConcurrency")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[118] || (i[118] = (o) => s.default_concurrency = o),
                        type: "number",
                        min: "1",
                        class: "input",
                        placeholder: "1"
                      }, null, 512), [
                        [
                          k,
                          s.default_concurrency,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      e("p", S4, n(a(t)("admin.settings.defaults.defaultConcurrencyHint")), 1)
                    ]),
                    e("div", null, [
                      e("label", A4, n(a(t)("admin.settings.defaults.defaultUserRpmLimit")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[119] || (i[119] = (o) => s.default_user_rpm_limit = o),
                        type: "number",
                        min: "0",
                        step: "1",
                        class: "input",
                        placeholder: "0"
                      }, null, 512), [
                        [
                          k,
                          s.default_user_rpm_limit,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      e("p", T4, n(a(t)("admin.settings.defaults.defaultUserRpmLimitHint")), 1)
                    ])
                  ]),
                  e("div", U4, [
                    e("div", E4, [
                      e("div", null, [
                        e("label", V4, n(a(t)("admin.settings.defaults.defaultSubscriptions")), 1),
                        e("p", P4, n(a(t)("admin.settings.defaults.defaultSubscriptionsHint")), 1)
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        onClick: Uo,
                        disabled: Fe.value.length === 0
                      }, n(a(t)("admin.settings.defaults.addDefaultSubscription")), 9, $4)
                    ]),
                    s.default_subscriptions.length === 0 ? (r(), d("div", R4, n(a(t)("admin.settings.defaults.defaultSubscriptionsEmpty")), 1)) : (r(), d("div", L4, [
                      (r(!0), d(K, null, ee(s.default_subscriptions, (o, b) => (r(), d("div", {
                        key: `default-sub-${b}`,
                        class: "grid grid-cols-1 gap-3 rounded border border-gray-200 p-3 md:grid-cols-[1fr_160px_auto] dark:border-dark-600"
                      }, [
                        e("div", null, [
                          e("label", M4, n(a(t)("admin.settings.defaults.subscriptionGroup")), 1),
                          v(Ke, {
                            modelValue: o.group_id,
                            "onUpdate:modelValue": (g) => o.group_id = g,
                            class: "default-sub-group-select",
                            options: ha.value,
                            placeholder: a(t)("admin.settings.defaults.subscriptionGroup")
                          }, {
                            selected: Re(({ option: g }) => [
                              g ? (r(), ct(ui, {
                                key: 0,
                                name: g.label,
                                platform: g.platform,
                                "subscription-type": g.subscriptionType,
                                "rate-multiplier": g.rate
                              }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), d("span", D4, n(a(t)("admin.settings.defaults.subscriptionGroup")), 1))
                            ]),
                            option: Re(({ option: g, selected: N }) => [
                              v(mi, {
                                name: g.label,
                                platform: g.platform,
                                "subscription-type": g.subscriptionType,
                                "rate-multiplier": g.rate,
                                description: g.description,
                                selected: N
                              }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "description", "selected"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])
                        ]),
                        e("div", null, [
                          e("label", O4, n(a(t)("admin.settings.defaults.subscriptionValidityDays")), 1),
                          p(e("input", {
                            "onUpdate:modelValue": (g) => o.validity_days = g,
                            type: "number",
                            min: "1",
                            max: "36500",
                            class: "input h-[42px]"
                          }, null, 8, I4), [
                            [
                              k,
                              o.validity_days,
                              void 0,
                              { number: !0 }
                            ]
                          ])
                        ]),
                        e("div", z4, [
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary default-sub-delete-btn w-full text-red-600 hover:text-red-700 dark:text-red-400",
                            onClick: (g) => Eo(b)
                          }, n(a(t)("common.delete")), 9, N4)
                        ])
                      ]))), 128))
                    ]))
                  ]),
                  e("div", F4, [
                    e("div", H4, [
                      e("label", B4, n(a(t)("admin.settings.defaults.defaultPlatformQuotas")), 1),
                      e("p", j4, n(a(t)("admin.settings.defaults.defaultPlatformQuotasHint")), 1),
                      e("p", q4, n(a(t)("admin.settings.defaults.platformQuotaNotice")), 1)
                    ]),
                    e("div", K4, [
                      e("table", W4, [
                        e("thead", null, [
                          e("tr", G4, [
                            e("th", Y4, n(a(t)("admin.settings.platformQuota.platform")), 1),
                            e("th", Q4, n(a(t)("admin.settings.platformQuota.daily")), 1),
                            e("th", X4, n(a(t)("admin.settings.platformQuota.weekly")), 1),
                            e("th", J4, n(a(t)("admin.settings.platformQuota.monthly")), 1)
                          ])
                        ]),
                        e("tbody", Z4, [
                          (r(!0), d(K, null, ee(Zt(s.default_platform_quotas), (o) => (r(), d("tr", {
                            key: o,
                            class: "align-top"
                          }, [
                            e("td", e5, [
                              e("span", t5, n(o), 1)
                            ]),
                            e("td", a5, [
                              p(e("input", {
                                "onUpdate:modelValue": (b) => s.default_platform_quotas[o].daily = b,
                                type: "number",
                                step: "0.01",
                                min: "0",
                                class: "input h-8 w-28 text-sm",
                                placeholder: a(t)("admin.settings.platformQuota.placeholder")
                              }, null, 8, n5), [
                                [
                                  k,
                                  s.default_platform_quotas[o].daily,
                                  void 0,
                                  { number: !0 }
                                ]
                              ])
                            ]),
                            e("td", s5, [
                              p(e("input", {
                                "onUpdate:modelValue": (b) => s.default_platform_quotas[o].weekly = b,
                                type: "number",
                                step: "0.01",
                                min: "0",
                                class: "input h-8 w-28 text-sm",
                                placeholder: a(t)("admin.settings.platformQuota.placeholder")
                              }, null, 8, i5), [
                                [
                                  k,
                                  s.default_platform_quotas[o].weekly,
                                  void 0,
                                  { number: !0 }
                                ]
                              ])
                            ]),
                            e("td", o5, [
                              p(e("input", {
                                "onUpdate:modelValue": (b) => s.default_platform_quotas[o].monthly = b,
                                type: "number",
                                step: "0.01",
                                min: "0",
                                class: "input h-8 w-28 text-sm",
                                placeholder: a(t)("admin.settings.platformQuota.placeholder")
                              }, null, 8, l5), [
                                [
                                  k,
                                  s.default_platform_quotas[o].monthly,
                                  void 0,
                                  { number: !0 }
                                ]
                              ])
                            ])
                          ]))), 128))
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              e("div", r5, [
                e("div", d5, [
                  e("h2", c5, n(a(t)("admin.settings.authSourceDefaults.title")), 1),
                  e("p", u5, n(a(t)("admin.settings.authSourceDefaults.description")), 1)
                ]),
                e("div", m5, [
                  e("div", _5, [
                    e("div", null, [
                      e("label", p5, n(a(t)("admin.settings.authSourceDefaults.requireEmailLabel")), 1),
                      e("p", g5, n(a(t)("admin.settings.authSourceDefaults.requireEmailHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.force_email_on_third_party_signup,
                      "onUpdate:modelValue": i[120] || (i[120] = (o) => s.force_email_on_third_party_signup = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", y5, [
                    (r(!0), d(K, null, ee(pn.value, (o) => (r(), d("div", {
                      key: o.source,
                      class: "rounded-xl border border-gray-200 p-4 dark:border-dark-700"
                    }, [
                      e("div", b5, [
                        e("div", null, [
                          e("div", h5, n(o.title), 1),
                          e("p", x5, n(o.description), 1)
                        ]),
                        v(B, {
                          modelValue: Ee[o.source].grant_on_signup,
                          "onUpdate:modelValue": (b) => Ee[o.source].grant_on_signup = b,
                          "data-testid": `auth-source-${o.source}-enabled`
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "data-testid"])
                      ]),
                      Ee[o.source].grant_on_signup ? (r(), d("div", {
                        key: 0,
                        "data-testid": `auth-source-${o.source}-panel`,
                        class: "mt-4 space-y-4 border-t border-gray-100 pt-4 dark:border-dark-700"
                      }, [
                        e("p", k5, n(a(t)("admin.settings.authSourceDefaults.enabledHint")), 1),
                        e("div", v5, [
                          e("div", null, [
                            e("label", w5, n(a(t)("admin.settings.defaults.defaultBalance")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (b) => Ee[o.source].balance = b,
                              type: "number",
                              step: "0.01",
                              min: "0",
                              class: "input",
                              placeholder: "0.00"
                            }, null, 8, C5), [
                              [
                                k,
                                Ee[o.source].balance,
                                void 0,
                                { number: !0 }
                              ]
                            ])
                          ]),
                          e("div", null, [
                            e("label", S5, n(a(t)("admin.settings.defaults.defaultConcurrency")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (b) => Ee[o.source].concurrency = b,
                              type: "number",
                              min: "1",
                              class: "input",
                              placeholder: "5"
                            }, null, 8, A5), [
                              [
                                k,
                                Ee[o.source].concurrency,
                                void 0,
                                { number: !0 }
                              ]
                            ])
                          ])
                        ]),
                        e("div", T5, [
                          e("div", null, [
                            e("label", U5, n(a(t)("admin.settings.authSourceDefaults.grantOnFirstBindLabel")), 1),
                            e("p", E5, n(a(t)("admin.settings.authSourceDefaults.grantOnFirstBindHint")), 1)
                          ]),
                          v(B, {
                            modelValue: Ee[o.source].grant_on_first_bind,
                            "onUpdate:modelValue": (b) => Ee[o.source].grant_on_first_bind = b
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        e("div", V5, [
                          e("div", null, [
                            e("label", P5, n(a(t)("admin.settings.authSourceDefaults.defaultSubscriptionsLabel")), 1),
                            e("p", $5, n(a(t)("admin.settings.authSourceDefaults.defaultSubscriptionsHint")), 1)
                          ]),
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary btn-sm",
                            onClick: (b) => Vo(o.source),
                            disabled: Fe.value.length === 0
                          }, n(a(t)("admin.settings.defaults.addDefaultSubscription")), 9, R5)
                        ]),
                        Ee[o.source].subscriptions.length === 0 ? (r(), d("div", L5, n(a(t)("admin.settings.authSourceDefaults.noSourceSubscriptions")), 1)) : (r(), d("div", M5, [
                          (r(!0), d(K, null, ee(Ee[o.source].subscriptions, (b, g) => (r(), d("div", {
                            key: `${o.source}-sub-${g}`,
                            class: "grid grid-cols-1 gap-3 rounded border border-gray-200 p-3 md:grid-cols-[1fr_160px_auto] dark:border-dark-600"
                          }, [
                            e("div", null, [
                              e("label", D5, n(a(t)("admin.settings.defaults.subscriptionGroup")), 1),
                              v(Ke, {
                                modelValue: b.group_id,
                                "onUpdate:modelValue": (N) => b.group_id = N,
                                class: "default-sub-group-select",
                                options: ha.value,
                                placeholder: a(t)("admin.settings.defaults.subscriptionGroup")
                              }, {
                                selected: Re(({ option: N }) => [
                                  N ? (r(), ct(ui, {
                                    key: 0,
                                    name: N.label,
                                    platform: N.platform,
                                    "subscription-type": N.subscriptionType,
                                    "rate-multiplier": N.rate
                                  }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier"])) : (r(), d("span", O5, n(a(t)("admin.settings.defaults.subscriptionGroup")), 1))
                                ]),
                                option: Re(({ option: N, selected: Le }) => [
                                  v(mi, {
                                    name: N.label,
                                    platform: N.platform,
                                    "subscription-type": N.subscriptionType,
                                    "rate-multiplier": N.rate,
                                    description: N.description,
                                    selected: Le
                                  }, null, 8, ["name", "platform", "subscription-type", "rate-multiplier", "description", "selected"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])
                            ]),
                            e("div", null, [
                              e("label", I5, n(a(t)(
                                "admin.settings.defaults.subscriptionValidityDays"
                              )), 1),
                              p(e("input", {
                                "onUpdate:modelValue": (N) => b.validity_days = N,
                                type: "number",
                                min: "1",
                                max: "36500",
                                class: "input h-[42px]"
                              }, null, 8, z5), [
                                [
                                  k,
                                  b.validity_days,
                                  void 0,
                                  { number: !0 }
                                ]
                              ])
                            ]),
                            e("div", N5, [
                              e("button", {
                                type: "button",
                                class: "btn btn-secondary w-full text-red-600 hover:text-red-700 dark:text-red-400",
                                onClick: (N) => Po(
                                  o.source,
                                  g
                                )
                              }, n(a(t)("common.delete")), 9, F5)
                            ])
                          ]))), 128))
                        ])),
                        e("div", H5, [
                          e("div", B5, [
                            e("label", j5, n(a(t)("admin.settings.authSourceDefaults.platformQuotasOverride")), 1),
                            e("p", q5, n(a(t)("admin.settings.authSourceDefaults.platformQuotasOverrideHint")), 1)
                          ]),
                          e("div", K5, [
                            e("table", W5, [
                              e("thead", null, [
                                e("tr", G5, [
                                  e("th", Y5, n(a(t)("admin.settings.platformQuota.platform")), 1),
                                  e("th", Q5, n(a(t)("admin.settings.platformQuota.daily")), 1),
                                  e("th", X5, n(a(t)("admin.settings.platformQuota.weekly")), 1),
                                  e("th", J5, n(a(t)("admin.settings.platformQuota.monthly")), 1)
                                ])
                              ]),
                              e("tbody", null, [
                                (r(!0), d(K, null, ee(Zt(Ee[o.source].platform_quotas), (b) => (r(), d("tr", {
                                  key: `${o.source}-pq-${b}`,
                                  class: "align-top"
                                }, [
                                  e("td", Z5, [
                                    e("span", e3, n(b), 1)
                                  ]),
                                  e("td", t3, [
                                    p(e("input", {
                                      "onUpdate:modelValue": (g) => Ee[o.source].platform_quotas[b].daily = g,
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      class: "input h-8 w-28 text-sm",
                                      placeholder: a(t)("admin.settings.platformQuota.placeholder")
                                    }, null, 8, a3), [
                                      [
                                        k,
                                        Ee[o.source].platform_quotas[b].daily,
                                        void 0,
                                        { number: !0 }
                                      ]
                                    ])
                                  ]),
                                  e("td", n3, [
                                    p(e("input", {
                                      "onUpdate:modelValue": (g) => Ee[o.source].platform_quotas[b].weekly = g,
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      class: "input h-8 w-28 text-sm",
                                      placeholder: a(t)("admin.settings.platformQuota.placeholder")
                                    }, null, 8, s3), [
                                      [
                                        k,
                                        Ee[o.source].platform_quotas[b].weekly,
                                        void 0,
                                        { number: !0 }
                                      ]
                                    ])
                                  ]),
                                  e("td", i3, [
                                    p(e("input", {
                                      "onUpdate:modelValue": (g) => Ee[o.source].platform_quotas[b].monthly = g,
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      class: "input h-8 w-28 text-sm",
                                      placeholder: a(t)("admin.settings.platformQuota.placeholder")
                                    }, null, 8, o3), [
                                      [
                                        k,
                                        Ee[o.source].platform_quotas[b].monthly,
                                        void 0,
                                        { number: !0 }
                                      ]
                                    ])
                                  ])
                                ]))), 128))
                              ])
                            ])
                          ])
                        ])
                      ], 8, f5)) : T("", !0)
                    ]))), 128))
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "users"]
          ]),
          p(v(Di, null, {
            default: Re(() => [
              e("div", l3, [
                e("div", r3, [
                  e("h2", d3, n(a(t)("admin.settings.claudeCode.title")), 1),
                  e("p", c3, n(a(t)("admin.settings.claudeCode.description")), 1)
                ]),
                e("div", u3, [
                  e("div", null, [
                    e("label", m3, n(a(t)("admin.settings.claudeCode.minVersion")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[121] || (i[121] = (o) => s.min_claude_code_version = o),
                      type: "text",
                      class: "input max-w-xs font-mono text-sm",
                      placeholder: a(t)("admin.settings.claudeCode.minVersionPlaceholder")
                    }, null, 8, _3), [
                      [k, s.min_claude_code_version]
                    ]),
                    e("p", p3, n(a(t)("admin.settings.claudeCode.minVersionHint")), 1)
                  ]),
                  e("div", g3, [
                    e("label", y3, n(a(t)("admin.settings.claudeCode.maxVersion")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[122] || (i[122] = (o) => s.max_claude_code_version = o),
                      type: "text",
                      class: "input max-w-xs font-mono text-sm",
                      placeholder: a(t)("admin.settings.claudeCode.maxVersionPlaceholder")
                    }, null, 8, b3), [
                      [k, s.max_claude_code_version]
                    ]),
                    e("p", h3, n(a(t)("admin.settings.claudeCode.maxVersionHint")), 1)
                  ])
                ])
              ]),
              e("div", x3, [
                e("div", f3, [
                  e("h2", k3, n(a(t)("admin.settings.gatewayForwarding.codexHardeningTitle")), 1)
                ]),
                e("div", v3, [
                  e("div", null, [
                    e("h3", w3, n(a(t)("admin.settings.gatewayForwarding.codexClientRestrictionTitle")), 1),
                    e("p", C3, n(a(t)("admin.settings.gatewayForwarding.codexHardeningDesc")), 1)
                  ]),
                  e("div", S3, [
                    e("div", null, [
                      e("label", A3, n(a(t)("admin.settings.gatewayForwarding.minCodexVersion")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[123] || (i[123] = (o) => s.min_codex_version = o),
                        type: "text",
                        class: "input w-full font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.minCodexVersionPlaceholder"
                        )
                      }, null, 8, T3), [
                        [k, s.min_codex_version]
                      ])
                    ]),
                    e("div", null, [
                      e("label", U3, n(a(t)("admin.settings.gatewayForwarding.maxCodexVersion")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[124] || (i[124] = (o) => s.max_codex_version = o),
                        type: "text",
                        class: "input w-full font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.maxCodexVersionPlaceholder"
                        )
                      }, null, 8, E3), [
                        [k, s.max_codex_version]
                      ])
                    ])
                  ]),
                  e("p", V3, n(a(t)("admin.settings.gatewayForwarding.codexVersionHint")), 1),
                  e("div", null, [
                    e("label", P3, n(a(t)("admin.settings.gatewayForwarding.codexFingerprintSignals")), 1),
                    e("p", $3, n(a(t)("admin.settings.gatewayForwarding.codexFingerprintSignalsDesc")), 1),
                    (r(!0), d(K, null, ee(ka.value, (o, b) => (r(), d("div", {
                      key: `codex-fp-${b}`,
                      class: "mb-2 flex items-center gap-2"
                    }, [
                      p(e("select", {
                        "onUpdate:modelValue": (g) => o.type = g,
                        class: "input w-32 text-sm"
                      }, [
                        e("option", L3, n(a(t)("admin.settings.gatewayForwarding.codexFpTypeHeaderExact")), 1),
                        e("option", M3, n(a(t)("admin.settings.gatewayForwarding.codexFpTypeHeaderPrefix")), 1),
                        e("option", D3, n(a(t)("admin.settings.gatewayForwarding.codexFpTypeBodyPath")), 1)
                      ], 8, R3), [
                        [xt, o.type]
                      ]),
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.match = g,
                        type: "text",
                        class: "input flex-1 font-mono text-sm",
                        placeholder: a(t)("admin.settings.gatewayForwarding.codexFpMatchPlaceholder")
                      }, null, 8, O3), [
                        [k, o.match]
                      ]),
                      e("label", I3, [
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.required = g,
                          type: "checkbox"
                        }, null, 8, z3), [
                          [tt, o.required]
                        ]),
                        q(" " + n(a(t)("admin.settings.gatewayForwarding.codexFpRequired")), 1)
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm shrink-0 text-red-600 hover:text-red-700 dark:text-red-400",
                        onClick: (g) => ko(b)
                      }, n(a(t)("admin.settings.gatewayForwarding.codexRemoveRow")), 9, N3)
                    ]))), 128)),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      onClick: fo
                    }, n(a(t)("admin.settings.gatewayForwarding.codexAddRow")), 1),
                    xo.value ? (r(), d("p", F3, n(a(t)("admin.settings.gatewayForwarding.codexFingerprintNoRequiredWarn")), 1)) : T("", !0)
                  ]),
                  e("div", H3, [
                    e("div", B3, [
                      e("label", j3, n(a(t)("admin.settings.gatewayForwarding.codexAllowAppServer")), 1),
                      e("p", q3, n(a(t)(
                        "admin.settings.gatewayForwarding.codexAllowAppServerDesc"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.codex_cli_only_allow_app_server_clients,
                      "onUpdate:modelValue": i[125] || (i[125] = (o) => s.codex_cli_only_allow_app_server_clients = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", null, [
                    e("label", K3, n(a(t)("admin.settings.gatewayForwarding.codexBlacklist")), 1),
                    e("p", W3, n(a(t)("admin.settings.gatewayForwarding.codexBlacklistDesc")), 1),
                    (r(!0), d(K, null, ee(Ha.value, (o, b) => (r(), d("div", {
                      key: `codex-bl-${b}`,
                      class: "mb-2 flex gap-2"
                    }, [
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.originator = g,
                        type: "text",
                        class: "input w-1/3 font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.codexOriginatorPlaceholder"
                        )
                      }, null, 8, G3), [
                        [k, o.originator]
                      ]),
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.uaContains = g,
                        type: "text",
                        class: "input flex-1 font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.codexUaContainsPlaceholder"
                        )
                      }, null, 8, Y3), [
                        [k, o.uaContains]
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm shrink-0 text-red-600 hover:text-red-700 dark:text-red-400",
                        onClick: (g) => wo(b)
                      }, n(a(t)("admin.settings.gatewayForwarding.codexRemoveRow")), 9, Q3)
                    ]))), 128)),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      onClick: vo
                    }, n(a(t)("admin.settings.gatewayForwarding.codexAddRow")), 1)
                  ]),
                  e("div", null, [
                    e("label", X3, n(a(t)("admin.settings.gatewayForwarding.codexWhitelist")), 1),
                    e("p", J3, n(a(t)("admin.settings.gatewayForwarding.codexWhitelistDesc")), 1),
                    (r(!0), d(K, null, ee(Ba.value, (o, b) => (r(), d("div", {
                      key: `codex-wl-${b}`,
                      class: "mb-2 flex gap-2"
                    }, [
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.originator = g,
                        type: "text",
                        class: "input w-1/3 font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.codexOriginatorPlaceholder"
                        )
                      }, null, 8, Z3), [
                        [k, o.originator]
                      ]),
                      p(e("input", {
                        "onUpdate:modelValue": (g) => o.uaContains = g,
                        type: "text",
                        class: "input flex-1 font-mono text-sm",
                        placeholder: a(t)(
                          "admin.settings.gatewayForwarding.codexUaContainsPlaceholder"
                        )
                      }, null, 8, e8), [
                        [k, o.uaContains]
                      ]),
                      e("label", {
                        class: "flex shrink-0 items-center gap-1 text-xs text-gray-600 dark:text-gray-400",
                        title: a(t)(
                          "admin.settings.gatewayForwarding.codexWhitelistSkipFingerprintTooltip"
                        )
                      }, [
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.skipEngineFingerprint = g,
                          type: "checkbox"
                        }, null, 8, a8), [
                          [tt, o.skipEngineFingerprint]
                        ]),
                        q(" " + n(a(t)(
                          "admin.settings.gatewayForwarding.codexWhitelistSkipFingerprint"
                        )), 1)
                      ], 8, t8),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm shrink-0 text-red-600 hover:text-red-700 dark:text-red-400",
                        onClick: (g) => So(b)
                      }, n(a(t)("admin.settings.gatewayForwarding.codexRemoveRow")), 9, n8)
                    ]))), 128)),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      onClick: Co
                    }, n(a(t)("admin.settings.gatewayForwarding.codexAddRow")), 1)
                  ])
                ])
              ]),
              e("div", s8, [
                e("div", i8, [
                  e("h2", o8, n(a(t)("admin.settings.upstreamBillingProbe.title")), 1),
                  e("p", l8, n(a(t)("admin.settings.upstreamBillingProbe.description")), 1)
                ]),
                e("div", r8, [
                  X.value ? (r(), d("div", d8, [
                    i[268] || (i[268] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", c8, [
                      e("div", null, [
                        e("label", u8, n(a(t)("admin.settings.upstreamBillingProbe.enabled")), 1),
                        e("p", m8, n(a(t)("admin.settings.upstreamBillingProbe.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: I.enabled,
                        "onUpdate:modelValue": i[126] || (i[126] = (o) => I.enabled = o),
                        "aria-label": a(t)("admin.settings.upstreamBillingProbe.enabled"),
                        "data-testid": "upstream-billing-probe-enabled"
                      }, null, 8, ["modelValue", "aria-label"])
                    ]),
                    I.enabled ? (r(), d("div", _8, [
                      e("label", p8, n(a(t)("admin.settings.upstreamBillingProbe.intervalMinutes")), 1),
                      p(e("input", {
                        id: "upstream-billing-probe-interval",
                        "onUpdate:modelValue": i[127] || (i[127] = (o) => I.interval_minutes = o),
                        type: "number",
                        min: "5",
                        max: "1440",
                        class: "input w-32",
                        "data-testid": "upstream-billing-probe-interval"
                      }, null, 512), [
                        [
                          k,
                          I.interval_minutes,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      e("p", g8, n(a(t)("admin.settings.upstreamBillingProbe.intervalHint")), 1)
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", y8, [
                e("div", b8, [
                  e("h2", h8, n(a(t)("admin.settings.ollamaCloudUsage.title")), 1),
                  e("p", x8, n(a(t)("admin.settings.ollamaCloudUsage.description")), 1)
                ]),
                e("div", f8, [
                  he.value ? (r(), d("div", k8, [
                    i[269] || (i[269] = e("div", { class: "h-4 w-4 animate-spin rounded-full border-b-2 border-primary-600" }, null, -1)),
                    q(" " + n(a(t)("common.loading")), 1)
                  ])) : (r(), d(K, { key: 1 }, [
                    e("div", v8, [
                      e("div", null, [
                        e("label", w8, n(a(t)("admin.settings.ollamaCloudUsage.enabled")), 1),
                        e("p", C8, n(a(t)("admin.settings.ollamaCloudUsage.enabledHint")), 1)
                      ]),
                      v(B, {
                        modelValue: Q.enabled,
                        "onUpdate:modelValue": i[128] || (i[128] = (o) => Q.enabled = o),
                        "aria-label": a(t)("admin.settings.ollamaCloudUsage.enabled"),
                        "data-testid": "ollama-cloud-usage-global-enabled"
                      }, null, 8, ["modelValue", "aria-label"])
                    ]),
                    Q.enabled ? (r(), d("div", S8, [
                      e("div", null, [
                        e("label", A8, n(a(t)("admin.settings.ollamaCloudUsage.debounceMinutes")), 1),
                        p(e("input", {
                          id: "ollama-cloud-usage-debounce",
                          "onUpdate:modelValue": i[129] || (i[129] = (o) => Q.debounce_minutes = o),
                          type: "number",
                          min: "1",
                          max: "60",
                          class: "input w-32",
                          "data-testid": "ollama-cloud-usage-global-debounce"
                        }, null, 512), [
                          [
                            k,
                            Q.debounce_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", T8, n(a(t)("admin.settings.ollamaCloudUsage.debounceHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", U8, n(a(t)("admin.settings.ollamaCloudUsage.intervalMinutes")), 1),
                        p(e("input", {
                          id: "ollama-cloud-usage-interval",
                          "onUpdate:modelValue": i[130] || (i[130] = (o) => Q.interval_minutes = o),
                          type: "number",
                          min: "15",
                          max: "1440",
                          class: "input w-32",
                          "data-testid": "ollama-cloud-usage-global-interval"
                        }, null, 512), [
                          [
                            k,
                            Q.interval_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", E8, n(a(t)("admin.settings.ollamaCloudUsage.intervalHint")), 1)
                      ])
                    ])) : T("", !0)
                  ], 64))
                ])
              ]),
              e("div", V8, [
                e("div", P8, [
                  e("h2", $8, n(a(t)("admin.settings.scheduling.title")), 1),
                  e("p", R8, n(a(t)("admin.settings.scheduling.description")), 1)
                ]),
                e("div", L8, [
                  e("div", M8, [
                    e("div", null, [
                      e("label", D8, n(a(t)("admin.settings.scheduling.allowUngroupedKey")), 1),
                      e("p", O8, n(a(t)("admin.settings.scheduling.allowUngroupedKeyHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.allow_ungrouped_key_scheduling,
                      "onUpdate:modelValue": i[131] || (i[131] = (o) => s.allow_ungrouped_key_scheduling = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", I8, [
                    e("div", z8, [
                      e("label", N8, n(a(t)(
                        "admin.settings.scheduling.accountSchedulingThresholdsTitle"
                      )), 1),
                      e("p", F8, n(a(t)(
                        "admin.settings.scheduling.accountSchedulingThresholdsDescription"
                      )), 1),
                      e("p", H8, n(a(t)(
                        "admin.settings.scheduling.accountSchedulingThresholdsGlobalHint"
                      )), 1),
                      e("p", B8, n(a(t)(
                        "admin.settings.scheduling.accountSchedulingThresholdsDisabledHint"
                      )), 1)
                    ]),
                    e("div", j8, [
                      (r(!0), d(K, null, ee(a(cn), (o) => (r(), d("div", {
                        key: o,
                        class: "rounded-lg border border-gray-200 p-4 dark:border-dark-700"
                      }, [
                        e("div", q8, [
                          e("div", null, [
                            e("label", K8, n(o), 1),
                            e("p", W8, n(a(t)(
                              "admin.settings.scheduling.accountSchedulingThresholdsRangeHint"
                            )), 1)
                          ]),
                          i[270] || (i[270] = e("span", { class: "rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-dark-700 dark:text-gray-300" }, " % ", -1))
                        ]),
                        p(e("input", {
                          "onUpdate:modelValue": (b) => s.account_scheduling_thresholds[o] = b,
                          type: "number",
                          min: "1",
                          max: "100",
                          step: "1",
                          class: "input mt-3",
                          "data-testid": `account-scheduling-threshold-${o}`,
                          placeholder: "100"
                        }, null, 8, G8), [
                          [
                            k,
                            s.account_scheduling_thresholds[o],
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ]))), 128))
                    ])
                  ]),
                  s.openai_advanced_scheduler_enabled ? T("", !0) : (r(), d("div", Y8, [
                    e("div", null, [
                      e("label", Q8, n(a(t)("admin.settings.openaiExperimentalScheduler.lowRatePriorityTitle")), 1),
                      e("p", X8, n(a(t)("admin.settings.openaiExperimentalScheduler.lowRatePriorityDescription")), 1)
                    ]),
                    v(B, {
                      modelValue: s.openai_low_upstream_rate_priority_enabled,
                      "onUpdate:modelValue": i[132] || (i[132] = (o) => s.openai_low_upstream_rate_priority_enabled = o),
                      "data-testid": "openai-low-rate-priority-toggle"
                    }, null, 8, ["modelValue"])
                  ])),
                  !s.openai_advanced_scheduler_enabled && s.openai_low_upstream_rate_priority_enabled ? (r(), d("div", J8, [
                    e("div", Z8, [
                      e("label", e6, n(a(t)("admin.settings.openaiExperimentalScheduler.oauthRateTitle")), 1),
                      e("p", t6, n(a(t)("admin.settings.openaiExperimentalScheduler.oauthRatePriorityDescription")), 1)
                    ]),
                    e("div", a6, [
                      p(e("input", {
                        id: "openai-oauth-scheduling-rate-multiplier",
                        "onUpdate:modelValue": i[133] || (i[133] = (o) => s.openai_oauth_scheduling_rate_multiplier = o),
                        class: "input pr-8",
                        "data-testid": "openai-oauth-scheduling-rate-multiplier",
                        min: "0",
                        required: "",
                        step: "0.01",
                        type: "number"
                      }, null, 512), [
                        [
                          k,
                          s.openai_oauth_scheduling_rate_multiplier,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      i[271] || (i[271] = e("span", { class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400" }, "x", -1))
                    ])
                  ])) : T("", !0),
                  e("div", n6, [
                    e("div", null, [
                      e("label", s6, n(a(t)("admin.settings.openaiExperimentalScheduler.title")), 1),
                      e("p", i6, n(a(t)("admin.settings.openaiExperimentalScheduler.description")), 1)
                    ]),
                    v(B, {
                      modelValue: s.openai_advanced_scheduler_enabled,
                      "onUpdate:modelValue": i[134] || (i[134] = (o) => s.openai_advanced_scheduler_enabled = o),
                      "data-testid": "openai-advanced-scheduler-toggle"
                    }, null, 8, ["modelValue"])
                  ]),
                  s.openai_advanced_scheduler_enabled ? (r(), d("div", o6, [
                    e("div", null, [
                      e("label", l6, n(a(t)("admin.settings.openaiExperimentalScheduler.stickyWeightedTitle")), 1),
                      e("p", r6, n(a(t)("admin.settings.openaiExperimentalScheduler.stickyWeightedDescription")), 1)
                    ]),
                    v(B, {
                      modelValue: s.openai_advanced_scheduler_sticky_weighted_enabled,
                      "onUpdate:modelValue": i[135] || (i[135] = (o) => s.openai_advanced_scheduler_sticky_weighted_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])) : T("", !0),
                  s.openai_advanced_scheduler_enabled ? (r(), d("div", d6, [
                    e("div", null, [
                      e("label", c6, n(a(t)("admin.settings.openaiExperimentalScheduler.subscriptionPriorityTitle")), 1),
                      e("p", u6, n(a(t)("admin.settings.openaiExperimentalScheduler.subscriptionPriorityDescription")), 1)
                    ]),
                    v(B, {
                      modelValue: s.openai_advanced_scheduler_subscription_priority_enabled,
                      "onUpdate:modelValue": i[136] || (i[136] = (o) => s.openai_advanced_scheduler_subscription_priority_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])) : T("", !0),
                  s.openai_advanced_scheduler_enabled ? (r(), d("div", m6, [
                    e("div", _6, [
                      e("label", p6, n(a(t)("admin.settings.openaiExperimentalScheduler.oauthRateTitle")), 1),
                      e("p", g6, n(a(t)("admin.settings.openaiExperimentalScheduler.oauthRateWeightedDescription")), 1)
                    ]),
                    e("div", y6, [
                      p(e("input", {
                        id: "openai-oauth-scheduling-rate-multiplier",
                        "onUpdate:modelValue": i[137] || (i[137] = (o) => s.openai_oauth_scheduling_rate_multiplier = o),
                        class: "input pr-8",
                        "data-testid": "openai-oauth-scheduling-rate-multiplier",
                        min: "0",
                        required: "",
                        step: "0.01",
                        type: "number"
                      }, null, 512), [
                        [
                          k,
                          s.openai_oauth_scheduling_rate_multiplier,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      i[272] || (i[272] = e("span", { class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400" }, "x", -1))
                    ])
                  ])) : T("", !0),
                  s.openai_advanced_scheduler_enabled ? (r(), d("div", b6, [
                    e("div", null, [
                      e("label", h6, n(a(t)("admin.settings.openaiExperimentalScheduler.weightsTitle")), 1),
                      e("p", x6, n(a(t)("admin.settings.openaiExperimentalScheduler.weightsDescription")), 1)
                    ]),
                    e("div", f6, [
                      (r(!0), d(K, null, ee(_n.value, (o) => (r(), d("label", {
                        key: o.key,
                        class: "block"
                      }, [
                        e("span", k6, n(o.label), 1),
                        p(e("input", {
                          "onUpdate:modelValue": (b) => s[o.key] = b,
                          class: "input mt-1",
                          inputmode: "decimal",
                          placeholder: o.placeholder,
                          type: "text"
                        }, null, 8, v6), [
                          [k, s[o.key]]
                        ])
                      ]))), 128))
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", w6, [
                e("div", C6, [
                  e("h2", S6, n(a(t)("admin.settings.gatewayForwarding.title")), 1),
                  e("p", A6, n(a(t)("admin.settings.gatewayForwarding.description")), 1)
                ]),
                e("div", T6, [
                  e("div", U6, [
                    e("div", null, [
                      e("label", E6, n(a(t)("admin.settings.gatewayForwarding.grokDefaultTextModel")), 1),
                      p(e("input", {
                        id: "grok-default-text-model",
                        "onUpdate:modelValue": i[138] || (i[138] = (o) => s.grok_default_text_model = o),
                        type: "text",
                        class: "input mt-2 w-full",
                        list: "grok-default-text-model-options",
                        "data-testid": "grok-default-text-model",
                        placeholder: "grok-4.5"
                      }, null, 512), [
                        [
                          k,
                          s.grok_default_text_model,
                          void 0,
                          { trim: !0 }
                        ]
                      ]),
                      i[273] || (i[273] = e("datalist", { id: "grok-default-text-model-options" }, [
                        e("option", { value: "grok-4.5" }),
                        e("option", { value: "grok-4.1-fast" }),
                        e("option", { value: "grok-4" })
                      ], -1)),
                      e("p", V6, n(a(t)("admin.settings.gatewayForwarding.grokDefaultTextModelHint")), 1)
                    ]),
                    e("div", P6, [
                      e("div", null, [
                        e("label", $6, n(a(t)("admin.settings.gatewayForwarding.grokCrossClientMap")), 1),
                        e("p", R6, n(a(t)("admin.settings.gatewayForwarding.grokCrossClientMapHint")), 1)
                      ]),
                      v(B, {
                        modelValue: s.grok_cross_client_model_map_enabled,
                        "onUpdate:modelValue": i[139] || (i[139] = (o) => s.grok_cross_client_model_map_enabled = o),
                        "data-testid": "grok-cross-client-model-map-toggle"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  e("div", L6, [
                    e("label", M6, n(a(t)("admin.settings.gatewayForwarding.grokDefaultBaseURLMode")), 1),
                    p(e("select", {
                      id: "grok-default-base-url-mode",
                      "onUpdate:modelValue": i[140] || (i[140] = (o) => s.grok_default_base_url_mode = o),
                      class: "input mt-2 w-full",
                      "data-testid": "grok-default-base-url-mode"
                    }, [
                      e("option", D6, n(a(t)("admin.settings.gatewayForwarding.grokBaseURLModeCLI")), 1),
                      e("option", O6, n(a(t)("admin.settings.gatewayForwarding.grokBaseURLModeAPI")), 1),
                      e("option", I6, n(a(t)("admin.settings.gatewayForwarding.grokBaseURLModeUSEast1")), 1),
                      e("option", z6, n(a(t)("admin.settings.gatewayForwarding.grokBaseURLModeUSWest2")), 1),
                      e("option", N6, n(a(t)("admin.settings.gatewayForwarding.grokBaseURLModeEUWest1")), 1)
                    ], 512), [
                      [xt, s.grok_default_base_url_mode]
                    ]),
                    e("p", F6, n(a(t)("admin.settings.gatewayForwarding.grokDefaultBaseURLModeHint")), 1)
                  ]),
                  e("div", H6, [
                    e("div", null, [
                      e("label", B6, n(a(t)(
                        "admin.settings.gatewayForwarding.fingerprintUnification"
                      )), 1),
                      e("p", j6, n(a(t)(
                        "admin.settings.gatewayForwarding.fingerprintUnificationHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_fingerprint_unification,
                      "onUpdate:modelValue": i[141] || (i[141] = (o) => s.enable_fingerprint_unification = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", q6, [
                    e("div", null, [
                      e("label", K6, n(a(t)("admin.settings.gatewayForwarding.metadataPassthrough")), 1),
                      e("p", W6, n(a(t)(
                        "admin.settings.gatewayForwarding.metadataPassthroughHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_metadata_passthrough,
                      "onUpdate:modelValue": i[142] || (i[142] = (o) => s.enable_metadata_passthrough = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", G6, [
                    e("div", null, [
                      e("label", Y6, n(a(t)("admin.settings.gatewayForwarding.cchSigning")), 1),
                      e("p", Q6, n(a(t)("admin.settings.gatewayForwarding.cchSigningHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_cch_signing,
                      "onUpdate:modelValue": i[143] || (i[143] = (o) => s.enable_cch_signing = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", X6, [
                    e("div", null, [
                      e("label", J6, n(a(t)(
                        "admin.settings.gatewayForwarding.claudeOAuthSystemPromptInjection"
                      )), 1),
                      e("p", Z6, n(a(t)(
                        "admin.settings.gatewayForwarding.claudeOAuthSystemPromptInjectionHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_claude_oauth_system_prompt_injection,
                      "onUpdate:modelValue": i[144] || (i[144] = (o) => s.enable_claude_oauth_system_prompt_injection = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", null, [
                    e("label", e7, n(a(t)(
                      "admin.settings.gatewayForwarding.claudeOAuthSystemPromptBlocks"
                    )), 1),
                    e("div", t7, [
                      (r(!0), d(K, null, ee(Ge.value, (o, b) => (r(), d("div", {
                        key: o.id,
                        class: "rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-dark-700 dark:bg-dark-800/60"
                      }, [
                        e("div", {
                          class: ce([
                            "flex flex-wrap items-center justify-between gap-3",
                            o.expanded && "mb-3"
                          ])
                        }, [
                          e("div", a7, [
                            e("div", n7, n(a(t)(
                              "admin.settings.gatewayForwarding.systemBlockTitle",
                              { index: b + 1 }
                            )), 1),
                            e("div", s7, n(on(o.preset)), 1)
                          ]),
                          e("div", i7, [
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm px-2",
                              title: o.expanded ? a(t)(
                                "admin.settings.gatewayForwarding.systemBlockHide"
                              ) : a(t)(
                                "admin.settings.gatewayForwarding.systemBlockShow"
                              ),
                              "aria-label": o.expanded ? a(t)(
                                "admin.settings.gatewayForwarding.systemBlockHide"
                              ) : a(t)(
                                "admin.settings.gatewayForwarding.systemBlockShow"
                              ),
                              onClick: (g) => Lt(b)
                            }, [
                              v(Ae, {
                                name: o.expanded ? "eyeOff" : "eye",
                                size: "xs"
                              }, null, 8, ["name"])
                            ], 8, o7),
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm px-2",
                              disabled: b === 0,
                              onClick: (g) => Tt(b, -1)
                            }, [
                              v(Ae, {
                                name: "arrowUp",
                                size: "xs"
                              })
                            ], 8, l7),
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm px-2",
                              disabled: b === Ge.value.length - 1,
                              onClick: (g) => Tt(b, 1)
                            }, [
                              v(Ae, {
                                name: "arrowDown",
                                size: "xs"
                              })
                            ], 8, r7),
                            v(B, {
                              modelValue: o.enabled,
                              "onUpdate:modelValue": (g) => o.enabled = g
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            e("button", {
                              type: "button",
                              class: "btn btn-secondary btn-sm px-2 text-red-600 hover:text-red-700 dark:text-red-400",
                              onClick: (g) => jt(b)
                            }, [
                              v(Ae, {
                                name: "trash",
                                size: "xs"
                              })
                            ], 8, d7)
                          ])
                        ], 2),
                        p(e("div", null, [
                          e("div", c7, [
                            e("div", null, [
                              e("label", u7, n(a(t)(
                                "admin.settings.gatewayForwarding.systemBlockPreset"
                              )), 1),
                              v(Ke, {
                                modelValue: o.preset,
                                "onUpdate:modelValue": (g) => o.preset = g,
                                options: Jt.value,
                                onChange: (g) => ln(b, g)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                            ]),
                            e("div", null, [
                              e("label", m7, n(a(t)(
                                "admin.settings.gatewayForwarding.systemBlockType"
                              )), 1),
                              v(Ke, {
                                modelValue: o.type,
                                "onUpdate:modelValue": (g) => o.type = g,
                                options: nn.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ])
                          ]),
                          e("div", _7, [
                            e("label", p7, n(a(t)("admin.settings.gatewayForwarding.systemBlockText")), 1),
                            p(e("textarea", {
                              "onUpdate:modelValue": (g) => o.text = g,
                              rows: "6",
                              class: "input w-full resize-y font-mono text-xs leading-5",
                              onInput: (g) => rn(o)
                            }, null, 40, g7), [
                              [k, o.text]
                            ])
                          ]),
                          e("div", y7, [
                            e("div", b7, [
                              e("div", null, [
                                e("label", h7, n(a(t)(
                                  "admin.settings.gatewayForwarding.systemBlockCacheControl"
                                )), 1)
                              ]),
                              v(B, {
                                modelValue: o.cacheControlEnabled,
                                "onUpdate:modelValue": (g) => o.cacheControlEnabled = g
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            o.cacheControlEnabled ? (r(), d("div", x7, [
                              v(Ke, {
                                modelValue: o.cacheControlTTL,
                                "onUpdate:modelValue": (g) => o.cacheControlTTL = g,
                                options: sn.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ])) : T("", !0)
                          ])
                        ], 512), [
                          [rt, o.expanded]
                        ])
                      ]))), 128))
                    ]),
                    e("div", f7, [
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        onClick: Pa
                      }, [
                        v(Ae, {
                          name: "plus",
                          size: "xs"
                        }),
                        q(" " + n(a(t)("admin.settings.gatewayForwarding.addSystemBlock")), 1)
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        onClick: dn
                      }, [
                        v(Ae, {
                          name: "refresh",
                          size: "xs"
                        }),
                        q(" " + n(a(t)("admin.settings.gatewayForwarding.resetSystemBlocks")), 1)
                      ])
                    ]),
                    e("p", k7, n(a(t)(
                      "admin.settings.gatewayForwarding.claudeOAuthSystemPromptBlocksHint"
                    )), 1)
                  ]),
                  e("div", v7, [
                    e("div", null, [
                      e("label", w7, n(a(t)(
                        "admin.settings.gatewayForwarding.anthropicCacheTTL1hInjection"
                      )), 1),
                      e("p", C7, n(a(t)(
                        "admin.settings.gatewayForwarding.anthropicCacheTTL1hInjectionHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_anthropic_cache_ttl_1h_injection,
                      "onUpdate:modelValue": i[145] || (i[145] = (o) => s.enable_anthropic_cache_ttl_1h_injection = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", S7, [
                    e("div", null, [
                      e("label", A7, n(a(t)(
                        "admin.settings.gatewayForwarding.rewriteMessageCacheControl"
                      )), 1),
                      e("p", T7, n(a(t)(
                        "admin.settings.gatewayForwarding.rewriteMessageCacheControlHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.rewrite_message_cache_control,
                      "onUpdate:modelValue": i[146] || (i[146] = (o) => s.rewrite_message_cache_control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", U7, [
                    e("div", null, [
                      e("label", E7, n(a(t)(
                        "admin.settings.gatewayForwarding.clientDatelineNormalization"
                      )), 1),
                      e("p", V7, n(a(t)(
                        "admin.settings.gatewayForwarding.clientDatelineNormalizationHint"
                      )), 1)
                    ]),
                    v(B, {
                      modelValue: s.enable_client_dateline_normalization,
                      "onUpdate:modelValue": i[147] || (i[147] = (o) => s.enable_client_dateline_normalization = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", null, [
                    e("label", P7, n(a(t)(
                      "admin.settings.gatewayForwarding.antigravityUserAgentVersion"
                    )), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[148] || (i[148] = (o) => s.antigravity_user_agent_version = o),
                      type: "text",
                      class: "input max-w-xs font-mono text-sm",
                      placeholder: a(t)(
                        "admin.settings.gatewayForwarding.antigravityUserAgentVersionPlaceholder"
                      )
                    }, null, 8, $7), [
                      [k, s.antigravity_user_agent_version]
                    ]),
                    e("p", R7, n(a(t)(
                      "admin.settings.gatewayForwarding.antigravityUserAgentVersionHint"
                    )), 1)
                  ]),
                  e("div", null, [
                    e("label", L7, n(a(t)(
                      "admin.settings.gatewayForwarding.openaiCodexUserAgent"
                    )), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[149] || (i[149] = (o) => s.openai_codex_user_agent = o),
                      type: "text",
                      class: "input w-full font-mono text-sm",
                      placeholder: a(t)(
                        "admin.settings.gatewayForwarding.openaiCodexUserAgentPlaceholder"
                      )
                    }, null, 8, M7), [
                      [k, s.openai_codex_user_agent]
                    ]),
                    e("p", D7, n(a(t)(
                      "admin.settings.gatewayForwarding.openaiCodexUserAgentHint"
                    )), 1)
                  ]),
                  e("div", null, [
                    e("label", O7, n(a(t)(
                      "admin.settings.gatewayForwarding.openaiCodexClientVersion"
                    )), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[150] || (i[150] = (o) => s.openai_codex_client_version = o),
                      type: "text",
                      class: "input w-full font-mono text-sm",
                      placeholder: a(t)(
                        "admin.settings.gatewayForwarding.openaiCodexClientVersionPlaceholder"
                      )
                    }, null, 8, I7), [
                      [k, s.openai_codex_client_version]
                    ]),
                    e("p", z7, n(a(t)(
                      "admin.settings.gatewayForwarding.openaiCodexClientVersionHint"
                    )), 1)
                  ]),
                  e("div", N7, [
                    e("div", null, [
                      e("label", F7, n(a(t)(
                        "admin.settings.gatewayForwarding.openaiCodexVersionAutoSync"
                      )), 1),
                      e("p", H7, n(a(t)(
                        "admin.settings.gatewayForwarding.openaiCodexVersionAutoSyncHint"
                      )), 1),
                      Ws.value ? (r(), d("p", B7, n(Ws.value), 1)) : T("", !0)
                    ]),
                    v(B, {
                      modelValue: s.openai_codex_version_auto_sync_enabled,
                      "onUpdate:modelValue": i[151] || (i[151] = (o) => s.openai_codex_version_auto_sync_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              e("div", j7, [
                e("div", q7, [
                  e("h2", K7, n(a(t)("admin.settings.webSearchEmulation.title")), 1),
                  e("p", W7, n(a(t)("admin.settings.webSearchEmulation.description")), 1)
                ]),
                e("div", G7, [
                  e("div", Y7, [
                    e("div", null, [
                      e("label", Q7, n(a(t)("admin.settings.webSearchEmulation.enabled")), 1),
                      e("p", X7, n(a(t)("admin.settings.webSearchEmulation.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: je.enabled,
                      "onUpdate:modelValue": i[152] || (i[152] = (o) => je.enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  je.enabled ? (r(), d("div", J7, [
                    e("div", Z7, [
                      e("label", eC, n(a(t)("admin.settings.webSearchEmulation.providers")), 1),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        onClick: Bn
                      }, n(a(t)("admin.settings.webSearchEmulation.addProvider")), 1)
                    ]),
                    je.providers.length === 0 ? (r(), d("div", tC, n(a(t)("admin.settings.webSearchEmulation.noProviders")), 1)) : T("", !0),
                    (r(!0), d(K, null, ee(je.providers, (o, b) => (r(), d("div", {
                      key: b,
                      class: "rounded-lg border border-gray-200 dark:border-dark-600"
                    }, [
                      e("div", {
                        class: "flex cursor-pointer items-center justify-between px-4 py-3",
                        onClick: (g) => Hn(b)
                      }, [
                        e("div", nC, [
                          (r(), d("svg", {
                            class: ce(["h-4 w-4 text-gray-400 transition-transform", { "rotate-90": mt[b] }]),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [...i[274] || (i[274] = [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 5l7 7-7 7"
                            }, null, -1)
                          ])], 2)),
                          v(Ke, {
                            modelValue: o.type,
                            "onUpdate:modelValue": (g) => o.type = g,
                            options: [
                              { value: "brave", label: "Brave Search" },
                              { value: "tavily", label: "Tavily" }
                            ],
                            class: "w-36",
                            onClick: i[153] || (i[153] = sa(() => {
                            }, ["stop"]))
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          e("span", sC, n(o.quota_used ?? 0) + " / " + n(o.quota_limit != null && o.quota_limit > 0 ? o.quota_limit : "∞"), 1),
                          !mt[b] && o.api_key_configured ? (r(), d("span", iC, n(a(t)(
                            "admin.settings.webSearchEmulation.apiKeyConfigured"
                          )), 1)) : T("", !0)
                        ]),
                        e("button", {
                          type: "button",
                          class: "text-red-500 hover:text-red-700 text-xs",
                          onClick: sa((g) => yn(b), ["stop"])
                        }, n(a(t)("admin.settings.webSearchEmulation.removeProvider")), 9, oC)
                      ], 8, aC),
                      mt[b] ? (r(), d("div", lC, [
                        e("div", null, [
                          e("label", rC, n(a(t)("admin.settings.webSearchEmulation.apiKey")), 1),
                          e("div", dC, [
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.api_key = g,
                              type: _t[b] ? "text" : "password",
                              class: ce([
                                "input w-full text-sm",
                                o.api_key || o.api_key_configured ? "pr-16" : ""
                              ]),
                              placeholder: o.api_key_configured ? "••••••••" : a(t)(
                                "admin.settings.webSearchEmulation.apiKeyPlaceholder"
                              )
                            }, null, 10, cC), [
                              [ji, o.api_key]
                            ]),
                            o.api_key || o.api_key_configured ? (r(), d("div", uC, [
                              e("button", {
                                type: "button",
                                class: "rounded p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                                title: _t[b] ? a(t)(
                                  "admin.settings.webSearchEmulation.hideApiKey"
                                ) : a(t)(
                                  "admin.settings.webSearchEmulation.showApiKey"
                                ),
                                onClick: (g) => _t[b] = !_t[b]
                              }, [
                                _t[b] ? (r(), d("svg", pC, [...i[276] || (i[276] = [
                                  e("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                  }, null, -1)
                                ])])) : (r(), d("svg", _C, [...i[275] || (i[275] = [
                                  e("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  }, null, -1),
                                  e("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  }, null, -1)
                                ])]))
                              ], 8, mC),
                              e("button", {
                                type: "button",
                                class: ce(["rounded p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300", {
                                  "opacity-30 cursor-not-allowed": !o.api_key
                                }]),
                                title: a(t)("admin.settings.webSearchEmulation.copyApiKey"),
                                disabled: !o.api_key,
                                onClick: (g) => Kn(b)
                              }, [...i[277] || (i[277] = [
                                e("svg", {
                                  class: "h-4 w-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  e("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  })
                                ], -1)
                              ])], 10, gC)
                            ])) : T("", !0)
                          ])
                        ]),
                        e("div", yC, [
                          e("div", null, [
                            e("label", bC, n(a(t)("admin.settings.webSearchEmulation.quotaLimit")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.quota_limit = g,
                              type: "number",
                              min: "1",
                              class: "input text-sm",
                              placeholder: "∞"
                            }, null, 8, hC), [
                              [k, o.quota_limit]
                            ]),
                            e("p", xC, n(a(t)(
                              "admin.settings.webSearchEmulation.quotaLimitHint"
                            )), 1)
                          ]),
                          e("div", null, [
                            e("label", fC, n(a(t)("admin.settings.webSearchEmulation.subscribedAt")), 1),
                            e("input", {
                              value: jn(o.subscribed_at),
                              type: "date",
                              class: "input text-sm",
                              onInput: (g) => o.subscribed_at = qn(
                                g.target.value
                              )
                            }, null, 40, kC),
                            e("p", vC, n(a(t)(
                              "admin.settings.webSearchEmulation.subscribedAtHint"
                            )), 1)
                          ])
                        ]),
                        e("div", wC, [
                          e("span", CC, n(a(t)("admin.settings.webSearchEmulation.quotaUsage")) + ":", 1),
                          o.quota_limit != null && o.quota_limit > 0 ? (r(), d("div", SC, [
                            e("div", {
                              class: ce([
                                "h-full rounded-full transition-all",
                                Oa(o) > 90 ? "bg-red-500" : Oa(o) > 70 ? "bg-zo-alert-500" : "bg-zo-signal-500"
                              ]),
                              style: Ml({
                                width: Math.min(Oa(o), 100) + "%"
                              })
                            }, null, 6)
                          ])) : (r(), d("div", AC)),
                          e("span", TC, n(o.quota_used ?? 0) + " / " + n(o.quota_limit != null && o.quota_limit > 0 ? o.quota_limit : "∞"), 1),
                          (o.quota_used ?? 0) > 0 ? (r(), d("button", {
                            key: 2,
                            type: "button",
                            class: "text-xs text-primary-600 hover:text-primary-700",
                            onClick: (g) => bn(b)
                          }, n(a(t)("admin.settings.webSearchEmulation.resetUsage")), 9, UC)) : T("", !0)
                        ]),
                        e("div", EC, [
                          e("div", VC, [
                            e("label", PC, n(a(t)("admin.settings.webSearchEmulation.proxy")), 1),
                            v(Gl, {
                              modelValue: o.proxy_id,
                              "onUpdate:modelValue": (g) => o.proxy_id = g,
                              proxies: gn.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "proxies"])
                          ]),
                          e("button", {
                            type: "button",
                            class: "btn btn-secondary btn-sm whitespace-nowrap",
                            onClick: i[154] || (i[154] = (g) => Da())
                          }, n(a(t)("admin.settings.webSearchEmulation.test")), 1)
                        ])
                      ])) : T("", !0)
                    ]))), 128))
                  ])) : T("", !0)
                ])
              ]),
              qt.value ? (r(), d("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
                onClick: i[159] || (i[159] = sa((o) => qt.value = !1, ["self"]))
              }, [
                e("div", $C, [
                  e("h3", RC, n(a(t)("admin.settings.webSearchEmulation.testResultTitle")), 1),
                  e("div", LC, [
                    p(e("input", {
                      "onUpdate:modelValue": i[155] || (i[155] = (o) => Et.value = o),
                      type: "text",
                      class: "input flex-1 text-sm",
                      placeholder: a(t)("admin.settings.webSearchEmulation.testDefaultQuery"),
                      onKeyup: i[156] || (i[156] = Dl((o) => Ia(), ["enter"]))
                    }, null, 40, MC), [
                      [k, Et.value]
                    ]),
                    e("button", {
                      type: "button",
                      class: "btn btn-primary btn-sm",
                      disabled: ta.value,
                      onClick: i[157] || (i[157] = (o) => Ia())
                    }, n(ta.value ? a(t)("admin.settings.webSearchEmulation.testing") : a(t)("admin.settings.webSearchEmulation.test")), 9, DC)
                  ]),
                  wt.value ? (r(), d("div", OC, [
                    e("p", IC, n(a(t)("admin.settings.webSearchEmulation.testResultProvider")) + ": " + n(wt.value.provider), 1),
                    wt.value.results.length === 0 ? (r(), d("div", zC, n(a(t)("admin.settings.webSearchEmulation.testNoResults")), 1)) : T("", !0),
                    (r(!0), d(K, null, ee(wt.value.results, (o, b) => (r(), d("div", {
                      key: b,
                      class: "mt-2 border-t border-gray-200 pt-2 first:mt-0 first:border-0 first:pt-0 dark:border-dark-600"
                    }, [
                      e("a", {
                        href: o.url,
                        target: "_blank",
                        class: "text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                      }, n(o.title), 9, NC),
                      e("p", FC, n(o.snippet), 1)
                    ]))), 128))
                  ])) : T("", !0),
                  e("div", HC, [
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary btn-sm",
                      onClick: i[158] || (i[158] = (o) => qt.value = !1)
                    }, n(a(t)("common.close")), 1)
                  ])
                ])
              ])) : T("", !0),
              e("div", BC, [
                e("div", jC, [
                  e("h2", qC, n(a(t)("admin.settings.usageRecords.title")), 1),
                  e("p", KC, n(a(t)("admin.settings.usageRecords.description")), 1)
                ]),
                e("div", WC, [
                  e("div", GC, [
                    e("div", null, [
                      e("label", YC, n(a(t)("admin.settings.user_error_view.label")), 1),
                      e("p", QC, n(a(t)("admin.settings.user_error_view.description")), 1)
                    ]),
                    e("label", XC, [
                      p(e("input", {
                        "onUpdate:modelValue": i[160] || (i[160] = (o) => s.allow_user_view_error_requests = o),
                        type: "checkbox"
                      }, null, 512), [
                        [tt, s.allow_user_view_error_requests]
                      ]),
                      i[278] || (i[278] = e("span", { class: "toggle-slider" }, null, -1))
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "gateway"]
          ]),
          p(v(lg, null, {
            default: Re(() => [
              e("div", JC, [
                e("div", ZC, [
                  e("h2", e9, n(a(t)("admin.settings.site.title")), 1),
                  e("p", t9, n(a(t)("admin.settings.site.description")), 1)
                ]),
                e("div", a9, [
                  e("div", n9, [
                    e("div", null, [
                      e("h3", s9, n(a(t)("admin.settings.site.backendMode")), 1),
                      e("p", i9, n(a(t)("admin.settings.site.backendModeDescription")), 1)
                    ]),
                    v(B, {
                      modelValue: s.backend_mode_enabled,
                      "onUpdate:modelValue": i[161] || (i[161] = (o) => s.backend_mode_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", o9, [
                    e("div", null, [
                      e("label", l9, n(a(t)("admin.settings.site.siteName")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[162] || (i[162] = (o) => s.site_name = o),
                        type: "text",
                        class: "input",
                        placeholder: a(t)("admin.settings.site.siteNamePlaceholder")
                      }, null, 8, r9), [
                        [k, s.site_name]
                      ]),
                      e("p", d9, n(a(t)("admin.settings.site.siteNameHint")), 1)
                    ]),
                    e("div", null, [
                      e("label", c9, n(a(t)("admin.settings.site.siteSubtitle")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[163] || (i[163] = (o) => s.site_subtitle = o),
                        type: "text",
                        class: "input",
                        placeholder: a(t)("admin.settings.site.siteSubtitlePlaceholder")
                      }, null, 8, u9), [
                        [k, s.site_subtitle]
                      ]),
                      e("p", m9, n(a(t)("admin.settings.site.siteSubtitleHint")), 1)
                    ])
                  ]),
                  e("div", _9, [
                    e("div", p9, [
                      e("div", null, [
                        e("h3", g9, n(a(t)("admin.settings.site.landingNotice.title")), 1),
                        e("p", y9, n(a(t)("admin.settings.site.landingNotice.description")), 1)
                      ]),
                      v(B, {
                        modelValue: s.landing_notice_enabled,
                        "onUpdate:modelValue": i[164] || (i[164] = (o) => s.landing_notice_enabled = o),
                        "data-testid": "landing-notice-toggle",
                        "aria-label": a(t)("admin.settings.site.landingNotice.enabled")
                      }, null, 8, ["modelValue", "aria-label"])
                    ]),
                    e("p", b9, n(a(t)("admin.settings.site.landingNotice.enabledHint")), 1),
                    e("div", h9, [
                      e("div", null, [
                        e("label", x9, n(a(t)("admin.settings.site.landingNotice.text")), 1),
                        p(e("input", {
                          id: "landing-notice-text",
                          "onUpdate:modelValue": i[165] || (i[165] = (o) => s.landing_notice_text = o),
                          type: "text",
                          maxlength: "160",
                          class: "input text-sm",
                          "data-testid": "landing-notice-text",
                          placeholder: a(t)("admin.settings.site.landingNotice.textPlaceholder"),
                          "aria-describedby": "landing-notice-text-help"
                        }, null, 8, f9), [
                          [k, s.landing_notice_text]
                        ]),
                        e("div", k9, [
                          e("span", null, n(a(t)("admin.settings.site.landingNotice.textHint")), 1),
                          e("span", v9, n(s.landing_notice_text.length) + "/160", 1)
                        ])
                      ]),
                      e("div", null, [
                        e("label", w9, n(a(t)("admin.settings.site.landingNotice.url")), 1),
                        p(e("input", {
                          id: "landing-notice-url",
                          "onUpdate:modelValue": i[166] || (i[166] = (o) => s.landing_notice_url = o),
                          type: "text",
                          inputmode: "url",
                          class: "input font-mono text-sm",
                          "data-testid": "landing-notice-url",
                          placeholder: a(t)("admin.settings.site.landingNotice.urlPlaceholder"),
                          "aria-describedby": "landing-notice-url-help",
                          "aria-invalid": ot.value
                        }, null, 8, C9), [
                          [k, s.landing_notice_url]
                        ]),
                        e("p", {
                          id: "landing-notice-url-help",
                          class: ce([
                            "mt-1.5 text-xs",
                            ot.value ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"
                          ])
                        }, n(a(t)(
                          ot.value ? "admin.settings.site.landingNotice.urlInvalid" : "admin.settings.site.landingNotice.urlHint"
                        )), 3)
                      ])
                    ])
                  ]),
                  e("div", S9, [
                    e("div", null, [
                      e("h3", A9, n(a(t)("admin.settings.site.navigation.title")), 1),
                      e("p", T9, n(a(t)("admin.settings.site.navigation.description")), 1)
                    ]),
                    e("div", U9, [
                      e("div", E9, [
                        e("div", null, [
                          e("p", V9, n(a(t)("admin.settings.site.navigation.profile")), 1),
                          e("p", P9, n(a(t)("admin.settings.site.navigation.profileHint")), 1)
                        ]),
                        v(B, {
                          modelValue: s.profile_navigation_enabled,
                          "onUpdate:modelValue": i[167] || (i[167] = (o) => s.profile_navigation_enabled = o),
                          "data-testid": "profile-navigation-toggle"
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", $9, [
                        e("div", null, [
                          e("p", R9, n(a(t)("admin.settings.site.navigation.subscriptions")), 1),
                          e("p", L9, n(a(t)("admin.settings.site.navigation.subscriptionsHint")), 1)
                        ]),
                        v(B, {
                          modelValue: s.subscription_navigation_enabled,
                          "onUpdate:modelValue": i[168] || (i[168] = (o) => s.subscription_navigation_enabled = o),
                          "data-testid": "subscription-navigation-toggle"
                        }, null, 8, ["modelValue"])
                      ]),
                      e("div", M9, [
                        e("div", null, [
                          e("p", D9, n(a(t)("admin.settings.site.navigation.modelPlaza")), 1),
                          e("p", O9, n(a(t)("admin.settings.site.navigation.modelPlazaHint")), 1)
                        ]),
                        p(e("select", {
                          "onUpdate:modelValue": i[169] || (i[169] = (o) => s.model_plaza_placement = o),
                          class: "input text-sm",
                          "data-testid": "model-plaza-placement"
                        }, [
                          e("option", I9, n(a(t)("admin.settings.site.navigation.header")), 1),
                          e("option", z9, n(a(t)("admin.settings.site.navigation.sidebar")), 1)
                        ], 512), [
                          [xt, s.model_plaza_placement]
                        ])
                      ]),
                      e("div", N9, [
                        e("details", F9, [
                          e("summary", H9, n(a(t)("admin.settings.site.navigation.userOrder")), 1),
                          e("p", B9, n(a(t)("admin.settings.site.navigation.userOrderHint")), 1),
                          e("div", j9, [
                            (r(!0), d(K, null, ee(Ut.value, (o, b) => (r(), d("div", {
                              key: o.path,
                              "data-sidebar-path": o.path,
                              class: "flex min-h-10 items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 dark:bg-dark-800"
                            }, [
                              e("span", K9, n(b + 1), 1),
                              e("span", W9, n(o.label), 1),
                              e("div", G9, [
                                e("button", {
                                  type: "button",
                                  class: "btn-ghost btn-icon h-8 w-8",
                                  "data-direction": "up",
                                  "aria-label": a(t)("admin.settings.site.navigation.moveUp"),
                                  disabled: b === 0,
                                  onClick: (g) => ga("user", b, -1)
                                }, "↑", 8, Y9),
                                e("button", {
                                  type: "button",
                                  class: "btn-ghost btn-icon h-8 w-8",
                                  "data-direction": "down",
                                  "aria-label": a(t)("admin.settings.site.navigation.moveDown"),
                                  disabled: b === Ut.value.length - 1,
                                  onClick: (g) => ga("user", b, 1)
                                }, "↓", 8, Q9)
                              ])
                            ], 8, q9))), 128))
                          ])
                        ]),
                        e("details", X9, [
                          e("summary", J9, n(a(t)("admin.settings.site.navigation.adminOrder")), 1),
                          e("p", Z9, n(a(t)("admin.settings.site.navigation.adminOrderHint")), 1),
                          e("div", eS, [
                            (r(!0), d(K, null, ee(pa.value, (o, b) => (r(), d("div", {
                              key: o.path,
                              "data-sidebar-path": o.path,
                              class: "flex min-h-10 items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 dark:bg-dark-800"
                            }, [
                              e("span", aS, n(b + 1), 1),
                              e("span", nS, n(o.label), 1),
                              e("div", sS, [
                                e("button", {
                                  type: "button",
                                  class: "btn-ghost btn-icon h-8 w-8",
                                  "data-direction": "up",
                                  "aria-label": a(t)("admin.settings.site.navigation.moveUp"),
                                  disabled: b === 0,
                                  onClick: (g) => ga("admin", b, -1)
                                }, "↑", 8, iS),
                                e("button", {
                                  type: "button",
                                  class: "btn-ghost btn-icon h-8 w-8",
                                  "data-direction": "down",
                                  "aria-label": a(t)("admin.settings.site.navigation.moveDown"),
                                  disabled: b === pa.value.length - 1,
                                  onClick: (g) => ga("admin", b, 1)
                                }, "↓", 8, oS)
                              ])
                            ], 8, tS))), 128))
                          ])
                        ])
                      ])
                    ])
                  ]),
                  e("div", lS, [
                    e("div", rS, [
                      e("div", null, [
                        e("h3", dS, n(a(t)("admin.settings.site.headerNavigation.title")), 1),
                        e("p", cS, n(a(t)("admin.settings.site.headerNavigation.description")), 1)
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm shrink-0",
                        "data-testid": "header-navigation-add",
                        onClick: Ze
                      }, [
                        v(Ae, {
                          name: "plus",
                          size: "sm",
                          class: "mr-1.5"
                        }),
                        q(" " + n(a(t)("admin.settings.site.headerNavigation.add")), 1)
                      ])
                    ]),
                    ua.value.length === 0 ? (r(), d("div", uS, n(a(t)("admin.settings.site.headerNavigation.empty")), 1)) : (r(), d("div", mS, [
                      (r(!0), d(K, null, ee(ua.value, (o, b) => (r(), d("div", {
                        key: o.item.id || o.index,
                        class: "rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                      }, [
                        e("div", _S, [
                          e("span", pS, n(a(t)("admin.settings.site.headerNavigation.itemLabel", {
                            n: b + 1
                          })), 1),
                          e("div", gS, [
                            b > 0 ? (r(), d("button", {
                              key: 0,
                              type: "button",
                              class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-700",
                              title: a(t)("admin.settings.customMenu.moveUp"),
                              onClick: (g) => Hs(b, -1)
                            }, [
                              v(Ae, {
                                name: "chevronUp",
                                size: "sm"
                              })
                            ], 8, yS)) : T("", !0),
                            b < ua.value.length - 1 ? (r(), d("button", {
                              key: 1,
                              type: "button",
                              class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-700",
                              title: a(t)("admin.settings.customMenu.moveDown"),
                              onClick: (g) => Hs(b, 1)
                            }, [
                              v(Ae, {
                                name: "chevronDown",
                                size: "sm"
                              })
                            ], 8, bS)) : T("", !0),
                            e("button", {
                              type: "button",
                              class: "rounded p-1 text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20",
                              title: a(t)("admin.settings.site.headerNavigation.remove"),
                              onClick: (g) => Ns(o.index)
                            }, [
                              v(Ae, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, hS)
                          ])
                        ]),
                        e("div", xS, [
                          e("div", null, [
                            e("label", fS, n(a(t)("admin.settings.site.headerNavigation.name")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.item.label = g,
                              type: "text",
                              maxlength: "50",
                              class: "input text-sm",
                              "data-testid": `header-navigation-name-${b}`,
                              placeholder: a(t)("admin.settings.site.headerNavigation.namePlaceholder")
                            }, null, 8, kS), [
                              [k, o.item.label]
                            ])
                          ]),
                          e("div", null, [
                            e("label", vS, n(a(t)("admin.settings.site.headerNavigation.visibility")), 1),
                            p(e("select", {
                              "onUpdate:modelValue": (g) => o.item.visibility = g,
                              class: "input text-sm",
                              "data-testid": `header-navigation-visibility-${b}`
                            }, [
                              e("option", CS, n(a(t)("admin.settings.customMenu.visibilityAll")), 1),
                              e("option", SS, n(a(t)("admin.settings.customMenu.visibilityUser")), 1),
                              e("option", AS, n(a(t)("admin.settings.customMenu.visibilityAdmin")), 1)
                            ], 8, wS), [
                              [xt, o.item.visibility]
                            ])
                          ]),
                          e("div", TS, [
                            e("label", US, n(a(t)("admin.settings.site.headerNavigation.dialogDescription")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.item.qr_description = g,
                              type: "text",
                              maxlength: "240",
                              class: "input text-sm",
                              "data-testid": `header-navigation-description-${b}`,
                              placeholder: a(t)("admin.settings.site.headerNavigation.dialogDescriptionPlaceholder")
                            }, null, 8, ES), [
                              [k, o.item.qr_description]
                            ])
                          ]),
                          e("div", VS, [
                            e("label", PS, n(a(t)("admin.settings.site.headerNavigation.qrImage")), 1),
                            v(In, {
                              "model-value": o.item.qr_image || "",
                              mode: "image",
                              "data-testid": `header-navigation-qr-upload-${b}`,
                              "accepted-mime-types": ["image/png", "image/jpeg", "image/webp"],
                              "upload-label": a(t)("admin.settings.site.headerNavigation.selectQr"),
                              "remove-label": a(t)("admin.settings.site.headerNavigation.removeQr"),
                              hint: a(t)("admin.settings.site.headerNavigation.qrHint"),
                              "max-size": 300 * 1024,
                              "onUpdate:modelValue": (g) => Sn(o.index, g)
                            }, null, 8, ["model-value", "data-testid", "upload-label", "remove-label", "hint", "onUpdate:modelValue"])
                          ]),
                          e("div", $S, [
                            e("label", RS, n(a(t)("admin.settings.customMenu.iconSvg")), 1),
                            v(Pi, {
                              modelValue: o.item.icon_svg,
                              "onUpdate:modelValue": (g) => o.item.icon_svg = g,
                              "data-testid": `header-navigation-icon-${b}`
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "data-testid"])
                          ])
                        ])
                      ]))), 128))
                    ])),
                    e("div", LS, [
                      e("p", MS, n(a(t)("admin.settings.site.headerNavigation.hint")), 1)
                    ])
                  ]),
                  e("div", null, [
                    e("label", DS, n(a(t)("admin.settings.site.apiBaseUrl")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[170] || (i[170] = (o) => s.api_base_url = o),
                      type: "text",
                      class: "input font-mono text-sm",
                      placeholder: a(t)("admin.settings.site.apiBaseUrlPlaceholder")
                    }, null, 8, OS), [
                      [k, s.api_base_url]
                    ]),
                    e("p", IS, n(a(t)("admin.settings.site.apiBaseUrlHint")), 1)
                  ]),
                  e("div", zS, [
                    e("h3", NS, n(a(t)("admin.settings.site.tablePreferencesTitle")), 1),
                    e("p", FS, n(a(t)("admin.settings.site.tablePreferencesDescription")), 1),
                    e("div", HS, [
                      e("div", null, [
                        e("label", BS, n(a(t)("admin.settings.site.tableDefaultPageSize")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[171] || (i[171] = (o) => s.table_default_page_size = o),
                          type: "number",
                          min: "5",
                          max: "1000",
                          step: "1",
                          class: "input w-40"
                        }, null, 512), [
                          [
                            k,
                            s.table_default_page_size,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", jS, n(a(t)("admin.settings.site.tableDefaultPageSizeHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", qS, n(a(t)("admin.settings.site.tablePageSizeOptions")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[172] || (i[172] = (o) => Ve.value = o),
                          type: "text",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.site.tablePageSizeOptionsPlaceholder")
                        }, null, 8, KS), [
                          [k, Ve.value]
                        ]),
                        e("p", WS, n(a(t)("admin.settings.site.tablePageSizeOptionsHint")), 1)
                      ])
                    ])
                  ]),
                  e("div", null, [
                    e("label", GS, n(a(t)("admin.settings.site.customEndpoints.title")), 1),
                    e("p", YS, n(a(t)("admin.settings.site.customEndpoints.description")), 1),
                    e("div", QS, [
                      (r(!0), d(K, null, ee(s.custom_endpoints, (o, b) => (r(), d("div", {
                        key: b,
                        class: "rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                      }, [
                        e("div", XS, [
                          e("span", JS, n(a(t)("admin.settings.site.customEndpoints.itemLabel", {
                            n: b + 1
                          })), 1),
                          e("button", {
                            type: "button",
                            class: "rounded p-1 text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20",
                            onClick: (g) => _o(b)
                          }, [...i[279] || (i[279] = [
                            e("svg", {
                              class: "h-4 w-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              })
                            ], -1)
                          ])], 8, ZS)
                        ]),
                        e("div", eA, [
                          e("div", null, [
                            e("label", tA, n(a(t)("admin.settings.site.customEndpoints.name")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.name = g,
                              type: "text",
                              class: "input text-sm",
                              placeholder: a(t)(
                                "admin.settings.site.customEndpoints.namePlaceholder"
                              )
                            }, null, 8, aA), [
                              [k, o.name]
                            ])
                          ]),
                          e("div", null, [
                            e("label", nA, n(a(t)("admin.settings.site.customEndpoints.endpointUrl")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.endpoint = g,
                              type: "url",
                              class: "input font-mono text-sm",
                              placeholder: a(t)(
                                "admin.settings.site.customEndpoints.endpointUrlPlaceholder"
                              )
                            }, null, 8, sA), [
                              [k, o.endpoint]
                            ])
                          ]),
                          e("div", iA, [
                            e("label", oA, n(a(t)(
                              "admin.settings.site.customEndpoints.descriptionLabel"
                            )), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.description = g,
                              type: "text",
                              class: "input text-sm",
                              placeholder: a(t)(
                                "admin.settings.site.customEndpoints.descriptionPlaceholder"
                              )
                            }, null, 8, lA), [
                              [k, o.description]
                            ])
                          ])
                        ])
                      ]))), 128))
                    ]),
                    e("button", {
                      type: "button",
                      class: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-4 py-2.5 text-sm text-gray-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
                      onClick: mo
                    }, [
                      i[280] || (i[280] = e("svg", {
                        class: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 4v16m8-8H4"
                        })
                      ], -1)),
                      q(" " + n(a(t)("admin.settings.site.customEndpoints.add")), 1)
                    ])
                  ]),
                  e("div", null, [
                    e("label", rA, n(a(t)("admin.settings.site.contactInfo")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[173] || (i[173] = (o) => s.contact_info = o),
                      type: "text",
                      class: "input",
                      placeholder: a(t)("admin.settings.site.contactInfoPlaceholder")
                    }, null, 8, dA), [
                      [k, s.contact_info]
                    ]),
                    e("p", cA, n(a(t)("admin.settings.site.contactInfoHint")), 1)
                  ]),
                  e("div", null, [
                    e("label", uA, n(a(t)("admin.settings.site.docUrl")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[174] || (i[174] = (o) => s.doc_url = o),
                      type: "url",
                      class: "input font-mono text-sm",
                      placeholder: a(t)("admin.settings.site.docUrlPlaceholder")
                    }, null, 8, mA), [
                      [k, s.doc_url]
                    ]),
                    e("p", _A, n(a(t)("admin.settings.site.docUrlHint")), 1)
                  ]),
                  e("div", null, [
                    e("label", pA, n(a(t)("admin.settings.site.landingTutorialUrl")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[175] || (i[175] = (o) => s.landing_tutorial_url = o),
                      type: "text",
                      class: "input",
                      "data-testid": "landing-tutorial-url",
                      placeholder: a(t)("admin.settings.site.landingTutorialUrlPlaceholder")
                    }, null, 8, gA), [
                      [k, s.landing_tutorial_url]
                    ]),
                    e("p", yA, n(a(t)("admin.settings.site.landingTutorialUrlHint")), 1)
                  ]),
                  e("div", null, [
                    e("label", bA, n(a(t)("admin.settings.site.siteLogo")), 1),
                    v(In, {
                      modelValue: s.site_logo,
                      "onUpdate:modelValue": i[176] || (i[176] = (o) => s.site_logo = o),
                      mode: "image",
                      "upload-label": a(t)("admin.settings.site.uploadImage"),
                      "remove-label": a(t)("admin.settings.site.remove"),
                      hint: a(t)("admin.settings.site.logoHint"),
                      "max-size": 300 * 1024
                    }, null, 8, ["modelValue", "upload-label", "remove-label", "hint"])
                  ]),
                  e("div", null, [
                    e("label", hA, n(a(t)("admin.settings.site.homeContent")), 1),
                    p(e("textarea", {
                      "onUpdate:modelValue": i[177] || (i[177] = (o) => s.home_content = o),
                      rows: "6",
                      class: "input font-mono text-sm",
                      placeholder: a(t)("admin.settings.site.homeContentPlaceholder")
                    }, null, 8, xA), [
                      [k, s.home_content]
                    ]),
                    e("p", fA, n(a(t)("admin.settings.site.homeContentHint")), 1),
                    e("p", kA, n(a(t)("admin.settings.site.homeContentIframeWarning")), 1)
                  ]),
                  e("div", vA, [
                    e("div", null, [
                      e("label", wA, n(a(t)("admin.settings.site.compactHome")), 1),
                      e("p", CA, n(a(t)("admin.settings.site.compactHomeHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.compact_home_enabled,
                      "onUpdate:modelValue": i[178] || (i[178] = (o) => s.compact_home_enabled = o),
                      "data-testid": "compact-home-toggle"
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", SA, [
                    e("div", null, [
                      e("label", AA, n(a(t)("admin.settings.site.hideCcsImportButton")), 1),
                      e("p", TA, n(a(t)("admin.settings.site.hideCcsImportButtonHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.hide_ccs_import_button,
                      "onUpdate:modelValue": i[179] || (i[179] = (o) => s.hide_ccs_import_button = o)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              e("div", UA, [
                e("div", EA, [
                  e("h2", VA, n(a(t)("admin.settings.customMenu.title")), 1),
                  e("p", PA, n(a(t)("admin.settings.customMenu.description")), 1)
                ]),
                e("div", $A, [
                  e("div", RA, [
                    e("label", LA, n(a(t)("admin.settings.site.imageTutorialMenu")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[180] || (i[180] = (o) => ca.value = o),
                      type: "url",
                      class: "input font-mono text-sm",
                      "data-testid": "image-tutorial-menu-url",
                      placeholder: a(t)("admin.settings.site.imageTutorialMenuPlaceholder")
                    }, null, 8, MA), [
                      [k, ca.value]
                    ]),
                    e("p", DA, n(a(t)("admin.settings.site.imageTutorialMenuHint")), 1)
                  ]),
                  (r(!0), d(K, null, ee(ma.value, (o, b) => (r(), d("div", {
                    key: o.item.id || o.index,
                    class: "rounded-lg border border-gray-200 p-4 dark:border-dark-600"
                  }, [
                    e("div", OA, [
                      e("span", IA, n(a(t)("admin.settings.customMenu.itemLabel", { n: b + 1 })), 1),
                      e("div", zA, [
                        b > 0 ? (r(), d("button", {
                          key: 0,
                          type: "button",
                          class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-700",
                          title: a(t)("admin.settings.customMenu.moveUp"),
                          onClick: (g) => Bs(b, -1)
                        }, [...i[281] || (i[281] = [
                          e("svg", {
                            class: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M5 15l7-7 7 7"
                            })
                          ], -1)
                        ])], 8, NA)) : T("", !0),
                        b < ma.value.length - 1 ? (r(), d("button", {
                          key: 1,
                          type: "button",
                          class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-700",
                          title: a(t)("admin.settings.customMenu.moveDown"),
                          onClick: (g) => Bs(b, 1)
                        }, [...i[282] || (i[282] = [
                          e("svg", {
                            class: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M19 9l-7 7-7-7"
                            })
                          ], -1)
                        ])], 8, FA)) : T("", !0),
                        e("button", {
                          type: "button",
                          class: "rounded p-1 text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20",
                          title: a(t)("admin.settings.customMenu.remove"),
                          onClick: (g) => Ns(o.index)
                        }, [...i[283] || (i[283] = [
                          e("svg", {
                            class: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            })
                          ], -1)
                        ])], 8, HA)
                      ])
                    ]),
                    e("div", BA, [
                      e("div", null, [
                        e("label", jA, n(a(t)("admin.settings.customMenu.name")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.item.label = g,
                          type: "text",
                          class: "input text-sm",
                          placeholder: a(t)("admin.settings.customMenu.namePlaceholder")
                        }, null, 8, qA), [
                          [k, o.item.label]
                        ])
                      ]),
                      e("div", null, [
                        e("label", KA, n(a(t)("admin.settings.customMenu.visibility")), 1),
                        p(e("select", {
                          "onUpdate:modelValue": (g) => o.item.visibility = g,
                          class: "input text-sm",
                          "data-testid": `custom-menu-visibility-${o.index}`
                        }, [
                          e("option", GA, n(a(t)("admin.settings.customMenu.visibilityUser")), 1),
                          e("option", YA, n(a(t)("admin.settings.customMenu.visibilityAdmin")), 1),
                          e("option", QA, n(a(t)("admin.settings.customMenu.visibilityAll")), 1)
                        ], 8, WA), [
                          [xt, o.item.visibility]
                        ])
                      ]),
                      e("div", null, [
                        e("label", XA, n(a(t)("admin.settings.customMenu.placement")), 1),
                        p(e("select", {
                          "onUpdate:modelValue": (g) => o.item.placement = g,
                          class: "input text-sm",
                          "data-testid": `custom-menu-placement-${o.index}`
                        }, [
                          e("option", ZA, n(a(t)("admin.settings.customMenu.placementSidebar")), 1),
                          e("option", eT, n(a(t)("admin.settings.customMenu.placementHeader")), 1),
                          e("option", tT, n(a(t)("admin.settings.customMenu.placementBoth")), 1)
                        ], 8, JA), [
                          [xt, o.item.placement]
                        ])
                      ]),
                      e("div", aT, [
                        e("label", nT, n(a(t)("admin.settings.customMenu.url")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.item.url = g,
                          type: "url",
                          class: "input font-mono text-sm",
                          placeholder: a(t)("admin.settings.customMenu.urlPlaceholder")
                        }, null, 8, sT), [
                          [k, o.item.url]
                        ])
                      ]),
                      e("label", iT, [
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.item.hide_open_button = g,
                          type: "checkbox",
                          class: "mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                          "data-testid": "custom-menu-hide-open-button"
                        }, null, 8, oT), [
                          [tt, o.item.hide_open_button]
                        ]),
                        e("span", null, [
                          e("span", lT, n(a(t)("admin.settings.customMenu.hideOpenButton")), 1),
                          e("span", rT, n(a(t)("admin.settings.customMenu.hideOpenButtonHint")), 1)
                        ])
                      ]),
                      e("div", dT, [
                        e("label", cT, n(a(t)("admin.settings.customMenu.iconSvg")), 1),
                        v(Pi, {
                          modelValue: o.item.icon_svg,
                          "onUpdate:modelValue": (g) => o.item.icon_svg = g
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]))), 128)),
                  e("button", {
                    type: "button",
                    class: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-3 text-sm text-gray-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-dark-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400",
                    onClick: uo
                  }, [
                    i[284] || (i[284] = e("svg", {
                      class: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 4v16m8-8H4"
                      })
                    ], -1)),
                    q(" " + n(a(t)("admin.settings.customMenu.add")), 1)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "general"]
          ]),
          p(v(ug, null, {
            default: Re(() => [
              e("div", uT, [
                e("div", mT, [
                  e("div", _T, [
                    e("div", null, [
                      e("h2", pT, n(E("登录条款确认", "Login agreement")), 1),
                      e("p", gT, n(E(
                        "控制登录页是否要求用户先阅读并同意服务条款、隐私政策或其他 Markdown 文档。",
                        "Control whether the login page requires users to accept Markdown policy documents first."
                      )), 1)
                    ]),
                    e("div", yT, [
                      e("span", bT, n(s.login_agreement_enabled ? E("已启用", "Enabled") : E("未启用", "Disabled")), 1),
                      v(B, {
                        modelValue: s.login_agreement_enabled,
                        "onUpdate:modelValue": i[181] || (i[181] = (o) => s.login_agreement_enabled = o)
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ]),
                e("div", hT, [
                  e("div", xT, [
                    e("div", null, [
                      e("label", fT, n(E("展示形式", "Display mode")), 1),
                      e("div", kT, [
                        e("button", {
                          type: "button",
                          class: ce([
                            "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                            s.login_agreement_mode === "modal" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                          ]),
                          onClick: i[182] || (i[182] = (o) => s.login_agreement_mode = "modal")
                        }, [
                          v(Ae, {
                            name: "shield",
                            size: "sm"
                          }),
                          q(" " + n(E("弹窗", "Modal")), 1)
                        ], 2),
                        e("button", {
                          type: "button",
                          class: ce([
                            "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                            s.login_agreement_mode === "checkbox" ? "bg-white text-primary-700 shadow-sm dark:bg-dark-800 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white"
                          ]),
                          onClick: i[183] || (i[183] = (o) => s.login_agreement_mode = "checkbox")
                        }, [
                          v(Ae, {
                            name: "checkCircle",
                            size: "sm"
                          }),
                          q(" " + n(E("复选框", "Checkbox")), 1)
                        ], 2)
                      ]),
                      e("p", vT, n(s.login_agreement_mode === "checkbox" ? E("复选框会显示在登录按钮下方，未勾选前所有登录入口禁用。", "The checkbox appears below the login button and gates all login actions.") : E("弹窗会在登录页打开，用户拒绝后所有登录入口保持禁用。", "The modal opens on the login page and gates all login actions until accepted.")), 1)
                    ]),
                    e("div", null, [
                      e("label", wT, n(E("条款更新日期", "Updated date")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[184] || (i[184] = (o) => s.login_agreement_updated_at = o),
                        type: "date",
                        class: "input"
                      }, null, 512), [
                        [k, s.login_agreement_updated_at]
                      ]),
                      e("p", CT, n(E("日期或文档内容变化后，用户需要重新同意。", "Changing the date or content requires fresh consent.")), 1)
                    ])
                  ]),
                  e("div", null, [
                    e("div", ST, [
                      e("div", null, [
                        e("h3", AT, n(E("协议文档", "Agreement documents")), 1),
                        e("p", TT, n(E(
                          "文档名称可自定义，内容按 Markdown 保存。可参考：服务条款、使用政策、支持的国家和地区、服务特定条款。",
                          "Document titles are customizable and content is saved as Markdown."
                        )), 1)
                      ]),
                      e("button", {
                        type: "button",
                        class: "btn btn-primary btn-sm inline-flex items-center gap-1.5",
                        onClick: po
                      }, [
                        v(Ae, {
                          name: "plus",
                          size: "sm"
                        }),
                        q(" " + n(E("添加文档", "Add document")), 1)
                      ])
                    ]),
                    e("div", UT, [
                      (r(!0), d(K, null, ee(s.login_agreement_documents, (o, b) => (r(), d("div", {
                        key: o.id || b,
                        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800/60"
                      }, [
                        e("div", ET, [
                          e("div", VT, [
                            e("span", PT, [
                              v(Ae, {
                                name: b === 1 ? "shield" : b === 2 ? "globe" : b === 3 ? "cog" : "document",
                                size: "sm"
                              }, null, 8, ["name"])
                            ]),
                            e("div", $T, [
                              e("p", RT, n(o.title || E("未命名文档", "Untitled document")), 1),
                              e("p", LT, n(tn(o, b)), 1)
                            ])
                          ]),
                          e("button", {
                            type: "button",
                            class: "rounded-md p-2 text-red-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-red-900/20",
                            disabled: s.login_agreement_enabled && s.login_agreement_documents.length <= 1,
                            onClick: (g) => go(b)
                          }, [
                            v(Ae, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, MT)
                        ]),
                        e("div", DT, [
                          e("div", null, [
                            e("label", OT, n(E("文档名称", "Document title")), 1),
                            p(e("input", {
                              "onUpdate:modelValue": (g) => o.title = g,
                              type: "text",
                              class: "input text-sm",
                              placeholder: E("例如：服务条款", "Example: Terms of Service")
                            }, null, 8, IT), [
                              [k, o.title]
                            ])
                          ]),
                          e("div", null, [
                            e("label", zT, n(E("路由标识", "Route slug")), 1),
                            e("div", NT, [
                              i[285] || (i[285] = e("span", { class: "inline-flex flex-shrink-0 items-center border-r border-gray-200 bg-gray-50 px-3 text-sm text-gray-500 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-400" }, " /legal/ ", -1)),
                              p(e("input", {
                                "onUpdate:modelValue": (g) => o.id = g,
                                type: "text",
                                class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-dark-500",
                                placeholder: "usage-policy"
                              }, null, 8, FT), [
                                [k, o.id]
                              ])
                            ])
                          ])
                        ]),
                        e("div", HT, [
                          e("label", BT, n(E("Markdown 内容", "Markdown content")), 1),
                          p(e("textarea", {
                            "onUpdate:modelValue": (g) => o.content_md = g,
                            rows: "8",
                            class: "input font-mono text-sm",
                            placeholder: E("在这里填写正式 Markdown 内容。", "Write the final Markdown content here.")
                          }, null, 8, jT), [
                            [k, o.content_md]
                          ])
                        ])
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "agreement"]
          ]),
          p(v(gg, null, {
            default: Re(() => [
              e("div", qT, [
                e("div", KT, [
                  e("h2", WT, n(a(t)("admin.settings.features.channelMonitor.title")), 1),
                  e("p", GT, n(a(t)("admin.settings.features.channelMonitor.description")), 1),
                  e("p", YT, [
                    v(m, {
                      to: "/admin/channels/monitor",
                      class: "inline-flex items-center gap-1 text-primary-600 hover:underline dark:text-primary-400"
                    }, {
                      default: Re(() => [
                        q(n(a(t)("admin.settings.features.channelMonitor.configureLink")) + " ", 1),
                        i[286] || (i[286] = e("span", { "aria-hidden": "true" }, "→", -1))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                e("div", QT, [
                  e("div", XT, [
                    e("div", null, [
                      e("label", JT, n(a(t)("admin.settings.features.channelMonitor.enabled")), 1),
                      e("p", ZT, n(a(t)("admin.settings.features.channelMonitor.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.channel_monitor_enabled,
                      "onUpdate:modelValue": i[185] || (i[185] = (o) => s.channel_monitor_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", eU, [
                    e("div", tU, [
                      e("p", aU, n(a(t)("admin.settings.features.channelMonitor.publicStatusEnabled")), 1),
                      e("p", nU, n(a(t)("admin.settings.features.channelMonitor.publicStatusEnabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.public_channel_status_enabled,
                      "onUpdate:modelValue": i[186] || (i[186] = (o) => s.public_channel_status_enabled = o),
                      "data-testid": "public-channel-status-toggle"
                    }, null, 8, ["modelValue"])
                  ]),
                  s.channel_monitor_enabled ? (r(), d("div", sU, [
                    e("div", null, [
                      e("label", iU, [
                        q(n(a(t)("admin.settings.features.channelMonitor.defaultInterval")) + " ", 1),
                        i[287] || (i[287] = e("span", { class: "text-red-500" }, "*", -1))
                      ]),
                      p(e("input", {
                        "onUpdate:modelValue": i[187] || (i[187] = (o) => s.channel_monitor_default_interval_seconds = o),
                        type: "number",
                        min: "15",
                        max: "3600",
                        class: "input"
                      }, null, 512), [
                        [
                          k,
                          s.channel_monitor_default_interval_seconds,
                          void 0,
                          { number: !0 }
                        ]
                      ]),
                      e("p", oU, n(a(t)("admin.settings.features.channelMonitor.defaultIntervalHint")), 1)
                    ]),
                    e("div", lU, [
                      e("div", rU, [
                        e("p", dU, n(a(t)("admin.settings.features.channelMonitor.showQuota")), 1),
                        e("p", cU, n(a(t)("admin.settings.features.channelMonitor.showQuotaHint")), 1)
                      ]),
                      v(B, {
                        modelValue: s.channel_monitor_show_quota,
                        "onUpdate:modelValue": i[188] || (i[188] = (o) => s.channel_monitor_show_quota = o)
                      }, null, 8, ["modelValue"])
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", uU, [
                e("div", mU, [
                  e("h2", _U, n(a(t)("admin.settings.features.availableChannels.title")), 1),
                  e("p", pU, n(a(t)("admin.settings.features.availableChannels.description")), 1),
                  e("p", gU, [
                    v(m, {
                      to: "/admin/channels/pricing",
                      class: "inline-flex items-center gap-1 text-primary-600 hover:underline dark:text-primary-400"
                    }, {
                      default: Re(() => [
                        q(n(a(t)("admin.settings.features.availableChannels.configureLink")) + " ", 1),
                        i[288] || (i[288] = e("span", { "aria-hidden": "true" }, "→", -1))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                e("div", yU, [
                  e("div", bU, [
                    e("div", null, [
                      e("label", hU, n(a(t)("admin.settings.features.availableChannels.enabled")), 1),
                      e("p", xU, n(a(t)("admin.settings.features.availableChannels.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.available_channels_enabled,
                      "onUpdate:modelValue": i[189] || (i[189] = (o) => s.available_channels_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              e("div", fU, [
                e("div", kU, [
                  e("h2", vU, n(a(t)("admin.settings.features.modelPlaza.title")), 1),
                  e("p", wU, n(a(t)("admin.settings.features.modelPlaza.description")), 1)
                ]),
                e("div", CU, [
                  e("div", SU, [
                    e("div", null, [
                      e("label", AU, n(a(t)("admin.settings.features.modelPlaza.enabled")), 1),
                      e("p", TU, n(a(t)("admin.settings.features.modelPlaza.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.model_plaza_enabled,
                      "onUpdate:modelValue": i[190] || (i[190] = (o) => s.model_plaza_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.model_plaza_enabled ? (r(), d("div", UU, [
                    e("div", null, [
                      e("label", EU, n(a(t)("admin.settings.features.modelPlaza.requireAuth")), 1),
                      e("p", VU, n(a(t)("admin.settings.features.modelPlaza.requireAuthHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.model_plaza_require_auth,
                      "onUpdate:modelValue": i[191] || (i[191] = (o) => s.model_plaza_require_auth = o)
                    }, null, 8, ["modelValue"])
                  ])) : T("", !0),
                  s.model_plaza_enabled ? (r(), d("div", PU, [
                    e("label", $U, n(a(t)("admin.settings.features.modelPlaza.priceDescription")), 1),
                    e("p", RU, n(a(t)("admin.settings.features.modelPlaza.priceDescriptionHint")), 1),
                    p(e("textarea", {
                      "onUpdate:modelValue": i[192] || (i[192] = (o) => s.model_plaza_description = o),
                      rows: "6",
                      class: "input font-mono text-sm"
                    }, null, 512), [
                      [k, s.model_plaza_description]
                    ])
                  ])) : T("", !0)
                ])
              ]),
              e("div", LU, [
                e("div", MU, [
                  e("h2", DU, n(a(t)("admin.settings.features.riskControl.title")), 1),
                  e("p", OU, n(a(t)("admin.settings.features.riskControl.description")), 1),
                  e("p", IU, [
                    v(m, {
                      to: "/admin/risk-control",
                      class: "inline-flex items-center gap-1 text-primary-600 hover:underline dark:text-primary-400"
                    }, {
                      default: Re(() => [
                        q(n(a(t)("admin.settings.features.riskControl.configureLink")) + " ", 1),
                        i[289] || (i[289] = e("span", { "aria-hidden": "true" }, "→", -1))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                e("div", zU, [
                  e("div", NU, [
                    e("div", null, [
                      e("label", FU, n(a(t)("admin.settings.features.riskControl.enabled")), 1),
                      e("p", HU, n(a(t)("admin.settings.features.riskControl.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.risk_control_enabled,
                      "onUpdate:modelValue": i[193] || (i[193] = (o) => s.risk_control_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", BU, [
                    e("div", null, [
                      e("label", jU, n(a(t)("admin.settings.features.riskControl.cyberSessionBlock")), 1),
                      e("p", qU, n(a(t)("admin.settings.features.riskControl.cyberSessionBlockHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.cyber_session_block_enabled,
                      "onUpdate:modelValue": i[194] || (i[194] = (o) => s.cyber_session_block_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.cyber_session_block_enabled ? (r(), d("div", KU, [
                    e("label", WU, [
                      q(n(a(t)("admin.settings.features.riskControl.cyberSessionBlockTTL")) + " ", 1),
                      i[290] || (i[290] = e("span", { class: "text-red-500" }, "*", -1))
                    ]),
                    p(e("input", {
                      "onUpdate:modelValue": i[195] || (i[195] = (o) => s.cyber_session_block_ttl_seconds = o),
                      type: "number",
                      min: "1",
                      class: "input"
                    }, null, 512), [
                      [
                        k,
                        s.cyber_session_block_ttl_seconds,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])) : T("", !0)
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "features"]
          ]),
          p(v(xg, null, {
            default: Re(() => [
              e("div", GU, [
                e("div", YU, [
                  e("h2", QU, n(a(t)("admin.settings.payment.title")), 1),
                  e("p", XU, [
                    q(n(a(t)("admin.settings.payment.description")) + " ", 1),
                    e("a", {
                      href: A.value,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "ml-2 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    }, [
                      i[291] || (i[291] = e("svg", {
                        class: "mr-0.5 h-3.5 w-3.5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        })
                      ], -1)),
                      q(" " + n(a(t)("admin.settings.payment.configGuide")), 1)
                    ], 8, JU)
                  ])
                ]),
                e("div", ZU, [
                  e("div", eE, [
                    e("div", null, [
                      e("label", tE, n(a(t)("admin.settings.payment.enabled")), 1),
                      e("p", aE, n(a(t)("admin.settings.payment.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.payment_enabled,
                      "onUpdate:modelValue": i[196] || (i[196] = (o) => s.payment_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.payment_enabled ? (r(), d(K, { key: 0 }, [
                    e("div", nE, [
                      e("div", null, [
                        e("label", sE, n(a(t)("admin.settings.payment.productNamePrefix")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[197] || (i[197] = (o) => s.payment_product_name_prefix = o),
                          type: "text",
                          class: "input",
                          placeholder: "Sub2API"
                        }, null, 512), [
                          [k, s.payment_product_name_prefix]
                        ])
                      ]),
                      e("div", null, [
                        e("label", iE, n(a(t)("admin.settings.payment.productNameSuffix")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[198] || (i[198] = (o) => s.payment_product_name_suffix = o),
                          type: "text",
                          class: "input",
                          placeholder: "CNY"
                        }, null, 512), [
                          [k, s.payment_product_name_suffix]
                        ])
                      ]),
                      e("div", null, [
                        e("label", oE, n(a(t)("admin.settings.payment.preview")), 1),
                        e("div", lE, n((s.payment_product_name_prefix || "Sub2API") + " 100 " + (s.payment_product_name_suffix || "CNY")), 1)
                      ])
                    ]),
                    e("div", rE, [
                      e("div", null, [
                        e("label", dE, n(a(t)("admin.settings.payment.minAmount")), 1),
                        e("input", {
                          value: s.payment_min_amount || "",
                          onInput: i[199] || (i[199] = (o) => s.payment_min_amount = parseFloat(
                            o.target.value
                          ) || 0),
                          type: "number",
                          step: "0.01",
                          min: "0",
                          class: "input",
                          placeholder: a(t)("admin.settings.payment.noLimit")
                        }, null, 40, cE)
                      ]),
                      e("div", null, [
                        e("label", uE, n(a(t)("admin.settings.payment.maxAmount")), 1),
                        e("input", {
                          value: s.payment_max_amount || "",
                          onInput: i[200] || (i[200] = (o) => s.payment_max_amount = parseFloat(
                            o.target.value
                          ) || 0),
                          type: "number",
                          step: "0.01",
                          min: "0",
                          class: "input",
                          placeholder: a(t)("admin.settings.payment.noLimit")
                        }, null, 40, mE)
                      ]),
                      e("div", null, [
                        e("label", _E, n(a(t)("admin.settings.payment.dailyLimit")), 1),
                        e("input", {
                          value: s.payment_daily_limit || "",
                          onInput: i[201] || (i[201] = (o) => s.payment_daily_limit = parseFloat(
                            o.target.value
                          ) || 0),
                          type: "number",
                          step: "0.01",
                          min: "0",
                          class: "input",
                          placeholder: a(t)("admin.settings.payment.noLimit")
                        }, null, 40, pE)
                      ]),
                      e("div", null, [
                        e("label", gE, n(a(t)("admin.settings.payment.balanceRechargeMultiplier")), 1),
                        e("input", {
                          value: s.payment_balance_recharge_multiplier || "",
                          onInput: i[202] || (i[202] = (o) => s.payment_balance_recharge_multiplier = parseFloat(
                            o.target.value
                          ) || 1),
                          type: "number",
                          step: "0.01",
                          min: "0.01",
                          class: "input"
                        }, null, 40, yE),
                        e("p", bE, n(a(t)(
                          "admin.settings.payment.balanceRechargeMultiplierHint"
                        )), 1),
                        e("p", hE, n(a(t)("admin.settings.payment.balanceRechargePreview", {
                          usd: (Number(s.payment_balance_recharge_multiplier) || 1).toFixed(2)
                        })), 1)
                      ]),
                      e("div", null, [
                        e("label", xE, n(a(t)("admin.settings.payment.subscriptionUsdToCnyRate")), 1),
                        e("input", {
                          value: s.payment_subscription_usd_to_cny_rate || "",
                          onInput: i[203] || (i[203] = (o) => s.payment_subscription_usd_to_cny_rate = parseFloat(
                            o.target.value
                          ) || 0),
                          type: "number",
                          step: "0.01",
                          min: "0",
                          class: "input",
                          placeholder: a(t)(
                            "admin.settings.payment.subscriptionUsdToCnyRateDisabled"
                          )
                        }, null, 40, fE),
                        e("p", kE, n(a(t)("admin.settings.payment.subscriptionUsdToCnyRateHint")), 1)
                      ]),
                      e("div", null, [
                        e("label", vE, n(a(t)("admin.settings.payment.rechargeFeeRate")), 1),
                        e("div", wE, [
                          e("input", {
                            value: s.payment_recharge_fee_rate ?? "",
                            onInput: i[204] || (i[204] = (o) => s.payment_recharge_fee_rate = Math.min(
                              100,
                              Math.max(
                                0,
                                Math.round(
                                  parseFloat(
                                    o.target.value || "0"
                                  ) * 100
                                ) / 100
                              )
                            )),
                            type: "number",
                            step: "0.01",
                            min: "0",
                            max: "100",
                            class: "input pr-8"
                          }, null, 40, CE),
                          i[292] || (i[292] = e("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" }, "%", -1))
                        ]),
                        e("p", SE, n(a(t)("admin.settings.payment.rechargeFeeRateHint")), 1),
                        (Number(s.payment_recharge_fee_rate) || 0) > 0 ? (r(), d("p", AE, n(a(t)("admin.settings.payment.rechargeFeePreview", {
                          fee: (Number(s.payment_recharge_fee_rate) || 0).toFixed(2)
                        })), 1)) : T("", !0)
                      ]),
                      e("div", null, [
                        e("label", TE, [
                          q(n(a(t)("admin.settings.payment.orderTimeout")) + " ", 1),
                          i[293] || (i[293] = e("span", { class: "text-red-500" }, "*", -1))
                        ]),
                        p(e("input", {
                          "onUpdate:modelValue": i[205] || (i[205] = (o) => s.payment_order_timeout_minutes = o),
                          type: "number",
                          min: "1",
                          class: "input",
                          required: ""
                        }, null, 512), [
                          [
                            k,
                            s.payment_order_timeout_minutes,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        e("p", UE, n(a(t)("admin.settings.payment.orderTimeoutHint")), 1)
                      ])
                    ]),
                    e("div", EE, [
                      e("div", VE, [
                        e("label", PE, n(a(t)("admin.settings.payment.maxPendingOrders")), 1),
                        p(e("input", {
                          "onUpdate:modelValue": i[206] || (i[206] = (o) => s.payment_max_pending_orders = o),
                          type: "number",
                          min: "1",
                          class: "input"
                        }, null, 512), [
                          [
                            k,
                            s.payment_max_pending_orders,
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ]),
                      e("div", null, [
                        e("label", $E, n(a(t)("admin.settings.payment.loadBalanceStrategy")), 1),
                        v(Ke, {
                          modelValue: s.payment_load_balance_strategy,
                          "onUpdate:modelValue": i[207] || (i[207] = (o) => s.payment_load_balance_strategy = o),
                          options: fl.value,
                          class: "w-40"
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      e("div", null, [
                        e("label", RE, n(a(t)("admin.settings.payment.cancelRateLimit")), 1),
                        e("div", LE, [
                          e("button", {
                            type: "button",
                            class: ce([
                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                              s.payment_cancel_rate_limit_enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                            ]),
                            onClick: i[208] || (i[208] = (o) => s.payment_cancel_rate_limit_enabled = !s.payment_cancel_rate_limit_enabled)
                          }, [
                            e("span", {
                              class: ce([
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                s.payment_cancel_rate_limit_enabled ? "translate-x-5" : "translate-x-0"
                              ])
                            }, null, 2)
                          ], 2),
                          v(Ke, {
                            modelValue: s.payment_cancel_rate_limit_window_mode,
                            "onUpdate:modelValue": i[209] || (i[209] = (o) => s.payment_cancel_rate_limit_window_mode = o),
                            options: vl.value,
                            class: "w-24",
                            disabled: !s.payment_cancel_rate_limit_enabled
                          }, null, 8, ["modelValue", "options", "disabled"]),
                          e("span", {
                            class: ce([
                              "text-sm whitespace-nowrap",
                              s.payment_cancel_rate_limit_enabled ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"
                            ])
                          }, n(a(t)("admin.settings.payment.cancelRateLimitEvery")), 3),
                          p(e("input", {
                            "onUpdate:modelValue": i[210] || (i[210] = (o) => s.payment_cancel_rate_limit_window = o),
                            type: "number",
                            min: "1",
                            required: "",
                            class: "input w-14 text-center",
                            disabled: !s.payment_cancel_rate_limit_enabled
                          }, null, 8, ME), [
                            [
                              k,
                              s.payment_cancel_rate_limit_window,
                              void 0,
                              { number: !0 }
                            ]
                          ]),
                          v(Ke, {
                            modelValue: s.payment_cancel_rate_limit_unit,
                            "onUpdate:modelValue": i[211] || (i[211] = (o) => s.payment_cancel_rate_limit_unit = o),
                            options: kl.value,
                            class: "w-28",
                            disabled: !s.payment_cancel_rate_limit_enabled
                          }, null, 8, ["modelValue", "options", "disabled"]),
                          e("span", {
                            class: ce([
                              "text-sm whitespace-nowrap",
                              s.payment_cancel_rate_limit_enabled ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"
                            ])
                          }, n(a(t)("admin.settings.payment.cancelRateLimitAllowMax")), 3),
                          p(e("input", {
                            "onUpdate:modelValue": i[212] || (i[212] = (o) => s.payment_cancel_rate_limit_max = o),
                            type: "number",
                            min: "1",
                            required: "",
                            class: "input w-14 text-center",
                            disabled: !s.payment_cancel_rate_limit_enabled
                          }, null, 8, DE), [
                            [
                              k,
                              s.payment_cancel_rate_limit_max,
                              void 0,
                              { number: !0 }
                            ]
                          ]),
                          e("span", {
                            class: ce([
                              "text-sm whitespace-nowrap",
                              s.payment_cancel_rate_limit_enabled ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"
                            ])
                          }, n(a(t)("admin.settings.payment.cancelRateLimitTimes")), 3)
                        ])
                      ]),
                      e("div", null, [
                        e("label", OE, n(a(t)("admin.settings.payment.alipayForceQRCode")), 1),
                        e("div", IE, [
                          e("button", {
                            type: "button",
                            class: ce([
                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                              s.payment_alipay_force_qrcode ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                            ]),
                            onClick: i[213] || (i[213] = (o) => s.payment_alipay_force_qrcode = !s.payment_alipay_force_qrcode)
                          }, [
                            e("span", {
                              class: ce([
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                s.payment_alipay_force_qrcode ? "translate-x-5" : "translate-x-0"
                              ])
                            }, null, 2)
                          ], 2),
                          e("span", zE, n(a(t)("admin.settings.payment.alipayForceQRCodeHint")), 1)
                        ])
                      ]),
                      e("div", null, [
                        e("label", NE, n(a(t)("admin.settings.payment.alipayMobilePrecreateDeepLink")), 1),
                        e("div", FE, [
                          e("button", {
                            type: "button",
                            class: ce([
                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                              s.payment_alipay_mobile_precreate_deep_link ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                            ]),
                            onClick: i[214] || (i[214] = (o) => s.payment_alipay_mobile_precreate_deep_link = !s.payment_alipay_mobile_precreate_deep_link)
                          }, [
                            e("span", {
                              class: ce([
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                s.payment_alipay_mobile_precreate_deep_link ? "translate-x-5" : "translate-x-0"
                              ])
                            }, null, 2)
                          ], 2),
                          e("span", HE, n(a(t)("admin.settings.payment.alipayMobilePrecreateDeepLinkHint")), 1)
                        ])
                      ])
                    ]),
                    e("div", null, [
                      e("label", BE, n(a(t)("admin.settings.payment.enabledPaymentTypes")), 1),
                      e("div", jE, [
                        (r(!0), d(K, null, ee(Qn.value, (o) => (r(), d("button", {
                          key: o.value,
                          type: "button",
                          onClick: (b) => bl(o.value),
                          class: ce([
                            "rounded-lg border px-3 py-1.5 text-sm font-medium transition-all",
                            gl(o.value) ? "border-primary-500 bg-primary-500 text-white shadow-sm" : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-300 dark:hover:border-dark-500"
                          ])
                        }, n(o.label), 11, qE))), 128))
                      ]),
                      e("p", KE, [
                        q(n(a(t)("admin.settings.payment.enabledPaymentTypesHint")) + " ", 1),
                        e("a", {
                          href: C.value,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "ml-1 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                        }, [
                          q(n(a(t)("admin.settings.payment.findProvider")) + " ", 1),
                          i[294] || (i[294] = e("svg", {
                            class: "mb-0.5 ml-0.5 inline h-3 w-3",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            e("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            })
                          ], -1))
                        ], 8, WE)
                      ])
                    ]),
                    e("div", GE, [
                      e("div", null, [
                        e("label", YE, n(a(t)("admin.settings.payment.helpImage")), 1),
                        v(In, {
                          modelValue: s.payment_help_image_url,
                          "onUpdate:modelValue": i[215] || (i[215] = (o) => s.payment_help_image_url = o),
                          "upload-label": a(t)("admin.settings.site.uploadImage"),
                          "remove-label": a(t)("admin.settings.site.remove"),
                          placeholder: a(t)("admin.settings.payment.helpImagePlaceholder")
                        }, null, 8, ["modelValue", "upload-label", "remove-label", "placeholder"])
                      ]),
                      e("div", null, [
                        e("label", QE, n(a(t)("admin.settings.payment.helpText")), 1),
                        p(e("textarea", {
                          "onUpdate:modelValue": i[216] || (i[216] = (o) => s.payment_help_text = o),
                          rows: "3",
                          class: "input",
                          placeholder: a(t)("admin.settings.payment.helpTextPlaceholder")
                        }, null, 8, XE), [
                          [k, s.payment_help_text]
                        ])
                      ])
                    ])
                  ], 64)) : T("", !0)
                ])
              ]),
              s.payment_enabled ? (r(), ct($p, {
                key: 0,
                modelValue: s.payment_recharge_bonus_tiers,
                "onUpdate:modelValue": i[217] || (i[217] = (o) => s.payment_recharge_bonus_tiers = o),
                mode: s.payment_recharge_bonus_mode,
                "onUpdate:mode": i[218] || (i[218] = (o) => s.payment_recharge_bonus_mode = o),
                notice: s.payment_recharge_bonus_notice,
                "onUpdate:notice": i[219] || (i[219] = (o) => s.payment_recharge_bonus_notice = o)
              }, null, 8, ["modelValue", "mode", "notice"])) : T("", !0),
              s.payment_enabled ? (r(), ct(Vr, {
                key: 1,
                providers: An.value,
                loading: Xn.value,
                "can-create": yl.value,
                "enabled-payment-types": s.payment_enabled_types,
                "all-payment-types": Qn.value,
                "redirect-label": a(t)("admin.settings.payment.easypayRedirect"),
                onRefresh: Gt,
                onCreate: wl,
                onEdit: Cl,
                onDelete: Ul,
                onToggleField: Al,
                onToggleType: Tl,
                onReorder: El
              }, null, 8, ["providers", "loading", "can-create", "enabled-payment-types", "all-payment-types", "redirect-label"])) : T("", !0)
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "payment"]
          ]),
          p(v(wg, null, {
            default: Re(() => [
              s.email_verify_enabled ? T("", !0) : (r(), d("div", JE, [
                e("div", ZE, [
                  e("div", eV, [
                    v(Ae, {
                      name: "mail",
                      size: "md",
                      class: "mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                    }),
                    e("div", null, [
                      e("h3", tV, n(a(t)("admin.settings.emailTabDisabledTitle")), 1),
                      e("p", aV, n(a(t)("admin.settings.emailTabDisabledHint")), 1)
                    ])
                  ])
                ])
              ])),
              s.email_verify_enabled ? (r(), d("div", nV, [
                e("div", sV, [
                  e("div", null, [
                    e("h2", iV, n(a(t)("admin.settings.smtp.title")), 1),
                    e("p", oV, n(a(t)("admin.settings.smtp.description")), 1)
                  ]),
                  e("button", {
                    type: "button",
                    onClick: Ro,
                    disabled: J.value || we.value,
                    class: "btn btn-secondary btn-sm"
                  }, [
                    J.value ? (r(), d("svg", rV, [...i[295] || (i[295] = [
                      e("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      e("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : T("", !0),
                    q(" " + n(J.value ? a(t)("admin.settings.smtp.testing") : a(t)("admin.settings.smtp.testConnection")), 1)
                  ], 8, lV)
                ]),
                e("div", dV, [
                  e("div", cV, [
                    e("div", null, [
                      e("label", uV, n(a(t)("admin.settings.smtp.host")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[220] || (i[220] = (o) => s.smtp_host = o),
                        type: "text",
                        class: "input",
                        placeholder: a(t)("admin.settings.smtp.hostPlaceholder")
                      }, null, 8, mV), [
                        [k, s.smtp_host]
                      ])
                    ]),
                    e("div", null, [
                      e("label", _V, n(a(t)("admin.settings.smtp.port")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[221] || (i[221] = (o) => s.smtp_port = o),
                        type: "number",
                        min: "1",
                        max: "65535",
                        class: "input",
                        placeholder: a(t)("admin.settings.smtp.portPlaceholder")
                      }, null, 8, pV), [
                        [
                          k,
                          s.smtp_port,
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]),
                    e("div", null, [
                      e("label", gV, n(a(t)("admin.settings.smtp.username")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[222] || (i[222] = (o) => s.smtp_username = o),
                        type: "text",
                        class: "input",
                        placeholder: a(t)("admin.settings.smtp.usernamePlaceholder")
                      }, null, 8, yV), [
                        [k, s.smtp_username]
                      ])
                    ]),
                    e("div", null, [
                      e("label", bV, n(a(t)("admin.settings.smtp.password")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[223] || (i[223] = (o) => s.smtp_password = o),
                        type: "password",
                        class: "input",
                        autocomplete: "new-password",
                        autocapitalize: "off",
                        spellcheck: "false",
                        onKeydown: i[224] || (i[224] = (o) => Z.value = !0),
                        onPaste: i[225] || (i[225] = (o) => Z.value = !0),
                        placeholder: s.smtp_password_configured ? a(t)("admin.settings.smtp.passwordConfiguredPlaceholder") : a(t)("admin.settings.smtp.passwordPlaceholder")
                      }, null, 40, hV), [
                        [k, s.smtp_password]
                      ]),
                      e("p", xV, n(s.smtp_password_configured ? a(t)("admin.settings.smtp.passwordConfiguredHint") : a(t)("admin.settings.smtp.passwordHint")), 1)
                    ]),
                    e("div", null, [
                      e("label", fV, n(a(t)("admin.settings.smtp.fromEmail")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[226] || (i[226] = (o) => s.smtp_from_email = o),
                        type: "email",
                        class: "input",
                        placeholder: a(t)("admin.settings.smtp.fromEmailPlaceholder")
                      }, null, 8, kV), [
                        [k, s.smtp_from_email]
                      ])
                    ]),
                    e("div", null, [
                      e("label", vV, n(a(t)("admin.settings.smtp.fromName")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[227] || (i[227] = (o) => s.smtp_from_name = o),
                        type: "text",
                        class: "input",
                        placeholder: a(t)("admin.settings.smtp.fromNamePlaceholder")
                      }, null, 8, wV), [
                        [k, s.smtp_from_name]
                      ])
                    ])
                  ]),
                  e("div", CV, [
                    e("div", null, [
                      e("label", SV, n(a(t)("admin.settings.smtp.useTls")), 1),
                      e("p", AV, n(a(t)("admin.settings.smtp.useTlsHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.smtp_use_tls,
                      "onUpdate:modelValue": i[228] || (i[228] = (o) => s.smtp_use_tls = o)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ])) : T("", !0),
              s.email_verify_enabled ? (r(), d("div", TV, [
                e("div", UV, [
                  e("h2", EV, n(a(t)("admin.settings.testEmail.title")), 1),
                  e("p", VV, n(a(t)("admin.settings.testEmail.description")), 1)
                ]),
                e("div", PV, [
                  e("div", $V, [
                    e("div", RV, [
                      e("label", LV, n(a(t)("admin.settings.testEmail.recipientEmail")), 1),
                      p(e("input", {
                        "onUpdate:modelValue": i[229] || (i[229] = (o) => de.value = o),
                        type: "email",
                        class: "input",
                        placeholder: a(t)("admin.settings.testEmail.recipientEmailPlaceholder")
                      }, null, 8, MV), [
                        [k, de.value]
                      ])
                    ]),
                    e("button", {
                      type: "button",
                      onClick: Lo,
                      disabled: te.value || !de.value || we.value,
                      class: "btn btn-secondary"
                    }, [
                      te.value ? (r(), d("svg", OV, [...i[296] || (i[296] = [
                        e("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }, null, -1),
                        e("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, null, -1)
                      ])])) : T("", !0),
                      q(" " + n(te.value ? a(t)("admin.settings.testEmail.sending") : a(t)("admin.settings.testEmail.sendTestEmail")), 1)
                    ], 8, DV)
                  ])
                ])
              ])) : T("", !0),
              e("div", IV, [
                e("div", zV, [
                  e("h3", NV, n(a(t)("admin.settings.subscriptionExpiryNotify.title")), 1),
                  e("p", FV, n(a(t)("admin.settings.subscriptionExpiryNotify.description")), 1)
                ]),
                e("div", HV, [
                  e("div", BV, [
                    e("div", null, [
                      e("label", jV, n(a(t)("admin.settings.subscriptionExpiryNotify.enabled")), 1),
                      e("p", qV, n(a(t)("admin.settings.subscriptionExpiryNotify.enabledHint")), 1)
                    ]),
                    v(B, {
                      modelValue: s.subscription_expiry_notify_enabled,
                      "onUpdate:modelValue": i[230] || (i[230] = (o) => s.subscription_expiry_notify_enabled = o)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              v(J_),
              e("div", KV, [
                e("div", WV, [
                  e("h3", GV, n(a(t)("admin.settings.balanceNotify.title")), 1),
                  e("p", YV, n(a(t)("admin.settings.balanceNotify.description")), 1)
                ]),
                e("div", QV, [
                  e("div", XV, [
                    e("label", JV, n(a(t)("admin.settings.balanceNotify.enabled")), 1),
                    v(B, {
                      modelValue: s.balance_low_notify_enabled,
                      "onUpdate:modelValue": i[231] || (i[231] = (o) => s.balance_low_notify_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.balance_low_notify_enabled ? (r(), d("div", ZV, [
                    e("label", eP, n(a(t)("admin.settings.balanceNotify.threshold")), 1),
                    e("div", tP, [
                      i[297] || (i[297] = e("span", { class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }, "$", -1)),
                      p(e("input", {
                        "onUpdate:modelValue": i[232] || (i[232] = (o) => s.balance_low_notify_threshold = o),
                        type: "number",
                        min: "0",
                        step: "0.01",
                        class: "input pl-7"
                      }, null, 512), [
                        [
                          k,
                          s.balance_low_notify_threshold,
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]),
                    e("p", aP, n(a(t)("admin.settings.balanceNotify.thresholdHint")), 1)
                  ])) : T("", !0),
                  e("div", null, [
                    e("label", nP, n(a(t)("admin.settings.balanceNotify.rechargeUrl")), 1),
                    p(e("input", {
                      "onUpdate:modelValue": i[233] || (i[233] = (o) => s.balance_low_notify_recharge_url = o),
                      type: "url",
                      class: "input",
                      placeholder: a(It)
                    }, null, 8, sP), [
                      [k, s.balance_low_notify_recharge_url]
                    ]),
                    e("p", iP, n(a(t)("admin.settings.balanceNotify.rechargeUrlHint")), 1)
                  ])
                ])
              ]),
              e("div", oP, [
                e("div", lP, [
                  e("h3", rP, n(a(t)("admin.settings.quotaNotify.title")), 1),
                  e("p", dP, n(a(t)("admin.settings.quotaNotify.description")), 1)
                ]),
                e("div", cP, [
                  e("div", uP, [
                    e("label", mP, n(a(t)("admin.settings.quotaNotify.enabled")), 1),
                    v(B, {
                      modelValue: s.account_quota_notify_enabled,
                      "onUpdate:modelValue": i[234] || (i[234] = (o) => s.account_quota_notify_enabled = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  s.account_quota_notify_enabled ? (r(), d("div", _P, [
                    e("label", pP, n(a(t)("admin.settings.quotaNotify.emails")), 1),
                    e("div", gP, [
                      (r(!0), d(K, null, ee(s.account_quota_notify_emails || [], (o, b) => (r(), d("div", {
                        key: b,
                        class: "flex items-center gap-2"
                      }, [
                        e("label", yP, [
                          e("input", {
                            type: "checkbox",
                            checked: !o.disabled,
                            onChange: (g) => o.disabled = !o.disabled,
                            class: "sr-only peer"
                          }, null, 40, bP),
                          i[298] || (i[298] = e("div", { class: "w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:after:border-gray-500 peer-checked:bg-primary-600" }, null, -1))
                        ]),
                        p(e("input", {
                          "onUpdate:modelValue": (g) => o.email = g,
                          type: "email",
                          class: "input flex-1",
                          placeholder: a(t)("admin.settings.quotaNotify.emailPlaceholder")
                        }, null, 8, hP), [
                          [k, o.email]
                        ]),
                        e("button", {
                          onClick: (g) => s.account_quota_notify_emails.splice(b, 1),
                          class: "btn btn-secondary px-2",
                          type: "button"
                        }, [
                          v(Ae, {
                            name: "x",
                            size: "xs",
                            class: "h-4 w-4"
                          })
                        ], 8, xP)
                      ]))), 128)),
                      e("button", {
                        onClick: Fa,
                        class: "btn btn-secondary btn-sm",
                        type: "button"
                      }, " + " + n(a(t)("admin.settings.quotaNotify.addEmail")), 1)
                    ]),
                    e("p", fP, n(a(t)("admin.settings.quotaNotify.emailsHint")), 1)
                  ])) : T("", !0)
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "email"]
          ]),
          p(v(Ag, null, {
            default: Re(() => [
              v(l_)
            ]),
            _: 1
          }, 512), [
            [rt, M.value === "backup"]
          ]),
          p(e("div", kP, [
            Y.value ? (r(), d("p", vP, n(Y.value), 1)) : T("", !0),
            e("button", {
              type: "submit",
              "data-zero-one-settings-save": "true",
              disabled: ne.value || we.value,
              class: "btn btn-primary"
            }, [
              ne.value ? (r(), d("svg", CP, [...i[299] || (i[299] = [
                e("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                e("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : T("", !0),
              q(" " + n(ne.value ? a(t)("admin.settings.saving") : a(t)("admin.settings.saveSettings")), 1)
            ], 8, wP)
          ], 512), [
            [rt, M.value !== "backup"]
          ])
        ], 32)),
        v(ec, {
          ref_key: "providerDialogRef",
          ref: es,
          show: ja.value,
          saving: Jn.value,
          editing: Vt.value,
          "all-key-options": ei.value,
          "enabled-key-options": ti.value,
          "all-payment-types": Qn.value,
          "redirect-label": a(t)("admin.settings.payment.easypayRedirect"),
          onClose: i[235] || (i[235] = (o) => ja.value = !1),
          onSave: Sl
        }, null, 8, ["show", "saving", "editing", "all-key-options", "enabled-key-options", "all-payment-types", "redirect-label"]),
        v(Nl, {
          show: Tn.value,
          title: a(t)("admin.settings.payment.deleteProvider"),
          message: a(t)("admin.settings.payment.deleteProviderConfirm"),
          "confirm-text": a(t)("common.delete"),
          danger: "",
          onConfirm: Vl,
          onCancel: i[236] || (i[236] = (o) => Tn.value = !1)
        }, null, 8, ["show", "title", "message", "confirm-text"]),
        v(Rs, { controller: a(U) }, null, 8, ["controller"])
      ]);
    };
  }
}), FP = /* @__PURE__ */ gt(TP, [["__scopeId", "data-v-c6fbdf12"]]);
export {
  FP as default
};
