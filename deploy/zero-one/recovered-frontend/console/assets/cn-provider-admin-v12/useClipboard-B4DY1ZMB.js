import { u as i, a as s, a8 as l } from "./cnProviderAdminLeaf-B6vuXkvp.js";
const { t: a } = l.global;
function u() {
  return !!(navigator.clipboard && window.isSecureContext);
}
function n(t) {
  const e = document.createElement("textarea");
  e.value = t, e.setAttribute("readonly", "true"), e.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", document.body.appendChild(e), e.focus({ preventScroll: !0 }), e.select(), e.setSelectionRange(0, e.value.length);
  try {
    return document.execCommand("copy");
  } catch {
    return !1;
  } finally {
    document.body.removeChild(e);
  }
}
function f() {
  const t = i(), e = s(!1);
  return { copied: e, copyToClipboard: async (r, c) => {
    if (!r) return !1;
    let o = !1;
    if (u())
      try {
        await navigator.clipboard.writeText(r), o = !0;
      } catch {
        o = n(r);
      }
    else
      o = n(r);
    return o ? (e.value = !0, t.showSuccess(c || a("common.copiedToClipboard")), setTimeout(() => {
      e.value = !1;
    }, 2e3)) : t.showError(a("common.copyFailed")), o;
  } };
}
export {
  f as u
};
