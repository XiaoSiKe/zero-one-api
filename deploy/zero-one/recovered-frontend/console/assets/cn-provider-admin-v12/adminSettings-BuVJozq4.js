import { ad as Q, k as $, w as x, a2 as C, a as u } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { b as O } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-d3KA2Dbp.js";
const z = Q("adminSettings", () => {
  const d = $(), h = u(!1), q = u(!1), p = u(!0), _ = u(!0), f = u("auto"), R = u(!1), w = u([]), t = u(null);
  let s = null, l = null, r = null, a = null, S = !1, v = 0, m = 0, c = 0, y = 0;
  function E() {
    y += 1, v += 1, m += 1, c += 1, s = l = null, r = a = null, h.value = q.value = S = !1, t.value = null, w.value = [], p.value = _.value = !0, f.value = "auto", R.value = !1;
  }
  x(
    () => d.token && d.user ? `${d.user.id}:${d.user.role}` : "",
    E,
    { flush: "sync" }
  );
  function P(e = !1) {
    if (r) {
      if (e && !a) {
        c += 1;
        const i = y, o = r.then(() => (a === o && (a = null), i === y ? P(!0) : void 0)).finally(() => {
          a === o && (a = null);
        });
        a = o;
      }
      return e ? a : r;
    }
    if (S && !e) return Promise.resolve();
    const g = ++c, b = O.payment.getConfig().then((i) => {
      var o;
      g === c && (R.value = ((o = i.data) == null ? void 0 : o.enabled) ?? !1, S = !0);
    }).catch((i) => {
      g === c && console.error("[adminSettings] Failed to fetch payment settings:", i);
    }).finally(() => {
      r === b && (r = null);
    });
    return r = b, b;
  }
  function L(e = !1) {
    var o;
    if (!d.token || ((o = d.user) == null ? void 0 : o.role) !== "admin") return Promise.resolve();
    if (s) {
      if (e && !l) {
        v += 1;
        const n = y, M = s.then(() => (l === M && (l = null), n === y ? L(!0) : void 0)).finally(() => {
          l === M && (l = null);
        });
        l = M;
      }
      return e ? l : s;
    }
    if (P(e), h.value && !e) return Promise.resolve();
    e && (v += 1), q.value = !0;
    const g = v, b = m, i = O.settings.getNavigationSettings().then((n) => {
      g === v && (b === m && (p.value = n.ops_monitoring_enabled ?? !0, _.value = n.ops_realtime_monitoring_enabled ?? !0, f.value = n.ops_query_mode_default || "auto"), t.value = {
        ...n,
        ops_monitoring_enabled: p.value,
        ops_realtime_monitoring_enabled: _.value,
        ops_query_mode_default: f.value
      }, w.value = Array.isArray(n.custom_menu_items) ? n.custom_menu_items : [], h.value = !0);
    }).catch((n) => {
      g === v && console.error("[adminSettings] Failed to fetch settings:", n);
    }).finally(() => {
      s === i && (s = null, q.value = !1);
    });
    return s = i, i;
  }
  function A(e) {
    m += 1, p.value = e, t.value && (t.value.ops_monitoring_enabled = e);
  }
  function k(e) {
    m += 1, _.value = e, t.value && (t.value.ops_realtime_monitoring_enabled = e);
  }
  function F(e) {
    c += 1, R.value = e, S = !0;
  }
  function I(e) {
    m += 1, f.value = e || "auto", t.value && (t.value.ops_query_mode_default = f.value);
  }
  const D = () => A(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", D), C(() => {
    E(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", D);
  }), {
    loaded: h,
    loading: q,
    opsMonitoringEnabled: p,
    opsRealtimeMonitoringEnabled: _,
    opsQueryModeDefault: f,
    paymentEnabled: R,
    customMenuItems: w,
    navigationSettings: t,
    fetch: L,
    reset: E,
    setOpsMonitoringEnabledLocal: A,
    setOpsRealtimeMonitoringEnabledLocal: k,
    setPaymentEnabledLocal: F,
    setOpsQueryModeDefaultLocal: I
  };
});
export {
  z as u
};
