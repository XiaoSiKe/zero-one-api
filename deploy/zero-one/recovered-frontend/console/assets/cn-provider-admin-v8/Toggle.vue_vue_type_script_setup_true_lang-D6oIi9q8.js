import { e as s, n as l, g as i, s as o, h as u } from "./cnProviderAdminLeaf-CHNemIo-.js";
const c = ["aria-checked"], g = /* @__PURE__ */ s({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    function r() {
      t("update:modelValue", !a.modelValue);
    }
    return (d, m) => (l(), i("button", {
      type: "button",
      onClick: r,
      class: o(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800", [e.modelValue ? "bg-primary-600" : "bg-gray-200 dark:bg-dark-600"]]),
      role: "switch",
      "aria-checked": e.modelValue
    }, [
      u("span", {
        class: o(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", [e.modelValue ? "translate-x-5" : "translate-x-0"]])
      }, null, 2)
    ], 10, c));
  }
});
export {
  g as _
};
