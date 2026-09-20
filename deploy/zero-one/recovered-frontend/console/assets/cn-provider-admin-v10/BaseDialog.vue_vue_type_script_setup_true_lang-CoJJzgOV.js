import { d as C, r as x, p as w, w as B, c as z, o as E, A as I, M as O, q as v, T as $, v as L, m as s, f as c, g as n, h as S, _ as T, l as m, J as y, z as k, s as R, D, n as M } from "./cnProviderAdminLeaf-DehadpuS.js";
const N = { class: "modal-header" }, V = {
  key: 0,
  class: "modal-footer"
};
let q = 0;
const J = /* @__PURE__ */ C({
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
  setup(a, { emit: g }) {
    const u = `modal-title-${++q}`, d = x(null), i = x(null);
    let t = null;
    const l = a, r = g, h = w(() => l.zIndex !== 50 ? { zIndex: l.zIndex } : void 0), p = w(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[l.width]), b = () => {
      l.closeOnClickOutside && r("close");
    }, f = (e) => {
      l.show && l.closeOnEscape && e.key === "Escape" && r("close");
    };
    return B(
      () => l.show,
      async (e) => {
        if (e) {
          if (t = document.activeElement, document.body.classList.add("modal-open"), await M(), i.value && (i.value.scrollTop = 0), d.value) {
            const o = d.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            o == null || o.focus();
          }
        } else
          document.body.classList.remove("modal-open"), t && typeof t.focus == "function" && t.focus(), t = null;
      },
      { immediate: !0 }
    ), z(() => {
      document.addEventListener("keydown", f);
    }), E(() => {
      document.removeEventListener("keydown", f), document.body.classList.remove("modal-open");
    }), (e, o) => (s(), I(O, { to: "body" }, [
      v($, { name: "modal" }, {
        default: L(() => [
          a.show ? (s(), c("div", {
            key: 0,
            class: "modal-overlay",
            style: D(h.value),
            "aria-labelledby": u,
            role: "dialog",
            "aria-modal": "true",
            onClick: k(b, ["self"])
          }, [
            n("div", {
              ref_key: "dialogRef",
              ref: d,
              class: R(["modal-content", "base-dialog-surface", "console-skin-dialog", p.value, a.panelClass]),
              onClick: o[1] || (o[1] = k(() => {
              }, ["stop"]))
            }, [
              n("div", N, [
                n("h3", {
                  id: u,
                  class: "modal-title"
                }, S(a.title), 1),
                a.showCloseButton ? (s(), c("button", {
                  key: 0,
                  onClick: o[0] || (o[0] = (A) => r("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  v(T, {
                    name: "x",
                    size: "md"
                  })
                ])) : m("", !0)
              ]),
              n("div", {
                ref_key: "modalBodyRef",
                ref: i,
                class: "modal-body"
              }, [
                y(e.$slots, "default")
              ], 512),
              e.$slots.footer ? (s(), c("div", V, [
                y(e.$slots, "footer")
              ])) : m("", !0)
            ], 2)
          ], 4)) : m("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  J as _
};
