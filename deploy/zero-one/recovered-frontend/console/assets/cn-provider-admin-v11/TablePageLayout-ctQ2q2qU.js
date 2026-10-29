import { d, b as r, o as c, f as s, q as u, N as o, n, g as l, a as v, e as t, y as _ } from "./cnProviderAdminLeaf-C3ObTkBL.js";
const f = {
  key: 0,
  class: "layout-section-fixed"
}, m = {
  key: 1,
  class: "layout-section-fixed"
}, b = { class: "layout-section-scrollable" }, p = { class: "card table-scroll-container frosted-table-shell console-skin-table" }, y = {
  key: 2,
  class: "layout-section-fixed"
}, h = /* @__PURE__ */ d({
  __name: "TablePageLayout",
  setup(k) {
    const i = v(!1), a = () => {
      i.value = window.innerWidth <= 1024;
    };
    return r(() => {
      a(), window.addEventListener("resize", a);
    }), c(() => {
      window.removeEventListener("resize", a);
    }), (e, $) => (t(), s("div", {
      class: u(["table-page-layout", { "mobile-mode": i.value }])
    }, [
      e.$slots.actions ? (t(), s("div", f, [
        o(e.$slots, "actions", {}, void 0, !0)
      ])) : n("", !0),
      e.$slots.filters ? (t(), s("div", m, [
        o(e.$slots, "filters", {}, void 0, !0)
      ])) : n("", !0),
      l("div", b, [
        l("div", p, [
          o(e.$slots, "table", {}, void 0, !0)
        ])
      ]),
      e.$slots.pagination ? (t(), s("div", y, [
        o(e.$slots, "pagination", {}, void 0, !0)
      ])) : n("", !0)
    ], 2));
  }
}), w = /* @__PURE__ */ _(h, [["__scopeId", "data-v-75cc8a42"]]);
export {
  w as T
};
