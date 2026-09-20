import { d as ae, u as we, r as c, p as v, w as J, c as oe, o as se, f as b, g, E as F, z as p, s as S, J as N, q as L, _ as $, l as w, A as _, M as ne, T as re, v as ie, n as H, m as i, k as xe, h as P, D as de, x as ke, y as Ce, F as Te, j as Ee, i as Be, B as Se } from "./cnProviderAdminLeaf-DOTfdkE4.js";
const $e = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], Le = { class: "select-value" }, Ie = ["onKeydown"], De = { class: "select-icon" }, Me = {
  key: 0,
  class: "select-search"
}, Oe = ["placeholder", "aria-label"], Re = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], Ve = {
  key: 0,
  class: "select-empty"
}, G = 8, ze = 200, Ke = 300, _e = /* @__PURE__ */ ae({
  __name: "Select",
  props: {
    modelValue: { type: [String, Number, Boolean, null] },
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    searchable: { type: [Boolean, String], default: "auto" },
    searchPlaceholder: {},
    emptyText: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    creatable: { type: Boolean, default: !1 },
    creatablePrefix: { default: "" },
    clearable: { type: Boolean, default: !1 },
    id: {},
    ariaLabel: {},
    ariaDescribedby: {},
    remote: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(n, { emit: W }) {
    const { t: x } = we(), T = `select-${Math.random().toString(36).substring(2, 9)}`, a = n, f = W, o = c(!1), d = c(""), s = c(-1), C = c(null), I = c(null), D = c(null), u = c(null), m = c(null), R = c("bottom"), E = c(null), ue = v(() => a.placeholder ?? x("common.selectOption")), Q = v(() => a.searchPlaceholder ?? x("common.searchPlaceholder")), ce = v(() => a.emptyText ?? x("common.noOptionsFound"));
    let h = null;
    const A = v(() => a.remote ? !0 : a.searchable === "auto" ? a.options.length > 5 : a.searchable), fe = v(() => {
      if (!E.value) return {};
      const e = E.value, t = Math.max(G, window.innerWidth - G), l = Math.min(
        Math.max(G, e.left),
        t
      ), r = Math.max(0, t - l), B = Math.max(ze, e.width), ye = Math.min(B, r), q = {
        position: "fixed",
        left: `${l}px`,
        minWidth: `${ye}px`,
        maxWidth: `${r}px`,
        zIndex: "100000020"
      };
      return R.value === "top" ? q.bottom = `${window.innerHeight - e.top + 4}px` : q.top = `${e.bottom + 4}px`, q;
    }), M = (e) => typeof e == "object" && e !== null ? e[a.valueKey] : e, j = (e) => String(typeof e == "object" && e !== null ? e[a.labelKey] ?? "" : e ?? ""), k = (e) => typeof e == "object" && e !== null ? !!e.disabled : !1, V = (e) => typeof e == "object" && e !== null ? e.kind === "group" : !1, U = v(() => a.options.find((e) => M(e) === a.modelValue) || null), me = v(() => U.value ? j(U.value) : a.creatable && a.modelValue ? String(a.modelValue) : ue.value), ve = v(
      () => a.modelValue !== null && a.modelValue !== void 0 && a.modelValue !== ""
    ), y = v(() => {
      let e = a.options;
      if (A.value && d.value && !a.remote) {
        const t = d.value.toLowerCase();
        if (e = e.filter((l) => !!(j(l).toLowerCase().includes(t) || l.description && String(l.description).toLowerCase().includes(t))), a.creatable && d.value.trim()) {
          const l = d.value.trim(), r = a.creatablePrefix || x("common.search");
          e = [{ [a.valueKey]: l, [a.labelKey]: `${r} "${l}"`, _creatable: !0 }, ...e];
        }
      }
      return e;
    }), O = (e) => M(e) === a.modelValue, X = (e) => {
      const t = y.value;
      if (t.length === 0) return -1;
      for (let l = 0; l < t.length; l++) {
        const r = (e + l) % t.length;
        if (!k(t[r])) return r;
      }
      return -1;
    }, pe = (e) => {
      const t = y.value;
      if (t.length === 0) return -1;
      for (let l = 0; l < t.length; l++) {
        const r = (e - l + t.length) % t.length;
        if (!k(t[r])) return r;
      }
      return -1;
    }, he = (e, t) => {
      k(e) || V(e) || (s.value = t);
    }, z = () => {
      C.value && (E.value = C.value.getBoundingClientRect());
    }, K = () => {
      C.value && (z(), H(() => {
        if (!u.value || !E.value) return;
        const e = u.value.offsetHeight || 240, t = window.innerHeight - E.value.bottom, l = E.value.top;
        t < e && l > e ? R.value = "top" : R.value = "bottom";
      }));
    }, be = () => {
      a.disabled || (o.value = !o.value);
    };
    J(o, (e) => {
      if (e) {
        if (K(), y.value.length === 0)
          s.value = -1;
        else {
          const t = y.value.findIndex(O), l = t >= 0 ? t : 0;
          s.value = k(y.value[l]) ? X(l + 1) : l;
        }
        A.value && H(() => {
          var t;
          return (t = D.value) == null ? void 0 : t.focus();
        }), window.addEventListener("scroll", z, { capture: !0, passive: !0 }), window.addEventListener("resize", K);
      } else
        d.value = "", s.value = -1, h && (clearTimeout(h), h = null), window.removeEventListener("scroll", z, { capture: !0 }), window.removeEventListener("resize", K);
    }), J(d, (e) => {
      !a.remote || !o.value || (h && clearTimeout(h), h = setTimeout(() => {
        h = null, f("search", e.trim());
      }, Ke));
    });
    const Y = (e) => {
      var l;
      const t = M(e) ?? null;
      f("update:modelValue", t), f("change", t, e), o.value = !1, (l = I.value) == null || l.focus();
    }, Z = () => {
      a.disabled || (f("update:modelValue", null), f("change", null, null));
    }, ee = () => {
      o.value || (o.value = !0);
    }, ge = (e) => {
      var t;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), s.value = X(s.value + 1), s.value >= 0 && te();
          break;
        case "ArrowUp":
          e.preventDefault(), s.value = pe(s.value - 1), s.value >= 0 && te();
          break;
        case "Enter":
          if (e.preventDefault(), s.value >= 0 && s.value < y.value.length) {
            const l = y.value[s.value];
            k(l) || Y(l);
          }
          break;
        case "Escape":
          e.preventDefault(), o.value = !1, (t = I.value) == null || t.focus();
          break;
        case "Tab":
          o.value = !1;
          break;
      }
    }, te = () => {
      H(() => {
        const e = m.value;
        if (!e) return;
        const t = e.children[s.value];
        t && (t.offsetTop < e.scrollTop ? e.scrollTop = t.offsetTop : t.offsetTop + t.offsetHeight > e.scrollTop + e.offsetHeight && (e.scrollTop = t.offsetTop + t.offsetHeight - e.offsetHeight));
      });
    }, le = (e) => {
      var B;
      const t = e.target, l = !!t.closest(`.${T}`), r = (B = C.value) == null ? void 0 : B.contains(t);
      !l && !r && o.value && (o.value = !1);
    };
    return oe(() => {
      document.addEventListener("click", le);
    }), se(() => {
      document.removeEventListener("click", le), window.removeEventListener("scroll", z, { capture: !0 }), window.removeEventListener("resize", K), h && (clearTimeout(h), h = null);
    }), (e, t) => (i(), b("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: C
    }, [
      g("button", {
        ref_key: "triggerRef",
        ref: I,
        type: "button",
        onClick: be,
        disabled: n.disabled,
        "aria-expanded": o.value,
        "aria-haspopup": !0,
        id: n.id,
        "aria-label": n.ariaLabel ?? "Select option",
        "aria-describedby": n.ariaDescribedby,
        class: S([
          "select-trigger",
          "console-skin-select-trigger",
          o.value && "select-trigger-open",
          n.error && "select-trigger-error",
          n.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          F(p(ee, ["prevent"]), ["down"]),
          F(p(ee, ["prevent"]), ["up"])
        ]
      }, [
        g("span", Le, [
          N(e.$slots, "selected", { option: U.value }, () => [
            xe(P(me.value), 1)
          ], !0)
        ]),
        n.clearable && ve.value && !n.disabled ? (i(), b("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: p(Z, ["stop"]),
          onMousedown: t[0] || (t[0] = p(() => {
          }, ["stop"])),
          onKeydown: F(p(Z, ["stop", "prevent"]), ["enter"])
        }, [
          L($, {
            name: "x",
            size: "sm"
          })
        ], 40, Ie)) : w("", !0),
        g("span", De, [
          L($, {
            name: "chevronDown",
            size: "md",
            class: S(["transition-transform duration-200", o.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, $e),
      (i(), _(ne, { to: "body" }, [
        L(re, { name: "select-dropdown" }, {
          default: ie(() => [
            o.value ? (i(), b("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: u,
              class: S(["select-dropdown-portal console-skin-select-menu", [T]]),
              style: de(fe.value),
              role: "listbox",
              onClick: t[3] || (t[3] = p(() => {
              }, ["stop"])),
              onMousedown: t[4] || (t[4] = p(() => {
              }, ["stop"])),
              onKeydown: ge
            }, [
              A.value ? (i(), b("div", Me, [
                L($, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                ke(g("input", {
                  ref_key: "searchInputRef",
                  ref: D,
                  "onUpdate:modelValue": t[1] || (t[1] = (l) => d.value = l),
                  type: "text",
                  placeholder: Q.value,
                  "aria-label": Q.value,
                  class: "select-search-input",
                  onClick: t[2] || (t[2] = p(() => {
                  }, ["stop"]))
                }, null, 8, Oe), [
                  [Ce, d.value]
                ])
              ])) : w("", !0),
              g("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: m
              }, [
                (i(!0), b(Te, null, Ee(y.value, (l, r) => (i(), b("div", {
                  key: `${typeof M(l)}:${String(M(l) ?? "")}`,
                  role: "option",
                  "aria-selected": O(l),
                  "aria-disabled": k(l),
                  onClick: p((B) => !k(l) && Y(l), ["stop"]),
                  onMouseenter: (B) => he(l, r),
                  class: S([
                    "select-option",
                    V(l) && "select-option-group",
                    O(l) && "select-option-selected",
                    k(l) && !V(l) && "select-option-disabled",
                    s.value === r && !V(l) && "select-option-focused"
                  ])
                }, [
                  N(e.$slots, "option", {
                    option: l,
                    selected: O(l)
                  }, () => [
                    l._creatable ? (i(), _($, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : w("", !0),
                    g("span", {
                      class: S(["select-option-label", l._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, P(j(l)), 3),
                    O(l) ? (i(), _($, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : w("", !0)
                  ], !0)
                ], 42, Re))), 128)),
                y.value.length === 0 ? (i(), b("div", Ve, P(a.loading ? Be(x)("common.loading") : ce.value), 1)) : w("", !0)
              ], 512)
            ], 38)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Ae = /* @__PURE__ */ Se(_e, [["__scopeId", "data-v-fbc717eb"]]), He = { class: "modal-header" }, Pe = {
  key: 0,
  class: "modal-footer"
};
let Ne = 0;
const je = /* @__PURE__ */ ae({
  __name: "BaseDialog",
  props: {
    show: { type: Boolean },
    title: {},
    width: { default: "normal" },
    closeOnEscape: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !1 },
    showCloseButton: { type: Boolean, default: !0 },
    zIndex: { default: 50 },
    panelClass: { default: "" }
  },
  emits: ["close"],
  setup(n, { emit: W }) {
    const x = `modal-title-${++Ne}`, T = c(null), a = c(null);
    let f = null;
    const o = n, d = W, s = v(() => o.zIndex !== 50 ? { zIndex: o.zIndex } : void 0), C = v(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[o.width]), I = () => {
      o.closeOnClickOutside && d("close");
    }, D = (u) => {
      o.show && o.closeOnEscape && u.key === "Escape" && d("close");
    };
    return J(
      () => o.show,
      async (u) => {
        if (u) {
          if (f = document.activeElement, document.body.classList.add("modal-open"), await H(), a.value && (a.value.scrollTop = 0), T.value) {
            const m = T.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            m == null || m.focus();
          }
        } else
          document.body.classList.remove("modal-open"), f && typeof f.focus == "function" && f.focus(), f = null;
      },
      { immediate: !0 }
    ), oe(() => {
      document.addEventListener("keydown", D);
    }), se(() => {
      document.removeEventListener("keydown", D), document.body.classList.remove("modal-open");
    }), (u, m) => (i(), _(ne, { to: "body" }, [
      L(re, { name: "modal" }, {
        default: ie(() => [
          n.show ? (i(), b("div", {
            key: 0,
            class: "modal-overlay",
            style: de(s.value),
            "aria-labelledby": x,
            role: "dialog",
            "aria-modal": "true",
            onClick: p(I, ["self"])
          }, [
            g("div", {
              ref_key: "dialogRef",
              ref: T,
              class: S(["modal-content", "base-dialog-surface", "console-skin-dialog", C.value, n.panelClass]),
              onClick: m[1] || (m[1] = p(() => {
              }, ["stop"]))
            }, [
              g("div", He, [
                g("h3", {
                  id: x,
                  class: "modal-title"
                }, P(n.title), 1),
                n.showCloseButton ? (i(), b("button", {
                  key: 0,
                  onClick: m[0] || (m[0] = (R) => d("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  L($, {
                    name: "x",
                    size: "md"
                  })
                ])) : w("", !0)
              ]),
              g("div", {
                ref_key: "modalBodyRef",
                ref: a,
                class: "modal-body"
              }, [
                N(u.$slots, "default")
              ], 512),
              u.$slots.footer ? (i(), b("div", Pe, [
                N(u.$slots, "footer")
              ])) : w("", !0)
            ], 2)
          ], 4)) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  Ae as S,
  je as _
};
