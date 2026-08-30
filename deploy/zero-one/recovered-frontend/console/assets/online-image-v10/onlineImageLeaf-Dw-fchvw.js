import { k as Jf } from "./onlineImage-CVdGRNSC.js";
/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function da(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Me = {}, Gn = [], Ht = () => {
}, Ql = () => !1, Vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ma = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ha = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Qf = Object.prototype.hasOwnProperty, Ie = (e, t) => Qf.call(e, t), he = Array.isArray, qn = (e) => js(e) === "[object Map]", Zl = (e) => js(e) === "[object Set]", ve = (e) => typeof e == "function", qe = (e) => typeof e == "string", tn = (e) => typeof e == "symbol", Ue = (e) => e !== null && typeof e == "object", ec = (e) => (Ue(e) || ve(e)) && ve(e.then) && ve(e.catch), tc = Object.prototype.toString, js = (e) => tc.call(e), Zf = (e) => js(e).slice(8, -1), nc = (e) => js(e) === "[object Object]", Bs = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Er = /* @__PURE__ */ da(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ws = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ed = /-\w/g, gn = Ws(
  (e) => e.replace(ed, (t) => t.slice(1).toUpperCase())
), td = /\B([A-Z])/g, yn = Ws(
  (e) => e.replace(td, "-$1").toLowerCase()
), rc = Ws((e) => e.charAt(0).toUpperCase() + e.slice(1)), ho = Ws(
  (e) => e ? `on${rc(e)}` : ""
), hn = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, sc = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, pa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, nd = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ri;
const Ks = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ir(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = qe(r) ? ad(r) : ir(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (qe(e) || Ue(e))
    return e;
}
const rd = /;(?![^(]*\))/g, sd = /:([^]+)/, od = /\/\*[^]*?\*\//g;
function ad(e) {
  const t = {};
  return e.replace(od, "").split(rd).forEach((n) => {
    if (n) {
      const r = n.split(sd);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ge(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ge(e[n]);
      r && (t += r + " ");
    }
  else if (Ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const id = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ld = /* @__PURE__ */ da(id);
function oc(e) {
  return !!e || e === "";
}
const ac = (e) => !!(e && e.__v_isRef === !0), ue = (e) => qe(e) ? e : e == null ? "" : he(e) || Ue(e) && (e.toString === tc || !ve(e.toString)) ? ac(e) ? ue(e.value) : JSON.stringify(e, ic, 2) : String(e), ic = (e, t) => ac(t) ? ic(e, t.value) : qn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[po(r, s) + " =>"] = o, n),
    {}
  )
} : Zl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => po(n))
} : tn(t) ? po(t) : Ue(t) && !he(t) && !nc(t) ? String(t) : t, po = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ct;
class lc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ct, !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ct;
      try {
        return ct = this, t();
      } finally {
        ct = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ct, ct = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ct = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ga(e) {
  return new lc(e);
}
function cc() {
  return ct;
}
function uc(e, t = !1) {
  ct && ct.cleanups.push(e);
}
let De;
const go = /* @__PURE__ */ new WeakSet();
class fc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ct && ct.active && ct.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, go.has(this) && (go.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, si(this), hc(this);
    const t = De, n = It;
    De = this, It = !0;
    try {
      return this.fn();
    } finally {
      pc(this), De = t, It = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ya(t);
      this.deps = this.depsTail = void 0, si(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? go.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Do(this) && this.run();
  }
  get dirty() {
    return Do(this);
  }
}
let dc = 0, wr, Sr;
function mc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Sr, Sr = e;
    return;
  }
  e.next = wr, wr = e;
}
function _a() {
  dc++;
}
function ba() {
  if (--dc > 0)
    return;
  if (Sr) {
    let t = Sr;
    for (Sr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; wr; ) {
    let t = wr;
    for (wr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function pc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ya(r), cd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Do(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (gc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function gc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xr) || (e.globalVersion = xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Do(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = De, r = It;
  De = e, It = !0;
  try {
    hc(e);
    const o = e.fn(e._value);
    (t.version === 0 || hn(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    De = n, It = r, pc(e), e.flags &= -3;
  }
}
function ya(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ya(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let It = !0;
const _c = [];
function Jt() {
  _c.push(It), It = !1;
}
function Qt() {
  const e = _c.pop();
  It = e === void 0 ? !0 : e;
}
function si(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = De;
    De = void 0;
    try {
      t();
    } finally {
      De = n;
    }
  }
}
let xr = 0;
class ud {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class va {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!De || !It || De === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== De)
      n = this.activeLink = new ud(De, this), De.deps ? (n.prevDep = De.depsTail, De.depsTail.nextDep = n, De.depsTail = n) : De.deps = De.depsTail = n, bc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = De.depsTail, n.nextDep = void 0, De.depsTail.nextDep = n, De.depsTail = n, De.deps === n && (De.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, xr++, this.notify(t);
  }
  notify(t) {
    _a();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ba();
    }
  }
}
function bc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        bc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const As = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ Symbol(
  ""
), Fo = /* @__PURE__ */ Symbol(
  ""
), Pr = /* @__PURE__ */ Symbol(
  ""
);
function ut(e, t, n) {
  if (It && De) {
    let r = As.get(e);
    r || As.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new va()), o.map = r, o.key = n), o.track();
  }
}
function Gt(e, t, n, r, o, s) {
  const a = As.get(e);
  if (!a) {
    xr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (_a(), t === "clear")
    a.forEach(i);
  else {
    const l = he(e), u = l && Bs(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Pr || !tn(h) && h >= c) && i(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), u && i(a.get(Pr)), t) {
        case "add":
          l ? u && i(a.get("length")) : (i(a.get(Pn)), qn(e) && i(a.get(Fo)));
          break;
        case "delete":
          l || (i(a.get(Pn)), qn(e) && i(a.get(Fo)));
          break;
        case "set":
          qn(e) && i(a.get(Pn));
          break;
      }
  }
  ba();
}
function fd(e, t) {
  const n = As.get(e);
  return n && n.get(t);
}
function $n(e) {
  const t = Ce(e);
  return t === e ? t : (ut(t, "iterate", Pr), At(e) ? t : t.map(kt));
}
function zs(e) {
  return ut(e = Ce(e), "iterate", Pr), e;
}
function cn(e, t) {
  return Zt(e) ? Xt(e) ? er(kt(t)) : er(t) : kt(t);
}
const dd = {
  __proto__: null,
  [Symbol.iterator]() {
    return _o(this, Symbol.iterator, (e) => cn(this, e));
  },
  concat(...e) {
    return $n(this).concat(
      ...e.map((t) => he(t) ? $n(t) : t)
    );
  },
  entries() {
    return _o(this, "entries", (e) => (e[1] = cn(this, e[1]), e));
  },
  every(e, t) {
    return jt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return jt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => cn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return jt(
      this,
      "find",
      e,
      t,
      (n) => cn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return jt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jt(
      this,
      "findLast",
      e,
      t,
      (n) => cn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return jt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return jt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bo(this, "includes", e);
  },
  indexOf(...e) {
    return bo(this, "indexOf", e);
  },
  join(e) {
    return $n(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return jt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return pr(this, "pop");
  },
  push(...e) {
    return pr(this, "push", e);
  },
  reduce(e, ...t) {
    return oi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return oi(this, "reduceRight", e, t);
  },
  shift() {
    return pr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return jt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return pr(this, "splice", e);
  },
  toReversed() {
    return $n(this).toReversed();
  },
  toSorted(e) {
    return $n(this).toSorted(e);
  },
  toSpliced(...e) {
    return $n(this).toSpliced(...e);
  },
  unshift(...e) {
    return pr(this, "unshift", e);
  },
  values() {
    return _o(this, "values", (e) => cn(this, e));
  }
};
function _o(e, t, n) {
  const r = zs(e), o = r[t]();
  return r !== e && !At(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const md = Array.prototype;
function jt(e, t, n, r, o, s) {
  const a = zs(e), i = a !== e && !At(e), l = a[t];
  if (l !== md[t]) {
    const f = l.apply(e, s);
    return i ? kt(f) : f;
  }
  let u = n;
  a !== e && (i ? u = function(f, h) {
    return n.call(this, cn(e, f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const c = l.call(a, u, r);
  return i && o ? o(c) : c;
}
function oi(e, t, n, r) {
  const o = zs(e);
  let s = n;
  return o !== e && (At(e) ? n.length > 3 && (s = function(a, i, l) {
    return n.call(this, a, i, l, e);
  }) : s = function(a, i, l) {
    return n.call(this, a, cn(e, i), l, e);
  }), o[t](s, ...r);
}
function bo(e, t, n) {
  const r = Ce(e);
  ut(r, "iterate", Pr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && qs(n[0]) ? (n[0] = Ce(n[0]), r[t](...n)) : o;
}
function pr(e, t, n = []) {
  Jt(), _a();
  const r = Ce(e)[t].apply(e, n);
  return ba(), Qt(), r;
}
const hd = /* @__PURE__ */ da("__proto__,__v_isRef,__isVue"), yc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tn)
);
function pd(e) {
  tn(e) || (e = String(e));
  const t = Ce(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class vc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? Td : Ac : s ? Sc : wc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = he(t);
    if (!o) {
      let l;
      if (a && (l = dd[n]))
        return l;
      if (n === "hasOwnProperty")
        return pd;
    }
    const i = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      je(t) ? t : r
    );
    if ((tn(n) ? yc.has(n) : hd(n)) || (o || ut(t, "get", n), s))
      return i;
    if (je(i)) {
      const l = a && Bs(n) ? i : i.value;
      return o && Ue(l) ? Nr(l) : l;
    }
    return Ue(i) ? o ? Nr(i) : Gs(i) : i;
  }
}
class Ec extends vc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const a = he(t) && Bs(n);
    if (!this._isShallow) {
      const u = Zt(s);
      if (!At(r) && !Zt(r) && (s = Ce(s), r = Ce(r)), !a && je(s) && !je(r))
        return u || (s.value = r), !0;
    }
    const i = a ? Number(n) < t.length : Ie(t, n), l = Reflect.set(
      t,
      n,
      r,
      je(t) ? t : o
    );
    return t === Ce(o) && (i ? hn(r, s) && Gt(t, "set", n, r) : Gt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = Ie(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Gt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!tn(n) || !yc.has(n)) && ut(t, "has", n), r;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      he(t) ? "length" : Pn
    ), Reflect.ownKeys(t);
  }
}
class gd extends vc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const _d = /* @__PURE__ */ new Ec(), bd = /* @__PURE__ */ new gd(), yd = /* @__PURE__ */ new Ec(!0);
const Uo = (e) => e, ns = (e) => Reflect.getPrototypeOf(e);
function vd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Ce(o), a = qn(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? Uo : t ? er : kt;
    return !t && ut(
      s,
      "iterate",
      l ? Fo : Pn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = u.next();
        return h ? { value: f, done: h } : {
          value: i ? [c(f[0]), c(f[1])] : c(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function rs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ed(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, a = Ce(s), i = Ce(o);
      e || (hn(o, i) && ut(a, "get", o), ut(a, "get", i));
      const { has: l } = ns(a), u = t ? Uo : e ? er : kt;
      if (l.call(a, o))
        return u(s.get(o));
      if (l.call(a, i))
        return u(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Ce(o), "iterate", Pn), o.size;
    },
    has(o) {
      const s = this.__v_raw, a = Ce(s), i = Ce(o);
      return e || (hn(o, i) && ut(a, "has", o), ut(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = Ce(i), u = t ? Uo : e ? er : kt;
      return !e && ut(l, "iterate", Pn), i.forEach((c, f) => o.call(s, u(c), u(f), a));
    }
  };
  return tt(
    n,
    e ? {
      add: rs("add"),
      set: rs("set"),
      delete: rs("delete"),
      clear: rs("clear")
    } : {
      add(o) {
        !t && !At(o) && !Zt(o) && (o = Ce(o));
        const s = Ce(this);
        return ns(s).has.call(s, o) || (s.add(o), Gt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !At(s) && !Zt(s) && (s = Ce(s));
        const a = Ce(this), { has: i, get: l } = ns(a);
        let u = i.call(a, o);
        u || (o = Ce(o), u = i.call(a, o));
        const c = l.call(a, o);
        return a.set(o, s), u ? hn(s, c) && Gt(a, "set", o, s) : Gt(a, "add", o, s), this;
      },
      delete(o) {
        const s = Ce(this), { has: a, get: i } = ns(s);
        let l = a.call(s, o);
        l || (o = Ce(o), l = a.call(s, o)), i && i.call(s, o);
        const u = s.delete(o);
        return l && Gt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = Ce(this), s = o.size !== 0, a = o.clear();
        return s && Gt(
          o,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = vd(o, e, t);
  }), n;
}
function Ea(e, t) {
  const n = Ed(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    Ie(n, o) && o in r ? n : r,
    o,
    s
  );
}
const wd = {
  get: /* @__PURE__ */ Ea(!1, !1)
}, Sd = {
  get: /* @__PURE__ */ Ea(!1, !0)
}, Ad = {
  get: /* @__PURE__ */ Ea(!0, !1)
};
const wc = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), Td = /* @__PURE__ */ new WeakMap();
function Od(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Cd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Od(Zf(e));
}
function Gs(e) {
  return Zt(e) ? e : wa(
    e,
    !1,
    _d,
    wd,
    wc
  );
}
function Rd(e) {
  return wa(
    e,
    !1,
    yd,
    Sd,
    Sc
  );
}
function Nr(e) {
  return wa(
    e,
    !0,
    bd,
    Ad,
    Ac
  );
}
function wa(e, t, n, r, o) {
  if (!Ue(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Cd(e);
  if (s === 0)
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const i = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, i), i;
}
function Xt(e) {
  return Zt(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zt(e) {
  return !!(e && e.__v_isReadonly);
}
function At(e) {
  return !!(e && e.__v_isShallow);
}
function qs(e) {
  return e ? !!e.__v_raw : !1;
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
function Sa(e) {
  return !Ie(e, "__v_skip") && Object.isExtensible(e) && sc(e, "__v_skip", !0), e;
}
const kt = (e) => Ue(e) ? Gs(e) : e, er = (e) => Ue(e) ? Nr(e) : e;
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Q(e) {
  return Oc(e, !1);
}
function Tc(e) {
  return Oc(e, !0);
}
function Oc(e, t) {
  return je(e) ? e : new Ld(e, t);
}
class Ld {
  constructor(t, n) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Ce(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || At(t) || Zt(t);
    t = r ? t : Ce(t), hn(t, n) && (this._rawValue = t, this._value = r ? t : kt(t), this.dep.trigger());
  }
}
function le(e) {
  return je(e) ? e.value : e;
}
const Id = {
  get: (e, t, n) => t === "__v_raw" ? e : le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return je(o) && !je(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Cc(e) {
  return Xt(e) ? e : new Proxy(e, Id);
}
function kd(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Pd(e, n);
  return t;
}
class xd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Ce(t);
    let o = !0, s = t;
    if (!he(t) || !Bs(String(n)))
      do
        o = !qs(s) || At(s);
      while (o && (s = s.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = le(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && je(this._raw[this._key])) {
      const n = this._object[this._key];
      if (je(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return fd(this._raw, this._key);
  }
}
function Pd(e, t, n) {
  return new xd(e, t, n);
}
class Nd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    De !== this)
      return mc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return gc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Md(e, t, n = !1) {
  let r, o;
  return ve(e) ? r = e : (r = e.get, o = e.set), new Nd(r, o, n);
}
const ss = {}, Ts = /* @__PURE__ */ new WeakMap();
let Ln;
function Dd(e, t = !1, n = Ln) {
  if (n) {
    let r = Ts.get(n);
    r || Ts.set(n, r = []), r.push(e);
  }
}
function Fd(e, t, n = Me) {
  const { immediate: r, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = n, u = (E) => o ? E : At(E) || o === !1 || o === 0 ? qt(E, 1) : qt(E);
  let c, f, h, p, S = !1, w = !1;
  if (je(e) ? (f = () => e.value, S = At(e)) : Xt(e) ? (f = () => u(e), S = !0) : he(e) ? (w = !0, S = e.some((E) => Xt(E) || At(E)), f = () => e.map((E) => {
    if (je(E))
      return E.value;
    if (Xt(E))
      return u(E);
    if (ve(E))
      return l ? l(E, 2) : E();
  })) : ve(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Jt();
      try {
        h();
      } finally {
        Qt();
      }
    }
    const E = Ln;
    Ln = c;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Ln = E;
    }
  } : f = Ht, t && o) {
    const E = f, k = o === !0 ? 1 / 0 : o;
    f = () => qt(E(), k);
  }
  const T = cc(), v = () => {
    c.stop(), T && T.active && ha(T.effects, c);
  };
  if (s && t) {
    const E = t;
    t = (...k) => {
      E(...k), v();
    };
  }
  let x = w ? new Array(e.length).fill(ss) : ss;
  const y = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const k = c.run();
        if (o || S || (w ? k.some((O, D) => hn(O, x[D])) : hn(k, x))) {
          h && h();
          const O = Ln;
          Ln = c;
          try {
            const D = [
              k,
              // pass undefined as the old value when it's changed for the first time
              x === ss ? void 0 : w && x[0] === ss ? [] : x,
              p
            ];
            x = k, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Ln = O;
          }
        }
      } else
        c.run();
  };
  return i && i(y), c = new fc(f), c.scheduler = a ? () => a(y, !1) : y, p = (E) => Dd(E, !1, c), h = c.onStop = () => {
    const E = Ts.get(c);
    if (E) {
      if (l)
        l(E, 4);
      else
        for (const k of E) k();
      Ts.delete(c);
    }
  }, t ? r ? y(!0) : x = c.run() : a ? a(y.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function qt(e, t = 1 / 0, n) {
  if (t <= 0 || !Ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, je(e))
    qt(e.value, t, n);
  else if (he(e))
    for (let r = 0; r < e.length; r++)
      qt(e[r], t, n);
  else if (Zl(e) || qn(e))
    e.forEach((r) => {
      qt(r, t, n);
    });
  else if (nc(e)) {
    for (const r in e)
      qt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && qt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Ys(o, t, n);
  }
}
function xt(e, t, n, r) {
  if (ve(e)) {
    const o = zr(e, t, n, r);
    return o && ec(o) && o.catch((s) => {
      Ys(s, t, n);
    }), o;
  }
  if (he(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(xt(e[s], t, n, r));
    return o;
  }
}
function Ys(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Me;
  if (t) {
    let i = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, u) === !1)
            return;
      }
      i = i.parent;
    }
    if (s) {
      Jt(), zr(s, null, 10, [
        e,
        l,
        u
      ]), Qt();
      return;
    }
  }
  Ud(e, n, o, r, a);
}
function Ud(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const _t = [];
let Ft = -1;
const Yn = [];
let un = null, Bn = 0;
const Rc = /* @__PURE__ */ Promise.resolve();
let Os = null;
function Xn(e) {
  const t = Os || Rc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $d(e) {
  let t = Ft + 1, n = _t.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = _t[r], s = Mr(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Aa(e) {
  if (!(e.flags & 1)) {
    const t = Mr(e), n = _t[_t.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Mr(n) ? _t.push(e) : _t.splice($d(t), 0, e), e.flags |= 1, Lc();
  }
}
function Lc() {
  Os || (Os = Rc.then(kc));
}
function Hd(e) {
  he(e) ? Yn.push(...e) : un && e.id === -1 ? un.splice(Bn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), Lc();
}
function ai(e, t, n = Ft + 1) {
  for (; n < _t.length; n++) {
    const r = _t[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      _t.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ic(e) {
  if (Yn.length) {
    const t = [...new Set(Yn)].sort(
      (n, r) => Mr(n) - Mr(r)
    );
    if (Yn.length = 0, un) {
      un.push(...t);
      return;
    }
    for (un = t, Bn = 0; Bn < un.length; Bn++) {
      const n = un[Bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    un = null, Bn = 0;
  }
}
const Mr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kc(e) {
  try {
    for (Ft = 0; Ft < _t.length; Ft++) {
      const t = _t[Ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), zr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ft < _t.length; Ft++) {
      const t = _t[Ft];
      t && (t.flags &= -2);
    }
    Ft = -1, _t.length = 0, Ic(), Os = null, (_t.length || Yn.length) && kc();
  }
}
let dt = null, xc = null;
function Cs(e) {
  const t = dt;
  return dt = e, xc = e && e.type.__scopeId || null, t;
}
function tr(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ks(-1);
    const s = Cs(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Cs(s), r._d && ks(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function $o(e, t) {
  if (dt === null)
    return e;
  const n = Zs(dt), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, i, l = Me] = t[o];
    s && (ve(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && qt(a), r.push({
      dir: s,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function Sn(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[r];
    l && (Jt(), xt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Qt());
  }
}
function Vd(e, t) {
  if (bt) {
    let n = bt.provides;
    const r = bt.parent && bt.parent.provides;
    r === n && (n = bt.provides = Object.create(r)), n[e] = t;
  }
}
function Jn(e, t, n = !1) {
  const r = en();
  if (r || Nn) {
    let o = Nn ? Nn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(r && r.proxy) : t;
  }
}
function jd() {
  return !!(en() || Nn);
}
const Bd = /* @__PURE__ */ Symbol.for("v-scx"), Wd = () => Jn(Bd);
function yt(e, t, n) {
  return Pc(e, t, n);
}
function Pc(e, t, n = Me) {
  const { immediate: r, deep: o, flush: s, once: a } = n, i = tt({}, n), l = t && r || !t && s !== "post";
  let u;
  if ($r) {
    if (s === "sync") {
      const p = Wd();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Ht, p.resume = Ht, p.pause = Ht, p;
    }
  }
  const c = bt;
  i.call = (p, S, w) => xt(p, c, S, w);
  let f = !1;
  s === "post" ? i.scheduler = (p) => {
    gt(p, c && c.suspense);
  } : s !== "sync" && (f = !0, i.scheduler = (p, S) => {
    S ? p() : Aa(p);
  }), i.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const h = Fd(e, t, i);
  return $r && (u ? u.push(h) : l && h()), h;
}
function Kd(e, t, n) {
  const r = this.proxy, o = qe(e) ? e.includes(".") ? Nc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ve(t) ? s = t : (s = t.handler, n = t);
  const a = Yr(this), i = Pc(o, s.bind(r), n);
  return a(), i;
}
function Nc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Mc = /* @__PURE__ */ Symbol("_vte"), Dc = (e) => e.__isTeleport, Ar = (e) => e && (e.disabled || e.disabled === ""), ii = (e) => e && (e.defer || e.defer === ""), li = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ci = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ho = (e, t) => {
  const n = e && e.to;
  return qe(n) ? t ? t(n) : null : n;
}, Fc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, i, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: h,
      o: { insert: p, querySelector: S, createText: w, createComment: T }
    } = u, v = Ar(t.props);
    let { shapeFlag: x, children: y, dynamicChildren: E } = t;
    if (e == null) {
      const k = t.el = w(""), O = t.anchor = w("");
      p(k, n, r), p(O, n, r);
      const D = (C, j) => {
        x & 16 && c(
          y,
          C,
          j,
          o,
          s,
          a,
          i,
          l
        );
      }, N = () => {
        const C = t.target = Ho(t.props, S), j = Uc(C, t, w, p);
        C && (a !== "svg" && li(C) ? a = "svg" : a !== "mathml" && ci(C) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(C), v || (D(C, j), _s(t, !1)));
      };
      v && (D(n, O), _s(t, !0)), ii(t.props) ? (t.el.__isMounted = !1, gt(() => {
        N(), delete t.el.__isMounted;
      }, s)) : N();
    } else {
      if (ii(t.props) && e.el.__isMounted === !1) {
        gt(() => {
          Fc.process(
            e,
            t,
            n,
            r,
            o,
            s,
            a,
            i,
            l,
            u
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const k = t.anchor = e.anchor, O = t.target = e.target, D = t.targetAnchor = e.targetAnchor, N = Ar(e.props), C = N ? n : O, j = N ? k : D;
      if (a === "svg" || li(O) ? a = "svg" : (a === "mathml" || ci(O)) && (a = "mathml"), E ? (h(
        e.dynamicChildren,
        E,
        C,
        o,
        s,
        a,
        i
      ), Ia(e, t, !0)) : l || f(
        e,
        t,
        C,
        j,
        o,
        s,
        a,
        i,
        !1
      ), v)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : os(
          t,
          n,
          k,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = t.target = Ho(
          t.props,
          S
        );
        te && os(
          t,
          te,
          null,
          u,
          0
        );
      } else N && os(
        t,
        O,
        D,
        u,
        1
      );
      _s(t, v);
    }
  },
  remove(e, t, n, { um: r, o: { remove: o } }, s) {
    const {
      shapeFlag: a,
      children: i,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: h
    } = e;
    if (f && (o(u), o(c)), s && o(l), a & 16) {
      const p = s || !Ar(h);
      for (let S = 0; S < i.length; S++) {
        const w = i[S];
        r(
          w,
          t,
          n,
          p,
          !!w.dynamicChildren
        );
      }
    }
  },
  move: os,
  hydrate: zd
};
function os(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(a, t, n), (!f || Ar(c)) && l & 16)
    for (let h = 0; h < u.length; h++)
      o(
        u[h],
        t,
        n,
        2
      );
  f && r(i, t, n);
}
function zd(e, t, n, r, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: u, createText: c }
}, f) {
  function h(w, T, v, x) {
    T.anchor = f(
      a(w),
      T,
      i(w),
      n,
      r,
      o,
      s
    ), T.targetStart = v, T.targetAnchor = x;
  }
  const p = t.target = Ho(
    t.props,
    l
  ), S = Ar(t.props);
  if (p) {
    const w = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (S)
        h(
          e,
          t,
          w,
          w && a(w)
        );
      else {
        t.anchor = a(e);
        let T = w;
        for (; T; ) {
          if (T && T.nodeType === 8) {
            if (T.data === "teleport start anchor")
              t.targetStart = T;
            else if (T.data === "teleport anchor") {
              t.targetAnchor = T, p._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          T = a(T);
        }
        t.targetAnchor || Uc(p, t, c, u), f(
          w && a(w),
          t,
          p,
          n,
          r,
          o,
          s
        );
      }
    _s(t, S);
  } else S && t.shapeFlag & 16 && h(e, t, e, a(e));
  return t.anchor && a(t.anchor);
}
const Ta = Fc;
function _s(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Uc(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Mc] = s, e && (r(o, e), r(s, e)), s;
}
const zt = /* @__PURE__ */ Symbol("_leaveCb"), as = /* @__PURE__ */ Symbol("_enterCb");
function $c() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lr(() => {
    e.isMounted = !0;
  }), Ca(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ot = [Function, Array], Hc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ot,
  onEnter: Ot,
  onAfterEnter: Ot,
  onEnterCancelled: Ot,
  // leave
  onBeforeLeave: Ot,
  onLeave: Ot,
  onAfterLeave: Ot,
  onLeaveCancelled: Ot,
  // appear
  onBeforeAppear: Ot,
  onAppear: Ot,
  onAfterAppear: Ot,
  onAppearCancelled: Ot
}, Vc = (e) => {
  const t = e.subTree;
  return t.component ? Vc(t.component) : t;
}, Gd = {
  name: "BaseTransition",
  props: Hc,
  setup(e, { slots: t }) {
    const n = en(), r = $c();
    return () => {
      const o = t.default && Oa(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = jc(o), a = Ce(e), { mode: i } = a;
      if (r.isLeaving)
        return yo(s);
      const l = ui(s);
      if (!l)
        return yo(s);
      let u = Dr(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== ft && Dn(l, u);
      let c = n.subTree && ui(n.subTree);
      if (c && c.type !== ft && !In(c, l) && Vc(n).type !== ft) {
        let f = Dr(
          c,
          a,
          r,
          n
        );
        if (Dn(c, f), i === "out-in" && l.type !== ft)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, yo(s);
        i === "in-out" && l.type !== ft ? f.delayLeave = (h, p, S) => {
          const w = Bc(
            r,
            c
          );
          w[String(c.key)] = c, h[zt] = () => {
            p(), h[zt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            S(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function jc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ft) {
        t = n;
        break;
      }
  }
  return t;
}
const qd = Gd;
function Bc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Dr(e, t, n, r, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: p,
    onAfterLeave: S,
    onLeaveCancelled: w,
    onBeforeAppear: T,
    onAppear: v,
    onAfterAppear: x,
    onAppearCancelled: y
  } = t, E = String(e.key), k = Bc(n, e), O = (C, j) => {
    C && xt(
      C,
      r,
      9,
      j
    );
  }, D = (C, j) => {
    const te = j[1];
    O(C, j), he(C) ? C.every((U) => U.length <= 1) && te() : C.length <= 1 && te();
  }, N = {
    mode: a,
    persisted: i,
    beforeEnter(C) {
      let j = l;
      if (!n.isMounted)
        if (s)
          j = T || l;
        else
          return;
      C[zt] && C[zt](
        !0
        /* cancelled */
      );
      const te = k[E];
      te && In(e, te) && te.el[zt] && te.el[zt](), O(j, [C]);
    },
    enter(C) {
      let j = u, te = c, U = f;
      if (!n.isMounted)
        if (s)
          j = v || u, te = x || c, U = y || f;
        else
          return;
      let J = !1;
      const ie = C[as] = (de) => {
        J || (J = !0, de ? O(U, [C]) : O(te, [C]), N.delayedLeave && N.delayedLeave(), C[as] = void 0);
      };
      j ? D(j, [C, ie]) : ie();
    },
    leave(C, j) {
      const te = String(e.key);
      if (C[as] && C[as](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      O(h, [C]);
      let U = !1;
      const J = C[zt] = (ie) => {
        U || (U = !0, j(), ie ? O(w, [C]) : O(S, [C]), C[zt] = void 0, k[te] === e && delete k[te]);
      };
      k[te] = e, p ? D(p, [C, J]) : J();
    },
    clone(C) {
      const j = Dr(
        C,
        t,
        n,
        r,
        o
      );
      return o && o(j), j;
    }
  };
  return N;
}
function yo(e) {
  if (Xs(e))
    return e = _n(e), e.children = null, e;
}
function ui(e) {
  if (!Xs(e))
    return Dc(e.type) && e.children ? jc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ve(n.default))
      return n.default();
  }
}
function Dn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Oa(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === He ? (a.patchFlag & 128 && o++, r = r.concat(
      Oa(a.children, t, i)
    )) : (t || a.type !== ft) && r.push(i != null ? _n(a, { key: i }) : a);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function nn(e, t) {
  return ve(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Wc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Rs = /* @__PURE__ */ new WeakMap();
function Tr(e, t, n, r, o = !1) {
  if (he(e)) {
    e.forEach(
      (S, w) => Tr(
        S,
        t && (he(t) ? t[w] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Qn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Tr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Zs(r.component) : r.el, a = o ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === Me ? i.refs = {} : i.refs, f = i.setupState, h = Ce(f), p = f === Me ? Ql : (S) => Ie(h, S);
  if (u != null && u !== l) {
    if (fi(t), qe(u))
      c[u] = null, p(u) && (f[u] = null);
    else if (je(u)) {
      u.value = null;
      const S = t;
      S.k && (c[S.k] = null);
    }
  }
  if (ve(l))
    zr(l, i, 12, [a, c]);
  else {
    const S = qe(l), w = je(l);
    if (S || w) {
      const T = () => {
        if (e.f) {
          const v = S ? p(l) ? f[l] : c[l] : l.value;
          if (o)
            he(v) && ha(v, s);
          else if (he(v))
            v.includes(s) || v.push(s);
          else if (S)
            c[l] = [s], p(l) && (f[l] = c[l]);
          else {
            const x = [s];
            l.value = x, e.k && (c[e.k] = x);
          }
        } else S ? (c[l] = a, p(l) && (f[l] = a)) : w && (l.value = a, e.k && (c[e.k] = a));
      };
      if (a) {
        const v = () => {
          T(), Rs.delete(e);
        };
        v.id = -1, Rs.set(e, v), gt(v, n);
      } else
        fi(e), T();
    }
  }
}
function fi(e) {
  const t = Rs.get(e);
  t && (t.flags |= 8, Rs.delete(e));
}
Ks().requestIdleCallback;
Ks().cancelIdleCallback;
const Qn = (e) => !!e.type.__asyncLoader, Xs = (e) => e.type.__isKeepAlive;
function Yd(e, t) {
  Kc(e, "a", t);
}
function Xd(e, t) {
  Kc(e, "da", t);
}
function Kc(e, t, n = bt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Js(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xs(o.parent.vnode) && Jd(r, t, n, o), o = o.parent;
  }
}
function Jd(e, t, n, r) {
  const o = Js(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Gr(() => {
    ha(r[t], o);
  }, n);
}
function Js(e, t, n = bt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Jt();
      const i = Yr(n), l = xt(t, n, e, a);
      return i(), Qt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const rn = (e) => (t, n = bt) => {
  (!$r || e === "sp") && Js(e, (...r) => t(...r), n);
}, zc = rn("bm"), lr = rn("m"), Qd = rn(
  "bu"
), Gc = rn("u"), Ca = rn(
  "bum"
), Gr = rn("um"), Zd = rn(
  "sp"
), em = rn("rtg"), tm = rn("rtc");
function nm(e, t = bt) {
  Js("ec", e, t);
}
const rm = /* @__PURE__ */ Symbol.for("v-ndc");
function fn(e, t, n, r) {
  let o;
  const s = n, a = he(e);
  if (a || qe(e)) {
    const i = a && Xt(e);
    let l = !1, u = !1;
    i && (l = !At(e), u = Zt(e), e = zs(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? er(kt(e[c])) : kt(e[c]) : e[c],
        c,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s);
  } else if (Ue(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, l) => t(i, l, void 0, s)
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const c = i[l];
        o[l] = t(e[c], c, l, s);
      }
    }
  else
    o = [];
  return o;
}
function Ls(e, t, n = {}, r, o) {
  if (dt.ce || dt.parent && Qn(dt.parent) && dt.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), ge(), pn(
      He,
      null,
      [ye("slot", n, r && r())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), ge();
  const a = s && qc(s(n)), i = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = pn(
    He,
    {
      key: (i && !tn(i) ? i : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function qc(e) {
  return e.some((t) => Ur(t) ? !(t.type === ft || t.type === He && !qc(t.children)) : !0) ? e : null;
}
const Vo = (e) => e ? du(e) ? Zs(e) : Vo(e.parent) : null, Or = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vo(e.parent),
    $root: (e) => Vo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Aa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xn.bind(e.proxy)),
    $watch: (e) => Kd.bind(e)
  })
), vo = (e, t) => e !== Me && !e.__isScriptSetup && Ie(e, t), sm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: a, type: i, appContext: l } = e;
    if (t[0] !== "$") {
      const h = a[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (vo(r, t))
          return a[t] = 1, r[t];
        if (o !== Me && Ie(o, t))
          return a[t] = 2, o[t];
        if (Ie(s, t))
          return a[t] = 3, s[t];
        if (n !== Me && Ie(n, t))
          return a[t] = 4, n[t];
        jo && (a[t] = 0);
      }
    }
    const u = Or[t];
    let c, f;
    if (u)
      return t === "$attrs" && ut(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = i.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Me && Ie(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Ie(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return vo(o, t) ? (o[t] = n, !0) : r !== Me && Ie(r, t) ? (r[t] = n, !0) : Ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: a }
  }, i) {
    let l;
    return !!(n[i] || e !== Me && i[0] !== "$" && Ie(e, i) || vo(t, i) || Ie(s, i) || Ie(r, i) || Ie(Or, i) || Ie(o.config.globalProperties, i) || (l = a.__cssModules) && l[i]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function di(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let jo = !0;
function om(e) {
  const t = Xc(e), n = e.proxy, r = e.ctx;
  jo = !1, t.beforeCreate && mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: a,
    watch: i,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: S,
    activated: w,
    deactivated: T,
    beforeDestroy: v,
    beforeUnmount: x,
    destroyed: y,
    unmounted: E,
    render: k,
    renderTracked: O,
    renderTriggered: D,
    errorCaptured: N,
    serverPrefetch: C,
    // public API
    expose: j,
    inheritAttrs: te,
    // assets
    components: U,
    directives: J,
    filters: ie
  } = t;
  if (u && am(u, r, null), a)
    for (const z in a) {
      const ae = a[z];
      ve(ae) && (r[z] = ae.bind(n));
    }
  if (o) {
    const z = o.call(n, n);
    Ue(z) && (e.data = Gs(z));
  }
  if (jo = !0, s)
    for (const z in s) {
      const ae = s[z], Re = ve(ae) ? ae.bind(n, n) : ve(ae.get) ? ae.get.bind(n, n) : Ht, xe = !ve(ae) && ve(ae.set) ? ae.set.bind(n) : Ht, fe = _e({
        get: Re,
        set: xe
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (we) => fe.value = we
      });
    }
  if (i)
    for (const z in i)
      Yc(i[z], r, n, z);
  if (l) {
    const z = ve(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((ae) => {
      Vd(ae, z[ae]);
    });
  }
  c && mi(c, e, "c");
  function V(z, ae) {
    he(ae) ? ae.forEach((Re) => z(Re.bind(n))) : ae && z(ae.bind(n));
  }
  if (V(zc, f), V(lr, h), V(Qd, p), V(Gc, S), V(Yd, w), V(Xd, T), V(nm, N), V(tm, O), V(em, D), V(Ca, x), V(Gr, E), V(Zd, C), he(j))
    if (j.length) {
      const z = e.exposed || (e.exposed = {});
      j.forEach((ae) => {
        Object.defineProperty(z, ae, {
          get: () => n[ae],
          set: (Re) => n[ae] = Re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === Ht && (e.render = k), te != null && (e.inheritAttrs = te), U && (e.components = U), J && (e.directives = J), C && Wc(e);
}
function am(e, t, n = Ht) {
  he(e) && (e = Bo(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Ue(o) ? "default" in o ? s = Jn(
      o.from || r,
      o.default,
      !0
    ) : s = Jn(o.from || r) : s = Jn(o), je(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[r] = s;
  }
}
function mi(e, t, n) {
  xt(
    he(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Yc(e, t, n, r) {
  let o = r.includes(".") ? Nc(n, r) : () => n[r];
  if (qe(e)) {
    const s = t[e];
    ve(s) && yt(o, s);
  } else if (ve(e))
    yt(o, e.bind(n));
  else if (Ue(e))
    if (he(e))
      e.forEach((s) => Yc(s, t, n, r));
    else {
      const s = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(s) && yt(o, s, e);
    }
}
function Xc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => Is(l, u, a, !0)
  ), Is(l, t, a)), Ue(t) && s.set(t, l), l;
}
function Is(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Is(e, s, n, !0), o && o.forEach(
    (a) => Is(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = im[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const im = {
  data: hi,
  props: pi,
  emits: pi,
  // objects
  methods: vr,
  computed: vr,
  // lifecycle
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  // assets
  components: vr,
  directives: vr,
  // watch
  watch: cm,
  // provide / inject
  provide: hi,
  inject: lm
};
function hi(e, t) {
  return t ? e ? function() {
    return tt(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lm(e, t) {
  return vr(Bo(e), Bo(t));
}
function Bo(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vr(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pi(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    di(e),
    di(t ?? {})
  ) : t;
}
function cm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ht(e[r], t[r]);
  return n;
}
function Jc() {
  return {
    app: null,
    config: {
      isNativeTag: Ql,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let um = 0;
function fm(e, t) {
  return function(r, o = null) {
    ve(r) || (r = tt({}, r)), o != null && !Ue(o) && (o = null);
    const s = Jc(), a = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const u = s.app = {
      _uid: um++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: jm,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return a.has(c) || (c && ve(c.install) ? (a.add(c), c.install(u, ...f)) : ve(c) && (a.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (s.components[c] = f, u) : s.components[c];
      },
      directive(c, f) {
        return f ? (s.directives[c] = f, u) : s.directives[c];
      },
      mount(c, f, h) {
        if (!l) {
          const p = u._ceVNode || ye(r, o);
          return p.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(p, c, h), l = !0, u._container = c, c.__vue_app__ = u, Zs(p.component);
        }
      },
      onUnmount(c) {
        i.push(c);
      },
      unmount() {
        l && (xt(
          i,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = Nn;
        Nn = u;
        try {
          return c();
        } finally {
          Nn = f;
        }
      }
    };
    return u;
  };
}
let Nn = null;
const dm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${gn(t)}Modifiers`] || e[`${yn(t)}Modifiers`];
function mm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Me;
  let o = n;
  const s = t.startsWith("update:"), a = s && dm(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => qe(c) ? c.trim() : c)), a.number && (o = n.map(pa)));
  let i, l = r[i = ho(t)] || // also try camelCase event handler (#2249)
  r[i = ho(gn(t))];
  !l && s && (l = r[i = ho(yn(t))]), l && xt(
    l,
    e,
    6,
    o
  );
  const u = r[i + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, xt(
      u,
      e,
      6,
      o
    );
  }
}
const hm = /* @__PURE__ */ new WeakMap();
function Qc(e, t, n = !1) {
  const r = n ? hm : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!ve(e)) {
    const l = (u) => {
      const c = Qc(u, t, !0);
      c && (i = !0, tt(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (Ue(e) && r.set(e, null), null) : (he(s) ? s.forEach((l) => a[l] = null) : tt(a, s), Ue(e) && r.set(e, a), a);
}
function Qs(e, t) {
  return !e || !Vs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ie(e, t[0].toLowerCase() + t.slice(1)) || Ie(e, yn(t)) || Ie(e, t));
}
function gi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: a,
    attrs: i,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: h,
    setupState: p,
    ctx: S,
    inheritAttrs: w
  } = e, T = Cs(e);
  let v, x;
  try {
    if (n.shapeFlag & 4) {
      const E = o || r, k = E;
      v = Ut(
        u.call(
          k,
          E,
          c,
          f,
          p,
          h,
          S
        )
      ), x = i;
    } else {
      const E = t;
      v = Ut(
        E.length > 1 ? E(
          f,
          { attrs: i, slots: a, emit: l }
        ) : E(
          f,
          null
        )
      ), x = t.props ? i : pm(i);
    }
  } catch (E) {
    Cr.length = 0, Ys(E, e, 1), v = ye(ft);
  }
  let y = v;
  if (x && w !== !1) {
    const E = Object.keys(x), { shapeFlag: k } = y;
    E.length && k & 7 && (s && E.some(ma) && (x = gm(
      x,
      s
    )), y = _n(y, x, !1, !0));
  }
  return n.dirs && (y = _n(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Dn(y, n.transition), v = y, Cs(T), v;
}
const pm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gm = (e, t) => {
  const n = {};
  for (const r in e)
    (!ma(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function _m(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? _i(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (a[h] !== r[h] && !Qs(u, h))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? _i(r, a, u) : !0 : !!a;
  return !1;
}
function _i(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Qs(n, s))
      return !0;
  }
  return !1;
}
function bm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Zc = {}, eu = () => Object.create(Zc), tu = (e) => Object.getPrototypeOf(e) === Zc;
function ym(e, t, n, r = !1) {
  const o = {}, s = eu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nu(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Rd(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function vm(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = Ce(o), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (Qs(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (l)
          if (Ie(s, h))
            p !== s[h] && (s[h] = p, u = !0);
          else {
            const S = gn(h);
            o[S] = Wo(
              l,
              i,
              S,
              p,
              e,
              !1
            );
          }
        else
          p !== s[h] && (s[h] = p, u = !0);
      }
    }
  } else {
    nu(e, t, o, s) && (u = !0);
    let c;
    for (const f in i)
      (!t || // for camelCase
      !Ie(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yn(f)) === f || !Ie(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = Wo(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== i)
      for (const f in s)
        (!t || !Ie(t, f)) && (delete s[f], u = !0);
  }
  u && Gt(e.attrs, "set", "");
}
function nu(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (Er(l))
        continue;
      const u = t[l];
      let c;
      o && Ie(o, c = gn(l)) ? !s || !s.includes(c) ? n[c] = u : (i || (i = {}))[c] = u : Qs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = Ce(n), u = i || Me;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Wo(
        o,
        l,
        f,
        u[f],
        e,
        !Ie(u, f)
      );
    }
  }
  return a;
}
function Wo(e, t, n, r, o, s) {
  const a = e[n];
  if (a != null) {
    const i = Ie(a, "default");
    if (i && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ve(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Yr(o);
          r = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        r = l;
      o.ce && o.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (s && !i ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === yn(n)) && (r = !0));
  }
  return r;
}
const Em = /* @__PURE__ */ new WeakMap();
function ru(e, t, n = !1) {
  const r = n ? Em : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!ve(e)) {
    const c = (f) => {
      l = !0;
      const [h, p] = ru(f, t, !0);
      tt(a, h), p && i.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return Ue(e) && r.set(e, Gn), Gn;
  if (he(s))
    for (let c = 0; c < s.length; c++) {
      const f = gn(s[c]);
      bi(f) && (a[f] = Me);
    }
  else if (s)
    for (const c in s) {
      const f = gn(c);
      if (bi(f)) {
        const h = s[c], p = a[f] = he(h) || ve(h) ? { type: h } : tt({}, h), S = p.type;
        let w = !1, T = !0;
        if (he(S))
          for (let v = 0; v < S.length; ++v) {
            const x = S[v], y = ve(x) && x.name;
            if (y === "Boolean") {
              w = !0;
              break;
            } else y === "String" && (T = !1);
          }
        else
          w = ve(S) && S.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = w, p[
          1
          /* shouldCastTrue */
        ] = T, (w || Ie(p, "default")) && i.push(f);
      }
    }
  const u = [a, i];
  return Ue(e) && r.set(e, u), u;
}
function bi(e) {
  return e[0] !== "$" && !Er(e);
}
const Ra = (e) => e === "_" || e === "_ctx" || e === "$stable", La = (e) => he(e) ? e.map(Ut) : [Ut(e)], wm = (e, t, n) => {
  if (t._n)
    return t;
  const r = tr((...o) => La(t(...o)), n);
  return r._c = !1, r;
}, su = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Ra(o)) continue;
    const s = e[o];
    if (ve(s))
      t[o] = wm(o, s, r);
    else if (s != null) {
      const a = La(s);
      t[o] = () => a;
    }
  }
}, ou = (e, t) => {
  const n = La(t);
  e.slots.default = () => n;
}, au = (e, t, n) => {
  for (const r in t)
    (n || !Ra(r)) && (e[r] = t[r]);
}, Sm = (e, t, n) => {
  const r = e.slots = eu();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (au(r, t, n), n && sc(r, "_", o, !0)) : su(t, r);
  } else t && ou(e, t);
}, Am = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, a = Me;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : au(o, t, n) : (s = !t.$stable, su(t, o)), a = t;
  } else t && (ou(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !Ra(i) && a[i] == null && delete o[i];
}, gt = Lm;
function Tm(e) {
  return Om(e);
}
function Om(e, t) {
  const n = Ks();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: a,
    createText: i,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: h,
    setScopeId: p = Ht,
    insertStaticContent: S
  } = e, w = (g, _, b, P = null, L = null, M = null, Y = void 0, G = null, d = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !In(g, _) && (P = W(g), we(g, L, M, !0), g = null), _.patchFlag === -2 && (d = !1, _.dynamicChildren = null);
    const { type: m, ref: R, shapeFlag: F } = _;
    switch (m) {
      case qr:
        T(g, _, b, P);
        break;
      case ft:
        v(g, _, b, P);
        break;
      case wo:
        g == null && x(_, b, P, Y);
        break;
      case He:
        U(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          G,
          d
        );
        break;
      default:
        F & 1 ? k(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          G,
          d
        ) : F & 6 ? J(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          G,
          d
        ) : (F & 64 || F & 128) && m.process(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          G,
          d,
          Oe
        );
    }
    R != null && L ? Tr(R, g && g.ref, M, _ || g, !_) : R == null && g && g.ref != null && Tr(g.ref, null, M, g, !0);
  }, T = (g, _, b, P) => {
    if (g == null)
      r(
        _.el = i(_.children),
        b,
        P
      );
    else {
      const L = _.el = g.el;
      _.children !== g.children && u(L, _.children);
    }
  }, v = (g, _, b, P) => {
    g == null ? r(
      _.el = l(_.children || ""),
      b,
      P
    ) : _.el = g.el;
  }, x = (g, _, b, P) => {
    [g.el, g.anchor] = S(
      g.children,
      _,
      b,
      P,
      g.el,
      g.anchor
    );
  }, y = ({ el: g, anchor: _ }, b, P) => {
    let L;
    for (; g && g !== _; )
      L = h(g), r(g, b, P), g = L;
    r(_, b, P);
  }, E = ({ el: g, anchor: _ }) => {
    let b;
    for (; g && g !== _; )
      b = h(g), o(g), g = b;
    o(_);
  }, k = (g, _, b, P, L, M, Y, G, d) => {
    if (_.type === "svg" ? Y = "svg" : _.type === "math" && (Y = "mathml"), g == null)
      O(
        _,
        b,
        P,
        L,
        M,
        Y,
        G,
        d
      );
    else {
      const m = g.el && g.el._isVueCE ? g.el : null;
      try {
        m && m._beginPatch(), C(
          g,
          _,
          L,
          M,
          Y,
          G,
          d
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, O = (g, _, b, P, L, M, Y, G) => {
    let d, m;
    const { props: R, shapeFlag: F, transition: ee, dirs: q } = g;
    if (d = g.el = a(
      g.type,
      M,
      R && R.is,
      R
    ), F & 8 ? c(d, g.children) : F & 16 && N(
      g.children,
      d,
      null,
      P,
      L,
      Eo(g, M),
      Y,
      G
    ), q && Sn(g, null, P, "created"), D(d, g, g.scopeId, Y, P), R) {
      for (const $ in R)
        $ !== "value" && !Er($) && s(d, $, null, R[$], M, P);
      "value" in R && s(d, "value", null, R.value, M), (m = R.onVnodeBeforeMount) && Mt(m, P, g);
    }
    q && Sn(g, null, P, "beforeMount");
    const I = Cm(L, ee);
    I && ee.beforeEnter(d), r(d, _, b), ((m = R && R.onVnodeMounted) || I || q) && gt(() => {
      m && Mt(m, P, g), I && ee.enter(d), q && Sn(g, null, P, "mounted");
    }, L);
  }, D = (g, _, b, P, L) => {
    if (b && p(g, b), P)
      for (let M = 0; M < P.length; M++)
        p(g, P[M]);
    if (L) {
      let M = L.subTree;
      if (_ === M || cu(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
        const Y = L.vnode;
        D(
          g,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          L.parent
        );
      }
    }
  }, N = (g, _, b, P, L, M, Y, G, d = 0) => {
    for (let m = d; m < g.length; m++) {
      const R = g[m] = G ? dn(g[m]) : Ut(g[m]);
      w(
        null,
        R,
        _,
        b,
        P,
        L,
        M,
        Y,
        G
      );
    }
  }, C = (g, _, b, P, L, M, Y) => {
    const G = _.el = g.el;
    let { patchFlag: d, dynamicChildren: m, dirs: R } = _;
    d |= g.patchFlag & 16;
    const F = g.props || Me, ee = _.props || Me;
    let q;
    if (b && An(b, !1), (q = ee.onVnodeBeforeUpdate) && Mt(q, b, _, g), R && Sn(_, g, b, "beforeUpdate"), b && An(b, !0), (F.innerHTML && ee.innerHTML == null || F.textContent && ee.textContent == null) && c(G, ""), m ? j(
      g.dynamicChildren,
      m,
      G,
      b,
      P,
      Eo(_, L),
      M
    ) : Y || ae(
      g,
      _,
      G,
      null,
      b,
      P,
      Eo(_, L),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        te(G, F, ee, b, L);
      else if (d & 2 && F.class !== ee.class && s(G, "class", null, ee.class, L), d & 4 && s(G, "style", F.style, ee.style, L), d & 8) {
        const I = _.dynamicProps;
        for (let $ = 0; $ < I.length; $++) {
          const ce = I[$], Ae = F[ce], $e = ee[ce];
          ($e !== Ae || ce === "value") && s(G, ce, Ae, $e, L, b);
        }
      }
      d & 1 && g.children !== _.children && c(G, _.children);
    } else !Y && m == null && te(G, F, ee, b, L);
    ((q = ee.onVnodeUpdated) || R) && gt(() => {
      q && Mt(q, b, _, g), R && Sn(_, g, b, "updated");
    }, P);
  }, j = (g, _, b, P, L, M, Y) => {
    for (let G = 0; G < _.length; G++) {
      const d = g[G], m = _[G], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !In(d, m) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      w(
        d,
        m,
        R,
        null,
        P,
        L,
        M,
        Y,
        !0
      );
    }
  }, te = (g, _, b, P, L) => {
    if (_ !== b) {
      if (_ !== Me)
        for (const M in _)
          !Er(M) && !(M in b) && s(
            g,
            M,
            _[M],
            null,
            L,
            P
          );
      for (const M in b) {
        if (Er(M)) continue;
        const Y = b[M], G = _[M];
        Y !== G && M !== "value" && s(g, M, G, Y, L, P);
      }
      "value" in b && s(g, "value", _.value, b.value, L);
    }
  }, U = (g, _, b, P, L, M, Y, G, d) => {
    const m = _.el = g ? g.el : i(""), R = _.anchor = g ? g.anchor : i("");
    let { patchFlag: F, dynamicChildren: ee, slotScopeIds: q } = _;
    q && (G = G ? G.concat(q) : q), g == null ? (r(m, b, P), r(R, b, P), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      b,
      R,
      L,
      M,
      Y,
      G,
      d
    )) : F > 0 && F & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === ee.length ? (j(
      g.dynamicChildren,
      ee,
      b,
      L,
      M,
      Y,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || L && _ === L.subTree) && Ia(
      g,
      _,
      !0
      /* shallow */
    )) : ae(
      g,
      _,
      b,
      R,
      L,
      M,
      Y,
      G,
      d
    );
  }, J = (g, _, b, P, L, M, Y, G, d) => {
    _.slotScopeIds = G, g == null ? _.shapeFlag & 512 ? L.ctx.activate(
      _,
      b,
      P,
      Y,
      d
    ) : ie(
      _,
      b,
      P,
      L,
      M,
      Y,
      d
    ) : de(g, _, d);
  }, ie = (g, _, b, P, L, M, Y) => {
    const G = g.component = Dm(
      g,
      P,
      L
    );
    if (Xs(g) && (G.ctx.renderer = Oe), Fm(G, !1, Y), G.asyncDep) {
      if (L && L.registerDep(G, V, Y), !g.el) {
        const d = G.subTree = ye(ft);
        v(null, d, _, b), g.placeholder = d.el;
      }
    } else
      V(
        G,
        g,
        _,
        b,
        L,
        M,
        Y
      );
  }, de = (g, _, b) => {
    const P = _.component = g.component;
    if (_m(g, _, b))
      if (P.asyncDep && !P.asyncResolved) {
        z(P, _, b);
        return;
      } else
        P.next = _, P.update();
    else
      _.el = g.el, P.vnode = _;
  }, V = (g, _, b, P, L, M, Y) => {
    const G = () => {
      if (g.isMounted) {
        let { next: F, bu: ee, u: q, parent: I, vnode: $ } = g;
        {
          const Je = iu(g);
          if (Je) {
            F && (F.el = $.el, z(g, F, Y)), Je.asyncDep.then(() => {
              g.isUnmounted || G();
            });
            return;
          }
        }
        let ce = F, Ae;
        An(g, !1), F ? (F.el = $.el, z(g, F, Y)) : F = $, ee && gs(ee), (Ae = F.props && F.props.onVnodeBeforeUpdate) && Mt(Ae, I, F, $), An(g, !0);
        const $e = gi(g), rt = g.subTree;
        g.subTree = $e, w(
          rt,
          $e,
          // parent may have changed if it's in a teleport
          f(rt.el),
          // anchor may have changed if it's in a fragment
          W(rt),
          g,
          L,
          M
        ), F.el = $e.el, ce === null && bm(g, $e.el), q && gt(q, L), (Ae = F.props && F.props.onVnodeUpdated) && gt(
          () => Mt(Ae, I, F, $),
          L
        );
      } else {
        let F;
        const { el: ee, props: q } = _, { bm: I, m: $, parent: ce, root: Ae, type: $e } = g, rt = Qn(_);
        An(g, !1), I && gs(I), !rt && (F = q && q.onVnodeBeforeMount) && Mt(F, ce, _), An(g, !0);
        {
          Ae.ce && // @ts-expect-error _def is private
          Ae.ce._def.shadowRoot !== !1 && Ae.ce._injectChildStyle($e);
          const Je = g.subTree = gi(g);
          w(
            null,
            Je,
            b,
            P,
            g,
            L,
            M
          ), _.el = Je.el;
        }
        if ($ && gt($, L), !rt && (F = q && q.onVnodeMounted)) {
          const Je = _;
          gt(
            () => Mt(F, ce, Je),
            L
          );
        }
        (_.shapeFlag & 256 || ce && Qn(ce.vnode) && ce.vnode.shapeFlag & 256) && g.a && gt(g.a, L), g.isMounted = !0, _ = b = P = null;
      }
    };
    g.scope.on();
    const d = g.effect = new fc(G);
    g.scope.off();
    const m = g.update = d.run.bind(d), R = g.job = d.runIfDirty.bind(d);
    R.i = g, R.id = g.uid, d.scheduler = () => Aa(R), An(g, !0), m();
  }, z = (g, _, b) => {
    _.component = g;
    const P = g.vnode.props;
    g.vnode = _, g.next = null, vm(g, _.props, P, b), Am(g, _.children, b), Jt(), ai(g), Qt();
  }, ae = (g, _, b, P, L, M, Y, G, d = !1) => {
    const m = g && g.children, R = g ? g.shapeFlag : 0, F = _.children, { patchFlag: ee, shapeFlag: q } = _;
    if (ee > 0) {
      if (ee & 128) {
        xe(
          m,
          F,
          b,
          P,
          L,
          M,
          Y,
          G,
          d
        );
        return;
      } else if (ee & 256) {
        Re(
          m,
          F,
          b,
          P,
          L,
          M,
          Y,
          G,
          d
        );
        return;
      }
    }
    q & 8 ? (R & 16 && pe(m, L, M), F !== m && c(b, F)) : R & 16 ? q & 16 ? xe(
      m,
      F,
      b,
      P,
      L,
      M,
      Y,
      G,
      d
    ) : pe(m, L, M, !0) : (R & 8 && c(b, ""), q & 16 && N(
      F,
      b,
      P,
      L,
      M,
      Y,
      G,
      d
    ));
  }, Re = (g, _, b, P, L, M, Y, G, d) => {
    g = g || Gn, _ = _ || Gn;
    const m = g.length, R = _.length, F = Math.min(m, R);
    let ee;
    for (ee = 0; ee < F; ee++) {
      const q = _[ee] = d ? dn(_[ee]) : Ut(_[ee]);
      w(
        g[ee],
        q,
        b,
        null,
        L,
        M,
        Y,
        G,
        d
      );
    }
    m > R ? pe(
      g,
      L,
      M,
      !0,
      !1,
      F
    ) : N(
      _,
      b,
      P,
      L,
      M,
      Y,
      G,
      d,
      F
    );
  }, xe = (g, _, b, P, L, M, Y, G, d) => {
    let m = 0;
    const R = _.length;
    let F = g.length - 1, ee = R - 1;
    for (; m <= F && m <= ee; ) {
      const q = g[m], I = _[m] = d ? dn(_[m]) : Ut(_[m]);
      if (In(q, I))
        w(
          q,
          I,
          b,
          null,
          L,
          M,
          Y,
          G,
          d
        );
      else
        break;
      m++;
    }
    for (; m <= F && m <= ee; ) {
      const q = g[F], I = _[ee] = d ? dn(_[ee]) : Ut(_[ee]);
      if (In(q, I))
        w(
          q,
          I,
          b,
          null,
          L,
          M,
          Y,
          G,
          d
        );
      else
        break;
      F--, ee--;
    }
    if (m > F) {
      if (m <= ee) {
        const q = ee + 1, I = q < R ? _[q].el : P;
        for (; m <= ee; )
          w(
            null,
            _[m] = d ? dn(_[m]) : Ut(_[m]),
            b,
            I,
            L,
            M,
            Y,
            G,
            d
          ), m++;
      }
    } else if (m > ee)
      for (; m <= F; )
        we(g[m], L, M, !0), m++;
    else {
      const q = m, I = m, $ = /* @__PURE__ */ new Map();
      for (m = I; m <= ee; m++) {
        const it = _[m] = d ? dn(_[m]) : Ut(_[m]);
        it.key != null && $.set(it.key, m);
      }
      let ce, Ae = 0;
      const $e = ee - I + 1;
      let rt = !1, Je = 0;
      const Nt = new Array($e);
      for (m = 0; m < $e; m++) Nt[m] = 0;
      for (m = q; m <= F; m++) {
        const it = g[m];
        if (Ae >= $e) {
          we(it, L, M, !0);
          continue;
        }
        let Tt;
        if (it.key != null)
          Tt = $.get(it.key);
        else
          for (ce = I; ce <= ee; ce++)
            if (Nt[ce - I] === 0 && In(it, _[ce])) {
              Tt = ce;
              break;
            }
        Tt === void 0 ? we(it, L, M, !0) : (Nt[Tt - I] = m + 1, Tt >= Je ? Je = Tt : rt = !0, w(
          it,
          _[Tt],
          b,
          null,
          L,
          M,
          Y,
          G,
          d
        ), Ae++);
      }
      const dr = rt ? Rm(Nt) : Gn;
      for (ce = dr.length - 1, m = $e - 1; m >= 0; m--) {
        const it = I + m, Tt = _[it], X = _[it + 1], B = it + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          X.el || lu(X)
        ) : P;
        Nt[m] === 0 ? w(
          null,
          Tt,
          b,
          B,
          L,
          M,
          Y,
          G,
          d
        ) : rt && (ce < 0 || m !== dr[ce] ? fe(Tt, b, B, 2) : ce--);
      }
    }
  }, fe = (g, _, b, P, L = null) => {
    const { el: M, type: Y, transition: G, children: d, shapeFlag: m } = g;
    if (m & 6) {
      fe(g.component.subTree, _, b, P);
      return;
    }
    if (m & 128) {
      g.suspense.move(_, b, P);
      return;
    }
    if (m & 64) {
      Y.move(g, _, b, Oe);
      return;
    }
    if (Y === He) {
      r(M, _, b);
      for (let F = 0; F < d.length; F++)
        fe(d[F], _, b, P);
      r(g.anchor, _, b);
      return;
    }
    if (Y === wo) {
      y(g, _, b);
      return;
    }
    if (P !== 2 && m & 1 && G)
      if (P === 0)
        G.beforeEnter(M), r(M, _, b), gt(() => G.enter(M), L);
      else {
        const { leave: F, delayLeave: ee, afterLeave: q } = G, I = () => {
          g.ctx.isUnmounted ? o(M) : r(M, _, b);
        }, $ = () => {
          M._isLeaving && M[zt](
            !0
            /* cancelled */
          ), F(M, () => {
            I(), q && q();
          });
        };
        ee ? ee(M, I, $) : $();
      }
    else
      r(M, _, b);
  }, we = (g, _, b, P = !1, L = !1) => {
    const {
      type: M,
      props: Y,
      ref: G,
      children: d,
      dynamicChildren: m,
      shapeFlag: R,
      patchFlag: F,
      dirs: ee,
      cacheIndex: q
    } = g;
    if (F === -2 && (L = !1), G != null && (Jt(), Tr(G, null, b, g, !0), Qt()), q != null && (_.renderCache[q] = void 0), R & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const I = R & 1 && ee, $ = !Qn(g);
    let ce;
    if ($ && (ce = Y && Y.onVnodeBeforeUnmount) && Mt(ce, _, g), R & 6)
      We(g.component, b, P);
    else {
      if (R & 128) {
        g.suspense.unmount(b, P);
        return;
      }
      I && Sn(g, null, _, "beforeUnmount"), R & 64 ? g.type.remove(
        g,
        _,
        b,
        Oe,
        P
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== He || F > 0 && F & 64) ? pe(
        m,
        _,
        b,
        !1,
        !0
      ) : (M === He && F & 384 || !L && R & 16) && pe(d, _, b), P && Ne(g);
    }
    ($ && (ce = Y && Y.onVnodeUnmounted) || I) && gt(() => {
      ce && Mt(ce, _, g), I && Sn(g, null, _, "unmounted");
    }, b);
  }, Ne = (g) => {
    const { type: _, el: b, anchor: P, transition: L } = g;
    if (_ === He) {
      Xe(b, P);
      return;
    }
    if (_ === wo) {
      E(g);
      return;
    }
    const M = () => {
      o(b), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (g.shapeFlag & 1 && L && !L.persisted) {
      const { leave: Y, delayLeave: G } = L, d = () => Y(b, M);
      G ? G(g.el, M, d) : d();
    } else
      M();
  }, Xe = (g, _) => {
    let b;
    for (; g !== _; )
      b = h(g), o(g), g = b;
    o(_);
  }, We = (g, _, b) => {
    const { bum: P, scope: L, job: M, subTree: Y, um: G, m: d, a: m } = g;
    yi(d), yi(m), P && gs(P), L.stop(), M && (M.flags |= 8, we(Y, g, _, b)), G && gt(G, _), gt(() => {
      g.isUnmounted = !0;
    }, _);
  }, pe = (g, _, b, P = !1, L = !1, M = 0) => {
    for (let Y = M; Y < g.length; Y++)
      we(g[Y], _, b, P, L);
  }, W = (g) => {
    if (g.shapeFlag & 6)
      return W(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const _ = h(g.anchor || g.el), b = _ && _[Mc];
    return b ? h(b) : _;
  };
  let re = !1;
  const oe = (g, _, b) => {
    let P;
    g == null ? _._vnode && (we(_._vnode, null, null, !0), P = _._vnode.component) : w(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      b
    ), _._vnode = g, re || (re = !0, ai(P), Ic(), re = !1);
  }, Oe = {
    p: w,
    um: we,
    m: fe,
    r: Ne,
    mt: ie,
    mc: N,
    pc: ae,
    pbc: j,
    n: W,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: fm(oe)
  };
}
function Eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function An({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ia(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (he(r) && he(o))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = dn(o[s]), i.el = a.el), !n && i.patchFlag !== -2 && Ia(a, i)), i.type === qr && (i.patchFlag !== -1 ? i.el = a.el : i.__elIndex = s + // take fragment start anchor into account
      (e.type === He ? 1 : 0)), i.type === ft && !i.el && (i.el = a.el);
    }
}
function Rm(e) {
  const t = e.slice(), n = [0];
  let r, o, s, a, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, a = n.length - 1; s < a; )
        i = s + a >> 1, e[n[i]] < u ? s = i + 1 : a = i;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, a = n[s - 1]; s-- > 0; )
    n[s] = a, a = t[a];
  return n;
}
function iu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : iu(t);
}
function yi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function lu(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? lu(t.subTree) : null;
}
const cu = (e) => e.__isSuspense;
function Lm(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Hd(e);
}
const He = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), ft = /* @__PURE__ */ Symbol.for("v-cmt"), wo = /* @__PURE__ */ Symbol.for("v-stc"), Cr = [];
let St = null;
function ge(e = !1) {
  Cr.push(St = e ? null : []);
}
function Im() {
  Cr.pop(), St = Cr[Cr.length - 1] || null;
}
let Fr = 1;
function ks(e, t = !1) {
  Fr += e, e < 0 && St && t && (St.hasOnce = !0);
}
function uu(e) {
  return e.dynamicChildren = Fr > 0 ? St || Gn : null, Im(), Fr > 0 && St && St.push(e), e;
}
function Se(e, t, n, r, o, s) {
  return uu(
    H(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function pn(e, t, n, r, o) {
  return uu(
    ye(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Ur(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function In(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fu = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qe(e) || je(e) || ve(e) ? { i: dt, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, r = 0, o = null, s = e === He ? 0 : 1, a = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fu(t),
    ref: t && bs(t),
    scopeId: xc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: dt
  };
  return i ? (ka(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= qe(n) ? 8 : 16), Fr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && St.push(l), l;
}
const ye = km;
function km(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === rm) && (e = ft), Ur(e)) {
    const i = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ka(i, n), Fr > 0 && !s && St && (i.shapeFlag & 6 ? St[St.indexOf(e)] = i : St.push(i)), i.patchFlag = -2, i;
  }
  if (Vm(e) && (e = e.__vccOpts), t) {
    t = xm(t);
    let { class: i, style: l } = t;
    i && !qe(i) && (t.class = Ge(i)), Ue(l) && (qs(l) && !he(l) && (l = tt({}, l)), t.style = ir(l));
  }
  const a = qe(e) ? 1 : cu(e) ? 128 : Dc(e) ? 64 : Ue(e) ? 4 : ve(e) ? 2 : 0;
  return H(
    e,
    t,
    n,
    r,
    o,
    a,
    s,
    !0
  );
}
function xm(e) {
  return e ? qs(e) || tu(e) ? tt({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, u = t ? Pm(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? he(s) ? s.concat(bs(t)) : [s, bs(t)] : bs(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== He ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _n(e.ssContent),
    ssFallback: e.ssFallback && _n(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Dn(
    c,
    l.clone(c)
  ), c;
}
function zn(e = " ", t = 0) {
  return ye(qr, null, e, t);
}
function Ze(e = "", t = !1) {
  return t ? (ge(), pn(ft, null, e)) : ye(ft, null, e);
}
function Ut(e) {
  return e == null || typeof e == "boolean" ? ye(ft) : he(e) ? ye(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ur(e) ? dn(e) : ye(qr, null, String(e));
}
function dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
}
function ka(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (he(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ka(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !tu(t) ? t._ctx = dt : o === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: dt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ge([t.class, r.class]));
      else if (o === "style")
        t.style = ir([t.style, r.style]);
      else if (Vs(o)) {
        const s = t[o], a = r[o];
        a && s !== a && !(he(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Mt(e, t, n, r = null) {
  xt(e, t, 7, [
    n,
    r
  ]);
}
const Nm = Jc();
let Mm = 0;
function Dm(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Nm, s = {
    uid: Mm++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new lc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ru(r, o),
    emitsOptions: Qc(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Me,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Me,
    data: Me,
    props: Me,
    attrs: Me,
    slots: Me,
    refs: Me,
    setupState: Me,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = mm.bind(null, s), e.ce && e.ce(s), s;
}
let bt = null;
const en = () => bt || dt;
let xs, Ko;
{
  const e = Ks(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  xs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bt = n
  ), Ko = t(
    "__VUE_SSR_SETTERS__",
    (n) => $r = n
  );
}
const Yr = (e) => {
  const t = bt;
  return xs(e), e.scope.on(), () => {
    e.scope.off(), xs(t);
  };
}, vi = () => {
  bt && bt.scope.off(), xs(null);
};
function du(e) {
  return e.vnode.shapeFlag & 4;
}
let $r = !1;
function Fm(e, t = !1, n = !1) {
  t && Ko(t);
  const { props: r, children: o } = e.vnode, s = du(e);
  ym(e, r, s, t), Sm(e, o, n || t);
  const a = s ? Um(e, t) : void 0;
  return t && Ko(!1), a;
}
function Um(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sm);
  const { setup: r } = n;
  if (r) {
    Jt();
    const o = e.setupContext = r.length > 1 ? Hm(e) : null, s = Yr(e), a = zr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = ec(a);
    if (Qt(), s(), (i || e.sp) && !Qn(e) && Wc(e), i) {
      if (a.then(vi, vi), t)
        return a.then((l) => {
          Ei(e, l);
        }).catch((l) => {
          Ys(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ei(e, a);
  } else
    mu(e);
}
function Ei(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ue(t) && (e.setupState = Cc(t)), mu(e);
}
function mu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ht);
  {
    const o = Yr(e);
    Jt();
    try {
      om(e);
    } finally {
      Qt(), o();
    }
  }
}
const $m = {
  get(e, t) {
    return ut(e, "get", ""), e[t];
  }
};
function Hm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, $m),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Cc(Sa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Or)
        return Or[n](e);
    },
    has(t, n) {
      return n in t || n in Or;
    }
  })) : e.proxy;
}
function Vm(e) {
  return ve(e) && "__vccOpts" in e;
}
const _e = (e, t) => Md(e, t, $r);
function Hr(e, t, n) {
  try {
    ks(-1);
    const r = arguments.length;
    return r === 2 ? Ue(t) && !he(t) ? Ur(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ur(n) && (n = [n]), ye(e, t, n));
  } finally {
    ks(1);
  }
}
const jm = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zo;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    zo = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const hu = zo ? (e) => zo.createHTML(e) : (e) => e, Bm = "http://www.w3.org/2000/svg", Wm = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Si = Kt && /* @__PURE__ */ Kt.createElement("template"), Km = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(Bm, e) : t === "mathml" ? Kt.createElementNS(Wm, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const a = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      Si.innerHTML = hu(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Si.content;
      if (r === "svg" || r === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, sn = "transition", gr = "animation", nr = /* @__PURE__ */ Symbol("_vtc"), pu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, gu = /* @__PURE__ */ tt(
  {},
  Hc,
  pu
), zm = (e) => (e.displayName = "Transition", e.props = gu, e), _u = /* @__PURE__ */ zm(
  (e, { slots: t }) => Hr(qd, bu(e), t)
), Tn = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ai = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function bu(e) {
  const t = {};
  for (const U in e)
    U in pu || (t[U] = e[U]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: c = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, S = Gm(o), w = S && S[0], T = S && S[1], {
    onBeforeEnter: v,
    onEnter: x,
    onEnterCancelled: y,
    onLeave: E,
    onLeaveCancelled: k,
    onBeforeAppear: O = v,
    onAppear: D = x,
    onAppearCancelled: N = y
  } = t, C = (U, J, ie, de) => {
    U._enterCancelled = de, an(U, J ? c : i), an(U, J ? u : a), ie && ie();
  }, j = (U, J) => {
    U._isLeaving = !1, an(U, f), an(U, p), an(U, h), J && J();
  }, te = (U) => (J, ie) => {
    const de = U ? D : x, V = () => C(J, U, ie);
    Tn(de, [J, V]), Ti(() => {
      an(J, U ? l : s), Dt(J, U ? c : i), Ai(de) || Oi(J, r, w, V);
    });
  };
  return tt(t, {
    onBeforeEnter(U) {
      Tn(v, [U]), Dt(U, s), Dt(U, a);
    },
    onBeforeAppear(U) {
      Tn(O, [U]), Dt(U, l), Dt(U, u);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(U, J) {
      U._isLeaving = !0;
      const ie = () => j(U, J);
      Dt(U, f), U._enterCancelled ? (Dt(U, h), Go(U)) : (Go(U), Dt(U, h)), Ti(() => {
        U._isLeaving && (an(U, f), Dt(U, p), Ai(E) || Oi(U, r, T, ie));
      }), Tn(E, [U, ie]);
    },
    onEnterCancelled(U) {
      C(U, !1, void 0, !0), Tn(y, [U]);
    },
    onAppearCancelled(U) {
      C(U, !0, void 0, !0), Tn(N, [U]);
    },
    onLeaveCancelled(U) {
      j(U), Tn(k, [U]);
    }
  });
}
function Gm(e) {
  if (e == null)
    return null;
  if (Ue(e))
    return [So(e.enter), So(e.leave)];
  {
    const t = So(e);
    return [t, t];
  }
}
function So(e) {
  return nd(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[nr] || (e[nr] = /* @__PURE__ */ new Set())).add(t);
}
function an(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[nr];
  n && (n.delete(t), n.size || (e[nr] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qm = 0;
function Oi(e, t, n, r) {
  const o = e._endId = ++qm, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = yu(e, t);
  if (!a)
    return r();
  const u = a + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, h), s();
  }, h = (p) => {
    p.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, i + 1), e.addEventListener(u, h);
}
function yu(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), o = r(`${sn}Delay`), s = r(`${sn}Duration`), a = Ci(o, s), i = r(`${gr}Delay`), l = r(`${gr}Duration`), u = Ci(i, l);
  let c = null, f = 0, h = 0;
  t === sn ? a > 0 && (c = sn, f = a, h = s.length) : t === gr ? u > 0 && (c = gr, f = u, h = l.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? sn : gr : null, h = c ? c === sn ? s.length : l.length : 0);
  const p = c === sn && /\b(?:transform|all)(?:,|$)/.test(
    r(`${sn}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: h,
    hasTransform: p
  };
}
function Ci(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ri(n) + Ri(e[r])));
}
function Ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Go(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ym(e, t, n) {
  const r = e[nr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), Xm = /* @__PURE__ */ Symbol("_vsh"), Jm = /* @__PURE__ */ Symbol(""), Qm = /(?:^|;)\s*display\s*:/;
function Zm(e, t, n) {
  const r = e.style, o = qe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (qe(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && ys(r, i, "");
        }
      else
        for (const a in t)
          n[a] == null && ys(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), ys(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[Jm];
      a && (n += ";" + a), r.cssText = n, s = Qm.test(n);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = s ? r.display : "", e[Xm] && (r.display = "none"));
}
const Ii = /\s*!important$/;
function ys(e, t, n) {
  if (he(n))
    n.forEach((r) => ys(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = eh(e, t);
    Ii.test(n) ? e.setProperty(
      yn(r),
      n.replace(Ii, ""),
      "important"
    ) : e[r] = n;
  }
}
const ki = ["Webkit", "Moz", "ms"], Ao = {};
function eh(e, t) {
  const n = Ao[t];
  if (n)
    return n;
  let r = gn(t);
  if (r !== "filter" && r in e)
    return Ao[t] = r;
  r = rc(r);
  for (let o = 0; o < ki.length; o++) {
    const s = ki[o] + r;
    if (s in e)
      return Ao[t] = s;
  }
  return t;
}
const xi = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, o, s = ld(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xi, t.slice(6, t.length)) : e.setAttributeNS(xi, t, n) : n == null || s && !oc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : tn(n) ? String(n) : n
  );
}
function Ni(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? hu(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = oc(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function Wn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function th(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Mi = /* @__PURE__ */ Symbol("_vei");
function nh(e, t, n, r, o = null) {
  const s = e[Mi] || (e[Mi] = {}), a = s[t];
  if (r && a)
    a.value = r;
  else {
    const [i, l] = rh(t);
    if (r) {
      const u = s[t] = ah(
        r,
        o
      );
      Wn(e, i, u, l);
    } else a && (th(e, i, a, l), s[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function rh(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Di); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yn(e.slice(2)), t];
}
let To = 0;
const sh = /* @__PURE__ */ Promise.resolve(), oh = () => To || (sh.then(() => To = 0), To = Date.now());
function ah(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xt(
      ih(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = oh(), n;
}
function ih(e, t) {
  if (he(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lh = (e, t, n, r, o, s) => {
  const a = o === "svg";
  t === "class" ? Ym(e, r, a) : t === "style" ? Zm(e, n, r) : Vs(t) ? ma(t) || nh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ch(e, t, r, a)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !qe(r)) ? Ni(e, gn(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, a));
};
function ch(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Fi(t) && qe(n) ? !1 : t in e;
}
const vu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ Symbol("_moveCb"), Ui = /* @__PURE__ */ Symbol("_enterCb"), uh = (e) => (delete e.props.mode, e), fh = /* @__PURE__ */ uh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ tt({}, gu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = en(), r = $c();
    let o, s;
    return Gc(() => {
      if (!o.length)
        return;
      const a = e.moveClass || `${e.name || "v"}-move`;
      if (!gh(
        o[0].el,
        n.vnode.el,
        a
      )) {
        o = [];
        return;
      }
      o.forEach(mh), o.forEach(hh);
      const i = o.filter(ph);
      Go(n.vnode.el), i.forEach((l) => {
        const u = l.el, c = u.style;
        Dt(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[Ps] = (h) => {
          h && h.target !== u || (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ps] = null, an(u, a));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const a = Ce(e), i = bu(a);
      let l = a.tag || He;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Dn(
            c,
            Dr(
              c,
              i,
              r,
              n
            )
          ), vu.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? Oa(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Dn(
          c,
          Dr(c, i, r, n)
        );
      }
      return ye(l, null, s);
    };
  }
}), dh = fh;
function mh(e) {
  const t = e.el;
  t[Ps] && t[Ps](), t[Ui] && t[Ui]();
}
function hh(e) {
  Eu.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function ph(e) {
  const t = vu.get(e), n = Eu.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function gh(e, t, n) {
  const r = e.cloneNode(), o = e[nr];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: a } = yu(r);
  return s.removeChild(r), a;
}
const $i = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => gs(t, n) : t;
};
function _h(e) {
  e.target.composing = !0;
}
function Hi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Oo = /* @__PURE__ */ Symbol("_assign");
function Vi(e, t, n) {
  return t && (e = e.trim()), n && (e = pa(e)), e;
}
const qo = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Oo] = $i(o);
    const s = r || o.props && o.props.type === "number";
    Wn(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Oo](Vi(e.value, n, s));
    }), (n || s) && Wn(e, "change", () => {
      e.value = Vi(e.value, n, s);
    }), t || (Wn(e, "compositionstart", _h), Wn(e, "compositionend", Hi), Wn(e, "change", Hi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, a) {
    if (e[Oo] = $i(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? pa(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, bh = ["ctrl", "shift", "alt", "meta"], yh = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => bh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = yh[t[a]];
      if (i && i(o, t)) return;
    }
    return e(o, ...s);
  }));
}, vh = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Rr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = yn(o.key);
    if (t.some(
      (a) => a === s || vh[a] === s
    ))
      return e(o);
  }));
}, Eh = /* @__PURE__ */ tt({ patchProp: lh }, Km);
let ji;
function wh() {
  return ji || (ji = Tm(Eh));
}
const Sh = ((...e) => {
  const t = wh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Th(r);
    if (!o) return;
    const s = t._component;
    !ve(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, Ah(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
});
function Ah(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Th(e) {
  return qe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let wu;
const eo = (e) => wu = e, Su = (
  /* istanbul ignore next */
  Symbol()
);
function Yo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Lr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Lr || (Lr = {}));
function Oh() {
  const e = ga(!0), t = e.run(() => Q({}));
  let n = [], r = [];
  const o = Sa({
    install(s) {
      eo(o), o._a = s, s.provide(Su, o), s.config.globalProperties.$pinia = o, r.forEach((a) => n.push(a)), r = [];
    },
    use(s) {
      return this._a ? n.push(s) : r.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return o;
}
const Au = () => {
};
function Bi(e, t, n, r = Au) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && cc() && uc(o), o;
}
function Hn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Ch = (e) => e(), Wi = Symbol(), Co = Symbol();
function Xo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Yo(o) && Yo(r) && e.hasOwnProperty(n) && !je(r) && !Xt(r) ? e[n] = Xo(o, r) : e[n] = r;
  }
  return e;
}
const Rh = (
  /* istanbul ignore next */
  Symbol()
);
function Lh(e) {
  return !Yo(e) || !e.hasOwnProperty(Rh);
}
const { assign: ln } = Object;
function Ih(e) {
  return !!(je(e) && e.effect);
}
function kh(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = o ? o() : {});
    const c = kd(n.state.value[e]);
    return ln(c, s, Object.keys(a || {}).reduce((f, h) => (f[h] = Sa(_e(() => {
      eo(n);
      const p = n._s.get(e);
      return a[h].call(p, p);
    })), f), {}));
  }
  return l = Tu(e, u, t, n, r, !0), l;
}
function Tu(e, t, n = {}, r, o, s) {
  let a;
  const i = ln({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], h = [], p;
  const S = r.state.value[e];
  !s && !S && (r.state.value[e] = {}), Q({});
  let w;
  function T(N) {
    let C;
    u = c = !1, typeof N == "function" ? (N(r.state.value[e]), C = {
      type: Lr.patchFunction,
      storeId: e,
      events: p
    }) : (Xo(r.state.value[e], N), C = {
      type: Lr.patchObject,
      payload: N,
      storeId: e,
      events: p
    });
    const j = w = Symbol();
    Xn().then(() => {
      w === j && (u = !0);
    }), c = !0, Hn(f, C, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: C } = n, j = C ? C() : {};
    this.$patch((te) => {
      ln(te, j);
    });
  } : (
    /* istanbul ignore next */
    Au
  );
  function x() {
    a.stop(), f = [], h = [], r._s.delete(e);
  }
  const y = (N, C = "") => {
    if (Wi in N)
      return N[Co] = C, N;
    const j = function() {
      eo(r);
      const te = Array.from(arguments), U = [], J = [];
      function ie(z) {
        U.push(z);
      }
      function de(z) {
        J.push(z);
      }
      Hn(h, {
        args: te,
        name: j[Co],
        store: k,
        after: ie,
        onError: de
      });
      let V;
      try {
        V = N.apply(this && this.$id === e ? this : k, te);
      } catch (z) {
        throw Hn(J, z), z;
      }
      return V instanceof Promise ? V.then((z) => (Hn(U, z), z)).catch((z) => (Hn(J, z), Promise.reject(z))) : (Hn(U, V), V);
    };
    return j[Wi] = !0, j[Co] = C, j;
  }, E = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Bi.bind(null, h),
    $patch: T,
    $reset: v,
    $subscribe(N, C = {}) {
      const j = Bi(f, N, C.detached, () => te()), te = a.run(() => yt(() => r.state.value[e], (U) => {
        (C.flush === "sync" ? c : u) && N({
          storeId: e,
          type: Lr.direct,
          events: p
        }, U);
      }, ln({}, l, C)));
      return j;
    },
    $dispose: x
  }, k = Gs(E);
  r._s.set(e, k);
  const D = (r._a && r._a.runWithContext || Ch)(() => r._e.run(() => (a = ga()).run(() => t({ action: y }))));
  for (const N in D) {
    const C = D[N];
    if (je(C) && !Ih(C) || Xt(C))
      s || (S && Lh(C) && (je(C) ? C.value = S[N] : Xo(C, S[N])), r.state.value[e][N] = C);
    else if (typeof C == "function") {
      const j = y(C, N);
      D[N] = j, i.actions[N] = C;
    }
  }
  return ln(k, D), ln(Ce(k), D), Object.defineProperty(k, "$state", {
    get: () => r.state.value[e],
    set: (N) => {
      T((C) => {
        ln(C, N);
      });
    }
  }), r._p.forEach((N) => {
    ln(k, a.run(() => N({
      store: k,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), S && s && n.hydrate && n.hydrate(k.$state, S), u = !0, c = !0, k;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xa(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function a(i, l) {
    const u = jd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? Jn(Su, null) : null), i && eo(i), i = wu, i._s.has(r) || (s ? Tu(r, t, o, i) : kh(r, o, i)), i._s.get(r);
  }
  return a.$id = r, a;
}
const xh = ["stroke-width"], Ph = ["d"], ze = /* @__PURE__ */ nn({
  __name: "Icon",
  props: {
    name: {},
    size: { default: "md" },
    strokeWidth: { default: 1.5 }
  },
  setup(e) {
    const t = e, n = {
      // Actions
      play: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z",
      refresh: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
      edit: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
      trash: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
      plus: "M12 4.5v15m7.5-7.5h-15",
      search: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
      more: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      // Status & Info
      chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
      clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
      link: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
      sync: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3",
      // Navigation
      chevronDown: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      chevronRight: "M8.25 4.5l7.5 7.5-7.5 7.5",
      chevronLeft: "M15.75 19.5L8.25 12l7.5-7.5",
      // UI Elements
      check: "M4.5 12.75l6 6 9-13.5",
      x: "M6 18L18 6M6 6l12 12",
      eye: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
      eyeOff: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88",
      cog: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      grid: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
      chat: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
      lightbulb: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
      // Navigation & Arrows
      arrowRight: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3",
      arrowLeft: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
      arrowUp: "M5 10l7-7m0 0l7 7m-7-7v18",
      arrowDown: "M19 14l-7 7m0 0l-7-7m7 7V3",
      arrowsUpDown: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
      chevronUp: "M5 15l7-7 7 7",
      externalLink: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
      // Status & Indicators
      checkCircle: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      xCircle: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
      exclamationCircle: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
      exclamationTriangle: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      // Awards
      trophy: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11.25h-1.5A3.375 3.375 0 008.25 14.25v4.5m8.25-12V6.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5m0 0V9a.75.75 0 01-.75.75H9.75A.75.75 0 019 9V8.25m0 0V6.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5m12 0h.008v.008h-.008V8.25zm-12 0h.008v.008H5.25V8.25z",
      infoCircle: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
      questionCircle: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      // User & Account
      user: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
      userCircle: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      userPlus: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
      users: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      // Files & Documents
      document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      copy: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      inbox: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
      // Actions
      download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
      upload: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
      filter: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z",
      globe: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
      sort: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9",
      // Security
      key: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
      lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
      shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
      // UI Elements
      menu: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
      calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
      home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
      terminal: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
      gift: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
      creditCard: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
      mail: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
      // Data & Analytics
      chartBar: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      trendingUp: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
      cube: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      // Notification
      bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      // Misc
      bolt: "M13 10V3L4 14h7v7l9-11h-7z",
      sparkles: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
      cloud: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
      server: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
      sun: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
      moon: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
      book: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
      dollar: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      ban: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
      login: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
      swap: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
      beaker: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
      cpu: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      chatBubble: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      calculator: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      fire: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      badge: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
      brain: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m0 0l-2.69 2.689c-1.232 1.232-.65 3.318 1.067 3.611A48.309 48.309 0 0012 21c2.773 0 5.491-.235 8.135-.687 1.718-.293 2.3-2.379 1.067-3.61L19.8 15.3M12 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0v3m-3-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0h6m-3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    }, r = _e(() => n[t.name]), o = _e(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (s, a) => (ge(), Se("svg", {
      class: Ge(o.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      H("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, Ph)
    ], 10, xh));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Nh(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ns = typeof window < "u", vn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Mh = (e, t, n) => Dh({ l: e, k: t, s: n }), Dh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), Fh = (e) => Cu(e) === "[object Date]", bn = (e) => Cu(e) === "[object RegExp]", to = (e) => be(e) && Object.keys(e).length === 0, at = Object.assign, Uh = Object.create, Pe = (e = null) => Uh(e);
let Ki;
const kn = () => Ki || (Ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Pe());
function zi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Gi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $h(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Gi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Gi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Hh = Object.prototype.hasOwnProperty;
function Lt(e, t) {
  return Hh.call(e, t);
}
const Ve = Array.isArray, Fe = (e) => typeof e == "function", se = (e) => typeof e == "string", Te = (e) => typeof e == "boolean", Le = (e) => e !== null && typeof e == "object", Vh = (e) => Le(e) && Fe(e.then) && Fe(e.catch), Ou = Object.prototype.toString, Cu = (e) => Ou.call(e), be = (e) => {
  if (!Le(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, jh = (e) => e == null ? "" : Ve(e) || be(e) && e.toString === Ou ? JSON.stringify(e, null, 2) : String(e);
function Bh(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function no(e) {
  let t = e;
  return () => ++t;
}
const is = (e) => !Le(e) || Ve(e);
function vs(e, t) {
  if (is(e) || is(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (Le(r[s]) && !Le(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : Pe()), is(o[s]) || is(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Wh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ms(e, t, n) {
  return { start: e, end: t };
}
const Kh = /\{([0-9a-zA-Z]+)\}/g;
function Ru(e, ...t) {
  return t.length === 1 && zh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Kh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Lu = Object.assign, qi = (e) => typeof e == "string", zh = (e) => e !== null && typeof e == "object";
function Iu(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Pa = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Gh = {
  [Pa.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function qh(e, t, ...n) {
  const r = Ru(Gh[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const me = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, Yh = {
  // tokenizer error messages
  [me.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [me.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [me.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [me.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [me.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [me.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [me.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [me.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [me.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [me.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [me.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [me.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [me.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [me.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [me.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function cr(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, a = Ru((o || Yh)[e] || "", ...s || []), i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Xh(e) {
  throw e;
}
const Bt = " ", Jh = "\r", pt = `
`, Qh = "\u2028", Zh = "\u2029";
function ep(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const a = (D) => t[D] === Jh && t[D + 1] === pt, i = (D) => t[D] === pt, l = (D) => t[D] === Zh, u = (D) => t[D] === Qh, c = (D) => a(D) || i(D) || l(D) || u(D), f = () => n, h = () => r, p = () => o, S = () => s, w = (D) => a(D) || l(D) || u(D) ? pt : t[D], T = () => w(n), v = () => w(n + s);
  function x() {
    return s = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function y() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function k(D = 0) {
    s = D;
  }
  function O() {
    const D = n + s;
    for (; D !== n; )
      x();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: p,
    peekOffset: S,
    charAt: w,
    currentChar: T,
    currentPeek: v,
    next: x,
    peek: y,
    reset: E,
    resetPeek: k,
    skipToPeek: O
  };
}
const on = void 0, tp = ".", Yi = "'", np = "tokenizer";
function rp(e, t = {}) {
  const n = t.location !== !1, r = ep(e), o = () => r.index(), s = () => Wh(r.line(), r.column(), r.index()), a = s(), i = o(), l = {
    currentType: 14,
    offset: i,
    startLoc: a,
    endLoc: a,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function f(d, m, R, ...F) {
    const ee = u();
    if (m.column += R, m.offset += R, c) {
      const q = n ? Ms(ee.startLoc, m) : null, I = cr(d, q, {
        domain: np,
        args: F
      });
      c(I);
    }
  }
  function h(d, m, R) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return n && (F.loc = Ms(d.startLoc, d.endLoc)), R != null && (F.value = R), F;
  }
  const p = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function S(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (f(me.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function w(d) {
    let m = "";
    for (; d.currentPeek() === Bt || d.currentPeek() === pt; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function T(d) {
    const m = w(d);
    return d.skipToPeek(), m;
  }
  function v(d) {
    if (d === on)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function x(d) {
    if (d === on)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function y(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    w(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function E(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    w(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), ee = x(F);
    return d.resetPeek(), ee;
  }
  function k(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    w(d);
    const F = d.currentPeek() === Yi;
    return d.resetPeek(), F;
  }
  function O(d, m) {
    const { currentType: R } = m;
    if (R !== 8)
      return !1;
    w(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function D(d, m) {
    const { currentType: R } = m;
    if (R !== 9)
      return !1;
    w(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function N(d, m) {
    const { currentType: R } = m;
    if (!(R === 8 || R === 12))
      return !1;
    w(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function C(d, m) {
    const { currentType: R } = m;
    if (R !== 10)
      return !1;
    const F = () => {
      const q = d.currentPeek();
      return q === "{" ? v(d.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === Bt || !q ? !1 : q === pt ? (d.peek(), F()) : U(d, !1);
    }, ee = F();
    return d.resetPeek(), ee;
  }
  function j(d) {
    w(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function te(d) {
    const m = w(d), R = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: R,
      hasSpace: m.length > 0
    };
  }
  function U(d, m = !0) {
    const R = (ee = !1, q = "", I = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? q === "%" ? !1 : ee : $ === "@" || !$ ? q === "%" ? !0 : ee : $ === "%" ? (d.peek(), R(ee, "%", !0)) : $ === "|" ? q === "%" || I ? !0 : !(q === Bt || q === pt) : $ === Bt ? (d.peek(), R(!0, Bt, I)) : $ === pt ? (d.peek(), R(!0, pt, I)) : !0;
    }, F = R();
    return m && d.resetPeek(), F;
  }
  function J(d, m) {
    const R = d.currentChar();
    return R === on ? on : m(R) ? (d.next(), R) : null;
  }
  function ie(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function de(d) {
    return J(d, ie);
  }
  function V(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function z(d) {
    return J(d, V);
  }
  function ae(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Re(d) {
    return J(d, ae);
  }
  function xe(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function fe(d) {
    return J(d, xe);
  }
  function we(d) {
    let m = "", R = "";
    for (; m = Re(d); )
      R += m;
    return R;
  }
  function Ne(d) {
    T(d);
    const m = d.currentChar();
    return m !== "%" && f(me.EXPECTED_TOKEN, s(), 0, m), d.next(), "%";
  }
  function Xe(d) {
    let m = "";
    for (; ; ) {
      const R = d.currentChar();
      if (R === "{" || R === "}" || R === "@" || R === "|" || !R)
        break;
      if (R === "%")
        if (U(d))
          m += R, d.next();
        else
          break;
      else if (R === Bt || R === pt)
        if (U(d))
          m += R, d.next();
        else {
          if (j(d))
            break;
          m += R, d.next();
        }
      else
        m += R, d.next();
    }
    return m;
  }
  function We(d) {
    T(d);
    let m = "", R = "";
    for (; m = z(d); )
      R += m;
    return d.currentChar() === on && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R;
  }
  function pe(d) {
    T(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${we(d)}`) : m += we(d), d.currentChar() === on && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function W(d) {
    return d !== Yi && d !== pt;
  }
  function re(d) {
    T(d), S(d, "'");
    let m = "", R = "";
    for (; m = J(d, W); )
      m === "\\" ? R += oe(d) : R += m;
    const F = d.currentChar();
    return F === pt || F === on ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === pt && (d.next(), S(d, "'")), R) : (S(d, "'"), R);
  }
  function oe(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Oe(d, m, 4);
      case "U":
        return Oe(d, m, 6);
      default:
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Oe(d, m, R) {
    S(d, m);
    let F = "";
    for (let ee = 0; ee < R; ee++) {
      const q = fe(d);
      if (!q) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += q;
    }
    return `\\${m}${F}`;
  }
  function Ke(d) {
    return d !== "{" && d !== "}" && d !== Bt && d !== pt;
  }
  function g(d) {
    T(d);
    let m = "", R = "";
    for (; m = J(d, Ke); )
      R += m;
    return R;
  }
  function _(d) {
    let m = "", R = "";
    for (; m = de(d); )
      R += m;
    return R;
  }
  function b(d) {
    const m = (R) => {
      const F = d.currentChar();
      return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Bt ? R : (R += F, d.next(), m(R));
    };
    return m("");
  }
  function P(d) {
    T(d);
    const m = S(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return T(d), m;
  }
  function L(d, m) {
    let R = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(d), m.braceNest++, R;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && f(me.EMPTY_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && T(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), R;
      case "@":
        return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R = M(d, m) || p(m), m.braceNest = 0, R;
      default: {
        let ee = !0, q = !0, I = !0;
        if (j(d))
          return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, Y(d, m);
        if (ee = y(d, m))
          return R = h(m, 5, We(d)), T(d), R;
        if (q = E(d, m))
          return R = h(m, 6, pe(d)), T(d), R;
        if (I = k(d, m))
          return R = h(m, 7, re(d)), T(d), R;
        if (!ee && !q && !I)
          return R = h(m, 13, g(d)), f(me.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, R.value), T(d), R;
        break;
      }
    }
    return R;
  }
  function M(d, m) {
    const { currentType: R } = m;
    let F = null;
    const ee = d.currentChar();
    switch ((R === 8 || R === 9 || R === 12 || R === 10) && (ee === pt || ee === Bt) && f(me.INVALID_LINKED_FORMAT, s(), 0), ee) {
      case "@":
        return d.next(), F = h(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, F;
      case ".":
        return T(d), d.next(), h(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(d), d.next(), h(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return j(d) ? (F = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, F) : O(d, m) || N(d, m) ? (T(d), M(d, m)) : D(d, m) ? (T(d), h(m, 12, _(d))) : C(d, m) ? (T(d), ee === "{" ? L(d, m) || F : h(m, 11, b(d))) : (R === 8 && f(me.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, Y(d, m));
    }
  }
  function Y(d, m) {
    let R = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return L(d, m) || p(m);
    if (m.inLinked)
      return M(d, m) || p(m);
    switch (d.currentChar()) {
      case "{":
        return L(d, m) || p(m);
      case "}":
        return f(me.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(d, m) || p(m);
      default: {
        if (j(d))
          return R = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, R;
        const { isModulo: ee, hasSpace: q } = te(d);
        if (ee)
          return q ? h(m, 0, Xe(d)) : h(m, 4, Ne(d));
        if (U(d))
          return h(m, 0, Xe(d));
        break;
      }
    }
    return R;
  }
  function G() {
    const { currentType: d, offset: m, startLoc: R, endLoc: F } = l;
    return l.lastType = d, l.lastOffset = m, l.lastStartLoc = R, l.lastEndLoc = F, l.offset = o(), l.startLoc = s(), r.currentChar() === on ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : Y(r, l);
  }
  return {
    nextToken: G,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const sp = "parser", op = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ap(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function ip(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(y, E, k, O, ...D) {
    const N = y.currentPosition();
    if (N.offset += O, N.column += O, n) {
      const C = t ? Ms(k, N) : null, j = cr(E, C, {
        domain: sp,
        args: D
      });
      n(j);
    }
  }
  function s(y, E, k, O, ...D) {
    const N = y.currentPosition();
    if (N.offset += O, N.column += O, r) {
      const C = t ? Ms(k, N) : null;
      r(qh(E, C, D));
    }
  }
  function a(y, E, k) {
    const O = { type: y };
    return t && (O.start = E, O.end = E, O.loc = { start: k, end: k }), O;
  }
  function i(y, E, k, O) {
    t && (y.end = E, y.loc && (y.loc.end = k));
  }
  function l(y, E) {
    const k = y.context(), O = a(3, k.offset, k.startLoc);
    return O.value = E, i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function u(y, E) {
    const k = y.context(), { lastOffset: O, lastStartLoc: D } = k, N = a(5, O, D);
    return N.index = parseInt(E, 10), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function c(y, E, k) {
    const O = y.context(), { lastOffset: D, lastStartLoc: N } = O, C = a(4, D, N);
    return C.key = E, k === !0 && (C.modulo = !0), y.nextToken(), i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function f(y, E) {
    const k = y.context(), { lastOffset: O, lastStartLoc: D } = k, N = a(9, O, D);
    return N.value = E.replace(op, ap), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const E = y.nextToken(), k = y.context(), { lastOffset: O, lastStartLoc: D } = k, N = a(8, O, D);
    return E.type !== 12 ? (o(y, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", i(N, O, D), {
      nextConsumeToken: E,
      node: N
    }) : (E.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Rt(E)), N.value = E.value || "", i(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function p(y, E) {
    const k = y.context(), O = a(7, k.offset, k.startLoc);
    return O.value = E, i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function S(y) {
    const E = y.context(), k = a(6, E.offset, E.startLoc);
    let O = y.nextToken();
    if (O.type === 9) {
      const D = h(y);
      k.modifier = D.node, O = D.nextConsumeToken || y.nextToken();
    }
    switch (O.type !== 10 && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(O)), O = y.nextToken(), O.type === 2 && (O = y.nextToken()), O.type) {
      case 11:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(O)), k.key = p(y, O.value || "");
        break;
      case 5:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(O)), k.key = c(y, O.value || "");
        break;
      case 6:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(O)), k.key = u(y, O.value || "");
        break;
      case 7:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(O)), k.key = f(y, O.value || "");
        break;
      default: {
        o(y, me.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const D = y.context(), N = a(7, D.offset, D.startLoc);
        return N.value = "", i(N, D.offset, D.startLoc), k.key = N, i(k, D.offset, D.startLoc), {
          nextConsumeToken: O,
          node: k
        };
      }
    }
    return i(k, y.currentOffset(), y.currentPosition()), {
      node: k
    };
  }
  function w(y) {
    const E = y.context(), k = E.currentType === 1 ? y.currentOffset() : E.offset, O = E.currentType === 1 ? E.endLoc : E.startLoc, D = a(2, k, O);
    D.items = [];
    let N = null, C = null;
    do {
      const U = N || y.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(U)), D.items.push(l(y, U.value || ""));
          break;
        case 6:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(U)), D.items.push(u(y, U.value || ""));
          break;
        case 4:
          C = !0;
          break;
        case 5:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(U)), D.items.push(c(y, U.value || "", !!C)), C && (s(y, Pa.USE_MODULO_SYNTAX, E.lastStartLoc, 0, Rt(U)), C = null);
          break;
        case 7:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Rt(U)), D.items.push(f(y, U.value || ""));
          break;
        case 8: {
          const J = S(y);
          D.items.push(J.node), N = J.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    const j = E.currentType === 1 ? E.lastOffset : y.currentOffset(), te = E.currentType === 1 ? E.lastEndLoc : y.currentPosition();
    return i(D, j, te), D;
  }
  function T(y, E, k, O) {
    const D = y.context();
    let N = O.items.length === 0;
    const C = a(1, E, k);
    C.cases = [], C.cases.push(O);
    do {
      const j = w(y);
      N || (N = j.items.length === 0), C.cases.push(j);
    } while (D.currentType !== 14);
    return N && o(y, me.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function v(y) {
    const E = y.context(), { offset: k, startLoc: O } = E, D = w(y);
    return E.currentType === 14 ? D : T(y, k, O, D);
  }
  function x(y) {
    const E = rp(y, Lu({}, e)), k = E.context(), O = a(0, k.offset, k.startLoc);
    return t && O.loc && (O.loc.source = y), O.body = v(E), e.onCacheKey && (O.cacheKey = e.onCacheKey(y)), k.currentType !== 14 && o(E, me.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, y[k.offset] || ""), i(O, E.currentOffset(), E.currentPosition()), O;
  }
  return { parse: x };
}
function Rt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function lp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Xi(e, t) {
  for (let n = 0; n < e.length; n++)
    Na(e[n], t);
}
function Na(e, t) {
  switch (e.type) {
    case 1:
      Xi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Xi(e.items, t);
      break;
    case 6: {
      Na(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function cp(e, t = {}) {
  const n = lp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Na(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function up(e) {
  const t = e.body;
  return t.type === 2 ? Ji(t) : t.cases.forEach((n) => Ji(n)), e;
}
function Ji(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Iu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const fp = "minifier";
function Kn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Kn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Kn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Kn(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Kn(t.key), t.k = t.key, delete t.key, t.modifier && (Kn(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw cr(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: fp,
        args: [e.type]
      });
  }
  delete e.type;
}
const dp = "parser";
function mp(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, s = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  s && e.loc && (a.source = e.loc.source);
  const i = () => a;
  function l(w, T) {
    a.code += w;
  }
  function u(w, T = !0) {
    const v = T ? r : "";
    l(o ? v + "  ".repeat(w) : v);
  }
  function c(w = !0) {
    const T = ++a.indentLevel;
    w && u(T);
  }
  function f(w = !0) {
    const T = --a.indentLevel;
    w && u(T);
  }
  function h() {
    u(a.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: c,
    deindent: f,
    newline: h,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function hp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), rr(e, t.key), t.modifier ? (e.push(", "), rr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function pp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (rr(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function gp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (rr(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function _p(e, t) {
  t.body ? rr(e, t.body) : e.push("null");
}
function rr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      _p(e, t);
      break;
    case 1:
      gp(e, t);
      break;
    case 2:
      pp(e, t);
      break;
    case 6:
      hp(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw cr(me.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: dp,
        args: [t.type]
      });
  }
}
const bp = (e, t = {}) => {
  const n = qi(t.mode) ? t.mode : "normal", r = qi(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = mp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${Iu(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), rr(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function yp(e, t = {}) {
  const n = Lu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = ip(n).parse(e);
  return r ? (s && up(i), o && Kn(i), { ast: i, code: "" }) : (cp(i, n), bp(i, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function vp() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (kn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Vt(e) {
  return Le(e) && Ma(e) === 0 && (Lt(e, "b") || Lt(e, "body"));
}
const ku = ["b", "body"];
function Ep(e) {
  return En(e, ku);
}
const xu = ["c", "cases"];
function wp(e) {
  return En(e, xu, []);
}
const Pu = ["s", "static"];
function Sp(e) {
  return En(e, Pu);
}
const Nu = ["i", "items"];
function Ap(e) {
  return En(e, Nu, []);
}
const Mu = ["t", "type"];
function Ma(e) {
  return En(e, Mu);
}
const Du = ["v", "value"];
function ls(e, t) {
  const n = En(e, Du);
  if (n != null)
    return n;
  throw Vr(t);
}
const Fu = ["m", "modifier"];
function Tp(e) {
  return En(e, Fu);
}
const Uu = ["k", "key"];
function Op(e) {
  const t = En(e, Uu);
  if (t)
    return t;
  throw Vr(
    6
    /* NodeTypes.Linked */
  );
}
function En(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Lt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const $u = [
  ...ku,
  ...xu,
  ...Pu,
  ...Nu,
  ...Uu,
  ...Fu,
  ...Du,
  ...Mu
];
function Vr(e) {
  return new Error(`unhandled node type: ${e}`);
}
const wn = [];
wn[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
wn[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
wn[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
wn[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
wn[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
wn[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
wn[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Cp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Rp(e) {
  return Cp.test(e);
}
function Lp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ip(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function kp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Rp(t) ? Lp(t) : "*" + t;
}
function xp(e) {
  const t = [];
  let n = -1, r = 0, o = 0, s, a, i, l, u, c, f;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = i : a += i;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), o++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, a === void 0 || (a = kp(a), a === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const S = e[n + 1];
    if (r === 5 && S === "'" || r === 6 && S === '"')
      return n++, i = "\\" + S, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && p())) {
      if (l = Ip(s), f = wn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = h[u[1]], c && (i = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Qi = /* @__PURE__ */ new Map();
function Pp(e, t) {
  return Le(e) ? e[t] : null;
}
function Np(e, t) {
  if (!Le(e))
    return null;
  let n = Qi.get(t);
  if (n || (n = xp(t), n && Qi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const a = n[s];
    if ($u.includes(a) && Vt(o))
      return null;
    const i = o[a];
    if (i === void 0 || Fe(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Mp = (e) => e, Dp = (e) => "", Fp = "text", Up = (e) => e.length === 0 ? "" : Bh(e), $p = jh;
function Zi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Hp(e) {
  const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t;
}
function Vp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function jp(e = {}) {
  const t = e.locale, n = Hp(e), r = Le(e.pluralRules) && se(t) && Fe(e.pluralRules[t]) ? e.pluralRules[t] : Zi, o = Le(e.pluralRules) && se(t) && Fe(e.pluralRules[t]) ? Zi : void 0, s = (v) => v[r(n, v.length, o)], a = e.list || [], i = (v) => a[v], l = e.named || Pe();
  Ye(e.pluralIndex) && Vp(n, l);
  const u = (v) => l[v];
  function c(v) {
    const x = Fe(e.messages) ? e.messages(v) : Le(e.messages) ? e.messages[v] : !1;
    return x || (e.parent ? e.parent.message(v) : Dp);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : Mp, h = be(e.processor) && Fe(e.processor.normalize) ? e.processor.normalize : Up, p = be(e.processor) && Fe(e.processor.interpolate) ? e.processor.interpolate : $p, S = be(e.processor) && se(e.processor.type) ? e.processor.type : Fp, T = {
    list: i,
    named: u,
    plural: s,
    linked: (v, ...x) => {
      const [y, E] = x;
      let k = "text", O = "";
      x.length === 1 ? Le(y) ? (O = y.modifier || O, k = y.type || k) : se(y) && (O = y || O) : x.length === 2 && (se(y) && (O = y || O), se(E) && (k = E || k));
      const D = c(v)(T), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        k === "vnode" && Ve(D) && O ? D[0] : D
      );
      return O ? f(O)(N, k) : N;
    },
    message: c,
    type: S,
    interpolate: p,
    normalize: h,
    values: at(Pe(), a, l)
  };
  return T;
}
let jr = null;
function Bp(e) {
  jr = e;
}
function Wp(e, t, n) {
  jr && jr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Kp = /* @__PURE__ */ zp(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function zp(e) {
  return (t) => jr && jr.emit(e, t);
}
const Gp = Pa.__EXTEND_POINT__, On = no(Gp), qp = {
  // 2
  FALLBACK_TO_TRANSLATE: On(),
  // 3
  CANNOT_FORMAT_NUMBER: On(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: On(),
  // 5
  CANNOT_FORMAT_DATE: On(),
  // 6
  FALLBACK_TO_DATE_FORMAT: On(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: On(),
  // 8
  __EXTEND_POINT__: On()
  // 9
}, Hu = me.__EXTEND_POINT__, Cn = no(Hu), $t = {
  INVALID_ARGUMENT: Hu,
  // 17
  INVALID_DATE_ARGUMENT: Cn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Cn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Cn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Cn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Cn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Cn(),
  // 23
  __EXTEND_POINT__: Cn()
  // 24
};
function Yt(e) {
  return cr(e, null, void 0);
}
function Da(e, t) {
  return t.locale != null ? el(t.locale) : el(e.locale);
}
let Ro;
function el(e) {
  if (se(e))
    return e;
  if (Fe(e)) {
    if (e.resolvedOnce && Ro != null)
      return Ro;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Vh(t))
        throw Yt($t.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ro = t;
    } else
      throw Yt($t.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Yt($t.NOT_SUPPORT_LOCALE_TYPE);
}
function Yp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ve(t) ? t : Le(t) ? Object.keys(t) : se(t) ? [t] : [n]
  ])];
}
function Vu(e, t, n) {
  const r = se(n) ? n : sr, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let a = [n];
    for (; Ve(a); )
      a = tl(s, a, t);
    const i = Ve(t) || !be(t) ? t : t.default ? t.default : null;
    a = se(i) ? [i] : i, Ve(a) && tl(s, a, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function tl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Te(r); o++) {
    const s = t[o];
    se(s) && (r = Xp(e, t[o], n));
  }
  return r;
}
function Xp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Jp(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Jp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ve(n) || be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Qp = "9.14.5", ro = -1, sr = "en-US", nl = "", rl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Zp() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? rl(e) : t === "vnode" && Le(e) && "__v_isVNode" in e ? rl(e.children) : e
  };
}
let ju;
function eg(e) {
  ju = e;
}
let Bu;
function tg(e) {
  Bu = e;
}
let Wu;
function ng(e) {
  Wu = e;
}
let Ku = null;
const rg = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ku = e;
}, sg = /* @__NO_SIDE_EFFECTS__ */ () => Ku;
let zu = null;
const sl = (e) => {
  zu = e;
}, og = () => zu;
let ol = 0;
function ag(e = {}) {
  const t = Fe(e.onWarn) ? e.onWarn : Nh, n = se(e.version) ? e.version : Qp, r = se(e.locale) || Fe(e.locale) ? e.locale : sr, o = Fe(r) ? sr : r, s = Ve(e.fallbackLocale) || be(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = be(e.messages) ? e.messages : Lo(o), i = be(e.datetimeFormats) ? e.datetimeFormats : Lo(o), l = be(e.numberFormats) ? e.numberFormats : Lo(o), u = at(Pe(), e.modifiers, Zp()), c = e.pluralRules || Pe(), f = Fe(e.missing) ? e.missing : null, h = Te(e.missingWarn) || bn(e.missingWarn) ? e.missingWarn : !0, p = Te(e.fallbackWarn) || bn(e.fallbackWarn) ? e.fallbackWarn : !0, S = !!e.fallbackFormat, w = !!e.unresolving, T = Fe(e.postTranslation) ? e.postTranslation : null, v = be(e.processor) ? e.processor : null, x = Te(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, E = Fe(e.messageCompiler) ? e.messageCompiler : ju, k = Fe(e.messageResolver) ? e.messageResolver : Bu || Pp, O = Fe(e.localeFallbacker) ? e.localeFallbacker : Wu || Yp, D = Le(e.fallbackContext) ? e.fallbackContext : void 0, N = e, C = Le(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), j = Le(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), te = Le(N.__meta) ? N.__meta : {};
  ol++;
  const U = {
    version: n,
    cid: ol,
    locale: r,
    fallbackLocale: s,
    messages: a,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: h,
    fallbackWarn: p,
    fallbackFormat: S,
    unresolving: w,
    postTranslation: T,
    processor: v,
    warnHtmlMessage: x,
    escapeParameter: y,
    messageCompiler: E,
    messageResolver: k,
    localeFallbacker: O,
    fallbackContext: D,
    onWarn: t,
    __meta: te
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = C, U.__numberFormatters = j, __INTLIFY_PROD_DEVTOOLS__ && Wp(U, n, te), U;
}
const Lo = (e) => ({ [e]: Pe() });
function Fa(e, t, n, r, o) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const i = s(e, n, t, o);
    return se(i) ? i : t;
  } else
    return t;
}
function _r(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ig(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function lg(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (ig(e, t[r]))
      return !0;
  return !1;
}
function Io(e) {
  return (n) => cg(n, e);
}
function cg(e, t) {
  const n = Ep(t);
  if (n == null)
    throw Vr(
      0
      /* NodeTypes.Resource */
    );
  if (Ma(n) === 1) {
    const s = wp(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      al(e, i)
    ], []));
  } else
    return al(e, n);
}
function al(e, t) {
  const n = Sp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Ap(t).reduce((o, s) => [...o, Jo(e, s)], []);
    return e.normalize(r);
  }
}
function Jo(e, t) {
  const n = Ma(t);
  switch (n) {
    case 3:
      return ls(t, n);
    case 9:
      return ls(t, n);
    case 4: {
      const r = t;
      if (Lt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Lt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Vr(n);
    }
    case 5: {
      const r = t;
      if (Lt(r, "i") && Ye(r.i))
        return e.interpolate(e.list(r.i));
      if (Lt(r, "index") && Ye(r.index))
        return e.interpolate(e.list(r.index));
      throw Vr(n);
    }
    case 6: {
      const r = t, o = Tp(r), s = Op(r);
      return e.linked(Jo(e, s), o ? Jo(e, o) : void 0, e.type);
    }
    case 7:
      return ls(t, n);
    case 8:
      return ls(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ug = (e) => e;
let cs = Pe();
function fg(e, t = {}) {
  let n = !1;
  const r = t.onError || Xh;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...yp(e, t), detectError: n };
}
function dg(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    Te(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || ug)(e), o = cs[r];
    if (o)
      return o;
    const { ast: s, detectError: a } = fg(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Io(s);
    return a ? i : cs[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = cs[n];
      return r || (cs[n] = Io(e));
    } else
      return Io(e);
  }
}
const il = () => "", Ct = (e) => Fe(e);
function ll(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = Qo(...t), c = Te(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Te(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Te(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, p = !!u.resolvedMessage, S = se(u.default) || Te(u.default) ? Te(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", w = n || S !== "", T = Da(e, u);
  h && mg(u);
  let [v, x, y] = p ? [
    l,
    T,
    i[T] || Pe()
  ] : Gu(e, l, T, a, f, c), E = v, k = l;
  if (!p && !(se(E) || Vt(E) || Ct(E)) && w && (E = S, k = E), !p && (!(se(E) || Vt(E) || Ct(E)) || !se(x)))
    return o ? ro : l;
  let O = !1;
  const D = () => {
    O = !0;
  }, N = Ct(E) ? E : qu(e, l, x, E, k, D);
  if (O)
    return E;
  const C = gg(e, x, y, u), j = jp(C), te = hg(e, N, j);
  let U = r ? r(te, l) : te;
  if (h && se(U) && (U = $h(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: se(l) ? l : Ct(E) ? E.key : "",
      locale: x || (Ct(E) ? E.locale : ""),
      format: se(E) ? E : Ct(E) ? E.source : "",
      message: U
    };
    J.meta = at({}, e.__meta, /* @__PURE__ */ sg() || {}), Kp(J);
  }
  return U;
}
function mg(e) {
  Ve(e.list) ? e.list = e.list.map((t) => se(t) ? zi(t) : t) : Le(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = zi(e.named[t]));
  });
}
function Gu(e, t, n, r, o, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = Pe(), h, p = null;
  const S = "translate";
  for (let w = 0; w < c.length && (h = c[w], f = a[h] || Pe(), (p = l(f, t)) === null && (p = f[t]), !(se(p) || Vt(p) || Ct(p))); w++)
    if (!lg(h, c)) {
      const T = Fa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        s,
        S
      );
      T !== t && (p = T);
    }
  return [p, h, f];
}
function qu(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Ct(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = a(r, pg(e, n, o, r, i, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function hg(e, t, n) {
  return t(n);
}
function Qo(...e) {
  const [t, n, r] = e, o = Pe();
  if (!se(t) && !Ye(t) && !Ct(t) && !Vt(t))
    throw Yt($t.INVALID_ARGUMENT);
  const s = Ye(t) ? String(t) : (Ct(t), t);
  return Ye(n) ? o.plural = n : se(n) ? o.default = n : be(n) && !to(n) ? o.named = n : Ve(n) && (o.list = n), Ye(r) ? o.plural = r : se(r) ? o.default = r : be(r) && at(o, r), [s, o];
}
function pg(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => Mh(t, n, a)
  };
}
function gg(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (p) => {
      let S = a(n, p);
      if (S == null && c) {
        const [, , w] = Gu(c, p, t, i, l, u);
        S = a(w, p);
      }
      if (se(S) || Vt(S)) {
        let w = !1;
        const v = qu(e, p, t, S, p, () => {
          w = !0;
        });
        return w ? il : v;
      } else return Ct(S) ? S : il;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ye(r.plural) && (h.pluralIndex = r.plural), h;
}
function cl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, c, f] = Zo(...t), h = Te(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Te(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, S = Da(e, c), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    S
  );
  if (!se(l) || l === "")
    return new Intl.DateTimeFormat(S, f).format(u);
  let T = {}, v, x = null;
  const y = "datetime format";
  for (let O = 0; O < w.length && (v = w[O], T = n[v] || {}, x = T[l], !be(x)); O++)
    Fa(e, l, v, h, y);
  if (!be(x) || !se(v))
    return r ? ro : l;
  let E = `${v}__${l}`;
  to(f) || (E = `${E}__${JSON.stringify(f)}`);
  let k = i.get(E);
  return k || (k = new Intl.DateTimeFormat(v, at({}, x, f)), i.set(E, k)), p ? k.formatToParts(u) : k.format(u);
}
const Yu = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Zo(...e) {
  const [t, n, r, o] = e, s = Pe();
  let a = Pe(), i;
  if (se(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Yt($t.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Yt($t.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Fh(t)) {
    if (isNaN(t.getTime()))
      throw Yt($t.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ye(t))
    i = t;
  else
    throw Yt($t.INVALID_ARGUMENT);
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Yu.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : be(r) && (a = r), be(o) && (a = o), [s.key || "", i, s, a];
}
function ul(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function fl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, c, f] = ea(...t), h = Te(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Te(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, S = Da(e, c), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    S
  );
  if (!se(l) || l === "")
    return new Intl.NumberFormat(S, f).format(u);
  let T = {}, v, x = null;
  const y = "number format";
  for (let O = 0; O < w.length && (v = w[O], T = n[v] || {}, x = T[l], !be(x)); O++)
    Fa(e, l, v, h, y);
  if (!be(x) || !se(v))
    return r ? ro : l;
  let E = `${v}__${l}`;
  to(f) || (E = `${E}__${JSON.stringify(f)}`);
  let k = i.get(E);
  return k || (k = new Intl.NumberFormat(v, at({}, x, f)), i.set(E, k)), p ? k.formatToParts(u) : k.format(u);
}
const Xu = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function ea(...e) {
  const [t, n, r, o] = e, s = Pe();
  let a = Pe();
  if (!Ye(t))
    throw Yt($t.INVALID_ARGUMENT);
  const i = t;
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Xu.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : be(r) && (a = r), be(o) && (a = o), [s.key || "", i, s, a];
}
function dl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
vp();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _g = "9.14.5";
function bg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (kn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (kn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (kn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const yg = qp.__EXTEND_POINT__, Wt = no(yg);
Wt(), Wt(), Wt(), Wt(), Wt(), Wt(), Wt(), Wt(), Wt();
const Ju = $t.__EXTEND_POINT__, vt = no(Ju), et = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ju,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: vt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: vt(),
  // 26
  NOT_INSTALLED: vt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: vt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: vt(),
  // 29
  INVALID_VALUE: vt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: vt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: vt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: vt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: vt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: vt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: vt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: vt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: vt()
  // 38
};
function nt(e, ...t) {
  return cr(e, null, void 0);
}
const ta = /* @__PURE__ */ vn("__translateVNode"), na = /* @__PURE__ */ vn("__datetimeParts"), ra = /* @__PURE__ */ vn("__numberParts"), Qu = vn("__setPluralRules"), Zu = /* @__PURE__ */ vn("__injectWithOption"), sa = /* @__PURE__ */ vn("__dispose");
function Br(e) {
  if (!Le(e) || Vt(e))
    return e;
  for (const t in e)
    if (Lt(e, t))
      if (!t.includes("."))
        Le(e[t]) && Br(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = Pe()), !Le(o[n[a]])) {
            s = !0;
            break;
          }
          o = o[n[a]];
        }
        if (s || (Vt(o) ? $u.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Vt(o)) {
          const a = o[n[r]];
          Le(a) && Br(a);
        }
      }
  return e;
}
function so(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, a = be(n) ? n : Ve(r) ? Pe() : { [e]: Pe() };
  if (Ve(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || Pe(), vs(u, a[l])) : vs(u, a);
    } else
      se(i) && vs(JSON.parse(i), a);
  }), o == null && s)
    for (const i in a)
      Lt(a, i) && Br(a[i]);
  return a;
}
function ef(e) {
  return e.type;
}
function tf(e, t, n) {
  let r = Le(t.messages) ? t.messages : Pe();
  "__i18nGlobal" in n && (r = so(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Le(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (Le(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function ml(e) {
  return ye(qr, null, e, 0);
}
const hl = "__INTLIFY_META__", pl = () => [], vg = () => !1;
let gl = 0;
function _l(e) {
  return ((t, n, r, o) => e(n, r, en() || void 0, o));
}
const Eg = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = en();
  let t = null;
  return e && (t = ef(e)[hl]) ? { [hl]: t } : null;
};
function Ua(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, a = Ns ? Q : Tc, i = !!e.translateExistCompatible;
  let l = Te(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : se(e.locale) ? e.locale : sr
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = a(so(u.value, e)), h = a(be(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), p = a(be(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let S = n ? n.missingWarn : Te(e.missingWarn) || bn(e.missingWarn) ? e.missingWarn : !0, w = n ? n.fallbackWarn : Te(e.fallbackWarn) || bn(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : Te(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, x = Fe(e.missing) ? e.missing : null, y = Fe(e.missing) ? _l(e.missing) : null, E = Fe(e.postTranslation) ? e.postTranslation : null, k = n ? n.warnHtmlMessage : Te(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter;
  const D = n ? n.modifiers : be(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, C;
  C = (() => {
    o && sl(null);
    const I = {
      version: _g,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: D,
      pluralRules: N,
      missing: y === null ? void 0 : y,
      missingWarn: S,
      fallbackWarn: w,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: k,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    I.datetimeFormats = h.value, I.numberFormats = p.value, I.__datetimeFormatters = be(C) ? C.__datetimeFormatters : void 0, I.__numberFormatters = be(C) ? C.__numberFormatters : void 0;
    const $ = ag(I);
    return o && sl($), $;
  })(), _r(C, u.value, c.value);
  function te() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      p.value
    ];
  }
  const U = _e({
    get: () => u.value,
    set: (I) => {
      u.value = I, C.locale = u.value;
    }
  }), J = _e({
    get: () => c.value,
    set: (I) => {
      c.value = I, C.fallbackLocale = c.value, _r(C, u.value, I);
    }
  }), ie = _e(() => f.value), de = /* @__PURE__ */ _e(() => h.value), V = /* @__PURE__ */ _e(() => p.value);
  function z() {
    return Fe(E) ? E : null;
  }
  function ae(I) {
    E = I, C.postTranslation = I;
  }
  function Re() {
    return x;
  }
  function xe(I) {
    I !== null && (y = _l(I)), x = I, C.missing = y;
  }
  const fe = (I, $, ce, Ae, $e, rt) => {
    te();
    let Je;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (C.fallbackContext = n ? og() : void 0), Je = I(C);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (C.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ye(Je) && Je === ro || ce === "translate exists" && !Je) {
      const [Nt, dr] = $();
      return n && T ? Ae(n) : $e(Nt);
    } else {
      if (rt(Je))
        return Je;
      throw nt(et.UNEXPECTED_RETURN_TYPE);
    }
  };
  function we(...I) {
    return fe(($) => Reflect.apply(ll, null, [$, ...I]), () => Qo(...I), "translate", ($) => Reflect.apply($.t, $, [...I]), ($) => $, ($) => se($));
  }
  function Ne(...I) {
    const [$, ce, Ae] = I;
    if (Ae && !Le(Ae))
      throw nt(et.INVALID_ARGUMENT);
    return we($, ce, at({ resolvedMessage: !0 }, Ae || {}));
  }
  function Xe(...I) {
    return fe(($) => Reflect.apply(cl, null, [$, ...I]), () => Zo(...I), "datetime format", ($) => Reflect.apply($.d, $, [...I]), () => nl, ($) => se($));
  }
  function We(...I) {
    return fe(($) => Reflect.apply(fl, null, [$, ...I]), () => ea(...I), "number format", ($) => Reflect.apply($.n, $, [...I]), () => nl, ($) => se($));
  }
  function pe(I) {
    return I.map(($) => se($) || Ye($) || Te($) ? ml(String($)) : $);
  }
  const re = {
    normalize: pe,
    interpolate: (I) => I,
    type: "vnode"
  };
  function oe(...I) {
    return fe(
      ($) => {
        let ce;
        const Ae = $;
        try {
          Ae.processor = re, ce = Reflect.apply(ll, null, [Ae, ...I]);
        } finally {
          Ae.processor = null;
        }
        return ce;
      },
      () => Qo(...I),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ta](...I),
      ($) => [ml($)],
      ($) => Ve($)
    );
  }
  function Oe(...I) {
    return fe(
      ($) => Reflect.apply(fl, null, [$, ...I]),
      () => ea(...I),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ra](...I),
      pl,
      ($) => se($) || Ve($)
    );
  }
  function Ke(...I) {
    return fe(
      ($) => Reflect.apply(cl, null, [$, ...I]),
      () => Zo(...I),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[na](...I),
      pl,
      ($) => se($) || Ve($)
    );
  }
  function g(I) {
    N = I, C.pluralRules = N;
  }
  function _(I, $) {
    return fe(() => {
      if (!I)
        return !1;
      const ce = se($) ? $ : u.value, Ae = L(ce), $e = C.messageResolver(Ae, I);
      return i ? $e != null : Vt($e) || Ct($e) || se($e);
    }, () => [I], "translate exists", (ce) => Reflect.apply(ce.te, ce, [I, $]), vg, (ce) => Te(ce));
  }
  function b(I) {
    let $ = null;
    const ce = Vu(C, c.value, u.value);
    for (let Ae = 0; Ae < ce.length; Ae++) {
      const $e = f.value[ce[Ae]] || {}, rt = C.messageResolver($e, I);
      if (rt != null) {
        $ = rt;
        break;
      }
    }
    return $;
  }
  function P(I) {
    const $ = b(I);
    return $ ?? (n ? n.tm(I) || {} : {});
  }
  function L(I) {
    return f.value[I] || {};
  }
  function M(I, $) {
    if (s) {
      const ce = { [I]: $ };
      for (const Ae in ce)
        Lt(ce, Ae) && Br(ce[Ae]);
      $ = ce[I];
    }
    f.value[I] = $, C.messages = f.value;
  }
  function Y(I, $) {
    f.value[I] = f.value[I] || {};
    const ce = { [I]: $ };
    if (s)
      for (const Ae in ce)
        Lt(ce, Ae) && Br(ce[Ae]);
    $ = ce[I], vs($, f.value[I]), C.messages = f.value;
  }
  function G(I) {
    return h.value[I] || {};
  }
  function d(I, $) {
    h.value[I] = $, C.datetimeFormats = h.value, ul(C, I, $);
  }
  function m(I, $) {
    h.value[I] = at(h.value[I] || {}, $), C.datetimeFormats = h.value, ul(C, I, $);
  }
  function R(I) {
    return p.value[I] || {};
  }
  function F(I, $) {
    p.value[I] = $, C.numberFormats = p.value, dl(C, I, $);
  }
  function ee(I, $) {
    p.value[I] = at(p.value[I] || {}, $), C.numberFormats = p.value, dl(C, I, $);
  }
  gl++, n && Ns && (yt(n.locale, (I) => {
    l && (u.value = I, C.locale = I, _r(C, u.value, c.value));
  }), yt(n.fallbackLocale, (I) => {
    l && (c.value = I, C.fallbackLocale = I, _r(C, u.value, c.value));
  }));
  const q = {
    id: gl,
    locale: U,
    fallbackLocale: J,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(I) {
      l = I, I && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, _r(C, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: ie,
    get modifiers() {
      return D;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return S;
    },
    set missingWarn(I) {
      S = I, C.missingWarn = S;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(I) {
      w = I, C.fallbackWarn = w;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(I) {
      T = I;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(I) {
      v = I, C.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(I) {
      k = I, C.warnHtmlMessage = I;
    },
    get escapeParameter() {
      return O;
    },
    set escapeParameter(I) {
      O = I, C.escapeParameter = I;
    },
    t: we,
    getLocaleMessage: L,
    setLocaleMessage: M,
    mergeLocaleMessage: Y,
    getPostTranslationHandler: z,
    setPostTranslationHandler: ae,
    getMissingHandler: Re,
    setMissingHandler: xe,
    [Qu]: g
  };
  return q.datetimeFormats = de, q.numberFormats = V, q.rt = Ne, q.te = _, q.tm = P, q.d = Xe, q.n = We, q.getDateTimeFormat = G, q.setDateTimeFormat = d, q.mergeDateTimeFormat = m, q.getNumberFormat = R, q.setNumberFormat = F, q.mergeNumberFormat = ee, q[Zu] = r, q[ta] = oe, q[na] = Ke, q[ra] = Oe, q;
}
function wg(e) {
  const t = se(e.locale) ? e.locale : sr, n = se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Fe(e.missing) ? e.missing : void 0, o = Te(e.silentTranslationWarn) || bn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Te(e.silentFallbackWarn) || bn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = Te(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = be(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Fe(e.postTranslation) ? e.postTranslation : void 0, f = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, p = Te(e.sync) ? e.sync : !0;
  let S = e.messages;
  if (be(e.sharedMessages)) {
    const O = e.sharedMessages;
    S = Object.keys(O).reduce((N, C) => {
      const j = N[C] || (N[C] = {});
      return at(j, O[C]), N;
    }, S || {});
  }
  const { __i18n: w, __root: T, __injectWithOption: v } = e, x = e.datetimeFormats, y = e.numberFormats, E = e.flatJson, k = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: S,
    flatJson: E,
    datetimeFormats: x,
    numberFormats: y,
    missing: r,
    missingWarn: o,
    fallbackWarn: s,
    fallbackRoot: a,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: f,
    escapeParameter: h,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    translateExistCompatible: k,
    __i18n: w,
    __root: T,
    __injectWithOption: v
  };
}
function oa(e = {}, t) {
  {
    const n = Ua(wg(e)), { __extender: r } = e, o = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(s) {
        n.locale.value = s;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(s) {
        n.fallbackLocale.value = s;
      },
      // messages
      get messages() {
        return n.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return n.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return n.availableLocales;
      },
      // formatter
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(s) {
        n.setMissingHandler(s);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return Te(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = Te(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return Te(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = Te(s) ? !s : s;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(s) {
        n.fallbackFormat = s;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(s) {
        n.setPostTranslationHandler(s);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(s) {
        n.inheritLocale = s;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(s) {
        n.warnHtmlMessage = s !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(s) {
        n.escapeParameter = s;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return !0;
      },
      set preserveDirectiveContent(s) {
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...s) {
        const [a, i, l] = s, u = {};
        let c = null, f = null;
        if (!se(a))
          throw nt(et.INVALID_ARGUMENT);
        const h = a;
        return se(i) ? u.locale = i : Ve(i) ? c = i : be(i) && (f = i), Ve(l) ? c = l : be(l) && (f = l), Reflect.apply(n.t, n, [
          h,
          c || f || {},
          u
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [a, i, l] = s, u = { plural: 1 };
        let c = null, f = null;
        if (!se(a))
          throw nt(et.INVALID_ARGUMENT);
        const h = a;
        return se(i) ? u.locale = i : Ye(i) ? u.plural = i : Ve(i) ? c = i : be(i) && (f = i), se(l) ? u.locale = l : Ve(l) ? c = l : be(l) && (f = l), Reflect.apply(n.t, n, [
          h,
          c || f || {},
          u
        ]);
      },
      // te
      te(s, a) {
        return n.te(s, a);
      },
      // tm
      tm(s) {
        return n.tm(s);
      },
      // getLocaleMessage
      getLocaleMessage(s) {
        return n.getLocaleMessage(s);
      },
      // setLocaleMessage
      setLocaleMessage(s, a) {
        n.setLocaleMessage(s, a);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(s, a) {
        n.mergeLocaleMessage(s, a);
      },
      // d
      d(...s) {
        return Reflect.apply(n.d, n, [...s]);
      },
      // getDateTimeFormat
      getDateTimeFormat(s) {
        return n.getDateTimeFormat(s);
      },
      // setDateTimeFormat
      setDateTimeFormat(s, a) {
        n.setDateTimeFormat(s, a);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(s, a) {
        n.mergeDateTimeFormat(s, a);
      },
      // n
      n(...s) {
        return Reflect.apply(n.n, n, [...s]);
      },
      // getNumberFormat
      getNumberFormat(s) {
        return n.getNumberFormat(s);
      },
      // setNumberFormat
      setNumberFormat(s, a) {
        n.setNumberFormat(s, a);
      },
      // mergeNumberFormat
      mergeNumberFormat(s, a) {
        n.mergeNumberFormat(s, a);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(s, a) {
        return -1;
      }
    };
    return o.__extender = r, o;
  }
}
const $a = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Sg({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === He ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Pe());
}
function nf(e) {
  return He;
}
const Ag = /* @__PURE__ */ nn({
  /* eslint-disable */
  name: "i18n-t",
  props: at({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Ye(e) || !isNaN(e)
    }
  }, $a),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Xr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), a = Pe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = se(e.plural) ? +e.plural : e.plural);
      const i = Sg(t, s), l = o[ta](e.keypath, i, a), u = at(Pe(), r), c = se(e.tag) || Le(e.tag) ? e.tag : nf();
      return Hr(c, u, l);
    };
  }
}), bl = Ag;
function Tg(e) {
  return Ve(e) && !se(e[0]);
}
function rf(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = Pe();
    e.locale && (a.locale = e.locale), se(e.format) ? a.key = e.format : Le(e.format) && (se(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((h, p) => n.includes(p) ? at(Pe(), h, { [p]: e.format[p] }) : h, Pe()));
    const l = r(e.value, a, i);
    let u = [a.key];
    Ve(l) ? u = l.map((h, p) => {
      const S = o[h.type], w = S ? S({ [h.type]: h.value, index: p, parts: l }) : [h.value];
      return Tg(w) && (w[0].key = `${h.type}-${p}`), w;
    }) : se(l) && (u = [l]);
    const c = at(Pe(), s), f = se(e.tag) || Le(e.tag) ? e.tag : nf();
    return Hr(f, c, u);
  };
}
const Og = /* @__PURE__ */ nn({
  /* eslint-disable */
  name: "i18n-n",
  props: at({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, $a),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Xr({
      useScope: e.scope,
      __useComponent: !0
    });
    return rf(e, t, Xu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ra](...r)
    ));
  }
}), yl = Og, Cg = /* @__PURE__ */ nn({
  /* eslint-disable */
  name: "i18n-d",
  props: at({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, $a),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Xr({
      useScope: e.scope,
      __useComponent: !0
    });
    return rf(e, t, Yu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[na](...r)
    ));
  }
}), vl = Cg;
function Rg(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Lg(e) {
  const t = (a) => {
    const { instance: i, modifiers: l, value: u } = a;
    if (!i || !i.$)
      throw nt(et.UNEXPECTED_ERROR);
    const c = Rg(e, i.$), f = El(u);
    return [
      Reflect.apply(c.t, c, [...wl(f)]),
      c
    ];
  };
  return {
    created: (a, i) => {
      const [l, u] = t(i);
      Ns && e.global === u && (a.__i18nWatcher = yt(u.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      Ns && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: i }) => {
      if (a.__composer) {
        const l = a.__composer, u = El(i);
        a.textContent = Reflect.apply(l.t, l, [
          ...wl(u)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [i] = t(a);
      return { textContent: i };
    }
  };
}
function El(e) {
  if (se(e))
    return { path: e };
  if (be(e)) {
    if (!("path" in e))
      throw nt(et.REQUIRED_VALUE, "path");
    return e;
  } else
    throw nt(et.INVALID_VALUE);
}
function wl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, a = {}, i = r || {};
  return se(n) && (a.locale = n), Ye(o) && (a.plural = o), Ye(s) && (a.plural = s), [t, i, a];
}
function Ig(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (Te(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : bl.name, "I18nT"].forEach((a) => e.component(a, bl)), [yl.name, "I18nN"].forEach((a) => e.component(a, yl)), [vl.name, "I18nD"].forEach((a) => e.component(a, vl))), e.directive("t", Lg(t));
}
function kg(e, t, n) {
  return {
    beforeCreate() {
      const r = en();
      if (!r)
        throw nt(et.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Sl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = oa(s);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = Sl(e, o);
        else {
          this.$i18n = oa({
            __i18n: o.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      o.__i18nGlobal && tf(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, a) => this.$i18n.te(s, a), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = en();
      if (!r)
        throw nt(et.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Sl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Qu](t.pluralizationRules || e.pluralizationRules);
  const n = so(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const xg = /* @__PURE__ */ vn("global-vue-i18n");
function Pg(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Te(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Te(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [a, i] = Ng(e, n), l = /* @__PURE__ */ vn("");
  function u(h) {
    return s.get(h) || null;
  }
  function c(h, p) {
    s.set(h, p);
  }
  function f(h) {
    s.delete(h);
  }
  {
    const h = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return o;
      },
      // install plugin
      async install(p, ...S) {
        if (p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, h), be(S[0])) {
          const v = S[0];
          h.__composerExtend = v.__composerExtend, h.__vueI18nExtend = v.__vueI18nExtend;
        }
        let w = null;
        !n && r && (w = Bg(p, h.global)), __VUE_I18N_FULL_INSTALL__ && Ig(p, h, ...S), __VUE_I18N_LEGACY_API__ && n && p.mixin(kg(i, i.__composer, h));
        const T = p.unmount;
        p.unmount = () => {
          w && w(), h.dispose(), T();
        };
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        a.stop();
      },
      // @internal
      __instances: s,
      // @internal
      __getInstance: u,
      // @internal
      __setInstance: c,
      // @internal
      __deleteInstance: f
    };
    return h;
  }
}
function Xr(e = {}) {
  const t = en();
  if (t == null)
    throw nt(et.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw nt(et.NOT_INSTALLED);
  const n = Mg(t), r = Fg(n), o = ef(t), s = Dg(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw nt(et.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Vg(t, s, r, e);
  }
  if (s === "global")
    return tf(r, e, o), r;
  if (s === "parent") {
    let l = Ug(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = at({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Ua(l), a.__composerExtend && (i[sa] = a.__composerExtend(i)), Hg(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Ng(e, t, n) {
  const r = ga();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => oa(e)) : r.run(() => Ua(e));
    if (o == null)
      throw nt(et.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Mg(e) {
  {
    const t = Jn(e.isCE ? xg : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw nt(e.isCE ? et.NOT_INSTALLED_WITH_PROVIDE : et.UNEXPECTED_ERROR);
    return t;
  }
}
function Dg(e, t) {
  return to(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Fg(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ug(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = $g(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[Zu] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function $g(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Hg(e, t, n) {
  lr(() => {
  }, t), Gr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[sa];
    o && (o(), delete r[sa]);
  }, t);
}
function Vg(e, t, n, r = {}) {
  const o = t === "local", s = Tc(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw nt(et.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = Te(r.inheritLocale) ? r.inheritLocale : !se(r.locale), i = Q(
    // prettier-ignore
    !o || a ? n.locale.value : se(r.locale) ? r.locale : sr
  ), l = Q(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : se(r.fallbackLocale) || Ve(r.fallbackLocale) || be(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = Q(so(i.value, r)), c = Q(be(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = Q(be(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), h = o ? n.missingWarn : Te(r.missingWarn) || bn(r.missingWarn) ? r.missingWarn : !0, p = o ? n.fallbackWarn : Te(r.fallbackWarn) || bn(r.fallbackWarn) ? r.fallbackWarn : !0, S = o ? n.fallbackRoot : Te(r.fallbackRoot) ? r.fallbackRoot : !0, w = !!r.fallbackFormat, T = Fe(r.missing) ? r.missing : null, v = Fe(r.postTranslation) ? r.postTranslation : null, x = o ? n.warnHtmlMessage : Te(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, y = !!r.escapeParameter, E = o ? n.modifiers : be(r.modifiers) ? r.modifiers : {}, k = r.pluralRules || o && n.pluralRules;
  function O() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const D = _e({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (b) => {
      s.value && (s.value.locale.value = b), i.value = b;
    }
  }), N = _e({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (b) => {
      s.value && (s.value.fallbackLocale.value = b), l.value = b;
    }
  }), C = _e(() => s.value ? s.value.messages.value : u.value), j = _e(() => c.value), te = _e(() => f.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function J(b) {
    s.value && s.value.setPostTranslationHandler(b);
  }
  function ie() {
    return s.value ? s.value.getMissingHandler() : T;
  }
  function de(b) {
    s.value && s.value.setMissingHandler(b);
  }
  function V(b) {
    return O(), b();
  }
  function z(...b) {
    return s.value ? V(() => Reflect.apply(s.value.t, null, [...b])) : V(() => "");
  }
  function ae(...b) {
    return s.value ? Reflect.apply(s.value.rt, null, [...b]) : "";
  }
  function Re(...b) {
    return s.value ? V(() => Reflect.apply(s.value.d, null, [...b])) : V(() => "");
  }
  function xe(...b) {
    return s.value ? V(() => Reflect.apply(s.value.n, null, [...b])) : V(() => "");
  }
  function fe(b) {
    return s.value ? s.value.tm(b) : {};
  }
  function we(b, P) {
    return s.value ? s.value.te(b, P) : !1;
  }
  function Ne(b) {
    return s.value ? s.value.getLocaleMessage(b) : {};
  }
  function Xe(b, P) {
    s.value && (s.value.setLocaleMessage(b, P), u.value[b] = P);
  }
  function We(b, P) {
    s.value && s.value.mergeLocaleMessage(b, P);
  }
  function pe(b) {
    return s.value ? s.value.getDateTimeFormat(b) : {};
  }
  function W(b, P) {
    s.value && (s.value.setDateTimeFormat(b, P), c.value[b] = P);
  }
  function re(b, P) {
    s.value && s.value.mergeDateTimeFormat(b, P);
  }
  function oe(b) {
    return s.value ? s.value.getNumberFormat(b) : {};
  }
  function Oe(b, P) {
    s.value && (s.value.setNumberFormat(b, P), f.value[b] = P);
  }
  function Ke(b, P) {
    s.value && s.value.mergeNumberFormat(b, P);
  }
  const g = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: D,
    fallbackLocale: N,
    messages: C,
    datetimeFormats: j,
    numberFormats: te,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : a;
    },
    set inheritLocale(b) {
      s.value && (s.value.inheritLocale = b);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : E;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : k;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : h;
    },
    set missingWarn(b) {
      s.value && (s.value.missingWarn = b);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : p;
    },
    set fallbackWarn(b) {
      s.value && (s.value.missingWarn = b);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : S;
    },
    set fallbackRoot(b) {
      s.value && (s.value.fallbackRoot = b);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : w;
    },
    set fallbackFormat(b) {
      s.value && (s.value.fallbackFormat = b);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : x;
    },
    set warnHtmlMessage(b) {
      s.value && (s.value.warnHtmlMessage = b);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : y;
    },
    set escapeParameter(b) {
      s.value && (s.value.escapeParameter = b);
    },
    t: z,
    getPostTranslationHandler: U,
    setPostTranslationHandler: J,
    getMissingHandler: ie,
    setMissingHandler: de,
    rt: ae,
    d: Re,
    n: xe,
    tm: fe,
    te: we,
    getLocaleMessage: Ne,
    setLocaleMessage: Xe,
    mergeLocaleMessage: We,
    getDateTimeFormat: pe,
    setDateTimeFormat: W,
    mergeDateTimeFormat: re,
    getNumberFormat: oe,
    setNumberFormat: Oe,
    mergeNumberFormat: Ke
  };
  function _(b) {
    b.locale.value = i.value, b.fallbackLocale.value = l.value, Object.keys(u.value).forEach((P) => {
      b.mergeLocaleMessage(P, u.value[P]);
    }), Object.keys(c.value).forEach((P) => {
      b.mergeDateTimeFormat(P, c.value[P]);
    }), Object.keys(f.value).forEach((P) => {
      b.mergeNumberFormat(P, f.value[P]);
    }), b.escapeParameter = y, b.fallbackFormat = w, b.fallbackRoot = S, b.fallbackWarn = p, b.missingWarn = h, b.warnHtmlMessage = x;
  }
  return zc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw nt(et.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const b = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = b.locale.value, l.value = b.fallbackLocale.value, u.value = b.messages.value, c.value = b.datetimeFormats.value, f.value = b.numberFormats.value) : o && _(b);
  }), g;
}
const jg = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Al = ["t", "rt", "d", "n", "tm", "te"];
function Bg(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return jg.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw nt(et.UNEXPECTED_ERROR);
    const a = je(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        s.value.value = i;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, o, a);
  }), e.config.globalProperties.$i18n = n, Al.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw nt(et.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Al.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
bg();
eg(dg);
tg(Np);
ng(Vu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = kn();
  e.__INTLIFY__ = !0, Bp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Wg = "sub2api_locale", Ha = "en", Kg = {
  en: () => import("./index-Cd_2Lby2.js"),
  zh: () => import("./index-DIg8WdAu.js")
};
function sf(e) {
  return e === "en" || e === "zh";
}
function zg() {
  const e = localStorage.getItem(Wg);
  return e && sf(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Ha;
}
const Zn = Pg({
  legacy: !1,
  locale: zg(),
  fallbackLocale: Ha,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Tl = /* @__PURE__ */ new Set();
async function of(e) {
  if (Tl.has(e))
    return;
  const t = Kg[e], n = await t();
  Zn.global.setLocaleMessage(e, n.default), Tl.add(e);
}
async function Gg() {
  const e = af();
  await of(e), document.documentElement.setAttribute("lang", e);
}
function af() {
  const e = Zn.global.locale.value;
  return sf(e) ? e : Ha;
}
function lf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qg } = Object.prototype, { getPrototypeOf: or } = Object, { iterator: Jr, toStringTag: cf } = Symbol, Ds = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Ds(n, t))
      return !0;
    n = or(n);
  }
  return !1;
}, Yg = (e, t) => e != null && Wr(e, t) ? e[t] : void 0, Va = /* @__PURE__ */ ((e) => (t) => {
  const n = qg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => Va(t) === e), oo = (e) => (t) => typeof t === e, { isArray: Fn } = Array, ar = oo("undefined");
function ur(e) {
  return e !== null && !ar(e) && e.constructor !== null && !ar(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const uf = Pt("ArrayBuffer");
function Xg(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && uf(e.buffer), t;
}
const Jg = oo("string"), wt = oo("function"), ff = oo("number"), fr = (e) => e !== null && typeof e == "object", Qg = (e) => e === !0 || e === !1, Es = (e) => {
  if (!fr(e))
    return !1;
  const t = or(e);
  return (t === null || t === Object.prototype || or(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Wr(e, cf) && !Wr(e, Jr);
}, Zg = (e) => {
  if (!fr(e) || ur(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, e0 = Pt("Date"), t0 = Pt("File"), n0 = (e) => !!(e && typeof e.uri < "u"), r0 = (e) => e && typeof e.getParts < "u", s0 = Pt("Blob"), o0 = Pt("FileList"), a0 = (e) => fr(e) && wt(e.pipe);
function i0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ol = i0(), Cl = typeof Ol.FormData < "u" ? Ol.FormData : void 0, l0 = (e) => {
  if (!e) return !1;
  if (Cl && e instanceof Cl) return !0;
  const t = or(e);
  if (!t || t === Object.prototype || !wt(e.append)) return !1;
  const n = Va(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && wt(e.toString) && e.toString() === "[object FormData]";
}, c0 = Pt("URLSearchParams"), [u0, f0, d0, m0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Pt), h0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Fn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (ur(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let i;
    for (r = 0; r < a; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function df(e, t) {
  if (ur(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mf = (e) => !ar(e) && e !== xn;
function aa(...e) {
  const { caseless: t, skipUndefined: n } = mf(this) && this || {}, r = {}, o = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && typeof a == "string" && df(r, a) || a, l = Ds(r, i) ? r[i] : void 0;
    Es(l) && Es(s) ? r[i] = aa(l, s) : Es(s) ? r[i] = aa({}, s) : Fn(s) ? r[i] = s.slice() : (!n || !ar(s)) && (r[i] = s);
  };
  for (let s = 0, a = e.length; s < a; s++) {
    const i = e[s];
    if (!i || ur(i) || (Qr(i, o), typeof i != "object" || Fn(i)))
      continue;
    const l = Object.getOwnPropertySymbols(i);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      O0.call(i, c) && o(i[c], c);
    }
  }
  return r;
}
const p0 = (e, t, n, { allOwnKeys: r } = {}) => (Qr(
  t,
  (o, s) => {
    n && wt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: lf(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
      __proto__: null,
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), g0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), _0 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, b0 = (e, t, n, r) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && or(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, y0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, v0 = (e) => {
  if (!e) return null;
  if (Fn(e)) return e;
  let t = e.length;
  if (!ff(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, E0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && or(Uint8Array)), w0 = (e, t) => {
  const r = (e && e[Jr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, S0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, A0 = Pt("HTMLFormElement"), T0 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: O0 } = Object.prototype, C0 = Pt("RegExp"), hf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Qr(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, R0 = (e) => {
  hf(e, (t, n) => {
    if (wt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (wt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, L0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Fn(e) ? r(e) : r(String(e).split(t)), n;
}, I0 = () => {
}, k0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function x0(e) {
  return !!(e && wt(e.append) && e[cf] === "FormData" && e[Jr]);
}
const P0 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (fr(r)) {
      if (t.has(r))
        return;
      if (ur(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Fn(r) ? [] : {};
        return Qr(r, (s, a) => {
          const i = n(s);
          !ar(i) && (o[a] = i);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, N0 = Pt("AsyncFunction"), M0 = (e) => e && (fr(e) || wt(e)) && wt(e.then) && wt(e.catch), pf = ((e, t) => e ? setImmediate : t ? ((n, r) => (xn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === xn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), xn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", wt(xn.postMessage)), D0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(xn) : typeof process < "u" && process.nextTick || pf, gf = (e) => e != null && wt(e[Jr]), F0 = (e) => e != null && Wr(e, Jr) && gf(e), A = {
  isArray: Fn,
  isArrayBuffer: uf,
  isBuffer: ur,
  isFormData: l0,
  isArrayBufferView: Xg,
  isString: Jg,
  isNumber: ff,
  isBoolean: Qg,
  isObject: fr,
  isPlainObject: Es,
  isEmptyObject: Zg,
  isReadableStream: u0,
  isRequest: f0,
  isResponse: d0,
  isHeaders: m0,
  isUndefined: ar,
  isDate: e0,
  isFile: t0,
  isReactNativeBlob: n0,
  isReactNative: r0,
  isBlob: s0,
  isRegExp: C0,
  isFunction: wt,
  isStream: a0,
  isURLSearchParams: c0,
  isTypedArray: E0,
  isFileList: o0,
  forEach: Qr,
  merge: aa,
  extend: p0,
  trim: h0,
  stripBOM: g0,
  inherits: _0,
  toFlatObject: b0,
  kindOf: Va,
  kindOfTest: Pt,
  endsWith: y0,
  toArray: v0,
  forEachEntry: w0,
  matchAll: S0,
  isHTMLForm: A0,
  hasOwnProperty: Ds,
  hasOwnProp: Ds,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Wr,
  getSafeProp: Yg,
  reduceDescriptors: hf,
  freezeMethods: R0,
  toObjectSet: L0,
  toCamelCase: T0,
  noop: I0,
  toFiniteNumber: k0,
  findKey: df,
  global: xn,
  isContextDefined: mf,
  isSpecCompliantForm: x0,
  toJSONObject: P0,
  isAsyncFn: N0,
  isThenable: M0,
  setImmediate: pf,
  asap: D0,
  isIterable: gf,
  isSafeIterable: F0
}, U0 = A.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && U0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function H0(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const V0 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), j0 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function ja(e, t) {
  return A.isArray(e) ? e.map((n) => ja(n, t)) : H0(String(e).replace(t, ""));
}
const B0 = (e) => ja(e, V0), W0 = (e) => ja(e, j0);
function _f(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return A.forEach(e.toJSON(), (n, r) => {
    t[r] = W0(n);
  }), t;
}
const Rl = Symbol("internals");
function br(e) {
  return e && String(e).trim().toLowerCase();
}
function ws(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(ws) : B0(String(e));
}
function K0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const z0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ko(e, t, n, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function G0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function q0(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(o, s, a) {
        return this[r].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(i, l, u) {
      const c = br(l);
      if (!c)
        return;
      const f = A.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = ws(i));
    }
    const a = (i, l) => A.forEach(i, (u, c) => s(u, c, l));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (A.isString(t) && (t = t.trim()) && !z0(t))
      a($0(t), n);
    else if (A.isObject(t) && A.isSafeIterable(t)) {
      let i = /* @__PURE__ */ Object.create(null), l, u;
      for (const c of t) {
        if (!A.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        u = c[0], A.hasOwnProp(i, u) ? (l = i[u], i[u] = A.isArray(l) ? [...l, c[1]] : [l, c[1]]) : i[u] = c[1];
      }
      a(i, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = br(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return K0(o);
        if (A.isFunction(n))
          return n.call(this, o, r);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = br(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ko(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = br(a), a) {
        const i = A.findKey(r, a);
        i && (!n || ko(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ko(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, s) => {
      const a = A.findKey(r, s);
      if (a) {
        n[a] = ws(o), delete n[s];
        return;
      }
      const i = t ? G0(s) : String(s).trim();
      i !== s && delete n[s], n[i] = ws(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && A.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Rl] = this[Rl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = br(a);
      r[i] || (q0(o, a), r[i] = !0);
    }
    return A.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
mt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
A.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(mt);
const Y0 = "[REDACTED ****]";
function X0(e) {
  if (A.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (A.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function J0(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || A.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof mt && (s = s.toJSON()), r.push(s);
    let a;
    if (A.isArray(s))
      a = [], s.forEach((i, l) => {
        const u = o(i);
        A.isUndefined(u) || (a[l] = u);
      });
    else {
      if (!A.isPlainObject(s) && X0(s))
        return r.pop(), s;
      a = /* @__PURE__ */ Object.create(null);
      for (const [i, l] of Object.entries(s)) {
        const u = n.has(i.toLowerCase()) ? Y0 : o(l);
        A.isUndefined(u) || (a[i] = u);
      }
    }
    return r.pop(), a;
  };
  return o(e);
}
let ne = class bf extends Error {
  static from(t, n, r, o, s, a) {
    const i = new bf(t.message, n || t.code, r, o, s);
    return Object.defineProperty(i, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), i.name = t.name, t.status != null && i.status == null && (i.status = t.status), a && Object.assign(i, a), i;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, o, s) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    const t = this.config, n = t && A.hasOwnProp(t, "redact") ? t.redact : void 0, r = A.isArray(n) && n.length > 0 ? J0(t, n) : A.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
ne.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ne.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ne.ECONNABORTED = "ECONNABORTED";
ne.ETIMEDOUT = "ETIMEDOUT";
ne.ECONNREFUSED = "ECONNREFUSED";
ne.ERR_NETWORK = "ERR_NETWORK";
ne.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ne.ERR_DEPRECATED = "ERR_DEPRECATED";
ne.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ne.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ne.ERR_CANCELED = "ERR_CANCELED";
ne.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ne.ERR_INVALID_URL = "ERR_INVALID_URL";
ne.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Q0 = null, yf = 100;
function ia(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function vf(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = vf(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Z0(e) {
  return A.isArray(e) && !e.some(ia);
}
const e_ = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ao(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(x, y) {
      return !A.isUndefined(y[x]);
    }
  );
  const r = n.metaTokens, o = n.visitor || S, s = n.dots, a = n.indexes, i = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? yf : n.maxDepth, u = i && A.isSpecCompliantForm(t), c = [];
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(v) {
    if (v === null) return "";
    if (A.isDate(v))
      return v.toISOString();
    if (A.isBoolean(v))
      return v.toString();
    if (!u && A.isBlob(v))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    if (A.isArrayBuffer(v) || A.isTypedArray(v)) {
      if (u && typeof i == "function")
        return new i([v]);
      if (typeof Buffer < "u")
        return Buffer.from(v);
      throw new ne("Blob is not supported. Use a Buffer instead.", ne.ERR_NOT_SUPPORT);
    }
    return v;
  }
  function h(v) {
    if (v > l)
      throw new ne(
        "Object is too deeply nested (" + v + " levels). Max depth: " + l,
        ne.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function p(v, x) {
    if (l === 1 / 0)
      return JSON.stringify(v);
    const y = [];
    return JSON.stringify(v, function(k, O) {
      if (!A.isObject(O))
        return O;
      for (; y.length && y[y.length - 1] !== this; )
        y.pop();
      return y.push(O), h(x + y.length - 1), O;
    });
  }
  function S(v, x, y) {
    let E = v;
    if (A.isReactNative(t) && A.isReactNativeBlob(v))
      return t.append(xo(y, x, s), f(v)), !1;
    if (v && !y && typeof v == "object") {
      if (A.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), v = p(v, 1);
      else if (A.isArray(v) && Z0(v) || (A.isFileList(v) || A.endsWith(x, "[]")) && (E = A.toArray(v)))
        return x = vf(x), E.forEach(function(O, D) {
          !(A.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? xo([x], D, s) : a === null ? x : x + "[]",
            f(O)
          );
        }), !1;
    }
    return ia(v) ? !0 : (t.append(xo(y, x, s), f(v)), !1);
  }
  const w = Object.assign(e_, {
    defaultVisitor: S,
    convertValue: f,
    isVisitable: ia
  });
  function T(v, x, y = 0) {
    if (!A.isUndefined(v)) {
      if (h(y), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + x.join("."));
      c.push(v), A.forEach(v, function(k, O) {
        (!(A.isUndefined(k) || k === null) && o.call(t, k, A.isString(O) ? O.trim() : O, x, w)) === !0 && T(k, x ? x.concat(O) : [O], y + 1);
      }), c.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Ll(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function Ba(e, t) {
  this._pairs = [], e && ao(e, this, t);
}
const Ef = Ba.prototype;
Ef.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ef.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Ll) : Ll;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function t_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = A.isFunction(n) ? {
    serialize: n
  } : n, o = A.getSafeProp(r, "encode") || t_, s = A.getSafeProp(r, "serialize");
  let a;
  if (s ? a = s(t, r) : a = A.isURLSearchParams(t) ? t.toString() : new Ba(t, r).toString(o), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Il {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Wa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, n_ = typeof URLSearchParams < "u" ? URLSearchParams : Ba, r_ = typeof FormData < "u" ? FormData : null, s_ = typeof Blob < "u" ? Blob : null, o_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: n_,
    FormData: r_,
    Blob: s_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ka = typeof window < "u" && typeof document < "u", la = typeof navigator == "object" && navigator || void 0, a_ = Ka && (!la || ["ReactNative", "NativeScript", "NS"].indexOf(la.product) < 0), i_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", l_ = Ka && window.location.href || "http://localhost", c_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ka,
  hasStandardBrowserEnv: a_,
  hasStandardBrowserWebWorkerEnv: i_,
  navigator: la,
  origin: l_
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...c_,
  ...o_
};
function u_(e, t) {
  return ao(e, new ot.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return ot.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const kl = yf;
function Sf(e) {
  if (e > kl)
    throw new ne(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + kl,
      ne.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function f_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Sf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function d_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Af(e) {
  function t(n, r, o, s) {
    Sf(s);
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = s >= n.length;
    return a = !a && A.isArray(o) ? o.length : a, l ? (A.hasOwnProp(o, a) ? o[a] = A.isArray(o[a]) ? o[a].concat(r) : [o[a], r] : o[a] = r, !i) : ((!A.hasOwnProp(o, a) || !A.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && A.isArray(o[a]) && (o[a] = d_(o[a])), !i);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(f_(r), o, n, 0);
    }), n;
  }
  return null;
}
const Vn = (e, t) => e != null && A.hasOwnProp(e, t) ? e[t] : void 0;
function m_(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Zr = {
  transitional: Wa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = A.isObject(t);
      if (s && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
        return o ? JSON.stringify(Af(t)) : t;
      if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
        return t;
      if (A.isArrayBufferView(t))
        return t.buffer;
      if (A.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (s) {
        const l = Vn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return u_(t, l).toString();
        if ((i = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Vn(this, "env"), c = u && u.FormData;
          return ao(
            i ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), m_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Vn(this, "transitional") || Zr.transitional, r = n && n.forcedJSONParsing, o = Vn(this, "responseType"), s = o === "json";
      if (A.isResponse(t) || A.isReadableStream(t))
        return t;
      if (t && A.isString(t) && (r && !o || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Vn(this, "parseReviver"));
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? ne.from(l, ne.ERR_BAD_RESPONSE, this, null, Vn(this, "response")) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ot.classes.FormData,
    Blob: ot.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Zr.headers[e] = {};
});
function Po(e, t) {
  const n = this || Zr, r = t || n, o = mt.from(r.headers);
  let s = r.data;
  return A.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Tf(e) {
  return !!(e && e.__CANCEL__);
}
let es = class extends ne {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", ne.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Of(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? ne.ERR_BAD_REQUEST : ne.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function h_(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function p_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[s];
    a || (a = u), n[o] = l, r[o] = u;
    let f = s, h = 0;
    for (; f !== o; )
      h += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const p = c && u - c;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function g_(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const a = (u, c = Date.now()) => {
    n = c, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - n;
    f >= r ? a(u, c) : (o = u, s || (s = setTimeout(() => {
      s = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const Fs = (e, t, n = 3) => {
  let r = 0;
  const o = p_(50, 250);
  return g_((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, l = i != null ? Math.min(a, i) : a, u = Math.max(0, l - r), c = o(u);
    r = Math.max(r, l);
    const f = {
      loaded: l,
      total: i,
      progress: i ? l / i : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && i ? (i - l) / c : void 0,
      event: s,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, xl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Pl = (e) => (...t) => A.asap(() => e(...t)), __ = ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ot.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ot.origin),
  ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)
) : () => !0, b_ = ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      A.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), A.isString(r) && i.push(`path=${r}`), A.isString(o) && i.push(`domain=${o}`), s === !0 && i.push("secure"), A.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), o = r.indexOf("=");
        if (o !== -1 && r.slice(0, o) === e)
          try {
            return decodeURIComponent(r.slice(o + 1));
          } catch {
            return r.slice(o + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function y_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function v_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const E_ = /^https?:(?!\/\/)/i, w_ = /[\t\n\r]/g;
function S_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function A_(e) {
  return S_(e).replace(w_, "");
}
function Nl(e, t) {
  if (typeof e == "string" && E_.test(A_(e)))
    throw new ne(
      'Invalid URL: missing "//" after protocol',
      ne.ERR_INVALID_URL,
      t
    );
}
function Cf(e, t, n, r) {
  Nl(t, r);
  let o = !y_(t);
  return e && (o || n === !1) ? (Nl(e, r), v_(e, t)) : t;
}
const Ml = (e) => e instanceof mt ? { ...e } : e;
function Un(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(c, f, h, p) {
    return A.isPlainObject(c) && A.isPlainObject(f) ? A.merge.call({ caseless: p }, c, f) : A.isPlainObject(f) ? A.merge({}, f) : A.isArray(f) ? f.slice() : f;
  }
  function o(c, f, h, p) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(c))
        return r(void 0, c, h, p);
    } else return r(c, f, h, p);
  }
  function s(c, f) {
    if (!A.isUndefined(f))
      return r(void 0, f);
  }
  function a(c, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, f);
  }
  function i(c) {
    const f = A.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!A.isUndefined(f))
      if (A.isPlainObject(f)) {
        if (A.hasOwnProp(f, c))
          return f[c];
      } else
        return;
    const h = A.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (A.isPlainObject(h) && A.hasOwnProp(h, c))
      return h[c];
  }
  function l(c, f, h) {
    if (A.hasOwnProp(t, h))
      return r(c, f);
    if (A.hasOwnProp(e, h))
      return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    allowedSocketPaths: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (c, f, h) => o(Ml(c), Ml(f), h, !0)
  };
  return A.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const h = A.hasOwnProp(u, f) ? u[f] : o, p = A.hasOwnProp(e, f) ? e[f] : void 0, S = A.hasOwnProp(t, f) ? t[f] : void 0, w = h(p, S, f);
    A.isUndefined(w) && h !== l || (n[f] = w);
  }), A.hasOwnProp(t, "validateStatus") && A.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (A.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const T_ = ["content-type", "content-length"];
function O_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    T_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const C_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Rf(e) {
  const t = Un({}, e), n = (h) => A.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let i = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = i = mt.from(i), t.url = wf(
    Cf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const h = A.getSafeProp(l, "username") || "", p = A.getSafeProp(l, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (p ? C_(p) : ""))
      );
    } catch (S) {
      throw ne.from(S, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (A.isFormData(r) && (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv || A.isReactNative(r) ? i.setContentType(void 0) : A.isFunction(r.getHeaders) && O_(i, r.getHeaders(), n("formDataHeaderPolicy"))), ot.hasStandardBrowserEnv && (A.isFunction(o) && (o = o(t)), o === !0 || o == null && __(t.url))) {
    const p = s && a && b_.read(a);
    p && i.set(s, p);
  }
  return t;
}
const R_ = typeof XMLHttpRequest < "u", L_ = R_ && function(e) {
  return new Promise(function(n, r) {
    const o = Rf(e);
    let s = o.data;
    const a = mt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = o, c, f, h, p, S;
    function w() {
      p && p(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let T = new XMLHttpRequest();
    T.open(o.method.toUpperCase(), o.url, !0), T.timeout = o.timeout;
    function v() {
      if (!T)
        return;
      const y = mt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), k = {
        data: !i || i === "text" || i === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: y,
        config: e,
        request: T
      };
      Of(
        function(D) {
          n(D), w();
        },
        function(D) {
          r(D), w();
        },
        k
      ), T = null;
    }
    "onloadend" in T ? T.onloadend = v : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.startsWith("file:")) || setTimeout(v);
    }, T.onabort = function() {
      T && (r(new ne("Request aborted", ne.ECONNABORTED, e, T)), w(), T = null);
    }, T.onerror = function(E) {
      const k = E && E.message ? E.message : "Network Error", O = new ne(k, ne.ERR_NETWORK, e, T);
      O.event = E || null, r(O), w(), T = null;
    }, T.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const k = o.transitional || Wa;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(
        new ne(
          E,
          k.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          e,
          T
        )
      ), w(), T = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in T && A.forEach(_f(a), function(E, k) {
      T.setRequestHeader(k, E);
    }), A.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials), i && i !== "json" && (T.responseType = o.responseType), u && ([h, S] = Fs(u, !0), T.addEventListener("progress", h)), l && T.upload && ([f, p] = Fs(l), T.upload.addEventListener("progress", f), T.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (c = (y) => {
      T && (r(!y || y.type ? new es(null, e, T) : y), T.abort(), w(), T = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const x = h_(o.url);
    if (x && !ot.protocols.includes(x)) {
      r(
        new ne(
          "Unsupported protocol " + x + ":",
          ne.ERR_BAD_REQUEST,
          e
        )
      ), w();
      return;
    }
    T.send(s || null);
  });
}, I_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, a();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof ne ? u : new es(u instanceof Error ? u.message : u)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, o(new ne(`timeout of ${t}ms exceeded`, ne.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((l) => l.addEventListener("abort", o, { once: !0 }));
  const { signal: i } = n;
  return i.unsubscribe = () => A.asap(a), i;
}, k_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, x_ = async function* (e, t) {
  for await (const n of P_(e))
    yield* k_(n, t);
}, P_ = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Dl = (e, t, n, r) => {
  const o = x_(e, t);
  let s = 0, a, i = (l) => {
    a || (a = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: u, value: c } = await o.next();
          if (u) {
            i(), l.close();
            return;
          }
          let f = c.byteLength;
          if (n) {
            let h = s += f;
            n(h);
          }
          l.enqueue(new Uint8Array(c));
        } catch (u) {
          throw i(u), u;
        }
      },
      cancel(l) {
        return i(l), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Us = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, N_ = (e, t, n) => t + 2 < n && Us(e.charCodeAt(t + 1)) && Us(e.charCodeAt(t + 2));
function M_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const i = r.length;
    for (let p = 0; p < i; p++)
      if (r.charCodeAt(p) === 37 && p + 2 < i) {
        const S = r.charCodeAt(p + 1), w = r.charCodeAt(p + 2);
        Us(S) && Us(w) && (a -= 2, p += 2);
      }
    let l = 0, u = i - 1;
    const c = (p) => p >= 2 && r.charCodeAt(p - 2) === 37 && // '%'
    r.charCodeAt(p - 1) === 51 && // '3'
    (r.charCodeAt(p) === 68 || r.charCodeAt(p) === 100);
    u >= 0 && (r.charCodeAt(u) === 61 ? (l++, u--) : c(u) && (l++, u -= 3)), l === 1 && u >= 0 && (r.charCodeAt(u) === 61 || c(u)) && l++;
    const h = Math.floor(a / 4) * 3 - (l || 0);
    return h > 0 ? h : 0;
  }
  let s = 0;
  for (let a = 0, i = r.length; a < i; a++) {
    const l = r.charCodeAt(a);
    if (l === 37 && N_(r, a, i))
      s += 1, a += 2;
    else if (l < 128)
      s += 1;
    else if (l < 2048)
      s += 2;
    else if (l >= 55296 && l <= 56319 && a + 1 < i) {
      const u = r.charCodeAt(a + 1);
      u >= 56320 && u <= 57343 ? (s += 4, a++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const za = "1.18.1", Fl = 64 * 1024, { isFunction: us } = A, D_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Ul = (e) => {
  if (!A.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, $l = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, F_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, U_ = (e) => {
  const t = A.global !== void 0 && A.global !== null ? A.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = A.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: o, Request: s, Response: a } = e, i = o ? us(o) : typeof fetch == "function", l = us(s), u = us(a);
  if (!i)
    return !1;
  const c = i && us(n), f = i && (typeof r == "function" ? /* @__PURE__ */ ((v) => (x) => v.encode(x))(new r()) : async (v) => new Uint8Array(await new s(v).arrayBuffer())), h = l && c && $l(() => {
    let v = !1;
    const x = new s(ot.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), y = x.headers.has("Content-Type");
    return x.body != null && x.body.cancel(), v && !y;
  }), p = u && c && $l(() => A.isReadableStream(new a("").body)), S = {
    stream: p && ((v) => v.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !S[v] && (S[v] = (x, y) => {
      let E = x && x[v];
      if (E)
        return E.call(x);
      throw new ne(
        `Response type '${v}' is not supported`,
        ne.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const w = async (v) => {
    if (v == null)
      return 0;
    if (A.isBlob(v))
      return v.size;
    if (A.isSpecCompliantForm(v))
      return (await new s(ot.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (A.isArrayBufferView(v) || A.isArrayBuffer(v))
      return v.byteLength;
    if (A.isURLSearchParams(v) && (v = v + ""), A.isString(v))
      return (await f(v)).byteLength;
  }, T = async (v, x) => {
    const y = A.toFiniteNumber(v.getContentLength());
    return y ?? w(x);
  };
  return async (v) => {
    let {
      url: x,
      method: y,
      data: E,
      signal: k,
      cancelToken: O,
      timeout: D,
      onDownloadProgress: N,
      onUploadProgress: C,
      responseType: j,
      headers: te,
      withCredentials: U = "same-origin",
      fetchOptions: J,
      maxContentLength: ie,
      maxBodyLength: de
    } = Rf(v);
    const V = A.isNumber(ie) && ie > -1, z = A.isNumber(de) && de > -1, ae = (pe) => A.hasOwnProp(v, pe) ? v[pe] : void 0;
    let Re = o || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let xe = I_(
      [k, O && O.toAbortSignal()],
      D
    ), fe = null;
    const we = xe && xe.unsubscribe && (() => {
      xe.unsubscribe();
    });
    let Ne, Xe = null;
    const We = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      v,
      fe
    );
    try {
      let pe;
      const W = ae("auth");
      if (W) {
        const L = A.getSafeProp(W, "username") || "", M = A.getSafeProp(W, "password") || "";
        pe = {
          username: L,
          password: M
        };
      }
      if (F_(x)) {
        const L = new URL(x, ot.origin);
        if (!pe && (L.username || L.password)) {
          const M = Ul(L.username), Y = Ul(L.password);
          pe = {
            username: M,
            password: Y
          };
        }
        (L.username || L.password) && (L.username = "", L.password = "", x = L.href);
      }
      if (pe && (te.delete("authorization"), te.set(
        "Authorization",
        "Basic " + btoa(D_((pe.username || "") + ":" + (pe.password || "")))
      )), V && typeof x == "string" && x.startsWith("data:") && M_(x) > ie)
        throw new ne(
          "maxContentLength size of " + ie + " exceeded",
          ne.ERR_BAD_RESPONSE,
          v,
          fe
        );
      if (z && y !== "get" && y !== "head") {
        const L = await w(E);
        if (typeof L == "number" && isFinite(L) && (Ne = L, L > de))
          throw We();
      }
      const re = z && (A.isReadableStream(E) || A.isStream(E)), oe = (L, M, Y) => Dl(
        L,
        Fl,
        (G) => {
          if (z && G > de)
            throw Xe = We();
          M && M(G);
        },
        Y
      );
      if (h && y !== "get" && y !== "head" && (C || re)) {
        if (Ne = Ne ?? await T(te, E), Ne !== 0 || re) {
          let L = new s(x, {
            method: "POST",
            body: E,
            duplex: "half"
          }), M;
          if (A.isFormData(E) && (M = L.headers.get("content-type")) && te.setContentType(M), L.body) {
            const [Y, G] = C && xl(
              Ne,
              Fs(Pl(C))
            ) || [];
            E = oe(L.body, Y, G);
          }
        }
      } else if (re && !l && c && y !== "get" && y !== "head")
        E = oe(E);
      else if (re && l && !h && y !== "get" && y !== "head")
        throw new ne(
          "Stream request bodies are not supported by the current fetch implementation",
          ne.ERR_NOT_SUPPORT,
          v,
          fe
        );
      A.isString(U) || (U = U ? "include" : "omit");
      const Oe = l && "credentials" in s.prototype;
      if (A.isFormData(E)) {
        const L = te.getContentType();
        L && /^multipart\/form-data/i.test(L) && !/boundary=/i.test(L) && te.delete("content-type");
      }
      te.set("User-Agent", "axios/" + za, !1);
      const Ke = {
        ...J,
        signal: xe,
        method: y.toUpperCase(),
        headers: _f(te.normalize()),
        body: E,
        duplex: "half",
        credentials: Oe ? U : void 0
      };
      fe = l && new s(x, Ke);
      let g = await (l ? Re(fe, J) : Re(x, Ke));
      const _ = mt.from(g.headers);
      if (V) {
        const L = A.toFiniteNumber(_.getContentLength());
        if (L != null && L > ie)
          throw new ne(
            "maxContentLength size of " + ie + " exceeded",
            ne.ERR_BAD_RESPONSE,
            v,
            fe
          );
      }
      const b = p && (j === "stream" || j === "response");
      if (p && g.body && (N || V || b && we)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((R) => {
          L[R] = g[R];
        });
        const M = A.toFiniteNumber(_.getContentLength()), [Y, G] = N && xl(
          M,
          Fs(Pl(N), !0)
        ) || [];
        let d = 0;
        const m = (R) => {
          if (V && (d = R, d > ie))
            throw new ne(
              "maxContentLength size of " + ie + " exceeded",
              ne.ERR_BAD_RESPONSE,
              v,
              fe
            );
          Y && Y(R);
        };
        g = new a(
          Dl(g.body, Fl, m, () => {
            G && G(), we && we();
          }),
          L
        );
      }
      j = j || "text";
      let P = await S[A.findKey(S, j) || "text"](
        g,
        v
      );
      if (V && !p && !b) {
        let L;
        if (P != null && (typeof P.byteLength == "number" ? L = P.byteLength : typeof P.size == "number" ? L = P.size : typeof P == "string" && (L = typeof r == "function" ? new r().encode(P).byteLength : P.length)), typeof L == "number" && L > ie)
          throw new ne(
            "maxContentLength size of " + ie + " exceeded",
            ne.ERR_BAD_RESPONSE,
            v,
            fe
          );
      }
      return !b && we && we(), await new Promise((L, M) => {
        Of(L, M, {
          data: P,
          headers: mt.from(g.headers),
          status: g.status,
          statusText: g.statusText,
          config: v,
          request: fe
        });
      });
    } catch (pe) {
      if (we && we(), xe && xe.aborted && xe.reason instanceof ne) {
        const W = xe.reason;
        throw W.config = v, fe && (W.request = fe), pe !== W && Object.defineProperty(W, "cause", {
          __proto__: null,
          value: pe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), W;
      }
      if (Xe)
        throw fe && !Xe.request && (Xe.request = fe), Xe;
      if (pe instanceof ne)
        throw fe && !pe.request && (pe.request = fe), pe;
      if (pe && pe.name === "TypeError" && /Load failed|fetch/i.test(pe.message)) {
        const W = new ne(
          "Network Error",
          ne.ERR_NETWORK,
          v,
          fe,
          pe && pe.response
        );
        throw Object.defineProperty(W, "cause", {
          __proto__: null,
          value: pe.cause || pe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), W;
      }
      throw ne.from(pe, pe && pe.code, v, fe, pe && pe.response);
    }
  };
}, $_ = /* @__PURE__ */ new Map(), Lf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let a = s.length, i = a, l, u, c = $_;
  for (; i--; )
    l = s[i], u = c.get(l), u === void 0 && c.set(l, u = i ? /* @__PURE__ */ new Map() : U_(t)), c = u;
  return u;
};
Lf();
const Ga = {
  http: Q0,
  xhr: L_,
  fetch: {
    get: Lf
  }
};
A.forEach(Ga, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Hl = (e) => `- ${e}`, H_ = (e) => A.isFunction(e) || e === null || e === !1;
function V_(e, t) {
  e = A.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !H_(r) && (o = Ga[(i = String(r)).toLowerCase()], o === void 0))
      throw new ne(`Unknown adapter '${i}'`);
    if (o && (A.isFunction(o) || (o = o.get(t))))
      break;
    s[i || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(Hl).join(`
`) : " " + Hl(a[0]) : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + i,
      ne.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const If = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: V_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ga
};
function No(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new es(null, e);
}
function Vl(e) {
  return No(e), e.headers = mt.from(e.headers), e.data = Po.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), If.getAdapter(e.adapter || Zr.adapter, e)(e).then(
    function(r) {
      No(e), e.response = r;
      try {
        r.data = Po.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = mt.from(r.headers), r;
    },
    function(r) {
      if (!Tf(r) && (No(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Po.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = mt.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const io = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  io[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const jl = {};
io.transitional = function(t, n, r) {
  function o(s, a) {
    return "[Axios v" + za + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (t === !1)
      throw new ne(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !jl[a] && (jl[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, i) : !0;
  };
};
io.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function j_(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], a = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (a) {
      const i = e[s], l = i === void 0 || a(i, s, e);
      if (l !== !0)
        throw new ne(
          "option " + s + " must be " + l,
          ne.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new ne("Unknown option " + s, ne.ERR_BAD_OPTION);
  }
}
const Ss = {
  assertOptions: j_,
  validators: io
}, lt = Ss.validators;
let Mn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Il(),
      response: new Il()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = (() => {
          if (!o.stack)
            return "";
          const a = o.stack.indexOf(`
`);
          return a === -1 ? "" : o.stack.slice(a + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const a = s.indexOf(`
`), i = a === -1 ? -1 : s.indexOf(`
`, a + 1), l = i === -1 ? "" : s.slice(i + 1);
            String(r.stack).endsWith(l) || (r.stack += `
` + s);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Un(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Ss.assertOptions(
      r,
      {
        silentJSONParsing: lt.transitional(lt.boolean),
        forcedJSONParsing: lt.transitional(lt.boolean),
        clarifyTimeoutError: lt.transitional(lt.boolean),
        legacyInterceptorReqResOrdering: lt.transitional(lt.boolean),
        advertiseZstdAcceptEncoding: lt.transitional(lt.boolean),
        validateStatusUndefinedResolves: lt.transitional(lt.boolean)
      },
      !1
    ), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ss.assertOptions(
      o,
      {
        encode: lt.function,
        serialize: lt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ss.assertOptions(
      n,
      {
        baseUrl: lt.spelling("baseURL"),
        withXsrfToken: lt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && A.merge(s.common, s[n.method]);
    s && A.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (S) => {
      delete s[S];
    }), n.headers = mt.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(w) {
      if (typeof w.runWhen == "function" && w.runWhen(n) === !1)
        return;
      l = l && w.synchronous;
      const T = n.transitional || Wa;
      T && T.legacyInterceptorReqResOrdering ? i.unshift(w.fulfilled, w.rejected) : i.push(w.fulfilled, w.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c, f = 0, h;
    if (!l) {
      const S = [Vl.bind(this), void 0];
      for (S.unshift(...i), S.push(...u), h = S.length, c = Promise.resolve(n); f < h; )
        c = c.then(S[f++], S[f++]);
      return c;
    }
    h = i.length;
    let p = n;
    for (; f < h; ) {
      const S = i[f++], w = i[f++];
      try {
        p = S(p);
      } catch (T) {
        w.call(this, T);
        break;
      }
    }
    try {
      c = Vl.call(this, p);
    } catch (S) {
      return Promise.reject(S);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Un(this.defaults, t);
    const n = Cf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return wf(n, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  Mn.prototype[t] = function(n, r) {
    return this.request(
      Un(r || {}, {
        method: t,
        url: n,
        data: r && A.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
A.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(s, a, i) {
      return this.request(
        Un(i || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: a
        })
      );
    };
  }
  Mn.prototype[t] = n(), t !== "query" && (Mn.prototype[t + "Form"] = n(!0));
});
let B_ = class kf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((i) => {
        r.subscribe(i), s = i;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(s);
      }, a;
    }, t(function(s, a, i) {
      r.reason || (r.reason = new es(s, a, i), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new kf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function W_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function K_(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const ca = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(ca).forEach(([e, t]) => {
  ca[t] = e;
});
function xf(e) {
  const t = new Mn(e), n = lf(Mn.prototype.request, t);
  return A.extend(n, Mn.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return xf(Un(e, o));
  }, n;
}
const Be = xf(Zr);
Be.Axios = Mn;
Be.CanceledError = es;
Be.CancelToken = B_;
Be.isCancel = Tf;
Be.VERSION = za;
Be.toFormData = ao;
Be.AxiosError = ne;
Be.Cancel = Be.CanceledError;
Be.all = function(t) {
  return Promise.all(t);
};
Be.spread = W_;
Be.isAxiosError = K_;
Be.mergeConfig = Un;
Be.AxiosHeaders = mt;
Be.formToJSON = (e) => Af(A.isHTMLForm(e) ? new FormData(e) : e);
Be.getAdapter = If.getAdapter;
Be.HttpStatusCode = ca;
Be.default = Be;
const {
  Axios: rv,
  AxiosError: sv,
  CanceledError: ov,
  isCancel: av,
  CancelToken: iv,
  VERSION: lv,
  all: cv,
  Cancel: uv,
  isAxiosError: fv,
  spread: dv,
  toFormData: mv,
  AxiosHeaders: hv,
  HttpStatusCode: pv,
  formToJSON: gv,
  getAdapter: _v,
  mergeConfig: bv,
  create: yv
} = Be, z_ = "X-Admin-UI-Request", G_ = "X-User-UI-Request";
function Bl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Pf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function q_(e) {
  const t = Pf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function Y_(e) {
  const t = q_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function X_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return Bl(Pf(e)) || Bl(n);
}
function J_(e) {
  return Y_(e);
}
const Wl = "/api/v1", Q_ = Z_();
function Nf(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function Z_(e) {
  const n = (String(Wl).trim() || Wl).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Nf(n);
}
function $s() {
  return Q_;
}
function Mf(e) {
  const t = Nf(e);
  try {
    return `${typeof window > "u" ? new URL($s()).origin : new URL($s(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const qa = "auth_token", e1 = "auth_user", lo = "refresh_token", Ya = "token_expires_at", t1 = "sub2api-auth-token-refresh", Kl = 3e4, Df = 1e3, n1 = 1e3, r1 = 25;
let yr = null;
function Xa() {
  const e = localStorage.getItem(e1);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function s1() {
  const e = localStorage.getItem(lo);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(qa),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Ya)),
    userID: Xa()
  };
}
function o1(e) {
  const t = localStorage.getItem(qa), n = localStorage.getItem(lo), r = Number(localStorage.getItem(Ya));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Xa() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function Hs(e, t) {
  const n = o1(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function a1(e, t, n = Date.now() + Df) {
  for (; Date.now() < n; ) {
    const r = Hs(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, r1));
  }
  return Hs(e, t);
}
function i1(e) {
  localStorage.setItem(qa, e.access_token), localStorage.setItem(Ya, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(lo, e.refresh_token);
}
async function l1(e, t, n = !1) {
  var o;
  const r = Date.now() + Kl + n1;
  try {
    const a = (await Be.post(
      `${$s()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Kl }
    )).data;
    if (a.code !== 0 || !a.data)
      throw new Error(a.message || "Token refresh failed");
    if (localStorage.getItem(lo) !== e.refreshToken || Xa() !== e.userID) {
      const i = Hs(e, t);
      if (i)
        return i;
      throw new Error("Session changed during token refresh");
    }
    return i1(a.data), a.data;
  } catch (s) {
    const a = (o = s.response) == null ? void 0 : o.status, i = typeof a == "number" && a >= 400 && a < 500, l = await a1(
      e,
      t,
      i && n ? r : Date.now() + Df
    );
    if (l)
      return l;
    throw s;
  }
}
async function c1(e) {
  const t = s1(), n = async (r = !1) => {
    const o = Hs(t, e.failedAccessToken);
    return o || l1(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(t1, () => n(!1)) : n(!0);
}
function Ff(e = {}) {
  if (yr)
    return yr;
  const t = c1(e);
  yr = t;
  const n = () => {
    yr === t && (yr = null);
  };
  return t.then(n, n), t;
}
const Z = Be.create({
  baseURL: $s(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), u1 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
Z.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = af()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = u1()), e.headers) {
      const n = String(e.url || "");
      X_(n) && (e.headers[z_] = "1"), J_(n) && (e.headers[G_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
Z.interceptors.response.use(
  (e) => {
    const t = e.data;
    if (t && typeof t == "object" && "code" in t)
      if (t.code === 0)
        e.data = t.data;
      else {
        const n = t;
        return Promise.reject({
          status: e.status,
          code: t.code,
          message: t.message || "Unknown error",
          reason: n.reason,
          metadata: n.metadata
        });
      }
    return e;
  },
  async (e) => {
    var n, r;
    if (e.code === "ERR_CANCELED" || Be.isCancel(e))
      return Promise.reject(e);
    const t = e.config;
    if (e.response) {
      const { status: o, data: s } = e.response, a = String(((n = e.config) == null ? void 0 : n.url) || ""), i = typeof s == "object" && s !== null ? s : {};
      if (o === 404 && i.message === "Ops monitoring is disabled") {
        try {
          localStorage.setItem("ops_monitoring_enabled_cached", "false");
        } catch {
        }
        try {
          window.dispatchEvent(new CustomEvent("ops-monitoring-disabled"));
        } catch {
        }
        return window.location.pathname.startsWith("/admin/ops") && (window.location.href = "/admin/settings"), Promise.reject({
          status: o,
          code: "OPS_DISABLED",
          message: i.message || e.message,
          url: a
        });
      }
      if (o === 423 && i.code === "ADMIN_COMPLIANCE_ACK_REQUIRED") {
        try {
          window.dispatchEvent(new CustomEvent("admin-compliance-required", {
            detail: i.metadata || {}
          }));
        } catch {
        }
        return Promise.reject({
          status: o,
          code: i.code,
          message: i.message || e.message,
          metadata: i.metadata
        });
      }
      if (o === 401 && !t._retry) {
        const l = localStorage.getItem("refresh_token"), u = a.includes("/auth/login") || a.includes("/auth/register") || a.includes("/auth/refresh");
        if (l && !u) {
          const S = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const w = t.headers, T = (w == null ? void 0 : w.Authorization) ?? (w == null ? void 0 : w.authorization), v = typeof T == "string" && T.startsWith("Bearer ") ? T.slice(7) : null, x = await Ff({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${x.access_token}`), Z(t);
          } catch {
            return localStorage.getItem("refresh_token") !== l || localStorage.getItem("auth_user") !== S ? Promise.reject({
              status: 401,
              code: "AUTH_SESSION_CHANGED",
              message: "Authentication session changed while refreshing."
            }) : (localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login"), Promise.reject({
              status: 401,
              code: "TOKEN_REFRESH_FAILED",
              message: "Session expired. Please log in again."
            }));
          }
        }
        const c = !!localStorage.getItem("auth_token"), f = (r = e.config) == null ? void 0 : r.headers, h = (f == null ? void 0 : f.Authorization) ?? (f == null ? void 0 : f.authorization), p = typeof h == "string" ? h.trim() !== "" : Array.isArray(h) ? h.length > 0 : !!h;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (c || p) && !u && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
      }
      return Promise.reject({
        status: o,
        code: i.code,
        reason: i.reason,
        error: i.error,
        message: i.message || i.detail || e.message,
        metadata: i.metadata
      });
    }
    return Promise.reject({
      status: 0,
      message: "Network error. Please check your connection."
    });
  }
);
async function f1(e = !1) {
  const { data: t } = await Z.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
function Ja(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function co(e) {
  localStorage.setItem("auth_token", e);
}
function uo(e) {
  localStorage.setItem("refresh_token", e);
}
function fo(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function Uf() {
  return localStorage.getItem("auth_token");
}
function $f() {
  return localStorage.getItem("refresh_token");
}
function d1() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Hf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function m1(e) {
  const { data: t } = await Z.post("/auth/login", e);
  return Ja(t) || (co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function h1(e) {
  const { data: t } = await Z.post("/auth/login/2fa", e);
  return co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function p1(e) {
  const { data: t } = await Z.post("/auth/register", e);
  return co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function g1() {
  return Z.get("/auth/me");
}
async function _1() {
  const e = $f();
  if (e)
    try {
      await Z.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Hf();
}
function Vf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function b1(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function y1(e) {
  return b1(e) ? "login" : "bind";
}
function v1(e) {
  return y1(e);
}
function E1(e) {
  return e.error === "invitation_required";
}
function w1(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function S1() {
  return Ff();
}
async function A1() {
  const { data: e } = await Z.post("/auth/revoke-all-sessions");
  return e;
}
function T1() {
  return Uf() !== null;
}
async function jf() {
  const { data: e } = await Z.get("/settings/public");
  return e;
}
async function O1(e) {
  const { data: t } = await Z.post("/auth/send-verify-code", e);
  return t;
}
async function C1(e) {
  const { data: t } = await Z.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function R1(e) {
  const { data: t } = await Z.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function L1(e) {
  const { data: t } = await Z.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function I1(e) {
  const { data: t } = await Z.post("/auth/forgot-password", e);
  return t;
}
async function k1(e) {
  const { data: t } = await Z.post("/auth/reset-password", e);
  return t;
}
async function x1(e, t, n) {
  return Bf(e, t, n);
}
async function P1(e, t, n) {
  return Wf(e, t, n);
}
async function N1(e, t, n) {
  return Kf(e, t, n);
}
async function mo(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await Z.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...Vf(n)
    }
  );
  return s;
}
async function Bf(e, t, n) {
  return mo("linuxdo", e, t, n);
}
async function Wf(e, t, n) {
  return mo("oidc", e, t, n);
}
async function Kf(e, t, n) {
  return mo("wechat", e, t, n);
}
async function M1(e, t, n) {
  return mo("dingtalk", e, t, n);
}
async function zf(e) {
  const { data: t } = await Z.post(
    "/auth/oauth/pending/exchange",
    Vf(e)
  );
  return t;
}
async function D1(e) {
  return zf(e);
}
const jn = {
  login: m1,
  login2FA: h1,
  isTotp2FARequired: Ja,
  register: p1,
  getCurrentUser: g1,
  logout: _1,
  isAuthenticated: T1,
  setAuthToken: co,
  setRefreshToken: uo,
  setTokenExpiresAt: fo,
  getAuthToken: Uf,
  getRefreshToken: $f,
  getTokenExpiresAt: d1,
  clearAuthToken: Hf,
  getPublicSettings: jf,
  sendVerifyCode: O1,
  sendPendingOAuthVerifyCode: C1,
  validatePromoCode: R1,
  validateInvitationCode: L1,
  forgotPassword: I1,
  resetPassword: k1,
  refreshToken: S1,
  revokeAllSessions: A1,
  getPendingOAuthBindLoginKind: v1,
  isPendingOAuthCreateAccountRequired: E1,
  hasPendingOAuthSuggestedProfile: w1,
  completePendingOAuthBindLogin: zf,
  createPendingLinuxDoOAuthAccount: Bf,
  createPendingOIDCOAuthAccount: Wf,
  createPendingWeChatOAuthAccount: Kf,
  exchangePendingOAuthCompletion: D1,
  completeLinuxDoOAuthRegistration: x1,
  completeOIDCOAuthRegistration: P1,
  completeWeChatOAuthRegistration: N1,
  createPendingDingTalkOAuthAccount: M1
}, zl = "零一 API", Qa = /* @__PURE__ */ xa("app", () => {
  const e = Q(!1), t = Q(!1), n = Q(0), r = Q(!1), o = Q([]), s = Q(!1), a = Q(!1), i = Q(zl), l = Q(""), u = Q(""), c = Q(""), f = Q(""), h = Q(""), p = Q(null);
  let S = null, w = null, T = 0;
  const v = Q(!1), x = Q(!1), y = Q(""), E = Q(""), k = Q(!1), O = Q("source"), D = Q(null);
  let N = 0;
  const C = _e(() => o.value.length > 0), j = _e(() => {
    var _;
    return ((_ = p.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
  }), te = Q(0);
  function U() {
    e.value = !e.value;
  }
  function J(_) {
    e.value = _;
  }
  function ie() {
    t.value = !t.value;
  }
  function de(_) {
    t.value = _;
  }
  function V(_) {
    _ ? te.value++ : te.value = Math.max(0, te.value - 1), r.value = te.value > 0;
  }
  function z(_, b, P) {
    const L = `toast-${++N}`, M = {
      id: L,
      type: _,
      message: b,
      duration: P,
      startTime: P !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), P !== void 0 && setTimeout(() => {
      we(L);
    }, P), L;
  }
  function ae(_, b = 3e3) {
    return z("success", _, b);
  }
  function Re(_, b = 5e3) {
    return z("error", _, b);
  }
  function xe(_, b = 3e3) {
    return z("info", _, b);
  }
  function fe(_, b = 4e3) {
    return z("warning", _, b);
  }
  function we(_) {
    const b = o.value.findIndex((P) => P.id === _);
    b !== -1 && o.value.splice(b, 1);
  }
  function Ne() {
    o.value = [];
  }
  async function Xe(_) {
    V(!0);
    try {
      return await _();
    } finally {
      V(!1);
    }
  }
  async function We(_, b) {
    V(!0);
    try {
      return await _();
    } catch (P) {
      const L = b || P.message || Zn.global.t("common.unknownError");
      return Re(L), null;
    } finally {
      V(!1);
    }
  }
  function pe() {
    e.value = !1, r.value = !1, te.value = 0, o.value = [];
  }
  async function W(_ = !1) {
    if (v.value && !_)
      return {
        current_version: y.value,
        latest_version: E.value,
        has_update: k.value,
        build_type: O.value,
        release_info: D.value || void 0,
        cached: !0
      };
    if (x.value)
      return null;
    x.value = !0;
    try {
      const b = await f1(_);
      return y.value = b.current_version, E.value = b.latest_version, k.value = b.has_update, O.value = b.build_type || "source", D.value = b.release_info || null, v.value = !0, b;
    } catch (b) {
      return console.error("Failed to fetch version:", b), null;
    } finally {
      x.value = !1;
    }
  }
  function re() {
    v.value = !1, k.value = !1;
  }
  function oe(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), p.value = _, i.value = _.site_name || zl, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", h.value = _.doc_url || "", s.value = !0;
  }
  function Oe(_ = !1) {
    if (S)
      return _ && !w && (T += 1, w = S.then(() => Oe(!0)).finally(() => {
        w = null;
      })), _ ? w : S;
    if (_ && (T += 1), !s.value && !_ && window.__APP_CONFIG__)
      return oe(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
    if (s.value && !_)
      return p.value ? Promise.resolve({ ...p.value }) : Promise.resolve({
        registration_enabled: !1,
        email_verify_enabled: !1,
        force_email_on_third_party_signup: !1,
        registration_email_suffix_whitelist: [],
        promo_code_enabled: !0,
        password_reset_enabled: !1,
        invitation_code_enabled: !1,
        turnstile_enabled: !1,
        turnstile_site_key: "",
        aliyun_captcha_enabled: !1,
        aliyun_captcha_scene_id: "",
        aliyun_captcha_prefix: "",
        aliyun_captcha_region: "cn",
        site_name: i.value,
        site_logo: l.value,
        site_subtitle: "",
        api_base_url: f.value,
        contact_info: c.value,
        doc_url: h.value,
        home_content: "",
        compact_home_enabled: !1,
        hide_ccs_import_button: !1,
        profile_navigation_enabled: !0,
        subscription_navigation_enabled: !0,
        model_plaza_placement: "header",
        user_sidebar_order: [],
        admin_sidebar_order: [],
        payment_enabled: !1,
        table_default_page_size: 20,
        table_page_size_options: [10, 20, 50, 100],
        custom_menu_items: [],
        custom_endpoints: [],
        linuxdo_oauth_enabled: !1,
        wechat_oauth_enabled: !1,
        wechat_oauth_open_enabled: !1,
        wechat_oauth_mp_enabled: !1,
        wechat_oauth_mobile_enabled: !1,
        oidc_oauth_enabled: !1,
        oidc_oauth_provider_name: "OIDC",
        github_oauth_enabled: !1,
        google_oauth_enabled: !1,
        backend_mode_enabled: !1,
        passkey_enabled: !1,
        version: u.value,
        balance_low_notify_enabled: !1,
        account_quota_notify_enabled: !1,
        balance_low_notify_threshold: 0,
        channel_monitor_enabled: !0,
        public_channel_status_enabled: !1,
        channel_monitor_default_interval_seconds: 60,
        available_channels_enabled: !1,
        model_plaza_enabled: !1,
        model_plaza_require_auth: !1,
        community_qr_enabled: !1,
        community_qr_title: "交流群",
        community_qr_description: "扫码加入交流群获取支持",
        risk_control_enabled: !1,
        service_quota_enabled: !1,
        affiliate_enabled: !1,
        allow_user_view_error_requests: !1
      });
    a.value = !0;
    const b = T;
    let P;
    try {
      P = jf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), a.value = !1, Promise.resolve(null);
    }
    const L = P.then((M) => (b === T && oe(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      S === L && (S = null, a.value = !1);
    });
    return S = L, L;
  }
  function Ke() {
    T += 1, s.value = !1, p.value = null;
  }
  function g() {
    return window.__APP_CONFIG__ ? (oe(window.__APP_CONFIG__), !0) : !1;
  }
  return {
    // State
    sidebarCollapsed: e,
    mobileOpen: t,
    sidebarScrollTop: n,
    loading: r,
    toasts: o,
    // Public settings state
    publicSettingsLoaded: s,
    siteName: i,
    siteLogo: l,
    siteVersion: u,
    contactInfo: c,
    apiBaseUrl: f,
    docUrl: h,
    cachedPublicSettings: p,
    // Version state
    versionLoaded: v,
    versionLoading: x,
    currentVersion: y,
    latestVersion: E,
    hasUpdate: k,
    buildType: O,
    releaseInfo: D,
    // Computed
    hasActiveToasts: C,
    backendModeEnabled: j,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: J,
    toggleMobileSidebar: ie,
    setMobileOpen: de,
    setLoading: V,
    showToast: z,
    showSuccess: ae,
    showError: Re,
    showInfo: xe,
    showWarning: fe,
    hideToast: we,
    clearAllToasts: Ne,
    withLoading: Xe,
    withLoadingAndError: We,
    reset: pe,
    // Version actions
    fetchVersion: W,
    clearVersionCache: re,
    // Public settings actions
    fetchPublicSettings: Oe,
    clearPublicSettingsCache: Ke,
    initFromInjectedConfig: g
  };
}), F1 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, U1 = { class: "p-4" }, $1 = { class: "flex items-start gap-3" }, H1 = { class: "mt-0.5 flex-shrink-0" }, V1 = { class: "min-w-0 flex-1" }, j1 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, B1 = ["onClick"], W1 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, K1 = /* @__PURE__ */ nn({
  __name: "Toast",
  setup(e) {
    const t = Qa(), n = _e(() => t.toasts), r = (l) => {
      switch (l) {
        case "success":
          return "checkCircle";
        case "error":
          return "xCircle";
        case "warning":
          return "exclamationTriangle";
        case "info":
        default:
          return "infoCircle";
      }
    }, o = (l) => {
      const u = {
        success: "text-zo-signal-500",
        error: "text-red-500",
        warning: "text-zo-alert-500",
        info: "text-blue-500"
      };
      return u[l] || u.info;
    }, s = (l) => {
      const u = {
        success: "border-zo-signal-500",
        error: "border-red-500",
        warning: "border-zo-alert-500",
        info: "border-blue-500"
      };
      return u[l] || u.info;
    }, a = (l) => {
      const u = {
        success: "bg-zo-signal-500",
        error: "bg-red-500",
        warning: "bg-zo-alert-500",
        info: "bg-blue-500"
      };
      return u[l] || u.info;
    }, i = (l) => {
      t.hideToast(l);
    };
    return (l, u) => (ge(), pn(Ta, { to: "body" }, [
      H("div", F1, [
        ye(dh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: tr(() => [
            (ge(!0), Se(He, null, fn(n.value, (c) => (ge(), Se("div", {
              key: c.id,
              class: Ge([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              H("div", U1, [
                H("div", $1, [
                  H("div", H1, [
                    ye(ze, {
                      name: r(c.type),
                      size: "md",
                      class: Ge(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  H("div", V1, [
                    c.title ? (ge(), Se("p", j1, ue(c.title), 1)) : Ze("", !0),
                    H("p", {
                      class: Ge([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, ue(c.message), 3)
                  ]),
                  H("button", {
                    onClick: (f) => i(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    ye(ze, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, B1)
                ])
              ]),
              c.duration ? (ge(), Se("div", W1, [
                H("div", {
                  class: Ge(["h-full toast-progress", a(c.type)]),
                  style: ir({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : Ze("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Za = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, z1 = /* @__PURE__ */ Za(K1, [["__scopeId", "data-v-fc5fa96e"]]), G1 = { class: "modal-header" }, q1 = {
  key: 0,
  class: "modal-footer"
}, Y1 = /* @__PURE__ */ nn({
  __name: "BaseDialog",
  props: {
    show: { type: Boolean },
    title: {},
    width: { default: "normal" },
    closeOnEscape: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !1 },
    showCloseButton: { type: Boolean, default: !0 },
    zIndex: { default: 50 },
    panelClass: { default: "" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    let n = 0;
    const r = `modal-title-${++n}`, o = Q(null), s = Q(null);
    let a = null;
    const i = e, l = t, u = _e(() => i.zIndex !== 50 ? { zIndex: i.zIndex } : void 0), c = _e(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[i.width]), f = () => {
      i.closeOnClickOutside && l("close");
    }, h = (p) => {
      i.show && i.closeOnEscape && p.key === "Escape" && l("close");
    };
    return yt(
      () => i.show,
      async (p) => {
        if (p) {
          if (a = document.activeElement, document.body.classList.add("modal-open"), await Xn(), s.value && (s.value.scrollTop = 0), o.value) {
            const S = o.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            S == null || S.focus();
          }
        } else
          document.body.classList.remove("modal-open"), a && typeof a.focus == "function" && a.focus(), a = null;
      },
      { immediate: !0 }
    ), lr(() => {
      document.addEventListener("keydown", h);
    }), Gr(() => {
      document.removeEventListener("keydown", h), document.body.classList.remove("modal-open");
    }), (p, S) => (ge(), pn(Ta, { to: "body" }, [
      ye(_u, { name: "modal" }, {
        default: tr(() => [
          e.show ? (ge(), Se("div", {
            key: 0,
            class: "modal-overlay",
            style: ir(u.value),
            "aria-labelledby": r,
            role: "dialog",
            "aria-modal": "true",
            onClick: Qe(f, ["self"])
          }, [
            H("div", {
              ref_key: "dialogRef",
              ref: o,
              class: Ge(["modal-content", "base-dialog-surface", "console-skin-dialog", c.value, e.panelClass]),
              onClick: S[1] || (S[1] = Qe(() => {
              }, ["stop"]))
            }, [
              H("div", G1, [
                H("h3", {
                  id: r,
                  class: "modal-title"
                }, ue(e.title), 1),
                e.showCloseButton ? (ge(), Se("button", {
                  key: 0,
                  onClick: S[0] || (S[0] = (w) => l("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  ye(ze, {
                    name: "x",
                    size: "md"
                  })
                ])) : Ze("", !0)
              ]),
              H("div", {
                ref_key: "modalBodyRef",
                ref: s,
                class: "modal-body"
              }, [
                Ls(p.$slots, "default")
              ], 512),
              p.$slots.footer ? (ge(), Se("div", q1, [
                Ls(p.$slots, "footer")
              ])) : Ze("", !0)
            ], 2)
          ], 4)) : Ze("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), X1 = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], J1 = { class: "select-value" }, Q1 = ["onKeydown"], Z1 = { class: "select-icon" }, eb = {
  key: 0,
  class: "select-search"
}, tb = ["placeholder", "aria-label"], nb = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], rb = {
  key: 0,
  class: "select-empty"
}, Mo = 8, sb = 200, ob = 300, ab = /* @__PURE__ */ nn({
  __name: "Select",
  props: {
    modelValue: { type: [String, Number, Boolean, null] },
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    searchable: { type: [Boolean, String], default: "auto" },
    searchPlaceholder: {},
    emptyText: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    creatable: { type: Boolean, default: !1 },
    creatablePrefix: { default: "" },
    clearable: { type: Boolean, default: !1 },
    id: {},
    ariaLabel: {},
    ariaDescribedby: {},
    remote: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(e, { emit: t }) {
    const { t: n } = Xr(), r = `select-${Math.random().toString(36).substring(2, 9)}`, o = e, s = t, a = Q(!1), i = Q(""), l = Q(-1), u = Q(null), c = Q(null), f = Q(null), h = Q(null), p = Q(null), S = Q("bottom"), w = Q(null), T = _e(() => o.placeholder ?? n("common.selectOption")), v = _e(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), x = _e(() => o.emptyText ?? n("common.noOptionsFound"));
    let y = null;
    const E = _e(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), k = _e(() => {
      if (!w.value) return {};
      const W = w.value, re = Math.max(Mo, window.innerWidth - Mo), oe = Math.min(
        Math.max(Mo, W.left),
        re
      ), Oe = Math.max(0, re - oe), Ke = Math.max(sb, W.width), g = Math.min(Ke, Oe), _ = {
        position: "fixed",
        left: `${oe}px`,
        minWidth: `${g}px`,
        maxWidth: `${Oe}px`,
        zIndex: "100000020"
      };
      return S.value === "top" ? _.bottom = `${window.innerHeight - W.top + 4}px` : _.top = `${W.bottom + 4}px`, _;
    }), O = (W) => typeof W == "object" && W !== null ? W[o.valueKey] : W, D = (W) => String(typeof W == "object" && W !== null ? W[o.labelKey] ?? "" : W ?? ""), N = (W) => typeof W == "object" && W !== null ? !!W.disabled : !1, C = (W) => typeof W == "object" && W !== null ? W.kind === "group" : !1, j = _e(() => o.options.find((W) => O(W) === o.modelValue) || null), te = _e(() => j.value ? D(j.value) : o.creatable && o.modelValue ? String(o.modelValue) : T.value), U = _e(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), J = _e(() => {
      let W = o.options;
      if (E.value && i.value && !o.remote) {
        const re = i.value.toLowerCase();
        if (W = W.filter((oe) => !!(D(oe).toLowerCase().includes(re) || oe.description && String(oe.description).toLowerCase().includes(re))), o.creatable && i.value.trim()) {
          const oe = i.value.trim(), Oe = o.creatablePrefix || n("common.search");
          W = [{ [o.valueKey]: oe, [o.labelKey]: `${Oe} "${oe}"`, _creatable: !0 }, ...W];
        }
      }
      return W;
    }), ie = (W) => O(W) === o.modelValue, de = (W) => {
      const re = J.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Oe = (W + oe) % re.length;
        if (!N(re[Oe])) return Oe;
      }
      return -1;
    }, V = (W) => {
      const re = J.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Oe = (W - oe + re.length) % re.length;
        if (!N(re[Oe])) return Oe;
      }
      return -1;
    }, z = (W, re) => {
      N(W) || C(W) || (l.value = re);
    }, ae = () => {
      u.value && (w.value = u.value.getBoundingClientRect());
    }, Re = () => {
      u.value && (ae(), Xn(() => {
        if (!h.value || !w.value) return;
        const W = h.value.offsetHeight || 240, re = window.innerHeight - w.value.bottom, oe = w.value.top;
        re < W && oe > W ? S.value = "top" : S.value = "bottom";
      }));
    }, xe = () => {
      o.disabled || (a.value = !a.value);
    };
    yt(a, (W) => {
      if (W) {
        if (Re(), J.value.length === 0)
          l.value = -1;
        else {
          const re = J.value.findIndex(ie), oe = re >= 0 ? re : 0;
          l.value = N(J.value[oe]) ? de(oe + 1) : oe;
        }
        E.value && Xn(() => {
          var re;
          return (re = f.value) == null ? void 0 : re.focus();
        }), window.addEventListener("scroll", ae, { capture: !0, passive: !0 }), window.addEventListener("resize", Re);
      } else
        i.value = "", l.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", ae, { capture: !0 }), window.removeEventListener("resize", Re);
    }), yt(i, (W) => {
      !o.remote || !a.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, s("search", W.trim());
      }, ob));
    });
    const fe = (W) => {
      var oe;
      const re = O(W) ?? null;
      s("update:modelValue", re), s("change", re, W), a.value = !1, (oe = c.value) == null || oe.focus();
    }, we = () => {
      o.disabled || (s("update:modelValue", null), s("change", null, null));
    }, Ne = () => {
      a.value || (a.value = !0);
    }, Xe = (W) => {
      var re;
      switch (W.key) {
        case "ArrowDown":
          W.preventDefault(), l.value = de(l.value + 1), l.value >= 0 && We();
          break;
        case "ArrowUp":
          W.preventDefault(), l.value = V(l.value - 1), l.value >= 0 && We();
          break;
        case "Enter":
          if (W.preventDefault(), l.value >= 0 && l.value < J.value.length) {
            const oe = J.value[l.value];
            N(oe) || fe(oe);
          }
          break;
        case "Escape":
          W.preventDefault(), a.value = !1, (re = c.value) == null || re.focus();
          break;
        case "Tab":
          a.value = !1;
          break;
      }
    }, We = () => {
      Xn(() => {
        const W = p.value;
        if (!W) return;
        const re = W.children[l.value];
        re && (re.offsetTop < W.scrollTop ? W.scrollTop = re.offsetTop : re.offsetTop + re.offsetHeight > W.scrollTop + W.offsetHeight && (W.scrollTop = re.offsetTop + re.offsetHeight - W.offsetHeight));
      });
    }, pe = (W) => {
      var Ke;
      const re = W.target, oe = !!re.closest(`.${r}`), Oe = (Ke = u.value) == null ? void 0 : Ke.contains(re);
      !oe && !Oe && a.value && (a.value = !1);
    };
    return lr(() => {
      document.addEventListener("click", pe);
    }), Gr(() => {
      document.removeEventListener("click", pe), window.removeEventListener("scroll", ae, { capture: !0 }), window.removeEventListener("resize", Re), y && (clearTimeout(y), y = null);
    }), (W, re) => (ge(), Se("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: u
    }, [
      H("button", {
        ref_key: "triggerRef",
        ref: c,
        type: "button",
        onClick: xe,
        disabled: e.disabled,
        "aria-expanded": a.value,
        "aria-haspopup": !0,
        id: e.id,
        "aria-label": e.ariaLabel ?? "Select option",
        "aria-describedby": e.ariaDescribedby,
        class: Ge([
          "select-trigger",
          "console-skin-select-trigger",
          a.value && "select-trigger-open",
          e.error && "select-trigger-error",
          e.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          Rr(Qe(Ne, ["prevent"]), ["down"]),
          Rr(Qe(Ne, ["prevent"]), ["up"])
        ]
      }, [
        H("span", J1, [
          Ls(W.$slots, "selected", { option: j.value }, () => [
            zn(ue(te.value), 1)
          ], !0)
        ]),
        e.clearable && U.value && !e.disabled ? (ge(), Se("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Qe(we, ["stop"]),
          onMousedown: re[0] || (re[0] = Qe(() => {
          }, ["stop"])),
          onKeydown: Rr(Qe(we, ["stop", "prevent"]), ["enter"])
        }, [
          ye(ze, {
            name: "x",
            size: "sm"
          })
        ], 40, Q1)) : Ze("", !0),
        H("span", Z1, [
          ye(ze, {
            name: "chevronDown",
            size: "md",
            class: Ge(["transition-transform duration-200", a.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, X1),
      (ge(), pn(Ta, { to: "body" }, [
        ye(_u, { name: "select-dropdown" }, {
          default: tr(() => [
            a.value ? (ge(), Se("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: Ge(["select-dropdown-portal console-skin-select-menu", [r]]),
              style: ir(k.value),
              role: "listbox",
              onClick: re[3] || (re[3] = Qe(() => {
              }, ["stop"])),
              onMousedown: re[4] || (re[4] = Qe(() => {
              }, ["stop"])),
              onKeydown: Xe
            }, [
              E.value ? (ge(), Se("div", eb, [
                ye(ze, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                $o(H("input", {
                  ref_key: "searchInputRef",
                  ref: f,
                  "onUpdate:modelValue": re[1] || (re[1] = (oe) => i.value = oe),
                  type: "text",
                  placeholder: v.value,
                  "aria-label": v.value,
                  class: "select-search-input",
                  onClick: re[2] || (re[2] = Qe(() => {
                  }, ["stop"]))
                }, null, 8, tb), [
                  [qo, i.value]
                ])
              ])) : Ze("", !0),
              H("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: p
              }, [
                (ge(!0), Se(He, null, fn(J.value, (oe, Oe) => (ge(), Se("div", {
                  key: `${typeof O(oe)}:${String(O(oe) ?? "")}`,
                  role: "option",
                  "aria-selected": ie(oe),
                  "aria-disabled": N(oe),
                  onClick: Qe((Ke) => !N(oe) && fe(oe), ["stop"]),
                  onMouseenter: (Ke) => z(oe, Oe),
                  class: Ge([
                    "select-option",
                    C(oe) && "select-option-group",
                    ie(oe) && "select-option-selected",
                    N(oe) && !C(oe) && "select-option-disabled",
                    l.value === Oe && !C(oe) && "select-option-focused"
                  ])
                }, [
                  Ls(W.$slots, "option", {
                    option: oe,
                    selected: ie(oe)
                  }, () => [
                    oe._creatable ? (ge(), pn(ze, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : Ze("", !0),
                    H("span", {
                      class: Ge(["select-option-label", oe._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, ue(D(oe)), 3),
                    ie(oe) ? (ge(), pn(ze, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : Ze("", !0)
                  ], !0)
                ], 42, nb))), 128)),
                J.value.length === 0 ? (ge(), Se("div", rb, ue(o.loading ? le(n)("common.loading") : x.value), 1)) : Ze("", !0)
              ], 512)
            ], 38)) : Ze("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), fs = /* @__PURE__ */ Za(ab, [["__scopeId", "data-v-fbc717eb"]]);
async function Gf(e) {
  var t, n;
  try {
    const r = await e.json(), o = new Error(((t = r.error) == null ? void 0 : t.message) || r.message || e.statusText);
    return Object.assign(o, {
      code: ((n = r.error) == null ? void 0 : n.code) || e.status,
      status: e.status,
      requestId: e.headers.get("X-Request-Id") || ""
    }), o;
  } catch {
    return Object.assign(new Error(e.statusText || `HTTP ${e.status}`), {
      code: e.status,
      status: e.status,
      requestId: e.headers.get("X-Request-Id") || ""
    });
  }
}
function ib(e) {
  if (!e || typeof e != "object") return [];
  const t = e, n = Array.isArray(t.data) ? t.data : Array.isArray(t.models) ? t.models : [], r = /* @__PURE__ */ new Set(), o = [];
  for (const s of n) {
    const i = (typeof s == "string" ? s : s && typeof s == "object" ? String(s.id || s.name || "") : "").trim().replace(/^models\//, ""), l = i.toLowerCase(), u = l.startsWith("gpt-image-") || l === "grok-imagine" || l === "grok-imagine-edit" || l.startsWith("grok-imagine-image");
    !i || !u || r.has(i) || (r.add(i), o.push(i));
  }
  return o;
}
async function lb(e, t = {}) {
  const n = await fetch(Mf("/v1/models"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${e}`
    },
    signal: t.signal
  });
  if (!n.ok) throw await Gf(n);
  return ib(await n.json());
}
async function cb(e, t, n = {}) {
  const { referenceImages: r = [], ...o } = t, s = r.length > 0, a = { Authorization: `Bearer ${e}` };
  let i;
  if (s) {
    const u = new FormData();
    u.append("model", t.model), u.append("prompt", t.prompt), t.n !== void 0 && u.append("n", String(t.n)), t.size && u.append("size", t.size), t.quality && u.append("quality", t.quality), t.response_format && u.append("response_format", t.response_format), r.forEach((c) => u.append("image", c, c.name)), i = u;
  } else
    a["Content-Type"] = "application/json", i = JSON.stringify(o);
  const l = await fetch(
    Mf(s ? "/v1/images/edits" : "/v1/images/generations"),
    { method: "POST", headers: a, body: i, signal: n.signal }
  );
  if (!l.ok) throw await Gf(l);
  return l.json();
}
const ub = "zero-one-image-generation", Et = "history", ua = 20;
function ei() {
  return typeof indexedDB > "u" ? Promise.reject(new Error("IndexedDB is not available")) : new Promise((e, t) => {
    const n = indexedDB.open(ub, 1);
    n.onupgradeneeded = () => {
      n.result.objectStoreNames.contains(Et) || n.result.createObjectStore(Et, { keyPath: "id" });
    }, n.onsuccess = () => e(n.result), n.onerror = () => t(n.error || new Error("Failed to open IndexedDB"));
  });
}
function ti(e) {
  return new Promise((t, n) => {
    e.onsuccess = () => t(e.result), e.onerror = () => n(e.error || new Error("IndexedDB request failed"));
  });
}
function fa(e) {
  return new Promise((t, n) => {
    e.oncomplete = () => t(), e.onerror = () => n(e.error || new Error("IndexedDB transaction failed")), e.onabort = () => n(e.error || new Error("IndexedDB transaction aborted"));
  });
}
function qf(e, t) {
  return e.userId === t && Array.isArray(e.images) && e.images.length > 0;
}
async function fb(e) {
  const t = await ei();
  try {
    return (await ti(
      t.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((r) => qf(r, e)).sort((r, o) => o.createdAt - r.createdAt).slice(0, ua);
  } finally {
    t.close();
  }
}
async function db(e, t) {
  const n = await ei();
  try {
    const r = n.transaction(Et, "readwrite");
    r.objectStore(Et).put({ ...t, userId: e }), await fa(r);
    const s = (await ti(
      n.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((i) => qf(i, e)).sort((i, l) => l.createdAt - i.createdAt), a = s.slice(ua);
    if (a.length > 0) {
      const i = n.transaction(Et, "readwrite");
      a.forEach((l) => i.objectStore(Et).delete(l.id)), await fa(i);
    }
    return s.slice(0, ua);
  } finally {
    n.close();
  }
}
async function mb(e) {
  const t = await ei();
  try {
    const r = (await ti(
      t.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((s) => s.userId === e);
    if (r.length === 0) return;
    const o = t.transaction(Et, "readwrite");
    r.forEach((s) => o.objectStore(Et).delete(s.id)), await fa(o);
  } finally {
    t.close();
  }
}
async function hb(e = 1, t = 10, n, r) {
  const { data: o } = await Z.get("/keys", {
    params: { page: e, page_size: t, ...n },
    signal: r == null ? void 0 : r.signal
  });
  return o;
}
async function pb(e) {
  const { data: t } = await Z.get(`/keys/${e}`);
  return t;
}
async function gb(e, t, n, r, o, s, a, i) {
  const l = { name: e };
  t !== void 0 && (l.group_id = t), n && (l.custom_key = n), r && r.length > 0 && (l.ip_whitelist = r), o && o.length > 0 && (l.ip_blacklist = o), s !== void 0 && s > 0 && (l.quota = s), a !== void 0 && a > 0 && (l.expires_in_days = a), i != null && i.rate_limit_5h && i.rate_limit_5h > 0 && (l.rate_limit_5h = i.rate_limit_5h), i != null && i.rate_limit_1d && i.rate_limit_1d > 0 && (l.rate_limit_1d = i.rate_limit_1d), i != null && i.rate_limit_7d && i.rate_limit_7d > 0 && (l.rate_limit_7d = i.rate_limit_7d);
  const { data: u } = await Z.post("/keys", l);
  return u;
}
async function Yf(e, t) {
  const { data: n } = await Z.put(`/keys/${e}`, t);
  return n;
}
async function _b(e) {
  const { data: t } = await Z.delete(`/keys/${e}`);
  return t;
}
async function bb(e, t) {
  return Yf(e, { status: t });
}
const yb = {
  list: hb,
  getById: pb,
  create: gb,
  update: Yf,
  delete: _b,
  toggleStatus: bb
};
function Xf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function Ir(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function mn(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function vb(e) {
  const t = { ...e };
  t.challenge = Ir(String(t.challenge));
  const n = { ...t.user };
  return n.id = Ir(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: Ir(String(r.id))
  }))), t;
}
function Eb(e) {
  const t = { ...e };
  return t.challenge = Ir(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: Ir(String(n.id))
  }))), t;
}
function wb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: mn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: mn(t.attestationObject),
      clientDataJSON: mn(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function Sb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: mn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: mn(t.authenticatorData),
      clientDataJSON: mn(t.clientDataJSON),
      signature: mn(t.signature),
      userHandle: mn(t.userHandle)
    }
  };
}
async function Ab(e) {
  Xf();
  const { data: t } = e ? await Z.post("/auth/passkey/login/begin", e) : await Z.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: Eb(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await Z.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: Sb(n)
  });
  return r;
}
async function Tb(e, t) {
  Xf();
  const { data: n } = await Z.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: vb(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await Z.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: wb(r)
    }
  );
  return o;
}
async function Ob() {
  const { data: e } = await Z.get("/user/passkeys");
  return e;
}
async function Cb(e, t) {
  await Z.patch(`/user/passkeys/${e}`, { name: t });
}
async function Rb(e, t) {
  await Z.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Lb = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Ab,
  register: Tb,
  list: Ob,
  rename: Cb,
  remove: Rb
};
async function Ib() {
  const { data: e } = await Z.get("/admin/settings");
  return e;
}
async function kb() {
  const { data: e } = await Z.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return e;
}
async function xb(e) {
  const { data: t } = await Z.put(
    "/admin/settings",
    e
  );
  return t;
}
async function Pb(e) {
  const { data: t } = await Z.post(
    "/admin/settings/test-smtp",
    e
  );
  return t;
}
async function Nb(e) {
  const { data: t } = await Z.post(
    "/admin/settings/send-test-email",
    e
  );
  return t;
}
async function Mb() {
  const { data: e } = await Z.get(
    "/admin/settings/email-templates"
  );
  return e;
}
async function Db(e, t) {
  const { data: n } = await Z.get(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
  );
  return n;
}
async function Fb(e, t, n) {
  const { data: r } = await Z.put(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,
    n
  );
  return r;
}
async function Ub(e, t) {
  const { data: n } = await Z.post(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}/restore-official`
  );
  return n;
}
async function $b(e) {
  const { data: t } = await Z.post(
    "/admin/settings/email-template-preview",
    e
  );
  return t;
}
async function Hb() {
  const { data: e } = await Z.get(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Vb() {
  const { data: e } = await Z.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return e;
}
async function jb() {
  const { data: e } = await Z.delete(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Bb() {
  const { data: e } = await Z.get(
    "/admin/settings/overload-cooldown"
  );
  return e;
}
async function Wb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/overload-cooldown",
    e
  );
  return t;
}
async function Kb() {
  const { data: e } = await Z.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return e;
}
async function zb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/rate-limit-429-cooldown",
    e
  );
  return t;
}
async function Gb() {
  const { data: e } = await Z.get(
    "/admin/settings/panel-rate-limit"
  );
  return e;
}
async function qb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/panel-rate-limit",
    e
  );
  return t;
}
async function Yb() {
  const { data: e } = await Z.get(
    "/admin/settings/stream-timeout"
  );
  return e;
}
async function Xb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/stream-timeout",
    e
  );
  return t;
}
async function Jb() {
  const { data: e } = await Z.get(
    "/admin/settings/rectifier"
  );
  return e;
}
async function Qb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/rectifier",
    e
  );
  return t;
}
async function Zb() {
  const { data: e } = await Z.get(
    "/admin/settings/beta-policy"
  );
  return e;
}
async function e2(e) {
  const { data: t } = await Z.put(
    "/admin/settings/beta-policy",
    e
  );
  return t;
}
async function t2() {
  const { data: e } = await Z.get(
    "/admin/settings/web-search-emulation"
  );
  return e;
}
async function n2(e) {
  const { data: t } = await Z.put(
    "/admin/settings/web-search-emulation",
    e
  );
  return t;
}
async function r2(e) {
  const { data: t } = await Z.post(
    "/admin/settings/web-search-emulation/test",
    { query: e }
  );
  return t;
}
async function s2(e) {
  await Z.post(
    "/admin/settings/web-search-emulation/reset-usage",
    e
  );
}
const o2 = {
  getSettings: Ib,
  getNavigationSettings: kb,
  updateSettings: xb,
  testSmtpConnection: Pb,
  sendTestEmail: Nb,
  getEmailTemplates: Mb,
  getEmailTemplate: Db,
  updateEmailTemplate: Fb,
  restoreOfficialEmailTemplate: Ub,
  previewEmailTemplate: $b,
  getAdminApiKey: Hb,
  regenerateAdminApiKey: Vb,
  deleteAdminApiKey: jb,
  getOverloadCooldownSettings: Bb,
  updateOverloadCooldownSettings: Wb,
  getRateLimit429CooldownSettings: Kb,
  updateRateLimit429CooldownSettings: zb,
  getPanelRateLimitSettings: Gb,
  updatePanelRateLimitSettings: qb,
  getStreamTimeoutSettings: Yb,
  updateStreamTimeoutSettings: Xb,
  getRectifierSettings: Jb,
  updateRectifierSettings: Qb,
  getBetaPolicySettings: Zb,
  updateBetaPolicySettings: e2,
  getWebSearchEmulationConfig: t2,
  updateWebSearchEmulationConfig: n2,
  testWebSearchEmulation: r2,
  resetWebSearchUsage: s2
}, a2 = {
  // ==================== Config ====================
  /** Get payment configuration (admin view) */
  getConfig() {
    return Z.get("/admin/payment/config");
  },
  /** Update payment configuration */
  updateConfig(e) {
    return Z.put("/admin/payment/config", e);
  },
  // ==================== Dashboard ====================
  /** Get payment dashboard statistics */
  getDashboard(e) {
    return Z.get("/admin/payment/dashboard", {
      params: e ? { days: e } : void 0
    });
  },
  // ==================== Orders ====================
  /** Get all orders (paginated, with filters) */
  getOrders(e) {
    return Z.get("/admin/payment/orders", { params: e });
  },
  /** Get a specific order by ID */
  getOrder(e) {
    return Z.get(`/admin/payment/orders/${e}`);
  },
  /** Cancel an order (admin) */
  cancelOrder(e) {
    return Z.post(`/admin/payment/orders/${e}/cancel`);
  },
  /** Retry recharge for a failed order */
  retryRecharge(e) {
    return Z.post(`/admin/payment/orders/${e}/retry`);
  },
  /** Process a refund */
  refundOrder(e, t) {
    return Z.post(`/admin/payment/orders/${e}/refund`, t);
  },
  /** Query and finalize a pending refund */
  queryRefund(e) {
    return Z.post(`/admin/payment/orders/${e}/refund/query`);
  },
  // ==================== Channels ====================
  /** Get all payment channels */
  getChannels() {
    return Z.get("/admin/payment/channels");
  },
  /** Create a payment channel */
  createChannel(e) {
    return Z.post("/admin/payment/channels", e);
  },
  /** Update a payment channel */
  updateChannel(e, t) {
    return Z.put(`/admin/payment/channels/${e}`, t);
  },
  /** Delete a payment channel */
  deleteChannel(e) {
    return Z.delete(`/admin/payment/channels/${e}`);
  },
  // ==================== Subscription Plans ====================
  /** Get all subscription plans */
  getPlans() {
    return Z.get("/admin/payment/plans");
  },
  /** Create a subscription plan */
  createPlan(e) {
    return Z.post("/admin/payment/plans", e);
  },
  /** Update a subscription plan */
  updatePlan(e, t) {
    return Z.put(`/admin/payment/plans/${e}`, t);
  },
  /** Delete a subscription plan */
  deletePlan(e) {
    return Z.delete(`/admin/payment/plans/${e}`);
  },
  // ==================== Provider Instances ====================
  /** Get all provider instances */
  getProviders() {
    return Z.get("/admin/payment/providers");
  },
  /** Create a provider instance */
  createProvider(e) {
    return Z.post("/admin/payment/providers", e);
  },
  /** Update a provider instance */
  updateProvider(e, t) {
    return Z.put(`/admin/payment/providers/${e}`, t);
  },
  /** Delete a provider instance */
  deleteProvider(e) {
    return Z.delete(`/admin/payment/providers/${e}`);
  }
}, Gl = {
  settings: o2,
  payment: a2
}, ds = "auth_token", ms = "auth_user", hs = "refresh_token", ps = "token_expires_at", kr = "pending_auth_session", i2 = 60 * 1e3, l2 = 120 * 1e3;
function c2(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function ql() {
  const e = localStorage.getItem(kr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: c2(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(kr), null);
  } catch {
    return localStorage.removeItem(kr), null;
  }
}
function u2(e) {
  localStorage.setItem(kr, JSON.stringify(e));
}
function Yl() {
  localStorage.removeItem(kr);
}
const Kr = /* @__PURE__ */ xa("auth", () => {
  const e = Q(null), t = Q(null), n = Q(null), r = Q(null), o = Q("standard"), s = Q(null);
  let a = null, i = null;
  const l = _e(() => !!t.value && !!e.value), u = _e(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), c = _e(() => o.value === "simple"), f = _e(() => s.value !== null);
  function h(V) {
    const z = localStorage.getItem(ds), ae = localStorage.getItem(ms), Re = localStorage.getItem(hs), xe = localStorage.getItem(ps);
    if (s.value = ql(), z && ae)
      try {
        const fe = JSON.parse(ae), { run_mode: we, ...Ne } = fe;
        return t.value = z, e.value = Ne, o.value = V ?? we ?? "standard", n.value = Re, r.value = xe ? parseInt(xe, 10) : null, !0;
      } catch (fe) {
        console.error("Failed to parse saved user data:", fe), de({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function p(V) {
    o.value = V;
  }
  function S() {
    h() && (ie().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), w(), n.value && r.value !== null && v(r.value));
  }
  function w() {
    T(), a = setInterval(() => {
      t.value && ie().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, i2);
  }
  function T() {
    a && (clearInterval(a), a = null);
  }
  function v(V) {
    i && (clearTimeout(i), i = null);
    const z = Date.now(), ae = Math.max(0, V - z - l2);
    if (ae <= 0) {
      y();
      return;
    }
    i = setTimeout(() => {
      y();
    }, ae);
  }
  function x(V) {
    const z = Date.now() + V * 1e3;
    r.value = z, localStorage.setItem(ps, String(z)), v(z);
  }
  async function y() {
    if (n.value)
      try {
        const V = await jn.refreshToken();
        t.value = V.access_token, n.value = V.refresh_token, x(V.expires_in);
      } catch (V) {
        console.error("Token refresh failed:", V);
      }
  }
  function E() {
    i && (clearTimeout(i), i = null);
  }
  async function k(V) {
    try {
      const z = await jn.login(V);
      return Ja(z) || N(z), z;
    } catch (z) {
      throw de({ preservePendingAuthSession: s.value !== null }), z;
    }
  }
  async function O(V, z) {
    try {
      const ae = await jn.login2FA({ temp_token: V, totp_code: z });
      return N(ae), e.value;
    } catch (ae) {
      throw de({ preservePendingAuthSession: s.value !== null }), ae;
    }
  }
  async function D(V) {
    try {
      const z = await Lb.login(V);
      return N(z), e.value;
    } catch (z) {
      throw de({ preservePendingAuthSession: s.value !== null }), z;
    }
  }
  function N(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(hs, V.refresh_token)), V.user.run_mode && (o.value = V.user.run_mode);
    const { run_mode: z, ...ae } = V.user;
    e.value = ae, localStorage.setItem(ds, V.access_token), localStorage.setItem(ms, JSON.stringify(ae)), U(), w(), V.refresh_token && V.expires_in && x(V.expires_in);
  }
  async function C(V) {
    try {
      const z = await jn.register(V);
      return N(z), e.value;
    } catch (z) {
      throw de({ preservePendingAuthSession: s.value !== null }), z;
    }
  }
  async function j(V) {
    T(), E(), t.value = null, e.value = null, t.value = V, localStorage.setItem(ds, V);
    const z = localStorage.getItem(hs), ae = localStorage.getItem(ps);
    z && (n.value = z), ae && (r.value = parseInt(ae, 10));
    try {
      const Re = await ie();
      return w(), z && r.value !== null && v(r.value), U(), Re;
    } catch (Re) {
      throw de({ preservePendingAuthSession: s.value !== null }), Re;
    }
  }
  function te(V) {
    if (s.value = V, V) {
      u2(V);
      return;
    }
    Yl();
  }
  function U() {
    te(null);
  }
  async function J() {
    try {
      await jn.logout();
    } catch (V) {
      console.warn("Logout API call failed, clearing local session anyway", V);
    } finally {
      de();
    }
  }
  async function ie() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const V = await jn.getCurrentUser();
      V.data.run_mode && (o.value = V.data.run_mode);
      const { run_mode: z, ...ae } = V.data;
      return e.value = ae, localStorage.setItem(ms, JSON.stringify(ae)), ae;
    } catch (V) {
      throw V.status === 401 && de({ preservePendingAuthSession: s.value !== null }), V;
    }
  }
  function de(V) {
    if (T(), E(), t.value = null, n.value = null, r.value = null, e.value = null, localStorage.removeItem(ds), localStorage.removeItem(ms), localStorage.removeItem(hs), localStorage.removeItem(ps), V != null && V.preservePendingAuthSession) {
      s.value = ql();
      return;
    }
    s.value = null, Yl();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: Nr(o),
    pendingAuthSession: Nr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: k,
    loginWithPasskey: D,
    login2FA: O,
    register: C,
    setToken: j,
    logout: J,
    checkAuth: S,
    hydrateAuthSnapshot: h,
    setRunModeSnapshot: p,
    refreshUser: ie,
    setPendingAuthSession: te,
    clearPendingAuthSession: U
  };
}), f2 = 100;
function Xl(e) {
  return !e.isAuthenticated || !e.token || !e.user ? "" : `${e.user.id}:${e.user.role}:${e.token}`;
}
function d2(e, t = {}) {
  const n = Q(!1), r = Q(!1), o = Q([]);
  let s = "", a = 0, i = null, l = null;
  function u(f) {
    return s === f ? !1 : (s = f, a += 1, l == null || l.abort(), l = null, i = null, n.value = !1, r.value = !1, o.value = [], !0);
  }
  async function c(f = !1) {
    const h = Kr(), p = Xl(h);
    if (u(p), !p)
      return n.value = !0, [];
    if (n.value && !f) return o.value;
    if (i && !f) return i;
    i && (a += 1, l == null || l.abort(), l = null, i = null);
    const S = ++a, w = new AbortController();
    l = w, r.value = !0;
    const T = (async () => {
      const v = [];
      let x = 1;
      for (; ; ) {
        const y = await yb.list(x, f2, {
          status: "active",
          sort_by: "created_at",
          sort_order: "desc"
        }, { signal: w.signal });
        if (S !== a || p !== s) return [];
        if (v.push(...(y.items || []).filter(e)), t.stopAfterFirst && v.length > 0 || x >= y.pages || (y.items || []).length === 0) break;
        x += 1;
      }
      return S !== a || p !== s ? [] : (o.value = v, n.value = !0, v);
    })().catch(() => (S === a && p === s && (o.value = [], n.value = !0), [])).finally(() => {
      i === T && (i = null, l = null, r.value = !1);
    });
    return i = T, T;
  }
  return function() {
    const h = Kr();
    return yt(
      () => Xl(h),
      (p) => {
        const S = n.value || i !== null || o.value.length > 0;
        u(p) && p && S && c();
      },
      { immediate: !0 }
    ), {
      allowedKeys: _e(() => o.value),
      canAccess: _e(() => o.value.length > 0),
      loaded: _e(() => n.value),
      loading: _e(() => r.value),
      refresh: c
    };
  };
}
const m2 = d2(Jf);
function h2() {
  const e = m2();
  return {
    allowedImageKeys: e.allowedKeys,
    canUseImageGeneration: e.canAccess,
    imageGenerationAccessLoaded: e.loaded,
    imageGenerationAccessLoading: e.loading,
    refreshImageGenerationAccess: e.refresh
  };
}
const p2 = /* @__PURE__ */ xa("adminSettings", () => {
  const e = Kr(), t = Q(!1), n = Q(!1), r = Q(!0), o = Q(!0), s = Q("auto"), a = Q(!1), i = Q([]), l = Q(null);
  let u = null, c = null, f = null, h = null, p = !1, S = 0, w = 0, T = 0, v = 0;
  function x() {
    v += 1, S += 1, w += 1, T += 1, u = c = null, f = h = null, t.value = n.value = p = !1, l.value = null, i.value = [], r.value = o.value = !0, s.value = "auto", a.value = !1;
  }
  yt(
    () => e.token && e.user ? `${e.user.id}:${e.user.role}` : "",
    x,
    { flush: "sync" }
  );
  function y(j = !1) {
    if (f) {
      if (j && !h) {
        T += 1;
        const J = v, ie = f.then(() => (h === ie && (h = null), J === v ? y(!0) : void 0)).finally(() => {
          h === ie && (h = null);
        });
        h = ie;
      }
      return j ? h : f;
    }
    if (p && !j) return Promise.resolve();
    const te = ++T, U = Gl.payment.getConfig().then((J) => {
      var ie;
      te === T && (a.value = ((ie = J.data) == null ? void 0 : ie.enabled) ?? !1, p = !0);
    }).catch((J) => {
      te === T && console.error("[adminSettings] Failed to fetch payment settings:", J);
    }).finally(() => {
      f === U && (f = null);
    });
    return f = U, U;
  }
  function E(j = !1) {
    var ie;
    if (!e.token || ((ie = e.user) == null ? void 0 : ie.role) !== "admin") return Promise.resolve();
    if (u) {
      if (j && !c) {
        S += 1;
        const de = v, V = u.then(() => (c === V && (c = null), de === v ? E(!0) : void 0)).finally(() => {
          c === V && (c = null);
        });
        c = V;
      }
      return j ? c : u;
    }
    if (y(j), t.value && !j) return Promise.resolve();
    j && (S += 1), n.value = !0;
    const te = S, U = w, J = Gl.settings.getNavigationSettings().then((de) => {
      te === S && (U === w && (r.value = de.ops_monitoring_enabled ?? !0, o.value = de.ops_realtime_monitoring_enabled ?? !0, s.value = de.ops_query_mode_default || "auto"), l.value = {
        ...de,
        ops_monitoring_enabled: r.value,
        ops_realtime_monitoring_enabled: o.value,
        ops_query_mode_default: s.value
      }, i.value = Array.isArray(de.custom_menu_items) ? de.custom_menu_items : [], t.value = !0);
    }).catch((de) => {
      te === S && console.error("[adminSettings] Failed to fetch settings:", de);
    }).finally(() => {
      u === J && (u = null, n.value = !1);
    });
    return u = J, J;
  }
  function k(j) {
    w += 1, r.value = j, l.value && (l.value.ops_monitoring_enabled = j);
  }
  function O(j) {
    w += 1, o.value = j, l.value && (l.value.ops_realtime_monitoring_enabled = j);
  }
  function D(j) {
    T += 1, a.value = j, p = !0;
  }
  function N(j) {
    w += 1, s.value = j || "auto", l.value && (l.value.ops_query_mode_default = s.value);
  }
  const C = () => k(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", C), uc(() => {
    x(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", C);
  }), {
    loaded: t,
    loading: n,
    opsMonitoringEnabled: r,
    opsRealtimeMonitoringEnabled: o,
    opsQueryModeDefault: s,
    paymentEnabled: a,
    customMenuItems: i,
    navigationSettings: l,
    fetch: E,
    reset: x,
    setOpsMonitoringEnabledLocal: k,
    setOpsRealtimeMonitoringEnabledLocal: O,
    setPaymentEnabledLocal: D,
    setOpsQueryModeDefaultLocal: N
  };
});
function Rn(e, t = "Unknown error", n) {
  var o, s, a, i;
  if (!e) return t;
  if (typeof e == "object" && e !== null) {
    const l = e;
    if (l.message) return l.message;
    if (l.error) return l.error;
    if ((s = (o = l.response) == null ? void 0 : o.data) != null && s.detail) return l.response.data.detail;
    if ((i = (a = l.response) == null ? void 0 : a.data) != null && i.message) return l.response.data.message;
  }
  if (e instanceof Error) return e.message;
  const r = String(e);
  return r === "[object Object]" ? t : r;
}
const g2 = "image-tutorial", _2 = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function b2(e) {
  return e.navigation_type !== "qr" && e.placement !== "header" && !!e.id.trim() && !!e.url.trim();
}
function y2(e) {
  const t = (e == null ? void 0 : e.filter(b2)) ?? [];
  return t.find((n) => n.id === g2) ?? t.find((n) => _2.has(n.label.trim().toLowerCase()));
}
function Jl(e) {
  const t = y2(e);
  return t ? `/custom/${encodeURIComponent(t.id)}` : "";
}
const v2 = { class: "online-image-module space-y-6" }, E2 = {
  class: "online-image-layout",
  "data-testid": "image-generation-form"
}, w2 = { class: "card space-y-5 p-5" }, S2 = { "data-testid": "api-key-row" }, A2 = { class: "input-label mb-1.5 block" }, T2 = { class: "api-key-control-row" }, O2 = ["disabled"], C2 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, R2 = {
  key: 0,
  class: "mt-1 text-xs text-gray-400 dark:text-gray-500"
}, L2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "model-count-row"
}, I2 = {
  class: "input-label mb-1.5 block",
  "data-testid": "model-select-label"
}, k2 = { class: "input-label mb-1.5 block" }, x2 = { "data-testid": "size-control" }, P2 = { class: "input-label mb-1.5 block" }, N2 = ["aria-label"], M2 = { class: "truncate" }, D2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "quality-format-row"
}, F2 = { class: "input-label mb-1.5 block" }, U2 = { class: "input-label mb-1.5 block" }, $2 = {
  class: "space-y-2",
  "data-testid": "reference-images-panel"
}, H2 = { class: "flex flex-wrap items-center justify-between gap-3" }, V2 = {
  for: "reference-image-input",
  class: "input-label"
}, j2 = ["onKeydown"], B2 = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, W2 = ["src", "alt"], K2 = ["aria-label", "onClick"], z2 = { class: "mt-4 flex flex-wrap items-center gap-3 first:mt-0" }, G2 = { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, q2 = { class: "min-w-0 flex-1" }, Y2 = { class: "text-sm font-medium text-gray-800 dark:text-gray-200" }, X2 = { class: "mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400" }, J2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Q2 = {
  key: 1,
  class: "text-xs text-red-500"
}, Z2 = ["href", "aria-disabled", "tabindex", "title"], ey = {
  class: "space-y-4",
  "data-testid": "right-column"
}, ty = {
  class: "card space-y-4 p-5",
  "data-testid": "prompt-panel"
}, ny = { class: "input-label mb-1.5 block" }, ry = ["placeholder"], sy = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, oy = ["disabled"], ay = {
  class: "card p-5",
  "data-testid": "results-panel"
}, iy = { class: "flex items-start justify-between gap-3" }, ly = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, cy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, uy = {
  key: 0,
  class: "badge badge-gray"
}, fy = {
  key: 0,
  class: "flex min-h-[360px] flex-col items-center justify-center py-8 text-center"
}, dy = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, my = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, hy = {
  key: 1,
  class: "mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
}, py = { class: "bg-gray-50 dark:bg-dark-900" }, gy = ["src", "alt"], _y = { class: "space-y-3 p-4" }, by = { class: "text-sm leading-6 text-gray-700 dark:text-gray-300" }, yy = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, vy = { class: "grid grid-cols-2 gap-2" }, Ey = ["onClick"], wy = ["onClick"], Sy = { class: "card p-5" }, Ay = { class: "flex flex-wrap items-start justify-between gap-3" }, Ty = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Oy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Cy = ["disabled"], Ry = {
  key: 0,
  class: "flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400"
}, Ly = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400 dark:text-gray-500"
}, Iy = {
  key: 2,
  class: "mt-4 space-y-4"
}, ky = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, xy = { class: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400" }, Py = { class: "mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300" }, Ny = { class: "grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4" }, My = ["src", "alt"], Dy = { class: "grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700" }, Fy = ["aria-label", "onClick"], Uy = ["aria-label", "onClick"], $y = { class: "space-y-5" }, Hy = { class: "text-sm text-gray-500 dark:text-gray-400" }, Vy = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, jy = { class: "grid grid-cols-3 gap-2" }, By = ["aria-pressed", "onClick"], Wy = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Ky = { class: "grid grid-cols-4 gap-2 sm:gap-3" }, zy = ["aria-pressed", "onClick"], Gy = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, qy = { class: "text-sm text-gray-500 dark:text-gray-400" }, Yy = { class: "mt-1 text-xl font-semibold text-gray-900 dark:text-white" }, Xy = { class: "flex w-full justify-end gap-2" }, Jy = /* @__PURE__ */ nn({
  __name: "ImageGenerationView",
  setup(e) {
    const { t } = Xr(), n = Qa(), r = Kr(), o = p2(), s = _e(() => {
      var X;
      if (r.isAdmin) {
        const B = Jl(o.customMenuItems);
        if (B || o.loaded) return B;
      }
      return Jl((X = n.cachedPublicSettings) == null ? void 0 : X.custom_menu_items);
    });
    function a(X, B) {
      var st, mr, hr;
      if (!B) return;
      X.preventDefault();
      const K = [...document.querySelectorAll("aside a[href]")].find((ts) => ts.getAttribute("href") === B);
      if (K) {
        K.click();
        return;
      }
      const Ee = document.querySelector("#app"), ke = (hr = (mr = (st = Ee == null ? void 0 : Ee.__vue_app__) == null ? void 0 : st.config) == null ? void 0 : mr.globalProperties) == null ? void 0 : hr.$router;
      if (ke) {
        ke.push(B);
        return;
      }
      window.location.assign(B);
    }
    const {
      allowedImageKeys: i,
      imageGenerationAccessLoading: l,
      refreshImageGenerationAccess: u
    } = h2(), c = Q(null), f = Q(null), h = Q([]), p = Q(!1), S = Q("");
    let w = null, T = 0;
    const v = Q("1"), x = Q(""), y = Q("2K"), E = Q("9:16"), k = Q("1152x2048"), O = Q("high"), D = Q("b64_json"), N = Q(!1), C = Q([]), j = Q(""), te = Q(t("imageGeneration.results.emptyHint")), U = Q(null), J = Q([]), ie = Q(""), de = Q(!1), V = Q(!1), z = Q(y.value), ae = Q(E.value), Re = ["1K", "2K", "4K"], xe = [
      { label: "1:1", value: "1:1", previewClass: "h-5 w-5" },
      { label: "3:2", value: "3:2", previewClass: "h-4 w-6" },
      { label: "2:3", value: "2:3", previewClass: "h-6 w-4" },
      { label: "16:9", value: "16:9", previewClass: "h-4 w-7" },
      { label: "9:16", value: "9:16", previewClass: "h-7 w-4" },
      { label: "4:3", value: "4:3", previewClass: "h-5 w-6" },
      { label: "3:4", value: "3:4", previewClass: "h-6 w-5" },
      { label: "21:9", value: "21:9", previewClass: "h-3 w-8" }
    ], fe = Q([]), we = Q(!0);
    let Ne = 0;
    const Xe = _e(() => i.value.map((X) => {
      var B, K;
      return {
        value: X.id,
        label: `${X.name} · ${((B = X.group) == null ? void 0 : B.name) || ((K = X.group) == null ? void 0 : K.platform) || t("common.unknown")}`
      };
    })), We = _e(() => i.value.find((X) => X.id === c.value) || null), pe = _e(() => {
      var B, K;
      const X = We.value;
      return X ? `${((B = X.group) == null ? void 0 : B.platform) || t("common.unknown")} · ${((K = X.group) == null ? void 0 : K.name) || t("common.unknown")}` : "";
    }), W = _e(() => h.value.map((X) => ({ value: X, label: X }))), re = [
      { label: "Auto", value: "auto" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ], oe = [
      { label: "Base64", value: "b64_json" },
      { label: "URL", value: "url" }
    ], Oe = _e(() => S.value ? S.value : p.value ? t("imageGeneration.hints.modelsLoading") : We.value && h.value.length === 0 ? t("imageGeneration.hints.modelsEmpty") : ""), Ke = _e(() => `${y.value} · ${E.value}`), g = _e(() => b(z.value, ae.value)), _ = _e(() => N.value || l.value || p.value || !We.value || !f.value || !x.value.trim());
    function b(X, B) {
      const K = { "1K": 1024, "2K": 2048, "4K": 4096 }[X] || 2048, [Ee, ke] = B.split(":").map(Number);
      return !Ee || !ke ? `${K}x${K}` : Ee >= ke ? `${K}x${Math.round(K * ke / Ee)}` : `${Math.round(K * Ee / ke)}x${K}`;
    }
    function P() {
      z.value = y.value, ae.value = E.value, V.value = !0;
    }
    function L() {
      V.value = !1;
    }
    function M() {
      y.value = z.value, E.value = ae.value, k.value = g.value, L();
    }
    async function Y() {
      w == null || w.abort();
      const X = We.value;
      if (h.value = [], f.value = null, S.value = "", !X) return;
      const B = new AbortController(), K = ++T;
      w = B, p.value = !0;
      try {
        const Ee = await lb(X.key, { signal: B.signal });
        if (B.signal.aborted || K !== T) return;
        h.value = Ee, f.value = Ee[0] || null;
      } catch (Ee) {
        if (B.signal.aborted || K !== T) return;
        S.value = Rn(Ee, t("imageGeneration.messages.loadModelsFailed")), n.showError(S.value);
      } finally {
        K === T && (p.value = !1, w = null);
      }
    }
    async function G() {
      var X;
      try {
        await u(!0), c.value && !i.value.some((B) => B.id === c.value) ? c.value = ((X = i.value[0]) == null ? void 0 : X.id) || null : await Y();
      } catch (B) {
        n.showError(Rn(B, t("imageGeneration.messages.loadKeysFailed")));
      }
    }
    function d() {
      var X;
      (X = U.value) == null || X.click();
    }
    function m(X) {
      return `${X.name}-${X.size}-${X.lastModified}`;
    }
    function R(X) {
      const B = [...J.value], K = new Set(B.map((ke) => ke.id)), Ee = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
      ie.value = "";
      for (const ke of Array.from(X)) {
        if (B.length >= 4) {
          ie.value = t("imageGeneration.messages.referenceImagesLimit");
          break;
        }
        if (!Ee.has(ke.type.toLowerCase())) {
          ie.value = t("imageGeneration.messages.referenceImageType");
          continue;
        }
        if (ke.size > 20 * 1024 * 1024) {
          ie.value = t("imageGeneration.messages.referenceImageTooLarge");
          continue;
        }
        const st = m(ke);
        K.has(st) || (B.push({ id: st, file: ke, previewUrl: URL.createObjectURL(ke) }), K.add(st));
      }
      J.value = B, de.value = !1;
    }
    function F(X) {
      const B = X.target;
      B.files && R(B.files), B.value = "";
    }
    function ee(X) {
      var B;
      (B = X.dataTransfer) != null && B.files && R(X.dataTransfer.files);
    }
    function q(X) {
      const B = J.value.find((K) => K.id === X);
      B && URL.revokeObjectURL(B.previewUrl), J.value = J.value.filter((K) => K.id !== X), ie.value = "";
    }
    function I() {
      J.value.forEach((X) => URL.revokeObjectURL(X.previewUrl)), J.value = [], ie.value = "";
    }
    function $(X) {
      const B = String(X.mime_type || "").trim();
      if (B) return B;
      const K = String(X.output_format || "").trim().toLowerCase();
      return K === "webp" ? "image/webp" : K === "jpeg" || K === "jpg" ? "image/jpeg" : "image/png";
    }
    function ce(X) {
      const B = String(X.b64_json || "").trim();
      return B ? `data:${$(X)};base64,${B}` : String(X.url || "").trim();
    }
    function Ae(X, B) {
      const K = B === "image/webp" ? "webp" : B === "image/jpeg" ? "jpg" : "png";
      return `online-image-${Date.now()}-${X + 1}.${K}`;
    }
    function $e() {
      const X = Number.parseInt(v.value, 10);
      return Number.isFinite(X) ? Math.min(Math.max(X, 1), 4) : 1;
    }
    async function rt() {
      var B;
      const X = We.value;
      if (!X) return n.showError(t("imageGeneration.messages.chooseKey"));
      if (!f.value) return n.showError(t("imageGeneration.messages.chooseModel"));
      if (!x.value.trim()) return n.showError(t("imageGeneration.messages.choosePrompt"));
      N.value = !0;
      try {
        const K = await cb(X.key, {
          model: f.value,
          prompt: x.value.trim(),
          n: $e(),
          size: k.value,
          quality: String(O.value || ""),
          response_format: String(D.value || ""),
          referenceImages: J.value.map((st) => st.file)
        }), Ee = (K.data || []).flatMap((st, mr) => {
          const hr = ce(st);
          if (!hr) return [];
          const ts = String(st.revised_prompt || "").trim(), ni = $(st);
          return [{
            id: `${Date.now()}-${mr}-${Math.random().toString(36).slice(2, 8)}`,
            src: hr,
            prompt: ts || x.value.trim(),
            revisedPrompt: ts,
            mimeType: ni,
            downloadName: Ae(mr, ni)
          }];
        });
        if (C.value = Ee, j.value = K.model || f.value, te.value = Ee.length > 0 ? `${Ee.length} × ${j.value}` : t("imageGeneration.messages.noImages"), Ee.length === 0) return n.showInfo(t("imageGeneration.messages.noImages"));
        const ke = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
          createdAt: Date.now(),
          model: j.value,
          prompt: x.value.trim(),
          sizeLabel: Ke.value,
          imageSize: k.value,
          images: Ee
        };
        try {
          const st = (B = r.user) == null ? void 0 : B.id;
          if (!st) throw new Error("Authenticated User is required for image history");
          fe.value = await db(st, ke);
        } catch (st) {
          n.showInfo(Rn(st, t("imageGeneration.messages.historySaveFailed")));
        }
        n.showSuccess(t("imageGeneration.messages.generated"));
      } catch (K) {
        n.showError(Rn(K, t("imageGeneration.messages.generateFailed")));
      } finally {
        N.value = !1;
      }
    }
    async function Je(X) {
      try {
        if (X.src.startsWith("data:")) {
          const ke = document.createElement("a");
          ke.href = X.src, ke.download = X.downloadName, document.body.append(ke), ke.click(), ke.remove();
          return;
        }
        const B = await fetch(X.src);
        if (!B.ok) throw new Error(`HTTP ${B.status}`);
        const K = URL.createObjectURL(await B.blob()), Ee = document.createElement("a");
        Ee.href = K, Ee.download = X.downloadName, document.body.append(Ee), Ee.click(), Ee.remove(), URL.revokeObjectURL(K);
      } catch (B) {
        n.showError(Rn(B, t("imageGeneration.messages.downloadFailed")));
      }
    }
    function Nt(X) {
      window.open(X.src, "_blank", "noopener,noreferrer");
    }
    function dr(X) {
      return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(new Date(X));
    }
    async function it() {
      var K, Ee;
      const X = ++Ne, B = (K = r.user) == null ? void 0 : K.id;
      try {
        const ke = B ? await fb(B) : [];
        X === Ne && B === ((Ee = r.user) == null ? void 0 : Ee.id) && (fe.value = ke);
      } catch (ke) {
        n.showError(Rn(ke, t("imageGeneration.messages.historyLoadFailed")));
      } finally {
        X === Ne && (we.value = !1);
      }
    }
    async function Tt() {
      var X;
      if (window.confirm(t("imageGeneration.history.clearConfirm")))
        try {
          const B = (X = r.user) == null ? void 0 : X.id;
          if (!B) return;
          await mb(B), fe.value = [];
        } catch (B) {
          n.showError(Rn(B, t("imageGeneration.messages.historyClearFailed")));
        }
    }
    return yt(i, (X) => {
      X.length === 0 ? c.value = null : X.some((B) => B.id === c.value) || (c.value = X[0].id);
    }, { immediate: !0 }), yt(c, () => {
      Y();
    }, { immediate: !0 }), yt(() => {
      var X;
      return (X = r.user) == null ? void 0 : X.id;
    }, () => {
      fe.value = [], we.value = !0, it();
    }), lr(() => {
      u(), it(), r.isAdmin && o.fetch();
    }), Ca(() => {
      Ne += 1, T += 1, w == null || w.abort(), I();
    }), (X, B) => (ge(), Se("div", v2, [
      H("div", E2, [
        H("section", w2, [
          H("a", {
            href: "/keys",
            class: "btn btn-secondary btn-specular w-full",
            "data-testid": "create-image-api-key",
            "data-online-image-action": "",
            onClick: B[0] || (B[0] = (K) => a(K, "/keys"))
          }, [
            ye(ze, {
              name: "key",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.createImageApiKey")), 1)
          ]),
          H("div", S2, [
            H("label", A2, ue(le(t)("imageGeneration.controls.apiKey")), 1),
            H("div", T2, [
              ye(fs, {
                modelValue: c.value,
                "onUpdate:modelValue": B[1] || (B[1] = (K) => c.value = K),
                "data-testid": "api-key-select",
                "aria-label": le(t)("imageGeneration.controls.apiKey"),
                options: Xe.value,
                placeholder: le(t)("common.selectOption"),
                disabled: le(l) || le(i).length === 0,
                loading: le(l),
                "empty-text": le(l) ? le(t)("common.loading") : le(t)("common.noOptionsFound")
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular api-key-refresh",
                "data-testid": "refresh-keys",
                "data-online-image-action": "",
                disabled: le(l) || p.value,
                onClick: G
              }, [
                ye(ze, {
                  name: "refresh",
                  size: "md",
                  class: Ge({ "animate-spin": le(l) || p.value })
                }, null, 8, ["class"]),
                H("span", null, ue(le(t)("imageGeneration.controls.refreshKeys")), 1)
              ], 8, O2)
            ]),
            H("p", C2, ue(le(t)("imageGeneration.hints.apiKey")), 1),
            pe.value ? (ge(), Se("p", R2, ue(pe.value), 1)) : Ze("", !0)
          ]),
          H("div", L2, [
            H("div", null, [
              H("label", I2, ue(le(t)("imageGeneration.controls.modelSelection")), 1),
              ye(fs, {
                modelValue: f.value,
                "onUpdate:modelValue": B[2] || (B[2] = (K) => f.value = K),
                "data-testid": "model-select",
                "aria-label": le(t)("imageGeneration.controls.modelSelection"),
                options: W.value,
                placeholder: le(t)("common.selectOption"),
                disabled: !We.value || p.value || W.value.length === 0,
                loading: p.value,
                "empty-text": p.value ? le(t)("common.loading") : le(t)("common.noOptionsFound"),
                searchable: ""
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              Oe.value ? (ge(), Se("p", {
                key: 0,
                class: Ge(["mt-1 text-xs", S.value ? "text-red-500" : "text-gray-500 dark:text-gray-400"])
              }, ue(Oe.value), 3)) : Ze("", !0)
            ]),
            H("div", null, [
              H("label", k2, ue(le(t)("imageGeneration.controls.count")), 1),
              $o(H("input", {
                "onUpdate:modelValue": B[3] || (B[3] = (K) => v.value = K),
                type: "number",
                min: "1",
                max: "4",
                class: "input w-full"
              }, null, 512), [
                [qo, v.value]
              ])
            ])
          ]),
          H("div", x2, [
            H("label", P2, ue(le(t)("imageGeneration.controls.imageSize")), 1),
            H("button", {
              type: "button",
              "data-testid": "image-size-trigger",
              class: "btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left",
              "data-online-image-action": "",
              "aria-label": le(t)("imageGeneration.sizeDialog.title"),
              onClick: P
            }, [
              H("span", M2, ue(Ke.value), 1),
              ye(ze, {
                name: "chevronDown",
                size: "sm",
                class: "flex-shrink-0"
              })
            ], 8, N2)
          ]),
          H("div", D2, [
            H("div", null, [
              H("label", F2, ue(le(t)("imageGeneration.controls.quality")), 1),
              ye(fs, {
                modelValue: O.value,
                "onUpdate:modelValue": B[4] || (B[4] = (K) => O.value = K),
                options: re,
                "data-testid": "quality-select"
              }, null, 8, ["modelValue"])
            ]),
            H("div", null, [
              H("label", U2, ue(le(t)("imageGeneration.controls.responseFormat")), 1),
              ye(fs, {
                modelValue: D.value,
                "onUpdate:modelValue": B[5] || (B[5] = (K) => D.value = K),
                options: oe,
                "data-testid": "response-format-select"
              }, null, 8, ["modelValue"])
            ])
          ]),
          H("div", $2, [
            H("div", H2, [
              H("label", V2, ue(le(t)("imageGeneration.controls.referenceImages")), 1),
              J.value.length > 0 ? (ge(), Se("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm",
                "data-online-image-action": "",
                onClick: I
              }, ue(le(t)("imageGeneration.controls.clearReferenceImages")), 1)) : Ze("", !0)
            ]),
            H("input", {
              id: "reference-image-input",
              ref_key: "referenceInput",
              ref: U,
              type: "file",
              accept: "image/png,image/jpeg,image/webp",
              multiple: "",
              class: "sr-only",
              onChange: F
            }, null, 544),
            H("div", {
              class: Ge(["rounded-lg border-2 border-dashed p-4 transition-colors", de.value ? "border-gray-600 bg-gray-100 dark:border-gray-300 dark:bg-dark-700" : "border-gray-300 bg-gray-50 hover:border-gray-500 dark:border-dark-600 dark:bg-dark-900/50 dark:hover:border-gray-400"]),
              role: "button",
              tabindex: "0",
              onClick: d,
              onKeydown: [
                Rr(Qe(d, ["prevent"]), ["enter"]),
                Rr(Qe(d, ["prevent"]), ["space"])
              ],
              onDragenter: B[6] || (B[6] = Qe((K) => de.value = !0, ["prevent"])),
              onDragover: B[7] || (B[7] = Qe((K) => de.value = !0, ["prevent"])),
              onDragleave: B[8] || (B[8] = Qe((K) => de.value = !1, ["prevent"])),
              onDrop: Qe(ee, ["prevent"])
            }, [
              J.value.length > 0 ? (ge(), Se("div", B2, [
                (ge(!0), Se(He, null, fn(J.value, (K) => (ge(), Se("div", {
                  key: K.id,
                  class: "group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                }, [
                  H("img", {
                    src: K.previewUrl,
                    alt: K.file.name,
                    class: "h-full w-full object-cover"
                  }, null, 8, W2),
                  H("button", {
                    type: "button",
                    class: "absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
                    "aria-label": le(t)("imageGeneration.controls.removeReferenceImage"),
                    onClick: Qe((Ee) => q(K.id), ["stop"])
                  }, [
                    ye(ze, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, K2)
                ]))), 128))
              ])) : Ze("", !0),
              H("div", z2, [
                H("div", G2, [
                  ye(ze, {
                    name: "upload",
                    size: "md"
                  })
                ]),
                H("div", q2, [
                  H("p", Y2, ue(le(t)("imageGeneration.controls.referenceImagesDrop")), 1),
                  H("p", X2, ue(le(t)("imageGeneration.hints.referenceImages")), 1)
                ]),
                H("button", {
                  type: "button",
                  class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                  "data-online-image-action": "",
                  onClick: Qe(d, ["stop"])
                }, [
                  ye(ze, {
                    name: "upload",
                    size: "sm"
                  }),
                  zn(" " + ue(le(t)("imageGeneration.controls.chooseReferenceImages")), 1)
                ])
              ])
            ], 42, j2),
            J.value.length > 0 ? (ge(), Se("p", J2, ue(le(t)("imageGeneration.hints.referenceImagesSelected", { count: J.value.length })), 1)) : Ze("", !0),
            ie.value ? (ge(), Se("p", Q2, ue(ie.value), 1)) : Ze("", !0)
          ]),
          H("a", {
            href: s.value || void 0,
            class: Ge(["btn btn-secondary btn-specular w-full", { "pointer-events-none opacity-50": !s.value }]),
            "data-testid": "image-tutorial-link",
            "data-online-image-action": "",
            "aria-disabled": !s.value,
            tabindex: s.value ? void 0 : -1,
            title: s.value ? void 0 : le(t)("imageGeneration.hints.imageTutorialUnavailable"),
            onClick: B[9] || (B[9] = (K) => a(K, s.value))
          }, [
            ye(ze, {
              name: "book",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.imageTutorial")), 1)
          ], 10, Z2)
        ]),
        H("section", ey, [
          H("div", ty, [
            H("div", null, [
              H("label", ny, ue(le(t)("imageGeneration.controls.prompt")), 1),
              $o(H("textarea", {
                "onUpdate:modelValue": B[10] || (B[10] = (K) => x.value = K),
                rows: "5",
                class: "input min-h-32 w-full resize-y",
                placeholder: le(t)("imageGeneration.controls.prompt")
              }, null, 8, ry), [
                [qo, x.value]
              ]),
              H("p", sy, ue(le(t)("imageGeneration.hints.responseFormat")), 1)
            ]),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular w-full",
              "data-testid": "start-generation",
              "data-online-image-action": "",
              disabled: _.value,
              onClick: rt
            }, [
              ye(ze, {
                name: "sparkles",
                size: "md",
                class: Ge({ "animate-pulse": N.value })
              }, null, 8, ["class"]),
              H("span", null, ue(N.value ? le(t)("imageGeneration.controls.generating") : le(t)("imageGeneration.controls.generate")), 1)
            ], 8, oy)
          ]),
          H("div", ay, [
            H("div", iy, [
              H("div", null, [
                H("h2", ly, ue(le(t)("imageGeneration.results.title")), 1),
                H("p", cy, ue(te.value), 1)
              ]),
              j.value ? (ge(), Se("span", uy, ue(j.value), 1)) : Ze("", !0)
            ]),
            C.value.length === 0 ? (ge(), Se("div", fy, [
              ye(ze, {
                name: "sparkles",
                size: "xl",
                class: "mb-4 text-gray-400 dark:text-dark-500"
              }),
              H("p", dy, ue(le(t)("imageGeneration.results.empty")), 1),
              H("p", my, ue(le(t)("imageGeneration.results.emptyHint")), 1)
            ])) : (ge(), Se("div", hy, [
              (ge(!0), Se(He, null, fn(C.value, (K) => (ge(), Se("article", {
                key: K.id,
                class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              }, [
                H("div", py, [
                  H("img", {
                    src: K.src,
                    alt: K.prompt,
                    class: "aspect-square w-full object-contain"
                  }, null, 8, gy)
                ]),
                H("div", _y, [
                  H("p", by, ue(K.prompt), 1),
                  K.revisedPrompt ? (ge(), Se("p", yy, ue(le(t)("imageGeneration.results.revisedPrompt")) + ": " + ue(K.revisedPrompt), 1)) : Ze("", !0),
                  H("div", vy, [
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Ee) => Je(K)
                    }, [
                      ye(ze, {
                        name: "download",
                        size: "sm"
                      }),
                      zn(" " + ue(le(t)("imageGeneration.results.download")), 1)
                    ], 8, Ey),
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Ee) => Nt(K)
                    }, [
                      ye(ze, {
                        name: "externalLink",
                        size: "sm"
                      }),
                      zn(" " + ue(le(t)("imageGeneration.results.open")), 1)
                    ], 8, wy)
                  ])
                ])
              ]))), 128))
            ]))
          ]),
          H("div", Sy, [
            H("div", Ay, [
              H("div", null, [
                H("h2", Ty, ue(le(t)("imageGeneration.history.title")), 1),
                H("p", Oy, ue(le(t)("imageGeneration.history.hint")), 1)
              ]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                "data-online-image-action": "",
                disabled: fe.value.length === 0 || we.value,
                onClick: Tt
              }, [
                ye(ze, {
                  name: "trash",
                  size: "sm"
                }),
                zn(" " + ue(le(t)("imageGeneration.history.clear")), 1)
              ], 8, Cy)
            ]),
            we.value ? (ge(), Se("div", Ry, ue(le(t)("common.loading")), 1)) : fe.value.length === 0 ? (ge(), Se("div", Ly, ue(le(t)("imageGeneration.history.empty")), 1)) : (ge(), Se("div", Iy, [
              (ge(!0), Se(He, null, fn(fe.value, (K) => (ge(), Se("article", {
                key: K.id,
                class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700"
              }, [
                H("div", ky, [
                  H("div", xy, [
                    H("span", null, ue(dr(K.createdAt)), 1),
                    B[11] || (B[11] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.model), 1),
                    B[12] || (B[12] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.sizeLabel), 1),
                    B[13] || (B[13] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.imageSize), 1)
                  ]),
                  H("p", Py, ue(K.prompt), 1)
                ]),
                H("div", Ny, [
                  (ge(!0), Se(He, null, fn(K.images, (Ee) => (ge(), Se("div", {
                    key: Ee.id,
                    class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                  }, [
                    H("img", {
                      src: Ee.src,
                      alt: Ee.prompt,
                      class: "aspect-square w-full object-contain",
                      loading: "lazy"
                    }, null, 8, My),
                    H("div", Dy, [
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.download"),
                        onClick: (ke) => Je(Ee)
                      }, [
                        ye(ze, {
                          name: "download",
                          size: "sm"
                        })
                      ], 8, Fy),
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.open"),
                        onClick: (ke) => Nt(Ee)
                      }, [
                        ye(ze, {
                          name: "externalLink",
                          size: "sm"
                        })
                      ], 8, Uy)
                    ])
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ])
      ]),
      ye(Y1, {
        show: V.value,
        title: le(t)("imageGeneration.sizeDialog.title"),
        width: "normal",
        "data-testid": "image-size-dialog",
        onClose: L
      }, {
        footer: tr(() => [
          H("div", Xy, [
            H("button", {
              type: "button",
              class: "btn btn-secondary btn-specular",
              "data-online-image-action": "",
              onClick: L
            }, ue(le(t)("imageGeneration.sizeDialog.cancel")), 1),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular",
              "data-online-image-action": "",
              onClick: M
            }, ue(le(t)("imageGeneration.sizeDialog.confirm")), 1)
          ])
        ]),
        default: tr(() => [
          H("div", $y, [
            H("p", Hy, ue(le(t)("imageGeneration.sizeDialog.current", { size: Ke.value })), 1),
            H("div", null, [
              H("h4", Vy, ue(le(t)("imageGeneration.sizeDialog.resolution")), 1),
              H("div", jy, [
                (ge(), Se(He, null, fn(Re, (K) => H("button", {
                  key: K,
                  type: "button",
                  class: Ge(["btn btn-specular", z.value === K ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": z.value === K,
                  onClick: (Ee) => z.value = K
                }, ue(K), 11, By)), 64))
              ])
            ]),
            H("div", null, [
              H("h4", Wy, ue(le(t)("imageGeneration.sizeDialog.aspectRatio")), 1),
              H("div", Ky, [
                (ge(), Se(He, null, fn(xe, (K) => H("button", {
                  key: K.value,
                  type: "button",
                  class: Ge(["btn btn-specular min-h-[72px] flex-col px-1.5 text-xs", ae.value === K.value ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": ae.value === K.value,
                  onClick: (Ee) => ae.value = K.value
                }, [
                  H("span", {
                    class: Ge(["block rounded-[3px] border border-current", K.previewClass])
                  }, null, 2),
                  H("span", null, ue(K.label), 1)
                ], 10, zy)), 64))
              ])
            ]),
            H("div", Gy, [
              H("p", qy, ue(le(t)("imageGeneration.sizeDialog.output")), 1),
              H("p", Yy, ue(g.value), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), Qy = /* @__PURE__ */ Za(Jy, [["__scopeId", "data-v-fe63d5f2"]]);
async function vv(e) {
  await Gg();
  const t = Oh(), n = Qa(t), r = Kr(t);
  n.initFromInjectedConfig(), await n.fetchPublicSettings(!0), r.hydrateAuthSnapshot(e.runMode);
  const s = Sh(/* @__PURE__ */ nn({
    name: "ZeroOneOnlineImageRoot",
    setup: () => () => [Hr(Qy), Hr(z1)]
  }));
  s.use(t), s.use(Zn);
  let a = !1;
  async function i(l) {
    r.setRunModeSnapshot(l.runMode), Zn.global.locale.value !== l.locale && (await of(l.locale), Zn.global.locale.value = l.locale);
  }
  return await i(e), {
    mount(l) {
      a = !0;
      try {
        s.mount(l);
      } catch (u) {
        throw s.unmount(), a = !1, u;
      }
    },
    unmount() {
      a && s.unmount(), a = !1;
    },
    syncState: i
  };
}
export {
  vv as prepareOnlineImageSurface
};
