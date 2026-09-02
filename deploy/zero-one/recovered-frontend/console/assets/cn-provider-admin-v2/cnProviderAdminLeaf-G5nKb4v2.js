/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function zo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, Pn = [], Ct = () => {
}, xl = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Go = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Yo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hf = Object.prototype.hasOwnProperty, pe = (e, t) => Hf.call(e, t), Q = Array.isArray, Nn = (e) => Ar(e) === "[object Map]", Ts = (e) => Ar(e) === "[object Set]", Di = (e) => Ar(e) === "[object Date]", ne = (e) => typeof e == "function", Le = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Dl = (e) => (ge(e) || ne(e)) && ne(e.then) && ne(e.catch), Fl = Object.prototype.toString, Ar = (e) => Fl.call(e), $f = (e) => Ar(e).slice(8, -1), Ul = (e) => Ar(e) === "[object Object]", As = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tr = /* @__PURE__ */ zo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ws = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vf = /-\w/g, at = ws(
  (e) => e.replace(Vf, (t) => t.slice(1).toUpperCase())
), jf = /\B([A-Z])/g, Wt = ws(
  (e) => e.replace(jf, "-$1").toLowerCase()
), Os = ws((e) => e.charAt(0).toUpperCase() + e.slice(1)), eo = ws(
  (e) => e ? `on${Os(e)}` : ""
), nt = (e, t) => !Object.is(e, t), qr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Hl = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Xo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wf = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Fi;
const Ls = () => Fi || (Fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Le(r) ? zf(r) : Cs(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Le(e) || ge(e))
    return e;
}
const Bf = /;(?![^(]*\))/g, Kf = /:([^]+)/, qf = /\/\*[^]*?\*\//g;
function zf(e) {
  const t = {};
  return e.replace(qf, "").split(Bf).forEach((n) => {
    if (n) {
      const r = n.split(Kf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Zt(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = Zt(e[n]);
      r && (t += r + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Gf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yf = /* @__PURE__ */ zo(Gf);
function $l(e) {
  return !!e || e === "";
}
function Xf(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Rs(e[r], t[r]);
  return n;
}
function Rs(e, t) {
  if (e === t) return !0;
  let n = Di(e), r = Di(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = gt(e), r = gt(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? Xf(e, t) : !1;
  if (n = ge(e), r = ge(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !Rs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Vl(e, t) {
  return e.findIndex((n) => Rs(n, t));
}
const jl = (e) => !!(e && e.__v_isRef === !0), Eo = (e) => Le(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === Fl || !ne(e.toString)) ? jl(e) ? Eo(e.value) : JSON.stringify(e, Wl, 2) : String(e), Wl = (e, t) => jl(t) ? Wl(e, t.value) : Nn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[to(r, s) + " =>"] = o, n),
    {}
  )
} : Ts(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => to(n))
} : gt(t) ? to(t) : ge(t) && !Q(t) && !Ul(t) ? String(t) : t, to = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class Bl {
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
function Jo(e) {
  return new Bl(e);
}
function Kl() {
  return Be;
}
function Jf(e, t = !1) {
  Be && Be.cleanups.push(e);
}
let ye;
const no = /* @__PURE__ */ new WeakSet();
class ql {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && Be.active && Be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, no.has(this) && (no.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ui(this), Yl(this);
    const t = ye, n = pt;
    ye = this, pt = !0;
    try {
      return this.fn();
    } finally {
      Xl(this), ye = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ei(t);
      this.deps = this.depsTail = void 0, Ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? no.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vo(this) && this.run();
  }
  get dirty() {
    return vo(this);
  }
}
let zl = 0, nr, rr;
function Gl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rr, rr = e;
    return;
  }
  e.next = nr, nr = e;
}
function Qo() {
  zl++;
}
function Zo() {
  if (--zl > 0)
    return;
  if (rr) {
    let t = rr;
    for (rr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; nr; ) {
    let t = nr;
    for (nr = void 0; t; ) {
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
function Yl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xl(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ei(r), Qf(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dr) || (e.globalVersion = dr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, r = pt;
  ye = e, pt = !0;
  try {
    Yl(e);
    const o = e.fn(e._value);
    (t.version === 0 || nt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ye = n, pt = r, Xl(e), e.flags &= -3;
  }
}
function ei(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ei(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Qf(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const Ql = [];
function $t() {
  Ql.push(pt), pt = !1;
}
function Vt() {
  const e = Ql.pop();
  pt = e === void 0 ? !0 : e;
}
function Ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ye;
    ye = void 0;
    try {
      t();
    } finally {
      ye = n;
    }
  }
}
let dr = 0;
class Zf {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Is {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ye || !pt || ye === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ye)
      n = this.activeLink = new Zf(ye, this), ye.deps ? (n.prevDep = ye.depsTail, ye.depsTail.nextDep = n, ye.depsTail = n) : ye.deps = ye.depsTail = n, Zl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ye.depsTail, n.nextDep = void 0, ye.depsTail.nextDep = n, ye.depsTail = n, ye.deps === n && (ye.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, dr++, this.notify(t);
  }
  notify(t) {
    Qo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zo();
    }
  }
}
function Zl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Zl(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ts = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ Symbol(
  ""
), So = /* @__PURE__ */ Symbol(
  ""
), hr = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
  if (pt && ye) {
    let r = ts.get(e);
    r || ts.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Is()), o.map = r, o.key = n), o.track();
  }
}
function xt(e, t, n, r, o, s) {
  const i = ts.get(e);
  if (!i) {
    dr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Qo(), t === "clear")
    i.forEach(a);
  else {
    const l = Q(e), u = l && As(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, m) => {
        (m === "length" || m === hr || !gt(m) && m >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(hr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(gn)), Nn(e) && a(i.get(So)));
          break;
        case "delete":
          l || (a(i.get(gn)), Nn(e) && a(i.get(So)));
          break;
        case "set":
          Nn(e) && a(i.get(gn));
          break;
      }
  }
  Zo();
}
function ed(e, t) {
  const n = ts.get(e);
  return n && n.get(t);
}
function wn(e) {
  const t = ce(e);
  return t === e ? t : (Ke(t, "iterate", hr), it(e) ? t : t.map(bt));
}
function Ps(e) {
  return Ke(e = ce(e), "iterate", hr), e;
}
function Yt(e, t) {
  return jt(e) ? Ht(e) ? Fn(bt(t)) : Fn(t) : bt(t);
}
const td = {
  __proto__: null,
  [Symbol.iterator]() {
    return ro(this, Symbol.iterator, (e) => Yt(this, e));
  },
  concat(...e) {
    return wn(this).concat(
      ...e.map((t) => Q(t) ? wn(t) : t)
    );
  },
  entries() {
    return ro(this, "entries", (e) => (e[1] = Yt(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Yt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => Yt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => Yt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return so(this, "includes", e);
  },
  indexOf(...e) {
    return so(this, "indexOf", e);
  },
  join(e) {
    return wn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return so(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zn(this, "pop");
  },
  push(...e) {
    return zn(this, "push", e);
  },
  reduce(e, ...t) {
    return Hi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hi(this, "reduceRight", e, t);
  },
  shift() {
    return zn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zn(this, "splice", e);
  },
  toReversed() {
    return wn(this).toReversed();
  },
  toSorted(e) {
    return wn(this).toSorted(e);
  },
  toSpliced(...e) {
    return wn(this).toSpliced(...e);
  },
  unshift(...e) {
    return zn(this, "unshift", e);
  },
  values() {
    return ro(this, "values", (e) => Yt(this, e));
  }
};
function ro(e, t, n) {
  const r = Ps(e), o = r[t]();
  return r !== e && !it(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const nd = Array.prototype;
function It(e, t, n, r, o, s) {
  const i = Ps(e), a = i !== e && !it(e), l = i[t];
  if (l !== nd[t]) {
    const f = l.apply(e, s);
    return a ? bt(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, m) {
    return n.call(this, Yt(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const c = l.call(i, u, r);
  return a && o ? o(c) : c;
}
function Hi(e, t, n, r) {
  const o = Ps(e);
  let s = n;
  return o !== e && (it(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, Yt(e, a), l, e);
  }), o[t](s, ...r);
}
function so(e, t, n) {
  const r = ce(e);
  Ke(r, "iterate", hr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Ns(n[0]) ? (n[0] = ce(n[0]), r[t](...n)) : o;
}
function zn(e, t, n = []) {
  $t(), Qo();
  const r = ce(e)[t].apply(e, n);
  return Zo(), Vt(), r;
}
const rd = /* @__PURE__ */ zo("__proto__,__v_isRef,__isVue"), ec = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function sd(e) {
  gt(e) || (e = String(e));
  const t = ce(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class tc {
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
      return r === (o ? s ? md : oc : s ? sc : rc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Q(t);
    if (!o) {
      let l;
      if (i && (l = td[n]))
        return l;
      if (n === "hasOwnProperty")
        return sd;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Oe(t) ? t : r
    );
    if ((gt(n) ? ec.has(n) : rd(n)) || (o || Ke(t, "get", n), s))
      return a;
    if (Oe(a)) {
      const l = i && As(n) ? a : a.value;
      return o && ge(l) ? mr(l) : l;
    }
    return ge(a) ? o ? mr(a) : wr(a) : a;
  }
}
class nc extends tc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const i = Q(t) && As(n);
    if (!this._isShallow) {
      const u = jt(s);
      if (!it(r) && !jt(r) && (s = ce(s), r = ce(r)), !i && Oe(s) && !Oe(r))
        return u || (s.value = r), !0;
    }
    const a = i ? Number(n) < t.length : pe(t, n), l = Reflect.set(
      t,
      n,
      r,
      Oe(t) ? t : o
    );
    return t === ce(o) && (a ? nt(r, s) && xt(t, "set", n, r) : xt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = pe(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && xt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!gt(n) || !ec.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      Q(t) ? "length" : gn
    ), Reflect.ownKeys(t);
  }
}
class od extends tc {
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
const id = /* @__PURE__ */ new nc(), ad = /* @__PURE__ */ new od(), ld = /* @__PURE__ */ new nc(!0);
const To = (e) => e, kr = (e) => Reflect.getPrototypeOf(e);
function cd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = ce(o), i = Nn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? To : t ? Fn : bt;
    return !t && Ke(
      s,
      "iterate",
      l ? So : gn
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
function Mr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ud(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = ce(s), a = ce(o);
      e || (nt(o, a) && Ke(i, "get", o), Ke(i, "get", a));
      const { has: l } = kr(i), u = t ? To : e ? Fn : bt;
      if (l.call(i, o))
        return u(s.get(o));
      if (l.call(i, a))
        return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ke(ce(o), "iterate", gn), o.size;
    },
    has(o) {
      const s = this.__v_raw, i = ce(s), a = ce(o);
      return e || (nt(o, a) && Ke(i, "has", o), Ke(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, l = ce(a), u = t ? To : e ? Fn : bt;
      return !e && Ke(l, "iterate", gn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
    }
  };
  return Pe(
    n,
    e ? {
      add: Mr("add"),
      set: Mr("set"),
      delete: Mr("delete"),
      clear: Mr("clear")
    } : {
      add(o) {
        !t && !it(o) && !jt(o) && (o = ce(o));
        const s = ce(this);
        return kr(s).has.call(s, o) || (s.add(o), xt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !it(s) && !jt(s) && (s = ce(s));
        const i = ce(this), { has: a, get: l } = kr(i);
        let u = a.call(i, o);
        u || (o = ce(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? nt(s, c) && xt(i, "set", o, s) : xt(i, "add", o, s), this;
      },
      delete(o) {
        const s = ce(this), { has: i, get: a } = kr(s);
        let l = i.call(s, o);
        l || (o = ce(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && xt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = ce(this), s = o.size !== 0, i = o.clear();
        return s && xt(
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
    n[o] = cd(o, e, t);
  }), n;
}
function ti(e, t) {
  const n = ud(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    pe(n, o) && o in r ? n : r,
    o,
    s
  );
}
const fd = {
  get: /* @__PURE__ */ ti(!1, !1)
}, dd = {
  get: /* @__PURE__ */ ti(!1, !0)
}, hd = {
  get: /* @__PURE__ */ ti(!0, !1)
};
const rc = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap(), md = /* @__PURE__ */ new WeakMap();
function pd(e) {
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
function _d(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pd($f(e));
}
function wr(e) {
  return jt(e) ? e : ni(
    e,
    !1,
    id,
    fd,
    rc
  );
}
function ic(e) {
  return ni(
    e,
    !1,
    ld,
    dd,
    sc
  );
}
function mr(e) {
  return ni(
    e,
    !0,
    ad,
    hd,
    oc
  );
}
function ni(e, t, n, r, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = _d(e);
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
function it(e) {
  return !!(e && e.__v_isShallow);
}
function Ns(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function ri(e) {
  return !pe(e, "__v_skip") && Object.isExtensible(e) && Hl(e, "__v_skip", !0), e;
}
const bt = (e) => ge(e) ? wr(e) : e, Fn = (e) => ge(e) ? mr(e) : e;
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function le(e) {
  return ac(e, !1);
}
function si(e) {
  return ac(e, !0);
}
function ac(e, t) {
  return Oe(e) ? e : new gd(e, t);
}
class gd {
  constructor(t, n) {
    this.dep = new Is(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : bt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || it(t) || jt(t);
    t = r ? t : ce(t), nt(t, n) && (this._rawValue = t, this._value = r ? t : bt(t), this.dep.trigger());
  }
}
function b2(e) {
  e.dep && e.dep.trigger();
}
function sr(e) {
  return Oe(e) ? e.value : e;
}
const bd = {
  get: (e, t, n) => t === "__v_raw" ? e : sr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Oe(o) && !Oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function lc(e) {
  return Ht(e) ? e : new Proxy(e, bd);
}
class yd {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Is(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ed(e) {
  return new yd(e);
}
function vd(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Td(e, n);
  return t;
}
class Sd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = ce(t);
    let o = !0, s = t;
    if (!Q(t) || !As(String(n)))
      do
        o = !Ns(s) || it(s);
      while (o && (s = s.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = sr(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return ed(this._raw, this._key);
  }
}
function Td(e, t, n) {
  return new Sd(e, t, n);
}
class Ad {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Is(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ye !== this)
      return Gl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function wd(e, t, n = !1) {
  let r, o;
  return ne(e) ? r = e : (r = e.get, o = e.set), new Ad(r, o, n);
}
const xr = {}, ns = /* @__PURE__ */ new WeakMap();
let dn;
function Od(e, t = !1, n = dn) {
  if (n) {
    let r = ns.get(n);
    r || ns.set(n, r = []), r.push(e);
  }
}
function Ld(e, t, n = fe) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (y) => o ? y : it(y) || o === !1 || o === 0 ? Dt(y, 1) : Dt(y);
  let c, f, m, b, A = !1, T = !1;
  if (Oe(e) ? (f = () => e.value, A = it(e)) : Ht(e) ? (f = () => u(e), A = !0) : Q(e) ? (T = !0, A = e.some((y) => Ht(y) || it(y)), f = () => e.map((y) => {
    if (Oe(y))
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
    const y = dn;
    dn = c;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      dn = y;
    }
  } : f = Ct, t && o) {
    const y = f, P = o === !0 ? 1 / 0 : o;
    f = () => Dt(y(), P);
  }
  const w = Kl(), v = () => {
    c.stop(), w && w.active && Yo(w.effects, c);
  };
  if (s && t) {
    const y = t;
    t = (...P) => {
      y(...P), v();
    };
  }
  let k = T ? new Array(e.length).fill(xr) : xr;
  const E = (y) => {
    if (!(!(c.flags & 1) || !c.dirty && !y))
      if (t) {
        const P = c.run();
        if (o || A || (T ? P.some((R, U) => nt(R, k[U])) : nt(P, k))) {
          m && m();
          const R = dn;
          dn = c;
          try {
            const U = [
              P,
              // pass undefined as the old value when it's changed for the first time
              k === xr ? void 0 : T && k[0] === xr ? [] : k,
              b
            ];
            k = P, l ? l(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            dn = R;
          }
        }
      } else
        c.run();
  };
  return a && a(E), c = new ql(f), c.scheduler = i ? () => i(E, !1) : E, b = (y) => Od(y, !1, c), m = c.onStop = () => {
    const y = ns.get(c);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const P of y) P();
      ns.delete(c);
    }
  }, t ? r ? E(!0) : k = c.run() : i ? i(E.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Oe(e))
    Dt(e.value, t, n);
  else if (Q(e))
    for (let r = 0; r < e.length; r++)
      Dt(e[r], t, n);
  else if (Ts(e) || Nn(e))
    e.forEach((r) => {
      Dt(r, t, n);
    });
  else if (Ul(e)) {
    for (const r in e)
      Dt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Dt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Or(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    ks(o, t, n);
  }
}
function yt(e, t, n, r) {
  if (ne(e)) {
    const o = Or(e, t, n, r);
    return o && Dl(o) && o.catch((s) => {
      ks(s, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(yt(e[s], t, n, r));
    return o;
  }
}
function ks(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || fe;
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
      $t(), Or(s, null, 10, [
        e,
        l,
        u
      ]), Vt();
      return;
    }
  }
  Cd(e, n, o, r, i);
}
function Cd(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const et = [];
let wt = -1;
const kn = [];
let Xt = null, Rn = 0;
const cc = /* @__PURE__ */ Promise.resolve();
let rs = null;
function uc(e) {
  const t = rs || cc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rd(e) {
  let t = wt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = et[r], s = pr(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function oi(e) {
  if (!(e.flags & 1)) {
    const t = pr(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pr(n) ? et.push(e) : et.splice(Rd(t), 0, e), e.flags |= 1, fc();
  }
}
function fc() {
  rs || (rs = cc.then(hc));
}
function Id(e) {
  Q(e) ? kn.push(...e) : Xt && e.id === -1 ? Xt.splice(Rn + 1, 0, e) : e.flags & 1 || (kn.push(e), e.flags |= 1), fc();
}
function $i(e, t, n = wt + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function dc(e) {
  if (kn.length) {
    const t = [...new Set(kn)].sort(
      (n, r) => pr(n) - pr(r)
    );
    if (kn.length = 0, Xt) {
      Xt.push(...t);
      return;
    }
    for (Xt = t, Rn = 0; Rn < Xt.length; Rn++) {
      const n = Xt[Rn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xt = null, Rn = 0;
  }
}
const pr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hc(e) {
  try {
    for (wt = 0; wt < et.length; wt++) {
      const t = et[wt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Or(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wt < et.length; wt++) {
      const t = et[wt];
      t && (t.flags &= -2);
    }
    wt = -1, et.length = 0, dc(), rs = null, (et.length || kn.length) && hc();
  }
}
let He = null, mc = null;
function ss(e) {
  const t = He;
  return He = e, mc = e && e.type.__scopeId || null, t;
}
function pc(e, t = He, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ls(-1);
    const s = ss(t);
    let i;
    try {
      i = e(...o);
    } finally {
      ss(s), r._d && ls(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function y2(e, t) {
  if (He === null)
    return e;
  const n = Us(He), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = fe] = t[o];
    s && (ne(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Dt(i), r.push({
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
function an(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && ($t(), yt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Vt());
  }
}
function Pd(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), n[e] = t;
  }
}
function _t(e, t, n = !1) {
  const r = Et();
  if (r || yn) {
    let o = yn ? yn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
function Nd() {
  return !!(Et() || yn);
}
const kd = /* @__PURE__ */ Symbol.for("v-scx"), Md = () => _t(kd);
function E2(e, t) {
  return Ms(e, null, t);
}
function xd(e, t) {
  return Ms(
    e,
    null,
    { flush: "sync" }
  );
}
function bn(e, t, n) {
  return Ms(e, t, n);
}
function Ms(e, t, n = fe) {
  const { immediate: r, deep: o, flush: s, once: i } = n, a = Pe({}, n), l = t && r || !t && s !== "post";
  let u;
  if (yr) {
    if (s === "sync") {
      const b = Md();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = Ct, b.resume = Ct, b.pause = Ct, b;
    }
  }
  const c = ze;
  a.call = (b, A, T) => yt(b, c, A, T);
  let f = !1;
  s === "post" ? a.scheduler = (b) => {
    Ze(b, c && c.suspense);
  } : s !== "sync" && (f = !0, a.scheduler = (b, A) => {
    A ? b() : oi(b);
  }), a.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const m = Ld(e, t, a);
  return yr && (u ? u.push(m) : l && m()), m;
}
function Dd(e, t, n) {
  const r = this.proxy, o = Le(e) ? e.includes(".") ? _c(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const i = Cr(this), a = Ms(o, s.bind(r), n);
  return i(), a;
}
function _c(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const gc = /* @__PURE__ */ Symbol("_vte"), bc = (e) => e.__isTeleport, or = (e) => e && (e.disabled || e.disabled === ""), Vi = (e) => e && (e.defer || e.defer === ""), ji = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ao = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, yc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, i, a, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: m,
      o: { insert: b, querySelector: A, createText: T, createComment: w }
    } = u, v = or(t.props);
    let { shapeFlag: k, children: E, dynamicChildren: y } = t;
    if (e == null) {
      const P = t.el = T(""), R = t.anchor = T("");
      b(P, n, r), b(R, n, r);
      const U = (I, K) => {
        k & 16 && c(
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
        const I = t.target = Ao(t.props, A), K = Ec(I, t, T, b);
        I && (i !== "svg" && ji(I) ? i = "svg" : i !== "mathml" && Wi(I) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), v || (U(I, K), zr(t, !1)));
      };
      v && (U(n, R), zr(t, !0)), Vi(t.props) ? (t.el.__isMounted = !1, Ze(() => {
        F(), delete t.el.__isMounted;
      }, s)) : F();
    } else {
      if (Vi(t.props) && e.el.__isMounted === !1) {
        Ze(() => {
          yc.process(
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
      const P = t.anchor = e.anchor, R = t.target = e.target, U = t.targetAnchor = e.targetAnchor, F = or(e.props), I = F ? n : R, K = F ? P : U;
      if (i === "svg" || ji(R) ? i = "svg" : (i === "mathml" || Wi(R)) && (i = "mathml"), y ? (m(
        e.dynamicChildren,
        y,
        I,
        o,
        s,
        i,
        a
      ), fi(e, t, !0)) : l || f(
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
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Dr(
          t,
          n,
          P,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = Ao(
          t.props,
          A
        );
        Y && Dr(
          t,
          Y,
          null,
          u,
          0
        );
      } else F && Dr(
        t,
        R,
        U,
        u,
        1
      );
      zr(t, v);
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
      const b = s || !or(m);
      for (let A = 0; A < a.length; A++) {
        const T = a[A];
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
  move: Dr,
  hydrate: Fd
};
function Dr(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(i, t, n), (!f || or(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      o(
        u[m],
        t,
        n,
        2
      );
  f && r(a, t, n);
}
function Fd(e, t, n, r, o, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c }
}, f) {
  function m(T, w, v, k) {
    w.anchor = f(
      i(T),
      w,
      a(T),
      n,
      r,
      o,
      s
    ), w.targetStart = v, w.targetAnchor = k;
  }
  const b = t.target = Ao(
    t.props,
    l
  ), A = or(t.props);
  if (b) {
    const T = b._lpa || b.firstChild;
    if (t.shapeFlag & 16)
      if (A)
        m(
          e,
          t,
          T,
          T && i(T)
        );
      else {
        t.anchor = i(e);
        let w = T;
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
        t.targetAnchor || Ec(b, t, c, u), f(
          T && i(T),
          t,
          b,
          n,
          r,
          o,
          s
        );
      }
    zr(t, A);
  } else A && t.shapeFlag & 16 && m(e, t, e, i(e));
  return t.anchor && i(t.anchor);
}
const Ud = yc;
function zr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Ec(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[gc] = s, e && (r(o, e), r(s, e)), s;
}
const Mt = /* @__PURE__ */ Symbol("_leaveCb"), Fr = /* @__PURE__ */ Symbol("_enterCb");
function vc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ai(() => {
    e.isMounted = !0;
  }), Ic(() => {
    e.isUnmounting = !0;
  }), e;
}
const ct = [Function, Array], Sc = {
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
}, Tc = (e) => {
  const t = e.subTree;
  return t.component ? Tc(t.component) : t;
}, Hd = {
  name: "BaseTransition",
  props: Sc,
  setup(e, { slots: t }) {
    const n = Et(), r = vc();
    return () => {
      const o = t.default && ii(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Ac(o), i = ce(e), { mode: a } = i;
      if (r.isLeaving)
        return oo(s);
      const l = Bi(s);
      if (!l)
        return oo(s);
      let u = _r(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== qe && vn(l, u);
      let c = n.subTree && Bi(n.subTree);
      if (c && c.type !== qe && !hn(c, l) && Tc(n).type !== qe) {
        let f = _r(
          c,
          i,
          r,
          n
        );
        if (vn(c, f), a === "out-in" && l.type !== qe)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, oo(s);
        a === "in-out" && l.type !== qe ? f.delayLeave = (m, b, A) => {
          const T = wc(
            r,
            c
          );
          T[String(c.key)] = c, m[Mt] = () => {
            b(), m[Mt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            A(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function Ac(e) {
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
const $d = Hd;
function wc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function _r(e, t, n, r, o) {
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
    onAfterLeave: A,
    onLeaveCancelled: T,
    onBeforeAppear: w,
    onAppear: v,
    onAfterAppear: k,
    onAppearCancelled: E
  } = t, y = String(e.key), P = wc(n, e), R = (I, K) => {
    I && yt(
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
          K = w || l;
        else
          return;
      I[Mt] && I[Mt](
        !0
        /* cancelled */
      );
      const Y = P[y];
      Y && hn(e, Y) && Y.el[Mt] && Y.el[Mt](), R(K, [I]);
    },
    enter(I) {
      let K = u, Y = c, H = f;
      if (!n.isMounted)
        if (s)
          K = v || u, Y = k || c, H = E || f;
        else
          return;
      let Z = !1;
      const se = I[Fr] = (ue) => {
        Z || (Z = !0, ue ? R(H, [I]) : R(Y, [I]), F.delayedLeave && F.delayedLeave(), I[Fr] = void 0);
      };
      K ? U(K, [I, se]) : se();
    },
    leave(I, K) {
      const Y = String(e.key);
      if (I[Fr] && I[Fr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      R(m, [I]);
      let H = !1;
      const Z = I[Mt] = (se) => {
        H || (H = !0, K(), se ? R(T, [I]) : R(A, [I]), I[Mt] = void 0, P[Y] === e && delete P[Y]);
      };
      P[Y] = e, b ? U(b, [I, Z]) : Z();
    },
    clone(I) {
      const K = _r(
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
function oo(e) {
  if (xs(e))
    return e = en(e), e.children = null, e;
}
function Bi(e) {
  if (!xs(e))
    return bc(e.type) && e.children ? Ac(e.children) : e;
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
function vn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ii(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Me ? (i.patchFlag & 128 && o++, r = r.concat(
      ii(i.children, t, a)
    )) : (t || i.type !== qe) && r.push(a != null ? en(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function An(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Oc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function v2(e) {
  const t = Et(), n = si(null);
  if (t) {
    const o = t.refs === fe ? t.refs = {} : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  }
  return n;
}
const os = /* @__PURE__ */ new WeakMap();
function ir(e, t, n, r, o = !1) {
  if (Q(e)) {
    e.forEach(
      (A, T) => ir(
        A,
        t && (Q(t) ? t[T] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Mn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ir(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Us(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === fe ? a.refs = {} : a.refs, f = a.setupState, m = ce(f), b = f === fe ? xl : (A) => pe(m, A);
  if (u != null && u !== l) {
    if (Ki(t), Le(u))
      c[u] = null, b(u) && (f[u] = null);
    else if (Oe(u)) {
      u.value = null;
      const A = t;
      A.k && (c[A.k] = null);
    }
  }
  if (ne(l))
    Or(l, a, 12, [i, c]);
  else {
    const A = Le(l), T = Oe(l);
    if (A || T) {
      const w = () => {
        if (e.f) {
          const v = A ? b(l) ? f[l] : c[l] : l.value;
          if (o)
            Q(v) && Yo(v, s);
          else if (Q(v))
            v.includes(s) || v.push(s);
          else if (A)
            c[l] = [s], b(l) && (f[l] = c[l]);
          else {
            const k = [s];
            l.value = k, e.k && (c[e.k] = k);
          }
        } else A ? (c[l] = i, b(l) && (f[l] = i)) : T && (l.value = i, e.k && (c[e.k] = i));
      };
      if (i) {
        const v = () => {
          w(), os.delete(e);
        };
        v.id = -1, os.set(e, v), Ze(v, n);
      } else
        Ki(e), w();
    }
  }
}
function Ki(e) {
  const t = os.get(e);
  t && (t.flags |= 8, os.delete(e));
}
Ls().requestIdleCallback;
Ls().cancelIdleCallback;
const Mn = (e) => !!e.type.__asyncLoader, xs = (e) => e.type.__isKeepAlive;
function Vd(e, t) {
  Lc(e, "a", t);
}
function jd(e, t) {
  Lc(e, "da", t);
}
function Lc(e, t, n = ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ds(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      xs(o.parent.vnode) && Wd(r, t, n, o), o = o.parent;
  }
}
function Wd(e, t, n, r) {
  const o = Ds(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  li(() => {
    Yo(r[t], o);
  }, n);
}
function Ds(e, t, n = ze, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      $t();
      const a = Cr(n), l = yt(t, n, e, i);
      return a(), Vt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Bt = (e) => (t, n = ze) => {
  (!yr || e === "sp") && Ds(e, (...r) => t(...r), n);
}, Cc = Bt("bm"), ai = Bt("m"), Bd = Bt(
  "bu"
), Rc = Bt("u"), Ic = Bt(
  "bum"
), li = Bt("um"), Kd = Bt(
  "sp"
), qd = Bt("rtg"), zd = Bt("rtc");
function Gd(e, t = ze) {
  Ds("ec", e, t);
}
const Pc = "components";
function S2(e, t) {
  return kc(Pc, e, !0, t) || e;
}
const Nc = /* @__PURE__ */ Symbol.for("v-ndc");
function T2(e) {
  return Le(e) ? kc(Pc, e, !1) || e : e || Nc;
}
function kc(e, t, n = !0, r = !1) {
  const o = He || ze;
  if (o) {
    const s = o.type;
    {
      const a = kh(
        s,
        !1
      );
      if (a && (a === t || a === at(t) || a === Os(at(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      qi(o[e] || s[e], t) || // global registration
      qi(o.appContext[e], t)
    );
    return !i && r ? s : i;
  }
}
function qi(e, t) {
  return e && (e[t] || e[at(t)] || e[Os(at(t))]);
}
function Yd(e, t, n, r) {
  let o;
  const s = n, i = Q(e);
  if (i || Le(e)) {
    const a = i && Ht(e);
    let l = !1, u = !1;
    a && (l = !it(e), u = jt(e), e = Ps(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? Fn(bt(e[c])) : bt(e[c]) : e[c],
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
function A2(e, t, n = {}, r, o) {
  if (He.ce || He.parent && Mn(He.parent) && He.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Ft(), cs(
      Me,
      null,
      [Ie("slot", n, r && r())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), Ft();
  const i = s && Mc(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = cs(
    Me,
    {
      key: (a && !gt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Mc(e) {
  return e.some((t) => br(t) ? !(t.type === qe || t.type === Me && !Mc(t.children)) : !0) ? e : null;
}
const wo = (e) => e ? Zc(e) ? Us(e) : wo(e.parent) : null, ar = (
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
    $parent: (e) => wo(e.parent),
    $root: (e) => wo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Dc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      oi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = uc.bind(e.proxy)),
    $watch: (e) => Dd.bind(e)
  })
), io = (e, t) => e !== fe && !e.__isScriptSetup && pe(e, t), Xd = {
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
        if (io(r, t))
          return i[t] = 1, r[t];
        if (o !== fe && pe(o, t))
          return i[t] = 2, o[t];
        if (pe(s, t))
          return i[t] = 3, s[t];
        if (n !== fe && pe(n, t))
          return i[t] = 4, n[t];
        Oo && (i[t] = 0);
      }
    }
    const u = ar[t];
    let c, f;
    if (u)
      return t === "$attrs" && Ke(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== fe && pe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, pe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return io(o, t) ? (o[t] = n, !0) : r !== fe && pe(r, t) ? (r[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: i }
  }, a) {
    let l;
    return !!(n[a] || e !== fe && a[0] !== "$" && pe(e, a) || io(t, a) || pe(s, a) || pe(r, a) || pe(ar, a) || pe(o.config.globalProperties, a) || (l = i.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function is(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function w2(e, t) {
  return !e || !t ? e || t : Q(e) && Q(t) ? e.concat(t) : Pe({}, is(e), is(t));
}
let Oo = !0;
function Jd(e) {
  const t = Dc(e), n = e.proxy, r = e.ctx;
  Oo = !1, t.beforeCreate && zi(t.beforeCreate, e, "bc");
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
    updated: A,
    activated: T,
    deactivated: w,
    beforeDestroy: v,
    beforeUnmount: k,
    destroyed: E,
    unmounted: y,
    render: P,
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
  if (u && Qd(u, r, null), i)
    for (const B in i) {
      const J = i[B];
      ne(J) && (r[B] = J.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    ge(B) && (e.data = wr(B));
  }
  if (Oo = !0, s)
    for (const B in s) {
      const J = s[B], ve = ne(J) ? J.bind(n, n) : ne(J.get) ? J.get.bind(n, n) : Ct, Te = !ne(J) && ne(J.set) ? J.set.bind(n) : Ct, re = be({
        get: ve,
        set: Te
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: (me) => re.value = me
      });
    }
  if (a)
    for (const B in a)
      xc(a[B], r, n, B);
  if (l) {
    const B = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((J) => {
      Pd(J, B[J]);
    });
  }
  c && zi(c, e, "c");
  function $(B, J) {
    Q(J) ? J.forEach((ve) => B(ve.bind(n))) : J && B(J.bind(n));
  }
  if ($(Cc, f), $(ai, m), $(Bd, b), $(Rc, A), $(Vd, T), $(jd, w), $(Gd, F), $(zd, R), $(qd, U), $(Ic, k), $(li, y), $(Kd, I), Q(K))
    if (K.length) {
      const B = e.exposed || (e.exposed = {});
      K.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (ve) => n[J] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === Ct && (e.render = P), Y != null && (e.inheritAttrs = Y), H && (e.components = H), Z && (e.directives = Z), I && Oc(e);
}
function Qd(e, t, n = Ct) {
  Q(e) && (e = Lo(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ge(o) ? "default" in o ? s = _t(
      o.from || r,
      o.default,
      !0
    ) : s = _t(o.from || r) : s = _t(o), Oe(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s;
  }
}
function zi(e, t, n) {
  yt(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xc(e, t, n, r) {
  let o = r.includes(".") ? _c(n, r) : () => n[r];
  if (Le(e)) {
    const s = t[e];
    ne(s) && bn(o, s);
  } else if (ne(e))
    bn(o, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((s) => xc(s, t, n, r));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && bn(o, s, e);
    }
}
function Dc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => as(l, u, i, !0)
  ), as(l, t, i)), ge(t) && s.set(t, l), l;
}
function as(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && as(e, s, n, !0), o && o.forEach(
    (i) => as(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Zd[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Zd = {
  data: Gi,
  props: Yi,
  emits: Yi,
  // objects
  methods: Zn,
  computed: Zn,
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
  components: Zn,
  directives: Zn,
  // watch
  watch: th,
  // provide / inject
  provide: Gi,
  inject: eh
};
function Gi(e, t) {
  return t ? e ? function() {
    return Pe(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function eh(e, t) {
  return Zn(Lo(e), Lo(t));
}
function Lo(e) {
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
function Zn(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yi(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    is(e),
    is(t ?? {})
  ) : t;
}
function th(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Je(e[r], t[r]);
  return n;
}
function Fc() {
  return {
    app: null,
    config: {
      isNativeTag: xl,
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
let nh = 0;
function rh(e, t) {
  return function(r, o = null) {
    ne(r) || (r = Pe({}, r)), o != null && !ge(o) && (o = null);
    const s = Fc(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = s.app = {
      _uid: nh++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: xh,
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
          return b.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(b, c, m), l = !0, u._container = c, c.__vue_app__ = u, Us(b.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (yt(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = yn;
        yn = u;
        try {
          return c();
        } finally {
          yn = f;
        }
      }
    };
    return u;
  };
}
let yn = null;
function O2(e, t, n = fe) {
  const r = Et(), o = at(t), s = Wt(t), i = Uc(e, o), a = Ed((l, u) => {
    let c, f = fe, m;
    return xd(() => {
      const b = e[o];
      nt(c, b) && (c = b, u());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(b) {
        const A = n.set ? n.set(b) : b;
        if (!nt(A, c) && !(f !== fe && nt(b, f)))
          return;
        const T = r.vnode.props;
        T && // check if parent has passed v-model
        (t in T || o in T || s in T) && (`onUpdate:${t}` in T || `onUpdate:${o}` in T || `onUpdate:${s}` in T) || (c = b, u()), r.emit(`update:${t}`, A), nt(b, A) && nt(b, f) && !nt(A, m) && u(), f = b, m = A;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || fe : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const Uc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${Wt(t)}Modifiers`];
function sh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || fe;
  let o = n;
  const s = t.startsWith("update:"), i = s && Uc(r, t.slice(7));
  i && (i.trim && (o = n.map((c) => Le(c) ? c.trim() : c)), i.number && (o = n.map(Xo)));
  let a, l = r[a = eo(t)] || // also try camelCase event handler (#2249)
  r[a = eo(at(t))];
  !l && s && (l = r[a = eo(Wt(t))]), l && yt(
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
    e.emitted[a] = !0, yt(
      u,
      e,
      6,
      o
    );
  }
}
const oh = /* @__PURE__ */ new WeakMap();
function Hc(e, t, n = !1) {
  const r = n ? oh : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!ne(e)) {
    const l = (u) => {
      const c = Hc(u, t, !0);
      c && (a = !0, Pe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (ge(e) && r.set(e, null), null) : (Q(s) ? s.forEach((l) => i[l] = null) : Pe(i, s), ge(e) && r.set(e, i), i);
}
function Fs(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, Wt(t)) || pe(e, t));
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
    ctx: A,
    inheritAttrs: T
  } = e, w = ss(e);
  let v, k;
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, P = y;
      v = Ot(
        u.call(
          P,
          y,
          c,
          f,
          b,
          m,
          A
        )
      ), k = a;
    } else {
      const y = t;
      v = Ot(
        y.length > 1 ? y(
          f,
          { attrs: a, slots: i, emit: l }
        ) : y(
          f,
          null
        )
      ), k = t.props ? a : ih(a);
    }
  } catch (y) {
    lr.length = 0, ks(y, e, 1), v = Ie(qe);
  }
  let E = v;
  if (k && T !== !1) {
    const y = Object.keys(k), { shapeFlag: P } = E;
    y.length && P & 7 && (s && y.some(Go) && (k = ah(
      k,
      s
    )), E = en(E, k, !1, !0));
  }
  return n.dirs && (E = en(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && vn(E, n.transition), v = E, ss(w), v;
}
const ih = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ah = (e, t) => {
  const n = {};
  for (const r in e)
    (!Go(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function lh(e, t, n) {
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
        if (i[m] !== r[m] && !Fs(u, m))
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
    if (t[s] !== e[s] && !Fs(n, s))
      return !0;
  }
  return !1;
}
function ch({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const $c = {}, Vc = () => Object.create($c), jc = (e) => Object.getPrototypeOf(e) === $c;
function uh(e, t, n, r = !1) {
  const o = {}, s = Vc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wc(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = r ? o : ic(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function fh(e, t, n, r) {
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
        if (Fs(e.emitsOptions, m))
          continue;
        const b = t[m];
        if (l)
          if (pe(s, m))
            b !== s[m] && (s[m] = b, u = !0);
          else {
            const A = at(m);
            o[A] = Co(
              l,
              a,
              A,
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
    Wc(e, t, o, s) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !pe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Wt(f)) === f || !pe(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = Co(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== a)
      for (const f in s)
        (!t || !pe(t, f)) && (delete s[f], u = !0);
  }
  u && xt(e.attrs, "set", "");
}
function Wc(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (tr(l))
        continue;
      const u = t[l];
      let c;
      o && pe(o, c = at(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Fs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (s) {
    const l = ce(n), u = a || fe;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Co(
        o,
        l,
        f,
        u[f],
        e,
        !pe(u, f)
      );
    }
  }
  return i;
}
function Co(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = pe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ne(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Cr(o);
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
    ] && (r === "" || r === Wt(n)) && (r = !0));
  }
  return r;
}
const dh = /* @__PURE__ */ new WeakMap();
function Bc(e, t, n = !1) {
  const r = n ? dh : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!ne(e)) {
    const c = (f) => {
      l = !0;
      const [m, b] = Bc(f, t, !0);
      Pe(i, m), b && a.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return ge(e) && r.set(e, Pn), Pn;
  if (Q(s))
    for (let c = 0; c < s.length; c++) {
      const f = at(s[c]);
      Qi(f) && (i[f] = fe);
    }
  else if (s)
    for (const c in s) {
      const f = at(c);
      if (Qi(f)) {
        const m = s[c], b = i[f] = Q(m) || ne(m) ? { type: m } : Pe({}, m), A = b.type;
        let T = !1, w = !0;
        if (Q(A))
          for (let v = 0; v < A.length; ++v) {
            const k = A[v], E = ne(k) && k.name;
            if (E === "Boolean") {
              T = !0;
              break;
            } else E === "String" && (w = !1);
          }
        else
          T = ne(A) && A.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = T, b[
          1
          /* shouldCastTrue */
        ] = w, (T || pe(b, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return ge(e) && r.set(e, u), u;
}
function Qi(e) {
  return e[0] !== "$" && !tr(e);
}
const ci = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => Q(e) ? e.map(Ot) : [Ot(e)], hh = (e, t, n) => {
  if (t._n)
    return t;
  const r = pc((...o) => ui(t(...o)), n);
  return r._c = !1, r;
}, Kc = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (ci(o)) continue;
    const s = e[o];
    if (ne(s))
      t[o] = hh(o, s, r);
    else if (s != null) {
      const i = ui(s);
      t[o] = () => i;
    }
  }
}, qc = (e, t) => {
  const n = ui(t);
  e.slots.default = () => n;
}, zc = (e, t, n) => {
  for (const r in t)
    (n || !ci(r)) && (e[r] = t[r]);
}, mh = (e, t, n) => {
  const r = e.slots = Vc();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (zc(r, t, n), n && Hl(r, "_", o, !0)) : Kc(t, r);
  } else t && qc(e, t);
}, ph = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = fe;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = !1 : zc(o, t, n) : (s = !t.$stable, Kc(t, o)), i = t;
  } else t && (qc(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !ci(a) && i[a] == null && delete o[a];
}, Ze = Eh;
function _h(e) {
  return gh(e);
}
function gh(e, t) {
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
    setScopeId: b = Ct,
    insertStaticContent: A
  } = e, T = (p, g, _, N = null, L = null, M = null, W = void 0, V = null, d = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !hn(p, g) && (N = Ae(p), me(p, L, M, !0), p = null), g.patchFlag === -2 && (d = !1, g.dynamicChildren = null);
    const { type: h, ref: O, shapeFlag: x } = g;
    switch (h) {
      case Lr:
        w(p, g, _, N);
        break;
      case qe:
        v(p, g, _, N);
        break;
      case Gr:
        p == null && k(g, _, N, W);
        break;
      case Me:
        H(
          p,
          g,
          _,
          N,
          L,
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
          L,
          M,
          W,
          V,
          d
        ) : x & 6 ? Z(
          p,
          g,
          _,
          N,
          L,
          M,
          W,
          V,
          d
        ) : (x & 64 || x & 128) && h.process(
          p,
          g,
          _,
          N,
          L,
          M,
          W,
          V,
          d,
          De
        );
    }
    O != null && L ? ir(O, p && p.ref, M, g || p, !g) : O == null && p && p.ref != null && ir(p.ref, null, M, p, !0);
  }, w = (p, g, _, N) => {
    if (p == null)
      r(
        g.el = a(g.children),
        _,
        N
      );
    else {
      const L = g.el = p.el;
      g.children !== p.children && u(L, g.children);
    }
  }, v = (p, g, _, N) => {
    p == null ? r(
      g.el = l(g.children || ""),
      _,
      N
    ) : g.el = p.el;
  }, k = (p, g, _, N) => {
    [p.el, p.anchor] = A(
      p.children,
      g,
      _,
      N,
      p.el,
      p.anchor
    );
  }, E = ({ el: p, anchor: g }, _, N) => {
    let L;
    for (; p && p !== g; )
      L = m(p), r(p, _, N), p = L;
    r(g, _, N);
  }, y = ({ el: p, anchor: g }) => {
    let _;
    for (; p && p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, P = (p, g, _, N, L, M, W, V, d) => {
    if (g.type === "svg" ? W = "svg" : g.type === "math" && (W = "mathml"), p == null)
      R(
        g,
        _,
        N,
        L,
        M,
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
          M,
          W,
          V,
          d
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, R = (p, g, _, N, L, M, W, V) => {
    let d, h;
    const { props: O, shapeFlag: x, transition: q, dirs: j } = p;
    if (d = p.el = i(
      p.type,
      M,
      O && O.is,
      O
    ), x & 8 ? c(d, p.children) : x & 16 && F(
      p.children,
      d,
      null,
      N,
      L,
      ao(p, M),
      W,
      V
    ), j && an(p, null, N, "created"), U(d, p, p.scopeId, W, N), O) {
      for (const D in O)
        D !== "value" && !tr(D) && s(d, D, null, O[D], M, N);
      "value" in O && s(d, "value", null, O.value, M), (h = O.onVnodeBeforeMount) && Tt(h, N, p);
    }
    j && an(p, null, N, "beforeMount");
    const C = bh(L, q);
    C && q.beforeEnter(d), r(d, g, _), ((h = O && O.onVnodeMounted) || C || j) && Ze(() => {
      h && Tt(h, N, p), C && q.enter(d), j && an(p, null, N, "mounted");
    }, L);
  }, U = (p, g, _, N, L) => {
    if (_ && b(p, _), N)
      for (let M = 0; M < N.length; M++)
        b(p, N[M]);
    if (L) {
      let M = L.subTree;
      if (g === M || Xc(M.type) && (M.ssContent === g || M.ssFallback === g)) {
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
  }, F = (p, g, _, N, L, M, W, V, d = 0) => {
    for (let h = d; h < p.length; h++) {
      const O = p[h] = V ? Jt(p[h]) : Ot(p[h]);
      T(
        null,
        O,
        g,
        _,
        N,
        L,
        M,
        W,
        V
      );
    }
  }, I = (p, g, _, N, L, M, W) => {
    const V = g.el = p.el;
    let { patchFlag: d, dynamicChildren: h, dirs: O } = g;
    d |= p.patchFlag & 16;
    const x = p.props || fe, q = g.props || fe;
    let j;
    if (_ && ln(_, !1), (j = q.onVnodeBeforeUpdate) && Tt(j, _, g, p), O && an(g, p, _, "beforeUpdate"), _ && ln(_, !0), (x.innerHTML && q.innerHTML == null || x.textContent && q.textContent == null) && c(V, ""), h ? K(
      p.dynamicChildren,
      h,
      V,
      _,
      N,
      ao(g, L),
      M
    ) : W || J(
      p,
      g,
      V,
      null,
      _,
      N,
      ao(g, L),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        Y(V, x, q, _, L);
      else if (d & 2 && x.class !== q.class && s(V, "class", null, q.class, L), d & 4 && s(V, "style", x.style, q.style, L), d & 8) {
        const C = g.dynamicProps;
        for (let D = 0; D < C.length; D++) {
          const X = C[D], ae = x[X], we = q[X];
          (we !== ae || X === "value") && s(V, X, ae, we, L, _);
        }
      }
      d & 1 && p.children !== g.children && c(V, g.children);
    } else !W && h == null && Y(V, x, q, _, L);
    ((j = q.onVnodeUpdated) || O) && Ze(() => {
      j && Tt(j, _, g, p), O && an(g, p, _, "updated");
    }, N);
  }, K = (p, g, _, N, L, M, W) => {
    for (let V = 0; V < g.length; V++) {
      const d = p[V], h = g[V], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === Me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(d, h) || // - In the case of a component, it could contain anything.
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
        N,
        L,
        M,
        W,
        !0
      );
    }
  }, Y = (p, g, _, N, L) => {
    if (g !== _) {
      if (g !== fe)
        for (const M in g)
          !tr(M) && !(M in _) && s(
            p,
            M,
            g[M],
            null,
            L,
            N
          );
      for (const M in _) {
        if (tr(M)) continue;
        const W = _[M], V = g[M];
        W !== V && M !== "value" && s(p, M, V, W, L, N);
      }
      "value" in _ && s(p, "value", g.value, _.value, L);
    }
  }, H = (p, g, _, N, L, M, W, V, d) => {
    const h = g.el = p ? p.el : a(""), O = g.anchor = p ? p.anchor : a("");
    let { patchFlag: x, dynamicChildren: q, slotScopeIds: j } = g;
    j && (V = V ? V.concat(j) : j), p == null ? (r(h, _, N), r(O, _, N), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      O,
      L,
      M,
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
      M,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || L && g === L.subTree) && fi(
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
      M,
      W,
      V,
      d
    );
  }, Z = (p, g, _, N, L, M, W, V, d) => {
    g.slotScopeIds = V, p == null ? g.shapeFlag & 512 ? L.ctx.activate(
      g,
      _,
      N,
      W,
      d
    ) : se(
      g,
      _,
      N,
      L,
      M,
      W,
      d
    ) : ue(p, g, d);
  }, se = (p, g, _, N, L, M, W) => {
    const V = p.component = Ch(
      p,
      N,
      L
    );
    if (xs(p) && (V.ctx.renderer = De), Rh(V, !1, W), V.asyncDep) {
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
        M,
        W
      );
  }, ue = (p, g, _) => {
    const N = g.component = p.component;
    if (lh(p, g, _))
      if (N.asyncDep && !N.asyncResolved) {
        B(N, g, _);
        return;
      } else
        N.next = g, N.update();
    else
      g.el = p.el, N.vnode = g;
  }, $ = (p, g, _, N, L, M, W) => {
    const V = () => {
      if (p.isMounted) {
        let { next: x, bu: q, u: j, parent: C, vnode: D } = p;
        {
          const Fe = Gc(p);
          if (Fe) {
            x && (x.el = D.el, B(p, x, W)), Fe.asyncDep.then(() => {
              p.isUnmounted || V();
            });
            return;
          }
        }
        let X = x, ae;
        ln(p, !1), x ? (x.el = D.el, B(p, x, W)) : x = D, q && qr(q), (ae = x.props && x.props.onVnodeBeforeUpdate) && Tt(ae, C, x, D), ln(p, !0);
        const we = Xi(p), Xe = p.subTree;
        p.subTree = we, T(
          Xe,
          we,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          Ae(Xe),
          p,
          L,
          M
        ), x.el = we.el, X === null && ch(p, we.el), j && Ze(j, L), (ae = x.props && x.props.onVnodeUpdated) && Ze(
          () => Tt(ae, C, x, D),
          L
        );
      } else {
        let x;
        const { el: q, props: j } = g, { bm: C, m: D, parent: X, root: ae, type: we } = p, Xe = Mn(g);
        ln(p, !1), C && qr(C), !Xe && (x = j && j.onVnodeBeforeMount) && Tt(x, X, g), ln(p, !0);
        {
          ae.ce && // @ts-expect-error _def is private
          ae.ce._def.shadowRoot !== !1 && ae.ce._injectChildStyle(we);
          const Fe = p.subTree = Xi(p);
          T(
            null,
            Fe,
            _,
            N,
            p,
            L,
            M
          ), g.el = Fe.el;
        }
        if (D && Ze(D, L), !Xe && (x = j && j.onVnodeMounted)) {
          const Fe = g;
          Ze(
            () => Tt(x, X, Fe),
            L
          );
        }
        (g.shapeFlag & 256 || X && Mn(X.vnode) && X.vnode.shapeFlag & 256) && p.a && Ze(p.a, L), p.isMounted = !0, g = _ = N = null;
      }
    };
    p.scope.on();
    const d = p.effect = new ql(V);
    p.scope.off();
    const h = p.update = d.run.bind(d), O = p.job = d.runIfDirty.bind(d);
    O.i = p, O.id = p.uid, d.scheduler = () => oi(O), ln(p, !0), h();
  }, B = (p, g, _) => {
    g.component = p;
    const N = p.vnode.props;
    p.vnode = g, p.next = null, fh(p, g.props, N, _), ph(p, g.children, _), $t(), $i(p), Vt();
  }, J = (p, g, _, N, L, M, W, V, d = !1) => {
    const h = p && p.children, O = p ? p.shapeFlag : 0, x = g.children, { patchFlag: q, shapeFlag: j } = g;
    if (q > 0) {
      if (q & 128) {
        Te(
          h,
          x,
          _,
          N,
          L,
          M,
          W,
          V,
          d
        );
        return;
      } else if (q & 256) {
        ve(
          h,
          x,
          _,
          N,
          L,
          M,
          W,
          V,
          d
        );
        return;
      }
    }
    j & 8 ? (O & 16 && oe(h, L, M), x !== h && c(_, x)) : O & 16 ? j & 16 ? Te(
      h,
      x,
      _,
      N,
      L,
      M,
      W,
      V,
      d
    ) : oe(h, L, M, !0) : (O & 8 && c(_, ""), j & 16 && F(
      x,
      _,
      N,
      L,
      M,
      W,
      V,
      d
    ));
  }, ve = (p, g, _, N, L, M, W, V, d) => {
    p = p || Pn, g = g || Pn;
    const h = p.length, O = g.length, x = Math.min(h, O);
    let q;
    for (q = 0; q < x; q++) {
      const j = g[q] = d ? Jt(g[q]) : Ot(g[q]);
      T(
        p[q],
        j,
        _,
        null,
        L,
        M,
        W,
        V,
        d
      );
    }
    h > O ? oe(
      p,
      L,
      M,
      !0,
      !1,
      x
    ) : F(
      g,
      _,
      N,
      L,
      M,
      W,
      V,
      d,
      x
    );
  }, Te = (p, g, _, N, L, M, W, V, d) => {
    let h = 0;
    const O = g.length;
    let x = p.length - 1, q = O - 1;
    for (; h <= x && h <= q; ) {
      const j = p[h], C = g[h] = d ? Jt(g[h]) : Ot(g[h]);
      if (hn(j, C))
        T(
          j,
          C,
          _,
          null,
          L,
          M,
          W,
          V,
          d
        );
      else
        break;
      h++;
    }
    for (; h <= x && h <= q; ) {
      const j = p[x], C = g[q] = d ? Jt(g[q]) : Ot(g[q]);
      if (hn(j, C))
        T(
          j,
          C,
          _,
          null,
          L,
          M,
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
        const j = q + 1, C = j < O ? g[j].el : N;
        for (; h <= q; )
          T(
            null,
            g[h] = d ? Jt(g[h]) : Ot(g[h]),
            _,
            C,
            L,
            M,
            W,
            V,
            d
          ), h++;
      }
    } else if (h > q)
      for (; h <= x; )
        me(p[h], L, M, !0), h++;
    else {
      const j = h, C = h, D = /* @__PURE__ */ new Map();
      for (h = C; h <= q; h++) {
        const st = g[h] = d ? Jt(g[h]) : Ot(g[h]);
        st.key != null && D.set(st.key, h);
      }
      let X, ae = 0;
      const we = q - C + 1;
      let Xe = !1, Fe = 0;
      const on = new Array(we);
      for (h = 0; h < we; h++) on[h] = 0;
      for (h = j; h <= x; h++) {
        const st = p[h];
        if (ae >= we) {
          me(st, L, M, !0);
          continue;
        }
        let St;
        if (st.key != null)
          St = D.get(st.key);
        else
          for (X = C; X <= q; X++)
            if (on[X - C] === 0 && hn(st, g[X])) {
              St = X;
              break;
            }
        St === void 0 ? me(st, L, M, !0) : (on[St - C] = h + 1, St >= Fe ? Fe = St : Xe = !0, T(
          st,
          g[St],
          _,
          null,
          L,
          M,
          W,
          V,
          d
        ), ae++);
      }
      const Zs = Xe ? yh(on) : Pn;
      for (X = Zs.length - 1, h = we - 1; h >= 0; h--) {
        const st = C + h, St = g[st], Mi = g[st + 1], xi = st + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mi.el || Yc(Mi)
        ) : N;
        on[h] === 0 ? T(
          null,
          St,
          _,
          xi,
          L,
          M,
          W,
          V,
          d
        ) : Xe && (X < 0 || h !== Zs[X] ? re(St, _, xi, 2) : X--);
      }
    }
  }, re = (p, g, _, N, L = null) => {
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
    if (W === Me) {
      r(M, g, _);
      for (let x = 0; x < d.length; x++)
        re(d[x], g, _, N);
      r(p.anchor, g, _);
      return;
    }
    if (W === Gr) {
      E(p, g, _);
      return;
    }
    if (N !== 2 && h & 1 && V)
      if (N === 0)
        V.beforeEnter(M), r(M, g, _), Ze(() => V.enter(M), L);
      else {
        const { leave: x, delayLeave: q, afterLeave: j } = V, C = () => {
          p.ctx.isUnmounted ? o(M) : r(M, g, _);
        }, D = () => {
          M._isLeaving && M[Mt](
            !0
            /* cancelled */
          ), x(M, () => {
            C(), j && j();
          });
        };
        q ? q(M, C, D) : D();
      }
    else
      r(M, g, _);
  }, me = (p, g, _, N = !1, L = !1) => {
    const {
      type: M,
      props: W,
      ref: V,
      children: d,
      dynamicChildren: h,
      shapeFlag: O,
      patchFlag: x,
      dirs: q,
      cacheIndex: j
    } = p;
    if (x === -2 && (L = !1), V != null && ($t(), ir(V, null, _, p, !0), Vt()), j != null && (g.renderCache[j] = void 0), O & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const C = O & 1 && q, D = !Mn(p);
    let X;
    if (D && (X = W && W.onVnodeBeforeUnmount) && Tt(X, g, p), O & 6)
      lt(p.component, _, N);
    else {
      if (O & 128) {
        p.suspense.unmount(_, N);
        return;
      }
      C && an(p, null, g, "beforeUnmount"), O & 64 ? p.type.remove(
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
      (M !== Me || x > 0 && x & 64) ? oe(
        h,
        g,
        _,
        !1,
        !0
      ) : (M === Me && x & 384 || !L && O & 16) && oe(d, g, _), N && Ne(p);
    }
    (D && (X = W && W.onVnodeUnmounted) || C) && Ze(() => {
      X && Tt(X, g, p), C && an(p, null, g, "unmounted");
    }, _);
  }, Ne = (p) => {
    const { type: g, el: _, anchor: N, transition: L } = p;
    if (g === Me) {
      Ve(_, N);
      return;
    }
    if (g === Gr) {
      y(p);
      return;
    }
    const M = () => {
      o(_), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (p.shapeFlag & 1 && L && !L.persisted) {
      const { leave: W, delayLeave: V } = L, d = () => W(_, M);
      V ? V(p.el, M, d) : d();
    } else
      M();
  }, Ve = (p, g) => {
    let _;
    for (; p !== g; )
      _ = m(p), o(p), p = _;
    o(g);
  }, lt = (p, g, _) => {
    const { bum: N, scope: L, job: M, subTree: W, um: V, m: d, a: h } = p;
    Zi(d), Zi(h), N && qr(N), L.stop(), M && (M.flags |= 8, me(W, p, g, _)), V && Ze(V, g), Ze(() => {
      p.isUnmounted = !0;
    }, g);
  }, oe = (p, g, _, N = !1, L = !1, M = 0) => {
    for (let W = M; W < p.length; W++)
      me(p[W], g, _, N, L);
  }, Ae = (p) => {
    if (p.shapeFlag & 6)
      return Ae(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = m(p.anchor || p.el), _ = g && g[gc];
    return _ ? m(_) : g;
  };
  let je = !1;
  const Ye = (p, g, _) => {
    let N;
    p == null ? g._vnode && (me(g._vnode, null, null, !0), N = g._vnode.component) : T(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = p, je || (je = !0, $i(N), dc(), je = !1);
  }, De = {
    p: T,
    um: me,
    m: re,
    r: Ne,
    mt: se,
    mc: F,
    pc: J,
    pbc: K,
    n: Ae,
    o: e
  };
  return {
    render: Ye,
    hydrate: void 0,
    createApp: rh(Ye)
  };
}
function ao({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ln({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fi(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Q(r) && Q(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = Jt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && fi(i, a)), a.type === Lr && (a.patchFlag !== -1 ? a.el = i.el : a.__elIndex = s + // take fragment start anchor into account
      (e.type === Me ? 1 : 0)), a.type === qe && !a.el && (a.el = i.el);
    }
}
function yh(e) {
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
function Gc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gc(t);
}
function Zi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yc(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yc(t.subTree) : null;
}
const Xc = (e) => e.__isSuspense;
function Eh(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Id(e);
}
const Me = /* @__PURE__ */ Symbol.for("v-fgt"), Lr = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), Gr = /* @__PURE__ */ Symbol.for("v-stc"), lr = [];
let ot = null;
function Ft(e = !1) {
  lr.push(ot = e ? null : []);
}
function vh() {
  lr.pop(), ot = lr[lr.length - 1] || null;
}
let gr = 1;
function ls(e, t = !1) {
  gr += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Jc(e) {
  return e.dynamicChildren = gr > 0 ? ot || Pn : null, vh(), gr > 0 && ot && ot.push(e), e;
}
function er(e, t, n, r, o, s) {
  return Jc(
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
function cs(e, t, n, r, o) {
  return Jc(
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
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qc = ({ key: e }) => e ?? null, Yr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || Oe(e) || ne(e) ? { i: He, r: e, k: t, f: !!n } : e : null);
function ht(e, t = null, n = null, r = 0, o = null, s = e === Me ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qc(t),
    ref: t && Yr(t),
    scopeId: mc,
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
  return a ? (di(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Le(n) ? 8 : 16), gr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ot.push(l), l;
}
const Ie = Sh;
function Sh(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Nc) && (e = qe), br(e)) {
    const a = en(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && di(a, n), gr > 0 && !s && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (Mh(e) && (e = e.__vccOpts), t) {
    t = Th(t);
    let { class: a, style: l } = t;
    a && !Le(a) && (t.class = Zt(a)), ge(l) && (Ns(l) && !Q(l) && (l = Pe({}, l)), t.style = Cs(l));
  }
  const i = Le(e) ? 1 : Xc(e) ? 128 : bc(e) ? 64 : ge(e) ? 4 : ne(e) ? 2 : 0;
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
function Th(e) {
  return e ? Ns(e) || jc(e) ? Pe({}, e) : e : null;
}
function en(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? wh(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Qc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Q(s) ? s.concat(Yr(t)) : [s, Yr(t)] : Yr(t)
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
    patchFlag: t && e.type !== Me ? i === -1 ? 16 : i | 16 : i,
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
  return l && r && vn(
    c,
    l.clone(c)
  ), c;
}
function Ah(e = " ", t = 0) {
  return Ie(Lr, null, e, t);
}
function L2(e, t) {
  const n = Ie(Gr, null, e);
  return n.staticCount = t, n;
}
function ea(e = "", t = !1) {
  return t ? (Ft(), cs(qe, null, e)) : Ie(qe, null, e);
}
function Ot(e) {
  return e == null || typeof e == "boolean" ? Ie(qe) : Q(e) ? Ie(
    Me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : br(e) ? Jt(e) : Ie(Lr, null, String(e));
}
function Jt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : en(e);
}
function di(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), di(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !jc(t) ? t._ctx = He : o === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: He }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ah(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Zt([t.class, r.class]));
      else if (o === "style")
        t.style = Cs([t.style, r.style]);
      else if (Ss(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(Q(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Tt(e, t, n, r = null) {
  yt(e, t, 7, [
    n,
    r
  ]);
}
const Oh = Fc();
let Lh = 0;
function Ch(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Oh, s = {
    uid: Lh++,
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
    scope: new Bl(
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
    propsOptions: Bc(r, o),
    emitsOptions: Hc(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = sh.bind(null, s), e.ce && e.ce(s), s;
}
let ze = null;
const Et = () => ze || He;
let us, Ro;
{
  const e = Ls(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  us = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), Ro = t(
    "__VUE_SSR_SETTERS__",
    (n) => yr = n
  );
}
const Cr = (e) => {
  const t = ze;
  return us(e), e.scope.on(), () => {
    e.scope.off(), us(t);
  };
}, ta = () => {
  ze && ze.scope.off(), us(null);
};
function Zc(e) {
  return e.vnode.shapeFlag & 4;
}
let yr = !1;
function Rh(e, t = !1, n = !1) {
  t && Ro(t);
  const { props: r, children: o } = e.vnode, s = Zc(e);
  uh(e, r, s, t), mh(e, o, n || t);
  const i = s ? Ih(e, t) : void 0;
  return t && Ro(!1), i;
}
function Ih(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xd);
  const { setup: r } = n;
  if (r) {
    $t();
    const o = e.setupContext = r.length > 1 ? Nh(e) : null, s = Cr(e), i = Or(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Dl(i);
    if (Vt(), s(), (a || e.sp) && !Mn(e) && Oc(e), a) {
      if (i.then(ta, ta), t)
        return i.then((l) => {
          na(e, l);
        }).catch((l) => {
          ks(l, e, 0);
        });
      e.asyncDep = i;
    } else
      na(e, i);
  } else
    eu(e);
}
function na(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = lc(t)), eu(e);
}
function eu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ct);
  {
    const o = Cr(e);
    $t();
    try {
      Jd(e);
    } finally {
      Vt(), o();
    }
  }
}
const Ph = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function Nh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ph),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lc(ri(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ar)
        return ar[n](e);
    },
    has(t, n) {
      return n in t || n in ar;
    }
  })) : e.proxy;
}
function kh(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mh(e) {
  return ne(e) && "__vccOpts" in e;
}
const be = (e, t) => wd(e, t, yr);
function Un(e, t, n) {
  try {
    ls(-1);
    const r = arguments.length;
    return r === 2 ? ge(t) && !Q(t) ? br(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && br(n) && (n = [n]), Ie(e, t, n));
  } finally {
    ls(1);
  }
}
const xh = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Io;
const ra = typeof window < "u" && window.trustedTypes;
if (ra)
  try {
    Io = /* @__PURE__ */ ra.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tu = Io ? (e) => Io.createHTML(e) : (e) => e, Dh = "http://www.w3.org/2000/svg", Fh = "http://www.w3.org/1998/Math/MathML", kt = typeof document < "u" ? document : null, sa = kt && /* @__PURE__ */ kt.createElement("template"), Uh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? kt.createElementNS(Dh, e) : t === "mathml" ? kt.createElementNS(Fh, e) : n ? kt.createElement(e, { is: n }) : kt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => kt.createTextNode(e),
  createComment: (e) => kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => kt.querySelector(e),
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
      sa.innerHTML = tu(
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
}, Kt = "transition", Gn = "animation", Hn = /* @__PURE__ */ Symbol("_vtc"), nu = {
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
}, ru = /* @__PURE__ */ Pe(
  {},
  Sc,
  nu
), Hh = (e) => (e.displayName = "Transition", e.props = ru, e), C2 = /* @__PURE__ */ Hh(
  (e, { slots: t }) => Un($d, su(e), t)
), cn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, oa = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function su(e) {
  const t = {};
  for (const H in e)
    H in nu || (t[H] = e[H]);
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
  } = e, A = $h(o), T = A && A[0], w = A && A[1], {
    onBeforeEnter: v,
    onEnter: k,
    onEnterCancelled: E,
    onLeave: y,
    onLeaveCancelled: P,
    onBeforeAppear: R = v,
    onAppear: U = k,
    onAppearCancelled: F = E
  } = t, I = (H, Z, se, ue) => {
    H._enterCancelled = ue, zt(H, Z ? c : a), zt(H, Z ? u : i), se && se();
  }, K = (H, Z) => {
    H._isLeaving = !1, zt(H, f), zt(H, b), zt(H, m), Z && Z();
  }, Y = (H) => (Z, se) => {
    const ue = H ? U : k, $ = () => I(Z, H, se);
    cn(ue, [Z, $]), ia(() => {
      zt(Z, H ? l : s), At(Z, H ? c : a), oa(ue) || aa(Z, r, T, $);
    });
  };
  return Pe(t, {
    onBeforeEnter(H) {
      cn(v, [H]), At(H, s), At(H, i);
    },
    onBeforeAppear(H) {
      cn(R, [H]), At(H, l), At(H, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(H, Z) {
      H._isLeaving = !0;
      const se = () => K(H, Z);
      At(H, f), H._enterCancelled ? (At(H, m), Po(H)) : (Po(H), At(H, m)), ia(() => {
        H._isLeaving && (zt(H, f), At(H, b), oa(y) || aa(H, r, w, se));
      }), cn(y, [H, se]);
    },
    onEnterCancelled(H) {
      I(H, !1, void 0, !0), cn(E, [H]);
    },
    onAppearCancelled(H) {
      I(H, !0, void 0, !0), cn(F, [H]);
    },
    onLeaveCancelled(H) {
      K(H), cn(P, [H]);
    }
  });
}
function $h(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [lo(e.enter), lo(e.leave)];
  {
    const t = lo(e);
    return [t, t];
  }
}
function lo(e) {
  return Wf(e);
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
}
function zt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Hn];
  n && (n.delete(t), n.size || (e[Hn] = void 0));
}
function ia(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vh = 0;
function aa(e, t, n, r) {
  const o = e._endId = ++Vh, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = ou(e, t);
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
function ou(e, t) {
  const n = window.getComputedStyle(e), r = (A) => (n[A] || "").split(", "), o = r(`${Kt}Delay`), s = r(`${Kt}Duration`), i = la(o, s), a = r(`${Gn}Delay`), l = r(`${Gn}Duration`), u = la(a, l);
  let c = null, f = 0, m = 0;
  t === Kt ? i > 0 && (c = Kt, f = i, m = s.length) : t === Gn ? u > 0 && (c = Gn, f = u, m = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Kt : Gn : null, m = c ? c === Kt ? s.length : l.length : 0);
  const b = c === Kt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Kt}Property`).toString()
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
function Po(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function jh(e, t, n) {
  const r = e[Hn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fs = /* @__PURE__ */ Symbol("_vod"), iu = /* @__PURE__ */ Symbol("_vsh"), R2 = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[fs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Yn(e, !0), r.enter(e)) : r.leave(e, () => {
      Yn(e, !1);
    }) : Yn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yn(e, t);
  }
};
function Yn(e, t) {
  e.style.display = t ? e[fs] : "none", e[iu] = !t;
}
const Wh = /* @__PURE__ */ Symbol(""), Bh = /(?:^|;)\s*display\s*:/;
function Kh(e, t, n) {
  const r = e.style, o = Le(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Xr(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Xr(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Xr(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Wh];
      i && (n += ";" + i), r.cssText = n, s = Bh.test(n);
    }
  } else t && e.removeAttribute("style");
  fs in e && (e[fs] = s ? r.display : "", e[iu] && (r.display = "none"));
}
const ua = /\s*!important$/;
function Xr(e, t, n) {
  if (Q(n))
    n.forEach((r) => Xr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = qh(e, t);
    ua.test(n) ? e.setProperty(
      Wt(r),
      n.replace(ua, ""),
      "important"
    ) : e[r] = n;
  }
}
const fa = ["Webkit", "Moz", "ms"], co = {};
function qh(e, t) {
  const n = co[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return co[t] = r;
  r = Os(r);
  for (let o = 0; o < fa.length; o++) {
    const s = fa[o] + r;
    if (s in e)
      return co[t] = s;
  }
  return t;
}
const da = "http://www.w3.org/1999/xlink";
function ha(e, t, n, r, o, s = Yf(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(da, t.slice(6, t.length)) : e.setAttributeNS(da, t, n) : n == null || s && !$l(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : gt(n) ? String(n) : n
  );
}
function ma(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tu(n) : n);
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
    a === "boolean" ? n = $l(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function mn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function zh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const pa = /* @__PURE__ */ Symbol("_vei");
function Gh(e, t, n, r, o = null) {
  const s = e[pa] || (e[pa] = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = Yh(t);
    if (r) {
      const u = s[t] = Qh(
        r,
        o
      );
      mn(e, a, u, l);
    } else i && (zh(e, a, i, l), s[t] = void 0);
  }
}
const _a = /(?:Once|Passive|Capture)$/;
function Yh(e) {
  let t;
  if (_a.test(e)) {
    t = {};
    let r;
    for (; r = e.match(_a); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wt(e.slice(2)), t];
}
let uo = 0;
const Xh = /* @__PURE__ */ Promise.resolve(), Jh = () => uo || (Xh.then(() => uo = 0), uo = Date.now());
function Qh(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    yt(
      Zh(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Jh(), n;
}
function Zh(e, t) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, em = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? jh(e, r, i) : t === "style" ? Kh(e, n, r) : Ss(t) ? Go(t) || Gh(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tm(e, t, r, i)) ? (ma(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ha(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Le(r)) ? ma(e, at(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ha(e, t, r, i));
};
function tm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ga(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ga(t) && Le(n) ? !1 : t in e;
}
const au = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ Symbol("_moveCb"), ba = /* @__PURE__ */ Symbol("_enterCb"), nm = (e) => (delete e.props.mode, e), rm = /* @__PURE__ */ nm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pe({}, ru, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Et(), r = vc();
    let o, s;
    return Rc(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!lm(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(om), o.forEach(im);
      const a = o.filter(am);
      Po(n.vnode.el), a.forEach((l) => {
        const u = l.el, c = u.style;
        At(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[ds] = (m) => {
          m && m.target !== u || (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ds] = null, zt(u, i));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const i = ce(e), a = su(i);
      let l = i.tag || Me;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), vn(
            c,
            _r(
              c,
              a,
              r,
              n
            )
          ), au.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? ii(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && vn(
          c,
          _r(c, a, r, n)
        );
      }
      return Ie(l, null, s);
    };
  }
}), sm = rm;
function om(e) {
  const t = e.el;
  t[ds] && t[ds](), t[ba] && t[ba]();
}
function im(e) {
  lu.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function am(e) {
  const t = au.get(e), n = lu.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function lm(e, t, n) {
  const r = e.cloneNode(), o = e[Hn];
  o && o.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = ou(r);
  return s.removeChild(r), i;
}
const hs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => qr(t, n) : t;
};
function cm(e) {
  e.target.composing = !0;
}
function ya(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xn = /* @__PURE__ */ Symbol("_assign");
function Ea(e, t, n) {
  return t && (e = e.trim()), n && (e = Xo(e)), e;
}
const I2 = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[xn] = hs(o);
    const s = r || o.props && o.props.type === "number";
    mn(e, t ? "change" : "input", (i) => {
      i.target.composing || e[xn](Ea(e.value, n, s));
    }), (n || s) && mn(e, "change", () => {
      e.value = Ea(e.value, n, s);
    }), t || (mn(e, "compositionstart", cm), mn(e, "compositionend", ya), mn(e, "change", ya));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[xn] = hs(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Xo(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, P2 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[xn] = hs(n), mn(e, "change", () => {
      const r = e._modelValue, o = um(e), s = e.checked, i = e[xn];
      if (Q(r)) {
        const a = Vl(r, o), l = a !== -1;
        if (s && !l)
          i(r.concat(o));
        else if (!s && l) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (Ts(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(cu(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: va,
  beforeUpdate(e, t, n) {
    e[xn] = hs(n), va(e, t, n);
  }
};
function va(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let o;
  if (Q(t))
    o = Vl(t, r.props.value) > -1;
  else if (Ts(t))
    o = t.has(r.props.value);
  else {
    if (t === n) return;
    o = Rs(t, cu(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
function um(e) {
  return "_value" in e ? e._value : e.value;
}
function cu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const fm = ["ctrl", "shift", "alt", "meta"], dm = {
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
  exact: (e, t) => fm.some((n) => e[`${n}Key`] && !t.includes(n))
}, N2 = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = dm[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  }));
}, hm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, k2 = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = Wt(o.key);
    if (t.some(
      (i) => i === s || hm[i] === s
    ))
      return e(o);
  }));
}, mm = /* @__PURE__ */ Pe({ patchProp: em }, Uh);
let Sa;
function pm() {
  return Sa || (Sa = _h(mm));
}
const _m = ((...e) => {
  const t = pm().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = bm(r);
    if (!o) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, gm(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function gm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bm(e) {
  return Le(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let uu;
const Hs = (e) => uu = e, fu = (
  /* istanbul ignore next */
  Symbol()
);
function No(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var cr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(cr || (cr = {}));
function ym() {
  const e = Jo(!0), t = e.run(() => le({}));
  let n = [], r = [];
  const o = ri({
    install(s) {
      Hs(o), o._a = s, s.provide(fu, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
const du = () => {
};
function Ta(e, t, n, r = du) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Kl() && Jf(o), o;
}
function On(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Em = (e) => e(), Aa = Symbol(), fo = Symbol();
function ko(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    No(o) && No(r) && e.hasOwnProperty(n) && !Oe(r) && !Ht(r) ? e[n] = ko(o, r) : e[n] = r;
  }
  return e;
}
const vm = (
  /* istanbul ignore next */
  Symbol()
);
function Sm(e) {
  return !No(e) || !e.hasOwnProperty(vm);
}
const { assign: Gt } = Object;
function Tm(e) {
  return !!(Oe(e) && e.effect);
}
function Am(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = vd(n.state.value[e]);
    return Gt(c, s, Object.keys(i || {}).reduce((f, m) => (f[m] = ri(be(() => {
      Hs(n);
      const b = n._s.get(e);
      return i[m].call(b, b);
    })), f), {}));
  }
  return l = hu(e, u, t, n, r, !0), l;
}
function hu(e, t, n = {}, r, o, s) {
  let i;
  const a = Gt({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], m = [], b;
  const A = r.state.value[e];
  !s && !A && (r.state.value[e] = {}), le({});
  let T;
  function w(F) {
    let I;
    u = c = !1, typeof F == "function" ? (F(r.state.value[e]), I = {
      type: cr.patchFunction,
      storeId: e,
      events: b
    }) : (ko(r.state.value[e], F), I = {
      type: cr.patchObject,
      payload: F,
      storeId: e,
      events: b
    });
    const K = T = Symbol();
    uc().then(() => {
      T === K && (u = !0);
    }), c = !0, On(f, I, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: I } = n, K = I ? I() : {};
    this.$patch((Y) => {
      Gt(Y, K);
    });
  } : (
    /* istanbul ignore next */
    du
  );
  function k() {
    i.stop(), f = [], m = [], r._s.delete(e);
  }
  const E = (F, I = "") => {
    if (Aa in F)
      return F[fo] = I, F;
    const K = function() {
      Hs(r);
      const Y = Array.from(arguments), H = [], Z = [];
      function se(B) {
        H.push(B);
      }
      function ue(B) {
        Z.push(B);
      }
      On(m, {
        args: Y,
        name: K[fo],
        store: P,
        after: se,
        onError: ue
      });
      let $;
      try {
        $ = F.apply(this && this.$id === e ? this : P, Y);
      } catch (B) {
        throw On(Z, B), B;
      }
      return $ instanceof Promise ? $.then((B) => (On(H, B), B)).catch((B) => (On(Z, B), Promise.reject(B))) : (On(H, $), $);
    };
    return K[Aa] = !0, K[fo] = I, K;
  }, y = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ta.bind(null, m),
    $patch: w,
    $reset: v,
    $subscribe(F, I = {}) {
      const K = Ta(f, F, I.detached, () => Y()), Y = i.run(() => bn(() => r.state.value[e], (H) => {
        (I.flush === "sync" ? c : u) && F({
          storeId: e,
          type: cr.direct,
          events: b
        }, H);
      }, Gt({}, l, I)));
      return K;
    },
    $dispose: k
  }, P = wr(y);
  r._s.set(e, P);
  const U = (r._a && r._a.runWithContext || Em)(() => r._e.run(() => (i = Jo()).run(() => t({ action: E }))));
  for (const F in U) {
    const I = U[F];
    if (Oe(I) && !Tm(I) || Ht(I))
      s || (A && Sm(I) && (Oe(I) ? I.value = A[F] : ko(I, A[F])), r.state.value[e][F] = I);
    else if (typeof I == "function") {
      const K = E(I, F);
      U[F] = K, a.actions[F] = I;
    }
  }
  return Gt(P, U), Gt(ce(P), U), Object.defineProperty(P, "$state", {
    get: () => r.state.value[e],
    set: (F) => {
      w((I) => {
        Gt(I, F);
      });
    }
  }), r._p.forEach((F) => {
    Gt(P, i.run(() => F({
      store: P,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), A && s && n.hydrate && n.hydrate(P.$state, A), u = !0, c = !0, P;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mu(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function i(a, l) {
    const u = Nd();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? _t(fu, null) : null), a && Hs(a), a = uu, a._s.has(r) || (s ? hu(r, t, o, a) : Am(r, o, a)), a._s.get(r);
  }
  return i.$id = r, i;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const wm = () => {
}, ms = Array.isArray;
function wa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Om(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Lm(e[n], t[n])) return !1;
  return !0;
}
function Lm(e, t) {
  return ms(e) ? Oa(e, t) : ms(t) ? Oa(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Oa(e, t) {
  return ms(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
const $s = Symbol(""), hi = Symbol("");
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function La(e) {
  const t = _t($s), n = _t(hi), r = be(() => {
    const l = sr(e.to);
    return t.resolve(l);
  }), o = be(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const m = f.findIndex(wa.bind(null, c));
    if (m > -1) return m;
    const b = Ca(l[u - 2]);
    return u > 1 && Ca(c) === b && f[f.length - 1].path !== b ? f.findIndex(wa.bind(null, l[u - 2])) : m;
  }), s = be(() => o.value > -1 && Nm(n.params, r.value.params)), i = be(() => o.value > -1 && o.value === n.matched.length - 1 && Om(n.params, r.value.params));
  function a(l = {}) {
    if (Pm(l)) {
      const u = t[sr(e.replace) ? "replace" : "push"](sr(e.to)).catch(wm);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: be(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a
  };
}
function Cm(e) {
  return e.length === 1 ? e[0] : e;
}
const Rm = /* @__PURE__ */ An({
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
  useLink: La,
  setup(e, { slots: t }) {
    const n = wr(La(e)), { options: r } = _t($s), o = be(() => ({
      [Ra(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [Ra(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Cm(t.default(n));
      return e.custom ? s : Un("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), Im = Rm;
function Pm(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Nm(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!ms(o) || o.length !== r.length || r.some((s, i) => s.valueOf() !== o[i].valueOf())) return !1;
  }
  return !0;
}
function Ca(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ra = (e, t, n) => e ?? t ?? n;
function M2() {
  return _t($s);
}
function x2(e) {
  return _t(hi);
}
const km = ["stroke-width"], Mm = ["d"], Ia = /* @__PURE__ */ An({
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
    }, r = be(() => n[t.name]), o = be(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (s, i) => (Ft(), er("svg", {
      class: Zt(o.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      ht("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, Mm)
    ], 10, km));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function xm(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ps = typeof window < "u", nn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Dm = (e, t, n) => Fm({ l: e, k: t, s: n }), Fm = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Re = (e) => typeof e == "number" && isFinite(e), Um = (e) => _u(e) === "[object Date]", tn = (e) => _u(e) === "[object RegExp]", Vs = (e) => te(e) && Object.keys(e).length === 0, $e = Object.assign, Hm = Object.create, _e = (e = null) => Hm(e);
let Pa;
const pn = () => Pa || (Pa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function Na(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ka(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $m(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${ka(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${ka(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Vm = Object.prototype.hasOwnProperty;
function mt(e, t) {
  return Vm.call(e, t);
}
const Se = Array.isArray, Ee = (e) => typeof e == "function", G = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", de = (e) => e !== null && typeof e == "object", jm = (e) => de(e) && Ee(e.then) && Ee(e.catch), pu = Object.prototype.toString, _u = (e) => pu.call(e), te = (e) => {
  if (!de(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Wm = (e) => e == null ? "" : Se(e) || te(e) && e.toString === pu ? JSON.stringify(e, null, 2) : String(e);
function Bm(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function js(e) {
  let t = e;
  return () => ++t;
}
const Ur = (e) => !de(e) || Se(e);
function Jr(e, t) {
  if (Ur(e) || Ur(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (de(r[s]) && !de(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : _e()), Ur(o[s]) || Ur(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Km(e, t, n) {
  return { line: e, column: t, offset: n };
}
function _s(e, t, n) {
  return { start: e, end: t };
}
const qm = /\{([0-9a-zA-Z]+)\}/g;
function gu(e, ...t) {
  return t.length === 1 && zm(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(qm, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const bu = Object.assign, Ma = (e) => typeof e == "string", zm = (e) => e !== null && typeof e == "object";
function yu(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const mi = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Gm = {
  [mi.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Ym(e, t, ...n) {
  const r = gu(Gm[e], ...n || []), o = { message: String(r), code: e };
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
}, Xm = {
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
function Bn(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, i = gu((o || Xm)[e] || "", ...s || []), a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a;
}
function Jm(e) {
  throw e;
}
const Pt = " ", Qm = "\r", Qe = `
`, Zm = "\u2028", e0 = "\u2029";
function t0(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const i = (U) => t[U] === Qm && t[U + 1] === Qe, a = (U) => t[U] === Qe, l = (U) => t[U] === e0, u = (U) => t[U] === Zm, c = (U) => i(U) || a(U) || l(U) || u(U), f = () => n, m = () => r, b = () => o, A = () => s, T = (U) => i(U) || l(U) || u(U) ? Qe : t[U], w = () => T(n), v = () => T(n + s);
  function k() {
    return s = 0, c(n) && (r++, o = 0), i(n) && n++, n++, o++, t[n];
  }
  function E() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function y() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function P(U = 0) {
    s = U;
  }
  function R() {
    const U = n + s;
    for (; U !== n; )
      k();
    s = 0;
  }
  return {
    index: f,
    line: m,
    column: b,
    peekOffset: A,
    charAt: T,
    currentChar: w,
    currentPeek: v,
    next: k,
    peek: E,
    reset: y,
    resetPeek: P,
    skipToPeek: R
  };
}
const qt = void 0, n0 = ".", xa = "'", r0 = "tokenizer";
function s0(e, t = {}) {
  const n = t.location !== !1, r = t0(e), o = () => r.index(), s = () => Km(r.line(), r.column(), r.index()), i = s(), a = o(), l = {
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
      const j = n ? _s(q.startLoc, h) : null, C = Bn(d, j, {
        domain: r0,
        args: x
      });
      c(C);
    }
  }
  function m(d, h, O) {
    d.endLoc = s(), d.currentType = h;
    const x = { type: h };
    return n && (x.loc = _s(d.startLoc, d.endLoc)), O != null && (x.value = O), x;
  }
  const b = (d) => m(
    d,
    14
    /* TokenTypes.EOF */
  );
  function A(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (f(ee.EXPECTED_TOKEN, s(), 0, h), "");
  }
  function T(d) {
    let h = "";
    for (; d.currentPeek() === Pt || d.currentPeek() === Qe; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function w(d) {
    const h = T(d);
    return d.skipToPeek(), h;
  }
  function v(d) {
    if (d === qt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function k(d) {
    if (d === qt)
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
    const x = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), q = k(x);
    return d.resetPeek(), q;
  }
  function P(d, h) {
    const { currentType: O } = h;
    if (O !== 2)
      return !1;
    T(d);
    const x = d.currentPeek() === xa;
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
      return j === "{" ? v(d.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Pt || !j ? !1 : j === Qe ? (d.peek(), x()) : H(d, !1);
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
      return D === "{" ? j === "%" ? !1 : q : D === "@" || !D ? j === "%" ? !0 : q : D === "%" ? (d.peek(), O(q, "%", !0)) : D === "|" ? j === "%" || C ? !0 : !(j === Pt || j === Qe) : D === Pt ? (d.peek(), O(!0, Pt, C)) : D === Qe ? (d.peek(), O(!0, Qe, C)) : !0;
    }, x = O();
    return h && d.resetPeek(), x;
  }
  function Z(d, h) {
    const O = d.currentChar();
    return O === qt ? qt : h(O) ? (d.next(), O) : null;
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
  function ve(d) {
    return Z(d, J);
  }
  function Te(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function re(d) {
    return Z(d, Te);
  }
  function me(d) {
    let h = "", O = "";
    for (; h = ve(d); )
      O += h;
    return O;
  }
  function Ne(d) {
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
      else if (O === Pt || O === Qe)
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
  function lt(d) {
    w(d);
    let h = "", O = "";
    for (; h = B(d); )
      O += h;
    return d.currentChar() === qt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O;
  }
  function oe(d) {
    w(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${me(d)}`) : h += me(d), d.currentChar() === qt && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h;
  }
  function Ae(d) {
    return d !== xa && d !== Qe;
  }
  function je(d) {
    w(d), A(d, "'");
    let h = "", O = "";
    for (; h = Z(d, Ae); )
      h === "\\" ? O += Ye(d) : O += h;
    const x = d.currentChar();
    return x === Qe || x === qt ? (f(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), x === Qe && (d.next(), A(d, "'")), O) : (A(d, "'"), O);
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
    A(d, h);
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
    return d !== "{" && d !== "}" && d !== Pt && d !== Qe;
  }
  function p(d) {
    w(d);
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
      return x === "{" || x === "%" || x === "@" || x === "|" || x === "(" || x === ")" || !x || x === Pt ? O : (O += x, d.next(), h(O));
    };
    return h("");
  }
  function N(d) {
    w(d);
    const h = A(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return w(d), h;
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
        let q = !0, j = !0, C = !0;
        if (K(d))
          return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), O = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, O;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return f(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), h.braceNest = 0, W(d, h);
        if (q = E(d, h))
          return O = m(h, 5, lt(d)), w(d), O;
        if (j = y(d, h))
          return O = m(h, 6, oe(d)), w(d), O;
        if (C = P(d, h))
          return O = m(h, 7, je(d)), w(d), O;
        if (!q && !j && !C)
          return O = m(h, 13, p(d)), f(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, O.value), w(d), O;
        break;
      }
    }
    return O;
  }
  function M(d, h) {
    const { currentType: O } = h;
    let x = null;
    const q = d.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (q === Qe || q === Pt) && f(ee.INVALID_LINKED_FORMAT, s(), 0), q) {
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
        return K(d) ? (x = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, x) : R(d, h) || F(d, h) ? (w(d), M(d, h)) : U(d, h) ? (w(d), m(h, 12, g(d))) : I(d, h) ? (w(d), q === "{" ? L(d, h) || x : m(h, 11, _(d))) : (O === 8 && f(ee.INVALID_LINKED_FORMAT, s(), 0), h.braceNest = 0, h.inLinked = !1, W(d, h));
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
      return M(d, h) || b(h);
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
        return M(d, h) || b(h);
      default: {
        if (K(d))
          return O = m(h, 1, N(d)), h.braceNest = 0, h.inLinked = !1, O;
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
    return l.lastType = d, l.lastOffset = h, l.lastStartLoc = O, l.lastEndLoc = x, l.offset = o(), l.startLoc = s(), r.currentChar() === qt ? m(
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
const o0 = "parser", i0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function a0(e, t, n) {
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
function l0(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(E, y, P, R, ...U) {
    const F = E.currentPosition();
    if (F.offset += R, F.column += R, n) {
      const I = t ? _s(P, F) : null, K = Bn(y, I, {
        domain: o0,
        args: U
      });
      n(K);
    }
  }
  function s(E, y, P, R, ...U) {
    const F = E.currentPosition();
    if (F.offset += R, F.column += R, r) {
      const I = t ? _s(P, F) : null;
      r(Ym(y, I, U));
    }
  }
  function i(E, y, P) {
    const R = { type: E };
    return t && (R.start = y, R.end = y, R.loc = { start: P, end: P }), R;
  }
  function a(E, y, P, R) {
    t && (E.end = y, E.loc && (E.loc.end = P));
  }
  function l(E, y) {
    const P = E.context(), R = i(3, P.offset, P.startLoc);
    return R.value = y, a(R, E.currentOffset(), E.currentPosition()), R;
  }
  function u(E, y) {
    const P = E.context(), { lastOffset: R, lastStartLoc: U } = P, F = i(5, R, U);
    return F.index = parseInt(y, 10), E.nextToken(), a(F, E.currentOffset(), E.currentPosition()), F;
  }
  function c(E, y, P) {
    const R = E.context(), { lastOffset: U, lastStartLoc: F } = R, I = i(4, U, F);
    return I.key = y, P === !0 && (I.modulo = !0), E.nextToken(), a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function f(E, y) {
    const P = E.context(), { lastOffset: R, lastStartLoc: U } = P, F = i(9, R, U);
    return F.value = y.replace(i0, a0), E.nextToken(), a(F, E.currentOffset(), E.currentPosition()), F;
  }
  function m(E) {
    const y = E.nextToken(), P = E.context(), { lastOffset: R, lastStartLoc: U } = P, F = i(8, R, U);
    return y.type !== 12 ? (o(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), F.value = "", a(F, R, U), {
      nextConsumeToken: y,
      node: F
    }) : (y.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, dt(y)), F.value = y.value || "", a(F, E.currentOffset(), E.currentPosition()), {
      node: F
    });
  }
  function b(E, y) {
    const P = E.context(), R = i(7, P.offset, P.startLoc);
    return R.value = y, a(R, E.currentOffset(), E.currentPosition()), R;
  }
  function A(E) {
    const y = E.context(), P = i(6, y.offset, y.startLoc);
    let R = E.nextToken();
    if (R.type === 9) {
      const U = m(E);
      P.modifier = U.node, R = U.nextConsumeToken || E.nextToken();
    }
    switch (R.type !== 10 && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), R = E.nextToken(), R.type === 2 && (R = E.nextToken()), R.type) {
      case 11:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), P.key = b(E, R.value || "");
        break;
      case 5:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), P.key = c(E, R.value || "");
        break;
      case 6:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), P.key = u(E, R.value || "");
        break;
      case 7:
        R.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(R)), P.key = f(E, R.value || "");
        break;
      default: {
        o(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const U = E.context(), F = i(7, U.offset, U.startLoc);
        return F.value = "", a(F, U.offset, U.startLoc), P.key = F, a(P, U.offset, U.startLoc), {
          nextConsumeToken: R,
          node: P
        };
      }
    }
    return a(P, E.currentOffset(), E.currentPosition()), {
      node: P
    };
  }
  function T(E) {
    const y = E.context(), P = y.currentType === 1 ? E.currentOffset() : y.offset, R = y.currentType === 1 ? y.endLoc : y.startLoc, U = i(2, P, R);
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
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(c(E, H.value || "", !!I)), I && (s(E, mi.USE_MODULO_SYNTAX, y.lastStartLoc, 0, dt(H)), I = null);
          break;
        case 7:
          H.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, dt(H)), U.items.push(f(E, H.value || ""));
          break;
        case 8: {
          const Z = A(E);
          U.items.push(Z.node), F = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const K = y.currentType === 1 ? y.lastOffset : E.currentOffset(), Y = y.currentType === 1 ? y.lastEndLoc : E.currentPosition();
    return a(U, K, Y), U;
  }
  function w(E, y, P, R) {
    const U = E.context();
    let F = R.items.length === 0;
    const I = i(1, y, P);
    I.cases = [], I.cases.push(R);
    do {
      const K = T(E);
      F || (F = K.items.length === 0), I.cases.push(K);
    } while (U.currentType !== 14);
    return F && o(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(I, E.currentOffset(), E.currentPosition()), I;
  }
  function v(E) {
    const y = E.context(), { offset: P, startLoc: R } = y, U = T(E);
    return y.currentType === 14 ? U : w(E, P, R, U);
  }
  function k(E) {
    const y = s0(E, bu({}, e)), P = y.context(), R = i(0, P.offset, P.startLoc);
    return t && R.loc && (R.loc.source = E), R.body = v(y), e.onCacheKey && (R.cacheKey = e.onCacheKey(E)), P.currentType !== 14 && o(y, ee.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, E[P.offset] || ""), a(R, y.currentOffset(), y.currentPosition()), R;
  }
  return { parse: k };
}
function dt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function c0(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Da(e, t) {
  for (let n = 0; n < e.length; n++)
    pi(e[n], t);
}
function pi(e, t) {
  switch (e.type) {
    case 1:
      Da(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Da(e.items, t);
      break;
    case 6: {
      pi(e.key, t), t.helper(
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
function u0(e, t = {}) {
  const n = c0(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && pi(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function f0(e) {
  const t = e.body;
  return t.type === 2 ? Fa(t) : t.cases.forEach((n) => Fa(n)), e;
}
function Fa(e) {
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
      e.static = yu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const d0 = "minifier";
function In(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      In(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        In(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        In(n[r]);
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
      In(t.key), t.k = t.key, delete t.key, t.modifier && (In(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw Bn(ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: d0,
        args: [e.type]
      });
  }
  delete e.type;
}
const h0 = "parser";
function m0(e, t) {
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
  function l(T, w) {
    i.code += T;
  }
  function u(T, w = !0) {
    const v = w ? r : "";
    l(o ? v + "  ".repeat(T) : v);
  }
  function c(T = !0) {
    const w = ++i.indentLevel;
    T && u(w);
  }
  function f(T = !0) {
    const w = --i.indentLevel;
    T && u(w);
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
function p0(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), $n(e, t.key), t.modifier ? (e.push(", "), $n(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function _0(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && ($n(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function g0(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && ($n(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function b0(e, t) {
  t.body ? $n(e, t.body) : e.push("null");
}
function $n(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      b0(e, t);
      break;
    case 1:
      g0(e, t);
      break;
    case 2:
      _0(e, t);
      break;
    case 6:
      p0(e, t);
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
      throw Bn(ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: h0,
        args: [t.type]
      });
  }
}
const y0 = (e, t = {}) => {
  const n = Ma(t.mode) ? t.mode : "normal", r = Ma(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], a = m0(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(s), i.length > 0 && (a.push(`const { ${yu(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), a.newline()), a.push("return "), $n(a, e), a.deindent(s), a.push("}"), delete e.helpers;
  const { code: l, map: u } = a.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function E0(e, t = {}) {
  const n = bu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = l0(n).parse(e);
  return r ? (s && f0(a), o && In(a), { ast: a, code: "" }) : (u0(a, n), y0(a, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function v0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Rt(e) {
  return de(e) && _i(e) === 0 && (mt(e, "b") || mt(e, "body"));
}
const Eu = ["b", "body"];
function S0(e) {
  return rn(e, Eu);
}
const vu = ["c", "cases"];
function T0(e) {
  return rn(e, vu, []);
}
const Su = ["s", "static"];
function A0(e) {
  return rn(e, Su);
}
const Tu = ["i", "items"];
function w0(e) {
  return rn(e, Tu, []);
}
const Au = ["t", "type"];
function _i(e) {
  return rn(e, Au);
}
const wu = ["v", "value"];
function Hr(e, t) {
  const n = rn(e, wu);
  if (n != null)
    return n;
  throw Er(t);
}
const Ou = ["m", "modifier"];
function O0(e) {
  return rn(e, Ou);
}
const Lu = ["k", "key"];
function L0(e) {
  const t = rn(e, Lu);
  if (t)
    return t;
  throw Er(
    6
    /* NodeTypes.Linked */
  );
}
function rn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (mt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Cu = [
  ...Eu,
  ...vu,
  ...Su,
  ...Tu,
  ...Lu,
  ...Ou,
  ...wu,
  ...Au
];
function Er(e) {
  return new Error(`unhandled node type: ${e}`);
}
const sn = [];
sn[
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
sn[
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
sn[
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
sn[
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
sn[
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
sn[
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
sn[
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
const C0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function R0(e) {
  return C0.test(e);
}
function I0(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function P0(e) {
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
function N0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : R0(t) ? I0(t) : "*" + t;
}
function k0(e) {
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
      if (o = 0, i === void 0 || (i = N0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const A = e[n + 1];
    if (r === 5 && A === "'" || r === 6 && A === '"')
      return n++, a = "\\" + A, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && b())) {
      if (l = P0(s), f = sn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (a = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ua = /* @__PURE__ */ new Map();
function M0(e, t) {
  return de(e) ? e[t] : null;
}
function x0(e, t) {
  if (!de(e))
    return null;
  let n = Ua.get(t);
  if (n || (n = k0(t), n && Ua.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const i = n[s];
    if (Cu.includes(i) && Rt(o))
      return null;
    const a = o[i];
    if (a === void 0 || Ee(o))
      return null;
    o = a, s++;
  }
  return o;
}
const D0 = (e) => e, F0 = (e) => "", U0 = "text", H0 = (e) => e.length === 0 ? "" : Bm(e), $0 = Wm;
function Ha(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function V0(e) {
  const t = Re(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Re(e.named.count) || Re(e.named.n)) ? Re(e.named.count) ? e.named.count : Re(e.named.n) ? e.named.n : t : t;
}
function j0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function W0(e = {}) {
  const t = e.locale, n = V0(e), r = de(e.pluralRules) && G(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : Ha, o = de(e.pluralRules) && G(t) && Ee(e.pluralRules[t]) ? Ha : void 0, s = (v) => v[r(n, v.length, o)], i = e.list || [], a = (v) => i[v], l = e.named || _e();
  Re(e.pluralIndex) && j0(n, l);
  const u = (v) => l[v];
  function c(v) {
    const k = Ee(e.messages) ? e.messages(v) : de(e.messages) ? e.messages[v] : !1;
    return k || (e.parent ? e.parent.message(v) : F0);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : D0, m = te(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : H0, b = te(e.processor) && Ee(e.processor.interpolate) ? e.processor.interpolate : $0, A = te(e.processor) && G(e.processor.type) ? e.processor.type : U0, w = {
    list: a,
    named: u,
    plural: s,
    linked: (v, ...k) => {
      const [E, y] = k;
      let P = "text", R = "";
      k.length === 1 ? de(E) ? (R = E.modifier || R, P = E.type || P) : G(E) && (R = E || R) : k.length === 2 && (G(E) && (R = E || R), G(y) && (P = y || P));
      const U = c(v)(w), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && Se(U) && R ? U[0] : U
      );
      return R ? f(R)(F, P) : F;
    },
    message: c,
    type: A,
    interpolate: b,
    normalize: m,
    values: $e(_e(), i, l)
  };
  return w;
}
let vr = null;
function B0(e) {
  vr = e;
}
function K0(e, t, n) {
  vr && vr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const q0 = /* @__PURE__ */ z0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function z0(e) {
  return (t) => vr && vr.emit(e, t);
}
const G0 = mi.__EXTEND_POINT__, un = js(G0), Y0 = {
  // 2
  FALLBACK_TO_TRANSLATE: un(),
  // 3
  CANNOT_FORMAT_NUMBER: un(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: un(),
  // 5
  CANNOT_FORMAT_DATE: un(),
  // 6
  FALLBACK_TO_DATE_FORMAT: un(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: un(),
  // 8
  __EXTEND_POINT__: un()
  // 9
}, Ru = ee.__EXTEND_POINT__, fn = js(Ru), Lt = {
  INVALID_ARGUMENT: Ru,
  // 17
  INVALID_DATE_ARGUMENT: fn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: fn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: fn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: fn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: fn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: fn(),
  // 23
  __EXTEND_POINT__: fn()
  // 24
};
function Ut(e) {
  return Bn(e, null, void 0);
}
function gi(e, t) {
  return t.locale != null ? $a(t.locale) : $a(e.locale);
}
let ho;
function $a(e) {
  if (G(e))
    return e;
  if (Ee(e)) {
    if (e.resolvedOnce && ho != null)
      return ho;
    if (e.constructor.name === "Function") {
      const t = e();
      if (jm(t))
        throw Ut(Lt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ho = t;
    } else
      throw Ut(Lt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ut(Lt.NOT_SUPPORT_LOCALE_TYPE);
}
function X0(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Se(t) ? t : de(t) ? Object.keys(t) : G(t) ? [t] : [n]
  ])];
}
function Iu(e, t, n) {
  const r = G(n) ? n : Vn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; Se(i); )
      i = Va(s, i, t);
    const a = Se(t) || !te(t) ? t : t.default ? t.default : null;
    i = G(a) ? [a] : a, Se(i) && Va(s, i, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function Va(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ie(r); o++) {
    const s = t[o];
    G(s) && (r = J0(e, t[o], n));
  }
  return r;
}
function J0(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Q0(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Q0(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Se(n) || te(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Z0 = "9.14.5", Ws = -1, Vn = "en-US", ja = "", Wa = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ep() {
  return {
    upper: (e, t) => t === "text" && G(e) ? e.toUpperCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && G(e) ? e.toLowerCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && G(e) ? Wa(e) : t === "vnode" && de(e) && "__v_isVNode" in e ? Wa(e.children) : e
  };
}
let Pu;
function tp(e) {
  Pu = e;
}
let Nu;
function np(e) {
  Nu = e;
}
let ku;
function rp(e) {
  ku = e;
}
let Mu = null;
const sp = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Mu = e;
}, op = /* @__NO_SIDE_EFFECTS__ */ () => Mu;
let xu = null;
const Ba = (e) => {
  xu = e;
}, ip = () => xu;
let Ka = 0;
function ap(e = {}) {
  const t = Ee(e.onWarn) ? e.onWarn : xm, n = G(e.version) ? e.version : Z0, r = G(e.locale) || Ee(e.locale) ? e.locale : Vn, o = Ee(r) ? Vn : r, s = Se(e.fallbackLocale) || te(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, i = te(e.messages) ? e.messages : mo(o), a = te(e.datetimeFormats) ? e.datetimeFormats : mo(o), l = te(e.numberFormats) ? e.numberFormats : mo(o), u = $e(_e(), e.modifiers, ep()), c = e.pluralRules || _e(), f = Ee(e.missing) ? e.missing : null, m = ie(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, b = ie(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, A = !!e.fallbackFormat, T = !!e.unresolving, w = Ee(e.postTranslation) ? e.postTranslation : null, v = te(e.processor) ? e.processor : null, k = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = Ee(e.messageCompiler) ? e.messageCompiler : Pu, P = Ee(e.messageResolver) ? e.messageResolver : Nu || M0, R = Ee(e.localeFallbacker) ? e.localeFallbacker : ku || X0, U = de(e.fallbackContext) ? e.fallbackContext : void 0, F = e, I = de(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), K = de(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), Y = de(F.__meta) ? F.__meta : {};
  Ka++;
  const H = {
    version: n,
    cid: Ka,
    locale: r,
    fallbackLocale: s,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: m,
    fallbackWarn: b,
    fallbackFormat: A,
    unresolving: T,
    postTranslation: w,
    processor: v,
    warnHtmlMessage: k,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: P,
    localeFallbacker: R,
    fallbackContext: U,
    onWarn: t,
    __meta: Y
  };
  return H.datetimeFormats = a, H.numberFormats = l, H.__datetimeFormatters = I, H.__numberFormatters = K, __INTLIFY_PROD_DEVTOOLS__ && K0(H, n, Y), H;
}
const mo = (e) => ({ [e]: _e() });
function bi(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  if (s !== null) {
    const a = s(e, n, t, o);
    return G(a) ? a : t;
  } else
    return t;
}
function Xn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function lp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function cp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (lp(e, t[r]))
      return !0;
  return !1;
}
function po(e) {
  return (n) => up(n, e);
}
function up(e, t) {
  const n = S0(t);
  if (n == null)
    throw Er(
      0
      /* NodeTypes.Resource */
    );
  if (_i(n) === 1) {
    const s = T0(n);
    return e.plural(s.reduce((i, a) => [
      ...i,
      qa(e, a)
    ], []));
  } else
    return qa(e, n);
}
function qa(e, t) {
  const n = A0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = w0(t).reduce((o, s) => [...o, Mo(e, s)], []);
    return e.normalize(r);
  }
}
function Mo(e, t) {
  const n = _i(t);
  switch (n) {
    case 3:
      return Hr(t, n);
    case 9:
      return Hr(t, n);
    case 4: {
      const r = t;
      if (mt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (mt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Er(n);
    }
    case 5: {
      const r = t;
      if (mt(r, "i") && Re(r.i))
        return e.interpolate(e.list(r.i));
      if (mt(r, "index") && Re(r.index))
        return e.interpolate(e.list(r.index));
      throw Er(n);
    }
    case 6: {
      const r = t, o = O0(r), s = L0(r);
      return e.linked(Mo(e, s), o ? Mo(e, o) : void 0, e.type);
    }
    case 7:
      return Hr(t, n);
    case 8:
      return Hr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const fp = (e) => e;
let $r = _e();
function dp(e, t = {}) {
  let n = !1;
  const r = t.onError || Jm;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...E0(e, t), detectError: n };
}
function hp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && G(e)) {
    ie(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || fp)(e), o = $r[r];
    if (o)
      return o;
    const { ast: s, detectError: i } = dp(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = po(s);
    return i ? a : $r[r] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = $r[n];
      return r || ($r[n] = po(e));
    } else
      return po(e);
  }
}
const za = () => "", ut = (e) => Ee(e);
function Ga(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: i, messages: a } = e, [l, u] = xo(...t), c = ie(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ie(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, A = G(u.default) || ie(u.default) ? ie(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", T = n || A !== "", w = gi(e, u);
  m && mp(u);
  let [v, k, E] = b ? [
    l,
    w,
    a[w] || _e()
  ] : Du(e, l, w, i, f, c), y = v, P = l;
  if (!b && !(G(y) || Rt(y) || ut(y)) && T && (y = A, P = y), !b && (!(G(y) || Rt(y) || ut(y)) || !G(k)))
    return o ? Ws : l;
  let R = !1;
  const U = () => {
    R = !0;
  }, F = ut(y) ? y : Fu(e, l, k, y, P, U);
  if (R)
    return y;
  const I = gp(e, k, E, u), K = W0(I), Y = pp(e, F, K);
  let H = r ? r(Y, l) : Y;
  if (m && G(H) && (H = $m(H)), __INTLIFY_PROD_DEVTOOLS__) {
    const Z = {
      timestamp: Date.now(),
      key: G(l) ? l : ut(y) ? y.key : "",
      locale: k || (ut(y) ? y.locale : ""),
      format: G(y) ? y : ut(y) ? y.source : "",
      message: H
    };
    Z.meta = $e({}, e.__meta, /* @__PURE__ */ op() || {}), q0(Z);
  }
  return H;
}
function mp(e) {
  Se(e.list) ? e.list = e.list.map((t) => G(t) ? Na(t) : t) : de(e.named) && Object.keys(e.named).forEach((t) => {
    G(e.named[t]) && (e.named[t] = Na(e.named[t]));
  });
}
function Du(e, t, n, r, o, s) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = _e(), m, b = null;
  const A = "translate";
  for (let T = 0; T < c.length && (m = c[T], f = i[m] || _e(), (b = l(f, t)) === null && (b = f[t]), !(G(b) || Rt(b) || ut(b))); T++)
    if (!cp(m, c)) {
      const w = bi(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        A
      );
      w !== t && (b = w);
    }
  return [b, m, f];
}
function Fu(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (ut(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (i == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = i(r, _p(e, n, o, r, a, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function pp(e, t, n) {
  return t(n);
}
function xo(...e) {
  const [t, n, r] = e, o = _e();
  if (!G(t) && !Re(t) && !ut(t) && !Rt(t))
    throw Ut(Lt.INVALID_ARGUMENT);
  const s = Re(t) ? String(t) : (ut(t), t);
  return Re(n) ? o.plural = n : G(n) ? o.default = n : te(n) && !Vs(n) ? o.named = n : Se(n) && (o.list = n), Re(r) ? o.plural = r : G(r) ? o.default = r : te(r) && $e(o, r), [s, o];
}
function _p(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      throw s && s(i), i;
    },
    onCacheKey: (i) => Dm(t, n, i)
  };
}
function gp(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (b) => {
      let A = i(n, b);
      if (A == null && c) {
        const [, , T] = Du(c, b, t, a, l, u);
        A = i(T, b);
      }
      if (G(A) || Rt(A)) {
        let T = !1;
        const v = Fu(e, b, t, A, b, () => {
          T = !0;
        });
        return T ? za : v;
      } else return ut(A) ? A : za;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Re(r.plural) && (m.pluralIndex = r.plural), m;
}
function Ya(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = Do(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, A = gi(e, c), T = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    A
  );
  if (!G(l) || l === "")
    return new Intl.DateTimeFormat(A, f).format(u);
  let w = {}, v, k = null;
  const E = "datetime format";
  for (let R = 0; R < T.length && (v = T[R], w = n[v] || {}, k = w[l], !te(k)); R++)
    bi(e, l, v, m, E);
  if (!te(k) || !G(v))
    return r ? Ws : l;
  let y = `${v}__${l}`;
  Vs(f) || (y = `${y}__${JSON.stringify(f)}`);
  let P = a.get(y);
  return P || (P = new Intl.DateTimeFormat(v, $e({}, k, f)), a.set(y, P)), b ? P.formatToParts(u) : P.format(u);
}
const Uu = [
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
function Do(...e) {
  const [t, n, r, o] = e, s = _e();
  let i = _e(), a;
  if (G(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ut(Lt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw Ut(Lt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Um(t)) {
    if (isNaN(t.getTime()))
      throw Ut(Lt.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Re(t))
    a = t;
  else
    throw Ut(Lt.INVALID_ARGUMENT);
  return G(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    Uu.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), G(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function Xa(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Ja(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: a } = e, [l, u, c, f] = Fo(...t), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const b = !!c.part, A = gi(e, c), T = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    A
  );
  if (!G(l) || l === "")
    return new Intl.NumberFormat(A, f).format(u);
  let w = {}, v, k = null;
  const E = "number format";
  for (let R = 0; R < T.length && (v = T[R], w = n[v] || {}, k = w[l], !te(k)); R++)
    bi(e, l, v, m, E);
  if (!te(k) || !G(v))
    return r ? Ws : l;
  let y = `${v}__${l}`;
  Vs(f) || (y = `${y}__${JSON.stringify(f)}`);
  let P = a.get(y);
  return P || (P = new Intl.NumberFormat(v, $e({}, k, f)), a.set(y, P)), b ? P.formatToParts(u) : P.format(u);
}
const Hu = [
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
function Fo(...e) {
  const [t, n, r, o] = e, s = _e();
  let i = _e();
  if (!Re(t))
    throw Ut(Lt.INVALID_ARGUMENT);
  const a = t;
  return G(n) ? s.key = n : te(n) && Object.keys(n).forEach((l) => {
    Hu.includes(l) ? i[l] = n[l] : s[l] = n[l];
  }), G(r) ? s.locale = r : te(r) && (i = r), te(o) && (i = o), [s.key || "", a, s, i];
}
function Qa(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
v0();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const bp = "9.14.5";
function yp() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (pn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (pn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Ep = Y0.__EXTEND_POINT__, Nt = js(Ep);
Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt(), Nt();
const $u = Lt.__EXTEND_POINT__, tt = js($u), ke = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: $u,
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
  return Bn(e, null, void 0);
}
const Uo = /* @__PURE__ */ nn("__translateVNode"), Ho = /* @__PURE__ */ nn("__datetimeParts"), $o = /* @__PURE__ */ nn("__numberParts"), Vu = nn("__setPluralRules"), ju = /* @__PURE__ */ nn("__injectWithOption"), Vo = /* @__PURE__ */ nn("__dispose");
function Sr(e) {
  if (!de(e) || Rt(e))
    return e;
  for (const t in e)
    if (mt(e, t))
      if (!t.includes("."))
        de(e[t]) && Sr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in o || (o[n[i]] = _e()), !de(o[n[i]])) {
            s = !0;
            break;
          }
          o = o[n[i]];
        }
        if (s || (Rt(o) ? Cu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Rt(o)) {
          const i = o[n[r]];
          de(i) && Sr(i);
        }
      }
  return e;
}
function Bs(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, i = te(n) ? n : Se(r) ? _e() : { [e]: _e() };
  if (Se(r) && r.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (i[l] = i[l] || _e(), Jr(u, i[l])) : Jr(u, i);
    } else
      G(a) && Jr(JSON.parse(a), i);
  }), o == null && s)
    for (const a in i)
      mt(i, a) && Sr(i[a]);
  return i;
}
function Wu(e) {
  return e.type;
}
function Bu(e, t, n) {
  let r = de(t.messages) ? t.messages : _e();
  "__i18nGlobal" in n && (r = Bs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (de(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (de(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Za(e) {
  return Ie(Lr, null, e, 0);
}
const el = "__INTLIFY_META__", tl = () => [], vp = () => !1;
let nl = 0;
function rl(e) {
  return ((t, n, r, o) => e(n, r, Et() || void 0, o));
}
const Sp = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Et();
  let t = null;
  return e && (t = Wu(e)[el]) ? { [el]: t } : null;
};
function yi(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, i = ps ? le : si, a = !!e.translateExistCompatible;
  let l = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const u = i(
    // prettier-ignore
    n && l ? n.locale.value : G(e.locale) ? e.locale : Vn
  ), c = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : G(e.fallbackLocale) || Se(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = i(Bs(u.value, e)), m = i(te(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), b = i(te(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let A = n ? n.missingWarn : ie(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, T = n ? n.fallbackWarn : ie(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, w = n ? n.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, k = Ee(e.missing) ? e.missing : null, E = Ee(e.missing) ? rl(e.missing) : null, y = Ee(e.postTranslation) ? e.postTranslation : null, P = n ? n.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter;
  const U = n ? n.modifiers : te(e.modifiers) ? e.modifiers : {};
  let F = e.pluralRules || n && n.pluralRules, I;
  I = (() => {
    o && Ba(null);
    const C = {
      version: bp,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: U,
      pluralRules: F,
      missing: E === null ? void 0 : E,
      missingWarn: A,
      fallbackWarn: T,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: P,
      escapeParameter: R,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = m.value, C.numberFormats = b.value, C.__datetimeFormatters = te(I) ? I.__datetimeFormatters : void 0, C.__numberFormatters = te(I) ? I.__numberFormatters : void 0;
    const D = ap(C);
    return o && Ba(D), D;
  })(), Xn(I, u.value, c.value);
  function Y() {
    return [
      u.value,
      c.value,
      f.value,
      m.value,
      b.value
    ];
  }
  const H = be({
    get: () => u.value,
    set: (C) => {
      u.value = C, I.locale = u.value;
    }
  }), Z = be({
    get: () => c.value,
    set: (C) => {
      c.value = C, I.fallbackLocale = c.value, Xn(I, u.value, C);
    }
  }), se = be(() => f.value), ue = /* @__PURE__ */ be(() => m.value), $ = /* @__PURE__ */ be(() => b.value);
  function B() {
    return Ee(y) ? y : null;
  }
  function J(C) {
    y = C, I.postTranslation = C;
  }
  function ve() {
    return k;
  }
  function Te(C) {
    C !== null && (E = rl(C)), k = C, I.missing = E;
  }
  const re = (C, D, X, ae, we, Xe) => {
    Y();
    let Fe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (I.fallbackContext = n ? ip() : void 0), Fe = C(I);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (I.fallbackContext = void 0);
    }
    if (X !== "translate exists" && // for not `te` (e.g `t`)
    Re(Fe) && Fe === Ws || X === "translate exists" && !Fe) {
      const [on, Zs] = D();
      return n && w ? ae(n) : we(on);
    } else {
      if (Xe(Fe))
        return Fe;
      throw xe(ke.UNEXPECTED_RETURN_TYPE);
    }
  };
  function me(...C) {
    return re((D) => Reflect.apply(Ga, null, [D, ...C]), () => xo(...C), "translate", (D) => Reflect.apply(D.t, D, [...C]), (D) => D, (D) => G(D));
  }
  function Ne(...C) {
    const [D, X, ae] = C;
    if (ae && !de(ae))
      throw xe(ke.INVALID_ARGUMENT);
    return me(D, X, $e({ resolvedMessage: !0 }, ae || {}));
  }
  function Ve(...C) {
    return re((D) => Reflect.apply(Ya, null, [D, ...C]), () => Do(...C), "datetime format", (D) => Reflect.apply(D.d, D, [...C]), () => ja, (D) => G(D));
  }
  function lt(...C) {
    return re((D) => Reflect.apply(Ja, null, [D, ...C]), () => Fo(...C), "number format", (D) => Reflect.apply(D.n, D, [...C]), () => ja, (D) => G(D));
  }
  function oe(C) {
    return C.map((D) => G(D) || Re(D) || ie(D) ? Za(String(D)) : D);
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
          ae.processor = je, X = Reflect.apply(Ga, null, [ae, ...C]);
        } finally {
          ae.processor = null;
        }
        return X;
      },
      () => xo(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Uo](...C),
      (D) => [Za(D)],
      (D) => Se(D)
    );
  }
  function De(...C) {
    return re(
      (D) => Reflect.apply(Ja, null, [D, ...C]),
      () => Fo(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[$o](...C),
      tl,
      (D) => G(D) || Se(D)
    );
  }
  function ft(...C) {
    return re(
      (D) => Reflect.apply(Ya, null, [D, ...C]),
      () => Do(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Ho](...C),
      tl,
      (D) => G(D) || Se(D)
    );
  }
  function p(C) {
    F = C, I.pluralRules = F;
  }
  function g(C, D) {
    return re(() => {
      if (!C)
        return !1;
      const X = G(D) ? D : u.value, ae = L(X), we = I.messageResolver(ae, C);
      return a ? we != null : Rt(we) || ut(we) || G(we);
    }, () => [C], "translate exists", (X) => Reflect.apply(X.te, X, [C, D]), vp, (X) => ie(X));
  }
  function _(C) {
    let D = null;
    const X = Iu(I, c.value, u.value);
    for (let ae = 0; ae < X.length; ae++) {
      const we = f.value[X[ae]] || {}, Xe = I.messageResolver(we, C);
      if (Xe != null) {
        D = Xe;
        break;
      }
    }
    return D;
  }
  function N(C) {
    const D = _(C);
    return D ?? (n ? n.tm(C) || {} : {});
  }
  function L(C) {
    return f.value[C] || {};
  }
  function M(C, D) {
    if (s) {
      const X = { [C]: D };
      for (const ae in X)
        mt(X, ae) && Sr(X[ae]);
      D = X[C];
    }
    f.value[C] = D, I.messages = f.value;
  }
  function W(C, D) {
    f.value[C] = f.value[C] || {};
    const X = { [C]: D };
    if (s)
      for (const ae in X)
        mt(X, ae) && Sr(X[ae]);
    D = X[C], Jr(D, f.value[C]), I.messages = f.value;
  }
  function V(C) {
    return m.value[C] || {};
  }
  function d(C, D) {
    m.value[C] = D, I.datetimeFormats = m.value, Xa(I, C, D);
  }
  function h(C, D) {
    m.value[C] = $e(m.value[C] || {}, D), I.datetimeFormats = m.value, Xa(I, C, D);
  }
  function O(C) {
    return b.value[C] || {};
  }
  function x(C, D) {
    b.value[C] = D, I.numberFormats = b.value, Qa(I, C, D);
  }
  function q(C, D) {
    b.value[C] = $e(b.value[C] || {}, D), I.numberFormats = b.value, Qa(I, C, D);
  }
  nl++, n && ps && (bn(n.locale, (C) => {
    l && (u.value = C, I.locale = C, Xn(I, u.value, c.value));
  }), bn(n.fallbackLocale, (C) => {
    l && (c.value = C, I.fallbackLocale = C, Xn(I, u.value, c.value));
  }));
  const j = {
    id: nl,
    locale: H,
    fallbackLocale: Z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(C) {
      l = C, C && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Xn(I, u.value, c.value));
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
      return A;
    },
    set missingWarn(C) {
      A = C, I.missingWarn = A;
    },
    get fallbackWarn() {
      return T;
    },
    set fallbackWarn(C) {
      T = C, I.fallbackWarn = T;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(C) {
      w = C;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(C) {
      v = C, I.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(C) {
      P = C, I.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return R;
    },
    set escapeParameter(C) {
      R = C, I.escapeParameter = C;
    },
    t: me,
    getLocaleMessage: L,
    setLocaleMessage: M,
    mergeLocaleMessage: W,
    getPostTranslationHandler: B,
    setPostTranslationHandler: J,
    getMissingHandler: ve,
    setMissingHandler: Te,
    [Vu]: p
  };
  return j.datetimeFormats = ue, j.numberFormats = $, j.rt = Ne, j.te = g, j.tm = N, j.d = Ve, j.n = lt, j.getDateTimeFormat = V, j.setDateTimeFormat = d, j.mergeDateTimeFormat = h, j.getNumberFormat = O, j.setNumberFormat = x, j.mergeNumberFormat = q, j[ju] = r, j[Uo] = Ye, j[Ho] = ft, j[$o] = De, j;
}
function Tp(e) {
  const t = G(e.locale) ? e.locale : Vn, n = G(e.fallbackLocale) || Se(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ee(e.missing) ? e.missing : void 0, o = ie(e.silentTranslationWarn) || tn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ie(e.silentFallbackWarn) || tn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ie(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = te(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Ee(e.postTranslation) ? e.postTranslation : void 0, f = G(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, b = ie(e.sync) ? e.sync : !0;
  let A = e.messages;
  if (te(e.sharedMessages)) {
    const R = e.sharedMessages;
    A = Object.keys(R).reduce((F, I) => {
      const K = F[I] || (F[I] = {});
      return $e(K, R[I]), F;
    }, A || {});
  }
  const { __i18n: T, __root: w, __injectWithOption: v } = e, k = e.datetimeFormats, E = e.numberFormats, y = e.flatJson, P = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: A,
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
    __i18n: T,
    __root: w,
    __injectWithOption: v
  };
}
function jo(e = {}, t) {
  {
    const n = yi(Tp(e)), { __extender: r } = e, o = {
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
          throw xe(ke.INVALID_ARGUMENT);
        const m = i;
        return G(a) ? u.locale = a : Se(a) ? c = a : te(a) && (f = a), Se(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
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
          throw xe(ke.INVALID_ARGUMENT);
        const m = i;
        return G(a) ? u.locale = a : Re(a) ? u.plural = a : Se(a) ? c = a : te(a) && (f = a), G(l) ? u.locale = l : Se(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
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
const Ei = {
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
function Ap({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Me ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, _e());
}
function Ku(e) {
  return Me;
}
const wp = /* @__PURE__ */ An({
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
  }, Ei),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), i = _e();
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = G(e.plural) ? +e.plural : e.plural);
      const a = Ap(t, s), l = o[Uo](e.keypath, a, i), u = $e(_e(), r), c = G(e.tag) || de(e.tag) ? e.tag : Ku();
      return Un(c, u, l);
    };
  }
}), sl = wp;
function Op(e) {
  return Se(e) && !G(e[0]);
}
function qu(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let a = _e();
    e.locale && (i.locale = e.locale), G(e.format) ? i.key = e.format : de(e.format) && (G(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((m, b) => n.includes(b) ? $e(_e(), m, { [b]: e.format[b] }) : m, _e()));
    const l = r(e.value, i, a);
    let u = [i.key];
    Se(l) ? u = l.map((m, b) => {
      const A = o[m.type], T = A ? A({ [m.type]: m.value, index: b, parts: l }) : [m.value];
      return Op(T) && (T[0].key = `${m.type}-${b}`), T;
    }) : G(l) && (u = [l]);
    const c = $e(_e(), s), f = G(e.tag) || de(e.tag) ? e.tag : Ku();
    return Un(f, c, u);
  };
}
const Lp = /* @__PURE__ */ An({
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
  }, Ei),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return qu(e, t, Hu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[$o](...r)
    ));
  }
}), ol = Lp, Cp = /* @__PURE__ */ An({
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
  }, Ei),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return qu(e, t, Uu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ho](...r)
    ));
  }
}), il = Cp;
function Rp(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Ip(e) {
  const t = (i) => {
    const { instance: a, modifiers: l, value: u } = i;
    if (!a || !a.$)
      throw xe(ke.UNEXPECTED_ERROR);
    const c = Rp(e, a.$), f = al(u);
    return [
      Reflect.apply(c.t, c, [...ll(f)]),
      c
    ];
  };
  return {
    created: (i, a) => {
      const [l, u] = t(a);
      ps && e.global === u && (i.__i18nWatcher = bn(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = l;
    },
    unmounted: (i) => {
      ps && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer, u = al(a);
        i.textContent = Reflect.apply(l.t, l, [
          ...ll(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    }
  };
}
function al(e) {
  if (G(e))
    return { path: e };
  if (te(e)) {
    if (!("path" in e))
      throw xe(ke.REQUIRED_VALUE, "path");
    return e;
  } else
    throw xe(ke.INVALID_VALUE);
}
function ll(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, i = {}, a = r || {};
  return G(n) && (i.locale = n), Re(o) && (i.plural = o), Re(s) && (i.plural = s), [t, a, i];
}
function Pp(e, t, ...n) {
  const r = te(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (ie(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : sl.name, "I18nT"].forEach((i) => e.component(i, sl)), [ol.name, "I18nN"].forEach((i) => e.component(i, ol)), [il.name, "I18nD"].forEach((i) => e.component(i, il))), e.directive("t", Ip(t));
}
function Np(e, t, n) {
  return {
    beforeCreate() {
      const r = Et();
      if (!r)
        throw xe(ke.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = cl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = jo(s);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = cl(e, o);
        else {
          this.$i18n = jo({
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
      o.__i18nGlobal && Bu(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, i) => this.$i18n.te(s, i), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = Et();
      if (!r)
        throw xe(ke.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function cl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Vu](t.pluralizationRules || e.pluralizationRules);
  const n = Bs(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const kp = /* @__PURE__ */ nn("global-vue-i18n");
function Mp(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ie(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ie(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [i, a] = xp(e, n), l = /* @__PURE__ */ nn("");
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
      async install(b, ...A) {
        if (b.__VUE_I18N_SYMBOL__ = l, b.provide(b.__VUE_I18N_SYMBOL__, m), te(A[0])) {
          const v = A[0];
          m.__composerExtend = v.__composerExtend, m.__vueI18nExtend = v.__vueI18nExtend;
        }
        let T = null;
        !n && r && (T = Bp(b, m.global)), __VUE_I18N_FULL_INSTALL__ && Pp(b, m, ...A), __VUE_I18N_LEGACY_API__ && n && b.mixin(Np(a, a.__composer, m));
        const w = b.unmount;
        b.unmount = () => {
          T && T(), m.dispose(), w();
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
function vi(e = {}) {
  const t = Et();
  if (t == null)
    throw xe(ke.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw xe(ke.NOT_INSTALLED);
  const n = Dp(t), r = Up(n), o = Wu(t), s = Fp(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw xe(ke.NOT_AVAILABLE_IN_LEGACY_MODE);
    return jp(t, s, r, e);
  }
  if (s === "global")
    return Bu(r, e, o), r;
  if (s === "parent") {
    let l = Hp(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = $e({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), a = yi(l), i.__composerExtend && (a[Vo] = i.__composerExtend(a)), Vp(i, t, a), i.__setInstance(t, a);
  }
  return a;
}
function xp(e, t, n) {
  const r = Jo();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => jo(e)) : r.run(() => yi(e));
    if (o == null)
      throw xe(ke.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Dp(e) {
  {
    const t = _t(e.isCE ? kp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw xe(e.isCE ? ke.NOT_INSTALLED_WITH_PROVIDE : ke.UNEXPECTED_ERROR);
    return t;
  }
}
function Fp(e, t) {
  return Vs(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Up(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Hp(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = $p(t, n);
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(s);
      a != null && (r = a.__composer, n && r && !r[ju] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function $p(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Vp(e, t, n) {
  ai(() => {
  }, t), li(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Vo];
    o && (o(), delete r[Vo]);
  }, t);
}
function jp(e, t, n, r = {}) {
  const o = t === "local", s = si(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw xe(ke.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ie(r.inheritLocale) ? r.inheritLocale : !G(r.locale), a = le(
    // prettier-ignore
    !o || i ? n.locale.value : G(r.locale) ? r.locale : Vn
  ), l = le(
    // prettier-ignore
    !o || i ? n.fallbackLocale.value : G(r.fallbackLocale) || Se(r.fallbackLocale) || te(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value
  ), u = le(Bs(a.value, r)), c = le(te(r.datetimeFormats) ? r.datetimeFormats : { [a.value]: {} }), f = le(te(r.numberFormats) ? r.numberFormats : { [a.value]: {} }), m = o ? n.missingWarn : ie(r.missingWarn) || tn(r.missingWarn) ? r.missingWarn : !0, b = o ? n.fallbackWarn : ie(r.fallbackWarn) || tn(r.fallbackWarn) ? r.fallbackWarn : !0, A = o ? n.fallbackRoot : ie(r.fallbackRoot) ? r.fallbackRoot : !0, T = !!r.fallbackFormat, w = Ee(r.missing) ? r.missing : null, v = Ee(r.postTranslation) ? r.postTranslation : null, k = o ? n.warnHtmlMessage : ie(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, y = o ? n.modifiers : te(r.modifiers) ? r.modifiers : {}, P = r.pluralRules || o && n.pluralRules;
  function R() {
    return [
      a.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const U = be({
    get: () => s.value ? s.value.locale.value : a.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), a.value = _;
    }
  }), F = be({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), I = be(() => s.value ? s.value.messages.value : u.value), K = be(() => c.value), Y = be(() => f.value);
  function H() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function Z(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function se() {
    return s.value ? s.value.getMissingHandler() : w;
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
  function ve(..._) {
    return s.value ? $(() => Reflect.apply(s.value.d, null, [..._])) : $(() => "");
  }
  function Te(..._) {
    return s.value ? $(() => Reflect.apply(s.value.n, null, [..._])) : $(() => "");
  }
  function re(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function me(_, N) {
    return s.value ? s.value.te(_, N) : !1;
  }
  function Ne(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function Ve(_, N) {
    s.value && (s.value.setLocaleMessage(_, N), u.value[_] = N);
  }
  function lt(_, N) {
    s.value && s.value.mergeLocaleMessage(_, N);
  }
  function oe(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function Ae(_, N) {
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
  function ft(_, N) {
    s.value && s.value.mergeNumberFormat(_, N);
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
      return s.value ? s.value.fallbackRoot : A;
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
    t: B,
    getPostTranslationHandler: H,
    setPostTranslationHandler: Z,
    getMissingHandler: se,
    setMissingHandler: ue,
    rt: J,
    d: ve,
    n: Te,
    tm: re,
    te: me,
    getLocaleMessage: Ne,
    setLocaleMessage: Ve,
    mergeLocaleMessage: lt,
    getDateTimeFormat: oe,
    setDateTimeFormat: Ae,
    mergeDateTimeFormat: je,
    getNumberFormat: Ye,
    setNumberFormat: De,
    mergeNumberFormat: ft
  };
  function g(_) {
    _.locale.value = a.value, _.fallbackLocale.value = l.value, Object.keys(u.value).forEach((N) => {
      _.mergeLocaleMessage(N, u.value[N]);
    }), Object.keys(c.value).forEach((N) => {
      _.mergeDateTimeFormat(N, c.value[N]);
    }), Object.keys(f.value).forEach((N) => {
      _.mergeNumberFormat(N, f.value[N]);
    }), _.escapeParameter = E, _.fallbackFormat = T, _.fallbackRoot = A, _.fallbackWarn = b, _.missingWarn = m, _.warnHtmlMessage = k;
  }
  return Cc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw xe(ke.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = _.locale.value, l.value = _.fallbackLocale.value, u.value = _.messages.value, c.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : o && g(_);
  }), p;
}
const Wp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], ul = ["t", "rt", "d", "n", "tm", "te"];
function Bp(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Wp.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw xe(ke.UNEXPECTED_ERROR);
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
  }), e.config.globalProperties.$i18n = n, ul.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw xe(ke.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, ul.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
yp();
tp(hp);
np(x0);
rp(Iu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = pn();
  e.__INTLIFY__ = !0, B0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Kp = "sub2api_locale", Si = "en", qp = {
  en: () => import("./index-4Jkzw5bs.js"),
  zh: () => import("./index-B9oV2R7j.js")
};
function zu(e) {
  return e === "en" || e === "zh";
}
function zp() {
  const e = localStorage.getItem(Kp);
  return e && zu(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Si;
}
const Dn = Mp({
  legacy: !1,
  locale: zp(),
  fallbackLocale: Si,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), fl = /* @__PURE__ */ new Set();
async function Gu(e) {
  if (fl.has(e))
    return;
  const t = qp[e], n = await t();
  Dn.global.setLocaleMessage(e, n.default), fl.add(e);
}
async function Gp() {
  const e = Yu();
  await Gu(e), document.documentElement.setAttribute("lang", e);
}
function Yu() {
  const e = Dn.global.locale.value;
  return zu(e) ? e : Si;
}
function Xu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Yp } = Object.prototype, { getPrototypeOf: jn } = Object, { iterator: Rr, toStringTag: Ju } = Symbol, gs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Tr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), gs(n, t))
      return !0;
    n = jn(n);
  }
  return !1;
}, Xp = (e, t) => e != null && Tr(e, t) ? e[t] : void 0, Ti = /* @__PURE__ */ ((e) => (t) => {
  const n = Yp.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), vt = (e) => (e = e.toLowerCase(), (t) => Ti(t) === e), Ks = (e) => (t) => typeof t === e, { isArray: Sn } = Array, Wn = Ks("undefined");
function Kn(e) {
  return e !== null && !Wn(e) && e.constructor !== null && !Wn(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qu = vt("ArrayBuffer");
function Jp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qu(e.buffer), t;
}
const Qp = Ks("string"), rt = Ks("function"), Zu = Ks("number"), qn = (e) => e !== null && typeof e == "object", Zp = (e) => e === !0 || e === !1, Qr = (e) => {
  if (!qn(e))
    return !1;
  const t = jn(e);
  return (t === null || t === Object.prototype || jn(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Tr(e, Ju) && !Tr(e, Rr);
}, e_ = (e) => {
  if (!qn(e) || Kn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, t_ = vt("Date"), n_ = vt("File"), r_ = (e) => !!(e && typeof e.uri < "u"), s_ = (e) => e && typeof e.getParts < "u", o_ = vt("Blob"), i_ = vt("FileList"), a_ = (e) => qn(e) && rt(e.pipe);
function l_() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const dl = l_(), hl = typeof dl.FormData < "u" ? dl.FormData : void 0, c_ = (e) => {
  if (!e) return !1;
  if (hl && e instanceof hl) return !0;
  const t = jn(e);
  if (!t || t === Object.prototype || !rt(e.append)) return !1;
  const n = Ti(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && rt(e.toString) && e.toString() === "[object FormData]";
}, u_ = vt("URLSearchParams"), [f_, d_, h_, m_] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(vt), p_ = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Sn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Kn(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function ef(e, t) {
  if (Kn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const _n = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tf = (e) => !Wn(e) && e !== _n;
function Wo(...e) {
  const { caseless: t, skipUndefined: n } = tf(this) && this || {}, r = {}, o = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && ef(r, i) || i, l = gs(r, a) ? r[a] : void 0;
    Qr(l) && Qr(s) ? r[a] = Wo(l, s) : Qr(s) ? r[a] = Wo({}, s) : Sn(s) ? r[a] = s.slice() : (!n || !Wn(s)) && (r[a] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const a = e[s];
    if (!a || Kn(a) || (Ir(a, o), typeof a != "object" || Sn(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      L_.call(a, c) && o(a[c], c);
    }
  }
  return r;
}
const __ = (e, t, n, { allOwnKeys: r } = {}) => (Ir(
  t,
  (o, s) => {
    n && rt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Xu(o, n),
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
), e), g_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), b_ = (e, t, n, r) => {
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
}, y_ = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && jn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, E_ = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, v_ = (e) => {
  if (!e) return null;
  if (Sn(e)) return e;
  let t = e.length;
  if (!Zu(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, S_ = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && jn(Uint8Array)), T_ = (e, t) => {
  const r = (e && e[Rr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, A_ = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, w_ = vt("HTMLFormElement"), O_ = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: L_ } = Object.prototype, C_ = vt("RegExp"), nf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ir(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, R_ = (e) => {
  nf(e, (t, n) => {
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
}, I_ = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Sn(e) ? r(e) : r(String(e).split(t)), n;
}, P_ = () => {
}, N_ = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function k_(e) {
  return !!(e && rt(e.append) && e[Ju] === "FormData" && e[Rr]);
}
const M_ = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (qn(r)) {
      if (t.has(r))
        return;
      if (Kn(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Sn(r) ? [] : {};
        return Ir(r, (s, i) => {
          const a = n(s);
          !Wn(a) && (o[i] = a);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, x_ = vt("AsyncFunction"), D_ = (e) => e && (qn(e) || rt(e)) && rt(e.then) && rt(e.catch), rf = ((e, t) => e ? setImmediate : t ? ((n, r) => (_n.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === _n && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), _n.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", rt(_n.postMessage)), F_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(_n) : typeof process < "u" && process.nextTick || rf, sf = (e) => e != null && rt(e[Rr]), U_ = (e) => e != null && Tr(e, Rr) && sf(e), S = {
  isArray: Sn,
  isArrayBuffer: Qu,
  isBuffer: Kn,
  isFormData: c_,
  isArrayBufferView: Jp,
  isString: Qp,
  isNumber: Zu,
  isBoolean: Zp,
  isObject: qn,
  isPlainObject: Qr,
  isEmptyObject: e_,
  isReadableStream: f_,
  isRequest: d_,
  isResponse: h_,
  isHeaders: m_,
  isUndefined: Wn,
  isDate: t_,
  isFile: n_,
  isReactNativeBlob: r_,
  isReactNative: s_,
  isBlob: o_,
  isRegExp: C_,
  isFunction: rt,
  isStream: a_,
  isURLSearchParams: u_,
  isTypedArray: S_,
  isFileList: i_,
  forEach: Ir,
  merge: Wo,
  extend: __,
  trim: p_,
  stripBOM: g_,
  inherits: b_,
  toFlatObject: y_,
  kindOf: Ti,
  kindOfTest: vt,
  endsWith: E_,
  toArray: v_,
  forEachEntry: T_,
  matchAll: A_,
  isHTMLForm: w_,
  hasOwnProperty: gs,
  hasOwnProp: gs,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Tr,
  getSafeProp: Xp,
  reduceDescriptors: nf,
  freezeMethods: R_,
  toObjectSet: I_,
  toCamelCase: O_,
  noop: P_,
  toFiniteNumber: N_,
  findKey: ef,
  global: _n,
  isContextDefined: tf,
  isSpecCompliantForm: k_,
  toJSONObject: M_,
  isAsyncFn: x_,
  isThenable: D_,
  setImmediate: rf,
  asap: F_,
  isIterable: sf,
  isSafeIterable: U_
}, H_ = S.toObjectSet([
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
]), $_ = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && H_[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function V_(e) {
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
const j_ = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), W_ = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ai(e, t) {
  return S.isArray(e) ? e.map((n) => Ai(n, t)) : V_(String(e).replace(t, ""));
}
const B_ = (e) => Ai(e, j_), K_ = (e) => Ai(e, W_);
function of(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return S.forEach(e.toJSON(), (n, r) => {
    t[r] = K_(n);
  }), t;
}
const ml = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Zr(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Zr) : B_(String(e));
}
function q_(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const z_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _o(e, t, n, r, o) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function G_(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Y_(e, t) {
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
      const c = Jn(l);
      if (!c)
        return;
      const f = S.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = Zr(a));
    }
    const i = (a, l) => S.forEach(a, (u, c) => s(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !z_(t))
      i($_(t), n);
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
    if (t = Jn(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return q_(o);
        if (S.isFunction(n))
          return n.call(this, o, r);
        if (S.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jn(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _o(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Jn(i), i) {
        const a = S.findKey(r, i);
        a && (!n || _o(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return S.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || _o(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (o, s) => {
      const i = S.findKey(r, s);
      if (i) {
        n[i] = Zr(o), delete n[s];
        return;
      }
      const a = t ? G_(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Zr(o), r[a] = !0;
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
    const r = (this[ml] = this[ml] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Jn(i);
      r[a] || (Y_(o, i), r[a] = !0);
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
const X_ = "[REDACTED ****]";
function J_(e) {
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
function Q_(e, t) {
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
      if (!S.isPlainObject(s) && J_(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(s)) {
        const u = n.has(a.toLowerCase()) ? X_ : o(l);
        S.isUndefined(u) || (i[a] = u);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
let z = class af extends Error {
  static from(t, n, r, o, s, i) {
    const a = new af(t.message, n || t.code, r, o, s);
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
    const t = this.config, n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0, r = S.isArray(n) && n.length > 0 ? Q_(t, n) : S.toJSONObject(t);
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
const Z_ = null, lf = 100;
function Bo(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function cf(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function go(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = cf(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function e1(e) {
  return S.isArray(e) && !e.some(Bo);
}
const t1 = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qs(e, t, n) {
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
  const r = n.metaTokens, o = n.visitor || A, s = n.dots, i = n.indexes, a = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? lf : n.maxDepth, u = a && S.isSpecCompliantForm(t), c = [];
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
  function b(v, k) {
    if (l === 1 / 0)
      return JSON.stringify(v);
    const E = [];
    return JSON.stringify(v, function(P, R) {
      if (!S.isObject(R))
        return R;
      for (; E.length && E[E.length - 1] !== this; )
        E.pop();
      return E.push(R), m(k + E.length - 1), R;
    });
  }
  function A(v, k, E) {
    let y = v;
    if (S.isReactNative(t) && S.isReactNativeBlob(v))
      return t.append(go(E, k, s), f(v)), !1;
    if (v && !E && typeof v == "object") {
      if (S.endsWith(k, "{}"))
        k = r ? k : k.slice(0, -2), v = b(v, 1);
      else if (S.isArray(v) && e1(v) || (S.isFileList(v) || S.endsWith(k, "[]")) && (y = S.toArray(v)))
        return k = cf(k), y.forEach(function(R, U) {
          !(S.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? go([k], U, s) : i === null ? k : k + "[]",
            f(R)
          );
        }), !1;
    }
    return Bo(v) ? !0 : (t.append(go(E, k, s), f(v)), !1);
  }
  const T = Object.assign(t1, {
    defaultVisitor: A,
    convertValue: f,
    isVisitable: Bo
  });
  function w(v, k, E = 0) {
    if (!S.isUndefined(v)) {
      if (m(E), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + k.join("."));
      c.push(v), S.forEach(v, function(P, R) {
        (!(S.isUndefined(P) || P === null) && o.call(t, P, S.isString(R) ? R.trim() : R, k, T)) === !0 && w(P, k ? k.concat(R) : [R], E + 1);
      }), c.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function pl(e) {
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
function wi(e, t) {
  this._pairs = [], e && qs(e, this, t);
}
const uf = wi.prototype;
uf.append = function(t, n) {
  this._pairs.push([t, n]);
};
uf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, pl) : pl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function n1(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ff(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = S.isFunction(n) ? {
    serialize: n
  } : n, o = S.getSafeProp(r, "encode") || n1, s = S.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = S.isURLSearchParams(t) ? t.toString() : new wi(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class _l {
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
const Oi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, r1 = typeof URLSearchParams < "u" ? URLSearchParams : wi, s1 = typeof FormData < "u" ? FormData : null, o1 = typeof Blob < "u" ? Blob : null, i1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: r1,
    FormData: s1,
    Blob: o1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Li = typeof window < "u" && typeof document < "u", Ko = typeof navigator == "object" && navigator || void 0, a1 = Li && (!Ko || ["ReactNative", "NativeScript", "NS"].indexOf(Ko.product) < 0), l1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", c1 = Li && window.location.href || "http://localhost", u1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Li,
  hasStandardBrowserEnv: a1,
  hasStandardBrowserWebWorkerEnv: l1,
  navigator: Ko,
  origin: c1
}, Symbol.toStringTag, { value: "Module" })), Ue = {
  ...u1,
  ...i1
};
function f1(e, t) {
  return qs(e, new Ue.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return Ue.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const gl = lf;
function df(e) {
  if (e > gl)
    throw new z(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + gl,
      z.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function d1(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    df(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function h1(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function hf(e) {
  function t(n, r, o, s) {
    df(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && S.isArray(o) ? o.length : i, l ? (S.hasOwnProp(o, i) ? o[i] = S.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !a) : ((!S.hasOwnProp(o, i) || !S.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && S.isArray(o[i]) && (o[i] = h1(o[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, o) => {
      t(d1(r), o, n, 0);
    }), n;
  }
  return null;
}
const Ln = (e, t) => e != null && S.hasOwnProp(e, t) ? e[t] : void 0;
function m1(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Pr = {
  transitional: Oi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = S.isObject(t);
      if (s && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
        return o ? JSON.stringify(hf(t)) : t;
      if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
        return t;
      if (S.isArrayBufferView(t))
        return t.buffer;
      if (S.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        const l = Ln(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return f1(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Ln(this, "env"), c = u && u.FormData;
          return qs(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), m1(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Ln(this, "transitional") || Pr.transitional, r = n && n.forcedJSONParsing, o = Ln(this, "responseType"), s = o === "json";
      if (S.isResponse(t) || S.isReadableStream(t))
        return t;
      if (t && S.isString(t) && (r && !o || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Ln(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? z.from(l, z.ERR_BAD_RESPONSE, this, null, Ln(this, "response")) : l;
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
  Pr.headers[e] = {};
});
function bo(e, t) {
  const n = this || Pr, r = t || n, o = Ge.from(r.headers);
  let s = r.data;
  return S.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function mf(e) {
  return !!(e && e.__CANCEL__);
}
let Nr = class extends z {
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
function pf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new z(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? z.ERR_BAD_REQUEST : z.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function p1(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function _1(e, t) {
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
function g1(e, t) {
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
const bs = (e, t, n = 3) => {
  let r = 0;
  const o = _1(50, 250);
  return g1((s) => {
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
}, bl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, yl = (e) => (...t) => S.asap(() => e(...t)), b1 = Ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ue.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ue.origin),
  Ue.navigator && /(msie|trident)/i.test(Ue.navigator.userAgent)
) : () => !0, y1 = Ue.hasStandardBrowserEnv ? (
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
function E1(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function v1(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const S1 = /^https?:(?!\/\/)/i, T1 = /[\t\n\r]/g;
function A1(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function w1(e) {
  return A1(e).replace(T1, "");
}
function El(e, t) {
  if (typeof e == "string" && S1.test(w1(e)))
    throw new z(
      'Invalid URL: missing "//" after protocol',
      z.ERR_INVALID_URL,
      t
    );
}
function _f(e, t, n, r) {
  El(t, r);
  let o = !E1(t);
  return e && (o || n === !1) ? (El(e, r), v1(e, t)) : t;
}
const vl = (e) => e instanceof Ge ? { ...e } : e;
function Tn(e, t) {
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
    headers: (c, f, m) => o(vl(c), vl(f), m, !0)
  };
  return S.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = S.hasOwnProp(u, f) ? u[f] : o, b = S.hasOwnProp(e, f) ? e[f] : void 0, A = S.hasOwnProp(t, f) ? t[f] : void 0, T = m(b, A, f);
    S.isUndefined(T) && m !== l || (n[f] = T);
  }), S.hasOwnProp(t, "validateStatus") && S.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const O1 = ["content-type", "content-length"];
function L1(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    O1.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const C1 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function gf(e) {
  const t = Tn({}, e), n = (m) => S.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = a = Ge.from(a), t.url = ff(
    _f(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = S.getSafeProp(l, "username") || "", b = S.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (b ? C1(b) : ""))
      );
    } catch (A) {
      throw z.from(A, z.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (S.isFormData(r) && (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv || S.isReactNative(r) ? a.setContentType(void 0) : S.isFunction(r.getHeaders) && L1(a, r.getHeaders(), n("formDataHeaderPolicy"))), Ue.hasStandardBrowserEnv && (S.isFunction(o) && (o = o(t)), o === !0 || o == null && b1(t.url))) {
    const b = s && i && y1.read(i);
    b && a.set(s, b);
  }
  return t;
}
const R1 = typeof XMLHttpRequest < "u", I1 = R1 && function(e) {
  return new Promise(function(n, r) {
    const o = gf(e);
    let s = o.data;
    const i = Ge.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, c, f, m, b, A;
    function T() {
      b && b(), A && A(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
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
      pf(
        function(U) {
          n(U), T();
        },
        function(U) {
          r(U), T();
        },
        P
      ), w = null;
    }
    "onloadend" in w ? w.onloadend = v : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.startsWith("file:")) || setTimeout(v);
    }, w.onabort = function() {
      w && (r(new z("Request aborted", z.ECONNABORTED, e, w)), T(), w = null);
    }, w.onerror = function(y) {
      const P = y && y.message ? y.message : "Network Error", R = new z(P, z.ERR_NETWORK, e, w);
      R.event = y || null, r(R), T(), w = null;
    }, w.ontimeout = function() {
      let y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Oi;
      o.timeoutErrorMessage && (y = o.timeoutErrorMessage), r(
        new z(
          y,
          P.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
          e,
          w
        )
      ), T(), w = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in w && S.forEach(of(i), function(y, P) {
      w.setRequestHeader(P, y);
    }), S.isUndefined(o.withCredentials) || (w.withCredentials = !!o.withCredentials), a && a !== "json" && (w.responseType = o.responseType), u && ([m, A] = bs(u, !0), w.addEventListener("progress", m)), l && w.upload && ([f, b] = bs(l), w.upload.addEventListener("progress", f), w.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (E) => {
      w && (r(!E || E.type ? new Nr(null, e, w) : E), w.abort(), T(), w = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const k = p1(o.url);
    if (k && !Ue.protocols.includes(k)) {
      r(
        new z(
          "Unsupported protocol " + k + ":",
          z.ERR_BAD_REQUEST,
          e
        )
      ), T();
      return;
    }
    w.send(s || null);
  });
}, P1 = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof z ? u : new Nr(u instanceof Error ? u.message : u)
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
}, N1 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, k1 = async function* (e, t) {
  for await (const n of M1(e))
    yield* N1(n, t);
}, M1 = async function* (e) {
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
}, Sl = (e, t, n, r) => {
  const o = k1(e, t);
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
}, ys = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, x1 = (e, t, n) => t + 2 < n && ys(e.charCodeAt(t + 1)) && ys(e.charCodeAt(t + 2));
function D1(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const a = r.length;
    for (let b = 0; b < a; b++)
      if (r.charCodeAt(b) === 37 && b + 2 < a) {
        const A = r.charCodeAt(b + 1), T = r.charCodeAt(b + 2);
        ys(A) && ys(T) && (i -= 2, b += 2);
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
    if (l === 37 && x1(r, i, a))
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
const Ci = "1.18.1", Tl = 64 * 1024, { isFunction: Vr } = S, F1 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Al = (e) => {
  if (!S.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, wl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, U1 = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, H1 = (e) => {
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
  const { fetch: o, Request: s, Response: i } = e, a = o ? Vr(o) : typeof fetch == "function", l = Vr(s), u = Vr(i);
  if (!a)
    return !1;
  const c = a && Vr(n), f = a && (typeof r == "function" ? /* @__PURE__ */ ((v) => (k) => v.encode(k))(new r()) : async (v) => new Uint8Array(await new s(v).arrayBuffer())), m = l && c && wl(() => {
    let v = !1;
    const k = new s(Ue.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), E = k.headers.has("Content-Type");
    return k.body != null && k.body.cancel(), v && !E;
  }), b = u && c && wl(() => S.isReadableStream(new i("").body)), A = {
    stream: b && ((v) => v.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !A[v] && (A[v] = (k, E) => {
      let y = k && k[v];
      if (y)
        return y.call(k);
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
  }, w = async (v, k) => {
    const E = S.toFiniteNumber(v.getContentLength());
    return E ?? T(k);
  };
  return async (v) => {
    let {
      url: k,
      method: E,
      data: y,
      signal: P,
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
    } = gf(v);
    const $ = S.isNumber(se) && se > -1, B = S.isNumber(ue) && ue > -1, J = (oe) => S.hasOwnProp(v, oe) ? v[oe] : void 0;
    let ve = o || fetch;
    K = K ? (K + "").toLowerCase() : "text";
    let Te = P1(
      [P, R && R.toAbortSignal()],
      U
    ), re = null;
    const me = Te && Te.unsubscribe && (() => {
      Te.unsubscribe();
    });
    let Ne, Ve = null;
    const lt = () => new z(
      "Request body larger than maxBodyLength limit",
      z.ERR_BAD_REQUEST,
      v,
      re
    );
    try {
      let oe;
      const Ae = J("auth");
      if (Ae) {
        const L = S.getSafeProp(Ae, "username") || "", M = S.getSafeProp(Ae, "password") || "";
        oe = {
          username: L,
          password: M
        };
      }
      if (U1(k)) {
        const L = new URL(k, Ue.origin);
        if (!oe && (L.username || L.password)) {
          const M = Al(L.username), W = Al(L.password);
          oe = {
            username: M,
            password: W
          };
        }
        (L.username || L.password) && (L.username = "", L.password = "", k = L.href);
      }
      if (oe && (Y.delete("authorization"), Y.set(
        "Authorization",
        "Basic " + btoa(F1((oe.username || "") + ":" + (oe.password || "")))
      )), $ && typeof k == "string" && k.startsWith("data:") && D1(k) > se)
        throw new z(
          "maxContentLength size of " + se + " exceeded",
          z.ERR_BAD_RESPONSE,
          v,
          re
        );
      if (B && E !== "get" && E !== "head") {
        const L = await T(y);
        if (typeof L == "number" && isFinite(L) && (Ne = L, L > ue))
          throw lt();
      }
      const je = B && (S.isReadableStream(y) || S.isStream(y)), Ye = (L, M, W) => Sl(
        L,
        Tl,
        (V) => {
          if (B && V > ue)
            throw Ve = lt();
          M && M(V);
        },
        W
      );
      if (m && E !== "get" && E !== "head" && (I || je)) {
        if (Ne = Ne ?? await w(Y, y), Ne !== 0 || je) {
          let L = new s(k, {
            method: "POST",
            body: y,
            duplex: "half"
          }), M;
          if (S.isFormData(y) && (M = L.headers.get("content-type")) && Y.setContentType(M), L.body) {
            const [W, V] = I && bl(
              Ne,
              bs(yl(I))
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
      Y.set("User-Agent", "axios/" + Ci, !1);
      const ft = {
        ...Z,
        signal: Te,
        method: E.toUpperCase(),
        headers: of(Y.normalize()),
        body: y,
        duplex: "half",
        credentials: De ? H : void 0
      };
      re = l && new s(k, ft);
      let p = await (l ? ve(re, Z) : ve(k, ft));
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
      if (b && p.body && (F || $ || _ && me)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((O) => {
          L[O] = p[O];
        });
        const M = S.toFiniteNumber(g.getContentLength()), [W, V] = F && bl(
          M,
          bs(yl(F), !0)
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
          Sl(p.body, Tl, h, () => {
            V && V(), me && me();
          }),
          L
        );
      }
      K = K || "text";
      let N = await A[S.findKey(A, K) || "text"](
        p,
        v
      );
      if ($ && !b && !_) {
        let L;
        if (N != null && (typeof N.byteLength == "number" ? L = N.byteLength : typeof N.size == "number" ? L = N.size : typeof N == "string" && (L = typeof r == "function" ? new r().encode(N).byteLength : N.length)), typeof L == "number" && L > se)
          throw new z(
            "maxContentLength size of " + se + " exceeded",
            z.ERR_BAD_RESPONSE,
            v,
            re
          );
      }
      return !_ && me && me(), await new Promise((L, M) => {
        pf(L, M, {
          data: N,
          headers: Ge.from(p.headers),
          status: p.status,
          statusText: p.statusText,
          config: v,
          request: re
        });
      });
    } catch (oe) {
      if (me && me(), Te && Te.aborted && Te.reason instanceof z) {
        const Ae = Te.reason;
        throw Ae.config = v, re && (Ae.request = re), oe !== Ae && Object.defineProperty(Ae, "cause", {
          __proto__: null,
          value: oe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Ae;
      }
      if (Ve)
        throw re && !Ve.request && (Ve.request = re), Ve;
      if (oe instanceof z)
        throw re && !oe.request && (oe.request = re), oe;
      if (oe && oe.name === "TypeError" && /Load failed|fetch/i.test(oe.message)) {
        const Ae = new z(
          "Network Error",
          z.ERR_NETWORK,
          v,
          re,
          oe && oe.response
        );
        throw Object.defineProperty(Ae, "cause", {
          __proto__: null,
          value: oe.cause || oe,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Ae;
      }
      throw z.from(oe, oe && oe.code, v, re, oe && oe.response);
    }
  };
}, $1 = /* @__PURE__ */ new Map(), bf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let i = s.length, a = i, l, u, c = $1;
  for (; a--; )
    l = s[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : H1(t)), c = u;
  return u;
};
bf();
const Ri = {
  http: Z_,
  xhr: I1,
  fetch: {
    get: bf
  }
};
S.forEach(Ri, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Ol = (e) => `- ${e}`, V1 = (e) => S.isFunction(e) || e === null || e === !1;
function j1(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !V1(r) && (o = Ri[(a = String(r)).toLowerCase()], o === void 0))
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
` + i.map(Ol).join(`
`) : " " + Ol(i[0]) : "as no adapter specified";
    throw new z(
      "There is no suitable adapter to dispatch the request " + a,
      z.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const yf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: j1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ri
};
function yo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Nr(null, e);
}
function Ll(e) {
  return yo(e), e.headers = Ge.from(e.headers), e.data = bo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yf.getAdapter(e.adapter || Pr.adapter, e)(e).then(
    function(r) {
      yo(e), e.response = r;
      try {
        r.data = bo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Ge.from(r.headers), r;
    },
    function(r) {
      if (!mf(r) && (yo(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = bo.call(
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
const zs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zs[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Cl = {};
zs.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Ci + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new z(
        o(i, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return n && !Cl[i] && (Cl[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
zs.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function W1(e, t, n) {
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
const es = {
  assertOptions: W1,
  validators: zs
}, We = es.validators;
let En = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new _l(),
      response: new _l()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Tn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && es.assertOptions(
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
    } : es.assertOptions(
      o,
      {
        encode: We.function,
        serialize: We.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), es.assertOptions(
      n,
      {
        baseUrl: We.spelling("baseURL"),
        withXsrfToken: We.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && S.merge(s.common, s[n.method]);
    s && S.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (A) => {
      delete s[A];
    }), n.headers = Ge.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(T) {
      if (typeof T.runWhen == "function" && T.runWhen(n) === !1)
        return;
      l = l && T.synchronous;
      const w = n.transitional || Oi;
      w && w.legacyInterceptorReqResOrdering ? a.unshift(T.fulfilled, T.rejected) : a.push(T.fulfilled, T.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(T) {
      u.push(T.fulfilled, T.rejected);
    });
    let c, f = 0, m;
    if (!l) {
      const A = [Ll.bind(this), void 0];
      for (A.unshift(...a), A.push(...u), m = A.length, c = Promise.resolve(n); f < m; )
        c = c.then(A[f++], A[f++]);
      return c;
    }
    m = a.length;
    let b = n;
    for (; f < m; ) {
      const A = a[f++], T = a[f++];
      try {
        b = A(b);
      } catch (w) {
        T.call(this, w);
        break;
      }
    }
    try {
      c = Ll.call(this, b);
    } catch (A) {
      return Promise.reject(A);
    }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const n = _f(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return ff(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  En.prototype[t] = function(n, r) {
    return this.request(
      Tn(r || {}, {
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
        Tn(a || {}, {
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
  En.prototype[t] = n(), t !== "query" && (En.prototype[t + "Form"] = n(!0));
});
let B1 = class Ef {
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
      r.reason || (r.reason = new Nr(s, i, a), n(r.reason));
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
      token: new Ef(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function K1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function q1(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const qo = {
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
Object.entries(qo).forEach(([e, t]) => {
  qo[t] = e;
});
function vf(e) {
  const t = new En(e), n = Xu(En.prototype.request, t);
  return S.extend(n, En.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return vf(Tn(e, o));
  }, n;
}
const Ce = vf(Pr);
Ce.Axios = En;
Ce.CanceledError = Nr;
Ce.CancelToken = B1;
Ce.isCancel = mf;
Ce.VERSION = Ci;
Ce.toFormData = qs;
Ce.AxiosError = z;
Ce.Cancel = Ce.CanceledError;
Ce.all = function(t) {
  return Promise.all(t);
};
Ce.spread = K1;
Ce.isAxiosError = q1;
Ce.mergeConfig = Tn;
Ce.AxiosHeaders = Ge;
Ce.formToJSON = (e) => hf(S.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = yf.getAdapter;
Ce.HttpStatusCode = qo;
Ce.default = Ce;
const {
  Axios: H2,
  AxiosError: $2,
  CanceledError: V2,
  isCancel: j2,
  CancelToken: W2,
  VERSION: B2,
  all: K2,
  Cancel: q2,
  isAxiosError: z2,
  spread: G2,
  toFormData: Y2,
  AxiosHeaders: X2,
  HttpStatusCode: J2,
  formToJSON: Q2,
  getAdapter: Z2,
  mergeConfig: e5,
  create: t5
} = Ce, z1 = "X-Admin-UI-Request", G1 = "X-User-UI-Request";
function Rl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Sf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function Y1(e) {
  const t = Sf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function X1(e) {
  const t = Y1(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function J1(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return Rl(Sf(e)) || Rl(n);
}
function Q1(e) {
  return X1(e);
}
const Il = "/api/v1", Z1 = eg();
function Tf(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function eg(e) {
  const n = (String(Il).trim() || Il).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Tf(n);
}
function Es() {
  return Z1;
}
function n5(e) {
  const t = Tf(e);
  try {
    return `${typeof window > "u" ? new URL(Es()).origin : new URL(Es(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Ii = "auth_token", tg = "auth_user", Gs = "refresh_token", Pi = "token_expires_at", ng = "sub2api-auth-token-refresh", Pl = 3e4, Af = 1e3, rg = 1e3, sg = 25;
let Qn = null;
function Ni() {
  const e = localStorage.getItem(tg);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function og() {
  const e = localStorage.getItem(Gs);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Ii),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Pi)),
    userID: Ni()
  };
}
function ig(e) {
  const t = localStorage.getItem(Ii), n = localStorage.getItem(Gs), r = Number(localStorage.getItem(Pi));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Ni() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function vs(e, t) {
  const n = ig(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function ag(e, t, n = Date.now() + Af) {
  for (; Date.now() < n; ) {
    const r = vs(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, sg));
  }
  return vs(e, t);
}
function lg(e) {
  localStorage.setItem(Ii, e.access_token), localStorage.setItem(Pi, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(Gs, e.refresh_token);
}
async function cg(e, t, n = !1) {
  var o;
  const r = Date.now() + Pl + rg;
  try {
    const i = (await Ce.post(
      `${Es()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Pl }
    )).data;
    if (i.code !== 0 || !i.data)
      throw new Error(i.message || "Token refresh failed");
    if (localStorage.getItem(Gs) !== e.refreshToken || Ni() !== e.userID) {
      const a = vs(e, t);
      if (a)
        return a;
      throw new Error("Session changed during token refresh");
    }
    return lg(i.data), i.data;
  } catch (s) {
    const i = (o = s.response) == null ? void 0 : o.status, a = typeof i == "number" && i >= 400 && i < 500, l = await ag(
      e,
      t,
      a && n ? r : Date.now() + Af
    );
    if (l)
      return l;
    throw s;
  }
}
async function ug(e) {
  const t = og(), n = async (r = !1) => {
    const o = vs(t, e.failedAccessToken);
    return o || cg(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(ng, () => n(!1)) : n(!0);
}
function wf(e = {}) {
  if (Qn)
    return Qn;
  const t = ug(e);
  Qn = t;
  const n = () => {
    Qn === t && (Qn = null);
  };
  return t.then(n, n), t;
}
const he = Ce.create({
  baseURL: Es(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), fg = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
he.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = Yu()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = fg()), e.headers) {
      const n = String(e.url || "");
      J1(n) && (e.headers[z1] = "1"), Q1(n) && (e.headers[G1] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
he.interceptors.response.use(
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
          const A = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const T = t.headers, w = (T == null ? void 0 : T.Authorization) ?? (T == null ? void 0 : T.authorization), v = typeof w == "string" && w.startsWith("Bearer ") ? w.slice(7) : null, k = await wf({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${k.access_token}`), he(t);
          } catch {
            return localStorage.getItem("refresh_token") !== l || localStorage.getItem("auth_user") !== A ? Promise.reject({
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
async function dg() {
  const { data: e } = await he.get("/admin/system/version");
  return e;
}
async function Of(e = !1) {
  const { data: t } = await he.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
async function hg() {
  const { data: e } = await he.get(
    "/admin/system/rollback-versions"
  );
  return e;
}
const Lf = 900 * 1e3;
async function mg() {
  const { data: e } = await he.post("/admin/system/update", void 0, {
    timeout: Lf
  });
  return e;
}
async function pg(e) {
  const { data: t } = await he.post(
    "/admin/system/rollback",
    e ? { version: e } : void 0,
    { timeout: Lf }
  );
  return t;
}
async function _g() {
  const { data: e } = await he.post("/admin/system/restart");
  return e;
}
const r5 = {
  getVersion: dg,
  checkUpdates: Of,
  performUpdate: mg,
  getRollbackVersions: hg,
  rollback: pg,
  restartService: _g
};
function ki(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function Ys(e) {
  localStorage.setItem("auth_token", e);
}
function Xs(e) {
  localStorage.setItem("refresh_token", e);
}
function Js(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function Cf() {
  return localStorage.getItem("auth_token");
}
function Rf() {
  return localStorage.getItem("refresh_token");
}
function gg() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function If() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function bg(e) {
  const { data: t } = await he.post("/auth/login", e);
  return ki(t) || (Ys(t.access_token), t.refresh_token && Xs(t.refresh_token), t.expires_in && Js(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function yg(e) {
  const { data: t } = await he.post("/auth/login/2fa", e);
  return Ys(t.access_token), t.refresh_token && Xs(t.refresh_token), t.expires_in && Js(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function Eg(e) {
  const { data: t } = await he.post("/auth/register", e);
  return Ys(t.access_token), t.refresh_token && Xs(t.refresh_token), t.expires_in && Js(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function vg() {
  return he.get("/auth/me");
}
async function Sg() {
  const e = Rf();
  if (e)
    try {
      await he.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  If();
}
function Pf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function Tg(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function Ag(e) {
  return Tg(e) ? "login" : "bind";
}
function wg(e) {
  return Ag(e);
}
function Og(e) {
  return e.error === "invitation_required";
}
function Lg(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function Cg() {
  return wf();
}
async function Rg() {
  const { data: e } = await he.post("/auth/revoke-all-sessions");
  return e;
}
function Ig() {
  return Cf() !== null;
}
async function Nf() {
  const { data: e } = await he.get("/settings/public");
  return e;
}
async function Pg(e) {
  const { data: t } = await he.post("/auth/send-verify-code", e);
  return t;
}
async function Ng(e) {
  const { data: t } = await he.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function kg(e) {
  const { data: t } = await he.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function Mg(e) {
  const { data: t } = await he.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function xg(e) {
  const { data: t } = await he.post("/auth/forgot-password", e);
  return t;
}
async function Dg(e) {
  const { data: t } = await he.post("/auth/reset-password", e);
  return t;
}
async function Fg(e, t, n) {
  return kf(e, t, n);
}
async function Ug(e, t, n) {
  return Mf(e, t, n);
}
async function Hg(e, t, n) {
  return xf(e, t, n);
}
async function Qs(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await he.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...Pf(n)
    }
  );
  return s;
}
async function kf(e, t, n) {
  return Qs("linuxdo", e, t, n);
}
async function Mf(e, t, n) {
  return Qs("oidc", e, t, n);
}
async function xf(e, t, n) {
  return Qs("wechat", e, t, n);
}
async function $g(e, t, n) {
  return Qs("dingtalk", e, t, n);
}
async function Df(e) {
  const { data: t } = await he.post(
    "/auth/oauth/pending/exchange",
    Pf(e)
  );
  return t;
}
async function Vg(e) {
  return Df(e);
}
const Cn = {
  login: bg,
  login2FA: yg,
  isTotp2FARequired: ki,
  register: Eg,
  getCurrentUser: vg,
  logout: Sg,
  isAuthenticated: Ig,
  setAuthToken: Ys,
  setRefreshToken: Xs,
  setTokenExpiresAt: Js,
  getAuthToken: Cf,
  getRefreshToken: Rf,
  getTokenExpiresAt: gg,
  clearAuthToken: If,
  getPublicSettings: Nf,
  sendVerifyCode: Pg,
  sendPendingOAuthVerifyCode: Ng,
  validatePromoCode: kg,
  validateInvitationCode: Mg,
  forgotPassword: xg,
  resetPassword: Dg,
  refreshToken: Cg,
  revokeAllSessions: Rg,
  getPendingOAuthBindLoginKind: wg,
  isPendingOAuthCreateAccountRequired: Og,
  hasPendingOAuthSuggestedProfile: Lg,
  completePendingOAuthBindLogin: Df,
  createPendingLinuxDoOAuthAccount: kf,
  createPendingOIDCOAuthAccount: Mf,
  createPendingWeChatOAuthAccount: xf,
  exchangePendingOAuthCompletion: Vg,
  completeLinuxDoOAuthRegistration: Fg,
  completeOIDCOAuthRegistration: Ug,
  completeWeChatOAuthRegistration: Hg,
  createPendingDingTalkOAuthAccount: $g
}, Nl = "零一 API", Ff = /* @__PURE__ */ mu("app", () => {
  const e = le(!1), t = le(!1), n = le(0), r = le(!1), o = le([]), s = le(!1), i = le(!1), a = le(Nl), l = le(""), u = le(""), c = le(""), f = le(""), m = le(""), b = le(null);
  let A = null, T = null, w = 0;
  const v = le(!1), k = le(!1), E = le(""), y = le(""), P = le(!1), R = le("source"), U = le(null);
  let F = 0;
  const I = be(() => o.value.length > 0), K = be(() => {
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
  function B(g, _, N) {
    const L = `toast-${++F}`, M = {
      id: L,
      type: g,
      message: _,
      duration: N,
      startTime: N !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), N !== void 0 && setTimeout(() => {
      me(L);
    }, N), L;
  }
  function J(g, _ = 3e3) {
    return B("success", g, _);
  }
  function ve(g, _ = 5e3) {
    return B("error", g, _);
  }
  function Te(g, _ = 3e3) {
    return B("info", g, _);
  }
  function re(g, _ = 4e3) {
    return B("warning", g, _);
  }
  function me(g) {
    const _ = o.value.findIndex((N) => N.id === g);
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
  async function lt(g, _) {
    $(!0);
    try {
      return await g();
    } catch (N) {
      const L = _ || N.message || Dn.global.t("common.unknownError");
      return ve(L), null;
    } finally {
      $(!1);
    }
  }
  function oe() {
    e.value = !1, r.value = !1, Y.value = 0, o.value = [];
  }
  async function Ae(g = !1) {
    if (v.value && !g)
      return {
        current_version: E.value,
        latest_version: y.value,
        has_update: P.value,
        build_type: R.value,
        release_info: U.value || void 0,
        cached: !0
      };
    if (k.value)
      return null;
    k.value = !0;
    try {
      const _ = await Of(g);
      return E.value = _.current_version, y.value = _.latest_version, P.value = _.has_update, R.value = _.build_type || "source", U.value = _.release_info || null, v.value = !0, _;
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
    typeof window < "u" && (window.__APP_CONFIG__ = { ...g }), b.value = g, a.value = g.site_name || Nl, l.value = g.site_logo || "", u.value = g.version || "", c.value = g.contact_info || "", f.value = g.api_base_url || "", m.value = g.doc_url || "", s.value = !0;
  }
  function De(g = !1) {
    if (A)
      return g && !T && (w += 1, T = A.then(() => De(!0)).finally(() => {
        T = null;
      })), g ? T : A;
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
      N = Nf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), i.value = !1, Promise.resolve(null);
    }
    const L = N.then((M) => (_ === w && Ye(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      A === L && (A = null, i.value = !1);
    });
    return A = L, L;
  }
  function ft() {
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
    showError: ve,
    showInfo: Te,
    showWarning: re,
    hideToast: me,
    clearAllToasts: Ne,
    withLoading: Ve,
    withLoadingAndError: lt,
    reset: oe,
    // Version actions
    fetchVersion: Ae,
    clearVersionCache: je,
    // Public settings actions
    fetchPublicSettings: De,
    clearPublicSettingsCache: ft,
    initFromInjectedConfig: p
  };
}), jg = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Wg = { class: "p-4" }, Bg = { class: "flex items-start gap-3" }, Kg = { class: "mt-0.5 flex-shrink-0" }, qg = { class: "min-w-0 flex-1" }, zg = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, Gg = ["onClick"], Yg = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, Xg = /* @__PURE__ */ An({
  __name: "Toast",
  setup(e) {
    const t = Ff(), n = be(() => t.toasts), r = (l) => {
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
    return (l, u) => (Ft(), cs(Ud, { to: "body" }, [
      ht("div", jg, [
        Ie(sm, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: pc(() => [
            (Ft(!0), er(Me, null, Yd(n.value, (c) => (Ft(), er("div", {
              key: c.id,
              class: Zt([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              ht("div", Wg, [
                ht("div", Bg, [
                  ht("div", Kg, [
                    Ie(Ia, {
                      name: r(c.type),
                      size: "md",
                      class: Zt(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  ht("div", qg, [
                    c.title ? (Ft(), er("p", zg, Eo(c.title), 1)) : ea("", !0),
                    ht("p", {
                      class: Zt([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, Eo(c.message), 3)
                  ]),
                  ht("button", {
                    onClick: (f) => a(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    Ie(Ia, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, Gg)
                ])
              ]),
              c.duration ? (Ft(), er("div", Yg, [
                ht("div", {
                  class: Zt(["h-full toast-progress", i(c.type)]),
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
}), Jg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Qg = /* @__PURE__ */ Jg(Xg, [["__scopeId", "data-v-fc5fa96e"]]);
function Uf() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function ur(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function Qt(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function Zg(e) {
  const t = { ...e };
  t.challenge = ur(String(t.challenge));
  const n = { ...t.user };
  return n.id = ur(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: ur(String(r.id))
  }))), t;
}
function e2(e) {
  const t = { ...e };
  return t.challenge = ur(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: ur(String(n.id))
  }))), t;
}
function t2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: Qt(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: Qt(t.attestationObject),
      clientDataJSON: Qt(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function n2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: Qt(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: Qt(t.authenticatorData),
      clientDataJSON: Qt(t.clientDataJSON),
      signature: Qt(t.signature),
      userHandle: Qt(t.userHandle)
    }
  };
}
async function r2(e) {
  Uf();
  const { data: t } = e ? await he.post("/auth/passkey/login/begin", e) : await he.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: e2(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await he.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: n2(n)
  });
  return r;
}
async function s2(e, t) {
  Uf();
  const { data: n } = await he.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: Zg(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await he.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: t2(r)
    }
  );
  return o;
}
async function o2() {
  const { data: e } = await he.get("/user/passkeys");
  return e;
}
async function i2(e, t) {
  await he.patch(`/user/passkeys/${e}`, { name: t });
}
async function a2(e, t) {
  await he.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const l2 = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: r2,
  register: s2,
  list: o2,
  rename: i2,
  remove: a2
}, jr = "auth_token", Wr = "auth_user", Br = "refresh_token", Kr = "token_expires_at", fr = "pending_auth_session", c2 = 60 * 1e3, u2 = 120 * 1e3;
function f2(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function kl() {
  const e = localStorage.getItem(fr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: f2(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(fr), null);
  } catch {
    return localStorage.removeItem(fr), null;
  }
}
function d2(e) {
  localStorage.setItem(fr, JSON.stringify(e));
}
function Ml() {
  localStorage.removeItem(fr);
}
const h2 = /* @__PURE__ */ mu("auth", () => {
  const e = le(null), t = le(null), n = le(null), r = le(null), o = le("standard"), s = le(null);
  let i = null, a = null;
  const l = be(() => !!t.value && !!e.value), u = be(() => {
    var $;
    return (($ = e.value) == null ? void 0 : $.role) === "admin";
  }), c = be(() => o.value === "simple"), f = be(() => s.value !== null);
  function m($) {
    const B = localStorage.getItem(jr), J = localStorage.getItem(Wr), ve = localStorage.getItem(Br), Te = localStorage.getItem(Kr);
    if (s.value = kl(), B && J)
      try {
        const re = JSON.parse(J), { run_mode: me, ...Ne } = re;
        return t.value = B, e.value = Ne, o.value = $ ?? me ?? "standard", n.value = ve, r.value = Te ? parseInt(Te, 10) : null, !0;
      } catch (re) {
        console.error("Failed to parse saved user data:", re), ue({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function b($) {
    o.value = $;
  }
  function A() {
    m() && (se().catch(($) => {
      console.error("Failed to refresh user on init:", $);
    }), T(), n.value && r.value !== null && v(r.value));
  }
  function T() {
    w(), i = setInterval(() => {
      t.value && se().catch(($) => {
        console.error("Auto-refresh user failed:", $);
      });
    }, c2);
  }
  function w() {
    i && (clearInterval(i), i = null);
  }
  function v($) {
    a && (clearTimeout(a), a = null);
    const B = Date.now(), J = Math.max(0, $ - B - u2);
    if (J <= 0) {
      E();
      return;
    }
    a = setTimeout(() => {
      E();
    }, J);
  }
  function k($) {
    const B = Date.now() + $ * 1e3;
    r.value = B, localStorage.setItem(Kr, String(B)), v(B);
  }
  async function E() {
    if (n.value)
      try {
        const $ = await Cn.refreshToken();
        t.value = $.access_token, n.value = $.refresh_token, k($.expires_in);
      } catch ($) {
        console.error("Token refresh failed:", $);
      }
  }
  function y() {
    a && (clearTimeout(a), a = null);
  }
  async function P($) {
    try {
      const B = await Cn.login($);
      return ki(B) || F(B), B;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  async function R($, B) {
    try {
      const J = await Cn.login2FA({ temp_token: $, totp_code: B });
      return F(J), e.value;
    } catch (J) {
      throw ue({ preservePendingAuthSession: s.value !== null }), J;
    }
  }
  async function U($) {
    try {
      const B = await l2.login($);
      return F(B), e.value;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  function F($) {
    t.value = $.access_token, $.refresh_token && (n.value = $.refresh_token, localStorage.setItem(Br, $.refresh_token)), $.user.run_mode && (o.value = $.user.run_mode);
    const { run_mode: B, ...J } = $.user;
    e.value = J, localStorage.setItem(jr, $.access_token), localStorage.setItem(Wr, JSON.stringify(J)), H(), T(), $.refresh_token && $.expires_in && k($.expires_in);
  }
  async function I($) {
    try {
      const B = await Cn.register($);
      return F(B), e.value;
    } catch (B) {
      throw ue({ preservePendingAuthSession: s.value !== null }), B;
    }
  }
  async function K($) {
    w(), y(), t.value = null, e.value = null, t.value = $, localStorage.setItem(jr, $);
    const B = localStorage.getItem(Br), J = localStorage.getItem(Kr);
    B && (n.value = B), J && (r.value = parseInt(J, 10));
    try {
      const ve = await se();
      return T(), B && r.value !== null && v(r.value), H(), ve;
    } catch (ve) {
      throw ue({ preservePendingAuthSession: s.value !== null }), ve;
    }
  }
  function Y($) {
    if (s.value = $, $) {
      d2($);
      return;
    }
    Ml();
  }
  function H() {
    Y(null);
  }
  async function Z() {
    try {
      await Cn.logout();
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
      const $ = await Cn.getCurrentUser();
      $.data.run_mode && (o.value = $.data.run_mode);
      const { run_mode: B, ...J } = $.data;
      return e.value = J, localStorage.setItem(Wr, JSON.stringify(J)), J;
    } catch ($) {
      throw $.status === 401 && ue({ preservePendingAuthSession: s.value !== null }), $;
    }
  }
  function ue($) {
    if (w(), y(), t.value = null, n.value = null, r.value = null, e.value = null, localStorage.removeItem(jr), localStorage.removeItem(Wr), localStorage.removeItem(Br), localStorage.removeItem(Kr), $ != null && $.preservePendingAuthSession) {
      s.value = kl();
      return;
    }
    s.value = null, Ml();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: mr(o),
    pendingAuthSession: mr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: P,
    loginWithPasskey: U,
    login2FA: R,
    register: I,
    setToken: K,
    logout: Z,
    checkAuth: A,
    hydrateAuthSnapshot: m,
    setRunModeSnapshot: b,
    refreshUser: se,
    setPendingAuthSession: Y,
    clearPendingAuthSession: H
  };
}), m2 = {
  channels: () => import("./ChannelsView-BmaP2bSv.js"),
  "channel-monitor": () => import("./ChannelMonitorView-DOAYUR3L.js"),
  ops: () => import("./OpsDashboard-TsdrU5MH.js"),
  subscriptions: () => import("./SubscriptionsView-CkASEmNV.js")
};
function p2() {
  var t, n, r;
  const e = document.querySelector("#app");
  return ((r = (n = (t = e == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$router) || null;
}
function _2(e) {
  const t = p2();
  if (!t) return;
  const n = {};
  for (const r in t.currentRoute.value)
    Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t.currentRoute.value[r]
    });
  e.component("RouterLink", Im), e.provide($s, t), e.provide(hi, ic(n));
}
async function g2(e, t) {
  const [{ default: n }] = await Promise.all([
    m2[e](),
    Gp()
  ]), r = ym(), o = Ff(r), s = h2(r);
  o.initFromInjectedConfig(), s.hydrateAuthSnapshot(t.runMode);
  const a = _m(/* @__PURE__ */ An({
    name: "ZeroOneCNProviderAdminRoot",
    setup: () => () => [Un(n), Un(Qg)]
  }));
  a.use(r), _2(a), a.use(Dn);
  let l = !1;
  async function u(c) {
    s.setRunModeSnapshot(c.runMode), Dn.global.locale.value !== c.locale && (await Gu(c.locale), Dn.global.locale.value = c.locale);
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
const s5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prepareCNProviderSurface: g2
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ic as $,
  R2 as A,
  he as B,
  O2 as C,
  w2 as D,
  bn as E,
  Me as F,
  Cs as G,
  S2 as H,
  Oe as I,
  k2 as J,
  mu as K,
  h2 as L,
  Jf as M,
  Kl as N,
  E2 as O,
  L2 as P,
  si as Q,
  Un as R,
  xh as S,
  ce as T,
  Ns as U,
  uc as V,
  Dn as W,
  M2 as X,
  x2 as Y,
  v2 as Z,
  Ia as _,
  er as a,
  A2 as a0,
  Ud as a1,
  C2 as a2,
  Yu as a3,
  n5 as a4,
  r5 as a5,
  b2 as a6,
  T2 as a7,
  s5 as a8,
  ht as b,
  be as c,
  An as d,
  sr as e,
  Ah as f,
  ea as g,
  Ie as h,
  Et as i,
  le as j,
  cs as k,
  Jg as l,
  li as m,
  Zt as n,
  Ft as o,
  Ff as p,
  wr as q,
  Yd as r,
  ai as s,
  Eo as t,
  vi as u,
  pc as v,
  N2 as w,
  y2 as x,
  I2 as y,
  P2 as z
};
