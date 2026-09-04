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
const Ne = {}, qn = [], Ht = () => {
}, ec = () => !1, Hs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ma = (e) => e.startsWith("onUpdate:"), nt = Object.assign, ha = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zf = Object.prototype.hasOwnProperty, xe = (e, t) => Zf.call(e, t), he = Array.isArray, Yn = (e) => Vs(e) === "[object Map]", tc = (e) => Vs(e) === "[object Set]", ve = (e) => typeof e == "function", qe = (e) => typeof e == "string", nn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", nc = (e) => (Fe(e) || ve(e)) && ve(e.then) && ve(e.catch), rc = Object.prototype.toString, Vs = (e) => rc.call(e), ed = (e) => Vs(e).slice(8, -1), sc = (e) => Vs(e) === "[object Object]", js = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Er = /* @__PURE__ */ da(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, td = /-\w/g, _n = Bs(
  (e) => e.replace(td, (t) => t.slice(1).toUpperCase())
), nd = /\B([A-Z])/g, vn = Bs(
  (e) => e.replace(nd, "-$1").toLowerCase()
), oc = Bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), mo = Bs(
  (e) => e ? `on${oc(e)}` : ""
), pn = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ac = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, pa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rd = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ri;
const Ws = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lr(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = qe(r) ? id(r) : lr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (qe(e) || Fe(e))
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
function Ge(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ge(e[n]);
      r && (t += r + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ld = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cd = /* @__PURE__ */ da(ld);
function ic(e) {
  return !!e || e === "";
}
const lc = (e) => !!(e && e.__v_isRef === !0), ue = (e) => qe(e) ? e : e == null ? "" : he(e) || Fe(e) && (e.toString === rc || !ve(e.toString)) ? lc(e) ? ue(e.value) : JSON.stringify(e, cc, 2) : String(e), cc = (e, t) => lc(t) ? cc(e, t.value) : Yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[ho(r, s) + " =>"] = o, n),
    {}
  )
} : tc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ho(n))
} : nn(t) ? ho(t) : Fe(t) && !he(t) && !sc(t) ? String(t) : t, ho = (e, t = "") => {
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
let ct;
class uc {
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
  return new uc(e);
}
function fc() {
  return ct;
}
function dc(e, t = !1) {
  ct && ct.cleanups.push(e);
}
let Me;
const po = /* @__PURE__ */ new WeakSet();
class mc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ct && ct.active && ct.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, po.has(this) && (po.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, si(this), gc(this);
    const t = Me, n = kt;
    Me = this, kt = !0;
    try {
      return this.fn();
    } finally {
      _c(this), Me = t, kt = n, this.flags &= -3;
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
    this.flags & 64 ? po.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let hc = 0, wr, Sr;
function pc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Sr, Sr = e;
    return;
  }
  e.next = wr, wr = e;
}
function _a() {
  hc++;
}
function ba() {
  if (--hc > 0)
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
function gc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _c(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ya(r), ud(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Do(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (bc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function bc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xr) || (e.globalVersion = xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Do(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Me, r = kt;
  Me = e, kt = !0;
  try {
    gc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pn(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = n, kt = r, _c(e), e.flags &= -3;
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
function ud(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kt = !0;
const yc = [];
function Qt() {
  yc.push(kt), kt = !1;
}
function Zt() {
  const e = yc.pop();
  kt = e === void 0 ? !0 : e;
}
function si(e) {
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
let xr = 0;
class fd {
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
    if (!Me || !kt || Me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      n = this.activeLink = new fd(Me, this), Me.deps ? (n.prevDep = Me.depsTail, Me.depsTail.nextDep = n, Me.depsTail = n) : Me.deps = Me.depsTail = n, vc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Me.depsTail, n.nextDep = void 0, Me.depsTail.nextDep = n, Me.depsTail = n, Me.deps === n && (Me.deps = r);
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
function vc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        vc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ Symbol(
  ""
), Fo = /* @__PURE__ */ Symbol(
  ""
), Pr = /* @__PURE__ */ Symbol(
  ""
);
function ut(e, t, n) {
  if (kt && Me) {
    let r = Ss.get(e);
    r || Ss.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new va()), o.map = r, o.key = n), o.track();
  }
}
function qt(e, t, n, r, o, s) {
  const a = Ss.get(e);
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
    const l = he(e), u = l && js(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Pr || !nn(h) && h >= c) && i(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), u && i(a.get(Pr)), t) {
        case "add":
          l ? u && i(a.get("length")) : (i(a.get(Nn)), Yn(e) && i(a.get(Fo)));
          break;
        case "delete":
          l || (i(a.get(Nn)), Yn(e) && i(a.get(Fo)));
          break;
        case "set":
          Yn(e) && i(a.get(Nn));
          break;
      }
  }
  ba();
}
function dd(e, t) {
  const n = Ss.get(e);
  return n && n.get(t);
}
function Hn(e) {
  const t = Le(e);
  return t === e ? t : (ut(t, "iterate", Pr), At(e) ? t : t.map(xt));
}
function Ks(e) {
  return ut(e = Le(e), "iterate", Pr), e;
}
function un(e, t) {
  return en(e) ? Jt(e) ? tr(xt(t)) : tr(t) : xt(t);
}
const md = {
  __proto__: null,
  [Symbol.iterator]() {
    return go(this, Symbol.iterator, (e) => un(this, e));
  },
  concat(...e) {
    return Hn(this).concat(
      ...e.map((t) => he(t) ? Hn(t) : t)
    );
  },
  entries() {
    return go(this, "entries", (e) => (e[1] = un(this, e[1]), e));
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
    return _o(this, "includes", e);
  },
  indexOf(...e) {
    return _o(this, "indexOf", e);
  },
  join(e) {
    return Hn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _o(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Bt(this, "map", e, t, void 0, arguments);
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
    return Bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return pr(this, "splice", e);
  },
  toReversed() {
    return Hn(this).toReversed();
  },
  toSorted(e) {
    return Hn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Hn(this).toSpliced(...e);
  },
  unshift(...e) {
    return pr(this, "unshift", e);
  },
  values() {
    return go(this, "values", (e) => un(this, e));
  }
};
function go(e, t, n) {
  const r = Ks(e), o = r[t]();
  return r !== e && !At(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const hd = Array.prototype;
function Bt(e, t, n, r, o, s) {
  const a = Ks(e), i = a !== e && !At(e), l = a[t];
  if (l !== hd[t]) {
    const f = l.apply(e, s);
    return i ? xt(f) : f;
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
function oi(e, t, n, r) {
  const o = Ks(e);
  let s = n;
  return o !== e && (At(e) ? n.length > 3 && (s = function(a, i, l) {
    return n.call(this, a, i, l, e);
  }) : s = function(a, i, l) {
    return n.call(this, a, un(e, i), l, e);
  }), o[t](s, ...r);
}
function _o(e, t, n) {
  const r = Le(e);
  ut(r, "iterate", Pr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Gs(n[0]) ? (n[0] = Le(n[0]), r[t](...n)) : o;
}
function pr(e, t, n = []) {
  Qt(), _a();
  const r = Le(e)[t].apply(e, n);
  return ba(), Zt(), r;
}
const pd = /* @__PURE__ */ da("__proto__,__v_isRef,__isVue"), Ec = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nn)
);
function gd(e) {
  nn(e) || (e = String(e));
  const t = Le(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class wc {
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
      return r === (o ? s ? Od : Oc : s ? Tc : Ac).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      je(t) ? t : r
    );
    if ((nn(n) ? Ec.has(n) : pd(n)) || (o || ut(t, "get", n), s))
      return i;
    if (je(i)) {
      const l = a && js(n) ? i : i.value;
      return o && Fe(l) ? Nr(l) : l;
    }
    return Fe(i) ? o ? Nr(i) : zs(i) : i;
  }
}
class Sc extends wc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const a = he(t) && js(n);
    if (!this._isShallow) {
      const u = en(s);
      if (!At(r) && !en(r) && (s = Le(s), r = Le(r)), !a && je(s) && !je(r))
        return u || (s.value = r), !0;
    }
    const i = a ? Number(n) < t.length : xe(t, n), l = Reflect.set(
      t,
      n,
      r,
      je(t) ? t : o
    );
    return t === Le(o) && (i ? pn(r, s) && qt(t, "set", n, r) : qt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = xe(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && qt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!nn(n) || !Ec.has(n)) && ut(t, "has", n), r;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      he(t) ? "length" : Nn
    ), Reflect.ownKeys(t);
  }
}
class _d extends wc {
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
const bd = /* @__PURE__ */ new Sc(), yd = /* @__PURE__ */ new _d(), vd = /* @__PURE__ */ new Sc(!0);
const Uo = (e) => e, ns = (e) => Reflect.getPrototypeOf(e);
function Ed(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Le(o), a = Yn(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? Uo : t ? tr : xt;
    return !t && ut(
      s,
      "iterate",
      l ? Fo : Nn
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
function wd(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      e || (pn(o, i) && ut(a, "get", o), ut(a, "get", i));
      const { has: l } = ns(a), u = t ? Uo : e ? tr : xt;
      if (l.call(a, o))
        return u(s.get(o));
      if (l.call(a, i))
        return u(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Le(o), "iterate", Nn), o.size;
    },
    has(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      return e || (pn(o, i) && ut(a, "has", o), ut(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = Le(i), u = t ? Uo : e ? tr : xt;
      return !e && ut(l, "iterate", Nn), i.forEach((c, f) => o.call(s, u(c), u(f), a));
    }
  };
  return nt(
    n,
    e ? {
      add: rs("add"),
      set: rs("set"),
      delete: rs("delete"),
      clear: rs("clear")
    } : {
      add(o) {
        !t && !At(o) && !en(o) && (o = Le(o));
        const s = Le(this);
        return ns(s).has.call(s, o) || (s.add(o), qt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !At(s) && !en(s) && (s = Le(s));
        const a = Le(this), { has: i, get: l } = ns(a);
        let u = i.call(a, o);
        u || (o = Le(o), u = i.call(a, o));
        const c = l.call(a, o);
        return a.set(o, s), u ? pn(s, c) && qt(a, "set", o, s) : qt(a, "add", o, s), this;
      },
      delete(o) {
        const s = Le(this), { has: a, get: i } = ns(s);
        let l = a.call(s, o);
        l || (o = Le(o), l = a.call(s, o)), i && i.call(s, o);
        const u = s.delete(o);
        return l && qt(s, "delete", o, void 0), u;
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
    n[o] = Ed(o, e, t);
  }), n;
}
function Ea(e, t) {
  const n = wd(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    xe(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Sd = {
  get: /* @__PURE__ */ Ea(!1, !1)
}, Ad = {
  get: /* @__PURE__ */ Ea(!1, !0)
}, Td = {
  get: /* @__PURE__ */ Ea(!0, !1)
};
const Ac = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), Od = /* @__PURE__ */ new WeakMap();
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
function zs(e) {
  return en(e) ? e : wa(
    e,
    !1,
    bd,
    Sd,
    Ac
  );
}
function Ld(e) {
  return wa(
    e,
    !1,
    vd,
    Ad,
    Tc
  );
}
function Nr(e) {
  return wa(
    e,
    !0,
    yd,
    Td,
    Oc
  );
}
function wa(e, t, n, r, o) {
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
function At(e) {
  return !!(e && e.__v_isShallow);
}
function Gs(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function Sa(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && ac(e, "__v_skip", !0), e;
}
const xt = (e) => Fe(e) ? zs(e) : e, tr = (e) => Fe(e) ? Nr(e) : e;
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function J(e) {
  return Rc(e, !1);
}
function Cc(e) {
  return Rc(e, !0);
}
function Rc(e, t) {
  return je(e) ? e : new Id(e, t);
}
class Id {
  constructor(t, n) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Le(t), this._value = n ? t : xt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || At(t) || en(t);
    t = r ? t : Le(t), pn(t, n) && (this._rawValue = t, this._value = r ? t : xt(t), this.dep.trigger());
  }
}
function le(e) {
  return je(e) ? e.value : e;
}
const kd = {
  get: (e, t, n) => t === "__v_raw" ? e : le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return je(o) && !je(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lc(e) {
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
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Le(t);
    let o = !0, s = t;
    if (!he(t) || !js(String(n)))
      do
        o = !Gs(s) || At(s);
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
    return dd(this._raw, this._key);
  }
}
function Nd(e, t, n) {
  return new Pd(e, t, n);
}
class Md {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return pc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return bc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Dd(e, t, n = !1) {
  let r, o;
  return ve(e) ? r = e : (r = e.get, o = e.set), new Md(r, o, n);
}
const ss = {}, As = /* @__PURE__ */ new WeakMap();
let In;
function Fd(e, t = !1, n = In) {
  if (n) {
    let r = As.get(n);
    r || As.set(n, r = []), r.push(e);
  }
}
function Ud(e, t, n = Ne) {
  const { immediate: r, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = n, u = (E) => o ? E : At(E) || o === !1 || o === 0 ? Yt(E, 1) : Yt(E);
  let c, f, h, p, w = !1, S = !1;
  if (je(e) ? (f = () => e.value, w = At(e)) : Jt(e) ? (f = () => u(e), w = !0) : he(e) ? (S = !0, w = e.some((E) => Jt(E) || At(E)), f = () => e.map((E) => {
    if (je(E))
      return E.value;
    if (Jt(E))
      return u(E);
    if (ve(E))
      return l ? l(E, 2) : E();
  })) : ve(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Qt();
      try {
        h();
      } finally {
        Zt();
      }
    }
    const E = In;
    In = c;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      In = E;
    }
  } : f = Ht, t && o) {
    const E = f, I = o === !0 ? 1 / 0 : o;
    f = () => Yt(E(), I);
  }
  const T = fc(), v = () => {
    c.stop(), T && T.active && ha(T.effects, c);
  };
  if (s && t) {
    const E = t;
    t = (...I) => {
      E(...I), v();
    };
  }
  let x = S ? new Array(e.length).fill(ss) : ss;
  const y = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const I = c.run();
        if (o || w || (S ? I.some((C, D) => pn(C, x[D])) : pn(I, x))) {
          h && h();
          const C = In;
          In = c;
          try {
            const D = [
              I,
              // pass undefined as the old value when it's changed for the first time
              x === ss ? void 0 : S && x[0] === ss ? [] : x,
              p
            ];
            x = I, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            In = C;
          }
        }
      } else
        c.run();
  };
  return i && i(y), c = new mc(f), c.scheduler = a ? () => a(y, !1) : y, p = (E) => Fd(E, !1, c), h = c.onStop = () => {
    const E = As.get(c);
    if (E) {
      if (l)
        l(E, 4);
      else
        for (const I of E) I();
      As.delete(c);
    }
  }, t ? r ? y(!0) : x = c.run() : a ? a(y.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, je(e))
    Yt(e.value, t, n);
  else if (he(e))
    for (let r = 0; r < e.length; r++)
      Yt(e[r], t, n);
  else if (tc(e) || Yn(e))
    e.forEach((r) => {
      Yt(r, t, n);
    });
  else if (sc(e)) {
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
function zr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    qs(o, t, n);
  }
}
function Pt(e, t, n, r) {
  if (ve(e)) {
    const o = zr(e, t, n, r);
    return o && nc(o) && o.catch((s) => {
      qs(s, t, n);
    }), o;
  }
  if (he(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Pt(e[s], t, n, r));
    return o;
  }
}
function qs(e, t, n, r = !0) {
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
      Qt(), zr(s, null, 10, [
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
const _t = [];
let Ft = -1;
const Xn = [];
let fn = null, Wn = 0;
const Ic = /* @__PURE__ */ Promise.resolve();
let Ts = null;
function Jn(e) {
  const t = Ts || Ic;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hd(e) {
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
    !(e.flags & 2) && t >= Mr(n) ? _t.push(e) : _t.splice(Hd(t), 0, e), e.flags |= 1, kc();
  }
}
function kc() {
  Ts || (Ts = Ic.then(Pc));
}
function Vd(e) {
  he(e) ? Xn.push(...e) : fn && e.id === -1 ? fn.splice(Wn + 1, 0, e) : e.flags & 1 || (Xn.push(e), e.flags |= 1), kc();
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
function xc(e) {
  if (Xn.length) {
    const t = [...new Set(Xn)].sort(
      (n, r) => Mr(n) - Mr(r)
    );
    if (Xn.length = 0, fn) {
      fn.push(...t);
      return;
    }
    for (fn = t, Wn = 0; Wn < fn.length; Wn++) {
      const n = fn[Wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    fn = null, Wn = 0;
  }
}
const Mr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pc(e) {
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
    Ft = -1, _t.length = 0, xc(), Ts = null, (_t.length || Xn.length) && Pc();
  }
}
let dt = null, Nc = null;
function Os(e) {
  const t = dt;
  return dt = e, Nc = e && e.type.__scopeId || null, t;
}
function nr(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Is(-1);
    const s = Os(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Os(s), r._d && Is(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function $o(e, t) {
  if (dt === null)
    return e;
  const n = Qs(dt), r = e.dirs || (e.dirs = []);
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
    l && (Qt(), Pt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Zt());
  }
}
function jd(e, t) {
  if (bt) {
    let n = bt.provides;
    const r = bt.parent && bt.parent.provides;
    r === n && (n = bt.provides = Object.create(r)), n[e] = t;
  }
}
function Qn(e, t, n = !1) {
  const r = tn();
  if (r || Mn) {
    let o = Mn ? Mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(r && r.proxy) : t;
  }
}
function Bd() {
  return !!(tn() || Mn);
}
const Wd = /* @__PURE__ */ Symbol.for("v-scx"), Kd = () => Qn(Wd);
function yt(e, t, n) {
  return Mc(e, t, n);
}
function Mc(e, t, n = Ne) {
  const { immediate: r, deep: o, flush: s, once: a } = n, i = nt({}, n), l = t && r || !t && s !== "post";
  let u;
  if ($r) {
    if (s === "sync") {
      const p = Kd();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Ht, p.resume = Ht, p.pause = Ht, p;
    }
  }
  const c = bt;
  i.call = (p, w, S) => Pt(p, c, w, S);
  let f = !1;
  s === "post" ? i.scheduler = (p) => {
    gt(p, c && c.suspense);
  } : s !== "sync" && (f = !0, i.scheduler = (p, w) => {
    w ? p() : Aa(p);
  }), i.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const h = Ud(e, t, i);
  return $r && (u ? u.push(h) : l && h()), h;
}
function zd(e, t, n) {
  const r = this.proxy, o = qe(e) ? e.includes(".") ? Dc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ve(t) ? s = t : (s = t.handler, n = t);
  const a = Yr(this), i = Mc(o, s.bind(r), n);
  return a(), i;
}
function Dc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Fc = /* @__PURE__ */ Symbol("_vte"), Uc = (e) => e.__isTeleport, Ar = (e) => e && (e.disabled || e.disabled === ""), ii = (e) => e && (e.defer || e.defer === ""), li = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ci = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ho = (e, t) => {
  const n = e && e.to;
  return qe(n) ? t ? t(n) : null : n;
}, $c = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, i, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: h,
      o: { insert: p, querySelector: w, createText: S, createComment: T }
    } = u, v = Ar(t.props);
    let { shapeFlag: x, children: y, dynamicChildren: E } = t;
    if (e == null) {
      const I = t.el = S(""), C = t.anchor = S("");
      p(I, n, r), p(C, n, r);
      const D = (O, j) => {
        x & 16 && c(
          y,
          O,
          j,
          o,
          s,
          a,
          i,
          l
        );
      }, N = () => {
        const O = t.target = Ho(t.props, w), j = Hc(O, t, S, p);
        O && (a !== "svg" && li(O) ? a = "svg" : a !== "mathml" && ci(O) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), v || (D(O, j), gs(t, !1)));
      };
      v && (D(n, C), gs(t, !0)), ii(t.props) ? (t.el.__isMounted = !1, gt(() => {
        N(), delete t.el.__isMounted;
      }, s)) : N();
    } else {
      if (ii(t.props) && e.el.__isMounted === !1) {
        gt(() => {
          $c.process(
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
      const I = t.anchor = e.anchor, C = t.target = e.target, D = t.targetAnchor = e.targetAnchor, N = Ar(e.props), O = N ? n : C, j = N ? I : D;
      if (a === "svg" || li(C) ? a = "svg" : (a === "mathml" || ci(C)) && (a = "mathml"), E ? (h(
        e.dynamicChildren,
        E,
        O,
        o,
        s,
        a,
        i
      ), Ia(e, t, !0)) : l || f(
        e,
        t,
        O,
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
          I,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = t.target = Ho(
          t.props,
          w
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
        C,
        D,
        u,
        1
      );
      gs(t, v);
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
      for (let w = 0; w < i.length; w++) {
        const S = i[w];
        r(
          S,
          t,
          n,
          p,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: os,
  hydrate: Gd
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
function Gd(e, t, n, r, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: u, createText: c }
}, f) {
  function h(S, T, v, x) {
    T.anchor = f(
      a(S),
      T,
      i(S),
      n,
      r,
      o,
      s
    ), T.targetStart = v, T.targetAnchor = x;
  }
  const p = t.target = Ho(
    t.props,
    l
  ), w = Ar(t.props);
  if (p) {
    const S = p._lpa || p.firstChild;
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
        let T = S;
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
        t.targetAnchor || Hc(p, t, c, u), f(
          S && a(S),
          t,
          p,
          n,
          r,
          o,
          s
        );
      }
    gs(t, w);
  } else w && t.shapeFlag & 16 && h(e, t, e, a(e));
  return t.anchor && a(t.anchor);
}
const Ta = $c;
function gs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Hc(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Fc] = s, e && (r(o, e), r(s, e)), s;
}
const Gt = /* @__PURE__ */ Symbol("_leaveCb"), as = /* @__PURE__ */ Symbol("_enterCb");
function Vc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cr(() => {
    e.isMounted = !0;
  }), Ca(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ct = [Function, Array], jc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ct,
  onEnter: Ct,
  onAfterEnter: Ct,
  onEnterCancelled: Ct,
  // leave
  onBeforeLeave: Ct,
  onLeave: Ct,
  onAfterLeave: Ct,
  onLeaveCancelled: Ct,
  // appear
  onBeforeAppear: Ct,
  onAppear: Ct,
  onAfterAppear: Ct,
  onAppearCancelled: Ct
}, Bc = (e) => {
  const t = e.subTree;
  return t.component ? Bc(t.component) : t;
}, qd = {
  name: "BaseTransition",
  props: jc,
  setup(e, { slots: t }) {
    const n = tn(), r = Vc();
    return () => {
      const o = t.default && Oa(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Wc(o), a = Le(e), { mode: i } = a;
      if (r.isLeaving)
        return bo(s);
      const l = ui(s);
      if (!l)
        return bo(s);
      let u = Dr(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== ft && Fn(l, u);
      let c = n.subTree && ui(n.subTree);
      if (c && c.type !== ft && !kn(c, l) && Bc(n).type !== ft) {
        let f = Dr(
          c,
          a,
          r,
          n
        );
        if (Fn(c, f), i === "out-in" && l.type !== ft)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, bo(s);
        i === "in-out" && l.type !== ft ? f.delayLeave = (h, p, w) => {
          const S = Kc(
            r,
            c
          );
          S[String(c.key)] = c, h[Gt] = () => {
            p(), h[Gt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            w(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function Wc(e) {
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
const Yd = qd;
function Kc(e, t) {
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
    onAfterLeave: w,
    onLeaveCancelled: S,
    onBeforeAppear: T,
    onAppear: v,
    onAfterAppear: x,
    onAppearCancelled: y
  } = t, E = String(e.key), I = Kc(n, e), C = (O, j) => {
    O && Pt(
      O,
      r,
      9,
      j
    );
  }, D = (O, j) => {
    const te = j[1];
    C(O, j), he(O) ? O.every((U) => U.length <= 1) && te() : O.length <= 1 && te();
  }, N = {
    mode: a,
    persisted: i,
    beforeEnter(O) {
      let j = l;
      if (!n.isMounted)
        if (s)
          j = T || l;
        else
          return;
      O[Gt] && O[Gt](
        !0
        /* cancelled */
      );
      const te = I[E];
      te && kn(e, te) && te.el[Gt] && te.el[Gt](), C(j, [O]);
    },
    enter(O) {
      let j = u, te = c, U = f;
      if (!n.isMounted)
        if (s)
          j = v || u, te = x || c, U = y || f;
        else
          return;
      let X = !1;
      const ie = O[as] = (de) => {
        X || (X = !0, de ? C(U, [O]) : C(te, [O]), N.delayedLeave && N.delayedLeave(), O[as] = void 0);
      };
      j ? D(j, [O, ie]) : ie();
    },
    leave(O, j) {
      const te = String(e.key);
      if (O[as] && O[as](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      C(h, [O]);
      let U = !1;
      const X = O[Gt] = (ie) => {
        U || (U = !0, j(), ie ? C(S, [O]) : C(w, [O]), O[Gt] = void 0, I[te] === e && delete I[te]);
      };
      I[te] = e, p ? D(p, [O, X]) : X();
    },
    clone(O) {
      const j = Dr(
        O,
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
function bo(e) {
  if (Ys(e))
    return e = bn(e), e.children = null, e;
}
function ui(e) {
  if (!Ys(e))
    return Uc(e.type) && e.children ? Wc(e.children) : e;
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
function Oa(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === He ? (a.patchFlag & 128 && o++, r = r.concat(
      Oa(a.children, t, i)
    )) : (t || a.type !== ft) && r.push(i != null ? bn(a, { key: i }) : a);
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
    nt({ name: e.name }, t, { setup: e })
  ) : e;
}
function zc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Cs = /* @__PURE__ */ new WeakMap();
function Tr(e, t, n, r, o = !1) {
  if (he(e)) {
    e.forEach(
      (w, S) => Tr(
        w,
        t && (he(t) ? t[S] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Zn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Tr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Qs(r.component) : r.el, a = o ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === Ne ? i.refs = {} : i.refs, f = i.setupState, h = Le(f), p = f === Ne ? ec : (w) => xe(h, w);
  if (u != null && u !== l) {
    if (fi(t), qe(u))
      c[u] = null, p(u) && (f[u] = null);
    else if (je(u)) {
      u.value = null;
      const w = t;
      w.k && (c[w.k] = null);
    }
  }
  if (ve(l))
    zr(l, i, 12, [a, c]);
  else {
    const w = qe(l), S = je(l);
    if (w || S) {
      const T = () => {
        if (e.f) {
          const v = w ? p(l) ? f[l] : c[l] : l.value;
          if (o)
            he(v) && ha(v, s);
          else if (he(v))
            v.includes(s) || v.push(s);
          else if (w)
            c[l] = [s], p(l) && (f[l] = c[l]);
          else {
            const x = [s];
            l.value = x, e.k && (c[e.k] = x);
          }
        } else w ? (c[l] = a, p(l) && (f[l] = a)) : S && (l.value = a, e.k && (c[e.k] = a));
      };
      if (a) {
        const v = () => {
          T(), Cs.delete(e);
        };
        v.id = -1, Cs.set(e, v), gt(v, n);
      } else
        fi(e), T();
    }
  }
}
function fi(e) {
  const t = Cs.get(e);
  t && (t.flags |= 8, Cs.delete(e));
}
Ws().requestIdleCallback;
Ws().cancelIdleCallback;
const Zn = (e) => !!e.type.__asyncLoader, Ys = (e) => e.type.__isKeepAlive;
function Xd(e, t) {
  Gc(e, "a", t);
}
function Jd(e, t) {
  Gc(e, "da", t);
}
function Gc(e, t, n = bt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Xs(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ys(o.parent.vnode) && Qd(r, t, n, o), o = o.parent;
  }
}
function Qd(e, t, n, r) {
  const o = Xs(
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
function Xs(e, t, n = bt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Qt();
      const i = Yr(n), l = Pt(t, n, e, a);
      return i(), Zt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const sn = (e) => (t, n = bt) => {
  (!$r || e === "sp") && Xs(e, (...r) => t(...r), n);
}, qc = sn("bm"), cr = sn("m"), Zd = sn(
  "bu"
), Yc = sn("u"), Ca = sn(
  "bum"
), Gr = sn("um"), em = sn(
  "sp"
), tm = sn("rtg"), nm = sn("rtc");
function rm(e, t = bt) {
  Xs("ec", e, t);
}
const sm = /* @__PURE__ */ Symbol.for("v-ndc");
function dn(e, t, n, r) {
  let o;
  const s = n, a = he(e);
  if (a || qe(e)) {
    const i = a && Jt(e);
    let l = !1, u = !1;
    i && (l = !At(e), u = en(e), e = Ks(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? tr(xt(e[c])) : xt(e[c]) : e[c],
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
function Rs(e, t, n = {}, r, o) {
  if (dt.ce || dt.parent && Zn(dt.parent) && dt.parent.ce) {
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
  const a = s && Xc(s(n)), i = n.key || // slot content array of a dynamic conditional slot may have a branch
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
function Xc(e) {
  return e.some((t) => Ur(t) ? !(t.type === ft || t.type === He && !Xc(t.children)) : !0) ? e : null;
}
const Vo = (e) => e ? hu(e) ? Qs(e) : Vo(e.parent) : null, Or = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ nt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Qc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Aa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
    $watch: (e) => zd.bind(e)
  })
), yo = (e, t) => e !== Ne && !e.__isScriptSetup && xe(e, t), om = {
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
        if (yo(r, t))
          return a[t] = 1, r[t];
        if (o !== Ne && xe(o, t))
          return a[t] = 2, o[t];
        if (xe(s, t))
          return a[t] = 3, s[t];
        if (n !== Ne && xe(n, t))
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
    if (n !== Ne && xe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, xe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return yo(o, t) ? (o[t] = n, !0) : r !== Ne && xe(r, t) ? (r[t] = n, !0) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: a }
  }, i) {
    let l;
    return !!(n[i] || e !== Ne && i[0] !== "$" && xe(e, i) || yo(t, i) || xe(s, i) || xe(r, i) || xe(Or, i) || xe(o.config.globalProperties, i) || (l = a.__cssModules) && l[i]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function di(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let jo = !0;
function am(e) {
  const t = Qc(e), n = e.proxy, r = e.ctx;
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
    updated: w,
    activated: S,
    deactivated: T,
    beforeDestroy: v,
    beforeUnmount: x,
    destroyed: y,
    unmounted: E,
    render: I,
    renderTracked: C,
    renderTriggered: D,
    errorCaptured: N,
    serverPrefetch: O,
    // public API
    expose: j,
    inheritAttrs: te,
    // assets
    components: U,
    directives: X,
    filters: ie
  } = t;
  if (u && im(u, r, null), a)
    for (const V in a) {
      const Z = a[V];
      ve(Z) && (r[V] = Z.bind(n));
    }
  if (o) {
    const V = o.call(n, n);
    Fe(V) && (e.data = zs(V));
  }
  if (jo = !0, s)
    for (const V in s) {
      const Z = s[V], Ee = ve(Z) ? Z.bind(n, n) : ve(Z.get) ? Z.get.bind(n, n) : Ht, Re = !ve(Z) && ve(Z.set) ? Z.set.bind(n) : Ht, fe = _e({
        get: Ee,
        set: Re
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (we) => fe.value = we
      });
    }
  if (i)
    for (const V in i)
      Jc(i[V], r, n, V);
  if (l) {
    const V = ve(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((Z) => {
      jd(Z, V[Z]);
    });
  }
  c && mi(c, e, "c");
  function ae(V, Z) {
    he(Z) ? Z.forEach((Ee) => V(Ee.bind(n))) : Z && V(Z.bind(n));
  }
  if (ae(qc, f), ae(cr, h), ae(Zd, p), ae(Yc, w), ae(Xd, S), ae(Jd, T), ae(rm, N), ae(nm, C), ae(tm, D), ae(Ca, x), ae(Gr, E), ae(em, O), he(j))
    if (j.length) {
      const V = e.exposed || (e.exposed = {});
      j.forEach((Z) => {
        Object.defineProperty(V, Z, {
          get: () => n[Z],
          set: (Ee) => n[Z] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === Ht && (e.render = I), te != null && (e.inheritAttrs = te), U && (e.components = U), X && (e.directives = X), O && zc(e);
}
function im(e, t, n = Ht) {
  he(e) && (e = Bo(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Fe(o) ? "default" in o ? s = Qn(
      o.from || r,
      o.default,
      !0
    ) : s = Qn(o.from || r) : s = Qn(o), je(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[r] = s;
  }
}
function mi(e, t, n) {
  Pt(
    he(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Jc(e, t, n, r) {
  let o = r.includes(".") ? Dc(n, r) : () => n[r];
  if (qe(e)) {
    const s = t[e];
    ve(s) && yt(o, s);
  } else if (ve(e))
    yt(o, e.bind(n));
  else if (Fe(e))
    if (he(e))
      e.forEach((s) => Jc(s, t, n, r));
    else {
      const s = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(s) && yt(o, s, e);
    }
}
function Qc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => Ls(l, u, a, !0)
  ), Ls(l, t, a)), Fe(t) && s.set(t, l), l;
}
function Ls(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Ls(e, s, n, !0), o && o.forEach(
    (a) => Ls(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = lm[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const lm = {
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
  watch: um,
  // provide / inject
  provide: hi,
  inject: cm
};
function hi(e, t) {
  return t ? e ? function() {
    return nt(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cm(e, t) {
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
  return e ? nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pi(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : nt(
    /* @__PURE__ */ Object.create(null),
    di(e),
    di(t ?? {})
  ) : t;
}
function um(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = nt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ht(e[r], t[r]);
  return n;
}
function Zc() {
  return {
    app: null,
    config: {
      isNativeTag: ec,
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
    ve(r) || (r = nt({}, r)), o != null && !Fe(o) && (o = null);
    const s = Zc(), a = /* @__PURE__ */ new WeakSet(), i = [];
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
          const p = u._ceVNode || ye(r, o);
          return p.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(p, c, h), l = !0, u._container = c, c.__vue_app__ = u, Qs(p.component);
        }
      },
      onUnmount(c) {
        i.push(c);
      },
      unmount() {
        l && (Pt(
          i,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = Mn;
        Mn = u;
        try {
          return c();
        } finally {
          Mn = f;
        }
      }
    };
    return u;
  };
}
let Mn = null;
const mm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${vn(t)}Modifiers`];
function hm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ne;
  let o = n;
  const s = t.startsWith("update:"), a = s && mm(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => qe(c) ? c.trim() : c)), a.number && (o = n.map(pa)));
  let i, l = r[i = mo(t)] || // also try camelCase event handler (#2249)
  r[i = mo(_n(t))];
  !l && s && (l = r[i = mo(vn(t))]), l && Pt(
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
    e.emitted[i] = !0, Pt(
      u,
      e,
      6,
      o
    );
  }
}
const pm = /* @__PURE__ */ new WeakMap();
function eu(e, t, n = !1) {
  const r = n ? pm : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!ve(e)) {
    const l = (u) => {
      const c = eu(u, t, !0);
      c && (i = !0, nt(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (Fe(e) && r.set(e, null), null) : (he(s) ? s.forEach((l) => a[l] = null) : nt(a, s), Fe(e) && r.set(e, a), a);
}
function Js(e, t) {
  return !e || !Hs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, vn(t)) || xe(e, t));
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
    ctx: w,
    inheritAttrs: S
  } = e, T = Os(e);
  let v, x;
  try {
    if (n.shapeFlag & 4) {
      const E = o || r, I = E;
      v = Ut(
        u.call(
          I,
          E,
          c,
          f,
          p,
          h,
          w
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
      ), x = t.props ? i : gm(i);
    }
  } catch (E) {
    Cr.length = 0, qs(E, e, 1), v = ye(ft);
  }
  let y = v;
  if (x && S !== !1) {
    const E = Object.keys(x), { shapeFlag: I } = y;
    E.length && I & 7 && (s && E.some(ma) && (x = _m(
      x,
      s
    )), y = bn(y, x, !1, !0));
  }
  return n.dirs && (y = bn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Fn(y, n.transition), v = y, Os(T), v;
}
const gm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Hs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _m = (e, t) => {
  const n = {};
  for (const r in e)
    (!ma(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
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
      return r ? _i(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (a[h] !== r[h] && !Js(u, h))
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
    if (t[s] !== e[s] && !Js(n, s))
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
const tu = {}, nu = () => Object.create(tu), ru = (e) => Object.getPrototypeOf(e) === tu;
function vm(e, t, n, r = !1) {
  const o = {}, s = nu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), su(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Ld(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Em(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = Le(o), [l] = e.propsOptions;
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
        if (Js(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (l)
          if (xe(s, h))
            p !== s[h] && (s[h] = p, u = !0);
          else {
            const w = _n(h);
            o[w] = Wo(
              l,
              i,
              w,
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
    su(e, t, o, s) && (u = !0);
    let c;
    for (const f in i)
      (!t || // for camelCase
      !xe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = vn(f)) === f || !xe(t, c))) && (l ? n && // for camelCase
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
        (!t || !xe(t, f)) && (delete s[f], u = !0);
  }
  u && qt(e.attrs, "set", "");
}
function su(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (Er(l))
        continue;
      const u = t[l];
      let c;
      o && xe(o, c = _n(l)) ? !s || !s.includes(c) ? n[c] = u : (i || (i = {}))[c] = u : Js(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = Le(n), u = i || Ne;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Wo(
        o,
        l,
        f,
        u[f],
        e,
        !xe(u, f)
      );
    }
  }
  return a;
}
function Wo(e, t, n, r, o, s) {
  const a = e[n];
  if (a != null) {
    const i = xe(a, "default");
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
    ] && (r === "" || r === vn(n)) && (r = !0));
  }
  return r;
}
const wm = /* @__PURE__ */ new WeakMap();
function ou(e, t, n = !1) {
  const r = n ? wm : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!ve(e)) {
    const c = (f) => {
      l = !0;
      const [h, p] = ou(f, t, !0);
      nt(a, h), p && i.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return Fe(e) && r.set(e, qn), qn;
  if (he(s))
    for (let c = 0; c < s.length; c++) {
      const f = _n(s[c]);
      bi(f) && (a[f] = Ne);
    }
  else if (s)
    for (const c in s) {
      const f = _n(c);
      if (bi(f)) {
        const h = s[c], p = a[f] = he(h) || ve(h) ? { type: h } : nt({}, h), w = p.type;
        let S = !1, T = !0;
        if (he(w))
          for (let v = 0; v < w.length; ++v) {
            const x = w[v], y = ve(x) && x.name;
            if (y === "Boolean") {
              S = !0;
              break;
            } else y === "String" && (T = !1);
          }
        else
          S = ve(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = T, (S || xe(p, "default")) && i.push(f);
      }
    }
  const u = [a, i];
  return Fe(e) && r.set(e, u), u;
}
function bi(e) {
  return e[0] !== "$" && !Er(e);
}
const Ra = (e) => e === "_" || e === "_ctx" || e === "$stable", La = (e) => he(e) ? e.map(Ut) : [Ut(e)], Sm = (e, t, n) => {
  if (t._n)
    return t;
  const r = nr((...o) => La(t(...o)), n);
  return r._c = !1, r;
}, au = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Ra(o)) continue;
    const s = e[o];
    if (ve(s))
      t[o] = Sm(o, s, r);
    else if (s != null) {
      const a = La(s);
      t[o] = () => a;
    }
  }
}, iu = (e, t) => {
  const n = La(t);
  e.slots.default = () => n;
}, lu = (e, t, n) => {
  for (const r in t)
    (n || !Ra(r)) && (e[r] = t[r]);
}, Am = (e, t, n) => {
  const r = e.slots = nu();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (lu(r, t, n), n && ac(r, "_", o, !0)) : au(t, r);
  } else t && iu(e, t);
}, Tm = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, a = Ne;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : lu(o, t, n) : (s = !t.$stable, au(t, o)), a = t;
  } else t && (iu(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !Ra(i) && a[i] == null && delete o[i];
}, gt = Im;
function Om(e) {
  return Cm(e);
}
function Cm(e, t) {
  const n = Ws();
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
    insertStaticContent: w
  } = e, S = (g, _, b, P = null, L = null, M = null, Y = void 0, z = null, d = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !kn(g, _) && (P = W(g), we(g, L, M, !0), g = null), _.patchFlag === -2 && (d = !1, _.dynamicChildren = null);
    const { type: m, ref: R, shapeFlag: F } = _;
    switch (m) {
      case qr:
        T(g, _, b, P);
        break;
      case ft:
        v(g, _, b, P);
        break;
      case Eo:
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
          z,
          d
        );
        break;
      default:
        F & 1 ? I(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          z,
          d
        ) : F & 6 ? X(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          z,
          d
        ) : (F & 64 || F & 128) && m.process(
          g,
          _,
          b,
          P,
          L,
          M,
          Y,
          z,
          d,
          Ce
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
    [g.el, g.anchor] = w(
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
  }, I = (g, _, b, P, L, M, Y, z, d) => {
    if (_.type === "svg" ? Y = "svg" : _.type === "math" && (Y = "mathml"), g == null)
      C(
        _,
        b,
        P,
        L,
        M,
        Y,
        z,
        d
      );
    else {
      const m = g.el && g.el._isVueCE ? g.el : null;
      try {
        m && m._beginPatch(), O(
          g,
          _,
          L,
          M,
          Y,
          z,
          d
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, C = (g, _, b, P, L, M, Y, z) => {
    let d, m;
    const { props: R, shapeFlag: F, transition: ee, dirs: G } = g;
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
      vo(g, M),
      Y,
      z
    ), G && An(g, null, P, "created"), D(d, g, g.scopeId, Y, P), R) {
      for (const $ in R)
        $ !== "value" && !Er($) && s(d, $, null, R[$], M, P);
      "value" in R && s(d, "value", null, R.value, M), (m = R.onVnodeBeforeMount) && Mt(m, P, g);
    }
    G && An(g, null, P, "beforeMount");
    const k = Rm(L, ee);
    k && ee.beforeEnter(d), r(d, _, b), ((m = R && R.onVnodeMounted) || k || G) && gt(() => {
      m && Mt(m, P, g), k && ee.enter(d), G && An(g, null, P, "mounted");
    }, L);
  }, D = (g, _, b, P, L) => {
    if (b && p(g, b), P)
      for (let M = 0; M < P.length; M++)
        p(g, P[M]);
    if (L) {
      let M = L.subTree;
      if (_ === M || fu(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
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
  }, N = (g, _, b, P, L, M, Y, z, d = 0) => {
    for (let m = d; m < g.length; m++) {
      const R = g[m] = z ? mn(g[m]) : Ut(g[m]);
      S(
        null,
        R,
        _,
        b,
        P,
        L,
        M,
        Y,
        z
      );
    }
  }, O = (g, _, b, P, L, M, Y) => {
    const z = _.el = g.el;
    let { patchFlag: d, dynamicChildren: m, dirs: R } = _;
    d |= g.patchFlag & 16;
    const F = g.props || Ne, ee = _.props || Ne;
    let G;
    if (b && Tn(b, !1), (G = ee.onVnodeBeforeUpdate) && Mt(G, b, _, g), R && An(_, g, b, "beforeUpdate"), b && Tn(b, !0), (F.innerHTML && ee.innerHTML == null || F.textContent && ee.textContent == null) && c(z, ""), m ? j(
      g.dynamicChildren,
      m,
      z,
      b,
      P,
      vo(_, L),
      M
    ) : Y || Z(
      g,
      _,
      z,
      null,
      b,
      P,
      vo(_, L),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        te(z, F, ee, b, L);
      else if (d & 2 && F.class !== ee.class && s(z, "class", null, ee.class, L), d & 4 && s(z, "style", F.style, ee.style, L), d & 8) {
        const k = _.dynamicProps;
        for (let $ = 0; $ < k.length; $++) {
          const ce = k[$], Te = F[ce], $e = ee[ce];
          ($e !== Te || ce === "value") && s(z, ce, Te, $e, L, b);
        }
      }
      d & 1 && g.children !== _.children && c(z, _.children);
    } else !Y && m == null && te(z, F, ee, b, L);
    ((G = ee.onVnodeUpdated) || R) && gt(() => {
      G && Mt(G, b, _, g), R && An(_, g, b, "updated");
    }, P);
  }, j = (g, _, b, P, L, M, Y) => {
    for (let z = 0; z < _.length; z++) {
      const d = g[z], m = _[z], R = (
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
          b
        )
      );
      S(
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
      if (_ !== Ne)
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
        const Y = b[M], z = _[M];
        Y !== z && M !== "value" && s(g, M, z, Y, L, P);
      }
      "value" in b && s(g, "value", _.value, b.value, L);
    }
  }, U = (g, _, b, P, L, M, Y, z, d) => {
    const m = _.el = g ? g.el : i(""), R = _.anchor = g ? g.anchor : i("");
    let { patchFlag: F, dynamicChildren: ee, slotScopeIds: G } = _;
    G && (z = z ? z.concat(G) : G), g == null ? (r(m, b, P), r(R, b, P), N(
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
      z,
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
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || L && _ === L.subTree) && Ia(
      g,
      _,
      !0
      /* shallow */
    )) : Z(
      g,
      _,
      b,
      R,
      L,
      M,
      Y,
      z,
      d
    );
  }, X = (g, _, b, P, L, M, Y, z, d) => {
    _.slotScopeIds = z, g == null ? _.shapeFlag & 512 ? L.ctx.activate(
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
    const z = g.component = Fm(
      g,
      P,
      L
    );
    if (Ys(g) && (z.ctx.renderer = Ce), Um(z, !1, Y), z.asyncDep) {
      if (L && L.registerDep(z, ae, Y), !g.el) {
        const d = z.subTree = ye(ft);
        v(null, d, _, b), g.placeholder = d.el;
      }
    } else
      ae(
        z,
        g,
        _,
        b,
        L,
        M,
        Y
      );
  }, de = (g, _, b) => {
    const P = _.component = g.component;
    if (bm(g, _, b))
      if (P.asyncDep && !P.asyncResolved) {
        V(P, _, b);
        return;
      } else
        P.next = _, P.update();
    else
      _.el = g.el, P.vnode = _;
  }, ae = (g, _, b, P, L, M, Y) => {
    const z = () => {
      if (g.isMounted) {
        let { next: F, bu: ee, u: G, parent: k, vnode: $ } = g;
        {
          const Je = cu(g);
          if (Je) {
            F && (F.el = $.el, V(g, F, Y)), Je.asyncDep.then(() => {
              g.isUnmounted || z();
            });
            return;
          }
        }
        let ce = F, Te;
        Tn(g, !1), F ? (F.el = $.el, V(g, F, Y)) : F = $, ee && ps(ee), (Te = F.props && F.props.onVnodeBeforeUpdate) && Mt(Te, k, F, $), Tn(g, !0);
        const $e = gi(g), st = g.subTree;
        g.subTree = $e, S(
          st,
          $e,
          // parent may have changed if it's in a teleport
          f(st.el),
          // anchor may have changed if it's in a fragment
          W(st),
          g,
          L,
          M
        ), F.el = $e.el, ce === null && ym(g, $e.el), G && gt(G, L), (Te = F.props && F.props.onVnodeUpdated) && gt(
          () => Mt(Te, k, F, $),
          L
        );
      } else {
        let F;
        const { el: ee, props: G } = _, { bm: k, m: $, parent: ce, root: Te, type: $e } = g, st = Zn(_);
        Tn(g, !1), k && ps(k), !st && (F = G && G.onVnodeBeforeMount) && Mt(F, ce, _), Tn(g, !0);
        {
          Te.ce && // @ts-expect-error _def is private
          Te.ce._def.shadowRoot !== !1 && Te.ce._injectChildStyle($e);
          const Je = g.subTree = gi(g);
          S(
            null,
            Je,
            b,
            P,
            g,
            L,
            M
          ), _.el = Je.el;
        }
        if ($ && gt($, L), !st && (F = G && G.onVnodeMounted)) {
          const Je = _;
          gt(
            () => Mt(F, ce, Je),
            L
          );
        }
        (_.shapeFlag & 256 || ce && Zn(ce.vnode) && ce.vnode.shapeFlag & 256) && g.a && gt(g.a, L), g.isMounted = !0, _ = b = P = null;
      }
    };
    g.scope.on();
    const d = g.effect = new mc(z);
    g.scope.off();
    const m = g.update = d.run.bind(d), R = g.job = d.runIfDirty.bind(d);
    R.i = g, R.id = g.uid, d.scheduler = () => Aa(R), Tn(g, !0), m();
  }, V = (g, _, b) => {
    _.component = g;
    const P = g.vnode.props;
    g.vnode = _, g.next = null, Em(g, _.props, P, b), Tm(g, _.children, b), Qt(), ai(g), Zt();
  }, Z = (g, _, b, P, L, M, Y, z, d = !1) => {
    const m = g && g.children, R = g ? g.shapeFlag : 0, F = _.children, { patchFlag: ee, shapeFlag: G } = _;
    if (ee > 0) {
      if (ee & 128) {
        Re(
          m,
          F,
          b,
          P,
          L,
          M,
          Y,
          z,
          d
        );
        return;
      } else if (ee & 256) {
        Ee(
          m,
          F,
          b,
          P,
          L,
          M,
          Y,
          z,
          d
        );
        return;
      }
    }
    G & 8 ? (R & 16 && pe(m, L, M), F !== m && c(b, F)) : R & 16 ? G & 16 ? Re(
      m,
      F,
      b,
      P,
      L,
      M,
      Y,
      z,
      d
    ) : pe(m, L, M, !0) : (R & 8 && c(b, ""), G & 16 && N(
      F,
      b,
      P,
      L,
      M,
      Y,
      z,
      d
    ));
  }, Ee = (g, _, b, P, L, M, Y, z, d) => {
    g = g || qn, _ = _ || qn;
    const m = g.length, R = _.length, F = Math.min(m, R);
    let ee;
    for (ee = 0; ee < F; ee++) {
      const G = _[ee] = d ? mn(_[ee]) : Ut(_[ee]);
      S(
        g[ee],
        G,
        b,
        null,
        L,
        M,
        Y,
        z,
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
      z,
      d,
      F
    );
  }, Re = (g, _, b, P, L, M, Y, z, d) => {
    let m = 0;
    const R = _.length;
    let F = g.length - 1, ee = R - 1;
    for (; m <= F && m <= ee; ) {
      const G = g[m], k = _[m] = d ? mn(_[m]) : Ut(_[m]);
      if (kn(G, k))
        S(
          G,
          k,
          b,
          null,
          L,
          M,
          Y,
          z,
          d
        );
      else
        break;
      m++;
    }
    for (; m <= F && m <= ee; ) {
      const G = g[F], k = _[ee] = d ? mn(_[ee]) : Ut(_[ee]);
      if (kn(G, k))
        S(
          G,
          k,
          b,
          null,
          L,
          M,
          Y,
          z,
          d
        );
      else
        break;
      F--, ee--;
    }
    if (m > F) {
      if (m <= ee) {
        const G = ee + 1, k = G < R ? _[G].el : P;
        for (; m <= ee; )
          S(
            null,
            _[m] = d ? mn(_[m]) : Ut(_[m]),
            b,
            k,
            L,
            M,
            Y,
            z,
            d
          ), m++;
      }
    } else if (m > ee)
      for (; m <= F; )
        we(g[m], L, M, !0), m++;
    else {
      const G = m, k = m, $ = /* @__PURE__ */ new Map();
      for (m = k; m <= ee; m++) {
        const it = _[m] = d ? mn(_[m]) : Ut(_[m]);
        it.key != null && $.set(it.key, m);
      }
      let ce, Te = 0;
      const $e = ee - k + 1;
      let st = !1, Je = 0;
      const Tt = new Array($e);
      for (m = 0; m < $e; m++) Tt[m] = 0;
      for (m = G; m <= F; m++) {
        const it = g[m];
        if (Te >= $e) {
          we(it, L, M, !0);
          continue;
        }
        let Ot;
        if (it.key != null)
          Ot = $.get(it.key);
        else
          for (ce = k; ce <= ee; ce++)
            if (Tt[ce - k] === 0 && kn(it, _[ce])) {
              Ot = ce;
              break;
            }
        Ot === void 0 ? we(it, L, M, !0) : (Tt[Ot - k] = m + 1, Ot >= Je ? Je = Ot : st = !0, S(
          it,
          _[Ot],
          b,
          null,
          L,
          M,
          Y,
          z,
          d
        ), Te++);
      }
      const mr = st ? Lm(Tt) : qn;
      for (ce = mr.length - 1, m = $e - 1; m >= 0; m--) {
        const it = k + m, Ot = _[it], q = _[it + 1], B = it + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          q.el || uu(q)
        ) : P;
        Tt[m] === 0 ? S(
          null,
          Ot,
          b,
          B,
          L,
          M,
          Y,
          z,
          d
        ) : st && (ce < 0 || m !== mr[ce] ? fe(Ot, b, B, 2) : ce--);
      }
    }
  }, fe = (g, _, b, P, L = null) => {
    const { el: M, type: Y, transition: z, children: d, shapeFlag: m } = g;
    if (m & 6) {
      fe(g.component.subTree, _, b, P);
      return;
    }
    if (m & 128) {
      g.suspense.move(_, b, P);
      return;
    }
    if (m & 64) {
      Y.move(g, _, b, Ce);
      return;
    }
    if (Y === He) {
      r(M, _, b);
      for (let F = 0; F < d.length; F++)
        fe(d[F], _, b, P);
      r(g.anchor, _, b);
      return;
    }
    if (Y === Eo) {
      y(g, _, b);
      return;
    }
    if (P !== 2 && m & 1 && z)
      if (P === 0)
        z.beforeEnter(M), r(M, _, b), gt(() => z.enter(M), L);
      else {
        const { leave: F, delayLeave: ee, afterLeave: G } = z, k = () => {
          g.ctx.isUnmounted ? o(M) : r(M, _, b);
        }, $ = () => {
          M._isLeaving && M[Gt](
            !0
            /* cancelled */
          ), F(M, () => {
            k(), G && G();
          });
        };
        ee ? ee(M, k, $) : $();
      }
    else
      r(M, _, b);
  }, we = (g, _, b, P = !1, L = !1) => {
    const {
      type: M,
      props: Y,
      ref: z,
      children: d,
      dynamicChildren: m,
      shapeFlag: R,
      patchFlag: F,
      dirs: ee,
      cacheIndex: G
    } = g;
    if (F === -2 && (L = !1), z != null && (Qt(), Tr(z, null, b, g, !0), Zt()), G != null && (_.renderCache[G] = void 0), R & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const k = R & 1 && ee, $ = !Zn(g);
    let ce;
    if ($ && (ce = Y && Y.onVnodeBeforeUnmount) && Mt(ce, _, g), R & 6)
      We(g.component, b, P);
    else {
      if (R & 128) {
        g.suspense.unmount(b, P);
        return;
      }
      k && An(g, null, _, "beforeUnmount"), R & 64 ? g.type.remove(
        g,
        _,
        b,
        Ce,
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
      ) : (M === He && F & 384 || !L && R & 16) && pe(d, _, b), P && Ue(g);
    }
    ($ && (ce = Y && Y.onVnodeUnmounted) || k) && gt(() => {
      ce && Mt(ce, _, g), k && An(g, null, _, "unmounted");
    }, b);
  }, Ue = (g) => {
    const { type: _, el: b, anchor: P, transition: L } = g;
    if (_ === He) {
      Xe(b, P);
      return;
    }
    if (_ === Eo) {
      E(g);
      return;
    }
    const M = () => {
      o(b), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (g.shapeFlag & 1 && L && !L.persisted) {
      const { leave: Y, delayLeave: z } = L, d = () => Y(b, M);
      z ? z(g.el, M, d) : d();
    } else
      M();
  }, Xe = (g, _) => {
    let b;
    for (; g !== _; )
      b = h(g), o(g), g = b;
    o(_);
  }, We = (g, _, b) => {
    const { bum: P, scope: L, job: M, subTree: Y, um: z, m: d, a: m } = g;
    yi(d), yi(m), P && ps(P), L.stop(), M && (M.flags |= 8, we(Y, g, _, b)), z && gt(z, _), gt(() => {
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
    const _ = h(g.anchor || g.el), b = _ && _[Fc];
    return b ? h(b) : _;
  };
  let re = !1;
  const oe = (g, _, b) => {
    let P;
    g == null ? _._vnode && (we(_._vnode, null, null, !0), P = _._vnode.component) : S(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      b
    ), _._vnode = g, re || (re = !0, ai(P), xc(), re = !1);
  }, Ce = {
    p: S,
    um: we,
    m: fe,
    r: Ue,
    mt: ie,
    mc: N,
    pc: Z,
    pbc: j,
    n: W,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: dm(oe)
  };
}
function vo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Tn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ia(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (he(r) && he(o))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = mn(o[s]), i.el = a.el), !n && i.patchFlag !== -2 && Ia(a, i)), i.type === qr && (i.patchFlag !== -1 ? i.el = a.el : i.__elIndex = s + // take fragment start anchor into account
      (e.type === He ? 1 : 0)), i.type === ft && !i.el && (i.el = a.el);
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
function cu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : cu(t);
}
function yi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function uu(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? uu(t.subTree) : null;
}
const fu = (e) => e.__isSuspense;
function Im(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Vd(e);
}
const He = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), ft = /* @__PURE__ */ Symbol.for("v-cmt"), Eo = /* @__PURE__ */ Symbol.for("v-stc"), Cr = [];
let St = null;
function ge(e = !1) {
  Cr.push(St = e ? null : []);
}
function km() {
  Cr.pop(), St = Cr[Cr.length - 1] || null;
}
let Fr = 1;
function Is(e, t = !1) {
  Fr += e, e < 0 && St && t && (St.hasOnce = !0);
}
function du(e) {
  return e.dynamicChildren = Fr > 0 ? St || qn : null, km(), Fr > 0 && St && St.push(e), e;
}
function Ae(e, t, n, r, o, s) {
  return du(
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
  return du(
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
function kn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const mu = ({ key: e }) => e ?? null, _s = ({
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
    key: t && mu(t),
    ref: t && _s(t),
    scopeId: Nc,
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
const ye = xm;
function xm(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === sm) && (e = ft), Ur(e)) {
    const i = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ka(i, n), Fr > 0 && !s && St && (i.shapeFlag & 6 ? St[St.indexOf(e)] = i : St.push(i)), i.patchFlag = -2, i;
  }
  if (jm(e) && (e = e.__vccOpts), t) {
    t = Pm(t);
    let { class: i, style: l } = t;
    i && !qe(i) && (t.class = Ge(i)), Fe(l) && (Gs(l) && !he(l) && (l = nt({}, l)), t.style = lr(l));
  }
  const a = qe(e) ? 1 : fu(e) ? 128 : Uc(e) ? 64 : Fe(e) ? 4 : ve(e) ? 2 : 0;
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
  return e ? Gs(e) || ru(e) ? nt({}, e) : e : null;
}
function bn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, u = t ? Nm(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && mu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? he(s) ? s.concat(_s(t)) : [s, _s(t)] : _s(t)
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
    c,
    l.clone(c)
  ), c;
}
function Gn(e = " ", t = 0) {
  return ye(qr, null, e, t);
}
function et(e = "", t = !1) {
  return t ? (ge(), gn(ft, null, e)) : ye(ft, null, e);
}
function Ut(e) {
  return e == null || typeof e == "boolean" ? ye(ft) : he(e) ? ye(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ur(e) ? mn(e) : ye(qr, null, String(e));
}
function mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
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
      !o && !ru(t) ? t._ctx = dt : o === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: dt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Gn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ge([t.class, r.class]));
      else if (o === "style")
        t.style = lr([t.style, r.style]);
      else if (Hs(o)) {
        const s = t[o], a = r[o];
        a && s !== a && !(he(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Mt(e, t, n, r = null) {
  Pt(e, t, 7, [
    n,
    r
  ]);
}
const Mm = Zc();
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
    scope: new uc(
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
    propsOptions: ou(r, o),
    emitsOptions: eu(r, o),
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
let bt = null;
const tn = () => bt || dt;
let ks, Ko;
{
  const e = Ws(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  ks = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bt = n
  ), Ko = t(
    "__VUE_SSR_SETTERS__",
    (n) => $r = n
  );
}
const Yr = (e) => {
  const t = bt;
  return ks(e), e.scope.on(), () => {
    e.scope.off(), ks(t);
  };
}, vi = () => {
  bt && bt.scope.off(), ks(null);
};
function hu(e) {
  return e.vnode.shapeFlag & 4;
}
let $r = !1;
function Um(e, t = !1, n = !1) {
  t && Ko(t);
  const { props: r, children: o } = e.vnode, s = hu(e);
  vm(e, r, s, t), Am(e, o, n || t);
  const a = s ? $m(e, t) : void 0;
  return t && Ko(!1), a;
}
function $m(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, om);
  const { setup: r } = n;
  if (r) {
    Qt();
    const o = e.setupContext = r.length > 1 ? Vm(e) : null, s = Yr(e), a = zr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = nc(a);
    if (Zt(), s(), (i || e.sp) && !Zn(e) && zc(e), i) {
      if (a.then(vi, vi), t)
        return a.then((l) => {
          Ei(e, l);
        }).catch((l) => {
          qs(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ei(e, a);
  } else
    pu(e);
}
function Ei(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = Lc(t)), pu(e);
}
function pu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ht);
  {
    const o = Yr(e);
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
    return ut(e, "get", ""), e[t];
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
function Qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lc(Sa(e.exposed)), {
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
function jm(e) {
  return ve(e) && "__vccOpts" in e;
}
const _e = (e, t) => Dd(e, t, $r);
function Hr(e, t, n) {
  try {
    Is(-1);
    const r = arguments.length;
    return r === 2 ? Fe(t) && !he(t) ? Ur(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ur(n) && (n = [n]), ye(e, t, n));
  } finally {
    Is(1);
  }
}
const Bm = "3.5.26";
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
const gu = zo ? (e) => zo.createHTML(e) : (e) => e, Wm = "http://www.w3.org/2000/svg", Km = "http://www.w3.org/1998/Math/MathML", zt = typeof document < "u" ? document : null, Si = zt && /* @__PURE__ */ zt.createElement("template"), zm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? zt.createElementNS(Wm, e) : t === "mathml" ? zt.createElementNS(Km, e) : n ? zt.createElement(e, { is: n }) : zt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => zt.createTextNode(e),
  createComment: (e) => zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zt.querySelector(e),
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
      Si.innerHTML = gu(
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
}, on = "transition", gr = "animation", rr = /* @__PURE__ */ Symbol("_vtc"), _u = {
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
}, bu = /* @__PURE__ */ nt(
  {},
  jc,
  _u
), Gm = (e) => (e.displayName = "Transition", e.props = bu, e), yu = /* @__PURE__ */ Gm(
  (e, { slots: t }) => Hr(Yd, vu(e), t)
), On = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ai = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vu(e) {
  const t = {};
  for (const U in e)
    U in _u || (t[U] = e[U]);
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
  } = e, w = qm(o), S = w && w[0], T = w && w[1], {
    onBeforeEnter: v,
    onEnter: x,
    onEnterCancelled: y,
    onLeave: E,
    onLeaveCancelled: I,
    onBeforeAppear: C = v,
    onAppear: D = x,
    onAppearCancelled: N = y
  } = t, O = (U, X, ie, de) => {
    U._enterCancelled = de, ln(U, X ? c : i), ln(U, X ? u : a), ie && ie();
  }, j = (U, X) => {
    U._isLeaving = !1, ln(U, f), ln(U, p), ln(U, h), X && X();
  }, te = (U) => (X, ie) => {
    const de = U ? D : x, ae = () => O(X, U, ie);
    On(de, [X, ae]), Ti(() => {
      ln(X, U ? l : s), Dt(X, U ? c : i), Ai(de) || Oi(X, r, S, ae);
    });
  };
  return nt(t, {
    onBeforeEnter(U) {
      On(v, [U]), Dt(U, s), Dt(U, a);
    },
    onBeforeAppear(U) {
      On(C, [U]), Dt(U, l), Dt(U, u);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(U, X) {
      U._isLeaving = !0;
      const ie = () => j(U, X);
      Dt(U, f), U._enterCancelled ? (Dt(U, h), Go(U)) : (Go(U), Dt(U, h)), Ti(() => {
        U._isLeaving && (ln(U, f), Dt(U, p), Ai(E) || Oi(U, r, T, ie));
      }), On(E, [U, ie]);
    },
    onEnterCancelled(U) {
      O(U, !1, void 0, !0), On(y, [U]);
    },
    onAppearCancelled(U) {
      O(U, !0, void 0, !0), On(N, [U]);
    },
    onLeaveCancelled(U) {
      j(U), On(I, [U]);
    }
  });
}
function qm(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [wo(e.enter), wo(e.leave)];
  {
    const t = wo(e);
    return [t, t];
  }
}
function wo(e) {
  return rd(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[rr] || (e[rr] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[rr];
  n && (n.delete(t), n.size || (e[rr] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ym = 0;
function Oi(e, t, n, r) {
  const o = e._endId = ++Ym, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = Eu(e, t);
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
function Eu(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), o = r(`${on}Delay`), s = r(`${on}Duration`), a = Ci(o, s), i = r(`${gr}Delay`), l = r(`${gr}Duration`), u = Ci(i, l);
  let c = null, f = 0, h = 0;
  t === on ? a > 0 && (c = on, f = a, h = s.length) : t === gr ? u > 0 && (c = gr, f = u, h = l.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? on : gr : null, h = c ? c === on ? s.length : l.length : 0);
  const p = c === on && /\b(?:transform|all)(?:,|$)/.test(
    r(`${on}Property`).toString()
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
function Xm(e, t, n) {
  const r = e[rr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), Jm = /* @__PURE__ */ Symbol("_vsh"), Qm = /* @__PURE__ */ Symbol(""), Zm = /(?:^|;)\s*display\s*:/;
function eh(e, t, n) {
  const r = e.style, o = qe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (qe(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && bs(r, i, "");
        }
      else
        for (const a in t)
          n[a] == null && bs(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), bs(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[Qm];
      a && (n += ";" + a), r.cssText = n, s = Zm.test(n);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = s ? r.display : "", e[Jm] && (r.display = "none"));
}
const Ii = /\s*!important$/;
function bs(e, t, n) {
  if (he(n))
    n.forEach((r) => bs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = th(e, t);
    Ii.test(n) ? e.setProperty(
      vn(r),
      n.replace(Ii, ""),
      "important"
    ) : e[r] = n;
  }
}
const ki = ["Webkit", "Moz", "ms"], So = {};
function th(e, t) {
  const n = So[t];
  if (n)
    return n;
  let r = _n(t);
  if (r !== "filter" && r in e)
    return So[t] = r;
  r = oc(r);
  for (let o = 0; o < ki.length; o++) {
    const s = ki[o] + r;
    if (s in e)
      return So[t] = s;
  }
  return t;
}
const xi = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, o, s = cd(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xi, t.slice(6, t.length)) : e.setAttributeNS(xi, t, n) : n == null || s && !ic(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : nn(n) ? String(n) : n
  );
}
function Ni(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gu(n) : n);
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
    i === "boolean" ? n = ic(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
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
const Mi = /* @__PURE__ */ Symbol("_vei");
function rh(e, t, n, r, o = null) {
  const s = e[Mi] || (e[Mi] = {}), a = s[t];
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
const Di = /(?:Once|Passive|Capture)$/;
function sh(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Di); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vn(e.slice(2)), t];
}
let Ao = 0;
const oh = /* @__PURE__ */ Promise.resolve(), ah = () => Ao || (oh.then(() => Ao = 0), Ao = Date.now());
function ih(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Pt(
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
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ch = (e, t, n, r, o, s) => {
  const a = o === "svg";
  t === "class" ? Xm(e, r, a) : t === "style" ? eh(e, n, r) : Hs(t) ? ma(t) || rh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uh(e, t, r, a)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !qe(r)) ? Ni(e, _n(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, a));
};
function uh(e, t, n, r) {
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
const wu = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ Symbol("_moveCb"), Ui = /* @__PURE__ */ Symbol("_enterCb"), fh = (e) => (delete e.props.mode, e), dh = /* @__PURE__ */ fh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ nt({}, bu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = tn(), r = Vc();
    let o, s;
    return Yc(() => {
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
      Go(n.vnode.el), i.forEach((l) => {
        const u = l.el, c = u.style;
        Dt(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[xs] = (h) => {
          h && h.target !== u || (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[xs] = null, ln(u, a));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const a = Le(e), i = vu(a);
      let l = a.tag || He;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Fn(
            c,
            Dr(
              c,
              i,
              r,
              n
            )
          ), wu.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? Oa(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Fn(
          c,
          Dr(c, i, r, n)
        );
      }
      return ye(l, null, s);
    };
  }
}), mh = dh;
function hh(e) {
  const t = e.el;
  t[xs] && t[xs](), t[Ui] && t[Ui]();
}
function ph(e) {
  Su.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function gh(e) {
  const t = wu.get(e), n = Su.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function _h(e, t, n) {
  const r = e.cloneNode(), o = e[rr];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: a } = Eu(r);
  return s.removeChild(r), a;
}
const $i = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => ps(t, n) : t;
};
function bh(e) {
  e.target.composing = !0;
}
function Hi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const To = /* @__PURE__ */ Symbol("_assign");
function Vi(e, t, n) {
  return t && (e = e.trim()), n && (e = pa(e)), e;
}
const qo = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[To] = $i(o);
    const s = r || o.props && o.props.type === "number";
    Kn(e, t ? "change" : "input", (a) => {
      a.target.composing || e[To](Vi(e.value, n, s));
    }), (n || s) && Kn(e, "change", () => {
      e.value = Vi(e.value, n, s);
    }), t || (Kn(e, "compositionstart", bh), Kn(e, "compositionend", Hi), Kn(e, "change", Hi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, a) {
    if (e[To] = $i(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? pa(e.value) : e.value, l = t ?? "";
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
}, Ze = (e, t) => {
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
}, Rr = (e, t) => {
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
}, wh = /* @__PURE__ */ nt({ patchProp: ch }, zm);
let ji;
function Sh() {
  return ji || (ji = Om(wh));
}
const Ah = ((...e) => {
  const t = Sh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Oh(r);
    if (!o) return;
    const s = t._component;
    !ve(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, Th(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
});
function Th(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Oh(e) {
  return qe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Au;
const Zs = (e) => Au = e, Tu = (
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
function Ch() {
  const e = ga(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const o = Sa({
    install(s) {
      Zs(o), o._a = s, s.provide(Tu, o), s.config.globalProperties.$pinia = o, r.forEach((a) => n.push(a)), r = [];
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
const Ou = () => {
};
function Bi(e, t, n, r = Ou) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && fc() && dc(o), o;
}
function Vn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Rh = (e) => e(), Wi = Symbol(), Oo = Symbol();
function Xo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Yo(o) && Yo(r) && e.hasOwnProperty(n) && !je(r) && !Jt(r) ? e[n] = Xo(o, r) : e[n] = r;
  }
  return e;
}
const Lh = (
  /* istanbul ignore next */
  Symbol()
);
function Ih(e) {
  return !Yo(e) || !e.hasOwnProperty(Lh);
}
const { assign: cn } = Object;
function kh(e) {
  return !!(je(e) && e.effect);
}
function xh(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = o ? o() : {});
    const c = xd(n.state.value[e]);
    return cn(c, s, Object.keys(a || {}).reduce((f, h) => (f[h] = Sa(_e(() => {
      Zs(n);
      const p = n._s.get(e);
      return a[h].call(p, p);
    })), f), {}));
  }
  return l = Cu(e, u, t, n, r, !0), l;
}
function Cu(e, t, n = {}, r, o, s) {
  let a;
  const i = cn({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], h = [], p;
  const w = r.state.value[e];
  !s && !w && (r.state.value[e] = {}), J({});
  let S;
  function T(N) {
    let O;
    u = c = !1, typeof N == "function" ? (N(r.state.value[e]), O = {
      type: Lr.patchFunction,
      storeId: e,
      events: p
    }) : (Xo(r.state.value[e], N), O = {
      type: Lr.patchObject,
      payload: N,
      storeId: e,
      events: p
    });
    const j = S = Symbol();
    Jn().then(() => {
      S === j && (u = !0);
    }), c = !0, Vn(f, O, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: O } = n, j = O ? O() : {};
    this.$patch((te) => {
      cn(te, j);
    });
  } : (
    /* istanbul ignore next */
    Ou
  );
  function x() {
    a.stop(), f = [], h = [], r._s.delete(e);
  }
  const y = (N, O = "") => {
    if (Wi in N)
      return N[Oo] = O, N;
    const j = function() {
      Zs(r);
      const te = Array.from(arguments), U = [], X = [];
      function ie(V) {
        U.push(V);
      }
      function de(V) {
        X.push(V);
      }
      Vn(h, {
        args: te,
        name: j[Oo],
        store: I,
        after: ie,
        onError: de
      });
      let ae;
      try {
        ae = N.apply(this && this.$id === e ? this : I, te);
      } catch (V) {
        throw Vn(X, V), V;
      }
      return ae instanceof Promise ? ae.then((V) => (Vn(U, V), V)).catch((V) => (Vn(X, V), Promise.reject(V))) : (Vn(U, ae), ae);
    };
    return j[Wi] = !0, j[Oo] = O, j;
  }, E = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Bi.bind(null, h),
    $patch: T,
    $reset: v,
    $subscribe(N, O = {}) {
      const j = Bi(f, N, O.detached, () => te()), te = a.run(() => yt(() => r.state.value[e], (U) => {
        (O.flush === "sync" ? c : u) && N({
          storeId: e,
          type: Lr.direct,
          events: p
        }, U);
      }, cn({}, l, O)));
      return j;
    },
    $dispose: x
  }, I = zs(E);
  r._s.set(e, I);
  const D = (r._a && r._a.runWithContext || Rh)(() => r._e.run(() => (a = ga()).run(() => t({ action: y }))));
  for (const N in D) {
    const O = D[N];
    if (je(O) && !kh(O) || Jt(O))
      s || (w && Ih(O) && (je(O) ? O.value = w[N] : Xo(O, w[N])), r.state.value[e][N] = O);
    else if (typeof O == "function") {
      const j = y(O, N);
      D[N] = j, i.actions[N] = O;
    }
  }
  return cn(I, D), cn(Le(I), D), Object.defineProperty(I, "$state", {
    get: () => r.state.value[e],
    set: (N) => {
      T((O) => {
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
  }), w && s && n.hydrate && n.hydrate(I.$state, w), u = !0, c = !0, I;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xa(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function a(i, l) {
    const u = Bd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? Qn(Tu, null) : null), i && Zs(i), i = Au, i._s.has(r) || (s ? Cu(r, t, o, i) : xh(r, o, i)), i._s.get(r);
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
    return (s, a) => (ge(), Ae("svg", {
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
const Ps = typeof window < "u", En = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Dh = (e, t, n) => Fh({ l: e, k: t, s: n }), Fh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), Uh = (e) => Lu(e) === "[object Date]", yn = (e) => Lu(e) === "[object RegExp]", eo = (e) => be(e) && Object.keys(e).length === 0, at = Object.assign, $h = Object.create, Pe = (e = null) => $h(e);
let Ki;
const xn = () => Ki || (Ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Pe());
function zi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Gi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Hh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Gi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Gi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Vh = Object.prototype.hasOwnProperty;
function It(e, t) {
  return Vh.call(e, t);
}
const Ve = Array.isArray, De = (e) => typeof e == "function", se = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", ke = (e) => e !== null && typeof e == "object", jh = (e) => ke(e) && De(e.then) && De(e.catch), Ru = Object.prototype.toString, Lu = (e) => Ru.call(e), be = (e) => {
  if (!ke(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Bh = (e) => e == null ? "" : Ve(e) || be(e) && e.toString === Ru ? JSON.stringify(e, null, 2) : String(e);
function Wh(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function to(e) {
  let t = e;
  return () => ++t;
}
const is = (e) => !ke(e) || Ve(e);
function ys(e, t) {
  if (is(e) || is(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (ke(r[s]) && !ke(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : Pe()), is(o[s]) || is(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
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
function Ns(e, t, n) {
  return { start: e, end: t };
}
const zh = /\{([0-9a-zA-Z]+)\}/g;
function Iu(e, ...t) {
  return t.length === 1 && Gh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(zh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ku = Object.assign, qi = (e) => typeof e == "string", Gh = (e) => e !== null && typeof e == "object";
function xu(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Pa = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, qh = {
  [Pa.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Yh(e, t, ...n) {
  const r = Iu(qh[e], ...n || []), o = { message: String(r), code: e };
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
function ur(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, a = Iu((o || Xh)[e] || "", ...s || []), i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Jh(e) {
  throw e;
}
const Wt = " ", Qh = "\r", pt = `
`, Zh = "\u2028", ep = "\u2029";
function tp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const a = (D) => t[D] === Qh && t[D + 1] === pt, i = (D) => t[D] === pt, l = (D) => t[D] === ep, u = (D) => t[D] === Zh, c = (D) => a(D) || i(D) || l(D) || u(D), f = () => n, h = () => r, p = () => o, w = () => s, S = (D) => a(D) || l(D) || u(D) ? pt : t[D], T = () => S(n), v = () => S(n + s);
  function x() {
    return s = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function y() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function I(D = 0) {
    s = D;
  }
  function C() {
    const D = n + s;
    for (; D !== n; )
      x();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: p,
    peekOffset: w,
    charAt: S,
    currentChar: T,
    currentPeek: v,
    next: x,
    peek: y,
    reset: E,
    resetPeek: I,
    skipToPeek: C
  };
}
const an = void 0, np = ".", Yi = "'", rp = "tokenizer";
function sp(e, t = {}) {
  const n = t.location !== !1, r = tp(e), o = () => r.index(), s = () => Kh(r.line(), r.column(), r.index()), a = s(), i = o(), l = {
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
      const G = n ? Ns(ee.startLoc, m) : null, k = ur(d, G, {
        domain: rp,
        args: F
      });
      c(k);
    }
  }
  function h(d, m, R) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return n && (F.loc = Ns(d.startLoc, d.endLoc)), R != null && (F.value = R), F;
  }
  const p = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function w(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (f(me.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function S(d) {
    let m = "";
    for (; d.currentPeek() === Wt || d.currentPeek() === pt; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function T(d) {
    const m = S(d);
    return d.skipToPeek(), m;
  }
  function v(d) {
    if (d === an)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function x(d) {
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
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function E(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), ee = x(F);
    return d.resetPeek(), ee;
  }
  function I(d, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === Yi;
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
    const F = v(d.currentPeek());
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
      const G = d.currentPeek();
      return G === "{" ? v(d.peek()) : G === "@" || G === "%" || G === "|" || G === ":" || G === "." || G === Wt || !G ? !1 : G === pt ? (d.peek(), F()) : U(d, !1);
    }, ee = F();
    return d.resetPeek(), ee;
  }
  function j(d) {
    S(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function te(d) {
    const m = S(d), R = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: R,
      hasSpace: m.length > 0
    };
  }
  function U(d, m = !0) {
    const R = (ee = !1, G = "", k = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? G === "%" ? !1 : ee : $ === "@" || !$ ? G === "%" ? !0 : ee : $ === "%" ? (d.peek(), R(ee, "%", !0)) : $ === "|" ? G === "%" || k ? !0 : !(G === Wt || G === pt) : $ === Wt ? (d.peek(), R(!0, Wt, k)) : $ === pt ? (d.peek(), R(!0, pt, k)) : !0;
    }, F = R();
    return m && d.resetPeek(), F;
  }
  function X(d, m) {
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
    return X(d, ie);
  }
  function ae(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function V(d) {
    return X(d, ae);
  }
  function Z(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Ee(d) {
    return X(d, Z);
  }
  function Re(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function fe(d) {
    return X(d, Re);
  }
  function we(d) {
    let m = "", R = "";
    for (; m = Ee(d); )
      R += m;
    return R;
  }
  function Ue(d) {
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
      else if (R === Wt || R === pt)
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
    for (; m = V(d); )
      R += m;
    return d.currentChar() === an && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R;
  }
  function pe(d) {
    T(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${we(d)}`) : m += we(d), d.currentChar() === an && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function W(d) {
    return d !== Yi && d !== pt;
  }
  function re(d) {
    T(d), w(d, "'");
    let m = "", R = "";
    for (; m = X(d, W); )
      m === "\\" ? R += oe(d) : R += m;
    const F = d.currentChar();
    return F === pt || F === an ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === pt && (d.next(), w(d, "'")), R) : (w(d, "'"), R);
  }
  function oe(d) {
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
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Ce(d, m, R) {
    w(d, m);
    let F = "";
    for (let ee = 0; ee < R; ee++) {
      const G = fe(d);
      if (!G) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += G;
    }
    return `\\${m}${F}`;
  }
  function Ke(d) {
    return d !== "{" && d !== "}" && d !== Wt && d !== pt;
  }
  function g(d) {
    T(d);
    let m = "", R = "";
    for (; m = X(d, Ke); )
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
  function P(d) {
    T(d);
    const m = w(
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
        let ee = !0, G = !0, k = !0;
        if (j(d))
          return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), R = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, Y(d, m);
        if (ee = y(d, m))
          return R = h(m, 5, We(d)), T(d), R;
        if (G = E(d, m))
          return R = h(m, 6, pe(d)), T(d), R;
        if (k = I(d, m))
          return R = h(m, 7, re(d)), T(d), R;
        if (!ee && !G && !k)
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
    switch ((R === 8 || R === 9 || R === 12 || R === 10) && (ee === pt || ee === Wt) && f(me.INVALID_LINKED_FORMAT, s(), 0), ee) {
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
        return j(d) ? (F = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, F) : C(d, m) || N(d, m) ? (T(d), M(d, m)) : D(d, m) ? (T(d), h(m, 12, _(d))) : O(d, m) ? (T(d), ee === "{" ? L(d, m) || F : h(m, 11, b(d))) : (R === 8 && f(me.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, Y(d, m));
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
        const { isModulo: ee, hasSpace: G } = te(d);
        if (ee)
          return G ? h(m, 0, Xe(d)) : h(m, 4, Ue(d));
        if (U(d))
          return h(m, 0, Xe(d));
        break;
      }
    }
    return R;
  }
  function z() {
    const { currentType: d, offset: m, startLoc: R, endLoc: F } = l;
    return l.lastType = d, l.lastOffset = m, l.lastStartLoc = R, l.lastEndLoc = F, l.offset = o(), l.startLoc = s(), r.currentChar() === an ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : Y(r, l);
  }
  return {
    nextToken: z,
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
  function o(y, E, I, C, ...D) {
    const N = y.currentPosition();
    if (N.offset += C, N.column += C, n) {
      const O = t ? Ns(I, N) : null, j = ur(E, O, {
        domain: op,
        args: D
      });
      n(j);
    }
  }
  function s(y, E, I, C, ...D) {
    const N = y.currentPosition();
    if (N.offset += C, N.column += C, r) {
      const O = t ? Ns(I, N) : null;
      r(Yh(E, O, D));
    }
  }
  function a(y, E, I) {
    const C = { type: y };
    return t && (C.start = E, C.end = E, C.loc = { start: I, end: I }), C;
  }
  function i(y, E, I, C) {
    t && (y.end = E, y.loc && (y.loc.end = I));
  }
  function l(y, E) {
    const I = y.context(), C = a(3, I.offset, I.startLoc);
    return C.value = E, i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function u(y, E) {
    const I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(5, C, D);
    return N.index = parseInt(E, 10), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function c(y, E, I) {
    const C = y.context(), { lastOffset: D, lastStartLoc: N } = C, O = a(4, D, N);
    return O.key = E, I === !0 && (O.modulo = !0), y.nextToken(), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function f(y, E) {
    const I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(9, C, D);
    return N.value = E.replace(ap, ip), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const E = y.nextToken(), I = y.context(), { lastOffset: C, lastStartLoc: D } = I, N = a(8, C, D);
    return E.type !== 12 ? (o(y, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), N.value = "", i(N, C, D), {
      nextConsumeToken: E,
      node: N
    }) : (E.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Lt(E)), N.value = E.value || "", i(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function p(y, E) {
    const I = y.context(), C = a(7, I.offset, I.startLoc);
    return C.value = E, i(C, y.currentOffset(), y.currentPosition()), C;
  }
  function w(y) {
    const E = y.context(), I = a(6, E.offset, E.startLoc);
    let C = y.nextToken();
    if (C.type === 9) {
      const D = h(y);
      I.modifier = D.node, C = D.nextConsumeToken || y.nextToken();
    }
    switch (C.type !== 10 && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(C)), C = y.nextToken(), C.type === 2 && (C = y.nextToken()), C.type) {
      case 11:
        C.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(C)), I.key = p(y, C.value || "");
        break;
      case 5:
        C.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(C)), I.key = c(y, C.value || "");
        break;
      case 6:
        C.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(C)), I.key = u(y, C.value || "");
        break;
      case 7:
        C.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(C)), I.key = f(y, C.value || "");
        break;
      default: {
        o(y, me.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
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
    const E = y.context(), I = E.currentType === 1 ? y.currentOffset() : E.offset, C = E.currentType === 1 ? E.endLoc : E.startLoc, D = a(2, I, C);
    D.items = [];
    let N = null, O = null;
    do {
      const U = N || y.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(U)), D.items.push(l(y, U.value || ""));
          break;
        case 6:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(U)), D.items.push(u(y, U.value || ""));
          break;
        case 4:
          O = !0;
          break;
        case 5:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(U)), D.items.push(c(y, U.value || "", !!O)), O && (s(y, Pa.USE_MODULO_SYNTAX, E.lastStartLoc, 0, Lt(U)), O = null);
          break;
        case 7:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Lt(U)), D.items.push(f(y, U.value || ""));
          break;
        case 8: {
          const X = w(y);
          D.items.push(X.node), N = X.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    const j = E.currentType === 1 ? E.lastOffset : y.currentOffset(), te = E.currentType === 1 ? E.lastEndLoc : y.currentPosition();
    return i(D, j, te), D;
  }
  function T(y, E, I, C) {
    const D = y.context();
    let N = C.items.length === 0;
    const O = a(1, E, I);
    O.cases = [], O.cases.push(C);
    do {
      const j = S(y);
      N || (N = j.items.length === 0), O.cases.push(j);
    } while (D.currentType !== 14);
    return N && o(y, me.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function v(y) {
    const E = y.context(), { offset: I, startLoc: C } = E, D = S(y);
    return E.currentType === 14 ? D : T(y, I, C, D);
  }
  function x(y) {
    const E = sp(y, ku({}, e)), I = E.context(), C = a(0, I.offset, I.startLoc);
    return t && C.loc && (C.loc.source = y), C.body = v(E), e.onCacheKey && (C.cacheKey = e.onCacheKey(y)), I.currentType !== 14 && o(E, me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, y[I.offset] || ""), i(C, E.currentOffset(), E.currentPosition()), C;
  }
  return { parse: x };
}
function Lt(e) {
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
function up(e, t = {}) {
  const n = cp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Na(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function fp(e) {
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
      e.static = xu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const dp = "minifier";
function zn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      zn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        zn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        zn(n[r]);
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
      zn(t.key), t.k = t.key, delete t.key, t.modifier && (zn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw ur(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
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
  function l(S, T) {
    a.code += S;
  }
  function u(S, T = !0) {
    const v = T ? r : "";
    l(o ? v + "  ".repeat(S) : v);
  }
  function c(S = !0) {
    const T = ++a.indentLevel;
    S && u(T);
  }
  function f(S = !0) {
    const T = --a.indentLevel;
    S && u(T);
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
    helper: (S) => `_${S}`,
    needIndent: () => a.needIndent
  };
}
function pp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), sr(e, t.key), t.modifier ? (e.push(", "), sr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function gp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (sr(e, t.items[s]), s !== o - 1); s++)
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
    for (let s = 0; s < o && (sr(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function bp(e, t) {
  t.body ? sr(e, t.body) : e.push("null");
}
function sr(e, t) {
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
      throw ur(me.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: mp,
        args: [t.type]
      });
  }
}
const yp = (e, t = {}) => {
  const n = qi(t.mode) ? t.mode : "normal", r = qi(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = hp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${xu(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), sr(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function vp(e, t = {}) {
  const n = ku({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = lp(n).parse(e);
  return r ? (s && fp(i), o && zn(i), { ast: i, code: "" }) : (up(i, n), yp(i, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ep() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Vt(e) {
  return ke(e) && Ma(e) === 0 && (It(e, "b") || It(e, "body"));
}
const Pu = ["b", "body"];
function wp(e) {
  return wn(e, Pu);
}
const Nu = ["c", "cases"];
function Sp(e) {
  return wn(e, Nu, []);
}
const Mu = ["s", "static"];
function Ap(e) {
  return wn(e, Mu);
}
const Du = ["i", "items"];
function Tp(e) {
  return wn(e, Du, []);
}
const Fu = ["t", "type"];
function Ma(e) {
  return wn(e, Fu);
}
const Uu = ["v", "value"];
function ls(e, t) {
  const n = wn(e, Uu);
  if (n != null)
    return n;
  throw Vr(t);
}
const $u = ["m", "modifier"];
function Op(e) {
  return wn(e, $u);
}
const Hu = ["k", "key"];
function Cp(e) {
  const t = wn(e, Hu);
  if (t)
    return t;
  throw Vr(
    6
    /* NodeTypes.Linked */
  );
}
function wn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (It(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Vu = [
  ...Pu,
  ...Nu,
  ...Mu,
  ...Du,
  ...Hu,
  ...$u,
  ...Uu,
  ...Fu
];
function Vr(e) {
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
  function p() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, i = "\\" + w, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && p())) {
      if (l = kp(s), f = Sn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = h[u[1]], c && (i = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Qi = /* @__PURE__ */ new Map();
function Np(e, t) {
  return ke(e) ? e[t] : null;
}
function Mp(e, t) {
  if (!ke(e))
    return null;
  let n = Qi.get(t);
  if (n || (n = Pp(t), n && Qi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const a = n[s];
    if (Vu.includes(a) && Vt(o))
      return null;
    const i = o[a];
    if (i === void 0 || De(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Dp = (e) => e, Fp = (e) => "", Up = "text", $p = (e) => e.length === 0 ? "" : Wh(e), Hp = Bh;
function Zi(e, t) {
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
  const t = e.locale, n = Vp(e), r = ke(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? e.pluralRules[t] : Zi, o = ke(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? Zi : void 0, s = (v) => v[r(n, v.length, o)], a = e.list || [], i = (v) => a[v], l = e.named || Pe();
  Ye(e.pluralIndex) && jp(n, l);
  const u = (v) => l[v];
  function c(v) {
    const x = De(e.messages) ? e.messages(v) : ke(e.messages) ? e.messages[v] : !1;
    return x || (e.parent ? e.parent.message(v) : Fp);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : Dp, h = be(e.processor) && De(e.processor.normalize) ? e.processor.normalize : $p, p = be(e.processor) && De(e.processor.interpolate) ? e.processor.interpolate : Hp, w = be(e.processor) && se(e.processor.type) ? e.processor.type : Up, T = {
    list: i,
    named: u,
    plural: s,
    linked: (v, ...x) => {
      const [y, E] = x;
      let I = "text", C = "";
      x.length === 1 ? ke(y) ? (C = y.modifier || C, I = y.type || I) : se(y) && (C = y || C) : x.length === 2 && (se(y) && (C = y || C), se(E) && (I = E || I));
      const D = c(v)(T), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && Ve(D) && C ? D[0] : D
      );
      return C ? f(C)(N, I) : N;
    },
    message: c,
    type: w,
    interpolate: p,
    normalize: h,
    values: at(Pe(), a, l)
  };
  return T;
}
let jr = null;
function Wp(e) {
  jr = e;
}
function Kp(e, t, n) {
  jr && jr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const zp = /* @__PURE__ */ Gp(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Gp(e) {
  return (t) => jr && jr.emit(e, t);
}
const qp = Pa.__EXTEND_POINT__, Cn = to(qp), Yp = {
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
}, ju = me.__EXTEND_POINT__, Rn = to(ju), $t = {
  INVALID_ARGUMENT: ju,
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
  return ur(e, null, void 0);
}
function Da(e, t) {
  return t.locale != null ? el(t.locale) : el(e.locale);
}
let Co;
function el(e) {
  if (se(e))
    return e;
  if (De(e)) {
    if (e.resolvedOnce && Co != null)
      return Co;
    if (e.constructor.name === "Function") {
      const t = e();
      if (jh(t))
        throw Xt($t.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Co = t;
    } else
      throw Xt($t.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xt($t.NOT_SUPPORT_LOCALE_TYPE);
}
function Xp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ve(t) ? t : ke(t) ? Object.keys(t) : se(t) ? [t] : [n]
  ])];
}
function Bu(e, t, n) {
  const r = se(n) ? n : or, o = e;
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
const Zp = "9.14.5", no = -1, or = "en-US", nl = "", rl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function eg() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? rl(e) : t === "vnode" && ke(e) && "__v_isVNode" in e ? rl(e.children) : e
  };
}
let Wu;
function tg(e) {
  Wu = e;
}
let Ku;
function ng(e) {
  Ku = e;
}
let zu;
function rg(e) {
  zu = e;
}
let Gu = null;
const sg = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Gu = e;
}, og = /* @__NO_SIDE_EFFECTS__ */ () => Gu;
let qu = null;
const sl = (e) => {
  qu = e;
}, ag = () => qu;
let ol = 0;
function ig(e = {}) {
  const t = De(e.onWarn) ? e.onWarn : Mh, n = se(e.version) ? e.version : Zp, r = se(e.locale) || De(e.locale) ? e.locale : or, o = De(r) ? or : r, s = Ve(e.fallbackLocale) || be(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = be(e.messages) ? e.messages : Ro(o), i = be(e.datetimeFormats) ? e.datetimeFormats : Ro(o), l = be(e.numberFormats) ? e.numberFormats : Ro(o), u = at(Pe(), e.modifiers, eg()), c = e.pluralRules || Pe(), f = De(e.missing) ? e.missing : null, h = Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, p = Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, S = !!e.unresolving, T = De(e.postTranslation) ? e.postTranslation : null, v = be(e.processor) ? e.processor : null, x = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, E = De(e.messageCompiler) ? e.messageCompiler : Wu, I = De(e.messageResolver) ? e.messageResolver : Ku || Np, C = De(e.localeFallbacker) ? e.localeFallbacker : zu || Xp, D = ke(e.fallbackContext) ? e.fallbackContext : void 0, N = e, O = ke(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), j = ke(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), te = ke(N.__meta) ? N.__meta : {};
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
    fallbackFormat: w,
    unresolving: S,
    postTranslation: T,
    processor: v,
    warnHtmlMessage: x,
    escapeParameter: y,
    messageCompiler: E,
    messageResolver: I,
    localeFallbacker: C,
    fallbackContext: D,
    onWarn: t,
    __meta: te
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = O, U.__numberFormatters = j, __INTLIFY_PROD_DEVTOOLS__ && Kp(U, n, te), U;
}
const Ro = (e) => ({ [e]: Pe() });
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
function Lo(e) {
  return (n) => ug(n, e);
}
function ug(e, t) {
  const n = wp(t);
  if (n == null)
    throw Vr(
      0
      /* NodeTypes.Resource */
    );
  if (Ma(n) === 1) {
    const s = Sp(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      al(e, i)
    ], []));
  } else
    return al(e, n);
}
function al(e, t) {
  const n = Ap(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Tp(t).reduce((o, s) => [...o, Jo(e, s)], []);
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
      if (It(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (It(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Vr(n);
    }
    case 5: {
      const r = t;
      if (It(r, "i") && Ye(r.i))
        return e.interpolate(e.list(r.i));
      if (It(r, "index") && Ye(r.index))
        return e.interpolate(e.list(r.index));
      throw Vr(n);
    }
    case 6: {
      const r = t, o = Op(r), s = Cp(r);
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
const fg = (e) => e;
let cs = Pe();
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
    const r = (t.onCacheKey || fg)(e), o = cs[r];
    if (o)
      return o;
    const { ast: s, detectError: a } = dg(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Lo(s);
    return a ? i : cs[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = cs[n];
      return r || (cs[n] = Lo(e));
    } else
      return Lo(e);
  }
}
const il = () => "", Rt = (e) => De(e);
function ll(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = Qo(...t), c = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Oe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, p = !!u.resolvedMessage, w = se(u.default) || Oe(u.default) ? Oe(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", S = n || w !== "", T = Da(e, u);
  h && hg(u);
  let [v, x, y] = p ? [
    l,
    T,
    i[T] || Pe()
  ] : Yu(e, l, T, a, f, c), E = v, I = l;
  if (!p && !(se(E) || Vt(E) || Rt(E)) && S && (E = w, I = E), !p && (!(se(E) || Vt(E) || Rt(E)) || !se(x)))
    return o ? no : l;
  let C = !1;
  const D = () => {
    C = !0;
  }, N = Rt(E) ? E : Xu(e, l, x, E, I, D);
  if (C)
    return E;
  const O = _g(e, x, y, u), j = Bp(O), te = pg(e, N, j);
  let U = r ? r(te, l) : te;
  if (h && se(U) && (U = Hh(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: se(l) ? l : Rt(E) ? E.key : "",
      locale: x || (Rt(E) ? E.locale : ""),
      format: se(E) ? E : Rt(E) ? E.source : "",
      message: U
    };
    X.meta = at({}, e.__meta, /* @__PURE__ */ og() || {}), zp(X);
  }
  return U;
}
function hg(e) {
  Ve(e.list) ? e.list = e.list.map((t) => se(t) ? zi(t) : t) : ke(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = zi(e.named[t]));
  });
}
function Yu(e, t, n, r, o, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = Pe(), h, p = null;
  const w = "translate";
  for (let S = 0; S < c.length && (h = c[S], f = a[h] || Pe(), (p = l(f, t)) === null && (p = f[t]), !(se(p) || Vt(p) || Rt(p))); S++)
    if (!cg(h, c)) {
      const T = Fa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        s,
        w
      );
      T !== t && (p = T);
    }
  return [p, h, f];
}
function Xu(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Rt(r)) {
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
function Qo(...e) {
  const [t, n, r] = e, o = Pe();
  if (!se(t) && !Ye(t) && !Rt(t) && !Vt(t))
    throw Xt($t.INVALID_ARGUMENT);
  const s = Ye(t) ? String(t) : (Rt(t), t);
  return Ye(n) ? o.plural = n : se(n) ? o.default = n : be(n) && !eo(n) ? o.named = n : Ve(n) && (o.list = n), Ye(r) ? o.plural = r : se(r) ? o.default = r : be(r) && at(o, r), [s, o];
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
    messages: (p) => {
      let w = a(n, p);
      if (w == null && c) {
        const [, , S] = Yu(c, p, t, i, l, u);
        w = a(S, p);
      }
      if (se(w) || Vt(w)) {
        let S = !1;
        const v = Xu(e, p, t, w, p, () => {
          S = !0;
        });
        return S ? il : v;
      } else return Rt(w) ? w : il;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ye(r.plural) && (h.pluralIndex = r.plural), h;
}
function cl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, c, f] = Zo(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, w = Da(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.DateTimeFormat(w, f).format(u);
  let T = {}, v, x = null;
  const y = "datetime format";
  for (let C = 0; C < S.length && (v = S[C], T = n[v] || {}, x = T[l], !be(x)); C++)
    Fa(e, l, v, h, y);
  if (!be(x) || !se(v))
    return r ? no : l;
  let E = `${v}__${l}`;
  eo(f) || (E = `${E}__${JSON.stringify(f)}`);
  let I = i.get(E);
  return I || (I = new Intl.DateTimeFormat(v, at({}, x, f)), i.set(E, I)), p ? I.formatToParts(u) : I.format(u);
}
const Ju = [
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
      throw Xt($t.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Xt($t.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Uh(t)) {
    if (isNaN(t.getTime()))
      throw Xt($t.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ye(t))
    i = t;
  else
    throw Xt($t.INVALID_ARGUMENT);
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Ju.includes(l) ? a[l] = n[l] : s[l] = n[l];
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
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, c, f] = ea(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, w = Da(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.NumberFormat(w, f).format(u);
  let T = {}, v, x = null;
  const y = "number format";
  for (let C = 0; C < S.length && (v = S[C], T = n[v] || {}, x = T[l], !be(x)); C++)
    Fa(e, l, v, h, y);
  if (!be(x) || !se(v))
    return r ? no : l;
  let E = `${v}__${l}`;
  eo(f) || (E = `${E}__${JSON.stringify(f)}`);
  let I = i.get(E);
  return I || (I = new Intl.NumberFormat(v, at({}, x, f)), i.set(E, I)), p ? I.formatToParts(u) : I.format(u);
}
const Qu = [
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
    throw Xt($t.INVALID_ARGUMENT);
  const i = t;
  return se(n) ? s.key = n : be(n) && Object.keys(n).forEach((l) => {
    Qu.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : be(r) && (a = r), be(o) && (a = o), [s.key || "", i, s, a];
}
function dl(e, t, n) {
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
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (xn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (xn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const vg = Yp.__EXTEND_POINT__, Kt = to(vg);
Kt(), Kt(), Kt(), Kt(), Kt(), Kt(), Kt(), Kt(), Kt();
const Zu = $t.__EXTEND_POINT__, vt = to(Zu), tt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Zu,
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
  return ur(e, null, void 0);
}
const ta = /* @__PURE__ */ En("__translateVNode"), na = /* @__PURE__ */ En("__datetimeParts"), ra = /* @__PURE__ */ En("__numberParts"), ef = En("__setPluralRules"), tf = /* @__PURE__ */ En("__injectWithOption"), sa = /* @__PURE__ */ En("__dispose");
function Br(e) {
  if (!ke(e) || Vt(e))
    return e;
  for (const t in e)
    if (It(e, t))
      if (!t.includes("."))
        ke(e[t]) && Br(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = Pe()), !ke(o[n[a]])) {
            s = !0;
            break;
          }
          o = o[n[a]];
        }
        if (s || (Vt(o) ? Vu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Vt(o)) {
          const a = o[n[r]];
          ke(a) && Br(a);
        }
      }
  return e;
}
function ro(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, a = be(n) ? n : Ve(r) ? Pe() : { [e]: Pe() };
  if (Ve(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || Pe(), ys(u, a[l])) : ys(u, a);
    } else
      se(i) && ys(JSON.parse(i), a);
  }), o == null && s)
    for (const i in a)
      It(a, i) && Br(a[i]);
  return a;
}
function nf(e) {
  return e.type;
}
function rf(e, t, n) {
  let r = ke(t.messages) ? t.messages : Pe();
  "__i18nGlobal" in n && (r = ro(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (ke(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (ke(t.numberFormats)) {
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
const hl = "__INTLIFY_META__", pl = () => [], Eg = () => !1;
let gl = 0;
function _l(e) {
  return ((t, n, r, o) => e(n, r, tn() || void 0, o));
}
const wg = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = tn();
  let t = null;
  return e && (t = nf(e)[hl]) ? { [hl]: t } : null;
};
function Ua(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, a = Ps ? J : Cc, i = !!e.translateExistCompatible;
  let l = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : se(e.locale) ? e.locale : or
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = a(ro(u.value, e)), h = a(be(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), p = a(be(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let w = n ? n.missingWarn : Oe(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : Oe(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, x = De(e.missing) ? e.missing : null, y = De(e.missing) ? _l(e.missing) : null, E = De(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const D = n ? n.modifiers : be(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    o && sl(null);
    const k = {
      version: bg,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: D,
      pluralRules: N,
      missing: y === null ? void 0 : y,
      missingWarn: w,
      fallbackWarn: S,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: I,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = h.value, k.numberFormats = p.value, k.__datetimeFormatters = be(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = be(O) ? O.__numberFormatters : void 0;
    const $ = ig(k);
    return o && sl($), $;
  })(), _r(O, u.value, c.value);
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
    set: (k) => {
      u.value = k, O.locale = u.value;
    }
  }), X = _e({
    get: () => c.value,
    set: (k) => {
      c.value = k, O.fallbackLocale = c.value, _r(O, u.value, k);
    }
  }), ie = _e(() => f.value), de = /* @__PURE__ */ _e(() => h.value), ae = /* @__PURE__ */ _e(() => p.value);
  function V() {
    return De(E) ? E : null;
  }
  function Z(k) {
    E = k, O.postTranslation = k;
  }
  function Ee() {
    return x;
  }
  function Re(k) {
    k !== null && (y = _l(k)), x = k, O.missing = y;
  }
  const fe = (k, $, ce, Te, $e, st) => {
    te();
    let Je;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = n ? ag() : void 0), Je = k(O);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ye(Je) && Je === no || ce === "translate exists" && !Je) {
      const [Tt, mr] = $();
      return n && T ? Te(n) : $e(Tt);
    } else {
      if (st(Je))
        return Je;
      throw rt(tt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function we(...k) {
    return fe(($) => Reflect.apply(ll, null, [$, ...k]), () => Qo(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => se($));
  }
  function Ue(...k) {
    const [$, ce, Te] = k;
    if (Te && !ke(Te))
      throw rt(tt.INVALID_ARGUMENT);
    return we($, ce, at({ resolvedMessage: !0 }, Te || {}));
  }
  function Xe(...k) {
    return fe(($) => Reflect.apply(cl, null, [$, ...k]), () => Zo(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => nl, ($) => se($));
  }
  function We(...k) {
    return fe(($) => Reflect.apply(fl, null, [$, ...k]), () => ea(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => nl, ($) => se($));
  }
  function pe(k) {
    return k.map(($) => se($) || Ye($) || Oe($) ? ml(String($)) : $);
  }
  const re = {
    normalize: pe,
    interpolate: (k) => k,
    type: "vnode"
  };
  function oe(...k) {
    return fe(
      ($) => {
        let ce;
        const Te = $;
        try {
          Te.processor = re, ce = Reflect.apply(ll, null, [Te, ...k]);
        } finally {
          Te.processor = null;
        }
        return ce;
      },
      () => Qo(...k),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ta](...k),
      ($) => [ml($)],
      ($) => Ve($)
    );
  }
  function Ce(...k) {
    return fe(
      ($) => Reflect.apply(fl, null, [$, ...k]),
      () => ea(...k),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ra](...k),
      pl,
      ($) => se($) || Ve($)
    );
  }
  function Ke(...k) {
    return fe(
      ($) => Reflect.apply(cl, null, [$, ...k]),
      () => Zo(...k),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[na](...k),
      pl,
      ($) => se($) || Ve($)
    );
  }
  function g(k) {
    N = k, O.pluralRules = N;
  }
  function _(k, $) {
    return fe(() => {
      if (!k)
        return !1;
      const ce = se($) ? $ : u.value, Te = L(ce), $e = O.messageResolver(Te, k);
      return i ? $e != null : Vt($e) || Rt($e) || se($e);
    }, () => [k], "translate exists", (ce) => Reflect.apply(ce.te, ce, [k, $]), Eg, (ce) => Oe(ce));
  }
  function b(k) {
    let $ = null;
    const ce = Bu(O, c.value, u.value);
    for (let Te = 0; Te < ce.length; Te++) {
      const $e = f.value[ce[Te]] || {}, st = O.messageResolver($e, k);
      if (st != null) {
        $ = st;
        break;
      }
    }
    return $;
  }
  function P(k) {
    const $ = b(k);
    return $ ?? (n ? n.tm(k) || {} : {});
  }
  function L(k) {
    return f.value[k] || {};
  }
  function M(k, $) {
    if (s) {
      const ce = { [k]: $ };
      for (const Te in ce)
        It(ce, Te) && Br(ce[Te]);
      $ = ce[k];
    }
    f.value[k] = $, O.messages = f.value;
  }
  function Y(k, $) {
    f.value[k] = f.value[k] || {};
    const ce = { [k]: $ };
    if (s)
      for (const Te in ce)
        It(ce, Te) && Br(ce[Te]);
    $ = ce[k], ys($, f.value[k]), O.messages = f.value;
  }
  function z(k) {
    return h.value[k] || {};
  }
  function d(k, $) {
    h.value[k] = $, O.datetimeFormats = h.value, ul(O, k, $);
  }
  function m(k, $) {
    h.value[k] = at(h.value[k] || {}, $), O.datetimeFormats = h.value, ul(O, k, $);
  }
  function R(k) {
    return p.value[k] || {};
  }
  function F(k, $) {
    p.value[k] = $, O.numberFormats = p.value, dl(O, k, $);
  }
  function ee(k, $) {
    p.value[k] = at(p.value[k] || {}, $), O.numberFormats = p.value, dl(O, k, $);
  }
  gl++, n && Ps && (yt(n.locale, (k) => {
    l && (u.value = k, O.locale = k, _r(O, u.value, c.value));
  }), yt(n.fallbackLocale, (k) => {
    l && (c.value = k, O.fallbackLocale = k, _r(O, u.value, c.value));
  }));
  const G = {
    id: gl,
    locale: U,
    fallbackLocale: X,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(k) {
      l = k, k && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, _r(O, u.value, c.value));
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
      return T;
    },
    set fallbackRoot(k) {
      T = k;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(k) {
      v = k, O.fallbackFormat = v;
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
    t: we,
    getLocaleMessage: L,
    setLocaleMessage: M,
    mergeLocaleMessage: Y,
    getPostTranslationHandler: V,
    setPostTranslationHandler: Z,
    getMissingHandler: Ee,
    setMissingHandler: Re,
    [ef]: g
  };
  return G.datetimeFormats = de, G.numberFormats = ae, G.rt = Ue, G.te = _, G.tm = P, G.d = Xe, G.n = We, G.getDateTimeFormat = z, G.setDateTimeFormat = d, G.mergeDateTimeFormat = m, G.getNumberFormat = R, G.setNumberFormat = F, G.mergeNumberFormat = ee, G[tf] = r, G[ta] = oe, G[na] = Ke, G[ra] = Ce, G;
}
function Sg(e) {
  const t = se(e.locale) ? e.locale : or, n = se(e.fallbackLocale) || Ve(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = De(e.missing) ? e.missing : void 0, o = Oe(e.silentTranslationWarn) || yn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Oe(e.silentFallbackWarn) || yn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = Oe(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = be(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = De(e.postTranslation) ? e.postTranslation : void 0, f = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, p = Oe(e.sync) ? e.sync : !0;
  let w = e.messages;
  if (be(e.sharedMessages)) {
    const C = e.sharedMessages;
    w = Object.keys(C).reduce((N, O) => {
      const j = N[O] || (N[O] = {});
      return at(j, C[O]), N;
    }, w || {});
  }
  const { __i18n: S, __root: T, __injectWithOption: v } = e, x = e.datetimeFormats, y = e.numberFormats, E = e.flatJson, I = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
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
    translateExistCompatible: I,
    __i18n: S,
    __root: T,
    __injectWithOption: v
  };
}
function oa(e = {}, t) {
  {
    const n = Ua(Sg(e)), { __extender: r } = e, o = {
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
          throw rt(tt.INVALID_ARGUMENT);
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
          throw rt(tt.INVALID_ARGUMENT);
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
function sf(e) {
  return He;
}
const Tg = /* @__PURE__ */ rn({
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
      const i = Ag(t, s), l = o[ta](e.keypath, i, a), u = at(Pe(), r), c = se(e.tag) || ke(e.tag) ? e.tag : sf();
      return Hr(c, u, l);
    };
  }
}), bl = Tg;
function Og(e) {
  return Ve(e) && !se(e[0]);
}
function of(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = Pe();
    e.locale && (a.locale = e.locale), se(e.format) ? a.key = e.format : ke(e.format) && (se(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((h, p) => n.includes(p) ? at(Pe(), h, { [p]: e.format[p] }) : h, Pe()));
    const l = r(e.value, a, i);
    let u = [a.key];
    Ve(l) ? u = l.map((h, p) => {
      const w = o[h.type], S = w ? w({ [h.type]: h.value, index: p, parts: l }) : [h.value];
      return Og(S) && (S[0].key = `${h.type}-${p}`), S;
    }) : se(l) && (u = [l]);
    const c = at(Pe(), s), f = se(e.tag) || ke(e.tag) ? e.tag : sf();
    return Hr(f, c, u);
  };
}
const Cg = /* @__PURE__ */ rn({
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
    return of(e, t, Qu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ra](...r)
    ));
  }
}), yl = Cg, Rg = /* @__PURE__ */ rn({
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
    return of(e, t, Ju, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[na](...r)
    ));
  }
}), vl = Rg;
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
      throw rt(tt.UNEXPECTED_ERROR);
    const c = Lg(e, i.$), f = El(u);
    return [
      Reflect.apply(c.t, c, [...wl(f)]),
      c
    ];
  };
  return {
    created: (a, i) => {
      const [l, u] = t(i);
      Ps && e.global === u && (a.__i18nWatcher = yt(u.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      Ps && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
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
      throw rt(tt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw rt(tt.INVALID_VALUE);
}
function wl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, a = {}, i = r || {};
  return se(n) && (a.locale = n), Ye(o) && (a.plural = o), Ye(s) && (a.plural = s), [t, i, a];
}
function kg(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (Oe(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : bl.name, "I18nT"].forEach((a) => e.component(a, bl)), [yl.name, "I18nN"].forEach((a) => e.component(a, yl)), [vl.name, "I18nD"].forEach((a) => e.component(a, vl))), e.directive("t", Ig(t));
}
function xg(e, t, n) {
  return {
    beforeCreate() {
      const r = tn();
      if (!r)
        throw rt(tt.UNEXPECTED_ERROR);
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
      o.__i18nGlobal && rf(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, a) => this.$i18n.te(s, a), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = tn();
      if (!r)
        throw rt(tt.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Sl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[ef](t.pluralizationRules || e.pluralizationRules);
  const n = ro(e.locale, {
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
      async install(p, ...w) {
        if (p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, h), be(w[0])) {
          const v = w[0];
          h.__composerExtend = v.__composerExtend, h.__vueI18nExtend = v.__vueI18nExtend;
        }
        let S = null;
        !n && r && (S = Wg(p, h.global)), __VUE_I18N_FULL_INSTALL__ && kg(p, h, ...w), __VUE_I18N_LEGACY_API__ && n && p.mixin(xg(i, i.__composer, h));
        const T = p.unmount;
        p.unmount = () => {
          S && S(), h.dispose(), T();
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
  const t = tn();
  if (t == null)
    throw rt(tt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw rt(tt.NOT_INSTALLED);
  const n = Dg(t), r = Ug(n), o = nf(t), s = Fg(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw rt(tt.NOT_AVAILABLE_IN_LEGACY_MODE);
    return jg(t, s, r, e);
  }
  if (s === "global")
    return rf(r, e, o), r;
  if (s === "parent") {
    let l = $g(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = at({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Ua(l), a.__composerExtend && (i[sa] = a.__composerExtend(i)), Vg(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Mg(e, t, n) {
  const r = ga();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => oa(e)) : r.run(() => Ua(e));
    if (o == null)
      throw rt(tt.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Dg(e) {
  {
    const t = Qn(e.isCE ? Pg : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw rt(e.isCE ? tt.NOT_INSTALLED_WITH_PROVIDE : tt.UNEXPECTED_ERROR);
    return t;
  }
}
function Fg(e, t) {
  return eo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
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
      i != null && (r = i.__composer, n && r && !r[tf] && (r = null));
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
  cr(() => {
  }, t), Gr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[sa];
    o && (o(), delete r[sa]);
  }, t);
}
function jg(e, t, n, r = {}) {
  const o = t === "local", s = Cc(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw rt(tt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = Oe(r.inheritLocale) ? r.inheritLocale : !se(r.locale), i = J(
    // prettier-ignore
    !o || a ? n.locale.value : se(r.locale) ? r.locale : or
  ), l = J(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : se(r.fallbackLocale) || Ve(r.fallbackLocale) || be(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = J(ro(i.value, r)), c = J(be(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = J(be(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), h = o ? n.missingWarn : Oe(r.missingWarn) || yn(r.missingWarn) ? r.missingWarn : !0, p = o ? n.fallbackWarn : Oe(r.fallbackWarn) || yn(r.fallbackWarn) ? r.fallbackWarn : !0, w = o ? n.fallbackRoot : Oe(r.fallbackRoot) ? r.fallbackRoot : !0, S = !!r.fallbackFormat, T = De(r.missing) ? r.missing : null, v = De(r.postTranslation) ? r.postTranslation : null, x = o ? n.warnHtmlMessage : Oe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, y = !!r.escapeParameter, E = o ? n.modifiers : be(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || o && n.pluralRules;
  function C() {
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
  }), O = _e(() => s.value ? s.value.messages.value : u.value), j = _e(() => c.value), te = _e(() => f.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function X(b) {
    s.value && s.value.setPostTranslationHandler(b);
  }
  function ie() {
    return s.value ? s.value.getMissingHandler() : T;
  }
  function de(b) {
    s.value && s.value.setMissingHandler(b);
  }
  function ae(b) {
    return C(), b();
  }
  function V(...b) {
    return s.value ? ae(() => Reflect.apply(s.value.t, null, [...b])) : ae(() => "");
  }
  function Z(...b) {
    return s.value ? Reflect.apply(s.value.rt, null, [...b]) : "";
  }
  function Ee(...b) {
    return s.value ? ae(() => Reflect.apply(s.value.d, null, [...b])) : ae(() => "");
  }
  function Re(...b) {
    return s.value ? ae(() => Reflect.apply(s.value.n, null, [...b])) : ae(() => "");
  }
  function fe(b) {
    return s.value ? s.value.tm(b) : {};
  }
  function we(b, P) {
    return s.value ? s.value.te(b, P) : !1;
  }
  function Ue(b) {
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
  function Ce(b, P) {
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
    messages: O,
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
      return s.value ? s.value.fallbackWarn : p;
    },
    set fallbackWarn(b) {
      s.value && (s.value.missingWarn = b);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : w;
    },
    set fallbackRoot(b) {
      s.value && (s.value.fallbackRoot = b);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : S;
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
    t: V,
    getPostTranslationHandler: U,
    setPostTranslationHandler: X,
    getMissingHandler: ie,
    setMissingHandler: de,
    rt: Z,
    d: Ee,
    n: Re,
    tm: fe,
    te: we,
    getLocaleMessage: Ue,
    setLocaleMessage: Xe,
    mergeLocaleMessage: We,
    getDateTimeFormat: pe,
    setDateTimeFormat: W,
    mergeDateTimeFormat: re,
    getNumberFormat: oe,
    setNumberFormat: Ce,
    mergeNumberFormat: Ke
  };
  function _(b) {
    b.locale.value = i.value, b.fallbackLocale.value = l.value, Object.keys(u.value).forEach((P) => {
      b.mergeLocaleMessage(P, u.value[P]);
    }), Object.keys(c.value).forEach((P) => {
      b.mergeDateTimeFormat(P, c.value[P]);
    }), Object.keys(f.value).forEach((P) => {
      b.mergeNumberFormat(P, f.value[P]);
    }), b.escapeParameter = y, b.fallbackFormat = S, b.fallbackRoot = w, b.fallbackWarn = p, b.missingWarn = h, b.warnHtmlMessage = x;
  }
  return qc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw rt(tt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const b = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = b.locale.value, l.value = b.fallbackLocale.value, u.value = b.messages.value, c.value = b.datetimeFormats.value, f.value = b.numberFormats.value) : o && _(b);
  }), g;
}
const Bg = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Al = ["t", "rt", "d", "n", "tm", "te"];
function Wg(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Bg.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw rt(tt.UNEXPECTED_ERROR);
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
      throw rt(tt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Al.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
yg();
tg(mg);
ng(Mp);
rg(Bu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = xn();
  e.__INTLIFY__ = !0, Wp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Kg = "sub2api_locale", Ha = "en", zg = {
  en: () => import("./index-BNE7pDGz.js"),
  zh: () => import("./index-C6v02mW8.js")
};
function af(e) {
  return e === "en" || e === "zh";
}
function Gg() {
  const e = localStorage.getItem(Kg);
  return e && af(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Ha;
}
const er = Ng({
  legacy: !1,
  locale: Gg(),
  fallbackLocale: Ha,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Tl = /* @__PURE__ */ new Set();
async function lf(e) {
  if (Tl.has(e))
    return;
  const t = zg[e], n = await t();
  er.global.setLocaleMessage(e, n.default), Tl.add(e);
}
async function qg() {
  const e = cf();
  await lf(e), document.documentElement.setAttribute("lang", e);
}
function cf() {
  const e = er.global.locale.value;
  return af(e) ? e : Ha;
}
function uf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Yg } = Object.prototype, { getPrototypeOf: ar } = Object, { iterator: Jr, toStringTag: ff } = Symbol, Ms = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Ms(n, t))
      return !0;
    n = ar(n);
  }
  return !1;
}, Xg = (e, t) => e != null && Wr(e, t) ? e[t] : void 0, Va = /* @__PURE__ */ ((e) => (t) => {
  const n = Yg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Nt = (e) => (e = e.toLowerCase(), (t) => Va(t) === e), so = (e) => (t) => typeof t === e, { isArray: Un } = Array, ir = so("undefined");
function fr(e) {
  return e !== null && !ir(e) && e.constructor !== null && !ir(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const df = Nt("ArrayBuffer");
function Jg(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && df(e.buffer), t;
}
const Qg = so("string"), wt = so("function"), mf = so("number"), dr = (e) => e !== null && typeof e == "object", Zg = (e) => e === !0 || e === !1, vs = (e) => {
  if (!dr(e))
    return !1;
  const t = ar(e);
  return (t === null || t === Object.prototype || ar(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Wr(e, ff) && !Wr(e, Jr);
}, e0 = (e) => {
  if (!dr(e) || fr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, t0 = Nt("Date"), n0 = Nt("File"), r0 = (e) => !!(e && typeof e.uri < "u"), s0 = (e) => e && typeof e.getParts < "u", o0 = Nt("Blob"), a0 = Nt("FileList"), i0 = (e) => dr(e) && wt(e.pipe);
function l0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ol = l0(), Cl = typeof Ol.FormData < "u" ? Ol.FormData : void 0, c0 = (e) => {
  if (!e) return !1;
  if (Cl && e instanceof Cl) return !0;
  const t = ar(e);
  if (!t || t === Object.prototype || !wt(e.append)) return !1;
  const n = Va(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && wt(e.toString) && e.toString() === "[object FormData]";
}, u0 = Nt("URLSearchParams"), [f0, d0, m0, h0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Nt), p0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Un(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (fr(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let i;
    for (r = 0; r < a; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function hf(e, t) {
  if (fr(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pf = (e) => !ir(e) && e !== Pn;
function aa(...e) {
  const { caseless: t, skipUndefined: n } = pf(this) && this || {}, r = {}, o = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && typeof a == "string" && hf(r, a) || a, l = Ms(r, i) ? r[i] : void 0;
    vs(l) && vs(s) ? r[i] = aa(l, s) : vs(s) ? r[i] = aa({}, s) : Un(s) ? r[i] = s.slice() : (!n || !ir(s)) && (r[i] = s);
  };
  for (let s = 0, a = e.length; s < a; s++) {
    const i = e[s];
    if (!i || fr(i) || (Qr(i, o), typeof i != "object" || Un(i)))
      continue;
    const l = Object.getOwnPropertySymbols(i);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      C0.call(i, c) && o(i[c], c);
    }
  }
  return r;
}
const g0 = (e, t, n, { allOwnKeys: r } = {}) => (Qr(
  t,
  (o, s) => {
    n && wt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: uf(o, n),
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
    e = n !== !1 && ar(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, v0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, E0 = (e) => {
  if (!e) return null;
  if (Un(e)) return e;
  let t = e.length;
  if (!mf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, w0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ar(Uint8Array)), S0 = (e, t) => {
  const r = (e && e[Jr]).call(e);
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
}, T0 = Nt("HTMLFormElement"), O0 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: C0 } = Object.prototype, R0 = Nt("RegExp"), gf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Qr(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, L0 = (e) => {
  gf(e, (t, n) => {
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
}, I0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Un(e) ? r(e) : r(String(e).split(t)), n;
}, k0 = () => {
}, x0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function P0(e) {
  return !!(e && wt(e.append) && e[ff] === "FormData" && e[Jr]);
}
const N0 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (dr(r)) {
      if (t.has(r))
        return;
      if (fr(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Un(r) ? [] : {};
        return Qr(r, (s, a) => {
          const i = n(s);
          !ir(i) && (o[a] = i);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, M0 = Nt("AsyncFunction"), D0 = (e) => e && (dr(e) || wt(e)) && wt(e.then) && wt(e.catch), _f = ((e, t) => e ? setImmediate : t ? ((n, r) => (Pn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === Pn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Pn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", wt(Pn.postMessage)), F0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Pn) : typeof process < "u" && process.nextTick || _f, bf = (e) => e != null && wt(e[Jr]), U0 = (e) => e != null && Wr(e, Jr) && bf(e), A = {
  isArray: Un,
  isArrayBuffer: df,
  isBuffer: fr,
  isFormData: c0,
  isArrayBufferView: Jg,
  isString: Qg,
  isNumber: mf,
  isBoolean: Zg,
  isObject: dr,
  isPlainObject: vs,
  isEmptyObject: e0,
  isReadableStream: f0,
  isRequest: d0,
  isResponse: m0,
  isHeaders: h0,
  isUndefined: ir,
  isDate: t0,
  isFile: n0,
  isReactNativeBlob: r0,
  isReactNative: s0,
  isBlob: o0,
  isRegExp: R0,
  isFunction: wt,
  isStream: i0,
  isURLSearchParams: u0,
  isTypedArray: w0,
  isFileList: a0,
  forEach: Qr,
  merge: aa,
  extend: g0,
  trim: p0,
  stripBOM: _0,
  inherits: b0,
  toFlatObject: y0,
  kindOf: Va,
  kindOfTest: Nt,
  endsWith: v0,
  toArray: E0,
  forEachEntry: S0,
  matchAll: A0,
  isHTMLForm: T0,
  hasOwnProperty: Ms,
  hasOwnProp: Ms,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Wr,
  getSafeProp: Xg,
  reduceDescriptors: gf,
  freezeMethods: L0,
  toObjectSet: I0,
  toCamelCase: O0,
  noop: k0,
  toFiniteNumber: x0,
  findKey: hf,
  global: Pn,
  isContextDefined: pf,
  isSpecCompliantForm: P0,
  toJSONObject: N0,
  isAsyncFn: M0,
  isThenable: D0,
  setImmediate: _f,
  asap: F0,
  isIterable: bf,
  isSafeIterable: U0
}, $0 = A.toObjectSet([
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
function ja(e, t) {
  return A.isArray(e) ? e.map((n) => ja(n, t)) : V0(String(e).replace(t, ""));
}
const W0 = (e) => ja(e, j0), K0 = (e) => ja(e, B0);
function yf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return A.forEach(e.toJSON(), (n, r) => {
    t[r] = K0(n);
  }), t;
}
const Rl = Symbol("internals");
function br(e) {
  return e && String(e).trim().toLowerCase();
}
function Es(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Es) : W0(String(e));
}
function z0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const G0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Io(e, t, n, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function q0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Y0(e, t) {
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
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = Es(i));
    }
    const a = (i, l) => A.forEach(i, (u, c) => s(u, c, l));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (A.isString(t) && (t = t.trim()) && !G0(t))
      a(H0(t), n);
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
          return z0(o);
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
      return !!(r && this[r] !== void 0 && (!n || Io(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = br(a), a) {
        const i = A.findKey(r, a);
        i && (!n || Io(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Io(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, s) => {
      const a = A.findKey(r, s);
      if (a) {
        n[a] = Es(o), delete n[s];
        return;
      }
      const i = t ? q0(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Es(o), r[i] = !0;
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
      r[i] || (Y0(o, a), r[i] = !0);
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
const X0 = "[REDACTED ****]";
function J0(e) {
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
function Q0(e, t) {
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
      if (!A.isPlainObject(s) && J0(s))
        return r.pop(), s;
      a = /* @__PURE__ */ Object.create(null);
      for (const [i, l] of Object.entries(s)) {
        const u = n.has(i.toLowerCase()) ? X0 : o(l);
        A.isUndefined(u) || (a[i] = u);
      }
    }
    return r.pop(), a;
  };
  return o(e);
}
let ne = class vf extends Error {
  static from(t, n, r, o, s, a) {
    const i = new vf(t.message, n || t.code, r, o, s);
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
    const t = this.config, n = t && A.hasOwnProp(t, "redact") ? t.redact : void 0, r = A.isArray(n) && n.length > 0 ? Q0(t, n) : A.toJSONObject(t);
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
const Z0 = null, Ef = 100;
function ia(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function wf(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ko(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = wf(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function e_(e) {
  return A.isArray(e) && !e.some(ia);
}
const t_ = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function oo(e, t, n) {
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
  const r = n.metaTokens, o = n.visitor || w, s = n.dots, a = n.indexes, i = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? Ef : n.maxDepth, u = i && A.isSpecCompliantForm(t), c = [];
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
    return JSON.stringify(v, function(I, C) {
      if (!A.isObject(C))
        return C;
      for (; y.length && y[y.length - 1] !== this; )
        y.pop();
      return y.push(C), h(x + y.length - 1), C;
    });
  }
  function w(v, x, y) {
    let E = v;
    if (A.isReactNative(t) && A.isReactNativeBlob(v))
      return t.append(ko(y, x, s), f(v)), !1;
    if (v && !y && typeof v == "object") {
      if (A.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), v = p(v, 1);
      else if (A.isArray(v) && e_(v) || (A.isFileList(v) || A.endsWith(x, "[]")) && (E = A.toArray(v)))
        return x = wf(x), E.forEach(function(C, D) {
          !(A.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ko([x], D, s) : a === null ? x : x + "[]",
            f(C)
          );
        }), !1;
    }
    return ia(v) ? !0 : (t.append(ko(y, x, s), f(v)), !1);
  }
  const S = Object.assign(t_, {
    defaultVisitor: w,
    convertValue: f,
    isVisitable: ia
  });
  function T(v, x, y = 0) {
    if (!A.isUndefined(v)) {
      if (h(y), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + x.join("."));
      c.push(v), A.forEach(v, function(I, C) {
        (!(A.isUndefined(I) || I === null) && o.call(t, I, A.isString(C) ? C.trim() : C, x, S)) === !0 && T(I, x ? x.concat(C) : [C], y + 1);
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
  this._pairs = [], e && oo(e, this, t);
}
const Sf = Ba.prototype;
Sf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Sf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Ll) : Ll;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function n_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Af(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = A.isFunction(n) ? {
    serialize: n
  } : n, o = A.getSafeProp(r, "encode") || n_, s = A.getSafeProp(r, "serialize");
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
}, r_ = typeof URLSearchParams < "u" ? URLSearchParams : Ba, s_ = typeof FormData < "u" ? FormData : null, o_ = typeof Blob < "u" ? Blob : null, a_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: r_,
    FormData: s_,
    Blob: o_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ka = typeof window < "u" && typeof document < "u", la = typeof navigator == "object" && navigator || void 0, i_ = Ka && (!la || ["ReactNative", "NativeScript", "NS"].indexOf(la.product) < 0), l_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", c_ = Ka && window.location.href || "http://localhost", u_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ka,
  hasStandardBrowserEnv: i_,
  hasStandardBrowserWebWorkerEnv: l_,
  navigator: la,
  origin: c_
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...u_,
  ...a_
};
function f_(e, t) {
  return oo(e, new ot.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return ot.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const kl = Ef;
function Tf(e) {
  if (e > kl)
    throw new ne(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + kl,
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
function Of(e) {
  function t(n, r, o, s) {
    Tf(s);
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = s >= n.length;
    return a = !a && A.isArray(o) ? o.length : a, l ? (A.hasOwnProp(o, a) ? o[a] = A.isArray(o[a]) ? o[a].concat(r) : [o[a], r] : o[a] = r, !i) : ((!A.hasOwnProp(o, a) || !A.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && A.isArray(o[a]) && (o[a] = m_(o[a])), !i);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(d_(r), o, n, 0);
    }), n;
  }
  return null;
}
const jn = (e, t) => e != null && A.hasOwnProp(e, t) ? e[t] : void 0;
function h_(e, t, n) {
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
        return o ? JSON.stringify(Of(t)) : t;
      if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
        return t;
      if (A.isArrayBufferView(t))
        return t.buffer;
      if (A.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (s) {
        const l = jn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return f_(t, l).toString();
        if ((i = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = jn(this, "env"), c = u && u.FormData;
          return oo(
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
      const n = jn(this, "transitional") || Zr.transitional, r = n && n.forcedJSONParsing, o = jn(this, "responseType"), s = o === "json";
      if (A.isResponse(t) || A.isReadableStream(t))
        return t;
      if (t && A.isString(t) && (r && !o || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, jn(this, "parseReviver"));
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? ne.from(l, ne.ERR_BAD_RESPONSE, this, null, jn(this, "response")) : l;
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
function xo(e, t) {
  const n = this || Zr, r = t || n, o = mt.from(r.headers);
  let s = r.data;
  return A.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Cf(e) {
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
function Rf(e, t, n) {
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
    const p = c && u - c;
    return p ? Math.round(h * 1e3 / p) : void 0;
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
const Ds = (e, t, n = 3) => {
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
}, Pl = (e) => (...t) => A.asap(() => e(...t)), b_ = ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ot.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ot.origin),
  ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)
) : () => !0, y_ = ot.hasStandardBrowserEnv ? (
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
function v_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function E_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const w_ = /^https?:(?!\/\/)/i, S_ = /[\t\n\r]/g;
function A_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function T_(e) {
  return A_(e).replace(S_, "");
}
function Nl(e, t) {
  if (typeof e == "string" && w_.test(T_(e)))
    throw new ne(
      'Invalid URL: missing "//" after protocol',
      ne.ERR_INVALID_URL,
      t
    );
}
function Lf(e, t, n, r) {
  Nl(t, r);
  let o = !v_(t);
  return e && (o || n === !1) ? (Nl(e, r), E_(e, t)) : t;
}
const Ml = (e) => e instanceof mt ? { ...e } : e;
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
    const h = A.hasOwnProp(u, f) ? u[f] : o, p = A.hasOwnProp(e, f) ? e[f] : void 0, w = A.hasOwnProp(t, f) ? t[f] : void 0, S = h(p, w, f);
    A.isUndefined(S) && h !== l || (n[f] = S);
  }), A.hasOwnProp(t, "validateStatus") && A.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (A.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
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
function If(e) {
  const t = $n({}, e), n = (h) => A.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let i = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = i = mt.from(i), t.url = Af(
    Lf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const h = A.getSafeProp(l, "username") || "", p = A.getSafeProp(l, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (p ? R_(p) : ""))
      );
    } catch (w) {
      throw ne.from(w, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (A.isFormData(r) && (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv || A.isReactNative(r) ? i.setContentType(void 0) : A.isFunction(r.getHeaders) && C_(i, r.getHeaders(), n("formDataHeaderPolicy"))), ot.hasStandardBrowserEnv && (A.isFunction(o) && (o = o(t)), o === !0 || o == null && b_(t.url))) {
    const p = s && a && y_.read(a);
    p && i.set(s, p);
  }
  return t;
}
const L_ = typeof XMLHttpRequest < "u", I_ = L_ && function(e) {
  return new Promise(function(n, r) {
    const o = If(e);
    let s = o.data;
    const a = mt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = o, c, f, h, p, w;
    function S() {
      p && p(), w && w(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let T = new XMLHttpRequest();
    T.open(o.method.toUpperCase(), o.url, !0), T.timeout = o.timeout;
    function v() {
      if (!T)
        return;
      const y = mt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), I = {
        data: !i || i === "text" || i === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: y,
        config: e,
        request: T
      };
      Rf(
        function(D) {
          n(D), S();
        },
        function(D) {
          r(D), S();
        },
        I
      ), T = null;
    }
    "onloadend" in T ? T.onloadend = v : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.startsWith("file:")) || setTimeout(v);
    }, T.onabort = function() {
      T && (r(new ne("Request aborted", ne.ECONNABORTED, e, T)), S(), T = null);
    }, T.onerror = function(E) {
      const I = E && E.message ? E.message : "Network Error", C = new ne(I, ne.ERR_NETWORK, e, T);
      C.event = E || null, r(C), S(), T = null;
    }, T.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || Wa;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(
        new ne(
          E,
          I.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          e,
          T
        )
      ), S(), T = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in T && A.forEach(yf(a), function(E, I) {
      T.setRequestHeader(I, E);
    }), A.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials), i && i !== "json" && (T.responseType = o.responseType), u && ([h, w] = Ds(u, !0), T.addEventListener("progress", h)), l && T.upload && ([f, p] = Ds(l), T.upload.addEventListener("progress", f), T.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (c = (y) => {
      T && (r(!y || y.type ? new es(null, e, T) : y), T.abort(), S(), T = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const x = p_(o.url);
    if (x && !ot.protocols.includes(x)) {
      r(
        new ne(
          "Unsupported protocol " + x + ":",
          ne.ERR_BAD_REQUEST,
          e
        )
      ), S();
      return;
    }
    T.send(s || null);
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
}, Dl = (e, t, n, r) => {
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
}, Fs = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, M_ = (e, t, n) => t + 2 < n && Fs(e.charCodeAt(t + 1)) && Fs(e.charCodeAt(t + 2));
function D_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const i = r.length;
    for (let p = 0; p < i; p++)
      if (r.charCodeAt(p) === 37 && p + 2 < i) {
        const w = r.charCodeAt(p + 1), S = r.charCodeAt(p + 2);
        Fs(w) && Fs(S) && (a -= 2, p += 2);
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
const za = "1.18.1", Fl = 64 * 1024, { isFunction: us } = A, F_ = (e) => encodeURIComponent(e).replace(
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
}, U_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, $_ = (e) => {
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
  }), p = u && c && $l(() => A.isReadableStream(new a("").body)), w = {
    stream: p && ((v) => v.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !w[v] && (w[v] = (x, y) => {
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
  const S = async (v) => {
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
    return y ?? S(x);
  };
  return async (v) => {
    let {
      url: x,
      method: y,
      data: E,
      signal: I,
      cancelToken: C,
      timeout: D,
      onDownloadProgress: N,
      onUploadProgress: O,
      responseType: j,
      headers: te,
      withCredentials: U = "same-origin",
      fetchOptions: X,
      maxContentLength: ie,
      maxBodyLength: de
    } = If(v);
    const ae = A.isNumber(ie) && ie > -1, V = A.isNumber(de) && de > -1, Z = (pe) => A.hasOwnProp(v, pe) ? v[pe] : void 0;
    let Ee = o || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let Re = k_(
      [I, C && C.toAbortSignal()],
      D
    ), fe = null;
    const we = Re && Re.unsubscribe && (() => {
      Re.unsubscribe();
    });
    let Ue, Xe = null;
    const We = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      v,
      fe
    );
    try {
      let pe;
      const W = Z("auth");
      if (W) {
        const L = A.getSafeProp(W, "username") || "", M = A.getSafeProp(W, "password") || "";
        pe = {
          username: L,
          password: M
        };
      }
      if (U_(x)) {
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
        "Basic " + btoa(F_((pe.username || "") + ":" + (pe.password || "")))
      )), ae && typeof x == "string" && x.startsWith("data:") && D_(x) > ie)
        throw new ne(
          "maxContentLength size of " + ie + " exceeded",
          ne.ERR_BAD_RESPONSE,
          v,
          fe
        );
      if (V && y !== "get" && y !== "head") {
        const L = await S(E);
        if (typeof L == "number" && isFinite(L) && (Ue = L, L > de))
          throw We();
      }
      const re = V && (A.isReadableStream(E) || A.isStream(E)), oe = (L, M, Y) => Dl(
        L,
        Fl,
        (z) => {
          if (V && z > de)
            throw Xe = We();
          M && M(z);
        },
        Y
      );
      if (h && y !== "get" && y !== "head" && (O || re)) {
        if (Ue = Ue ?? await T(te, E), Ue !== 0 || re) {
          let L = new s(x, {
            method: "POST",
            body: E,
            duplex: "half"
          }), M;
          if (A.isFormData(E) && (M = L.headers.get("content-type")) && te.setContentType(M), L.body) {
            const [Y, z] = O && xl(
              Ue,
              Ds(Pl(O))
            ) || [];
            E = oe(L.body, Y, z);
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
      const Ce = l && "credentials" in s.prototype;
      if (A.isFormData(E)) {
        const L = te.getContentType();
        L && /^multipart\/form-data/i.test(L) && !/boundary=/i.test(L) && te.delete("content-type");
      }
      te.set("User-Agent", "axios/" + za, !1);
      const Ke = {
        ...X,
        signal: Re,
        method: y.toUpperCase(),
        headers: yf(te.normalize()),
        body: E,
        duplex: "half",
        credentials: Ce ? U : void 0
      };
      fe = l && new s(x, Ke);
      let g = await (l ? Ee(fe, X) : Ee(x, Ke));
      const _ = mt.from(g.headers);
      if (ae) {
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
      if (p && g.body && (N || ae || b && we)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((R) => {
          L[R] = g[R];
        });
        const M = A.toFiniteNumber(_.getContentLength()), [Y, z] = N && xl(
          M,
          Ds(Pl(N), !0)
        ) || [];
        let d = 0;
        const m = (R) => {
          if (ae && (d = R, d > ie))
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
            z && z(), we && we();
          }),
          L
        );
      }
      j = j || "text";
      let P = await w[A.findKey(w, j) || "text"](
        g,
        v
      );
      if (ae && !p && !b) {
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
        Rf(L, M, {
          data: P,
          headers: mt.from(g.headers),
          status: g.status,
          statusText: g.statusText,
          config: v,
          request: fe
        });
      });
    } catch (pe) {
      if (we && we(), Re && Re.aborted && Re.reason instanceof ne) {
        const W = Re.reason;
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
}, H_ = /* @__PURE__ */ new Map(), kf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let a = s.length, i = a, l, u, c = H_;
  for (; i--; )
    l = s[i], u = c.get(l), u === void 0 && c.set(l, u = i ? /* @__PURE__ */ new Map() : $_(t)), c = u;
  return u;
};
kf();
const Ga = {
  http: Z0,
  xhr: I_,
  fetch: {
    get: kf
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
const Hl = (e) => `- ${e}`, V_ = (e) => A.isFunction(e) || e === null || e === !1;
function j_(e, t) {
  e = A.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !V_(r) && (o = Ga[(i = String(r)).toLowerCase()], o === void 0))
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
const xf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: j_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ga
};
function Po(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new es(null, e);
}
function Vl(e) {
  return Po(e), e.headers = mt.from(e.headers), e.data = xo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xf.getAdapter(e.adapter || Zr.adapter, e)(e).then(
    function(r) {
      Po(e), e.response = r;
      try {
        r.data = xo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = mt.from(r.headers), r;
    },
    function(r) {
      if (!Cf(r) && (Po(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = xo.call(
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
const ao = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ao[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const jl = {};
ao.transitional = function(t, n, r) {
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
ao.spelling = function(t) {
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
const ws = {
  assertOptions: B_,
  validators: ao
}, lt = ws.validators;
let Dn = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $n(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && ws.assertOptions(
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
    } : ws.assertOptions(
      o,
      {
        encode: lt.function,
        serialize: lt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ws.assertOptions(
      n,
      {
        baseUrl: lt.spelling("baseURL"),
        withXsrfToken: lt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && A.merge(s.common, s[n.method]);
    s && A.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (w) => {
      delete s[w];
    }), n.headers = mt.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(S) {
      if (typeof S.runWhen == "function" && S.runWhen(n) === !1)
        return;
      l = l && S.synchronous;
      const T = n.transitional || Wa;
      T && T.legacyInterceptorReqResOrdering ? i.unshift(S.fulfilled, S.rejected) : i.push(S.fulfilled, S.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(S) {
      u.push(S.fulfilled, S.rejected);
    });
    let c, f = 0, h;
    if (!l) {
      const w = [Vl.bind(this), void 0];
      for (w.unshift(...i), w.push(...u), h = w.length, c = Promise.resolve(n); f < h; )
        c = c.then(w[f++], w[f++]);
      return c;
    }
    h = i.length;
    let p = n;
    for (; f < h; ) {
      const w = i[f++], S = i[f++];
      try {
        p = w(p);
      } catch (T) {
        S.call(this, T);
        break;
      }
    }
    try {
      c = Vl.call(this, p);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = $n(this.defaults, t);
    const n = Lf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Af(n, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  Dn.prototype[t] = function(n, r) {
    return this.request(
      $n(r || {}, {
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
let W_ = class Pf {
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
      token: new Pf(function(o) {
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
function z_(e) {
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
function Nf(e) {
  const t = new Dn(e), n = uf(Dn.prototype.request, t);
  return A.extend(n, Dn.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Nf($n(e, o));
  }, n;
}
const Be = Nf(Zr);
Be.Axios = Dn;
Be.CanceledError = es;
Be.CancelToken = W_;
Be.isCancel = Cf;
Be.VERSION = za;
Be.toFormData = oo;
Be.AxiosError = ne;
Be.Cancel = Be.CanceledError;
Be.all = function(t) {
  return Promise.all(t);
};
Be.spread = K_;
Be.isAxiosError = z_;
Be.mergeConfig = $n;
Be.AxiosHeaders = mt;
Be.formToJSON = (e) => Of(A.isHTMLForm(e) ? new FormData(e) : e);
Be.getAdapter = xf.getAdapter;
Be.HttpStatusCode = ca;
Be.default = Be;
const {
  Axios: iv,
  AxiosError: lv,
  CanceledError: cv,
  isCancel: uv,
  CancelToken: fv,
  VERSION: dv,
  all: mv,
  Cancel: hv,
  isAxiosError: pv,
  spread: gv,
  toFormData: _v,
  AxiosHeaders: bv,
  HttpStatusCode: yv,
  formToJSON: vv,
  getAdapter: Ev,
  mergeConfig: wv,
  create: Sv
} = Be, G_ = "X-Admin-UI-Request", q_ = "X-User-UI-Request";
function Bl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Mf(e) {
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
  const t = Mf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function X_(e) {
  const t = Y_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function J_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return Bl(Mf(e)) || Bl(n);
}
function Q_(e) {
  return X_(e);
}
const Wl = "/api/v1", Z_ = e1();
function Df(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function e1(e) {
  const n = (String(Wl).trim() || Wl).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Df(n);
}
function Us() {
  return Z_;
}
function Ff(e) {
  const t = Df(e);
  try {
    return `${typeof window > "u" ? new URL(Us()).origin : new URL(Us(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const qa = "auth_token", t1 = "auth_user", io = "refresh_token", Ya = "token_expires_at", n1 = "sub2api-auth-token-refresh", Kl = 3e4, Uf = 1e3, r1 = 1e3, s1 = 25;
let yr = null;
function Xa() {
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
  const e = localStorage.getItem(io);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(qa),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Ya)),
    userID: Xa()
  };
}
function a1(e) {
  const t = localStorage.getItem(qa), n = localStorage.getItem(io), r = Number(localStorage.getItem(Ya));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Xa() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function $s(e, t) {
  const n = a1(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function i1(e, t, n = Date.now() + Uf) {
  for (; Date.now() < n; ) {
    const r = $s(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, s1));
  }
  return $s(e, t);
}
function l1(e) {
  localStorage.setItem(qa, e.access_token), localStorage.setItem(Ya, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(io, e.refresh_token);
}
async function c1(e, t, n = !1) {
  var o;
  const r = Date.now() + Kl + r1;
  try {
    const a = (await Be.post(
      `${Us()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Kl }
    )).data;
    if (a.code !== 0 || !a.data)
      throw new Error(a.message || "Token refresh failed");
    if (localStorage.getItem(io) !== e.refreshToken || Xa() !== e.userID) {
      const i = $s(e, t);
      if (i)
        return i;
      throw new Error("Session changed during token refresh");
    }
    return l1(a.data), a.data;
  } catch (s) {
    const a = (o = s.response) == null ? void 0 : o.status, i = typeof a == "number" && a >= 400 && a < 500, l = await i1(
      e,
      t,
      i && n ? r : Date.now() + Uf
    );
    if (l)
      return l;
    throw s;
  }
}
async function u1(e) {
  const t = o1(), n = async (r = !1) => {
    const o = $s(t, e.failedAccessToken);
    return o || c1(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(n1, () => n(!1)) : n(!0);
}
function $f(e = {}) {
  if (yr)
    return yr;
  const t = u1(e);
  yr = t;
  const n = () => {
    yr === t && (yr = null);
  };
  return t.then(n, n), t;
}
const Q = Be.create({
  baseURL: Us(),
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
Q.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = cf()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = f1()), e.headers) {
      const n = String(e.url || "");
      J_(n) && (e.headers[G_] = "1"), Q_(n) && (e.headers[q_] = "1");
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
        const l = localStorage.getItem("refresh_token"), u = a.includes("/auth/login") || a.includes("/auth/register") || a.includes("/auth/refresh");
        if (l && !u) {
          const w = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const S = t.headers, T = (S == null ? void 0 : S.Authorization) ?? (S == null ? void 0 : S.authorization), v = typeof T == "string" && T.startsWith("Bearer ") ? T.slice(7) : null, x = await $f({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${x.access_token}`), Q(t);
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
async function d1(e = !1) {
  const { data: t } = await Q.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
function Ja(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function lo(e) {
  localStorage.setItem("auth_token", e);
}
function co(e) {
  localStorage.setItem("refresh_token", e);
}
function uo(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function Hf() {
  return localStorage.getItem("auth_token");
}
function Vf() {
  return localStorage.getItem("refresh_token");
}
function m1() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function jf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function h1(e) {
  const { data: t } = await Q.post("/auth/login", e);
  return Ja(t) || (lo(t.access_token), t.refresh_token && co(t.refresh_token), t.expires_in && uo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function p1(e) {
  const { data: t } = await Q.post("/auth/login/2fa", e);
  return lo(t.access_token), t.refresh_token && co(t.refresh_token), t.expires_in && uo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function g1(e) {
  const { data: t } = await Q.post("/auth/register", e);
  return lo(t.access_token), t.refresh_token && co(t.refresh_token), t.expires_in && uo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function _1() {
  return Q.get("/auth/me");
}
async function b1() {
  const e = Vf();
  if (e)
    try {
      await Q.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  jf();
}
function Bf(e) {
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
async function A1() {
  return $f();
}
async function T1() {
  const { data: e } = await Q.post("/auth/revoke-all-sessions");
  return e;
}
function O1() {
  return Hf() !== null;
}
async function Wf() {
  const { data: e } = await Q.get("/settings/public");
  return e;
}
async function C1(e) {
  const { data: t } = await Q.post("/auth/send-verify-code", e);
  return t;
}
async function R1(e) {
  const { data: t } = await Q.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function L1(e) {
  const { data: t } = await Q.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function I1(e) {
  const { data: t } = await Q.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function k1(e) {
  const { data: t } = await Q.post("/auth/forgot-password", e);
  return t;
}
async function x1(e) {
  const { data: t } = await Q.post("/auth/reset-password", e);
  return t;
}
async function P1(e, t, n) {
  return Kf(e, t, n);
}
async function N1(e, t, n) {
  return zf(e, t, n);
}
async function M1(e, t, n) {
  return Gf(e, t, n);
}
async function fo(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await Q.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...Bf(n)
    }
  );
  return s;
}
async function Kf(e, t, n) {
  return fo("linuxdo", e, t, n);
}
async function zf(e, t, n) {
  return fo("oidc", e, t, n);
}
async function Gf(e, t, n) {
  return fo("wechat", e, t, n);
}
async function D1(e, t, n) {
  return fo("dingtalk", e, t, n);
}
async function qf(e) {
  const { data: t } = await Q.post(
    "/auth/oauth/pending/exchange",
    Bf(e)
  );
  return t;
}
async function F1(e) {
  return qf(e);
}
const Bn = {
  login: h1,
  login2FA: p1,
  isTotp2FARequired: Ja,
  register: g1,
  getCurrentUser: _1,
  logout: b1,
  isAuthenticated: O1,
  setAuthToken: lo,
  setRefreshToken: co,
  setTokenExpiresAt: uo,
  getAuthToken: Hf,
  getRefreshToken: Vf,
  getTokenExpiresAt: m1,
  clearAuthToken: jf,
  getPublicSettings: Wf,
  sendVerifyCode: C1,
  sendPendingOAuthVerifyCode: R1,
  validatePromoCode: L1,
  validateInvitationCode: I1,
  forgotPassword: k1,
  resetPassword: x1,
  refreshToken: A1,
  revokeAllSessions: T1,
  getPendingOAuthBindLoginKind: E1,
  isPendingOAuthCreateAccountRequired: w1,
  hasPendingOAuthSuggestedProfile: S1,
  completePendingOAuthBindLogin: qf,
  createPendingLinuxDoOAuthAccount: Kf,
  createPendingOIDCOAuthAccount: zf,
  createPendingWeChatOAuthAccount: Gf,
  exchangePendingOAuthCompletion: F1,
  completeLinuxDoOAuthRegistration: P1,
  completeOIDCOAuthRegistration: N1,
  completeWeChatOAuthRegistration: M1,
  createPendingDingTalkOAuthAccount: D1
}, zl = "零一 API", Qa = /* @__PURE__ */ xa("app", () => {
  const e = J(!1), t = J(!1), n = J(0), r = J(!1), o = J([]), s = J(!1), a = J(!1), i = J(zl), l = J(""), u = J(""), c = J(""), f = J(""), h = J(""), p = J(null);
  let w = null, S = null, T = 0;
  const v = J(!1), x = J(!1), y = J(""), E = J(""), I = J(!1), C = J("source"), D = J(null);
  let N = 0;
  const O = _e(() => o.value.length > 0), j = _e(() => {
    var _;
    return ((_ = p.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
  }), te = J(0);
  function U() {
    e.value = !e.value;
  }
  function X(_) {
    e.value = _;
  }
  function ie() {
    t.value = !t.value;
  }
  function de(_) {
    t.value = _;
  }
  function ae(_) {
    _ ? te.value++ : te.value = Math.max(0, te.value - 1), r.value = te.value > 0;
  }
  function V(_, b, P) {
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
  function Z(_, b = 3e3) {
    return V("success", _, b);
  }
  function Ee(_, b = 5e3) {
    return V("error", _, b);
  }
  function Re(_, b = 3e3) {
    return V("info", _, b);
  }
  function fe(_, b = 4e3) {
    return V("warning", _, b);
  }
  function we(_) {
    const b = o.value.findIndex((P) => P.id === _);
    b !== -1 && o.value.splice(b, 1);
  }
  function Ue() {
    o.value = [];
  }
  async function Xe(_) {
    ae(!0);
    try {
      return await _();
    } finally {
      ae(!1);
    }
  }
  async function We(_, b) {
    ae(!0);
    try {
      return await _();
    } catch (P) {
      const L = b || P.message || er.global.t("common.unknownError");
      return Ee(L), null;
    } finally {
      ae(!1);
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
        has_update: I.value,
        build_type: C.value,
        release_info: D.value || void 0,
        cached: !0
      };
    if (x.value)
      return null;
    x.value = !0;
    try {
      const b = await d1(_);
      return y.value = b.current_version, E.value = b.latest_version, I.value = b.has_update, C.value = b.build_type || "source", D.value = b.release_info || null, v.value = !0, b;
    } catch (b) {
      return console.error("Failed to fetch version:", b), null;
    } finally {
      x.value = !1;
    }
  }
  function re() {
    v.value = !1, I.value = !1;
  }
  function oe(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), p.value = _, i.value = _.site_name || zl, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", h.value = _.doc_url || "", s.value = !0;
  }
  function Ce(_ = !1) {
    if (w)
      return _ && !S && (T += 1, S = w.then(() => Ce(!0)).finally(() => {
        S = null;
      })), _ ? S : w;
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
      P = Wf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), a.value = !1, Promise.resolve(null);
    }
    const L = P.then((M) => (b === T && oe(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      w === L && (w = null, a.value = !1);
    });
    return w = L, L;
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
    hasUpdate: I,
    buildType: C,
    releaseInfo: D,
    // Computed
    hasActiveToasts: O,
    backendModeEnabled: j,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: X,
    toggleMobileSidebar: ie,
    setMobileOpen: de,
    setLoading: ae,
    showToast: V,
    showSuccess: Z,
    showError: Ee,
    showInfo: Re,
    showWarning: fe,
    hideToast: we,
    clearAllToasts: Ue,
    withLoading: Xe,
    withLoadingAndError: We,
    reset: pe,
    // Version actions
    fetchVersion: W,
    clearVersionCache: re,
    // Public settings actions
    fetchPublicSettings: Ce,
    clearPublicSettingsCache: Ke,
    initFromInjectedConfig: g
  };
}), U1 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, $1 = { class: "p-4" }, H1 = { class: "flex items-start gap-3" }, V1 = { class: "mt-0.5 flex-shrink-0" }, j1 = { class: "min-w-0 flex-1" }, B1 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, W1 = ["onClick"], K1 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, z1 = /* @__PURE__ */ rn({
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
    return (l, u) => (ge(), gn(Ta, { to: "body" }, [
      H("div", U1, [
        ye(mh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: nr(() => [
            (ge(!0), Ae(He, null, dn(n.value, (c) => (ge(), Ae("div", {
              key: c.id,
              class: Ge([
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
                      class: Ge(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  H("div", j1, [
                    c.title ? (ge(), Ae("p", B1, ue(c.title), 1)) : et("", !0),
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
                  ], 8, W1)
                ])
              ]),
              c.duration ? (ge(), Ae("div", K1, [
                H("div", {
                  class: Ge(["h-full toast-progress", a(c.type)]),
                  style: lr({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : et("", !0)
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
}, G1 = /* @__PURE__ */ Za(z1, [["__scopeId", "data-v-fc5fa96e"]]), q1 = { class: "modal-header" }, Y1 = {
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
    const r = `modal-title-${++n}`, o = J(null), s = J(null);
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
          if (a = document.activeElement, document.body.classList.add("modal-open"), await Jn(), s.value && (s.value.scrollTop = 0), o.value) {
            const w = o.value.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            w == null || w.focus();
          }
        } else
          document.body.classList.remove("modal-open"), a && typeof a.focus == "function" && a.focus(), a = null;
      },
      { immediate: !0 }
    ), cr(() => {
      document.addEventListener("keydown", h);
    }), Gr(() => {
      document.removeEventListener("keydown", h), document.body.classList.remove("modal-open");
    }), (p, w) => (ge(), gn(Ta, { to: "body" }, [
      ye(yu, { name: "modal" }, {
        default: nr(() => [
          e.show ? (ge(), Ae("div", {
            key: 0,
            class: "modal-overlay",
            style: lr(u.value),
            "aria-labelledby": r,
            role: "dialog",
            "aria-modal": "true",
            onClick: Ze(f, ["self"])
          }, [
            H("div", {
              ref_key: "dialogRef",
              ref: o,
              class: Ge(["modal-content", "base-dialog-surface", "console-skin-dialog", c.value, e.panelClass]),
              onClick: w[1] || (w[1] = Ze(() => {
              }, ["stop"]))
            }, [
              H("div", q1, [
                H("h3", {
                  id: r,
                  class: "modal-title"
                }, ue(e.title), 1),
                e.showCloseButton ? (ge(), Ae("button", {
                  key: 0,
                  onClick: w[0] || (w[0] = (S) => l("close")),
                  class: "-mr-2 rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2 dark:text-dark-500 dark:hover:bg-dark-700 dark:hover:text-dark-300 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-dark-900",
                  "aria-label": "Close modal"
                }, [
                  ye(ze, {
                    name: "x",
                    size: "md"
                  })
                ])) : et("", !0)
              ]),
              H("div", {
                ref_key: "modalBodyRef",
                ref: s,
                class: "modal-body"
              }, [
                Rs(p.$slots, "default")
              ], 512),
              p.$slots.footer ? (ge(), Ae("div", Y1, [
                Rs(p.$slots, "footer")
              ])) : et("", !0)
            ], 2)
          ], 4)) : et("", !0)
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
}, No = 8, ob = 200, ab = 300, ib = /* @__PURE__ */ rn({
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
    const { t: n } = Xr(), r = `select-${Math.random().toString(36).substring(2, 9)}`, o = e, s = t, a = J(!1), i = J(""), l = J(-1), u = J(null), c = J(null), f = J(null), h = J(null), p = J(null), w = J("bottom"), S = J(null), T = _e(() => o.placeholder ?? n("common.selectOption")), v = _e(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), x = _e(() => o.emptyText ?? n("common.noOptionsFound"));
    let y = null;
    const E = _e(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), I = _e(() => {
      if (!S.value) return {};
      const W = S.value, re = Math.max(No, window.innerWidth - No), oe = Math.min(
        Math.max(No, W.left),
        re
      ), Ce = Math.max(0, re - oe), Ke = Math.max(ob, W.width), g = Math.min(Ke, Ce), _ = {
        position: "fixed",
        left: `${oe}px`,
        minWidth: `${g}px`,
        maxWidth: `${Ce}px`,
        zIndex: "100000020"
      };
      return w.value === "top" ? _.bottom = `${window.innerHeight - W.top + 4}px` : _.top = `${W.bottom + 4}px`, _;
    }), C = (W) => typeof W == "object" && W !== null ? W[o.valueKey] : W, D = (W) => String(typeof W == "object" && W !== null ? W[o.labelKey] ?? "" : W ?? ""), N = (W) => typeof W == "object" && W !== null ? !!W.disabled : !1, O = (W) => typeof W == "object" && W !== null ? W.kind === "group" : !1, j = _e(() => o.options.find((W) => C(W) === o.modelValue) || null), te = _e(() => j.value ? D(j.value) : o.creatable && o.modelValue ? String(o.modelValue) : T.value), U = _e(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), X = _e(() => {
      let W = o.options;
      if (E.value && i.value && !o.remote) {
        const re = i.value.toLowerCase();
        if (W = W.filter((oe) => !!(D(oe).toLowerCase().includes(re) || oe.description && String(oe.description).toLowerCase().includes(re))), o.creatable && i.value.trim()) {
          const oe = i.value.trim(), Ce = o.creatablePrefix || n("common.search");
          W = [{ [o.valueKey]: oe, [o.labelKey]: `${Ce} "${oe}"`, _creatable: !0 }, ...W];
        }
      }
      return W;
    }), ie = (W) => C(W) === o.modelValue, de = (W) => {
      const re = X.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Ce = (W + oe) % re.length;
        if (!N(re[Ce])) return Ce;
      }
      return -1;
    }, ae = (W) => {
      const re = X.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Ce = (W - oe + re.length) % re.length;
        if (!N(re[Ce])) return Ce;
      }
      return -1;
    }, V = (W, re) => {
      N(W) || O(W) || (l.value = re);
    }, Z = () => {
      u.value && (S.value = u.value.getBoundingClientRect());
    }, Ee = () => {
      u.value && (Z(), Jn(() => {
        if (!h.value || !S.value) return;
        const W = h.value.offsetHeight || 240, re = window.innerHeight - S.value.bottom, oe = S.value.top;
        re < W && oe > W ? w.value = "top" : w.value = "bottom";
      }));
    }, Re = () => {
      o.disabled || (a.value = !a.value);
    };
    yt(a, (W) => {
      if (W) {
        if (Ee(), X.value.length === 0)
          l.value = -1;
        else {
          const re = X.value.findIndex(ie), oe = re >= 0 ? re : 0;
          l.value = N(X.value[oe]) ? de(oe + 1) : oe;
        }
        E.value && Jn(() => {
          var re;
          return (re = f.value) == null ? void 0 : re.focus();
        }), window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Ee);
      } else
        i.value = "", l.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", Z, { capture: !0 }), window.removeEventListener("resize", Ee);
    }), yt(i, (W) => {
      !o.remote || !a.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, s("search", W.trim());
      }, ab));
    });
    const fe = (W) => {
      var oe;
      const re = C(W) ?? null;
      s("update:modelValue", re), s("change", re, W), a.value = !1, (oe = c.value) == null || oe.focus();
    }, we = () => {
      o.disabled || (s("update:modelValue", null), s("change", null, null));
    }, Ue = () => {
      a.value || (a.value = !0);
    }, Xe = (W) => {
      var re;
      switch (W.key) {
        case "ArrowDown":
          W.preventDefault(), l.value = de(l.value + 1), l.value >= 0 && We();
          break;
        case "ArrowUp":
          W.preventDefault(), l.value = ae(l.value - 1), l.value >= 0 && We();
          break;
        case "Enter":
          if (W.preventDefault(), l.value >= 0 && l.value < X.value.length) {
            const oe = X.value[l.value];
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
      Jn(() => {
        const W = p.value;
        if (!W) return;
        const re = W.children[l.value];
        re && (re.offsetTop < W.scrollTop ? W.scrollTop = re.offsetTop : re.offsetTop + re.offsetHeight > W.scrollTop + W.offsetHeight && (W.scrollTop = re.offsetTop + re.offsetHeight - W.offsetHeight));
      });
    }, pe = (W) => {
      var Ke;
      const re = W.target, oe = !!re.closest(`.${r}`), Ce = (Ke = u.value) == null ? void 0 : Ke.contains(re);
      !oe && !Ce && a.value && (a.value = !1);
    };
    return cr(() => {
      document.addEventListener("click", pe);
    }), Gr(() => {
      document.removeEventListener("click", pe), window.removeEventListener("scroll", Z, { capture: !0 }), window.removeEventListener("resize", Ee), y && (clearTimeout(y), y = null);
    }), (W, re) => (ge(), Ae("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: u
    }, [
      H("button", {
        ref_key: "triggerRef",
        ref: c,
        type: "button",
        onClick: Re,
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
          Rr(Ze(Ue, ["prevent"]), ["down"]),
          Rr(Ze(Ue, ["prevent"]), ["up"])
        ]
      }, [
        H("span", Q1, [
          Rs(W.$slots, "selected", { option: j.value }, () => [
            Gn(ue(te.value), 1)
          ], !0)
        ]),
        e.clearable && U.value && !e.disabled ? (ge(), Ae("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Ze(we, ["stop"]),
          onMousedown: re[0] || (re[0] = Ze(() => {
          }, ["stop"])),
          onKeydown: Rr(Ze(we, ["stop", "prevent"]), ["enter"])
        }, [
          ye(ze, {
            name: "x",
            size: "sm"
          })
        ], 40, Z1)) : et("", !0),
        H("span", eb, [
          ye(ze, {
            name: "chevronDown",
            size: "md",
            class: Ge(["transition-transform duration-200", a.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, J1),
      (ge(), gn(Ta, { to: "body" }, [
        ye(yu, { name: "select-dropdown" }, {
          default: nr(() => [
            a.value ? (ge(), Ae("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: Ge(["select-dropdown-portal console-skin-select-menu", [r]]),
              style: lr(I.value),
              role: "listbox",
              onClick: re[3] || (re[3] = Ze(() => {
              }, ["stop"])),
              onMousedown: re[4] || (re[4] = Ze(() => {
              }, ["stop"])),
              onKeydown: Xe
            }, [
              E.value ? (ge(), Ae("div", tb, [
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
                  onClick: re[2] || (re[2] = Ze(() => {
                  }, ["stop"]))
                }, null, 8, nb), [
                  [qo, i.value]
                ])
              ])) : et("", !0),
              H("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: p
              }, [
                (ge(!0), Ae(He, null, dn(X.value, (oe, Ce) => (ge(), Ae("div", {
                  key: `${typeof C(oe)}:${String(C(oe) ?? "")}`,
                  role: "option",
                  "aria-selected": ie(oe),
                  "aria-disabled": N(oe),
                  onClick: Ze((Ke) => !N(oe) && fe(oe), ["stop"]),
                  onMouseenter: (Ke) => V(oe, Ce),
                  class: Ge([
                    "select-option",
                    O(oe) && "select-option-group",
                    ie(oe) && "select-option-selected",
                    N(oe) && !O(oe) && "select-option-disabled",
                    l.value === Ce && !O(oe) && "select-option-focused"
                  ])
                }, [
                  Rs(W.$slots, "option", {
                    option: oe,
                    selected: ie(oe)
                  }, () => [
                    oe._creatable ? (ge(), gn(ze, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : et("", !0),
                    H("span", {
                      class: Ge(["select-option-label", oe._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, ue(D(oe)), 3),
                    ie(oe) ? (ge(), gn(ze, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : et("", !0)
                  ], !0)
                ], 42, rb))), 128)),
                X.value.length === 0 ? (ge(), Ae("div", sb, ue(o.loading ? le(n)("common.loading") : x.value), 1)) : et("", !0)
              ], 512)
            ], 38)) : et("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), fs = /* @__PURE__ */ Za(ib, [["__scopeId", "data-v-fbc717eb"]]);
async function Yf(e) {
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
  const n = await fetch(Ff("/v1/models"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${e}`
    },
    signal: t.signal
  });
  if (!n.ok) throw await Yf(n);
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
    Ff(s ? "/v1/images/edits" : "/v1/images/generations"),
    { method: "POST", headers: a, body: i, signal: n.signal }
  );
  if (!l.ok) throw await Yf(l);
  return l.json();
}
const fb = "zero-one-image-generation", Et = "history", ua = 20;
function ei() {
  return typeof indexedDB > "u" ? Promise.reject(new Error("IndexedDB is not available")) : new Promise((e, t) => {
    const n = indexedDB.open(fb, 1);
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
function Xf(e, t) {
  return e.userId === t && Array.isArray(e.images) && e.images.length > 0;
}
async function db(e) {
  const t = await ei();
  try {
    return (await ti(
      t.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((r) => Xf(r, e)).sort((r, o) => o.createdAt - r.createdAt).slice(0, ua);
  } finally {
    t.close();
  }
}
async function mb(e, t) {
  const n = await ei();
  try {
    const r = n.transaction(Et, "readwrite");
    r.objectStore(Et).put({ ...t, userId: e }), await fa(r);
    const s = (await ti(
      n.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((i) => Xf(i, e)).sort((i, l) => l.createdAt - i.createdAt), a = s.slice(ua);
    if (a.length > 0) {
      const i = n.transaction(Et, "readwrite");
      a.forEach((l) => i.objectStore(Et).delete(l.id)), await fa(i);
    }
    return s.slice(0, ua);
  } finally {
    n.close();
  }
}
async function hb(e) {
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
async function pb(e = 1, t = 10, n, r) {
  const { data: o } = await Q.get("/keys", {
    params: { page: e, page_size: t, ...n },
    signal: r == null ? void 0 : r.signal
  });
  return o;
}
async function gb(e) {
  const { data: t } = await Q.get(`/keys/${e}`);
  return t;
}
async function _b(e, t, n, r, o, s, a, i) {
  const l = { name: e };
  t !== void 0 && (l.group_id = t), n && (l.custom_key = n), r && r.length > 0 && (l.ip_whitelist = r), o && o.length > 0 && (l.ip_blacklist = o), s !== void 0 && s > 0 && (l.quota = s), a !== void 0 && a > 0 && (l.expires_in_days = a), i != null && i.rate_limit_5h && i.rate_limit_5h > 0 && (l.rate_limit_5h = i.rate_limit_5h), i != null && i.rate_limit_1d && i.rate_limit_1d > 0 && (l.rate_limit_1d = i.rate_limit_1d), i != null && i.rate_limit_7d && i.rate_limit_7d > 0 && (l.rate_limit_7d = i.rate_limit_7d);
  const { data: u } = await Q.post("/keys", l);
  return u;
}
async function Jf(e, t) {
  const { data: n } = await Q.put(`/keys/${e}`, t);
  return n;
}
async function bb(e) {
  const { data: t } = await Q.delete(`/keys/${e}`);
  return t;
}
async function yb(e, t) {
  return Jf(e, { status: t });
}
const vb = {
  list: pb,
  getById: gb,
  create: _b,
  update: Jf,
  delete: bb,
  toggleStatus: yb
};
function Qf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function Ir(e) {
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
function Eb(e) {
  const t = { ...e };
  t.challenge = Ir(String(t.challenge));
  const n = { ...t.user };
  return n.id = Ir(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: Ir(String(r.id))
  }))), t;
}
function wb(e) {
  const t = { ...e };
  return t.challenge = Ir(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: Ir(String(n.id))
  }))), t;
}
function Sb(e) {
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
function Ab(e) {
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
async function Tb(e) {
  Qf();
  const { data: t } = e ? await Q.post("/auth/passkey/login/begin", e) : await Q.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: wb(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await Q.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: Ab(n)
  });
  return r;
}
async function Ob(e, t) {
  Qf();
  const { data: n } = await Q.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: Eb(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await Q.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: Sb(r)
    }
  );
  return o;
}
async function Cb() {
  const { data: e } = await Q.get("/user/passkeys");
  return e;
}
async function Rb(e, t) {
  await Q.patch(`/user/passkeys/${e}`, { name: t });
}
async function Lb(e, t) {
  await Q.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Ib = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Tb,
  register: Ob,
  list: Cb,
  rename: Rb,
  remove: Lb
};
async function kb() {
  const { data: e } = await Q.get("/admin/settings");
  return e;
}
async function xb() {
  const { data: e } = await Q.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return e;
}
async function Pb(e) {
  const { data: t } = await Q.put(
    "/admin/settings",
    e
  );
  return t;
}
async function Nb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/test-smtp",
    e
  );
  return t;
}
async function Mb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/send-test-email",
    e
  );
  return t;
}
async function Db() {
  const { data: e } = await Q.get(
    "/admin/settings/email-templates"
  );
  return e;
}
async function Fb(e, t) {
  const { data: n } = await Q.get(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
  );
  return n;
}
async function Ub(e, t, n) {
  const { data: r } = await Q.put(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,
    n
  );
  return r;
}
async function $b(e, t) {
  const { data: n } = await Q.post(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}/restore-official`
  );
  return n;
}
async function Hb(e) {
  const { data: t } = await Q.post(
    "/admin/settings/email-template-preview",
    e
  );
  return t;
}
async function Vb() {
  const { data: e } = await Q.get(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function jb() {
  const { data: e } = await Q.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return e;
}
async function Bb() {
  const { data: e } = await Q.delete(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Wb() {
  const { data: e } = await Q.get(
    "/admin/settings/overload-cooldown"
  );
  return e;
}
async function Kb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/overload-cooldown",
    e
  );
  return t;
}
async function zb() {
  const { data: e } = await Q.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return e;
}
async function Gb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/rate-limit-429-cooldown",
    e
  );
  return t;
}
async function qb() {
  const { data: e } = await Q.get(
    "/admin/settings/panel-rate-limit"
  );
  return e;
}
async function Yb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/panel-rate-limit",
    e
  );
  return t;
}
async function Xb() {
  const { data: e } = await Q.get(
    "/admin/settings/stream-timeout"
  );
  return e;
}
async function Jb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/stream-timeout",
    e
  );
  return t;
}
async function Qb() {
  const { data: e } = await Q.get(
    "/admin/settings/rectifier"
  );
  return e;
}
async function Zb(e) {
  const { data: t } = await Q.put(
    "/admin/settings/rectifier",
    e
  );
  return t;
}
async function ey() {
  const { data: e } = await Q.get(
    "/admin/settings/beta-policy"
  );
  return e;
}
async function ty(e) {
  const { data: t } = await Q.put(
    "/admin/settings/beta-policy",
    e
  );
  return t;
}
async function ny() {
  const { data: e } = await Q.get(
    "/admin/settings/web-search-emulation"
  );
  return e;
}
async function ry(e) {
  const { data: t } = await Q.put(
    "/admin/settings/web-search-emulation",
    e
  );
  return t;
}
async function sy(e) {
  const { data: t } = await Q.post(
    "/admin/settings/web-search-emulation/test",
    { query: e }
  );
  return t;
}
async function oy(e) {
  await Q.post(
    "/admin/settings/web-search-emulation/reset-usage",
    e
  );
}
const ay = {
  getSettings: kb,
  getNavigationSettings: xb,
  updateSettings: Pb,
  testSmtpConnection: Nb,
  sendTestEmail: Mb,
  getEmailTemplates: Db,
  getEmailTemplate: Fb,
  updateEmailTemplate: Ub,
  restoreOfficialEmailTemplate: $b,
  previewEmailTemplate: Hb,
  getAdminApiKey: Vb,
  regenerateAdminApiKey: jb,
  deleteAdminApiKey: Bb,
  getOverloadCooldownSettings: Wb,
  updateOverloadCooldownSettings: Kb,
  getRateLimit429CooldownSettings: zb,
  updateRateLimit429CooldownSettings: Gb,
  getPanelRateLimitSettings: qb,
  updatePanelRateLimitSettings: Yb,
  getStreamTimeoutSettings: Xb,
  updateStreamTimeoutSettings: Jb,
  getRectifierSettings: Qb,
  updateRectifierSettings: Zb,
  getBetaPolicySettings: ey,
  updateBetaPolicySettings: ty,
  getWebSearchEmulationConfig: ny,
  updateWebSearchEmulationConfig: ry,
  testWebSearchEmulation: sy,
  resetWebSearchUsage: oy
}, iy = {
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
}, Gl = {
  settings: ay,
  payment: iy
}, ds = "auth_token", Mo = "auth_user", ms = "refresh_token", hs = "token_expires_at", kr = "pending_auth_session", ly = 60 * 1e3, cy = 120 * 1e3;
function uy(e) {
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
      token_field: uy(t == null ? void 0 : t.token_field),
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
function fy(e) {
  localStorage.setItem(kr, JSON.stringify(e));
}
function Yl() {
  localStorage.removeItem(kr);
}
const Kr = /* @__PURE__ */ xa("auth", () => {
  const e = J(null), t = J(null), n = J(null), r = J(null), o = J("standard"), s = J(null);
  let a = null, i = null;
  const l = _e(() => !!t.value && !!e.value), u = _e(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), c = _e(() => o.value === "simple"), f = _e(() => s.value !== null);
  function h(V, Z) {
    const { run_mode: Ee, ...Re } = V;
    return o.value = Z ?? (Ee === "simple" ? "simple" : "standard"), e.value = Re, localStorage.setItem(
      Mo,
      JSON.stringify({ ...Re, run_mode: o.value })
    ), e.value;
  }
  function p(V) {
    const Z = localStorage.getItem(ds), Ee = localStorage.getItem(Mo), Re = localStorage.getItem(ms), fe = localStorage.getItem(hs);
    if (s.value = ql(), Z && Ee)
      try {
        const we = JSON.parse(Ee);
        return t.value = Z, h(we, V), n.value = Re, r.value = fe ? parseInt(fe, 10) : null, !0;
      } catch (we) {
        console.error("Failed to parse saved user data:", we), ae({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function w(V) {
    o.value = V;
  }
  function S() {
    p() && (de().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), T(), n.value && r.value !== null && x(r.value));
  }
  function T() {
    v(), a = setInterval(() => {
      t.value && de().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, ly);
  }
  function v() {
    a && (clearInterval(a), a = null);
  }
  function x(V) {
    i && (clearTimeout(i), i = null);
    const Z = Date.now(), Ee = Math.max(0, V - Z - cy);
    if (Ee <= 0) {
      E();
      return;
    }
    i = setTimeout(() => {
      E();
    }, Ee);
  }
  function y(V) {
    const Z = Date.now() + V * 1e3;
    r.value = Z, localStorage.setItem(hs, String(Z)), x(Z);
  }
  async function E() {
    if (n.value)
      try {
        const V = await Bn.refreshToken();
        t.value = V.access_token, n.value = V.refresh_token, y(V.expires_in);
      } catch (V) {
        console.error("Token refresh failed:", V);
      }
  }
  function I() {
    i && (clearTimeout(i), i = null);
  }
  async function C(V) {
    try {
      const Z = await Bn.login(V);
      return Ja(Z) || O(Z), Z;
    } catch (Z) {
      throw ae({ preservePendingAuthSession: s.value !== null }), Z;
    }
  }
  async function D(V, Z) {
    try {
      const Ee = await Bn.login2FA({ temp_token: V, totp_code: Z });
      return O(Ee), e.value;
    } catch (Ee) {
      throw ae({ preservePendingAuthSession: s.value !== null }), Ee;
    }
  }
  async function N(V) {
    try {
      const Z = await Ib.login(V);
      return O(Z), e.value;
    } catch (Z) {
      throw ae({ preservePendingAuthSession: s.value !== null }), Z;
    }
  }
  function O(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(ms, V.refresh_token)), h(V.user), localStorage.setItem(ds, V.access_token), X(), T(), V.refresh_token && V.expires_in && y(V.expires_in);
  }
  async function j(V) {
    try {
      const Z = await Bn.register(V);
      return O(Z), e.value;
    } catch (Z) {
      throw ae({ preservePendingAuthSession: s.value !== null }), Z;
    }
  }
  async function te(V) {
    v(), I(), t.value = null, e.value = null, o.value = "standard", t.value = V, localStorage.setItem(ds, V);
    const Z = localStorage.getItem(ms), Ee = localStorage.getItem(hs);
    Z && (n.value = Z), Ee && (r.value = parseInt(Ee, 10));
    try {
      const Re = await de();
      return T(), Z && r.value !== null && x(r.value), X(), Re;
    } catch (Re) {
      throw ae({ preservePendingAuthSession: s.value !== null }), Re;
    }
  }
  function U(V) {
    if (s.value = V, V) {
      fy(V);
      return;
    }
    Yl();
  }
  function X() {
    U(null);
  }
  async function ie() {
    try {
      await Bn.logout();
    } catch (V) {
      console.warn("Logout API call failed, clearing local session anyway", V);
    } finally {
      ae();
    }
  }
  async function de() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const V = await Bn.getCurrentUser();
      return h(V.data);
    } catch (V) {
      throw V.status === 401 && ae({ preservePendingAuthSession: s.value !== null }), V;
    }
  }
  function ae(V) {
    if (v(), I(), t.value = null, n.value = null, r.value = null, e.value = null, o.value = "standard", localStorage.removeItem(ds), localStorage.removeItem(Mo), localStorage.removeItem(ms), localStorage.removeItem(hs), V != null && V.preservePendingAuthSession) {
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
    login: C,
    loginWithPasskey: N,
    login2FA: D,
    register: j,
    setToken: te,
    logout: ie,
    checkAuth: S,
    hydrateAuthSnapshot: p,
    setRunModeSnapshot: w,
    refreshUser: de,
    setPendingAuthSession: U,
    clearPendingAuthSession: X
  };
}), dy = 100;
function Xl(e) {
  return !e.isAuthenticated || !e.token || !e.user ? "" : `${e.user.id}:${e.user.role}:${e.token}`;
}
function my(e, t = {}) {
  const n = J(!1), r = J(!1), o = J([]);
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
    const w = ++a, S = new AbortController();
    l = S, r.value = !0;
    const T = (async () => {
      const v = [];
      let x = 1;
      for (; ; ) {
        const y = await vb.list(x, dy, {
          status: "active",
          sort_by: "created_at",
          sort_order: "desc"
        }, { signal: S.signal });
        if (w !== a || p !== s) return [];
        if (v.push(...(y.items || []).filter(e)), t.stopAfterFirst && v.length > 0 || x >= y.pages || (y.items || []).length === 0) break;
        x += 1;
      }
      return w !== a || p !== s ? [] : (o.value = v, n.value = !0, v);
    })().catch(() => (w === a && p === s && (o.value = [], n.value = !0), [])).finally(() => {
      i === T && (i = null, l = null, r.value = !1);
    });
    return i = T, T;
  }
  return function() {
    const h = Kr();
    return yt(
      () => Xl(h),
      (p) => {
        const w = n.value || i !== null || o.value.length > 0;
        u(p) && p && w && c();
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
function hy(e) {
  var t;
  return e.status === "active" && ((t = e.group) == null ? void 0 : t.allow_image_generation) === !0 && (e.group.platform === "openai" || e.group.platform === "grok");
}
const py = my(hy);
function gy() {
  const e = py();
  return {
    allowedImageKeys: e.allowedKeys,
    canUseImageGeneration: e.canAccess,
    imageGenerationAccessLoaded: e.loaded,
    imageGenerationAccessLoading: e.loading,
    refreshImageGenerationAccess: e.refresh
  };
}
const _y = /* @__PURE__ */ xa("adminSettings", () => {
  const e = Kr(), t = J(!1), n = J(!1), r = J(!0), o = J(!0), s = J("auto"), a = J(!1), i = J([]), l = J(null);
  let u = null, c = null, f = null, h = null, p = !1, w = 0, S = 0, T = 0, v = 0;
  function x() {
    v += 1, w += 1, S += 1, T += 1, u = c = null, f = h = null, t.value = n.value = p = !1, l.value = null, i.value = [], r.value = o.value = !0, s.value = "auto", a.value = !1;
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
        const X = v, ie = f.then(() => (h === ie && (h = null), X === v ? y(!0) : void 0)).finally(() => {
          h === ie && (h = null);
        });
        h = ie;
      }
      return j ? h : f;
    }
    if (p && !j) return Promise.resolve();
    const te = ++T, U = Gl.payment.getConfig().then((X) => {
      var ie;
      te === T && (a.value = ((ie = X.data) == null ? void 0 : ie.enabled) ?? !1, p = !0);
    }).catch((X) => {
      te === T && console.error("[adminSettings] Failed to fetch payment settings:", X);
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
        w += 1;
        const de = v, ae = u.then(() => (c === ae && (c = null), de === v ? E(!0) : void 0)).finally(() => {
          c === ae && (c = null);
        });
        c = ae;
      }
      return j ? c : u;
    }
    if (y(j), t.value && !j) return Promise.resolve();
    j && (w += 1), n.value = !0;
    const te = w, U = S, X = Gl.settings.getNavigationSettings().then((de) => {
      te === w && (U === S && (r.value = de.ops_monitoring_enabled ?? !0, o.value = de.ops_realtime_monitoring_enabled ?? !0, s.value = de.ops_query_mode_default || "auto"), l.value = {
        ...de,
        ops_monitoring_enabled: r.value,
        ops_realtime_monitoring_enabled: o.value,
        ops_query_mode_default: s.value
      }, i.value = Array.isArray(de.custom_menu_items) ? de.custom_menu_items : [], t.value = !0);
    }).catch((de) => {
      te === w && console.error("[adminSettings] Failed to fetch settings:", de);
    }).finally(() => {
      u === X && (u = null, n.value = !1);
    });
    return u = X, X;
  }
  function I(j) {
    S += 1, r.value = j, l.value && (l.value.ops_monitoring_enabled = j);
  }
  function C(j) {
    S += 1, o.value = j, l.value && (l.value.ops_realtime_monitoring_enabled = j);
  }
  function D(j) {
    T += 1, a.value = j, p = !0;
  }
  function N(j) {
    S += 1, s.value = j || "auto", l.value && (l.value.ops_query_mode_default = s.value);
  }
  const O = () => I(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", O), dc(() => {
    x(), typeof window < "u" && window.removeEventListener("ops-monitoring-disabled", O);
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
const by = /\b(Mobi|Android|iPhone|iPod|Windows Phone|webOS|BlackBerry|IEMobile)\b/i, yy = /\b(iPad|Tablet)\b/i;
function Jl(e, t) {
  var n;
  try {
    return ((n = e == null ? void 0 : e(t)) == null ? void 0 : n.matches) === !0;
  } catch {
    return !1;
  }
}
function vy(e = {}) {
  var c;
  const t = e.navigator;
  if (!t) return !1;
  if (((c = t.userAgentData) == null ? void 0 : c.mobile) === !0)
    return !0;
  const n = t.userAgent || "", r = t.maxTouchPoints ?? 0, o = t.platform === "MacIntel" && r > 1, s = by.test(n), a = yy.test(n) || o, i = Jl(e.matchMedia, "(pointer: coarse)"), l = Jl(e.matchMedia, "(hover: none)"), u = r > 0;
  return s || a || i && l && u;
}
function Ql() {
  return typeof navigator > "u" ? !1 : vy({
    navigator,
    matchMedia: typeof window < "u" ? window.matchMedia.bind(window) : void 0
  });
}
const Ey = "image-tutorial", wy = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function Sy(e) {
  return e.navigation_type !== "qr" && e.placement !== "header" && !!e.id.trim() && !!e.url.trim();
}
function Ay(e) {
  const t = (e == null ? void 0 : e.filter(Sy)) ?? [];
  return t.find((n) => n.id === Ey) ?? t.find((n) => wy.has(n.label.trim().toLowerCase()));
}
function Zl(e) {
  const t = Ay(e);
  return t ? `/custom/${encodeURIComponent(t.id)}` : "";
}
const Ty = { class: "online-image-module space-y-6" }, Oy = {
  class: "online-image-layout",
  "data-testid": "image-generation-form"
}, Cy = { class: "card space-y-5 p-5" }, Ry = { "data-testid": "api-key-row" }, Ly = { class: "input-label mb-1.5 block" }, Iy = { class: "api-key-control-row" }, ky = ["disabled"], xy = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Py = {
  key: 0,
  class: "mt-1 text-xs text-gray-400 dark:text-gray-500"
}, Ny = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "model-count-row"
}, My = {
  class: "input-label mb-1.5 block",
  "data-testid": "model-select-label"
}, Dy = { class: "input-label mb-1.5 block" }, Fy = { "data-testid": "size-control" }, Uy = { class: "input-label mb-1.5 block" }, $y = ["aria-label"], Hy = { class: "truncate" }, Vy = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "quality-format-row"
}, jy = { class: "input-label mb-1.5 block" }, By = { class: "input-label mb-1.5 block" }, Wy = {
  class: "space-y-2",
  "data-testid": "reference-images-panel"
}, Ky = { class: "flex flex-wrap items-center justify-between gap-3" }, zy = {
  for: "reference-image-input",
  class: "input-label"
}, Gy = ["onKeydown"], qy = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, Yy = ["src", "alt"], Xy = ["aria-label", "onClick"], Jy = { class: "mt-4 flex flex-wrap items-center gap-3 first:mt-0" }, Qy = { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, Zy = { class: "min-w-0 flex-1" }, e2 = { class: "text-sm font-medium text-gray-800 dark:text-gray-200" }, t2 = { class: "mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400" }, n2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, r2 = {
  key: 1,
  class: "text-xs text-red-500"
}, s2 = ["href", "aria-disabled", "tabindex", "title"], o2 = {
  class: "space-y-4",
  "data-testid": "right-column"
}, a2 = {
  class: "card space-y-4 p-5",
  "data-testid": "prompt-panel"
}, i2 = { class: "input-label mb-1.5 block" }, l2 = ["placeholder"], c2 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, u2 = ["disabled"], f2 = {
  class: "card p-5",
  "data-testid": "results-panel"
}, d2 = { class: "flex items-start justify-between gap-3" }, m2 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, h2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, p2 = {
  key: 0,
  class: "badge badge-gray"
}, g2 = {
  key: 0,
  class: "flex min-h-[360px] flex-col items-center justify-center py-8 text-center"
}, _2 = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, b2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, y2 = {
  key: 1,
  class: "mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
}, v2 = { class: "bg-gray-50 dark:bg-dark-900" }, E2 = ["src", "alt"], w2 = { class: "space-y-3 p-4" }, S2 = { class: "text-sm leading-6 text-gray-700 dark:text-gray-300" }, A2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, T2 = { class: "grid grid-cols-2 gap-2" }, O2 = ["onClick"], C2 = ["onClick"], R2 = { class: "card p-5" }, L2 = { class: "flex flex-wrap items-start justify-between gap-3" }, I2 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, k2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, x2 = ["disabled"], P2 = {
  key: 0,
  class: "flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400"
}, N2 = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400 dark:text-gray-500"
}, M2 = {
  key: 2,
  class: "mt-4 space-y-4"
}, D2 = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, F2 = { class: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400" }, U2 = { class: "mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300" }, $2 = { class: "grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4" }, H2 = ["src", "alt"], V2 = { class: "grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700" }, j2 = ["aria-label", "onClick"], B2 = ["aria-label", "onClick"], W2 = { class: "space-y-5" }, K2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, z2 = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, G2 = { class: "grid grid-cols-3 gap-2" }, q2 = ["aria-pressed", "onClick"], Y2 = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, X2 = { class: "grid grid-cols-4 gap-2 sm:gap-3" }, J2 = ["aria-pressed", "onClick"], Q2 = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, Z2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, ev = { class: "mt-1 text-xl font-semibold text-gray-900 dark:text-white" }, tv = { class: "flex w-full justify-end gap-2" }, nv = /* @__PURE__ */ rn({
  __name: "ImageGenerationView",
  setup(e) {
    const { t } = Xr(), n = Qa(), r = Kr(), o = _y(), s = _e(() => {
      var q;
      if (r.isAdmin) {
        const B = Zl(o.customMenuItems);
        if (B || o.loaded) return B;
      }
      return Zl((q = n.cachedPublicSettings) == null ? void 0 : q.custom_menu_items);
    });
    function a(q, B) {
      var Qe, jt, hr;
      if (!B) return;
      q.preventDefault();
      const K = [...document.querySelectorAll("aside a[href]")].find((ts) => ts.getAttribute("href") === B);
      if (K) {
        K.click();
        return;
      }
      const Se = document.querySelector("#app"), Ie = (hr = (jt = (Qe = Se == null ? void 0 : Se.__vue_app__) == null ? void 0 : Qe.config) == null ? void 0 : jt.globalProperties) == null ? void 0 : hr.$router;
      if (Ie) {
        Ie.push(B);
        return;
      }
      window.location.assign(B);
    }
    const {
      allowedImageKeys: i,
      imageGenerationAccessLoading: l,
      refreshImageGenerationAccess: u
    } = gy(), c = J(null), f = J(null), h = J([]), p = J(!1), w = J("");
    let S = null, T = 0;
    const v = J("1"), x = J(""), y = J("2K"), E = J("9:16"), I = J("1152x2048"), C = J("high"), D = J("b64_json"), N = J(!1), O = J([]), j = J(""), te = J(t("imageGeneration.results.emptyHint")), U = J(null), X = J([]), ie = J(""), de = J(!1), ae = J(!1), V = J(y.value), Z = J(E.value), Ee = ["1K", "2K", "4K"], Re = [
      { label: "1:1", value: "1:1", previewClass: "h-5 w-5" },
      { label: "3:2", value: "3:2", previewClass: "h-4 w-6" },
      { label: "2:3", value: "2:3", previewClass: "h-6 w-4" },
      { label: "16:9", value: "16:9", previewClass: "h-4 w-7" },
      { label: "9:16", value: "9:16", previewClass: "h-7 w-4" },
      { label: "4:3", value: "4:3", previewClass: "h-5 w-6" },
      { label: "3:4", value: "3:4", previewClass: "h-6 w-5" },
      { label: "21:9", value: "21:9", previewClass: "h-3 w-8" }
    ], fe = J([]), we = J(!0);
    let Ue = 0;
    const Xe = _e(() => i.value.map((q) => {
      var B, K;
      return {
        value: q.id,
        label: `${q.name} · ${((B = q.group) == null ? void 0 : B.name) || ((K = q.group) == null ? void 0 : K.platform) || t("common.unknown")}`
      };
    })), We = _e(() => i.value.find((q) => q.id === c.value) || null), pe = _e(() => {
      var B, K;
      const q = We.value;
      return q ? `${((B = q.group) == null ? void 0 : B.platform) || t("common.unknown")} · ${((K = q.group) == null ? void 0 : K.name) || t("common.unknown")}` : "";
    }), W = _e(() => h.value.map((q) => ({ value: q, label: q }))), re = [
      { label: "Auto", value: "auto" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ], oe = [
      { label: "Base64", value: "b64_json" }
    ], Ce = _e(() => w.value ? w.value : p.value ? t("imageGeneration.hints.modelsLoading") : We.value && h.value.length === 0 ? t("imageGeneration.hints.modelsEmpty") : ""), Ke = _e(() => `${y.value} · ${E.value}`), g = _e(() => b(V.value, Z.value)), _ = _e(() => N.value || l.value || p.value || !We.value || !f.value || !x.value.trim());
    function b(q, B) {
      const K = { "1K": 1024, "2K": 2048, "4K": 4096 }[q] || 2048, [Se, Ie] = B.split(":").map(Number);
      return !Se || !Ie ? `${K}x${K}` : Se >= Ie ? `${K}x${Math.round(K * Ie / Se)}` : `${Math.round(K * Se / Ie)}x${K}`;
    }
    function P() {
      V.value = y.value, Z.value = E.value, ae.value = !0;
    }
    function L() {
      ae.value = !1;
    }
    function M() {
      y.value = V.value, E.value = Z.value, I.value = g.value, L();
    }
    async function Y() {
      S == null || S.abort();
      const q = We.value;
      if (h.value = [], f.value = null, w.value = "", !q) return;
      const B = new AbortController(), K = ++T;
      S = B, p.value = !0;
      try {
        const Se = await cb(q.key, { signal: B.signal });
        if (B.signal.aborted || K !== T) return;
        h.value = Se, f.value = Se[0] || null;
      } catch (Se) {
        if (B.signal.aborted || K !== T) return;
        w.value = Ln(Se, t("imageGeneration.messages.loadModelsFailed")), n.showError(w.value);
      } finally {
        K === T && (p.value = !1, S = null);
      }
    }
    async function z() {
      var q;
      try {
        await u(!0), c.value && !i.value.some((B) => B.id === c.value) ? c.value = ((q = i.value[0]) == null ? void 0 : q.id) || null : await Y();
      } catch (B) {
        n.showError(Ln(B, t("imageGeneration.messages.loadKeysFailed")));
      }
    }
    function d() {
      var q;
      (q = U.value) == null || q.click();
    }
    function m(q) {
      return `${q.name}-${q.size}-${q.lastModified}`;
    }
    function R(q) {
      const B = [...X.value], K = new Set(B.map((Ie) => Ie.id)), Se = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
      ie.value = "";
      for (const Ie of Array.from(q)) {
        if (B.length >= 4) {
          ie.value = t("imageGeneration.messages.referenceImagesLimit");
          break;
        }
        if (!Se.has(Ie.type.toLowerCase())) {
          ie.value = t("imageGeneration.messages.referenceImageType");
          continue;
        }
        if (Ie.size > 20 * 1024 * 1024) {
          ie.value = t("imageGeneration.messages.referenceImageTooLarge");
          continue;
        }
        const Qe = m(Ie);
        K.has(Qe) || (B.push({ id: Qe, file: Ie, previewUrl: URL.createObjectURL(Ie) }), K.add(Qe));
      }
      X.value = B, de.value = !1;
    }
    function F(q) {
      const B = q.target;
      B.files && R(B.files), B.value = "";
    }
    function ee(q) {
      var B;
      (B = q.dataTransfer) != null && B.files && R(q.dataTransfer.files);
    }
    function G(q) {
      const B = X.value.find((K) => K.id === q);
      B && URL.revokeObjectURL(B.previewUrl), X.value = X.value.filter((K) => K.id !== q), ie.value = "";
    }
    function k() {
      X.value.forEach((q) => URL.revokeObjectURL(q.previewUrl)), X.value = [], ie.value = "";
    }
    function $(q) {
      const B = String(q.mime_type || "").trim();
      if (B) return B;
      const K = String(q.output_format || "").trim().toLowerCase();
      return K === "webp" ? "image/webp" : K === "jpeg" || K === "jpg" ? "image/jpeg" : "image/png";
    }
    function ce(q) {
      const B = String(q.b64_json || "").trim();
      return B ? `data:${$(q)};base64,${B}` : String(q.url || "").trim();
    }
    function Te(q, B) {
      const K = B === "image/webp" ? "webp" : B === "image/jpeg" ? "jpg" : "png";
      return `online-image-${Date.now()}-${q + 1}.${K}`;
    }
    function $e() {
      const q = Number.parseInt(v.value, 10);
      return Number.isFinite(q) ? Math.min(Math.max(q, 1), 4) : 1;
    }
    async function st() {
      var B;
      const q = We.value;
      if (!q) return n.showError(t("imageGeneration.messages.chooseKey"));
      if (!f.value) return n.showError(t("imageGeneration.messages.chooseModel"));
      if (!x.value.trim()) return n.showError(t("imageGeneration.messages.choosePrompt"));
      N.value = !0;
      try {
        const K = await ub(q.key, {
          model: f.value,
          prompt: x.value.trim(),
          n: $e(),
          size: I.value,
          quality: String(C.value || ""),
          response_format: String(D.value || ""),
          referenceImages: X.value.map((Qe) => Qe.file)
        }), Se = (K.data || []).flatMap((Qe, jt) => {
          const hr = ce(Qe);
          if (!hr) return [];
          const ts = String(Qe.revised_prompt || "").trim(), ni = $(Qe);
          return [{
            id: `${Date.now()}-${jt}-${Math.random().toString(36).slice(2, 8)}`,
            src: hr,
            prompt: ts || x.value.trim(),
            revisedPrompt: ts,
            mimeType: ni,
            downloadName: Te(jt, ni)
          }];
        });
        if (O.value = Se, j.value = K.model || f.value, te.value = Se.length > 0 ? `${Se.length} × ${j.value}` : t("imageGeneration.messages.noImages"), Se.length === 0) return n.showInfo(t("imageGeneration.messages.noImages"));
        const Ie = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
          createdAt: Date.now(),
          model: j.value,
          prompt: x.value.trim(),
          sizeLabel: Ke.value,
          imageSize: I.value,
          images: Se
        };
        try {
          const Qe = (B = r.user) == null ? void 0 : B.id;
          if (!Qe) throw new Error("Authenticated User is required for image history");
          fe.value = await mb(Qe, Ie);
        } catch (Qe) {
          n.showInfo(Ln(Qe, t("imageGeneration.messages.historySaveFailed")));
        }
        n.showSuccess(t("imageGeneration.messages.generated"));
      } catch (K) {
        n.showError(Ln(K, t("imageGeneration.messages.generateFailed")));
      } finally {
        N.value = !1;
      }
    }
    async function Je(q) {
      if (/MicroMessenger/i.test(window.navigator.userAgent)) {
        Tt(q), n.showInfo(t("imageGeneration.messages.mobileSaveHint"));
        return;
      }
      try {
        if (Ql() && typeof navigator.share == "function") {
          const Ie = await fetch(q.src);
          if (!Ie.ok) throw new Error(`HTTP ${Ie.status}`);
          const Qe = new File([await Ie.blob()], q.downloadName, { type: q.mimeType });
          if (typeof navigator.canShare != "function" || navigator.canShare({ files: [Qe] })) {
            try {
              await navigator.share({ files: [Qe] });
            } catch (jt) {
              if (jt instanceof DOMException && jt.name === "AbortError") return;
              throw jt;
            }
            return;
          }
        }
        if (q.src.startsWith("data:")) {
          const Ie = document.createElement("a");
          Ie.href = q.src, Ie.download = q.downloadName, document.body.append(Ie), Ie.click(), Ie.remove();
          return;
        }
        const B = await fetch(q.src);
        if (!B.ok) throw new Error(`HTTP ${B.status}`);
        const K = URL.createObjectURL(await B.blob()), Se = document.createElement("a");
        Se.href = K, Se.download = q.downloadName, document.body.append(Se), Se.click(), Se.remove(), window.setTimeout(() => URL.revokeObjectURL(K), 6e4);
      } catch (B) {
        if (Ql()) {
          Tt(q), n.showInfo(t("imageGeneration.messages.mobileSaveHint"));
          return;
        }
        n.showError(Ln(B, t("imageGeneration.messages.downloadFailed")));
      }
    }
    function Tt(q) {
      window.open(q.src, "_blank", "noopener,noreferrer");
    }
    function mr(q) {
      return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(new Date(q));
    }
    async function it() {
      var K, Se;
      const q = ++Ue, B = (K = r.user) == null ? void 0 : K.id;
      try {
        const Ie = B ? await db(B) : [];
        q === Ue && B === ((Se = r.user) == null ? void 0 : Se.id) && (fe.value = Ie);
      } catch (Ie) {
        n.showError(Ln(Ie, t("imageGeneration.messages.historyLoadFailed")));
      } finally {
        q === Ue && (we.value = !1);
      }
    }
    async function Ot() {
      var q;
      if (window.confirm(t("imageGeneration.history.clearConfirm")))
        try {
          const B = (q = r.user) == null ? void 0 : q.id;
          if (!B) return;
          await hb(B), fe.value = [];
        } catch (B) {
          n.showError(Ln(B, t("imageGeneration.messages.historyClearFailed")));
        }
    }
    return yt(i, (q) => {
      q.length === 0 ? c.value = null : q.some((B) => B.id === c.value) || (c.value = q[0].id);
    }, { immediate: !0 }), yt(c, () => {
      Y();
    }, { immediate: !0 }), yt(() => {
      var q;
      return (q = r.user) == null ? void 0 : q.id;
    }, () => {
      fe.value = [], we.value = !0, it();
    }), cr(() => {
      u(), it(), r.isAdmin && o.fetch();
    }), Ca(() => {
      Ue += 1, T += 1, S == null || S.abort(), k();
    }), (q, B) => (ge(), Ae("div", Ty, [
      H("div", Oy, [
        H("section", Cy, [
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
          H("div", Ry, [
            H("label", Ly, ue(le(t)("imageGeneration.controls.apiKey")), 1),
            H("div", Iy, [
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
                onClick: z
              }, [
                ye(ze, {
                  name: "refresh",
                  size: "md",
                  class: Ge({ "animate-spin": le(l) || p.value })
                }, null, 8, ["class"]),
                H("span", null, ue(le(t)("imageGeneration.controls.refreshKeys")), 1)
              ], 8, ky)
            ]),
            H("p", xy, ue(le(t)("imageGeneration.hints.apiKey")), 1),
            pe.value ? (ge(), Ae("p", Py, ue(pe.value), 1)) : et("", !0)
          ]),
          H("div", Ny, [
            H("div", null, [
              H("label", My, ue(le(t)("imageGeneration.controls.modelSelection")), 1),
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
              Ce.value ? (ge(), Ae("p", {
                key: 0,
                class: Ge(["mt-1 text-xs", w.value ? "text-red-500" : "text-gray-500 dark:text-gray-400"])
              }, ue(Ce.value), 3)) : et("", !0)
            ]),
            H("div", null, [
              H("label", Dy, ue(le(t)("imageGeneration.controls.count")), 1),
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
          H("div", Fy, [
            H("label", Uy, ue(le(t)("imageGeneration.controls.imageSize")), 1),
            H("button", {
              type: "button",
              "data-testid": "image-size-trigger",
              class: "btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left",
              "data-online-image-action": "",
              "aria-label": le(t)("imageGeneration.sizeDialog.title"),
              onClick: P
            }, [
              H("span", Hy, ue(Ke.value), 1),
              ye(ze, {
                name: "chevronDown",
                size: "sm",
                class: "flex-shrink-0"
              })
            ], 8, $y)
          ]),
          H("div", Vy, [
            H("div", null, [
              H("label", jy, ue(le(t)("imageGeneration.controls.quality")), 1),
              ye(fs, {
                modelValue: C.value,
                "onUpdate:modelValue": B[4] || (B[4] = (K) => C.value = K),
                options: re,
                "data-testid": "quality-select"
              }, null, 8, ["modelValue"])
            ]),
            H("div", null, [
              H("label", By, ue(le(t)("imageGeneration.controls.responseFormat")), 1),
              ye(fs, {
                modelValue: D.value,
                "onUpdate:modelValue": B[5] || (B[5] = (K) => D.value = K),
                options: oe,
                "data-testid": "response-format-select"
              }, null, 8, ["modelValue"])
            ])
          ]),
          H("div", Wy, [
            H("div", Ky, [
              H("label", zy, ue(le(t)("imageGeneration.controls.referenceImages")), 1),
              X.value.length > 0 ? (ge(), Ae("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm",
                "data-online-image-action": "",
                onClick: k
              }, ue(le(t)("imageGeneration.controls.clearReferenceImages")), 1)) : et("", !0)
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
                Rr(Ze(d, ["prevent"]), ["enter"]),
                Rr(Ze(d, ["prevent"]), ["space"])
              ],
              onDragenter: B[6] || (B[6] = Ze((K) => de.value = !0, ["prevent"])),
              onDragover: B[7] || (B[7] = Ze((K) => de.value = !0, ["prevent"])),
              onDragleave: B[8] || (B[8] = Ze((K) => de.value = !1, ["prevent"])),
              onDrop: Ze(ee, ["prevent"])
            }, [
              X.value.length > 0 ? (ge(), Ae("div", qy, [
                (ge(!0), Ae(He, null, dn(X.value, (K) => (ge(), Ae("div", {
                  key: K.id,
                  class: "group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                }, [
                  H("img", {
                    src: K.previewUrl,
                    alt: K.file.name,
                    class: "h-full w-full object-cover"
                  }, null, 8, Yy),
                  H("button", {
                    type: "button",
                    class: "absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
                    "aria-label": le(t)("imageGeneration.controls.removeReferenceImage"),
                    onClick: Ze((Se) => G(K.id), ["stop"])
                  }, [
                    ye(ze, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, Xy)
                ]))), 128))
              ])) : et("", !0),
              H("div", Jy, [
                H("div", Qy, [
                  ye(ze, {
                    name: "upload",
                    size: "md"
                  })
                ]),
                H("div", Zy, [
                  H("p", e2, ue(le(t)("imageGeneration.controls.referenceImagesDrop")), 1),
                  H("p", t2, ue(le(t)("imageGeneration.hints.referenceImages")), 1)
                ]),
                H("button", {
                  type: "button",
                  class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                  "data-online-image-action": "",
                  onClick: Ze(d, ["stop"])
                }, [
                  ye(ze, {
                    name: "upload",
                    size: "sm"
                  }),
                  Gn(" " + ue(le(t)("imageGeneration.controls.chooseReferenceImages")), 1)
                ])
              ])
            ], 42, Gy),
            X.value.length > 0 ? (ge(), Ae("p", n2, ue(le(t)("imageGeneration.hints.referenceImagesSelected", { count: X.value.length })), 1)) : et("", !0),
            ie.value ? (ge(), Ae("p", r2, ue(ie.value), 1)) : et("", !0)
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
          ], 10, s2)
        ]),
        H("section", o2, [
          H("div", a2, [
            H("div", null, [
              H("label", i2, ue(le(t)("imageGeneration.controls.prompt")), 1),
              $o(H("textarea", {
                "onUpdate:modelValue": B[10] || (B[10] = (K) => x.value = K),
                rows: "5",
                class: "input min-h-32 w-full resize-y",
                placeholder: le(t)("imageGeneration.controls.prompt")
              }, null, 8, l2), [
                [qo, x.value]
              ]),
              H("p", c2, ue(le(t)("imageGeneration.hints.responseFormat")), 1)
            ]),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular w-full",
              "data-testid": "start-generation",
              "data-online-image-action": "",
              disabled: _.value,
              onClick: st
            }, [
              ye(ze, {
                name: "sparkles",
                size: "md",
                class: Ge({ "animate-pulse": N.value })
              }, null, 8, ["class"]),
              H("span", null, ue(N.value ? le(t)("imageGeneration.controls.generating") : le(t)("imageGeneration.controls.generate")), 1)
            ], 8, u2)
          ]),
          H("div", f2, [
            H("div", d2, [
              H("div", null, [
                H("h2", m2, ue(le(t)("imageGeneration.results.title")), 1),
                H("p", h2, ue(te.value), 1)
              ]),
              j.value ? (ge(), Ae("span", p2, ue(j.value), 1)) : et("", !0)
            ]),
            O.value.length === 0 ? (ge(), Ae("div", g2, [
              ye(ze, {
                name: "sparkles",
                size: "xl",
                class: "mb-4 text-gray-400 dark:text-dark-500"
              }),
              H("p", _2, ue(le(t)("imageGeneration.results.empty")), 1),
              H("p", b2, ue(le(t)("imageGeneration.results.emptyHint")), 1)
            ])) : (ge(), Ae("div", y2, [
              (ge(!0), Ae(He, null, dn(O.value, (K) => (ge(), Ae("article", {
                key: K.id,
                class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              }, [
                H("div", v2, [
                  H("img", {
                    src: K.src,
                    alt: K.prompt,
                    class: "aspect-square w-full object-contain"
                  }, null, 8, E2)
                ]),
                H("div", w2, [
                  H("p", S2, ue(K.prompt), 1),
                  K.revisedPrompt ? (ge(), Ae("p", A2, ue(le(t)("imageGeneration.results.revisedPrompt")) + ": " + ue(K.revisedPrompt), 1)) : et("", !0),
                  H("div", T2, [
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-testid": "result-download",
                      "data-online-image-action": "",
                      onClick: (Se) => Je(K)
                    }, [
                      ye(ze, {
                        name: "download",
                        size: "sm"
                      }),
                      Gn(" " + ue(le(t)("imageGeneration.results.download")), 1)
                    ], 8, O2),
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Se) => Tt(K)
                    }, [
                      ye(ze, {
                        name: "externalLink",
                        size: "sm"
                      }),
                      Gn(" " + ue(le(t)("imageGeneration.results.open")), 1)
                    ], 8, C2)
                  ])
                ])
              ]))), 128))
            ]))
          ]),
          H("div", R2, [
            H("div", L2, [
              H("div", null, [
                H("h2", I2, ue(le(t)("imageGeneration.history.title")), 1),
                H("p", k2, ue(le(t)("imageGeneration.history.hint")), 1)
              ]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                "data-online-image-action": "",
                disabled: fe.value.length === 0 || we.value,
                onClick: Ot
              }, [
                ye(ze, {
                  name: "trash",
                  size: "sm"
                }),
                Gn(" " + ue(le(t)("imageGeneration.history.clear")), 1)
              ], 8, x2)
            ]),
            we.value ? (ge(), Ae("div", P2, ue(le(t)("common.loading")), 1)) : fe.value.length === 0 ? (ge(), Ae("div", N2, ue(le(t)("imageGeneration.history.empty")), 1)) : (ge(), Ae("div", M2, [
              (ge(!0), Ae(He, null, dn(fe.value, (K) => (ge(), Ae("article", {
                key: K.id,
                class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700"
              }, [
                H("div", D2, [
                  H("div", F2, [
                    H("span", null, ue(mr(K.createdAt)), 1),
                    B[11] || (B[11] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.model), 1),
                    B[12] || (B[12] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.sizeLabel), 1),
                    B[13] || (B[13] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(K.imageSize), 1)
                  ]),
                  H("p", U2, ue(K.prompt), 1)
                ]),
                H("div", $2, [
                  (ge(!0), Ae(He, null, dn(K.images, (Se) => (ge(), Ae("div", {
                    key: Se.id,
                    class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                  }, [
                    H("img", {
                      src: Se.src,
                      alt: Se.prompt,
                      class: "aspect-square w-full object-contain",
                      loading: "lazy"
                    }, null, 8, H2),
                    H("div", V2, [
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-testid": "history-download",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.download"),
                        onClick: (Ie) => Je(Se)
                      }, [
                        ye(ze, {
                          name: "download",
                          size: "sm"
                        })
                      ], 8, j2),
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.open"),
                        onClick: (Ie) => Tt(Se)
                      }, [
                        ye(ze, {
                          name: "externalLink",
                          size: "sm"
                        })
                      ], 8, B2)
                    ])
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ])
      ]),
      ye(X1, {
        show: ae.value,
        title: le(t)("imageGeneration.sizeDialog.title"),
        width: "normal",
        "data-testid": "image-size-dialog",
        onClose: L
      }, {
        footer: nr(() => [
          H("div", tv, [
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
        default: nr(() => [
          H("div", W2, [
            H("p", K2, ue(le(t)("imageGeneration.sizeDialog.current", { size: Ke.value })), 1),
            H("div", null, [
              H("h4", z2, ue(le(t)("imageGeneration.sizeDialog.resolution")), 1),
              H("div", G2, [
                (ge(), Ae(He, null, dn(Ee, (K) => H("button", {
                  key: K,
                  type: "button",
                  class: Ge(["btn btn-specular", V.value === K ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": V.value === K,
                  onClick: (Se) => V.value = K
                }, ue(K), 11, q2)), 64))
              ])
            ]),
            H("div", null, [
              H("h4", Y2, ue(le(t)("imageGeneration.sizeDialog.aspectRatio")), 1),
              H("div", X2, [
                (ge(), Ae(He, null, dn(Re, (K) => H("button", {
                  key: K.value,
                  type: "button",
                  class: Ge(["btn btn-specular min-h-[72px] flex-col px-1.5 text-xs", Z.value === K.value ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": Z.value === K.value,
                  onClick: (Se) => Z.value = K.value
                }, [
                  H("span", {
                    class: Ge(["block rounded-[3px] border border-current", K.previewClass])
                  }, null, 2),
                  H("span", null, ue(K.label), 1)
                ], 10, J2)), 64))
              ])
            ]),
            H("div", Q2, [
              H("p", Z2, ue(le(t)("imageGeneration.sizeDialog.output")), 1),
              H("p", ev, ue(g.value), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), rv = /* @__PURE__ */ Za(nv, [["__scopeId", "data-v-16a8a093"]]);
async function Av(e) {
  await qg();
  const t = Ch(), n = Qa(t), r = Kr(t);
  n.initFromInjectedConfig(), await n.fetchPublicSettings(!0), r.hydrateAuthSnapshot(e.runMode);
  const s = Ah(/* @__PURE__ */ rn({
    name: "ZeroOneOnlineImageRoot",
    setup: () => () => [Hr(rv), Hr(G1)]
  }));
  s.use(t), s.use(er);
  let a = !1;
  async function i(l) {
    r.setRunModeSnapshot(l.runMode), er.global.locale.value !== l.locale && (await lf(l.locale), er.global.locale.value = l.locale);
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
  Av as prepareOnlineImageSurface
};
