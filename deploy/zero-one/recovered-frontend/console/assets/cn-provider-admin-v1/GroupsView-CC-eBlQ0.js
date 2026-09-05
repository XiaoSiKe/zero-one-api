import { a0 as Ii, r as D, V as Ai, a1 as Fi, f as Qe, h as ut, e as X, s as g, k as _, l as e, z as Er, A as Ce, a2 as Rr, m as l, J as de, _ as O, q as w, p as q, j as jo, w as Ke, E as F, H as P, u as s, B as E, K as V, F as Z, n as te, L as Ho, N as Ia, G as Bt, a3 as ga, a4 as Ni, b as Ze, W as Li, d as ms, v as gs, c as Go, i as vo, S as Ee } from "./cnProviderAdminLeaf-5Wps3W0p.js";
import { _ as ja, P as Bo, h as jt, b as ge, S as ke, G as Tr, C as qi, g as ji, D as Hi, T as Gi, i as Vr, c as Bi, f as Ea } from "./platforms-DW6q7fkl.js";
const Ki = Ii("onboarding", () => {
  const t = D(null), n = D(null), r = D(null), d = Ai(null);
  function p(M) {
    t.value = M;
  }
  function a(M) {
    n.value = M.nextStep, r.value = M.isCurrentStep;
  }
  function f() {
    n.value = null, r.value = null;
  }
  function k(M) {
    d.value = M ? Fi(M) : null;
  }
  function h() {
    return d.value;
  }
  function b() {
    var M, S;
    return ((S = (M = d.value) == null ? void 0 : M.isActive) == null ? void 0 : S.call(M)) ?? !1;
  }
  function v() {
    t.value && t.value();
  }
  async function $(M = 0) {
    n.value && await n.value(M);
  }
  function I(M) {
    return r.value ? r.value(M) : !1;
  }
  return {
    setReplayCallback: p,
    setControlMethods: a,
    clearControlMethods: f,
    setDriverInstance: k,
    getDriverInstance: h,
    isDriverActive: b,
    replay: v,
    nextStep: $,
    isCurrentStep: I
  };
}), Yi = { class: "empty-state" }, Xi = { class: "mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-dark-800" }, Wi = {
  key: 1,
  class: "empty-state-icon h-10 w-10",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5"
}, Zi = { class: "empty-state-title" }, Ji = { class: "empty-state-description" }, Qi = {
  key: 0,
  class: "mt-6"
}, en = /* @__PURE__ */ Qe({
  __name: "EmptyState",
  props: {
    icon: {},
    title: {},
    description: { default: "" },
    actionText: {},
    actionTo: {},
    actionIcon: { type: Boolean, default: !0 },
    message: {}
  },
  emits: ["action"],
  setup(t) {
    const { t: n } = ut(), r = t, d = X(() => r.title || n("common.noData"));
    return (p, a) => (g(), _("div", Yi, [
      e("div", Xi, [
        Er(p.$slots, "icon", {}, () => [
          t.icon ? (g(), Ce(Rr(t.icon), {
            key: 0,
            class: "empty-state-icon h-10 w-10",
            "aria-hidden": "true"
          })) : (g(), _("svg", Wi, [...a[1] || (a[1] = [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            }, null, -1)
          ])]))
        ])
      ]),
      e("h3", Zi, l(d.value), 1),
      e("p", Ji, l(t.description), 1),
      t.actionText || p.$slots.action ? (g(), _("div", Qi, [
        Er(p.$slots, "action", {}, () => [
          t.actionText ? (g(), Ce(Rr(t.actionTo ? "RouterLink" : "button"), {
            key: 0,
            to: t.actionTo,
            onClick: a[0] || (a[0] = (f) => !t.actionTo && p.$emit("action")),
            class: "btn btn-primary"
          }, {
            default: de(() => [
              t.actionIcon ? (g(), Ce(O, {
                key: 0,
                name: "plus",
                size: "md",
                class: "mr-2"
              })) : w("", !0),
              q(" " + l(t.actionText), 1)
            ]),
            _: 1
          }, 8, ["to"])) : w("", !0)
        ])
      ])) : w("", !0)
    ]));
  }
}), tn = {
  key: 0,
  class: "space-y-4"
}, an = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, on = { class: "font-medium text-gray-900 dark:text-white" }, rn = { class: "text-gray-600 dark:text-gray-400" }, sn = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, nn = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, ln = { class: "flex items-end gap-2" }, dn = { class: "relative flex-1" }, un = ["placeholder"], cn = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, pn = ["onClick"], mn = { class: "text-gray-400" }, gn = { class: "text-gray-900 dark:text-white" }, _n = {
  key: 0,
  class: "text-xs text-gray-400"
}, fn = { class: "w-24" }, hn = ["disabled"], bn = {
  key: 0,
  class: "mt-3 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-dark-600"
}, vn = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, yn = { class: "flex items-center gap-1.5" }, xn = ["disabled"], kn = { class: "ml-auto" }, wn = {
  key: 0,
  class: "flex justify-center py-6"
}, Cn = { key: 1 }, $n = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Mn = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Pn = { key: 1 }, Sn = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, En = { class: "max-h-[420px] overflow-auto" }, Rn = { class: "w-full min-w-max text-sm" }, Tn = { class: "sticky top-0 z-[1]" }, Vn = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, zn = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Un = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Dn = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, On = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, In = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, An = {
  key: 0,
  class: "px-3 py-2 text-left text-xs font-medium text-primary-600 dark:text-primary-400"
}, Fn = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, Nn = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Ln = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, qn = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, jn = ["title"], Hn = { class: "whitespace-nowrap px-3 py-2" }, Gn = { class: "whitespace-nowrap px-3 py-2" }, Bn = ["value", "placeholder", "onChange"], Kn = {
  key: 0,
  class: "whitespace-nowrap px-3 py-2 font-medium text-primary-600 dark:text-primary-400"
}, Yn = { class: "px-2 py-2" }, Xn = ["onClick"], Wn = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, Zn = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, Jn = { class: "ml-auto flex items-center gap-3" }, Qn = ["disabled"], el = /* @__PURE__ */ Qe({
  __name: "GroupRateMultipliersModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(t, { emit: n }) {
    const r = t, d = n, { t: p } = ut(), a = jo(), f = D(!1), k = D(!1), h = D([]), b = D([]), v = D(""), $ = D([]), I = D(!1), M = D(null), S = D(null), C = D(1), U = D(10), T = D(null);
    let Y;
    const L = X(() => {
      var A;
      switch ((A = r.group) == null ? void 0 : A.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), _e = X(() => T.value != null && T.value > 0 && T.value !== 1), ue = (A) => {
      var G;
      const j = A ?? ((G = r.group) == null ? void 0 : G.rate_multiplier) ?? 1;
      return T.value ? parseFloat((j * T.value).toFixed(6)) : j;
    }, xe = X(() => {
      if (b.value.length !== h.value.length) return !0;
      const A = new Map(h.value.map((j) => [j.user_id, j.rate_multiplier ?? null]));
      return b.value.some((j) => A.get(j.user_id) !== (j.rate_multiplier ?? null));
    }), ce = X(() => {
      const A = (C.value - 1) * U.value;
      return b.value.slice(A, A + U.value);
    }), Me = (A) => A.map((j) => ({ ...j })), fe = async () => {
      if (r.group) {
        f.value = !0;
        try {
          const A = await ge.groups.getGroupRateMultipliers(r.group.id);
          h.value = A.filter((j) => j.rate_multiplier != null), b.value = Me(h.value), N();
        } catch (A) {
          a.showError(p("admin.groups.failedToLoad")), console.error("Error loading group rate multipliers:", A);
        } finally {
          f.value = !1;
        }
      }
    }, N = () => {
      const A = Math.max(1, Math.ceil(b.value.length / U.value));
      C.value > A && (C.value = A);
    };
    Ke(() => r.show, (A) => {
      A && r.group && (C.value = 1, T.value = null, v.value = "", $.value = [], M.value = null, S.value = null, fe());
    });
    const ae = (A) => {
      U.value = A, C.value = 1;
    }, se = () => {
      if (clearTimeout(Y), M.value = null, !v.value.trim()) {
        $.value = [], I.value = !1;
        return;
      }
      Y = setTimeout(async () => {
        try {
          const A = await ge.users.list(1, 10, { search: v.value.trim() });
          $.value = A.items, I.value = !0;
        } catch {
          $.value = [];
        }
      }, 300);
    }, he = (A) => {
      M.value = A, v.value = A.email, I.value = !1, $.value = [];
    }, oe = () => {
      if (!M.value || !S.value) return;
      const A = M.value, j = b.value.findIndex((Ue) => Ue.user_id === A.id), G = {
        user_id: A.id,
        user_name: A.username || "",
        user_email: A.email,
        user_notes: A.notes || "",
        user_status: A.status || "active",
        rate_multiplier: S.value,
        rpm_override: null
      };
      j >= 0 ? b.value[j] = G : b.value.push(G), v.value = "", M.value = null, S.value = null, N();
    }, le = (A, j) => {
      const G = b.value.find((He) => He.user_id === A);
      if (!G) return;
      if (j.trim() === "") {
        G.rate_multiplier = null;
        return;
      }
      const Ue = parseFloat(j);
      isNaN(Ue) || (G.rate_multiplier = Ue);
    }, pe = (A) => {
      b.value = b.value.filter((j) => j.user_id !== A), N();
    }, me = () => {
      if (!(!T.value || T.value <= 0)) {
        for (const A of b.value)
          A.rate_multiplier != null && (A.rate_multiplier = parseFloat((A.rate_multiplier * T.value).toFixed(6)));
        T.value = null;
      }
    }, Ie = () => {
      b.value = [];
    }, je = () => {
      b.value = Me(h.value), T.value = null, N();
    }, H = async () => {
      if (r.group) {
        k.value = !0;
        try {
          const A = b.value.filter((j) => j.rate_multiplier != null).map((j) => ({
            user_id: j.user_id,
            rate_multiplier: j.rate_multiplier
          }));
          await ge.groups.batchSetGroupRateMultipliers(r.group.id, A), a.showSuccess(p("admin.groups.rateSaved")), d("success"), d("close");
        } catch (A) {
          a.showError(p("admin.groups.failedToSave")), console.error("Error saving rate multipliers:", A);
        } finally {
          k.value = !1;
        }
      }
    }, J = () => {
      xe.value && (b.value = Me(h.value)), d("close");
    }, ee = () => {
      I.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", ee), (A, j) => (g(), Ce(jt, {
      show: t.show,
      title: s(p)("admin.groups.rateMultipliersTitle"),
      width: "wide",
      onClose: J
    }, {
      default: de(() => [
        t.group ? (g(), _("div", tn, [
          e("div", an, [
            e("span", {
              class: F(["inline-flex items-center gap-1.5", L.value])
            }, [
              P(ja, {
                platform: t.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              q(" " + l(s(p)("admin.groups.platforms." + t.group.platform)), 1)
            ], 2),
            j[5] || (j[5] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", on, l(t.group.name), 1),
            j[6] || (j[6] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", rn, l(s(p)("admin.groups.columns.rateMultiplier")) + ": " + l(t.group.rate_multiplier) + "x ", 1)
          ]),
          e("div", sn, [
            e("h4", nn, l(s(p)("admin.groups.addUserRate")), 1),
            e("div", ln, [
              e("div", dn, [
                E(e("input", {
                  "onUpdate:modelValue": j[0] || (j[0] = (G) => v.value = G),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: s(p)("admin.groups.searchUserPlaceholder"),
                  onInput: se,
                  onFocus: j[1] || (j[1] = (G) => I.value = !0)
                }, null, 40, un), [
                  [V, v.value]
                ]),
                I.value && $.value.length > 0 ? (g(), _("div", cn, [
                  (g(!0), _(Z, null, te($.value, (G) => (g(), _("button", {
                    key: G.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (Ue) => he(G)
                  }, [
                    e("span", mn, "#" + l(G.id), 1),
                    e("span", gn, l(G.username || G.email), 1),
                    G.username ? (g(), _("span", _n, l(G.email), 1)) : w("", !0)
                  ], 8, pn))), 128))
                ])) : w("", !0)
              ]),
              e("div", fn, [
                E(e("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (G) => S.value = G),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "1.0"
                }, null, 512), [
                  [
                    V,
                    S.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !M.value || !S.value,
                onClick: oe
              }, l(s(p)("common.add")), 9, hn)
            ]),
            b.value.length > 0 ? (g(), _("div", bn, [
              e("span", vn, l(s(p)("admin.groups.batchAdjust")), 1),
              e("div", yn, [
                j[7] || (j[7] = e("span", { class: "text-xs text-gray-400" }, "×", -1)),
                E(e("input", {
                  "onUpdate:modelValue": j[3] || (j[3] = (G) => T.value = G),
                  type: "number",
                  step: "0.1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                  placeholder: "0.5"
                }, null, 512), [
                  [
                    V,
                    T.value,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm shrink-0 px-2.5 py-1 text-xs",
                  disabled: !T.value || T.value <= 0,
                  onClick: me
                }, l(s(p)("admin.groups.applyMultiplier")), 9, xn)
              ]),
              e("div", kn, [
                e("button", {
                  type: "button",
                  class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                  onClick: Ie
                }, l(s(p)("admin.groups.clearAll")), 1)
              ])
            ])) : w("", !0)
          ]),
          f.value ? (g(), _("div", wn, [...j[8] || (j[8] = [
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
          ])])) : (g(), _("div", Cn, [
            e("h4", $n, l(s(p)("admin.groups.rateMultipliers")) + " (" + l(b.value.length) + ") ", 1),
            b.value.length === 0 ? (g(), _("div", Mn, l(s(p)("admin.groups.noRateMultipliers")), 1)) : (g(), _("div", Pn, [
              e("div", Sn, [
                e("div", En, [
                  e("table", Rn, [
                    e("thead", Tn, [
                      e("tr", Vn, [
                        e("th", zn, l(s(p)("admin.groups.columns.userEmail")), 1),
                        j[9] || (j[9] = e("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        e("th", Un, l(s(p)("admin.groups.columns.userName")), 1),
                        e("th", Dn, l(s(p)("admin.groups.columns.userNotes")), 1),
                        e("th", On, l(s(p)("admin.groups.columns.userStatus")), 1),
                        e("th", In, l(s(p)("admin.groups.columns.rateMultiplier")), 1),
                        _e.value ? (g(), _("th", An, l(s(p)("admin.groups.finalRate")), 1)) : w("", !0),
                        j[10] || (j[10] = e("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    e("tbody", Fn, [
                      (g(!0), _(Z, null, te(ce.value, (G) => {
                        var Ue;
                        return g(), _("tr", {
                          key: G.user_id,
                          class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                        }, [
                          e("td", Nn, l(G.user_email), 1),
                          e("td", Ln, l(G.user_id), 1),
                          e("td", qn, l(G.user_name || "-"), 1),
                          e("td", {
                            class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                            title: G.user_notes
                          }, l(G.user_notes || "-"), 9, jn),
                          e("td", Hn, [
                            e("span", {
                              class: F([
                                "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                                G.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                              ])
                            }, l(G.user_status), 3)
                          ]),
                          e("td", Gn, [
                            e("input", {
                              type: "number",
                              step: "0.001",
                              min: "0.001",
                              autocomplete: "off",
                              value: G.rate_multiplier ?? "",
                              placeholder: String(((Ue = r.group) == null ? void 0 : Ue.rate_multiplier) ?? 1),
                              class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                              onChange: (He) => le(G.user_id, He.target.value)
                            }, null, 40, Bn)
                          ]),
                          _e.value ? (g(), _("td", Kn, l(ue(G.rate_multiplier)), 1)) : w("", !0),
                          e("td", Yn, [
                            e("button", {
                              type: "button",
                              class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              onClick: (He) => pe(G.user_id)
                            }, [
                              P(O, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, Xn)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              P(Bo, {
                total: b.value.length,
                page: C.value,
                "page-size": U.value,
                "onUpdate:page": j[4] || (j[4] = (G) => C.value = G),
                "onUpdate:pageSize": ae
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          e("div", Wn, [
            xe.value ? (g(), _(Z, { key: 0 }, [
              e("span", Zn, l(s(p)("admin.groups.unsavedChanges")), 1),
              e("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: je
              }, l(s(p)("admin.groups.revertChanges")), 1)
            ], 64)) : w("", !0),
            e("div", Jn, [
              e("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: J
              }, l(s(p)("common.close")), 1),
              xe.value ? (g(), _("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: k.value,
                onClick: H
              }, [
                k.value ? (g(), Ce(O, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : w("", !0),
                q(" " + l(s(p)("common.save")), 1)
              ], 8, Qn)) : w("", !0)
            ])
          ])
        ])) : w("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), tl = /* @__PURE__ */ Ho(el, [["__scopeId", "data-v-da4d2562"]]), al = {
  key: 0,
  class: "space-y-4"
}, ol = { class: "flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm dark:bg-dark-700" }, rl = { class: "font-medium text-gray-900 dark:text-white" }, sl = { class: "text-gray-600 dark:text-gray-400" }, il = { class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600" }, nl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, ll = { class: "flex items-end gap-2" }, dl = { class: "relative flex-1" }, ul = ["placeholder"], cl = {
  key: 0,
  class: "absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-500 dark:bg-dark-700"
}, pl = ["onClick"], ml = { class: "text-gray-400" }, gl = { class: "text-gray-900 dark:text-white" }, _l = {
  key: 0,
  class: "text-xs text-gray-400"
}, fl = { class: "w-24" }, hl = ["disabled"], bl = {
  key: 0,
  class: "mt-3 flex items-center justify-end border-t border-gray-100 pt-3 dark:border-dark-600"
}, vl = ["disabled"], yl = {
  key: 0,
  class: "flex justify-center py-6"
}, xl = { key: 1 }, kl = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, wl = {
  key: 0,
  class: "py-6 text-center text-sm text-gray-400 dark:text-gray-500"
}, Cl = { key: 1 }, $l = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, Ml = { class: "max-h-[420px] overflow-auto" }, Pl = { class: "w-full min-w-max text-sm" }, Sl = { class: "sticky top-0 z-[1]" }, El = { class: "border-b border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-700" }, Rl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Tl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Vl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, zl = { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, Ul = ["title"], Dl = { class: "divide-y divide-gray-100 dark:divide-dark-600" }, Ol = { class: "px-3 py-2 text-gray-600 dark:text-gray-400" }, Il = { class: "whitespace-nowrap px-3 py-2 text-gray-400 dark:text-gray-500" }, Al = { class: "whitespace-nowrap px-3 py-2 text-gray-900 dark:text-white" }, Fl = ["title"], Nl = { class: "whitespace-nowrap px-3 py-2" }, Ll = { class: "whitespace-nowrap px-3 py-2" }, ql = ["value", "onChange"], jl = { class: "px-2 py-2" }, Hl = ["onClick"], Gl = { class: "flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-dark-600" }, Bl = { class: "text-xs text-zo-alert-600 dark:text-zo-alert-400" }, Kl = { class: "ml-auto flex items-center gap-3" }, Yl = ["disabled"], Xl = /* @__PURE__ */ Qe({
  __name: "GroupRPMOverridesModal",
  props: {
    show: { type: Boolean },
    group: {}
  },
  emits: ["close", "success"],
  setup(t, { emit: n }) {
    const r = t, d = n, { t: p } = ut(), a = jo(), f = D(!1), k = D(!1), h = D([]), b = D([]), v = D(""), $ = D([]), I = D(!1), M = D(null), S = D(null), C = D(1), U = D(10);
    let T;
    const Y = X(() => {
      var H;
      switch ((H = r.group) == null ? void 0 : H.platform) {
        case "anthropic":
          return "text-zo-alert-700 dark:text-zo-alert-400";
        case "openai":
          return "text-zo-signal-700 dark:text-zo-signal-400";
        case "antigravity":
          return "text-purple-700 dark:text-purple-400";
        default:
          return "text-blue-700 dark:text-blue-400";
      }
    }), L = X(() => {
      if (b.value.length !== h.value.length) return !0;
      const H = new Map(h.value.map((J) => [J.user_id, J.rpm_override]));
      return b.value.some((J) => H.get(J.user_id) !== J.rpm_override);
    }), _e = X(() => {
      const H = (C.value - 1) * U.value;
      return b.value.slice(H, H + U.value);
    }), ue = (H) => H.map((J) => ({ ...J })), xe = async () => {
      if (r.group) {
        f.value = !0;
        try {
          h.value = await ge.groups.getGroupRPMOverrides(r.group.id), b.value = ue(h.value), ce();
        } catch (H) {
          a.showError(p("admin.groups.failedToLoad")), console.error("Error loading RPM overrides:", H);
        } finally {
          f.value = !1;
        }
      }
    }, ce = () => {
      const H = Math.max(1, Math.ceil(b.value.length / U.value));
      C.value > H && (C.value = H);
    };
    Ke(() => r.show, (H) => {
      H && r.group && (C.value = 1, v.value = "", $.value = [], M.value = null, S.value = null, xe());
    });
    const Me = (H) => {
      U.value = H, C.value = 1;
    }, fe = () => {
      if (clearTimeout(T), M.value = null, !v.value.trim()) {
        $.value = [], I.value = !1;
        return;
      }
      T = setTimeout(async () => {
        try {
          const H = await ge.users.list(1, 10, { search: v.value.trim() });
          $.value = H.items, I.value = !0;
        } catch {
          $.value = [];
        }
      }, 300);
    }, N = (H) => {
      M.value = H, v.value = H.email, I.value = !1, $.value = [];
    }, ae = () => {
      if (!M.value || S.value == null || S.value < 0) return;
      const H = M.value, J = b.value.findIndex((A) => A.user_id === H.id), ee = {
        user_id: H.id,
        user_name: H.username || "",
        user_email: H.email,
        user_notes: H.notes || "",
        user_status: H.status || "active",
        rpm_override: S.value
      };
      J >= 0 ? b.value[J] = ee : b.value.push(ee), v.value = "", M.value = null, S.value = null, ce();
    }, se = (H, J) => {
      const ee = parseInt(J, 10);
      if (isNaN(ee) || ee < 0) return;
      const A = b.value.find((j) => j.user_id === H);
      A && (A.rpm_override = ee);
    }, he = (H) => {
      b.value = b.value.filter((J) => J.user_id !== H), ce();
    }, oe = D(!1), le = async () => {
      if (!(!r.group || oe.value)) {
        oe.value = !0;
        try {
          await ge.groups.clearGroupRPMOverrides(r.group.id), b.value = [], h.value = [], a.showSuccess(p("admin.groups.rpmSaved"));
        } catch (H) {
          a.showError(p("admin.groups.failedToSave")), console.error("Error clearing RPM overrides:", H);
        } finally {
          oe.value = !1;
        }
      }
    }, pe = () => {
      b.value = ue(h.value), ce();
    }, me = async () => {
      if (r.group) {
        k.value = !0;
        try {
          const H = b.value.map((J) => ({
            user_id: J.user_id,
            rpm_override: J.rpm_override
          }));
          await ge.groups.batchSetGroupRPMOverrides(r.group.id, H), a.showSuccess(p("admin.groups.rpmSaved")), d("success"), d("close");
        } catch (H) {
          a.showError(p("admin.groups.failedToSave")), console.error("Error saving RPM overrides:", H);
        } finally {
          k.value = !1;
        }
      }
    }, Ie = () => {
      L.value && (b.value = ue(h.value)), d("close");
    }, je = () => {
      I.value = !1;
    };
    return typeof document < "u" && document.addEventListener("click", je), (H, J) => (g(), Ce(jt, {
      show: t.show,
      title: s(p)("admin.groups.rpmOverridesTitle"),
      width: "wide",
      onClose: Ie
    }, {
      default: de(() => [
        t.group ? (g(), _("div", al, [
          e("div", ol, [
            e("span", {
              class: F(["inline-flex items-center gap-1.5", Y.value])
            }, [
              P(ja, {
                platform: t.group.platform,
                size: "sm"
              }, null, 8, ["platform"]),
              q(" " + l(s(p)("admin.groups.platforms." + t.group.platform)), 1)
            ], 2),
            J[4] || (J[4] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", rl, l(t.group.name), 1),
            J[5] || (J[5] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", sl, l(s(p)("admin.groups.groupRpmDefault")) + ": " + l(t.group.rpm_limit || 0), 1)
          ]),
          e("div", il, [
            e("h4", nl, l(s(p)("admin.groups.addUserRpm")), 1),
            e("div", ll, [
              e("div", dl, [
                E(e("input", {
                  "onUpdate:modelValue": J[0] || (J[0] = (ee) => v.value = ee),
                  type: "text",
                  autocomplete: "off",
                  class: "input w-full",
                  placeholder: s(p)("admin.groups.searchUserPlaceholder"),
                  onInput: fe,
                  onFocus: J[1] || (J[1] = (ee) => I.value = !0)
                }, null, 40, ul), [
                  [V, v.value]
                ]),
                I.value && $.value.length > 0 ? (g(), _("div", cl, [
                  (g(!0), _(Z, null, te($.value, (ee) => (g(), _("button", {
                    key: ee.id,
                    type: "button",
                    class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-600",
                    onClick: (A) => N(ee)
                  }, [
                    e("span", ml, "#" + l(ee.id), 1),
                    e("span", gl, l(ee.username || ee.email), 1),
                    ee.username ? (g(), _("span", _l, l(ee.email), 1)) : w("", !0)
                  ], 8, pl))), 128))
                ])) : w("", !0)
              ]),
              e("div", fl, [
                E(e("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (ee) => S.value = ee),
                  type: "number",
                  step: "1",
                  min: "0",
                  autocomplete: "off",
                  class: "hide-spinner input w-full",
                  placeholder: "100"
                }, null, 512), [
                  [
                    V,
                    S.value,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("button", {
                type: "button",
                class: "btn btn-primary shrink-0",
                disabled: !M.value || S.value == null || S.value < 0,
                onClick: ae
              }, l(s(p)("common.add")), 9, hl)
            ]),
            b.value.length > 0 ? (g(), _("div", bl, [
              e("button", {
                type: "button",
                disabled: oe.value,
                class: "rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
                onClick: le
              }, [
                oe.value ? (g(), Ce(O, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 inline animate-spin"
                })) : w("", !0),
                q(" " + l(s(p)("admin.groups.clearAll")), 1)
              ], 8, vl)
            ])) : w("", !0)
          ]),
          f.value ? (g(), _("div", yl, [...J[6] || (J[6] = [
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
          ])])) : (g(), _("div", xl, [
            e("h4", kl, l(s(p)("admin.groups.rpmOverrides")) + " (" + l(b.value.length) + ") ", 1),
            b.value.length === 0 ? (g(), _("div", wl, l(s(p)("admin.groups.noRpmOverrides")), 1)) : (g(), _("div", Cl, [
              e("div", $l, [
                e("div", Ml, [
                  e("table", Pl, [
                    e("thead", Sl, [
                      e("tr", El, [
                        e("th", Rl, l(s(p)("admin.groups.columns.userEmail")), 1),
                        J[7] || (J[7] = e("th", { class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400" }, "ID", -1)),
                        e("th", Tl, l(s(p)("admin.groups.columns.userName")), 1),
                        e("th", Vl, l(s(p)("admin.groups.columns.userNotes")), 1),
                        e("th", zl, l(s(p)("admin.groups.columns.userStatus")), 1),
                        e("th", {
                          class: "px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400",
                          title: s(p)("admin.groups.columns.rpmOverrideHint")
                        }, l(s(p)("admin.groups.columns.rpmOverride")), 9, Ul),
                        J[8] || (J[8] = e("th", { class: "w-10 px-2 py-2" }, null, -1))
                      ])
                    ]),
                    e("tbody", Dl, [
                      (g(!0), _(Z, null, te(_e.value, (ee) => (g(), _("tr", {
                        key: ee.user_id,
                        class: "hover:bg-gray-50 dark:hover:bg-dark-700/50"
                      }, [
                        e("td", Ol, l(ee.user_email), 1),
                        e("td", Il, l(ee.user_id), 1),
                        e("td", Al, l(ee.user_name || "-"), 1),
                        e("td", {
                          class: "max-w-[160px] truncate px-3 py-2 text-gray-500 dark:text-gray-400",
                          title: ee.user_notes
                        }, l(ee.user_notes || "-"), 9, Fl),
                        e("td", Nl, [
                          e("span", {
                            class: F([
                              "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                              ee.user_status === "active" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : "bg-gray-100 text-gray-600 dark:bg-dark-600 dark:text-gray-400"
                            ])
                          }, l(ee.user_status), 3)
                        ]),
                        e("td", Ll, [
                          e("input", {
                            type: "number",
                            step: "1",
                            min: "0",
                            autocomplete: "off",
                            value: ee.rpm_override,
                            class: "hide-spinner w-20 rounded border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/20 dark:border-dark-500 dark:bg-dark-700 dark:focus:border-primary-500",
                            onChange: (A) => se(ee.user_id, A.target.value)
                          }, null, 40, ql)
                        ]),
                        e("td", jl, [
                          e("button", {
                            type: "button",
                            class: "rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            onClick: (A) => he(ee.user_id)
                          }, [
                            P(O, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, Hl)
                        ])
                      ]))), 128))
                    ])
                  ])
                ])
              ]),
              P(Bo, {
                total: b.value.length,
                page: C.value,
                "page-size": U.value,
                "onUpdate:page": J[3] || (J[3] = (ee) => C.value = ee),
                "onUpdate:pageSize": Me
              }, null, 8, ["total", "page", "page-size"])
            ]))
          ])),
          e("div", Gl, [
            L.value ? (g(), _(Z, { key: 0 }, [
              e("span", Bl, l(s(p)("admin.groups.unsavedChanges")), 1),
              e("button", {
                type: "button",
                class: "text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                onClick: pe
              }, l(s(p)("admin.groups.revertChanges")), 1)
            ], 64)) : w("", !0),
            e("div", Kl, [
              e("button", {
                type: "button",
                class: "btn btn-sm px-4 py-1.5",
                onClick: Ie
              }, l(s(p)("common.close")), 1),
              L.value ? (g(), _("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary btn-sm px-4 py-1.5",
                disabled: k.value,
                onClick: me
              }, [
                k.value ? (g(), Ce(O, {
                  key: 0,
                  name: "refresh",
                  size: "sm",
                  class: "mr-1 animate-spin"
                })) : w("", !0),
                q(" " + l(s(p)("common.save")), 1)
              ], 8, Yl)) : w("", !0)
            ])
          ])
        ])) : w("", !0)
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), Wl = /* @__PURE__ */ Ho(Xl, [["__scopeId", "data-v-c4806d0e"]]), Zl = { class: "flex flex-col gap-1" }, Jl = { class: "flex items-center gap-1" }, Ql = { class: "font-mono" }, ed = { class: "font-mono" }, td = {
  key: 0,
  class: "flex items-center gap-1"
}, ad = { class: "font-mono" }, od = { class: "font-mono" }, rd = {
  key: 1,
  class: "flex items-center gap-1"
}, sd = { class: "font-mono" }, id = { class: "font-mono" }, nd = /* @__PURE__ */ Qe({
  __name: "GroupCapacityBadge",
  props: {
    concurrencyUsed: { default: 0 },
    concurrencyMax: { default: 0 },
    sessionsUsed: { default: 0 },
    sessionsMax: { default: 0 },
    rpmUsed: { default: 0 },
    rpmMax: { default: 0 }
  },
  setup(t) {
    function n(r, d) {
      return d > 0 && r >= d ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : r > 0 ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
    return (r, d) => (g(), _("div", Zl, [
      e("div", Jl, [
        e("span", {
          class: F([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            n(t.concurrencyUsed, t.concurrencyMax)
          ])
        }, [
          d[0] || (d[0] = e("svg", {
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
          e("span", Ql, l(t.concurrencyUsed), 1),
          d[1] || (d[1] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", ed, l(t.concurrencyMax), 1)
        ], 2)
      ]),
      t.sessionsMax > 0 ? (g(), _("div", td, [
        e("span", {
          class: F([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            n(t.sessionsUsed, t.sessionsMax)
          ])
        }, [
          d[2] || (d[2] = e("svg", {
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
          e("span", ad, l(t.sessionsUsed), 1),
          d[3] || (d[3] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", od, l(t.sessionsMax), 1)
        ], 2)
      ])) : w("", !0),
      t.rpmMax > 0 ? (g(), _("div", rd, [
        e("span", {
          class: F([
            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
            n(t.rpmUsed, t.rpmMax)
          ])
        }, [
          d[4] || (d[4] = e("svg", {
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
          e("span", sd, l(t.rpmUsed), 1),
          d[5] || (d[5] = e("span", { class: "text-gray-400 dark:text-gray-500" }, "/", -1)),
          e("span", id, l(t.rpmMax), 1)
        ], 2)
      ])) : w("", !0)
    ]));
  }
}), ld = [
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max"
], _s = (t) => sa(t) ? ld : [];
function sa(t) {
  return t === "openai" || t === "composite";
}
function dd(t) {
  return _s(t).map((n) => ({
    value: n,
    label: n
  }));
}
function Vt(t, n) {
  const r = (n == null ? void 0 : n.trim().toLowerCase()) ?? "";
  return _s(t).some(
    (d) => d === r
  ) ? r : "";
}
let zr = 0;
function fs(t = {}) {
  return zr += 1, {
    id: `reasoning-effort-mapping-${zr}`,
    from: t.from ?? "",
    to: t.to ?? ""
  };
}
function yo(t, n = "openai") {
  return (t ?? []).flatMap((r) => {
    const d = Vt(n, r.from), p = Vt(n, r.to);
    return d && p ? [fs({ from: d, to: p })] : [];
  });
}
function Ra(t) {
  return t.map((n) => ({
    from: n.from.trim(),
    to: n.to.trim()
  }));
}
function ud(t, n = "openai") {
  const r = {}, d = /* @__PURE__ */ new Map();
  return t.forEach((p) => {
    const a = p.from.trim(), f = p.to.trim();
    if (!a)
      r[p.id] = { ...r[p.id], from: "fromRequired" };
    else if (!Vt(n, a))
      r[p.id] = { ...r[p.id], from: "unsupportedFrom" };
    else {
      const k = a.toLowerCase();
      d.set(k, [...d.get(k) ?? [], p]);
    }
    f ? Vt(n, f) || (r[p.id] = { ...r[p.id], to: "unsupportedTo" }) : r[p.id] = { ...r[p.id], to: "toRequired" };
  }), d.forEach((p) => {
    p.length < 2 || p.forEach((a) => {
      r[a.id] = { ...r[a.id], from: "duplicateFrom" };
    });
  }), r;
}
const cd = { class: "space-y-4" }, pd = ["for"], md = { class: "input-hint" }, gd = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, _d = { class: "mb-3 flex items-center justify-between gap-3" }, fd = { class: "input-label mb-0" }, hd = {
  key: 0,
  class: "space-y-2"
}, bd = { class: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto] md:items-start" }, vd = ["for"], yd = ["id"], xd = { class: "hidden pt-8 text-gray-400 md:block dark:text-dark-400" }, kd = ["for"], wd = ["id"], Cd = ["title", "aria-label", "onClick"], Ur = /* @__PURE__ */ Qe({
  __name: "ReasoningEffortPolicyFields",
  props: {
    idPrefix: {},
    platform: {},
    maxEffort: {},
    mappings: {}
  },
  emits: ["update:maxEffort", "update:mappings"],
  setup(t, { expose: n, emit: r }) {
    const d = t, p = r, { t: a } = ut(), f = D(!1), k = X(
      () => dd(d.platform)
    ), h = X(
      () => ud(d.mappings, d.platform)
    ), b = (T) => T == null ? "" : String(T), v = (T) => {
      p("update:maxEffort", b(T));
    }, $ = (T, Y, L) => {
      p(
        "update:mappings",
        d.mappings.map(
          (_e) => _e.id === T ? { ..._e, [Y]: b(L) } : _e
        )
      );
    }, I = () => {
      p("update:mappings", [
        ...d.mappings,
        fs()
      ]);
    }, M = (T) => {
      p(
        "update:mappings",
        d.mappings.filter((Y) => Y.id !== T)
      );
    }, S = (T) => T ? a(`admin.groups.form.${T}`) : "";
    return n({ validate: () => (f.value = !0, Object.keys(h.value).length === 0), resetValidation: () => {
      f.value = !1;
    } }), (T, Y) => (g(), _("div", cd, [
      e("div", null, [
        e("label", {
          for: `${t.idPrefix}-max-effort`,
          class: "input-label"
        }, l(s(a)("admin.groups.form.maxReasoningEffort")), 9, pd),
        P(ke, {
          id: `${t.idPrefix}-max-effort`,
          "model-value": t.maxEffort,
          options: k.value,
          placeholder: s(a)("admin.groups.form.maxReasoningEffortUnlimited"),
          "aria-label": s(a)("admin.groups.form.maxReasoningEffort"),
          searchable: !1,
          clearable: "",
          "onUpdate:modelValue": v
        }, null, 8, ["id", "model-value", "options", "placeholder", "aria-label"]),
        e("p", md, l(s(a)("admin.groups.form.maxReasoningEffortHint")), 1)
      ]),
      e("div", gd, [
        e("div", _d, [
          e("label", fd, l(s(a)("admin.groups.form.reasoningEffortMappings")), 1),
          e("button", {
            type: "button",
            class: "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-primary-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-300",
            onClick: I
          }, [
            P(O, {
              name: "plus",
              size: "sm"
            }),
            q(" " + l(s(a)("admin.groups.form.addReasoningEffortMapping")), 1)
          ])
        ]),
        t.mappings.length > 0 ? (g(), _("div", hd, [
          (g(!0), _(Z, null, te(t.mappings, (L) => {
            var _e, ue, xe, ce, Me, fe, N, ae;
            return g(), _("div", {
              key: L.id,
              class: "rounded-lg border border-gray-200 bg-gray-50/40 p-3 dark:border-dark-600 dark:bg-dark-800/40"
            }, [
              e("div", bd, [
                e("div", null, [
                  e("label", {
                    for: `${t.idPrefix}-${L.id}-from`,
                    class: "input-label"
                  }, l(s(a)("admin.groups.form.reasoningEffortFrom")), 9, vd),
                  P(ke, {
                    id: `${t.idPrefix}-${L.id}-from`,
                    "model-value": L.from,
                    options: k.value,
                    placeholder: s(a)("admin.groups.form.reasoningEffortFromPlaceholder"),
                    error: f.value && !!((_e = h.value[L.id]) != null && _e.from),
                    "aria-label": s(a)("admin.groups.form.reasoningEffortFrom"),
                    "aria-describedby": f.value && ((ue = h.value[L.id]) != null && ue.from) ? `${t.idPrefix}-${L.id}-from-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (se) => $(L.id, "from", se)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  f.value && ((xe = h.value[L.id]) != null && xe.from) ? (g(), _("p", {
                    key: 0,
                    id: `${t.idPrefix}-${L.id}-from-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, l(S((ce = h.value[L.id]) == null ? void 0 : ce.from)), 9, yd)) : w("", !0)
                ]),
                e("div", xd, [
                  P(O, {
                    name: "arrowRight",
                    size: "sm"
                  })
                ]),
                e("div", null, [
                  e("label", {
                    for: `${t.idPrefix}-${L.id}-to`,
                    class: "input-label"
                  }, l(s(a)("admin.groups.form.reasoningEffortTo")), 9, kd),
                  P(ke, {
                    id: `${t.idPrefix}-${L.id}-to`,
                    "model-value": L.to,
                    options: k.value,
                    placeholder: s(a)("admin.groups.form.reasoningEffortToPlaceholder"),
                    error: f.value && !!((Me = h.value[L.id]) != null && Me.to),
                    "aria-label": s(a)("admin.groups.form.reasoningEffortTo"),
                    "aria-describedby": f.value && ((fe = h.value[L.id]) != null && fe.to) ? `${t.idPrefix}-${L.id}-to-error` : void 0,
                    searchable: !1,
                    clearable: "",
                    "onUpdate:modelValue": (se) => $(L.id, "to", se)
                  }, null, 8, ["id", "model-value", "options", "placeholder", "error", "aria-label", "aria-describedby", "onUpdate:modelValue"]),
                  f.value && ((N = h.value[L.id]) != null && N.to) ? (g(), _("p", {
                    key: 0,
                    id: `${t.idPrefix}-${L.id}-to-error`,
                    class: "mt-1 text-xs text-red-600 dark:text-red-400",
                    role: "alert"
                  }, l(S((ae = h.value[L.id]) == null ? void 0 : ae.to)), 9, wd)) : w("", !0)
                ]),
                e("button", {
                  type: "button",
                  class: "flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 md:mt-6 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                  title: s(a)("admin.groups.form.removeReasoningEffortMapping"),
                  "aria-label": s(a)("admin.groups.form.removeReasoningEffortMapping"),
                  onClick: (se) => M(L.id)
                }, [
                  P(O, {
                    name: "trash",
                    size: "sm"
                  })
                ], 8, Cd)
              ])
            ]);
          }), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), $d = { class: "w-20" }, Md = { class: "text-xs text-gray-400" }, Pd = ["value"], Sd = { class: "w-20" }, Ed = { class: "text-xs text-gray-400" }, Rd = { class: "text-gray-300" }, Td = ["value"], Vd = { class: "flex-1" }, zd = { class: "text-xs text-gray-400" }, Ud = {
  key: 0,
  class: "text-red-500"
}, Dd = ["value"], Od = { class: "flex-1" }, Id = { class: "text-xs text-gray-400" }, Ad = {
  key: 0,
  class: "text-red-500"
}, Fd = ["value"], Nd = { class: "flex-1" }, Ld = { class: "text-xs text-gray-400" }, qd = ["value"], jd = { class: "flex-1" }, Hd = { class: "text-xs text-gray-400" }, Gd = ["value"], Bd = { class: "w-24" }, Kd = { class: "text-xs text-gray-400" }, Yd = ["value", "placeholder"], Xd = { class: "w-20" }, Wd = { class: "text-xs text-gray-400" }, Zd = ["value"], Jd = { class: "w-20" }, Qd = { class: "text-xs text-gray-400" }, eu = { class: "text-gray-300" }, tu = ["value"], au = { class: "flex-1" }, ou = { class: "text-xs text-gray-400" }, ru = {
  key: 0,
  class: "text-red-500"
}, su = ["value"], xo = /* @__PURE__ */ Qe({
  __name: "IntervalRow",
  props: {
    interval: {},
    mode: {}
  },
  emits: ["update", "remove"],
  setup(t, { emit: n }) {
    const { t: r } = ut(), d = t, p = n, a = X(() => {
      const b = d.interval;
      return (b.input_price == null || b.input_price === "") && (b.output_price == null || b.output_price === "") && (b.cache_write_price == null || b.cache_write_price === "") && (b.cache_read_price == null || b.cache_read_price === "") && (b.per_request_price == null || b.per_request_price === "");
    });
    function f(b, v) {
      p("update", { ...d.interval, [b]: v === "" ? null : v });
    }
    function k(b) {
      const v = parseInt(b, 10);
      return isNaN(v) ? 0 : v;
    }
    function h(b) {
      if (b === "") return null;
      const v = parseInt(b, 10);
      return isNaN(v) ? null : v;
    }
    return (b, v) => (g(), _("div", {
      class: F(["flex items-start gap-2 rounded border p-2", a.value ? "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-950/20" : "border-gray-200 bg-white dark:border-dark-500 dark:bg-dark-700"])
    }, [
      t.mode === "token" ? (g(), _(Z, { key: 0 }, [
        e("div", $d, [
          e("label", Md, l(s(r)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: t.interval.min_tokens,
            onInput: v[0] || (v[0] = ($) => f("min_tokens", k($.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Pd)
        ]),
        e("div", Sd, [
          e("label", Ed, [
            q(l(s(r)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", Rd, l(s(r)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: t.interval.max_tokens ?? "",
            onInput: v[1] || (v[1] = ($) => f("max_tokens", h($.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, Td)
        ]),
        e("div", Vd, [
          e("label", zd, [
            q(l(s(r)("admin.channels.form.inputPrice")) + " ", 1),
            a.value ? (g(), _("span", Ud, "*")) : w("", !0),
            v[11] || (v[11] = q()),
            v[12] || (v[12] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: t.interval.input_price,
            onInput: v[2] || (v[2] = ($) => f("input_price", $.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Dd)
        ]),
        e("div", Od, [
          e("label", Id, [
            q(l(s(r)("admin.channels.form.outputPrice")) + " ", 1),
            a.value ? (g(), _("span", Ad, "*")) : w("", !0),
            v[13] || (v[13] = q()),
            v[14] || (v[14] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: t.interval.output_price,
            onInput: v[3] || (v[3] = ($) => f("output_price", $.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Fd)
        ]),
        e("div", Nd, [
          e("label", Ld, [
            q(l(s(r)("admin.channels.form.cacheWritePriceShort")) + " ", 1),
            v[15] || (v[15] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: t.interval.cache_write_price,
            onInput: v[4] || (v[4] = ($) => f("cache_write_price", $.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, qd)
        ]),
        e("div", jd, [
          e("label", Hd, [
            q(l(s(r)("admin.channels.form.cacheReadPriceShort")) + " ", 1),
            v[16] || (v[16] = e("span", { class: "text-gray-300" }, "$/M", -1))
          ]),
          e("input", {
            value: t.interval.cache_read_price,
            onInput: v[5] || (v[5] = ($) => f("cache_read_price", $.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Gd)
        ])
      ], 64)) : (g(), _(Z, { key: 1 }, [
        e("div", Bd, [
          e("label", Kd, l(t.mode === "image" ? s(r)("admin.channels.form.resolution") : s(r)("admin.channels.form.tierLabel")), 1),
          e("input", {
            value: t.interval.tier_label,
            onInput: v[6] || (v[6] = ($) => f("tier_label", $.target.value)),
            type: "text",
            class: "input mt-0.5 text-xs",
            placeholder: t.mode === "image" ? "1K / 2K / 4K" : ""
          }, null, 40, Yd)
        ]),
        e("div", Xd, [
          e("label", Wd, l(s(r)("admin.channels.form.minTokens")), 1),
          e("input", {
            value: t.interval.min_tokens,
            onInput: v[7] || (v[7] = ($) => f("min_tokens", k($.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, Zd)
        ]),
        e("div", Jd, [
          e("label", Qd, [
            q(l(s(r)("admin.channels.form.maxTokens")) + " ", 1),
            e("span", eu, l(s(r)("admin.channels.form.inclusive")), 1)
          ]),
          e("input", {
            value: t.interval.max_tokens ?? "",
            onInput: v[8] || (v[8] = ($) => f("max_tokens", h($.target.value))),
            type: "number",
            min: "0",
            class: "input mt-0.5 text-xs",
            placeholder: "∞"
          }, null, 40, tu)
        ]),
        e("div", au, [
          e("label", ou, [
            q(l(s(r)("admin.channels.form.perRequestPrice")) + " ", 1),
            a.value ? (g(), _("span", ru, "*")) : w("", !0),
            v[17] || (v[17] = q()),
            v[18] || (v[18] = e("span", { class: "text-gray-300" }, "$", -1))
          ]),
          e("input", {
            value: t.interval.per_request_price,
            onInput: v[9] || (v[9] = ($) => f("per_request_price", $.target.value)),
            type: "number",
            step: "any",
            min: "0",
            class: "input mt-0.5 text-xs"
          }, null, 40, su)
        ])
      ], 64)),
      e("button", {
        type: "button",
        onClick: v[10] || (v[10] = ($) => p("remove")),
        class: "mt-4 rounded p-0.5 text-gray-400 hover:text-red-500"
      }, [
        P(O, {
          name: "x",
          size: "sm"
        })
      ])
    ], 2));
  }
}), iu = "Asia/Shanghai", nu = /^\d+(?:\.\d{1,2})?$/;
function lu(t) {
  const n = String(t), r = Number(n);
  return nu.test(n) && Number.isFinite(r) && r > 0;
}
const du = [
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
function Dr() {
  return { timezone: iu, periods: [] };
}
function uu(t, n = /* @__PURE__ */ new Date()) {
  var r;
  try {
    const d = (r = new Intl.DateTimeFormat("en-US", {
      timeZone: t,
      timeZoneName: "shortOffset"
    }).formatToParts(n).find((a) => a.type === "timeZoneName")) == null ? void 0 : r.value;
    if (!d || d === "GMT") return "UTC+00:00";
    const p = /^GMT([+-])(\d{1,2})(?::(\d{2}))?$/.exec(d);
    return p ? `UTC${p[1]}${p[2].padStart(2, "0")}:${p[3] || "00"}` : "";
  } catch {
    return "";
  }
}
const hs = 1e6;
function Ko(t) {
  if (t == null || t === "") return null;
  const n = Number(t);
  return isNaN(n) ? null : n;
}
function ot(t) {
  const n = Ko(t);
  return n === null ? null : parseFloat((n / hs).toPrecision(10));
}
function rt(t) {
  return t == null ? null : parseFloat((t * hs).toPrecision(10));
}
function cu(t) {
  return (t || []).map((n) => ({
    min_tokens: n.min_tokens,
    max_tokens: n.max_tokens,
    tier_label: n.tier_label || "",
    input_price: rt(n.input_price),
    output_price: rt(n.output_price),
    cache_write_price: rt(n.cache_write_price),
    cache_read_price: rt(n.cache_read_price),
    per_request_price: n.per_request_price,
    sort_order: n.sort_order
  }));
}
function pu(t) {
  return (t || []).map((n) => ({
    min_tokens: n.min_tokens,
    max_tokens: n.max_tokens,
    tier_label: n.tier_label,
    input_price: ot(n.input_price),
    output_price: ot(n.output_price),
    cache_write_price: ot(n.cache_write_price),
    cache_read_price: ot(n.cache_read_price),
    per_request_price: Ko(n.per_request_price),
    sort_order: n.sort_order
  }));
}
function bs(t) {
  switch (t) {
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
const mu = { class: "flex flex-wrap gap-1.5 rounded-lg border border-gray-200 bg-white p-2 dark:border-dark-600 dark:bg-dark-800 min-h-[2.5rem]" }, gu = ["onClick"], _u = ["placeholder", "onKeydown"], fu = { class: "mt-1 text-xs text-gray-400" }, hu = /* @__PURE__ */ Qe({
  __name: "ModelTagInput",
  props: {
    models: {},
    placeholder: {},
    platform: {}
  },
  emits: ["update:models"],
  setup(t, { emit: n }) {
    const { t: r } = ut(), d = t, p = n, a = D(""), f = D();
    function k() {
      const $ = a.value.trim();
      $ && (d.models.includes($) || p("update:models", [...d.models, $]), a.value = "");
    }
    function h($) {
      const I = [...d.models];
      I.splice($, 1), p("update:models", I);
    }
    function b() {
      a.value === "" && d.models.length > 0 && h(d.models.length - 1);
    }
    function v($) {
      var C;
      $.preventDefault();
      const M = (((C = $.clipboardData) == null ? void 0 : C.getData("text")) || "").split(/[,\n;]+/).map((U) => U.trim()).filter(Boolean);
      if (M.length === 0) return;
      const S = [.../* @__PURE__ */ new Set([...d.models, ...M])];
      p("update:models", S), a.value = "";
    }
    return ($, I) => (g(), _("div", null, [
      e("div", mu, [
        (g(!0), _(Z, null, te(t.models, (M, S) => (g(), _("span", {
          key: S,
          class: F(["inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-sm", s(bs)(d.platform || "")])
        }, [
          q(l(M) + " ", 1),
          e("button", {
            type: "button",
            onClick: (C) => h(S),
            class: "ml-0.5 rounded-full p-0.5 hover:bg-primary-200 dark:hover:bg-primary-800"
          }, [
            P(O, {
              name: "x",
              size: "xs"
            })
          ], 8, gu)
        ], 2))), 128)),
        E(e("input", {
          ref_key: "inputRef",
          ref: f,
          "onUpdate:modelValue": I[0] || (I[0] = (M) => a.value = M),
          type: "text",
          class: "flex-1 min-w-[120px] border-none bg-transparent text-sm outline-none placeholder:text-gray-400 dark:text-white",
          placeholder: t.models.length === 0 ? t.placeholder : "",
          onKeydown: [
            Ia(Bt(k, ["prevent"]), ["enter"]),
            Ia(Bt(k, ["prevent"]), ["tab"]),
            Ia(b, ["delete"])
          ],
          onPaste: v,
          onBlur: k
        }, null, 40, _u), [
          [V, a.value]
        ])
      ]),
      e("p", fu, l(s(r)("admin.channels.form.modelInputHint", "Press Enter to add, supports paste for batch import.")), 1)
    ]));
  }
}), bu = { class: "mt-3 border-t border-gray-200 pt-3 dark:border-dark-600" }, vu = { class: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" }, yu = { class: "min-w-0 flex-1 sm:max-w-sm" }, xu = { class: "block text-xs font-medium text-gray-500 dark:text-gray-400" }, ku = { class: "mt-2 block text-xs text-gray-400" }, wu = {
  key: 0,
  class: "mt-3 space-y-3"
}, Cu = { class: "min-w-0" }, $u = ["for"], Mu = ["id", "value", "onInput"], Pu = { class: "min-w-0" }, Su = ["for"], Eu = ["id", "value", "onInput"], Ru = { class: "min-w-0" }, Tu = ["for"], Vu = ["id", "value", "onInput", "onBlur"], zu = ["title", "aria-label", "data-testid", "onClick"], Uu = /* @__PURE__ */ Qe({
  __name: "TimePricingSection",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    var M;
    const { t: r } = ut(), d = t, p = n, a = `time-pricing-${(M = ga()) == null ? void 0 : M.uid}`, f = du.map((S) => {
      const C = uu(S);
      return { value: S, label: C ? `${S} (${C})` : S };
    });
    function k(S) {
      p("update:modelValue", { ...d.modelValue, timezone: String(S ?? "") });
    }
    function h(S) {
      const C = S.replace(/：/g, ":");
      return C === "24:00:00" ? "00:00:00" : C;
    }
    function b() {
      p("update:modelValue", {
        ...d.modelValue,
        periods: [
          ...d.modelValue.periods,
          { start_time: "", end_time: "", multiplier: "1.00" }
        ]
      });
    }
    function v(S, C, U) {
      const T = d.modelValue.periods.map((Y, L) => L === S ? { ...Y, [C]: U } : Y);
      p("update:modelValue", { ...d.modelValue, periods: T });
    }
    function $(S, C) {
      lu(C) && v(S, "multiplier", Number(C).toFixed(2));
    }
    function I(S) {
      p("update:modelValue", {
        ...d.modelValue,
        periods: d.modelValue.periods.filter((C, U) => U !== S)
      });
    }
    return (S, C) => (g(), _("section", bu, [
      e("div", vu, [
        e("div", yu, [
          e("label", xu, l(s(r)("admin.channels.form.timePricing")), 1),
          e("label", ku, l(s(r)("admin.channels.form.timezone")), 1),
          P(ke, {
            "model-value": t.modelValue.timezone,
            options: s(f),
            "aria-label": s(r)("admin.channels.form.timezone"),
            searchable: "",
            creatable: "",
            class: "mt-1 w-full",
            "onUpdate:modelValue": k
          }, null, 8, ["model-value", "options", "aria-label"])
        ]),
        e("button", {
          type: "button",
          class: "self-start text-xs text-primary-600 hover:text-primary-700 sm:self-end sm:pb-2",
          "data-testid": "add-time-period",
          onClick: b
        }, " + " + l(s(r)("admin.channels.form.addTimePeriod")), 1)
      ]),
      t.modelValue.periods.length > 0 ? (g(), _("div", wu, [
        (g(!0), _(Z, null, te(t.modelValue.periods, (U, T) => (g(), _("div", {
          key: T,
          class: "grid grid-cols-1 gap-2 border-t border-gray-200 pt-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_2rem] sm:items-end dark:border-dark-600"
        }, [
          e("div", Cu, [
            e("label", {
              for: `${a}-start-${T}`,
              class: "block text-xs text-gray-400"
            }, l(s(r)("admin.channels.form.startTime")), 9, $u),
            e("input", {
              id: `${a}-start-${T}`,
              value: U.start_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (Y) => v(T, "start_time", h(Y.target.value))
            }, null, 40, Mu)
          ]),
          e("div", Pu, [
            e("label", {
              for: `${a}-end-${T}`,
              class: "block text-xs text-gray-400"
            }, l(s(r)("admin.channels.form.endTime")), 9, Su),
            e("input", {
              id: `${a}-end-${T}`,
              value: U.end_time,
              type: "text",
              inputmode: "numeric",
              maxlength: "8",
              placeholder: "HH:mm:ss",
              pattern: "[0-9]{2}:[0-9]{2}:[0-9]{2}",
              autocomplete: "off",
              class: "input mt-1 w-full text-sm",
              onInput: (Y) => v(T, "end_time", h(Y.target.value))
            }, null, 40, Eu)
          ]),
          e("div", Ru, [
            e("label", {
              for: `${a}-multiplier-${T}`,
              class: "block text-xs text-gray-400"
            }, l(s(r)("admin.channels.form.multiplier")), 9, Tu),
            e("input", {
              id: `${a}-multiplier-${T}`,
              value: U.multiplier,
              type: "number",
              min: "0.01",
              step: "0.01",
              class: "input mt-1 w-full text-sm",
              onInput: (Y) => v(T, "multiplier", Y.target.value),
              onBlur: (Y) => $(T, Y.target.value)
            }, null, 40, Vu)
          ]),
          e("button", {
            type: "button",
            class: "flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:text-red-500",
            title: s(r)("admin.channels.form.removeTimePeriod"),
            "aria-label": s(r)("admin.channels.form.removeTimePeriod"),
            "data-testid": `remove-time-period-${T}`,
            onClick: (Y) => I(T)
          }, [
            P(O, {
              name: "trash",
              size: "sm"
            })
          ], 8, zu)
        ]))), 128))
      ])) : w("", !0)
    ]));
  }
}), Du = { class: "rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-dark-600 dark:bg-dark-800" }, Ou = {
  key: 0,
  class: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden"
}, Iu = { class: "flex min-w-0 flex-1 flex-wrap items-center gap-1" }, Au = {
  key: 0,
  class: "whitespace-nowrap text-xs text-gray-400"
}, Fu = {
  key: 1,
  class: "text-xs italic text-gray-400"
}, Nu = { class: "flex-shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300" }, Lu = {
  key: 1,
  class: "flex-1 text-xs font-medium text-gray-500 dark:text-gray-400"
}, qu = { class: "collapsible-inner" }, ju = { class: "mt-3 flex items-start gap-2" }, Hu = { class: "flex-1" }, Gu = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Bu = { class: "w-40" }, Ku = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Yu = { key: 0 }, Xu = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, Wu = { class: "mt-1 grid grid-cols-2 gap-2 sm:grid-cols-6" }, Zu = { class: "text-xs text-gray-400" }, Ju = ["value", "placeholder"], Qu = { class: "text-xs text-gray-400" }, ec = ["value", "placeholder"], tc = { class: "text-xs text-gray-400" }, ac = ["value", "placeholder"], oc = { class: "text-xs text-gray-400" }, rc = ["value", "placeholder"], sc = { class: "text-xs text-gray-400" }, ic = ["value", "placeholder"], nc = { class: "text-xs text-gray-400" }, lc = ["value", "placeholder"], dc = {
  key: 0,
  class: "mt-3"
}, uc = { class: "flex items-center justify-between" }, cc = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, pc = {
  key: 0,
  class: "mt-2 space-y-2"
}, mc = { key: 1 }, gc = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, _c = { class: "mt-1 w-48" }, fc = ["value", "placeholder"], hc = { class: "mt-3 flex items-center justify-between" }, bc = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, vc = {
  key: 0,
  class: "mt-2 space-y-2"
}, yc = {
  key: 1,
  class: "mt-2 rounded border border-dashed border-gray-300 p-3 text-center text-xs text-gray-400 dark:border-dark-500"
}, xc = { key: 2 }, kc = { class: "mt-3 block text-xs font-medium text-gray-500 dark:text-gray-400" }, wc = { class: "mt-1 w-48" }, Cc = ["value", "placeholder"], $c = { class: "mt-3 flex items-center justify-between" }, Mc = { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, Pc = {
  key: 0,
  class: "mt-2 space-y-2"
}, Sc = /* @__PURE__ */ Qe({
  __name: "PricingEntryCard",
  props: {
    entry: {},
    platform: {},
    hideTokenIntervals: { type: Boolean, default: !1 },
    enableTimePricing: { type: Boolean, default: !1 }
  },
  emits: ["update", "remove"],
  setup(t, { emit: n }) {
    const { t: r } = ut(), d = t, p = n, a = D(d.entry.models.length > 0), f = X(() => [
      { value: "token", label: r("admin.channels.billingMode.token") },
      { value: "per_request", label: r("admin.channels.billingMode.perRequest") },
      { value: "image", label: r("admin.channels.billingMode.image") },
      { value: "video", label: r("admin.channels.billingMode.video") }
    ]), k = X(() => {
      const S = f.value.find((C) => C.value === d.entry.billing_mode);
      return S ? S.label : d.entry.billing_mode;
    });
    function h(S, C) {
      p("update", { ...d.entry, [S]: C === "" ? null : C });
    }
    function b() {
      const S = [...d.entry.intervals || []];
      S.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: S.length
      }), p("update", { ...d.entry, intervals: S });
    }
    function v() {
      const S = [...d.entry.intervals || []], C = d.entry.billing_mode === "video" ? ["480p", "720p", "1080p"] : ["1K", "2K", "4K", "HD"];
      S.push({
        min_tokens: 0,
        max_tokens: null,
        tier_label: C[S.length] || "",
        input_price: null,
        output_price: null,
        cache_write_price: null,
        cache_read_price: null,
        per_request_price: null,
        sort_order: S.length
      }), p("update", { ...d.entry, intervals: S });
    }
    function $(S, C) {
      const U = [...d.entry.intervals || []];
      U[S] = C, p("update", { ...d.entry, intervals: U });
    }
    function I(S) {
      const C = [...d.entry.intervals || []];
      C.splice(S, 1), p("update", { ...d.entry, intervals: C });
    }
    function M(S) {
      p("update", { ...d.entry, models: S });
    }
    return (S, C) => (g(), _("div", Du, [
      e("div", {
        class: "flex cursor-pointer select-none items-center gap-2",
        onClick: C[1] || (C[1] = (U) => a.value = !a.value)
      }, [
        P(O, {
          name: a.value ? "chevronRight" : "chevronDown",
          size: "sm",
          "stroke-width": 2,
          class: "flex-shrink-0 text-gray-400 transition-transform duration-200"
        }, null, 8, ["name"]),
        a.value ? (g(), _("div", Ou, [
          e("div", Iu, [
            (g(!0), _(Z, null, te(t.entry.models.slice(0, 3), (U, T) => (g(), _("span", {
              key: T,
              class: F(["inline-flex shrink-0 rounded px-1.5 py-0.5 text-xs", s(bs)(d.platform || "")])
            }, l(U), 3))), 128)),
            t.entry.models.length > 3 ? (g(), _("span", Au, " +" + l(t.entry.models.length - 3), 1)) : w("", !0),
            t.entry.models.length === 0 ? (g(), _("span", Fu, l(s(r)("admin.channels.form.noModels")), 1)) : w("", !0)
          ]),
          e("span", Nu, l(k.value), 1)
        ])) : (g(), _("div", Lu, l(s(r)("admin.channels.form.pricingEntry")), 1)),
        e("button", {
          type: "button",
          onClick: C[0] || (C[0] = Bt((U) => p("remove"), ["stop"])),
          class: "flex-shrink-0 rounded p-1 text-gray-400 hover:text-red-500"
        }, [
          P(O, {
            name: "trash",
            size: "sm"
          })
        ])
      ]),
      e("div", {
        class: F(["collapsible-content", { "collapsible-content--collapsed": a.value }])
      }, [
        e("div", qu, [
          e("div", ju, [
            e("div", Hu, [
              e("label", Gu, [
                q(l(s(r)("admin.channels.form.models")) + " ", 1),
                C[13] || (C[13] = e("span", { class: "text-red-500" }, "*", -1))
              ]),
              P(hu, {
                models: t.entry.models,
                platform: d.platform,
                "onUpdate:models": C[2] || (C[2] = (U) => M(U)),
                placeholder: s(r)("admin.channels.form.modelsPlaceholder"),
                class: "mt-1"
              }, null, 8, ["models", "platform", "placeholder"])
            ]),
            e("div", Bu, [
              e("label", Ku, l(s(r)("admin.channels.form.billingMode")), 1),
              P(ke, {
                modelValue: t.entry.billing_mode,
                "onUpdate:modelValue": C[3] || (C[3] = (U) => p("update", {
                  ...t.entry,
                  billing_mode: U,
                  intervals: [],
                  time_pricing: { ...t.entry.time_pricing, periods: [] }
                })),
                options: f.value,
                class: "mt-1"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          t.entry.billing_mode === "token" ? (g(), _("div", Yu, [
            e("label", Xu, [
              q(l(s(r)("admin.channels.form.defaultPrices")) + " ", 1),
              C[14] || (C[14] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$/MTok", -1))
            ]),
            e("div", Wu, [
              e("div", null, [
                e("label", Zu, l(s(r)("admin.channels.form.inputPrice")), 1),
                e("input", {
                  value: t.entry.input_price,
                  onInput: C[4] || (C[4] = (U) => h("input_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, Ju)
              ]),
              e("div", null, [
                e("label", Qu, l(s(r)("admin.channels.form.outputPrice")), 1),
                e("input", {
                  value: t.entry.output_price,
                  onInput: C[5] || (C[5] = (U) => h("output_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, ec)
              ]),
              e("div", null, [
                e("label", tc, l(s(r)("admin.channels.form.cacheWritePrice")), 1),
                e("input", {
                  value: t.entry.cache_write_price,
                  onInput: C[6] || (C[6] = (U) => h("cache_write_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, ac)
              ]),
              e("div", null, [
                e("label", oc, l(s(r)("admin.channels.form.cacheReadPrice")), 1),
                e("input", {
                  value: t.entry.cache_read_price,
                  onInput: C[7] || (C[7] = (U) => h("cache_read_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, rc)
              ]),
              e("div", null, [
                e("label", sc, l(s(r)("admin.channels.form.imageInputPrice")), 1),
                e("input", {
                  value: t.entry.image_input_price,
                  onInput: C[8] || (C[8] = (U) => h("image_input_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, ic)
              ]),
              e("div", null, [
                e("label", nc, l(s(r)("admin.channels.form.imageTokenPrice")), 1),
                e("input", {
                  value: t.entry.image_output_price,
                  onInput: C[9] || (C[9] = (U) => h("image_output_price", U.target.value)),
                  type: "number",
                  step: "any",
                  min: "0",
                  class: "input mt-0.5 text-sm",
                  placeholder: s(r)("admin.channels.form.pricePlaceholder")
                }, null, 40, lc)
              ])
            ]),
            t.hideTokenIntervals ? w("", !0) : (g(), _("div", dc, [
              e("div", uc, [
                e("label", cc, [
                  q(l(s(r)("admin.channels.form.intervals")) + " ", 1),
                  C[15] || (C[15] = e("span", { class: "ml-1 font-normal text-gray-400" }, "(min, max]", -1))
                ]),
                e("button", {
                  type: "button",
                  onClick: b,
                  class: "text-xs text-primary-600 hover:text-primary-700"
                }, " + " + l(s(r)("admin.channels.form.addInterval")), 1)
              ]),
              t.entry.intervals && t.entry.intervals.length > 0 ? (g(), _("div", pc, [
                (g(!0), _(Z, null, te(t.entry.intervals, (U, T) => (g(), Ce(xo, {
                  key: T,
                  interval: U,
                  mode: t.entry.billing_mode,
                  onUpdate: (Y) => $(T, Y),
                  onRemove: (Y) => I(T)
                }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
              ])) : w("", !0)
            ])),
            t.enableTimePricing ? (g(), Ce(Uu, {
              key: 1,
              "model-value": t.entry.time_pricing,
              "onUpdate:modelValue": C[10] || (C[10] = (U) => p("update", { ...t.entry, time_pricing: U }))
            }, null, 8, ["model-value"])) : w("", !0)
          ])) : t.entry.billing_mode === "per_request" ? (g(), _("div", mc, [
            e("label", gc, [
              q(l(s(r)("admin.channels.form.defaultPerRequestPrice")) + " ", 1),
              C[16] || (C[16] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", _c, [
              e("input", {
                value: t.entry.per_request_price,
                onInput: C[11] || (C[11] = (U) => h("per_request_price", U.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: s(r)("admin.channels.form.pricePlaceholder")
              }, null, 40, fc)
            ]),
            e("div", hc, [
              e("label", bc, l(s(r)("admin.channels.form.requestTiers")), 1),
              e("button", {
                type: "button",
                onClick: b,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + l(s(r)("admin.channels.form.addTier")), 1)
            ]),
            t.entry.intervals && t.entry.intervals.length > 0 ? (g(), _("div", vc, [
              (g(!0), _(Z, null, te(t.entry.intervals, (U, T) => (g(), Ce(xo, {
                key: T,
                interval: U,
                mode: t.entry.billing_mode,
                onUpdate: (Y) => $(T, Y),
                onRemove: (Y) => I(T)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : (g(), _("div", yc, l(s(r)("admin.channels.form.noTiersYet")), 1))
          ])) : t.entry.billing_mode === "image" || t.entry.billing_mode === "video" ? (g(), _("div", xc, [
            e("label", kc, [
              q(l(t.entry.billing_mode === "video" ? s(r)("admin.channels.form.defaultVideoPrice") : s(r)("admin.channels.form.defaultImagePrice")) + " ", 1),
              C[17] || (C[17] = e("span", { class: "ml-1 font-normal text-gray-400" }, "$", -1))
            ]),
            e("div", wc, [
              e("input", {
                value: t.entry.per_request_price,
                onInput: C[12] || (C[12] = (U) => h("per_request_price", U.target.value)),
                type: "number",
                step: "any",
                min: "0",
                class: "input text-sm",
                placeholder: s(r)("admin.channels.form.pricePlaceholder")
              }, null, 40, Cc)
            ]),
            e("div", $c, [
              e("label", Mc, l(t.entry.billing_mode === "video" ? s(r)("admin.channels.form.videoTiers") : s(r)("admin.channels.form.imageTiers")), 1),
              e("button", {
                type: "button",
                onClick: v,
                class: "text-xs text-primary-600 hover:text-primary-700"
              }, " + " + l(s(r)("admin.channels.form.addTier")), 1)
            ]),
            t.entry.intervals && t.entry.intervals.length > 0 ? (g(), _("div", Pc, [
              (g(!0), _(Z, null, te(t.entry.intervals, (U, T) => (g(), Ce(xo, {
                key: T,
                interval: U,
                mode: t.entry.billing_mode,
                onUpdate: (Y) => $(T, Y),
                onRemove: (Y) => I(T)
              }, null, 8, ["interval", "mode", "onUpdate", "onRemove"]))), 128))
            ])) : w("", !0)
          ])) : w("", !0)
        ])
      ], 2)
    ]));
  }
}), Or = /* @__PURE__ */ Ho(Sc, [["__scopeId", "data-v-7f9347d8"]]);
var Ec = Object.defineProperty, Ha = Object.getOwnPropertySymbols, vs = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, Ir = (t, n, r) => n in t ? Ec(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[n] = r, Ht = (t, n) => {
  for (var r in n || (n = {}))
    vs.call(n, r) && Ir(t, r, n[r]);
  if (Ha)
    for (var r of Ha(n))
      ys.call(n, r) && Ir(t, r, n[r]);
  return t;
}, xs = (t, n) => {
  var r = {};
  for (var d in t)
    vs.call(t, d) && n.indexOf(d) < 0 && (r[d] = t[d]);
  if (t != null && Ha)
    for (var d of Ha(t))
      n.indexOf(d) < 0 && ys.call(t, d) && (r[d] = t[d]);
  return r;
};
const ks = "[vue-draggable-plus]: ";
function Rc(t) {
  console.warn(ks + t);
}
function Tc(t) {
  console.error(ks + t);
}
function Ar(t, n, r) {
  return r >= 0 && r < t.length && t.splice(r, 0, t.splice(n, 1)[0]), t;
}
function Vc(t) {
  return t.replace(/-(\w)/g, (n, r) => r ? r.toUpperCase() : "");
}
function zc(t) {
  return Object.keys(t).reduce((n, r) => (typeof t[r] < "u" && (n[Vc(r)] = t[r]), n), {});
}
function Fr(t, n) {
  return Array.isArray(t) && t.splice(n, 1), t;
}
function Nr(t, n, r) {
  return Array.isArray(t) && t.splice(n, 0, r), t;
}
function Uc(t) {
  return typeof t > "u";
}
function Dc(t) {
  return typeof t == "string";
}
function Lr(t, n, r) {
  const d = t.children[r];
  t.insertBefore(n, d);
}
function ko(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Oc(t, n = document) {
  var r;
  let d = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? d = (r = n == null ? void 0 : n.querySelector) == null ? void 0 : r.call(n, t) : d = document.querySelector(t), d || Rc(`Element not found: ${t}`), d;
}
function Ic(t, n, r = null) {
  return function(...d) {
    return t.apply(r, d), n.apply(r, d);
  };
}
function Ac(t, n) {
  const r = Ht({}, t);
  return Object.keys(n).forEach((d) => {
    r[d] ? r[d] = Ic(t[d], n[d]) : r[d] = n[d];
  }), r;
}
function Fc(t) {
  return t instanceof HTMLElement;
}
function qr(t, n) {
  Object.keys(t).forEach((r) => {
    n(r, t[r]);
  });
}
function Nc(t) {
  return t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
}
const Lc = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function jr(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    n && (d = d.filter(function(p) {
      return Object.getOwnPropertyDescriptor(t, p).enumerable;
    })), r.push.apply(r, d);
  }
  return r;
}
function it(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? jr(Object(r), !0).forEach(function(d) {
      qc(t, d, r[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function(d) {
      Object.defineProperty(t, d, Object.getOwnPropertyDescriptor(r, d));
    });
  }
  return t;
}
function Aa(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Aa = function(n) {
    return typeof n;
  } : Aa = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Aa(t);
}
function qc(t, n, r) {
  return n in t ? Object.defineProperty(t, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = r, t;
}
function dt() {
  return dt = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var d in r)
        Object.prototype.hasOwnProperty.call(r, d) && (t[d] = r[d]);
    }
    return t;
  }, dt.apply(this, arguments);
}
function jc(t, n) {
  if (t == null)
    return {};
  var r = {}, d = Object.keys(t), p, a;
  for (a = 0; a < d.length; a++)
    p = d[a], !(n.indexOf(p) >= 0) && (r[p] = t[p]);
  return r;
}
function Hc(t, n) {
  if (t == null)
    return {};
  var r = jc(t, n), d, p;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (p = 0; p < a.length; p++)
      d = a[p], !(n.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(t, d) && (r[d] = t[d]);
  }
  return r;
}
var Gc = "1.15.2";
function lt(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ct = lt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), _a = lt(/Edge/i), Hr = lt(/firefox/i), da = lt(/safari/i) && !lt(/chrome/i) && !lt(/android/i), ws = lt(/iP(ad|od|hone)/i), Cs = lt(/chrome/i) && lt(/android/i), $s = {
  capture: !1,
  passive: !1
};
function ne(t, n, r) {
  t.addEventListener(n, r, !ct && $s);
}
function re(t, n, r) {
  t.removeEventListener(n, r, !ct && $s);
}
function Ga(t, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(n);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(n);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Bc(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Je(t, n, r, d) {
  if (t) {
    r = r || document;
    do {
      if (n != null && (n[0] === ">" ? t.parentNode === r && Ga(t, n) : Ga(t, n)) || d && t === r)
        return t;
      if (t === r)
        break;
    } while (t = Bc(t));
  }
  return null;
}
var Gr = /\s+/g;
function Ne(t, n, r) {
  if (t && n)
    if (t.classList)
      t.classList[r ? "add" : "remove"](n);
    else {
      var d = (" " + t.className + " ").replace(Gr, " ").replace(" " + n + " ", " ");
      t.className = (d + (r ? " " + n : "")).replace(Gr, " ");
    }
}
function B(t, n, r) {
  var d = t && t.style;
  if (d) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (r = t.currentStyle), n === void 0 ? r : r[n];
    !(n in d) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), d[n] = r + (typeof r == "string" ? "" : "px");
  }
}
function Kt(t, n) {
  var r = "";
  if (typeof t == "string")
    r = t;
  else
    do {
      var d = B(t, "transform");
      d && d !== "none" && (r = d + " " + r);
    } while (!n && (t = t.parentNode));
  var p = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return p && new p(r);
}
function Ms(t, n, r) {
  if (t) {
    var d = t.getElementsByTagName(n), p = 0, a = d.length;
    if (r)
      for (; p < a; p++)
        r(d[p], p);
    return d;
  }
  return [];
}
function st() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function $e(t, n, r, d, p) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var a, f, k, h, b, v, $;
    if (t !== window && t.parentNode && t !== st() ? (a = t.getBoundingClientRect(), f = a.top, k = a.left, h = a.bottom, b = a.right, v = a.height, $ = a.width) : (f = 0, k = 0, h = window.innerHeight, b = window.innerWidth, v = window.innerHeight, $ = window.innerWidth), (n || r) && t !== window && (p = p || t.parentNode, !ct))
      do
        if (p && p.getBoundingClientRect && (B(p, "transform") !== "none" || r && B(p, "position") !== "static")) {
          var I = p.getBoundingClientRect();
          f -= I.top + parseInt(B(p, "border-top-width")), k -= I.left + parseInt(B(p, "border-left-width")), h = f + a.height, b = k + a.width;
          break;
        }
      while (p = p.parentNode);
    if (d && t !== window) {
      var M = Kt(p || t), S = M && M.a, C = M && M.d;
      M && (f /= C, k /= S, $ /= S, v /= C, h = f + v, b = k + $);
    }
    return {
      top: f,
      left: k,
      bottom: h,
      right: b,
      width: $,
      height: v
    };
  }
}
function Br(t, n, r) {
  for (var d = wt(t, !0), p = $e(t)[n]; d; ) {
    var a = $e(d)[r], f = void 0;
    if (f = p >= a, !f)
      return d;
    if (d === st())
      break;
    d = wt(d, !1);
  }
  return !1;
}
function Yt(t, n, r, d) {
  for (var p = 0, a = 0, f = t.children; a < f.length; ) {
    if (f[a].style.display !== "none" && f[a] !== K.ghost && (d || f[a] !== K.dragged) && Je(f[a], r.draggable, t, !1)) {
      if (p === n)
        return f[a];
      p++;
    }
    a++;
  }
  return null;
}
function Yo(t, n) {
  for (var r = t.lastElementChild; r && (r === K.ghost || B(r, "display") === "none" || n && !Ga(r, n)); )
    r = r.previousElementSibling;
  return r || null;
}
function Ye(t, n) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== K.clone && (!n || Ga(t, n)) && r++;
  return r;
}
function Kr(t) {
  var n = 0, r = 0, d = st();
  if (t)
    do {
      var p = Kt(t), a = p.a, f = p.d;
      n += t.scrollLeft * a, r += t.scrollTop * f;
    } while (t !== d && (t = t.parentNode));
  return [n, r];
}
function Kc(t, n) {
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      for (var d in n)
        if (n.hasOwnProperty(d) && n[d] === t[r][d])
          return Number(r);
    }
  return -1;
}
function wt(t, n) {
  if (!t || !t.getBoundingClientRect)
    return st();
  var r = t, d = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var p = B(r);
      if (r.clientWidth < r.scrollWidth && (p.overflowX == "auto" || p.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (p.overflowY == "auto" || p.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body)
          return st();
        if (d || n)
          return r;
        d = !0;
      }
    }
  while (r = r.parentNode);
  return st();
}
function Yc(t, n) {
  if (t && n)
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  return t;
}
function wo(t, n) {
  return Math.round(t.top) === Math.round(n.top) && Math.round(t.left) === Math.round(n.left) && Math.round(t.height) === Math.round(n.height) && Math.round(t.width) === Math.round(n.width);
}
var ua;
function Ps(t, n) {
  return function() {
    if (!ua) {
      var r = arguments, d = this;
      r.length === 1 ? t.call(d, r[0]) : t.apply(d, r), ua = setTimeout(function() {
        ua = void 0;
      }, n);
    }
  };
}
function Xc() {
  clearTimeout(ua), ua = void 0;
}
function Ss(t, n, r) {
  t.scrollLeft += n, t.scrollTop += r;
}
function Es(t) {
  var n = window.Polymer, r = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function Rs(t, n, r) {
  var d = {};
  return Array.from(t.children).forEach(function(p) {
    var a, f, k, h;
    if (!(!Je(p, n.draggable, t, !1) || p.animated || p === r)) {
      var b = $e(p);
      d.left = Math.min((a = d.left) !== null && a !== void 0 ? a : 1 / 0, b.left), d.top = Math.min((f = d.top) !== null && f !== void 0 ? f : 1 / 0, b.top), d.right = Math.max((k = d.right) !== null && k !== void 0 ? k : -1 / 0, b.right), d.bottom = Math.max((h = d.bottom) !== null && h !== void 0 ? h : -1 / 0, b.bottom);
    }
  }), d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
var qe = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Wc() {
  var t = [], n;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(d) {
          if (!(B(d, "display") === "none" || d === K.ghost)) {
            t.push({
              target: d,
              rect: $e(d)
            });
            var p = it({}, t[t.length - 1].rect);
            if (d.thisAnimationDuration) {
              var a = Kt(d, !0);
              a && (p.top -= a.f, p.left -= a.e);
            }
            d.fromRect = p;
          }
        });
      }
    },
    addAnimationState: function(r) {
      t.push(r);
    },
    removeAnimationState: function(r) {
      t.splice(Kc(t, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var d = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof r == "function" && r();
        return;
      }
      var p = !1, a = 0;
      t.forEach(function(f) {
        var k = 0, h = f.target, b = h.fromRect, v = $e(h), $ = h.prevFromRect, I = h.prevToRect, M = f.rect, S = Kt(h, !0);
        S && (v.top -= S.f, v.left -= S.e), h.toRect = v, h.thisAnimationDuration && wo($, v) && !wo(b, v) && // Make sure animatingRect is on line between toRect & fromRect
        (M.top - v.top) / (M.left - v.left) === (b.top - v.top) / (b.left - v.left) && (k = Jc(M, $, I, d.options)), wo(v, b) || (h.prevFromRect = b, h.prevToRect = v, k || (k = d.options.animation), d.animate(h, M, v, k)), k && (p = !0, a = Math.max(a, k), clearTimeout(h.animationResetTimer), h.animationResetTimer = setTimeout(function() {
          h.animationTime = 0, h.prevFromRect = null, h.fromRect = null, h.prevToRect = null, h.thisAnimationDuration = null;
        }, k), h.thisAnimationDuration = k);
      }), clearTimeout(n), p ? n = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, d, p, a) {
      if (a) {
        B(r, "transition", ""), B(r, "transform", "");
        var f = Kt(this.el), k = f && f.a, h = f && f.d, b = (d.left - p.left) / (k || 1), v = (d.top - p.top) / (h || 1);
        r.animatingX = !!b, r.animatingY = !!v, B(r, "transform", "translate3d(" + b + "px," + v + "px,0)"), this.forRepaintDummy = Zc(r), B(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), B(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          B(r, "transition", ""), B(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function Zc(t) {
  return t.offsetWidth;
}
function Jc(t, n, r, d) {
  return Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) / Math.sqrt(Math.pow(n.top - r.top, 2) + Math.pow(n.left - r.left, 2)) * d.animation;
}
var Nt = [], Co = {
  initializeByDefault: !0
}, fa = {
  mount: function(t) {
    for (var n in Co)
      Co.hasOwnProperty(n) && !(n in t) && (t[n] = Co[n]);
    Nt.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Nt.push(t);
  },
  pluginEvent: function(t, n, r) {
    var d = this;
    this.eventCanceled = !1, r.cancel = function() {
      d.eventCanceled = !0;
    };
    var p = t + "Global";
    Nt.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][p] && n[a.pluginName][p](it({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](it({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, d) {
    Nt.forEach(function(f) {
      var k = f.pluginName;
      if (!(!t.options[k] && !f.initializeByDefault)) {
        var h = new f(t, n, t.options);
        h.sortable = t, h.options = t.options, t[k] = h, dt(r, h.defaults);
      }
    });
    for (var p in t.options)
      if (t.options.hasOwnProperty(p)) {
        var a = this.modifyOption(t, p, t.options[p]);
        typeof a < "u" && (t.options[p] = a);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return Nt.forEach(function(d) {
      typeof d.eventProperties == "function" && dt(r, d.eventProperties.call(n[d.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var d;
    return Nt.forEach(function(p) {
      t[p.pluginName] && p.optionListeners && typeof p.optionListeners[n] == "function" && (d = p.optionListeners[n].call(t[p.pluginName], r));
    }), d;
  }
};
function Qc(t) {
  var n = t.sortable, r = t.rootEl, d = t.name, p = t.targetEl, a = t.cloneEl, f = t.toEl, k = t.fromEl, h = t.oldIndex, b = t.newIndex, v = t.oldDraggableIndex, $ = t.newDraggableIndex, I = t.originalEvent, M = t.putSortable, S = t.extraEventProperties;
  if (n = n || r && r[qe], !!n) {
    var C, U = n.options, T = "on" + d.charAt(0).toUpperCase() + d.substr(1);
    window.CustomEvent && !ct && !_a ? C = new CustomEvent(d, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(d, !0, !0)), C.to = f || r, C.from = k || r, C.item = p || r, C.clone = a, C.oldIndex = h, C.newIndex = b, C.oldDraggableIndex = v, C.newDraggableIndex = $, C.originalEvent = I, C.pullMode = M ? M.lastPutMode : void 0;
    var Y = it(it({}, S), fa.getEventProperties(d, n));
    for (var L in Y)
      C[L] = Y[L];
    r && r.dispatchEvent(C), U[T] && U[T].call(n, C);
  }
}
var ep = ["evt"], De = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = r.evt, p = Hc(r, ep);
  fa.pluginEvent.bind(K)(t, n, it({
    dragEl: z,
    parentEl: ye,
    ghostEl: W,
    rootEl: be,
    nextEl: St,
    lastDownEl: Fa,
    cloneEl: ve,
    cloneHidden: kt,
    dragStarted: ia,
    putSortable: Re,
    activeSortable: K.active,
    originalEvent: d,
    oldIndex: Gt,
    oldDraggableIndex: ca,
    newIndex: Le,
    newDraggableIndex: xt,
    hideGhostForTarget: Us,
    unhideGhostForTarget: Ds,
    cloneNowHidden: function() {
      kt = !0;
    },
    cloneNowShown: function() {
      kt = !1;
    },
    dispatchSortableEvent: function(a) {
      ze({
        sortable: n,
        name: a,
        originalEvent: d
      });
    }
  }, p));
};
function ze(t) {
  Qc(it({
    putSortable: Re,
    cloneEl: ve,
    targetEl: z,
    rootEl: be,
    oldIndex: Gt,
    oldDraggableIndex: ca,
    newIndex: Le,
    newDraggableIndex: xt
  }, t));
}
var z, ye, W, be, St, Fa, ve, kt, Gt, Le, ca, xt, Ta, Re, qt = !1, Ba = !1, Ka = [], Mt, We, $o, Mo, Yr, Xr, ia, Lt, pa, ma = !1, Va = !1, Na, Ve, Po = [], Uo = !1, Ya = [], Za = typeof document < "u", za = ws, Wr = _a || ct ? "cssFloat" : "float", tp = Za && !Cs && !ws && "draggable" in document.createElement("div"), Ts = (function() {
  if (Za) {
    if (ct)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), Vs = function(t, n) {
  var r = B(t), d = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), p = Yt(t, 0, n), a = Yt(t, 1, n), f = p && B(p), k = a && B(a), h = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + $e(p).width, b = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + $e(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (p && f.float && f.float !== "none") {
    var v = f.float === "left" ? "left" : "right";
    return a && (k.clear === "both" || k.clear === v) ? "vertical" : "horizontal";
  }
  return p && (f.display === "block" || f.display === "flex" || f.display === "table" || f.display === "grid" || h >= d && r[Wr] === "none" || a && r[Wr] === "none" && h + b > d) ? "vertical" : "horizontal";
}, ap = function(t, n, r) {
  var d = r ? t.left : t.top, p = r ? t.right : t.bottom, a = r ? t.width : t.height, f = r ? n.left : n.top, k = r ? n.right : n.bottom, h = r ? n.width : n.height;
  return d === f || p === k || d + a / 2 === f + h / 2;
}, op = function(t, n) {
  var r;
  return Ka.some(function(d) {
    var p = d[qe].options.emptyInsertThreshold;
    if (!(!p || Yo(d))) {
      var a = $e(d), f = t >= a.left - p && t <= a.right + p, k = n >= a.top - p && n <= a.bottom + p;
      if (f && k)
        return r = d;
    }
  }), r;
}, zs = function(t) {
  function n(p, a) {
    return function(f, k, h, b) {
      var v = f.options.group.name && k.options.group.name && f.options.group.name === k.options.group.name;
      if (p == null && (a || v))
        return !0;
      if (p == null || p === !1)
        return !1;
      if (a && p === "clone")
        return p;
      if (typeof p == "function")
        return n(p(f, k, h, b), a)(f, k, h, b);
      var $ = (a ? f : k).options.group.name;
      return p === !0 || typeof p == "string" && p === $ || p.join && p.indexOf($) > -1;
    };
  }
  var r = {}, d = t.group;
  (!d || Aa(d) != "object") && (d = {
    name: d
  }), r.name = d.name, r.checkPull = n(d.pull, !0), r.checkPut = n(d.put), r.revertClone = d.revertClone, t.group = r;
}, Us = function() {
  !Ts && W && B(W, "display", "none");
}, Ds = function() {
  !Ts && W && B(W, "display", "");
};
Za && !Cs && document.addEventListener("click", function(t) {
  if (Ba)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Ba = !1, !1;
}, !0);
var Pt = function(t) {
  if (z) {
    t = t.touches ? t.touches[0] : t;
    var n = op(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var d in t)
        t.hasOwnProperty(d) && (r[d] = t[d]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[qe]._onDragOver(r);
    }
  }
}, rp = function(t) {
  z && z.parentNode[qe]._isOutsideThisEl(t.target);
};
function K(t, n) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = n = dt({}, n), t[qe] = this;
  var r = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Vs(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, f) {
      a.setData("Text", f.textContent);
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
    supportPointer: K.supportPointer !== !1 && "PointerEvent" in window && !da,
    emptyInsertThreshold: 5
  };
  fa.initializePlugins(this, t, r);
  for (var d in r)
    !(d in n) && (n[d] = r[d]);
  zs(n);
  for (var p in this)
    p.charAt(0) === "_" && typeof this[p] == "function" && (this[p] = this[p].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : tp, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? ne(t, "pointerdown", this._onTapStart) : (ne(t, "mousedown", this._onTapStart), ne(t, "touchstart", this._onTapStart)), this.nativeDraggable && (ne(t, "dragover", this), ne(t, "dragenter", this)), Ka.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), dt(this, Wc());
}
K.prototype = /** @lends Sortable.prototype */
{
  constructor: K,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Lt = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, z) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, d = this.options, p = d.preventOnFilter, a = t.type, f = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, k = (f || t).target, h = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || k, b = d.filter;
      if (pp(r), !z && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || d.disabled) && !h.isContentEditable && !(!this.nativeDraggable && da && k && k.tagName.toUpperCase() === "SELECT") && (k = Je(k, d.draggable, r, !1), !(k && k.animated) && Fa !== k)) {
        if (Gt = Ye(k), ca = Ye(k, d.draggable), typeof b == "function") {
          if (b.call(this, t, k, this)) {
            ze({
              sortable: n,
              rootEl: h,
              name: "filter",
              targetEl: k,
              toEl: r,
              fromEl: r
            }), De("filter", n, {
              evt: t
            }), p && t.cancelable && t.preventDefault();
            return;
          }
        } else if (b && (b = b.split(",").some(function(v) {
          if (v = Je(h, v.trim(), r, !1), v)
            return ze({
              sortable: n,
              rootEl: v,
              name: "filter",
              targetEl: k,
              fromEl: r,
              toEl: r
            }), De("filter", n, {
              evt: t
            }), !0;
        }), b)) {
          p && t.cancelable && t.preventDefault();
          return;
        }
        d.handle && !Je(h, d.handle, r, !1) || this._prepareDragStart(t, f, k);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var d = this, p = d.el, a = d.options, f = p.ownerDocument, k;
    if (r && !z && r.parentNode === p) {
      var h = $e(r);
      if (be = p, z = r, ye = z.parentNode, St = z.nextSibling, Fa = r, Ta = a.group, K.dragged = z, Mt = {
        target: z,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Yr = Mt.clientX - h.left, Xr = Mt.clientY - h.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, z.style["will-change"] = "all", k = function() {
        if (De("delayEnded", d, {
          evt: t
        }), K.eventCanceled) {
          d._onDrop();
          return;
        }
        d._disableDelayedDragEvents(), !Hr && d.nativeDraggable && (z.draggable = !0), d._triggerDragStart(t, n), ze({
          sortable: d,
          name: "choose",
          originalEvent: t
        }), Ne(z, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(b) {
        Ms(z, b.trim(), So);
      }), ne(f, "dragover", Pt), ne(f, "mousemove", Pt), ne(f, "touchmove", Pt), ne(f, "mouseup", d._onDrop), ne(f, "touchend", d._onDrop), ne(f, "touchcancel", d._onDrop), Hr && this.nativeDraggable && (this.options.touchStartThreshold = 4, z.draggable = !0), De("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(_a || ct))) {
        if (K.eventCanceled) {
          this._onDrop();
          return;
        }
        ne(f, "mouseup", d._disableDelayedDrag), ne(f, "touchend", d._disableDelayedDrag), ne(f, "touchcancel", d._disableDelayedDrag), ne(f, "mousemove", d._delayedDragTouchMoveHandler), ne(f, "touchmove", d._delayedDragTouchMoveHandler), a.supportPointer && ne(f, "pointermove", d._delayedDragTouchMoveHandler), d._dragStartTimer = setTimeout(k, a.delay);
      } else
        k();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    z && So(z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    re(t, "mouseup", this._disableDelayedDrag), re(t, "touchend", this._disableDelayedDrag), re(t, "touchcancel", this._disableDelayedDrag), re(t, "mousemove", this._delayedDragTouchMoveHandler), re(t, "touchmove", this._delayedDragTouchMoveHandler), re(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ne(document, "pointermove", this._onTouchMove) : n ? ne(document, "touchmove", this._onTouchMove) : ne(document, "mousemove", this._onTouchMove) : (ne(z, "dragend", this), ne(be, "dragstart", this._onDragStart));
    try {
      document.selection ? La(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (qt = !1, be && z) {
      De("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ne(document, "dragover", rp);
      var r = this.options;
      !t && Ne(z, r.dragClass, !1), Ne(z, r.ghostClass, !0), K.active = this, t && this._appendGhost(), ze({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (We) {
      this._lastX = We.clientX, this._lastY = We.clientY, Us();
      for (var t = document.elementFromPoint(We.clientX, We.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(We.clientX, We.clientY), t !== n); )
        n = t;
      if (z.parentNode[qe]._isOutsideThisEl(t), n)
        do {
          if (n[qe]) {
            var r = void 0;
            if (r = n[qe]._onDragOver({
              clientX: We.clientX,
              clientY: We.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Ds();
    }
  },
  _onTouchMove: function(t) {
    if (Mt) {
      var n = this.options, r = n.fallbackTolerance, d = n.fallbackOffset, p = t.touches ? t.touches[0] : t, a = W && Kt(W, !0), f = W && a && a.a, k = W && a && a.d, h = za && Ve && Kr(Ve), b = (p.clientX - Mt.clientX + d.x) / (f || 1) + (h ? h[0] - Po[0] : 0) / (f || 1), v = (p.clientY - Mt.clientY + d.y) / (k || 1) + (h ? h[1] - Po[1] : 0) / (k || 1);
      if (!K.active && !qt) {
        if (r && Math.max(Math.abs(p.clientX - this._lastX), Math.abs(p.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (W) {
        a ? (a.e += b - ($o || 0), a.f += v - (Mo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: v
        };
        var $ = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        B(W, "webkitTransform", $), B(W, "mozTransform", $), B(W, "msTransform", $), B(W, "transform", $), $o = b, Mo = v, We = p;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!W) {
      var t = this.options.fallbackOnBody ? document.body : be, n = $e(z, !0, za, !0, t), r = this.options;
      if (za) {
        for (Ve = t; B(Ve, "position") === "static" && B(Ve, "transform") === "none" && Ve !== document; )
          Ve = Ve.parentNode;
        Ve !== document.body && Ve !== document.documentElement ? (Ve === document && (Ve = st()), n.top += Ve.scrollTop, n.left += Ve.scrollLeft) : Ve = st(), Po = Kr(Ve);
      }
      W = z.cloneNode(!0), Ne(W, r.ghostClass, !1), Ne(W, r.fallbackClass, !0), Ne(W, r.dragClass, !0), B(W, "transition", ""), B(W, "transform", ""), B(W, "box-sizing", "border-box"), B(W, "margin", 0), B(W, "top", n.top), B(W, "left", n.left), B(W, "width", n.width), B(W, "height", n.height), B(W, "opacity", "0.8"), B(W, "position", za ? "absolute" : "fixed"), B(W, "zIndex", "100000"), B(W, "pointerEvents", "none"), K.ghost = W, t.appendChild(W), B(W, "transform-origin", Yr / parseInt(W.style.width) * 100 + "% " + Xr / parseInt(W.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, d = t.dataTransfer, p = r.options;
    if (De("dragStart", this, {
      evt: t
    }), K.eventCanceled) {
      this._onDrop();
      return;
    }
    De("setupClone", this), K.eventCanceled || (ve = Es(z), ve.removeAttribute("id"), ve.draggable = !1, ve.style["will-change"] = "", this._hideClone(), Ne(ve, this.options.chosenClass, !1), K.clone = ve), r.cloneId = La(function() {
      De("clone", r), !K.eventCanceled && (r.options.removeCloneOnHide || be.insertBefore(ve, z), r._hideClone(), ze({
        sortable: r,
        name: "clone"
      }));
    }), !n && Ne(z, p.dragClass, !0), n ? (Ba = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (re(document, "mouseup", r._onDrop), re(document, "touchend", r._onDrop), re(document, "touchcancel", r._onDrop), d && (d.effectAllowed = "move", p.setData && p.setData.call(r, d, z)), ne(document, "drop", r), B(z, "transform", "translateZ(0)")), qt = !0, r._dragStartId = La(r._dragStarted.bind(r, n, t)), ne(document, "selectstart", r), ia = !0, da && B(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, d, p, a, f = this.options, k = f.group, h = K.active, b = Ta === k, v = f.sort, $ = Re || h, I, M = this, S = !1;
    if (Uo)
      return;
    function C(me, Ie) {
      De(me, M, it({
        evt: t,
        isOwner: b,
        axis: I ? "vertical" : "horizontal",
        revert: a,
        dragRect: d,
        targetRect: p,
        canSort: v,
        fromSortable: $,
        target: r,
        completed: T,
        onMove: function(je, H) {
          return Ua(be, n, z, d, je, $e(je), t, H);
        },
        changed: Y
      }, Ie));
    }
    function U() {
      C("dragOverAnimationCapture"), M.captureAnimationState(), M !== $ && $.captureAnimationState();
    }
    function T(me) {
      return C("dragOverCompleted", {
        insertion: me
      }), me && (b ? h._hideClone() : h._showClone(M), M !== $ && (Ne(z, Re ? Re.options.ghostClass : h.options.ghostClass, !1), Ne(z, f.ghostClass, !0)), Re !== M && M !== K.active ? Re = M : M === K.active && Re && (Re = null), $ === M && (M._ignoreWhileAnimating = r), M.animateAll(function() {
        C("dragOverAnimationComplete"), M._ignoreWhileAnimating = null;
      }), M !== $ && ($.animateAll(), $._ignoreWhileAnimating = null)), (r === z && !z.animated || r === n && !r.animated) && (Lt = null), !f.dragoverBubble && !t.rootEl && r !== document && (z.parentNode[qe]._isOutsideThisEl(t.target), !me && Pt(t)), !f.dragoverBubble && t.stopPropagation && t.stopPropagation(), S = !0;
    }
    function Y() {
      Le = Ye(z), xt = Ye(z, f.draggable), ze({
        sortable: M,
        name: "change",
        toEl: n,
        newIndex: Le,
        newDraggableIndex: xt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Je(r, f.draggable, n, !0), C("dragOver"), K.eventCanceled)
      return S;
    if (z.contains(t.target) || r.animated && r.animatingX && r.animatingY || M._ignoreWhileAnimating === r)
      return T(!1);
    if (Ba = !1, h && !f.disabled && (b ? v || (a = ye !== be) : Re === this || (this.lastPutMode = Ta.checkPull(this, h, z, t)) && k.checkPut(this, h, z, t))) {
      if (I = this._getDirection(t, r) === "vertical", d = $e(z), C("dragOverValid"), K.eventCanceled)
        return S;
      if (a)
        return ye = be, U(), this._hideClone(), C("revert"), K.eventCanceled || (St ? be.insertBefore(z, St) : be.appendChild(z)), T(!0);
      var L = Yo(n, f.draggable);
      if (!L || lp(t, I, this) && !L.animated) {
        if (L === z)
          return T(!1);
        if (L && n === t.target && (r = L), r && (p = $e(r)), Ua(be, n, z, d, r, p, t, !!r) !== !1)
          return U(), L && L.nextSibling ? n.insertBefore(z, L.nextSibling) : n.appendChild(z), ye = n, Y(), T(!0);
      } else if (L && np(t, I, this)) {
        var _e = Yt(n, 0, f, !0);
        if (_e === z)
          return T(!1);
        if (r = _e, p = $e(r), Ua(be, n, z, d, r, p, t, !1) !== !1)
          return U(), n.insertBefore(z, _e), ye = n, Y(), T(!0);
      } else if (r.parentNode === n) {
        p = $e(r);
        var ue = 0, xe, ce = z.parentNode !== n, Me = !ap(z.animated && z.toRect || d, r.animated && r.toRect || p, I), fe = I ? "top" : "left", N = Br(r, "top", "top") || Br(z, "top", "top"), ae = N ? N.scrollTop : void 0;
        Lt !== r && (xe = p[fe], ma = !1, Va = !Me && f.invertSwap || ce), ue = dp(t, r, p, I, Me ? 1 : f.swapThreshold, f.invertedSwapThreshold == null ? f.swapThreshold : f.invertedSwapThreshold, Va, Lt === r);
        var se;
        if (ue !== 0) {
          var he = Ye(z);
          do
            he -= ue, se = ye.children[he];
          while (se && (B(se, "display") === "none" || se === W));
        }
        if (ue === 0 || se === r)
          return T(!1);
        Lt = r, pa = ue;
        var oe = r.nextElementSibling, le = !1;
        le = ue === 1;
        var pe = Ua(be, n, z, d, r, p, t, le);
        if (pe !== !1)
          return (pe === 1 || pe === -1) && (le = pe === 1), Uo = !0, setTimeout(ip, 30), U(), le && !oe ? n.appendChild(z) : r.parentNode.insertBefore(z, le ? oe : r), N && Ss(N, 0, ae - N.scrollTop), ye = z.parentNode, xe !== void 0 && !Va && (Na = Math.abs(xe - $e(r)[fe])), Y(), T(!0);
      }
      if (n.contains(z))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    re(document, "mousemove", this._onTouchMove), re(document, "touchmove", this._onTouchMove), re(document, "pointermove", this._onTouchMove), re(document, "dragover", Pt), re(document, "mousemove", Pt), re(document, "touchmove", Pt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    re(t, "mouseup", this._onDrop), re(t, "touchend", this._onDrop), re(t, "pointerup", this._onDrop), re(t, "touchcancel", this._onDrop), re(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (Le = Ye(z), xt = Ye(z, r.draggable), De("drop", this, {
      evt: t
    }), ye = z && z.parentNode, Le = Ye(z), xt = Ye(z, r.draggable), K.eventCanceled) {
      this._nulling();
      return;
    }
    qt = !1, Va = !1, ma = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Do(this.cloneId), Do(this._dragStartId), this.nativeDraggable && (re(document, "drop", this), re(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), da && B(document.body, "user-select", ""), B(z, "transform", ""), t && (ia && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), W && W.parentNode && W.parentNode.removeChild(W), (be === ye || Re && Re.lastPutMode !== "clone") && ve && ve.parentNode && ve.parentNode.removeChild(ve), z && (this.nativeDraggable && re(z, "dragend", this), So(z), z.style["will-change"] = "", ia && !qt && Ne(z, Re ? Re.options.ghostClass : this.options.ghostClass, !1), Ne(z, this.options.chosenClass, !1), ze({
      sortable: this,
      name: "unchoose",
      toEl: ye,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), be !== ye ? (Le >= 0 && (ze({
      rootEl: ye,
      name: "add",
      toEl: ye,
      fromEl: be,
      originalEvent: t
    }), ze({
      sortable: this,
      name: "remove",
      toEl: ye,
      originalEvent: t
    }), ze({
      rootEl: ye,
      name: "sort",
      toEl: ye,
      fromEl: be,
      originalEvent: t
    }), ze({
      sortable: this,
      name: "sort",
      toEl: ye,
      originalEvent: t
    })), Re && Re.save()) : Le !== Gt && Le >= 0 && (ze({
      sortable: this,
      name: "update",
      toEl: ye,
      originalEvent: t
    }), ze({
      sortable: this,
      name: "sort",
      toEl: ye,
      originalEvent: t
    })), K.active && ((Le == null || Le === -1) && (Le = Gt, xt = ca), ze({
      sortable: this,
      name: "end",
      toEl: ye,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    De("nulling", this), be = z = ye = W = St = ve = Fa = kt = Mt = We = ia = Le = xt = Gt = ca = Lt = pa = Re = Ta = K.dragged = K.ghost = K.clone = K.active = null, Ya.forEach(function(t) {
      t.checked = !0;
    }), Ya.length = $o = Mo = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        z && (this._onDragOver(t), sp(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, r = this.el.children, d = 0, p = r.length, a = this.options; d < p; d++)
      n = r[d], Je(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || cp(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, d = this.el;
    this.toArray().forEach(function(p, a) {
      var f = d.children[a];
      Je(f, this.options.draggable, d, !1) && (r[p] = f);
    }, this), n && this.captureAnimationState(), t.forEach(function(p) {
      r[p] && (d.removeChild(r[p]), d.appendChild(r[p]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return Je(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var d = fa.modifyOption(this, t, n);
    typeof d < "u" ? r[t] = d : r[t] = n, t === "group" && zs(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    De("destroy", this);
    var t = this.el;
    t[qe] = null, re(t, "mousedown", this._onTapStart), re(t, "touchstart", this._onTapStart), re(t, "pointerdown", this._onTapStart), this.nativeDraggable && (re(t, "dragover", this), re(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ka.splice(Ka.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!kt) {
      if (De("hideClone", this), K.eventCanceled)
        return;
      B(ve, "display", "none"), this.options.removeCloneOnHide && ve.parentNode && ve.parentNode.removeChild(ve), kt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (kt) {
      if (De("showClone", this), K.eventCanceled)
        return;
      z.parentNode == be && !this.options.group.revertClone ? be.insertBefore(ve, z) : St ? be.insertBefore(ve, St) : be.appendChild(ve), this.options.group.revertClone && this.animate(z, ve), B(ve, "display", ""), kt = !1;
    }
  }
};
function sp(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ua(t, n, r, d, p, a, f, k) {
  var h, b = t[qe], v = b.options.onMove, $;
  return window.CustomEvent && !ct && !_a ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = n, h.from = t, h.dragged = r, h.draggedRect = d, h.related = p || n, h.relatedRect = a || $e(n), h.willInsertAfter = k, h.originalEvent = f, t.dispatchEvent(h), v && ($ = v.call(b, h, f)), $;
}
function So(t) {
  t.draggable = !1;
}
function ip() {
  Uo = !1;
}
function np(t, n, r) {
  var d = $e(Yt(r.el, 0, r.options, !0)), p = Rs(r.el, r.options, W), a = 10;
  return n ? t.clientX < p.left - a || t.clientY < d.top && t.clientX < d.right : t.clientY < p.top - a || t.clientY < d.bottom && t.clientX < d.left;
}
function lp(t, n, r) {
  var d = $e(Yo(r.el, r.options.draggable)), p = Rs(r.el, r.options, W), a = 10;
  return n ? t.clientX > p.right + a || t.clientY > d.bottom && t.clientX > d.left : t.clientY > p.bottom + a || t.clientX > d.right && t.clientY > d.top;
}
function dp(t, n, r, d, p, a, f, k) {
  var h = d ? t.clientY : t.clientX, b = d ? r.height : r.width, v = d ? r.top : r.left, $ = d ? r.bottom : r.right, I = !1;
  if (!f) {
    if (k && Na < b * p) {
      if (!ma && (pa === 1 ? h > v + b * a / 2 : h < $ - b * a / 2) && (ma = !0), ma)
        I = !0;
      else if (pa === 1 ? h < v + Na : h > $ - Na)
        return -pa;
    } else if (h > v + b * (1 - p) / 2 && h < $ - b * (1 - p) / 2)
      return up(n);
  }
  return I = I || f, I && (h < v + b * a / 2 || h > $ - b * a / 2) ? h > v + b / 2 ? 1 : -1 : 0;
}
function up(t) {
  return Ye(z) < Ye(t) ? 1 : -1;
}
function cp(t) {
  for (var n = t.tagName + t.className + t.src + t.href + t.textContent, r = n.length, d = 0; r--; )
    d += n.charCodeAt(r);
  return d.toString(36);
}
function pp(t) {
  Ya.length = 0;
  for (var n = t.getElementsByTagName("input"), r = n.length; r--; ) {
    var d = n[r];
    d.checked && Ya.push(d);
  }
}
function La(t) {
  return setTimeout(t, 0);
}
function Do(t) {
  return clearTimeout(t);
}
Za && ne(document, "touchmove", function(t) {
  (K.active || qt) && t.cancelable && t.preventDefault();
});
K.utils = {
  on: ne,
  off: re,
  css: B,
  find: Ms,
  is: function(t, n) {
    return !!Je(t, n, t, !1);
  },
  extend: Yc,
  throttle: Ps,
  closest: Je,
  toggleClass: Ne,
  clone: Es,
  index: Ye,
  nextTick: La,
  cancelNextTick: Do,
  detectDirection: Vs,
  getChild: Yt
};
K.get = function(t) {
  return t[qe];
};
K.mount = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(d) {
    if (!d.prototype || !d.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(d));
    d.utils && (K.utils = it(it({}, K.utils), d.utils)), fa.mount(d);
  });
};
K.create = function(t, n) {
  return new K(t, n);
};
K.version = Gc;
var we = [], na, Oo, Io = !1, Eo, Ro, Xa, la;
function mp() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? ne(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ne(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? ne(document, "touchmove", this._handleFallbackAutoScroll) : ne(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? re(document, "dragover", this._handleAutoScroll) : (re(document, "pointermove", this._handleFallbackAutoScroll), re(document, "touchmove", this._handleFallbackAutoScroll), re(document, "mousemove", this._handleFallbackAutoScroll)), Zr(), qa(), Xc();
    },
    nulling: function() {
      Xa = Oo = na = Io = la = Eo = Ro = null, we.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var d = this, p = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, f = document.elementFromPoint(p, a);
      if (Xa = n, r || this.options.forceAutoScrollFallback || _a || ct || da) {
        To(n, this.options, f, r);
        var k = wt(f, !0);
        Io && (!la || p !== Eo || a !== Ro) && (la && Zr(), la = setInterval(function() {
          var h = wt(document.elementFromPoint(p, a), !0);
          h !== k && (k = h, qa()), To(n, d.options, h, r);
        }, 10), Eo = p, Ro = a);
      } else {
        if (!this.options.bubbleScroll || wt(f, !0) === st()) {
          qa();
          return;
        }
        To(n, this.options, wt(f, !1), !1);
      }
    }
  }, dt(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function qa() {
  we.forEach(function(t) {
    clearInterval(t.pid);
  }), we = [];
}
function Zr() {
  clearInterval(la);
}
var To = Ps(function(t, n, r, d) {
  if (n.scroll) {
    var p = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY, f = n.scrollSensitivity, k = n.scrollSpeed, h = st(), b = !1, v;
    Oo !== r && (Oo = r, qa(), na = n.scroll, v = n.scrollFn, na === !0 && (na = wt(r, !0)));
    var $ = 0, I = na;
    do {
      var M = I, S = $e(M), C = S.top, U = S.bottom, T = S.left, Y = S.right, L = S.width, _e = S.height, ue = void 0, xe = void 0, ce = M.scrollWidth, Me = M.scrollHeight, fe = B(M), N = M.scrollLeft, ae = M.scrollTop;
      M === h ? (ue = L < ce && (fe.overflowX === "auto" || fe.overflowX === "scroll" || fe.overflowX === "visible"), xe = _e < Me && (fe.overflowY === "auto" || fe.overflowY === "scroll" || fe.overflowY === "visible")) : (ue = L < ce && (fe.overflowX === "auto" || fe.overflowX === "scroll"), xe = _e < Me && (fe.overflowY === "auto" || fe.overflowY === "scroll"));
      var se = ue && (Math.abs(Y - p) <= f && N + L < ce) - (Math.abs(T - p) <= f && !!N), he = xe && (Math.abs(U - a) <= f && ae + _e < Me) - (Math.abs(C - a) <= f && !!ae);
      if (!we[$])
        for (var oe = 0; oe <= $; oe++)
          we[oe] || (we[oe] = {});
      (we[$].vx != se || we[$].vy != he || we[$].el !== M) && (we[$].el = M, we[$].vx = se, we[$].vy = he, clearInterval(we[$].pid), (se != 0 || he != 0) && (b = !0, we[$].pid = setInterval((function() {
        d && this.layer === 0 && K.active._onTouchMove(Xa);
        var le = we[this.layer].vy ? we[this.layer].vy * k : 0, pe = we[this.layer].vx ? we[this.layer].vx * k : 0;
        typeof v == "function" && v.call(K.dragged.parentNode[qe], pe, le, t, Xa, we[this.layer].el) !== "continue" || Ss(we[this.layer].el, pe, le);
      }).bind({
        layer: $
      }), 24))), $++;
    } while (n.bubbleScroll && I !== h && (I = wt(I, !1)));
    Io = b;
  }
}, 30), Os = function(t) {
  var n = t.originalEvent, r = t.putSortable, d = t.dragEl, p = t.activeSortable, a = t.dispatchSortableEvent, f = t.hideGhostForTarget, k = t.unhideGhostForTarget;
  if (n) {
    var h = r || p;
    f();
    var b = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, v = document.elementFromPoint(b.clientX, b.clientY);
    k(), h && !h.el.contains(v) && (a("spill"), this.onSpill({
      dragEl: d,
      putSortable: r
    }));
  }
};
function Xo() {
}
Xo.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var d = Yt(this.sortable.el, this.startIndex, this.options);
    d ? this.sortable.el.insertBefore(n, d) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Os
};
dt(Xo, {
  pluginName: "revertOnSpill"
});
function Wo() {
}
Wo.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, d = r || this.sortable;
    d.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), d.animateAll();
  },
  drop: Os
};
dt(Wo, {
  pluginName: "removeOnSpill"
});
K.mount(new mp());
K.mount(Wo, Xo);
function gp(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function _p(t) {
  ga() && Go(t);
}
function fp(t) {
  ga() ? ms(t) : gs(t);
}
let Is = null, As = null;
function Jr(t = null, n = null) {
  Is = t, As = n;
}
function hp() {
  return {
    data: Is,
    clonedData: As
  };
}
const Qr = Symbol("cloneElement");
function bp(...t) {
  var n, r;
  const d = (n = ga()) == null ? void 0 : n.proxy;
  let p = null;
  const a = t[0];
  let [, f, k] = t;
  Array.isArray(s(f)) || (k = f, f = null);
  let h = null;
  const {
    immediate: b = !0,
    clone: v = gp,
    forceFallback: $,
    fallbackOnBody: I,
    customUpdate: M
  } = (r = s(k)) != null ? r : {};
  function S(N) {
    var ae;
    const { from: se, oldIndex: he, item: oe } = N, le = Array.from(se.childNodes);
    p = $ && !I ? le.slice(0, -1) : le;
    const pe = s((ae = s(f)) == null ? void 0 : ae[he]), me = v(pe);
    Jr(pe, me), oe[Qr] = me;
  }
  function C(N) {
    const ae = N.item[Qr];
    if (!Uc(ae)) {
      if (ko(N.item), vo(f)) {
        const se = [...s(f)];
        f.value = Nr(se, N.newDraggableIndex, ae);
        return;
      }
      Nr(s(f), N.newDraggableIndex, ae);
    }
  }
  function U(N) {
    const { from: ae, item: se, oldIndex: he, oldDraggableIndex: oe, pullMode: le, clone: pe } = N;
    if (Lr(ae, se, he), le === "clone") {
      ko(pe);
      return;
    }
    if (vo(f)) {
      const me = [...s(f)];
      f.value = Fr(me, oe);
      return;
    }
    Fr(s(f), oe);
  }
  function T(N) {
    if (M) {
      M(N);
      return;
    }
    const { from: ae, item: se, oldIndex: he, oldDraggableIndex: oe, newDraggableIndex: le } = N;
    if (ko(se), Lr(ae, se, he), vo(f)) {
      const pe = [...s(f)];
      f.value = Ar(
        pe,
        oe,
        le
      );
      return;
    }
    Ar(s(f), oe, le);
  }
  function Y(N) {
    const { newIndex: ae, oldIndex: se, from: he, to: oe } = N;
    let le = null;
    const pe = ae === se && he === oe;
    try {
      if (pe) {
        let me = null;
        p == null || p.some((Ie, je) => {
          if (me && (p == null ? void 0 : p.length) !== oe.childNodes.length)
            return he.insertBefore(me, Ie.nextSibling), !0;
          const H = oe.childNodes[je];
          me = oe == null ? void 0 : oe.replaceChild(Ie, H);
        });
      }
    } catch (me) {
      le = me;
    } finally {
      p = null;
    }
    gs(() => {
      if (Jr(), le)
        throw le;
    });
  }
  const L = {
    onUpdate: T,
    onStart: S,
    onAdd: C,
    onRemove: U,
    onEnd: Y
  };
  function _e(N) {
    const ae = s(a);
    return N || (N = Dc(ae) ? Oc(ae, d == null ? void 0 : d.$el) : ae), N && !Fc(N) && (N = N.$el), N || Tc("Root element not found"), N;
  }
  function ue() {
    var N;
    const ae = (N = s(k)) != null ? N : {}, { immediate: se, clone: he } = ae, oe = xs(ae, ["immediate", "clone"]);
    return qr(oe, (le, pe) => {
      Nc(le) && (oe[le] = (me, ...Ie) => {
        const je = hp();
        return Lc(me, je), pe(me, ...Ie);
      });
    }), Ac(
      f === null ? {} : L,
      oe
    );
  }
  const xe = (N) => {
    N = _e(N), h && ce.destroy(), h = new K(N, ue());
  };
  Ke(
    () => k,
    () => {
      h && qr(ue(), (N, ae) => {
        h == null || h.option(N, ae);
      });
    },
    { deep: !0 }
  );
  const ce = {
    option: (N, ae) => h == null ? void 0 : h.option(N, ae),
    destroy: () => {
      h == null || h.destroy(), h = null;
    },
    save: () => h == null ? void 0 : h.save(),
    toArray: () => h == null ? void 0 : h.toArray(),
    closest: (...N) => h == null ? void 0 : h.closest(...N)
  }, Me = () => ce == null ? void 0 : ce.option("disabled", !0), fe = () => ce == null ? void 0 : ce.option("disabled", !1);
  return fp(() => {
    b && xe();
  }), _p(ce.destroy), Ht({ start: xe, pause: Me, resume: fe }, ce);
}
const Ao = [
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
], vp = [
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
  ...Ao.map((t) => `on${t.replace(/^\S/, (n) => n.toUpperCase())}`)
], yp = Qe({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: vp,
  emits: ["update:modelValue", ...Ao],
  setup(t, { slots: n, emit: r, expose: d, attrs: p }) {
    const a = Ao.reduce((v, $) => {
      const I = `on${$.replace(/^\S/, (M) => M.toUpperCase())}`;
      return v[I] = (...M) => r($, ...M), v;
    }, {}), f = X(() => {
      const v = Ni(t), { modelValue: $ } = v, I = xs(v, ["modelValue"]), M = Object.entries(I).reduce((S, [C, U]) => {
        const T = s(U);
        return T !== void 0 && (S[C] = T), S;
      }, {});
      return Ht(Ht({}, a), zc(Ht(Ht({}, p), M)));
    }), k = X({
      get: () => t.modelValue,
      set: (v) => r("update:modelValue", v)
    }), h = D(), b = Ze(
      bp(t.target || h, k, f)
    );
    return d(b), () => {
      var v;
      return Li(t.tag || "div", { ref: h }, (v = n == null ? void 0 : n.default) == null ? void 0 : v.call(n, b));
    };
  }
});
function xp(t) {
  const n = t.delay ?? 300, r = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), a = (h) => {
    const b = r.get(h);
    b && (clearTimeout(b), r.delete(h));
    const v = d.get(h);
    v && (v.abort(), d.delete(h)), p.delete(h);
  }, f = () => {
    (/* @__PURE__ */ new Set([
      ...r.keys(),
      ...d.keys(),
      ...p.keys()
    ])).forEach((b) => a(b));
  }, k = (h, b) => {
    const v = (p.get(h) ?? 0) + 1;
    p.set(h, v);
    const $ = r.get(h);
    $ && (clearTimeout($), r.delete(h));
    const I = d.get(h);
    I && (I.abort(), d.delete(h));
    const M = setTimeout(async () => {
      var U;
      r.delete(h);
      const S = new AbortController();
      d.set(h, S);
      const C = p.get(h);
      try {
        const T = await t.search(b, { key: h, signal: S.signal });
        if (S.signal.aborted || p.get(h) !== C) return;
        t.onSuccess(h, T);
      } catch (T) {
        if (S.signal.aborted || p.get(h) !== C) return;
        (U = t.onError) == null || U.call(t, h, T);
      } finally {
        d.get(h) === S && d.delete(h);
      }
    }, n);
    r.set(h, M);
  };
  return ga() && Go(() => {
    f();
  }), {
    trigger: k,
    clearKey: a,
    clearAll: f
  };
}
function Wa() {
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: "gpt-5.4",
    sonnet_mapped_model: "gpt-5.3-codex",
    haiku_mapped_model: "gpt-5.4-mini",
    exact_model_mappings: []
  };
}
function kp(t) {
  var d, p, a;
  const n = Wa(), r = Object.entries((t == null ? void 0 : t.exact_model_mappings) || {}).sort(([f], [k]) => f.localeCompare(k)).map(([f, k]) => ({ claude_model: f, target_model: k }));
  return {
    allow_messages_dispatch: !1,
    opus_mapped_model: ((d = t == null ? void 0 : t.opus_mapped_model) == null ? void 0 : d.trim()) || n.opus_mapped_model,
    sonnet_mapped_model: ((p = t == null ? void 0 : t.sonnet_mapped_model) == null ? void 0 : p.trim()) || n.sonnet_mapped_model,
    haiku_mapped_model: ((a = t == null ? void 0 : t.haiku_mapped_model) == null ? void 0 : a.trim()) || n.haiku_mapped_model,
    exact_model_mappings: r
  };
}
function es(t) {
  const n = Object.fromEntries(
    t.exact_model_mappings.map((r) => [r.claude_model.trim(), r.target_model.trim()]).filter(([r, d]) => r && d)
  );
  return {
    opus_mapped_model: t.opus_mapped_model.trim(),
    sonnet_mapped_model: t.sonnet_mapped_model.trim(),
    haiku_mapped_model: t.haiku_mapped_model.trim(),
    exact_model_mappings: n
  };
}
function Da(t) {
  const n = Wa();
  t.allow_messages_dispatch = n.allow_messages_dispatch, t.opus_mapped_model = n.opus_mapped_model, t.sonnet_mapped_model = n.sonnet_mapped_model, t.haiku_mapped_model = n.haiku_mapped_model, t.exact_model_mappings = [];
}
const Vo = (t) => ({
  enabled: (t == null ? void 0 : t.enabled) ?? !1,
  savedModels: Fo((t == null ? void 0 : t.models) ?? []),
  items: []
}), wp = (t, n) => {
  const r = Fo(n), d = new Set(
    t.items.filter((h) => h.selected).map((h) => h.id)
  ), p = new Set(t.items.map((h) => h.id)), a = new Set(t.savedModels), f = t.items.length > 0, k = Fo([
    ...t.items.map((h) => h.id),
    ...t.savedModels,
    ...r
  ]);
  t.items = k.map((h) => {
    const b = f ? d.has(h) : t.savedModels.length > 0 ? a.has(h) : r.includes(h);
    return {
      id: h,
      selected: b && (p.has(h) || a.has(h) || t.savedModels.length === 0)
    };
  });
}, ts = (t) => {
  t.items.forEach((n) => {
    n.selected = !0;
  });
}, as = (t) => {
  t.items.forEach((n) => {
    n.selected = !n.selected;
  });
}, os = (t, n, r) => {
  if (n === r || n < 0 || r < 0 || n >= t.items.length || r >= t.items.length)
    return;
  const [d] = t.items.splice(n, 1);
  t.items.splice(r, 0, d);
}, rs = (t) => ({
  enabled: t.enabled,
  models: t.items.length > 0 ? t.items.filter((n) => n.selected).map((n) => n.id) : [...t.savedModels]
}), Fo = (t) => {
  const n = /* @__PURE__ */ new Set(), r = [];
  for (const d of t) {
    const p = d.trim();
    !p || n.has(p) || (n.add(p), r.push(p));
  }
  return r;
}, Cp = () => {
  let t = 0;
  const n = {};
  return {
    next(r) {
      return t += 1, n[r.mode] = {
        id: t,
        request: { ...r }
      }, t;
    },
    isCurrent(r, d) {
      const p = n[d.mode];
      return (p == null ? void 0 : p.id) === r && p.request.groupID === d.groupID && p.request.platform === d.platform;
    }
  };
}, ss = (t, n) => t !== "antigravity" ? [] : n ?? [], No = (t) => {
  const n = Number(t);
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.round(n * 100) / 1e4;
}, $p = (t) => {
  const n = Number(t);
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.round(n * 1e6) / 1e4;
}, Et = (t) => ["openai", "anthropic", "gemini", "grok", "antigravity"].includes(t), Mp = (t) => {
  if (!Et(t.platform) || !t.profit_control_enabled)
    return null;
  const n = Number(t.profit_min_margin_percent || 0), r = Number(t.profit_safety_buffer_percent || 0);
  if (!Number.isFinite(n) || n < 0)
    return "marginRangeError";
  if (!Number.isFinite(r) || r < 0)
    return "bufferRangeError";
  const d = No(n), p = No(r);
  return d >= 1 ? "marginRangeError" : p >= 1 ? "bufferRangeError" : d + p >= 1 ? "sumTooHigh" : null;
}, Pp = /* @__PURE__ */ new Set([
  "antigravity",
  "composite",
  "gemini",
  "grok",
  "openai"
]), is = (t) => Pp.has(t), ns = (t) => t === "grok", Oe = (t, n) => `admin.groups.imagePricing.${n}`, Be = (t) => `admin.groups.videoPricing.${t}`, ls = {
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
}, Sp = {
  grok: {
    video_price_480p: "0.05",
    video_price_720p: "0.07",
    video_price_1080p: "0.25"
  }
}, Rt = (t, n) => (ls[t] ?? ls.default)[n], Tt = (t, n) => {
  const r = Sp[t];
  return (r == null ? void 0 : r[n]) ?? "";
}, Ep = (t, n) => {
  const r = Rt(t, n);
  if (r === "")
    return null;
  const d = Number(r);
  return Number.isFinite(d) ? d : null;
}, Rp = (t, n) => {
  const r = Tt(t, n);
  if (r === "")
    return null;
  const d = Number(r);
  return Number.isFinite(d) ? d : null;
}, Lo = [
  { key: "480p", label: "480p" },
  { key: "720p", label: "720p" },
  { key: "1080p", label: "1080p" }
], qo = [
  { key: "grok-imagine-video", label: "grok-imagine-video" },
  { key: "grok-imagine-video-1.5", label: "grok-imagine-video-1.5" }
];
function Zo(t) {
  return t.trim().toLowerCase();
}
function Fs(t) {
  if (t == null || t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) && n >= 0 ? n : null;
}
function ds() {
  return Object.fromEntries(Lo.map(({ key: t }) => [t, null]));
}
function ra(t) {
  const n = {};
  for (const [r, d] of Object.entries(t ?? {})) {
    const p = Zo(r);
    if (!(!p || !d || typeof d != "object")) {
      n[p] = ds();
      for (const [a, f] of Object.entries(d)) {
        const k = Fs(f);
        k !== null && (n[p][a.trim().toLowerCase()] = k);
      }
    }
  }
  for (const { key: r } of qo)
    n[r] ?? (n[r] = ds());
  return n;
}
function us(t) {
  const n = {};
  for (const [r, d] of Object.entries(t)) {
    const p = Zo(r);
    if (!p || !d || typeof d != "object") continue;
    const a = {};
    for (const [f, k] of Object.entries(d)) {
      const h = f.trim().toLowerCase(), b = Fs(k);
      h && b !== null && (a[h] = b);
    }
    Object.keys(a).length > 0 && (n[p] = a);
  }
  return n;
}
function cs(t) {
  const n = new Set(qo.map(({ key: d }) => d)), r = Object.keys(t).map(Zo).filter((d) => d && !n.has(d)).sort().map((d) => ({ key: d, label: d }));
  return [...qo, ...r];
}
const Tp = { class: "flex flex-col justify-between gap-4 lg:flex-row lg:items-start" }, Vp = { class: "flex flex-1 flex-wrap items-center gap-3" }, zp = { class: "relative w-full sm:w-64" }, Up = ["placeholder"], Dp = { class: "flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-3 lg:w-auto" }, Op = ["disabled", "title"], Ip = ["title"], Ap = { class: "hidden md:inline" }, Fp = {
  key: 0,
  class: "absolute right-0 top-full z-50 mt-1 max-h-80 w-48 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, Np = ["onClick"], Lp = ["title"], qp = { class: "font-medium text-gray-900 dark:text-white" }, jp = { class: "font-mono text-xs text-gray-500 dark:text-gray-400" }, Hp = { class: "space-y-1" }, Gp = {
  key: 0,
  class: "space-y-0.5 text-xs text-gray-500 dark:text-gray-400"
}, Bp = {
  key: 0,
  class: "flex flex-wrap items-center gap-x-1 gap-y-0.5"
}, Kp = {
  key: 0,
  class: "whitespace-nowrap"
}, Yp = {
  key: 0,
  class: "font-medium text-gray-400 dark:text-gray-500"
}, Xp = { class: "text-gray-400 dark:text-gray-500" }, Wp = {
  key: 1,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, Zp = {
  key: 2,
  class: "whitespace-nowrap"
}, Jp = {
  key: 3,
  class: "mx-1 text-gray-300 dark:text-gray-600"
}, Qp = {
  key: 4,
  class: "whitespace-nowrap"
}, em = {
  key: 1,
  class: "text-gray-400 dark:text-gray-500"
}, tm = { class: "text-gray-400 dark:text-gray-500" }, am = { class: "ml-1 font-medium text-gray-600 dark:text-gray-300" }, om = { class: "text-sm text-gray-700 dark:text-gray-300" }, rm = { class: "space-y-0.5 text-xs" }, sm = { class: "text-gray-500 dark:text-gray-400" }, im = { class: "ml-1 font-medium text-zo-signal-600 dark:text-zo-signal-400" }, nm = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, lm = { key: 0 }, dm = { class: "text-gray-500 dark:text-gray-400" }, um = { class: "ml-1 font-medium text-zo-alert-600 dark:text-zo-alert-400" }, cm = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, pm = { class: "text-gray-500 dark:text-gray-400" }, mm = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, gm = { class: "ml-1 inline-flex items-center rounded bg-gray-100 px-1.5 py-0.5 font-medium text-gray-800 dark:bg-dark-600 dark:text-gray-300" }, _m = {
  key: 1,
  class: "text-xs text-gray-400"
}, fm = {
  key: 0,
  class: "text-xs text-gray-400"
}, hm = {
  key: 1,
  class: "space-y-0.5 text-xs"
}, bm = { class: "text-gray-500 dark:text-gray-400" }, vm = { class: "text-gray-400 dark:text-gray-500" }, ym = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, xm = { class: "text-gray-500 dark:text-gray-400" }, km = { class: "text-gray-400 dark:text-gray-500" }, wm = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, Cm = { class: "text-gray-500 dark:text-gray-400" }, $m = { class: "text-gray-400 dark:text-gray-500" }, Mm = { class: "ml-1 font-medium text-gray-700 dark:text-gray-300" }, Pm = { class: "flex items-center gap-1" }, Sm = ["onClick"], Em = { class: "text-xs" }, Rm = ["title", "disabled", "onClick"], Tm = { class: "text-xs" }, Vm = ["onClick"], zm = { class: "text-xs" }, Um = ["onClick"], Dm = { class: "text-xs" }, Om = ["onClick"], Im = { class: "text-xs" }, Am = ["onClick"], Fm = { class: "text-xs" }, Nm = { class: "input-label" }, Lm = ["placeholder"], qm = { class: "input-label" }, jm = ["placeholder"], Hm = { class: "input-label" }, Gm = { class: "input-hint" }, Bm = { key: 0 }, Km = { class: "mb-1.5 flex items-center gap-1" }, Ym = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Xm = { class: "group relative inline-flex" }, Wm = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Zm = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Jm = { class: "text-xs leading-relaxed text-gray-300" }, Qm = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, e0 = ["onClick"], t0 = { value: "" }, a0 = ["value", "disabled"], o0 = { class: "input-hint" }, r0 = { class: "input-label" }, s0 = { class: "input-hint" }, i0 = { class: "input-label" }, n0 = ["placeholder"], l0 = { class: "input-hint" }, d0 = {
  key: 2,
  "data-tour": "group-form-exclusive"
}, u0 = { class: "mb-1.5 flex items-center gap-1" }, c0 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, p0 = { class: "group relative inline-flex" }, m0 = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, g0 = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, _0 = { class: "mb-2 text-xs font-medium" }, f0 = { class: "mb-2 text-xs leading-relaxed text-gray-300" }, h0 = { class: "rounded bg-gray-800 p-2 dark:bg-gray-700" }, b0 = { class: "text-xs leading-relaxed text-gray-300" }, v0 = { class: "inline-flex items-center gap-1 text-primary-400" }, y0 = { class: "flex items-center gap-3" }, x0 = { class: "text-sm text-gray-500 dark:text-gray-400" }, k0 = { class: "mt-4 border-t pt-4" }, w0 = { class: "input-label" }, C0 = { class: "input-hint" }, $0 = {
  key: 0,
  class: "space-y-4 border-l-2 border-primary-200 pl-4 dark:border-primary-800"
}, M0 = { class: "input-label" }, P0 = ["placeholder"], S0 = { class: "input-label" }, E0 = ["placeholder"], R0 = { class: "input-label" }, T0 = ["placeholder"], V0 = { class: "border-t pt-4" }, z0 = { class: "mb-3 flex items-center justify-between gap-3" }, U0 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, D0 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, O0 = {
  key: 0,
  class: "overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 dark:border-dark-600 dark:bg-dark-800/40"
}, I0 = {
  key: 0,
  class: "flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs dark:border-dark-600 dark:bg-dark-800"
}, A0 = { class: "text-gray-500 dark:text-gray-400" }, F0 = { class: "flex items-center gap-1.5" }, N0 = { class: "max-h-64 space-y-2 overflow-y-auto p-2" }, L0 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, q0 = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, j0 = ["onUpdate:modelValue"], H0 = { class: "min-w-0 flex-1 break-all text-sm text-gray-700 dark:text-gray-300" }, G0 = ["disabled", "onClick"], B0 = ["disabled", "onClick"], K0 = {
  key: 3,
  class: "border-t pt-4"
}, Y0 = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, X0 = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, W0 = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Z0 = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, J0 = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Q0 = {
  key: 0,
  class: "mb-4"
}, eg = { class: "input-label" }, tg = { class: "grid grid-cols-3 gap-3" }, ag = ["placeholder"], og = ["placeholder"], rg = ["placeholder"], sg = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, ig = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, ng = { class: "mb-1 font-medium" }, lg = { class: "grid grid-cols-3 gap-2" }, dg = {
  key: 1,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700"
}, ug = { class: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, cg = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, pg = {
  key: 0,
  class: "mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"
}, mg = { class: "input-label" }, gg = { class: "input-label" }, _g = {
  key: 2,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, fg = {
  key: 4,
  class: "border-t pt-4"
}, hg = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, bg = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, vg = { class: "mb-4" }, yg = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, xg = {
  key: 0,
  class: "mb-4"
}, kg = { class: "input-label" }, wg = { class: "grid grid-cols-3 gap-3" }, Cg = ["placeholder"], $g = ["placeholder"], Mg = ["placeholder"], Pg = {
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700",
  "data-testid": "create-grok-video-model-prices"
}, Sg = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Eg = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Rg = { class: "mt-3 space-y-3" }, Tg = { class: "min-w-0 pb-1 font-mono text-xs text-gray-700 dark:text-gray-300" }, Vg = { class: "mb-1 block text-xs text-gray-500 dark:text-gray-400" }, zg = ["onUpdate:modelValue", "data-testid"], Ug = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, Dg = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, Og = { class: "mb-1 font-medium" }, Ig = { class: "grid grid-cols-3 gap-2" }, Ag = {
  key: 5,
  class: "border-t pt-4"
}, Fg = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Ng = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Lg = {
  key: 0,
  class: "mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
}, qg = { class: "input-label" }, jg = { class: "input-label" }, Hg = { class: "input-label" }, Gg = ["title"], Bg = {
  key: 6,
  class: "border-t pt-4"
}, Kg = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Yg = { class: "mb-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Xg = {
  key: 0,
  class: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Wg = { class: "input-label" }, Zg = ["title"], Jg = { class: "input-label" }, Qg = ["title"], e_ = {
  key: 7,
  class: "border-t pt-4"
}, t_ = { class: "mb-1.5 flex items-center gap-1" }, a_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, o_ = { class: "group relative inline-flex" }, r_ = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, s_ = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, i_ = { class: "text-xs leading-relaxed text-gray-300" }, n_ = { class: "space-y-2" }, l_ = { class: "flex items-center gap-2 cursor-pointer" }, d_ = ["checked"], u_ = { class: "text-sm text-gray-700 dark:text-gray-300" }, c_ = { class: "flex items-center gap-2 cursor-pointer" }, p_ = ["checked"], m_ = { class: "text-sm text-gray-700 dark:text-gray-300" }, g_ = { class: "flex items-center gap-2 cursor-pointer" }, __ = ["checked"], f_ = { class: "text-sm text-gray-700 dark:text-gray-300" }, h_ = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, b_ = {
  key: 8,
  class: "border-t pt-4"
}, v_ = { class: "mb-1.5 flex items-center gap-1" }, y_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, x_ = { class: "group relative inline-flex" }, k_ = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, w_ = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, C_ = { class: "text-xs leading-relaxed text-gray-300" }, $_ = { class: "flex items-center gap-3" }, M_ = { class: "text-sm text-gray-500 dark:text-gray-400" }, P_ = {
  key: 9,
  class: "border-t pt-4"
}, S_ = { class: "mb-1.5 flex items-center gap-1" }, E_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, R_ = { class: "group relative inline-flex" }, T_ = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, V_ = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, z_ = { class: "text-xs leading-relaxed text-gray-300" }, U_ = { class: "flex items-center gap-3" }, D_ = { class: "text-sm text-gray-500 dark:text-gray-400" }, O_ = {
  key: 0,
  class: "mt-3"
}, I_ = { class: "input-label" }, A_ = { class: "input-hint" }, F_ = {
  key: 10,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, N_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, L_ = { class: "input-label" }, q_ = { class: "input-hint" }, j_ = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-600 dark:bg-dark-700 dark:text-gray-300" }, H_ = { class: "border-t border-gray-200 pt-4 mt-4 dark:border-dark-400" }, G_ = { class: "flex items-start justify-between gap-4" }, B_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, K_ = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Y_ = { class: "mt-3 flex items-start gap-2" }, X_ = { class: "block text-sm text-gray-700 dark:text-gray-300" }, W_ = { class: "block text-xs text-gray-500" }, Z_ = { class: "mt-3 space-y-2" }, J_ = {
  key: 11,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, Q_ = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, ef = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, tf = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, af = { class: "input-label" }, of = ["placeholder"], rf = { class: "input-label" }, sf = ["placeholder"], nf = { class: "input-label" }, lf = ["placeholder"], df = { class: "input-label" }, uf = ["placeholder"], cf = {
  key: 12,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, pf = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, mf = { class: "flex items-center justify-between" }, gf = { class: "text-sm text-gray-600 dark:text-gray-400" }, _f = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, ff = {
  key: 13,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, hf = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, bf = { class: "flex items-center justify-between" }, vf = { class: "text-sm text-gray-600 dark:text-gray-400" }, yf = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, xf = {
  key: 0,
  class: "mt-3"
}, kf = { class: "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-600 dark:bg-dark-800" }, wf = { class: "border-b border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-dark-700 dark:bg-dark-700/50" }, Cf = { class: "flex items-center gap-2" }, $f = { class: "text-sm font-medium text-gray-900 dark:text-white" }, Mf = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Pf = { class: "p-4" }, Sf = { class: "grid gap-4 md:grid-cols-3" }, Ef = { class: "input-label" }, Rf = ["placeholder"], Tf = { class: "input-label" }, Vf = ["placeholder"], zf = { class: "input-label" }, Uf = ["placeholder"], Df = { class: "mt-5 relative overflow-hidden rounded-xl border border-primary-200 bg-white shadow-sm dark:border-primary-900/50 dark:bg-dark-800" }, Of = { class: "border-b border-primary-100 bg-primary-50/80 px-4 py-3 dark:border-primary-900/40 dark:bg-primary-900/20" }, If = { class: "flex items-start justify-between gap-3" }, Af = { class: "flex items-center gap-2" }, Ff = { class: "text-sm font-medium text-primary-900 dark:text-primary-100" }, Nf = { class: "mt-1 text-xs text-primary-600/90 dark:text-primary-400/90" }, Lf = { class: "p-4 bg-gray-50/30 dark:bg-dark-800/30" }, qf = {
  key: 0,
  class: "flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary-200 bg-white px-5 py-4 text-sm text-primary-700 transition-colors hover:border-primary-300 dark:border-primary-900/40 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-800"
}, jf = {
  key: 1,
  class: "space-y-3"
}, Hf = { class: "flex items-center gap-4" }, Gf = { class: "grid flex-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start" }, Bf = { class: "input-label" }, Kf = ["onUpdate:modelValue", "placeholder"], Yf = { class: "hidden md:flex md:justify-center md:pt-7 text-primary-300 dark:text-primary-700" }, Xf = { class: "input-label" }, Wf = ["onUpdate:modelValue", "placeholder"], Zf = ["onClick", "title"], Jf = {
  key: 14,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4 space-y-4"
}, Qf = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, eh = { class: "flex items-center justify-between" }, th = { class: "text-sm text-gray-600 dark:text-gray-400" }, ah = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, oh = { class: "flex items-center justify-between" }, rh = { class: "text-sm text-gray-600 dark:text-gray-400" }, sh = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, ih = {
  key: 15,
  class: "border-t pt-4"
}, nh = { class: "input-label" }, lh = { class: "input-hint" }, dh = {
  key: 16,
  class: "border-t pt-4"
}, uh = { class: "mb-1.5 flex items-center gap-1" }, ch = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, ph = { class: "group relative inline-flex" }, mh = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-80 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, gh = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, _h = { class: "text-xs leading-relaxed text-gray-300" }, fh = { class: "flex items-center gap-3 mb-3" }, hh = { class: "text-sm text-gray-500 dark:text-gray-400" }, bh = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, vh = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, yh = {
  key: 2,
  class: "space-y-3"
}, xh = { class: "flex items-start gap-3" }, kh = { class: "flex-1 space-y-2" }, wh = { class: "input-label text-xs" }, Ch = ["onUpdate:modelValue", "placeholder"], $h = { class: "input-label text-xs" }, Mh = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, Ph = ["onClick"], Sh = { class: "relative account-search-container" }, Eh = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], Rh = {
  key: 0,
  class: "absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, Th = ["onClick", "disabled"], Vh = { class: "ml-2 text-xs text-gray-400" }, zh = { class: "text-xs text-gray-400 mt-1" }, Uh = ["onClick", "title"], Dh = { class: "flex justify-end gap-3 pt-4" }, Oh = ["disabled"], Ih = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ah = { class: "input-label" }, Fh = { class: "input-label" }, Nh = { class: "input-label" }, Lh = { class: "input-hint" }, qh = { key: 0 }, jh = { class: "mb-1.5 flex items-center gap-1" }, Hh = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Gh = { class: "group relative inline-flex" }, Bh = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Kh = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Yh = { class: "text-xs leading-relaxed text-gray-300" }, Xh = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, Wh = ["onClick"], Zh = { value: "" }, Jh = ["value", "disabled"], Qh = { class: "input-hint" }, eb = { class: "input-label" }, tb = { class: "input-label" }, ab = ["placeholder"], ob = { class: "input-hint" }, rb = { key: 2 }, sb = { class: "mb-1.5 flex items-center gap-1" }, ib = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, nb = { class: "group relative inline-flex" }, lb = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, db = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, ub = { class: "mb-2 text-xs font-medium" }, cb = { class: "mb-2 text-xs leading-relaxed text-gray-300" }, pb = { class: "rounded bg-gray-800 p-2 dark:bg-gray-700" }, mb = { class: "text-xs leading-relaxed text-gray-300" }, gb = { class: "inline-flex items-center gap-1 text-primary-400" }, _b = { class: "flex items-center gap-3" }, fb = { class: "text-sm text-gray-500 dark:text-gray-400" }, hb = { class: "input-label" }, bb = { class: "mt-4 border-t pt-4" }, vb = { class: "input-label" }, yb = { class: "input-hint" }, xb = {
  key: 0,
  class: "space-y-4 border-l-2 border-primary-200 pl-4 dark:border-primary-800"
}, kb = { class: "input-label" }, wb = ["placeholder"], Cb = { class: "input-label" }, $b = ["placeholder"], Mb = { class: "input-label" }, Pb = ["placeholder"], Sb = { class: "border-t pt-4" }, Eb = { class: "mb-3 flex items-center justify-between gap-3" }, Rb = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Tb = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Vb = {
  key: 0,
  class: "overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 dark:border-dark-600 dark:bg-dark-800/40"
}, zb = {
  key: 0,
  class: "flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs dark:border-dark-600 dark:bg-dark-800"
}, Ub = { class: "text-gray-500 dark:text-gray-400" }, Db = { class: "flex items-center gap-1.5" }, Ob = { class: "max-h-64 space-y-2 overflow-y-auto p-2" }, Ib = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Ab = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Fb = ["onUpdate:modelValue"], Nb = { class: "min-w-0 flex-1 break-all text-sm text-gray-700 dark:text-gray-300" }, Lb = ["disabled", "onClick"], qb = ["disabled", "onClick"], jb = {
  key: 3,
  class: "border-t pt-4"
}, Hb = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, Gb = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, Bb = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Kb = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Yb = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Xb = {
  key: 0,
  class: "mb-4"
}, Wb = { class: "input-label" }, Zb = { class: "grid grid-cols-3 gap-3" }, Jb = ["placeholder"], Qb = ["placeholder"], ev = ["placeholder"], tv = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, av = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, ov = { class: "mb-1 font-medium" }, rv = { class: "grid grid-cols-3 gap-2" }, sv = {
  key: 1,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700"
}, iv = { class: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, nv = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, lv = {
  key: 0,
  class: "mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"
}, dv = { class: "input-label" }, uv = { class: "input-label" }, cv = {
  key: 2,
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-500 dark:border-dark-700 dark:text-gray-400"
}, pv = {
  key: 4,
  class: "border-t pt-4"
}, mv = { class: "block mb-2 font-medium text-gray-700 dark:text-gray-300" }, gv = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, _v = { class: "mb-4" }, fv = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, hv = {
  key: 0,
  class: "mb-4"
}, bv = { class: "input-label" }, vv = { class: "grid grid-cols-3 gap-3" }, yv = ["placeholder"], xv = ["placeholder"], kv = ["placeholder"], wv = {
  class: "mt-4 border-t border-dashed border-gray-200 pt-4 dark:border-dark-700",
  "data-testid": "edit-grok-video-model-prices"
}, Cv = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, $v = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Mv = { class: "mt-3 space-y-3" }, Pv = { class: "min-w-0 pb-1 font-mono text-xs text-gray-700 dark:text-gray-300" }, Sv = { class: "mb-1 block text-xs text-gray-500 dark:text-gray-400" }, Ev = ["onUpdate:modelValue", "data-testid"], Rv = { class: "mt-3 text-xs text-gray-500 dark:text-gray-400" }, Tv = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300" }, Vv = { class: "mb-1 font-medium" }, zv = { class: "grid grid-cols-3 gap-2" }, Uv = {
  key: 5,
  class: "border-t pt-4"
}, Dv = { class: "mb-4 grid grid-cols-1 gap-3 md:grid-cols-2" }, Ov = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Iv = {
  key: 0,
  class: "mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
}, Av = { class: "input-label" }, Fv = { class: "input-label" }, Nv = { class: "input-label" }, Lv = ["title"], qv = {
  key: 6,
  class: "border-t pt-4"
}, jv = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Hv = { class: "mb-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400" }, Gv = {
  key: 0,
  class: "mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Bv = { class: "input-label" }, Kv = ["title"], Yv = { class: "input-label" }, Xv = ["title"], Wv = {
  key: 7,
  class: "border-t pt-4"
}, Zv = { class: "mb-1.5 flex items-center gap-1" }, Jv = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, Qv = { class: "group relative inline-flex" }, ey = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, ty = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, ay = { class: "text-xs leading-relaxed text-gray-300" }, oy = { class: "space-y-2" }, ry = { class: "flex items-center gap-2 cursor-pointer" }, sy = ["checked"], iy = { class: "text-sm text-gray-700 dark:text-gray-300" }, ny = { class: "flex items-center gap-2 cursor-pointer" }, ly = ["checked"], dy = { class: "text-sm text-gray-700 dark:text-gray-300" }, uy = { class: "flex items-center gap-2 cursor-pointer" }, cy = ["checked"], py = { class: "text-sm text-gray-700 dark:text-gray-300" }, my = { class: "mt-2 text-xs text-gray-500 dark:text-gray-400" }, gy = {
  key: 8,
  class: "border-t pt-4"
}, _y = { class: "mb-1.5 flex items-center gap-1" }, fy = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, hy = { class: "group relative inline-flex" }, by = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, vy = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, yy = { class: "text-xs leading-relaxed text-gray-300" }, xy = { class: "flex items-center gap-3" }, ky = { class: "text-sm text-gray-500 dark:text-gray-400" }, wy = {
  key: 9,
  class: "border-t pt-4"
}, Cy = { class: "mb-1.5 flex items-center gap-1" }, $y = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, My = { class: "group relative inline-flex" }, Py = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-72 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, Sy = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, Ey = { class: "text-xs leading-relaxed text-gray-300" }, Ry = { class: "flex items-center gap-3" }, Ty = { class: "text-sm text-gray-500 dark:text-gray-400" }, Vy = {
  key: 0,
  class: "mt-3"
}, zy = { class: "input-label" }, Uy = { class: "input-hint" }, Dy = {
  key: 10,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, Oy = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Iy = { class: "input-label" }, Ay = { class: "input-hint" }, Fy = { class: "mt-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-600 dark:bg-dark-700 dark:text-gray-300" }, Ny = { class: "border-t border-gray-200 pt-4 mt-4 dark:border-dark-400" }, Ly = { class: "flex items-start justify-between gap-4" }, qy = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, jy = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Hy = { class: "mt-3 flex items-start gap-2" }, Gy = { class: "block text-sm text-gray-700 dark:text-gray-300" }, By = { class: "block text-xs text-gray-500" }, Ky = { class: "mt-3 space-y-2" }, Yy = {
  key: 11,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, Xy = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" }, Wy = { class: "text-xs text-gray-500 dark:text-gray-400 mb-3" }, Zy = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, Jy = { class: "input-label" }, Qy = ["placeholder"], ex = { class: "input-label" }, tx = ["placeholder"], ax = { class: "input-label" }, ox = ["placeholder"], rx = { class: "input-label" }, sx = ["placeholder"], ix = {
  key: 12,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, nx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, lx = { class: "flex items-center justify-between" }, dx = { class: "text-sm text-gray-600 dark:text-gray-400" }, ux = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, cx = {
  key: 13,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4"
}, px = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, mx = { class: "flex items-center justify-between" }, gx = { class: "text-sm text-gray-600 dark:text-gray-400" }, _x = { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, fx = {
  key: 0,
  class: "mt-3"
}, hx = { class: "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-600 dark:bg-dark-800" }, bx = { class: "border-b border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-dark-700 dark:bg-dark-700/50" }, vx = { class: "flex items-center gap-2" }, yx = { class: "text-sm font-medium text-gray-900 dark:text-white" }, xx = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, kx = { class: "p-4" }, wx = { class: "grid gap-4 md:grid-cols-3" }, Cx = { class: "input-label" }, $x = ["placeholder"], Mx = { class: "input-label" }, Px = ["placeholder"], Sx = { class: "input-label" }, Ex = ["placeholder"], Rx = { class: "mt-5 relative overflow-hidden rounded-xl border border-primary-200 bg-white shadow-sm dark:border-primary-900/50 dark:bg-dark-800" }, Tx = { class: "border-b border-primary-100 bg-primary-50/80 px-4 py-3 dark:border-primary-900/40 dark:bg-primary-900/20" }, Vx = { class: "flex items-start justify-between gap-3" }, zx = { class: "flex items-center gap-2" }, Ux = { class: "text-sm font-medium text-primary-900 dark:text-primary-100" }, Dx = { class: "mt-1 text-xs text-primary-600/90 dark:text-primary-400/90" }, Ox = { class: "p-4 bg-gray-50/30 dark:bg-dark-800/30" }, Ix = {
  key: 0,
  class: "flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary-200 bg-white px-5 py-4 text-sm text-primary-700 transition-colors hover:border-primary-300 dark:border-primary-900/40 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-800"
}, Ax = {
  key: 1,
  class: "space-y-3"
}, Fx = { class: "flex items-center gap-4" }, Nx = { class: "grid flex-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start" }, Lx = { class: "input-label" }, qx = ["onUpdate:modelValue", "placeholder"], jx = { class: "hidden md:flex md:justify-center md:pt-7 text-primary-300 dark:text-primary-700" }, Hx = { class: "input-label" }, Gx = ["onUpdate:modelValue", "placeholder"], Bx = ["onClick", "title"], Kx = {
  key: 14,
  class: "border-t border-gray-200 dark:border-dark-400 pt-4 mt-4 space-y-4"
}, Yx = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" }, Xx = { class: "flex items-center justify-between" }, Wx = { class: "text-sm text-gray-600 dark:text-gray-400" }, Zx = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Jx = { class: "flex items-center justify-between" }, Qx = { class: "text-sm text-gray-600 dark:text-gray-400" }, e1 = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, t1 = {
  key: 15,
  class: "border-t pt-4"
}, a1 = { class: "input-label" }, o1 = { class: "input-hint" }, r1 = {
  key: 16,
  class: "border-t pt-4"
}, s1 = { class: "mb-1.5 flex items-center gap-1" }, i1 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, n1 = { class: "group relative inline-flex" }, l1 = { class: "pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-80 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100" }, d1 = { class: "rounded-lg bg-gray-900 p-3 text-white shadow-lg dark:bg-gray-800" }, u1 = { class: "text-xs leading-relaxed text-gray-300" }, c1 = { class: "flex items-center gap-3 mb-3" }, p1 = { class: "text-sm text-gray-500 dark:text-gray-400" }, m1 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, g1 = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400 mb-3"
}, _1 = {
  key: 2,
  class: "space-y-3"
}, f1 = { class: "flex items-start gap-3" }, h1 = { class: "flex-1 space-y-2" }, b1 = { class: "input-label text-xs" }, v1 = ["onUpdate:modelValue", "placeholder"], y1 = { class: "input-label text-xs" }, x1 = {
  key: 0,
  class: "flex flex-wrap gap-1.5 mb-2"
}, k1 = ["onClick"], w1 = { class: "relative account-search-container" }, C1 = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], $1 = {
  key: 0,
  class: "absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white shadow-lg dark:border-dark-600 dark:bg-dark-800"
}, M1 = ["onClick", "disabled"], P1 = { class: "ml-2 text-xs text-gray-400" }, S1 = { class: "text-xs text-gray-400 mt-1" }, E1 = ["onClick", "title"], R1 = { class: "flex justify-end gap-3 pt-4" }, T1 = ["disabled"], V1 = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, z1 = { class: "space-y-4" }, U1 = { class: "text-sm text-gray-500 dark:text-gray-400" }, D1 = { class: "text-gray-400" }, O1 = { class: "flex-1" }, I1 = { class: "font-medium text-gray-900 dark:text-white" }, A1 = { class: "text-xs text-gray-500 dark:text-gray-400" }, F1 = { class: "text-sm text-gray-400" }, N1 = { class: "flex justify-end gap-3 pt-4" }, L1 = ["disabled"], q1 = {
  key: 0,
  class: "-ml-1 mr-2 h-4 w-4 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, j1 = { class: "grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]" }, H1 = { class: "min-w-0" }, G1 = { class: "mb-3 flex items-center justify-between gap-3" }, B1 = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, K1 = ["disabled"], Y1 = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-600" }, X1 = {
  key: 0,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, W1 = {
  key: 1,
  class: "flex h-36 items-center justify-center text-sm text-gray-500 dark:text-gray-400"
}, Z1 = {
  key: 2,
  class: "overflow-x-auto"
}, J1 = { class: "min-w-full divide-y divide-gray-200 text-sm dark:divide-dark-600" }, Q1 = { class: "bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:bg-dark-800 dark:text-gray-400" }, ek = { class: "px-3 py-2" }, tk = { class: "px-3 py-2" }, ak = { class: "px-3 py-2" }, ok = { class: "px-3 py-2 text-right" }, rk = { class: "divide-y divide-gray-100 bg-white dark:divide-dark-700 dark:bg-dark-900" }, sk = { class: "max-w-[15rem] px-3 py-2" }, ik = { class: "break-all font-medium text-gray-900 dark:text-white" }, nk = { class: "mt-1 flex flex-wrap items-center gap-1.5" }, lk = { class: "badge badge-gray" }, dk = {
  key: 0,
  class: "badge badge-danger"
}, uk = { class: "px-3 py-2" }, ck = { class: "flex items-center gap-1.5 text-gray-900 dark:text-white" }, pk = { class: "mt-1 break-all text-xs text-gray-500 dark:text-gray-400" }, mk = { class: "px-3 py-2" }, gk = { class: "text-gray-700 dark:text-gray-300" }, _k = { class: "text-xs text-gray-500 dark:text-gray-400" }, fk = { class: "px-3 py-2" }, hk = { class: "flex justify-end gap-1" }, bk = ["title", "onClick"], vk = ["title", "onClick"], yk = { class: "space-y-5" }, xk = { class: "flex items-center justify-between gap-3" }, kk = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, wk = { class: "input-label" }, Ck = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, $k = { class: "input-label" }, Mk = { class: "input-label" }, Pk = { class: "grid grid-cols-1 gap-3 sm:grid-cols-2" }, Sk = { class: "input-label" }, Ek = { class: "input-label" }, Rk = { class: "input-label" }, Tk = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Vk = { class: "input-label" }, zk = { class: "flex items-center justify-between gap-3" }, Uk = { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" }, Dk = ["disabled"], Ok = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Ik = { class: "mb-3 text-sm font-semibold text-gray-900 dark:text-white" }, Ak = { class: "space-y-3" }, Fk = { class: "flex gap-2" }, Nk = ["disabled"], Lk = {
  key: 0,
  class: "rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm dark:border-dark-600 dark:bg-dark-800"
}, qk = { class: "mb-2 flex items-center gap-2" }, jk = { class: "badge badge-gray" }, Hk = {
  key: 0,
  class: "space-y-1 text-gray-700 dark:text-gray-300"
}, Gk = { class: "break-all" }, Bk = {
  key: 1,
  class: "text-gray-500 dark:text-gray-400"
}, Kk = { class: "flex justify-end pt-4" }, ps = "group-hidden-columns", zo = "group-column-settings-version", Oa = 2, Yk = 0.01, Zk = /* @__PURE__ */ Qe({
  __name: "GroupsView",
  setup(t) {
    const n = () => ({
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
      time_pricing: Dr()
    }), r = (u) => u.push(n()), d = (u) => (u || []).map((i) => ({
      models: i.models || [],
      billing_mode: i.billing_mode || "token",
      input_price: rt(i.input_price),
      output_price: rt(i.output_price),
      cache_write_price: rt(i.cache_write_price),
      cache_read_price: rt(i.cache_read_price),
      image_input_price: rt(i.image_input_price),
      image_output_price: rt(i.image_output_price),
      per_request_price: i.per_request_price,
      intervals: cu(i.intervals || []),
      time_pricing: Dr()
    })), p = (u, i) => u.filter((o) => o.models.length > 0).map((o) => ({
      platform: i,
      models: o.models,
      billing_mode: o.billing_mode,
      input_price: ot(o.input_price),
      output_price: ot(o.output_price),
      cache_write_price: ot(o.cache_write_price),
      cache_read_price: ot(o.cache_read_price),
      image_input_price: ot(o.image_input_price),
      image_output_price: ot(o.image_output_price),
      per_request_price: Ko(o.per_request_price),
      intervals: o.billing_mode === "token" ? [] : pu(o.intervals || []),
      time_pricing: null
    })), { t: a } = ut(), f = jo(), k = Ki(), h = /* @__PURE__ */ new Set(["name", "actions"]), b = ["id"], v = {
      2: ["id"]
    }, $ = X(() => [
      { key: "name", label: a("admin.groups.columns.name"), sortable: !0 },
      { key: "id", label: a("admin.groups.columns.id"), sortable: !0 },
      {
        key: "platform",
        label: a("admin.groups.columns.platform"),
        sortable: !0
      },
      {
        key: "billing_type",
        label: a("admin.groups.columns.billingType"),
        sortable: !0
      },
      {
        key: "rate_multiplier",
        label: a("admin.groups.columns.rateMultiplier"),
        sortable: !0
      },
      {
        key: "is_exclusive",
        label: a("admin.groups.columns.type"),
        sortable: !0
      },
      {
        key: "account_count",
        label: a("admin.groups.columns.accounts"),
        sortable: !0
      },
      {
        key: "capacity",
        label: a("admin.groups.columns.capacity"),
        sortable: !1
      },
      { key: "usage", label: a("admin.groups.columns.usage"), sortable: !1 },
      { key: "status", label: a("admin.groups.columns.status"), sortable: !0 },
      { key: "actions", label: a("admin.groups.columns.actions"), sortable: !1 }
    ]), I = X(
      () => $.value.filter((u) => !h.has(u.key))
    ), M = Ze(/* @__PURE__ */ new Set()), S = D(!1), C = D(null), U = () => new Set(I.value.map((u) => u.key)), T = () => {
      M.clear();
      try {
        const u = localStorage.getItem(ps), i = U();
        if (u) {
          const o = JSON.parse(u);
          Array.isArray(o) && o.filter(
            (y) => typeof y == "string" && i.has(y)
          ).forEach((y) => M.add(y));
          const x = Number(
            localStorage.getItem(zo) ?? "1"
          );
          if (x < Oa) {
            let y = !1;
            for (let R = x + 1; R <= Oa; R++)
              for (const ie of v[R] ?? [])
                i.has(ie) && !M.has(ie) && (M.add(ie), y = !0);
            y ? Y() : localStorage.setItem(
              zo,
              String(Oa)
            );
          }
        } else
          b.forEach((o) => {
            i.has(o) && M.add(o);
          }), Y();
      } catch (u) {
        console.error("Failed to load group column settings:", u), b.forEach((i) => M.add(i));
      }
    }, Y = () => {
      try {
        const u = U(), i = [...M].filter((o) => u.has(o));
        localStorage.setItem(ps, JSON.stringify(i)), localStorage.setItem(
          zo,
          String(Oa)
        );
      } catch (u) {
        console.error("Failed to save group column settings:", u);
      }
    }, L = (u) => !M.has(u), _e = X(
      () => L("usage") || L("billing_type")
    ), ue = X(() => L("capacity")), xe = (u) => {
      if (!U().has(u)) return;
      const o = M.has(u);
      o ? M.delete(u) : M.add(u), Y(), o && (u === "usage" || u === "billing_type") && hr(), o && u === "capacity" && br();
    }, ce = X(
      () => $.value.filter(
        (u) => h.has(u.key) || !M.has(u.key)
      )
    );
    typeof window < "u" && T();
    const Me = X(() => [
      { value: "", label: a("admin.groups.allStatus") },
      { value: "active", label: a("admin.accounts.status.active") },
      { value: "inactive", label: a("admin.accounts.status.inactive") }
    ]), fe = X(() => [
      { value: "", label: a("admin.groups.allGroups") },
      { value: "true", label: a("admin.groups.exclusive") },
      { value: "false", label: a("admin.groups.nonExclusive") }
    ]), N = X(() => [...Tr]), ae = X(() => [
      { value: "", label: a("admin.groups.allPlatforms") },
      ...Tr
    ]), se = X(() => [
      ...qi
    ]), he = X(() => [
      { value: "any", label: a("admin.groups.compositeRoutes.endpoints.any") },
      {
        value: "messages",
        label: a("admin.groups.compositeRoutes.endpoints.messages")
      },
      {
        value: "count_tokens",
        label: a("admin.groups.compositeRoutes.endpoints.countTokens")
      },
      {
        value: "responses",
        label: a("admin.groups.compositeRoutes.endpoints.responses")
      },
      {
        value: "chat_completions",
        label: a("admin.groups.compositeRoutes.endpoints.chatCompletions")
      },
      {
        value: "embeddings",
        label: a("admin.groups.compositeRoutes.endpoints.embeddings")
      },
      { value: "images", label: a("admin.groups.compositeRoutes.endpoints.images") },
      { value: "gemini", label: a("admin.groups.compositeRoutes.endpoints.gemini") }
    ]), oe = X(() => [
      { value: "exact", label: a("admin.groups.compositeRoutes.match.exact") },
      { value: "prefix", label: a("admin.groups.compositeRoutes.match.prefix") }
    ]), le = X(() => [
      { value: "active", label: a("admin.accounts.status.active") },
      { value: "inactive", label: a("admin.accounts.status.inactive") }
    ]), pe = X(() => [
      { value: "standard", label: a("admin.groups.subscription.standard") },
      { value: "subscription", label: a("admin.groups.subscription.subscription") }
    ]), me = X(() => {
      const u = [
        { value: null, label: a("admin.groups.claudeCode.noFallback") }
      ];
      return G.value.filter(
        (o) => o.platform === "anthropic" && !o.claude_code_only && o.status === "active"
      ).forEach((o) => {
        u.push({ value: o.id, label: o.name });
      }), u;
    }), Ie = X(() => {
      var x;
      const u = [
        { value: null, label: a("admin.groups.claudeCode.noFallback") }
      ], i = (x = Ge.value) == null ? void 0 : x.id;
      return G.value.filter(
        (y) => y.platform === "anthropic" && !y.claude_code_only && y.status === "active" && y.id !== i
      ).forEach((y) => {
        u.push({ value: y.id, label: y.name });
      }), u;
    }), je = X(() => {
      const u = [
        { value: null, label: a("admin.groups.invalidRequestFallback.noFallback") }
      ];
      return G.value.filter(
        (o) => o.platform === "anthropic" && o.status === "active" && o.subscription_type !== "subscription" && o.fallback_group_id_on_invalid_request === null
      ).forEach((o) => {
        u.push({ value: o.id, label: o.name });
      }), u;
    }), H = X(() => {
      var x;
      const u = [
        { value: null, label: a("admin.groups.invalidRequestFallback.noFallback") }
      ], i = (x = Ge.value) == null ? void 0 : x.id;
      return G.value.filter(
        (y) => y.platform === "anthropic" && y.status === "active" && y.subscription_type !== "subscription" && y.fallback_group_id_on_invalid_request === null && y.id !== i
      ).forEach((y) => {
        u.push({ value: y.id, label: y.name });
      }), u;
    }), J = (u, i) => u === "composite" || i === u, ee = (u) => {
      const i = u.account_count || 0, o = a("admin.groups.platforms." + u.platform);
      return `${u.name} - ${o} (${a("admin.groups.accountsCount", { count: i })})`;
    }, A = X(() => G.value.filter(
      (i) => J(m.platform, i.platform) && (i.account_count || 0) > 0
    ).map((i) => ({
      value: i.id,
      label: ee(i)
    }))), j = X(() => {
      var o;
      const u = (o = Ge.value) == null ? void 0 : o.id;
      return G.value.filter(
        (x) => J(c.platform, x.platform) && (x.account_count || 0) > 0 && x.id !== u
      ).map((x) => ({
        value: x.id,
        label: ee(x)
      }));
    }), G = D([]), Ue = D(!1), He = D(/* @__PURE__ */ new Map()), Ct = D(!1), pt = D(/* @__PURE__ */ new Map()), Ja = D(""), et = Ze({
      platform: "",
      status: "",
      is_exclusive: ""
    }), Ae = Ze({
      page: 1,
      page_size: ji(),
      total: 0,
      pages: 0
    }), ha = Ze({
      sort_by: "sort_order",
      sort_order: "asc"
    });
    let ba = null;
    const Qa = D(!1), eo = D(!1), va = D(!1), zt = D(null), Ns = X(
      () => zt.value !== null
    ), ya = D(null);
    let xa = null;
    const to = D(!1), tt = D(!1), Xt = D(!1), Ge = D(null), mt = D(null), Ut = Ze(/* @__PURE__ */ new Set()), ao = D(!1), Jo = D(null), oo = D(!1), Qo = D(null), Dt = D([]), ro = D(!1), Fe = D(null), ka = D([]), Wt = D(!1), wa = D(!1), gt = D(null), Ot = D(""), Ca = D("any"), so = D(!1), Xe = D(null), Q = Ze({
      public_model: "",
      match_type: "exact",
      target_platform: "openai",
      upstream_model: "",
      endpoint: "any",
      priority: 100,
      enabled: !0,
      notes: ""
    }), io = Wa(), no = Wa(), Se = Ze(Vo()), Pe = Ze(Vo()), lo = D(!1), uo = D(!1), Zt = D(null), Jt = D(null), $a = Cp(), Ls = X(
      () => Se.items.filter((u) => u.selected).length
    ), qs = X(
      () => Pe.items.filter((u) => u.selected).length
    ), m = Ze({
      name: "",
      description: "",
      platform: "anthropic",
      rate_multiplier: 1,
      is_exclusive: !1,
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
      video_model_prices: ra(),
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
      opus_mapped_model: io.opus_mapped_model,
      sonnet_mapped_model: io.sonnet_mapped_model,
      haiku_mapped_model: io.haiku_mapped_model,
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
    }), $t = D([]), _t = D([]), er = Ea("create-rule"), tr = Ea("edit-rule"), js = Ea(
      "create-messages-dispatch-row"
    ), Hs = Ea(
      "edit-messages-dispatch-row"
    ), Gs = (u) => er(u), Bs = (u) => tr(u), Ks = (u) => js(u), Ys = (u) => Hs(u), ft = (u) => `create-${er(u)}`, ht = (u) => `edit-${tr(u)}`, co = (u, i = !1) => i ? ht(u) : ft(u), bt = D({}), nt = D({}), vt = D({}), ar = (u) => {
      delete bt.value[u], delete nt.value[u], delete vt.value[u];
    }, po = () => {
      bt.value = {}, nt.value = {}, vt.value = {};
    }, It = xp({
      delay: 300,
      search: async (u, { signal: i }) => (await ge.accounts.list(
        1,
        20,
        {
          search: u,
          platform: "anthropic"
        },
        { signal: i }
      )).items.map((x) => ({ id: x.id, name: x.name })),
      onSuccess: (u, i) => {
        nt.value[u] = i;
      },
      onError: (u) => {
        nt.value[u] = [];
      }
    }), or = (u) => {
      It.trigger(u, bt.value[u] || "");
    }, rr = (u, i = !1) => {
      or(co(u, i));
    }, sr = (u, i, o = !1) => {
      if (!u) return;
      u.accounts.some((y) => y.id === i.id) || u.accounts.push(i);
      const x = co(u, o);
      bt.value[x] = "", vt.value[x] = !1;
    }, ir = (u, i, o = !1) => {
      u && (u.accounts = u.accounts.filter((x) => x.id !== i));
    }, mo = (u) => {
      const i = m.supported_model_scopes.indexOf(u);
      i === -1 ? m.supported_model_scopes.push(u) : m.supported_model_scopes.splice(i, 1);
    }, go = (u) => {
      const i = c.supported_model_scopes.indexOf(u);
      i === -1 ? c.supported_model_scopes.push(u) : c.supported_model_scopes.splice(i, 1);
    }, nr = (u, i = !1) => {
      var x;
      const o = co(u, i);
      vt.value[o] = !0, (x = nt.value[o]) != null && x.length || or(o);
    }, Xs = () => {
      $t.value.push({ pattern: "", accounts: [] });
    }, Ws = (u) => {
      const i = $t.value.indexOf(u);
      if (i === -1) return;
      const o = ft(u);
      It.clearKey(o), ar(o), $t.value.splice(i, 1);
    }, Zs = () => {
      _t.value.push({ pattern: "", accounts: [] });
    }, Js = (u) => {
      const i = _t.value.indexOf(u);
      if (i === -1) return;
      const o = ht(u);
      It.clearKey(o), ar(o), _t.value.splice(i, 1);
    }, Qt = (u, i) => {
      const o = Vo(i);
      u.enabled = o.enabled, u.savedModels = o.savedModels, u.items = o.items;
    }, ea = async (u, i, o) => {
      const x = { mode: u, groupID: i, platform: o }, y = $a.next(x), R = u === "create" ? Se : Pe, ie = u === "create" ? lo : uo;
      ie.value = !0;
      try {
        const Ft = await ge.groups.getModelsListCandidates(i, o);
        if (!$a.isCurrent(y, x))
          return;
        wp(R, Ft);
      } catch (Ft) {
        if (!$a.isCurrent(y, x))
          return;
        console.error("Error loading group models list candidates:", Ft);
      } finally {
        $a.isCurrent(y, x) && (ie.value = !1);
      }
    }, lr = (u, i) => {
      os(Se, u, i);
    }, dr = (u, i) => {
      os(Pe, u, i);
    }, ur = (u) => {
      const i = {};
      let o = !1;
      for (const x of u) {
        const y = x.pattern.trim();
        if (!y) continue;
        const R = x.accounts.map((ie) => ie.id).filter((ie) => ie > 0);
        R.length > 0 && (i[y] = R, o = !0);
      }
      return o ? i : null;
    }, Qs = async (u) => {
      if (!u) return [];
      const i = [];
      for (const [o, x] of Object.entries(u)) {
        const y = [];
        for (const R of x)
          try {
            const ie = await ge.accounts.getById(R);
            y.push({ id: ie.id, name: ie.name });
          } catch {
            y.push({ id: R, name: `#${R}` });
          }
        i.push({ pattern: o, accounts: y });
      }
      return i;
    }, c = Ze({
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
      video_model_prices: ra(),
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
      opus_mapped_model: no.opus_mapped_model,
      sonnet_mapped_model: no.sonnet_mapped_model,
      haiku_mapped_model: no.haiku_mapped_model,
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
    }), ei = [
      { key: "image_price_1k", label: "1K" },
      { key: "image_price_2k", label: "2K" },
      { key: "image_price_4k", label: "4K" }
    ], ti = [
      { key: "video_price_480p", label: "480p" },
      { key: "video_price_720p", label: "720p" },
      { key: "video_price_1080p", label: "1080p" }
    ], ta = (u, i = 0) => {
      if (u == null || u === "")
        return i;
      const o = Number(u);
      return Number.isFinite(o) ? o : i;
    }, _o = (u) => {
      if (u == null || u === "")
        return null;
      const i = Number(u);
      return Number.isFinite(i) && i >= 0 ? i : null;
    }, cr = (u) => {
      if (u == null || u === "")
        return a("admin.groups.imagePricing.notConfigured");
      const i = Number(u);
      return !Number.isFinite(i) || i < 0 ? a("admin.groups.imagePricing.notConfigured") : `$${i.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, ai = (u) => {
      if (u == null || u === "")
        return a("admin.groups.videoPricing.notConfigured");
      const i = Number(u);
      return !Number.isFinite(i) || i < 0 ? a("admin.groups.videoPricing.notConfigured") : `$${i.toFixed(6).replace(/0+$/, "").replace(/\.$/, "")}`;
    }, pr = (u) => {
      const o = u.image_rate_independent ? ta(u.image_rate_multiplier, 1) : ta(u.rate_multiplier, 1);
      return ei.map((x) => {
        const y = _o(u[x.key]) ?? Ep(u.platform, x.key);
        return {
          label: x.label,
          value: y !== null ? cr(y * o) : a("admin.groups.imagePricing.notConfigured")
        };
      });
    }, mr = (u) => {
      const i = u.video_rate_independent ? ta(u.video_rate_multiplier, 1) : ta(u.rate_multiplier, 1);
      return ti.map((o) => {
        const x = _o(u[o.key]) ?? Rp(u.platform, o.key);
        return {
          label: o.label,
          value: x !== null ? ai(x * i) : a("admin.groups.videoPricing.notConfigured")
        };
      });
    }, oi = X(
      () => pr(m)
    ), ri = X(
      () => pr(c)
    ), si = X(
      () => mr(m)
    ), ii = X(
      () => mr(c)
    ), gr = (u) => {
      const i = _o(u.web_search_price_per_call) ?? Yk, o = ta(u.rate_multiplier, 1);
      return cr(i * o);
    }, ni = X(
      () => gr(m)
    ), li = X(
      () => gr(c)
    ), yt = (u) => {
      (u.platform !== "gemini" || !u.allow_image_generation) && (u.allow_batch_image_generation = !1), u.allow_batch_image_generation || (u.batch_image_discount_multiplier = 0.5, u.batch_image_hold_multiplier = 0.6);
    }, di = X(() => mt.value ? mt.value.subscription_type === "subscription" ? a("admin.groups.deleteConfirmSubscription", {
      name: mt.value.name
    }) : a("admin.groups.deleteConfirm", { name: mt.value.name }) : ""), _r = async () => ya.value ? ya.value : (xa || (xa = ge.groups.getLiveCapability().catch(() => ({ supported: !1 })).finally(() => {
      xa = null;
    })), ya.value = await xa, ya.value ?? { supported: !1 }), fr = async (u) => {
      const i = u === "create" ? m : c;
      if (i.allow_live) {
        i.allow_live = !1;
        return;
      }
      if ((await _r()).supported) {
        i.allow_live = !0;
        return;
      }
      zt.value = u;
    }, ui = () => {
      zt.value === "create" && (m.allow_live = !0), zt.value === "edit" && (c.allow_live = !0), zt.value = null;
    }, ci = () => {
      zt.value = null;
    }, Te = async () => {
      ba && ba.abort();
      const u = new AbortController();
      ba = u;
      const { signal: i } = u;
      Ue.value = !0;
      try {
        const o = await ge.groups.list(
          Ae.page,
          Ae.page_size,
          {
            platform: et.platform || void 0,
            status: et.status,
            is_exclusive: et.is_exclusive ? et.is_exclusive === "true" : void 0,
            search: Ja.value.trim() || void 0,
            sort_by: ha.sort_by,
            sort_order: ha.sort_order
          },
          { signal: i }
        );
        if (i.aborted) return;
        G.value = o.items, Ae.total = o.total, Ae.pages = o.pages, _e.value ? hr() : Ct.value = !1, ue.value && br();
      } catch (o) {
        if (i.aborted || (o == null ? void 0 : o.name) === "AbortError" || (o == null ? void 0 : o.code) === "ERR_CANCELED")
          return;
        f.showError(a("admin.groups.failedToLoad")), console.error("Error loading groups:", o);
      } finally {
        ba === u && !i.aborted && (Ue.value = !1);
      }
    }, Ma = (u) => u >= 1e3 ? u.toFixed(0) : u >= 100 ? u.toFixed(1) : u.toFixed(2), aa = (u) => `$${Ma(u ?? 0)}`, pi = (u, i) => {
      if (!i || i <= 0)
        return "font-medium text-gray-700 dark:text-gray-300";
      const o = u / i;
      return o >= 1 ? "font-semibold text-red-600 dark:text-red-400" : o >= 0.8 ? "font-semibold text-zo-alert-600 dark:text-zo-alert-400" : "font-medium text-gray-700 dark:text-gray-300";
    }, hr = async () => {
      if (!_e.value) {
        Ct.value = !1;
        return;
      }
      Ct.value = !0;
      try {
        const u = await ge.groups.getUsageSummary(), i = /* @__PURE__ */ new Map();
        for (const o of u)
          i.set(o.group_id, {
            today_cost: o.today_cost,
            yesterday_cost: o.yesterday_cost,
            total_cost: o.total_cost
          });
        He.value = i;
      } catch (u) {
        console.error("Error loading group usage summary:", u);
      } finally {
        Ct.value = !1;
      }
    }, br = async () => {
      if (ue.value)
        try {
          const u = await ge.groups.getCapacitySummary(), i = /* @__PURE__ */ new Map();
          for (const o of u)
            i.set(o.group_id, {
              concurrencyUsed: o.concurrency_used,
              concurrencyMax: o.concurrency_max,
              sessionsUsed: o.sessions_used,
              sessionsMax: o.sessions_max,
              rpmUsed: o.rpm_used,
              rpmMax: o.rpm_max
            });
          pt.value = i;
        } catch (u) {
          console.error("Error loading group capacity summary:", u);
        }
    };
    let vr;
    const mi = () => {
      clearTimeout(vr), vr = setTimeout(() => {
        Ae.page = 1, Te();
      }, 300);
    }, gi = (u) => {
      Ae.page = u, Te();
    }, _i = (u) => {
      Ae.page_size = u, Ae.page = 1, Te();
    }, fi = (u, i) => {
      ha.sort_by = u, ha.sort_order = i, Ae.page = 1, Te();
    }, yr = () => {
      Qa.value = !0, ea("create", 0, m.platform);
    }, fo = () => {
      var u;
      Qa.value = !1, $t.value.forEach((i) => {
        It.clearKey(ft(i));
      }), po(), m.name = "", m.description = "", m.platform = "anthropic", m.rate_multiplier = 1, m.is_exclusive = !1, m.subscription_type = "standard", m.daily_limit_usd = null, m.weekly_limit_usd = null, m.monthly_limit_usd = null, m.allow_image_generation = !1, m.allow_batch_image_generation = !1, m.image_rate_independent = !1, m.image_rate_multiplier = 1, m.batch_image_discount_multiplier = 0.5, m.batch_image_hold_multiplier = 0.6, m.image_price_1k = null, m.image_price_2k = null, m.image_price_4k = null, m.video_rate_independent = !1, m.video_rate_multiplier = 1, m.video_price_480p = null, m.video_price_720p = null, m.video_price_1080p = null, m.video_model_prices = ra(), m.long_context_pricing_enabled = !0, m.model_pricing = [], m.web_search_price_per_call = null, m.search_price_per_1k = null, m.audio_realtime_price_per_min = null, m.audio_tts_price_per_million_chars = null, m.audio_stt_price_per_hour = null, m.peak_rate_enabled = !1, m.peak_start = "", m.peak_end = "", m.peak_rate_multiplier = 1, m.profit_control_enabled = !1, m.profit_min_margin_percent = 0, m.profit_safety_buffer_percent = 0, m.claude_code_only = !1, m.fallback_group_id = null, m.fallback_group_id_on_invalid_request = null, Da(m), m.allow_live = !1, m.require_oauth_only = !1, m.require_privacy_set = !1, m.supported_model_scopes = ["claude", "gemini_text", "gemini_image"], m.mcp_xml_inject = !0, m.copy_accounts_from_group_ids = [], m.rpm_limit = 0, m.max_reasoning_effort = "", m.reasoning_effort_mappings = [], (u = Zt.value) == null || u.resetValidation(), Qt(Se), $t.value = [];
    }, At = (u) => {
      if (u == null)
        return null;
      if (typeof u == "string") {
        const i = u.trim();
        if (!i)
          return null;
        const o = Number(i);
        return Number.isFinite(o) && o > 0 ? o : null;
      }
      return Number.isFinite(u) && u > 0 ? u : null;
    }, at = (u) => {
      if (u == null || u === "")
        return 1;
      const i = Number(u);
      return Number.isFinite(i) && i >= 0 ? i : 1;
    }, Pa = No, xr = $p, kr = (u) => {
      const i = Mp(u);
      return i ? (f.showError(a(`admin.groups.profitControl.${i}`)), !1) : !0;
    }, hi = async () => {
      var u, i;
      if (!m.name.trim()) {
        f.showError(a("admin.groups.nameRequired"));
        return;
      }
      if (!(sa(m.platform) && Zt.value && !Zt.value.validate()) && kr(m)) {
        tt.value = !0;
        try {
          const {
            video_model_prices: o,
            ...x
          } = m, y = us(
            m.video_model_prices
          ), R = {
            ...x,
            model_pricing: p(
              m.model_pricing,
              m.platform
            ),
            daily_limit_usd: At(
              m.daily_limit_usd
            ),
            weekly_limit_usd: At(
              m.weekly_limit_usd
            ),
            monthly_limit_usd: At(
              m.monthly_limit_usd
            ),
            ...Object.keys(y).length > 0 ? { video_model_prices: y } : {},
            model_routing: ur(
              $t.value
            ),
            models_list_config: rs(Se),
            supported_model_scopes: ss(
              m.platform,
              m.supported_model_scopes
            ),
            messages_dispatch_model_config: m.platform === "openai" ? es({
              allow_messages_dispatch: m.allow_messages_dispatch,
              opus_mapped_model: m.opus_mapped_model,
              sonnet_mapped_model: m.sonnet_mapped_model,
              haiku_mapped_model: m.haiku_mapped_model,
              exact_model_mappings: m.exact_model_mappings
            }) : void 0,
            reasoning_effort_mappings: Ra(
              m.reasoning_effort_mappings
            ),
            // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
            profit_control_enabled: Et(m.platform) && m.profit_control_enabled,
            profit_min_margin: Pa(m.profit_min_margin_percent),
            profit_safety_buffer: Pa(
              m.profit_safety_buffer_percent
            )
          };
          delete R.profit_min_margin_percent, delete R.profit_safety_buffer_percent;
          const ie = (Ft) => Ft === "" ? null : Ft;
          R.daily_limit_usd = ie(R.daily_limit_usd), R.weekly_limit_usd = ie(R.weekly_limit_usd), R.monthly_limit_usd = ie(R.monthly_limit_usd), R.image_rate_multiplier = at(
            R.image_rate_multiplier
          ), yt(R), R.batch_image_discount_multiplier = at(
            R.batch_image_discount_multiplier
          ), R.batch_image_hold_multiplier = at(
            R.batch_image_hold_multiplier
          ), R.video_rate_multiplier = at(
            R.video_rate_multiplier
          ), R.image_price_1k = ie(R.image_price_1k), R.image_price_2k = ie(R.image_price_2k), R.image_price_4k = ie(R.image_price_4k), R.video_price_480p = ie(R.video_price_480p), R.video_price_720p = ie(R.video_price_720p), R.video_price_1080p = ie(R.video_price_1080p), R.search_price_per_1k = ie(
            R.search_price_per_1k
          ), R.audio_realtime_price_per_min = ie(
            R.audio_realtime_price_per_min
          ), R.audio_tts_price_per_million_chars = ie(
            R.audio_tts_price_per_million_chars
          ), R.audio_stt_price_per_hour = ie(
            R.audio_stt_price_per_hour
          ), R.web_search_price_per_call = ie(
            R.web_search_price_per_call
          ), R.peak_rate_enabled = m.peak_rate_enabled, R.peak_start = m.peak_start, R.peak_end = m.peak_end, R.peak_rate_multiplier = at(
            m.peak_rate_multiplier
          ), await ge.groups.create(R), f.showSuccess(a("admin.groups.groupCreated")), fo(), Te(), k.isCurrentStep('[data-tour="group-form-submit"]') && k.nextStep(500);
        } catch (o) {
          f.showError(
            ((i = (u = o.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || a("admin.groups.failedToCreate")
          ), console.error("Error creating group:", o);
        } finally {
          tt.value = !1;
        }
      }
    }, bi = async (u) => {
      Ge.value = u, c.name = u.name, c.description = u.description || "", c.platform = u.platform, c.rate_multiplier = u.rate_multiplier, c.is_exclusive = u.is_exclusive, c.status = u.status, c.subscription_type = u.subscription_type || "standard", c.daily_limit_usd = u.daily_limit_usd, c.weekly_limit_usd = u.weekly_limit_usd, c.monthly_limit_usd = u.monthly_limit_usd, c.long_context_pricing_enabled = u.long_context_pricing_enabled ?? !0, c.model_pricing = d(u.model_pricing), c.allow_image_generation = u.allow_image_generation ?? !1, c.allow_batch_image_generation = u.allow_batch_image_generation ?? !1, c.image_rate_independent = u.image_rate_independent ?? !1, c.image_rate_multiplier = u.image_rate_multiplier ?? 1, c.batch_image_discount_multiplier = u.batch_image_discount_multiplier ?? 0.5, c.batch_image_hold_multiplier = u.batch_image_hold_multiplier ?? 0.6, c.image_price_1k = u.image_price_1k, c.image_price_2k = u.image_price_2k, c.image_price_4k = u.image_price_4k, c.video_rate_independent = u.video_rate_independent ?? !1, c.video_rate_multiplier = u.video_rate_multiplier ?? 1, c.video_price_480p = u.video_price_480p, c.video_price_720p = u.video_price_720p, c.video_price_1080p = u.video_price_1080p, c.video_model_prices = ra(
        u.video_model_prices
      ), c.web_search_price_per_call = u.web_search_price_per_call ?? null, c.search_price_per_1k = u.search_price_per_1k ?? null, c.audio_realtime_price_per_min = u.audio_realtime_price_per_min ?? null, c.audio_tts_price_per_million_chars = u.audio_tts_price_per_million_chars ?? null, c.audio_stt_price_per_hour = u.audio_stt_price_per_hour ?? null, c.peak_rate_enabled = u.peak_rate_enabled ?? !1, c.peak_start = u.peak_start ?? "", c.peak_end = u.peak_end ?? "", c.peak_rate_multiplier = u.peak_rate_multiplier ?? 1, c.profit_control_enabled = u.profit_control_enabled ?? !1, c.profit_min_margin_percent = xr(
        u.profit_min_margin ?? 0
      ), c.profit_safety_buffer_percent = xr(
        u.profit_safety_buffer ?? 0
      ), c.claude_code_only = u.claude_code_only || !1, c.fallback_group_id = u.fallback_group_id, c.fallback_group_id_on_invalid_request = u.fallback_group_id_on_invalid_request;
      const i = kp(
        u.messages_dispatch_model_config
      );
      c.allow_messages_dispatch = u.allow_messages_dispatch || i.allow_messages_dispatch, c.allow_live = u.allow_live ?? !1, c.opus_mapped_model = i.opus_mapped_model, c.sonnet_mapped_model = i.sonnet_mapped_model, c.haiku_mapped_model = i.haiku_mapped_model, c.exact_model_mappings = i.exact_model_mappings, c.require_oauth_only = u.require_oauth_only ?? !1, c.require_privacy_set = u.require_privacy_set ?? !1, c.model_routing_enabled = u.model_routing_enabled || !1, c.supported_model_scopes = u.supported_model_scopes || [
        "claude",
        "gemini_text",
        "gemini_image"
      ], c.mcp_xml_inject = u.mcp_xml_inject ?? !0, c.copy_accounts_from_group_ids = [], c.rpm_limit = u.rpm_limit ?? 0, c.max_reasoning_effort = Vt(
        u.platform,
        u.max_reasoning_effort
      ), c.reasoning_effort_mappings = yo(
        u.reasoning_effort_mappings,
        u.platform
      ), Qt(Pe, u.models_list_config), _t.value = await Qs(
        u.model_routing
      ), ea("edit", u.id, u.platform), eo.value = !0;
    }, ho = () => {
      var u;
      _t.value.forEach((i) => {
        It.clearKey(ht(i));
      }), po(), eo.value = !1, Ge.value = null, c.max_reasoning_effort = "", c.reasoning_effort_mappings = [], (u = Jt.value) == null || u.resetValidation(), _t.value = [], c.copy_accounts_from_group_ids = [], c.peak_rate_enabled = !1, c.peak_start = "", c.peak_end = "", c.peak_rate_multiplier = 1, c.profit_control_enabled = !1, c.profit_min_margin_percent = 0, c.profit_safety_buffer_percent = 0, c.video_rate_independent = !1, c.video_rate_multiplier = 1, c.video_price_480p = null, c.video_price_720p = null, c.video_price_1080p = null, c.video_model_prices = ra(), c.long_context_pricing_enabled = !0, c.model_pricing = [], c.web_search_price_per_call = null, c.search_price_per_1k = null, c.audio_realtime_price_per_min = null, c.audio_tts_price_per_million_chars = null, c.audio_stt_price_per_hour = null, Da(c), c.allow_live = !1, Qt(Pe);
    }, vi = async () => {
      var u, i;
      if (Ge.value) {
        if (!c.name.trim()) {
          f.showError(a("admin.groups.nameRequired"));
          return;
        }
        if (!(sa(c.platform) && Jt.value && !Jt.value.validate()) && kr(c)) {
          tt.value = !0;
          try {
            const o = {
              ...c,
              model_pricing: p(
                c.model_pricing,
                c.platform
              ),
              daily_limit_usd: At(
                c.daily_limit_usd
              ),
              weekly_limit_usd: At(
                c.weekly_limit_usd
              ),
              monthly_limit_usd: At(
                c.monthly_limit_usd
              ),
              video_model_prices: us(
                c.video_model_prices
              ),
              fallback_group_id: c.fallback_group_id === null ? 0 : c.fallback_group_id,
              fallback_group_id_on_invalid_request: c.fallback_group_id_on_invalid_request === null ? 0 : c.fallback_group_id_on_invalid_request,
              model_routing: ur(
                _t.value
              ),
              models_list_config: rs(Pe),
              supported_model_scopes: ss(
                c.platform,
                c.supported_model_scopes
              ),
              messages_dispatch_model_config: c.platform === "openai" ? es({
                allow_messages_dispatch: c.allow_messages_dispatch,
                opus_mapped_model: c.opus_mapped_model,
                sonnet_mapped_model: c.sonnet_mapped_model,
                haiku_mapped_model: c.haiku_mapped_model,
                exact_model_mappings: c.exact_model_mappings
              }) : void 0,
              reasoning_effort_mappings: Ra(
                c.reasoning_effort_mappings
              ),
              // 利润控制：界面百分比转小数提交；仅五个 token 平台可启用
              profit_control_enabled: Et(c.platform) && c.profit_control_enabled,
              profit_min_margin: Pa(c.profit_min_margin_percent),
              profit_safety_buffer: Pa(
                c.profit_safety_buffer_percent
              )
            };
            delete o.profit_min_margin_percent, delete o.profit_safety_buffer_percent;
            const x = (R) => R === "" ? null : R;
            o.daily_limit_usd = x(o.daily_limit_usd), o.weekly_limit_usd = x(o.weekly_limit_usd), o.monthly_limit_usd = x(o.monthly_limit_usd), o.image_rate_multiplier = at(
              o.image_rate_multiplier
            ), yt(o), o.batch_image_discount_multiplier = at(
              o.batch_image_discount_multiplier
            ), o.batch_image_hold_multiplier = at(
              o.batch_image_hold_multiplier
            ), o.video_rate_multiplier = at(
              o.video_rate_multiplier
            );
            const y = (R) => R === "" || R === null ? -1 : R;
            o.image_price_1k = y(o.image_price_1k), o.image_price_2k = y(o.image_price_2k), o.image_price_4k = y(o.image_price_4k), o.video_price_480p = y(o.video_price_480p), o.video_price_720p = y(o.video_price_720p), o.video_price_1080p = y(o.video_price_1080p), o.search_price_per_1k = y(
              o.search_price_per_1k
            ), o.audio_realtime_price_per_min = y(
              o.audio_realtime_price_per_min
            ), o.audio_tts_price_per_million_chars = y(
              o.audio_tts_price_per_million_chars
            ), o.audio_stt_price_per_hour = y(
              o.audio_stt_price_per_hour
            ), o.web_search_price_per_call = y(
              o.web_search_price_per_call
            ), o.peak_rate_enabled = c.peak_rate_enabled, o.peak_start = c.peak_start, o.peak_end = c.peak_end, o.peak_rate_multiplier = at(
              c.peak_rate_multiplier
            ), await ge.groups.update(Ge.value.id, o), f.showSuccess(a("admin.groups.groupUpdated")), ho(), Te();
          } catch (o) {
            f.showError(
              ((i = (u = o.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || a("admin.groups.failedToUpdate")
            ), console.error("Error updating group:", o);
          } finally {
            tt.value = !1;
          }
        }
      }
    }, wr = () => {
      m.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, yi = (u) => {
      const i = m.exact_model_mappings.indexOf(u);
      i !== -1 && m.exact_model_mappings.splice(i, 1);
    }, Cr = () => {
      c.exact_model_mappings.push({ claude_model: "", target_model: "" });
    }, xi = (u) => {
      const i = c.exact_model_mappings.indexOf(u);
      i !== -1 && c.exact_model_mappings.splice(i, 1);
    }, ki = (u) => {
      Jo.value = u, ao.value = !0;
    }, wi = (u) => {
      Qo.value = u, oo.value = !0;
    }, Ci = async (u) => {
      if (!Ut.has(u.id)) {
        Ut.add(u.id);
        try {
          const i = await ge.groups.duplicate(u.id);
          f.showSuccess(
            a("admin.groups.duplicateSuccess", { name: i.name })
          ), await Te();
        } catch (i) {
          f.showError(
            Bi(i, a("admin.groups.duplicateFailed"))
          );
        } finally {
          Ut.delete(u.id);
        }
      }
    }, $i = (u) => {
      var i;
      return ((i = oe.value.find((o) => o.value === u)) == null ? void 0 : i.label) || u;
    }, Mi = (u) => {
      var i;
      return ((i = he.value.find((o) => o.value === u)) == null ? void 0 : i.label) || u;
    }, $r = (u) => u ? a(`admin.groups.platforms.${u}`) : "—", Pi = (u) => u === "route" ? a("admin.groups.compositeRoutes.sources.route") : u === "detector" ? a("admin.groups.compositeRoutes.sources.detector") : u || "—", oa = () => {
      gt.value = null, Q.public_model = "", Q.match_type = "exact", Q.target_platform = "openai", Q.upstream_model = "", Q.endpoint = "any", Q.priority = 100, Q.enabled = !0, Q.notes = "";
    }, Si = () => ({
      public_model: Q.public_model.trim(),
      match_type: Q.match_type,
      target_platform: Q.target_platform,
      upstream_model: Q.upstream_model.trim(),
      endpoint: Q.endpoint,
      priority: Number(Q.priority) || 100,
      enabled: Q.enabled,
      notes: Q.notes.trim()
    }), Sa = async () => {
      var u, i, o, x;
      if (Fe.value) {
        Wt.value = !0;
        try {
          const y = await ge.groups.listCompositeRoutes(
            Fe.value.id
          );
          ka.value = y.sort((R, ie) => R.priority !== ie.priority ? R.priority - ie.priority : R.id - ie.id);
        } catch (y) {
          f.showError(
            ((i = (u = y.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || ((x = (o = y.response) == null ? void 0 : o.data) == null ? void 0 : x.message) || a("admin.groups.compositeRoutes.failedToLoad")
          ), console.error("Error loading composite routes:", y);
        } finally {
          Wt.value = !1;
        }
      }
    }, Ei = async (u) => {
      Fe.value = u, Ot.value = "", Ca.value = "any", Xe.value = null, oa(), ro.value = !0, await Sa();
    }, Mr = () => {
      ro.value = !1, Fe.value = null, ka.value = [], Xe.value = null, oa();
    }, Ri = (u) => {
      gt.value = u.id, Q.public_model = u.public_model, Q.match_type = u.match_type, Q.target_platform = u.target_platform, Q.upstream_model = u.upstream_model, Q.endpoint = u.endpoint, Q.priority = u.priority || 100, Q.enabled = u.enabled, Q.notes = u.notes || "";
    }, Ti = async () => {
      var u, i, o, x;
      if (Fe.value) {
        if (!Q.public_model.trim()) {
          f.showError(a("admin.groups.compositeRoutes.publicModelRequired"));
          return;
        }
        wa.value = !0;
        try {
          const y = Si();
          gt.value ? (await ge.groups.updateCompositeRoute(
            Fe.value.id,
            gt.value,
            y
          ), f.showSuccess(a("admin.groups.compositeRoutes.routeUpdated"))) : (await ge.groups.createCompositeRoute(
            Fe.value.id,
            y
          ), f.showSuccess(a("admin.groups.compositeRoutes.routeCreated"))), oa(), await Sa();
        } catch (y) {
          f.showError(
            ((i = (u = y.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || ((x = (o = y.response) == null ? void 0 : o.data) == null ? void 0 : x.message) || a("admin.groups.compositeRoutes.failedToSave")
          ), console.error("Error saving composite route:", y);
        } finally {
          wa.value = !1;
        }
      }
    }, Vi = async (u) => {
      var i, o, x, y;
      if (Fe.value && window.confirm(a("admin.groups.compositeRoutes.deleteConfirm")))
        try {
          await ge.groups.deleteCompositeRoute(
            Fe.value.id,
            u.id
          ), gt.value === u.id && oa(), f.showSuccess(a("admin.groups.compositeRoutes.routeDeleted")), await Sa();
        } catch (R) {
          f.showError(
            ((o = (i = R.response) == null ? void 0 : i.data) == null ? void 0 : o.detail) || ((y = (x = R.response) == null ? void 0 : x.data) == null ? void 0 : y.message) || a("admin.groups.compositeRoutes.failedToDelete")
          ), console.error("Error deleting composite route:", R);
        }
    }, Pr = async () => {
      var u, i, o, x;
      if (!(!Fe.value || !Ot.value.trim())) {
        so.value = !0;
        try {
          Xe.value = await ge.groups.previewCompositeRoute(
            Fe.value.id,
            {
              model: Ot.value.trim(),
              endpoint: Ca.value
            }
          );
        } catch (y) {
          f.showError(
            ((i = (u = y.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || ((x = (o = y.response) == null ? void 0 : o.data) == null ? void 0 : x.message) || a("admin.groups.compositeRoutes.failedToPreview")
          ), console.error("Error previewing composite route:", y);
        } finally {
          so.value = !1;
        }
      }
    }, zi = (u) => {
      mt.value = u, va.value = !0;
    }, Ui = async () => {
      var u, i;
      if (mt.value)
        try {
          await ge.groups.delete(mt.value.id), f.showSuccess(a("admin.groups.groupDeleted")), va.value = !1, mt.value = null, Te();
        } catch (o) {
          f.showError(
            ((i = (u = o.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || a("admin.groups.failedToDelete")
          ), console.error("Error deleting group:", o);
        }
    };
    Ke(
      () => m.subscription_type,
      (u) => {
        u === "subscription" ? (m.is_exclusive = !0, m.fallback_group_id_on_invalid_request = null) : (m.peak_rate_enabled = !1, m.peak_start = "", m.peak_end = "", m.peak_rate_multiplier = 1);
      }
    ), Ke(
      () => c.subscription_type,
      (u) => {
        u !== "subscription" && (c.peak_rate_enabled = !1, c.peak_start = "", c.peak_end = "", c.peak_rate_multiplier = 1);
      }
    ), Ke(
      () => m.platform,
      (u) => {
        var i;
        ["anthropic", "antigravity"].includes(u) || (m.fallback_group_id_on_invalid_request = null), u !== "openai" && (Da(m), m.allow_live = !1), Et(u) || (m.profit_control_enabled = !1, m.profit_min_margin_percent = 0, m.profit_safety_buffer_percent = 0), m.max_reasoning_effort = Vt(
          u,
          m.max_reasoning_effort
        ), m.reasoning_effort_mappings = yo(
          Ra(m.reasoning_effort_mappings),
          u
        ), (i = Zt.value) == null || i.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(u) || (m.require_oauth_only = !1, m.require_privacy_set = !1), yt(m), Qt(Se), ea("create", 0, u);
      }
    ), Ke(
      () => m.allow_image_generation,
      () => {
        yt(m);
      }
    ), Ke(
      () => m.allow_batch_image_generation,
      () => {
        yt(m);
      }
    ), Ke(
      () => c.platform,
      (u) => {
        var i;
        ["anthropic", "antigravity"].includes(u) || (c.fallback_group_id_on_invalid_request = null), u !== "openai" && (Da(c), c.allow_live = !1), Et(u) || (c.profit_control_enabled = !1, c.profit_min_margin_percent = 0, c.profit_safety_buffer_percent = 0), c.max_reasoning_effort = Vt(
          u,
          c.max_reasoning_effort
        ), c.reasoning_effort_mappings = yo(
          Ra(c.reasoning_effort_mappings),
          u
        ), (i = Jt.value) == null || i.resetValidation(), ["openai", "antigravity", "anthropic", "gemini"].includes(u) || (c.require_oauth_only = !1, c.require_privacy_set = !1), yt(c), Ge.value && (Qt(Pe, c.platform === Ge.value.platform ? Ge.value.models_list_config : void 0), ea("edit", Ge.value.id, u));
      }
    ), Ke(
      () => c.allow_image_generation,
      () => {
        yt(c);
      }
    ), Ke(
      () => c.allow_batch_image_generation,
      () => {
        yt(c);
      }
    ), Ke(
      () => c.platform,
      (u) => {
        ["anthropic", "antigravity"].includes(u) || (c.fallback_group_id_on_invalid_request = null), u !== "openai" && (c.allow_messages_dispatch = !1, c.allow_live = !1, c.default_mapped_model = "");
      }
    );
    const Sr = (u) => {
      const i = u.target;
      i.closest(".account-search-container") || Object.keys(vt.value).forEach((o) => {
        vt.value[o] = !1;
      }), C.value && !C.value.contains(i) && (S.value = !1);
    }, Di = async () => {
      try {
        const u = await ge.groups.getAll();
        Dt.value = [...u].sort(
          (i, o) => i.sort_order - o.sort_order
        ), to.value = !0;
      } catch (u) {
        f.showError(a("admin.groups.failedToLoad")), console.error("Error loading groups for sorting:", u);
      }
    }, bo = () => {
      to.value = !1, Dt.value = [];
    }, Oi = async () => {
      var u, i;
      Xt.value = !0;
      try {
        const o = Dt.value.map((x, y) => ({
          id: x.id,
          sort_order: y * 10
        }));
        await ge.groups.updateSortOrder(o), f.showSuccess(a("admin.groups.sortOrderUpdated")), bo(), Te();
      } catch (o) {
        f.showError(
          ((i = (u = o.response) == null ? void 0 : u.data) == null ? void 0 : i.detail) || a("admin.groups.failedToUpdateSortOrder")
        ), console.error("Error updating sort order:", o);
      } finally {
        Xt.value = !1;
      }
    };
    return ms(() => {
      Te(), _r(), ea("create", 0, m.platform), document.addEventListener("click", Sr);
    }), Go(() => {
      document.removeEventListener("click", Sr), It.clearAll(), po();
    }), (u, i) => (g(), _(Z, null, [
      P(Gi, null, {
        filters: de(() => [
          e("div", Tp, [
            e("div", Vp, [
              e("div", zp, [
                P(O, {
                  name: "search",
                  size: "md",
                  class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                }),
                E(e("input", {
                  "onUpdate:modelValue": i[0] || (i[0] = (o) => Ja.value = o),
                  type: "text",
                  placeholder: s(a)("admin.groups.searchGroups"),
                  class: "input pl-10",
                  onInput: mi
                }, null, 40, Up), [
                  [V, Ja.value]
                ])
              ]),
              P(ke, {
                modelValue: et.platform,
                "onUpdate:modelValue": i[1] || (i[1] = (o) => et.platform = o),
                options: ae.value,
                placeholder: s(a)("admin.groups.allPlatforms"),
                class: "w-44",
                onChange: Te
              }, null, 8, ["modelValue", "options", "placeholder"]),
              P(ke, {
                modelValue: et.status,
                "onUpdate:modelValue": i[2] || (i[2] = (o) => et.status = o),
                options: Me.value,
                placeholder: s(a)("admin.groups.allStatus"),
                class: "w-40",
                onChange: Te
              }, null, 8, ["modelValue", "options", "placeholder"]),
              P(ke, {
                modelValue: et.is_exclusive,
                "onUpdate:modelValue": i[3] || (i[3] = (o) => et.is_exclusive = o),
                options: fe.value,
                placeholder: s(a)("admin.groups.allGroups"),
                class: "w-44",
                onChange: Te
              }, null, 8, ["modelValue", "options", "placeholder"])
            ]),
            e("div", Dp, [
              e("button", {
                onClick: Te,
                disabled: Ue.value,
                class: "btn btn-secondary",
                title: s(a)("common.refresh")
              }, [
                P(O, {
                  name: "refresh",
                  size: "md",
                  class: F(Ue.value ? "animate-spin" : "")
                }, null, 8, ["class"])
              ], 8, Op),
              e("div", {
                class: "relative",
                ref_key: "columnDropdownRef",
                ref: C
              }, [
                e("button", {
                  onClick: i[4] || (i[4] = (o) => S.value = !S.value),
                  class: "btn btn-secondary",
                  title: s(a)("admin.groups.columnSettings")
                }, [
                  P(O, {
                    name: "grid",
                    size: "md",
                    class: "mr-2"
                  }),
                  e("span", Ap, l(s(a)("admin.groups.columnSettings")), 1)
                ], 8, Ip),
                S.value ? (g(), _("div", Fp, [
                  (g(!0), _(Z, null, te(I.value, (o) => (g(), _("button", {
                    key: o.key,
                    onClick: (x) => xe(o.key),
                    class: "flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700"
                  }, [
                    e("span", null, l(o.label), 1),
                    L(o.key) ? (g(), Ce(O, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : w("", !0)
                  ], 8, Np))), 128))
                ])) : w("", !0)
              ], 512),
              e("button", {
                onClick: Di,
                class: "btn btn-secondary",
                title: s(a)("admin.groups.sortOrder")
              }, [
                P(O, {
                  name: "arrowsUpDown",
                  size: "md",
                  class: "mr-2"
                }),
                q(" " + l(s(a)("admin.groups.sortOrder")), 1)
              ], 8, Lp),
              e("button", {
                onClick: yr,
                class: "btn btn-primary",
                "data-tour": "groups-create-btn"
              }, [
                P(O, {
                  name: "plus",
                  size: "md",
                  class: "mr-2"
                }),
                q(" " + l(s(a)("admin.groups.createGroup")), 1)
              ])
            ])
          ])
        ]),
        table: de(() => [
          P(Hi, {
            columns: ce.value,
            data: G.value,
            loading: Ue.value,
            "server-side-sort": !0,
            "default-sort-key": "sort_order",
            "default-sort-order": "asc",
            onSort: fi
          }, {
            "cell-name": de(({ value: o }) => [
              e("span", qp, l(o), 1)
            ]),
            "cell-id": de(({ value: o }) => [
              e("span", jp, "#" + l(o), 1)
            ]),
            "cell-platform": de(({ value: o }) => [
              e("span", {
                class: F([
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  o === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : o === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : o === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : o === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : o === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : o === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : o === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                ])
              }, [
                P(ja, {
                  platform: o,
                  size: "xs"
                }, null, 8, ["platform"]),
                q(" " + l(s(a)("admin.groups.platforms." + o)), 1)
              ], 2)
            ]),
            "cell-billing_type": de(({ row: o }) => {
              var x, y, R;
              return [
                e("div", Hp, [
                  e("span", {
                    class: F([
                      "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
                      o.subscription_type === "subscription" ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    ])
                  }, l(o.subscription_type === "subscription" ? s(a)("admin.groups.subscription.subscription") : s(a)("admin.groups.subscription.standard")), 3),
                  o.subscription_type === "subscription" ? (g(), _("div", Gp, [
                    o.daily_limit_usd || o.weekly_limit_usd || o.monthly_limit_usd ? (g(), _("div", Bp, [
                      o.daily_limit_usd ? (g(), _("span", Kp, [
                        Ct.value ? (g(), _("span", Yp, "—")) : (g(), _("span", {
                          key: 1,
                          class: F(
                            pi(
                              ((x = He.value.get(o.id)) == null ? void 0 : x.today_cost) ?? 0,
                              o.daily_limit_usd
                            )
                          )
                        }, l(aa(((y = He.value.get(o.id)) == null ? void 0 : y.today_cost) ?? 0)), 3)),
                        e("span", Xp, " / " + l(aa(o.daily_limit_usd)) + "/" + l(s(a)("admin.groups.limitDay")), 1)
                      ])) : w("", !0),
                      o.daily_limit_usd && (o.weekly_limit_usd || o.monthly_limit_usd) ? (g(), _("span", Wp, "·")) : w("", !0),
                      o.weekly_limit_usd ? (g(), _("span", Zp, l(aa(o.weekly_limit_usd)) + "/" + l(s(a)("admin.groups.limitWeek")), 1)) : w("", !0),
                      o.weekly_limit_usd && o.monthly_limit_usd ? (g(), _("span", Jp, "·")) : w("", !0),
                      o.monthly_limit_usd ? (g(), _("span", Qp, l(aa(o.monthly_limit_usd)) + "/" + l(s(a)("admin.groups.limitMonth")), 1)) : w("", !0)
                    ])) : (g(), _("span", em, l(s(a)("admin.groups.subscription.noLimit")), 1)),
                    e("div", tm, [
                      q(l(s(a)("admin.groups.usageTotal")) + " ", 1),
                      e("span", am, l(Ct.value ? "—" : aa(((R = He.value.get(o.id)) == null ? void 0 : R.total_cost) ?? 0)), 1)
                    ])
                  ])) : w("", !0)
                ])
              ];
            }),
            "cell-rate_multiplier": de(({ value: o }) => [
              e("span", om, l(o) + "x", 1)
            ]),
            "cell-is_exclusive": de(({ value: o }) => [
              e("span", {
                class: F(["badge", o ? "badge-primary" : "badge-gray"])
              }, l(o ? s(a)("admin.groups.exclusive") : s(a)("admin.groups.public")), 3)
            ]),
            "cell-account_count": de(({ row: o }) => [
              e("div", rm, [
                e("div", null, [
                  e("span", sm, l(s(a)("admin.groups.accountsAvailable")), 1),
                  e("span", im, l(o.active_account_count || 0), 1),
                  e("span", nm, l(s(a)("admin.groups.accountsUnit")), 1)
                ]),
                o.rate_limited_account_count ? (g(), _("div", lm, [
                  e("span", dm, l(s(a)("admin.groups.accountsRateLimited")), 1),
                  e("span", um, l(o.rate_limited_account_count), 1),
                  e("span", cm, l(s(a)("admin.groups.accountsUnit")), 1)
                ])) : w("", !0),
                e("div", null, [
                  e("span", pm, l(s(a)("admin.groups.accountsTotal")), 1),
                  e("span", mm, l(o.account_count || 0), 1),
                  e("span", gm, l(s(a)("admin.groups.accountsUnit")), 1)
                ])
              ])
            ]),
            "cell-capacity": de(({ row: o }) => [
              pt.value.get(o.id) ? (g(), Ce(nd, {
                key: 0,
                "concurrency-used": pt.value.get(o.id).concurrencyUsed,
                "concurrency-max": pt.value.get(o.id).concurrencyMax,
                "sessions-used": pt.value.get(o.id).sessionsUsed,
                "sessions-max": pt.value.get(o.id).sessionsMax,
                "rpm-used": pt.value.get(o.id).rpmUsed,
                "rpm-max": pt.value.get(o.id).rpmMax
              }, null, 8, ["concurrency-used", "concurrency-max", "sessions-used", "sessions-max", "rpm-used", "rpm-max"])) : (g(), _("span", _m, "—"))
            ]),
            "cell-usage": de(({ row: o }) => {
              var x, y, R;
              return [
                Ct.value ? (g(), _("div", fm, "—")) : (g(), _("div", hm, [
                  e("div", bm, [
                    e("span", vm, l(s(a)("admin.groups.usageToday")), 1),
                    e("span", ym, "$" + l(Ma(((x = He.value.get(o.id)) == null ? void 0 : x.today_cost) ?? 0)), 1)
                  ]),
                  e("div", xm, [
                    e("span", km, l(s(a)("admin.groups.usageYesterday")), 1),
                    e("span", wm, "$" + l(Ma(((y = He.value.get(o.id)) == null ? void 0 : y.yesterday_cost) ?? 0)), 1)
                  ]),
                  e("div", Cm, [
                    e("span", $m, l(s(a)("admin.groups.usageTotal")), 1),
                    e("span", Mm, "$" + l(Ma(((R = He.value.get(o.id)) == null ? void 0 : R.total_cost) ?? 0)), 1)
                  ])
                ]))
              ];
            }),
            "cell-status": de(({ value: o }) => [
              e("span", {
                class: F([
                  "badge",
                  o === "active" ? "badge-success" : "badge-danger"
                ])
              }, l(s(a)("admin.accounts.status." + o)), 3)
            ]),
            "cell-actions": de(({ row: o }) => [
              e("div", Pm, [
                e("button", {
                  onClick: (x) => bi(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  P(O, {
                    name: "edit",
                    size: "sm"
                  }),
                  e("span", Em, l(s(a)("common.edit")), 1)
                ], 8, Sm),
                e("button", {
                  "data-testid": "group-duplicate",
                  title: Ut.has(o.id) ? s(a)("admin.groups.duplicating") : s(a)("admin.groups.duplicate"),
                  disabled: Ut.has(o.id),
                  onClick: (x) => Ci(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-dark-700 dark:hover:text-primary-400"
                }, [
                  P(O, {
                    name: "copy",
                    size: "sm"
                  }),
                  e("span", Tm, l(Ut.has(o.id) ? s(a)("admin.groups.duplicating") : s(a)("admin.groups.duplicate")), 1)
                ], 8, Rm),
                o.platform === "composite" ? (g(), _("button", {
                  key: 0,
                  onClick: (x) => Ei(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-cyan-600 dark:hover:bg-dark-700 dark:hover:text-cyan-400"
                }, [
                  P(O, {
                    name: "swap",
                    size: "sm"
                  }),
                  e("span", zm, l(s(a)("admin.groups.compositeRoutes.action")), 1)
                ], 8, Vm)) : w("", !0),
                e("button", {
                  onClick: (x) => ki(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-purple-600 dark:hover:bg-dark-700 dark:hover:text-purple-400"
                }, [
                  P(O, {
                    name: "dollar",
                    size: "sm"
                  }),
                  e("span", Dm, l(s(a)("admin.groups.rateMultipliers")), 1)
                ], 8, Um),
                e("button", {
                  onClick: (x) => wi(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-zo-alert-600 dark:hover:bg-dark-700 dark:hover:text-zo-alert-400"
                }, [
                  P(O, {
                    name: "bolt",
                    size: "sm"
                  }),
                  e("span", Im, l(s(a)("admin.groups.rpmOverrides")), 1)
                ], 8, Om),
                e("button", {
                  onClick: (x) => zi(o),
                  class: "flex flex-col items-center gap-0.5 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                }, [
                  P(O, {
                    name: "trash",
                    size: "sm"
                  }),
                  e("span", Fm, l(s(a)("common.delete")), 1)
                ], 8, Am)
              ])
            ]),
            empty: de(() => [
              P(en, {
                title: s(a)("admin.groups.noGroupsYet"),
                description: s(a)("admin.groups.createFirstGroup"),
                "action-text": s(a)("admin.groups.createGroup"),
                onAction: yr
              }, null, 8, ["title", "description", "action-text"])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        pagination: de(() => [
          Ae.total > 0 ? (g(), Ce(Bo, {
            key: 0,
            page: Ae.page,
            total: Ae.total,
            "page-size": Ae.page_size,
            "onUpdate:page": gi,
            "onUpdate:pageSize": _i
          }, null, 8, ["page", "total", "page-size"])) : w("", !0)
        ]),
        _: 1
      }),
      P(jt, {
        show: Qa.value,
        title: s(a)("admin.groups.createGroup"),
        width: "normal",
        onClose: fo
      }, {
        footer: de(() => [
          e("div", Dh, [
            e("button", {
              onClick: fo,
              type: "button",
              class: "btn btn-secondary"
            }, l(s(a)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "create-group-form",
              disabled: tt.value,
              class: "btn btn-primary",
              "data-tour": "group-form-submit"
            }, [
              tt.value ? (g(), _("svg", Ih, [...i[153] || (i[153] = [
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
              ])])) : w("", !0),
              q(" " + l(tt.value ? s(a)("admin.groups.creating") : s(a)("common.create")), 1)
            ], 8, Oh)
          ])
        ]),
        default: de(() => [
          e("form", {
            id: "create-group-form",
            onSubmit: Bt(hi, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Nm, l(s(a)("admin.groups.form.name")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[5] || (i[5] = (o) => m.name = o),
                type: "text",
                required: "",
                class: "input",
                placeholder: s(a)("admin.groups.enterGroupName"),
                "data-tour": "group-form-name"
              }, null, 8, Lm), [
                [V, m.name]
              ])
            ]),
            e("div", null, [
              e("label", qm, l(s(a)("admin.groups.form.description")), 1),
              E(e("textarea", {
                "onUpdate:modelValue": i[6] || (i[6] = (o) => m.description = o),
                rows: "3",
                class: "input",
                placeholder: s(a)("admin.groups.optionalDescription")
              }, null, 8, jm), [
                [V, m.description]
              ])
            ]),
            e("div", null, [
              e("label", Hm, l(s(a)("admin.groups.form.platform")), 1),
              P(ke, {
                modelValue: m.platform,
                "onUpdate:modelValue": i[7] || (i[7] = (o) => m.platform = o),
                options: N.value,
                "data-tour": "group-form-platform",
                onChange: i[8] || (i[8] = (o) => m.copy_accounts_from_group_ids = [])
              }, null, 8, ["modelValue", "options"]),
              e("p", Gm, l(s(a)("admin.groups.platformHint")), 1)
            ]),
            A.value.length > 0 ? (g(), _("div", Bm, [
              e("div", Km, [
                e("label", Ym, l(s(a)("admin.groups.copyAccounts.title")), 1),
                e("div", Xm, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Wm, [
                    e("div", Zm, [
                      e("p", Jm, l(s(a)("admin.groups.copyAccounts.tooltip")), 1),
                      i[139] || (i[139] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              m.copy_accounts_from_group_ids.length > 0 ? (g(), _("div", Qm, [
                (g(!0), _(Z, null, te(m.copy_accounts_from_group_ids, (o) => {
                  var x;
                  return g(), _("span", {
                    key: o,
                    class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                  }, [
                    q(l(((x = A.value.find((y) => y.value === o)) == null ? void 0 : x.label) || `#${o}`) + " ", 1),
                    e("button", {
                      type: "button",
                      onClick: (y) => m.copy_accounts_from_group_ids = m.copy_accounts_from_group_ids.filter(
                        (R) => R !== o
                      ),
                      class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                    }, [
                      P(O, {
                        name: "x",
                        size: "xs"
                      })
                    ], 8, e0)
                  ]);
                }), 128))
              ])) : w("", !0),
              e("select", {
                class: "input",
                onChange: i[9] || (i[9] = (o) => {
                  const x = Number(o.target.value);
                  x && !m.copy_accounts_from_group_ids.includes(x) && m.copy_accounts_from_group_ids.push(x), o.target.value = "";
                })
              }, [
                e("option", t0, l(s(a)("admin.groups.copyAccounts.selectPlaceholder")), 1),
                (g(!0), _(Z, null, te(A.value, (o) => (g(), _("option", {
                  key: o.value,
                  value: o.value,
                  disabled: m.copy_accounts_from_group_ids.includes(o.value)
                }, l(o.label), 9, a0))), 128))
              ], 32),
              e("p", o0, l(s(a)("admin.groups.copyAccounts.hint")), 1)
            ])) : w("", !0),
            e("div", null, [
              e("label", r0, l(s(a)("admin.groups.form.rateMultiplier")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[10] || (i[10] = (o) => m.rate_multiplier = o),
                type: "number",
                step: "0.001",
                min: "0.001",
                required: "",
                class: "input",
                "data-tour": "group-form-multiplier"
              }, null, 512), [
                [
                  V,
                  m.rate_multiplier,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", s0, l(s(a)("admin.groups.rateMultiplierHint")), 1)
            ]),
            e("div", null, [
              e("label", i0, l(s(a)("admin.groups.form.rpmLimit")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[11] || (i[11] = (o) => m.rpm_limit = o),
                type: "number",
                min: "0",
                step: "1",
                class: "input",
                placeholder: s(a)("admin.groups.form.rpmLimitPlaceholder")
              }, null, 8, n0), [
                [
                  V,
                  m.rpm_limit,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", l0, l(s(a)("admin.groups.form.rpmLimitHint")), 1)
            ]),
            s(sa)(m.platform) ? (g(), Ce(Ur, {
              key: 1,
              ref_key: "createReasoningEffortPolicyRef",
              ref: Zt,
              "id-prefix": "create-group-reasoning",
              platform: m.platform,
              "max-effort": m.max_reasoning_effort,
              "onUpdate:maxEffort": i[12] || (i[12] = (o) => m.max_reasoning_effort = o),
              mappings: m.reasoning_effort_mappings,
              "onUpdate:mappings": i[13] || (i[13] = (o) => m.reasoning_effort_mappings = o)
            }, null, 8, ["platform", "max-effort", "mappings"])) : w("", !0),
            m.subscription_type !== "subscription" ? (g(), _("div", d0, [
              e("div", u0, [
                e("label", c0, l(s(a)("admin.groups.form.exclusive")), 1),
                e("div", p0, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", m0, [
                    e("div", g0, [
                      e("p", _0, l(s(a)("admin.groups.exclusiveTooltip.title")), 1),
                      e("p", f0, l(s(a)("admin.groups.exclusiveTooltip.description")), 1),
                      e("div", h0, [
                        e("p", b0, [
                          e("span", v0, [
                            P(O, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            q(" " + l(s(a)("admin.groups.exclusiveTooltip.example")), 1)
                          ]),
                          q(" " + l(s(a)("admin.groups.exclusiveTooltip.exampleContent")), 1)
                        ])
                      ]),
                      i[140] || (i[140] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", y0, [
                e("button", {
                  type: "button",
                  onClick: i[14] || (i[14] = (o) => m.is_exclusive = !m.is_exclusive),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.is_exclusive ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.is_exclusive ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", x0, l(m.is_exclusive ? s(a)("admin.groups.exclusive") : s(a)("admin.groups.public")), 1)
              ])
            ])) : w("", !0),
            e("div", k0, [
              e("div", null, [
                e("label", w0, l(s(a)("admin.groups.subscription.type")), 1),
                P(ke, {
                  modelValue: m.subscription_type,
                  "onUpdate:modelValue": i[15] || (i[15] = (o) => m.subscription_type = o),
                  options: pe.value
                }, null, 8, ["modelValue", "options"]),
                e("p", C0, l(s(a)("admin.groups.subscription.typeHint")), 1)
              ]),
              m.subscription_type === "subscription" ? (g(), _("div", $0, [
                e("div", null, [
                  e("label", M0, l(s(a)("admin.groups.subscription.dailyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[16] || (i[16] = (o) => m.daily_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, P0), [
                    [
                      V,
                      m.daily_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", S0, l(s(a)("admin.groups.subscription.weeklyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[17] || (i[17] = (o) => m.weekly_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, E0), [
                    [
                      V,
                      m.weekly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", R0, l(s(a)("admin.groups.subscription.monthlyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[18] || (i[18] = (o) => m.monthly_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, T0), [
                    [
                      V,
                      m.monthly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ]),
            e("div", V0, [
              e("div", z0, [
                e("div", null, [
                  e("label", U0, l(s(a)("admin.groups.modelsList.title")), 1),
                  e("p", D0, l(s(a)("admin.groups.modelsList.hint")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[19] || (i[19] = (o) => Se.enabled = !Se.enabled),
                  class: F([
                    "relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors",
                    Se.enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      Se.enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              Se.enabled ? (g(), _("div", O0, [
                !lo.value && Se.items.length > 0 ? (g(), _("div", I0, [
                  e("span", A0, l(s(a)("admin.groups.modelsList.selectedSummary", {
                    selected: Ls.value,
                    total: Se.items.length
                  })), 1),
                  e("div", F0, [
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20",
                      onClick: i[20] || (i[20] = (o) => s(ts)(Se))
                    }, l(s(a)("admin.groups.modelsList.selectAll")), 1),
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700",
                      onClick: i[21] || (i[21] = (o) => s(as)(Se))
                    }, l(s(a)("admin.groups.modelsList.invertSelection")), 1)
                  ])
                ])) : w("", !0),
                e("div", N0, [
                  lo.value ? (g(), _("p", L0, l(s(a)("admin.groups.modelsList.loading")), 1)) : Se.items.length === 0 ? (g(), _("p", q0, l(s(a)("admin.groups.modelsList.empty")), 1)) : w("", !0),
                  (g(!0), _(Z, null, te(Se.items, (o, x) => (g(), _("div", {
                    key: o.id,
                    class: "flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 dark:border-dark-600 dark:bg-dark-800"
                  }, [
                    E(e("input", {
                      "onUpdate:modelValue": (y) => o.selected = y,
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    }, null, 8, j0), [
                      [Ee, o.selected]
                    ]),
                    e("span", H0, l(o.id), 1),
                    e("button", {
                      type: "button",
                      disabled: x === 0,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (y) => lr(x, x - 1)
                    }, [
                      P(O, {
                        name: "arrowUp",
                        size: "sm"
                      })
                    ], 8, G0),
                    e("button", {
                      type: "button",
                      disabled: x === Se.items.length - 1,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (y) => lr(x, x + 1)
                    }, [
                      P(O, {
                        name: "arrowDown",
                        size: "sm"
                      })
                    ], 8, B0)
                  ]))), 128))
                ])
              ])) : w("", !0)
            ]),
            s(is)(m.platform) ? (g(), _("div", K0, [
              e("label", Y0, l(s(a)(s(Oe)(m.platform, "title"))), 1),
              e("p", X0, l(s(a)(s(Oe)(m.platform, "description"))), 1),
              e("div", W0, [
                e("label", Z0, [
                  E(e("input", {
                    "onUpdate:modelValue": i[22] || (i[22] = (o) => m.allow_image_generation = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, m.allow_image_generation]
                  ]),
                  q(" " + l(s(a)(s(Oe)(m.platform, "allowImageGeneration"))), 1)
                ]),
                e("label", J0, [
                  E(e("input", {
                    "onUpdate:modelValue": i[23] || (i[23] = (o) => m.image_rate_independent = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, m.image_rate_independent]
                  ]),
                  q(" " + l(s(a)(s(Oe)(m.platform, "independentMultiplier"))), 1)
                ])
              ]),
              m.image_rate_independent ? (g(), _("div", Q0, [
                e("label", eg, l(s(a)(s(Oe)(m.platform, "imageMultiplier"))), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[24] || (i[24] = (o) => m.image_rate_multiplier = o),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    V,
                    m.image_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : w("", !0),
              e("div", tg, [
                e("div", null, [
                  i[141] || (i[141] = e("label", { class: "input-label" }, "1K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[25] || (i[25] = (o) => m.image_price_1k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(m.platform, "image_price_1k")
                  }, null, 8, ag), [
                    [
                      V,
                      m.image_price_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[142] || (i[142] = e("label", { class: "input-label" }, "2K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[26] || (i[26] = (o) => m.image_price_2k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(m.platform, "image_price_2k")
                  }, null, 8, og), [
                    [
                      V,
                      m.image_price_2k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[143] || (i[143] = e("label", { class: "input-label" }, "4K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[27] || (i[27] = (o) => m.image_price_4k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(m.platform, "image_price_4k")
                  }, null, 8, rg), [
                    [
                      V,
                      m.image_price_4k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("p", sg, l(s(a)(s(Oe)(m.platform, "modeHint"))), 1),
              e("div", ig, [
                e("div", ng, l(s(a)(s(Oe)(m.platform, "finalPricePreview"))), 1),
                e("div", lg, [
                  (g(!0), _(Z, null, te(oi.value, (o) => (g(), _("div", {
                    key: o.label
                  }, l(o.label) + ": " + l(o.value), 1))), 128))
                ])
              ]),
              m.platform === "gemini" && m.allow_image_generation ? (g(), _("div", dg, [
                e("label", ug, [
                  E(e("input", {
                    "onUpdate:modelValue": i[28] || (i[28] = (o) => m.allow_batch_image_generation = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, m.allow_batch_image_generation]
                  ]),
                  q(" " + l(s(a)("admin.groups.imagePricing.allowBatchImageGeneration")), 1)
                ]),
                e("p", cg, l(s(a)("admin.groups.imagePricing.batchSectionHint")), 1),
                m.allow_batch_image_generation ? (g(), _("div", pg, [
                  e("div", null, [
                    e("label", mg, l(s(a)("admin.groups.imagePricing.batchDiscountMultiplier")), 1),
                    E(e("input", {
                      "onUpdate:modelValue": i[29] || (i[29] = (o) => m.batch_image_discount_multiplier = o),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.5"
                    }, null, 512), [
                      [
                        V,
                        m.batch_image_discount_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", gg, l(s(a)("admin.groups.imagePricing.batchHoldMultiplier")), 1),
                    E(e("input", {
                      "onUpdate:modelValue": i[30] || (i[30] = (o) => m.batch_image_hold_multiplier = o),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.6"
                    }, null, 512), [
                      [
                        V,
                        m.batch_image_hold_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : w("", !0)
              ])) : m.platform !== "gemini" ? (g(), _("p", _g, l(s(a)("admin.groups.imagePricing.batchGeminiOnlyHint")), 1)) : w("", !0)
            ])) : w("", !0),
            s(ns)(m.platform) ? (g(), _("div", fg, [
              e("label", hg, l(s(a)(s(Be)("title"))), 1),
              e("p", bg, l(s(a)(s(Be)("description"))), 1),
              e("div", vg, [
                e("label", yg, [
                  E(e("input", {
                    "onUpdate:modelValue": i[31] || (i[31] = (o) => m.video_rate_independent = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, m.video_rate_independent]
                  ]),
                  q(" " + l(s(a)(s(Be)("independentMultiplier"))), 1)
                ])
              ]),
              m.video_rate_independent ? (g(), _("div", xg, [
                e("label", kg, l(s(a)(s(Be)("videoMultiplier"))), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[32] || (i[32] = (o) => m.video_rate_multiplier = o),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    V,
                    m.video_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : w("", !0),
              e("div", wg, [
                e("div", null, [
                  i[144] || (i[144] = e("label", { class: "input-label" }, "480p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[33] || (i[33] = (o) => m.video_price_480p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(m.platform, "video_price_480p")
                  }, null, 8, Cg), [
                    [
                      V,
                      m.video_price_480p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[145] || (i[145] = e("label", { class: "input-label" }, "720p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[34] || (i[34] = (o) => m.video_price_720p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(m.platform, "video_price_720p")
                  }, null, 8, $g), [
                    [
                      V,
                      m.video_price_720p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[146] || (i[146] = e("label", { class: "input-label" }, "1080p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[35] || (i[35] = (o) => m.video_price_1080p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(m.platform, "video_price_1080p")
                  }, null, 8, Mg), [
                    [
                      V,
                      m.video_price_1080p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("div", Pg, [
                e("p", Sg, l(s(a)("admin.groups.videoPricing.modelOverridesTitle")), 1),
                e("p", Eg, l(s(a)("admin.groups.videoPricing.modelOverridesDescription")), 1),
                e("div", Rg, [
                  (g(!0), _(Z, null, te(s(cs)(m.video_model_prices), (o) => (g(), _("div", {
                    key: o.key,
                    class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,7rem))] sm:items-end"
                  }, [
                    e("div", Tg, l(o.label), 1),
                    (g(!0), _(Z, null, te(s(Lo), (x) => (g(), _("label", {
                      key: x.key,
                      class: "block"
                    }, [
                      e("span", Vg, l(x.label) + " ($/s) ", 1),
                      E(e("input", {
                        "onUpdate:modelValue": (y) => m.video_model_prices[o.key][x.key] = y,
                        type: "number",
                        step: "0.001",
                        min: "0",
                        class: "input",
                        "data-testid": `create-grok-video-price-${o.key}-${x.key}`
                      }, null, 8, zg), [
                        [
                          V,
                          m.video_model_prices[o.key][x.key],
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]))), 128))
                  ]))), 128))
                ])
              ]),
              e("p", Ug, l(s(a)(s(Be)("modeHint"))), 1),
              e("div", Dg, [
                e("div", Og, l(s(a)(s(Be)("finalPricePreview"))), 1),
                e("div", Ig, [
                  (g(!0), _(Z, null, te(si.value, (o) => (g(), _("div", {
                    key: o.label
                  }, l(o.label) + ": " + l(o.value), 1))), 128))
                ])
              ])
            ])) : w("", !0),
            m.subscription_type === "subscription" ? (g(), _("div", Ag, [
              e("div", Fg, [
                e("label", Ng, [
                  E(e("input", {
                    "onUpdate:modelValue": i[36] || (i[36] = (o) => m.peak_rate_enabled = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, m.peak_rate_enabled]
                  ]),
                  e("span", null, l(s(a)("admin.groups.peakRate.enable")), 1)
                ])
              ]),
              m.peak_rate_enabled ? (g(), _("div", Lg, [
                e("div", null, [
                  e("label", qg, l(s(a)("admin.groups.peakRate.peakStart")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[37] || (i[37] = (o) => m.peak_start = o),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [V, m.peak_start]
                  ])
                ]),
                e("div", null, [
                  e("label", jg, l(s(a)("admin.groups.peakRate.peakEnd")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[38] || (i[38] = (o) => m.peak_end = o),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [V, m.peak_end]
                  ])
                ]),
                e("div", null, [
                  e("label", Hg, l(s(a)("admin.groups.peakRate.peakMultiplier")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[39] || (i[39] = (o) => m.peak_rate_multiplier = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: "1",
                    title: s(a)("admin.groups.peakRate.multiplierHint")
                  }, null, 8, Gg), [
                    [
                      V,
                      m.peak_rate_multiplier,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            s(Et)(m.platform) ? (g(), _("div", Bg, [
              e("label", Kg, [
                E(e("input", {
                  "onUpdate:modelValue": i[40] || (i[40] = (o) => m.profit_control_enabled = o),
                  type: "checkbox",
                  class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }, null, 512), [
                  [Ee, m.profit_control_enabled]
                ]),
                e("span", null, l(s(a)("admin.groups.profitControl.enable")), 1)
              ]),
              e("p", Yg, l(m.profit_control_enabled ? s(a)("admin.groups.profitControl.enabledHint") : s(a)("admin.groups.profitControl.disabledHint")), 1),
              m.profit_control_enabled ? (g(), _("div", Xg, [
                e("div", null, [
                  e("label", Wg, l(s(a)("admin.groups.profitControl.minMargin")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[41] || (i[41] = (o) => m.profit_min_margin_percent = o),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: s(a)("admin.groups.profitControl.minMarginHint")
                  }, null, 8, Zg), [
                    [
                      V,
                      m.profit_min_margin_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Jg, l(s(a)("admin.groups.profitControl.safetyBuffer")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[42] || (i[42] = (o) => m.profit_safety_buffer_percent = o),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: s(a)("admin.groups.profitControl.safetyBufferHint")
                  }, null, 8, Qg), [
                    [
                      V,
                      m.profit_safety_buffer_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            m.platform === "antigravity" ? (g(), _("div", e_, [
              e("div", t_, [
                e("label", a_, l(s(a)("admin.groups.supportedScopes.title")), 1),
                e("div", o_, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", r_, [
                    e("div", s_, [
                      e("p", i_, l(s(a)("admin.groups.supportedScopes.tooltip")), 1),
                      i[147] || (i[147] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", n_, [
                e("label", l_, [
                  e("input", {
                    type: "checkbox",
                    checked: m.supported_model_scopes.includes("claude"),
                    onChange: i[43] || (i[43] = (o) => mo("claude")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, d_),
                  e("span", u_, l(s(a)("admin.groups.supportedScopes.claude")), 1)
                ]),
                e("label", c_, [
                  e("input", {
                    type: "checkbox",
                    checked: m.supported_model_scopes.includes("gemini_text"),
                    onChange: i[44] || (i[44] = (o) => mo("gemini_text")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, p_),
                  e("span", m_, l(s(a)("admin.groups.supportedScopes.geminiText")), 1)
                ]),
                e("label", g_, [
                  e("input", {
                    type: "checkbox",
                    checked: m.supported_model_scopes.includes("gemini_image"),
                    onChange: i[45] || (i[45] = (o) => mo("gemini_image")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, __),
                  e("span", f_, l(s(a)("admin.groups.supportedScopes.geminiImage")), 1)
                ])
              ]),
              e("p", h_, l(s(a)("admin.groups.supportedScopes.hint")), 1)
            ])) : w("", !0),
            m.platform === "antigravity" ? (g(), _("div", b_, [
              e("div", v_, [
                e("label", y_, l(s(a)("admin.groups.mcpXml.title")), 1),
                e("div", x_, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", k_, [
                    e("div", w_, [
                      e("p", C_, l(s(a)("admin.groups.mcpXml.tooltip")), 1),
                      i[148] || (i[148] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", $_, [
                e("button", {
                  type: "button",
                  onClick: i[46] || (i[46] = (o) => m.mcp_xml_inject = !m.mcp_xml_inject),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.mcp_xml_inject ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.mcp_xml_inject ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", M_, l(m.mcp_xml_inject ? s(a)("admin.groups.mcpXml.enabled") : s(a)("admin.groups.mcpXml.disabled")), 1)
              ])
            ])) : w("", !0),
            m.platform === "anthropic" ? (g(), _("div", P_, [
              e("div", S_, [
                e("label", E_, l(s(a)("admin.groups.claudeCode.title")), 1),
                e("div", R_, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", T_, [
                    e("div", V_, [
                      e("p", z_, l(s(a)("admin.groups.claudeCode.tooltip")), 1),
                      i[149] || (i[149] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", U_, [
                e("button", {
                  type: "button",
                  onClick: i[47] || (i[47] = (o) => m.claude_code_only = !m.claude_code_only),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.claude_code_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.claude_code_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", D_, l(m.claude_code_only ? s(a)("admin.groups.claudeCode.enabled") : s(a)("admin.groups.claudeCode.disabled")), 1)
              ]),
              m.claude_code_only ? (g(), _("div", O_, [
                e("label", I_, l(s(a)("admin.groups.claudeCode.fallbackGroup")), 1),
                P(ke, {
                  modelValue: m.fallback_group_id,
                  "onUpdate:modelValue": i[48] || (i[48] = (o) => m.fallback_group_id = o),
                  options: me.value,
                  placeholder: s(a)("admin.groups.claudeCode.noFallback")
                }, null, 8, ["modelValue", "options", "placeholder"]),
                e("p", A_, l(s(a)("admin.groups.claudeCode.fallbackHint")), 1)
              ])) : w("", !0)
            ])) : w("", !0),
            m.platform === "openai" ? (g(), _("div", F_, [
              e("h4", N_, l(s(a)("admin.groups.webSearchPricing.title")), 1),
              e("div", null, [
                e("label", L_, l(s(a)("admin.groups.webSearchPricing.pricePerCall")), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[49] || (i[49] = (o) => m.web_search_price_per_call = o),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  placeholder: "0.01",
                  class: "input"
                }, null, 512), [
                  [
                    V,
                    m.web_search_price_per_call,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", q_, l(s(a)("admin.groups.webSearchPricing.pricePerCallHint")), 1),
                e("div", j_, l(s(a)("admin.groups.webSearchPricing.finalPricePreview", {
                  price: ni.value
                })), 1)
              ])
            ])) : w("", !0),
            e("div", H_, [
              e("div", G_, [
                e("div", null, [
                  e("h4", B_, l(s(a)("admin.groups.modelPricing.title")), 1),
                  e("p", K_, l(s(a)("admin.groups.modelPricing.description")), 1)
                ]),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: i[50] || (i[50] = (o) => r(m.model_pricing))
                }, [
                  P(O, {
                    name: "plus",
                    size: "sm",
                    class: "mr-1"
                  }),
                  q(l(s(a)("admin.groups.modelPricing.add")), 1)
                ])
              ]),
              e("label", Y_, [
                E(e("input", {
                  "onUpdate:modelValue": i[51] || (i[51] = (o) => m.long_context_pricing_enabled = o),
                  type: "checkbox",
                  class: "mt-0.5"
                }, null, 512), [
                  [Ee, m.long_context_pricing_enabled]
                ]),
                e("span", null, [
                  e("span", X_, l(s(a)("admin.groups.modelPricing.longContext")), 1),
                  e("span", W_, l(s(a)("admin.groups.modelPricing.longContextHint")), 1)
                ])
              ]),
              e("div", Z_, [
                (g(!0), _(Z, null, te(m.model_pricing, (o, x) => (g(), Ce(Or, {
                  key: x,
                  entry: o,
                  platform: m.platform,
                  "hide-token-intervals": "",
                  onUpdate: (y) => m.model_pricing[x] = y,
                  onRemove: (y) => m.model_pricing.splice(x, 1)
                }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
              ])
            ]),
            m.platform === "grok" ? (g(), _("div", J_, [
              e("h4", Q_, l(s(a)("admin.groups.explicitPricing.title")), 1),
              e("p", ef, l(s(a)("admin.groups.explicitPricing.description")), 1),
              e("div", tf, [
                e("div", null, [
                  e("label", af, l(s(a)("admin.groups.explicitPricing.searchPricePer1k")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[52] || (i[52] = (o) => m.search_price_per_1k = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.explicitPricing.pricePlaceholder"),
                    "data-testid": "create-search-price"
                  }, null, 8, of), [
                    [
                      V,
                      m.search_price_per_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", rf, l(s(a)("admin.groups.voicePricing.audioRealtimePerMin")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[53] || (i[53] = (o) => m.audio_realtime_price_per_min = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-realtime-price"
                  }, null, 8, sf), [
                    [
                      V,
                      m.audio_realtime_price_per_min,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", nf, l(s(a)("admin.groups.voicePricing.audioTtsPerMillionChars")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[54] || (i[54] = (o) => m.audio_tts_price_per_million_chars = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-tts-price"
                  }, null, 8, lf), [
                    [
                      V,
                      m.audio_tts_price_per_million_chars,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", df, l(s(a)("admin.groups.voicePricing.audioSttPerHour")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[55] || (i[55] = (o) => m.audio_stt_price_per_hour = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "create-audio-stt-price"
                  }, null, 8, uf), [
                    [
                      V,
                      m.audio_stt_price_per_hour,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])
            ])) : w("", !0),
            m.platform === "openai" ? (g(), _("div", cf, [
              e("h4", pf, l(s(a)("admin.groups.openaiLive.title")), 1),
              e("div", mf, [
                e("label", gf, l(s(a)("admin.groups.openaiLive.allow")), 1),
                e("button", {
                  type: "button",
                  onClick: i[56] || (i[56] = (o) => fr("create")),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.allow_live ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", m.allow_live ? "translate-x-6" : "translate-x-1"])
                  }, null, 2)
                ], 2)
              ]),
              e("p", _f, l(s(a)("admin.groups.openaiLive.hint")), 1)
            ])) : w("", !0),
            m.platform === "openai" ? (g(), _("div", ff, [
              e("h4", hf, l(s(a)("admin.groups.openaiMessages.title")), 1),
              e("div", bf, [
                e("label", vf, l(s(a)("admin.groups.openaiMessages.allowDispatch")), 1),
                e("button", {
                  type: "button",
                  onClick: i[57] || (i[57] = (o) => m.allow_messages_dispatch = !m.allow_messages_dispatch),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.allow_messages_dispatch ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.allow_messages_dispatch ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("p", yf, l(s(a)("admin.groups.openaiMessages.allowDispatchHint")), 1),
              m.allow_messages_dispatch ? (g(), _("div", xf, [
                e("div", kf, [
                  e("div", wf, [
                    e("div", Cf, [
                      i[150] || (i[150] = e("div", { class: "h-2 w-2 rounded-full bg-blue-500" }, null, -1)),
                      e("label", $f, l(s(a)("admin.groups.openaiMessages.familyMappingTitle")), 1)
                    ]),
                    e("p", Mf, l(s(a)("admin.groups.openaiMessages.familyMappingHint")), 1)
                  ]),
                  e("div", Pf, [
                    e("div", Sf, [
                      e("div", null, [
                        e("label", Ef, l(s(a)("admin.groups.openaiMessages.opusModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[58] || (i[58] = (o) => m.opus_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.opusModelPlaceholder"),
                          class: "input"
                        }, null, 8, Rf), [
                          [V, m.opus_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Tf, l(s(a)("admin.groups.openaiMessages.sonnetModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[59] || (i[59] = (o) => m.sonnet_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.sonnetModelPlaceholder"),
                          class: "input"
                        }, null, 8, Vf), [
                          [V, m.sonnet_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", zf, l(s(a)("admin.groups.openaiMessages.haikuModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[60] || (i[60] = (o) => m.haiku_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.haikuModelPlaceholder"),
                          class: "input"
                        }, null, 8, Uf), [
                          [V, m.haiku_mapped_model]
                        ])
                      ])
                    ])
                  ])
                ]),
                e("div", Df, [
                  e("div", Of, [
                    e("div", If, [
                      e("div", null, [
                        e("div", Af, [
                          i[151] || (i[151] = e("div", { class: "h-2 w-2 rounded-full bg-primary-500" }, null, -1)),
                          e("label", Ff, l(s(a)("admin.groups.openaiMessages.exactMappingTitle")), 1)
                        ]),
                        e("p", Nf, l(s(a)("admin.groups.openaiMessages.exactMappingHint")), 1)
                      ])
                    ])
                  ]),
                  e("div", Lf, [
                    m.exact_model_mappings.length === 0 ? (g(), _("div", qf, [
                      e("span", null, l(s(a)("admin.groups.openaiMessages.noExactMappings")), 1),
                      e("button", {
                        type: "button",
                        onClick: wr,
                        class: "flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, [
                        P(O, {
                          name: "plus",
                          size: "sm"
                        }),
                        q(" " + l(s(a)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ])) : (g(), _("div", jf, [
                      (g(!0), _(Z, null, te(m.exact_model_mappings, (o) => (g(), _("div", {
                        key: Ks(o),
                        class: "group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-dark-600 dark:bg-dark-700 dark:hover:border-primary-700"
                      }, [
                        e("div", Hf, [
                          e("div", Gf, [
                            e("div", null, [
                              e("label", Bf, l(s(a)("admin.groups.openaiMessages.claudeModel")), 1),
                              E(e("input", {
                                "onUpdate:modelValue": (x) => o.claude_model = x,
                                type: "text",
                                placeholder: s(a)(
                                  "admin.groups.openaiMessages.claudeModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Kf), [
                                [V, o.claude_model]
                              ])
                            ]),
                            e("div", Yf, [
                              P(O, {
                                name: "arrowRight",
                                size: "sm",
                                class: "transition-transform group-hover:translate-x-1"
                              })
                            ]),
                            e("div", null, [
                              e("label", Xf, l(s(a)("admin.groups.openaiMessages.targetModel")), 1),
                              E(e("input", {
                                "onUpdate:modelValue": (x) => o.target_model = x,
                                type: "text",
                                placeholder: s(a)(
                                  "admin.groups.openaiMessages.targetModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Wf), [
                                [V, o.target_model]
                              ])
                            ])
                          ]),
                          e("button", {
                            type: "button",
                            onClick: (x) => yi(o),
                            class: "mt-6 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            title: s(a)("admin.groups.openaiMessages.removeExactMapping")
                          }, [
                            P(O, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, Zf)
                        ])
                      ]))), 128)),
                      e("button", {
                        type: "button",
                        onClick: wr,
                        class: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-3 text-sm font-medium text-gray-500 transition-all hover:border-primary-300 hover:bg-primary-50/50 hover:text-primary-600 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-primary-800 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
                      }, [
                        P(O, {
                          name: "plus",
                          size: "sm"
                        }),
                        q(" " + l(s(a)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ]))
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            ["openai", "antigravity", "anthropic", "gemini"].includes(
              m.platform
            ) ? (g(), _("div", Jf, [
              e("h4", Qf, l(s(a)("admin.groups.accountFilters.title")), 1),
              e("div", eh, [
                e("div", null, [
                  e("label", th, l(s(a)("admin.groups.accountFilters.oauthOnly")), 1),
                  e("p", ah, l(m.require_oauth_only ? s(a)("admin.groups.accountFilters.oauthOnlyEnabled") : s(a)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[61] || (i[61] = (o) => m.require_oauth_only = !m.require_oauth_only),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.require_oauth_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.require_oauth_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("div", oh, [
                e("div", null, [
                  e("label", rh, l(s(a)("admin.groups.accountFilters.privacySetOnly")), 1),
                  e("p", sh, l(m.require_privacy_set ? s(a)("admin.groups.accountFilters.privacySetOnlyEnabled") : s(a)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[62] || (i[62] = (o) => m.require_privacy_set = !m.require_privacy_set),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    m.require_privacy_set ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      m.require_privacy_set ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ])
            ])) : w("", !0),
            ["anthropic", "antigravity"].includes(m.platform) && m.subscription_type !== "subscription" ? (g(), _("div", ih, [
              e("label", nh, l(s(a)("admin.groups.invalidRequestFallback.title")), 1),
              P(ke, {
                modelValue: m.fallback_group_id_on_invalid_request,
                "onUpdate:modelValue": i[63] || (i[63] = (o) => m.fallback_group_id_on_invalid_request = o),
                options: je.value,
                placeholder: s(a)("admin.groups.invalidRequestFallback.noFallback")
              }, null, 8, ["modelValue", "options", "placeholder"]),
              e("p", lh, l(s(a)("admin.groups.invalidRequestFallback.hint")), 1)
            ])) : w("", !0),
            m.platform === "anthropic" ? (g(), _("div", dh, [
              e("div", uh, [
                e("label", ch, l(s(a)("admin.groups.modelRouting.title")), 1),
                e("div", ph, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", mh, [
                    e("div", gh, [
                      e("p", _h, l(s(a)("admin.groups.modelRouting.tooltip")), 1),
                      i[152] || (i[152] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", fh, [
                e("button", {
                  type: "button",
                  onClick: i[64] || (i[64] = (o) => m.model_routing_enabled = !m.model_routing_enabled),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    m.model_routing_enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      m.model_routing_enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", hh, l(m.model_routing_enabled ? s(a)("admin.groups.modelRouting.enabled") : s(a)("admin.groups.modelRouting.disabled")), 1)
              ]),
              m.model_routing_enabled ? (g(), _("p", vh, l(s(a)("admin.groups.modelRouting.noRulesHint")), 1)) : (g(), _("p", bh, l(s(a)("admin.groups.modelRouting.disabledHint")), 1)),
              m.model_routing_enabled ? (g(), _("div", yh, [
                (g(!0), _(Z, null, te($t.value, (o) => {
                  var x;
                  return g(), _("div", {
                    key: Gs(o),
                    class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600"
                  }, [
                    e("div", xh, [
                      e("div", kh, [
                        e("div", null, [
                          e("label", wh, l(s(a)("admin.groups.modelRouting.modelPattern")), 1),
                          E(e("input", {
                            "onUpdate:modelValue": (y) => o.pattern = y,
                            type: "text",
                            class: "input text-sm",
                            placeholder: s(a)("admin.groups.modelRouting.modelPatternPlaceholder")
                          }, null, 8, Ch), [
                            [V, o.pattern]
                          ])
                        ]),
                        e("div", null, [
                          e("label", $h, l(s(a)("admin.groups.modelRouting.accounts")), 1),
                          o.accounts.length > 0 ? (g(), _("div", Mh, [
                            (g(!0), _(Z, null, te(o.accounts, (y) => (g(), _("span", {
                              key: y.id,
                              class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                            }, [
                              q(l(y.name) + " ", 1),
                              e("button", {
                                type: "button",
                                onClick: (R) => ir(o, y.id),
                                class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                              }, [
                                P(O, {
                                  name: "x",
                                  size: "xs"
                                })
                              ], 8, Ph)
                            ]))), 128))
                          ])) : w("", !0),
                          e("div", Sh, [
                            E(e("input", {
                              "onUpdate:modelValue": (y) => bt.value[ft(o)] = y,
                              type: "text",
                              class: "input text-sm",
                              placeholder: s(a)(
                                "admin.groups.modelRouting.searchAccountPlaceholder"
                              ),
                              onInput: (y) => rr(o),
                              onFocus: (y) => nr(o)
                            }, null, 40, Eh), [
                              [
                                V,
                                bt.value[ft(o)]
                              ]
                            ]),
                            vt.value[ft(o)] && ((x = nt.value[ft(o)]) == null ? void 0 : x.length) > 0 ? (g(), _("div", Rh, [
                              (g(!0), _(Z, null, te(nt.value[ft(o)], (y) => (g(), _("button", {
                                key: y.id,
                                type: "button",
                                onClick: (R) => sr(o, y),
                                class: F(["w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700", {
                                  "opacity-50": o.accounts.some(
                                    (R) => R.id === y.id
                                  )
                                }]),
                                disabled: o.accounts.some((R) => R.id === y.id)
                              }, [
                                e("span", null, l(y.name), 1),
                                e("span", Vh, "#" + l(y.id), 1)
                              ], 10, Th))), 128))
                            ])) : w("", !0)
                          ]),
                          e("p", zh, l(s(a)("admin.groups.modelRouting.accountsHint")), 1)
                        ])
                      ]),
                      e("button", {
                        type: "button",
                        onClick: (y) => Ws(o),
                        class: "mt-5 p-1.5 text-gray-400 hover:text-red-500 transition-colors",
                        title: s(a)("admin.groups.modelRouting.removeRule")
                      }, [
                        P(O, {
                          name: "trash",
                          size: "sm"
                        })
                      ], 8, Uh)
                    ])
                  ]);
                }), 128))
              ])) : w("", !0),
              m.model_routing_enabled ? (g(), _("button", {
                key: 3,
                type: "button",
                onClick: Xs,
                class: "mt-3 flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              }, [
                P(O, {
                  name: "plus",
                  size: "sm"
                }),
                q(" " + l(s(a)("admin.groups.modelRouting.addRule")), 1)
              ])) : w("", !0)
            ])) : w("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      P(jt, {
        show: eo.value,
        title: s(a)("admin.groups.editGroup"),
        width: "normal",
        onClose: ho
      }, {
        footer: de(() => [
          e("div", R1, [
            e("button", {
              onClick: ho,
              type: "button",
              class: "btn btn-secondary"
            }, l(s(a)("common.cancel")), 1),
            e("button", {
              type: "submit",
              form: "edit-group-form",
              disabled: tt.value,
              class: "btn btn-primary",
              "data-tour": "group-form-submit"
            }, [
              tt.value ? (g(), _("svg", V1, [...i[168] || (i[168] = [
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
              ])])) : w("", !0),
              q(" " + l(tt.value ? s(a)("admin.groups.updating") : s(a)("common.update")), 1)
            ], 8, T1)
          ])
        ]),
        default: de(() => [
          Ge.value ? (g(), _("form", {
            key: 0,
            id: "edit-group-form",
            onSubmit: Bt(vi, ["prevent"]),
            class: "space-y-5"
          }, [
            e("div", null, [
              e("label", Ah, l(s(a)("admin.groups.form.name")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[65] || (i[65] = (o) => c.name = o),
                type: "text",
                required: "",
                class: "input",
                "data-tour": "edit-group-form-name"
              }, null, 512), [
                [V, c.name]
              ])
            ]),
            e("div", null, [
              e("label", Fh, l(s(a)("admin.groups.form.description")), 1),
              E(e("textarea", {
                "onUpdate:modelValue": i[66] || (i[66] = (o) => c.description = o),
                rows: "3",
                class: "input"
              }, null, 512), [
                [V, c.description]
              ])
            ]),
            e("div", null, [
              e("label", Nh, l(s(a)("admin.groups.form.platform")), 1),
              P(ke, {
                modelValue: c.platform,
                "onUpdate:modelValue": i[67] || (i[67] = (o) => c.platform = o),
                options: N.value,
                disabled: !0,
                "data-tour": "group-form-platform"
              }, null, 8, ["modelValue", "options"]),
              e("p", Lh, l(s(a)("admin.groups.platformNotEditable")), 1)
            ]),
            j.value.length > 0 ? (g(), _("div", qh, [
              e("div", jh, [
                e("label", Hh, l(s(a)("admin.groups.copyAccounts.title")), 1),
                e("div", Gh, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Bh, [
                    e("div", Kh, [
                      e("p", Yh, l(s(a)("admin.groups.copyAccounts.tooltipEdit")), 1),
                      i[154] || (i[154] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              c.copy_accounts_from_group_ids.length > 0 ? (g(), _("div", Xh, [
                (g(!0), _(Z, null, te(c.copy_accounts_from_group_ids, (o) => {
                  var x;
                  return g(), _("span", {
                    key: o,
                    class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                  }, [
                    q(l(((x = j.value.find((y) => y.value === o)) == null ? void 0 : x.label) || `#${o}`) + " ", 1),
                    e("button", {
                      type: "button",
                      onClick: (y) => c.copy_accounts_from_group_ids = c.copy_accounts_from_group_ids.filter(
                        (R) => R !== o
                      ),
                      class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                    }, [
                      P(O, {
                        name: "x",
                        size: "xs"
                      })
                    ], 8, Wh)
                  ]);
                }), 128))
              ])) : w("", !0),
              e("select", {
                class: "input",
                onChange: i[68] || (i[68] = (o) => {
                  const x = Number(o.target.value);
                  x && !c.copy_accounts_from_group_ids.includes(x) && c.copy_accounts_from_group_ids.push(x), o.target.value = "";
                })
              }, [
                e("option", Zh, l(s(a)("admin.groups.copyAccounts.selectPlaceholder")), 1),
                (g(!0), _(Z, null, te(j.value, (o) => (g(), _("option", {
                  key: o.value,
                  value: o.value,
                  disabled: c.copy_accounts_from_group_ids.includes(o.value)
                }, l(o.label), 9, Jh))), 128))
              ], 32),
              e("p", Qh, l(s(a)("admin.groups.copyAccounts.hintEdit")), 1)
            ])) : w("", !0),
            e("div", null, [
              e("label", eb, l(s(a)("admin.groups.form.rateMultiplier")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[69] || (i[69] = (o) => c.rate_multiplier = o),
                type: "number",
                step: "0.001",
                min: "0.001",
                required: "",
                class: "input",
                "data-tour": "group-form-multiplier"
              }, null, 512), [
                [
                  V,
                  c.rate_multiplier,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            e("div", null, [
              e("label", tb, l(s(a)("admin.groups.form.rpmLimit")), 1),
              E(e("input", {
                "onUpdate:modelValue": i[70] || (i[70] = (o) => c.rpm_limit = o),
                type: "number",
                min: "0",
                step: "1",
                class: "input",
                placeholder: s(a)("admin.groups.form.rpmLimitPlaceholder")
              }, null, 8, ab), [
                [
                  V,
                  c.rpm_limit,
                  void 0,
                  { number: !0 }
                ]
              ]),
              e("p", ob, l(s(a)("admin.groups.form.rpmLimitHint")), 1)
            ]),
            s(sa)(c.platform) ? (g(), Ce(Ur, {
              key: 1,
              ref_key: "editReasoningEffortPolicyRef",
              ref: Jt,
              "id-prefix": "edit-group-reasoning",
              platform: c.platform,
              "max-effort": c.max_reasoning_effort,
              "onUpdate:maxEffort": i[71] || (i[71] = (o) => c.max_reasoning_effort = o),
              mappings: c.reasoning_effort_mappings,
              "onUpdate:mappings": i[72] || (i[72] = (o) => c.reasoning_effort_mappings = o)
            }, null, 8, ["platform", "max-effort", "mappings"])) : w("", !0),
            c.subscription_type !== "subscription" ? (g(), _("div", rb, [
              e("div", sb, [
                e("label", ib, l(s(a)("admin.groups.form.exclusive")), 1),
                e("div", nb, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", lb, [
                    e("div", db, [
                      e("p", ub, l(s(a)("admin.groups.exclusiveTooltip.title")), 1),
                      e("p", cb, l(s(a)("admin.groups.exclusiveTooltip.description")), 1),
                      e("div", pb, [
                        e("p", mb, [
                          e("span", gb, [
                            P(O, {
                              name: "lightbulb",
                              size: "xs"
                            }),
                            q(" " + l(s(a)("admin.groups.exclusiveTooltip.example")), 1)
                          ]),
                          q(" " + l(s(a)("admin.groups.exclusiveTooltip.exampleContent")), 1)
                        ])
                      ]),
                      i[155] || (i[155] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", _b, [
                e("button", {
                  type: "button",
                  onClick: i[73] || (i[73] = (o) => c.is_exclusive = !c.is_exclusive),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    c.is_exclusive ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      c.is_exclusive ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", fb, l(c.is_exclusive ? s(a)("admin.groups.exclusive") : s(a)("admin.groups.public")), 1)
              ])
            ])) : w("", !0),
            e("div", null, [
              e("label", hb, l(s(a)("admin.groups.form.status")), 1),
              P(ke, {
                modelValue: c.status,
                "onUpdate:modelValue": i[74] || (i[74] = (o) => c.status = o),
                options: le.value
              }, null, 8, ["modelValue", "options"])
            ]),
            e("div", bb, [
              e("div", null, [
                e("label", vb, l(s(a)("admin.groups.subscription.type")), 1),
                P(ke, {
                  modelValue: c.subscription_type,
                  "onUpdate:modelValue": i[75] || (i[75] = (o) => c.subscription_type = o),
                  options: pe.value,
                  disabled: !0
                }, null, 8, ["modelValue", "options"]),
                e("p", yb, l(s(a)("admin.groups.subscription.typeNotEditable")), 1)
              ]),
              c.subscription_type === "subscription" ? (g(), _("div", xb, [
                e("div", null, [
                  e("label", kb, l(s(a)("admin.groups.subscription.dailyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[76] || (i[76] = (o) => c.daily_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, wb), [
                    [
                      V,
                      c.daily_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Cb, l(s(a)("admin.groups.subscription.weeklyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[77] || (i[77] = (o) => c.weekly_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, $b), [
                    [
                      V,
                      c.weekly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Mb, l(s(a)("admin.groups.subscription.monthlyLimit")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[78] || (i[78] = (o) => c.monthly_limit_usd = o),
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.subscription.noLimit")
                  }, null, 8, Pb), [
                    [
                      V,
                      c.monthly_limit_usd,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ]),
            e("div", Sb, [
              e("div", Eb, [
                e("div", null, [
                  e("label", Rb, l(s(a)("admin.groups.modelsList.title")), 1),
                  e("p", Tb, l(s(a)("admin.groups.modelsList.hint")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[79] || (i[79] = (o) => Pe.enabled = !Pe.enabled),
                  class: F([
                    "relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors",
                    Pe.enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      Pe.enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              Pe.enabled ? (g(), _("div", Vb, [
                !uo.value && Pe.items.length > 0 ? (g(), _("div", zb, [
                  e("span", Ub, l(s(a)("admin.groups.modelsList.selectedSummary", {
                    selected: qs.value,
                    total: Pe.items.length
                  })), 1),
                  e("div", Db, [
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20",
                      onClick: i[80] || (i[80] = (o) => s(ts)(Pe))
                    }, l(s(a)("admin.groups.modelsList.selectAll")), 1),
                    e("button", {
                      type: "button",
                      class: "rounded px-2 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700",
                      onClick: i[81] || (i[81] = (o) => s(as)(Pe))
                    }, l(s(a)("admin.groups.modelsList.invertSelection")), 1)
                  ])
                ])) : w("", !0),
                e("div", Ob, [
                  uo.value ? (g(), _("p", Ib, l(s(a)("admin.groups.modelsList.loading")), 1)) : Pe.items.length === 0 ? (g(), _("p", Ab, l(s(a)("admin.groups.modelsList.empty")), 1)) : w("", !0),
                  (g(!0), _(Z, null, te(Pe.items, (o, x) => (g(), _("div", {
                    key: o.id,
                    class: "flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 dark:border-dark-600 dark:bg-dark-800"
                  }, [
                    E(e("input", {
                      "onUpdate:modelValue": (y) => o.selected = y,
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    }, null, 8, Fb), [
                      [Ee, o.selected]
                    ]),
                    e("span", Nb, l(o.id), 1),
                    e("button", {
                      type: "button",
                      disabled: x === 0,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (y) => dr(x, x - 1)
                    }, [
                      P(O, {
                        name: "arrowUp",
                        size: "sm"
                      })
                    ], 8, Lb),
                    e("button", {
                      type: "button",
                      disabled: x === Pe.items.length - 1,
                      class: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40 dark:hover:bg-dark-600 dark:hover:text-gray-200",
                      onClick: (y) => dr(x, x + 1)
                    }, [
                      P(O, {
                        name: "arrowDown",
                        size: "sm"
                      })
                    ], 8, qb)
                  ]))), 128))
                ])
              ])) : w("", !0)
            ]),
            s(is)(c.platform) ? (g(), _("div", jb, [
              e("label", Hb, l(s(a)(s(Oe)(c.platform, "title"))), 1),
              e("p", Gb, l(s(a)(s(Oe)(c.platform, "description"))), 1),
              e("div", Bb, [
                e("label", Kb, [
                  E(e("input", {
                    "onUpdate:modelValue": i[82] || (i[82] = (o) => c.allow_image_generation = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, c.allow_image_generation]
                  ]),
                  q(" " + l(s(a)(s(Oe)(c.platform, "allowImageGeneration"))), 1)
                ]),
                e("label", Yb, [
                  E(e("input", {
                    "onUpdate:modelValue": i[83] || (i[83] = (o) => c.image_rate_independent = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, c.image_rate_independent]
                  ]),
                  q(" " + l(s(a)(s(Oe)(c.platform, "independentMultiplier"))), 1)
                ])
              ]),
              c.image_rate_independent ? (g(), _("div", Xb, [
                e("label", Wb, l(s(a)(s(Oe)(c.platform, "imageMultiplier"))), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[84] || (i[84] = (o) => c.image_rate_multiplier = o),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    V,
                    c.image_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : w("", !0),
              e("div", Zb, [
                e("div", null, [
                  i[156] || (i[156] = e("label", { class: "input-label" }, "1K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[85] || (i[85] = (o) => c.image_price_1k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(c.platform, "image_price_1k")
                  }, null, 8, Jb), [
                    [
                      V,
                      c.image_price_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[157] || (i[157] = e("label", { class: "input-label" }, "2K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[86] || (i[86] = (o) => c.image_price_2k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(c.platform, "image_price_2k")
                  }, null, 8, Qb), [
                    [
                      V,
                      c.image_price_2k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[158] || (i[158] = e("label", { class: "input-label" }, "4K ($)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[87] || (i[87] = (o) => c.image_price_4k = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Rt)(c.platform, "image_price_4k")
                  }, null, 8, ev), [
                    [
                      V,
                      c.image_price_4k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("p", tv, l(s(a)(s(Oe)(c.platform, "modeHint"))), 1),
              e("div", av, [
                e("div", ov, l(s(a)(s(Oe)(c.platform, "finalPricePreview"))), 1),
                e("div", rv, [
                  (g(!0), _(Z, null, te(ri.value, (o) => (g(), _("div", {
                    key: o.label
                  }, l(o.label) + ": " + l(o.value), 1))), 128))
                ])
              ]),
              c.platform === "gemini" && c.allow_image_generation ? (g(), _("div", sv, [
                e("label", iv, [
                  E(e("input", {
                    "onUpdate:modelValue": i[88] || (i[88] = (o) => c.allow_batch_image_generation = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, c.allow_batch_image_generation]
                  ]),
                  q(" " + l(s(a)("admin.groups.imagePricing.allowBatchImageGeneration")), 1)
                ]),
                e("p", nv, l(s(a)("admin.groups.imagePricing.batchSectionHint")), 1),
                c.allow_batch_image_generation ? (g(), _("div", lv, [
                  e("div", null, [
                    e("label", dv, l(s(a)("admin.groups.imagePricing.batchDiscountMultiplier")), 1),
                    E(e("input", {
                      "onUpdate:modelValue": i[89] || (i[89] = (o) => c.batch_image_discount_multiplier = o),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.5"
                    }, null, 512), [
                      [
                        V,
                        c.batch_image_discount_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", null, [
                    e("label", uv, l(s(a)("admin.groups.imagePricing.batchHoldMultiplier")), 1),
                    E(e("input", {
                      "onUpdate:modelValue": i[90] || (i[90] = (o) => c.batch_image_hold_multiplier = o),
                      type: "number",
                      step: "0.0001",
                      min: "0",
                      class: "input",
                      placeholder: "0.6"
                    }, null, 512), [
                      [
                        V,
                        c.batch_image_hold_multiplier,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : w("", !0)
              ])) : c.platform !== "gemini" ? (g(), _("p", cv, l(s(a)("admin.groups.imagePricing.batchGeminiOnlyHint")), 1)) : w("", !0)
            ])) : w("", !0),
            s(ns)(c.platform) ? (g(), _("div", pv, [
              e("label", mv, l(s(a)(s(Be)("title"))), 1),
              e("p", gv, l(s(a)(s(Be)("description"))), 1),
              e("div", _v, [
                e("label", fv, [
                  E(e("input", {
                    "onUpdate:modelValue": i[91] || (i[91] = (o) => c.video_rate_independent = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, c.video_rate_independent]
                  ]),
                  q(" " + l(s(a)(s(Be)("independentMultiplier"))), 1)
                ])
              ]),
              c.video_rate_independent ? (g(), _("div", hv, [
                e("label", bv, l(s(a)(s(Be)("videoMultiplier"))), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[92] || (i[92] = (o) => c.video_rate_multiplier = o),
                  type: "number",
                  step: "0.0001",
                  min: "0",
                  class: "input",
                  placeholder: "1"
                }, null, 512), [
                  [
                    V,
                    c.video_rate_multiplier,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : w("", !0),
              e("div", vv, [
                e("div", null, [
                  i[159] || (i[159] = e("label", { class: "input-label" }, "480p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[93] || (i[93] = (o) => c.video_price_480p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(c.platform, "video_price_480p")
                  }, null, 8, yv), [
                    [
                      V,
                      c.video_price_480p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[160] || (i[160] = e("label", { class: "input-label" }, "720p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[94] || (i[94] = (o) => c.video_price_720p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(c.platform, "video_price_720p")
                  }, null, 8, xv), [
                    [
                      V,
                      c.video_price_720p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  i[161] || (i[161] = e("label", { class: "input-label" }, "1080p ($/s)", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": i[95] || (i[95] = (o) => c.video_price_1080p = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: s(Tt)(c.platform, "video_price_1080p")
                  }, null, 8, kv), [
                    [
                      V,
                      c.video_price_1080p,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ]),
              e("div", wv, [
                e("p", Cv, l(s(a)("admin.groups.videoPricing.modelOverridesTitle")), 1),
                e("p", $v, l(s(a)("admin.groups.videoPricing.modelOverridesDescription")), 1),
                e("div", Mv, [
                  (g(!0), _(Z, null, te(s(cs)(c.video_model_prices), (o) => (g(), _("div", {
                    key: o.key,
                    class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,7rem))] sm:items-end"
                  }, [
                    e("div", Pv, l(o.label), 1),
                    (g(!0), _(Z, null, te(s(Lo), (x) => (g(), _("label", {
                      key: x.key,
                      class: "block"
                    }, [
                      e("span", Sv, l(x.label) + " ($/s) ", 1),
                      E(e("input", {
                        "onUpdate:modelValue": (y) => c.video_model_prices[o.key][x.key] = y,
                        type: "number",
                        step: "0.001",
                        min: "0",
                        class: "input",
                        "data-testid": `edit-grok-video-price-${o.key}-${x.key}`
                      }, null, 8, Ev), [
                        [
                          V,
                          c.video_model_prices[o.key][x.key],
                          void 0,
                          { number: !0 }
                        ]
                      ])
                    ]))), 128))
                  ]))), 128))
                ])
              ]),
              e("p", Rv, l(s(a)(s(Be)("modeHint"))), 1),
              e("div", Tv, [
                e("div", Vv, l(s(a)(s(Be)("finalPricePreview"))), 1),
                e("div", zv, [
                  (g(!0), _(Z, null, te(ii.value, (o) => (g(), _("div", {
                    key: o.label
                  }, l(o.label) + ": " + l(o.value), 1))), 128))
                ])
              ])
            ])) : w("", !0),
            c.subscription_type === "subscription" ? (g(), _("div", Uv, [
              e("div", Dv, [
                e("label", Ov, [
                  E(e("input", {
                    "onUpdate:modelValue": i[96] || (i[96] = (o) => c.peak_rate_enabled = o),
                    type: "checkbox",
                    class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }, null, 512), [
                    [Ee, c.peak_rate_enabled]
                  ]),
                  e("span", null, l(s(a)("admin.groups.peakRate.enable")), 1)
                ])
              ]),
              c.peak_rate_enabled ? (g(), _("div", Iv, [
                e("div", null, [
                  e("label", Av, l(s(a)("admin.groups.peakRate.peakStart")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[97] || (i[97] = (o) => c.peak_start = o),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [V, c.peak_start]
                  ])
                ]),
                e("div", null, [
                  e("label", Fv, l(s(a)("admin.groups.peakRate.peakEnd")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[98] || (i[98] = (o) => c.peak_end = o),
                    type: "time",
                    class: "input"
                  }, null, 512), [
                    [V, c.peak_end]
                  ])
                ]),
                e("div", null, [
                  e("label", Nv, l(s(a)("admin.groups.peakRate.peakMultiplier")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[99] || (i[99] = (o) => c.peak_rate_multiplier = o),
                    type: "number",
                    step: "0.001",
                    min: "0",
                    class: "input",
                    placeholder: "1",
                    title: s(a)("admin.groups.peakRate.multiplierHint")
                  }, null, 8, Lv), [
                    [
                      V,
                      c.peak_rate_multiplier,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            s(Et)(c.platform) ? (g(), _("div", qv, [
              e("label", jv, [
                E(e("input", {
                  "onUpdate:modelValue": i[100] || (i[100] = (o) => c.profit_control_enabled = o),
                  type: "checkbox",
                  class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }, null, 512), [
                  [Ee, c.profit_control_enabled]
                ]),
                e("span", null, l(s(a)("admin.groups.profitControl.enable")), 1)
              ]),
              e("p", Hv, l(c.profit_control_enabled ? s(a)("admin.groups.profitControl.enabledHint") : s(a)("admin.groups.profitControl.disabledHint")), 1),
              c.profit_control_enabled ? (g(), _("div", Gv, [
                e("div", null, [
                  e("label", Bv, l(s(a)("admin.groups.profitControl.minMargin")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[101] || (i[101] = (o) => c.profit_min_margin_percent = o),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: s(a)("admin.groups.profitControl.minMarginHint")
                  }, null, 8, Kv), [
                    [
                      V,
                      c.profit_min_margin_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", Yv, l(s(a)("admin.groups.profitControl.safetyBuffer")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[102] || (i[102] = (o) => c.profit_safety_buffer_percent = o),
                    type: "number",
                    step: "0.1",
                    min: "0",
                    max: "99.99",
                    class: "input",
                    placeholder: "0",
                    title: s(a)("admin.groups.profitControl.safetyBufferHint")
                  }, null, 8, Xv), [
                    [
                      V,
                      c.profit_safety_buffer_percent,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            c.platform === "antigravity" ? (g(), _("div", Wv, [
              e("div", Zv, [
                e("label", Jv, l(s(a)("admin.groups.supportedScopes.title")), 1),
                e("div", Qv, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", ey, [
                    e("div", ty, [
                      e("p", ay, l(s(a)("admin.groups.supportedScopes.tooltip")), 1),
                      i[162] || (i[162] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", oy, [
                e("label", ry, [
                  e("input", {
                    type: "checkbox",
                    checked: c.supported_model_scopes.includes("claude"),
                    onChange: i[103] || (i[103] = (o) => go("claude")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, sy),
                  e("span", iy, l(s(a)("admin.groups.supportedScopes.claude")), 1)
                ]),
                e("label", ny, [
                  e("input", {
                    type: "checkbox",
                    checked: c.supported_model_scopes.includes("gemini_text"),
                    onChange: i[104] || (i[104] = (o) => go("gemini_text")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, ly),
                  e("span", dy, l(s(a)("admin.groups.supportedScopes.geminiText")), 1)
                ]),
                e("label", uy, [
                  e("input", {
                    type: "checkbox",
                    checked: c.supported_model_scopes.includes("gemini_image"),
                    onChange: i[105] || (i[105] = (o) => go("gemini_image")),
                    class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                  }, null, 40, cy),
                  e("span", py, l(s(a)("admin.groups.supportedScopes.geminiImage")), 1)
                ])
              ]),
              e("p", my, l(s(a)("admin.groups.supportedScopes.hint")), 1)
            ])) : w("", !0),
            c.platform === "antigravity" ? (g(), _("div", gy, [
              e("div", _y, [
                e("label", fy, l(s(a)("admin.groups.mcpXml.title")), 1),
                e("div", hy, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", by, [
                    e("div", vy, [
                      e("p", yy, l(s(a)("admin.groups.mcpXml.tooltip")), 1),
                      i[163] || (i[163] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", xy, [
                e("button", {
                  type: "button",
                  onClick: i[106] || (i[106] = (o) => c.mcp_xml_inject = !c.mcp_xml_inject),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    c.mcp_xml_inject ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      c.mcp_xml_inject ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", ky, l(c.mcp_xml_inject ? s(a)("admin.groups.mcpXml.enabled") : s(a)("admin.groups.mcpXml.disabled")), 1)
              ])
            ])) : w("", !0),
            c.platform === "anthropic" ? (g(), _("div", wy, [
              e("div", Cy, [
                e("label", $y, l(s(a)("admin.groups.claudeCode.title")), 1),
                e("div", My, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", Py, [
                    e("div", Sy, [
                      e("p", Ey, l(s(a)("admin.groups.claudeCode.tooltip")), 1),
                      i[164] || (i[164] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", Ry, [
                e("button", {
                  type: "button",
                  onClick: i[107] || (i[107] = (o) => c.claude_code_only = !c.claude_code_only),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    c.claude_code_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      c.claude_code_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", Ty, l(c.claude_code_only ? s(a)("admin.groups.claudeCode.enabled") : s(a)("admin.groups.claudeCode.disabled")), 1)
              ]),
              c.claude_code_only ? (g(), _("div", Vy, [
                e("label", zy, l(s(a)("admin.groups.claudeCode.fallbackGroup")), 1),
                P(ke, {
                  modelValue: c.fallback_group_id,
                  "onUpdate:modelValue": i[108] || (i[108] = (o) => c.fallback_group_id = o),
                  options: Ie.value,
                  placeholder: s(a)("admin.groups.claudeCode.noFallback")
                }, null, 8, ["modelValue", "options", "placeholder"]),
                e("p", Uy, l(s(a)("admin.groups.claudeCode.fallbackHint")), 1)
              ])) : w("", !0)
            ])) : w("", !0),
            c.platform === "openai" ? (g(), _("div", Dy, [
              e("h4", Oy, l(s(a)("admin.groups.webSearchPricing.title")), 1),
              e("div", null, [
                e("label", Iy, l(s(a)("admin.groups.webSearchPricing.pricePerCall")), 1),
                E(e("input", {
                  "onUpdate:modelValue": i[109] || (i[109] = (o) => c.web_search_price_per_call = o),
                  type: "number",
                  step: "0.001",
                  min: "0",
                  placeholder: "0.01",
                  class: "input"
                }, null, 512), [
                  [
                    V,
                    c.web_search_price_per_call,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                e("p", Ay, l(s(a)("admin.groups.webSearchPricing.pricePerCallHint")), 1),
                e("div", Fy, l(s(a)("admin.groups.webSearchPricing.finalPricePreview", {
                  price: li.value
                })), 1)
              ])
            ])) : w("", !0),
            e("div", Ny, [
              e("div", Ly, [
                e("div", null, [
                  e("h4", qy, l(s(a)("admin.groups.modelPricing.title")), 1),
                  e("p", jy, l(s(a)("admin.groups.modelPricing.description")), 1)
                ]),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: i[110] || (i[110] = (o) => r(c.model_pricing))
                }, [
                  P(O, {
                    name: "plus",
                    size: "sm",
                    class: "mr-1"
                  }),
                  q(l(s(a)("admin.groups.modelPricing.add")), 1)
                ])
              ]),
              e("label", Hy, [
                E(e("input", {
                  "onUpdate:modelValue": i[111] || (i[111] = (o) => c.long_context_pricing_enabled = o),
                  type: "checkbox",
                  class: "mt-0.5"
                }, null, 512), [
                  [Ee, c.long_context_pricing_enabled]
                ]),
                e("span", null, [
                  e("span", Gy, l(s(a)("admin.groups.modelPricing.longContext")), 1),
                  e("span", By, l(s(a)("admin.groups.modelPricing.longContextHint")), 1)
                ])
              ]),
              e("div", Ky, [
                (g(!0), _(Z, null, te(c.model_pricing, (o, x) => (g(), Ce(Or, {
                  key: x,
                  entry: o,
                  platform: c.platform,
                  "hide-token-intervals": "",
                  onUpdate: (y) => c.model_pricing[x] = y,
                  onRemove: (y) => c.model_pricing.splice(x, 1)
                }, null, 8, ["entry", "platform", "onUpdate", "onRemove"]))), 128))
              ])
            ]),
            c.platform === "grok" ? (g(), _("div", Yy, [
              e("h4", Xy, l(s(a)("admin.groups.explicitPricing.title")), 1),
              e("p", Wy, l(s(a)("admin.groups.explicitPricing.description")), 1),
              e("div", Zy, [
                e("div", null, [
                  e("label", Jy, l(s(a)("admin.groups.explicitPricing.searchPricePer1k")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[112] || (i[112] = (o) => c.search_price_per_1k = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.explicitPricing.pricePlaceholder"),
                    "data-testid": "edit-search-price"
                  }, null, 8, Qy), [
                    [
                      V,
                      c.search_price_per_1k,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", ex, l(s(a)("admin.groups.voicePricing.audioRealtimePerMin")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[113] || (i[113] = (o) => c.audio_realtime_price_per_min = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "edit-audio-realtime-price"
                  }, null, 8, tx), [
                    [
                      V,
                      c.audio_realtime_price_per_min,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", ax, l(s(a)("admin.groups.voicePricing.audioTtsPerMillionChars")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[114] || (i[114] = (o) => c.audio_tts_price_per_million_chars = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "edit-audio-tts-price"
                  }, null, 8, ox), [
                    [
                      V,
                      c.audio_tts_price_per_million_chars,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", null, [
                  e("label", rx, l(s(a)("admin.groups.voicePricing.audioSttPerHour")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[115] || (i[115] = (o) => c.audio_stt_price_per_hour = o),
                    type: "number",
                    step: "0.000001",
                    min: "0",
                    class: "input",
                    placeholder: s(a)("admin.groups.voicePricing.pricePlaceholder"),
                    "data-testid": "edit-audio-stt-price"
                  }, null, 8, sx), [
                    [
                      V,
                      c.audio_stt_price_per_hour,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])
              ])
            ])) : w("", !0),
            c.platform === "openai" ? (g(), _("div", ix, [
              e("h4", nx, l(s(a)("admin.groups.openaiLive.title")), 1),
              e("div", lx, [
                e("label", dx, l(s(a)("admin.groups.openaiLive.allow")), 1),
                e("button", {
                  type: "button",
                  onClick: i[116] || (i[116] = (o) => fr("edit")),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    c.allow_live ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", c.allow_live ? "translate-x-6" : "translate-x-1"])
                  }, null, 2)
                ], 2)
              ]),
              e("p", ux, l(s(a)("admin.groups.openaiLive.hint")), 1)
            ])) : w("", !0),
            c.platform === "openai" ? (g(), _("div", cx, [
              e("h4", px, l(s(a)("admin.groups.openaiMessages.title")), 1),
              e("div", mx, [
                e("label", gx, l(s(a)("admin.groups.openaiMessages.allowDispatch")), 1),
                e("button", {
                  type: "button",
                  onClick: i[117] || (i[117] = (o) => c.allow_messages_dispatch = !c.allow_messages_dispatch),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    c.allow_messages_dispatch ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      c.allow_messages_dispatch ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("p", _x, l(s(a)("admin.groups.openaiMessages.allowDispatchHint")), 1),
              c.allow_messages_dispatch ? (g(), _("div", fx, [
                e("div", hx, [
                  e("div", bx, [
                    e("div", vx, [
                      i[165] || (i[165] = e("div", { class: "h-2 w-2 rounded-full bg-blue-500" }, null, -1)),
                      e("label", yx, l(s(a)("admin.groups.openaiMessages.familyMappingTitle")), 1)
                    ]),
                    e("p", xx, l(s(a)("admin.groups.openaiMessages.familyMappingHint")), 1)
                  ]),
                  e("div", kx, [
                    e("div", wx, [
                      e("div", null, [
                        e("label", Cx, l(s(a)("admin.groups.openaiMessages.opusModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[118] || (i[118] = (o) => c.opus_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.opusModelPlaceholder"),
                          class: "input"
                        }, null, 8, $x), [
                          [V, c.opus_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Mx, l(s(a)("admin.groups.openaiMessages.sonnetModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[119] || (i[119] = (o) => c.sonnet_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.sonnetModelPlaceholder"),
                          class: "input"
                        }, null, 8, Px), [
                          [V, c.sonnet_mapped_model]
                        ])
                      ]),
                      e("div", null, [
                        e("label", Sx, l(s(a)("admin.groups.openaiMessages.haikuModel")), 1),
                        E(e("input", {
                          "onUpdate:modelValue": i[120] || (i[120] = (o) => c.haiku_mapped_model = o),
                          type: "text",
                          placeholder: s(a)("admin.groups.openaiMessages.haikuModelPlaceholder"),
                          class: "input"
                        }, null, 8, Ex), [
                          [V, c.haiku_mapped_model]
                        ])
                      ])
                    ])
                  ])
                ]),
                e("div", Rx, [
                  e("div", Tx, [
                    e("div", Vx, [
                      e("div", null, [
                        e("div", zx, [
                          i[166] || (i[166] = e("div", { class: "h-2 w-2 rounded-full bg-primary-500" }, null, -1)),
                          e("label", Ux, l(s(a)("admin.groups.openaiMessages.exactMappingTitle")), 1)
                        ]),
                        e("p", Dx, l(s(a)("admin.groups.openaiMessages.exactMappingHint")), 1)
                      ])
                    ])
                  ]),
                  e("div", Ox, [
                    c.exact_model_mappings.length === 0 ? (g(), _("div", Ix, [
                      e("span", null, l(s(a)("admin.groups.openaiMessages.noExactMappings")), 1),
                      e("button", {
                        type: "button",
                        onClick: Cr,
                        class: "flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      }, [
                        P(O, {
                          name: "plus",
                          size: "sm"
                        }),
                        q(" " + l(s(a)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ])) : (g(), _("div", Ax, [
                      (g(!0), _(Z, null, te(c.exact_model_mappings, (o) => (g(), _("div", {
                        key: Ys(o),
                        class: "group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-dark-600 dark:bg-dark-700 dark:hover:border-primary-700"
                      }, [
                        e("div", Fx, [
                          e("div", Nx, [
                            e("div", null, [
                              e("label", Lx, l(s(a)("admin.groups.openaiMessages.claudeModel")), 1),
                              E(e("input", {
                                "onUpdate:modelValue": (x) => o.claude_model = x,
                                type: "text",
                                placeholder: s(a)(
                                  "admin.groups.openaiMessages.claudeModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, qx), [
                                [V, o.claude_model]
                              ])
                            ]),
                            e("div", jx, [
                              P(O, {
                                name: "arrowRight",
                                size: "sm",
                                class: "transition-transform group-hover:translate-x-1"
                              })
                            ]),
                            e("div", null, [
                              e("label", Hx, l(s(a)("admin.groups.openaiMessages.targetModel")), 1),
                              E(e("input", {
                                "onUpdate:modelValue": (x) => o.target_model = x,
                                type: "text",
                                placeholder: s(a)(
                                  "admin.groups.openaiMessages.targetModelPlaceholder"
                                ),
                                class: "input bg-gray-50 focus:bg-white dark:bg-dark-800 dark:focus:bg-dark-900"
                              }, null, 8, Gx), [
                                [V, o.target_model]
                              ])
                            ])
                          ]),
                          e("button", {
                            type: "button",
                            onClick: (x) => xi(o),
                            class: "mt-6 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                            title: s(a)("admin.groups.openaiMessages.removeExactMapping")
                          }, [
                            P(O, {
                              name: "trash",
                              size: "sm"
                            })
                          ], 8, Bx)
                        ])
                      ]))), 128)),
                      e("button", {
                        type: "button",
                        onClick: Cr,
                        class: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-3 text-sm font-medium text-gray-500 transition-all hover:border-primary-300 hover:bg-primary-50/50 hover:text-primary-600 dark:border-dark-600 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-primary-800 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
                      }, [
                        P(O, {
                          name: "plus",
                          size: "sm"
                        }),
                        q(" " + l(s(a)("admin.groups.openaiMessages.addExactMapping")), 1)
                      ])
                    ]))
                  ])
                ])
              ])) : w("", !0)
            ])) : w("", !0),
            ["openai", "antigravity", "anthropic", "gemini"].includes(
              c.platform
            ) ? (g(), _("div", Kx, [
              e("h4", Yx, l(s(a)("admin.groups.accountFilters.title")), 1),
              e("div", Xx, [
                e("div", null, [
                  e("label", Wx, l(s(a)("admin.groups.accountFilters.oauthOnly")), 1),
                  e("p", Zx, l(c.require_oauth_only ? s(a)("admin.groups.accountFilters.oauthOnlyEnabled") : s(a)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[121] || (i[121] = (o) => c.require_oauth_only = !c.require_oauth_only),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    c.require_oauth_only ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      c.require_oauth_only ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ]),
              e("div", Jx, [
                e("div", null, [
                  e("label", Qx, l(s(a)("admin.groups.accountFilters.privacySetOnly")), 1),
                  e("p", e1, l(c.require_privacy_set ? s(a)("admin.groups.accountFilters.privacySetOnlyEnabled") : s(a)("admin.groups.accountFilters.disabled")), 1)
                ]),
                e("button", {
                  type: "button",
                  onClick: i[122] || (i[122] = (o) => c.require_privacy_set = !c.require_privacy_set),
                  class: F([
                    "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    c.require_privacy_set ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      c.require_privacy_set ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2)
              ])
            ])) : w("", !0),
            ["anthropic", "antigravity"].includes(c.platform) && c.subscription_type !== "subscription" ? (g(), _("div", t1, [
              e("label", a1, l(s(a)("admin.groups.invalidRequestFallback.title")), 1),
              P(ke, {
                modelValue: c.fallback_group_id_on_invalid_request,
                "onUpdate:modelValue": i[123] || (i[123] = (o) => c.fallback_group_id_on_invalid_request = o),
                options: H.value,
                placeholder: s(a)("admin.groups.invalidRequestFallback.noFallback")
              }, null, 8, ["modelValue", "options", "placeholder"]),
              e("p", o1, l(s(a)("admin.groups.invalidRequestFallback.hint")), 1)
            ])) : w("", !0),
            c.platform === "anthropic" ? (g(), _("div", r1, [
              e("div", s1, [
                e("label", i1, l(s(a)("admin.groups.modelRouting.title")), 1),
                e("div", n1, [
                  P(O, {
                    name: "questionCircle",
                    size: "sm",
                    "stroke-width": 2,
                    class: "cursor-help text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
                  }),
                  e("div", l1, [
                    e("div", d1, [
                      e("p", u1, l(s(a)("admin.groups.modelRouting.tooltip")), 1),
                      i[167] || (i[167] = e("div", { class: "absolute -bottom-1.5 left-3 h-3 w-3 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
                    ])
                  ])
                ])
              ]),
              e("div", c1, [
                e("button", {
                  type: "button",
                  onClick: i[124] || (i[124] = (o) => c.model_routing_enabled = !c.model_routing_enabled),
                  class: F([
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    c.model_routing_enabled ? "bg-primary-500" : "bg-gray-300 dark:bg-dark-600"
                  ])
                }, [
                  e("span", {
                    class: F([
                      "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform",
                      c.model_routing_enabled ? "translate-x-6" : "translate-x-1"
                    ])
                  }, null, 2)
                ], 2),
                e("span", p1, l(c.model_routing_enabled ? s(a)("admin.groups.modelRouting.enabled") : s(a)("admin.groups.modelRouting.disabled")), 1)
              ]),
              c.model_routing_enabled ? (g(), _("p", g1, l(s(a)("admin.groups.modelRouting.noRulesHint")), 1)) : (g(), _("p", m1, l(s(a)("admin.groups.modelRouting.disabledHint")), 1)),
              c.model_routing_enabled ? (g(), _("div", _1, [
                (g(!0), _(Z, null, te(_t.value, (o) => {
                  var x;
                  return g(), _("div", {
                    key: Bs(o),
                    class: "rounded-lg border border-gray-200 p-3 dark:border-dark-600"
                  }, [
                    e("div", f1, [
                      e("div", h1, [
                        e("div", null, [
                          e("label", b1, l(s(a)("admin.groups.modelRouting.modelPattern")), 1),
                          E(e("input", {
                            "onUpdate:modelValue": (y) => o.pattern = y,
                            type: "text",
                            class: "input text-sm",
                            placeholder: s(a)("admin.groups.modelRouting.modelPatternPlaceholder")
                          }, null, 8, v1), [
                            [V, o.pattern]
                          ])
                        ]),
                        e("div", null, [
                          e("label", y1, l(s(a)("admin.groups.modelRouting.accounts")), 1),
                          o.accounts.length > 0 ? (g(), _("div", x1, [
                            (g(!0), _(Z, null, te(o.accounts, (y) => (g(), _("span", {
                              key: y.id,
                              class: "inline-flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                            }, [
                              q(l(y.name) + " ", 1),
                              e("button", {
                                type: "button",
                                onClick: (R) => ir(o, y.id, !0),
                                class: "ml-0.5 text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
                              }, [
                                P(O, {
                                  name: "x",
                                  size: "xs"
                                })
                              ], 8, k1)
                            ]))), 128))
                          ])) : w("", !0),
                          e("div", w1, [
                            E(e("input", {
                              "onUpdate:modelValue": (y) => bt.value[ht(o)] = y,
                              type: "text",
                              class: "input text-sm",
                              placeholder: s(a)(
                                "admin.groups.modelRouting.searchAccountPlaceholder"
                              ),
                              onInput: (y) => rr(o, !0),
                              onFocus: (y) => nr(o, !0)
                            }, null, 40, C1), [
                              [
                                V,
                                bt.value[ht(o)]
                              ]
                            ]),
                            vt.value[ht(o)] && ((x = nt.value[ht(o)]) == null ? void 0 : x.length) > 0 ? (g(), _("div", $1, [
                              (g(!0), _(Z, null, te(nt.value[ht(o)], (y) => (g(), _("button", {
                                key: y.id,
                                type: "button",
                                onClick: (R) => sr(o, y, !0),
                                class: F(["w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700", {
                                  "opacity-50": o.accounts.some(
                                    (R) => R.id === y.id
                                  )
                                }]),
                                disabled: o.accounts.some((R) => R.id === y.id)
                              }, [
                                e("span", null, l(y.name), 1),
                                e("span", P1, "#" + l(y.id), 1)
                              ], 10, M1))), 128))
                            ])) : w("", !0)
                          ]),
                          e("p", S1, l(s(a)("admin.groups.modelRouting.accountsHint")), 1)
                        ])
                      ]),
                      e("button", {
                        type: "button",
                        onClick: (y) => Js(o),
                        class: "mt-5 p-1.5 text-gray-400 hover:text-red-500 transition-colors",
                        title: s(a)("admin.groups.modelRouting.removeRule")
                      }, [
                        P(O, {
                          name: "trash",
                          size: "sm"
                        })
                      ], 8, E1)
                    ])
                  ]);
                }), 128))
              ])) : w("", !0),
              c.model_routing_enabled ? (g(), _("button", {
                key: 3,
                type: "button",
                onClick: Zs,
                class: "mt-3 flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              }, [
                P(O, {
                  name: "plus",
                  size: "sm"
                }),
                q(" " + l(s(a)("admin.groups.modelRouting.addRule")), 1)
              ])) : w("", !0)
            ])) : w("", !0)
          ], 32)) : w("", !0)
        ]),
        _: 1
      }, 8, ["show", "title"]),
      P(Vr, {
        show: va.value,
        title: s(a)("admin.groups.deleteGroup"),
        message: di.value,
        "confirm-text": s(a)("common.delete"),
        "cancel-text": s(a)("common.cancel"),
        danger: !0,
        onConfirm: Ui,
        onCancel: i[125] || (i[125] = (o) => va.value = !1)
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      P(Vr, {
        show: Ns.value,
        title: s(a)("admin.groups.openaiLive.unsupportedTitle"),
        message: s(a)("admin.groups.openaiLive.unsupportedMessage"),
        "confirm-text": s(a)("admin.groups.openaiLive.enableAnyway"),
        "cancel-text": s(a)("common.cancel"),
        danger: !0,
        onConfirm: ui,
        onCancel: ci
      }, null, 8, ["show", "title", "message", "confirm-text", "cancel-text"]),
      P(jt, {
        show: to.value,
        title: s(a)("admin.groups.sortOrder"),
        width: "normal",
        onClose: bo
      }, {
        footer: de(() => [
          e("div", N1, [
            e("button", {
              onClick: bo,
              type: "button",
              class: "btn btn-secondary"
            }, l(s(a)("common.cancel")), 1),
            e("button", {
              onClick: Oi,
              disabled: Xt.value,
              class: "btn btn-primary"
            }, [
              Xt.value ? (g(), _("svg", q1, [...i[169] || (i[169] = [
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
              ])])) : w("", !0),
              q(" " + l(Xt.value ? s(a)("common.saving") : s(a)("common.save")), 1)
            ], 8, L1)
          ])
        ]),
        default: de(() => [
          e("div", z1, [
            e("p", U1, l(s(a)("admin.groups.sortOrderHint")), 1),
            P(s(yp), {
              modelValue: Dt.value,
              "onUpdate:modelValue": i[126] || (i[126] = (o) => Dt.value = o),
              animation: 200,
              class: "space-y-2"
            }, {
              default: de(() => [
                (g(!0), _(Z, null, te(Dt.value, (o) => (g(), _("div", {
                  key: o.id,
                  class: "flex cursor-grab items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md active:cursor-grabbing dark:border-dark-600 dark:bg-dark-700"
                }, [
                  e("div", D1, [
                    P(O, {
                      name: "menu",
                      size: "md"
                    })
                  ]),
                  e("div", O1, [
                    e("div", I1, l(o.name), 1),
                    e("div", A1, [
                      e("span", {
                        class: F([
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                          o.platform === "anthropic" ? "bg-zo-alert-100 text-zo-alert-700 dark:bg-zo-alert-900/30 dark:text-zo-alert-400" : o.platform === "openai" ? "bg-zo-signal-100 text-zo-signal-700 dark:bg-zo-signal-900/30 dark:text-zo-signal-400" : o.platform === "antigravity" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : o.platform === "grok" ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100" : o.platform === "kimi" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" : o.platform === "zhipu" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : o.platform === "deepseek" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        ])
                      }, l(s(a)("admin.groups.platforms." + o.platform)), 3)
                    ])
                  ]),
                  e("div", F1, "#" + l(o.id), 1)
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      P(jt, {
        show: ro.value,
        title: Fe.value ? s(a)("admin.groups.compositeRoutes.titleWithGroup", {
          name: Fe.value.name
        }) : s(a)("admin.groups.compositeRoutes.title"),
        width: "wide",
        onClose: Mr
      }, {
        footer: de(() => [
          e("div", Kk, [
            e("button", {
              type: "button",
              class: "btn btn-secondary",
              onClick: Mr
            }, l(s(a)("common.close")), 1)
          ])
        ]),
        default: de(() => [
          e("div", j1, [
            e("section", H1, [
              e("div", G1, [
                e("h3", B1, l(s(a)("admin.groups.compositeRoutes.routes")), 1),
                e("button", {
                  type: "button",
                  class: "btn btn-secondary btn-sm",
                  disabled: Wt.value,
                  onClick: Sa
                }, [
                  P(O, {
                    name: "refresh",
                    size: "sm",
                    class: F(Wt.value ? "animate-spin" : "")
                  }, null, 8, ["class"])
                ], 8, K1)
              ]),
              e("div", Y1, [
                Wt.value ? (g(), _("div", X1, l(s(a)("common.loading")), 1)) : ka.value.length === 0 ? (g(), _("div", W1, l(s(a)("admin.groups.compositeRoutes.empty")), 1)) : (g(), _("div", Z1, [
                  e("table", J1, [
                    e("thead", Q1, [
                      e("tr", null, [
                        e("th", ek, l(s(a)("admin.groups.compositeRoutes.publicModel")), 1),
                        e("th", tk, l(s(a)("admin.groups.compositeRoutes.target")), 1),
                        e("th", ak, l(s(a)("admin.groups.compositeRoutes.scope")), 1),
                        e("th", ok, l(s(a)("admin.groups.columns.actions")), 1)
                      ])
                    ]),
                    e("tbody", rk, [
                      (g(!0), _(Z, null, te(ka.value, (o) => (g(), _("tr", {
                        key: o.id,
                        class: F(!o.enabled && "opacity-60")
                      }, [
                        e("td", sk, [
                          e("div", ik, l(o.public_model), 1),
                          e("div", nk, [
                            e("span", lk, l($i(o.match_type)), 1),
                            o.enabled ? w("", !0) : (g(), _("span", dk, l(s(a)("admin.accounts.status.inactive")), 1))
                          ])
                        ]),
                        e("td", uk, [
                          e("div", ck, [
                            P(ja, {
                              platform: o.target_platform,
                              size: "xs"
                            }, null, 8, ["platform"]),
                            e("span", null, l($r(o.target_platform)), 1)
                          ]),
                          e("div", pk, l(o.upstream_model || o.public_model), 1)
                        ]),
                        e("td", mk, [
                          e("div", gk, l(Mi(o.endpoint)), 1),
                          e("div", _k, l(s(a)("admin.groups.compositeRoutes.priority")) + ": " + l(o.priority), 1)
                        ]),
                        e("td", fk, [
                          e("div", hk, [
                            e("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-dark-700 dark:hover:text-primary-400",
                              title: s(a)("common.edit"),
                              onClick: (x) => Ri(o)
                            }, [
                              P(O, {
                                name: "edit",
                                size: "sm"
                              })
                            ], 8, bk),
                            e("button", {
                              type: "button",
                              class: "rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
                              title: s(a)("common.delete"),
                              onClick: (x) => Vi(o)
                            }, [
                              P(O, {
                                name: "trash",
                                size: "sm"
                              })
                            ], 8, vk)
                          ])
                        ])
                      ], 2))), 128))
                    ])
                  ])
                ]))
              ])
            ]),
            e("section", yk, [
              e("form", {
                class: "space-y-3",
                onSubmit: Bt(Ti, ["prevent"])
              }, [
                e("div", xk, [
                  e("h3", kk, l(gt.value ? s(a)("admin.groups.compositeRoutes.editRoute") : s(a)("admin.groups.compositeRoutes.addRoute")), 1),
                  gt.value ? (g(), _("button", {
                    key: 0,
                    type: "button",
                    class: "text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                    onClick: oa
                  }, l(s(a)("common.cancel")), 1)) : w("", !0)
                ]),
                e("div", null, [
                  e("label", wk, l(s(a)("admin.groups.compositeRoutes.publicModel")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[127] || (i[127] = (o) => Q.public_model = o),
                    type: "text",
                    class: "input",
                    required: "",
                    placeholder: "openrouter/gpt-5"
                  }, null, 512), [
                    [
                      V,
                      Q.public_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                e("div", Ck, [
                  e("div", null, [
                    e("label", $k, l(s(a)("admin.groups.compositeRoutes.matchType")), 1),
                    P(ke, {
                      modelValue: Q.match_type,
                      "onUpdate:modelValue": i[128] || (i[128] = (o) => Q.match_type = o),
                      options: oe.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  e("div", null, [
                    e("label", Mk, l(s(a)("admin.groups.compositeRoutes.endpoint")), 1),
                    P(ke, {
                      modelValue: Q.endpoint,
                      "onUpdate:modelValue": i[129] || (i[129] = (o) => Q.endpoint = o),
                      options: he.value
                    }, null, 8, ["modelValue", "options"])
                  ])
                ]),
                e("div", Pk, [
                  e("div", null, [
                    e("label", Sk, l(s(a)("admin.groups.compositeRoutes.targetPlatform")), 1),
                    P(ke, {
                      modelValue: Q.target_platform,
                      "onUpdate:modelValue": i[130] || (i[130] = (o) => Q.target_platform = o),
                      options: se.value
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  e("div", null, [
                    e("label", Ek, l(s(a)("admin.groups.compositeRoutes.priority")), 1),
                    E(e("input", {
                      "onUpdate:modelValue": i[131] || (i[131] = (o) => Q.priority = o),
                      type: "number",
                      min: "1",
                      step: "1",
                      class: "input"
                    }, null, 512), [
                      [
                        V,
                        Q.priority,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                e("div", null, [
                  e("label", Rk, l(s(a)("admin.groups.compositeRoutes.upstreamModel")), 1),
                  E(e("input", {
                    "onUpdate:modelValue": i[132] || (i[132] = (o) => Q.upstream_model = o),
                    type: "text",
                    class: "input",
                    placeholder: "gpt-5"
                  }, null, 512), [
                    [
                      V,
                      Q.upstream_model,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  e("p", Tk, l(s(a)("admin.groups.compositeRoutes.upstreamModelHint")), 1)
                ]),
                e("div", null, [
                  e("label", Vk, l(s(a)("admin.groups.compositeRoutes.notes")), 1),
                  E(e("textarea", {
                    "onUpdate:modelValue": i[133] || (i[133] = (o) => Q.notes = o),
                    rows: "2",
                    class: "input"
                  }, null, 512), [
                    [
                      V,
                      Q.notes,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                e("div", zk, [
                  e("label", Uk, [
                    E(e("input", {
                      "onUpdate:modelValue": i[134] || (i[134] = (o) => Q.enabled = o),
                      type: "checkbox",
                      class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-700"
                    }, null, 512), [
                      [Ee, Q.enabled]
                    ]),
                    q(" " + l(s(a)("admin.groups.compositeRoutes.enabled")), 1)
                  ]),
                  e("button", {
                    type: "submit",
                    class: "btn btn-primary",
                    disabled: wa.value
                  }, [
                    wa.value ? w("", !0) : (g(), Ce(O, {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "mr-2"
                    })),
                    q(" " + l(gt.value ? s(a)("common.update") : s(a)("common.create")), 1)
                  ], 8, Dk)
                ])
              ], 32),
              e("div", Ok, [
                e("h3", Ik, l(s(a)("admin.groups.compositeRoutes.preview")), 1),
                e("div", Ak, [
                  E(e("input", {
                    "onUpdate:modelValue": i[135] || (i[135] = (o) => Ot.value = o),
                    type: "text",
                    class: "input",
                    placeholder: "openrouter/gpt-5",
                    onKeyup: Ia(Pr, ["enter"])
                  }, null, 544), [
                    [
                      V,
                      Ot.value,
                      void 0,
                      { trim: !0 }
                    ]
                  ]),
                  e("div", Fk, [
                    P(ke, {
                      modelValue: Ca.value,
                      "onUpdate:modelValue": i[136] || (i[136] = (o) => Ca.value = o),
                      options: he.value,
                      class: "min-w-0 flex-1"
                    }, null, 8, ["modelValue", "options"]),
                    e("button", {
                      type: "button",
                      class: "btn btn-secondary",
                      disabled: so.value || !Ot.value,
                      onClick: Pr
                    }, [
                      P(O, {
                        name: "play",
                        size: "sm"
                      })
                    ], 8, Nk)
                  ]),
                  Xe.value ? (g(), _("div", Lk, [
                    e("div", qk, [
                      e("span", {
                        class: F([
                          "badge",
                          Xe.value.matched ? "badge-success" : "badge-danger"
                        ])
                      }, l(Xe.value.matched ? s(a)("admin.groups.compositeRoutes.matched") : s(a)("admin.groups.compositeRoutes.notMatched")), 3),
                      e("span", jk, l(Pi(
                        Xe.value.source
                      )), 1)
                    ]),
                    Xe.value.matched ? (g(), _("div", Hk, [
                      e("div", null, l(s(a)("admin.groups.compositeRoutes.targetPlatform")) + ": " + l($r(
                        Xe.value.target_platform
                      )), 1),
                      e("div", Gk, l(s(a)("admin.groups.compositeRoutes.upstreamModel")) + ": " + l(Xe.value.upstream_model), 1)
                    ])) : (g(), _("div", Bk, l(Xe.value.reason), 1))
                  ])) : w("", !0)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]),
      P(tl, {
        show: ao.value,
        group: Jo.value,
        onClose: i[137] || (i[137] = (o) => ao.value = !1),
        onSuccess: Te
      }, null, 8, ["show", "group"]),
      P(Wl, {
        show: oo.value,
        group: Qo.value,
        onClose: i[138] || (i[138] = (o) => oo.value = !1),
        onSuccess: Te
      }, null, 8, ["show", "group"])
    ], 64));
  }
});
export {
  Zk as default
};
