/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, Pn = [], Ot = () => {
}, Il = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ko = (e) => e.startsWith("onUpdate:"), Me = Object.assign, qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rf = Object.prototype.hasOwnProperty, me = (e, t) => Rf.call(e, t), Q = Array.isArray, Mn = (e) => Rr(e) === "[object Map]", Kn = (e) => Rr(e) === "[object Set]", xi = (e) => Rr(e) === "[object Date]", ne = (e) => typeof e == "function", Oe = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Nl = (e) => (ge(e) || ne(e)) && ne(e.then) && ne(e.catch), Pl = Object.prototype.toString, Rr = (e) => Pl.call(e), If = (e) => Rr(e).slice(8, -1), Ml = (e) => Rr(e) === "[object Object]", Ts = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sr = /* @__PURE__ */ Bo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), As = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Nf = /-\w/g, ut = As(
  (e) => e.replace(Nf, (t) => t.slice(1).toUpperCase())
), Pf = /\B([A-Z])/g, rn = As(
  (e) => e.replace(Pf, "-$1").toLowerCase()
), ws = As((e) => e.charAt(0).toUpperCase() + e.slice(1)), Js = As(
  (e) => e ? `on${ws(e)}` : ""
), Zt = (e, t) => !Object.is(e, t), Xr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, kl = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Os = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Mf = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Di;
const Ls = () => Di || (Di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Oe(r) ? Ff(r) : Cs(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Oe(e) || ge(e))
    return e;
}
const kf = /;(?![^(]*\))/g, xf = /:([^]+)/, Df = /\/\*[^]*?\*\//g;
function Ff(e) {
  const t = {};
  return e.replace(Df, "").split(kf).forEach((n) => {
    if (n) {
      const r = n.split(xf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Qt(e) {
  let t = "";
  if (Oe(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = Qt(e[n]);
      r && (t += r + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Uf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hf = /* @__PURE__ */ Bo(Uf);
function xl(e) {
  return !!e || e === "";
}
function $f(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Sn(e[r], t[r]);
  return n;
}
function Sn(e, t) {
  if (e === t) return !0;
  let n = xi(e), r = xi(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), r = _t(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? $f(e, t) : !1;
  if (n = ge(e), r = ge(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !Sn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function zo(e, t) {
  return e.findIndex((n) => Sn(n, t));
}
const Dl = (e) => !!(e && e.__v_isRef === !0), go = (e) => Oe(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === Pl || !ne(e.toString)) ? Dl(e) ? go(e.value) : JSON.stringify(e, Fl, 2) : String(e), Fl = (e, t) => Dl(t) ? Fl(e, t.value) : Mn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Qs(r, s) + " =>"] = o, n),
    {}
  )
} : Kn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qs(n))
} : _t(t) ? Qs(t) : ge(t) && !Q(t) && !Ml(t) ? String(t) : t, Qs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class Ul {
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
function Go(e) {
  return new Ul(e);
}
function Hl() {
  return Be;
}
function Vf(e, t = !1) {
  Be && Be.cleanups.push(e);
}
let be;
const Zs = /* @__PURE__ */ new WeakSet();
class $l {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && Be.active && Be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zs.has(this) && (Zs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fi(this), Wl(this);
    const t = be, n = pt;
    be = this, pt = !0;
    try {
      return this.fn();
    } finally {
      Bl(this), be = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jo(t);
      this.deps = this.depsTail = void 0, Fi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bo(this) && this.run();
  }
  get dirty() {
    return bo(this);
  }
}
let Vl = 0, or, ir;
function jl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ir, ir = e;
    return;
  }
  e.next = or, or = e;
}
function Yo() {
  Vl++;
}
function Xo() {
  if (--Vl > 0)
    return;
  if (ir) {
    let t = ir;
    for (ir = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; or; ) {
    let t = or;
    for (or = void 0; t; ) {
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
function Wl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bl(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Jo(r), jf(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Kl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pr) || (e.globalVersion = pr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, r = pt;
  be = e, pt = !0;
  try {
    Wl(e);
    const o = e.fn(e._value);
    (t.version === 0 || Zt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    be = n, pt = r, Bl(e), e.flags &= -3;
  }
}
function Jo(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Jo(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function jf(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const ql = [];
function $t() {
  ql.push(pt), pt = !1;
}
function Vt() {
  const e = ql.pop();
  pt = e === void 0 ? !0 : e;
}
function Fi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let pr = 0;
class Wf {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Qo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!be || !pt || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new Wf(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, zl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, pr++, this.notify(t);
  }
  notify(t) {
    Yo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xo();
    }
  }
}
function zl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        zl(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const os = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ Symbol(
  ""
), yo = /* @__PURE__ */ Symbol(
  ""
), _r = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
  if (pt && be) {
    let r = os.get(e);
    r || os.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Qo()), o.map = r, o.key = n), o.track();
  }
}
function kt(e, t, n, r, o, s) {
  const i = os.get(e);
  if (!i) {
    pr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Yo(), t === "clear")
    i.forEach(a);
  else {
    const l = Q(e), u = l && Ts(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, m) => {
        (m === "length" || m === _r || !_t(m) && m >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(_r)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(bn)), Mn(e) && a(i.get(yo)));
          break;
        case "delete":
          l || (a(i.get(bn)), Mn(e) && a(i.get(yo)));
          break;
        case "set":
          Mn(e) && a(i.get(bn));
          break;
      }
  }
  Xo();
}
function Bf(e, t) {
  const n = os.get(e);
  return n && n.get(t);
}
function On(e) {
  const t = ce(e);
  return t === e ? t : (Ke(t, "iterate", _r), ot(e) ? t : t.map(gt));
}
function Rs(e) {
  return Ke(e = ce(e), "iterate", _r), e;
}
function Gt(e, t) {
  return jt(e) ? Ht(e) ? Un(gt(t)) : Un(t) : gt(t);
}
const Kf = {
  __proto__: null,
  [Symbol.iterator]() {
    return eo(this, Symbol.iterator, (e) => Gt(this, e));
  },
  concat(...e) {
    return On(this).concat(
      ...e.map((t) => Q(t) ? On(t) : t)
    );
  },
  entries() {
    return eo(this, "entries", (e) => (e[1] = Gt(this, e[1]), e));
  },
  every(e, t) {
    return Rt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Rt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Gt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Rt(
      this,
      "find",
      e,
      t,
      (n) => Gt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Rt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Rt(
      this,
      "findLast",
      e,
      t,
      (n) => Gt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Rt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Rt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return to(this, "includes", e);
  },
  indexOf(...e) {
    return to(this, "indexOf", e);
  },
  join(e) {
    return On(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return to(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Rt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xn(this, "pop");
  },
  push(...e) {
    return Xn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ui(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ui(this, "reduceRight", e, t);
  },
  shift() {
    return Xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Rt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xn(this, "splice", e);
  },
  toReversed() {
    return On(this).toReversed();
  },
  toSorted(e) {
    return On(this).toSorted(e);
  },
  toSpliced(...e) {
    return On(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xn(this, "unshift", e);
  },
  values() {
    return eo(this, "values", (e) => Gt(this, e));
  }
};
function eo(e, t, n) {
  const r = Rs(e), o = r[t]();
  return r !== e && !ot(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const qf = Array.prototype;
function Rt(e, t, n, r, o, s) {
  const i = Rs(e), a = i !== e && !ot(e), l = i[t];
  if (l !== qf[t]) {
    const f = l.apply(e, s);
    return a ? gt(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, m) {
    return n.call(this, Gt(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const c = l.call(i, u, r);
  return a && o ? o(c) : c;
}
function Ui(e, t, n, r) {
  const o = Rs(e);
  let s = n;
  return o !== e && (ot(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, Gt(e, a), l, e);
  }), o[t](s, ...r);
}
function to(e, t, n) {
  const r = ce(e);
  Ke(r, "iterate", _r);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Ns(n[0]) ? (n[0] = ce(n[0]), r[t](...n)) : o;
}
function Xn(e, t, n = []) {
  $t(), Yo();
  const r = ce(e)[t].apply(e, n);
  return Xo(), Vt(), r;
}
const zf = /* @__PURE__ */ Bo("__proto__,__v_isRef,__isVue"), Gl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function Gf(e) {
  _t(e) || (e = String(e));
  const t = ce(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class Yl {
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
      return r === (o ? s ? sd : Zl : s ? Ql : Jl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Q(t);
    if (!o) {
      let l;
      if (i && (l = Kf[n]))
        return l;
      if (n === "hasOwnProperty")
        return Gf;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      we(t) ? t : r
    );
    if ((_t(n) ? Gl.has(n) : zf(n)) || (o || Ke(t, "get", n), s))
      return a;
    if (we(a)) {
      const l = i && Ts(n) ? a : a.value;
      return o && ge(l) ? gr(l) : l;
    }
    return ge(a) ? o ? gr(a) : Is(a) : a;
  }
}
class Xl extends Yl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const i = Q(t) && Ts(n);
    if (!this._isShallow) {
      const u = jt(s);
      if (!ot(r) && !jt(r) && (s = ce(s), r = ce(r)), !i && we(s) && !we(r))
        return u || (s.value = r), !0;
    }
    const a = i ? Number(n) < t.length : me(t, n), l = Reflect.set(
      t,
      n,
      r,
      we(t) ? t : o
    );
    return t === ce(o) && (a ? Zt(r, s) && kt(t, "set", n, r) : kt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = me(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && kt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_t(n) || !Gl.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      Q(t) ? "length" : bn
    ), Reflect.ownKeys(t);
  }
}
class Yf extends Yl {
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
const Xf = /* @__PURE__ */ new Xl(), Jf = /* @__PURE__ */ new Yf(), Qf = /* @__PURE__ */ new Xl(!0);
const Eo = (e) => e, Fr = (e) => Reflect.getPrototypeOf(e);
function Zf(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = ce(o), i = Mn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? Eo : t ? Un : gt;
    return !t && Ke(
      s,
      "iterate",
      l ? yo : bn
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
function Ur(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ed(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = ce(s), a = ce(o);
      e || (Zt(o, a) && Ke(i, "get", o), Ke(i, "get", a));
      const { has: l } = Fr(i), u = t ? Eo : e ? Un : gt;
      if (l.call(i, o))
        return u(s.get(o));
      if (l.call(i, a))
        return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ke(ce(o), "iterate", bn), o.size;
    },
    has(o) {
      const s = this.__v_raw, i = ce(s), a = ce(o);
      return e || (Zt(o, a) && Ke(i, "has", o), Ke(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, l = ce(a), u = t ? Eo : e ? Un : gt;
      return !e && Ke(l, "iterate", bn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
    }
  };
  return Me(
    n,
    e ? {
      add: Ur("add"),
      set: Ur("set"),
      delete: Ur("delete"),
      clear: Ur("clear")
    } : {
      add(o) {
        !t && !ot(o) && !jt(o) && (o = ce(o));
        const s = ce(this);
        return Fr(s).has.call(s, o) || (s.add(o), kt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !ot(s) && !jt(s) && (s = ce(s));
        const i = ce(this), { has: a, get: l } = Fr(i);
        let u = a.call(i, o);
        u || (o = ce(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? Zt(s, c) && kt(i, "set", o, s) : kt(i, "add", o, s), this;
      },
      delete(o) {
        const s = ce(this), { has: i, get: a } = Fr(s);
        let l = i.call(s, o);
        l || (o = ce(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && kt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = ce(this), s = o.size !== 0, i = o.clear();
        return s && kt(
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
    n[o] = Zf(o, e, t);
  }), n;
}
function Zo(e, t) {
  const n = ed(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    me(n, o) && o in r ? n : r,
    o,
    s
  );
}
const td = {
  get: /* @__PURE__ */ Zo(!1, !1)
}, nd = {
  get: /* @__PURE__ */ Zo(!1, !0)
}, rd = {
  get: /* @__PURE__ */ Zo(!0, !1)
};
const Jl = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap(), sd = /* @__PURE__ */ new WeakMap();
function od(e) {
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
function id(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : od(If(e));
}
function Is(e) {
  return jt(e) ? e : ei(
    e,
    !1,
    Xf,
    td,
    Jl
  );
}
function ad(e) {
  return ei(
    e,
    !1,
    Qf,
    nd,
    Ql
  );
}
function gr(e) {
  return ei(
    e,
    !0,
    Jf,
    rd,
    Zl
  );
}
function ei(e, t, n, r, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = id(e);
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
function Ht(e) {
  return jt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
function ot(e) {
  return !!(e && e.__v_isShallow);
}
function Ns(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function ti(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && kl(e, "__v_skip", !0), e;
}
const gt = (e) => ge(e) ? Is(e) : e, Un = (e) => ge(e) ? gr(e) : e;
function we(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function le(e) {
  return ec(e, !1);
}
function ni(e) {
  return ec(e, !0);
}
function ec(e, t) {
  return we(e) ? e : new ld(e, t);
}
class ld {
  constructor(t, n) {
    this.dep = new Qo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || ot(t) || jt(t);
    t = r ? t : ce(t), Zt(t, n) && (this._rawValue = t, this._value = r ? t : gt(t), this.dep.trigger());
  }
}
function Qg(e) {
  e.dep && e.dep.trigger();
}
function tc(e) {
  return we(e) ? e.value : e;
}
const cd = {
  get: (e, t, n) => t === "__v_raw" ? e : tc(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return we(o) && !we(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function nc(e) {
  return Ht(e) ? e : new Proxy(e, cd);
}
function ud(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = dd(e, n);
  return t;
}
class fd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = ce(t);
    let o = !0, s = t;
    if (!Q(t) || !Ts(String(n)))
      do
        o = !Ns(s) || ot(s);
      while (o && (s = s.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = tc(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && we(this._raw[this._key])) {
      const n = this._object[this._key];
      if (we(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Bf(this._raw, this._key);
  }
}
function dd(e, t, n) {
  return new fd(e, t, n);
}
class hd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Qo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return jl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Kl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function md(e, t, n = !1) {
  let r, o;
  return ne(e) ? r = e : (r = e.get, o = e.set), new hd(r, o, n);
}
const Hr = {}, is = /* @__PURE__ */ new WeakMap();
let mn;
function pd(e, t = !1, n = mn) {
  if (n) {
    let r = is.get(n);
    r || is.set(n, r = []), r.push(e);
  }
}
function _d(e, t, n = pe) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (y) => o ? y : ot(y) || o === !1 || o === 0 ? xt(y, 1) : xt(y);
  let c, f, m, b, w = !1, T = !1;
  if (we(e) ? (f = () => e.value, w = ot(e)) : Ht(e) ? (f = () => u(e), w = !0) : Q(e) ? (T = !0, w = e.some((y) => Ht(y) || ot(y)), f = () => e.map((y) => {
    if (we(y))
      return y.value;
    if (Ht(y))
      return u(y);
    if (ne(y))
      return l ? l(y, 2) : y();
  })) : ne(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (m) {
      $t();
      try {
        m();
      } finally {
        Vt();
      }
    }
    const y = mn;
    mn = c;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      mn = y;
    }
  } : f = Ot, t && o) {
    const y = f, N = o === !0 ? 1 / 0 : o;
    f = () => xt(y(), N);
  }
  const A = Hl(), v = () => {
    c.stop(), A && A.active && qo(A.effects, c);
  };
  if (s && t) {
    const y = t;
    t = (...N) => {
      y(...N), v();
    };
  }
  let M = T ? new Array(e.length).fill(Hr) : Hr;
  const E = (y) => {
    if (!(!(c.flags & 1) || !c.dirty && !y))
      if (t) {
        const N = c.run();
        if (o || w || (T ? N.some((R, U) => Zt(R, M[U])) : Zt(N, M))) {
          m && m();
          const R = mn;
          mn = c;
          try {
            const U = [
              N,
              // pass undefined as the old value when it's changed for the first time
              M === Hr ? void 0 : T && M[0] === Hr ? [] : M,
              b
            ];
            M = N, l ? l(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            mn = R;
          }
        }
      } else
        c.run();
  };
  return a && a(E), c = new $l(f), c.scheduler = i ? () => i(E, !1) : E, b = (y) => pd(y, !1, c), m = c.onStop = () => {
    const y = is.get(c);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const N of y) N();
      is.delete(c);
    }
  }, t ? r ? E(!0) : M = c.run() : i ? i(E.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function xt(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, we(e))
    xt(e.value, t, n);
  else if (Q(e))
    for (let r = 0; r < e.length; r++)
      xt(e[r], t, n);
  else if (Kn(e) || Mn(e))
    e.forEach((r) => {
      xt(r, t, n);
    });
  else if (Ml(e)) {
    for (const r in e)
      xt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && xt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ir(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Ps(o, t, n);
  }
}
function bt(e, t, n, r) {
  if (ne(e)) {
    const o = Ir(e, t, n, r);
    return o && Nl(o) && o.catch((s) => {
      Ps(s, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(bt(e[s], t, n, r));
    return o;
  }
}
function Ps(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
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
      $t(), Ir(s, null, 10, [
        e,
        l,
        u
      ]), Vt();
      return;
    }
  }
  gd(e, n, o, r, i);
}
function gd(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const et = [];
let Tt = -1;
const kn = [];
let Yt = null, In = 0;
const rc = /* @__PURE__ */ Promise.resolve();
let as = null;
function ri(e) {
  const t = as || rc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bd(e) {
  let t = Tt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = et[r], s = br(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function si(e) {
  if (!(e.flags & 1)) {
    const t = br(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= br(n) ? et.push(e) : et.splice(bd(t), 0, e), e.flags |= 1, sc();
  }
}
function sc() {
  as || (as = rc.then(ic));
}
function yd(e) {
  Q(e) ? kn.push(...e) : Yt && e.id === -1 ? Yt.splice(In + 1, 0, e) : e.flags & 1 || (kn.push(e), e.flags |= 1), sc();
}
function Hi(e, t, n = Tt + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function oc(e) {
  if (kn.length) {
    const t = [...new Set(kn)].sort(
      (n, r) => br(n) - br(r)
    );
    if (kn.length = 0, Yt) {
      Yt.push(...t);
      return;
    }
    for (Yt = t, In = 0; In < Yt.length; In++) {
      const n = Yt[In];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Yt = null, In = 0;
  }
}
const br = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ic(e) {
  try {
    for (Tt = 0; Tt < et.length; Tt++) {
      const t = et[Tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ir(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Tt < et.length; Tt++) {
      const t = et[Tt];
      t && (t.flags &= -2);
    }
    Tt = -1, et.length = 0, oc(), as = null, (et.length || kn.length) && ic();
  }
}
let He = null, ac = null;
function ls(e) {
  const t = He;
  return He = e, ac = e && e.type.__scopeId || null, t;
}
function lc(e, t = He, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && fs(-1);
    const s = ls(t);
    let i;
    try {
      i = e(...o);
    } finally {
      ls(s), r._d && fs(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Zg(e, t) {
  if (He === null)
    return e;
  const n = Ds(He), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = pe] = t[o];
    s && (ne(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && xt(i), r.push({
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
function cn(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && ($t(), bt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Vt());
  }
}
function Ed(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), n[e] = t;
  }
}
function xn(e, t, n = !1) {
  const r = Ct();
  if (r || En) {
    let o = En ? En._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
function vd() {
  return !!(Ct() || En);
}
const Sd = /* @__PURE__ */ Symbol.for("v-scx"), Td = () => xn(Sd);
function yn(e, t, n) {
  return cc(e, t, n);
}
function cc(e, t, n = pe) {
  const { immediate: r, deep: o, flush: s, once: i } = n, a = Me({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Sr) {
    if (s === "sync") {
      const b = Td();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = Ot, b.resume = Ot, b.pause = Ot, b;
    }
  }
  const c = ze;
  a.call = (b, w, T) => bt(b, c, w, T);
  let f = !1;
  s === "post" ? a.scheduler = (b) => {
    Ze(b, c && c.suspense);
  } : s !== "sync" && (f = !0, a.scheduler = (b, w) => {
    w ? b() : si(b);
  }), a.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const m = _d(e, t, a);
  return Sr && (u ? u.push(m) : l && m()), m;
}
function Ad(e, t, n) {
  const r = this.proxy, o = Oe(e) ? e.includes(".") ? uc(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const i = Pr(this), a = cc(o, s.bind(r), n);
  return i(), a;
}
function uc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const fc = /* @__PURE__ */ Symbol("_vte"), dc = (e) => e.__isTeleport, ar = (e) => e && (e.disabled || e.disabled === ""), $i = (e) => e && (e.defer || e.defer === ""), Vi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ji = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, vo = (e, t) => {
  const n = e && e.to;
  return Oe(n) ? t ? t(n) : null : n;
}, hc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, i, a, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: m,
      o: { insert: b, querySelector: w, createText: T, createComment: A }
    } = u, v = ar(t.props);
    let { shapeFlag: M, children: E, dynamicChildren: y } = t;
    if (e == null) {
      const N = t.el = T(""), R = t.anchor = T("");
      b(N, n, r), b(R, n, r);
      const U = (I, K) => {
        M & 16 && c(
          E,
          I,
          K,
          o,
          s,
          i,
          a,
          l
        );
      }, F = () => {
        const I = t.target = vo(t.props, w), K = mc(I, t, T, b);
        I && (i !== "svg" && Vi(I) ? i = "svg" : i !== "mathml" && ji(I) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), v || (U(I, K), Jr(t, !1)));
      };
      v && (U(n, R), Jr(t, !0)), $i(t.props) ? (t.el.__isMounted = !1, Ze(() => {
        F(), delete t.el.__isMounted;
      }, s)) : F();
    } else {
      if ($i(t.props) && e.el.__isMounted === !1) {
        Ze(() => {
          hc.process(
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
      const N = t.anchor = e.anchor, R = t.target = e.target, U = t.targetAnchor = e.targetAnchor, F = ar(e.props), I = F ? n : R, K = F ? N : U;
      if (i === "svg" || Vi(R) ? i = "svg" : (i === "mathml" || ji(R)) && (i = "mathml"), y ? (m(
        e.dynamicChildren,
        y,
        I,
        o,
        s,
        i,
        a
      ), ui(e, t, !0)) : l || f(
        e,
        t,
        I,
        K,
        o,
        s,
        i,
        a,
        !1
      ), v)
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $r(
          t,
          n,
          N,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = vo(
          t.props,
          w
        );
        Y && $r(
          t,
          Y,
          null,
          u,
          0
        );
      } else F && $r(
        t,
        R,
        U,
        u,
        1
      );
      Jr(t, v);
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
      const b = s || !ar(m);
      for (let w = 0; w < a.length; w++) {
        const T = a[w];
        r(
          T,
          t,
          n,
          b,
          !!T.dynamicChildren
        );
      }
    }
  },
  move: $r,
  hydrate: wd
};
function $r(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(i, t, n), (!f || ar(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      o(
        u[m],
        t,
        n,
        2
      );
  f && r(a, t, n);
}
function wd(e, t, n, r, o, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c }
}, f) {
  function m(T, A, v, M) {
    A.anchor = f(
      i(T),
      A,
      a(T),
      n,
      r,
      o,
      s
    ), A.targetStart = v, A.targetAnchor = M;
  }
  const b = t.target = vo(
    t.props,
    l
  ), w = ar(t.props);
  if (b) {
    const T = b._lpa || b.firstChild;
    if (t.shapeFlag & 16)
      if (w)
        m(
          e,
          t,
          T,
          T && i(T)
        );
      else {
        t.anchor = i(e);
        let A = T;
        for (; A; ) {
          if (A && A.nodeType === 8) {
            if (A.data === "teleport start anchor")
              t.targetStart = A;
            else if (A.data === "teleport anchor") {
              t.targetAnchor = A, b._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          A = i(A);
        }
        t.targetAnchor || mc(b, t, c, u), f(
          T && i(T),
          t,
          b,
          n,
          r,
          o,
          s
        );
      }
    Jr(t, w);
  } else w && t.shapeFlag & 16 && m(e, t, e, i(e));
  return t.anchor && i(t.anchor);
}
const Od = hc;
function Jr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function mc(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[fc] = s, e && (r(o, e), r(s, e)), s;
}
const Mt = /* @__PURE__ */ Symbol("_leaveCb"), Vr = /* @__PURE__ */ Symbol("_enterCb");
function pc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ii(() => {
    e.isMounted = !0;
  }), Ac(() => {
    e.isUnmounting = !0;
  }), e;
}
const at = [Function, Array], _c = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: at,
  onEnter: at,
  onAfterEnter: at,
  onEnterCancelled: at,
  // leave
  onBeforeLeave: at,
  onLeave: at,
  onAfterLeave: at,
  onLeaveCancelled: at,
  // appear
  onBeforeAppear: at,
  onAppear: at,
  onAfterAppear: at,
  onAppearCancelled: at
}, gc = (e) => {
  const t = e.subTree;
  return t.component ? gc(t.component) : t;
}, Ld = {
  name: "BaseTransition",
  props: _c,
  setup(e, { slots: t }) {
    const n = Ct(), r = pc();
    return () => {
      const o = t.default && oi(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = bc(o), i = ce(e), { mode: a } = i;
      if (r.isLeaving)
        return no(s);
      const l = Wi(s);
      if (!l)
        return no(s);
      let u = yr(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== qe && Tn(l, u);
      let c = n.subTree && Wi(n.subTree);
      if (c && c.type !== qe && !pn(c, l) && gc(n).type !== qe) {
        let f = yr(
          c,
          i,
          r,
          n
        );
        if (Tn(c, f), a === "out-in" && l.type !== qe)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, no(s);
        a === "in-out" && l.type !== qe ? f.delayLeave = (m, b, w) => {
          const T = yc(
            r,
            c
          );
          T[String(c.key)] = c, m[Mt] = () => {
            b(), m[Mt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            w(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function bc(e) {
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
const Cd = Ld;
function yc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function yr(e, t, n, r, o) {
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
    onAfterLeave: w,
    onLeaveCancelled: T,
    onBeforeAppear: A,
    onAppear: v,
    onAfterAppear: M,
    onAppearCancelled: E
  } = t, y = String(e.key), N = yc(n, e), R = (I, K) => {
    I && bt(
      I,
      r,
      9,
      K
    );
  }, U = (I, K) => {
    const Y = K[1];
    R(I, K), Q(I) ? I.every((H) => H.length <= 1) && Y() : I.length <= 1 && Y();
  }, F = {
    mode: i,
    persisted: a,
    beforeEnter(I) {
      let K = l;
      if (!n.isMounted)
        if (s)
          K = A || l;
        else
          return;
      I[Mt] && I[Mt](
        !0
        /* cancelled */
      );
      const Y = N[y];
      Y && pn(e, Y) && Y.el[Mt] && Y.el[Mt](), R(K, [I]);
    },
    enter(I) {
      let K = u, Y = c, H = f;
      if (!n.isMounted)
        if (s)
          K = v || u, Y = M || c, H = E || f;
        else
          return;
      let Z = !1;
      const se = I[Vr] = (ue) => {
        Z || (Z = !0, ue ? R(H, [I]) : R(Y, [I]), F.delayedLeave && F.delayedLeave(), I[Vr] = void 0);
      };
      K ? U(K, [I, se]) : se();
    },
    leave(I, K) {
      const Y = String(e.key);
      if (I[Vr] && I[Vr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      R(m, [I]);
      let H = !1;
      const Z = I[Mt] = (se) => {
        H || (H = !0, K(), se ? R(T, [I]) : R(w, [I]), I[Mt] = void 0, N[Y] === e && delete N[Y]);
      };
      N[Y] = e, b ? U(b, [I, Z]) : Z();
    },
    clone(I) {
      const K = yr(
        I,
        t,
        n,
        r,
        o
      );
      return o && o(K), K;
    }
  };
  return F;
}
function no(e) {
  if (Ms(e))
    return e = en(e), e.children = null, e;
}
function Wi(e) {
  if (!Ms(e))
    return dc(e.type) && e.children ? bc(e.children) : e;
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
function oi(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === ke ? (i.patchFlag & 128 && o++, r = r.concat(
      oi(i.children, t, a)
    )) : (t || i.type !== qe) && r.push(a != null ? en(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Me({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ec(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function e2(e) {
  const t = Ct(), n = ni(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  }
  return n;
}
const cs = /* @__PURE__ */ new WeakMap();
function lr(e, t, n, r, o = !1) {
  if (Q(e)) {
    e.forEach(
      (w, T) => lr(
        w,
        t && (Q(t) ? t[T] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Dn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && lr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Ds(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === pe ? a.refs = {} : a.refs, f = a.setupState, m = ce(f), b = f === pe ? Il : (w) => me(m, w);
  if (u != null && u !== l) {
    if (Bi(t), Oe(u))
      c[u] = null, b(u) && (f[u] = null);
    else if (we(u)) {
      u.value = null;
      const w = t;
      w.k && (c[w.k] = null);
    }
  }
  if (ne(l))
    Ir(l, a, 12, [i, c]);
  else {
    const w = Oe(l), T = we(l);
    if (w || T) {
      const A = () => {
        if (e.f) {
          const v = w ? b(l) ? f[l] : c[l] : l.value;
          if (o)
            Q(v) && qo(v, s);
          else if (Q(v))
            v.includes(s) || v.push(s);
          else if (w)
            c[l] = [s], b(l) && (f[l] = c[l]);
          else {
            const M = [s];
            l.value = M, e.k && (c[e.k] = M);
          }
        } else w ? (c[l] = i, b(l) && (f[l] = i)) : T && (l.value = i, e.k && (c[e.k] = i));
      };
      if (i) {
        const v = () => {
          A(), cs.delete(e);
        };
        v.id = -1, cs.set(e, v), Ze(v, n);
      } else
        Bi(e), A();
    }
  }
}
function Bi(e) {
  const t = cs.get(e);
  t && (t.flags |= 8, cs.delete(e));
}
Ls().requestIdleCallback;
Ls().cancelIdleCallback;
const Dn = (e) => !!e.type.__asyncLoader, Ms = (e) => e.type.__isKeepAlive;
function Rd(e, t) {
  vc(e, "a", t);
}
function Id(e, t) {
  vc(e, "da", t);
}
function vc(e, t, n = ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ks(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ms(o.parent.vnode) && Nd(r, t, n, o), o = o.parent;
  }
}
function Nd(e, t, n, r) {
  const o = ks(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ai(() => {
    qo(r[t], o);
  }, n);
}
function ks(e, t, n = ze, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      $t();
      const a = Pr(n), l = bt(t, n, e, i);
      return a(), Vt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Wt = (e) => (t, n = ze) => {
  (!Sr || e === "sp") && ks(e, (...r) => t(...r), n);
}, Sc = Wt("bm"), ii = Wt("m"), Pd = Wt(
  "bu"
), Tc = Wt("u"), Ac = Wt(
  "bum"
), ai = Wt("um"), Md = Wt(
  "sp"
), kd = Wt("rtg"), xd = Wt("rtc");
function Dd(e, t = ze) {
  ks("ec", e, t);
}
const Fd = "components", wc = /* @__PURE__ */ Symbol.for("v-ndc");
function t2(e) {
  return Oe(e) ? Ud(Fd, e, !1) || e : e || wc;
}
function Ud(e, t, n = !0, r = !1) {
  const o = He || ze;
  if (o) {
    const s = o.type;
    {
      const a = Ah(
        s,
        !1
      );
      if (a && (a === t || a === ut(t) || a === ws(ut(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ki(o[e] || s[e], t) || // global registration
      Ki(o.appContext[e], t)
    );
    return !i && r ? s : i;
  }
}
function Ki(e, t) {
  return e && (e[t] || e[ut(t)] || e[ws(ut(t))]);
}
function Hd(e, t, n, r) {
  let o;
  const s = n, i = Q(e);
  if (i || Oe(e)) {
    const a = i && Ht(e);
    let l = !1, u = !1;
    a && (l = !ot(e), u = jt(e), e = Rs(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? Un(gt(e[c])) : gt(e[c]) : e[c],
        c,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, s);
  } else if (ge(e))
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
function n2(e, t, n = {}, r, o) {
  if (He.ce || He.parent && Dn(He.parent) && He.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Dt(), ds(
      ke,
      null,
      [Ie("slot", n, r && r())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), Dt();
  const i = s && Oc(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ds(
    ke,
    {
      key: (a && !_t(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Oc(e) {
  return e.some((t) => vr(t) ? !(t.type === qe || t.type === ke && !Oc(t.children)) : !0) ? e : null;
}
const So = (e) => e ? Bc(e) ? Ds(e) : So(e.parent) : null, cr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => So(e.parent),
    $root: (e) => So(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      si(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ri.bind(e.proxy)),
    $watch: (e) => Ad.bind(e)
  })
), ro = (e, t) => e !== pe && !e.__isScriptSetup && me(e, t), $d = {
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
        if (ro(r, t))
          return i[t] = 1, r[t];
        if (o !== pe && me(o, t))
          return i[t] = 2, o[t];
        if (me(s, t))
          return i[t] = 3, s[t];
        if (n !== pe && me(n, t))
          return i[t] = 4, n[t];
        To && (i[t] = 0);
      }
    }
    const u = cr[t];
    let c, f;
    if (u)
      return t === "$attrs" && Ke(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== pe && me(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, me(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return ro(o, t) ? (o[t] = n, !0) : r !== pe && me(r, t) ? (r[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: i }
  }, a) {
    let l;
    return !!(n[a] || e !== pe && a[0] !== "$" && me(e, a) || ro(t, a) || me(s, a) || me(r, a) || me(cr, a) || me(o.config.globalProperties, a) || (l = i.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qi(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let To = !0;
function Vd(e) {
  const t = Cc(e), n = e.proxy, r = e.ctx;
  To = !1, t.beforeCreate && zi(t.beforeCreate, e, "bc");
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
    updated: w,
    activated: T,
    deactivated: A,
    beforeDestroy: v,
    beforeUnmount: M,
    destroyed: E,
    unmounted: y,
    render: N,
    renderTracked: R,
    renderTriggered: U,
    errorCaptured: F,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: Y,
    // assets
    components: H,
    directives: Z,
    filters: se
  } = t;
  if (u && jd(u, r, null), i)
    for (const B in i) {
      const J = i[B];
      ne(J) && (r[B] = J.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    ge(B) && (e.data = Is(B));
  }
  if (To = !0, s)
    for (const B in s) {
      const J = s[B], Ee = ne(J) ? J.bind(n, n) : ne(J.get) ? J.get.bind(n, n) : Ot, Se = !ne(J) && ne(J.set) ? J.set.bind(n) : Ot, re = Ce({
        get: Ee,
        set: Se
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: (he) => re.value = he
      });
    }
  if (a)
    for (const B in a)
      Lc(a[B], r, n, B);
  if (l) {
    const B = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((J) => {
      Ed(J, B[J]);
    });
  }
  c && zi(c, e, "c");
  function $(B, J) {
    Q(J) ? J.forEach((Ee) => B(Ee.bind(n))) : J && B(J.bind(n));
  }
  if ($(Sc, f), $(ii, m), $(Pd, b), $(Tc, w), $(Rd, T), $(Id, A), $(Dd, F), $(xd, R), $(kd, U), $(Ac, M), $(ai, y), $(Md, I), Q(K))
    if (K.length) {
      const B = e.exposed || (e.exposed = {});
      K.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (Ee) => n[J] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Ot && (e.render = N), Y != null && (e.inheritAttrs = Y), H && (e.components = H), Z && (e.directives = Z), I && Ec(e);
}
function jd(e, t, n = Ot) {
  Q(e) && (e = Ao(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ge(o) ? "default" in o ? s = xn(
      o.from || r,
      o.default,
      !0
    ) : s = xn(o.from || r) : s = xn(o), we(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s;
  }
}
function zi(e, t, n) {
  bt(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lc(e, t, n, r) {
  let o = r.includes(".") ? uc(n, r) : () => n[r];
  if (Oe(e)) {
    const s = t[e];
    ne(s) && yn(o, s);
  } else if (ne(e))
    yn(o, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((s) => Lc(s, t, n, r));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && yn(o, s, e);
    }
}
function Cc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => us(l, u, i, !0)
  ), us(l, t, i)), ge(t) && s.set(t, l), l;
}
function us(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && us(e, s, n, !0), o && o.forEach(
    (i) => us(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Wd[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Wd = {
  data: Gi,
  props: Yi,
  emits: Yi,
  // objects
  methods: nr,
  computed: nr,
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
  components: nr,
  directives: nr,
  // watch
  watch: Kd,
  // provide / inject
  provide: Gi,
  inject: Bd
};
function Gi(e, t) {
  return t ? e ? function() {
    return Me(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bd(e, t) {
  return nr(Ao(e), Ao(t));
}
function Ao(e) {
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
function nr(e, t) {
  return e ? Me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yi(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Me(
    /* @__PURE__ */ Object.create(null),
    qi(e),
    qi(t ?? {})
  ) : t;
}
function Kd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Me(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Je(e[r], t[r]);
  return n;
}
function Rc() {
  return {
    app: null,
    config: {
      isNativeTag: Il,
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
let qd = 0;
function zd(e, t) {
  return function(r, o = null) {
    ne(r) || (r = Me({}, r)), o != null && !ge(o) && (o = null);
    const s = Rc(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = s.app = {
      _uid: qd++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Oh,
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
          return b.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(b, c, m), l = !0, u._container = c, c.__vue_app__ = u, Ds(b.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (bt(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = En;
        En = u;
        try {
          return c();
        } finally {
          En = f;
        }
      }
    };
    return u;
  };
}
let En = null;
const Gd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${rn(t)}Modifiers`];
function Yd(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let o = n;
  const s = t.startsWith("update:"), i = s && Gd(r, t.slice(7));
  i && (i.trim && (o = n.map((c) => Oe(c) ? c.trim() : c)), i.number && (o = n.map(Os)));
  let a, l = r[a = Js(t)] || // also try camelCase event handler (#2249)
  r[a = Js(ut(t))];
  !l && s && (l = r[a = Js(rn(t))]), l && bt(
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
    e.emitted[a] = !0, bt(
      u,
      e,
      6,
      o
    );
  }
}
const Xd = /* @__PURE__ */ new WeakMap();
function Ic(e, t, n = !1) {
  const r = n ? Xd : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!ne(e)) {
    const l = (u) => {
      const c = Ic(u, t, !0);
      c && (a = !0, Me(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (ge(e) && r.set(e, null), null) : (Q(s) ? s.forEach((l) => i[l] = null) : Me(i, s), ge(e) && r.set(e, i), i);
}
function xs(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, rn(t)) || me(e, t));
}
function Xi(e) {
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
    ctx: w,
    inheritAttrs: T
  } = e, A = ls(e);
  let v, M;
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, N = y;
      v = At(
        u.call(
          N,
          y,
          c,
          f,
          b,
          m,
          w
        )
      ), M = a;
    } else {
      const y = t;
      v = At(
        y.length > 1 ? y(
          f,
          { attrs: a, slots: i, emit: l }
        ) : y(
          f,
          null
        )
      ), M = t.props ? a : Jd(a);
    }
  } catch (y) {
    ur.length = 0, Ps(y, e, 1), v = Ie(qe);
  }
  let E = v;
  if (M && T !== !1) {
    const y = Object.keys(M), { shapeFlag: N } = E;
    y.length && N & 7 && (s && y.some(Ko) && (M = Qd(
      M,
      s
    )), E = en(E, M, !1, !0));
  }
  return n.dirs && (E = en(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Tn(E, n.transition), v = E, ls(A), v;
}
const Jd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qd = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ko(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Zd(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ji(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const m = c[f];
        if (i[m] !== r[m] && !xs(u, m))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ji(r, i, u) : !0 : !!i;
  return !1;
}
function Ji(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !xs(n, s))
      return !0;
  }
  return !1;
}
function eh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Nc = {}, Pc = () => Object.create(Nc), Mc = (e) => Object.getPrototypeOf(e) === Nc;
function th(e, t, n, r = !1) {
  const o = {}, s = Pc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), kc(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = r ? o : ad(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function nh(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = ce(o), [l] = e.propsOptions;
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
        if (xs(e.emitsOptions, m))
          continue;
        const b = t[m];
        if (l)
          if (me(s, m))
            b !== s[m] && (s[m] = b, u = !0);
          else {
            const w = ut(m);
            o[w] = wo(
              l,
              a,
              w,
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
    kc(e, t, o, s) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !me(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = rn(f)) === f || !me(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = wo(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== a)
      for (const f in s)
        (!t || !me(t, f)) && (delete s[f], u = !0);
  }
  u && kt(e.attrs, "set", "");
}
function kc(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (sr(l))
        continue;
      const u = t[l];
      let c;
      o && me(o, c = ut(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : xs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (s) {
    const l = ce(n), u = a || pe;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = wo(
        o,
        l,
        f,
        u[f],
        e,
        !me(u, f)
      );
    }
  }
  return i;
}
function wo(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = me(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ne(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Pr(o);
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
    ] && (r === "" || r === rn(n)) && (r = !0));
  }
  return r;
}
const rh = /* @__PURE__ */ new WeakMap();
function xc(e, t, n = !1) {
  const r = n ? rh : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!ne(e)) {
    const c = (f) => {
      l = !0;
      const [m, b] = xc(f, t, !0);
      Me(i, m), b && a.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return ge(e) && r.set(e, Pn), Pn;
  if (Q(s))
    for (let c = 0; c < s.length; c++) {
      const f = ut(s[c]);
      Qi(f) && (i[f] = pe);
    }
  else if (s)
    for (const c in s) {
      const f = ut(c);
      if (Qi(f)) {
        const m = s[c], b = i[f] = Q(m) || ne(m) ? { type: m } : Me({}, m), w = b.type;
        let T = !1, A = !0;
        if (Q(w))
          for (let v = 0; v < w.length; ++v) {
            const M = w[v], E = ne(M) && M.name;
            if (E === "Boolean") {
              T = !0;
              break;
            } else E === "String" && (A = !1);
          }
        else
          T = ne(w) && w.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = T, b[
          1
          /* shouldCastTrue */
        ] = A, (T || me(b, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return ge(e) && r.set(e, u), u;
}
function Qi(e) {
  return e[0] !== "$" && !sr(e);
}
const li = (e) => e === "_" || e === "_ctx" || e === "$stable", ci = (e) => Q(e) ? e.map(At) : [At(e)], sh = (e, t, n) => {
  if (t._n)
    return t;
  const r = lc((...o) => ci(t(...o)), n);
  return r._c = !1, r;
}, Dc = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (li(o)) continue;
    const s = e[o];
    if (ne(s))
      t[o] = sh(o, s, r);
    else if (s != null) {
      const i = ci(s);
      t[o] = () => i;
    }
  }
}, Fc = (e, t) => {
  const n = ci(t);
  e.slots.default = () => n;
}, Uc = (e, t, n) => {
  for (const r in t)
    (n || !li(r)) && (e[r] = t[r]);
}, oh = (e, t, n) => {
  const r = e.slots = Pc();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Uc(r, t, n), n && kl(r, "_", o, !0)) : Dc(t, r);
  } else t && Fc(e, t);
}, ih = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = pe;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = !1 : Uc(o, t, n) : (s = !t.$stable, Dc(t, o)), i = t;
  } else t && (Fc(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !li(a) && i[a] == null && delete o[a];
}, Ze = fh;
function ah(e) {
  return lh(e);
}
function lh(e, t) {
  const n = Ls();
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
    setScopeId: b = Ot,
    insertStaticContent: w
  } = e, T = (p, g, _, P = null, L = null, k = null, W = void 0, V = null, d = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !pn(p, g) && (P = Te(p), he(p, L, k, !0), p = null), g.patchFlag === -2 && (d = !1, g.dynamicChildren = null);
    const { type: h, ref: O, shapeFlag: x } = g;
    switch (h) {
      case Nr:
        A(p, g, _, P);
        break;
      case qe:
        v(p, g, _, P);
        break;
      case Qr:
        p == null && M(g, _, P, W);
        break;
      case ke:
        H(
          p,
          g,
          _,
          P,
          L,
          k,
          W,
          V,
          d
        );
        break;
      default:
        x & 1 ? N(
          p,
          g,
          _,
          P,
          L,
          k,
          W,
          V,
          d
        ) : x & 6 ? Z(
          p,
          g,
          _,
          P,
          L,
          k,
          W,
          V,
          d
        ) : (x & 64 || x & 128) && h.process(
          p,
          g,
          _,
          P,
          L,
          k,
          W,
          V,
          d,
          De
        );
    }
    O != null && L ? lr(O, p && p.ref, k, g || p, !g) : O == null && p && p.ref != null && lr(p.ref, null, k, p, !0);
  }, A = (p, g, _, P) => {
    if (p == null)
      r(
        g.el = a(g.children),
        _,
        P
      );
    else {
      const L = g.el = p.el;
      g.children !== p.children && u(L, g.children);
    }
  }, v = (p, g, _, P) => {
    p == null ? r(
      g.el = l(g.children || ""),
      _,
      P
    ) : g.el = p.el;
  }, M = (p, g, _, P) => {
    [p.el, p.anchor] = w(
      p.children,
      g,
      _,
      P,
      p.el,
      p.anchor
    );
  }, E = ({ el: p, anchor: g }, _, P) => {
    let L;
    for (; p && p !== g; )
      L = m(p), r(p, _, P), p = L;
    r(g, _, P);
  }, y = ({ el: p, anchor: g }) => {
    let _;
    for (; p && p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, N = (p, g, _, P, L, k, W, V, d) => {
    if (g.type === "svg" ? W = "svg" : g.type === "math" && (W = "mathml"), p == null)
      R(
        g,
        _,
        P,
        L,
        k,
        W,
        V,
        d
      );
    else {
      const h = p.el && p.el._isVueCE ? p.el : null;
      try {
        h && h._beginPatch(), I(
          p,
          g,
          L,
          k,
          W,
          V,
          d
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, R = (p, g, _, P, L, k, W, V) => {
    let d, h;
    const { props: O, shapeFlag: x, transition: q, dirs: j } = p;
    if (d = p.el = i(
      p.type,
      k,
      O && O.is,
      O
    ), x & 8 ? c(d, p.children) : x & 16 && F(
      p.children,
      d,
      null,
      P,
      L,
      so(p, k),
      W,
      V
    ), j && cn(p, null, P, "created"), U(d, p, p.scopeId, W, P), O) {
      for (const D in O)
        D !== "value" && !sr(D) && s(d, D, null, O[D], k, P);
      "value" in O && s(d, "value", null, O.value, k), (h = O.onVnodeBeforeMount) && vt(h, P, p);
    }
    j && cn(p, null, P, "beforeMount");
    const C = ch(L, q);
    C && q.beforeEnter(d), r(d, g, _), ((h = O && O.onVnodeMounted) || C || j) && Ze(() => {
      h && vt(h, P, p), C && q.enter(d), j && cn(p, null, P, "mounted");
    }, L);
  }, U = (p, g, _, P, L) => {
    if (_ && b(p, _), P)
      for (let k = 0; k < P.length; k++)
        b(p, P[k]);
    if (L) {
      let k = L.subTree;
      if (g === k || Vc(k.type) && (k.ssContent === g || k.ssFallback === g)) {
        const W = L.vnode;
        U(
          p,
          W,
          W.scopeId,
          W.slotScopeIds,
          L.parent
        );
      }
    }
  }, F = (p, g, _, P, L, k, W, V, d = 0) => {
    for (let h = d; h < p.length; h++) {
      const O = p[h] = V ? Xt(p[h]) : At(p[h]);
      T(
        null,
        O,
        g,
        _,
        P,
        L,
        k,
        W,
        V
      );
    }
  }, I = (p, g, _, P, L, k, W) => {
    const V = g.el = p.el;
    let { patchFlag: d, dynamicChildren: h, dirs: O } = g;
    d |= p.patchFlag & 16;
    const x = p.props || pe, q = g.props || pe;
    let j;
    if (_ && un(_, !1), (j = q.onVnodeBeforeUpdate) && vt(j, _, g, p), O && cn(g, p, _, "beforeUpdate"), _ && un(_, !0), (x.innerHTML && q.innerHTML == null || x.textContent && q.textContent == null) && c(V, ""), h ? K(
      p.dynamicChildren,
      h,
      V,
      _,
      P,
      so(g, L),
      k
    ) : W || J(
      p,
      g,
      V,
      null,
      _,
      P,
      so(g, L),
      k,
      !1
    ), d > 0) {
      if (d & 16)
        Y(V, x, q, _, L);
      else if (d & 2 && x.class !== q.class && s(V, "class", null, q.class, L), d & 4 && s(V, "style", x.style, q.style, L), d & 8) {
        const C = g.dynamicProps;
        for (let D = 0; D < C.length; D++) {
          const X = C[D], ae = x[X], Ae = q[X];
          (Ae !== ae || X === "value") && s(V, X, ae, Ae, L, _);
        }
      }
      d & 1 && p.children !== g.children && c(V, g.children);
    } else !W && h == null && Y(V, x, q, _, L);
    ((j = q.onVnodeUpdated) || O) && Ze(() => {
      j && vt(j, _, g, p), O && cn(g, p, _, "updated");
    }, P);
  }, K = (p, g, _, P, L, k, W) => {
    for (let V = 0; V < g.length; V++) {
      const d = p[V], h = g[V], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pn(d, h) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      T(
        d,
        h,
        O,
        null,
        P,
        L,
        k,
        W,
        !0
      );
    }
  }, Y = (p, g, _, P, L) => {
    if (g !== _) {
      if (g !== pe)
        for (const k in g)
          !sr(k) && !(k in _) && s(
            p,
            k,
            g[k],
            null,
            L,
            P
          );
      for (const k in _) {
        if (sr(k)) continue;
        const W = _[k], V = g[k];
        W !== V && k !== "value" && s(p, k, V, W, L, P);
      }
      "value" in _ && s(p, "value", g.value, _.value, L);
    }
  }, H = (p, g, _, P, L, k, W, V, d) => {
    const h = g.el = p ? p.el : a(""), O = g.anchor = p ? p.anchor : a("");
    let { patchFlag: x, dynamicChildren: q, slotScopeIds: j } = g;
    j && (V = V ? V.concat(j) : j), p == null ? (r(h, _, P), r(O, _, P), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      O,
      L,
      k,
      W,
      V,
      d
    )) : x > 0 && x & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === q.length ? (K(
      p.dynamicChildren,
      q,
      _,
      L,
      k,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || L && g === L.subTree) && ui(
      p,
      g,
      !0
      /* shallow */
    )) : J(
      p,
      g,
      _,
      O,
      L,
      k,
      W,
      V,
      d
    );
  }, Z = (p, g, _, P, L, k, W, V, d) => {
    g.slotScopeIds = V, p == null ? g.shapeFlag & 512 ? L.ctx.activate(
      g,
      _,
      P,
      W,
      d
    ) : se(
      g,
      _,
      P,
      L,
      k,
      W,
      d
    ) : ue(p, g, d);
  }, se = (p, g, _, P, L, k, W) => {
    const V = p.component = yh(
      p,
      P,
      L
    );
    if (Ms(p) && (V.ctx.renderer = De), Eh(V, !1, W), V.asyncDep) {
      if (L && L.registerDep(V, $, W), !p.el) {
        const d = V.subTree = Ie(qe);
        v(null, d, g, _), p.placeholder = d.el;
      }
    } else
      $(
        V,
        p,
        g,
        _,
        L,
        k,
        W
      );
  }, ue = (p, g, _) => {
    const P = g.component = p.component;
    if (Zd(p, g, _))
      if (P.asyncDep && !P.asyncResolved) {
        B(P, g, _);
        return;
      } else
        P.next = g, P.update();
    else
      g.el = p.el, P.vnode = g;
  }, $ = (p, g, _, P, L, k, W) => {
    const V = () => {
      if (p.isMounted) {
        let { next: x, bu: q, u: j, parent: C, vnode: D } = p;
        {
          const Fe = Hc(p);
          if (Fe) {
            x && (x.el = D.el, B(p, x, W)), Fe.asyncDep.then(() => {
              p.isUnmounted || V();
            });
            return;
          }
        }
        let X = x, ae;
        un(p, !1), x ? (x.el = D.el, B(p, x, W)) : x = D, q && Xr(q), (ae = x.props && x.props.onVnodeBeforeUpdate) && vt(ae, C, x, D), un(p, !0);
        const Ae = Xi(p), Xe = p.subTree;
        p.subTree = Ae, T(
          Xe,
          Ae,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          Te(Xe),
          p,
          L,
          k
        ), x.el = Ae.el, X === null && eh(p, Ae.el), j && Ze(j, L), (ae = x.props && x.props.onVnodeUpdated) && Ze(
          () => vt(ae, C, x, D),
          L
        );
      } else {
        let x;
        const { el: q, props: j } = g, { bm: C, m: D, parent: X, root: ae, type: Ae } = p, Xe = Dn(g);
        un(p, !1), C && Xr(C), !Xe && (x = j && j.onVnodeBeforeMount) && vt(x, X, g), un(p, !0);
        {
          ae.ce && // @ts-expect-error _def is private
          ae.ce._def.shadowRoot !== !1 && ae.ce._injectChildStyle(Ae);
          const Fe = p.subTree = Xi(p);
          T(
            null,
            Fe,
            _,
            P,
            p,
            L,
            k
          ), g.el = Fe.el;
        }
        if (D && Ze(D, L), !Xe && (x = j && j.onVnodeMounted)) {
          const Fe = g;
          Ze(
            () => vt(x, X, Fe),
            L
          );
        }
        (g.shapeFlag & 256 || X && Dn(X.vnode) && X.vnode.shapeFlag & 256) && p.a && Ze(p.a, L), p.isMounted = !0, g = _ = P = null;
      }
    };
    p.scope.on();
    const d = p.effect = new $l(V);
    p.scope.off();
    const h = p.update = d.run.bind(d), O = p.job = d.runIfDirty.bind(d);
    O.i = p, O.id = p.uid, d.scheduler = () => si(O), un(p, !0), h();
  }, B = (p, g, _) => {
    g.component = p;
    const P = p.vnode.props;
    p.vnode = g, p.next = null, nh(p, g.props, P, _), ih(p, g.children, _), $t(), Hi(p), Vt();
  }, J = (p, g, _, P, L, k, W, V, d = !1) => {
    const h = p && p.children, O = p ? p.shapeFlag : 0, x = g.children, { patchFlag: q, shapeFlag: j } = g;
    if (q > 0) {
      if (q & 128) {
        Se(
          h,
          x,
          _,
          P,
          L,
          k,
          W,
          V,
          d
        );
        return;
      } else if (q & 256) {
        Ee(
          h,
          x,
          _,
          P,
          L,
          k,
          W,
          V,
          d
        );
        return;
      }
    }
    j & 8 ? (O & 16 && oe(h, L, k), x !== h && c(_, x)) : O & 16 ? j & 16 ? Se(
      h,
      x,
      _,
      P,
      L,
      k,
      W,
      V,
      d
    ) : oe(h, L, k, !0) : (O & 8 && c(_, ""), j & 16 && F(
      x,
      _,
      P,
      L,
      k,
      W,
      V,
      d
    ));
  }, Ee = (p, g, _, P, L, k, W, V, d) => {
    p = p || Pn, g = g || Pn;
    const h = p.length, O = g.length, x = Math.min(h, O);
    let q;
    for (q = 0; q < x; q++) {
      const j = g[q] = d ? Xt(g[q]) : At(g[q]);
      T(
        p[q],
        j,
        _,
        null,
        L,
        k,
        W,
        V,
        d
      );
    }
    h > O ? oe(
      p,
      L,
      k,
      !0,
      !1,
      x
    ) : F(
      g,
      _,
      P,
      L,
      k,
      W,
      V,
      d,
      x
    );
  }, Se = (p, g, _, P, L, k, W, V, d) => {
    let h = 0;
    const O = g.length;
    let x = p.length - 1, q = O - 1;
    for (; h <= x && h <= q; ) {
      const j = p[h], C = g[h] = d ? Xt(g[h]) : At(g[h]);
      if (pn(j, C))
        T(
          j,
          C,
          _,
          null,
          L,
          k,
          W,
          V,
          d
        );
      else
        break;
      h++;
    }
    for (; h <= x && h <= q; ) {
      const j = p[x], C = g[q] = d ? Xt(g[q]) : At(g[q]);
      if (pn(j, C))
        T(
          j,
          C,
          _,
          null,
          L,
          k,
          W,
          V,
          d
        );
      else
        break;
      x--, q--;
    }
    if (h > x) {
      if (h <= q) {
        const j = q + 1, C = j < O ? g[j].el : P;
        for (; h <= q; )
          T(
            null,
            g[h] = d ? Xt(g[h]) : At(g[h]),
            _,
            C,
            L,
            k,
            W,
            V,
            d
          ), h++;
      }
    } else if (h > q)
      for (; h <= x; )
        he(p[h], L, k, !0), h++;
    else {
      const j = h, C = h, D = /* @__PURE__ */ new Map();
      for (h = C; h <= q; h++) {
        const rt = g[h] = d ? Xt(g[h]) : At(g[h]);
        rt.key != null && D.set(rt.key, h);
      }
      let X, ae = 0;
      const Ae = q - C + 1;
      let Xe = !1, Fe = 0;
      const ln = new Array(Ae);
      for (h = 0; h < Ae; h++) ln[h] = 0;
      for (h = j; h <= x; h++) {
        const rt = p[h];
        if (ae >= Ae) {
          he(rt, L, k, !0);
          continue;
        }
        let Et;
        if (rt.key != null)
          Et = D.get(rt.key);
        else
          for (X = C; X <= q; X++)
            if (ln[X - C] === 0 && pn(rt, g[X])) {
              Et = X;
              break;
            }
        Et === void 0 ? he(rt, L, k, !0) : (ln[Et - C] = h + 1, Et >= Fe ? Fe = Et : Xe = !0, T(
          rt,
          g[Et],
          _,
          null,
          L,
          k,
          W,
          V,
          d
        ), ae++);
      }
      const Xs = Xe ? uh(ln) : Pn;
      for (X = Xs.length - 1, h = Ae - 1; h >= 0; h--) {
        const rt = C + h, Et = g[rt], Mi = g[rt + 1], ki = rt + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mi.el || $c(Mi)
        ) : P;
        ln[h] === 0 ? T(
          null,
          Et,
          _,
          ki,
          L,
          k,
          W,
          V,
          d
        ) : Xe && (X < 0 || h !== Xs[X] ? re(Et, _, ki, 2) : X--);
      }
    }
  }, re = (p, g, _, P, L = null) => {
    const { el: k, type: W, transition: V, children: d, shapeFlag: h } = p;
    if (h & 6) {
      re(p.component.subTree, g, _, P);
      return;
    }
    if (h & 128) {
      p.suspense.move(g, _, P);
      return;
    }
    if (h & 64) {
      W.move(p, g, _, De);
      return;
    }
    if (W === ke) {
      r(k, g, _);
      for (let x = 0; x < d.length; x++)
        re(d[x], g, _, P);
      r(p.anchor, g, _);
      return;
    }
    if (W === Qr) {
      E(p, g, _);
      return;
    }
    if (P !== 2 && h & 1 && V)
      if (P === 0)
        V.beforeEnter(k), r(k, g, _), Ze(() => V.enter(k), L);
      else {
        const { leave: x, delayLeave: q, afterLeave: j } = V, C = () => {
          p.ctx.isUnmounted ? o(k) : r(k, g, _);
        }, D = () => {
          k._isLeaving && k[Mt](
            !0
            /* cancelled */
          ), x(k, () => {
            C(), j && j();
          });
        };
        q ? q(k, C, D) : D();
      }
    else
      r(k, g, _);
  }, he = (p, g, _, P = !1, L = !1) => {
    const {
      type: k,
      props: W,
      ref: V,
      children: d,
      dynamicChildren: h,
      shapeFlag: O,
      patchFlag: x,
      dirs: q,
      cacheIndex: j
    } = p;
    if (x === -2 && (L = !1), V != null && ($t(), lr(V, null, _, p, !0), Vt()), j != null && (g.renderCache[j] = void 0), O & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const C = O & 1 && q, D = !Dn(p);
    let X;
    if (D && (X = W && W.onVnodeBeforeUnmount) && vt(X, g, p), O & 6)
      it(p.component, _, P);
    else {
      if (O & 128) {
        p.suspense.unmount(_, P);
        return;
      }
      C && cn(p, null, g, "beforeUnmount"), O & 64 ? p.type.remove(
        p,
        g,
        _,
        De,
        P
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== ke || x > 0 && x & 64) ? oe(
        h,
        g,
        _,
        !1,
        !0
      ) : (k === ke && x & 384 || !L && O & 16) && oe(d, g, _), P && Ne(p);
    }
    (D && (X = W && W.onVnodeUnmounted) || C) && Ze(() => {
      X && vt(X, g, p), C && cn(p, null, g, "unmounted");
    }, _);
  }, Ne = (p) => {
    const { type: g, el: _, anchor: P, transition: L } = p;
    if (g === ke) {
      Ve(_, P);
      return;
    }
    if (g === Qr) {
      y(p);
      return;
    }
    const k = () => {
      o(_), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (p.shapeFlag & 1 && L && !L.persisted) {
      const { leave: W, delayLeave: V } = L, d = () => W(_, k);
      V ? V(p.el, k, d) : d();
    } else
      k();
  }, Ve = (p, g) => {
    let _;
    for (; p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, it = (p, g, _) => {
    const { bum: P, scope: L, job: k, subTree: W, um: V, m: d, a: h } = p;
    Zi(d), Zi(h), P && Xr(P), L.stop(), k && (k.flags |= 8, he(W, p, g, _)), V && Ze(V, g), Ze(() => {
      p.isUnmounted = !0;
    }, g);
  }, oe = (p, g, _, P = !1, L = !1, k = 0) => {
    for (let W = k; W < p.length; W++)
      he(p[W], g, _, P, L);
  }, Te = (p) => {
    if (p.shapeFlag & 6)
      return Te(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = m(p.anchor || p.el), _ = g && g[fc];
    return _ ? m(_) : g;
  };
  let je = !1;
  const Ye = (p, g, _) => {
    let P;
    p == null ? g._vnode && (he(g._vnode, null, null, !0), P = g._vnode.component) : T(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = p, je || (je = !0, Hi(P), oc(), je = !1);
  }, De = {
    p: T,
    um: he,
    m: re,
    r: Ne,
    mt: se,
    mc: F,
    pc: J,
    pbc: K,
    n: Te,
    o: e
  };
  return {
    render: Ye,
    hydrate: void 0,
    createApp: zd(Ye)
  };
}
function so({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function un({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ch(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Q(r) && Q(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = Xt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && ui(i, a)), a.type === Nr && (a.patchFlag !== -1 ? a.el = i.el : a.__elIndex = s + // take fragment start anchor into account
      (e.type === ke ? 1 : 0)), a.type === qe && !a.el && (a.el = i.el);
    }
}
function uh(e) {
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
function Hc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hc(t);
}
function Zi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $c(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $c(t.subTree) : null;
}
const Vc = (e) => e.__isSuspense;
function fh(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : yd(e);
}
const ke = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), Qr = /* @__PURE__ */ Symbol.for("v-stc"), ur = [];
let st = null;
function Dt(e = !1) {
  ur.push(st = e ? null : []);
}
function dh() {
  ur.pop(), st = ur[ur.length - 1] || null;
}
let Er = 1;
function fs(e, t = !1) {
  Er += e, e < 0 && st && t && (st.hasOnce = !0);
}
function jc(e) {
  return e.dynamicChildren = Er > 0 ? st || Pn : null, dh(), Er > 0 && st && st.push(e), e;
}
function rr(e, t, n, r, o, s) {
  return jc(
    ht(
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
function ds(e, t, n, r, o) {
  return jc(
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
function vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wc = ({ key: e }) => e ?? null, Zr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || we(e) || ne(e) ? { i: He, r: e, k: t, f: !!n } : e : null);
function ht(e, t = null, n = null, r = 0, o = null, s = e === ke ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wc(t),
    ref: t && Zr(t),
    scopeId: ac,
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
  return a ? (fi(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16), Er > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  st && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && st.push(l), l;
}
const Ie = hh;
function hh(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === wc) && (e = qe), vr(e)) {
    const a = en(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && fi(a, n), Er > 0 && !s && st && (a.shapeFlag & 6 ? st[st.indexOf(e)] = a : st.push(a)), a.patchFlag = -2, a;
  }
  if (wh(e) && (e = e.__vccOpts), t) {
    t = mh(t);
    let { class: a, style: l } = t;
    a && !Oe(a) && (t.class = Qt(a)), ge(l) && (Ns(l) && !Q(l) && (l = Me({}, l)), t.style = Cs(l));
  }
  const i = Oe(e) ? 1 : Vc(e) ? 128 : dc(e) ? 64 : ge(e) ? 4 : ne(e) ? 2 : 0;
  return ht(
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
function mh(e) {
  return e ? Ns(e) || Mc(e) ? Me({}, e) : e : null;
}
function en(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? _h(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Wc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Q(s) ? s.concat(Zr(t)) : [s, Zr(t)] : Zr(t)
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
    ssContent: e.ssContent && en(e.ssContent),
    ssFallback: e.ssFallback && en(e.ssFallback),
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
function ph(e = " ", t = 0) {
  return Ie(Nr, null, e, t);
}
function r2(e, t) {
  const n = Ie(Qr, null, e);
  return n.staticCount = t, n;
}
function ea(e = "", t = !1) {
  return t ? (Dt(), ds(qe, null, e)) : Ie(qe, null, e);
}
function At(e) {
  return e == null || typeof e == "boolean" ? Ie(qe) : Q(e) ? Ie(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vr(e) ? Xt(e) : Ie(Nr, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : en(e);
}
function fi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), fi(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Mc(t) ? t._ctx = He : o === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: He }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ph(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _h(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Qt([t.class, r.class]));
      else if (o === "style")
        t.style = Cs([t.style, r.style]);
      else if (Ss(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(Q(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function vt(e, t, n, r = null) {
  bt(e, t, 7, [
    n,
    r
  ]);
}
const gh = Rc();
let bh = 0;
function yh(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || gh, s = {
    uid: bh++,
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
    scope: new Ul(
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
    propsOptions: xc(r, o),
    emitsOptions: Ic(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Yd.bind(null, s), e.ce && e.ce(s), s;
}
let ze = null;
const Ct = () => ze || He;
let hs, Oo;
{
  const e = Ls(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  hs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), Oo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sr = n
  );
}
const Pr = (e) => {
  const t = ze;
  return hs(e), e.scope.on(), () => {
    e.scope.off(), hs(t);
  };
}, ta = () => {
  ze && ze.scope.off(), hs(null);
};
function Bc(e) {
  return e.vnode.shapeFlag & 4;
}
let Sr = !1;
function Eh(e, t = !1, n = !1) {
  t && Oo(t);
  const { props: r, children: o } = e.vnode, s = Bc(e);
  th(e, r, s, t), oh(e, o, n || t);
  const i = s ? vh(e, t) : void 0;
  return t && Oo(!1), i;
}
function vh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $d);
  const { setup: r } = n;
  if (r) {
    $t();
    const o = e.setupContext = r.length > 1 ? Th(e) : null, s = Pr(e), i = Ir(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Nl(i);
    if (Vt(), s(), (a || e.sp) && !Dn(e) && Ec(e), a) {
      if (i.then(ta, ta), t)
        return i.then((l) => {
          na(e, l);
        }).catch((l) => {
          Ps(l, e, 0);
        });
      e.asyncDep = i;
    } else
      na(e, i);
  } else
    Kc(e);
}
function na(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = nc(t)), Kc(e);
}
function Kc(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ot);
  {
    const o = Pr(e);
    $t();
    try {
      Vd(e);
    } finally {
      Vt(), o();
    }
  }
}
const Sh = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function Th(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ds(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nc(ti(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cr)
        return cr[n](e);
    },
    has(t, n) {
      return n in t || n in cr;
    }
  })) : e.proxy;
}
function Ah(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wh(e) {
  return ne(e) && "__vccOpts" in e;
}
const Ce = (e, t) => md(e, t, Sr);
function Tr(e, t, n) {
  try {
    fs(-1);
    const r = arguments.length;
    return r === 2 ? ge(t) && !Q(t) ? vr(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && vr(n) && (n = [n]), Ie(e, t, n));
  } finally {
    fs(1);
  }
}
const Oh = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Lo;
const ra = typeof window < "u" && window.trustedTypes;
if (ra)
  try {
    Lo = /* @__PURE__ */ ra.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qc = Lo ? (e) => Lo.createHTML(e) : (e) => e, Lh = "http://www.w3.org/2000/svg", Ch = "http://www.w3.org/1998/Math/MathML", Pt = typeof document < "u" ? document : null, sa = Pt && /* @__PURE__ */ Pt.createElement("template"), Rh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Pt.createElementNS(Lh, e) : t === "mathml" ? Pt.createElementNS(Ch, e) : n ? Pt.createElement(e, { is: n }) : Pt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Pt.createTextNode(e),
  createComment: (e) => Pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pt.querySelector(e),
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
      sa.innerHTML = qc(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = sa.content;
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
}, Bt = "transition", Jn = "animation", Hn = /* @__PURE__ */ Symbol("_vtc"), zc = {
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
}, Gc = /* @__PURE__ */ Me(
  {},
  _c,
  zc
), Ih = (e) => (e.displayName = "Transition", e.props = Gc, e), s2 = /* @__PURE__ */ Ih(
  (e, { slots: t }) => Tr(Cd, Yc(e), t)
), fn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, oa = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Yc(e) {
  const t = {};
  for (const H in e)
    H in zc || (t[H] = e[H]);
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
  } = e, w = Nh(o), T = w && w[0], A = w && w[1], {
    onBeforeEnter: v,
    onEnter: M,
    onEnterCancelled: E,
    onLeave: y,
    onLeaveCancelled: N,
    onBeforeAppear: R = v,
    onAppear: U = M,
    onAppearCancelled: F = E
  } = t, I = (H, Z, se, ue) => {
    H._enterCancelled = ue, qt(H, Z ? c : a), qt(H, Z ? u : i), se && se();
  }, K = (H, Z) => {
    H._isLeaving = !1, qt(H, f), qt(H, b), qt(H, m), Z && Z();
  }, Y = (H) => (Z, se) => {
    const ue = H ? U : M, $ = () => I(Z, H, se);
    fn(ue, [Z, $]), ia(() => {
      qt(Z, H ? l : s), St(Z, H ? c : a), oa(ue) || aa(Z, r, T, $);
    });
  };
  return Me(t, {
    onBeforeEnter(H) {
      fn(v, [H]), St(H, s), St(H, i);
    },
    onBeforeAppear(H) {
      fn(R, [H]), St(H, l), St(H, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(H, Z) {
      H._isLeaving = !0;
      const se = () => K(H, Z);
      St(H, f), H._enterCancelled ? (St(H, m), Co(H)) : (Co(H), St(H, m)), ia(() => {
        H._isLeaving && (qt(H, f), St(H, b), oa(y) || aa(H, r, A, se));
      }), fn(y, [H, se]);
    },
    onEnterCancelled(H) {
      I(H, !1, void 0, !0), fn(E, [H]);
    },
    onAppearCancelled(H) {
      I(H, !0, void 0, !0), fn(F, [H]);
    },
    onLeaveCancelled(H) {
      K(H), fn(N, [H]);
    }
  });
}
function Nh(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [oo(e.enter), oo(e.leave)];
  {
    const t = oo(e);
    return [t, t];
  }
}
function oo(e) {
  return Mf(e);
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
}
function qt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Hn];
  n && (n.delete(t), n.size || (e[Hn] = void 0));
}
function ia(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ph = 0;
function aa(e, t, n, r) {
  const o = e._endId = ++Ph, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Xc(e, t);
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
function Xc(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), o = r(`${Bt}Delay`), s = r(`${Bt}Duration`), i = la(o, s), a = r(`${Jn}Delay`), l = r(`${Jn}Duration`), u = la(a, l);
  let c = null, f = 0, m = 0;
  t === Bt ? i > 0 && (c = Bt, f = i, m = s.length) : t === Jn ? u > 0 && (c = Jn, f = u, m = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Bt : Jn : null, m = c ? c === Bt ? s.length : l.length : 0);
  const b = c === Bt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Bt}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: m,
    hasTransform: b
  };
}
function la(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ca(n) + ca(e[r])));
}
function ca(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Co(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Mh(e, t, n) {
  const r = e[Hn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ms = /* @__PURE__ */ Symbol("_vod"), Jc = /* @__PURE__ */ Symbol("_vsh"), o2 = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ms] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Qn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Qn(e, !0), r.enter(e)) : r.leave(e, () => {
      Qn(e, !1);
    }) : Qn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qn(e, t);
  }
};
function Qn(e, t) {
  e.style.display = t ? e[ms] : "none", e[Jc] = !t;
}
const kh = /* @__PURE__ */ Symbol(""), xh = /(?:^|;)\s*display\s*:/;
function Dh(e, t, n) {
  const r = e.style, o = Oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Oe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && es(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && es(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), es(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[kh];
      i && (n += ";" + i), r.cssText = n, s = xh.test(n);
    }
  } else t && e.removeAttribute("style");
  ms in e && (e[ms] = s ? r.display : "", e[Jc] && (r.display = "none"));
}
const ua = /\s*!important$/;
function es(e, t, n) {
  if (Q(n))
    n.forEach((r) => es(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Fh(e, t);
    ua.test(n) ? e.setProperty(
      rn(r),
      n.replace(ua, ""),
      "important"
    ) : e[r] = n;
  }
}
const fa = ["Webkit", "Moz", "ms"], io = {};
function Fh(e, t) {
  const n = io[t];
  if (n)
    return n;
  let r = ut(t);
  if (r !== "filter" && r in e)
    return io[t] = r;
  r = ws(r);
  for (let o = 0; o < fa.length; o++) {
    const s = fa[o] + r;
    if (s in e)
      return io[t] = s;
  }
  return t;
}
const da = "http://www.w3.org/1999/xlink";
function ha(e, t, n, r, o, s = Hf(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(da, t.slice(6, t.length)) : e.setAttributeNS(da, t, n) : n == null || s && !xl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : _t(n) ? String(n) : n
  );
}
function ma(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qc(n) : n);
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
    a === "boolean" ? n = xl(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function Ft(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Uh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const pa = /* @__PURE__ */ Symbol("_vei");
function Hh(e, t, n, r, o = null) {
  const s = e[pa] || (e[pa] = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = $h(t);
    if (r) {
      const u = s[t] = Wh(
        r,
        o
      );
      Ft(e, a, u, l);
    } else i && (Uh(e, a, i, l), s[t] = void 0);
  }
}
const _a = /(?:Once|Passive|Capture)$/;
function $h(e) {
  let t;
  if (_a.test(e)) {
    t = {};
    let r;
    for (; r = e.match(_a); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : rn(e.slice(2)), t];
}
let ao = 0;
const Vh = /* @__PURE__ */ Promise.resolve(), jh = () => ao || (Vh.then(() => ao = 0), ao = Date.now());
function Wh(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    bt(
      Bh(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = jh(), n;
}
function Bh(e, t) {
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
const ga = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kh = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? Mh(e, r, i) : t === "style" ? Dh(e, n, r) : Ss(t) ? Ko(t) || Hh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qh(e, t, r, i)) ? (ma(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ha(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? ma(e, ut(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ha(e, t, r, i));
};
function qh(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ga(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ga(t) && Oe(n) ? !1 : t in e;
}
const Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ Symbol("_moveCb"), ba = /* @__PURE__ */ Symbol("_enterCb"), zh = (e) => (delete e.props.mode, e), Gh = /* @__PURE__ */ zh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Me({}, Gc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Ct(), r = pc();
    let o, s;
    return Tc(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Zh(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(Xh), o.forEach(Jh);
      const a = o.filter(Qh);
      Co(n.vnode.el), a.forEach((l) => {
        const u = l.el, c = u.style;
        St(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[ps] = (m) => {
          m && m.target !== u || (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ps] = null, qt(u, i));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const i = ce(e), a = Yc(i);
      let l = i.tag || ke;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Tn(
            c,
            yr(
              c,
              a,
              r,
              n
            )
          ), Qc.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? oi(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Tn(
          c,
          yr(c, a, r, n)
        );
      }
      return Ie(l, null, s);
    };
  }
}), Yh = Gh;
function Xh(e) {
  const t = e.el;
  t[ps] && t[ps](), t[ba] && t[ba]();
}
function Jh(e) {
  Zc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Qh(e) {
  const t = Qc.get(e), n = Zc.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function Zh(e, t, n) {
  const r = e.cloneNode(), o = e[Hn];
  o && o.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Xc(r);
  return s.removeChild(r), i;
}
const tn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Xr(t, n) : t;
};
function em(e) {
  e.target.composing = !0;
}
function ya(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ct = /* @__PURE__ */ Symbol("_assign");
function Ea(e, t, n) {
  return t && (e = e.trim()), n && (e = Os(e)), e;
}
const i2 = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ct] = tn(o);
    const s = r || o.props && o.props.type === "number";
    Ft(e, t ? "change" : "input", (i) => {
      i.target.composing || e[ct](Ea(e.value, n, s));
    }), (n || s) && Ft(e, "change", () => {
      e.value = Ea(e.value, n, s);
    }), t || (Ft(e, "compositionstart", em), Ft(e, "compositionend", ya), Ft(e, "change", ya));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[ct] = tn(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Os(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, a2 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ct] = tn(n), Ft(e, "change", () => {
      const r = e._modelValue, o = $n(e), s = e.checked, i = e[ct];
      if (Q(r)) {
        const a = zo(r, o), l = a !== -1;
        if (s && !l)
          i(r.concat(o));
        else if (!s && l) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (Kn(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(eu(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: va,
  beforeUpdate(e, t, n) {
    e[ct] = tn(n), va(e, t, n);
  }
};
function va(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let o;
  if (Q(t))
    o = zo(t, r.props.value) > -1;
  else if (Kn(t))
    o = t.has(r.props.value);
  else {
    if (t === n) return;
    o = Sn(t, eu(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const l2 = {
  created(e, { value: t }, n) {
    e.checked = Sn(t, n.props.value), e[ct] = tn(n), Ft(e, "change", () => {
      e[ct]($n(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[ct] = tn(r), t !== n && (e.checked = Sn(t, r.props.value));
  }
}, c2 = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = Kn(t);
    Ft(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Os($n(i)) : $n(i)
      );
      e[ct](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, ri(() => {
        e._assigning = !1;
      });
    }), e[ct] = tn(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Sa(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ct] = tn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Sa(e, t);
  }
};
function Sa(e, t) {
  const n = e.multiple, r = Q(t);
  if (!(n && !r && !Kn(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const i = e.options[o], a = $n(i);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = zo(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (Sn($n(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $n(e) {
  return "_value" in e ? e._value : e.value;
}
function eu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const tm = ["ctrl", "shift", "alt", "meta"], nm = {
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
  exact: (e, t) => tm.some((n) => e[`${n}Key`] && !t.includes(n))
}, u2 = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = nm[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  }));
}, rm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, f2 = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = rn(o.key);
    if (t.some(
      (i) => i === s || rm[i] === s
    ))
      return e(o);
  }));
}, sm = /* @__PURE__ */ Me({ patchProp: Kh }, Rh);
let Ta;
function om() {
  return Ta || (Ta = ah(sm));
}
const im = ((...e) => {
  const t = om().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = lm(r);
    if (!o) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, am(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function am(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lm(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let tu;
const Fs = (e) => tu = e, nu = (
  /* istanbul ignore next */
  Symbol()
);
function Ro(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var fr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(fr || (fr = {}));
function cm() {
  const e = Go(!0), t = e.run(() => le({}));
  let n = [], r = [];
  const o = ti({
    install(s) {
      Fs(o), o._a = s, s.provide(nu, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
const ru = () => {
};
function Aa(e, t, n, r = ru) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Hl() && Vf(o), o;
}
function Ln(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const um = (e) => e(), wa = Symbol(), lo = Symbol();
function Io(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Ro(o) && Ro(r) && e.hasOwnProperty(n) && !we(r) && !Ht(r) ? e[n] = Io(o, r) : e[n] = r;
  }
  return e;
}
const fm = (
  /* istanbul ignore next */
  Symbol()
);
function dm(e) {
  return !Ro(e) || !e.hasOwnProperty(fm);
}
const { assign: zt } = Object;
function hm(e) {
  return !!(we(e) && e.effect);
}
function mm(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = ud(n.state.value[e]);
    return zt(c, s, Object.keys(i || {}).reduce((f, m) => (f[m] = ti(Ce(() => {
      Fs(n);
      const b = n._s.get(e);
      return i[m].call(b, b);
    })), f), {}));
  }
  return l = su(e, u, t, n, r, !0), l;
}
function su(e, t, n = {}, r, o, s) {
  let i;
  const a = zt({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], m = [], b;
  const w = r.state.value[e];
  !s && !w && (r.state.value[e] = {}), le({});
  let T;
  function A(F) {
    let I;
    u = c = !1, typeof F == "function" ? (F(r.state.value[e]), I = {
      type: fr.patchFunction,
      storeId: e,
      events: b
    }) : (Io(r.state.value[e], F), I = {
      type: fr.patchObject,
      payload: F,
      storeId: e,
      events: b
    });
    const K = T = Symbol();
    ri().then(() => {
      T === K && (u = !0);
    }), c = !0, Ln(f, I, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: I } = n, K = I ? I() : {};
    this.$patch((Y) => {
      zt(Y, K);
    });
  } : (
    /* istanbul ignore next */
    ru
  );
  function M() {
    i.stop(), f = [], m = [], r._s.delete(e);
  }
  const E = (F, I = "") => {
    if (wa in F)
      return F[lo] = I, F;
    const K = function() {
      Fs(r);
      const Y = Array.from(arguments), H = [], Z = [];
      function se(B) {
        H.push(B);
      }
      function ue(B) {
        Z.push(B);
      }
      Ln(m, {
        args: Y,
        name: K[lo],
        store: N,
        after: se,
        onError: ue
      });
      let $;
      try {
        $ = F.apply(this && this.$id === e ? this : N, Y);
      } catch (B) {
        throw Ln(Z, B), B;
      }
      return $ instanceof Promise ? $.then((B) => (Ln(H, B), B)).catch((B) => (Ln(Z, B), Promise.reject(B))) : (Ln(H, $), $);
    };
    return K[wa] = !0, K[lo] = I, K;
  }, y = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Aa.bind(null, m),
    $patch: A,
    $reset: v,
    $subscribe(F, I = {}) {
      const K = Aa(f, F, I.detached, () => Y()), Y = i.run(() => yn(() => r.state.value[e], (H) => {
        (I.flush === "sync" ? c : u) && F({
          storeId: e,
          type: fr.direct,
          events: b
        }, H);
      }, zt({}, l, I)));
      return K;
    },
    $dispose: M
  }, N = Is(y);
  r._s.set(e, N);
  const U = (r._a && r._a.runWithContext || um)(() => r._e.run(() => (i = Go()).run(() => t({ action: E }))));
  for (const F in U) {
    const I = U[F];
    if (we(I) && !hm(I) || Ht(I))
      s || (w && dm(I) && (we(I) ? I.value = w[F] : Io(I, w[F])), r.state.value[e][F] = I);
    else if (typeof I == "function") {
      const K = E(I, F);
      U[F] = K, a.actions[F] = I;
    }
  }
  return zt(N, U), zt(ce(N), U), Object.defineProperty(N, "$state", {
    get: () => r.state.value[e],
    set: (F) => {
      A((I) => {
        zt(I, F);
      });
    }
  }), r._p.forEach((F) => {
    zt(N, i.run(() => F({
      store: N,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), w && s && n.hydrate && n.hydrate(N.$state, w), u = !0, c = !0, N;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ou(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function i(a, l) {
    const u = vd();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? xn(nu, null) : null), a && Fs(a), a = tu, a._s.has(r) || (s ? su(r, t, o, a) : mm(r, o, a)), a._s.get(r);
  }
  return i.$id = r, i;
}
const pm = ["stroke-width"], _m = ["d"], Oa = /* @__PURE__ */ qn({
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
    }, r = Ce(() => n[t.name]), o = Ce(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (s, i) => (Dt(), rr("svg", {
      class: Qt(o.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      ht("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, _m)
    ], 10, pm));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gm(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const _s = typeof window < "u", sn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), bm = (e, t, n) => ym({ l: e, k: t, s: n }), ym = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Re = (e) => typeof e == "number" && isFinite(e), Em = (e) => au(e) === "[object Date]", nn = (e) => au(e) === "[object RegExp]", Us = (e) => te(e) && Object.keys(e).length === 0, $e = Object.assign, vm = Object.create, _e = (e = null) => vm(e);
let La;
const _n = () => La || (La = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function Ca(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ra(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Sm(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Ra(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Ra(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Tm = Object.prototype.hasOwnProperty;
function mt(e, t) {
  return Tm.call(e, t);
}
const ve = Array.isArray, ye = (e) => typeof e == "function", G = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", fe = (e) => e !== null && typeof e == "object", Am = (e) => fe(e) && ye(e.then) && ye(e.catch), iu = Object.prototype.toString, au = (e) => iu.call(e), te = (e) => {
  if (!fe(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, wm = (e) => e == null ? "" : ve(e) || te(e) && e.toString === iu ? JSON.stringify(e, null, 2) : String(e);
function Om(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function Hs(e) {
  let t = e;
  return () => ++t;
}
const jr = (e) => !fe(e) || ve(e);
function ts(e, t) {
  if (jr(e) || jr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (fe(r[s]) && !fe(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : _e()), jr(o[s]) || jr(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Lm(e, t, n) {
  return { line: e, column: t, offset: n };
}
function gs(e, t, n) {
  return { start: e, end: t };
}
const Cm = /\{([0-9a-zA-Z]+)\}/g;
function lu(e, ...t) {
  return t.length === 1 && Rm(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Cm, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const cu = Object.assign, Ia = (e) => typeof e == "string", Rm = (e) => e !== null && typeof e == "object";
function uu(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const di = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Im = {
  [di.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Nm(e, t, ...n) {
  const r = lu(Im[e], ...n || []), o = { message: String(r), code: e };
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
}, Pm = {
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
function zn(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, i = lu((o || Pm)[e] || "", ...s || []), a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a;
}
function Mm(e) {
  throw e;
}
const It = " ", km = "\r", Qe = `
`, xm = "\u2028", Dm = "\u2029";
function Fm(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const i = (U) => t[U] === km && t[U + 1] === Qe, a = (U) => t[U] === Qe, l = (U) => t[U] === Dm, u = (U) => t[U] === xm, c = (U) => i(U) || a(U) || l(U) || u(U), f = () => n, m = () => r, b = () => o, w = () => s, T = (U) => i(U) || l(U) || u(U) ? Qe : t[U], A = () => T(n), v = () => T(n + s);
  function M() {
    return s = 0, c(n) && (r++, o = 0), i(n) && n++, n++, o++, t[n];
  }
  function E() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function y() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function N(U = 0) {
    s = U;
  }
  function R() {
    const U = n + s;
    for (; U !== n; )
      M();
    s = 0;
  }
  return {
    index: f,
    line: m,
    column: b,
    peekOffset: w,
    charAt: T,
    currentChar: A,
    currentPeek: v,
    next: M,
    peek: E,
    reset: y,
    resetPeek: N,
    skipToPeek: R
  };
}
const Kt = void 0, Um = ".", Na = "'", Hm = "tokenizer";
function $m(e, t = {}) {
  const n = t.location !== !1, r = Fm(e), o = () => r.index(), s = () => Lm(r.line(), r.column(), r.index()), i = s(), a = o(), l = {
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
    const q = u();
    if (h.column += O, h.offset += O, c) {
      const j = n ? gs(q.startLoc, h) : null, C = zn(d, j, {
        domain: Hm,
        args: x
      });
      c(C);
    }
  }
  function m(d, h, O) {
    d.endLoc = s(), d.currentType = h;
    const x = { type: h };
    return n && (x.loc = gs(d.startLoc, d.endLoc)), O != null && (x.value = O), x;
  }
  const b = (d) => m(
    d,
    14
    /* TokenTypes.EOF */
  );
  function w(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (f(ee.EXPECTED_TOKEN, s(), 0, h), "");
  }
  function T(d) {
    let h = "";
    for (; d.currentPeek() === It || d.currentPeek() === Qe; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function A(d) {
    const h = T(d);
    return d.skipToPeek(), h;
  }
  function v(d) {
    if (d === Kt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function M(d) {
    if (d === Kt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function E(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    T(d);
    const x = v(d.currentPeek());
    return d.resetPeek(), x;
  }
  function y(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    T(d);
    const x = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), q = M(x);
    return d.resetPeek(), q;
  }
  function N(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    T(d);
    const x = d.currentPeek() === Na;
    return d.resetPeek(), x;
  }
  function R(d, h) {
    const { currentType: O } = h;
    if (O !== 8)
      return !1;
    T(d);
    const x = d.currentPeek() === ".";
    return d.resetPeek(), x;
  }
  function U(d, h) {
    const { currentType: O } = h;
    if (O !== 9)
      return !1;
    T(d);
    const x = v(d.currentPeek());
    return d.resetPeek(), x;
  }
  function F(d, h) {
    const { currentType: O } = h;
    if (!(O === 8 || O === 12))
      return !1;
    T(d);
    const x = d.currentPeek() === ":";
    return d.resetPeek(), x;
  }
  function I(d, h) {
    const { currentType: O } = h;
    if (O !== 10)
      return !1;
    const x = () => {
      const j = d.currentPeek();
      return j === "{" ? v(d.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === It || !j ? !1 : j === Qe ? (d.peek(), x()) : H(d, !1);
    }, q = x();
    return d.resetPeek(), q;
  }
  function K(d) {
    T(d);
    const h = d.currentPeek() === "|";
    return d.resetPeek(), h;
  }
  function Y(d) {
    const h = T(d), O = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: O,
      hasSpace: h.length > 0
    };
  }
  function H(d, h = !0) {
    const O = (q = !1, j = "", C = !1) => {
      const D = d.currentPeek();
      return D === "{" ? j === "%" ? !1 : q : D === "@" || !D ? j === "%" ? !0 : q : D === "%" ? (d.peek(), O(q, "%", !0)) : D === "|" ? j === "%" || C ? !0 : !(j === It || j === Qe) : D === It ? (d.peek(), O(!0, It, C)) : D === Qe ? (d.peek(), O(!0, Qe, C)) : !0;
    }, x = O();
    return h && d.resetPeek(), x;
  }
  function Z(d, h) {
    const O = d.currentChar();
    return O === Kt ? Kt : h(O) ? (d.next(), O) : null;
  }
  function se(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function ue(d) {
    return Z(d, se);
  }
  function $(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function B(d) {
    return Z(d, $);
  }
  function J(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function Ee(d) {
    return Z(d, J);
  }
  function Se(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function re(d) {
    return Z(d, Se);
  }
  function he(d) {
    let h = "", O = "";
    for (; h = Ee(d); )
      O += h;
    return O;
  }
  function Ne(d) {
    A(d);
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
      else if (O === It || O === Qe)
        if (H(d))
          h += O, d.next();
        else {
          if (K(d))
            break;
          h += O, d.next();
        }
      else
        h += O, d.next();
    }
    return h;
  }
  function it(d) {
    A(d);
    let h = "", O = "";
    for (; h = B(d); )
      O += h;
    return d.currentChar() === Kt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O;
  }
  function oe(d) {
    A(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${he(d)}`) : h += he(d), d.currentChar() === Kt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h;
  }
  function Te(d) {
    return d !== Na && d !== Qe;
  }
  function je(d) {
    A(d), w(d, "'");
    let h = "", O = "";
    for (; h = Z(d, Te); )
      h === "\\" ? O += Ye(d) : O += h;
    const x = d.currentChar();
    return x === Qe || x === Kt ? (f(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), x === Qe && (d.next(), w(d, "'")), O) : (w(d, "'"), O);
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
    w(d, h);
    let x = "";
    for (let q = 0; q < O; q++) {
      const j = re(d);
      if (!j) {
        f(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${h}${x}${d.currentChar()}`);
        break;
      }
      x += j;
    }
    return `\\${h}${x}`;
  }
  function ft(d) {
    return d !== "{" && d !== "}" && d !== It && d !== Qe;
  }
  function p(d) {
    A(d);
    let h = "", O = "";
    for (; h = Z(d, ft); )
      O += h;
    return O;
  }
  function g(d) {
    let h = "", O = "";
    for (; h = ue(d); )
      O += h;
    return O;
  }
  function _(d) {
    const h = (O) => {
      const x = d.currentChar();
      return x === "{" || x === "%" || x === "@" || x === "|" || x === "(" || x === ")" || !x || x === It ? O : (O += x, d.next(), h(O));
    };
    return h("");
  }
  function P(d) {
    A(d);
    const h = w(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return A(d), h;
  }
  function L(d, h) {
    let O = null;
    switch (d.currentChar()) {
      case "{":
        return h.braceNest >= 1 && f(ee.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), O = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(d), h.braceNest++, O;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && f(ee.EMPTY_PLACEHOLDER, s(), 0), d.next(), O = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && A(d), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), O;
      case "@":
        return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O = k(d, h) || b(h), h.braceNest = 0, O;
      default: {
        let q = !0, j = !0, C = !0;
        if (K(d))
          return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O = m(h, 1, P(d)), h.braceNest = 0, h.inLinked = !1, O;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h.braceNest = 0, W(d, h);
        if (q = E(d, h))
          return O = m(h, 5, it(d)), A(d), O;
        if (j = y(d, h))
          return O = m(h, 6, oe(d)), A(d), O;
        if (C = N(d, h))
          return O = m(h, 7, je(d)), A(d), O;
        if (!q && !j && !C)
          return O = m(h, 13, p(d)), f(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, O.value), A(d), O;
        break;
      }
    }
    return O;
  }
  function k(d, h) {
    const { currentType: O } = h;
    let x = null;
    const q = d.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (q === Qe || q === It) && f(ee.INVALID_LINKED_FORMAT, s(), 0), q) {
      case "@":
        return d.next(), x = m(
          h,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, x;
      case ".":
        return A(d), d.next(), m(
          h,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(d), d.next(), m(
          h,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(d) ? (x = m(h, 1, P(d)), h.braceNest = 0, h.inLinked = !1, x) : R(d, h) || F(d, h) ? (A(d), k(d, h)) : U(d, h) ? (A(d), m(h, 12, g(d))) : I(d, h) ? (A(d), q === "{" ? L(d, h) || x : m(h, 11, _(d))) : (O === 8 && f(ee.INVALID_LINKED_FORMAT, s(), 0), h.braceNest = 0, h.inLinked = !1, W(d, h));
    }
  }
  function W(d, h) {
    let O = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return L(d, h) || b(h);
    if (h.inLinked)
      return k(d, h) || b(h);
    switch (d.currentChar()) {
      case "{":
        return L(d, h) || b(h);
      case "}":
        return f(ee.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return k(d, h) || b(h);
      default: {
        if (K(d))
          return O = m(h, 1, P(d)), h.braceNest = 0, h.inLinked = !1, O;
        const { isModulo: q, hasSpace: j } = Y(d);
        if (q)
          return j ? m(h, 0, Ve(d)) : m(h, 4, Ne(d));
        if (H(d))
          return m(h, 0, Ve(d));
        break;
      }
    }
    return O;
  }
  function V() {
    const { currentType: d, offset: h, startLoc: O, endLoc: x } = l;
    return l.lastType = d, l.lastOffset = h, l.lastStartLoc = O, l.lastEndLoc = x, l.offset = o(), l.startLoc = s(), r.currentChar() === Kt ? m(
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
const Vm = "parser", jm = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Wm(e, t, n) {
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
function Bm(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(E, y, N, R, ...U) {
    const F = E.currentPosition();
    if (F.offset += R, F.column += R, n) {
      const I = t ? gs(N, F) : null, K = zn(y, I, {
        domain: Vm,
        args: U
      });
      n(K);
    }
  }
  function s(E, y, N, R, ...U) {
    const F = E.currentPosition();
    if (F.offset += R, F.column += R, r) {
      const I = t ? gs(N, F) : null;
      r(Nm(y, I, U));
    }
  }
  function i(E, y, N) {
    const R = { type: E };
    return t && (R.start = y, R.end = y, R.loc = { start: N, end: N }), R;
  }
  function a(E, y, N, R) {
    t && (E.end = y, E.loc && (E.loc.end = N));
  }
  function l(E, y) {
    const N = E.context(), R = i(3, N.offset, N.startLoc);
    return R.value = y, a(R, E.currentOffset(), E.currentPosition()), R;
  }
  function u(E, y) {
    const N = E.context(), { lastOffset: R, lastStartLoc: U } = N, F = i(5, R, U);
    return F.index = parseInt(y, 10), E.nextToken(), a(F, E.currentOffset(), E.currentPosition()), F;
  }
  function c(E, y, N) {
    const R = E.context(), { lastOffset: U, lastStartLoc: F } = R, I = i(4, U, F);
    return I.key = y, N === !0 && (I.modulo = !0), E.nextToken(), a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function f(E, y) {
    const N = E.context(), { lastOffset: R, lastStartLoc: U } = N, F = i(9, R, U);
    return F.value = y.replace(jm, Wm), E.nextToken(), a(F, E.currentOffset(), E.currentPosition()), F;
  }
  function m(E) {
    const y = E.nextToken(), N = E.context(), { lastOffset: R, lastStartLoc: U } = N, F = i(8, R, U);
    return y.type !== 12 ? (o(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), F.value = "", a(F, R, U), {
      nextConsumeToken: y,
      node: F
    }) : (y.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(y)), F.value = y.value || "", a(F, E.currentOffset(), E.currentPosition()), {
      node: F
    });
  }
  function b(E, y) {
    const N = E.context(), R = i(7, N.offset, N.startLoc);
    return R.value = y, a(R, E.currentOffset(), E.currentPosition()), R;
  }
  function w(E) {
    const y = E.context(), N = i(6, y.offset, y.startLoc);
    let R = E.nextToken();
    if (R.type === 9) {
      const U = m(E);
      N.modifier = U.node, R = U.nextConsumeToken || E.nextToken();
    }
    switch (R.type !== 10 && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), R = E.nextToken(), R.type === 2 && (R = E.nextToken()), R.type) {
      case 11:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), N.key = b(E, R.value || "");
        break;
      case 5:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), N.key = c(E, R.value || "");
        break;
      case 6:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), N.key = u(E, R.value || "");
        break;
      case 7:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), N.key = f(E, R.value || "");
        break;
      default: {
        o(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const U = E.context(), F = i(7, U.offset, U.startLoc);
        return F.value = "", a(F, U.offset, U.startLoc), N.key = F, a(N, U.offset, U.startLoc), {
          nextConsumeToken: R,
          node: N
        };
      }
    }
    return a(N, E.currentOffset(), E.currentPosition()), {
      node: N
    };
  }
  function T(E) {
    const y = E.context(), N = y.currentType === 1 ? E.currentOffset() : y.offset, R = y.currentType === 1 ? y.endLoc : y.startLoc, U = i(2, N, R);
    U.items = [];
    let F = null, I = null;
    do {
      const H = F || E.nextToken();
      switch (F = null, H.type) {
        case 0:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(l(E, H.value || ""));
          break;
        case 6:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(u(E, H.value || ""));
          break;
        case 4:
          I = !0;
          break;
        case 5:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(c(E, H.value || "", !!I)), I && (s(E, di.USE_MODULO_SYNTAX, y.lastStartLoc, 0, dt(H)), I = null);
          break;
        case 7:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(f(E, H.value || ""));
          break;
        case 8: {
          const Z = w(E);
          U.items.push(Z.node), F = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const K = y.currentType === 1 ? y.lastOffset : E.currentOffset(), Y = y.currentType === 1 ? y.lastEndLoc : E.currentPosition();
    return a(U, K, Y), U;
  }
  function A(E, y, N, R) {
    const U = E.context();
    let F = R.items.length === 0;
    const I = i(1, y, N);
    I.cases = [], I.cases.push(R);
    do {
      const K = T(E);
      F || (F = K.items.length === 0), I.cases.push(K);
    } while (U.currentType !== 14);
    return F && o(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function v(E) {
    const y = E.context(), { offset: N, startLoc: R } = y, U = T(E);
    return y.currentType === 14 ? U : A(E, N, R, U);
  }
  function M(E) {
    const y = $m(E, cu({}, e)), N = y.context(), R = i(0, N.offset, N.startLoc);
    return t && R.loc && (R.loc.source = E), R.body = v(y), e.onCacheKey && (R.cacheKey = e.onCacheKey(E)), N.currentType !== 14 && o(y, ee.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, E[N.offset] || ""), a(R, y.currentOffset(), y.currentPosition()), R;
  }
  return { parse: M };
}
function dt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Km(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Pa(e, t) {
  for (let n = 0; n < e.length; n++)
    hi(e[n], t);
}
function hi(e, t) {
  switch (e.type) {
    case 1:
      Pa(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Pa(e.items, t);
      break;
    case 6: {
      hi(e.key, t), t.helper(
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
function qm(e, t = {}) {
  const n = Km(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && hi(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function zm(e) {
  const t = e.body;
  return t.type === 2 ? Ma(t) : t.cases.forEach((n) => Ma(n)), e;
}
function Ma(e) {
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
      e.static = uu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Gm = "minifier";
function Nn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Nn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Nn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Nn(n[r]);
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
      Nn(t.key), t.k = t.key, delete t.key, t.modifier && (Nn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw zn(ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Gm,
        args: [e.type]
      });
  }
  delete e.type;
}
const Ym = "parser";
function Xm(e, t) {
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
  function l(T, A) {
    i.code += T;
  }
  function u(T, A = !0) {
    const v = A ? r : "";
    l(o ? v + "  ".repeat(T) : v);
  }
  function c(T = !0) {
    const A = ++i.indentLevel;
    T && u(A);
  }
  function f(T = !0) {
    const A = --i.indentLevel;
    T && u(A);
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
    helper: (T) => `_${T}`,
    needIndent: () => i.needIndent
  };
}
function Jm(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Vn(e, t.key), t.modifier ? (e.push(", "), Vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Qm(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (Vn(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Zm(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (Vn(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function e0(e, t) {
  t.body ? Vn(e, t.body) : e.push("null");
}
function Vn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      e0(e, t);
      break;
    case 1:
      Zm(e, t);
      break;
    case 2:
      Qm(e, t);
      break;
    case 6:
      Jm(e, t);
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
      throw zn(ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Ym,
        args: [t.type]
      });
  }
}
const t0 = (e, t = {}) => {
  const n = Ia(t.mode) ? t.mode : "normal", r = Ia(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], a = Xm(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(s), i.length > 0 && (a.push(`const { ${uu(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), a.newline()), a.push("return "), Vn(a, e), a.deindent(s), a.push("}"), delete e.helpers;
  const { code: l, map: u } = a.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function n0(e, t = {}) {
  const n = cu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = Bm(n).parse(e);
  return r ? (s && zm(a), o && Nn(a), { ast: a, code: "" }) : (qm(a, n), t0(a, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function r0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_n().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Lt(e) {
  return fe(e) && mi(e) === 0 && (mt(e, "b") || mt(e, "body"));
}
const fu = ["b", "body"];
function s0(e) {
  return on(e, fu);
}
const du = ["c", "cases"];
function o0(e) {
  return on(e, du, []);
}
const hu = ["s", "static"];
function i0(e) {
  return on(e, hu);
}
const mu = ["i", "items"];
function a0(e) {
  return on(e, mu, []);
}
const pu = ["t", "type"];
function mi(e) {
  return on(e, pu);
}
const _u = ["v", "value"];
function Wr(e, t) {
  const n = on(e, _u);
  if (n != null)
    return n;
  throw Ar(t);
}
const gu = ["m", "modifier"];
function l0(e) {
  return on(e, gu);
}
const bu = ["k", "key"];
function c0(e) {
  const t = on(e, bu);
  if (t)
    return t;
  throw Ar(
    6
    /* NodeTypes.Linked */
  );
}
function on(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (mt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const yu = [
  ...fu,
  ...du,
  ...hu,
  ...mu,
  ...bu,
  ...gu,
  ..._u,
  ...pu
];
function Ar(e) {
  return new Error(`unhandled node type: ${e}`);
}
const an = [];
an[
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
an[
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
an[
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
an[
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
an[
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
an[
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
an[
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
const u0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function f0(e) {
  return u0.test(e);
}
function d0(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function h0(e) {
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
function m0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : f0(t) ? d0(t) : "*" + t;
}
function p0(e) {
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
      if (o = 0, i === void 0 || (i = m0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, a = "\\" + w, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && b())) {
      if (l = h0(s), f = an[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (a = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ka = /* @__PURE__ */ new Map();
function _0(e, t) {
  return fe(e) ? e[t] : null;
}
function g0(e, t) {
  if (!fe(e))
    return null;
  let n = ka.get(t);
  if (n || (n = p0(t), n && ka.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const i = n[s];
    if (yu.includes(i) && Lt(o))
      return null;
    const a = o[i];
    if (a === void 0 || ye(o))
      return null;
    o = a, s++;
  }
  return o;
}
const b0 = (e) => e, y0 = (e) => "", E0 = "text", v0 = (e) => e.length === 0 ? "" : Om(e), S0 = wm;
function xa(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function T0(e) {
  const t = Re(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Re(e.named.count) || Re(e.named.n)) ? Re(e.named.count) ? e.named.count : Re(e.named.n) ? e.named.n : t : t;
}
function A0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function w0(e = {}) {
  const t = e.locale, n = T0(e), r = fe(e.pluralRules) && G(t) && ye(e.pluralRules[t]) ? e.pluralRules[t] : xa, o = fe(e.pluralRules) && G(t) && ye(e.pluralRules[t]) ? xa : void 0, s = (v) => v[r(n, v.length, o)], i = e.list || [], a = (v) => i[v], l = e.named || _e();
  Re(e.pluralIndex) && A0(n, l);
  const u = (v) => l[v];
  function c(v) {
    const M = ye(e.messages) ? e.messages(v) : fe(e.messages) ? e.messages[v] : !1;
    return M || (e.parent ? e.parent.message(v) : y0);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : b0, m = te(e.processor) && ye(e.processor.normalize) ? e.processor.normalize : v0, b = te(e.processor) && ye(e.processor.interpolate) ? e.processor.interpolate : S0, w = te(e.processor) && G(e.processor.type) ? e.processor.type : E0, A = {
    list: a,
    named: u,
    plural: s,
    linked: (v, ...M) => {
      const [E, y] = M;
      let N = "text", R = "";
      M.length === 1 ? fe(E) ? (R = E.modifier || R, N = E.type || N) : G(E) && (R = E || R) : M.length === 2 && (G(E) && (R = E || R), G(y) && (N = y || N));
      const U = c(v)(A), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && ve(U) && R ? U[0] : U
      );
      return R ? f(R)(F, N) : F;
    },
    message: c,
    type: w,
    interpolate: b,
    normalize: m,
    values: $e(_e(), i, l)
  };
  return A;
}
let wr = null;
function O0(e) {
  wr = e;
}
function L0(e, t, n) {
  wr && wr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const C0 = /* @__PURE__ */ R0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function R0(e) {
  return (t) => wr && wr.emit(e, t);
}
const I0 = di.__EXTEND_POINT__, dn = Hs(I0), N0 = {
  // 2
  FALLBACK_TO_TRANSLATE: dn(),
  // 3
  CANNOT_FORMAT_NUMBER: dn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: dn(),
  // 5
  CANNOT_FORMAT_DATE: dn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: dn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: dn(),
  // 8
  __EXTEND_POINT__: dn()
  // 9
}, Eu = ee.__EXTEND_POINT__, hn = Hs(Eu), wt = {
  INVALID_ARGUMENT: Eu,
  // 17
  INVALID_DATE_ARGUMENT: hn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: hn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: hn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: hn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: hn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: hn(),
  // 23
  __EXTEND_POINT__: hn()
  // 24
};
function Ut(e) {
  return zn(e, null, void 0);
}
function pi(e, t) {
  return t.locale != null ? Da(t.locale) : Da(e.locale);
}
let co;
function Da(e) {
  if (G(e))
    return e;
  if (ye(e)) {
    if (e.resolvedOnce && co != null)
      return co;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Am(t))
        throw Ut(wt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return co = t;
    } else
      throw Ut(wt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ut(wt.NOT_SUPPORT_LOCALE_TYPE);
}
function P0(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ve(t) ? t : fe(t) ? Object.keys(t) : G(t) ? [t] : [n]
  ])];
}
function vu(e, t, n) {
  const r = G(n) ? n : jn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; ve(i); )
      i = Fa(s, i, t);
    const a = ve(t) || !te(t) ? t : t.default ? t.default : null;
    i = G(a) ? [a] : a, ve(i) && Fa(s, i, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function Fa(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ie(r); o++) {
    const s = t[o];
    G(s) && (r = M0(e, t[o], n));
  }
  return r;
}
function M0(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = k0(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function k0(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ve(n) || te(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const x0 = "9.14.5", $s = -1, jn = "en-US", Ua = "", Ha = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function D0() {
  return {
    upper: (e, t) => t === "text" && G(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && G(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && G(e) ? Ha(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? Ha(e.children) : e
  };
}
let Su;
function F0(e) {
  Su = e;
}
let Tu;
function U0(e) {
  Tu = e;
}
let Au;
function H0(e) {
  Au = e;
}
let wu = null;
const $0 = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  wu = e;
}, V0 = /* @__NO_SIDE_EFFECTS__ */ () => wu;
let Ou = null;
const $a = (e) => {
  Ou = e;
}, j0 = () => Ou;
let Va = 0;
function W0(e = {}) {
  const t = ye(e.onWarn) ? e.onWarn : gm, n = G(e.version) ? e.version : x0, r = G(e.locale) || ye(e.locale) ? e.locale : jn, o = ye(r) ? jn : r, s = ve(e.fallbackLocale) || te(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, i = te(e.messages) ? e.messages : uo(o), a = te(e.datetimeFormats) ? e.datetimeFormats : uo(o), l = te(e.numberFormats) ? e.numberFormats : uo(o), u = $e(_e(), e.modifiers, D0()), c = e.pluralRules || _e(), f = ye(e.missing) ? e.missing : null, m = ie(e.missingWarn) || nn(e.missingWarn) ? e.missingWarn : !0, b = ie(e.fallbackWarn) || nn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, T = !!e.unresolving, A = ye(e.postTranslation) ? e.postTranslation : null, v = te(e.processor) ? e.processor : null, M = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = ye(e.messageCompiler) ? e.messageCompiler : Su, N = ye(e.messageResolver) ? e.messageResolver : Tu || _0, R = ye(e.localeFallbacker) ? e.localeFallbacker : Au || P0, U = fe(e.fallbackContext) ? e.fallbackContext : void 0, F = e, I = fe(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), K = fe(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), Y = fe(F.__meta) ? F.__meta : {};
  Va++;
  const H = {
    version: n,
    cid: Va,
    locale: r,
    fallbackLocale: s,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: m,
    fallbackWarn: b,
    fallbackFormat: w,
    unresolving: T,
    postTranslation: A,
    processor: v,
    warnHtmlMessage: M,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: N,
    localeFallbacker: R,
    fallbackContext: U,
    onWarn: t,
    __meta: Y
  };
  return H.datetimeFormats = a, H.numberFormats = l, H.__datetimeFormatters = I, H.__numberFormatters = K, __INTLIFY_PROD_DEVTOOLS__ && L0(H, n, Y), H;
}
const uo = (e) => ({ [e]: _e() });
function _i(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  if (s !== null) {
    const a = s(e, n, t, o);
    return G(a) ? a : t;
  } else
    return t;
}
function Zn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function B0(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function K0(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (B0(e, t[r]))
      return !0;
  return !1;
}
function fo(e) {
  return (n) => q0(n, e);
}
function q0(e, t) {
  const n = s0(t);
  if (n == null)
    throw Ar(
      0
      /* NodeTypes.Resource */
    );
  if (mi(n) === 1) {
    const s = o0(n);
    return e.plural(s.reduce((i, a) => [
      ...i,
      ja(e, a)
    ], []));
  } else
    return ja(e, n);
}
function ja(e, t) {
  const n = i0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = a0(t).reduce((o, s) => [...o, No(e, s)], []);
    return e.normalize(r);
  }
}
function No(e, t) {
  const n = mi(t);
  switch (n) {
    case 3:
      return Wr(t, n);
    case 9:
      return Wr(t, n);
    case 4: {
      const r = t;
      if (mt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (mt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ar(n);
    }
    case 5: {
      const r = t;
      if (mt(r, "i") && Re(r.i))
        return e.interpolate(e.list(r.i));
      if (mt(r, "index") && Re(r.index))
        return e.interpolate(e.list(r.index));
      throw Ar(n);
    }
    case 6: {
      const r = t, o = l0(r), s = c0(r);
      return e.linked(No(e, s), o ? No(e, o) : void 0, e.type);
    }
    case 7:
      return Wr(t, n);
    case 8:
      return Wr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const z0 = (e) => e;
let Br = _e();
function G0(e, t = {}) {
  let n = !1;
  const r = t.onError || Mm;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...n0(e, t), detectError: n };
}
function Y0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && G(e)) {
    ie(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || z0)(e), o = Br[r];
    if (o)
      return o;
    const { ast: s, detectError: i } = G0(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = fo(s);
    return i ? a : Br[r] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Br[n];
      return r || (Br[n] = fo(e));
    } else
      return fo(e);
  }
}
const Wa = () => "", lt = (e) => ye(e);
function Ba(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: i, messages: a } = e, [l, u] = Po(...t), c = ie(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ie(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, w = G(u.default) || ie(u.default) ? ie(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", T = n || w !== "", A = pi(e, u);
  m && X0(u);
  let [v, M, E] = b ? [
    l,
    A,
    a[A] || _e()
  ] : Lu(e, l, A, i, f, c), y = v, N = l;
  if (!b && !(G(y) || Lt(y) || lt(y)) && T && (y = w, N = y), !b && (!(G(y) || Lt(y) || lt(y)) || !G(M)))
    return o ? $s : l;
  let R = !1;
  const U = () => {
    R = !0;
  }, F = lt(y) ? y : Cu(e, l, M, y, N, U);
  if (R)
    return y;
  const I = Z0(e, M, E, u), K = w0(I), Y = J0(e, F, K);
  let H = r ? r(Y, l) : Y;
  if (m && G(H) && (H = Sm(H)), __INTLIFY_PROD_DEVTOOLS__) {
    const Z = {
      timestamp: Date.now(),
      key: G(l) ? l : lt(y) ? y.key : "",
      locale: M || (lt(y) ? y.locale : ""),
      format: G(y) ? y : lt(y) ? y.source : "",
      message: H
    };
    Z.meta = $e({}, e.__meta, /* @__PURE__ */ V0() || {}), C0(Z);
  }
  return H;
}
function X0(e) {
  ve(e.list) ? e.list = e.list.map((t) => G(t) ? Ca(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    G(e.named[t]) && (e.named[t] = Ca(e.named[t]));
  });
}
function Lu(e, t, n, r, o, s) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = _e(), m, b = null;
  const w = "translate";
  for (let T = 0; T < c.length && (m = c[T], f = i[m] || _e(), (b = l(f, t)) === null && (b = f[t]), !(G(b) || Lt(b) || lt(b))); T++)
    if (!K0(m, c)) {
      const A = _i(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        w
      );
      A !== t && (b = A);
    }
  return [b, m, f];
}
function Cu(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (lt(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (i == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = i(r, Q0(e, n, o, r, a, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function J0(e, t, n) {
  return t(n);
}
function Po(...e) {
  const [t, n, r] = e, o = _e();
  if (!G(t) && !Re(t) && !lt(t) && !Lt(t))
    throw Ut(wt.INVALID_ARGUMENT);
  const s = Re(t) ? String(t) : (lt(t), t);
  return Re(n) ? o.plural = n : G(n) ? o.default = n : te(n) && !Us(n) ? o.named = n : ve(n) && (o.list = n), Re(r) ? o.plural = r : G(r) ? o.default = r : te(r) && $e(o, r), [s, o];
}
function Q0(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      throw s && s(i), i;
    },
    onCacheKey: (i) => bm(t, n, i)
  };
}
function Z0(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (b) => {
      let w = i(n, b);
      if (w == null && c) {
        const [, , T] = Lu(c, b, t, a, l, u);
        w = i(T, b);
      }
      if (G(w) || Lt(w)) {
        let T = !1;
        const v = Cu(e, b, t, w, b, () => {
          T = !0;
        });
        return T ? Wa : v;
      } else return lt(w) ? w : Wa;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Re(r.plural) && (m.pluralIndex = r.plural), m;
}
function Ka(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = Mo(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, w = pi(e, c), T = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!G(l) || l === "")
    return new Intl.DateTimeFormat(w, f).format(u);
  let A = {}, v, M = null;
  const E = "datetime format";
  for (let R = 0; R < T.length && (v = T[R], A = n[v] || {}, M = A[l], !te(M)); R++)
    _i(e, l, v, m, E);
  if (!te(M) || !G(v))
    return r ? $s : l;
  let y = `${v}__${l}`;
  Us(f) || (y = `${y}__${JSON.stringify(f)}`);
  let N = a.get(y);
  return N || (N = new Intl.DateTimeFormat(v, $e({}, M, f)), a.set(y, N)), b ? N.formatToParts(u) : N.format(u);
}
const Ru = [
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
function Mo(...e) {
  const [t, n, r, o] = e, s = _e();
  let i = _e(), a;
  if (G(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ut(wt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw Ut(wt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Em(t)) {
    if (isNaN(t.getTime()))
      throw Ut(wt.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Re(t))
    a = t;
  else
    throw Ut(wt.INVALID_ARGUMENT);
  return G(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    Ru.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), G(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function qa(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function za(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: a } = e, [l, u, c, f] = ko(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, w = pi(e, c), T = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!G(l) || l === "")
    return new Intl.NumberFormat(w, f).format(u);
  let A = {}, v, M = null;
  const E = "number format";
  for (let R = 0; R < T.length && (v = T[R], A = n[v] || {}, M = A[l], !te(M)); R++)
    _i(e, l, v, m, E);
  if (!te(M) || !G(v))
    return r ? $s : l;
  let y = `${v}__${l}`;
  Us(f) || (y = `${y}__${JSON.stringify(f)}`);
  let N = a.get(y);
  return N || (N = new Intl.NumberFormat(v, $e({}, M, f)), a.set(y, N)), b ? N.formatToParts(u) : N.format(u);
}
const Iu = [
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
function ko(...e) {
  const [t, n, r, o] = e, s = _e();
  let i = _e();
  if (!Re(t))
    throw Ut(wt.INVALID_ARGUMENT);
  const a = t;
  return G(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    Iu.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), G(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function Ga(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
r0();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ep = "9.14.5";
function tp() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (_n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (_n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_n().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const np = N0.__EXTEND_POINT__, Nt = Hs(np);
Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt();
const Nu = wt.__EXTEND_POINT__, tt = Hs(Nu), Pe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Nu,
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
function xe(e, ...t) {
  return zn(e, null, void 0);
}
const xo = /* @__PURE__ */ sn("__translateVNode"), Do = /* @__PURE__ */ sn("__datetimeParts"), Fo = /* @__PURE__ */ sn("__numberParts"), Pu = sn("__setPluralRules"), Mu = /* @__PURE__ */ sn("__injectWithOption"), Uo = /* @__PURE__ */ sn("__dispose");
function Or(e) {
  if (!fe(e) || Lt(e))
    return e;
  for (const t in e)
    if (mt(e, t))
      if (!t.includes("."))
        fe(e[t]) && Or(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in o || (o[n[i]] = _e()), !fe(o[n[i]])) {
            s = !0;
            break;
          }
          o = o[n[i]];
        }
        if (s || (Lt(o) ? yu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Lt(o)) {
          const i = o[n[r]];
          fe(i) && Or(i);
        }
      }
  return e;
}
function Vs(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, i = te(n) ? n : ve(r) ? _e() : { [e]: _e() };
  if (ve(r) && r.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (i[l] = i[l] || _e(), ts(u, i[l])) : ts(u, i);
    } else
      G(a) && ts(JSON.parse(a), i);
  }), o == null && s)
    for (const a in i)
      mt(i, a) && Or(i[a]);
  return i;
}
function ku(e) {
  return e.type;
}
function xu(e, t, n) {
  let r = fe(t.messages) ? t.messages : _e();
  "__i18nGlobal" in n && (r = Vs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (fe(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (fe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Ya(e) {
  return Ie(Nr, null, e, 0);
}
const Xa = "__INTLIFY_META__", Ja = () => [], rp = () => !1;
let Qa = 0;
function Za(e) {
  return ((t, n, r, o) => e(n, r, Ct() || void 0, o));
}
const sp = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Ct();
  let t = null;
  return e && (t = ku(e)[Xa]) ? { [Xa]: t } : null;
};
function gi(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, i = _s ? le : ni, a = !!e.translateExistCompatible;
  let l = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const u = i(
    // prettier-ignore
    n && l ? n.locale.value : G(e.locale) ? e.locale : jn
  ), c = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : G(e.fallbackLocale) || ve(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = i(Vs(u.value, e)), m = i(te(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), b = i(te(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let w = n ? n.missingWarn : ie(e.missingWarn) || nn(e.missingWarn) ? e.missingWarn : !0, T = n ? n.fallbackWarn : ie(e.fallbackWarn) || nn(e.fallbackWarn) ? e.fallbackWarn : !0, A = n ? n.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, M = ye(e.missing) ? e.missing : null, E = ye(e.missing) ? Za(e.missing) : null, y = ye(e.postTranslation) ? e.postTranslation : null, N = n ? n.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter;
  const U = n ? n.modifiers : te(e.modifiers) ? e.modifiers : {};
  let F = e.pluralRules || n && n.pluralRules, I;
  I = (() => {
    o && $a(null);
    const C = {
      version: ep,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: U,
      pluralRules: F,
      missing: E === null ? void 0 : E,
      missingWarn: w,
      fallbackWarn: T,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: N,
      escapeParameter: R,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = m.value, C.numberFormats = b.value, C.__datetimeFormatters = te(I) ? I.__datetimeFormatters : void 0, C.__numberFormatters = te(I) ? I.__numberFormatters : void 0;
    const D = W0(C);
    return o && $a(D), D;
  })(), Zn(I, u.value, c.value);
  function Y() {
    return [
      u.value,
      c.value,
      f.value,
      m.value,
      b.value
    ];
  }
  const H = Ce({
    get: () => u.value,
    set: (C) => {
      u.value = C, I.locale = u.value;
    }
  }), Z = Ce({
    get: () => c.value,
    set: (C) => {
      c.value = C, I.fallbackLocale = c.value, Zn(I, u.value, C);
    }
  }), se = Ce(() => f.value), ue = /* @__PURE__ */ Ce(() => m.value), $ = /* @__PURE__ */ Ce(() => b.value);
  function B() {
    return ye(y) ? y : null;
  }
  function J(C) {
    y = C, I.postTranslation = C;
  }
  function Ee() {
    return M;
  }
  function Se(C) {
    C !== null && (E = Za(C)), M = C, I.missing = E;
  }
  const re = (C, D, X, ae, Ae, Xe) => {
    Y();
    let Fe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (I.fallbackContext = n ? j0() : void 0), Fe = C(I);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (I.fallbackContext = void 0);
    }
    if (X !== "translate exists" && // for not `te` (e.g `t`)
    Re(Fe) && Fe === $s || X === "translate exists" && !Fe) {
      const [ln, Xs] = D();
      return n && A ? ae(n) : Ae(ln);
    } else {
      if (Xe(Fe))
        return Fe;
      throw xe(Pe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function he(...C) {
    return re((D) => Reflect.apply(Ba, null, [D, ...C]), () => Po(...C), "translate", (D) => Reflect.apply(D.t, D, [...C]), (D) => D, (D) => G(D));
  }
  function Ne(...C) {
    const [D, X, ae] = C;
    if (ae && !fe(ae))
      throw xe(Pe.INVALID_ARGUMENT);
    return he(D, X, $e({ resolvedMessage: !0 }, ae || {}));
  }
  function Ve(...C) {
    return re((D) => Reflect.apply(Ka, null, [D, ...C]), () => Mo(...C), "datetime format", (D) => Reflect.apply(D.d, D, [...C]), () => Ua, (D) => G(D));
  }
  function it(...C) {
    return re((D) => Reflect.apply(za, null, [D, ...C]), () => ko(...C), "number format", (D) => Reflect.apply(D.n, D, [...C]), () => Ua, (D) => G(D));
  }
  function oe(C) {
    return C.map((D) => G(D) || Re(D) || ie(D) ? Ya(String(D)) : D);
  }
  const je = {
    normalize: oe,
    interpolate: (C) => C,
    type: "vnode"
  };
  function Ye(...C) {
    return re(
      (D) => {
        let X;
        const ae = D;
        try {
          ae.processor = je, X = Reflect.apply(Ba, null, [ae, ...C]);
        } finally {
          ae.processor = null;
        }
        return X;
      },
      () => Po(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[xo](...C),
      (D) => [Ya(D)],
      (D) => ve(D)
    );
  }
  function De(...C) {
    return re(
      (D) => Reflect.apply(za, null, [D, ...C]),
      () => ko(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Fo](...C),
      Ja,
      (D) => G(D) || ve(D)
    );
  }
  function ft(...C) {
    return re(
      (D) => Reflect.apply(Ka, null, [D, ...C]),
      () => Mo(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Do](...C),
      Ja,
      (D) => G(D) || ve(D)
    );
  }
  function p(C) {
    F = C, I.pluralRules = F;
  }
  function g(C, D) {
    return re(() => {
      if (!C)
        return !1;
      const X = G(D) ? D : u.value, ae = L(X), Ae = I.messageResolver(ae, C);
      return a ? Ae != null : Lt(Ae) || lt(Ae) || G(Ae);
    }, () => [C], "translate exists", (X) => Reflect.apply(X.te, X, [C, D]), rp, (X) => ie(X));
  }
  function _(C) {
    let D = null;
    const X = vu(I, c.value, u.value);
    for (let ae = 0; ae < X.length; ae++) {
      const Ae = f.value[X[ae]] || {}, Xe = I.messageResolver(Ae, C);
      if (Xe != null) {
        D = Xe;
        break;
      }
    }
    return D;
  }
  function P(C) {
    const D = _(C);
    return D ?? (n ? n.tm(C) || {} : {});
  }
  function L(C) {
    return f.value[C] || {};
  }
  function k(C, D) {
    if (s) {
      const X = { [C]: D };
      for (const ae in X)
        mt(X, ae) && Or(X[ae]);
      D = X[C];
    }
    f.value[C] = D, I.messages = f.value;
  }
  function W(C, D) {
    f.value[C] = f.value[C] || {};
    const X = { [C]: D };
    if (s)
      for (const ae in X)
        mt(X, ae) && Or(X[ae]);
    D = X[C], ts(D, f.value[C]), I.messages = f.value;
  }
  function V(C) {
    return m.value[C] || {};
  }
  function d(C, D) {
    m.value[C] = D, I.datetimeFormats = m.value, qa(I, C, D);
  }
  function h(C, D) {
    m.value[C] = $e(m.value[C] || {}, D), I.datetimeFormats = m.value, qa(I, C, D);
  }
  function O(C) {
    return b.value[C] || {};
  }
  function x(C, D) {
    b.value[C] = D, I.numberFormats = b.value, Ga(I, C, D);
  }
  function q(C, D) {
    b.value[C] = $e(b.value[C] || {}, D), I.numberFormats = b.value, Ga(I, C, D);
  }
  Qa++, n && _s && (yn(n.locale, (C) => {
    l && (u.value = C, I.locale = C, Zn(I, u.value, c.value));
  }), yn(n.fallbackLocale, (C) => {
    l && (c.value = C, I.fallbackLocale = C, Zn(I, u.value, c.value));
  }));
  const j = {
    id: Qa,
    locale: H,
    fallbackLocale: Z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(C) {
      l = C, C && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Zn(I, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: se,
    get modifiers() {
      return U;
    },
    get pluralRules() {
      return F || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return w;
    },
    set missingWarn(C) {
      w = C, I.missingWarn = w;
    },
    get fallbackWarn() {
      return T;
    },
    set fallbackWarn(C) {
      T = C, I.fallbackWarn = T;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(C) {
      A = C;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(C) {
      v = C, I.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return N;
    },
    set warnHtmlMessage(C) {
      N = C, I.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return R;
    },
    set escapeParameter(C) {
      R = C, I.escapeParameter = C;
    },
    t: he,
    getLocaleMessage: L,
    setLocaleMessage: k,
    mergeLocaleMessage: W,
    getPostTranslationHandler: B,
    setPostTranslationHandler: J,
    getMissingHandler: Ee,
    setMissingHandler: Se,
    [Pu]: p
  };
  return j.datetimeFormats = ue, j.numberFormats = $, j.rt = Ne, j.te = g, j.tm = P, j.d = Ve, j.n = it, j.getDateTimeFormat = V, j.setDateTimeFormat = d, j.mergeDateTimeFormat = h, j.getNumberFormat = O, j.setNumberFormat = x, j.mergeNumberFormat = q, j[Mu] = r, j[xo] = Ye, j[Do] = ft, j[Fo] = De, j;
}
function op(e) {
  const t = G(e.locale) ? e.locale : jn, n = G(e.fallbackLocale) || ve(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = ye(e.missing) ? e.missing : void 0, o = ie(e.silentTranslationWarn) || nn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ie(e.silentFallbackWarn) || nn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ie(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = te(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = ye(e.postTranslation) ? e.postTranslation : void 0, f = G(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, b = ie(e.sync) ? e.sync : !0;
  let w = e.messages;
  if (te(e.sharedMessages)) {
    const R = e.sharedMessages;
    w = Object.keys(R).reduce((F, I) => {
      const K = F[I] || (F[I] = {});
      return $e(K, R[I]), F;
    }, w || {});
  }
  const { __i18n: T, __root: A, __injectWithOption: v } = e, M = e.datetimeFormats, E = e.numberFormats, y = e.flatJson, N = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: y,
    datetimeFormats: M,
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
    translateExistCompatible: N,
    __i18n: T,
    __root: A,
    __injectWithOption: v
  };
}
function Ho(e = {}, t) {
  {
    const n = gi(op(e)), { __extender: r } = e, o = {
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
        if (!G(i))
          throw xe(Pe.INVALID_ARGUMENT);
        const m = i;
        return G(a) ? u.locale = a : ve(a) ? c = a : te(a) && (f = a), ve(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
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
        if (!G(i))
          throw xe(Pe.INVALID_ARGUMENT);
        const m = i;
        return G(a) ? u.locale = a : Re(a) ? u.plural = a : ve(a) ? c = a : te(a) && (f = a), G(l) ? u.locale = l : ve(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
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
const bi = {
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
function ip({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ke ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, _e());
}
function Du(e) {
  return ke;
}
const ap = /* @__PURE__ */ qn({
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
  }, bi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || yi({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), i = _e();
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = G(e.plural) ? +e.plural : e.plural);
      const a = ip(t, s), l = o[xo](e.keypath, a, i), u = $e(_e(), r), c = G(e.tag) || fe(e.tag) ? e.tag : Du();
      return Tr(c, u, l);
    };
  }
}), el = ap;
function lp(e) {
  return ve(e) && !G(e[0]);
}
function Fu(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let a = _e();
    e.locale && (i.locale = e.locale), G(e.format) ? i.key = e.format : fe(e.format) && (G(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((m, b) => n.includes(b) ? $e(_e(), m, { [b]: e.format[b] }) : m, _e()));
    const l = r(e.value, i, a);
    let u = [i.key];
    ve(l) ? u = l.map((m, b) => {
      const w = o[m.type], T = w ? w({ [m.type]: m.value, index: b, parts: l }) : [m.value];
      return lp(T) && (T[0].key = `${m.type}-${b}`), T;
    }) : G(l) && (u = [l]);
    const c = $e(_e(), s), f = G(e.tag) || fe(e.tag) ? e.tag : Du();
    return Tr(f, c, u);
  };
}
const cp = /* @__PURE__ */ qn({
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
  }, bi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || yi({
      useScope: e.scope,
      __useComponent: !0
    });
    return Fu(e, t, Iu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Fo](...r)
    ));
  }
}), tl = cp, up = /* @__PURE__ */ qn({
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
  }, bi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || yi({
      useScope: e.scope,
      __useComponent: !0
    });
    return Fu(e, t, Ru, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Do](...r)
    ));
  }
}), nl = up;
function fp(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function dp(e) {
  const t = (i) => {
    const { instance: a, modifiers: l, value: u } = i;
    if (!a || !a.$)
      throw xe(Pe.UNEXPECTED_ERROR);
    const c = fp(e, a.$), f = rl(u);
    return [
      Reflect.apply(c.t, c, [...sl(f)]),
      c
    ];
  };
  return {
    created: (i, a) => {
      const [l, u] = t(a);
      _s && e.global === u && (i.__i18nWatcher = yn(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = l;
    },
    unmounted: (i) => {
      _s && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer, u = rl(a);
        i.textContent = Reflect.apply(l.t, l, [
          ...sl(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    }
  };
}
function rl(e) {
  if (G(e))
    return { path: e };
  if (te(e)) {
    if (!("path" in e))
      throw xe(Pe.REQUIRED_VALUE, "path");
    return e;
  } else
    throw xe(Pe.INVALID_VALUE);
}
function sl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, i = {}, a = r || {};
  return G(n) && (i.locale = n), Re(o) && (i.plural = o), Re(s) && (i.plural = s), [t, a, i];
}
function hp(e, t, ...n) {
  const r = te(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (ie(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : el.name, "I18nT"].forEach((i) => e.component(i, el)), [tl.name, "I18nN"].forEach((i) => e.component(i, tl)), [nl.name, "I18nD"].forEach((i) => e.component(i, nl))), e.directive("t", dp(t));
}
function mp(e, t, n) {
  return {
    beforeCreate() {
      const r = Ct();
      if (!r)
        throw xe(Pe.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = ol(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Ho(s);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = ol(e, o);
        else {
          this.$i18n = Ho({
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
      o.__i18nGlobal && xu(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, i) => this.$i18n.te(s, i), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = Ct();
      if (!r)
        throw xe(Pe.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function ol(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Pu](t.pluralizationRules || e.pluralizationRules);
  const n = Vs(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const pp = /* @__PURE__ */ sn("global-vue-i18n");
function _p(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ie(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ie(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [i, a] = gp(e, n), l = /* @__PURE__ */ sn("");
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
      async install(b, ...w) {
        if (b.__VUE_I18N_SYMBOL__ = l, b.provide(b.__VUE_I18N_SYMBOL__, m), te(w[0])) {
          const v = w[0];
          m.__composerExtend = v.__composerExtend, m.__vueI18nExtend = v.__vueI18nExtend;
        }
        let T = null;
        !n && r && (T = Op(b, m.global)), __VUE_I18N_FULL_INSTALL__ && hp(b, m, ...w), __VUE_I18N_LEGACY_API__ && n && b.mixin(mp(a, a.__composer, m));
        const A = b.unmount;
        b.unmount = () => {
          T && T(), m.dispose(), A();
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
function yi(e = {}) {
  const t = Ct();
  if (t == null)
    throw xe(Pe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw xe(Pe.NOT_INSTALLED);
  const n = bp(t), r = Ep(n), o = ku(t), s = yp(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw xe(Pe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Ap(t, s, r, e);
  }
  if (s === "global")
    return xu(r, e, o), r;
  if (s === "parent") {
    let l = vp(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = $e({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), a = gi(l), i.__composerExtend && (a[Uo] = i.__composerExtend(a)), Tp(i, t, a), i.__setInstance(t, a);
  }
  return a;
}
function gp(e, t, n) {
  const r = Go();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ho(e)) : r.run(() => gi(e));
    if (o == null)
      throw xe(Pe.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function bp(e) {
  {
    const t = xn(e.isCE ? pp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw xe(e.isCE ? Pe.NOT_INSTALLED_WITH_PROVIDE : Pe.UNEXPECTED_ERROR);
    return t;
  }
}
function yp(e, t) {
  return Us(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ep(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function vp(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = Sp(t, n);
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(s);
      a != null && (r = a.__composer, n && r && !r[Mu] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Sp(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Tp(e, t, n) {
  ii(() => {
  }, t), ai(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Uo];
    o && (o(), delete r[Uo]);
  }, t);
}
function Ap(e, t, n, r = {}) {
  const o = t === "local", s = ni(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw xe(Pe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ie(r.inheritLocale) ? r.inheritLocale : !G(r.locale), a = le(
    // prettier-ignore
    !o || i ? n.locale.value : G(r.locale) ? r.locale : jn
  ), l = le(
    // prettier-ignore
    !o || i ? n.fallbackLocale.value : G(r.fallbackLocale) || ve(r.fallbackLocale) || te(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value
  ), u = le(Vs(a.value, r)), c = le(te(r.datetimeFormats) ? r.datetimeFormats : { [a.value]: {} }), f = le(te(r.numberFormats) ? r.numberFormats : { [a.value]: {} }), m = o ? n.missingWarn : ie(r.missingWarn) || nn(r.missingWarn) ? r.missingWarn : !0, b = o ? n.fallbackWarn : ie(r.fallbackWarn) || nn(r.fallbackWarn) ? r.fallbackWarn : !0, w = o ? n.fallbackRoot : ie(r.fallbackRoot) ? r.fallbackRoot : !0, T = !!r.fallbackFormat, A = ye(r.missing) ? r.missing : null, v = ye(r.postTranslation) ? r.postTranslation : null, M = o ? n.warnHtmlMessage : ie(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, y = o ? n.modifiers : te(r.modifiers) ? r.modifiers : {}, N = r.pluralRules || o && n.pluralRules;
  function R() {
    return [
      a.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const U = Ce({
    get: () => s.value ? s.value.locale.value : a.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), a.value = _;
    }
  }), F = Ce({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), I = Ce(() => s.value ? s.value.messages.value : u.value), K = Ce(() => c.value), Y = Ce(() => f.value);
  function H() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function Z(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function se() {
    return s.value ? s.value.getMissingHandler() : A;
  }
  function ue(_) {
    s.value && s.value.setMissingHandler(_);
  }
  function $(_) {
    return R(), _();
  }
  function B(..._) {
    return s.value ? $(() => Reflect.apply(s.value.t, null, [..._])) : $(() => "");
  }
  function J(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function Ee(..._) {
    return s.value ? $(() => Reflect.apply(s.value.d, null, [..._])) : $(() => "");
  }
  function Se(..._) {
    return s.value ? $(() => Reflect.apply(s.value.n, null, [..._])) : $(() => "");
  }
  function re(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function he(_, P) {
    return s.value ? s.value.te(_, P) : !1;
  }
  function Ne(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function Ve(_, P) {
    s.value && (s.value.setLocaleMessage(_, P), u.value[_] = P);
  }
  function it(_, P) {
    s.value && s.value.mergeLocaleMessage(_, P);
  }
  function oe(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function Te(_, P) {
    s.value && (s.value.setDateTimeFormat(_, P), c.value[_] = P);
  }
  function je(_, P) {
    s.value && s.value.mergeDateTimeFormat(_, P);
  }
  function Ye(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function De(_, P) {
    s.value && (s.value.setNumberFormat(_, P), f.value[_] = P);
  }
  function ft(_, P) {
    s.value && s.value.mergeNumberFormat(_, P);
  }
  const p = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: U,
    fallbackLocale: F,
    messages: I,
    datetimeFormats: K,
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
      return s.value ? s.value.pluralRules : N;
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
      return s.value ? s.value.fallbackRoot : w;
    },
    set fallbackRoot(_) {
      s.value && (s.value.fallbackRoot = _);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : T;
    },
    set fallbackFormat(_) {
      s.value && (s.value.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : M;
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
    t: B,
    getPostTranslationHandler: H,
    setPostTranslationHandler: Z,
    getMissingHandler: se,
    setMissingHandler: ue,
    rt: J,
    d: Ee,
    n: Se,
    tm: re,
    te: he,
    getLocaleMessage: Ne,
    setLocaleMessage: Ve,
    mergeLocaleMessage: it,
    getDateTimeFormat: oe,
    setDateTimeFormat: Te,
    mergeDateTimeFormat: je,
    getNumberFormat: Ye,
    setNumberFormat: De,
    mergeNumberFormat: ft
  };
  function g(_) {
    _.locale.value = a.value, _.fallbackLocale.value = l.value, Object.keys(u.value).forEach((P) => {
      _.mergeLocaleMessage(P, u.value[P]);
    }), Object.keys(c.value).forEach((P) => {
      _.mergeDateTimeFormat(P, c.value[P]);
    }), Object.keys(f.value).forEach((P) => {
      _.mergeNumberFormat(P, f.value[P]);
    }), _.escapeParameter = E, _.fallbackFormat = T, _.fallbackRoot = w, _.fallbackWarn = b, _.missingWarn = m, _.warnHtmlMessage = M;
  }
  return Sc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw xe(Pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = _.locale.value, l.value = _.fallbackLocale.value, u.value = _.messages.value, c.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : o && g(_);
  }), p;
}
const wp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], il = ["t", "rt", "d", "n", "tm", "te"];
function Op(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return wp.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw xe(Pe.UNEXPECTED_ERROR);
    const i = we(s.value) ? {
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
  }), e.config.globalProperties.$i18n = n, il.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw xe(Pe.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, il.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
tp();
F0(Y0);
U0(g0);
H0(vu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = _n();
  e.__INTLIFY__ = !0, O0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Lp = "sub2api_locale", Ei = "en", Cp = {
  en: () => import("./index-Cd_2Lby2.js"),
  zh: () => import("./index-DIg8WdAu.js")
};
function Uu(e) {
  return e === "en" || e === "zh";
}
function Rp() {
  const e = localStorage.getItem(Lp);
  return e && Uu(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Ei;
}
const Fn = _p({
  legacy: !1,
  locale: Rp(),
  fallbackLocale: Ei,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), al = /* @__PURE__ */ new Set();
async function Hu(e) {
  if (al.has(e))
    return;
  const t = Cp[e], n = await t();
  Fn.global.setLocaleMessage(e, n.default), al.add(e);
}
async function Ip() {
  const e = $u();
  await Hu(e), document.documentElement.setAttribute("lang", e);
}
function $u() {
  const e = Fn.global.locale.value;
  return Uu(e) ? e : Ei;
}
function Vu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Np } = Object.prototype, { getPrototypeOf: Wn } = Object, { iterator: Mr, toStringTag: ju } = Symbol, bs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Lr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), bs(n, t))
      return !0;
    n = Wn(n);
  }
  return !1;
}, Pp = (e, t) => e != null && Lr(e, t) ? e[t] : void 0, vi = /* @__PURE__ */ ((e) => (t) => {
  const n = Np.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (e) => (e = e.toLowerCase(), (t) => vi(t) === e), js = (e) => (t) => typeof t === e, { isArray: An } = Array, Bn = js("undefined");
function Gn(e) {
  return e !== null && !Bn(e) && e.constructor !== null && !Bn(e.constructor) && nt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Wu = yt("ArrayBuffer");
function Mp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Wu(e.buffer), t;
}
const kp = js("string"), nt = js("function"), Bu = js("number"), Yn = (e) => e !== null && typeof e == "object", xp = (e) => e === !0 || e === !1, ns = (e) => {
  if (!Yn(e))
    return !1;
  const t = Wn(e);
  return (t === null || t === Object.prototype || Wn(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Lr(e, ju) && !Lr(e, Mr);
}, Dp = (e) => {
  if (!Yn(e) || Gn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Fp = yt("Date"), Up = yt("File"), Hp = (e) => !!(e && typeof e.uri < "u"), $p = (e) => e && typeof e.getParts < "u", Vp = yt("Blob"), jp = yt("FileList"), Wp = (e) => Yn(e) && nt(e.pipe);
function Bp() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ll = Bp(), cl = typeof ll.FormData < "u" ? ll.FormData : void 0, Kp = (e) => {
  if (!e) return !1;
  if (cl && e instanceof cl) return !0;
  const t = Wn(e);
  if (!t || t === Object.prototype || !nt(e.append)) return !1;
  const n = vi(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && nt(e.toString) && e.toString() === "[object FormData]";
}, qp = yt("URLSearchParams"), [zp, Gp, Yp, Xp] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(yt), Jp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), An(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Gn(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Ku(e, t) {
  if (Gn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qu = (e) => !Bn(e) && e !== gn;
function $o(...e) {
  const { caseless: t, skipUndefined: n } = qu(this) && this || {}, r = {}, o = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && Ku(r, i) || i, l = bs(r, a) ? r[a] : void 0;
    ns(l) && ns(s) ? r[a] = $o(l, s) : ns(s) ? r[a] = $o({}, s) : An(s) ? r[a] = s.slice() : (!n || !Bn(s)) && (r[a] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const a = e[s];
    if (!a || Gn(a) || (kr(a, o), typeof a != "object" || An(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      c1.call(a, c) && o(a[c], c);
    }
  }
  return r;
}
const Qp = (e, t, n, { allOwnKeys: r } = {}) => (kr(
  t,
  (o, s) => {
    n && nt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Vu(o, n),
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
), e), Zp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), e1 = (e, t, n, r) => {
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
}, t1 = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Wn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, n1 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, r1 = (e) => {
  if (!e) return null;
  if (An(e)) return e;
  let t = e.length;
  if (!Bu(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, s1 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Wn(Uint8Array)), o1 = (e, t) => {
  const r = (e && e[Mr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, i1 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, a1 = yt("HTMLFormElement"), l1 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: c1 } = Object.prototype, u1 = yt("RegExp"), zu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  kr(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, f1 = (e) => {
  zu(e, (t, n) => {
    if (nt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (nt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, d1 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return An(e) ? r(e) : r(String(e).split(t)), n;
}, h1 = () => {
}, m1 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function p1(e) {
  return !!(e && nt(e.append) && e[ju] === "FormData" && e[Mr]);
}
const _1 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Yn(r)) {
      if (t.has(r))
        return;
      if (Gn(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = An(r) ? [] : {};
        return kr(r, (s, i) => {
          const a = n(s);
          !Bn(a) && (o[i] = a);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, g1 = yt("AsyncFunction"), b1 = (e) => e && (Yn(e) || nt(e)) && nt(e.then) && nt(e.catch), Gu = ((e, t) => e ? setImmediate : t ? ((n, r) => (gn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === gn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), gn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", nt(gn.postMessage)), y1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(gn) : typeof process < "u" && process.nextTick || Gu, Yu = (e) => e != null && nt(e[Mr]), E1 = (e) => e != null && Lr(e, Mr) && Yu(e), S = {
  isArray: An,
  isArrayBuffer: Wu,
  isBuffer: Gn,
  isFormData: Kp,
  isArrayBufferView: Mp,
  isString: kp,
  isNumber: Bu,
  isBoolean: xp,
  isObject: Yn,
  isPlainObject: ns,
  isEmptyObject: Dp,
  isReadableStream: zp,
  isRequest: Gp,
  isResponse: Yp,
  isHeaders: Xp,
  isUndefined: Bn,
  isDate: Fp,
  isFile: Up,
  isReactNativeBlob: Hp,
  isReactNative: $p,
  isBlob: Vp,
  isRegExp: u1,
  isFunction: nt,
  isStream: Wp,
  isURLSearchParams: qp,
  isTypedArray: s1,
  isFileList: jp,
  forEach: kr,
  merge: $o,
  extend: Qp,
  trim: Jp,
  stripBOM: Zp,
  inherits: e1,
  toFlatObject: t1,
  kindOf: vi,
  kindOfTest: yt,
  endsWith: n1,
  toArray: r1,
  forEachEntry: o1,
  matchAll: i1,
  isHTMLForm: a1,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Lr,
  getSafeProp: Pp,
  reduceDescriptors: zu,
  freezeMethods: f1,
  toObjectSet: d1,
  toCamelCase: l1,
  noop: h1,
  toFiniteNumber: m1,
  findKey: Ku,
  global: gn,
  isContextDefined: qu,
  isSpecCompliantForm: p1,
  toJSONObject: _1,
  isAsyncFn: g1,
  isThenable: b1,
  setImmediate: Gu,
  asap: y1,
  isIterable: Yu,
  isSafeIterable: E1
}, v1 = S.toObjectSet([
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
]), S1 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && v1[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function T1(e) {
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
const A1 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), w1 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Si(e, t) {
  return S.isArray(e) ? e.map((n) => Si(n, t)) : T1(String(e).replace(t, ""));
}
const O1 = (e) => Si(e, A1), L1 = (e) => Si(e, w1);
function Xu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return S.forEach(e.toJSON(), (n, r) => {
    t[r] = L1(n);
  }), t;
}
const ul = Symbol("internals");
function er(e) {
  return e && String(e).trim().toLowerCase();
}
function rs(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(rs) : O1(String(e));
}
function C1(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const R1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ho(e, t, n, r, o) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function I1(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function N1(e, t) {
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
      const c = er(l);
      if (!c)
        return;
      const f = S.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = rs(a));
    }
    const i = (a, l) => S.forEach(a, (u, c) => s(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !R1(t))
      i(S1(t), n);
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
    if (t = er(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return C1(o);
        if (S.isFunction(n))
          return n.call(this, o, r);
        if (S.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = er(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ho(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = er(i), i) {
        const a = S.findKey(r, i);
        a && (!n || ho(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return S.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ho(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (o, s) => {
      const i = S.findKey(r, s);
      if (i) {
        n[i] = rs(o), delete n[s];
        return;
      }
      const a = t ? I1(s) : String(s).trim();
      a !== s && delete n[s], n[a] = rs(o), r[a] = !0;
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
    const r = (this[ul] = this[ul] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = er(i);
      r[a] || (N1(o, i), r[a] = !0);
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
const P1 = "[REDACTED ****]";
function M1(e) {
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
function k1(e, t) {
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
      if (!S.isPlainObject(s) && M1(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(s)) {
        const u = n.has(a.toLowerCase()) ? P1 : o(l);
        S.isUndefined(u) || (i[a] = u);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
let z = class Ju extends Error {
  static from(t, n, r, o, s, i) {
    const a = new Ju(t.message, n || t.code, r, o, s);
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
    const t = this.config, n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0, r = S.isArray(n) && n.length > 0 ? k1(t, n) : S.toJSONObject(t);
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
z.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
z.ERR_BAD_OPTION = "ERR_BAD_OPTION";
z.ECONNABORTED = "ECONNABORTED";
z.ETIMEDOUT = "ETIMEDOUT";
z.ECONNREFUSED = "ECONNREFUSED";
z.ERR_NETWORK = "ERR_NETWORK";
z.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
z.ERR_DEPRECATED = "ERR_DEPRECATED";
z.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
z.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
z.ERR_CANCELED = "ERR_CANCELED";
z.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
z.ERR_INVALID_URL = "ERR_INVALID_URL";
z.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const x1 = null, Qu = 100;
function Vo(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Zu(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Zu(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function D1(e) {
  return S.isArray(e) && !e.some(Vo);
}
const F1 = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ws(e, t, n) {
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
    function(M, E) {
      return !S.isUndefined(E[M]);
    }
  );
  const r = n.metaTokens, o = n.visitor || w, s = n.dots, i = n.indexes, a = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? Qu : n.maxDepth, u = a && S.isSpecCompliantForm(t), c = [];
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(v) {
    if (v === null) return "";
    if (S.isDate(v))
      return v.toISOString();
    if (S.isBoolean(v))
      return v.toString();
    if (!u && S.isBlob(v))
      throw new z("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(v) || S.isTypedArray(v)) {
      if (u && typeof a == "function")
        return new a([v]);
      if (typeof Buffer < "u")
        return Buffer.from(v);
      throw new z("Blob is not supported. Use a Buffer instead.", z.ERR_NOT_SUPPORT);
    }
    return v;
  }
  function m(v) {
    if (v > l)
      throw new z(
        "Object is too deeply nested (" + v + " levels). Max depth: " + l,
        z.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function b(v, M) {
    if (l === 1 / 0)
      return JSON.stringify(v);
    const E = [];
    return JSON.stringify(v, function(N, R) {
      if (!S.isObject(R))
        return R;
      for (; E.length && E[E.length - 1] !== this; )
        E.pop();
      return E.push(R), m(M + E.length - 1), R;
    });
  }
  function w(v, M, E) {
    let y = v;
    if (S.isReactNative(t) && S.isReactNativeBlob(v))
      return t.append(mo(E, M, s), f(v)), !1;
    if (v && !E && typeof v == "object") {
      if (S.endsWith(M, "{}"))
        M = r ? M : M.slice(0, -2), v = b(v, 1);
      else if (S.isArray(v) && D1(v) || (S.isFileList(v) || S.endsWith(M, "[]")) && (y = S.toArray(v)))
        return M = Zu(M), y.forEach(function(R, U) {
          !(S.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? mo([M], U, s) : i === null ? M : M + "[]",
            f(R)
          );
        }), !1;
    }
    return Vo(v) ? !0 : (t.append(mo(E, M, s), f(v)), !1);
  }
  const T = Object.assign(F1, {
    defaultVisitor: w,
    convertValue: f,
    isVisitable: Vo
  });
  function A(v, M, E = 0) {
    if (!S.isUndefined(v)) {
      if (m(E), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + M.join("."));
      c.push(v), S.forEach(v, function(N, R) {
        (!(S.isUndefined(N) || N === null) && o.call(t, N, S.isString(R) ? R.trim() : R, M, T)) === !0 && A(N, M ? M.concat(R) : [R], E + 1);
      }), c.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function fl(e) {
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
function Ti(e, t) {
  this._pairs = [], e && Ws(e, this, t);
}
const ef = Ti.prototype;
ef.append = function(t, n) {
  this._pairs.push([t, n]);
};
ef.toString = function(t) {
  const n = t ? (r) => t.call(this, r, fl) : fl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function U1(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function tf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = S.isFunction(n) ? {
    serialize: n
  } : n, o = S.getSafeProp(r, "encode") || U1, s = S.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = S.isURLSearchParams(t) ? t.toString() : new Ti(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class dl {
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
const Ai = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, H1 = typeof URLSearchParams < "u" ? URLSearchParams : Ti, $1 = typeof FormData < "u" ? FormData : null, V1 = typeof Blob < "u" ? Blob : null, j1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: H1,
    FormData: $1,
    Blob: V1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, wi = typeof window < "u" && typeof document < "u", jo = typeof navigator == "object" && navigator || void 0, W1 = wi && (!jo || ["ReactNative", "NativeScript", "NS"].indexOf(jo.product) < 0), B1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", K1 = wi && window.location.href || "http://localhost", q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: wi,
  hasStandardBrowserEnv: W1,
  hasStandardBrowserWebWorkerEnv: B1,
  navigator: jo,
  origin: K1
}, Symbol.toStringTag, { value: "Module" })), Ue = {
  ...q1,
  ...j1
};
function z1(e, t) {
  return Ws(e, new Ue.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return Ue.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const hl = Qu;
function nf(e) {
  if (e > hl)
    throw new z(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + hl,
      z.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function G1(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    nf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function Y1(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function rf(e) {
  function t(n, r, o, s) {
    nf(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && S.isArray(o) ? o.length : i, l ? (S.hasOwnProp(o, i) ? o[i] = S.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !a) : ((!S.hasOwnProp(o, i) || !S.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && S.isArray(o[i]) && (o[i] = Y1(o[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, o) => {
      t(G1(r), o, n, 0);
    }), n;
  }
  return null;
}
const Cn = (e, t) => e != null && S.hasOwnProp(e, t) ? e[t] : void 0;
function X1(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xr = {
  transitional: Ai,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = S.isObject(t);
      if (s && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
        return o ? JSON.stringify(rf(t)) : t;
      if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
        return t;
      if (S.isArrayBufferView(t))
        return t.buffer;
      if (S.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        const l = Cn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return z1(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Cn(this, "env"), c = u && u.FormData;
          return Ws(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), X1(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Cn(this, "transitional") || xr.transitional, r = n && n.forcedJSONParsing, o = Cn(this, "responseType"), s = o === "json";
      if (S.isResponse(t) || S.isReadableStream(t))
        return t;
      if (t && S.isString(t) && (r && !o || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Cn(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? z.from(l, z.ERR_BAD_RESPONSE, this, null, Cn(this, "response")) : l;
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
  xr.headers[e] = {};
});
function po(e, t) {
  const n = this || xr, r = t || n, o = Ge.from(r.headers);
  let s = r.data;
  return S.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function sf(e) {
  return !!(e && e.__CANCEL__);
}
let Dr = class extends z {
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
    super(t ?? "canceled", z.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function of(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new z(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? z.ERR_BAD_REQUEST : z.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function J1(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Q1(e, t) {
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
function Z1(e, t) {
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
const ys = (e, t, n = 3) => {
  let r = 0;
  const o = Q1(50, 250);
  return Z1((s) => {
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
}, ml = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, pl = (e) => (...t) => S.asap(() => e(...t)), e_ = Ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ue.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ue.origin),
  Ue.navigator && /(msie|trident)/i.test(Ue.navigator.userAgent)
) : () => !0, t_ = Ue.hasStandardBrowserEnv ? (
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
function n_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function r_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const s_ = /^https?:(?!\/\/)/i, o_ = /[\t\n\r]/g;
function i_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function a_(e) {
  return i_(e).replace(o_, "");
}
function _l(e, t) {
  if (typeof e == "string" && s_.test(a_(e)))
    throw new z(
      'Invalid URL: missing "//" after protocol',
      z.ERR_INVALID_URL,
      t
    );
}
function af(e, t, n, r) {
  _l(t, r);
  let o = !n_(t);
  return e && (o || n === !1) ? (_l(e, r), r_(e, t)) : t;
}
const gl = (e) => e instanceof Ge ? { ...e } : e;
function wn(e, t) {
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
    headers: (c, f, m) => o(gl(c), gl(f), m, !0)
  };
  return S.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = S.hasOwnProp(u, f) ? u[f] : o, b = S.hasOwnProp(e, f) ? e[f] : void 0, w = S.hasOwnProp(t, f) ? t[f] : void 0, T = m(b, w, f);
    S.isUndefined(T) && m !== l || (n[f] = T);
  }), S.hasOwnProp(t, "validateStatus") && S.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const l_ = ["content-type", "content-length"];
function c_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    l_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const u_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function lf(e) {
  const t = wn({}, e), n = (m) => S.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = a = Ge.from(a), t.url = tf(
    af(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = S.getSafeProp(l, "username") || "", b = S.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (b ? u_(b) : ""))
      );
    } catch (w) {
      throw z.from(w, z.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (S.isFormData(r) && (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv || S.isReactNative(r) ? a.setContentType(void 0) : S.isFunction(r.getHeaders) && c_(a, r.getHeaders(), n("formDataHeaderPolicy"))), Ue.hasStandardBrowserEnv && (S.isFunction(o) && (o = o(t)), o === !0 || o == null && e_(t.url))) {
    const b = s && i && t_.read(i);
    b && a.set(s, b);
  }
  return t;
}
const f_ = typeof XMLHttpRequest < "u", d_ = f_ && function(e) {
  return new Promise(function(n, r) {
    const o = lf(e);
    let s = o.data;
    const i = Ge.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, c, f, m, b, w;
    function T() {
      b && b(), w && w(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let A = new XMLHttpRequest();
    A.open(o.method.toUpperCase(), o.url, !0), A.timeout = o.timeout;
    function v() {
      if (!A)
        return;
      const E = Ge.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), N = {
        data: !a || a === "text" || a === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: E,
        config: e,
        request: A
      };
      of(
        function(U) {
          n(U), T();
        },
        function(U) {
          r(U), T();
        },
        N
      ), A = null;
    }
    "onloadend" in A ? A.onloadend = v : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.startsWith("file:")) || setTimeout(v);
    }, A.onabort = function() {
      A && (r(new z("Request aborted", z.ECONNABORTED, e, A)), T(), A = null);
    }, A.onerror = function(y) {
      const N = y && y.message ? y.message : "Network Error", R = new z(N, z.ERR_NETWORK, e, A);
      R.event = y || null, r(R), T(), A = null;
    }, A.ontimeout = function() {
      let y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || Ai;
      o.timeoutErrorMessage && (y = o.timeoutErrorMessage), r(
        new z(
          y,
          N.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
          e,
          A
        )
      ), T(), A = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in A && S.forEach(Xu(i), function(y, N) {
      A.setRequestHeader(N, y);
    }), S.isUndefined(o.withCredentials) || (A.withCredentials = !!o.withCredentials), a && a !== "json" && (A.responseType = o.responseType), u && ([m, w] = ys(u, !0), A.addEventListener("progress", m)), l && A.upload && ([f, b] = ys(l), A.upload.addEventListener("progress", f), A.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (E) => {
      A && (r(!E || E.type ? new Dr(null, e, A) : E), A.abort(), T(), A = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const M = J1(o.url);
    if (M && !Ue.protocols.includes(M)) {
      r(
        new z(
          "Unsupported protocol " + M + ":",
          z.ERR_BAD_REQUEST,
          e
        )
      ), T();
      return;
    }
    A.send(s || null);
  });
}, h_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof z ? u : new Dr(u instanceof Error ? u.message : u)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, o(new z(`timeout of ${t}ms exceeded`, z.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((l) => l.addEventListener("abort", o, { once: !0 }));
  const { signal: a } = n;
  return a.unsubscribe = () => S.asap(i), a;
}, m_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, p_ = async function* (e, t) {
  for await (const n of __(e))
    yield* m_(n, t);
}, __ = async function* (e) {
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
}, bl = (e, t, n, r) => {
  const o = p_(e, t);
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
}, Es = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, g_ = (e, t, n) => t + 2 < n && Es(e.charCodeAt(t + 1)) && Es(e.charCodeAt(t + 2));
function b_(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const a = r.length;
    for (let b = 0; b < a; b++)
      if (r.charCodeAt(b) === 37 && b + 2 < a) {
        const w = r.charCodeAt(b + 1), T = r.charCodeAt(b + 2);
        Es(w) && Es(T) && (i -= 2, b += 2);
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
    if (l === 37 && g_(r, i, a))
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
const Oi = "1.18.1", yl = 64 * 1024, { isFunction: Kr } = S, y_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), El = (e) => {
  if (!S.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, vl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, E_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, v_ = (e) => {
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
  const { fetch: o, Request: s, Response: i } = e, a = o ? Kr(o) : typeof fetch == "function", l = Kr(s), u = Kr(i);
  if (!a)
    return !1;
  const c = a && Kr(n), f = a && (typeof r == "function" ? /* @__PURE__ */ ((v) => (M) => v.encode(M))(new r()) : async (v) => new Uint8Array(await new s(v).arrayBuffer())), m = l && c && vl(() => {
    let v = !1;
    const M = new s(Ue.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), E = M.headers.has("Content-Type");
    return M.body != null && M.body.cancel(), v && !E;
  }), b = u && c && vl(() => S.isReadableStream(new i("").body)), w = {
    stream: b && ((v) => v.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !w[v] && (w[v] = (M, E) => {
      let y = M && M[v];
      if (y)
        return y.call(M);
      throw new z(
        `Response type '${v}' is not supported`,
        z.ERR_NOT_SUPPORT,
        E
      );
    });
  });
  const T = async (v) => {
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
  }, A = async (v, M) => {
    const E = S.toFiniteNumber(v.getContentLength());
    return E ?? T(M);
  };
  return async (v) => {
    let {
      url: M,
      method: E,
      data: y,
      signal: N,
      cancelToken: R,
      timeout: U,
      onDownloadProgress: F,
      onUploadProgress: I,
      responseType: K,
      headers: Y,
      withCredentials: H = "same-origin",
      fetchOptions: Z,
      maxContentLength: se,
      maxBodyLength: ue
    } = lf(v);
    const $ = S.isNumber(se) && se > -1, B = S.isNumber(ue) && ue > -1, J = (oe) => S.hasOwnProp(v, oe) ? v[oe] : void 0;
    let Ee = o || fetch;
    K = K ? (K + "").toLowerCase() : "text";
    let Se = h_(
      [N, R && R.toAbortSignal()],
      U
    ), re = null;
    const he = Se && Se.unsubscribe && (() => {
      Se.unsubscribe();
    });
    let Ne, Ve = null;
    const it = () => new z(
      "Request body larger than maxBodyLength limit",
      z.ERR_BAD_REQUEST,
      v,
      re
    );
    try {
      let oe;
      const Te = J("auth");
      if (Te) {
        const L = S.getSafeProp(Te, "username") || "", k = S.getSafeProp(Te, "password") || "";
        oe = {
          username: L,
          password: k
        };
      }
      if (E_(M)) {
        const L = new URL(M, Ue.origin);
        if (!oe && (L.username || L.password)) {
          const k = El(L.username), W = El(L.password);
          oe = {
            username: k,
            password: W
          };
        }
        (L.username || L.password) && (L.username = "", L.password = "", M = L.href);
      }
      if (oe && (Y.delete("authorization"), Y.set(
        "Authorization",
        "Basic " + btoa(y_((oe.username || "") + ":" + (oe.password || "")))
      )), $ && typeof M == "string" && M.startsWith("data:") && b_(M) > se)
        throw new z(
          "maxContentLength size of " + se + " exceeded",
          z.ERR_BAD_RESPONSE,
          v,
          re
        );
      if (B && E !== "get" && E !== "head") {
        const L = await T(y);
        if (typeof L == "number" && isFinite(L) && (Ne = L, L > ue))
          throw it();
      }
      const je = B && (S.isReadableStream(y) || S.isStream(y)), Ye = (L, k, W) => bl(
        L,
        yl,
        (V) => {
          if (B && V > ue)
            throw Ve = it();
          k && k(V);
        },
        W
      );
      if (m && E !== "get" && E !== "head" && (I || je)) {
        if (Ne = Ne ?? await A(Y, y), Ne !== 0 || je) {
          let L = new s(M, {
            method: "POST",
            body: y,
            duplex: "half"
          }), k;
          if (S.isFormData(y) && (k = L.headers.get("content-type")) && Y.setContentType(k), L.body) {
            const [W, V] = I && ml(
              Ne,
              ys(pl(I))
            ) || [];
            y = Ye(L.body, W, V);
          }
        }
      } else if (je && !l && c && E !== "get" && E !== "head")
        y = Ye(y);
      else if (je && l && !m && E !== "get" && E !== "head")
        throw new z(
          "Stream request bodies are not supported by the current fetch implementation",
          z.ERR_NOT_SUPPORT,
          v,
          re
        );
      S.isString(H) || (H = H ? "include" : "omit");
      const De = l && "credentials" in s.prototype;
      if (S.isFormData(y)) {
        const L = Y.getContentType();
        L && /^multipart\/form-data/i.test(L) && !/boundary=/i.test(L) && Y.delete("content-type");
      }
      Y.set("User-Agent", "axios/" + Oi, !1);
      const ft = {
        ...Z,
        signal: Se,
        method: E.toUpperCase(),
        headers: Xu(Y.normalize()),
        body: y,
        duplex: "half",
        credentials: De ? H : void 0
      };
      re = l && new s(M, ft);
      let p = await (l ? Ee(re, Z) : Ee(M, ft));
      const g = Ge.from(p.headers);
      if ($) {
        const L = S.toFiniteNumber(g.getContentLength());
        if (L != null && L > se)
          throw new z(
            "maxContentLength size of " + se + " exceeded",
            z.ERR_BAD_RESPONSE,
            v,
            re
          );
      }
      const _ = b && (K === "stream" || K === "response");
      if (b && p.body && (F || $ || _ && he)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((O) => {
          L[O] = p[O];
        });
        const k = S.toFiniteNumber(g.getContentLength()), [W, V] = F && ml(
          k,
          ys(pl(F), !0)
        ) || [];
        let d = 0;
        const h = (O) => {
          if ($ && (d = O, d > se))
            throw new z(
              "maxContentLength size of " + se + " exceeded",
              z.ERR_BAD_RESPONSE,
              v,
              re
            );
          W && W(O);
        };
        p = new i(
          bl(p.body, yl, h, () => {
            V && V(), he && he();
          }),
          L
        );
      }
      K = K || "text";
      let P = await w[S.findKey(w, K) || "text"](
        p,
        v
      );
      if ($ && !b && !_) {
        let L;
        if (P != null && (typeof P.byteLength == "number" ? L = P.byteLength : typeof P.size == "number" ? L = P.size : typeof P == "string" && (L = typeof r == "function" ? new r().encode(P).byteLength : P.length)), typeof L == "number" && L > se)
          throw new z(
            "maxContentLength size of " + se + " exceeded",
            z.ERR_BAD_RESPONSE,
            v,
            re
          );
      }
      return !_ && he && he(), await new Promise((L, k) => {
        of(L, k, {
          data: P,
          headers: Ge.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: v,
          request: re
        });
      });
    } catch (oe) {
      if (he && he(), Se && Se.aborted && Se.reason instanceof z) {
        const Te = Se.reason;
        throw Te.config = v, re && (Te.request = re), oe !== Te && Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: oe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      if (Ve)
        throw re && !Ve.request && (Ve.request = re), Ve;
      if (oe instanceof z)
        throw re && !oe.request && (oe.request = re), oe;
      if (oe && oe.name === "TypeError" && /Load failed|fetch/i.test(oe.message)) {
        const Te = new z(
          "Network Error",
          z.ERR_NETWORK,
          v,
          re,
          oe && oe.response
        );
        throw Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: oe.cause || oe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      throw z.from(oe, oe && oe.code, v, re, oe && oe.response);
    }
  };
}, S_ = /* @__PURE__ */ new Map(), cf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let i = s.length, a = i, l, u, c = S_;
  for (; a--; )
    l = s[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : v_(t)), c = u;
  return u;
};
cf();
const Li = {
  http: x1,
  xhr: d_,
  fetch: {
    get: cf
  }
};
S.forEach(Li, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Sl = (e) => `- ${e}`, T_ = (e) => S.isFunction(e) || e === null || e === !1;
function A_(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !T_(r) && (o = Li[(a = String(r)).toLowerCase()], o === void 0))
      throw new z(`Unknown adapter '${a}'`);
    if (o && (S.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Sl).join(`
`) : " " + Sl(i[0]) : "as no adapter specified";
    throw new z(
      "There is no suitable adapter to dispatch the request " + a,
      z.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const uf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: A_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Li
};
function _o(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Dr(null, e);
}
function Tl(e) {
  return _o(e), e.headers = Ge.from(e.headers), e.data = po.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), uf.getAdapter(e.adapter || xr.adapter, e)(e).then(
    function(r) {
      _o(e), e.response = r;
      try {
        r.data = po.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Ge.from(r.headers), r;
    },
    function(r) {
      if (!sf(r) && (_o(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = po.call(
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
const Bs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bs[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Al = {};
Bs.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Oi + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new z(
        o(i, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return n && !Al[i] && (Al[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Bs.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function w_(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new z(
          "option " + s + " must be " + l,
          z.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new z("Unknown option " + s, z.ERR_BAD_OPTION);
  }
}
const ss = {
  assertOptions: w_,
  validators: Bs
}, We = ss.validators;
let vn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new dl(),
      response: new dl()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = wn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && ss.assertOptions(
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
    } : ss.assertOptions(
      o,
      {
        encode: We.function,
        serialize: We.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ss.assertOptions(
      n,
      {
        baseUrl: We.spelling("baseURL"),
        withXsrfToken: We.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && S.merge(s.common, s[n.method]);
    s && S.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (w) => {
      delete s[w];
    }), n.headers = Ge.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(T) {
      if (typeof T.runWhen == "function" && T.runWhen(n) === !1)
        return;
      l = l && T.synchronous;
      const A = n.transitional || Ai;
      A && A.legacyInterceptorReqResOrdering ? a.unshift(T.fulfilled, T.rejected) : a.push(T.fulfilled, T.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(T) {
      u.push(T.fulfilled, T.rejected);
    });
    let c, f = 0, m;
    if (!l) {
      const w = [Tl.bind(this), void 0];
      for (w.unshift(...a), w.push(...u), m = w.length, c = Promise.resolve(n); f < m; )
        c = c.then(w[f++], w[f++]);
      return c;
    }
    m = a.length;
    let b = n;
    for (; f < m; ) {
      const w = a[f++], T = a[f++];
      try {
        b = w(b);
      } catch (A) {
        T.call(this, A);
        break;
      }
    }
    try {
      c = Tl.call(this, b);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const n = af(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return tf(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  vn.prototype[t] = function(n, r) {
    return this.request(
      wn(r || {}, {
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
        wn(a || {}, {
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
  vn.prototype[t] = n(), t !== "query" && (vn.prototype[t + "Form"] = n(!0));
});
let O_ = class ff {
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
      r.reason || (r.reason = new Dr(s, i, a), n(r.reason));
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
      token: new ff(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function L_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function C_(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Wo = {
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
Object.entries(Wo).forEach(([e, t]) => {
  Wo[t] = e;
});
function df(e) {
  const t = new vn(e), n = Vu(vn.prototype.request, t);
  return S.extend(n, vn.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return df(wn(e, o));
  }, n;
}
const Le = df(xr);
Le.Axios = vn;
Le.CanceledError = Dr;
Le.CancelToken = O_;
Le.isCancel = sf;
Le.VERSION = Oi;
Le.toFormData = Ws;
Le.AxiosError = z;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = L_;
Le.isAxiosError = C_;
Le.mergeConfig = wn;
Le.AxiosHeaders = Ge;
Le.formToJSON = (e) => rf(S.isHTMLForm(e) ? new FormData(e) : e);
Le.getAdapter = uf.getAdapter;
Le.HttpStatusCode = Wo;
Le.default = Le;
const {
  Axios: p2,
  AxiosError: _2,
  CanceledError: g2,
  isCancel: b2,
  CancelToken: y2,
  VERSION: E2,
  all: v2,
  Cancel: S2,
  isAxiosError: T2,
  spread: A2,
  toFormData: w2,
  AxiosHeaders: O2,
  HttpStatusCode: L2,
  formToJSON: C2,
  getAdapter: R2,
  mergeConfig: I2,
  create: N2
} = Le, R_ = "X-Admin-UI-Request", I_ = "X-User-UI-Request";
function wl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function hf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function N_(e) {
  const t = hf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function P_(e) {
  const t = N_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function M_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return wl(hf(e)) || wl(n);
}
function k_(e) {
  return P_(e);
}
const dr = "/api/v1", x_ = D_();
function Ci(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function D_(e) {
  const n = (String(dr).trim() || dr).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Ci(n);
}
function Cr() {
  return x_;
}
function P2(e) {
  const t = Cr().replace(/\/+$/, "");
  let n = Ci(e);
  return n === dr ? n = "" : n.startsWith(`${dr}/`) && (n = n.slice(dr.length)), `${t}${n}`;
}
function M2(e) {
  const t = Ci(e);
  try {
    return `${typeof window > "u" ? new URL(Cr()).origin : new URL(Cr(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Ri = "auth_token", F_ = "auth_user", Ks = "refresh_token", Ii = "token_expires_at", U_ = "sub2api-auth-token-refresh", Ol = 3e4, mf = 1e3, H_ = 1e3, $_ = 25;
let tr = null;
function Ni() {
  const e = localStorage.getItem(F_);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function V_() {
  const e = localStorage.getItem(Ks);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Ri),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Ii)),
    userID: Ni()
  };
}
function j_(e) {
  const t = localStorage.getItem(Ri), n = localStorage.getItem(Ks), r = Number(localStorage.getItem(Ii));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Ni() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function vs(e, t) {
  const n = j_(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function W_(e, t, n = Date.now() + mf) {
  for (; Date.now() < n; ) {
    const r = vs(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, $_));
  }
  return vs(e, t);
}
function B_(e) {
  localStorage.setItem(Ri, e.access_token), localStorage.setItem(Ii, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(Ks, e.refresh_token);
}
async function K_(e, t, n = !1) {
  var o;
  const r = Date.now() + Ol + H_;
  try {
    const i = (await Le.post(
      `${Cr()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Ol }
    )).data;
    if (i.code !== 0 || !i.data)
      throw new Error(i.message || "Token refresh failed");
    if (localStorage.getItem(Ks) !== e.refreshToken || Ni() !== e.userID) {
      const a = vs(e, t);
      if (a)
        return a;
      throw new Error("Session changed during token refresh");
    }
    return B_(i.data), i.data;
  } catch (s) {
    const i = (o = s.response) == null ? void 0 : o.status, a = typeof i == "number" && i >= 400 && i < 500, l = await W_(
      e,
      t,
      a && n ? r : Date.now() + mf
    );
    if (l)
      return l;
    throw s;
  }
}
async function q_(e) {
  const t = V_(), n = async (r = !1) => {
    const o = vs(t, e.failedAccessToken);
    return o || K_(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(U_, () => n(!1)) : n(!0);
}
function pf(e = {}) {
  if (tr)
    return tr;
  const t = q_(e);
  tr = t;
  const n = () => {
    tr === t && (tr = null);
  };
  return t.then(n, n), t;
}
const de = Le.create({
  baseURL: Cr(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), z_ = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
de.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = $u()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = z_()), e.headers) {
      const n = String(e.url || "");
      M_(n) && (e.headers[R_] = "1"), k_(n) && (e.headers[I_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
de.interceptors.response.use(
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
    if (e.code === "ERR_CANCELED" || Le.isCancel(e))
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
          const w = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const T = t.headers, A = (T == null ? void 0 : T.Authorization) ?? (T == null ? void 0 : T.authorization), v = typeof A == "string" && A.startsWith("Bearer ") ? A.slice(7) : null, M = await pf({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${M.access_token}`), de(t);
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
async function G_() {
  const { data: e } = await de.get("/admin/system/version");
  return e;
}
async function _f(e = !1) {
  const { data: t } = await de.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
async function Y_() {
  const { data: e } = await de.get(
    "/admin/system/rollback-versions"
  );
  return e;
}
const gf = 900 * 1e3;
async function X_() {
  const { data: e } = await de.post("/admin/system/update", void 0, {
    timeout: gf
  });
  return e;
}
async function J_(e) {
  const { data: t } = await de.post(
    "/admin/system/rollback",
    e ? { version: e } : void 0,
    { timeout: gf }
  );
  return t;
}
async function Q_() {
  const { data: e } = await de.post("/admin/system/restart");
  return e;
}
const k2 = {
  getVersion: G_,
  checkUpdates: _f,
  performUpdate: X_,
  getRollbackVersions: Y_,
  rollback: J_,
  restartService: Q_
};
function Pi(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function qs(e) {
  localStorage.setItem("auth_token", e);
}
function zs(e) {
  localStorage.setItem("refresh_token", e);
}
function Gs(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function bf() {
  return localStorage.getItem("auth_token");
}
function yf() {
  return localStorage.getItem("refresh_token");
}
function Z_() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Ef() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function eg(e) {
  const { data: t } = await de.post("/auth/login", e);
  return Pi(t) || (qs(t.access_token), t.refresh_token && zs(t.refresh_token), t.expires_in && Gs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function tg(e) {
  const { data: t } = await de.post("/auth/login/2fa", e);
  return qs(t.access_token), t.refresh_token && zs(t.refresh_token), t.expires_in && Gs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function ng(e) {
  const { data: t } = await de.post("/auth/register", e);
  return qs(t.access_token), t.refresh_token && zs(t.refresh_token), t.expires_in && Gs(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function rg() {
  return de.get("/auth/me");
}
async function sg() {
  const e = yf();
  if (e)
    try {
      await de.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Ef();
}
function vf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function og(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function ig(e) {
  return og(e) ? "login" : "bind";
}
function ag(e) {
  return ig(e);
}
function lg(e) {
  return e.error === "invitation_required";
}
function cg(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function ug() {
  return pf();
}
async function fg() {
  const { data: e } = await de.post("/auth/revoke-all-sessions");
  return e;
}
function dg() {
  return bf() !== null;
}
async function Sf() {
  const { data: e } = await de.get("/settings/public");
  return e;
}
async function hg(e) {
  const { data: t } = await de.post("/auth/send-verify-code", e);
  return t;
}
async function mg(e) {
  const { data: t } = await de.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function pg(e) {
  const { data: t } = await de.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function _g(e) {
  const { data: t } = await de.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function gg(e) {
  const { data: t } = await de.post("/auth/forgot-password", e);
  return t;
}
async function bg(e) {
  const { data: t } = await de.post("/auth/reset-password", e);
  return t;
}
async function yg(e, t, n) {
  return Tf(e, t, n);
}
async function Eg(e, t, n) {
  return Af(e, t, n);
}
async function vg(e, t, n) {
  return wf(e, t, n);
}
async function Ys(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await de.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...vf(n)
    }
  );
  return s;
}
async function Tf(e, t, n) {
  return Ys("linuxdo", e, t, n);
}
async function Af(e, t, n) {
  return Ys("oidc", e, t, n);
}
async function wf(e, t, n) {
  return Ys("wechat", e, t, n);
}
async function Sg(e, t, n) {
  return Ys("dingtalk", e, t, n);
}
async function Of(e) {
  const { data: t } = await de.post(
    "/auth/oauth/pending/exchange",
    vf(e)
  );
  return t;
}
async function Tg(e) {
  return Of(e);
}
const Rn = {
  login: eg,
  login2FA: tg,
  isTotp2FARequired: Pi,
  register: ng,
  getCurrentUser: rg,
  logout: sg,
  isAuthenticated: dg,
  setAuthToken: qs,
  setRefreshToken: zs,
  setTokenExpiresAt: Gs,
  getAuthToken: bf,
  getRefreshToken: yf,
  getTokenExpiresAt: Z_,
  clearAuthToken: Ef,
  getPublicSettings: Sf,
  sendVerifyCode: hg,
  sendPendingOAuthVerifyCode: mg,
  validatePromoCode: pg,
  validateInvitationCode: _g,
  forgotPassword: gg,
  resetPassword: bg,
  refreshToken: ug,
  revokeAllSessions: fg,
  getPendingOAuthBindLoginKind: ag,
  isPendingOAuthCreateAccountRequired: lg,
  hasPendingOAuthSuggestedProfile: cg,
  completePendingOAuthBindLogin: Of,
  createPendingLinuxDoOAuthAccount: Tf,
  createPendingOIDCOAuthAccount: Af,
  createPendingWeChatOAuthAccount: wf,
  exchangePendingOAuthCompletion: Tg,
  completeLinuxDoOAuthRegistration: yg,
  completeOIDCOAuthRegistration: Eg,
  completeWeChatOAuthRegistration: vg,
  createPendingDingTalkOAuthAccount: Sg
}, Ll = "零一 API", Lf = /* @__PURE__ */ ou("app", () => {
  const e = le(!1), t = le(!1), n = le(0), r = le(!1), o = le([]), s = le(!1), i = le(!1), a = le(Ll), l = le(""), u = le(""), c = le(""), f = le(""), m = le(""), b = le(null);
  let w = null, T = null, A = 0;
  const v = le(!1), M = le(!1), E = le(""), y = le(""), N = le(!1), R = le("source"), U = le(null);
  let F = 0;
  const I = Ce(() => o.value.length > 0), K = Ce(() => {
    var g;
    return ((g = b.value) == null ? void 0 : g.backend_mode_enabled) ?? !1;
  }), Y = le(0);
  function H() {
    e.value = !e.value;
  }
  function Z(g) {
    e.value = g;
  }
  function se() {
    t.value = !t.value;
  }
  function ue(g) {
    t.value = g;
  }
  function $(g) {
    g ? Y.value++ : Y.value = Math.max(0, Y.value - 1), r.value = Y.value > 0;
  }
  function B(g, _, P) {
    const L = `toast-${++F}`, k = {
      id: L,
      type: g,
      message: _,
      duration: P,
      startTime: P !== void 0 ? Date.now() : void 0
    };
    return o.value.push(k), P !== void 0 && setTimeout(() => {
      he(L);
    }, P), L;
  }
  function J(g, _ = 3e3) {
    return B("success", g, _);
  }
  function Ee(g, _ = 5e3) {
    return B("error", g, _);
  }
  function Se(g, _ = 3e3) {
    return B("info", g, _);
  }
  function re(g, _ = 4e3) {
    return B("warning", g, _);
  }
  function he(g) {
    const _ = o.value.findIndex((P) => P.id === g);
    _ !== -1 && o.value.splice(_, 1);
  }
  function Ne() {
    o.value = [];
  }
  async function Ve(g) {
    $(!0);
    try {
      return await g();
    } finally {
      $(!1);
    }
  }
  async function it(g, _) {
    $(!0);
    try {
      return await g();
    } catch (P) {
      const L = _ || P.message || Fn.global.t("common.unknownError");
      return Ee(L), null;
    } finally {
      $(!1);
    }
  }
  function oe() {
    e.value = !1, r.value = !1, Y.value = 0, o.value = [];
  }
  async function Te(g = !1) {
    if (v.value && !g)
      return {
        current_version: E.value,
        latest_version: y.value,
        has_update: N.value,
        build_type: R.value,
        release_info: U.value || void 0,
        cached: !0
      };
    if (M.value)
      return null;
    M.value = !0;
    try {
      const _ = await _f(g);
      return E.value = _.current_version, y.value = _.latest_version, N.value = _.has_update, R.value = _.build_type || "source", U.value = _.release_info || null, v.value = !0, _;
    } catch (_) {
      return console.error("Failed to fetch version:", _), null;
    } finally {
      M.value = !1;
    }
  }
  function je() {
    v.value = !1, N.value = !1;
  }
  function Ye(g) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ...g }), b.value = g, a.value = g.site_name || Ll, l.value = g.site_logo || "", u.value = g.version || "", c.value = g.contact_info || "", f.value = g.api_base_url || "", m.value = g.doc_url || "", s.value = !0;
  }
  function De(g = !1) {
    if (w)
      return g && !T && (A += 1, T = w.then(() => De(!0)).finally(() => {
        T = null;
      })), g ? T : w;
    if (g && (A += 1), !s.value && !g && window.__APP_CONFIG__)
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
    const _ = A;
    let P;
    try {
      P = Sf();
    } catch (k) {
      return console.error("Failed to fetch public settings:", k), i.value = !1, Promise.resolve(null);
    }
    const L = P.then((k) => (_ === A && Ye(k), k)).catch((k) => (console.error("Failed to fetch public settings:", k), null)).finally(() => {
      w === L && (w = null, i.value = !1);
    });
    return w = L, L;
  }
  function ft() {
    A += 1, s.value = !1, b.value = null;
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
    versionLoading: M,
    currentVersion: E,
    latestVersion: y,
    hasUpdate: N,
    buildType: R,
    releaseInfo: U,
    // Computed
    hasActiveToasts: I,
    backendModeEnabled: K,
    // Actions
    toggleSidebar: H,
    setSidebarCollapsed: Z,
    toggleMobileSidebar: se,
    setMobileOpen: ue,
    setLoading: $,
    showToast: B,
    showSuccess: J,
    showError: Ee,
    showInfo: Se,
    showWarning: re,
    hideToast: he,
    clearAllToasts: Ne,
    withLoading: Ve,
    withLoadingAndError: it,
    reset: oe,
    // Version actions
    fetchVersion: Te,
    clearVersionCache: je,
    // Public settings actions
    fetchPublicSettings: De,
    clearPublicSettingsCache: ft,
    initFromInjectedConfig: p
  };
}), Ag = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, wg = { class: "p-4" }, Og = { class: "flex items-start gap-3" }, Lg = { class: "mt-0.5 flex-shrink-0" }, Cg = { class: "min-w-0 flex-1" }, Rg = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, Ig = ["onClick"], Ng = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, Pg = /* @__PURE__ */ qn({
  __name: "Toast",
  setup(e) {
    const t = Lf(), n = Ce(() => t.toasts), r = (l) => {
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
    return (l, u) => (Dt(), ds(Od, { to: "body" }, [
      ht("div", Ag, [
        Ie(Yh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: lc(() => [
            (Dt(!0), rr(ke, null, Hd(n.value, (c) => (Dt(), rr("div", {
              key: c.id,
              class: Qt([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              ht("div", wg, [
                ht("div", Og, [
                  ht("div", Lg, [
                    Ie(Oa, {
                      name: r(c.type),
                      size: "md",
                      class: Qt(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  ht("div", Cg, [
                    c.title ? (Dt(), rr("p", Rg, go(c.title), 1)) : ea("", !0),
                    ht("p", {
                      class: Qt([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, go(c.message), 3)
                  ]),
                  ht("button", {
                    onClick: (f) => a(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    Ie(Oa, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, Ig)
                ])
              ]),
              c.duration ? (Dt(), rr("div", Ng, [
                ht("div", {
                  class: Qt(["h-full toast-progress", i(c.type)]),
                  style: Cs({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : ea("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Mg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, kg = /* @__PURE__ */ Mg(Pg, [["__scopeId", "data-v-fc5fa96e"]]);
function Cf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function hr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function Jt(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function xg(e) {
  const t = { ...e };
  t.challenge = hr(String(t.challenge));
  const n = { ...t.user };
  return n.id = hr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: hr(String(r.id))
  }))), t;
}
function Dg(e) {
  const t = { ...e };
  return t.challenge = hr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: hr(String(n.id))
  }))), t;
}
function Fg(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: Jt(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: Jt(t.attestationObject),
      clientDataJSON: Jt(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function Ug(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: Jt(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: Jt(t.authenticatorData),
      clientDataJSON: Jt(t.clientDataJSON),
      signature: Jt(t.signature),
      userHandle: Jt(t.userHandle)
    }
  };
}
async function Hg(e) {
  Cf();
  const { data: t } = e ? await de.post("/auth/passkey/login/begin", e) : await de.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: Dg(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await de.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: Ug(n)
  });
  return r;
}
async function $g(e, t) {
  Cf();
  const { data: n } = await de.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: xg(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await de.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: Fg(r)
    }
  );
  return o;
}
async function Vg() {
  const { data: e } = await de.get("/user/passkeys");
  return e;
}
async function jg(e, t) {
  await de.patch(`/user/passkeys/${e}`, { name: t });
}
async function Wg(e, t) {
  await de.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Bg = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Hg,
  register: $g,
  list: Vg,
  rename: jg,
  remove: Wg
}, qr = "auth_token", zr = "auth_user", Gr = "refresh_token", Yr = "token_expires_at", mr = "pending_auth_session", Kg = 60 * 1e3, qg = 120 * 1e3;
function zg(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function Cl() {
  const e = localStorage.getItem(mr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: zg(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(mr), null);
  } catch {
    return localStorage.removeItem(mr), null;
  }
}
function Gg(e) {
  localStorage.setItem(mr, JSON.stringify(e));
}
function Rl() {
  localStorage.removeItem(mr);
}
const Yg = /* @__PURE__ */ ou("auth", () => {
  const e = le(null), t = le(null), n = le(null), r = le(null), o = le("standard"), s = le(null);
  let i = null, a = null;
  const l = Ce(() => !!t.value && !!e.value), u = Ce(() => {
    var $;
    return (($ = e.value) == null ? void 0 : $.role) === "admin";
  }), c = Ce(() => o.value === "simple"), f = Ce(() => s.value !== null);
  function m($) {
    const B = localStorage.getItem(qr), J = localStorage.getItem(zr), Ee = localStorage.getItem(Gr), Se = localStorage.getItem(Yr);
    if (s.value = Cl(), B && J)
      try {
        const re = JSON.parse(J), { run_mode: he, ...Ne } = re;
        return t.value = B, e.value = Ne, o.value = $ ?? he ?? "standard", n.value = Ee, r.value = Se ? parseInt(Se, 10) : null, !0;
      } catch (re) {
        console.error("Failed to parse saved user data:", re), ue({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function b($) {
    o.value = $;
  }
  function w() {
    m() && (se().catch(($) => {
      console.error("Failed to refresh user on init:", $);
    }), T(), n.value && r.value !== null && v(r.value));
  }
  function T() {
    A(), i = setInterval(() => {
      t.value && se().catch(($) => {
        console.error("Auto-refresh user failed:", $);
      });
    }, Kg);
  }
  function A() {
    i && (clearInterval(i), i = null);
  }
  function v($) {
    a && (clearTimeout(a), a = null);
    const B = Date.now(), J = Math.max(0, $ - B - qg);
    if (J <= 0) {
      E();
      return;
    }
    a = setTimeout(() => {
      E();
    }, J);
  }
  function M($) {
    const B = Date.now() + $ * 1e3;
    r.value = B, localStorage.setItem(Yr, String(B)), v(B);
  }
  async function E() {
    if (n.value)
      try {
        const $ = await Rn.refreshToken();
        t.value = $.access_token, n.value = $.refresh_token, M($.expires_in);
      } catch ($) {
        console.error("Token refresh failed:", $);
      }
  }
  function y() {
    a && (clearTimeout(a), a = null);
  }
  async function N($) {
    try {
      const B = await Rn.login($);
      return Pi(B) || F(B), B;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  async function R($, B) {
    try {
      const J = await Rn.login2FA({ temp_token: $, totp_code: B });
      return F(J), e.value;
    } catch (J) {
      throw ue({ preservePendingAuthSession: s.value !== null }), J;
    }
  }
  async function U($) {
    try {
      const B = await Bg.login($);
      return F(B), e.value;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  function F($) {
    t.value = $.access_token, $.refresh_token && (n.value = $.refresh_token, localStorage.setItem(Gr, $.refresh_token)), $.user.run_mode && (o.value = $.user.run_mode);
    const { run_mode: B, ...J } = $.user;
    e.value = J, localStorage.setItem(qr, $.access_token), localStorage.setItem(zr, JSON.stringify(J)), H(), T(), $.refresh_token && $.expires_in && M($.expires_in);
  }
  async function I($) {
    try {
      const B = await Rn.register($);
      return F(B), e.value;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  async function K($) {
    A(), y(), t.value = null, e.value = null, t.value = $, localStorage.setItem(qr, $);
    const B = localStorage.getItem(Gr), J = localStorage.getItem(Yr);
    B && (n.value = B), J && (r.value = parseInt(J, 10));
    try {
      const Ee = await se();
      return T(), B && r.value !== null && v(r.value), H(), Ee;
    } catch (Ee) {
      throw ue({ preservePendingAuthSession: s.value !== null }), Ee;
    }
  }
  function Y($) {
    if (s.value = $, $) {
      Gg($);
      return;
    }
    Rl();
  }
  function H() {
    Y(null);
  }
  async function Z() {
    try {
      await Rn.logout();
    } catch ($) {
      console.warn("Logout API call failed, clearing local session anyway", $);
    } finally {
      ue();
    }
  }
  async function se() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const $ = await Rn.getCurrentUser();
      $.data.run_mode && (o.value = $.data.run_mode);
      const { run_mode: B, ...J } = $.data;
      return e.value = J, localStorage.setItem(zr, JSON.stringify(J)), J;
    } catch ($) {
      throw $.status === 401 && ue({ preservePendingAuthSession: s.value !== null }), $;
    }
  }
  function ue($) {
    if (A(), y(), t.value = null, n.value = null, r.value = null, e.value = null, localStorage.removeItem(qr), localStorage.removeItem(zr), localStorage.removeItem(Gr), localStorage.removeItem(Yr), $ != null && $.preservePendingAuthSession) {
      s.value = Cl();
      return;
    }
    s.value = null, Rl();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: gr(o),
    pendingAuthSession: gr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: N,
    loginWithPasskey: U,
    login2FA: R,
    register: I,
    setToken: K,
    logout: Z,
    checkAuth: w,
    hydrateAuthSnapshot: m,
    setRunModeSnapshot: b,
    refreshUser: se,
    setPendingAuthSession: Y,
    clearPendingAuthSession: H
  };
}), Xg = {
  accounts: () => import("./AccountsView-CqGntwat.js"),
  groups: () => import("./GroupsView-BoyyLsHH.js")
};
async function Jg(e, t) {
  const [{ default: n }] = await Promise.all([
    Xg[e](),
    Ip()
  ]), r = cm(), o = Lf(r), s = Yg(r);
  o.initFromInjectedConfig(), s.hydrateAuthSnapshot(t.runMode);
  const a = im(/* @__PURE__ */ qn({
    name: "ZeroOneCNProviderAdminRoot",
    setup: () => () => [Tr(n), Tr(kg)]
  }));
  a.use(r), a.use(Fn);
  let l = !1;
  async function u(c) {
    s.setRunModeSnapshot(c.runMode), Fn.global.locale.value !== c.locale && (await Hu(c.locale), Fn.global.locale.value = c.locale);
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
const x2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prepareCNProviderSurface: Jg
}, Symbol.toStringTag, { value: "Module" }));
export {
  R_ as $,
  ds as A,
  Zg as B,
  o2 as C,
  Cs as D,
  Qt as E,
  ke as F,
  u2 as G,
  Ie as H,
  s2 as I,
  lc as J,
  i2 as K,
  Mg as L,
  Fn as M,
  f2 as N,
  $u as O,
  l2 as P,
  Yg as Q,
  c2 as R,
  a2 as S,
  Od as T,
  r2 as U,
  ni as V,
  Tr as W,
  Oh as X,
  Ns as Y,
  P2 as Z,
  Oa as _,
  de as a,
  ou as a0,
  ti as a1,
  t2 as a2,
  Ct as a3,
  ud as a4,
  M2 as a5,
  k2 as a6,
  Qg as a7,
  x2 as a8,
  Is as b,
  ai as c,
  ii as d,
  Ce as e,
  qn as f,
  Hl as g,
  yi as h,
  we as i,
  Lf as j,
  rr as k,
  ht as l,
  go as m,
  Hd as n,
  Vf as o,
  ph as p,
  ea as q,
  le as r,
  Dt as s,
  ce as t,
  tc as u,
  ri as v,
  yn as w,
  e2 as x,
  Ac as y,
  n2 as z
};
