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
const Ne = {}, Xn = [], $t = () => {
}, Zl = () => !1, zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ba = (e) => e.startsWith("onUpdate:"), et = Object.assign, ya = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zf = Object.prototype.hasOwnProperty, ke = (e, t) => Zf.call(e, t), he = Array.isArray, Jn = (e) => Ks(e) === "[object Map]", ec = (e) => Ks(e) === "[object Set]", ve = (e) => typeof e == "function", Ge = (e) => typeof e == "string", nn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", tc = (e) => (Fe(e) || ve(e)) && ve(e.then) && ve(e.catch), nc = Object.prototype.toString, Ks = (e) => nc.call(e), ed = (e) => Ks(e).slice(8, -1), rc = (e) => Ks(e) === "[object Object]", Gs = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tr = /* @__PURE__ */ _a(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, td = /-\w/g, _n = qs(
  (e) => e.replace(td, (t) => t.slice(1).toUpperCase())
), nd = /\B([A-Z])/g, vn = qs(
  (e) => e.replace(nd, "-$1").toLowerCase()
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
}, rd = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const Ys = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ur(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ge(r) ? id(r) : ur(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Ge(e) || Fe(e))
    return e;
}
const sd = /;(?![^(]*\))/g, od = /:([^]+)/, ad = /\/\*[^]*?\*\//g;
function id(e) {
  const t = {};
  return e.replace(ad, "").split(sd).forEach((n) => {
    if (n) {
      const r = n.split(od);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ke(e[n]);
      r && (t += r + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ld = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cd = /* @__PURE__ */ _a(ld);
function ac(e) {
  return !!e || e === "";
}
const ic = (e) => !!(e && e.__v_isRef === !0), ue = (e) => Ge(e) ? e : e == null ? "" : he(e) || Fe(e) && (e.toString === nc || !ve(e.toString)) ? ic(e) ? ue(e.value) : JSON.stringify(e, lc, 2) : String(e), lc = (e, t) => ic(t) ? lc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[vo(r, s) + " =>"] = o, n),
    {}
  )
} : ec(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vo(n))
} : nn(t) ? vo(t) : Fe(t) && !he(t) && !rc(t) ? String(t) : t, vo = (e, t = "") => {
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
let Me;
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
    const t = Me, n = It;
    Me = this, It = !0;
    try {
      return this.fn();
    } finally {
      gc(this), Me = t, It = n, this.flags &= -3;
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
let mc = 0, Ar, Or;
function hc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Or, Or = e;
    return;
  }
  e.next = Ar, Ar = e;
}
function wa() {
  mc++;
}
function Sa() {
  if (--mc > 0)
    return;
  if (Or) {
    let t = Or;
    for (Or = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ar; ) {
    let t = Ar;
    for (Ar = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = o), Ta(r), ud(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Mr) || (e.globalVersion = Mr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !jo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Me, r = It;
  Me = e, It = !0;
  try {
    pc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pn(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = n, It = r, gc(e), e.flags &= -3;
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
function ud(e) {
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
    const n = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = n;
    }
  }
}
let Mr = 0;
class fd {
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
    if (!Me || !It || Me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      n = this.activeLink = new fd(Me, this), Me.deps ? (n.prevDep = Me.depsTail, Me.depsTail.nextDep = n, Me.depsTail = n) : Me.deps = Me.depsTail = n, yc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Me.depsTail, n.nextDep = void 0, Me.depsTail.nextDep = n, Me.depsTail = n, Me.deps === n && (Me.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Mr++, this.notify(t);
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
const Rs = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ Symbol(
  ""
), Bo = /* @__PURE__ */ Symbol(
  ""
), Dr = /* @__PURE__ */ Symbol(
  ""
);
function ct(e, t, n) {
  if (It && Me) {
    let r = Rs.get(e);
    r || Rs.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Aa()), o.map = r, o.key = n), o.track();
  }
}
function qt(e, t, n, r, o, s) {
  const a = Rs.get(e);
  if (!a) {
    Mr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (wa(), t === "clear")
    a.forEach(i);
  else {
    const l = he(e), u = l && Gs(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Dr || !nn(h) && h >= c) && i(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), u && i(a.get(Dr)), t) {
        case "add":
          l ? u && i(a.get("length")) : (i(a.get(Mn)), Jn(e) && i(a.get(Bo)));
          break;
        case "delete":
          l || (i(a.get(Mn)), Jn(e) && i(a.get(Bo)));
          break;
        case "set":
          Jn(e) && i(a.get(Mn));
          break;
      }
  }
  Sa();
}
function dd(e, t) {
  const n = Rs.get(e);
  return n && n.get(t);
}
function Vn(e) {
  const t = Re(e);
  return t === e ? t : (ct(t, "iterate", Dr), St(e) ? t : t.map(kt));
}
function Xs(e) {
  return ct(e = Re(e), "iterate", Dr), e;
}
function un(e, t) {
  return en(e) ? Jt(e) ? rr(kt(t)) : rr(t) : kt(t);
}
const md = {
  __proto__: null,
  [Symbol.iterator]() {
    return wo(this, Symbol.iterator, (e) => un(this, e));
  },
  concat(...e) {
    return Vn(this).concat(
      ...e.map((t) => he(t) ? Vn(t) : t)
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
    return gr(this, "pop");
  },
  push(...e) {
    return gr(this, "push", e);
  },
  reduce(e, ...t) {
    return ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ii(this, "reduceRight", e, t);
  },
  shift() {
    return gr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gr(this, "splice", e);
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
    return gr(this, "unshift", e);
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
const hd = Array.prototype;
function Bt(e, t, n, r, o, s) {
  const a = Xs(e), i = a !== e && !St(e), l = a[t];
  if (l !== hd[t]) {
    const f = l.apply(e, s);
    return i ? kt(f) : f;
  }
  let u = n;
  a !== e && (i ? u = function(f, h) {
    return n.call(this, un(e, f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const c = l.call(a, u, r);
  return i && o ? o(c) : c;
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
  const r = Re(e);
  ct(r, "iterate", Dr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Qs(n[0]) ? (n[0] = Re(n[0]), r[t](...n)) : o;
}
function gr(e, t, n = []) {
  Qt(), wa();
  const r = Re(e)[t].apply(e, n);
  return Sa(), Zt(), r;
}
const pd = /* @__PURE__ */ _a("__proto__,__v_isRef,__isVue"), vc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nn)
);
function gd(e) {
  nn(e) || (e = String(e));
  const t = Re(this);
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
      return r === (o ? s ? Od : Ac : s ? Tc : Sc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = he(t);
    if (!o) {
      let l;
      if (a && (l = md[n]))
        return l;
      if (n === "hasOwnProperty")
        return gd;
    }
    const i = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Be(t) ? t : r
    );
    if ((nn(n) ? vc.has(n) : pd(n)) || (o || ct(t, "get", n), s))
      return i;
    if (Be(i)) {
      const l = a && Gs(n) ? i : i.value;
      return o && Fe(l) ? Fr(l) : l;
    }
    return Fe(i) ? o ? Fr(i) : Js(i) : i;
  }
}
class wc extends Ec {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const a = he(t) && Gs(n);
    if (!this._isShallow) {
      const u = en(s);
      if (!St(r) && !en(r) && (s = Re(s), r = Re(r)), !a && Be(s) && !Be(r))
        return u || (s.value = r), !0;
    }
    const i = a ? Number(n) < t.length : ke(t, n), l = Reflect.set(
      t,
      n,
      r,
      Be(t) ? t : o
    );
    return t === Re(o) && (i ? pn(r, s) && qt(t, "set", n, r) : qt(t, "add", n, r)), l;
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
      he(t) ? "length" : Mn
    ), Reflect.ownKeys(t);
  }
}
class _d extends Ec {
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
const bd = /* @__PURE__ */ new wc(), yd = /* @__PURE__ */ new _d(), vd = /* @__PURE__ */ new wc(!0);
const Wo = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function Ed(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Re(o), a = Jn(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? Wo : t ? rr : kt;
    return !t && ct(
      s,
      "iterate",
      l ? Bo : Mn
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
function is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wd(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, a = Re(s), i = Re(o);
      e || (pn(o, i) && ct(a, "get", o), ct(a, "get", i));
      const { has: l } = as(a), u = t ? Wo : e ? rr : kt;
      if (l.call(a, o))
        return u(s.get(o));
      if (l.call(a, i))
        return u(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ct(Re(o), "iterate", Mn), o.size;
    },
    has(o) {
      const s = this.__v_raw, a = Re(s), i = Re(o);
      return e || (pn(o, i) && ct(a, "has", o), ct(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = Re(i), u = t ? Wo : e ? rr : kt;
      return !e && ct(l, "iterate", Mn), i.forEach((c, f) => o.call(s, u(c), u(f), a));
    }
  };
  return et(
    n,
    e ? {
      add: is("add"),
      set: is("set"),
      delete: is("delete"),
      clear: is("clear")
    } : {
      add(o) {
        !t && !St(o) && !en(o) && (o = Re(o));
        const s = Re(this);
        return as(s).has.call(s, o) || (s.add(o), qt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !St(s) && !en(s) && (s = Re(s));
        const a = Re(this), { has: i, get: l } = as(a);
        let u = i.call(a, o);
        u || (o = Re(o), u = i.call(a, o));
        const c = l.call(a, o);
        return a.set(o, s), u ? pn(s, c) && qt(a, "set", o, s) : qt(a, "add", o, s), this;
      },
      delete(o) {
        const s = Re(this), { has: a, get: i } = as(s);
        let l = a.call(s, o);
        l || (o = Re(o), l = a.call(s, o)), i && i.call(s, o);
        const u = s.delete(o);
        return l && qt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = Re(this), s = o.size !== 0, a = o.clear();
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
    n[o] = Ed(o, e, t);
  }), n;
}
function Oa(e, t) {
  const n = wd(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ke(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Sd = {
  get: /* @__PURE__ */ Oa(!1, !1)
}, Td = {
  get: /* @__PURE__ */ Oa(!1, !0)
}, Ad = {
  get: /* @__PURE__ */ Oa(!0, !1)
};
const Sc = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), Od = /* @__PURE__ */ new WeakMap();
function Cd(e) {
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
function Rd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cd(ed(e));
}
function Js(e) {
  return en(e) ? e : Ca(
    e,
    !1,
    bd,
    Sd,
    Sc
  );
}
function Ld(e) {
  return Ca(
    e,
    !1,
    vd,
    Td,
    Tc
  );
}
function Fr(e) {
  return Ca(
    e,
    !0,
    yd,
    Ad,
    Ac
  );
}
function Ca(e, t, n, r, o) {
  if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Rd(e);
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
function Re(e) {
  const t = e && e.__v_raw;
  return t ? Re(t) : e;
}
function Ra(e) {
  return !ke(e, "__v_skip") && Object.isExtensible(e) && oc(e, "__v_skip", !0), e;
}
const kt = (e) => Fe(e) ? Js(e) : e, rr = (e) => Fe(e) ? Fr(e) : e;
function Be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Q(e) {
  return Cc(e, !1);
}
function Oc(e) {
  return Cc(e, !0);
}
function Cc(e, t) {
  return Be(e) ? e : new Id(e, t);
}
class Id {
  constructor(t, n) {
    this.dep = new Aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Re(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || St(t) || en(t);
    t = r ? t : Re(t), pn(t, n) && (this._rawValue = t, this._value = r ? t : kt(t), this.dep.trigger());
  }
}
function le(e) {
  return Be(e) ? e.value : e;
}
const kd = {
  get: (e, t, n) => t === "__v_raw" ? e : le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Be(o) && !Be(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Rc(e) {
  return Jt(e) ? e : new Proxy(e, kd);
}
function xd(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Nd(e, n);
  return t;
}
class Pd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Re(t);
    let o = !0, s = t;
    if (!he(t) || !Gs(String(n)))
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
    if (this._shallow && Be(this._raw[this._key])) {
      const n = this._object[this._key];
      if (Be(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return dd(this._raw, this._key);
  }
}
function Nd(e, t, n) {
  return new Pd(e, t, n);
}
class Md {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Mr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
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
function Dd(e, t, n = !1) {
  let r, o;
  return ve(e) ? r = e : (r = e.get, o = e.set), new Md(r, o, n);
}
const ls = {}, Ls = /* @__PURE__ */ new WeakMap();
let kn;
function Fd(e, t = !1, n = kn) {
  if (n) {
    let r = Ls.get(n);
    r || Ls.set(n, r = []), r.push(e);
  }
}
function Ud(e, t, n = Ne) {
  const { immediate: r, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = n, u = (v) => o ? v : St(v) || o === !1 || o === 0 ? Yt(v, 1) : Yt(v);
  let c, f, h, g, S = !1, w = !1;
  if (Be(e) ? (f = () => e.value, S = St(e)) : Jt(e) ? (f = () => u(e), S = !0) : he(e) ? (w = !0, S = e.some((v) => Jt(v) || St(v)), f = () => e.map((v) => {
    if (Be(v))
      return v.value;
    if (Jt(v))
      return u(v);
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
    const v = kn;
    kn = c;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      kn = v;
    }
  } : f = $t, t && o) {
    const v = f, I = o === !0 ? 1 / 0 : o;
    f = () => Yt(v(), I);
  }
  const A = uc(), E = () => {
    c.stop(), A && A.active && ya(A.effects, c);
  };
  if (s && t) {
    const v = t;
    t = (...I) => {
      v(...I), E();
    };
  }
  let P = w ? new Array(e.length).fill(ls) : ls;
  const y = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const I = c.run();
        if (o || S || (w ? I.some((O, D) => pn(O, P[D])) : pn(I, P))) {
          h && h();
          const O = kn;
          kn = c;
          try {
            const D = [
              I,
              // pass undefined as the old value when it's changed for the first time
              P === ls ? void 0 : w && P[0] === ls ? [] : P,
              g
            ];
            P = I, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            kn = O;
          }
        }
      } else
        c.run();
  };
  return i && i(y), c = new dc(f), c.scheduler = a ? () => a(y, !1) : y, g = (v) => Fd(v, !1, c), h = c.onStop = () => {
    const v = Ls.get(c);
    if (v) {
      if (l)
        l(v, 4);
      else
        for (const I of v) I();
      Ls.delete(c);
    }
  }, t ? r ? y(!0) : P = c.run() : a ? a(y.bind(null, !0), !0) : c.run(), E.pause = c.pause.bind(c), E.resume = c.resume.bind(c), E.stop = E, E;
}
function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Be(e))
    Yt(e.value, t, n);
  else if (he(e))
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
function qr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Zs(o, t, n);
  }
}
function xt(e, t, n, r) {
  if (ve(e)) {
    const o = qr(e, t, n, r);
    return o && tc(o) && o.catch((s) => {
      Zs(s, t, n);
    }), o;
  }
  if (he(e)) {
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
      Qt(), qr(s, null, 10, [
        e,
        l,
        u
      ]), Zt();
      return;
    }
  }
  $d(e, n, o, r, a);
}
function $d(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const gt = [];
let Dt = -1;
const Qn = [];
let fn = null, zn = 0;
const Lc = /* @__PURE__ */ Promise.resolve();
let Is = null;
function Zn(e) {
  const t = Is || Lc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hd(e) {
  let t = Dt + 1, n = gt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = gt[r], s = Ur(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function La(e) {
  if (!(e.flags & 1)) {
    const t = Ur(e), n = gt[gt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ur(n) ? gt.push(e) : gt.splice(Hd(t), 0, e), e.flags |= 1, Ic();
  }
}
function Ic() {
  Is || (Is = Lc.then(xc));
}
function Vd(e) {
  he(e) ? Qn.push(...e) : fn && e.id === -1 ? fn.splice(zn + 1, 0, e) : e.flags & 1 || (Qn.push(e), e.flags |= 1), Ic();
}
function li(e, t, n = Dt + 1) {
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
      (n, r) => Ur(n) - Ur(r)
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
const Ur = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xc(e) {
  try {
    for (Dt = 0; Dt < gt.length; Dt++) {
      const t = gt[Dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Dt < gt.length; Dt++) {
      const t = gt[Dt];
      t && (t.flags &= -2);
    }
    Dt = -1, gt.length = 0, kc(), Is = null, (gt.length || Qn.length) && xc();
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
function An(e, t, n, r) {
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
function jd(e, t) {
  if (_t) {
    let n = _t.provides;
    const r = _t.parent && _t.parent.provides;
    r === n && (n = _t.provides = Object.create(r)), n[e] = t;
  }
}
function er(e, t, n = !1) {
  const r = tn();
  if (r || Dn) {
    let o = Dn ? Dn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(r && r.proxy) : t;
  }
}
function Bd() {
  return !!(tn() || Dn);
}
const Wd = /* @__PURE__ */ Symbol.for("v-scx"), zd = () => er(Wd);
function Tt(e, t, n) {
  return Nc(e, t, n);
}
function Nc(e, t, n = Ne) {
  const { immediate: r, deep: o, flush: s, once: a } = n, i = et({}, n), l = t && r || !t && s !== "post";
  let u;
  if (jr) {
    if (s === "sync") {
      const g = zd();
      u = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = $t, g.resume = $t, g.pause = $t, g;
    }
  }
  const c = _t;
  i.call = (g, S, w) => xt(g, c, S, w);
  let f = !1;
  s === "post" ? i.scheduler = (g) => {
    pt(g, c && c.suspense);
  } : s !== "sync" && (f = !0, i.scheduler = (g, S) => {
    S ? g() : La(g);
  }), i.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const h = Ud(e, t, i);
  return jr && (u ? u.push(h) : l && h()), h;
}
function Kd(e, t, n) {
  const r = this.proxy, o = Ge(e) ? e.includes(".") ? Mc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ve(t) ? s = t : (s = t.handler, n = t);
  const a = Jr(this), i = Nc(o, s.bind(r), n);
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
const Dc = /* @__PURE__ */ Symbol("_vte"), Fc = (e) => e.__isTeleport, Cr = (e) => e && (e.disabled || e.disabled === ""), ci = (e) => e && (e.defer || e.defer === ""), ui = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ko = (e, t) => {
  const n = e && e.to;
  return Ge(n) ? t ? t(n) : null : n;
}, Uc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, i, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: h,
      o: { insert: g, querySelector: S, createText: w, createComment: A }
    } = u, E = Cr(t.props);
    let { shapeFlag: P, children: y, dynamicChildren: v } = t;
    if (e == null) {
      const I = t.el = w(""), O = t.anchor = w("");
      g(I, n, r), g(O, n, r);
      const D = (C, B) => {
        P & 16 && c(
          y,
          C,
          B,
          o,
          s,
          a,
          i,
          l
        );
      }, N = () => {
        const C = t.target = Ko(t.props, S), B = $c(C, t, w, g);
        C && (a !== "svg" && ui(C) ? a = "svg" : a !== "mathml" && fi(C) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(C), E || (D(C, B), Es(t, !1)));
      };
      E && (D(n, O), Es(t, !0)), ci(t.props) ? (t.el.__isMounted = !1, pt(() => {
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
            u
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const I = t.anchor = e.anchor, O = t.target = e.target, D = t.targetAnchor = e.targetAnchor, N = Cr(e.props), C = N ? n : O, B = N ? I : D;
      if (a === "svg" || ui(O) ? a = "svg" : (a === "mathml" || fi(O)) && (a = "mathml"), v ? (h(
        e.dynamicChildren,
        v,
        C,
        o,
        s,
        a,
        i
      ), Ma(e, t, !0)) : l || f(
        e,
        t,
        C,
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
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = t.target = Ko(
          t.props,
          S
        );
        te && cs(
          t,
          te,
          null,
          u,
          0
        );
      } else N && cs(
        t,
        O,
        D,
        u,
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
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: h
    } = e;
    if (f && (o(u), o(c)), s && o(l), a & 16) {
      const g = s || !Cr(h);
      for (let S = 0; S < i.length; S++) {
        const w = i[S];
        r(
          w,
          t,
          n,
          g,
          !!w.dynamicChildren
        );
      }
    }
  },
  move: cs,
  hydrate: Gd
};
function cs(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(a, t, n), (!f || Cr(c)) && l & 16)
    for (let h = 0; h < u.length; h++)
      o(
        u[h],
        t,
        n,
        2
      );
  f && r(i, t, n);
}
function Gd(e, t, n, r, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: u, createText: c }
}, f) {
  function h(w, A, E, P) {
    A.anchor = f(
      a(w),
      A,
      i(w),
      n,
      r,
      o,
      s
    ), A.targetStart = E, A.targetAnchor = P;
  }
  const g = t.target = Ko(
    t.props,
    l
  ), S = Cr(t.props);
  if (g) {
    const w = g._lpa || g.firstChild;
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
        let A = w;
        for (; A; ) {
          if (A && A.nodeType === 8) {
            if (A.data === "teleport start anchor")
              t.targetStart = A;
            else if (A.data === "teleport anchor") {
              t.targetAnchor = A, g._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          A = a(A);
        }
        t.targetAnchor || $c(g, t, c, u), f(
          w && a(w),
          t,
          g,
          n,
          r,
          o,
          s
        );
      }
    Es(t, S);
  } else S && t.shapeFlag & 16 && h(e, t, e, a(e));
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
}, qd = {
  name: "BaseTransition",
  props: Vc,
  setup(e, { slots: t }) {
    const n = tn(), r = Hc();
    return () => {
      const o = t.default && ka(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Bc(o), a = Re(e), { mode: i } = a;
      if (r.isLeaving)
        return To(s);
      const l = di(s);
      if (!l)
        return To(s);
      let u = $r(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== ut && Un(l, u);
      let c = n.subTree && di(n.subTree);
      if (c && c.type !== ut && !xn(c, l) && jc(n).type !== ut) {
        let f = $r(
          c,
          a,
          r,
          n
        );
        if (Un(c, f), i === "out-in" && l.type !== ut)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, To(s);
        i === "in-out" && l.type !== ut ? f.delayLeave = (h, g, S) => {
          const w = Wc(
            r,
            c
          );
          w[String(c.key)] = c, h[Gt] = () => {
            g(), h[Gt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            S(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
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
const Yd = qd;
function Wc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function $r(e, t, n, r, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: g,
    onAfterLeave: S,
    onLeaveCancelled: w,
    onBeforeAppear: A,
    onAppear: E,
    onAfterAppear: P,
    onAppearCancelled: y
  } = t, v = String(e.key), I = Wc(n, e), O = (C, B) => {
    C && xt(
      C,
      r,
      9,
      B
    );
  }, D = (C, B) => {
    const te = B[1];
    O(C, B), he(C) ? C.every((U) => U.length <= 1) && te() : C.length <= 1 && te();
  }, N = {
    mode: a,
    persisted: i,
    beforeEnter(C) {
      let B = l;
      if (!n.isMounted)
        if (s)
          B = A || l;
        else
          return;
      C[Gt] && C[Gt](
        !0
        /* cancelled */
      );
      const te = I[v];
      te && xn(e, te) && te.el[Gt] && te.el[Gt](), O(B, [C]);
    },
    enter(C) {
      let B = u, te = c, U = f;
      if (!n.isMounted)
        if (s)
          B = E || u, te = P || c, U = y || f;
        else
          return;
      let J = !1;
      const ie = C[us] = (de) => {
        J || (J = !0, de ? O(U, [C]) : O(te, [C]), N.delayedLeave && N.delayedLeave(), C[us] = void 0);
      };
      B ? D(B, [C, ie]) : ie();
    },
    leave(C, B) {
      const te = String(e.key);
      if (C[us] && C[us](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      O(h, [C]);
      let U = !1;
      const J = C[Gt] = (ie) => {
        U || (U = !0, B(), ie ? O(w, [C]) : O(S, [C]), C[Gt] = void 0, I[te] === e && delete I[te]);
      };
      I[te] = e, g ? D(g, [C, J]) : J();
    },
    clone(C) {
      const B = $r(
        C,
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
function Un(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Un(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
    et({ name: e.name }, t, { setup: e })
  ) : e;
}
function zc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xs = /* @__PURE__ */ new WeakMap();
function Rr(e, t, n, r, o = !1) {
  if (he(e)) {
    e.forEach(
      (S, w) => Rr(
        S,
        t && (he(t) ? t[w] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (tr(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Rr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? ro(r.component) : r.el, a = o ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === Ne ? i.refs = {} : i.refs, f = i.setupState, h = Re(f), g = f === Ne ? Zl : (S) => ke(h, S);
  if (u != null && u !== l) {
    if (mi(t), Ge(u))
      c[u] = null, g(u) && (f[u] = null);
    else if (Be(u)) {
      u.value = null;
      const S = t;
      S.k && (c[S.k] = null);
    }
  }
  if (ve(l))
    qr(l, i, 12, [a, c]);
  else {
    const S = Ge(l), w = Be(l);
    if (S || w) {
      const A = () => {
        if (e.f) {
          const E = S ? g(l) ? f[l] : c[l] : l.value;
          if (o)
            he(E) && ya(E, s);
          else if (he(E))
            E.includes(s) || E.push(s);
          else if (S)
            c[l] = [s], g(l) && (f[l] = c[l]);
          else {
            const P = [s];
            l.value = P, e.k && (c[e.k] = P);
          }
        } else S ? (c[l] = a, g(l) && (f[l] = a)) : w && (l.value = a, e.k && (c[e.k] = a));
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
function Xd(e, t) {
  Kc(e, "a", t);
}
function Jd(e, t) {
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
      eo(o.parent.vnode) && Qd(r, t, n, o), o = o.parent;
  }
}
function Qd(e, t, n, r) {
  const o = to(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Yr(() => {
    ya(r[t], o);
  }, n);
}
function to(e, t, n = _t, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Qt();
      const i = Jr(n), l = xt(t, n, e, a);
      return i(), Zt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const sn = (e) => (t, n = _t) => {
  (!jr || e === "sp") && to(e, (...r) => t(...r), n);
}, Gc = sn("bm"), fr = sn("m"), Zd = sn(
  "bu"
), qc = sn("u"), xa = sn(
  "bum"
), Yr = sn("um"), em = sn(
  "sp"
), tm = sn("rtg"), nm = sn("rtc");
function rm(e, t = _t) {
  to("ec", e, t);
}
const sm = /* @__PURE__ */ Symbol.for("v-ndc");
function dn(e, t, n, r) {
  let o;
  const s = n, a = he(e);
  if (a || Ge(e)) {
    const i = a && Jt(e);
    let l = !1, u = !1;
    i && (l = !St(e), u = en(e), e = Xs(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? rr(kt(e[c])) : kt(e[c]) : e[c],
        c,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s);
  } else if (Fe(e))
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
function Ps(e, t, n = {}, r, o) {
  if (ft.ce || ft.parent && tr(ft.parent) && ft.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), ge(), gn(
      He,
      null,
      [ye("slot", n, r && r())],
      u ? -2 : 64
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
  return e.some((t) => Vr(t) ? !(t.type === ut || t.type === He && !Yc(t.children)) : !0) ? e : null;
}
const Go = (e) => e ? mu(e) ? ro(e) : Go(e.parent) : null, Lr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => Kd.bind(e)
  })
), Ao = (e, t) => e !== Ne && !e.__isScriptSetup && ke(e, t), om = {
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
    const u = Lr[t];
    let c, f;
    if (u)
      return t === "$attrs" && ct(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = i.__cssModules) && (c = c[t])
    )
      return c;
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
    return !!(n[i] || e !== Ne && i[0] !== "$" && ke(e, i) || Ao(t, i) || ke(s, i) || ke(r, i) || ke(Lr, i) || ke(o.config.globalProperties, i) || (l = a.__cssModules) && l[i]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hi(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let qo = !0;
function am(e) {
  const t = Jc(e), n = e.proxy, r = e.ctx;
  qo = !1, t.beforeCreate && pi(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: S,
    activated: w,
    deactivated: A,
    beforeDestroy: E,
    beforeUnmount: P,
    destroyed: y,
    unmounted: v,
    render: I,
    renderTracked: O,
    renderTriggered: D,
    errorCaptured: N,
    serverPrefetch: C,
    // public API
    expose: B,
    inheritAttrs: te,
    // assets
    components: U,
    directives: J,
    filters: ie
  } = t;
  if (u && im(u, r, null), a)
    for (const q in a) {
      const ae = a[q];
      ve(ae) && (r[q] = ae.bind(n));
    }
  if (o) {
    const q = o.call(n, n);
    Fe(q) && (e.data = Js(q));
  }
  if (qo = !0, s)
    for (const q in s) {
      const ae = s[q], Le = ve(ae) ? ae.bind(n, n) : ve(ae.get) ? ae.get.bind(n, n) : $t, xe = !ve(ae) && ve(ae.set) ? ae.set.bind(n) : $t, fe = _e({
        get: Le,
        set: xe
      });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (we) => fe.value = we
      });
    }
  if (i)
    for (const q in i)
      Xc(i[q], r, n, q);
  if (l) {
    const q = ve(l) ? l.call(n) : l;
    Reflect.ownKeys(q).forEach((ae) => {
      jd(ae, q[ae]);
    });
  }
  c && pi(c, e, "c");
  function V(q, ae) {
    he(ae) ? ae.forEach((Le) => q(Le.bind(n))) : ae && q(ae.bind(n));
  }
  if (V(Gc, f), V(fr, h), V(Zd, g), V(qc, S), V(Xd, w), V(Jd, A), V(rm, N), V(nm, O), V(tm, D), V(xa, P), V(Yr, v), V(em, C), he(B))
    if (B.length) {
      const q = e.exposed || (e.exposed = {});
      B.forEach((ae) => {
        Object.defineProperty(q, ae, {
          get: () => n[ae],
          set: (Le) => n[ae] = Le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === $t && (e.render = I), te != null && (e.inheritAttrs = te), U && (e.components = U), J && (e.directives = J), C && zc(e);
}
function im(e, t, n = $t) {
  he(e) && (e = Yo(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Fe(o) ? "default" in o ? s = er(
      o.from || r,
      o.default,
      !0
    ) : s = er(o.from || r) : s = er(o), Be(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[r] = s;
  }
}
function pi(e, t, n) {
  xt(
    he(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xc(e, t, n, r) {
  let o = r.includes(".") ? Mc(n, r) : () => n[r];
  if (Ge(e)) {
    const s = t[e];
    ve(s) && Tt(o, s);
  } else if (ve(e))
    Tt(o, e.bind(n));
  else if (Fe(e))
    if (he(e))
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
    (u) => Ns(l, u, a, !0)
  ), Ns(l, t, a)), Fe(t) && s.set(t, l), l;
}
function Ns(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Ns(e, s, n, !0), o && o.forEach(
    (a) => Ns(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = lm[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const lm = {
  data: gi,
  props: _i,
  emits: _i,
  // objects
  methods: wr,
  computed: wr,
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
  components: wr,
  directives: wr,
  // watch
  watch: um,
  // provide / inject
  provide: gi,
  inject: cm
};
function gi(e, t) {
  return t ? e ? function() {
    return et(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cm(e, t) {
  return wr(Yo(e), Yo(t));
}
function Yo(e) {
  if (he(e)) {
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
function wr(e, t) {
  return e ? et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : et(
    /* @__PURE__ */ Object.create(null),
    hi(e),
    hi(t ?? {})
  ) : t;
}
function um(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = et(/* @__PURE__ */ Object.create(null), e);
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
let fm = 0;
function dm(e, t) {
  return function(r, o = null) {
    ve(r) || (r = et({}, r)), o != null && !Fe(o) && (o = null);
    const s = Qc(), a = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const u = s.app = {
      _uid: fm++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Bm,
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
          const g = u._ceVNode || ye(r, o);
          return g.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, c, h), l = !0, u._container = c, c.__vue_app__ = u, ro(g.component);
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
        const f = Dn;
        Dn = u;
        try {
          return c();
        } finally {
          Dn = f;
        }
      }
    };
    return u;
  };
}
let Dn = null;
const mm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${vn(t)}Modifiers`];
function hm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ne;
  let o = n;
  const s = t.startsWith("update:"), a = s && mm(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => Ge(c) ? c.trim() : c)), a.number && (o = n.map(va)));
  let i, l = r[i = yo(t)] || // also try camelCase event handler (#2249)
  r[i = yo(_n(t))];
  !l && s && (l = r[i = yo(vn(t))]), l && xt(
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
const pm = /* @__PURE__ */ new WeakMap();
function Zc(e, t, n = !1) {
  const r = n ? pm : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!ve(e)) {
    const l = (u) => {
      const c = Zc(u, t, !0);
      c && (i = !0, et(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (Fe(e) && r.set(e, null), null) : (he(s) ? s.forEach((l) => a[l] = null) : et(a, s), Fe(e) && r.set(e, a), a);
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
    render: u,
    renderCache: c,
    props: f,
    data: h,
    setupState: g,
    ctx: S,
    inheritAttrs: w
  } = e, A = ks(e);
  let E, P;
  try {
    if (n.shapeFlag & 4) {
      const v = o || r, I = v;
      E = Ft(
        u.call(
          I,
          v,
          c,
          f,
          g,
          h,
          S
        )
      ), P = i;
    } else {
      const v = t;
      E = Ft(
        v.length > 1 ? v(
          f,
          { attrs: i, slots: a, emit: l }
        ) : v(
          f,
          null
        )
      ), P = t.props ? i : gm(i);
    }
  } catch (v) {
    Ir.length = 0, Zs(v, e, 1), E = ye(ut);
  }
  let y = E;
  if (P && w !== !1) {
    const v = Object.keys(P), { shapeFlag: I } = y;
    v.length && I & 7 && (s && v.some(ba) && (P = _m(
      P,
      s
    )), y = bn(y, P, !1, !0));
  }
  return n.dirs && (y = bn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Un(y, n.transition), E = y, ks(A), E;
}
const gm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _m = (e, t) => {
  const n = {};
  for (const r in e)
    (!ba(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function bm(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? yi(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (a[h] !== r[h] && !no(u, h))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? yi(r, a, u) : !0 : !!a;
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
function ym({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const eu = {}, tu = () => Object.create(eu), nu = (e) => Object.getPrototypeOf(e) === eu;
function vm(e, t, n, r = !1) {
  const o = {}, s = tu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ru(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Ld(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Em(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = Re(o), [l] = e.propsOptions;
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
        if (no(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (l)
          if (ke(s, h))
            g !== s[h] && (s[h] = g, u = !0);
          else {
            const S = _n(h);
            o[S] = Xo(
              l,
              i,
              S,
              g,
              e,
              !1
            );
          }
        else
          g !== s[h] && (s[h] = g, u = !0);
      }
    }
  } else {
    ru(e, t, o, s) && (u = !0);
    let c;
    for (const f in i)
      (!t || // for camelCase
      !ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = vn(f)) === f || !ke(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = Xo(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== i)
      for (const f in s)
        (!t || !ke(t, f)) && (delete s[f], u = !0);
  }
  u && qt(e.attrs, "set", "");
}
function ru(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (Tr(l))
        continue;
      const u = t[l];
      let c;
      o && ke(o, c = _n(l)) ? !s || !s.includes(c) ? n[c] = u : (i || (i = {}))[c] = u : no(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = Re(n), u = i || Ne;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Xo(
        o,
        l,
        f,
        u[f],
        e,
        !ke(u, f)
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
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Jr(o);
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
    ] && (r === "" || r === vn(n)) && (r = !0));
  }
  return r;
}
const wm = /* @__PURE__ */ new WeakMap();
function su(e, t, n = !1) {
  const r = n ? wm : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!ve(e)) {
    const c = (f) => {
      l = !0;
      const [h, g] = su(f, t, !0);
      et(a, h), g && i.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return Fe(e) && r.set(e, Xn), Xn;
  if (he(s))
    for (let c = 0; c < s.length; c++) {
      const f = _n(s[c]);
      vi(f) && (a[f] = Ne);
    }
  else if (s)
    for (const c in s) {
      const f = _n(c);
      if (vi(f)) {
        const h = s[c], g = a[f] = he(h) || ve(h) ? { type: h } : et({}, h), S = g.type;
        let w = !1, A = !0;
        if (he(S))
          for (let E = 0; E < S.length; ++E) {
            const P = S[E], y = ve(P) && P.name;
            if (y === "Boolean") {
              w = !0;
              break;
            } else y === "String" && (A = !1);
          }
        else
          w = ve(S) && S.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = w, g[
          1
          /* shouldCastTrue */
        ] = A, (w || ke(g, "default")) && i.push(f);
      }
    }
  const u = [a, i];
  return Fe(e) && r.set(e, u), u;
}
function vi(e) {
  return e[0] !== "$" && !Tr(e);
}
const Pa = (e) => e === "_" || e === "_ctx" || e === "$stable", Na = (e) => he(e) ? e.map(Ft) : [Ft(e)], Sm = (e, t, n) => {
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
      t[o] = Sm(o, s, r);
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
}, Tm = (e, t, n) => {
  const r = e.slots = tu();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (iu(r, t, n), n && oc(r, "_", o, !0)) : ou(t, r);
  } else t && au(e, t);
}, Am = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, a = Ne;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : iu(o, t, n) : (s = !t.$stable, ou(t, o)), a = t;
  } else t && (au(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !Pa(i) && a[i] == null && delete o[i];
}, pt = Im;
function Om(e) {
  return Cm(e);
}
function Cm(e, t) {
  const n = Ys();
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
    setScopeId: g = $t,
    insertStaticContent: S
  } = e, w = (p, _, b, x = null, k = null, M = null, X = void 0, G = null, d = !!_.dynamicChildren) => {
    if (p === _)
      return;
    p && !xn(p, _) && (x = K(p), we(p, k, M, !0), p = null), _.patchFlag === -2 && (d = !1, _.dynamicChildren = null);
    const { type: m, ref: R, shapeFlag: F } = _;
    switch (m) {
      case Xr:
        A(p, _, b, x);
        break;
      case ut:
        E(p, _, b, x);
        break;
      case Co:
        p == null && P(_, b, x, X);
        break;
      case He:
        U(
          p,
          _,
          b,
          x,
          k,
          M,
          X,
          G,
          d
        );
        break;
      default:
        F & 1 ? I(
          p,
          _,
          b,
          x,
          k,
          M,
          X,
          G,
          d
        ) : F & 6 ? J(
          p,
          _,
          b,
          x,
          k,
          M,
          X,
          G,
          d
        ) : (F & 64 || F & 128) && m.process(
          p,
          _,
          b,
          x,
          k,
          M,
          X,
          G,
          d,
          Ae
        );
    }
    R != null && k ? Rr(R, p && p.ref, M, _ || p, !_) : R == null && p && p.ref != null && Rr(p.ref, null, M, p, !0);
  }, A = (p, _, b, x) => {
    if (p == null)
      r(
        _.el = i(_.children),
        b,
        x
      );
    else {
      const k = _.el = p.el;
      _.children !== p.children && u(k, _.children);
    }
  }, E = (p, _, b, x) => {
    p == null ? r(
      _.el = l(_.children || ""),
      b,
      x
    ) : _.el = p.el;
  }, P = (p, _, b, x) => {
    [p.el, p.anchor] = S(
      p.children,
      _,
      b,
      x,
      p.el,
      p.anchor
    );
  }, y = ({ el: p, anchor: _ }, b, x) => {
    let k;
    for (; p && p !== _; )
      k = h(p), r(p, b, x), p = k;
    r(_, b, x);
  }, v = ({ el: p, anchor: _ }) => {
    let b;
    for (; p && p !== _; )
      b = h(p), o(p), p = b;
    o(_);
  }, I = (p, _, b, x, k, M, X, G, d) => {
    if (_.type === "svg" ? X = "svg" : _.type === "math" && (X = "mathml"), p == null)
      O(
        _,
        b,
        x,
        k,
        M,
        X,
        G,
        d
      );
    else {
      const m = p.el && p.el._isVueCE ? p.el : null;
      try {
        m && m._beginPatch(), C(
          p,
          _,
          k,
          M,
          X,
          G,
          d
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, O = (p, _, b, x, k, M, X, G) => {
    let d, m;
    const { props: R, shapeFlag: F, transition: ee, dirs: Y } = p;
    if (d = p.el = a(
      p.type,
      M,
      R && R.is,
      R
    ), F & 8 ? c(d, p.children) : F & 16 && N(
      p.children,
      d,
      null,
      x,
      k,
      Oo(p, M),
      X,
      G
    ), Y && An(p, null, x, "created"), D(d, p, p.scopeId, X, x), R) {
      for (const $ in R)
        $ !== "value" && !Tr($) && s(d, $, null, R[$], M, x);
      "value" in R && s(d, "value", null, R.value, M), (m = R.onVnodeBeforeMount) && Nt(m, x, p);
    }
    Y && An(p, null, x, "beforeMount");
    const L = Rm(k, ee);
    L && ee.beforeEnter(d), r(d, _, b), ((m = R && R.onVnodeMounted) || L || Y) && pt(() => {
      m && Nt(m, x, p), L && ee.enter(d), Y && An(p, null, x, "mounted");
    }, k);
  }, D = (p, _, b, x, k) => {
    if (b && g(p, b), x)
      for (let M = 0; M < x.length; M++)
        g(p, x[M]);
    if (k) {
      let M = k.subTree;
      if (_ === M || uu(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
        const X = k.vnode;
        D(
          p,
          X,
          X.scopeId,
          X.slotScopeIds,
          k.parent
        );
      }
    }
  }, N = (p, _, b, x, k, M, X, G, d = 0) => {
    for (let m = d; m < p.length; m++) {
      const R = p[m] = G ? mn(p[m]) : Ft(p[m]);
      w(
        null,
        R,
        _,
        b,
        x,
        k,
        M,
        X,
        G
      );
    }
  }, C = (p, _, b, x, k, M, X) => {
    const G = _.el = p.el;
    let { patchFlag: d, dynamicChildren: m, dirs: R } = _;
    d |= p.patchFlag & 16;
    const F = p.props || Ne, ee = _.props || Ne;
    let Y;
    if (b && On(b, !1), (Y = ee.onVnodeBeforeUpdate) && Nt(Y, b, _, p), R && An(_, p, b, "beforeUpdate"), b && On(b, !0), (F.innerHTML && ee.innerHTML == null || F.textContent && ee.textContent == null) && c(G, ""), m ? B(
      p.dynamicChildren,
      m,
      G,
      b,
      x,
      Oo(_, k),
      M
    ) : X || ae(
      p,
      _,
      G,
      null,
      b,
      x,
      Oo(_, k),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        te(G, F, ee, b, k);
      else if (d & 2 && F.class !== ee.class && s(G, "class", null, ee.class, k), d & 4 && s(G, "style", F.style, ee.style, k), d & 8) {
        const L = _.dynamicProps;
        for (let $ = 0; $ < L.length; $++) {
          const ce = L[$], Se = F[ce], $e = ee[ce];
          ($e !== Se || ce === "value") && s(G, ce, Se, $e, k, b);
        }
      }
      d & 1 && p.children !== _.children && c(G, _.children);
    } else !X && m == null && te(G, F, ee, b, k);
    ((Y = ee.onVnodeUpdated) || R) && pt(() => {
      Y && Nt(Y, b, _, p), R && An(_, p, b, "updated");
    }, x);
  }, B = (p, _, b, x, k, M, X) => {
    for (let G = 0; G < _.length; G++) {
      const d = p[G], m = _[G], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(d, m) || // - In the case of a component, it could contain anything.
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
        x,
        k,
        M,
        X,
        !0
      );
    }
  }, te = (p, _, b, x, k) => {
    if (_ !== b) {
      if (_ !== Ne)
        for (const M in _)
          !Tr(M) && !(M in b) && s(
            p,
            M,
            _[M],
            null,
            k,
            x
          );
      for (const M in b) {
        if (Tr(M)) continue;
        const X = b[M], G = _[M];
        X !== G && M !== "value" && s(p, M, G, X, k, x);
      }
      "value" in b && s(p, "value", _.value, b.value, k);
    }
  }, U = (p, _, b, x, k, M, X, G, d) => {
    const m = _.el = p ? p.el : i(""), R = _.anchor = p ? p.anchor : i("");
    let { patchFlag: F, dynamicChildren: ee, slotScopeIds: Y } = _;
    Y && (G = G ? G.concat(Y) : Y), p == null ? (r(m, b, x), r(R, b, x), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      b,
      R,
      k,
      M,
      X,
      G,
      d
    )) : F > 0 && F & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === ee.length ? (B(
      p.dynamicChildren,
      ee,
      b,
      k,
      M,
      X,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || k && _ === k.subTree) && Ma(
      p,
      _,
      !0
      /* shallow */
    )) : ae(
      p,
      _,
      b,
      R,
      k,
      M,
      X,
      G,
      d
    );
  }, J = (p, _, b, x, k, M, X, G, d) => {
    _.slotScopeIds = G, p == null ? _.shapeFlag & 512 ? k.ctx.activate(
      _,
      b,
      x,
      X,
      d
    ) : ie(
      _,
      b,
      x,
      k,
      M,
      X,
      d
    ) : de(p, _, d);
  }, ie = (p, _, b, x, k, M, X) => {
    const G = p.component = Fm(
      p,
      x,
      k
    );
    if (eo(p) && (G.ctx.renderer = Ae), Um(G, !1, X), G.asyncDep) {
      if (k && k.registerDep(G, V, X), !p.el) {
        const d = G.subTree = ye(ut);
        E(null, d, _, b), p.placeholder = d.el;
      }
    } else
      V(
        G,
        p,
        _,
        b,
        k,
        M,
        X
      );
  }, de = (p, _, b) => {
    const x = _.component = p.component;
    if (bm(p, _, b))
      if (x.asyncDep && !x.asyncResolved) {
        q(x, _, b);
        return;
      } else
        x.next = _, x.update();
    else
      _.el = p.el, x.vnode = _;
  }, V = (p, _, b, x, k, M, X) => {
    const G = () => {
      if (p.isMounted) {
        let { next: F, bu: ee, u: Y, parent: L, vnode: $ } = p;
        {
          const Xe = lu(p);
          if (Xe) {
            F && (F.el = $.el, q(p, F, X)), Xe.asyncDep.then(() => {
              p.isUnmounted || G();
            });
            return;
          }
        }
        let ce = F, Se;
        On(p, !1), F ? (F.el = $.el, q(p, F, X)) : F = $, ee && vs(ee), (Se = F.props && F.props.onVnodeBeforeUpdate) && Nt(Se, L, F, $), On(p, !0);
        const $e = bi(p), nt = p.subTree;
        p.subTree = $e, w(
          nt,
          $e,
          // parent may have changed if it's in a teleport
          f(nt.el),
          // anchor may have changed if it's in a fragment
          K(nt),
          p,
          k,
          M
        ), F.el = $e.el, ce === null && ym(p, $e.el), Y && pt(Y, k), (Se = F.props && F.props.onVnodeUpdated) && pt(
          () => Nt(Se, L, F, $),
          k
        );
      } else {
        let F;
        const { el: ee, props: Y } = _, { bm: L, m: $, parent: ce, root: Se, type: $e } = p, nt = tr(_);
        On(p, !1), L && vs(L), !nt && (F = Y && Y.onVnodeBeforeMount) && Nt(F, ce, _), On(p, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle($e);
          const Xe = p.subTree = bi(p);
          w(
            null,
            Xe,
            b,
            x,
            p,
            k,
            M
          ), _.el = Xe.el;
        }
        if ($ && pt($, k), !nt && (F = Y && Y.onVnodeMounted)) {
          const Xe = _;
          pt(
            () => Nt(F, ce, Xe),
            k
          );
        }
        (_.shapeFlag & 256 || ce && tr(ce.vnode) && ce.vnode.shapeFlag & 256) && p.a && pt(p.a, k), p.isMounted = !0, _ = b = x = null;
      }
    };
    p.scope.on();
    const d = p.effect = new dc(G);
    p.scope.off();
    const m = p.update = d.run.bind(d), R = p.job = d.runIfDirty.bind(d);
    R.i = p, R.id = p.uid, d.scheduler = () => La(R), On(p, !0), m();
  }, q = (p, _, b) => {
    _.component = p;
    const x = p.vnode.props;
    p.vnode = _, p.next = null, Em(p, _.props, x, b), Am(p, _.children, b), Qt(), li(p), Zt();
  }, ae = (p, _, b, x, k, M, X, G, d = !1) => {
    const m = p && p.children, R = p ? p.shapeFlag : 0, F = _.children, { patchFlag: ee, shapeFlag: Y } = _;
    if (ee > 0) {
      if (ee & 128) {
        xe(
          m,
          F,
          b,
          x,
          k,
          M,
          X,
          G,
          d
        );
        return;
      } else if (ee & 256) {
        Le(
          m,
          F,
          b,
          x,
          k,
          M,
          X,
          G,
          d
        );
        return;
      }
    }
    Y & 8 ? (R & 16 && pe(m, k, M), F !== m && c(b, F)) : R & 16 ? Y & 16 ? xe(
      m,
      F,
      b,
      x,
      k,
      M,
      X,
      G,
      d
    ) : pe(m, k, M, !0) : (R & 8 && c(b, ""), Y & 16 && N(
      F,
      b,
      x,
      k,
      M,
      X,
      G,
      d
    ));
  }, Le = (p, _, b, x, k, M, X, G, d) => {
    p = p || Xn, _ = _ || Xn;
    const m = p.length, R = _.length, F = Math.min(m, R);
    let ee;
    for (ee = 0; ee < F; ee++) {
      const Y = _[ee] = d ? mn(_[ee]) : Ft(_[ee]);
      w(
        p[ee],
        Y,
        b,
        null,
        k,
        M,
        X,
        G,
        d
      );
    }
    m > R ? pe(
      p,
      k,
      M,
      !0,
      !1,
      F
    ) : N(
      _,
      b,
      x,
      k,
      M,
      X,
      G,
      d,
      F
    );
  }, xe = (p, _, b, x, k, M, X, G, d) => {
    let m = 0;
    const R = _.length;
    let F = p.length - 1, ee = R - 1;
    for (; m <= F && m <= ee; ) {
      const Y = p[m], L = _[m] = d ? mn(_[m]) : Ft(_[m]);
      if (xn(Y, L))
        w(
          Y,
          L,
          b,
          null,
          k,
          M,
          X,
          G,
          d
        );
      else
        break;
      m++;
    }
    for (; m <= F && m <= ee; ) {
      const Y = p[F], L = _[ee] = d ? mn(_[ee]) : Ft(_[ee]);
      if (xn(Y, L))
        w(
          Y,
          L,
          b,
          null,
          k,
          M,
          X,
          G,
          d
        );
      else
        break;
      F--, ee--;
    }
    if (m > F) {
      if (m <= ee) {
        const Y = ee + 1, L = Y < R ? _[Y].el : x;
        for (; m <= ee; )
          w(
            null,
            _[m] = d ? mn(_[m]) : Ft(_[m]),
            b,
            L,
            k,
            M,
            X,
            G,
            d
          ), m++;
      }
    } else if (m > ee)
      for (; m <= F; )
        we(p[m], k, M, !0), m++;
    else {
      const Y = m, L = m, $ = /* @__PURE__ */ new Map();
      for (m = L; m <= ee; m++) {
        const at = _[m] = d ? mn(_[m]) : Ft(_[m]);
        at.key != null && $.set(at.key, m);
      }
      let ce, Se = 0;
      const $e = ee - L + 1;
      let nt = !1, Xe = 0;
      const Vt = new Array($e);
      for (m = 0; m < $e; m++) Vt[m] = 0;
      for (m = Y; m <= F; m++) {
        const at = p[m];
        if (Se >= $e) {
          we(at, k, M, !0);
          continue;
        }
        let bt;
        if (at.key != null)
          bt = $.get(at.key);
        else
          for (ce = L; ce <= ee; ce++)
            if (Vt[ce - L] === 0 && xn(at, _[ce])) {
              bt = ce;
              break;
            }
        bt === void 0 ? we(at, k, M, !0) : (Vt[bt - L] = m + 1, bt >= Xe ? Xe = bt : nt = !0, w(
          at,
          _[bt],
          b,
          null,
          k,
          M,
          X,
          G,
          d
        ), Se++);
      }
      const Tn = nt ? Lm(Vt) : Xn;
      for (ce = Tn.length - 1, m = $e - 1; m >= 0; m--) {
        const at = L + m, bt = _[at], rs = _[at + 1], ss = at + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          rs.el || cu(rs)
        ) : x;
        Vt[m] === 0 ? w(
          null,
          bt,
          b,
          ss,
          k,
          M,
          X,
          G,
          d
        ) : nt && (ce < 0 || m !== Tn[ce] ? fe(bt, b, ss, 2) : ce--);
      }
    }
  }, fe = (p, _, b, x, k = null) => {
    const { el: M, type: X, transition: G, children: d, shapeFlag: m } = p;
    if (m & 6) {
      fe(p.component.subTree, _, b, x);
      return;
    }
    if (m & 128) {
      p.suspense.move(_, b, x);
      return;
    }
    if (m & 64) {
      X.move(p, _, b, Ae);
      return;
    }
    if (X === He) {
      r(M, _, b);
      for (let F = 0; F < d.length; F++)
        fe(d[F], _, b, x);
      r(p.anchor, _, b);
      return;
    }
    if (X === Co) {
      y(p, _, b);
      return;
    }
    if (x !== 2 && m & 1 && G)
      if (x === 0)
        G.beforeEnter(M), r(M, _, b), pt(() => G.enter(M), k);
      else {
        const { leave: F, delayLeave: ee, afterLeave: Y } = G, L = () => {
          p.ctx.isUnmounted ? o(M) : r(M, _, b);
        }, $ = () => {
          M._isLeaving && M[Gt](
            !0
            /* cancelled */
          ), F(M, () => {
            L(), Y && Y();
          });
        };
        ee ? ee(M, L, $) : $();
      }
    else
      r(M, _, b);
  }, we = (p, _, b, x = !1, k = !1) => {
    const {
      type: M,
      props: X,
      ref: G,
      children: d,
      dynamicChildren: m,
      shapeFlag: R,
      patchFlag: F,
      dirs: ee,
      cacheIndex: Y
    } = p;
    if (F === -2 && (k = !1), G != null && (Qt(), Rr(G, null, b, p, !0), Zt()), Y != null && (_.renderCache[Y] = void 0), R & 256) {
      _.ctx.deactivate(p);
      return;
    }
    const L = R & 1 && ee, $ = !tr(p);
    let ce;
    if ($ && (ce = X && X.onVnodeBeforeUnmount) && Nt(ce, _, p), R & 6)
      tt(p.component, b, x);
    else {
      if (R & 128) {
        p.suspense.unmount(b, x);
        return;
      }
      L && An(p, null, _, "beforeUnmount"), R & 64 ? p.type.remove(
        p,
        _,
        b,
        Ae,
        x
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
      ) : (M === He && F & 384 || !k && R & 16) && pe(d, _, b), x && je(p);
    }
    ($ && (ce = X && X.onVnodeUnmounted) || L) && pt(() => {
      ce && Nt(ce, _, p), L && An(p, null, _, "unmounted");
    }, b);
  }, je = (p) => {
    const { type: _, el: b, anchor: x, transition: k } = p;
    if (_ === He) {
      Ue(b, x);
      return;
    }
    if (_ === Co) {
      v(p);
      return;
    }
    const M = () => {
      o(b), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (p.shapeFlag & 1 && k && !k.persisted) {
      const { leave: X, delayLeave: G } = k, d = () => X(b, M);
      G ? G(p.el, M, d) : d();
    } else
      M();
  }, Ue = (p, _) => {
    let b;
    for (; p !== _; )
      b = h(p), o(p), p = b;
    o(_);
  }, tt = (p, _, b) => {
    const { bum: x, scope: k, job: M, subTree: X, um: G, m: d, a: m } = p;
    Ei(d), Ei(m), x && vs(x), k.stop(), M && (M.flags |= 8, we(X, p, _, b)), G && pt(G, _), pt(() => {
      p.isUnmounted = !0;
    }, _);
  }, pe = (p, _, b, x = !1, k = !1, M = 0) => {
    for (let X = M; X < p.length; X++)
      we(p[X], _, b, x, k);
  }, K = (p) => {
    if (p.shapeFlag & 6)
      return K(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const _ = h(p.anchor || p.el), b = _ && _[Dc];
    return b ? h(b) : _;
  };
  let re = !1;
  const oe = (p, _, b) => {
    let x;
    p == null ? _._vnode && (we(_._vnode, null, null, !0), x = _._vnode.component) : w(
      _._vnode || null,
      p,
      _,
      null,
      null,
      null,
      b
    ), _._vnode = p, re || (re = !0, li(x), kc(), re = !1);
  }, Ae = {
    p: w,
    um: we,
    m: fe,
    r: je,
    mt: ie,
    mc: N,
    pc: ae,
    pbc: B,
    n: K,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: dm(oe)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function On({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ma(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (he(r) && he(o))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = mn(o[s]), i.el = a.el), !n && i.patchFlag !== -2 && Ma(a, i)), i.type === Xr && (i.patchFlag !== -1 ? i.el = a.el : i.__elIndex = s + // take fragment start anchor into account
      (e.type === He ? 1 : 0)), i.type === ut && !i.el && (i.el = a.el);
    }
}
function Lm(e) {
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
function Im(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Vd(e);
}
const He = /* @__PURE__ */ Symbol.for("v-fgt"), Xr = /* @__PURE__ */ Symbol.for("v-txt"), ut = /* @__PURE__ */ Symbol.for("v-cmt"), Co = /* @__PURE__ */ Symbol.for("v-stc"), Ir = [];
let wt = null;
function ge(e = !1) {
  Ir.push(wt = e ? null : []);
}
function km() {
  Ir.pop(), wt = Ir[Ir.length - 1] || null;
}
let Hr = 1;
function Ms(e, t = !1) {
  Hr += e, e < 0 && wt && t && (wt.hasOnce = !0);
}
function fu(e) {
  return e.dynamicChildren = Hr > 0 ? wt || Xn : null, km(), Hr > 0 && wt && wt.push(e), e;
}
function Ee(e, t, n, r, o, s) {
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
function Vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const du = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || Be(e) || ve(e) ? { i: ft, r: e, k: t, f: !!n } : e : null);
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
  return i ? (Da(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ge(n) ? 8 : 16), Hr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && wt.push(l), l;
}
const ye = xm;
function xm(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === sm) && (e = ut), Vr(e)) {
    const i = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Da(i, n), Hr > 0 && !s && wt && (i.shapeFlag & 6 ? wt[wt.indexOf(e)] = i : wt.push(i)), i.patchFlag = -2, i;
  }
  if (jm(e) && (e = e.__vccOpts), t) {
    t = Pm(t);
    let { class: i, style: l } = t;
    i && !Ge(i) && (t.class = Ke(i)), Fe(l) && (Qs(l) && !he(l) && (l = et({}, l)), t.style = ur(l));
  }
  const a = Ge(e) ? 1 : uu(e) ? 128 : Fc(e) ? 64 : Fe(e) ? 4 : ve(e) ? 2 : 0;
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
function Pm(e) {
  return e ? Qs(e) || nu(e) ? et({}, e) : e : null;
}
function bn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, u = t ? Nm(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && du(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? he(s) ? s.concat(ws(t)) : [s, ws(t)] : ws(t)
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
  return l && r && Un(
    c,
    l.clone(c)
  ), c;
}
function qn(e = " ", t = 0) {
  return ye(Xr, null, e, t);
}
function Qe(e = "", t = !1) {
  return t ? (ge(), gn(ut, null, e)) : ye(ut, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? ye(ut) : he(e) ? ye(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vr(e) ? mn(e) : ye(Xr, null, String(e));
}
function mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function Da(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (he(t))
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
function Nm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ke([t.class, r.class]));
      else if (o === "style")
        t.style = ur([t.style, r.style]);
      else if (zs(o)) {
        const s = t[o], a = r[o];
        a && s !== a && !(he(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Nt(e, t, n, r = null) {
  xt(e, t, 7, [
    n,
    r
  ]);
}
const Mm = Qc();
let Dm = 0;
function Fm(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Mm, s = {
    uid: Dm++,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = hm.bind(null, s), e.ce && e.ce(s), s;
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
    (n) => jr = n
  );
}
const Jr = (e) => {
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
let jr = !1;
function Um(e, t = !1, n = !1) {
  t && Jo(t);
  const { props: r, children: o } = e.vnode, s = mu(e);
  vm(e, r, s, t), Tm(e, o, n || t);
  const a = s ? $m(e, t) : void 0;
  return t && Jo(!1), a;
}
function $m(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, om);
  const { setup: r } = n;
  if (r) {
    Qt();
    const o = e.setupContext = r.length > 1 ? Vm(e) : null, s = Jr(e), a = qr(
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
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = Rc(t)), hu(e);
}
function hu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || $t);
  {
    const o = Jr(e);
    Qt();
    try {
      am(e);
    } finally {
      Zt(), o();
    }
  }
}
const Hm = {
  get(e, t) {
    return ct(e, "get", ""), e[t];
  }
};
function Vm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hm),
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
      if (n in Lr)
        return Lr[n](e);
    },
    has(t, n) {
      return n in t || n in Lr;
    }
  })) : e.proxy;
}
function jm(e) {
  return ve(e) && "__vccOpts" in e;
}
const _e = (e, t) => Dd(e, t, jr);
function Br(e, t, n) {
  try {
    Ms(-1);
    const r = arguments.length;
    return r === 2 ? Fe(t) && !he(t) ? Vr(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Vr(n) && (n = [n]), ye(e, t, n));
  } finally {
    Ms(1);
  }
}
const Bm = "3.5.26";
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
const pu = Qo ? (e) => Qo.createHTML(e) : (e) => e, Wm = "http://www.w3.org/2000/svg", zm = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Ai = Kt && /* @__PURE__ */ Kt.createElement("template"), Km = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(Wm, e) : t === "mathml" ? Kt.createElementNS(zm, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
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
}, on = "transition", _r = "animation", or = /* @__PURE__ */ Symbol("_vtc"), gu = {
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
}, _u = /* @__PURE__ */ et(
  {},
  Vc,
  gu
), Gm = (e) => (e.displayName = "Transition", e.props = _u, e), bu = /* @__PURE__ */ Gm(
  (e, { slots: t }) => Br(Yd, yu(e), t)
), Cn = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Oi = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    appearActiveClass: u = a,
    appearToClass: c = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, S = qm(o), w = S && S[0], A = S && S[1], {
    onBeforeEnter: E,
    onEnter: P,
    onEnterCancelled: y,
    onLeave: v,
    onLeaveCancelled: I,
    onBeforeAppear: O = E,
    onAppear: D = P,
    onAppearCancelled: N = y
  } = t, C = (U, J, ie, de) => {
    U._enterCancelled = de, ln(U, J ? c : i), ln(U, J ? u : a), ie && ie();
  }, B = (U, J) => {
    U._isLeaving = !1, ln(U, f), ln(U, g), ln(U, h), J && J();
  }, te = (U) => (J, ie) => {
    const de = U ? D : P, V = () => C(J, U, ie);
    Cn(de, [J, V]), Ci(() => {
      ln(J, U ? l : s), Mt(J, U ? c : i), Oi(de) || Ri(J, r, w, V);
    });
  };
  return et(t, {
    onBeforeEnter(U) {
      Cn(E, [U]), Mt(U, s), Mt(U, a);
    },
    onBeforeAppear(U) {
      Cn(O, [U]), Mt(U, l), Mt(U, u);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(U, J) {
      U._isLeaving = !0;
      const ie = () => B(U, J);
      Mt(U, f), U._enterCancelled ? (Mt(U, h), Zo(U)) : (Zo(U), Mt(U, h)), Ci(() => {
        U._isLeaving && (ln(U, f), Mt(U, g), Oi(v) || Ri(U, r, A, ie));
      }), Cn(v, [U, ie]);
    },
    onEnterCancelled(U) {
      C(U, !1, void 0, !0), Cn(y, [U]);
    },
    onAppearCancelled(U) {
      C(U, !0, void 0, !0), Cn(N, [U]);
    },
    onLeaveCancelled(U) {
      B(U), Cn(I, [U]);
    }
  });
}
function qm(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [Ro(e.enter), Ro(e.leave)];
  {
    const t = Ro(e);
    return [t, t];
  }
}
function Ro(e) {
  return rd(e);
}
function Mt(e, t) {
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
let Ym = 0;
function Ri(e, t, n, r) {
  const o = e._endId = ++Ym, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = vu(e, t);
  if (!a)
    return r();
  const u = a + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, h), s();
  }, h = (g) => {
    g.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, i + 1), e.addEventListener(u, h);
}
function vu(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), o = r(`${on}Delay`), s = r(`${on}Duration`), a = Li(o, s), i = r(`${_r}Delay`), l = r(`${_r}Duration`), u = Li(i, l);
  let c = null, f = 0, h = 0;
  t === on ? a > 0 && (c = on, f = a, h = s.length) : t === _r ? u > 0 && (c = _r, f = u, h = l.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? on : _r : null, h = c ? c === on ? s.length : l.length : 0);
  const g = c === on && /\b(?:transform|all)(?:,|$)/.test(
    r(`${on}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: h,
    hasTransform: g
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
function Xm(e, t, n) {
  const r = e[or];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ki = /* @__PURE__ */ Symbol("_vod"), Jm = /* @__PURE__ */ Symbol("_vsh"), Qm = /* @__PURE__ */ Symbol(""), Zm = /(?:^|;)\s*display\s*:/;
function eh(e, t, n) {
  const r = e.style, o = Ge(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Ge(t))
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
      const a = r[Qm];
      a && (n += ";" + a), r.cssText = n, s = Zm.test(n);
    }
  } else t && e.removeAttribute("style");
  ki in e && (e[ki] = s ? r.display : "", e[Jm] && (r.display = "none"));
}
const xi = /\s*!important$/;
function Ss(e, t, n) {
  if (he(n))
    n.forEach((r) => Ss(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = th(e, t);
    xi.test(n) ? e.setProperty(
      vn(r),
      n.replace(xi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Pi = ["Webkit", "Moz", "ms"], Lo = {};
function th(e, t) {
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
function Mi(e, t, n, r, o, s = cd(t)) {
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
function nh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fi = /* @__PURE__ */ Symbol("_vei");
function rh(e, t, n, r, o = null) {
  const s = e[Fi] || (e[Fi] = {}), a = s[t];
  if (r && a)
    a.value = r;
  else {
    const [i, l] = sh(t);
    if (r) {
      const u = s[t] = ih(
        r,
        o
      );
      Kn(e, i, u, l);
    } else a && (nh(e, i, a, l), s[t] = void 0);
  }
}
const Ui = /(?:Once|Passive|Capture)$/;
function sh(e) {
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
const oh = /* @__PURE__ */ Promise.resolve(), ah = () => Io || (oh.then(() => Io = 0), Io = Date.now());
function ih(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xt(
      lh(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ah(), n;
}
function lh(e, t) {
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
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ch = (e, t, n, r, o, s) => {
  const a = o === "svg";
  t === "class" ? Xm(e, r, a) : t === "style" ? eh(e, n, r) : zs(t) ? ba(t) || rh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uh(e, t, r, a)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, r, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ge(r)) ? Di(e, _n(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mi(e, t, r, a));
};
function uh(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return $i(t) && Ge(n) ? !1 : t in e;
}
const Eu = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ Symbol("_moveCb"), Hi = /* @__PURE__ */ Symbol("_enterCb"), fh = (e) => (delete e.props.mode, e), dh = /* @__PURE__ */ fh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ et({}, _u, {
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
      if (!_h(
        o[0].el,
        n.vnode.el,
        a
      )) {
        o = [];
        return;
      }
      o.forEach(hh), o.forEach(ph);
      const i = o.filter(gh);
      Zo(n.vnode.el), i.forEach((l) => {
        const u = l.el, c = u.style;
        Mt(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[Fs] = (h) => {
          h && h.target !== u || (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Fs] = null, ln(u, a));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const a = Re(e), i = yu(a);
      let l = a.tag || He;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Un(
            c,
            $r(
              c,
              i,
              r,
              n
            )
          ), Eu.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? ka(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Un(
          c,
          $r(c, i, r, n)
        );
      }
      return ye(l, null, s);
    };
  }
}), mh = dh;
function hh(e) {
  const t = e.el;
  t[Fs] && t[Fs](), t[Hi] && t[Hi]();
}
function ph(e) {
  wu.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function gh(e) {
  const t = Eu.get(e), n = wu.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function _h(e, t, n) {
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
  return he(t) ? (n) => vs(t, n) : t;
};
function bh(e) {
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
    }), t || (Kn(e, "compositionstart", bh), Kn(e, "compositionend", ji), Kn(e, "change", ji));
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
}, yh = ["ctrl", "shift", "alt", "meta"], vh = {
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
  exact: (e, t) => yh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Je = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = vh[t[a]];
      if (i && i(o, t)) return;
    }
    return e(o, ...s);
  }));
}, Eh = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, kr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = vn(o.key);
    if (t.some(
      (a) => a === s || Eh[a] === s
    ))
      return e(o);
  }));
}, wh = /* @__PURE__ */ et({ patchProp: ch }, Km);
let Wi;
function Sh() {
  return Wi || (Wi = Om(wh));
}
const Th = ((...e) => {
  const t = Sh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Oh(r);
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
function Oh(e) {
  return Ge(e) ? document.querySelector(e) : e;
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
var xr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(xr || (xr = {}));
function Ch() {
  const e = Ea(!0), t = e.run(() => Q({}));
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
const Rh = (e) => e(), Ki = Symbol(), xo = Symbol();
function na(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    ta(o) && ta(r) && e.hasOwnProperty(n) && !Be(r) && !Jt(r) ? e[n] = na(o, r) : e[n] = r;
  }
  return e;
}
const Lh = (
  /* istanbul ignore next */
  Symbol()
);
function Ih(e) {
  return !ta(e) || !e.hasOwnProperty(Lh);
}
const { assign: cn } = Object;
function kh(e) {
  return !!(Be(e) && e.effect);
}
function xh(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = o ? o() : {});
    const c = xd(n.state.value[e]);
    return cn(c, s, Object.keys(a || {}).reduce((f, h) => (f[h] = Ra(_e(() => {
      so(n);
      const g = n._s.get(e);
      return a[h].call(g, g);
    })), f), {}));
  }
  return l = Ou(e, u, t, n, r, !0), l;
}
function Ou(e, t, n = {}, r, o, s) {
  let a;
  const i = cn({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], h = [], g;
  const S = r.state.value[e];
  !s && !S && (r.state.value[e] = {}), Q({});
  let w;
  function A(N) {
    let C;
    u = c = !1, typeof N == "function" ? (N(r.state.value[e]), C = {
      type: xr.patchFunction,
      storeId: e,
      events: g
    }) : (na(r.state.value[e], N), C = {
      type: xr.patchObject,
      payload: N,
      storeId: e,
      events: g
    });
    const B = w = Symbol();
    Zn().then(() => {
      w === B && (u = !0);
    }), c = !0, jn(f, C, r.state.value[e]);
  }
  const E = s ? function() {
    const { state: C } = n, B = C ? C() : {};
    this.$patch((te) => {
      cn(te, B);
    });
  } : (
    /* istanbul ignore next */
    Au
  );
  function P() {
    a.stop(), f = [], h = [], r._s.delete(e);
  }
  const y = (N, C = "") => {
    if (Ki in N)
      return N[xo] = C, N;
    const B = function() {
      so(r);
      const te = Array.from(arguments), U = [], J = [];
      function ie(q) {
        U.push(q);
      }
      function de(q) {
        J.push(q);
      }
      jn(h, {
        args: te,
        name: B[xo],
        store: I,
        after: ie,
        onError: de
      });
      let V;
      try {
        V = N.apply(this && this.$id === e ? this : I, te);
      } catch (q) {
        throw jn(J, q), q;
      }
      return V instanceof Promise ? V.then((q) => (jn(U, q), q)).catch((q) => (jn(J, q), Promise.reject(q))) : (jn(U, V), V);
    };
    return B[Ki] = !0, B[xo] = C, B;
  }, v = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: zi.bind(null, h),
    $patch: A,
    $reset: E,
    $subscribe(N, C = {}) {
      const B = zi(f, N, C.detached, () => te()), te = a.run(() => Tt(() => r.state.value[e], (U) => {
        (C.flush === "sync" ? c : u) && N({
          storeId: e,
          type: xr.direct,
          events: g
        }, U);
      }, cn({}, l, C)));
      return B;
    },
    $dispose: P
  }, I = Js(v);
  r._s.set(e, I);
  const D = (r._a && r._a.runWithContext || Rh)(() => r._e.run(() => (a = Ea()).run(() => t({ action: y }))));
  for (const N in D) {
    const C = D[N];
    if (Be(C) && !kh(C) || Jt(C))
      s || (S && Ih(C) && (Be(C) ? C.value = S[N] : na(C, S[N])), r.state.value[e][N] = C);
    else if (typeof C == "function") {
      const B = y(C, N);
      D[N] = B, i.actions[N] = C;
    }
  }
  return cn(I, D), cn(Re(I), D), Object.defineProperty(I, "$state", {
    get: () => r.state.value[e],
    set: (N) => {
      A((C) => {
        cn(C, N);
      });
    }
  }), r._p.forEach((N) => {
    cn(I, a.run(() => N({
      store: I,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), S && s && n.hydrate && n.hydrate(I.$state, S), u = !0, c = !0, I;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fa(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function a(i, l) {
    const u = Bd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? er(Tu, null) : null), i && so(i), i = Su, i._s.has(r) || (s ? Ou(r, t, o, i) : xh(r, o, i)), i._s.get(r);
  }
  return a.$id = r, a;
}
const Ph = ["stroke-width"], Nh = ["d"], ze = /* @__PURE__ */ rn({
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
    return (s, a) => (ge(), Ee("svg", {
      class: Ke(o.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      H("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, Nh)
    ], 10, Ph));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mh(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Us = typeof window < "u", En = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Dh = (e, t, n) => Fh({ l: e, k: t, s: n }), Fh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), Uh = (e) => Ru(e) === "[object Date]", yn = (e) => Ru(e) === "[object RegExp]", oo = (e) => be(e) && Object.keys(e).length === 0, ot = Object.assign, $h = Object.create, Pe = (e = null) => $h(e);
let Gi;
const Pn = () => Gi || (Gi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Pe());
function qi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Yi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Hh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Yi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Yi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Vh = Object.prototype.hasOwnProperty;
function Lt(e, t) {
  return Vh.call(e, t);
}
const Ve = Array.isArray, De = (e) => typeof e == "function", se = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", Ie = (e) => e !== null && typeof e == "object", jh = (e) => Ie(e) && De(e.then) && De(e.catch), Cu = Object.prototype.toString, Ru = (e) => Cu.call(e), be = (e) => {
  if (!Ie(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Bh = (e) => e == null ? "" : Ve(e) || be(e) && e.toString === Cu ? JSON.stringify(e, null, 2) : String(e);
function Wh(e, t = "") {
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
function zh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function $s(e, t, n) {
  return { start: e, end: t };
}
const Kh = /\{([0-9a-zA-Z]+)\}/g;
function Lu(e, ...t) {
  return t.length === 1 && Gh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Kh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Iu = Object.assign, Xi = (e) => typeof e == "string", Gh = (e) => e !== null && typeof e == "object";
function ku(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Ua = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, qh = {
  [Ua.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Yh(e, t, ...n) {
  const r = Lu(qh[e], ...n || []), o = { message: String(r), code: e };
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
}, Xh = {
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
function dr(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, a = Lu((o || Xh)[e] || "", ...s || []), i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Jh(e) {
  throw e;
}
const Wt = " ", Qh = "\r", ht = `
`, Zh = "\u2028", ep = "\u2029";
function tp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const a = (D) => t[D] === Qh && t[D + 1] === ht, i = (D) => t[D] === ht, l = (D) => t[D] === ep, u = (D) => t[D] === Zh, c = (D) => a(D) || i(D) || l(D) || u(D), f = () => n, h = () => r, g = () => o, S = () => s, w = (D) => a(D) || l(D) || u(D) ? ht : t[D], A = () => w(n), E = () => w(n + s);
  function P() {
    return s = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
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
  function O() {
    const D = n + s;
    for (; D !== n; )
      P();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: g,
    peekOffset: S,
    charAt: w,
    currentChar: A,
    currentPeek: E,
    next: P,
    peek: y,
    reset: v,
    resetPeek: I,
    skipToPeek: O
  };
}
const an = void 0, np = ".", Ji = "'", rp = "tokenizer";
function sp(e, t = {}) {
  const n = t.location !== !1, r = tp(e), o = () => r.index(), s = () => zh(r.line(), r.column(), r.index()), a = s(), i = o(), l = {
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
      const Y = n ? $s(ee.startLoc, m) : null, L = dr(d, Y, {
        domain: rp,
        args: F
      });
      c(L);
    }
  }
  function h(d, m, R) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return n && (F.loc = $s(d.startLoc, d.endLoc)), R != null && (F.value = R), F;
  }
  const g = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function S(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (f(me.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function w(d) {
    let m = "";
    for (; d.currentPeek() === Wt || d.currentPeek() === ht; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function A(d) {
    const m = w(d);
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
    w(d);
    const F = E(d.currentPeek());
    return d.resetPeek(), F;
  }
  function v(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    w(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), ee = P(F);
    return d.resetPeek(), ee;
  }
  function I(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    w(d);
    const F = d.currentPeek() === Ji;
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
    const F = E(d.currentPeek());
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
      const Y = d.currentPeek();
      return Y === "{" ? E(d.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Wt || !Y ? !1 : Y === ht ? (d.peek(), F()) : U(d, !1);
    }, ee = F();
    return d.resetPeek(), ee;
  }
  function B(d) {
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
    const R = (ee = !1, Y = "", L = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? Y === "%" ? !1 : ee : $ === "@" || !$ ? Y === "%" ? !0 : ee : $ === "%" ? (d.peek(), R(ee, "%", !0)) : $ === "|" ? Y === "%" || L ? !0 : !(Y === Wt || Y === ht) : $ === Wt ? (d.peek(), R(!0, Wt, L)) : $ === ht ? (d.peek(), R(!0, ht, L)) : !0;
    }, F = R();
    return m && d.resetPeek(), F;
  }
  function J(d, m) {
    const R = d.currentChar();
    return R === an ? an : m(R) ? (d.next(), R) : null;
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
  function q(d) {
    return J(d, V);
  }
  function ae(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Le(d) {
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
    for (; m = Le(d); )
      R += m;
    return R;
  }
  function je(d) {
    A(d);
    const m = d.currentChar();
    return m !== "%" && f(me.EXPECTED_TOKEN, s(), 0, m), d.next(), "%";
  }
  function Ue(d) {
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
  function tt(d) {
    A(d);
    let m = "", R = "";
    for (; m = q(d); )
      R += m;
    return d.currentChar() === an && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R;
  }
  function pe(d) {
    A(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${we(d)}`) : m += we(d), d.currentChar() === an && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function K(d) {
    return d !== Ji && d !== ht;
  }
  function re(d) {
    A(d), S(d, "'");
    let m = "", R = "";
    for (; m = J(d, K); )
      m === "\\" ? R += oe(d) : R += m;
    const F = d.currentChar();
    return F === ht || F === an ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === ht && (d.next(), S(d, "'")), R) : (S(d, "'"), R);
  }
  function oe(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Ae(d, m, 4);
      case "U":
        return Ae(d, m, 6);
      default:
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Ae(d, m, R) {
    S(d, m);
    let F = "";
    for (let ee = 0; ee < R; ee++) {
      const Y = fe(d);
      if (!Y) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += Y;
    }
    return `\\${m}${F}`;
  }
  function qe(d) {
    return d !== "{" && d !== "}" && d !== Wt && d !== ht;
  }
  function p(d) {
    A(d);
    let m = "", R = "";
    for (; m = J(d, qe); )
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
      return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Wt ? R : (R += F, d.next(), m(R));
    };
    return m("");
  }
  function x(d) {
    A(d);
    const m = S(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return A(d), m;
  }
  function k(d, m) {
    let R = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(d), m.braceNest++, R;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && f(me.EMPTY_PLACEHOLDER, s(), 0), d.next(), R = h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && A(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), R;
      case "@":
        return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R = M(d, m) || g(m), m.braceNest = 0, R;
      default: {
        let ee = !0, Y = !0, L = !0;
        if (B(d))
          return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, X(d, m);
        if (ee = y(d, m))
          return R = h(m, 5, tt(d)), A(d), R;
        if (Y = v(d, m))
          return R = h(m, 6, pe(d)), A(d), R;
        if (L = I(d, m))
          return R = h(m, 7, re(d)), A(d), R;
        if (!ee && !Y && !L)
          return R = h(m, 13, p(d)), f(me.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, R.value), A(d), R;
        break;
      }
    }
    return R;
  }
  function M(d, m) {
    const { currentType: R } = m;
    let F = null;
    const ee = d.currentChar();
    switch ((R === 8 || R === 9 || R === 12 || R === 10) && (ee === ht || ee === Wt) && f(me.INVALID_LINKED_FORMAT, s(), 0), ee) {
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
        return B(d) ? (F = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, F) : O(d, m) || N(d, m) ? (A(d), M(d, m)) : D(d, m) ? (A(d), h(m, 12, _(d))) : C(d, m) ? (A(d), ee === "{" ? k(d, m) || F : h(m, 11, b(d))) : (R === 8 && f(me.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, X(d, m));
    }
  }
  function X(d, m) {
    let R = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return k(d, m) || g(m);
    if (m.inLinked)
      return M(d, m) || g(m);
    switch (d.currentChar()) {
      case "{":
        return k(d, m) || g(m);
      case "}":
        return f(me.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(d, m) || g(m);
      default: {
        if (B(d))
          return R = h(m, 1, x(d)), m.braceNest = 0, m.inLinked = !1, R;
        const { isModulo: ee, hasSpace: Y } = te(d);
        if (ee)
          return Y ? h(m, 0, Ue(d)) : h(m, 4, je(d));
        if (U(d))
          return h(m, 0, Ue(d));
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
    ) : X(r, l);
  }
  return {
    nextToken: G,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const op = "parser", ap = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ip(e, t, n) {
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
function lp(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(y, v, I, O, ...D) {
    const N = y.currentPosition();
    if (N.offset += O, N.column += O, n) {
      const C = t ? $s(I, N) : null, B = dr(v, C, {
        domain: op,
        args: D
      });
      n(B);
    }
  }
  function s(y, v, I, O, ...D) {
    const N = y.currentPosition();
    if (N.offset += O, N.column += O, r) {
      const C = t ? $s(I, N) : null;
      r(Yh(v, C, D));
    }
  }
  function a(y, v, I) {
    const O = { type: y };
    return t && (O.start = v, O.end = v, O.loc = { start: I, end: I }), O;
  }
  function i(y, v, I, O) {
    t && (y.end = v, y.loc && (y.loc.end = I));
  }
  function l(y, v) {
    const I = y.context(), O = a(3, I.offset, I.startLoc);
    return O.value = v, i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function u(y, v) {
    const I = y.context(), { lastOffset: O, lastStartLoc: D } = I, N = a(5, O, D);
    return N.index = parseInt(v, 10), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function c(y, v, I) {
    const O = y.context(), { lastOffset: D, lastStartLoc: N } = O, C = a(4, D, N);
    return C.key = v, I === !0 && (C.modulo = !0), y.nextToken(), i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function f(y, v) {
    const I = y.context(), { lastOffset: O, lastStartLoc: D } = I, N = a(9, O, D);
    return N.value = v.replace(ap, ip), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const v = y.nextToken(), I = y.context(), { lastOffset: O, lastStartLoc: D } = I, N = a(8, O, D);
    return v.type !== 12 ? (o(y, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), N.value = "", i(N, O, D), {
      nextConsumeToken: v,
      node: N
    }) : (v.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Rt(v)), N.value = v.value || "", i(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function g(y, v) {
    const I = y.context(), O = a(7, I.offset, I.startLoc);
    return O.value = v, i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function S(y) {
    const v = y.context(), I = a(6, v.offset, v.startLoc);
    let O = y.nextToken();
    if (O.type === 9) {
      const D = h(y);
      I.modifier = D.node, O = D.nextConsumeToken || y.nextToken();
    }
    switch (O.type !== 10 && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(O)), O = y.nextToken(), O.type === 2 && (O = y.nextToken()), O.type) {
      case 11:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(O)), I.key = g(y, O.value || "");
        break;
      case 5:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(O)), I.key = c(y, O.value || "");
        break;
      case 6:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(O)), I.key = u(y, O.value || "");
        break;
      case 7:
        O.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(O)), I.key = f(y, O.value || "");
        break;
      default: {
        o(y, me.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
        const D = y.context(), N = a(7, D.offset, D.startLoc);
        return N.value = "", i(N, D.offset, D.startLoc), I.key = N, i(I, D.offset, D.startLoc), {
          nextConsumeToken: O,
          node: I
        };
      }
    }
    return i(I, y.currentOffset(), y.currentPosition()), {
      node: I
    };
  }
  function w(y) {
    const v = y.context(), I = v.currentType === 1 ? y.currentOffset() : v.offset, O = v.currentType === 1 ? v.endLoc : v.startLoc, D = a(2, I, O);
    D.items = [];
    let N = null, C = null;
    do {
      const U = N || y.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(l(y, U.value || ""));
          break;
        case 6:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(u(y, U.value || ""));
          break;
        case 4:
          C = !0;
          break;
        case 5:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(c(y, U.value || "", !!C)), C && (s(y, Ua.USE_MODULO_SYNTAX, v.lastStartLoc, 0, Rt(U)), C = null);
          break;
        case 7:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(U)), D.items.push(f(y, U.value || ""));
          break;
        case 8: {
          const J = S(y);
          D.items.push(J.node), N = J.nextConsumeToken || null;
          break;
        }
      }
    } while (v.currentType !== 14 && v.currentType !== 1);
    const B = v.currentType === 1 ? v.lastOffset : y.currentOffset(), te = v.currentType === 1 ? v.lastEndLoc : y.currentPosition();
    return i(D, B, te), D;
  }
  function A(y, v, I, O) {
    const D = y.context();
    let N = O.items.length === 0;
    const C = a(1, v, I);
    C.cases = [], C.cases.push(O);
    do {
      const B = w(y);
      N || (N = B.items.length === 0), C.cases.push(B);
    } while (D.currentType !== 14);
    return N && o(y, me.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function E(y) {
    const v = y.context(), { offset: I, startLoc: O } = v, D = w(y);
    return v.currentType === 14 ? D : A(y, I, O, D);
  }
  function P(y) {
    const v = sp(y, Iu({}, e)), I = v.context(), O = a(0, I.offset, I.startLoc);
    return t && O.loc && (O.loc.source = y), O.body = E(v), e.onCacheKey && (O.cacheKey = e.onCacheKey(y)), I.currentType !== 14 && o(v, me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, y[I.offset] || ""), i(O, v.currentOffset(), v.currentPosition()), O;
  }
  return { parse: P };
}
function Rt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function cp(e, t = {}) {
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
function up(e, t = {}) {
  const n = cp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && $a(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function fp(e) {
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
const dp = "minifier";
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
      throw dr(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: dp,
        args: [e.type]
      });
  }
  delete e.type;
}
const mp = "parser";
function hp(e, t) {
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
  function l(w, A) {
    a.code += w;
  }
  function u(w, A = !0) {
    const E = A ? r : "";
    l(o ? E + "  ".repeat(w) : E);
  }
  function c(w = !0) {
    const A = ++a.indentLevel;
    w && u(A);
  }
  function f(w = !0) {
    const A = --a.indentLevel;
    w && u(A);
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
function pp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ar(e, t.key), t.modifier ? (e.push(", "), ar(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function gp(e, t) {
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
function _p(e, t) {
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
function bp(e, t) {
  t.body ? ar(e, t.body) : e.push("null");
}
function ar(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      bp(e, t);
      break;
    case 1:
      _p(e, t);
      break;
    case 2:
      gp(e, t);
      break;
    case 6:
      pp(e, t);
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
      throw dr(me.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: mp,
        args: [t.type]
      });
  }
}
const yp = (e, t = {}) => {
  const n = Xi(t.mode) ? t.mode : "normal", r = Xi(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = hp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${ku(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), ar(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function vp(e, t = {}) {
  const n = Iu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = lp(n).parse(e);
  return r ? (s && fp(i), o && Gn(i), { ast: i, code: "" }) : (up(i, n), yp(i, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ep() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ht(e) {
  return Ie(e) && Ha(e) === 0 && (Lt(e, "b") || Lt(e, "body"));
}
const xu = ["b", "body"];
function wp(e) {
  return wn(e, xu);
}
const Pu = ["c", "cases"];
function Sp(e) {
  return wn(e, Pu, []);
}
const Nu = ["s", "static"];
function Tp(e) {
  return wn(e, Nu);
}
const Mu = ["i", "items"];
function Ap(e) {
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
  throw Wr(t);
}
const Uu = ["m", "modifier"];
function Op(e) {
  return wn(e, Uu);
}
const $u = ["k", "key"];
function Cp(e) {
  const t = wn(e, $u);
  if (t)
    return t;
  throw Wr(
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
function Wr(e) {
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
const Rp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Lp(e) {
  return Rp.test(e);
}
function Ip(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function kp(e) {
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
function xp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Lp(t) ? Ip(t) : "*" + t;
}
function Pp(e) {
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
      if (o = 0, a === void 0 || (a = xp(a), a === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const S = e[n + 1];
    if (r === 5 && S === "'" || r === 6 && S === '"')
      return n++, i = "\\" + S, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && g())) {
      if (l = kp(s), f = Sn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = h[u[1]], c && (i = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const el = /* @__PURE__ */ new Map();
function Np(e, t) {
  return Ie(e) ? e[t] : null;
}
function Mp(e, t) {
  if (!Ie(e))
    return null;
  let n = el.get(t);
  if (n || (n = Pp(t), n && el.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const a = n[s];
    if (Hu.includes(a) && Ht(o))
      return null;
    const i = o[a];
    if (i === void 0 || De(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Dp = (e) => e, Fp = (e) => "", Up = "text", $p = (e) => e.length === 0 ? "" : Wh(e), Hp = Bh;
function tl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Vp(e) {
  const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t;
}
function jp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Bp(e = {}) {
  const t = e.locale, n = Vp(e), r = Ie(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? e.pluralRules[t] : tl, o = Ie(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? tl : void 0, s = (E) => E[r(n, E.length, o)], a = e.list || [], i = (E) => a[E], l = e.named || Pe();
  Ye(e.pluralIndex) && jp(n, l);
  const u = (E) => l[E];
  function c(E) {
    const P = De(e.messages) ? e.messages(E) : Ie(e.messages) ? e.messages[E] : !1;
    return P || (e.parent ? e.parent.message(E) : Fp);
  }
  const f = (E) => e.modifiers ? e.modifiers[E] : Dp, h = be(e.processor) && De(e.processor.normalize) ? e.processor.normalize : $p, g = be(e.processor) && De(e.processor.interpolate) ? e.processor.interpolate : Hp, S = be(e.processor) && se(e.processor.type) ? e.processor.type : Up, A = {
    list: i,
    named: u,
    plural: s,
    linked: (E, ...P) => {
      const [y, v] = P;
      let I = "text", O = "";
      P.length === 1 ? Ie(y) ? (O = y.modifier || O, I = y.type || I) : se(y) && (O = y || O) : P.length === 2 && (se(y) && (O = y || O), se(v) && (I = v || I));
      const D = c(E)(A), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && Ve(D) && O ? D[0] : D
      );
      return O ? f(O)(N, I) : N;
    },
    message: c,
    type: S,
    interpolate: g,
    normalize: h,
    values: ot(Pe(), a, l)
  };
  return A;
}
let zr = null;
function Wp(e) {
  zr = e;
}
function zp(e, t, n) {
  zr && zr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Kp = /* @__PURE__ */ Gp(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Gp(e) {
  return (t) => zr && zr.emit(e, t);
}
const qp = Ua.__EXTEND_POINT__, Rn = ao(qp), Yp = {
  // 2
  FALLBACK_TO_TRANSLATE: Rn(),
  // 3
  CANNOT_FORMAT_NUMBER: Rn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: Rn(),
  // 5
  CANNOT_FORMAT_DATE: Rn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: Rn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Rn(),
  // 8
  __EXTEND_POINT__: Rn()
  // 9
}, Vu = me.__EXTEND_POINT__, Ln = ao(Vu), Ut = {
  INVALID_ARGUMENT: Vu,
  // 17
  INVALID_DATE_ARGUMENT: Ln(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Ln(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Ln(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ln(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ln(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Ln(),
  // 23
  __EXTEND_POINT__: Ln()
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
  if (De(e)) {
    if (e.resolvedOnce && Po != null)
      return Po;
    if (e.constructor.name === "Function") {
      const t = e();
      if (jh(t))
        throw Xt(Ut.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Po = t;
    } else
      throw Xt(Ut.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xt(Ut.NOT_SUPPORT_LOCALE_TYPE);
}
function Xp(e, t, n) {
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
    se(s) && (r = Jp(e, t[o], n));
  }
  return r;
}
function Jp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Qp(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Qp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ve(n) || be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Zp = "9.14.5", io = -1, ir = "en-US", sl = "", ol = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function eg() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? ol(e) : t === "vnode" && Ie(e) && "__v_isVNode" in e ? ol(e.children) : e
  };
}
let Bu;
function tg(e) {
  Bu = e;
}
let Wu;
function ng(e) {
  Wu = e;
}
let zu;
function rg(e) {
  zu = e;
}
let Ku = null;
const sg = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ku = e;
}, og = /* @__NO_SIDE_EFFECTS__ */ () => Ku;
let Gu = null;
const al = (e) => {
  Gu = e;
}, ag = () => Gu;
let il = 0;
function ig(e = {}) {
  const t = De(e.onWarn) ? e.onWarn : Mh, n = se(e.version) ? e.version : Zp, r = se(e.locale) || De(e.locale) ? e.locale : ir, o = De(r) ? ir : r, s = Ve(e.fallbackLocale) || be(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = be(e.messages) ? e.messages : No(o), i = be(e.datetimeFormats) ? e.datetimeFormats : No(o), l = be(e.numberFormats) ? e.numberFormats : No(o), u = ot(Pe(), e.modifiers, eg()), c = e.pluralRules || Pe(), f = De(e.missing) ? e.missing : null, h = Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, g = Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, S = !!e.fallbackFormat, w = !!e.unresolving, A = De(e.postTranslation) ? e.postTranslation : null, E = be(e.processor) ? e.processor : null, P = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, v = De(e.messageCompiler) ? e.messageCompiler : Bu, I = De(e.messageResolver) ? e.messageResolver : Wu || Np, O = De(e.localeFallbacker) ? e.localeFallbacker : zu || Xp, D = Ie(e.fallbackContext) ? e.fallbackContext : void 0, N = e, C = Ie(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), B = Ie(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), te = Ie(N.__meta) ? N.__meta : {};
  il++;
  const U = {
    version: n,
    cid: il,
    locale: r,
    fallbackLocale: s,
    messages: a,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: h,
    fallbackWarn: g,
    fallbackFormat: S,
    unresolving: w,
    postTranslation: A,
    processor: E,
    warnHtmlMessage: P,
    escapeParameter: y,
    messageCompiler: v,
    messageResolver: I,
    localeFallbacker: O,
    fallbackContext: D,
    onWarn: t,
    __meta: te
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = C, U.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && zp(U, n, te), U;
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
function br(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function lg(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function cg(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (lg(e, t[r]))
      return !0;
  return !1;
}
function Mo(e) {
  return (n) => ug(n, e);
}
function ug(e, t) {
  const n = wp(t);
  if (n == null)
    throw Wr(
      0
      /* NodeTypes.Resource */
    );
  if (Ha(n) === 1) {
    const s = Sp(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      ll(e, i)
    ], []));
  } else
    return ll(e, n);
}
function ll(e, t) {
  const n = Tp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Ap(t).reduce((o, s) => [...o, ra(e, s)], []);
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
      throw Wr(n);
    }
    case 5: {
      const r = t;
      if (Lt(r, "i") && Ye(r.i))
        return e.interpolate(e.list(r.i));
      if (Lt(r, "index") && Ye(r.index))
        return e.interpolate(e.list(r.index));
      throw Wr(n);
    }
    case 6: {
      const r = t, o = Op(r), s = Cp(r);
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
const fg = (e) => e;
let ms = Pe();
function dg(e, t = {}) {
  let n = !1;
  const r = t.onError || Jh;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...vp(e, t), detectError: n };
}
function mg(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    Oe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || fg)(e), o = ms[r];
    if (o)
      return o;
    const { ast: s, detectError: a } = dg(e, {
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
const cl = () => "", Ct = (e) => De(e);
function ul(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = sa(...t), c = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Oe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, g = !!u.resolvedMessage, S = se(u.default) || Oe(u.default) ? Oe(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", w = n || S !== "", A = Va(e, u);
  h && hg(u);
  let [E, P, y] = g ? [
    l,
    A,
    i[A] || Pe()
  ] : qu(e, l, A, a, f, c), v = E, I = l;
  if (!g && !(se(v) || Ht(v) || Ct(v)) && w && (v = S, I = v), !g && (!(se(v) || Ht(v) || Ct(v)) || !se(P)))
    return o ? io : l;
  let O = !1;
  const D = () => {
    O = !0;
  }, N = Ct(v) ? v : Yu(e, l, P, v, I, D);
  if (O)
    return v;
  const C = _g(e, P, y, u), B = Bp(C), te = pg(e, N, B);
  let U = r ? r(te, l) : te;
  if (h && se(U) && (U = Hh(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: se(l) ? l : Ct(v) ? v.key : "",
      locale: P || (Ct(v) ? v.locale : ""),
      format: se(v) ? v : Ct(v) ? v.source : "",
      message: U
    };
    J.meta = ot({}, e.__meta, /* @__PURE__ */ og() || {}), Kp(J);
  }
  return U;
}
function hg(e) {
  Ve(e.list) ? e.list = e.list.map((t) => se(t) ? qi(t) : t) : Ie(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = qi(e.named[t]));
  });
}
function qu(e, t, n, r, o, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = Pe(), h, g = null;
  const S = "translate";
  for (let w = 0; w < c.length && (h = c[w], f = a[h] || Pe(), (g = l(f, t)) === null && (g = f[t]), !(se(g) || Ht(g) || Ct(g))); w++)
    if (!cg(h, c)) {
      const A = ja(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        s,
        S
      );
      A !== t && (g = A);
    }
  return [g, h, f];
}
function Yu(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Ct(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = a(r, gg(e, n, o, r, i, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function pg(e, t, n) {
  return t(n);
}
function sa(...e) {
  const [t, n, r] = e, o = Pe();
  if (!se(t) && !Ye(t) && !Ct(t) && !Ht(t))
    throw Xt(Ut.INVALID_ARGUMENT);
  const s = Ye(t) ? String(t) : (Ct(t), t);
  return Ye(n) ? o.plural = n : se(n) ? o.default = n : be(n) && !oo(n) ? o.named = n : Ve(n) && (o.list = n), Ye(r) ? o.plural = r : se(r) ? o.default = r : be(r) && ot(o, r), [s, o];
}
function gg(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => Dh(t, n, a)
  };
}
function _g(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (g) => {
      let S = a(n, g);
      if (S == null && c) {
        const [, , w] = qu(c, g, t, i, l, u);
        S = a(w, g);
      }
      if (se(S) || Ht(S)) {
        let w = !1;
        const E = Yu(e, g, t, S, g, () => {
          w = !0;
        });
        return w ? cl : E;
      } else return Ct(S) ? S : cl;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ye(r.plural) && (h.pluralIndex = r.plural), h;
}
function fl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, c, f] = oa(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const g = !!c.part, S = Va(e, c), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    S
  );
  if (!se(l) || l === "")
    return new Intl.DateTimeFormat(S, f).format(u);
  let A = {}, E, P = null;
  const y = "datetime format";
  for (let O = 0; O < w.length && (E = w[O], A = n[E] || {}, P = A[l], !be(P)); O++)
    ja(e, l, E, h, y);
  if (!be(P) || !se(E))
    return r ? io : l;
  let v = `${E}__${l}`;
  oo(f) || (v = `${v}__${JSON.stringify(f)}`);
  let I = i.get(v);
  return I || (I = new Intl.DateTimeFormat(E, ot({}, P, f)), i.set(v, I)), g ? I.formatToParts(u) : I.format(u);
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
      throw Xt(Ut.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Xt(Ut.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Uh(t)) {
    if (isNaN(t.getTime()))
      throw Xt(Ut.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ye(t))
    i = t;
  else
    throw Xt(Ut.INVALID_ARGUMENT);
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
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, c, f] = aa(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const g = !!c.part, S = Va(e, c), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    S
  );
  if (!se(l) || l === "")
    return new Intl.NumberFormat(S, f).format(u);
  let A = {}, E, P = null;
  const y = "number format";
  for (let O = 0; O < w.length && (E = w[O], A = n[E] || {}, P = A[l], !be(P)); O++)
    ja(e, l, E, h, y);
  if (!be(P) || !se(E))
    return r ? io : l;
  let v = `${E}__${l}`;
  oo(f) || (v = `${v}__${JSON.stringify(f)}`);
  let I = i.get(v);
  return I || (I = new Intl.NumberFormat(E, ot({}, P, f)), i.set(v, I)), g ? I.formatToParts(u) : I.format(u);
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
    throw Xt(Ut.INVALID_ARGUMENT);
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
Ep();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const bg = "9.14.5";
function yg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Pn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Pn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const vg = Yp.__EXTEND_POINT__, zt = ao(vg);
zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt();
const Qu = Ut.__EXTEND_POINT__, vt = ao(Qu), Ze = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Qu,
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
function rt(e, ...t) {
  return dr(e, null, void 0);
}
const ia = /* @__PURE__ */ En("__translateVNode"), la = /* @__PURE__ */ En("__datetimeParts"), ca = /* @__PURE__ */ En("__numberParts"), Zu = En("__setPluralRules"), ef = /* @__PURE__ */ En("__injectWithOption"), ua = /* @__PURE__ */ En("__dispose");
function Kr(e) {
  if (!Ie(e) || Ht(e))
    return e;
  for (const t in e)
    if (Lt(e, t))
      if (!t.includes("."))
        Ie(e[t]) && Kr(e[t]);
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
        if (s || (Ht(o) ? Hu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Ht(o)) {
          const a = o[n[r]];
          Ie(a) && Kr(a);
        }
      }
  return e;
}
function lo(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, a = be(n) ? n : Ve(r) ? Pe() : { [e]: Pe() };
  if (Ve(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || Pe(), Ts(u, a[l])) : Ts(u, a);
    } else
      se(i) && Ts(JSON.parse(i), a);
  }), o == null && s)
    for (const i in a)
      Lt(a, i) && Kr(a[i]);
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
  return ye(Xr, null, e, 0);
}
const gl = "__INTLIFY_META__", _l = () => [], Eg = () => !1;
let bl = 0;
function yl(e) {
  return ((t, n, r, o) => e(n, r, tn() || void 0, o));
}
const wg = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = tn();
  let t = null;
  return e && (t = tf(e)[gl]) ? { [gl]: t } : null;
};
function Ba(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, a = Us ? Q : Oc, i = !!e.translateExistCompatible;
  let l = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : se(e.locale) ? e.locale : ir
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = a(lo(u.value, e)), h = a(be(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), g = a(be(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let S = n ? n.missingWarn : Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, w = n ? n.fallbackWarn : Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, A = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, P = De(e.missing) ? e.missing : null, y = De(e.missing) ? yl(e.missing) : null, v = De(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter;
  const D = n ? n.modifiers : be(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, C;
  C = (() => {
    o && al(null);
    const L = {
      version: bg,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: D,
      pluralRules: N,
      missing: y === null ? void 0 : y,
      missingWarn: S,
      fallbackWarn: w,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: I,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = h.value, L.numberFormats = g.value, L.__datetimeFormatters = be(C) ? C.__datetimeFormatters : void 0, L.__numberFormatters = be(C) ? C.__numberFormatters : void 0;
    const $ = ig(L);
    return o && al($), $;
  })(), br(C, u.value, c.value);
  function te() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      g.value
    ];
  }
  const U = _e({
    get: () => u.value,
    set: (L) => {
      u.value = L, C.locale = u.value;
    }
  }), J = _e({
    get: () => c.value,
    set: (L) => {
      c.value = L, C.fallbackLocale = c.value, br(C, u.value, L);
    }
  }), ie = _e(() => f.value), de = /* @__PURE__ */ _e(() => h.value), V = /* @__PURE__ */ _e(() => g.value);
  function q() {
    return De(v) ? v : null;
  }
  function ae(L) {
    v = L, C.postTranslation = L;
  }
  function Le() {
    return P;
  }
  function xe(L) {
    L !== null && (y = yl(L)), P = L, C.missing = y;
  }
  const fe = (L, $, ce, Se, $e, nt) => {
    te();
    let Xe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (C.fallbackContext = n ? ag() : void 0), Xe = L(C);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (C.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ye(Xe) && Xe === io || ce === "translate exists" && !Xe) {
      const [Vt, Tn] = $();
      return n && A ? Se(n) : $e(Vt);
    } else {
      if (nt(Xe))
        return Xe;
      throw rt(Ze.UNEXPECTED_RETURN_TYPE);
    }
  };
  function we(...L) {
    return fe(($) => Reflect.apply(ul, null, [$, ...L]), () => sa(...L), "translate", ($) => Reflect.apply($.t, $, [...L]), ($) => $, ($) => se($));
  }
  function je(...L) {
    const [$, ce, Se] = L;
    if (Se && !Ie(Se))
      throw rt(Ze.INVALID_ARGUMENT);
    return we($, ce, ot({ resolvedMessage: !0 }, Se || {}));
  }
  function Ue(...L) {
    return fe(($) => Reflect.apply(fl, null, [$, ...L]), () => oa(...L), "datetime format", ($) => Reflect.apply($.d, $, [...L]), () => sl, ($) => se($));
  }
  function tt(...L) {
    return fe(($) => Reflect.apply(ml, null, [$, ...L]), () => aa(...L), "number format", ($) => Reflect.apply($.n, $, [...L]), () => sl, ($) => se($));
  }
  function pe(L) {
    return L.map(($) => se($) || Ye($) || Oe($) ? pl(String($)) : $);
  }
  const re = {
    normalize: pe,
    interpolate: (L) => L,
    type: "vnode"
  };
  function oe(...L) {
    return fe(
      ($) => {
        let ce;
        const Se = $;
        try {
          Se.processor = re, ce = Reflect.apply(ul, null, [Se, ...L]);
        } finally {
          Se.processor = null;
        }
        return ce;
      },
      () => sa(...L),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ia](...L),
      ($) => [pl($)],
      ($) => Ve($)
    );
  }
  function Ae(...L) {
    return fe(
      ($) => Reflect.apply(ml, null, [$, ...L]),
      () => aa(...L),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ca](...L),
      _l,
      ($) => se($) || Ve($)
    );
  }
  function qe(...L) {
    return fe(
      ($) => Reflect.apply(fl, null, [$, ...L]),
      () => oa(...L),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[la](...L),
      _l,
      ($) => se($) || Ve($)
    );
  }
  function p(L) {
    N = L, C.pluralRules = N;
  }
  function _(L, $) {
    return fe(() => {
      if (!L)
        return !1;
      const ce = se($) ? $ : u.value, Se = k(ce), $e = C.messageResolver(Se, L);
      return i ? $e != null : Ht($e) || Ct($e) || se($e);
    }, () => [L], "translate exists", (ce) => Reflect.apply(ce.te, ce, [L, $]), Eg, (ce) => Oe(ce));
  }
  function b(L) {
    let $ = null;
    const ce = ju(C, c.value, u.value);
    for (let Se = 0; Se < ce.length; Se++) {
      const $e = f.value[ce[Se]] || {}, nt = C.messageResolver($e, L);
      if (nt != null) {
        $ = nt;
        break;
      }
    }
    return $;
  }
  function x(L) {
    const $ = b(L);
    return $ ?? (n ? n.tm(L) || {} : {});
  }
  function k(L) {
    return f.value[L] || {};
  }
  function M(L, $) {
    if (s) {
      const ce = { [L]: $ };
      for (const Se in ce)
        Lt(ce, Se) && Kr(ce[Se]);
      $ = ce[L];
    }
    f.value[L] = $, C.messages = f.value;
  }
  function X(L, $) {
    f.value[L] = f.value[L] || {};
    const ce = { [L]: $ };
    if (s)
      for (const Se in ce)
        Lt(ce, Se) && Kr(ce[Se]);
    $ = ce[L], Ts($, f.value[L]), C.messages = f.value;
  }
  function G(L) {
    return h.value[L] || {};
  }
  function d(L, $) {
    h.value[L] = $, C.datetimeFormats = h.value, dl(C, L, $);
  }
  function m(L, $) {
    h.value[L] = ot(h.value[L] || {}, $), C.datetimeFormats = h.value, dl(C, L, $);
  }
  function R(L) {
    return g.value[L] || {};
  }
  function F(L, $) {
    g.value[L] = $, C.numberFormats = g.value, hl(C, L, $);
  }
  function ee(L, $) {
    g.value[L] = ot(g.value[L] || {}, $), C.numberFormats = g.value, hl(C, L, $);
  }
  bl++, n && Us && (Tt(n.locale, (L) => {
    l && (u.value = L, C.locale = L, br(C, u.value, c.value));
  }), Tt(n.fallbackLocale, (L) => {
    l && (c.value = L, C.fallbackLocale = L, br(C, u.value, c.value));
  }));
  const Y = {
    id: bl,
    locale: U,
    fallbackLocale: J,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(L) {
      l = L, L && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, br(C, u.value, c.value));
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
    set missingWarn(L) {
      S = L, C.missingWarn = S;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(L) {
      w = L, C.fallbackWarn = w;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(L) {
      A = L;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(L) {
      E = L, C.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(L) {
      I = L, C.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return O;
    },
    set escapeParameter(L) {
      O = L, C.escapeParameter = L;
    },
    t: we,
    getLocaleMessage: k,
    setLocaleMessage: M,
    mergeLocaleMessage: X,
    getPostTranslationHandler: q,
    setPostTranslationHandler: ae,
    getMissingHandler: Le,
    setMissingHandler: xe,
    [Zu]: p
  };
  return Y.datetimeFormats = de, Y.numberFormats = V, Y.rt = je, Y.te = _, Y.tm = x, Y.d = Ue, Y.n = tt, Y.getDateTimeFormat = G, Y.setDateTimeFormat = d, Y.mergeDateTimeFormat = m, Y.getNumberFormat = R, Y.setNumberFormat = F, Y.mergeNumberFormat = ee, Y[ef] = r, Y[ia] = oe, Y[la] = qe, Y[ca] = Ae, Y;
}
function Sg(e) {
  const t = se(e.locale) ? e.locale : ir, n = se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = De(e.missing) ? e.missing : void 0, o = Oe(e.silentTranslationWarn) || yn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Oe(e.silentFallbackWarn) || yn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = Oe(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = be(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = De(e.postTranslation) ? e.postTranslation : void 0, f = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, g = Oe(e.sync) ? e.sync : !0;
  let S = e.messages;
  if (be(e.sharedMessages)) {
    const O = e.sharedMessages;
    S = Object.keys(O).reduce((N, C) => {
      const B = N[C] || (N[C] = {});
      return ot(B, O[C]), N;
    }, S || {});
  }
  const { __i18n: w, __root: A, __injectWithOption: E } = e, P = e.datetimeFormats, y = e.numberFormats, v = e.flatJson, I = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: S,
    flatJson: v,
    datetimeFormats: P,
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
    inheritLocale: g,
    translateExistCompatible: I,
    __i18n: w,
    __root: A,
    __injectWithOption: E
  };
}
function fa(e = {}, t) {
  {
    const n = Ba(Sg(e)), { __extender: r } = e, o = {
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
        const [a, i, l] = s, u = {};
        let c = null, f = null;
        if (!se(a))
          throw rt(Ze.INVALID_ARGUMENT);
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
          throw rt(Ze.INVALID_ARGUMENT);
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
function Tg({ slots: e }, t) {
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
const Ag = /* @__PURE__ */ rn({
  /* eslint-disable */
  name: "i18n-t",
  props: ot({
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
    const { slots: n, attrs: r } = t, o = e.i18n || Qr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), a = Pe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = se(e.plural) ? +e.plural : e.plural);
      const i = Tg(t, s), l = o[ia](e.keypath, i, a), u = ot(Pe(), r), c = se(e.tag) || Ie(e.tag) ? e.tag : rf();
      return Br(c, u, l);
    };
  }
}), vl = Ag;
function Og(e) {
  return Ve(e) && !se(e[0]);
}
function sf(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = Pe();
    e.locale && (a.locale = e.locale), se(e.format) ? a.key = e.format : Ie(e.format) && (se(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((h, g) => n.includes(g) ? ot(Pe(), h, { [g]: e.format[g] }) : h, Pe()));
    const l = r(e.value, a, i);
    let u = [a.key];
    Ve(l) ? u = l.map((h, g) => {
      const S = o[h.type], w = S ? S({ [h.type]: h.value, index: g, parts: l }) : [h.value];
      return Og(w) && (w[0].key = `${h.type}-${g}`), w;
    }) : se(l) && (u = [l]);
    const c = ot(Pe(), s), f = se(e.tag) || Ie(e.tag) ? e.tag : rf();
    return Br(f, c, u);
  };
}
const Cg = /* @__PURE__ */ rn({
  /* eslint-disable */
  name: "i18n-n",
  props: ot({
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
    const n = e.i18n || Qr({
      useScope: e.scope,
      __useComponent: !0
    });
    return sf(e, t, Ju, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ca](...r)
    ));
  }
}), El = Cg, Rg = /* @__PURE__ */ rn({
  /* eslint-disable */
  name: "i18n-d",
  props: ot({
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
    const n = e.i18n || Qr({
      useScope: e.scope,
      __useComponent: !0
    });
    return sf(e, t, Xu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[la](...r)
    ));
  }
}), wl = Rg;
function Lg(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Ig(e) {
  const t = (a) => {
    const { instance: i, modifiers: l, value: u } = a;
    if (!i || !i.$)
      throw rt(Ze.UNEXPECTED_ERROR);
    const c = Lg(e, i.$), f = Sl(u);
    return [
      Reflect.apply(c.t, c, [...Tl(f)]),
      c
    ];
  };
  return {
    created: (a, i) => {
      const [l, u] = t(i);
      Us && e.global === u && (a.__i18nWatcher = Tt(u.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      Us && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: i }) => {
      if (a.__composer) {
        const l = a.__composer, u = Sl(i);
        a.textContent = Reflect.apply(l.t, l, [
          ...Tl(u)
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
      throw rt(Ze.REQUIRED_VALUE, "path");
    return e;
  } else
    throw rt(Ze.INVALID_VALUE);
}
function Tl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, a = {}, i = r || {};
  return se(n) && (a.locale = n), Ye(o) && (a.plural = o), Ye(s) && (a.plural = s), [t, i, a];
}
function kg(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (Oe(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : vl.name, "I18nT"].forEach((a) => e.component(a, vl)), [El.name, "I18nN"].forEach((a) => e.component(a, El)), [wl.name, "I18nD"].forEach((a) => e.component(a, wl))), e.directive("t", Ig(t));
}
function xg(e, t, n) {
  return {
    beforeCreate() {
      const r = tn();
      if (!r)
        throw rt(Ze.UNEXPECTED_ERROR);
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
        throw rt(Ze.UNEXPECTED_ERROR);
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
const Pg = /* @__PURE__ */ En("global-vue-i18n");
function Ng(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Oe(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Oe(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [a, i] = Mg(e, n), l = /* @__PURE__ */ En("");
  function u(h) {
    return s.get(h) || null;
  }
  function c(h, g) {
    s.set(h, g);
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
      async install(g, ...S) {
        if (g.__VUE_I18N_SYMBOL__ = l, g.provide(g.__VUE_I18N_SYMBOL__, h), be(S[0])) {
          const E = S[0];
          h.__composerExtend = E.__composerExtend, h.__vueI18nExtend = E.__vueI18nExtend;
        }
        let w = null;
        !n && r && (w = Wg(g, h.global)), __VUE_I18N_FULL_INSTALL__ && kg(g, h, ...S), __VUE_I18N_LEGACY_API__ && n && g.mixin(xg(i, i.__composer, h));
        const A = g.unmount;
        g.unmount = () => {
          w && w(), h.dispose(), A();
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
function Qr(e = {}) {
  const t = tn();
  if (t == null)
    throw rt(Ze.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw rt(Ze.NOT_INSTALLED);
  const n = Dg(t), r = Ug(n), o = tf(t), s = Fg(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw rt(Ze.NOT_AVAILABLE_IN_LEGACY_MODE);
    return jg(t, s, r, e);
  }
  if (s === "global")
    return nf(r, e, o), r;
  if (s === "parent") {
    let l = $g(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = ot({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Ba(l), a.__composerExtend && (i[ua] = a.__composerExtend(i)), Vg(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Mg(e, t, n) {
  const r = Ea();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => fa(e)) : r.run(() => Ba(e));
    if (o == null)
      throw rt(Ze.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Dg(e) {
  {
    const t = er(e.isCE ? Pg : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw rt(e.isCE ? Ze.NOT_INSTALLED_WITH_PROVIDE : Ze.UNEXPECTED_ERROR);
    return t;
  }
}
function Fg(e, t) {
  return oo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ug(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function $g(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = Hg(t, n);
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
function Hg(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Vg(e, t, n) {
  fr(() => {
  }, t), Yr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ua];
    o && (o(), delete r[ua]);
  }, t);
}
function jg(e, t, n, r = {}) {
  const o = t === "local", s = Oc(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw rt(Ze.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = Oe(r.inheritLocale) ? r.inheritLocale : !se(r.locale), i = Q(
    // prettier-ignore
    !o || a ? n.locale.value : se(r.locale) ? r.locale : ir
  ), l = Q(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : se(r.fallbackLocale) || Ve(r.fallbackLocale) || be(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = Q(lo(i.value, r)), c = Q(be(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = Q(be(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), h = o ? n.missingWarn : Oe(r.missingWarn) || yn(r.missingWarn) ? r.missingWarn : !0, g = o ? n.fallbackWarn : Oe(r.fallbackWarn) || yn(r.fallbackWarn) ? r.fallbackWarn : !0, S = o ? n.fallbackRoot : Oe(r.fallbackRoot) ? r.fallbackRoot : !0, w = !!r.fallbackFormat, A = De(r.missing) ? r.missing : null, E = De(r.postTranslation) ? r.postTranslation : null, P = o ? n.warnHtmlMessage : Oe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, y = !!r.escapeParameter, v = o ? n.modifiers : be(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || o && n.pluralRules;
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
  }), C = _e(() => s.value ? s.value.messages.value : u.value), B = _e(() => c.value), te = _e(() => f.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : E;
  }
  function J(b) {
    s.value && s.value.setPostTranslationHandler(b);
  }
  function ie() {
    return s.value ? s.value.getMissingHandler() : A;
  }
  function de(b) {
    s.value && s.value.setMissingHandler(b);
  }
  function V(b) {
    return O(), b();
  }
  function q(...b) {
    return s.value ? V(() => Reflect.apply(s.value.t, null, [...b])) : V(() => "");
  }
  function ae(...b) {
    return s.value ? Reflect.apply(s.value.rt, null, [...b]) : "";
  }
  function Le(...b) {
    return s.value ? V(() => Reflect.apply(s.value.d, null, [...b])) : V(() => "");
  }
  function xe(...b) {
    return s.value ? V(() => Reflect.apply(s.value.n, null, [...b])) : V(() => "");
  }
  function fe(b) {
    return s.value ? s.value.tm(b) : {};
  }
  function we(b, x) {
    return s.value ? s.value.te(b, x) : !1;
  }
  function je(b) {
    return s.value ? s.value.getLocaleMessage(b) : {};
  }
  function Ue(b, x) {
    s.value && (s.value.setLocaleMessage(b, x), u.value[b] = x);
  }
  function tt(b, x) {
    s.value && s.value.mergeLocaleMessage(b, x);
  }
  function pe(b) {
    return s.value ? s.value.getDateTimeFormat(b) : {};
  }
  function K(b, x) {
    s.value && (s.value.setDateTimeFormat(b, x), c.value[b] = x);
  }
  function re(b, x) {
    s.value && s.value.mergeDateTimeFormat(b, x);
  }
  function oe(b) {
    return s.value ? s.value.getNumberFormat(b) : {};
  }
  function Ae(b, x) {
    s.value && (s.value.setNumberFormat(b, x), f.value[b] = x);
  }
  function qe(b, x) {
    s.value && s.value.mergeNumberFormat(b, x);
  }
  const p = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: D,
    fallbackLocale: N,
    messages: C,
    datetimeFormats: B,
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
    set missingWarn(b) {
      s.value && (s.value.missingWarn = b);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : g;
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
      return s.value ? s.value.warnHtmlMessage : P;
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
    t: q,
    getPostTranslationHandler: U,
    setPostTranslationHandler: J,
    getMissingHandler: ie,
    setMissingHandler: de,
    rt: ae,
    d: Le,
    n: xe,
    tm: fe,
    te: we,
    getLocaleMessage: je,
    setLocaleMessage: Ue,
    mergeLocaleMessage: tt,
    getDateTimeFormat: pe,
    setDateTimeFormat: K,
    mergeDateTimeFormat: re,
    getNumberFormat: oe,
    setNumberFormat: Ae,
    mergeNumberFormat: qe
  };
  function _(b) {
    b.locale.value = i.value, b.fallbackLocale.value = l.value, Object.keys(u.value).forEach((x) => {
      b.mergeLocaleMessage(x, u.value[x]);
    }), Object.keys(c.value).forEach((x) => {
      b.mergeDateTimeFormat(x, c.value[x]);
    }), Object.keys(f.value).forEach((x) => {
      b.mergeNumberFormat(x, f.value[x]);
    }), b.escapeParameter = y, b.fallbackFormat = w, b.fallbackRoot = S, b.fallbackWarn = g, b.missingWarn = h, b.warnHtmlMessage = P;
  }
  return Gc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw rt(Ze.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const b = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = b.locale.value, l.value = b.fallbackLocale.value, u.value = b.messages.value, c.value = b.datetimeFormats.value, f.value = b.numberFormats.value) : o && _(b);
  }), p;
}
const Bg = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Ol = ["t", "rt", "d", "n", "tm", "te"];
function Wg(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Bg.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw rt(Ze.UNEXPECTED_ERROR);
    const a = Be(s.value) ? {
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
      throw rt(Ze.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Ol.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
yg();
tg(mg);
ng(Mp);
rg(ju);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Pn();
  e.__INTLIFY__ = !0, Wp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const zg = "sub2api_locale", za = "en", Kg = {
  en: () => import("./index-Cd_2Lby2.js"),
  zh: () => import("./index-DIg8WdAu.js")
};
function of(e) {
  return e === "en" || e === "zh";
}
function Gg() {
  const e = localStorage.getItem(zg);
  return e && of(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : za;
}
const nr = Ng({
  legacy: !1,
  locale: Gg(),
  fallbackLocale: za,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Cl = /* @__PURE__ */ new Set();
async function af(e) {
  if (Cl.has(e))
    return;
  const t = Kg[e], n = await t();
  nr.global.setLocaleMessage(e, n.default), Cl.add(e);
}
async function qg() {
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
const { toString: Yg } = Object.prototype, { getPrototypeOf: lr } = Object, { iterator: Zr, toStringTag: uf } = Symbol, Hs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Gr = (e, t) => {
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
}, Xg = (e, t) => e != null && Gr(e, t) ? e[t] : void 0, Ka = /* @__PURE__ */ ((e) => (t) => {
  const n = Yg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => Ka(t) === e), co = (e) => (t) => typeof t === e, { isArray: $n } = Array, cr = co("undefined");
function mr(e) {
  return e !== null && !cr(e) && e.constructor !== null && !cr(e.constructor) && Et(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ff = Pt("ArrayBuffer");
function Jg(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ff(e.buffer), t;
}
const Qg = co("string"), Et = co("function"), df = co("number"), hr = (e) => e !== null && typeof e == "object", Zg = (e) => e === !0 || e === !1, As = (e) => {
  if (!hr(e))
    return !1;
  const t = lr(e);
  return (t === null || t === Object.prototype || lr(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Gr(e, uf) && !Gr(e, Zr);
}, e0 = (e) => {
  if (!hr(e) || mr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, t0 = Pt("Date"), n0 = Pt("File"), r0 = (e) => !!(e && typeof e.uri < "u"), s0 = (e) => e && typeof e.getParts < "u", o0 = Pt("Blob"), a0 = Pt("FileList"), i0 = (e) => hr(e) && Et(e.pipe);
function l0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Rl = l0(), Ll = typeof Rl.FormData < "u" ? Rl.FormData : void 0, c0 = (e) => {
  if (!e) return !1;
  if (Ll && e instanceof Ll) return !0;
  const t = lr(e);
  if (!t || t === Object.prototype || !Et(e.append)) return !1;
  const n = Ka(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && Et(e.toString) && e.toString() === "[object FormData]";
}, u0 = Pt("URLSearchParams"), [f0, d0, m0, h0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Pt), p0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function es(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), $n(e))
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
const Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hf = (e) => !cr(e) && e !== Nn;
function da(...e) {
  const { caseless: t, skipUndefined: n } = hf(this) && this || {}, r = {}, o = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && typeof a == "string" && mf(r, a) || a, l = Hs(r, i) ? r[i] : void 0;
    As(l) && As(s) ? r[i] = da(l, s) : As(s) ? r[i] = da({}, s) : $n(s) ? r[i] = s.slice() : (!n || !cr(s)) && (r[i] = s);
  };
  for (let s = 0, a = e.length; s < a; s++) {
    const i = e[s];
    if (!i || mr(i) || (es(i, o), typeof i != "object" || $n(i)))
      continue;
    const l = Object.getOwnPropertySymbols(i);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      C0.call(i, c) && o(i[c], c);
    }
  }
  return r;
}
const g0 = (e, t, n, { allOwnKeys: r } = {}) => (es(
  t,
  (o, s) => {
    n && Et(o) ? Object.defineProperty(e, s, {
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
), e), _0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), b0 = (e, t, n, r) => {
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
}, y0 = (e, t, n, r) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && lr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, v0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, E0 = (e) => {
  if (!e) return null;
  if ($n(e)) return e;
  let t = e.length;
  if (!df(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, w0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && lr(Uint8Array)), S0 = (e, t) => {
  const r = (e && e[Zr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, T0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, A0 = Pt("HTMLFormElement"), O0 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: C0 } = Object.prototype, R0 = Pt("RegExp"), pf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  es(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, L0 = (e) => {
  pf(e, (t, n) => {
    if (Et(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (Et(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, I0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return $n(e) ? r(e) : r(String(e).split(t)), n;
}, k0 = () => {
}, x0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function P0(e) {
  return !!(e && Et(e.append) && e[uf] === "FormData" && e[Zr]);
}
const N0 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (hr(r)) {
      if (t.has(r))
        return;
      if (mr(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = $n(r) ? [] : {};
        return es(r, (s, a) => {
          const i = n(s);
          !cr(i) && (o[a] = i);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, M0 = Pt("AsyncFunction"), D0 = (e) => e && (hr(e) || Et(e)) && Et(e.then) && Et(e.catch), gf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Nn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === Nn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Nn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Et(Nn.postMessage)), F0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nn) : typeof process < "u" && process.nextTick || gf, _f = (e) => e != null && Et(e[Zr]), U0 = (e) => e != null && Gr(e, Zr) && _f(e), T = {
  isArray: $n,
  isArrayBuffer: ff,
  isBuffer: mr,
  isFormData: c0,
  isArrayBufferView: Jg,
  isString: Qg,
  isNumber: df,
  isBoolean: Zg,
  isObject: hr,
  isPlainObject: As,
  isEmptyObject: e0,
  isReadableStream: f0,
  isRequest: d0,
  isResponse: m0,
  isHeaders: h0,
  isUndefined: cr,
  isDate: t0,
  isFile: n0,
  isReactNativeBlob: r0,
  isReactNative: s0,
  isBlob: o0,
  isRegExp: R0,
  isFunction: Et,
  isStream: i0,
  isURLSearchParams: u0,
  isTypedArray: w0,
  isFileList: a0,
  forEach: es,
  merge: da,
  extend: g0,
  trim: p0,
  stripBOM: _0,
  inherits: b0,
  toFlatObject: y0,
  kindOf: Ka,
  kindOfTest: Pt,
  endsWith: v0,
  toArray: E0,
  forEachEntry: S0,
  matchAll: T0,
  isHTMLForm: A0,
  hasOwnProperty: Hs,
  hasOwnProp: Hs,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Gr,
  getSafeProp: Xg,
  reduceDescriptors: pf,
  freezeMethods: L0,
  toObjectSet: I0,
  toCamelCase: O0,
  noop: k0,
  toFiniteNumber: x0,
  findKey: mf,
  global: Nn,
  isContextDefined: hf,
  isSpecCompliantForm: P0,
  toJSONObject: N0,
  isAsyncFn: M0,
  isThenable: D0,
  setImmediate: gf,
  asap: F0,
  isIterable: _f,
  isSafeIterable: U0
}, $0 = T.toObjectSet([
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
]), H0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && $0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function V0(e) {
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
const j0 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), B0 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ga(e, t) {
  return T.isArray(e) ? e.map((n) => Ga(n, t)) : V0(String(e).replace(t, ""));
}
const W0 = (e) => Ga(e, j0), z0 = (e) => Ga(e, B0);
function bf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return T.forEach(e.toJSON(), (n, r) => {
    t[r] = z0(n);
  }), t;
}
const Il = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function Os(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Os) : W0(String(e));
}
function K0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const G0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function q0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Y0(e, t) {
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
    function s(i, l, u) {
      const c = yr(l);
      if (!c)
        return;
      const f = T.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = Os(i));
    }
    const a = (i, l) => T.forEach(i, (u, c) => s(u, c, l));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (T.isString(t) && (t = t.trim()) && !G0(t))
      a(H0(t), n);
    else if (T.isObject(t) && T.isSafeIterable(t)) {
      let i = /* @__PURE__ */ Object.create(null), l, u;
      for (const c of t) {
        if (!T.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        u = c[0], T.hasOwnProp(i, u) ? (l = i[u], i[u] = T.isArray(l) ? [...l, c[1]] : [l, c[1]]) : i[u] = c[1];
      }
      a(i, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = yr(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return K0(o);
        if (T.isFunction(n))
          return n.call(this, o, r);
        if (T.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = yr(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Do(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = yr(a), a) {
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
      const i = t ? q0(s) : String(s).trim();
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
      const i = yr(a);
      r[i] || (Y0(o, a), r[i] = !0);
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
const X0 = "[REDACTED ****]";
function J0(e) {
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
function Q0(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || T.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof dt && (s = s.toJSON()), r.push(s);
    let a;
    if (T.isArray(s))
      a = [], s.forEach((i, l) => {
        const u = o(i);
        T.isUndefined(u) || (a[l] = u);
      });
    else {
      if (!T.isPlainObject(s) && J0(s))
        return r.pop(), s;
      a = /* @__PURE__ */ Object.create(null);
      for (const [i, l] of Object.entries(s)) {
        const u = n.has(i.toLowerCase()) ? X0 : o(l);
        T.isUndefined(u) || (a[i] = u);
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
    const t = this.config, n = t && T.hasOwnProp(t, "redact") ? t.redact : void 0, r = T.isArray(n) && n.length > 0 ? Q0(t, n) : T.toJSONObject(t);
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
const Z0 = null, vf = 100;
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
function e_(e) {
  return T.isArray(e) && !e.some(ma);
}
const t_ = T.toFlatObject(T, {}, null, function(t) {
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
  const r = n.metaTokens, o = n.visitor || S, s = n.dots, a = n.indexes, i = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? vf : n.maxDepth, u = i && T.isSpecCompliantForm(t), c = [];
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(E) {
    if (E === null) return "";
    if (T.isDate(E))
      return E.toISOString();
    if (T.isBoolean(E))
      return E.toString();
    if (!u && T.isBlob(E))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    if (T.isArrayBuffer(E) || T.isTypedArray(E)) {
      if (u && typeof i == "function")
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
  function g(E, P) {
    if (l === 1 / 0)
      return JSON.stringify(E);
    const y = [];
    return JSON.stringify(E, function(I, O) {
      if (!T.isObject(O))
        return O;
      for (; y.length && y[y.length - 1] !== this; )
        y.pop();
      return y.push(O), h(P + y.length - 1), O;
    });
  }
  function S(E, P, y) {
    let v = E;
    if (T.isReactNative(t) && T.isReactNativeBlob(E))
      return t.append(Fo(y, P, s), f(E)), !1;
    if (E && !y && typeof E == "object") {
      if (T.endsWith(P, "{}"))
        P = r ? P : P.slice(0, -2), E = g(E, 1);
      else if (T.isArray(E) && e_(E) || (T.isFileList(E) || T.endsWith(P, "[]")) && (v = T.toArray(E)))
        return P = Ef(P), v.forEach(function(O, D) {
          !(T.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Fo([P], D, s) : a === null ? P : P + "[]",
            f(O)
          );
        }), !1;
    }
    return ma(E) ? !0 : (t.append(Fo(y, P, s), f(E)), !1);
  }
  const w = Object.assign(t_, {
    defaultVisitor: S,
    convertValue: f,
    isVisitable: ma
  });
  function A(E, P, y = 0) {
    if (!T.isUndefined(E)) {
      if (h(y), c.indexOf(E) !== -1)
        throw new Error("Circular reference detected in " + P.join("."));
      c.push(E), T.forEach(E, function(I, O) {
        (!(T.isUndefined(I) || I === null) && o.call(t, I, T.isString(O) ? O.trim() : O, P, w)) === !0 && A(I, P ? P.concat(O) : [O], y + 1);
      }), c.pop();
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
function n_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Sf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = T.isFunction(n) ? {
    serialize: n
  } : n, o = T.getSafeProp(r, "encode") || n_, s = T.getSafeProp(r, "serialize");
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
}, r_ = typeof URLSearchParams < "u" ? URLSearchParams : qa, s_ = typeof FormData < "u" ? FormData : null, o_ = typeof Blob < "u" ? Blob : null, a_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: r_,
    FormData: s_,
    Blob: o_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xa = typeof window < "u" && typeof document < "u", ha = typeof navigator == "object" && navigator || void 0, i_ = Xa && (!ha || ["ReactNative", "NativeScript", "NS"].indexOf(ha.product) < 0), l_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", c_ = Xa && window.location.href || "http://localhost", u_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xa,
  hasStandardBrowserEnv: i_,
  hasStandardBrowserWebWorkerEnv: l_,
  navigator: ha,
  origin: c_
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...u_,
  ...a_
};
function f_(e, t) {
  return uo(e, new st.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return st.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
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
function d_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Tf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function m_(e) {
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
    return a = !a && T.isArray(o) ? o.length : a, l ? (T.hasOwnProp(o, a) ? o[a] = T.isArray(o[a]) ? o[a].concat(r) : [o[a], r] : o[a] = r, !i) : ((!T.hasOwnProp(o, a) || !T.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && T.isArray(o[a]) && (o[a] = m_(o[a])), !i);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, o) => {
      t(d_(r), o, n, 0);
    }), n;
  }
  return null;
}
const Bn = (e, t) => e != null && T.hasOwnProp(e, t) ? e[t] : void 0;
function h_(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ts = {
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
          return f_(t, l).toString();
        if ((i = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Bn(this, "env"), c = u && u.FormData;
          return uo(
            i ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), h_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Bn(this, "transitional") || ts.transitional, r = n && n.forcedJSONParsing, o = Bn(this, "responseType"), s = o === "json";
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
    FormData: st.classes.FormData,
    Blob: st.classes.Blob
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
  ts.headers[e] = {};
});
function Uo(e, t) {
  const n = this || ts, r = t || n, o = dt.from(r.headers);
  let s = r.data;
  return T.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Of(e) {
  return !!(e && e.__CANCEL__);
}
let ns = class extends ne {
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
function p_(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function g_(e, t) {
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
    const g = c && u - c;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function __(e, t) {
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
const Vs = (e, t, n = 3) => {
  let r = 0;
  const o = g_(50, 250);
  return __((s) => {
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
}, Ml = (e) => (...t) => T.asap(() => e(...t)), b_ = st.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, st.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(st.origin),
  st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)
) : () => !0, y_ = st.hasStandardBrowserEnv ? (
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
function v_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function E_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const w_ = /^https?:(?!\/\/)/i, S_ = /[\t\n\r]/g;
function T_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function A_(e) {
  return T_(e).replace(S_, "");
}
function Dl(e, t) {
  if (typeof e == "string" && w_.test(A_(e)))
    throw new ne(
      'Invalid URL: missing "//" after protocol',
      ne.ERR_INVALID_URL,
      t
    );
}
function Rf(e, t, n, r) {
  Dl(t, r);
  let o = !v_(t);
  return e && (o || n === !1) ? (Dl(e, r), E_(e, t)) : t;
}
const Fl = (e) => e instanceof dt ? { ...e } : e;
function Hn(e, t) {
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
  function r(c, f, h, g) {
    return T.isPlainObject(c) && T.isPlainObject(f) ? T.merge.call({ caseless: g }, c, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(c, f, h, g) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return r(void 0, c, h, g);
    } else return r(c, f, h, g);
  }
  function s(c, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function a(c, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, f);
  }
  function i(c) {
    const f = T.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!T.isUndefined(f))
      if (T.isPlainObject(f)) {
        if (T.hasOwnProp(f, c))
          return f[c];
      } else
        return;
    const h = T.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (T.isPlainObject(h) && T.hasOwnProp(h, c))
      return h[c];
  }
  function l(c, f, h) {
    if (T.hasOwnProp(t, h))
      return r(c, f);
    if (T.hasOwnProp(e, h))
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
    headers: (c, f, h) => o(Fl(c), Fl(f), h, !0)
  };
  return T.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const h = T.hasOwnProp(u, f) ? u[f] : o, g = T.hasOwnProp(e, f) ? e[f] : void 0, S = T.hasOwnProp(t, f) ? t[f] : void 0, w = h(g, S, f);
    T.isUndefined(w) && h !== l || (n[f] = w);
  }), T.hasOwnProp(t, "validateStatus") && T.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (T.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const O_ = ["content-type", "content-length"];
function C_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    O_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const R_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Lf(e) {
  const t = Hn({}, e), n = (h) => T.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let i = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = i = dt.from(i), t.url = Sf(
    Rf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const h = T.getSafeProp(l, "username") || "", g = T.getSafeProp(l, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (g ? R_(g) : ""))
      );
    } catch (S) {
      throw ne.from(S, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (T.isFormData(r) && (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv || T.isReactNative(r) ? i.setContentType(void 0) : T.isFunction(r.getHeaders) && C_(i, r.getHeaders(), n("formDataHeaderPolicy"))), st.hasStandardBrowserEnv && (T.isFunction(o) && (o = o(t)), o === !0 || o == null && b_(t.url))) {
    const g = s && a && y_.read(a);
    g && i.set(s, g);
  }
  return t;
}
const L_ = typeof XMLHttpRequest < "u", I_ = L_ && function(e) {
  return new Promise(function(n, r) {
    const o = Lf(e);
    let s = o.data;
    const a = dt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = o, c, f, h, g, S;
    function w() {
      g && g(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
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
          n(D), w();
        },
        function(D) {
          r(D), w();
        },
        I
      ), A = null;
    }
    "onloadend" in A ? A.onloadend = E : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.startsWith("file:")) || setTimeout(E);
    }, A.onabort = function() {
      A && (r(new ne("Request aborted", ne.ECONNABORTED, e, A)), w(), A = null);
    }, A.onerror = function(v) {
      const I = v && v.message ? v.message : "Network Error", O = new ne(I, ne.ERR_NETWORK, e, A);
      O.event = v || null, r(O), w(), A = null;
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
      ), w(), A = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in A && T.forEach(bf(a), function(v, I) {
      A.setRequestHeader(I, v);
    }), T.isUndefined(o.withCredentials) || (A.withCredentials = !!o.withCredentials), i && i !== "json" && (A.responseType = o.responseType), u && ([h, S] = Vs(u, !0), A.addEventListener("progress", h)), l && A.upload && ([f, g] = Vs(l), A.upload.addEventListener("progress", f), A.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (c = (y) => {
      A && (r(!y || y.type ? new ns(null, e, A) : y), A.abort(), w(), A = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const P = p_(o.url);
    if (P && !st.protocols.includes(P)) {
      r(
        new ne(
          "Unsupported protocol " + P + ":",
          ne.ERR_BAD_REQUEST,
          e
        )
      ), w();
      return;
    }
    A.send(s || null);
  });
}, k_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, a();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof ne ? u : new ns(u instanceof Error ? u.message : u)
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
}, x_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, P_ = async function* (e, t) {
  for await (const n of N_(e))
    yield* x_(n, t);
}, N_ = async function* (e) {
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
  const o = P_(e, t);
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
}, js = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, M_ = (e, t, n) => t + 2 < n && js(e.charCodeAt(t + 1)) && js(e.charCodeAt(t + 2));
function D_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const i = r.length;
    for (let g = 0; g < i; g++)
      if (r.charCodeAt(g) === 37 && g + 2 < i) {
        const S = r.charCodeAt(g + 1), w = r.charCodeAt(g + 2);
        js(S) && js(w) && (a -= 2, g += 2);
      }
    let l = 0, u = i - 1;
    const c = (g) => g >= 2 && r.charCodeAt(g - 2) === 37 && // '%'
    r.charCodeAt(g - 1) === 51 && // '3'
    (r.charCodeAt(g) === 68 || r.charCodeAt(g) === 100);
    u >= 0 && (r.charCodeAt(u) === 61 ? (l++, u--) : c(u) && (l++, u -= 3)), l === 1 && u >= 0 && (r.charCodeAt(u) === 61 || c(u)) && l++;
    const h = Math.floor(a / 4) * 3 - (l || 0);
    return h > 0 ? h : 0;
  }
  let s = 0;
  for (let a = 0, i = r.length; a < i; a++) {
    const l = r.charCodeAt(a);
    if (l === 37 && M_(r, a, i))
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
const Ja = "1.18.1", $l = 64 * 1024, { isFunction: hs } = T, F_ = (e) => encodeURIComponent(e).replace(
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
}, U_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, $_ = (e) => {
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
  const { fetch: o, Request: s, Response: a } = e, i = o ? hs(o) : typeof fetch == "function", l = hs(s), u = hs(a);
  if (!i)
    return !1;
  const c = i && hs(n), f = i && (typeof r == "function" ? /* @__PURE__ */ ((E) => (P) => E.encode(P))(new r()) : async (E) => new Uint8Array(await new s(E).arrayBuffer())), h = l && c && Vl(() => {
    let E = !1;
    const P = new s(st.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return E = !0, "half";
      }
    }), y = P.headers.has("Content-Type");
    return P.body != null && P.body.cancel(), E && !y;
  }), g = u && c && Vl(() => T.isReadableStream(new a("").body)), S = {
    stream: g && ((E) => E.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((E) => {
    !S[E] && (S[E] = (P, y) => {
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
  const w = async (E) => {
    if (E == null)
      return 0;
    if (T.isBlob(E))
      return E.size;
    if (T.isSpecCompliantForm(E))
      return (await new s(st.origin, {
        method: "POST",
        body: E
      }).arrayBuffer()).byteLength;
    if (T.isArrayBufferView(E) || T.isArrayBuffer(E))
      return E.byteLength;
    if (T.isURLSearchParams(E) && (E = E + ""), T.isString(E))
      return (await f(E)).byteLength;
  }, A = async (E, P) => {
    const y = T.toFiniteNumber(E.getContentLength());
    return y ?? w(P);
  };
  return async (E) => {
    let {
      url: P,
      method: y,
      data: v,
      signal: I,
      cancelToken: O,
      timeout: D,
      onDownloadProgress: N,
      onUploadProgress: C,
      responseType: B,
      headers: te,
      withCredentials: U = "same-origin",
      fetchOptions: J,
      maxContentLength: ie,
      maxBodyLength: de
    } = Lf(E);
    const V = T.isNumber(ie) && ie > -1, q = T.isNumber(de) && de > -1, ae = (pe) => T.hasOwnProp(E, pe) ? E[pe] : void 0;
    let Le = o || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let xe = k_(
      [I, O && O.toAbortSignal()],
      D
    ), fe = null;
    const we = xe && xe.unsubscribe && (() => {
      xe.unsubscribe();
    });
    let je, Ue = null;
    const tt = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      E,
      fe
    );
    try {
      let pe;
      const K = ae("auth");
      if (K) {
        const k = T.getSafeProp(K, "username") || "", M = T.getSafeProp(K, "password") || "";
        pe = {
          username: k,
          password: M
        };
      }
      if (U_(P)) {
        const k = new URL(P, st.origin);
        if (!pe && (k.username || k.password)) {
          const M = Hl(k.username), X = Hl(k.password);
          pe = {
            username: M,
            password: X
          };
        }
        (k.username || k.password) && (k.username = "", k.password = "", P = k.href);
      }
      if (pe && (te.delete("authorization"), te.set(
        "Authorization",
        "Basic " + btoa(F_((pe.username || "") + ":" + (pe.password || "")))
      )), V && typeof P == "string" && P.startsWith("data:") && D_(P) > ie)
        throw new ne(
          "maxContentLength size of " + ie + " exceeded",
          ne.ERR_BAD_RESPONSE,
          E,
          fe
        );
      if (q && y !== "get" && y !== "head") {
        const k = await w(v);
        if (typeof k == "number" && isFinite(k) && (je = k, k > de))
          throw tt();
      }
      const re = q && (T.isReadableStream(v) || T.isStream(v)), oe = (k, M, X) => Ul(
        k,
        $l,
        (G) => {
          if (q && G > de)
            throw Ue = tt();
          M && M(G);
        },
        X
      );
      if (h && y !== "get" && y !== "head" && (C || re)) {
        if (je = je ?? await A(te, v), je !== 0 || re) {
          let k = new s(P, {
            method: "POST",
            body: v,
            duplex: "half"
          }), M;
          if (T.isFormData(v) && (M = k.headers.get("content-type")) && te.setContentType(M), k.body) {
            const [X, G] = C && Nl(
              je,
              Vs(Ml(C))
            ) || [];
            v = oe(k.body, X, G);
          }
        }
      } else if (re && !l && c && y !== "get" && y !== "head")
        v = oe(v);
      else if (re && l && !h && y !== "get" && y !== "head")
        throw new ne(
          "Stream request bodies are not supported by the current fetch implementation",
          ne.ERR_NOT_SUPPORT,
          E,
          fe
        );
      T.isString(U) || (U = U ? "include" : "omit");
      const Ae = l && "credentials" in s.prototype;
      if (T.isFormData(v)) {
        const k = te.getContentType();
        k && /^multipart\/form-data/i.test(k) && !/boundary=/i.test(k) && te.delete("content-type");
      }
      te.set("User-Agent", "axios/" + Ja, !1);
      const qe = {
        ...J,
        signal: xe,
        method: y.toUpperCase(),
        headers: bf(te.normalize()),
        body: v,
        duplex: "half",
        credentials: Ae ? U : void 0
      };
      fe = l && new s(P, qe);
      let p = await (l ? Le(fe, J) : Le(P, qe));
      const _ = dt.from(p.headers);
      if (V) {
        const k = T.toFiniteNumber(_.getContentLength());
        if (k != null && k > ie)
          throw new ne(
            "maxContentLength size of " + ie + " exceeded",
            ne.ERR_BAD_RESPONSE,
            E,
            fe
          );
      }
      const b = g && (B === "stream" || B === "response");
      if (g && p.body && (N || V || b && we)) {
        const k = {};
        ["status", "statusText", "headers"].forEach((R) => {
          k[R] = p[R];
        });
        const M = T.toFiniteNumber(_.getContentLength()), [X, G] = N && Nl(
          M,
          Vs(Ml(N), !0)
        ) || [];
        let d = 0;
        const m = (R) => {
          if (V && (d = R, d > ie))
            throw new ne(
              "maxContentLength size of " + ie + " exceeded",
              ne.ERR_BAD_RESPONSE,
              E,
              fe
            );
          X && X(R);
        };
        p = new a(
          Ul(p.body, $l, m, () => {
            G && G(), we && we();
          }),
          k
        );
      }
      B = B || "text";
      let x = await S[T.findKey(S, B) || "text"](
        p,
        E
      );
      if (V && !g && !b) {
        let k;
        if (x != null && (typeof x.byteLength == "number" ? k = x.byteLength : typeof x.size == "number" ? k = x.size : typeof x == "string" && (k = typeof r == "function" ? new r().encode(x).byteLength : x.length)), typeof k == "number" && k > ie)
          throw new ne(
            "maxContentLength size of " + ie + " exceeded",
            ne.ERR_BAD_RESPONSE,
            E,
            fe
          );
      }
      return !b && we && we(), await new Promise((k, M) => {
        Cf(k, M, {
          data: x,
          headers: dt.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: E,
          request: fe
        });
      });
    } catch (pe) {
      if (we && we(), xe && xe.aborted && xe.reason instanceof ne) {
        const K = xe.reason;
        throw K.config = E, fe && (K.request = fe), pe !== K && Object.defineProperty(K, "cause", {
          __proto__: null,
          value: pe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      if (Ue)
        throw fe && !Ue.request && (Ue.request = fe), Ue;
      if (pe instanceof ne)
        throw fe && !pe.request && (pe.request = fe), pe;
      if (pe && pe.name === "TypeError" && /Load failed|fetch/i.test(pe.message)) {
        const K = new ne(
          "Network Error",
          ne.ERR_NETWORK,
          E,
          fe,
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
      throw ne.from(pe, pe && pe.code, E, fe, pe && pe.response);
    }
  };
}, H_ = /* @__PURE__ */ new Map(), If = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let a = s.length, i = a, l, u, c = H_;
  for (; i--; )
    l = s[i], u = c.get(l), u === void 0 && c.set(l, u = i ? /* @__PURE__ */ new Map() : $_(t)), c = u;
  return u;
};
If();
const Qa = {
  http: Z0,
  xhr: I_,
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
const jl = (e) => `- ${e}`, V_ = (e) => T.isFunction(e) || e === null || e === !1;
function j_(e, t) {
  e = T.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !V_(r) && (o = Qa[(i = String(r)).toLowerCase()], o === void 0))
      throw new ne(`Unknown adapter '${i}'`);
    if (o && (T.isFunction(o) || (o = o.get(t))))
      break;
    s[i || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
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
  getAdapter: j_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Qa
};
function $o(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ns(null, e);
}
function Bl(e) {
  return $o(e), e.headers = dt.from(e.headers), e.data = Uo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kf.getAdapter(e.adapter || ts.adapter, e)(e).then(
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
function B_(e, t, n) {
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
  assertOptions: B_,
  validators: fo
}, it = Cs.validators;
let Fn = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Hn(this.defaults, n);
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
    s && T.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (S) => {
      delete s[S];
    }), n.headers = dt.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(w) {
      if (typeof w.runWhen == "function" && w.runWhen(n) === !1)
        return;
      l = l && w.synchronous;
      const A = n.transitional || Ya;
      A && A.legacyInterceptorReqResOrdering ? i.unshift(w.fulfilled, w.rejected) : i.push(w.fulfilled, w.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c, f = 0, h;
    if (!l) {
      const S = [Bl.bind(this), void 0];
      for (S.unshift(...i), S.push(...u), h = S.length, c = Promise.resolve(n); f < h; )
        c = c.then(S[f++], S[f++]);
      return c;
    }
    h = i.length;
    let g = n;
    for (; f < h; ) {
      const S = i[f++], w = i[f++];
      try {
        g = S(g);
      } catch (A) {
        w.call(this, A);
        break;
      }
    }
    try {
      c = Bl.call(this, g);
    } catch (S) {
      return Promise.reject(S);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Hn(this.defaults, t);
    const n = Rf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Sf(n, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(t) {
  Fn.prototype[t] = function(n, r) {
    return this.request(
      Hn(r || {}, {
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
        Hn(i || {}, {
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
  Fn.prototype[t] = n(), t !== "query" && (Fn.prototype[t + "Form"] = n(!0));
});
let W_ = class xf {
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
      r.reason || (r.reason = new ns(s, a, i), n(r.reason));
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
function z_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function K_(e) {
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
  const t = new Fn(e), n = cf(Fn.prototype.request, t);
  return T.extend(n, Fn.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Pf(Hn(e, o));
  }, n;
}
const We = Pf(ts);
We.Axios = Fn;
We.CanceledError = ns;
We.CancelToken = W_;
We.isCancel = Of;
We.VERSION = Ja;
We.toFormData = uo;
We.AxiosError = ne;
We.Cancel = We.CanceledError;
We.all = function(t) {
  return Promise.all(t);
};
We.spread = z_;
We.isAxiosError = K_;
We.mergeConfig = Hn;
We.AxiosHeaders = dt;
We.formToJSON = (e) => Af(T.isHTMLForm(e) ? new FormData(e) : e);
We.getAdapter = kf.getAdapter;
We.HttpStatusCode = pa;
We.default = We;
const {
  Axios: ev,
  AxiosError: tv,
  CanceledError: nv,
  isCancel: rv,
  CancelToken: sv,
  VERSION: ov,
  all: av,
  Cancel: iv,
  isAxiosError: lv,
  spread: cv,
  toFormData: uv,
  AxiosHeaders: fv,
  HttpStatusCode: dv,
  formToJSON: mv,
  getAdapter: hv,
  mergeConfig: pv,
  create: gv
} = We, G_ = "X-Admin-UI-Request", q_ = "X-User-UI-Request";
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
function Y_(e) {
  const t = Nf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function X_(e) {
  const t = Y_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function J_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return zl(Nf(e)) || zl(n);
}
function Q_(e) {
  return X_(e);
}
const Kl = "/api/v1", Z_ = e1();
function Mf(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function e1(e) {
  const n = (String(Kl).trim() || Kl).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Mf(n);
}
function Bs() {
  return Z_;
}
function Df(e) {
  const t = Mf(e);
  try {
    return `${typeof window > "u" ? new URL(Bs()).origin : new URL(Bs(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Za = "auth_token", t1 = "auth_user", mo = "refresh_token", ei = "token_expires_at", n1 = "sub2api-auth-token-refresh", Gl = 3e4, Ff = 1e3, r1 = 1e3, s1 = 25;
let vr = null;
function ti() {
  const e = localStorage.getItem(t1);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function o1() {
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
function a1(e) {
  const t = localStorage.getItem(Za), n = localStorage.getItem(mo), r = Number(localStorage.getItem(ei));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || ti() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function Ws(e, t) {
  const n = a1(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function i1(e, t, n = Date.now() + Ff) {
  for (; Date.now() < n; ) {
    const r = Ws(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, s1));
  }
  return Ws(e, t);
}
function l1(e) {
  localStorage.setItem(Za, e.access_token), localStorage.setItem(ei, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(mo, e.refresh_token);
}
async function c1(e, t, n = !1) {
  var o;
  const r = Date.now() + Gl + r1;
  try {
    const a = (await We.post(
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
    return l1(a.data), a.data;
  } catch (s) {
    const a = (o = s.response) == null ? void 0 : o.status, i = typeof a == "number" && a >= 400 && a < 500, l = await i1(
      e,
      t,
      i && n ? r : Date.now() + Ff
    );
    if (l)
      return l;
    throw s;
  }
}
async function u1(e) {
  const t = o1(), n = async (r = !1) => {
    const o = Ws(t, e.failedAccessToken);
    return o || c1(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(n1, () => n(!1)) : n(!0);
}
function Uf(e = {}) {
  if (vr)
    return vr;
  const t = u1(e);
  vr = t;
  const n = () => {
    vr === t && (vr = null);
  };
  return t.then(n, n), t;
}
const Z = We.create({
  baseURL: Bs(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), f1 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
Z.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = lf()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = f1()), e.headers) {
      const n = String(e.url || "");
      J_(n) && (e.headers[G_] = "1"), Q_(n) && (e.headers[q_] = "1");
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
    if (e.code === "ERR_CANCELED" || We.isCancel(e))
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
            const w = t.headers, A = (w == null ? void 0 : w.Authorization) ?? (w == null ? void 0 : w.authorization), E = typeof A == "string" && A.startsWith("Bearer ") ? A.slice(7) : null, P = await Uf({ failedAccessToken: E });
            return t.headers && (t.headers.Authorization = `Bearer ${P.access_token}`), Z(t);
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
        const c = !!localStorage.getItem("auth_token"), f = (r = e.config) == null ? void 0 : r.headers, h = (f == null ? void 0 : f.Authorization) ?? (f == null ? void 0 : f.authorization), g = typeof h == "string" ? h.trim() !== "" : Array.isArray(h) ? h.length > 0 : !!h;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (c || g) && !u && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
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
async function d1(e = !1) {
  const { data: t } = await Z.get("/admin/system/check-updates", {
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
function m1() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Vf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function h1(e) {
  const { data: t } = await Z.post("/auth/login", e);
  return ni(t) || (ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function p1(e) {
  const { data: t } = await Z.post("/auth/login/2fa", e);
  return ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function g1(e) {
  const { data: t } = await Z.post("/auth/register", e);
  return ho(t.access_token), t.refresh_token && po(t.refresh_token), t.expires_in && go(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function _1() {
  return Z.get("/auth/me");
}
async function b1() {
  const e = Hf();
  if (e)
    try {
      await Z.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Vf();
}
function jf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function y1(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function v1(e) {
  return y1(e) ? "login" : "bind";
}
function E1(e) {
  return v1(e);
}
function w1(e) {
  return e.error === "invitation_required";
}
function S1(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function T1() {
  return Uf();
}
async function A1() {
  const { data: e } = await Z.post("/auth/revoke-all-sessions");
  return e;
}
function O1() {
  return $f() !== null;
}
async function Bf() {
  const { data: e } = await Z.get("/settings/public");
  return e;
}
async function C1(e) {
  const { data: t } = await Z.post("/auth/send-verify-code", e);
  return t;
}
async function R1(e) {
  const { data: t } = await Z.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function L1(e) {
  const { data: t } = await Z.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function I1(e) {
  const { data: t } = await Z.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function k1(e) {
  const { data: t } = await Z.post("/auth/forgot-password", e);
  return t;
}
async function x1(e) {
  const { data: t } = await Z.post("/auth/reset-password", e);
  return t;
}
async function P1(e, t, n) {
  return Wf(e, t, n);
}
async function N1(e, t, n) {
  return zf(e, t, n);
}
async function M1(e, t, n) {
  return Kf(e, t, n);
}
async function _o(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await Z.post(
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
async function D1(e, t, n) {
  return _o("dingtalk", e, t, n);
}
async function Gf(e) {
  const { data: t } = await Z.post(
    "/auth/oauth/pending/exchange",
    jf(e)
  );
  return t;
}
async function F1(e) {
  return Gf(e);
}
const Wn = {
  login: h1,
  login2FA: p1,
  isTotp2FARequired: ni,
  register: g1,
  getCurrentUser: _1,
  logout: b1,
  isAuthenticated: O1,
  setAuthToken: ho,
  setRefreshToken: po,
  setTokenExpiresAt: go,
  getAuthToken: $f,
  getRefreshToken: Hf,
  getTokenExpiresAt: m1,
  clearAuthToken: Vf,
  getPublicSettings: Bf,
  sendVerifyCode: C1,
  sendPendingOAuthVerifyCode: R1,
  validatePromoCode: L1,
  validateInvitationCode: I1,
  forgotPassword: k1,
  resetPassword: x1,
  refreshToken: T1,
  revokeAllSessions: A1,
  getPendingOAuthBindLoginKind: E1,
  isPendingOAuthCreateAccountRequired: w1,
  hasPendingOAuthSuggestedProfile: S1,
  completePendingOAuthBindLogin: Gf,
  createPendingLinuxDoOAuthAccount: Wf,
  createPendingOIDCOAuthAccount: zf,
  createPendingWeChatOAuthAccount: Kf,
  exchangePendingOAuthCompletion: F1,
  completeLinuxDoOAuthRegistration: P1,
  completeOIDCOAuthRegistration: N1,
  completeWeChatOAuthRegistration: M1,
  createPendingDingTalkOAuthAccount: D1
}, ql = "零一 API", ri = /* @__PURE__ */ Fa("app", () => {
  const e = Q(!1), t = Q(!1), n = Q(0), r = Q(!1), o = Q([]), s = Q(!1), a = Q(!1), i = Q(ql), l = Q(""), u = Q(""), c = Q(""), f = Q(""), h = Q(""), g = Q(null);
  let S = null, w = null, A = 0;
  const E = Q(!1), P = Q(!1), y = Q(""), v = Q(""), I = Q(!1), O = Q("source"), D = Q(null);
  let N = 0;
  const C = _e(() => o.value.length > 0), B = _e(() => {
    var _;
    return ((_ = g.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
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
  function q(_, b, x) {
    const k = `toast-${++N}`, M = {
      id: k,
      type: _,
      message: b,
      duration: x,
      startTime: x !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), x !== void 0 && setTimeout(() => {
      we(k);
    }, x), k;
  }
  function ae(_, b = 3e3) {
    return q("success", _, b);
  }
  function Le(_, b = 5e3) {
    return q("error", _, b);
  }
  function xe(_, b = 3e3) {
    return q("info", _, b);
  }
  function fe(_, b = 4e3) {
    return q("warning", _, b);
  }
  function we(_) {
    const b = o.value.findIndex((x) => x.id === _);
    b !== -1 && o.value.splice(b, 1);
  }
  function je() {
    o.value = [];
  }
  async function Ue(_) {
    V(!0);
    try {
      return await _();
    } finally {
      V(!1);
    }
  }
  async function tt(_, b) {
    V(!0);
    try {
      return await _();
    } catch (x) {
      const k = b || x.message || nr.global.t("common.unknownError");
      return Le(k), null;
    } finally {
      V(!1);
    }
  }
  function pe() {
    e.value = !1, r.value = !1, te.value = 0, o.value = [];
  }
  async function K(_ = !1) {
    if (E.value && !_)
      return {
        current_version: y.value,
        latest_version: v.value,
        has_update: I.value,
        build_type: O.value,
        release_info: D.value || void 0,
        cached: !0
      };
    if (P.value)
      return null;
    P.value = !0;
    try {
      const b = await d1(_);
      return y.value = b.current_version, v.value = b.latest_version, I.value = b.has_update, O.value = b.build_type || "source", D.value = b.release_info || null, E.value = !0, b;
    } catch (b) {
      return console.error("Failed to fetch version:", b), null;
    } finally {
      P.value = !1;
    }
  }
  function re() {
    E.value = !1, I.value = !1;
  }
  function oe(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), g.value = _, i.value = _.site_name || ql, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", h.value = _.doc_url || "", s.value = !0;
  }
  function Ae(_ = !1) {
    if (S)
      return _ && !w && (A += 1, w = S.then(() => Ae(!0)).finally(() => {
        w = null;
      })), _ ? w : S;
    if (_ && (A += 1), !s.value && !_ && window.__APP_CONFIG__)
      return oe(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
    if (s.value && !_)
      return g.value ? Promise.resolve({ ...g.value }) : Promise.resolve({
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
    const b = A;
    let x;
    try {
      x = Bf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), a.value = !1, Promise.resolve(null);
    }
    const k = x.then((M) => (b === A && oe(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      S === k && (S = null, a.value = !1);
    });
    return S = k, k;
  }
  function qe() {
    A += 1, s.value = !1, g.value = null;
  }
  function p() {
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
    cachedPublicSettings: g,
    // Version state
    versionLoaded: E,
    versionLoading: P,
    currentVersion: y,
    latestVersion: v,
    hasUpdate: I,
    buildType: O,
    releaseInfo: D,
    // Computed
    hasActiveToasts: C,
    backendModeEnabled: B,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: J,
    toggleMobileSidebar: ie,
    setMobileOpen: de,
    setLoading: V,
    showToast: q,
    showSuccess: ae,
    showError: Le,
    showInfo: xe,
    showWarning: fe,
    hideToast: we,
    clearAllToasts: je,
    withLoading: Ue,
    withLoadingAndError: tt,
    reset: pe,
    // Version actions
    fetchVersion: K,
    clearVersionCache: re,
    // Public settings actions
    fetchPublicSettings: Ae,
    clearPublicSettingsCache: qe,
    initFromInjectedConfig: p
  };
}), U1 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, $1 = { class: "p-4" }, H1 = { class: "flex items-start gap-3" }, V1 = { class: "mt-0.5 flex-shrink-0" }, j1 = { class: "min-w-0 flex-1" }, B1 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, W1 = ["onClick"], z1 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, K1 = /* @__PURE__ */ rn({
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
    return (l, u) => (ge(), gn(Ia, { to: "body" }, [
      H("div", U1, [
        ye(mh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: sr(() => [
            (ge(!0), Ee(He, null, dn(n.value, (c) => (ge(), Ee("div", {
              key: c.id,
              class: Ke([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              H("div", $1, [
                H("div", H1, [
                  H("div", V1, [
                    ye(ze, {
                      name: r(c.type),
                      size: "md",
                      class: Ke(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  H("div", j1, [
                    c.title ? (ge(), Ee("p", B1, ue(c.title), 1)) : Qe("", !0),
                    H("p", {
                      class: Ke([
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
                  ], 8, W1)
                ])
              ]),
              c.duration ? (ge(), Ee("div", z1, [
                H("div", {
                  class: Ke(["h-full toast-progress", a(c.type)]),
                  style: ur({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : Qe("", !0)
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
}, G1 = /* @__PURE__ */ si(K1, [["__scopeId", "data-v-fc5fa96e"]]), q1 = { class: "modal-header" }, Y1 = {
  key: 0,
  class: "modal-footer"
}, X1 = /* @__PURE__ */ rn({
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
    }, h = (g) => {
      i.show && i.closeOnEscape && g.key === "Escape" && l("close");
    };
    return Tt(
      () => i.show,
      async (g) => {
        if (g) {
          if (a = document.activeElement, document.body.classList.add("modal-open"), await Zn(), s.value && (s.value.scrollTop = 0), o.value) {
            const S = o.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            S == null || S.focus();
          }
        } else
          document.body.classList.remove("modal-open"), a && typeof a.focus == "function" && a.focus(), a = null;
      },
      { immediate: !0 }
    ), fr(() => {
      document.addEventListener("keydown", h);
    }), Yr(() => {
      document.removeEventListener("keydown", h), document.body.classList.remove("modal-open");
    }), (g, S) => (ge(), gn(Ia, { to: "body" }, [
      ye(bu, { name: "modal" }, {
        default: sr(() => [
          e.show ? (ge(), Ee("div", {
            key: 0,
            class: "modal-overlay",
            style: ur(u.value),
            "aria-labelledby": r,
            role: "dialog",
            "aria-modal": "true",
            onClick: Je(f, ["self"])
          }, [
            H("div", {
              ref_key: "dialogRef",
              ref: o,
              class: Ke(["modal-content", "base-dialog-surface", "console-skin-dialog", c.value, e.panelClass]),
              onClick: S[1] || (S[1] = Je(() => {
              }, ["stop"]))
            }, [
              H("div", q1, [
                H("h3", {
                  id: r,
                  class: "modal-title"
                }, ue(e.title), 1),
                e.showCloseButton ? (ge(), Ee("button", {
                  key: 0,
                  onClick: S[0] || (S[0] = (w) => l("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  ye(ze, {
                    name: "x",
                    size: "md"
                  })
                ])) : Qe("", !0)
              ]),
              H("div", {
                ref_key: "modalBodyRef",
                ref: s,
                class: "modal-body"
              }, [
                Ps(g.$slots, "default")
              ], 512),
              g.$slots.footer ? (ge(), Ee("div", Y1, [
                Ps(g.$slots, "footer")
              ])) : Qe("", !0)
            ], 2)
          ], 4)) : Qe("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), J1 = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], Q1 = { class: "select-value" }, Z1 = ["onKeydown"], eb = { class: "select-icon" }, tb = {
  key: 0,
  class: "select-search"
}, nb = ["placeholder", "aria-label"], rb = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], sb = {
  key: 0,
  class: "select-empty"
}, Ho = 8, ob = 200, ab = 300, ib = /* @__PURE__ */ rn({
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
    const { t: n } = Qr(), r = `select-${Math.random().toString(36).substring(2, 9)}`, o = e, s = t, a = Q(!1), i = Q(""), l = Q(-1), u = Q(null), c = Q(null), f = Q(null), h = Q(null), g = Q(null), S = Q("bottom"), w = Q(null), A = _e(() => o.placeholder ?? n("common.selectOption")), E = _e(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), P = _e(() => o.emptyText ?? n("common.noOptionsFound"));
    let y = null;
    const v = _e(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), I = _e(() => {
      if (!w.value) return {};
      const K = w.value, re = Math.max(Ho, window.innerWidth - Ho), oe = Math.min(
        Math.max(Ho, K.left),
        re
      ), Ae = Math.max(0, re - oe), qe = Math.max(ob, K.width), p = Math.min(qe, Ae), _ = {
        position: "fixed",
        left: `${oe}px`,
        minWidth: `${p}px`,
        maxWidth: `${Ae}px`,
        zIndex: "100000020"
      };
      return S.value === "top" ? _.bottom = `${window.innerHeight - K.top + 4}px` : _.top = `${K.bottom + 4}px`, _;
    }), O = (K) => typeof K == "object" && K !== null ? K[o.valueKey] : K, D = (K) => String(typeof K == "object" && K !== null ? K[o.labelKey] ?? "" : K ?? ""), N = (K) => typeof K == "object" && K !== null ? !!K.disabled : !1, C = (K) => typeof K == "object" && K !== null ? K.kind === "group" : !1, B = _e(() => o.options.find((K) => O(K) === o.modelValue) || null), te = _e(() => B.value ? D(B.value) : o.creatable && o.modelValue ? String(o.modelValue) : A.value), U = _e(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), J = _e(() => {
      let K = o.options;
      if (v.value && i.value && !o.remote) {
        const re = i.value.toLowerCase();
        if (K = K.filter((oe) => !!(D(oe).toLowerCase().includes(re) || oe.description && String(oe.description).toLowerCase().includes(re))), o.creatable && i.value.trim()) {
          const oe = i.value.trim(), Ae = o.creatablePrefix || n("common.search");
          K = [{ [o.valueKey]: oe, [o.labelKey]: `${Ae} "${oe}"`, _creatable: !0 }, ...K];
        }
      }
      return K;
    }), ie = (K) => O(K) === o.modelValue, de = (K) => {
      const re = J.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Ae = (K + oe) % re.length;
        if (!N(re[Ae])) return Ae;
      }
      return -1;
    }, V = (K) => {
      const re = J.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Ae = (K - oe + re.length) % re.length;
        if (!N(re[Ae])) return Ae;
      }
      return -1;
    }, q = (K, re) => {
      N(K) || C(K) || (l.value = re);
    }, ae = () => {
      u.value && (w.value = u.value.getBoundingClientRect());
    }, Le = () => {
      u.value && (ae(), Zn(() => {
        if (!h.value || !w.value) return;
        const K = h.value.offsetHeight || 240, re = window.innerHeight - w.value.bottom, oe = w.value.top;
        re < K && oe > K ? S.value = "top" : S.value = "bottom";
      }));
    }, xe = () => {
      o.disabled || (a.value = !a.value);
    };
    Tt(a, (K) => {
      if (K) {
        if (Le(), J.value.length === 0)
          l.value = -1;
        else {
          const re = J.value.findIndex(ie), oe = re >= 0 ? re : 0;
          l.value = N(J.value[oe]) ? de(oe + 1) : oe;
        }
        v.value && Zn(() => {
          var re;
          return (re = f.value) == null ? void 0 : re.focus();
        }), window.addEventListener("scroll", ae, { capture: !0, passive: !0 }), window.addEventListener("resize", Le);
      } else
        i.value = "", l.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", ae, { capture: !0 }), window.removeEventListener("resize", Le);
    }), Tt(i, (K) => {
      !o.remote || !a.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, s("search", K.trim());
      }, ab));
    });
    const fe = (K) => {
      var oe;
      const re = O(K) ?? null;
      s("update:modelValue", re), s("change", re, K), a.value = !1, (oe = c.value) == null || oe.focus();
    }, we = () => {
      o.disabled || (s("update:modelValue", null), s("change", null, null));
    }, je = () => {
      a.value || (a.value = !0);
    }, Ue = (K) => {
      var re;
      switch (K.key) {
        case "ArrowDown":
          K.preventDefault(), l.value = de(l.value + 1), l.value >= 0 && tt();
          break;
        case "ArrowUp":
          K.preventDefault(), l.value = V(l.value - 1), l.value >= 0 && tt();
          break;
        case "Enter":
          if (K.preventDefault(), l.value >= 0 && l.value < J.value.length) {
            const oe = J.value[l.value];
            N(oe) || fe(oe);
          }
          break;
        case "Escape":
          K.preventDefault(), a.value = !1, (re = c.value) == null || re.focus();
          break;
        case "Tab":
          a.value = !1;
          break;
      }
    }, tt = () => {
      Zn(() => {
        const K = g.value;
        if (!K) return;
        const re = K.children[l.value];
        re && (re.offsetTop < K.scrollTop ? K.scrollTop = re.offsetTop : re.offsetTop + re.offsetHeight > K.scrollTop + K.offsetHeight && (K.scrollTop = re.offsetTop + re.offsetHeight - K.offsetHeight));
      });
    }, pe = (K) => {
      var qe;
      const re = K.target, oe = !!re.closest(`.${r}`), Ae = (qe = u.value) == null ? void 0 : qe.contains(re);
      !oe && !Ae && a.value && (a.value = !1);
    };
    return fr(() => {
      document.addEventListener("click", pe);
    }), Yr(() => {
      document.removeEventListener("click", pe), window.removeEventListener("scroll", ae, { capture: !0 }), window.removeEventListener("resize", Le), y && (clearTimeout(y), y = null);
    }), (K, re) => (ge(), Ee("div", {
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
        class: Ke([
          "select-trigger",
          "console-skin-select-trigger",
          a.value && "select-trigger-open",
          e.error && "select-trigger-error",
          e.disabled && "select-trigger-disabled"
        ]),
        onKeydown: [
          kr(Je(je, ["prevent"]), ["down"]),
          kr(Je(je, ["prevent"]), ["up"])
        ]
      }, [
        H("span", Q1, [
          Ps(K.$slots, "selected", { option: B.value }, () => [
            qn(ue(te.value), 1)
          ], !0)
        ]),
        e.clearable && U.value && !e.disabled ? (ge(), Ee("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Je(we, ["stop"]),
          onMousedown: re[0] || (re[0] = Je(() => {
          }, ["stop"])),
          onKeydown: kr(Je(we, ["stop", "prevent"]), ["enter"])
        }, [
          ye(ze, {
            name: "x",
            size: "sm"
          })
        ], 40, Z1)) : Qe("", !0),
        H("span", eb, [
          ye(ze, {
            name: "chevronDown",
            size: "md",
            class: Ke(["transition-transform duration-200", a.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, J1),
      (ge(), gn(Ia, { to: "body" }, [
        ye(bu, { name: "select-dropdown" }, {
          default: sr(() => [
            a.value ? (ge(), Ee("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: Ke(["select-dropdown-portal console-skin-select-menu", [r]]),
              style: ur(I.value),
              role: "listbox",
              onClick: re[3] || (re[3] = Je(() => {
              }, ["stop"])),
              onMousedown: re[4] || (re[4] = Je(() => {
              }, ["stop"])),
              onKeydown: Ue
            }, [
              v.value ? (ge(), Ee("div", tb, [
                ye(ze, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                zo(H("input", {
                  ref_key: "searchInputRef",
                  ref: f,
                  "onUpdate:modelValue": re[1] || (re[1] = (oe) => i.value = oe),
                  type: "text",
                  placeholder: E.value,
                  "aria-label": E.value,
                  class: "select-search-input",
                  onClick: re[2] || (re[2] = Je(() => {
                  }, ["stop"]))
                }, null, 8, nb), [
                  [ea, i.value]
                ])
              ])) : Qe("", !0),
              H("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: g
              }, [
                (ge(!0), Ee(He, null, dn(J.value, (oe, Ae) => (ge(), Ee("div", {
                  key: `${typeof O(oe)}:${String(O(oe) ?? "")}`,
                  role: "option",
                  "aria-selected": ie(oe),
                  "aria-disabled": N(oe),
                  onClick: Je((qe) => !N(oe) && fe(oe), ["stop"]),
                  onMouseenter: (qe) => q(oe, Ae),
                  class: Ke([
                    "select-option",
                    C(oe) && "select-option-group",
                    ie(oe) && "select-option-selected",
                    N(oe) && !C(oe) && "select-option-disabled",
                    l.value === Ae && !C(oe) && "select-option-focused"
                  ])
                }, [
                  Ps(K.$slots, "option", {
                    option: oe,
                    selected: ie(oe)
                  }, () => [
                    oe._creatable ? (ge(), gn(ze, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : Qe("", !0),
                    H("span", {
                      class: Ke(["select-option-label", oe._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, ue(D(oe)), 3),
                    ie(oe) ? (ge(), gn(ze, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : Qe("", !0)
                  ], !0)
                ], 42, rb))), 128)),
                J.value.length === 0 ? (ge(), Ee("div", sb, ue(o.loading ? le(n)("common.loading") : P.value), 1)) : Qe("", !0)
              ], 512)
            ], 38)) : Qe("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), ps = /* @__PURE__ */ si(ib, [["__scopeId", "data-v-fbc717eb"]]);
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
function lb(e) {
  if (!e || typeof e != "object") return [];
  const t = e, n = Array.isArray(t.data) ? t.data : Array.isArray(t.models) ? t.models : [], r = /* @__PURE__ */ new Set(), o = [];
  for (const s of n) {
    const i = (typeof s == "string" ? s : s && typeof s == "object" ? String(s.id || s.name || "") : "").trim().replace(/^models\//, ""), l = i.toLowerCase(), u = l.startsWith("gpt-image-") || l === "grok-imagine" || l === "grok-imagine-edit" || l.startsWith("grok-imagine-image");
    !i || !u || r.has(i) || (r.add(i), o.push(i));
  }
  return o;
}
async function cb(e, t = {}) {
  const n = await fetch(Df("/v1/models"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${e}`
    },
    signal: t.signal
  });
  if (!n.ok) throw await qf(n);
  return lb(await n.json());
}
async function ub(e, t, n = {}) {
  const { referenceImages: r = [], ...o } = t, s = r.length > 0, a = { Authorization: `Bearer ${e}` };
  let i;
  if (s) {
    const u = new FormData();
    u.append("model", t.model), u.append("prompt", t.prompt), t.n !== void 0 && u.append("n", String(t.n)), t.size && u.append("size", t.size), t.quality && u.append("quality", t.quality), t.response_format && u.append("response_format", t.response_format), r.forEach((c) => u.append("image", c, c.name)), i = u;
  } else
    a["Content-Type"] = "application/json", i = JSON.stringify(o);
  const l = await fetch(
    Df(s ? "/v1/images/edits" : "/v1/images/generations"),
    { method: "POST", headers: a, body: i, signal: n.signal }
  );
  if (!l.ok) throw await qf(l);
  return l.json();
}
async function fb(e = 1, t = 10, n, r) {
  const { data: o } = await Z.get("/keys", {
    params: { page: e, page_size: t, ...n },
    signal: r == null ? void 0 : r.signal
  });
  return o;
}
async function db(e) {
  const { data: t } = await Z.get(`/keys/${e}`);
  return t;
}
async function mb(e, t, n, r, o, s, a, i) {
  const l = { name: e };
  t !== void 0 && (l.group_id = t), n && (l.custom_key = n), r && r.length > 0 && (l.ip_whitelist = r), o && o.length > 0 && (l.ip_blacklist = o), s !== void 0 && s > 0 && (l.quota = s), a !== void 0 && a > 0 && (l.expires_in_days = a), i != null && i.rate_limit_5h && i.rate_limit_5h > 0 && (l.rate_limit_5h = i.rate_limit_5h), i != null && i.rate_limit_1d && i.rate_limit_1d > 0 && (l.rate_limit_1d = i.rate_limit_1d), i != null && i.rate_limit_7d && i.rate_limit_7d > 0 && (l.rate_limit_7d = i.rate_limit_7d);
  const { data: u } = await Z.post("/keys", l);
  return u;
}
async function Yf(e, t) {
  const { data: n } = await Z.put(`/keys/${e}`, t);
  return n;
}
async function hb(e) {
  const { data: t } = await Z.delete(`/keys/${e}`);
  return t;
}
async function pb(e, t) {
  return Yf(e, { status: t });
}
const gb = {
  list: fb,
  getById: db,
  create: mb,
  update: Yf,
  delete: hb,
  toggleStatus: pb
};
function Xf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function Pr(e) {
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
function _b(e) {
  const t = { ...e };
  t.challenge = Pr(String(t.challenge));
  const n = { ...t.user };
  return n.id = Pr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: Pr(String(r.id))
  }))), t;
}
function bb(e) {
  const t = { ...e };
  return t.challenge = Pr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: Pr(String(n.id))
  }))), t;
}
function yb(e) {
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
function vb(e) {
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
async function Eb(e) {
  Xf();
  const { data: t } = e ? await Z.post("/auth/passkey/login/begin", e) : await Z.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: bb(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await Z.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: vb(n)
  });
  return r;
}
async function wb(e, t) {
  Xf();
  const { data: n } = await Z.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: _b(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await Z.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: yb(r)
    }
  );
  return o;
}
async function Sb() {
  const { data: e } = await Z.get("/user/passkeys");
  return e;
}
async function Tb(e, t) {
  await Z.patch(`/user/passkeys/${e}`, { name: t });
}
async function Ab(e, t) {
  await Z.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Ob = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Eb,
  register: wb,
  list: Sb,
  rename: Tb,
  remove: Ab
};
async function Cb() {
  const { data: e } = await Z.get("/admin/settings");
  return e;
}
async function Rb() {
  const { data: e } = await Z.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return e;
}
async function Lb(e) {
  const { data: t } = await Z.put(
    "/admin/settings",
    e
  );
  return t;
}
async function Ib(e) {
  const { data: t } = await Z.post(
    "/admin/settings/test-smtp",
    e
  );
  return t;
}
async function kb(e) {
  const { data: t } = await Z.post(
    "/admin/settings/send-test-email",
    e
  );
  return t;
}
async function xb() {
  const { data: e } = await Z.get(
    "/admin/settings/email-templates"
  );
  return e;
}
async function Pb(e, t) {
  const { data: n } = await Z.get(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
  );
  return n;
}
async function Nb(e, t, n) {
  const { data: r } = await Z.put(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,
    n
  );
  return r;
}
async function Mb(e, t) {
  const { data: n } = await Z.post(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}/restore-official`
  );
  return n;
}
async function Db(e) {
  const { data: t } = await Z.post(
    "/admin/settings/email-template-preview",
    e
  );
  return t;
}
async function Fb() {
  const { data: e } = await Z.get(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Ub() {
  const { data: e } = await Z.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return e;
}
async function $b() {
  const { data: e } = await Z.delete(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Hb() {
  const { data: e } = await Z.get(
    "/admin/settings/overload-cooldown"
  );
  return e;
}
async function Vb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/overload-cooldown",
    e
  );
  return t;
}
async function jb() {
  const { data: e } = await Z.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return e;
}
async function Bb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/rate-limit-429-cooldown",
    e
  );
  return t;
}
async function Wb() {
  const { data: e } = await Z.get(
    "/admin/settings/panel-rate-limit"
  );
  return e;
}
async function zb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/panel-rate-limit",
    e
  );
  return t;
}
async function Kb() {
  const { data: e } = await Z.get(
    "/admin/settings/stream-timeout"
  );
  return e;
}
async function Gb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/stream-timeout",
    e
  );
  return t;
}
async function qb() {
  const { data: e } = await Z.get(
    "/admin/settings/rectifier"
  );
  return e;
}
async function Yb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/rectifier",
    e
  );
  return t;
}
async function Xb() {
  const { data: e } = await Z.get(
    "/admin/settings/beta-policy"
  );
  return e;
}
async function Jb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/beta-policy",
    e
  );
  return t;
}
async function Qb() {
  const { data: e } = await Z.get(
    "/admin/settings/web-search-emulation"
  );
  return e;
}
async function Zb(e) {
  const { data: t } = await Z.put(
    "/admin/settings/web-search-emulation",
    e
  );
  return t;
}
async function e2(e) {
  const { data: t } = await Z.post(
    "/admin/settings/web-search-emulation/test",
    { query: e }
  );
  return t;
}
async function t2(e) {
  await Z.post(
    "/admin/settings/web-search-emulation/reset-usage",
    e
  );
}
const n2 = {
  getSettings: Cb,
  getNavigationSettings: Rb,
  updateSettings: Lb,
  testSmtpConnection: Ib,
  sendTestEmail: kb,
  getEmailTemplates: xb,
  getEmailTemplate: Pb,
  updateEmailTemplate: Nb,
  restoreOfficialEmailTemplate: Mb,
  previewEmailTemplate: Db,
  getAdminApiKey: Fb,
  regenerateAdminApiKey: Ub,
  deleteAdminApiKey: $b,
  getOverloadCooldownSettings: Hb,
  updateOverloadCooldownSettings: Vb,
  getRateLimit429CooldownSettings: jb,
  updateRateLimit429CooldownSettings: Bb,
  getPanelRateLimitSettings: Wb,
  updatePanelRateLimitSettings: zb,
  getStreamTimeoutSettings: Kb,
  updateStreamTimeoutSettings: Gb,
  getRectifierSettings: qb,
  updateRectifierSettings: Yb,
  getBetaPolicySettings: Xb,
  updateBetaPolicySettings: Jb,
  getWebSearchEmulationConfig: Qb,
  updateWebSearchEmulationConfig: Zb,
  testWebSearchEmulation: e2,
  resetWebSearchUsage: t2
}, r2 = {
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
}, Yl = {
  settings: n2,
  payment: r2
}, gs = "auth_token", _s = "auth_user", bs = "refresh_token", ys = "token_expires_at", Nr = "pending_auth_session", s2 = 60 * 1e3, o2 = 120 * 1e3;
function a2(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function Xl() {
  const e = localStorage.getItem(Nr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: a2(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(Nr), null);
  } catch {
    return localStorage.removeItem(Nr), null;
  }
}
function i2(e) {
  localStorage.setItem(Nr, JSON.stringify(e));
}
function Jl() {
  localStorage.removeItem(Nr);
}
const bo = /* @__PURE__ */ Fa("auth", () => {
  const e = Q(null), t = Q(null), n = Q(null), r = Q(null), o = Q("standard"), s = Q(null);
  let a = null, i = null;
  const l = _e(() => !!t.value && !!e.value), u = _e(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), c = _e(() => o.value === "simple"), f = _e(() => s.value !== null);
  function h(V) {
    const q = localStorage.getItem(gs), ae = localStorage.getItem(_s), Le = localStorage.getItem(bs), xe = localStorage.getItem(ys);
    if (s.value = Xl(), q && ae)
      try {
        const fe = JSON.parse(ae), { run_mode: we, ...je } = fe;
        return t.value = q, e.value = je, o.value = V ?? we ?? "standard", n.value = Le, r.value = xe ? parseInt(xe, 10) : null, !0;
      } catch (fe) {
        console.error("Failed to parse saved user data:", fe), de({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function g(V) {
    o.value = V;
  }
  function S() {
    h() && (ie().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), w(), n.value && r.value !== null && E(r.value));
  }
  function w() {
    A(), a = setInterval(() => {
      t.value && ie().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, s2);
  }
  function A() {
    a && (clearInterval(a), a = null);
  }
  function E(V) {
    i && (clearTimeout(i), i = null);
    const q = Date.now(), ae = Math.max(0, V - q - o2);
    if (ae <= 0) {
      y();
      return;
    }
    i = setTimeout(() => {
      y();
    }, ae);
  }
  function P(V) {
    const q = Date.now() + V * 1e3;
    r.value = q, localStorage.setItem(ys, String(q)), E(q);
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
      const q = await Wn.login(V);
      return ni(q) || N(q), q;
    } catch (q) {
      throw de({ preservePendingAuthSession: s.value !== null }), q;
    }
  }
  async function O(V, q) {
    try {
      const ae = await Wn.login2FA({ temp_token: V, totp_code: q });
      return N(ae), e.value;
    } catch (ae) {
      throw de({ preservePendingAuthSession: s.value !== null }), ae;
    }
  }
  async function D(V) {
    try {
      const q = await Ob.login(V);
      return N(q), e.value;
    } catch (q) {
      throw de({ preservePendingAuthSession: s.value !== null }), q;
    }
  }
  function N(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(bs, V.refresh_token)), V.user.run_mode && (o.value = V.user.run_mode);
    const { run_mode: q, ...ae } = V.user;
    e.value = ae, localStorage.setItem(gs, V.access_token), localStorage.setItem(_s, JSON.stringify(ae)), U(), w(), V.refresh_token && V.expires_in && P(V.expires_in);
  }
  async function C(V) {
    try {
      const q = await Wn.register(V);
      return N(q), e.value;
    } catch (q) {
      throw de({ preservePendingAuthSession: s.value !== null }), q;
    }
  }
  async function B(V) {
    A(), v(), t.value = null, e.value = null, t.value = V, localStorage.setItem(gs, V);
    const q = localStorage.getItem(bs), ae = localStorage.getItem(ys);
    q && (n.value = q), ae && (r.value = parseInt(ae, 10));
    try {
      const Le = await ie();
      return w(), q && r.value !== null && E(r.value), U(), Le;
    } catch (Le) {
      throw de({ preservePendingAuthSession: s.value !== null }), Le;
    }
  }
  function te(V) {
    if (s.value = V, V) {
      i2(V);
      return;
    }
    Jl();
  }
  function U() {
    te(null);
  }
  async function J() {
    try {
      await Wn.logout();
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
      const V = await Wn.getCurrentUser();
      V.data.run_mode && (o.value = V.data.run_mode);
      const { run_mode: q, ...ae } = V.data;
      return e.value = ae, localStorage.setItem(_s, JSON.stringify(ae)), ae;
    } catch (V) {
      throw V.status === 401 && de({ preservePendingAuthSession: s.value !== null }), V;
    }
  }
  function de(V) {
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
    runMode: Fr(o),
    pendingAuthSession: Fr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: I,
    loginWithPasskey: D,
    login2FA: O,
    register: C,
    setToken: B,
    logout: J,
    checkAuth: S,
    hydrateAuthSnapshot: h,
    setRunModeSnapshot: g,
    refreshUser: ie,
    setPendingAuthSession: te,
    clearPendingAuthSession: U
  };
}), Sr = Q(!1), ga = Q(!1), Yn = Q([]);
let Er = null;
const l2 = 100;
function c2(e) {
  var t;
  return e.status === "active" && ((t = e.group) == null ? void 0 : t.allow_image_generation) === !0 && (e.group.platform === "openai" || e.group.platform === "grok");
}
async function u2(e = !1) {
  return bo().isAuthenticated ? Sr.value && !e ? Yn.value : (Er && !e || (ga.value = !0, Er = (async () => {
    const n = [];
    let r = 1;
    for (; ; ) {
      const o = await gb.list(r, l2, {
        status: "active",
        sort_by: "created_at",
        sort_order: "desc"
      });
      if (n.push(...(o.items || []).filter(c2)), r >= o.pages || (o.items || []).length === 0) break;
      r += 1;
    }
    return Yn.value = n, Sr.value = !0, n;
  })().catch(() => (Yn.value = [], Sr.value = !0, [])).finally(() => {
    ga.value = !1, Er = null;
  })), Er) : (Sr.value = !0, Yn.value = [], []);
}
function f2() {
  return {
    allowedImageKeys: _e(() => Yn.value),
    canUseImageGeneration: _e(() => Yn.value.length > 0),
    imageGenerationAccessLoaded: _e(() => Sr.value),
    imageGenerationAccessLoading: _e(() => ga.value),
    refreshImageGenerationAccess: u2
  };
}
const d2 = /* @__PURE__ */ Fa("adminSettings", () => {
  const e = bo(), t = Q(!1), n = Q(!1), r = Q(!0), o = Q(!0), s = Q("auto"), a = Q(!1), i = Q([]), l = Q(null);
  let u = null, c = null, f = null, h = null, g = !1, S = 0, w = 0, A = 0, E = 0;
  function P() {
    E += 1, S += 1, w += 1, A += 1, u = c = null, f = h = null, t.value = n.value = g = !1, l.value = null, i.value = [], r.value = o.value = !0, s.value = "auto", a.value = !1;
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
        const J = E, ie = f.then(() => (h === ie && (h = null), J === E ? y(!0) : void 0)).finally(() => {
          h === ie && (h = null);
        });
        h = ie;
      }
      return B ? h : f;
    }
    if (g && !B) return Promise.resolve();
    const te = ++A, U = Yl.payment.getConfig().then((J) => {
      var ie;
      te === A && (a.value = ((ie = J.data) == null ? void 0 : ie.enabled) ?? !1, g = !0);
    }).catch((J) => {
      te === A && console.error("[adminSettings] Failed to fetch payment settings:", J);
    }).finally(() => {
      f === U && (f = null);
    });
    return f = U, U;
  }
  function v(B = !1) {
    var ie;
    if (!e.token || ((ie = e.user) == null ? void 0 : ie.role) !== "admin") return Promise.resolve();
    if (u) {
      if (B && !c) {
        S += 1;
        const de = E, V = u.then(() => (c === V && (c = null), de === E ? v(!0) : void 0)).finally(() => {
          c === V && (c = null);
        });
        c = V;
      }
      return B ? c : u;
    }
    if (y(B), t.value && !B) return Promise.resolve();
    B && (S += 1), n.value = !0;
    const te = S, U = w, J = Yl.settings.getNavigationSettings().then((de) => {
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
  function I(B) {
    w += 1, r.value = B, l.value && (l.value.ops_monitoring_enabled = B);
  }
  function O(B) {
    w += 1, o.value = B, l.value && (l.value.ops_realtime_monitoring_enabled = B);
  }
  function D(B) {
    A += 1, a.value = B, g = !0;
  }
  function N(B) {
    w += 1, s.value = B || "auto", l.value && (l.value.ops_query_mode_default = s.value);
  }
  const C = () => I(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", C), fc(() => {
    P(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", C);
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
    setOpsRealtimeMonitoringEnabledLocal: O,
    setPaymentEnabledLocal: D,
    setOpsQueryModeDefaultLocal: N
  };
});
function In(e, t = "Unknown error", n) {
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
const m2 = "image-tutorial", h2 = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function p2(e) {
  return e.navigation_type !== "qr" && e.placement !== "header" && !!e.id.trim() && !!e.url.trim();
}
function g2(e) {
  const t = (e == null ? void 0 : e.filter(p2)) ?? [];
  return t.find((n) => n.id === m2) ?? t.find((n) => h2.has(n.label.trim().toLowerCase()));
}
function Ql(e) {
  const t = g2(e);
  return t ? `/custom/${encodeURIComponent(t.id)}` : "";
}
const _2 = { class: "online-image-module space-y-6" }, b2 = {
  class: "online-image-layout",
  "data-testid": "image-generation-form"
}, y2 = { class: "card space-y-5 p-5" }, v2 = { "data-testid": "api-key-row" }, E2 = { class: "input-label mb-1.5 block" }, w2 = { class: "api-key-control-row" }, S2 = ["disabled"], T2 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, A2 = {
  key: 0,
  class: "mt-1 text-xs text-gray-400 dark:text-gray-500"
}, O2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "model-count-row"
}, C2 = {
  class: "input-label mb-1.5 block",
  "data-testid": "model-select-label"
}, R2 = { class: "input-label mb-1.5 block" }, L2 = { "data-testid": "size-control" }, I2 = { class: "input-label mb-1.5 block" }, k2 = ["aria-label"], x2 = { class: "truncate" }, P2 = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "quality-format-row"
}, N2 = { class: "input-label mb-1.5 block" }, M2 = { class: "input-label mb-1.5 block" }, D2 = {
  class: "space-y-2",
  "data-testid": "reference-images-panel"
}, F2 = { class: "flex flex-wrap items-center justify-between gap-3" }, U2 = {
  for: "reference-image-input",
  class: "input-label"
}, $2 = ["onKeydown"], H2 = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, V2 = ["src", "alt"], j2 = ["aria-label", "onClick"], B2 = { class: "mt-4 flex flex-wrap items-center gap-3 first:mt-0" }, W2 = { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, z2 = { class: "min-w-0 flex-1" }, K2 = { class: "text-sm font-medium text-gray-800 dark:text-gray-200" }, G2 = { class: "mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400" }, q2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Y2 = {
  key: 1,
  class: "text-xs text-red-500"
}, X2 = ["href", "aria-disabled", "tabindex", "title"], J2 = {
  class: "space-y-4",
  "data-testid": "right-column"
}, Q2 = {
  class: "card space-y-4 p-5",
  "data-testid": "prompt-panel"
}, Z2 = { class: "input-label mb-1.5 block" }, ey = ["placeholder"], ty = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, ny = ["disabled"], ry = {
  class: "card p-5",
  "data-testid": "results-panel"
}, sy = { class: "flex items-start justify-between gap-3" }, oy = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, ay = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, iy = {
  key: 0,
  class: "badge badge-gray"
}, ly = {
  key: 0,
  class: "flex min-h-[360px] flex-col items-center justify-center py-8 text-center"
}, cy = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, uy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, fy = {
  key: 1,
  class: "mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
}, dy = { class: "bg-gray-50 dark:bg-dark-900" }, my = ["src", "alt"], hy = { class: "space-y-3 p-4" }, py = { class: "text-sm leading-6 text-gray-700 dark:text-gray-300" }, gy = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, _y = { class: "grid grid-cols-2 gap-2" }, by = ["onClick"], yy = ["onClick"], vy = { class: "card p-5" }, Ey = { class: "flex flex-wrap items-start justify-between gap-3" }, wy = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, Sy = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, Ty = ["disabled"], Ay = {
  key: 0,
  class: "flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400"
}, Oy = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400 dark:text-gray-500"
}, Cy = {
  key: 2,
  class: "mt-4 space-y-4"
}, Ry = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, Ly = { class: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400" }, Iy = { class: "mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300" }, ky = { class: "grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4" }, xy = ["src", "alt"], Py = { class: "grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700" }, Ny = ["aria-label", "onClick"], My = ["aria-label", "onClick"], Dy = { class: "space-y-5" }, Fy = { class: "text-sm text-gray-500 dark:text-gray-400" }, Uy = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, $y = { class: "grid grid-cols-3 gap-2" }, Hy = ["aria-pressed", "onClick"], Vy = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, jy = { class: "grid grid-cols-4 gap-2 sm:gap-3" }, By = ["aria-pressed", "onClick"], Wy = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, zy = { class: "text-sm text-gray-500 dark:text-gray-400" }, Ky = { class: "mt-1 text-xl font-semibold text-gray-900 dark:text-white" }, Gy = { class: "flex w-full justify-end gap-2" }, qy = "zero-one-image-generation", Ot = "history", Vo = 20, Yy = /* @__PURE__ */ rn({
  __name: "ImageGenerationView",
  setup(e) {
    const { t } = Qr(), n = ri(), r = bo(), o = d2(), s = _e(() => {
      var z;
      if (r.isAdmin) {
        const W = Ql(o.customMenuItems);
        if (W || o.loaded) return W;
      }
      return Ql((z = n.cachedPublicSettings) == null ? void 0 : z.custom_menu_items);
    });
    function a(z, W) {
      var yt, jt, pr;
      if (!W) return;
      z.preventDefault();
      const j = [...document.querySelectorAll("aside a[href]")].find((os) => os.getAttribute("href") === W);
      if (j) {
        j.click();
        return;
      }
      const Te = document.querySelector("#app"), Ce = (pr = (jt = (yt = Te == null ? void 0 : Te.__vue_app__) == null ? void 0 : yt.config) == null ? void 0 : jt.globalProperties) == null ? void 0 : pr.$router;
      if (Ce) {
        Ce.push(W);
        return;
      }
      window.location.assign(W);
    }
    const {
      allowedImageKeys: i,
      imageGenerationAccessLoading: l,
      refreshImageGenerationAccess: u
    } = f2(), c = Q(null), f = Q(null), h = Q([]), g = Q(!1), S = Q("");
    let w = null, A = 0;
    const E = Q("1"), P = Q(""), y = Q("2K"), v = Q("9:16"), I = Q("1152x2048"), O = Q("high"), D = Q("b64_json"), N = Q(!1), C = Q([]), B = Q(""), te = Q(t("imageGeneration.results.emptyHint")), U = Q(null), J = Q([]), ie = Q(""), de = Q(!1), V = Q(!1), q = Q(y.value), ae = Q(v.value), Le = ["1K", "2K", "4K"], xe = [
      { label: "1:1", value: "1:1", previewClass: "h-5 w-5" },
      { label: "3:2", value: "3:2", previewClass: "h-4 w-6" },
      { label: "2:3", value: "2:3", previewClass: "h-6 w-4" },
      { label: "16:9", value: "16:9", previewClass: "h-4 w-7" },
      { label: "9:16", value: "9:16", previewClass: "h-7 w-4" },
      { label: "4:3", value: "4:3", previewClass: "h-5 w-6" },
      { label: "3:4", value: "3:4", previewClass: "h-6 w-5" },
      { label: "21:9", value: "21:9", previewClass: "h-3 w-8" }
    ], fe = Q([]), we = Q(!0), je = _e(() => i.value.map((z) => {
      var W, j;
      return {
        value: z.id,
        label: `${z.name} · ${((W = z.group) == null ? void 0 : W.name) || ((j = z.group) == null ? void 0 : j.platform) || t("common.unknown")}`
      };
    })), Ue = _e(() => i.value.find((z) => z.id === c.value) || null), tt = _e(() => {
      var W, j;
      const z = Ue.value;
      return z ? `${((W = z.group) == null ? void 0 : W.platform) || t("common.unknown")} · ${((j = z.group) == null ? void 0 : j.name) || t("common.unknown")}` : "";
    }), pe = _e(() => h.value.map((z) => ({ value: z, label: z }))), K = [
      { label: "Auto", value: "auto" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ], re = [
      { label: "Base64", value: "b64_json" },
      { label: "URL", value: "url" }
    ], oe = _e(() => S.value ? S.value : g.value ? t("imageGeneration.hints.modelsLoading") : Ue.value && h.value.length === 0 ? t("imageGeneration.hints.modelsEmpty") : ""), Ae = _e(() => `${y.value} · ${v.value}`), qe = _e(() => _(q.value, ae.value)), p = _e(() => N.value || l.value || g.value || !Ue.value || !f.value || !P.value.trim());
    function _(z, W) {
      const j = { "1K": 1024, "2K": 2048, "4K": 4096 }[z] || 2048, [Te, Ce] = W.split(":").map(Number);
      return !Te || !Ce ? `${j}x${j}` : Te >= Ce ? `${j}x${Math.round(j * Ce / Te)}` : `${Math.round(j * Te / Ce)}x${j}`;
    }
    function b() {
      q.value = y.value, ae.value = v.value, V.value = !0;
    }
    function x() {
      V.value = !1;
    }
    function k() {
      y.value = q.value, v.value = ae.value, I.value = qe.value, x();
    }
    async function M() {
      w == null || w.abort();
      const z = Ue.value;
      if (h.value = [], f.value = null, S.value = "", !z) return;
      const W = new AbortController(), j = ++A;
      w = W, g.value = !0;
      try {
        const Te = await cb(z.key, { signal: W.signal });
        if (W.signal.aborted || j !== A) return;
        h.value = Te, f.value = Te[0] || null;
      } catch (Te) {
        if (W.signal.aborted || j !== A) return;
        S.value = In(Te, t("imageGeneration.messages.loadModelsFailed")), n.showError(S.value);
      } finally {
        j === A && (g.value = !1, w = null);
      }
    }
    async function X() {
      var z;
      try {
        await u(!0), c.value && !i.value.some((W) => W.id === c.value) ? c.value = ((z = i.value[0]) == null ? void 0 : z.id) || null : await M();
      } catch (W) {
        n.showError(In(W, t("imageGeneration.messages.loadKeysFailed")));
      }
    }
    function G() {
      var z;
      (z = U.value) == null || z.click();
    }
    function d(z) {
      return `${z.name}-${z.size}-${z.lastModified}`;
    }
    function m(z) {
      const W = [...J.value], j = new Set(W.map((Ce) => Ce.id)), Te = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
      ie.value = "";
      for (const Ce of Array.from(z)) {
        if (W.length >= 4) {
          ie.value = t("imageGeneration.messages.referenceImagesLimit");
          break;
        }
        if (!Te.has(Ce.type.toLowerCase())) {
          ie.value = t("imageGeneration.messages.referenceImageType");
          continue;
        }
        if (Ce.size > 20 * 1024 * 1024) {
          ie.value = t("imageGeneration.messages.referenceImageTooLarge");
          continue;
        }
        const yt = d(Ce);
        j.has(yt) || (W.push({ id: yt, file: Ce, previewUrl: URL.createObjectURL(Ce) }), j.add(yt));
      }
      J.value = W, de.value = !1;
    }
    function R(z) {
      const W = z.target;
      W.files && m(W.files), W.value = "";
    }
    function F(z) {
      var W;
      (W = z.dataTransfer) != null && W.files && m(z.dataTransfer.files);
    }
    function ee(z) {
      const W = J.value.find((j) => j.id === z);
      W && URL.revokeObjectURL(W.previewUrl), J.value = J.value.filter((j) => j.id !== z), ie.value = "";
    }
    function Y() {
      J.value.forEach((z) => URL.revokeObjectURL(z.previewUrl)), J.value = [], ie.value = "";
    }
    function L(z) {
      const W = String(z.mime_type || "").trim();
      if (W) return W;
      const j = String(z.output_format || "").trim().toLowerCase();
      return j === "webp" ? "image/webp" : j === "jpeg" || j === "jpg" ? "image/jpeg" : "image/png";
    }
    function $(z) {
      const W = String(z.b64_json || "").trim();
      return W ? `data:${L(z)};base64,${W}` : String(z.url || "").trim();
    }
    function ce(z, W) {
      const j = W === "image/webp" ? "webp" : W === "image/jpeg" ? "jpg" : "png";
      return `online-image-${Date.now()}-${z + 1}.${j}`;
    }
    function Se() {
      const z = Number.parseInt(E.value, 10);
      return Number.isFinite(z) ? Math.min(Math.max(z, 1), 4) : 1;
    }
    async function $e() {
      const z = Ue.value;
      if (!z) return n.showError(t("imageGeneration.messages.chooseKey"));
      if (!f.value) return n.showError(t("imageGeneration.messages.chooseModel"));
      if (!P.value.trim()) return n.showError(t("imageGeneration.messages.choosePrompt"));
      N.value = !0;
      try {
        const W = await ub(z.key, {
          model: f.value,
          prompt: P.value.trim(),
          n: Se(),
          size: I.value,
          quality: String(O.value || ""),
          response_format: String(D.value || ""),
          referenceImages: J.value.map((Ce) => Ce.file)
        }), j = (W.data || []).flatMap((Ce, yt) => {
          const jt = $(Ce);
          if (!jt) return [];
          const pr = String(Ce.revised_prompt || "").trim(), os = L(Ce);
          return [{
            id: `${Date.now()}-${yt}-${Math.random().toString(36).slice(2, 8)}`,
            src: jt,
            prompt: pr || P.value.trim(),
            revisedPrompt: pr,
            mimeType: os,
            downloadName: ce(yt, os)
          }];
        });
        if (C.value = j, B.value = W.model || f.value, te.value = j.length > 0 ? `${j.length} × ${B.value}` : t("imageGeneration.messages.noImages"), j.length === 0) return n.showInfo(t("imageGeneration.messages.noImages"));
        const Te = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
          createdAt: Date.now(),
          model: B.value,
          prompt: P.value.trim(),
          sizeLabel: Ae.value,
          imageSize: I.value,
          images: j
        };
        try {
          await ss(Te), fe.value = [Te, ...fe.value].slice(0, Vo);
        } catch (Ce) {
          n.showInfo(In(Ce, t("imageGeneration.messages.historySaveFailed")));
        }
        n.showSuccess(t("imageGeneration.messages.generated"));
      } catch (W) {
        n.showError(In(W, t("imageGeneration.messages.generateFailed")));
      } finally {
        N.value = !1;
      }
    }
    async function nt(z) {
      try {
        if (z.src.startsWith("data:")) {
          const Ce = document.createElement("a");
          Ce.href = z.src, Ce.download = z.downloadName, document.body.append(Ce), Ce.click(), Ce.remove();
          return;
        }
        const W = await fetch(z.src);
        if (!W.ok) throw new Error(`HTTP ${W.status}`);
        const j = URL.createObjectURL(await W.blob()), Te = document.createElement("a");
        Te.href = j, Te.download = z.downloadName, document.body.append(Te), Te.click(), Te.remove(), URL.revokeObjectURL(j);
      } catch (W) {
        n.showError(In(W, t("imageGeneration.messages.downloadFailed")));
      }
    }
    function Xe(z) {
      window.open(z.src, "_blank", "noopener,noreferrer");
    }
    function Vt(z) {
      return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(new Date(z));
    }
    function Tn() {
      return typeof indexedDB > "u" ? Promise.reject(new Error("IndexedDB is not available")) : new Promise((z, W) => {
        const j = indexedDB.open(qy, 1);
        j.onupgradeneeded = () => {
          j.result.objectStoreNames.contains(Ot) || j.result.createObjectStore(Ot, { keyPath: "id" });
        }, j.onsuccess = () => z(j.result), j.onerror = () => W(j.error || new Error("Failed to open IndexedDB"));
      });
    }
    function at(z) {
      return new Promise((W, j) => {
        z.onsuccess = () => W(z.result), z.onerror = () => j(z.error || new Error("IndexedDB request failed"));
      });
    }
    function bt(z) {
      return new Promise((W, j) => {
        z.oncomplete = () => W(), z.onerror = () => j(z.error || new Error("IndexedDB transaction failed")), z.onabort = () => j(z.error || new Error("IndexedDB transaction aborted"));
      });
    }
    async function rs() {
      const z = await Tn();
      try {
        return (await at(z.transaction(Ot, "readonly").objectStore(Ot).getAll())).filter((j) => Array.isArray(j.images) && j.images.length > 0).sort((j, Te) => Te.createdAt - j.createdAt).slice(0, Vo);
      } finally {
        z.close();
      }
    }
    async function ss(z) {
      const W = await Tn();
      try {
        const j = W.transaction(Ot, "readwrite");
        j.objectStore(Ot).put(z), await bt(j);
        const Ce = (await at(W.transaction(Ot, "readonly").objectStore(Ot).getAll())).sort((yt, jt) => jt.createdAt - yt.createdAt).slice(Vo);
        if (Ce.length > 0) {
          const yt = W.transaction(Ot, "readwrite");
          Ce.forEach((jt) => yt.objectStore(Ot).delete(jt.id)), await bt(yt);
        }
      } finally {
        W.close();
      }
    }
    async function Jf() {
      try {
        fe.value = await rs();
      } catch (z) {
        n.showError(In(z, t("imageGeneration.messages.historyLoadFailed")));
      } finally {
        we.value = !1;
      }
    }
    async function Qf() {
      if (window.confirm(t("imageGeneration.history.clearConfirm")))
        try {
          const z = await Tn(), W = z.transaction(Ot, "readwrite");
          W.objectStore(Ot).clear(), await bt(W), z.close(), fe.value = [];
        } catch (z) {
          n.showError(In(z, t("imageGeneration.messages.historyClearFailed")));
        }
    }
    return Tt(i, (z) => {
      z.length === 0 ? c.value = null : z.some((W) => W.id === c.value) || (c.value = z[0].id);
    }, { immediate: !0 }), Tt(c, () => {
      M();
    }, { immediate: !0 }), fr(() => {
      u(), Jf(), r.isAdmin && o.fetch();
    }), xa(() => {
      A += 1, w == null || w.abort(), Y();
    }), (z, W) => (ge(), Ee("div", _2, [
      H("div", b2, [
        H("section", y2, [
          H("a", {
            href: "/keys",
            class: "btn btn-secondary btn-specular w-full",
            "data-testid": "create-image-api-key",
            "data-online-image-action": "",
            onClick: W[0] || (W[0] = (j) => a(j, "/keys"))
          }, [
            ye(ze, {
              name: "key",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.createImageApiKey")), 1)
          ]),
          H("div", v2, [
            H("label", E2, ue(le(t)("imageGeneration.controls.apiKey")), 1),
            H("div", w2, [
              ye(ps, {
                modelValue: c.value,
                "onUpdate:modelValue": W[1] || (W[1] = (j) => c.value = j),
                "data-testid": "api-key-select",
                "aria-label": le(t)("imageGeneration.controls.apiKey"),
                options: je.value,
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
                disabled: le(l) || g.value,
                onClick: X
              }, [
                ye(ze, {
                  name: "refresh",
                  size: "md",
                  class: Ke({ "animate-spin": le(l) || g.value })
                }, null, 8, ["class"]),
                H("span", null, ue(le(t)("imageGeneration.controls.refreshKeys")), 1)
              ], 8, S2)
            ]),
            H("p", T2, ue(le(t)("imageGeneration.hints.apiKey")), 1),
            tt.value ? (ge(), Ee("p", A2, ue(tt.value), 1)) : Qe("", !0)
          ]),
          H("div", O2, [
            H("div", null, [
              H("label", C2, ue(le(t)("imageGeneration.controls.modelSelection")), 1),
              ye(ps, {
                modelValue: f.value,
                "onUpdate:modelValue": W[2] || (W[2] = (j) => f.value = j),
                "data-testid": "model-select",
                "aria-label": le(t)("imageGeneration.controls.modelSelection"),
                options: pe.value,
                placeholder: le(t)("common.selectOption"),
                disabled: !Ue.value || g.value || pe.value.length === 0,
                loading: g.value,
                "empty-text": g.value ? le(t)("common.loading") : le(t)("common.noOptionsFound"),
                searchable: ""
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              oe.value ? (ge(), Ee("p", {
                key: 0,
                class: Ke(["mt-1 text-xs", S.value ? "text-red-500" : "text-gray-500 dark:text-gray-400"])
              }, ue(oe.value), 3)) : Qe("", !0)
            ]),
            H("div", null, [
              H("label", R2, ue(le(t)("imageGeneration.controls.count")), 1),
              zo(H("input", {
                "onUpdate:modelValue": W[3] || (W[3] = (j) => E.value = j),
                type: "number",
                min: "1",
                max: "4",
                class: "input w-full"
              }, null, 512), [
                [ea, E.value]
              ])
            ])
          ]),
          H("div", L2, [
            H("label", I2, ue(le(t)("imageGeneration.controls.imageSize")), 1),
            H("button", {
              type: "button",
              "data-testid": "image-size-trigger",
              class: "btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left",
              "data-online-image-action": "",
              "aria-label": le(t)("imageGeneration.sizeDialog.title"),
              onClick: b
            }, [
              H("span", x2, ue(Ae.value), 1),
              ye(ze, {
                name: "chevronDown",
                size: "sm",
                class: "flex-shrink-0"
              })
            ], 8, k2)
          ]),
          H("div", P2, [
            H("div", null, [
              H("label", N2, ue(le(t)("imageGeneration.controls.quality")), 1),
              ye(ps, {
                modelValue: O.value,
                "onUpdate:modelValue": W[4] || (W[4] = (j) => O.value = j),
                options: K,
                "data-testid": "quality-select"
              }, null, 8, ["modelValue"])
            ]),
            H("div", null, [
              H("label", M2, ue(le(t)("imageGeneration.controls.responseFormat")), 1),
              ye(ps, {
                modelValue: D.value,
                "onUpdate:modelValue": W[5] || (W[5] = (j) => D.value = j),
                options: re,
                "data-testid": "response-format-select"
              }, null, 8, ["modelValue"])
            ])
          ]),
          H("div", D2, [
            H("div", F2, [
              H("label", U2, ue(le(t)("imageGeneration.controls.referenceImages")), 1),
              J.value.length > 0 ? (ge(), Ee("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm",
                "data-online-image-action": "",
                onClick: Y
              }, ue(le(t)("imageGeneration.controls.clearReferenceImages")), 1)) : Qe("", !0)
            ]),
            H("input", {
              id: "reference-image-input",
              ref_key: "referenceInput",
              ref: U,
              type: "file",
              accept: "image/png,image/jpeg,image/webp",
              multiple: "",
              class: "sr-only",
              onChange: R
            }, null, 544),
            H("div", {
              class: Ke(["rounded-lg border-2 border-dashed p-4 transition-colors", de.value ? "border-gray-600 bg-gray-100 dark:border-gray-300 dark:bg-dark-700" : "border-gray-300 bg-gray-50 hover:border-gray-500 dark:border-dark-600 dark:bg-dark-900/50 dark:hover:border-gray-400"]),
              role: "button",
              tabindex: "0",
              onClick: G,
              onKeydown: [
                kr(Je(G, ["prevent"]), ["enter"]),
                kr(Je(G, ["prevent"]), ["space"])
              ],
              onDragenter: W[6] || (W[6] = Je((j) => de.value = !0, ["prevent"])),
              onDragover: W[7] || (W[7] = Je((j) => de.value = !0, ["prevent"])),
              onDragleave: W[8] || (W[8] = Je((j) => de.value = !1, ["prevent"])),
              onDrop: Je(F, ["prevent"])
            }, [
              J.value.length > 0 ? (ge(), Ee("div", H2, [
                (ge(!0), Ee(He, null, dn(J.value, (j) => (ge(), Ee("div", {
                  key: j.id,
                  class: "group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                }, [
                  H("img", {
                    src: j.previewUrl,
                    alt: j.file.name,
                    class: "h-full w-full object-cover"
                  }, null, 8, V2),
                  H("button", {
                    type: "button",
                    class: "absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
                    "aria-label": le(t)("imageGeneration.controls.removeReferenceImage"),
                    onClick: Je((Te) => ee(j.id), ["stop"])
                  }, [
                    ye(ze, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, j2)
                ]))), 128))
              ])) : Qe("", !0),
              H("div", B2, [
                H("div", W2, [
                  ye(ze, {
                    name: "upload",
                    size: "md"
                  })
                ]),
                H("div", z2, [
                  H("p", K2, ue(le(t)("imageGeneration.controls.referenceImagesDrop")), 1),
                  H("p", G2, ue(le(t)("imageGeneration.hints.referenceImages")), 1)
                ]),
                H("button", {
                  type: "button",
                  class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                  "data-online-image-action": "",
                  onClick: Je(G, ["stop"])
                }, [
                  ye(ze, {
                    name: "upload",
                    size: "sm"
                  }),
                  qn(" " + ue(le(t)("imageGeneration.controls.chooseReferenceImages")), 1)
                ])
              ])
            ], 42, $2),
            J.value.length > 0 ? (ge(), Ee("p", q2, ue(le(t)("imageGeneration.hints.referenceImagesSelected", { count: J.value.length })), 1)) : Qe("", !0),
            ie.value ? (ge(), Ee("p", Y2, ue(ie.value), 1)) : Qe("", !0)
          ]),
          H("a", {
            href: s.value || void 0,
            class: Ke(["btn btn-secondary btn-specular w-full", { "pointer-events-none opacity-50": !s.value }]),
            "data-testid": "image-tutorial-link",
            "data-online-image-action": "",
            "aria-disabled": !s.value,
            tabindex: s.value ? void 0 : -1,
            title: s.value ? void 0 : le(t)("imageGeneration.hints.imageTutorialUnavailable"),
            onClick: W[9] || (W[9] = (j) => a(j, s.value))
          }, [
            ye(ze, {
              name: "book",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.imageTutorial")), 1)
          ], 10, X2)
        ]),
        H("section", J2, [
          H("div", Q2, [
            H("div", null, [
              H("label", Z2, ue(le(t)("imageGeneration.controls.prompt")), 1),
              zo(H("textarea", {
                "onUpdate:modelValue": W[10] || (W[10] = (j) => P.value = j),
                rows: "5",
                class: "input min-h-32 w-full resize-y",
                placeholder: le(t)("imageGeneration.controls.prompt")
              }, null, 8, ey), [
                [ea, P.value]
              ]),
              H("p", ty, ue(le(t)("imageGeneration.hints.responseFormat")), 1)
            ]),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular w-full",
              "data-testid": "start-generation",
              "data-online-image-action": "",
              disabled: p.value,
              onClick: $e
            }, [
              ye(ze, {
                name: "sparkles",
                size: "md",
                class: Ke({ "animate-pulse": N.value })
              }, null, 8, ["class"]),
              H("span", null, ue(N.value ? le(t)("imageGeneration.controls.generating") : le(t)("imageGeneration.controls.generate")), 1)
            ], 8, ny)
          ]),
          H("div", ry, [
            H("div", sy, [
              H("div", null, [
                H("h2", oy, ue(le(t)("imageGeneration.results.title")), 1),
                H("p", ay, ue(te.value), 1)
              ]),
              B.value ? (ge(), Ee("span", iy, ue(B.value), 1)) : Qe("", !0)
            ]),
            C.value.length === 0 ? (ge(), Ee("div", ly, [
              ye(ze, {
                name: "sparkles",
                size: "xl",
                class: "mb-4 text-gray-400 dark:text-dark-500"
              }),
              H("p", cy, ue(le(t)("imageGeneration.results.empty")), 1),
              H("p", uy, ue(le(t)("imageGeneration.results.emptyHint")), 1)
            ])) : (ge(), Ee("div", fy, [
              (ge(!0), Ee(He, null, dn(C.value, (j) => (ge(), Ee("article", {
                key: j.id,
                class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              }, [
                H("div", dy, [
                  H("img", {
                    src: j.src,
                    alt: j.prompt,
                    class: "aspect-square w-full object-contain"
                  }, null, 8, my)
                ]),
                H("div", hy, [
                  H("p", py, ue(j.prompt), 1),
                  j.revisedPrompt ? (ge(), Ee("p", gy, ue(le(t)("imageGeneration.results.revisedPrompt")) + ": " + ue(j.revisedPrompt), 1)) : Qe("", !0),
                  H("div", _y, [
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Te) => nt(j)
                    }, [
                      ye(ze, {
                        name: "download",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.download")), 1)
                    ], 8, by),
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Te) => Xe(j)
                    }, [
                      ye(ze, {
                        name: "externalLink",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.open")), 1)
                    ], 8, yy)
                  ])
                ])
              ]))), 128))
            ]))
          ]),
          H("div", vy, [
            H("div", Ey, [
              H("div", null, [
                H("h2", wy, ue(le(t)("imageGeneration.history.title")), 1),
                H("p", Sy, ue(le(t)("imageGeneration.history.hint")), 1)
              ]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                "data-online-image-action": "",
                disabled: fe.value.length === 0 || we.value,
                onClick: Qf
              }, [
                ye(ze, {
                  name: "trash",
                  size: "sm"
                }),
                qn(" " + ue(le(t)("imageGeneration.history.clear")), 1)
              ], 8, Ty)
            ]),
            we.value ? (ge(), Ee("div", Ay, ue(le(t)("common.loading")), 1)) : fe.value.length === 0 ? (ge(), Ee("div", Oy, ue(le(t)("imageGeneration.history.empty")), 1)) : (ge(), Ee("div", Cy, [
              (ge(!0), Ee(He, null, dn(fe.value, (j) => (ge(), Ee("article", {
                key: j.id,
                class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700"
              }, [
                H("div", Ry, [
                  H("div", Ly, [
                    H("span", null, ue(Vt(j.createdAt)), 1),
                    W[11] || (W[11] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.model), 1),
                    W[12] || (W[12] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.sizeLabel), 1),
                    W[13] || (W[13] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(j.imageSize), 1)
                  ]),
                  H("p", Iy, ue(j.prompt), 1)
                ]),
                H("div", ky, [
                  (ge(!0), Ee(He, null, dn(j.images, (Te) => (ge(), Ee("div", {
                    key: Te.id,
                    class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                  }, [
                    H("img", {
                      src: Te.src,
                      alt: Te.prompt,
                      class: "aspect-square w-full object-contain",
                      loading: "lazy"
                    }, null, 8, xy),
                    H("div", Py, [
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.download"),
                        onClick: (Ce) => nt(Te)
                      }, [
                        ye(ze, {
                          name: "download",
                          size: "sm"
                        })
                      ], 8, Ny),
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.open"),
                        onClick: (Ce) => Xe(Te)
                      }, [
                        ye(ze, {
                          name: "externalLink",
                          size: "sm"
                        })
                      ], 8, My)
                    ])
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ])
      ]),
      ye(X1, {
        show: V.value,
        title: le(t)("imageGeneration.sizeDialog.title"),
        width: "normal",
        "data-testid": "image-size-dialog",
        onClose: x
      }, {
        footer: sr(() => [
          H("div", Gy, [
            H("button", {
              type: "button",
              class: "btn btn-secondary btn-specular",
              "data-online-image-action": "",
              onClick: x
            }, ue(le(t)("imageGeneration.sizeDialog.cancel")), 1),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular",
              "data-online-image-action": "",
              onClick: k
            }, ue(le(t)("imageGeneration.sizeDialog.confirm")), 1)
          ])
        ]),
        default: sr(() => [
          H("div", Dy, [
            H("p", Fy, ue(le(t)("imageGeneration.sizeDialog.current", { size: Ae.value })), 1),
            H("div", null, [
              H("h4", Uy, ue(le(t)("imageGeneration.sizeDialog.resolution")), 1),
              H("div", $y, [
                (ge(), Ee(He, null, dn(Le, (j) => H("button", {
                  key: j,
                  type: "button",
                  class: Ke(["btn btn-specular", q.value === j ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": q.value === j,
                  onClick: (Te) => q.value = j
                }, ue(j), 11, Hy)), 64))
              ])
            ]),
            H("div", null, [
              H("h4", Vy, ue(le(t)("imageGeneration.sizeDialog.aspectRatio")), 1),
              H("div", jy, [
                (ge(), Ee(He, null, dn(xe, (j) => H("button", {
                  key: j.value,
                  type: "button",
                  class: Ke(["btn btn-specular min-h-[72px] flex-col px-1.5 text-xs", ae.value === j.value ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": ae.value === j.value,
                  onClick: (Te) => ae.value = j.value
                }, [
                  H("span", {
                    class: Ke(["block rounded-[3px] border border-current", j.previewClass])
                  }, null, 2),
                  H("span", null, ue(j.label), 1)
                ], 10, By)), 64))
              ])
            ]),
            H("div", Wy, [
              H("p", zy, ue(le(t)("imageGeneration.sizeDialog.output")), 1),
              H("p", Ky, ue(qe.value), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), Xy = /* @__PURE__ */ si(Yy, [["__scopeId", "data-v-284741a4"]]);
async function _v(e) {
  await qg();
  const t = Ch(), n = ri(t), r = bo(t);
  n.initFromInjectedConfig(), await n.fetchPublicSettings(!0), r.hydrateAuthSnapshot(e.runMode);
  const s = Th(/* @__PURE__ */ rn({
    name: "ZeroOneOnlineImageRoot",
    setup: () => () => [Br(Xy), Br(G1)]
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
  _v as prepareOnlineImageSurface
};
