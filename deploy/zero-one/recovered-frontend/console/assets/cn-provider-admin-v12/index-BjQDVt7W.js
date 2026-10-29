import { W as c, ad as P, a as i, s as w, a7 as S } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { u as X, k as Y } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { u as ne } from "./adminSettings-BuVJozq4.js";
import { u as re } from "./onboarding-r9Rh08qA.js";
import { D as F } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-d3KA2Dbp.js";
const b = {
  /** Get payment configuration (enabled types, limits, etc.) */
  getConfig() {
    return c.get("/payment/config");
  },
  /** Get available subscription plans */
  getPlans() {
    return c.get("/payment/plans");
  },
  /** Get all checkout page data in a single call */
  getCheckoutInfo() {
    return c.get("/payment/checkout-info");
  },
  /** Get payment method limits and fee rates */
  getLimits() {
    return c.get("/payment/limits");
  },
  /** Create a new payment order */
  createOrder(e) {
    return c.post("/payment/orders", e);
  },
  /** Get current user's orders */
  getMyOrders(e) {
    return c.get("/payment/orders/my", { params: e });
  },
  /** Get a specific order by ID */
  getOrder(e) {
    return c.get(`/payment/orders/${e}`);
  },
  /** Cancel a pending order */
  cancelOrder(e) {
    return c.post(`/payment/orders/${e}/cancel`);
  },
  /** Verify order payment status with upstream provider */
  verifyOrder(e) {
    return c.post("/payment/orders/verify", { out_trade_no: e });
  },
  /** Legacy-compatible public order lookup by out_trade_no */
  verifyOrderPublic(e) {
    return c.post("/payment/public/orders/verify", { out_trade_no: e });
  },
  /** Resolve an order from a signed resume token without auth */
  resolveOrderPublicByResumeToken(e) {
    return c.post("/payment/public/orders/resolve", { resume_token: e });
  },
  /** Request a refund for a completed order */
  requestRefund(e, r) {
    return c.post(`/payment/orders/${e}/refund-request`, r);
  },
  /** Get provider instance IDs that allow user refund */
  getRefundEligibleProviders() {
    return c.get("/payment/orders/refund-eligible-providers");
  }
};
async function x(e = !1) {
  const { data: r } = await c.get("/announcements", {
    params: e ? { unread_only: 1 } : {}
  });
  return r;
}
async function T(e) {
  const { data: r } = await c.post(`/announcements/${e}/read`);
  return r;
}
const A = {
  list: x,
  markRead: T
};
async function D() {
  return (await c.get("/subscriptions")).data;
}
async function E() {
  return (await c.get("/subscriptions/active")).data;
}
async function H() {
  return (await c.get("/subscriptions/progress")).data;
}
async function $() {
  return (await c.get("/subscriptions/summary")).data;
}
async function B(e) {
  return (await c.get(
    `/subscriptions/${e}/progress`
  )).data;
}
const M = {
  getMySubscriptions: D,
  getActiveSubscriptions: E,
  getSubscriptionsProgress: H,
  getSubscriptionSummary: $,
  getSubscriptionProgress: B
}, N = 6e4;
let k = 0;
const V = P("subscriptions", () => {
  const e = i([]), r = i(!1), d = i(!1), l = i(null);
  let o = null, s = null;
  const m = w(() => e.value.length > 0);
  async function p(u = !1) {
    const f = Date.now();
    if (!u && d.value && l.value && f - l.value < N)
      return e.value;
    if (o && !u)
      return o;
    const n = ++k;
    r.value = !0;
    const t = M.getActiveSubscriptions().then((a) => (n === k && (e.value = a, d.value = !0, l.value = Date.now()), a)).catch((a) => {
      throw console.error("Failed to fetch active subscriptions:", a), a;
    }).finally(() => {
      o === t && (r.value = !1, o = null);
    });
    return o = t, o;
  }
  function g() {
    s || (s = setInterval(() => {
      p(!0).catch((u) => {
        console.error("Subscription polling failed:", u);
      });
    }, 300 * 1e3));
  }
  function v() {
    s && (clearInterval(s), s = null);
  }
  function y() {
    k++, o = null, r.value = !1, e.value = [], d.value = !1, l.value = null, v();
  }
  function h() {
    l.value = null;
  }
  return {
    // State
    activeSubscriptions: e,
    loading: r,
    hasActiveSubscriptions: m,
    // Actions
    fetchActiveSubscriptions: p,
    startPolling: g,
    stopPolling: v,
    clear: y,
    invalidateCache: h
  };
}), W = 1200 * 1e3, j = P("announcements", () => {
  const e = i([]), r = i(!1), d = i(0), l = i([]), o = i(null);
  let s = /* @__PURE__ */ new Set();
  const m = w(
    () => e.value.filter((n) => !n.read_at).length
  );
  async function p(n = !1) {
    const t = Date.now();
    if (!(!n && d.value > 0 && t - d.value < W)) {
      d.value = t;
      try {
        r.value = !0;
        const a = await A.list(!1);
        e.value = a.slice(0, 20), g();
      } catch (a) {
        d.value = 0, console.error("Failed to fetch announcements:", a);
      } finally {
        r.value = !1;
      }
    }
  }
  function g() {
    const n = e.value.filter(
      (t) => t.notify_mode === "popup" && !t.read_at && !s.has(t.id)
    );
    if (n.length !== 0) {
      for (const t of n)
        l.value.some((a) => a.id === t.id) || l.value.push(t);
      o.value || v();
    }
  }
  function v() {
    if (l.value.length === 0) {
      o.value = null;
      return;
    }
    o.value = l.value.shift(), s.add(o.value.id);
  }
  async function y() {
    if (!o.value) return;
    const n = o.value.id;
    o.value = null, h(n), l.value.length > 0 && setTimeout(() => v(), 300);
  }
  async function h(n) {
    try {
      await A.markRead(n);
      const t = e.value.find((a) => a.id === n);
      return t && (t.read_at = (/* @__PURE__ */ new Date()).toISOString()), !0;
    } catch (t) {
      return console.error("Failed to mark announcement as read:", t), !1;
    }
  }
  async function u() {
    const n = e.value.filter((t) => !t.read_at);
    if (n.length !== 0)
      try {
        r.value = !0;
        const a = (await Promise.allSettled(n.map(async (_) => {
          await A.markRead(_.id), _.read_at = (/* @__PURE__ */ new Date()).toISOString();
        }))).find((_) => _.status === "rejected");
        if (a) throw a.reason;
      } catch (t) {
        throw console.error("Failed to mark all as read:", t), t;
      } finally {
        r.value = !1;
      }
  }
  function f() {
    e.value = [], d.value = 0, s = /* @__PURE__ */ new Set(), l.value = [], o.value = null, r.value = !1;
  }
  return {
    // State
    announcements: e,
    loading: r,
    currentPopup: o,
    // Getters
    unreadCount: m,
    // Actions
    fetchAnnouncements: p,
    dismissPopup: y,
    markAsRead: h,
    markAllAsRead: u,
    reset: f
  };
}), Q = P("payment", () => {
  const e = i(null), r = i(null), d = i([]), l = i(!1), o = i(!1);
  let s = null;
  async function m(u = !1) {
    return o.value && !u ? e.value : s || (s = p(), s);
  }
  async function p() {
    l.value = !0;
    try {
      const u = await b.getConfig();
      return e.value = u.data, o.value = !0, e.value;
    } catch (u) {
      return console.error("[payment] Failed to fetch config:", u), null;
    } finally {
      l.value = !1, s = null;
    }
  }
  async function g() {
    try {
      const u = await b.getPlans();
      return d.value = (u.data || []).map((f) => ({
        ...f,
        features: typeof f.features == "string" ? f.features.split(`
`).map((n) => n.trim()).filter(Boolean) : f.features || []
      })), d.value;
    } catch (u) {
      return console.error("[payment] Failed to fetch plans:", u), [];
    }
  }
  async function v(u) {
    return (await b.createOrder(u)).data;
  }
  async function y(u) {
    var f;
    try {
      const t = (await b.getOrder(u)).data;
      return ((f = r.value) == null ? void 0 : f.id) === u && (r.value = t), t;
    } catch (n) {
      return console.error("[payment] Failed to poll order status:", n), null;
    }
  }
  function h() {
    r.value = null;
  }
  return {
    config: e,
    currentOrder: r,
    plans: d,
    configLoading: l,
    configLoaded: o,
    fetchConfig: m,
    fetchPlans: g,
    createOrder: v,
    pollOrderStatus: y,
    clearCurrentOrder: h
  };
}), L = "我已阅读、理解并同意 Sub2API 部署与运营合规承诺", R = "I have read, understood, and agree to the Sub2API Deployment and Operation Compliance Commitment", Z = P("adminCompliance", () => {
  const e = i(null), r = i(!1), d = i(!1), l = i(!1), o = i(!1);
  let s = 0;
  const m = w(() => {
    var n;
    return ((n = e.value) == null ? void 0 : n.required) === !0;
  }), p = w(() => m.value || o.value), g = w(() => S()), v = w(() => {
    var n, t;
    return g.value === "zh" ? ((n = e.value) == null ? void 0 : n.ack_phrase_zh) || L : ((t = e.value) == null ? void 0 : t.ack_phrase_en) || R;
  });
  async function y() {
    const n = s;
    r.value = !0;
    try {
      const t = await F.getStatus();
      return n !== s || (e.value = t, l.value = !0, o.value = t.required), t;
    } finally {
      n === s && (r.value = !1);
    }
  }
  async function h(n) {
    const t = s;
    d.value = !0;
    try {
      const a = await F.accept({
        phrase: n,
        language: g.value
      });
      return t !== s || (e.value = a, o.value = a.required), a;
    } finally {
      t === s && (d.value = !1);
    }
  }
  function u(n) {
    var t, a, _, C, O, z, I, q;
    e.value = {
      required: !0,
      version: (n == null ? void 0 : n.version) || ((t = e.value) == null ? void 0 : t.version) || "v2026.06.10",
      document_path_zh: (n == null ? void 0 : n.document_path_zh) || ((a = e.value) == null ? void 0 : a.document_path_zh) || "docs/legal/admin-compliance.zh.md",
      document_path_en: (n == null ? void 0 : n.document_path_en) || ((_ = e.value) == null ? void 0 : _.document_path_en) || "docs/legal/admin-compliance.en.md",
      document_url_zh: (n == null ? void 0 : n.document_url_zh) || ((C = e.value) == null ? void 0 : C.document_url_zh) || "https://github.com/Wei-Shaw/sub2api/blob/main/docs/legal/admin-compliance.zh.md",
      document_url_en: (n == null ? void 0 : n.document_url_en) || ((O = e.value) == null ? void 0 : O.document_url_en) || "https://github.com/Wei-Shaw/sub2api/blob/main/docs/legal/admin-compliance.en.md",
      ack_phrase_zh: (n == null ? void 0 : n.ack_phrase_zh) || ((z = e.value) == null ? void 0 : z.ack_phrase_zh) || L,
      ack_phrase_en: (n == null ? void 0 : n.ack_phrase_en) || ((I = e.value) == null ? void 0 : I.ack_phrase_en) || R,
      acknowledgement: (q = e.value) == null ? void 0 : q.acknowledgement
    }, l.value = !0, o.value = !0;
  }
  function f() {
    s++, e.value = null, r.value = !1, d.value = !1, l.value = !1, o.value = !1;
  }
  return {
    status: e,
    loading: r,
    submitting: d,
    initialized: l,
    required: m,
    shouldShow: p,
    expectedPhrase: v,
    fetchStatus: y,
    accept: h,
    requireAcknowledgement: u,
    reset: f
  };
});
export {
  Z as useAdminComplianceStore,
  ne as useAdminSettingsStore,
  j as useAnnouncementStore,
  X as useAppStore,
  Y as useAuthStore,
  re as useOnboardingStore,
  Q as usePaymentStore,
  V as useSubscriptionStore
};
