/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const de = {}, Mn = [], Rt = () => {
}, $l = () => !1, ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Jo = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vf = Object.prototype.hasOwnProperty, _e = (e, t) => Vf.call(e, t), Q = Array.isArray, xn = (e) => Ir(e) === "[object Map]", zn = (e) => Ir(e) === "[object Set]", Vi = (e) => Ir(e) === "[object Date]", ne = (e) => typeof e == "function", Le = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", ye = (e) => e !== null && typeof e == "object", Vl = (e) => (ye(e) || ne(e)) && ne(e.then) && ne(e.catch), jl = Object.prototype.toString, Ir = (e) => jl.call(e), jf = (e) => Ir(e).slice(8, -1), Wl = (e) => Ir(e) === "[object Object]", Os = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ Xo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wf = /-\w/g, at = Ls(
  (e) => e.replace(Wf, (t) => t.slice(1).toUpperCase())
), Bf = /\B([A-Z])/g, Kt = Ls(
  (e) => e.replace(Bf, "-$1").toLowerCase()
), Cs = Ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), no = Ls(
  (e) => e ? `on${Cs(e)}` : ""
), nt = (e, t) => !Object.is(e, t), Jr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Bl = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Rs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Kf = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ji;
const Is = () => ji || (ji = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ps(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Le(r) ? Yf(r) : Ps(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Le(e) || ye(e))
    return e;
}
const qf = /;(?![^(]*\))/g, zf = /:([^]+)/, Gf = /\/\*[^]*?\*\//g;
function Yf(e) {
  const t = {};
  return e.replace(Gf, "").split(qf).forEach((n) => {
    if (n) {
      const r = n.split(zf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function tn(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = tn(e[n]);
      r && (t += r + " ");
    }
  else if (ye(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jf = /* @__PURE__ */ Xo(Xf);
function Kl(e) {
  return !!e || e === "";
}
function Qf(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = An(e[r], t[r]);
  return n;
}
function An(e, t) {
  if (e === t) return !0;
  let n = Vi(e), r = Vi(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = bt(e), r = bt(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? Qf(e, t) : !1;
  if (n = ye(e), r = ye(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !An(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zo(e, t) {
  return e.findIndex((n) => An(n, t));
}
const ql = (e) => !!(e && e.__v_isRef === !0), Ao = (e) => Le(e) ? e : e == null ? "" : Q(e) || ye(e) && (e.toString === jl || !ne(e.toString)) ? ql(e) ? Ao(e.value) : JSON.stringify(e, zl, 2) : String(e), zl = (e, t) => ql(t) ? zl(e, t.value) : xn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[ro(r, s) + " =>"] = o, n),
    {}
  )
} : zn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ro(n))
} : bt(t) ? ro(t) : ye(t) && !Q(t) && !Wl(t) ? String(t) : t, ro = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class Gl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Be, !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(
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
      const n = Be;
      try {
        return Be = this, t();
      } finally {
        Be = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Be, Be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Be = this.prevScope, this.prevScope = void 0);
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
function ei(e) {
  return new Gl(e);
}
function Yl() {
  return Be;
}
function Zf(e, t = !1) {
  Be && Be.cleanups.push(e);
}
let ve;
const so = /* @__PURE__ */ new WeakSet();
class Xl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && Be.active && Be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, so.has(this) && (so.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ql(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wi(this), Zl(this);
    const t = ve, n = _t;
    ve = this, _t = !0;
    try {
      return this.fn();
    } finally {
      ec(this), ve = t, _t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ri(t);
      this.deps = this.depsTail = void 0, Wi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? so.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    To(this) && this.run();
  }
  get dirty() {
    return To(this);
  }
}
let Jl = 0, ir, ar;
function Ql(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ar, ar = e;
    return;
  }
  e.next = ir, ir = e;
}
function ti() {
  Jl++;
}
function ni() {
  if (--Jl > 0)
    return;
  if (ar) {
    let t = ar;
    for (ar = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ir; ) {
    let t = ir;
    for (ir = void 0; t; ) {
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
function Zl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ec(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ri(r), ed(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function To(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gr) || (e.globalVersion = gr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !To(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ve, r = _t;
  ve = e, _t = !0;
  try {
    Zl(e);
    const o = e.fn(e._value);
    (t.version === 0 || nt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ve = n, _t = r, ec(e), e.flags &= -3;
  }
}
function ri(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ri(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ed(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _t = !0;
const nc = [];
function jt() {
  nc.push(_t), _t = !1;
}
function Wt() {
  const e = nc.pop();
  _t = e === void 0 ? !0 : e;
}
function Wi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ve;
    ve = void 0;
    try {
      t();
    } finally {
      ve = n;
    }
  }
}
let gr = 0;
class td {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ns {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ve || !_t || ve === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ve)
      n = this.activeLink = new td(ve, this), ve.deps ? (n.prevDep = ve.depsTail, ve.depsTail.nextDep = n, ve.depsTail = n) : ve.deps = ve.depsTail = n, rc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ve.depsTail, n.nextDep = void 0, ve.depsTail.nextDep = n, ve.depsTail = n, ve.deps === n && (ve.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, gr++, this.notify(t);
  }
  notify(t) {
    ti();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ni();
    }
  }
}
function rc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        rc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const is = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ Symbol(
  ""
), wo = /* @__PURE__ */ Symbol(
  ""
), br = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
  if (_t && ve) {
    let r = is.get(e);
    r || is.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Ns()), o.map = r, o.key = n), o.track();
  }
}
function Dt(e, t, n, r, o, s) {
  const i = is.get(e);
  if (!i) {
    gr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ti(), t === "clear")
    i.forEach(a);
  else {
    const l = Q(e), u = l && Os(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, m) => {
        (m === "length" || m === br || !bt(m) && m >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(br)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(yn)), xn(e) && a(i.get(wo)));
          break;
        case "delete":
          l || (a(i.get(yn)), xn(e) && a(i.get(wo)));
          break;
        case "set":
          xn(e) && a(i.get(yn));
          break;
      }
  }
  ni();
}
function nd(e, t) {
  const n = is.get(e);
  return n && n.get(t);
}
function Cn(e) {
  const t = ue(e);
  return t === e ? t : (Ke(t, "iterate", br), it(e) ? t : t.map(yt));
}
function ks(e) {
  return Ke(e = ue(e), "iterate", br), e;
}
function Jt(e, t) {
  return Bt(e) ? Vt(e) ? Hn(yt(t)) : Hn(t) : yt(t);
}
const rd = {
  __proto__: null,
  [Symbol.iterator]() {
    return oo(this, Symbol.iterator, (e) => Jt(this, e));
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => Q(t) ? Cn(t) : t)
    );
  },
  entries() {
    return oo(this, "entries", (e) => (e[1] = Jt(this, e[1]), e));
  },
  every(e, t) {
    return Pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Jt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Pt(
      this,
      "find",
      e,
      t,
      (n) => Jt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pt(
      this,
      "findLast",
      e,
      t,
      (n) => Jt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return io(this, "includes", e);
  },
  indexOf(...e) {
    return io(this, "indexOf", e);
  },
  join(e) {
    return Cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return io(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Jn(this, "pop");
  },
  push(...e) {
    return Jn(this, "push", e);
  },
  reduce(e, ...t) {
    return Bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bi(this, "reduceRight", e, t);
  },
  shift() {
    return Jn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Jn(this, "splice", e);
  },
  toReversed() {
    return Cn(this).toReversed();
  },
  toSorted(e) {
    return Cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jn(this, "unshift", e);
  },
  values() {
    return oo(this, "values", (e) => Jt(this, e));
  }
};
function oo(e, t, n) {
  const r = ks(e), o = r[t]();
  return r !== e && !it(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const sd = Array.prototype;
function Pt(e, t, n, r, o, s) {
  const i = ks(e), a = i !== e && !it(e), l = i[t];
  if (l !== sd[t]) {
    const f = l.apply(e, s);
    return a ? yt(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, m) {
    return n.call(this, Jt(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const c = l.call(i, u, r);
  return a && o ? o(c) : c;
}
function Bi(e, t, n, r) {
  const o = ks(e);
  let s = n;
  return o !== e && (it(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, Jt(e, a), l, e);
  }), o[t](s, ...r);
}
function io(e, t, n) {
  const r = ue(e);
  Ke(r, "iterate", br);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Ms(n[0]) ? (n[0] = ue(n[0]), r[t](...n)) : o;
}
function Jn(e, t, n = []) {
  jt(), ti();
  const r = ue(e)[t].apply(e, n);
  return ni(), Wt(), r;
}
const od = /* @__PURE__ */ Xo("__proto__,__v_isRef,__isVue"), sc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function id(e) {
  bt(e) || (e = String(e));
  const t = ue(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class oc {
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
      return r === (o ? s ? _d : cc : s ? lc : ac).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Q(t);
    if (!o) {
      let l;
      if (i && (l = rd[n]))
        return l;
      if (n === "hasOwnProperty")
        return id;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Oe(t) ? t : r
    );
    if ((bt(n) ? sc.has(n) : od(n)) || (o || Ke(t, "get", n), s))
      return a;
    if (Oe(a)) {
      const l = i && Os(n) ? a : a.value;
      return o && ye(l) ? yr(l) : l;
    }
    return ye(a) ? o ? yr(a) : Pr(a) : a;
  }
}
class ic extends oc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const i = Q(t) && Os(n);
    if (!this._isShallow) {
      const u = Bt(s);
      if (!it(r) && !Bt(r) && (s = ue(s), r = ue(r)), !i && Oe(s) && !Oe(r))
        return u || (s.value = r), !0;
    }
    const a = i ? Number(n) < t.length : _e(t, n), l = Reflect.set(
      t,
      n,
      r,
      Oe(t) ? t : o
    );
    return t === ue(o) && (a ? nt(r, s) && Dt(t, "set", n, r) : Dt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = _e(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Dt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!bt(n) || !sc.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      Q(t) ? "length" : yn
    ), Reflect.ownKeys(t);
  }
}
class ad extends oc {
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
const ld = /* @__PURE__ */ new ic(), cd = /* @__PURE__ */ new ad(), ud = /* @__PURE__ */ new ic(!0);
const Oo = (e) => e, Hr = (e) => Reflect.getPrototypeOf(e);
function fd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = ue(o), i = xn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? Oo : t ? Hn : yt;
    return !t && Ke(
      s,
      "iterate",
      l ? wo : yn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: m } = u.next();
        return m ? { value: f, done: m } : {
          value: a ? [c(f[0]), c(f[1])] : c(f),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $r(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dd(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = ue(s), a = ue(o);
      e || (nt(o, a) && Ke(i, "get", o), Ke(i, "get", a));
      const { has: l } = Hr(i), u = t ? Oo : e ? Hn : yt;
      if (l.call(i, o))
        return u(s.get(o));
      if (l.call(i, a))
        return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ke(ue(o), "iterate", yn), o.size;
    },
    has(o) {
      const s = this.__v_raw, i = ue(s), a = ue(o);
      return e || (nt(o, a) && Ke(i, "has", o), Ke(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, l = ue(a), u = t ? Oo : e ? Hn : yt;
      return !e && Ke(l, "iterate", yn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
    }
  };
  return Pe(
    n,
    e ? {
      add: $r("add"),
      set: $r("set"),
      delete: $r("delete"),
      clear: $r("clear")
    } : {
      add(o) {
        !t && !it(o) && !Bt(o) && (o = ue(o));
        const s = ue(this);
        return Hr(s).has.call(s, o) || (s.add(o), Dt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !it(s) && !Bt(s) && (s = ue(s));
        const i = ue(this), { has: a, get: l } = Hr(i);
        let u = a.call(i, o);
        u || (o = ue(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? nt(s, c) && Dt(i, "set", o, s) : Dt(i, "add", o, s), this;
      },
      delete(o) {
        const s = ue(this), { has: i, get: a } = Hr(s);
        let l = i.call(s, o);
        l || (o = ue(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && Dt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = ue(this), s = o.size !== 0, i = o.clear();
        return s && Dt(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = fd(o, e, t);
  }), n;
}
function si(e, t) {
  const n = dd(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    _e(n, o) && o in r ? n : r,
    o,
    s
  );
}
const hd = {
  get: /* @__PURE__ */ si(!1, !1)
}, md = {
  get: /* @__PURE__ */ si(!1, !0)
}, pd = {
  get: /* @__PURE__ */ si(!0, !1)
};
const ac = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap();
function gd(e) {
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
function bd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gd(jf(e));
}
function Pr(e) {
  return Bt(e) ? e : oi(
    e,
    !1,
    ld,
    hd,
    ac
  );
}
function uc(e) {
  return oi(
    e,
    !1,
    ud,
    md,
    lc
  );
}
function yr(e) {
  return oi(
    e,
    !0,
    cd,
    pd,
    cc
  );
}
function oi(e, t, n, r, o) {
  if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = bd(e);
  if (s === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Vt(e) {
  return Bt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
function it(e) {
  return !!(e && e.__v_isShallow);
}
function Ms(e) {
  return e ? !!e.__v_raw : !1;
}
function ue(e) {
  const t = e && e.__v_raw;
  return t ? ue(t) : e;
}
function ii(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && Bl(e, "__v_skip", !0), e;
}
const yt = (e) => ye(e) ? Pr(e) : e, Hn = (e) => ye(e) ? yr(e) : e;
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function le(e) {
  return fc(e, !1);
}
function ai(e) {
  return fc(e, !0);
}
function fc(e, t) {
  return Oe(e) ? e : new yd(e, t);
}
class yd {
  constructor(t, n) {
    this.dep = new Ns(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ue(t), this._value = n ? t : yt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || it(t) || Bt(t);
    t = r ? t : ue(t), nt(t, n) && (this._rawValue = t, this._value = r ? t : yt(t), this.dep.trigger());
  }
}
function y2(e) {
  e.dep && e.dep.trigger();
}
function lr(e) {
  return Oe(e) ? e.value : e;
}
const Ed = {
  get: (e, t, n) => t === "__v_raw" ? e : lr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Oe(o) && !Oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function dc(e) {
  return Vt(e) ? e : new Proxy(e, Ed);
}
class vd {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ns(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Sd(e) {
  return new vd(e);
}
function Ad(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = wd(e, n);
  return t;
}
class Td {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = ue(t);
    let o = !0, s = t;
    if (!Q(t) || !Os(String(n)))
      do
        o = !Ms(s) || it(s);
      while (o && (s = s.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = lr(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && Oe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (Oe(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return nd(this._raw, this._key);
  }
}
function wd(e, t, n) {
  return new Td(e, t, n);
}
class Od {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ns(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ve !== this)
      return Ql(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return tc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ld(e, t, n = !1) {
  let r, o;
  return ne(e) ? r = e : (r = e.get, o = e.set), new Od(r, o, n);
}
const Vr = {}, as = /* @__PURE__ */ new WeakMap();
let pn;
function Cd(e, t = !1, n = pn) {
  if (n) {
    let r = as.get(n);
    r || as.set(n, r = []), r.push(e);
  }
}
function Rd(e, t, n = de) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (y) => o ? y : it(y) || o === !1 || o === 0 ? Ft(y, 1) : Ft(y);
  let c, f, m, b, T = !1, A = !1;
  if (Oe(e) ? (f = () => e.value, T = it(e)) : Vt(e) ? (f = () => u(e), T = !0) : Q(e) ? (A = !0, T = e.some((y) => Vt(y) || it(y)), f = () => e.map((y) => {
    if (Oe(y))
      return y.value;
    if (Vt(y))
      return u(y);
    if (ne(y))
      return l ? l(y, 2) : y();
  })) : ne(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (m) {
      jt();
      try {
        m();
      } finally {
        Wt();
      }
    }
    const y = pn;
    pn = c;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      pn = y;
    }
  } : f = Rt, t && o) {
    const y = f, P = o === !0 ? 1 / 0 : o;
    f = () => Ft(y(), P);
  }
  const w = Yl(), v = () => {
    c.stop(), w && w.active && Qo(w.effects, c);
  };
  if (s && t) {
    const y = t;
    t = (...P) => {
      y(...P), v();
    };
  }
  let k = A ? new Array(e.length).fill(Vr) : Vr;
  const E = (y) => {
    if (!(!(c.flags & 1) || !c.dirty && !y))
      if (t) {
        const P = c.run();
        if (o || T || (A ? P.some((I, F) => nt(I, k[F])) : nt(P, k))) {
          m && m();
          const I = pn;
          pn = c;
          try {
            const F = [
              P,
              // pass undefined as the old value when it's changed for the first time
              k === Vr ? void 0 : A && k[0] === Vr ? [] : k,
              b
            ];
            k = P, l ? l(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            pn = I;
          }
        }
      } else
        c.run();
  };
  return a && a(E), c = new Xl(f), c.scheduler = i ? () => i(E, !1) : E, b = (y) => Cd(y, !1, c), m = c.onStop = () => {
    const y = as.get(c);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const P of y) P();
      as.delete(c);
    }
  }, t ? r ? E(!0) : k = c.run() : i ? i(E.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Oe(e))
    Ft(e.value, t, n);
  else if (Q(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (zn(e) || xn(e))
    e.forEach((r) => {
      Ft(r, t, n);
    });
  else if (Wl(e)) {
    for (const r in e)
      Ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Nr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    xs(o, t, n);
  }
}
function Et(e, t, n, r) {
  if (ne(e)) {
    const o = Nr(e, t, n, r);
    return o && Vl(o) && o.catch((s) => {
      xs(s, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Et(e[s], t, n, r));
    return o;
  }
}
function xs(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || de;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      jt(), Nr(s, null, 10, [
        e,
        l,
        u
      ]), Wt();
      return;
    }
  }
  Id(e, n, o, r, i);
}
function Id(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const et = [];
let Ot = -1;
const Dn = [];
let Qt = null, Nn = 0;
const hc = /* @__PURE__ */ Promise.resolve();
let ls = null;
function li(e) {
  const t = ls || hc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pd(e) {
  let t = Ot + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = et[r], s = Er(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ci(e) {
  if (!(e.flags & 1)) {
    const t = Er(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Er(n) ? et.push(e) : et.splice(Pd(t), 0, e), e.flags |= 1, mc();
  }
}
function mc() {
  ls || (ls = hc.then(_c));
}
function Nd(e) {
  Q(e) ? Dn.push(...e) : Qt && e.id === -1 ? Qt.splice(Nn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), mc();
}
function Ki(e, t, n = Ot + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function pc(e) {
  if (Dn.length) {
    const t = [...new Set(Dn)].sort(
      (n, r) => Er(n) - Er(r)
    );
    if (Dn.length = 0, Qt) {
      Qt.push(...t);
      return;
    }
    for (Qt = t, Nn = 0; Nn < Qt.length; Nn++) {
      const n = Qt[Nn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qt = null, Nn = 0;
  }
}
const Er = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _c(e) {
  try {
    for (Ot = 0; Ot < et.length; Ot++) {
      const t = et[Ot];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Nr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ot < et.length; Ot++) {
      const t = et[Ot];
      t && (t.flags &= -2);
    }
    Ot = -1, et.length = 0, pc(), ls = null, (et.length || Dn.length) && _c();
  }
}
let He = null, gc = null;
function cs(e) {
  const t = He;
  return He = e, gc = e && e.type.__scopeId || null, t;
}
function bc(e, t = He, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && hs(-1);
    const s = cs(t);
    let i;
    try {
      i = e(...o);
    } finally {
      cs(s), r._d && hs(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function E2(e, t) {
  if (He === null)
    return e;
  const n = $s(He), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = de] = t[o];
    s && (ne(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ft(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function un(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (jt(), Et(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Wt());
  }
}
function kd(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), n[e] = t;
  }
}
function gt(e, t, n = !1) {
  const r = vt();
  if (r || vn) {
    let o = vn ? vn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
function Md() {
  return !!(vt() || vn);
}
const xd = /* @__PURE__ */ Symbol.for("v-scx"), Dd = () => gt(xd);
function v2(e, t) {
  return Ds(e, null, t);
}
function Fd(e, t) {
  return Ds(
    e,
    null,
    { flush: "sync" }
  );
}
function En(e, t, n) {
  return Ds(e, t, n);
}
function Ds(e, t, n = de) {
  const { immediate: r, deep: o, flush: s, once: i } = n, a = Pe({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Tr) {
    if (s === "sync") {
      const b = Dd();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = Rt, b.resume = Rt, b.pause = Rt, b;
    }
  }
  const c = ze;
  a.call = (b, T, A) => Et(b, c, T, A);
  let f = !1;
  s === "post" ? a.scheduler = (b) => {
    Ze(b, c && c.suspense);
  } : s !== "sync" && (f = !0, a.scheduler = (b, T) => {
    T ? b() : ci(b);
  }), a.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const m = Rd(e, t, a);
  return Tr && (u ? u.push(m) : l && m()), m;
}
function Ud(e, t, n) {
  const r = this.proxy, o = Le(e) ? e.includes(".") ? yc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const i = Mr(this), a = Ds(o, s.bind(r), n);
  return i(), a;
}
function yc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Ec = /* @__PURE__ */ Symbol("_vte"), vc = (e) => e.__isTeleport, cr = (e) => e && (e.disabled || e.disabled === ""), qi = (e) => e && (e.defer || e.defer === ""), zi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Lo = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, Sc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, i, a, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: m,
      o: { insert: b, querySelector: T, createText: A, createComment: w }
    } = u, v = cr(t.props);
    let { shapeFlag: k, children: E, dynamicChildren: y } = t;
    if (e == null) {
      const P = t.el = A(""), I = t.anchor = A("");
      b(P, n, r), b(I, n, r);
      const F = (L, B) => {
        k & 16 && c(
          E,
          L,
          B,
          o,
          s,
          i,
          a,
          l
        );
      }, U = () => {
        const L = t.target = Lo(t.props, T), B = Ac(L, t, A, b);
        L && (i !== "svg" && zi(L) ? i = "svg" : i !== "mathml" && Gi(L) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), v || (F(L, B), Qr(t, !1)));
      };
      v && (F(n, I), Qr(t, !0)), qi(t.props) ? (t.el.__isMounted = !1, Ze(() => {
        U(), delete t.el.__isMounted;
      }, s)) : U();
    } else {
      if (qi(t.props) && e.el.__isMounted === !1) {
        Ze(() => {
          Sc.process(
            e,
            t,
            n,
            r,
            o,
            s,
            i,
            a,
            l,
            u
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const P = t.anchor = e.anchor, I = t.target = e.target, F = t.targetAnchor = e.targetAnchor, U = cr(e.props), L = U ? n : I, B = U ? P : F;
      if (i === "svg" || zi(I) ? i = "svg" : (i === "mathml" || Gi(I)) && (i = "mathml"), y ? (m(
        e.dynamicChildren,
        y,
        L,
        o,
        s,
        i,
        a
      ), pi(e, t, !0)) : l || f(
        e,
        t,
        L,
        B,
        o,
        s,
        i,
        a,
        !1
      ), v)
        U ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : jr(
          t,
          n,
          P,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = Lo(
          t.props,
          T
        );
        Y && jr(
          t,
          Y,
          null,
          u,
          0
        );
      } else U && jr(
        t,
        I,
        F,
        u,
        1
      );
      Qr(t, v);
    }
  },
  remove(e, t, n, { um: r, o: { remove: o } }, s) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: m
    } = e;
    if (f && (o(u), o(c)), s && o(l), i & 16) {
      const b = s || !cr(m);
      for (let T = 0; T < a.length; T++) {
        const A = a[T];
        r(
          A,
          t,
          n,
          b,
          !!A.dynamicChildren
        );
      }
    }
  },
  move: jr,
  hydrate: Hd
};
function jr(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(i, t, n), (!f || cr(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      o(
        u[m],
        t,
        n,
        2
      );
  f && r(a, t, n);
}
function Hd(e, t, n, r, o, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c }
}, f) {
  function m(A, w, v, k) {
    w.anchor = f(
      i(A),
      w,
      a(A),
      n,
      r,
      o,
      s
    ), w.targetStart = v, w.targetAnchor = k;
  }
  const b = t.target = Lo(
    t.props,
    l
  ), T = cr(t.props);
  if (b) {
    const A = b._lpa || b.firstChild;
    if (t.shapeFlag & 16)
      if (T)
        m(
          e,
          t,
          A,
          A && i(A)
        );
      else {
        t.anchor = i(e);
        let w = A;
        for (; w; ) {
          if (w && w.nodeType === 8) {
            if (w.data === "teleport start anchor")
              t.targetStart = w;
            else if (w.data === "teleport anchor") {
              t.targetAnchor = w, b._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          w = i(w);
        }
        t.targetAnchor || Ac(b, t, c, u), f(
          A && i(A),
          t,
          b,
          n,
          r,
          o,
          s
        );
      }
    Qr(t, T);
  } else T && t.shapeFlag & 16 && m(e, t, e, i(e));
  return t.anchor && i(t.anchor);
}
const $d = Sc;
function Qr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Ac(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Ec] = s, e && (r(o, e), r(s, e)), s;
}
const xt = /* @__PURE__ */ Symbol("_leaveCb"), Wr = /* @__PURE__ */ Symbol("_enterCb");
function Tc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fi(() => {
    e.isMounted = !0;
  }), kc(() => {
    e.isUnmounting = !0;
  }), e;
}
const ct = [Function, Array], wc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ct,
  onEnter: ct,
  onAfterEnter: ct,
  onEnterCancelled: ct,
  // leave
  onBeforeLeave: ct,
  onLeave: ct,
  onAfterLeave: ct,
  onLeaveCancelled: ct,
  // appear
  onBeforeAppear: ct,
  onAppear: ct,
  onAfterAppear: ct,
  onAppearCancelled: ct
}, Oc = (e) => {
  const t = e.subTree;
  return t.component ? Oc(t.component) : t;
}, Vd = {
  name: "BaseTransition",
  props: wc,
  setup(e, { slots: t }) {
    const n = vt(), r = Tc();
    return () => {
      const o = t.default && ui(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Lc(o), i = ue(e), { mode: a } = i;
      if (r.isLeaving)
        return ao(s);
      const l = Yi(s);
      if (!l)
        return ao(s);
      let u = vr(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== qe && Tn(l, u);
      let c = n.subTree && Yi(n.subTree);
      if (c && c.type !== qe && !_n(c, l) && Oc(n).type !== qe) {
        let f = vr(
          c,
          i,
          r,
          n
        );
        if (Tn(c, f), a === "out-in" && l.type !== qe)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, ao(s);
        a === "in-out" && l.type !== qe ? f.delayLeave = (m, b, T) => {
          const A = Cc(
            r,
            c
          );
          A[String(c.key)] = c, m[xt] = () => {
            b(), m[xt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            T(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function Lc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== qe) {
        t = n;
        break;
      }
  }
  return t;
}
const jd = Vd;
function Cc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function vr(e, t, n, r, o) {
  const {
    appear: s,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: m,
    onLeave: b,
    onAfterLeave: T,
    onLeaveCancelled: A,
    onBeforeAppear: w,
    onAppear: v,
    onAfterAppear: k,
    onAppearCancelled: E
  } = t, y = String(e.key), P = Cc(n, e), I = (L, B) => {
    L && Et(
      L,
      r,
      9,
      B
    );
  }, F = (L, B) => {
    const Y = B[1];
    I(L, B), Q(L) ? L.every((H) => H.length <= 1) && Y() : L.length <= 1 && Y();
  }, U = {
    mode: i,
    persisted: a,
    beforeEnter(L) {
      let B = l;
      if (!n.isMounted)
        if (s)
          B = w || l;
        else
          return;
      L[xt] && L[xt](
        !0
        /* cancelled */
      );
      const Y = P[y];
      Y && _n(e, Y) && Y.el[xt] && Y.el[xt](), I(B, [L]);
    },
    enter(L) {
      let B = u, Y = c, H = f;
      if (!n.isMounted)
        if (s)
          B = v || u, Y = k || c, H = E || f;
        else
          return;
      let Z = !1;
      const oe = L[Wr] = (ge) => {
        Z || (Z = !0, ge ? I(H, [L]) : I(Y, [L]), U.delayedLeave && U.delayedLeave(), L[Wr] = void 0);
      };
      B ? F(B, [L, oe]) : oe();
    },
    leave(L, B) {
      const Y = String(e.key);
      if (L[Wr] && L[Wr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      I(m, [L]);
      let H = !1;
      const Z = L[xt] = (oe) => {
        H || (H = !0, B(), oe ? I(A, [L]) : I(T, [L]), L[xt] = void 0, P[Y] === e && delete P[Y]);
      };
      P[Y] = e, b ? F(b, [L, Z]) : Z();
    },
    clone(L) {
      const B = vr(
        L,
        t,
        n,
        r,
        o
      );
      return o && o(B), B;
    }
  };
  return U;
}
function ao(e) {
  if (Fs(e))
    return e = nn(e), e.children = null, e;
}
function Yi(e) {
  if (!Fs(e))
    return vc(e.type) && e.children ? Lc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ne(n.default))
      return n.default();
  }
}
function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ui(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === ke ? (i.patchFlag & 128 && o++, r = r.concat(
      ui(i.children, t, a)
    )) : (t || i.type !== qe) && r.push(a != null ? nn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ln(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function S2(e) {
  const t = vt(), n = ai(null);
  if (t) {
    const o = t.refs === de ? t.refs = {} : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  }
  return n;
}
const us = /* @__PURE__ */ new WeakMap();
function ur(e, t, n, r, o = !1) {
  if (Q(e)) {
    e.forEach(
      (T, A) => ur(
        T,
        t && (Q(t) ? t[A] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Fn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ur(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? $s(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === de ? a.refs = {} : a.refs, f = a.setupState, m = ue(f), b = f === de ? $l : (T) => _e(m, T);
  if (u != null && u !== l) {
    if (Xi(t), Le(u))
      c[u] = null, b(u) && (f[u] = null);
    else if (Oe(u)) {
      u.value = null;
      const T = t;
      T.k && (c[T.k] = null);
    }
  }
  if (ne(l))
    Nr(l, a, 12, [i, c]);
  else {
    const T = Le(l), A = Oe(l);
    if (T || A) {
      const w = () => {
        if (e.f) {
          const v = T ? b(l) ? f[l] : c[l] : l.value;
          if (o)
            Q(v) && Qo(v, s);
          else if (Q(v))
            v.includes(s) || v.push(s);
          else if (T)
            c[l] = [s], b(l) && (f[l] = c[l]);
          else {
            const k = [s];
            l.value = k, e.k && (c[e.k] = k);
          }
        } else T ? (c[l] = i, b(l) && (f[l] = i)) : A && (l.value = i, e.k && (c[e.k] = i));
      };
      if (i) {
        const v = () => {
          w(), us.delete(e);
        };
        v.id = -1, us.set(e, v), Ze(v, n);
      } else
        Xi(e), w();
    }
  }
}
function Xi(e) {
  const t = us.get(e);
  t && (t.flags |= 8, us.delete(e));
}
Is().requestIdleCallback;
Is().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, Fs = (e) => e.type.__isKeepAlive;
function Wd(e, t) {
  Ic(e, "a", t);
}
function Bd(e, t) {
  Ic(e, "da", t);
}
function Ic(e, t, n = ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Us(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Fs(o.parent.vnode) && Kd(r, t, n, o), o = o.parent;
  }
}
function Kd(e, t, n, r) {
  const o = Us(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  di(() => {
    Qo(r[t], o);
  }, n);
}
function Us(e, t, n = ze, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      jt();
      const a = Mr(n), l = Et(t, n, e, i);
      return a(), Wt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const qt = (e) => (t, n = ze) => {
  (!Tr || e === "sp") && Us(e, (...r) => t(...r), n);
}, Pc = qt("bm"), fi = qt("m"), qd = qt(
  "bu"
), Nc = qt("u"), kc = qt(
  "bum"
), di = qt("um"), zd = qt(
  "sp"
), Gd = qt("rtg"), Yd = qt("rtc");
function Xd(e, t = ze) {
  Us("ec", e, t);
}
const Mc = "components";
function A2(e, t) {
  return Dc(Mc, e, !0, t) || e;
}
const xc = /* @__PURE__ */ Symbol.for("v-ndc");
function T2(e) {
  return Le(e) ? Dc(Mc, e, !1) || e : e || xc;
}
function Dc(e, t, n = !0, r = !1) {
  const o = He || ze;
  if (o) {
    const s = o.type;
    {
      const a = xh(
        s,
        !1
      );
      if (a && (a === t || a === at(t) || a === Cs(at(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ji(o[e] || s[e], t) || // global registration
      Ji(o.appContext[e], t)
    );
    return !i && r ? s : i;
  }
}
function Ji(e, t) {
  return e && (e[t] || e[at(t)] || e[Cs(at(t))]);
}
function Jd(e, t, n, r) {
  let o;
  const s = n, i = Q(e);
  if (i || Le(e)) {
    const a = i && Vt(e);
    let l = !1, u = !1;
    a && (l = !it(e), u = Bt(e), e = ks(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? Hn(yt(e[c])) : yt(e[c]) : e[c],
        c,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, s);
  } else if (ye(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, l) => t(a, l, void 0, s)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        o[l] = t(e[c], c, l, s);
      }
    }
  else
    o = [];
  return o;
}
function w2(e, t, n = {}, r, o) {
  if (He.ce || He.parent && Fn(He.parent) && He.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Ut(), ms(
      ke,
      null,
      [Ie("slot", n, r && r())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), Ut();
  const i = s && Fc(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ms(
    ke,
    {
      key: (a && !bt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Fc(e) {
  return e.some((t) => Ar(t) ? !(t.type === qe || t.type === ke && !Fc(t.children)) : !0) ? e : null;
}
const Co = (e) => e ? nu(e) ? $s(e) : Co(e.parent) : null, fr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Co(e.parent),
    $root: (e) => Co(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ci(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = li.bind(e.proxy)),
    $watch: (e) => Ud.bind(e)
  })
), lo = (e, t) => e !== de && !e.__isScriptSetup && _e(e, t), Qd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
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
        if (lo(r, t))
          return i[t] = 1, r[t];
        if (o !== de && _e(o, t))
          return i[t] = 2, o[t];
        if (_e(s, t))
          return i[t] = 3, s[t];
        if (n !== de && _e(n, t))
          return i[t] = 4, n[t];
        Ro && (i[t] = 0);
      }
    }
    const u = fr[t];
    let c, f;
    if (u)
      return t === "$attrs" && Ke(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== de && _e(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, _e(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return lo(o, t) ? (o[t] = n, !0) : r !== de && _e(r, t) ? (r[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: i }
  }, a) {
    let l;
    return !!(n[a] || e !== de && a[0] !== "$" && _e(e, a) || lo(t, a) || _e(s, a) || _e(r, a) || _e(fr, a) || _e(o.config.globalProperties, a) || (l = i.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fs(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function O2(e, t) {
  return !e || !t ? e || t : Q(e) && Q(t) ? e.concat(t) : Pe({}, fs(e), fs(t));
}
let Ro = !0;
function Zd(e) {
  const t = Hc(e), n = e.proxy, r = e.ctx;
  Ro = !1, t.beforeCreate && Qi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: m,
    beforeUpdate: b,
    updated: T,
    activated: A,
    deactivated: w,
    beforeDestroy: v,
    beforeUnmount: k,
    destroyed: E,
    unmounted: y,
    render: P,
    renderTracked: I,
    renderTriggered: F,
    errorCaptured: U,
    serverPrefetch: L,
    // public API
    expose: B,
    inheritAttrs: Y,
    // assets
    components: H,
    directives: Z,
    filters: oe
  } = t;
  if (u && eh(u, r, null), i)
    for (const $ in i) {
      const G = i[$];
      ne(G) && (r[$] = G.bind(n));
    }
  if (o) {
    const $ = o.call(n, n);
    ye($) && (e.data = Pr($));
  }
  if (Ro = !0, s)
    for (const $ in s) {
      const G = s[$], ce = ne(G) ? G.bind(n, n) : ne(G.get) ? G.get.bind(n, n) : Rt, pe = !ne(G) && ne(G.set) ? G.set.bind(n) : Rt, re = Ee({
        get: ce,
        set: pe
      });
      Object.defineProperty(r, $, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: (fe) => re.value = fe
      });
    }
  if (a)
    for (const $ in a)
      Uc(a[$], r, n, $);
  if (l) {
    const $ = ne(l) ? l.call(n) : l;
    Reflect.ownKeys($).forEach((G) => {
      kd(G, $[G]);
    });
  }
  c && Qi(c, e, "c");
  function J($, G) {
    Q(G) ? G.forEach((ce) => $(ce.bind(n))) : G && $(G.bind(n));
  }
  if (J(Pc, f), J(fi, m), J(qd, b), J(Nc, T), J(Wd, A), J(Bd, w), J(Xd, U), J(Yd, I), J(Gd, F), J(kc, k), J(di, y), J(zd, L), Q(B))
    if (B.length) {
      const $ = e.exposed || (e.exposed = {});
      B.forEach((G) => {
        Object.defineProperty($, G, {
          get: () => n[G],
          set: (ce) => n[G] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === Rt && (e.render = P), Y != null && (e.inheritAttrs = Y), H && (e.components = H), Z && (e.directives = Z), L && Rc(e);
}
function eh(e, t, n = Rt) {
  Q(e) && (e = Io(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ye(o) ? "default" in o ? s = gt(
      o.from || r,
      o.default,
      !0
    ) : s = gt(o.from || r) : s = gt(o), Oe(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s;
  }
}
function Qi(e, t, n) {
  Et(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Uc(e, t, n, r) {
  let o = r.includes(".") ? yc(n, r) : () => n[r];
  if (Le(e)) {
    const s = t[e];
    ne(s) && En(o, s);
  } else if (ne(e))
    En(o, e.bind(n));
  else if (ye(e))
    if (Q(e))
      e.forEach((s) => Uc(s, t, n, r));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && En(o, s, e);
    }
}
function Hc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => ds(l, u, i, !0)
  ), ds(l, t, i)), ye(t) && s.set(t, l), l;
}
function ds(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && ds(e, s, n, !0), o && o.forEach(
    (i) => ds(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = th[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const th = {
  data: Zi,
  props: ea,
  emits: ea,
  // objects
  methods: rr,
  computed: rr,
  // lifecycle
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  // assets
  components: rr,
  directives: rr,
  // watch
  watch: rh,
  // provide / inject
  provide: Zi,
  inject: nh
};
function Zi(e, t) {
  return t ? e ? function() {
    return Pe(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nh(e, t) {
  return rr(Io(e), Io(t));
}
function Io(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rr(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ea(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    fs(e),
    fs(t ?? {})
  ) : t;
}
function rh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Je(e[r], t[r]);
  return n;
}
function $c() {
  return {
    app: null,
    config: {
      isNativeTag: $l,
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
let sh = 0;
function oh(e, t) {
  return function(r, o = null) {
    ne(r) || (r = Pe({}, r)), o != null && !ye(o) && (o = null);
    const s = $c(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = s.app = {
      _uid: sh++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Fh,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return i.has(c) || (c && ne(c.install) ? (i.add(c), c.install(u, ...f)) : ne(c) && (i.add(c), c(u, ...f))), u;
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
      mount(c, f, m) {
        if (!l) {
          const b = u._ceVNode || Ie(r, o);
          return b.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(b, c, m), l = !0, u._container = c, c.__vue_app__ = u, $s(b.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (Et(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = vn;
        vn = u;
        try {
          return c();
        } finally {
          vn = f;
        }
      }
    };
    return u;
  };
}
let vn = null;
function L2(e, t, n = de) {
  const r = vt(), o = at(t), s = Kt(t), i = Vc(e, o), a = Sd((l, u) => {
    let c, f = de, m;
    return Fd(() => {
      const b = e[o];
      nt(c, b) && (c = b, u());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(b) {
        const T = n.set ? n.set(b) : b;
        if (!nt(T, c) && !(f !== de && nt(b, f)))
          return;
        const A = r.vnode.props;
        A && // check if parent has passed v-model
        (t in A || o in A || s in A) && (`onUpdate:${t}` in A || `onUpdate:${o}` in A || `onUpdate:${s}` in A) || (c = b, u()), r.emit(`update:${t}`, T), nt(b, T) && nt(b, f) && !nt(T, m) && u(), f = b, m = T;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || de : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const Vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${Kt(t)}Modifiers`];
function ih(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || de;
  let o = n;
  const s = t.startsWith("update:"), i = s && Vc(r, t.slice(7));
  i && (i.trim && (o = n.map((c) => Le(c) ? c.trim() : c)), i.number && (o = n.map(Rs)));
  let a, l = r[a = no(t)] || // also try camelCase event handler (#2249)
  r[a = no(at(t))];
  !l && s && (l = r[a = no(Kt(t))]), l && Et(
    l,
    e,
    6,
    o
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Et(
      u,
      e,
      6,
      o
    );
  }
}
const ah = /* @__PURE__ */ new WeakMap();
function jc(e, t, n = !1) {
  const r = n ? ah : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!ne(e)) {
    const l = (u) => {
      const c = jc(u, t, !0);
      c && (a = !0, Pe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (ye(e) && r.set(e, null), null) : (Q(s) ? s.forEach((l) => i[l] = null) : Pe(i, s), ye(e) && r.set(e, i), i);
}
function Hs(e, t) {
  return !e || !ws(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Kt(t)) || _e(e, t));
}
function ta(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: m,
    setupState: b,
    ctx: T,
    inheritAttrs: A
  } = e, w = cs(e);
  let v, k;
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, P = y;
      v = Lt(
        u.call(
          P,
          y,
          c,
          f,
          b,
          m,
          T
        )
      ), k = a;
    } else {
      const y = t;
      v = Lt(
        y.length > 1 ? y(
          f,
          { attrs: a, slots: i, emit: l }
        ) : y(
          f,
          null
        )
      ), k = t.props ? a : lh(a);
    }
  } catch (y) {
    dr.length = 0, xs(y, e, 1), v = Ie(qe);
  }
  let E = v;
  if (k && A !== !1) {
    const y = Object.keys(k), { shapeFlag: P } = E;
    y.length && P & 7 && (s && y.some(Jo) && (k = ch(
      k,
      s
    )), E = nn(E, k, !1, !0));
  }
  return n.dirs && (E = nn(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Tn(E, n.transition), v = E, cs(w), v;
}
const lh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ws(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ch = (e, t) => {
  const n = {};
  for (const r in e)
    (!Jo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function uh(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? na(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const m = c[f];
        if (i[m] !== r[m] && !Hs(u, m))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? na(r, i, u) : !0 : !!i;
  return !1;
}
function na(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Hs(n, s))
      return !0;
  }
  return !1;
}
function fh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Wc = {}, Bc = () => Object.create(Wc), Kc = (e) => Object.getPrototypeOf(e) === Wc;
function dh(e, t, n, r = !1) {
  const o = {}, s = Bc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qc(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = r ? o : uc(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function hh(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = ue(o), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let m = c[f];
        if (Hs(e.emitsOptions, m))
          continue;
        const b = t[m];
        if (l)
          if (_e(s, m))
            b !== s[m] && (s[m] = b, u = !0);
          else {
            const T = at(m);
            o[T] = Po(
              l,
              a,
              T,
              b,
              e,
              !1
            );
          }
        else
          b !== s[m] && (s[m] = b, u = !0);
      }
    }
  } else {
    qc(e, t, o, s) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !_e(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Kt(f)) === f || !_e(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = Po(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== a)
      for (const f in s)
        (!t || !_e(t, f)) && (delete s[f], u = !0);
  }
  u && Dt(e.attrs, "set", "");
}
function qc(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (or(l))
        continue;
      const u = t[l];
      let c;
      o && _e(o, c = at(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Hs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (s) {
    const l = ue(n), u = a || de;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Po(
        o,
        l,
        f,
        u[f],
        e,
        !_e(u, f)
      );
    }
  }
  return i;
}
function Po(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = _e(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ne(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Mr(o);
          r = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        r = l;
      o.ce && o.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Kt(n)) && (r = !0));
  }
  return r;
}
const mh = /* @__PURE__ */ new WeakMap();
function zc(e, t, n = !1) {
  const r = n ? mh : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!ne(e)) {
    const c = (f) => {
      l = !0;
      const [m, b] = zc(f, t, !0);
      Pe(i, m), b && a.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return ye(e) && r.set(e, Mn), Mn;
  if (Q(s))
    for (let c = 0; c < s.length; c++) {
      const f = at(s[c]);
      ra(f) && (i[f] = de);
    }
  else if (s)
    for (const c in s) {
      const f = at(c);
      if (ra(f)) {
        const m = s[c], b = i[f] = Q(m) || ne(m) ? { type: m } : Pe({}, m), T = b.type;
        let A = !1, w = !0;
        if (Q(T))
          for (let v = 0; v < T.length; ++v) {
            const k = T[v], E = ne(k) && k.name;
            if (E === "Boolean") {
              A = !0;
              break;
            } else E === "String" && (w = !1);
          }
        else
          A = ne(T) && T.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = A, b[
          1
          /* shouldCastTrue */
        ] = w, (A || _e(b, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return ye(e) && r.set(e, u), u;
}
function ra(e) {
  return e[0] !== "$" && !or(e);
}
const hi = (e) => e === "_" || e === "_ctx" || e === "$stable", mi = (e) => Q(e) ? e.map(Lt) : [Lt(e)], ph = (e, t, n) => {
  if (t._n)
    return t;
  const r = bc((...o) => mi(t(...o)), n);
  return r._c = !1, r;
}, Gc = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (hi(o)) continue;
    const s = e[o];
    if (ne(s))
      t[o] = ph(o, s, r);
    else if (s != null) {
      const i = mi(s);
      t[o] = () => i;
    }
  }
}, Yc = (e, t) => {
  const n = mi(t);
  e.slots.default = () => n;
}, Xc = (e, t, n) => {
  for (const r in t)
    (n || !hi(r)) && (e[r] = t[r]);
}, _h = (e, t, n) => {
  const r = e.slots = Bc();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Xc(r, t, n), n && Bl(r, "_", o, !0)) : Gc(t, r);
  } else t && Yc(e, t);
}, gh = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = de;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = !1 : Xc(o, t, n) : (s = !t.$stable, Gc(t, o)), i = t;
  } else t && (Yc(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !hi(a) && i[a] == null && delete o[a];
}, Ze = Sh;
function bh(e) {
  return yh(e);
}
function yh(e, t) {
  const n = Is();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: m,
    setScopeId: b = Rt,
    insertStaticContent: T
  } = e, A = (p, g, _, N = null, C = null, M = null, W = void 0, V = null, d = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !_n(p, g) && (N = Te(p), fe(p, C, M, !0), p = null), g.patchFlag === -2 && (d = !1, g.dynamicChildren = null);
    const { type: h, ref: O, shapeFlag: x } = g;
    switch (h) {
      case kr:
        w(p, g, _, N);
        break;
      case qe:
        v(p, g, _, N);
        break;
      case Zr:
        p == null && k(g, _, N, W);
        break;
      case ke:
        H(
          p,
          g,
          _,
          N,
          C,
          M,
          W,
          V,
          d
        );
        break;
      default:
        x & 1 ? P(
          p,
          g,
          _,
          N,
          C,
          M,
          W,
          V,
          d
        ) : x & 6 ? Z(
          p,
          g,
          _,
          N,
          C,
          M,
          W,
          V,
          d
        ) : (x & 64 || x & 128) && h.process(
          p,
          g,
          _,
          N,
          C,
          M,
          W,
          V,
          d,
          De
        );
    }
    O != null && C ? ur(O, p && p.ref, M, g || p, !g) : O == null && p && p.ref != null && ur(p.ref, null, M, p, !0);
  }, w = (p, g, _, N) => {
    if (p == null)
      r(
        g.el = a(g.children),
        _,
        N
      );
    else {
      const C = g.el = p.el;
      g.children !== p.children && u(C, g.children);
    }
  }, v = (p, g, _, N) => {
    p == null ? r(
      g.el = l(g.children || ""),
      _,
      N
    ) : g.el = p.el;
  }, k = (p, g, _, N) => {
    [p.el, p.anchor] = T(
      p.children,
      g,
      _,
      N,
      p.el,
      p.anchor
    );
  }, E = ({ el: p, anchor: g }, _, N) => {
    let C;
    for (; p && p !== g; )
      C = m(p), r(p, _, N), p = C;
    r(g, _, N);
  }, y = ({ el: p, anchor: g }) => {
    let _;
    for (; p && p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, P = (p, g, _, N, C, M, W, V, d) => {
    if (g.type === "svg" ? W = "svg" : g.type === "math" && (W = "mathml"), p == null)
      I(
        g,
        _,
        N,
        C,
        M,
        W,
        V,
        d
      );
    else {
      const h = p.el && p.el._isVueCE ? p.el : null;
      try {
        h && h._beginPatch(), L(
          p,
          g,
          C,
          M,
          W,
          V,
          d
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, I = (p, g, _, N, C, M, W, V) => {
    let d, h;
    const { props: O, shapeFlag: x, transition: K, dirs: j } = p;
    if (d = p.el = i(
      p.type,
      M,
      O && O.is,
      O
    ), x & 8 ? c(d, p.children) : x & 16 && U(
      p.children,
      d,
      null,
      N,
      C,
      co(p, M),
      W,
      V
    ), j && un(p, null, N, "created"), F(d, p, p.scopeId, W, N), O) {
      for (const D in O)
        D !== "value" && !or(D) && s(d, D, null, O[D], M, N);
      "value" in O && s(d, "value", null, O.value, M), (h = O.onVnodeBeforeMount) && Tt(h, N, p);
    }
    j && un(p, null, N, "beforeMount");
    const R = Eh(C, K);
    R && K.beforeEnter(d), r(d, g, _), ((h = O && O.onVnodeMounted) || R || j) && Ze(() => {
      h && Tt(h, N, p), R && K.enter(d), j && un(p, null, N, "mounted");
    }, C);
  }, F = (p, g, _, N, C) => {
    if (_ && b(p, _), N)
      for (let M = 0; M < N.length; M++)
        b(p, N[M]);
    if (C) {
      let M = C.subTree;
      if (g === M || Zc(M.type) && (M.ssContent === g || M.ssFallback === g)) {
        const W = C.vnode;
        F(
          p,
          W,
          W.scopeId,
          W.slotScopeIds,
          C.parent
        );
      }
    }
  }, U = (p, g, _, N, C, M, W, V, d = 0) => {
    for (let h = d; h < p.length; h++) {
      const O = p[h] = V ? Zt(p[h]) : Lt(p[h]);
      A(
        null,
        O,
        g,
        _,
        N,
        C,
        M,
        W,
        V
      );
    }
  }, L = (p, g, _, N, C, M, W) => {
    const V = g.el = p.el;
    let { patchFlag: d, dynamicChildren: h, dirs: O } = g;
    d |= p.patchFlag & 16;
    const x = p.props || de, K = g.props || de;
    let j;
    if (_ && fn(_, !1), (j = K.onVnodeBeforeUpdate) && Tt(j, _, g, p), O && un(g, p, _, "beforeUpdate"), _ && fn(_, !0), (x.innerHTML && K.innerHTML == null || x.textContent && K.textContent == null) && c(V, ""), h ? B(
      p.dynamicChildren,
      h,
      V,
      _,
      N,
      co(g, C),
      M
    ) : W || G(
      p,
      g,
      V,
      null,
      _,
      N,
      co(g, C),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        Y(V, x, K, _, C);
      else if (d & 2 && x.class !== K.class && s(V, "class", null, K.class, C), d & 4 && s(V, "style", x.style, K.style, C), d & 8) {
        const R = g.dynamicProps;
        for (let D = 0; D < R.length; D++) {
          const X = R[D], ae = x[X], we = K[X];
          (we !== ae || X === "value") && s(V, X, ae, we, C, _);
        }
      }
      d & 1 && p.children !== g.children && c(V, g.children);
    } else !W && h == null && Y(V, x, K, _, C);
    ((j = K.onVnodeUpdated) || O) && Ze(() => {
      j && Tt(j, _, g, p), O && un(g, p, _, "updated");
    }, N);
  }, B = (p, g, _, N, C, M, W) => {
    for (let V = 0; V < g.length; V++) {
      const d = p[V], h = g[V], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_n(d, h) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      A(
        d,
        h,
        O,
        null,
        N,
        C,
        M,
        W,
        !0
      );
    }
  }, Y = (p, g, _, N, C) => {
    if (g !== _) {
      if (g !== de)
        for (const M in g)
          !or(M) && !(M in _) && s(
            p,
            M,
            g[M],
            null,
            C,
            N
          );
      for (const M in _) {
        if (or(M)) continue;
        const W = _[M], V = g[M];
        W !== V && M !== "value" && s(p, M, V, W, C, N);
      }
      "value" in _ && s(p, "value", g.value, _.value, C);
    }
  }, H = (p, g, _, N, C, M, W, V, d) => {
    const h = g.el = p ? p.el : a(""), O = g.anchor = p ? p.anchor : a("");
    let { patchFlag: x, dynamicChildren: K, slotScopeIds: j } = g;
    j && (V = V ? V.concat(j) : j), p == null ? (r(h, _, N), r(O, _, N), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      O,
      C,
      M,
      W,
      V,
      d
    )) : x > 0 && x & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === K.length ? (B(
      p.dynamicChildren,
      K,
      _,
      C,
      M,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || C && g === C.subTree) && pi(
      p,
      g,
      !0
      /* shallow */
    )) : G(
      p,
      g,
      _,
      O,
      C,
      M,
      W,
      V,
      d
    );
  }, Z = (p, g, _, N, C, M, W, V, d) => {
    g.slotScopeIds = V, p == null ? g.shapeFlag & 512 ? C.ctx.activate(
      g,
      _,
      N,
      W,
      d
    ) : oe(
      g,
      _,
      N,
      C,
      M,
      W,
      d
    ) : ge(p, g, d);
  }, oe = (p, g, _, N, C, M, W) => {
    const V = p.component = Ih(
      p,
      N,
      C
    );
    if (Fs(p) && (V.ctx.renderer = De), Ph(V, !1, W), V.asyncDep) {
      if (C && C.registerDep(V, J, W), !p.el) {
        const d = V.subTree = Ie(qe);
        v(null, d, g, _), p.placeholder = d.el;
      }
    } else
      J(
        V,
        p,
        g,
        _,
        C,
        M,
        W
      );
  }, ge = (p, g, _) => {
    const N = g.component = p.component;
    if (uh(p, g, _))
      if (N.asyncDep && !N.asyncResolved) {
        $(N, g, _);
        return;
      } else
        N.next = g, N.update();
    else
      g.el = p.el, N.vnode = g;
  }, J = (p, g, _, N, C, M, W) => {
    const V = () => {
      if (p.isMounted) {
        let { next: x, bu: K, u: j, parent: R, vnode: D } = p;
        {
          const Fe = Jc(p);
          if (Fe) {
            x && (x.el = D.el, $(p, x, W)), Fe.asyncDep.then(() => {
              p.isUnmounted || V();
            });
            return;
          }
        }
        let X = x, ae;
        fn(p, !1), x ? (x.el = D.el, $(p, x, W)) : x = D, K && Jr(K), (ae = x.props && x.props.onVnodeBeforeUpdate) && Tt(ae, R, x, D), fn(p, !0);
        const we = ta(p), Xe = p.subTree;
        p.subTree = we, A(
          Xe,
          we,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          Te(Xe),
          p,
          C,
          M
        ), x.el = we.el, X === null && fh(p, we.el), j && Ze(j, C), (ae = x.props && x.props.onVnodeUpdated) && Ze(
          () => Tt(ae, R, x, D),
          C
        );
      } else {
        let x;
        const { el: K, props: j } = g, { bm: R, m: D, parent: X, root: ae, type: we } = p, Xe = Fn(g);
        fn(p, !1), R && Jr(R), !Xe && (x = j && j.onVnodeBeforeMount) && Tt(x, X, g), fn(p, !0);
        {
          ae.ce && // @ts-expect-error _def is private
          ae.ce._def.shadowRoot !== !1 && ae.ce._injectChildStyle(we);
          const Fe = p.subTree = ta(p);
          A(
            null,
            Fe,
            _,
            N,
            p,
            C,
            M
          ), g.el = Fe.el;
        }
        if (D && Ze(D, C), !Xe && (x = j && j.onVnodeMounted)) {
          const Fe = g;
          Ze(
            () => Tt(x, X, Fe),
            C
          );
        }
        (g.shapeFlag & 256 || X && Fn(X.vnode) && X.vnode.shapeFlag & 256) && p.a && Ze(p.a, C), p.isMounted = !0, g = _ = N = null;
      }
    };
    p.scope.on();
    const d = p.effect = new Xl(V);
    p.scope.off();
    const h = p.update = d.run.bind(d), O = p.job = d.runIfDirty.bind(d);
    O.i = p, O.id = p.uid, d.scheduler = () => ci(O), fn(p, !0), h();
  }, $ = (p, g, _) => {
    g.component = p;
    const N = p.vnode.props;
    p.vnode = g, p.next = null, hh(p, g.props, N, _), gh(p, g.children, _), jt(), Ki(p), Wt();
  }, G = (p, g, _, N, C, M, W, V, d = !1) => {
    const h = p && p.children, O = p ? p.shapeFlag : 0, x = g.children, { patchFlag: K, shapeFlag: j } = g;
    if (K > 0) {
      if (K & 128) {
        pe(
          h,
          x,
          _,
          N,
          C,
          M,
          W,
          V,
          d
        );
        return;
      } else if (K & 256) {
        ce(
          h,
          x,
          _,
          N,
          C,
          M,
          W,
          V,
          d
        );
        return;
      }
    }
    j & 8 ? (O & 16 && se(h, C, M), x !== h && c(_, x)) : O & 16 ? j & 16 ? pe(
      h,
      x,
      _,
      N,
      C,
      M,
      W,
      V,
      d
    ) : se(h, C, M, !0) : (O & 8 && c(_, ""), j & 16 && U(
      x,
      _,
      N,
      C,
      M,
      W,
      V,
      d
    ));
  }, ce = (p, g, _, N, C, M, W, V, d) => {
    p = p || Mn, g = g || Mn;
    const h = p.length, O = g.length, x = Math.min(h, O);
    let K;
    for (K = 0; K < x; K++) {
      const j = g[K] = d ? Zt(g[K]) : Lt(g[K]);
      A(
        p[K],
        j,
        _,
        null,
        C,
        M,
        W,
        V,
        d
      );
    }
    h > O ? se(
      p,
      C,
      M,
      !0,
      !1,
      x
    ) : U(
      g,
      _,
      N,
      C,
      M,
      W,
      V,
      d,
      x
    );
  }, pe = (p, g, _, N, C, M, W, V, d) => {
    let h = 0;
    const O = g.length;
    let x = p.length - 1, K = O - 1;
    for (; h <= x && h <= K; ) {
      const j = p[h], R = g[h] = d ? Zt(g[h]) : Lt(g[h]);
      if (_n(j, R))
        A(
          j,
          R,
          _,
          null,
          C,
          M,
          W,
          V,
          d
        );
      else
        break;
      h++;
    }
    for (; h <= x && h <= K; ) {
      const j = p[x], R = g[K] = d ? Zt(g[K]) : Lt(g[K]);
      if (_n(j, R))
        A(
          j,
          R,
          _,
          null,
          C,
          M,
          W,
          V,
          d
        );
      else
        break;
      x--, K--;
    }
    if (h > x) {
      if (h <= K) {
        const j = K + 1, R = j < O ? g[j].el : N;
        for (; h <= K; )
          A(
            null,
            g[h] = d ? Zt(g[h]) : Lt(g[h]),
            _,
            R,
            C,
            M,
            W,
            V,
            d
          ), h++;
      }
    } else if (h > K)
      for (; h <= x; )
        fe(p[h], C, M, !0), h++;
    else {
      const j = h, R = h, D = /* @__PURE__ */ new Map();
      for (h = R; h <= K; h++) {
        const st = g[h] = d ? Zt(g[h]) : Lt(g[h]);
        st.key != null && D.set(st.key, h);
      }
      let X, ae = 0;
      const we = K - R + 1;
      let Xe = !1, Fe = 0;
      const cn = new Array(we);
      for (h = 0; h < we; h++) cn[h] = 0;
      for (h = j; h <= x; h++) {
        const st = p[h];
        if (ae >= we) {
          fe(st, C, M, !0);
          continue;
        }
        let At;
        if (st.key != null)
          At = D.get(st.key);
        else
          for (X = R; X <= K; X++)
            if (cn[X - R] === 0 && _n(st, g[X])) {
              At = X;
              break;
            }
        At === void 0 ? fe(st, C, M, !0) : (cn[At - R] = h + 1, At >= Fe ? Fe = At : Xe = !0, A(
          st,
          g[At],
          _,
          null,
          C,
          M,
          W,
          V,
          d
        ), ae++);
      }
      const to = Xe ? vh(cn) : Mn;
      for (X = to.length - 1, h = we - 1; h >= 0; h--) {
        const st = R + h, At = g[st], Hi = g[st + 1], $i = st + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Hi.el || Qc(Hi)
        ) : N;
        cn[h] === 0 ? A(
          null,
          At,
          _,
          $i,
          C,
          M,
          W,
          V,
          d
        ) : Xe && (X < 0 || h !== to[X] ? re(At, _, $i, 2) : X--);
      }
    }
  }, re = (p, g, _, N, C = null) => {
    const { el: M, type: W, transition: V, children: d, shapeFlag: h } = p;
    if (h & 6) {
      re(p.component.subTree, g, _, N);
      return;
    }
    if (h & 128) {
      p.suspense.move(g, _, N);
      return;
    }
    if (h & 64) {
      W.move(p, g, _, De);
      return;
    }
    if (W === ke) {
      r(M, g, _);
      for (let x = 0; x < d.length; x++)
        re(d[x], g, _, N);
      r(p.anchor, g, _);
      return;
    }
    if (W === Zr) {
      E(p, g, _);
      return;
    }
    if (N !== 2 && h & 1 && V)
      if (N === 0)
        V.beforeEnter(M), r(M, g, _), Ze(() => V.enter(M), C);
      else {
        const { leave: x, delayLeave: K, afterLeave: j } = V, R = () => {
          p.ctx.isUnmounted ? o(M) : r(M, g, _);
        }, D = () => {
          M._isLeaving && M[xt](
            !0
            /* cancelled */
          ), x(M, () => {
            R(), j && j();
          });
        };
        K ? K(M, R, D) : D();
      }
    else
      r(M, g, _);
  }, fe = (p, g, _, N = !1, C = !1) => {
    const {
      type: M,
      props: W,
      ref: V,
      children: d,
      dynamicChildren: h,
      shapeFlag: O,
      patchFlag: x,
      dirs: K,
      cacheIndex: j
    } = p;
    if (x === -2 && (C = !1), V != null && (jt(), ur(V, null, _, p, !0), Wt()), j != null && (g.renderCache[j] = void 0), O & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const R = O & 1 && K, D = !Fn(p);
    let X;
    if (D && (X = W && W.onVnodeBeforeUnmount) && Tt(X, g, p), O & 6)
      lt(p.component, _, N);
    else {
      if (O & 128) {
        p.suspense.unmount(_, N);
        return;
      }
      R && un(p, null, g, "beforeUnmount"), O & 64 ? p.type.remove(
        p,
        g,
        _,
        De,
        N
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== ke || x > 0 && x & 64) ? se(
        h,
        g,
        _,
        !1,
        !0
      ) : (M === ke && x & 384 || !C && O & 16) && se(d, g, _), N && xe(p);
    }
    (D && (X = W && W.onVnodeUnmounted) || R) && Ze(() => {
      X && Tt(X, g, p), R && un(p, null, g, "unmounted");
    }, _);
  }, xe = (p) => {
    const { type: g, el: _, anchor: N, transition: C } = p;
    if (g === ke) {
      Ve(_, N);
      return;
    }
    if (g === Zr) {
      y(p);
      return;
    }
    const M = () => {
      o(_), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (p.shapeFlag & 1 && C && !C.persisted) {
      const { leave: W, delayLeave: V } = C, d = () => W(_, M);
      V ? V(p.el, M, d) : d();
    } else
      M();
  }, Ve = (p, g) => {
    let _;
    for (; p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, lt = (p, g, _) => {
    const { bum: N, scope: C, job: M, subTree: W, um: V, m: d, a: h } = p;
    sa(d), sa(h), N && Jr(N), C.stop(), M && (M.flags |= 8, fe(W, p, g, _)), V && Ze(V, g), Ze(() => {
      p.isUnmounted = !0;
    }, g);
  }, se = (p, g, _, N = !1, C = !1, M = 0) => {
    for (let W = M; W < p.length; W++)
      fe(p[W], g, _, N, C);
  }, Te = (p) => {
    if (p.shapeFlag & 6)
      return Te(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = m(p.anchor || p.el), _ = g && g[Ec];
    return _ ? m(_) : g;
  };
  let je = !1;
  const Ye = (p, g, _) => {
    let N;
    p == null ? g._vnode && (fe(g._vnode, null, null, !0), N = g._vnode.component) : A(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = p, je || (je = !0, Ki(N), pc(), je = !1);
  }, De = {
    p: A,
    um: fe,
    m: re,
    r: xe,
    mt: oe,
    mc: U,
    pc: G,
    pbc: B,
    n: Te,
    o: e
  };
  return {
    render: Ye,
    hydrate: void 0,
    createApp: oh(Ye)
  };
}
function co({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Eh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pi(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Q(r) && Q(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = Zt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && pi(i, a)), a.type === kr && (a.patchFlag !== -1 ? a.el = i.el : a.__elIndex = s + // take fragment start anchor into account
      (e.type === ke ? 1 : 0)), a.type === qe && !a.el && (a.el = i.el);
    }
}
function vh(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < u ? s = a + 1 : i = a;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function Jc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jc(t);
}
function sa(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qc(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qc(t.subTree) : null;
}
const Zc = (e) => e.__isSuspense;
function Sh(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Nd(e);
}
const ke = /* @__PURE__ */ Symbol.for("v-fgt"), kr = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), Zr = /* @__PURE__ */ Symbol.for("v-stc"), dr = [];
let ot = null;
function Ut(e = !1) {
  dr.push(ot = e ? null : []);
}
function Ah() {
  dr.pop(), ot = dr[dr.length - 1] || null;
}
let Sr = 1;
function hs(e, t = !1) {
  Sr += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function eu(e) {
  return e.dynamicChildren = Sr > 0 ? ot || Mn : null, Ah(), Sr > 0 && ot && ot.push(e), e;
}
function sr(e, t, n, r, o, s) {
  return eu(
    mt(
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
function ms(e, t, n, r, o) {
  return eu(
    Ie(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _n(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tu = ({ key: e }) => e ?? null, es = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || Oe(e) || ne(e) ? { i: He, r: e, k: t, f: !!n } : e : null);
function mt(e, t = null, n = null, r = 0, o = null, s = e === ke ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tu(t),
    ref: t && es(t),
    scopeId: gc,
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
    ctx: He
  };
  return a ? (_i(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Le(n) ? 8 : 16), Sr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ot.push(l), l;
}
const Ie = Th;
function Th(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === xc) && (e = qe), Ar(e)) {
    const a = nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _i(a, n), Sr > 0 && !s && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (Dh(e) && (e = e.__vccOpts), t) {
    t = wh(t);
    let { class: a, style: l } = t;
    a && !Le(a) && (t.class = tn(a)), ye(l) && (Ms(l) && !Q(l) && (l = Pe({}, l)), t.style = Ps(l));
  }
  const i = Le(e) ? 1 : Zc(e) ? 128 : vc(e) ? 64 : ye(e) ? 4 : ne(e) ? 2 : 0;
  return mt(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function wh(e) {
  return e ? Ms(e) || Kc(e) ? Pe({}, e) : e : null;
}
function nn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? Lh(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && tu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Q(s) ? s.concat(es(t)) : [s, es(t)] : es(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && nn(e.ssContent),
    ssFallback: e.ssFallback && nn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Tn(
    c,
    l.clone(c)
  ), c;
}
function Oh(e = " ", t = 0) {
  return Ie(kr, null, e, t);
}
function C2(e, t) {
  const n = Ie(Zr, null, e);
  return n.staticCount = t, n;
}
function oa(e = "", t = !1) {
  return t ? (Ut(), ms(qe, null, e)) : Ie(qe, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? Ie(qe) : Q(e) ? Ie(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ar(e) ? Zt(e) : Ie(kr, null, String(e));
}
function Zt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nn(e);
}
function _i(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _i(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Kc(t) ? t._ctx = He : o === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: He }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Oh(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = tn([t.class, r.class]));
      else if (o === "style")
        t.style = Ps([t.style, r.style]);
      else if (ws(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(Q(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Tt(e, t, n, r = null) {
  Et(e, t, 7, [
    n,
    r
  ]);
}
const Ch = $c();
let Rh = 0;
function Ih(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Ch, s = {
    uid: Rh++,
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
    scope: new Gl(
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
    propsOptions: zc(r, o),
    emitsOptions: jc(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: de,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: de,
    data: de,
    props: de,
    attrs: de,
    slots: de,
    refs: de,
    setupState: de,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ih.bind(null, s), e.ce && e.ce(s), s;
}
let ze = null;
const vt = () => ze || He;
let ps, No;
{
  const e = Is(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), No = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tr = n
  );
}
const Mr = (e) => {
  const t = ze;
  return ps(e), e.scope.on(), () => {
    e.scope.off(), ps(t);
  };
}, ia = () => {
  ze && ze.scope.off(), ps(null);
};
function nu(e) {
  return e.vnode.shapeFlag & 4;
}
let Tr = !1;
function Ph(e, t = !1, n = !1) {
  t && No(t);
  const { props: r, children: o } = e.vnode, s = nu(e);
  dh(e, r, s, t), _h(e, o, n || t);
  const i = s ? Nh(e, t) : void 0;
  return t && No(!1), i;
}
function Nh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qd);
  const { setup: r } = n;
  if (r) {
    jt();
    const o = e.setupContext = r.length > 1 ? Mh(e) : null, s = Mr(e), i = Nr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Vl(i);
    if (Wt(), s(), (a || e.sp) && !Fn(e) && Rc(e), a) {
      if (i.then(ia, ia), t)
        return i.then((l) => {
          aa(e, l);
        }).catch((l) => {
          xs(l, e, 0);
        });
      e.asyncDep = i;
    } else
      aa(e, i);
  } else
    ru(e);
}
function aa(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = dc(t)), ru(e);
}
function ru(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Rt);
  {
    const o = Mr(e);
    jt();
    try {
      Zd(e);
    } finally {
      Wt(), o();
    }
  }
}
const kh = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function Mh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, kh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dc(ii(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in fr)
        return fr[n](e);
    },
    has(t, n) {
      return n in t || n in fr;
    }
  })) : e.proxy;
}
function xh(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dh(e) {
  return ne(e) && "__vccOpts" in e;
}
const Ee = (e, t) => Ld(e, t, Tr);
function $n(e, t, n) {
  try {
    hs(-1);
    const r = arguments.length;
    return r === 2 ? ye(t) && !Q(t) ? Ar(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ar(n) && (n = [n]), Ie(e, t, n));
  } finally {
    hs(1);
  }
}
const Fh = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ko;
const la = typeof window < "u" && window.trustedTypes;
if (la)
  try {
    ko = /* @__PURE__ */ la.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const su = ko ? (e) => ko.createHTML(e) : (e) => e, Uh = "http://www.w3.org/2000/svg", Hh = "http://www.w3.org/1998/Math/MathML", Mt = typeof document < "u" ? document : null, ca = Mt && /* @__PURE__ */ Mt.createElement("template"), $h = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Mt.createElementNS(Uh, e) : t === "mathml" ? Mt.createElementNS(Hh, e) : n ? Mt.createElement(e, { is: n }) : Mt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Mt.createTextNode(e),
  createComment: (e) => Mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      ca.innerHTML = su(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = ca.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, zt = "transition", Qn = "animation", Vn = /* @__PURE__ */ Symbol("_vtc"), ou = {
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
}, iu = /* @__PURE__ */ Pe(
  {},
  wc,
  ou
), Vh = (e) => (e.displayName = "Transition", e.props = iu, e), R2 = /* @__PURE__ */ Vh(
  (e, { slots: t }) => $n(jd, au(e), t)
), dn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ua = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function au(e) {
  const t = {};
  for (const H in e)
    H in ou || (t[H] = e[H]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = i,
    appearToClass: c = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, T = jh(o), A = T && T[0], w = T && T[1], {
    onBeforeEnter: v,
    onEnter: k,
    onEnterCancelled: E,
    onLeave: y,
    onLeaveCancelled: P,
    onBeforeAppear: I = v,
    onAppear: F = k,
    onAppearCancelled: U = E
  } = t, L = (H, Z, oe, ge) => {
    H._enterCancelled = ge, Yt(H, Z ? c : a), Yt(H, Z ? u : i), oe && oe();
  }, B = (H, Z) => {
    H._isLeaving = !1, Yt(H, f), Yt(H, b), Yt(H, m), Z && Z();
  }, Y = (H) => (Z, oe) => {
    const ge = H ? F : k, J = () => L(Z, H, oe);
    dn(ge, [Z, J]), fa(() => {
      Yt(Z, H ? l : s), wt(Z, H ? c : a), ua(ge) || da(Z, r, A, J);
    });
  };
  return Pe(t, {
    onBeforeEnter(H) {
      dn(v, [H]), wt(H, s), wt(H, i);
    },
    onBeforeAppear(H) {
      dn(I, [H]), wt(H, l), wt(H, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(H, Z) {
      H._isLeaving = !0;
      const oe = () => B(H, Z);
      wt(H, f), H._enterCancelled ? (wt(H, m), Mo(H)) : (Mo(H), wt(H, m)), fa(() => {
        H._isLeaving && (Yt(H, f), wt(H, b), ua(y) || da(H, r, w, oe));
      }), dn(y, [H, oe]);
    },
    onEnterCancelled(H) {
      L(H, !1, void 0, !0), dn(E, [H]);
    },
    onAppearCancelled(H) {
      L(H, !0, void 0, !0), dn(U, [H]);
    },
    onLeaveCancelled(H) {
      B(H), dn(P, [H]);
    }
  });
}
function jh(e) {
  if (e == null)
    return null;
  if (ye(e))
    return [uo(e.enter), uo(e.leave)];
  {
    const t = uo(e);
    return [t, t];
  }
}
function uo(e) {
  return Kf(e);
}
function wt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vn] || (e[Vn] = /* @__PURE__ */ new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Vn];
  n && (n.delete(t), n.size || (e[Vn] = void 0));
}
function fa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wh = 0;
function da(e, t, n, r) {
  const o = e._endId = ++Wh, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = lu(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, m), s();
  }, m = (b) => {
    b.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, m);
}
function lu(e, t) {
  const n = window.getComputedStyle(e), r = (T) => (n[T] || "").split(", "), o = r(`${zt}Delay`), s = r(`${zt}Duration`), i = ha(o, s), a = r(`${Qn}Delay`), l = r(`${Qn}Duration`), u = ha(a, l);
  let c = null, f = 0, m = 0;
  t === zt ? i > 0 && (c = zt, f = i, m = s.length) : t === Qn ? u > 0 && (c = Qn, f = u, m = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? zt : Qn : null, m = c ? c === zt ? s.length : l.length : 0);
  const b = c === zt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${zt}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: m,
    hasTransform: b
  };
}
function ha(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ma(n) + ma(e[r])));
}
function ma(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Bh(e, t, n) {
  const r = e[Vn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _s = /* @__PURE__ */ Symbol("_vod"), cu = /* @__PURE__ */ Symbol("_vsh"), I2 = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[_s] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Zn(e, !0), r.enter(e)) : r.leave(e, () => {
      Zn(e, !1);
    }) : Zn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zn(e, t);
  }
};
function Zn(e, t) {
  e.style.display = t ? e[_s] : "none", e[cu] = !t;
}
const Kh = /* @__PURE__ */ Symbol(""), qh = /(?:^|;)\s*display\s*:/;
function zh(e, t, n) {
  const r = e.style, o = Le(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && ts(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && ts(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), ts(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Kh];
      i && (n += ";" + i), r.cssText = n, s = qh.test(n);
    }
  } else t && e.removeAttribute("style");
  _s in e && (e[_s] = s ? r.display : "", e[cu] && (r.display = "none"));
}
const pa = /\s*!important$/;
function ts(e, t, n) {
  if (Q(n))
    n.forEach((r) => ts(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Gh(e, t);
    pa.test(n) ? e.setProperty(
      Kt(r),
      n.replace(pa, ""),
      "important"
    ) : e[r] = n;
  }
}
const _a = ["Webkit", "Moz", "ms"], fo = {};
function Gh(e, t) {
  const n = fo[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return fo[t] = r;
  r = Cs(r);
  for (let o = 0; o < _a.length; o++) {
    const s = _a[o] + r;
    if (s in e)
      return fo[t] = s;
  }
  return t;
}
const ga = "http://www.w3.org/1999/xlink";
function ba(e, t, n, r, o, s = Jf(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ga, t.slice(6, t.length)) : e.setAttributeNS(ga, t, n) : n == null || s && !Kl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : bt(n) ? String(n) : n
  );
}
function ya(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? su(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Kl(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function Ht(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Yh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ea = /* @__PURE__ */ Symbol("_vei");
function Xh(e, t, n, r, o = null) {
  const s = e[Ea] || (e[Ea] = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = Jh(t);
    if (r) {
      const u = s[t] = em(
        r,
        o
      );
      Ht(e, a, u, l);
    } else i && (Yh(e, a, i, l), s[t] = void 0);
  }
}
const va = /(?:Once|Passive|Capture)$/;
function Jh(e) {
  let t;
  if (va.test(e)) {
    t = {};
    let r;
    for (; r = e.match(va); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Kt(e.slice(2)), t];
}
let ho = 0;
const Qh = /* @__PURE__ */ Promise.resolve(), Zh = () => ho || (Qh.then(() => ho = 0), ho = Date.now());
function em(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Et(
      tm(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Zh(), n;
}
function tm(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nm = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? Bh(e, r, i) : t === "style" ? zh(e, n, r) : ws(t) ? Jo(t) || Xh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rm(e, t, r, i)) ? (ya(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ba(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Le(r)) ? ya(e, at(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ba(e, t, r, i));
};
function rm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Sa(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Sa(t) && Le(n) ? !1 : t in e;
}
const uu = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ Symbol("_moveCb"), Aa = /* @__PURE__ */ Symbol("_enterCb"), sm = (e) => (delete e.props.mode, e), om = /* @__PURE__ */ sm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pe({}, iu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = vt(), r = Tc();
    let o, s;
    return Nc(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!um(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(am), o.forEach(lm);
      const a = o.filter(cm);
      Mo(n.vnode.el), a.forEach((l) => {
        const u = l.el, c = u.style;
        wt(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[gs] = (m) => {
          m && m.target !== u || (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[gs] = null, Yt(u, i));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const i = ue(e), a = au(i);
      let l = i.tag || ke;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Tn(
            c,
            vr(
              c,
              a,
              r,
              n
            )
          ), uu.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? ui(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Tn(
          c,
          vr(c, a, r, n)
        );
      }
      return Ie(l, null, s);
    };
  }
}), im = om;
function am(e) {
  const t = e.el;
  t[gs] && t[gs](), t[Aa] && t[Aa]();
}
function lm(e) {
  fu.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function cm(e) {
  const t = uu.get(e), n = fu.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function um(e, t, n) {
  const r = e.cloneNode(), o = e[Vn];
  o && o.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = lu(r);
  return s.removeChild(r), i;
}
const rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Jr(t, n) : t;
};
function fm(e) {
  e.target.composing = !0;
}
function Ta(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ft = /* @__PURE__ */ Symbol("_assign");
function wa(e, t, n) {
  return t && (e = e.trim()), n && (e = Rs(e)), e;
}
const P2 = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ft] = rn(o);
    const s = r || o.props && o.props.type === "number";
    Ht(e, t ? "change" : "input", (i) => {
      i.target.composing || e[ft](wa(e.value, n, s));
    }), (n || s) && Ht(e, "change", () => {
      e.value = wa(e.value, n, s);
    }), t || (Ht(e, "compositionstart", fm), Ht(e, "compositionend", Ta), Ht(e, "change", Ta));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[ft] = rn(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Rs(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, N2 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ft] = rn(n), Ht(e, "change", () => {
      const r = e._modelValue, o = jn(e), s = e.checked, i = e[ft];
      if (Q(r)) {
        const a = Zo(r, o), l = a !== -1;
        if (s && !l)
          i(r.concat(o));
        else if (!s && l) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (zn(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(du(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Oa,
  beforeUpdate(e, t, n) {
    e[ft] = rn(n), Oa(e, t, n);
  }
};
function Oa(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let o;
  if (Q(t))
    o = Zo(t, r.props.value) > -1;
  else if (zn(t))
    o = t.has(r.props.value);
  else {
    if (t === n) return;
    o = An(t, du(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const k2 = {
  created(e, { value: t }, n) {
    e.checked = An(t, n.props.value), e[ft] = rn(n), Ht(e, "change", () => {
      e[ft](jn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[ft] = rn(r), t !== n && (e.checked = An(t, r.props.value));
  }
}, M2 = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = zn(t);
    Ht(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Rs(jn(i)) : jn(i)
      );
      e[ft](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, li(() => {
        e._assigning = !1;
      });
    }), e[ft] = rn(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    La(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ft] = rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || La(e, t);
  }
};
function La(e, t) {
  const n = e.multiple, r = Q(t);
  if (!(n && !r && !zn(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const i = e.options[o], a = jn(i);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = Zo(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (An(jn(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function jn(e) {
  return "_value" in e ? e._value : e.value;
}
function du(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const dm = ["ctrl", "shift", "alt", "meta"], hm = {
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
  exact: (e, t) => dm.some((n) => e[`${n}Key`] && !t.includes(n))
}, x2 = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = hm[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  }));
}, mm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, D2 = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = Kt(o.key);
    if (t.some(
      (i) => i === s || mm[i] === s
    ))
      return e(o);
  }));
}, pm = /* @__PURE__ */ Pe({ patchProp: nm }, $h);
let Ca;
function _m() {
  return Ca || (Ca = bh(pm));
}
const gm = ((...e) => {
  const t = _m().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = ym(r);
    if (!o) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, bm(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function bm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ym(e) {
  return Le(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let hu;
const Vs = (e) => hu = e, mu = (
  /* istanbul ignore next */
  Symbol()
);
function xo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var hr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(hr || (hr = {}));
function Em() {
  const e = ei(!0), t = e.run(() => le({}));
  let n = [], r = [];
  const o = ii({
    install(s) {
      Vs(o), o._a = s, s.provide(mu, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
const pu = () => {
};
function Ra(e, t, n, r = pu) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Yl() && Zf(o), o;
}
function Rn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const vm = (e) => e(), Ia = Symbol(), mo = Symbol();
function Do(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    xo(o) && xo(r) && e.hasOwnProperty(n) && !Oe(r) && !Vt(r) ? e[n] = Do(o, r) : e[n] = r;
  }
  return e;
}
const Sm = (
  /* istanbul ignore next */
  Symbol()
);
function Am(e) {
  return !xo(e) || !e.hasOwnProperty(Sm);
}
const { assign: Xt } = Object;
function Tm(e) {
  return !!(Oe(e) && e.effect);
}
function wm(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = Ad(n.state.value[e]);
    return Xt(c, s, Object.keys(i || {}).reduce((f, m) => (f[m] = ii(Ee(() => {
      Vs(n);
      const b = n._s.get(e);
      return i[m].call(b, b);
    })), f), {}));
  }
  return l = _u(e, u, t, n, r, !0), l;
}
function _u(e, t, n = {}, r, o, s) {
  let i;
  const a = Xt({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], m = [], b;
  const T = r.state.value[e];
  !s && !T && (r.state.value[e] = {}), le({});
  let A;
  function w(U) {
    let L;
    u = c = !1, typeof U == "function" ? (U(r.state.value[e]), L = {
      type: hr.patchFunction,
      storeId: e,
      events: b
    }) : (Do(r.state.value[e], U), L = {
      type: hr.patchObject,
      payload: U,
      storeId: e,
      events: b
    });
    const B = A = Symbol();
    li().then(() => {
      A === B && (u = !0);
    }), c = !0, Rn(f, L, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: L } = n, B = L ? L() : {};
    this.$patch((Y) => {
      Xt(Y, B);
    });
  } : (
    /* istanbul ignore next */
    pu
  );
  function k() {
    i.stop(), f = [], m = [], r._s.delete(e);
  }
  const E = (U, L = "") => {
    if (Ia in U)
      return U[mo] = L, U;
    const B = function() {
      Vs(r);
      const Y = Array.from(arguments), H = [], Z = [];
      function oe($) {
        H.push($);
      }
      function ge($) {
        Z.push($);
      }
      Rn(m, {
        args: Y,
        name: B[mo],
        store: P,
        after: oe,
        onError: ge
      });
      let J;
      try {
        J = U.apply(this && this.$id === e ? this : P, Y);
      } catch ($) {
        throw Rn(Z, $), $;
      }
      return J instanceof Promise ? J.then(($) => (Rn(H, $), $)).catch(($) => (Rn(Z, $), Promise.reject($))) : (Rn(H, J), J);
    };
    return B[Ia] = !0, B[mo] = L, B;
  }, y = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ra.bind(null, m),
    $patch: w,
    $reset: v,
    $subscribe(U, L = {}) {
      const B = Ra(f, U, L.detached, () => Y()), Y = i.run(() => En(() => r.state.value[e], (H) => {
        (L.flush === "sync" ? c : u) && U({
          storeId: e,
          type: hr.direct,
          events: b
        }, H);
      }, Xt({}, l, L)));
      return B;
    },
    $dispose: k
  }, P = Pr(y);
  r._s.set(e, P);
  const F = (r._a && r._a.runWithContext || vm)(() => r._e.run(() => (i = ei()).run(() => t({ action: E }))));
  for (const U in F) {
    const L = F[U];
    if (Oe(L) && !Tm(L) || Vt(L))
      s || (T && Am(L) && (Oe(L) ? L.value = T[U] : Do(L, T[U])), r.state.value[e][U] = L);
    else if (typeof L == "function") {
      const B = E(L, U);
      F[U] = B, a.actions[U] = L;
    }
  }
  return Xt(P, F), Xt(ue(P), F), Object.defineProperty(P, "$state", {
    get: () => r.state.value[e],
    set: (U) => {
      w((L) => {
        Xt(L, U);
      });
    }
  }), r._p.forEach((U) => {
    Xt(P, i.run(() => U({
      store: P,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), T && s && n.hydrate && n.hydrate(P.$state, T), u = !0, c = !0, P;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gu(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function i(a, l) {
    const u = Md();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? gt(mu, null) : null), a && Vs(a), a = hu, a._s.has(r) || (s ? _u(r, t, o, a) : wm(r, o, a)), a._s.get(r);
  }
  return i.$id = r, i;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Om = () => {
}, bs = Array.isArray;
function Pa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Lm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Cm(e[n], t[n])) return !1;
  return !0;
}
function Cm(e, t) {
  return bs(e) ? Na(e, t) : bs(t) ? Na(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Na(e, t) {
  return bs(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
const js = Symbol(""), gi = Symbol("");
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function ka(e) {
  const t = gt(js), n = gt(gi), r = Ee(() => {
    const l = lr(e.to);
    return t.resolve(l);
  }), o = Ee(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const m = f.findIndex(Pa.bind(null, c));
    if (m > -1) return m;
    const b = Ma(l[u - 2]);
    return u > 1 && Ma(c) === b && f[f.length - 1].path !== b ? f.findIndex(Pa.bind(null, l[u - 2])) : m;
  }), s = Ee(() => o.value > -1 && km(n.params, r.value.params)), i = Ee(() => o.value > -1 && o.value === n.matched.length - 1 && Lm(n.params, r.value.params));
  function a(l = {}) {
    if (Nm(l)) {
      const u = t[lr(e.replace) ? "replace" : "push"](lr(e.to)).catch(Om);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: Ee(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a
  };
}
function Rm(e) {
  return e.length === 1 ? e[0] : e;
}
const Im = /* @__PURE__ */ Ln({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: ka,
  setup(e, { slots: t }) {
    const n = Pr(ka(e)), { options: r } = gt(js), o = Ee(() => ({
      [xa(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [xa(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Rm(t.default(n));
      return e.custom ? s : $n("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), Pm = Im;
function Nm(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function km(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!bs(o) || o.length !== r.length || r.some((s, i) => s.valueOf() !== o[i].valueOf())) return !1;
  }
  return !0;
}
function Ma(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const xa = (e, t, n) => e ?? t ?? n;
function F2() {
  return gt(js);
}
function U2(e) {
  return gt(gi);
}
const Mm = ["stroke-width"], xm = ["d"], Da = /* @__PURE__ */ Ln({
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
    }, r = Ee(() => n[t.name]), o = Ee(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (s, i) => (Ut(), sr("svg", {
      class: tn(o.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      mt("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, xm)
    ], 10, Mm));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Dm(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ys = typeof window < "u", on = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Fm = (e, t, n) => Um({ l: e, k: t, s: n }), Um = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Re = (e) => typeof e == "number" && isFinite(e), Hm = (e) => yu(e) === "[object Date]", sn = (e) => yu(e) === "[object RegExp]", Ws = (e) => te(e) && Object.keys(e).length === 0, $e = Object.assign, $m = Object.create, be = (e = null) => $m(e);
let Fa;
const gn = () => Fa || (Fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : be());
function Ua(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ha(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Vm(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Ha(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Ha(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const jm = Object.prototype.hasOwnProperty;
function pt(e, t) {
  return jm.call(e, t);
}
const Ae = Array.isArray, Se = (e) => typeof e == "function", z = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", he = (e) => e !== null && typeof e == "object", Wm = (e) => he(e) && Se(e.then) && Se(e.catch), bu = Object.prototype.toString, yu = (e) => bu.call(e), te = (e) => {
  if (!he(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Bm = (e) => e == null ? "" : Ae(e) || te(e) && e.toString === bu ? JSON.stringify(e, null, 2) : String(e);
function Km(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function Bs(e) {
  let t = e;
  return () => ++t;
}
const Br = (e) => !he(e) || Ae(e);
function ns(e, t) {
  if (Br(e) || Br(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (he(r[s]) && !he(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : be()), Br(o[s]) || Br(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qm(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Es(e, t, n) {
  return { start: e, end: t };
}
const zm = /\{([0-9a-zA-Z]+)\}/g;
function Eu(e, ...t) {
  return t.length === 1 && Gm(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(zm, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const vu = Object.assign, $a = (e) => typeof e == "string", Gm = (e) => e !== null && typeof e == "object";
function Su(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const bi = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Ym = {
  [bi.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Xm(e, t, ...n) {
  const r = Eu(Ym[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const ee = {
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
}, Jm = {
  // tokenizer error messages
  [ee.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ee.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ee.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ee.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ee.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ee.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ee.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ee.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ee.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ee.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ee.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ee.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ee.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ee.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ee.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Gn(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, i = Eu((o || Jm)[e] || "", ...s || []), a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a;
}
function Qm(e) {
  throw e;
}
const Nt = " ", Zm = "\r", Qe = `
`, e0 = "\u2028", t0 = "\u2029";
function n0(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const i = (F) => t[F] === Zm && t[F + 1] === Qe, a = (F) => t[F] === Qe, l = (F) => t[F] === t0, u = (F) => t[F] === e0, c = (F) => i(F) || a(F) || l(F) || u(F), f = () => n, m = () => r, b = () => o, T = () => s, A = (F) => i(F) || l(F) || u(F) ? Qe : t[F], w = () => A(n), v = () => A(n + s);
  function k() {
    return s = 0, c(n) && (r++, o = 0), i(n) && n++, n++, o++, t[n];
  }
  function E() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function y() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function P(F = 0) {
    s = F;
  }
  function I() {
    const F = n + s;
    for (; F !== n; )
      k();
    s = 0;
  }
  return {
    index: f,
    line: m,
    column: b,
    peekOffset: T,
    charAt: A,
    currentChar: w,
    currentPeek: v,
    next: k,
    peek: E,
    reset: y,
    resetPeek: P,
    skipToPeek: I
  };
}
const Gt = void 0, r0 = ".", Va = "'", s0 = "tokenizer";
function o0(e, t = {}) {
  const n = t.location !== !1, r = n0(e), o = () => r.index(), s = () => qm(r.line(), r.column(), r.index()), i = s(), a = o(), l = {
    currentType: 14,
    offset: a,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: a,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function f(d, h, O, ...x) {
    const K = u();
    if (h.column += O, h.offset += O, c) {
      const j = n ? Es(K.startLoc, h) : null, R = Gn(d, j, {
        domain: s0,
        args: x
      });
      c(R);
    }
  }
  function m(d, h, O) {
    d.endLoc = s(), d.currentType = h;
    const x = { type: h };
    return n && (x.loc = Es(d.startLoc, d.endLoc)), O != null && (x.value = O), x;
  }
  const b = (d) => m(
    d,
    14
    /* TokenTypes.EOF */
  );
  function T(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (f(ee.EXPECTED_TOKEN, s(), 0, h), "");
  }
  function A(d) {
    let h = "";
    for (; d.currentPeek() === Nt || d.currentPeek() === Qe; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function w(d) {
    const h = A(d);
    return d.skipToPeek(), h;
  }
  function v(d) {
    if (d === Gt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function k(d) {
    if (d === Gt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function E(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    A(d);
    const x = v(d.currentPeek());
    return d.resetPeek(), x;
  }
  function y(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    A(d);
    const x = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), K = k(x);
    return d.resetPeek(), K;
  }
  function P(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    A(d);
    const x = d.currentPeek() === Va;
    return d.resetPeek(), x;
  }
  function I(d, h) {
    const { currentType: O } = h;
    if (O !== 8)
      return !1;
    A(d);
    const x = d.currentPeek() === ".";
    return d.resetPeek(), x;
  }
  function F(d, h) {
    const { currentType: O } = h;
    if (O !== 9)
      return !1;
    A(d);
    const x = v(d.currentPeek());
    return d.resetPeek(), x;
  }
  function U(d, h) {
    const { currentType: O } = h;
    if (!(O === 8 || O === 12))
      return !1;
    A(d);
    const x = d.currentPeek() === ":";
    return d.resetPeek(), x;
  }
  function L(d, h) {
    const { currentType: O } = h;
    if (O !== 10)
      return !1;
    const x = () => {
      const j = d.currentPeek();
      return j === "{" ? v(d.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Nt || !j ? !1 : j === Qe ? (d.peek(), x()) : H(d, !1);
    }, K = x();
    return d.resetPeek(), K;
  }
  function B(d) {
    A(d);
    const h = d.currentPeek() === "|";
    return d.resetPeek(), h;
  }
  function Y(d) {
    const h = A(d), O = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: O,
      hasSpace: h.length > 0
    };
  }
  function H(d, h = !0) {
    const O = (K = !1, j = "", R = !1) => {
      const D = d.currentPeek();
      return D === "{" ? j === "%" ? !1 : K : D === "@" || !D ? j === "%" ? !0 : K : D === "%" ? (d.peek(), O(K, "%", !0)) : D === "|" ? j === "%" || R ? !0 : !(j === Nt || j === Qe) : D === Nt ? (d.peek(), O(!0, Nt, R)) : D === Qe ? (d.peek(), O(!0, Qe, R)) : !0;
    }, x = O();
    return h && d.resetPeek(), x;
  }
  function Z(d, h) {
    const O = d.currentChar();
    return O === Gt ? Gt : h(O) ? (d.next(), O) : null;
  }
  function oe(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function ge(d) {
    return Z(d, oe);
  }
  function J(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function $(d) {
    return Z(d, J);
  }
  function G(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function ce(d) {
    return Z(d, G);
  }
  function pe(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function re(d) {
    return Z(d, pe);
  }
  function fe(d) {
    let h = "", O = "";
    for (; h = ce(d); )
      O += h;
    return O;
  }
  function xe(d) {
    w(d);
    const h = d.currentChar();
    return h !== "%" && f(ee.EXPECTED_TOKEN, s(), 0, h), d.next(), "%";
  }
  function Ve(d) {
    let h = "";
    for (; ; ) {
      const O = d.currentChar();
      if (O === "{" || O === "}" || O === "@" || O === "|" || !O)
        break;
      if (O === "%")
        if (H(d))
          h += O, d.next();
        else
          break;
      else if (O === Nt || O === Qe)
        if (H(d))
          h += O, d.next();
        else {
          if (B(d))
            break;
          h += O, d.next();
        }
      else
        h += O, d.next();
    }
    return h;
  }
  function lt(d) {
    w(d);
    let h = "", O = "";
    for (; h = $(d); )
      O += h;
    return d.currentChar() === Gt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O;
  }
  function se(d) {
    w(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${fe(d)}`) : h += fe(d), d.currentChar() === Gt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h;
  }
  function Te(d) {
    return d !== Va && d !== Qe;
  }
  function je(d) {
    w(d), T(d, "'");
    let h = "", O = "";
    for (; h = Z(d, Te); )
      h === "\\" ? O += Ye(d) : O += h;
    const x = d.currentChar();
    return x === Qe || x === Gt ? (f(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), x === Qe && (d.next(), T(d, "'")), O) : (T(d, "'"), O);
  }
  function Ye(d) {
    const h = d.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return d.next(), `\\${h}`;
      case "u":
        return De(d, h, 4);
      case "U":
        return De(d, h, 6);
      default:
        return f(ee.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, h), "";
    }
  }
  function De(d, h, O) {
    T(d, h);
    let x = "";
    for (let K = 0; K < O; K++) {
      const j = re(d);
      if (!j) {
        f(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${h}${x}${d.currentChar()}`);
        break;
      }
      x += j;
    }
    return `\\${h}${x}`;
  }
  function dt(d) {
    return d !== "{" && d !== "}" && d !== Nt && d !== Qe;
  }
  function p(d) {
    w(d);
    let h = "", O = "";
    for (; h = Z(d, dt); )
      O += h;
    return O;
  }
  function g(d) {
    let h = "", O = "";
    for (; h = ge(d); )
      O += h;
    return O;
  }
  function _(d) {
    const h = (O) => {
      const x = d.currentChar();
      return x === "{" || x === "%" || x === "@" || x === "|" || x === "(" || x === ")" || !x || x === Nt ? O : (O += x, d.next(), h(O));
    };
    return h("");
  }
  function N(d) {
    w(d);
    const h = T(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return w(d), h;
  }
  function C(d, h) {
    let O = null;
    switch (d.currentChar()) {
      case "{":
        return h.braceNest >= 1 && f(ee.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), O = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(d), h.braceNest++, O;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && f(ee.EMPTY_PLACEHOLDER, s(), 0), d.next(), O = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && w(d), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), O;
      case "@":
        return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O = M(d, h) || b(h), h.braceNest = 0, O;
      default: {
        let K = !0, j = !0, R = !0;
        if (B(d))
          return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, O;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h.braceNest = 0, W(d, h);
        if (K = E(d, h))
          return O = m(h, 5, lt(d)), w(d), O;
        if (j = y(d, h))
          return O = m(h, 6, se(d)), w(d), O;
        if (R = P(d, h))
          return O = m(h, 7, je(d)), w(d), O;
        if (!K && !j && !R)
          return O = m(h, 13, p(d)), f(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, O.value), w(d), O;
        break;
      }
    }
    return O;
  }
  function M(d, h) {
    const { currentType: O } = h;
    let x = null;
    const K = d.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (K === Qe || K === Nt) && f(ee.INVALID_LINKED_FORMAT, s(), 0), K) {
      case "@":
        return d.next(), x = m(
          h,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, x;
      case ".":
        return w(d), d.next(), m(
          h,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(d), d.next(), m(
          h,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(d) ? (x = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, x) : I(d, h) || U(d, h) ? (w(d), M(d, h)) : F(d, h) ? (w(d), m(h, 12, g(d))) : L(d, h) ? (w(d), K === "{" ? C(d, h) || x : m(h, 11, _(d))) : (O === 8 && f(ee.INVALID_LINKED_FORMAT, s(), 0), h.braceNest = 0, h.inLinked = !1, W(d, h));
    }
  }
  function W(d, h) {
    let O = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return C(d, h) || b(h);
    if (h.inLinked)
      return M(d, h) || b(h);
    switch (d.currentChar()) {
      case "{":
        return C(d, h) || b(h);
      case "}":
        return f(ee.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(d, h) || b(h);
      default: {
        if (B(d))
          return O = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, O;
        const { isModulo: K, hasSpace: j } = Y(d);
        if (K)
          return j ? m(h, 0, Ve(d)) : m(h, 4, xe(d));
        if (H(d))
          return m(h, 0, Ve(d));
        break;
      }
    }
    return O;
  }
  function V() {
    const { currentType: d, offset: h, startLoc: O, endLoc: x } = l;
    return l.lastType = d, l.lastOffset = h, l.lastStartLoc = O, l.lastEndLoc = x, l.offset = o(), l.startLoc = s(), r.currentChar() === Gt ? m(
      l,
      14
      /* TokenTypes.EOF */
    ) : W(r, l);
  }
  return {
    nextToken: V,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const i0 = "parser", a0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function l0(e, t, n) {
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
function c0(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(E, y, P, I, ...F) {
    const U = E.currentPosition();
    if (U.offset += I, U.column += I, n) {
      const L = t ? Es(P, U) : null, B = Gn(y, L, {
        domain: i0,
        args: F
      });
      n(B);
    }
  }
  function s(E, y, P, I, ...F) {
    const U = E.currentPosition();
    if (U.offset += I, U.column += I, r) {
      const L = t ? Es(P, U) : null;
      r(Xm(y, L, F));
    }
  }
  function i(E, y, P) {
    const I = { type: E };
    return t && (I.start = y, I.end = y, I.loc = { start: P, end: P }), I;
  }
  function a(E, y, P, I) {
    t && (E.end = y, E.loc && (E.loc.end = P));
  }
  function l(E, y) {
    const P = E.context(), I = i(3, P.offset, P.startLoc);
    return I.value = y, a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function u(E, y) {
    const P = E.context(), { lastOffset: I, lastStartLoc: F } = P, U = i(5, I, F);
    return U.index = parseInt(y, 10), E.nextToken(), a(U, E.currentOffset(), E.currentPosition()), U;
  }
  function c(E, y, P) {
    const I = E.context(), { lastOffset: F, lastStartLoc: U } = I, L = i(4, F, U);
    return L.key = y, P === !0 && (L.modulo = !0), E.nextToken(), a(L, E.currentOffset(), E.currentPosition()), L;
  }
  function f(E, y) {
    const P = E.context(), { lastOffset: I, lastStartLoc: F } = P, U = i(9, I, F);
    return U.value = y.replace(a0, l0), E.nextToken(), a(U, E.currentOffset(), E.currentPosition()), U;
  }
  function m(E) {
    const y = E.nextToken(), P = E.context(), { lastOffset: I, lastStartLoc: F } = P, U = i(8, I, F);
    return y.type !== 12 ? (o(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), U.value = "", a(U, I, F), {
      nextConsumeToken: y,
      node: U
    }) : (y.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, ht(y)), U.value = y.value || "", a(U, E.currentOffset(), E.currentPosition()), {
      node: U
    });
  }
  function b(E, y) {
    const P = E.context(), I = i(7, P.offset, P.startLoc);
    return I.value = y, a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function T(E) {
    const y = E.context(), P = i(6, y.offset, y.startLoc);
    let I = E.nextToken();
    if (I.type === 9) {
      const F = m(E);
      P.modifier = F.node, I = F.nextConsumeToken || E.nextToken();
    }
    switch (I.type !== 10 && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(I)), I = E.nextToken(), I.type === 2 && (I = E.nextToken()), I.type) {
      case 11:
        I.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(I)), P.key = b(E, I.value || "");
        break;
      case 5:
        I.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(I)), P.key = c(E, I.value || "");
        break;
      case 6:
        I.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(I)), P.key = u(E, I.value || "");
        break;
      case 7:
        I.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(I)), P.key = f(E, I.value || "");
        break;
      default: {
        o(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const F = E.context(), U = i(7, F.offset, F.startLoc);
        return U.value = "", a(U, F.offset, F.startLoc), P.key = U, a(P, F.offset, F.startLoc), {
          nextConsumeToken: I,
          node: P
        };
      }
    }
    return a(P, E.currentOffset(), E.currentPosition()), {
      node: P
    };
  }
  function A(E) {
    const y = E.context(), P = y.currentType === 1 ? E.currentOffset() : y.offset, I = y.currentType === 1 ? y.endLoc : y.startLoc, F = i(2, P, I);
    F.items = [];
    let U = null, L = null;
    do {
      const H = U || E.nextToken();
      switch (U = null, H.type) {
        case 0:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(H)), F.items.push(l(E, H.value || ""));
          break;
        case 6:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(H)), F.items.push(u(E, H.value || ""));
          break;
        case 4:
          L = !0;
          break;
        case 5:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(H)), F.items.push(c(E, H.value || "", !!L)), L && (s(E, bi.USE_MODULO_SYNTAX, y.lastStartLoc, 0, ht(H)), L = null);
          break;
        case 7:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ht(H)), F.items.push(f(E, H.value || ""));
          break;
        case 8: {
          const Z = T(E);
          F.items.push(Z.node), U = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const B = y.currentType === 1 ? y.lastOffset : E.currentOffset(), Y = y.currentType === 1 ? y.lastEndLoc : E.currentPosition();
    return a(F, B, Y), F;
  }
  function w(E, y, P, I) {
    const F = E.context();
    let U = I.items.length === 0;
    const L = i(1, y, P);
    L.cases = [], L.cases.push(I);
    do {
      const B = A(E);
      U || (U = B.items.length === 0), L.cases.push(B);
    } while (F.currentType !== 14);
    return U && o(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(L, E.currentOffset(), E.currentPosition()), L;
  }
  function v(E) {
    const y = E.context(), { offset: P, startLoc: I } = y, F = A(E);
    return y.currentType === 14 ? F : w(E, P, I, F);
  }
  function k(E) {
    const y = o0(E, vu({}, e)), P = y.context(), I = i(0, P.offset, P.startLoc);
    return t && I.loc && (I.loc.source = E), I.body = v(y), e.onCacheKey && (I.cacheKey = e.onCacheKey(E)), P.currentType !== 14 && o(y, ee.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, E[P.offset] || ""), a(I, y.currentOffset(), y.currentPosition()), I;
  }
  return { parse: k };
}
function ht(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function u0(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function ja(e, t) {
  for (let n = 0; n < e.length; n++)
    yi(e[n], t);
}
function yi(e, t) {
  switch (e.type) {
    case 1:
      ja(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ja(e.items, t);
      break;
    case 6: {
      yi(e.key, t), t.helper(
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
function f0(e, t = {}) {
  const n = u0(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && yi(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function d0(e) {
  const t = e.body;
  return t.type === 2 ? Wa(t) : t.cases.forEach((n) => Wa(n)), e;
}
function Wa(e) {
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
      e.static = Su(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const h0 = "minifier";
function kn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      kn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        kn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        kn(n[r]);
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
      kn(t.key), t.k = t.key, delete t.key, t.modifier && (kn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw Gn(ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: h0,
        args: [e.type]
      });
  }
  delete e.type;
}
const m0 = "parser";
function p0(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, s = t.location !== !1, i = {
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
  s && e.loc && (i.source = e.loc.source);
  const a = () => i;
  function l(A, w) {
    i.code += A;
  }
  function u(A, w = !0) {
    const v = w ? r : "";
    l(o ? v + "  ".repeat(A) : v);
  }
  function c(A = !0) {
    const w = ++i.indentLevel;
    A && u(w);
  }
  function f(A = !0) {
    const w = --i.indentLevel;
    A && u(w);
  }
  function m() {
    u(i.indentLevel);
  }
  return {
    context: a,
    push: l,
    indent: c,
    deindent: f,
    newline: m,
    helper: (A) => `_${A}`,
    needIndent: () => i.needIndent
  };
}
function _0(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Wn(e, t.key), t.modifier ? (e.push(", "), Wn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function g0(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (Wn(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function b0(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (Wn(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function y0(e, t) {
  t.body ? Wn(e, t.body) : e.push("null");
}
function Wn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      y0(e, t);
      break;
    case 1:
      b0(e, t);
      break;
    case 2:
      g0(e, t);
      break;
    case 6:
      _0(e, t);
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
      throw Gn(ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: m0,
        args: [t.type]
      });
  }
}
const E0 = (e, t = {}) => {
  const n = $a(t.mode) ? t.mode : "normal", r = $a(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], a = p0(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(s), i.length > 0 && (a.push(`const { ${Su(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), a.newline()), a.push("return "), Wn(a, e), a.deindent(s), a.push("}"), delete e.helpers;
  const { code: l, map: u } = a.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function v0(e, t = {}) {
  const n = vu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = c0(n).parse(e);
  return r ? (s && d0(a), o && kn(a), { ast: a, code: "" }) : (f0(a, n), E0(a, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function S0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (gn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function It(e) {
  return he(e) && Ei(e) === 0 && (pt(e, "b") || pt(e, "body"));
}
const Au = ["b", "body"];
function A0(e) {
  return an(e, Au);
}
const Tu = ["c", "cases"];
function T0(e) {
  return an(e, Tu, []);
}
const wu = ["s", "static"];
function w0(e) {
  return an(e, wu);
}
const Ou = ["i", "items"];
function O0(e) {
  return an(e, Ou, []);
}
const Lu = ["t", "type"];
function Ei(e) {
  return an(e, Lu);
}
const Cu = ["v", "value"];
function Kr(e, t) {
  const n = an(e, Cu);
  if (n != null)
    return n;
  throw wr(t);
}
const Ru = ["m", "modifier"];
function L0(e) {
  return an(e, Ru);
}
const Iu = ["k", "key"];
function C0(e) {
  const t = an(e, Iu);
  if (t)
    return t;
  throw wr(
    6
    /* NodeTypes.Linked */
  );
}
function an(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (pt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Pu = [
  ...Au,
  ...Tu,
  ...wu,
  ...Ou,
  ...Iu,
  ...Ru,
  ...Cu,
  ...Lu
];
function wr(e) {
  return new Error(`unhandled node type: ${e}`);
}
const ln = [];
ln[
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
ln[
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
ln[
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
ln[
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
ln[
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
ln[
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
ln[
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
const R0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function I0(e) {
  return R0.test(e);
}
function P0(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function N0(e) {
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
function k0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : I0(t) ? P0(t) : "*" + t;
}
function M0(e) {
  const t = [];
  let n = -1, r = 0, o = 0, s, i, a, l, u, c, f;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = a : i += a;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), o++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, i === void 0 || (i = k0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const T = e[n + 1];
    if (r === 5 && T === "'" || r === 6 && T === '"')
      return n++, a = "\\" + T, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && b())) {
      if (l = N0(s), f = ln[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (a = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ba = /* @__PURE__ */ new Map();
function x0(e, t) {
  return he(e) ? e[t] : null;
}
function D0(e, t) {
  if (!he(e))
    return null;
  let n = Ba.get(t);
  if (n || (n = M0(t), n && Ba.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const i = n[s];
    if (Pu.includes(i) && It(o))
      return null;
    const a = o[i];
    if (a === void 0 || Se(o))
      return null;
    o = a, s++;
  }
  return o;
}
const F0 = (e) => e, U0 = (e) => "", H0 = "text", $0 = (e) => e.length === 0 ? "" : Km(e), V0 = Bm;
function Ka(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function j0(e) {
  const t = Re(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Re(e.named.count) || Re(e.named.n)) ? Re(e.named.count) ? e.named.count : Re(e.named.n) ? e.named.n : t : t;
}
function W0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function B0(e = {}) {
  const t = e.locale, n = j0(e), r = he(e.pluralRules) && z(t) && Se(e.pluralRules[t]) ? e.pluralRules[t] : Ka, o = he(e.pluralRules) && z(t) && Se(e.pluralRules[t]) ? Ka : void 0, s = (v) => v[r(n, v.length, o)], i = e.list || [], a = (v) => i[v], l = e.named || be();
  Re(e.pluralIndex) && W0(n, l);
  const u = (v) => l[v];
  function c(v) {
    const k = Se(e.messages) ? e.messages(v) : he(e.messages) ? e.messages[v] : !1;
    return k || (e.parent ? e.parent.message(v) : U0);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : F0, m = te(e.processor) && Se(e.processor.normalize) ? e.processor.normalize : $0, b = te(e.processor) && Se(e.processor.interpolate) ? e.processor.interpolate : V0, T = te(e.processor) && z(e.processor.type) ? e.processor.type : H0, w = {
    list: a,
    named: u,
    plural: s,
    linked: (v, ...k) => {
      const [E, y] = k;
      let P = "text", I = "";
      k.length === 1 ? he(E) ? (I = E.modifier || I, P = E.type || P) : z(E) && (I = E || I) : k.length === 2 && (z(E) && (I = E || I), z(y) && (P = y || P));
      const F = c(v)(w), U = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && Ae(F) && I ? F[0] : F
      );
      return I ? f(I)(U, P) : U;
    },
    message: c,
    type: T,
    interpolate: b,
    normalize: m,
    values: $e(be(), i, l)
  };
  return w;
}
let Or = null;
function K0(e) {
  Or = e;
}
function q0(e, t, n) {
  Or && Or.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const z0 = /* @__PURE__ */ G0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function G0(e) {
  return (t) => Or && Or.emit(e, t);
}
const Y0 = bi.__EXTEND_POINT__, hn = Bs(Y0), X0 = {
  // 2
  FALLBACK_TO_TRANSLATE: hn(),
  // 3
  CANNOT_FORMAT_NUMBER: hn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: hn(),
  // 5
  CANNOT_FORMAT_DATE: hn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: hn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: hn(),
  // 8
  __EXTEND_POINT__: hn()
  // 9
}, Nu = ee.__EXTEND_POINT__, mn = Bs(Nu), Ct = {
  INVALID_ARGUMENT: Nu,
  // 17
  INVALID_DATE_ARGUMENT: mn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: mn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: mn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: mn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: mn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: mn(),
  // 23
  __EXTEND_POINT__: mn()
  // 24
};
function $t(e) {
  return Gn(e, null, void 0);
}
function vi(e, t) {
  return t.locale != null ? qa(t.locale) : qa(e.locale);
}
let po;
function qa(e) {
  if (z(e))
    return e;
  if (Se(e)) {
    if (e.resolvedOnce && po != null)
      return po;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Wm(t))
        throw $t(Ct.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return po = t;
    } else
      throw $t(Ct.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $t(Ct.NOT_SUPPORT_LOCALE_TYPE);
}
function J0(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ae(t) ? t : he(t) ? Object.keys(t) : z(t) ? [t] : [n]
  ])];
}
function ku(e, t, n) {
  const r = z(n) ? n : Bn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; Ae(i); )
      i = za(s, i, t);
    const a = Ae(t) || !te(t) ? t : t.default ? t.default : null;
    i = z(a) ? [a] : a, Ae(i) && za(s, i, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function za(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ie(r); o++) {
    const s = t[o];
    z(s) && (r = Q0(e, t[o], n));
  }
  return r;
}
function Q0(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Z0(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Z0(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ae(n) || te(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const ep = "9.14.5", Ks = -1, Bn = "en-US", Ga = "", Ya = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tp() {
  return {
    upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && z(e) ? Ya(e) : t === "vnode" && he(e) && "__v_isVNode" in e ? Ya(e.children) : e
  };
}
let Mu;
function np(e) {
  Mu = e;
}
let xu;
function rp(e) {
  xu = e;
}
let Du;
function sp(e) {
  Du = e;
}
let Fu = null;
const op = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Fu = e;
}, ip = /* @__NO_SIDE_EFFECTS__ */ () => Fu;
let Uu = null;
const Xa = (e) => {
  Uu = e;
}, ap = () => Uu;
let Ja = 0;
function lp(e = {}) {
  const t = Se(e.onWarn) ? e.onWarn : Dm, n = z(e.version) ? e.version : ep, r = z(e.locale) || Se(e.locale) ? e.locale : Bn, o = Se(r) ? Bn : r, s = Ae(e.fallbackLocale) || te(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, i = te(e.messages) ? e.messages : _o(o), a = te(e.datetimeFormats) ? e.datetimeFormats : _o(o), l = te(e.numberFormats) ? e.numberFormats : _o(o), u = $e(be(), e.modifiers, tp()), c = e.pluralRules || be(), f = Se(e.missing) ? e.missing : null, m = ie(e.missingWarn) || sn(e.missingWarn) ? e.missingWarn : !0, b = ie(e.fallbackWarn) || sn(e.fallbackWarn) ? e.fallbackWarn : !0, T = !!e.fallbackFormat, A = !!e.unresolving, w = Se(e.postTranslation) ? e.postTranslation : null, v = te(e.processor) ? e.processor : null, k = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = Se(e.messageCompiler) ? e.messageCompiler : Mu, P = Se(e.messageResolver) ? e.messageResolver : xu || x0, I = Se(e.localeFallbacker) ? e.localeFallbacker : Du || J0, F = he(e.fallbackContext) ? e.fallbackContext : void 0, U = e, L = he(U.__datetimeFormatters) ? U.__datetimeFormatters : /* @__PURE__ */ new Map(), B = he(U.__numberFormatters) ? U.__numberFormatters : /* @__PURE__ */ new Map(), Y = he(U.__meta) ? U.__meta : {};
  Ja++;
  const H = {
    version: n,
    cid: Ja,
    locale: r,
    fallbackLocale: s,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: m,
    fallbackWarn: b,
    fallbackFormat: T,
    unresolving: A,
    postTranslation: w,
    processor: v,
    warnHtmlMessage: k,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: P,
    localeFallbacker: I,
    fallbackContext: F,
    onWarn: t,
    __meta: Y
  };
  return H.datetimeFormats = a, H.numberFormats = l, H.__datetimeFormatters = L, H.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && q0(H, n, Y), H;
}
const _o = (e) => ({ [e]: be() });
function Si(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  if (s !== null) {
    const a = s(e, n, t, o);
    return z(a) ? a : t;
  } else
    return t;
}
function er(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function cp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function up(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (cp(e, t[r]))
      return !0;
  return !1;
}
function go(e) {
  return (n) => fp(n, e);
}
function fp(e, t) {
  const n = A0(t);
  if (n == null)
    throw wr(
      0
      /* NodeTypes.Resource */
    );
  if (Ei(n) === 1) {
    const s = T0(n);
    return e.plural(s.reduce((i, a) => [
      ...i,
      Qa(e, a)
    ], []));
  } else
    return Qa(e, n);
}
function Qa(e, t) {
  const n = w0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = O0(t).reduce((o, s) => [...o, Fo(e, s)], []);
    return e.normalize(r);
  }
}
function Fo(e, t) {
  const n = Ei(t);
  switch (n) {
    case 3:
      return Kr(t, n);
    case 9:
      return Kr(t, n);
    case 4: {
      const r = t;
      if (pt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (pt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw wr(n);
    }
    case 5: {
      const r = t;
      if (pt(r, "i") && Re(r.i))
        return e.interpolate(e.list(r.i));
      if (pt(r, "index") && Re(r.index))
        return e.interpolate(e.list(r.index));
      throw wr(n);
    }
    case 6: {
      const r = t, o = L0(r), s = C0(r);
      return e.linked(Fo(e, s), o ? Fo(e, o) : void 0, e.type);
    }
    case 7:
      return Kr(t, n);
    case 8:
      return Kr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const dp = (e) => e;
let qr = be();
function hp(e, t = {}) {
  let n = !1;
  const r = t.onError || Qm;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...v0(e, t), detectError: n };
}
function mp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && z(e)) {
    ie(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || dp)(e), o = qr[r];
    if (o)
      return o;
    const { ast: s, detectError: i } = hp(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = go(s);
    return i ? a : qr[r] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = qr[n];
      return r || (qr[n] = go(e));
    } else
      return go(e);
  }
}
const Za = () => "", ut = (e) => Se(e);
function el(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: i, messages: a } = e, [l, u] = Uo(...t), c = ie(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ie(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, T = z(u.default) || ie(u.default) ? ie(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", A = n || T !== "", w = vi(e, u);
  m && pp(u);
  let [v, k, E] = b ? [
    l,
    w,
    a[w] || be()
  ] : Hu(e, l, w, i, f, c), y = v, P = l;
  if (!b && !(z(y) || It(y) || ut(y)) && A && (y = T, P = y), !b && (!(z(y) || It(y) || ut(y)) || !z(k)))
    return o ? Ks : l;
  let I = !1;
  const F = () => {
    I = !0;
  }, U = ut(y) ? y : $u(e, l, k, y, P, F);
  if (I)
    return y;
  const L = bp(e, k, E, u), B = B0(L), Y = _p(e, U, B);
  let H = r ? r(Y, l) : Y;
  if (m && z(H) && (H = Vm(H)), __INTLIFY_PROD_DEVTOOLS__) {
    const Z = {
      timestamp: Date.now(),
      key: z(l) ? l : ut(y) ? y.key : "",
      locale: k || (ut(y) ? y.locale : ""),
      format: z(y) ? y : ut(y) ? y.source : "",
      message: H
    };
    Z.meta = $e({}, e.__meta, /* @__PURE__ */ ip() || {}), z0(Z);
  }
  return H;
}
function pp(e) {
  Ae(e.list) ? e.list = e.list.map((t) => z(t) ? Ua(t) : t) : he(e.named) && Object.keys(e.named).forEach((t) => {
    z(e.named[t]) && (e.named[t] = Ua(e.named[t]));
  });
}
function Hu(e, t, n, r, o, s) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = be(), m, b = null;
  const T = "translate";
  for (let A = 0; A < c.length && (m = c[A], f = i[m] || be(), (b = l(f, t)) === null && (b = f[t]), !(z(b) || It(b) || ut(b))); A++)
    if (!up(m, c)) {
      const w = Si(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        T
      );
      w !== t && (b = w);
    }
  return [b, m, f];
}
function $u(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (ut(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (i == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = i(r, gp(e, n, o, r, a, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function _p(e, t, n) {
  return t(n);
}
function Uo(...e) {
  const [t, n, r] = e, o = be();
  if (!z(t) && !Re(t) && !ut(t) && !It(t))
    throw $t(Ct.INVALID_ARGUMENT);
  const s = Re(t) ? String(t) : (ut(t), t);
  return Re(n) ? o.plural = n : z(n) ? o.default = n : te(n) && !Ws(n) ? o.named = n : Ae(n) && (o.list = n), Re(r) ? o.plural = r : z(r) ? o.default = r : te(r) && $e(o, r), [s, o];
}
function gp(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      throw s && s(i), i;
    },
    onCacheKey: (i) => Fm(t, n, i)
  };
}
function bp(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (b) => {
      let T = i(n, b);
      if (T == null && c) {
        const [, , A] = Hu(c, b, t, a, l, u);
        T = i(A, b);
      }
      if (z(T) || It(T)) {
        let A = !1;
        const v = $u(e, b, t, T, b, () => {
          A = !0;
        });
        return A ? Za : v;
      } else return ut(T) ? T : Za;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Re(r.plural) && (m.pluralIndex = r.plural), m;
}
function tl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = Ho(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, T = vi(e, c), A = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    T
  );
  if (!z(l) || l === "")
    return new Intl.DateTimeFormat(T, f).format(u);
  let w = {}, v, k = null;
  const E = "datetime format";
  for (let I = 0; I < A.length && (v = A[I], w = n[v] || {}, k = w[l], !te(k)); I++)
    Si(e, l, v, m, E);
  if (!te(k) || !z(v))
    return r ? Ks : l;
  let y = `${v}__${l}`;
  Ws(f) || (y = `${y}__${JSON.stringify(f)}`);
  let P = a.get(y);
  return P || (P = new Intl.DateTimeFormat(v, $e({}, k, f)), a.set(y, P)), b ? P.formatToParts(u) : P.format(u);
}
const Vu = [
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
function Ho(...e) {
  const [t, n, r, o] = e, s = be();
  let i = be(), a;
  if (z(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw $t(Ct.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw $t(Ct.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Hm(t)) {
    if (isNaN(t.getTime()))
      throw $t(Ct.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Re(t))
    a = t;
  else
    throw $t(Ct.INVALID_ARGUMENT);
  return z(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    Vu.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), z(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function nl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function rl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: a } = e, [l, u, c, f] = $o(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, T = vi(e, c), A = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    T
  );
  if (!z(l) || l === "")
    return new Intl.NumberFormat(T, f).format(u);
  let w = {}, v, k = null;
  const E = "number format";
  for (let I = 0; I < A.length && (v = A[I], w = n[v] || {}, k = w[l], !te(k)); I++)
    Si(e, l, v, m, E);
  if (!te(k) || !z(v))
    return r ? Ks : l;
  let y = `${v}__${l}`;
  Ws(f) || (y = `${y}__${JSON.stringify(f)}`);
  let P = a.get(y);
  return P || (P = new Intl.NumberFormat(v, $e({}, k, f)), a.set(y, P)), b ? P.formatToParts(u) : P.format(u);
}
const ju = [
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
function $o(...e) {
  const [t, n, r, o] = e, s = be();
  let i = be();
  if (!Re(t))
    throw $t(Ct.INVALID_ARGUMENT);
  const a = t;
  return z(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    ju.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), z(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function sl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
S0();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const yp = "9.14.5";
function Ep() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (gn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (gn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (gn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const vp = X0.__EXTEND_POINT__, kt = Bs(vp);
kt(), kt(), kt(), kt(), kt(), kt(), kt(), kt(), kt();
const Wu = Ct.__EXTEND_POINT__, tt = Bs(Wu), Ne = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Wu,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: tt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: tt(),
  // 26
  NOT_INSTALLED: tt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: tt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: tt(),
  // 29
  INVALID_VALUE: tt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: tt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: tt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: tt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: tt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: tt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: tt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: tt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: tt()
  // 38
};
function Me(e, ...t) {
  return Gn(e, null, void 0);
}
const Vo = /* @__PURE__ */ on("__translateVNode"), jo = /* @__PURE__ */ on("__datetimeParts"), Wo = /* @__PURE__ */ on("__numberParts"), Bu = on("__setPluralRules"), Ku = /* @__PURE__ */ on("__injectWithOption"), Bo = /* @__PURE__ */ on("__dispose");
function Lr(e) {
  if (!he(e) || It(e))
    return e;
  for (const t in e)
    if (pt(e, t))
      if (!t.includes("."))
        he(e[t]) && Lr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in o || (o[n[i]] = be()), !he(o[n[i]])) {
            s = !0;
            break;
          }
          o = o[n[i]];
        }
        if (s || (It(o) ? Pu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !It(o)) {
          const i = o[n[r]];
          he(i) && Lr(i);
        }
      }
  return e;
}
function qs(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, i = te(n) ? n : Ae(r) ? be() : { [e]: be() };
  if (Ae(r) && r.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (i[l] = i[l] || be(), ns(u, i[l])) : ns(u, i);
    } else
      z(a) && ns(JSON.parse(a), i);
  }), o == null && s)
    for (const a in i)
      pt(i, a) && Lr(i[a]);
  return i;
}
function qu(e) {
  return e.type;
}
function zu(e, t, n) {
  let r = he(t.messages) ? t.messages : be();
  "__i18nGlobal" in n && (r = qs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (he(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (he(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function ol(e) {
  return Ie(kr, null, e, 0);
}
const il = "__INTLIFY_META__", al = () => [], Sp = () => !1;
let ll = 0;
function cl(e) {
  return ((t, n, r, o) => e(n, r, vt() || void 0, o));
}
const Ap = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = vt();
  let t = null;
  return e && (t = qu(e)[il]) ? { [il]: t } : null;
};
function Ai(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, i = ys ? le : ai, a = !!e.translateExistCompatible;
  let l = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const u = i(
    // prettier-ignore
    n && l ? n.locale.value : z(e.locale) ? e.locale : Bn
  ), c = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : z(e.fallbackLocale) || Ae(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = i(qs(u.value, e)), m = i(te(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), b = i(te(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let T = n ? n.missingWarn : ie(e.missingWarn) || sn(e.missingWarn) ? e.missingWarn : !0, A = n ? n.fallbackWarn : ie(e.fallbackWarn) || sn(e.fallbackWarn) ? e.fallbackWarn : !0, w = n ? n.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, k = Se(e.missing) ? e.missing : null, E = Se(e.missing) ? cl(e.missing) : null, y = Se(e.postTranslation) ? e.postTranslation : null, P = n ? n.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const F = n ? n.modifiers : te(e.modifiers) ? e.modifiers : {};
  let U = e.pluralRules || n && n.pluralRules, L;
  L = (() => {
    o && Xa(null);
    const R = {
      version: yp,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: F,
      pluralRules: U,
      missing: E === null ? void 0 : E,
      missingWarn: T,
      fallbackWarn: A,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: P,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = m.value, R.numberFormats = b.value, R.__datetimeFormatters = te(L) ? L.__datetimeFormatters : void 0, R.__numberFormatters = te(L) ? L.__numberFormatters : void 0;
    const D = lp(R);
    return o && Xa(D), D;
  })(), er(L, u.value, c.value);
  function Y() {
    return [
      u.value,
      c.value,
      f.value,
      m.value,
      b.value
    ];
  }
  const H = Ee({
    get: () => u.value,
    set: (R) => {
      u.value = R, L.locale = u.value;
    }
  }), Z = Ee({
    get: () => c.value,
    set: (R) => {
      c.value = R, L.fallbackLocale = c.value, er(L, u.value, R);
    }
  }), oe = Ee(() => f.value), ge = /* @__PURE__ */ Ee(() => m.value), J = /* @__PURE__ */ Ee(() => b.value);
  function $() {
    return Se(y) ? y : null;
  }
  function G(R) {
    y = R, L.postTranslation = R;
  }
  function ce() {
    return k;
  }
  function pe(R) {
    R !== null && (E = cl(R)), k = R, L.missing = E;
  }
  const re = (R, D, X, ae, we, Xe) => {
    Y();
    let Fe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (L.fallbackContext = n ? ap() : void 0), Fe = R(L);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (L.fallbackContext = void 0);
    }
    if (X !== "translate exists" && // for not `te` (e.g `t`)
    Re(Fe) && Fe === Ks || X === "translate exists" && !Fe) {
      const [cn, to] = D();
      return n && w ? ae(n) : we(cn);
    } else {
      if (Xe(Fe))
        return Fe;
      throw Me(Ne.UNEXPECTED_RETURN_TYPE);
    }
  };
  function fe(...R) {
    return re((D) => Reflect.apply(el, null, [D, ...R]), () => Uo(...R), "translate", (D) => Reflect.apply(D.t, D, [...R]), (D) => D, (D) => z(D));
  }
  function xe(...R) {
    const [D, X, ae] = R;
    if (ae && !he(ae))
      throw Me(Ne.INVALID_ARGUMENT);
    return fe(D, X, $e({ resolvedMessage: !0 }, ae || {}));
  }
  function Ve(...R) {
    return re((D) => Reflect.apply(tl, null, [D, ...R]), () => Ho(...R), "datetime format", (D) => Reflect.apply(D.d, D, [...R]), () => Ga, (D) => z(D));
  }
  function lt(...R) {
    return re((D) => Reflect.apply(rl, null, [D, ...R]), () => $o(...R), "number format", (D) => Reflect.apply(D.n, D, [...R]), () => Ga, (D) => z(D));
  }
  function se(R) {
    return R.map((D) => z(D) || Re(D) || ie(D) ? ol(String(D)) : D);
  }
  const je = {
    normalize: se,
    interpolate: (R) => R,
    type: "vnode"
  };
  function Ye(...R) {
    return re(
      (D) => {
        let X;
        const ae = D;
        try {
          ae.processor = je, X = Reflect.apply(el, null, [ae, ...R]);
        } finally {
          ae.processor = null;
        }
        return X;
      },
      () => Uo(...R),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Vo](...R),
      (D) => [ol(D)],
      (D) => Ae(D)
    );
  }
  function De(...R) {
    return re(
      (D) => Reflect.apply(rl, null, [D, ...R]),
      () => $o(...R),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Wo](...R),
      al,
      (D) => z(D) || Ae(D)
    );
  }
  function dt(...R) {
    return re(
      (D) => Reflect.apply(tl, null, [D, ...R]),
      () => Ho(...R),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[jo](...R),
      al,
      (D) => z(D) || Ae(D)
    );
  }
  function p(R) {
    U = R, L.pluralRules = U;
  }
  function g(R, D) {
    return re(() => {
      if (!R)
        return !1;
      const X = z(D) ? D : u.value, ae = C(X), we = L.messageResolver(ae, R);
      return a ? we != null : It(we) || ut(we) || z(we);
    }, () => [R], "translate exists", (X) => Reflect.apply(X.te, X, [R, D]), Sp, (X) => ie(X));
  }
  function _(R) {
    let D = null;
    const X = ku(L, c.value, u.value);
    for (let ae = 0; ae < X.length; ae++) {
      const we = f.value[X[ae]] || {}, Xe = L.messageResolver(we, R);
      if (Xe != null) {
        D = Xe;
        break;
      }
    }
    return D;
  }
  function N(R) {
    const D = _(R);
    return D ?? (n ? n.tm(R) || {} : {});
  }
  function C(R) {
    return f.value[R] || {};
  }
  function M(R, D) {
    if (s) {
      const X = { [R]: D };
      for (const ae in X)
        pt(X, ae) && Lr(X[ae]);
      D = X[R];
    }
    f.value[R] = D, L.messages = f.value;
  }
  function W(R, D) {
    f.value[R] = f.value[R] || {};
    const X = { [R]: D };
    if (s)
      for (const ae in X)
        pt(X, ae) && Lr(X[ae]);
    D = X[R], ns(D, f.value[R]), L.messages = f.value;
  }
  function V(R) {
    return m.value[R] || {};
  }
  function d(R, D) {
    m.value[R] = D, L.datetimeFormats = m.value, nl(L, R, D);
  }
  function h(R, D) {
    m.value[R] = $e(m.value[R] || {}, D), L.datetimeFormats = m.value, nl(L, R, D);
  }
  function O(R) {
    return b.value[R] || {};
  }
  function x(R, D) {
    b.value[R] = D, L.numberFormats = b.value, sl(L, R, D);
  }
  function K(R, D) {
    b.value[R] = $e(b.value[R] || {}, D), L.numberFormats = b.value, sl(L, R, D);
  }
  ll++, n && ys && (En(n.locale, (R) => {
    l && (u.value = R, L.locale = R, er(L, u.value, c.value));
  }), En(n.fallbackLocale, (R) => {
    l && (c.value = R, L.fallbackLocale = R, er(L, u.value, c.value));
  }));
  const j = {
    id: ll,
    locale: H,
    fallbackLocale: Z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(R) {
      l = R, R && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, er(L, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: oe,
    get modifiers() {
      return F;
    },
    get pluralRules() {
      return U || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return T;
    },
    set missingWarn(R) {
      T = R, L.missingWarn = T;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(R) {
      A = R, L.fallbackWarn = A;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(R) {
      w = R;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(R) {
      v = R, L.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(R) {
      P = R, L.warnHtmlMessage = R;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(R) {
      I = R, L.escapeParameter = R;
    },
    t: fe,
    getLocaleMessage: C,
    setLocaleMessage: M,
    mergeLocaleMessage: W,
    getPostTranslationHandler: $,
    setPostTranslationHandler: G,
    getMissingHandler: ce,
    setMissingHandler: pe,
    [Bu]: p
  };
  return j.datetimeFormats = ge, j.numberFormats = J, j.rt = xe, j.te = g, j.tm = N, j.d = Ve, j.n = lt, j.getDateTimeFormat = V, j.setDateTimeFormat = d, j.mergeDateTimeFormat = h, j.getNumberFormat = O, j.setNumberFormat = x, j.mergeNumberFormat = K, j[Ku] = r, j[Vo] = Ye, j[jo] = dt, j[Wo] = De, j;
}
function Tp(e) {
  const t = z(e.locale) ? e.locale : Bn, n = z(e.fallbackLocale) || Ae(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Se(e.missing) ? e.missing : void 0, o = ie(e.silentTranslationWarn) || sn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ie(e.silentFallbackWarn) || sn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ie(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = te(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Se(e.postTranslation) ? e.postTranslation : void 0, f = z(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, b = ie(e.sync) ? e.sync : !0;
  let T = e.messages;
  if (te(e.sharedMessages)) {
    const I = e.sharedMessages;
    T = Object.keys(I).reduce((U, L) => {
      const B = U[L] || (U[L] = {});
      return $e(B, I[L]), U;
    }, T || {});
  }
  const { __i18n: A, __root: w, __injectWithOption: v } = e, k = e.datetimeFormats, E = e.numberFormats, y = e.flatJson, P = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: T,
    flatJson: y,
    datetimeFormats: k,
    numberFormats: E,
    missing: r,
    missingWarn: o,
    fallbackWarn: s,
    fallbackRoot: i,
    fallbackFormat: a,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: f,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: b,
    translateExistCompatible: P,
    __i18n: A,
    __root: w,
    __injectWithOption: v
  };
}
function Ko(e = {}, t) {
  {
    const n = Ai(Tp(e)), { __extender: r } = e, o = {
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
        return ie(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = ie(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ie(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = ie(s) ? !s : s;
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
        const [i, a, l] = s, u = {};
        let c = null, f = null;
        if (!z(i))
          throw Me(Ne.INVALID_ARGUMENT);
        const m = i;
        return z(a) ? u.locale = a : Ae(a) ? c = a : te(a) && (f = a), Ae(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
          m,
          c || f || {},
          u
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [i, a, l] = s, u = { plural: 1 };
        let c = null, f = null;
        if (!z(i))
          throw Me(Ne.INVALID_ARGUMENT);
        const m = i;
        return z(a) ? u.locale = a : Re(a) ? u.plural = a : Ae(a) ? c = a : te(a) && (f = a), z(l) ? u.locale = l : Ae(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
          m,
          c || f || {},
          u
        ]);
      },
      // te
      te(s, i) {
        return n.te(s, i);
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
      setLocaleMessage(s, i) {
        n.setLocaleMessage(s, i);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(s, i) {
        n.mergeLocaleMessage(s, i);
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
      setDateTimeFormat(s, i) {
        n.setDateTimeFormat(s, i);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(s, i) {
        n.mergeDateTimeFormat(s, i);
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
      setNumberFormat(s, i) {
        n.setNumberFormat(s, i);
      },
      // mergeNumberFormat
      mergeNumberFormat(s, i) {
        n.mergeNumberFormat(s, i);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(s, i) {
        return -1;
      }
    };
    return o.__extender = r, o;
  }
}
const Ti = {
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
function wp({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ke ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, be());
}
function Gu(e) {
  return ke;
}
const Op = /* @__PURE__ */ Ln({
  /* eslint-disable */
  name: "i18n-t",
  props: $e({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Re(e) || !isNaN(e)
    }
  }, Ti),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), i = be();
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = z(e.plural) ? +e.plural : e.plural);
      const a = wp(t, s), l = o[Vo](e.keypath, a, i), u = $e(be(), r), c = z(e.tag) || he(e.tag) ? e.tag : Gu();
      return $n(c, u, l);
    };
  }
}), ul = Op;
function Lp(e) {
  return Ae(e) && !z(e[0]);
}
function Yu(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let a = be();
    e.locale && (i.locale = e.locale), z(e.format) ? i.key = e.format : he(e.format) && (z(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((m, b) => n.includes(b) ? $e(be(), m, { [b]: e.format[b] }) : m, be()));
    const l = r(e.value, i, a);
    let u = [i.key];
    Ae(l) ? u = l.map((m, b) => {
      const T = o[m.type], A = T ? T({ [m.type]: m.value, index: b, parts: l }) : [m.value];
      return Lp(A) && (A[0].key = `${m.type}-${b}`), A;
    }) : z(l) && (u = [l]);
    const c = $e(be(), s), f = z(e.tag) || he(e.tag) ? e.tag : Gu();
    return $n(f, c, u);
  };
}
const Cp = /* @__PURE__ */ Ln({
  /* eslint-disable */
  name: "i18n-n",
  props: $e({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ti),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return Yu(e, t, ju, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Wo](...r)
    ));
  }
}), fl = Cp, Rp = /* @__PURE__ */ Ln({
  /* eslint-disable */
  name: "i18n-d",
  props: $e({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ti),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return Yu(e, t, Vu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[jo](...r)
    ));
  }
}), dl = Rp;
function Ip(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Pp(e) {
  const t = (i) => {
    const { instance: a, modifiers: l, value: u } = i;
    if (!a || !a.$)
      throw Me(Ne.UNEXPECTED_ERROR);
    const c = Ip(e, a.$), f = hl(u);
    return [
      Reflect.apply(c.t, c, [...ml(f)]),
      c
    ];
  };
  return {
    created: (i, a) => {
      const [l, u] = t(a);
      ys && e.global === u && (i.__i18nWatcher = En(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = l;
    },
    unmounted: (i) => {
      ys && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer, u = hl(a);
        i.textContent = Reflect.apply(l.t, l, [
          ...ml(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    }
  };
}
function hl(e) {
  if (z(e))
    return { path: e };
  if (te(e)) {
    if (!("path" in e))
      throw Me(Ne.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Me(Ne.INVALID_VALUE);
}
function ml(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, i = {}, a = r || {};
  return z(n) && (i.locale = n), Re(o) && (i.plural = o), Re(s) && (i.plural = s), [t, a, i];
}
function Np(e, t, ...n) {
  const r = te(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (ie(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : ul.name, "I18nT"].forEach((i) => e.component(i, ul)), [fl.name, "I18nN"].forEach((i) => e.component(i, fl)), [dl.name, "I18nD"].forEach((i) => e.component(i, dl))), e.directive("t", Pp(t));
}
function kp(e, t, n) {
  return {
    beforeCreate() {
      const r = vt();
      if (!r)
        throw Me(Ne.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = pl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Ko(s);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = pl(e, o);
        else {
          this.$i18n = Ko({
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
      o.__i18nGlobal && zu(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, i) => this.$i18n.te(s, i), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = vt();
      if (!r)
        throw Me(Ne.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function pl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Bu](t.pluralizationRules || e.pluralizationRules);
  const n = qs(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Mp = /* @__PURE__ */ on("global-vue-i18n");
function xp(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ie(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ie(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [i, a] = Dp(e, n), l = /* @__PURE__ */ on("");
  function u(m) {
    return s.get(m) || null;
  }
  function c(m, b) {
    s.set(m, b);
  }
  function f(m) {
    s.delete(m);
  }
  {
    const m = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return o;
      },
      // install plugin
      async install(b, ...T) {
        if (b.__VUE_I18N_SYMBOL__ = l, b.provide(b.__VUE_I18N_SYMBOL__, m), te(T[0])) {
          const v = T[0];
          m.__composerExtend = v.__composerExtend, m.__vueI18nExtend = v.__vueI18nExtend;
        }
        let A = null;
        !n && r && (A = Kp(b, m.global)), __VUE_I18N_FULL_INSTALL__ && Np(b, m, ...T), __VUE_I18N_LEGACY_API__ && n && b.mixin(kp(a, a.__composer, m));
        const w = b.unmount;
        b.unmount = () => {
          A && A(), m.dispose(), w();
        };
      },
      // global accessor
      get global() {
        return a;
      },
      dispose() {
        i.stop();
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
    return m;
  }
}
function wi(e = {}) {
  const t = vt();
  if (t == null)
    throw Me(Ne.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Me(Ne.NOT_INSTALLED);
  const n = Fp(t), r = Hp(n), o = qu(t), s = Up(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Me(Ne.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Wp(t, s, r, e);
  }
  if (s === "global")
    return zu(r, e, o), r;
  if (s === "parent") {
    let l = $p(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = $e({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), a = Ai(l), i.__composerExtend && (a[Bo] = i.__composerExtend(a)), jp(i, t, a), i.__setInstance(t, a);
  }
  return a;
}
function Dp(e, t, n) {
  const r = ei();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ko(e)) : r.run(() => Ai(e));
    if (o == null)
      throw Me(Ne.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Fp(e) {
  {
    const t = gt(e.isCE ? Mp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Me(e.isCE ? Ne.NOT_INSTALLED_WITH_PROVIDE : Ne.UNEXPECTED_ERROR);
    return t;
  }
}
function Up(e, t) {
  return Ws(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Hp(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function $p(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = Vp(t, n);
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(s);
      a != null && (r = a.__composer, n && r && !r[Ku] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Vp(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function jp(e, t, n) {
  fi(() => {
  }, t), di(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Bo];
    o && (o(), delete r[Bo]);
  }, t);
}
function Wp(e, t, n, r = {}) {
  const o = t === "local", s = ai(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Me(Ne.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ie(r.inheritLocale) ? r.inheritLocale : !z(r.locale), a = le(
    // prettier-ignore
    !o || i ? n.locale.value : z(r.locale) ? r.locale : Bn
  ), l = le(
    // prettier-ignore
    !o || i ? n.fallbackLocale.value : z(r.fallbackLocale) || Ae(r.fallbackLocale) || te(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value
  ), u = le(qs(a.value, r)), c = le(te(r.datetimeFormats) ? r.datetimeFormats : { [a.value]: {} }), f = le(te(r.numberFormats) ? r.numberFormats : { [a.value]: {} }), m = o ? n.missingWarn : ie(r.missingWarn) || sn(r.missingWarn) ? r.missingWarn : !0, b = o ? n.fallbackWarn : ie(r.fallbackWarn) || sn(r.fallbackWarn) ? r.fallbackWarn : !0, T = o ? n.fallbackRoot : ie(r.fallbackRoot) ? r.fallbackRoot : !0, A = !!r.fallbackFormat, w = Se(r.missing) ? r.missing : null, v = Se(r.postTranslation) ? r.postTranslation : null, k = o ? n.warnHtmlMessage : ie(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, y = o ? n.modifiers : te(r.modifiers) ? r.modifiers : {}, P = r.pluralRules || o && n.pluralRules;
  function I() {
    return [
      a.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const F = Ee({
    get: () => s.value ? s.value.locale.value : a.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), a.value = _;
    }
  }), U = Ee({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), L = Ee(() => s.value ? s.value.messages.value : u.value), B = Ee(() => c.value), Y = Ee(() => f.value);
  function H() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function Z(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function oe() {
    return s.value ? s.value.getMissingHandler() : w;
  }
  function ge(_) {
    s.value && s.value.setMissingHandler(_);
  }
  function J(_) {
    return I(), _();
  }
  function $(..._) {
    return s.value ? J(() => Reflect.apply(s.value.t, null, [..._])) : J(() => "");
  }
  function G(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function ce(..._) {
    return s.value ? J(() => Reflect.apply(s.value.d, null, [..._])) : J(() => "");
  }
  function pe(..._) {
    return s.value ? J(() => Reflect.apply(s.value.n, null, [..._])) : J(() => "");
  }
  function re(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function fe(_, N) {
    return s.value ? s.value.te(_, N) : !1;
  }
  function xe(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function Ve(_, N) {
    s.value && (s.value.setLocaleMessage(_, N), u.value[_] = N);
  }
  function lt(_, N) {
    s.value && s.value.mergeLocaleMessage(_, N);
  }
  function se(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function Te(_, N) {
    s.value && (s.value.setDateTimeFormat(_, N), c.value[_] = N);
  }
  function je(_, N) {
    s.value && s.value.mergeDateTimeFormat(_, N);
  }
  function Ye(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function De(_, N) {
    s.value && (s.value.setNumberFormat(_, N), f.value[_] = N);
  }
  function dt(_, N) {
    s.value && s.value.mergeNumberFormat(_, N);
  }
  const p = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: F,
    fallbackLocale: U,
    messages: L,
    datetimeFormats: B,
    numberFormats: Y,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : i;
    },
    set inheritLocale(_) {
      s.value && (s.value.inheritLocale = _);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : y;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : P;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : m;
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
      return s.value ? s.value.fallbackRoot : T;
    },
    set fallbackRoot(_) {
      s.value && (s.value.fallbackRoot = _);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : A;
    },
    set fallbackFormat(_) {
      s.value && (s.value.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : k;
    },
    set warnHtmlMessage(_) {
      s.value && (s.value.warnHtmlMessage = _);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : E;
    },
    set escapeParameter(_) {
      s.value && (s.value.escapeParameter = _);
    },
    t: $,
    getPostTranslationHandler: H,
    setPostTranslationHandler: Z,
    getMissingHandler: oe,
    setMissingHandler: ge,
    rt: G,
    d: ce,
    n: pe,
    tm: re,
    te: fe,
    getLocaleMessage: xe,
    setLocaleMessage: Ve,
    mergeLocaleMessage: lt,
    getDateTimeFormat: se,
    setDateTimeFormat: Te,
    mergeDateTimeFormat: je,
    getNumberFormat: Ye,
    setNumberFormat: De,
    mergeNumberFormat: dt
  };
  function g(_) {
    _.locale.value = a.value, _.fallbackLocale.value = l.value, Object.keys(u.value).forEach((N) => {
      _.mergeLocaleMessage(N, u.value[N]);
    }), Object.keys(c.value).forEach((N) => {
      _.mergeDateTimeFormat(N, c.value[N]);
    }), Object.keys(f.value).forEach((N) => {
      _.mergeNumberFormat(N, f.value[N]);
    }), _.escapeParameter = E, _.fallbackFormat = A, _.fallbackRoot = T, _.fallbackWarn = b, _.missingWarn = m, _.warnHtmlMessage = k;
  }
  return Pc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Me(Ne.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = _.locale.value, l.value = _.fallbackLocale.value, u.value = _.messages.value, c.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : o && g(_);
  }), p;
}
const Bp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], _l = ["t", "rt", "d", "n", "tm", "te"];
function Kp(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Bp.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw Me(Ne.UNEXPECTED_ERROR);
    const i = Oe(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        s.value.value = a;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, o, i);
  }), e.config.globalProperties.$i18n = n, _l.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw Me(Ne.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, _l.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
Ep();
np(mp);
rp(D0);
sp(ku);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = gn();
  e.__INTLIFY__ = !0, K0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const qp = "sub2api_locale", Oi = "en", zp = {
  en: () => import("./index-nOqJvpbb.js"),
  zh: () => import("./index-POjM2mMU.js")
};
function Xu(e) {
  return e === "en" || e === "zh";
}
function Gp() {
  const e = localStorage.getItem(qp);
  return e && Xu(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Oi;
}
const Un = xp({
  legacy: !1,
  locale: Gp(),
  fallbackLocale: Oi,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), gl = /* @__PURE__ */ new Set();
async function Ju(e) {
  if (gl.has(e))
    return;
  const t = zp[e], n = await t();
  Un.global.setLocaleMessage(e, n.default), gl.add(e);
}
async function Yp() {
  const e = Qu();
  await Ju(e), document.documentElement.setAttribute("lang", e);
}
function Qu() {
  const e = Un.global.locale.value;
  return Xu(e) ? e : Oi;
}
function Zu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xp } = Object.prototype, { getPrototypeOf: Kn } = Object, { iterator: xr, toStringTag: ef } = Symbol, vs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Cr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), vs(n, t))
      return !0;
    n = Kn(n);
  }
  return !1;
}, Jp = (e, t) => e != null && Cr(e, t) ? e[t] : void 0, Li = /* @__PURE__ */ ((e) => (t) => {
  const n = Xp.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), St = (e) => (e = e.toLowerCase(), (t) => Li(t) === e), zs = (e) => (t) => typeof t === e, { isArray: wn } = Array, qn = zs("undefined");
function Yn(e) {
  return e !== null && !qn(e) && e.constructor !== null && !qn(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tf = St("ArrayBuffer");
function Qp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tf(e.buffer), t;
}
const Zp = zs("string"), rt = zs("function"), nf = zs("number"), Xn = (e) => e !== null && typeof e == "object", e1 = (e) => e === !0 || e === !1, rs = (e) => {
  if (!Xn(e))
    return !1;
  const t = Kn(e);
  return (t === null || t === Object.prototype || Kn(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Cr(e, ef) && !Cr(e, xr);
}, t1 = (e) => {
  if (!Xn(e) || Yn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, n1 = St("Date"), r1 = St("File"), s1 = (e) => !!(e && typeof e.uri < "u"), o1 = (e) => e && typeof e.getParts < "u", i1 = St("Blob"), a1 = St("FileList"), l1 = (e) => Xn(e) && rt(e.pipe);
function c1() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const bl = c1(), yl = typeof bl.FormData < "u" ? bl.FormData : void 0, u1 = (e) => {
  if (!e) return !1;
  if (yl && e instanceof yl) return !0;
  const t = Kn(e);
  if (!t || t === Object.prototype || !rt(e.append)) return !1;
  const n = Li(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && rt(e.toString) && e.toString() === "[object FormData]";
}, f1 = St("URLSearchParams"), [d1, h1, m1, p1] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(St), _1 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), wn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Yn(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function rf(e, t) {
  if (Yn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, sf = (e) => !qn(e) && e !== bn;
function qo(...e) {
  const { caseless: t, skipUndefined: n } = sf(this) && this || {}, r = {}, o = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && rf(r, i) || i, l = vs(r, a) ? r[a] : void 0;
    rs(l) && rs(s) ? r[a] = qo(l, s) : rs(s) ? r[a] = qo({}, s) : wn(s) ? r[a] = s.slice() : (!n || !qn(s)) && (r[a] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const a = e[s];
    if (!a || Yn(a) || (Dr(a, o), typeof a != "object" || wn(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      C1.call(a, c) && o(a[c], c);
    }
  }
  return r;
}
const g1 = (e, t, n, { allOwnKeys: r } = {}) => (Dr(
  t,
  (o, s) => {
    n && rt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Zu(o, n),
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
), e), b1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), y1 = (e, t, n, r) => {
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
}, E1 = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Kn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, v1 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, S1 = (e) => {
  if (!e) return null;
  if (wn(e)) return e;
  let t = e.length;
  if (!nf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, A1 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Kn(Uint8Array)), T1 = (e, t) => {
  const r = (e && e[xr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, w1 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, O1 = St("HTMLFormElement"), L1 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: C1 } = Object.prototype, R1 = St("RegExp"), of = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Dr(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, I1 = (e) => {
  of(e, (t, n) => {
    if (rt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (rt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, P1 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return wn(e) ? r(e) : r(String(e).split(t)), n;
}, N1 = () => {
}, k1 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function M1(e) {
  return !!(e && rt(e.append) && e[ef] === "FormData" && e[xr]);
}
const x1 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Xn(r)) {
      if (t.has(r))
        return;
      if (Yn(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = wn(r) ? [] : {};
        return Dr(r, (s, i) => {
          const a = n(s);
          !qn(a) && (o[i] = a);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, D1 = St("AsyncFunction"), F1 = (e) => e && (Xn(e) || rt(e)) && rt(e.then) && rt(e.catch), af = ((e, t) => e ? setImmediate : t ? ((n, r) => (bn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === bn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), bn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", rt(bn.postMessage)), U1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || af, lf = (e) => e != null && rt(e[xr]), H1 = (e) => e != null && Cr(e, xr) && lf(e), S = {
  isArray: wn,
  isArrayBuffer: tf,
  isBuffer: Yn,
  isFormData: u1,
  isArrayBufferView: Qp,
  isString: Zp,
  isNumber: nf,
  isBoolean: e1,
  isObject: Xn,
  isPlainObject: rs,
  isEmptyObject: t1,
  isReadableStream: d1,
  isRequest: h1,
  isResponse: m1,
  isHeaders: p1,
  isUndefined: qn,
  isDate: n1,
  isFile: r1,
  isReactNativeBlob: s1,
  isReactNative: o1,
  isBlob: i1,
  isRegExp: R1,
  isFunction: rt,
  isStream: l1,
  isURLSearchParams: f1,
  isTypedArray: A1,
  isFileList: a1,
  forEach: Dr,
  merge: qo,
  extend: g1,
  trim: _1,
  stripBOM: b1,
  inherits: y1,
  toFlatObject: E1,
  kindOf: Li,
  kindOfTest: St,
  endsWith: v1,
  toArray: S1,
  forEachEntry: T1,
  matchAll: w1,
  isHTMLForm: O1,
  hasOwnProperty: vs,
  hasOwnProp: vs,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Cr,
  getSafeProp: Jp,
  reduceDescriptors: of,
  freezeMethods: I1,
  toObjectSet: P1,
  toCamelCase: L1,
  noop: N1,
  toFiniteNumber: k1,
  findKey: rf,
  global: bn,
  isContextDefined: sf,
  isSpecCompliantForm: M1,
  toJSONObject: x1,
  isAsyncFn: D1,
  isThenable: F1,
  setImmediate: af,
  asap: U1,
  isIterable: lf,
  isSafeIterable: H1
}, $1 = S.toObjectSet([
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
]), V1 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && $1[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function j1(e) {
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
const W1 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), B1 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ci(e, t) {
  return S.isArray(e) ? e.map((n) => Ci(n, t)) : j1(String(e).replace(t, ""));
}
const K1 = (e) => Ci(e, W1), q1 = (e) => Ci(e, B1);
function cf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return S.forEach(e.toJSON(), (n, r) => {
    t[r] = q1(n);
  }), t;
}
const El = Symbol("internals");
function tr(e) {
  return e && String(e).trim().toLowerCase();
}
function ss(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(ss) : K1(String(e));
}
function z1(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const G1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bo(e, t, n, r, o) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function Y1(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function X1(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let Ge = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, u) {
      const c = tr(l);
      if (!c)
        return;
      const f = S.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = ss(a));
    }
    const i = (a, l) => S.forEach(a, (u, c) => s(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !G1(t))
      i(V1(t), n);
    else if (S.isObject(t) && S.isSafeIterable(t)) {
      let a = /* @__PURE__ */ Object.create(null), l, u;
      for (const c of t) {
        if (!S.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        u = c[0], S.hasOwnProp(a, u) ? (l = a[u], a[u] = S.isArray(l) ? [...l, c[1]] : [l, c[1]]) : a[u] = c[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = tr(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return z1(o);
        if (S.isFunction(n))
          return n.call(this, o, r);
        if (S.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tr(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = tr(i), i) {
        const a = S.findKey(r, i);
        a && (!n || bo(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return S.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || bo(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (o, s) => {
      const i = S.findKey(r, s);
      if (i) {
        n[i] = ss(o), delete n[s];
        return;
      }
      const a = t ? Y1(s) : String(s).trim();
      a !== s && delete n[s], n[a] = ss(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && S.isArray(r) ? r.join(", ") : r);
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
    const r = (this[El] = this[El] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = tr(i);
      r[a] || (X1(o, i), r[a] = !0);
    }
    return S.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Ge.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
S.reduceDescriptors(Ge.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(Ge);
const J1 = "[REDACTED ****]";
function Q1(e) {
  if (S.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (S.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Z1(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || S.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof Ge && (s = s.toJSON()), r.push(s);
    let i;
    if (S.isArray(s))
      i = [], s.forEach((a, l) => {
        const u = o(a);
        S.isUndefined(u) || (i[l] = u);
      });
    else {
      if (!S.isPlainObject(s) && Q1(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(s)) {
        const u = n.has(a.toLowerCase()) ? J1 : o(l);
        S.isUndefined(u) || (i[a] = u);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
let q = class uf extends Error {
  static from(t, n, r, o, s, i) {
    const a = new uf(t.message, n || t.code, r, o, s);
    return Object.defineProperty(a, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), a.name = t.name, t.status != null && a.status == null && (a.status = t.status), i && Object.assign(a, i), a;
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
    const t = this.config, n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0, r = S.isArray(n) && n.length > 0 ? Z1(t, n) : S.toJSONObject(t);
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
q.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
q.ERR_BAD_OPTION = "ERR_BAD_OPTION";
q.ECONNABORTED = "ECONNABORTED";
q.ETIMEDOUT = "ETIMEDOUT";
q.ECONNREFUSED = "ECONNREFUSED";
q.ERR_NETWORK = "ERR_NETWORK";
q.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
q.ERR_DEPRECATED = "ERR_DEPRECATED";
q.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
q.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
q.ERR_CANCELED = "ERR_CANCELED";
q.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
q.ERR_INVALID_URL = "ERR_INVALID_URL";
q.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const e_ = null, ff = 100;
function zo(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function df(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = df(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function t_(e) {
  return S.isArray(e) && !e.some(zo);
}
const n_ = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Gs(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = S.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(k, E) {
      return !S.isUndefined(E[k]);
    }
  );
  const r = n.metaTokens, o = n.visitor || T, s = n.dots, i = n.indexes, a = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? ff : n.maxDepth, u = a && S.isSpecCompliantForm(t), c = [];
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(v) {
    if (v === null) return "";
    if (S.isDate(v))
      return v.toISOString();
    if (S.isBoolean(v))
      return v.toString();
    if (!u && S.isBlob(v))
      throw new q("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(v) || S.isTypedArray(v)) {
      if (u && typeof a == "function")
        return new a([v]);
      if (typeof Buffer < "u")
        return Buffer.from(v);
      throw new q("Blob is not supported. Use a Buffer instead.", q.ERR_NOT_SUPPORT);
    }
    return v;
  }
  function m(v) {
    if (v > l)
      throw new q(
        "Object is too deeply nested (" + v + " levels). Max depth: " + l,
        q.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function b(v, k) {
    if (l === 1 / 0)
      return JSON.stringify(v);
    const E = [];
    return JSON.stringify(v, function(P, I) {
      if (!S.isObject(I))
        return I;
      for (; E.length && E[E.length - 1] !== this; )
        E.pop();
      return E.push(I), m(k + E.length - 1), I;
    });
  }
  function T(v, k, E) {
    let y = v;
    if (S.isReactNative(t) && S.isReactNativeBlob(v))
      return t.append(yo(E, k, s), f(v)), !1;
    if (v && !E && typeof v == "object") {
      if (S.endsWith(k, "{}"))
        k = r ? k : k.slice(0, -2), v = b(v, 1);
      else if (S.isArray(v) && t_(v) || (S.isFileList(v) || S.endsWith(k, "[]")) && (y = S.toArray(v)))
        return k = df(k), y.forEach(function(I, F) {
          !(S.isUndefined(I) || I === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? yo([k], F, s) : i === null ? k : k + "[]",
            f(I)
          );
        }), !1;
    }
    return zo(v) ? !0 : (t.append(yo(E, k, s), f(v)), !1);
  }
  const A = Object.assign(n_, {
    defaultVisitor: T,
    convertValue: f,
    isVisitable: zo
  });
  function w(v, k, E = 0) {
    if (!S.isUndefined(v)) {
      if (m(E), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + k.join("."));
      c.push(v), S.forEach(v, function(P, I) {
        (!(S.isUndefined(P) || P === null) && o.call(t, P, S.isString(I) ? I.trim() : I, k, A)) === !0 && w(P, k ? k.concat(I) : [I], E + 1);
      }), c.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function vl(e) {
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
function Ri(e, t) {
  this._pairs = [], e && Gs(e, this, t);
}
const hf = Ri.prototype;
hf.append = function(t, n) {
  this._pairs.push([t, n]);
};
hf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, vl) : vl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function r_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = S.isFunction(n) ? {
    serialize: n
  } : n, o = S.getSafeProp(r, "encode") || r_, s = S.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = S.isURLSearchParams(t) ? t.toString() : new Ri(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Sl {
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
    S.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ii = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, s_ = typeof URLSearchParams < "u" ? URLSearchParams : Ri, o_ = typeof FormData < "u" ? FormData : null, i_ = typeof Blob < "u" ? Blob : null, a_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: s_,
    FormData: o_,
    Blob: i_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pi = typeof window < "u" && typeof document < "u", Go = typeof navigator == "object" && navigator || void 0, l_ = Pi && (!Go || ["ReactNative", "NativeScript", "NS"].indexOf(Go.product) < 0), c_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", u_ = Pi && window.location.href || "http://localhost", f_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pi,
  hasStandardBrowserEnv: l_,
  hasStandardBrowserWebWorkerEnv: c_,
  navigator: Go,
  origin: u_
}, Symbol.toStringTag, { value: "Module" })), Ue = {
  ...f_,
  ...a_
};
function d_(e, t) {
  return Gs(e, new Ue.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return Ue.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Al = ff;
function pf(e) {
  if (e > Al)
    throw new q(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Al,
      q.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function h_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    pf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
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
function _f(e) {
  function t(n, r, o, s) {
    pf(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && S.isArray(o) ? o.length : i, l ? (S.hasOwnProp(o, i) ? o[i] = S.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !a) : ((!S.hasOwnProp(o, i) || !S.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && S.isArray(o[i]) && (o[i] = m_(o[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, o) => {
      t(h_(r), o, n, 0);
    }), n;
  }
  return null;
}
const In = (e, t) => e != null && S.hasOwnProp(e, t) ? e[t] : void 0;
function p_(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Fr = {
  transitional: Ii,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = S.isObject(t);
      if (s && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
        return o ? JSON.stringify(_f(t)) : t;
      if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
        return t;
      if (S.isArrayBufferView(t))
        return t.buffer;
      if (S.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        const l = In(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return d_(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = In(this, "env"), c = u && u.FormData;
          return Gs(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), p_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = In(this, "transitional") || Fr.transitional, r = n && n.forcedJSONParsing, o = In(this, "responseType"), s = o === "json";
      if (S.isResponse(t) || S.isReadableStream(t))
        return t;
      if (t && S.isString(t) && (r && !o || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, In(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, In(this, "response")) : l;
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
    FormData: Ue.classes.FormData,
    Blob: Ue.classes.Blob
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
S.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Fr.headers[e] = {};
});
function Eo(e, t) {
  const n = this || Fr, r = t || n, o = Ge.from(r.headers);
  let s = r.data;
  return S.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function gf(e) {
  return !!(e && e.__CANCEL__);
}
let Ur = class extends q {
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
    super(t ?? "canceled", q.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function bf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new q(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? q.ERR_BAD_REQUEST : q.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function __(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function g_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[s];
    i || (i = u), n[o] = l, r[o] = u;
    let f = s, m = 0;
    for (; f !== o; )
      m += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const b = c && u - c;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function b_(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const i = (u, c = Date.now()) => {
    n = c, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - n;
    f >= r ? i(u, c) : (o = u, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - f)));
  }, () => o && i(o)];
}
const Ss = (e, t, n = 3) => {
  let r = 0;
  const o = g_(50, 250);
  return b_((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = a != null ? Math.min(i, a) : i, u = Math.max(0, l - r), c = o(u);
    r = Math.max(r, l);
    const f = {
      loaded: l,
      total: a,
      progress: a ? l / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a ? (a - l) / c : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Tl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, wl = (e) => (...t) => S.asap(() => e(...t)), y_ = Ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ue.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ue.origin),
  Ue.navigator && /(msie|trident)/i.test(Ue.navigator.userAgent)
) : () => !0, E_ = Ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      S.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), S.isString(r) && a.push(`path=${r}`), S.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), S.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
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
function S_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const A_ = /^https?:(?!\/\/)/i, T_ = /[\t\n\r]/g;
function w_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function O_(e) {
  return w_(e).replace(T_, "");
}
function Ol(e, t) {
  if (typeof e == "string" && A_.test(O_(e)))
    throw new q(
      'Invalid URL: missing "//" after protocol',
      q.ERR_INVALID_URL,
      t
    );
}
function yf(e, t, n, r) {
  Ol(t, r);
  let o = !v_(t);
  return e && (o || n === !1) ? (Ol(e, r), S_(e, t)) : t;
}
const Ll = (e) => e instanceof Ge ? { ...e } : e;
function On(e, t) {
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
  function r(c, f, m, b) {
    return S.isPlainObject(c) && S.isPlainObject(f) ? S.merge.call({ caseless: b }, c, f) : S.isPlainObject(f) ? S.merge({}, f) : S.isArray(f) ? f.slice() : f;
  }
  function o(c, f, m, b) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c))
        return r(void 0, c, m, b);
    } else return r(c, f, m, b);
  }
  function s(c, f) {
    if (!S.isUndefined(f))
      return r(void 0, f);
  }
  function i(c, f) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, f);
  }
  function a(c) {
    const f = S.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!S.isUndefined(f))
      if (S.isPlainObject(f)) {
        if (S.hasOwnProp(f, c))
          return f[c];
      } else
        return;
    const m = S.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (S.isPlainObject(m) && S.hasOwnProp(m, c))
      return m[c];
  }
  function l(c, f, m) {
    if (S.hasOwnProp(t, m))
      return r(c, f);
    if (S.hasOwnProp(e, m))
      return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, f, m) => o(Ll(c), Ll(f), m, !0)
  };
  return S.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = S.hasOwnProp(u, f) ? u[f] : o, b = S.hasOwnProp(e, f) ? e[f] : void 0, T = S.hasOwnProp(t, f) ? t[f] : void 0, A = m(b, T, f);
    S.isUndefined(A) && m !== l || (n[f] = A);
  }), S.hasOwnProp(t, "validateStatus") && S.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const L_ = ["content-type", "content-length"];
function C_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    L_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const R_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Ef(e) {
  const t = On({}, e), n = (m) => S.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = a = Ge.from(a), t.url = mf(
    yf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = S.getSafeProp(l, "username") || "", b = S.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (b ? R_(b) : ""))
      );
    } catch (T) {
      throw q.from(T, q.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (S.isFormData(r) && (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv || S.isReactNative(r) ? a.setContentType(void 0) : S.isFunction(r.getHeaders) && C_(a, r.getHeaders(), n("formDataHeaderPolicy"))), Ue.hasStandardBrowserEnv && (S.isFunction(o) && (o = o(t)), o === !0 || o == null && y_(t.url))) {
    const b = s && i && E_.read(i);
    b && a.set(s, b);
  }
  return t;
}
const I_ = typeof XMLHttpRequest < "u", P_ = I_ && function(e) {
  return new Promise(function(n, r) {
    const o = Ef(e);
    let s = o.data;
    const i = Ge.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, c, f, m, b, T;
    function A() {
      b && b(), T && T(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let w = new XMLHttpRequest();
    w.open(o.method.toUpperCase(), o.url, !0), w.timeout = o.timeout;
    function v() {
      if (!w)
        return;
      const E = Ge.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: E,
        config: e,
        request: w
      };
      bf(
        function(F) {
          n(F), A();
        },
        function(F) {
          r(F), A();
        },
        P
      ), w = null;
    }
    "onloadend" in w ? w.onloadend = v : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.startsWith("file:")) || setTimeout(v);
    }, w.onabort = function() {
      w && (r(new q("Request aborted", q.ECONNABORTED, e, w)), A(), w = null);
    }, w.onerror = function(y) {
      const P = y && y.message ? y.message : "Network Error", I = new q(P, q.ERR_NETWORK, e, w);
      I.event = y || null, r(I), A(), w = null;
    }, w.ontimeout = function() {
      let y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Ii;
      o.timeoutErrorMessage && (y = o.timeoutErrorMessage), r(
        new q(
          y,
          P.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
          e,
          w
        )
      ), A(), w = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in w && S.forEach(cf(i), function(y, P) {
      w.setRequestHeader(P, y);
    }), S.isUndefined(o.withCredentials) || (w.withCredentials = !!o.withCredentials), a && a !== "json" && (w.responseType = o.responseType), u && ([m, T] = Ss(u, !0), w.addEventListener("progress", m)), l && w.upload && ([f, b] = Ss(l), w.upload.addEventListener("progress", f), w.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (E) => {
      w && (r(!E || E.type ? new Ur(null, e, w) : E), w.abort(), A(), w = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const k = __(o.url);
    if (k && !Ue.protocols.includes(k)) {
      r(
        new q(
          "Unsupported protocol " + k + ":",
          q.ERR_BAD_REQUEST,
          e
        )
      ), A();
      return;
    }
    w.send(s || null);
  });
}, N_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof q ? u : new Ur(u instanceof Error ? u.message : u)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, o(new q(`timeout of ${t}ms exceeded`, q.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((l) => l.addEventListener("abort", o, { once: !0 }));
  const { signal: a } = n;
  return a.unsubscribe = () => S.asap(i), a;
}, k_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, M_ = async function* (e, t) {
  for await (const n of x_(e))
    yield* k_(n, t);
}, x_ = async function* (e) {
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
}, Cl = (e, t, n, r) => {
  const o = M_(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: u, value: c } = await o.next();
          if (u) {
            a(), l.close();
            return;
          }
          let f = c.byteLength;
          if (n) {
            let m = s += f;
            n(m);
          }
          l.enqueue(new Uint8Array(c));
        } catch (u) {
          throw a(u), u;
        }
      },
      cancel(l) {
        return a(l), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, As = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, D_ = (e, t, n) => t + 2 < n && As(e.charCodeAt(t + 1)) && As(e.charCodeAt(t + 2));
function F_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const a = r.length;
    for (let b = 0; b < a; b++)
      if (r.charCodeAt(b) === 37 && b + 2 < a) {
        const T = r.charCodeAt(b + 1), A = r.charCodeAt(b + 2);
        As(T) && As(A) && (i -= 2, b += 2);
      }
    let l = 0, u = a - 1;
    const c = (b) => b >= 2 && r.charCodeAt(b - 2) === 37 && // '%'
    r.charCodeAt(b - 1) === 51 && // '3'
    (r.charCodeAt(b) === 68 || r.charCodeAt(b) === 100);
    u >= 0 && (r.charCodeAt(u) === 61 ? (l++, u--) : c(u) && (l++, u -= 3)), l === 1 && u >= 0 && (r.charCodeAt(u) === 61 || c(u)) && l++;
    const m = Math.floor(i / 4) * 3 - (l || 0);
    return m > 0 ? m : 0;
  }
  let s = 0;
  for (let i = 0, a = r.length; i < a; i++) {
    const l = r.charCodeAt(i);
    if (l === 37 && D_(r, i, a))
      s += 1, i += 2;
    else if (l < 128)
      s += 1;
    else if (l < 2048)
      s += 2;
    else if (l >= 55296 && l <= 56319 && i + 1 < a) {
      const u = r.charCodeAt(i + 1);
      u >= 56320 && u <= 57343 ? (s += 4, i++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const Ni = "1.18.1", Rl = 64 * 1024, { isFunction: zr } = S, U_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Il = (e) => {
  if (!S.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Pl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, H_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, $_ = (e) => {
  const t = S.global !== void 0 && S.global !== null ? S.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = S.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: o, Request: s, Response: i } = e, a = o ? zr(o) : typeof fetch == "function", l = zr(s), u = zr(i);
  if (!a)
    return !1;
  const c = a && zr(n), f = a && (typeof r == "function" ? /* @__PURE__ */ ((v) => (k) => v.encode(k))(new r()) : async (v) => new Uint8Array(await new s(v).arrayBuffer())), m = l && c && Pl(() => {
    let v = !1;
    const k = new s(Ue.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), E = k.headers.has("Content-Type");
    return k.body != null && k.body.cancel(), v && !E;
  }), b = u && c && Pl(() => S.isReadableStream(new i("").body)), T = {
    stream: b && ((v) => v.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !T[v] && (T[v] = (k, E) => {
      let y = k && k[v];
      if (y)
        return y.call(k);
      throw new q(
        `Response type '${v}' is not supported`,
        q.ERR_NOT_SUPPORT,
        E
      );
    });
  });
  const A = async (v) => {
    if (v == null)
      return 0;
    if (S.isBlob(v))
      return v.size;
    if (S.isSpecCompliantForm(v))
      return (await new s(Ue.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(v) || S.isArrayBuffer(v))
      return v.byteLength;
    if (S.isURLSearchParams(v) && (v = v + ""), S.isString(v))
      return (await f(v)).byteLength;
  }, w = async (v, k) => {
    const E = S.toFiniteNumber(v.getContentLength());
    return E ?? A(k);
  };
  return async (v) => {
    let {
      url: k,
      method: E,
      data: y,
      signal: P,
      cancelToken: I,
      timeout: F,
      onDownloadProgress: U,
      onUploadProgress: L,
      responseType: B,
      headers: Y,
      withCredentials: H = "same-origin",
      fetchOptions: Z,
      maxContentLength: oe,
      maxBodyLength: ge
    } = Ef(v);
    const J = S.isNumber(oe) && oe > -1, $ = S.isNumber(ge) && ge > -1, G = (se) => S.hasOwnProp(v, se) ? v[se] : void 0;
    let ce = o || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let pe = N_(
      [P, I && I.toAbortSignal()],
      F
    ), re = null;
    const fe = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let xe, Ve = null;
    const lt = () => new q(
      "Request body larger than maxBodyLength limit",
      q.ERR_BAD_REQUEST,
      v,
      re
    );
    try {
      let se;
      const Te = G("auth");
      if (Te) {
        const C = S.getSafeProp(Te, "username") || "", M = S.getSafeProp(Te, "password") || "";
        se = {
          username: C,
          password: M
        };
      }
      if (H_(k)) {
        const C = new URL(k, Ue.origin);
        if (!se && (C.username || C.password)) {
          const M = Il(C.username), W = Il(C.password);
          se = {
            username: M,
            password: W
          };
        }
        (C.username || C.password) && (C.username = "", C.password = "", k = C.href);
      }
      if (se && (Y.delete("authorization"), Y.set(
        "Authorization",
        "Basic " + btoa(U_((se.username || "") + ":" + (se.password || "")))
      )), J && typeof k == "string" && k.startsWith("data:") && F_(k) > oe)
        throw new q(
          "maxContentLength size of " + oe + " exceeded",
          q.ERR_BAD_RESPONSE,
          v,
          re
        );
      if ($ && E !== "get" && E !== "head") {
        const C = await A(y);
        if (typeof C == "number" && isFinite(C) && (xe = C, C > ge))
          throw lt();
      }
      const je = $ && (S.isReadableStream(y) || S.isStream(y)), Ye = (C, M, W) => Cl(
        C,
        Rl,
        (V) => {
          if ($ && V > ge)
            throw Ve = lt();
          M && M(V);
        },
        W
      );
      if (m && E !== "get" && E !== "head" && (L || je)) {
        if (xe = xe ?? await w(Y, y), xe !== 0 || je) {
          let C = new s(k, {
            method: "POST",
            body: y,
            duplex: "half"
          }), M;
          if (S.isFormData(y) && (M = C.headers.get("content-type")) && Y.setContentType(M), C.body) {
            const [W, V] = L && Tl(
              xe,
              Ss(wl(L))
            ) || [];
            y = Ye(C.body, W, V);
          }
        }
      } else if (je && !l && c && E !== "get" && E !== "head")
        y = Ye(y);
      else if (je && l && !m && E !== "get" && E !== "head")
        throw new q(
          "Stream request bodies are not supported by the current fetch implementation",
          q.ERR_NOT_SUPPORT,
          v,
          re
        );
      S.isString(H) || (H = H ? "include" : "omit");
      const De = l && "credentials" in s.prototype;
      if (S.isFormData(y)) {
        const C = Y.getContentType();
        C && /^multipart\/form-data/i.test(C) && !/boundary=/i.test(C) && Y.delete("content-type");
      }
      Y.set("User-Agent", "axios/" + Ni, !1);
      const dt = {
        ...Z,
        signal: pe,
        method: E.toUpperCase(),
        headers: cf(Y.normalize()),
        body: y,
        duplex: "half",
        credentials: De ? H : void 0
      };
      re = l && new s(k, dt);
      let p = await (l ? ce(re, Z) : ce(k, dt));
      const g = Ge.from(p.headers);
      if (J) {
        const C = S.toFiniteNumber(g.getContentLength());
        if (C != null && C > oe)
          throw new q(
            "maxContentLength size of " + oe + " exceeded",
            q.ERR_BAD_RESPONSE,
            v,
            re
          );
      }
      const _ = b && (B === "stream" || B === "response");
      if (b && p.body && (U || J || _ && fe)) {
        const C = {};
        ["status", "statusText", "headers"].forEach((O) => {
          C[O] = p[O];
        });
        const M = S.toFiniteNumber(g.getContentLength()), [W, V] = U && Tl(
          M,
          Ss(wl(U), !0)
        ) || [];
        let d = 0;
        const h = (O) => {
          if (J && (d = O, d > oe))
            throw new q(
              "maxContentLength size of " + oe + " exceeded",
              q.ERR_BAD_RESPONSE,
              v,
              re
            );
          W && W(O);
        };
        p = new i(
          Cl(p.body, Rl, h, () => {
            V && V(), fe && fe();
          }),
          C
        );
      }
      B = B || "text";
      let N = await T[S.findKey(T, B) || "text"](
        p,
        v
      );
      if (J && !b && !_) {
        let C;
        if (N != null && (typeof N.byteLength == "number" ? C = N.byteLength : typeof N.size == "number" ? C = N.size : typeof N == "string" && (C = typeof r == "function" ? new r().encode(N).byteLength : N.length)), typeof C == "number" && C > oe)
          throw new q(
            "maxContentLength size of " + oe + " exceeded",
            q.ERR_BAD_RESPONSE,
            v,
            re
          );
      }
      return !_ && fe && fe(), await new Promise((C, M) => {
        bf(C, M, {
          data: N,
          headers: Ge.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: v,
          request: re
        });
      });
    } catch (se) {
      if (fe && fe(), pe && pe.aborted && pe.reason instanceof q) {
        const Te = pe.reason;
        throw Te.config = v, re && (Te.request = re), se !== Te && Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: se,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      if (Ve)
        throw re && !Ve.request && (Ve.request = re), Ve;
      if (se instanceof q)
        throw re && !se.request && (se.request = re), se;
      if (se && se.name === "TypeError" && /Load failed|fetch/i.test(se.message)) {
        const Te = new q(
          "Network Error",
          q.ERR_NETWORK,
          v,
          re,
          se && se.response
        );
        throw Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: se.cause || se,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      throw q.from(se, se && se.code, v, re, se && se.response);
    }
  };
}, V_ = /* @__PURE__ */ new Map(), vf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let i = s.length, a = i, l, u, c = V_;
  for (; a--; )
    l = s[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : $_(t)), c = u;
  return u;
};
vf();
const ki = {
  http: e_,
  xhr: P_,
  fetch: {
    get: vf
  }
};
S.forEach(ki, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Nl = (e) => `- ${e}`, j_ = (e) => S.isFunction(e) || e === null || e === !1;
function W_(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !j_(r) && (o = ki[(a = String(r)).toLowerCase()], o === void 0))
      throw new q(`Unknown adapter '${a}'`);
    if (o && (S.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Nl).join(`
`) : " " + Nl(i[0]) : "as no adapter specified";
    throw new q(
      "There is no suitable adapter to dispatch the request " + a,
      q.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const Sf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: W_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ki
};
function vo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ur(null, e);
}
function kl(e) {
  return vo(e), e.headers = Ge.from(e.headers), e.data = Eo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sf.getAdapter(e.adapter || Fr.adapter, e)(e).then(
    function(r) {
      vo(e), e.response = r;
      try {
        r.data = Eo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Ge.from(r.headers), r;
    },
    function(r) {
      if (!gf(r) && (vo(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Eo.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = Ge.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const Ys = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ys[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ml = {};
Ys.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Ni + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new q(
        o(i, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !Ml[i] && (Ml[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Ys.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function B_(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new q(
          "option " + s + " must be " + l,
          q.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + s, q.ERR_BAD_OPTION);
  }
}
const os = {
  assertOptions: B_,
  validators: Ys
}, We = os.validators;
let Sn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Sl(),
      response: new Sl()
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
          const i = o.stack.indexOf(`
`);
          return i === -1 ? "" : o.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const i = s.indexOf(`
`), a = i === -1 ? -1 : s.indexOf(`
`, i + 1), l = a === -1 ? "" : s.slice(a + 1);
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = On(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && os.assertOptions(
      r,
      {
        silentJSONParsing: We.transitional(We.boolean),
        forcedJSONParsing: We.transitional(We.boolean),
        clarifyTimeoutError: We.transitional(We.boolean),
        legacyInterceptorReqResOrdering: We.transitional(We.boolean),
        advertiseZstdAcceptEncoding: We.transitional(We.boolean),
        validateStatusUndefinedResolves: We.transitional(We.boolean)
      },
      !1
    ), o != null && (S.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : os.assertOptions(
      o,
      {
        encode: We.function,
        serialize: We.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), os.assertOptions(
      n,
      {
        baseUrl: We.spelling("baseURL"),
        withXsrfToken: We.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && S.merge(s.common, s[n.method]);
    s && S.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (T) => {
      delete s[T];
    }), n.headers = Ge.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(A) {
      if (typeof A.runWhen == "function" && A.runWhen(n) === !1)
        return;
      l = l && A.synchronous;
      const w = n.transitional || Ii;
      w && w.legacyInterceptorReqResOrdering ? a.unshift(A.fulfilled, A.rejected) : a.push(A.fulfilled, A.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(A) {
      u.push(A.fulfilled, A.rejected);
    });
    let c, f = 0, m;
    if (!l) {
      const T = [kl.bind(this), void 0];
      for (T.unshift(...a), T.push(...u), m = T.length, c = Promise.resolve(n); f < m; )
        c = c.then(T[f++], T[f++]);
      return c;
    }
    m = a.length;
    let b = n;
    for (; f < m; ) {
      const T = a[f++], A = a[f++];
      try {
        b = T(b);
      } catch (w) {
        A.call(this, w);
        break;
      }
    }
    try {
      c = kl.call(this, b);
    } catch (T) {
      return Promise.reject(T);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = On(this.defaults, t);
    const n = yf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return mf(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  Sn.prototype[t] = function(n, r) {
    return this.request(
      On(r || {}, {
        method: t,
        url: n,
        data: r && S.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
S.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(
        On(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: i
        })
      );
    };
  }
  Sn.prototype[t] = n(), t !== "query" && (Sn.prototype[t + "Form"] = n(!0));
});
let K_ = class Af {
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
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new Ur(s, i, a), n(r.reason));
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
      token: new Af(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function q_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function z_(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Yo = {
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
Object.entries(Yo).forEach(([e, t]) => {
  Yo[t] = e;
});
function Tf(e) {
  const t = new Sn(e), n = Zu(Sn.prototype.request, t);
  return S.extend(n, Sn.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Tf(On(e, o));
  }, n;
}
const Ce = Tf(Fr);
Ce.Axios = Sn;
Ce.CanceledError = Ur;
Ce.CancelToken = K_;
Ce.isCancel = gf;
Ce.VERSION = Ni;
Ce.toFormData = Gs;
Ce.AxiosError = q;
Ce.Cancel = Ce.CanceledError;
Ce.all = function(t) {
  return Promise.all(t);
};
Ce.spread = q_;
Ce.isAxiosError = z_;
Ce.mergeConfig = On;
Ce.AxiosHeaders = Ge;
Ce.formToJSON = (e) => _f(S.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = Sf.getAdapter;
Ce.HttpStatusCode = Yo;
Ce.default = Ce;
const {
  Axios: j2,
  AxiosError: W2,
  CanceledError: B2,
  isCancel: K2,
  CancelToken: q2,
  VERSION: z2,
  all: G2,
  Cancel: Y2,
  isAxiosError: X2,
  spread: J2,
  toFormData: Q2,
  AxiosHeaders: Z2,
  HttpStatusCode: e5,
  formToJSON: t5,
  getAdapter: n5,
  mergeConfig: r5,
  create: s5
} = Ce, G_ = "X-Admin-UI-Request", Y_ = "X-User-UI-Request";
function xl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function wf(e) {
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
  const t = wf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function J_(e) {
  const t = X_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function Q_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return xl(wf(e)) || xl(n);
}
function Z_(e) {
  return J_(e);
}
const mr = "/api/v1", eg = tg();
function Mi(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function tg(e) {
  const n = (String(mr).trim() || mr).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Mi(n);
}
function Rr() {
  return eg;
}
function o5(e) {
  const t = Rr().replace(/\/+$/, "");
  let n = Mi(e);
  return n === mr ? n = "" : n.startsWith(`${mr}/`) && (n = n.slice(mr.length)), `${t}${n}`;
}
function i5(e) {
  const t = Mi(e);
  try {
    return `${typeof window > "u" ? new URL(Rr()).origin : new URL(Rr(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const xi = "auth_token", ng = "auth_user", Xs = "refresh_token", Di = "token_expires_at", rg = "sub2api-auth-token-refresh", Dl = 3e4, Of = 1e3, sg = 1e3, og = 25;
let nr = null;
function Fi() {
  const e = localStorage.getItem(ng);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function ig() {
  const e = localStorage.getItem(Xs);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(xi),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Di)),
    userID: Fi()
  };
}
function ag(e) {
  const t = localStorage.getItem(xi), n = localStorage.getItem(Xs), r = Number(localStorage.getItem(Di));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Fi() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function Ts(e, t) {
  const n = ag(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function lg(e, t, n = Date.now() + Of) {
  for (; Date.now() < n; ) {
    const r = Ts(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, og));
  }
  return Ts(e, t);
}
function cg(e) {
  localStorage.setItem(xi, e.access_token), localStorage.setItem(Di, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(Xs, e.refresh_token);
}
async function ug(e, t, n = !1) {
  var o;
  const r = Date.now() + Dl + sg;
  try {
    const i = (await Ce.post(
      `${Rr()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Dl }
    )).data;
    if (i.code !== 0 || !i.data)
      throw new Error(i.message || "Token refresh failed");
    if (localStorage.getItem(Xs) !== e.refreshToken || Fi() !== e.userID) {
      const a = Ts(e, t);
      if (a)
        return a;
      throw new Error("Session changed during token refresh");
    }
    return cg(i.data), i.data;
  } catch (s) {
    const i = (o = s.response) == null ? void 0 : o.status, a = typeof i == "number" && i >= 400 && i < 500, l = await lg(
      e,
      t,
      a && n ? r : Date.now() + Of
    );
    if (l)
      return l;
    throw s;
  }
}
async function fg(e) {
  const t = ig(), n = async (r = !1) => {
    const o = Ts(t, e.failedAccessToken);
    return o || ug(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(rg, () => n(!1)) : n(!0);
}
function Lf(e = {}) {
  if (nr)
    return nr;
  const t = fg(e);
  nr = t;
  const n = () => {
    nr === t && (nr = null);
  };
  return t.then(n, n), t;
}
const me = Ce.create({
  baseURL: Rr(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), dg = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
me.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = Qu()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = dg()), e.headers) {
      const n = String(e.url || "");
      Q_(n) && (e.headers[G_] = "1"), Z_(n) && (e.headers[Y_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
me.interceptors.response.use(
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
    if (e.code === "ERR_CANCELED" || Ce.isCancel(e))
      return Promise.reject(e);
    const t = e.config;
    if (e.response) {
      const { status: o, data: s } = e.response, i = String(((n = e.config) == null ? void 0 : n.url) || ""), a = typeof s == "object" && s !== null ? s : {};
      if (o === 404 && a.message === "Ops monitoring is disabled") {
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
          message: a.message || e.message,
          url: i
        });
      }
      if (o === 423 && a.code === "ADMIN_COMPLIANCE_ACK_REQUIRED") {
        try {
          window.dispatchEvent(new CustomEvent("admin-compliance-required", {
            detail: a.metadata || {}
          }));
        } catch {
        }
        return Promise.reject({
          status: o,
          code: a.code,
          message: a.message || e.message,
          metadata: a.metadata
        });
      }
      if (o === 401 && !t._retry) {
        const l = localStorage.getItem("refresh_token"), u = i.includes("/auth/login") || i.includes("/auth/register") || i.includes("/auth/refresh");
        if (l && !u) {
          const T = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const A = t.headers, w = (A == null ? void 0 : A.Authorization) ?? (A == null ? void 0 : A.authorization), v = typeof w == "string" && w.startsWith("Bearer ") ? w.slice(7) : null, k = await Lf({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${k.access_token}`), me(t);
          } catch {
            return localStorage.getItem("refresh_token") !== l || localStorage.getItem("auth_user") !== T ? Promise.reject({
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
        const c = !!localStorage.getItem("auth_token"), f = (r = e.config) == null ? void 0 : r.headers, m = (f == null ? void 0 : f.Authorization) ?? (f == null ? void 0 : f.authorization), b = typeof m == "string" ? m.trim() !== "" : Array.isArray(m) ? m.length > 0 : !!m;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (c || b) && !u && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
      }
      return Promise.reject({
        status: o,
        code: a.code,
        reason: a.reason,
        error: a.error,
        message: a.message || a.detail || e.message,
        metadata: a.metadata
      });
    }
    return Promise.reject({
      status: 0,
      message: "Network error. Please check your connection."
    });
  }
);
async function hg() {
  const { data: e } = await me.get("/admin/system/version");
  return e;
}
async function Cf(e = !1) {
  const { data: t } = await me.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
async function mg() {
  const { data: e } = await me.get(
    "/admin/system/rollback-versions"
  );
  return e;
}
const Rf = 900 * 1e3;
async function pg() {
  const { data: e } = await me.post("/admin/system/update", void 0, {
    timeout: Rf
  });
  return e;
}
async function _g(e) {
  const { data: t } = await me.post(
    "/admin/system/rollback",
    e ? { version: e } : void 0,
    { timeout: Rf }
  );
  return t;
}
async function gg() {
  const { data: e } = await me.post("/admin/system/restart");
  return e;
}
const a5 = {
  getVersion: hg,
  checkUpdates: Cf,
  performUpdate: pg,
  getRollbackVersions: mg,
  rollback: _g,
  restartService: gg
};
function Ui(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function Js(e) {
  localStorage.setItem("auth_token", e);
}
function Qs(e) {
  localStorage.setItem("refresh_token", e);
}
function Zs(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function If() {
  return localStorage.getItem("auth_token");
}
function Pf() {
  return localStorage.getItem("refresh_token");
}
function bg() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Nf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function yg(e) {
  const { data: t } = await me.post("/auth/login", e);
  return Ui(t) || (Js(t.access_token), t.refresh_token && Qs(t.refresh_token), t.expires_in && Zs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function Eg(e) {
  const { data: t } = await me.post("/auth/login/2fa", e);
  return Js(t.access_token), t.refresh_token && Qs(t.refresh_token), t.expires_in && Zs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function vg(e) {
  const { data: t } = await me.post("/auth/register", e);
  return Js(t.access_token), t.refresh_token && Qs(t.refresh_token), t.expires_in && Zs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function Sg() {
  return me.get("/auth/me");
}
async function Ag() {
  const e = Pf();
  if (e)
    try {
      await me.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Nf();
}
function kf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function Tg(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function wg(e) {
  return Tg(e) ? "login" : "bind";
}
function Og(e) {
  return wg(e);
}
function Lg(e) {
  return e.error === "invitation_required";
}
function Cg(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function Rg() {
  return Lf();
}
async function Ig() {
  const { data: e } = await me.post("/auth/revoke-all-sessions");
  return e;
}
function Pg() {
  return If() !== null;
}
async function Mf() {
  const { data: e } = await me.get("/settings/public");
  return e;
}
async function Ng(e) {
  const { data: t } = await me.post("/auth/send-verify-code", e);
  return t;
}
async function kg(e) {
  const { data: t } = await me.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function Mg(e) {
  const { data: t } = await me.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function xg(e) {
  const { data: t } = await me.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function Dg(e) {
  const { data: t } = await me.post("/auth/forgot-password", e);
  return t;
}
async function Fg(e) {
  const { data: t } = await me.post("/auth/reset-password", e);
  return t;
}
async function Ug(e, t, n) {
  return xf(e, t, n);
}
async function Hg(e, t, n) {
  return Df(e, t, n);
}
async function $g(e, t, n) {
  return Ff(e, t, n);
}
async function eo(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await me.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...kf(n)
    }
  );
  return s;
}
async function xf(e, t, n) {
  return eo("linuxdo", e, t, n);
}
async function Df(e, t, n) {
  return eo("oidc", e, t, n);
}
async function Ff(e, t, n) {
  return eo("wechat", e, t, n);
}
async function Vg(e, t, n) {
  return eo("dingtalk", e, t, n);
}
async function Uf(e) {
  const { data: t } = await me.post(
    "/auth/oauth/pending/exchange",
    kf(e)
  );
  return t;
}
async function jg(e) {
  return Uf(e);
}
const Pn = {
  login: yg,
  login2FA: Eg,
  isTotp2FARequired: Ui,
  register: vg,
  getCurrentUser: Sg,
  logout: Ag,
  isAuthenticated: Pg,
  setAuthToken: Js,
  setRefreshToken: Qs,
  setTokenExpiresAt: Zs,
  getAuthToken: If,
  getRefreshToken: Pf,
  getTokenExpiresAt: bg,
  clearAuthToken: Nf,
  getPublicSettings: Mf,
  sendVerifyCode: Ng,
  sendPendingOAuthVerifyCode: kg,
  validatePromoCode: Mg,
  validateInvitationCode: xg,
  forgotPassword: Dg,
  resetPassword: Fg,
  refreshToken: Rg,
  revokeAllSessions: Ig,
  getPendingOAuthBindLoginKind: Og,
  isPendingOAuthCreateAccountRequired: Lg,
  hasPendingOAuthSuggestedProfile: Cg,
  completePendingOAuthBindLogin: Uf,
  createPendingLinuxDoOAuthAccount: xf,
  createPendingOIDCOAuthAccount: Df,
  createPendingWeChatOAuthAccount: Ff,
  exchangePendingOAuthCompletion: jg,
  completeLinuxDoOAuthRegistration: Ug,
  completeOIDCOAuthRegistration: Hg,
  completeWeChatOAuthRegistration: $g,
  createPendingDingTalkOAuthAccount: Vg
}, Fl = "零一 API", Hf = /* @__PURE__ */ gu("app", () => {
  const e = le(!1), t = le(!1), n = le(0), r = le(!1), o = le([]), s = le(!1), i = le(!1), a = le(Fl), l = le(""), u = le(""), c = le(""), f = le(""), m = le(""), b = le(null);
  let T = null, A = null, w = 0;
  const v = le(!1), k = le(!1), E = le(""), y = le(""), P = le(!1), I = le("source"), F = le(null);
  let U = 0;
  const L = Ee(() => o.value.length > 0), B = Ee(() => {
    var g;
    return ((g = b.value) == null ? void 0 : g.backend_mode_enabled) ?? !1;
  }), Y = le(0);
  function H() {
    e.value = !e.value;
  }
  function Z(g) {
    e.value = g;
  }
  function oe() {
    t.value = !t.value;
  }
  function ge(g) {
    t.value = g;
  }
  function J(g) {
    g ? Y.value++ : Y.value = Math.max(0, Y.value - 1), r.value = Y.value > 0;
  }
  function $(g, _, N) {
    const C = `toast-${++U}`, M = {
      id: C,
      type: g,
      message: _,
      duration: N,
      startTime: N !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), N !== void 0 && setTimeout(() => {
      fe(C);
    }, N), C;
  }
  function G(g, _ = 3e3) {
    return $("success", g, _);
  }
  function ce(g, _ = 5e3) {
    return $("error", g, _);
  }
  function pe(g, _ = 3e3) {
    return $("info", g, _);
  }
  function re(g, _ = 4e3) {
    return $("warning", g, _);
  }
  function fe(g) {
    const _ = o.value.findIndex((N) => N.id === g);
    _ !== -1 && o.value.splice(_, 1);
  }
  function xe() {
    o.value = [];
  }
  async function Ve(g) {
    J(!0);
    try {
      return await g();
    } finally {
      J(!1);
    }
  }
  async function lt(g, _) {
    J(!0);
    try {
      return await g();
    } catch (N) {
      const C = _ || N.message || Un.global.t("common.unknownError");
      return ce(C), null;
    } finally {
      J(!1);
    }
  }
  function se() {
    e.value = !1, r.value = !1, Y.value = 0, o.value = [];
  }
  async function Te(g = !1) {
    if (v.value && !g)
      return {
        current_version: E.value,
        latest_version: y.value,
        has_update: P.value,
        build_type: I.value,
        release_info: F.value || void 0,
        cached: !0
      };
    if (k.value)
      return null;
    k.value = !0;
    try {
      const _ = await Cf(g);
      return E.value = _.current_version, y.value = _.latest_version, P.value = _.has_update, I.value = _.build_type || "source", F.value = _.release_info || null, v.value = !0, _;
    } catch (_) {
      return console.error("Failed to fetch version:", _), null;
    } finally {
      k.value = !1;
    }
  }
  function je() {
    v.value = !1, P.value = !1;
  }
  function Ye(g) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ...g }), b.value = g, a.value = g.site_name || Fl, l.value = g.site_logo || "", u.value = g.version || "", c.value = g.contact_info || "", f.value = g.api_base_url || "", m.value = g.doc_url || "", s.value = !0;
  }
  function De(g = !1) {
    if (T)
      return g && !A && (w += 1, A = T.then(() => De(!0)).finally(() => {
        A = null;
      })), g ? A : T;
    if (g && (w += 1), !s.value && !g && window.__APP_CONFIG__)
      return Ye(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
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
        site_name: a.value,
        site_logo: l.value,
        site_subtitle: "",
        api_base_url: f.value,
        contact_info: c.value,
        doc_url: m.value,
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
    i.value = !0;
    const _ = w;
    let N;
    try {
      N = Mf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), i.value = !1, Promise.resolve(null);
    }
    const C = N.then((M) => (_ === w && Ye(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      T === C && (T = null, i.value = !1);
    });
    return T = C, C;
  }
  function dt() {
    w += 1, s.value = !1, b.value = null;
  }
  function p() {
    return window.__APP_CONFIG__ ? (Ye(window.__APP_CONFIG__), !0) : !1;
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
    siteName: a,
    siteLogo: l,
    siteVersion: u,
    contactInfo: c,
    apiBaseUrl: f,
    docUrl: m,
    cachedPublicSettings: b,
    // Version state
    versionLoaded: v,
    versionLoading: k,
    currentVersion: E,
    latestVersion: y,
    hasUpdate: P,
    buildType: I,
    releaseInfo: F,
    // Computed
    hasActiveToasts: L,
    backendModeEnabled: B,
    // Actions
    toggleSidebar: H,
    setSidebarCollapsed: Z,
    toggleMobileSidebar: oe,
    setMobileOpen: ge,
    setLoading: J,
    showToast: $,
    showSuccess: G,
    showError: ce,
    showInfo: pe,
    showWarning: re,
    hideToast: fe,
    clearAllToasts: xe,
    withLoading: Ve,
    withLoadingAndError: lt,
    reset: se,
    // Version actions
    fetchVersion: Te,
    clearVersionCache: je,
    // Public settings actions
    fetchPublicSettings: De,
    clearPublicSettingsCache: dt,
    initFromInjectedConfig: p
  };
}), Wg = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Bg = { class: "p-4" }, Kg = { class: "flex items-start gap-3" }, qg = { class: "mt-0.5 flex-shrink-0" }, zg = { class: "min-w-0 flex-1" }, Gg = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, Yg = ["onClick"], Xg = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, Jg = /* @__PURE__ */ Ln({
  __name: "Toast",
  setup(e) {
    const t = Hf(), n = Ee(() => t.toasts), r = (l) => {
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
    }, i = (l) => {
      const u = {
        success: "bg-zo-signal-500",
        error: "bg-red-500",
        warning: "bg-zo-alert-500",
        info: "bg-blue-500"
      };
      return u[l] || u.info;
    }, a = (l) => {
      t.hideToast(l);
    };
    return (l, u) => (Ut(), ms($d, { to: "body" }, [
      mt("div", Wg, [
        Ie(im, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: bc(() => [
            (Ut(!0), sr(ke, null, Jd(n.value, (c) => (Ut(), sr("div", {
              key: c.id,
              class: tn([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              mt("div", Bg, [
                mt("div", Kg, [
                  mt("div", qg, [
                    Ie(Da, {
                      name: r(c.type),
                      size: "md",
                      class: tn(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  mt("div", zg, [
                    c.title ? (Ut(), sr("p", Gg, Ao(c.title), 1)) : oa("", !0),
                    mt("p", {
                      class: tn([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, Ao(c.message), 3)
                  ]),
                  mt("button", {
                    onClick: (f) => a(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    Ie(Da, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, Yg)
                ])
              ]),
              c.duration ? (Ut(), sr("div", Xg, [
                mt("div", {
                  class: tn(["h-full toast-progress", i(c.type)]),
                  style: Ps({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : oa("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Qg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Zg = /* @__PURE__ */ Qg(Jg, [["__scopeId", "data-v-fc5fa96e"]]);
function $f() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function pr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function en(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function e2(e) {
  const t = { ...e };
  t.challenge = pr(String(t.challenge));
  const n = { ...t.user };
  return n.id = pr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: pr(String(r.id))
  }))), t;
}
function t2(e) {
  const t = { ...e };
  return t.challenge = pr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: pr(String(n.id))
  }))), t;
}
function n2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: en(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: en(t.attestationObject),
      clientDataJSON: en(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function r2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: en(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: en(t.authenticatorData),
      clientDataJSON: en(t.clientDataJSON),
      signature: en(t.signature),
      userHandle: en(t.userHandle)
    }
  };
}
async function s2(e) {
  $f();
  const { data: t } = e ? await me.post("/auth/passkey/login/begin", e) : await me.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: t2(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await me.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: r2(n)
  });
  return r;
}
async function o2(e, t) {
  $f();
  const { data: n } = await me.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: e2(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await me.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: n2(r)
    }
  );
  return o;
}
async function i2() {
  const { data: e } = await me.get("/user/passkeys");
  return e;
}
async function a2(e, t) {
  await me.patch(`/user/passkeys/${e}`, { name: t });
}
async function l2(e, t) {
  await me.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const c2 = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: s2,
  register: o2,
  list: i2,
  rename: a2,
  remove: l2
}, Gr = "auth_token", So = "auth_user", Yr = "refresh_token", Xr = "token_expires_at", _r = "pending_auth_session", u2 = 60 * 1e3, f2 = 120 * 1e3;
function d2(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function Ul() {
  const e = localStorage.getItem(_r);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: d2(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(_r), null);
  } catch {
    return localStorage.removeItem(_r), null;
  }
}
function h2(e) {
  localStorage.setItem(_r, JSON.stringify(e));
}
function Hl() {
  localStorage.removeItem(_r);
}
const m2 = /* @__PURE__ */ gu("auth", () => {
  const e = le(null), t = le(null), n = le(null), r = le(null), o = le("standard"), s = le(null);
  let i = null, a = null;
  const l = Ee(() => !!t.value && !!e.value), u = Ee(() => {
    var $;
    return (($ = e.value) == null ? void 0 : $.role) === "admin";
  }), c = Ee(() => o.value === "simple"), f = Ee(() => s.value !== null);
  function m($, G) {
    const { run_mode: ce, ...pe } = $;
    return o.value = G ?? (ce === "simple" ? "simple" : "standard"), e.value = pe, localStorage.setItem(
      So,
      JSON.stringify({ ...pe, run_mode: o.value })
    ), e.value;
  }
  function b($) {
    const G = localStorage.getItem(Gr), ce = localStorage.getItem(So), pe = localStorage.getItem(Yr), re = localStorage.getItem(Xr);
    if (s.value = Ul(), G && ce)
      try {
        const fe = JSON.parse(ce);
        return t.value = G, m(fe, $), n.value = pe, r.value = re ? parseInt(re, 10) : null, !0;
      } catch (fe) {
        console.error("Failed to parse saved user data:", fe), J({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function T($) {
    o.value = $;
  }
  function A() {
    b() && (ge().catch(($) => {
      console.error("Failed to refresh user on init:", $);
    }), w(), n.value && r.value !== null && k(r.value));
  }
  function w() {
    v(), i = setInterval(() => {
      t.value && ge().catch(($) => {
        console.error("Auto-refresh user failed:", $);
      });
    }, u2);
  }
  function v() {
    i && (clearInterval(i), i = null);
  }
  function k($) {
    a && (clearTimeout(a), a = null);
    const G = Date.now(), ce = Math.max(0, $ - G - f2);
    if (ce <= 0) {
      y();
      return;
    }
    a = setTimeout(() => {
      y();
    }, ce);
  }
  function E($) {
    const G = Date.now() + $ * 1e3;
    r.value = G, localStorage.setItem(Xr, String(G)), k(G);
  }
  async function y() {
    if (n.value)
      try {
        const $ = await Pn.refreshToken();
        t.value = $.access_token, n.value = $.refresh_token, E($.expires_in);
      } catch ($) {
        console.error("Token refresh failed:", $);
      }
  }
  function P() {
    a && (clearTimeout(a), a = null);
  }
  async function I($) {
    try {
      const G = await Pn.login($);
      return Ui(G) || L(G), G;
    } catch (G) {
      throw J({ preservePendingAuthSession: s.value !== null }), G;
    }
  }
  async function F($, G) {
    try {
      const ce = await Pn.login2FA({ temp_token: $, totp_code: G });
      return L(ce), e.value;
    } catch (ce) {
      throw J({ preservePendingAuthSession: s.value !== null }), ce;
    }
  }
  async function U($) {
    try {
      const G = await c2.login($);
      return L(G), e.value;
    } catch (G) {
      throw J({ preservePendingAuthSession: s.value !== null }), G;
    }
  }
  function L($) {
    t.value = $.access_token, $.refresh_token && (n.value = $.refresh_token, localStorage.setItem(Yr, $.refresh_token)), m($.user), localStorage.setItem(Gr, $.access_token), Z(), w(), $.refresh_token && $.expires_in && E($.expires_in);
  }
  async function B($) {
    try {
      const G = await Pn.register($);
      return L(G), e.value;
    } catch (G) {
      throw J({ preservePendingAuthSession: s.value !== null }), G;
    }
  }
  async function Y($) {
    v(), P(), t.value = null, e.value = null, o.value = "standard", t.value = $, localStorage.setItem(Gr, $);
    const G = localStorage.getItem(Yr), ce = localStorage.getItem(Xr);
    G && (n.value = G), ce && (r.value = parseInt(ce, 10));
    try {
      const pe = await ge();
      return w(), G && r.value !== null && k(r.value), Z(), pe;
    } catch (pe) {
      throw J({ preservePendingAuthSession: s.value !== null }), pe;
    }
  }
  function H($) {
    if (s.value = $, $) {
      h2($);
      return;
    }
    Hl();
  }
  function Z() {
    H(null);
  }
  async function oe() {
    try {
      await Pn.logout();
    } catch ($) {
      console.warn("Logout API call failed, clearing local session anyway", $);
    } finally {
      J();
    }
  }
  async function ge() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const $ = await Pn.getCurrentUser();
      return m($.data);
    } catch ($) {
      throw $.status === 401 && J({ preservePendingAuthSession: s.value !== null }), $;
    }
  }
  function J($) {
    if (v(), P(), t.value = null, n.value = null, r.value = null, e.value = null, o.value = "standard", localStorage.removeItem(Gr), localStorage.removeItem(So), localStorage.removeItem(Yr), localStorage.removeItem(Xr), $ != null && $.preservePendingAuthSession) {
      s.value = Ul();
      return;
    }
    s.value = null, Hl();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: yr(o),
    pendingAuthSession: yr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: I,
    loginWithPasskey: U,
    login2FA: F,
    register: B,
    setToken: Y,
    logout: oe,
    checkAuth: A,
    hydrateAuthSnapshot: b,
    setRunModeSnapshot: T,
    refreshUser: ge,
    setPendingAuthSession: H,
    clearPendingAuthSession: Z
  };
}), p2 = {
  accounts: () => import("./AccountsView-XsoxEMgW.js"),
  groups: () => import("./GroupsView-CK3nlHUi.js"),
  channels: () => import("./ChannelsView-DaXoOgW1.js"),
  "channel-monitor": () => import("./ChannelMonitorView-CZZ8o6mn.js"),
  ops: () => import("./OpsDashboard-BOlT__Rt.js"),
  subscriptions: () => import("./SubscriptionsView-BRuWmwmF.js")
};
function _2() {
  var t, n, r;
  const e = document.querySelector("#app");
  return ((r = (n = (t = e == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$router) || null;
}
function g2(e) {
  const t = _2();
  if (!t) return;
  const n = {};
  for (const r in t.currentRoute.value)
    Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t.currentRoute.value[r]
    });
  e.component("RouterLink", Pm), e.provide(js, t), e.provide(gi, uc(n));
}
async function b2(e, t) {
  const [{ default: n }] = await Promise.all([
    p2[e](),
    Yp()
  ]), r = Em(), o = Hf(r), s = m2(r);
  o.initFromInjectedConfig(), s.hydrateAuthSnapshot(t.runMode);
  const a = gm(/* @__PURE__ */ Ln({
    name: "ZeroOneCNProviderAdminRoot",
    setup: () => () => [$n(n), $n(Zg)]
  }));
  a.use(r), g2(a), a.use(Un);
  let l = !1;
  async function u(c) {
    s.setRunModeSnapshot(c.runMode), Un.global.locale.value !== c.locale && (await Ju(c.locale), Un.global.locale.value = c.locale);
  }
  return await u(t), {
    mount(c) {
      l = !0;
      try {
        a.mount(c);
      } catch (f) {
        throw a.unmount(), l = !1, f;
      }
    },
    unmount() {
      l && a.unmount(), l = !1;
    },
    syncState: u
  };
}
const l5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prepareCNProviderSurface: b2
}, Symbol.toStringTag, { value: "Module" }));
export {
  A2 as $,
  ms as A,
  Qg as B,
  m2 as C,
  Ps as D,
  D2 as E,
  ke as F,
  k2 as G,
  M2 as H,
  N2 as I,
  w2 as J,
  kc as K,
  C2 as L,
  $d as M,
  o5 as N,
  G_ as O,
  gu as P,
  ai as Q,
  ii as R,
  Ad as S,
  R2 as T,
  $n as U,
  vt as V,
  Oe as W,
  I2 as X,
  L2 as Y,
  O2 as Z,
  Da as _,
  me as a,
  Zf as a0,
  F2 as a1,
  U2 as a2,
  Yl as a3,
  v2 as a4,
  Un as a5,
  Fh as a6,
  Ms as a7,
  S2 as a8,
  Qu as a9,
  T2 as aa,
  i5 as ab,
  a5 as ac,
  y2 as ad,
  l5 as ae,
  Pr as b,
  fi as c,
  Ee as d,
  Ln as e,
  Hf as f,
  sr as g,
  mt as h,
  Ao as i,
  lr as j,
  Jd as k,
  Oh as l,
  oa as m,
  Ut as n,
  di as o,
  li as p,
  Ie as q,
  le as r,
  tn as s,
  ue as t,
  wi as u,
  bc as v,
  En as w,
  E2 as x,
  P2 as y,
  x2 as z
};
