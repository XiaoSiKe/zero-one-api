import { d as u, o as d, a as f, n as l, b as m } from "./cnProviderAdminLeaf-G5nKb4v2.js";
function g(e) {
  var r, a;
  if (!e || typeof e != "object") return;
  const t = e, n = t.reason ?? t.code ?? ((a = (r = t.response) == null ? void 0 : r.data) == null ? void 0 : a.code);
  return n != null ? String(n) : void 0;
}
function k(e, t = "Unknown error", n) {
  var a, s, i, c;
  if (!e) return t;
  if (n) {
    const o = g(e);
    if (o && n[o]) return n[o];
  }
  if (typeof e == "object" && e !== null) {
    const o = e;
    if (o.message) return o.message;
    if (o.error) return o.error;
    if ((s = (a = o.response) == null ? void 0 : a.data) != null && s.detail) return o.response.data.detail;
    if ((c = (i = o.response) == null ? void 0 : i.data) != null && c.message) return o.response.data.message;
  }
  if (e instanceof Error) return e.message;
  const r = String(e);
  return r === "[object Object]" ? t : r;
}
const p = ["aria-checked"], h = /* @__PURE__ */ u({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    function a() {
      r("update:modelValue", !n.modelValue);
    }
    return (s, i) => (d(), f("button", {
      type: "button",
      onClick: a,
      class: l(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800", [e.modelValue ? "bg-primary-600" : "bg-gray-200 dark:bg-dark-600"]]),
      role: "switch",
      "aria-checked": e.modelValue
    }, [
      m("span", {
        class: l(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", [e.modelValue ? "translate-x-5" : "translate-x-0"]])
      }, null, 2)
    ], 10, p));
  }
});
export {
  h as _,
  k as e
};
