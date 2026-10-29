import { d as L, b as B, J as M, f as m, N as k, B as T, T as z, m as S, M as $, g as n, x as D, q as N, z as R, n as V, a as h, e as a, l as j, h as P, ae as x, C as q } from "./cnProviderAdminLeaf-C3ObTkBL.js";
const J = /* @__PURE__ */ L({
  __name: "HelpTooltip",
  props: {
    content: {},
    trigger: { default: "hover" },
    widthClass: { default: "w-64" }
  },
  setup(u) {
    const o = u, r = h(!1), c = x("trigger"), y = x("tooltip"), s = h({ top: "0px", left: "0px" });
    function d() {
      r.value = !0, q(p);
    }
    function i() {
      r.value = !1;
    }
    function C() {
      o.trigger === "hover" && d();
    }
    function b() {
      o.trigger === "hover" && i();
    }
    function E(t) {
      if (o.trigger === "click") {
        if (t.stopPropagation(), r.value) {
          i();
          return;
        }
        d();
      }
    }
    function g(t) {
      var v, w;
      if (o.trigger !== "click" || !r.value) return;
      const e = t.target;
      e && ((v = c.value) != null && v.contains(e) || (w = y.value) != null && w.contains(e) || i());
    }
    function f(t) {
      o.trigger === "click" && t.key === "Escape" && i();
    }
    function l() {
      r.value && p();
    }
    function p() {
      const t = c.value;
      if (!t) return;
      const e = t.getBoundingClientRect();
      s.value = {
        top: `${e.top + window.scrollY}px`,
        left: `${e.left + e.width / 2 + window.scrollX}px`
      };
    }
    return B(() => {
      document.addEventListener("click", g, !0), document.addEventListener("keydown", f), window.addEventListener("resize", l), window.addEventListener("scroll", l, !0);
    }), M(() => {
      document.removeEventListener("click", g, !0), document.removeEventListener("keydown", f), window.removeEventListener("resize", l), window.removeEventListener("scroll", l, !0);
    }), (t, e) => (a(), m("div", {
      ref: "trigger",
      class: "group relative ml-1 inline-flex items-center align-middle",
      onMouseenter: C,
      onMouseleave: b,
      onClick: E
    }, [
      k(t.$slots, "trigger", {}, () => [
        e[0] || (e[0] = n("svg", {
          class: "h-4 w-4 cursor-help text-gray-400 transition-colors hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1))
      ]),
      (a(), T(z, { to: "body" }, [
        S(n("div", {
          ref: "tooltip",
          role: "tooltip",
          class: N([
            "fixed z-[99999] -translate-x-1/2 -translate-y-full rounded-lg bg-gray-900 p-3 text-xs leading-relaxed text-white shadow-xl ring-1 ring-white/10 dark:bg-gray-800",
            o.widthClass
          ]),
          style: D({ top: `calc(${s.value.top} - 8px)`, left: s.value.left })
        }, [
          o.trigger === "click" ? (a(), m("button", {
            key: 0,
            type: "button",
            class: "absolute right-1.5 top-1.5 rounded p-1 text-gray-300 transition-colors hover:bg-white/10 hover:text-white",
            "aria-label": "Close",
            onClick: R(i, ["stop"])
          }, [...e[1] || (e[1] = [
            n("svg", {
              class: "h-3.5 w-3.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              n("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])])) : V("", !0),
          k(t.$slots, "default", {}, () => [
            j(P(u.content), 1)
          ]),
          e[2] || (e[2] = n("div", { class: "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-gray-800" }, null, -1))
        ], 6), [
          [$, r.value]
        ])
      ]))
    ], 544));
  }
});
export {
  J as _
};
