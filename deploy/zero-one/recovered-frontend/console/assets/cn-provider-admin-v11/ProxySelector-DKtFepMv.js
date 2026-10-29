var Y = Object.defineProperty;
var G = (e, n, a) => n in e ? Y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a;
var F = (e, n, a) => G(e, typeof n != "symbol" ? n + "" : n, a);
import { W as U, a as x, d as H, c as q, u as J, w as M, f as m, g as s, h as _, i as b, F as j, p as Q, l as X, n as g, e as d, C as S, b as Z, o as ee, j as L, _ as T, q as $, P as te, E as se, m as ne, v as ae, z as N, B as z, r as K, s as A, y as oe } from "./cnProviderAdminLeaf-C3ObTkBL.js";
import { b as le } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DZ8D1X4J.js";
async function ie() {
  const { data: e } = await U.get("/user/totp/status");
  return e;
}
async function ce() {
  const { data: e } = await U.get("/user/totp/verification-method");
  return e;
}
async function re() {
  const { data: e } = await U.post("/user/totp/send-code");
  return e;
}
async function ue(e) {
  const { data: n } = await U.post("/user/totp/setup", e || {});
  return n;
}
async function de(e) {
  const { data: n } = await U.post("/user/totp/enable", e);
  return n;
}
async function pe(e) {
  const { data: n } = await U.post("/user/totp/disable", e);
  return n;
}
async function fe(e) {
  const { data: n } = await U.post("/user/totp/step-up", { code: e });
  return n;
}
const me = {
  getStatus: ie,
  getVerificationMethod: ce,
  sendVerifyCode: re,
  initiateSetup: ue,
  enable: de,
  disable: pe,
  stepUp: fe
}, ve = "STEP_UP_REQUIRED", he = "STEP_UP_TOTP_NOT_ENABLED", _e = "STEP_UP_ADMIN_API_KEY_FORBIDDEN";
class W extends Error {
  constructor() {
    super("step-up verification cancelled by user");
    F(this, "code", "STEP_UP_CANCELLED");
    this.name = "StepUpCancelledError";
  }
}
function ot(e) {
  return e instanceof W;
}
function R(e) {
  const n = e ?? {};
  return [n.code, n.reason].map((c) => typeof c == "string" ? c : "").find((c) => c.startsWith("STEP_UP")) || "";
}
function ye(e) {
  return R(e) === ve;
}
function ke(e) {
  const n = R(e);
  return n === he || n === _e;
}
function lt(e) {
  return R(e);
}
function it() {
  const e = x(!1), n = x("");
  let a = null, c = null;
  function k() {
    return c || (e.value = !0, c = new Promise((P) => {
      a = P;
    }), c);
  }
  function p() {
    e.value = !1, a == null || a(!0), a = null, c = null;
  }
  function r() {
    e.value = !1, a == null || a(!1), a = null, c = null;
  }
  async function w(P) {
    try {
      return await P();
    } catch (f) {
      if (ke(f))
        throw n.value = R(f), f;
      if (!ye(f))
        throw f;
      if (!await k())
        throw new W();
      return await P();
    }
  }
  return {
    visible: e,
    blockedReason: n,
    prompt: k,
    onVerified: p,
    onCancel: r,
    run: w
  };
}
const ge = {
  key: 0,
  class: "fixed inset-0 z-[60] overflow-y-auto"
}, xe = { class: "flex min-h-full items-center justify-center p-4" }, be = { class: "relative w-full max-w-md transform rounded-xl bg-white p-6 shadow-xl transition-all dark:bg-dark-800" }, we = { class: "mb-6 text-center" }, Pe = { class: "mt-4 text-xl font-semibold text-gray-900 dark:text-white" }, Ce = { class: "mt-2 text-sm text-gray-500 dark:text-gray-400" }, Ee = { class: "mb-6" }, Ie = { class: "flex justify-center gap-2" }, Ue = ["disabled", "onInput", "onKeydown"], Te = {
  key: 0,
  class: "mt-3 flex items-center justify-center gap-2 text-sm text-gray-500"
}, Se = ["disabled"], ct = /* @__PURE__ */ H({
  __name: "TotpStepUpDialog",
  props: {
    controller: {}
  },
  setup(e) {
    const n = e, { t: a } = q(), c = J(), k = x(!1), p = x(["", "", "", "", "", ""]), r = x([]), w = x(null);
    M(
      () => n.controller.visible.value,
      (l) => {
        l && (f(), S(() => {
          var i;
          return (i = r.value[0]) == null ? void 0 : i.focus();
        }));
      }
    ), M(
      () => p.value.join(""),
      (l) => {
        l.length === 6 && !k.value && P(l);
      }
    );
    async function P(l) {
      k.value = !0;
      try {
        await me.stepUp(l), k.value = !1, f(), n.controller.onVerified();
      } catch (i) {
        k.value = !1, c.showError((i == null ? void 0 : i.message) || a("stepUp.verifyFailed")), f(), S(() => {
          var v;
          return (v = r.value[0]) == null ? void 0 : v.focus();
        });
      }
    }
    function f() {
      p.value = ["", "", "", "", "", ""], r.value.forEach((l) => {
        l && (l.value = "");
      }), w.value && (w.value.value = "");
    }
    function C() {
      k.value || n.controller.onCancel();
    }
    const E = (l, i) => {
      r.value[i] = l;
    }, D = (l, i) => {
      const u = l.target.value.replace(/[^0-9]/g, "");
      p.value[i] = u, u && i < 5 && S(() => {
        var y;
        return (y = r.value[i + 1]) == null ? void 0 : y.focus();
      });
    }, B = (l) => {
      const v = l.target.value.replace(/[^0-9]/g, "").slice(0, 6).split("");
      for (let u = 0; u < 6; u++)
        p.value[u] = v[u] || "", r.value[u] && (r.value[u].value = v[u] || "");
    }, V = (l, i) => {
      var v;
      l.key === "Backspace" && !l.target.value && i > 0 && (l.preventDefault(), (v = r.value[i - 1]) == null || v.focus());
    }, O = (l) => {
      var y;
      l.preventDefault();
      const v = (((y = l.clipboardData) == null ? void 0 : y.getData("text")) || "").replace(/[^0-9]/g, "").slice(0, 6).split("");
      for (let t = 0; t < 6; t++)
        p.value[t] = v[t] || "", r.value[t] && (r.value[t].value = v[t] || "");
      const u = Math.min(v.length, 5);
      S(() => {
        var t;
        return (t = r.value[u]) == null ? void 0 : t.focus();
      });
    };
    return (l, i) => e.controller.visible.value ? (d(), m("div", ge, [
      s("div", xe, [
        s("div", {
          class: "fixed inset-0 bg-black/50 transition-opacity",
          onClick: C
        }),
        s("div", be, [
          s("div", we, [
            i[0] || (i[0] = s("div", { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30" }, [
              s("svg", {
                class: "h-6 w-6 text-primary-600 dark:text-primary-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "1.5"
              }, [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                })
              ])
            ], -1)),
            s("h3", Pe, _(b(a)("stepUp.title")), 1),
            s("p", Ce, _(b(a)("stepUp.hint")), 1)
          ]),
          s("div", Ee, [
            s("input", {
              ref_key: "hiddenOtpInputRef",
              ref: w,
              type: "text",
              inputmode: "numeric",
              autocomplete: "one-time-code",
              maxlength: "6",
              class: "pointer-events-none absolute left-0 top-0 h-px w-px opacity-0",
              "aria-hidden": "true",
              tabindex: "-1",
              onInput: B
            }, null, 544),
            s("div", Ie, [
              (d(), m(j, null, Q(6, (v, u) => s("input", {
                key: u,
                ref_for: !0,
                ref: (y) => E(y, u),
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                pattern: "[0-9]",
                autocomplete: "off",
                class: "h-12 w-10 rounded-lg border border-gray-300 text-center text-lg font-semibold focus:border-primary-500 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700",
                disabled: k.value,
                onInput: (y) => D(y, u),
                onKeydown: (y) => V(y, u),
                onPaste: O
              }, null, 40, Ue)), 64))
            ]),
            k.value ? (d(), m("div", Te, [
              i[1] || (i[1] = s("div", { class: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500" }, null, -1)),
              X(" " + _(b(a)("common.verifying")), 1)
            ])) : g("", !0)
          ]),
          s("button", {
            type: "button",
            class: "btn btn-secondary w-full",
            disabled: k.value,
            onClick: C
          }, _(b(a)("common.cancel")), 9, Se)
        ])
      ])
    ])) : g("", !0);
  }
}), De = ["disabled"], Ve = { class: "select-value" }, $e = { class: "select-icon" }, ze = {
  key: 0,
  class: "select-dropdown"
}, Re = { class: "select-header" }, Be = { class: "select-search" }, Oe = ["placeholder"], Le = ["disabled", "title"], Ne = {
  key: 0,
  class: "h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ae = { class: "select-options" }, Me = { class: "select-option-label" }, je = ["onClick"], Fe = { class: "min-w-0 flex-1" }, Ke = { class: "flex items-center gap-2" }, He = { class: "truncate font-medium" }, qe = {
  key: 0,
  class: "inline-flex flex-shrink-0 items-center rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600 dark:bg-dark-600 dark:text-gray-400"
}, Qe = {
  key: 0,
  class: "inline-flex flex-shrink-0 items-center gap-1 rounded bg-zo-signal-100 px-1.5 py-0.5 text-xs text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400"
}, We = { key: 0 }, Ye = { key: 1 }, Ge = {
  key: 1,
  class: "inline-flex flex-shrink-0 items-center rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-400"
}, Je = { class: "truncate text-xs text-gray-500 dark:text-gray-400" }, Xe = ["onClick", "disabled", "title"], Ze = {
  key: 0,
  class: "h-3.5 w-3.5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, et = {
  key: 0,
  class: "select-empty"
}, tt = /* @__PURE__ */ H({
  __name: "ProxySelector",
  props: {
    modelValue: {},
    proxies: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const { t: a } = q(), c = e, k = n, p = x(!1), r = x(""), w = x(null), P = x(null), f = K({}), C = K(/* @__PURE__ */ new Set()), E = x(!1), D = A(() => c.modelValue === null ? null : c.proxies.find((t) => t.id === c.modelValue) || null), B = A(() => {
      if (!D.value)
        return a("admin.accounts.noProxy");
      const t = D.value;
      return `${t.name} (${t.protocol}://${t.host}:${t.port})`;
    }), V = A(() => {
      if (!r.value)
        return c.proxies;
      const t = r.value.toLowerCase();
      return c.proxies.filter((h) => {
        const o = h.name.toLowerCase(), I = h.host.toLowerCase();
        return o.includes(t) || I.includes(t);
      });
    }), O = () => {
      c.disabled || (p.value = !p.value, p.value && S(() => {
        var t;
        (t = P.value) == null || t.focus();
      }));
    };
    M(() => c.disabled, (t) => {
      t && (p.value = !1, r.value = "");
    });
    const l = (t) => {
      k("update:modelValue", t), p.value = !1, r.value = "";
    }, i = async (t) => {
      var h, o;
      if (!C.has(t.id)) {
        C.add(t.id);
        try {
          const I = await le.proxies.testProxy(t.id);
          f[t.id] = I;
        } catch (I) {
          f[t.id] = {
            success: !1,
            message: ((o = (h = I.response) == null ? void 0 : h.data) == null ? void 0 : o.detail) || "Test failed"
          };
        } finally {
          C.delete(t.id);
        }
      }
    }, v = async () => {
      if (E.value || c.proxies.length === 0) return;
      E.value = !0;
      const t = c.proxies.map(i);
      await Promise.all(t), E.value = !1;
    }, u = (t) => {
      w.value && !w.value.contains(t.target) && (p.value = !1, r.value = "");
    }, y = (t) => {
      t.key === "Escape" && p.value && (p.value = !1, r.value = "");
    };
    return Z(() => {
      document.addEventListener("click", u), document.addEventListener("keydown", y);
    }), ee(() => {
      document.removeEventListener("click", u), document.removeEventListener("keydown", y);
    }), (t, h) => (d(), m("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: w
    }, [
      s("button", {
        type: "button",
        onClick: O,
        disabled: e.disabled,
        class: $([
          "select-trigger",
          p.value && "select-trigger-open",
          e.disabled && "select-trigger-disabled"
        ])
      }, [
        s("span", Ve, _(B.value), 1),
        s("span", $e, [
          L(T, {
            name: "chevronDown",
            size: "md",
            class: $(["transition-transform duration-200", p.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 10, De),
      L(te, { name: "select-dropdown" }, {
        default: se(() => [
          p.value ? (d(), m("div", ze, [
            s("div", Re, [
              s("div", Be, [
                L(T, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                ne(s("input", {
                  ref_key: "searchInputRef",
                  ref: P,
                  "onUpdate:modelValue": h[0] || (h[0] = (o) => r.value = o),
                  type: "text",
                  placeholder: b(a)("admin.proxies.searchProxies"),
                  class: "select-search-input",
                  onClick: h[1] || (h[1] = N(() => {
                  }, ["stop"]))
                }, null, 8, Oe), [
                  [ae, r.value]
                ])
              ]),
              e.proxies.length > 0 ? (d(), m("button", {
                key: 0,
                type: "button",
                onClick: N(v, ["stop"]),
                disabled: E.value,
                class: "batch-test-btn",
                title: b(a)("admin.proxies.batchTest")
              }, [
                E.value ? (d(), m("svg", Ne, [...h[3] || (h[3] = [
                  s("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  s("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ])])) : (d(), z(T, {
                  key: 1,
                  name: "play",
                  size: "sm"
                }))
              ], 8, Le)) : g("", !0)
            ]),
            s("div", Ae, [
              s("div", {
                onClick: h[2] || (h[2] = (o) => l(null)),
                class: $(["select-option", e.modelValue === null && "select-option-selected"])
              }, [
                s("span", Me, _(b(a)("admin.accounts.noProxy")), 1),
                e.modelValue === null ? (d(), z(T, {
                  key: 0,
                  name: "check",
                  size: "sm",
                  class: "text-primary-500"
                })) : g("", !0)
              ], 2),
              (d(!0), m(j, null, Q(V.value, (o) => (d(), m("div", {
                key: o.id,
                onClick: (I) => l(o.id),
                class: $(["select-option", e.modelValue === o.id && "select-option-selected"])
              }, [
                s("div", Fe, [
                  s("div", Ke, [
                    s("span", He, _(o.name), 1),
                    o.account_count !== void 0 ? (d(), m("span", qe, _(o.account_count), 1)) : g("", !0),
                    f[o.id] ? (d(), m(j, { key: 1 }, [
                      f[o.id].success ? (d(), m("span", Qe, [
                        f[o.id].country ? (d(), m("span", We, _(f[o.id].country), 1)) : g("", !0),
                        f[o.id].latency_ms ? (d(), m("span", Ye, _(f[o.id].latency_ms) + "ms", 1)) : g("", !0)
                      ])) : (d(), m("span", Ge, _(b(a)("admin.proxies.testFailed")), 1))
                    ], 64)) : g("", !0)
                  ]),
                  s("div", Je, _(o.protocol) + "://" + _(o.host) + ":" + _(o.port), 1)
                ]),
                s("button", {
                  type: "button",
                  onClick: N((I) => i(o), ["stop"]),
                  disabled: C.has(o.id),
                  class: "test-btn",
                  title: b(a)("admin.proxies.testConnection")
                }, [
                  C.has(o.id) ? (d(), m("svg", Ze, [...h[4] || (h[4] = [
                    s("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }, null, -1),
                    s("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, null, -1)
                  ])])) : (d(), z(T, {
                    key: 1,
                    name: "play",
                    size: "xs"
                  }))
                ], 8, Xe),
                e.modelValue === o.id ? (d(), z(T, {
                  key: 0,
                  name: "check",
                  size: "sm",
                  class: "flex-shrink-0 text-primary-500"
                })) : g("", !0)
              ], 10, je))), 128)),
              V.value.length === 0 && r.value ? (d(), m("div", et, _(b(a)("common.noOptionsFound")), 1)) : g("", !0)
            ])
          ])) : g("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}), rt = /* @__PURE__ */ oe(tt, [["__scopeId", "data-v-4cd66e97"]]);
export {
  rt as P,
  ct as _,
  ke as a,
  ot as i,
  lt as s,
  it as u
};
