import { d as i, u as l, p as o, m as d, f as p, i as r, s as m, g as u, h as _, B as x } from "./cnProviderAdminLeaf-DOTfdkE4.js";
const g = ["aria-label"], h = { class: "sr-only" }, y = /* @__PURE__ */ i({
  __name: "LoadingSpinner",
  props: {
    size: { default: "md" },
    color: { default: "primary" }
  },
  setup(t) {
    const { t: s } = l(), e = t, n = o(() => ({
      sm: "w-4 h-4 border-2",
      md: "w-8 h-8 border-2",
      lg: "w-12 h-12 border-[3px]",
      xl: "w-16 h-16 border-4"
    })[e.size]), c = o(() => ({
      primary: "text-primary-500",
      secondary: "text-gray-500 dark:text-dark-400",
      white: "text-white",
      gray: "text-gray-400 dark:text-dark-500"
    })[e.color]);
    return (a, f) => (d(), p("div", {
      class: m(["spinner", n.value, c.value]),
      role: "status",
      "aria-label": r(s)("common.loading")
    }, [
      u("span", h, _(r(s)("common.loading")), 1)
    ], 10, g));
  }
}), k = /* @__PURE__ */ x(y, [["__scopeId", "data-v-ad54ea09"]]);
export {
  k as L
};
