import { d as De, c as at, u as fa, w as be, o as ya, B as le, E as W, i as r, e as d, f as p, g as e, q as I, j as k, l as K, h as l, m as P, v as L, F as Q, p as ee, n as y, _ as T, a as x, s as M, y as fo, b as yo, J as Qs, S as ao, U as oo, C as Xs, N as Js, z as _a, k as Zs, r as $e, H as Re, A as so } from "./cnProviderAdminLeaf-C3ObTkBL.js";
import { u as er } from "./onboarding-BWZVgNd4.js";
import { b as Y, S as re, _ as ro, G as lo, C as tr } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DZ8D1X4J.js";
import { T as ar } from "./TablePageLayout-ctQ2q2qU.js";
import { P as ha, g as or, D as sr } from "./Pagination-B2nllCXv.js";
import { _ as ht } from "./BaseDialog.vue_vue_type_script_setup_true_lang-BFnaBLr5.js";
import { _ as rr } from "./EmptyState.vue_vue_type_script_setup_true_lang-DPRPQ30t.js";
import { _ as Ht } from "./PlatformIcon.vue_vue_type_script_setup_true_lang-a4gB8-vE.js";
import { a as tt } from "./platformColors-DdhJ0-nD.js";
import { u as lr, P as ir } from "./useKeyedDebouncedSearch-DFdUt8my.js";
import { c as io, f as nr, t as dr, m as Xe, a as ur, p as Je } from "./ModelTagInput.vue_vue_type_script_setup_true_lang-DMiEi8Ui.js";
import { l as pr } from "./vue-draggable-plus-BHBvQpsF.js";
import { c as Lt } from "./stableObjectKey-BMHEGo9U.js";
import { a as cr } from "./apiError-i2TfMBqu.js";
const mr = {
  key: 0,
  class: "space-y-4"
}, _r = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, gr = { class: "font-medium text-gray-900 dark:text-white" }, vr = { class: "text-gray-600 dark:text-gray-400" }, br = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, fr = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, yr = { class: "flex items-end gap-2" }, hr = { class: "relative flex-1" }, xr = ["placeholder"], kr = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, wr = ["onClick"], Cr = { class: "text-gray-400" }, Mr = { class: "text-gray-900 dark:text-white" }, $r = {
  key: 0,
  class: "text-xs text-gray-400"
}, Rr = { class: "w-24" }, Pr = ["disabled"], Er = {
  key: 0,
  class: "mt-3 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-dark-600"
}, Sr = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, zr = { class: "flex items-center gap-1.5" }, Ur = ["disabled"], Vr = { class: "ml-auto" }, Fr = {
  key: 0,
  class: "flex justify-center py-6"
}, Ar = { key: 1 }, Tr = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Or = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Lr = { key: 1 }, Gr = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, qr = { class: "max-h-[420px] overflow-auto" }, Dr = { class: "w-full min-w-max text-sm" }, Nr = { class: "sticky top-0 z-[1]" }, Ir = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, jr = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Kr = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Hr = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Br = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Wr = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Yr = {
  key: 0,
  class: "px-3 py-2 text-left text-xs font-medium text-primary-600 dark:text-primary-400"
}, Qr = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, Xr = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Jr = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, Zr = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, el = ["title"], tl = { class: "whitespace-nowrap px-3 py-2" }, al = { class: "whitespace-nowrap px-3 py-2" }, ol = ["value", "placeholder", "onChange"], sl = {
  key: 0,
  class: "whitespace-nowrap px-3 py-2 font-medium text-primary-600 dark:text-primary-400"
}, rl = { class: "px-2 py-2" }, ll = ["onClick"], il = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, nl = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, dl = { class: "ml-auto flex items-center gap-3" }, ul = ["disabled"], pl = /* @__PURE__ */ De({
  __name: "GroupRateMultipliersModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(n, { emit: b }) {
    const m = n, f = b, { t: v } = at(), s = fa(), $ = x(!1), V = x(!1), S = x([]), w = x([]), H = x(""), X = x([]), J = x(!1), Z = x(null), G = x(null), B = x(1), te = x(10), R = x(null);
    let j, O = 0;
    const ae = M(() => {
      var C;
      switch ((C = m.group) == null ? void 0 : C.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), fe = M(() => R.value != null && R.value > 0 && R.value !== 1), ce = (C) => {
      var U;
      const E = C ?? ((U = m.group) == null ? void 0 : U.rate_multiplier) ?? 1;
      return R.value ? parseFloat((E * R.value).toFixed(6)) : E;
    }, ye = M(() => {
      if (w.value.length !== S.value.length) return !0;
      const C = new Map(S.value.map((E) => [E.user_id, E.rate_multiplier ?? null]));
      return w.value.some((E) => C.get(E.user_id) !== (E.rate_multiplier ?? null));
    }), me = M(() => {
      const C = (B.value - 1) * te.value;
      return w.value.slice(C, C + te.value);
    }), he = (C) => C.map((E) => ({ ...E })), Pe = async () => {
      if (!m.group) return;
      const C = O;
      $.value = !0, S.value = [], w.value = [];
      try {
        const E = await Y.groups.getGroupRateMultipliers(m.group.id);
        if (C !== O) return;
        S.value = E.filter((U) => U.rate_multiplier != null), w.value = he(S.value), _e();
      } catch (E) {
        if (C !== O) return;
        s.showError(v("admin.groups.failedToLoad")), console.error("Error loading group rate multipliers:", E);
      } finally {
        C === O && ($.value = !1);
      }
    }, _e = () => {
      const C = Math.max(1, Math.ceil(w.value.length / te.value));
      B.value > C && (B.value = C);
    };
    be([() => m.show, () => {
      var C;
      return (C = m.group) == null ? void 0 : C.id;
    }], ([C]) => {
      O++, C && m.group && (B.value = 1, R.value = null, H.value = "", X.value = [], Z.value = null, G.value = null, Pe());
    });
    const xe = (C) => {
      te.value = C, B.value = 1;
    }, ot = () => {
      if (clearTimeout(j), Z.value = null, !H.value.trim()) {
        X.value = [], J.value = !1;
        return;
      }
      j = setTimeout(async () => {
        try {
          const C = await Y.users.list(1, 10, { search: H.value.trim() });
          X.value = C.items, J.value = !0;
        } catch {
          X.value = [];
        }
      }, 300);
    }, Fe = (C) => {
      Z.value = C, H.value = C.email, J.value = !1, X.value = [];
    }, ke = () => {
      if (!Z.value || !G.value) return;
      const C = Z.value, E = w.value.findIndex((se) => se.user_id === C.id), U = {
        user_id: C.id,
        user_name: C.username || "",
        user_email: C.email,
        user_notes: C.notes || "",
        user_status: C.status || "active",
        rate_multiplier: G.value,
        rpm_override: null
      };
      E >= 0 ? w.value[E] = U : w.value.push(U), H.value = "", Z.value = null, G.value = null, _e();
    }, st = (C, E) => {
      const U = w.value.find((de) => de.user_id === C);
      if (!U) return;
      if (E.trim() === "") {
        U.rate_multiplier = null;
        return;
      }
      const se = parseFloat(E);
      !Number.isFinite(se) || se <= 0 || (U.rate_multiplier = se);
    }, rt = (C) => {
      w.value = w.value.filter((E) => E.user_id !== C), _e();
    }, lt = () => {
      if (!(!R.value || R.value <= 0)) {
        for (const C of w.value)
          C.rate_multiplier != null && (C.rate_multiplier = parseFloat((C.rate_multiplier * R.value).toFixed(6)));
        R.value = null;
      }
    }, Ne = () => {
      w.value = [];
    }, Ie = () => {
      w.value = he(S.value), R.value = null, _e();
    }, z = async () => {
      if (m.group) {
        V.value = !0;
        try {
          const C = w.value.filter((E) => E.rate_multiplier != null).map((E) => ({
            user_id: E.user_id,
            rate_multiplier: E.rate_multiplier
          }));
          await Y.groups.batchSetGroupRateMultipliers(m.group.id, C), s.showSuccess(v("admin.groups.rateSaved")), f("success"), f("close");
        } catch (C) {
          s.showError(v("admin.groups.failedToSave")), console.error("Error saving rate multipliers:", C);
        } finally {
          V.value = !1;
        }
      }
    }, F = () => {
      ye.value && (w.value = he(S.value)), f("close");
    }, D = () => {
      J.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", D), ya(() => {
      O++, clearTimeout(j), document.removeEventListener("click", D);
    }), (C, E) => (d(), le(ht, {
      show: n.show,
      title: r(v)("admin.groups.rateMultipliersTitle"),
      width: "wide",
      onClose: F
    }, {
      default: W(() => [
        n.group ? (d(), p("div", mr, [
          e("div", _r, [
            e("span", {
              class: I(["inline-flex items-center gap-1.5", ae.value])
            }, [
              k(Ht, {
                platform: n.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              K(" " + l(r(v)("admin.groups.platforms." + n.group.platform, r(tt)(n.group.platform))), 1)
            ], 2),
            E[5] || (E[5] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", gr, l(n.group.name), 1),
            E[6] || (E[6] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", vr, l(r(v)("admin.groups.columns.rateMultiplier")) + ": " + l(n.group.rate_multiplier) + "x ", 1)
          ]),
          e("div", br, [
            e("h4", fr, l(r(v)("admin.groups.addUserRate")), 1),
            e("div", yr, [
              e("div", hr, [
                P(e("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (U) => H.value = U),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: r(v)("admin.groups.searchUserPlaceholder"),
                  onInput: ot,
                  onFocus: E[1] || (E[1] = (U) => J.value = !0)
                }, null, 40, xr), [
                  [L, H.value]
                ]),
                J.value && X.value.length > 0 ? (d(), p("div", kr, [
                  (d(!0), p(Q, null, ee(X.value, (U) => (d(), p("button", {
                    key: U.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (se) => Fe(U)
                  }, [
                    e("span", Cr, "#" + l(U.id), 1),
                    e("span", Mr, l(U.username || U.email), 1),
                    U.username ? (d(), p("span", $r, l(U.email), 1)) : y("", !0)
                  ], 8, wr))), 128))
                ])) : y("", !0)
              ]),
              e("div", Rr, [
                P(e("input", {
                  "onUpdate:modelValue": E[2] || (E[2] = (U) => G.value = U),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "1.0"
                }, null, 512), [
                  [
                    L,
                    G.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !Z.value || !G.value,
                onClick: ke
              }, l(r(v)("common.add")), 9, Pr)
            ]),
            w.value.length > 0 ? (d(), p("div", Er, [
              e("span", Sr, l(r(v)("admin.groups.batchAdjust")), 1),
              e("div", zr, [
                E[7] || (E[7] = e("span", { class: "text-xs text-gray-400" }, "×", -1)),
                P(e("input", {
                  "onUpdate:modelValue": E[3] || (E[3] = (U) => R.value = U),
                  type: "number",
                  step: "0.1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                  placeholder: "0.5"
                }, null, 512), [
                  [
                    L,
                    R.value,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm shrink-0 px-2.5 py-1 text-xs",
                  disabled: !R.value || R.value <= 0,
                  onClick: lt
                }, l(r(v)("admin.groups.applyMultiplier")), 9, Ur)
              ]),
              e("div", Vr, [
                e("button", {
                  type: "button",
                  class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                  onClick: Ne
                }, l(r(v)("admin.groups.clearAll")), 1)
              ])
            ])) : y("", !0)
          ]),
          $.value ? (d(), p("div", Fr, [...E[8] || (E[8] = [
            e("svg", {
              class: "h-6 w-6 animate-spin text-primary-500",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              e("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              e("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)
          ])])) : (d(), p("div", Ar, [
            e("h4", Tr, l(r(v)("admin.groups.rateMultipliers")) + " (" + l(w.value.length) + ") ", 1),
            w.value.length === 0 ? (d(), p("div", Or, l(r(v)("admin.groups.noRateMultipliers")), 1)) : (d(), p("div", Lr, [
              e("div", Gr, [
                e("div", qr, [
                  e("table", Dr, [
                    e("thead", Nr, [
                      e("tr", Ir, [
                        e("th", jr, l(r(v)("admin.groups.columns.userEmail")), 1),
                        E[9] || (E[9] = e("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        e("th", Kr, l(r(v)("admin.groups.columns.userName")), 1),
                        e("th", Hr, l(r(v)("admin.groups.columns.userNotes")), 1),
                        e("th", Br, l(r(v)("admin.groups.columns.userStatus")), 1),
                        e("th", Wr, l(r(v)("admin.groups.columns.rateMultiplier")), 1),
                        fe.value ? (d(), p("th", Yr, l(r(v)("admin.groups.finalRate")), 1)) : y("", !0),
                        E[10] || (E[10] = e("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    e("tbody", Qr, [
                      (d(!0), p(Q, null, ee(me.value, (U) => {
                        var se;
                        return d(), p("tr", {
                          key: U.user_id,
                          class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                        }, [
                          e("td", Xr, l(U.user_email), 1),
                          e("td", Jr, l(U.user_id), 1),
                          e("td", Zr, l(U.user_name || "-"), 1),
                          e("td", {
                            class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                            title: U.user_notes
                          }, l(U.user_notes || "-"), 9, el),
                          e("td", tl, [
                            e("span", {
                              class: I([
                                "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                                U.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                              ])
                            }, l(U.user_status), 3)
                          ]),
                          e("td", al, [
                            e("input", {
                              type: "number",
                              step: "0.001",
                              min: "0.001",
                              autocomplete: "off",
                              value: U.rate_multiplier ?? "",
                              placeholder: String(((se = m.group) == null ? void 0 : se.rate_multiplier) ?? 1),
                              class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                              onChange: (de) => st(U.user_id, de.target.value)
                            }, null, 40, ol)
                          ]),
                          fe.value ? (d(), p("td", sl, l(ce(U.rate_multiplier)), 1)) : y("", !0),
                          e("td", rl, [
                            e("button", {
                              type: "button",
                              class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              onClick: (de) => rt(U.user_id)
                            }, [
                              k(T, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, ll)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              k(ha, {
                total: w.value.length,
                page: B.value,
                "page-size": te.value,
                "onUpdate:page": E[4] || (E[4] = (U) => B.value = U),
                "onUpdate:pageSize": xe
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          e("div", il, [
            ye.value ? (d(), p(Q, { key: 0 }, [
              e("span", nl, l(r(v)("admin.groups.unsavedChanges")), 1),
              e("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: Ie
              }, l(r(v)("admin.groups.revertChanges")), 1)
            ], 64)) : y("", !0),
            e("div", dl, [
              e("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: F
              }, l(r(v)("common.close")), 1),
              ye.value ? (d(), p("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: V.value,
                onClick: z
              }, [
                V.value ? (d(), le(T, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : y("", !0),
                K(" " + l(r(v)("common.save")), 1)
              ], 8, ul)) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), cl = /* @__PURE__ */ fo(pl, [["__scopeId", "data-v-6a0565b7"]]), ml = {
  key: 0,
  class: "space-y-4"
}, _l = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, gl = { class: "font-medium text-gray-900 dark:text-white" }, vl = { class: "text-gray-600 dark:text-gray-400" }, bl = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, fl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, yl = { class: "flex items-end gap-2" }, hl = { class: "relative flex-1" }, xl = ["placeholder"], kl = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, wl = ["onClick"], Cl = { class: "text-gray-400" }, Ml = { class: "text-gray-900 dark:text-white" }, $l = {
  key: 0,
  class: "text-xs text-gray-400"
}, Rl = { class: "w-24" }, Pl = ["disabled"], El = {
  key: 0,
  class: "mt-3 flex items-center justify-end border-t border-gray-100 pt-3 dark:border-dark-600"
}, Sl = ["disabled"], zl = {
  key: 0,
  class: "flex justify-center py-6"
}, Ul = { key: 1 }, Vl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Fl = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Al = { key: 1 }, Tl = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, Ol = { class: "max-h-[420px] overflow-auto" }, Ll = { class: "w-full min-w-max text-sm" }, Gl = { class: "sticky top-0 z-[1]" }, ql = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, Dl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Nl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Il = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, jl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Kl = ["title"], Hl = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, Bl = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Wl = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, Yl = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, Ql = ["title"], Xl = { class: "whitespace-nowrap px-3 py-2" }, Jl = { class: "whitespace-nowrap px-3 py-2" }, Zl = ["value", "onChange"], ei = { class: "px-2 py-2" }, ti = ["onClick"], ai = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, oi = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, si = { class: "ml-auto flex items-center gap-3" }, ri = ["disabled"], li = /* @__PURE__ */ De({
  __name: "GroupRPMOverridesModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(n, { emit: b }) {
    const m = n, f = b, { t: v } = at(), s = fa(), $ = x(!1), V = x(!1), S = x([]), w = x([]), H = x(""), X = x([]), J = x(!1), Z = x(null), G = x(null), B = x(1), te = x(10);
    let R, j = 0;
    const O = M(() => {
      var z;
      switch ((z = m.group) == null ? void 0 : z.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), ae = M(() => {
      if (w.value.length !== S.value.length) return !0;
      const z = new Map(S.value.map((F) => [F.user_id, F.rpm_override]));
      return w.value.some((F) => z.get(F.user_id) !== F.rpm_override);
    }), fe = M(() => {
      const z = (B.value - 1) * te.value;
      return w.value.slice(z, z + te.value);
    }), ce = (z) => z.map((F) => ({ ...F })), ye = async () => {
      if (!m.group) return;
      const z = j;
      $.value = !0, S.value = [], w.value = [];
      try {
        const F = await Y.groups.getGroupRPMOverrides(m.group.id);
        if (z !== j) return;
        S.value = F, w.value = ce(S.value), me();
      } catch (F) {
        if (z !== j) return;
        s.showError(v("admin.groups.failedToLoad")), console.error("Error loading RPM overrides:", F);
      } finally {
        z === j && ($.value = !1);
      }
    }, me = () => {
      const z = Math.max(1, Math.ceil(w.value.length / te.value));
      B.value > z && (B.value = z);
    };
    be([() => m.show, () => {
      var z;
      return (z = m.group) == null ? void 0 : z.id;
    }], ([z]) => {
      j++, z && m.group && (B.value = 1, H.value = "", X.value = [], Z.value = null, G.value = null, ye());
    });
    const he = (z) => {
      te.value = z, B.value = 1;
    }, Pe = () => {
      if (clearTimeout(R), Z.value = null, !H.value.trim()) {
        X.value = [], J.value = !1;
        return;
      }
      R = setTimeout(async () => {
        try {
          const z = await Y.users.list(1, 10, { search: H.value.trim() });
          X.value = z.items, J.value = !0;
        } catch {
          X.value = [];
        }
      }, 300);
    }, _e = (z) => {
      Z.value = z, H.value = z.email, J.value = !1, X.value = [];
    }, xe = () => {
      if (!Z.value || G.value == null || G.value < 0) return;
      const z = Z.value, F = w.value.findIndex((C) => C.user_id === z.id), D = {
        user_id: z.id,
        user_name: z.username || "",
        user_email: z.email,
        user_notes: z.notes || "",
        user_status: z.status || "active",
        rpm_override: G.value
      };
      F >= 0 ? w.value[F] = D : w.value.push(D), H.value = "", Z.value = null, G.value = null, me();
    }, ot = (z, F) => {
      if (!F.trim()) return;
      const D = Number(F);
      if (!Number.isInteger(D) || D < 0) return;
      const C = w.value.find((E) => E.user_id === z);
      C && (C.rpm_override = D);
    }, Fe = (z) => {
      w.value = w.value.filter((F) => F.user_id !== z), me();
    }, ke = x(!1), st = async () => {
      if (!(!m.group || ke.value)) {
        ke.value = !0;
        try {
          await Y.groups.clearGroupRPMOverrides(m.group.id), w.value = [], S.value = [], s.showSuccess(v("admin.groups.rpmSaved"));
        } catch (z) {
          s.showError(v("admin.groups.failedToSave")), console.error("Error clearing RPM overrides:", z);
        } finally {
          ke.value = !1;
        }
      }
    }, rt = () => {
      w.value = ce(S.value), me();
    }, lt = async () => {
      if (m.group) {
        V.value = !0;
        try {
          const z = w.value.map((F) => ({
            user_id: F.user_id,
            rpm_override: F.rpm_override
          }));
          await Y.groups.batchSetGroupRPMOverrides(m.group.id, z), s.showSuccess(v("admin.groups.rpmSaved")), f("success"), f("close");
        } catch (z) {
          s.showError(v("admin.groups.failedToSave")), console.error("Error saving RPM overrides:", z);
        } finally {
          V.value = !1;
        }
      }
    }, Ne = () => {
      ae.value && (w.value = ce(S.value)), f("close");
    }, Ie = () => {
      J.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", Ie), ya(() => {
      j++, clearTimeout(R), typeof document < "u" && document.removeEventListener("click", Ie);
    }), (z, F) => (d(), le(ht, {
      show: n.show,
      title: r(v)("admin.groups.rpmOverridesTitle"),
      width: "wide",
      onClose: Ne
    }, {
      default: W(() => [
        n.group ? (d(), p("div", ml, [
          e("div", _l, [
            e("span", {
              class: I(["inline-flex items-center gap-1.5", O.value])
            }, [
              k(Ht, {
                platform: n.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              K(" " + l(r(v)("admin.groups.platforms." + n.group.platform, r(tt)(n.group.platform))), 1)
            ], 2),
            F[4] || (F[4] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", gl, l(n.group.name), 1),
            F[5] || (F[5] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", vl, l(r(v)("admin.groups.groupRpmDefault")) + ": " + l(n.group.rpm_limit || 0), 1)
          ]),
          e("div", bl, [
            e("h4", fl, l(r(v)("admin.groups.addUserRpm")), 1),
            e("div", yl, [
              e("div", hl, [
                P(e("input", {
                  "onUpdate:modelValue": F[0] || (F[0] = (D) => H.value = D),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: r(v)("admin.groups.searchUserPlaceholder"),
                  onInput: Pe,
                  onFocus: F[1] || (F[1] = (D) => J.value = !0)
                }, null, 40, xl), [
                  [L, H.value]
                ]),
                J.value && X.value.length > 0 ? (d(), p("div", kl, [
                  (d(!0), p(Q, null, ee(X.value, (D) => (d(), p("button", {
                    key: D.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (C) => _e(D)
                  }, [
                    e("span", Cl, "#" + l(D.id), 1),
                    e("span", Ml, l(D.username || D.email), 1),
                    D.username ? (d(), p("span", $l, l(D.email), 1)) : y("", !0)
                  ], 8, wl))), 128))
                ])) : y("", !0)
              ]),
              e("div", Rl, [
                P(e("input", {
                  "onUpdate:modelValue": F[2] || (F[2] = (D) => G.value = D),
                  type: "number",
                  step: "1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "100"
                }, null, 512), [
                  [
                    L,
                    G.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !Z.value || G.value == null || G.value < 0,
                onClick: xe
              }, l(r(v)("common.add")), 9, Pl)
            ]),
            w.value.length > 0 ? (d(), p("div", El, [
              e("button", {
                type: "button",
                disabled: ke.value,
                class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                onClick: st
              }, [
                ke.value ? (d(), le(T, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 inline animate-spin"
                })) : y("", !0),
                K(" " + l(r(v)("admin.groups.clearAll")), 1)
              ], 8, Sl)
            ])) : y("", !0)
          ]),
          $.value ? (d(), p("div", zl, [...F[6] || (F[6] = [
            e("svg", {
              class: "h-6 w-6 animate-spin text-primary-500",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              e("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              e("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1)
          ])])) : (d(), p("div", Ul, [
            e("h4", Vl, l(r(v)("admin.groups.rpmOverrides")) + " (" + l(w.value.length) + ") ", 1),
            w.value.length === 0 ? (d(), p("div", Fl, l(r(v)("admin.groups.noRpmOverrides")), 1)) : (d(), p("div", Al, [
              e("div", Tl, [
                e("div", Ol, [
                  e("table", Ll, [
                    e("thead", Gl, [
                      e("tr", ql, [
                        e("th", Dl, l(r(v)("admin.groups.columns.userEmail")), 1),
                        F[7] || (F[7] = e("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        e("th", Nl, l(r(v)("admin.groups.columns.userName")), 1),
                        e("th", Il, l(r(v)("admin.groups.columns.userNotes")), 1),
                        e("th", jl, l(r(v)("admin.groups.columns.userStatus")), 1),
                        e("th", {
                          class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400",
                          title: r(v)("admin.groups.columns.rpmOverrideHint")
                        }, l(r(v)("admin.groups.columns.rpmOverride")), 9, Kl),
                        F[8] || (F[8] = e("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    e("tbody", Hl, [
                      (d(!0), p(Q, null, ee(fe.value, (D) => (d(), p("tr", {
                        key: D.user_id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        e("td", Bl, l(D.user_email), 1),
                        e("td", Wl, l(D.user_id), 1),
                        e("td", Yl, l(D.user_name || "-"), 1),
                        e("td", {
                          class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                          title: D.user_notes
                        }, l(D.user_notes || "-"), 9, Ql),
                        e("td", Xl, [
                          e("span", {
                            class: I([
                              "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                              D.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                            ])
                          }, l(D.user_status), 3)
                        ]),
                        e("td", Jl, [
                          e("input", {
                            type: "number",
                            step: "1",
                            min: "0",
                            autocomplete: "off",
                            value: D.rpm_override,
                            class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                            onChange: (C) => ot(D.user_id, C.target.value)
                          }, null, 40, Zl)
                        ]),
                        e("td", ei, [
                          e("button", {
                            type: "button",
                            class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            onClick: (C) => Fe(D.user_id)
                          }, [
                            k(T, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, ti)
                        ])
                      ]))), 128))
                    ])
                  ])
                ])
              ]),
              k(ha, {
                total: w.value.length,
                page: B.value,
                "page-size": te.value,
                "onUpdate:page": F[3] || (F[3] = (D) => B.value = D),
                "onUpdate:pageSize": he
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          e("div", ai, [
            ae.value ? (d(), p(Q, { key: 0 }, [
              e("span", oi, l(r(v)("admin.groups.unsavedChanges")), 1),
              e("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: rt
              }, l(r(v)("admin.groups.revertChanges")), 1)
            ], 64)) : y("", !0),
            e("div", si, [
              e("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: Ne
              }, l(r(v)("common.close")), 1),
              ae.value ? (d(), p("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: V.value,
                onClick: lt
              }, [
                V.value ? (d(), le(T, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : y("", !0),
                K(" " + l(r(v)("common.save")), 1)
              ], 8, ri)) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), ii = /* @__PURE__ */ fo(li, [["__scopeId", "data-v-6d2da88a"]]), ni = { class: "mb-1.5 flex items-center justify-between gap-3" }, di = { class: "input-label mb-0" }, ui = ["aria-expanded"], pi = {
  key: 0,
  class: "dropdown right-0 mt-1 min-w-[10rem]"
}, ci = ["data-locale", "onClick"], mi = ["value", "required", "placeholder"], _i = ["value", "required", "placeholder"], no = /* @__PURE__ */ De({
  inheritAttrs: !1,
  __name: "GroupI18nField",
  props: {
    label: {},
    modelValue: {},
    i18n: {},
    field: {},
    multiline: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    placeholder: { default: "" }
  },
  emits: ["update:modelValue", "update:i18n"],
  setup(n, { emit: b }) {
    const m = n, f = b, { t: v } = at(), s = x(""), $ = M(() => [
      {
        code: "",
        label: v("admin.groups.i18nField.default"),
        active: s.value === ""
      },
      ...oo.map((R) => {
        var j;
        return {
          code: R.code,
          label: v(
            (j = m.i18n[R.code]) != null && j[m.field] ? "admin.groups.i18nField.edit" : "admin.groups.i18nField.add",
            { language: R.name }
          ),
          active: s.value === R.code
        };
      })
    ]), V = M(
      () => {
        var R;
        return ((R = oo.find((j) => j.code === s.value)) == null ? void 0 : R.name) ?? "";
      }
    ), S = M(
      () => V.value || v("admin.groups.i18nField.default")
    ), w = M(
      () => {
        var R;
        return s.value ? ((R = m.i18n[s.value]) == null ? void 0 : R[m.field]) ?? "" : m.modelValue;
      }
    ), H = M(
      () => s.value ? v("admin.groups.i18nField.placeholder", { language: V.value }) : m.placeholder
    );
    function X(R) {
      const j = R.target.value;
      if (!s.value) {
        f("update:modelValue", j);
        return;
      }
      f("update:i18n", {
        ...m.i18n,
        [s.value]: { ...m.i18n[s.value], [m.field]: j }
      });
    }
    const J = x(null);
    async function Z(R) {
      var j;
      G.value = !1, s.value = R, await Xs(), (j = J.value) == null || j.focus();
    }
    const G = x(!1), B = x(null);
    function te(R) {
      B.value && !B.value.contains(R.target) && (G.value = !1);
    }
    return yo(() => {
      document.addEventListener("click", te);
    }), Qs(() => {
      document.removeEventListener("click", te);
    }), (R, j) => (d(), p("div", null, [
      e("div", ni, [
        e("label", di, l(n.label), 1),
        e("div", {
          ref_key: "menuRef",
          ref: B,
          class: "relative"
        }, [
          e("button", {
            type: "button",
            "data-testid": "group-i18n-menu",
            class: I([
              "flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium transition-colors",
              s.value ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-dark-400 dark:hover:bg-dark-700 dark:hover:text-gray-200"
            ]),
            "aria-expanded": G.value,
            onClick: j[0] || (j[0] = (O) => G.value = !G.value)
          }, [
            k(T, {
              name: "globe",
              size: "sm"
            }),
            e("span", null, l(S.value), 1),
            k(T, {
              name: "chevronDown",
              size: "xs",
              class: I(["transition-transform duration-200", { "rotate-180": G.value }])
            }, null, 8, ["class"])
          ], 10, ui),
          G.value ? (d(), p("div", pi, [
            (d(!0), p(Q, null, ee($.value, (O) => (d(), p("button", {
              key: O.code,
              type: "button",
              "data-locale": O.code || "default",
              class: I(["dropdown-item w-full whitespace-nowrap text-left", {
                "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400": O.active
              }]),
              onClick: (ae) => Z(O.code)
            }, [
              e("span", null, l(O.label), 1),
              O.active ? (d(), le(T, {
                key: 0,
                name: "check",
                size: "sm",
                class: "ml-auto text-primary-500"
              })) : y("", !0)
            ], 10, ci))), 128))
          ])) : y("", !0)
        ], 512)
      ]),
      n.multiline ? (d(), p("textarea", ao({ key: 0 }, R.$attrs, {
        ref_key: "controlRef",
        ref: J,
        class: "input",
        value: w.value,
        required: n.required && !s.value,
        placeholder: H.value,
        onInput: X
      }), null, 16, mi)) : (d(), p("input", ao({ key: 1 }, R.$attrs, {
        ref_key: "controlRef",
        ref: J,
        type: "text",
        class: "input",
        value: w.value,
        required: n.required && !s.value,
        placeholder: H.value,
        onInput: X
      }), null, 16, _i))
    ]));
  }
}), gi = ["id"], vi = { class: "flex justify-end gap-3 pt-4" }, bi = ["form", "disabled"], fi = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, yi = /* @__PURE__ */ De({
  __name: "GroupEditorDialog",
  props: {
    mode: {},
    show: { type: Boolean },
    title: {},
    ready: { type: Boolean, default: !0 },
    submitting: { type: Boolean }
  },
  emits: ["close", "submit"],
  setup(n, { emit: b }) {
    const m = n, f = b, { t: v } = at(), s = M(() => `${m.mode}-group-form`), $ = M(() => v(m.mode === "edit" ? "admin.groups.updating" : "admin.groups.creating")), V = M(() => v(m.mode === "edit" ? "common.update" : "common.create"));
    return (S, w) => (d(), le(ht, {
      show: n.show,
      title: n.title,
      width: "normal",
      onClose: w[2] || (w[2] = (H) => f("close"))
    }, {
      footer: W(() => [
        e("div", vi, [
          e("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: w[1] || (w[1] = (H) => f("close"))
          }, l(r(v)("common.cancel")), 1),
          e("button", {
            type: "submit",
            form: s.value,
            disabled: n.submitting,
            class: "btn btn-primary",
            "data-tour": "group-form-submit"
          }, [
            n.submitting ? (d(), p("svg", fi, [...w[3] || (w[3] = [
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
            ])])) : y("", !0),
            K(" " + l(n.submitting ? $.value : V.value), 1)
          ], 8, bi)
        ])
      ]),
      default: W(() => [
        n.ready ? (d(), p("form", {
          key: 0,
          id: s.value,
          class: "space-y-5",
          onSubmit: w[0] || (w[0] = _a((H) => f("submit"), ["prevent"]))
        }, [
          Js(S.$slots, "default")
        ], 40, gi)) : y("", !0)
      ]),
      _: 3
    }, 8, ["show", "title"]));
  }
}), hi = { class: "flex flex-col gap-1" }, xi = { class: "flex items-center gap-1" }, ki = { class: "font-mono" }, wi = { class: "font-mono" }, Ci = {
  key: 0,
  class: "flex items-center gap-1"
}, Mi = { class: "font-mono" }, $i = { class: "font-mono" }, Ri = {
  key: 1,
  class: "flex items-center gap-1"
}, Pi = { class: "font-mono" }, Ei = { class: "font-mono" }, Si = /* @__PURE__ */ De({
  __name: "GroupCapacityBadge",
  props: {
    concurrencyUsed: { default: 0 },
    concurrencyMax: { default: 0 },
    sessionsUsed: { default: 0 },
    sessionsMax: { default: 0 },
    rpmUsed: { default: 0 },
    rpmMax: { default: 0 }
  },
  setup(n) {
    function b(m, f) {
      return f > 0 && m >= f ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : m > 0 ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
    return (m, f) => (d(), p("div", hi, [
      e("div", xi, [
        e("span", {
          class: I([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            b(n.concurrencyUsed, n.concurrencyMax)
          ])
        }, [
          f[0] || (f[0] = e("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            })
          ], -1)),
          e("span", ki, l(n.concurrencyUsed), 1),
          f[1] || (f[1] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", wi, l(n.concurrencyMax), 1)
        ], 2)
      ]),
      n.sessionsMax > 0 ? (d(), p("div", Ci, [
        e("span", {
          class: I([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            b(n.sessionsUsed, n.sessionsMax)
          ])
        }, [
          f[2] || (f[2] = e("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            })
          ], -1)),
          e("span", Mi, l(n.sessionsUsed), 1),
          f[3] || (f[3] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", $i, l(n.sessionsMax), 1)
        ], 2)
      ])) : y("", !0),
      n.rpmMax > 0 ? (d(), p("div", Ri, [
        e("span", {
          class: I([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            b(n.rpmUsed, n.rpmMax)
          ])
        }, [
          f[4] || (f[4] = e("svg", {
            class: "h-2.5 w-2.5",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            })
          ], -1)),
          e("span", Pi, l(n.rpmUsed), 1),
          f[5] || (f[5] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", Ei, l(n.rpmMax), 1)
        ], 2)
      ])) : y("", !0)
    ]));
  }
}), zi = [
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max"
], ho = (n) => It(n) ? zi : [];
function It(n) {
  return n === "openai" || n === "composite";
}
function Ui(n) {
  return ho(n).map((b) => ({
    value: b,
    label: b
  }));
}
function qe(n, b) {
  const m = (b == null ? void 0 : b.trim().toLowerCase()) ?? "";
  return ho(n).some(
    (f) => f === m
  ) ? m : "";
}
let uo = 0;
function xo(n = {}) {
  return uo += 1, {
    id: `reasoning-effort-mapping-${uo}`,
    from: n.from ?? "",
    to: n.to ?? ""
  };
}
function pa(n, b = "openai") {
  return (n ?? []).flatMap((m) => {
    const f = qe(b, m.from), v = qe(b, m.to);
    return f && v ? [xo({ from: f, to: v })] : [];
  });
}
function Gt(n) {
  return n.map((b) => ({
    from: b.from.trim(),
    to: b.to.trim()
  }));
}
function Vi(n, b = "openai") {
  const m = {}, f = /* @__PURE__ */ new Map();
  return n.forEach((v) => {
    const s = v.from.trim(), $ = v.to.trim();
    if (!s)
      m[v.id] = { ...m[v.id], from: "fromRequired" };
    else if (!qe(b, s))
      m[v.id] = { ...m[v.id], from: "unsupportedFrom" };
    else {
      const V = s.toLowerCase();
      f.set(V, [...f.get(V) ?? [], v]);
    }
    $ ? qe(b, $) || (m[v.id] = { ...m[v.id], to: "unsupportedTo" }) : m[v.id] = { ...m[v.id], to: "toRequired" };
  }), f.forEach((v) => {
    v.length < 2 || v.forEach((s) => {
      m[s.id] = { ...m[s.id], from: "duplicateFrom" };
    });
  }), m;
}
const Fi = { class: "space-y-4" }, Ai = ["for"], Ti = { class: "input-hint" }, Oi = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Li = { class: "mb-3 flex items-center justify-between gap-3" }, Gi = { class: "input-label mb-0" }, qi = {
  key: 0,
  class: "space-y-2"
}, Di = { class: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto] md:items-start" }, Ni = ["for"], Ii = ["id"], ji = { class: "hidden pt-8 text-gray-400 md:block dark:text-dark-400" }, Ki = ["for"], Hi = ["id"], Bi = ["title", "aria-label", "onClick"], Wi = /* @__PURE__ */ De({
  __name: "ReasoningEffortPolicyFields",
  props: {
    idPrefix: {},
    platform: {},
    maxEffort: {},
    mappings: {}
  },
  emits: ["update:maxEffort", "update:mappings"],
  setup(n, { expose: b, emit: m }) {
    const f = n, v = m, { t: s } = at(), $ = x(!1), V = M(
      () => Ui(f.platform)
    ), S = M(
      () => Vi(f.mappings, f.platform)
    ), w = (R) => R == null ? "" : String(R), H = (R) => {
      v("update:maxEffort", w(R));
    }, X = (R, j, O) => {
      v(
        "update:mappings",
        f.mappings.map(
          (ae) => ae.id === R ? { ...ae, [j]: w(O) } : ae
        )
      );
    }, J = () => {
      v("update:mappings", [
        ...f.mappings,
        xo()
      ]);
    }, Z = (R) => {
      v(
        "update:mappings",
        f.mappings.filter((j) => j.id !== R)
      );
    }, G = (R) => R ? s(`admin.groups.form.${R}`) : "";
    return b({ validate: () => ($.value = !0, Object.keys(S.value).length === 0), resetValidation: () => {
      $.value = !1;
    } }), (R, j) => (d(), p("div", Fi, [
      e("div", null, [
        e("label", {
          for: `${n.idPrefix}-max-effort`,
          class: "input-label"
        }, l(r(s)("admin.groups.form.maxReasoningEffort")), 9, Ai),
        k(re, {
          id: `${n.idPrefix}-max-effort`,
          "model-value": n.maxEffort,
          options: V.value,
          placeholder: r(s)("admin.groups.form.maxReasoningEffortUnlimited"),
          "aria-label": r(s)("admin.groups.form.maxReasoningEffort"),
          searchable: !1,
          clearable: "",
          "onUpdate:modelValue": H
        }, null, 8, ["id", "model-value", "options", "placeholder", "aria-label"]),
        e("p", Ti, l(r(s)("admin.groups.form.maxReasoningEffortHint")), 1)
      ]),
      e("div", Oi, [
        e("div", Li, [
          e("label", Gi, l(r(s)("admin.groups.form.reasoningEffortMappings")), 1),
          e("button", {
            type: "button",
            class: "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-primary-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-300",
            onClick: J
          }, [
            k(T, {
              name: "plus",
              size: "sm"
            }),
            K(" " + l(r(s)("admin.groups.form.addReasoningEffortMapping")), 1)
          ])
        ]),
        n.mappings.length > 0 ? (d(), p("div", qi, [
          (d(!0), p(Q, null, ee(n.mappings, (O) => {
            var ae, fe, ce, ye, me, he, Pe, _e;
            return d(), p("div", {
              key: O.id,
              class: "rounded-lg border border-gray-200 bg-gray-50/40 p-3 dark:border-dark-600 dark:bg-dark-800/40"
            }, [
              e("div", Di, [
                e("div", null, [
                  e("label", {
                    for: `${n.idPrefix}-${O.id}-from`,
                    class: "input-label"
                  }, l(r(s)("admin.groups.form.reasoningEffortFrom")), 9, Ni),
                  k(re, {
                    id: `${n.idPrefix}-${O.id}-from`,
                    "model-value": O.from,
                    options: V.value,
                    placeholder: r(s)("admin.groups.form.reasoningEffortFromPlaceholder"),
                    error: $.value && !!((ae = S.value[O.id]) != null && ae.from),
                    "aria-label": r(s)("admin.groups.form.reasoningEffortFrom"),
                    "aria-describedby": $.value && ((fe = S.value[O.id]) != null && fe.from) ? `${n.idPrefix}-${O.id}-from-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (xe) => X(O.id, "from", xe)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  $.value && ((ce = S.value[O.id]) != null && ce.from) ? (d(), p("p", {
                    key: 0,
                    id: `${n.idPrefix}-${O.id}-from-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, l(G((ye = S.value[O.id]) == null ? void 0 : ye.from)), 9, Ii)) : y("", !0)
                ]),
                e("div", ji, [
                  k(T, {
                    name: "arrowRight",
                    size: "sm"
                  })
                ]),
                e("div", null, [
                  e("label", {
                    for: `${n.idPrefix}-${O.id}-to`,
                    class: "input-label"
                  }, l(r(s)("admin.groups.form.reasoningEffortTo")), 9, Ki),
                  k(re, {
                    id: `${n.idPrefix}-${O.id}-to`,
                    "model-value": O.to,
                    options: V.value,
                    placeholder: r(s)("admin.groups.form.reasoningEffortToPlaceholder"),
                    error: $.value && !!((me = S.value[O.id]) != null && me.to),
                    "aria-label": r(s)("admin.groups.form.reasoningEffortTo"),
                    "aria-describedby": $.value && ((he = S.value[O.id]) != null && he.to) ? `${n.idPrefix}-${O.id}-to-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (xe) => X(O.id, "to", xe)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  $.value && ((Pe = S.value[O.id]) != null && Pe.to) ? (d(), p("p", {
                    key: 0,
                    id: `${n.idPrefix}-${O.id}-to-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, l(G((_e = S.value[O.id]) == null ? void 0 : _e.to)), 9, Hi)) : y("", !0)
                ]),
                e("button", {
                  type: "button",
                  class: "flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 md:mt-6 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                  title: r(s)("admin.groups.form.removeReasoningEffortMapping"),
                  "aria-label": r(s)("admin.groups.form.removeReasoningEffortMapping"),
                  onClick: (xe) => Z(O.id)
                }, [
                  k(T, {
                    name: "trash",
                    size: "sm"
                  })
                ], 8, Bi)
              ])
            ]);
          }), 128))
        ])) : y("", !0)
      ])
    ]));
  }
});
function Bt() {
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: "gpt-5.4",
    sonnet_mapped_model: "gpt-5.3-codex",
    haiku_mapped_model: "gpt-5.4-mini",
    exact_model_mappings: []
  };
}
function Yi(n) {
  var f, v, s;
  const b = Bt(), m = Object.entries((n == null ? void 0 : n.exact_model_mappings) || {}).sort(([$], [V]) => $.localeCompare(V)).map(([$, V]) => ({ claude_model: $, target_model: V }));
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: ((f = n == null ? void 0 : n.opus_mapped_model) == null ? void 0 : f.trim()) || b.opus_mapped_model,
    sonnet_mapped_model: ((v = n == null ? void 0 : n.sonnet_mapped_model) == null ? void 0 : v.trim()) || b.sonnet_mapped_model,
    haiku_mapped_model: ((s = n == null ? void 0 : n.haiku_mapped_model) == null ? void 0 : s.trim()) || b.haiku_mapped_model,
    exact_model_mappings: m
  };
}
function po(n) {
  const b = Object.fromEntries(
    n.exact_model_mappings.map((m) => [m.claude_model.trim(), m.target_model.trim()]).filter(([m, f]) => m && f)
  );
  return {
    opus_mapped_model: n.opus_mapped_model.trim(),
    sonnet_mapped_model: n.sonnet_mapped_model.trim(),
    haiku_mapped_model: n.haiku_mapped_model.trim(),
    exact_model_mappings: b
  };
}
function qt(n) {
  const b = Bt();
  n.allow_messages_dispatch = b.allow_messages_dispatch, n.opus_mapped_model = b.opus_mapped_model, n.sonnet_mapped_model = b.sonnet_mapped_model, n.haiku_mapped_model = b.haiku_mapped_model, n.exact_model_mappings = [];
}
const ca = (n) => ({
  enabled: (n == null ? void 0 : n.enabled) ?? !1,
  savedModels: ga((n == null ? void 0 : n.models) ?? []),
  items: []
}), Qi = (n, b) => {
  const m = ga(b), f = new Set(
    n.items.filter((S) => S.selected).map((S) => S.id)
  ), v = new Set(n.items.map((S) => S.id)), s = new Set(n.savedModels), $ = n.items.length > 0, V = ga([
    ...n.items.map((S) => S.id),
    ...n.savedModels,
    ...m
  ]);
  n.items = V.map((S) => {
    const w = $ ? f.has(S) : n.savedModels.length > 0 ? s.has(S) : m.includes(S);
    return {
      id: S,
      selected: w && (v.has(S) || s.has(S) || n.savedModels.length === 0)
    };
  });
}, Xi = (n) => {
  n.items.forEach((b) => {
    b.selected = !0;
  });
}, Ji = (n) => {
  n.items.forEach((b) => {
    b.selected = !b.selected;
  });
}, co = (n, b, m) => {
  if (b === m || b < 0 || m < 0 || b >= n.items.length || m >= n.items.length)
    return;
  const [f] = n.items.splice(b, 1);
  n.items.splice(m, 0, f);
}, Zi = (n, b) => {
  const m = b.trim();
  return m ? m.slice(0, -1).includes("*") ? "invalid_wildcard" : n.items.some((f) => f.id.toLowerCase() === m.toLowerCase()) || n.savedModels.some((f) => f.toLowerCase() === m.toLowerCase()) ? "duplicate" : (n.items.push({ id: m, selected: !0 }), null) : "empty";
}, Dt = (n) => ({
  enabled: n.enabled,
  models: n.items.length > 0 ? n.items.filter((b) => b.selected).map((b) => b.id) : [...n.savedModels]
}), ga = (n) => {
  const b = /* @__PURE__ */ new Set(), m = [];
  for (const f of n) {
    const v = f.trim();
    !v || b.has(v) || (b.add(v), m.push(v));
  }
  return m;
}, en = () => {
  let n = 0;
  const b = {};
  return {
    next(m) {
      return n += 1, b[m.mode] = {
        id: n,
        request: { ...m }
      }, n;
    },
    isCurrent(m, f) {
      const v = b[f.mode];
      return (v == null ? void 0 : v.id) === m && v.request.groupID === f.groupID && v.request.platform === f.platform;
    }
  };
}, mo = (n, b) => n !== "antigravity" ? [] : b ?? [], va = (n) => {
  const b = Number(n);
  return !Number.isFinite(b) || b <= 0 ? 0 : Math.round(b * 100) / 1e4;
}, tn = (n) => {
  const b = Number(n);
  return !Number.isFinite(b) || b <= 0 ? 0 : Math.round(b * 1e6) / 1e4;
}, et = (n) => ["openai", "anthropic", "gemini", "grok", "antigravity"].includes(n), an = (n) => {
  if (!et(n.platform) || !n.profit_control_enabled)
    return null;
  const b = Number(n.profit_min_margin_percent || 0), m = Number(n.profit_safety_buffer_percent || 0);
  if (!Number.isFinite(b) || b < 0)
    return "marginRangeError";
  if (!Number.isFinite(m) || m < 0)
    return "bufferRangeError";
  const f = va(b), v = va(m);
  return f >= 1 ? "marginRangeError" : v >= 1 ? "bufferRangeError" : f + v >= 1 ? "sumTooHigh" : null;
}, on = /* @__PURE__ */ new Set([
  "antigravity",
  "composite",
  "gemini",
  "grok",
  "openai"
]), sn = (n) => on.has(n), rn = /* @__PURE__ */ new Set(["antigravity", "gemini", "grok"]), ln = (n) => rn.has(n), nn = (n) => n === "grok", Ge = (n, b) => `admin.groups.imagePricing.${b}`, Ze = (n) => `admin.groups.videoPricing.${n}`, _o = {
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
}, dn = {
  grok: {
    video_price_480p: "0.05",
    video_price_720p: "0.07",
    video_price_1080p: "0.25"
  }
}, jt = (n, b) => (_o[n] ?? _o.default)[b], Kt = (n, b) => {
  const m = dn[n];
  return (m == null ? void 0 : m[b]) ?? "";
}, un = (n, b) => {
  const m = jt(n, b);
  if (m === "")
    return null;
  const f = Number(m);
  return Number.isFinite(f) ? f : null;
}, pn = (n, b) => {
  const m = Kt(n, b);
  if (m === "")
    return null;
  const f = Number(m);
  return Number.isFinite(f) ? f : null;
}, ko = [
  { key: "480p", label: "480p" },
  { key: "720p", label: "720p" },
  { key: "1080p", label: "1080p" }
], ba = [
  { key: "grok-imagine-video", label: "grok-imagine-video" },
  { key: "grok-imagine-video-1.5", label: "grok-imagine-video-1.5" }
];
function xa(n) {
  return n.trim().toLowerCase();
}
function wo(n) {
  if (n == null || n === "") return null;
  const b = Number(n);
  return Number.isFinite(b) && b >= 0 ? b : null;
}
function go() {
  return Object.fromEntries(ko.map(({ key: n }) => [n, null]));
}
function yt(n) {
  const b = {};
  for (const [m, f] of Object.entries(n ?? {})) {
    const v = xa(m);
    if (!(!v || !f || typeof f != "object")) {
      b[v] = go();
      for (const [s, $] of Object.entries(f)) {
        const V = wo($);
        V !== null && (b[v][s.trim().toLowerCase()] = V);
      }
    }
  }
  for (const { key: m } of ba)
    b[m] ?? (b[m] = go());
  return b;
}
function vo(n) {
  const b = {};
  for (const [m, f] of Object.entries(n)) {
    const v = xa(m);
    if (!v || !f || typeof f != "object") continue;
    const s = {};
    for (const [$, V] of Object.entries(f)) {
      const S = $.trim().toLowerCase(), w = wo(V);
      S && w !== null && (s[S] = w);
    }
    Object.keys(s).length > 0 && (b[v] = s);
  }
  return b;
}
function cn(n) {
  const b = new Set(ba.map(({ key: f }) => f)), m = Object.keys(n).map(xa).filter((f) => f && !b.has(f)).sort().map((f) => ({ key: f, label: f }));
  return [...ba, ...m];
}
const mn = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, _n = { class: "flex flex-1 flex-wrap items-center gap-3" }, gn = { class: "relative w-full sm:w-64" }, vn = ["placeholder"], bn = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, fn = ["disabled", "title"], yn = ["title"], hn = { class: "hidden md:inline" }, xn = {
  key: 0,
  class: "absolute right-0 top-full z-50 mt-1 max-h-80 w-48 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, kn = ["onClick"], wn = ["title"], Cn = { class: "font-medium text-gray-900 dark:text-white" }, Mn = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, $n = { class: "space-y-1" }, Rn = {
  key: 0,
  class: "space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Pn = {
  key: 0,
  class: "flex flex-wrap items-center gap-x-1 gap-y-0.5"
}, En = {
  key: 0,
  class: "whitespace-nowrap"
}, Sn = {
  key: 0,
  class: "font-medium text-gray-400 dark:text-gray-500"
}, zn = { class: "text-gray-400 dark:text-gray-500" }, Un = {
  key: 1,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, Vn = {
  key: 2,
  class: "whitespace-nowrap"
}, Fn = {
  key: 3,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, An = {
  key: 4,
  class: "whitespace-nowrap"
}, Tn = {
  key: 1,
  class: "text-gray-400 dark:text-gray-500"
}, On = { class: "text-gray-400 dark:text-gray-500" }, Ln = { class: "ml-1 font-medium text-gray-600 dark:text-gray-300" }, Gn = { class: "text-sm text-gray-700 dark:text-gray-300" }, qn = { class: "space-y-0.5 text-xs" }, Dn = { class: "text-gray-500 dark:text-gray-400" }, Nn = { class: "ml-1 font-medium text-zo-signal-600 dark:text-zo-signal-400" }, In = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, jn = { key: 0 }, Kn = { class: "text-gray-500 dark:text-gray-400" }, Hn = { class: "ml-1 font-medium text-zo-alert-600 dark:text-zo-alert-400" }, Bn = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, Wn = { class: "text-gray-500 dark:text-gray-400" }, Yn = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, Qn = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, Xn = {
  key: 1,
  class: "text-xs text-gray-400"
}, Jn = {
  key: 0,
  class: "text-xs text-gray-400"
}, Zn = {
  key: 1,
  class: "space-y-0.5 text-xs"
}, ed = { class: "text-gray-500 dark:text-gray-400" }, td = { class: "text-gray-400 dark:text-gray-500" }, ad = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, od = { class: "text-gray-500 dark:text-gray-400" }, sd = { class: "text-gray-400 dark:text-gray-500" }, rd = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, ld = { class: "text-gray-500 dark:text-gray-400" }, id = { class: "text-gray-400 dark:text-gray-500" }, nd = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, dd = { class: "flex items-center gap-1" }, ud = ["onClick"], pd = { class: "text-xs" }, cd = ["title", "disabled", "onClick"], md = { class: "text-xs" }, _d = ["onClick"], gd = { class: "text-xs" }, vd = ["onClick"], bd = { class: "text-xs" }, fd = ["onClick"], yd = { class: "text-xs" }, hd = ["onClick"], xd = { class: "text-xs" }, kd = { class: "input-label" }, wd = { class: "input-hint" }, Cd = { key: 0 }, Md = { class: "mb-1.5 flex items-center gap-1" }, $d = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Rd = { class: "group relative inline-flex" }, Pd = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Ed = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Sd = { class: "text-xs leading-relaxed text-gray-300" }, zd = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, Ud = ["onClick"], Vd = { value: "" }, Fd = ["value", "disabled"], Ad = { class: "input-hint" }, Td = { class: "input-label" }, Od = {
  key: 0,
  class: "input-hint"
}, Ld = { class: "input-label" }, Gd = ["placeholder"], qd = { class: "input-hint" }, Dd = ["data-tour"], Nd = { class: "mb-1.5 flex items-center gap-1" }, Id = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, jd = { class: "group relative inline-flex" }, Kd = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Hd = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Bd = { class: "mb-2 text-xs font-medium" }, Wd = { class: "mb-2 text-xs leading-relaxed text-gray-300" }, Yd = { class: "rounded bg-gray-800 p-2 dark:bg-gray-700" }, Qd = { class: "text-xs leading-relaxed text-gray-300" }, Xd = { class: "inline-flex items-center gap-1 text-primary-400" }, Jd = { class: "flex items-center gap-3" }, Zd = { class: "text-sm text-gray-500 dark:text-gray-400" }, eu = { key: 3 }, tu = { class: "input-label" }, au = { class: "mt-4 border-t pt-4" }, ou = { class: "input-label" }, su = { class: "input-hint" }, ru = {
  key: 0,
  class: "space-y-4 border-l-2 border-primary-200 pl-4 dark:border-primary-800"
}, lu = { class: "input-label" }, iu = ["placeholder"], nu = { class: "input-label" }, du = ["placeholder"], uu = { class: "input-label" }, pu = ["placeholder"], cu = { class: "border-t pt-4" }, mu = { class: "mb-3 flex items-center justify-between gap-3" }, _u = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, gu = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, vu = {
  key: 0,
  class: "overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 dark:border-dark-600 dark:bg-dark-800/40"
}, bu = {
  key: 0,
  class: "flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs dark:border-dark-600 dark:bg-dark-800"
}, fu = { class: "text-gray-500 dark:text-gray-400" }, yu = { class: "flex items-center gap-1.5" }, hu = { class: "max-h-64 space-y-2 overflow-y-auto p-2" }, xu = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, ku = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, wu = ["onUpdate:modelValue"], Cu = { class: "min-w-0 flex-1 break-all text-sm text-gray-700 dark:text-gray-300" }, Mu = {
  key: 0,
  class: "ml-1 rounded bg-primary-50 px-1.5 py-0.5 text-[10px] font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
}, $u = ["disabled", "onClick"], Ru = ["disabled", "onClick"], Pu = { class: "border-t border-gray-200 px-3 py-2 dark:border-dark-600" }, Eu = { class: "flex items-center gap-2" }, Su = ["placeholder", "onKeydown"], zu = {
  key: 0,
  class: "mt-1 text-xs text-red-500"
}, Uu = {
  key: 4,
  class: "border-t pt-4"
}, Vu = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, Fu = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, Au = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Tu = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Ou = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Lu = {
  key: 0,
  class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
}, Gu = {
  key: 0,
  class: "mb-4"
}, qu = { class: "input-label" }, Du = { class: "grid grid-cols-3 gap-3" }, Nu = ["placeholder"], Iu = ["placeholder"], ju = ["placeholder"], Ku = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, Hu = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, Bu = { class: "mb-1 font-medium" }, Wu = { class: "grid grid-cols-3 gap-2" }, Yu = {
  key: 1,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700"
}, Qu = { class: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Xu = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, Ju = {
  key: 0,
  class: "mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"
}, Zu = { class: "input-label" }, ep = { class: "input-label" }, tp = {
  key: 2,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, ap = {
  key: 5,
  class: "border-t pt-4"
}, op = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, sp = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, rp = { class: "mb-4" }, lp = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, ip = {
  key: 0,
  class: "mb-4"
}, np = { class: "input-label" }, dp = { class: "grid grid-cols-3 gap-3" }, up = ["placeholder"], pp = ["placeholder"], cp = ["placeholder"], mp = {
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700",
  "data-testid": "create-grok-video-model-prices"
}, _p = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, gp = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, vp = { class: "mt-3 space-y-3" }, bp = { class: "min-w-0 pb-1 font-mono text-xs text-gray-700 dark:text-gray-300" }, fp = { class: "mb-1 block text-xs text-gray-500 dark:text-gray-400" }, yp = ["onUpdate:modelValue", "data-testid"], hp = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, xp = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, kp = { class: "mb-1 font-medium" }, wp = { class: "grid grid-cols-3 gap-2" }, Cp = {
  key: 6,
  class: "border-t pt-4"
}, Mp = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, $p = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Rp = {
  key: 0,
  class: "mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
}, Pp = { class: "input-label" }, Ep = { class: "input-label" }, Sp = { class: "input-label" }, zp = ["title"], Up = {
  key: 7,
  class: "border-t pt-4"
}, Vp = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Fp = { class: "mb-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Ap = {
  key: 0,
  class: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Tp = { class: "input-label" }, Op = ["title"], Lp = { class: "input-label" }, Gp = ["title"], qp = {
  key: 8,
  class: "border-t pt-4"
}, Dp = { class: "mb-1.5 flex items-center gap-1" }, Np = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Ip = { class: "group relative inline-flex" }, jp = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Kp = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Hp = { class: "text-xs leading-relaxed text-gray-300" }, Bp = { class: "space-y-2" }, Wp = { class: "flex items-center gap-2 cursor-pointer" }, Yp = ["checked"], Qp = { class: "text-sm text-gray-700 dark:text-gray-300" }, Xp = { class: "flex items-center gap-2 cursor-pointer" }, Jp = ["checked"], Zp = { class: "text-sm text-gray-700 dark:text-gray-300" }, ec = { class: "flex items-center gap-2 cursor-pointer" }, tc = ["checked"], ac = { class: "text-sm text-gray-700 dark:text-gray-300" }, oc = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, sc = {
  key: 9,
  class: "border-t pt-4"
}, rc = { class: "mb-1.5 flex items-center gap-1" }, lc = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, ic = { class: "group relative inline-flex" }, nc = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, dc = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, uc = { class: "text-xs leading-relaxed text-gray-300" }, pc = { class: "flex items-center gap-3" }, cc = { class: "text-sm text-gray-500 dark:text-gray-400" }, mc = {
  key: 10,
  class: "border-t pt-4"
}, _c = { class: "mb-1.5 flex items-center gap-1" }, gc = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, vc = { class: "group relative inline-flex" }, bc = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, fc = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, yc = { class: "text-xs leading-relaxed text-gray-300" }, hc = { class: "flex items-center gap-3" }, xc = { class: "text-sm text-gray-500 dark:text-gray-400" }, kc = {
  key: 0,
  class: "mt-3"
}, wc = { class: "input-label" }, Cc = { class: "input-hint" }, Mc = {
  key: 11,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, $c = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Rc = { class: "input-label" }, Pc = { class: "input-hint" }, Ec = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-600 dark:bg-dark-700 dark:text-gray-300" }, Sc = { class: "border-t border-gray-200 pt-4 mt-4 dark:border-dark-400" }, zc = { class: "flex items-start justify-between gap-4" }, Uc = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Vc = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Fc = { class: "mt-3 flex items-start gap-2" }, Ac = { class: "block text-sm text-gray-700 dark:text-gray-300" }, Tc = { class: "block text-xs text-gray-500" }, Oc = { class: "mt-3 space-y-2" }, Lc = {
  key: 12,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, Gc = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, qc = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, Dc = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, Nc = { class: "input-label" }, Ic = ["placeholder"], jc = { class: "input-label" }, Kc = ["placeholder"], Hc = { class: "input-label" }, Bc = ["placeholder"], Wc = { class: "input-label" }, Yc = ["placeholder"], Qc = {
  key: 13,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, Xc = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Jc = { class: "flex items-center justify-between" }, Zc = { class: "text-sm text-gray-600 dark:text-gray-400" }, em = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, tm = {
  key: 14,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, am = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, om = { class: "flex items-center justify-between" }, sm = { class: "text-sm text-gray-600 dark:text-gray-400" }, rm = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, lm = {
  key: 0,
  class: "mt-3"
}, im = { class: "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-600 dark:bg-dark-800" }, nm = { class: "border-b border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-dark-700 dark:bg-dark-700/50" }, dm = { class: "flex items-center gap-2" }, um = { class: "text-sm font-medium text-gray-900 dark:text-white" }, pm = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, cm = { class: "p-4" }, mm = { class: "grid gap-4 md:grid-cols-3" }, _m = { class: "input-label" }, gm = ["placeholder"], vm = { class: "input-label" }, bm = ["placeholder"], fm = { class: "input-label" }, ym = ["placeholder"], hm = { class: "mt-5 relative overflow-hidden rounded-xl border border-primary-200 bg-white shadow-sm dark:border-primary-900/50 dark:bg-dark-800" }, xm = { class: "border-b border-primary-100 bg-primary-50/80 px-4 py-3 dark:border-primary-900/40 dark:bg-primary-900/20" }, km = { class: "flex items-start justify-between gap-3" }, wm = { class: "flex items-center gap-2" }, Cm = { class: "text-sm font-medium text-primary-900 dark:text-primary-100" }, Mm = { class: "mt-1 text-xs text-primary-600/90 dark:text-primary-400/90" }, $m = { class: "p-4 bg-gray-50/30 dark:bg-dark-800/30" }, Rm = {
  key: 0,
  class: "flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary-200 bg-white px-5 py-4 text-sm text-primary-700 transition-colors hover:border-primary-300 dark:border-primary-900/40 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-800"
}, Pm = {
  key: 1,
  class: "space-y-3"
}, Em = { class: "flex items-center gap-4" }, Sm = { class: "grid flex-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start" }, zm = { class: "input-label" }, Um = ["onUpdate:modelValue", "placeholder"], Vm = { class: "hidden md:flex md:justify-center md:pt-7 text-primary-300 dark:text-primary-700" }, Fm = { class: "input-label" }, Am = ["onUpdate:modelValue", "placeholder"], Tm = ["onClick", "title"], Om = {
  key: 15,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4 space-y-4"
}, Lm = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Gm = { class: "flex items-center justify-between" }, qm = { class: "text-sm text-gray-600 dark:text-gray-400" }, Dm = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Nm = { class: "flex items-center justify-between" }, Im = { class: "text-sm text-gray-600 dark:text-gray-400" }, jm = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Km = {
  key: 16,
  class: "border-t pt-4"
}, Hm = { class: "input-label" }, Bm = { class: "input-hint" }, Wm = {
  key: 17,
  class: "border-t pt-4"
}, Ym = { class: "mb-1.5 flex items-center gap-1" }, Qm = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Xm = { class: "group relative inline-flex" }, Jm = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-80 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Zm = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, e0 = { class: "text-xs leading-relaxed text-gray-300" }, t0 = { class: "flex items-center gap-3 mb-3" }, a0 = { class: "text-sm text-gray-500 dark:text-gray-400" }, o0 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, s0 = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, r0 = {
  key: 2,
  class: "space-y-3"
}, l0 = { class: "flex items-start gap-3" }, i0 = { class: "flex-1 space-y-2" }, n0 = { class: "input-label text-xs" }, d0 = ["onUpdate:modelValue", "placeholder"], u0 = { class: "input-label text-xs" }, p0 = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, c0 = ["onClick"], m0 = { class: "relative account-search-container" }, _0 = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], g0 = {
  key: 0,
  class: "absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, v0 = ["onClick", "disabled"], b0 = { class: "ml-2 text-xs text-gray-400" }, f0 = { class: "text-xs text-gray-400 mt-1" }, y0 = ["onClick", "title"], h0 = { class: "space-y-4" }, x0 = { class: "text-sm text-gray-500 dark:text-gray-400" }, k0 = { class: "text-gray-400" }, w0 = { class: "flex-1" }, C0 = { class: "font-medium text-gray-900 dark:text-white" }, M0 = { class: "text-xs text-gray-500 dark:text-gray-400" }, $0 = { class: "text-sm text-gray-400" }, R0 = { class: "flex justify-end gap-3 pt-4" }, P0 = ["disabled"], E0 = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, S0 = { class: "grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]" }, z0 = { class: "min-w-0" }, U0 = { class: "mb-3 flex items-center justify-between gap-3" }, V0 = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, F0 = ["disabled"], A0 = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, T0 = {
  key: 0,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, O0 = {
  key: 1,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, L0 = {
  key: 2,
  class: "overflow-x-auto"
}, G0 = { class: "min-w-full divide-y divide-gray-200 text-sm dark:divide-dark-600" }, q0 = { class: "bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:bg-dark-800 dark:text-gray-400" }, D0 = { class: "px-3 py-2" }, N0 = { class: "px-3 py-2" }, I0 = { class: "px-3 py-2" }, j0 = { class: "px-3 py-2 text-right" }, K0 = { class: "divide-y divide-gray-100 bg-white dark:divide-dark-700 dark:bg-dark-900" }, H0 = { class: "max-w-[15rem] px-3 py-2" }, B0 = { class: "break-all font-medium text-gray-900 dark:text-white" }, W0 = { class: "mt-1 flex flex-wrap items-center gap-1.5" }, Y0 = { class: "badge badge-gray" }, Q0 = {
  key: 0,
  class: "badge badge-danger"
}, X0 = { class: "px-3 py-2" }, J0 = { class: "flex items-center gap-1.5 text-gray-900 dark:text-white" }, Z0 = { class: "mt-1 break-all text-xs text-gray-500 dark:text-gray-400" }, e_ = { class: "px-3 py-2" }, t_ = { class: "text-gray-700 dark:text-gray-300" }, a_ = { class: "text-xs text-gray-500 dark:text-gray-400" }, o_ = { class: "px-3 py-2" }, s_ = { class: "flex justify-end gap-1" }, r_ = ["title", "onClick"], l_ = ["title", "onClick"], i_ = { class: "space-y-5" }, n_ = { class: "flex items-center justify-between gap-3" }, d_ = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, u_ = { class: "input-label" }, p_ = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, c_ = { class: "input-label" }, m_ = { class: "input-label" }, __ = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, g_ = { class: "input-label" }, v_ = { class: "input-label" }, b_ = { class: "input-label" }, f_ = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, y_ = { class: "input-label" }, h_ = { class: "flex items-center justify-between gap-3" }, x_ = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, k_ = ["disabled"], w_ = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, C_ = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, M_ = { class: "space-y-3" }, $_ = { class: "flex gap-2" }, R_ = ["disabled"], P_ = {
  key: 0,
  class: "rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm dark:border-dark-600 dark:bg-dark-800"
}, E_ = { class: "mb-2 flex items-center gap-2" }, S_ = { class: "badge badge-gray" }, z_ = {
  key: 0,
  class: "space-y-1 text-gray-700 dark:text-gray-300"
}, U_ = { class: "break-all" }, V_ = {
  key: 1,
  class: "text-gray-500 dark:text-gray-400"
}, F_ = { class: "flex justify-end pt-4" }, bo = "group-hidden-columns", ma = "group-column-settings-version", Nt = 2, A_ = 0.01, Q_ = /* @__PURE__ */ De({
  __name: "GroupsView",
  setup(n) {
    const b = () => ({
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
      time_pricing: io()
    }), m = (a) => a.push(b()), f = (a) => (a || []).map((o) => ({
      models: o.models || [],
      billing_mode: o.billing_mode || "token",
      input_price: Je(o.input_price),
      output_price: Je(o.output_price),
      cache_write_price: Je(o.cache_write_price),
      cache_read_price: Je(o.cache_read_price),
      image_input_price: Je(o.image_input_price),
      image_output_price: Je(o.image_output_price),
      per_request_price: o.per_request_price,
      intervals: ur(o.intervals || []),
      time_pricing: io()
    })), v = (a, o) => a.filter((t) => t.models.length > 0).map((t) => ({
      platform: o,
      models: t.models,
      billing_mode: t.billing_mode,
      input_price: Xe(t.input_price),
      output_price: Xe(t.output_price),
      cache_write_price: Xe(t.cache_write_price),
      cache_read_price: Xe(t.cache_read_price),
      image_input_price: Xe(t.image_input_price),
      image_output_price: Xe(t.image_output_price),
      per_request_price: dr(t.per_request_price),
      intervals: t.billing_mode === "token" ? [] : nr(t.intervals || []),
      time_pricing: null
    })), { t: s } = at(), $ = fa(), V = Zs(), S = er(), w = /* @__PURE__ */ new Set(["name", "actions"]), H = ["id"], X = {
      2: ["id"]
    }, J = M(() => {
      const a = [
        { key: "name", label: s("admin.groups.columns.name"), sortable: !0 },
        { key: "id", label: s("admin.groups.columns.id"), sortable: !0 },
        { key: "platform", label: s("admin.groups.columns.platform"), sortable: !0 },
        { key: "account_count", label: s("admin.groups.columns.accounts"), sortable: !0 },
        { key: "status", label: s("admin.groups.columns.status"), sortable: !0 },
        { key: "actions", label: s("admin.groups.columns.actions"), sortable: !1 }
      ];
      return V.isSimpleMode ? a : [
        ...a.slice(0, 3),
        {
          key: "billing_type",
          label: s("admin.groups.columns.billingType"),
          sortable: !0
        },
        {
          key: "rate_multiplier",
          label: s("admin.groups.columns.rateMultiplier"),
          sortable: !0
        },
        {
          key: "is_exclusive",
          label: s("admin.groups.columns.type"),
          sortable: !0
        },
        a[3],
        {
          key: "capacity",
          label: s("admin.groups.columns.capacity"),
          sortable: !1
        },
        { key: "usage", label: s("admin.groups.columns.usage"), sortable: !1 },
        a[4],
        a[5]
      ];
    }), Z = M(
      () => J.value.filter((a) => !w.has(a.key))
    ), G = $e(/* @__PURE__ */ new Set()), B = x(!1), te = x(null), R = () => new Set(Z.value.map((a) => a.key)), j = () => {
      G.clear();
      try {
        const a = localStorage.getItem(bo), o = R();
        if (a) {
          const t = JSON.parse(a);
          Array.isArray(t) && t.filter(
            (g) => typeof g == "string" && o.has(g)
          ).forEach((g) => G.add(g));
          const _ = Number(
            localStorage.getItem(ma) ?? "1"
          );
          if (_ < Nt) {
            let g = !1;
            for (let h = _ + 1; h <= Nt; h++)
              for (const N of X[h] ?? [])
                o.has(N) && !G.has(N) && (G.add(N), g = !0);
            g ? O() : localStorage.setItem(
              ma,
              String(Nt)
            );
          }
        } else
          H.forEach((t) => {
            o.has(t) && G.add(t);
          }), O();
      } catch (a) {
        console.error("Failed to load group column settings:", a), H.forEach((o) => G.add(o));
      }
    }, O = () => {
      try {
        const a = R(), o = [...G].filter((t) => a.has(t));
        localStorage.setItem(bo, JSON.stringify(o)), localStorage.setItem(
          ma,
          String(Nt)
        );
      } catch (a) {
        console.error("Failed to save group column settings:", a);
      }
    }, ae = (a) => !G.has(a), fe = M(
      () => !V.isSimpleMode && (ae("usage") || ae("billing_type"))
    ), ce = M(() => !V.isSimpleMode && ae("capacity")), ye = (a) => {
      if (!R().has(a)) return;
      const t = G.has(a);
      t ? G.delete(a) : G.add(a), O(), t && (a === "usage" || a === "billing_type") && Ia(), t && a === "capacity" && ja();
    }, me = M(
      () => J.value.filter(
        (a) => w.has(a.key) || !G.has(a.key)
      )
    );
    typeof window < "u" && j();
    const he = M(() => [
      { value: "", label: s("admin.groups.allStatus") },
      { value: "active", label: s("admin.accounts.status.active") },
      { value: "inactive", label: s("admin.accounts.status.inactive") }
    ]), Pe = M(() => [
      { value: "", label: s("admin.groups.allGroups") },
      { value: "true", label: s("admin.groups.exclusive") },
      { value: "false", label: s("admin.groups.nonExclusive") }
    ]), _e = M(
      () => lo.filter((a) => !V.isSimpleMode || a.value !== "composite")
    ), xe = M(() => [
      { value: "", label: s("admin.groups.allPlatforms") },
      ...lo
    ]), ot = M(() => [
      ...tr
    ]), Fe = M(() => [
      { value: "any", label: s("admin.groups.compositeRoutes.endpoints.any") },
      {
        value: "messages",
        label: s("admin.groups.compositeRoutes.endpoints.messages")
      },
      {
        value: "count_tokens",
        label: s("admin.groups.compositeRoutes.endpoints.countTokens")
      },
      {
        value: "responses",
        label: s("admin.groups.compositeRoutes.endpoints.responses")
      },
      {
        value: "chat_completions",
        label: s("admin.groups.compositeRoutes.endpoints.chatCompletions")
      },
      {
        value: "embeddings",
        label: s("admin.groups.compositeRoutes.endpoints.embeddings")
      },
      { value: "images", label: s("admin.groups.compositeRoutes.endpoints.images") },
      { value: "gemini", label: s("admin.groups.compositeRoutes.endpoints.gemini") }
    ]), ke = M(() => [
      { value: "exact", label: s("admin.groups.compositeRoutes.match.exact") },
      { value: "prefix", label: s("admin.groups.compositeRoutes.match.prefix") }
    ]), st = M(() => [
      { value: "active", label: s("admin.accounts.status.active") },
      { value: "inactive", label: s("admin.accounts.status.inactive") }
    ]), rt = M(() => [
      { value: "standard", label: s("admin.groups.subscription.standard") },
      { value: "subscription", label: s("admin.groups.subscription.subscription") }
    ]), lt = M(() => {
      const a = [
        { value: null, label: s("admin.groups.claudeCode.noFallback") }
      ];
      return U.value.filter(
        (t) => t.platform === "anthropic" && !t.claude_code_only && t.status === "active"
      ).forEach((t) => {
        a.push({ value: t.id, label: t.name });
      }), a;
    }), Ne = M(() => {
      var _;
      const a = [
        { value: null, label: s("admin.groups.claudeCode.noFallback") }
      ], o = (_ = ue.value) == null ? void 0 : _.id;
      return U.value.filter(
        (g) => g.platform === "anthropic" && !g.claude_code_only && g.status === "active" && g.id !== o
      ).forEach((g) => {
        a.push({ value: g.id, label: g.name });
      }), a;
    }), Ie = M(() => {
      const a = [
        { value: null, label: s("admin.groups.invalidRequestFallback.noFallback") }
      ];
      return U.value.filter(
        (t) => t.platform === "anthropic" && t.status === "active" && t.subscription_type !== "subscription" && t.fallback_group_id_on_invalid_request === null
      ).forEach((t) => {
        a.push({ value: t.id, label: t.name });
      }), a;
    }), z = M(() => {
      var _;
      const a = [
        { value: null, label: s("admin.groups.invalidRequestFallback.noFallback") }
      ], o = (_ = ue.value) == null ? void 0 : _.id;
      return U.value.filter(
        (g) => g.platform === "anthropic" && g.status === "active" && g.subscription_type !== "subscription" && g.fallback_group_id_on_invalid_request === null && g.id !== o
      ).forEach((g) => {
        a.push({ value: g.id, label: g.name });
      }), a;
    }), F = (a, o) => a === "composite" || o === a, D = (a) => {
      const o = a.account_count || 0, t = s("admin.groups.platforms." + a.platform, tt(a.platform));
      return `${a.name} - ${t} (${s("admin.groups.accountsCount", { count: o })})`;
    }, C = M(() => U.value.filter(
      (o) => F(c.platform, o.platform) && (o.account_count || 0) > 0
    ).map((o) => ({
      value: o.id,
      label: D(o)
    }))), E = M(() => {
      var t;
      const a = (t = ue.value) == null ? void 0 : t.id;
      return U.value.filter(
        (_) => F(u.platform, _.platform) && (_.account_count || 0) > 0 && _.id !== a
      ).map((_) => ({
        value: _.id,
        label: D(_)
      }));
    }), U = x([]), se = x(!1), de = x(/* @__PURE__ */ new Map()), Ae = x(!1), Ee = x(/* @__PURE__ */ new Map()), Wt = x(""), we = $e({
      platform: "",
      status: "",
      is_exclusive: ""
    }), ie = $e({
      page: 1,
      page_size: or(),
      total: 0,
      pages: 0
    }), xt = $e({
      sort_by: "sort_order",
      sort_order: "asc"
    });
    let kt = null;
    const Yt = x(!1), wt = x(!1), Ct = x(!1), je = x(null), Co = M(
      () => je.value !== null
    ), Mt = x(null);
    let $t = null;
    const Qt = x(!1), it = x(!1), nt = x(!1), ue = x(null), Se = x(null), Ke = $e(/* @__PURE__ */ new Set()), Xt = x(!1), ka = x(null), Jt = x(!1), wa = x(null), He = x([]), Zt = x(!1), ne = x(null), Rt = x([]), dt = x(!1), Pt = x(!1), ze = x(null), Be = x(""), Et = x("any"), ea = x(!1), ge = x(null), q = $e({
      public_model: "",
      match_type: "exact",
      target_platform: "openai",
      upstream_model: "",
      endpoint: "any",
      priority: 100,
      enabled: !0,
      notes: ""
    }), ta = Bt(), aa = Bt(), Ce = $e(ca()), ve = $e(ca()), Ca = x(!1), Ma = x(!1), ut = x(null), pt = x(null), St = en(), Mo = M(
      () => Ce.items.filter((a) => a.selected).length
    ), $o = M(
      () => ve.items.filter((a) => a.selected).length
    ), zt = x(""), Ut = x(""), oa = x(null), sa = x(null), $a = (a, o, t) => {
      const _ = Zi(a, o.value);
      if (_) {
        t.value = `admin.groups.modelAllowlist.errors.${_}`;
        return;
      }
      o.value = "", t.value = null;
    }, Ro = () => $a(Ce, zt, oa), Po = () => $a(ve, Ut, sa), c = $e({
      name: "",
      description: "",
      i18n: {},
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
      image_count_billing: !1,
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
      video_model_prices: yt(),
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
      opus_mapped_model: ta.opus_mapped_model,
      sonnet_mapped_model: ta.sonnet_mapped_model,
      haiku_mapped_model: ta.haiku_mapped_model,
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
    }), Te = x([]), Ue = x([]), Ra = Lt("create-rule"), Pa = Lt("edit-rule"), Eo = Lt(
      "create-messages-dispatch-row"
    ), So = Lt(
      "edit-messages-dispatch-row"
    ), zo = (a) => Ra(a), Uo = (a) => Pa(a), Vo = (a) => Eo(a), Fo = (a) => So(a), Vt = (a) => `create-${Ra(a)}`, Ft = (a) => `edit-${Pa(a)}`, ra = (a, o = !1) => o ? Ft(a) : Vt(a), We = x({}), Oe = x({}), Le = x({}), Ea = (a) => {
      delete We.value[a], delete Oe.value[a], delete Le.value[a];
    }, la = () => {
      We.value = {}, Oe.value = {}, Le.value = {};
    }, Ye = lr({
      delay: 300,
      search: async (a, { signal: o }) => (await Y.accounts.list(
        1,
        20,
        {
          search: a,
          platform: "anthropic"
        },
        { signal: o }
      )).items.map((_) => ({ id: _.id, name: _.name })),
      onSuccess: (a, o) => {
        Oe.value[a] = o;
      },
      onError: (a) => {
        Oe.value[a] = [];
      }
    }), Sa = (a) => {
      Ye.trigger(a, We.value[a] || "");
    }, Ao = (a, o = !1) => {
      Sa(ra(a, o));
    }, To = (a, o, t = !1) => {
      if (!a) return;
      a.accounts.some((g) => g.id === o.id) || a.accounts.push(o);
      const _ = ra(a, t);
      We.value[_] = "", Le.value[_] = !1;
    }, Oo = (a, o, t = !1) => {
      a && (a.accounts = a.accounts.filter((_) => _.id !== o));
    }, Lo = (a) => {
      const o = c.supported_model_scopes.indexOf(a);
      o === -1 ? c.supported_model_scopes.push(a) : c.supported_model_scopes.splice(o, 1);
    }, Go = (a) => {
      const o = u.supported_model_scopes.indexOf(a);
      o === -1 ? u.supported_model_scopes.push(a) : u.supported_model_scopes.splice(o, 1);
    }, qo = (a, o = !1) => {
      var _;
      const t = ra(a, o);
      Le.value[t] = !0, (_ = Oe.value[t]) != null && _.length || Sa(t);
    }, Do = () => {
      Te.value.push({ pattern: "", accounts: [] });
    }, No = (a) => {
      const o = Te.value.indexOf(a);
      if (o === -1) return;
      const t = Vt(a);
      Ye.clearKey(t), Ea(t), Te.value.splice(o, 1);
    }, Io = () => {
      Ue.value.push({ pattern: "", accounts: [] });
    }, jo = (a) => {
      const o = Ue.value.indexOf(a);
      if (o === -1) return;
      const t = Ft(a);
      Ye.clearKey(t), Ea(t), Ue.value.splice(o, 1);
    }, ct = (a, o) => {
      const t = ca(o);
      a.enabled = t.enabled, a.savedModels = t.savedModels, a.items = t.items;
    }, mt = async (a, o, t) => {
      if (V.isSimpleMode) return;
      const _ = { mode: a, groupID: o, platform: t }, g = St.next(_), h = a === "create" ? Ce : ve, N = a === "create" ? Ca : Ma;
      N.value = !0;
      try {
        const ft = await Y.groups.getModelAllowlistCandidates(o, t);
        if (!St.isCurrent(g, _))
          return;
        Qi(h, ft);
      } catch (ft) {
        if (!St.isCurrent(g, _))
          return;
        console.error("Error loading group models list candidates:", ft);
      } finally {
        St.isCurrent(g, _) && (N.value = !1);
      }
    }, Ko = (a, o) => {
      co(Ce, a, o);
    }, Ho = (a, o) => {
      co(ve, a, o);
    }, za = (a) => {
      const o = {};
      let t = !1;
      for (const _ of a) {
        const g = _.pattern.trim();
        if (!g) continue;
        const h = _.accounts.map((N) => N.id).filter((N) => N > 0);
        h.length > 0 && (o[g] = h, t = !0);
      }
      return t ? o : null;
    }, Bo = async (a) => {
      if (!a) return [];
      const o = [];
      for (const [t, _] of Object.entries(a)) {
        const g = [];
        for (const h of _)
          try {
            const N = await Y.accounts.getById(h);
            g.push({ id: N.id, name: N.name });
          } catch {
            g.push({ id: h, name: `#${h}` });
          }
        o.push({ pattern: t, accounts: g });
      }
      return o;
    }, u = $e({
      name: "",
      description: "",
      i18n: {},
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
      image_count_billing: !1,
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
      video_model_prices: yt(),
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
      opus_mapped_model: aa.opus_mapped_model,
      sonnet_mapped_model: aa.sonnet_mapped_model,
      haiku_mapped_model: aa.haiku_mapped_model,
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
    }), Wo = [
      { key: "image_price_1k", label: "1K" },
      { key: "image_price_2k", label: "2K" },
      { key: "image_price_4k", label: "4K" }
    ], Yo = [
      { key: "video_price_480p", label: "480p" },
      { key: "video_price_720p", label: "720p" },
      { key: "video_price_1080p", label: "1080p" }
    ], _t = (a, o = 0) => {
      if (a == null || a === "")
        return o;
      const t = Number(a);
      return Number.isFinite(t) ? t : o;
    }, ia = (a) => {
      if (a == null || a === "")
        return null;
      const o = Number(a);
      return Number.isFinite(o) && o >= 0 ? o : null;
    }, Ua = (a) => {
      if (a == null || a === "")
        return s("admin.groups.imagePricing.notConfigured");
      const o = Number(a);
      return !Number.isFinite(o) || o < 0 ? s("admin.groups.imagePricing.notConfigured") : `$${o.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, Qo = (a) => {
      if (a == null || a === "")
        return s("admin.groups.videoPricing.notConfigured");
      const o = Number(a);
      return !Number.isFinite(o) || o < 0 ? s("admin.groups.videoPricing.notConfigured") : `$${o.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, Va = (a) => {
      const t = a.image_rate_independent ? _t(a.image_rate_multiplier, 1) : _t(a.rate_multiplier, 1);
      return Wo.map((_) => {
        const g = ia(a[_.key]) ?? un(a.platform, _.key);
        return {
          label: _.label,
          value: g !== null ? Ua(g * t) : s("admin.groups.imagePricing.notConfigured")
        };
      });
    }, Fa = (a) => {
      const o = a.video_rate_independent ? _t(a.video_rate_multiplier, 1) : _t(a.rate_multiplier, 1);
      return Yo.map((t) => {
        const _ = ia(a[t.key]) ?? pn(a.platform, t.key);
        return {
          label: t.label,
          value: _ !== null ? Qo(_ * o) : s("admin.groups.videoPricing.notConfigured")
        };
      });
    }, Xo = M(
      () => Va(c)
    ), Jo = M(
      () => Va(u)
    ), Zo = M(
      () => Fa(c)
    ), es = M(
      () => Fa(u)
    ), Aa = (a) => {
      const o = ia(a.web_search_price_per_call) ?? A_, t = _t(a.rate_multiplier, 1);
      return Ua(o * t);
    }, ts = M(
      () => Aa(c)
    ), as = M(
      () => Aa(u)
    ), A = M(
      () => wt.value ? "edit" : "create"
    ), i = M(
      () => A.value === "edit" ? u : c
    ), na = M(
      () => A.value === "edit" ? E.value : C.value
    ), os = M(
      () => A.value === "edit" ? Ne.value : lt.value
    ), ss = M(
      () => A.value === "edit" ? z.value : Ie.value
    ), pe = M(
      () => A.value === "edit" ? ve : Ce
    ), Ta = M(
      () => A.value === "edit" ? Ma.value : Ca.value
    ), rs = M(
      () => A.value === "edit" ? $o.value : Mo.value
    ), Oa = M({
      get: () => A.value === "edit" ? Ut.value : zt.value,
      set: (a) => {
        A.value === "edit" ? Ut.value = a : zt.value = a;
      }
    }), La = M(
      () => A.value === "edit" ? sa.value : oa.value
    ), ls = M(
      () => A.value === "edit" ? Jo.value : Xo.value
    ), is = M(
      () => A.value === "edit" ? es.value : Zo.value
    ), ns = M(
      () => A.value === "edit" ? as.value : ts.value
    ), ds = M(
      () => A.value === "edit" ? Ue.value : Te.value
    ), us = (a) => {
      const o = a;
      A.value === "edit" ? pt.value = o : ut.value = o;
    }, Ga = () => A.value === "edit" ? Po() : Ro(), qa = (a, o) => A.value === "edit" ? Ho(a, o) : Ko(a, o), da = (a) => A.value === "edit" ? Go(a) : Lo(a), Da = () => A.value === "edit" ? Vs() : zs(), ps = (a) => A.value === "edit" ? Fs(a) : Us(a), cs = (a) => A.value === "edit" ? Fo(a) : Vo(a), ms = (a) => A.value === "edit" ? Uo(a) : zo(a), gt = (a) => A.value === "edit" ? Ft(a) : Vt(a), _s = () => A.value === "edit" ? Io() : Do(), gs = (a) => A.value === "edit" ? jo(a) : No(a), vs = () => A.value === "edit" ? Qa() : Ba(), bs = () => A.value === "edit" ? Ss() : Ps(), fs = () => {
      A.value === "create" && (c.copy_accounts_from_group_ids = []);
    }, Ve = (a) => {
      (a.platform !== "gemini" || !a.allow_image_generation) && (a.allow_batch_image_generation = !1), a.allow_batch_image_generation || (a.batch_image_discount_multiplier = 0.5, a.batch_image_hold_multiplier = 0.6), (!a.allow_image_generation || a.platform !== "composite" && a.platform !== "openai") && (a.image_count_billing = !1);
    }, ys = M(() => Se.value ? Se.value.subscription_type === "subscription" ? s("admin.groups.deleteConfirmSubscription", {
      name: Se.value.name
    }) : s("admin.groups.deleteConfirm", { name: Se.value.name }) : ""), Na = async () => Mt.value ? Mt.value : ($t || ($t = Y.groups.getLiveCapability().catch(() => ({ supported: !1 })).finally(() => {
      $t = null;
    })), Mt.value = await $t, Mt.value ?? { supported: !1 }), hs = async (a) => {
      const o = c;
      if (o.allow_live) {
        o.allow_live = !1;
        return;
      }
      if ((await Na()).supported) {
        o.allow_live = !0;
        return;
      }
      je.value = a;
    }, xs = () => {
      je.value === "create" && (c.allow_live = !0), je.value === "edit" && (u.allow_live = !0), je.value = null;
    }, ks = () => {
      je.value = null;
    }, oe = async () => {
      kt && kt.abort();
      const a = new AbortController();
      kt = a;
      const { signal: o } = a;
      se.value = !0;
      try {
        const t = await Y.groups.list(
          ie.page,
          ie.page_size,
          {
            platform: we.platform || void 0,
            status: we.status,
            is_exclusive: !V.isSimpleMode && we.is_exclusive ? we.is_exclusive === "true" : void 0,
            search: Wt.value.trim() || void 0,
            sort_by: xt.sort_by,
            sort_order: xt.sort_order
          },
          { signal: o }
        );
        if (o.aborted) return;
        U.value = t.items, ie.total = t.total, ie.pages = t.pages, fe.value ? Ia() : Ae.value = !1, ce.value && ja();
      } catch (t) {
        if (o.aborted || (t == null ? void 0 : t.name) === "AbortError" || (t == null ? void 0 : t.code) === "ERR_CANCELED")
          return;
        $.showError(s("admin.groups.failedToLoad")), console.error("Error loading groups:", t);
      } finally {
        kt === a && !o.aborted && (se.value = !1);
      }
    }, At = (a) => a >= 1e3 ? a.toFixed(0) : a >= 100 ? a.toFixed(1) : a.toFixed(2), vt = (a) => `$${At(a ?? 0)}`, ws = (a, o) => {
      if (!o || o <= 0)
        return "font-medium text-gray-700 dark:text-gray-300";
      const t = a / o;
      return t >= 1 ? "font-semibold text-red-600 dark:text-red-400" : t >= 0.8 ? "font-semibold text-zo-alert-600 dark:text-zo-alert-400" : "font-medium text-gray-700 dark:text-gray-300";
    }, Ia = async () => {
      if (!fe.value) {
        Ae.value = !1;
        return;
      }
      Ae.value = !0;
      try {
        const a = await Y.groups.getUsageSummary(), o = /* @__PURE__ */ new Map();
        for (const t of a)
          o.set(t.group_id, {
            today_cost: t.today_cost,
            yesterday_cost: t.yesterday_cost,
            total_cost: t.total_cost
          });
        de.value = o;
      } catch (a) {
        console.error("Error loading group usage summary:", a);
      } finally {
        Ae.value = !1;
      }
    }, ja = async () => {
      if (ce.value)
        try {
          const a = await Y.groups.getCapacitySummary(), o = /* @__PURE__ */ new Map();
          for (const t of a)
            o.set(t.group_id, {
              concurrencyUsed: t.concurrency_used,
              concurrencyMax: t.concurrency_max,
              sessionsUsed: t.sessions_used,
              sessionsMax: t.sessions_max,
              rpmUsed: t.rpm_used,
              rpmMax: t.rpm_max
            });
          Ee.value = o;
        } catch (a) {
          console.error("Error loading group capacity summary:", a);
        }
    };
    let Ka;
    const Cs = () => {
      clearTimeout(Ka), Ka = setTimeout(() => {
        ie.page = 1, oe();
      }, 300);
    }, Ms = (a) => {
      ie.page = a, oe();
    }, $s = (a) => {
      ie.page_size = a, ie.page = 1, oe();
    }, Rs = (a, o) => {
      xt.sort_by = a, xt.sort_order = o, ie.page = 1, oe();
    }, Ha = () => {
      Yt.value = !0, mt("create", 0, c.platform);
    }, Ba = () => {
      var a;
      Yt.value = !1, Te.value.forEach((o) => {
        Ye.clearKey(Vt(o));
      }), la(), c.name = "", c.description = "", c.i18n = {}, c.platform = "anthropic", c.rate_multiplier = 1, c.is_exclusive = !1, c.subscription_type = "standard", c.daily_limit_usd = null, c.weekly_limit_usd = null, c.monthly_limit_usd = null, c.allow_image_generation = !1, c.allow_batch_image_generation = !1, c.image_count_billing = !1, c.image_rate_independent = !1, c.image_rate_multiplier = 1, c.batch_image_discount_multiplier = 0.5, c.batch_image_hold_multiplier = 0.6, c.image_price_1k = null, c.image_price_2k = null, c.image_price_4k = null, c.video_rate_independent = !1, c.video_rate_multiplier = 1, c.video_price_480p = null, c.video_price_720p = null, c.video_price_1080p = null, c.video_model_prices = yt(), c.long_context_pricing_enabled = !0, c.model_pricing = [], c.web_search_price_per_call = null, c.search_price_per_1k = null, c.audio_realtime_price_per_min = null, c.audio_tts_price_per_million_chars = null, c.audio_stt_price_per_hour = null, c.peak_rate_enabled = !1, c.peak_start = "", c.peak_end = "", c.peak_rate_multiplier = 1, c.profit_control_enabled = !1, c.profit_min_margin_percent = 0, c.profit_safety_buffer_percent = 0, c.claude_code_only = !1, c.fallback_group_id = null, c.fallback_group_id_on_invalid_request = null, qt(c), c.allow_live = !1, c.require_oauth_only = !1, c.require_privacy_set = !1, c.supported_model_scopes = ["claude", "gemini_text", "gemini_image"], c.mcp_xml_inject = !0, c.copy_accounts_from_group_ids = [], c.rpm_limit = 0, c.max_reasoning_effort = "", c.reasoning_effort_mappings = [], (a = ut.value) == null || a.resetValidation(), ct(Ce), zt.value = "", oa.value = null, Te.value = [];
    }, Qe = (a) => {
      if (a == null)
        return null;
      if (typeof a == "string") {
        const o = a.trim();
        if (!o)
          return null;
        const t = Number(o);
        return Number.isFinite(t) && t > 0 ? t : null;
      }
      return Number.isFinite(a) && a > 0 ? a : null;
    }, Me = (a) => {
      if (a == null || a === "")
        return 1;
      const o = Number(a);
      return Number.isFinite(o) && o >= 0 ? o : 1;
    }, Tt = va, Wa = tn, Ya = (a) => {
      const o = an(a);
      return o ? ($.showError(s(`admin.groups.profitControl.${o}`)), !1) : !0;
    }, Ps = async () => {
      var a, o;
      if (!c.name.trim()) {
        $.showError(s("admin.groups.nameRequired"));
        return;
      }
      if (!(It(c.platform) && ut.value && !ut.value.validate()) && Ya(c)) {
        if (Ce.enabled && Dt(Ce).models.length === 0) {
          $.showError(s("admin.groups.modelAllowlist.emptySelectionError"));
          return;
        }
        it.value = !0;
        try {
          const {
            video_model_prices: t,
            ..._
          } = c, g = vo(
            c.video_model_prices
          ), h = {
            ..._,
            model_pricing: v(
              c.model_pricing,
              c.platform
            ),
            daily_limit_usd: Qe(
              c.daily_limit_usd
            ),
            weekly_limit_usd: Qe(
              c.weekly_limit_usd
            ),
            monthly_limit_usd: Qe(
              c.monthly_limit_usd
            ),
            ...Object.keys(g).length > 0 ? { video_model_prices: g } : {},
            model_routing: za(
              Te.value
            ),
            model_allowlist: Dt(Ce),
            supported_model_scopes: mo(
              c.platform,
              c.supported_model_scopes
            ),
            messages_dispatch_model_config: c.platform === "openai" ? po({
              allow_messages_dispatch: c.allow_messages_dispatch,
              opus_mapped_model: c.opus_mapped_model,
              sonnet_mapped_model: c.sonnet_mapped_model,
              haiku_mapped_model: c.haiku_mapped_model,
              exact_model_mappings: c.exact_model_mappings
            }) : void 0,
            reasoning_effort_mappings: Gt(
              c.reasoning_effort_mappings
            ),
            // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
            profit_control_enabled: et(c.platform) && c.profit_control_enabled,
            profit_min_margin: Tt(c.profit_min_margin_percent),
            profit_safety_buffer: Tt(
              c.profit_safety_buffer_percent
            )
          };
          delete h.profit_min_margin_percent, delete h.profit_safety_buffer_percent;
          const N = (to) => to === "" ? null : to;
          h.daily_limit_usd = N(h.daily_limit_usd), h.weekly_limit_usd = N(h.weekly_limit_usd), h.monthly_limit_usd = N(h.monthly_limit_usd), h.image_rate_multiplier = Me(
            h.image_rate_multiplier
          ), Ve(h), h.batch_image_discount_multiplier = Me(
            h.batch_image_discount_multiplier
          ), h.batch_image_hold_multiplier = Me(
            h.batch_image_hold_multiplier
          ), h.video_rate_multiplier = Me(
            h.video_rate_multiplier
          ), h.image_price_1k = N(h.image_price_1k), h.image_price_2k = N(h.image_price_2k), h.image_price_4k = N(h.image_price_4k), h.video_price_480p = N(h.video_price_480p), h.video_price_720p = N(h.video_price_720p), h.video_price_1080p = N(h.video_price_1080p), h.search_price_per_1k = N(
            h.search_price_per_1k
          ), h.audio_realtime_price_per_min = N(
            h.audio_realtime_price_per_min
          ), h.audio_tts_price_per_million_chars = N(
            h.audio_tts_price_per_million_chars
          ), h.audio_stt_price_per_hour = N(
            h.audio_stt_price_per_hour
          ), h.web_search_price_per_call = N(
            h.web_search_price_per_call
          ), h.peak_rate_enabled = c.peak_rate_enabled, h.peak_start = c.peak_start, h.peak_end = c.peak_end, h.peak_rate_multiplier = Me(
            c.peak_rate_multiplier
          );
          const ft = V.isSimpleMode ? { name: c.name, description: c.description, i18n: c.i18n, platform: c.platform } : h;
          await Y.groups.create(ft), $.showSuccess(s("admin.groups.groupCreated")), Ba(), oe(), S.isCurrentStep('[data-tour="group-form-submit"]') && S.nextStep(500);
        } catch (t) {
          $.showError(
            ((o = (a = t.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || s("admin.groups.failedToCreate")
          ), console.error("Error creating group:", t);
        } finally {
          it.value = !1;
        }
      }
    }, Es = async (a) => {
      ue.value = a, u.name = a.name, u.description = a.description || "", u.i18n = Object.fromEntries(Object.entries(a.i18n ?? {}).map(([t, _]) => [t, { ..._ }])), u.platform = a.platform, u.rate_multiplier = a.rate_multiplier, u.is_exclusive = a.is_exclusive, u.status = a.status, u.subscription_type = a.subscription_type || "standard", u.daily_limit_usd = a.daily_limit_usd, u.weekly_limit_usd = a.weekly_limit_usd, u.monthly_limit_usd = a.monthly_limit_usd, u.long_context_pricing_enabled = a.long_context_pricing_enabled ?? !0, u.model_pricing = f(a.model_pricing), u.allow_image_generation = a.allow_image_generation ?? !1, u.allow_batch_image_generation = a.allow_batch_image_generation ?? !1, u.image_count_billing = a.image_count_billing ?? !1, u.image_rate_independent = a.image_rate_independent ?? !1, u.image_rate_multiplier = a.image_rate_multiplier ?? 1, u.batch_image_discount_multiplier = a.batch_image_discount_multiplier ?? 0.5, u.batch_image_hold_multiplier = a.batch_image_hold_multiplier ?? 0.6, u.image_price_1k = a.image_price_1k, u.image_price_2k = a.image_price_2k, u.image_price_4k = a.image_price_4k, u.video_rate_independent = a.video_rate_independent ?? !1, u.video_rate_multiplier = a.video_rate_multiplier ?? 1, u.video_price_480p = a.video_price_480p, u.video_price_720p = a.video_price_720p, u.video_price_1080p = a.video_price_1080p, u.video_model_prices = yt(
        a.video_model_prices
      ), u.web_search_price_per_call = a.web_search_price_per_call ?? null, u.search_price_per_1k = a.search_price_per_1k ?? null, u.audio_realtime_price_per_min = a.audio_realtime_price_per_min ?? null, u.audio_tts_price_per_million_chars = a.audio_tts_price_per_million_chars ?? null, u.audio_stt_price_per_hour = a.audio_stt_price_per_hour ?? null, u.peak_rate_enabled = a.peak_rate_enabled ?? !1, u.peak_start = a.peak_start ?? "", u.peak_end = a.peak_end ?? "", u.peak_rate_multiplier = a.peak_rate_multiplier ?? 1, u.profit_control_enabled = a.profit_control_enabled ?? !1, u.profit_min_margin_percent = Wa(
        a.profit_min_margin ?? 0
      ), u.profit_safety_buffer_percent = Wa(
        a.profit_safety_buffer ?? 0
      ), u.claude_code_only = a.claude_code_only || !1, u.fallback_group_id = a.fallback_group_id, u.fallback_group_id_on_invalid_request = a.fallback_group_id_on_invalid_request;
      const o = Yi(
        a.messages_dispatch_model_config
      );
      u.allow_messages_dispatch = a.allow_messages_dispatch || o.allow_messages_dispatch, u.allow_live = a.allow_live ?? !1, u.opus_mapped_model = o.opus_mapped_model, u.sonnet_mapped_model = o.sonnet_mapped_model, u.haiku_mapped_model = o.haiku_mapped_model, u.exact_model_mappings = o.exact_model_mappings, u.require_oauth_only = a.require_oauth_only ?? !1, u.require_privacy_set = a.require_privacy_set ?? !1, u.model_routing_enabled = a.model_routing_enabled || !1, u.supported_model_scopes = a.supported_model_scopes || [
        "claude",
        "gemini_text",
        "gemini_image"
      ], u.mcp_xml_inject = a.mcp_xml_inject ?? !0, u.copy_accounts_from_group_ids = [], u.rpm_limit = a.rpm_limit ?? 0, u.max_reasoning_effort = qe(
        a.platform,
        a.max_reasoning_effort
      ), u.reasoning_effort_mappings = pa(
        a.reasoning_effort_mappings,
        a.platform
      ), ct(ve, a.model_allowlist), Ue.value = await Bo(
        a.model_routing
      ), mt("edit", a.id, a.platform), wt.value = !0;
    }, Qa = () => {
      var a;
      Ue.value.forEach((o) => {
        Ye.clearKey(Ft(o));
      }), la(), wt.value = !1, ue.value = null, u.max_reasoning_effort = "", u.reasoning_effort_mappings = [], (a = pt.value) == null || a.resetValidation(), Ue.value = [], u.copy_accounts_from_group_ids = [], u.peak_rate_enabled = !1, u.peak_start = "", u.peak_end = "", u.peak_rate_multiplier = 1, u.profit_control_enabled = !1, u.profit_min_margin_percent = 0, u.profit_safety_buffer_percent = 0, u.video_rate_independent = !1, u.video_rate_multiplier = 1, u.video_price_480p = null, u.video_price_720p = null, u.video_price_1080p = null, u.video_model_prices = yt(), u.long_context_pricing_enabled = !0, u.model_pricing = [], u.web_search_price_per_call = null, u.search_price_per_1k = null, u.audio_realtime_price_per_min = null, u.audio_tts_price_per_million_chars = null, u.audio_stt_price_per_hour = null, qt(u), u.allow_live = !1, ct(ve), Ut.value = "", sa.value = null;
    }, Ss = async () => {
      var a, o;
      if (ue.value) {
        if (!u.name.trim()) {
          $.showError(s("admin.groups.nameRequired"));
          return;
        }
        if (!(It(u.platform) && pt.value && !pt.value.validate()) && Ya(u)) {
          if (ve.enabled && Dt(ve).models.length === 0) {
            $.showError(s("admin.groups.modelAllowlist.emptySelectionError"));
            return;
          }
          it.value = !0;
          try {
            const t = {
              ...u,
              model_pricing: v(
                u.model_pricing,
                u.platform
              ),
              daily_limit_usd: Qe(
                u.daily_limit_usd
              ),
              weekly_limit_usd: Qe(
                u.weekly_limit_usd
              ),
              monthly_limit_usd: Qe(
                u.monthly_limit_usd
              ),
              video_model_prices: vo(
                u.video_model_prices
              ),
              fallback_group_id: u.fallback_group_id === null ? 0 : u.fallback_group_id,
              fallback_group_id_on_invalid_request: u.fallback_group_id_on_invalid_request === null ? 0 : u.fallback_group_id_on_invalid_request,
              model_routing: za(
                Ue.value
              ),
              model_allowlist: Dt(ve),
              supported_model_scopes: mo(
                u.platform,
                u.supported_model_scopes
              ),
              messages_dispatch_model_config: u.platform === "openai" ? po({
                allow_messages_dispatch: u.allow_messages_dispatch,
                opus_mapped_model: u.opus_mapped_model,
                sonnet_mapped_model: u.sonnet_mapped_model,
                haiku_mapped_model: u.haiku_mapped_model,
                exact_model_mappings: u.exact_model_mappings
              }) : void 0,
              reasoning_effort_mappings: Gt(
                u.reasoning_effort_mappings
              ),
              // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
              profit_control_enabled: et(u.platform) && u.profit_control_enabled,
              profit_min_margin: Tt(u.profit_min_margin_percent),
              profit_safety_buffer: Tt(
                u.profit_safety_buffer_percent
              )
            };
            delete t.profit_min_margin_percent, delete t.profit_safety_buffer_percent;
            const _ = (N) => N === "" ? null : N;
            t.daily_limit_usd = _(t.daily_limit_usd), t.weekly_limit_usd = _(t.weekly_limit_usd), t.monthly_limit_usd = _(t.monthly_limit_usd), t.image_rate_multiplier = Me(
              t.image_rate_multiplier
            ), Ve(t), t.batch_image_discount_multiplier = Me(
              t.batch_image_discount_multiplier
            ), t.batch_image_hold_multiplier = Me(
              t.batch_image_hold_multiplier
            ), t.video_rate_multiplier = Me(
              t.video_rate_multiplier
            );
            const g = (N) => N === "" || N === null ? -1 : N;
            t.image_price_1k = g(t.image_price_1k), t.image_price_2k = g(t.image_price_2k), t.image_price_4k = g(t.image_price_4k), t.video_price_480p = g(t.video_price_480p), t.video_price_720p = g(t.video_price_720p), t.video_price_1080p = g(t.video_price_1080p), t.search_price_per_1k = g(
              t.search_price_per_1k
            ), t.audio_realtime_price_per_min = g(
              t.audio_realtime_price_per_min
            ), t.audio_tts_price_per_million_chars = g(
              t.audio_tts_price_per_million_chars
            ), t.audio_stt_price_per_hour = g(
              t.audio_stt_price_per_hour
            ), t.web_search_price_per_call = g(
              t.web_search_price_per_call
            ), t.peak_rate_enabled = u.peak_rate_enabled, t.peak_start = u.peak_start, t.peak_end = u.peak_end, t.peak_rate_multiplier = Me(
              u.peak_rate_multiplier
            );
            const h = V.isSimpleMode ? { name: u.name, description: u.description, i18n: u.i18n } : t;
            await Y.groups.update(ue.value.id, h), $.showSuccess(s("admin.groups.groupUpdated")), Qa(), oe();
          } catch (t) {
            $.showError(
              ((o = (a = t.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || s("admin.groups.failedToUpdate")
            ), console.error("Error updating group:", t);
          } finally {
            it.value = !1;
          }
        }
      }
    }, zs = () => {
      c.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, Us = (a) => {
      const o = c.exact_model_mappings.indexOf(a);
      o !== -1 && c.exact_model_mappings.splice(o, 1);
    }, Vs = () => {
      u.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, Fs = (a) => {
      const o = u.exact_model_mappings.indexOf(a);
      o !== -1 && u.exact_model_mappings.splice(o, 1);
    }, As = (a) => {
      ka.value = a, Xt.value = !0;
    }, Ts = (a) => {
      wa.value = a, Jt.value = !0;
    }, Os = async (a) => {
      if (!Ke.has(a.id)) {
        Ke.add(a.id);
        try {
          const o = await Y.groups.duplicate(a.id);
          $.showSuccess(
            s("admin.groups.duplicateSuccess", { name: o.name })
          ), await oe();
        } catch (o) {
          $.showError(
            cr(o, s("admin.groups.duplicateFailed"))
          );
        } finally {
          Ke.delete(a.id);
        }
      }
    }, Ls = (a) => {
      var o;
      return ((o = ke.value.find((t) => t.value === a)) == null ? void 0 : o.label) || a;
    }, Gs = (a) => {
      var o;
      return ((o = Fe.value.find((t) => t.value === a)) == null ? void 0 : o.label) || a;
    }, Xa = (a) => a ? s(`admin.groups.platforms.${a}`, tt(a)) : "—", qs = (a) => a === "route" ? s("admin.groups.compositeRoutes.sources.route") : a === "detector" ? s("admin.groups.compositeRoutes.sources.detector") : a || "—", bt = () => {
      ze.value = null, q.public_model = "", q.match_type = "exact", q.target_platform = "openai", q.upstream_model = "", q.endpoint = "any", q.priority = 100, q.enabled = !0, q.notes = "";
    }, Ds = () => ({
      public_model: q.public_model.trim(),
      match_type: q.match_type,
      target_platform: q.target_platform,
      upstream_model: q.upstream_model.trim(),
      endpoint: q.endpoint,
      priority: Number(q.priority) || 100,
      enabled: q.enabled,
      notes: q.notes.trim()
    }), Ot = async () => {
      var a, o, t, _;
      if (ne.value) {
        dt.value = !0;
        try {
          const g = await Y.groups.listCompositeRoutes(
            ne.value.id
          );
          Rt.value = g.sort((h, N) => h.priority !== N.priority ? h.priority - N.priority : h.id - N.id);
        } catch (g) {
          $.showError(
            ((o = (a = g.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || ((_ = (t = g.response) == null ? void 0 : t.data) == null ? void 0 : _.message) || s("admin.groups.compositeRoutes.failedToLoad")
          ), console.error("Error loading composite routes:", g);
        } finally {
          dt.value = !1;
        }
      }
    }, Ns = async (a) => {
      ne.value = a, Be.value = "", Et.value = "any", ge.value = null, bt(), Zt.value = !0, await Ot();
    }, Ja = () => {
      Zt.value = !1, ne.value = null, Rt.value = [], ge.value = null, bt();
    }, Is = (a) => {
      ze.value = a.id, q.public_model = a.public_model, q.match_type = a.match_type, q.target_platform = a.target_platform, q.upstream_model = a.upstream_model, q.endpoint = a.endpoint, q.priority = a.priority || 100, q.enabled = a.enabled, q.notes = a.notes || "";
    }, js = async () => {
      var a, o, t, _;
      if (ne.value) {
        if (!q.public_model.trim()) {
          $.showError(s("admin.groups.compositeRoutes.publicModelRequired"));
          return;
        }
        Pt.value = !0;
        try {
          const g = Ds();
          ze.value ? (await Y.groups.updateCompositeRoute(
            ne.value.id,
            ze.value,
            g
          ), $.showSuccess(s("admin.groups.compositeRoutes.routeUpdated"))) : (await Y.groups.createCompositeRoute(
            ne.value.id,
            g
          ), $.showSuccess(s("admin.groups.compositeRoutes.routeCreated"))), bt(), await Ot();
        } catch (g) {
          $.showError(
            ((o = (a = g.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || ((_ = (t = g.response) == null ? void 0 : t.data) == null ? void 0 : _.message) || s("admin.groups.compositeRoutes.failedToSave")
          ), console.error("Error saving composite route:", g);
        } finally {
          Pt.value = !1;
        }
      }
    }, Ks = async (a) => {
      var o, t, _, g;
      if (ne.value && window.confirm(s("admin.groups.compositeRoutes.deleteConfirm")))
        try {
          await Y.groups.deleteCompositeRoute(
            ne.value.id,
            a.id
          ), ze.value === a.id && bt(), $.showSuccess(s("admin.groups.compositeRoutes.routeDeleted")), await Ot();
        } catch (h) {
          $.showError(
            ((t = (o = h.response) == null ? void 0 : o.data) == null ? void 0 : t.detail) || ((g = (_ = h.response) == null ? void 0 : _.data) == null ? void 0 : g.message) || s("admin.groups.compositeRoutes.failedToDelete")
          ), console.error("Error deleting composite route:", h);
        }
    }, Za = async () => {
      var a, o, t, _;
      if (!(!ne.value || !Be.value.trim())) {
        ea.value = !0;
        try {
          ge.value = await Y.groups.previewCompositeRoute(
            ne.value.id,
            {
              model: Be.value.trim(),
              endpoint: Et.value
            }
          );
        } catch (g) {
          $.showError(
            ((o = (a = g.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || ((_ = (t = g.response) == null ? void 0 : t.data) == null ? void 0 : _.message) || s("admin.groups.compositeRoutes.failedToPreview")
          ), console.error("Error previewing composite route:", g);
        } finally {
          ea.value = !1;
        }
      }
    }, Hs = (a) => {
      Se.value = a, Ct.value = !0;
    }, Bs = async () => {
      var a, o;
      if (Se.value)
        try {
          await Y.groups.delete(Se.value.id), $.showSuccess(s("admin.groups.groupDeleted")), Ct.value = !1, Se.value = null, oe();
        } catch (t) {
          $.showError(
            ((o = (a = t.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || s("admin.groups.failedToDelete")
          ), console.error("Error deleting group:", t);
        }
    };
    be(
      () => c.subscription_type,
      (a) => {
        a === "subscription" ? (c.is_exclusive = !0, c.fallback_group_id_on_invalid_request = null) : (c.peak_rate_enabled = !1, c.peak_start = "", c.peak_end = "", c.peak_rate_multiplier = 1);
      }
    ), be(
      () => u.subscription_type,
      (a) => {
        a !== "subscription" && (u.peak_rate_enabled = !1, u.peak_start = "", u.peak_end = "", u.peak_rate_multiplier = 1);
      }
    ), be(
      () => c.platform,
      (a) => {
        var o;
        ["anthropic", "antigravity"].includes(a) || (c.fallback_group_id_on_invalid_request = null), a !== "openai" && (qt(c), c.allow_live = !1), et(a) || (c.profit_control_enabled = !1, c.profit_min_margin_percent = 0, c.profit_safety_buffer_percent = 0), c.max_reasoning_effort = qe(
          a,
          c.max_reasoning_effort
        ), c.reasoning_effort_mappings = pa(
          Gt(c.reasoning_effort_mappings),
          a
        ), (o = ut.value) == null || o.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(a) || (c.require_oauth_only = !1, c.require_privacy_set = !1), c.allow_image_generation = ln(a), Ve(c), ct(Ce), mt("create", 0, a);
      }
    ), be(
      () => c.allow_image_generation,
      () => {
        Ve(c);
      }
    ), be(
      () => c.allow_batch_image_generation,
      () => {
        Ve(c);
      }
    ), be(
      () => u.platform,
      (a) => {
        var o;
        ["anthropic", "antigravity"].includes(a) || (u.fallback_group_id_on_invalid_request = null), a !== "openai" && (qt(u), u.allow_live = !1), et(a) || (u.profit_control_enabled = !1, u.profit_min_margin_percent = 0, u.profit_safety_buffer_percent = 0), u.max_reasoning_effort = qe(
          a,
          u.max_reasoning_effort
        ), u.reasoning_effort_mappings = pa(
          Gt(u.reasoning_effort_mappings),
          a
        ), (o = pt.value) == null || o.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(a) || (u.require_oauth_only = !1, u.require_privacy_set = !1), Ve(u), ue.value && (ct(ve, u.platform === ue.value.platform ? ue.value.model_allowlist : void 0), mt("edit", ue.value.id, a));
      }
    ), be(
      () => u.allow_image_generation,
      () => {
        Ve(u);
      }
    ), be(
      () => u.allow_batch_image_generation,
      () => {
        Ve(u);
      }
    ), be(
      () => u.platform,
      (a) => {
        ["anthropic", "antigravity"].includes(a) || (u.fallback_group_id_on_invalid_request = null), a !== "openai" && (u.allow_messages_dispatch = !1, u.allow_live = !1, u.default_mapped_model = "");
      }
    );
    const eo = (a) => {
      const o = a.target;
      o.closest(".account-search-container") || Object.keys(Le.value).forEach((t) => {
        Le.value[t] = !1;
      }), te.value && !te.value.contains(o) && (B.value = !1);
    }, Ws = async () => {
      try {
        const a = await Y.groups.getAll();
        He.value = [...a].sort(
          (o, t) => o.sort_order - t.sort_order
        ), Qt.value = !0;
      } catch (a) {
        $.showError(s("admin.groups.failedToLoad")), console.error("Error loading groups for sorting:", a);
      }
    }, ua = () => {
      Qt.value = !1, He.value = [];
    }, Ys = async () => {
      var a, o;
      nt.value = !0;
      try {
        const t = He.value.map((_, g) => ({
          id: _.id,
          sort_order: g * 10
        }));
        await Y.groups.updateSortOrder(t), $.showSuccess(s("admin.groups.sortOrderUpdated")), ua(), oe();
      } catch (t) {
        $.showError(
          ((o = (a = t.response) == null ? void 0 : a.data) == null ? void 0 : o.detail) || s("admin.groups.failedToUpdateSortOrder")
        ), console.error("Error updating sort order:", t);
      } finally {
        nt.value = !1;
      }
    };
    return yo(() => {
      oe(), V.isSimpleMode || (Na(), mt("create", 0, c.platform)), document.addEventListener("click", eo);
    }), ya(() => {
      document.removeEventListener("click", eo), Ye.clearAll(), la();
    }), (a, o) => (d(), p(Q, null, [
      k(ar, null, {
        filters: W(() => [
          e("div", mn, [
            e("div", _n, [
              e("div", gn, [
                k(T, {
                  name: "search",
                  size: "md",
                  class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                }),
                P(e("input", {
                  "onUpdate:modelValue": o[0] || (o[0] = (t) => Wt.value = t),
                  type: "text",
                  placeholder: r(s)("admin.groups.searchGroups"),
                  class: "input pl-10",
                  onInput: Cs
                }, null, 40, vn), [
                  [L, Wt.value]
                ])
              ]),
              k(re, {
                modelValue: we.platform,
                "onUpdate:modelValue": o[1] || (o[1] = (t) => we.platform = t),
                options: xe.value,
                placeholder: r(s)("admin.groups.allPlatforms"),
                class: "w-44",
                onChange: oe
              }, null, 8, ["modelValue", "options", "placeholder"]),
              k(re, {
                modelValue: we.status,
                "onUpdate:modelValue": o[2] || (o[2] = (t) => we.status = t),
                options: he.value,
                placeholder: r(s)("admin.groups.allStatus"),
                class: "w-40",
                onChange: oe
              }, null, 8, ["modelValue", "options", "placeholder"]),
              r(V).isSimpleMode ? y("", !0) : (d(), le(re, {
                key: 0,
                modelValue: we.is_exclusive,
                "onUpdate:modelValue": o[3] || (o[3] = (t) => we.is_exclusive = t),
                options: Pe.value,
                placeholder: r(s)("admin.groups.allGroups"),
                class: "w-44",
                onChange: oe
              }, null, 8, ["modelValue", "options", "placeholder"]))
            ]),
            e("div", bn, [
              e("button", {
                onClick: oe,
                disabled: se.value,
                class: "btn btn-secondary",
                title: r(s)("common.refresh")
              }, [
                k(T, {
                  name: "refresh",
                  size: "md",
                  class: I(se.value ? "animate-spin" : "")
                }, null, 8, ["class"])
              ], 8, fn),
              e("div", {
                class: "relative",
                ref_key: "columnDropdownRef",
                ref: te
              }, [
                e("button", {
                  onClick: o[4] || (o[4] = (t) => B.value = !B.value),
                  class: "btn btn-secondary",
                  title: r(s)("admin.groups.columnSettings")
                }, [
                  k(T, {
                    name: "grid",
                    size: "md",
                    class: "mr-2"
                  }),
                  e("span", hn, l(r(s)("admin.groups.columnSettings")), 1)
                ], 8, yn),
                B.value ? (d(), p("div", xn, [
                  (d(!0), p(Q, null, ee(Z.value, (t) => (d(), p("button", {
                    key: t.key,
                    onClick: (_) => ye(t.key),
                    class: "flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700"
                  }, [
                    e("span", null, l(t.label), 1),
                    ae(t.key) ? (d(), le(T, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : y("", !0)
                  ], 8, kn))), 128))
                ])) : y("", !0)
              ], 512),
              r(V).isSimpleMode ? y("", !0) : (d(), p("button", {
                key: 0,
                onClick: Ws,
                class: "btn btn-secondary",
                title: r(s)("admin.groups.sortOrder")
              }, [
                k(T, {
                  name: "arrowsUpDown",
                  size: "md",
                  class: "mr-2"
                }),
                K(" " + l(r(s)("admin.groups.sortOrder")), 1)
              ], 8, wn)),
              e("button", {
                onClick: Ha,
                class: "btn btn-primary",
                "data-tour": "groups-create-btn"
              }, [
                k(T, {
                  name: "plus",
                  size: "md",
                  class: "mr-2"
                }),
                K(" " + l(r(s)("admin.groups.createGroup")), 1)
              ])
            ])
          ])
        ]),
        table: W(() => [
          k(sr, {
            columns: me.value,
            data: U.value,
            loading: se.value,
            "server-side-sort": !0,
            "default-sort-key": "sort_order",
            "default-sort-order": "asc",
            onSort: Rs
          }, {
            "cell-name": W(({ value: t }) => [
              e("span", Cn, l(t), 1)
            ]),
            "cell-id": W(({ value: t }) => [
              e("span", Mn, "#" + l(t), 1)
            ]),
            "cell-platform": W(({ value: t }) => [
              e("span", {
                class: I([
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  t === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : t === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : t === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : t === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : t === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : t === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : t === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : t === "minimax" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" : t === "opencode_go" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                ])
              }, [
                k(Ht, {
                  platform: t,
                  size: "xs"
                }, null, 8, ["platform"]),
                K(" " + l(r(s)("admin.groups.platforms." + t, r(tt)(t))), 1)
              ], 2)
            ]),
            "cell-billing_type": W(({ row: t }) => {
              var _, g, h;
              return [
                e("div", $n, [
                  e("span", {
                    class: I([
                      "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
                      t.subscription_type === "subscription" ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    ])
                  }, l(t.subscription_type === "subscription" ? r(s)("admin.groups.subscription.subscription") : r(s)("admin.groups.subscription.standard")), 3),
                  t.subscription_type === "subscription" ? (d(), p("div", Rn, [
                    t.daily_limit_usd || t.weekly_limit_usd || t.monthly_limit_usd ? (d(), p("div", Pn, [
                      t.daily_limit_usd ? (d(), p("span", En, [
                        Ae.value ? (d(), p("span", Sn, "—")) : (d(), p("span", {
                          key: 1,
                          class: I(
                            ws(
                              ((_ = de.value.get(t.id)) == null ? void 0 : _.today_cost) ?? 0,
                              t.daily_limit_usd
                            )
                          )
                        }, l(vt(((g = de.value.get(t.id)) == null ? void 0 : g.today_cost) ?? 0)), 3)),
                        e("span", zn, " / " + l(vt(t.daily_limit_usd)) + "/" + l(r(s)("admin.groups.limitDay")), 1)
                      ])) : y("", !0),
                      t.daily_limit_usd && (t.weekly_limit_usd || t.monthly_limit_usd) ? (d(), p("span", Un, "·")) : y("", !0),
                      t.weekly_limit_usd ? (d(), p("span", Vn, l(vt(t.weekly_limit_usd)) + "/" + l(r(s)("admin.groups.limitWeek")), 1)) : y("", !0),
                      t.weekly_limit_usd && t.monthly_limit_usd ? (d(), p("span", Fn, "·")) : y("", !0),
                      t.monthly_limit_usd ? (d(), p("span", An, l(vt(t.monthly_limit_usd)) + "/" + l(r(s)("admin.groups.limitMonth")), 1)) : y("", !0)
                    ])) : (d(), p("span", Tn, l(r(s)("admin.groups.subscription.noLimit")), 1)),
                    e("div", On, [
                      K(l(r(s)("admin.groups.usageTotal")) + " ", 1),
                      e("span", Ln, l(Ae.value ? "—" : vt(((h = de.value.get(t.id)) == null ? void 0 : h.total_cost) ?? 0)), 1)
                    ])
                  ])) : y("", !0)
                ])
              ];
            }),
            "cell-rate_multiplier": W(({ value: t }) => [
              e("span", Gn, l(t) + "x", 1)
            ]),
            "cell-is_exclusive": W(({ value: t }) => [
              e("span", {
                class: I(["badge", t ? "badge-primary" : "badge-gray"])
              }, l(t ? r(s)("admin.groups.exclusive") : r(s)("admin.groups.public")), 3)
            ]),
            "cell-account_count": W(({ row: t }) => [
              e("div", qn, [
                e("div", null, [
                  e("span", Dn, l(r(s)("admin.groups.accountsAvailable")), 1),
                  e("span", Nn, l(t.active_account_count || 0), 1),
                  e("span", In, l(r(s)("admin.groups.accountsUnit")), 1)
                ]),
                t.rate_limited_account_count ? (d(), p("div", jn, [
                  e("span", Kn, l(r(s)("admin.groups.accountsRateLimited")), 1),
                  e("span", Hn, l(t.rate_limited_account_count), 1),
                  e("span", Bn, l(r(s)("admin.groups.accountsUnit")), 1)
                ])) : y("", !0),
                e("div", null, [
                  e("span", Wn, l(r(s)("admin.groups.accountsTotal")), 1),
                  e("span", Yn, l(t.account_count || 0), 1),
                  e("span", Qn, l(r(s)("admin.groups.accountsUnit")), 1)
                ])
              ])
            ]),
            "cell-capacity": W(({ row: t }) => [
              Ee.value.get(t.id) ? (d(), le(Si, {
                key: 0,
                "concurrency-used": Ee.value.get(t.id).concurrencyUsed,
                "concurrency-max": Ee.value.get(t.id).concurrencyMax,
                "sessions-used": Ee.value.get(t.id).sessionsUsed,
                "sessions-max": Ee.value.get(t.id).sessionsMax,
                "rpm-used": Ee.value.get(t.id).rpmUsed,
                "rpm-max": Ee.value.get(t.id).rpmMax
              }, null, 8, ["concurrency-used", "concurrency-max", "sessions-used", "sessions-max", "rpm-used", "rpm-max"])) : (d(), p("span", Xn, "—"))
            ]),
            "cell-usage": W(({ row: t }) => {
              var _, g, h;
              return [
                Ae.value ? (d(), p("div", Jn, "—")) : (d(), p("div", Zn, [
                  e("div", ed, [
                    e("span", td, l(r(s)("admin.groups.usageToday")), 1),
                    e("span", ad, "$" + l(At(((_ = de.value.get(t.id)) == null ? void 0 : _.today_cost) ?? 0)), 1)
                  ]),
                  e("div", od, [
                    e("span", sd, l(r(s)("admin.groups.usageYesterday")), 1),
                    e("span", rd, "$" + l(At(((g = de.value.get(t.id)) == null ? void 0 : g.yesterday_cost) ?? 0)), 1)
                  ]),
                  e("div", ld, [
                    e("span", id, l(r(s)("admin.groups.usageTotal")), 1),
                    e("span", nd, "$" + l(At(((h = de.value.get(t.id)) == null ? void 0 : h.total_cost) ?? 0)), 1)
                  ])
                ]))
              ];
            }),
            "cell-status": W(({ value: t }) => [
              e("span", {
                class: I([
                  "badge",
                  t === "active" ? "badge-success" : "badge-danger"
                ])
              }, l(r(s)("admin.accounts.status." + t)), 3)
            ]),
            "cell-actions": W(({ row: t }) => [
              e("div", dd, [
                e("button", {
                  onClick: (_) => Es(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  k(T, {
                    name: "edit",
                    size: "sm"
                  }),
                  e("span", pd, l(r(s)("common.edit")), 1)
                ], 8, ud),
                r(V).isSimpleMode ? y("", !0) : (d(), p("button", {
                  key: 0,
                  "data-testid": "group-duplicate",
                  title: Ke.has(t.id) ? r(s)("admin.groups.duplicating") : r(s)("admin.groups.duplicate"),
                  disabled: Ke.has(t.id),
                  onClick: (_) => Os(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  k(T, {
                    name: "copy",
                    size: "sm"
                  }),
                  e("span", md, l(Ke.has(t.id) ? r(s)("admin.groups.duplicating") : r(s)("admin.groups.duplicate")), 1)
                ], 8, cd)),
                !r(V).isSimpleMode && t.platform === "composite" ? (d(), p("button", {
                  key: 1,
                  onClick: (_) => Ns(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-cyan-600 dark:hover:bg-dark-700 dark:hover:text-cyan-400"
                }, [
                  k(T, {
                    name: "swap",
                    size: "sm"
                  }),
                  e("span", gd, l(r(s)("admin.groups.compositeRoutes.action")), 1)
                ], 8, _d)) : y("", !0),
                r(V).isSimpleMode ? y("", !0) : (d(), p("button", {
                  key: 2,
                  onClick: (_) => As(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-purple-600 dark:hover:bg-dark-700 dark:hover:text-purple-400"
                }, [
                  k(T, {
                    name: "dollar",
                    size: "sm"
                  }),
                  e("span", bd, l(r(s)("admin.groups.rateMultipliers")), 1)
                ], 8, vd)),
                r(V).isSimpleMode ? y("", !0) : (d(), p("button", {
                  key: 3,
                  onClick: (_) => Ts(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-zo-alert-600 dark:hover:bg-dark-700 dark:hover:text-zo-alert-400"
                }, [
                  k(T, {
                    name: "bolt",
                    size: "sm"
                  }),
                  e("span", yd, l(r(s)("admin.groups.rpmOverrides")), 1)
                ], 8, fd)),
                e("button", {
                  onClick: (_) => Hs(t),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                }, [
                  k(T, {
                    name: "trash",
                    size: "sm"
                  }),
                  e("span", xd, l(r(s)("common.delete")), 1)
                ], 8, hd)
              ])
            ]),
            empty: W(() => [
              k(rr, {
                title: r(s)("admin.groups.noGroupsYet"),
                description: r(s)("admin.groups.createFirstGroup"),
                "action-text": r(s)("admin.groups.createGroup"),
                onAction: Ha
              }, null, 8, ["title", "description", "action-text"])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        pagination: W(() => [
          ie.total > 0 ? (d(), le(ha, {
            key: 0,
            page: ie.page,
            total: ie.total,
            "page-size": ie.page_size,
            "onUpdate:page": Ms,
            "onUpdate:pageSize": $s
          }, null, 8, ["page", "total", "page-size"])) : y("", !0)
        ]),
        _: 1
      }),
      k(yi, {
        show: Yt.value || wt.value,
        mode: A.value,
        title: r(s)(A.value === "edit" ? "admin.groups.editGroup" : "admin.groups.createGroup"),
        ready: A.value === "create" || !!ue.value,
        submitting: it.value,
        onClose: vs,
        onSubmit: bs
      }, {
        default: W(() => [
          e("div", null, [
            k(no, {
              modelValue: i.value.name,
              "onUpdate:modelValue": o[5] || (o[5] = (t) => i.value.name = t),
              i18n: i.value.i18n,
              "onUpdate:i18n": o[6] || (o[6] = (t) => i.value.i18n = t),
              label: r(s)("admin.groups.form.name"),
              field: "name",
              required: "",
              placeholder: A.value === "create" ? r(s)("admin.groups.enterGroupName") : void 0,
              "data-tour": A.value === "edit" ? "edit-group-form-name" : "group-form-name"
            }, null, 8, ["modelValue", "i18n", "label", "placeholder", "data-tour"])
          ]),
          e("div", null, [
            k(no, {
              modelValue: i.value.description,
              "onUpdate:modelValue": o[7] || (o[7] = (t) => i.value.description = t),
              i18n: i.value.i18n,
              "onUpdate:i18n": o[8] || (o[8] = (t) => i.value.i18n = t),
              label: r(s)("admin.groups.form.description"),
              field: "description",
              multiline: "",
              rows: "3",
              placeholder: A.value === "create" ? r(s)("admin.groups.optionalDescription") : void 0
            }, null, 8, ["modelValue", "i18n", "label", "placeholder"])
          ]),
          e("div", null, [
            e("label", kd, l(r(s)("admin.groups.form.platform")), 1),
            k(re, {
              modelValue: i.value.platform,
              "onUpdate:modelValue": o[9] || (o[9] = (t) => i.value.platform = t),
              options: _e.value,
              disabled: A.value === "edit",
              "data-tour": "group-form-platform",
              onChange: fs
            }, null, 8, ["modelValue", "options", "disabled"]),
            e("p", wd, l(r(s)(A.value === "edit" ? "admin.groups.platformNotEditable" : "admin.groups.platformHint")), 1)
          ]),
          r(V).isSimpleMode ? y("", !0) : (d(), p(Q, { key: 0 }, [
            na.value.length > 0 ? (d(), p("div", Cd, [
              e("div", Md, [
                e("label", $d, l(r(s)("admin.groups.copyAccounts.title")), 1),
                e("div", Rd, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Pd, [
                    e("div", Ed, [
                      e("p", Sd, l(r(s)(A.value === "edit" ? "admin.groups.copyAccounts.tooltipEdit" : "admin.groups.copyAccounts.tooltip")), 1),
                      o[83] || (o[83] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              i.value.copy_accounts_from_group_ids.length > 0 ? (d(), p("div", zd, [
                (d(!0), p(Q, null, ee(i.value.copy_accounts_from_group_ids, (t) => {
                  var _;
                  return d(), p("span", {
                    key: t,
                    class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                  }, [
                    K(l(((_ = na.value.find((g) => g.value === t)) == null ? void 0 : _.label) || `#${t}`) + " ", 1),
                    e("button", {
                      type: "button",
                      onClick: (g) => i.value.copy_accounts_from_group_ids = i.value.copy_accounts_from_group_ids.filter(
                        (h) => h !== t
                      ),
                      class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                    }, [
                      k(T, {
                        name: "x",
                        size: "xs"
                      })
                    ], 8, Ud)
                  ]);
                }), 128))
              ])) : y("", !0),
              e("select", {
                class: "input",
                onChange: o[10] || (o[10] = (t) => {
                  const _ = Number(t.target.value);
                  _ && !i.value.copy_accounts_from_group_ids.includes(_) && i.value.copy_accounts_from_group_ids.push(_), t.target.value = "";
                })
              }, [
                e("option", Vd, l(r(s)("admin.groups.copyAccounts.selectPlaceholder")), 1),
                (d(!0), p(Q, null, ee(na.value, (t) => (d(), p("option", {
                  key: t.value,
                  value: t.value,
                  disabled: i.value.copy_accounts_from_group_ids.includes(t.value)
                }, l(t.label), 9, Fd))), 128))
              ], 32),
              e("p", Ad, l(r(s)(A.value === "edit" ? "admin.groups.copyAccounts.hintEdit" : "admin.groups.copyAccounts.hint")), 1)
            ])) : y("", !0),
            e("div", null, [
              e("label", Td, l(r(s)("admin.groups.form.rateMultiplier")), 1),
              P(e("input", {
                "onUpdate:modelValue": o[11] || (o[11] = (t) => i.value.rate_multiplier = t),
                type: "number",
                step: "0.001",
                min: "0.001",
                required: "",
                class: "input",
                "data-tour": "group-form-multiplier"
              }, null, 512), [
                [
                  L,
                  i.value.rate_multiplier,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A.value === "create" ? (d(), p("p", Od, l(r(s)("admin.groups.rateMultiplierHint")), 1)) : y("", !0)
            ]),
            e("div", null, [
              e("label", Ld, l(r(s)("admin.groups.form.rpmLimit")), 1),
              P(e("input", {
                "onUpdate:modelValue": o[12] || (o[12] = (t) => i.value.rpm_limit = t),
                type: "number",
                min: "0",
                step: "1",
                class: "input",
                placeholder: r(s)("admin.groups.form.rpmLimitPlaceholder")
              }, null, 8, Gd), [
                [
                  L,
                  i.value.rpm_limit,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", qd, l(r(s)("admin.groups.form.rpmLimitHint")), 1)
            ]),
            r(It)(i.value.platform) ? (d(), le(Wi, {
              key: 1,
              ref: us,
              "id-prefix": "create-group-reasoning",
              platform: i.value.platform,
              "max-effort": i.value.max_reasoning_effort,
              "onUpdate:maxEffort": o[13] || (o[13] = (t) => i.value.max_reasoning_effort = t),
              mappings: i.value.reasoning_effort_mappings,
              "onUpdate:mappings": o[14] || (o[14] = (t) => i.value.reasoning_effort_mappings = t)
            }, null, 8, ["platform", "max-effort", "mappings"])) : y("", !0),
            i.value.subscription_type !== "subscription" ? (d(), p("div", {
              key: 2,
              "data-tour": A.value === "create" ? "group-form-exclusive" : void 0
            }, [
              e("div", Nd, [
                e("label", Id, l(r(s)("admin.groups.form.exclusive")), 1),
                e("div", jd, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Kd, [
                    e("div", Hd, [
                      e("p", Bd, l(r(s)("admin.groups.exclusiveTooltip.title")), 1),
                      e("p", Wd, l(r(s)("admin.groups.exclusiveTooltip.description")), 1),
                      e("div", Yd, [
                        e("p", Qd, [
                          e("span", Xd, [
                            k(T, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            K(" " + l(r(s)("admin.groups.exclusiveTooltip.example")), 1)
                          ]),
                          K(" " + l(r(s)("admin.groups.exclusiveTooltip.exampleContent")), 1)
                        ])
                      ]),
                      o[84] || (o[84] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", Jd, [
                e("button", {
                  type: "button",
                  onClick: o[15] || (o[15] = (t) => i.value.is_exclusive = !i.value.is_exclusive),
                  class: I([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    i.value.is_exclusive ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      i.value.is_exclusive ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", Zd, l(i.value.is_exclusive ? r(s)("admin.groups.exclusive") : r(s)("admin.groups.public")), 1)
              ])
            ], 8, Dd)) : y("", !0),
            A.value === "edit" ? (d(), p("div", eu, [
              e("label", tu, l(r(s)("admin.groups.form.status")), 1),
              k(re, {
                modelValue: i.value.status,
                "onUpdate:modelValue": o[16] || (o[16] = (t) => i.value.status = t),
                options: st.value
              }, null, 8, ["modelValue", "options"])
            ])) : y("", !0),
            e("div", au, [
              e("div", null, [
                e("label", ou, l(r(s)("admin.groups.subscription.type")), 1),
                k(re, {
                  modelValue: i.value.subscription_type,
                  "onUpdate:modelValue": o[17] || (o[17] = (t) => i.value.subscription_type = t),
                  options: rt.value,
                  disabled: A.value === "edit"
                }, null, 8, ["modelValue", "options", "disabled"]),
                e("p", su, l(r(s)(A.value === "edit" ? "admin.groups.subscription.typeNotEditable" : "admin.groups.subscription.typeHint")), 1)
              ]),
              i.value.subscription_type === "subscription" ? (d(), p("div", ru, [
                e("div", null, [
                  e("label", lu, l(r(s)("admin.groups.subscription.dailyLimit")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[18] || (o[18] = (t) => i.value.daily_limit_usd = t),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.subscription.noLimit")
                  }, null, 8, iu), [
                    [
                      L,
                      i.value.daily_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", nu, l(r(s)("admin.groups.subscription.weeklyLimit")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[19] || (o[19] = (t) => i.value.weekly_limit_usd = t),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.subscription.noLimit")
                  }, null, 8, du), [
                    [
                      L,
                      i.value.weekly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", uu, l(r(s)("admin.groups.subscription.monthlyLimit")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[20] || (o[20] = (t) => i.value.monthly_limit_usd = t),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.subscription.noLimit")
                  }, null, 8, pu), [
                    [
                      L,
                      i.value.monthly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : y("", !0)
            ]),
            e("div", cu, [
              e("div", mu, [
                e("div", null, [
                  e("label", _u, l(r(s)("admin.groups.modelAllowlist.title")), 1),
                  e("p", gu, l(r(s)("admin.groups.modelAllowlist.hint")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: o[21] || (o[21] = (t) => pe.value.enabled = !pe.value.enabled),
                  class: I([
                    "relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors",
                    pe.value.enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      pe.value.enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              pe.value.enabled ? (d(), p("div", vu, [
                !Ta.value && pe.value.items.length > 0 ? (d(), p("div", bu, [
                  e("span", fu, l(r(s)("admin.groups.modelAllowlist.selectedSummary", {
                    selected: rs.value,
                    total: pe.value.items.length
                  })), 1),
                  e("div", yu, [
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20",
                      onClick: o[22] || (o[22] = (t) => r(Xi)(pe.value))
                    }, l(r(s)("admin.groups.modelAllowlist.selectAll")), 1),
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700",
                      onClick: o[23] || (o[23] = (t) => r(Ji)(pe.value))
                    }, l(r(s)("admin.groups.modelAllowlist.invertSelection")), 1)
                  ])
                ])) : y("", !0),
                e("div", hu, [
                  Ta.value ? (d(), p("p", xu, l(r(s)("admin.groups.modelAllowlist.loading")), 1)) : pe.value.items.length === 0 ? (d(), p("p", ku, l(r(s)("admin.groups.modelAllowlist.empty")), 1)) : y("", !0),
                  (d(!0), p(Q, null, ee(pe.value.items, (t, _) => (d(), p("div", {
                    key: t.id,
                    class: "flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 dark:border-dark-600 dark:bg-dark-800"
                  }, [
                    P(e("input", {
                      "onUpdate:modelValue": (g) => t.selected = g,
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    }, null, 8, wu), [
                      [Re, t.selected]
                    ]),
                    e("span", Cu, [
                      K(l(t.id) + " ", 1),
                      t.id.endsWith("*") ? (d(), p("span", Mu, l(r(s)("admin.groups.modelAllowlist.wildcardTag")), 1)) : y("", !0)
                    ]),
                    e("button", {
                      type: "button",
                      disabled: _ === 0,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (g) => qa(_, _ - 1)
                    }, [
                      k(T, {
                        name: "arrowUp",
                        size: "sm"
                      })
                    ], 8, $u),
                    e("button", {
                      type: "button",
                      disabled: _ === pe.value.items.length - 1,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (g) => qa(_, _ + 1)
                    }, [
                      k(T, {
                        name: "arrowDown",
                        size: "sm"
                      })
                    ], 8, Ru)
                  ]))), 128))
                ]),
                e("div", Pu, [
                  e("div", Eu, [
                    P(e("input", {
                      "onUpdate:modelValue": o[24] || (o[24] = (t) => Oa.value = t),
                      type: "text",
                      placeholder: r(s)("admin.groups.modelAllowlist.customPlaceholder"),
                      class: "min-w-0 flex-1 rounded border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-dark-500 dark:bg-dark-700 dark:text-gray-200",
                      onKeydown: so(_a(Ga, ["prevent"]), ["enter"])
                    }, null, 40, Su), [
                      [L, Oa.value]
                    ]),
                    e("button", {
                      type: "button",
                      class: "rounded bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700",
                      onClick: Ga
                    }, l(r(s)("admin.groups.modelAllowlist.addCustom")), 1)
                  ]),
                  La.value ? (d(), p("p", zu, l(r(s)(La.value)), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            r(sn)(i.value.platform) ? (d(), p("div", Uu, [
              e("label", Vu, l(r(s)(r(Ge)(i.value.platform, "title"))), 1),
              e("p", Fu, l(r(s)(r(Ge)(i.value.platform, "description"))), 1),
              e("div", Au, [
                e("label", Tu, [
                  P(e("input", {
                    "onUpdate:modelValue": o[25] || (o[25] = (t) => i.value.allow_image_generation = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.allow_image_generation]
                  ]),
                  K(" " + l(r(s)(r(Ge)(i.value.platform, "allowImageGeneration"))), 1)
                ]),
                e("label", Ou, [
                  P(e("input", {
                    "onUpdate:modelValue": o[26] || (o[26] = (t) => i.value.image_rate_independent = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.image_rate_independent]
                  ]),
                  K(" " + l(r(s)(r(Ge)(i.value.platform, "independentMultiplier"))), 1)
                ]),
                i.value.allow_image_generation && (i.value.platform === "composite" || i.value.platform === "openai") ? (d(), p("label", Lu, [
                  P(e("input", {
                    "onUpdate:modelValue": o[27] || (o[27] = (t) => i.value.image_count_billing = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.image_count_billing]
                  ]),
                  K(" " + l(r(s)("admin.groups.imagePricing.perImageBilling")), 1)
                ])) : y("", !0)
              ]),
              i.value.image_rate_independent ? (d(), p("div", Gu, [
                e("label", qu, l(r(s)(r(Ge)(i.value.platform, "imageMultiplier"))), 1),
                P(e("input", {
                  "onUpdate:modelValue": o[28] || (o[28] = (t) => i.value.image_rate_multiplier = t),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    L,
                    i.value.image_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : y("", !0),
              e("div", Du, [
                e("div", null, [
                  o[85] || (o[85] = e("label", { class: "input-label" }, "1K ($)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[29] || (o[29] = (t) => i.value.image_price_1k = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(jt)(i.value.platform, "image_price_1k")
                  }, null, 8, Nu), [
                    [
                      L,
                      i.value.image_price_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  o[86] || (o[86] = e("label", { class: "input-label" }, "2K ($)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[30] || (o[30] = (t) => i.value.image_price_2k = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(jt)(i.value.platform, "image_price_2k")
                  }, null, 8, Iu), [
                    [
                      L,
                      i.value.image_price_2k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  o[87] || (o[87] = e("label", { class: "input-label" }, "4K ($)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[31] || (o[31] = (t) => i.value.image_price_4k = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(jt)(i.value.platform, "image_price_4k")
                  }, null, 8, ju), [
                    [
                      L,
                      i.value.image_price_4k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("p", Ku, l(r(s)(r(Ge)(i.value.platform, "modeHint"))), 1),
              e("div", Hu, [
                e("div", Bu, l(r(s)(r(Ge)(i.value.platform, "finalPricePreview"))), 1),
                e("div", Wu, [
                  (d(!0), p(Q, null, ee(ls.value, (t) => (d(), p("div", {
                    key: t.label
                  }, l(t.label) + ": " + l(t.value), 1))), 128))
                ])
              ]),
              i.value.platform === "gemini" && i.value.allow_image_generation ? (d(), p("div", Yu, [
                e("label", Qu, [
                  P(e("input", {
                    "onUpdate:modelValue": o[32] || (o[32] = (t) => i.value.allow_batch_image_generation = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.allow_batch_image_generation]
                  ]),
                  K(" " + l(r(s)("admin.groups.imagePricing.allowBatchImageGeneration")), 1)
                ]),
                e("p", Xu, l(r(s)("admin.groups.imagePricing.batchSectionHint")), 1),
                i.value.allow_batch_image_generation ? (d(), p("div", Ju, [
                  e("div", null, [
                    e("label", Zu, l(r(s)("admin.groups.imagePricing.batchDiscountMultiplier")), 1),
                    P(e("input", {
                      "onUpdate:modelValue": o[33] || (o[33] = (t) => i.value.batch_image_discount_multiplier = t),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.5"
                    }, null, 512), [
                      [
                        L,
                        i.value.batch_image_discount_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", ep, l(r(s)("admin.groups.imagePricing.batchHoldMultiplier")), 1),
                    P(e("input", {
                      "onUpdate:modelValue": o[34] || (o[34] = (t) => i.value.batch_image_hold_multiplier = t),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.6"
                    }, null, 512), [
                      [
                        L,
                        i.value.batch_image_hold_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : y("", !0)
              ])) : i.value.platform !== "gemini" ? (d(), p("p", tp, l(r(s)("admin.groups.imagePricing.batchGeminiOnlyHint")), 1)) : y("", !0)
            ])) : y("", !0),
            r(nn)(i.value.platform) ? (d(), p("div", ap, [
              e("label", op, l(r(s)(r(Ze)("title"))), 1),
              e("p", sp, l(r(s)(r(Ze)("description"))), 1),
              e("div", rp, [
                e("label", lp, [
                  P(e("input", {
                    "onUpdate:modelValue": o[35] || (o[35] = (t) => i.value.video_rate_independent = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.video_rate_independent]
                  ]),
                  K(" " + l(r(s)(r(Ze)("independentMultiplier"))), 1)
                ])
              ]),
              i.value.video_rate_independent ? (d(), p("div", ip, [
                e("label", np, l(r(s)(r(Ze)("videoMultiplier"))), 1),
                P(e("input", {
                  "onUpdate:modelValue": o[36] || (o[36] = (t) => i.value.video_rate_multiplier = t),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    L,
                    i.value.video_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : y("", !0),
              e("div", dp, [
                e("div", null, [
                  o[88] || (o[88] = e("label", { class: "input-label" }, "480p ($/s)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[37] || (o[37] = (t) => i.value.video_price_480p = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(Kt)(i.value.platform, "video_price_480p")
                  }, null, 8, up), [
                    [
                      L,
                      i.value.video_price_480p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  o[89] || (o[89] = e("label", { class: "input-label" }, "720p ($/s)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[38] || (o[38] = (t) => i.value.video_price_720p = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(Kt)(i.value.platform, "video_price_720p")
                  }, null, 8, pp), [
                    [
                      L,
                      i.value.video_price_720p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  o[90] || (o[90] = e("label", { class: "input-label" }, "1080p ($/s)", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": o[39] || (o[39] = (t) => i.value.video_price_1080p = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: r(Kt)(i.value.platform, "video_price_1080p")
                  }, null, 8, cp), [
                    [
                      L,
                      i.value.video_price_1080p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("div", mp, [
                e("p", _p, l(r(s)("admin.groups.videoPricing.modelOverridesTitle")), 1),
                e("p", gp, l(r(s)("admin.groups.videoPricing.modelOverridesDescription")), 1),
                e("div", vp, [
                  (d(!0), p(Q, null, ee(r(cn)(i.value.video_model_prices), (t) => (d(), p("div", {
                    key: t.key,
                    class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,7rem))] sm:items-end"
                  }, [
                    e("div", bp, l(t.label), 1),
                    (d(!0), p(Q, null, ee(r(ko), (_) => (d(), p("label", {
                      key: _.key,
                      class: "block"
                    }, [
                      e("span", fp, l(_.label) + " ($/s) ", 1),
                      P(e("input", {
                        "onUpdate:modelValue": (g) => i.value.video_model_prices[t.key][_.key] = g,
                        type: "number",
                        step: "0.001",
                        min: "0",
                        class: "input",
                        "data-testid": `create-grok-video-price-${t.key}-${_.key}`
                      }, null, 8, yp), [
                        [
                          L,
                          i.value.video_model_prices[t.key][_.key],
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]))), 128))
                  ]))), 128))
                ])
              ]),
              e("p", hp, l(r(s)(r(Ze)("modeHint"))), 1),
              e("div", xp, [
                e("div", kp, l(r(s)(r(Ze)("finalPricePreview"))), 1),
                e("div", wp, [
                  (d(!0), p(Q, null, ee(is.value, (t) => (d(), p("div", {
                    key: t.label
                  }, l(t.label) + ": " + l(t.value), 1))), 128))
                ])
              ])
            ])) : y("", !0),
            i.value.subscription_type === "subscription" ? (d(), p("div", Cp, [
              e("div", Mp, [
                e("label", $p, [
                  P(e("input", {
                    "onUpdate:modelValue": o[40] || (o[40] = (t) => i.value.peak_rate_enabled = t),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Re, i.value.peak_rate_enabled]
                  ]),
                  e("span", null, l(r(s)("admin.groups.peakRate.enable")), 1)
                ])
              ]),
              i.value.peak_rate_enabled ? (d(), p("div", Rp, [
                e("div", null, [
                  e("label", Pp, l(r(s)("admin.groups.peakRate.peakStart")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[41] || (o[41] = (t) => i.value.peak_start = t),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [L, i.value.peak_start]
                  ])
                ]),
                e("div", null, [
                  e("label", Ep, l(r(s)("admin.groups.peakRate.peakEnd")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[42] || (o[42] = (t) => i.value.peak_end = t),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [L, i.value.peak_end]
                  ])
                ]),
                e("div", null, [
                  e("label", Sp, l(r(s)("admin.groups.peakRate.peakMultiplier")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[43] || (o[43] = (t) => i.value.peak_rate_multiplier = t),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: "1",
                    title: r(s)("admin.groups.peakRate.multiplierHint")
                  }, null, 8, zp), [
                    [
                      L,
                      i.value.peak_rate_multiplier,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : y("", !0)
            ])) : y("", !0),
            r(et)(i.value.platform) ? (d(), p("div", Up, [
              e("label", Vp, [
                P(e("input", {
                  "onUpdate:modelValue": o[44] || (o[44] = (t) => i.value.profit_control_enabled = t),
                  type: "checkbox",
                  class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }, null, 512), [
                  [Re, i.value.profit_control_enabled]
                ]),
                e("span", null, l(r(s)("admin.groups.profitControl.enable")), 1)
              ]),
              e("p", Fp, l(i.value.profit_control_enabled ? r(s)("admin.groups.profitControl.enabledHint") : r(s)("admin.groups.profitControl.disabledHint")), 1),
              i.value.profit_control_enabled ? (d(), p("div", Ap, [
                e("div", null, [
                  e("label", Tp, l(r(s)("admin.groups.profitControl.minMargin")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[45] || (o[45] = (t) => i.value.profit_min_margin_percent = t),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: r(s)("admin.groups.profitControl.minMarginHint")
                  }, null, 8, Op), [
                    [
                      L,
                      i.value.profit_min_margin_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Lp, l(r(s)("admin.groups.profitControl.safetyBuffer")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[46] || (o[46] = (t) => i.value.profit_safety_buffer_percent = t),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: r(s)("admin.groups.profitControl.safetyBufferHint")
                  }, null, 8, Gp), [
                    [
                      L,
                      i.value.profit_safety_buffer_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : y("", !0)
            ])) : y("", !0),
            i.value.platform === "antigravity" ? (d(), p("div", qp, [
              e("div", Dp, [
                e("label", Np, l(r(s)("admin.groups.supportedScopes.title")), 1),
                e("div", Ip, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", jp, [
                    e("div", Kp, [
                      e("p", Hp, l(r(s)("admin.groups.supportedScopes.tooltip")), 1),
                      o[91] || (o[91] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", Bp, [
                e("label", Wp, [
                  e("input", {
                    type: "checkbox",
                    checked: i.value.supported_model_scopes.includes("claude"),
                    onChange: o[47] || (o[47] = (t) => da("claude")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, Yp),
                  e("span", Qp, l(r(s)("admin.groups.supportedScopes.claude")), 1)
                ]),
                e("label", Xp, [
                  e("input", {
                    type: "checkbox",
                    checked: i.value.supported_model_scopes.includes("gemini_text"),
                    onChange: o[48] || (o[48] = (t) => da("gemini_text")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, Jp),
                  e("span", Zp, l(r(s)("admin.groups.supportedScopes.geminiText")), 1)
                ]),
                e("label", ec, [
                  e("input", {
                    type: "checkbox",
                    checked: i.value.supported_model_scopes.includes("gemini_image"),
                    onChange: o[49] || (o[49] = (t) => da("gemini_image")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, tc),
                  e("span", ac, l(r(s)("admin.groups.supportedScopes.geminiImage")), 1)
                ])
              ]),
              e("p", oc, l(r(s)("admin.groups.supportedScopes.hint")), 1)
            ])) : y("", !0),
            i.value.platform === "antigravity" ? (d(), p("div", sc, [
              e("div", rc, [
                e("label", lc, l(r(s)("admin.groups.mcpXml.title")), 1),
                e("div", ic, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", nc, [
                    e("div", dc, [
                      e("p", uc, l(r(s)("admin.groups.mcpXml.tooltip")), 1),
                      o[92] || (o[92] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", pc, [
                e("button", {
                  type: "button",
                  onClick: o[50] || (o[50] = (t) => i.value.mcp_xml_inject = !i.value.mcp_xml_inject),
                  class: I([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    i.value.mcp_xml_inject ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      i.value.mcp_xml_inject ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", cc, l(i.value.mcp_xml_inject ? r(s)("admin.groups.mcpXml.enabled") : r(s)("admin.groups.mcpXml.disabled")), 1)
              ])
            ])) : y("", !0),
            i.value.platform === "anthropic" ? (d(), p("div", mc, [
              e("div", _c, [
                e("label", gc, l(r(s)("admin.groups.claudeCode.title")), 1),
                e("div", vc, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", bc, [
                    e("div", fc, [
                      e("p", yc, l(r(s)("admin.groups.claudeCode.tooltip")), 1),
                      o[93] || (o[93] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", hc, [
                e("button", {
                  type: "button",
                  onClick: o[51] || (o[51] = (t) => i.value.claude_code_only = !i.value.claude_code_only),
                  class: I([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    i.value.claude_code_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      i.value.claude_code_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", xc, l(i.value.claude_code_only ? r(s)("admin.groups.claudeCode.enabled") : r(s)("admin.groups.claudeCode.disabled")), 1)
              ]),
              i.value.claude_code_only ? (d(), p("div", kc, [
                e("label", wc, l(r(s)("admin.groups.claudeCode.fallbackGroup")), 1),
                k(re, {
                  modelValue: i.value.fallback_group_id,
                  "onUpdate:modelValue": o[52] || (o[52] = (t) => i.value.fallback_group_id = t),
                  options: os.value,
                  placeholder: r(s)("admin.groups.claudeCode.noFallback")
                }, null, 8, ["modelValue", "options", "placeholder"]),
                e("p", Cc, l(r(s)("admin.groups.claudeCode.fallbackHint")), 1)
              ])) : y("", !0)
            ])) : y("", !0),
            i.value.platform === "openai" ? (d(), p("div", Mc, [
              e("h4", $c, l(r(s)("admin.groups.webSearchPricing.title")), 1),
              e("div", null, [
                e("label", Rc, l(r(s)("admin.groups.webSearchPricing.pricePerCall")), 1),
                P(e("input", {
                  "onUpdate:modelValue": o[53] || (o[53] = (t) => i.value.web_search_price_per_call = t),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  placeholder: "0.01",
                  class: "input"
                }, null, 512), [
                  [
                    L,
                    i.value.web_search_price_per_call,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", Pc, l(r(s)("admin.groups.webSearchPricing.pricePerCallHint")), 1),
                e("div", Ec, l(r(s)("admin.groups.webSearchPricing.finalPricePreview", {
                  price: ns.value
                })), 1)
              ])
            ])) : y("", !0),
            e("div", Sc, [
              e("div", zc, [
                e("div", null, [
                  e("h4", Uc, l(r(s)("admin.groups.modelPricing.title")), 1),
                  e("p", Vc, l(r(s)("admin.groups.modelPricing.description")), 1)
                ]),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: o[54] || (o[54] = (t) => m(i.value.model_pricing))
                }, [
                  k(T, {
                    name: "plus",
                    size: "sm",
                    class: "mr-1"
                  }),
                  K(l(r(s)("admin.groups.modelPricing.add")), 1)
                ])
              ]),
              e("label", Fc, [
                P(e("input", {
                  "onUpdate:modelValue": o[55] || (o[55] = (t) => i.value.long_context_pricing_enabled = t),
                  type: "checkbox",
                  class: "mt-0.5"
                }, null, 512), [
                  [Re, i.value.long_context_pricing_enabled]
                ]),
                e("span", null, [
                  e("span", Ac, l(r(s)("admin.groups.modelPricing.longContext")), 1),
                  e("span", Tc, l(r(s)("admin.groups.modelPricing.longContextHint")), 1)
                ])
              ]),
              e("div", Oc, [
                (d(!0), p(Q, null, ee(i.value.model_pricing, (t, _) => (d(), le(ir, {
                  key: _,
                  entry: t,
                  platform: i.value.platform,
                  "hide-token-intervals": "",
                  onUpdate: (g) => i.value.model_pricing[_] = g,
                  onRemove: (g) => i.value.model_pricing.splice(_, 1)
                }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
              ])
            ]),
            i.value.platform === "grok" ? (d(), p("div", Lc, [
              e("h4", Gc, l(r(s)("admin.groups.explicitPricing.title")), 1),
              e("p", qc, l(r(s)("admin.groups.explicitPricing.description")), 1),
              e("div", Dc, [
                e("div", null, [
                  e("label", Nc, l(r(s)("admin.groups.explicitPricing.searchPricePer1k")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[56] || (o[56] = (t) => i.value.search_price_per_1k = t),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.explicitPricing.pricePlaceholder"),
                    "data-testid": "create-search-price"
                  }, null, 8, Ic), [
                    [
                      L,
                      i.value.search_price_per_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", jc, l(r(s)("admin.groups.voicePricing.audioRealtimePerMin")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[57] || (o[57] = (t) => i.value.audio_realtime_price_per_min = t),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-realtime-price"
                  }, null, 8, Kc), [
                    [
                      L,
                      i.value.audio_realtime_price_per_min,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Hc, l(r(s)("admin.groups.voicePricing.audioTtsPerMillionChars")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[58] || (o[58] = (t) => i.value.audio_tts_price_per_million_chars = t),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-tts-price"
                  }, null, 8, Bc), [
                    [
                      L,
                      i.value.audio_tts_price_per_million_chars,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Wc, l(r(s)("admin.groups.voicePricing.audioSttPerHour")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[59] || (o[59] = (t) => i.value.audio_stt_price_per_hour = t),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: r(s)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-stt-price"
                  }, null, 8, Yc), [
                    [
                      L,
                      i.value.audio_stt_price_per_hour,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])
            ])) : y("", !0),
            i.value.platform === "openai" ? (d(), p("div", Qc, [
              e("h4", Xc, l(r(s)("admin.groups.openaiLive.title")), 1),
              e("div", Jc, [
                e("label", Zc, l(r(s)("admin.groups.openaiLive.allow")), 1),
                e("button", {
                  type: "button",
                  onClick: o[60] || (o[60] = (t) => hs("create")),
                  class: I([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    i.value.allow_live ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", i.value.allow_live ? "translate-x-6" : "translate-x-1"])
                  }, null, 2)
                ], 2)
              ]),
              e("p", em, l(r(s)("admin.groups.openaiLive.hint")), 1)
            ])) : y("", !0),
            i.value.platform === "openai" ? (d(), p("div", tm, [
              e("h4", am, l(r(s)("admin.groups.openaiMessages.title")), 1),
              e("div", om, [
                e("label", sm, l(r(s)("admin.groups.openaiMessages.allowDispatch")), 1),
                e("button", {
                  type: "button",
                  onClick: o[61] || (o[61] = (t) => i.value.allow_messages_dispatch = !i.value.allow_messages_dispatch),
                  class: I([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    i.value.allow_messages_dispatch ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      i.value.allow_messages_dispatch ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("p", rm, l(r(s)("admin.groups.openaiMessages.allowDispatchHint")), 1),
              i.value.allow_messages_dispatch ? (d(), p("div", lm, [
                e("div", im, [
                  e("div", nm, [
                    e("div", dm, [
                      o[94] || (o[94] = e("div", { class: "h-2 w-2 rounded-full bg-blue-500" }, null, -1)),
                      e("label", um, l(r(s)("admin.groups.openaiMessages.familyMappingTitle")), 1)
                    ]),
                    e("p", pm, l(r(s)("admin.groups.openaiMessages.familyMappingHint")), 1)
                  ]),
                  e("div", cm, [
                    e("div", mm, [
                      e("div", null, [
                        e("label", _m, l(r(s)("admin.groups.openaiMessages.opusModel")), 1),
                        P(e("input", {
                          "onUpdate:modelValue": o[62] || (o[62] = (t) => i.value.opus_mapped_model = t),
                          type: "text",
                          placeholder: r(s)("admin.groups.openaiMessages.opusModelPlaceholder"),
                          class: "input"
                        }, null, 8, gm), [
                          [L, i.value.opus_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", vm, l(r(s)("admin.groups.openaiMessages.sonnetModel")), 1),
                        P(e("input", {
                          "onUpdate:modelValue": o[63] || (o[63] = (t) => i.value.sonnet_mapped_model = t),
                          type: "text",
                          placeholder: r(s)("admin.groups.openaiMessages.sonnetModelPlaceholder"),
                          class: "input"
                        }, null, 8, bm), [
                          [L, i.value.sonnet_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", fm, l(r(s)("admin.groups.openaiMessages.haikuModel")), 1),
                        P(e("input", {
                          "onUpdate:modelValue": o[64] || (o[64] = (t) => i.value.haiku_mapped_model = t),
                          type: "text",
                          placeholder: r(s)("admin.groups.openaiMessages.haikuModelPlaceholder"),
                          class: "input"
                        }, null, 8, ym), [
                          [L, i.value.haiku_mapped_model]
                        ])
                      ])
                    ])
                  ])
                ]),
                e("div", hm, [
                  e("div", xm, [
                    e("div", km, [
                      e("div", null, [
                        e("div", wm, [
                          o[95] || (o[95] = e("div", { class: "h-2 w-2 rounded-full bg-primary-500" }, null, -1)),
                          e("label", Cm, l(r(s)("admin.groups.openaiMessages.exactMappingTitle")), 1)
                        ]),
                        e("p", Mm, l(r(s)("admin.groups.openaiMessages.exactMappingHint")), 1)
                      ])
                    ])
                  ]),
                  e("div", $m, [
                    i.value.exact_model_mappings.length === 0 ? (d(), p("div", Rm, [
                      e("span", null, l(r(s)("admin.groups.openaiMessages.noExactMappings")), 1),
                      e("button", {
                        type: "button",
                        onClick: Da,
                        class: "flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, [
                        k(T, {
                          name: "plus",
                          size: "sm"
                        }),
                        K(" " + l(r(s)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ])) : (d(), p("div", Pm, [
                      (d(!0), p(Q, null, ee(i.value.exact_model_mappings, (t) => (d(), p("div", {
                        key: cs(t),
                        class: "group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-dark-600 dark:bg-dark-700 dark:hover:border-primary-700"
                      }, [
                        e("div", Em, [
                          e("div", Sm, [
                            e("div", null, [
                              e("label", zm, l(r(s)("admin.groups.openaiMessages.claudeModel")), 1),
                              P(e("input", {
                                "onUpdate:modelValue": (_) => t.claude_model = _,
                                type: "text",
                                placeholder: r(s)(
                                  "admin.groups.openaiMessages.claudeModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Um), [
                                [L, t.claude_model]
                              ])
                            ]),
                            e("div", Vm, [
                              k(T, {
                                name: "arrowRight",
                                size: "sm",
                                class: "transition-transform group-hover:translate-x-1"
                              })
                            ]),
                            e("div", null, [
                              e("label", Fm, l(r(s)("admin.groups.openaiMessages.targetModel")), 1),
                              P(e("input", {
                                "onUpdate:modelValue": (_) => t.target_model = _,
                                type: "text",
                                placeholder: r(s)(
                                  "admin.groups.openaiMessages.targetModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Am), [
                                [L, t.target_model]
                              ])
                            ])
                          ]),
                          e("button", {
                            type: "button",
                            onClick: (_) => ps(t),
                            class: "mt-6 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            title: r(s)("admin.groups.openaiMessages.removeExactMapping")
                          }, [
                            k(T, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, Tm)
                        ])
                      ]))), 128)),
                      e("button", {
                        type: "button",
                        onClick: Da,
                        class: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-3 text-sm font-medium text-gray-500 transition-all hover:border-primary-300 hover:bg-primary-50/50 hover:text-primary-600 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-primary-800 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
                      }, [
                        k(T, {
                          name: "plus",
                          size: "sm"
                        }),
                        K(" " + l(r(s)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ]))
                  ])
                ])
              ])) : y("", !0)
            ])) : y("", !0),
            ["openai", "antigravity", "anthropic", "gemini"].includes(
              i.value.platform
            ) ? (d(), p("div", Om, [
              e("h4", Lm, l(r(s)("admin.groups.accountFilters.title")), 1),
              e("div", Gm, [
                e("div", null, [
                  e("label", qm, l(r(s)("admin.groups.accountFilters.oauthOnly")), 1),
                  e("p", Dm, l(i.value.require_oauth_only ? r(s)("admin.groups.accountFilters.oauthOnlyEnabled") : r(s)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: o[65] || (o[65] = (t) => i.value.require_oauth_only = !i.value.require_oauth_only),
                  class: I([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    i.value.require_oauth_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      i.value.require_oauth_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("div", Nm, [
                e("div", null, [
                  e("label", Im, l(r(s)("admin.groups.accountFilters.privacySetOnly")), 1),
                  e("p", jm, l(i.value.require_privacy_set ? r(s)("admin.groups.accountFilters.privacySetOnlyEnabled") : r(s)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: o[66] || (o[66] = (t) => i.value.require_privacy_set = !i.value.require_privacy_set),
                  class: I([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    i.value.require_privacy_set ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      i.value.require_privacy_set ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ])
            ])) : y("", !0),
            ["anthropic", "antigravity"].includes(i.value.platform) && i.value.subscription_type !== "subscription" ? (d(), p("div", Km, [
              e("label", Hm, l(r(s)("admin.groups.invalidRequestFallback.title")), 1),
              k(re, {
                modelValue: i.value.fallback_group_id_on_invalid_request,
                "onUpdate:modelValue": o[67] || (o[67] = (t) => i.value.fallback_group_id_on_invalid_request = t),
                options: ss.value,
                placeholder: r(s)("admin.groups.invalidRequestFallback.noFallback")
              }, null, 8, ["modelValue", "options", "placeholder"]),
              e("p", Bm, l(r(s)("admin.groups.invalidRequestFallback.hint")), 1)
            ])) : y("", !0),
            i.value.platform === "anthropic" ? (d(), p("div", Wm, [
              e("div", Ym, [
                e("label", Qm, l(r(s)("admin.groups.modelRouting.title")), 1),
                e("div", Xm, [
                  k(T, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Jm, [
                    e("div", Zm, [
                      e("p", e0, l(r(s)("admin.groups.modelRouting.tooltip")), 1),
                      o[96] || (o[96] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", t0, [
                e("button", {
                  type: "button",
                  onClick: o[68] || (o[68] = (t) => i.value.model_routing_enabled = !i.value.model_routing_enabled),
                  class: I([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    i.value.model_routing_enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: I([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      i.value.model_routing_enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", a0, l(i.value.model_routing_enabled ? r(s)("admin.groups.modelRouting.enabled") : r(s)("admin.groups.modelRouting.disabled")), 1)
              ]),
              i.value.model_routing_enabled ? (d(), p("p", s0, l(r(s)("admin.groups.modelRouting.noRulesHint")), 1)) : (d(), p("p", o0, l(r(s)("admin.groups.modelRouting.disabledHint")), 1)),
              i.value.model_routing_enabled ? (d(), p("div", r0, [
                (d(!0), p(Q, null, ee(ds.value, (t) => {
                  var _;
                  return d(), p("div", {
                    key: ms(t),
                    class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600"
                  }, [
                    e("div", l0, [
                      e("div", i0, [
                        e("div", null, [
                          e("label", n0, l(r(s)("admin.groups.modelRouting.modelPattern")), 1),
                          P(e("input", {
                            "onUpdate:modelValue": (g) => t.pattern = g,
                            type: "text",
                            class: "input text-sm",
                            placeholder: r(s)("admin.groups.modelRouting.modelPatternPlaceholder")
                          }, null, 8, d0), [
                            [L, t.pattern]
                          ])
                        ]),
                        e("div", null, [
                          e("label", u0, l(r(s)("admin.groups.modelRouting.accounts")), 1),
                          t.accounts.length > 0 ? (d(), p("div", p0, [
                            (d(!0), p(Q, null, ee(t.accounts, (g) => (d(), p("span", {
                              key: g.id,
                              class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                            }, [
                              K(l(g.name) + " ", 1),
                              e("button", {
                                type: "button",
                                onClick: (h) => Oo(t, g.id, A.value === "edit"),
                                class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                              }, [
                                k(T, {
                                  name: "x",
                                  size: "xs"
                                })
                              ], 8, c0)
                            ]))), 128))
                          ])) : y("", !0),
                          e("div", m0, [
                            P(e("input", {
                              "onUpdate:modelValue": (g) => We.value[gt(t)] = g,
                              type: "text",
                              class: "input text-sm",
                              placeholder: r(s)(
                                "admin.groups.modelRouting.searchAccountPlaceholder"
                              ),
                              onInput: (g) => Ao(t, A.value === "edit"),
                              onFocus: (g) => qo(t, A.value === "edit")
                            }, null, 40, _0), [
                              [
                                L,
                                We.value[gt(t)]
                              ]
                            ]),
                            Le.value[gt(t)] && ((_ = Oe.value[gt(t)]) == null ? void 0 : _.length) > 0 ? (d(), p("div", g0, [
                              (d(!0), p(Q, null, ee(Oe.value[gt(t)], (g) => (d(), p("button", {
                                key: g.id,
                                type: "button",
                                onClick: (h) => To(t, g, A.value === "edit"),
                                class: I(["w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700", {
                                  "opacity-50": t.accounts.some(
                                    (h) => h.id === g.id
                                  )
                                }]),
                                disabled: t.accounts.some((h) => h.id === g.id)
                              }, [
                                e("span", null, l(g.name), 1),
                                e("span", b0, "#" + l(g.id), 1)
                              ], 10, v0))), 128))
                            ])) : y("", !0)
                          ]),
                          e("p", f0, l(r(s)("admin.groups.modelRouting.accountsHint")), 1)
                        ])
                      ]),
                      e("button", {
                        type: "button",
                        onClick: (g) => gs(t),
                        class: "mt-5 p-1.5 text-gray-400 hover:text-red-500 transition-colors",
                        title: r(s)("admin.groups.modelRouting.removeRule")
                      }, [
                        k(T, {
                          name: "trash",
                          size: "sm"
                        })
                      ], 8, y0)
                    ])
                  ]);
                }), 128))
              ])) : y("", !0),
              i.value.model_routing_enabled ? (d(), p("button", {
                key: 3,
                type: "button",
                onClick: _s,
                class: "mt-3 flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              }, [
                k(T, {
                  name: "plus",
                  size: "sm"
                }),
                K(" " + l(r(s)("admin.groups.modelRouting.addRule")), 1)
              ])) : y("", !0)
            ])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }, 8, ["show", "mode", "title", "ready", "submitting"]),
      k(ro, {
        show: Ct.value,
        title: r(s)("admin.groups.deleteGroup"),
        message: ys.value,
        "confirm-text": r(s)("common.delete"),
        "cancel-text": r(s)("common.cancel"),
        danger: !0,
        onConfirm: Bs,
        onCancel: o[69] || (o[69] = (t) => Ct.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      k(ro, {
        show: Co.value,
        title: r(s)("admin.groups.openaiLive.unsupportedTitle"),
        message: r(s)("admin.groups.openaiLive.unsupportedMessage"),
        "confirm-text": r(s)("admin.groups.openaiLive.enableAnyway"),
        "cancel-text": r(s)("common.cancel"),
        danger: !0,
        onConfirm: xs,
        onCancel: ks
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      k(ht, {
        show: Qt.value,
        title: r(s)("admin.groups.sortOrder"),
        width: "normal",
        onClose: ua
      }, {
        footer: W(() => [
          e("div", R0, [
            e("button", {
              onClick: ua,
              type: "button",
              class: "btn btn-secondary"
            }, l(r(s)("common.cancel")), 1),
            e("button", {
              onClick: Ys,
              disabled: nt.value,
              class: "btn btn-primary"
            }, [
              nt.value ? (d(), p("svg", E0, [...o[97] || (o[97] = [
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
              ])])) : y("", !0),
              K(" " + l(nt.value ? r(s)("common.saving") : r(s)("common.save")), 1)
            ], 8, P0)
          ])
        ]),
        default: W(() => [
          e("div", h0, [
            e("p", x0, l(r(s)("admin.groups.sortOrderHint")), 1),
            k(r(pr), {
              modelValue: He.value,
              "onUpdate:modelValue": o[70] || (o[70] = (t) => He.value = t),
              animation: 200,
              class: "space-y-2"
            }, {
              default: W(() => [
                (d(!0), p(Q, null, ee(He.value, (t) => (d(), p("div", {
                  key: t.id,
                  class: "flex cursor-grab items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md active:cursor-grabbing dark:border-dark-600 dark:bg-dark-700"
                }, [
                  e("div", k0, [
                    k(T, {
                      name: "menu",
                      size: "md"
                    })
                  ]),
                  e("div", w0, [
                    e("div", C0, l(t.name), 1),
                    e("div", M0, [
                      e("span", {
                        class: I([
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                          t.platform === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : t.platform === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : t.platform === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : t.platform === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : t.platform === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : t.platform === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : t.platform === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : t.platform === "minimax" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" : t.platform === "opencode_go" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        ])
                      }, l(r(s)("admin.groups.platforms." + t.platform, r(tt)(t.platform))), 3)
                    ])
                  ]),
                  e("div", $0, "#" + l(t.id), 1)
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      k(ht, {
        show: Zt.value,
        title: ne.value ? r(s)("admin.groups.compositeRoutes.titleWithGroup", {
          name: ne.value.name
        }) : r(s)("admin.groups.compositeRoutes.title"),
        width: "wide",
        onClose: Ja
      }, {
        footer: W(() => [
          e("div", F_, [
            e("button", {
              type: "button",
              class: "btn btn-secondary",
              onClick: Ja
            }, l(r(s)("common.close")), 1)
          ])
        ]),
        default: W(() => [
          e("div", S0, [
            e("section", z0, [
              e("div", U0, [
                e("h3", V0, l(r(s)("admin.groups.compositeRoutes.routes")), 1),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: dt.value,
                  onClick: Ot
                }, [
                  k(T, {
                    name: "refresh",
                    size: "sm",
                    class: I(dt.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, F0)
              ]),
              e("div", A0, [
                dt.value ? (d(), p("div", T0, l(r(s)("common.loading")), 1)) : Rt.value.length === 0 ? (d(), p("div", O0, l(r(s)("admin.groups.compositeRoutes.empty")), 1)) : (d(), p("div", L0, [
                  e("table", G0, [
                    e("thead", q0, [
                      e("tr", null, [
                        e("th", D0, l(r(s)("admin.groups.compositeRoutes.publicModel")), 1),
                        e("th", N0, l(r(s)("admin.groups.compositeRoutes.target")), 1),
                        e("th", I0, l(r(s)("admin.groups.compositeRoutes.scope")), 1),
                        e("th", j0, l(r(s)("admin.groups.columns.actions")), 1)
                      ])
                    ]),
                    e("tbody", K0, [
                      (d(!0), p(Q, null, ee(Rt.value, (t) => (d(), p("tr", {
                        key: t.id,
                        class: I(!t.enabled && "opacity-60")
                      }, [
                        e("td", H0, [
                          e("div", B0, l(t.public_model), 1),
                          e("div", W0, [
                            e("span", Y0, l(Ls(t.match_type)), 1),
                            t.enabled ? y("", !0) : (d(), p("span", Q0, l(r(s)("admin.accounts.status.inactive")), 1))
                          ])
                        ]),
                        e("td", X0, [
                          e("div", J0, [
                            k(Ht, {
                              platform: t.target_platform,
                              size: "xs"
                            }, null, 8, ["platform"]),
                            e("span", null, l(Xa(t.target_platform)), 1)
                          ]),
                          e("div", Z0, l(t.upstream_model || t.public_model), 1)
                        ]),
                        e("td", e_, [
                          e("div", t_, l(Gs(t.endpoint)), 1),
                          e("div", a_, l(r(s)("admin.groups.compositeRoutes.priority")) + ": " + l(t.priority), 1)
                        ]),
                        e("td", o_, [
                          e("div", s_, [
                            e("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400",
                              title: r(s)("common.edit"),
                              onClick: (_) => Is(t)
                            }, [
                              k(T, {
                                name: "edit",
                                size: "sm"
                              })
                            ], 8, r_),
                            e("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              title: r(s)("common.delete"),
                              onClick: (_) => Ks(t)
                            }, [
                              k(T, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, l_)
                          ])
                        ])
                      ], 2))), 128))
                    ])
                  ])
                ]))
              ])
            ]),
            e("section", i_, [
              e("form", {
                class: "space-y-3",
                onSubmit: _a(js, ["prevent"])
              }, [
                e("div", n_, [
                  e("h3", d_, l(ze.value ? r(s)("admin.groups.compositeRoutes.editRoute") : r(s)("admin.groups.compositeRoutes.addRoute")), 1),
                  ze.value ? (d(), p("button", {
                    key: 0,
                    type: "button",
                    class: "text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                    onClick: bt
                  }, l(r(s)("common.cancel")), 1)) : y("", !0)
                ]),
                e("div", null, [
                  e("label", u_, l(r(s)("admin.groups.compositeRoutes.publicModel")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[71] || (o[71] = (t) => q.public_model = t),
                    type: "text",
                    class: "input",
                    required: "",
                    placeholder: "openrouter/gpt-5"
                  }, null, 512), [
                    [
                      L,
                      q.public_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                e("div", p_, [
                  e("div", null, [
                    e("label", c_, l(r(s)("admin.groups.compositeRoutes.matchType")), 1),
                    k(re, {
                      modelValue: q.match_type,
                      "onUpdate:modelValue": o[72] || (o[72] = (t) => q.match_type = t),
                      options: ke.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  e("div", null, [
                    e("label", m_, l(r(s)("admin.groups.compositeRoutes.endpoint")), 1),
                    k(re, {
                      modelValue: q.endpoint,
                      "onUpdate:modelValue": o[73] || (o[73] = (t) => q.endpoint = t),
                      options: Fe.value
                    }, null, 8, ["modelValue", "options"])
                  ])
                ]),
                e("div", __, [
                  e("div", null, [
                    e("label", g_, l(r(s)("admin.groups.compositeRoutes.targetPlatform")), 1),
                    k(re, {
                      modelValue: q.target_platform,
                      "onUpdate:modelValue": o[74] || (o[74] = (t) => q.target_platform = t),
                      options: ot.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  e("div", null, [
                    e("label", v_, l(r(s)("admin.groups.compositeRoutes.priority")), 1),
                    P(e("input", {
                      "onUpdate:modelValue": o[75] || (o[75] = (t) => q.priority = t),
                      type: "number",
                      min: "1",
                      step: "1",
                      class: "input"
                    }, null, 512), [
                      [
                        L,
                        q.priority,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("div", null, [
                  e("label", b_, l(r(s)("admin.groups.compositeRoutes.upstreamModel")), 1),
                  P(e("input", {
                    "onUpdate:modelValue": o[76] || (o[76] = (t) => q.upstream_model = t),
                    type: "text",
                    class: "input",
                    placeholder: "gpt-5"
                  }, null, 512), [
                    [
                      L,
                      q.upstream_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  e("p", f_, l(r(s)("admin.groups.compositeRoutes.upstreamModelHint")), 1)
                ]),
                e("div", null, [
                  e("label", y_, l(r(s)("admin.groups.compositeRoutes.notes")), 1),
                  P(e("textarea", {
                    "onUpdate:modelValue": o[77] || (o[77] = (t) => q.notes = t),
                    rows: "2",
                    class: "input"
                  }, null, 512), [
                    [
                      L,
                      q.notes,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                e("div", h_, [
                  e("label", x_, [
                    P(e("input", {
                      "onUpdate:modelValue": o[78] || (o[78] = (t) => q.enabled = t),
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                    }, null, 512), [
                      [Re, q.enabled]
                    ]),
                    K(" " + l(r(s)("admin.groups.compositeRoutes.enabled")), 1)
                  ]),
                  e("button", {
                    type: "submit",
                    class: "btn btn-primary",
                    disabled: Pt.value
                  }, [
                    Pt.value ? y("", !0) : (d(), le(T, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "mr-2"
                    })),
                    K(" " + l(ze.value ? r(s)("common.update") : r(s)("common.create")), 1)
                  ], 8, k_)
                ])
              ], 32),
              e("div", w_, [
                e("h3", C_, l(r(s)("admin.groups.compositeRoutes.preview")), 1),
                e("div", M_, [
                  P(e("input", {
                    "onUpdate:modelValue": o[79] || (o[79] = (t) => Be.value = t),
                    type: "text",
                    class: "input",
                    placeholder: "openrouter/gpt-5",
                    onKeyup: so(Za, ["enter"])
                  }, null, 544), [
                    [
                      L,
                      Be.value,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  e("div", $_, [
                    k(re, {
                      modelValue: Et.value,
                      "onUpdate:modelValue": o[80] || (o[80] = (t) => Et.value = t),
                      options: Fe.value,
                      class: "min-w-0 flex-1"
                    }, null, 8, ["modelValue", "options"]),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary",
                      disabled: ea.value || !Be.value,
                      onClick: Za
                    }, [
                      k(T, {
                        name: "play",
                        size: "sm"
                      })
                    ], 8, R_)
                  ]),
                  ge.value ? (d(), p("div", P_, [
                    e("div", E_, [
                      e("span", {
                        class: I([
                          "badge",
                          ge.value.matched ? "badge-success" : "badge-danger"
                        ])
                      }, l(ge.value.matched ? r(s)("admin.groups.compositeRoutes.matched") : r(s)("admin.groups.compositeRoutes.notMatched")), 3),
                      e("span", S_, l(qs(
                        ge.value.source
                      )), 1)
                    ]),
                    ge.value.matched ? (d(), p("div", z_, [
                      e("div", null, l(r(s)("admin.groups.compositeRoutes.targetPlatform")) + ": " + l(Xa(
                        ge.value.target_platform
                      )), 1),
                      e("div", U_, l(r(s)("admin.groups.compositeRoutes.upstreamModel")) + ": " + l(ge.value.upstream_model), 1)
                    ])) : (d(), p("div", V_, l(ge.value.reason), 1))
                  ])) : y("", !0)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      k(cl, {
        show: Xt.value,
        group: ka.value,
        onClose: o[81] || (o[81] = (t) => Xt.value = !1),
        onSuccess: oe
      }, null, 8, ["show", "group"]),
      k(ii, {
        show: Jt.value,
        group: wa.value,
        onClose: o[82] || (o[82] = (t) => Jt.value = !1),
        onSuccess: oe
      }, null, 8, ["show", "group"])
    ], 64));
  }
});
export {
  Q_ as default
};
