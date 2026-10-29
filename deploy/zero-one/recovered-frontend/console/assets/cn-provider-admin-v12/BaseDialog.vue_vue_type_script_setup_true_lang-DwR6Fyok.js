import { d as B, w as z, b as E, o as I, B as O, T as S, j as w, E as $, P as L, e as d, f as u, g as i, h as T, _ as N, n as f, N as y, z as v, q as R, x as D, a as g, s as k, C as V } from "./cnProviderAdminLeaf-B6vuXkvp.js";
const q = { class: "modal-header" }, M = {
  key: 0,
  class: "modal-footer"
};
let _ = 0;
const t = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ B({
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
  setup(s, { emit: p }) {
    const a = `modal-title-${++_}`, r = g(null), c = g(null);
    let n = null;
    const l = s, m = p, h = k(() => l.zIndex !== 50 ? { zIndex: l.zIndex } : void 0), b = k(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[l.width]), C = () => {
      l.closeOnClickOutside && m("close");
    }, x = (e) => {
      l.show && l.closeOnEscape && e.key === "Escape" && [...t].pop() === a && m("close");
    };
    return z(
      () => l.show,
      async (e) => {
        if (e) {
          if (t.add(a), n = document.activeElement, document.body.classList.add("modal-open"), await V(), c.value && (c.value.scrollTop = 0), r.value) {
            const o = r.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            o == null || o.focus();
          }
        } else
          t.delete(a), t.size === 0 && document.body.classList.remove("modal-open"), n && typeof n.focus == "function" && n.focus(), n = null;
      },
      { immediate: !0 }
    ), E(() => {
      document.addEventListener("keydown", x);
    }), I(() => {
      document.removeEventListener("keydown", x), t.delete(a), t.size === 0 && document.body.classList.remove("modal-open");
    }), (e, o) => (d(), O(S, { to: "body" }, [
      w(L, { name: "modal" }, {
        default: $(() => [
          s.show ? (d(), u("div", {
            key: 0,
            class: "modal-overlay",
            style: D(h.value),
            "aria-labelledby": a,
            role: "dialog",
            "aria-modal": "true",
            onClick: v(C, ["self"])
          }, [
            i("div", {
              ref_key: "dialogRef",
              ref: r,
              class: R(["modal-content", "base-dialog-surface", "console-skin-dialog", b.value, s.panelClass]),
              onClick: o[1] || (o[1] = v(() => {
              }, ["stop"]))
            }, [
              i("div", q, [
                i("h3", {
                  id: a,
                  class: "modal-title"
                }, T(s.title), 1),
                s.showCloseButton ? (d(), u("button", {
                  key: 0,
                  onClick: o[0] || (o[0] = (j) => m("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  w(N, {
                    name: "x",
                    size: "md"
                  })
                ])) : f("", !0)
              ]),
              i("div", {
                ref_key: "modalBodyRef",
                ref: c,
                class: "modal-body"
              }, [
                y(e.$slots, "default")
              ], 512),
              e.$slots.footer ? (d(), u("div", M, [
                y(e.$slots, "footer")
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  P as _
};
