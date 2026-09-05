/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function pa(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ne = {}, Yn = [], Ht = () => {
}, rc = () => !1, Bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ga = (e) => e.startsWith("onUpdate:"), tt = Object.assign, _a = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nd = Object.prototype.hasOwnProperty, Pe = (e, t) => nd.call(e, t), he = Array.isArray, Xn = (e) => Ws(e) === "[object Map]", sc = (e) => Ws(e) === "[object Set]", Se = (e) => typeof e == "function", ze = (e) => typeof e == "string", nn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", oc = (e) => (Fe(e) || Se(e)) && Se(e.then) && Se(e.catch), ac = Object.prototype.toString, Ws = (e) => ac.call(e), rd = (e) => Ws(e).slice(8, -1), ic = (e) => Ws(e) === "[object Object]", Gs = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wr = /* @__PURE__ */ pa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ks = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, sd = /-\w/g, bn = Ks(
  (e) => e.replace(sd, (t) => t.slice(1).toUpperCase())
), od = /\B([A-Z])/g, En = Ks(
  (e) => e.replace(od, "-$1").toLowerCase()
), lc = Ks((e) => e.charAt(0).toUpperCase() + e.slice(1)), go = Ks(
  (e) => e ? `on${lc(e)}` : ""
), gn = (e, t) => !Object.is(e, t), _s = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cc = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, ba = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ad = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ai;
const zs = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ur(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ze(r) ? ud(r) : ur(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (ze(e) || Fe(e))
    return e;
}
const id = /;(?![^(]*\))/g, ld = /:([^]+)/, cd = /\/\*[^]*?\*\//g;
function ud(e) {
  const t = {};
  return e.replace(cd, "").split(id).forEach((n) => {
    if (n) {
      const r = n.split(ld);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (ze(e))
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
const fd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dd = /* @__PURE__ */ pa(fd);
function uc(e) {
  return !!e || e === "";
}
const fc = (e) => !!(e && e.__v_isRef === !0), ue = (e) => ze(e) ? e : e == null ? "" : he(e) || Fe(e) && (e.toString === ac || !Se(e.toString)) ? fc(e) ? ue(e.value) : JSON.stringify(e, dc, 2) : String(e), dc = (e, t) => fc(t) ? dc(e, t.value) : Xn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[_o(r, s) + " =>"] = o, n),
    {}
  )
} : sc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _o(n))
} : nn(t) ? _o(t) : Fe(t) && !he(t) && !ic(t) ? String(t) : t, _o = (e, t = "") => {
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
class mc {
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
function ya(e) {
  return new mc(e);
}
function hc() {
  return lt;
}
function pc(e, t = !1) {
  lt && lt.cleanups.push(e);
}
let Me;
const bo = /* @__PURE__ */ new WeakSet();
class gc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, lt && lt.active && lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bo.has(this) && (bo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ii(this), yc(this);
    const t = Me, n = It;
    Me = this, It = !0;
    try {
      return this.fn();
    } finally {
      vc(this), Me = t, It = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        wa(t);
      this.deps = this.depsTail = void 0, ii(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $o(this) && this.run();
  }
  get dirty() {
    return $o(this);
  }
}
let _c = 0, Sr, Ar;
function bc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ar, Ar = e;
    return;
  }
  e.next = Sr, Sr = e;
}
function va() {
  _c++;
}
function Ea() {
  if (--_c > 0)
    return;
  if (Ar) {
    let t = Ar;
    for (Ar = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Sr; ) {
    let t = Sr;
    for (Sr = void 0; t; ) {
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
function yc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), wa(r), md(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function $o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ec(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ec(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xr) || (e.globalVersion = xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$o(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Me, r = It;
  Me = e, It = !0;
  try {
    yc(e);
    const o = e.fn(e._value);
    (t.version === 0 || gn(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = n, It = r, vc(e), e.flags &= -3;
  }
}
function wa(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      wa(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function md(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let It = !0;
const wc = [];
function Qt() {
  wc.push(It), It = !1;
}
function Zt() {
  const e = wc.pop();
  It = e === void 0 ? !0 : e;
}
function ii(e) {
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
class hd {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Sa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Me || !It || Me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      n = this.activeLink = new hd(Me, this), Me.deps ? (n.prevDep = Me.depsTail, Me.depsTail.nextDep = n, Me.depsTail = n) : Me.deps = Me.depsTail = n, Sc(n);
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
    va();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ea();
    }
  }
}
function Sc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Sc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Os = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ Symbol(
  ""
), Ho = /* @__PURE__ */ Symbol(
  ""
), Nr = /* @__PURE__ */ Symbol(
  ""
);
function ct(e, t, n) {
  if (It && Me) {
    let r = Os.get(e);
    r || Os.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Sa()), o.map = r, o.key = n), o.track();
  }
}
function qt(e, t, n, r, o, s) {
  const a = Os.get(e);
  if (!a) {
    xr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (va(), t === "clear")
    a.forEach(i);
  else {
    const l = he(e), u = l && Gs(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Nr || !nn(h) && h >= c) && i(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), u && i(a.get(Nr)), t) {
        case "add":
          l ? u && i(a.get("length")) : (i(a.get(Mn)), Xn(e) && i(a.get(Ho)));
          break;
        case "delete":
          l || (i(a.get(Mn)), Xn(e) && i(a.get(Ho)));
          break;
        case "set":
          Xn(e) && i(a.get(Mn));
          break;
      }
  }
  Ea();
}
function pd(e, t) {
  const n = Os.get(e);
  return n && n.get(t);
}
function Vn(e) {
  const t = Le(e);
  return t === e ? t : (ct(t, "iterate", Nr), Tt(e) ? t : t.map(kt));
}
function qs(e) {
  return ct(e = Le(e), "iterate", Nr), e;
}
function fn(e, t) {
  return en(e) ? Jt(e) ? nr(kt(t)) : nr(t) : kt(t);
}
const gd = {
  __proto__: null,
  [Symbol.iterator]() {
    return yo(this, Symbol.iterator, (e) => fn(this, e));
  },
  concat(...e) {
    return Vn(this).concat(
      ...e.map((t) => he(t) ? Vn(t) : t)
    );
  },
  entries() {
    return yo(this, "entries", (e) => (e[1] = fn(this, e[1]), e));
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
      (n) => n.map((r) => fn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Bt(
      this,
      "find",
      e,
      t,
      (n) => fn(this, n),
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
      (n) => fn(this, n),
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
    return vo(this, "includes", e);
  },
  indexOf(...e) {
    return vo(this, "indexOf", e);
  },
  join(e) {
    return Vn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vo(this, "lastIndexOf", e);
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
    return li(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return li(this, "reduceRight", e, t);
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
    return yo(this, "values", (e) => fn(this, e));
  }
};
function yo(e, t, n) {
  const r = qs(e), o = r[t]();
  return r !== e && !Tt(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const _d = Array.prototype;
function Bt(e, t, n, r, o, s) {
  const a = qs(e), i = a !== e && !Tt(e), l = a[t];
  if (l !== _d[t]) {
    const f = l.apply(e, s);
    return i ? kt(f) : f;
  }
  let u = n;
  a !== e && (i ? u = function(f, h) {
    return n.call(this, fn(e, f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const c = l.call(a, u, r);
  return i && o ? o(c) : c;
}
function li(e, t, n, r) {
  const o = qs(e);
  let s = n;
  return o !== e && (Tt(e) ? n.length > 3 && (s = function(a, i, l) {
    return n.call(this, a, i, l, e);
  }) : s = function(a, i, l) {
    return n.call(this, a, fn(e, i), l, e);
  }), o[t](s, ...r);
}
function vo(e, t, n) {
  const r = Le(e);
  ct(r, "iterate", Nr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Xs(n[0]) ? (n[0] = Le(n[0]), r[t](...n)) : o;
}
function gr(e, t, n = []) {
  Qt(), va();
  const r = Le(e)[t].apply(e, n);
  return Ea(), Zt(), r;
}
const bd = /* @__PURE__ */ pa("__proto__,__v_isRef,__isVue"), Ac = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nn)
);
function yd(e) {
  nn(e) || (e = String(e));
  const t = Le(this);
  return ct(t, "has", e), t.hasOwnProperty(e);
}
class Tc {
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
      return r === (o ? s ? Ld : Lc : s ? Cc : Rc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = he(t);
    if (!o) {
      let l;
      if (a && (l = gd[n]))
        return l;
      if (n === "hasOwnProperty")
        return yd;
    }
    const i = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Be(t) ? t : r
    );
    if ((nn(n) ? Ac.has(n) : bd(n)) || (o || ct(t, "get", n), s))
      return i;
    if (Be(i)) {
      const l = a && Gs(n) ? i : i.value;
      return o && Fe(l) ? Mr(l) : l;
    }
    return Fe(i) ? o ? Mr(i) : Ys(i) : i;
  }
}
class Oc extends Tc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const a = he(t) && Gs(n);
    if (!this._isShallow) {
      const u = en(s);
      if (!Tt(r) && !en(r) && (s = Le(s), r = Le(r)), !a && Be(s) && !Be(r))
        return u || (s.value = r), !0;
    }
    const i = a ? Number(n) < t.length : Pe(t, n), l = Reflect.set(
      t,
      n,
      r,
      Be(t) ? t : o
    );
    return t === Le(o) && (i ? gn(r, s) && qt(t, "set", n, r) : qt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = Pe(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && qt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!nn(n) || !Ac.has(n)) && ct(t, "has", n), r;
  }
  ownKeys(t) {
    return ct(
      t,
      "iterate",
      he(t) ? "length" : Mn
    ), Reflect.ownKeys(t);
  }
}
class vd extends Tc {
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
const Ed = /* @__PURE__ */ new Oc(), wd = /* @__PURE__ */ new vd(), Sd = /* @__PURE__ */ new Oc(!0);
const Vo = (e) => e, ss = (e) => Reflect.getPrototypeOf(e);
function Ad(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Le(o), a = Xn(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? Vo : t ? nr : kt;
    return !t && ct(
      s,
      "iterate",
      l ? Ho : Mn
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
function os(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Td(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      e || (gn(o, i) && ct(a, "get", o), ct(a, "get", i));
      const { has: l } = ss(a), u = t ? Vo : e ? nr : kt;
      if (l.call(a, o))
        return u(s.get(o));
      if (l.call(a, i))
        return u(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ct(Le(o), "iterate", Mn), o.size;
    },
    has(o) {
      const s = this.__v_raw, a = Le(s), i = Le(o);
      return e || (gn(o, i) && ct(a, "has", o), ct(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = Le(i), u = t ? Vo : e ? nr : kt;
      return !e && ct(l, "iterate", Mn), i.forEach((c, f) => o.call(s, u(c), u(f), a));
    }
  };
  return tt(
    n,
    e ? {
      add: os("add"),
      set: os("set"),
      delete: os("delete"),
      clear: os("clear")
    } : {
      add(o) {
        !t && !Tt(o) && !en(o) && (o = Le(o));
        const s = Le(this);
        return ss(s).has.call(s, o) || (s.add(o), qt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Tt(s) && !en(s) && (s = Le(s));
        const a = Le(this), { has: i, get: l } = ss(a);
        let u = i.call(a, o);
        u || (o = Le(o), u = i.call(a, o));
        const c = l.call(a, o);
        return a.set(o, s), u ? gn(s, c) && qt(a, "set", o, s) : qt(a, "add", o, s), this;
      },
      delete(o) {
        const s = Le(this), { has: a, get: i } = ss(s);
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
    n[o] = Ad(o, e, t);
  }), n;
}
function Aa(e, t) {
  const n = Td(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    Pe(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Od = {
  get: /* @__PURE__ */ Aa(!1, !1)
}, Rd = {
  get: /* @__PURE__ */ Aa(!1, !0)
}, Cd = {
  get: /* @__PURE__ */ Aa(!0, !1)
};
const Rc = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), Lc = /* @__PURE__ */ new WeakMap(), Ld = /* @__PURE__ */ new WeakMap();
function Id(e) {
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
function kd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Id(rd(e));
}
function Ys(e) {
  return en(e) ? e : Ta(
    e,
    !1,
    Ed,
    Od,
    Rc
  );
}
function Pd(e) {
  return Ta(
    e,
    !1,
    Sd,
    Rd,
    Cc
  );
}
function Mr(e) {
  return Ta(
    e,
    !0,
    wd,
    Cd,
    Lc
  );
}
function Ta(e, t, n, r, o) {
  if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = kd(e);
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
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function Xs(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function Oa(e) {
  return !Pe(e, "__v_skip") && Object.isExtensible(e) && cc(e, "__v_skip", !0), e;
}
const kt = (e) => Fe(e) ? Ys(e) : e, nr = (e) => Fe(e) ? Mr(e) : e;
function Be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return kc(e, !1);
}
function Ic(e) {
  return kc(e, !0);
}
function kc(e, t) {
  return Be(e) ? e : new xd(e, t);
}
class xd {
  constructor(t, n) {
    this.dep = new Sa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Le(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Tt(t) || en(t);
    t = r ? t : Le(t), gn(t, n) && (this._rawValue = t, this._value = r ? t : kt(t), this.dep.trigger());
  }
}
function le(e) {
  return Be(e) ? e.value : e;
}
const Nd = {
  get: (e, t, n) => t === "__v_raw" ? e : le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Be(o) && !Be(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Pc(e) {
  return Jt(e) ? e : new Proxy(e, Nd);
}
function Md(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Fd(e, n);
  return t;
}
class Dd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Le(t);
    let o = !0, s = t;
    if (!he(t) || !Gs(String(n)))
      do
        o = !Xs(s) || Tt(s);
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
    return pd(this._raw, this._key);
  }
}
function Fd(e, t, n) {
  return new Dd(e, t, n);
}
class Ud {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Sa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return bc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ec(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function $d(e, t, n = !1) {
  let r, o;
  return Se(e) ? r = e : (r = e.get, o = e.set), new Ud(r, o, n);
}
const as = {}, Rs = /* @__PURE__ */ new WeakMap();
let kn;
function Hd(e, t = !1, n = kn) {
  if (n) {
    let r = Rs.get(n);
    r || Rs.set(n, r = []), r.push(e);
  }
}
function Vd(e, t, n = Ne) {
  const { immediate: r, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = n, u = (E) => o ? E : Tt(E) || o === !1 || o === 0 ? Yt(E, 1) : Yt(E);
  let c, f, h, p, w = !1, S = !1;
  if (Be(e) ? (f = () => e.value, w = Tt(e)) : Jt(e) ? (f = () => u(e), w = !0) : he(e) ? (S = !0, w = e.some((E) => Jt(E) || Tt(E)), f = () => e.map((E) => {
    if (Be(E))
      return E.value;
    if (Jt(E))
      return u(E);
    if (Se(E))
      return l ? l(E, 2) : E();
  })) : Se(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Qt();
      try {
        h();
      } finally {
        Zt();
      }
    }
    const E = kn;
    kn = c;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      kn = E;
    }
  } : f = Ht, t && o) {
    const E = f, C = o === !0 ? 1 / 0 : o;
    f = () => Yt(E(), C);
  }
  const T = hc(), v = () => {
    c.stop(), T && T.active && _a(T.effects, c);
  };
  if (s && t) {
    const E = t;
    t = (...C) => {
      E(...C), v();
    };
  }
  let x = S ? new Array(e.length).fill(as) : as;
  const y = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const C = c.run();
        if (o || w || (S ? C.some((R, D) => gn(R, x[D])) : gn(C, x))) {
          h && h();
          const R = kn;
          kn = c;
          try {
            const D = [
              C,
              // pass undefined as the old value when it's changed for the first time
              x === as ? void 0 : S && x[0] === as ? [] : x,
              p
            ];
            x = C, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            kn = R;
          }
        }
      } else
        c.run();
  };
  return i && i(y), c = new gc(f), c.scheduler = a ? () => a(y, !1) : y, p = (E) => Hd(E, !1, c), h = c.onStop = () => {
    const E = Rs.get(c);
    if (E) {
      if (l)
        l(E, 4);
      else
        for (const C of E) C();
      Rs.delete(c);
    }
  }, t ? r ? y(!0) : x = c.run() : a ? a(y.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Be(e))
    Yt(e.value, t, n);
  else if (he(e))
    for (let r = 0; r < e.length; r++)
      Yt(e[r], t, n);
  else if (sc(e) || Xn(e))
    e.forEach((r) => {
      Yt(r, t, n);
    });
  else if (ic(e)) {
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
    Js(o, t, n);
  }
}
function Pt(e, t, n, r) {
  if (Se(e)) {
    const o = qr(e, t, n, r);
    return o && oc(o) && o.catch((s) => {
      Js(s, t, n);
    }), o;
  }
  if (he(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Pt(e[s], t, n, r));
    return o;
  }
}
function Js(e, t, n, r = !0) {
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
  jd(e, n, o, r, a);
}
function jd(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const _t = [];
let Ft = -1;
const Jn = [];
let dn = null, Gn = 0;
const xc = /* @__PURE__ */ Promise.resolve();
let Cs = null;
function Qn(e) {
  const t = Cs || xc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bd(e) {
  let t = Ft + 1, n = _t.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = _t[r], s = Dr(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ra(e) {
  if (!(e.flags & 1)) {
    const t = Dr(e), n = _t[_t.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Dr(n) ? _t.push(e) : _t.splice(Bd(t), 0, e), e.flags |= 1, Nc();
  }
}
function Nc() {
  Cs || (Cs = xc.then(Dc));
}
function Wd(e) {
  he(e) ? Jn.push(...e) : dn && e.id === -1 ? dn.splice(Gn + 1, 0, e) : e.flags & 1 || (Jn.push(e), e.flags |= 1), Nc();
}
function ci(e, t, n = Ft + 1) {
  for (; n < _t.length; n++) {
    const r = _t[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      _t.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mc(e) {
  if (Jn.length) {
    const t = [...new Set(Jn)].sort(
      (n, r) => Dr(n) - Dr(r)
    );
    if (Jn.length = 0, dn) {
      dn.push(...t);
      return;
    }
    for (dn = t, Gn = 0; Gn < dn.length; Gn++) {
      const n = dn[Gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dn = null, Gn = 0;
  }
}
const Dr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Dc(e) {
  try {
    for (Ft = 0; Ft < _t.length; Ft++) {
      const t = _t[Ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qr(
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
    Ft = -1, _t.length = 0, Mc(), Cs = null, (_t.length || Jn.length) && Dc();
  }
}
let ft = null, Fc = null;
function Ls(e) {
  const t = ft;
  return ft = e, Fc = e && e.type.__scopeId || null, t;
}
function rr(e, t = ft, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && xs(-1);
    const s = Ls(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Ls(s), r._d && xs(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function jo(e, t) {
  if (ft === null)
    return e;
  const n = to(ft), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, i, l = Ne] = t[o];
    s && (Se(s) && (s = {
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
    l && (Qt(), Pt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Zt());
  }
}
function Gd(e, t) {
  if (bt) {
    let n = bt.provides;
    const r = bt.parent && bt.parent.provides;
    r === n && (n = bt.provides = Object.create(r)), n[e] = t;
  }
}
function Zn(e, t, n = !1) {
  const r = tn();
  if (r || Dn) {
    let o = Dn ? Dn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Se(t) ? t.call(r && r.proxy) : t;
  }
}
function Kd() {
  return !!(tn() || Dn);
}
const zd = /* @__PURE__ */ Symbol.for("v-scx"), qd = () => Zn(zd);
function yt(e, t, n) {
  return Uc(e, t, n);
}
function Uc(e, t, n = Ne) {
  const { immediate: r, deep: o, flush: s, once: a } = n, i = tt({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Hr) {
    if (s === "sync") {
      const p = qd();
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
    w ? p() : Ra(p);
  }), i.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const h = Vd(e, t, i);
  return Hr && (u ? u.push(h) : l && h()), h;
}
function Yd(e, t, n) {
  const r = this.proxy, o = ze(e) ? e.includes(".") ? $c(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Se(t) ? s = t : (s = t.handler, n = t);
  const a = Jr(this), i = Uc(o, s.bind(r), n);
  return a(), i;
}
function $c(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Hc = /* @__PURE__ */ Symbol("_vte"), Vc = (e) => e.__isTeleport, Tr = (e) => e && (e.disabled || e.disabled === ""), ui = (e) => e && (e.defer || e.defer === ""), fi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, di = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Bo = (e, t) => {
  const n = e && e.to;
  return ze(n) ? t ? t(n) : null : n;
}, jc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, i, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: h,
      o: { insert: p, querySelector: w, createText: S, createComment: T }
    } = u, v = Tr(t.props);
    let { shapeFlag: x, children: y, dynamicChildren: E } = t;
    if (e == null) {
      const C = t.el = S(""), R = t.anchor = S("");
      p(C, n, r), p(R, n, r);
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
        const O = t.target = Bo(t.props, w), j = Bc(O, t, S, p);
        O && (a !== "svg" && fi(O) ? a = "svg" : a !== "mathml" && di(O) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), v || (D(O, j), bs(t, !1)));
      };
      v && (D(n, R), bs(t, !0)), ui(t.props) ? (t.el.__isMounted = !1, gt(() => {
        N(), delete t.el.__isMounted;
      }, s)) : N();
    } else {
      if (ui(t.props) && e.el.__isMounted === !1) {
        gt(() => {
          jc.process(
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
      const C = t.anchor = e.anchor, R = t.target = e.target, D = t.targetAnchor = e.targetAnchor, N = Tr(e.props), O = N ? n : R, j = N ? C : D;
      if (a === "svg" || fi(R) ? a = "svg" : (a === "mathml" || di(R)) && (a = "mathml"), E ? (h(
        e.dynamicChildren,
        E,
        O,
        o,
        s,
        a,
        i
      ), xa(e, t, !0)) : l || f(
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
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : is(
          t,
          n,
          C,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = Bo(
          t.props,
          w
        );
        ee && is(
          t,
          ee,
          null,
          u,
          0
        );
      } else N && is(
        t,
        R,
        D,
        u,
        1
      );
      bs(t, v);
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
      const p = s || !Tr(h);
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
  move: is,
  hydrate: Xd
};
function is(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: i, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(a, t, n), (!f || Tr(c)) && l & 16)
    for (let h = 0; h < u.length; h++)
      o(
        u[h],
        t,
        n,
        2
      );
  f && r(i, t, n);
}
function Xd(e, t, n, r, o, s, {
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
  const p = t.target = Bo(
    t.props,
    l
  ), w = Tr(t.props);
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
        t.targetAnchor || Bc(p, t, c, u), f(
          S && a(S),
          t,
          p,
          n,
          r,
          o,
          s
        );
      }
    bs(t, w);
  } else w && t.shapeFlag & 16 && h(e, t, e, a(e));
  return t.anchor && a(t.anchor);
}
const Ca = jc;
function bs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Bc(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Hc] = s, e && (r(o, e), r(s, e)), s;
}
const zt = /* @__PURE__ */ Symbol("_leaveCb"), ls = /* @__PURE__ */ Symbol("_enterCb");
function Wc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fr(() => {
    e.isMounted = !0;
  }), Ia(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ot = [Function, Array], Gc = {
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
}, Kc = (e) => {
  const t = e.subTree;
  return t.component ? Kc(t.component) : t;
}, Jd = {
  name: "BaseTransition",
  props: Gc,
  setup(e, { slots: t }) {
    const n = tn(), r = Wc();
    return () => {
      const o = t.default && La(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = zc(o), a = Le(e), { mode: i } = a;
      if (r.isLeaving)
        return Eo(s);
      const l = mi(s);
      if (!l)
        return Eo(s);
      let u = Fr(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== ut && Un(l, u);
      let c = n.subTree && mi(n.subTree);
      if (c && c.type !== ut && !Pn(c, l) && Kc(n).type !== ut) {
        let f = Fr(
          c,
          a,
          r,
          n
        );
        if (Un(c, f), i === "out-in" && l.type !== ut)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Eo(s);
        i === "in-out" && l.type !== ut ? f.delayLeave = (h, p, w) => {
          const S = qc(
            r,
            c
          );
          S[String(c.key)] = c, h[zt] = () => {
            p(), h[zt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            w(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function zc(e) {
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
const Qd = Jd;
function qc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Fr(e, t, n, r, o) {
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
  } = t, E = String(e.key), C = qc(n, e), R = (O, j) => {
    O && Pt(
      O,
      r,
      9,
      j
    );
  }, D = (O, j) => {
    const ee = j[1];
    R(O, j), he(O) ? O.every((U) => U.length <= 1) && ee() : O.length <= 1 && ee();
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
      O[zt] && O[zt](
        !0
        /* cancelled */
      );
      const ee = C[E];
      ee && Pn(e, ee) && ee.el[zt] && ee.el[zt](), R(j, [O]);
    },
    enter(O) {
      let j = u, ee = c, U = f;
      if (!n.isMounted)
        if (s)
          j = v || u, ee = x || c, U = y || f;
        else
          return;
      let te = !1;
      const ae = O[ls] = (fe) => {
        te || (te = !0, fe ? R(U, [O]) : R(ee, [O]), N.delayedLeave && N.delayedLeave(), O[ls] = void 0);
      };
      j ? D(j, [O, ae]) : ae();
    },
    leave(O, j) {
      const ee = String(e.key);
      if (O[ls] && O[ls](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      R(h, [O]);
      let U = !1;
      const te = O[zt] = (ae) => {
        U || (U = !0, j(), ae ? R(S, [O]) : R(w, [O]), O[zt] = void 0, C[ee] === e && delete C[ee]);
      };
      C[ee] = e, p ? D(p, [O, te]) : te();
    },
    clone(O) {
      const j = Fr(
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
function Eo(e) {
  if (Qs(e))
    return e = yn(e), e.children = null, e;
}
function mi(e) {
  if (!Qs(e))
    return Vc(e.type) && e.children ? zc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Se(n.default))
      return n.default();
  }
}
function Un(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Un(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function La(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === He ? (a.patchFlag & 128 && o++, r = r.concat(
      La(a.children, t, i)
    )) : (t || a.type !== ut) && r.push(i != null ? yn(a, { key: i }) : a);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function rn(e, t) {
  return Se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Yc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Is = /* @__PURE__ */ new WeakMap();
function Or(e, t, n, r, o = !1) {
  if (he(e)) {
    e.forEach(
      (w, S) => Or(
        w,
        t && (he(t) ? t[S] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (er(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Or(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? to(r.component) : r.el, a = o ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === Ne ? i.refs = {} : i.refs, f = i.setupState, h = Le(f), p = f === Ne ? rc : (w) => Pe(h, w);
  if (u != null && u !== l) {
    if (hi(t), ze(u))
      c[u] = null, p(u) && (f[u] = null);
    else if (Be(u)) {
      u.value = null;
      const w = t;
      w.k && (c[w.k] = null);
    }
  }
  if (Se(l))
    qr(l, i, 12, [a, c]);
  else {
    const w = ze(l), S = Be(l);
    if (w || S) {
      const T = () => {
        if (e.f) {
          const v = w ? p(l) ? f[l] : c[l] : l.value;
          if (o)
            he(v) && _a(v, s);
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
          T(), Is.delete(e);
        };
        v.id = -1, Is.set(e, v), gt(v, n);
      } else
        hi(e), T();
    }
  }
}
function hi(e) {
  const t = Is.get(e);
  t && (t.flags |= 8, Is.delete(e));
}
zs().requestIdleCallback;
zs().cancelIdleCallback;
const er = (e) => !!e.type.__asyncLoader, Qs = (e) => e.type.__isKeepAlive;
function Zd(e, t) {
  Xc(e, "a", t);
}
function em(e, t) {
  Xc(e, "da", t);
}
function Xc(e, t, n = bt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Zs(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Qs(o.parent.vnode) && tm(r, t, n, o), o = o.parent;
  }
}
function tm(e, t, n, r) {
  const o = Zs(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Yr(() => {
    _a(r[t], o);
  }, n);
}
function Zs(e, t, n = bt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Qt();
      const i = Jr(n), l = Pt(t, n, e, a);
      return i(), Zt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const sn = (e) => (t, n = bt) => {
  (!Hr || e === "sp") && Zs(e, (...r) => t(...r), n);
}, Jc = sn("bm"), fr = sn("m"), nm = sn(
  "bu"
), Qc = sn("u"), Ia = sn(
  "bum"
), Yr = sn("um"), rm = sn(
  "sp"
), sm = sn("rtg"), om = sn("rtc");
function am(e, t = bt) {
  Zs("ec", e, t);
}
const im = /* @__PURE__ */ Symbol.for("v-ndc");
function mn(e, t, n, r) {
  let o;
  const s = n, a = he(e);
  if (a || ze(e)) {
    const i = a && Jt(e);
    let l = !1, u = !1;
    i && (l = !Tt(e), u = en(e), e = qs(e)), o = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(
        l ? u ? nr(kt(e[c])) : kt(e[c]) : e[c],
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
function ks(e, t, n = {}, r, o) {
  if (ft.ce || ft.parent && er(ft.parent) && ft.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), ge(), _n(
      He,
      null,
      [we("slot", n, r && r())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), ge();
  const a = s && Zc(s(n)), i = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = _n(
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
function Zc(e) {
  return e.some((t) => $r(t) ? !(t.type === ut || t.type === He && !Zc(t.children)) : !0) ? e : null;
}
const Wo = (e) => e ? _u(e) ? to(e) : Wo(e.parent) : null, Rr = (
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
    $parent: (e) => Wo(e.parent),
    $root: (e) => Wo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => tu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ra(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qn.bind(e.proxy)),
    $watch: (e) => Yd.bind(e)
  })
), wo = (e, t) => e !== Ne && !e.__isScriptSetup && Pe(e, t), lm = {
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
        if (wo(r, t))
          return a[t] = 1, r[t];
        if (o !== Ne && Pe(o, t))
          return a[t] = 2, o[t];
        if (Pe(s, t))
          return a[t] = 3, s[t];
        if (n !== Ne && Pe(n, t))
          return a[t] = 4, n[t];
        Go && (a[t] = 0);
      }
    }
    const u = Rr[t];
    let c, f;
    if (u)
      return t === "$attrs" && ct(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = i.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ne && Pe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Pe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return wo(o, t) ? (o[t] = n, !0) : r !== Ne && Pe(r, t) ? (r[t] = n, !0) : Pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: a }
  }, i) {
    let l;
    return !!(n[i] || e !== Ne && i[0] !== "$" && Pe(e, i) || wo(t, i) || Pe(s, i) || Pe(r, i) || Pe(Rr, i) || Pe(o.config.globalProperties, i) || (l = a.__cssModules) && l[i]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function pi(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Go = !0;
function cm(e) {
  const t = tu(e), n = e.proxy, r = e.ctx;
  Go = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
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
    render: C,
    renderTracked: R,
    renderTriggered: D,
    errorCaptured: N,
    serverPrefetch: O,
    // public API
    expose: j,
    inheritAttrs: ee,
    // assets
    components: U,
    directives: te,
    filters: ae
  } = t;
  if (u && um(u, r, null), a)
    for (const V in a) {
      const Q = a[V];
      Se(Q) && (r[V] = Q.bind(n));
    }
  if (o) {
    const V = o.call(n, n);
    Fe(V) && (e.data = Ys(V));
  }
  if (Go = !0, s)
    for (const V in s) {
      const Q = s[V], _e = Se(Q) ? Q.bind(n, n) : Se(Q.get) ? Q.get.bind(n, n) : Ht, Ce = !Se(Q) && Se(Q.set) ? Q.set.bind(n) : Ht, pe = be({
        get: _e,
        set: Ce
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (ve) => pe.value = ve
      });
    }
  if (i)
    for (const V in i)
      eu(i[V], r, n, V);
  if (l) {
    const V = Se(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((Q) => {
      Gd(Q, V[Q]);
    });
  }
  c && gi(c, e, "c");
  function ie(V, Q) {
    he(Q) ? Q.forEach((_e) => V(_e.bind(n))) : Q && V(Q.bind(n));
  }
  if (ie(Jc, f), ie(fr, h), ie(nm, p), ie(Qc, w), ie(Zd, S), ie(em, T), ie(am, N), ie(om, R), ie(sm, D), ie(Ia, x), ie(Yr, E), ie(rm, O), he(j))
    if (j.length) {
      const V = e.exposed || (e.exposed = {});
      j.forEach((Q) => {
        Object.defineProperty(V, Q, {
          get: () => n[Q],
          set: (_e) => n[Q] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Ht && (e.render = C), ee != null && (e.inheritAttrs = ee), U && (e.components = U), te && (e.directives = te), O && Yc(e);
}
function um(e, t, n = Ht) {
  he(e) && (e = Ko(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Fe(o) ? "default" in o ? s = Zn(
      o.from || r,
      o.default,
      !0
    ) : s = Zn(o.from || r) : s = Zn(o), Be(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[r] = s;
  }
}
function gi(e, t, n) {
  Pt(
    he(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function eu(e, t, n, r) {
  let o = r.includes(".") ? $c(n, r) : () => n[r];
  if (ze(e)) {
    const s = t[e];
    Se(s) && yt(o, s);
  } else if (Se(e))
    yt(o, e.bind(n));
  else if (Fe(e))
    if (he(e))
      e.forEach((s) => eu(s, t, n, r));
    else {
      const s = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
      Se(s) && yt(o, s, e);
    }
}
function tu(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => Ps(l, u, a, !0)
  ), Ps(l, t, a)), Fe(t) && s.set(t, l), l;
}
function Ps(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Ps(e, s, n, !0), o && o.forEach(
    (a) => Ps(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = fm[a] || n && n[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const fm = {
  data: _i,
  props: bi,
  emits: bi,
  // objects
  methods: Er,
  computed: Er,
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
  components: Er,
  directives: Er,
  // watch
  watch: mm,
  // provide / inject
  provide: _i,
  inject: dm
};
function _i(e, t) {
  return t ? e ? function() {
    return tt(
      Se(e) ? e.call(this, this) : e,
      Se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function dm(e, t) {
  return Er(Ko(e), Ko(t));
}
function Ko(e) {
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
function Er(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function mm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ht(e[r], t[r]);
  return n;
}
function nu() {
  return {
    app: null,
    config: {
      isNativeTag: rc,
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
let hm = 0;
function pm(e, t) {
  return function(r, o = null) {
    Se(r) || (r = tt({}, r)), o != null && !Fe(o) && (o = null);
    const s = nu(), a = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const u = s.app = {
      _uid: hm++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Km,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return a.has(c) || (c && Se(c.install) ? (a.add(c), c.install(u, ...f)) : Se(c) && (a.add(c), c(u, ...f))), u;
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
          const p = u._ceVNode || we(r, o);
          return p.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(p, c, h), l = !0, u._container = c, c.__vue_app__ = u, to(p.component);
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
const gm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${En(t)}Modifiers`];
function _m(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ne;
  let o = n;
  const s = t.startsWith("update:"), a = s && gm(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => ze(c) ? c.trim() : c)), a.number && (o = n.map(ba)));
  let i, l = r[i = go(t)] || // also try camelCase event handler (#2249)
  r[i = go(bn(t))];
  !l && s && (l = r[i = go(En(t))]), l && Pt(
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
const bm = /* @__PURE__ */ new WeakMap();
function ru(e, t, n = !1) {
  const r = n ? bm : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!Se(e)) {
    const l = (u) => {
      const c = ru(u, t, !0);
      c && (i = !0, tt(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (Fe(e) && r.set(e, null), null) : (he(s) ? s.forEach((l) => a[l] = null) : tt(a, s), Fe(e) && r.set(e, a), a);
}
function eo(e, t) {
  return !e || !Bs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, En(t)) || Pe(e, t));
}
function yi(e) {
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
  } = e, T = Ls(e);
  let v, x;
  try {
    if (n.shapeFlag & 4) {
      const E = o || r, C = E;
      v = Ut(
        u.call(
          C,
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
      ), x = t.props ? i : ym(i);
    }
  } catch (E) {
    Cr.length = 0, Js(E, e, 1), v = we(ut);
  }
  let y = v;
  if (x && S !== !1) {
    const E = Object.keys(x), { shapeFlag: C } = y;
    E.length && C & 7 && (s && E.some(ga) && (x = vm(
      x,
      s
    )), y = yn(y, x, !1, !0));
  }
  return n.dirs && (y = yn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Un(y, n.transition), v = y, Ls(T), v;
}
const ym = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vm = (e, t) => {
  const n = {};
  for (const r in e)
    (!ga(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Em(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? vi(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (a[h] !== r[h] && !eo(u, h))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? vi(r, a, u) : !0 : !!a;
  return !1;
}
function vi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !eo(n, s))
      return !0;
  }
  return !1;
}
function wm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const su = {}, ou = () => Object.create(su), au = (e) => Object.getPrototypeOf(e) === su;
function Sm(e, t, n, r = !1) {
  const o = {}, s = ou();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), iu(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Pd(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Am(e, t, n, r) {
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
        if (eo(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (l)
          if (Pe(s, h))
            p !== s[h] && (s[h] = p, u = !0);
          else {
            const w = bn(h);
            o[w] = zo(
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
    iu(e, t, o, s) && (u = !0);
    let c;
    for (const f in i)
      (!t || // for camelCase
      !Pe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = En(f)) === f || !Pe(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[f] = zo(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== i)
      for (const f in s)
        (!t || !Pe(t, f)) && (delete s[f], u = !0);
  }
  u && qt(e.attrs, "set", "");
}
function iu(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (wr(l))
        continue;
      const u = t[l];
      let c;
      o && Pe(o, c = bn(l)) ? !s || !s.includes(c) ? n[c] = u : (i || (i = {}))[c] = u : eo(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = Le(n), u = i || Ne;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = zo(
        o,
        l,
        f,
        u[f],
        e,
        !Pe(u, f)
      );
    }
  }
  return a;
}
function zo(e, t, n, r, o, s) {
  const a = e[n];
  if (a != null) {
    const i = Pe(a, "default");
    if (i && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && Se(l)) {
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
    ] && (r === "" || r === En(n)) && (r = !0));
  }
  return r;
}
const Tm = /* @__PURE__ */ new WeakMap();
function lu(e, t, n = !1) {
  const r = n ? Tm : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!Se(e)) {
    const c = (f) => {
      l = !0;
      const [h, p] = lu(f, t, !0);
      tt(a, h), p && i.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return Fe(e) && r.set(e, Yn), Yn;
  if (he(s))
    for (let c = 0; c < s.length; c++) {
      const f = bn(s[c]);
      Ei(f) && (a[f] = Ne);
    }
  else if (s)
    for (const c in s) {
      const f = bn(c);
      if (Ei(f)) {
        const h = s[c], p = a[f] = he(h) || Se(h) ? { type: h } : tt({}, h), w = p.type;
        let S = !1, T = !0;
        if (he(w))
          for (let v = 0; v < w.length; ++v) {
            const x = w[v], y = Se(x) && x.name;
            if (y === "Boolean") {
              S = !0;
              break;
            } else y === "String" && (T = !1);
          }
        else
          S = Se(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = T, (S || Pe(p, "default")) && i.push(f);
      }
    }
  const u = [a, i];
  return Fe(e) && r.set(e, u), u;
}
function Ei(e) {
  return e[0] !== "$" && !wr(e);
}
const ka = (e) => e === "_" || e === "_ctx" || e === "$stable", Pa = (e) => he(e) ? e.map(Ut) : [Ut(e)], Om = (e, t, n) => {
  if (t._n)
    return t;
  const r = rr((...o) => Pa(t(...o)), n);
  return r._c = !1, r;
}, cu = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (ka(o)) continue;
    const s = e[o];
    if (Se(s))
      t[o] = Om(o, s, r);
    else if (s != null) {
      const a = Pa(s);
      t[o] = () => a;
    }
  }
}, uu = (e, t) => {
  const n = Pa(t);
  e.slots.default = () => n;
}, fu = (e, t, n) => {
  for (const r in t)
    (n || !ka(r)) && (e[r] = t[r]);
}, Rm = (e, t, n) => {
  const r = e.slots = ou();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (fu(r, t, n), n && cc(r, "_", o, !0)) : cu(t, r);
  } else t && uu(e, t);
}, Cm = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, a = Ne;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? s = !1 : fu(o, t, n) : (s = !t.$stable, cu(t, o)), a = t;
  } else t && (uu(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !ka(i) && a[i] == null && delete o[i];
}, gt = xm;
function Lm(e) {
  return Im(e);
}
function Im(e, t) {
  const n = zs();
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
  } = e, S = (g, _, b, P = null, I = null, M = null, Y = void 0, K = null, d = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !Pn(g, _) && (P = B(g), ve(g, I, M, !0), g = null), _.patchFlag === -2 && (d = !1, _.dynamicChildren = null);
    const { type: m, ref: L, shapeFlag: F } = _;
    switch (m) {
      case Xr:
        T(g, _, b, P);
        break;
      case ut:
        v(g, _, b, P);
        break;
      case Ao:
        g == null && x(_, b, P, Y);
        break;
      case He:
        U(
          g,
          _,
          b,
          P,
          I,
          M,
          Y,
          K,
          d
        );
        break;
      default:
        F & 1 ? C(
          g,
          _,
          b,
          P,
          I,
          M,
          Y,
          K,
          d
        ) : F & 6 ? te(
          g,
          _,
          b,
          P,
          I,
          M,
          Y,
          K,
          d
        ) : (F & 64 || F & 128) && m.process(
          g,
          _,
          b,
          P,
          I,
          M,
          Y,
          K,
          d,
          Re
        );
    }
    L != null && I ? Or(L, g && g.ref, M, _ || g, !_) : L == null && g && g.ref != null && Or(g.ref, null, M, g, !0);
  }, T = (g, _, b, P) => {
    if (g == null)
      r(
        _.el = i(_.children),
        b,
        P
      );
    else {
      const I = _.el = g.el;
      _.children !== g.children && u(I, _.children);
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
    let I;
    for (; g && g !== _; )
      I = h(g), r(g, b, P), g = I;
    r(_, b, P);
  }, E = ({ el: g, anchor: _ }) => {
    let b;
    for (; g && g !== _; )
      b = h(g), o(g), g = b;
    o(_);
  }, C = (g, _, b, P, I, M, Y, K, d) => {
    if (_.type === "svg" ? Y = "svg" : _.type === "math" && (Y = "mathml"), g == null)
      R(
        _,
        b,
        P,
        I,
        M,
        Y,
        K,
        d
      );
    else {
      const m = g.el && g.el._isVueCE ? g.el : null;
      try {
        m && m._beginPatch(), O(
          g,
          _,
          I,
          M,
          Y,
          K,
          d
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, R = (g, _, b, P, I, M, Y, K) => {
    let d, m;
    const { props: L, shapeFlag: F, transition: Z, dirs: z } = g;
    if (d = g.el = a(
      g.type,
      M,
      L && L.is,
      L
    ), F & 8 ? c(d, g.children) : F & 16 && N(
      g.children,
      d,
      null,
      P,
      I,
      So(g, M),
      Y,
      K
    ), z && Tn(g, null, P, "created"), D(d, g, g.scopeId, Y, P), L) {
      for (const $ in L)
        $ !== "value" && !wr($) && s(d, $, null, L[$], M, P);
      "value" in L && s(d, "value", null, L.value, M), (m = L.onVnodeBeforeMount) && Mt(m, P, g);
    }
    z && Tn(g, null, P, "beforeMount");
    const k = km(I, Z);
    k && Z.beforeEnter(d), r(d, _, b), ((m = L && L.onVnodeMounted) || k || z) && gt(() => {
      m && Mt(m, P, g), k && Z.enter(d), z && Tn(g, null, P, "mounted");
    }, I);
  }, D = (g, _, b, P, I) => {
    if (b && p(g, b), P)
      for (let M = 0; M < P.length; M++)
        p(g, P[M]);
    if (I) {
      let M = I.subTree;
      if (_ === M || hu(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
        const Y = I.vnode;
        D(
          g,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          I.parent
        );
      }
    }
  }, N = (g, _, b, P, I, M, Y, K, d = 0) => {
    for (let m = d; m < g.length; m++) {
      const L = g[m] = K ? hn(g[m]) : Ut(g[m]);
      S(
        null,
        L,
        _,
        b,
        P,
        I,
        M,
        Y,
        K
      );
    }
  }, O = (g, _, b, P, I, M, Y) => {
    const K = _.el = g.el;
    let { patchFlag: d, dynamicChildren: m, dirs: L } = _;
    d |= g.patchFlag & 16;
    const F = g.props || Ne, Z = _.props || Ne;
    let z;
    if (b && On(b, !1), (z = Z.onVnodeBeforeUpdate) && Mt(z, b, _, g), L && Tn(_, g, b, "beforeUpdate"), b && On(b, !0), (F.innerHTML && Z.innerHTML == null || F.textContent && Z.textContent == null) && c(K, ""), m ? j(
      g.dynamicChildren,
      m,
      K,
      b,
      P,
      So(_, I),
      M
    ) : Y || Q(
      g,
      _,
      K,
      null,
      b,
      P,
      So(_, I),
      M,
      !1
    ), d > 0) {
      if (d & 16)
        ee(K, F, Z, b, I);
      else if (d & 2 && F.class !== Z.class && s(K, "class", null, Z.class, I), d & 4 && s(K, "style", F.style, Z.style, I), d & 8) {
        const k = _.dynamicProps;
        for (let $ = 0; $ < k.length; $++) {
          const ce = k[$], Te = F[ce], $e = Z[ce];
          ($e !== Te || ce === "value") && s(K, ce, Te, $e, I, b);
        }
      }
      d & 1 && g.children !== _.children && c(K, _.children);
    } else !Y && m == null && ee(K, F, Z, b, I);
    ((z = Z.onVnodeUpdated) || L) && gt(() => {
      z && Mt(z, b, _, g), L && Tn(_, g, b, "updated");
    }, P);
  }, j = (g, _, b, P, I, M, Y) => {
    for (let K = 0; K < _.length; K++) {
      const d = g[K], m = _[K], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(d, m) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      S(
        d,
        m,
        L,
        null,
        P,
        I,
        M,
        Y,
        !0
      );
    }
  }, ee = (g, _, b, P, I) => {
    if (_ !== b) {
      if (_ !== Ne)
        for (const M in _)
          !wr(M) && !(M in b) && s(
            g,
            M,
            _[M],
            null,
            I,
            P
          );
      for (const M in b) {
        if (wr(M)) continue;
        const Y = b[M], K = _[M];
        Y !== K && M !== "value" && s(g, M, K, Y, I, P);
      }
      "value" in b && s(g, "value", _.value, b.value, I);
    }
  }, U = (g, _, b, P, I, M, Y, K, d) => {
    const m = _.el = g ? g.el : i(""), L = _.anchor = g ? g.anchor : i("");
    let { patchFlag: F, dynamicChildren: Z, slotScopeIds: z } = _;
    z && (K = K ? K.concat(z) : z), g == null ? (r(m, b, P), r(L, b, P), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      b,
      L,
      I,
      M,
      Y,
      K,
      d
    )) : F > 0 && F & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === Z.length ? (j(
      g.dynamicChildren,
      Z,
      b,
      I,
      M,
      Y,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || I && _ === I.subTree) && xa(
      g,
      _,
      !0
      /* shallow */
    )) : Q(
      g,
      _,
      b,
      L,
      I,
      M,
      Y,
      K,
      d
    );
  }, te = (g, _, b, P, I, M, Y, K, d) => {
    _.slotScopeIds = K, g == null ? _.shapeFlag & 512 ? I.ctx.activate(
      _,
      b,
      P,
      Y,
      d
    ) : ae(
      _,
      b,
      P,
      I,
      M,
      Y,
      d
    ) : fe(g, _, d);
  }, ae = (g, _, b, P, I, M, Y) => {
    const K = g.component = Hm(
      g,
      P,
      I
    );
    if (Qs(g) && (K.ctx.renderer = Re), Vm(K, !1, Y), K.asyncDep) {
      if (I && I.registerDep(K, ie, Y), !g.el) {
        const d = K.subTree = we(ut);
        v(null, d, _, b), g.placeholder = d.el;
      }
    } else
      ie(
        K,
        g,
        _,
        b,
        I,
        M,
        Y
      );
  }, fe = (g, _, b) => {
    const P = _.component = g.component;
    if (Em(g, _, b))
      if (P.asyncDep && !P.asyncResolved) {
        V(P, _, b);
        return;
      } else
        P.next = _, P.update();
    else
      _.el = g.el, P.vnode = _;
  }, ie = (g, _, b, P, I, M, Y) => {
    const K = () => {
      if (g.isMounted) {
        let { next: F, bu: Z, u: z, parent: k, vnode: $ } = g;
        {
          const Je = du(g);
          if (Je) {
            F && (F.el = $.el, V(g, F, Y)), Je.asyncDep.then(() => {
              g.isUnmounted || K();
            });
            return;
          }
        }
        let ce = F, Te;
        On(g, !1), F ? (F.el = $.el, V(g, F, Y)) : F = $, Z && _s(Z), (Te = F.props && F.props.onVnodeBeforeUpdate) && Mt(Te, k, F, $), On(g, !0);
        const $e = yi(g), st = g.subTree;
        g.subTree = $e, S(
          st,
          $e,
          // parent may have changed if it's in a teleport
          f(st.el),
          // anchor may have changed if it's in a fragment
          B(st),
          g,
          I,
          M
        ), F.el = $e.el, ce === null && wm(g, $e.el), z && gt(z, I), (Te = F.props && F.props.onVnodeUpdated) && gt(
          () => Mt(Te, k, F, $),
          I
        );
      } else {
        let F;
        const { el: Z, props: z } = _, { bm: k, m: $, parent: ce, root: Te, type: $e } = g, st = er(_);
        On(g, !1), k && _s(k), !st && (F = z && z.onVnodeBeforeMount) && Mt(F, ce, _), On(g, !0);
        {
          Te.ce && // @ts-expect-error _def is private
          Te.ce._def.shadowRoot !== !1 && Te.ce._injectChildStyle($e);
          const Je = g.subTree = yi(g);
          S(
            null,
            Je,
            b,
            P,
            g,
            I,
            M
          ), _.el = Je.el;
        }
        if ($ && gt($, I), !st && (F = z && z.onVnodeMounted)) {
          const Je = _;
          gt(
            () => Mt(F, ce, Je),
            I
          );
        }
        (_.shapeFlag & 256 || ce && er(ce.vnode) && ce.vnode.shapeFlag & 256) && g.a && gt(g.a, I), g.isMounted = !0, _ = b = P = null;
      }
    };
    g.scope.on();
    const d = g.effect = new gc(K);
    g.scope.off();
    const m = g.update = d.run.bind(d), L = g.job = d.runIfDirty.bind(d);
    L.i = g, L.id = g.uid, d.scheduler = () => Ra(L), On(g, !0), m();
  }, V = (g, _, b) => {
    _.component = g;
    const P = g.vnode.props;
    g.vnode = _, g.next = null, Am(g, _.props, P, b), Cm(g, _.children, b), Qt(), ci(g), Zt();
  }, Q = (g, _, b, P, I, M, Y, K, d = !1) => {
    const m = g && g.children, L = g ? g.shapeFlag : 0, F = _.children, { patchFlag: Z, shapeFlag: z } = _;
    if (Z > 0) {
      if (Z & 128) {
        Ce(
          m,
          F,
          b,
          P,
          I,
          M,
          Y,
          K,
          d
        );
        return;
      } else if (Z & 256) {
        _e(
          m,
          F,
          b,
          P,
          I,
          M,
          Y,
          K,
          d
        );
        return;
      }
    }
    z & 8 ? (L & 16 && de(m, I, M), F !== m && c(b, F)) : L & 16 ? z & 16 ? Ce(
      m,
      F,
      b,
      P,
      I,
      M,
      Y,
      K,
      d
    ) : de(m, I, M, !0) : (L & 8 && c(b, ""), z & 16 && N(
      F,
      b,
      P,
      I,
      M,
      Y,
      K,
      d
    ));
  }, _e = (g, _, b, P, I, M, Y, K, d) => {
    g = g || Yn, _ = _ || Yn;
    const m = g.length, L = _.length, F = Math.min(m, L);
    let Z;
    for (Z = 0; Z < F; Z++) {
      const z = _[Z] = d ? hn(_[Z]) : Ut(_[Z]);
      S(
        g[Z],
        z,
        b,
        null,
        I,
        M,
        Y,
        K,
        d
      );
    }
    m > L ? de(
      g,
      I,
      M,
      !0,
      !1,
      F
    ) : N(
      _,
      b,
      P,
      I,
      M,
      Y,
      K,
      d,
      F
    );
  }, Ce = (g, _, b, P, I, M, Y, K, d) => {
    let m = 0;
    const L = _.length;
    let F = g.length - 1, Z = L - 1;
    for (; m <= F && m <= Z; ) {
      const z = g[m], k = _[m] = d ? hn(_[m]) : Ut(_[m]);
      if (Pn(z, k))
        S(
          z,
          k,
          b,
          null,
          I,
          M,
          Y,
          K,
          d
        );
      else
        break;
      m++;
    }
    for (; m <= F && m <= Z; ) {
      const z = g[F], k = _[Z] = d ? hn(_[Z]) : Ut(_[Z]);
      if (Pn(z, k))
        S(
          z,
          k,
          b,
          null,
          I,
          M,
          Y,
          K,
          d
        );
      else
        break;
      F--, Z--;
    }
    if (m > F) {
      if (m <= Z) {
        const z = Z + 1, k = z < L ? _[z].el : P;
        for (; m <= Z; )
          S(
            null,
            _[m] = d ? hn(_[m]) : Ut(_[m]),
            b,
            k,
            I,
            M,
            Y,
            K,
            d
          ), m++;
      }
    } else if (m > Z)
      for (; m <= F; )
        ve(g[m], I, M, !0), m++;
    else {
      const z = m, k = m, $ = /* @__PURE__ */ new Map();
      for (m = k; m <= Z; m++) {
        const mt = _[m] = d ? hn(_[m]) : Ut(_[m]);
        mt.key != null && $.set(mt.key, m);
      }
      let ce, Te = 0;
      const $e = Z - k + 1;
      let st = !1, Je = 0;
      const Nt = new Array($e);
      for (m = 0; m < $e; m++) Nt[m] = 0;
      for (m = z; m <= F; m++) {
        const mt = g[m];
        if (Te >= $e) {
          ve(mt, I, M, !0);
          continue;
        }
        let St;
        if (mt.key != null)
          St = $.get(mt.key);
        else
          for (ce = k; ce <= Z; ce++)
            if (Nt[ce - k] === 0 && Pn(mt, _[ce])) {
              St = ce;
              break;
            }
        St === void 0 ? ve(mt, I, M, !0) : (Nt[St - k] = m + 1, St >= Je ? Je = St : st = !0, S(
          mt,
          _[St],
          b,
          null,
          I,
          M,
          Y,
          K,
          d
        ), Te++);
      }
      const on = st ? Pm(Nt) : Yn;
      for (ce = on.length - 1, m = $e - 1; m >= 0; m--) {
        const mt = k + m, St = _[mt], ns = _[mt + 1], q = mt + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ns.el || mu(ns)
        ) : P;
        Nt[m] === 0 ? S(
          null,
          St,
          b,
          q,
          I,
          M,
          Y,
          K,
          d
        ) : st && (ce < 0 || m !== on[ce] ? pe(St, b, q, 2) : ce--);
      }
    }
  }, pe = (g, _, b, P, I = null) => {
    const { el: M, type: Y, transition: K, children: d, shapeFlag: m } = g;
    if (m & 6) {
      pe(g.component.subTree, _, b, P);
      return;
    }
    if (m & 128) {
      g.suspense.move(_, b, P);
      return;
    }
    if (m & 64) {
      Y.move(g, _, b, Re);
      return;
    }
    if (Y === He) {
      r(M, _, b);
      for (let F = 0; F < d.length; F++)
        pe(d[F], _, b, P);
      r(g.anchor, _, b);
      return;
    }
    if (Y === Ao) {
      y(g, _, b);
      return;
    }
    if (P !== 2 && m & 1 && K)
      if (P === 0)
        K.beforeEnter(M), r(M, _, b), gt(() => K.enter(M), I);
      else {
        const { leave: F, delayLeave: Z, afterLeave: z } = K, k = () => {
          g.ctx.isUnmounted ? o(M) : r(M, _, b);
        }, $ = () => {
          M._isLeaving && M[zt](
            !0
            /* cancelled */
          ), F(M, () => {
            k(), z && z();
          });
        };
        Z ? Z(M, k, $) : $();
      }
    else
      r(M, _, b);
  }, ve = (g, _, b, P = !1, I = !1) => {
    const {
      type: M,
      props: Y,
      ref: K,
      children: d,
      dynamicChildren: m,
      shapeFlag: L,
      patchFlag: F,
      dirs: Z,
      cacheIndex: z
    } = g;
    if (F === -2 && (I = !1), K != null && (Qt(), Or(K, null, b, g, !0), Zt()), z != null && (_.renderCache[z] = void 0), L & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const k = L & 1 && Z, $ = !er(g);
    let ce;
    if ($ && (ce = Y && Y.onVnodeBeforeUnmount) && Mt(ce, _, g), L & 6)
      rt(g.component, b, P);
    else {
      if (L & 128) {
        g.suspense.unmount(b, P);
        return;
      }
      k && Tn(g, null, _, "beforeUnmount"), L & 64 ? g.type.remove(
        g,
        _,
        b,
        Re,
        P
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== He || F > 0 && F & 64) ? de(
        m,
        _,
        b,
        !1,
        !0
      ) : (M === He && F & 384 || !I && L & 16) && de(d, _, b), P && Ue(g);
    }
    ($ && (ce = Y && Y.onVnodeUnmounted) || k) && gt(() => {
      ce && Mt(ce, _, g), k && Tn(g, null, _, "unmounted");
    }, b);
  }, Ue = (g) => {
    const { type: _, el: b, anchor: P, transition: I } = g;
    if (_ === He) {
      je(b, P);
      return;
    }
    if (_ === Ao) {
      E(g);
      return;
    }
    const M = () => {
      o(b), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (g.shapeFlag & 1 && I && !I.persisted) {
      const { leave: Y, delayLeave: K } = I, d = () => Y(b, M);
      K ? K(g.el, M, d) : d();
    } else
      M();
  }, je = (g, _) => {
    let b;
    for (; g !== _; )
      b = h(g), o(g), g = b;
    o(_);
  }, rt = (g, _, b) => {
    const { bum: P, scope: I, job: M, subTree: Y, um: K, m: d, a: m } = g;
    wi(d), wi(m), P && _s(P), I.stop(), M && (M.flags |= 8, ve(Y, g, _, b)), K && gt(K, _), gt(() => {
      g.isUnmounted = !0;
    }, _);
  }, de = (g, _, b, P = !1, I = !1, M = 0) => {
    for (let Y = M; Y < g.length; Y++)
      ve(g[Y], _, b, P, I);
  }, B = (g) => {
    if (g.shapeFlag & 6)
      return B(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const _ = h(g.anchor || g.el), b = _ && _[Hc];
    return b ? h(b) : _;
  };
  let re = !1;
  const oe = (g, _, b) => {
    let P;
    g == null ? _._vnode && (ve(_._vnode, null, null, !0), P = _._vnode.component) : S(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      b
    ), _._vnode = g, re || (re = !0, ci(P), Mc(), re = !1);
  }, Re = {
    p: S,
    um: ve,
    m: pe,
    r: Ue,
    mt: ae,
    mc: N,
    pc: Q,
    pbc: j,
    n: B,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: pm(oe)
  };
}
function So({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function On({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function km(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xa(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (he(r) && he(o))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = hn(o[s]), i.el = a.el), !n && i.patchFlag !== -2 && xa(a, i)), i.type === Xr && (i.patchFlag !== -1 ? i.el = a.el : i.__elIndex = s + // take fragment start anchor into account
      (e.type === He ? 1 : 0)), i.type === ut && !i.el && (i.el = a.el);
    }
}
function Pm(e) {
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
function du(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : du(t);
}
function wi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function mu(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? mu(t.subTree) : null;
}
const hu = (e) => e.__isSuspense;
function xm(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Wd(e);
}
const He = /* @__PURE__ */ Symbol.for("v-fgt"), Xr = /* @__PURE__ */ Symbol.for("v-txt"), ut = /* @__PURE__ */ Symbol.for("v-cmt"), Ao = /* @__PURE__ */ Symbol.for("v-stc"), Cr = [];
let At = null;
function ge(e = !1) {
  Cr.push(At = e ? null : []);
}
function Nm() {
  Cr.pop(), At = Cr[Cr.length - 1] || null;
}
let Ur = 1;
function xs(e, t = !1) {
  Ur += e, e < 0 && At && t && (At.hasOnce = !0);
}
function pu(e) {
  return e.dynamicChildren = Ur > 0 ? At || Yn : null, Nm(), Ur > 0 && At && At.push(e), e;
}
function Ae(e, t, n, r, o, s) {
  return pu(
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
function _n(e, t, n, r, o) {
  return pu(
    we(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function $r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gu = ({ key: e }) => e ?? null, ys = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || Be(e) || Se(e) ? { i: ft, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, r = 0, o = null, s = e === He ? 0 : 1, a = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gu(t),
    ref: t && ys(t),
    scopeId: Fc,
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
  return i ? (Na(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ze(n) ? 8 : 16), Ur > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && At.push(l), l;
}
const we = Mm;
function Mm(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === im) && (e = ut), $r(e)) {
    const i = yn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Na(i, n), Ur > 0 && !s && At && (i.shapeFlag & 6 ? At[At.indexOf(e)] = i : At.push(i)), i.patchFlag = -2, i;
  }
  if (Gm(e) && (e = e.__vccOpts), t) {
    t = Dm(t);
    let { class: i, style: l } = t;
    i && !ze(i) && (t.class = Ke(i)), Fe(l) && (Xs(l) && !he(l) && (l = tt({}, l)), t.style = ur(l));
  }
  const a = ze(e) ? 1 : hu(e) ? 128 : Vc(e) ? 64 : Fe(e) ? 4 : Se(e) ? 2 : 0;
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
function Dm(e) {
  return e ? Xs(e) || au(e) ? tt({}, e) : e : null;
}
function yn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, u = t ? Fm(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && gu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? he(s) ? s.concat(ys(t)) : [s, ys(t)] : ys(t)
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
    ssContent: e.ssContent && yn(e.ssContent),
    ssFallback: e.ssFallback && yn(e.ssFallback),
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
  return we(Xr, null, e, t);
}
function Ze(e = "", t = !1) {
  return t ? (ge(), _n(ut, null, e)) : we(ut, null, e);
}
function Ut(e) {
  return e == null || typeof e == "boolean" ? we(ut) : he(e) ? we(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : $r(e) ? hn(e) : we(Xr, null, String(e));
}
function hn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yn(e);
}
function Na(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (he(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Na(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !au(t) ? t._ctx = ft : o === 3 && ft && (ft.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Se(t) ? (t = { default: t, _ctx: ft }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Fm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ke([t.class, r.class]));
      else if (o === "style")
        t.style = ur([t.style, r.style]);
      else if (Bs(o)) {
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
const Um = nu();
let $m = 0;
function Hm(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Um, s = {
    uid: $m++,
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
    scope: new mc(
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
    propsOptions: lu(r, o),
    emitsOptions: ru(r, o),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = _m.bind(null, s), e.ce && e.ce(s), s;
}
let bt = null;
const tn = () => bt || ft;
let Ns, qo;
{
  const e = zs(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  Ns = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bt = n
  ), qo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Hr = n
  );
}
const Jr = (e) => {
  const t = bt;
  return Ns(e), e.scope.on(), () => {
    e.scope.off(), Ns(t);
  };
}, Si = () => {
  bt && bt.scope.off(), Ns(null);
};
function _u(e) {
  return e.vnode.shapeFlag & 4;
}
let Hr = !1;
function Vm(e, t = !1, n = !1) {
  t && qo(t);
  const { props: r, children: o } = e.vnode, s = _u(e);
  Sm(e, r, s, t), Rm(e, o, n || t);
  const a = s ? jm(e, t) : void 0;
  return t && qo(!1), a;
}
function jm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lm);
  const { setup: r } = n;
  if (r) {
    Qt();
    const o = e.setupContext = r.length > 1 ? Wm(e) : null, s = Jr(e), a = qr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = oc(a);
    if (Zt(), s(), (i || e.sp) && !er(e) && Yc(e), i) {
      if (a.then(Si, Si), t)
        return a.then((l) => {
          Ai(e, l);
        }).catch((l) => {
          Js(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ai(e, a);
  } else
    bu(e);
}
function Ai(e, t, n) {
  Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = Pc(t)), bu(e);
}
function bu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ht);
  {
    const o = Jr(e);
    Qt();
    try {
      cm(e);
    } finally {
      Zt(), o();
    }
  }
}
const Bm = {
  get(e, t) {
    return ct(e, "get", ""), e[t];
  }
};
function Wm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function to(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pc(Oa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rr)
        return Rr[n](e);
    },
    has(t, n) {
      return n in t || n in Rr;
    }
  })) : e.proxy;
}
function Gm(e) {
  return Se(e) && "__vccOpts" in e;
}
const be = (e, t) => $d(e, t, Hr);
function Vr(e, t, n) {
  try {
    xs(-1);
    const r = arguments.length;
    return r === 2 ? Fe(t) && !he(t) ? $r(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && $r(n) && (n = [n]), we(e, t, n));
  } finally {
    xs(1);
  }
}
const Km = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yo;
const Ti = typeof window < "u" && window.trustedTypes;
if (Ti)
  try {
    Yo = /* @__PURE__ */ Ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yu = Yo ? (e) => Yo.createHTML(e) : (e) => e, zm = "http://www.w3.org/2000/svg", qm = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Oi = Kt && /* @__PURE__ */ Kt.createElement("template"), Ym = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(zm, e) : t === "mathml" ? Kt.createElementNS(qm, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
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
      Oi.innerHTML = yu(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Oi.content;
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
}, an = "transition", _r = "animation", sr = /* @__PURE__ */ Symbol("_vtc"), vu = {
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
}, Eu = /* @__PURE__ */ tt(
  {},
  Gc,
  vu
), Xm = (e) => (e.displayName = "Transition", e.props = Eu, e), wu = /* @__PURE__ */ Xm(
  (e, { slots: t }) => Vr(Qd, Su(e), t)
), Rn = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ri = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Su(e) {
  const t = {};
  for (const U in e)
    U in vu || (t[U] = e[U]);
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
  } = e, w = Jm(o), S = w && w[0], T = w && w[1], {
    onBeforeEnter: v,
    onEnter: x,
    onEnterCancelled: y,
    onLeave: E,
    onLeaveCancelled: C,
    onBeforeAppear: R = v,
    onAppear: D = x,
    onAppearCancelled: N = y
  } = t, O = (U, te, ae, fe) => {
    U._enterCancelled = fe, cn(U, te ? c : i), cn(U, te ? u : a), ae && ae();
  }, j = (U, te) => {
    U._isLeaving = !1, cn(U, f), cn(U, p), cn(U, h), te && te();
  }, ee = (U) => (te, ae) => {
    const fe = U ? D : x, ie = () => O(te, U, ae);
    Rn(fe, [te, ie]), Ci(() => {
      cn(te, U ? l : s), Dt(te, U ? c : i), Ri(fe) || Li(te, r, S, ie);
    });
  };
  return tt(t, {
    onBeforeEnter(U) {
      Rn(v, [U]), Dt(U, s), Dt(U, a);
    },
    onBeforeAppear(U) {
      Rn(R, [U]), Dt(U, l), Dt(U, u);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(U, te) {
      U._isLeaving = !0;
      const ae = () => j(U, te);
      Dt(U, f), U._enterCancelled ? (Dt(U, h), Xo(U)) : (Xo(U), Dt(U, h)), Ci(() => {
        U._isLeaving && (cn(U, f), Dt(U, p), Ri(E) || Li(U, r, T, ae));
      }), Rn(E, [U, ae]);
    },
    onEnterCancelled(U) {
      O(U, !1, void 0, !0), Rn(y, [U]);
    },
    onAppearCancelled(U) {
      O(U, !0, void 0, !0), Rn(N, [U]);
    },
    onLeaveCancelled(U) {
      j(U), Rn(C, [U]);
    }
  });
}
function Jm(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [To(e.enter), To(e.leave)];
  {
    const t = To(e);
    return [t, t];
  }
}
function To(e) {
  return ad(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sr] || (e[sr] = /* @__PURE__ */ new Set())).add(t);
}
function cn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[sr];
  n && (n.delete(t), n.size || (e[sr] = void 0));
}
function Ci(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qm = 0;
function Li(e, t, n, r) {
  const o = e._endId = ++Qm, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = Au(e, t);
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
function Au(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), o = r(`${an}Delay`), s = r(`${an}Duration`), a = Ii(o, s), i = r(`${_r}Delay`), l = r(`${_r}Duration`), u = Ii(i, l);
  let c = null, f = 0, h = 0;
  t === an ? a > 0 && (c = an, f = a, h = s.length) : t === _r ? u > 0 && (c = _r, f = u, h = l.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? an : _r : null, h = c ? c === an ? s.length : l.length : 0);
  const p = c === an && /\b(?:transform|all)(?:,|$)/.test(
    r(`${an}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: h,
    hasTransform: p
  };
}
function Ii(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ki(n) + ki(e[r])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Zm(e, t, n) {
  const r = e[sr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Pi = /* @__PURE__ */ Symbol("_vod"), eh = /* @__PURE__ */ Symbol("_vsh"), th = /* @__PURE__ */ Symbol(""), nh = /(?:^|;)\s*display\s*:/;
function rh(e, t, n) {
  const r = e.style, o = ze(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (ze(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && vs(r, i, "");
        }
      else
        for (const a in t)
          n[a] == null && vs(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), vs(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[th];
      a && (n += ";" + a), r.cssText = n, s = nh.test(n);
    }
  } else t && e.removeAttribute("style");
  Pi in e && (e[Pi] = s ? r.display : "", e[eh] && (r.display = "none"));
}
const xi = /\s*!important$/;
function vs(e, t, n) {
  if (he(n))
    n.forEach((r) => vs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = sh(e, t);
    xi.test(n) ? e.setProperty(
      En(r),
      n.replace(xi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ni = ["Webkit", "Moz", "ms"], Oo = {};
function sh(e, t) {
  const n = Oo[t];
  if (n)
    return n;
  let r = bn(t);
  if (r !== "filter" && r in e)
    return Oo[t] = r;
  r = lc(r);
  for (let o = 0; o < Ni.length; o++) {
    const s = Ni[o] + r;
    if (s in e)
      return Oo[t] = s;
  }
  return t;
}
const Mi = "http://www.w3.org/1999/xlink";
function Di(e, t, n, r, o, s = dd(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mi, t.slice(6, t.length)) : e.setAttributeNS(Mi, t, n) : n == null || s && !uc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : nn(n) ? String(n) : n
  );
}
function Fi(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yu(n) : n);
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
    i === "boolean" ? n = uc(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
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
function oh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ui = /* @__PURE__ */ Symbol("_vei");
function ah(e, t, n, r, o = null) {
  const s = e[Ui] || (e[Ui] = {}), a = s[t];
  if (r && a)
    a.value = r;
  else {
    const [i, l] = ih(t);
    if (r) {
      const u = s[t] = uh(
        r,
        o
      );
      Kn(e, i, u, l);
    } else a && (oh(e, i, a, l), s[t] = void 0);
  }
}
const $i = /(?:Once|Passive|Capture)$/;
function ih(e) {
  let t;
  if ($i.test(e)) {
    t = {};
    let r;
    for (; r = e.match($i); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t];
}
let Ro = 0;
const lh = /* @__PURE__ */ Promise.resolve(), ch = () => Ro || (lh.then(() => Ro = 0), Ro = Date.now());
function uh(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Pt(
      fh(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ch(), n;
}
function fh(e, t) {
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
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dh = (e, t, n, r, o, s) => {
  const a = o === "svg";
  t === "class" ? Zm(e, r, a) : t === "style" ? rh(e, n, r) : Bs(t) ? ga(t) || ah(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mh(e, t, r, a)) ? (Fi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, r, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ze(r)) ? Fi(e, bn(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Di(e, t, r, a));
};
function mh(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && Se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Hi(t) && ze(n) ? !1 : t in e;
}
const Tu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ Symbol("_moveCb"), Vi = /* @__PURE__ */ Symbol("_enterCb"), hh = (e) => (delete e.props.mode, e), ph = /* @__PURE__ */ hh({
  name: "TransitionGroup",
  props: /* @__PURE__ */ tt({}, Eu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = tn(), r = Wc();
    let o, s;
    return Qc(() => {
      if (!o.length)
        return;
      const a = e.moveClass || `${e.name || "v"}-move`;
      if (!vh(
        o[0].el,
        n.vnode.el,
        a
      )) {
        o = [];
        return;
      }
      o.forEach(_h), o.forEach(bh);
      const i = o.filter(yh);
      Xo(n.vnode.el), i.forEach((l) => {
        const u = l.el, c = u.style;
        Dt(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[Ms] = (h) => {
          h && h.target !== u || (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ms] = null, cn(u, a));
        };
        u.addEventListener("transitionend", f);
      }), o = [];
    }), () => {
      const a = Le(e), i = Su(a);
      let l = a.tag || He;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Un(
            c,
            Fr(
              c,
              i,
              r,
              n
            )
          ), Tu.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      s = t.default ? La(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && Un(
          c,
          Fr(c, i, r, n)
        );
      }
      return we(l, null, s);
    };
  }
}), gh = ph;
function _h(e) {
  const t = e.el;
  t[Ms] && t[Ms](), t[Vi] && t[Vi]();
}
function bh(e) {
  Ou.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function yh(e) {
  const t = Tu.get(e), n = Ou.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function vh(e, t, n) {
  const r = e.cloneNode(), o = e[sr];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: a } = Au(r);
  return s.removeChild(r), a;
}
const ji = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => _s(t, n) : t;
};
function Eh(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Co = /* @__PURE__ */ Symbol("_assign");
function Wi(e, t, n) {
  return t && (e = e.trim()), n && (e = ba(e)), e;
}
const Jo = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Co] = ji(o);
    const s = r || o.props && o.props.type === "number";
    Kn(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Co](Wi(e.value, n, s));
    }), (n || s) && Kn(e, "change", () => {
      e.value = Wi(e.value, n, s);
    }), t || (Kn(e, "compositionstart", Eh), Kn(e, "compositionend", Bi), Kn(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, a) {
    if (e[Co] = ji(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? ba(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, wh = ["ctrl", "shift", "alt", "meta"], Sh = {
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
  exact: (e, t) => wh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = Sh[t[a]];
      if (i && i(o, t)) return;
    }
    return e(o, ...s);
  }));
}, Ah = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Lr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((o) => {
    if (!("key" in o))
      return;
    const s = En(o.key);
    if (t.some(
      (a) => a === s || Ah[a] === s
    ))
      return e(o);
  }));
}, Th = /* @__PURE__ */ tt({ patchProp: dh }, Ym);
let Gi;
function Oh() {
  return Gi || (Gi = Lm(Th));
}
const Rh = ((...e) => {
  const t = Oh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Lh(r);
    if (!o) return;
    const s = t._component;
    !Se(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, Ch(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
});
function Ch(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Lh(e) {
  return ze(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ru;
const no = (e) => Ru = e, Cu = (
  /* istanbul ignore next */
  Symbol()
);
function Qo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ir;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ir || (Ir = {}));
function Ih() {
  const e = ya(!0), t = e.run(() => X({}));
  let n = [], r = [];
  const o = Oa({
    install(s) {
      no(o), o._a = s, s.provide(Cu, o), s.config.globalProperties.$pinia = o, r.forEach((a) => n.push(a)), r = [];
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
const Lu = () => {
};
function Ki(e, t, n, r = Lu) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && hc() && pc(o), o;
}
function jn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const kh = (e) => e(), zi = Symbol(), Lo = Symbol();
function Zo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Qo(o) && Qo(r) && e.hasOwnProperty(n) && !Be(r) && !Jt(r) ? e[n] = Zo(o, r) : e[n] = r;
  }
  return e;
}
const Ph = (
  /* istanbul ignore next */
  Symbol()
);
function xh(e) {
  return !Qo(e) || !e.hasOwnProperty(Ph);
}
const { assign: un } = Object;
function Nh(e) {
  return !!(Be(e) && e.effect);
}
function Mh(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = o ? o() : {});
    const c = Md(n.state.value[e]);
    return un(c, s, Object.keys(a || {}).reduce((f, h) => (f[h] = Oa(be(() => {
      no(n);
      const p = n._s.get(e);
      return a[h].call(p, p);
    })), f), {}));
  }
  return l = Iu(e, u, t, n, r, !0), l;
}
function Iu(e, t, n = {}, r, o, s) {
  let a;
  const i = un({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], h = [], p;
  const w = r.state.value[e];
  !s && !w && (r.state.value[e] = {}), X({});
  let S;
  function T(N) {
    let O;
    u = c = !1, typeof N == "function" ? (N(r.state.value[e]), O = {
      type: Ir.patchFunction,
      storeId: e,
      events: p
    }) : (Zo(r.state.value[e], N), O = {
      type: Ir.patchObject,
      payload: N,
      storeId: e,
      events: p
    });
    const j = S = Symbol();
    Qn().then(() => {
      S === j && (u = !0);
    }), c = !0, jn(f, O, r.state.value[e]);
  }
  const v = s ? function() {
    const { state: O } = n, j = O ? O() : {};
    this.$patch((ee) => {
      un(ee, j);
    });
  } : (
    /* istanbul ignore next */
    Lu
  );
  function x() {
    a.stop(), f = [], h = [], r._s.delete(e);
  }
  const y = (N, O = "") => {
    if (zi in N)
      return N[Lo] = O, N;
    const j = function() {
      no(r);
      const ee = Array.from(arguments), U = [], te = [];
      function ae(V) {
        U.push(V);
      }
      function fe(V) {
        te.push(V);
      }
      jn(h, {
        args: ee,
        name: j[Lo],
        store: C,
        after: ae,
        onError: fe
      });
      let ie;
      try {
        ie = N.apply(this && this.$id === e ? this : C, ee);
      } catch (V) {
        throw jn(te, V), V;
      }
      return ie instanceof Promise ? ie.then((V) => (jn(U, V), V)).catch((V) => (jn(te, V), Promise.reject(V))) : (jn(U, ie), ie);
    };
    return j[zi] = !0, j[Lo] = O, j;
  }, E = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ki.bind(null, h),
    $patch: T,
    $reset: v,
    $subscribe(N, O = {}) {
      const j = Ki(f, N, O.detached, () => ee()), ee = a.run(() => yt(() => r.state.value[e], (U) => {
        (O.flush === "sync" ? c : u) && N({
          storeId: e,
          type: Ir.direct,
          events: p
        }, U);
      }, un({}, l, O)));
      return j;
    },
    $dispose: x
  }, C = Ys(E);
  r._s.set(e, C);
  const D = (r._a && r._a.runWithContext || kh)(() => r._e.run(() => (a = ya()).run(() => t({ action: y }))));
  for (const N in D) {
    const O = D[N];
    if (Be(O) && !Nh(O) || Jt(O))
      s || (w && xh(O) && (Be(O) ? O.value = w[N] : Zo(O, w[N])), r.state.value[e][N] = O);
    else if (typeof O == "function") {
      const j = y(O, N);
      D[N] = j, i.actions[N] = O;
    }
  }
  return un(C, D), un(Le(C), D), Object.defineProperty(C, "$state", {
    get: () => r.state.value[e],
    set: (N) => {
      T((O) => {
        un(O, N);
      });
    }
  }), r._p.forEach((N) => {
    un(C, a.run(() => N({
      store: C,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), w && s && n.hydrate && n.hydrate(C.$state, w), u = !0, c = !0, C;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ma(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);
  function a(i, l) {
    const u = Kd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? Zn(Cu, null) : null), i && no(i), i = Ru, i._s.has(r) || (s ? Iu(r, t, o, i) : Mh(r, o, i)), i._s.get(r);
  }
  return a.$id = r, a;
}
const Dh = ["stroke-width"], Fh = ["d"], Ge = /* @__PURE__ */ rn({
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
    return (s, a) => (ge(), Ae("svg", {
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
      }, null, 8, Fh)
    ], 10, Dh));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Uh(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ds = typeof window < "u", wn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), $h = (e, t, n) => Hh({ l: e, k: t, s: n }), Hh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), Vh = (e) => Pu(e) === "[object Date]", vn = (e) => Pu(e) === "[object RegExp]", ro = (e) => ye(e) && Object.keys(e).length === 0, at = Object.assign, jh = Object.create, xe = (e = null) => jh(e);
let qi;
const xn = () => qi || (qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : xe());
function Yi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Xi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Bh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, s) => `${o}="${Xi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, s) => `${o}='${Xi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Wh = Object.prototype.hasOwnProperty;
function Lt(e, t) {
  return Wh.call(e, t);
}
const Ve = Array.isArray, De = (e) => typeof e == "function", se = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", ke = (e) => e !== null && typeof e == "object", Gh = (e) => ke(e) && De(e.then) && De(e.catch), ku = Object.prototype.toString, Pu = (e) => ku.call(e), ye = (e) => {
  if (!ke(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Kh = (e) => e == null ? "" : Ve(e) || ye(e) && e.toString === ku ? JSON.stringify(e, null, 2) : String(e);
function zh(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function so(e) {
  let t = e;
  return () => ++t;
}
const cs = (e) => !ke(e) || Ve(e);
function Es(e, t) {
  if (cs(e) || cs(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((s) => {
      s !== "__proto__" && (ke(r[s]) && !ke(o[s]) && (o[s] = Array.isArray(r[s]) ? [] : xe()), cs(o[s]) || cs(r[s]) ? o[s] = r[s] : n.push({ src: r[s], des: o[s] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Fs(e, t, n) {
  return { start: e, end: t };
}
const Yh = /\{([0-9a-zA-Z]+)\}/g;
function xu(e, ...t) {
  return t.length === 1 && Xh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Yh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Nu = Object.assign, Ji = (e) => typeof e == "string", Xh = (e) => e !== null && typeof e == "object";
function Mu(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Da = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Jh = {
  [Da.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Qh(e, t, ...n) {
  const r = xu(Jh[e], ...n || []), o = { message: String(r), code: e };
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
}, Zh = {
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
  const { domain: r, messages: o, args: s } = n, a = xu((o || Zh)[e] || "", ...s || []), i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function ep(e) {
  throw e;
}
const Wt = " ", tp = "\r", pt = `
`, np = "\u2028", rp = "\u2029";
function sp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, s = 0;
  const a = (D) => t[D] === tp && t[D + 1] === pt, i = (D) => t[D] === pt, l = (D) => t[D] === rp, u = (D) => t[D] === np, c = (D) => a(D) || i(D) || l(D) || u(D), f = () => n, h = () => r, p = () => o, w = () => s, S = (D) => a(D) || l(D) || u(D) ? pt : t[D], T = () => S(n), v = () => S(n + s);
  function x() {
    return s = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function y() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, r = 1, o = 1, s = 0;
  }
  function C(D = 0) {
    s = D;
  }
  function R() {
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
    resetPeek: C,
    skipToPeek: R
  };
}
const ln = void 0, op = ".", Qi = "'", ap = "tokenizer";
function ip(e, t = {}) {
  const n = t.location !== !1, r = sp(e), o = () => r.index(), s = () => qh(r.line(), r.column(), r.index()), a = s(), i = o(), l = {
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
  function f(d, m, L, ...F) {
    const Z = u();
    if (m.column += L, m.offset += L, c) {
      const z = n ? Fs(Z.startLoc, m) : null, k = dr(d, z, {
        domain: ap,
        args: F
      });
      c(k);
    }
  }
  function h(d, m, L) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return n && (F.loc = Fs(d.startLoc, d.endLoc)), L != null && (F.value = L), F;
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
    if (d === ln)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function x(d) {
    if (d === ln)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function y(d, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    S(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function E(d, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), Z = x(F);
    return d.resetPeek(), Z;
  }
  function C(d, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    S(d);
    const F = d.currentPeek() === Qi;
    return d.resetPeek(), F;
  }
  function R(d, m) {
    const { currentType: L } = m;
    if (L !== 8)
      return !1;
    S(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function D(d, m) {
    const { currentType: L } = m;
    if (L !== 9)
      return !1;
    S(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function N(d, m) {
    const { currentType: L } = m;
    if (!(L === 8 || L === 12))
      return !1;
    S(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function O(d, m) {
    const { currentType: L } = m;
    if (L !== 10)
      return !1;
    const F = () => {
      const z = d.currentPeek();
      return z === "{" ? v(d.peek()) : z === "@" || z === "%" || z === "|" || z === ":" || z === "." || z === Wt || !z ? !1 : z === pt ? (d.peek(), F()) : U(d, !1);
    }, Z = F();
    return d.resetPeek(), Z;
  }
  function j(d) {
    S(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function ee(d) {
    const m = S(d), L = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: L,
      hasSpace: m.length > 0
    };
  }
  function U(d, m = !0) {
    const L = (Z = !1, z = "", k = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? z === "%" ? !1 : Z : $ === "@" || !$ ? z === "%" ? !0 : Z : $ === "%" ? (d.peek(), L(Z, "%", !0)) : $ === "|" ? z === "%" || k ? !0 : !(z === Wt || z === pt) : $ === Wt ? (d.peek(), L(!0, Wt, k)) : $ === pt ? (d.peek(), L(!0, pt, k)) : !0;
    }, F = L();
    return m && d.resetPeek(), F;
  }
  function te(d, m) {
    const L = d.currentChar();
    return L === ln ? ln : m(L) ? (d.next(), L) : null;
  }
  function ae(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function fe(d) {
    return te(d, ae);
  }
  function ie(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function V(d) {
    return te(d, ie);
  }
  function Q(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function _e(d) {
    return te(d, Q);
  }
  function Ce(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function pe(d) {
    return te(d, Ce);
  }
  function ve(d) {
    let m = "", L = "";
    for (; m = _e(d); )
      L += m;
    return L;
  }
  function Ue(d) {
    T(d);
    const m = d.currentChar();
    return m !== "%" && f(me.EXPECTED_TOKEN, s(), 0, m), d.next(), "%";
  }
  function je(d) {
    let m = "";
    for (; ; ) {
      const L = d.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (U(d))
          m += L, d.next();
        else
          break;
      else if (L === Wt || L === pt)
        if (U(d))
          m += L, d.next();
        else {
          if (j(d))
            break;
          m += L, d.next();
        }
      else
        m += L, d.next();
    }
    return m;
  }
  function rt(d) {
    T(d);
    let m = "", L = "";
    for (; m = V(d); )
      L += m;
    return d.currentChar() === ln && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), L;
  }
  function de(d) {
    T(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${ve(d)}`) : m += ve(d), d.currentChar() === ln && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function B(d) {
    return d !== Qi && d !== pt;
  }
  function re(d) {
    T(d), w(d, "'");
    let m = "", L = "";
    for (; m = te(d, B); )
      m === "\\" ? L += oe(d) : L += m;
    const F = d.currentChar();
    return F === pt || F === ln ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === pt && (d.next(), w(d, "'")), L) : (w(d, "'"), L);
  }
  function oe(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Re(d, m, 4);
      case "U":
        return Re(d, m, 6);
      default:
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Re(d, m, L) {
    w(d, m);
    let F = "";
    for (let Z = 0; Z < L; Z++) {
      const z = pe(d);
      if (!z) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += z;
    }
    return `\\${m}${F}`;
  }
  function qe(d) {
    return d !== "{" && d !== "}" && d !== Wt && d !== pt;
  }
  function g(d) {
    T(d);
    let m = "", L = "";
    for (; m = te(d, qe); )
      L += m;
    return L;
  }
  function _(d) {
    let m = "", L = "";
    for (; m = fe(d); )
      L += m;
    return L;
  }
  function b(d) {
    const m = (L) => {
      const F = d.currentChar();
      return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Wt ? L : (L += F, d.next(), m(L));
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
  function I(d, m) {
    let L = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), L = h(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(d), m.braceNest++, L;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && f(me.EMPTY_PLACEHOLDER, s(), 0), d.next(), L = h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && T(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), L;
      case "@":
        return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), L = M(d, m) || p(m), m.braceNest = 0, L;
      default: {
        let Z = !0, z = !0, k = !0;
        if (j(d))
          return m.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), L = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, L;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, Y(d, m);
        if (Z = y(d, m))
          return L = h(m, 5, rt(d)), T(d), L;
        if (z = E(d, m))
          return L = h(m, 6, de(d)), T(d), L;
        if (k = C(d, m))
          return L = h(m, 7, re(d)), T(d), L;
        if (!Z && !z && !k)
          return L = h(m, 13, g(d)), f(me.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L.value), T(d), L;
        break;
      }
    }
    return L;
  }
  function M(d, m) {
    const { currentType: L } = m;
    let F = null;
    const Z = d.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (Z === pt || Z === Wt) && f(me.INVALID_LINKED_FORMAT, s(), 0), Z) {
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
        return j(d) ? (F = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, F) : R(d, m) || N(d, m) ? (T(d), M(d, m)) : D(d, m) ? (T(d), h(m, 12, _(d))) : O(d, m) ? (T(d), Z === "{" ? I(d, m) || F : h(m, 11, b(d))) : (L === 8 && f(me.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, Y(d, m));
    }
  }
  function Y(d, m) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return I(d, m) || p(m);
    if (m.inLinked)
      return M(d, m) || p(m);
    switch (d.currentChar()) {
      case "{":
        return I(d, m) || p(m);
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
          return L = h(m, 1, P(d)), m.braceNest = 0, m.inLinked = !1, L;
        const { isModulo: Z, hasSpace: z } = ee(d);
        if (Z)
          return z ? h(m, 0, je(d)) : h(m, 4, Ue(d));
        if (U(d))
          return h(m, 0, je(d));
        break;
      }
    }
    return L;
  }
  function K() {
    const { currentType: d, offset: m, startLoc: L, endLoc: F } = l;
    return l.lastType = d, l.lastOffset = m, l.lastStartLoc = L, l.lastEndLoc = F, l.offset = o(), l.startLoc = s(), r.currentChar() === ln ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : Y(r, l);
  }
  return {
    nextToken: K,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const lp = "parser", cp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function up(e, t, n) {
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
function fp(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(y, E, C, R, ...D) {
    const N = y.currentPosition();
    if (N.offset += R, N.column += R, n) {
      const O = t ? Fs(C, N) : null, j = dr(E, O, {
        domain: lp,
        args: D
      });
      n(j);
    }
  }
  function s(y, E, C, R, ...D) {
    const N = y.currentPosition();
    if (N.offset += R, N.column += R, r) {
      const O = t ? Fs(C, N) : null;
      r(Qh(E, O, D));
    }
  }
  function a(y, E, C) {
    const R = { type: y };
    return t && (R.start = E, R.end = E, R.loc = { start: C, end: C }), R;
  }
  function i(y, E, C, R) {
    t && (y.end = E, y.loc && (y.loc.end = C));
  }
  function l(y, E) {
    const C = y.context(), R = a(3, C.offset, C.startLoc);
    return R.value = E, i(R, y.currentOffset(), y.currentPosition()), R;
  }
  function u(y, E) {
    const C = y.context(), { lastOffset: R, lastStartLoc: D } = C, N = a(5, R, D);
    return N.index = parseInt(E, 10), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function c(y, E, C) {
    const R = y.context(), { lastOffset: D, lastStartLoc: N } = R, O = a(4, D, N);
    return O.key = E, C === !0 && (O.modulo = !0), y.nextToken(), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function f(y, E) {
    const C = y.context(), { lastOffset: R, lastStartLoc: D } = C, N = a(9, R, D);
    return N.value = E.replace(cp, up), y.nextToken(), i(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const E = y.nextToken(), C = y.context(), { lastOffset: R, lastStartLoc: D } = C, N = a(8, R, D);
    return E.type !== 12 ? (o(y, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), N.value = "", i(N, R, D), {
      nextConsumeToken: E,
      node: N
    }) : (E.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ct(E)), N.value = E.value || "", i(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function p(y, E) {
    const C = y.context(), R = a(7, C.offset, C.startLoc);
    return R.value = E, i(R, y.currentOffset(), y.currentPosition()), R;
  }
  function w(y) {
    const E = y.context(), C = a(6, E.offset, E.startLoc);
    let R = y.nextToken();
    if (R.type === 9) {
      const D = h(y);
      C.modifier = D.node, R = D.nextConsumeToken || y.nextToken();
    }
    switch (R.type !== 10 && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(R)), R = y.nextToken(), R.type === 2 && (R = y.nextToken()), R.type) {
      case 11:
        R.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(R)), C.key = p(y, R.value || "");
        break;
      case 5:
        R.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(R)), C.key = c(y, R.value || "");
        break;
      case 6:
        R.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(R)), C.key = u(y, R.value || "");
        break;
      case 7:
        R.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(R)), C.key = f(y, R.value || "");
        break;
      default: {
        o(y, me.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const D = y.context(), N = a(7, D.offset, D.startLoc);
        return N.value = "", i(N, D.offset, D.startLoc), C.key = N, i(C, D.offset, D.startLoc), {
          nextConsumeToken: R,
          node: C
        };
      }
    }
    return i(C, y.currentOffset(), y.currentPosition()), {
      node: C
    };
  }
  function S(y) {
    const E = y.context(), C = E.currentType === 1 ? y.currentOffset() : E.offset, R = E.currentType === 1 ? E.endLoc : E.startLoc, D = a(2, C, R);
    D.items = [];
    let N = null, O = null;
    do {
      const U = N || y.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(U)), D.items.push(l(y, U.value || ""));
          break;
        case 6:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(U)), D.items.push(u(y, U.value || ""));
          break;
        case 4:
          O = !0;
          break;
        case 5:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(U)), D.items.push(c(y, U.value || "", !!O)), O && (s(y, Da.USE_MODULO_SYNTAX, E.lastStartLoc, 0, Ct(U)), O = null);
          break;
        case 7:
          U.value == null && o(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ct(U)), D.items.push(f(y, U.value || ""));
          break;
        case 8: {
          const te = w(y);
          D.items.push(te.node), N = te.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    const j = E.currentType === 1 ? E.lastOffset : y.currentOffset(), ee = E.currentType === 1 ? E.lastEndLoc : y.currentPosition();
    return i(D, j, ee), D;
  }
  function T(y, E, C, R) {
    const D = y.context();
    let N = R.items.length === 0;
    const O = a(1, E, C);
    O.cases = [], O.cases.push(R);
    do {
      const j = S(y);
      N || (N = j.items.length === 0), O.cases.push(j);
    } while (D.currentType !== 14);
    return N && o(y, me.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), i(O, y.currentOffset(), y.currentPosition()), O;
  }
  function v(y) {
    const E = y.context(), { offset: C, startLoc: R } = E, D = S(y);
    return E.currentType === 14 ? D : T(y, C, R, D);
  }
  function x(y) {
    const E = ip(y, Nu({}, e)), C = E.context(), R = a(0, C.offset, C.startLoc);
    return t && R.loc && (R.loc.source = y), R.body = v(E), e.onCacheKey && (R.cacheKey = e.onCacheKey(y)), C.currentType !== 14 && o(E, me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, y[C.offset] || ""), i(R, E.currentOffset(), E.currentPosition()), R;
  }
  return { parse: x };
}
function Ct(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function dp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Zi(e, t) {
  for (let n = 0; n < e.length; n++)
    Fa(e[n], t);
}
function Fa(e, t) {
  switch (e.type) {
    case 1:
      Zi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Zi(e.items, t);
      break;
    case 6: {
      Fa(e.key, t), t.helper(
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
function mp(e, t = {}) {
  const n = dp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Fa(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function hp(e) {
  const t = e.body;
  return t.type === 2 ? el(t) : t.cases.forEach((n) => el(n)), e;
}
function el(e) {
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
      e.static = Mu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const pp = "minifier";
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
      throw dr(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: pp,
        args: [e.type]
      });
  }
  delete e.type;
}
const gp = "parser";
function _p(e, t) {
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
function bp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), or(e, t.key), t.modifier ? (e.push(", "), or(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function yp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (or(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function vp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (or(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Ep(e, t) {
  t.body ? or(e, t.body) : e.push("null");
}
function or(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ep(e, t);
      break;
    case 1:
      vp(e, t);
      break;
    case 2:
      yp(e, t);
      break;
    case 6:
      bp(e, t);
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
        domain: gp,
        args: [t.type]
      });
  }
}
const wp = (e, t = {}) => {
  const n = Ji(t.mode) ? t.mode : "normal", r = Ji(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = _p(e, {
    filename: r,
    breakLineCode: o,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${Mu(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), or(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Sp(e, t = {}) {
  const n = Nu({}, t), r = !!n.jit, o = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = fp(n).parse(e);
  return r ? (s && hp(i), o && zn(i), { ast: i, code: "" }) : (mp(i, n), wp(i, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ap() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Vt(e) {
  return ke(e) && Ua(e) === 0 && (Lt(e, "b") || Lt(e, "body"));
}
const Du = ["b", "body"];
function Tp(e) {
  return Sn(e, Du);
}
const Fu = ["c", "cases"];
function Op(e) {
  return Sn(e, Fu, []);
}
const Uu = ["s", "static"];
function Rp(e) {
  return Sn(e, Uu);
}
const $u = ["i", "items"];
function Cp(e) {
  return Sn(e, $u, []);
}
const Hu = ["t", "type"];
function Ua(e) {
  return Sn(e, Hu);
}
const Vu = ["v", "value"];
function us(e, t) {
  const n = Sn(e, Vu);
  if (n != null)
    return n;
  throw jr(t);
}
const ju = ["m", "modifier"];
function Lp(e) {
  return Sn(e, ju);
}
const Bu = ["k", "key"];
function Ip(e) {
  const t = Sn(e, Bu);
  if (t)
    return t;
  throw jr(
    6
    /* NodeTypes.Linked */
  );
}
function Sn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Lt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Wu = [
  ...Du,
  ...Fu,
  ...Uu,
  ...$u,
  ...Bu,
  ...ju,
  ...Vu,
  ...Hu
];
function jr(e) {
  return new Error(`unhandled node type: ${e}`);
}
const An = [];
An[
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
An[
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
An[
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
An[
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
An[
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
An[
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
An[
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
const kp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Pp(e) {
  return kp.test(e);
}
function xp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Np(e) {
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
function Mp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Pp(t) ? xp(t) : "*" + t;
}
function Dp(e) {
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
      if (o = 0, a === void 0 || (a = Mp(a), a === !1))
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
      if (l = Np(s), f = An[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = h[u[1]], c && (i = s, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const tl = /* @__PURE__ */ new Map();
function Fp(e, t) {
  return ke(e) ? e[t] : null;
}
function Up(e, t) {
  if (!ke(e))
    return null;
  let n = tl.get(t);
  if (n || (n = Dp(t), n && tl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const a = n[s];
    if (Wu.includes(a) && Vt(o))
      return null;
    const i = o[a];
    if (i === void 0 || De(o))
      return null;
    o = i, s++;
  }
  return o;
}
const $p = (e) => e, Hp = (e) => "", Vp = "text", jp = (e) => e.length === 0 ? "" : zh(e), Bp = Kh;
function nl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Wp(e) {
  const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t;
}
function Gp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Kp(e = {}) {
  const t = e.locale, n = Wp(e), r = ke(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? e.pluralRules[t] : nl, o = ke(e.pluralRules) && se(t) && De(e.pluralRules[t]) ? nl : void 0, s = (v) => v[r(n, v.length, o)], a = e.list || [], i = (v) => a[v], l = e.named || xe();
  Ye(e.pluralIndex) && Gp(n, l);
  const u = (v) => l[v];
  function c(v) {
    const x = De(e.messages) ? e.messages(v) : ke(e.messages) ? e.messages[v] : !1;
    return x || (e.parent ? e.parent.message(v) : Hp);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : $p, h = ye(e.processor) && De(e.processor.normalize) ? e.processor.normalize : jp, p = ye(e.processor) && De(e.processor.interpolate) ? e.processor.interpolate : Bp, w = ye(e.processor) && se(e.processor.type) ? e.processor.type : Vp, T = {
    list: i,
    named: u,
    plural: s,
    linked: (v, ...x) => {
      const [y, E] = x;
      let C = "text", R = "";
      x.length === 1 ? ke(y) ? (R = y.modifier || R, C = y.type || C) : se(y) && (R = y || R) : x.length === 2 && (se(y) && (R = y || R), se(E) && (C = E || C));
      const D = c(v)(T), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ve(D) && R ? D[0] : D
      );
      return R ? f(R)(N, C) : N;
    },
    message: c,
    type: w,
    interpolate: p,
    normalize: h,
    values: at(xe(), a, l)
  };
  return T;
}
let Br = null;
function zp(e) {
  Br = e;
}
function qp(e, t, n) {
  Br && Br.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Yp = /* @__PURE__ */ Xp(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Xp(e) {
  return (t) => Br && Br.emit(e, t);
}
const Jp = Da.__EXTEND_POINT__, Cn = so(Jp), Qp = {
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
}, Gu = me.__EXTEND_POINT__, Ln = so(Gu), $t = {
  INVALID_ARGUMENT: Gu,
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
function $a(e, t) {
  return t.locale != null ? rl(t.locale) : rl(e.locale);
}
let Io;
function rl(e) {
  if (se(e))
    return e;
  if (De(e)) {
    if (e.resolvedOnce && Io != null)
      return Io;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Gh(t))
        throw Xt($t.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Io = t;
    } else
      throw Xt($t.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xt($t.NOT_SUPPORT_LOCALE_TYPE);
}
function Zp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ve(t) ? t : ke(t) ? Object.keys(t) : se(t) ? [t] : [n]
  ])];
}
function Ku(e, t, n) {
  const r = se(n) ? n : ar, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let a = [n];
    for (; Ve(a); )
      a = sl(s, a, t);
    const i = Ve(t) || !ye(t) ? t : t.default ? t.default : null;
    a = se(i) ? [i] : i, Ve(a) && sl(s, a, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function sl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Oe(r); o++) {
    const s = t[o];
    se(s) && (r = eg(e, t[o], n));
  }
  return r;
}
function eg(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = tg(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function tg(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ve(n) || ye(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const ng = "9.14.5", oo = -1, ar = "en-US", ol = "", al = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function rg() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? al(e) : t === "vnode" && ke(e) && "__v_isVNode" in e ? al(e.children) : e
  };
}
let zu;
function sg(e) {
  zu = e;
}
let qu;
function og(e) {
  qu = e;
}
let Yu;
function ag(e) {
  Yu = e;
}
let Xu = null;
const ig = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Xu = e;
}, lg = /* @__NO_SIDE_EFFECTS__ */ () => Xu;
let Ju = null;
const il = (e) => {
  Ju = e;
}, cg = () => Ju;
let ll = 0;
function ug(e = {}) {
  const t = De(e.onWarn) ? e.onWarn : Uh, n = se(e.version) ? e.version : ng, r = se(e.locale) || De(e.locale) ? e.locale : ar, o = De(r) ? ar : r, s = Ve(e.fallbackLocale) || ye(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = ye(e.messages) ? e.messages : ko(o), i = ye(e.datetimeFormats) ? e.datetimeFormats : ko(o), l = ye(e.numberFormats) ? e.numberFormats : ko(o), u = at(xe(), e.modifiers, rg()), c = e.pluralRules || xe(), f = De(e.missing) ? e.missing : null, h = Oe(e.missingWarn) || vn(e.missingWarn) ? e.missingWarn : !0, p = Oe(e.fallbackWarn) || vn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, S = !!e.unresolving, T = De(e.postTranslation) ? e.postTranslation : null, v = ye(e.processor) ? e.processor : null, x = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, E = De(e.messageCompiler) ? e.messageCompiler : zu, C = De(e.messageResolver) ? e.messageResolver : qu || Fp, R = De(e.localeFallbacker) ? e.localeFallbacker : Yu || Zp, D = ke(e.fallbackContext) ? e.fallbackContext : void 0, N = e, O = ke(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), j = ke(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), ee = ke(N.__meta) ? N.__meta : {};
  ll++;
  const U = {
    version: n,
    cid: ll,
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
    messageResolver: C,
    localeFallbacker: R,
    fallbackContext: D,
    onWarn: t,
    __meta: ee
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = O, U.__numberFormatters = j, __INTLIFY_PROD_DEVTOOLS__ && qp(U, n, ee), U;
}
const ko = (e) => ({ [e]: xe() });
function Ha(e, t, n, r, o) {
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
function fg(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function dg(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (fg(e, t[r]))
      return !0;
  return !1;
}
function Po(e) {
  return (n) => mg(n, e);
}
function mg(e, t) {
  const n = Tp(t);
  if (n == null)
    throw jr(
      0
      /* NodeTypes.Resource */
    );
  if (Ua(n) === 1) {
    const s = Op(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      cl(e, i)
    ], []));
  } else
    return cl(e, n);
}
function cl(e, t) {
  const n = Rp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Cp(t).reduce((o, s) => [...o, ea(e, s)], []);
    return e.normalize(r);
  }
}
function ea(e, t) {
  const n = Ua(t);
  switch (n) {
    case 3:
      return us(t, n);
    case 9:
      return us(t, n);
    case 4: {
      const r = t;
      if (Lt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Lt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw jr(n);
    }
    case 5: {
      const r = t;
      if (Lt(r, "i") && Ye(r.i))
        return e.interpolate(e.list(r.i));
      if (Lt(r, "index") && Ye(r.index))
        return e.interpolate(e.list(r.index));
      throw jr(n);
    }
    case 6: {
      const r = t, o = Lp(r), s = Ip(r);
      return e.linked(ea(e, s), o ? ea(e, o) : void 0, e.type);
    }
    case 7:
      return us(t, n);
    case 8:
      return us(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const hg = (e) => e;
let fs = xe();
function pg(e, t = {}) {
  let n = !1;
  const r = t.onError || ep;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Sp(e, t), detectError: n };
}
function gg(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    Oe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || hg)(e), o = fs[r];
    if (o)
      return o;
    const { ast: s, detectError: a } = pg(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Po(s);
    return a ? i : fs[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = fs[n];
      return r || (fs[n] = Po(e));
    } else
      return Po(e);
  }
}
const ul = () => "", Rt = (e) => De(e);
function fl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = ta(...t), c = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Oe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, p = !!u.resolvedMessage, w = se(u.default) || Oe(u.default) ? Oe(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : "", S = n || w !== "", T = $a(e, u);
  h && _g(u);
  let [v, x, y] = p ? [
    l,
    T,
    i[T] || xe()
  ] : Qu(e, l, T, a, f, c), E = v, C = l;
  if (!p && !(se(E) || Vt(E) || Rt(E)) && S && (E = w, C = E), !p && (!(se(E) || Vt(E) || Rt(E)) || !se(x)))
    return o ? oo : l;
  let R = !1;
  const D = () => {
    R = !0;
  }, N = Rt(E) ? E : Zu(e, l, x, E, C, D);
  if (R)
    return E;
  const O = vg(e, x, y, u), j = Kp(O), ee = bg(e, N, j);
  let U = r ? r(ee, l) : ee;
  if (h && se(U) && (U = Bh(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const te = {
      timestamp: Date.now(),
      key: se(l) ? l : Rt(E) ? E.key : "",
      locale: x || (Rt(E) ? E.locale : ""),
      format: se(E) ? E : Rt(E) ? E.source : "",
      message: U
    };
    te.meta = at({}, e.__meta, /* @__PURE__ */ lg() || {}), Yp(te);
  }
  return U;
}
function _g(e) {
  Ve(e.list) ? e.list = e.list.map((t) => se(t) ? Yi(t) : t) : ke(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = Yi(e.named[t]));
  });
}
function Qu(e, t, n, r, o, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = xe(), h, p = null;
  const w = "translate";
  for (let S = 0; S < c.length && (h = c[S], f = a[h] || xe(), (p = l(f, t)) === null && (p = f[t]), !(se(p) || Vt(p) || Rt(p))); S++)
    if (!dg(h, c)) {
      const T = Ha(
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
function Zu(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Rt(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = a(r, yg(e, n, o, r, i, s));
  return l.locale = n, l.key = t, l.source = r, l;
}
function bg(e, t, n) {
  return t(n);
}
function ta(...e) {
  const [t, n, r] = e, o = xe();
  if (!se(t) && !Ye(t) && !Rt(t) && !Vt(t))
    throw Xt($t.INVALID_ARGUMENT);
  const s = Ye(t) ? String(t) : (Rt(t), t);
  return Ye(n) ? o.plural = n : se(n) ? o.default = n : ye(n) && !ro(n) ? o.named = n : Ve(n) && (o.list = n), Ye(r) ? o.plural = r : se(r) ? o.default = r : ye(r) && at(o, r), [s, o];
}
function yg(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => $h(t, n, a)
  };
}
function vg(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (p) => {
      let w = a(n, p);
      if (w == null && c) {
        const [, , S] = Qu(c, p, t, i, l, u);
        w = a(S, p);
      }
      if (se(w) || Vt(w)) {
        let S = !1;
        const v = Zu(e, p, t, w, p, () => {
          S = !0;
        });
        return S ? ul : v;
      } else return Rt(w) ? w : ul;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ye(r.plural) && (h.pluralIndex = r.plural), h;
}
function dl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, c, f] = na(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, w = $a(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.DateTimeFormat(w, f).format(u);
  let T = {}, v, x = null;
  const y = "datetime format";
  for (let R = 0; R < S.length && (v = S[R], T = n[v] || {}, x = T[l], !ye(x)); R++)
    Ha(e, l, v, h, y);
  if (!ye(x) || !se(v))
    return r ? oo : l;
  let E = `${v}__${l}`;
  ro(f) || (E = `${E}__${JSON.stringify(f)}`);
  let C = i.get(E);
  return C || (C = new Intl.DateTimeFormat(v, at({}, x, f)), i.set(E, C)), p ? C.formatToParts(u) : C.format(u);
}
const ef = [
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
function na(...e) {
  const [t, n, r, o] = e, s = xe();
  let a = xe(), i;
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
  } else if (Vh(t)) {
    if (isNaN(t.getTime()))
      throw Xt($t.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ye(t))
    i = t;
  else
    throw Xt($t.INVALID_ARGUMENT);
  return se(n) ? s.key = n : ye(n) && Object.keys(n).forEach((l) => {
    ef.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : ye(r) && (a = r), ye(o) && (a = o), [s.key || "", i, s, a];
}
function ml(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function hl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, c, f] = ra(...t), h = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const p = !!c.part, w = $a(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!se(l) || l === "")
    return new Intl.NumberFormat(w, f).format(u);
  let T = {}, v, x = null;
  const y = "number format";
  for (let R = 0; R < S.length && (v = S[R], T = n[v] || {}, x = T[l], !ye(x)); R++)
    Ha(e, l, v, h, y);
  if (!ye(x) || !se(v))
    return r ? oo : l;
  let E = `${v}__${l}`;
  ro(f) || (E = `${E}__${JSON.stringify(f)}`);
  let C = i.get(E);
  return C || (C = new Intl.NumberFormat(v, at({}, x, f)), i.set(E, C)), p ? C.formatToParts(u) : C.format(u);
}
const tf = [
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
function ra(...e) {
  const [t, n, r, o] = e, s = xe();
  let a = xe();
  if (!Ye(t))
    throw Xt($t.INVALID_ARGUMENT);
  const i = t;
  return se(n) ? s.key = n : ye(n) && Object.keys(n).forEach((l) => {
    tf.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), se(r) ? s.locale = r : ye(r) && (a = r), ye(o) && (a = o), [s.key || "", i, s, a];
}
function pl(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
Ap();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Eg = "9.14.5";
function wg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (xn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (xn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Sg = Qp.__EXTEND_POINT__, Gt = so(Sg);
Gt(), Gt(), Gt(), Gt(), Gt(), Gt(), Gt(), Gt(), Gt();
const nf = $t.__EXTEND_POINT__, vt = so(nf), et = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: nf,
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
  return dr(e, null, void 0);
}
const sa = /* @__PURE__ */ wn("__translateVNode"), oa = /* @__PURE__ */ wn("__datetimeParts"), aa = /* @__PURE__ */ wn("__numberParts"), rf = wn("__setPluralRules"), sf = /* @__PURE__ */ wn("__injectWithOption"), ia = /* @__PURE__ */ wn("__dispose");
function Wr(e) {
  if (!ke(e) || Vt(e))
    return e;
  for (const t in e)
    if (Lt(e, t))
      if (!t.includes("."))
        ke(e[t]) && Wr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, s = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = xe()), !ke(o[n[a]])) {
            s = !0;
            break;
          }
          o = o[n[a]];
        }
        if (s || (Vt(o) ? Wu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Vt(o)) {
          const a = o[n[r]];
          ke(a) && Wr(a);
        }
      }
  return e;
}
function ao(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, a = ye(n) ? n : Ve(r) ? xe() : { [e]: xe() };
  if (Ve(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || xe(), Es(u, a[l])) : Es(u, a);
    } else
      se(i) && Es(JSON.parse(i), a);
  }), o == null && s)
    for (const i in a)
      Lt(a, i) && Wr(a[i]);
  return a;
}
function of(e) {
  return e.type;
}
function af(e, t, n) {
  let r = ke(t.messages) ? t.messages : xe();
  "__i18nGlobal" in n && (r = ao(e.locale.value, {
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
function gl(e) {
  return we(Xr, null, e, 0);
}
const _l = "__INTLIFY_META__", bl = () => [], Ag = () => !1;
let yl = 0;
function vl(e) {
  return ((t, n, r, o) => e(n, r, tn() || void 0, o));
}
const Tg = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = tn();
  let t = null;
  return e && (t = of(e)[_l]) ? { [_l]: t } : null;
};
function Va(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, s = e.flatJson, a = Ds ? X : Ic, i = !!e.translateExistCompatible;
  let l = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : se(e.locale) ? e.locale : ar
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ve(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = a(ao(u.value, e)), h = a(ye(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), p = a(ye(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let w = n ? n.missingWarn : Oe(e.missingWarn) || vn(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : Oe(e.fallbackWarn) || vn(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, x = De(e.missing) ? e.missing : null, y = De(e.missing) ? vl(e.missing) : null, E = De(e.postTranslation) ? e.postTranslation : null, C = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter;
  const D = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    o && il(null);
    const k = {
      version: Eg,
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
      warnHtmlMessage: C,
      escapeParameter: R,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = h.value, k.numberFormats = p.value, k.__datetimeFormatters = ye(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = ye(O) ? O.__numberFormatters : void 0;
    const $ = ug(k);
    return o && il($), $;
  })(), br(O, u.value, c.value);
  function ee() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      p.value
    ];
  }
  const U = be({
    get: () => u.value,
    set: (k) => {
      u.value = k, O.locale = u.value;
    }
  }), te = be({
    get: () => c.value,
    set: (k) => {
      c.value = k, O.fallbackLocale = c.value, br(O, u.value, k);
    }
  }), ae = be(() => f.value), fe = /* @__PURE__ */ be(() => h.value), ie = /* @__PURE__ */ be(() => p.value);
  function V() {
    return De(E) ? E : null;
  }
  function Q(k) {
    E = k, O.postTranslation = k;
  }
  function _e() {
    return x;
  }
  function Ce(k) {
    k !== null && (y = vl(k)), x = k, O.missing = y;
  }
  const pe = (k, $, ce, Te, $e, st) => {
    ee();
    let Je;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = n ? cg() : void 0), Je = k(O);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (O.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ye(Je) && Je === oo || ce === "translate exists" && !Je) {
      const [Nt, on] = $();
      return n && T ? Te(n) : $e(Nt);
    } else {
      if (st(Je))
        return Je;
      throw nt(et.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ve(...k) {
    return pe(($) => Reflect.apply(fl, null, [$, ...k]), () => ta(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => se($));
  }
  function Ue(...k) {
    const [$, ce, Te] = k;
    if (Te && !ke(Te))
      throw nt(et.INVALID_ARGUMENT);
    return ve($, ce, at({ resolvedMessage: !0 }, Te || {}));
  }
  function je(...k) {
    return pe(($) => Reflect.apply(dl, null, [$, ...k]), () => na(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => ol, ($) => se($));
  }
  function rt(...k) {
    return pe(($) => Reflect.apply(hl, null, [$, ...k]), () => ra(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => ol, ($) => se($));
  }
  function de(k) {
    return k.map(($) => se($) || Ye($) || Oe($) ? gl(String($)) : $);
  }
  const re = {
    normalize: de,
    interpolate: (k) => k,
    type: "vnode"
  };
  function oe(...k) {
    return pe(
      ($) => {
        let ce;
        const Te = $;
        try {
          Te.processor = re, ce = Reflect.apply(fl, null, [Te, ...k]);
        } finally {
          Te.processor = null;
        }
        return ce;
      },
      () => ta(...k),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[sa](...k),
      ($) => [gl($)],
      ($) => Ve($)
    );
  }
  function Re(...k) {
    return pe(
      ($) => Reflect.apply(hl, null, [$, ...k]),
      () => ra(...k),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[aa](...k),
      bl,
      ($) => se($) || Ve($)
    );
  }
  function qe(...k) {
    return pe(
      ($) => Reflect.apply(dl, null, [$, ...k]),
      () => na(...k),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[oa](...k),
      bl,
      ($) => se($) || Ve($)
    );
  }
  function g(k) {
    N = k, O.pluralRules = N;
  }
  function _(k, $) {
    return pe(() => {
      if (!k)
        return !1;
      const ce = se($) ? $ : u.value, Te = I(ce), $e = O.messageResolver(Te, k);
      return i ? $e != null : Vt($e) || Rt($e) || se($e);
    }, () => [k], "translate exists", (ce) => Reflect.apply(ce.te, ce, [k, $]), Ag, (ce) => Oe(ce));
  }
  function b(k) {
    let $ = null;
    const ce = Ku(O, c.value, u.value);
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
  function I(k) {
    return f.value[k] || {};
  }
  function M(k, $) {
    if (s) {
      const ce = { [k]: $ };
      for (const Te in ce)
        Lt(ce, Te) && Wr(ce[Te]);
      $ = ce[k];
    }
    f.value[k] = $, O.messages = f.value;
  }
  function Y(k, $) {
    f.value[k] = f.value[k] || {};
    const ce = { [k]: $ };
    if (s)
      for (const Te in ce)
        Lt(ce, Te) && Wr(ce[Te]);
    $ = ce[k], Es($, f.value[k]), O.messages = f.value;
  }
  function K(k) {
    return h.value[k] || {};
  }
  function d(k, $) {
    h.value[k] = $, O.datetimeFormats = h.value, ml(O, k, $);
  }
  function m(k, $) {
    h.value[k] = at(h.value[k] || {}, $), O.datetimeFormats = h.value, ml(O, k, $);
  }
  function L(k) {
    return p.value[k] || {};
  }
  function F(k, $) {
    p.value[k] = $, O.numberFormats = p.value, pl(O, k, $);
  }
  function Z(k, $) {
    p.value[k] = at(p.value[k] || {}, $), O.numberFormats = p.value, pl(O, k, $);
  }
  yl++, n && Ds && (yt(n.locale, (k) => {
    l && (u.value = k, O.locale = k, br(O, u.value, c.value));
  }), yt(n.fallbackLocale, (k) => {
    l && (c.value = k, O.fallbackLocale = k, br(O, u.value, c.value));
  }));
  const z = {
    id: yl,
    locale: U,
    fallbackLocale: te,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(k) {
      l = k, k && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, br(O, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: ae,
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
      return C;
    },
    set warnHtmlMessage(k) {
      C = k, O.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return R;
    },
    set escapeParameter(k) {
      R = k, O.escapeParameter = k;
    },
    t: ve,
    getLocaleMessage: I,
    setLocaleMessage: M,
    mergeLocaleMessage: Y,
    getPostTranslationHandler: V,
    setPostTranslationHandler: Q,
    getMissingHandler: _e,
    setMissingHandler: Ce,
    [rf]: g
  };
  return z.datetimeFormats = fe, z.numberFormats = ie, z.rt = Ue, z.te = _, z.tm = P, z.d = je, z.n = rt, z.getDateTimeFormat = K, z.setDateTimeFormat = d, z.mergeDateTimeFormat = m, z.getNumberFormat = L, z.setNumberFormat = F, z.mergeNumberFormat = Z, z[sf] = r, z[sa] = oe, z[oa] = qe, z[aa] = Re, z;
}
function Og(e) {
  const t = se(e.locale) ? e.locale : ar, n = se(e.fallbackLocale) || Ve(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = De(e.missing) ? e.missing : void 0, o = Oe(e.silentTranslationWarn) || vn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Oe(e.silentFallbackWarn) || vn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = Oe(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = ye(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = De(e.postTranslation) ? e.postTranslation : void 0, f = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, p = Oe(e.sync) ? e.sync : !0;
  let w = e.messages;
  if (ye(e.sharedMessages)) {
    const R = e.sharedMessages;
    w = Object.keys(R).reduce((N, O) => {
      const j = N[O] || (N[O] = {});
      return at(j, R[O]), N;
    }, w || {});
  }
  const { __i18n: S, __root: T, __injectWithOption: v } = e, x = e.datetimeFormats, y = e.numberFormats, E = e.flatJson, C = e.translateExistCompatible;
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
    translateExistCompatible: C,
    __i18n: S,
    __root: T,
    __injectWithOption: v
  };
}
function la(e = {}, t) {
  {
    const n = Va(Og(e)), { __extender: r } = e, o = {
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
          throw nt(et.INVALID_ARGUMENT);
        const h = a;
        return se(i) ? u.locale = i : Ve(i) ? c = i : ye(i) && (f = i), Ve(l) ? c = l : ye(l) && (f = l), Reflect.apply(n.t, n, [
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
        return se(i) ? u.locale = i : Ye(i) ? u.plural = i : Ve(i) ? c = i : ye(i) && (f = i), se(l) ? u.locale = l : Ve(l) ? c = l : ye(l) && (f = l), Reflect.apply(n.t, n, [
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
const ja = {
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
function Rg({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === He ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, xe());
}
function lf(e) {
  return He;
}
const Cg = /* @__PURE__ */ rn({
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
  }, ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || ir({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), a = xe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = se(e.plural) ? +e.plural : e.plural);
      const i = Rg(t, s), l = o[sa](e.keypath, i, a), u = at(xe(), r), c = se(e.tag) || ke(e.tag) ? e.tag : lf();
      return Vr(c, u, l);
    };
  }
}), El = Cg;
function Lg(e) {
  return Ve(e) && !se(e[0]);
}
function cf(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = xe();
    e.locale && (a.locale = e.locale), se(e.format) ? a.key = e.format : ke(e.format) && (se(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((h, p) => n.includes(p) ? at(xe(), h, { [p]: e.format[p] }) : h, xe()));
    const l = r(e.value, a, i);
    let u = [a.key];
    Ve(l) ? u = l.map((h, p) => {
      const w = o[h.type], S = w ? w({ [h.type]: h.value, index: p, parts: l }) : [h.value];
      return Lg(S) && (S[0].key = `${h.type}-${p}`), S;
    }) : se(l) && (u = [l]);
    const c = at(xe(), s), f = se(e.tag) || ke(e.tag) ? e.tag : lf();
    return Vr(f, c, u);
  };
}
const Ig = /* @__PURE__ */ rn({
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
  }, ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ir({
      useScope: e.scope,
      __useComponent: !0
    });
    return cf(e, t, tf, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[aa](...r)
    ));
  }
}), wl = Ig, kg = /* @__PURE__ */ rn({
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
  }, ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ir({
      useScope: e.scope,
      __useComponent: !0
    });
    return cf(e, t, ef, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[oa](...r)
    ));
  }
}), Sl = kg;
function Pg(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function xg(e) {
  const t = (a) => {
    const { instance: i, modifiers: l, value: u } = a;
    if (!i || !i.$)
      throw nt(et.UNEXPECTED_ERROR);
    const c = Pg(e, i.$), f = Al(u);
    return [
      Reflect.apply(c.t, c, [...Tl(f)]),
      c
    ];
  };
  return {
    created: (a, i) => {
      const [l, u] = t(i);
      Ds && e.global === u && (a.__i18nWatcher = yt(u.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      Ds && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: i }) => {
      if (a.__composer) {
        const l = a.__composer, u = Al(i);
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
function Al(e) {
  if (se(e))
    return { path: e };
  if (ye(e)) {
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
function Ng(e, t, ...n) {
  const r = ye(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (Oe(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : El.name, "I18nT"].forEach((a) => e.component(a, El)), [wl.name, "I18nN"].forEach((a) => e.component(a, wl)), [Sl.name, "I18nD"].forEach((a) => e.component(a, Sl))), e.directive("t", xg(t));
}
function Mg(e, t, n) {
  return {
    beforeCreate() {
      const r = tn();
      if (!r)
        throw nt(et.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const s = o.i18n;
        if (o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Ol(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = la(s);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = Ol(e, o);
        else {
          this.$i18n = la({
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
      o.__i18nGlobal && af(t, o, o), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, a) => this.$i18n.te(s, a), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
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
function Ol(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[rf](t.pluralizationRules || e.pluralizationRules);
  const n = ao(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Dg = /* @__PURE__ */ wn("global-vue-i18n");
function Fg(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Oe(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Oe(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [a, i] = Ug(e, n), l = /* @__PURE__ */ wn("");
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
        if (p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, h), ye(w[0])) {
          const v = w[0];
          h.__composerExtend = v.__composerExtend, h.__vueI18nExtend = v.__vueI18nExtend;
        }
        let S = null;
        !n && r && (S = zg(p, h.global)), __VUE_I18N_FULL_INSTALL__ && Ng(p, h, ...w), __VUE_I18N_LEGACY_API__ && n && p.mixin(Mg(i, i.__composer, h));
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
function ir(e = {}) {
  const t = tn();
  if (t == null)
    throw nt(et.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw nt(et.NOT_INSTALLED);
  const n = $g(t), r = Vg(n), o = of(t), s = Hg(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw nt(et.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Gg(t, s, r, e);
  }
  if (s === "global")
    return af(r, e, o), r;
  if (s === "parent") {
    let l = jg(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = at({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Va(l), a.__composerExtend && (i[ia] = a.__composerExtend(i)), Wg(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Ug(e, t, n) {
  const r = ya();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => la(e)) : r.run(() => Va(e));
    if (o == null)
      throw nt(et.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function $g(e) {
  {
    const t = Zn(e.isCE ? Dg : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw nt(e.isCE ? et.NOT_INSTALLED_WITH_PROVIDE : et.UNEXPECTED_ERROR);
    return t;
  }
}
function Hg(e, t) {
  return ro(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Vg(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function jg(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = Bg(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[sf] && (r = null));
    }
    if (r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Bg(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Wg(e, t, n) {
  fr(() => {
  }, t), Yr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ia];
    o && (o(), delete r[ia]);
  }, t);
}
function Gg(e, t, n, r = {}) {
  const o = t === "local", s = Ic(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw nt(et.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = Oe(r.inheritLocale) ? r.inheritLocale : !se(r.locale), i = X(
    // prettier-ignore
    !o || a ? n.locale.value : se(r.locale) ? r.locale : ar
  ), l = X(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : se(r.fallbackLocale) || Ve(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = X(ao(i.value, r)), c = X(ye(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = X(ye(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), h = o ? n.missingWarn : Oe(r.missingWarn) || vn(r.missingWarn) ? r.missingWarn : !0, p = o ? n.fallbackWarn : Oe(r.fallbackWarn) || vn(r.fallbackWarn) ? r.fallbackWarn : !0, w = o ? n.fallbackRoot : Oe(r.fallbackRoot) ? r.fallbackRoot : !0, S = !!r.fallbackFormat, T = De(r.missing) ? r.missing : null, v = De(r.postTranslation) ? r.postTranslation : null, x = o ? n.warnHtmlMessage : Oe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, y = !!r.escapeParameter, E = o ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || o && n.pluralRules;
  function R() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const D = be({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (b) => {
      s.value && (s.value.locale.value = b), i.value = b;
    }
  }), N = be({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (b) => {
      s.value && (s.value.fallbackLocale.value = b), l.value = b;
    }
  }), O = be(() => s.value ? s.value.messages.value : u.value), j = be(() => c.value), ee = be(() => f.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : v;
  }
  function te(b) {
    s.value && s.value.setPostTranslationHandler(b);
  }
  function ae() {
    return s.value ? s.value.getMissingHandler() : T;
  }
  function fe(b) {
    s.value && s.value.setMissingHandler(b);
  }
  function ie(b) {
    return R(), b();
  }
  function V(...b) {
    return s.value ? ie(() => Reflect.apply(s.value.t, null, [...b])) : ie(() => "");
  }
  function Q(...b) {
    return s.value ? Reflect.apply(s.value.rt, null, [...b]) : "";
  }
  function _e(...b) {
    return s.value ? ie(() => Reflect.apply(s.value.d, null, [...b])) : ie(() => "");
  }
  function Ce(...b) {
    return s.value ? ie(() => Reflect.apply(s.value.n, null, [...b])) : ie(() => "");
  }
  function pe(b) {
    return s.value ? s.value.tm(b) : {};
  }
  function ve(b, P) {
    return s.value ? s.value.te(b, P) : !1;
  }
  function Ue(b) {
    return s.value ? s.value.getLocaleMessage(b) : {};
  }
  function je(b, P) {
    s.value && (s.value.setLocaleMessage(b, P), u.value[b] = P);
  }
  function rt(b, P) {
    s.value && s.value.mergeLocaleMessage(b, P);
  }
  function de(b) {
    return s.value ? s.value.getDateTimeFormat(b) : {};
  }
  function B(b, P) {
    s.value && (s.value.setDateTimeFormat(b, P), c.value[b] = P);
  }
  function re(b, P) {
    s.value && s.value.mergeDateTimeFormat(b, P);
  }
  function oe(b) {
    return s.value ? s.value.getNumberFormat(b) : {};
  }
  function Re(b, P) {
    s.value && (s.value.setNumberFormat(b, P), f.value[b] = P);
  }
  function qe(b, P) {
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
    numberFormats: ee,
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
      return s.value ? s.value.pluralRules : C;
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
    setPostTranslationHandler: te,
    getMissingHandler: ae,
    setMissingHandler: fe,
    rt: Q,
    d: _e,
    n: Ce,
    tm: pe,
    te: ve,
    getLocaleMessage: Ue,
    setLocaleMessage: je,
    mergeLocaleMessage: rt,
    getDateTimeFormat: de,
    setDateTimeFormat: B,
    mergeDateTimeFormat: re,
    getNumberFormat: oe,
    setNumberFormat: Re,
    mergeNumberFormat: qe
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
  return Jc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw nt(et.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const b = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = b.locale.value, l.value = b.fallbackLocale.value, u.value = b.messages.value, c.value = b.datetimeFormats.value, f.value = b.numberFormats.value) : o && _(b);
  }), g;
}
const Kg = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Rl = ["t", "rt", "d", "n", "tm", "te"];
function zg(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Kg.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw nt(et.UNEXPECTED_ERROR);
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
  }), e.config.globalProperties.$i18n = n, Rl.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw nt(et.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Rl.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
wg();
sg(gg);
og(Up);
ag(Ku);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = xn();
  e.__INTLIFY__ = !0, zp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const qg = "sub2api_locale", Ba = "en", Yg = {
  en: () => import("./index-BHv-Ew2S.js"),
  zh: () => import("./index-DviBIr8Y.js")
};
function uf(e) {
  return e === "en" || e === "zh";
}
function Xg() {
  const e = localStorage.getItem(qg);
  return e && uf(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Ba;
}
const tr = Fg({
  legacy: !1,
  locale: Xg(),
  fallbackLocale: Ba,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Cl = /* @__PURE__ */ new Set();
async function ff(e) {
  if (Cl.has(e))
    return;
  const t = Yg[e], n = await t();
  tr.global.setLocaleMessage(e, n.default), Cl.add(e);
}
async function Jg() {
  const e = df();
  await ff(e), document.documentElement.setAttribute("lang", e);
}
function df() {
  const e = tr.global.locale.value;
  return uf(e) ? e : Ba;
}
function mf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Qg } = Object.prototype, { getPrototypeOf: lr } = Object, { iterator: Qr, toStringTag: hf } = Symbol, Us = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Gr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Us(n, t))
      return !0;
    n = lr(n);
  }
  return !1;
}, Zg = (e, t) => e != null && Gr(e, t) ? e[t] : void 0, Wa = /* @__PURE__ */ ((e) => (t) => {
  const n = Qg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xt = (e) => (e = e.toLowerCase(), (t) => Wa(t) === e), io = (e) => (t) => typeof t === e, { isArray: $n } = Array, cr = io("undefined");
function mr(e) {
  return e !== null && !cr(e) && e.constructor !== null && !cr(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pf = xt("ArrayBuffer");
function e0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pf(e.buffer), t;
}
const t0 = io("string"), wt = io("function"), gf = io("number"), hr = (e) => e !== null && typeof e == "object", n0 = (e) => e === !0 || e === !1, ws = (e) => {
  if (!hr(e))
    return !1;
  const t = lr(e);
  return (t === null || t === Object.prototype || lr(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Gr(e, hf) && !Gr(e, Qr);
}, r0 = (e) => {
  if (!hr(e) || mr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, s0 = xt("Date"), o0 = xt("File"), a0 = (e) => !!(e && typeof e.uri < "u"), i0 = (e) => e && typeof e.getParts < "u", l0 = xt("Blob"), c0 = xt("FileList"), u0 = (e) => hr(e) && wt(e.pipe);
function f0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ll = f0(), Il = typeof Ll.FormData < "u" ? Ll.FormData : void 0, d0 = (e) => {
  if (!e) return !1;
  if (Il && e instanceof Il) return !0;
  const t = lr(e);
  if (!t || t === Object.prototype || !wt(e.append)) return !1;
  const n = Wa(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && wt(e.toString) && e.toString() === "[object FormData]";
}, m0 = xt("URLSearchParams"), [h0, p0, g0, _0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(xt), b0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(e, t, { allOwnKeys: n = !1 } = {}) {
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
function _f(e, t) {
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
const Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bf = (e) => !cr(e) && e !== Nn;
function ca(...e) {
  const { caseless: t, skipUndefined: n } = bf(this) && this || {}, r = {}, o = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && typeof a == "string" && _f(r, a) || a, l = Us(r, i) ? r[i] : void 0;
    ws(l) && ws(s) ? r[i] = ca(l, s) : ws(s) ? r[i] = ca({}, s) : $n(s) ? r[i] = s.slice() : (!n || !cr(s)) && (r[i] = s);
  };
  for (let s = 0, a = e.length; s < a; s++) {
    const i = e[s];
    if (!i || mr(i) || (Zr(i, o), typeof i != "object" || $n(i)))
      continue;
    const l = Object.getOwnPropertySymbols(i);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      I0.call(i, c) && o(i[c], c);
    }
  }
  return r;
}
const y0 = (e, t, n, { allOwnKeys: r } = {}) => (Zr(
  t,
  (o, s) => {
    n && wt(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: mf(o, n),
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
), e), v0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), E0 = (e, t, n, r) => {
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
}, w0 = (e, t, n, r) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && lr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, S0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, A0 = (e) => {
  if (!e) return null;
  if ($n(e)) return e;
  let t = e.length;
  if (!gf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, T0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && lr(Uint8Array)), O0 = (e, t) => {
  const r = (e && e[Qr]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, R0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, C0 = xt("HTMLFormElement"), L0 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: I0 } = Object.prototype, k0 = xt("RegExp"), yf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Zr(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, P0 = (e) => {
  yf(e, (t, n) => {
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
}, x0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return $n(e) ? r(e) : r(String(e).split(t)), n;
}, N0 = () => {
}, M0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function D0(e) {
  return !!(e && wt(e.append) && e[hf] === "FormData" && e[Qr]);
}
const F0 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (hr(r)) {
      if (t.has(r))
        return;
      if (mr(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = $n(r) ? [] : {};
        return Zr(r, (s, a) => {
          const i = n(s);
          !cr(i) && (o[a] = i);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, U0 = xt("AsyncFunction"), $0 = (e) => e && (hr(e) || wt(e)) && wt(e.then) && wt(e.catch), vf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Nn.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === Nn && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Nn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", wt(Nn.postMessage)), H0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nn) : typeof process < "u" && process.nextTick || vf, Ef = (e) => e != null && wt(e[Qr]), V0 = (e) => e != null && Gr(e, Qr) && Ef(e), A = {
  isArray: $n,
  isArrayBuffer: pf,
  isBuffer: mr,
  isFormData: d0,
  isArrayBufferView: e0,
  isString: t0,
  isNumber: gf,
  isBoolean: n0,
  isObject: hr,
  isPlainObject: ws,
  isEmptyObject: r0,
  isReadableStream: h0,
  isRequest: p0,
  isResponse: g0,
  isHeaders: _0,
  isUndefined: cr,
  isDate: s0,
  isFile: o0,
  isReactNativeBlob: a0,
  isReactNative: i0,
  isBlob: l0,
  isRegExp: k0,
  isFunction: wt,
  isStream: u0,
  isURLSearchParams: m0,
  isTypedArray: T0,
  isFileList: c0,
  forEach: Zr,
  merge: ca,
  extend: y0,
  trim: b0,
  stripBOM: v0,
  inherits: E0,
  toFlatObject: w0,
  kindOf: Wa,
  kindOfTest: xt,
  endsWith: S0,
  toArray: A0,
  forEachEntry: O0,
  matchAll: R0,
  isHTMLForm: C0,
  hasOwnProperty: Us,
  hasOwnProp: Us,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Gr,
  getSafeProp: Zg,
  reduceDescriptors: yf,
  freezeMethods: P0,
  toObjectSet: x0,
  toCamelCase: L0,
  noop: N0,
  toFiniteNumber: M0,
  findKey: _f,
  global: Nn,
  isContextDefined: bf,
  isSpecCompliantForm: D0,
  toJSONObject: F0,
  isAsyncFn: U0,
  isThenable: $0,
  setImmediate: vf,
  asap: H0,
  isIterable: Ef,
  isSafeIterable: V0
}, j0 = A.toObjectSet([
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
]), B0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && j0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function W0(e) {
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
const G0 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), K0 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ga(e, t) {
  return A.isArray(e) ? e.map((n) => Ga(n, t)) : W0(String(e).replace(t, ""));
}
const z0 = (e) => Ga(e, G0), q0 = (e) => Ga(e, K0);
function wf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return A.forEach(e.toJSON(), (n, r) => {
    t[r] = q0(n);
  }), t;
}
const kl = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ss(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Ss) : z0(String(e));
}
function Y0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const X0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xo(e, t, n, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function J0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Q0(e, t) {
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
      const f = A.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = Ss(i));
    }
    const a = (i, l) => A.forEach(i, (u, c) => s(u, c, l));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (A.isString(t) && (t = t.trim()) && !X0(t))
      a(B0(t), n);
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
    if (t = yr(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Y0(o);
        if (A.isFunction(n))
          return n.call(this, o, r);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = yr(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || xo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = yr(a), a) {
        const i = A.findKey(r, a);
        i && (!n || xo(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || xo(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, s) => {
      const a = A.findKey(r, s);
      if (a) {
        n[a] = Ss(o), delete n[s];
        return;
      }
      const i = t ? J0(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Ss(o), r[i] = !0;
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
    const r = (this[kl] = this[kl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = yr(a);
      r[i] || (Q0(o, a), r[i] = !0);
    }
    return A.isArray(t) ? t.forEach(s) : s(t), this;
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
A.reduceDescriptors(dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(dt);
const Z0 = "[REDACTED ****]";
function e_(e) {
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
function t_(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || A.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof dt && (s = s.toJSON()), r.push(s);
    let a;
    if (A.isArray(s))
      a = [], s.forEach((i, l) => {
        const u = o(i);
        A.isUndefined(u) || (a[l] = u);
      });
    else {
      if (!A.isPlainObject(s) && e_(s))
        return r.pop(), s;
      a = /* @__PURE__ */ Object.create(null);
      for (const [i, l] of Object.entries(s)) {
        const u = n.has(i.toLowerCase()) ? Z0 : o(l);
        A.isUndefined(u) || (a[i] = u);
      }
    }
    return r.pop(), a;
  };
  return o(e);
}
let ne = class Sf extends Error {
  static from(t, n, r, o, s, a) {
    const i = new Sf(t.message, n || t.code, r, o, s);
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
    const t = this.config, n = t && A.hasOwnProp(t, "redact") ? t.redact : void 0, r = A.isArray(n) && n.length > 0 ? t_(t, n) : A.toJSONObject(t);
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
const n_ = null, Af = 100;
function ua(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Tf(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function No(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Tf(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function r_(e) {
  return A.isArray(e) && !e.some(ua);
}
const s_ = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function lo(e, t, n) {
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
  const r = n.metaTokens, o = n.visitor || w, s = n.dots, a = n.indexes, i = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? Af : n.maxDepth, u = i && A.isSpecCompliantForm(t), c = [];
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
    return JSON.stringify(v, function(C, R) {
      if (!A.isObject(R))
        return R;
      for (; y.length && y[y.length - 1] !== this; )
        y.pop();
      return y.push(R), h(x + y.length - 1), R;
    });
  }
  function w(v, x, y) {
    let E = v;
    if (A.isReactNative(t) && A.isReactNativeBlob(v))
      return t.append(No(y, x, s), f(v)), !1;
    if (v && !y && typeof v == "object") {
      if (A.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), v = p(v, 1);
      else if (A.isArray(v) && r_(v) || (A.isFileList(v) || A.endsWith(x, "[]")) && (E = A.toArray(v)))
        return x = Tf(x), E.forEach(function(R, D) {
          !(A.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? No([x], D, s) : a === null ? x : x + "[]",
            f(R)
          );
        }), !1;
    }
    return ua(v) ? !0 : (t.append(No(y, x, s), f(v)), !1);
  }
  const S = Object.assign(s_, {
    defaultVisitor: w,
    convertValue: f,
    isVisitable: ua
  });
  function T(v, x, y = 0) {
    if (!A.isUndefined(v)) {
      if (h(y), c.indexOf(v) !== -1)
        throw new Error("Circular reference detected in " + x.join("."));
      c.push(v), A.forEach(v, function(C, R) {
        (!(A.isUndefined(C) || C === null) && o.call(t, C, A.isString(R) ? R.trim() : R, x, S)) === !0 && T(C, x ? x.concat(R) : [R], y + 1);
      }), c.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Pl(e) {
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
function Ka(e, t) {
  this._pairs = [], e && lo(e, this, t);
}
const Of = Ka.prototype;
Of.append = function(t, n) {
  this._pairs.push([t, n]);
};
Of.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Pl) : Pl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function o_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = A.isFunction(n) ? {
    serialize: n
  } : n, o = A.getSafeProp(r, "encode") || o_, s = A.getSafeProp(r, "serialize");
  let a;
  if (s ? a = s(t, r) : a = A.isURLSearchParams(t) ? t.toString() : new Ka(t, r).toString(o), a) {
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const za = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, a_ = typeof URLSearchParams < "u" ? URLSearchParams : Ka, i_ = typeof FormData < "u" ? FormData : null, l_ = typeof Blob < "u" ? Blob : null, c_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: a_,
    FormData: i_,
    Blob: l_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qa = typeof window < "u" && typeof document < "u", fa = typeof navigator == "object" && navigator || void 0, u_ = qa && (!fa || ["ReactNative", "NativeScript", "NS"].indexOf(fa.product) < 0), f_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", d_ = qa && window.location.href || "http://localhost", m_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qa,
  hasStandardBrowserEnv: u_,
  hasStandardBrowserWebWorkerEnv: f_,
  navigator: fa,
  origin: d_
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...m_,
  ...c_
};
function h_(e, t) {
  return lo(e, new ot.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return ot.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Nl = Af;
function Cf(e) {
  if (e > Nl)
    throw new ne(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Nl,
      ne.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function p_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Cf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function g_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Lf(e) {
  function t(n, r, o, s) {
    Cf(s);
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = s >= n.length;
    return a = !a && A.isArray(o) ? o.length : a, l ? (A.hasOwnProp(o, a) ? o[a] = A.isArray(o[a]) ? o[a].concat(r) : [o[a], r] : o[a] = r, !i) : ((!A.hasOwnProp(o, a) || !A.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && A.isArray(o[a]) && (o[a] = g_(o[a])), !i);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(p_(r), o, n, 0);
    }), n;
  }
  return null;
}
const Bn = (e, t) => e != null && A.hasOwnProp(e, t) ? e[t] : void 0;
function __(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const es = {
  transitional: za,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = A.isObject(t);
      if (s && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
        return o ? JSON.stringify(Lf(t)) : t;
      if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
        return t;
      if (A.isArrayBufferView(t))
        return t.buffer;
      if (A.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (s) {
        const l = Bn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return h_(t, l).toString();
        if ((i = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Bn(this, "env"), c = u && u.FormData;
          return lo(
            i ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), __(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Bn(this, "transitional") || es.transitional, r = n && n.forcedJSONParsing, o = Bn(this, "responseType"), s = o === "json";
      if (A.isResponse(t) || A.isReadableStream(t))
        return t;
      if (t && A.isString(t) && (r && !o || s)) {
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
A.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  es.headers[e] = {};
});
function Mo(e, t) {
  const n = this || es, r = t || n, o = dt.from(r.headers);
  let s = r.data;
  return A.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function If(e) {
  return !!(e && e.__CANCEL__);
}
let ts = class extends ne {
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
function kf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? ne.ERR_BAD_REQUEST : ne.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function b_(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function y_(e, t) {
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
function v_(e, t) {
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
const $s = (e, t, n = 3) => {
  let r = 0;
  const o = y_(50, 250);
  return v_((s) => {
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
}, Ml = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Dl = (e) => (...t) => A.asap(() => e(...t)), E_ = ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ot.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ot.origin),
  ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)
) : () => !0, w_ = ot.hasStandardBrowserEnv ? (
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
function S_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function A_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const T_ = /^https?:(?!\/\/)/i, O_ = /[\t\n\r]/g;
function R_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function C_(e) {
  return R_(e).replace(O_, "");
}
function Fl(e, t) {
  if (typeof e == "string" && T_.test(C_(e)))
    throw new ne(
      'Invalid URL: missing "//" after protocol',
      ne.ERR_INVALID_URL,
      t
    );
}
function Pf(e, t, n, r) {
  Fl(t, r);
  let o = !S_(t);
  return e && (o || n === !1) ? (Fl(e, r), A_(e, t)) : t;
}
const Ul = (e) => e instanceof dt ? { ...e } : e;
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
    headers: (c, f, h) => o(Ul(c), Ul(f), h, !0)
  };
  return A.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const h = A.hasOwnProp(u, f) ? u[f] : o, p = A.hasOwnProp(e, f) ? e[f] : void 0, w = A.hasOwnProp(t, f) ? t[f] : void 0, S = h(p, w, f);
    A.isUndefined(S) && h !== l || (n[f] = S);
  }), A.hasOwnProp(t, "validateStatus") && A.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (A.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const L_ = ["content-type", "content-length"];
function I_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    L_.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const k_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function xf(e) {
  const t = Hn({}, e), n = (h) => A.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let i = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = i = dt.from(i), t.url = Rf(
    Pf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const h = A.getSafeProp(l, "username") || "", p = A.getSafeProp(l, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (p ? k_(p) : ""))
      );
    } catch (w) {
      throw ne.from(w, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (A.isFormData(r) && (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv || A.isReactNative(r) ? i.setContentType(void 0) : A.isFunction(r.getHeaders) && I_(i, r.getHeaders(), n("formDataHeaderPolicy"))), ot.hasStandardBrowserEnv && (A.isFunction(o) && (o = o(t)), o === !0 || o == null && E_(t.url))) {
    const p = s && a && w_.read(a);
    p && i.set(s, p);
  }
  return t;
}
const P_ = typeof XMLHttpRequest < "u", x_ = P_ && function(e) {
  return new Promise(function(n, r) {
    const o = xf(e);
    let s = o.data;
    const a = dt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = o, c, f, h, p, w;
    function S() {
      p && p(), w && w(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let T = new XMLHttpRequest();
    T.open(o.method.toUpperCase(), o.url, !0), T.timeout = o.timeout;
    function v() {
      if (!T)
        return;
      const y = dt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), C = {
        data: !i || i === "text" || i === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: y,
        config: e,
        request: T
      };
      kf(
        function(D) {
          n(D), S();
        },
        function(D) {
          r(D), S();
        },
        C
      ), T = null;
    }
    "onloadend" in T ? T.onloadend = v : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.startsWith("file:")) || setTimeout(v);
    }, T.onabort = function() {
      T && (r(new ne("Request aborted", ne.ECONNABORTED, e, T)), S(), T = null);
    }, T.onerror = function(E) {
      const C = E && E.message ? E.message : "Network Error", R = new ne(C, ne.ERR_NETWORK, e, T);
      R.event = E || null, r(R), S(), T = null;
    }, T.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || za;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(
        new ne(
          E,
          C.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          e,
          T
        )
      ), S(), T = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in T && A.forEach(wf(a), function(E, C) {
      T.setRequestHeader(C, E);
    }), A.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials), i && i !== "json" && (T.responseType = o.responseType), u && ([h, w] = $s(u, !0), T.addEventListener("progress", h)), l && T.upload && ([f, p] = $s(l), T.upload.addEventListener("progress", f), T.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (c = (y) => {
      T && (r(!y || y.type ? new ts(null, e, T) : y), T.abort(), S(), T = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const x = b_(o.url);
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
}, N_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, a();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof ne ? u : new ts(u instanceof Error ? u.message : u)
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
}, M_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, D_ = async function* (e, t) {
  for await (const n of F_(e))
    yield* M_(n, t);
}, F_ = async function* (e) {
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
}, $l = (e, t, n, r) => {
  const o = D_(e, t);
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
}, Hs = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, U_ = (e, t, n) => t + 2 < n && Hs(e.charCodeAt(t + 1)) && Hs(e.charCodeAt(t + 2));
function $_(e) {
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
        Hs(w) && Hs(S) && (a -= 2, p += 2);
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
    if (l === 37 && U_(r, a, i))
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
const Ya = "1.18.1", Hl = 64 * 1024, { isFunction: ds } = A, H_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Vl = (e) => {
  if (!A.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, jl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, V_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, j_ = (e) => {
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
  const { fetch: o, Request: s, Response: a } = e, i = o ? ds(o) : typeof fetch == "function", l = ds(s), u = ds(a);
  if (!i)
    return !1;
  const c = i && ds(n), f = i && (typeof r == "function" ? /* @__PURE__ */ ((v) => (x) => v.encode(x))(new r()) : async (v) => new Uint8Array(await new s(v).arrayBuffer())), h = l && c && jl(() => {
    let v = !1;
    const x = new s(ot.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), y = x.headers.has("Content-Type");
    return x.body != null && x.body.cancel(), v && !y;
  }), p = u && c && jl(() => A.isReadableStream(new a("").body)), w = {
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
      signal: C,
      cancelToken: R,
      timeout: D,
      onDownloadProgress: N,
      onUploadProgress: O,
      responseType: j,
      headers: ee,
      withCredentials: U = "same-origin",
      fetchOptions: te,
      maxContentLength: ae,
      maxBodyLength: fe
    } = xf(v);
    const ie = A.isNumber(ae) && ae > -1, V = A.isNumber(fe) && fe > -1, Q = (de) => A.hasOwnProp(v, de) ? v[de] : void 0;
    let _e = o || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let Ce = N_(
      [C, R && R.toAbortSignal()],
      D
    ), pe = null;
    const ve = Ce && Ce.unsubscribe && (() => {
      Ce.unsubscribe();
    });
    let Ue, je = null;
    const rt = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      v,
      pe
    );
    try {
      let de;
      const B = Q("auth");
      if (B) {
        const I = A.getSafeProp(B, "username") || "", M = A.getSafeProp(B, "password") || "";
        de = {
          username: I,
          password: M
        };
      }
      if (V_(x)) {
        const I = new URL(x, ot.origin);
        if (!de && (I.username || I.password)) {
          const M = Vl(I.username), Y = Vl(I.password);
          de = {
            username: M,
            password: Y
          };
        }
        (I.username || I.password) && (I.username = "", I.password = "", x = I.href);
      }
      if (de && (ee.delete("authorization"), ee.set(
        "Authorization",
        "Basic " + btoa(H_((de.username || "") + ":" + (de.password || "")))
      )), ie && typeof x == "string" && x.startsWith("data:") && $_(x) > ae)
        throw new ne(
          "maxContentLength size of " + ae + " exceeded",
          ne.ERR_BAD_RESPONSE,
          v,
          pe
        );
      if (V && y !== "get" && y !== "head") {
        const I = await S(E);
        if (typeof I == "number" && isFinite(I) && (Ue = I, I > fe))
          throw rt();
      }
      const re = V && (A.isReadableStream(E) || A.isStream(E)), oe = (I, M, Y) => $l(
        I,
        Hl,
        (K) => {
          if (V && K > fe)
            throw je = rt();
          M && M(K);
        },
        Y
      );
      if (h && y !== "get" && y !== "head" && (O || re)) {
        if (Ue = Ue ?? await T(ee, E), Ue !== 0 || re) {
          let I = new s(x, {
            method: "POST",
            body: E,
            duplex: "half"
          }), M;
          if (A.isFormData(E) && (M = I.headers.get("content-type")) && ee.setContentType(M), I.body) {
            const [Y, K] = O && Ml(
              Ue,
              $s(Dl(O))
            ) || [];
            E = oe(I.body, Y, K);
          }
        }
      } else if (re && !l && c && y !== "get" && y !== "head")
        E = oe(E);
      else if (re && l && !h && y !== "get" && y !== "head")
        throw new ne(
          "Stream request bodies are not supported by the current fetch implementation",
          ne.ERR_NOT_SUPPORT,
          v,
          pe
        );
      A.isString(U) || (U = U ? "include" : "omit");
      const Re = l && "credentials" in s.prototype;
      if (A.isFormData(E)) {
        const I = ee.getContentType();
        I && /^multipart\/form-data/i.test(I) && !/boundary=/i.test(I) && ee.delete("content-type");
      }
      ee.set("User-Agent", "axios/" + Ya, !1);
      const qe = {
        ...te,
        signal: Ce,
        method: y.toUpperCase(),
        headers: wf(ee.normalize()),
        body: E,
        duplex: "half",
        credentials: Re ? U : void 0
      };
      pe = l && new s(x, qe);
      let g = await (l ? _e(pe, te) : _e(x, qe));
      const _ = dt.from(g.headers);
      if (ie) {
        const I = A.toFiniteNumber(_.getContentLength());
        if (I != null && I > ae)
          throw new ne(
            "maxContentLength size of " + ae + " exceeded",
            ne.ERR_BAD_RESPONSE,
            v,
            pe
          );
      }
      const b = p && (j === "stream" || j === "response");
      if (p && g.body && (N || ie || b && ve)) {
        const I = {};
        ["status", "statusText", "headers"].forEach((L) => {
          I[L] = g[L];
        });
        const M = A.toFiniteNumber(_.getContentLength()), [Y, K] = N && Ml(
          M,
          $s(Dl(N), !0)
        ) || [];
        let d = 0;
        const m = (L) => {
          if (ie && (d = L, d > ae))
            throw new ne(
              "maxContentLength size of " + ae + " exceeded",
              ne.ERR_BAD_RESPONSE,
              v,
              pe
            );
          Y && Y(L);
        };
        g = new a(
          $l(g.body, Hl, m, () => {
            K && K(), ve && ve();
          }),
          I
        );
      }
      j = j || "text";
      let P = await w[A.findKey(w, j) || "text"](
        g,
        v
      );
      if (ie && !p && !b) {
        let I;
        if (P != null && (typeof P.byteLength == "number" ? I = P.byteLength : typeof P.size == "number" ? I = P.size : typeof P == "string" && (I = typeof r == "function" ? new r().encode(P).byteLength : P.length)), typeof I == "number" && I > ae)
          throw new ne(
            "maxContentLength size of " + ae + " exceeded",
            ne.ERR_BAD_RESPONSE,
            v,
            pe
          );
      }
      return !b && ve && ve(), await new Promise((I, M) => {
        kf(I, M, {
          data: P,
          headers: dt.from(g.headers),
          status: g.status,
          statusText: g.statusText,
          config: v,
          request: pe
        });
      });
    } catch (de) {
      if (ve && ve(), Ce && Ce.aborted && Ce.reason instanceof ne) {
        const B = Ce.reason;
        throw B.config = v, pe && (B.request = pe), de !== B && Object.defineProperty(B, "cause", {
          __proto__: null,
          value: de,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), B;
      }
      if (je)
        throw pe && !je.request && (je.request = pe), je;
      if (de instanceof ne)
        throw pe && !de.request && (de.request = pe), de;
      if (de && de.name === "TypeError" && /Load failed|fetch/i.test(de.message)) {
        const B = new ne(
          "Network Error",
          ne.ERR_NETWORK,
          v,
          pe,
          de && de.response
        );
        throw Object.defineProperty(B, "cause", {
          __proto__: null,
          value: de.cause || de,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), B;
      }
      throw ne.from(de, de && de.code, v, pe, de && de.response);
    }
  };
}, B_ = /* @__PURE__ */ new Map(), Nf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let a = s.length, i = a, l, u, c = B_;
  for (; i--; )
    l = s[i], u = c.get(l), u === void 0 && c.set(l, u = i ? /* @__PURE__ */ new Map() : j_(t)), c = u;
  return u;
};
Nf();
const Xa = {
  http: n_,
  xhr: x_,
  fetch: {
    get: Nf
  }
};
A.forEach(Xa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Bl = (e) => `- ${e}`, W_ = (e) => A.isFunction(e) || e === null || e === !1;
function G_(e, t) {
  e = A.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !W_(r) && (o = Xa[(i = String(r)).toLowerCase()], o === void 0))
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
` + a.map(Bl).join(`
`) : " " + Bl(a[0]) : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + i,
      ne.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const Mf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: G_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Xa
};
function Do(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ts(null, e);
}
function Wl(e) {
  return Do(e), e.headers = dt.from(e.headers), e.data = Mo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mf.getAdapter(e.adapter || es.adapter, e)(e).then(
    function(r) {
      Do(e), e.response = r;
      try {
        r.data = Mo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = dt.from(r.headers), r;
    },
    function(r) {
      if (!If(r) && (Do(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Mo.call(
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
const co = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  co[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Gl = {};
co.transitional = function(t, n, r) {
  function o(s, a) {
    return "[Axios v" + Ya + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (t === !1)
      throw new ne(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !Gl[a] && (Gl[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, i) : !0;
  };
};
co.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function K_(e, t, n) {
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
const As = {
  assertOptions: K_,
  validators: co
}, it = As.validators;
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
    r !== void 0 && As.assertOptions(
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
    ), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : As.assertOptions(
      o,
      {
        encode: it.function,
        serialize: it.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), As.assertOptions(
      n,
      {
        baseUrl: it.spelling("baseURL"),
        withXsrfToken: it.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && A.merge(s.common, s[n.method]);
    s && A.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (w) => {
      delete s[w];
    }), n.headers = dt.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(S) {
      if (typeof S.runWhen == "function" && S.runWhen(n) === !1)
        return;
      l = l && S.synchronous;
      const T = n.transitional || za;
      T && T.legacyInterceptorReqResOrdering ? i.unshift(S.fulfilled, S.rejected) : i.push(S.fulfilled, S.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(S) {
      u.push(S.fulfilled, S.rejected);
    });
    let c, f = 0, h;
    if (!l) {
      const w = [Wl.bind(this), void 0];
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
      c = Wl.call(this, p);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Hn(this.defaults, t);
    const n = Pf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Rf(n, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  Fn.prototype[t] = function(n, r) {
    return this.request(
      Hn(r || {}, {
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
let z_ = class Df {
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
      r.reason || (r.reason = new ts(s, a, i), n(r.reason));
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
      token: new Df(function(o) {
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
function Y_(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const da = {
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
Object.entries(da).forEach(([e, t]) => {
  da[t] = e;
});
function Ff(e) {
  const t = new Fn(e), n = mf(Fn.prototype.request, t);
  return A.extend(n, Fn.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ff(Hn(e, o));
  }, n;
}
const We = Ff(es);
We.Axios = Fn;
We.CanceledError = ts;
We.CancelToken = z_;
We.isCancel = If;
We.VERSION = Ya;
We.toFormData = lo;
We.AxiosError = ne;
We.Cancel = We.CanceledError;
We.all = function(t) {
  return Promise.all(t);
};
We.spread = q_;
We.isAxiosError = Y_;
We.mergeConfig = Hn;
We.AxiosHeaders = dt;
We.formToJSON = (e) => Lf(A.isHTMLForm(e) ? new FormData(e) : e);
We.getAdapter = Mf.getAdapter;
We.HttpStatusCode = da;
We.default = We;
const {
  Axios: dv,
  AxiosError: mv,
  CanceledError: hv,
  isCancel: pv,
  CancelToken: gv,
  VERSION: _v,
  all: bv,
  Cancel: yv,
  isAxiosError: vv,
  spread: Ev,
  toFormData: wv,
  AxiosHeaders: Sv,
  HttpStatusCode: Av,
  formToJSON: Tv,
  getAdapter: Ov,
  mergeConfig: Rv,
  create: Cv
} = We, X_ = "X-Admin-UI-Request", J_ = "X-User-UI-Request";
function Kl(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Uf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function Q_(e) {
  const t = Uf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function Z_(e) {
  const t = Q_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function e1(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return Kl(Uf(e)) || Kl(n);
}
function t1(e) {
  return Z_(e);
}
const zl = "/api/v1", n1 = r1();
function $f(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function r1(e) {
  const n = (String(zl).trim() || zl).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : $f(n);
}
function Vs() {
  return n1;
}
function Hf(e) {
  const t = $f(e);
  try {
    return `${typeof window > "u" ? new URL(Vs()).origin : new URL(Vs(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Ja = "auth_token", s1 = "auth_user", uo = "refresh_token", Qa = "token_expires_at", o1 = "sub2api-auth-token-refresh", ql = 3e4, Vf = 1e3, a1 = 1e3, i1 = 25;
let vr = null;
function Za() {
  const e = localStorage.getItem(s1);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function l1() {
  const e = localStorage.getItem(uo);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Ja),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Qa)),
    userID: Za()
  };
}
function c1(e) {
  const t = localStorage.getItem(Ja), n = localStorage.getItem(uo), r = Number(localStorage.getItem(Qa));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Za() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function js(e, t) {
  const n = c1(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function u1(e, t, n = Date.now() + Vf) {
  for (; Date.now() < n; ) {
    const r = js(e, t);
    if (r)
      return r;
    await new Promise((o) => window.setTimeout(o, i1));
  }
  return js(e, t);
}
function f1(e) {
  localStorage.setItem(Ja, e.access_token), localStorage.setItem(Qa, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(uo, e.refresh_token);
}
async function d1(e, t, n = !1) {
  var o;
  const r = Date.now() + ql + a1;
  try {
    const a = (await We.post(
      `${Vs()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: ql }
    )).data;
    if (a.code !== 0 || !a.data)
      throw new Error(a.message || "Token refresh failed");
    if (localStorage.getItem(uo) !== e.refreshToken || Za() !== e.userID) {
      const i = js(e, t);
      if (i)
        return i;
      throw new Error("Session changed during token refresh");
    }
    return f1(a.data), a.data;
  } catch (s) {
    const a = (o = s.response) == null ? void 0 : o.status, i = typeof a == "number" && a >= 400 && a < 500, l = await u1(
      e,
      t,
      i && n ? r : Date.now() + Vf
    );
    if (l)
      return l;
    throw s;
  }
}
async function m1(e) {
  const t = l1(), n = async (r = !1) => {
    const o = js(t, e.failedAccessToken);
    return o || d1(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(o1, () => n(!1)) : n(!0);
}
function jf(e = {}) {
  if (vr)
    return vr;
  const t = m1(e);
  vr = t;
  const n = () => {
    vr === t && (vr = null);
  };
  return t.then(n, n), t;
}
const J = We.create({
  baseURL: Vs(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), h1 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
J.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = df()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = h1()), e.headers) {
      const n = String(e.url || "");
      e1(n) && (e.headers[X_] = "1"), t1(n) && (e.headers[J_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
J.interceptors.response.use(
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
          const w = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const S = t.headers, T = (S == null ? void 0 : S.Authorization) ?? (S == null ? void 0 : S.authorization), v = typeof T == "string" && T.startsWith("Bearer ") ? T.slice(7) : null, x = await jf({ failedAccessToken: v });
            return t.headers && (t.headers.Authorization = `Bearer ${x.access_token}`), J(t);
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
async function p1(e = !1) {
  const { data: t } = await J.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
function ei(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function fo(e) {
  localStorage.setItem("auth_token", e);
}
function mo(e) {
  localStorage.setItem("refresh_token", e);
}
function ho(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function Bf() {
  return localStorage.getItem("auth_token");
}
function Wf() {
  return localStorage.getItem("refresh_token");
}
function g1() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Gf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function _1(e) {
  const { data: t } = await J.post("/auth/login", e);
  return ei(t) || (fo(t.access_token), t.refresh_token && mo(t.refresh_token), t.expires_in && ho(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function b1(e) {
  const { data: t } = await J.post("/auth/login/2fa", e);
  return fo(t.access_token), t.refresh_token && mo(t.refresh_token), t.expires_in && ho(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function y1(e) {
  const { data: t } = await J.post("/auth/register", e);
  return fo(t.access_token), t.refresh_token && mo(t.refresh_token), t.expires_in && ho(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function v1() {
  return J.get("/auth/me");
}
async function E1() {
  const e = Wf();
  if (e)
    try {
      await J.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Gf();
}
function Kf(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function w1(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function S1(e) {
  return w1(e) ? "login" : "bind";
}
function A1(e) {
  return S1(e);
}
function T1(e) {
  return e.error === "invitation_required";
}
function O1(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function R1() {
  return jf();
}
async function C1() {
  const { data: e } = await J.post("/auth/revoke-all-sessions");
  return e;
}
function L1() {
  return Bf() !== null;
}
async function zf() {
  const { data: e } = await J.get("/settings/public");
  return e;
}
async function I1(e) {
  const { data: t } = await J.post("/auth/send-verify-code", e);
  return t;
}
async function k1(e) {
  const { data: t } = await J.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function P1(e) {
  const { data: t } = await J.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function x1(e) {
  const { data: t } = await J.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function N1(e) {
  const { data: t } = await J.post("/auth/forgot-password", e);
  return t;
}
async function M1(e) {
  const { data: t } = await J.post("/auth/reset-password", e);
  return t;
}
async function D1(e, t, n) {
  return qf(e, t, n);
}
async function F1(e, t, n) {
  return Yf(e, t, n);
}
async function U1(e, t, n) {
  return Xf(e, t, n);
}
async function po(e, t, n, r) {
  const o = r == null ? void 0 : r.trim(), { data: s } = await J.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...o ? { aff_code: o } : {},
      ...Kf(n)
    }
  );
  return s;
}
async function qf(e, t, n) {
  return po("linuxdo", e, t, n);
}
async function Yf(e, t, n) {
  return po("oidc", e, t, n);
}
async function Xf(e, t, n) {
  return po("wechat", e, t, n);
}
async function $1(e, t, n) {
  return po("dingtalk", e, t, n);
}
async function Jf(e) {
  const { data: t } = await J.post(
    "/auth/oauth/pending/exchange",
    Kf(e)
  );
  return t;
}
async function H1(e) {
  return Jf(e);
}
const Wn = {
  login: _1,
  login2FA: b1,
  isTotp2FARequired: ei,
  register: y1,
  getCurrentUser: v1,
  logout: E1,
  isAuthenticated: L1,
  setAuthToken: fo,
  setRefreshToken: mo,
  setTokenExpiresAt: ho,
  getAuthToken: Bf,
  getRefreshToken: Wf,
  getTokenExpiresAt: g1,
  clearAuthToken: Gf,
  getPublicSettings: zf,
  sendVerifyCode: I1,
  sendPendingOAuthVerifyCode: k1,
  validatePromoCode: P1,
  validateInvitationCode: x1,
  forgotPassword: N1,
  resetPassword: M1,
  refreshToken: R1,
  revokeAllSessions: C1,
  getPendingOAuthBindLoginKind: A1,
  isPendingOAuthCreateAccountRequired: T1,
  hasPendingOAuthSuggestedProfile: O1,
  completePendingOAuthBindLogin: Jf,
  createPendingLinuxDoOAuthAccount: qf,
  createPendingOIDCOAuthAccount: Yf,
  createPendingWeChatOAuthAccount: Xf,
  exchangePendingOAuthCompletion: H1,
  completeLinuxDoOAuthRegistration: D1,
  completeOIDCOAuthRegistration: F1,
  completeWeChatOAuthRegistration: U1,
  createPendingDingTalkOAuthAccount: $1
}, Yl = "零一 API", ti = /* @__PURE__ */ Ma("app", () => {
  const e = X(!1), t = X(!1), n = X(0), r = X(!1), o = X([]), s = X(!1), a = X(!1), i = X(Yl), l = X(""), u = X(""), c = X(""), f = X(""), h = X(""), p = X(null);
  let w = null, S = null, T = 0;
  const v = X(!1), x = X(!1), y = X(""), E = X(""), C = X(!1), R = X("source"), D = X(null);
  let N = 0;
  const O = be(() => o.value.length > 0), j = be(() => {
    var _;
    return ((_ = p.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
  }), ee = X(0);
  function U() {
    e.value = !e.value;
  }
  function te(_) {
    e.value = _;
  }
  function ae() {
    t.value = !t.value;
  }
  function fe(_) {
    t.value = _;
  }
  function ie(_) {
    _ ? ee.value++ : ee.value = Math.max(0, ee.value - 1), r.value = ee.value > 0;
  }
  function V(_, b, P) {
    const I = `toast-${++N}`, M = {
      id: I,
      type: _,
      message: b,
      duration: P,
      startTime: P !== void 0 ? Date.now() : void 0
    };
    return o.value.push(M), P !== void 0 && setTimeout(() => {
      ve(I);
    }, P), I;
  }
  function Q(_, b = 3e3) {
    return V("success", _, b);
  }
  function _e(_, b = 5e3) {
    return V("error", _, b);
  }
  function Ce(_, b = 3e3) {
    return V("info", _, b);
  }
  function pe(_, b = 4e3) {
    return V("warning", _, b);
  }
  function ve(_) {
    const b = o.value.findIndex((P) => P.id === _);
    b !== -1 && o.value.splice(b, 1);
  }
  function Ue() {
    o.value = [];
  }
  async function je(_) {
    ie(!0);
    try {
      return await _();
    } finally {
      ie(!1);
    }
  }
  async function rt(_, b) {
    ie(!0);
    try {
      return await _();
    } catch (P) {
      const I = b || P.message || tr.global.t("common.unknownError");
      return _e(I), null;
    } finally {
      ie(!1);
    }
  }
  function de() {
    e.value = !1, r.value = !1, ee.value = 0, o.value = [];
  }
  async function B(_ = !1) {
    if (v.value && !_)
      return {
        current_version: y.value,
        latest_version: E.value,
        has_update: C.value,
        build_type: R.value,
        release_info: D.value || void 0,
        cached: !0
      };
    if (x.value)
      return null;
    x.value = !0;
    try {
      const b = await p1(_);
      return y.value = b.current_version, E.value = b.latest_version, C.value = b.has_update, R.value = b.build_type || "source", D.value = b.release_info || null, v.value = !0, b;
    } catch (b) {
      return console.error("Failed to fetch version:", b), null;
    } finally {
      x.value = !1;
    }
  }
  function re() {
    v.value = !1, C.value = !1;
  }
  function oe(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), p.value = _, i.value = _.site_name || Yl, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", h.value = _.doc_url || "", s.value = !0;
  }
  function Re(_ = !1) {
    if (w)
      return _ && !S && (T += 1, S = w.then(() => Re(!0)).finally(() => {
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
      P = zf();
    } catch (M) {
      return console.error("Failed to fetch public settings:", M), a.value = !1, Promise.resolve(null);
    }
    const I = P.then((M) => (b === T && oe(M), M)).catch((M) => (console.error("Failed to fetch public settings:", M), null)).finally(() => {
      w === I && (w = null, a.value = !1);
    });
    return w = I, I;
  }
  function qe() {
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
    hasUpdate: C,
    buildType: R,
    releaseInfo: D,
    // Computed
    hasActiveToasts: O,
    backendModeEnabled: j,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: te,
    toggleMobileSidebar: ae,
    setMobileOpen: fe,
    setLoading: ie,
    showToast: V,
    showSuccess: Q,
    showError: _e,
    showInfo: Ce,
    showWarning: pe,
    hideToast: ve,
    clearAllToasts: Ue,
    withLoading: je,
    withLoadingAndError: rt,
    reset: de,
    // Version actions
    fetchVersion: B,
    clearVersionCache: re,
    // Public settings actions
    fetchPublicSettings: Re,
    clearPublicSettingsCache: qe,
    initFromInjectedConfig: g
  };
}), V1 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, j1 = { class: "p-4" }, B1 = { class: "flex items-start gap-3" }, W1 = { class: "mt-0.5 flex-shrink-0" }, G1 = { class: "min-w-0 flex-1" }, K1 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, z1 = ["onClick"], q1 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, Y1 = /* @__PURE__ */ rn({
  __name: "Toast",
  setup(e) {
    const t = ti(), n = be(() => t.toasts), r = (l) => {
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
    return (l, u) => (ge(), _n(Ca, { to: "body" }, [
      H("div", V1, [
        we(gh, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: rr(() => [
            (ge(!0), Ae(He, null, mn(n.value, (c) => (ge(), Ae("div", {
              key: c.id,
              class: Ke([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                s(c.type)
              ])
            }, [
              H("div", j1, [
                H("div", B1, [
                  H("div", W1, [
                    we(Ge, {
                      name: r(c.type),
                      size: "md",
                      class: Ke(o(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  H("div", G1, [
                    c.title ? (ge(), Ae("p", K1, ue(c.title), 1)) : Ze("", !0),
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
                    we(Ge, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, z1)
                ])
              ]),
              c.duration ? (ge(), Ae("div", q1, [
                H("div", {
                  class: Ke(["h-full toast-progress", a(c.type)]),
                  style: ur({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : Ze("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), ni = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, X1 = /* @__PURE__ */ ni(Y1, [["__scopeId", "data-v-fc5fa96e"]]), J1 = { class: "modal-header" }, Q1 = {
  key: 0,
  class: "modal-footer"
}, Z1 = /* @__PURE__ */ rn({
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
    const r = `modal-title-${++n}`, o = X(null), s = X(null);
    let a = null;
    const i = e, l = t, u = be(() => i.zIndex !== 50 ? { zIndex: i.zIndex } : void 0), c = be(() => ({
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
          if (a = document.activeElement, document.body.classList.add("modal-open"), await Qn(), s.value && (s.value.scrollTop = 0), o.value) {
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
    }), Yr(() => {
      document.removeEventListener("keydown", h), document.body.classList.remove("modal-open");
    }), (p, w) => (ge(), _n(Ca, { to: "body" }, [
      we(wu, { name: "modal" }, {
        default: rr(() => [
          e.show ? (ge(), Ae("div", {
            key: 0,
            class: "modal-overlay",
            style: ur(u.value),
            "aria-labelledby": r,
            role: "dialog",
            "aria-modal": "true",
            onClick: Qe(f, ["self"])
          }, [
            H("div", {
              ref_key: "dialogRef",
              ref: o,
              class: Ke(["modal-content", "base-dialog-surface", "console-skin-dialog", c.value, e.panelClass]),
              onClick: w[1] || (w[1] = Qe(() => {
              }, ["stop"]))
            }, [
              H("div", J1, [
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
                  we(Ge, {
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
                ks(p.$slots, "default")
              ], 512),
              p.$slots.footer ? (ge(), Ae("div", Q1, [
                ks(p.$slots, "footer")
              ])) : Ze("", !0)
            ], 2)
          ], 4)) : Ze("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), eb = ["disabled", "aria-expanded", "id", "aria-label", "aria-describedby", "onKeydown"], tb = { class: "select-value" }, nb = ["onKeydown"], rb = { class: "select-icon" }, sb = {
  key: 0,
  class: "select-search"
}, ob = ["placeholder", "aria-label"], ab = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"], ib = {
  key: 0,
  class: "select-empty"
}, Fo = 8, lb = 200, cb = 300, ub = /* @__PURE__ */ rn({
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
    const { t: n } = ir(), r = `select-${Math.random().toString(36).substring(2, 9)}`, o = e, s = t, a = X(!1), i = X(""), l = X(-1), u = X(null), c = X(null), f = X(null), h = X(null), p = X(null), w = X("bottom"), S = X(null), T = be(() => o.placeholder ?? n("common.selectOption")), v = be(() => o.searchPlaceholder ?? n("common.searchPlaceholder")), x = be(() => o.emptyText ?? n("common.noOptionsFound"));
    let y = null;
    const E = be(() => o.remote ? !0 : o.searchable === "auto" ? o.options.length > 5 : o.searchable), C = be(() => {
      if (!S.value) return {};
      const B = S.value, re = Math.max(Fo, window.innerWidth - Fo), oe = Math.min(
        Math.max(Fo, B.left),
        re
      ), Re = Math.max(0, re - oe), qe = Math.max(lb, B.width), g = Math.min(qe, Re), _ = {
        position: "fixed",
        left: `${oe}px`,
        minWidth: `${g}px`,
        maxWidth: `${Re}px`,
        zIndex: "100000020"
      };
      return w.value === "top" ? _.bottom = `${window.innerHeight - B.top + 4}px` : _.top = `${B.bottom + 4}px`, _;
    }), R = (B) => typeof B == "object" && B !== null ? B[o.valueKey] : B, D = (B) => String(typeof B == "object" && B !== null ? B[o.labelKey] ?? "" : B ?? ""), N = (B) => typeof B == "object" && B !== null ? !!B.disabled : !1, O = (B) => typeof B == "object" && B !== null ? B.kind === "group" : !1, j = be(() => o.options.find((B) => R(B) === o.modelValue) || null), ee = be(() => j.value ? D(j.value) : o.creatable && o.modelValue ? String(o.modelValue) : T.value), U = be(
      () => o.modelValue !== null && o.modelValue !== void 0 && o.modelValue !== ""
    ), te = be(() => {
      let B = o.options;
      if (E.value && i.value && !o.remote) {
        const re = i.value.toLowerCase();
        if (B = B.filter((oe) => !!(D(oe).toLowerCase().includes(re) || oe.description && String(oe.description).toLowerCase().includes(re))), o.creatable && i.value.trim()) {
          const oe = i.value.trim(), Re = o.creatablePrefix || n("common.search");
          B = [{ [o.valueKey]: oe, [o.labelKey]: `${Re} "${oe}"`, _creatable: !0 }, ...B];
        }
      }
      return B;
    }), ae = (B) => R(B) === o.modelValue, fe = (B) => {
      const re = te.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Re = (B + oe) % re.length;
        if (!N(re[Re])) return Re;
      }
      return -1;
    }, ie = (B) => {
      const re = te.value;
      if (re.length === 0) return -1;
      for (let oe = 0; oe < re.length; oe++) {
        const Re = (B - oe + re.length) % re.length;
        if (!N(re[Re])) return Re;
      }
      return -1;
    }, V = (B, re) => {
      N(B) || O(B) || (l.value = re);
    }, Q = () => {
      u.value && (S.value = u.value.getBoundingClientRect());
    }, _e = () => {
      u.value && (Q(), Qn(() => {
        if (!h.value || !S.value) return;
        const B = h.value.offsetHeight || 240, re = window.innerHeight - S.value.bottom, oe = S.value.top;
        re < B && oe > B ? w.value = "top" : w.value = "bottom";
      }));
    }, Ce = () => {
      o.disabled || (a.value = !a.value);
    };
    yt(a, (B) => {
      if (B) {
        if (_e(), te.value.length === 0)
          l.value = -1;
        else {
          const re = te.value.findIndex(ae), oe = re >= 0 ? re : 0;
          l.value = N(te.value[oe]) ? fe(oe + 1) : oe;
        }
        E.value && Qn(() => {
          var re;
          return (re = f.value) == null ? void 0 : re.focus();
        }), window.addEventListener("scroll", Q, { capture: !0, passive: !0 }), window.addEventListener("resize", _e);
      } else
        i.value = "", l.value = -1, y && (clearTimeout(y), y = null), window.removeEventListener("scroll", Q, { capture: !0 }), window.removeEventListener("resize", _e);
    }), yt(i, (B) => {
      !o.remote || !a.value || (y && clearTimeout(y), y = setTimeout(() => {
        y = null, s("search", B.trim());
      }, cb));
    });
    const pe = (B) => {
      var oe;
      const re = R(B) ?? null;
      s("update:modelValue", re), s("change", re, B), a.value = !1, (oe = c.value) == null || oe.focus();
    }, ve = () => {
      o.disabled || (s("update:modelValue", null), s("change", null, null));
    }, Ue = () => {
      a.value || (a.value = !0);
    }, je = (B) => {
      var re;
      switch (B.key) {
        case "ArrowDown":
          B.preventDefault(), l.value = fe(l.value + 1), l.value >= 0 && rt();
          break;
        case "ArrowUp":
          B.preventDefault(), l.value = ie(l.value - 1), l.value >= 0 && rt();
          break;
        case "Enter":
          if (B.preventDefault(), l.value >= 0 && l.value < te.value.length) {
            const oe = te.value[l.value];
            N(oe) || pe(oe);
          }
          break;
        case "Escape":
          B.preventDefault(), a.value = !1, (re = c.value) == null || re.focus();
          break;
        case "Tab":
          a.value = !1;
          break;
      }
    }, rt = () => {
      Qn(() => {
        const B = p.value;
        if (!B) return;
        const re = B.children[l.value];
        re && (re.offsetTop < B.scrollTop ? B.scrollTop = re.offsetTop : re.offsetTop + re.offsetHeight > B.scrollTop + B.offsetHeight && (B.scrollTop = re.offsetTop + re.offsetHeight - B.offsetHeight));
      });
    }, de = (B) => {
      var qe;
      const re = B.target, oe = !!re.closest(`.${r}`), Re = (qe = u.value) == null ? void 0 : qe.contains(re);
      !oe && !Re && a.value && (a.value = !1);
    };
    return fr(() => {
      document.addEventListener("click", de);
    }), Yr(() => {
      document.removeEventListener("click", de), window.removeEventListener("scroll", Q, { capture: !0 }), window.removeEventListener("resize", _e), y && (clearTimeout(y), y = null);
    }), (B, re) => (ge(), Ae("div", {
      class: "relative",
      ref_key: "containerRef",
      ref: u
    }, [
      H("button", {
        ref_key: "triggerRef",
        ref: c,
        type: "button",
        onClick: Ce,
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
          Lr(Qe(Ue, ["prevent"]), ["down"]),
          Lr(Qe(Ue, ["prevent"]), ["up"])
        ]
      }, [
        H("span", tb, [
          ks(B.$slots, "selected", { option: j.value }, () => [
            qn(ue(ee.value), 1)
          ], !0)
        ]),
        e.clearable && U.value && !e.disabled ? (ge(), Ae("span", {
          key: 0,
          class: "select-clear",
          role: "button",
          tabindex: "-1",
          "aria-label": "Clear selection",
          onClick: Qe(ve, ["stop"]),
          onMousedown: re[0] || (re[0] = Qe(() => {
          }, ["stop"])),
          onKeydown: Lr(Qe(ve, ["stop", "prevent"]), ["enter"])
        }, [
          we(Ge, {
            name: "x",
            size: "sm"
          })
        ], 40, nb)) : Ze("", !0),
        H("span", rb, [
          we(Ge, {
            name: "chevronDown",
            size: "md",
            class: Ke(["transition-transform duration-200", a.value && "rotate-180"])
          }, null, 8, ["class"])
        ])
      ], 42, eb),
      (ge(), _n(Ca, { to: "body" }, [
        we(wu, { name: "select-dropdown" }, {
          default: rr(() => [
            a.value ? (ge(), Ae("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: Ke(["select-dropdown-portal console-skin-select-menu", [r]]),
              style: ur(C.value),
              role: "listbox",
              onClick: re[3] || (re[3] = Qe(() => {
              }, ["stop"])),
              onMousedown: re[4] || (re[4] = Qe(() => {
              }, ["stop"])),
              onKeydown: je
            }, [
              E.value ? (ge(), Ae("div", sb, [
                we(Ge, {
                  name: "search",
                  size: "sm",
                  class: "text-gray-400"
                }),
                jo(H("input", {
                  ref_key: "searchInputRef",
                  ref: f,
                  "onUpdate:modelValue": re[1] || (re[1] = (oe) => i.value = oe),
                  type: "text",
                  placeholder: v.value,
                  "aria-label": v.value,
                  class: "select-search-input",
                  onClick: re[2] || (re[2] = Qe(() => {
                  }, ["stop"]))
                }, null, 8, ob), [
                  [Jo, i.value]
                ])
              ])) : Ze("", !0),
              H("div", {
                class: "select-options",
                ref_key: "optionsListRef",
                ref: p
              }, [
                (ge(!0), Ae(He, null, mn(te.value, (oe, Re) => (ge(), Ae("div", {
                  key: `${typeof R(oe)}:${String(R(oe) ?? "")}`,
                  role: "option",
                  "aria-selected": ae(oe),
                  "aria-disabled": N(oe),
                  onClick: Qe((qe) => !N(oe) && pe(oe), ["stop"]),
                  onMouseenter: (qe) => V(oe, Re),
                  class: Ke([
                    "select-option",
                    O(oe) && "select-option-group",
                    ae(oe) && "select-option-selected",
                    N(oe) && !O(oe) && "select-option-disabled",
                    l.value === Re && !O(oe) && "select-option-focused"
                  ])
                }, [
                  ks(B.$slots, "option", {
                    option: oe,
                    selected: ae(oe)
                  }, () => [
                    oe._creatable ? (ge(), _n(Ge, {
                      key: 0,
                      name: "search",
                      size: "sm",
                      class: "flex-shrink-0 text-gray-400"
                    })) : Ze("", !0),
                    H("span", {
                      class: Ke(["select-option-label", oe._creatable && "italic text-gray-500 dark:text-dark-300"])
                    }, ue(D(oe)), 3),
                    ae(oe) ? (ge(), _n(Ge, {
                      key: 1,
                      name: "check",
                      size: "sm",
                      class: "text-primary-500",
                      "stroke-width": 2
                    })) : Ze("", !0)
                  ], !0)
                ], 42, ab))), 128)),
                te.value.length === 0 ? (ge(), Ae("div", ib, ue(o.loading ? le(n)("common.loading") : x.value), 1)) : Ze("", !0)
              ], 512)
            ], 38)) : Ze("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), ms = /* @__PURE__ */ ni(ub, [["__scopeId", "data-v-fbc717eb"]]);
function Kr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ts(e, t, n = e.status) {
  return Object.assign(new Error(t), {
    code: n,
    status: e.status,
    requestId: e.headers.get("X-Request-Id") || ""
  });
}
async function Qf(e) {
  let t;
  try {
    t = await e.json();
  } catch (r) {
    throw r instanceof SyntaxError ? e.ok ? Ts(e, "Invalid gateway response", "INVALID_GATEWAY_RESPONSE") : Ts(e, e.statusText || `HTTP ${e.status}`) : r;
  }
  const n = Kr(t) ? t : null;
  if (!e.ok || (n == null ? void 0 : n.error) != null) {
    const r = Kr(n == null ? void 0 : n.error) ? n.error : null, o = typeof (r == null ? void 0 : r.message) == "string" && r.message.trim() ? r.message : typeof (n == null ? void 0 : n.message) == "string" && n.message.trim() ? n.message : e.ok ? "Image generation failed" : e.statusText || `HTTP ${e.status}`, s = typeof (r == null ? void 0 : r.code) == "string" || typeof (r == null ? void 0 : r.code) == "number" ? r.code : e.status;
    throw Ts(e, o, s);
  }
  return t;
}
function fb(e) {
  return !Kr(e) || !Array.isArray(e.data) || e.model != null && typeof e.model != "string" ? !1 : e.data.every((t) => Kr(t) && ["b64_json", "url", "revised_prompt", "mime_type", "output_format"].every((n) => t[n] == null || typeof t[n] == "string") && [t.b64_json, t.url].some((n) => typeof n == "string" && n.trim()));
}
function db(e) {
  if (!Kr(e)) return [];
  const t = e, n = Array.isArray(t.data) ? t.data : Array.isArray(t.models) ? t.models : [], r = /* @__PURE__ */ new Set(), o = [];
  for (const s of n) {
    const i = (typeof s == "string" ? s : s && typeof s == "object" ? String(s.id || s.name || "") : "").trim().replace(/^models\//, ""), l = i.toLowerCase(), u = l.startsWith("gpt-image-") || l === "grok-imagine" || l === "grok-imagine-edit" || l.startsWith("grok-imagine-image");
    !i || !u || r.has(i) || (r.add(i), o.push(i));
  }
  return o;
}
async function mb(e, t = {}) {
  const n = await fetch(Hf("/v1/models"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${e}`
    },
    signal: t.signal
  });
  return db(await Qf(n));
}
async function hb(e, t, n = {}) {
  const { referenceImages: r = [], ...o } = t, s = r.length > 0, a = { Authorization: `Bearer ${e}` };
  let i;
  if (s) {
    const c = new FormData();
    c.append("model", t.model), c.append("prompt", t.prompt), t.n !== void 0 && c.append("n", String(t.n)), t.size && c.append("size", t.size), t.quality && c.append("quality", t.quality), t.response_format && c.append("response_format", t.response_format), r.forEach((f) => c.append("image", f, f.name)), i = c;
  } else
    a["Content-Type"] = "application/json", i = JSON.stringify(o);
  const l = await fetch(
    Hf(s ? "/v1/images/edits" : "/v1/images/generations"),
    { method: "POST", headers: a, body: i, signal: n.signal }
  ), u = await Qf(l);
  if (!fb(u)) throw Ts(l, "Invalid image response", "INVALID_IMAGE_RESPONSE");
  return u;
}
const pb = "zero-one-image-generation", Et = "history", ma = 20;
function ri() {
  return typeof indexedDB > "u" ? Promise.reject(new Error("IndexedDB is not available")) : new Promise((e, t) => {
    const n = indexedDB.open(pb, 1);
    n.onupgradeneeded = () => {
      n.result.objectStoreNames.contains(Et) || n.result.createObjectStore(Et, { keyPath: "id" });
    }, n.onsuccess = () => e(n.result), n.onerror = () => t(n.error || new Error("Failed to open IndexedDB"));
  });
}
function si(e) {
  return new Promise((t, n) => {
    e.onsuccess = () => t(e.result), e.onerror = () => n(e.error || new Error("IndexedDB request failed"));
  });
}
function ha(e) {
  return new Promise((t, n) => {
    e.oncomplete = () => t(), e.onerror = () => n(e.error || new Error("IndexedDB transaction failed")), e.onabort = () => n(e.error || new Error("IndexedDB transaction aborted"));
  });
}
function Zf(e, t) {
  return e.userId === t && Array.isArray(e.images) && e.images.length > 0;
}
async function gb(e) {
  const t = await ri();
  try {
    return (await si(
      t.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((r) => Zf(r, e)).sort((r, o) => o.createdAt - r.createdAt).slice(0, ma);
  } finally {
    t.close();
  }
}
async function _b(e, t) {
  const n = await ri();
  try {
    const r = n.transaction(Et, "readwrite");
    r.objectStore(Et).put({ ...t, userId: e }), await ha(r);
    const s = (await si(
      n.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((i) => Zf(i, e)).sort((i, l) => l.createdAt - i.createdAt), a = s.slice(ma);
    if (a.length > 0) {
      const i = n.transaction(Et, "readwrite");
      a.forEach((l) => i.objectStore(Et).delete(l.id)), await ha(i);
    }
    return s.slice(0, ma);
  } finally {
    n.close();
  }
}
async function bb(e) {
  const t = await ri();
  try {
    const r = (await si(
      t.transaction(Et, "readonly").objectStore(Et).getAll()
    )).filter((s) => s.userId === e);
    if (r.length === 0) return;
    const o = t.transaction(Et, "readwrite");
    r.forEach((s) => o.objectStore(Et).delete(s.id)), await ha(o);
  } finally {
    t.close();
  }
}
async function yb(e = 1, t = 10, n, r) {
  const { data: o } = await J.get("/keys", {
    params: { page: e, page_size: t, ...n },
    signal: r == null ? void 0 : r.signal
  });
  return o;
}
async function vb(e) {
  const { data: t } = await J.get(`/keys/${e}`);
  return t;
}
async function Eb(e, t, n, r, o, s, a, i) {
  const l = { name: e };
  t !== void 0 && (l.group_id = t), n && (l.custom_key = n), r && r.length > 0 && (l.ip_whitelist = r), o && o.length > 0 && (l.ip_blacklist = o), s !== void 0 && s > 0 && (l.quota = s), a !== void 0 && a > 0 && (l.expires_in_days = a), i != null && i.rate_limit_5h && i.rate_limit_5h > 0 && (l.rate_limit_5h = i.rate_limit_5h), i != null && i.rate_limit_1d && i.rate_limit_1d > 0 && (l.rate_limit_1d = i.rate_limit_1d), i != null && i.rate_limit_7d && i.rate_limit_7d > 0 && (l.rate_limit_7d = i.rate_limit_7d);
  const { data: u } = await J.post("/keys", l);
  return u;
}
async function ed(e, t) {
  const { data: n } = await J.put(`/keys/${e}`, t);
  return n;
}
async function wb(e) {
  const { data: t } = await J.delete(`/keys/${e}`);
  return t;
}
async function Sb(e, t) {
  return ed(e, { status: t });
}
const Ab = {
  list: yb,
  getById: vb,
  create: Eb,
  update: ed,
  delete: wb,
  toggleStatus: Sb
};
function td() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function kr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (s) => s.charCodeAt(0)).buffer;
}
function pn(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function Tb(e) {
  const t = { ...e };
  t.challenge = kr(String(t.challenge));
  const n = { ...t.user };
  return n.id = kr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: kr(String(r.id))
  }))), t;
}
function Ob(e) {
  const t = { ...e };
  return t.challenge = kr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: kr(String(n.id))
  }))), t;
}
function Rb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: pn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: pn(t.attestationObject),
      clientDataJSON: pn(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function Cb(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: pn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: pn(t.authenticatorData),
      clientDataJSON: pn(t.clientDataJSON),
      signature: pn(t.signature),
      userHandle: pn(t.userHandle)
    }
  };
}
async function Lb(e) {
  td();
  const { data: t } = e ? await J.post("/auth/passkey/login/begin", e) : await J.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: Ob(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await J.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: Cb(n)
  });
  return r;
}
async function Ib(e, t) {
  td();
  const { data: n } = await J.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: Tb(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: o } = await J.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: Rb(r)
    }
  );
  return o;
}
async function kb() {
  const { data: e } = await J.get("/user/passkeys");
  return e;
}
async function Pb(e, t) {
  await J.patch(`/user/passkeys/${e}`, { name: t });
}
async function xb(e, t) {
  await J.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const Nb = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Lb,
  register: Ib,
  list: kb,
  rename: Pb,
  remove: xb
};
async function Mb() {
  const { data: e } = await J.get("/admin/settings");
  return e;
}
async function Db() {
  const { data: e } = await J.get("/admin/settings", {
    params: { scope: "navigation" }
  });
  return e;
}
async function Fb(e) {
  const { data: t } = await J.put(
    "/admin/settings",
    e
  );
  return t;
}
async function Ub(e) {
  const { data: t } = await J.post(
    "/admin/settings/test-smtp",
    e
  );
  return t;
}
async function $b(e) {
  const { data: t } = await J.post(
    "/admin/settings/send-test-email",
    e
  );
  return t;
}
async function Hb() {
  const { data: e } = await J.get(
    "/admin/settings/email-templates"
  );
  return e;
}
async function Vb(e, t) {
  const { data: n } = await J.get(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
  );
  return n;
}
async function jb(e, t, n) {
  const { data: r } = await J.put(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,
    n
  );
  return r;
}
async function Bb(e, t) {
  const { data: n } = await J.post(
    `/admin/settings/email-templates/${encodeURIComponent(e)}/${encodeURIComponent(t)}/restore-official`
  );
  return n;
}
async function Wb(e) {
  const { data: t } = await J.post(
    "/admin/settings/email-template-preview",
    e
  );
  return t;
}
async function Gb() {
  const { data: e } = await J.get(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function Kb() {
  const { data: e } = await J.post(
    "/admin/settings/admin-api-key/regenerate"
  );
  return e;
}
async function zb() {
  const { data: e } = await J.delete(
    "/admin/settings/admin-api-key"
  );
  return e;
}
async function qb() {
  const { data: e } = await J.get(
    "/admin/settings/overload-cooldown"
  );
  return e;
}
async function Yb(e) {
  const { data: t } = await J.put(
    "/admin/settings/overload-cooldown",
    e
  );
  return t;
}
async function Xb() {
  const { data: e } = await J.get(
    "/admin/settings/rate-limit-429-cooldown"
  );
  return e;
}
async function Jb(e) {
  const { data: t } = await J.put(
    "/admin/settings/rate-limit-429-cooldown",
    e
  );
  return t;
}
async function Qb() {
  const { data: e } = await J.get(
    "/admin/settings/panel-rate-limit"
  );
  return e;
}
async function Zb(e) {
  const { data: t } = await J.put(
    "/admin/settings/panel-rate-limit",
    e
  );
  return t;
}
async function ey() {
  const { data: e } = await J.get(
    "/admin/settings/stream-timeout"
  );
  return e;
}
async function ty(e) {
  const { data: t } = await J.put(
    "/admin/settings/stream-timeout",
    e
  );
  return t;
}
async function ny() {
  const { data: e } = await J.get(
    "/admin/settings/rectifier"
  );
  return e;
}
async function ry(e) {
  const { data: t } = await J.put(
    "/admin/settings/rectifier",
    e
  );
  return t;
}
async function sy() {
  const { data: e } = await J.get(
    "/admin/settings/beta-policy"
  );
  return e;
}
async function oy(e) {
  const { data: t } = await J.put(
    "/admin/settings/beta-policy",
    e
  );
  return t;
}
async function ay() {
  const { data: e } = await J.get(
    "/admin/settings/web-search-emulation"
  );
  return e;
}
async function iy(e) {
  const { data: t } = await J.put(
    "/admin/settings/web-search-emulation",
    e
  );
  return t;
}
async function ly(e) {
  const { data: t } = await J.post(
    "/admin/settings/web-search-emulation/test",
    { query: e }
  );
  return t;
}
async function cy(e) {
  await J.post(
    "/admin/settings/web-search-emulation/reset-usage",
    e
  );
}
const uy = {
  getSettings: Mb,
  getNavigationSettings: Db,
  updateSettings: Fb,
  testSmtpConnection: Ub,
  sendTestEmail: $b,
  getEmailTemplates: Hb,
  getEmailTemplate: Vb,
  updateEmailTemplate: jb,
  restoreOfficialEmailTemplate: Bb,
  previewEmailTemplate: Wb,
  getAdminApiKey: Gb,
  regenerateAdminApiKey: Kb,
  deleteAdminApiKey: zb,
  getOverloadCooldownSettings: qb,
  updateOverloadCooldownSettings: Yb,
  getRateLimit429CooldownSettings: Xb,
  updateRateLimit429CooldownSettings: Jb,
  getPanelRateLimitSettings: Qb,
  updatePanelRateLimitSettings: Zb,
  getStreamTimeoutSettings: ey,
  updateStreamTimeoutSettings: ty,
  getRectifierSettings: ny,
  updateRectifierSettings: ry,
  getBetaPolicySettings: sy,
  updateBetaPolicySettings: oy,
  getWebSearchEmulationConfig: ay,
  updateWebSearchEmulationConfig: iy,
  testWebSearchEmulation: ly,
  resetWebSearchUsage: cy
}, fy = {
  // ==================== Config ====================
  /** Get payment configuration (admin view) */
  getConfig() {
    return J.get("/admin/payment/config");
  },
  /** Update payment configuration */
  updateConfig(e) {
    return J.put("/admin/payment/config", e);
  },
  // ==================== Dashboard ====================
  /** Get payment dashboard statistics */
  getDashboard(e) {
    return J.get("/admin/payment/dashboard", {
      params: e ? { days: e } : void 0
    });
  },
  // ==================== Orders ====================
  /** Get all orders (paginated, with filters) */
  getOrders(e) {
    return J.get("/admin/payment/orders", { params: e });
  },
  /** Get a specific order by ID */
  getOrder(e) {
    return J.get(`/admin/payment/orders/${e}`);
  },
  /** Cancel an order (admin) */
  cancelOrder(e) {
    return J.post(`/admin/payment/orders/${e}/cancel`);
  },
  /** Retry recharge for a failed order */
  retryRecharge(e) {
    return J.post(`/admin/payment/orders/${e}/retry`);
  },
  /** Process a refund */
  refundOrder(e, t) {
    return J.post(`/admin/payment/orders/${e}/refund`, t);
  },
  /** Query and finalize a pending refund */
  queryRefund(e) {
    return J.post(`/admin/payment/orders/${e}/refund/query`);
  },
  // ==================== Channels ====================
  /** Get all payment channels */
  getChannels() {
    return J.get("/admin/payment/channels");
  },
  /** Create a payment channel */
  createChannel(e) {
    return J.post("/admin/payment/channels", e);
  },
  /** Update a payment channel */
  updateChannel(e, t) {
    return J.put(`/admin/payment/channels/${e}`, t);
  },
  /** Delete a payment channel */
  deleteChannel(e) {
    return J.delete(`/admin/payment/channels/${e}`);
  },
  // ==================== Subscription Plans ====================
  /** Get all subscription plans */
  getPlans() {
    return J.get("/admin/payment/plans");
  },
  /** Create a subscription plan */
  createPlan(e) {
    return J.post("/admin/payment/plans", e);
  },
  /** Update a subscription plan */
  updatePlan(e, t) {
    return J.put(`/admin/payment/plans/${e}`, t);
  },
  /** Delete a subscription plan */
  deletePlan(e) {
    return J.delete(`/admin/payment/plans/${e}`);
  },
  // ==================== Provider Instances ====================
  /** Get all provider instances */
  getProviders() {
    return J.get("/admin/payment/providers");
  },
  /** Create a provider instance */
  createProvider(e) {
    return J.post("/admin/payment/providers", e);
  },
  /** Update a provider instance */
  updateProvider(e, t) {
    return J.put(`/admin/payment/providers/${e}`, t);
  },
  /** Delete a provider instance */
  deleteProvider(e) {
    return J.delete(`/admin/payment/providers/${e}`);
  }
}, Xl = {
  settings: uy,
  payment: fy
}, hs = "auth_token", Uo = "auth_user", ps = "refresh_token", gs = "token_expires_at", Pr = "pending_auth_session", dy = 60 * 1e3, my = 120 * 1e3;
function hy(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function Jl() {
  const e = localStorage.getItem(Pr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: hy(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(Pr), null);
  } catch {
    return localStorage.removeItem(Pr), null;
  }
}
function py(e) {
  localStorage.setItem(Pr, JSON.stringify(e));
}
function Ql() {
  localStorage.removeItem(Pr);
}
const zr = /* @__PURE__ */ Ma("auth", () => {
  const e = X(null), t = X(null), n = X(null), r = X(null), o = X("standard"), s = X(null);
  let a = null, i = null;
  const l = be(() => !!t.value && !!e.value), u = be(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), c = be(() => o.value === "simple"), f = be(() => s.value !== null);
  function h(V, Q) {
    const { run_mode: _e, ...Ce } = V;
    return o.value = Q ?? (_e === "simple" ? "simple" : "standard"), e.value = Ce, localStorage.setItem(
      Uo,
      JSON.stringify({ ...Ce, run_mode: o.value })
    ), e.value;
  }
  function p(V) {
    const Q = localStorage.getItem(hs), _e = localStorage.getItem(Uo), Ce = localStorage.getItem(ps), pe = localStorage.getItem(gs);
    if (s.value = Jl(), Q && _e)
      try {
        const ve = JSON.parse(_e);
        return t.value = Q, h(ve, V), n.value = Ce, r.value = pe ? parseInt(pe, 10) : null, !0;
      } catch (ve) {
        console.error("Failed to parse saved user data:", ve), ie({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function w(V) {
    o.value = V;
  }
  function S() {
    p() && (fe().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), T(), n.value && r.value !== null && x(r.value));
  }
  function T() {
    v(), a = setInterval(() => {
      t.value && fe().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, dy);
  }
  function v() {
    a && (clearInterval(a), a = null);
  }
  function x(V) {
    i && (clearTimeout(i), i = null);
    const Q = Date.now(), _e = Math.max(0, V - Q - my);
    if (_e <= 0) {
      E();
      return;
    }
    i = setTimeout(() => {
      E();
    }, _e);
  }
  function y(V) {
    const Q = Date.now() + V * 1e3;
    r.value = Q, localStorage.setItem(gs, String(Q)), x(Q);
  }
  async function E() {
    if (n.value)
      try {
        const V = await Wn.refreshToken();
        t.value = V.access_token, n.value = V.refresh_token, y(V.expires_in);
      } catch (V) {
        console.error("Token refresh failed:", V);
      }
  }
  function C() {
    i && (clearTimeout(i), i = null);
  }
  async function R(V) {
    try {
      const Q = await Wn.login(V);
      return ei(Q) || O(Q), Q;
    } catch (Q) {
      throw ie({ preservePendingAuthSession: s.value !== null }), Q;
    }
  }
  async function D(V, Q) {
    try {
      const _e = await Wn.login2FA({ temp_token: V, totp_code: Q });
      return O(_e), e.value;
    } catch (_e) {
      throw ie({ preservePendingAuthSession: s.value !== null }), _e;
    }
  }
  async function N(V) {
    try {
      const Q = await Nb.login(V);
      return O(Q), e.value;
    } catch (Q) {
      throw ie({ preservePendingAuthSession: s.value !== null }), Q;
    }
  }
  function O(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(ps, V.refresh_token)), h(V.user), localStorage.setItem(hs, V.access_token), te(), T(), V.refresh_token && V.expires_in && y(V.expires_in);
  }
  async function j(V) {
    try {
      const Q = await Wn.register(V);
      return O(Q), e.value;
    } catch (Q) {
      throw ie({ preservePendingAuthSession: s.value !== null }), Q;
    }
  }
  async function ee(V) {
    v(), C(), t.value = null, e.value = null, o.value = "standard", t.value = V, localStorage.setItem(hs, V);
    const Q = localStorage.getItem(ps), _e = localStorage.getItem(gs);
    Q && (n.value = Q), _e && (r.value = parseInt(_e, 10));
    try {
      const Ce = await fe();
      return T(), Q && r.value !== null && x(r.value), te(), Ce;
    } catch (Ce) {
      throw ie({ preservePendingAuthSession: s.value !== null }), Ce;
    }
  }
  function U(V) {
    if (s.value = V, V) {
      py(V);
      return;
    }
    Ql();
  }
  function te() {
    U(null);
  }
  async function ae() {
    try {
      await Wn.logout();
    } catch (V) {
      console.warn("Logout API call failed, clearing local session anyway", V);
    } finally {
      ie();
    }
  }
  async function fe() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const V = await Wn.getCurrentUser();
      return h(V.data);
    } catch (V) {
      throw V.status === 401 && ie({ preservePendingAuthSession: s.value !== null }), V;
    }
  }
  function ie(V) {
    if (v(), C(), t.value = null, n.value = null, r.value = null, e.value = null, o.value = "standard", localStorage.removeItem(hs), localStorage.removeItem(Uo), localStorage.removeItem(ps), localStorage.removeItem(gs), V != null && V.preservePendingAuthSession) {
      s.value = Jl();
      return;
    }
    s.value = null, Ql();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: Mr(o),
    pendingAuthSession: Mr(s),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: R,
    loginWithPasskey: N,
    login2FA: D,
    register: j,
    setToken: ee,
    logout: ae,
    checkAuth: S,
    hydrateAuthSnapshot: p,
    setRunModeSnapshot: w,
    refreshUser: fe,
    setPendingAuthSession: U,
    clearPendingAuthSession: te
  };
}), gy = 100;
function Zl(e) {
  return !e.isAuthenticated || !e.token || !e.user ? "" : `${e.user.id}:${e.user.role}:${e.token}`;
}
function _y(e, t = {}) {
  const n = X(!1), r = X(!1), o = X([]);
  let s = "", a = 0, i = null, l = null;
  function u(f) {
    return s === f ? !1 : (s = f, a += 1, l == null || l.abort(), l = null, i = null, n.value = !1, r.value = !1, o.value = [], !0);
  }
  async function c(f = !1) {
    const h = zr(), p = Zl(h);
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
        const y = await Ab.list(x, gy, {
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
    const h = zr();
    return yt(
      () => Zl(h),
      (p) => {
        const w = n.value || i !== null || o.value.length > 0;
        u(p) && p && w && c();
      },
      { immediate: !0 }
    ), {
      allowedKeys: be(() => o.value),
      canAccess: be(() => o.value.length > 0),
      loaded: be(() => n.value),
      loading: be(() => r.value),
      refresh: c
    };
  };
}
function by(e) {
  var t;
  return e.status === "active" && ((t = e.group) == null ? void 0 : t.allow_image_generation) === !0 && (e.group.platform === "openai" || e.group.platform === "grok");
}
const yy = _y(by);
function vy() {
  const e = yy();
  return {
    allowedImageKeys: e.allowedKeys,
    canUseImageGeneration: e.canAccess,
    imageGenerationAccessLoaded: e.loaded,
    imageGenerationAccessLoading: e.loading,
    refreshImageGenerationAccess: e.refresh
  };
}
const Ey = /* @__PURE__ */ Ma("adminSettings", () => {
  const e = zr(), t = X(!1), n = X(!1), r = X(!0), o = X(!0), s = X("auto"), a = X(!1), i = X([]), l = X(null);
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
        const te = v, ae = f.then(() => (h === ae && (h = null), te === v ? y(!0) : void 0)).finally(() => {
          h === ae && (h = null);
        });
        h = ae;
      }
      return j ? h : f;
    }
    if (p && !j) return Promise.resolve();
    const ee = ++T, U = Xl.payment.getConfig().then((te) => {
      var ae;
      ee === T && (a.value = ((ae = te.data) == null ? void 0 : ae.enabled) ?? !1, p = !0);
    }).catch((te) => {
      ee === T && console.error("[adminSettings] Failed to fetch payment settings:", te);
    }).finally(() => {
      f === U && (f = null);
    });
    return f = U, U;
  }
  function E(j = !1) {
    var ae;
    if (!e.token || ((ae = e.user) == null ? void 0 : ae.role) !== "admin") return Promise.resolve();
    if (u) {
      if (j && !c) {
        w += 1;
        const fe = v, ie = u.then(() => (c === ie && (c = null), fe === v ? E(!0) : void 0)).finally(() => {
          c === ie && (c = null);
        });
        c = ie;
      }
      return j ? c : u;
    }
    if (y(j), t.value && !j) return Promise.resolve();
    j && (w += 1), n.value = !0;
    const ee = w, U = S, te = Xl.settings.getNavigationSettings().then((fe) => {
      ee === w && (U === S && (r.value = fe.ops_monitoring_enabled ?? !0, o.value = fe.ops_realtime_monitoring_enabled ?? !0, s.value = fe.ops_query_mode_default || "auto"), l.value = {
        ...fe,
        ops_monitoring_enabled: r.value,
        ops_realtime_monitoring_enabled: o.value,
        ops_query_mode_default: s.value
      }, i.value = Array.isArray(fe.custom_menu_items) ? fe.custom_menu_items : [], t.value = !0);
    }).catch((fe) => {
      ee === w && console.error("[adminSettings] Failed to fetch settings:", fe);
    }).finally(() => {
      u === te && (u = null, n.value = !1);
    });
    return u = te, te;
  }
  function C(j) {
    S += 1, r.value = j, l.value && (l.value.ops_monitoring_enabled = j);
  }
  function R(j) {
    S += 1, o.value = j, l.value && (l.value.ops_realtime_monitoring_enabled = j);
  }
  function D(j) {
    T += 1, a.value = j, p = !0;
  }
  function N(j) {
    S += 1, s.value = j || "auto", l.value && (l.value.ops_query_mode_default = s.value);
  }
  const O = () => C(!1);
  return typeof window < "u" && window.addEventListener("ops-monitoring-disabled", O), pc(() => {
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
    setOpsMonitoringEnabledLocal: C,
    setOpsRealtimeMonitoringEnabledLocal: R,
    setPaymentEnabledLocal: D,
    setOpsQueryModeDefaultLocal: N
  };
});
function wy(e) {
  var r, o;
  if (!e || typeof e != "object") return;
  const t = e, n = t.reason ?? t.code ?? ((o = (r = t.response) == null ? void 0 : r.data) == null ? void 0 : o.code);
  return n != null ? String(n) : void 0;
}
function In(e, t = "Unknown error", n) {
  var o, s, a, i;
  if (!e) return t;
  if (n) {
    const l = wy(e);
    if (l && n[l]) return n[l];
  }
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
const Sy = /\b(Mobi|Android|iPhone|iPod|Windows Phone|webOS|BlackBerry|IEMobile)\b/i, Ay = /\b(iPad|Tablet)\b/i;
function ec(e, t) {
  var n;
  try {
    return ((n = e == null ? void 0 : e(t)) == null ? void 0 : n.matches) === !0;
  } catch {
    return !1;
  }
}
function Ty(e = {}) {
  var c;
  const t = e.navigator;
  if (!t) return !1;
  if (((c = t.userAgentData) == null ? void 0 : c.mobile) === !0)
    return !0;
  const n = t.userAgent || "", r = t.maxTouchPoints ?? 0, o = t.platform === "MacIntel" && r > 1, s = Sy.test(n), a = Ay.test(n) || o, i = ec(e.matchMedia, "(pointer: coarse)"), l = ec(e.matchMedia, "(hover: none)"), u = r > 0;
  return s || a || i && l && u;
}
function tc() {
  return typeof navigator > "u" ? !1 : Ty({
    navigator,
    matchMedia: typeof window < "u" ? window.matchMedia.bind(window) : void 0
  });
}
const Oy = "image-tutorial", Ry = /* @__PURE__ */ new Set([
  "生图教程",
  "image tutorial",
  "image generation tutorial"
]);
function Cy(e) {
  return e.navigation_type !== "qr" && e.placement !== "header" && !!e.id.trim() && !!e.url.trim();
}
function Ly(e) {
  const t = (e == null ? void 0 : e.filter(Cy)) ?? [];
  return t.find((n) => n.id === Oy) ?? t.find((n) => Ry.has(n.label.trim().toLowerCase()));
}
function nc(e) {
  const t = Ly(e);
  return t ? `/custom/${encodeURIComponent(t.id)}` : "";
}
const Iy = { class: "online-image-module space-y-6" }, ky = {
  class: "online-image-layout",
  "data-testid": "image-generation-form"
}, Py = { class: "card space-y-5 p-5" }, xy = { "data-testid": "api-key-row" }, Ny = { class: "input-label mb-1.5 block" }, My = { class: "api-key-control-row" }, Dy = ["disabled"], Fy = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, Uy = {
  key: 0,
  class: "mt-1 text-xs text-gray-400 dark:text-gray-500"
}, $y = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "model-count-row"
}, Hy = {
  class: "input-label mb-1.5 block",
  "data-testid": "model-select-label"
}, Vy = { class: "input-label mb-1.5 block" }, jy = { "data-testid": "size-control" }, By = { class: "input-label mb-1.5 block" }, Wy = ["aria-label"], Gy = { class: "truncate" }, Ky = {
  class: "grid gap-4 sm:grid-cols-2",
  "data-testid": "quality-format-row"
}, zy = { class: "input-label mb-1.5 block" }, qy = { class: "input-label mb-1.5 block" }, Yy = {
  class: "space-y-2",
  "data-testid": "reference-images-panel"
}, Xy = { class: "flex flex-wrap items-center justify-between gap-3" }, Jy = {
  for: "reference-image-input",
  class: "input-label"
}, Qy = ["onKeydown"], Zy = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, e2 = ["src", "alt"], t2 = ["aria-label", "onClick"], n2 = { class: "mt-4 flex flex-wrap items-center gap-3 first:mt-0" }, r2 = { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200" }, s2 = { class: "min-w-0 flex-1" }, o2 = { class: "text-sm font-medium text-gray-800 dark:text-gray-200" }, a2 = { class: "mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400" }, i2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, l2 = {
  key: 1,
  class: "text-xs text-red-500"
}, c2 = ["href", "aria-disabled", "tabindex", "title"], u2 = {
  class: "space-y-4",
  "data-testid": "right-column"
}, f2 = {
  class: "card space-y-4 p-5",
  "data-testid": "prompt-panel"
}, d2 = { class: "input-label mb-1.5 block" }, m2 = ["placeholder"], h2 = { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, p2 = ["disabled"], g2 = {
  class: "card p-5",
  "data-testid": "results-panel"
}, _2 = { class: "flex items-start justify-between gap-3" }, b2 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, y2 = {
  class: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  role: "status"
}, v2 = {
  key: 0,
  class: "badge badge-gray"
}, E2 = {
  key: 0,
  class: "flex min-h-[360px] flex-col items-center justify-center py-8 text-center"
}, w2 = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, S2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, A2 = {
  key: 1,
  class: "mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
}, T2 = { class: "bg-gray-50 dark:bg-dark-900" }, O2 = ["src", "alt"], R2 = { class: "space-y-3 p-4" }, C2 = { class: "text-sm leading-6 text-gray-700 dark:text-gray-300" }, L2 = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, I2 = { class: "grid grid-cols-2 gap-2" }, k2 = ["onClick"], P2 = ["onClick"], x2 = { class: "card p-5" }, N2 = { class: "flex flex-wrap items-start justify-between gap-3" }, M2 = { class: "text-lg font-semibold text-gray-900 dark:text-white" }, D2 = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, F2 = ["disabled"], U2 = {
  key: 0,
  class: "flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400"
}, $2 = {
  key: 1,
  class: "py-8 text-center text-sm text-gray-400 dark:text-gray-500"
}, H2 = {
  key: 2,
  class: "mt-4 space-y-4"
}, V2 = { class: "border-b border-gray-100 px-4 py-3 dark:border-dark-700" }, j2 = { class: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400" }, B2 = { class: "mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300" }, W2 = { class: "grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4" }, G2 = ["src", "alt"], K2 = { class: "grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700" }, z2 = ["aria-label", "onClick"], q2 = ["aria-label", "onClick"], Y2 = { class: "space-y-5" }, X2 = { class: "text-sm text-gray-500 dark:text-gray-400" }, J2 = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, Q2 = { class: "grid grid-cols-3 gap-2" }, Z2 = ["aria-pressed", "onClick"], ev = { class: "mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" }, tv = { class: "grid grid-cols-4 gap-2 sm:gap-3" }, nv = ["aria-pressed", "onClick"], rv = { class: "border-t border-gray-200 pt-4 dark:border-dark-600" }, sv = { class: "text-sm text-gray-500 dark:text-gray-400" }, ov = { class: "mt-1 text-xl font-semibold text-gray-900 dark:text-white" }, av = { class: "flex w-full justify-end gap-2" }, iv = /* @__PURE__ */ rn({
  __name: "ImageGenerationView",
  setup(e) {
    const { t } = ir(), { t: n } = ir({
      useScope: "local",
      messages: {
        zh: { imageGeneration: { messages: {
          generationError: "本次生成失败：{message}",
          invalidResponse: "图片接口返回了异常数据，请稍后重试。"
        } } },
        en: { imageGeneration: { messages: {
          generationError: "This generation failed: {message}",
          invalidResponse: "The image API returned an invalid response. Please try again later."
        } } }
      }
    }), r = ti(), o = zr(), s = Ey(), a = be(() => {
      var q;
      if (o.isAdmin) {
        const W = nc(s.customMenuItems);
        if (W || s.loaded) return W;
      }
      return nc((q = r.cachedPublicSettings) == null ? void 0 : q.custom_menu_items);
    });
    function i(q, W) {
      var Xe, jt, pr;
      if (!W) return;
      q.preventDefault();
      const G = [...document.querySelectorAll("aside a[href]")].find((rs) => rs.getAttribute("href") === W);
      if (G) {
        G.click();
        return;
      }
      const Ee = document.querySelector("#app"), Ie = (pr = (jt = (Xe = Ee == null ? void 0 : Ee.__vue_app__) == null ? void 0 : Xe.config) == null ? void 0 : jt.globalProperties) == null ? void 0 : pr.$router;
      if (Ie) {
        Ie.push(W);
        return;
      }
      window.location.assign(W);
    }
    const {
      allowedImageKeys: l,
      imageGenerationAccessLoading: u,
      refreshImageGenerationAccess: c
    } = vy(), f = X(null), h = X(null), p = X([]), w = X(!1), S = X("");
    let T = null, v = 0;
    const x = X("1"), y = X(""), E = X("2K"), C = X("9:16"), R = X("1152x2048"), D = X("high"), N = X("b64_json"), O = X(!1), j = X([]), ee = X(""), U = X(t("imageGeneration.results.emptyHint")), te = X(null), ae = X([]), fe = X(""), ie = X(!1), V = X(!1), Q = X(E.value), _e = X(C.value), Ce = ["1K", "2K", "4K"], pe = [
      { label: "1:1", value: "1:1", previewClass: "h-5 w-5" },
      { label: "3:2", value: "3:2", previewClass: "h-4 w-6" },
      { label: "2:3", value: "2:3", previewClass: "h-6 w-4" },
      { label: "16:9", value: "16:9", previewClass: "h-4 w-7" },
      { label: "9:16", value: "9:16", previewClass: "h-7 w-4" },
      { label: "4:3", value: "4:3", previewClass: "h-5 w-6" },
      { label: "3:4", value: "3:4", previewClass: "h-6 w-5" },
      { label: "21:9", value: "21:9", previewClass: "h-3 w-8" }
    ], ve = X([]), Ue = X(!0);
    let je = 0;
    const rt = be(() => l.value.map((q) => {
      var W, G;
      return {
        value: q.id,
        label: `${q.name} · ${((W = q.group) == null ? void 0 : W.name) || ((G = q.group) == null ? void 0 : G.platform) || t("common.unknown")}`
      };
    })), de = be(() => l.value.find((q) => q.id === f.value) || null), B = be(() => {
      var W, G;
      const q = de.value;
      return q ? `${((W = q.group) == null ? void 0 : W.platform) || t("common.unknown")} · ${((G = q.group) == null ? void 0 : G.name) || t("common.unknown")}` : "";
    }), re = be(() => p.value.map((q) => ({ value: q, label: q }))), oe = [
      { label: "Auto", value: "auto" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ], Re = [
      { label: "Base64", value: "b64_json" }
    ], qe = be(() => S.value ? S.value : w.value ? t("imageGeneration.hints.modelsLoading") : de.value && p.value.length === 0 ? t("imageGeneration.hints.modelsEmpty") : ""), g = be(() => `${E.value} · ${C.value}`), _ = be(() => P(Q.value, _e.value)), b = be(() => O.value || u.value || w.value || !de.value || !h.value || !y.value.trim());
    function P(q, W) {
      const G = { "1K": 1024, "2K": 2048, "4K": 4096 }[q] || 2048, [Ee, Ie] = W.split(":").map(Number);
      return !Ee || !Ie ? `${G}x${G}` : Ee >= Ie ? `${G}x${Math.round(G * Ie / Ee)}` : `${Math.round(G * Ee / Ie)}x${G}`;
    }
    function I() {
      Q.value = E.value, _e.value = C.value, V.value = !0;
    }
    function M() {
      V.value = !1;
    }
    function Y() {
      E.value = Q.value, C.value = _e.value, R.value = _.value, M();
    }
    async function K() {
      T == null || T.abort();
      const q = de.value;
      if (p.value = [], h.value = null, S.value = "", !q) return;
      const W = new AbortController(), G = ++v;
      T = W, w.value = !0;
      try {
        const Ee = await mb(q.key, { signal: W.signal });
        if (W.signal.aborted || G !== v) return;
        p.value = Ee, h.value = Ee[0] || null;
      } catch (Ee) {
        if (W.signal.aborted || G !== v) return;
        S.value = In(Ee, t("imageGeneration.messages.loadModelsFailed")), r.showError(S.value);
      } finally {
        G === v && (w.value = !1, T = null);
      }
    }
    async function d() {
      var q;
      try {
        await c(!0), f.value && !l.value.some((W) => W.id === f.value) ? f.value = ((q = l.value[0]) == null ? void 0 : q.id) || null : await K();
      } catch (W) {
        r.showError(In(W, t("imageGeneration.messages.loadKeysFailed")));
      }
    }
    function m() {
      var q;
      (q = te.value) == null || q.click();
    }
    function L(q) {
      return `${q.name}-${q.size}-${q.lastModified}`;
    }
    function F(q) {
      const W = [...ae.value], G = new Set(W.map((Ie) => Ie.id)), Ee = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
      fe.value = "";
      for (const Ie of Array.from(q)) {
        if (W.length >= 4) {
          fe.value = t("imageGeneration.messages.referenceImagesLimit");
          break;
        }
        if (!Ee.has(Ie.type.toLowerCase())) {
          fe.value = t("imageGeneration.messages.referenceImageType");
          continue;
        }
        if (Ie.size > 20 * 1024 * 1024) {
          fe.value = t("imageGeneration.messages.referenceImageTooLarge");
          continue;
        }
        const Xe = L(Ie);
        G.has(Xe) || (W.push({ id: Xe, file: Ie, previewUrl: URL.createObjectURL(Ie) }), G.add(Xe));
      }
      ae.value = W, ie.value = !1;
    }
    function Z(q) {
      const W = q.target;
      W.files && F(W.files), W.value = "";
    }
    function z(q) {
      var W;
      (W = q.dataTransfer) != null && W.files && F(q.dataTransfer.files);
    }
    function k(q) {
      const W = ae.value.find((G) => G.id === q);
      W && URL.revokeObjectURL(W.previewUrl), ae.value = ae.value.filter((G) => G.id !== q), fe.value = "";
    }
    function $() {
      ae.value.forEach((q) => URL.revokeObjectURL(q.previewUrl)), ae.value = [], fe.value = "";
    }
    function ce(q) {
      const W = String(q.mime_type || "").trim();
      if (W) return W;
      const G = String(q.output_format || "").trim().toLowerCase();
      return G === "webp" ? "image/webp" : G === "jpeg" || G === "jpg" ? "image/jpeg" : "image/png";
    }
    function Te(q) {
      const W = String(q.b64_json || "").trim();
      return W ? `data:${ce(q)};base64,${W}` : String(q.url || "").trim();
    }
    function $e(q, W) {
      const G = W === "image/webp" ? "webp" : W === "image/jpeg" ? "jpg" : "png";
      return `online-image-${Date.now()}-${q + 1}.${G}`;
    }
    function st() {
      const q = Number.parseInt(x.value, 10);
      return Number.isFinite(q) ? Math.min(Math.max(q, 1), 4) : 1;
    }
    async function Je() {
      var W;
      const q = de.value;
      if (!q) return r.showError(t("imageGeneration.messages.chooseKey"));
      if (!h.value) return r.showError(t("imageGeneration.messages.chooseModel"));
      if (!y.value.trim()) return r.showError(t("imageGeneration.messages.choosePrompt"));
      O.value = !0;
      try {
        const G = await hb(q.key, {
          model: h.value,
          prompt: y.value.trim(),
          n: st(),
          size: R.value,
          quality: String(D.value || ""),
          response_format: String(N.value || ""),
          referenceImages: ae.value.map((Xe) => Xe.file)
        }), Ee = G.data.flatMap((Xe, jt) => {
          const pr = Te(Xe);
          if (!pr) return [];
          const rs = String(Xe.revised_prompt || "").trim(), oi = ce(Xe);
          return [{
            id: `${Date.now()}-${jt}-${Math.random().toString(36).slice(2, 8)}`,
            src: pr,
            prompt: rs || y.value.trim(),
            revisedPrompt: rs,
            mimeType: oi,
            downloadName: $e(jt, oi)
          }];
        });
        if (j.value = Ee, ee.value = G.model || h.value, U.value = Ee.length > 0 ? `${Ee.length} × ${ee.value}` : t("imageGeneration.messages.noImages"), Ee.length === 0) return r.showInfo(t("imageGeneration.messages.noImages"));
        const Ie = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
          createdAt: Date.now(),
          model: ee.value,
          prompt: y.value.trim(),
          sizeLabel: g.value,
          imageSize: R.value,
          images: Ee
        };
        try {
          const Xe = (W = o.user) == null ? void 0 : W.id;
          if (!Xe) throw new Error("Authenticated User is required for image history");
          ve.value = await _b(Xe, Ie);
        } catch (Xe) {
          r.showInfo(In(Xe, t("imageGeneration.messages.historySaveFailed")));
        }
        r.showSuccess(t("imageGeneration.messages.generated"));
      } catch (G) {
        const Ee = In(G, t("imageGeneration.messages.generateFailed"), {
          INVALID_GATEWAY_RESPONSE: n("imageGeneration.messages.invalidResponse"),
          INVALID_IMAGE_RESPONSE: n("imageGeneration.messages.invalidResponse")
        });
        U.value = n("imageGeneration.messages.generationError", { message: Ee }), r.showError(Ee);
      } finally {
        O.value = !1;
      }
    }
    async function Nt(q) {
      if (/MicroMessenger/i.test(window.navigator.userAgent)) {
        on(q), r.showInfo(t("imageGeneration.messages.mobileSaveHint"));
        return;
      }
      try {
        if (tc() && typeof navigator.share == "function") {
          const Ie = await fetch(q.src);
          if (!Ie.ok) throw new Error(`HTTP ${Ie.status}`);
          const Xe = new File([await Ie.blob()], q.downloadName, { type: q.mimeType });
          if (typeof navigator.canShare != "function" || navigator.canShare({ files: [Xe] })) {
            try {
              await navigator.share({ files: [Xe] });
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
        const W = await fetch(q.src);
        if (!W.ok) throw new Error(`HTTP ${W.status}`);
        const G = URL.createObjectURL(await W.blob()), Ee = document.createElement("a");
        Ee.href = G, Ee.download = q.downloadName, document.body.append(Ee), Ee.click(), Ee.remove(), window.setTimeout(() => URL.revokeObjectURL(G), 6e4);
      } catch (W) {
        if (tc()) {
          on(q), r.showInfo(t("imageGeneration.messages.mobileSaveHint"));
          return;
        }
        r.showError(In(W, t("imageGeneration.messages.downloadFailed")));
      }
    }
    function on(q) {
      window.open(q.src, "_blank", "noopener,noreferrer");
    }
    function mt(q) {
      return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(new Date(q));
    }
    async function St() {
      var G, Ee;
      const q = ++je, W = (G = o.user) == null ? void 0 : G.id;
      try {
        const Ie = W ? await gb(W) : [];
        q === je && W === ((Ee = o.user) == null ? void 0 : Ee.id) && (ve.value = Ie);
      } catch (Ie) {
        r.showError(In(Ie, t("imageGeneration.messages.historyLoadFailed")));
      } finally {
        q === je && (Ue.value = !1);
      }
    }
    async function ns() {
      var q;
      if (window.confirm(t("imageGeneration.history.clearConfirm")))
        try {
          const W = (q = o.user) == null ? void 0 : q.id;
          if (!W) return;
          await bb(W), ve.value = [];
        } catch (W) {
          r.showError(In(W, t("imageGeneration.messages.historyClearFailed")));
        }
    }
    return yt(l, (q) => {
      q.length === 0 ? f.value = null : q.some((W) => W.id === f.value) || (f.value = q[0].id);
    }, { immediate: !0 }), yt(f, () => {
      K();
    }, { immediate: !0 }), yt(() => {
      var q;
      return (q = o.user) == null ? void 0 : q.id;
    }, () => {
      ve.value = [], Ue.value = !0, St();
    }), fr(() => {
      c(), St(), o.isAdmin && s.fetch();
    }), Ia(() => {
      je += 1, v += 1, T == null || T.abort(), $();
    }), (q, W) => (ge(), Ae("div", Iy, [
      H("div", ky, [
        H("section", Py, [
          H("a", {
            href: "/keys",
            class: "btn btn-secondary btn-specular w-full",
            "data-testid": "create-image-api-key",
            "data-online-image-action": "",
            onClick: W[0] || (W[0] = (G) => i(G, "/keys"))
          }, [
            we(Ge, {
              name: "key",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.createImageApiKey")), 1)
          ]),
          H("div", xy, [
            H("label", Ny, ue(le(t)("imageGeneration.controls.apiKey")), 1),
            H("div", My, [
              we(ms, {
                modelValue: f.value,
                "onUpdate:modelValue": W[1] || (W[1] = (G) => f.value = G),
                "data-testid": "api-key-select",
                "aria-label": le(t)("imageGeneration.controls.apiKey"),
                options: rt.value,
                placeholder: le(t)("common.selectOption"),
                disabled: le(u) || le(l).length === 0,
                loading: le(u),
                "empty-text": le(u) ? le(t)("common.loading") : le(t)("common.noOptionsFound")
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular api-key-refresh",
                "data-testid": "refresh-keys",
                "data-online-image-action": "",
                disabled: le(u) || w.value,
                onClick: d
              }, [
                we(Ge, {
                  name: "refresh",
                  size: "md",
                  class: Ke({ "animate-spin": le(u) || w.value })
                }, null, 8, ["class"]),
                H("span", null, ue(le(t)("imageGeneration.controls.refreshKeys")), 1)
              ], 8, Dy)
            ]),
            H("p", Fy, ue(le(t)("imageGeneration.hints.apiKey")), 1),
            B.value ? (ge(), Ae("p", Uy, ue(B.value), 1)) : Ze("", !0)
          ]),
          H("div", $y, [
            H("div", null, [
              H("label", Hy, ue(le(t)("imageGeneration.controls.modelSelection")), 1),
              we(ms, {
                modelValue: h.value,
                "onUpdate:modelValue": W[2] || (W[2] = (G) => h.value = G),
                "data-testid": "model-select",
                "aria-label": le(t)("imageGeneration.controls.modelSelection"),
                options: re.value,
                placeholder: le(t)("common.selectOption"),
                disabled: !de.value || w.value || re.value.length === 0,
                loading: w.value,
                "empty-text": w.value ? le(t)("common.loading") : le(t)("common.noOptionsFound"),
                searchable: ""
              }, null, 8, ["modelValue", "aria-label", "options", "placeholder", "disabled", "loading", "empty-text"]),
              qe.value ? (ge(), Ae("p", {
                key: 0,
                class: Ke(["mt-1 text-xs", S.value ? "text-red-500" : "text-gray-500 dark:text-gray-400"])
              }, ue(qe.value), 3)) : Ze("", !0)
            ]),
            H("div", null, [
              H("label", Vy, ue(le(t)("imageGeneration.controls.count")), 1),
              jo(H("input", {
                "onUpdate:modelValue": W[3] || (W[3] = (G) => x.value = G),
                type: "number",
                min: "1",
                max: "4",
                class: "input w-full"
              }, null, 512), [
                [Jo, x.value]
              ])
            ])
          ]),
          H("div", jy, [
            H("label", By, ue(le(t)("imageGeneration.controls.imageSize")), 1),
            H("button", {
              type: "button",
              "data-testid": "image-size-trigger",
              class: "btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left",
              "data-online-image-action": "",
              "aria-label": le(t)("imageGeneration.sizeDialog.title"),
              onClick: I
            }, [
              H("span", Gy, ue(g.value), 1),
              we(Ge, {
                name: "chevronDown",
                size: "sm",
                class: "flex-shrink-0"
              })
            ], 8, Wy)
          ]),
          H("div", Ky, [
            H("div", null, [
              H("label", zy, ue(le(t)("imageGeneration.controls.quality")), 1),
              we(ms, {
                modelValue: D.value,
                "onUpdate:modelValue": W[4] || (W[4] = (G) => D.value = G),
                options: oe,
                "data-testid": "quality-select"
              }, null, 8, ["modelValue"])
            ]),
            H("div", null, [
              H("label", qy, ue(le(t)("imageGeneration.controls.responseFormat")), 1),
              we(ms, {
                modelValue: N.value,
                "onUpdate:modelValue": W[5] || (W[5] = (G) => N.value = G),
                options: Re,
                "data-testid": "response-format-select"
              }, null, 8, ["modelValue"])
            ])
          ]),
          H("div", Yy, [
            H("div", Xy, [
              H("label", Jy, ue(le(t)("imageGeneration.controls.referenceImages")), 1),
              ae.value.length > 0 ? (ge(), Ae("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm",
                "data-online-image-action": "",
                onClick: $
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
              onChange: Z
            }, null, 544),
            H("div", {
              class: Ke(["rounded-lg border-2 border-dashed p-4 transition-colors", ie.value ? "border-gray-600 bg-gray-100 dark:border-gray-300 dark:bg-dark-700" : "border-gray-300 bg-gray-50 hover:border-gray-500 dark:border-dark-600 dark:bg-dark-900/50 dark:hover:border-gray-400"]),
              role: "button",
              tabindex: "0",
              onClick: m,
              onKeydown: [
                Lr(Qe(m, ["prevent"]), ["enter"]),
                Lr(Qe(m, ["prevent"]), ["space"])
              ],
              onDragenter: W[6] || (W[6] = Qe((G) => ie.value = !0, ["prevent"])),
              onDragover: W[7] || (W[7] = Qe((G) => ie.value = !0, ["prevent"])),
              onDragleave: W[8] || (W[8] = Qe((G) => ie.value = !1, ["prevent"])),
              onDrop: Qe(z, ["prevent"])
            }, [
              ae.value.length > 0 ? (ge(), Ae("div", Zy, [
                (ge(!0), Ae(He, null, mn(ae.value, (G) => (ge(), Ae("div", {
                  key: G.id,
                  class: "group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                }, [
                  H("img", {
                    src: G.previewUrl,
                    alt: G.file.name,
                    class: "h-full w-full object-cover"
                  }, null, 8, e2),
                  H("button", {
                    type: "button",
                    class: "absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
                    "aria-label": le(t)("imageGeneration.controls.removeReferenceImage"),
                    onClick: Qe((Ee) => k(G.id), ["stop"])
                  }, [
                    we(Ge, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, t2)
                ]))), 128))
              ])) : Ze("", !0),
              H("div", n2, [
                H("div", r2, [
                  we(Ge, {
                    name: "upload",
                    size: "md"
                  })
                ]),
                H("div", s2, [
                  H("p", o2, ue(le(t)("imageGeneration.controls.referenceImagesDrop")), 1),
                  H("p", a2, ue(le(t)("imageGeneration.hints.referenceImages")), 1)
                ]),
                H("button", {
                  type: "button",
                  class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                  "data-online-image-action": "",
                  onClick: Qe(m, ["stop"])
                }, [
                  we(Ge, {
                    name: "upload",
                    size: "sm"
                  }),
                  qn(" " + ue(le(t)("imageGeneration.controls.chooseReferenceImages")), 1)
                ])
              ])
            ], 42, Qy),
            ae.value.length > 0 ? (ge(), Ae("p", i2, ue(le(t)("imageGeneration.hints.referenceImagesSelected", { count: ae.value.length })), 1)) : Ze("", !0),
            fe.value ? (ge(), Ae("p", l2, ue(fe.value), 1)) : Ze("", !0)
          ]),
          H("a", {
            href: a.value || void 0,
            class: Ke(["btn btn-secondary btn-specular w-full", { "pointer-events-none opacity-50": !a.value }]),
            "data-testid": "image-tutorial-link",
            "data-online-image-action": "",
            "aria-disabled": !a.value,
            tabindex: a.value ? void 0 : -1,
            title: a.value ? void 0 : le(t)("imageGeneration.hints.imageTutorialUnavailable"),
            onClick: W[9] || (W[9] = (G) => i(G, a.value))
          }, [
            we(Ge, {
              name: "book",
              size: "md"
            }),
            H("span", null, ue(le(t)("imageGeneration.controls.imageTutorial")), 1)
          ], 10, c2)
        ]),
        H("section", u2, [
          H("div", f2, [
            H("div", null, [
              H("label", d2, ue(le(t)("imageGeneration.controls.prompt")), 1),
              jo(H("textarea", {
                "onUpdate:modelValue": W[10] || (W[10] = (G) => y.value = G),
                rows: "5",
                class: "input min-h-32 w-full resize-y",
                placeholder: le(t)("imageGeneration.controls.prompt")
              }, null, 8, m2), [
                [Jo, y.value]
              ]),
              H("p", h2, ue(le(t)("imageGeneration.hints.responseFormat")), 1)
            ]),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular w-full",
              "data-testid": "start-generation",
              "data-online-image-action": "",
              disabled: b.value,
              onClick: Je
            }, [
              we(Ge, {
                name: "sparkles",
                size: "md",
                class: Ke({ "animate-pulse": O.value })
              }, null, 8, ["class"]),
              H("span", null, ue(O.value ? le(t)("imageGeneration.controls.generating") : le(t)("imageGeneration.controls.generate")), 1)
            ], 8, p2)
          ]),
          H("div", g2, [
            H("div", _2, [
              H("div", null, [
                H("h2", b2, ue(le(t)("imageGeneration.results.title")), 1),
                H("p", y2, ue(U.value), 1)
              ]),
              ee.value ? (ge(), Ae("span", v2, ue(ee.value), 1)) : Ze("", !0)
            ]),
            j.value.length === 0 ? (ge(), Ae("div", E2, [
              we(Ge, {
                name: "sparkles",
                size: "xl",
                class: "mb-4 text-gray-400 dark:text-dark-500"
              }),
              H("p", w2, ue(le(t)("imageGeneration.results.empty")), 1),
              H("p", S2, ue(le(t)("imageGeneration.results.emptyHint")), 1)
            ])) : (ge(), Ae("div", A2, [
              (ge(!0), Ae(He, null, mn(j.value, (G) => (ge(), Ae("article", {
                key: G.id,
                class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              }, [
                H("div", T2, [
                  H("img", {
                    src: G.src,
                    alt: G.prompt,
                    class: "aspect-square w-full object-contain"
                  }, null, 8, O2)
                ]),
                H("div", R2, [
                  H("p", C2, ue(G.prompt), 1),
                  G.revisedPrompt ? (ge(), Ae("p", L2, ue(le(t)("imageGeneration.results.revisedPrompt")) + ": " + ue(G.revisedPrompt), 1)) : Ze("", !0),
                  H("div", I2, [
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-testid": "result-download",
                      "data-online-image-action": "",
                      onClick: (Ee) => Nt(G)
                    }, [
                      we(Ge, {
                        name: "download",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.download")), 1)
                    ], 8, k2),
                    H("button", {
                      type: "button",
                      class: "btn btn-secondary btn-specular btn-sm",
                      "data-online-image-action": "",
                      onClick: (Ee) => on(G)
                    }, [
                      we(Ge, {
                        name: "externalLink",
                        size: "sm"
                      }),
                      qn(" " + ue(le(t)("imageGeneration.results.open")), 1)
                    ], 8, P2)
                  ])
                ])
              ]))), 128))
            ]))
          ]),
          H("div", x2, [
            H("div", N2, [
              H("div", null, [
                H("h2", M2, ue(le(t)("imageGeneration.history.title")), 1),
                H("p", D2, ue(le(t)("imageGeneration.history.hint")), 1)
              ]),
              H("button", {
                type: "button",
                class: "btn btn-secondary btn-specular btn-sm flex-shrink-0",
                "data-online-image-action": "",
                disabled: ve.value.length === 0 || Ue.value,
                onClick: ns
              }, [
                we(Ge, {
                  name: "trash",
                  size: "sm"
                }),
                qn(" " + ue(le(t)("imageGeneration.history.clear")), 1)
              ], 8, F2)
            ]),
            Ue.value ? (ge(), Ae("div", U2, ue(le(t)("common.loading")), 1)) : ve.value.length === 0 ? (ge(), Ae("div", $2, ue(le(t)("imageGeneration.history.empty")), 1)) : (ge(), Ae("div", H2, [
              (ge(!0), Ae(He, null, mn(ve.value, (G) => (ge(), Ae("article", {
                key: G.id,
                class: "overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700"
              }, [
                H("div", V2, [
                  H("div", j2, [
                    H("span", null, ue(mt(G.createdAt)), 1),
                    W[11] || (W[11] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(G.model), 1),
                    W[12] || (W[12] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(G.sizeLabel), 1),
                    W[13] || (W[13] = H("span", { "aria-hidden": "true" }, "·", -1)),
                    H("span", null, ue(G.imageSize), 1)
                  ]),
                  H("p", B2, ue(G.prompt), 1)
                ]),
                H("div", W2, [
                  (ge(!0), Ae(He, null, mn(G.images, (Ee) => (ge(), Ae("div", {
                    key: Ee.id,
                    class: "overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
                  }, [
                    H("img", {
                      src: Ee.src,
                      alt: Ee.prompt,
                      class: "aspect-square w-full object-contain",
                      loading: "lazy"
                    }, null, 8, G2),
                    H("div", K2, [
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-testid": "history-download",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.download"),
                        onClick: (Ie) => Nt(Ee)
                      }, [
                        we(Ge, {
                          name: "download",
                          size: "sm"
                        })
                      ], 8, z2),
                      H("button", {
                        type: "button",
                        class: "btn btn-secondary btn-specular btn-sm px-2",
                        "data-online-image-action": "",
                        "aria-label": le(t)("imageGeneration.history.open"),
                        onClick: (Ie) => on(Ee)
                      }, [
                        we(Ge, {
                          name: "externalLink",
                          size: "sm"
                        })
                      ], 8, q2)
                    ])
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ])
      ]),
      we(Z1, {
        show: V.value,
        title: le(t)("imageGeneration.sizeDialog.title"),
        width: "normal",
        "data-testid": "image-size-dialog",
        onClose: M
      }, {
        footer: rr(() => [
          H("div", av, [
            H("button", {
              type: "button",
              class: "btn btn-secondary btn-specular",
              "data-online-image-action": "",
              onClick: M
            }, ue(le(t)("imageGeneration.sizeDialog.cancel")), 1),
            H("button", {
              type: "button",
              class: "btn btn-primary btn-specular",
              "data-online-image-action": "",
              onClick: Y
            }, ue(le(t)("imageGeneration.sizeDialog.confirm")), 1)
          ])
        ]),
        default: rr(() => [
          H("div", Y2, [
            H("p", X2, ue(le(t)("imageGeneration.sizeDialog.current", { size: g.value })), 1),
            H("div", null, [
              H("h4", J2, ue(le(t)("imageGeneration.sizeDialog.resolution")), 1),
              H("div", Q2, [
                (ge(), Ae(He, null, mn(Ce, (G) => H("button", {
                  key: G,
                  type: "button",
                  class: Ke(["btn btn-specular", Q.value === G ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": Q.value === G,
                  onClick: (Ee) => Q.value = G
                }, ue(G), 11, Z2)), 64))
              ])
            ]),
            H("div", null, [
              H("h4", ev, ue(le(t)("imageGeneration.sizeDialog.aspectRatio")), 1),
              H("div", tv, [
                (ge(), Ae(He, null, mn(pe, (G) => H("button", {
                  key: G.value,
                  type: "button",
                  class: Ke(["btn btn-specular min-h-[72px] flex-col px-1.5 text-xs", _e.value === G.value ? "btn-primary" : "btn-secondary"]),
                  "data-online-image-action": "",
                  "aria-pressed": _e.value === G.value,
                  onClick: (Ee) => _e.value = G.value
                }, [
                  H("span", {
                    class: Ke(["block rounded-[3px] border border-current", G.previewClass])
                  }, null, 2),
                  H("span", null, ue(G.label), 1)
                ], 10, nv)), 64))
              ])
            ]),
            H("div", rv, [
              H("p", sv, ue(le(t)("imageGeneration.sizeDialog.output")), 1),
              H("p", ov, ue(_.value), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), lv = /* @__PURE__ */ ni(iv, [["__scopeId", "data-v-4919b78d"]]);
async function Lv(e) {
  await Jg();
  const t = Ih(), n = ti(t), r = zr(t);
  n.initFromInjectedConfig(), await n.fetchPublicSettings(!0), r.hydrateAuthSnapshot(e.runMode);
  const s = Rh(/* @__PURE__ */ rn({
    name: "ZeroOneOnlineImageRoot",
    setup: () => () => [Vr(lv), Vr(X1)]
  }));
  s.use(t), s.use(tr);
  let a = !1;
  async function i(l) {
    r.setRunModeSnapshot(l.runMode), tr.global.locale.value !== l.locale && (await ff(l.locale), tr.global.locale.value = l.locale);
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
  Lv as prepareOnlineImageSurface
};
