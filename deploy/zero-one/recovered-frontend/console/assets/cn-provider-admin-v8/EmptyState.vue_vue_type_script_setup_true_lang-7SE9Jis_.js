import { e as k, u as h, d as v, g as s, h as n, J as r, i, m as c, n as e, A as l, aa as d, v as f, _ as T, l as p } from "./cnProviderAdminLeaf-CHNemIo-.js";
const g = { class: "empty-state" }, x = { class: "mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-dark-800" }, b = {
  key: 1,
  class: "empty-state-icon h-10 w-10",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5"
}, w = { class: "empty-state-title" }, B = { class: "empty-state-description" }, C = {
  key: 0,
  class: "mt-6"
}, D = /* @__PURE__ */ k({
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
    const { t: m } = h(), u = t, y = v(() => u.title || m("common.noData"));
    return (o, a) => (e(), s("div", g, [
      n("div", x, [
        r(o.$slots, "icon", {}, () => [
          t.icon ? (e(), l(d(t.icon), {
            key: 0,
            class: "empty-state-icon h-10 w-10",
            "aria-hidden": "true"
          })) : (e(), s("svg", b, [...a[1] || (a[1] = [
            n("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            }, null, -1)
          ])]))
        ])
      ]),
      n("h3", w, i(y.value), 1),
      n("p", B, i(t.description), 1),
      t.actionText || o.$slots.action ? (e(), s("div", C, [
        r(o.$slots, "action", {}, () => [
          t.actionText ? (e(), l(d(t.actionTo ? "RouterLink" : "button"), {
            key: 0,
            to: t.actionTo,
            onClick: a[0] || (a[0] = ($) => !t.actionTo && o.$emit("action")),
            class: "btn btn-primary"
          }, {
            default: f(() => [
              t.actionIcon ? (e(), l(T, {
                key: 0,
                name: "plus",
                size: "md",
                class: "mr-2"
              })) : c("", !0),
              p(" " + i(t.actionText), 1)
            ]),
            _: 1
          }, 8, ["to"])) : c("", !0)
        ])
      ])) : c("", !0)
    ]));
  }
});
export {
  D as _
};
