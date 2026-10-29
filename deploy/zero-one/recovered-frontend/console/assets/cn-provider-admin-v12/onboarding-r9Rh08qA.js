import { ad as b, ai as d, a as u, a4 as k } from "./cnProviderAdminLeaf-B6vuXkvp.js";
const y = b("onboarding", () => {
  const t = u(null), n = u(null), a = u(null), l = k(null);
  function i(e) {
    t.value = e;
  }
  function o(e) {
    n.value = e.nextStep, a.value = e.isCurrentStep;
  }
  function s() {
    n.value = null, a.value = null;
  }
  function c(e) {
    l.value = e ? d(e) : null;
  }
  function v() {
    return l.value;
  }
  function f() {
    var e, r;
    return ((r = (e = l.value) == null ? void 0 : e.isActive) == null ? void 0 : r.call(e)) ?? !1;
  }
  function p() {
    t.value && t.value();
  }
  async function C(e = 0) {
    n.value && await n.value(e);
  }
  function S(e) {
    return a.value ? a.value(e) : !1;
  }
  return {
    setReplayCallback: i,
    setControlMethods: o,
    clearControlMethods: s,
    setDriverInstance: c,
    getDriverInstance: v,
    isDriverActive: f,
    replay: p,
    nextStep: C,
    isCurrentStep: S
  };
});
export {
  y as u
};
