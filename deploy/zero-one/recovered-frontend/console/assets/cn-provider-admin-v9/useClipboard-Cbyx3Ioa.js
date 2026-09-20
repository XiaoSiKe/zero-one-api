import { r as p, W as x, w as y, c as E, n as L, i as M, V as I, a3 as F, a2 as j, a4 as N, p as W, e as P, a5 as R } from "./cnProviderAdminLeaf-DOTfdkE4.js";
function h(t) {
  return F() ? (j(t), !0) : !1;
}
function m(t) {
  return typeof t == "function" ? t() : M(t);
}
const b = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const z = Object.prototype.toString, V = (t) => z.call(t) === "[object Object]", S = () => {
};
function _(t, e) {
  function o(...n) {
    return new Promise((r, i) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(r).catch(i);
    });
  }
  return o;
}
function D(t, e = {}) {
  let o, n, r = S;
  const i = (a) => {
    clearTimeout(a), r(), r = S;
  };
  return (a) => {
    const l = m(t), u = m(e.maxWait);
    return o && i(o), l <= 0 || u !== void 0 && u <= 0 ? (n && (i(n), n = null), Promise.resolve(a())) : new Promise((c, f) => {
      r = e.rejectOnCancel ? f : c, u && !n && (n = setTimeout(() => {
        o && i(o), n = null, c(a());
      }, u)), o = setTimeout(() => {
        n && i(n), n = null, c(a());
      }, l);
    });
  };
}
function k(t) {
  return I();
}
function q(t, e = 200, o = {}) {
  return _(
    D(e, o),
    t
  );
}
function H(t, e = !0, o) {
  k() ? E(t, o) : e ? t() : L(t);
}
function J(t, e = 1e3, o = {}) {
  const {
    immediate: n = !0,
    immediateCallback: r = !1
  } = o;
  let i = null;
  const s = p(!1);
  function a() {
    i && (clearInterval(i), i = null);
  }
  function l() {
    s.value = !1, a();
  }
  function u() {
    const c = m(e);
    c <= 0 || (s.value = !0, r && t(), a(), i = setInterval(t, c));
  }
  if (n && b && u(), x(e) || typeof e == "function") {
    const c = y(e, () => {
      s.value && b && u();
    });
    h(c);
  }
  return h(l), {
    isActive: s,
    pause: l,
    resume: u
  };
}
function g(t) {
  var e;
  const o = m(t);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
const w = b ? window : void 0;
function G(...t) {
  let e, o, n, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, n, r] = t, e = w) : [e, o, n, r] = t, !e)
    return S;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, a = (c, f, d, v) => (c.addEventListener(f, d, v), () => c.removeEventListener(f, d, v)), l = y(
    () => [g(e), m(r)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const d = V(f) ? { ...f } : f;
      i.push(
        ...o.flatMap((v) => n.map((A) => a(c, v, A, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), s();
  };
  return h(u), u;
}
function Q() {
  const t = p(!1), e = I();
  return e && E(() => {
    t.value = !0;
  }, e), t;
}
function O(t) {
  const e = Q();
  return W(() => (e.value, !!t()));
}
function Y(t, e = {}) {
  const { window: o = w } = e, n = O(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let r;
  const i = p(!1), s = (u) => {
    i.value = u.matches;
  }, a = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", s) : r.removeListener(s));
  }, l = N(() => {
    n.value && (a(), r = o.matchMedia(m(t)), "addEventListener" in r ? r.addEventListener("change", s) : r.addListener(s), i.value = r.matches);
  });
  return h(() => {
    l(), a(), r = void 0;
  }), i;
}
function K(t, e, o = {}) {
  const { window: n = w, ...r } = o;
  let i;
  const s = O(() => n && "ResizeObserver" in n), a = () => {
    i && (i.disconnect(), i = void 0);
  }, l = W(() => Array.isArray(t) ? t.map((f) => g(f)) : [g(t)]), u = y(
    l,
    (f) => {
      if (a(), s.value && n) {
        i = new ResizeObserver(e);
        for (const d of f)
          d && i.observe(d, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), u();
  };
  return h(c), {
    isSupported: s,
    stop: c
  };
}
function U(t = {}) {
  const {
    window: e = w,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: n = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: i = !0
  } = t, s = p(o), a = p(n), l = () => {
    e && (i ? (s.value = e.innerWidth, a.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, a.value = e.document.documentElement.clientHeight));
  };
  if (l(), H(l), G("resize", l, { passive: !0 }), r) {
    const u = Y("(orientation: portrait)");
    y(u, () => l());
  }
  return { width: s, height: a };
}
const { t: T } = R.global;
function B() {
  return !!(navigator.clipboard && window.isSecureContext);
}
function C(t) {
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
function X() {
  const t = P(), e = p(!1);
  return { copied: e, copyToClipboard: async (n, r) => {
    if (!n) return !1;
    let i = !1;
    if (B())
      try {
        await navigator.clipboard.writeText(n), i = !0;
      } catch {
        i = C(n);
      }
    else
      i = C(n);
    return i ? (e.value = !0, t.showSuccess(r || T("common.copiedToClipboard")), setTimeout(() => {
      e.value = !1;
    }, 2e3)) : t.showError(T("common.copyFailed")), i;
  } };
}
export {
  X as a,
  J as b,
  U as c,
  K as d,
  Y as e,
  q as u
};
