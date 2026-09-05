/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function _a(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ne = {}, Xn = [], Ht = () => {
}, Zl = () => !1, zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ba = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ya = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ed = Object.prototype.hasOwnProperty, ke = (e, t) => ed.call(e, t), me = Array.isArray, Jn = (e) => Ks(e) === "[object Map]", ec = (e) => Ks(e) === "[object Set]", ve = (e) => typeof e == "function", qe = (e) => typeof e == "string", nn = (e) => typeof e == "symbol", Ue = (e) => e !== null && typeof e == "object", tc = (e) => (Ue(e) || ve(e)) && ve(e.then) && ve(e.catch), nc = Object.prototype.toString, Ks = (e) => nc.call(e), td = (e) => Ks(e).slice(8, -1), rc = (e) => Ks(e) === "[object Object]", Gs = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ar = /* @__PURE__ */ _a(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, nd = /-\w/g, _n = qs(
  (e) => e.replace(nd, (t) => t.slice(1).toUpperCase())
), rd = /\B([A-Z])/g, vn = qs(
  (e) => e.replace(rd, "-$1").toLowerCase()
), sc = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), yo = qs(
  (e) => e ? `on${sc(e)}` : ""
), pn = (e, t) => !Object.is(e, t), vs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, oc = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, va = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, sd = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const Ys = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ur(e) {
  if (me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = qe(r) ? ld(r) : ur(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (qe(e) || Ue(e))
    return e;
}
const od = /;(?![^(]*\))/g, ad = /:([^]+)/, id = /\/\*[^]*?\*\//g;
function ld(e) {
  const t = {};
  return e.replace(id, "").split(od).forEach((n) => {
    if (n) {
      const r = n.split(ad);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ge(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (me(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ge(e[n]);
      r && (t += r + " ");
    }
  else if (Ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const cd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ud = /* @__PURE__ */ _a(cd);
function ac(e) {
  return !!e || e === "";
}
const ic = (e) => !!(e && e.__v_isRef === !0), ue = (e) => qe(e) ? e : e == null ? "" : me(e) || Ue(e) && (e.toString === nc || !ve(e.toString)) ? ic(e) ? ue(e.value) : JSON.stringify(e, lc, 2) : String(e), lc = (e, t) => ic(t) ? lc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[vo(r, s) + " =>"] = o, n),
    {}
  )
} : ec(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vo(n))
} : nn(t) ? vo(t) : Ue(t) && !me(t) && !rc(t) ? String(t) : t, vo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lt;
class cc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = lt, !t && lt && (this.index = (lt.scopes || (lt.scopes = [])).push(
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
      const n = lt;
      try {
        return lt = this, t();
      } finally {
        lt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = lt, lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (lt = this.prevScope, this.prevScope = void 0);
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
function Ea(e) {
  return new cc(e);
}
function uc() {
  return lt;
}
function fc(e, t = !1) {
  lt && lt.cleanups.push(e);
}
let De;
const Eo = /* @__PURE__ */ new WeakSet();
class dc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, lt && lt.active && lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Eo.has(this) && (Eo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ai(this), pc(this);
    const t = De, n = It;
    De = this, It = !0;
    try {
      return this.fn();
    } finally {
      gc(this), De = t, It = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ta(t);
      this.deps = this.depsTail = void 0, ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Eo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    jo(this) && this.run();
  }
  get dirty() {
    return jo(this);
  }
}
let mc = 0, Or, Cr;
function hc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cr, Cr = e;
    return;
  }
  e.next = Or, Or = e;
}
function wa() {
  mc++;
}
function Sa() {
  if (--mc > 0)
    return;
  if (Cr) {
    let t = Cr;
    for (Cr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Or; ) {
    let t = Or;
    for (Or = void 0; t; ) {
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
function pc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Ta(r), fd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function jo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_c(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _c(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dr) || (e.globalVersion = Dr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !jo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = De, r = It;
  De = e, It = !0;
  try {
    pc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pn(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    De = n, It = r, gc(e), e.flags &= -3;
  }
}
function Ta(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Ta(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function fd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let It = !0;
const bc = [];
function Qt() {
  bc.push(It), It = !1;
}
function Zt() {
  const e = bc.pop();
  It = e === void 0 ? !0 : e;
}
function ai(e) {
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
let Dr = 0;
class dd {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Aa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!De || !It || De === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== De)
      n = this.activeLink = new dd(De, this), De.deps ? (n.prevDep = De.depsTail, De.depsTail.nextDep = n, De.depsTail = n) : De.deps = De.depsTail = n, yc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = De.depsTail, n.nextDep = void 0, De.depsTail.nextDep = n, De.depsTail = n, De.deps === n && (De.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Dr++, this.notify(t);
  }
  notify(t) {
    wa();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Sa();
    }
  }
}
function yc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        yc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Rs = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ Symbol(
  ""
), Bo = /* @__PURE__ */ Symbol(
  ""
), Fr = /* @__PURE__ */ Symbol(
  ""
);
function ct(e, t, n) {
  if (It && De) {
    let r = Rs.get(e);
    r || Rs.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Aa()), o.map = r, o.key = n), o.track();
  }
}
function qt(e, t, n, r, o, s) {
  const a = Rs.get(e);
  if (!a) {
    Dr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (wa(), t === "clear")
    a.forEach(i);
  else {
    const l = me(e), c = l && Gs(n);
    if (l && n === "length") {
      const u = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Fr || !nn(h) && h >= u) && i(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), c && i(a.get(Fr)), t) {
        case "add":
          l ? c && i(a.get("length")) : (i(a.get(Nn)), Jn(e) && i(a.get(Bo)));
          break;
        case "delete":
          l || (i(a.get(Nn)), Jn(e) && i(a.get(Bo)));
          break;
        case "set":
          Jn(e) && i(a.get(Nn));
          break;
      }
  }
  Sa();
}
function md(e, t) {
  const n = Rs.get(e);
  return n && n.get(t);
}
function Vn(e) {
  const t = Le(e);
  return t === e ? t : (ct(t, "iterate", Fr), St(e) ? t : t.map(kt));
}
function Xs(e) {
  return ct(e = Le(e), "iterate", Fr), e;
}
function un(e, t) {
  return en(e) ? Jt(e) ? rr(kt(t)) : rr(t) : kt(t);
}
const hd = {
  __proto__: null,
  [Symbol.iterator]() {
    return wo(this, Symbol.iterator, (e) => un(this, e));
  },
  concat(...e) {
    return Vn(this).concat(
      ...e.map((t) => me(t) ? Vn(t) : t)
    );
  },
  entries() {
    return wo(this, "entries", (e) => (e[1] = un(this, e[1]), e));
  },
  every(e, t) {
    return Bt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Bt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => un(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Bt(
      this,
      "find",
      e,
      t,
      (n) => un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Bt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Bt(
      this,
      "findLast",
      e,
      t,
      (n) => un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Bt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Bt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return So(this, "includes", e);
  },
  indexOf(...e) {
    return So(this, "indexOf", e);
  },
  join(e) {
    return Vn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return So(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Bt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return _r(this, "pop");
  },
  push(...e) {
    return _r(this, "push", e);
  },
  reduce(e, ...t) {
    return ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ii(this, "reduceRight", e, t);
  },
  shift() {
    return _r(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return _r(this, "splice", e);
  },
  toReversed() {
    return Vn(this).toReversed();
  },
  toSorted(e) {
    return Vn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vn(this).toSpliced(...e);
  },
  unshift(...e) {
    return _r(this, "unshift", e);
  },
  values() {
    return wo(this, "values", (e) => un(this, e));
  }
};
function wo(e, t, n) {
  const r = Xs(e), o = r[t]();
  return r !== e && !St(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const pd = Array.prototype;
function Bt(e, t, n, r, o, s) {
  const a = Xs(e), i = a !== e && !St(e), l = a[t];
  if (l !== pd[t]) {
    const f = l.apply(e, s);
    return i ? kt(f) : f;
  }
  let c = n;
  a !== e && (i ? c = function(f, h) {
    return n.call(this, un(e, f), h, e);
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = l.call(a, c, r);
  return i && o ? o(u) : u;
}
function ii(e, t, n, r) {
  const o = Xs(e);
  let s = n;
  return o !== e && (St(e) ? n.length > 3 && (s = function(a, i, l) {
    return n.call(this, a, i, l, e);
  }) : s = function(a, i, l) {
    return n.call(this, a, un(e, i), l, e);
  }), o[t](s, ...r);
}
function So(e, t, n) {
  const r = Le(e);
  ct(r, "iterate", Fr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Qs(n[0]) ? (n[0] = Le(n[0]), r[t](...n)) : o;
}
function _r(e, t, n = []) {
  Qt(), wa();
  const r = Le(e)[t].apply(e, n);
  return Sa(), Zt(), r;
}
const gd = /* @__PURE__ */ _a("__proto__,__v_isRef,__isVue"), vc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nn)
);
function _d(e) {
  nn(e) || (e = String(e));
  const t = Le(this);
  return ct(t, "has", e), t.hasOwnProperty(e);
}
class Ec {
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
      return r === (o ? s ? Cd : Ac : s ? Tc : Sc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = me(t);
    if (!o) {
      let l;
      if (a && (l = hd[n]))
        return l;
      if (n === "hasOwnProperty")
        return _d;
    }
    const i = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      je(t) ? t : r
    );
    if ((nn(n) ? vc.has(n) : gd(n)) || (o || ct(t, "get", n), s))
      return i;
    if (je(i)) {
      const l = a && Gs(n) ? i : i.value;
      return o && Ue(l) ? Ur(l) : l;
    }
    return Ue(i) ? o ? Ur(i) : Js(i) : i;
  }
}
class wc extends Ec {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const a = me(t) && Gs(n);
    if (!this._isShallow) {
      const c = en(s);
      if (!St(r) && !en(r) && (s = Le(s), r = Le(r)), !a && je(s) && !je(r))
        return c || (s.value = r), !0;
    }
    const i = a ? Number(n) < t.length : ke(t, n), l = Reflect.set(
      t,
      n,
      r,
      je(t) ? t : o
    );
    return t === Le(o) && (i ? pn(r, s) && qt(t, "set", n, r) : qt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ke(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && qt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!nn(n) || !vc.has(n)) && ct(t, "has", n), r;
  }
  ownKeys(t) {
    return ct(
      t,
      "iterate",
      me(t) ? "length" : Nn
    ), Reflect.ownKeys(t);
  }
}
class bd extends Ec {
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
const yd = /* @__PURE__ */ new wc(), vd = /* @__PURE__ */ new bd(), Ed = /* @__PURE__ */ new wc(!0);
const Wo = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function wd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Le(o), a = Jn(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = o[e](...r), u = n ? Wo : t ? rr : kt;
    return !t && ct(
      s,
      "iterate",
      l ? Bo : Nn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: i ? [u(f[0]), u(f[1])] : u(f),
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
function is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sd(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      e || (pn(o, i) && ct(a, "get", o), ct(a, "get", i));
      const { has: l } = as(a), c = t ? Wo : e ? rr : kt;
      if (l.call(a, o))
        return c(s.get(o));
      if (l.call(a, i))
        return c(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ct(Le(o), "iterate", Nn), o.size;
    },
    has(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      return e || (pn(o, i) && ct(a, "has", o), ct(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = Le(i), c = t ? Wo : e ? rr : kt;
      return !e && ct(l, "iterate", Nn), i.forEach((u, f) => o.call(s, c(u), c(f), a));
    }
  };
  return tt(
    n,
    e ? {
      add: is("add"),
      set: is("set"),
      delete: is("delete"),
      clear: is("clear")
    } : {
      add(o) {
        !t && !St(o) && !en(o) && (o = Le(o));
        const s = Le(this);
        return as(s).has.call(s, o) || (s.add(o), qt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !St(s) && !en(s) && (s = Le(s));
        const a = Le(this), { has: i, get: l } = as(a);
        let c = i.call(a, o);
        c || (o = Le(o), c = i.call(a, o));
        const u = l.call(a, o);
        return a.set(o, s), c ? pn(s, u) && qt(a, "set", o, s) : qt(a, "add", o, s), this;
      },
      delete(o) {
        const s = Le(this), { has: a, get: i } = as(s);
        let l = a.call(s, o);
        l || (o = Le(o), l = a.call(s, o)), i && i.call(s, o);
        const c = s.delete(o);
        return l && qt(s, "delete", o, void 0), c;
      },
      clear() {
        const o = Le(this), s = o.size !== 0, a = o.clear();
        return s && qt(
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
    n[o] = wd(o, e, t);
  }), n;
}
function Oa(e, t) {
  const n = Sd(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ke(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Td = {
  get: /* @__PURE__ */ Oa(!1, !1)
}, Ad = {
  get: /* @__PURE__ */ Oa(!1, !0)
}, Od = {
  get: /* @__PURE__ */ Oa(!0, !1)
};
const Sc = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), Cd = /* @__PURE__ */ new WeakMap();
function Rd(e) {
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
function Ld(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rd(td(e));
}
function Js(e) {
  return en(e) ? e : Ca(
    e,
    !1,
    yd,
    Td,
    Sc
  );
}
function Id(e) {
  return Ca(
    e,
    !1,
    Ed,
    Ad,
    Tc
  );
}
function Ur(e) {
  return Ca(
    e,
    !0,
    vd,
    Od,
    Ac
  );
}
function Ca(e, t, n, r, o) {
  if (!Ue(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Ld(e);
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
function Jt(e) {
  return en(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function en(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Qs(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function Ra(e) {
  return !ke(e, "__v_skip") && Object.isExtensible(e) && oc(e, "__v_skip", !0), e;
}
const kt = (e) => Ue(e) ? Js(e) : e, rr = (e) => Ue(e) ? Ur(e) : e;
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function J(e) {
  return Cc(e, !1);
}
function Oc(e) {
  return Cc(e, !0);
}
function Cc(e, t) {
  return je(e) ? e : new kd(e, t);
}
class kd {
  constructor(t, n) {
    this.dep = new Aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Le(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || St(t) || en(t);
    t = r ? t : Le(t), pn(t, n) && (this._rawValue = t, this._value = r ? t : kt(t), this.dep.trigger());
  }
}
function le(e) {
  return je(e) ? e.value : e;
}
const xd = {
  get: (e, t, n) => t === "__v_raw" ? e : le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return je(o) && !je(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Rc(e) {
  return Jt(e) ? e : new Proxy(e, xd);
}
function Pd(e) {
  const t = me(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Md(e, n);
  return t;
}
class Nd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Le(t);
    let o = !0, s = t;
    if (!me(t) || !Gs(String(n)))
      do
        o = !Qs(s) || St(s);
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
    return md(this._raw, this._key);
  }
}
function Md(e, t, n) {
  return new Nd(e, t, n);
}
class Dd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    De !== this)
      return hc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return _c(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Fd(e, t, n = !1) {
  let r, o;
  return ve(e) ? r = e : (r = e.get, o = e.set), new Dd(r, o, n);
}
const ls = {}, Ls = /* @__PURE__ */ new WeakMap();
let In;
function Ud(e, t = !1, n = In) {
  if (n) {
    let r = Ls.get(n);
    r || Ls.set(n, r = []), r.push(e);
  }
}
function $d(e, t, n = Ne) {
  const { immediate: r, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = n, c = (v) => o ? v : St(v) || o === !1 || o === 0 ? Yt(v, 1) : Yt(v);
  let u, f, h, b, w = !1, S = !1;
  if (je(e) ? (f = () => e.value, w = St(e)) : Jt(e) ? (f = () => c(e), w = !0) : me(e) ? (S = !0, w = e.some((v) => Jt(v) || St(v)), f = () => e.map((v) => {
    if (je(v))
      return v.value;
    if (Jt(v))
      return c(v);
    if (ve(v))
      return l ? l(v, 2) : v();
  })) : ve(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Qt();
      try {
        h();
      } finally {
        Zt();
      }
    }
    const v = In;
    In = u;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      In = v;
    }
  } : f = Ht, t && o) {
    const v = f, I = o === !0 ? 1 / 0 : o;
    f = () => Yt(v(), I);
  }
  const A = uc(), E = () => {
    u.stop(), A && A.active && ya(A.effects, u);
  };
  if (s && t) {
    const v = t;
    t = (...I) => {
      v(...I), E();
    };
  }
  let P = S ? new Array(e.length).fill(ls) : ls;
  const y = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const I = u.run();
        if (o || w || (S ? I.some((C, D) => pn(C, P[D])) : pn(I, P))) {
          h && h();
          const C = In;
          In = u;
          try {
            const D = [
              I,
              // pass undefined as the old value when it's changed for the first time
              P === ls ? void 0 : S && P[0] === ls ? [] : P,
              b
            ];
            P = I, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            In = C;
          }
        }
      } else
        u.run();
  };
  return i && i(y), u = new dc(f), u.scheduler = a ? () => a(y, !1) : y, b = (v) => Ud(v, !1, u), h = u.onStop = () => {
    const v = Ls.get(u);
    if (v) {
      if (l)
        l(v, 4);
      else
        for (const I of v) I();
      Ls.delete(u);
    }
  }, t ? r ? y(!0) : P = u.run() : a ? a(y.bind(null, !0), !0) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
}
function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !Ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, je(e))
    Yt(e.value, t, n);
  else if (me(e))
    for (let r = 0; r < e.length; r++)
      Yt(e[r], t, n);
  else if (ec(e) || Jn(e))
    e.forEach((r) => {
      Yt(r, t, n);
    });
  else if (rc(e)) {
    for (const r in e)
      Yt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Yt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Zs(o, t, n);
  }
}
function xt(e, t, n, r) {
  if (ve(e)) {
    const o = Yr(e, t, n, r);
    return o && tc(o) && o.catch((s) => {
      Zs(s, t, n);
    }), o;
  }
  if (me(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(xt(e[s], t, n, r));
    return o;
  }
}
function Zs(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ne;
  if (t) {
    let i = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    if (s) {
      Qt(), Yr(s, null, 10, [
        e,
        l,
        c
      ]), Zt();
      return;
    }
  }
  Hd(e, n, o, r, a);
}
function Hd(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const gt = [];
let Ft = -1;
const Qn = [];
let fn = null, zn = 0;
const Lc = /* @__PURE__ */ Promise.resolve();
let Is = null;
function Zn(e) {
  const t = Is || Lc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vd(e) {
  let t = Ft + 1, n = gt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = gt[r], s = $r(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function La(e) {
  if (!(e.flags & 1)) {
    const t = $r(e), n = gt[gt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $r(n) ? gt.push(e) : gt.splice(Vd(t), 0, e), e.flags |= 1, Ic();
  }
}
function Ic() {
  Is || (Is = Lc.then(xc));
}
function jd(e) {
  me(e) ? Qn.push(...e) : fn && e.id === -1 ? fn.splice(zn + 1, 0, e) : e.flags & 1 || (Qn.push(e), e.flags |= 1), Ic();
}
function li(e, t, n = Ft + 1) {
  for (; n < gt.length; n++) {
    const r = gt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      gt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function kc(e) {
  if (Qn.length) {
    const t = [...new Set(Qn)].sort(
      (n, r) => $r(n) - $r(r)
    );
    if (Qn.length = 0, fn) {
      fn.push(...t);
      return;
    }
    for (fn = t, zn = 0; zn < fn.length; zn++) {
      const n = fn[zn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    fn = null, zn = 0;
  }
}
const $r = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xc(e) {
  try {
    for (Ft = 0; Ft < gt.length; Ft++) {
      const t = gt[Ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Yr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ft < gt.length; Ft++) {
      const t = gt[Ft];
      t && (t.flags &= -2);
    }
    Ft = -1, gt.length = 0, kc(), Is = null, (gt.length || Qn.length) && xc();
  }
}
let ft = null, Pc = null;
function ks(e) {
  const t = ft;
  return ft = e, Pc = e && e.type.__scopeId || null, t;
}
function sr(e, t = ft, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Ms(-1);
    const s = ks(t);
    let a;
    try {
      a = e(...o);
    } finally {
      ks(s), r._d && Ms(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function zo(e, t) {
  if (ft === null)
    return e;
  const n = ro(ft), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, i, l = Ne] = t[o];
    s && (ve(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Yt(a), r.push({
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
function Tn(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[r];
    l && (Qt(), xt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Zt());
  }
}
function Bd(e, t) {
  if (_t) {
    let n = _t.provides;
    const r = _t.parent && _t.parent.provides;
    r === n && (n = _t.provides = Object.create(r)), n[e] = t;
  }
}
function er(e, t, n = !1) {
  const r = tn();
  if (r || Mn) {
    let o = Mn ? Mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(r && r.proxy) : t;
  }
}
function Wd() {
  return !!(tn() || Mn);
}
const zd = /* @__PURE__ */ Symbol.for("v-scx"), Kd = () => er(zd);
function Tt(e, t, n) {
  return Nc(e, t, n);
}
function Nc(e, t, n = Ne) {
  const { immediate: r, deep: o, flush: s, once: a } = n, i = tt({}, n), l = t && r || !t && s !== "post";
  let c;
  if (Br) {
    if (s === "sync") {
      const b = Kd();
      c = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = Ht, b.resume = Ht, b.pause = Ht, b;
    }
  }
  const u = _t;
  i.call = (b, w, S) => xt(b, u, w, S);
  let f = !1;
  s === "post" ? i.scheduler = (b) => {
    pt(b, u && u.suspense);
  } : s !== "sync" && (f = !0, i.scheduler = (b, w) => {
    w ? b() : La(b);
  }), i.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const h = $d(e, t, i);
  return Br && (c ? c.push(h) : l && h()), h;
}
function Gd(e, t, n) {
  const r = this.proxy, o = qe(e) ? e.includes(".") ? Mc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ve(t) ? s = t : (s = t.handler, n = t);
  const a = Qr(this), i = Nc(o, s.bind(r), n);
  return a(), i;
}
function Mc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Dc = /* @__PURE__ */ Symbol("_vte"), Fc = (e) => e.__isTeleport, Rr = (e) => e && (e.disabled || e.disabled === ""), ci = (e) => e && (e.defer || e.defer === ""), ui = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ko = (e, t) => {
  const n = e && e.to;
  return qe(n) ? t ? t(n) : null : n;
}, Uc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, i, l, c) {
    const {
      mc: u,
      pc: f,
      pbc: h,
      o: { insert: b, querySelector: w, createText: S, createComment: A }
    } = c, E = Rr(t.props);
    let { shapeFlag: P, children: y, dynamicChildren: v } = t;
    if (e == null) {
      const I = t.el = S(""), C = t.anchor = S("");
      b(I, n, r), b(C, n, r);
      const D = (O, B) => {
        P & 16 && u(
          y,
          O,
          B,
          o,
          s,
          a,
          i,
          l
        );
      }, N = () => {
        const O = t.target = Ko(t.props, w), B = $c(O, t, S, b);
        O && (a !== "svg" && ui(O) ? a = "svg" : a !== "mathml" && fi(O) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), E || (D(O, B), Es(t, !1)));
      };
      E && (D(n, C), Es(t, !0)), ci(t.props) ? (t.el.__isMounted = !1, pt(() => {
        N(), delete t.el.__isMounted;
      }, s)) : N();
    } else {
      if (ci(t.props) && e.el.__isMounted === !1) {
        pt(() => {
          Uc.process(
            e,
            t,
            n,
            r,
            o,
            s,
            a,
            i,
            l,
            c
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const I = t.anchor = e.anchor, C = t.target = e.target, D = t.targetAnchor = e.targetAnchor, N = Rr(e.props), O = N ? n : C, B = N ? I : D;
      if (a === "svg" || ui(C) ? a = "svg" : (a === "mathml" || fi(C)) && (a = "mathml"), v ? (h(
        e.dynamicChildren,
        v,
        O,
        o,
        s,
        a,
        i
      ), Ma(e, t, !0)) : l || f(
        e,
        t,
        O,
        B,
        o,
        s,
        a,
        i,
        !1
      ), E)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : cs(
          t,
          n,
          I,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = Ko(
          t.props,
          w
        );
        ee && cs(
          t,
          ee,
          null,
          c,
          0
        );
      } else N && cs(
        t,
        C,
        D,
        c,
        1
      );
      Es(t, E);
    }
  },
  remove(e, t, n, { um: r, o: { remove: o } }, s) {
    const {
      shapeFlag: a,
      children: i,
      anchor: l,
      targetStart: c,
      targetAnchor: u,
      target: f,
      props: h
    } = e;
    if (f && (o(c), o(u)), s && o(l), a & 16) {
      const b = s || !Rr(h);
      for (let w = 0; w < i.length; w++) {
        const S = i[w];
        r(
          S,
          t,
          n,
          b,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: cs,
  hydrate: qd
};
function cs(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: c, props: u } = e, f = s === 2;
  if (f && r(a, t, n), (!f || Rr(u)) && l & 16)
    for (let h = 0; h < c.length; h++)
      o(
        c[h],
        t,
        n,
        2
      );
  f && r(i, t, n);
}
function qd(e, t, n, r, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: c, createText: u }
}, f) {
  function h(S, A, E, P) {
    A.anchor = f(
      a(S),
      A,
      i(S),
      n,
      r,
      o,
      s
    ), A.targetStart = E, A.targetAnchor = P;
  }
  const b = t.target = Ko(
    t.props,
    l
  ), w = Rr(t.props);
  if (b) {
    const S = b._lpa || b.firstChild;
    if (t.shapeFlag & 16)
      if (w)
        h(
          e,
          t,
          S,
          S && a(S)
        );
      else {
        t.anchor = a(e);
        let A = S;
        for (; A; ) {
          if (A && A.nodeType === 8) {
            if (A.data === "teleport start anchor")
              t.targetStart = A;
            else if (A.data === "teleport anchor") {
              t.targetAnchor = A, b._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          A = a(A);
        }
        t.targetAnchor || $c(b, t, u, c), f(
          S && a(S),
          t,
          b,
          n,
          r,
          o,
          s
        );
      }
    Es(t, w);
  } else w && t.shapeFlag & 16 && h(e, t, e, a(e));
  return t.anchor && a(t.anchor);
}
const Ia = Uc;
function Es(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function $c(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Dc] = s, e && (r(o, e), r(s, e)), s;
}
const Gt = /* @__PURE__ */ Symbol("_leaveCb"), us = /* @__PURE__ */ Symbol("_enterCb");
function Hc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fr(() => {
    e.isMounted = !0;
  }), xa(() => {
    e.isUnmounting = !0;
  }), e;
}
const At = [Function, Array], Vc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: At,
  onEnter: At,
  onAfterEnter: At,
  onEnterCancelled: At,
  // leave
  onBeforeLeave: At,
  onLeave: At,
  onAfterLeave: At,
  onLeaveCancelled: At,
  // appear
  onBeforeAppear: At,
  onAppear: At,
  onAfterAppear: At,
  onAppearCancelled: At
}, jc = (e) => {
  const t = e.subTree;
  return t.component ? jc(t.component) : t;
}, Yd = {
  name: "BaseTransition",
  props: Vc,
  setup(e, { slots: t }) {
    const n = tn(), r = Hc();
    return () => {
      const o = t.default && ka(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Bc(o), a = Le(e), { mode: i } = a;
      if (r.isLeaving)
        return To(s);
      const l = di(s);
      if (!l)
        return To(s);
      let c = Hr(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => c = f
      );
      l.type !== ut && Fn(l, c);
      let u = n.subTree && di(n.subTree);
      if (u && u.type !== ut && !kn(u, l) && jc(n).type !== ut) {
        let f = Hr(
          u,
          a,
          r,
          n
        );
        if (Fn(u, f), i === "out-in" && l.type !== ut)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, To(s);
        i === "in-out" && l.type !== ut ? f.delayLeave = (h, b, w) => {
          const S = Wc(
            r,
            u
          );
          S[String(u.key)] = u, h[Gt] = () => {
            b(), h[Gt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            w(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return s;
    };
  }
};
function Bc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ut) {
        t = n;
        break;
      }
  }
  return t;
}
const Xd = Yd;
function Wc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Hr(e, t, n, r, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: b,
    onAfterLeave: w,
    onLeaveCancelled: S,
    onBeforeAppear: A,
    onAppear: E,
    onAfterAppear: P,
    onAppearCancelled: y
  } = t, v = String(e.key), I = Wc(n, e), C = (O, B) => {
    O && xt(
      O,
      r,
      9,
      B
    );
  }, D = (O, B) => {
    const ee = B[1];
    C(O, B), me(O) ? O.every((U) => U.length <= 1) && ee() : O.length <= 1 && ee();
  }, N = {
    mode: a,
    persisted: i,
    beforeEnter(O) {
      let B = l;
      if (!n.isMounted)
        if (s)
          B = A || l;
        else
          return;
      O[Gt] && O[Gt](
        !0
        /* cancelled */
      );
      const ee = I[v];
      ee && kn(e, ee) && ee.el[Gt] && ee.el[Gt](), C(B, [O]);
    },
    enter(O) {
      let B = c, ee = u, U = f;
      if (!n.isMounted)
        if (s)
          B = E || c, ee = P || u, U = y || f;
        else
          return;
      let te = !1;
      const oe = O[us] = (fe) => {
        te || (te = !0, fe ? C(U, [O]) : C(ee, [O]), N.delayedLeave && N.delayedLeave(), O[us] = void 0);
      };
      B ? D(B, [O, oe]) : oe();
    },
    leave(O, B) {
      const ee = String(e.key);
      if (O[us] && O[us](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      C(h, [O]);
      let U = !1;
      const te = O[Gt] = (oe) => {
        U || (U = !0, B(), oe ? C(S, [O]) : C(w, [O]), O[Gt] = void 0, I[ee] === e && delete I[ee]);
      };
      I[ee] = e, b ? D(b, [O, te]) : te();
    },
    clone(O) {
      const B = Hr(
        O,
        t,
        n,
        r,
        o
      );
      return o && o(B), B;
    }
  };
  return N;
}
function To(e) {
  if (eo(e))
    return e = bn(e), e.children = null, e;
}
function di(e) {
  if (!eo(e))
    return Fc(e.type) && e.children ? Bc(e.children) : e;
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
function Fn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Fn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ka(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === He ? (a.patchFlag & 128 && o++, r = r.concat(
      ka(a.children, t, i)
    )) : (t || a.type !== ut) && r.push(i != null ? bn(a, { key: i }) : a);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function rn(e, t) {
  return ve(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function zc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xs = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n, r, o = !1) {
  if (me(e)) {
    e.forEach(
      (w, S) => Lr(
        w,
        t && (me(t) ? t[S] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (tr(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Lr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? ro(r.component) : r.el, a = o ? null : s, { i, r: l } = e, c = t && t.r, u = i.refs === Ne ? i.refs = {} : i.refs, f = i.setupState, h = Le(f), b = f === Ne ? Zl : (w) => ke(h, w);
  if (c != null && c !== l) {
    if (mi(t), qe(c))
      u[c] = null, b(c) && (f[c] = null);
    else if (je(c)) {
      c.value = null;
      const w = t;
      w.k && (u[w.k] = null);
    }
  }
  if (ve(l))
    Yr(l, i, 12, [a, u]);
  else {
    const w = qe(l), S = je(l);
    if (w || S) {
      const A = () => {
        if (e.f) {
          const E = w ? b(l) ? f[l] : u[l] : l.value;
          if (o)
            me(E) && ya(E, s);
          else if (me(E))
            E.includes(s) || E.push(s);
          else if (w)
            u[l] = [s], b(l) && (f[l] = u[l]);
          else {
            const P = [s];
            l.value = P, e.k && (u[e.k] = P);
          }
        } else w ? (u[l] = a, b(l) && (f[l] = a)) : S && (l.value = a, e.k && (u[e.k] = a));
      };
      if (a) {
        const E = () => {
          A(), xs.delete(e);
        };
        E.id = -1, xs.set(e, E), pt(E, n);
      } else
        mi(e), A();
    }
  }
}
function mi(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
Ys().requestIdleCallback;
Ys().cancelIdleCallback;
const tr = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function Jd(e, t) {
  Kc(e, "a", t);
}
function Qd(e, t) {
  Kc(e, "da", t);
}
function Kc(e, t, n = _t) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (to(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      eo(o.parent.vnode) && Zd(r, t, n, o), o = o.parent;
  }
}
function Zd(e, t, n, r) {
  const o = to(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Xr(() => {
    ya(r[t], o);
  }, n);
}
function to(e, t, n = _t, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Qt();
      const i = Qr(n), l = xt(t, n, e, a);
      return i(), Zt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const sn = (e) => (t, n = _t) => {
  (!Br || e === "sp") && to(e, (...r) => t(...r), n);
}, Gc = sn("bm"), fr = sn("m"), em = sn(
  "bu"
), qc = sn("u"), xa = sn(
  "bum"
), Xr = sn("um"), tm = sn(
  "sp"
), nm = sn("rtg"), rm = sn("rtc");
function sm(e, t = _t) {
  to("ec", e, t);
}
const om = /* @__PURE__ */ Symbol.for("v-ndc");
function dn(e, t, n, r) {
  let o;
  const s = n, a = me(e);
  if (a || qe(e)) {
    const i = a && Jt(e);
    let l = !1, c = !1;
    i && (l = !St(e), c = en(e), e = Xs(e)), o = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      o[u] = t(
        l ? c ? rr(kt(e[u])) : kt(e[u]) : e[u],
        u,
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
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, s);
      }
    }
  else
    o = [];
  return o;
}
function Ps(e, t, n = {}, r, o) {
  if (ft.ce || ft.parent && tr(ft.parent) && ft.parent.ce) {
    const c = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), ge(), gn(
      He,
      null,
      [ye("slot", n, r && r())],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), ge();
  const a = s && Yc(s(n)), i = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = gn(
    He,
    {
      key: (i && !nn(i) ? i : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Yc(e) {
  return e.some((t) => jr(t) ? !(t.type === ut || t.type === He && !Yc(t.children)) : !0) ? e : null;
}
const Go = (e) => e ? mu(e) ? ro(e) : Go(e.parent) : null, Ir = (
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
    $parent: (e) => Go(e.parent),
    $root: (e) => Go(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      La(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => Gd.bind(e)
  })
), Ao = (e, t) => e !== Ne && !e.__isScriptSetup && ke(e, t), am = {
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
        if (Ao(r, t))
          return a[t] = 1, r[t];
        if (o !== Ne && ke(o, t))
          return a[t] = 2, o[t];
        if (ke(s, t))
          return a[t] = 3, s[t];
        if (n !== Ne && ke(n, t))
          return a[t] = 4, n[t];
        qo && (a[t] = 0);
      }
    }
    const c = Ir[t];
    let u, f;
    if (c)
      return t === "$attrs" && ct(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ne && ke(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, ke(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Ao(o, t) ? (o[t] = n, !0) : r !== Ne && ke(r, t) ? (r[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: a }
  }, i) {
    let l;
    return !!(n[i] || e !== Ne && i[0] !== "$" && ke(e, i) || Ao(t, i) || ke(s, i) || ke(r, i) || ke(Ir, i) || ke(o.config.globalProperties, i) || (l = a.__cssModules) && l[i]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hi(e) {
  return me(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let qo = !0;
function im(e) {
  const t = Jc(e), n = e.proxy, r = e.ctx;
  qo = !1, t.beforeCreate && pi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: a,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: b,
    updated: w,
    activated: S,
    deactivated: A,
    beforeDestroy: E,
    beforeUnmount: P,
    destroyed: y,
    unmounted: v,
    render: I,
    renderTracked: C,
    renderTriggered: D,
    errorCaptured: N,
    serverPrefetch: O,
    // public API
    expose: B,
    inheritAttrs: ee,
    // assets
    components: U,
    directives: te,
    filters: oe
  } = t;
  if (c && lm(c, r, null), a)
    for (const X in a) {
      const ie = a[X];
      ve(ie) && (r[X] = ie.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    Ue(X) && (e.data = Js(X));
  }
  if (qo = !0, s)
    for (const X in s) {
      const ie = s[X], Ae = ve(ie) ? ie.bind(n, n) : ve(ie.get) ? ie.get.bind(n, n) : Ht, xe = !ve(ie) && ve(ie.set) ? ie.set.bind(n) : Ht, he = _e({
        get: Ae,
        set: xe
      });
      Object.defineProperty(r, X, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (Ee) => he.value = Ee
      });
    }
  if (i)
    for (const X in i)
      Xc(i[X], r, n, X);
  if (l) {
    const X = ve(l) ? l.call(n) : l;
    Reflect.ownKeys(X).forEach((ie) => {
      Bd(ie, X[ie]);
    });
  }
  u && pi(u, e, "c");
  function V(X, ie) {
    me(ie) ? ie.forEach((Ae) => X(Ae.bind(n))) : ie && X(ie.bind(n));
  }
  if (V(Gc, f), V(fr, h), V(em, b), V(qc, w), V(Jd, S), V(Qd, A), V(sm, N), V(rm, C), V(nm, D), V(xa, P), V(Xr, v), V(tm, O), me(B))
    if (B.length) {
      const X = e.exposed || (e.exposed = {});
      B.forEach((ie) => {
        Object.defineProperty(X, ie, {
          get: () => n[ie],
          set: (Ae) => n[ie] = Ae,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === Ht && (e.render = I), ee != null && (e.inheritAttrs = ee), U && (e.components = U), te && (e.directives = te), O && zc(e);
}
function lm(e, t, n = Ht) {
  me(e) && (e = Yo(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Ue(o) ? "default" in o ? s = er(
      o.from || r,
      o.default,
      !0
    ) : s = er(o.from || r) : s = er(o), je(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[r] = s;
  }
}
function pi(e, t, n) {
  xt(
    me(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xc(e, t, n, r) {
  let o = r.includes(".") ? Mc(n, r) : () => n[r];
  if (qe(e)) {
    const s = t[e];
    ve(s) && Tt(o, s);
  } else if (ve(e))
    Tt(o, e.bind(n));
  else if (Ue(e))
    if (me(e))
      e.forEach((s) => Xc(s, t, n, r));
    else {
      const s = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(s) && Tt(o, s, e);
    }
}
function Jc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (c) => Ns(l, c, a, !0)
  ), Ns(l, t, a)), Ue(t) && s.set(t, l), l;
}
function Ns(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Ns(e, s, n, !0), o && o.forEach(
    (a) => Ns(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = cm[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const cm = {
  data: gi,
  props: _i,
  emits: _i,
  // objects
  methods: Sr,
  computed: Sr,
  // lifecycle
  beforeCreate: mt,
  created: mt,
  beforeMount: mt,
  mounted: mt,
  beforeUpdate: mt,
  updated: mt,
  beforeDestroy: mt,
  beforeUnmount: mt,
  destroyed: mt,
  unmounted: mt,
  activated: mt,
  deactivated: mt,
  errorCaptured: mt,
  serverPrefetch: mt,
  // assets
  components: Sr,
  directives: Sr,
  // watch
  watch: fm,
  // provide / inject
  provide: gi,
  inject: um
};
function gi(e, t) {
  return t ? e ? function() {
    return tt(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function um(e, t) {
  return Sr(Yo(e), Yo(t));
}
function Yo(e) {
  if (me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? me(e) && me(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    hi(e),
    hi(t ?? {})
  ) : t;
}
function fm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = mt(e[r], t[r]);
  return n;
}
function Qc() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
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
let dm = 0;
function mm(e, t) {
  return function(r, o = null) {
    ve(r) || (r = tt({}, r)), o != null && !Ue(o) && (o = null);
    const s = Qc(), a = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const c = s.app = {
      _uid: dm++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Wm,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return a.has(u) || (u && ve(u.install) ? (a.add(u), u.install(c, ...f)) : ve(u) && (a.add(u), u(c, ...f))), c;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? (s.components[u] = f, c) : s.components[u];
      },
      directive(u, f) {
        return f ? (s.directives[u] = f, c) : s.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const b = c._ceVNode || ye(r, o);
          return b.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(b, u, h), l = !0, c._container = u, u.__vue_app__ = c, ro(b.component);
        }
      },
      onUnmount(u) {
        i.push(u);
      },
      unmount() {
        l && (xt(
          i,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return s.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = Mn;
        Mn = c;
        try {
          return u();
        } finally {
          Mn = f;
        }
      }
    };
    return c;
  };
}
let Mn = null;
const hm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${vn(t)}Modifiers`];
function pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ne;
  let o = n;
  const s = t.startsWith("update:"), a = s && hm(r, t.slice(7));
  a && (a.trim && (o = n.map((u) => qe(u) ? u.trim() : u)), a.number && (o = n.map(va)));
  let i, l = r[i = yo(t)] || // also try camelCase event handler (#2249)
  r[i = yo(_n(t))];
  !l && s && (l = r[i = yo(vn(t))]), l && xt(
    l,
    e,
    6,
    o
  );
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, xt(
      c,
      e,
      6,
      o
    );
  }
}
const gm = /* @__PURE__ */ new WeakMap();
function Zc(e, t, n = !1) {
  const r = n ? gm : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!ve(e)) {
    const l = (c) => {
      const u = Zc(c, t, !0);
      u && (i = !0, tt(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (Ue(e) && r.set(e, null), null) : (me(s) ? s.forEach((l) => a[l] = null) : tt(a, s), Ue(e) && r.set(e, a), a);
}
function no(e, t) {
  return !e || !zs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, vn(t)) || ke(e, t));
}
function bi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: a,
    attrs: i,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: h,
    setupState: b,
    ctx: w,
    inheritAttrs: S
  } = e, A = ks(e);
  let E, P;
  try {
    if (n.shapeFlag & 4) {
      const v = o || r, I = v;
      E = Ut(
        c.call(
          I,
          v,
          u,
          f,
          b,
          h,
          w
        )
      ), P = i;
    } else {
      const v = t;
      E = Ut(
        v.length > 1 ? v(
          f,
          { attrs: i, slots: a, emit: l }
        ) : v(
          f,
          null
        )
      ), P = t.props ? i : _m(i);
    }
  } catch (v) {
    kr.length = 0, Zs(v, e, 1), E = ye(ut);
  }
  let y = E;
  if (P && S !== !1) {
    const v = Object.keys(P), { shapeFlag: I } = y;
    v.length && I & 7 && (s && v.some(ba) && (P = bm(
      P,
      s
    )), y = bn(y, P, !1, !0));
  }
  return n.dirs && (y = bn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Fn(y, n.transition), E = y, ks(A), E;
}
const _m = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bm = (e, t) => {
  const n = {};
  for (const r in e)
    (!ba(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ym(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? yi(r, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (a[h] !== r[h] && !no(c, h))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? yi(r, a, c) : !0 : !!a;
  return !1;
}
function yi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !no(n, s))
      return !0;
  }
  return !1;
}
function vm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const eu = {}, tu = () => Object.create(eu), nu = (e) => Object.getPrototypeOf(e) === eu;
function Em(e, t, n, r = !1) {
  const o = {}, s = tu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ru(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Id(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function wm(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = Le(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (no(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (l)
          if (ke(s, h))
            b !== s[h] && (s[h] = b, c = !0);
          else {
            const w = _n(h);
            o[w] = Xo(
              l,
              i,
              w,
              b,
              e,
              !1
            );
          }
        else
          b !== s[h] && (s[h] = b, c = !0);
      }
    }
  } else {
    ru(e, t, o, s) && (c = !0);
    let u;
    for (const f in i)
      (!t || // for camelCase
      !ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vn(f)) === f || !ke(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = Xo(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== i)
      for (const f in s)
        (!t || !ke(t, f)) && (delete s[f], c = !0);
  }
  c && qt(e.attrs, "set", "");
}
function ru(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (Ar(l))
        continue;
      const c = t[l];
      let u;
      o && ke(o, u = _n(l)) ? !s || !s.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : no(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, a = !0);
    }
  if (s) {
    const l = Le(n), c = i || Ne;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = Xo(
        o,
        l,
        f,
        c[f],
        e,
        !ke(c, f)
      );
    }
  }
  return a;
}
function Xo(e, t, n, r, o, s) {
  const a = e[n];
  if (a != null) {
    const i = ke(a, "default");
    if (i && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ve(l)) {
        const { propsDefaults: c } = o;
        if (n in c)
          r = c[n];
        else {
          const u = Qr(o);
          r = c[n] = l.call(
            null,
            t
          ), u();
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
    ] && (r === "" || r === vn(n)) && (r = !0));
  }
  return r;
}
const Sm = /* @__PURE__ */ new WeakMap();
function su(e, t, n = !1) {
  const r = n ? Sm : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!ve(e)) {
    const u = (f) => {
      l = !0;
      const [h, b] = su(f, t, !0);
      tt(a, h), b && i.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Ue(e) && r.set(e, Xn), Xn;
  if (me(s))
    for (let u = 0; u < s.length; u++) {
      const f = _n(s[u]);
      vi(f) && (a[f] = Ne);
    }
  else if (s)
    for (const u in s) {
      const f = _n(u);
      if (vi(f)) {
        const h = s[u], b = a[f] = me(h) || ve(h) ? { type: h } : tt({}, h), w = b.type;
        let S = !1, A = !0;
        if (me(w))
          for (let E = 0; E < w.length; ++E) {
            const P = w[E], y = ve(P) && P.name;
            if (y === "Boolean") {
              S = !0;
              break;
            } else y === "String" && (A = !1);
          }
        else
          S = ve(w) && w.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = S, b[
          1
          /* shouldCastTrue */
        ] = A, (S || ke(b, "default")) && i.push(f);
      }
    }
  const c = [a, i];
  return Ue(e) && r.set(e, c), c;
}
function vi(e) {
  return e[0] !== "$" && !Ar(e);
}
const Pa = (e) => e === "_" || e === "_ctx" || e === "$stable", Na = (e) => me(e) ? e.map(Ut) : [Ut(e)], Tm = (e, t, n) => {
  if (t._n)
    return t;
  const r = sr((...o) => Na(t(...o)), n);
  return r._c = !1, r;
}, ou = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Pa(o)) continue;
    const s = e[o];
    if (ve(s))
      t[o] = Tm(o, s, r);
    else if (s != null) {
      const a = Na(s);
      t[o] = () => a;
    }
  }
}, au = (e, t) => {
  const n = Na(t);
  e.slots.default = () => n;
}, iu = (e, t, n) => {
  for (const r in t)
    (n || !Pa(r)) && (e[r] = t[r]);
}, Am = (e, t, n) => {
  const r = e.slots = tu();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (iu(r, t, n), n && oc(r, "_", o, !0)) : ou(t, r);
  } else t && au(e, t);
}, Om = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, a = Ne;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : iu(o, t, n) : (s = !t.$stable, ou(t, o)), a = t;
  } else t && (au(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !Pa(i) && a[i] == null && delete o[i];
}, pt = km;
function Cm(e) {
  return Rm(e);
}
function Rm(e, t) {
  const n = Ys();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: a,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: b = Ht,
    insertStaticContent: w
  } = e, S = (p, g, _, x = null, L = null, M = null, Y = void 0, G = null, d = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !kn(p, g) && (x = K(p), Ee(p, L, M, !0), p = null), g.patchFlag === -2 && (d = !1, g.dynamicChildren = null);
    const { type: m, ref: R, shapeFlag: F } = g;
    switch (m) {
      case Jr:
        A(p, g, _, x);
        break;
      case ut:
        E(p, g, _, x);
        break;
      case Co:
        p == null && P(g, _, x, Y);
        break;
      case He:
        U(
          p,
          g,
          _,
          x,
          L,
          M,
          Y,
          G,
          d
        );
        break;
      default:
        F & 1 ? I(
          p,
          g,
          _,
          x,
          L,
          M,
          Y,
          G,
          d
        ) : F & 6 ? te(
          p,
          g,
          _,
          x,
          L,
          M,
          Y,
          G,
          d
        ) : (F & 64 || F & 128) && m.process(
          p,
          g,
          _,
          x,
          L,
          M,
          Y,
          G,
          d,
          Ce
        );
    }
    R != null && L ? Lr(R, p && p.ref, M, g || p, !g) : R == null && p && p.ref != null && Lr(p.ref, null, M, p, !0);
  }, A = (p, g, _, x) => {
    if (p == null)
      r(
        g.el = i(g.children),
        _,
        x
      );
    else {
      const L = g.el = p.el;
      g.children !== p.children && c(L, g.children);
    }
  }, E = (p, g, _, x) => {
    p == null ? r(
      g.el = l(g.children || ""),
      _,
      x
    ) : g.el = p.el;
  }, P = (p, g, _, x) => {
    [p.el, p.anchor] = w(
      p.children,
      g,
      _,
      x,
      p.el,
      p.anchor
    );
  }, y = ({ el: p, anchor: g }, _, x) => {
    let L;
    for (; p && p !== g; )
      L = h(p), r(p, _, x), p = L;
    r(g, _, x);
  }, v = ({ el: p, anchor: g }) => {
    let _;
    for (; p && p !== g; )
      _ = h(p), o(p), p = _;
    o(g);
  }, I = (p, g, _, x, L, M, Y, G, d) => {
    if (g.type === "svg" ? Y = "svg" : g.type === "math" && (Y = "mathml"), p == null)
      C(
        g,
        _,
        x,
        L,
        M,
        Y,
        G,
        d
      );
    else {
      const m = p.el && p.el._isVueCE ? p.el : null;
      try {
        m && m._beginPatch(), O(
          p,
          g,
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
  }, C = (p, g, _, x, L, M, Y, G) => {
    let d, m;
    const { props: R, shapeFlag: F, transition: Z, dirs: q } = p;
    if (d = p.el = a(
      p.type,
      M,
      R && R.is,
      R
    ), F & 8 ? u(d, p.children) : F & 16 && N(
      p.children,
      d,
      null,
      x,
      L,
      Oo(p, M),
      Y,
      G
    ), q && Tn(p, null, x, "created"), D(d, p, p.scopeId, Y, x), R) {
      for (const $ in R)
        $ !== "value" && !Ar($) && s(d, $, null, R[$], M, x);
      "value" in R && s(d, "value", null, R.value, M), (m = R.onVnodeBeforeMount) && Mt(m, x, p);
    }
    q && Tn(p, null, x, "beforeMount");
    const k = Lm(L, Z);
    k && Z.beforeEnter(d), r(d, g, _), ((m = R && R.onVnodeMounted) || k || q) && pt(() => {
      m && Mt(m, x, p), k && Z.enter(d), q && Tn(p, null, x, "mounted");
    }, L);
  }, D = (p, g, _, x, L) => {
    if (_ && b(p, _), x)
      for (let M = 0; M < x.length; M++)
        b(p, x[M]);
    if (L) {
      let M = L.subTree;
      if (g === M || uu(M.type) && (M.ssContent === g || M.ssFallback === g)) {
        const Y = L.vnode;
        D(
          p,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          L.parent
        );
      }
    }
  }, N = (p, g, _, x, L, M, Y, G, d = 0) => {
    for (let m = d; m < p.length; m++) {
      const R = p[m] = G ? mn(p[m]) : Ut(p[m]);
      S(
        null,
        R,
        g,
        _,
        x,
        L,
        M,
        Y,
        G
      );
    }
  }, O = (p, g, _, x, L, M, Y) => {
    const G = g.el = p.el;
    let { patchFlag: d, dynamicChildren: m, dirs: R } = g;
    d |= p.patchFlag & 16;
    const F = p.props || Ne, Z = g.props || Ne;
    let q;
    if (_ && An(_, !1), (q = Z.onVnodeBeforeUpdate) && Mt(q, _, g, p), R && Tn(g, p, _, "beforeUpdate"), _ && An(_, !0), (F.innerHTML && Z.innerHTML == null || F.textContent && Z.textContent == null) && u(G, ""), m ? B(
      p.dynamicChildren,
      m,
      G,
      _,
      x,
      Oo(g, L),
      M
    ) : Y || ie(
      p,
      g,
      G,
      null,
      _,
      x,
      Oo(g, L),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        ee(G, F, Z, _, L);
      else if (d & 2 && F.class !== Z.class && s(G, "class", null, Z.class, L), d & 4 && s(G, "style", F.style, Z.style, L), d & 8) {
        const k = g.dynamicProps;
        for (let $ = 0; $ < k.length; $++) {
          const ce = k[$], Se = F[ce], $e = Z[ce];
          ($e !== Se || ce === "value") && s(G, ce, Se, $e, L, _);
        }
      }
      d & 1 && p.children !== g.children && u(G, g.children);
    } else !Y && m == null && ee(G, F, Z, _, L);
    ((q = Z.onVnodeUpdated) || R) && pt(() => {
      q && Mt(q, _, g, p), R && Tn(g, p, _, "updated");
    }, x);
  }, B = (p, g, _, x, L, M, Y) => {
    for (let G = 0; G < g.length; G++) {
      const d = p[G], m = g[G], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !kn(d, m) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      S(
        d,
        m,
        R,
        null,
        x,
        L,
        M,
        Y,
        !0
      );
    }
  }, ee = (p, g, _, x, L) => {
    if (g !== _) {
      if (g !== Ne)
        for (const M in g)
          !Ar(M) && !(M in _) && s(
            p,
            M,
            g[M],
            null,
            L,
            x
          );
      for (const M in _) {
        if (Ar(M)) continue;
        const Y = _[M], G = g[M];
        Y !== G && M !== "value" && s(p, M, G, Y, L, x);
      }
      "value" in _ && s(p, "value", g.value, _.value, L);
    }
  }, U = (p, g, _, x, L, M, Y, G, d) => {
    const m = g.el = p ? p.el : i(""), R = g.anchor = p ? p.anchor : i("");
    let { patchFlag: F, dynamicChildren: Z, slotScopeIds: q } = g;
    q && (G = G ? G.concat(q) : q), p == null ? (r(m, _, x), r(R, _, x), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      R,
      L,
      M,
      Y,
      G,
      d
    )) : F > 0 && F & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === Z.length ? (B(
      p.dynamicChildren,
      Z,
      _,
      L,
      M,
      Y,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || L && g === L.subTree) && Ma(
      p,
      g,
      !0
      /* shallow */
    )) : ie(
      p,
      g,
      _,
      R,
      L,
      M,
      Y,
      G,
      d
    );
  }, te = (p, g, _, x, L, M, Y, G, d) => {
    g.slotScopeIds = G, p == null ? g.shapeFlag & 512 ? L.ctx.activate(
      g,
      _,
      x,
      Y,
      d
    ) : oe(
      g,
      _,
      x,
      L,
      M,
      Y,
      d
    ) : fe(p, g, d);
  }, oe = (p, g, _, x, L, M, Y) => {
    const G = p.component = Um(
      p,
      x,
      L
    );
    if (eo(p) && (G.ctx.renderer = Ce), $m(G, !1, Y), G.asyncDep) {
      if (L && L.registerDep(G, V, Y), !p.el) {
        const d = G.subTree = ye(ut);
        E(null, d, g, _), p.placeholder = d.el;
      }
    } else
      V(
        G,
        p,
        g,
        _,
        L,
        M,
        Y
      );
  }, fe = (p, g, _) => {
    const x = g.component = p.component;
    if (ym(p, g, _))
      if (x.asyncDep && !x.asyncResolved) {
        X(x, g, _);
        return;
      } else
        x.next = g, x.update();
    else
      g.el = p.el, x.vnode = g;
  }, V = (p, g, _, x, L, M, Y) => {
    const G = () => {
      if (p.isMounted) {
        let { next: F, bu: Z, u: q, parent: k, vnode: $ } = p;
        {
          const Je = lu(p);
          if (Je) {
            F && (F.el = $.el, X(p, F, Y)), Je.asyncDep.then(() => {
              p.isUnmounted || G();
            });
            return;
          }
        }
        let ce = F, Se;
        An(p, !1), F ? (F.el = $.el, X(p, F, Y)) : F = $, Z && vs(Z), (Se = F.props && F.props.onVnodeBeforeUpdate) && Mt(Se, k, F, $), An(p, !0);
        const $e = bi(p), rt = p.subTree;
        p.subTree = $e, S(
          rt,
          $e,
          // parent may have changed if it's in a teleport
          f(rt.el),
          // anchor may have changed if it's in a fragment
          K(rt),
          p,
          L,
          M
        ), F.el = $e.el, ce === null && vm(p, $e.el), q && pt(q, L), (Se = F.props && F.props.onVnodeUpdated) && pt(
          () => Mt(Se, k, F, $),
          L
        );
      } else {
        let F;
        const { el: Z, props: q } = g, { bm: k, m: $, parent: ce, root: Se, type: $e } = p, rt = tr(g);
        An(p, !1), k && vs(k), !rt && (F = q && q.onVnodeBeforeMount) && Mt(F, ce, g), An(p, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle($e);
          const Je = p.subTree = bi(p);
          S(
            null,
            Je,
            _,
            x,
            p,
            L,
            M
          ), g.el = Je.el;
        }
        if ($ && pt($, L), !rt && (F = q && q.onVnodeMounted)) {
          const Je = g;
          pt(
            () => Mt(F, ce, Je),
            L
          );
        }
        (g.shapeFlag & 256 || ce && tr(ce.vnode) && ce.vnode.shapeFlag & 256) && p.a && pt(p.a, L), p.isMounted = !0, g = _ = x = null;
      }
    };
    p.scope.on();
    const d = p.effect = new dc(G);
    p.scope.off();
    const m = p.update = d.run.bind(d), R = p.job = d.runIfDirty.bind(d);
    R.i = p, R.id = p.uid, d.scheduler = () => La(R), An(p, !0), m();
  }, X = (p, g, _) => {
    g.component = p;
    const x = p.vnode.props;
    p.vnode = g, p.next = null, wm(p, g.props, x, _), Om(p, g.children, _), Qt(), li(p), Zt();
  }, ie = (p, g, _, x, L, M, Y, G, d = !1) => {
    const m = p && p.children, R = p ? p.shapeFlag : 0, F = g.children, { patchFlag: Z, shapeFlag: q } = g;
    if (Z > 0) {
      if (Z & 128) {
        xe(
          m,
          F,
          _,
          x,
          L,
          M,
          Y,
          G,
          d
        );
        return;
      } else if (Z & 256) {
        Ae(
          m,
          F,
          _,
          x,
          L,
          M,
          Y,
          G,
          d
        );
        return;
      }
    }
    q & 8 ? (R & 16 && pe(m, L, M), F !== m && u(_, F)) : R & 16 ? q & 16 ? xe(
      m,
      F,
      _,
      x,
      L,
      M,
      Y,
      G,
      d
    ) : pe(m, L, M, !0) : (R & 8 && u(_, ""), q & 16 && N(
      F,
      _,
      x,
      L,
      M,
      Y,
      G,
      d
    ));
  }, Ae = (p, g, _, x, L, M, Y, G, d) => {
    p = p || Xn, g = g || Xn;
    const m = p.length, R = g.length, F = Math.min(m, R);
    let Z;
    for (Z = 0; Z < F; Z++) {
      const q = g[Z] = d ? mn(g[Z]) : Ut(g[Z]);
      S(
        p[Z],
        q,
        _,
        null,
        L,
        M,
        Y,
        G,
        d
      );
    }
    m > R ? pe(
      p,
      L,
      M,
      !0,
      !1,
      F
    ) : N(
      g,
      _,
      x,
      L,
      M,
      Y,
      G,
      d,
      F
    );
  }, xe = (p, g, _, x, L, M, Y, G, d) => {
    let m = 0;
    const R = g.length;
    let F = p.length - 1, Z = R - 1;
    for (; m <= F && m <= Z; ) {
      const q = p[m], k = g[m] = d ? mn(g[m]) : Ut(g[m]);
      if (kn(q, k))
        S(
          q,
          k,
          _,
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
    for (; m <= F && m <= Z; ) {
      const q = p[F], k = g[Z] = d ? mn(g[Z]) : Ut(g[Z]);
      if (kn(q, k))
        S(
          q,
          k,
          _,
          null,
          L,
          M,
          Y,
          G,
          d
        );
      else
        break;
      F--, Z--;
    }
    if (m > F) {
      if (m <= Z) {
        const q = Z + 1, k = q < R ? g[q].el : x;
        for (; m <= Z; )
          S(
            null,
            g[m] = d ? mn(g[m]) : Ut(g[m]),
            _,
            k,
            L,
            M,
            Y,
            G,
            d
          ), m++;
      }
    } else if (m > Z)
      for (; m <= F; )
        Ee(p[m], L, M, !0), m++;
    else {
      const q = m, k = m, $ = /* @__PURE__ */ new Map();
      for (m = k; m <= Z; m++) {
        const st = g[m] = d ? mn(g[m]) : Ut(g[m]);
        st.key != null && $.set(st.key, m);
      }
      let ce, Se = 0;
      const $e = Z - k + 1;
      let rt = !1, Je = 0;
      const Nt = new Array($e);
      for (m = 0; m < $e; m++) Nt[m] = 0;
      for (m = q; m <= F; m++) {
        const st = p[m];
        if (Se >= $e) {
          Ee(st, L, M, !0);
          continue;
        }
        let Et;
        if (st.key != null)
          Et = $.get(st.key);
        else
          for (ce = k; ce <= Z; ce++)
            if (Nt[ce - k] === 0 && kn(st, g[ce])) {
              Et = ce;
              break;
            }
        Et === void 0 ? Ee(st, L, M, !0) : (Nt[Et - k] = m + 1, Et >= Je ? Je = Et : rt = !0, S(
          st,
          g[Et],
          _,
          null,
          L,
          M,
          Y,
          G,
          d
        ), Se++);
      }
      const pr = rt ? Im(Nt) : Xn;
      for (ce = pr.length - 1, m = $e - 1; m >= 0; m--) {
        const st = k + m, Et = g[st], Hn = g[st + 1], ss = st + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Hn.el || cu(Hn)
        ) : x;
        Nt[m] === 0 ? S(
          null,
          Et,
          _,
          ss,
          L,
          M,
          Y,
          G,
          d
        ) : rt && (ce < 0 || m !== pr[ce] ? he(Et, _, ss, 2) : ce--);
      }
    }
  }, he = (p, g, _, x, L = null) => {
    const { el: M, type: Y, transition: G, children: d, shapeFlag: m } = p;
    if (m & 6) {
      he(p.component.subTree, g, _, x);
      return;
    }
    if (m & 128) {
      p.suspense.move(g, _, x);
      return;
    }
    if (m & 64) {
      Y.move(p, g, _, Ce);
      return;
    }
    if (Y === He) {
      r(M, g, _);
      for (let F = 0; F < d.length; F++)
        he(d[F], g, _, x);
      r(p.anchor, g, _);
      return;
    }
    if (Y === Co) {
      y(p, g, _);
      return;
    }
    if (x !== 2 && m & 1 && G)
      if (x === 0)
        G.beforeEnter(M), r(M, g, _), pt(() => G.enter(M), L);
      else {
        const { leave: F, delayLeave: Z, afterLeave: q } = G, k = () => {
          p.ctx.isUnmounted ? o(M) : r(M, g, _);
        }, $ = () => {
          M._isLeaving && M[Gt](
            !0
            /* cancelled */
          ), F(M, () => {
            k(), q && q();
          });
        };
        Z ? Z(M, k, $) : $();
      }
    else
      r(M, g, _);
  }, Ee = (p, g, _, x = !1, L = !1) => {
    const {
      type: M,
      props: Y,
      ref: G,
      children: d,
      dynamicChildren: m,
      shapeFlag: R,
      patchFlag: F,
      dirs: Z,
      cacheIndex: q
    } = p;
    if (F === -2 && (L = !1), G != null && (Qt(), Lr(G, null, _, p, !0), Zt()), q != null && (g.renderCache[q] = void 0), R & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const k = R & 1 && Z, $ = !tr(p);
    let ce;
    if ($ && (ce = Y && Y.onVnodeBeforeUnmount) && Mt(ce, g, p), R & 6)
      We(p.component, _, x);
    else {
      if (R & 128) {
        p.suspense.unmount(_, x);
        return;
      }
      k && Tn(p, null, g, "beforeUnmount"), R & 64 ? p.type.remove(
        p,
        g,
        _,
        Ce,
        x
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== He || F > 0 && F & 64) ? pe(
        m,
        g,
        _,
        !1,
        !0
      ) : (M === He && F & 384 || !L && R & 16) && pe(d, g, _), x && Me(p);
    }
    ($ && (ce = Y && Y.onVnodeUnmounted) || k) && pt(() => {
      ce && Mt(ce, g, p), k && Tn(p, null, g, "unmounted");
    }, _);
  }, Me = (p) => {
    const { type: g, el: _, anchor: x, transition: L } = p;
    if (g === He) {
      Xe(_, x);
      return;
    }
    if (g === Co) {
      v(p);
      return;
    }
    const M = () => {
      o(_), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (p.shapeFlag & 1 && L && !L.persisted) {
      const { leave: Y, delayLeave: G } = L, d = () => Y(_, M);
      G ? G(p.el, M, d) : d();
    } else
      M();
  }, Xe = (p, g) => {
    let _;
    for (; p !== g; )
      _ = h(p), o(p), p = _;
    o(g);
  }, We = (p, g, _) => {
    const { bum: x, scope: L, job: M, subTree: Y, um: G, m: d, a: m } = p;
    Ei(d), Ei(m), x && vs(x), L.stop(), M && (M.flags |= 8, Ee(Y, p, g, _)), G && pt(G, g), pt(() => {
      p.isUnmounted = !0;
    }, g);
  }, pe = (p, g, _, x = !1, L = !1, M = 0) => {
    for (let Y = M; Y < p.length; Y++)
      Ee(p[Y], g, _, x, L);
  }, K = (p) => {
    if (p.shapeFlag & 6)
      return K(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = h(p.anchor || p.el), _ = g && g[Dc];
    return _ ? h(_) : g;
  };
  let re = !1;
  const ae = (p, g, _) => {
    let x;
    p == null ? g._vnode && (Ee(g._vnode, null, null, !0), x = g._vnode.component) : S(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = p, re || (re = !0, li(x), kc(), re = !1);
  }, Ce = {
    p: S,
    um: Ee,
    m: he,
    r: Me,
    mt: oe,
    mc: N,
    pc: ie,
    pbc: B,
    n: K,
    o: e
  };
  return {
    render: ae,
    hydrate: void 0,
    createApp: mm(ae)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function An({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Lm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ma(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (me(r) && me(o))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = mn(o[s]), i.el = a.el), !n && i.patchFlag !== -2 && Ma(a, i)), i.type === Jr && (i.patchFlag !== -1 ? i.el = a.el : i.__elIndex = s + // take fragment start anchor into account
      (e.type === He ? 1 : 0)), i.type === ut && !i.el && (i.el = a.el);
    }
}
function Im(e) {
  const t = e.slice(), n = [0];
  let r, o, s, a, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, a = n.length - 1; s < a; )
        i = s + a >> 1, e[n[i]] < c ? s = i + 1 : a = i;
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, a = n[s - 1]; s-- > 0; )
    n[s] = a, a = t[a];
  return n;
}
function lu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lu(t);
}
function Ei(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function cu(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? cu(t.subTree) : null;
}
const uu = (e) => e.__isSuspense;
function km(e, t) {
  t && t.pendingBranch ? me(e) ? t.effects.push(...e) : t.effects.push(e) : jd(e);
}
const He = /* @__PURE__ */ Symbol.for("v-fgt"), Jr = /* @__PURE__ */ Symbol.for("v-txt"), ut = /* @__PURE__ */ Symbol.for("v-cmt"), Co = /* @__PURE__ */ Symbol.for("v-stc"), kr = [];
let wt = null;
function ge(e = !1) {
  kr.push(wt = e ? null : []);
}
function xm() {
  kr.pop(), wt = kr[kr.length - 1] || null;
}
let Vr = 1;
function Ms(e, t = !1) {
  Vr += e, e < 0 && wt && t && (wt.hasOnce = !0);
}
function fu(e) {
  return e.dynamicChildren = Vr > 0 ? wt || Xn : null, xm(), Vr > 0 && wt && wt.push(e), e;
}
function we(e, t, n, r, o, s) {
  return fu(
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
function gn(e, t, n, r, o) {
  return fu(
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
function jr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const du = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qe(e) || je(e) || ve(e) ? { i: ft, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, r = 0, o = null, s = e === He ? 0 : 1, a = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && du(t),
    ref: t && ws(t),
    scopeId: Pc,
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
    ctx: ft
  };
  return i ? (Da(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= qe(n) ? 8 : 16), Vr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && wt.push(l), l;
}
const ye = Pm;
function Pm(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === om) && (e = ut), jr(e)) {
    const i = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Da(i, n), Vr > 0 && !s && wt && (i.shapeFlag & 6 ? wt[wt.indexOf(e)] = i : wt.push(i)), i.patchFlag = -2, i;
  }
  if (Bm(e) && (e = e.__vccOpts), t) {
    t = Nm(t);
    let { class: i, style: l } = t;
    i && !qe(i) && (t.class = Ge(i)), Ue(l) && (Qs(l) && !me(l) && (l = tt({}, l)), t.style = ur(l));
  }
  const a = qe(e) ? 1 : uu(e) ? 128 : Fc(e) ? 64 : Ue(e) ? 4 : ve(e) ? 2 : 0;
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
function Nm(e) {
  return e ? Qs(e) || nu(e) ? tt({}, e) : e : null;
}
function bn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, c = t ? Mm(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && du(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? me(s) ? s.concat(ws(t)) : [s, ws(t)] : ws(t)
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
    ssContent: e.ssContent && bn(e.ssContent),
    ssFallback: e.ssFallback && bn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Fn(
    u,
    l.clone(u)
  ), u;
}
function qn(e = " ", t = 0) {
  return ye(Jr, null, e, t);
}
function Ze(e = "", t = !1) {
  return t ? (ge(), gn(ut, null, e)) : ye(ut, null, e);
}
function Ut(e) {
  return e == null || typeof e == "boolean" ? ye(ut) : me(e) ? ye(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jr(e) ? mn(e) : ye(Jr, null, String(e));
}
function mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function Da(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (me(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Da(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !nu(t) ? t._ctx = ft : o === 3 && ft && (ft.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: ft }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ge([t.class, r.class]));
      else if (o === "style")
        t.style = ur([t.style, r.style]);
      else if (zs(o)) {
        const s = t[o], a = r[o];
        a && s !== a && !(me(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
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
const Dm = Qc();
let Fm = 0;
function Um(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Dm, s = {
    uid: Fm++,
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
    scope: new cc(
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
    propsOptions: su(r, o),
    emitsOptions: Zc(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ne,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ne,
    data: Ne,
    props: Ne,
    attrs: Ne,
    slots: Ne,
    refs: Ne,
    setupState: Ne,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = pm.bind(null, s), e.ce && e.ce(s), s;
}
let _t = null;
const tn = () => _t || ft;
let Ds, Jo;
{
  const e = Ys(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _t = n
  ), Jo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Br = n
  );
}
const Qr = (e) => {
  const t = _t;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
}, wi = () => {
  _t && _t.scope.off(), Ds(null);
};
function mu(e) {
  return e.vnode.shapeFlag & 4;
}
let Br = !1;
function $m(e, t = !1, n = !1) {
  t && Jo(t);
  const { props: r, children: o } = e.vnode, s = mu(e);
  Em(e, r, s, t), Am(e, o, n || t);
  const a = s ? Hm(e, t) : void 0;
  return t && Jo(!1), a;
}
function Hm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, am);
  const { setup: r } = n;
  if (r) {
    Qt();
    const o = e.setupContext = r.length > 1 ? jm(e) : null, s = Qr(e), a = Yr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = tc(a);
    if (Zt(), s(), (i || e.sp) && !tr(e) && zc(e), i) {
      if (a.then(wi, wi), t)
        return a.then((l) => {
          Si(e, l);
        }).catch((l) => {
          Zs(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Si(e, a);
  } else
    hu(e);
}
function Si(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ue(t) && (e.setupState = Rc(t)), hu(e);
}
function hu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ht);
  {
    const o = Qr(e);
    Qt();
    try {
      im(e);
    } finally {
      Zt(), o();
    }
  }
}
const Vm = {
  get(e, t) {
    return ct(e, "get", ""), e[t];
  }
};
function jm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ro(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rc(Ra(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ir)
        return Ir[n](e);
    },
    has(t, n) {
      return n in t || n in Ir;
    }
  })) : e.proxy;
}
function Bm(e) {
  return ve(e) && "__vccOpts" in e;
}
const _e = (e, t) => Fd(e, t, Br);
function Wr(e, t, n) {
  try {
    Ms(-1);
    const r = arguments.length;
    return r === 2 ? Ue(t) && !me(t) ? jr(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && jr(n) && (n = [n]), ye(e, t, n));
  } finally {
    Ms(1);
  }
}
const Wm = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qo;
const Ti = typeof window < "u" && window.trustedTypes;
if (Ti)
  try {
    Qo = /* @__PURE__ */ Ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pu = Qo ? (e) => Qo.createHTML(e) : (e) => e, zm = "http://www.w3.org/2000/svg", Km = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Ai = Kt && /* @__PURE__ */ Kt.createElement("template"), Gm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(zm, e) : t === "mathml" ? Kt.createElementNS(Km, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
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
      Ai.innerHTML = pu(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ai.content;
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
}, on = "transition", br = "animation", or = /* @__PURE__ */ Symbol("_vtc"), gu = {
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
}, _u = /* @__PURE__ */ tt(
  {},
  Vc,
  gu
), qm = (e) => (e.displayName = "Transition", e.props = _u, e), bu = /* @__PURE__ */ qm(
  (e, { slots: t }) => Wr(Xd, yu(e), t)
), On = (e, t = []) => {
  me(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Oi = (e) => e ? me(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function yu(e) {
  const t = {};
  for (const U in e)
    U in gu || (t[U] = e[U]);
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
    appearActiveClass: c = a,
    appearToClass: u = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, w = Ym(o), S = w && w[0], A = w && w[1], {
    onBeforeEnter: E,
    onEnter: P,
    onEnterCancelled: y,
    onLeave: v,
    onLeaveCancelled: I,
    onBeforeAppear: C = E,
    onAppear: D = P,
    onAppearCancelled: N = y
  } = t, O = (U, te, oe, fe) => {
    U._enterCancelled = fe, ln(U, te ? u : i), ln(U, te ? c : a), oe && oe();
  }, B = (U, te) => {
    U._isLeaving = !1, ln(U, f), ln(U, b), ln(U, h), te && te();
  }, ee = (U) => (te, oe) => {
    const fe = U ? D : P, V = () => O(te, U, oe);
    On(fe, [te, V]), Ci(() => {
      ln(te, U ? l : s), Dt(te, U ? u : i), Oi(fe) || Ri(te, r, S, V);
    });
  };
  return tt(t, {
    onBeforeEnter(U) {
      On(E, [U]), Dt(U, s), Dt(U, a);
    },
    onBeforeAppear(U) {
      On(C, [U]), Dt(U, l), Dt(U, c);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(U, te) {
      U._isLeaving = !0;
      const oe = () => B(U, te);
      Dt(U, f), U._enterCancelled ? (Dt(U, h), Zo(U)) : (Zo(U), Dt(U, h)), Ci(() => {
        U._isLeaving && (ln(U, f), Dt(U, b), Oi(v) || Ri(U, r, A, oe));
      }), On(v, [U, oe]);
    },
    onEnterCancelled(U) {
      O(U, !1, void 0, !0), On(y, [U]);
    },
    onAppearCancelled(U) {
      O(U, !0, void 0, !0), On(N, [U]);
    },
    onLeaveCancelled(U) {
      B(U), On(I, [U]);
    }
  });
}
function Ym(e) {
  if (e == null)
    return null;
  if (Ue(e))
    return [Ro(e.enter), Ro(e.leave)];
  {
    const t = Ro(e);
    return [t, t];
  }
}
function Ro(e) {
  return sd(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[or] || (e[or] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[or];
  n && (n.delete(t), n.size || (e[or] = void 0));
}
function Ci(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Xm = 0;
function Ri(e, t, n, r) {
  const o = e._endId = ++Xm, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = vu(e, t);
  if (!a)
    return r();
  const c = a + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, h), s();
  }, h = (b) => {
    b.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, i + 1), e.addEventListener(c, h);
}
function vu(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), o = r(`${on}Delay`), s = r(`${on}Duration`), a = Li(o, s), i = r(`${br}Delay`), l = r(`${br}Duration`), c = Li(i, l);
  let u = null, f = 0, h = 0;
  t === on ? a > 0 && (u = on, f = a, h = s.length) : t === br ? c > 0 && (u = br, f = c, h = l.length) : (f = Math.max(a, c), u = f > 0 ? a > c ? on : br : null, h = u ? u === on ? s.length : l.length : 0);
  const b = u === on && /\b(?:transform|all)(?:,|$)/.test(
    r(`${on}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: b
  };
}
function Li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ii(n) + Ii(e[r])));
}
function Ii(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Zo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Jm(e, t, n) {
  const r = e[or];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ki = /* @__PURE__ */ Symbol("_vod"), Qm = /* @__PURE__ */ Symbol("_vsh"), Zm = /* @__PURE__ */ Symbol(""), eh = /(?:^|;)\s*display\s*:/;
function th(e, t, n) {
  const r = e.style, o = qe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (qe(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && Ss(r, i, "");
        }
      else
        for (const a in t)
          n[a] == null && Ss(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), Ss(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[Zm];
      a && (n += ";" + a), r.cssText = n, s = eh.test(n);
    }
  } else t && e.removeAttribute("style");
  ki in e && (e[ki] = s ? r.display : "", e[Qm] && (r.display = "none"));
}
const xi = /\s*!important$/;
function Ss(e, t, n) {
  if (me(n))
    n.forEach((r) => Ss(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = nh(e, t);
    xi.test(n) ? e.setProperty(
      vn(r),
      n.replace(xi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Pi = ["Webkit", "Moz", "ms"], Lo = {};
function nh(e, t) {
  const n = Lo[t];
  if (n)
    return n;
  let r = _n(t);
  if (r !== "filter" && r in e)
    return Lo[t] = r;
  r = sc(r);
  for (let o = 0; o < Pi.length; o++) {
    const s = Pi[o] + r;
    if (s in e)
      return Lo[t] = s;
  }
  return t;
}
const Ni = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, r, o, s = ud(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, n) : n == null || s && !ac(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : nn(n) ? String(n) : n
  );
}
function Di(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pu(n) : n);
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
    i === "boolean" ? n = ac(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function Kn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function rh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fi = /* @__PURE__ */ Symbol("_vei");
function sh(e, t, n, r, o = null) {
  const s = e[Fi] || (e[Fi] = {}), a = s[t];
  if (r && a)
    a.value = r;
  else {
    const [i, l] = oh(t);
    if (r) {
      const c = s[t] = lh(
        r,
        o
      );
      Kn(e, i, c, l);
    } else a && (rh(e, i, a, l), s[t] = void 0);
  }
}
const Ui = /(?:Once|Passive|Capture)$/;
function oh(e) {
  let t;
  if (Ui.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ui); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vn(e.slice(2)), t];
}
let Io = 0;
const ah = /* @__PURE__ */ Promise.resolve(), ih = () => Io || (ah.then(() => Io = 0), Io = Date.now());
function lh(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xt(
      ch(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ih(), n;
}
function ch(e, t) {
  if (me(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uh = (e, t, n, r, o, s) => {
  const a = o === "svg";
  t === "class" ? Jm(e, r, a) : t === "style" ? th(e, n, r) : zs(t) ? ba(t) || sh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fh(e, t, r, a)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, r, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !qe(r)) ? Di(e, _n(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mi(e, t, r, a));
};
function fh(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return $i(t) && qe(n) ? !1 : t in e;
}
const Eu = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ Symbol("_moveCb"), Hi = /* @__PURE__ */ Symbol("_enterCb"), dh = (e) => (delete e.props.mode, e), mh = /* @__PURE__ */ dh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ tt({}, _u, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = tn(), r = Hc();
    let o, s;
    return qc(() => {
      if (!o.length)
        return;
      const a = e.moveClass || `${e.name || "v"}-move`;
      if (!bh(
        o[0].el,
        n.vnode.el,
        a
      )) {
        o = [];
        return;
      }
      o.forEach(ph), o.forEach(gh);
      const i = o.filter(_h);
      Zo(n.vnode.el), i.forEach((l) => {
        const c = l.el, u = c.style;
        Dt(c, a), u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = c[Fs] = (h) => {
          h && h.target !== c || (!h || h.propertyName.endsWith("transform")) && (c.removeEventListener("transitionend", f), c[Fs] = null, ln(c, a));
        };
        c.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const a = Le(e), i = yu(a);
      let l = a.tag || He;
      if (o = [], s)
        for (let c = 0; c < s.length; c++) {
          const u = s[c];
          u.el && u.el instanceof Element && (o.push(u), Fn(
            u,
            Hr(
              u,
              i,
              r,
              n
            )
          ), Eu.set(u, {
            left: u.el.offsetLeft,
            top: u.el.offsetTop
          }));
        }
      s = t.default ? ka(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const u = s[c];
        u.key != null && Fn(
          u,
          Hr(u, i, r, n)
        );
      }
      return ye(l, null, s);
    };
  }
}), hh = mh;
function ph(e) {
  const t = e.el;
  t[Fs] && t[Fs](), t[Hi] && t[Hi]();
}
function gh(e) {
  wu.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function _h(e) {
  const t = Eu.get(e), n = wu.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function bh(e, t, n) {
  const r = e.cloneNode(), o = e[or];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: a } = vu(r);
  return s.removeChild(r), a;
}
const Vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return me(t) ? (n) => vs(t, n) : t;
};
function yh(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ko = /* @__PURE__ */ Symbol("_assign");
function Bi(e, t, n) {
  return t && (e = e.trim()), n && (e = va(e)), e;
}
const ea = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ko] = Vi(o);
    const s = r || o.props && o.props.type === "number";
    Kn(e, t ? "change" : "input", (a) => {
      a.target.composing || e[ko](Bi(e.value, n, s));
    }), (n || s) && Kn(e, "change", () => {
      e.value = Bi(e.value, n, s);
    }), t || (Kn(e, "compositionstart", yh), Kn(e, "compositionend", ji), Kn(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, a) {
    if (e[ko] = Vi(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? va(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, vh = ["ctrl", "shift", "alt", "meta"], Eh = {
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
  exact: (e, t) => vh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = Eh[t[a]];
      if (i && i(o, t)) return;
    }
    return e(o, ...s);
  }));
}, wh = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, xr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = vn(o.key);
    if (t.some(
      (a) => a === s || wh[a] === s
    ))
      return e(o);
  }));
}, Sh = /* @__PURE__ */ tt({ patchProp: uh }, Gm);
let Wi;
function Th() {
  return Wi || (Wi = Cm(Sh));
}
const Ah = ((...e) => {
  const t = Th().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Ch(r);
    if (!o) return;
    const s = t._component;
    !ve(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, Oh(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
});
function Oh(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ch(e) {
  return qe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Su;
const so = (e) => Su = e, Tu = (
  /* istanbul ignore next */
  Symbol()
);
function ta(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Pr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Pr || (Pr = {}));
function Rh() {
  const e = Ea(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const o = Ra({
    install(s) {
      so(o), o._a = s, s.provide(Tu, o), s.config.globalProperties.$pinia = o, r.forEach((a) => n.push(a)), r = [];
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
function zi(e, t, n, r = Au) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && uc() && fc(o), o;
}
function jn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Lh = (e) => e(), Ki = Symbol(), xo = Symbol();
function na(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    ta(o) && ta(r) && e.hasOwnProperty(n) && !je(r) && !Jt(r) ? e[n] = na(o, r) : e[n] = r;
  }
  return e;
}
const Ih = (
  /* istanbul ignore next */
  Symbol()
);
function kh(e) {
  return !ta(e) || !e.hasOwnProperty(Ih);
}
const { assign: cn } = Object;
function xh(e) {
  return !!(je(e) && e.effect);
}
function Ph(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function c() {
    i || (n.state.value[e] = o ? o() : {});
    const u = Pd(n.state.value[e]);
    return cn(u, s, Object.keys(a || {}).reduce((f, h) => (f[h] = Ra(_e(() => {
      so(n);
      const b = n._s.get(e);
      return a[h].call(b, b);
    })), f), {}));
  }
  return l = Ou(e, c, t, n, r, !0), l;
}
function Ou(e, t, n = {}, r, o, s) {
  let a;
  const i = cn({ actions: {} }, n), l = { deep: !0 };
  let c, u, f = [], h = [], b;
  const w = r.state.value[e];
  !s && !w && (r.state.value[e] = {}), J({});
  let S;
  function A(N) {
    let O;
    c = u = !1, typeof N == "function" ? (N(r.state.value[e]), O = {
      type: Pr.patchFunction,
      storeId: e,
      events: b
    }) : (na(r.state.value[e], N), O = {
      type: Pr.patchObject,
      payload: N,
      storeId: e,
      events: b
    });
    const B = S = Symbol();
    Zn().then(() => {
      S === B && (c = !0);
    }), u = !0, jn(f, O, r.state.value[e]);
  }
  const E = s ? function() {
    const { state: O } = n, B = O ? O() : {};
    this.$patch((ee) => {
      cn(ee, B);
    });
  } : (
    /* istanbul ignore next */
    Au
  );
  function P() {
    a.stop(), f = [], h = [], r._s.delete(e);
  }
  const y = (N, O = "") => {
    if (Ki in N)
      return N[xo] = O, N;
    const B = function() {
      so(r);
      const ee = Array.from(arguments), U = [], te = [];
      function oe(X) {
        U.push(X);
      }
      function fe(X) {
        te.push(X);
      }
      jn(h, {
        args: ee,
        name: B[xo],
        store: I,
        after: oe,
        onError: fe
      });
      let V;
      try {
        V = N.apply(this && this.$id === e ? this : I, ee);
      } catch (X) {
        throw jn(te, X), X;
      }
      return V instanceof Promise ? V.then((X) => (jn(U, X), X)).catch((X) => (jn(te, X), Promise.reject(X))) : (jn(U, V), V);
    };
    return B[Ki] = !0, B[xo] = O, B;
  }, v = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, h),
    $patch: A,
    $reset: E,
    $subscribe(N, O = {}) {
      const B = zi(f, N, O.detached, () => ee()), ee = a.run(() => Tt(() => r.state.value[e], (U) => {
        (O.flush === "sync" ? u : c) && N({
          storeId: e,
          type: Pr.direct,
          events: b
        }, U);
      }, cn({}, l, O)));
      return B;
    },
    $dispose: P
  }, I = Js(v);
  r._s.set(e, I);
  const D = (r._a && r._a.runWithContext || Lh)(() => r._e.run(() => (a = Ea()).run(() => t({ action: y }))));
  for (const N in D) {
    const O = D[N];
    if (je(O) && !xh(O) || Jt(O))
      s || (w && kh(O) && (je(O) ? O.value = w[N] : na(O, w[N])), r.state.value[e][N] = O);
    else if (typeof O == "function") {
      const B = y(O, N);
      D[N] = B, i.actions[N] = O;
    }
  }
  return cn(I, D), cn(Le(I), D), Object.defineProperty(I, "$state", {
    get: () => r.state.value[e],
    set: (N) => {
      A((O) => {
        cn(O, N);
      });
    }
  }), r._p.forEach((N) => {
    cn(I, a.run(() => N({
      store: I,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), w && s && n.hydrate && n.hydrate(I.$state, w), c = !0, u = !0, I;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fa(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function a(i, l) {
    const c = Wd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (c ? er(Tu, null) : null), i && so(i), i = Su, i._s.has(r) || (s ? Ou(r, t, o, i) : Ph(r, o, i)), i._s.get(r);
  }
  return a.$id = r, a;
}
const Nh = ["stroke-width"], Mh = ["d"], Ke = /* @__PURE__ */ rn({
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
    return (s, a) => (ge(), we("svg", {
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
      }, null, 8, Mh)
    ], 10, Nh));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Dh(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Us = typeof window < "u", En = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Fh = (e, t, n) => Uh({ l: e, k: t, s: n }), Uh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), $h = (e) => Ru(e) === "[object Date]", yn = (e) => Ru(e) === "[object RegExp]", oo = (e) => be(e) && Object.keys(e).length === 0, at = Object.assign, Hh = Object.create, Pe = (e = null) => Hh(e);
let Gi;
const xn = () => Gi || (Gi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Pe());
function qi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Yi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Vh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Yi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Yi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const jh = Object.prototype.hasOwnProperty;
function Lt(e, t) {
  return jh.call(e, t);
}
const Ve = Array.isArray, Fe = (e) => typeof e == "function", se = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", Ie = (e) => e !== null && typeof e == "object", Bh = (e) => Ie(e) && Fe(e.then) && Fe(e.catch), Cu = Object.prototype.toString, Ru = (e) => Cu.call(e), be = (e) => {
  if (!Ie(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Wh = (e) => e == null ? "" : Ve(e) || be(e) && e.toString === Cu ? JSON.stringify(e, null, 2) : String(e);
function zh(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function ao(e) {
  let t = e;
  return () => ++t;
}
const fs = (e) => !Ie(e) || Ve(e);
function Ts(e, t) {
  if (fs(e) || fs(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (Ie(r[s]) && !Ie(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : Pe()), fs(o[s]) || fs(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Kh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function $s(e, t, n) {
  return { start: e, end: t };
}
const Gh = /\{([0-9a-zA-Z]+)\}/g;
function Lu(e, ...t) {
  return t.length === 1 && qh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Gh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Iu = Object.assign, Xi = (e) => typeof e == "string", qh = (e) => e !== null && typeof e == "object";
function ku(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Ua = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Yh = {
  [Ua.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Xh(e, t, ...n) {
  const r = Lu(Yh[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const de = {
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
}, Jh = {
  // tokenizer error messages
  [de.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [de.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [de.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [de.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [de.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [de.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [de.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [de.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [de.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [de.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [de.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [de.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [de.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [de.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [de.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function dr(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, a = Lu((o || Jh)[e] || "", ...s || []), i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Qh(e) {
  throw e;
}
const Wt = " ", Zh = "\r", ht = `
`, ep = "\u2028", tp = "\u2029";
function np(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const a = (D) => t[D] === Zh && t[D + 1] === ht, i = (D) => t[D] === ht, l = (D) => t[D] === tp, c = (D) => t[D] === ep, u = (D) => a(D) || i(D) || l(D) || c(D), f = () => n, h = () => r, b = () => o, w = () => s, S = (D) => a(D) || l(D) || c(D) ? ht : t[D], A = () => S(n), E = () => S(n + s);
  function P() {
    return s = 0, u(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function y() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function v() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function I(D = 0) {
    s = D;
  }
  function C() {
    const D = n + s;
    for (; D !== n; )
      P();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: b,
    peekOffset: w,
    charAt: S,
    currentChar: A,
    currentPeek: E,
    next: P,
    peek: y,
    reset: v,
    resetPeek: I,
    skipToPeek: C
  };
}
const an = void 0, rp = ".", Ji = "'", sp = "tokenizer";
function op(e, t = {}) {
  const n = t.location !== !1, r = np(e), o = () => r.index(), s = () => Kh(r.line(), r.column(), r.index()), a = s(), i = o(), l = {
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
  }, c = () => l, { onError: u } = t;
  function f(d, m, R, ...F) {
    const Z = c();
    if (m.column += R, m.offset += R, u) {
      const q = n ? $s(Z.startLoc, m) : null, k = dr(d, q, {
        domain: sp,
        args: F
      });
      u(k);
    }
  }
  function h(d, m, R) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return n && (F.loc = $s(d.startLoc, d.endLoc)), R != null && (F.value = R), F;
  }
  const b = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function w(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (f(de.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function S(d) {
    let m = "";
    for (; d.currentPeek() === Wt || d.currentPeek() === ht; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function A(d) {
    const m = S(d);
    return d.skipToPeek(), m;
  }
  function E(d) {
    if (d === an)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function P(d) {
    if (d === an)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function y(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    S(d);
    const F = E(d.currentPeek());
    return d.resetPeek(), F;
  }
  function v(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), Z = P(F);
    return d.resetPeek(), Z;
  }
  function I(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === Ji;
    return d.resetPeek(), F;
  }
  function C(d, m) {
    const { currentType: R } = m;
    if (R !== 8)
      return !1;
    S(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function D(d, m) {
    const { currentType: R } = m;
    if (R !== 9)
      return !1;
    S(d);
    const F = E(d.currentPeek());
    return d.resetPeek(), F;
  }
  function N(d, m) {
    const { currentType: R } = m;
    if (!(R === 8 || R === 12))
      return !1;
    S(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function O(d, m) {
    const { currentType: R } = m;
    if (R !== 10)
      return !1;
    const F = () => {
      const q = d.currentPeek();
      return q === "{" ? E(d.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === Wt || !q ? !1 : q === ht ? (d.peek(), F()) : U(d, !1);
    }, Z = F();
    return d.resetPeek(), Z;
  }
  function B(d) {
    S(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function ee(d) {
    const m = S(d), R = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: R,
      hasSpace: m.length > 0
    };
  }
  function U(d, m = !0) {
    const R = (Z = !1, q = "", k = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? q === "%" ? !1 : Z : $ === "@" || !$ ? q === "%" ? !0 : Z : $ === "%" ? (d.peek(), R(Z, "%", !0)) : $ === "|" ? q === "%" || k ? !0 : !(q === Wt || q === ht) : $ === Wt ? (d.peek(), R(!0, Wt, k)) : $ === ht ? (d.peek(), R(!0, ht, k)) : !0;
    }, F = R();
    return m && d.resetPeek(), F;
  }
  function te(d, m) {
    const R = d.currentChar();
    return R === an ? an : m(R) ? (d.next(), R) : null;
  }
  function oe(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function fe(d) {
    return te(d, oe);
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
  function X(d) {
    return te(d, V);
  }
  function ie(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Ae(d) {
    return te(d, ie);
  }
  function xe(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function he(d) {
    return te(d, xe);
  }
  function Ee(d) {
    let m = "", R = "";
    for (; m = Ae(d); )
      R += m;
    return R;
  }
  function Me(d) {
    A(d);
    const m = d.currentChar();
    return m !== "%" && f(de.EXPECTED_TOKEN, s(), 0, m), d.next(), "%";
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
      else if (R === Wt || R === ht)
        if (U(d))
          m += R, d.next();
        else {
          if (B(d))
            break;
          m += R, d.next();
        }
      else
        m += R, d.next();
    }
    return m;
  }
  function We(d) {
    A(d);
    let m = "", R = "";
    for (; m = X(d); )
      R += m;
    return d.currentChar() === an && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), R;
  }
  function pe(d) {
    A(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${Ee(d)}`) : m += Ee(d), d.currentChar() === an && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function K(d) {
    return d !== Ji && d !== ht;
  }
  function re(d) {
    A(d), w(d, "'");
    let m = "", R = "";
    for (; m = te(d, K); )
      m === "\\" ? R += ae(d) : R += m;
    const F = d.currentChar();
    return F === ht || F === an ? (f(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === ht && (d.next(), w(d, "'")), R) : (w(d, "'"), R);
  }
  function ae(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Ce(d, m, 4);
      case "U":
        return Ce(d, m, 6);
      default:
        return f(de.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Ce(d, m, R) {
    w(d, m);
    let F = "";
    for (let Z = 0; Z < R; Z++) {
      const q = he(d);
      if (!q) {
        f(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += q;
    }
    return `\\${m}${F}`;
  }
  function ze(d) {
    return d !== "{" && d !== "}" && d !== Wt && d !== ht;
  }
  function p(d) {
    A(d);
    let m = "", R = "";
    for (; m = te(d, ze); )
      R += m;
    return R;
  }
  function g(d) {
    let m = "", R = "";
    for (; m = fe(d); )
      R += m;
    return R;
  }
  function _(d) {
    const m = (R) => {
      const F = d.currentChar();
      return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Wt ? R : (R += F, d.next(), m(R));
    };
    return m("");
  }
  function x(d) {
    A(d);
    const m = w(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return A(d), m;
  }
  function L(d, m) {
    let R = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && f(de.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(d), m.braceNest++, R;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && f(de.EMPTY_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && A(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), R;
      case "@":
        return m.braceNest > 0 && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), R = M(d, m) || b(m), m.braceNest = 0, R;
      default: {
        let Z = !0, q = !0, k = !0;
        if (B(d))
          return m.braceNest > 0 && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), R = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, Y(d, m);
        if (Z = y(d, m))
          return R = h(m, 5, We(d)), A(d), R;
        if (q = v(d, m))
          return R = h(m, 6, pe(d)), A(d), R;
        if (k = I(d, m))
          return R = h(m, 7, re(d)), A(d), R;
        if (!Z && !q && !k)
          return R = h(m, 13, p(d)), f(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, R.value), A(d), R;
        break;
      }
    }
    return R;
  }
  function M(d, m) {
    const { currentType: R } = m;
    let F = null;
    const Z = d.currentChar();
    switch ((R === 8 || R === 9 || R === 12 || R === 10) && (Z === ht || Z === Wt) && f(de.INVALID_LINKED_FORMAT, s(), 0), Z) {
      case "@":
        return d.next(), F = h(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, F;
      case ".":
        return A(d), d.next(), h(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(d), d.next(), h(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(d) ? (F = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, F) : C(d, m) || N(d, m) ? (A(d), M(d, m)) : D(d, m) ? (A(d), h(m, 12, g(d))) : O(d, m) ? (A(d), Z === "{" ? L(d, m) || F : h(m, 11, _(d))) : (R === 8 && f(de.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, Y(d, m));
    }
  }
  function Y(d, m) {
    let R = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return L(d, m) || b(m);
    if (m.inLinked)
      return M(d, m) || b(m);
    switch (d.currentChar()) {
      case "{":
        return L(d, m) || b(m);
      case "}":
        return f(de.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(d, m) || b(m);
      default: {
        if (B(d))
          return R = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, R;
        const { isModulo: Z, hasSpace: q } = ee(d);
        if (Z)
          return q ? h(m, 0, Xe(d)) : h(m, 4, Me(d));
        if (U(d))
          return h(m, 0, Xe(d));
        break;
      }
    }
    return R;
  }
  function G() {
    const { currentType: d, offset: m, startLoc: R, endLoc: F } = l;
    return l.lastType = d, l.lastOffset = m, l.lastStartLoc = R, l.lastEndLoc = F, l.offset = o(), l.startLoc = s(), r.currentChar() === an ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : Y(r, l);
  }
  return {
    nextToken: G,
    currentOffset: o,
    currentPosition: s,
    context: c
  };
}
const ap = "parser", ip = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function lp(e, t, n) {
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
function cp(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(y, v, I, C, ...D) {
    const N = y.currentPosition();
    if (N.offset += C, N.column += C, n) {
      const O = t ? $s(I, N) : null, B = dr(v, O, {
        domain: ap,
        args: D
      });
      n(B);
    }
  }
  function s(y, v, I, C, ...D) {
    const N = y.currentPosition();
    if (N.offset += C, N.column += C, r) {
      const O = t ? $s(I, N) : null;
      r(Xh(v, O, D));
    }
  }
  function a(y, v, I) {
    const C = { type: y };
    return t && (C.start = v, C.end = v, C.loc = { start: I, end: I }), C;
  }
  function i(y, v, I, C) {
    t && (y.end = v, y.loc && (y.loc.end = I));
  }
  function l(y, v) {
    const I = y.context(), C = a(3, I.offset, I.startLoc);
    return C.value = v, i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function c(y, v) {
    const I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(5, C, D);
    return N.index = parseInt(v, 10), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function u(y, v, I) {
    const C = y.context(), { lastOffset: D, lastStartLoc: N } = C, O = a(4, D, N);
    return O.key = v, I === !0 && (O.modulo = !0), y.nextToken(), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function f(y, v) {
    const I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(9, C, D);
    return N.value = v.replace(ip, lp), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const v = y.nextToken(), I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(8, C, D);
    return v.type !== 12 ? (o(y, de.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), N.value = "", i(N, C, D), {
      nextConsumeToken: v,
      node: N
    }) : (v.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Rt(v)), N.value = v.value || "", i(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function b(y, v) {
    const I = y.context(), C = a(7, I.offset, I.startLoc);
    return C.value = v, i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function w(y) {
    const v = y.context(), I = a(6, v.offset, v.startLoc);
    let C = y.nextToken();
    if (C.type === 9) {
      const D = h(y);
      I.modifier = D.node, C = D.nextConsumeToken || y.nextToken();
    }
    switch (C.type !== 10 && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(C)), C = y.nextToken(), C.type === 2 && (C = y.nextToken()), C.type) {
      case 11:
        C.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(C)), I.key = b(y, C.value || "");
        break;
      case 5:
        C.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(C)), I.key = u(y, C.value || "");
        break;
      case 6:
        C.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(C)), I.key = c(y, C.value || "");
        break;
      case 7:
        C.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(C)), I.key = f(y, C.value || "");
        break;
      default: {
        o(y, de.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
        const D = y.context(), N = a(7, D.offset, D.startLoc);
        return N.value = "", i(N, D.offset, D.startLoc), I.key = N, i(I, D.offset, D.startLoc), {
          nextConsumeToken: C,
          node: I
        };
      }
    }
    return i(I, y.currentOffset(), y.currentPosition()), {
      node: I
    };
  }
  function S(y) {
    const v = y.context(), I = v.currentType === 1 ? y.currentOffset() : v.offset, C = v.currentType === 1 ? v.endLoc : v.startLoc, D = a(2, I, C);
    D.items = [];
    let N = null, O = null;
    do {
      const U = N || y.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(l(y, U.value || ""));
          break;
        case 6:
          U.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(c(y, U.value || ""));
          break;
        case 4:
          O = !0;
          break;
        case 5:
          U.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(u(y, U.value || "", !!O)), O && (s(y, Ua.USE_MODULO_SYNTAX, v.lastStartLoc, 0, Rt(U)), O = null);
          break;
        case 7:
          U.value == null && o(y, de.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(f(y, U.value || ""));
          break;
        case 8: {
          const te = w(y);
          D.items.push(te.node), N = te.nextConsumeToken || null;
          break;
        }
      }
    } while (v.currentType !== 14 && v.currentType !== 1);
    const B = v.currentType === 1 ? v.lastOffset : y.currentOffset(), ee = v.currentType === 1 ? v.lastEndLoc : y.currentPosition();
    return i(D, B, ee), D;
  }
  function A(y, v, I, C) {
    const D = y.context();
    let N = C.items.length === 0;
    const O = a(1, v, I);
    O.cases = [], O.cases.push(C);
    do {
      const B = S(y);
      N || (N = B.items.length === 0), O.cases.push(B);
    } while (D.currentType !== 14);
    return N && o(y, de.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function E(y) {
    const v = y.context(), { offset: I, startLoc: C } = v, D = S(y);
    return v.currentType === 14 ? D : A(y, I, C, D);
  }
  function P(y) {
    const v = op(y, Iu({}, e)), I = v.context(), C = a(0, I.offset, I.startLoc);
    return t && C.loc && (C.loc.source = y), C.body = E(v), e.onCacheKey && (C.cacheKey = e.onCacheKey(y)), I.currentType !== 14 && o(v, de.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, y[I.offset] || ""), i(C, v.currentOffset(), v.currentPosition()), C;
  }
  return { parse: P };
}
function Rt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function up(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Qi(e, t) {
  for (let n = 0; n < e.length; n++)
    $a(e[n], t);
}
function $a(e, t) {
  switch (e.type) {
    case 1:
      Qi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Qi(e.items, t);
      break;
    case 6: {
      $a(e.key, t), t.helper(
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
function fp(e, t = {}) {
  const n = up(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && $a(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function dp(e) {
  const t = e.body;
  return t.type === 2 ? Zi(t) : t.cases.forEach((n) => Zi(n)), e;
}
function Zi(e) {
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
      e.static = ku(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const mp = "minifier";
function Gn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Gn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Gn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Gn(n[r]);
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
      Gn(t.key), t.k = t.key, delete t.key, t.modifier && (Gn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw dr(de.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: mp,
        args: [e.type]
      });
  }
  delete e.type;
}
const hp = "parser";
function pp(e, t) {
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
  function l(S, A) {
    a.code += S;
  }
  function c(S, A = !0) {
    const E = A ? r : "";
    l(o ? E + "  ".repeat(S) : E);
  }
  function u(S = !0) {
    const A = ++a.indentLevel;
    S && c(A);
  }
  function f(S = !0) {
    const A = --a.indentLevel;
    S && c(A);
  }
  function h() {
    c(a.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: u,
    deindent: f,
    newline: h,
    helper: (S) => `_${S}`,
    needIndent: () => a.needIndent
  };
}
function gp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ar(e, t.key), t.modifier ? (e.push(", "), ar(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function _p(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (ar(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function bp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (ar(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function yp(e, t) {
  t.body ? ar(e, t.body) : e.push("null");
}
function ar(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      yp(e, t);
      break;
    case 1:
      bp(e, t);
      break;
    case 2:
      _p(e, t);
      break;
    case 6:
      gp(e, t);
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
      throw dr(de.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: hp,
        args: [t.type]
      });
  }
}
const vp = (e, t = {}) => {
  const n = Xi(t.mode) ? t.mode : "normal", r = Xi(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = pp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${ku(a.map((u) => `${u}: _${u}`), ", ")} } = ctx`), i.newline()), i.push("return "), ar(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: c } = i.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ep(e, t = {}) {
  const n = Iu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = cp(n).parse(e);
  return r ? (s && dp(i), o && Gn(i), { ast: i, code: "" }) : (fp(i, n), vp(i, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function wp() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Vt(e) {
  return Ie(e) && Ha(e) === 0 && (Lt(e, "b") || Lt(e, "body"));
}
const xu = ["b", "body"];
function Sp(e) {
  return wn(e, xu);
}
const Pu = ["c", "cases"];
function Tp(e) {
  return wn(e, Pu, []);
}
const Nu = ["s", "static"];
function Ap(e) {
  return wn(e, Nu);
}
const Mu = ["i", "items"];
function Op(e) {
  return wn(e, Mu, []);
}
const Du = ["t", "type"];
function Ha(e) {
  return wn(e, Du);
}
const Fu = ["v", "value"];
function ds(e, t) {
  const n = wn(e, Fu);
  if (n != null)
    return n;
  throw zr(t);
}
const Uu = ["m", "modifier"];
function Cp(e) {
  return wn(e, Uu);
}
const $u = ["k", "key"];
function Rp(e) {
  const t = wn(e, $u);
  if (t)
    return t;
  throw zr(
    6
    /* NodeTypes.Linked */
  );
}
function wn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Lt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Hu = [
  ...xu,
  ...Pu,
  ...Nu,
  ...Mu,
  ...$u,
  ...Uu,
  ...Fu,
  ...Du
];
function zr(e) {
  return new Error(`unhandled node type: ${e}`);
}
const Sn = [];
Sn[
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
Sn[
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
Sn[
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
Sn[
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
Sn[
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
Sn[
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
Sn[
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
const Lp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ip(e) {
  return Lp.test(e);
}
function kp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function xp(e) {
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
function Pp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ip(t) ? kp(t) : "*" + t;
}
function Np(e) {
  const t = [];
  let n = -1, r = 0, o = 0, s, a, i, l, c, u, f;
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
      if (o = 0, a === void 0 || (a = Pp(a), a === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, i = "\\" + w, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && b())) {
      if (l = xp(s), f = Sn[r], c = f[l] || f.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = h[c[1]], u && (i = s, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const el = /* @__PURE__ */ new Map();
function Mp(e, t) {
  return Ie(e) ? e[t] : null;
}
function Dp(e, t) {
  if (!Ie(e))
    return null;
  let n = el.get(t);
  if (n || (n = Np(t), n && el.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const a = n[s];
    if (Hu.includes(a) && Vt(o))
      return null;
    const i = o[a];
    if (i === void 0 || Fe(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Fp = (e) => e, Up = (e) => "", $p = "text", Hp = (e) => e.length === 0 ? "" : zh(e), Vp = Wh;
function tl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function jp(e) {
  const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t;
}
function Bp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Wp(e = {}) {
  const t = e.locale, n = jp(e), r = Ie(e.pluralRules) && se(t) && Fe(e.pluralRules[t]) ? e.pluralRules[t] : tl, o = Ie(e.pluralRules) && se(t) && Fe(e.pluralRules[t]) ? tl : void 0, s = (E) => E[r(n, E.length, o)], a = e.list || [], i = (E) => a[E], l = e.named || Pe();
  Ye(e.pluralIndex) && Bp(n, l);
  const c = (E) => l[E];
  function u(E) {
    const P = Fe(e.messages) ? e.messages(E) : Ie(e.messages) ? e.messages[E] : !1;
    return P || (e.parent ? e.parent.message(E) : Up);
  }
  const f = (E) => e.modifiers ? e.modifiers[E] : Fp, h = be(e.processor) && Fe(e.processor.normalize) ? e.processor.normalize : Hp, b = be(e.processor) && Fe(e.processor.interpolate) ? e.processor.interpolate : Vp, w = be(e.processor) && se(e.processor.type) ? e.processor.type : $p, A = {
    list: i,
    named: c,
    plural: s,
    linked: (E, ...P) => {
      const [y, v] = P;
      let I = "text", C = "";
      P.length === 1 ? Ie(y) ? (C = y.modifier || C, I = y.type || I) : se(y) && (C = y || C) : P.length === 2 && (se(y) && (C = y || C), se(v) && (I = v || I));
      const D = u(E)(A), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && Ve(D) && C ? D[0] : D
      );
      return C ? f(C)(N, I) : N;
    },
    message: u,
    type: w,
    interpolate: b,
    normalize: h,
    values: at(Pe(), a, l)
  };
  return A;
}
let Kr = null;
function zp(e) {
  Kr = e;
}
function Kp(e, t, n) {
  Kr && Kr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Gp = /* @__PURE__ */ qp(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function qp(e) {
  return (t) => Kr && Kr.emit(e, t);
}
const Yp = Ua.__EXTEND_POINT__, Cn = ao(Yp), Xp = {
  // 2
  FALLBACK_TO_TRANSLATE: Cn(),
  // 3
  CANNOT_FORMAT_NUMBER: Cn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: Cn(),
  // 5
  CANNOT_FORMAT_DATE: Cn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: Cn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Cn(),
  // 8
  __EXTEND_POINT__: Cn()
  // 9
}, Vu = de.__EXTEND_POINT__, Rn = ao(Vu), $t = {
  INVALID_ARGUMENT: Vu,
  // 17
  INVALID_DATE_ARGUMENT: Rn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Rn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Rn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Rn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Rn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Rn(),
  // 23
  __EXTEND_POINT__: Rn()
  // 24
};
function Xt(e) {
  return dr(e, null, void 0);
}
function Va(e, t) {
  return t.locale != null ? nl(t.locale) : nl(e.locale);
}
let Po;
function nl(e) {
  if (se(e))
    return e;
  if (Fe(e)) {
    if (e.resolvedOnce && Po != null)
      return Po;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Bh(t))
        throw Xt($t.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Po = t;
    } else
      throw Xt($t.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xt($t.NOT_SUPPORT_LOCALE_TYPE);
}
function Jp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ve(t) ? t : Ie(t) ? Object.keys(t) : se(t) ? [t] : [n]
  ])];
}
function ju(e, t, n) {
  const r = se(n) ? n : ir, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let a = [n];
    for (; Ve(a); )
      a = rl(s, a, t);
    const i = Ve(t) || !be(t) ? t : t.default ? t.default : null;
    a = se(i) ? [i] : i, Ve(a) && rl(s, a, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function rl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Oe(r); o++) {
    const s = t[o];
    se(s) && (r = Qp(e, t[o], n));
  }
  return r;
}
function Qp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Zp(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Zp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ve(n) || be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const eg = "9.14.5", io = -1, ir = "en-US", sl = "", ol = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tg() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? ol(e) : t === "vnode" && Ie(e) && "__v_isVNode" in e ? ol(e.children) : e
  };
}
let Bu;
function ng(e) {
  Bu = e;
}
let Wu;
function rg(e) {
  Wu = e;
}
let zu;
function sg(e) {
  zu = e;
}
let Ku = null;
const og = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ku = e;
}, ag = /* @__NO_SIDE_EFFECTS__ */ () => Ku;
let Gu = null;
const al = (e) => {
  Gu = e;
}, ig = () => Gu;
let il = 0;
function lg(e = {}) {
  const t = Fe(e.onWarn) ? e.onWarn : Dh, n = se(e.version) ? e.version : eg, r = se(e.locale) || Fe(e.locale) ? e.locale : ir, o = Fe(r) ? ir : r, s = Ve(e.fallbackLocale) || be(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = be(e.messages) ? e.messages : No(o), i = be(e.datetimeFormats) ? e.datetimeFormats : No(o), l = be(e.numberFormats) ? e.numberFormats : No(o), c = at(Pe(), e.modifiers, tg()), u = e.pluralRules || Pe(), f = Fe(e.missing) ? e.missing : null, h = Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, b = Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, S = !!e.unresolving, A = Fe(e.postTranslation) ? e.postTranslation : null, E = be(e.processor) ? e.processor : null, P = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, v = Fe(e.messageCompiler) ? e.messageCompiler : Bu, I = Fe(e.messageResolver) ? e.messageResolver : Wu || Mp, C = Fe(e.localeFallbacker) ? e.localeFallbacker : zu || Jp, D = Ie(e.fallbackContext) ? e.fallbackContext : void 0, N = e, O = Ie(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), B = Ie(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), ee = Ie(N.__meta) ? N.__meta : {};
  il++;
  const U = {
    version: n,
    cid: il,
    locale: r,
    fallbackLocale: s,
    messages: a,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: b,
    fallbackFormat: w,
    unresolving: S,
    postTranslation: A,
    processor: E,
    warnHtmlMessage: P,
    escapeParameter: y,
    messageCompiler: v,
    messageResolver: I,
    localeFallbacker: C,
    fallbackContext: D,
    onWarn: t,
    __meta: ee
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = O, U.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && Kp(U, n, ee), U;
}
const No = (e) => ({ [e]: Pe() });
function ja(e, t, n, r, o) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const i = s(e, n, t, o);
    return se(i) ? i : t;
  } else
    return t;
}
function yr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function cg(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ug(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (cg(e, t[r]))
      return !0;
  return !1;
}
function Mo(e) {
  return (n) => fg(n, e);
}
function fg(e, t) {
  const n = Sp(t);
  if (n == null)
    throw zr(
      0
      /* NodeTypes.Resource */
    );
  if (Ha(n) === 1) {
    const s = Tp(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      ll(e, i)
    ], []));
  } else
    return ll(e, n);
}
function ll(e, t) {
  const n = Ap(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Op(t).reduce((o, s) => [...o, ra(e, s)], []);
    return e.normalize(r);
  }
}
function ra(e, t) {
  const n = Ha(t);
  switch (n) {
    case 3:
      return ds(t, n);
    case 9:
      return ds(t, n);
    case 4: {
      const r = t;
      if (Lt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Lt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw zr(n);
    }
    case 5: {
      const r = t;
      if (Lt(r, "i") && Ye(r.i))
        return e.interpolate(e.list(r.i));
      if (Lt(r, "index") && Ye(r.index))
        return e.interpolate(e.list(r.index));
      throw zr(n);
    }
    case 6: {
      const r = t, o = Cp(r), s = Rp(r);
      return e.linked(ra(e, s), o ? ra(e, o) : void 0, e.type);
    }
    case 7:
      return ds(t, n);
    case 8:
      return ds(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const dg = (e) => e;
let ms = Pe();
function mg(e, t = {}) {
  let n = !1;
  const r = t.onError || Qh;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Ep(e, t), detectError: n };
}
function hg(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    Oe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || dg)(e), o = ms[r];
    if (o)
      return o;
    const { ast: s, detectError: a } = mg(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Mo(s);
    return a ? i : ms[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = ms[n];
      return r || (ms[n] = Mo(e));
    } else
      return Mo(e);
  }
}
const cl = () => "", Ct = (e) => Fe(e);
function ul(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, c] = sa(...t), u = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, h = Oe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, b = !!c.resolvedMessage, w = se(c.default) || Oe(c.default) ? Oe(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", S = n || w !== "", A = Va(e, c);
  h && pg(c);
  let [E, P, y] = b ? [
    l,
    A,
    i[A] || Pe()
  ] : qu(e, l, A, a, f, u), v = E, I = l;
  if (!b && !(se(v) || Vt(v) || Ct(v)) && S && (v = w, I = v), !b && (!(se(v) || Vt(v) || Ct(v)) || !se(P)))
    return o ? io : l;
  let C = !1;
  const D = () => {
    C = !0;
  }, N = Ct(v) ? v : Yu(e, l, P, v, I, D);
  if (C)
    return v;
  const O = bg(e, P, y, c), B = Wp(O), ee = gg(e, N, B);
  let U = r ? r(ee, l) : ee;
  if (h && se(U) && (U = Vh(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const te = {
      timestamp: Date.now(),
      key: se(l) ? l : Ct(v) ? v.key : "",
      locale: P || (Ct(v) ? v.locale : ""),
      format: se(v) ? v : Ct(v) ? v.source : "",
      message: U
    };
    te.meta = at({}, e.__meta, /* @__PURE__ */ ag() || {}), Gp(te);
  }
  return U;
}
function pg(e) {
  Ve(e.list) ? e.list = e.list.map((t) => se(t) ? qi(t) : t) : Ie(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = qi(e.named[t]));
  });
}
function qu(e, t, n, r, o, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let f = Pe(), h, b = null;
  const w = "translate";
  for (let S = 0; S < u.length && (h = u[S], f = a[h] || Pe(), (b = l(f, t)) === null && (b = f[t]), !(se(b) || Vt(b) || Ct(b))); S++)
    if (!ug(h, u)) {
      const A = ja(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        s,
        w
      );
      A !== t && (b = A);
    }
  return [b, h, f];
}
function Yu(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Ct(r)) {
    const c = r;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = (() => r);
    return c.locale = n, c.key = t, c;
  }
  const l = a(r, _g(e, n, o, r, i, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function gg(e, t, n) {
  return t(n);
}
function sa(...e) {
  const [t, n, r] = e, o = Pe();
  if (!se(t) && !Ye(t) && !Ct(t) && !Vt(t))
    throw Xt($t.INVALID_ARGUMENT);
  const s = Ye(t) ? String(t) : (Ct(t), t);
  return Ye(n) ? o.plural = n : se(n) ? o.default = n : be(n) && !oo(n) ? o.named = n : Ve(n) && (o.list = n), Ye(r) ? o.plural = r : se(r) ? o.default = r : be(r) && at(o, r), [s, o];
}
function _g(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => Fh(t, n, a)
  };
}
function bg(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (b) => {
      let w = a(n, b);
      if (w == null && u) {
        const [, , S] = qu(u, b, t, i, l, c);
        w = a(S, b);
      }
      if (se(w) || Vt(w)) {
        let S = !1;
        const E = Yu(e, b, t, w, b, () => {
          S = !0;
        });
        return S ? cl : E;
      } else return Ct(w) ? w : cl;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ye(r.plural) && (h.pluralIndex = r.plural), h;
}
function fl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, c, u, f] = oa(...t), h = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const b = !!u.part, w = Va(e, u), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.DateTimeFormat(w, f).format(c);
  let A = {}, E, P = null;
  const y = "datetime format";
  for (let C = 0; C < S.length && (E = S[C], A = n[E] || {}, P = A[l], !be(P)); C++)
    ja(e, l, E, h, y);
  if (!be(P) || !se(E))
    return r ? io : l;
  let v = `${E}__${l}`;
  oo(f) || (v = `${v}__${JSON.stringify(f)}`);
  let I = i.get(v);
  return I || (I = new Intl.DateTimeFormat(E, at({}, P, f)), i.set(v, I)), b ? I.formatToParts(c) : I.format(c);
}
const Xu = [
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
function oa(...e) {
  const [t, n, r, o] = e, s = Pe();
  let a = Pe(), i;
  if (se(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Xt($t.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw Xt($t.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ($h(t)) {
    if (isNaN(t.getTime()))
      throw Xt($t.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ye(t))
    i = t;
  else
    throw Xt($t.INVALID_ARGUMENT);
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Xu.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : be(r) && (a = r), be(o) && (a = o), [s.key || "", i, s, a];
}
function dl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function ml(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, c, u, f] = aa(...t), h = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const b = !!u.part, w = Va(e, u), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.NumberFormat(w, f).format(c);
  let A = {}, E, P = null;
  const y = "number format";
  for (let C = 0; C < S.length && (E = S[C], A = n[E] || {}, P = A[l], !be(P)); C++)
    ja(e, l, E, h, y);
  if (!be(P) || !se(E))
    return r ? io : l;
  let v = `${E}__${l}`;
  oo(f) || (v = `${v}__${JSON.stringify(f)}`);
  let I = i.get(v);
  return I || (I = new Intl.NumberFormat(E, at({}, P, f)), i.set(v, I)), b ? I.formatToParts(c) : I.format(c);
}
const Ju = [
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
function aa(...e) {
  const [t, n, r, o] = e, s = Pe();
  let a = Pe();
  if (!Ye(t))
    throw Xt($t.INVALID_ARGUMENT);
  const i = t;
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Ju.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : be(r) && (a = r), be(o) && (a = o), [s.key || "", i, s, a];
}
function hl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
wp();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const yg = "9.14.5";
function vg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (xn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (xn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Eg = Xp.__EXTEND_POINT__, zt = ao(Eg);
zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt();
const Qu = $t.__EXTEND_POINT__, yt = ao(Qu), et = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Qu,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: yt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: yt(),
  // 26
  NOT_INSTALLED: yt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: yt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: yt(),
  // 29
  INVALID_VALUE: yt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: yt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: yt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: yt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: yt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: yt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: yt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: yt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: yt()
  // 38
};
function nt(e, ...t) {
  return dr(e, null, void 0);
}
const ia = /* @__PURE__ */ En("__translateVNode"), la = /* @__PURE__ */ En("__datetimeParts"), ca = /* @__PURE__ */ En("__numberParts"), Zu = En("__setPluralRules"), ef = /* @__PURE__ */ En("__injectWithOption"), ua = /* @__PURE__ */ En("__dispose");
function Gr(e) {
  if (!Ie(e) || Vt(e))
    return e;
  for (const t in e)
    if (Lt(e, t))
      if (!t.includes("."))
        Ie(e[t]) && Gr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = Pe()), !Ie(o[n[a]])) {
            s = !0;
            break;
          }
          o = o[n[a]];
        }
        if (s || (Vt(o) ? Hu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Vt(o)) {
          const a = o[n[r]];
          Ie(a) && Gr(a);
        }
      }
  return e;
}
function lo(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, a = be(n) ? n : Ve(r) ? Pe() : { [e]: Pe() };
  if (Ve(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (a[l] = a[l] || Pe(), Ts(c, a[l])) : Ts(c, a);
    } else
      se(i) && Ts(JSON.parse(i), a);
  }), o == null && s)
    for (const i in a)
      Lt(a, i) && Gr(a[i]);
  return a;
}
function tf(e) {
  return e.type;
}
function nf(e, t, n) {
  let r = Ie(t.messages) ? t.messages : Pe();
  "__i18nGlobal" in n && (r = lo(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Ie(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (Ie(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function pl(e) {
  return ye(Jr, null, e, 0);
}
const gl = "__INTLIFY_META__", _l = () => [], wg = () => !1;
let bl = 0;
function yl(e) {
  return ((t, n, r, o) => e(n, r, tn() || void 0, o));
}
const Sg = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = tn();
  let t = null;
  return e && (t = tf(e)[gl]) ? { [gl]: t } : null;
};
function Ba(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, a = Us ? J : Oc, i = !!e.translateExistCompatible;
  let l = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const c = a(
    // prettier-ignore
    n && l ? n.locale.value : se(e.locale) ? e.locale : ir
  ), u = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), f = a(lo(c.value, e)), h = a(be(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), b = a(be(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let w = n ? n.missingWarn : Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, A = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, P = Fe(e.missing) ? e.missing : null, y = Fe(e.missing) ? yl(e.missing) : null, v = Fe(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const D = n ? n.modifiers : be(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    o && al(null);
    const k = {
      version: yg,
      locale: c.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: D,
      pluralRules: N,
      missing: y === null ? void 0 : y,
      missingWarn: w,
      fallbackWarn: S,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: I,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = h.value, k.numberFormats = b.value, k.__datetimeFormatters = be(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = be(O) ? O.__numberFormatters : void 0;
    const $ = lg(k);
    return o && al($), $;
  })(), yr(O, c.value, u.value);
  function ee() {
    return [
      c.value,
      u.value,
      f.value,
      h.value,
      b.value
    ];
  }
  const U = _e({
    get: () => c.value,
    set: (k) => {
      c.value = k, O.locale = c.value;
    }
  }), te = _e({
    get: () => u.value,
    set: (k) => {
      u.value = k, O.fallbackLocale = u.value, yr(O, c.value, k);
    }
  }), oe = _e(() => f.value), fe = /* @__PURE__ */ _e(() => h.value), V = /* @__PURE__ */ _e(() => b.value);
  function X() {
    return Fe(v) ? v : null;
  }
  function ie(k) {
    v = k, O.postTranslation = k;
  }
  function Ae() {
    return P;
  }
  function xe(k) {
    k !== null && (y = yl(k)), P = k, O.missing = y;
  }
  const he = (k, $, ce, Se, $e, rt) => {
    ee();
    let Je;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = n ? ig() : void 0), Je = k(O);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ye(Je) && Je === io || ce === "translate exists" && !Je) {
      const [Nt, pr] = $();
      return n && A ? Se(n) : $e(Nt);
    } else {
      if (rt(Je))
        return Je;
      throw nt(et.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ee(...k) {
    return he(($) => Reflect.apply(ul, null, [$, ...k]), () => sa(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => se($));
  }
  function Me(...k) {
    const [$, ce, Se] = k;
    if (Se && !Ie(Se))
      throw nt(et.INVALID_ARGUMENT);
    return Ee($, ce, at({ resolvedMessage: !0 }, Se || {}));
  }
  function Xe(...k) {
    return he(($) => Reflect.apply(fl, null, [$, ...k]), () => oa(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => sl, ($) => se($));
  }
  function We(...k) {
    return he(($) => Reflect.apply(ml, null, [$, ...k]), () => aa(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => sl, ($) => se($));
  }
  function pe(k) {
    return k.map(($) => se($) || Ye($) || Oe($) ? pl(String($)) : $);
  }
  const re = {
    normalize: pe,
    interpolate: (k) => k,
    type: "vnode"
  };
  function ae(...k) {
    return he(
      ($) => {
        let ce;
        const Se = $;
        try {
          Se.processor = re, ce = Reflect.apply(ul, null, [Se, ...k]);
        } finally {
          Se.processor = null;
        }
        return ce;
      },
      () => sa(...k),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ia](...k),
      ($) => [pl($)],
      ($) => Ve($)
    );
  }
  function Ce(...k) {
    return he(
      ($) => Reflect.apply(ml, null, [$, ...k]),
      () => aa(...k),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ca](...k),
      _l,
      ($) => se($) || Ve($)
    );
  }
  function ze(...k) {
    return he(
      ($) => Reflect.apply(fl, null, [$, ...k]),
      () => oa(...k),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[la](...k),
      _l,
      ($) => se($) || Ve($)
    );
  }
  function p(k) {
    N = k, O.pluralRules = N;
  }
  function g(k, $) {
    return he(() => {
      if (!k)
        return !1;
      const ce = se($) ? $ : c.value, Se = L(ce), $e = O.messageResolver(Se, k);
      return i ? $e != null : Vt($e) || Ct($e) || se($e);
    }, () => [k], "translate exists", (ce) => Reflect.apply(ce.te, ce, [k, $]), wg, (ce) => Oe(ce));
  }
  function _(k) {
    let $ = null;
    const ce = ju(O, u.value, c.value);
    for (let Se = 0; Se < ce.length; Se++) {
      const $e = f.value[ce[Se]] || {}, rt = O.messageResolver($e, k);
      if (rt != null) {
        $ = rt;
        break;
      }
    }
    return $;
  }
  function x(k) {
    const $ = _(k);
    return $ ?? (n ? n.tm(k) || {} : {});
  }
  function L(k) {
    return f.value[k] || {};
  }
  function M(k, $) {
    if (s) {
      const ce = { [k]: $ };
      for (const Se in ce)
        Lt(ce, Se) && Gr(ce[Se]);
      $ = ce[k];
    }
    f.value[k] = $, O.messages = f.value;
  }
  function Y(k, $) {
    f.value[k] = f.value[k] || {};
    const ce = { [k]: $ };
    if (s)
      for (const Se in ce)
        Lt(ce, Se) && Gr(ce[Se]);
    $ = ce[k], Ts($, f.value[k]), O.messages = f.value;
  }
  function G(k) {
    return h.value[k] || {};
  }
  function d(k, $) {
    h.value[k] = $, O.datetimeFormats = h.value, dl(O, k, $);
  }
  function m(k, $) {
    h.value[k] = at(h.value[k] || {}, $), O.datetimeFormats = h.value, dl(O, k, $);
  }
  function R(k) {
    return b.value[k] || {};
  }
  function F(k, $) {
    b.value[k] = $, O.numberFormats = b.value, hl(O, k, $);
  }
  function Z(k, $) {
    b.value[k] = at(b.value[k] || {}, $), O.numberFormats = b.value, hl(O, k, $);
  }
  bl++, n && Us && (Tt(n.locale, (k) => {
    l && (c.value = k, O.locale = k, yr(O, c.value, u.value));
  }), Tt(n.fallbackLocale, (k) => {
    l && (u.value = k, O.fallbackLocale = k, yr(O, c.value, u.value));
  }));
  const q = {
    id: bl,
    locale: U,
    fallbackLocale: te,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(k) {
      l = k, k && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, yr(O, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: oe,
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
      return w;
    },
    set missingWarn(k) {
      w = k, O.missingWarn = w;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(k) {
      S = k, O.fallbackWarn = S;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(k) {
      A = k;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(k) {
      E = k, O.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(k) {
      I = k, O.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(k) {
      C = k, O.escapeParameter = k;
    },
    t: Ee,
    getLocaleMessage: L,
    setLocaleMessage: M,
    mergeLocaleMessage: Y,
    getPostTranslationHandler: X,
    setPostTranslationHandler: ie,
    getMissingHandler: Ae,
    setMissingHandler: xe,
    [Zu]: p
  };
  return q.datetimeFormats = fe, q.numberFormats = V, q.rt = Me, q.te = g, q.tm = x, q.d = Xe, q.n = We, q.getDateTimeFormat = G, q.setDateTimeFormat = d, q.mergeDateTimeFormat = m, q.getNumberFormat = R, q.setNumberFormat = F, q.mergeNumberFormat = Z, q[ef] = r, q[ia] = ae, q[la] = ze, q[ca] = Ce, q;
}
function Tg(e) {
  const t = se(e.locale) ? e.locale : ir, n = se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Fe(e.missing) ? e.missing : void 0, o = Oe(e.silentTranslationWarn) || yn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Oe(e.silentFallbackWarn) || yn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = Oe(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = be(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Fe(e.postTranslation) ? e.postTranslation : void 0, f = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, b = Oe(e.sync) ? e.sync : !0;
  let w = e.messages;
  if (be(e.sharedMessages)) {
    const C = e.sharedMessages;
    w = Object.keys(C).reduce((N, O) => {
      const B = N[O] || (N[O] = {});
      return at(B, C[O]), N;
    }, w || {});
  }
  const { __i18n: S, __root: A, __injectWithOption: E } = e, P = e.datetimeFormats, y = e.numberFormats, v = e.flatJson, I = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: v,
    datetimeFormats: P,
    numberFormats: y,
    missing: r,
    missingWarn: o,
    fallbackWarn: s,
    fallbackRoot: a,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: f,
    escapeParameter: h,
    messageResolver: e.messageResolver,
    inheritLocale: b,
    translateExistCompatible: I,
    __i18n: S,
    __root: A,
    __injectWithOption: E
  };
}
function fa(e = {}, t) {
  {
    const n = Ba(Tg(e)), { __extender: r } = e, o = {
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
        return Oe(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = Oe(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return Oe(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = Oe(s) ? !s : s;
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
        const [a, i, l] = s, c = {};
        let u = null, f = null;
        if (!se(a))
          throw nt(et.INVALID_ARGUMENT);
        const h = a;
        return se(i) ? c.locale = i : Ve(i) ? u = i : be(i) && (f = i), Ve(l) ? u = l : be(l) && (f = l), Reflect.apply(n.t, n, [
          h,
          u || f || {},
          c
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [a, i, l] = s, c = { plural: 1 };
        let u = null, f = null;
        if (!se(a))
          throw nt(et.INVALID_ARGUMENT);
        const h = a;
        return se(i) ? c.locale = i : Ye(i) ? c.plural = i : Ve(i) ? u = i : be(i) && (f = i), se(l) ? c.locale = l : Ve(l) ? u = l : be(l) && (f = l), Reflect.apply(n.t, n, [
          h,
          u || f || {},
          c
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
const Wa = {
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
function Ag({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === He ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Pe());
}
function rf(e) {
  return He;
}
const Og = /* @__PURE__ */ rn({
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
  }, Wa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Zr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), a = Pe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = se(e.plural) ? +e.plural : e.plural);
      const i = Ag(t, s), l = o[ia](e.keypath, i, a), c = at(Pe(), r), u = se(e.tag) || Ie(e.tag) ? e.tag : rf();
      return Wr(u, c, l);
    };
  }
}), vl = Og;
function Cg(e) {
  return Ve(e) && !se(e[0]);
}
function sf(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = Pe();
    e.locale && (a.locale = e.locale), se(e.format) ? a.key = e.format : Ie(e.format) && (se(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((h, b) => n.includes(b) ? at(Pe(), h, { [b]: e.format[b] }) : h, Pe()));
    const l = r(e.value, a, i);
    let c = [a.key];
    Ve(l) ? c = l.map((h, b) => {
      const w = o[h.type], S = w ? w({ [h.type]: h.value, index: b, parts: l }) : [h.value];
      return Cg(S) && (S[0].key = `${h.type}-${b}`), S;
    }) : se(l) && (c = [l]);
    const u = at(Pe(), s), f = se(e.tag) || Ie(e.tag) ? e.tag : rf();
    return Wr(f, u, c);
  };
}
const Rg = /* @__PURE__ */ rn({
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
  }, Wa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Zr({
      useScope: e.scope,
      __useComponent: !0
    });
    return sf(e, t, Ju, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ca](...r)
    ));
  }
}), El = Rg, Lg = /* @__PURE__ */ rn({
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
  }, Wa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Zr({
      useScope: e.scope,
      __useComponent: !0
    });
    return sf(e, t, Xu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[la](...r)
    ));
  }
}), wl = Lg;
function Ig(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function kg(e) {
  const t = (a) => {
    const { instance: i, modifiers: l, value: c } = a;
    if (!i || !i.$)
      throw nt(et.UNEXPECTED_ERROR);
    const u = Ig(e, i.$), f = Sl(c);
    return [
      Reflect.apply(u.t, u, [...Tl(f)]),
      u
    ];
  };
  return {
    created: (a, i) => {
      const [l, c] = t(i);
      Us && e.global === c && (a.__i18nWatcher = Tt(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), a.__composer = c, a.textContent = l;
    },
    unmounted: (a) => {
      Us && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: i }) => {
      if (a.__composer) {
        const l = a.__composer, c = Sl(i);
        a.textContent = Reflect.apply(l.t, l, [
          ...Tl(c)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [i] = t(a);
      return { textContent: i };
    }
  };
}
function Sl(e) {
  if (se(e))
    return { path: e };
  if (be(e)) {
    if (!("path" in e))
      throw nt(et.REQUIRED_VALUE, "path");
    return e;
  } else
    throw nt(et.INVALID_VALUE);
}
function Tl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, a = {}, i = r || {};
  return se(n) && (a.locale = n), Ye(o) && (a.plural = o), Ye(s) && (a.plural = s), [t, i, a];
}
function xg(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (Oe(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : vl.name, "I18nT"].forEach((a) => e.component(a, vl)), [El.name, "I18nN"].forEach((a) => e.component(a, El)), [wl.name, "I18nD"].forEach((a) => e.component(a, wl))), e.directive("t", kg(t));
}
function Pg(e, t, n) {
  return {
    beforeCreate() {
      const r = tn();
      if (!r)
        throw nt(et.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Al(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = fa(s);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = Al(e, o);
        else {
          this.$i18n = fa({
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
      o.__i18nGlobal && nf(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, a) => this.$i18n.te(s, a), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = tn();
      if (!r)
        throw nt(et.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Al(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Zu](t.pluralizationRules || e.pluralizationRules);
  const n = lo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Ng = /* @__PURE__ */ En("global-vue-i18n");
function Mg(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Oe(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Oe(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [a, i] = Dg(e, n), l = /* @__PURE__ */ En("");
  function c(h) {
    return s.get(h) || null;
  }
  function u(h, b) {
    s.set(h, b);
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
      async install(b, ...w) {
        if (b.__VUE_I18N_SYMBOL__ = l, b.provide(b.__VUE_I18N_SYMBOL__, h), be(w[0])) {
          const E = w[0];
          h.__composerExtend = E.__composerExtend, h.__vueI18nExtend = E.__vueI18nExtend;
        }
        let S = null;
        !n && r && (S = zg(b, h.global)), __VUE_I18N_FULL_INSTALL__ && xg(b, h, ...w), __VUE_I18N_LEGACY_API__ && n && b.mixin(Pg(i, i.__composer, h));
        const A = b.unmount;
        b.unmount = () => {
          S && S(), h.dispose(), A();
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
      __getInstance: c,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: f
    };
    return h;
  }
}
function Zr(e = {}) {
  const t = tn();
  if (t == null)
    throw nt(et.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw nt(et.NOT_INSTALLED);
  const n = Fg(t), r = $g(n), o = tf(t), s = Ug(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw nt(et.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Bg(t, s, r, e);
  }
  if (s === "global")
    return nf(r, e, o), r;
  if (s === "parent") {
    let l = Hg(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = at({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Ba(l), a.__composerExtend && (i[ua] = a.__composerExtend(i)), jg(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Dg(e, t, n) {
  const r = Ea();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => fa(e)) : r.run(() => Ba(e));
    if (o == null)
      throw nt(et.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Fg(e) {
  {
    const t = er(e.isCE ? Ng : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw nt(e.isCE ? et.NOT_INSTALLED_WITH_PROVIDE : et.UNEXPECTED_ERROR);
    return t;
  }
}
function Ug(e, t) {
  return oo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function $g(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Hg(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = Vg(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[ef] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Vg(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function jg(e, t, n) {
  fr(() => {
  }, t), Xr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ua];
    o && (o(), delete r[ua]);
  }, t);
}
function Bg(e, t, n, r = {}) {
  const o = t === "local", s = Oc(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw nt(et.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = Oe(r.inheritLocale) ? r.inheritLocale : !se(r.locale), i = J(
    // prettier-ignore
    !o || a ? n.locale.value : se(r.locale) ? r.locale : ir
  ), l = J(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : se(r.fallbackLocale) || Ve(r.fallbackLocale) || be(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = J(lo(i.value, r)), u = J(be(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = J(be(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), h = o ? n.missingWarn : Oe(r.missingWarn) || yn(r.missingWarn) ? r.missingWarn : !0, b = o ? n.fallbackWarn : Oe(r.fallbackWarn) || yn(r.fallbackWarn) ? r.fallbackWarn : !0, w = o ? n.fallbackRoot : Oe(r.fallbackRoot) ? r.fallbackRoot : !0, S = !!r.fallbackFormat, A = Fe(r.missing) ? r.missing : null, E = Fe(r.postTranslation) ? r.postTranslation : null, P = o ? n.warnHtmlMessage : Oe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, y = !!r.escapeParameter, v = o ? n.modifiers : be(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || o && n.pluralRules;
  function C() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const D = _e({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), i.value = _;
    }
  }), N = _e({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), O = _e(() => s.value ? s.value.messages.value : c.value), B = _e(() => u.value), ee = _e(() => f.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : E;
  }
  function te(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function oe() {
    return s.value ? s.value.getMissingHandler() : A;
  }
  function fe(_) {
    s.value && s.value.setMissingHandler(_);
  }
  function V(_) {
    return C(), _();
  }
  function X(..._) {
    return s.value ? V(() => Reflect.apply(s.value.t, null, [..._])) : V(() => "");
  }
  function ie(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function Ae(..._) {
    return s.value ? V(() => Reflect.apply(s.value.d, null, [..._])) : V(() => "");
  }
  function xe(..._) {
    return s.value ? V(() => Reflect.apply(s.value.n, null, [..._])) : V(() => "");
  }
  function he(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function Ee(_, x) {
    return s.value ? s.value.te(_, x) : !1;
  }
  function Me(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function Xe(_, x) {
    s.value && (s.value.setLocaleMessage(_, x), c.value[_] = x);
  }
  function We(_, x) {
    s.value && s.value.mergeLocaleMessage(_, x);
  }
  function pe(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function K(_, x) {
    s.value && (s.value.setDateTimeFormat(_, x), u.value[_] = x);
  }
  function re(_, x) {
    s.value && s.value.mergeDateTimeFormat(_, x);
  }
  function ae(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function Ce(_, x) {
    s.value && (s.value.setNumberFormat(_, x), f.value[_] = x);
  }
  function ze(_, x) {
    s.value && s.value.mergeNumberFormat(_, x);
  }
  const p = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: D,
    fallbackLocale: N,
    messages: O,
    datetimeFormats: B,
    numberFormats: ee,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : a;
    },
    set inheritLocale(_) {
      s.value && (s.value.inheritLocale = _);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : v;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : I;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : h;
    },
    set missingWarn(_) {
      s.value && (s.value.missingWarn = _);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : b;
    },
    set fallbackWarn(_) {
      s.value && (s.value.missingWarn = _);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : w;
    },
    set fallbackRoot(_) {
      s.value && (s.value.fallbackRoot = _);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : S;
    },
    set fallbackFormat(_) {
      s.value && (s.value.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : P;
    },
    set warnHtmlMessage(_) {
      s.value && (s.value.warnHtmlMessage = _);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : y;
    },
    set escapeParameter(_) {
      s.value && (s.value.escapeParameter = _);
    },
    t: X,
    getPostTranslationHandler: U,
    setPostTranslationHandler: te,
    getMissingHandler: oe,
    setMissingHandler: fe,
    rt: ie,
    d: Ae,
    n: xe,
    tm: he,
    te: Ee,
    getLocaleMessage: Me,
    setLocaleMessage: Xe,
    mergeLocaleMessage: We,
    getDateTimeFormat: pe,
    setDateTimeFormat: K,
    mergeDateTimeFormat: re,
    getNumberFormat: ae,
    setNumberFormat: Ce,
    mergeNumberFormat: ze
  };
  function g(_) {
    _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(c.value).forEach((x) => {
      _.mergeLocaleMessage(x, c.value[x]);
    }), Object.keys(u.value).forEach((x) => {
      _.mergeDateTimeFormat(x, u.value[x]);
    }), Object.keys(f.value).forEach((x) => {
      _.mergeNumberFormat(x, f.value[x]);
    }), _.escapeParameter = y, _.fallbackFormat = S, _.fallbackRoot = w, _.fallbackWarn = b, _.missingWarn = h, _.warnHtmlMessage = P;
  }
  return Gc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw nt(et.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, c.value = _.messages.value, u.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : o && g(_);
  }), p;
}
const Wg = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Ol = ["t", "rt", "d", "n", "tm", "te"];
function zg(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Wg.forEach((o) => {
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
  }), e.config.globalProperties.$i18n = n, Ol.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw nt(et.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Ol.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
vg();
ng(hg);
rg(Dp);
sg(ju);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = xn();
  e.__INTLIFY__ = !0, zp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Kg = "sub2api_locale", za = "en", Gg = {
  en: () => import("./index-Cd_2Lby2.js"),
  zh: () => import("./index-DIg8WdAu.js")
};
function of(e) {
  return e === "en" || e === "zh";
}
function qg() {
  const e = localStorage.getItem(Kg);
  return e && of(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : za;
}
const nr = Mg({
  legacy: !1,
  locale: qg(),
  fallbackLocale: za,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Cl = /* @__PURE__ */ new Set();
async function af(e) {
  if (Cl.has(e))
    return;
  const t = Gg[e], n = await t();
  nr.global.setLocaleMessage(e, n.default), Cl.add(e);
}
async function Yg() {
  const e = lf();
  await af(e), document.documentElement.setAttribute("lang", e);
}
function lf() {
  const e = nr.global.locale.value;
  return of(e) ? e : za;
}
function cf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xg } = Object.prototype, { getPrototypeOf: lr } = Object, { iterator: es, toStringTag: uf } = Symbol, Hs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Hs(n, t))
      return !0;
    n = lr(n);
  }
  return !1;
}, Jg = (e, t) => e != null && qr(e, t) ? e[t] : void 0, Ka = /* @__PURE__ */ ((e) => (t) => {
  const n = Xg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => Ka(t) === e), co = (e) => (t) => typeof t === e, { isArray: Un } = Array, cr = co("undefined");
function mr(e) {
  return e !== null && !cr(e) && e.constructor !== null && !cr(e.constructor) && vt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ff = Pt("ArrayBuffer");
function Qg(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ff(e.buffer), t;
}
const Zg = co("string"), vt = co("function"), df = co("number"), hr = (e) => e !== null && typeof e == "object", e0 = (e) => e === !0 || e === !1, As = (e) => {
  if (!hr(e))
    return !1;
  const t = lr(e);
  return (t === null || t === Object.prototype || lr(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !qr(e, uf) && !qr(e, es);
}, t0 = (e) => {
  if (!hr(e) || mr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, n0 = Pt("Date"), r0 = Pt("File"), s0 = (e) => !!(e && typeof e.uri < "u"), o0 = (e) => e && typeof e.getParts < "u", a0 = Pt("Blob"), i0 = Pt("FileList"), l0 = (e) => hr(e) && vt(e.pipe);
function c0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Rl = c0(), Ll = typeof Rl.FormData < "u" ? Rl.FormData : void 0, u0 = (e) => {
  if (!e) return !1;
  if (Ll && e instanceof Ll) return !0;
  const t = lr(e);
  if (!t || t === Object.prototype || !vt(e.append)) return !1;
  const n = Ka(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && vt(e.toString) && e.toString() === "[object FormData]";
}, f0 = Pt("URLSearchParams"), [d0, m0, h0, p0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Pt), g0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ts(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Un(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (mr(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let i;
    for (r = 0; r < a; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function mf(e, t) {
  if (mr(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hf = (e) => !cr(e) && e !== Pn;
function da(...e) {
  const { caseless: t, skipUndefined: n } = hf(this) && this || {}, r = {}, o = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && typeof a == "string" && mf(r, a) || a, l = Hs(r, i) ? r[i] : void 0;
    As(l) && As(s) ? r[i] = da(l, s) : As(s) ? r[i] = da({}, s) : Un(s) ? r[i] = s.slice() : (!n || !cr(s)) && (r[i] = s);
  };
  for (let s = 0, a = e.length; s < a; s++) {
    const i = e[s];
    if (!i || mr(i) || (ts(i, o), typeof i != "object" || Un(i)))
      continue;
    const l = Object.getOwnPropertySymbols(i);
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      R0.call(i, u) && o(i[u], u);
    }
  }
  return r;
}
const _0 = (e, t, n, { allOwnKeys: r } = {}) => (ts(
  t,
  (o, s) => {
    n && vt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: cf(o, n),
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
), e), b0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), y0 = (e, t, n, r) => {
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
}, v0 = (e, t, n, r) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && lr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, E0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, w0 = (e) => {
  if (!e) return null;
  if (Un(e)) return e;
  let t = e.length;
  if (!df(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, S0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && lr(Uint8Array)), T0 = (e, t) => {
  const r = (e && e[es]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, A0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, O0 = Pt("HTMLFormElement"), C0 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: R0 } = Object.prototype, L0 = Pt("RegExp"), pf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ts(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, I0 = (e) => {
  pf(e, (t, n) => {
    if (vt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (vt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, k0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Un(e) ? r(e) : r(String(e).split(t)), n;
}, x0 = () => {
}, P0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function N0(e) {
  return !!(e && vt(e.append) && e[uf] === "FormData" && e[es]);
}
const M0 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (hr(r)) {
      if (t.has(r))
        return;
      if (mr(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Un(r) ? [] : {};
        return ts(r, (s, a) => {
          const i = n(s);
          !cr(i) && (o[a] = i);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, D0 = Pt("AsyncFunction"), F0 = (e) => e && (hr(e) || vt(e)) && vt(e.then) && vt(e.catch), gf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Pn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === Pn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Pn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", vt(Pn.postMessage)), U0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Pn) : typeof process < "u" && process.nextTick || gf, _f = (e) => e != null && vt(e[es]), $0 = (e) => e != null && qr(e, es) && _f(e), T = {
  isArray: Un,
  isArrayBuffer: ff,
  isBuffer: mr,
  isFormData: u0,
  isArrayBufferView: Qg,
  isString: Zg,
  isNumber: df,
  isBoolean: e0,
  isObject: hr,
  isPlainObject: As,
  isEmptyObject: t0,
  isReadableStream: d0,
  isRequest: m0,
  isResponse: h0,
  isHeaders: p0,
  isUndefined: cr,
  isDate: n0,
  isFile: r0,
  isReactNativeBlob: s0,
  isReactNative: o0,
  isBlob: a0,
  isRegExp: L0,
  isFunction: vt,
  isStream: l0,
  isURLSearchParams: f0,
  isTypedArray: S0,
  isFileList: i0,
  forEach: ts,
  merge: da,
  extend: _0,
  trim: g0,
  stripBOM: b0,
  inherits: y0,
  toFlatObject: v0,
  kindOf: Ka,
  kindOfTest: Pt,
  endsWith: E0,
  toArray: w0,
  forEachEntry: T0,
  matchAll: A0,
  isHTMLForm: O0,
  hasOwnProperty: Hs,
  hasOwnProp: Hs,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: qr,
  getSafeProp: Jg,
  reduceDescriptors: pf,
  freezeMethods: I0,
  toObjectSet: k0,
  toCamelCase: C0,
  noop: x0,
  toFiniteNumber: P0,
  findKey: mf,
  global: Pn,
  isContextDefined: hf,
  isSpecCompliantForm: N0,
  toJSONObject: M0,
  isAsyncFn: D0,
  isThenable: F0,
  setImmediate: gf,
  asap: U0,
  isIterable: _f,
  isSafeIterable: $0
}, H0 = T.toObjectSet([
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
]), V0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && H0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function j0(e) {
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
const B0 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), W0 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ga(e, t) {
  return T.isArray(e) ? e.map((n) => Ga(n, t)) : j0(String(e).replace(t, ""));
}
const z0 = (e) => Ga(e, B0), K0 = (e) => Ga(e, W0);
function bf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return T.forEach(e.toJSON(), (n, r) => {
    t[r] = K0(n);
  }), t;
}
const Il = Symbol("internals");
function vr(e) {
  return e && String(e).trim().toLowerCase();
}
function Os(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Os) : z0(String(e));
}
function G0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const q0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Do(e, t, n, r, o) {
  if (T.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t);
  }
}
function Y0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function X0(e, t) {
  const n = T.toCamelCase(" " + t);
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
let dt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(i, l, c) {
      const u = vr(l);
      if (!u)
        return;
      const f = T.findKey(o, u);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || l] = Os(i));
    }
    const a = (i, l) => T.forEach(i, (c, u) => s(c, u, l));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (T.isString(t) && (t = t.trim()) && !q0(t))
      a(V0(t), n);
    else if (T.isObject(t) && T.isSafeIterable(t)) {
      let i = /* @__PURE__ */ Object.create(null), l, c;
      for (const u of t) {
        if (!T.isArray(u))
          throw new TypeError("Object iterator must return a key-value pair");
        c = u[0], T.hasOwnProp(i, c) ? (l = i[c], i[c] = T.isArray(l) ? [...l, u[1]] : [l, u[1]]) : i[c] = u[1];
      }
      a(i, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = vr(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return G0(o);
        if (T.isFunction(n))
          return n.call(this, o, r);
        if (T.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = vr(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Do(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = vr(a), a) {
        const i = T.findKey(r, a);
        i && (!n || Do(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return T.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Do(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return T.forEach(this, (o, s) => {
      const a = T.findKey(r, s);
      if (a) {
        n[a] = Os(o), delete n[s];
        return;
      }
      const i = t ? Y0(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Os(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && T.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Il] = this[Il] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = vr(a);
      r[i] || (X0(o, a), r[i] = !0);
    }
    return T.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
dt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
T.reduceDescriptors(dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
T.freezeMethods(dt);
const J0 = "[REDACTED ****]";
function Q0(e) {
  if (T.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (T.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Z0(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || T.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof dt && (s = s.toJSON()), r.push(s);
    let a;
    if (T.isArray(s))
      a = [], s.forEach((i, l) => {
        const c = o(i);
        T.isUndefined(c) || (a[l] = c);
      });
    else {
      if (!T.isPlainObject(s) && Q0(s))
        return r.pop(), s;
      a = /* @__PURE__ */ Object.create(null);
      for (const [i, l] of Object.entries(s)) {
        const c = n.has(i.toLowerCase()) ? J0 : o(l);
        T.isUndefined(c) || (a[i] = c);
      }
    }
    return r.pop(), a;
  };
  return o(e);
}
let ne = class yf extends Error {
  static from(t, n, r, o, s, a) {
    const i = new yf(t.message, n || t.code, r, o, s);
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
    const t = this.config, n = t && T.hasOwnProp(t, "redact") ? t.redact : void 0, r = T.isArray(n) && n.length > 0 ? Z0(t, n) : T.toJSONObject(t);
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
const e_ = null, vf = 100;
function ma(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Ef(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Ef(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function t_(e) {
  return T.isArray(e) && !e.some(ma);
}
const n_ = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function uo(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(P, y) {
      return !T.isUndefined(y[P]);
    }
  );
  const r = n.metaTokens, o = n.visitor || w, s = n.dots, a = n.indexes, i = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? vf : n.maxDepth, c = i && T.isSpecCompliantForm(t), u = [];
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(E) {
    if (E === null) return "";
    if (T.isDate(E))
      return E.toISOString();
    if (T.isBoolean(E))
      return E.toString();
    if (!c && T.isBlob(E))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    if (T.isArrayBuffer(E) || T.isTypedArray(E)) {
      if (c && typeof i == "function")
        return new i([E]);
      if (typeof Buffer < "u")
        return Buffer.from(E);
      throw new ne("Blob is not supported. Use a Buffer instead.", ne.ERR_NOT_SUPPORT);
    }
    return E;
  }
  function h(E) {
    if (E > l)
      throw new ne(
        "Object is too deeply nested (" + E + " levels). Max depth: " + l,
        ne.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function b(E, P) {
    if (l === 1 / 0)
      return JSON.stringify(E);
    const y = [];
    return JSON.stringify(E, function(I, C) {
      if (!T.isObject(C))
        return C;
      for (; y.length && y[y.length - 1] !== this; )
        y.pop();
      return y.push(C), h(P + y.length - 1), C;
    });
  }
  function w(E, P, y) {
    let v = E;
    if (T.isReactNative(t) && T.isReactNativeBlob(E))
      return t.append(Fo(y, P, s), f(E)), !1;
    if (E && !y && typeof E == "object") {
      if (T.endsWith(P, "{}"))
        P = r ? P : P.slice(0, -2), E = b(E, 1);
      else if (T.isArray(E) && t_(E) || (T.isFileList(E) || T.endsWith(P, "[]")) && (v = T.toArray(E)))
        return P = Ef(P), v.forEach(function(C, D) {
          !(T.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Fo([P], D, s) : a === null ? P : P + "[]",
            f(C)
          );
        }), !1;
    }
    return ma(E) ? !0 : (t.append(Fo(y, P, s), f(E)), !1);
  }
  const S = Object.assign(n_, {
    defaultVisitor: w,
    convertValue: f,
    isVisitable: ma
  });
  function A(E, P, y = 0) {
    if (!T.isUndefined(E)) {
      if (h(y), u.indexOf(E) !== -1)
        throw new Error("Circular reference detected in " + P.join("."));
      u.push(E), T.forEach(E, function(I, C) {
        (!(T.isUndefined(I) || I === null) && o.call(t, I, T.isString(C) ? C.trim() : C, P, S)) === !0 && A(I, P ? P.concat(C) : [C], y + 1);
      }), u.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function kl(e) {
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
function qa(e, t) {
  this._pairs = [], e && uo(e, this, t);
}
const wf = qa.prototype;
wf.append = function(t, n) {
  this._pairs.push([t, n]);
};
wf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, kl) : kl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function r_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Sf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = T.isFunction(n) ? {
    serialize: n
  } : n, o = T.getSafeProp(r, "encode") || r_, s = T.getSafeProp(r, "serialize");
  let a;
  if (s ? a = s(t, r) : a = T.isURLSearchParams(t) ? t.toString() : new qa(t, r).toString(o), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class xl {
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
    T.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ya = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, s_ = typeof URLSearchParams < "u" ? URLSearchParams : qa, o_ = typeof FormData < "u" ? FormData : null, a_ = typeof Blob < "u" ? Blob : null, i_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: s_,
    FormData: o_,
    Blob: a_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xa = typeof window < "u" && typeof document < "u", ha = typeof navigator == "object" && navigator || void 0, l_ = Xa && (!ha || ["ReactNative", "NativeScript", "NS"].indexOf(ha.product) < 0), c_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", u_ = Xa && window.location.href || "http://localhost", f_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xa,
  hasStandardBrowserEnv: l_,
  hasStandardBrowserWebWorkerEnv: c_,
  navigator: ha,
  origin: u_
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...f_,
  ...i_
};
function d_(e, t) {
  return uo(e, new ot.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return ot.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Pl = vf;
function Tf(e) {
  if (e > Pl)
    throw new ne(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Pl,
      ne.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function m_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Tf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function h_(e) {
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
    Tf(s);
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = s >= n.length;
    return a = !a && T.isArray(o) ? o.length : a, l ? (T.hasOwnProp(o, a) ? o[a] = T.isArray(o[a]) ? o[a].concat(r) : [o[a], r] : o[a] = r, !i) : ((!T.hasOwnProp(o, a) || !T.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && T.isArray(o[a]) && (o[a] = h_(o[a])), !i);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, o) => {
      t(m_(r), o, n, 0);
    }), n;
  }
  return null;
}
const Bn = (e, t) => e != null && T.hasOwnProp(e, t) ? e[t] : void 0;
function p_(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ns = {
  transitional: Ya,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = T.isObject(t);
      if (s && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
        return o ? JSON.stringify(Af(t)) : t;
      if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
        return t;
      if (T.isArrayBufferView(t))
        return t.buffer;
      if (T.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (s) {
        const l = Bn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return d_(t, l).toString();
        if ((i = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = Bn(this, "env"), u = c && c.FormData;
          return uo(
            i ? { "files[]": t } : t,
            u && new u(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), p_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Bn(this, "transitional") || ns.transitional, r = n && n.forcedJSONParsing, o = Bn(this, "responseType"), s = o === "json";
      if (T.isResponse(t) || T.isReadableStream(t))
        return t;
      if (t && T.isString(t) && (r && !o || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Bn(this, "parseReviver"));
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? ne.from(l, ne.ERR_BAD_RESPONSE, this, null, Bn(this, "response")) : l;
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
T.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  ns.headers[e] = {};
});
function Uo(e, t) {
  const n = this || ns, r = t || n, o = dt.from(r.headers);
  let s = r.data;
  return T.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Of(e) {
  return !!(e && e.__CANCEL__);
}
let rs = class extends ne {
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
function Cf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? ne.ERR_BAD_REQUEST : ne.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function g_(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function __(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[s];
    a || (a = c), n[o] = l, r[o] = c;
    let f = s, h = 0;
    for (; f !== o; )
      h += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - a < t)
      return;
    const b = u && c - u;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function b_(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const a = (c, u = Date.now()) => {
    n = u, o = null, s && (clearTimeout(s), s = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= r ? a(c, u) : (o = c, s || (s = setTimeout(() => {
      s = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const Vs = (e, t, n = 3) => {
  let r = 0;
  const o = __(50, 250);
  return b_((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, l = i != null ? Math.min(a, i) : a, c = Math.max(0, l - r), u = o(c);
    r = Math.max(r, l);
    const f = {
      loaded: l,
      total: i,
      progress: i ? l / i : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && i ? (i - l) / u : void 0,
      event: s,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Nl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Ml = (e) => (...t) => T.asap(() => e(...t)), y_ = ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ot.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ot.origin),
  ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)
) : () => !0, v_ = ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      T.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), T.isString(r) && i.push(`path=${r}`), T.isString(o) && i.push(`domain=${o}`), s === !0 && i.push("secure"), T.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function E_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function w_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const S_ = /^https?:(?!\/\/)/i, T_ = /[\t\n\r]/g;
function A_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function O_(e) {
  return A_(e).replace(T_, "");
}
function Dl(e, t) {
  if (typeof e == "string" && S_.test(O_(e)))
    throw new ne(
      'Invalid URL: missing "//" after protocol',
      ne.ERR_INVALID_URL,
      t
    );
}
function Rf(e, t, n, r) {
  Dl(t, r);
  let o = !E_(t);
  return e && (o || n === !1) ? (Dl(e, r), w_(e, t)) : t;
}
const Fl = (e) => e instanceof dt ? { ...e } : e;
function $n(e, t) {
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
  function r(u, f, h, b) {
    return T.isPlainObject(u) && T.isPlainObject(f) ? T.merge.call({ caseless: b }, u, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(u, f, h, b) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u, h, b);
    } else return r(u, f, h, b);
  }
  function s(u, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function a(u, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function i(u) {
    const f = T.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!T.isUndefined(f))
      if (T.isPlainObject(f)) {
        if (T.hasOwnProp(f, u))
          return f[u];
      } else
        return;
    const h = T.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (T.isPlainObject(h) && T.hasOwnProp(h, u))
      return h[u];
  }
  function l(u, f, h) {
    if (T.hasOwnProp(t, h))
      return r(u, f);
    if (T.hasOwnProp(e, h))
      return r(void 0, u);
  }
  const c = {
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
    headers: (u, f, h) => o(Fl(u), Fl(f), h, !0)
  };
  return T.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const h = T.hasOwnProp(c, f) ? c[f] : o, b = T.hasOwnProp(e, f) ? e[f] : void 0, w = T.hasOwnProp(t, f) ? t[f] : void 0, S = h(b, w, f);
    T.isUndefined(S) && h !== l || (n[f] = S);
  }), T.hasOwnProp(t, "validateStatus") && T.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (T.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const C_ = ["content-type", "content-length"];
function R_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    C_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const L_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Lf(e) {
  const t = $n({}, e), n = (h) => T.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let i = n("headers");
  const l = n("auth"), c = n("baseURL"), u = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = i = dt.from(i), t.url = Sf(
    Rf(c, f, u, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const h = T.getSafeProp(l, "username") || "", b = T.getSafeProp(l, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (b ? L_(b) : ""))
      );
    } catch (w) {
      throw ne.from(w, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (T.isFormData(r) && (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv || T.isReactNative(r) ? i.setContentType(void 0) : T.isFunction(r.getHeaders) && R_(i, r.getHeaders(), n("formDataHeaderPolicy"))), ot.hasStandardBrowserEnv && (T.isFunction(o) && (o = o(t)), o === !0 || o == null && y_(t.url))) {
    const b = s && a && v_.read(a);
    b && i.set(s, b);
  }
  return t;
}
const I_ = typeof XMLHttpRequest < "u", k_ = I_ && function(e) {
  return new Promise(function(n, r) {
    const o = Lf(e);
    let s = o.data;
    const a = dt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = o, u, f, h, b, w;
    function S() {
      b && b(), w && w(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let A = new XMLHttpRequest();
    A.open(o.method.toUpperCase(), o.url, !0), A.timeout = o.timeout;
    function E() {
      if (!A)
        return;
      const y = dt.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), I = {
        data: !i || i === "text" || i === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: y,
        config: e,
        request: A
      };
      Cf(
        function(D) {
          n(D), S();
        },
        function(D) {
          r(D), S();
        },
        I
      ), A = null;
    }
    "onloadend" in A ? A.onloadend = E : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.startsWith("file:")) || setTimeout(E);
    }, A.onabort = function() {
      A && (r(new ne("Request aborted", ne.ECONNABORTED, e, A)), S(), A = null);
    }, A.onerror = function(v) {
      const I = v && v.message ? v.message : "Network Error", C = new ne(I, ne.ERR_NETWORK, e, A);
      C.event = v || null, r(C), S(), A = null;
    }, A.ontimeout = function() {
      let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || Ya;
      o.timeoutErrorMessage && (v = o.timeoutErrorMessage), r(
        new ne(
          v,
          I.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          e,
          A
        )
      ), S(), A = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in A && T.forEach(bf(a), function(v, I) {
      A.setRequestHeader(I, v);
    }), T.isUndefined(o.withCredentials) || (A.withCredentials = !!o.withCredentials), i && i !== "json" && (A.responseType = o.responseType), c && ([h, w] = Vs(c, !0), A.addEventListener("progress", h)), l && A.upload && ([f, b] = Vs(l), A.upload.addEventListener("progress", f), A.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (u = (y) => {
      A && (r(!y || y.type ? new rs(null, e, A) : y), A.abort(), S(), A = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const P = g_(o.url);
    if (P && !ot.protocols.includes(P)) {
      r(
        new ne(
          "Unsupported protocol " + P + ":",
          ne.ERR_BAD_REQUEST,
          e
        )
      ), S();
      return;
    }
    A.send(s || null);
  });
}, x_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, a();
      const c = l instanceof Error ? l : this.reason;
      n.abort(
        c instanceof ne ? c : new rs(c instanceof Error ? c.message : c)
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
  return i.unsubscribe = () => T.asap(a), i;
}, P_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, N_ = async function* (e, t) {
  for await (const n of M_(e))
    yield* P_(n, t);
}, M_ = async function* (e) {
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
}, Ul = (e, t, n, r) => {
  const o = N_(e, t);
  let s = 0, a, i = (l) => {
    a || (a = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: c, value: u } = await o.next();
          if (c) {
            i(), l.close();
            return;
          }
          let f = u.byteLength;
          if (n) {
            let h = s += f;
            n(h);
          }
          l.enqueue(new Uint8Array(u));
        } catch (c) {
          throw i(c), c;
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
}, js = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, D_ = (e, t, n) => t + 2 < n && js(e.charCodeAt(t + 1)) && js(e.charCodeAt(t + 2));
function F_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const i = r.length;
    for (let b = 0; b < i; b++)
      if (r.charCodeAt(b) === 37 && b + 2 < i) {
        const w = r.charCodeAt(b + 1), S = r.charCodeAt(b + 2);
        js(w) && js(S) && (a -= 2, b += 2);
      }
    let l = 0, c = i - 1;
    const u = (b) => b >= 2 && r.charCodeAt(b - 2) === 37 && // '%'
    r.charCodeAt(b - 1) === 51 && // '3'
    (r.charCodeAt(b) === 68 || r.charCodeAt(b) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (l++, c--) : u(c) && (l++, c -= 3)), l === 1 && c >= 0 && (r.charCodeAt(c) === 61 || u(c)) && l++;
    const h = Math.floor(a / 4) * 3 - (l || 0);
    return h > 0 ? h : 0;
  }
  let s = 0;
  for (let a = 0, i = r.length; a < i; a++) {
    const l = r.charCodeAt(a);
    if (l === 37 && D_(r, a, i))
      s += 1, a += 2;
    else if (l < 128)
      s += 1;
    else if (l < 2048)
      s += 2;
    else if (l >= 55296 && l <= 56319 && a + 1 < i) {
      const c = r.charCodeAt(a + 1);
      c >= 56320 && c <= 57343 ? (s += 4, a++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const Ja = "1.18.1", $l = 64 * 1024, { isFunction: hs } = T, U_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Hl = (e) => {
  if (!T.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Vl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, H_ = (e) => {
  const t = T.global !== void 0 && T.global !== null ? T.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = T.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: o, Request: s, Response: a } = e, i = o ? hs(o) : typeof fetch == "function", l = hs(s), c = hs(a);
  if (!i)
    return !1;
  const u = i && hs(n), f = i && (typeof r == "function" ? /* @__PURE__ */ ((E) => (P) => E.encode(P))(new r()) : async (E) => new Uint8Array(await new s(E).arrayBuffer())), h = l && u && Vl(() => {
    let E = !1;
    const P = new s(ot.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return E = !0, "half";
      }
    }), y = P.headers.has("Content-Type");
    return P.body != null && P.body.cancel(), E && !y;
  }), b = c && u && Vl(() => T.isReadableStream(new a("").body)), w = {
    stream: b && ((E) => E.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((E) => {
    !w[E] && (w[E] = (P, y) => {
      let v = P && P[E];
      if (v)
        return v.call(P);
      throw new ne(
        `Response type '${E}' is not supported`,
        ne.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const S = async (E) => {
    if (E == null)
      return 0;
    if (T.isBlob(E))
      return E.size;
    if (T.isSpecCompliantForm(E))
      return (await new s(ot.origin, {
        method: "POST",
        body: E
      }).arrayBuffer()).byteLength;
    if (T.isArrayBufferView(E) || T.isArrayBuffer(E))
      return E.byteLength;
    if (T.isURLSearchParams(E) && (E = E + ""), T.isString(E))
      return (await f(E)).byteLength;
  }, A = async (E, P) => {
    const y = T.toFiniteNumber(E.getContentLength());
    return y ?? S(P);
  };
  return async (E) => {
    let {
      url: P,
      method: y,
      data: v,
      signal: I,
      cancelToken: C,
      timeout: D,
      onDownloadProgress: N,
      onUploadProgress: O,
      responseType: B,
      headers: ee,
      withCredentials: U = "same-origin",
      fetchOptions: te,
      maxContentLength: oe,
      maxBodyLength: fe
    } = Lf(E);
    const V = T.isNumber(oe) && oe > -1, X = T.isNumber(fe) && fe > -1, ie = (pe) => T.hasOwnProp(E, pe) ? E[pe] : void 0;
    let Ae = o || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let xe = x_(
      [I, C && C.toAbortSignal()],
      D
    ), he = null;
    const Ee = xe && xe.unsubscribe && (() => {
      xe.unsubscribe();
    });
    let Me, Xe = null;
    const We = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      E,
      he
    );
    try {
      let pe;
      const K = ie("auth");
      if (K) {
        const L = T.getSafeProp(K, "username") || "", M = T.getSafeProp(K, "password") || "";
        pe = {
          username: L,
          password: M
        };
      }
      if ($_(P)) {
        const L = new URL(P, ot.origin);
        if (!pe && (L.username || L.password)) {
          const M = Hl(L.username), Y = Hl(L.password);
          pe = {
            username: M,
            password: Y
          };
        }
        (L.username || L.password) && (L.username = "", L.password = "", P = L.href);
      }
      if (pe && (ee.delete("authorization"), ee.set(
        "Authorization",
        "Basic " + btoa(U_((pe.username || "") + ":" + (pe.password || "")))
      )), V && typeof P == "string" && P.startsWith("data:") && F_(P) > oe)
        throw new ne(
          "maxContentLength size of " + oe + " exceeded",
          ne.ERR_BAD_RESPONSE,
          E,
          he
        );
      if (X && y !== "get" && y !== "head") {
        const L = await S(v);
        if (typeof L == "number" && isFinite(L) && (Me = L, L > fe))
          throw We();
      }
      const re = X && (T.isReadableStream(v) || T.isStream(v)), ae = (L, M, Y) => Ul(
        L,
        $l,
        (G) => {
          if (X && G > fe)
            throw Xe = We();
          M && M(G);
        },
        Y
      );
      if (h && y !== "get" && y !== "head" && (O || re)) {
        if (Me = Me ?? await A(ee, v), Me !== 0 || re) {
          let L = new s(P, {
            method: "POST",
            body: v,
            duplex: "half"
          }), M;
          if (T.isFormData(v) && (M = L.headers.get("content-type")) && ee.setContentType(M), L.body) {
            const [Y, G] = O && Nl(
              Me,
              Vs(Ml(O))
            ) || [];
            v = ae(L.body, Y, G);
          }
        }
      } else if (re && !l && u && y !== "get" && y !== "head")
        v = ae(v);
      else if (re && l && !h && y !== "get" && y !== "head")
        throw new ne(
          "Stream request bodies are not supported by the current fetch implementation",
          ne.ERR_NOT_SUPPORT,
          E,
          he
        );
      T.isString(U) || (U = U ? "include" : "omit");
      const Ce = l && "credentials" in s.prototype;
      if (T.isFormData(v)) {
        const L = ee.getContentType();
        L && /^multipart\/form-data/i.test(L) && !/boundary=/i.test(L) && ee.delete("content-type");
      }
      ee.set("User-Agent", "axios/" + Ja, !1);
      const ze = {
        ...te,
        signal: xe,
        method: y.toUpperCase(),
        headers: bf(ee.normalize()),
        body: v,
        duplex: "half",
        credentials: Ce ? U : void 0
      };
      he = l && new s(P, ze);
      let p = await (l ? Ae(he, te) : Ae(P, ze));
      const g = dt.from(p.headers);
      if (V) {
        const L = T.toFiniteNumber(g.getContentLength());
        if (L != null && L > oe)
          throw new ne(
            "maxContentLength size of " + oe + " exceeded",
            ne.ERR_BAD_RESPONSE,
            E,
            he
          );
      }
      const _ = b && (B === "stream" || B === "response");
      if (b && p.body && (N || V || _ && Ee)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((R) => {
          L[R] = p[R];
        });
        const M = T.toFiniteNumber(g.getContentLength()), [Y, G] = N && Nl(
          M,
          Vs(Ml(N), !0)
        ) || [];
        let d = 0;
        const m = (R) => {
          if (V && (d = R, d > oe))
            throw new ne(
              "maxContentLength size of " + oe + " exceeded",
              ne.ERR_BAD_RESPONSE,
              E,
              he
            );
          Y && Y(R);
        };
        p = new a(
          Ul(p.body, $l, m, () => {
            G && G(), Ee && Ee();
          }),
          L
        );
      }
      B = B || "text";
      let x = await w[T.findKey(w, B) || "text"](
        p,
        E
      );
      if (V && !b && !_) {
        let L;
        if (x != null && (typeof x.byteLength == "number" ? L = x.byteLength : typeof x.size == "number" ? L = x.size : typeof x == "string" && (L = typeof r == "function" ? new r().encode(x).byteLength : x.length)), typeof L == "number" && L > oe)
          throw new ne(
            "maxContentLength size of " + oe + " exceeded",
            ne.ERR_BAD_RESPONSE,
            E,
            he
          );
      }
      return !_ && Ee && Ee(), await new Promise((L, M) => {
        Cf(L, M, {
          data: x,
          headers: dt.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: E,
          request: he
        });
      });
    } catch (pe) {
      if (Ee && Ee(), xe && xe.aborted && xe.reason instanceof ne) {
        const K = xe.reason;
        throw K.config = E, he && (K.request = he), pe !== K && Object.defineProperty(K, "cause", {
          __proto__: null,
          value: pe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      if (Xe)
        throw he && !Xe.request && (Xe.request = he), Xe;
      if (pe instanceof ne)
        throw he && !pe.request && (pe.request = he), pe;
      if (pe && pe.name === "TypeError" && /Load failed|fetch/i.test(pe.message)) {
        const K = new ne(
          "Network Error",
          ne.ERR_NETWORK,
          E,
          he,
          pe && pe.response
        );
        throw Object.defineProperty(K, "cause", {
          __proto__: null,
          value: pe.cause || pe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      throw ne.from(pe, pe && pe.code, E, he, pe && pe.response);
    }
  };
}, V_ = /* @__PURE__ */ new Map(), If = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let a = s.length, i = a, l, c, u = V_;
  for (; i--; )
    l = s[i], c = u.get(l), c === void 0 && u.set(l, c = i ? /* @__PURE__ */ new Map() : H_(t)), u = c;
  return c;
};
If();
const Qa = {
  http: e_,
  xhr: k_,
  fetch: {
    get: If
  }
};
T.forEach(Qa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const jl = (e) => `- ${e}`, j_ = (e) => T.isFunction(e) || e === null || e === !1;
function B_(e, t) {
  e = T.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !j_(r) && (o = Qa[(i = String(r)).toLowerCase()], o === void 0))
      throw new ne(`Unknown adapter '${i}'`);
    if (o && (T.isFunction(o) || (o = o.get(t))))
      break;
    s[i || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(jl).join(`
`) : " " + jl(a[0]) : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + i,
      ne.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const kf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: B_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Qa
};
function $o(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rs(null, e);
}
function Bl(e) {
  return $o(e), e.headers = dt.from(e.headers), e.data = Uo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kf.getAdapter(e.adapter || ns.adapter, e)(e).then(
    function(r) {
      $o(e), e.response = r;
      try {
        r.data = Uo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = dt.from(r.headers), r;
    },
    function(r) {
      if (!Of(r) && ($o(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Uo.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = dt.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const fo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wl = {};
fo.transitional = function(t, n, r) {
  function o(s, a) {
    return "[Axios v" + Ja + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (t === !1)
      throw new ne(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !Wl[a] && (Wl[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, i) : !0;
  };
};
fo.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function W_(e, t, n) {
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
const Cs = {
  assertOptions: W_,
  validators: fo
}, it = Cs.validators;
let Dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new xl(),
      response: new xl()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $n(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Cs.assertOptions(
      r,
      {
        silentJSONParsing: it.transitional(it.boolean),
        forcedJSONParsing: it.transitional(it.boolean),
        clarifyTimeoutError: it.transitional(it.boolean),
        legacyInterceptorReqResOrdering: it.transitional(it.boolean),
        advertiseZstdAcceptEncoding: it.transitional(it.boolean),
        validateStatusUndefinedResolves: it.transitional(it.boolean)
      },
      !1
    ), o != null && (T.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Cs.assertOptions(
      o,
      {
        encode: it.function,
        serialize: it.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Cs.assertOptions(
      n,
      {
        baseUrl: it.spelling("baseURL"),
        withXsrfToken: it.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && T.merge(s.common, s[n.method]);
    s && T.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (w) => {
      delete s[w];
    }), n.headers = dt.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(S) {
      if (typeof S.runWhen == "function" && S.runWhen(n) === !1)
        return;
      l = l && S.synchronous;
      const A = n.transitional || Ya;
      A && A.legacyInterceptorReqResOrdering ? i.unshift(S.fulfilled, S.rejected) : i.push(S.fulfilled, S.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(S) {
      c.push(S.fulfilled, S.rejected);
    });
    let u, f = 0, h;
    if (!l) {
      const w = [Bl.bind(this), void 0];
      for (w.unshift(...i), w.push(...c), h = w.length, u = Promise.resolve(n); f < h; )
        u = u.then(w[f++], w[f++]);
      return u;
    }
    h = i.length;
    let b = n;
    for (; f < h; ) {
      const w = i[f++], S = i[f++];
      try {
        b = w(b);
      } catch (A) {
        S.call(this, A);
        break;
      }
    }
    try {
      u = Bl.call(this, b);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, h = c.length; f < h; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = $n(this.defaults, t);
    const n = Rf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Sf(n, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(t) {
  Dn.prototype[t] = function(n, r) {
    return this.request(
      $n(r || {}, {
        method: t,
        url: n,
        data: r && T.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
T.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(s, a, i) {
      return this.request(
        $n(i || {}, {
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
  Dn.prototype[t] = n(), t !== "query" && (Dn.prototype[t + "Form"] = n(!0));
});
let z_ = class xf {
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
      r.reason || (r.reason = new rs(s, a, i), n(r.reason));
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
      token: new xf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function K_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function G_(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const pa = {
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
Object.entries(pa).forEach(([e, t]) => {
  pa[t] = e;
});
function Pf(e) {
  const t = new Dn(e), n = cf(Dn.prototype.request, t);
  return T.extend(n, Dn.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Pf($n(e, o));
  }, n;
}
const Be = Pf(ns);
Be.Axios = Dn;
Be.CanceledError = rs;
Be.CancelToken = z_;
Be.isCancel = Of;
Be.VERSION = Ja;
Be.toFormData = uo;
Be.AxiosError = ne;
Be.Cancel = Be.CanceledError;
Be.all = function(t) {
  return Promise.all(t);
};
Be.spread = K_;
Be.isAxiosError = G_;
Be.mergeConfig = $n;
Be.AxiosHeaders = dt;
Be.formToJSON = (e) => Af(T.isHTMLForm(e) ? new FormData(e) : e);
Be.getAdapter = kf.getAdapter;
Be.HttpStatusCode = pa;
Be.default = Be;
const {
  Axios: tv,
  AxiosError: nv,
  CanceledError: rv,
  isCancel: sv,
  CancelToken: ov,
  VERSION: av,
  all: iv,
  Cancel: lv,
  isAxiosError: cv,
  spread: uv,
  toFormData: fv,
  AxiosHeaders: dv,
  HttpStatusCode: mv,
  formToJSON: hv,
  getAdapter: pv,
  mergeConfig: gv,
  create: _v
} = Be, q_ = "X-Admin-UI-Request", Y_ = "X-User-UI-Request";
function zl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Nf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function X_(e) {
  const t = Nf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function J_(e) {
  const t = X_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function Q_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return zl(Nf(e)) || zl(n);
}
function Z_(e) {
  return J_(e);
}
const Kl = "/api/v1", e1 = t1();
function Mf(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function t1(e) {
  const n = (String(Kl).trim() || Kl).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Mf(n);
}
function Bs() {
  return e1;
}
function Df(e) {
  const t = Mf(e);
  try {
    return `${typeof window > "u" ? new URL(Bs()).origin : new URL(Bs(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Za = "auth_token", n1 = "auth_user", mo = "refresh_token", ei = "token_expires_at", r1 = "sub2api-auth-token-refresh", Gl = 3e4, Ff = 1e3, s1 = 1e3, o1 = 25;
let Er = null;
function ti() {
  const e = localStorage.getItem(n1);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function a1() {
  const e = localStorage.getItem(mo);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Za),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(ei)),
    userID: ti()
  };
}
function i1(e) {
  const t = localStorage.getItem(Za), n = localStorage.getItem(mo), r = Number(localStorage.getItem(ei));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || ti() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function Ws(e, t) {
  const n = i1(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function l1(e, t, n = Date.now() + Ff) {
  for (; Date.now() < n; ) {
    const r = Ws(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, o1));
  }
  return Ws(e, t);
}
function c1(e) {
  localStorage.setItem(Za, e.access_token), localStorage.setItem(ei, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(mo, e.refresh_token);
}
async function u1(e, t, n = !1) {
  var o;
  const r = Date.now() + Gl + s1;
  try {
    const a = (await Be.post(
      `${Bs()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Gl }
    )).data;
    if (a.code !== 0 || !a.data)
      throw new Error(a.message || "Token refresh failed");
    if (localStorage.getItem(mo) !== e.refreshToken || ti() !== e.userID) {
      const i = Ws(e, t);
      if (i)
        return i;
      throw new Error("Session changed during token refresh");
    }
    return c1(a.data), a.data;
  } catch (s) {
    const a = (o = s.response) == null ? void 0 : o.status, i = typeof a == "number" && a >= 400 && a < 500, l = await l1(
      e,
      t,
      i && n ? r : Date.now() + Ff
    );
    if (l)
      return l;
    throw s;
  }
}
async function f1(e) {
  const t = a1(), n = async (r = !1) => {
    const o = Ws(t, e.failedAccessToken);
    return o || u1(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(r1, () => n(!1)) : n(!0);
}
function Uf(e = {}) {
  if (Er)
    return Er;
  const t = f1(e);
  Er = t;
  const n = () => {
    Er === t && (Er = null);
  };
  return t.then(n, n), t;
}
const Q = Be.create({
  baseURL: Bs(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), d1 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
Q.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = lf()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = d1()), e.headers) {
      const n = String(e.url || "");
      Q_(n) && (e.headers[q_] = "1"), Z_(n) && (e.headers[Y_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
Q.interceptors.response.use(
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
        const l = localStorage.getItem("refresh_token"), c = a.includes("/auth/login") || a.includes("/auth/register") || a.includes("/auth/refresh");
        if (l && !c) {
          const w = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const S = t.headers, A = (S == null ? void 0 : S.Authorization) ?? (S == null ? void 0 : S.authorization), E = typeof A == "string" && A.startsWith("Bearer ") ? A.slice(7) : null, P = await Uf({ failedAccessToken: E });
            return t.headers && (t.headers.Authorization = `Bearer ${P.access_token}`), Q(t);
          } catch {
            return localStorage.getItem("refresh_token") !== l || localStorage.getItem("auth_user") !== w ? Promise.reject({
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
        const u = !!localStorage.getItem("auth_token"), f = (r = e.config) == null ? void 0 : r.headers, h = (f == null ? void 0 : f.Authorization) ?? (f == null ? void 0 : f.authorization), b = typeof h == "string" ? h.trim() !== "" : Array.isArray(h) ? h.length > 0 : !!h;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (u || b) && !c && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
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
async function m1(e = !1) {
  const { data: t } = await Q.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
function ni(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function ho(e) {
  localStorage.setItem("auth_token", e);
}
function po(e) {
  localStorage.setItem("refresh_token", e);
}
function go(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function $f() {
  return localStorage.getItem("auth_token");
}
function Hf() {
  return localStorage.getItem("refresh_token");
}
function h1() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Vf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function p1(e) {
  const { data: t } = await Q.post("/auth/login", e);
  return ni(t) || (ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function g1(e) {
  const { data: t } = await Q.post("/auth/login/2fa", e);
  return ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function _1(e) {
  const { data: t } = await Q.post("/auth/register", e);
  return ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function b1() {
  return Q.get("/auth/me");
}
async function y1() {
  const e = Hf();
  if (e)
    try {
      await Q.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Vf();
}
function jf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function v1(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function E1(e) {
  return v1(e) ? "login" : "bind";
}
function w1(e) {
  return E1(e);
}
function S1(e) {
  return e.error === "invitation_required";
}
function T1(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function A1() {
  return Uf();
}
async function O1() {
  const { data: e } = await Q.post("/auth/revoke-all-sessions");
  return e;
}
function C1() {
  return $f() !== null;
}
async function Bf() {
  const { data: e } = await Q.get("/settings/public");
  return e;
}
async function R1(e) {
  const { data: t } = await Q.post("/auth/send-verify-code", e);
  return t;
}
async function L1(e) {
  const { data: t } = await Q.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function I1(e) {
  const { data: t } = await Q.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function k1(e) {
  const { data: t } = await Q.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function x1(e) {
  const { data: t } = await Q.post("/auth/forgot-password", e);
  return t;
}
async function P1(e) {
  const { data: t } = await Q.post("/auth/reset-password", e);
  return t;
}
async function N1(e, t, n) {
  return Wf(e, t, n);
}
async function M1(e, t, n) {
  return zf(e, t, n);
}
async function D1(e, t, n) {
  return Kf(e, t, n);
}
async function _o(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await Q.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...jf(n)
    }
  );
  return s;
}
async function Wf(e, t, n) {
  return _o("linuxdo", e, t, n);
}
async function zf(e, t, n) {
  return _o("oidc", e, t, n);
}
async function Kf(e, t, n) {
  return _o("wechat", e, t, n);
}
async function F1(e, t, n) {
  return _o("dingtalk", e, t, n);
}
async function Gf(e) {
  const { data: t } = await Q.post(
    "/auth/oauth/pending/exchange",
    jf(e)
  );
  return t;
}
async function U1(e) {
  return Gf(e);
}
const Wn = {
  login: p1,
  login2FA: g1,
  isTotp2FARequired: ni,
  register: _1,
  getCurrentUser: b1,
  logout: y1,
  isAuthenticated: C1,
  setAuthToken: ho,
  setRefreshToken: po,
  setTokenExpiresAt: go,
  getAuthToken: $f,
  getRefreshToken: Hf,
  getTokenExpiresAt: h1,
  clearAuthToken: Vf,
  getPublicSettings: Bf,
  sendVerifyCode: R1,
  sendPendingOAuthVerifyCode: L1,
  validatePromoCode: I1,
  validateInvitationCode: k1,
  forgotPassword: x1,
  resetPassword: P1,
  refreshToken: A1,
  revokeAllSessions: O1,
  getPendingOAuthBindLoginKind: w1,
  isPendingOAuthCreateAccountRequired: S1,
  hasPendingOAuthSuggestedProfile: T1,
  completePendingOAuthBindLogin: Gf,
  createPendingLinuxDoOAuthAccount: Wf,
  createPendingOIDCOAuthAccount: zf,
  createPendingWeChatOAuthAccount: Kf,
  exchangePendingOAuthCompletion: U1,
  completeLinuxDoOAuthRegistration: N1,
  completeOIDCOAuthRegistration: M1,
  completeWeChatOAuthRegistration: D1,
  createPendingDingTalkOAuthAccount: F1
}, ql = "零一 API", ri = /* @__PURE__ */ Fa("app", () => {
  const e = J(!1), t = J(!1), n = J(0), r = J(!1), o = J([]), s = J(!1), a = J(!1), i = J(ql), l = J(""), c = J(""), u = J(""), f = J(""), h = J(""), b = J(null);
  let w = null, S = null, A = 0;
  const E = J(!1), P = J(!1), y = J(""), v = J(""), I = J(!1), C = J("source"), D = J(null);
  let N = 0;
  const O = _e(() => o.value.length > 0), B = _e(() => {
    var g;
    return ((g = b.value) == null ? void 0 : g.backend_mode_enabled) ?? !1;
  }), ee = J(0);
  function U() {
    e.value = !e.value;
  }
  function te(g) {
    e.value = g;
  }
  function oe() {
    t.value = !t.value;
  }
  function fe(g) {
    t.value = g;
  }
  function V(g) {
    g ? ee.value++ : ee.value = Math.max(0, ee.value - 1), r.value = ee.value > 0;
  }
  function X(g, _, x) {
    const L = `toast-${++N}`, M = {
      id: L,
      type: g,
      message: _,
      duration: x,
      startTime: x !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), x !== void 0 && setTimeout(() => {
      Ee(L);
    }, x), L;
  }
  function ie(g, _ = 3e3) {
    return X("success", g, _);
  }
  function Ae(g, _ = 5e3) {
    return X("error", g, _);
  }
  function xe(g, _ = 3e3) {
    return X("info", g, _);
  }
  function he(g, _ = 4e3) {
    return X("warning", g, _);
  }
  function Ee(g) {
    const _ = o.value.findIndex((x) => x.id === g);
    _ !== -1 && o.value.splice(_, 1);
  }
  function Me() {
    o.value = [];
  }
  async function Xe(g) {
    V(!0);
    try {
      return await g();
    } finally {
      V(!1);
    }
  }
  async function We(g, _) {
    V(!0);
    try {
      return await g();
    } catch (x) {
      const L = _ || x.message || nr.global.t("common.unknownError");
      return Ae(L), null;
    } finally {
      V(!1);
    }
  }
  function pe() {
    e.value = !1, r.value = !1, ee.value = 0, o.value = [];
  }
  async function K(g = !1) {
    if (E.value && !g)
      return {
        current_version: y.value,
        latest_version: v.value,
        has_update: I.value,
        build_type: C.value,
        release_info: D.value || void 0,
        cached: !0
      };
    if (P.value)
      return null;
    P.value = !0;
    try {
      const _ = await m1(g);
      return y.value = _.current_version, v.value = _.latest_version, I.value = _.has_update, C.value = _.build_type || "source", D.value = _.release_info || null, E.value = !0, _;
    } catch (_) {
      return console.error("Failed to fetch version:", _), null;
    } finally {
      P.value = !1;
    }
  }
  function re() {
    E.value = !1, I.value = !1;
  }
  function ae(g) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ...g }), b.value = g, i.value = g.site_name || ql, l.value = g.site_logo || "", c.value = g.version || "", u.value = g.contact_info || "", f.value = g.api_base_url || "", h.value = g.doc_url || "", s.value = !0;
  }
  function Ce(g = !1) {
    if (w)
      return g && !S && (A += 1, S = w.then(() => Ce(!0)).finally(() => {
        S = null;
      })), g ? S : w;
    if (g && (A += 1), !s.value && !g && window.__APP_CONFIG__)
      return ae(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
    if (s.value && !g)
      return b.value ? Promise.resolve({ ...b.value }) : Promise.resolve({
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
        contact_info: u.value,
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
        version: c.value,
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
    const _ = A;
    let x;
    try {
      x = Bf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), a.value = !1, Promise.resolve(null);
    }
    const L = x.then((M) => (_ === A && ae(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      w === L && (w = null, a.value = !1);
    });
    return w = L, L;
  }
  function ze() {
    A += 1, s.value = !1, b.value = null;
  }
  function p() {
    return window.__APP_CONFIG__ ? (ae(window.__APP_CONFIG__), !0) : !1;
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
    siteVersion: c,
    contactInfo: u,
    apiBaseUrl: f,
    docUrl: h,
    cachedPublicSettings: b,
    // Version state
    versionLoaded: E,
    versionLoading: P,
    currentVersion: y,
    latestVersion: v,
    hasUpdate: I,
    buildType: C,
    releaseInfo: D,
    // Computed
    hasActiveToasts: O,
    backendModeEnabled: B,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: te,
    toggleMobileSidebar: oe,
    setMobileOpen: fe,
    setLoading: V,
    showToast: X,
    showSuccess: ie,
    showError: Ae,
    showInfo: xe,
    showWarning: he,
    hideToast: Ee,
    clearAllToasts: Me,
    withLoading: Xe,
    withLoadingAndError: We,
    reset: pe,
    // Version actions
    fetchVersion: K,
    clearVersionCache: re,
    // Public settings actions
    fetchPublicSettings: Ce,
    clearPublicSettingsCache: ze,
    initFromInjectedConfig: p
  };
}), $1 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, H1 = { class: "p-4" }, V1 = { class: "flex items-start gap-3" }, j1 = { class: "mt-0.5 flex-shrink-0" }, B1 = { class: "min-w-0 flex-1" }, W1 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, z1 = ["onClick"], K1 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, G1 = /* @__PURE__ */ rn({
  __name: "Toast",
  setup(e) {
    const t = ri(), n = _e(() => t.toasts), r = (l) => {
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
      const c = {
        success: "text-zo-signal-500",
        error: "text-red-500",
        warning: "text-zo-alert-500",
        info: "text-blue-500"
      };
      return c[l] || c.info;
    }, s = (l) => {
      const c = {
        success: "border-zo-signal-500",
        error: "border-red-500",
        warning: "border-zo-alert-500",
        info: "border-blue-500"
      };
      return c[l] || c.info;
    }, a = (l) => {
      const c = {
        success: "bg-zo-signal-500",
        error: "bg-red-500",
        warning: "bg-zo-alert-500",
        info: "bg-blue-500"
      };
      return c[l] || c.info;
    }, i = (l) => {
      t.hideToast(l);
    };
    return (l, c) => (ge(), gn(Ia, { to: "body" }, [
      H("div", $1, [
        ye(hh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: sr(() => [
            (ge(!0), we(He, null, dn(n.value, (u) => (ge(), we("div", {
              key: u.id,
              class: Ge([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(u.type)
              ])
            }, [
              H("div", H1, [
                H("div", V1, [
                  H("div", j1, [
                    ye(Ke, {
                      name: r(u.type),
                      size: "md",
                      class: Ge(o(u.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  H("div", B1, [
                    u.title ? (ge(), we("p", W1, ue(u.title), 1)) : Ze("", !0),
                    H("p", {
                      class: Ge([
                        "text-sm leading-relaxed",
                        u.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, ue(u.message), 3)
                  ]),
                  H("button", {
                    onClick: (f) => i(u.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    ye(Ke, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, z1)
                ])
              ]),
              u.duration ? (ge(), we("div", K1, [
                H("div", {
                  class: Ge(["h-full toast-progress", a(u.type)]),
                  style: ur({ animationDuration: `${u.duration}ms` })
                }, null, 6)
              ])) : Ze("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), si = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, q1 = /* @__PURE__ */ si(G1, [["__scopeId", "data-v-fc5fa96e"]]), Y1 = { class: "modal-header" }, X1 = {
  key: 0,
  class: "modal-footer"
}, J1 = /* @__PURE__ */ rn({
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
    const r = `modal-title-${++n}`, o = J(null), s = J(null);
    let a = null;
    const i = e, l = t, c = _e(() => i.zIndex !== 50 ? { zIndex: i.zIndex } : void 0), u = _e(() => ({
      narrow: "max-w-md",
      normal: "max-w-lg",
      wide: "w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
      "extra-wide": "w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl",
      full: "w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
    })[i.width]), f = () => {
      i.closeOnClickOutside && l("close");
    }, h = (b) => {
      i.show && i.closeOnEscape && b.key === "Escape" && l("close");
    };
    return Tt(
      () => i.show,
      async (b) => {
        if (b) {
          if (a = document.activeElement, document.body.classList.add("modal-open"), await Zn(), s.value && (s.value.scrollTop = 0), o.value) {
            const w = o.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            w == null || w.focus();
          }
        } else
          document.body.classList.remove("modal-open"), a && typeof a.focus == "function" && a.focus(), a = null;
      },
      { immediate: !0 }
    ), fr(() => {
      document.addEventListener("keydown", h);
    }), Xr(() => {
      document.removeEventListener("keydown", h), document.body.classList.remove("modal-open");
    }), (b, w) => (ge(), gn(Ia, { to: "body" }, [
      ye(bu, { name: "modal" }, {
        default: sr(() => [
          e.show ? (ge(), we("div", {
            key: 0,
            class: "modal-overlay",
            style: ur(c.value),
            "aria-labelledby": r,
            role: "dialog",
            "aria-modal": "true",
            onClick: Qe(f, ["self"])
          }, [
            H("div", {
              ref_key: "dialogRef",
              ref: o,
              class: Ge(["modal-content", "base-dialog-surface", "console-skin-dialog", u.value, e.panelClass]),
              onClick: w[1] || (w[1] = Qe(() => {
              }, ["stop"]))
            }, [
              H("div", Y1, [
                H("h3", {
                  id: r,
                  class: "modal-title"
                }, ue(e.title), 1),
                e.showCloseButton ? (ge(), we("button", {
                  key: 0,
                  onClick: w[0] || (w[0] = (S) => l("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  ye(Ke, {
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
                Ps(b.$slots, "default")
              ], 512),
              b.$slots.footer ? (ge(), we("div", X1, [
                Ps(b.$slots, "footer")
              ])) : Ze("", !0)
            ], 2)
          ], 4)) : Ze("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Q1 = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], Z1 = { class: "select-value" }, eb = ["onKeydown"], tb = { class: "select-icon" }, nb = {
  key: 0,
  class: "select-search"
}, rb = ["placeholder", "aria-label"], sb = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], ob = {
  key: 0,
  class: "select-empty"
}, Ho = 8, ab = 200, ib = 300, lb = /* @__PURE__ */ rn({
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
    const { t: n } = Zr(), r = `select-${Math.random().toString(36).substring(2, 9)}`, o = e, s = t, a = J(!1), i = J(""), l = J(-1), c = J(null), u = J(null), f = J(null), h = J(null), b = J(null), w = J("bottom"), S = J(null), A = _e(() => o.placeholder ?? n("common.selectOption")), E = _e(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), P = _e(() => o.emptyText ?? n("common.noOptionsFound"));
    let y = null;
    const v = _e(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), I = _e(() => {
      if (!S.value) return {};
      const K = S.value, re = Math.max(Ho, window.innerWidth - Ho), ae = Math.min(
        Math.max(Ho, K.left),
        re
      ), Ce = Math.max(0, re - ae), ze = Math.max(ab, K.width), p = Math.min(ze, Ce), g = {
        position: "fixed",
        left: `${ae}px`,
        minWidth: `${p}px`,
        maxWidth: `${Ce}px`,
        zIndex: "100000020"
      };
      return w.value === "top" ? g.bottom = `${window.innerHeight - K.top + 4}px` : g.top = `${K.bottom + 4}px`, g;
    }), C = (K) => typeof K == "object" && K !== null ? K[o.valueKey] : K, D = (K) => String(typeof K == "object" && K !== null ? K[o.labelKey] ?? "" : K ?? ""), N = (K) => typeof K == "object" && K !== null ? !!K.disabled : !1, O = (K) => typeof K == "object" && K !== null ? K.kind === "group" : !1, B = _e(() => o.options.find((K) => C(K) === o.modelValue) || null), ee = _e(() => B.value ? D(B.value) : o.creatable && o.modelValue ? String(o.modelValue) : A.value), U = _e(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), te = _e(() => {
      let K = o.options;
      if (v.value && i.value && !o.remote) {
        const re = i.value.toLowerCase();
        if (K = K.filter((ae) => !!(D(ae).toLowerCase().includes(re) || ae.description && String(ae.description).toLowerCase().includes(re))), o.creatable && i.value.trim()) {
          const ae = i.value.trim(), Ce = o.creatablePrefix || n("common.search");
          K = [{ [o.valueKey]: ae, [o.labelKey]: `${Ce} "${ae}"`, _creatable: !0 }, ...K];
        }
      }
      return K;
    }), oe = (K) => C(K) === o.modelValue, fe = (K) => {
      const re = te.value;
      if (re.length === 0) return -1;
      for (let ae = 0; ae < re.length; ae++) {
        const Ce = (K + ae) % re.length;
        if (!N(re[Ce])) return Ce;
      }
      return -1;
    }, V = (K) => {
      const re = te.value;
      if (re.length === 0) return -1;
      for (let ae = 0; ae < re.length; ae++) {
        const Ce = (K - ae + re.length) % re.length;
        if (!N(re[Ce])) return Ce;
      }
      return -1;
    }, X = (K, re) => {
      N(K) || O(K) || (l.value = re);
    }, ie = () => {
      c.value && (S.value = c.value.getBoundingClientRect());
    }, Ae = () => {
      c.value && (ie(), Zn(() => {
        if (!h.value || !S.value) return;
        const K = h.value.offsetHeight || 240, re = window.innerHeight - S.value.bottom, ae = S.value.top;
        re < K && ae > K ? w.value = "top" : w.value = "bottom";
      }));
    }, xe = () => {
      o.disabled || (a.value = !a.value);
    };
    Tt(a, (K) => {
      if (K) {
        if (Ae(), te.value.length === 0)
          l.value = -1;
        else {
          const re = te.value.findIndex(oe), ae = re >= 0 ? re : 0;
          l.value = N(te.value[ae]) ? fe(ae + 1) : ae;
        }
        v.value && Zn(() => {
          var re;
          return (re = f.value) == null ? void 0 : re.focus();
        }), window.addEventListener("scroll", ie, { capture: !0, passive: !0 }), window.addEventListener("resize", Ae);
      } else
        i.value = "", l.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", ie, { capture: !0 }), window.removeEventListener("resize", Ae);
    }), Tt(i, (K) => {
      !o.remote || !a.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, s("search", K.trim());
      }, ib));
    });
    const he = (K) => {
      var ae;
      const re = C(K) ?? null;
      s("update:modelValue", re), s("change", re, K), a.value = !1, (ae = u.value) == null || ae.focus();
    }, Ee = () => {
      o.disabled || (s("update:modelValue", null), s("change", null, null));
    }, Me = () => {
      a.value || (a.value = !0);
    }, Xe = (K) => {
      var re;
      switch (K.key) {
        case "ArrowDown":
          K.preventDefault(), l.value = fe(l.value + 1), l.value >= 0 && We();
          break;
        case "ArrowUp":
          K.preventDefault(), l.value = V(l.value - 1), l.value >= 0 && We();
          break;
        case "Enter":
          if (K.preventDefault(), l.value >= 0 && l.value < te.value.length) {
            const ae = te.value[l.value];
            N(ae) || he(ae);
          }
          break;
        case "Escape":
          K.preventDefault(), a.value = !1, (re = u.value) == null || re.focus();
          break;
        case "Tab":
          a.value = !1;
          break;
      }
    }, We = () => {
      Zn(() => {
        const K = b.value;
        if (!K) return;
        const re = K.children[l.value];
        re && (re.offsetTop < K.scrollTop ? K.scrollTop = re.offsetTop : re.offsetTop + re.offsetHeight > K.scrollTop + K.offsetHeight && (K.scrollTop = re.offsetTop + re.offsetHeight - K.offsetHeight));
      });
    }, pe = (K) => {
      var ze;
      const re = K.target, ae = !!re.closest(`.${r}`), Ce = (ze = c.value) == null ? void 0 : ze.contains(re);
      !ae && !Ce && a.value && (a.value = !1);
    };
    return fr(() => {
      document.addEventListener("click", pe);
    }), Xr(() => {
      document.removeEventListener("click", pe), window.removeEventListener("scroll", ie, { capture: !0 }), window.removeEventListener("resize", Ae), y && (clearTimeout(y), y = null);
    }), (K, re) => (ge(), we("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: c
    }, [
      H("button", {
        ref_key: "triggerRef",
        ref: u,
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
          xr(Qe(Me, ["prevent"]), ["down"]),
          xr(Qe(Me, ["prevent"]), ["up"])
        ]
      }, [
        H("span", Z1, [
          Ps(K.$slots, "selected", { option: B.value }, () => [
            qn(ue(ee.value), 1)
          ], !0)
        ]),
        e.clearable && U.value && !e.disabled ? (ge(), we("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Qe(Ee, ["stop"]),
          onMousedown: re[0] || (re[0] = Qe(() => {
          }, ["stop"])),
          onKeydown: xr(Qe(Ee, ["stop", "prevent"]), ["enter"])
        }, [
          ye(Ke, {
            name: "x",
            size: "sm"
          })
        ], 40, eb)) : Ze("", !0),
        H("span", tb, [
          ye(Ke, {
            name: "chevronDown",
            size: "md",
            class: Ge(["transition-transform duration-200", a.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, Q1),
      (ge(), gn(Ia, { to: "body" }, [
        ye(bu, { name: "select-dropdown" }, {
          default: sr(() => [
            a.value ? (ge(), we("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: Ge(["select-dropdown-portal console-skin-select-menu", [r]]),
              style: ur(I.value),
              role: "listbox",
              onClick: re[3] || (re[3] = Qe(() => {
              }, ["stop"])),
              onMousedown: re[4] || (re[4] = Qe(() => {
              }, ["stop"])),
              onKeydown: Xe
            }, [
              v.value ? (ge(), we("div", nb, [
                ye(Ke, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                zo(H("input", {
                  ref_key: "searchInputRef",
                  ref: f,
                  "onUpdate:modelValue": re[1] || (re[1] = (ae) => i.value = ae),
                  type: "text",
                  placeholder: E.value,
                  "aria-label": E.value,
                  class: "select-search-input",
                  onClick: re[2] || (re[2] = Qe(() => {
                  }, ["stop"]))
                }, null, 8, rb), [
                  [ea, i.value]
                ])
              ])) : Ze("", !0),
              H("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: b
              }, [
                (ge(!0), we(He, null, dn(te.value, (ae, Ce) => (ge(), we("div", {
                  key: `${typeof C(ae)}:${String(C(ae) ?? "")}`,
                  role: "option",
                  "aria-selected": oe(ae),
                  "aria-disabled": N(ae),
                  onClick: Qe((ze) => !N(ae) && he(ae), ["stop"]),
                  onMouseenter: (ze) => X(ae, Ce),
                  class: Ge([
                    "select-option",
                    O(ae) && "select-option-group",
                    oe(ae) && "select-option-selected",
                    N(ae) && !O(ae) && "select-option-disabled",
                    l.value === Ce && !O(ae) && "select-option-focused"
                  ])
                }, [
                  Ps(K.$slots, "option", {
                    option: ae,
                    selected: oe(ae)
                  }, () => [
                    ae._creatable ? (ge(), gn(Ke, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : Ze("", !0),
                    H("span", {
                      class: Ge(["select-option-label", ae._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, ue(D(ae)), 3),
                    oe(ae) ? (ge(), gn(Ke, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : Ze("", !0)
                  ], !0)
                ], 42, sb))), 128)),
                te.value.length === 0 ? (ge(), we("div", ob, ue(o.loading ? le(n)("common.loading") : P.value), 1)) : Ze("", !0)
              ], 512)
            ], 38)) : Ze("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), ps = /* @__PURE__ */ si(lb, [["__scopeId", "data-v-fbc717eb"]]);
async function qf(e) {
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
function cb(e) {
  if (!e || typeof e != "object") return [];
  const t = e, n = Array.isArray(t.data) ? t.data : Array.isArray(t.models) ? t.models : [], r = /* @__PURE__ */ new Set(), o = [];
  for (const s of n) {
    const i = (typeof s == "string" ? s : s && typeof s == "object" ? String(s.id || s.name || "") : "").trim().replace(/^models\//, ""), l = i.toLowerCase(), c = l.startsWith("gpt-image-") || l === "grok-imagine" || l === "grok-imagine-edit" || l.startsWith("grok-imagine-image");
    !i || !c || r.has(i) || (r.add(i), o.push(i));
  }
  return o;
}
async function ub(e, t = {}) {
  const n = await fetch(Df("/v1/models"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${e}`
    },
    signal: t.signal
  });
  if (!n.ok) throw await qf(n);
  return cb(await n.json());
}
async function fb(e, t, n = {}) {
  const { referenceImages: r = [], ...o } = t, s = r.length > 0, a = { Authorization: `Bearer ${e}` };
  let i;
  if (s) {
    const c = new FormData();
    c.append("model", t.model), c.append("prompt", t.prompt), t.n !== void 0 && c.append("n", String(t.n)), t.size && c.append("size", t.size), t.quality && c.append("quality", t.quality), t.response_format && c.append("response_format", t.response_format), r.forEach((u) => c.append("image", u, u.name)), i = c;
  } else
    a["Content-Type"] = "application/json", i = JSON.stringify(o);
  const l = await fetch(
    Df(s ? "/v1/images/edits" : "/v1/images/generations"),
    { method: "POST", headers: a, body: i, signal: n.signal }
  );
  if (!l.ok) throw await qf(l);
  return l.json();
}
async function db(e = 1, t = 10, n, r) {
  const { data: o } = await Q.get("/keys", {
    params: { page: e, page_size: t, ...n },
    signal: r == null ? void 0 : r.signal
  });
  return o;
}
async function mb(e) {
  const { data: t } = await Q.get(`/keys/${e}`);
  return t;
}
async function hb(e, t, n, r, o, s, a, i) {
  const l = { name: e };
  t !== void 0 && (l.group_id = t), n && (l.custom_key = n), r && r.length > 0 && (l.ip_whitelist = r), o && o.length > 0 && (l.ip_blacklist = o), s !== void 0 && s > 0 && (l.quota = s), a !== void 0 && a > 0 && (l.expires_in_days = a), i != null && i.rate_limit_5h && i.rate_limit_5h > 0 && (l.rate_limit_5h = i.rate_limit_5h), i != null && i.rate_limit_1d && i.rate_limit_1d > 0 && (l.rate_limit_1d = i.rate_limit_1d), i != null && i.rate_limit_7d && i.rate_limit_7d > 0 && (l.rate_limit_7d = i.rate_limit_7d);
  const { data: c } = await Q.post("/keys", l);
  return c;
}
async function Yf(e, t) {
  const { data: n } = await Q.put(`/keys/${e}`, t);
  return n;
}
async function pb(e) {
  const { data: t } = await Q.delete(`/keys/${e}`);
  return t;
}
async function gb(e, t) {
  return Yf(e, { status: t });
}
const _b = {
  list: db,
  getById: mb,
  create: hb,
  update: Yf,
  delete: pb,
  toggleStatus: gb
};
function Xf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function Nr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function hn(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function bb(e) {
  const t = { ...e };
  t.challenge = Nr(String(t.challenge));
  const n = { ...t.user };
  return n.id = Nr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: Nr(String(r.id))
  }))), t;
}
function yb(e) {
  const t = { ...e };
  return t.challenge = Nr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: Nr(String(n.id))
  }))), t;
}
function vb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: hn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: hn(t.attestationObject),
      clientDataJSON: hn(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function Eb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: hn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: hn(t.authenticatorData),
      clientDataJSON: hn(t.clientDataJSON),
      signature: hn(t.signature),
      userHandle: hn(t.userHandle)
    }
  };
}
async function wb(e) {
  Xf();
  const { data: t } = e ? await Q.post("/auth/passkey/login/begin", e) : await Q.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: yb(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await Q.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: Eb(n)
  });
  return r;
}
async function Sb(e, t) {
  Xf();
  const { data: n } = await Q.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: bb(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await Q.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: vb(r)
    }
  );
  return o;
}
async function Tb() {
  const { data: e } = await Q.get("/user/passkeys");
  return e;
}
async function Ab(e, t) {
  await Q.patch(`/user/passkeys/${e}`, { name: t });
}
async function Ob(e, t) {
  await Q.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Cb = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: wb,
  register: Sb,
  list: Tb,
  rename: Ab,
  remove: Ob
};
async function Rb() {
  const { data: e } = await Q.get("/admin/settings");
  return e;
}
async function Lb() {
  const { data: e } = await Q.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return e;
}
async function Ib(e) {
  const { data: t } = await Q.put(
    "/admin/settings",
    e
  );
  return t;
}
async function kb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/test-smtp",
    e
  );
  return t;
}
async function xb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/send-test-email",
    e
  );
  return t;
}
async function Pb() {
  const { data: e } = await Q.get(
    "/admin/settings/email-templates"
  );
  return e;
}
async function Nb(e, t) {
  const { data: n } = await Q.get(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
  );
  return n;
}
async function Mb(e, t, n) {
  const { data: r } = await Q.put(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,
    n
  );
  return r;
}
async function Db(e, t) {
  const { data: n } = await Q.post(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}/restore-official`
  );
  return n;
}
async function Fb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/email-template-preview",
    e
  );
  return t;
}
async function Ub() {
  const { data: e } = await Q.get(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function $b() {
  const { data: e } = await Q.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return e;
}
async function Hb() {
  const { data: e } = await Q.delete(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Vb() {
  const { data: e } = await Q.get(
    "/admin/settings/overload-cooldown"
  );
  return e;
}
async function jb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/overload-cooldown",
    e
  );
  return t;
}
async function Bb() {
  const { data: e } = await Q.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return e;
}
async function Wb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/rate-limit-429-cooldown",
    e
  );
  return t;
}
async function zb() {
  const { data: e } = await Q.get(
    "/admin/settings/panel-rate-limit"
  );
  return e;
}
async function Kb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/panel-rate-limit",
    e
  );
  return t;
}
async function Gb() {
  const { data: e } = await Q.get(
    "/admin/settings/stream-timeout"
  );
  return e;
}
async function qb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/stream-timeout",
    e
  );
  return t;
}
async function Yb() {
  const { data: e } = await Q.get(
    "/admin/settings/rectifier"
  );
  return e;
}
async function Xb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/rectifier",
    e
  );
  return t;
}
async function Jb() {
  const { data: e } = await Q.get(
    "/admin/settings/beta-policy"
  );
  return e;
}
async function Qb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/beta-policy",
    e
  );
  return t;
}
async function Zb() {
  const { data: e } = await Q.get(
    "/admin/settings/web-search-emulation"
  );
  return e;
}
async function e2(e) {
  const { data: t } = await Q.put(
    "/admin/settings/web-search-emulation",
    e
  );
  return t;
}
async function t2(e) {
  const { data: t } = await Q.post(
    "/admin/settings/web-search-emulation/test",
    { query: e }
  );
  return t;
}
async function n2(e) {
  await Q.post(
    "/admin/settings/web-search-emulation/reset-usage",
    e
  );
}
const r2 = {
  getSettings: Rb,
  getNavigationSettings: Lb,
  updateSettings: Ib,
  testSmtpConnection: kb,
  sendTestEmail: xb,
  getEmailTemplates: Pb,
  getEmailTemplate: Nb,
  updateEmailTemplate: Mb,
  restoreOfficialEmailTemplate: Db,
  previewEmailTemplate: Fb,
  getAdminApiKey: Ub,
  regenerateAdminApiKey: $b,
  deleteAdminApiKey: Hb,
  getOverloadCooldownSettings: Vb,
  updateOverloadCooldownSettings: jb,
  getRateLimit429CooldownSettings: Bb,
  updateRateLimit429CooldownSettings: Wb,
  getPanelRateLimitSettings: zb,
  updatePanelRateLimitSettings: Kb,
  getStreamTimeoutSettings: Gb,
  updateStreamTimeoutSettings: qb,
  getRectifierSettings: Yb,
  updateRectifierSettings: Xb,
  getBetaPolicySettings: Jb,
  updateBetaPolicySettings: Qb,
  getWebSearchEmulationConfig: Zb,
  updateWebSearchEmulationConfig: e2,
  testWebSearchEmulation: t2,
  resetWebSearchUsage: n2
}, s2 = {
  // ==================== Config ====================
  /** Get payment configuration (admin view) */
  getConfig() {
    return Q.get("/admin/payment/config");
  },
  /** Update payment configuration */
  updateConfig(e) {
    return Q.put("/admin/payment/config", e);
  },
  // ==================== Dashboard ====================
  /** Get payment dashboard statistics */
  getDashboard(e) {
    return Q.get("/admin/payment/dashboard", {
      params: e ? { days: e } : void 0
    });
  },
  // ==================== Orders ====================
  /** Get all orders (paginated, with filters) */
  getOrders(e) {
    return Q.get("/admin/payment/orders", { params: e });
  },
  /** Get a specific order by ID */
  getOrder(e) {
    return Q.get(`/admin/payment/orders/${e}`);
  },
  /** Cancel an order (admin) */
  cancelOrder(e) {
    return Q.post(`/admin/payment/orders/${e}/cancel`);
  },
  /** Retry recharge for a failed order */
  retryRecharge(e) {
    return Q.post(`/admin/payment/orders/${e}/retry`);
  },
  /** Process a refund */
  refundOrder(e, t) {
    return Q.post(`/admin/payment/orders/${e}/refund`, t);
  },
  /** Query and finalize a pending refund */
  queryRefund(e) {
    return Q.post(`/admin/payment/orders/${e}/refund/query`);
  },
  // ==================== Channels ====================
  /** Get all payment channels */
  getChannels() {
    return Q.get("/admin/payment/channels");
  },
  /** Create a payment channel */
  createChannel(e) {
    return Q.post("/admin/payment/channels", e);
  },
  /** Update a payment channel */
  updateChannel(e, t) {
    return Q.put(`/admin/payment/channels/${e}`, t);
  },
  /** Delete a payment channel */
  deleteChannel(e) {
    return Q.delete(`/admin/payment/channels/${e}`);
  },
  // ==================== Subscription Plans ====================
  /** Get all subscription plans */
  getPlans() {
    return Q.get("/admin/payment/plans");
  },
  /** Create a subscription plan */
  createPlan(e) {
    return Q.post("/admin/payment/plans", e);
  },
  /** Update a subscription plan */
  updatePlan(e, t) {
    return Q.put(`/admin/payment/plans/${e}`, t);
  },
  /** Delete a subscription plan */
  deletePlan(e) {
    return Q.delete(`/admin/payment/plans/${e}`);
  },
  // ==================== Provider Instances ====================
  /** Get all provider instances */
  getProviders() {
    return Q.get("/admin/payment/providers");
  },
  /** Create a provider instance */
  createProvider(e) {
    return Q.post("/admin/payment/providers", e);
  },
  /** Update a provider instance */
  updateProvider(e, t) {
    return Q.put(`/admin/payment/providers/${e}`, t);
  },
  /** Delete a provider instance */
  deleteProvider(e) {
    return Q.delete(`/admin/payment/providers/${e}`);
  }
}, Yl = {
  settings: r2,
  payment: s2
}, gs = "auth_token", _s = "auth_user", bs = "refresh_token", ys = "token_expires_at", Mr = "pending_auth_session", o2 = 60 * 1e3, a2 = 120 * 1e3;
function i2(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function Xl() {
  const e = localStorage.getItem(Mr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: i2(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(Mr), null);
  } catch {
    return localStorage.removeItem(Mr), null;
  }
}
function l2(e) {
  localStorage.setItem(Mr, JSON.stringify(e));
}
function Jl() {
  localStorage.removeItem(Mr);
}
const bo = /* @__PURE__ */ Fa("auth", () => {
  const e = J(null), t = J(null), n = J(null), r = J(null), o = J("standard"), s = J(null);
  let a = null, i = null;
  const l = _e(() => !!t.value && !!e.value), c = _e(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), u = _e(() => o.value === "simple"), f = _e(() => s.value !== null);
  function h(V) {
    const X = localStorage.getItem(gs), ie = localStorage.getItem(_s), Ae = localStorage.getItem(bs), xe = localStorage.getItem(ys);
    if (s.value = Xl(), X && ie)
      try {
        const he = JSON.parse(ie), { run_mode: Ee, ...Me } = he;
        return t.value = X, e.value = Me, o.value = V ?? Ee ?? "standard", n.value = Ae, r.value = xe ? parseInt(xe, 10) : null, !0;
      } catch (he) {
        console.error("Failed to parse saved user data:", he), fe({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function b(V) {
    o.value = V;
  }
  function w() {
    h() && (oe().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), S(), n.value && r.value !== null && E(r.value));
  }
  function S() {
    A(), a = setInterval(() => {
      t.value && oe().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, o2);
  }
  function A() {
    a && (clearInterval(a), a = null);
  }
  function E(V) {
    i && (clearTimeout(i), i = null);
    const X = Date.now(), ie = Math.max(0, V - X - a2);
    if (ie <= 0) {
      y();
      return;
    }
    i = setTimeout(() => {
      y();
    }, ie);
  }
  function P(V) {
    const X = Date.now() + V * 1e3;
    r.value = X, localStorage.setItem(ys, String(X)), E(X);
  }
  async function y() {
    if (n.value)
      try {
        const V = await Wn.refreshToken();
        t.value = V.access_token, n.value = V.refresh_token, P(V.expires_in);
      } catch (V) {
        console.error("Token refresh failed:", V);
      }
  }
  function v() {
    i && (clearTimeout(i), i = null);
  }
  async function I(V) {
    try {
      const X = await Wn.login(V);
      return ni(X) || N(X), X;
    } catch (X) {
      throw fe({ preservePendingAuthSession: s.value !== null }), X;
    }
  }
  async function C(V, X) {
    try {
      const ie = await Wn.login2FA({ temp_token: V, totp_code: X });
      return N(ie), e.value;
    } catch (ie) {
      throw fe({ preservePendingAuthSession: s.value !== null }), ie;
    }
  }
  async function D(V) {
    try {
      const X = await Cb.login(V);
      return N(X), e.value;
    } catch (X) {
      throw fe({ preservePendingAuthSession: s.value !== null }), X;
    }
  }
  function N(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(bs, V.refresh_token)), V.user.run_mode && (o.value = V.user.run_mode);
    const { run_mode: X, ...ie } = V.user;
    e.value = ie, localStorage.setItem(gs, V.access_token), localStorage.setItem(_s, JSON.stringify(ie)), U(), S(), V.refresh_token && V.expires_in && P(V.expires_in);
  }
  async function O(V) {
    try {
      const X = await Wn.register(V);
      return N(X), e.value;
    } catch (X) {
      throw fe({ preservePendingAuthSession: s.value !== null }), X;
    }
  }
  async function B(V) {
    A(), v(), t.value = null, e.value = null, t.value = V, localStorage.setItem(gs, V);
    const X = localStorage.getItem(bs), ie = localStorage.getItem(ys);
    X && (n.value = X), ie && (r.value = parseInt(ie, 10));
    try {
      const Ae = await oe();
      return S(), X && r.value !== null && E(r.value), U(), Ae;
    } catch (Ae) {
      throw fe({ preservePendingAuthSession: s.value !== null }), Ae;
    }
  }
  function ee(V) {
    if (s.value = V, V) {
      l2(V);
      return;
    }
    Jl();
  }
  function U() {
    ee(null);
  }
  async function te() {
    try {
      await Wn.logout();
    } catch (V) {
      console.warn("Logout API call failed, clearing local session anyway", V);
    } finally {
      fe();
    }
  }
  async function oe() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const V = await Wn.getCurrentUser();
      V.data.run_mode && (o.value = V.data.run_mode);
      const { run_mode: X, ...ie } = V.data;
      return e.value = ie, localStorage.setItem(_s, JSON.stringify(ie)), ie;
    } catch (V) {
      throw V.status === 401 && fe({ preservePendingAuthSession: s.value !== null }), V;
    }
  }
  function fe(V) {
    if (A(), v(), t.value = null, n.value = null, r.value = null, e.value = null, localStorage.removeItem(gs), localStorage.removeItem(_s), localStorage.removeItem(bs), localStorage.removeItem(ys), V != null && V.preservePendingAuthSession) {
      s.value = Xl();
      return;
    }
    s.value = null, Jl();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: Ur(o),
    pendingAuthSession: Ur(s),
    // Computed
    isAuthenticated: l,
    isAdmin: c,
    isSimpleMode: u,
    hasPendingAuthSession: f,
    // Actions
    login: I,
    loginWithPasskey: D,
    login2FA: C,
    register: O,
    setToken: B,
    logout: te,
    checkAuth: w,
    hydrateAuthSnapshot: h,
    setRunModeSnapshot: b,
    refreshUser: oe,
    setPendingAuthSession: ee,
    clearPendingAuthSession: U
  };
}), Tr = J(!1), ga = J(!1), Yn = J([]);
let wr = null;
const c2 = 100;
function u2(e) {
  var t;
  return e.status === "active" && ((t = e.group) == null ? void 0 : t.allow_image_generation) === !0 && (e.group.platform === "openai" || e.group.platform === "grok");
}
async function f2(e = !1) {
  return bo().isAuthenticated ? Tr.value && !e ? Yn.value : (wr && !e || (ga.value = !0, wr = (async () => {
    const n = [];
    let r = 1;
    for (; ; ) {
      const o = await _b.list(r, c2, {
        status: "active",
        sort_by: "created_at",
        sort_order: "desc"
      });
      if (n.push(...(o.items || []).filter(u2)), r >= o.pages || (o.items || []).length === 0) break;
      r += 1;
    }
    return Yn.value = n, Tr.value = !0, n;
  })().catch(() => (Yn.value = [], Tr.value = !0, [])).finally(() => {
    ga.value = !1, wr = null;
  })), wr) : (Tr.value = !0, Yn.value = [], []);
}
function d2() {
  return {
    allowedImageKeys: _e(() => Yn.value),
    canUseImageGeneration: _e(() => Yn.value.length > 0),
    imageGenerationAccessLoaded: _e(() => Tr.value),
    imageGenerationAccessLoading: _e(() => ga.value),
    refreshImageGenerationAccess: f2
  };
}
const m2 = /* @__PURE__ */ Fa("adminSettings", () => {
  const e = bo(), t = J(!1), n = J(!1), r = J(!0), o = J(!0), s = J("auto"), a = J(!1), i = J([]), l = J(null);
  let c = null, u = null, f = null, h = null, b = !1, w = 0, S = 0, A = 0, E = 0;
  function P() {
    E += 1, w += 1, S += 1, A += 1, c = u = null, f = h = null, t.value = n.value = b = !1, l.value = null, i.value = [], r.value = o.value = !0, s.value = "auto", a.value = !1;
  }
  Tt(
    () => e.token && e.user ? `${e.user.id}:${e.user.role}` : "",
    P,
    { flush: "sync" }
  );
  function y(B = !1) {
    if (f) {
      if (B && !h) {
        A += 1;
        const te = E, oe = f.then(() => (h === oe && (h = null), te === E ? y(!0) : void 0)).finally(() => {
          h === oe && (h = null);
        });
        h = oe;
      }
      return B ? h : f;
    }
    if (b && !B) return Promise.resolve();
    const ee = ++A, U = Yl.payment.getConfig().then((te) => {
      var oe;
      ee === A && (a.value = ((oe = te.data) == null ? void 0 : oe.enabled) ?? !1, b = !0);
    }).catch((te) => {
      ee === A && console.error("[adminSettings] Failed to fetch payment settings:", te);
    }).finally(() => {
      f === U && (f = null);
    });
    return f = U, U;
  }
  function v(B = !1) {
    var oe;
    if (!e.token || ((oe = e.user) == null ? void 0 : oe.role) !== "admin") return Promise.resolve();
    if (c) {
      if (B && !u) {
        w += 1;
        const fe = E, V = c.then(() => (u === V && (u = null), fe === E ? v(!0) : void 0)).finally(() => {
          u === V && (u = null);
        });
        u = V;
      }
      return B ? u : c;
    }
    if (y(B), t.value && !B) return Promise.resolve();
    B && (w += 1), n.value = !0;
    const ee = w, U = S, te = Yl.settings.getNavigationSettings().then((fe) => {
      ee === w && (U === S && (r.value = fe.ops_monitoring_enabled ?? !0, o.value = fe.ops_realtime_monitoring_enabled ?? !0, s.value = fe.ops_query_mode_default || "auto"), l.value = {
        ...fe,
        ops_monitoring_enabled: r.value,
        ops_realtime_monitoring_enabled: o.value,
        ops_query_mode_default: s.value
      }, i.value = Array.isArray(fe.custom_menu_items) ? fe.custom_menu_items : [], t.value = !0);
    }).catch((fe) => {
      ee === w && console.error("[adminSettings] Failed to fetch settings:", fe);
    }).finally(() => {
      c === te && (c = null, n.value = !1);
    });
    return c = te, te;
  }
  function I(B) {
    S += 1, r.value = B, l.value && (l.value.ops_monitoring_enabled = B);
  }
  function C(B) {
    S += 1, o.value = B, l.value && (l.value.ops_realtime_monitoring_enabled = B);
  }
  function D(B) {
    A += 1, a.value = B, b = !0;
  }
  function N(B) {
    S += 1, s.value = B || "auto", l.value && (l.value.ops_query_mode_default = s.value);
  }
  const O = () => I(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", O), fc(() => {
    P(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", O);
  }), {
    loaded: t,
    loading: n,
    opsMonitoringEnabled: r,
    opsRealtimeMonitoringEnabled: o,
    opsQueryModeDefault: s,
    paymentEnabled: a,
    customMenuItems: i,
    navigationSettings: l,
    fetch: v,
    reset: P,
    setOpsMonitoringEnabledLocal: I,
    setOpsRealtimeMonitoringEnabledLocal: C,
    setPaymentEnabledLocal: D,
    setOpsQueryModeDefaultLocal: N
  };
});
function Ln(e, t = "Unknown error", n) {
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
const h2 = "image-tutorial", p2 = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function g2(e) {
  return e.navigation_type !== "qr" && e.placement !== "header" && !!e.id.trim() && !!e.url.trim();
}
function _2(e, t = "") {
  const n = (e == null ? void 0 : e.filter(g2)) ?? [];
  return n.find((r) => r.id === h2) ?? n.find((r) => p2.has(r.label.trim().toLowerCase())) ?? n.find(
    (r) => r.label.trim() === "接入教程" && !!t.trim() && r.url.trim() === t.trim()
  );
}
function Ql(e, t = "") {
  const n = _2(e, t);
  return n ? `/custom/${encodeURIComponent(n.id)}` : "";
}
const b2 = { class: "online-image-module space-y-6" }, y2 = {
  class: "online-image-layout",
  "data-testid": "image-generation-form"
}, v2 = { class: "card space-y-5 p-5" }, E2 = { "data-testid": "api-key-row" }, w2 = { class: "input-label mb-1.5 block" }, S2 = { class: "api-key-control-row" }, T2 = ["disabled"], A2 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, O2 = {
  key: 0,
  class: "mt-1 text-xs text-gray-400 dark:text-gray-500"
}, C2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "model-count-row"
}, R2 = {
  class: "input-label mb-1.5 block",
  "data-testid": "model-select-label"
}, L2 = { class: "input-label mb-1.5 block" }, I2 = { "data-testid": "size-control" }, k2 = { class: "input-label mb-1.5 block" }, x2 = ["aria-label"], P2 = { class: "truncate" }, N2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "quality-format-row"
}, M2 = { class: "input-label mb-1.5 block" }, D2 = { class: "input-label mb-1.5 block" }, F2 = {
  class: "space-y-2",
  "data-testid": "reference-images-panel"
}, U2 = { class: "flex flex-wrap items-center justify-between gap-3" }, $2 = {
  for: "reference-image-input",
  class: "input-label"
}, H2 = ["onKeydown"], V2 = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, j2 = ["src", "alt"], B2 = ["aria-label", "onClick"], W2 = { class: "mt-4 flex flex-wrap items-center gap-3 first:mt-0" }, z2 = { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, K2 = { class: "min-w-0 flex-1" }, G2 = { class: "text-sm font-medium text-gray-800 dark:text-gray-200" }, q2 = { class: "mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400" }, Y2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, X2 = {
  key: 1,
  class: "text-xs text-red-500"
}, J2 = ["href", "aria-disabled", "tabindex", "title"], Q2 = {
  class: "space-y-4",
  "data-testid": "right-column"
}, Z2 = {
  class: "card space-y-4 p-5",
  "data-testid": "prompt-panel"
}, ey = { class: "input-label mb-1.5 block" }, ty = ["placeholder"], ny = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, ry = ["disabled"], sy = {
  class: "card p-5",
  "data-testid": "results-panel"
}, oy = { class: "flex items-start justify-between gap-3" }, ay = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, iy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, ly = {
  key: 0,
  class: "badge badge-gray"
}, cy = {
  key: 0,
  class: "flex min-h-[360px] flex-col items-center justify-center py-8 text-center"
}, uy = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, fy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, dy = {
  key: 1,
  class: "mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
}, my = { class: "bg-gray-50 dark:bg-dark-900" }, hy = ["src", "alt"], py = { class: "space-y-3 p-4" }, gy = { class: "text-sm leading-6 text-gray-700 dark:text-gray-300" }, _y = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, by = { class: "grid grid-cols-2 gap-2" }, yy = ["onClick"], vy = ["onClick"], Ey = { class: "card p-5" }, wy = { class: "flex flex-wrap items-start justify-between gap-3" }, Sy = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Ty = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Ay = ["disabled"], Oy = {
  key: 0,
  class: "flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400"
}, Cy = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400 dark:text-gray-500"
}, Ry = {
  key: 2,
  class: "mt-4 space-y-4"
}, Ly = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, Iy = { class: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400" }, ky = { class: "mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300" }, xy = { class: "grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4" }, Py = ["src", "alt"], Ny = { class: "grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700" }, My = ["aria-label", "onClick"], Dy = ["aria-label", "onClick"], Fy = { class: "space-y-5" }, Uy = { class: "text-sm text-gray-500 dark:text-gray-400" }, $y = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Hy = { class: "grid grid-cols-3 gap-2" }, Vy = ["aria-pressed", "onClick"], jy = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, By = { class: "grid grid-cols-4 gap-2 sm:gap-3" }, Wy = ["aria-pressed", "onClick"], zy = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Ky = { class: "text-sm text-gray-500 dark:text-gray-400" }, Gy = { class: "mt-1 text-xl font-semibold text-gray-900 dark:text-white" }, qy = { class: "flex w-full justify-end gap-2" }, Yy = "zero-one-image-generation", Ot = "history", Vo = 20, Xy = /* @__PURE__ */ rn({
  __name: "ImageGenerationView",
  setup(e) {
    const { t } = Zr(), n = ri(), r = bo(), o = m2(), s = _e(
      () => {
        var z;
        return ((z = n.cachedPublicSettings) == null ? void 0 : z.landing_tutorial_url) || "";
      }
    ), a = _e(() => {
      var z;
      if (r.isAdmin) {
        const W = Ql(
          o.customMenuItems,
          s.value
        );
        if (W || o.loaded) return W;
      }
      return Ql(
        (z = n.cachedPublicSettings) == null ? void 0 : z.custom_menu_items,
        s.value
      );
    });
    function i(z, W) {
      var bt, jt, gr;
      if (!W) return;
      z.preventDefault();
      const j = [...document.querySelectorAll("aside a[href]")].find((os) => os.getAttribute("href") === W);
      if (j) {
        j.click();
        return;
      }
      const Te = document.querySelector("#app"), Re = (gr = (jt = (bt = Te == null ? void 0 : Te.__vue_app__) == null ? void 0 : bt.config) == null ? void 0 : jt.globalProperties) == null ? void 0 : gr.$router;
      if (Re) {
        Re.push(W);
        return;
      }
      window.location.assign(W);
    }
    const {
      allowedImageKeys: l,
      imageGenerationAccessLoading: c,
      refreshImageGenerationAccess: u
    } = d2(), f = J(null), h = J(null), b = J([]), w = J(!1), S = J("");
    let A = null, E = 0;
    const P = J("1"), y = J(""), v = J("2K"), I = J("9:16"), C = J("1152x2048"), D = J("high"), N = J("b64_json"), O = J(!1), B = J([]), ee = J(""), U = J(t("imageGeneration.results.emptyHint")), te = J(null), oe = J([]), fe = J(""), V = J(!1), X = J(!1), ie = J(v.value), Ae = J(I.value), xe = ["1K", "2K", "4K"], he = [
      { label: "1:1", value: "1:1", previewClass: "h-5 w-5" },
      { label: "3:2", value: "3:2", previewClass: "h-4 w-6" },
      { label: "2:3", value: "2:3", previewClass: "h-6 w-4" },
      { label: "16:9", value: "16:9", previewClass: "h-4 w-7" },
      { label: "9:16", value: "9:16", previewClass: "h-7 w-4" },
      { label: "4:3", value: "4:3", previewClass: "h-5 w-6" },
      { label: "3:4", value: "3:4", previewClass: "h-6 w-5" },
      { label: "21:9", value: "21:9", previewClass: "h-3 w-8" }
    ], Ee = J([]), Me = J(!0), Xe = _e(() => l.value.map((z) => {
      var W, j;
      return {
        value: z.id,
        label: `${z.name} · ${((W = z.group) == null ? void 0 : W.name) || ((j = z.group) == null ? void 0 : j.platform) || t("common.unknown")}`
      };
    })), We = _e(() => l.value.find((z) => z.id === f.value) || null), pe = _e(() => {
      var W, j;
      const z = We.value;
      return z ? `${((W = z.group) == null ? void 0 : W.platform) || t("common.unknown")} · ${((j = z.group) == null ? void 0 : j.name) || t("common.unknown")}` : "";
    }), K = _e(() => b.value.map((z) => ({ value: z, label: z }))), re = [
      { label: "Auto", value: "auto" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ], ae = [
      { label: "Base64", value: "b64_json" },
      { label: "URL", value: "url" }
    ], Ce = _e(() => S.value ? S.value : w.value ? t("imageGeneration.hints.modelsLoading") : We.value && b.value.length === 0 ? t("imageGeneration.hints.modelsEmpty") : ""), ze = _e(() => `${v.value} · ${I.value}`), p = _e(() => _(ie.value, Ae.value)), g = _e(() => O.value || c.value || w.value || !We.value || !h.value || !y.value.trim());
    function _(z, W) {
      const j = { "1K": 1024, "2K": 2048, "4K": 4096 }[z] || 2048, [Te, Re] = W.split(":").map(Number);
      return !Te || !Re ? `${j}x${j}` : Te >= Re ? `${j}x${Math.round(j * Re / Te)}` : `${Math.round(j * Te / Re)}x${j}`;
    }
    function x() {
      ie.value = v.value, Ae.value = I.value, X.value = !0;
    }
    function L() {
      X.value = !1;
    }
    function M() {
      v.value = ie.value, I.value = Ae.value, C.value = p.value, L();
    }
    async function Y() {
      A == null || A.abort();
      const z = We.value;
      if (b.value = [], h.value = null, S.value = "", !z) return;
      const W = new AbortController(), j = ++E;
      A = W, w.value = !0;
      try {
        const Te = await ub(z.key, { signal: W.signal });
        if (W.signal.aborted || j !== E) return;
        b.value = Te, h.value = Te[0] || null;
      } catch (Te) {
        if (W.signal.aborted || j !== E) return;
        S.value = Ln(Te, t("imageGeneration.messages.loadModelsFailed")), n.showError(S.value);
      } finally {
        j === E && (w.value = !1, A = null);
      }
    }
    async function G() {
      var z;
      try {
        await u(!0), f.value && !l.value.some((W) => W.id === f.value) ? f.value = ((z = l.value[0]) == null ? void 0 : z.id) || null : await Y();
      } catch (W) {
        n.showError(Ln(W, t("imageGeneration.messages.loadKeysFailed")));
      }
    }
    function d() {
      var z;
      (z = te.value) == null || z.click();
    }
    function m(z) {
      return `${z.name}-${z.size}-${z.lastModified}`;
    }
    function R(z) {
      const W = [...oe.value], j = new Set(W.map((Re) => Re.id)), Te = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
      fe.value = "";
      for (const Re of Array.from(z)) {
        if (W.length >= 4) {
          fe.value = t("imageGeneration.messages.referenceImagesLimit");
          break;
        }
        if (!Te.has(Re.type.toLowerCase())) {
          fe.value = t("imageGeneration.messages.referenceImageType");
          continue;
        }
        if (Re.size > 20 * 1024 * 1024) {
          fe.value = t("imageGeneration.messages.referenceImageTooLarge");
          continue;
        }
        const bt = m(Re);
        j.has(bt) || (W.push({ id: bt, file: Re, previewUrl: URL.createObjectURL(Re) }), j.add(bt));
      }
      oe.value = W, V.value = !1;
    }
    function F(z) {
      const W = z.target;
      W.files && R(W.files), W.value = "";
    }
    function Z(z) {
      var W;
      (W = z.dataTransfer) != null && W.files && R(z.dataTransfer.files);
    }
    function q(z) {
      const W = oe.value.find((j) => j.id === z);
      W && URL.revokeObjectURL(W.previewUrl), oe.value = oe.value.filter((j) => j.id !== z), fe.value = "";
    }
    function k() {
      oe.value.forEach((z) => URL.revokeObjectURL(z.previewUrl)), oe.value = [], fe.value = "";
    }
    function $(z) {
      const W = String(z.mime_type || "").trim();
      if (W) return W;
      const j = String(z.output_format || "").trim().toLowerCase();
      return j === "webp" ? "image/webp" : j === "jpeg" || j === "jpg" ? "image/jpeg" : "image/png";
    }
    function ce(z) {
      const W = String(z.b64_json || "").trim();
      return W ? `data:${$(z)};base64,${W}` : String(z.url || "").trim();
    }
    function Se(z, W) {
      const j = W === "image/webp" ? "webp" : W === "image/jpeg" ? "jpg" : "png";
      return `online-image-${Date.now()}-${z + 1}.${j}`;
    }
    function $e() {
      const z = Number.parseInt(P.value, 10);
      return Number.isFinite(z) ? Math.min(Math.max(z, 1), 4) : 1;
    }
    async function rt() {
      const z = We.value;
      if (!z) return n.showError(t("imageGeneration.messages.chooseKey"));
      if (!h.value) return n.showError(t("imageGeneration.messages.chooseModel"));
      if (!y.value.trim()) return n.showError(t("imageGeneration.messages.choosePrompt"));
      O.value = !0;
      try {
        const W = await fb(z.key, {
          model: h.value,
          prompt: y.value.trim(),
          n: $e(),
          size: C.value,
          quality: String(D.value || ""),
          response_format: String(N.value || ""),
          referenceImages: oe.value.map((Re) => Re.file)
        }), j = (W.data || []).flatMap((Re, bt) => {
          const jt = ce(Re);
          if (!jt) return [];
          const gr = String(Re.revised_prompt || "").trim(), os = $(Re);
          return [{
            id: `${Date.now()}-${bt}-${Math.random().toString(36).slice(2, 8)}`,
            src: jt,
            prompt: gr || y.value.trim(),
            revisedPrompt: gr,
            mimeType: os,
            downloadName: Se(bt, os)
          }];
        });
        if (B.value = j, ee.value = W.model || h.value, U.value = j.length > 0 ? `${j.length} × ${ee.value}` : t("imageGeneration.messages.noImages"), j.length === 0) return n.showInfo(t("imageGeneration.messages.noImages"));
        const Te = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
          createdAt: Date.now(),
          model: ee.value,
          prompt: y.value.trim(),
          sizeLabel: ze.value,
          imageSize: C.value,
          images: j
        };
        try {
          await Jf(Te), Ee.value = [Te, ...Ee.value].slice(0, Vo);
        } catch (Re) {
          n.showInfo(Ln(Re, t("imageGeneration.messages.historySaveFailed")));
        }
        n.showSuccess(t("imageGeneration.messages.generated"));
      } catch (W) {
        n.showError(Ln(W, t("imageGeneration.messages.generateFailed")));
      } finally {
        O.value = !1;
      }
    }
    async function Je(z) {
      try {
        if (z.src.startsWith("data:")) {
          const Re = document.createElement("a");
          Re.href = z.src, Re.download = z.downloadName, document.body.append(Re), Re.click(), Re.remove();
          return;
        }
        const W = await fetch(z.src);
        if (!W.ok) throw new Error(`HTTP ${W.status}`);
        const j = URL.createObjectURL(await W.blob()), Te = document.createElement("a");
        Te.href = j, Te.download = z.downloadName, document.body.append(Te), Te.click(), Te.remove(), URL.revokeObjectURL(j);
      } catch (W) {
        n.showError(Ln(W, t("imageGeneration.messages.downloadFailed")));
      }
    }
    function Nt(z) {
      window.open(z.src, "_blank", "noopener,noreferrer");
    }
    function pr(z) {
      return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(new Date(z));
    }
    function st() {
      return typeof indexedDB > "u" ? Promise.reject(new Error("IndexedDB is not available")) : new Promise((z, W) => {
        const j = indexedDB.open(Yy, 1);
        j.onupgradeneeded = () => {
          j.result.objectStoreNames.contains(Ot) || j.result.createObjectStore(Ot, { keyPath: "id" });
        }, j.onsuccess = () => z(j.result), j.onerror = () => W(j.error || new Error("Failed to open IndexedDB"));
      });
    }
    function Et(z) {
      return new Promise((W, j) => {
        z.onsuccess = () => W(z.result), z.onerror = () => j(z.error || new Error("IndexedDB request failed"));
      });
    }
    function Hn(z) {
      return new Promise((W, j) => {
        z.oncomplete = () => W(), z.onerror = () => j(z.error || new Error("IndexedDB transaction failed")), z.onabort = () => j(z.error || new Error("IndexedDB transaction aborted"));
      });
    }
    async function ss() {
      const z = await st();
      try {
        return (await Et(z.transaction(Ot, "readonly").objectStore(Ot).getAll())).filter((j) => Array.isArray(j.images) && j.images.length > 0).sort((j, Te) => Te.createdAt - j.createdAt).slice(0, Vo);
      } finally {
        z.close();
      }
    }
    async function Jf(z) {
      const W = await st();
      try {
        const j = W.transaction(Ot, "readwrite");
        j.objectStore(Ot).put(z), await Hn(j);
        const Re = (await Et(W.transaction(Ot, "readonly").objectStore(Ot).getAll())).sort((bt, jt) => jt.createdAt - bt.createdAt).slice(Vo);
        if (Re.length > 0) {
          const bt = W.transaction(Ot, "readwrite");
          Re.forEach((jt) => bt.objectStore(Ot).delete(jt.id)), await Hn(bt);
        }
      } finally {
        W.close();
      }
    }
    async function Qf() {
      try {
        Ee.value = await ss();
      } catch (z) {
        n.showError(Ln(z, t("imageGeneration.messages.historyLoadFailed")));
      } finally {
        Me.value = !1;
      }
    }
    async function Zf() {
      if (window.confirm(t("imageGeneration.history.clearConfirm")))
        try {
          const z = await st(), W = z.transaction(Ot, "readwrite");
          W.objectStore(Ot).clear(), await Hn(W), z.close(), Ee.value = [];
        } catch (z) {
          n.showError(Ln(z, t("imageGeneration.messages.historyClearFailed")));
        }
    }
    return Tt(l, (z) => {
      z.length === 0 ? f.value = null : z.some((W) => W.id === f.value) || (f.value = z[0].id);
    }, { immediate: !0 }), Tt(f, () => {
      Y();
    }, { immediate: !0 }), fr(() => {
      u(), Qf(), r.isAdmin && o.fetch();
    }), xa(() => {
      E += 1, A == null || A.abort(), k();
    }), (z, W) => (ge(), we("div", b2, [
      H("div", y2, [
        H("section", v2, [
          H("a", {
            href: "/keys",
            class: "btn btn-secondary btn-specular w-full",
            "data-testid": "create-image-api-key",
            "data-online-image-action": "",
            onClick: W[0] || (W[0] = (j) => i(j, "/keys"))
          }, [
            ye(Ke, {
              name: "key",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.createImageApiKey")), 1)
          ]),
          H("div", E2, [
            H("label", w2, ue(le(t)("imageGeneration.controls.apiKey")), 1),
            H("div", S2, [
              ye(ps, {
                modelValue: f.value,
                "onUpdate:modelValue": W[1] || (W[1] = (j) => f.value = j),
                "data-testid": "api-key-select",
                "aria-label": le(t)("imageGeneration.controls.apiKey"),
                options: Xe.value,
                placeholder: le(t)("common.selectOption"),
                disabled: le(c) || le(l).length === 0,
                loading: le(c),
                "empty-text": le(c) ? le(t)("common.loading") : le(t)("common.noOptionsFound")
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular api-key-refresh",
                "data-testid": "refresh-keys",
                "data-online-image-action": "",
                disabled: le(c) || w.value,
                onClick: G
              }, [
                ye(Ke, {
                  name: "refresh",
                  size: "md",
                  class: Ge({ "animate-spin": le(c) || w.value })
                }, null, 8, ["class"]),
                H("span", null, ue(le(t)("imageGeneration.controls.refreshKeys")), 1)
              ], 8, T2)
            ]),
            H("p", A2, ue(le(t)("imageGeneration.hints.apiKey")), 1),
            pe.value ? (ge(), we("p", O2, ue(pe.value), 1)) : Ze("", !0)
          ]),
          H("div", C2, [
            H("div", null, [
              H("label", R2, ue(le(t)("imageGeneration.controls.modelSelection")), 1),
              ye(ps, {
                modelValue: h.value,
                "onUpdate:modelValue": W[2] || (W[2] = (j) => h.value = j),
                "data-testid": "model-select",
                "aria-label": le(t)("imageGeneration.controls.modelSelection"),
                options: K.value,
                placeholder: le(t)("common.selectOption"),
                disabled: !We.value || w.value || K.value.length === 0,
                loading: w.value,
                "empty-text": w.value ? le(t)("common.loading") : le(t)("common.noOptionsFound"),
                searchable: ""
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              Ce.value ? (ge(), we("p", {
                key: 0,
                class: Ge(["mt-1 text-xs", S.value ? "text-red-500" : "text-gray-500 dark:text-gray-400"])
              }, ue(Ce.value), 3)) : Ze("", !0)
            ]),
            H("div", null, [
              H("label", L2, ue(le(t)("imageGeneration.controls.count")), 1),
              zo(H("input", {
                "onUpdate:modelValue": W[3] || (W[3] = (j) => P.value = j),
                type: "number",
                min: "1",
                max: "4",
                class: "input w-full"
              }, null, 512), [
                [ea, P.value]
              ])
            ])
          ]),
          H("div", I2, [
            H("label", k2, ue(le(t)("imageGeneration.controls.imageSize")), 1),
            H("button", {
              type: "button",
              "data-testid": "image-size-trigger",
              class: "btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left",
              "data-online-image-action": "",
              "aria-label": le(t)("imageGeneration.sizeDialog.title"),
              onClick: x
            }, [
              H("span", P2, ue(ze.value), 1),
              ye(Ke, {
                name: "chevronDown",
                size: "sm",
                class: "flex-shrink-0"
              })
            ], 8, x2)
          ]),
          H("div", N2, [
            H("div", null, [
              H("label", M2, ue(le(t)("imageGeneration.controls.quality")), 1),
              ye(ps, {
                modelValue: D.value,
                "onUpdate:modelValue": W[4] || (W[4] = (j) => D.value = j),
                options: re,
                "data-testid": "quality-select"
              }, null, 8, ["modelValue"])
            ]),
            H("div", null, [
              H("label", D2, ue(le(t)("imageGeneration.controls.responseFormat")), 1),
              ye(ps, {
                modelValue: N.value,
                "onUpdate:modelValue": W[5] || (W[5] = (j) => N.value = j),
                options: ae,
                "data-testid": "response-format-select"
              }, null, 8, ["modelValue"])
            ])
          ]),
          H("div", F2, [
            H("div", U2, [
              H("label", $2, ue(le(t)("imageGeneration.controls.referenceImages")), 1),
              oe.value.length > 0 ? (ge(), we("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm",
                "data-online-image-action": "",
                onClick: k
              }, ue(le(t)("imageGeneration.controls.clearReferenceImages")), 1)) : Ze("", !0)
            ]),
            H("input", {
              id: "reference-image-input",
              ref_key: "referenceInput",
              ref: te,
              type: "file",
              accept: "image/png,image/jpeg,image/webp",
              multiple: "",
              class: "sr-only",
              onChange: F
            }, null, 544),
            H("div", {
              class: Ge(["rounded-lg border-2 border-dashed p-4 transition-colors", V.value ? "border-gray-600 bg-gray-100 dark:border-gray-300 dark:bg-dark-700" : "border-gray-300 bg-gray-50 hover:border-gray-500 dark:border-dark-600 dark:bg-dark-900/50 dark:hover:border-gray-400"]),
              role: "button",
              tabindex: "0",
              onClick: d,
              onKeydown: [
                xr(Qe(d, ["prevent"]), ["enter"]),
                xr(Qe(d, ["prevent"]), ["space"])
              ],
              onDragenter: W[6] || (W[6] = Qe((j) => V.value = !0, ["prevent"])),
              onDragover: W[7] || (W[7] = Qe((j) => V.value = !0, ["prevent"])),
              onDragleave: W[8] || (W[8] = Qe((j) => V.value = !1, ["prevent"])),
              onDrop: Qe(Z, ["prevent"])
            }, [
              oe.value.length > 0 ? (ge(), we("div", V2, [
                (ge(!0), we(He, null, dn(oe.value, (j) => (ge(), we("div", {
                  key: j.id,
                  class: "group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                }, [
                  H("img", {
                    src: j.previewUrl,
                    alt: j.file.name,
                    class: "h-full w-full object-cover"
                  }, null, 8, j2),
                  H("button", {
                    type: "button",
                    class: "absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
                    "aria-label": le(t)("imageGeneration.controls.removeReferenceImage"),
                    onClick: Qe((Te) => q(j.id), ["stop"])
                  }, [
                    ye(Ke, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, B2)
                ]))), 128))
              ])) : Ze("", !0),
              H("div", W2, [
                H("div", z2, [
                  ye(Ke, {
                    name: "upload",
                    size: "md"
                  })
                ]),
                H("div", K2, [
                  H("p", G2, ue(le(t)("imageGeneration.controls.referenceImagesDrop")), 1),
                  H("p", q2, ue(le(t)("imageGeneration.hints.referenceImages")), 1)
                ]),
                H("button", {
                  type: "button",
                  class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                  "data-online-image-action": "",
                  onClick: Qe(d, ["stop"])
                }, [
                  ye(Ke, {
                    name: "upload",
                    size: "sm"
                  }),
                  qn(" " + ue(le(t)("imageGeneration.controls.chooseReferenceImages")), 1)
                ])
              ])
            ], 42, H2),
            oe.value.length > 0 ? (ge(), we("p", Y2, ue(le(t)("imageGeneration.hints.referenceImagesSelected", { count: oe.value.length })), 1)) : Ze("", !0),
            fe.value ? (ge(), we("p", X2, ue(fe.value), 1)) : Ze("", !0)
          ]),
          H("a", {
            href: a.value || void 0,
            class: Ge(["btn btn-secondary btn-specular w-full", { "pointer-events-none opacity-50": !a.value }]),
            "data-testid": "image-tutorial-link",
            "data-online-image-action": "",
            "aria-disabled": !a.value,
            tabindex: a.value ? void 0 : -1,
            title: a.value ? void 0 : le(t)("imageGeneration.hints.imageTutorialUnavailable"),
            onClick: W[9] || (W[9] = (j) => i(j, a.value))
          }, [
            ye(Ke, {
              name: "book",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.imageTutorial")), 1)
          ], 10, J2)
        ]),
        H("section", Q2, [
          H("div", Z2, [
            H("div", null, [
              H("label", ey, ue(le(t)("imageGeneration.controls.prompt")), 1),
              zo(H("textarea", {
                "onUpdate:modelValue": W[10] || (W[10] = (j) => y.value = j),
                rows: "5",
                class: "input min-h-32 w-full resize-y",
                placeholder: le(t)("imageGeneration.controls.prompt")
              }, null, 8, ty), [
                [ea, y.value]
              ]),
              H("p", ny, ue(le(t)("imageGeneration.hints.responseFormat")), 1)
            ]),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular w-full",
              "data-testid": "start-generation",
              "data-online-image-action": "",
              disabled: g.value,
              onClick: rt
            }, [
              ye(Ke, {
                name: "sparkles",
                size: "md",
                class: Ge({ "animate-pulse": O.value })
              }, null, 8, ["class"]),
              H("span", null, ue(O.value ? le(t)("imageGeneration.controls.generating") : le(t)("imageGeneration.controls.generate")), 1)
            ], 8, ry)
          ]),
          H("div", sy, [
            H("div", oy, [
              H("div", null, [
                H("h2", ay, ue(le(t)("imageGeneration.results.title")), 1),
                H("p", iy, ue(U.value), 1)
              ]),
              ee.value ? (ge(), we("span", ly, ue(ee.value), 1)) : Ze("", !0)
            ]),
            B.value.length === 0 ? (ge(), we("div", cy, [
              ye(Ke, {
                name: "sparkles",
                size: "xl",
                class: "mb-4 text-gray-400 dark:text-dark-500"
              }),
              H("p", uy, ue(le(t)("imageGeneration.results.empty")), 1),
              H("p", fy, ue(le(t)("imageGeneration.results.emptyHint")), 1)
            ])) : (ge(), we("div", dy, [
              (ge(!0), we(He, null, dn(B.value, (j) => (ge(), we("article", {
                key: j.id,
                class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              }, [
                H("div", my, [
                  H("img", {
                    src: j.src,
                    alt: j.prompt,
                    class: "aspect-square w-full object-contain"
                  }, null, 8, hy)
                ]),
                H("div", py, [
                  H("p", gy, ue(j.prompt), 1),
                  j.revisedPrompt ? (ge(), we("p", _y, ue(le(t)("imageGeneration.results.revisedPrompt")) + ": " + ue(j.revisedPrompt), 1)) : Ze("", !0),
                  H("div", by, [
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Te) => Je(j)
                    }, [
                      ye(Ke, {
                        name: "download",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.download")), 1)
                    ], 8, yy),
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Te) => Nt(j)
                    }, [
                      ye(Ke, {
                        name: "externalLink",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.open")), 1)
                    ], 8, vy)
                  ])
                ])
              ]))), 128))
            ]))
          ]),
          H("div", Ey, [
            H("div", wy, [
              H("div", null, [
                H("h2", Sy, ue(le(t)("imageGeneration.history.title")), 1),
                H("p", Ty, ue(le(t)("imageGeneration.history.hint")), 1)
              ]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                "data-online-image-action": "",
                disabled: Ee.value.length === 0 || Me.value,
                onClick: Zf
              }, [
                ye(Ke, {
                  name: "trash",
                  size: "sm"
                }),
                qn(" " + ue(le(t)("imageGeneration.history.clear")), 1)
              ], 8, Ay)
            ]),
            Me.value ? (ge(), we("div", Oy, ue(le(t)("common.loading")), 1)) : Ee.value.length === 0 ? (ge(), we("div", Cy, ue(le(t)("imageGeneration.history.empty")), 1)) : (ge(), we("div", Ry, [
              (ge(!0), we(He, null, dn(Ee.value, (j) => (ge(), we("article", {
                key: j.id,
                class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700"
              }, [
                H("div", Ly, [
                  H("div", Iy, [
                    H("span", null, ue(pr(j.createdAt)), 1),
                    W[11] || (W[11] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.model), 1),
                    W[12] || (W[12] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.sizeLabel), 1),
                    W[13] || (W[13] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.imageSize), 1)
                  ]),
                  H("p", ky, ue(j.prompt), 1)
                ]),
                H("div", xy, [
                  (ge(!0), we(He, null, dn(j.images, (Te) => (ge(), we("div", {
                    key: Te.id,
                    class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                  }, [
                    H("img", {
                      src: Te.src,
                      alt: Te.prompt,
                      class: "aspect-square w-full object-contain",
                      loading: "lazy"
                    }, null, 8, Py),
                    H("div", Ny, [
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.download"),
                        onClick: (Re) => Je(Te)
                      }, [
                        ye(Ke, {
                          name: "download",
                          size: "sm"
                        })
                      ], 8, My),
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.open"),
                        onClick: (Re) => Nt(Te)
                      }, [
                        ye(Ke, {
                          name: "externalLink",
                          size: "sm"
                        })
                      ], 8, Dy)
                    ])
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ])
      ]),
      ye(J1, {
        show: X.value,
        title: le(t)("imageGeneration.sizeDialog.title"),
        width: "normal",
        "data-testid": "image-size-dialog",
        onClose: L
      }, {
        footer: sr(() => [
          H("div", qy, [
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
        default: sr(() => [
          H("div", Fy, [
            H("p", Uy, ue(le(t)("imageGeneration.sizeDialog.current", { size: ze.value })), 1),
            H("div", null, [
              H("h4", $y, ue(le(t)("imageGeneration.sizeDialog.resolution")), 1),
              H("div", Hy, [
                (ge(), we(He, null, dn(xe, (j) => H("button", {
                  key: j,
                  type: "button",
                  class: Ge(["btn btn-specular", ie.value === j ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": ie.value === j,
                  onClick: (Te) => ie.value = j
                }, ue(j), 11, Vy)), 64))
              ])
            ]),
            H("div", null, [
              H("h4", jy, ue(le(t)("imageGeneration.sizeDialog.aspectRatio")), 1),
              H("div", By, [
                (ge(), we(He, null, dn(he, (j) => H("button", {
                  key: j.value,
                  type: "button",
                  class: Ge(["btn btn-specular min-h-[72px] flex-col px-1.5 text-xs", Ae.value === j.value ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": Ae.value === j.value,
                  onClick: (Te) => Ae.value = j.value
                }, [
                  H("span", {
                    class: Ge(["block rounded-[3px] border border-current", j.previewClass])
                  }, null, 2),
                  H("span", null, ue(j.label), 1)
                ], 10, Wy)), 64))
              ])
            ]),
            H("div", zy, [
              H("p", Ky, ue(le(t)("imageGeneration.sizeDialog.output")), 1),
              H("p", Gy, ue(p.value), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), Jy = /* @__PURE__ */ si(Xy, [["__scopeId", "data-v-15d7803a"]]);
async function bv(e) {
  await Yg();
  const t = Rh(), n = ri(t), r = bo(t);
  n.initFromInjectedConfig(), await n.fetchPublicSettings(!0), r.hydrateAuthSnapshot(e.runMode);
  const s = Ah(/* @__PURE__ */ rn({
    name: "ZeroOneOnlineImageRoot",
    setup: () => () => [Wr(Jy), Wr(q1)]
  }));
  s.use(t), s.use(nr);
  let a = !1;
  async function i(l) {
    r.setRunModeSnapshot(l.runMode), nr.global.locale.value !== l.locale && (await af(l.locale), nr.global.locale.value = l.locale);
  }
  return await i(e), {
    mount(l) {
      a = !0;
      try {
        s.mount(l);
      } catch (c) {
        throw s.unmount(), a = !1, c;
      }
    },
    unmount() {
      a && s.unmount(), a = !1;
    },
    syncState: i
  };
}
export {
  bv as prepareOnlineImageSurface
};
