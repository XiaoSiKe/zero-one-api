import { P as ll, r as R, Q as nl, R as dl, e as Et, u as pa, f as Ho, d as A, w as qe, A as Ne, v as pe, j as d, n as g, g as f, h as t, s as te, q as $, l as le, i as u, x as U, y as H, F as fe, k as Ce, m as E, _ as Y, B as li, J as ul, z as Uo, S as cl, b as Xe, U as pl, V as Bo, c as ni, p as di, o as ui, W as ko, C as ml, I as ot, E as Tr } from "./cnProviderAdminLeaf-CHNemIo-.js";
import { _ as ca, P as Yo, b as me, S as Te, g as _l, d as Ar, G as Or, C as gl, D as vl } from "./platforms-PDcpwPD4.js";
import { _ as Xa, T as fl } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-D5-_2Rvn.js";
import { _ as hl } from "./EmptyState.vue_vue_type_script_setup_true_lang-7SE9Jis_.js";
import { u as bl, P as yl } from "./useKeyedDebouncedSearch-BLmtxvyp.js";
import { c as zr, f as xl, t as kl, m as At, a as wl, p as Ot } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-gEQjzuRj.js";
import { c as Ta } from "./stableObjectKey-BMHEGo9U.js";
import { a as Cl } from "./apiError-i2TfMBqu.js";
const El = ll("onboarding", () => {
  const e = R(null), i = R(null), a = R(null), n = nl(null);
  function c(C) {
    e.value = C;
  }
  function o(C) {
    i.value = C.nextStep, a.value = C.isCurrentStep;
  }
  function p() {
    i.value = null, a.value = null;
  }
  function h(C) {
    n.value = C ? dl(C) : null;
  }
  function _() {
    return n.value;
  }
  function b() {
    var C, D;
    return ((D = (C = n.value) == null ? void 0 : C.isActive) == null ? void 0 : D.call(C)) ?? !1;
  }
  function w() {
    e.value && e.value();
  }
  async function P(C = 0) {
    i.value && await i.value(C);
  }
  function I(C) {
    return a.value ? a.value(C) : !1;
  }
  return {
    setReplayCallback: c,
    setControlMethods: o,
    clearControlMethods: p,
    setDriverInstance: h,
    getDriverInstance: _,
    isDriverActive: b,
    replay: w,
    nextStep: P,
    isCurrentStep: I
  };
}), Sl = {
  key: 0,
  class: "space-y-4"
}, Ml = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, Pl = { class: "font-medium text-gray-900 dark:text-white" }, Rl = { class: "text-gray-600 dark:text-gray-400" }, $l = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, Dl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Tl = { class: "flex items-end gap-2" }, Al = { class: "relative flex-1" }, Ol = ["placeholder"], zl = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, Ul = ["onClick"], Vl = { class: "text-gray-400" }, Fl = { class: "text-gray-900 dark:text-white" }, Nl = {
  key: 0,
  class: "text-xs text-gray-400"
}, Il = { class: "w-24" }, Ll = ["disabled"], jl = {
  key: 0,
  class: "mt-3 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-dark-600"
}, Gl = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, ql = { class: "flex items-center gap-1.5" }, Hl = ["disabled"], Bl = { class: "ml-auto" }, Yl = {
  key: 0,
  class: "flex justify-center py-6"
}, Kl = { key: 1 }, Xl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Wl = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Ql = { key: 1 }, Jl = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, Zl = { class: "max-h-[420px] overflow-auto" }, en = { class: "w-full min-w-max text-sm" }, tn = { class: "sticky top-0 z-[1]" }, an = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, on = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, rn = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, sn = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, ln = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, nn = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, dn = {
  key: 0,
  class: "px-3 py-2 text-left text-xs font-medium text-primary-600 dark:text-primary-400"
}, un = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, cn = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, pn = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, mn = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, _n = ["title"], gn = { class: "whitespace-nowrap px-3 py-2" }, vn = { class: "whitespace-nowrap px-3 py-2" }, fn = ["value", "placeholder", "onChange"], hn = {
  key: 0,
  class: "whitespace-nowrap px-3 py-2 font-medium text-primary-600 dark:text-primary-400"
}, bn = { class: "px-2 py-2" }, yn = ["onClick"], xn = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, kn = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, wn = { class: "ml-auto flex items-center gap-3" }, Cn = ["disabled"], En = /* @__PURE__ */ Et({
  __name: "GroupRateMultipliersModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(e, { emit: i }) {
    const a = e, n = i, { t: c } = pa(), o = Ho(), p = R(!1), h = R(!1), _ = R([]), b = R([]), w = R(""), P = R([]), I = R(!1), C = R(null), D = R(null), V = R(1), ie = R(10), O = R(null);
    let he;
    const F = A(() => {
      var T;
      switch ((T = a.group) == null ? void 0 : T.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), ne = A(() => O.value != null && O.value > 0 && O.value !== 1), de = (T) => {
      var X;
      const N = T ?? ((X = a.group) == null ? void 0 : X.rate_multiplier) ?? 1;
      return O.value ? parseFloat((N * O.value).toFixed(6)) : N;
    }, ye = A(() => {
      if (b.value.length !== _.value.length) return !0;
      const T = new Map(_.value.map((N) => [N.user_id, N.rate_multiplier ?? null]));
      return b.value.some((N) => T.get(N.user_id) !== (N.rate_multiplier ?? null));
    }), ue = A(() => {
      const T = (V.value - 1) * ie.value;
      return b.value.slice(T, T + ie.value);
    }), Se = (T) => T.map((N) => ({ ...N })), _e = async () => {
      if (a.group) {
        p.value = !0;
        try {
          const T = await me.groups.getGroupRateMultipliers(a.group.id);
          _.value = T.filter((N) => N.rate_multiplier != null), b.value = Se(_.value), z();
        } catch (T) {
          o.showError(c("admin.groups.failedToLoad")), console.error("Error loading group rate multipliers:", T);
        } finally {
          p.value = !1;
        }
      }
    }, z = () => {
      const T = Math.max(1, Math.ceil(b.value.length / ie.value));
      V.value > T && (V.value = T);
    };
    qe(() => a.show, (T) => {
      T && a.group && (V.value = 1, O.value = null, w.value = "", P.value = [], C.value = null, D.value = null, _e());
    });
    const Z = (T) => {
      ie.value = T, V.value = 1;
    }, oe = () => {
      if (clearTimeout(he), C.value = null, !w.value.trim()) {
        P.value = [], I.value = !1;
        return;
      }
      he = setTimeout(async () => {
        try {
          const T = await me.users.list(1, 10, { search: w.value.trim() });
          P.value = T.items, I.value = !0;
        } catch {
          P.value = [];
        }
      }, 300);
    }, xe = (T) => {
      C.value = T, w.value = T.email, I.value = !1, P.value = [];
    }, ee = () => {
      if (!C.value || !D.value) return;
      const T = C.value, N = b.value.findIndex((Me) => Me.user_id === T.id), X = {
        user_id: T.id,
        user_name: T.username || "",
        user_email: T.email,
        user_notes: T.notes || "",
        user_status: T.status || "active",
        rate_multiplier: D.value,
        rpm_override: null
      };
      N >= 0 ? b.value[N] = X : b.value.push(X), w.value = "", C.value = null, D.value = null, z();
    }, se = (T, N) => {
      const X = b.value.find((Qe) => Qe.user_id === T);
      if (!X) return;
      if (N.trim() === "") {
        X.rate_multiplier = null;
        return;
      }
      const Me = parseFloat(N);
      isNaN(Me) || (X.rate_multiplier = Me);
    }, ge = (T) => {
      b.value = b.value.filter((N) => N.user_id !== T), z();
    }, ce = () => {
      if (!(!O.value || O.value <= 0)) {
        for (const T of b.value)
          T.rate_multiplier != null && (T.rate_multiplier = parseFloat((T.rate_multiplier * O.value).toFixed(6)));
        O.value = null;
      }
    }, Oe = () => {
      b.value = [];
    }, Le = () => {
      b.value = Se(_.value), O.value = null, z();
    }, L = async () => {
      if (a.group) {
        h.value = !0;
        try {
          const T = b.value.filter((N) => N.rate_multiplier != null).map((N) => ({
            user_id: N.user_id,
            rate_multiplier: N.rate_multiplier
          }));
          await me.groups.batchSetGroupRateMultipliers(a.group.id, T), o.showSuccess(c("admin.groups.rateSaved")), n("success"), n("close");
        } catch (T) {
          o.showError(c("admin.groups.failedToSave")), console.error("Error saving rate multipliers:", T);
        } finally {
          h.value = !1;
        }
      }
    }, K = () => {
      ye.value && (b.value = Se(_.value)), n("close");
    }, J = () => {
      I.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", J), (T, N) => (g(), Ne(ca, {
      show: e.show,
      title: d(c)("admin.groups.rateMultipliersTitle"),
      width: "wide",
      onClose: K
    }, {
      default: pe(() => [
        e.group ? (g(), f("div", Sl, [
          t("div", Ml, [
            t("span", {
              class: te(["inline-flex items-center gap-1.5", F.value])
            }, [
              $(Xa, {
                platform: e.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              le(" " + u(d(c)("admin.groups.platforms." + e.group.platform)), 1)
            ], 2),
            N[5] || (N[5] = t("span", { class: "text-gray-400" }, "|", -1)),
            t("span", Pl, u(e.group.name), 1),
            N[6] || (N[6] = t("span", { class: "text-gray-400" }, "|", -1)),
            t("span", Rl, u(d(c)("admin.groups.columns.rateMultiplier")) + ": " + u(e.group.rate_multiplier) + "x ", 1)
          ]),
          t("div", $l, [
            t("h4", Dl, u(d(c)("admin.groups.addUserRate")), 1),
            t("div", Tl, [
              t("div", Al, [
                U(t("input", {
                  "onUpdate:modelValue": N[0] || (N[0] = (X) => w.value = X),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: d(c)("admin.groups.searchUserPlaceholder"),
                  onInput: oe,
                  onFocus: N[1] || (N[1] = (X) => I.value = !0)
                }, null, 40, Ol), [
                  [H, w.value]
                ]),
                I.value && P.value.length > 0 ? (g(), f("div", zl, [
                  (g(!0), f(fe, null, Ce(P.value, (X) => (g(), f("button", {
                    key: X.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (Me) => xe(X)
                  }, [
                    t("span", Vl, "#" + u(X.id), 1),
                    t("span", Fl, u(X.username || X.email), 1),
                    X.username ? (g(), f("span", Nl, u(X.email), 1)) : E("", !0)
                  ], 8, Ul))), 128))
                ])) : E("", !0)
              ]),
              t("div", Il, [
                U(t("input", {
                  "onUpdate:modelValue": N[2] || (N[2] = (X) => D.value = X),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "1.0"
                }, null, 512), [
                  [
                    H,
                    D.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              t("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !C.value || !D.value,
                onClick: ee
              }, u(d(c)("common.add")), 9, Ll)
            ]),
            b.value.length > 0 ? (g(), f("div", jl, [
              t("span", Gl, u(d(c)("admin.groups.batchAdjust")), 1),
              t("div", ql, [
                N[7] || (N[7] = t("span", { class: "text-xs text-gray-400" }, "×", -1)),
                U(t("input", {
                  "onUpdate:modelValue": N[3] || (N[3] = (X) => O.value = X),
                  type: "number",
                  step: "0.1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                  placeholder: "0.5"
                }, null, 512), [
                  [
                    H,
                    O.value,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                t("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm shrink-0 px-2.5 py-1 text-xs",
                  disabled: !O.value || O.value <= 0,
                  onClick: ce
                }, u(d(c)("admin.groups.applyMultiplier")), 9, Hl)
              ]),
              t("div", Bl, [
                t("button", {
                  type: "button",
                  class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                  onClick: Oe
                }, u(d(c)("admin.groups.clearAll")), 1)
              ])
            ])) : E("", !0)
          ]),
          p.value ? (g(), f("div", Yl, [...N[8] || (N[8] = [
            t("svg", {
              class: "h-6 w-6 animate-spin text-primary-500",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              t("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              t("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)
          ])])) : (g(), f("div", Kl, [
            t("h4", Xl, u(d(c)("admin.groups.rateMultipliers")) + " (" + u(b.value.length) + ") ", 1),
            b.value.length === 0 ? (g(), f("div", Wl, u(d(c)("admin.groups.noRateMultipliers")), 1)) : (g(), f("div", Ql, [
              t("div", Jl, [
                t("div", Zl, [
                  t("table", en, [
                    t("thead", tn, [
                      t("tr", an, [
                        t("th", on, u(d(c)("admin.groups.columns.userEmail")), 1),
                        N[9] || (N[9] = t("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        t("th", rn, u(d(c)("admin.groups.columns.userName")), 1),
                        t("th", sn, u(d(c)("admin.groups.columns.userNotes")), 1),
                        t("th", ln, u(d(c)("admin.groups.columns.userStatus")), 1),
                        t("th", nn, u(d(c)("admin.groups.columns.rateMultiplier")), 1),
                        ne.value ? (g(), f("th", dn, u(d(c)("admin.groups.finalRate")), 1)) : E("", !0),
                        N[10] || (N[10] = t("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    t("tbody", un, [
                      (g(!0), f(fe, null, Ce(ue.value, (X) => {
                        var Me;
                        return g(), f("tr", {
                          key: X.user_id,
                          class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                        }, [
                          t("td", cn, u(X.user_email), 1),
                          t("td", pn, u(X.user_id), 1),
                          t("td", mn, u(X.user_name || "-"), 1),
                          t("td", {
                            class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                            title: X.user_notes
                          }, u(X.user_notes || "-"), 9, _n),
                          t("td", gn, [
                            t("span", {
                              class: te([
                                "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                                X.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                              ])
                            }, u(X.user_status), 3)
                          ]),
                          t("td", vn, [
                            t("input", {
                              type: "number",
                              step: "0.001",
                              min: "0.001",
                              autocomplete: "off",
                              value: X.rate_multiplier ?? "",
                              placeholder: String(((Me = a.group) == null ? void 0 : Me.rate_multiplier) ?? 1),
                              class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                              onChange: (Qe) => se(X.user_id, Qe.target.value)
                            }, null, 40, fn)
                          ]),
                          ne.value ? (g(), f("td", hn, u(de(X.rate_multiplier)), 1)) : E("", !0),
                          t("td", bn, [
                            t("button", {
                              type: "button",
                              class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              onClick: (Qe) => ge(X.user_id)
                            }, [
                              $(Y, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, yn)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              $(Yo, {
                total: b.value.length,
                page: V.value,
                "page-size": ie.value,
                "onUpdate:page": N[4] || (N[4] = (X) => V.value = X),
                "onUpdate:pageSize": Z
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          t("div", xn, [
            ye.value ? (g(), f(fe, { key: 0 }, [
              t("span", kn, u(d(c)("admin.groups.unsavedChanges")), 1),
              t("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: Le
              }, u(d(c)("admin.groups.revertChanges")), 1)
            ], 64)) : E("", !0),
            t("div", wn, [
              t("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: K
              }, u(d(c)("common.close")), 1),
              ye.value ? (g(), f("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: h.value,
                onClick: L
              }, [
                h.value ? (g(), Ne(Y, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : E("", !0),
                le(" " + u(d(c)("common.save")), 1)
              ], 8, Cn)) : E("", !0)
            ])
          ])
        ])) : E("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Sn = /* @__PURE__ */ li(En, [["__scopeId", "data-v-da4d2562"]]), Mn = {
  key: 0,
  class: "space-y-4"
}, Pn = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, Rn = { class: "font-medium text-gray-900 dark:text-white" }, $n = { class: "text-gray-600 dark:text-gray-400" }, Dn = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, Tn = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, An = { class: "flex items-end gap-2" }, On = { class: "relative flex-1" }, zn = ["placeholder"], Un = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, Vn = ["onClick"], Fn = { class: "text-gray-400" }, Nn = { class: "text-gray-900 dark:text-white" }, In = {
  key: 0,
  class: "text-xs text-gray-400"
}, Ln = { class: "w-24" }, jn = ["disabled"], Gn = {
  key: 0,
  class: "mt-3 flex items-center justify-end border-t border-gray-100 pt-3 dark:border-dark-600"
}, qn = ["disabled"], Hn = {
  key: 0,
  class: "flex justify-center py-6"
}, Bn = { key: 1 }, Yn = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Kn = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Xn = { key: 1 }, Wn = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, Qn = { class: "max-h-[420px] overflow-auto" }, Jn = { class: "w-full min-w-max text-sm" }, Zn = { class: "sticky top-0 z-[1]" }, ed = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, td = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, ad = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, od = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, rd = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, id = ["title"], sd = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, ld = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, nd = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, dd = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, ud = ["title"], cd = { class: "whitespace-nowrap px-3 py-2" }, pd = { class: "whitespace-nowrap px-3 py-2" }, md = ["value", "onChange"], _d = { class: "px-2 py-2" }, gd = ["onClick"], vd = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, fd = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, hd = { class: "ml-auto flex items-center gap-3" }, bd = ["disabled"], yd = /* @__PURE__ */ Et({
  __name: "GroupRPMOverridesModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(e, { emit: i }) {
    const a = e, n = i, { t: c } = pa(), o = Ho(), p = R(!1), h = R(!1), _ = R([]), b = R([]), w = R(""), P = R([]), I = R(!1), C = R(null), D = R(null), V = R(1), ie = R(10);
    let O;
    const he = A(() => {
      var L;
      switch ((L = a.group) == null ? void 0 : L.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), F = A(() => {
      if (b.value.length !== _.value.length) return !0;
      const L = new Map(_.value.map((K) => [K.user_id, K.rpm_override]));
      return b.value.some((K) => L.get(K.user_id) !== K.rpm_override);
    }), ne = A(() => {
      const L = (V.value - 1) * ie.value;
      return b.value.slice(L, L + ie.value);
    }), de = (L) => L.map((K) => ({ ...K })), ye = async () => {
      if (a.group) {
        p.value = !0;
        try {
          _.value = await me.groups.getGroupRPMOverrides(a.group.id), b.value = de(_.value), ue();
        } catch (L) {
          o.showError(c("admin.groups.failedToLoad")), console.error("Error loading RPM overrides:", L);
        } finally {
          p.value = !1;
        }
      }
    }, ue = () => {
      const L = Math.max(1, Math.ceil(b.value.length / ie.value));
      V.value > L && (V.value = L);
    };
    qe(() => a.show, (L) => {
      L && a.group && (V.value = 1, w.value = "", P.value = [], C.value = null, D.value = null, ye());
    });
    const Se = (L) => {
      ie.value = L, V.value = 1;
    }, _e = () => {
      if (clearTimeout(O), C.value = null, !w.value.trim()) {
        P.value = [], I.value = !1;
        return;
      }
      O = setTimeout(async () => {
        try {
          const L = await me.users.list(1, 10, { search: w.value.trim() });
          P.value = L.items, I.value = !0;
        } catch {
          P.value = [];
        }
      }, 300);
    }, z = (L) => {
      C.value = L, w.value = L.email, I.value = !1, P.value = [];
    }, Z = () => {
      if (!C.value || D.value == null || D.value < 0) return;
      const L = C.value, K = b.value.findIndex((T) => T.user_id === L.id), J = {
        user_id: L.id,
        user_name: L.username || "",
        user_email: L.email,
        user_notes: L.notes || "",
        user_status: L.status || "active",
        rpm_override: D.value
      };
      K >= 0 ? b.value[K] = J : b.value.push(J), w.value = "", C.value = null, D.value = null, ue();
    }, oe = (L, K) => {
      const J = parseInt(K, 10);
      if (isNaN(J) || J < 0) return;
      const T = b.value.find((N) => N.user_id === L);
      T && (T.rpm_override = J);
    }, xe = (L) => {
      b.value = b.value.filter((K) => K.user_id !== L), ue();
    }, ee = R(!1), se = async () => {
      if (!(!a.group || ee.value)) {
        ee.value = !0;
        try {
          await me.groups.clearGroupRPMOverrides(a.group.id), b.value = [], _.value = [], o.showSuccess(c("admin.groups.rpmSaved"));
        } catch (L) {
          o.showError(c("admin.groups.failedToSave")), console.error("Error clearing RPM overrides:", L);
        } finally {
          ee.value = !1;
        }
      }
    }, ge = () => {
      b.value = de(_.value), ue();
    }, ce = async () => {
      if (a.group) {
        h.value = !0;
        try {
          const L = b.value.map((K) => ({
            user_id: K.user_id,
            rpm_override: K.rpm_override
          }));
          await me.groups.batchSetGroupRPMOverrides(a.group.id, L), o.showSuccess(c("admin.groups.rpmSaved")), n("success"), n("close");
        } catch (L) {
          o.showError(c("admin.groups.failedToSave")), console.error("Error saving RPM overrides:", L);
        } finally {
          h.value = !1;
        }
      }
    }, Oe = () => {
      F.value && (b.value = de(_.value)), n("close");
    }, Le = () => {
      I.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", Le), (L, K) => (g(), Ne(ca, {
      show: e.show,
      title: d(c)("admin.groups.rpmOverridesTitle"),
      width: "wide",
      onClose: Oe
    }, {
      default: pe(() => [
        e.group ? (g(), f("div", Mn, [
          t("div", Pn, [
            t("span", {
              class: te(["inline-flex items-center gap-1.5", he.value])
            }, [
              $(Xa, {
                platform: e.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              le(" " + u(d(c)("admin.groups.platforms." + e.group.platform)), 1)
            ], 2),
            K[4] || (K[4] = t("span", { class: "text-gray-400" }, "|", -1)),
            t("span", Rn, u(e.group.name), 1),
            K[5] || (K[5] = t("span", { class: "text-gray-400" }, "|", -1)),
            t("span", $n, u(d(c)("admin.groups.groupRpmDefault")) + ": " + u(e.group.rpm_limit || 0), 1)
          ]),
          t("div", Dn, [
            t("h4", Tn, u(d(c)("admin.groups.addUserRpm")), 1),
            t("div", An, [
              t("div", On, [
                U(t("input", {
                  "onUpdate:modelValue": K[0] || (K[0] = (J) => w.value = J),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: d(c)("admin.groups.searchUserPlaceholder"),
                  onInput: _e,
                  onFocus: K[1] || (K[1] = (J) => I.value = !0)
                }, null, 40, zn), [
                  [H, w.value]
                ]),
                I.value && P.value.length > 0 ? (g(), f("div", Un, [
                  (g(!0), f(fe, null, Ce(P.value, (J) => (g(), f("button", {
                    key: J.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (T) => z(J)
                  }, [
                    t("span", Fn, "#" + u(J.id), 1),
                    t("span", Nn, u(J.username || J.email), 1),
                    J.username ? (g(), f("span", In, u(J.email), 1)) : E("", !0)
                  ], 8, Vn))), 128))
                ])) : E("", !0)
              ]),
              t("div", Ln, [
                U(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (J) => D.value = J),
                  type: "number",
                  step: "1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "100"
                }, null, 512), [
                  [
                    H,
                    D.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              t("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !C.value || D.value == null || D.value < 0,
                onClick: Z
              }, u(d(c)("common.add")), 9, jn)
            ]),
            b.value.length > 0 ? (g(), f("div", Gn, [
              t("button", {
                type: "button",
                disabled: ee.value,
                class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                onClick: se
              }, [
                ee.value ? (g(), Ne(Y, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 inline animate-spin"
                })) : E("", !0),
                le(" " + u(d(c)("admin.groups.clearAll")), 1)
              ], 8, qn)
            ])) : E("", !0)
          ]),
          p.value ? (g(), f("div", Hn, [...K[6] || (K[6] = [
            t("svg", {
              class: "h-6 w-6 animate-spin text-primary-500",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              t("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              t("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)
          ])])) : (g(), f("div", Bn, [
            t("h4", Yn, u(d(c)("admin.groups.rpmOverrides")) + " (" + u(b.value.length) + ") ", 1),
            b.value.length === 0 ? (g(), f("div", Kn, u(d(c)("admin.groups.noRpmOverrides")), 1)) : (g(), f("div", Xn, [
              t("div", Wn, [
                t("div", Qn, [
                  t("table", Jn, [
                    t("thead", Zn, [
                      t("tr", ed, [
                        t("th", td, u(d(c)("admin.groups.columns.userEmail")), 1),
                        K[7] || (K[7] = t("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        t("th", ad, u(d(c)("admin.groups.columns.userName")), 1),
                        t("th", od, u(d(c)("admin.groups.columns.userNotes")), 1),
                        t("th", rd, u(d(c)("admin.groups.columns.userStatus")), 1),
                        t("th", {
                          class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400",
                          title: d(c)("admin.groups.columns.rpmOverrideHint")
                        }, u(d(c)("admin.groups.columns.rpmOverride")), 9, id),
                        K[8] || (K[8] = t("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    t("tbody", sd, [
                      (g(!0), f(fe, null, Ce(ne.value, (J) => (g(), f("tr", {
                        key: J.user_id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        t("td", ld, u(J.user_email), 1),
                        t("td", nd, u(J.user_id), 1),
                        t("td", dd, u(J.user_name || "-"), 1),
                        t("td", {
                          class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                          title: J.user_notes
                        }, u(J.user_notes || "-"), 9, ud),
                        t("td", cd, [
                          t("span", {
                            class: te([
                              "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                              J.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                            ])
                          }, u(J.user_status), 3)
                        ]),
                        t("td", pd, [
                          t("input", {
                            type: "number",
                            step: "1",
                            min: "0",
                            autocomplete: "off",
                            value: J.rpm_override,
                            class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                            onChange: (T) => oe(J.user_id, T.target.value)
                          }, null, 40, md)
                        ]),
                        t("td", _d, [
                          t("button", {
                            type: "button",
                            class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            onClick: (T) => xe(J.user_id)
                          }, [
                            $(Y, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, gd)
                        ])
                      ]))), 128))
                    ])
                  ])
                ])
              ]),
              $(Yo, {
                total: b.value.length,
                page: V.value,
                "page-size": ie.value,
                "onUpdate:page": K[3] || (K[3] = (J) => V.value = J),
                "onUpdate:pageSize": Se
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          t("div", vd, [
            F.value ? (g(), f(fe, { key: 0 }, [
              t("span", fd, u(d(c)("admin.groups.unsavedChanges")), 1),
              t("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: ge
              }, u(d(c)("admin.groups.revertChanges")), 1)
            ], 64)) : E("", !0),
            t("div", hd, [
              t("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: Oe
              }, u(d(c)("common.close")), 1),
              F.value ? (g(), f("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: h.value,
                onClick: ce
              }, [
                h.value ? (g(), Ne(Y, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : E("", !0),
                le(" " + u(d(c)("common.save")), 1)
              ], 8, bd)) : E("", !0)
            ])
          ])
        ])) : E("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), xd = /* @__PURE__ */ li(yd, [["__scopeId", "data-v-c4806d0e"]]), kd = ["id"], wd = { class: "flex justify-end gap-3 pt-4" }, Cd = ["form", "disabled"], Ed = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Sd = /* @__PURE__ */ Et({
  __name: "GroupEditorDialog",
  props: {
    mode: {},
    show: { type: Boolean },
    title: {},
    ready: { type: Boolean, default: !0 },
    submitting: { type: Boolean }
  },
  emits: ["close", "submit"],
  setup(e, { emit: i }) {
    const a = e, n = i, { t: c } = pa(), o = A(() => `${a.mode}-group-form`), p = A(() => c(a.mode === "edit" ? "admin.groups.updating" : "admin.groups.creating")), h = A(() => c(a.mode === "edit" ? "common.update" : "common.create"));
    return (_, b) => (g(), Ne(ca, {
      show: e.show,
      title: e.title,
      width: "normal",
      onClose: b[2] || (b[2] = (w) => n("close"))
    }, {
      footer: pe(() => [
        t("div", wd, [
          t("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: b[1] || (b[1] = (w) => n("close"))
          }, u(d(c)("common.cancel")), 1),
          t("button", {
            type: "submit",
            form: o.value,
            disabled: e.submitting,
            class: "btn btn-primary",
            "data-tour": "group-form-submit"
          }, [
            e.submitting ? (g(), f("svg", Ed, [...b[3] || (b[3] = [
              t("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              t("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])])) : E("", !0),
            le(" " + u(e.submitting ? p.value : h.value), 1)
          ], 8, Cd)
        ])
      ]),
      default: pe(() => [
        e.ready ? (g(), f("form", {
          key: 0,
          id: o.value,
          class: "space-y-5",
          onSubmit: b[0] || (b[0] = Uo((w) => n("submit"), ["prevent"]))
        }, [
          ul(_.$slots, "default")
        ], 40, kd)) : E("", !0)
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
}), Md = { class: "flex flex-col gap-1" }, Pd = { class: "flex items-center gap-1" }, Rd = { class: "font-mono" }, $d = { class: "font-mono" }, Dd = {
  key: 0,
  class: "flex items-center gap-1"
}, Td = { class: "font-mono" }, Ad = { class: "font-mono" }, Od = {
  key: 1,
  class: "flex items-center gap-1"
}, zd = { class: "font-mono" }, Ud = { class: "font-mono" }, Vd = /* @__PURE__ */ Et({
  __name: "GroupCapacityBadge",
  props: {
    concurrencyUsed: { default: 0 },
    concurrencyMax: { default: 0 },
    sessionsUsed: { default: 0 },
    sessionsMax: { default: 0 },
    rpmUsed: { default: 0 },
    rpmMax: { default: 0 }
  },
  setup(e) {
    function i(a, n) {
      return n > 0 && a >= n ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : a > 0 ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
    return (a, n) => (g(), f("div", Md, [
      t("div", Pd, [
        t("span", {
          class: te([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            i(e.concurrencyUsed, e.concurrencyMax)
          ])
        }, [
          n[0] || (n[0] = t("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            })
          ], -1)),
          t("span", Rd, u(e.concurrencyUsed), 1),
          n[1] || (n[1] = t("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          t("span", $d, u(e.concurrencyMax), 1)
        ], 2)
      ]),
      e.sessionsMax > 0 ? (g(), f("div", Dd, [
        t("span", {
          class: te([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            i(e.sessionsUsed, e.sessionsMax)
          ])
        }, [
          n[2] || (n[2] = t("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            })
          ], -1)),
          t("span", Td, u(e.sessionsUsed), 1),
          n[3] || (n[3] = t("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          t("span", Ad, u(e.sessionsMax), 1)
        ], 2)
      ])) : E("", !0),
      e.rpmMax > 0 ? (g(), f("div", Od, [
        t("span", {
          class: te([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            i(e.rpmUsed, e.rpmMax)
          ])
        }, [
          n[4] || (n[4] = t("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            })
          ], -1)),
          t("span", zd, u(e.rpmUsed), 1),
          n[5] || (n[5] = t("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          t("span", Ud, u(e.rpmMax), 1)
        ], 2)
      ])) : E("", !0)
    ]));
  }
}), Fd = [
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max"
], ci = (e) => La(e) ? Fd : [];
function La(e) {
  return e === "openai" || e === "composite";
}
function Nd(e) {
  return ci(e).map((i) => ({
    value: i,
    label: i
  }));
}
function Ct(e, i) {
  const a = (i == null ? void 0 : i.trim().toLowerCase()) ?? "";
  return ci(e).some(
    (n) => n === a
  ) ? a : "";
}
let Ur = 0;
function pi(e = {}) {
  return Ur += 1, {
    id: `reasoning-effort-mapping-${Ur}`,
    from: e.from ?? "",
    to: e.to ?? ""
  };
}
function wo(e, i = "openai") {
  return (e ?? []).flatMap((a) => {
    const n = Ct(i, a.from), c = Ct(i, a.to);
    return n && c ? [pi({ from: n, to: c })] : [];
  });
}
function Aa(e) {
  return e.map((i) => ({
    from: i.from.trim(),
    to: i.to.trim()
  }));
}
function Id(e, i = "openai") {
  const a = {}, n = /* @__PURE__ */ new Map();
  return e.forEach((c) => {
    const o = c.from.trim(), p = c.to.trim();
    if (!o)
      a[c.id] = { ...a[c.id], from: "fromRequired" };
    else if (!Ct(i, o))
      a[c.id] = { ...a[c.id], from: "unsupportedFrom" };
    else {
      const h = o.toLowerCase();
      n.set(h, [...n.get(h) ?? [], c]);
    }
    p ? Ct(i, p) || (a[c.id] = { ...a[c.id], to: "unsupportedTo" }) : a[c.id] = { ...a[c.id], to: "toRequired" };
  }), n.forEach((c) => {
    c.length < 2 || c.forEach((o) => {
      a[o.id] = { ...a[o.id], from: "duplicateFrom" };
    });
  }), a;
}
const Ld = { class: "space-y-4" }, jd = ["for"], Gd = { class: "input-hint" }, qd = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Hd = { class: "mb-3 flex items-center justify-between gap-3" }, Bd = { class: "input-label mb-0" }, Yd = {
  key: 0,
  class: "space-y-2"
}, Kd = { class: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto] md:items-start" }, Xd = ["for"], Wd = ["id"], Qd = { class: "hidden pt-8 text-gray-400 md:block dark:text-dark-400" }, Jd = ["for"], Zd = ["id"], eu = ["title", "aria-label", "onClick"], tu = /* @__PURE__ */ Et({
  __name: "ReasoningEffortPolicyFields",
  props: {
    idPrefix: {},
    platform: {},
    maxEffort: {},
    mappings: {}
  },
  emits: ["update:maxEffort", "update:mappings"],
  setup(e, { expose: i, emit: a }) {
    const n = e, c = a, { t: o } = pa(), p = R(!1), h = A(
      () => Nd(n.platform)
    ), _ = A(
      () => Id(n.mappings, n.platform)
    ), b = (O) => O == null ? "" : String(O), w = (O) => {
      c("update:maxEffort", b(O));
    }, P = (O, he, F) => {
      c(
        "update:mappings",
        n.mappings.map(
          (ne) => ne.id === O ? { ...ne, [he]: b(F) } : ne
        )
      );
    }, I = () => {
      c("update:mappings", [
        ...n.mappings,
        pi()
      ]);
    }, C = (O) => {
      c(
        "update:mappings",
        n.mappings.filter((he) => he.id !== O)
      );
    }, D = (O) => O ? o(`admin.groups.form.${O}`) : "";
    return i({ validate: () => (p.value = !0, Object.keys(_.value).length === 0), resetValidation: () => {
      p.value = !1;
    } }), (O, he) => (g(), f("div", Ld, [
      t("div", null, [
        t("label", {
          for: `${e.idPrefix}-max-effort`,
          class: "input-label"
        }, u(d(o)("admin.groups.form.maxReasoningEffort")), 9, jd),
        $(Te, {
          id: `${e.idPrefix}-max-effort`,
          "model-value": e.maxEffort,
          options: h.value,
          placeholder: d(o)("admin.groups.form.maxReasoningEffortUnlimited"),
          "aria-label": d(o)("admin.groups.form.maxReasoningEffort"),
          searchable: !1,
          clearable: "",
          "onUpdate:modelValue": w
        }, null, 8, ["id", "model-value", "options", "placeholder", "aria-label"]),
        t("p", Gd, u(d(o)("admin.groups.form.maxReasoningEffortHint")), 1)
      ]),
      t("div", qd, [
        t("div", Hd, [
          t("label", Bd, u(d(o)("admin.groups.form.reasoningEffortMappings")), 1),
          t("button", {
            type: "button",
            class: "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-primary-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-300",
            onClick: I
          }, [
            $(Y, {
              name: "plus",
              size: "sm"
            }),
            le(" " + u(d(o)("admin.groups.form.addReasoningEffortMapping")), 1)
          ])
        ]),
        e.mappings.length > 0 ? (g(), f("div", Yd, [
          (g(!0), f(fe, null, Ce(e.mappings, (F) => {
            var ne, de, ye, ue, Se, _e, z, Z;
            return g(), f("div", {
              key: F.id,
              class: "rounded-lg border border-gray-200 bg-gray-50/40 p-3 dark:border-dark-600 dark:bg-dark-800/40"
            }, [
              t("div", Kd, [
                t("div", null, [
                  t("label", {
                    for: `${e.idPrefix}-${F.id}-from`,
                    class: "input-label"
                  }, u(d(o)("admin.groups.form.reasoningEffortFrom")), 9, Xd),
                  $(Te, {
                    id: `${e.idPrefix}-${F.id}-from`,
                    "model-value": F.from,
                    options: h.value,
                    placeholder: d(o)("admin.groups.form.reasoningEffortFromPlaceholder"),
                    error: p.value && !!((ne = _.value[F.id]) != null && ne.from),
                    "aria-label": d(o)("admin.groups.form.reasoningEffortFrom"),
                    "aria-describedby": p.value && ((de = _.value[F.id]) != null && de.from) ? `${e.idPrefix}-${F.id}-from-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (oe) => P(F.id, "from", oe)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  p.value && ((ye = _.value[F.id]) != null && ye.from) ? (g(), f("p", {
                    key: 0,
                    id: `${e.idPrefix}-${F.id}-from-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, u(D((ue = _.value[F.id]) == null ? void 0 : ue.from)), 9, Wd)) : E("", !0)
                ]),
                t("div", Qd, [
                  $(Y, {
                    name: "arrowRight",
                    size: "sm"
                  })
                ]),
                t("div", null, [
                  t("label", {
                    for: `${e.idPrefix}-${F.id}-to`,
                    class: "input-label"
                  }, u(d(o)("admin.groups.form.reasoningEffortTo")), 9, Jd),
                  $(Te, {
                    id: `${e.idPrefix}-${F.id}-to`,
                    "model-value": F.to,
                    options: h.value,
                    placeholder: d(o)("admin.groups.form.reasoningEffortToPlaceholder"),
                    error: p.value && !!((Se = _.value[F.id]) != null && Se.to),
                    "aria-label": d(o)("admin.groups.form.reasoningEffortTo"),
                    "aria-describedby": p.value && ((_e = _.value[F.id]) != null && _e.to) ? `${e.idPrefix}-${F.id}-to-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (oe) => P(F.id, "to", oe)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  p.value && ((z = _.value[F.id]) != null && z.to) ? (g(), f("p", {
                    key: 0,
                    id: `${e.idPrefix}-${F.id}-to-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, u(D((Z = _.value[F.id]) == null ? void 0 : Z.to)), 9, Zd)) : E("", !0)
                ]),
                t("button", {
                  type: "button",
                  class: "flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 md:mt-6 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                  title: d(o)("admin.groups.form.removeReasoningEffortMapping"),
                  "aria-label": d(o)("admin.groups.form.removeReasoningEffortMapping"),
                  onClick: (oe) => C(F.id)
                }, [
                  $(Y, {
                    name: "trash",
                    size: "sm"
                  })
                ], 8, eu)
              ])
            ]);
          }), 128))
        ])) : E("", !0)
      ])
    ]));
  }
});
var au = Object.defineProperty, Wa = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, _i = Object.prototype.propertyIsEnumerable, Vr = (e, i, a) => i in e ? au(e, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[i] = a, It = (e, i) => {
  for (var a in i || (i = {}))
    mi.call(i, a) && Vr(e, a, i[a]);
  if (Wa)
    for (var a of Wa(i))
      _i.call(i, a) && Vr(e, a, i[a]);
  return e;
}, gi = (e, i) => {
  var a = {};
  for (var n in e)
    mi.call(e, n) && i.indexOf(n) < 0 && (a[n] = e[n]);
  if (e != null && Wa)
    for (var n of Wa(e))
      i.indexOf(n) < 0 && _i.call(e, n) && (a[n] = e[n]);
  return a;
};
const vi = "[vue-draggable-plus]: ";
function ou(e) {
  console.warn(vi + e);
}
function ru(e) {
  console.error(vi + e);
}
function Fr(e, i, a) {
  return a >= 0 && a < e.length && e.splice(a, 0, e.splice(i, 1)[0]), e;
}
function iu(e) {
  return e.replace(/-(\w)/g, (i, a) => a ? a.toUpperCase() : "");
}
function su(e) {
  return Object.keys(e).reduce((i, a) => (typeof e[a] < "u" && (i[iu(a)] = e[a]), i), {});
}
function Nr(e, i) {
  return Array.isArray(e) && e.splice(i, 1), e;
}
function Ir(e, i, a) {
  return Array.isArray(e) && e.splice(i, 0, a), e;
}
function lu(e) {
  return typeof e > "u";
}
function nu(e) {
  return typeof e == "string";
}
function Lr(e, i, a) {
  const n = e.children[a];
  e.insertBefore(i, n);
}
function Co(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function du(e, i = document) {
  var a;
  let n = null;
  return typeof (i == null ? void 0 : i.querySelector) == "function" ? n = (a = i == null ? void 0 : i.querySelector) == null ? void 0 : a.call(i, e) : n = document.querySelector(e), n || ou(`Element not found: ${e}`), n;
}
function uu(e, i, a = null) {
  return function(...n) {
    return e.apply(a, n), i.apply(a, n);
  };
}
function cu(e, i) {
  const a = It({}, e);
  return Object.keys(i).forEach((n) => {
    a[n] ? a[n] = uu(e[n], i[n]) : a[n] = i[n];
  }), a;
}
function pu(e) {
  return e instanceof HTMLElement;
}
function jr(e, i) {
  Object.keys(e).forEach((a) => {
    i(a, e[a]);
  });
}
function mu(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const _u = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Gr(e, i) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    i && (n = n.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function at(e) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Gr(Object(a), !0).forEach(function(n) {
      gu(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Gr(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ja(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ja = function(i) {
    return typeof i;
  } : ja = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, ja(e);
}
function gu(e, i, a) {
  return i in e ? Object.defineProperty(e, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[i] = a, e;
}
function it() {
  return it = Object.assign || function(e) {
    for (var i = 1; i < arguments.length; i++) {
      var a = arguments[i];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, it.apply(this, arguments);
}
function vu(e, i) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), c, o;
  for (o = 0; o < n.length; o++)
    c = n[o], !(i.indexOf(c) >= 0) && (a[c] = e[c]);
  return a;
}
function fu(e, i) {
  if (e == null)
    return {};
  var a = vu(e, i), n, c;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (c = 0; c < o.length; c++)
      n = o[c], !(i.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
var hu = "1.15.2";
function rt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var st = rt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ma = rt(/Edge/i), qr = rt(/firefox/i), sa = rt(/safari/i) && !rt(/chrome/i) && !rt(/android/i), fi = rt(/iP(ad|od|hone)/i), hi = rt(/chrome/i) && rt(/android/i), bi = {
  capture: !1,
  passive: !1
};
function re(e, i, a) {
  e.addEventListener(i, a, !st && bi);
}
function ae(e, i, a) {
  e.removeEventListener(i, a, !st && bi);
}
function Qa(e, i) {
  if (i) {
    if (i[0] === ">" && (i = i.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(i);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(i);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(i);
      } catch {
        return !1;
      }
    return !1;
  }
}
function bu(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function We(e, i, a, n) {
  if (e) {
    a = a || document;
    do {
      if (i != null && (i[0] === ">" ? e.parentNode === a && Qa(e, i) : Qa(e, i)) || n && e === a)
        return e;
      if (e === a)
        break;
    } while (e = bu(e));
  }
  return null;
}
var Hr = /\s+/g;
function Ve(e, i, a) {
  if (e && i)
    if (e.classList)
      e.classList[a ? "add" : "remove"](i);
    else {
      var n = (" " + e.className + " ").replace(Hr, " ").replace(" " + i + " ", " ");
      e.className = (n + (a ? " " + i : "")).replace(Hr, " ");
    }
}
function j(e, i, a) {
  var n = e && e.style;
  if (n) {
    if (a === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (a = e.currentStyle), i === void 0 ? a : a[i];
    !(i in n) && i.indexOf("webkit") === -1 && (i = "-webkit-" + i), n[i] = a + (typeof a == "string" ? "" : "px");
  }
}
function jt(e, i) {
  var a = "";
  if (typeof e == "string")
    a = e;
  else
    do {
      var n = j(e, "transform");
      n && n !== "none" && (a = n + " " + a);
    } while (!i && (e = e.parentNode));
  var c = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return c && new c(a);
}
function yi(e, i, a) {
  if (e) {
    var n = e.getElementsByTagName(i), c = 0, o = n.length;
    if (a)
      for (; c < o; c++)
        a(n[c], c);
    return n;
  }
  return [];
}
function tt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Ee(e, i, a, n, c) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, p, h, _, b, w, P;
    if (e !== window && e.parentNode && e !== tt() ? (o = e.getBoundingClientRect(), p = o.top, h = o.left, _ = o.bottom, b = o.right, w = o.height, P = o.width) : (p = 0, h = 0, _ = window.innerHeight, b = window.innerWidth, w = window.innerHeight, P = window.innerWidth), (i || a) && e !== window && (c = c || e.parentNode, !st))
      do
        if (c && c.getBoundingClientRect && (j(c, "transform") !== "none" || a && j(c, "position") !== "static")) {
          var I = c.getBoundingClientRect();
          p -= I.top + parseInt(j(c, "border-top-width")), h -= I.left + parseInt(j(c, "border-left-width")), _ = p + o.height, b = h + o.width;
          break;
        }
      while (c = c.parentNode);
    if (n && e !== window) {
      var C = jt(c || e), D = C && C.a, V = C && C.d;
      C && (p /= V, h /= D, P /= D, w /= V, _ = p + w, b = h + P);
    }
    return {
      top: p,
      left: h,
      bottom: _,
      right: b,
      width: P,
      height: w
    };
  }
}
function Br(e, i, a) {
  for (var n = _t(e, !0), c = Ee(e)[i]; n; ) {
    var o = Ee(n)[a], p = void 0;
    if (p = c >= o, !p)
      return n;
    if (n === tt())
      break;
    n = _t(n, !1);
  }
  return !1;
}
function Gt(e, i, a, n) {
  for (var c = 0, o = 0, p = e.children; o < p.length; ) {
    if (p[o].style.display !== "none" && p[o] !== G.ghost && (n || p[o] !== G.dragged) && We(p[o], a.draggable, e, !1)) {
      if (c === i)
        return p[o];
      c++;
    }
    o++;
  }
  return null;
}
function Ko(e, i) {
  for (var a = e.lastElementChild; a && (a === G.ghost || j(a, "display") === "none" || i && !Qa(a, i)); )
    a = a.previousElementSibling;
  return a || null;
}
function He(e, i) {
  var a = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== G.clone && (!i || Qa(e, i)) && a++;
  return a;
}
function Yr(e) {
  var i = 0, a = 0, n = tt();
  if (e)
    do {
      var c = jt(e), o = c.a, p = c.d;
      i += e.scrollLeft * o, a += e.scrollTop * p;
    } while (e !== n && (e = e.parentNode));
  return [i, a];
}
function yu(e, i) {
  for (var a in e)
    if (e.hasOwnProperty(a)) {
      for (var n in i)
        if (i.hasOwnProperty(n) && i[n] === e[a][n])
          return Number(a);
    }
  return -1;
}
function _t(e, i) {
  if (!e || !e.getBoundingClientRect)
    return tt();
  var a = e, n = !1;
  do
    if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
      var c = j(a);
      if (a.clientWidth < a.scrollWidth && (c.overflowX == "auto" || c.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (c.overflowY == "auto" || c.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body)
          return tt();
        if (n || i)
          return a;
        n = !0;
      }
    }
  while (a = a.parentNode);
  return tt();
}
function xu(e, i) {
  if (e && i)
    for (var a in i)
      i.hasOwnProperty(a) && (e[a] = i[a]);
  return e;
}
function Eo(e, i) {
  return Math.round(e.top) === Math.round(i.top) && Math.round(e.left) === Math.round(i.left) && Math.round(e.height) === Math.round(i.height) && Math.round(e.width) === Math.round(i.width);
}
var la;
function xi(e, i) {
  return function() {
    if (!la) {
      var a = arguments, n = this;
      a.length === 1 ? e.call(n, a[0]) : e.apply(n, a), la = setTimeout(function() {
        la = void 0;
      }, i);
    }
  };
}
function ku() {
  clearTimeout(la), la = void 0;
}
function ki(e, i, a) {
  e.scrollLeft += i, e.scrollTop += a;
}
function wi(e) {
  var i = window.Polymer, a = window.jQuery || window.Zepto;
  return i && i.dom ? i.dom(e).cloneNode(!0) : a ? a(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ci(e, i, a) {
  var n = {};
  return Array.from(e.children).forEach(function(c) {
    var o, p, h, _;
    if (!(!We(c, i.draggable, e, !1) || c.animated || c === a)) {
      var b = Ee(c);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, b.left), n.top = Math.min((p = n.top) !== null && p !== void 0 ? p : 1 / 0, b.top), n.right = Math.max((h = n.right) !== null && h !== void 0 ? h : -1 / 0, b.right), n.bottom = Math.max((_ = n.bottom) !== null && _ !== void 0 ? _ : -1 / 0, b.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var Ie = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function wu() {
  var e = [], i;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(n) {
          if (!(j(n, "display") === "none" || n === G.ghost)) {
            e.push({
              target: n,
              rect: Ee(n)
            });
            var c = at({}, e[e.length - 1].rect);
            if (n.thisAnimationDuration) {
              var o = jt(n, !0);
              o && (c.top -= o.f, c.left -= o.e);
            }
            n.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(a) {
      e.push(a);
    },
    removeAnimationState: function(a) {
      e.splice(yu(e, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var n = this;
      if (!this.options.animation) {
        clearTimeout(i), typeof a == "function" && a();
        return;
      }
      var c = !1, o = 0;
      e.forEach(function(p) {
        var h = 0, _ = p.target, b = _.fromRect, w = Ee(_), P = _.prevFromRect, I = _.prevToRect, C = p.rect, D = jt(_, !0);
        D && (w.top -= D.f, w.left -= D.e), _.toRect = w, _.thisAnimationDuration && Eo(P, w) && !Eo(b, w) && // Make sure animatingRect is on line between toRect & fromRect
        (C.top - w.top) / (C.left - w.left) === (b.top - w.top) / (b.left - w.left) && (h = Eu(C, P, I, n.options)), Eo(w, b) || (_.prevFromRect = b, _.prevToRect = w, h || (h = n.options.animation), n.animate(_, C, w, h)), h && (c = !0, o = Math.max(o, h), clearTimeout(_.animationResetTimer), _.animationResetTimer = setTimeout(function() {
          _.animationTime = 0, _.prevFromRect = null, _.fromRect = null, _.prevToRect = null, _.thisAnimationDuration = null;
        }, h), _.thisAnimationDuration = h);
      }), clearTimeout(i), c ? i = setTimeout(function() {
        typeof a == "function" && a();
      }, o) : typeof a == "function" && a(), e = [];
    },
    animate: function(a, n, c, o) {
      if (o) {
        j(a, "transition", ""), j(a, "transform", "");
        var p = jt(this.el), h = p && p.a, _ = p && p.d, b = (n.left - c.left) / (h || 1), w = (n.top - c.top) / (_ || 1);
        a.animatingX = !!b, a.animatingY = !!w, j(a, "transform", "translate3d(" + b + "px," + w + "px,0)"), this.forRepaintDummy = Cu(a), j(a, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), j(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          j(a, "transition", ""), j(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, o);
      }
    }
  };
}
function Cu(e) {
  return e.offsetWidth;
}
function Eu(e, i, a, n) {
  return Math.sqrt(Math.pow(i.top - e.top, 2) + Math.pow(i.left - e.left, 2)) / Math.sqrt(Math.pow(i.top - a.top, 2) + Math.pow(i.left - a.left, 2)) * n.animation;
}
var zt = [], So = {
  initializeByDefault: !0
}, _a = {
  mount: function(e) {
    for (var i in So)
      So.hasOwnProperty(i) && !(i in e) && (e[i] = So[i]);
    zt.forEach(function(a) {
      if (a.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), zt.push(e);
  },
  pluginEvent: function(e, i, a) {
    var n = this;
    this.eventCanceled = !1, a.cancel = function() {
      n.eventCanceled = !0;
    };
    var c = e + "Global";
    zt.forEach(function(o) {
      i[o.pluginName] && (i[o.pluginName][c] && i[o.pluginName][c](at({
        sortable: i
      }, a)), i.options[o.pluginName] && i[o.pluginName][e] && i[o.pluginName][e](at({
        sortable: i
      }, a)));
    });
  },
  initializePlugins: function(e, i, a, n) {
    zt.forEach(function(p) {
      var h = p.pluginName;
      if (!(!e.options[h] && !p.initializeByDefault)) {
        var _ = new p(e, i, e.options);
        _.sortable = e, _.options = e.options, e[h] = _, it(a, _.defaults);
      }
    });
    for (var c in e.options)
      if (e.options.hasOwnProperty(c)) {
        var o = this.modifyOption(e, c, e.options[c]);
        typeof o < "u" && (e.options[c] = o);
      }
  },
  getEventProperties: function(e, i) {
    var a = {};
    return zt.forEach(function(n) {
      typeof n.eventProperties == "function" && it(a, n.eventProperties.call(i[n.pluginName], e));
    }), a;
  },
  modifyOption: function(e, i, a) {
    var n;
    return zt.forEach(function(c) {
      e[c.pluginName] && c.optionListeners && typeof c.optionListeners[i] == "function" && (n = c.optionListeners[i].call(e[c.pluginName], a));
    }), n;
  }
};
function Su(e) {
  var i = e.sortable, a = e.rootEl, n = e.name, c = e.targetEl, o = e.cloneEl, p = e.toEl, h = e.fromEl, _ = e.oldIndex, b = e.newIndex, w = e.oldDraggableIndex, P = e.newDraggableIndex, I = e.originalEvent, C = e.putSortable, D = e.extraEventProperties;
  if (i = i || a && a[Ie], !!i) {
    var V, ie = i.options, O = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !st && !ma ? V = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (V = document.createEvent("Event"), V.initEvent(n, !0, !0)), V.to = p || a, V.from = h || a, V.item = c || a, V.clone = o, V.oldIndex = _, V.newIndex = b, V.oldDraggableIndex = w, V.newDraggableIndex = P, V.originalEvent = I, V.pullMode = C ? C.lastPutMode : void 0;
    var he = at(at({}, D), _a.getEventProperties(n, i));
    for (var F in he)
      V[F] = he[F];
    a && a.dispatchEvent(V), ie[O] && ie[O].call(i, V);
  }
}
var Mu = ["evt"], Ae = function(e, i) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.evt, c = fu(a, Mu);
  _a.pluginEvent.bind(G)(e, i, at({
    dragEl: S,
    parentEl: ke,
    ghostEl: B,
    rootEl: ve,
    nextEl: wt,
    lastDownEl: Ga,
    cloneEl: be,
    cloneHidden: mt,
    dragStarted: oa,
    putSortable: Pe,
    activeSortable: G.active,
    originalEvent: n,
    oldIndex: Lt,
    oldDraggableIndex: na,
    newIndex: Fe,
    newDraggableIndex: pt,
    hideGhostForTarget: Pi,
    unhideGhostForTarget: Ri,
    cloneNowHidden: function() {
      mt = !0;
    },
    cloneNowShown: function() {
      mt = !1;
    },
    dispatchSortableEvent: function(o) {
      De({
        sortable: i,
        name: o,
        originalEvent: n
      });
    }
  }, c));
};
function De(e) {
  Su(at({
    putSortable: Pe,
    cloneEl: be,
    targetEl: S,
    rootEl: ve,
    oldIndex: Lt,
    oldDraggableIndex: na,
    newIndex: Fe,
    newDraggableIndex: pt
  }, e));
}
var S, ke, B, ve, wt, Ga, be, mt, Lt, Fe, na, pt, Oa, Pe, Ft = !1, Ja = !1, Za = [], yt, Ke, Mo, Po, Kr, Xr, oa, Ut, da, ua = !1, za = !1, qa, $e, Ro = [], Vo = !1, eo = [], oo = typeof document < "u", Ua = fi, Wr = ma || st ? "cssFloat" : "float", Pu = oo && !hi && !fi && "draggable" in document.createElement("div"), Ei = (function() {
  if (oo) {
    if (st)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), Si = function(e, i) {
  var a = j(e), n = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Gt(e, 0, i), o = Gt(e, 1, i), p = c && j(c), h = o && j(o), _ = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Ee(c).width, b = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Ee(o).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && p.float && p.float !== "none") {
    var w = p.float === "left" ? "left" : "right";
    return o && (h.clear === "both" || h.clear === w) ? "vertical" : "horizontal";
  }
  return c && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || _ >= n && a[Wr] === "none" || o && a[Wr] === "none" && _ + b > n) ? "vertical" : "horizontal";
}, Ru = function(e, i, a) {
  var n = a ? e.left : e.top, c = a ? e.right : e.bottom, o = a ? e.width : e.height, p = a ? i.left : i.top, h = a ? i.right : i.bottom, _ = a ? i.width : i.height;
  return n === p || c === h || n + o / 2 === p + _ / 2;
}, $u = function(e, i) {
  var a;
  return Za.some(function(n) {
    var c = n[Ie].options.emptyInsertThreshold;
    if (!(!c || Ko(n))) {
      var o = Ee(n), p = e >= o.left - c && e <= o.right + c, h = i >= o.top - c && i <= o.bottom + c;
      if (p && h)
        return a = n;
    }
  }), a;
}, Mi = function(e) {
  function i(c, o) {
    return function(p, h, _, b) {
      var w = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (c == null && (o || w))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (o && c === "clone")
        return c;
      if (typeof c == "function")
        return i(c(p, h, _, b), o)(p, h, _, b);
      var P = (o ? p : h).options.group.name;
      return c === !0 || typeof c == "string" && c === P || c.join && c.indexOf(P) > -1;
    };
  }
  var a = {}, n = e.group;
  (!n || ja(n) != "object") && (n = {
    name: n
  }), a.name = n.name, a.checkPull = i(n.pull, !0), a.checkPut = i(n.put), a.revertClone = n.revertClone, e.group = a;
}, Pi = function() {
  !Ei && B && j(B, "display", "none");
}, Ri = function() {
  !Ei && B && j(B, "display", "");
};
oo && !hi && document.addEventListener("click", function(e) {
  if (Ja)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ja = !1, !1;
}, !0);
var xt = function(e) {
  if (S) {
    e = e.touches ? e.touches[0] : e;
    var i = $u(e.clientX, e.clientY);
    if (i) {
      var a = {};
      for (var n in e)
        e.hasOwnProperty(n) && (a[n] = e[n]);
      a.target = a.rootEl = i, a.preventDefault = void 0, a.stopPropagation = void 0, i[Ie]._onDragOver(a);
    }
  }
}, Du = function(e) {
  S && S.parentNode[Ie]._isOutsideThisEl(e.target);
};
function G(e, i) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = i = it({}, i), e[Ie] = this;
  var a = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Si(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, p) {
      o.setData("Text", p.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: G.supportPointer !== !1 && "PointerEvent" in window && !sa,
    emptyInsertThreshold: 5
  };
  _a.initializePlugins(this, e, a);
  for (var n in a)
    !(n in i) && (i[n] = a[n]);
  Mi(i);
  for (var c in this)
    c.charAt(0) === "_" && typeof this[c] == "function" && (this[c] = this[c].bind(this));
  this.nativeDraggable = i.forceFallback ? !1 : Pu, this.nativeDraggable && (this.options.touchStartThreshold = 1), i.supportPointer ? re(e, "pointerdown", this._onTapStart) : (re(e, "mousedown", this._onTapStart), re(e, "touchstart", this._onTapStart)), this.nativeDraggable && (re(e, "dragover", this), re(e, "dragenter", this)), Za.push(this.el), i.store && i.store.get && this.sort(i.store.get(this) || []), it(this, wu());
}
G.prototype = /** @lends Sortable.prototype */
{
  constructor: G,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Ut = null);
  },
  _getDirection: function(e, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, i, S) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var i = this, a = this.el, n = this.options, c = n.preventOnFilter, o = e.type, p = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, h = (p || e).target, _ = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || h, b = n.filter;
      if (Nu(a), !S && !(/mousedown|pointerdown/.test(o) && e.button !== 0 || n.disabled) && !_.isContentEditable && !(!this.nativeDraggable && sa && h && h.tagName.toUpperCase() === "SELECT") && (h = We(h, n.draggable, a, !1), !(h && h.animated) && Ga !== h)) {
        if (Lt = He(h), na = He(h, n.draggable), typeof b == "function") {
          if (b.call(this, e, h, this)) {
            De({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              toEl: a,
              fromEl: a
            }), Ae("filter", i, {
              evt: e
            }), c && e.cancelable && e.preventDefault();
            return;
          }
        } else if (b && (b = b.split(",").some(function(w) {
          if (w = We(_, w.trim(), a, !1), w)
            return De({
              sortable: i,
              rootEl: w,
              name: "filter",
              targetEl: h,
              fromEl: a,
              toEl: a
            }), Ae("filter", i, {
              evt: e
            }), !0;
        }), b)) {
          c && e.cancelable && e.preventDefault();
          return;
        }
        n.handle && !We(_, n.handle, a, !1) || this._prepareDragStart(e, p, h);
      }
    }
  },
  _prepareDragStart: function(e, i, a) {
    var n = this, c = n.el, o = n.options, p = c.ownerDocument, h;
    if (a && !S && a.parentNode === c) {
      var _ = Ee(a);
      if (ve = c, S = a, ke = S.parentNode, wt = S.nextSibling, Ga = a, Oa = o.group, G.dragged = S, yt = {
        target: S,
        clientX: (i || e).clientX,
        clientY: (i || e).clientY
      }, Kr = yt.clientX - _.left, Xr = yt.clientY - _.top, this._lastX = (i || e).clientX, this._lastY = (i || e).clientY, S.style["will-change"] = "all", h = function() {
        if (Ae("delayEnded", n, {
          evt: e
        }), G.eventCanceled) {
          n._onDrop();
          return;
        }
        n._disableDelayedDragEvents(), !qr && n.nativeDraggable && (S.draggable = !0), n._triggerDragStart(e, i), De({
          sortable: n,
          name: "choose",
          originalEvent: e
        }), Ve(S, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(b) {
        yi(S, b.trim(), $o);
      }), re(p, "dragover", xt), re(p, "mousemove", xt), re(p, "touchmove", xt), re(p, "mouseup", n._onDrop), re(p, "touchend", n._onDrop), re(p, "touchcancel", n._onDrop), qr && this.nativeDraggable && (this.options.touchStartThreshold = 4, S.draggable = !0), Ae("delayStart", this, {
        evt: e
      }), o.delay && (!o.delayOnTouchOnly || i) && (!this.nativeDraggable || !(ma || st))) {
        if (G.eventCanceled) {
          this._onDrop();
          return;
        }
        re(p, "mouseup", n._disableDelayedDrag), re(p, "touchend", n._disableDelayedDrag), re(p, "touchcancel", n._disableDelayedDrag), re(p, "mousemove", n._delayedDragTouchMoveHandler), re(p, "touchmove", n._delayedDragTouchMoveHandler), o.supportPointer && re(p, "pointermove", n._delayedDragTouchMoveHandler), n._dragStartTimer = setTimeout(h, o.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var i = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    S && $o(S), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    ae(e, "mouseup", this._disableDelayedDrag), ae(e, "touchend", this._disableDelayedDrag), ae(e, "touchcancel", this._disableDelayedDrag), ae(e, "mousemove", this._delayedDragTouchMoveHandler), ae(e, "touchmove", this._delayedDragTouchMoveHandler), ae(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, i) {
    i = i || e.pointerType == "touch" && e, !this.nativeDraggable || i ? this.options.supportPointer ? re(document, "pointermove", this._onTouchMove) : i ? re(document, "touchmove", this._onTouchMove) : re(document, "mousemove", this._onTouchMove) : (re(S, "dragend", this), re(ve, "dragstart", this._onDragStart));
    try {
      document.selection ? Ha(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, i) {
    if (Ft = !1, ve && S) {
      Ae("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && re(document, "dragover", Du);
      var a = this.options;
      !e && Ve(S, a.dragClass, !1), Ve(S, a.ghostClass, !0), G.active = this, e && this._appendGhost(), De({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ke) {
      this._lastX = Ke.clientX, this._lastY = Ke.clientY, Pi();
      for (var e = document.elementFromPoint(Ke.clientX, Ke.clientY), i = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Ke.clientX, Ke.clientY), e !== i); )
        i = e;
      if (S.parentNode[Ie]._isOutsideThisEl(e), i)
        do {
          if (i[Ie]) {
            var a = void 0;
            if (a = i[Ie]._onDragOver({
              clientX: Ke.clientX,
              clientY: Ke.clientY,
              target: e,
              rootEl: i
            }), a && !this.options.dragoverBubble)
              break;
          }
          e = i;
        } while (i = i.parentNode);
      Ri();
    }
  },
  _onTouchMove: function(e) {
    if (yt) {
      var i = this.options, a = i.fallbackTolerance, n = i.fallbackOffset, c = e.touches ? e.touches[0] : e, o = B && jt(B, !0), p = B && o && o.a, h = B && o && o.d, _ = Ua && $e && Yr($e), b = (c.clientX - yt.clientX + n.x) / (p || 1) + (_ ? _[0] - Ro[0] : 0) / (p || 1), w = (c.clientY - yt.clientY + n.y) / (h || 1) + (_ ? _[1] - Ro[1] : 0) / (h || 1);
      if (!G.active && !Ft) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(e, !0);
      }
      if (B) {
        o ? (o.e += b - (Mo || 0), o.f += w - (Po || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: w
        };
        var P = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        j(B, "webkitTransform", P), j(B, "mozTransform", P), j(B, "msTransform", P), j(B, "transform", P), Mo = b, Po = w, Ke = c;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!B) {
      var e = this.options.fallbackOnBody ? document.body : ve, i = Ee(S, !0, Ua, !0, e), a = this.options;
      if (Ua) {
        for ($e = e; j($e, "position") === "static" && j($e, "transform") === "none" && $e !== document; )
          $e = $e.parentNode;
        $e !== document.body && $e !== document.documentElement ? ($e === document && ($e = tt()), i.top += $e.scrollTop, i.left += $e.scrollLeft) : $e = tt(), Ro = Yr($e);
      }
      B = S.cloneNode(!0), Ve(B, a.ghostClass, !1), Ve(B, a.fallbackClass, !0), Ve(B, a.dragClass, !0), j(B, "transition", ""), j(B, "transform", ""), j(B, "box-sizing", "border-box"), j(B, "margin", 0), j(B, "top", i.top), j(B, "left", i.left), j(B, "width", i.width), j(B, "height", i.height), j(B, "opacity", "0.8"), j(B, "position", Ua ? "absolute" : "fixed"), j(B, "zIndex", "100000"), j(B, "pointerEvents", "none"), G.ghost = B, e.appendChild(B), j(B, "transform-origin", Kr / parseInt(B.style.width) * 100 + "% " + Xr / parseInt(B.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, i) {
    var a = this, n = e.dataTransfer, c = a.options;
    if (Ae("dragStart", this, {
      evt: e
    }), G.eventCanceled) {
      this._onDrop();
      return;
    }
    Ae("setupClone", this), G.eventCanceled || (be = wi(S), be.removeAttribute("id"), be.draggable = !1, be.style["will-change"] = "", this._hideClone(), Ve(be, this.options.chosenClass, !1), G.clone = be), a.cloneId = Ha(function() {
      Ae("clone", a), !G.eventCanceled && (a.options.removeCloneOnHide || ve.insertBefore(be, S), a._hideClone(), De({
        sortable: a,
        name: "clone"
      }));
    }), !i && Ve(S, c.dragClass, !0), i ? (Ja = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (ae(document, "mouseup", a._onDrop), ae(document, "touchend", a._onDrop), ae(document, "touchcancel", a._onDrop), n && (n.effectAllowed = "move", c.setData && c.setData.call(a, n, S)), re(document, "drop", a), j(S, "transform", "translateZ(0)")), Ft = !0, a._dragStartId = Ha(a._dragStarted.bind(a, i, e)), re(document, "selectstart", a), oa = !0, sa && j(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var i = this.el, a = e.target, n, c, o, p = this.options, h = p.group, _ = G.active, b = Oa === h, w = p.sort, P = Pe || _, I, C = this, D = !1;
    if (Vo)
      return;
    function V(ce, Oe) {
      Ae(ce, C, at({
        evt: e,
        isOwner: b,
        axis: I ? "vertical" : "horizontal",
        revert: o,
        dragRect: n,
        targetRect: c,
        canSort: w,
        fromSortable: P,
        target: a,
        completed: O,
        onMove: function(Le, L) {
          return Va(ve, i, S, n, Le, Ee(Le), e, L);
        },
        changed: he
      }, Oe));
    }
    function ie() {
      V("dragOverAnimationCapture"), C.captureAnimationState(), C !== P && P.captureAnimationState();
    }
    function O(ce) {
      return V("dragOverCompleted", {
        insertion: ce
      }), ce && (b ? _._hideClone() : _._showClone(C), C !== P && (Ve(S, Pe ? Pe.options.ghostClass : _.options.ghostClass, !1), Ve(S, p.ghostClass, !0)), Pe !== C && C !== G.active ? Pe = C : C === G.active && Pe && (Pe = null), P === C && (C._ignoreWhileAnimating = a), C.animateAll(function() {
        V("dragOverAnimationComplete"), C._ignoreWhileAnimating = null;
      }), C !== P && (P.animateAll(), P._ignoreWhileAnimating = null)), (a === S && !S.animated || a === i && !a.animated) && (Ut = null), !p.dragoverBubble && !e.rootEl && a !== document && (S.parentNode[Ie]._isOutsideThisEl(e.target), !ce && xt(e)), !p.dragoverBubble && e.stopPropagation && e.stopPropagation(), D = !0;
    }
    function he() {
      Fe = He(S), pt = He(S, p.draggable), De({
        sortable: C,
        name: "change",
        toEl: i,
        newIndex: Fe,
        newDraggableIndex: pt,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), a = We(a, p.draggable, i, !0), V("dragOver"), G.eventCanceled)
      return D;
    if (S.contains(e.target) || a.animated && a.animatingX && a.animatingY || C._ignoreWhileAnimating === a)
      return O(!1);
    if (Ja = !1, _ && !p.disabled && (b ? w || (o = ke !== ve) : Pe === this || (this.lastPutMode = Oa.checkPull(this, _, S, e)) && h.checkPut(this, _, S, e))) {
      if (I = this._getDirection(e, a) === "vertical", n = Ee(S), V("dragOverValid"), G.eventCanceled)
        return D;
      if (o)
        return ke = ve, ie(), this._hideClone(), V("revert"), G.eventCanceled || (wt ? ve.insertBefore(S, wt) : ve.appendChild(S)), O(!0);
      var F = Ko(i, p.draggable);
      if (!F || zu(e, I, this) && !F.animated) {
        if (F === S)
          return O(!1);
        if (F && i === e.target && (a = F), a && (c = Ee(a)), Va(ve, i, S, n, a, c, e, !!a) !== !1)
          return ie(), F && F.nextSibling ? i.insertBefore(S, F.nextSibling) : i.appendChild(S), ke = i, he(), O(!0);
      } else if (F && Ou(e, I, this)) {
        var ne = Gt(i, 0, p, !0);
        if (ne === S)
          return O(!1);
        if (a = ne, c = Ee(a), Va(ve, i, S, n, a, c, e, !1) !== !1)
          return ie(), i.insertBefore(S, ne), ke = i, he(), O(!0);
      } else if (a.parentNode === i) {
        c = Ee(a);
        var de = 0, ye, ue = S.parentNode !== i, Se = !Ru(S.animated && S.toRect || n, a.animated && a.toRect || c, I), _e = I ? "top" : "left", z = Br(a, "top", "top") || Br(S, "top", "top"), Z = z ? z.scrollTop : void 0;
        Ut !== a && (ye = c[_e], ua = !1, za = !Se && p.invertSwap || ue), de = Uu(e, a, c, I, Se ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, za, Ut === a);
        var oe;
        if (de !== 0) {
          var xe = He(S);
          do
            xe -= de, oe = ke.children[xe];
          while (oe && (j(oe, "display") === "none" || oe === B));
        }
        if (de === 0 || oe === a)
          return O(!1);
        Ut = a, da = de;
        var ee = a.nextElementSibling, se = !1;
        se = de === 1;
        var ge = Va(ve, i, S, n, a, c, e, se);
        if (ge !== !1)
          return (ge === 1 || ge === -1) && (se = ge === 1), Vo = !0, setTimeout(Au, 30), ie(), se && !ee ? i.appendChild(S) : a.parentNode.insertBefore(S, se ? ee : a), z && ki(z, 0, Z - z.scrollTop), ke = S.parentNode, ye !== void 0 && !za && (qa = Math.abs(ye - Ee(a)[_e])), he(), O(!0);
      }
      if (i.contains(S))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ae(document, "mousemove", this._onTouchMove), ae(document, "touchmove", this._onTouchMove), ae(document, "pointermove", this._onTouchMove), ae(document, "dragover", xt), ae(document, "mousemove", xt), ae(document, "touchmove", xt);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    ae(e, "mouseup", this._onDrop), ae(e, "touchend", this._onDrop), ae(e, "pointerup", this._onDrop), ae(e, "touchcancel", this._onDrop), ae(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var i = this.el, a = this.options;
    if (Fe = He(S), pt = He(S, a.draggable), Ae("drop", this, {
      evt: e
    }), ke = S && S.parentNode, Fe = He(S), pt = He(S, a.draggable), G.eventCanceled) {
      this._nulling();
      return;
    }
    Ft = !1, za = !1, ua = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Fo(this.cloneId), Fo(this._dragStartId), this.nativeDraggable && (ae(document, "drop", this), ae(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), sa && j(document.body, "user-select", ""), j(S, "transform", ""), e && (oa && (e.cancelable && e.preventDefault(), !a.dropBubble && e.stopPropagation()), B && B.parentNode && B.parentNode.removeChild(B), (ve === ke || Pe && Pe.lastPutMode !== "clone") && be && be.parentNode && be.parentNode.removeChild(be), S && (this.nativeDraggable && ae(S, "dragend", this), $o(S), S.style["will-change"] = "", oa && !Ft && Ve(S, Pe ? Pe.options.ghostClass : this.options.ghostClass, !1), Ve(S, this.options.chosenClass, !1), De({
      sortable: this,
      name: "unchoose",
      toEl: ke,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), ve !== ke ? (Fe >= 0 && (De({
      rootEl: ke,
      name: "add",
      toEl: ke,
      fromEl: ve,
      originalEvent: e
    }), De({
      sortable: this,
      name: "remove",
      toEl: ke,
      originalEvent: e
    }), De({
      rootEl: ke,
      name: "sort",
      toEl: ke,
      fromEl: ve,
      originalEvent: e
    }), De({
      sortable: this,
      name: "sort",
      toEl: ke,
      originalEvent: e
    })), Pe && Pe.save()) : Fe !== Lt && Fe >= 0 && (De({
      sortable: this,
      name: "update",
      toEl: ke,
      originalEvent: e
    }), De({
      sortable: this,
      name: "sort",
      toEl: ke,
      originalEvent: e
    })), G.active && ((Fe == null || Fe === -1) && (Fe = Lt, pt = na), De({
      sortable: this,
      name: "end",
      toEl: ke,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ae("nulling", this), ve = S = ke = B = wt = be = Ga = mt = yt = Ke = oa = Fe = pt = Lt = na = Ut = da = Pe = Oa = G.dragged = G.ghost = G.clone = G.active = null, eo.forEach(function(e) {
      e.checked = !0;
    }), eo.length = Mo = Po = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        S && (this._onDragOver(e), Tu(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], i, a = this.el.children, n = 0, c = a.length, o = this.options; n < c; n++)
      i = a[n], We(i, o.draggable, this.el, !1) && e.push(i.getAttribute(o.dataIdAttr) || Fu(i));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, i) {
    var a = {}, n = this.el;
    this.toArray().forEach(function(c, o) {
      var p = n.children[o];
      We(p, this.options.draggable, n, !1) && (a[c] = p);
    }, this), i && this.captureAnimationState(), e.forEach(function(c) {
      a[c] && (n.removeChild(a[c]), n.appendChild(a[c]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, i) {
    return We(e, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, i) {
    var a = this.options;
    if (i === void 0)
      return a[e];
    var n = _a.modifyOption(this, e, i);
    typeof n < "u" ? a[e] = n : a[e] = i, e === "group" && Mi(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ae("destroy", this);
    var e = this.el;
    e[Ie] = null, ae(e, "mousedown", this._onTapStart), ae(e, "touchstart", this._onTapStart), ae(e, "pointerdown", this._onTapStart), this.nativeDraggable && (ae(e, "dragover", this), ae(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Za.splice(Za.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!mt) {
      if (Ae("hideClone", this), G.eventCanceled)
        return;
      j(be, "display", "none"), this.options.removeCloneOnHide && be.parentNode && be.parentNode.removeChild(be), mt = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (mt) {
      if (Ae("showClone", this), G.eventCanceled)
        return;
      S.parentNode == ve && !this.options.group.revertClone ? ve.insertBefore(be, S) : wt ? ve.insertBefore(be, wt) : ve.appendChild(be), this.options.group.revertClone && this.animate(S, be), j(be, "display", ""), mt = !1;
    }
  }
};
function Tu(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Va(e, i, a, n, c, o, p, h) {
  var _, b = e[Ie], w = b.options.onMove, P;
  return window.CustomEvent && !st && !ma ? _ = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (_ = document.createEvent("Event"), _.initEvent("move", !0, !0)), _.to = i, _.from = e, _.dragged = a, _.draggedRect = n, _.related = c || i, _.relatedRect = o || Ee(i), _.willInsertAfter = h, _.originalEvent = p, e.dispatchEvent(_), w && (P = w.call(b, _, p)), P;
}
function $o(e) {
  e.draggable = !1;
}
function Au() {
  Vo = !1;
}
function Ou(e, i, a) {
  var n = Ee(Gt(a.el, 0, a.options, !0)), c = Ci(a.el, a.options, B), o = 10;
  return i ? e.clientX < c.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < c.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function zu(e, i, a) {
  var n = Ee(Ko(a.el, a.options.draggable)), c = Ci(a.el, a.options, B), o = 10;
  return i ? e.clientX > c.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > c.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Uu(e, i, a, n, c, o, p, h) {
  var _ = n ? e.clientY : e.clientX, b = n ? a.height : a.width, w = n ? a.top : a.left, P = n ? a.bottom : a.right, I = !1;
  if (!p) {
    if (h && qa < b * c) {
      if (!ua && (da === 1 ? _ > w + b * o / 2 : _ < P - b * o / 2) && (ua = !0), ua)
        I = !0;
      else if (da === 1 ? _ < w + qa : _ > P - qa)
        return -da;
    } else if (_ > w + b * (1 - c) / 2 && _ < P - b * (1 - c) / 2)
      return Vu(i);
  }
  return I = I || p, I && (_ < w + b * o / 2 || _ > P - b * o / 2) ? _ > w + b / 2 ? 1 : -1 : 0;
}
function Vu(e) {
  return He(S) < He(e) ? 1 : -1;
}
function Fu(e) {
  for (var i = e.tagName + e.className + e.src + e.href + e.textContent, a = i.length, n = 0; a--; )
    n += i.charCodeAt(a);
  return n.toString(36);
}
function Nu(e) {
  eo.length = 0;
  for (var i = e.getElementsByTagName("input"), a = i.length; a--; ) {
    var n = i[a];
    n.checked && eo.push(n);
  }
}
function Ha(e) {
  return setTimeout(e, 0);
}
function Fo(e) {
  return clearTimeout(e);
}
oo && re(document, "touchmove", function(e) {
  (G.active || Ft) && e.cancelable && e.preventDefault();
});
G.utils = {
  on: re,
  off: ae,
  css: j,
  find: yi,
  is: function(e, i) {
    return !!We(e, i, e, !1);
  },
  extend: xu,
  throttle: xi,
  closest: We,
  toggleClass: Ve,
  clone: wi,
  index: He,
  nextTick: Ha,
  cancelNextTick: Fo,
  detectDirection: Si,
  getChild: Gt
};
G.get = function(e) {
  return e[Ie];
};
G.mount = function() {
  for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++)
    i[a] = arguments[a];
  i[0].constructor === Array && (i = i[0]), i.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (G.utils = at(at({}, G.utils), n.utils)), _a.mount(n);
  });
};
G.create = function(e, i) {
  return new G(e, i);
};
G.version = hu;
var we = [], ra, No, Io = !1, Do, To, to, ia;
function Iu() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var i in this)
      i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  }
  return e.prototype = {
    dragStarted: function(i) {
      var a = i.originalEvent;
      this.sortable.nativeDraggable ? re(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? re(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? re(document, "touchmove", this._handleFallbackAutoScroll) : re(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var a = i.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ae(document, "dragover", this._handleAutoScroll) : (ae(document, "pointermove", this._handleFallbackAutoScroll), ae(document, "touchmove", this._handleFallbackAutoScroll), ae(document, "mousemove", this._handleFallbackAutoScroll)), Qr(), Ba(), ku();
    },
    nulling: function() {
      to = No = ra = Io = ia = Do = To = null, we.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, a) {
      var n = this, c = (i.touches ? i.touches[0] : i).clientX, o = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(c, o);
      if (to = i, a || this.options.forceAutoScrollFallback || ma || st || sa) {
        Ao(i, this.options, p, a);
        var h = _t(p, !0);
        Io && (!ia || c !== Do || o !== To) && (ia && Qr(), ia = setInterval(function() {
          var _ = _t(document.elementFromPoint(c, o), !0);
          _ !== h && (h = _, Ba()), Ao(i, n.options, _, a);
        }, 10), Do = c, To = o);
      } else {
        if (!this.options.bubbleScroll || _t(p, !0) === tt()) {
          Ba();
          return;
        }
        Ao(i, this.options, _t(p, !1), !1);
      }
    }
  }, it(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ba() {
  we.forEach(function(e) {
    clearInterval(e.pid);
  }), we = [];
}
function Qr() {
  clearInterval(ia);
}
var Ao = xi(function(e, i, a, n) {
  if (i.scroll) {
    var c = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, p = i.scrollSensitivity, h = i.scrollSpeed, _ = tt(), b = !1, w;
    No !== a && (No = a, Ba(), ra = i.scroll, w = i.scrollFn, ra === !0 && (ra = _t(a, !0)));
    var P = 0, I = ra;
    do {
      var C = I, D = Ee(C), V = D.top, ie = D.bottom, O = D.left, he = D.right, F = D.width, ne = D.height, de = void 0, ye = void 0, ue = C.scrollWidth, Se = C.scrollHeight, _e = j(C), z = C.scrollLeft, Z = C.scrollTop;
      C === _ ? (de = F < ue && (_e.overflowX === "auto" || _e.overflowX === "scroll" || _e.overflowX === "visible"), ye = ne < Se && (_e.overflowY === "auto" || _e.overflowY === "scroll" || _e.overflowY === "visible")) : (de = F < ue && (_e.overflowX === "auto" || _e.overflowX === "scroll"), ye = ne < Se && (_e.overflowY === "auto" || _e.overflowY === "scroll"));
      var oe = de && (Math.abs(he - c) <= p && z + F < ue) - (Math.abs(O - c) <= p && !!z), xe = ye && (Math.abs(ie - o) <= p && Z + ne < Se) - (Math.abs(V - o) <= p && !!Z);
      if (!we[P])
        for (var ee = 0; ee <= P; ee++)
          we[ee] || (we[ee] = {});
      (we[P].vx != oe || we[P].vy != xe || we[P].el !== C) && (we[P].el = C, we[P].vx = oe, we[P].vy = xe, clearInterval(we[P].pid), (oe != 0 || xe != 0) && (b = !0, we[P].pid = setInterval((function() {
        n && this.layer === 0 && G.active._onTouchMove(to);
        var se = we[this.layer].vy ? we[this.layer].vy * h : 0, ge = we[this.layer].vx ? we[this.layer].vx * h : 0;
        typeof w == "function" && w.call(G.dragged.parentNode[Ie], ge, se, e, to, we[this.layer].el) !== "continue" || ki(we[this.layer].el, ge, se);
      }).bind({
        layer: P
      }), 24))), P++;
    } while (i.bubbleScroll && I !== _ && (I = _t(I, !1)));
    Io = b;
  }
}, 30), $i = function(e) {
  var i = e.originalEvent, a = e.putSortable, n = e.dragEl, c = e.activeSortable, o = e.dispatchSortableEvent, p = e.hideGhostForTarget, h = e.unhideGhostForTarget;
  if (i) {
    var _ = a || c;
    p();
    var b = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, w = document.elementFromPoint(b.clientX, b.clientY);
    h(), _ && !_.el.contains(w) && (o("spill"), this.onSpill({
      dragEl: n,
      putSortable: a
    }));
  }
};
function Xo() {
}
Xo.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var i = e.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(e) {
    var i = e.dragEl, a = e.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var n = Gt(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(i, n) : this.sortable.el.appendChild(i), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: $i
};
it(Xo, {
  pluginName: "revertOnSpill"
});
function Wo() {
}
Wo.prototype = {
  onSpill: function(e) {
    var i = e.dragEl, a = e.putSortable, n = a || this.sortable;
    n.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), n.animateAll();
  },
  drop: $i
};
it(Wo, {
  pluginName: "removeOnSpill"
});
G.mount(new Iu());
G.mount(Wo, Xo);
function Lu(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function ju(e) {
  Bo() && ui(e);
}
function Gu(e) {
  Bo() ? ni(e) : di(e);
}
let Di = null, Ti = null;
function Jr(e = null, i = null) {
  Di = e, Ti = i;
}
function qu() {
  return {
    data: Di,
    clonedData: Ti
  };
}
const Zr = Symbol("cloneElement");
function Hu(...e) {
  var i, a;
  const n = (i = Bo()) == null ? void 0 : i.proxy;
  let c = null;
  const o = e[0];
  let [, p, h] = e;
  Array.isArray(d(p)) || (h = p, p = null);
  let _ = null;
  const {
    immediate: b = !0,
    clone: w = Lu,
    forceFallback: P,
    fallbackOnBody: I,
    customUpdate: C
  } = (a = d(h)) != null ? a : {};
  function D(z) {
    var Z;
    const { from: oe, oldIndex: xe, item: ee } = z, se = Array.from(oe.childNodes);
    c = P && !I ? se.slice(0, -1) : se;
    const ge = d((Z = d(p)) == null ? void 0 : Z[xe]), ce = w(ge);
    Jr(ge, ce), ee[Zr] = ce;
  }
  function V(z) {
    const Z = z.item[Zr];
    if (!lu(Z)) {
      if (Co(z.item), ko(p)) {
        const oe = [...d(p)];
        p.value = Ir(oe, z.newDraggableIndex, Z);
        return;
      }
      Ir(d(p), z.newDraggableIndex, Z);
    }
  }
  function ie(z) {
    const { from: Z, item: oe, oldIndex: xe, oldDraggableIndex: ee, pullMode: se, clone: ge } = z;
    if (Lr(Z, oe, xe), se === "clone") {
      Co(ge);
      return;
    }
    if (ko(p)) {
      const ce = [...d(p)];
      p.value = Nr(ce, ee);
      return;
    }
    Nr(d(p), ee);
  }
  function O(z) {
    if (C) {
      C(z);
      return;
    }
    const { from: Z, item: oe, oldIndex: xe, oldDraggableIndex: ee, newDraggableIndex: se } = z;
    if (Co(oe), Lr(Z, oe, xe), ko(p)) {
      const ge = [...d(p)];
      p.value = Fr(
        ge,
        ee,
        se
      );
      return;
    }
    Fr(d(p), ee, se);
  }
  function he(z) {
    const { newIndex: Z, oldIndex: oe, from: xe, to: ee } = z;
    let se = null;
    const ge = Z === oe && xe === ee;
    try {
      if (ge) {
        let ce = null;
        c == null || c.some((Oe, Le) => {
          if (ce && (c == null ? void 0 : c.length) !== ee.childNodes.length)
            return xe.insertBefore(ce, Oe.nextSibling), !0;
          const L = ee.childNodes[Le];
          ce = ee == null ? void 0 : ee.replaceChild(Oe, L);
        });
      }
    } catch (ce) {
      se = ce;
    } finally {
      c = null;
    }
    di(() => {
      if (Jr(), se)
        throw se;
    });
  }
  const F = {
    onUpdate: O,
    onStart: D,
    onAdd: V,
    onRemove: ie,
    onEnd: he
  };
  function ne(z) {
    const Z = d(o);
    return z || (z = nu(Z) ? du(Z, n == null ? void 0 : n.$el) : Z), z && !pu(z) && (z = z.$el), z || ru("Root element not found"), z;
  }
  function de() {
    var z;
    const Z = (z = d(h)) != null ? z : {}, { immediate: oe, clone: xe } = Z, ee = gi(Z, ["immediate", "clone"]);
    return jr(ee, (se, ge) => {
      mu(se) && (ee[se] = (ce, ...Oe) => {
        const Le = qu();
        return _u(ce, Le), ge(ce, ...Oe);
      });
    }), cu(
      p === null ? {} : F,
      ee
    );
  }
  const ye = (z) => {
    z = ne(z), _ && ue.destroy(), _ = new G(z, de());
  };
  qe(
    () => h,
    () => {
      _ && jr(de(), (z, Z) => {
        _ == null || _.option(z, Z);
      });
    },
    { deep: !0 }
  );
  const ue = {
    option: (z, Z) => _ == null ? void 0 : _.option(z, Z),
    destroy: () => {
      _ == null || _.destroy(), _ = null;
    },
    save: () => _ == null ? void 0 : _.save(),
    toArray: () => _ == null ? void 0 : _.toArray(),
    closest: (...z) => _ == null ? void 0 : _.closest(...z)
  }, Se = () => ue == null ? void 0 : ue.option("disabled", !0), _e = () => ue == null ? void 0 : ue.option("disabled", !1);
  return Gu(() => {
    b && ye();
  }), ju(ue.destroy), It({ start: ye, pause: Se, resume: _e }, ue);
}
const Lo = [
  "update",
  "start",
  "add",
  "remove",
  "choose",
  "unchoose",
  "end",
  "sort",
  "filter",
  "clone",
  "move",
  "change"
], Bu = [
  "clone",
  "animation",
  "ghostClass",
  "group",
  "sort",
  "disabled",
  "store",
  "handle",
  "draggable",
  "swapThreshold",
  "invertSwap",
  "invertedSwapThreshold",
  "removeCloneOnHide",
  "direction",
  "chosenClass",
  "dragClass",
  "ignore",
  "filter",
  "preventOnFilter",
  "easing",
  "setData",
  "dropBubble",
  "dragoverBubble",
  "dataIdAttr",
  "delay",
  "delayOnTouchOnly",
  "touchStartThreshold",
  "forceFallback",
  "fallbackClass",
  "fallbackOnBody",
  "fallbackTolerance",
  "fallbackOffset",
  "supportPointer",
  "emptyInsertThreshold",
  "scroll",
  "forceAutoScrollFallback",
  "scrollSensitivity",
  "scrollSpeed",
  "bubbleScroll",
  "modelValue",
  "tag",
  "target",
  "customUpdate",
  ...Lo.map((e) => `on${e.replace(/^\S/, (i) => i.toUpperCase())}`)
], Yu = Et({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Bu,
  emits: ["update:modelValue", ...Lo],
  setup(e, { slots: i, emit: a, expose: n, attrs: c }) {
    const o = Lo.reduce((w, P) => {
      const I = `on${P.replace(/^\S/, (C) => C.toUpperCase())}`;
      return w[I] = (...C) => a(P, ...C), w;
    }, {}), p = A(() => {
      const w = cl(e), { modelValue: P } = w, I = gi(w, ["modelValue"]), C = Object.entries(I).reduce((D, [V, ie]) => {
        const O = d(ie);
        return O !== void 0 && (D[V] = O), D;
      }, {});
      return It(It({}, o), su(It(It({}, c), C)));
    }), h = A({
      get: () => e.modelValue,
      set: (w) => a("update:modelValue", w)
    }), _ = R(), b = Xe(
      Hu(e.target || _, h, p)
    );
    return n(b), () => {
      var w;
      return pl(e.tag || "div", { ref: _ }, (w = i == null ? void 0 : i.default) == null ? void 0 : w.call(i, b));
    };
  }
});
function ao() {
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: "gpt-5.4",
    sonnet_mapped_model: "gpt-5.3-codex",
    haiku_mapped_model: "gpt-5.4-mini",
    exact_model_mappings: []
  };
}
function Ku(e) {
  var n, c, o;
  const i = ao(), a = Object.entries((e == null ? void 0 : e.exact_model_mappings) || {}).sort(([p], [h]) => p.localeCompare(h)).map(([p, h]) => ({ claude_model: p, target_model: h }));
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: ((n = e == null ? void 0 : e.opus_mapped_model) == null ? void 0 : n.trim()) || i.opus_mapped_model,
    sonnet_mapped_model: ((c = e == null ? void 0 : e.sonnet_mapped_model) == null ? void 0 : c.trim()) || i.sonnet_mapped_model,
    haiku_mapped_model: ((o = e == null ? void 0 : e.haiku_mapped_model) == null ? void 0 : o.trim()) || i.haiku_mapped_model,
    exact_model_mappings: a
  };
}
function ei(e) {
  const i = Object.fromEntries(
    e.exact_model_mappings.map((a) => [a.claude_model.trim(), a.target_model.trim()]).filter(([a, n]) => a && n)
  );
  return {
    opus_mapped_model: e.opus_mapped_model.trim(),
    sonnet_mapped_model: e.sonnet_mapped_model.trim(),
    haiku_mapped_model: e.haiku_mapped_model.trim(),
    exact_model_mappings: i
  };
}
function Fa(e) {
  const i = ao();
  e.allow_messages_dispatch = i.allow_messages_dispatch, e.opus_mapped_model = i.opus_mapped_model, e.sonnet_mapped_model = i.sonnet_mapped_model, e.haiku_mapped_model = i.haiku_mapped_model, e.exact_model_mappings = [];
}
const Oo = (e) => ({
  enabled: (e == null ? void 0 : e.enabled) ?? !1,
  savedModels: jo((e == null ? void 0 : e.models) ?? []),
  items: []
}), Xu = (e, i) => {
  const a = jo(i), n = new Set(
    e.items.filter((_) => _.selected).map((_) => _.id)
  ), c = new Set(e.items.map((_) => _.id)), o = new Set(e.savedModels), p = e.items.length > 0, h = jo([
    ...e.items.map((_) => _.id),
    ...e.savedModels,
    ...a
  ]);
  e.items = h.map((_) => {
    const b = p ? n.has(_) : e.savedModels.length > 0 ? o.has(_) : a.includes(_);
    return {
      id: _,
      selected: b && (c.has(_) || o.has(_) || e.savedModels.length === 0)
    };
  });
}, Wu = (e) => {
  e.items.forEach((i) => {
    i.selected = !0;
  });
}, Qu = (e) => {
  e.items.forEach((i) => {
    i.selected = !i.selected;
  });
}, ti = (e, i, a) => {
  if (i === a || i < 0 || a < 0 || i >= e.items.length || a >= e.items.length)
    return;
  const [n] = e.items.splice(i, 1);
  e.items.splice(a, 0, n);
}, Ju = (e, i) => {
  const a = i.trim();
  return a ? a.slice(0, -1).includes("*") ? "invalid_wildcard" : e.items.some((n) => n.id.toLowerCase() === a.toLowerCase()) || e.savedModels.some((n) => n.toLowerCase() === a.toLowerCase()) ? "duplicate" : (e.items.push({ id: a, selected: !0 }), null) : "empty";
}, Na = (e) => ({
  enabled: e.enabled,
  models: e.items.length > 0 ? e.items.filter((i) => i.selected).map((i) => i.id) : [...e.savedModels]
}), jo = (e) => {
  const i = /* @__PURE__ */ new Set(), a = [];
  for (const n of e) {
    const c = n.trim();
    !c || i.has(c) || (i.add(c), a.push(c));
  }
  return a;
}, Zu = () => {
  let e = 0;
  const i = {};
  return {
    next(a) {
      return e += 1, i[a.mode] = {
        id: e,
        request: { ...a }
      }, e;
    },
    isCurrent(a, n) {
      const c = i[n.mode];
      return (c == null ? void 0 : c.id) === a && c.request.groupID === n.groupID && c.request.platform === n.platform;
    }
  };
}, ai = (e, i) => e !== "antigravity" ? [] : i ?? [], Go = (e) => {
  const i = Number(e);
  return !Number.isFinite(i) || i <= 0 ? 0 : Math.round(i * 100) / 1e4;
}, ec = (e) => {
  const i = Number(e);
  return !Number.isFinite(i) || i <= 0 ? 0 : Math.round(i * 1e6) / 1e4;
}, Nt = (e) => ["openai", "anthropic", "gemini", "grok", "antigravity"].includes(e), tc = (e) => {
  if (!Nt(e.platform) || !e.profit_control_enabled)
    return null;
  const i = Number(e.profit_min_margin_percent || 0), a = Number(e.profit_safety_buffer_percent || 0);
  if (!Number.isFinite(i) || i < 0)
    return "marginRangeError";
  if (!Number.isFinite(a) || a < 0)
    return "bufferRangeError";
  const n = Go(i), c = Go(a);
  return n >= 1 ? "marginRangeError" : c >= 1 ? "bufferRangeError" : n + c >= 1 ? "sumTooHigh" : null;
}, ac = /* @__PURE__ */ new Set([
  "antigravity",
  "composite",
  "gemini",
  "grok",
  "openai"
]), oc = (e) => ac.has(e), rc = (e) => e === "grok", kt = (e, i) => `admin.groups.imagePricing.${i}`, Vt = (e) => `admin.groups.videoPricing.${e}`, oi = {
  default: {
    image_price_1k: "0.134",
    image_price_2k: "0.201",
    image_price_4k: "0.268"
  },
  grok: {
    image_price_1k: "0.02",
    image_price_2k: "0.02",
    image_price_4k: "0.02"
  }
}, ic = {
  grok: {
    video_price_480p: "0.05",
    video_price_720p: "0.07",
    video_price_1080p: "0.25"
  }
}, Ya = (e, i) => (oi[e] ?? oi.default)[i], Ka = (e, i) => {
  const a = ic[e];
  return (a == null ? void 0 : a[i]) ?? "";
}, sc = (e, i) => {
  const a = Ya(e, i);
  if (a === "")
    return null;
  const n = Number(a);
  return Number.isFinite(n) ? n : null;
}, lc = (e, i) => {
  const a = Ka(e, i);
  if (a === "")
    return null;
  const n = Number(a);
  return Number.isFinite(n) ? n : null;
}, Ai = [
  { key: "480p", label: "480p" },
  { key: "720p", label: "720p" },
  { key: "1080p", label: "1080p" }
], qo = [
  { key: "grok-imagine-video", label: "grok-imagine-video" },
  { key: "grok-imagine-video-1.5", label: "grok-imagine-video-1.5" }
];
function Qo(e) {
  return e.trim().toLowerCase();
}
function Oi(e) {
  if (e == null || e === "") return null;
  const i = Number(e);
  return Number.isFinite(i) && i >= 0 ? i : null;
}
function ri() {
  return Object.fromEntries(Ai.map(({ key: e }) => [e, null]));
}
function aa(e) {
  const i = {};
  for (const [a, n] of Object.entries(e ?? {})) {
    const c = Qo(a);
    if (!(!c || !n || typeof n != "object")) {
      i[c] = ri();
      for (const [o, p] of Object.entries(n)) {
        const h = Oi(p);
        h !== null && (i[c][o.trim().toLowerCase()] = h);
      }
    }
  }
  for (const { key: a } of qo)
    i[a] ?? (i[a] = ri());
  return i;
}
function ii(e) {
  const i = {};
  for (const [a, n] of Object.entries(e)) {
    const c = Qo(a);
    if (!c || !n || typeof n != "object") continue;
    const o = {};
    for (const [p, h] of Object.entries(n)) {
      const _ = p.trim().toLowerCase(), b = Oi(h);
      _ && b !== null && (o[_] = b);
    }
    Object.keys(o).length > 0 && (i[c] = o);
  }
  return i;
}
function nc(e) {
  const i = new Set(qo.map(({ key: n }) => n)), a = Object.keys(e).map(Qo).filter((n) => n && !i.has(n)).sort().map((n) => ({ key: n, label: n }));
  return [...qo, ...a];
}
const dc = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, uc = { class: "flex flex-1 flex-wrap items-center gap-3" }, cc = { class: "relative w-full sm:w-64" }, pc = ["placeholder"], mc = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, _c = ["disabled", "title"], gc = ["title"], vc = { class: "hidden md:inline" }, fc = {
  key: 0,
  class: "absolute right-0 top-full z-50 mt-1 max-h-80 w-48 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, hc = ["onClick"], bc = ["title"], yc = { class: "font-medium text-gray-900 dark:text-white" }, xc = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, kc = { class: "space-y-1" }, wc = {
  key: 0,
  class: "space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Cc = {
  key: 0,
  class: "flex flex-wrap items-center gap-x-1 gap-y-0.5"
}, Ec = {
  key: 0,
  class: "whitespace-nowrap"
}, Sc = {
  key: 0,
  class: "font-medium text-gray-400 dark:text-gray-500"
}, Mc = { class: "text-gray-400 dark:text-gray-500" }, Pc = {
  key: 1,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, Rc = {
  key: 2,
  class: "whitespace-nowrap"
}, $c = {
  key: 3,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, Dc = {
  key: 4,
  class: "whitespace-nowrap"
}, Tc = {
  key: 1,
  class: "text-gray-400 dark:text-gray-500"
}, Ac = { class: "text-gray-400 dark:text-gray-500" }, Oc = { class: "ml-1 font-medium text-gray-600 dark:text-gray-300" }, zc = { class: "text-sm text-gray-700 dark:text-gray-300" }, Uc = { class: "space-y-0.5 text-xs" }, Vc = { class: "text-gray-500 dark:text-gray-400" }, Fc = { class: "ml-1 font-medium text-zo-signal-600 dark:text-zo-signal-400" }, Nc = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, Ic = { key: 0 }, Lc = { class: "text-gray-500 dark:text-gray-400" }, jc = { class: "ml-1 font-medium text-zo-alert-600 dark:text-zo-alert-400" }, Gc = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, qc = { class: "text-gray-500 dark:text-gray-400" }, Hc = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, Bc = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, Yc = {
  key: 1,
  class: "text-xs text-gray-400"
}, Kc = {
  key: 0,
  class: "text-xs text-gray-400"
}, Xc = {
  key: 1,
  class: "space-y-0.5 text-xs"
}, Wc = { class: "text-gray-500 dark:text-gray-400" }, Qc = { class: "text-gray-400 dark:text-gray-500" }, Jc = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, Zc = { class: "text-gray-500 dark:text-gray-400" }, ep = { class: "text-gray-400 dark:text-gray-500" }, tp = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, ap = { class: "text-gray-500 dark:text-gray-400" }, op = { class: "text-gray-400 dark:text-gray-500" }, rp = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, ip = { class: "flex items-center gap-1" }, sp = ["onClick"], lp = { class: "text-xs" }, np = ["title", "disabled", "onClick"], dp = { class: "text-xs" }, up = ["onClick"], cp = { class: "text-xs" }, pp = ["onClick"], mp = { class: "text-xs" }, _p = ["onClick"], gp = { class: "text-xs" }, vp = ["onClick"], fp = { class: "text-xs" }, hp = { class: "input-label" }, bp = ["placeholder", "data-tour"], yp = { class: "input-label" }, xp = ["placeholder"], kp = { class: "input-label" }, wp = { class: "input-hint" }, Cp = { key: 0 }, Ep = { class: "mb-1.5 flex items-center gap-1" }, Sp = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Mp = { class: "group relative inline-flex" }, Pp = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Rp = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, $p = { class: "text-xs leading-relaxed text-gray-300" }, Dp = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, Tp = ["onClick"], Ap = { value: "" }, Op = ["value", "disabled"], zp = { class: "input-hint" }, Up = { class: "input-label" }, Vp = {
  key: 0,
  class: "input-hint"
}, Fp = { class: "input-label" }, Np = ["placeholder"], Ip = { class: "input-hint" }, Lp = ["data-tour"], jp = { class: "mb-1.5 flex items-center gap-1" }, Gp = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, qp = { class: "group relative inline-flex" }, Hp = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Bp = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Yp = { class: "mb-2 text-xs font-medium" }, Kp = { class: "mb-2 text-xs leading-relaxed text-gray-300" }, Xp = { class: "rounded bg-gray-800 p-2 dark:bg-gray-700" }, Wp = { class: "text-xs leading-relaxed text-gray-300" }, Qp = { class: "inline-flex items-center gap-1 text-primary-400" }, Jp = { class: "flex items-center gap-3" }, Zp = { class: "text-sm text-gray-500 dark:text-gray-400" }, em = { key: 3 }, tm = { class: "input-label" }, am = { class: "mt-4 border-t pt-4" }, om = { class: "input-label" }, rm = { class: "input-hint" }, im = {
  key: 0,
  class: "space-y-4 border-l-2 border-primary-200 pl-4 dark:border-primary-800"
}, sm = { class: "input-label" }, lm = ["placeholder"], nm = { class: "input-label" }, dm = ["placeholder"], um = { class: "input-label" }, cm = ["placeholder"], pm = { class: "border-t pt-4" }, mm = { class: "mb-3 flex items-center justify-between gap-3" }, _m = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, gm = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, vm = {
  key: 0,
  class: "overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 dark:border-dark-600 dark:bg-dark-800/40"
}, fm = {
  key: 0,
  class: "flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs dark:border-dark-600 dark:bg-dark-800"
}, hm = { class: "text-gray-500 dark:text-gray-400" }, bm = { class: "flex items-center gap-1.5" }, ym = { class: "max-h-64 space-y-2 overflow-y-auto p-2" }, xm = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, km = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, wm = ["onUpdate:modelValue"], Cm = { class: "min-w-0 flex-1 break-all text-sm text-gray-700 dark:text-gray-300" }, Em = {
  key: 0,
  class: "ml-1 rounded bg-primary-50 px-1.5 py-0.5 text-[10px] font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
}, Sm = ["disabled", "onClick"], Mm = ["disabled", "onClick"], Pm = { class: "border-t border-gray-200 px-3 py-2 dark:border-dark-600" }, Rm = { class: "flex items-center gap-2" }, $m = ["placeholder", "onKeydown"], Dm = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Tm = {
  key: 4,
  class: "border-t pt-4"
}, Am = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, Om = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, zm = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Um = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Vm = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Fm = {
  key: 0,
  class: "mb-4"
}, Nm = { class: "input-label" }, Im = { class: "grid grid-cols-3 gap-3" }, Lm = ["placeholder"], jm = ["placeholder"], Gm = ["placeholder"], qm = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, Hm = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, Bm = { class: "mb-1 font-medium" }, Ym = { class: "grid grid-cols-3 gap-2" }, Km = {
  key: 1,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700"
}, Xm = { class: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Wm = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Qm = {
  key: 0,
  class: "mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"
}, Jm = { class: "input-label" }, Zm = { class: "input-label" }, e0 = {
  key: 2,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, t0 = {
  key: 5,
  class: "border-t pt-4"
}, a0 = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, o0 = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, r0 = { class: "mb-4" }, i0 = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, s0 = {
  key: 0,
  class: "mb-4"
}, l0 = { class: "input-label" }, n0 = { class: "grid grid-cols-3 gap-3" }, d0 = ["placeholder"], u0 = ["placeholder"], c0 = ["placeholder"], p0 = {
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700",
  "data-testid": "create-grok-video-model-prices"
}, m0 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, _0 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, g0 = { class: "mt-3 space-y-3" }, v0 = { class: "min-w-0 pb-1 font-mono text-xs text-gray-700 dark:text-gray-300" }, f0 = { class: "mb-1 block text-xs text-gray-500 dark:text-gray-400" }, h0 = ["onUpdate:modelValue", "data-testid"], b0 = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, y0 = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, x0 = { class: "mb-1 font-medium" }, k0 = { class: "grid grid-cols-3 gap-2" }, w0 = {
  key: 6,
  class: "border-t pt-4"
}, C0 = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, E0 = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, S0 = {
  key: 0,
  class: "mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
}, M0 = { class: "input-label" }, P0 = { class: "input-label" }, R0 = { class: "input-label" }, $0 = ["title"], D0 = {
  key: 7,
  class: "border-t pt-4"
}, T0 = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, A0 = { class: "mb-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, O0 = {
  key: 0,
  class: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
}, z0 = { class: "input-label" }, U0 = ["title"], V0 = { class: "input-label" }, F0 = ["title"], N0 = {
  key: 8,
  class: "border-t pt-4"
}, I0 = { class: "mb-1.5 flex items-center gap-1" }, L0 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, j0 = { class: "group relative inline-flex" }, G0 = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, q0 = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, H0 = { class: "text-xs leading-relaxed text-gray-300" }, B0 = { class: "space-y-2" }, Y0 = { class: "flex items-center gap-2 cursor-pointer" }, K0 = ["checked"], X0 = { class: "text-sm text-gray-700 dark:text-gray-300" }, W0 = { class: "flex items-center gap-2 cursor-pointer" }, Q0 = ["checked"], J0 = { class: "text-sm text-gray-700 dark:text-gray-300" }, Z0 = { class: "flex items-center gap-2 cursor-pointer" }, e_ = ["checked"], t_ = { class: "text-sm text-gray-700 dark:text-gray-300" }, a_ = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, o_ = {
  key: 9,
  class: "border-t pt-4"
}, r_ = { class: "mb-1.5 flex items-center gap-1" }, i_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, s_ = { class: "group relative inline-flex" }, l_ = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, n_ = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, d_ = { class: "text-xs leading-relaxed text-gray-300" }, u_ = { class: "flex items-center gap-3" }, c_ = { class: "text-sm text-gray-500 dark:text-gray-400" }, p_ = {
  key: 10,
  class: "border-t pt-4"
}, m_ = { class: "mb-1.5 flex items-center gap-1" }, __ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, g_ = { class: "group relative inline-flex" }, v_ = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, f_ = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, h_ = { class: "text-xs leading-relaxed text-gray-300" }, b_ = { class: "flex items-center gap-3" }, y_ = { class: "text-sm text-gray-500 dark:text-gray-400" }, x_ = {
  key: 0,
  class: "mt-3"
}, k_ = { class: "input-label" }, w_ = { class: "input-hint" }, C_ = {
  key: 11,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, E_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, S_ = { class: "input-label" }, M_ = { class: "input-hint" }, P_ = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-600 dark:bg-dark-700 dark:text-gray-300" }, R_ = { class: "border-t border-gray-200 pt-4 mt-4 dark:border-dark-400" }, $_ = { class: "flex items-start justify-between gap-4" }, D_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, T_ = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, A_ = { class: "mt-3 flex items-start gap-2" }, O_ = { class: "block text-sm text-gray-700 dark:text-gray-300" }, z_ = { class: "block text-xs text-gray-500" }, U_ = { class: "mt-3 space-y-2" }, V_ = {
  key: 12,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, F_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, N_ = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, I_ = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, L_ = { class: "input-label" }, j_ = ["placeholder"], G_ = { class: "input-label" }, q_ = ["placeholder"], H_ = { class: "input-label" }, B_ = ["placeholder"], Y_ = { class: "input-label" }, K_ = ["placeholder"], X_ = {
  key: 13,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, W_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Q_ = { class: "flex items-center justify-between" }, J_ = { class: "text-sm text-gray-600 dark:text-gray-400" }, Z_ = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, eg = {
  key: 14,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, tg = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, ag = { class: "flex items-center justify-between" }, og = { class: "text-sm text-gray-600 dark:text-gray-400" }, rg = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, ig = {
  key: 0,
  class: "mt-3"
}, sg = { class: "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-600 dark:bg-dark-800" }, lg = { class: "border-b border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-dark-700 dark:bg-dark-700/50" }, ng = { class: "flex items-center gap-2" }, dg = { class: "text-sm font-medium text-gray-900 dark:text-white" }, ug = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, cg = { class: "p-4" }, pg = { class: "grid gap-4 md:grid-cols-3" }, mg = { class: "input-label" }, _g = ["placeholder"], gg = { class: "input-label" }, vg = ["placeholder"], fg = { class: "input-label" }, hg = ["placeholder"], bg = { class: "mt-5 relative overflow-hidden rounded-xl border border-primary-200 bg-white shadow-sm dark:border-primary-900/50 dark:bg-dark-800" }, yg = { class: "border-b border-primary-100 bg-primary-50/80 px-4 py-3 dark:border-primary-900/40 dark:bg-primary-900/20" }, xg = { class: "flex items-start justify-between gap-3" }, kg = { class: "flex items-center gap-2" }, wg = { class: "text-sm font-medium text-primary-900 dark:text-primary-100" }, Cg = { class: "mt-1 text-xs text-primary-600/90 dark:text-primary-400/90" }, Eg = { class: "p-4 bg-gray-50/30 dark:bg-dark-800/30" }, Sg = {
  key: 0,
  class: "flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary-200 bg-white px-5 py-4 text-sm text-primary-700 transition-colors hover:border-primary-300 dark:border-primary-900/40 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-800"
}, Mg = {
  key: 1,
  class: "space-y-3"
}, Pg = { class: "flex items-center gap-4" }, Rg = { class: "grid flex-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start" }, $g = { class: "input-label" }, Dg = ["onUpdate:modelValue", "placeholder"], Tg = { class: "hidden md:flex md:justify-center md:pt-7 text-primary-300 dark:text-primary-700" }, Ag = { class: "input-label" }, Og = ["onUpdate:modelValue", "placeholder"], zg = ["onClick", "title"], Ug = {
  key: 15,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4 space-y-4"
}, Vg = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Fg = { class: "flex items-center justify-between" }, Ng = { class: "text-sm text-gray-600 dark:text-gray-400" }, Ig = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Lg = { class: "flex items-center justify-between" }, jg = { class: "text-sm text-gray-600 dark:text-gray-400" }, Gg = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, qg = {
  key: 16,
  class: "border-t pt-4"
}, Hg = { class: "input-label" }, Bg = { class: "input-hint" }, Yg = {
  key: 17,
  class: "border-t pt-4"
}, Kg = { class: "mb-1.5 flex items-center gap-1" }, Xg = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Wg = { class: "group relative inline-flex" }, Qg = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-80 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Jg = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Zg = { class: "text-xs leading-relaxed text-gray-300" }, ev = { class: "flex items-center gap-3 mb-3" }, tv = { class: "text-sm text-gray-500 dark:text-gray-400" }, av = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, ov = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, rv = {
  key: 2,
  class: "space-y-3"
}, iv = { class: "flex items-start gap-3" }, sv = { class: "flex-1 space-y-2" }, lv = { class: "input-label text-xs" }, nv = ["onUpdate:modelValue", "placeholder"], dv = { class: "input-label text-xs" }, uv = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, cv = ["onClick"], pv = { class: "relative account-search-container" }, mv = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], _v = {
  key: 0,
  class: "absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, gv = ["onClick", "disabled"], vv = { class: "ml-2 text-xs text-gray-400" }, fv = { class: "text-xs text-gray-400 mt-1" }, hv = ["onClick", "title"], bv = { class: "space-y-4" }, yv = { class: "text-sm text-gray-500 dark:text-gray-400" }, xv = { class: "text-gray-400" }, kv = { class: "flex-1" }, wv = { class: "font-medium text-gray-900 dark:text-white" }, Cv = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ev = { class: "text-sm text-gray-400" }, Sv = { class: "flex justify-end gap-3 pt-4" }, Mv = ["disabled"], Pv = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Rv = { class: "grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]" }, $v = { class: "min-w-0" }, Dv = { class: "mb-3 flex items-center justify-between gap-3" }, Tv = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Av = ["disabled"], Ov = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, zv = {
  key: 0,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, Uv = {
  key: 1,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, Vv = {
  key: 2,
  class: "overflow-x-auto"
}, Fv = { class: "min-w-full divide-y divide-gray-200 text-sm dark:divide-dark-600" }, Nv = { class: "bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:bg-dark-800 dark:text-gray-400" }, Iv = { class: "px-3 py-2" }, Lv = { class: "px-3 py-2" }, jv = { class: "px-3 py-2" }, Gv = { class: "px-3 py-2 text-right" }, qv = { class: "divide-y divide-gray-100 bg-white dark:divide-dark-700 dark:bg-dark-900" }, Hv = { class: "max-w-[15rem] px-3 py-2" }, Bv = { class: "break-all font-medium text-gray-900 dark:text-white" }, Yv = { class: "mt-1 flex flex-wrap items-center gap-1.5" }, Kv = { class: "badge badge-gray" }, Xv = {
  key: 0,
  class: "badge badge-danger"
}, Wv = { class: "px-3 py-2" }, Qv = { class: "flex items-center gap-1.5 text-gray-900 dark:text-white" }, Jv = { class: "mt-1 break-all text-xs text-gray-500 dark:text-gray-400" }, Zv = { class: "px-3 py-2" }, ef = { class: "text-gray-700 dark:text-gray-300" }, tf = { class: "text-xs text-gray-500 dark:text-gray-400" }, af = { class: "px-3 py-2" }, of = { class: "flex justify-end gap-1" }, rf = ["title", "onClick"], sf = ["title", "onClick"], lf = { class: "space-y-5" }, nf = { class: "flex items-center justify-between gap-3" }, df = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, uf = { class: "input-label" }, cf = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, pf = { class: "input-label" }, mf = { class: "input-label" }, _f = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, gf = { class: "input-label" }, vf = { class: "input-label" }, ff = { class: "input-label" }, hf = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, bf = { class: "input-label" }, yf = { class: "flex items-center justify-between gap-3" }, xf = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, kf = ["disabled"], wf = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Cf = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Ef = { class: "space-y-3" }, Sf = { class: "flex gap-2" }, Mf = ["disabled"], Pf = {
  key: 0,
  class: "rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm dark:border-dark-600 dark:bg-dark-800"
}, Rf = { class: "mb-2 flex items-center gap-2" }, $f = { class: "badge badge-gray" }, Df = {
  key: 0,
  class: "space-y-1 text-gray-700 dark:text-gray-300"
}, Tf = { class: "break-all" }, Af = {
  key: 1,
  class: "text-gray-500 dark:text-gray-400"
}, Of = { class: "flex justify-end pt-4" }, si = "group-hidden-columns", zo = "group-column-settings-version", Ia = 2, zf = 0.01, qf = /* @__PURE__ */ Et({
  __name: "GroupsView",
  setup(e) {
    const i = () => ({
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
      time_pricing: zr()
    }), a = (s) => s.push(i()), n = (s) => (s || []).map((l) => ({
      models: l.models || [],
      billing_mode: l.billing_mode || "token",
      input_price: Ot(l.input_price),
      output_price: Ot(l.output_price),
      cache_write_price: Ot(l.cache_write_price),
      cache_read_price: Ot(l.cache_read_price),
      image_input_price: Ot(l.image_input_price),
      image_output_price: Ot(l.image_output_price),
      per_request_price: l.per_request_price,
      intervals: wl(l.intervals || []),
      time_pricing: zr()
    })), c = (s, l) => s.filter((r) => r.models.length > 0).map((r) => ({
      platform: l,
      models: r.models,
      billing_mode: r.billing_mode,
      input_price: At(r.input_price),
      output_price: At(r.output_price),
      cache_write_price: At(r.cache_write_price),
      cache_read_price: At(r.cache_read_price),
      image_input_price: At(r.image_input_price),
      image_output_price: At(r.image_output_price),
      per_request_price: kl(r.per_request_price),
      intervals: r.billing_mode === "token" ? [] : xl(r.intervals || []),
      time_pricing: null
    })), { t: o } = pa(), p = Ho(), h = ml(), _ = El(), b = /* @__PURE__ */ new Set(["name", "actions"]), w = ["id"], P = {
      2: ["id"]
    }, I = A(() => {
      const s = [
        { key: "name", label: o("admin.groups.columns.name"), sortable: !0 },
        { key: "id", label: o("admin.groups.columns.id"), sortable: !0 },
        { key: "platform", label: o("admin.groups.columns.platform"), sortable: !0 },
        { key: "account_count", label: o("admin.groups.columns.accounts"), sortable: !0 },
        { key: "status", label: o("admin.groups.columns.status"), sortable: !0 },
        { key: "actions", label: o("admin.groups.columns.actions"), sortable: !1 }
      ];
      return h.isSimpleMode ? s : [
        ...s.slice(0, 3),
        {
          key: "billing_type",
          label: o("admin.groups.columns.billingType"),
          sortable: !0
        },
        {
          key: "rate_multiplier",
          label: o("admin.groups.columns.rateMultiplier"),
          sortable: !0
        },
        {
          key: "is_exclusive",
          label: o("admin.groups.columns.type"),
          sortable: !0
        },
        s[3],
        {
          key: "capacity",
          label: o("admin.groups.columns.capacity"),
          sortable: !1
        },
        { key: "usage", label: o("admin.groups.columns.usage"), sortable: !1 },
        s[4],
        s[5]
      ];
    }), C = A(
      () => I.value.filter((s) => !b.has(s.key))
    ), D = Xe(/* @__PURE__ */ new Set()), V = R(!1), ie = R(null), O = () => new Set(C.value.map((s) => s.key)), he = () => {
      D.clear();
      try {
        const s = localStorage.getItem(si), l = O();
        if (s) {
          const r = JSON.parse(s);
          Array.isArray(r) && r.filter(
            (k) => typeof k == "string" && l.has(k)
          ).forEach((k) => D.add(k));
          const x = Number(
            localStorage.getItem(zo) ?? "1"
          );
          if (x < Ia) {
            let k = !1;
            for (let M = x + 1; M <= Ia; M++)
              for (const Q of P[M] ?? [])
                l.has(Q) && !D.has(Q) && (D.add(Q), k = !0);
            k ? F() : localStorage.setItem(
              zo,
              String(Ia)
            );
          }
        } else
          w.forEach((r) => {
            l.has(r) && D.add(r);
          }), F();
      } catch (s) {
        console.error("Failed to load group column settings:", s), w.forEach((l) => D.add(l));
      }
    }, F = () => {
      try {
        const s = O(), l = [...D].filter((r) => s.has(r));
        localStorage.setItem(si, JSON.stringify(l)), localStorage.setItem(
          zo,
          String(Ia)
        );
      } catch (s) {
        console.error("Failed to save group column settings:", s);
      }
    }, ne = (s) => !D.has(s), de = A(
      () => !h.isSimpleMode && (ne("usage") || ne("billing_type"))
    ), ye = A(() => !h.isSimpleMode && ne("capacity")), ue = (s) => {
      if (!O().has(s)) return;
      const r = D.has(s);
      r ? D.delete(s) : D.add(s), F(), r && (s === "usage" || s === "billing_type") && br(), r && s === "capacity" && yr();
    }, Se = A(
      () => I.value.filter(
        (s) => b.has(s.key) || !D.has(s.key)
      )
    );
    typeof window < "u" && he();
    const _e = A(() => [
      { value: "", label: o("admin.groups.allStatus") },
      { value: "active", label: o("admin.accounts.status.active") },
      { value: "inactive", label: o("admin.accounts.status.inactive") }
    ]), z = A(() => [
      { value: "", label: o("admin.groups.allGroups") },
      { value: "true", label: o("admin.groups.exclusive") },
      { value: "false", label: o("admin.groups.nonExclusive") }
    ]), Z = A(
      () => Or.filter((s) => !h.isSimpleMode || s.value !== "composite")
    ), oe = A(() => [
      { value: "", label: o("admin.groups.allPlatforms") },
      ...Or
    ]), xe = A(() => [
      ...gl
    ]), ee = A(() => [
      { value: "any", label: o("admin.groups.compositeRoutes.endpoints.any") },
      {
        value: "messages",
        label: o("admin.groups.compositeRoutes.endpoints.messages")
      },
      {
        value: "count_tokens",
        label: o("admin.groups.compositeRoutes.endpoints.countTokens")
      },
      {
        value: "responses",
        label: o("admin.groups.compositeRoutes.endpoints.responses")
      },
      {
        value: "chat_completions",
        label: o("admin.groups.compositeRoutes.endpoints.chatCompletions")
      },
      {
        value: "embeddings",
        label: o("admin.groups.compositeRoutes.endpoints.embeddings")
      },
      { value: "images", label: o("admin.groups.compositeRoutes.endpoints.images") },
      { value: "gemini", label: o("admin.groups.compositeRoutes.endpoints.gemini") }
    ]), se = A(() => [
      { value: "exact", label: o("admin.groups.compositeRoutes.match.exact") },
      { value: "prefix", label: o("admin.groups.compositeRoutes.match.prefix") }
    ]), ge = A(() => [
      { value: "active", label: o("admin.accounts.status.active") },
      { value: "inactive", label: o("admin.accounts.status.inactive") }
    ]), ce = A(() => [
      { value: "standard", label: o("admin.groups.subscription.standard") },
      { value: "subscription", label: o("admin.groups.subscription.subscription") }
    ]), Oe = A(() => {
      const s = [
        { value: null, label: o("admin.groups.claudeCode.noFallback") }
      ];
      return Me.value.filter(
        (r) => r.platform === "anthropic" && !r.claude_code_only && r.status === "active"
      ).forEach((r) => {
        s.push({ value: r.id, label: r.name });
      }), s;
    }), Le = A(() => {
      var x;
      const s = [
        { value: null, label: o("admin.groups.claudeCode.noFallback") }
      ], l = (x = je.value) == null ? void 0 : x.id;
      return Me.value.filter(
        (k) => k.platform === "anthropic" && !k.claude_code_only && k.status === "active" && k.id !== l
      ).forEach((k) => {
        s.push({ value: k.id, label: k.name });
      }), s;
    }), L = A(() => {
      const s = [
        { value: null, label: o("admin.groups.invalidRequestFallback.noFallback") }
      ];
      return Me.value.filter(
        (r) => r.platform === "anthropic" && r.status === "active" && r.subscription_type !== "subscription" && r.fallback_group_id_on_invalid_request === null
      ).forEach((r) => {
        s.push({ value: r.id, label: r.name });
      }), s;
    }), K = A(() => {
      var x;
      const s = [
        { value: null, label: o("admin.groups.invalidRequestFallback.noFallback") }
      ], l = (x = je.value) == null ? void 0 : x.id;
      return Me.value.filter(
        (k) => k.platform === "anthropic" && k.status === "active" && k.subscription_type !== "subscription" && k.fallback_group_id_on_invalid_request === null && k.id !== l
      ).forEach((k) => {
        s.push({ value: k.id, label: k.name });
      }), s;
    }), J = (s, l) => s === "composite" || l === s, T = (s) => {
      const l = s.account_count || 0, r = o("admin.groups.platforms." + s.platform);
      return `${s.name} - ${r} (${o("admin.groups.accountsCount", { count: l })})`;
    }, N = A(() => Me.value.filter(
      (l) => J(y.platform, l.platform) && (l.account_count || 0) > 0
    ).map((l) => ({
      value: l.id,
      label: T(l)
    }))), X = A(() => {
      var r;
      const s = (r = je.value) == null ? void 0 : r.id;
      return Me.value.filter(
        (x) => J(v.platform, x.platform) && (x.account_count || 0) > 0 && x.id !== s
      ).map((x) => ({
        value: x.id,
        label: T(x)
      }));
    }), Me = R([]), Qe = R(!1), gt = R(/* @__PURE__ */ new Map()), vt = R(!1), lt = R(/* @__PURE__ */ new Map()), ro = R(""), Je = Xe({
      platform: "",
      status: "",
      is_exclusive: ""
    }), ze = Xe({
      page: 1,
      page_size: _l(),
      total: 0,
      pages: 0
    }), ga = Xe({
      sort_by: "sort_order",
      sort_order: "asc"
    });
    let va = null;
    const io = R(!1), fa = R(!1), ha = R(!1), St = R(null), zi = A(
      () => St.value !== null
    ), ba = R(null);
    let ya = null;
    const so = R(!1), qt = R(!1), Ht = R(!1), je = R(null), nt = R(null), Mt = Xe(/* @__PURE__ */ new Set()), lo = R(!1), Jo = R(null), no = R(!1), Zo = R(null), Pt = R([]), uo = R(!1), Ue = R(null), xa = R([]), Bt = R(!1), ka = R(!1), dt = R(null), Rt = R(""), wa = R("any"), co = R(!1), Be = R(null), W = Xe({
      public_model: "",
      match_type: "exact",
      target_platform: "openai",
      upstream_model: "",
      endpoint: "any",
      priority: 100,
      enabled: !0,
      notes: ""
    }), po = ao(), mo = ao(), Ze = Xe(Oo()), Ye = Xe(Oo()), er = R(!1), tr = R(!1), Yt = R(null), Kt = R(null), Ca = Zu(), Ui = A(
      () => Ze.items.filter((s) => s.selected).length
    ), Vi = A(
      () => Ye.items.filter((s) => s.selected).length
    ), Ea = R(""), Sa = R(""), _o = R(null), go = R(null), ar = (s, l, r) => {
      const x = Ju(s, l.value);
      if (x) {
        r.value = `admin.groups.modelAllowlist.errors.${x}`;
        return;
      }
      l.value = "", r.value = null;
    }, Fi = () => ar(Ze, Ea, _o), Ni = () => ar(Ye, Sa, go), y = Xe({
      name: "",
      description: "",
      platform: "anthropic",
      rate_multiplier: 1,
      is_exclusive: !1,
      status: "active",
      subscription_type: "standard",
      daily_limit_usd: null,
      weekly_limit_usd: null,
      monthly_limit_usd: null,
      long_context_pricing_enabled: !0,
      model_pricing: [],
      // 图片生成计费配置
      allow_image_generation: !1,
      allow_batch_image_generation: !1,
      image_rate_independent: !1,
      image_rate_multiplier: 1,
      batch_image_discount_multiplier: 0.5,
      batch_image_hold_multiplier: 0.6,
      image_price_1k: null,
      image_price_2k: null,
      image_price_4k: null,
      // 视频生成计费配置（仅 Grok 平台）
      video_rate_independent: !1,
      video_rate_multiplier: 1,
      video_price_480p: null,
      video_price_720p: null,
      video_price_1080p: null,
      video_model_prices: aa(),
      // Codex 网页搜索按次计费（仅 openai 平台使用）；null = 使用默认价 0.01
      web_search_price_per_call: null,
      search_price_per_1k: null,
      audio_realtime_price_per_min: null,
      audio_tts_price_per_million_chars: null,
      audio_stt_price_per_hour: null,
      // 高峰时段倍率配置
      peak_rate_enabled: !1,
      peak_start: "",
      peak_end: "",
      peak_rate_multiplier: 1,
      // 分组利润控制（五个 token 平台）；界面按百分比输入，提交时转小数
      profit_control_enabled: !1,
      profit_min_margin_percent: 0,
      profit_safety_buffer_percent: 0,
      // Claude Code 客户端限制（仅 anthropic 平台使用）
      claude_code_only: !1,
      fallback_group_id: null,
      fallback_group_id_on_invalid_request: null,
      // OpenAI Messages 调度配置（仅 openai 平台使用）
      allow_messages_dispatch: !1,
      allow_live: !1,
      default_mapped_model: "",
      opus_mapped_model: po.opus_mapped_model,
      sonnet_mapped_model: po.sonnet_mapped_model,
      haiku_mapped_model: po.haiku_mapped_model,
      exact_model_mappings: [],
      // 账号过滤控制（OpenAI/Antigravity 平台）
      require_oauth_only: !1,
      require_privacy_set: !1,
      // 模型路由开关
      model_routing_enabled: !1,
      // 支持的模型系列（仅 antigravity 平台）
      supported_model_scopes: ["claude", "gemini_text", "gemini_image"],
      // MCP XML 协议注入开关（仅 antigravity 平台）
      mcp_xml_inject: !0,
      // 从分组复制账号
      copy_accounts_from_group_ids: [],
      // 分组级 RPM 限制（每用户每分钟最大请求数；0 = 不限制）
      rpm_limit: 0,
      max_reasoning_effort: "",
      reasoning_effort_mappings: []
    }), ft = R([]), ut = R([]), or = Ta("create-rule"), rr = Ta("edit-rule"), Ii = Ta(
      "create-messages-dispatch-row"
    ), Li = Ta(
      "edit-messages-dispatch-row"
    ), ji = (s) => or(s), Gi = (s) => rr(s), qi = (s) => Ii(s), Hi = (s) => Li(s), Ma = (s) => `create-${or(s)}`, Pa = (s) => `edit-${rr(s)}`, vo = (s, l = !1) => l ? Pa(s) : Ma(s), $t = R({}), ht = R({}), bt = R({}), ir = (s) => {
      delete $t.value[s], delete ht.value[s], delete bt.value[s];
    }, fo = () => {
      $t.value = {}, ht.value = {}, bt.value = {};
    }, Dt = bl({
      delay: 300,
      search: async (s, { signal: l }) => (await me.accounts.list(
        1,
        20,
        {
          search: s,
          platform: "anthropic"
        },
        { signal: l }
      )).items.map((x) => ({ id: x.id, name: x.name })),
      onSuccess: (s, l) => {
        ht.value[s] = l;
      },
      onError: (s) => {
        ht.value[s] = [];
      }
    }), sr = (s) => {
      Dt.trigger(s, $t.value[s] || "");
    }, Bi = (s, l = !1) => {
      sr(vo(s, l));
    }, Yi = (s, l, r = !1) => {
      if (!s) return;
      s.accounts.some((k) => k.id === l.id) || s.accounts.push(l);
      const x = vo(s, r);
      $t.value[x] = "", bt.value[x] = !1;
    }, Ki = (s, l, r = !1) => {
      s && (s.accounts = s.accounts.filter((x) => x.id !== l));
    }, Xi = (s) => {
      const l = y.supported_model_scopes.indexOf(s);
      l === -1 ? y.supported_model_scopes.push(s) : y.supported_model_scopes.splice(l, 1);
    }, Wi = (s) => {
      const l = v.supported_model_scopes.indexOf(s);
      l === -1 ? v.supported_model_scopes.push(s) : v.supported_model_scopes.splice(l, 1);
    }, Qi = (s, l = !1) => {
      var x;
      const r = vo(s, l);
      bt.value[r] = !0, (x = ht.value[r]) != null && x.length || sr(r);
    }, Ji = () => {
      ft.value.push({ pattern: "", accounts: [] });
    }, Zi = (s) => {
      const l = ft.value.indexOf(s);
      if (l === -1) return;
      const r = Ma(s);
      Dt.clearKey(r), ir(r), ft.value.splice(l, 1);
    }, es = () => {
      ut.value.push({ pattern: "", accounts: [] });
    }, ts = (s) => {
      const l = ut.value.indexOf(s);
      if (l === -1) return;
      const r = Pa(s);
      Dt.clearKey(r), ir(r), ut.value.splice(l, 1);
    }, Xt = (s, l) => {
      const r = Oo(l);
      s.enabled = r.enabled, s.savedModels = r.savedModels, s.items = r.items;
    }, Wt = async (s, l, r) => {
      if (h.isSimpleMode) return;
      const x = { mode: s, groupID: l, platform: r }, k = Ca.next(x), M = s === "create" ? Ze : Ye, Q = s === "create" ? er : tr;
      Q.value = !0;
      try {
        const ta = await me.groups.getModelAllowlistCandidates(l, r);
        if (!Ca.isCurrent(k, x))
          return;
        Xu(M, ta);
      } catch (ta) {
        if (!Ca.isCurrent(k, x))
          return;
        console.error("Error loading group models list candidates:", ta);
      } finally {
        Ca.isCurrent(k, x) && (Q.value = !1);
      }
    }, as = (s, l) => {
      ti(Ze, s, l);
    }, os = (s, l) => {
      ti(Ye, s, l);
    }, lr = (s) => {
      const l = {};
      let r = !1;
      for (const x of s) {
        const k = x.pattern.trim();
        if (!k) continue;
        const M = x.accounts.map((Q) => Q.id).filter((Q) => Q > 0);
        M.length > 0 && (l[k] = M, r = !0);
      }
      return r ? l : null;
    }, rs = async (s) => {
      if (!s) return [];
      const l = [];
      for (const [r, x] of Object.entries(s)) {
        const k = [];
        for (const M of x)
          try {
            const Q = await me.accounts.getById(M);
            k.push({ id: Q.id, name: Q.name });
          } catch {
            k.push({ id: M, name: `#${M}` });
          }
        l.push({ pattern: r, accounts: k });
      }
      return l;
    }, v = Xe({
      name: "",
      description: "",
      platform: "anthropic",
      rate_multiplier: 1,
      is_exclusive: !1,
      status: "active",
      subscription_type: "standard",
      daily_limit_usd: null,
      weekly_limit_usd: null,
      monthly_limit_usd: null,
      long_context_pricing_enabled: !0,
      model_pricing: [],
      // 图片生成计费配置
      allow_image_generation: !1,
      allow_batch_image_generation: !1,
      image_rate_independent: !1,
      image_rate_multiplier: 1,
      batch_image_discount_multiplier: 0.5,
      batch_image_hold_multiplier: 0.6,
      image_price_1k: null,
      image_price_2k: null,
      image_price_4k: null,
      // 视频生成计费配置（仅 Grok 平台）
      video_rate_independent: !1,
      video_rate_multiplier: 1,
      video_price_480p: null,
      video_price_720p: null,
      video_price_1080p: null,
      video_model_prices: aa(),
      // Codex 网页搜索按次计费（仅 openai 平台使用）；null = 使用默认价 0.01
      web_search_price_per_call: null,
      search_price_per_1k: null,
      audio_realtime_price_per_min: null,
      audio_tts_price_per_million_chars: null,
      audio_stt_price_per_hour: null,
      // 高峰时段倍率配置
      peak_rate_enabled: !1,
      peak_start: "",
      peak_end: "",
      peak_rate_multiplier: 1,
      // 分组利润控制（五个 token 平台）；界面按百分比输入，提交时转小数
      profit_control_enabled: !1,
      profit_min_margin_percent: 0,
      profit_safety_buffer_percent: 0,
      // Claude Code 客户端限制（仅 anthropic 平台使用）
      claude_code_only: !1,
      fallback_group_id: null,
      fallback_group_id_on_invalid_request: null,
      // OpenAI Messages 调度配置（仅 openai 平台使用）
      allow_messages_dispatch: !1,
      allow_live: !1,
      default_mapped_model: "",
      opus_mapped_model: mo.opus_mapped_model,
      sonnet_mapped_model: mo.sonnet_mapped_model,
      haiku_mapped_model: mo.haiku_mapped_model,
      exact_model_mappings: [],
      // 账号过滤控制（OpenAI/Antigravity 平台）
      require_oauth_only: !1,
      require_privacy_set: !1,
      // 模型路由开关
      model_routing_enabled: !1,
      // 支持的模型系列（仅 antigravity 平台）
      supported_model_scopes: ["claude", "gemini_text", "gemini_image"],
      // MCP XML 协议注入开关（仅 antigravity 平台）
      mcp_xml_inject: !0,
      // 从分组复制账号
      copy_accounts_from_group_ids: [],
      // 分组级 RPM 限制（每用户每分钟最大请求数；0 = 不限制）
      rpm_limit: 0,
      max_reasoning_effort: "",
      reasoning_effort_mappings: []
    }), is = [
      { key: "image_price_1k", label: "1K" },
      { key: "image_price_2k", label: "2K" },
      { key: "image_price_4k", label: "4K" }
    ], ss = [
      { key: "video_price_480p", label: "480p" },
      { key: "video_price_720p", label: "720p" },
      { key: "video_price_1080p", label: "1080p" }
    ], Qt = (s, l = 0) => {
      if (s == null || s === "")
        return l;
      const r = Number(s);
      return Number.isFinite(r) ? r : l;
    }, ho = (s) => {
      if (s == null || s === "")
        return null;
      const l = Number(s);
      return Number.isFinite(l) && l >= 0 ? l : null;
    }, nr = (s) => {
      if (s == null || s === "")
        return o("admin.groups.imagePricing.notConfigured");
      const l = Number(s);
      return !Number.isFinite(l) || l < 0 ? o("admin.groups.imagePricing.notConfigured") : `$${l.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, ls = (s) => {
      if (s == null || s === "")
        return o("admin.groups.videoPricing.notConfigured");
      const l = Number(s);
      return !Number.isFinite(l) || l < 0 ? o("admin.groups.videoPricing.notConfigured") : `$${l.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, dr = (s) => {
      const r = s.image_rate_independent ? Qt(s.image_rate_multiplier, 1) : Qt(s.rate_multiplier, 1);
      return is.map((x) => {
        const k = ho(s[x.key]) ?? sc(s.platform, x.key);
        return {
          label: x.label,
          value: k !== null ? nr(k * r) : o("admin.groups.imagePricing.notConfigured")
        };
      });
    }, ur = (s) => {
      const l = s.video_rate_independent ? Qt(s.video_rate_multiplier, 1) : Qt(s.rate_multiplier, 1);
      return ss.map((r) => {
        const x = ho(s[r.key]) ?? lc(s.platform, r.key);
        return {
          label: r.label,
          value: x !== null ? ls(x * l) : o("admin.groups.videoPricing.notConfigured")
        };
      });
    }, ns = A(
      () => dr(y)
    ), ds = A(
      () => dr(v)
    ), us = A(
      () => ur(y)
    ), cs = A(
      () => ur(v)
    ), cr = (s) => {
      const l = ho(s.web_search_price_per_call) ?? zf, r = Qt(s.rate_multiplier, 1);
      return nr(l * r);
    }, ps = A(
      () => cr(y)
    ), ms = A(
      () => cr(v)
    ), q = A(
      () => fa.value ? "edit" : "create"
    ), m = A(
      () => q.value === "edit" ? v : y
    ), bo = A(
      () => q.value === "edit" ? X.value : N.value
    ), _s = A(
      () => q.value === "edit" ? Le.value : Oe.value
    ), gs = A(
      () => q.value === "edit" ? K.value : L.value
    ), Ge = A(
      () => q.value === "edit" ? Ye : Ze
    ), pr = A(
      () => q.value === "edit" ? tr.value : er.value
    ), vs = A(
      () => q.value === "edit" ? Vi.value : Ui.value
    ), mr = A({
      get: () => q.value === "edit" ? Sa.value : Ea.value,
      set: (s) => {
        q.value === "edit" ? Sa.value = s : Ea.value = s;
      }
    }), _r = A(
      () => q.value === "edit" ? go.value : _o.value
    ), fs = A(
      () => q.value === "edit" ? ds.value : ns.value
    ), hs = A(
      () => q.value === "edit" ? cs.value : us.value
    ), bs = A(
      () => q.value === "edit" ? ms.value : ps.value
    ), ys = A(
      () => q.value === "edit" ? ut.value : ft.value
    ), xs = (s) => {
      const l = s;
      q.value === "edit" ? Kt.value = l : Yt.value = l;
    }, gr = () => q.value === "edit" ? Ni() : Fi(), vr = (s, l) => q.value === "edit" ? os(s, l) : as(s, l), yo = (s) => q.value === "edit" ? Wi(s) : Xi(s), fr = () => q.value === "edit" ? qs() : js(), ks = (s) => q.value === "edit" ? Hs(s) : Gs(s), ws = (s) => q.value === "edit" ? Hi(s) : qi(s), Cs = (s) => q.value === "edit" ? Gi(s) : ji(s), Jt = (s) => q.value === "edit" ? Pa(s) : Ma(s), Es = () => q.value === "edit" ? es() : Ji(), Ss = (s) => q.value === "edit" ? ts(s) : Zi(s), Ms = () => q.value === "edit" ? Sr() : wr(), Ps = () => q.value === "edit" ? Ls() : Ns(), Rs = () => {
      q.value === "create" && (y.copy_accounts_from_group_ids = []);
    }, ct = (s) => {
      (s.platform !== "gemini" || !s.allow_image_generation) && (s.allow_batch_image_generation = !1), s.allow_batch_image_generation || (s.batch_image_discount_multiplier = 0.5, s.batch_image_hold_multiplier = 0.6);
    }, $s = A(() => nt.value ? nt.value.subscription_type === "subscription" ? o("admin.groups.deleteConfirmSubscription", {
      name: nt.value.name
    }) : o("admin.groups.deleteConfirm", { name: nt.value.name }) : ""), hr = async () => ba.value ? ba.value : (ya || (ya = me.groups.getLiveCapability().catch(() => ({ supported: !1 })).finally(() => {
      ya = null;
    })), ba.value = await ya, ba.value ?? { supported: !1 }), Ds = async (s) => {
      const l = y;
      if (l.allow_live) {
        l.allow_live = !1;
        return;
      }
      if ((await hr()).supported) {
        l.allow_live = !0;
        return;
      }
      St.value = s;
    }, Ts = () => {
      St.value === "create" && (y.allow_live = !0), St.value === "edit" && (v.allow_live = !0), St.value = null;
    }, As = () => {
      St.value = null;
    }, Re = async () => {
      va && va.abort();
      const s = new AbortController();
      va = s;
      const { signal: l } = s;
      Qe.value = !0;
      try {
        const r = await me.groups.list(
          ze.page,
          ze.page_size,
          {
            platform: Je.platform || void 0,
            status: Je.status,
            is_exclusive: !h.isSimpleMode && Je.is_exclusive ? Je.is_exclusive === "true" : void 0,
            search: ro.value.trim() || void 0,
            sort_by: ga.sort_by,
            sort_order: ga.sort_order
          },
          { signal: l }
        );
        if (l.aborted) return;
        Me.value = r.items, ze.total = r.total, ze.pages = r.pages, de.value ? br() : vt.value = !1, ye.value && yr();
      } catch (r) {
        if (l.aborted || (r == null ? void 0 : r.name) === "AbortError" || (r == null ? void 0 : r.code) === "ERR_CANCELED")
          return;
        p.showError(o("admin.groups.failedToLoad")), console.error("Error loading groups:", r);
      } finally {
        va === s && !l.aborted && (Qe.value = !1);
      }
    }, Ra = (s) => s >= 1e3 ? s.toFixed(0) : s >= 100 ? s.toFixed(1) : s.toFixed(2), Zt = (s) => `$${Ra(s ?? 0)}`, Os = (s, l) => {
      if (!l || l <= 0)
        return "font-medium text-gray-700 dark:text-gray-300";
      const r = s / l;
      return r >= 1 ? "font-semibold text-red-600 dark:text-red-400" : r >= 0.8 ? "font-semibold text-zo-alert-600 dark:text-zo-alert-400" : "font-medium text-gray-700 dark:text-gray-300";
    }, br = async () => {
      if (!de.value) {
        vt.value = !1;
        return;
      }
      vt.value = !0;
      try {
        const s = await me.groups.getUsageSummary(), l = /* @__PURE__ */ new Map();
        for (const r of s)
          l.set(r.group_id, {
            today_cost: r.today_cost,
            yesterday_cost: r.yesterday_cost,
            total_cost: r.total_cost
          });
        gt.value = l;
      } catch (s) {
        console.error("Error loading group usage summary:", s);
      } finally {
        vt.value = !1;
      }
    }, yr = async () => {
      if (ye.value)
        try {
          const s = await me.groups.getCapacitySummary(), l = /* @__PURE__ */ new Map();
          for (const r of s)
            l.set(r.group_id, {
              concurrencyUsed: r.concurrency_used,
              concurrencyMax: r.concurrency_max,
              sessionsUsed: r.sessions_used,
              sessionsMax: r.sessions_max,
              rpmUsed: r.rpm_used,
              rpmMax: r.rpm_max
            });
          lt.value = l;
        } catch (s) {
          console.error("Error loading group capacity summary:", s);
        }
    };
    let xr;
    const zs = () => {
      clearTimeout(xr), xr = setTimeout(() => {
        ze.page = 1, Re();
      }, 300);
    }, Us = (s) => {
      ze.page = s, Re();
    }, Vs = (s) => {
      ze.page_size = s, ze.page = 1, Re();
    }, Fs = (s, l) => {
      ga.sort_by = s, ga.sort_order = l, ze.page = 1, Re();
    }, kr = () => {
      io.value = !0, Wt("create", 0, y.platform);
    }, wr = () => {
      var s;
      io.value = !1, ft.value.forEach((l) => {
        Dt.clearKey(Ma(l));
      }), fo(), y.name = "", y.description = "", y.platform = "anthropic", y.rate_multiplier = 1, y.is_exclusive = !1, y.subscription_type = "standard", y.daily_limit_usd = null, y.weekly_limit_usd = null, y.monthly_limit_usd = null, y.allow_image_generation = !1, y.allow_batch_image_generation = !1, y.image_rate_independent = !1, y.image_rate_multiplier = 1, y.batch_image_discount_multiplier = 0.5, y.batch_image_hold_multiplier = 0.6, y.image_price_1k = null, y.image_price_2k = null, y.image_price_4k = null, y.video_rate_independent = !1, y.video_rate_multiplier = 1, y.video_price_480p = null, y.video_price_720p = null, y.video_price_1080p = null, y.video_model_prices = aa(), y.long_context_pricing_enabled = !0, y.model_pricing = [], y.web_search_price_per_call = null, y.search_price_per_1k = null, y.audio_realtime_price_per_min = null, y.audio_tts_price_per_million_chars = null, y.audio_stt_price_per_hour = null, y.peak_rate_enabled = !1, y.peak_start = "", y.peak_end = "", y.peak_rate_multiplier = 1, y.profit_control_enabled = !1, y.profit_min_margin_percent = 0, y.profit_safety_buffer_percent = 0, y.claude_code_only = !1, y.fallback_group_id = null, y.fallback_group_id_on_invalid_request = null, Fa(y), y.allow_live = !1, y.require_oauth_only = !1, y.require_privacy_set = !1, y.supported_model_scopes = ["claude", "gemini_text", "gemini_image"], y.mcp_xml_inject = !0, y.copy_accounts_from_group_ids = [], y.rpm_limit = 0, y.max_reasoning_effort = "", y.reasoning_effort_mappings = [], (s = Yt.value) == null || s.resetValidation(), Xt(Ze), Ea.value = "", _o.value = null, ft.value = [];
    }, Tt = (s) => {
      if (s == null)
        return null;
      if (typeof s == "string") {
        const l = s.trim();
        if (!l)
          return null;
        const r = Number(l);
        return Number.isFinite(r) && r > 0 ? r : null;
      }
      return Number.isFinite(s) && s > 0 ? s : null;
    }, et = (s) => {
      if (s == null || s === "")
        return 1;
      const l = Number(s);
      return Number.isFinite(l) && l >= 0 ? l : 1;
    }, $a = Go, Cr = ec, Er = (s) => {
      const l = tc(s);
      return l ? (p.showError(o(`admin.groups.profitControl.${l}`)), !1) : !0;
    }, Ns = async () => {
      var s, l;
      if (!y.name.trim()) {
        p.showError(o("admin.groups.nameRequired"));
        return;
      }
      if (!(La(y.platform) && Yt.value && !Yt.value.validate()) && Er(y)) {
        if (Ze.enabled && Na(Ze).models.length === 0) {
          p.showError(o("admin.groups.modelAllowlist.emptySelectionError"));
          return;
        }
        qt.value = !0;
        try {
          const {
            video_model_prices: r,
            ...x
          } = y, k = ii(
            y.video_model_prices
          ), M = {
            ...x,
            model_pricing: c(
              y.model_pricing,
              y.platform
            ),
            daily_limit_usd: Tt(
              y.daily_limit_usd
            ),
            weekly_limit_usd: Tt(
              y.weekly_limit_usd
            ),
            monthly_limit_usd: Tt(
              y.monthly_limit_usd
            ),
            ...Object.keys(k).length > 0 ? { video_model_prices: k } : {},
            model_routing: lr(
              ft.value
            ),
            model_allowlist: Na(Ze),
            supported_model_scopes: ai(
              y.platform,
              y.supported_model_scopes
            ),
            messages_dispatch_model_config: y.platform === "openai" ? ei({
              allow_messages_dispatch: y.allow_messages_dispatch,
              opus_mapped_model: y.opus_mapped_model,
              sonnet_mapped_model: y.sonnet_mapped_model,
              haiku_mapped_model: y.haiku_mapped_model,
              exact_model_mappings: y.exact_model_mappings
            }) : void 0,
            reasoning_effort_mappings: Aa(
              y.reasoning_effort_mappings
            ),
            // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
            profit_control_enabled: Nt(y.platform) && y.profit_control_enabled,
            profit_min_margin: $a(y.profit_min_margin_percent),
            profit_safety_buffer: $a(
              y.profit_safety_buffer_percent
            )
          };
          delete M.profit_min_margin_percent, delete M.profit_safety_buffer_percent;
          const Q = (Dr) => Dr === "" ? null : Dr;
          M.daily_limit_usd = Q(M.daily_limit_usd), M.weekly_limit_usd = Q(M.weekly_limit_usd), M.monthly_limit_usd = Q(M.monthly_limit_usd), M.image_rate_multiplier = et(
            M.image_rate_multiplier
          ), ct(M), M.batch_image_discount_multiplier = et(
            M.batch_image_discount_multiplier
          ), M.batch_image_hold_multiplier = et(
            M.batch_image_hold_multiplier
          ), M.video_rate_multiplier = et(
            M.video_rate_multiplier
          ), M.image_price_1k = Q(M.image_price_1k), M.image_price_2k = Q(M.image_price_2k), M.image_price_4k = Q(M.image_price_4k), M.video_price_480p = Q(M.video_price_480p), M.video_price_720p = Q(M.video_price_720p), M.video_price_1080p = Q(M.video_price_1080p), M.search_price_per_1k = Q(
            M.search_price_per_1k
          ), M.audio_realtime_price_per_min = Q(
            M.audio_realtime_price_per_min
          ), M.audio_tts_price_per_million_chars = Q(
            M.audio_tts_price_per_million_chars
          ), M.audio_stt_price_per_hour = Q(
            M.audio_stt_price_per_hour
          ), M.web_search_price_per_call = Q(
            M.web_search_price_per_call
          ), M.peak_rate_enabled = y.peak_rate_enabled, M.peak_start = y.peak_start, M.peak_end = y.peak_end, M.peak_rate_multiplier = et(
            y.peak_rate_multiplier
          );
          const ta = h.isSimpleMode ? { name: y.name, description: y.description, platform: y.platform } : M;
          await me.groups.create(ta), p.showSuccess(o("admin.groups.groupCreated")), wr(), Re(), _.isCurrentStep('[data-tour="group-form-submit"]') && _.nextStep(500);
        } catch (r) {
          p.showError(
            ((l = (s = r.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || o("admin.groups.failedToCreate")
          ), console.error("Error creating group:", r);
        } finally {
          qt.value = !1;
        }
      }
    }, Is = async (s) => {
      je.value = s, v.name = s.name, v.description = s.description || "", v.platform = s.platform, v.rate_multiplier = s.rate_multiplier, v.is_exclusive = s.is_exclusive, v.status = s.status, v.subscription_type = s.subscription_type || "standard", v.daily_limit_usd = s.daily_limit_usd, v.weekly_limit_usd = s.weekly_limit_usd, v.monthly_limit_usd = s.monthly_limit_usd, v.long_context_pricing_enabled = s.long_context_pricing_enabled ?? !0, v.model_pricing = n(s.model_pricing), v.allow_image_generation = s.allow_image_generation ?? !1, v.allow_batch_image_generation = s.allow_batch_image_generation ?? !1, v.image_rate_independent = s.image_rate_independent ?? !1, v.image_rate_multiplier = s.image_rate_multiplier ?? 1, v.batch_image_discount_multiplier = s.batch_image_discount_multiplier ?? 0.5, v.batch_image_hold_multiplier = s.batch_image_hold_multiplier ?? 0.6, v.image_price_1k = s.image_price_1k, v.image_price_2k = s.image_price_2k, v.image_price_4k = s.image_price_4k, v.video_rate_independent = s.video_rate_independent ?? !1, v.video_rate_multiplier = s.video_rate_multiplier ?? 1, v.video_price_480p = s.video_price_480p, v.video_price_720p = s.video_price_720p, v.video_price_1080p = s.video_price_1080p, v.video_model_prices = aa(
        s.video_model_prices
      ), v.web_search_price_per_call = s.web_search_price_per_call ?? null, v.search_price_per_1k = s.search_price_per_1k ?? null, v.audio_realtime_price_per_min = s.audio_realtime_price_per_min ?? null, v.audio_tts_price_per_million_chars = s.audio_tts_price_per_million_chars ?? null, v.audio_stt_price_per_hour = s.audio_stt_price_per_hour ?? null, v.peak_rate_enabled = s.peak_rate_enabled ?? !1, v.peak_start = s.peak_start ?? "", v.peak_end = s.peak_end ?? "", v.peak_rate_multiplier = s.peak_rate_multiplier ?? 1, v.profit_control_enabled = s.profit_control_enabled ?? !1, v.profit_min_margin_percent = Cr(
        s.profit_min_margin ?? 0
      ), v.profit_safety_buffer_percent = Cr(
        s.profit_safety_buffer ?? 0
      ), v.claude_code_only = s.claude_code_only || !1, v.fallback_group_id = s.fallback_group_id, v.fallback_group_id_on_invalid_request = s.fallback_group_id_on_invalid_request;
      const l = Ku(
        s.messages_dispatch_model_config
      );
      v.allow_messages_dispatch = s.allow_messages_dispatch || l.allow_messages_dispatch, v.allow_live = s.allow_live ?? !1, v.opus_mapped_model = l.opus_mapped_model, v.sonnet_mapped_model = l.sonnet_mapped_model, v.haiku_mapped_model = l.haiku_mapped_model, v.exact_model_mappings = l.exact_model_mappings, v.require_oauth_only = s.require_oauth_only ?? !1, v.require_privacy_set = s.require_privacy_set ?? !1, v.model_routing_enabled = s.model_routing_enabled || !1, v.supported_model_scopes = s.supported_model_scopes || [
        "claude",
        "gemini_text",
        "gemini_image"
      ], v.mcp_xml_inject = s.mcp_xml_inject ?? !0, v.copy_accounts_from_group_ids = [], v.rpm_limit = s.rpm_limit ?? 0, v.max_reasoning_effort = Ct(
        s.platform,
        s.max_reasoning_effort
      ), v.reasoning_effort_mappings = wo(
        s.reasoning_effort_mappings,
        s.platform
      ), Xt(Ye, s.model_allowlist), ut.value = await rs(
        s.model_routing
      ), Wt("edit", s.id, s.platform), fa.value = !0;
    }, Sr = () => {
      var s;
      ut.value.forEach((l) => {
        Dt.clearKey(Pa(l));
      }), fo(), fa.value = !1, je.value = null, v.max_reasoning_effort = "", v.reasoning_effort_mappings = [], (s = Kt.value) == null || s.resetValidation(), ut.value = [], v.copy_accounts_from_group_ids = [], v.peak_rate_enabled = !1, v.peak_start = "", v.peak_end = "", v.peak_rate_multiplier = 1, v.profit_control_enabled = !1, v.profit_min_margin_percent = 0, v.profit_safety_buffer_percent = 0, v.video_rate_independent = !1, v.video_rate_multiplier = 1, v.video_price_480p = null, v.video_price_720p = null, v.video_price_1080p = null, v.video_model_prices = aa(), v.long_context_pricing_enabled = !0, v.model_pricing = [], v.web_search_price_per_call = null, v.search_price_per_1k = null, v.audio_realtime_price_per_min = null, v.audio_tts_price_per_million_chars = null, v.audio_stt_price_per_hour = null, Fa(v), v.allow_live = !1, Xt(Ye), Sa.value = "", go.value = null;
    }, Ls = async () => {
      var s, l;
      if (je.value) {
        if (!v.name.trim()) {
          p.showError(o("admin.groups.nameRequired"));
          return;
        }
        if (!(La(v.platform) && Kt.value && !Kt.value.validate()) && Er(v)) {
          if (Ye.enabled && Na(Ye).models.length === 0) {
            p.showError(o("admin.groups.modelAllowlist.emptySelectionError"));
            return;
          }
          qt.value = !0;
          try {
            const r = {
              ...v,
              model_pricing: c(
                v.model_pricing,
                v.platform
              ),
              daily_limit_usd: Tt(
                v.daily_limit_usd
              ),
              weekly_limit_usd: Tt(
                v.weekly_limit_usd
              ),
              monthly_limit_usd: Tt(
                v.monthly_limit_usd
              ),
              video_model_prices: ii(
                v.video_model_prices
              ),
              fallback_group_id: v.fallback_group_id === null ? 0 : v.fallback_group_id,
              fallback_group_id_on_invalid_request: v.fallback_group_id_on_invalid_request === null ? 0 : v.fallback_group_id_on_invalid_request,
              model_routing: lr(
                ut.value
              ),
              model_allowlist: Na(Ye),
              supported_model_scopes: ai(
                v.platform,
                v.supported_model_scopes
              ),
              messages_dispatch_model_config: v.platform === "openai" ? ei({
                allow_messages_dispatch: v.allow_messages_dispatch,
                opus_mapped_model: v.opus_mapped_model,
                sonnet_mapped_model: v.sonnet_mapped_model,
                haiku_mapped_model: v.haiku_mapped_model,
                exact_model_mappings: v.exact_model_mappings
              }) : void 0,
              reasoning_effort_mappings: Aa(
                v.reasoning_effort_mappings
              ),
              // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
              profit_control_enabled: Nt(v.platform) && v.profit_control_enabled,
              profit_min_margin: $a(v.profit_min_margin_percent),
              profit_safety_buffer: $a(
                v.profit_safety_buffer_percent
              )
            };
            delete r.profit_min_margin_percent, delete r.profit_safety_buffer_percent;
            const x = (Q) => Q === "" ? null : Q;
            r.daily_limit_usd = x(r.daily_limit_usd), r.weekly_limit_usd = x(r.weekly_limit_usd), r.monthly_limit_usd = x(r.monthly_limit_usd), r.image_rate_multiplier = et(
              r.image_rate_multiplier
            ), ct(r), r.batch_image_discount_multiplier = et(
              r.batch_image_discount_multiplier
            ), r.batch_image_hold_multiplier = et(
              r.batch_image_hold_multiplier
            ), r.video_rate_multiplier = et(
              r.video_rate_multiplier
            );
            const k = (Q) => Q === "" || Q === null ? -1 : Q;
            r.image_price_1k = k(r.image_price_1k), r.image_price_2k = k(r.image_price_2k), r.image_price_4k = k(r.image_price_4k), r.video_price_480p = k(r.video_price_480p), r.video_price_720p = k(r.video_price_720p), r.video_price_1080p = k(r.video_price_1080p), r.search_price_per_1k = k(
              r.search_price_per_1k
            ), r.audio_realtime_price_per_min = k(
              r.audio_realtime_price_per_min
            ), r.audio_tts_price_per_million_chars = k(
              r.audio_tts_price_per_million_chars
            ), r.audio_stt_price_per_hour = k(
              r.audio_stt_price_per_hour
            ), r.web_search_price_per_call = k(
              r.web_search_price_per_call
            ), r.peak_rate_enabled = v.peak_rate_enabled, r.peak_start = v.peak_start, r.peak_end = v.peak_end, r.peak_rate_multiplier = et(
              v.peak_rate_multiplier
            );
            const M = h.isSimpleMode ? { name: v.name, description: v.description } : r;
            await me.groups.update(je.value.id, M), p.showSuccess(o("admin.groups.groupUpdated")), Sr(), Re();
          } catch (r) {
            p.showError(
              ((l = (s = r.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || o("admin.groups.failedToUpdate")
            ), console.error("Error updating group:", r);
          } finally {
            qt.value = !1;
          }
        }
      }
    }, js = () => {
      y.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, Gs = (s) => {
      const l = y.exact_model_mappings.indexOf(s);
      l !== -1 && y.exact_model_mappings.splice(l, 1);
    }, qs = () => {
      v.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, Hs = (s) => {
      const l = v.exact_model_mappings.indexOf(s);
      l !== -1 && v.exact_model_mappings.splice(l, 1);
    }, Bs = (s) => {
      Jo.value = s, lo.value = !0;
    }, Ys = (s) => {
      Zo.value = s, no.value = !0;
    }, Ks = async (s) => {
      if (!Mt.has(s.id)) {
        Mt.add(s.id);
        try {
          const l = await me.groups.duplicate(s.id);
          p.showSuccess(
            o("admin.groups.duplicateSuccess", { name: l.name })
          ), await Re();
        } catch (l) {
          p.showError(
            Cl(l, o("admin.groups.duplicateFailed"))
          );
        } finally {
          Mt.delete(s.id);
        }
      }
    }, Xs = (s) => {
      var l;
      return ((l = se.value.find((r) => r.value === s)) == null ? void 0 : l.label) || s;
    }, Ws = (s) => {
      var l;
      return ((l = ee.value.find((r) => r.value === s)) == null ? void 0 : l.label) || s;
    }, Mr = (s) => s ? o(`admin.groups.platforms.${s}`) : "—", Qs = (s) => s === "route" ? o("admin.groups.compositeRoutes.sources.route") : s === "detector" ? o("admin.groups.compositeRoutes.sources.detector") : s || "—", ea = () => {
      dt.value = null, W.public_model = "", W.match_type = "exact", W.target_platform = "openai", W.upstream_model = "", W.endpoint = "any", W.priority = 100, W.enabled = !0, W.notes = "";
    }, Js = () => ({
      public_model: W.public_model.trim(),
      match_type: W.match_type,
      target_platform: W.target_platform,
      upstream_model: W.upstream_model.trim(),
      endpoint: W.endpoint,
      priority: Number(W.priority) || 100,
      enabled: W.enabled,
      notes: W.notes.trim()
    }), Da = async () => {
      var s, l, r, x;
      if (Ue.value) {
        Bt.value = !0;
        try {
          const k = await me.groups.listCompositeRoutes(
            Ue.value.id
          );
          xa.value = k.sort((M, Q) => M.priority !== Q.priority ? M.priority - Q.priority : M.id - Q.id);
        } catch (k) {
          p.showError(
            ((l = (s = k.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || ((x = (r = k.response) == null ? void 0 : r.data) == null ? void 0 : x.message) || o("admin.groups.compositeRoutes.failedToLoad")
          ), console.error("Error loading composite routes:", k);
        } finally {
          Bt.value = !1;
        }
      }
    }, Zs = async (s) => {
      Ue.value = s, Rt.value = "", wa.value = "any", Be.value = null, ea(), uo.value = !0, await Da();
    }, Pr = () => {
      uo.value = !1, Ue.value = null, xa.value = [], Be.value = null, ea();
    }, el = (s) => {
      dt.value = s.id, W.public_model = s.public_model, W.match_type = s.match_type, W.target_platform = s.target_platform, W.upstream_model = s.upstream_model, W.endpoint = s.endpoint, W.priority = s.priority || 100, W.enabled = s.enabled, W.notes = s.notes || "";
    }, tl = async () => {
      var s, l, r, x;
      if (Ue.value) {
        if (!W.public_model.trim()) {
          p.showError(o("admin.groups.compositeRoutes.publicModelRequired"));
          return;
        }
        ka.value = !0;
        try {
          const k = Js();
          dt.value ? (await me.groups.updateCompositeRoute(
            Ue.value.id,
            dt.value,
            k
          ), p.showSuccess(o("admin.groups.compositeRoutes.routeUpdated"))) : (await me.groups.createCompositeRoute(
            Ue.value.id,
            k
          ), p.showSuccess(o("admin.groups.compositeRoutes.routeCreated"))), ea(), await Da();
        } catch (k) {
          p.showError(
            ((l = (s = k.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || ((x = (r = k.response) == null ? void 0 : r.data) == null ? void 0 : x.message) || o("admin.groups.compositeRoutes.failedToSave")
          ), console.error("Error saving composite route:", k);
        } finally {
          ka.value = !1;
        }
      }
    }, al = async (s) => {
      var l, r, x, k;
      if (Ue.value && window.confirm(o("admin.groups.compositeRoutes.deleteConfirm")))
        try {
          await me.groups.deleteCompositeRoute(
            Ue.value.id,
            s.id
          ), dt.value === s.id && ea(), p.showSuccess(o("admin.groups.compositeRoutes.routeDeleted")), await Da();
        } catch (M) {
          p.showError(
            ((r = (l = M.response) == null ? void 0 : l.data) == null ? void 0 : r.detail) || ((k = (x = M.response) == null ? void 0 : x.data) == null ? void 0 : k.message) || o("admin.groups.compositeRoutes.failedToDelete")
          ), console.error("Error deleting composite route:", M);
        }
    }, Rr = async () => {
      var s, l, r, x;
      if (!(!Ue.value || !Rt.value.trim())) {
        co.value = !0;
        try {
          Be.value = await me.groups.previewCompositeRoute(
            Ue.value.id,
            {
              model: Rt.value.trim(),
              endpoint: wa.value
            }
          );
        } catch (k) {
          p.showError(
            ((l = (s = k.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || ((x = (r = k.response) == null ? void 0 : r.data) == null ? void 0 : x.message) || o("admin.groups.compositeRoutes.failedToPreview")
          ), console.error("Error previewing composite route:", k);
        } finally {
          co.value = !1;
        }
      }
    }, ol = (s) => {
      nt.value = s, ha.value = !0;
    }, rl = async () => {
      var s, l;
      if (nt.value)
        try {
          await me.groups.delete(nt.value.id), p.showSuccess(o("admin.groups.groupDeleted")), ha.value = !1, nt.value = null, Re();
        } catch (r) {
          p.showError(
            ((l = (s = r.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || o("admin.groups.failedToDelete")
          ), console.error("Error deleting group:", r);
        }
    };
    qe(
      () => y.subscription_type,
      (s) => {
        s === "subscription" ? (y.is_exclusive = !0, y.fallback_group_id_on_invalid_request = null) : (y.peak_rate_enabled = !1, y.peak_start = "", y.peak_end = "", y.peak_rate_multiplier = 1);
      }
    ), qe(
      () => v.subscription_type,
      (s) => {
        s !== "subscription" && (v.peak_rate_enabled = !1, v.peak_start = "", v.peak_end = "", v.peak_rate_multiplier = 1);
      }
    ), qe(
      () => y.platform,
      (s) => {
        var l;
        ["anthropic", "antigravity"].includes(s) || (y.fallback_group_id_on_invalid_request = null), s !== "openai" && (Fa(y), y.allow_live = !1), Nt(s) || (y.profit_control_enabled = !1, y.profit_min_margin_percent = 0, y.profit_safety_buffer_percent = 0), y.max_reasoning_effort = Ct(
          s,
          y.max_reasoning_effort
        ), y.reasoning_effort_mappings = wo(
          Aa(y.reasoning_effort_mappings),
          s
        ), (l = Yt.value) == null || l.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(s) || (y.require_oauth_only = !1, y.require_privacy_set = !1), ct(y), Xt(Ze), Wt("create", 0, s);
      }
    ), qe(
      () => y.allow_image_generation,
      () => {
        ct(y);
      }
    ), qe(
      () => y.allow_batch_image_generation,
      () => {
        ct(y);
      }
    ), qe(
      () => v.platform,
      (s) => {
        var l;
        ["anthropic", "antigravity"].includes(s) || (v.fallback_group_id_on_invalid_request = null), s !== "openai" && (Fa(v), v.allow_live = !1), Nt(s) || (v.profit_control_enabled = !1, v.profit_min_margin_percent = 0, v.profit_safety_buffer_percent = 0), v.max_reasoning_effort = Ct(
          s,
          v.max_reasoning_effort
        ), v.reasoning_effort_mappings = wo(
          Aa(v.reasoning_effort_mappings),
          s
        ), (l = Kt.value) == null || l.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(s) || (v.require_oauth_only = !1, v.require_privacy_set = !1), ct(v), je.value && (Xt(Ye, v.platform === je.value.platform ? je.value.model_allowlist : void 0), Wt("edit", je.value.id, s));
      }
    ), qe(
      () => v.allow_image_generation,
      () => {
        ct(v);
      }
    ), qe(
      () => v.allow_batch_image_generation,
      () => {
        ct(v);
      }
    ), qe(
      () => v.platform,
      (s) => {
        ["anthropic", "antigravity"].includes(s) || (v.fallback_group_id_on_invalid_request = null), s !== "openai" && (v.allow_messages_dispatch = !1, v.allow_live = !1, v.default_mapped_model = "");
      }
    );
    const $r = (s) => {
      const l = s.target;
      l.closest(".account-search-container") || Object.keys(bt.value).forEach((r) => {
        bt.value[r] = !1;
      }), ie.value && !ie.value.contains(l) && (V.value = !1);
    }, il = async () => {
      try {
        const s = await me.groups.getAll();
        Pt.value = [...s].sort(
          (l, r) => l.sort_order - r.sort_order
        ), so.value = !0;
      } catch (s) {
        p.showError(o("admin.groups.failedToLoad")), console.error("Error loading groups for sorting:", s);
      }
    }, xo = () => {
      so.value = !1, Pt.value = [];
    }, sl = async () => {
      var s, l;
      Ht.value = !0;
      try {
        const r = Pt.value.map((x, k) => ({
          id: x.id,
          sort_order: k * 10
        }));
        await me.groups.updateSortOrder(r), p.showSuccess(o("admin.groups.sortOrderUpdated")), xo(), Re();
      } catch (r) {
        p.showError(
          ((l = (s = r.response) == null ? void 0 : s.data) == null ? void 0 : l.detail) || o("admin.groups.failedToUpdateSortOrder")
        ), console.error("Error updating sort order:", r);
      } finally {
        Ht.value = !1;
      }
    };
    return ni(() => {
      Re(), h.isSimpleMode || (hr(), Wt("create", 0, y.platform)), document.addEventListener("click", $r);
    }), ui(() => {
      document.removeEventListener("click", $r), Dt.clearAll(), fo();
    }), (s, l) => (g(), f(fe, null, [
      $(fl, null, {
        filters: pe(() => [
          t("div", dc, [
            t("div", uc, [
              t("div", cc, [
                $(Y, {
                  name: "search",
                  size: "md",
                  class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                }),
                U(t("input", {
                  "onUpdate:modelValue": l[0] || (l[0] = (r) => ro.value = r),
                  type: "text",
                  placeholder: d(o)("admin.groups.searchGroups"),
                  class: "input pl-10",
                  onInput: zs
                }, null, 40, pc), [
                  [H, ro.value]
                ])
              ]),
              $(Te, {
                modelValue: Je.platform,
                "onUpdate:modelValue": l[1] || (l[1] = (r) => Je.platform = r),
                options: oe.value,
                placeholder: d(o)("admin.groups.allPlatforms"),
                class: "w-44",
                onChange: Re
              }, null, 8, ["modelValue", "options", "placeholder"]),
              $(Te, {
                modelValue: Je.status,
                "onUpdate:modelValue": l[2] || (l[2] = (r) => Je.status = r),
                options: _e.value,
                placeholder: d(o)("admin.groups.allStatus"),
                class: "w-40",
                onChange: Re
              }, null, 8, ["modelValue", "options", "placeholder"]),
              d(h).isSimpleMode ? E("", !0) : (g(), Ne(Te, {
                key: 0,
                modelValue: Je.is_exclusive,
                "onUpdate:modelValue": l[3] || (l[3] = (r) => Je.is_exclusive = r),
                options: z.value,
                placeholder: d(o)("admin.groups.allGroups"),
                class: "w-44",
                onChange: Re
              }, null, 8, ["modelValue", "options", "placeholder"]))
            ]),
            t("div", mc, [
              t("button", {
                onClick: Re,
                disabled: Qe.value,
                class: "btn btn-secondary",
                title: d(o)("common.refresh")
              }, [
                $(Y, {
                  name: "refresh",
                  size: "md",
                  class: te(Qe.value ? "animate-spin" : "")
                }, null, 8, ["class"])
              ], 8, _c),
              t("div", {
                class: "relative",
                ref_key: "columnDropdownRef",
                ref: ie
              }, [
                t("button", {
                  onClick: l[4] || (l[4] = (r) => V.value = !V.value),
                  class: "btn btn-secondary",
                  title: d(o)("admin.groups.columnSettings")
                }, [
                  $(Y, {
                    name: "grid",
                    size: "md",
                    class: "mr-2"
                  }),
                  t("span", vc, u(d(o)("admin.groups.columnSettings")), 1)
                ], 8, gc),
                V.value ? (g(), f("div", fc, [
                  (g(!0), f(fe, null, Ce(C.value, (r) => (g(), f("button", {
                    key: r.key,
                    onClick: (x) => ue(r.key),
                    class: "flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700"
                  }, [
                    t("span", null, u(r.label), 1),
                    ne(r.key) ? (g(), Ne(Y, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : E("", !0)
                  ], 8, hc))), 128))
                ])) : E("", !0)
              ], 512),
              d(h).isSimpleMode ? E("", !0) : (g(), f("button", {
                key: 0,
                onClick: il,
                class: "btn btn-secondary",
                title: d(o)("admin.groups.sortOrder")
              }, [
                $(Y, {
                  name: "arrowsUpDown",
                  size: "md",
                  class: "mr-2"
                }),
                le(" " + u(d(o)("admin.groups.sortOrder")), 1)
              ], 8, bc)),
              t("button", {
                onClick: kr,
                class: "btn btn-primary",
                "data-tour": "groups-create-btn"
              }, [
                $(Y, {
                  name: "plus",
                  size: "md",
                  class: "mr-2"
                }),
                le(" " + u(d(o)("admin.groups.createGroup")), 1)
              ])
            ])
          ])
        ]),
        table: pe(() => [
          $(vl, {
            columns: Se.value,
            data: Me.value,
            loading: Qe.value,
            "server-side-sort": !0,
            "default-sort-key": "sort_order",
            "default-sort-order": "asc",
            onSort: Fs
          }, {
            "cell-name": pe(({ value: r }) => [
              t("span", yc, u(r), 1)
            ]),
            "cell-id": pe(({ value: r }) => [
              t("span", xc, "#" + u(r), 1)
            ]),
            "cell-platform": pe(({ value: r }) => [
              t("span", {
                class: te([
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  r === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : r === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : r === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : r === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : r === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : r === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : r === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : r === "minimax" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                ])
              }, [
                $(Xa, {
                  platform: r,
                  size: "xs"
                }, null, 8, ["platform"]),
                le(" " + u(d(o)("admin.groups.platforms." + r)), 1)
              ], 2)
            ]),
            "cell-billing_type": pe(({ row: r }) => {
              var x, k, M;
              return [
                t("div", kc, [
                  t("span", {
                    class: te([
                      "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
                      r.subscription_type === "subscription" ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    ])
                  }, u(r.subscription_type === "subscription" ? d(o)("admin.groups.subscription.subscription") : d(o)("admin.groups.subscription.standard")), 3),
                  r.subscription_type === "subscription" ? (g(), f("div", wc, [
                    r.daily_limit_usd || r.weekly_limit_usd || r.monthly_limit_usd ? (g(), f("div", Cc, [
                      r.daily_limit_usd ? (g(), f("span", Ec, [
                        vt.value ? (g(), f("span", Sc, "—")) : (g(), f("span", {
                          key: 1,
                          class: te(
                            Os(
                              ((x = gt.value.get(r.id)) == null ? void 0 : x.today_cost) ?? 0,
                              r.daily_limit_usd
                            )
                          )
                        }, u(Zt(((k = gt.value.get(r.id)) == null ? void 0 : k.today_cost) ?? 0)), 3)),
                        t("span", Mc, " / " + u(Zt(r.daily_limit_usd)) + "/" + u(d(o)("admin.groups.limitDay")), 1)
                      ])) : E("", !0),
                      r.daily_limit_usd && (r.weekly_limit_usd || r.monthly_limit_usd) ? (g(), f("span", Pc, "·")) : E("", !0),
                      r.weekly_limit_usd ? (g(), f("span", Rc, u(Zt(r.weekly_limit_usd)) + "/" + u(d(o)("admin.groups.limitWeek")), 1)) : E("", !0),
                      r.weekly_limit_usd && r.monthly_limit_usd ? (g(), f("span", $c, "·")) : E("", !0),
                      r.monthly_limit_usd ? (g(), f("span", Dc, u(Zt(r.monthly_limit_usd)) + "/" + u(d(o)("admin.groups.limitMonth")), 1)) : E("", !0)
                    ])) : (g(), f("span", Tc, u(d(o)("admin.groups.subscription.noLimit")), 1)),
                    t("div", Ac, [
                      le(u(d(o)("admin.groups.usageTotal")) + " ", 1),
                      t("span", Oc, u(vt.value ? "—" : Zt(((M = gt.value.get(r.id)) == null ? void 0 : M.total_cost) ?? 0)), 1)
                    ])
                  ])) : E("", !0)
                ])
              ];
            }),
            "cell-rate_multiplier": pe(({ value: r }) => [
              t("span", zc, u(r) + "x", 1)
            ]),
            "cell-is_exclusive": pe(({ value: r }) => [
              t("span", {
                class: te(["badge", r ? "badge-primary" : "badge-gray"])
              }, u(r ? d(o)("admin.groups.exclusive") : d(o)("admin.groups.public")), 3)
            ]),
            "cell-account_count": pe(({ row: r }) => [
              t("div", Uc, [
                t("div", null, [
                  t("span", Vc, u(d(o)("admin.groups.accountsAvailable")), 1),
                  t("span", Fc, u(r.active_account_count || 0), 1),
                  t("span", Nc, u(d(o)("admin.groups.accountsUnit")), 1)
                ]),
                r.rate_limited_account_count ? (g(), f("div", Ic, [
                  t("span", Lc, u(d(o)("admin.groups.accountsRateLimited")), 1),
                  t("span", jc, u(r.rate_limited_account_count), 1),
                  t("span", Gc, u(d(o)("admin.groups.accountsUnit")), 1)
                ])) : E("", !0),
                t("div", null, [
                  t("span", qc, u(d(o)("admin.groups.accountsTotal")), 1),
                  t("span", Hc, u(r.account_count || 0), 1),
                  t("span", Bc, u(d(o)("admin.groups.accountsUnit")), 1)
                ])
              ])
            ]),
            "cell-capacity": pe(({ row: r }) => [
              lt.value.get(r.id) ? (g(), Ne(Vd, {
                key: 0,
                "concurrency-used": lt.value.get(r.id).concurrencyUsed,
                "concurrency-max": lt.value.get(r.id).concurrencyMax,
                "sessions-used": lt.value.get(r.id).sessionsUsed,
                "sessions-max": lt.value.get(r.id).sessionsMax,
                "rpm-used": lt.value.get(r.id).rpmUsed,
                "rpm-max": lt.value.get(r.id).rpmMax
              }, null, 8, ["concurrency-used", "concurrency-max", "sessions-used", "sessions-max", "rpm-used", "rpm-max"])) : (g(), f("span", Yc, "—"))
            ]),
            "cell-usage": pe(({ row: r }) => {
              var x, k, M;
              return [
                vt.value ? (g(), f("div", Kc, "—")) : (g(), f("div", Xc, [
                  t("div", Wc, [
                    t("span", Qc, u(d(o)("admin.groups.usageToday")), 1),
                    t("span", Jc, "$" + u(Ra(((x = gt.value.get(r.id)) == null ? void 0 : x.today_cost) ?? 0)), 1)
                  ]),
                  t("div", Zc, [
                    t("span", ep, u(d(o)("admin.groups.usageYesterday")), 1),
                    t("span", tp, "$" + u(Ra(((k = gt.value.get(r.id)) == null ? void 0 : k.yesterday_cost) ?? 0)), 1)
                  ]),
                  t("div", ap, [
                    t("span", op, u(d(o)("admin.groups.usageTotal")), 1),
                    t("span", rp, "$" + u(Ra(((M = gt.value.get(r.id)) == null ? void 0 : M.total_cost) ?? 0)), 1)
                  ])
                ]))
              ];
            }),
            "cell-status": pe(({ value: r }) => [
              t("span", {
                class: te([
                  "badge",
                  r === "active" ? "badge-success" : "badge-danger"
                ])
              }, u(d(o)("admin.accounts.status." + r)), 3)
            ]),
            "cell-actions": pe(({ row: r }) => [
              t("div", ip, [
                t("button", {
                  onClick: (x) => Is(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  $(Y, {
                    name: "edit",
                    size: "sm"
                  }),
                  t("span", lp, u(d(o)("common.edit")), 1)
                ], 8, sp),
                d(h).isSimpleMode ? E("", !0) : (g(), f("button", {
                  key: 0,
                  "data-testid": "group-duplicate",
                  title: Mt.has(r.id) ? d(o)("admin.groups.duplicating") : d(o)("admin.groups.duplicate"),
                  disabled: Mt.has(r.id),
                  onClick: (x) => Ks(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  $(Y, {
                    name: "copy",
                    size: "sm"
                  }),
                  t("span", dp, u(Mt.has(r.id) ? d(o)("admin.groups.duplicating") : d(o)("admin.groups.duplicate")), 1)
                ], 8, np)),
                !d(h).isSimpleMode && r.platform === "composite" ? (g(), f("button", {
                  key: 1,
                  onClick: (x) => Zs(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-cyan-600 dark:hover:bg-dark-700 dark:hover:text-cyan-400"
                }, [
                  $(Y, {
                    name: "swap",
                    size: "sm"
                  }),
                  t("span", cp, u(d(o)("admin.groups.compositeRoutes.action")), 1)
                ], 8, up)) : E("", !0),
                d(h).isSimpleMode ? E("", !0) : (g(), f("button", {
                  key: 2,
                  onClick: (x) => Bs(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-purple-600 dark:hover:bg-dark-700 dark:hover:text-purple-400"
                }, [
                  $(Y, {
                    name: "dollar",
                    size: "sm"
                  }),
                  t("span", mp, u(d(o)("admin.groups.rateMultipliers")), 1)
                ], 8, pp)),
                d(h).isSimpleMode ? E("", !0) : (g(), f("button", {
                  key: 3,
                  onClick: (x) => Ys(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-zo-alert-600 dark:hover:bg-dark-700 dark:hover:text-zo-alert-400"
                }, [
                  $(Y, {
                    name: "bolt",
                    size: "sm"
                  }),
                  t("span", gp, u(d(o)("admin.groups.rpmOverrides")), 1)
                ], 8, _p)),
                t("button", {
                  onClick: (x) => ol(r),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                }, [
                  $(Y, {
                    name: "trash",
                    size: "sm"
                  }),
                  t("span", fp, u(d(o)("common.delete")), 1)
                ], 8, vp)
              ])
            ]),
            empty: pe(() => [
              $(hl, {
                title: d(o)("admin.groups.noGroupsYet"),
                description: d(o)("admin.groups.createFirstGroup"),
                "action-text": d(o)("admin.groups.createGroup"),
                onAction: kr
              }, null, 8, ["title", "description", "action-text"])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        pagination: pe(() => [
          ze.total > 0 ? (g(), Ne(Yo, {
            key: 0,
            page: ze.page,
            total: ze.total,
            "page-size": ze.page_size,
            "onUpdate:page": Us,
            "onUpdate:pageSize": Vs
          }, null, 8, ["page", "total", "page-size"])) : E("", !0)
        ]),
        _: 1
      }),
      $(Sd, {
        show: io.value || fa.value,
        mode: q.value,
        title: d(o)(q.value === "edit" ? "admin.groups.editGroup" : "admin.groups.createGroup"),
        ready: q.value === "create" || !!je.value,
        submitting: qt.value,
        onClose: Ms,
        onSubmit: Ps
      }, {
        default: pe(() => [
          t("div", null, [
            t("label", hp, u(d(o)("admin.groups.form.name")), 1),
            U(t("input", {
              "onUpdate:modelValue": l[5] || (l[5] = (r) => m.value.name = r),
              type: "text",
              required: "",
              class: "input",
              placeholder: q.value === "create" ? d(o)("admin.groups.enterGroupName") : void 0,
              "data-tour": q.value === "edit" ? "edit-group-form-name" : "group-form-name"
            }, null, 8, bp), [
              [H, m.value.name]
            ])
          ]),
          t("div", null, [
            t("label", yp, u(d(o)("admin.groups.form.description")), 1),
            U(t("textarea", {
              "onUpdate:modelValue": l[6] || (l[6] = (r) => m.value.description = r),
              rows: "3",
              class: "input",
              placeholder: q.value === "create" ? d(o)("admin.groups.optionalDescription") : void 0
            }, null, 8, xp), [
              [H, m.value.description]
            ])
          ]),
          t("div", null, [
            t("label", kp, u(d(o)("admin.groups.form.platform")), 1),
            $(Te, {
              modelValue: m.value.platform,
              "onUpdate:modelValue": l[7] || (l[7] = (r) => m.value.platform = r),
              options: Z.value,
              disabled: q.value === "edit",
              "data-tour": "group-form-platform",
              onChange: Rs
            }, null, 8, ["modelValue", "options", "disabled"]),
            t("p", wp, u(d(o)(q.value === "edit" ? "admin.groups.platformNotEditable" : "admin.groups.platformHint")), 1)
          ]),
          d(h).isSimpleMode ? E("", !0) : (g(), f(fe, { key: 0 }, [
            bo.value.length > 0 ? (g(), f("div", Cp, [
              t("div", Ep, [
                t("label", Sp, u(d(o)("admin.groups.copyAccounts.title")), 1),
                t("div", Mp, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", Pp, [
                    t("div", Rp, [
                      t("p", $p, u(d(o)(q.value === "edit" ? "admin.groups.copyAccounts.tooltipEdit" : "admin.groups.copyAccounts.tooltip")), 1),
                      l[80] || (l[80] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              m.value.copy_accounts_from_group_ids.length > 0 ? (g(), f("div", Dp, [
                (g(!0), f(fe, null, Ce(m.value.copy_accounts_from_group_ids, (r) => {
                  var x;
                  return g(), f("span", {
                    key: r,
                    class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                  }, [
                    le(u(((x = bo.value.find((k) => k.value === r)) == null ? void 0 : x.label) || `#${r}`) + " ", 1),
                    t("button", {
                      type: "button",
                      onClick: (k) => m.value.copy_accounts_from_group_ids = m.value.copy_accounts_from_group_ids.filter(
                        (M) => M !== r
                      ),
                      class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                    }, [
                      $(Y, {
                        name: "x",
                        size: "xs"
                      })
                    ], 8, Tp)
                  ]);
                }), 128))
              ])) : E("", !0),
              t("select", {
                class: "input",
                onChange: l[8] || (l[8] = (r) => {
                  const x = Number(r.target.value);
                  x && !m.value.copy_accounts_from_group_ids.includes(x) && m.value.copy_accounts_from_group_ids.push(x), r.target.value = "";
                })
              }, [
                t("option", Ap, u(d(o)("admin.groups.copyAccounts.selectPlaceholder")), 1),
                (g(!0), f(fe, null, Ce(bo.value, (r) => (g(), f("option", {
                  key: r.value,
                  value: r.value,
                  disabled: m.value.copy_accounts_from_group_ids.includes(r.value)
                }, u(r.label), 9, Op))), 128))
              ], 32),
              t("p", zp, u(d(o)(q.value === "edit" ? "admin.groups.copyAccounts.hintEdit" : "admin.groups.copyAccounts.hint")), 1)
            ])) : E("", !0),
            t("div", null, [
              t("label", Up, u(d(o)("admin.groups.form.rateMultiplier")), 1),
              U(t("input", {
                "onUpdate:modelValue": l[9] || (l[9] = (r) => m.value.rate_multiplier = r),
                type: "number",
                step: "0.001",
                min: "0.001",
                required: "",
                class: "input",
                "data-tour": "group-form-multiplier"
              }, null, 512), [
                [
                  H,
                  m.value.rate_multiplier,
                  void 0,
                  { number: !0 }
                ]
              ]),
              q.value === "create" ? (g(), f("p", Vp, u(d(o)("admin.groups.rateMultiplierHint")), 1)) : E("", !0)
            ]),
            t("div", null, [
              t("label", Fp, u(d(o)("admin.groups.form.rpmLimit")), 1),
              U(t("input", {
                "onUpdate:modelValue": l[10] || (l[10] = (r) => m.value.rpm_limit = r),
                type: "number",
                min: "0",
                step: "1",
                class: "input",
                placeholder: d(o)("admin.groups.form.rpmLimitPlaceholder")
              }, null, 8, Np), [
                [
                  H,
                  m.value.rpm_limit,
                  void 0,
                  { number: !0 }
                ]
              ]),
              t("p", Ip, u(d(o)("admin.groups.form.rpmLimitHint")), 1)
            ]),
            d(La)(m.value.platform) ? (g(), Ne(tu, {
              key: 1,
              ref: xs,
              "id-prefix": "create-group-reasoning",
              platform: m.value.platform,
              "max-effort": m.value.max_reasoning_effort,
              "onUpdate:maxEffort": l[11] || (l[11] = (r) => m.value.max_reasoning_effort = r),
              mappings: m.value.reasoning_effort_mappings,
              "onUpdate:mappings": l[12] || (l[12] = (r) => m.value.reasoning_effort_mappings = r)
            }, null, 8, ["platform", "max-effort", "mappings"])) : E("", !0),
            m.value.subscription_type !== "subscription" ? (g(), f("div", {
              key: 2,
              "data-tour": q.value === "create" ? "group-form-exclusive" : void 0
            }, [
              t("div", jp, [
                t("label", Gp, u(d(o)("admin.groups.form.exclusive")), 1),
                t("div", qp, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", Hp, [
                    t("div", Bp, [
                      t("p", Yp, u(d(o)("admin.groups.exclusiveTooltip.title")), 1),
                      t("p", Kp, u(d(o)("admin.groups.exclusiveTooltip.description")), 1),
                      t("div", Xp, [
                        t("p", Wp, [
                          t("span", Qp, [
                            $(Y, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            le(" " + u(d(o)("admin.groups.exclusiveTooltip.example")), 1)
                          ]),
                          le(" " + u(d(o)("admin.groups.exclusiveTooltip.exampleContent")), 1)
                        ])
                      ]),
                      l[81] || (l[81] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              t("div", Jp, [
                t("button", {
                  type: "button",
                  onClick: l[13] || (l[13] = (r) => m.value.is_exclusive = !m.value.is_exclusive),
                  class: te([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.value.is_exclusive ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.value.is_exclusive ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                t("span", Zp, u(m.value.is_exclusive ? d(o)("admin.groups.exclusive") : d(o)("admin.groups.public")), 1)
              ])
            ], 8, Lp)) : E("", !0),
            q.value === "edit" ? (g(), f("div", em, [
              t("label", tm, u(d(o)("admin.groups.form.status")), 1),
              $(Te, {
                modelValue: m.value.status,
                "onUpdate:modelValue": l[14] || (l[14] = (r) => m.value.status = r),
                options: ge.value
              }, null, 8, ["modelValue", "options"])
            ])) : E("", !0),
            t("div", am, [
              t("div", null, [
                t("label", om, u(d(o)("admin.groups.subscription.type")), 1),
                $(Te, {
                  modelValue: m.value.subscription_type,
                  "onUpdate:modelValue": l[15] || (l[15] = (r) => m.value.subscription_type = r),
                  options: ce.value,
                  disabled: q.value === "edit"
                }, null, 8, ["modelValue", "options", "disabled"]),
                t("p", rm, u(d(o)(q.value === "edit" ? "admin.groups.subscription.typeNotEditable" : "admin.groups.subscription.typeHint")), 1)
              ]),
              m.value.subscription_type === "subscription" ? (g(), f("div", im, [
                t("div", null, [
                  t("label", sm, u(d(o)("admin.groups.subscription.dailyLimit")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[16] || (l[16] = (r) => m.value.daily_limit_usd = r),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.subscription.noLimit")
                  }, null, 8, lm), [
                    [
                      H,
                      m.value.daily_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", nm, u(d(o)("admin.groups.subscription.weeklyLimit")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[17] || (l[17] = (r) => m.value.weekly_limit_usd = r),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.subscription.noLimit")
                  }, null, 8, dm), [
                    [
                      H,
                      m.value.weekly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", um, u(d(o)("admin.groups.subscription.monthlyLimit")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[18] || (l[18] = (r) => m.value.monthly_limit_usd = r),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.subscription.noLimit")
                  }, null, 8, cm), [
                    [
                      H,
                      m.value.monthly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : E("", !0)
            ]),
            t("div", pm, [
              t("div", mm, [
                t("div", null, [
                  t("label", _m, u(d(o)("admin.groups.modelAllowlist.title")), 1),
                  t("p", gm, u(d(o)("admin.groups.modelAllowlist.hint")), 1)
                ]),
                t("button", {
                  type: "button",
                  onClick: l[19] || (l[19] = (r) => Ge.value.enabled = !Ge.value.enabled),
                  class: te([
                    "relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors",
                    Ge.value.enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      Ge.value.enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              Ge.value.enabled ? (g(), f("div", vm, [
                !pr.value && Ge.value.items.length > 0 ? (g(), f("div", fm, [
                  t("span", hm, u(d(o)("admin.groups.modelAllowlist.selectedSummary", {
                    selected: vs.value,
                    total: Ge.value.items.length
                  })), 1),
                  t("div", bm, [
                    t("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20",
                      onClick: l[20] || (l[20] = (r) => d(Wu)(Ge.value))
                    }, u(d(o)("admin.groups.modelAllowlist.selectAll")), 1),
                    t("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700",
                      onClick: l[21] || (l[21] = (r) => d(Qu)(Ge.value))
                    }, u(d(o)("admin.groups.modelAllowlist.invertSelection")), 1)
                  ])
                ])) : E("", !0),
                t("div", ym, [
                  pr.value ? (g(), f("p", xm, u(d(o)("admin.groups.modelAllowlist.loading")), 1)) : Ge.value.items.length === 0 ? (g(), f("p", km, u(d(o)("admin.groups.modelAllowlist.empty")), 1)) : E("", !0),
                  (g(!0), f(fe, null, Ce(Ge.value.items, (r, x) => (g(), f("div", {
                    key: r.id,
                    class: "flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 dark:border-dark-600 dark:bg-dark-800"
                  }, [
                    U(t("input", {
                      "onUpdate:modelValue": (k) => r.selected = k,
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    }, null, 8, wm), [
                      [ot, r.selected]
                    ]),
                    t("span", Cm, [
                      le(u(r.id) + " ", 1),
                      r.id.endsWith("*") ? (g(), f("span", Em, u(d(o)("admin.groups.modelAllowlist.wildcardTag")), 1)) : E("", !0)
                    ]),
                    t("button", {
                      type: "button",
                      disabled: x === 0,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (k) => vr(x, x - 1)
                    }, [
                      $(Y, {
                        name: "arrowUp",
                        size: "sm"
                      })
                    ], 8, Sm),
                    t("button", {
                      type: "button",
                      disabled: x === Ge.value.items.length - 1,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (k) => vr(x, x + 1)
                    }, [
                      $(Y, {
                        name: "arrowDown",
                        size: "sm"
                      })
                    ], 8, Mm)
                  ]))), 128))
                ]),
                t("div", Pm, [
                  t("div", Rm, [
                    U(t("input", {
                      "onUpdate:modelValue": l[22] || (l[22] = (r) => mr.value = r),
                      type: "text",
                      placeholder: d(o)("admin.groups.modelAllowlist.customPlaceholder"),
                      class: "min-w-0 flex-1 rounded border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-dark-500 dark:bg-dark-700 dark:text-gray-200",
                      onKeydown: Tr(Uo(gr, ["prevent"]), ["enter"])
                    }, null, 40, $m), [
                      [H, mr.value]
                    ]),
                    t("button", {
                      type: "button",
                      class: "rounded bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700",
                      onClick: gr
                    }, u(d(o)("admin.groups.modelAllowlist.addCustom")), 1)
                  ]),
                  _r.value ? (g(), f("p", Dm, u(d(o)(_r.value)), 1)) : E("", !0)
                ])
              ])) : E("", !0)
            ]),
            d(oc)(m.value.platform) ? (g(), f("div", Tm, [
              t("label", Am, u(d(o)(d(kt)(m.value.platform, "title"))), 1),
              t("p", Om, u(d(o)(d(kt)(m.value.platform, "description"))), 1),
              t("div", zm, [
                t("label", Um, [
                  U(t("input", {
                    "onUpdate:modelValue": l[23] || (l[23] = (r) => m.value.allow_image_generation = r),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [ot, m.value.allow_image_generation]
                  ]),
                  le(" " + u(d(o)(d(kt)(m.value.platform, "allowImageGeneration"))), 1)
                ]),
                t("label", Vm, [
                  U(t("input", {
                    "onUpdate:modelValue": l[24] || (l[24] = (r) => m.value.image_rate_independent = r),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [ot, m.value.image_rate_independent]
                  ]),
                  le(" " + u(d(o)(d(kt)(m.value.platform, "independentMultiplier"))), 1)
                ])
              ]),
              m.value.image_rate_independent ? (g(), f("div", Fm, [
                t("label", Nm, u(d(o)(d(kt)(m.value.platform, "imageMultiplier"))), 1),
                U(t("input", {
                  "onUpdate:modelValue": l[25] || (l[25] = (r) => m.value.image_rate_multiplier = r),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    H,
                    m.value.image_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : E("", !0),
              t("div", Im, [
                t("div", null, [
                  l[82] || (l[82] = t("label", { class: "input-label" }, "1K ($)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[26] || (l[26] = (r) => m.value.image_price_1k = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ya)(m.value.platform, "image_price_1k")
                  }, null, 8, Lm), [
                    [
                      H,
                      m.value.image_price_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  l[83] || (l[83] = t("label", { class: "input-label" }, "2K ($)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[27] || (l[27] = (r) => m.value.image_price_2k = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ya)(m.value.platform, "image_price_2k")
                  }, null, 8, jm), [
                    [
                      H,
                      m.value.image_price_2k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  l[84] || (l[84] = t("label", { class: "input-label" }, "4K ($)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[28] || (l[28] = (r) => m.value.image_price_4k = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ya)(m.value.platform, "image_price_4k")
                  }, null, 8, Gm), [
                    [
                      H,
                      m.value.image_price_4k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              t("p", qm, u(d(o)(d(kt)(m.value.platform, "modeHint"))), 1),
              t("div", Hm, [
                t("div", Bm, u(d(o)(d(kt)(m.value.platform, "finalPricePreview"))), 1),
                t("div", Ym, [
                  (g(!0), f(fe, null, Ce(fs.value, (r) => (g(), f("div", {
                    key: r.label
                  }, u(r.label) + ": " + u(r.value), 1))), 128))
                ])
              ]),
              m.value.platform === "gemini" && m.value.allow_image_generation ? (g(), f("div", Km, [
                t("label", Xm, [
                  U(t("input", {
                    "onUpdate:modelValue": l[29] || (l[29] = (r) => m.value.allow_batch_image_generation = r),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [ot, m.value.allow_batch_image_generation]
                  ]),
                  le(" " + u(d(o)("admin.groups.imagePricing.allowBatchImageGeneration")), 1)
                ]),
                t("p", Wm, u(d(o)("admin.groups.imagePricing.batchSectionHint")), 1),
                m.value.allow_batch_image_generation ? (g(), f("div", Qm, [
                  t("div", null, [
                    t("label", Jm, u(d(o)("admin.groups.imagePricing.batchDiscountMultiplier")), 1),
                    U(t("input", {
                      "onUpdate:modelValue": l[30] || (l[30] = (r) => m.value.batch_image_discount_multiplier = r),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.5"
                    }, null, 512), [
                      [
                        H,
                        m.value.batch_image_discount_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  t("div", null, [
                    t("label", Zm, u(d(o)("admin.groups.imagePricing.batchHoldMultiplier")), 1),
                    U(t("input", {
                      "onUpdate:modelValue": l[31] || (l[31] = (r) => m.value.batch_image_hold_multiplier = r),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.6"
                    }, null, 512), [
                      [
                        H,
                        m.value.batch_image_hold_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : E("", !0)
              ])) : m.value.platform !== "gemini" ? (g(), f("p", e0, u(d(o)("admin.groups.imagePricing.batchGeminiOnlyHint")), 1)) : E("", !0)
            ])) : E("", !0),
            d(rc)(m.value.platform) ? (g(), f("div", t0, [
              t("label", a0, u(d(o)(d(Vt)("title"))), 1),
              t("p", o0, u(d(o)(d(Vt)("description"))), 1),
              t("div", r0, [
                t("label", i0, [
                  U(t("input", {
                    "onUpdate:modelValue": l[32] || (l[32] = (r) => m.value.video_rate_independent = r),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [ot, m.value.video_rate_independent]
                  ]),
                  le(" " + u(d(o)(d(Vt)("independentMultiplier"))), 1)
                ])
              ]),
              m.value.video_rate_independent ? (g(), f("div", s0, [
                t("label", l0, u(d(o)(d(Vt)("videoMultiplier"))), 1),
                U(t("input", {
                  "onUpdate:modelValue": l[33] || (l[33] = (r) => m.value.video_rate_multiplier = r),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    H,
                    m.value.video_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : E("", !0),
              t("div", n0, [
                t("div", null, [
                  l[85] || (l[85] = t("label", { class: "input-label" }, "480p ($/s)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[34] || (l[34] = (r) => m.value.video_price_480p = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ka)(m.value.platform, "video_price_480p")
                  }, null, 8, d0), [
                    [
                      H,
                      m.value.video_price_480p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  l[86] || (l[86] = t("label", { class: "input-label" }, "720p ($/s)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[35] || (l[35] = (r) => m.value.video_price_720p = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ka)(m.value.platform, "video_price_720p")
                  }, null, 8, u0), [
                    [
                      H,
                      m.value.video_price_720p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  l[87] || (l[87] = t("label", { class: "input-label" }, "1080p ($/s)", -1)),
                  U(t("input", {
                    "onUpdate:modelValue": l[36] || (l[36] = (r) => m.value.video_price_1080p = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: d(Ka)(m.value.platform, "video_price_1080p")
                  }, null, 8, c0), [
                    [
                      H,
                      m.value.video_price_1080p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              t("div", p0, [
                t("p", m0, u(d(o)("admin.groups.videoPricing.modelOverridesTitle")), 1),
                t("p", _0, u(d(o)("admin.groups.videoPricing.modelOverridesDescription")), 1),
                t("div", g0, [
                  (g(!0), f(fe, null, Ce(d(nc)(m.value.video_model_prices), (r) => (g(), f("div", {
                    key: r.key,
                    class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,7rem))] sm:items-end"
                  }, [
                    t("div", v0, u(r.label), 1),
                    (g(!0), f(fe, null, Ce(d(Ai), (x) => (g(), f("label", {
                      key: x.key,
                      class: "block"
                    }, [
                      t("span", f0, u(x.label) + " ($/s) ", 1),
                      U(t("input", {
                        "onUpdate:modelValue": (k) => m.value.video_model_prices[r.key][x.key] = k,
                        type: "number",
                        step: "0.001",
                        min: "0",
                        class: "input",
                        "data-testid": `create-grok-video-price-${r.key}-${x.key}`
                      }, null, 8, h0), [
                        [
                          H,
                          m.value.video_model_prices[r.key][x.key],
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]))), 128))
                  ]))), 128))
                ])
              ]),
              t("p", b0, u(d(o)(d(Vt)("modeHint"))), 1),
              t("div", y0, [
                t("div", x0, u(d(o)(d(Vt)("finalPricePreview"))), 1),
                t("div", k0, [
                  (g(!0), f(fe, null, Ce(hs.value, (r) => (g(), f("div", {
                    key: r.label
                  }, u(r.label) + ": " + u(r.value), 1))), 128))
                ])
              ])
            ])) : E("", !0),
            m.value.subscription_type === "subscription" ? (g(), f("div", w0, [
              t("div", C0, [
                t("label", E0, [
                  U(t("input", {
                    "onUpdate:modelValue": l[37] || (l[37] = (r) => m.value.peak_rate_enabled = r),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [ot, m.value.peak_rate_enabled]
                  ]),
                  t("span", null, u(d(o)("admin.groups.peakRate.enable")), 1)
                ])
              ]),
              m.value.peak_rate_enabled ? (g(), f("div", S0, [
                t("div", null, [
                  t("label", M0, u(d(o)("admin.groups.peakRate.peakStart")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[38] || (l[38] = (r) => m.value.peak_start = r),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [H, m.value.peak_start]
                  ])
                ]),
                t("div", null, [
                  t("label", P0, u(d(o)("admin.groups.peakRate.peakEnd")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[39] || (l[39] = (r) => m.value.peak_end = r),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [H, m.value.peak_end]
                  ])
                ]),
                t("div", null, [
                  t("label", R0, u(d(o)("admin.groups.peakRate.peakMultiplier")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[40] || (l[40] = (r) => m.value.peak_rate_multiplier = r),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: "1",
                    title: d(o)("admin.groups.peakRate.multiplierHint")
                  }, null, 8, $0), [
                    [
                      H,
                      m.value.peak_rate_multiplier,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : E("", !0)
            ])) : E("", !0),
            d(Nt)(m.value.platform) ? (g(), f("div", D0, [
              t("label", T0, [
                U(t("input", {
                  "onUpdate:modelValue": l[41] || (l[41] = (r) => m.value.profit_control_enabled = r),
                  type: "checkbox",
                  class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }, null, 512), [
                  [ot, m.value.profit_control_enabled]
                ]),
                t("span", null, u(d(o)("admin.groups.profitControl.enable")), 1)
              ]),
              t("p", A0, u(m.value.profit_control_enabled ? d(o)("admin.groups.profitControl.enabledHint") : d(o)("admin.groups.profitControl.disabledHint")), 1),
              m.value.profit_control_enabled ? (g(), f("div", O0, [
                t("div", null, [
                  t("label", z0, u(d(o)("admin.groups.profitControl.minMargin")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[42] || (l[42] = (r) => m.value.profit_min_margin_percent = r),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: d(o)("admin.groups.profitControl.minMarginHint")
                  }, null, 8, U0), [
                    [
                      H,
                      m.value.profit_min_margin_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", V0, u(d(o)("admin.groups.profitControl.safetyBuffer")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[43] || (l[43] = (r) => m.value.profit_safety_buffer_percent = r),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: d(o)("admin.groups.profitControl.safetyBufferHint")
                  }, null, 8, F0), [
                    [
                      H,
                      m.value.profit_safety_buffer_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : E("", !0)
            ])) : E("", !0),
            m.value.platform === "antigravity" ? (g(), f("div", N0, [
              t("div", I0, [
                t("label", L0, u(d(o)("admin.groups.supportedScopes.title")), 1),
                t("div", j0, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", G0, [
                    t("div", q0, [
                      t("p", H0, u(d(o)("admin.groups.supportedScopes.tooltip")), 1),
                      l[88] || (l[88] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              t("div", B0, [
                t("label", Y0, [
                  t("input", {
                    type: "checkbox",
                    checked: m.value.supported_model_scopes.includes("claude"),
                    onChange: l[44] || (l[44] = (r) => yo("claude")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, K0),
                  t("span", X0, u(d(o)("admin.groups.supportedScopes.claude")), 1)
                ]),
                t("label", W0, [
                  t("input", {
                    type: "checkbox",
                    checked: m.value.supported_model_scopes.includes("gemini_text"),
                    onChange: l[45] || (l[45] = (r) => yo("gemini_text")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, Q0),
                  t("span", J0, u(d(o)("admin.groups.supportedScopes.geminiText")), 1)
                ]),
                t("label", Z0, [
                  t("input", {
                    type: "checkbox",
                    checked: m.value.supported_model_scopes.includes("gemini_image"),
                    onChange: l[46] || (l[46] = (r) => yo("gemini_image")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, e_),
                  t("span", t_, u(d(o)("admin.groups.supportedScopes.geminiImage")), 1)
                ])
              ]),
              t("p", a_, u(d(o)("admin.groups.supportedScopes.hint")), 1)
            ])) : E("", !0),
            m.value.platform === "antigravity" ? (g(), f("div", o_, [
              t("div", r_, [
                t("label", i_, u(d(o)("admin.groups.mcpXml.title")), 1),
                t("div", s_, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", l_, [
                    t("div", n_, [
                      t("p", d_, u(d(o)("admin.groups.mcpXml.tooltip")), 1),
                      l[89] || (l[89] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              t("div", u_, [
                t("button", {
                  type: "button",
                  onClick: l[47] || (l[47] = (r) => m.value.mcp_xml_inject = !m.value.mcp_xml_inject),
                  class: te([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.value.mcp_xml_inject ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.value.mcp_xml_inject ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                t("span", c_, u(m.value.mcp_xml_inject ? d(o)("admin.groups.mcpXml.enabled") : d(o)("admin.groups.mcpXml.disabled")), 1)
              ])
            ])) : E("", !0),
            m.value.platform === "anthropic" ? (g(), f("div", p_, [
              t("div", m_, [
                t("label", __, u(d(o)("admin.groups.claudeCode.title")), 1),
                t("div", g_, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", v_, [
                    t("div", f_, [
                      t("p", h_, u(d(o)("admin.groups.claudeCode.tooltip")), 1),
                      l[90] || (l[90] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              t("div", b_, [
                t("button", {
                  type: "button",
                  onClick: l[48] || (l[48] = (r) => m.value.claude_code_only = !m.value.claude_code_only),
                  class: te([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.value.claude_code_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.value.claude_code_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                t("span", y_, u(m.value.claude_code_only ? d(o)("admin.groups.claudeCode.enabled") : d(o)("admin.groups.claudeCode.disabled")), 1)
              ]),
              m.value.claude_code_only ? (g(), f("div", x_, [
                t("label", k_, u(d(o)("admin.groups.claudeCode.fallbackGroup")), 1),
                $(Te, {
                  modelValue: m.value.fallback_group_id,
                  "onUpdate:modelValue": l[49] || (l[49] = (r) => m.value.fallback_group_id = r),
                  options: _s.value,
                  placeholder: d(o)("admin.groups.claudeCode.noFallback")
                }, null, 8, ["modelValue", "options", "placeholder"]),
                t("p", w_, u(d(o)("admin.groups.claudeCode.fallbackHint")), 1)
              ])) : E("", !0)
            ])) : E("", !0),
            m.value.platform === "openai" ? (g(), f("div", C_, [
              t("h4", E_, u(d(o)("admin.groups.webSearchPricing.title")), 1),
              t("div", null, [
                t("label", S_, u(d(o)("admin.groups.webSearchPricing.pricePerCall")), 1),
                U(t("input", {
                  "onUpdate:modelValue": l[50] || (l[50] = (r) => m.value.web_search_price_per_call = r),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  placeholder: "0.01",
                  class: "input"
                }, null, 512), [
                  [
                    H,
                    m.value.web_search_price_per_call,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                t("p", M_, u(d(o)("admin.groups.webSearchPricing.pricePerCallHint")), 1),
                t("div", P_, u(d(o)("admin.groups.webSearchPricing.finalPricePreview", {
                  price: bs.value
                })), 1)
              ])
            ])) : E("", !0),
            t("div", R_, [
              t("div", $_, [
                t("div", null, [
                  t("h4", D_, u(d(o)("admin.groups.modelPricing.title")), 1),
                  t("p", T_, u(d(o)("admin.groups.modelPricing.description")), 1)
                ]),
                t("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: l[51] || (l[51] = (r) => a(m.value.model_pricing))
                }, [
                  $(Y, {
                    name: "plus",
                    size: "sm",
                    class: "mr-1"
                  }),
                  le(u(d(o)("admin.groups.modelPricing.add")), 1)
                ])
              ]),
              t("label", A_, [
                U(t("input", {
                  "onUpdate:modelValue": l[52] || (l[52] = (r) => m.value.long_context_pricing_enabled = r),
                  type: "checkbox",
                  class: "mt-0.5"
                }, null, 512), [
                  [ot, m.value.long_context_pricing_enabled]
                ]),
                t("span", null, [
                  t("span", O_, u(d(o)("admin.groups.modelPricing.longContext")), 1),
                  t("span", z_, u(d(o)("admin.groups.modelPricing.longContextHint")), 1)
                ])
              ]),
              t("div", U_, [
                (g(!0), f(fe, null, Ce(m.value.model_pricing, (r, x) => (g(), Ne(yl, {
                  key: x,
                  entry: r,
                  platform: m.value.platform,
                  "hide-token-intervals": "",
                  onUpdate: (k) => m.value.model_pricing[x] = k,
                  onRemove: (k) => m.value.model_pricing.splice(x, 1)
                }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
              ])
            ]),
            m.value.platform === "grok" ? (g(), f("div", V_, [
              t("h4", F_, u(d(o)("admin.groups.explicitPricing.title")), 1),
              t("p", N_, u(d(o)("admin.groups.explicitPricing.description")), 1),
              t("div", I_, [
                t("div", null, [
                  t("label", L_, u(d(o)("admin.groups.explicitPricing.searchPricePer1k")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[53] || (l[53] = (r) => m.value.search_price_per_1k = r),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.explicitPricing.pricePlaceholder"),
                    "data-testid": "create-search-price"
                  }, null, 8, j_), [
                    [
                      H,
                      m.value.search_price_per_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", G_, u(d(o)("admin.groups.voicePricing.audioRealtimePerMin")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[54] || (l[54] = (r) => m.value.audio_realtime_price_per_min = r),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-realtime-price"
                  }, null, 8, q_), [
                    [
                      H,
                      m.value.audio_realtime_price_per_min,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", H_, u(d(o)("admin.groups.voicePricing.audioTtsPerMillionChars")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[55] || (l[55] = (r) => m.value.audio_tts_price_per_million_chars = r),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-tts-price"
                  }, null, 8, B_), [
                    [
                      H,
                      m.value.audio_tts_price_per_million_chars,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                t("div", null, [
                  t("label", Y_, u(d(o)("admin.groups.voicePricing.audioSttPerHour")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[56] || (l[56] = (r) => m.value.audio_stt_price_per_hour = r),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: d(o)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-stt-price"
                  }, null, 8, K_), [
                    [
                      H,
                      m.value.audio_stt_price_per_hour,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])
            ])) : E("", !0),
            m.value.platform === "openai" ? (g(), f("div", X_, [
              t("h4", W_, u(d(o)("admin.groups.openaiLive.title")), 1),
              t("div", Q_, [
                t("label", J_, u(d(o)("admin.groups.openaiLive.allow")), 1),
                t("button", {
                  type: "button",
                  onClick: l[57] || (l[57] = (r) => Ds("create")),
                  class: te([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.value.allow_live ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", m.value.allow_live ? "translate-x-6" : "translate-x-1"])
                  }, null, 2)
                ], 2)
              ]),
              t("p", Z_, u(d(o)("admin.groups.openaiLive.hint")), 1)
            ])) : E("", !0),
            m.value.platform === "openai" ? (g(), f("div", eg, [
              t("h4", tg, u(d(o)("admin.groups.openaiMessages.title")), 1),
              t("div", ag, [
                t("label", og, u(d(o)("admin.groups.openaiMessages.allowDispatch")), 1),
                t("button", {
                  type: "button",
                  onClick: l[58] || (l[58] = (r) => m.value.allow_messages_dispatch = !m.value.allow_messages_dispatch),
                  class: te([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.value.allow_messages_dispatch ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.value.allow_messages_dispatch ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              t("p", rg, u(d(o)("admin.groups.openaiMessages.allowDispatchHint")), 1),
              m.value.allow_messages_dispatch ? (g(), f("div", ig, [
                t("div", sg, [
                  t("div", lg, [
                    t("div", ng, [
                      l[91] || (l[91] = t("div", { class: "h-2 w-2 rounded-full bg-blue-500" }, null, -1)),
                      t("label", dg, u(d(o)("admin.groups.openaiMessages.familyMappingTitle")), 1)
                    ]),
                    t("p", ug, u(d(o)("admin.groups.openaiMessages.familyMappingHint")), 1)
                  ]),
                  t("div", cg, [
                    t("div", pg, [
                      t("div", null, [
                        t("label", mg, u(d(o)("admin.groups.openaiMessages.opusModel")), 1),
                        U(t("input", {
                          "onUpdate:modelValue": l[59] || (l[59] = (r) => m.value.opus_mapped_model = r),
                          type: "text",
                          placeholder: d(o)("admin.groups.openaiMessages.opusModelPlaceholder"),
                          class: "input"
                        }, null, 8, _g), [
                          [H, m.value.opus_mapped_model]
                        ])
                      ]),
                      t("div", null, [
                        t("label", gg, u(d(o)("admin.groups.openaiMessages.sonnetModel")), 1),
                        U(t("input", {
                          "onUpdate:modelValue": l[60] || (l[60] = (r) => m.value.sonnet_mapped_model = r),
                          type: "text",
                          placeholder: d(o)("admin.groups.openaiMessages.sonnetModelPlaceholder"),
                          class: "input"
                        }, null, 8, vg), [
                          [H, m.value.sonnet_mapped_model]
                        ])
                      ]),
                      t("div", null, [
                        t("label", fg, u(d(o)("admin.groups.openaiMessages.haikuModel")), 1),
                        U(t("input", {
                          "onUpdate:modelValue": l[61] || (l[61] = (r) => m.value.haiku_mapped_model = r),
                          type: "text",
                          placeholder: d(o)("admin.groups.openaiMessages.haikuModelPlaceholder"),
                          class: "input"
                        }, null, 8, hg), [
                          [H, m.value.haiku_mapped_model]
                        ])
                      ])
                    ])
                  ])
                ]),
                t("div", bg, [
                  t("div", yg, [
                    t("div", xg, [
                      t("div", null, [
                        t("div", kg, [
                          l[92] || (l[92] = t("div", { class: "h-2 w-2 rounded-full bg-primary-500" }, null, -1)),
                          t("label", wg, u(d(o)("admin.groups.openaiMessages.exactMappingTitle")), 1)
                        ]),
                        t("p", Cg, u(d(o)("admin.groups.openaiMessages.exactMappingHint")), 1)
                      ])
                    ])
                  ]),
                  t("div", Eg, [
                    m.value.exact_model_mappings.length === 0 ? (g(), f("div", Sg, [
                      t("span", null, u(d(o)("admin.groups.openaiMessages.noExactMappings")), 1),
                      t("button", {
                        type: "button",
                        onClick: fr,
                        class: "flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, [
                        $(Y, {
                          name: "plus",
                          size: "sm"
                        }),
                        le(" " + u(d(o)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ])) : (g(), f("div", Mg, [
                      (g(!0), f(fe, null, Ce(m.value.exact_model_mappings, (r) => (g(), f("div", {
                        key: ws(r),
                        class: "group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-dark-600 dark:bg-dark-700 dark:hover:border-primary-700"
                      }, [
                        t("div", Pg, [
                          t("div", Rg, [
                            t("div", null, [
                              t("label", $g, u(d(o)("admin.groups.openaiMessages.claudeModel")), 1),
                              U(t("input", {
                                "onUpdate:modelValue": (x) => r.claude_model = x,
                                type: "text",
                                placeholder: d(o)(
                                  "admin.groups.openaiMessages.claudeModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Dg), [
                                [H, r.claude_model]
                              ])
                            ]),
                            t("div", Tg, [
                              $(Y, {
                                name: "arrowRight",
                                size: "sm",
                                class: "transition-transform group-hover:translate-x-1"
                              })
                            ]),
                            t("div", null, [
                              t("label", Ag, u(d(o)("admin.groups.openaiMessages.targetModel")), 1),
                              U(t("input", {
                                "onUpdate:modelValue": (x) => r.target_model = x,
                                type: "text",
                                placeholder: d(o)(
                                  "admin.groups.openaiMessages.targetModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Og), [
                                [H, r.target_model]
                              ])
                            ])
                          ]),
                          t("button", {
                            type: "button",
                            onClick: (x) => ks(r),
                            class: "mt-6 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            title: d(o)("admin.groups.openaiMessages.removeExactMapping")
                          }, [
                            $(Y, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, zg)
                        ])
                      ]))), 128)),
                      t("button", {
                        type: "button",
                        onClick: fr,
                        class: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-3 text-sm font-medium text-gray-500 transition-all hover:border-primary-300 hover:bg-primary-50/50 hover:text-primary-600 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-primary-800 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
                      }, [
                        $(Y, {
                          name: "plus",
                          size: "sm"
                        }),
                        le(" " + u(d(o)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ]))
                  ])
                ])
              ])) : E("", !0)
            ])) : E("", !0),
            ["openai", "antigravity", "anthropic", "gemini"].includes(
              m.value.platform
            ) ? (g(), f("div", Ug, [
              t("h4", Vg, u(d(o)("admin.groups.accountFilters.title")), 1),
              t("div", Fg, [
                t("div", null, [
                  t("label", Ng, u(d(o)("admin.groups.accountFilters.oauthOnly")), 1),
                  t("p", Ig, u(m.value.require_oauth_only ? d(o)("admin.groups.accountFilters.oauthOnlyEnabled") : d(o)("admin.groups.accountFilters.disabled")), 1)
                ]),
                t("button", {
                  type: "button",
                  onClick: l[62] || (l[62] = (r) => m.value.require_oauth_only = !m.value.require_oauth_only),
                  class: te([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.value.require_oauth_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.value.require_oauth_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              t("div", Lg, [
                t("div", null, [
                  t("label", jg, u(d(o)("admin.groups.accountFilters.privacySetOnly")), 1),
                  t("p", Gg, u(m.value.require_privacy_set ? d(o)("admin.groups.accountFilters.privacySetOnlyEnabled") : d(o)("admin.groups.accountFilters.disabled")), 1)
                ]),
                t("button", {
                  type: "button",
                  onClick: l[63] || (l[63] = (r) => m.value.require_privacy_set = !m.value.require_privacy_set),
                  class: te([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.value.require_privacy_set ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.value.require_privacy_set ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ])
            ])) : E("", !0),
            ["anthropic", "antigravity"].includes(m.value.platform) && m.value.subscription_type !== "subscription" ? (g(), f("div", qg, [
              t("label", Hg, u(d(o)("admin.groups.invalidRequestFallback.title")), 1),
              $(Te, {
                modelValue: m.value.fallback_group_id_on_invalid_request,
                "onUpdate:modelValue": l[64] || (l[64] = (r) => m.value.fallback_group_id_on_invalid_request = r),
                options: gs.value,
                placeholder: d(o)("admin.groups.invalidRequestFallback.noFallback")
              }, null, 8, ["modelValue", "options", "placeholder"]),
              t("p", Bg, u(d(o)("admin.groups.invalidRequestFallback.hint")), 1)
            ])) : E("", !0),
            m.value.platform === "anthropic" ? (g(), f("div", Yg, [
              t("div", Kg, [
                t("label", Xg, u(d(o)("admin.groups.modelRouting.title")), 1),
                t("div", Wg, [
                  $(Y, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  t("div", Qg, [
                    t("div", Jg, [
                      t("p", Zg, u(d(o)("admin.groups.modelRouting.tooltip")), 1),
                      l[93] || (l[93] = t("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              t("div", ev, [
                t("button", {
                  type: "button",
                  onClick: l[65] || (l[65] = (r) => m.value.model_routing_enabled = !m.value.model_routing_enabled),
                  class: te([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.value.model_routing_enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  t("span", {
                    class: te([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.value.model_routing_enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                t("span", tv, u(m.value.model_routing_enabled ? d(o)("admin.groups.modelRouting.enabled") : d(o)("admin.groups.modelRouting.disabled")), 1)
              ]),
              m.value.model_routing_enabled ? (g(), f("p", ov, u(d(o)("admin.groups.modelRouting.noRulesHint")), 1)) : (g(), f("p", av, u(d(o)("admin.groups.modelRouting.disabledHint")), 1)),
              m.value.model_routing_enabled ? (g(), f("div", rv, [
                (g(!0), f(fe, null, Ce(ys.value, (r) => {
                  var x;
                  return g(), f("div", {
                    key: Cs(r),
                    class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600"
                  }, [
                    t("div", iv, [
                      t("div", sv, [
                        t("div", null, [
                          t("label", lv, u(d(o)("admin.groups.modelRouting.modelPattern")), 1),
                          U(t("input", {
                            "onUpdate:modelValue": (k) => r.pattern = k,
                            type: "text",
                            class: "input text-sm",
                            placeholder: d(o)("admin.groups.modelRouting.modelPatternPlaceholder")
                          }, null, 8, nv), [
                            [H, r.pattern]
                          ])
                        ]),
                        t("div", null, [
                          t("label", dv, u(d(o)("admin.groups.modelRouting.accounts")), 1),
                          r.accounts.length > 0 ? (g(), f("div", uv, [
                            (g(!0), f(fe, null, Ce(r.accounts, (k) => (g(), f("span", {
                              key: k.id,
                              class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                            }, [
                              le(u(k.name) + " ", 1),
                              t("button", {
                                type: "button",
                                onClick: (M) => Ki(r, k.id, q.value === "edit"),
                                class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                              }, [
                                $(Y, {
                                  name: "x",
                                  size: "xs"
                                })
                              ], 8, cv)
                            ]))), 128))
                          ])) : E("", !0),
                          t("div", pv, [
                            U(t("input", {
                              "onUpdate:modelValue": (k) => $t.value[Jt(r)] = k,
                              type: "text",
                              class: "input text-sm",
                              placeholder: d(o)(
                                "admin.groups.modelRouting.searchAccountPlaceholder"
                              ),
                              onInput: (k) => Bi(r, q.value === "edit"),
                              onFocus: (k) => Qi(r, q.value === "edit")
                            }, null, 40, mv), [
                              [
                                H,
                                $t.value[Jt(r)]
                              ]
                            ]),
                            bt.value[Jt(r)] && ((x = ht.value[Jt(r)]) == null ? void 0 : x.length) > 0 ? (g(), f("div", _v, [
                              (g(!0), f(fe, null, Ce(ht.value[Jt(r)], (k) => (g(), f("button", {
                                key: k.id,
                                type: "button",
                                onClick: (M) => Yi(r, k, q.value === "edit"),
                                class: te(["w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700", {
                                  "opacity-50": r.accounts.some(
                                    (M) => M.id === k.id
                                  )
                                }]),
                                disabled: r.accounts.some((M) => M.id === k.id)
                              }, [
                                t("span", null, u(k.name), 1),
                                t("span", vv, "#" + u(k.id), 1)
                              ], 10, gv))), 128))
                            ])) : E("", !0)
                          ]),
                          t("p", fv, u(d(o)("admin.groups.modelRouting.accountsHint")), 1)
                        ])
                      ]),
                      t("button", {
                        type: "button",
                        onClick: (k) => Ss(r),
                        class: "mt-5 p-1.5 text-gray-400 hover:text-red-500 transition-colors",
                        title: d(o)("admin.groups.modelRouting.removeRule")
                      }, [
                        $(Y, {
                          name: "trash",
                          size: "sm"
                        })
                      ], 8, hv)
                    ])
                  ]);
                }), 128))
              ])) : E("", !0),
              m.value.model_routing_enabled ? (g(), f("button", {
                key: 3,
                type: "button",
                onClick: Es,
                class: "mt-3 flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              }, [
                $(Y, {
                  name: "plus",
                  size: "sm"
                }),
                le(" " + u(d(o)("admin.groups.modelRouting.addRule")), 1)
              ])) : E("", !0)
            ])) : E("", !0)
          ], 64))
        ]),
        _: 1
      }, 8, ["show", "mode", "title", "ready", "submitting"]),
      $(Ar, {
        show: ha.value,
        title: d(o)("admin.groups.deleteGroup"),
        message: $s.value,
        "confirm-text": d(o)("common.delete"),
        "cancel-text": d(o)("common.cancel"),
        danger: !0,
        onConfirm: rl,
        onCancel: l[66] || (l[66] = (r) => ha.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      $(Ar, {
        show: zi.value,
        title: d(o)("admin.groups.openaiLive.unsupportedTitle"),
        message: d(o)("admin.groups.openaiLive.unsupportedMessage"),
        "confirm-text": d(o)("admin.groups.openaiLive.enableAnyway"),
        "cancel-text": d(o)("common.cancel"),
        danger: !0,
        onConfirm: Ts,
        onCancel: As
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      $(ca, {
        show: so.value,
        title: d(o)("admin.groups.sortOrder"),
        width: "normal",
        onClose: xo
      }, {
        footer: pe(() => [
          t("div", Sv, [
            t("button", {
              onClick: xo,
              type: "button",
              class: "btn btn-secondary"
            }, u(d(o)("common.cancel")), 1),
            t("button", {
              onClick: sl,
              disabled: Ht.value,
              class: "btn btn-primary"
            }, [
              Ht.value ? (g(), f("svg", Pv, [...l[94] || (l[94] = [
                t("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                t("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : E("", !0),
              le(" " + u(Ht.value ? d(o)("common.saving") : d(o)("common.save")), 1)
            ], 8, Mv)
          ])
        ]),
        default: pe(() => [
          t("div", bv, [
            t("p", yv, u(d(o)("admin.groups.sortOrderHint")), 1),
            $(d(Yu), {
              modelValue: Pt.value,
              "onUpdate:modelValue": l[67] || (l[67] = (r) => Pt.value = r),
              animation: 200,
              class: "space-y-2"
            }, {
              default: pe(() => [
                (g(!0), f(fe, null, Ce(Pt.value, (r) => (g(), f("div", {
                  key: r.id,
                  class: "flex cursor-grab items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md active:cursor-grabbing dark:border-dark-600 dark:bg-dark-700"
                }, [
                  t("div", xv, [
                    $(Y, {
                      name: "menu",
                      size: "md"
                    })
                  ]),
                  t("div", kv, [
                    t("div", wv, u(r.name), 1),
                    t("div", Cv, [
                      t("span", {
                        class: te([
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                          r.platform === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : r.platform === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : r.platform === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : r.platform === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : r.platform === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : r.platform === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : r.platform === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : r.platform === "minimax" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        ])
                      }, u(d(o)("admin.groups.platforms." + r.platform)), 3)
                    ])
                  ]),
                  t("div", Ev, "#" + u(r.id), 1)
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      $(ca, {
        show: uo.value,
        title: Ue.value ? d(o)("admin.groups.compositeRoutes.titleWithGroup", {
          name: Ue.value.name
        }) : d(o)("admin.groups.compositeRoutes.title"),
        width: "wide",
        onClose: Pr
      }, {
        footer: pe(() => [
          t("div", Of, [
            t("button", {
              type: "button",
              class: "btn btn-secondary",
              onClick: Pr
            }, u(d(o)("common.close")), 1)
          ])
        ]),
        default: pe(() => [
          t("div", Rv, [
            t("section", $v, [
              t("div", Dv, [
                t("h3", Tv, u(d(o)("admin.groups.compositeRoutes.routes")), 1),
                t("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: Bt.value,
                  onClick: Da
                }, [
                  $(Y, {
                    name: "refresh",
                    size: "sm",
                    class: te(Bt.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, Av)
              ]),
              t("div", Ov, [
                Bt.value ? (g(), f("div", zv, u(d(o)("common.loading")), 1)) : xa.value.length === 0 ? (g(), f("div", Uv, u(d(o)("admin.groups.compositeRoutes.empty")), 1)) : (g(), f("div", Vv, [
                  t("table", Fv, [
                    t("thead", Nv, [
                      t("tr", null, [
                        t("th", Iv, u(d(o)("admin.groups.compositeRoutes.publicModel")), 1),
                        t("th", Lv, u(d(o)("admin.groups.compositeRoutes.target")), 1),
                        t("th", jv, u(d(o)("admin.groups.compositeRoutes.scope")), 1),
                        t("th", Gv, u(d(o)("admin.groups.columns.actions")), 1)
                      ])
                    ]),
                    t("tbody", qv, [
                      (g(!0), f(fe, null, Ce(xa.value, (r) => (g(), f("tr", {
                        key: r.id,
                        class: te(!r.enabled && "opacity-60")
                      }, [
                        t("td", Hv, [
                          t("div", Bv, u(r.public_model), 1),
                          t("div", Yv, [
                            t("span", Kv, u(Xs(r.match_type)), 1),
                            r.enabled ? E("", !0) : (g(), f("span", Xv, u(d(o)("admin.accounts.status.inactive")), 1))
                          ])
                        ]),
                        t("td", Wv, [
                          t("div", Qv, [
                            $(Xa, {
                              platform: r.target_platform,
                              size: "xs"
                            }, null, 8, ["platform"]),
                            t("span", null, u(Mr(r.target_platform)), 1)
                          ]),
                          t("div", Jv, u(r.upstream_model || r.public_model), 1)
                        ]),
                        t("td", Zv, [
                          t("div", ef, u(Ws(r.endpoint)), 1),
                          t("div", tf, u(d(o)("admin.groups.compositeRoutes.priority")) + ": " + u(r.priority), 1)
                        ]),
                        t("td", af, [
                          t("div", of, [
                            t("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400",
                              title: d(o)("common.edit"),
                              onClick: (x) => el(r)
                            }, [
                              $(Y, {
                                name: "edit",
                                size: "sm"
                              })
                            ], 8, rf),
                            t("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              title: d(o)("common.delete"),
                              onClick: (x) => al(r)
                            }, [
                              $(Y, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, sf)
                          ])
                        ])
                      ], 2))), 128))
                    ])
                  ])
                ]))
              ])
            ]),
            t("section", lf, [
              t("form", {
                class: "space-y-3",
                onSubmit: Uo(tl, ["prevent"])
              }, [
                t("div", nf, [
                  t("h3", df, u(dt.value ? d(o)("admin.groups.compositeRoutes.editRoute") : d(o)("admin.groups.compositeRoutes.addRoute")), 1),
                  dt.value ? (g(), f("button", {
                    key: 0,
                    type: "button",
                    class: "text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                    onClick: ea
                  }, u(d(o)("common.cancel")), 1)) : E("", !0)
                ]),
                t("div", null, [
                  t("label", uf, u(d(o)("admin.groups.compositeRoutes.publicModel")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[68] || (l[68] = (r) => W.public_model = r),
                    type: "text",
                    class: "input",
                    required: "",
                    placeholder: "openrouter/gpt-5"
                  }, null, 512), [
                    [
                      H,
                      W.public_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                t("div", cf, [
                  t("div", null, [
                    t("label", pf, u(d(o)("admin.groups.compositeRoutes.matchType")), 1),
                    $(Te, {
                      modelValue: W.match_type,
                      "onUpdate:modelValue": l[69] || (l[69] = (r) => W.match_type = r),
                      options: se.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  t("div", null, [
                    t("label", mf, u(d(o)("admin.groups.compositeRoutes.endpoint")), 1),
                    $(Te, {
                      modelValue: W.endpoint,
                      "onUpdate:modelValue": l[70] || (l[70] = (r) => W.endpoint = r),
                      options: ee.value
                    }, null, 8, ["modelValue", "options"])
                  ])
                ]),
                t("div", _f, [
                  t("div", null, [
                    t("label", gf, u(d(o)("admin.groups.compositeRoutes.targetPlatform")), 1),
                    $(Te, {
                      modelValue: W.target_platform,
                      "onUpdate:modelValue": l[71] || (l[71] = (r) => W.target_platform = r),
                      options: xe.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  t("div", null, [
                    t("label", vf, u(d(o)("admin.groups.compositeRoutes.priority")), 1),
                    U(t("input", {
                      "onUpdate:modelValue": l[72] || (l[72] = (r) => W.priority = r),
                      type: "number",
                      min: "1",
                      step: "1",
                      class: "input"
                    }, null, 512), [
                      [
                        H,
                        W.priority,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                t("div", null, [
                  t("label", ff, u(d(o)("admin.groups.compositeRoutes.upstreamModel")), 1),
                  U(t("input", {
                    "onUpdate:modelValue": l[73] || (l[73] = (r) => W.upstream_model = r),
                    type: "text",
                    class: "input",
                    placeholder: "gpt-5"
                  }, null, 512), [
                    [
                      H,
                      W.upstream_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  t("p", hf, u(d(o)("admin.groups.compositeRoutes.upstreamModelHint")), 1)
                ]),
                t("div", null, [
                  t("label", bf, u(d(o)("admin.groups.compositeRoutes.notes")), 1),
                  U(t("textarea", {
                    "onUpdate:modelValue": l[74] || (l[74] = (r) => W.notes = r),
                    rows: "2",
                    class: "input"
                  }, null, 512), [
                    [
                      H,
                      W.notes,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                t("div", yf, [
                  t("label", xf, [
                    U(t("input", {
                      "onUpdate:modelValue": l[75] || (l[75] = (r) => W.enabled = r),
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                    }, null, 512), [
                      [ot, W.enabled]
                    ]),
                    le(" " + u(d(o)("admin.groups.compositeRoutes.enabled")), 1)
                  ]),
                  t("button", {
                    type: "submit",
                    class: "btn btn-primary",
                    disabled: ka.value
                  }, [
                    ka.value ? E("", !0) : (g(), Ne(Y, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "mr-2"
                    })),
                    le(" " + u(dt.value ? d(o)("common.update") : d(o)("common.create")), 1)
                  ], 8, kf)
                ])
              ], 32),
              t("div", wf, [
                t("h3", Cf, u(d(o)("admin.groups.compositeRoutes.preview")), 1),
                t("div", Ef, [
                  U(t("input", {
                    "onUpdate:modelValue": l[76] || (l[76] = (r) => Rt.value = r),
                    type: "text",
                    class: "input",
                    placeholder: "openrouter/gpt-5",
                    onKeyup: Tr(Rr, ["enter"])
                  }, null, 544), [
                    [
                      H,
                      Rt.value,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  t("div", Sf, [
                    $(Te, {
                      modelValue: wa.value,
                      "onUpdate:modelValue": l[77] || (l[77] = (r) => wa.value = r),
                      options: ee.value,
                      class: "min-w-0 flex-1"
                    }, null, 8, ["modelValue", "options"]),
                    t("button", {
                      type: "button",
                      class: "btn btn-secondary",
                      disabled: co.value || !Rt.value,
                      onClick: Rr
                    }, [
                      $(Y, {
                        name: "play",
                        size: "sm"
                      })
                    ], 8, Mf)
                  ]),
                  Be.value ? (g(), f("div", Pf, [
                    t("div", Rf, [
                      t("span", {
                        class: te([
                          "badge",
                          Be.value.matched ? "badge-success" : "badge-danger"
                        ])
                      }, u(Be.value.matched ? d(o)("admin.groups.compositeRoutes.matched") : d(o)("admin.groups.compositeRoutes.notMatched")), 3),
                      t("span", $f, u(Qs(
                        Be.value.source
                      )), 1)
                    ]),
                    Be.value.matched ? (g(), f("div", Df, [
                      t("div", null, u(d(o)("admin.groups.compositeRoutes.targetPlatform")) + ": " + u(Mr(
                        Be.value.target_platform
                      )), 1),
                      t("div", Tf, u(d(o)("admin.groups.compositeRoutes.upstreamModel")) + ": " + u(Be.value.upstream_model), 1)
                    ])) : (g(), f("div", Af, u(Be.value.reason), 1))
                  ])) : E("", !0)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      $(Sn, {
        show: lo.value,
        group: Jo.value,
        onClose: l[78] || (l[78] = (r) => lo.value = !1),
        onSuccess: Re
      }, null, 8, ["show", "group"]),
      $(xd, {
        show: no.value,
        group: Zo.value,
        onClose: l[79] || (l[79] = (r) => no.value = !1),
        onSuccess: Re
      }, null, 8, ["show", "group"])
    ], 64));
  }
});
export {
  qf as default
};
