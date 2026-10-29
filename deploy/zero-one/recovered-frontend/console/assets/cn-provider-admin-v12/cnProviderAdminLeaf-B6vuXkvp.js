/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function di(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, An = [], Rt = () => {
}, oc = () => !1, Ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ds = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, hi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ud = Object.prototype.hasOwnProperty, pe = (e, t) => ud.call(e, t), J = Array.isArray, on = (e) => Dr(e) === "[object Map]", Bt = (e) => Dr(e) === "[object Set]", oa = (e) => Dr(e) === "[object Date]", ee = (e) => typeof e == "function", ve = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", ic = (e) => (me(e) || ee(e)) && ee(e.then) && ee(e.catch), ac = Object.prototype.toString, Dr = (e) => ac.call(e), fd = (e) => Dr(e).slice(8, -1), lc = (e) => Dr(e) === "[object Object]", Fs = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = /* @__PURE__ */ di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, dd = /-\w/g, qe = Us(
  (e) => e.replace(dd, (t) => t.slice(1).toUpperCase())
), hd = /\B([A-Z])/g, qt = Us(
  (e) => e.replace(hd, "-$1").toLowerCase()
), $s = Us((e) => e.charAt(0).toUpperCase() + e.slice(1)), ho = Us(
  (e) => e ? `on${$s(e)}` : ""
), Fe = (e, t) => !Object.is(e, t), os = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cc = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Vs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, pd = (e) => {
  const t = ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ia;
const Hs = () => ia || (ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function js(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ve(r) ? yd(r) : js(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (ve(e) || me(e))
    return e;
}
const md = /;(?![^(]*\))/g, gd = /:([^]+)/, _d = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function yd(e) {
  const t = {};
  return e.replace(_d, (n) => n.startsWith("/*") ? "" : n).split(md).forEach((n) => {
    if (n) {
      const r = n.split(gd);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function rn(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const r = rn(e[n]);
      r && (t += r + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const bd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ed = /* @__PURE__ */ di(bd);
function uc(e) {
  return !!e || e === "";
}
function Sd(e, t, n) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let s = 0; r && s < e.length; s++)
    r = bt(e[s], t[s], n);
  return r;
}
function aa(e, t, n) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), s = new Uint8Array(r.length);
  for (const o of e) {
    let i = -1;
    for (let a = 0; a < r.length; a++)
      if (!s[a] && bt(o, r[a], n)) {
        i = a;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function vd(e, t, n) {
  let r = on(e), s = on(t);
  if (r || s || (r = Bt(e), s = Bt(t), r || s))
    return r && s ? aa(e, t, n) : !1;
  const o = Object.keys(e).length, i = Object.keys(t).length;
  if (o !== i)
    return !1;
  for (const a in e) {
    const l = e.hasOwnProperty(a), u = t.hasOwnProperty(a);
    if (l && !u || !l && u || !bt(e[a], t[a], n))
      return !1;
  }
  return String(e) === String(t);
}
function la(e, t, n, r) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [s, o] = n;
  if (s.has(e) || o.has(t))
    return s.get(e) === t && o.get(t) === e;
  s.set(e, t), o.set(t, e);
  const i = r(e, t, n);
  return s.delete(e), o.delete(t), i;
}
function bt(e, t, n) {
  if (e === t) return !0;
  let r = oa(e), s = oa(t);
  return r || s ? r && s ? e.getTime() === t.getTime() : !1 : (r = ct(e), s = ct(t), r || s ? e === t : (r = J(e), s = J(t), r || s ? r && s ? la(e, t, n, Sd) : !1 : (r = me(e), s = me(t), r || s ? !r || !s ? !1 : la(e, t, n, vd) : String(e) === String(t))));
}
function pi(e, t) {
  return e.findIndex((n) => bt(n, t));
}
const fc = (e) => !!(e && e.__v_isRef === !0), Uo = (e) => ve(e) ? e : e == null ? "" : J(e) || me(e) && (e.toString === ac || !ee(e.toString)) ? fc(e) ? Uo(e.value) : JSON.stringify(e, dc, 2) : String(e), dc = (e, t) => fc(t) ? dc(e, t.value) : on(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[po(r, o) + " =>"] = s, n),
    {}
  )
} : Bt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => po(n))
} : ct(t) ? po(t) : me(t) && !J(t) && !lc(t) ? String(t) : t, po = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ke;
class hc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes || (ke.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
      }
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
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ke;
      try {
        return ke = this, t();
      } finally {
        ke = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ke, ke = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ke === this)
        ke = this.prevScope;
      else {
        let t = ke;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
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
        const s = this.scopes.slice();
        for (n = 0, r = s.length; n < r; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function mi(e) {
  return new hc(e);
}
function gi() {
  return ke;
}
function pc(e, t = !1) {
  ke && ke.cleanups.push(e);
}
let be;
const mo = /* @__PURE__ */ new WeakSet();
class mc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, mo.has(this) && (mo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _c(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ca(this), yc(this);
    const t = be, n = _t;
    be = this, _t = !0;
    try {
      return this.fn();
    } finally {
      bc(this), be = t, _t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bi(t);
      this.deps = this.depsTail = void 0, ca(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? mo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let gc = 0, ur, fr;
function _c(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = fr, fr = e;
    return;
  }
  e.next = ur, ur = e;
}
function _i() {
  gc++;
}
function yi() {
  if (--gc > 0)
    return;
  if (fr) {
    let t = fr;
    for (fr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ur; ) {
    let t = ur;
    for (ur = void 0; t; ) {
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
function bc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), bi(r), wd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === br) || (e.globalVersion = br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$o(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, r = _t;
  be = e, _t = !0;
  try {
    yc(e);
    const s = e.fn(e._value);
    (t.version === 0 || Fe(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    be = n, _t = r, bc(e), e.flags &= -3;
  }
}
function bi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      bi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _t = !0;
const Sc = [];
function Kt() {
  Sc.push(_t), _t = !1;
}
function zt() {
  const e = Sc.pop();
  _t = e === void 0 ? !0 : e;
}
function ca(e) {
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
let br = 0;
class Ad {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ws {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!be || !_t || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new Ad(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, vc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, br++, this.notify(t);
  }
  notify(t) {
    _i();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      yi();
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
const hs = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ Symbol(
  ""
), Vo = /* @__PURE__ */ Symbol(
  ""
), Er = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (_t && be) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ws()), s.map = r, s.key = n), s.track();
  }
}
function Dt(e, t, n, r, s, o) {
  const i = hs.get(e);
  if (!i) {
    br++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (_i(), t === "clear")
    i.forEach(a);
  else {
    const l = J(e), u = l && Fs(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, m) => {
        (m === "length" || m === Er || !ct(m) && m >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Er)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(On)), on(e) && a(i.get(Vo)));
          break;
        case "delete":
          l || (a(i.get(On)), on(e) && a(i.get(Vo)));
          break;
        case "set":
          on(e) && a(i.get(On));
          break;
      }
  }
  yi();
}
function Td(e, t) {
  const n = hs.get(e);
  return n && n.get(t);
}
function Mn(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e || (Be(t, "iterate", Er), /* @__PURE__ */ lt(e)) ? t : /* @__PURE__ */ Pt(e) ? /* @__PURE__ */ Lt(e) ? t.map((n) => ln(ht(n))) : t.map(ln) : t.map(ht);
}
function Bs(e) {
  return Be(e = /* @__PURE__ */ oe(e), "iterate", Er), e;
}
function Ot(e, t) {
  return /* @__PURE__ */ Pt(e) ? ln(/* @__PURE__ */ Lt(e) ? ht(t) : t) : ht(t);
}
const Od = {
  __proto__: null,
  [Symbol.iterator]() {
    return go(this, Symbol.iterator, (e) => Ot(this, e));
  },
  concat(...e) {
    return Mn(this).concat(
      ...e.map((t) => J(t) ? Mn(t) : t)
    );
  },
  entries() {
    return go(this, "entries", (e) => (e[1] = Ot(this, e[1]), e));
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
      (n) => n.map((r) => Ot(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => Ot(this, n),
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
      (n) => Ot(this, n),
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
    return _o(this, "includes", e);
  },
  indexOf(...e) {
    return _o(this, "indexOf", e);
  },
  join(e) {
    return Mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _o(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xn(this, "pop");
  },
  push(...e) {
    return Xn(this, "push", e);
  },
  reduce(e, ...t) {
    return ua(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ua(this, "reduceRight", e, t);
  },
  shift() {
    return Xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xn(this, "splice", e);
  },
  toReversed() {
    return Mn(this).toReversed();
  },
  toSorted(e) {
    return Mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xn(this, "unshift", e);
  },
  values() {
    return go(this, "values", (e) => Ot(this, e));
  }
};
function go(e, t, n) {
  const r = Bs(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ lt(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o;
  }), s;
}
const Cd = Array.prototype;
function It(e, t, n, r, s, o) {
  const i = Bs(e), a = i !== e && !/* @__PURE__ */ lt(e), l = i[t];
  if (l !== Cd[t]) {
    const f = l.apply(e, o);
    return a ? ht(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, m) {
    return n.call(this, Ot(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const c = l.call(i, u, r);
  return a && s ? s(c) : c;
}
function ua(e, t, n, r) {
  const s = Bs(e), o = s !== e && !/* @__PURE__ */ lt(e);
  let i = n, a = !1;
  s !== e && (o ? (a = r.length === 0, i = function(u, c, f) {
    return a && (a = !1, u = Ot(e, u)), n.call(this, u, Ot(e, c), f, e);
  }) : n.length > 3 && (i = function(u, c, f) {
    return n.call(this, u, c, f, e);
  }));
  const l = s[t](i, ...r);
  return a ? Ot(e, l) : l;
}
function _o(e, t, n) {
  const r = /* @__PURE__ */ oe(e);
  Be(r, "iterate", Er);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ks(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), r[t](...n)) : s;
}
function Xn(e, t, n = []) {
  Kt(), _i();
  const r = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return yi(), zt(), r;
}
const Rd = /* @__PURE__ */ di("__proto__,__v_isRef,__isVue"), wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function Ld(e) {
  ct(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Ac {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? $d : Rc : o ? Cc : Oc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = J(t);
    if (!s) {
      let l;
      if (i && (l = Od[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ld;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Oe(t) ? t : r
    );
    if ((ct(n) ? wc.has(n) : Rd(n)) || (s || Be(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Oe(a)) {
      const l = i && Fs(n) ? a : a.value;
      return s && me(l) ? /* @__PURE__ */ Sr(l) : l;
    }
    return me(a) ? s ? /* @__PURE__ */ Sr(a) : /* @__PURE__ */ Fr(a) : a;
  }
}
class Tc extends Ac {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    const i = J(t) && Fs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Pt(o);
      if (!/* @__PURE__ */ lt(r) && !/* @__PURE__ */ Pt(r) && (o = /* @__PURE__ */ oe(o), r = /* @__PURE__ */ oe(r)), !i && /* @__PURE__ */ Oe(o) && !/* @__PURE__ */ Oe(r))
        return u || (o.value = r), !0;
    }
    const a = i ? Number(n) < t.length : pe(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Oe(t) ? t : s
    );
    return t === /* @__PURE__ */ oe(s) && l && (a ? Fe(r, o) && Dt(t, "set", n, r) : Dt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = pe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Dt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ct(n) || !wc.has(n)) && Be(t, "has", n), r;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      J(t) ? "length" : On
    ), Reflect.ownKeys(t);
  }
}
class Pd extends Ac {
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
const Id = /* @__PURE__ */ new Tc(), Nd = /* @__PURE__ */ new Pd(), xd = /* @__PURE__ */ new Tc(!0);
const Ho = (e) => e, Kr = (e) => Reflect.getPrototypeOf(e);
function kd(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = /* @__PURE__ */ oe(s), i = on(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), c = n ? Ho : t ? ln : ht;
    return !t && Be(
      o,
      "iterate",
      l ? Vo : On
    ), Pe(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: f, done: m } = u.next();
          return m ? { value: f, done: m } : {
            value: a ? [c(f[0]), c(f[1])] : c(f),
            done: m
          };
        }
      }
    );
  };
}
function zr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Md(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(s);
      e || (Fe(s, a) && Be(i, "get", s), Be(i, "get", a));
      const { has: l } = Kr(i), u = t ? Ho : e ? ln : ht;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Be(/* @__PURE__ */ oe(s), "iterate", On), s.size;
    },
    has(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(s);
      return e || (Fe(s, a) && Be(i, "has", s), Be(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = /* @__PURE__ */ oe(a), u = t ? Ho : e ? ln : ht;
      return !e && Be(l, "iterate", On), a.forEach((c, f) => s.call(o, u(c), u(f), i));
    }
  };
  return Pe(
    n,
    e ? {
      add: zr("add"),
      set: zr("set"),
      delete: zr("delete"),
      clear: zr("clear")
    } : {
      add(s) {
        const o = /* @__PURE__ */ oe(this), i = Kr(o), a = /* @__PURE__ */ oe(s), l = !t && !/* @__PURE__ */ lt(s) && !/* @__PURE__ */ Pt(s) ? a : s;
        return i.has.call(o, l) || Fe(s, l) && i.has.call(o, s) || Fe(a, l) && i.has.call(o, a) || (o.add(l), Dt(o, "add", l, l)), this;
      },
      set(s, o) {
        !t && !/* @__PURE__ */ lt(o) && !/* @__PURE__ */ Pt(o) && (o = /* @__PURE__ */ oe(o));
        const i = /* @__PURE__ */ oe(this), { has: a, get: l } = Kr(i);
        let u = a.call(i, s);
        u || (s = /* @__PURE__ */ oe(s), u = a.call(i, s));
        const c = l.call(i, s);
        return i.set(s, o), u ? Fe(o, c) && Dt(i, "set", s, o) : Dt(i, "add", s, o), this;
      },
      delete(s) {
        const o = /* @__PURE__ */ oe(this), { has: i, get: a } = Kr(o);
        let l = i.call(o, s);
        l || (s = /* @__PURE__ */ oe(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && Dt(o, "delete", s, void 0), u;
      },
      clear() {
        const s = /* @__PURE__ */ oe(this), o = s.size !== 0, i = s.clear();
        return o && Dt(
          s,
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
  ].forEach((s) => {
    n[s] = kd(s, e, t);
  }), n;
}
function Ei(e, t) {
  const n = Md(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    pe(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Dd = {
  get: /* @__PURE__ */ Ei(!1, !1)
}, Fd = {
  get: /* @__PURE__ */ Ei(!1, !0)
}, Ud = {
  get: /* @__PURE__ */ Ei(!0, !1)
};
const Oc = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), $d = /* @__PURE__ */ new WeakMap();
function Vd(e) {
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
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  return /* @__PURE__ */ Pt(e) ? e : Si(
    e,
    !1,
    Id,
    Dd,
    Oc
  );
}
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  return Si(
    e,
    !1,
    xd,
    Fd,
    Cc
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return Si(
    e,
    !0,
    Nd,
    Ud,
    Rc
  );
}
function Si(e, t, n, r, s) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Vd(fd(e));
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return /* @__PURE__ */ Pt(e) ? /* @__PURE__ */ Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function vi(e) {
  return !pe(e, "__v_skip") && Object.isExtensible(e) && cc(e, "__v_skip", !0), e;
}
const ht = (e) => me(e) ? /* @__PURE__ */ Fr(e) : e, ln = (e) => me(e) ? /* @__PURE__ */ Sr(e) : e;
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return Ic(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Pc(e) {
  return Ic(e, !0);
}
function Ic(e, t) {
  return /* @__PURE__ */ Oe(e) ? e : new Hd(e, t);
}
class Hd {
  constructor(t, n) {
    this.dep = new Ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ oe(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ lt(t) || /* @__PURE__ */ Pt(t);
    t = r ? t : /* @__PURE__ */ oe(t), Fe(t, n) && (this._rawValue = t, this._value = r ? t : ht(t), this.dep.trigger());
  }
}
function h5(e) {
  e.dep && e.dep.trigger();
}
function dr(e) {
  return /* @__PURE__ */ Oe(e) ? e.value : e;
}
const jd = {
  get: (e, t, n) => t === "__v_raw" ? e : dr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Oe(s) && !/* @__PURE__ */ Oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Nc(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, jd);
}
class Wd {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ws(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Bd(e) {
  return new Wd(e);
}
// @__NO_SIDE_EFFECTS__
function Kd(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = qd(e, n);
  return t;
}
class zd {
  constructor(t, n, r) {
    this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = ct(n) ? n : String(n), this._raw = /* @__PURE__ */ oe(t);
    let s = !0, o = t;
    if (!J(t) || ct(this._key) || !Fs(this._key))
      do
        s = !/* @__PURE__ */ Ks(o) || /* @__PURE__ */ lt(o);
      while (s && (o = o.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = dr(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Oe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Oe(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Td(this._raw, this._key);
  }
}
function qd(e, t, n) {
  return new zd(e, t, n);
}
class Gd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return _c(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ec(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yd(e, t, n = !1) {
  let r, s;
  return ee(e) ? r = e : (r = e.get, s = e.set), new Gd(r, s, n);
}
const qr = {}, ps = /* @__PURE__ */ new WeakMap();
let Sn;
function Jd(e, t = !1, n = Sn) {
  if (n) {
    let r = ps.get(n);
    r || ps.set(n, r = []), r.push(e);
  }
}
function Xd(e, t, n = ae) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (b) => s ? b : /* @__PURE__ */ lt(b) || s === !1 || s === 0 ? Ft(b, 1) : Ft(b);
  let c, f, m, E, A = !1, T = !1;
  if (/* @__PURE__ */ Oe(e) ? (f = () => e.value, A = /* @__PURE__ */ lt(e)) : /* @__PURE__ */ Lt(e) ? (f = () => u(e), A = !0) : J(e) ? (T = !0, A = e.some((b) => /* @__PURE__ */ Lt(b) || /* @__PURE__ */ lt(b)), f = () => e.map((b) => {
    if (/* @__PURE__ */ Oe(b))
      return b.value;
    if (/* @__PURE__ */ Lt(b))
      return u(b);
    if (ee(b))
      return l ? l(b, 2) : b();
  })) : ee(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (m) {
      Kt();
      try {
        m();
      } finally {
        zt();
      }
    }
    const b = Sn;
    Sn = c;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      Sn = b;
    }
  } : f = Rt, t && s) {
    const b = f, I = s === !0 ? 1 / 0 : s;
    f = () => Ft(b(), I);
  }
  const P = gi(), p = () => {
    c.stop(), P && P.active && hi(P.effects, c);
  };
  if (o && t) {
    const b = t;
    t = (...I) => {
      const $ = b(...I);
      return p(), $;
    };
  }
  let y = T ? new Array(e.length).fill(qr) : qr;
  const R = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const I = c.run();
        if (b || s || A || (T ? I.some(($, C) => Fe($, y[C])) : Fe(I, y))) {
          m && m();
          const $ = Sn;
          Sn = c;
          try {
            const C = [
              I,
              // pass undefined as the old value when it's changed for the first time
              y === qr ? void 0 : T && y[0] === qr ? [] : y,
              E
            ];
            y = I, l ? l(t, 3, C) : (
              // @ts-expect-error
              t(...C)
            );
          } finally {
            Sn = $;
          }
        }
      } else
        c.run();
  };
  return a && a(R), c = new mc(f), c.scheduler = i ? () => i(R, !1) : R, E = (b) => Jd(b, !1, c), m = c.onStop = () => {
    const b = ps.get(c);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const I of b) I();
      ps.delete(c);
    }
  }, t ? r ? R(!0) : y = c.run() : i ? i(R.bind(null, !0), !0) : c.run(), p.pause = c.pause.bind(c), p.resume = c.resume.bind(c), p.stop = p, p;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Oe(e))
    Ft(e.value, t, n);
  else if (J(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (Bt(e) || on(e))
    e.forEach((r) => {
      Ft(r, t, n);
    });
  else if (lc(e)) {
    for (const r in e)
      Ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ur(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    zs(s, t, n);
  }
}
function pt(e, t, n, r) {
  if (ee(e)) {
    const s = Ur(e, t, n, r);
    return s && ic(s) && s.catch((o) => {
      zs(o, t, n);
    }), s;
  }
  if (J(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(pt(e[o], t, n, r));
    return s;
  }
}
function zs(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ae;
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
    if (o) {
      Kt(), Ur(o, null, 10, [
        e,
        l,
        u
      ]), zt();
      return;
    }
  }
  Qd(e, n, s, r, i);
}
function Qd(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Qe = [];
let Tt = -1;
const jn = [];
let en = null, $n = 0;
const xc = /* @__PURE__ */ Promise.resolve();
let ms = null;
function wi(e) {
  const t = ms || xc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zd(e) {
  let t = Tt + 1, n = Qe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Qe[r], o = vr(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ai(e) {
  if (!(e.flags & 1)) {
    const t = vr(e), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vr(n) ? Qe.push(e) : Qe.splice(Zd(t), 0, e), e.flags |= 1, kc();
  }
}
function kc() {
  ms || (ms = xc.then(Dc));
}
function eh(e) {
  if (!J(e))
    en && e.id === -1 ? en.splice($n + 1, 0, e) : e.flags & 1 || (jn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      jn.push(e[t]);
  kc();
}
function fa(e, t, n = Tt + 1) {
  for (; n < Qe.length; n++) {
    const r = Qe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Qe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mc(e) {
  if (jn.length) {
    const t = [...new Set(jn)].sort(
      (n, r) => vr(n) - vr(r)
    );
    if (jn.length = 0, en) {
      for (let n = 0; n < t.length; n++)
        en.push(t[n]);
      return;
    }
    for (en = t, $n = 0; $n < en.length; $n++) {
      const n = en[$n];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    en = null, $n = 0;
  }
}
const vr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Dc(e) {
  try {
    for (Tt = 0; Tt < Qe.length; Tt++) {
      const t = Qe[Tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ur(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Tt < Qe.length; Tt++) {
      const t = Qe[Tt];
      t && (t.flags &= -2);
    }
    Tt = -1, Qe.length = 0, Mc(), ms = null, (Qe.length || jn.length) && Dc();
  }
}
let $e = null, Fc = null;
function gs(e) {
  const t = $e;
  return $e = e, Fc = e && e.type.__scopeId || null, t;
}
function Uc(e, t = $e, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ss(-1);
    const o = gs(t), i = Wt.length;
    let a;
    try {
      a = e(...s);
    } finally {
      for (let l = Wt.length; l > i; l--) Ii();
      gs(o), r._d && Ss(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function p5(e, t) {
  if ($e === null)
    return e;
  const n = Qs($e), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = ae] = t[s];
    o && (ee(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ft(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function yn(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Kt(), pt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), zt());
  }
}
function th(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), n[e] = t;
  }
}
function yt(e, t, n = !1) {
  const r = hn();
  if (r || Cn) {
    let s = Cn ? Cn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
function nh() {
  return !!(hn() || Cn);
}
const rh = /* @__PURE__ */ Symbol.for("v-scx"), sh = () => yt(rh);
function m5(e, t) {
  return qs(e, null, t);
}
function oh(e, t) {
  return qs(
    e,
    null,
    { flush: "sync" }
  );
}
function an(e, t, n) {
  return qs(e, t, n);
}
function qs(e, t, n = ae) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = Pe({}, n), l = t && r || !t && o !== "post";
  let u;
  if (Cr) {
    if (o === "sync") {
      const E = sh();
      u = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = Rt, E.resume = Rt, E.pause = Rt, E;
    }
  }
  const c = ze;
  a.call = (E, A, T) => pt(E, c, A, T);
  let f = !1;
  o === "post" ? a.scheduler = (E) => {
    Xe(E, c && c.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (E, A) => {
    A ? E() : Ai(E);
  }), a.augmentJob = (E) => {
    t && (E.flags |= 4), f && (E.flags |= 2, c && (E.id = c.uid, E.i = c));
  };
  const m = Xd(e, t, a);
  return Cr && (u ? u.push(m) : l && m()), m;
}
function ih(e, t, n) {
  const r = this.proxy, s = ve(e) ? e.includes(".") ? $c(r, e) : () => r[e] : e.bind(r, r);
  let o;
  ee(t) ? o = t : (o = t.handler, n = t);
  const i = Vr(this), a = qs(s, o.bind(r), n);
  return i(), a;
}
function $c(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Xt = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ Symbol("_vte"), Gs = (e) => e.__isTeleport, vn = (e) => e && (e.disabled || e.disabled === ""), ah = (e) => e && (e.defer || e.defer === ""), da = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ha = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, jo = (e, t) => {
  const n = e && e.to;
  return ve(n) ? t ? t(n) : null : n;
}, lh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: m,
      o: { insert: E, querySelector: A, createText: T, createComment: P, parentNode: p }
    } = u, y = vn(t.props);
    let { dynamicChildren: R } = t;
    const b = (C, V, N) => {
      C.shapeFlag & 16 && c(
        C.children,
        V,
        N,
        s,
        o,
        i,
        a,
        l
      );
    }, I = (C = t) => {
      const V = vn(C.props), N = C.target = jo(C.props, A), j = Wo(N, C, T, E);
      N && (i !== "svg" && da(N) ? i = "svg" : i !== "mathml" && ha(N) && (i = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(N), V || (b(C, N, j), or(C, !1)));
    }, $ = (C) => {
      const V = () => {
        if (Xt.get(C) === V) {
          if (Xt.delete(C), vn(C.props)) {
            const N = p(C.el) || n;
            b(C, N, C.anchor), or(C, !0);
          }
          I(C);
        }
      };
      Xt.set(C, V), Xe(V, o);
    };
    if (e == null) {
      const C = t.el = T(""), V = t.anchor = T("");
      if (E(C, n, r), E(V, n, r), ah(t.props) || o && o.pendingBranch) {
        $(t);
        return;
      }
      y && (b(t, n, V), or(t, !0)), I();
    } else {
      t.el = e.el;
      const C = t.anchor = e.anchor, V = Xt.get(e);
      if (V) {
        V.flags |= 8, Xt.delete(e), $(t);
        return;
      }
      t.targetStart = e.targetStart;
      const N = t.target = e.target, j = t.targetAnchor = e.targetAnchor, z = vn(e.props), U = z ? n : N, X = z ? C : j;
      if (i === "svg" || da(N) ? i = "svg" : (i === "mathml" || ha(N)) && (i = "mathml"), R ? (m(
        e.dynamicChildren,
        R,
        U,
        s,
        o,
        i,
        a
      ), Pi(e, t, !0)) : l || f(
        e,
        t,
        U,
        X,
        s,
        o,
        i,
        a,
        !1
      ), y)
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Gr(
          t,
          n,
          C,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = jo(t.props, A);
        te && (t.target = te, Gr(
          t,
          te,
          null,
          u,
          0
        ));
      } else z && Gr(
        t,
        N,
        j,
        u,
        1
      );
      or(t, y);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, o) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: m
    } = e, E = vn(m), A = o || !E, T = Xt.get(e);
    if (T && (T.flags |= 8, Xt.delete(e)), f && (s(u), s(c)), o && s(l), !T && (E || f) && i & 16)
      for (let P = 0; P < a.length; P++) {
        const p = a[P];
        r(
          p,
          t,
          n,
          A,
          !!p.dynamicChildren
        );
      }
  },
  move: Gr,
  hydrate: ch
};
function Gr(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = o === 2;
  if (f && r(i, t, n), !Xt.has(e) && (!f || vn(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      s(
        u[m],
        t,
        n,
        2
      );
  f && r(a, t, n);
}
function ch(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c }
}, f) {
  function m(P, p) {
    let y = p;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor")
          t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, P._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      y = i(y);
    }
  }
  function E(P, p) {
    p.anchor = f(
      i(P),
      p,
      a(P),
      n,
      r,
      s,
      o
    );
  }
  const A = t.target = jo(
    t.props,
    l
  ), T = vn(t.props);
  if (A) {
    const P = A._lpa || A.firstChild;
    t.shapeFlag & 16 && (T ? (E(e, t), m(A, P), t.targetAnchor || Wo(
      A,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === A ? e : null
    )) : (t.anchor = i(e), m(A, P), t.targetAnchor || Wo(A, t, c, u), f(
      P && i(P),
      t,
      A,
      n,
      r,
      s,
      o
    ))), or(t, T);
  } else T && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const uh = lh;
function or(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Wo(e, t, n, r, s = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[Vc] = i, e && (r(o, e, s), r(i, e, s)), i;
}
const ft = /* @__PURE__ */ Symbol("_leaveCb"), Qn = /* @__PURE__ */ Symbol("_enterCb");
function Hc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Oi(() => {
    e.isMounted = !0;
  }), Yc(() => {
    e.isUnmounting = !0;
  }), e;
}
const ut = [Function, Array], jc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ut,
  onEnter: ut,
  onAfterEnter: ut,
  onEnterCancelled: ut,
  // leave
  onBeforeLeave: ut,
  onLeave: ut,
  onAfterLeave: ut,
  onLeaveCancelled: ut,
  // appear
  onBeforeAppear: ut,
  onAppear: ut,
  onAfterAppear: ut,
  onAppearCancelled: ut
}, Wc = (e) => {
  const t = e.subTree;
  return t.component ? Wc(t.component) : t;
}, fh = {
  name: "BaseTransition",
  props: jc,
  setup(e, { slots: t }) {
    const n = hn(), r = Hc();
    return () => {
      const s = t.default && Ti(t.default(), !0), o = s && s.length ? Bc(s) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? Go() : void 0
      );
      if (!o)
        return;
      const i = /* @__PURE__ */ oe(e), { mode: a } = i;
      if (r.isLeaving)
        return yo(o);
      const l = _s(o);
      if (!l)
        return yo(o);
      let u = wr(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== Ke && Pn(l, u);
      let c = n.subTree && _s(n.subTree);
      if (c && c.type !== Ke && !wn(c, l) && Wc(n).type !== Ke) {
        let f = wr(
          c,
          i,
          r,
          n
        );
        if (Pn(c, f), a === "out-in" && l.type !== Ke)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, yo(o);
        a === "in-out" && l.type !== Ke ? f.delayLeave = (m, E, A) => {
          const T = Kc(
            r,
            c
          );
          T[String(c.key)] = c, m[ft] = () => {
            E(), m[ft] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            A(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function Bc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ke) {
        t = n;
        break;
      }
  }
  return t;
}
const dh = fh;
function Kc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function wr(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: m,
    onLeave: E,
    onAfterLeave: A,
    onLeaveCancelled: T,
    onBeforeAppear: P,
    onAppear: p,
    onAfterAppear: y,
    onAppearCancelled: R
  } = t, b = String(e.key), I = Kc(n, e), $ = (N, j) => {
    N && pt(
      N,
      r,
      9,
      j
    );
  }, C = (N, j) => {
    const z = j[1];
    $(N, j), J(N) ? N.every((U) => U.length <= 1) && z() : N.length <= 1 && z();
  }, V = {
    mode: i,
    persisted: a,
    beforeEnter(N) {
      let j = l;
      if (!n.isMounted)
        if (o)
          j = P || l;
        else
          return;
      N[ft] && N[ft](
        !0
        /* cancelled */
      );
      const z = I[b];
      z && wn(e, z) && z.el[ft] && z.el[ft](), $(j, [N]);
    },
    enter(N) {
      if (I[b] === e) return;
      let j = u, z = c, U = f;
      if (!n.isMounted)
        if (o)
          j = p || u, z = y || c, U = R || f;
        else
          return;
      let X = !1;
      N[Qn] = (_e) => {
        X || (X = !0, _e ? $(U, [N]) : $(z, [N]), V.delayedLeave && V.delayedLeave(), N[Qn] = void 0);
      };
      const te = N[Qn].bind(null, !1);
      j ? C(j, [N, te]) : te();
    },
    leave(N, j) {
      const z = String(e.key);
      if (N[Qn] && N[Qn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      $(m, [N]);
      let U = !1;
      N[ft] = (te) => {
        U || (U = !0, j(), te ? $(T, [N]) : $(A, [N]), N[ft] = void 0, I[z] === e && delete I[z]);
      };
      const X = N[ft].bind(null, !1);
      I[z] = e, E ? C(E, [N, X]) : X();
    },
    clone(N) {
      const j = wr(
        N,
        t,
        n,
        r,
        s
      );
      return s && s(j), j;
    }
  };
  return V;
}
function yo(e) {
  if (Ys(e))
    return e = cn(e), e.children = null, e;
}
function _s(e) {
  if (!Ys(e))
    return Gs(e.type) && e.children ? Bc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function Pn(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Pn(
      Gs(n.type) && _s(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ti(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ue ? (i.patchFlag & 128 && s++, r = r.concat(
      Ti(i.children, t, a)
    )) : (t || i.type !== Ke) && r.push(a != null ? cn(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function kn(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function g5() {
  const e = hn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function zc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _5(e) {
  const t = hn(), n = /* @__PURE__ */ Pc(null);
  if (t) {
    const s = t.refs === ae ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    });
  }
  return n;
}
function pa(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ys = /* @__PURE__ */ new WeakMap();
function hr(e, t, n, r, s = !1) {
  if (J(e)) {
    e.forEach(
      (T, P) => hr(
        T,
        t && (J(t) ? t[P] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Wn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && hr(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Qs(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, m = /* @__PURE__ */ oe(f), E = f === ae ? oc : (T) => pa(c, T) ? !1 : pe(m, T), A = (T, P) => !(P && pa(c, P));
  if (u != null && u !== l) {
    if (ma(t), ve(u))
      c[u] = null, E(u) && (f[u] = null);
    else if (/* @__PURE__ */ Oe(u)) {
      const T = t;
      A(u, T.k) && (u.value = null), T.k && (c[T.k] = null);
    }
  }
  if (ee(l))
    Ur(l, a, 12, [i, c]);
  else {
    const T = ve(l), P = /* @__PURE__ */ Oe(l);
    if (T || P) {
      const p = () => {
        if (e.f) {
          const y = T ? E(l) ? f[l] : c[l] : A() || !e.k ? l.value : c[e.k];
          if (s)
            J(y) && hi(y, o);
          else if (J(y))
            y.includes(o) || y.push(o);
          else if (T)
            c[l] = [o], E(l) && (f[l] = c[l]);
          else {
            const R = [o];
            A(l, e.k) && (l.value = R), e.k && (c[e.k] = R);
          }
        } else T ? (c[l] = i, E(l) && (f[l] = i)) : P && (A(l, e.k) && (l.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const y = () => {
          p(), ys.delete(e);
        };
        y.id = -1, ys.set(e, y), Xe(y, n);
      } else
        ma(e), p();
    }
  }
}
function ma(e) {
  const t = ys.get(e);
  t && (t.flags |= 8, ys.delete(e));
}
Hs().requestIdleCallback;
Hs().cancelIdleCallback;
const Wn = (e) => !!e.type.__asyncLoader, Ys = (e) => e.type.__isKeepAlive;
function hh(e, t) {
  qc(e, "a", t);
}
function ph(e, t) {
  qc(e, "da", t);
}
function qc(e, t, n = ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Js(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ys(s.parent.vnode) && mh(r, t, n, s), s = s.parent;
  }
}
function mh(e, t, n, r) {
  const s = Js(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ci(() => {
    hi(r[t], s);
  }, n);
}
function Js(e, t, n = ze, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Kt();
      const a = Vr(n), l = pt(t, n, e, i);
      return a(), zt(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Gt = (e) => (t, n = ze) => {
  (!Cr || e === "sp") && Js(e, (...r) => t(...r), n);
}, gh = Gt("bm"), Oi = Gt("m"), _h = Gt(
  "bu"
), Gc = Gt("u"), Yc = Gt(
  "bum"
), Ci = Gt("um"), yh = Gt(
  "sp"
), bh = Gt("rtg"), Eh = Gt("rtc");
function Sh(e, t = ze) {
  Js("ec", e, t);
}
const Jc = "components";
function y5(e, t) {
  return Qc(Jc, e, !0, t) || e;
}
const Xc = /* @__PURE__ */ Symbol.for("v-ndc");
function b5(e) {
  return ve(e) ? Qc(Jc, e, !1) || e : e || Xc;
}
function Qc(e, t, n = !0, r = !1) {
  const s = $e || ze;
  if (s) {
    const o = s.type;
    {
      const a = op(
        o,
        !1
      );
      if (a && (a === t || a === qe(t) || a === $s(qe(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      ga(s[e] || o[e], t) || // global registration
      ga(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function ga(e, t) {
  return e && (e[t] || e[qe(t)] || e[$s(qe(t))]);
}
function vh(e, t, n, r) {
  let s;
  const o = n, i = J(e);
  if (i || ve(e)) {
    const a = i && /* @__PURE__ */ Lt(e);
    let l = !1, u = !1;
    a && (l = !/* @__PURE__ */ lt(e), u = /* @__PURE__ */ Pt(e), e = Bs(e)), s = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      s[c] = t(
        l ? u ? ln(ht(e[c])) : ht(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (me(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, o);
      }
    }
  else
    s = [];
  return s;
}
function E5(e, t, n, r, s, o) {
  if (n == null && (n = {}), $e.ce || $e.parent && Wn($e.parent) && $e.parent.ce) {
    const u = n, c = Object.keys(u).length > 0;
    return t !== "default" && (u.name = t), Ut(), vs(
      Ue,
      null,
      [Ie("slot", u, r && r())],
      c ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1);
  const a = Wt.length;
  Ut();
  let l;
  try {
    const u = i && Zc(i(n)), c = n.key || o || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    u && u.key;
    l = vs(
      Ue,
      {
        key: (c && !ct(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!u && r ? "_fb" : "")
      },
      u || (r ? r() : []),
      u && e._ === 1 ? 64 : -2
    );
  } catch (u) {
    for (let c = Wt.length; c > a; c--) Ii();
    throw u;
  } finally {
    i && i._c && (i._d = !0);
  }
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Zc(e) {
  return e.some((t) => Tr(t) ? !(t.type === Ke || t.type === Ue && !Zc(t.children)) : !0) ? e : null;
}
const Bo = (e) => e ? bu(e) ? Qs(e) : Bo(e.parent) : null, pr = (
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
    $parent: (e) => Bo(e.parent),
    $root: (e) => Bo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => tu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ai(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wi.bind(e.proxy)),
    $watch: (e) => ih.bind(e)
  })
), bo = (e, t) => e !== ae && !e.__isScriptSetup && pe(e, t), wh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (bo(r, t))
          return i[t] = 1, r[t];
        if (s !== ae && pe(s, t))
          return i[t] = 2, s[t];
        if (pe(o, t))
          return i[t] = 3, o[t];
        if (n !== ae && pe(n, t))
          return i[t] = 4, n[t];
        Ko && (i[t] = 0);
      }
    }
    const u = pr[t];
    let c, f;
    if (u)
      return t === "$attrs" && Be(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ae && pe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, pe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return bo(s, t) ? (s[t] = n, !0) : r !== ae && pe(r, t) ? (r[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i }
  }, a) {
    let l;
    return !!(n[a] || e !== ae && a[0] !== "$" && pe(e, a) || bo(t, a) || pe(o, a) || pe(r, a) || pe(pr, a) || pe(s.config.globalProperties, a) || (l = i.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bs(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function S5(e, t) {
  return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : Pe({}, bs(e), bs(t));
}
let Ko = !0;
function Ah(e) {
  const t = tu(e), n = e.proxy, r = e.ctx;
  Ko = !1, t.beforeCreate && _a(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: m,
    beforeUpdate: E,
    updated: A,
    activated: T,
    deactivated: P,
    beforeDestroy: p,
    beforeUnmount: y,
    destroyed: R,
    unmounted: b,
    render: I,
    renderTracked: $,
    renderTriggered: C,
    errorCaptured: V,
    serverPrefetch: N,
    // public API
    expose: j,
    inheritAttrs: z,
    // assets
    components: U,
    directives: X,
    filters: te
  } = t;
  if (u && Th(u, r, null), i)
    for (const F in i) {
      const q = i[F];
      ee(q) && (r[F] = q.bind(n));
    }
  if (s) {
    const F = s.call(n, n);
    me(F) && (e.data = /* @__PURE__ */ Fr(F));
  }
  if (Ko = !0, o)
    for (const F in o) {
      const q = o[F], fe = ee(q) ? q.bind(n, n) : ee(q.get) ? q.get.bind(n, n) : Rt, Ce = !ee(q) && ee(q.set) ? q.set.bind(n) : Rt, le = Re({
        get: fe,
        set: Ce
      });
      Object.defineProperty(r, F, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (ne) => le.value = ne
      });
    }
  if (a)
    for (const F in a)
      eu(a[F], r, n, F);
  if (l) {
    const F = ee(l) ? l.call(n) : l;
    Reflect.ownKeys(F).forEach((q) => {
      th(q, F[q]);
    });
  }
  c && _a(c, e, "c");
  function Z(F, q) {
    J(q) ? q.forEach((fe) => F(fe.bind(n))) : q && F(q.bind(n));
  }
  if (Z(gh, f), Z(Oi, m), Z(_h, E), Z(Gc, A), Z(hh, T), Z(ph, P), Z(Sh, V), Z(Eh, $), Z(bh, C), Z(Yc, y), Z(Ci, b), Z(yh, N), J(j))
    if (j.length) {
      const F = e.exposed || (e.exposed = {});
      j.forEach((q) => {
        Object.defineProperty(F, q, {
          get: () => n[q],
          set: (fe) => n[q] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === Rt && (e.render = I), z != null && (e.inheritAttrs = z), U && (e.components = U), X && (e.directives = X), N && zc(e);
}
function Th(e, t, n = Rt) {
  J(e) && (e = zo(e));
  for (const r in e) {
    const s = e[r];
    let o;
    me(s) ? "default" in s ? o = yt(
      s.from || r,
      s.default,
      !0
    ) : o = yt(s.from || r) : o = yt(s), /* @__PURE__ */ Oe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function _a(e, t, n) {
  pt(
    J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function eu(e, t, n, r) {
  let s = r.includes(".") ? $c(n, r) : () => n[r];
  if (ve(e)) {
    const o = t[e];
    ee(o) && an(s, o);
  } else if (ee(e))
    an(s, e.bind(n));
  else if (me(e))
    if (J(e))
      e.forEach((o) => eu(o, t, n, r));
    else {
      const o = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(o) && an(s, o, e);
    }
}
function tu(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => Es(l, u, i, !0)
  ), Es(l, t, i)), me(t) && o.set(t, l), l;
}
function Es(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Es(e, o, n, !0), s && s.forEach(
    (i) => Es(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Oh[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Oh = {
  data: ya,
  props: ba,
  emits: ba,
  // objects
  methods: ir,
  computed: ir,
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
  components: ir,
  directives: ir,
  // watch
  watch: Rh,
  // provide / inject
  provide: ya,
  inject: Ch
};
function ya(e, t) {
  return t ? e ? function() {
    return Pe(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ch(e, t) {
  return ir(zo(e), zo(t));
}
function zo(e) {
  if (J(e)) {
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
function ir(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ba(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    bs(e),
    bs(t ?? {})
  ) : t;
}
function Rh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Je(e[r], t[r]);
  return n;
}
function nu() {
  return {
    app: null,
    config: {
      isNativeTag: oc,
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
let Lh = 0;
function Ph(e, t) {
  return function(r, s = null) {
    ee(r) || (r = Pe({}, r)), s != null && !me(s) && (s = null);
    const o = nu(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: Lh++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ap,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return i.has(c) || (c && ee(c.install) ? (i.add(c), c.install(u, ...f)) : ee(c) && (i.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (o.components[c] = f, u) : o.components[c];
      },
      directive(c, f) {
        return f ? (o.directives[c] = f, u) : o.directives[c];
      },
      mount(c, f, m) {
        if (!l) {
          const E = u._ceVNode || Ie(r, s);
          return E.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(E, c, m), l = !0, u._container = c, c.__vue_app__ = u, Qs(E.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (pt(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return o.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = Cn;
        Cn = u;
        try {
          return c();
        } finally {
          Cn = f;
        }
      }
    };
    return u;
  };
}
let Cn = null;
function v5(e, t, n = ae) {
  const r = hn(), s = qe(t), o = qt(t), i = ru(e, s), a = Bd((l, u) => {
    let c, f = ae, m;
    return oh(() => {
      const E = e[s];
      Fe(c, E) && (c = E, u());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(E) {
        const A = n.set ? n.set(E) : E;
        if (!Fe(A, c) && !(f !== ae && Fe(E, f)))
          return;
        const T = r.vnode.props, P = !!(T && // check if parent has passed v-model
        (t in T || s in T || o in T) && (`onUpdate:${t}` in T || `onUpdate:${s}` in T || `onUpdate:${o}` in T));
        P || (c = E, u()), r.emit(`update:${t}`, A), Fe(E, f) && (Fe(E, A) && !Fe(A, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        P && f !== ae && !Fe(A, c)) && u(), f = E, m = A;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || ae : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const ru = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${qt(t)}Modifiers`];
function Ih(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ae;
  let s = n;
  const o = t.startsWith("update:"), i = o && ru(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => ve(c) ? c.trim() : c)), i.number && (s = s.map(Vs)));
  let a, l = r[a = ho(t)] || // also try camelCase event handler (#2249)
  r[a = ho(qe(t))];
  !l && o && (l = r[a = ho(qt(t))]), l && pt(
    l,
    e,
    6,
    s
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, pt(
      u,
      e,
      6,
      s
    );
  }
}
const Nh = /* @__PURE__ */ new WeakMap();
function su(e, t, n = !1) {
  const r = n ? Nh : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!ee(e)) {
    const l = (u) => {
      const c = su(u, t, !0);
      c && (a = !0, Pe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (me(e) && r.set(e, null), null) : (J(o) ? o.forEach((l) => i[l] = null) : Pe(i, o), me(e) && r.set(e, i), i);
}
function Xs(e, t) {
  return !e || !Ms(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, qt(t)) || pe(e, t));
}
function Ea(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: m,
    setupState: E,
    ctx: A,
    inheritAttrs: T
  } = e, P = gs(e);
  let p, y;
  try {
    if (n.shapeFlag & 4) {
      const b = s || r, I = b;
      p = Ct(
        u.call(
          I,
          b,
          c,
          f,
          E,
          m,
          A
        )
      ), y = a;
    } else {
      const b = t;
      p = Ct(
        b.length > 1 ? b(
          f,
          { attrs: a, slots: i, emit: l }
        ) : b(
          f,
          null
        )
      ), y = t.props ? a : xh(a);
    }
  } catch (b) {
    Wt.length = 0, zs(b, e, 1), p = Ie(Ke);
  }
  let R = p;
  if (y && T !== !1) {
    const b = Object.keys(y), { shapeFlag: I } = R;
    b.length && I & 7 && (o && b.some(Ds) && (y = kh(
      y,
      o
    )), R = cn(R, y, !1, !0));
  }
  if (n.dirs && (R = cn(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = Gs(R.type) && _s(R) || R;
    Pn(b, n.transition);
  }
  return p = R, gs(P), p;
}
const xh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ms(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kh = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ds(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Mh(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Sa(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const m = c[f];
        if (ou(i, r, m) && !Xs(u, m))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Sa(r, i, u) : !0 : !!i;
  return !1;
}
function Sa(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (ou(t, e, o) && !Xs(n, o))
      return !0;
  }
  return !1;
}
function ou(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && me(r) && me(s) ? !bt(r, s) : r !== s;
}
function Dh({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const iu = {}, au = () => Object.create(iu), lu = (e) => Object.getPrototypeOf(e) === iu;
function Fh(e, t, n, r = !1) {
  const s = {}, o = au();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cu(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Lc(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function Uh(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = /* @__PURE__ */ oe(s), [l] = e.propsOptions;
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
        if (Xs(e.emitsOptions, m))
          continue;
        const E = t[m];
        if (l)
          if (pe(o, m))
            E !== o[m] && (o[m] = E, u = !0);
          else {
            const A = qe(m);
            s[A] = qo(
              l,
              a,
              A,
              E,
              e,
              !1
            );
          }
        else
          E !== o[m] && (o[m] = E, u = !0);
      }
    }
  } else {
    cu(e, t, s, o) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !pe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = qt(f)) === f || !pe(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[f] = qo(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (o !== a)
      for (const f in o)
        (!t || !pe(t, f)) && (delete o[f], u = !0);
  }
  u && Dt(e.attrs, "set", "");
}
function cu(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (cr(l))
        continue;
      const u = t[l];
      let c;
      s && pe(s, c = qe(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Xs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ oe(n), u = a || ae;
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      n[f] = qo(
        s,
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
function qo(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = pe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ee(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const c = Vr(s);
          r = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === qt(n)) && (r = !0));
  }
  return r;
}
const $h = /* @__PURE__ */ new WeakMap();
function uu(e, t, n = !1) {
  const r = n ? $h : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!ee(e)) {
    const c = (f) => {
      l = !0;
      const [m, E] = uu(f, t, !0);
      Pe(i, m), E && a.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l)
    return me(e) && r.set(e, An), An;
  if (J(o))
    for (let c = 0; c < o.length; c++) {
      const f = qe(o[c]);
      va(f) && (i[f] = ae);
    }
  else if (o)
    for (const c in o) {
      const f = qe(c);
      if (va(f)) {
        const m = o[c], E = i[f] = J(m) || ee(m) ? { type: m } : Pe({}, m), A = E.type;
        let T = !1, P = !0;
        if (J(A))
          for (let p = 0; p < A.length; ++p) {
            const y = A[p], R = ee(y) && y.name;
            if (R === "Boolean") {
              T = !0;
              break;
            } else R === "String" && (P = !1);
          }
        else
          T = ee(A) && A.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = T, E[
          1
          /* shouldCastTrue */
        ] = P, (T || pe(E, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return me(e) && r.set(e, u), u;
}
function va(e) {
  return e[0] !== "$" && !cr(e);
}
const Ri = (e) => e === "_" || e === "_ctx" || e === "$stable", Li = (e) => J(e) ? e.map(Ct) : [Ct(e)], Vh = (e, t, n) => {
  if (t._n)
    return t;
  const r = Uc((...s) => Li(t(...s)), n);
  return r._c = !1, r;
}, fu = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Ri(s)) continue;
    const o = e[s];
    if (ee(o))
      t[s] = Vh(s, o, r);
    else if (o != null) {
      const i = Li(o);
      t[s] = () => i;
    }
  }
}, du = (e, t) => {
  const n = Li(t);
  e.slots.default = () => n;
}, hu = (e, t, n) => {
  for (const r in t)
    (n || !Ri(r)) && (e[r] = t[r]);
}, Hh = (e, t, n) => {
  const r = e.slots = au();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (hu(r, t, n), n && cc(r, "_", s, !0)) : fu(t, r);
  } else t && du(e, t);
}, jh = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = ae;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : hu(s, t, n) : (o = !t.$stable, fu(t, s)), i = t;
  } else t && (du(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !Ri(a) && i[a] == null && delete s[a];
}, Xe = qh;
function Wh(e) {
  return Bh(e);
}
function Bh(e, t) {
  const n = Hs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: m,
    setScopeId: E = Rt,
    insertStaticContent: A
  } = e, T = (g, _, O, M = null, x = null, k = null, d = void 0, h = null, v = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !wn(g, _) && (M = re(g), ne(g, x, k, !0), g = null), _.patchFlag === -2 && (v = !1, _.dynamicChildren = null), _.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (_.dynamicChildren === An && (_.dynamicChildren = []), _.dynamicChildren.hasOnce = !0);
    const { type: w, ref: W, shapeFlag: H } = _;
    switch (w) {
      case $r:
        P(g, _, O, M);
        break;
      case Ke:
        p(g, _, O, M);
        break;
      case is:
        g == null && y(_, O, M, d);
        break;
      case Ue:
        U(
          g,
          _,
          O,
          M,
          x,
          k,
          d,
          h,
          v
        );
        break;
      default:
        H & 1 ? I(
          g,
          _,
          O,
          M,
          x,
          k,
          d,
          h,
          v
        ) : H & 6 ? X(
          g,
          _,
          O,
          M,
          x,
          k,
          d,
          h,
          v
        ) : (H & 64 || H & 128) && w.process(
          g,
          _,
          O,
          M,
          x,
          k,
          d,
          h,
          v,
          He
        );
    }
    W != null && x ? hr(W, g && g.ref, k, _ || g, !_) : W == null && g && g.ref != null && hr(g.ref, null, k, g, !0);
  }, P = (g, _, O, M) => {
    if (g == null)
      r(
        _.el = a(_.children),
        O,
        M
      );
    else {
      const x = _.el = g.el;
      _.children !== g.children && u(x, _.children);
    }
  }, p = (g, _, O, M) => {
    g == null ? r(
      _.el = l(_.children || ""),
      O,
      M
    ) : _.el = g.el;
  }, y = (g, _, O, M) => {
    [g.el, g.anchor] = A(
      g.children,
      _,
      O,
      M,
      g.el,
      g.anchor
    );
  }, R = ({ el: g, anchor: _ }, O, M) => {
    let x;
    for (; g && g !== _; )
      x = m(g), r(g, O, M), g = x;
    r(_, O, M);
  }, b = ({ el: g, anchor: _ }) => {
    let O;
    for (; g && g !== _; )
      O = m(g), s(g), g = O;
    s(_);
  }, I = (g, _, O, M, x, k, d, h, v) => {
    if (_.type === "svg" ? d = "svg" : _.type === "math" && (d = "mathml"), g == null)
      $(
        _,
        O,
        M,
        x,
        k,
        d,
        h,
        v
      );
    else {
      const w = g.el && g.el._isVueCE ? g.el : null;
      try {
        w && w._beginPatch(), N(
          g,
          _,
          x,
          k,
          d,
          h,
          v
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, $ = (g, _, O, M, x, k, d, h) => {
    let v, w;
    const { props: W, shapeFlag: H, transition: K, dirs: G } = g;
    if (v = g.el = i(
      g.type,
      k,
      W && W.is,
      W
    ), H & 8 ? c(v, g.children) : H & 16 && V(
      g.children,
      v,
      null,
      M,
      x,
      Eo(g, k),
      d,
      h
    ), G && yn(g, null, M, "created"), C(v, g, g.scopeId, d, M), W) {
      for (const D in W)
        D !== "value" && !cr(D) && o(v, D, null, W[D], k, M);
      "value" in W && o(v, "value", null, W.value, k), (w = W.onVnodeBeforeMount) && St(w, M, g);
    }
    G && yn(g, null, M, "beforeMount");
    const L = Kh(x, K);
    L && K.beforeEnter(v), r(v, _, O), ((w = W && W.onVnodeMounted) || L || G) && Xe(() => {
      try {
        w && St(w, M, g), L && K.enter(v), G && yn(g, null, M, "mounted");
      } finally {
      }
    }, x);
  }, C = (g, _, O, M, x) => {
    if (O && E(g, O), M)
      for (let k = 0; k < M.length; k++)
        E(g, M[k]);
    if (x) {
      let k = x.subTree;
      if (_ === k || gu(k.type) && (k.ssContent === _ || k.ssFallback === _)) {
        const d = x.vnode;
        C(
          g,
          d,
          d.scopeId,
          d.slotScopeIds,
          x.parent
        );
      }
    }
  }, V = (g, _, O, M, x, k, d, h, v = 0) => {
    for (let w = v; w < g.length; w++) {
      const W = g[w] = h ? Mt(g[w]) : Ct(g[w]);
      T(
        null,
        W,
        _,
        O,
        M,
        x,
        k,
        d,
        h
      );
    }
  }, N = (g, _, O, M, x, k, d) => {
    const h = _.el = g.el;
    let { patchFlag: v, dynamicChildren: w, dirs: W } = _;
    v |= g.patchFlag & 16;
    const H = g.props || ae, K = _.props || ae;
    let G;
    if (O && bn(O, !1), (G = K.onVnodeBeforeUpdate) && St(G, O, _, g), W && yn(_, g, O, "beforeUpdate"), O && bn(O, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!g.dynamicChildren || g.dynamicChildren.length !== w.length) && (v = 0, d = !1, w = null), (H.innerHTML && K.innerHTML == null || H.textContent && K.textContent == null) && c(h, ""), w ? j(
      g.dynamicChildren,
      w,
      h,
      O,
      M,
      Eo(_, x),
      k
    ) : d || q(
      g,
      _,
      h,
      null,
      O,
      M,
      Eo(_, x),
      k,
      !1
    ), v > 0) {
      if (v & 16)
        z(h, H, K, O, x);
      else if (v & 2 && H.class !== K.class && o(h, "class", null, K.class, x), v & 4 && o(h, "style", H.style, K.style, x), v & 8) {
        const L = _.dynamicProps;
        for (let D = 0; D < L.length; D++) {
          const Q = L[D], se = H[Q], Ee = K[Q];
          (Ee !== se || Q === "value") && o(h, Q, se, Ee, x, O);
        }
      }
      v & 1 && g.children !== _.children && c(h, _.children);
    } else !d && w == null && z(h, H, K, O, x);
    ((G = K.onVnodeUpdated) || W) && Xe(() => {
      G && St(G, O, _, g), W && yn(_, g, O, "updated");
    }, M);
  }, j = (g, _, O, M, x, k, d) => {
    for (let h = 0; h < _.length; h++) {
      const v = g[h], w = _[h], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wn(v, w) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? f(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      T(
        v,
        w,
        W,
        null,
        M,
        x,
        k,
        d,
        !0
      );
    }
  }, z = (g, _, O, M, x) => {
    if (_ !== O) {
      if (_ !== ae)
        for (const k in _)
          !cr(k) && !(k in O) && o(
            g,
            k,
            _[k],
            null,
            x,
            M
          );
      for (const k in O) {
        if (cr(k)) continue;
        const d = O[k], h = _[k];
        d !== h && k !== "value" && o(g, k, h, d, x, M);
      }
      "value" in O && o(g, "value", _.value, O.value, x);
    }
  }, U = (g, _, O, M, x, k, d, h, v) => {
    const w = _.el = g ? g.el : a(""), W = _.anchor = g ? g.anchor : a("");
    let { patchFlag: H, dynamicChildren: K, slotScopeIds: G } = _;
    G && (h = h ? h.concat(G) : G), g == null ? (r(w, O, M), r(W, O, M), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      O,
      W,
      x,
      k,
      d,
      h,
      v
    )) : H > 0 && H & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === K.length ? (j(
      g.dynamicChildren,
      K,
      O,
      x,
      k,
      d,
      h
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || x && _ === x.subTree) && Pi(
      g,
      _,
      !0
      /* shallow */
    )) : q(
      g,
      _,
      O,
      W,
      x,
      k,
      d,
      h,
      v
    );
  }, X = (g, _, O, M, x, k, d, h, v) => {
    _.slotScopeIds = h, g == null ? _.shapeFlag & 512 ? x.ctx.activate(
      _,
      O,
      M,
      d,
      v
    ) : te(
      _,
      O,
      M,
      x,
      k,
      d,
      v
    ) : _e(g, _, v);
  }, te = (g, _, O, M, x, k, d) => {
    const h = g.component = ep(
      g,
      M,
      x
    );
    if (Ys(g) && (h.ctx.renderer = He), tp(h, !1, d), h.asyncDep) {
      if (x && x.registerDep(h, Z, d), !g.el) {
        const v = h.subTree = Ie(Ke);
        p(null, v, _, O), g.placeholder = v.el;
      }
    } else
      Z(
        h,
        g,
        _,
        O,
        x,
        k,
        d
      );
  }, _e = (g, _, O) => {
    const M = _.component = g.component;
    if (Mh(g, _, O))
      if (M.asyncDep && !M.asyncResolved) {
        _.el = g.el, F(M, _, O);
        return;
      } else
        M.next = _, M.update();
    else
      _.el = g.el, M.vnode = _;
  }, Z = (g, _, O, M, x, k, d) => {
    const h = () => {
      if (g.isMounted) {
        let { next: H, bu: K, u: G, parent: L, vnode: D } = g;
        {
          const Le = pu(g);
          if (Le) {
            H && (H.el = D.el, F(g, H, d)), Le.asyncDep.then(() => {
              Xe(() => {
                g.isUnmounted || w();
              }, x);
            });
            return;
          }
        }
        let Q = H, se;
        bn(g, !1), H ? (H.el = D.el, F(g, H, d)) : H = D, K && os(K), (se = H.props && H.props.onVnodeBeforeUpdate) && St(se, L, H, D), bn(g, !0);
        const Ee = Ea(g), Me = g.subTree;
        g.subTree = Ee, T(
          Me,
          Ee,
          // parent may have changed if it's in a teleport
          f(Me.el),
          // anchor may have changed if it's in a fragment
          re(Me),
          g,
          x,
          k
        ), H.el = Ee.el, Q === null && Dh(g, Ee.el), G && Xe(G, x), (se = H.props && H.props.onVnodeUpdated) && Xe(
          () => St(se, L, H, D),
          x
        );
      } else {
        let H;
        const { el: K, props: G } = _, { bm: L, m: D, parent: Q, root: se, type: Ee } = g, Me = Wn(_);
        bn(g, !1), L && os(L), !Me && (H = G && G.onVnodeBeforeMount) && St(H, Q, _), bn(g, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            Ee,
            g.parent ? g.parent.type : void 0
          );
          const Le = g.subTree = Ea(g);
          T(
            null,
            Le,
            O,
            M,
            g,
            x,
            k
          ), _.el = Le.el;
        }
        if (D && Xe(D, x), !Me && (H = G && G.onVnodeMounted)) {
          const Le = _;
          Xe(
            () => St(H, Q, Le),
            x
          );
        }
        (_.shapeFlag & 256 || Q && Wn(Q.vnode) && Q.vnode.shapeFlag & 256) && g.a && Xe(g.a, x), g.isMounted = !0, _ = O = M = null;
      }
    };
    g.scope.on();
    const v = g.effect = new mc(h);
    g.scope.off();
    const w = g.update = v.run.bind(v), W = g.job = v.runIfDirty.bind(v);
    W.i = g, W.id = g.uid, v.scheduler = () => Ai(W), bn(g, !0), w();
  }, F = (g, _, O) => {
    _.component = g;
    const M = g.vnode.props;
    g.vnode = _, g.next = null, Uh(g, _.props, M, O), jh(g, _.children, O), Kt(), fa(g), zt();
  }, q = (g, _, O, M, x, k, d, h, v = !1) => {
    const w = g && g.children, W = g ? g.shapeFlag : 0, H = _.children, { patchFlag: K, shapeFlag: G } = _;
    if (K > 0) {
      if (K & 128) {
        Ce(
          w,
          H,
          O,
          M,
          x,
          k,
          d,
          h,
          v
        );
        return;
      } else if (K & 256) {
        fe(
          w,
          H,
          O,
          M,
          x,
          k,
          d,
          h,
          v
        );
        return;
      }
    }
    G & 8 ? (W & 16 && tt(w, x, k), H !== w && c(O, H)) : W & 16 ? G & 16 ? Ce(
      w,
      H,
      O,
      M,
      x,
      k,
      d,
      h,
      v
    ) : tt(w, x, k, !0) : (W & 8 && c(O, ""), G & 16 && V(
      H,
      O,
      M,
      x,
      k,
      d,
      h,
      v
    ));
  }, fe = (g, _, O, M, x, k, d, h, v) => {
    g = g || An, _ = _ || An;
    const w = g.length, W = _.length, H = Math.min(w, W);
    let K;
    for (K = 0; K < H; K++) {
      const G = _[K] = v ? Mt(_[K]) : Ct(_[K]);
      T(
        g[K],
        G,
        O,
        null,
        x,
        k,
        d,
        h,
        v
      );
    }
    w > W ? tt(
      g,
      x,
      k,
      !0,
      !1,
      H
    ) : V(
      _,
      O,
      M,
      x,
      k,
      d,
      h,
      v,
      H
    );
  }, Ce = (g, _, O, M, x, k, d, h, v) => {
    let w = 0;
    const W = _.length;
    let H = g.length - 1, K = W - 1;
    for (; w <= H && w <= K; ) {
      const G = g[w], L = _[w] = v ? Mt(_[w]) : Ct(_[w]);
      if (wn(G, L))
        T(
          G,
          L,
          O,
          null,
          x,
          k,
          d,
          h,
          v
        );
      else
        break;
      w++;
    }
    for (; w <= H && w <= K; ) {
      const G = g[H], L = _[K] = v ? Mt(_[K]) : Ct(_[K]);
      if (wn(G, L))
        T(
          G,
          L,
          O,
          null,
          x,
          k,
          d,
          h,
          v
        );
      else
        break;
      H--, K--;
    }
    if (w > H) {
      if (w <= K) {
        const G = K + 1, L = G < W ? _[G].el : M;
        for (; w <= K; )
          T(
            null,
            _[w] = v ? Mt(_[w]) : Ct(_[w]),
            O,
            L,
            x,
            k,
            d,
            h,
            v
          ), w++;
      }
    } else if (w > K)
      for (; w <= H; )
        ne(g[w], x, k, !0), w++;
    else {
      const G = w, L = w, D = /* @__PURE__ */ new Map();
      for (w = L; w <= K; w++) {
        const ot = _[w] = v ? Mt(_[w]) : Ct(_[w]);
        ot.key != null && D.set(ot.key, w);
      }
      let Q, se = 0;
      const Ee = K - L + 1;
      let Me = !1, Le = 0;
      const _n = new Array(Ee);
      for (w = 0; w < Ee; w++) _n[w] = 0;
      for (w = G; w <= H; w++) {
        const ot = g[w];
        if (se >= Ee) {
          ne(ot, x, k, !0);
          continue;
        }
        let Et;
        if (ot.key != null)
          Et = D.get(ot.key);
        else
          for (Q = L; Q <= K; Q++)
            if (_n[Q - L] === 0 && wn(ot, _[Q])) {
              Et = Q;
              break;
            }
        Et === void 0 ? ne(ot, x, k, !0) : (_n[Et - L] = w + 1, Et >= Le ? Le = Et : Me = !0, T(
          ot,
          _[Et],
          O,
          null,
          x,
          k,
          d,
          h,
          v
        ), se++);
      }
      const fo = Me ? zh(_n) : An;
      for (Q = fo.length - 1, w = Ee - 1; w >= 0; w--) {
        const ot = L + w, Et = _[ot], ra = _[ot + 1], sa = ot + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ra.el || mu(ra)
        ) : M;
        _n[w] === 0 ? T(
          null,
          Et,
          O,
          sa,
          x,
          k,
          d,
          h,
          v
        ) : Me && (Q < 0 || w !== fo[Q] ? le(Et, O, sa, 2) : Q--);
      }
    }
  }, le = (g, _, O, M, x = null) => {
    const { el: k, type: d, transition: h, children: v, shapeFlag: w } = g;
    if (w & 6) {
      le(g.component.subTree, _, O, M);
      return;
    }
    if (w & 128) {
      g.suspense.move(_, O, M);
      return;
    }
    if (w & 64) {
      d.move(g, _, O, He);
      return;
    }
    if (d === Ue) {
      r(k, _, O);
      for (let H = 0; H < v.length; H++)
        le(v[H], _, O, M);
      r(g.anchor, _, O);
      return;
    }
    if (d === is) {
      R(g, _, O);
      return;
    }
    if (M !== 2 && w & 1 && h)
      if (M === 0)
        h.persisted && !k[ft] ? r(k, _, O) : (h.beforeEnter(k), r(k, _, O), Xe(() => h.enter(k), x));
      else {
        const { leave: H, delayLeave: K, afterLeave: G } = h, L = () => {
          g.ctx.isUnmounted ? s(k) : r(k, _, O);
        }, D = () => {
          const Q = k._isLeaving || !!k[ft];
          k._isLeaving && k[ft](
            !0
            /* cancelled */
          ), h.persisted && !Q ? L() : H(k, () => {
            L(), G && G();
          });
        };
        K ? K(k, L, D) : D();
      }
    else
      r(k, _, O);
  }, ne = (g, _, O, M = !1, x = !1) => {
    const {
      type: k,
      props: d,
      ref: h,
      children: v,
      dynamicChildren: w,
      shapeFlag: W,
      patchFlag: H,
      dirs: K,
      cacheIndex: G,
      memo: L
    } = g;
    if ((H === -2 || w && w.hasOnce) && (x = !1), h != null && (Kt(), hr(h, null, O, g, !0), zt()), G != null && (!g.ctx || g.ctx === _) && (_.renderCache[G] = void 0), W & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const D = W & 1 && K, Q = !Wn(g);
    let se;
    if (Q && (se = d && d.onVnodeBeforeUnmount) && St(se, _, g), W & 6)
      st(g.component, O, M);
    else {
      if (W & 128) {
        g.suspense.unmount(O, M);
        return;
      }
      D && yn(g, null, _, "beforeUnmount"), W & 64 ? g.type.remove(
        g,
        _,
        O,
        He,
        M
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Ue || H > 0 && H & 64) ? tt(
        w,
        _,
        O,
        !1,
        !0
      ) : (k === Ue && H & 384 || !x && W & 16) && tt(v, _, O), M && Ve(g);
    }
    const Ee = L != null && G == null;
    (Q && (se = d && d.onVnodeUnmounted) || D || Ee) && Xe(() => {
      se && St(se, _, g), D && yn(g, null, _, "unmounted"), Ee && (g.el = null);
    }, O);
  }, Ve = (g) => {
    const { type: _, el: O, anchor: M, transition: x } = g;
    if (_ === Ue) {
      et(O, M);
      return;
    }
    if (_ === is) {
      b(g), x && !x.persisted && x.afterLeave && x.afterLeave();
      return;
    }
    const k = () => {
      s(O), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (g.shapeFlag & 1 && x && !x.persisted) {
      const { leave: d, delayLeave: h } = x, v = () => d(O, k);
      h ? h(g.el, k, v) : v();
    } else
      k();
  }, et = (g, _) => {
    let O;
    for (; g !== _; )
      O = m(g), s(g), g = O;
    s(_);
  }, st = (g, _, O) => {
    const { bum: M, scope: x, job: k, subTree: d, um: h, m: v, a: w } = g;
    wa(v), wa(w), M && os(M), x.stop(), k ? (k.flags |= 8, ne(d, g, _, O)) : g.vnode.el && d && (d.transition = g.vnode.transition, ne(d, g, _, O)), h && Xe(h, _), Xe(() => {
      g.isUnmounted = !0;
    }, _);
  }, tt = (g, _, O, M = !1, x = !1, k = 0) => {
    for (let d = k; d < g.length; d++)
      ne(g[d], _, O, M, x);
  }, re = (g) => {
    if (g.shapeFlag & 6)
      return re(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const _ = m(g.anchor || g.el), O = _ && _[Vc];
    return O ? m(O) : _;
  };
  let Te = !1;
  const Ye = (g, _, O) => {
    let M;
    g == null ? _._vnode && (ne(_._vnode, null, null, !0), M = _._vnode.component) : T(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      O
    ), _._vnode = g, Te || (Te = !0, fa(M), Mc(), Te = !1);
  }, He = {
    p: T,
    um: ne,
    m: le,
    r: Ve,
    mt: te,
    mc: V,
    pc: q,
    pbc: j,
    n: re,
    o: e
  };
  return {
    render: Ye,
    hydrate: void 0,
    createApp: Ph(Ye)
  };
}
function Eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Kh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pi(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (J(r) && J(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Mt(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && Pi(i, a)), a.type === $r && (a.patchFlag === -1 && (a = s[o] = Mt(a)), a.el = i.el), a.type === Ke && !a.el && (a.el = i.el);
    }
}
function zh(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function pu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pu(t);
}
function wa(e) {
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
const gu = (e) => e.__isSuspense;
function qh(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : eh(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), $r = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), is = /* @__PURE__ */ Symbol.for("v-stc"), Wt = [];
let it = null;
function Ut(e = !1) {
  Wt.push(it = e ? null : []);
}
function Ii() {
  Wt.pop(), it = Wt[Wt.length - 1] || null;
}
let Ar = 1;
function Ss(e, t = !1) {
  Ar += e, e < 0 && it && t && (it.hasOnce = !0);
}
function _u(e) {
  return e.dynamicChildren = Ar > 0 ? it || An : null, Ii(), Ar > 0 && it && it.push(e), e;
}
function ar(e, t, n, r, s, o) {
  return _u(
    gt(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function vs(e, t, n, r, s) {
  return _u(
    Ie(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Tr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yu = ({ key: e }) => e ?? null, as = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ve(e) || /* @__PURE__ */ Oe(e) || ee(e) ? { i: $e, r: e, k: t, f: !!n } : e : null);
function gt(e, t = null, n = null, r = 0, s = null, o = e === Ue ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yu(t),
    ref: t && as(t),
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: $e
  };
  return a ? (ws(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ve(n) ? 8 : 16), Ar > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && it.push(l), l;
}
const Ie = Gh;
function Gh(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Xc) && (e = Ke), Tr(e)) {
    const a = cn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ws(a, n), Ar > 0 && !o && it && (a.shapeFlag & 6 ? it[it.indexOf(e)] = a : it.push(a)), a.patchFlag = -2, a;
  }
  if (ip(e) && (e = e.__vccOpts), t) {
    t = Yh(t);
    let { class: a, style: l } = t;
    a && !ve(a) && (t.class = rn(a)), me(l) && (/* @__PURE__ */ Ks(l) && !J(l) && (l = Pe({}, l)), t.style = js(l));
  }
  const i = ve(e) ? 1 : gu(e) ? 128 : Gs(e) ? 64 : me(e) ? 4 : ee(e) ? 2 : 0;
  return gt(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Yh(e) {
  return e ? /* @__PURE__ */ Ks(e) || lu(e) ? Pe({}, e) : e : null;
}
function cn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? Xh(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && yu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? J(o) ? o.concat(as(t)) : [o, as(t)] : as(t)
    ) : o,
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
    patchFlag: t && e.type !== Ue ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && cn(e.ssContent),
    ssFallback: e.ssFallback && cn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && r && Pn(
    c,
    l.clone(c)
  ), c;
}
function Jh(e = " ", t = 0) {
  return Ie($r, null, e, t);
}
function w5(e, t) {
  const n = Ie(is, null, e);
  return n.staticCount = t, n;
}
function Go(e = "", t = !1) {
  return t ? (Ut(), vs(Ke, null, e)) : Ie(Ke, null, e);
}
function Ct(e) {
  return e == null || typeof e == "boolean" ? Ie(Ke) : J(e) ? Ie(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tr(e) ? Mt(e) : Ie($r, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cn(e);
}
function ws(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ws(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !lu(t) ? t._ctx = $e : s === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (r & 65) {
      ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $e }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Jh(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Xh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = rn([t.class, r.class]));
      else if (s === "style")
        t.style = js([t.style, r.style]);
      else if (Ms(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(J(o) && o.includes(i)) ? t[s] = o ? [].concat(o, i) : i : i == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ds(s) && (t[s] = i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function St(e, t, n, r = null) {
  pt(e, t, 7, [
    n,
    r
  ]);
}
const Qh = nu();
let Zh = 0;
function ep(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Qh, o = {
    uid: Zh++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new hc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: uu(r, s),
    emitsOptions: su(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ih.bind(null, o), e.ce && e.ce(o), o;
}
let ze = null;
const hn = () => ze || $e;
let As, Or;
{
  const e = Hs(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  As = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), Or = t(
    "__VUE_SSR_SETTERS__",
    (n) => Cr = n
  );
}
const Vr = (e) => {
  const t = ze;
  return As(e), e.scope.on(), () => {
    e.scope.off(), As(t);
  };
}, Aa = () => {
  ze && ze.scope.off(), As(null);
};
function bu(e) {
  return e.vnode.shapeFlag & 4;
}
let Cr = !1;
function tp(e, t = !1, n = !1) {
  t && Or(t);
  const { props: r, children: s } = e.vnode, o = bu(e);
  Fh(e, r, o, t), Hh(e, s, n || t);
  const i = o ? np(e, t) : void 0;
  return t && Or(!1), i;
}
function np(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wh);
  const { setup: r } = n;
  if (r) {
    Kt();
    const s = e.setupContext = r.length > 1 ? sp(e) : null, o = Vr(e), i = Ur(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = ic(i);
    if (zt(), o(), (a || e.sp) && !Wn(e) && zc(e), a) {
      if (i.then(Aa, Aa), t)
        return i.then((l) => {
          Or(!0);
          try {
            Ta(e, l, t);
          } finally {
            Or(!1);
          }
        }).catch((l) => {
          zs(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Ta(e, i);
  } else
    Eu(e);
}
function Ta(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = Nc(t)), Eu(e);
}
function Eu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Rt);
  {
    const s = Vr(e);
    Kt();
    try {
      Ah(e);
    } finally {
      zt(), s();
    }
  }
}
const rp = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function sp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, rp),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nc(vi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pr)
        return pr[n](e);
    },
    has(t, n) {
      return n in t || n in pr;
    }
  })) : e.proxy;
}
function op(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ip(e) {
  return ee(e) && "__vccOpts" in e;
}
const Re = (e, t) => /* @__PURE__ */ Yd(e, t, Cr);
function un(e, t, n) {
  try {
    Ss(-1);
    const r = arguments.length;
    return r === 2 ? me(t) && !J(t) ? Tr(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Tr(n) && (n = [n]), Ie(e, t, n));
  } finally {
    Ss(1);
  }
}
const ap = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yo;
const Oa = typeof window < "u" && window.trustedTypes;
if (Oa)
  try {
    Yo = /* @__PURE__ */ Oa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Su = Yo ? (e) => Yo.createHTML(e) : (e) => e, lp = "http://www.w3.org/2000/svg", cp = "http://www.w3.org/1998/Math/MathML", xt = typeof document < "u" ? document : null, Ca = xt && /* @__PURE__ */ xt.createElement("template"), up = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? xt.createElementNS(lp, e) : t === "mathml" ? xt.createElementNS(cp, e) : n ? xt.createElement(e, { is: n }) : xt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => xt.createTextNode(e),
  createComment: (e) => xt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Ca.innerHTML = Su(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ca.content;
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
}, Jt = "transition", Zn = "animation", Kn = /* @__PURE__ */ Symbol("_vtc"), vu = {
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
}, wu = /* @__PURE__ */ Pe(
  {},
  jc,
  vu
), fp = (e) => (e.displayName = "Transition", e.props = wu, e), A5 = /* @__PURE__ */ fp(
  (e, { slots: t }) => un(dh, Au(e), t)
), En = (e, t = []) => {
  J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Au(e) {
  const t = {};
  for (const U in e)
    U in vu || (t[U] = e[U]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = i,
    appearToClass: c = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, A = dp(s), T = A && A[0], P = A && A[1], {
    onBeforeEnter: p,
    onEnter: y,
    onEnterCancelled: R,
    onLeave: b,
    onLeaveCancelled: I,
    onBeforeAppear: $ = p,
    onAppear: C = y,
    onAppearCancelled: V = R
  } = t, N = (U, X, te, _e) => {
    U._enterCancelled = _e, Qt(U, X ? c : a), Qt(U, X ? u : i), te && te();
  }, j = (U, X) => {
    U._isLeaving = !1, Qt(U, f), Qt(U, E), Qt(U, m), X && X();
  }, z = (U) => (X, te) => {
    const _e = U ? C : y, Z = () => N(X, U, te);
    En(_e, [X, Z]), La(() => {
      Qt(X, U ? l : o), At(X, U ? c : a), Ra(_e) || Pa(X, r, T, Z);
    });
  };
  return Pe(t, {
    onBeforeEnter(U) {
      En(p, [U]), At(U, o), At(U, i);
    },
    onBeforeAppear(U) {
      En($, [U]), At(U, l), At(U, u);
    },
    onEnter: z(!1),
    onAppear: z(!0),
    onLeave(U, X) {
      U._isLeaving = !0;
      const te = () => j(U, X);
      At(U, f), U._enterCancelled ? (At(U, m), Jo(U)) : (Jo(U), At(U, m)), La(() => {
        U._isLeaving && (Qt(U, f), At(U, E), Ra(b) || Pa(U, r, P, te));
      }), En(b, [U, te]);
    },
    onEnterCancelled(U) {
      N(U, !1, void 0, !0), En(R, [U]);
    },
    onAppearCancelled(U) {
      N(U, !0, void 0, !0), En(V, [U]);
    },
    onLeaveCancelled(U) {
      j(U), En(I, [U]);
    }
  });
}
function dp(e) {
  if (e == null)
    return null;
  if (me(e))
    return [So(e.enter), So(e.leave)];
  {
    const t = So(e);
    return [t, t];
  }
}
function So(e) {
  return pd(e);
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kn] || (e[Kn] = /* @__PURE__ */ new Set())).add(t);
}
function Qt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Kn];
  n && (n.delete(t), n.size || (e[Kn] = void 0));
}
function La(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hp = 0;
function Pa(e, t, n, r) {
  const s = e._endId = ++hp, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = Tu(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, m), o();
  }, m = (E) => {
    E.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, m);
}
function Tu(e, t) {
  const n = window.getComputedStyle(e), r = (A) => (n[A] || "").split(", "), s = r(`${Jt}Delay`), o = r(`${Jt}Duration`), i = Ia(s, o), a = r(`${Zn}Delay`), l = r(`${Zn}Duration`), u = Ia(a, l);
  let c = null, f = 0, m = 0;
  t === Jt ? i > 0 && (c = Jt, f = i, m = o.length) : t === Zn ? u > 0 && (c = Zn, f = u, m = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Jt : Zn : null, m = c ? c === Jt ? o.length : l.length : 0);
  const E = c === Jt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Jt}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: m,
    hasTransform: E
  };
}
function Ia(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Na(n) + Na(e[r])));
}
function Na(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Jo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function pp(e, t, n) {
  const r = e[Kn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ts = /* @__PURE__ */ Symbol("_vod"), Ni = /* @__PURE__ */ Symbol("_vsh"), T5 = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ts] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : er(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), er(e, !0), r.enter(e)) : r.leave(e, () => {
      er(e, !1);
    }) : er(e, t));
  },
  beforeUnmount(e, { value: t }) {
    er(e, t);
  }
};
function er(e, t) {
  e.style.display = t ? e[Ts] : "none", e[Ni] = !t;
}
const mp = /* @__PURE__ */ Symbol(""), gp = /(?:^|;)\s*display\s*:/;
function _p(e, t, n) {
  const r = e.style, s = ve(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (ve(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && lr(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && lr(r, i, "");
    for (const i in n) {
      i === "display" && (o = !0);
      const a = n[i];
      a != null ? bp(
        e,
        i,
        !ve(t) && t ? t[i] : void 0,
        a
      ) || lr(r, i, a) : lr(r, i, "");
    }
  } else if (s) {
    if (t !== n) {
      const i = r[mp];
      i && (n += ";" + i), r.cssText = n, o = gp.test(n);
    }
  } else t && e.removeAttribute("style");
  Ts in e && (e[Ts] = o ? r.display : "", e[Ni] && (r.display = "none"));
}
const Yr = /\s*!important$/;
function lr(e, t, n) {
  if (J(n))
    n.forEach((r) => lr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    Yr.test(n) ? e.setProperty(t, n.replace(Yr, ""), "important") : e.setProperty(t, n);
  else {
    const r = yp(e, t);
    Yr.test(n) ? e.setProperty(
      qt(r),
      n.replace(Yr, ""),
      "important"
    ) : e[r] = n;
  }
}
const xa = ["Webkit", "Moz", "ms"], vo = {};
function yp(e, t) {
  const n = vo[t];
  if (n)
    return n;
  let r = qe(t);
  if (r !== "filter" && r in e)
    return vo[t] = r;
  r = $s(r);
  for (let s = 0; s < xa.length; s++) {
    const o = xa[s] + r;
    if (o in e)
      return vo[t] = o;
  }
  return t;
}
function bp(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ve(r) && n === r;
}
const ka = "http://www.w3.org/1999/xlink";
function Ma(e, t, n, r, s, o = Ed(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ka, t.slice(6, t.length)) : e.setAttributeNS(ka, t, n) : n == null || o && !uc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ct(n) ? String(n) : n
  );
}
function Da(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Su(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
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
    a === "boolean" ? n = uc(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function $t(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ep(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fa = /* @__PURE__ */ Symbol("_vei");
function Sp(e, t, n, r, s = null) {
  const o = e[Fa] || (e[Fa] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = Ap(t);
    if (r) {
      const u = o[t] = Cp(
        r,
        s
      );
      $t(e, a, u, l);
    } else i && (Ep(e, a, i, l), o[t] = void 0);
  }
}
const vp = /(Once|Passive|Capture)$/, wp = /^on:?(?:Once|Passive|Capture)$/;
function Ap(e) {
  let t, n;
  for (; (n = e.match(vp)) && !wp.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t];
}
let wo = 0;
const Tp = /* @__PURE__ */ Promise.resolve(), Op = () => wo || (Tp.then(() => wo = 0), wo = Date.now());
function Cp(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (J(s)) {
      const o = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        o.call(r), r._stopped = !0;
      };
      const i = s.slice(), a = [r];
      for (let l = 0; l < i.length && !r._stopped; l++) {
        const u = i[l];
        u && pt(
          u,
          t,
          5,
          a
        );
      }
    } else
      pt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Op(), n;
}
const Ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rp = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? pp(e, r, i) : t === "style" ? _p(e, n, r) : Ms(t) ? Ds(t) || Sp(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lp(e, t, r, i)) ? (Da(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ma(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Pp(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ve(r))) ? Da(e, qe(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ma(e, t, r, i));
};
function Lp(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ua(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ua(t) && ve(n) ? !1 : t in e;
}
function Pp(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = qe(t);
  return Array.isArray(n) ? n.some((s) => qe(s) === r) : Object.keys(n).some((s) => qe(s) === r);
}
const Ou = /* @__PURE__ */ new WeakMap(), Cu = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ Symbol("_moveCb"), $a = /* @__PURE__ */ Symbol("_enterCb"), Ip = (e) => (delete e.props.mode, e), Np = /* @__PURE__ */ Ip({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pe({}, wu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = hn(), r = Hc();
    let s, o;
    return Gc(() => {
      if (!s.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Fp(
        s[0].el,
        n.vnode.el,
        i
      )) {
        s = [];
        return;
      }
      s.forEach(kp), s.forEach(Mp);
      const a = s.filter(Dp);
      Jo(n.vnode.el), a.forEach((l) => {
        const u = l.el, c = u.style;
        At(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[Os] = (m) => {
          m && m.target !== u || (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Os] = null, Qt(u, i));
        };
        u.addEventListener("transitionend", f);
      }), s = [];
    }), () => {
      const i = /* @__PURE__ */ oe(e), a = Au(i);
      let l = i.tag || Ue;
      if (s = [], o)
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c.el && c.el instanceof Element && // Hidden v-show nodes have no previous layout box to animate from.
          !c.el[Ni] && (s.push(c), Pn(
            c,
            wr(
              c,
              a,
              r,
              n
            )
          ), Ou.set(c, Ru(c.el)));
        }
      o = t.default ? Ti(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const c = o[u];
        c.key != null && Pn(
          c,
          wr(c, a, r, n)
        );
      }
      return Ie(l, null, o);
    };
  }
}), xp = Np;
function kp(e) {
  const t = e.el;
  t[Os] && t[Os](), t[$a] && t[$a]();
}
function Mp(e) {
  Cu.set(e, Ru(e.el));
}
function Dp(e) {
  const t = Ou.get(e), n = Cu.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const o = e.el, i = o.style, a = o.getBoundingClientRect();
    let l = 1, u = 1;
    return o.offsetWidth && (l = a.width / o.offsetWidth), o.offsetHeight && (u = a.height / o.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${r / l}px,${s / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Ru(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function Fp(e, t, n) {
  const r = e.cloneNode(), s = e[Kn];
  s && s.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: i } = Tu(r);
  return o.removeChild(r), i;
}
const fn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => os(t, n) : t;
};
function Up(e) {
  e.target.composing = !0;
}
function Va(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const at = /* @__PURE__ */ Symbol("_assign"), Jr = /* @__PURE__ */ Symbol("_initialValue");
function Ao(e, t, n) {
  return t && (e = e.trim()), n && (e = Vs(e)), e;
}
const Ha = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[Jr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Jr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[at] = fn(s);
    const o = r || s.props && s.props.type === "number";
    $t(e, t ? "change" : "input", (i) => {
      i.target.composing || e[at](Ao(e.value, n, o));
    }), (n || o) && $t(e, "change", () => {
      e.value = Ao(e.value, n, o);
    }), t || ($t(e, "compositionstart", Up), $t(e, "compositionend", Va), $t(e, "change", Va));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", o = e[Jr];
    delete e[Jr], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[at](Ao(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[at] = fn(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Vs(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l);
  }
}, $p = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[at] = fn(n), $t(e, "change", () => {
      const r = e._modelValue, s = zn(e), o = e.checked, i = e[at];
      if (J(r)) {
        const a = pi(r, s), l = a !== -1;
        if (o && !l)
          i(r.concat(s));
        else if (!o && l) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (Bt(r)) {
        const a = new Set(r);
        o ? a.add(s) : a.delete(s), i(a);
      } else
        i(Lu(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ja,
  beforeUpdate(e, t, n) {
    e[at] = fn(n), ja(e, t, n);
  }
};
function ja(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let s;
  if (J(t))
    s = pi(t, r.props.value) > -1;
  else if (Bt(t))
    s = t.has(r.props.value);
  else {
    if (t === n) return;
    s = bt(t, Lu(e, !0));
  }
  e.checked !== s && (e.checked = s);
}
const Vp = {
  created(e, { value: t }, n) {
    e.checked = bt(t, n.props.value), e[at] = fn(n), $t(e, "change", () => {
      e[at](zn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[at] = fn(r), t !== n && (e.checked = bt(t, r.props.value));
  }
}, Hp = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, $t(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Vs(zn(l)) : zn(l)
      ), o = e.multiple, i = o ? Bt(e._modelValue) ? new Set(s) : s : s[0], a = e._pendingValue = [
        o,
        o ? J(i) ? s.slice() : s : i
      ];
      try {
        e[at](i);
      } finally {
        wi(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[at] = fn(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wa(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[at] = fn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !jp(t, n[1], n[0])) && Wa(e, t);
  }
};
function jp(e, t, n) {
  if (!n || J(e)) return bt(e, t);
  if (Bt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Wa(e, t) {
  const n = e.multiple, r = J(t);
  if (!(n && !r && !Bt(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s], a = zn(i);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = pi(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (bt(zn(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function zn(e) {
  return "_value" in e ? e._value : e.value;
}
function Lu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const O5 = {
  created(e, t, n) {
    Xr(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Xr(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Xr(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Xr(e, t, n, r, "updated");
  }
};
function Wp(e, t) {
  switch (e) {
    case "SELECT":
      return Hp;
    case "TEXTAREA":
      return Ha;
    default:
      switch (t) {
        case "checkbox":
          return $p;
        case "radio":
          return Vp;
        default:
          return Ha;
      }
  }
}
function Xr(e, t, n, r, s) {
  const i = Wp(
    e.tagName,
    n.props && n.props.type
  )[s];
  i && i(e, t, n, r);
}
const Bp = ["ctrl", "shift", "alt", "meta"], Kp = {
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
  exact: (e, t) => Bp.some((n) => e[`${n}Key`] && !t.includes(n))
}, C5 = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = Kp[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  }));
}, zp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, R5 = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((s) => {
    if (!("key" in s))
      return;
    const o = qt(s.key);
    if (t.some(
      (i) => i === o || zp[i] === o
    ))
      return e(s);
  }));
}, qp = /* @__PURE__ */ Pe({ patchProp: Rp }, up);
let Ba;
function Gp() {
  return Ba || (Ba = Wh(qp));
}
const Yp = ((...e) => {
  const t = Gp().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Xp(r);
    if (!s) return;
    const o = t._component;
    !ee(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Jp(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function Jp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xp(e) {
  return ve(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Pu;
const Zs = (e) => Pu = e, Iu = (
  /* istanbul ignore next */
  Symbol()
);
function Xo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var mr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(mr || (mr = {}));
function Qp() {
  const e = mi(!0), t = e.run(() => /* @__PURE__ */ de({}));
  let n = [], r = [];
  const s = vi({
    install(o) {
      Zs(s), s._a = o, o.provide(Iu, s), o.config.globalProperties.$pinia = s, r.forEach((i) => n.push(i)), r = [];
    },
    use(o) {
      return this._a ? n.push(o) : r.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return s;
}
const Nu = () => {
};
function Ka(e, t, n, r = Nu) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && gi() && pc(s), s;
}
function Dn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Zp = (e) => e(), za = Symbol(), To = Symbol();
function Qo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], s = e[n];
    Xo(s) && Xo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ Oe(r) && !/* @__PURE__ */ Lt(r) ? e[n] = Qo(s, r) : e[n] = r;
  }
  return e;
}
const em = (
  /* istanbul ignore next */
  Symbol()
);
function tm(e) {
  return !Xo(e) || !e.hasOwnProperty(em);
}
const { assign: Zt } = Object;
function nm(e) {
  return !!(/* @__PURE__ */ Oe(e) && e.effect);
}
function rm(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t, a = n.state.value[e];
  let l;
  function u() {
    a || (n.state.value[e] = s ? s() : {});
    const c = /* @__PURE__ */ Kd(n.state.value[e]);
    return Zt(c, o, Object.keys(i || {}).reduce((f, m) => (f[m] = vi(Re(() => {
      Zs(n);
      const E = n._s.get(e);
      return i[m].call(E, E);
    })), f), {}));
  }
  return l = xu(e, u, t, n, r, !0), l;
}
function xu(e, t, n = {}, r, s, o) {
  let i;
  const a = Zt({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], m = [], E;
  const A = r.state.value[e];
  !o && !A && (r.state.value[e] = {});
  let T;
  function P(V) {
    let N;
    u = c = !1, typeof V == "function" ? (V(r.state.value[e]), N = {
      type: mr.patchFunction,
      storeId: e,
      events: E
    }) : (Qo(r.state.value[e], V), N = {
      type: mr.patchObject,
      payload: V,
      storeId: e,
      events: E
    });
    const j = T = Symbol();
    wi().then(() => {
      T === j && (u = !0);
    }), c = !0, Dn(f, N, r.state.value[e]);
  }
  const p = o ? function() {
    const { state: N } = n, j = N ? N() : {};
    this.$patch((z) => {
      Zt(z, j);
    });
  } : (
    /* istanbul ignore next */
    Nu
  );
  function y() {
    i.stop(), f = [], m = [], r._s.delete(e);
  }
  const R = (V, N = "") => {
    if (za in V)
      return V[To] = N, V;
    const j = function() {
      Zs(r);
      const z = Array.from(arguments), U = [], X = [];
      function te(F) {
        U.push(F);
      }
      function _e(F) {
        X.push(F);
      }
      Dn(m, {
        args: z,
        name: j[To],
        store: I,
        after: te,
        onError: _e
      });
      let Z;
      try {
        Z = V.apply(this && this.$id === e ? this : I, z);
      } catch (F) {
        throw Dn(X, F), F;
      }
      return Z instanceof Promise ? Z.then((F) => (Dn(U, F), F)).catch((F) => (Dn(X, F), Promise.reject(F))) : (Dn(U, Z), Z);
    };
    return j[za] = !0, j[To] = N, j;
  }, b = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ka.bind(null, m),
    $patch: P,
    $reset: p,
    $subscribe(V, N = {}) {
      const j = Ka(f, V, N.detached, () => z()), z = i.run(() => an(() => r.state.value[e], (U) => {
        (N.flush === "sync" ? c : u) && V({
          storeId: e,
          type: mr.direct,
          events: E
        }, U);
      }, Zt({}, l, N)));
      return j;
    },
    $dispose: y
  }, I = /* @__PURE__ */ Fr(b);
  r._s.set(e, I);
  const C = (r._a && r._a.runWithContext || Zp)(() => r._e.run(() => (i = mi()).run(() => t({ action: R }))));
  for (const V in C) {
    const N = C[V];
    if (/* @__PURE__ */ Oe(N) && !nm(N) || /* @__PURE__ */ Lt(N))
      o || (A && tm(N) && (/* @__PURE__ */ Oe(N) ? N.value = A[V] : Qo(N, A[V])), r.state.value[e][V] = N);
    else if (typeof N == "function") {
      const j = R(N, V);
      C[V] = j, a.actions[V] = N;
    }
  }
  return Zt(I, C), Zt(/* @__PURE__ */ oe(I), C), Object.defineProperty(I, "$state", {
    get: () => r.state.value[e],
    set: (V) => {
      P((N) => {
        Zt(N, V);
      });
    }
  }), r._p.forEach((V) => {
    Zt(I, i.run(() => V({
      store: I,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), A && o && n.hydrate && n.hydrate(I.$state, A), u = !0, c = !0, I;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ku(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  typeof e == "string" ? (r = e, s = o ? n : t) : (s = e, r = e.id);
  function i(a, l) {
    const u = nh();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? yt(Iu, null) : null), a && Zs(a), a = Pu, a._s.has(r) || (o ? xu(r, t, s, a) : rm(r, s, a)), a._s.get(r);
  }
  return i.$id = r, i;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const sm = () => {
}, Cs = Array.isArray;
function qa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function om(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!im(e[n], t[n])) return !1;
  return !0;
}
function im(e, t) {
  return Cs(e) ? Ga(e, t) : Cs(t) ? Ga(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Ga(e, t) {
  return Cs(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
const eo = Symbol(""), xi = Symbol("");
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function Ya(e) {
  const t = yt(eo), n = yt(xi), r = Re(() => {
    const l = dr(e.to);
    return t.resolve(l);
  }), s = Re(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const m = f.findIndex(qa.bind(null, c));
    if (m > -1) return m;
    const E = Ja(l[u - 2]);
    return u > 1 && Ja(c) === E && f[f.length - 1].path !== E ? f.findIndex(qa.bind(null, l[u - 2])) : m;
  }), o = Re(() => s.value > -1 && fm(n.params, r.value.params)), i = Re(() => s.value > -1 && s.value === n.matched.length - 1 && om(n.params, r.value.params));
  function a(l = {}) {
    if (um(l)) {
      const u = t[dr(e.replace) ? "replace" : "push"](dr(e.to)).catch(sm);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: Re(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function am(e) {
  return e.length === 1 ? e[0] : e;
}
const lm = /* @__PURE__ */ kn({
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
  useLink: Ya,
  setup(e, { slots: t }) {
    const n = /* @__PURE__ */ Fr(Ya(e)), { options: r } = yt(eo), s = Re(() => ({
      [Xa(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [Xa(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && am(t.default(n));
      return e.custom ? o : un("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), cm = lm;
function um(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fm(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Cs(s) || s.length !== r.length || r.some((o, i) => o.valueOf() !== s[i].valueOf())) return !1;
  }
  return !0;
}
function Ja(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Xa = (e, t, n) => e ?? t ?? n;
function L5() {
  return yt(eo);
}
function P5(e) {
  return yt(xi);
}
const dm = ["stroke-width"], hm = ["d"], Qa = /* @__PURE__ */ kn({
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
    }, r = Re(() => n[t.name]), s = Re(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (o, i) => (Ut(), ar("svg", {
      class: rn(s.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      gt("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, hm)
    ], 10, dm));
  }
});
/*!
  * shared v11.4.14
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
const Rs = typeof window < "u", pn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), pm = (e, t, n) => mm({ l: e, k: t, s: n }), mm = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ne = (e) => typeof e == "number" && isFinite(e), Mu = (e) => Mi(e) === "[object Date]", qn = (e) => Mi(e) === "[object RegExp]", ki = (e) => ye(e) && Object.keys(e).length === 0, xe = Object.assign, gm = Object.create, ge = (e = null) => gm(e);
let Za;
const sn = () => Za || (Za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ge()), _m = Object.prototype.hasOwnProperty;
function dt(e, t) {
  return _m.call(e, t);
}
function kt(e, t) {
  const n = e[t];
  return dt(e, t) ? n : void 0;
}
function ym(e) {
  return dt(Object.prototype, e);
}
const Se = Array.isArray, we = (e) => typeof e == "function", Y = (e) => typeof e == "string", ce = (e) => typeof e == "boolean", ie = (e) => e !== null && typeof e == "object", bm = (e) => ie(e) && we(e.then) && we(e.catch), Du = Object.prototype.toString, Mi = (e) => Du.call(e), ye = (e) => Mi(e) === "[object Object]", Em = (e) => e == null ? "" : Se(e) || ye(e) && e.toString === Du ? JSON.stringify(e, null, 2) : String(e);
function Di(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
function Sm(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
function el(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function vm(e) {
  return e.replace(/&(?![a-z0-9#]{2,6};)/gi, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const wm = /^javascript:/i, Am = /^(?:href|src|action|formaction)$/i, Tm = /&#(?:x([0-9a-f]+)|(\d+));?/gi, Om = /&(?:Tab|NewLine);/g, Cm = /&colon;?/gi, Rm = /[\u0000-\u0020\u007f-\u009f]/g, Lm = /(?:^|[\s"'<>/])on\w+\s*=\s*["']?[^"'>]+["']?/i, Pm = /(^|[\s"'<>/])on(\w+\s*=)/gi, Im = /(?:^|[\s"'<>/])srcdoc\s*=/i, Nm = /(^|[\s"'<>/])s(rcdoc\s*=)/gi, xm = /(^|[\s"'<>/])((?:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi;
function km(e, t, n) {
  const r = t || n;
  if (!r)
    return e;
  const s = Number.parseInt(r, t ? 16 : 10);
  return s <= 127 ? String.fromCharCode(s) : e;
}
function Fi(e) {
  const t = e.replace(Tm, km).replace(Om, "").replace(Cm, ":").replace(Rm, "");
  return wm.test(t);
}
function Mm(e) {
  const t = /url\s*\(/gi;
  let n = "", r = 0, s;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s.index, i = t.lastIndex - 1;
    let a = i + 1, l = 1, u = null;
    for (; a < e.length; a++) {
      const m = e[a];
      if (u) {
        m === u && (u = null);
        continue;
      }
      if (m === '"' || m === "'")
        u = m;
      else if (m === "(")
        l++;
      else if (m === ")" && (l--, l === 0))
        break;
    }
    if (l !== 0)
      break;
    const c = e.slice(i + 1, a).trim(), f = c.startsWith('"') && c.endsWith('"') || c.startsWith("'") && c.endsWith("'") ? c.slice(1, -1).trim() : c;
    n += e.slice(r, o), n += Fi(f) ? "url(about:blank)" : e.slice(o, a + 1), r = a + 1;
  }
  return n + e.slice(r);
}
function tl(e, t) {
  if (Am.test(e) && Fi(t))
    return "about:blank";
  const n = e.toLowerCase() === "style" ? Mm(t) : t;
  return vm(n);
}
function Dm(e) {
  return e = e.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g, (t, n, r) => `${n}="${tl(n, r)}"`), e = e.replace(/([\w:-]+)\s*=\s*'([^']*)'/g, (t, n, r) => `${n}='${tl(n, r)}'`), Lm.test(e) && (e = e.replace(Pm, "$1&#111;n$2")), Im.test(e) && (e = e.replace(Nm, "$1&#115;$2")), e = e.replace(xm, (t, n, r, s) => Fi(s) ? `${n}${r}about:blank` : t), e;
}
const nl = (e) => !ie(e) || Se(e);
function ls(e, t) {
  if (nl(e) || nl(t) || t === Object.prototype)
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((o) => {
      if (o === "__proto__")
        return;
      const i = r[o];
      if (Se(i)) {
        const a = [];
        a.length = i.length, s[o] = a, n.push({ src: i, des: a });
      } else ie(i) ? ((!ie(s[o]) || Se(s[o])) && (s[o] = ge()), n.push({ src: i, des: s[o] })) : s[o] = i;
    });
  }
}
/*!
  * message-compiler v11.4.14
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fm(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Zo(e, t, n) {
  return { start: e, end: t };
}
const he = {
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
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, Um = 17;
function to(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n, i = e, a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a;
}
function $m(e) {
  throw e;
}
const vt = " ", Vm = "\r", We = `
`, Hm = "\u2028", jm = "\u2029";
function Wm(e) {
  const t = e;
  let n = 0, r = 1, s = 1, o = 0;
  const i = (C) => t[C] === Vm && t[C + 1] === We, a = (C) => t[C] === We, l = (C) => t[C] === jm, u = (C) => t[C] === Hm, c = (C) => i(C) || a(C) || l(C) || u(C), f = () => n, m = () => r, E = () => s, A = () => o, T = (C) => i(C) || l(C) || u(C) ? We : t[C], P = () => T(n), p = () => T(n + o);
  function y() {
    return o = 0, c(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function R() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function b() {
    n = 0, r = 1, s = 1, o = 0;
  }
  function I(C = 0) {
    o = C;
  }
  function $() {
    const C = n + o;
    for (; C !== n; )
      y();
    o = 0;
  }
  return {
    index: f,
    line: m,
    column: E,
    peekOffset: A,
    charAt: T,
    currentChar: P,
    currentPeek: p,
    next: y,
    peek: R,
    reset: b,
    resetPeek: I,
    skipToPeek: $
  };
}
const Nt = void 0, Bm = ".", rl = "'", Km = "tokenizer";
function zm(e, t = {}) {
  const n = t.location !== !1, r = Wm(e), s = () => r.index(), o = () => Fm(r.line(), r.column(), r.index()), i = o(), a = s(), l = {
    currentType: 13,
    offset: a,
    startLoc: i,
    endLoc: i,
    lastType: 13,
    lastOffset: a,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function f(d, h, v, ...w) {
    const W = u();
    if (h.column += v, h.offset += v, c) {
      const H = n ? Zo(W.startLoc, h) : null, K = to(d, H, {
        domain: Km,
        args: w
      });
      c(K);
    }
  }
  function m(d, h, v) {
    d.endLoc = o(), d.currentType = h;
    const w = { type: h };
    return n && (w.loc = Zo(d.startLoc, d.endLoc)), v != null && (w.value = v), w;
  }
  const E = (d) => m(
    d,
    13
    /* TokenTypes.EOF */
  );
  function A(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (f(he.EXPECTED_TOKEN, o(), 0, h), "");
  }
  function T(d) {
    let h = "";
    for (; d.currentPeek() === vt || d.currentPeek() === We; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function P(d) {
    const h = T(d);
    return d.skipToPeek(), h;
  }
  function p(d) {
    if (d === Nt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function y(d) {
    if (d === Nt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function R(d, h) {
    const { currentType: v } = h;
    if (v !== 2)
      return !1;
    T(d);
    const w = p(d.currentPeek());
    return d.resetPeek(), w;
  }
  function b(d, h) {
    const { currentType: v } = h;
    if (v !== 2)
      return !1;
    T(d);
    const w = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), W = y(w);
    return d.resetPeek(), W;
  }
  function I(d, h) {
    const { currentType: v } = h;
    if (v !== 2)
      return !1;
    T(d);
    const w = d.currentPeek() === rl;
    return d.resetPeek(), w;
  }
  function $(d, h) {
    const { currentType: v } = h;
    if (v !== 7)
      return !1;
    T(d);
    const w = d.currentPeek() === ".";
    return d.resetPeek(), w;
  }
  function C(d, h) {
    const { currentType: v } = h;
    if (v !== 8)
      return !1;
    T(d);
    const w = p(d.currentPeek());
    return d.resetPeek(), w;
  }
  function V(d, h) {
    const { currentType: v } = h;
    if (!(v === 7 || v === 11))
      return !1;
    T(d);
    const w = d.currentPeek() === ":";
    return d.resetPeek(), w;
  }
  function N(d, h) {
    const { currentType: v } = h;
    if (v !== 9)
      return !1;
    const w = () => {
      const H = d.currentPeek();
      return H === "{" ? p(d.peek()) : H === "@" || H === "|" || H === ":" || H === "." || H === vt || !H ? !1 : H === We ? (d.peek(), w()) : z(d, !1);
    }, W = w();
    return d.resetPeek(), W;
  }
  function j(d) {
    T(d);
    const h = d.currentPeek() === "|";
    return d.resetPeek(), h;
  }
  function z(d, h = !0) {
    const v = (W = !1, H = "") => {
      const K = d.currentPeek();
      return K === "{" || K === "@" || !K ? W : K === "|" ? !(H === vt || H === We) : K === vt ? (d.peek(), v(!0, vt)) : K === We ? (d.peek(), v(!0, We)) : !0;
    }, w = v();
    return h && d.resetPeek(), w;
  }
  function U(d, h) {
    const v = d.currentChar();
    return v === Nt ? Nt : h(v) ? (d.next(), v) : null;
  }
  function X(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function te(d) {
    return U(d, X);
  }
  function _e(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function Z(d) {
    return U(d, _e);
  }
  function F(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function q(d) {
    return U(d, F);
  }
  function fe(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function Ce(d) {
    return U(d, fe);
  }
  function le(d) {
    let h = "", v = "";
    for (; h = q(d); )
      v += h;
    return v;
  }
  function ne(d) {
    let h = "";
    for (; ; ) {
      const v = d.currentChar();
      if (v === "\\") {
        const w = d.peek();
        w === "{" || w === "}" || w === "@" || w === "|" || w === "\\" ? (h += v + w, d.next(), d.next()) : (d.resetPeek(), h += v, d.next());
      } else {
        if (v === "{" || v === "}" || v === "@" || v === "|" || !v)
          break;
        if (v === vt || v === We)
          if (z(d))
            h += v, d.next();
          else {
            if (j(d))
              break;
            h += v, d.next();
          }
        else
          h += v, d.next();
      }
    }
    return h;
  }
  function Ve(d) {
    P(d);
    let h = "", v = "";
    for (; h = Z(d); )
      v += h;
    const w = d.currentChar();
    if (w && w !== "}" && w !== Nt && w !== vt && w !== We && w !== "　") {
      const W = He(d);
      return f(he.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, v + W), v + W;
    }
    return d.currentChar() === Nt && f(he.UNTERMINATED_CLOSING_BRACE, o(), 0), v;
  }
  function et(d) {
    P(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${le(d)}`) : h += le(d), d.currentChar() === Nt && f(he.UNTERMINATED_CLOSING_BRACE, o(), 0), h;
  }
  function st(d) {
    return d !== rl && d !== We;
  }
  function tt(d) {
    P(d), A(d, "'");
    let h = "", v = "";
    for (; h = U(d, st); )
      h === "\\" ? v += re(d) : v += h;
    const w = d.currentChar();
    return w === We || w === Nt ? (f(he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), w === We && (d.next(), A(d, "'")), v) : (A(d, "'"), v);
  }
  function re(d) {
    const h = d.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return d.next(), `\\${h}`;
      case "u":
        return Te(d, h, 4);
      case "U":
        return Te(d, h, 6);
      default:
        return f(he.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, h), "";
    }
  }
  function Te(d, h, v) {
    A(d, h);
    let w = "";
    for (let W = 0; W < v; W++) {
      const H = Ce(d);
      if (!H) {
        f(he.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${h}${w}${d.currentChar()}`);
        break;
      }
      w += H;
    }
    return `\\${h}${w}`;
  }
  function Ye(d) {
    return d !== "{" && d !== "}" && d !== vt && d !== We;
  }
  function He(d) {
    P(d);
    let h = "", v = "";
    for (; h = U(d, Ye); )
      v += h;
    return v;
  }
  function Yt(d) {
    let h = "", v = "";
    for (; h = te(d); )
      v += h;
    return v;
  }
  function g(d) {
    const h = (v) => {
      const w = d.currentChar();
      return w === "{" || w === "@" || w === "|" || w === "(" || w === ")" || !w || w === vt ? v : (v += w, d.next(), h(v));
    };
    return h("");
  }
  function _(d) {
    P(d);
    const h = A(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return P(d), h;
  }
  function O(d, h) {
    let v = null;
    switch (d.currentChar()) {
      case "{":
        return h.braceNest >= 1 && f(he.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), d.next(), v = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), P(d), h.braceNest++, v;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && f(he.EMPTY_PLACEHOLDER, o(), 0), d.next(), v = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && P(d), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), v;
      case "@":
        return h.braceNest > 0 && f(he.UNTERMINATED_CLOSING_BRACE, o(), 0), v = M(d, h) || E(h), h.braceNest = 0, v;
      default: {
        let W = !0, H = !0, K = !0;
        if (j(d))
          return h.braceNest > 0 && f(he.UNTERMINATED_CLOSING_BRACE, o(), 0), v = m(h, 1, _(d)), h.braceNest = 0, h.inLinked = !1, v;
        if (h.braceNest > 0 && (h.currentType === 4 || h.currentType === 5 || h.currentType === 6))
          return f(he.UNTERMINATED_CLOSING_BRACE, o(), 0), h.braceNest = 0, x(d, h);
        if (W = R(d, h))
          return v = m(h, 4, Ve(d)), P(d), v;
        if (H = b(d, h))
          return v = m(h, 5, et(d)), P(d), v;
        if (K = I(d, h))
          return v = m(h, 6, tt(d)), P(d), v;
        if (!W && !H && !K)
          return v = m(h, 12, He(d)), f(he.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, v.value), P(d), v;
        break;
      }
    }
    return v;
  }
  function M(d, h) {
    const { currentType: v } = h;
    let w = null;
    const W = d.currentChar();
    switch ((v === 7 || v === 8 || v === 11 || v === 9) && (W === We || W === vt) && f(he.INVALID_LINKED_FORMAT, o(), 0), W) {
      case "@":
        return d.next(), w = m(
          h,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, w;
      case ".":
        return P(d), d.next(), m(
          h,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return P(d), d.next(), m(
          h,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return j(d) ? (w = m(h, 1, _(d)), h.braceNest = 0, h.inLinked = !1, w) : $(d, h) || V(d, h) ? (P(d), M(d, h)) : C(d, h) ? (P(d), m(h, 11, Yt(d))) : N(d, h) ? (P(d), W === "{" ? O(d, h) || w : m(h, 10, g(d))) : (v === 7 && f(he.INVALID_LINKED_FORMAT, o(), 0), h.braceNest = 0, h.inLinked = !1, x(d, h));
    }
  }
  function x(d, h) {
    let v = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return O(d, h) || E(h);
    if (h.inLinked)
      return M(d, h) || E(h);
    switch (d.currentChar()) {
      case "{":
        return O(d, h) || E(h);
      case "}":
        return f(he.UNBALANCED_CLOSING_BRACE, o(), 0), d.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(d, h) || E(h);
      default: {
        if (j(d))
          return v = m(h, 1, _(d)), h.braceNest = 0, h.inLinked = !1, v;
        if (z(d))
          return m(h, 0, ne(d));
        break;
      }
    }
    return v;
  }
  function k() {
    const { currentType: d, offset: h, startLoc: v, endLoc: w } = l;
    return l.lastType = d, l.lastOffset = h, l.lastStartLoc = v, l.lastEndLoc = w, l.offset = s(), l.startLoc = o(), r.currentChar() === Nt ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : x(r, l);
  }
  return {
    nextToken: k,
    currentOffset: s,
    currentPosition: o,
    context: u
  };
}
const qm = "parser", Gm = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Ym = /\\([\\@{}|])/g;
function Jm(e, t) {
  return t;
}
function Xm(e, t, n) {
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
function Qm(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, y, R, b, ...I) {
    const $ = p.currentPosition();
    if ($.offset += b, $.column += b, n) {
      const C = t ? Zo(R, $) : null, V = to(y, C, {
        domain: qm,
        args: I
      });
      n(V);
    }
  }
  function s(p, y, R) {
    const b = { type: p };
    return t && (b.start = y, b.end = y, b.loc = { start: R, end: R }), b;
  }
  function o(p, y, R, b) {
    t && (p.end = y, p.loc && (p.loc.end = R));
  }
  function i(p, y) {
    const R = p.context(), b = s(3, R.offset, R.startLoc);
    return b.value = y.replace(Ym, Jm), o(b, p.currentOffset(), p.currentPosition()), b;
  }
  function a(p, y) {
    const R = p.context(), { lastOffset: b, lastStartLoc: I } = R, $ = s(5, b, I);
    return $.index = parseInt(y, 10), p.nextToken(), o($, p.currentOffset(), p.currentPosition()), $;
  }
  function l(p, y) {
    const R = p.context(), { lastOffset: b, lastStartLoc: I } = R, $ = s(4, b, I);
    return $.key = y, p.nextToken(), o($, p.currentOffset(), p.currentPosition()), $;
  }
  function u(p, y) {
    const R = p.context(), { lastOffset: b, lastStartLoc: I } = R, $ = s(9, b, I);
    return $.value = y.replace(Gm, Xm), p.nextToken(), o($, p.currentOffset(), p.currentPosition()), $;
  }
  function c(p) {
    const y = p.nextToken(), R = p.context(), { lastOffset: b, lastStartLoc: I } = R, $ = s(8, b, I);
    return y.type !== 11 ? (r(p, he.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), $.value = "", o($, b, I), {
      nextConsumeToken: y,
      node: $
    }) : (y.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, wt(y)), $.value = y.value || "", o($, p.currentOffset(), p.currentPosition()), {
      node: $
    });
  }
  function f(p, y) {
    const R = p.context(), b = s(7, R.offset, R.startLoc);
    return b.value = y, o(b, p.currentOffset(), p.currentPosition()), b;
  }
  function m(p) {
    const y = p.context(), R = s(6, y.offset, y.startLoc);
    let b = p.nextToken();
    if (b.type === 8) {
      const I = c(p);
      R.modifier = I.node, b = I.nextConsumeToken || p.nextToken();
    }
    switch (b.type !== 9 && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
      case 10:
        b.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(b)), R.key = f(p, b.value || "");
        break;
      case 4:
        b.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(b)), R.key = l(p, b.value || "");
        break;
      case 5:
        b.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(b)), R.key = a(p, b.value || "");
        break;
      case 6:
        b.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(b)), R.key = u(p, b.value || "");
        break;
      default: {
        r(p, he.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const I = p.context(), $ = s(7, I.offset, I.startLoc);
        return $.value = "", o($, I.offset, I.startLoc), R.key = $, o(R, I.offset, I.startLoc), {
          nextConsumeToken: b,
          node: R
        };
      }
    }
    return o(R, p.currentOffset(), p.currentPosition()), {
      node: R
    };
  }
  function E(p) {
    const y = p.context(), R = y.currentType === 1 ? p.currentOffset() : y.offset, b = y.currentType === 1 ? y.endLoc : y.startLoc, I = s(2, R, b);
    I.items = [];
    let $ = null;
    do {
      const N = $ || p.nextToken();
      switch ($ = null, N.type) {
        case 0:
          N.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(N)), I.items.push(i(p, N.value || ""));
          break;
        case 5:
          N.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(N)), I.items.push(a(p, N.value || ""));
          break;
        case 4:
          N.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(N)), I.items.push(l(p, N.value || ""));
          break;
        case 6:
          N.value == null && r(p, he.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, wt(N)), I.items.push(u(p, N.value || ""));
          break;
        case 7: {
          const j = m(p);
          I.items.push(j.node), $ = j.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const C = y.currentType === 1 ? y.lastOffset : p.currentOffset(), V = y.currentType === 1 ? y.lastEndLoc : p.currentPosition();
    return o(I, C, V), I;
  }
  function A(p, y, R, b) {
    const I = p.context();
    let $ = b.items.length === 0;
    const C = s(1, y, R);
    C.cases = [], C.cases.push(b);
    do {
      const V = E(p);
      $ || ($ = V.items.length === 0), C.cases.push(V);
    } while (I.currentType !== 13);
    return $ && r(p, he.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), o(C, p.currentOffset(), p.currentPosition()), C;
  }
  function T(p) {
    const y = p.context(), { offset: R, startLoc: b } = y, I = E(p);
    return y.currentType === 13 ? I : A(p, R, b, I);
  }
  function P(p) {
    const y = zm(p, xe({}, e)), R = y.context(), b = s(0, R.offset, R.startLoc);
    return t && b.loc && (b.loc.source = p), b.body = T(y), e.onCacheKey && (b.cacheKey = e.onCacheKey(p)), R.currentType !== 13 && r(y, he.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, p[R.offset] || ""), o(b, y.currentOffset(), y.currentPosition()), b;
  }
  return { parse: P };
}
function wt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Zm(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function sl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ui(e[n], t);
}
function Ui(e, t) {
  switch (e.type) {
    case 1:
      sl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      sl(e.items, t);
      break;
    case 6: {
      Ui(e.key, t), t.helper(
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
function e0(e, t = {}) {
  const n = Zm(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ui(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function t0(e) {
  const t = e.body;
  return t.type === 2 ? ol(t) : t.cases.forEach((n) => ol(n)), e;
}
function ol(e) {
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
      e.static = Di(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Vn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Vn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Vn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Vn(n[r]);
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
      Vn(t.key), t.k = t.key, delete t.key, t.modifier && (Vn(t.modifier), t.m = t.modifier, delete t.modifier);
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
  }
  delete e.type;
}
function n0(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, o = t.location !== !1, i = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  o && e.loc && (i.source = e.loc.source);
  const a = () => i;
  function l(T, P) {
    i.code += T;
  }
  function u(T, P = !0) {
    const p = P ? r : "";
    l(s ? p + "  ".repeat(T) : p);
  }
  function c(T = !0) {
    const P = ++i.indentLevel;
    T && u(P);
  }
  function f(T = !0) {
    const P = --i.indentLevel;
    T && u(P);
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
function r0(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Gn(e, t.key), t.modifier ? (e.push(", "), Gn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function s0(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (Gn(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function o0(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (Gn(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function i0(e, t) {
  t.body ? Gn(e, t.body) : e.push("null");
}
function Gn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      i0(e, t);
      break;
    case 1:
      o0(e, t);
      break;
    case 2:
      s0(e, t);
      break;
    case 6:
      r0(e, t);
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
  }
}
const a0 = (e, t = {}) => {
  const n = Y(t.mode) ? t.mode : "normal", r = Y(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], a = n0(e, {
    filename: r,
    breakLineCode: s,
    needIndent: o
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(o), i.length > 0 && (a.push(`const { ${Di(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), a.newline()), a.push("return "), Gn(a, e), a.deindent(o), a.push("}"), delete e.helpers;
  const { code: l, map: u } = a.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function l0(e, t = {}) {
  const n = xe({}, t), r = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, a = Qm(n).parse(e);
  return r ? (o && t0(a), s && Vn(a), { ast: a, code: "" }) : (e0(a, n), a0(a, n));
}
/*!
  * core-base v11.4.14
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
function c0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (sn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (sn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Rn(e) {
  return ie(e) && $i(e) === 0 && (dt(e, "b") || dt(e, "body"));
}
const Fu = ["b", "body"];
function u0(e) {
  return mn(e, Fu);
}
const Uu = ["c", "cases"];
function f0(e) {
  return mn(e, Uu, []);
}
const $u = ["s", "static"];
function d0(e) {
  return mn(e, $u);
}
const Vu = ["i", "items"];
function h0(e) {
  return mn(e, Vu, []);
}
const Hu = ["t", "type"];
function $i(e) {
  return mn(e, Hu);
}
const ju = ["v", "value"];
function Qr(e, t) {
  const n = mn(e, ju);
  if (n != null)
    return n;
  throw Rr(t);
}
const Wu = ["m", "modifier"];
function p0(e) {
  return mn(e, Wu);
}
const Bu = ["k", "key"];
function m0(e) {
  const t = mn(e, Bu);
  if (t)
    return t;
  throw Rr(
    6
    /* NodeTypes.Linked */
  );
}
function mn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (dt(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Ku = [
  ...Fu,
  ...Uu,
  ...$u,
  ...Vu,
  ...Bu,
  ...Wu,
  ...ju,
  ...Hu
];
function Rr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Oo(e) {
  return (n) => g0(n, e);
}
function g0(e, t) {
  const n = u0(t);
  if (n == null)
    throw Rr(
      0
      /* NodeTypes.Resource */
    );
  if ($i(n) === 1) {
    const o = f0(n);
    return e.plural(o.reduce((i, a) => [
      ...i,
      il(e, a)
    ], []));
  } else
    return il(e, n);
}
function il(e, t) {
  const n = d0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = h0(t).reduce((s, o) => [...s, ei(e, o)], []);
    return e.normalize(r);
  }
}
function ei(e, t) {
  const n = $i(t);
  switch (n) {
    case 3:
      return Qr(t, n);
    case 9:
      return Qr(t, n);
    case 4: {
      const r = t;
      if (dt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (dt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Rr(n);
    }
    case 5: {
      const r = t;
      if (dt(r, "i") && Ne(r.i))
        return e.interpolate(e.list(r.i));
      if (dt(r, "index") && Ne(r.index))
        return e.interpolate(e.list(r.index));
      throw Rr(n);
    }
    case 6: {
      const r = t, s = p0(r), o = m0(r);
      return e.linked(ei(e, o), s ? ei(e, s) : void 0, e.type);
    }
    case 7:
      return Qr(t, n);
    case 8:
      return Qr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const _0 = (e) => e;
let Zr = ge();
function y0(e, t = {}) {
  let n = !1;
  const r = t.onError || $m;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...l0(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function b0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Y(e)) {
    ce(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || _0)(e), s = Zr[r];
    if (s)
      return s;
    const { ast: o, detectError: i } = y0(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Oo(o);
    return i ? a : Zr[r] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Zr[n];
      return r || (Zr[n] = Oo(e));
    } else
      return Oo(e);
  }
}
let Lr = null;
function E0(e) {
  Lr = e;
}
function S0(e, t, n) {
  Lr && Lr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const v0 = /* @__PURE__ */ w0("function:translate");
function w0(e) {
  return (t) => Lr && Lr.emit(e, t);
}
const Vt = {
  INVALID_ARGUMENT: Um,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, A0 = 24;
function Ht(e) {
  return to(e, null, void 0);
}
function Vi(e, t) {
  return t.locale != null ? al(t.locale) : al(e.locale);
}
let Co;
function al(e) {
  if (Y(e))
    return e;
  if (we(e)) {
    if (e.resolvedOnce && Co != null)
      return Co;
    if (e.constructor.name === "Function") {
      const t = e();
      if (bm(t))
        throw Ht(Vt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Co = t;
    } else
      throw Ht(Vt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ht(Vt.NOT_SUPPORT_LOCALE_TYPE);
}
function T0(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Se(t) ? t : ie(t) ? Object.keys(t).filter((r) => r !== "default") : Y(t) ? [t] : [n]
  ])];
}
function ti(e, t, n) {
  const r = Y(n) ? n : Pr, s = e;
  let o;
  ie(t) ? (s.__localeChainObjectCache || (s.__localeChainObjectCache = /* @__PURE__ */ new WeakMap()), o = s.__localeChainObjectCache.get(t), o || (o = /* @__PURE__ */ new Map(), s.__localeChainObjectCache.set(t, o))) : (s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map()), o = s.__localeChainCache.get(t), o || (o = /* @__PURE__ */ new Map(), s.__localeChainCache.set(t, o)));
  const i = o.get(r);
  if (i)
    return i;
  const a = [];
  let l = [n];
  for (; Se(l); )
    l = ll(a, l, t);
  const u = Se(t) || !ye(t) ? t : t.default ? t.default : null;
  return l = Y(u) ? [u] : u, Se(l) && ll(a, l, !1), o.set(r, a), a;
}
function ll(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ce(r); s++) {
    const o = t[s];
    Y(o) && (r = O0(e, t[s], n));
  }
  return r;
}
function O0(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const o = s.join("-");
    r = C0(e, o, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function C0(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Se(n) || ye(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const gn = [];
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
function L0(e) {
  return R0.test(e);
}
function P0(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function I0(e) {
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : L0(t) ? P0(t) : "*" + t;
}
function x0(e) {
  const t = [];
  let n = -1, r = 0, s = 0, o, i, a, l, u, c, f;
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
    ](), s++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, i === void 0 || (i = N0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function E() {
    const A = e[n + 1];
    if (r === 5 && A === "'" || r === 6 && A === '"')
      return n++, a = "\\" + A, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, o = e[n], !(o === "\\" && E())) {
      if (l = I0(o), f = gn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (a = o, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const cl = /* @__PURE__ */ new Map();
function k0(e, t) {
  return ie(e) ? e[t] : null;
}
function M0(e, t) {
  if (!ie(e))
    return null;
  let n = cl.get(t);
  if (n || (n = x0(t), n && cl.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, o = 0;
  for (; o < r; ) {
    const i = n[o];
    if (Ku.includes(i) && Rn(s) || !ie(s) || !dt(s, i))
      return null;
    const a = s[i];
    if (a === void 0 || we(s))
      return null;
    s = a, o++;
  }
  return s;
}
const D0 = "11.4.14", no = -1, Pr = "en-US", Ls = "", ul = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function F0() {
  return {
    upper: (e, t) => t === "text" && Y(e) ? e.toUpperCase() : t === "vnode" && ie(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Y(e) ? e.toLowerCase() : t === "vnode" && ie(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Y(e) ? ul(e) : t === "vnode" && ie(e) && "__v_isVNode" in e ? ul(e.children) : e
  };
}
let zu;
function U0(e) {
  zu = e;
}
let qu;
function $0(e) {
  qu = e;
}
let Gu;
function V0(e) {
  Gu = e;
}
let Yu = null;
const H0 = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Yu = e;
}, j0 = /* @__NO_SIDE_EFFECTS__ */ () => Yu;
let Ju = null;
const fl = (e) => {
  Ju = e;
}, W0 = () => Ju;
let dl = 0;
function B0(e = {}) {
  const t = we(e.onWarn) ? e.onWarn : Sm, n = Y(e.version) ? e.version : D0, r = Y(e.locale) || we(e.locale) ? e.locale : Pr, s = we(r) ? Pr : r, o = Se(e.fallbackLocale) || ye(e.fallbackLocale) || Y(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, i = ye(e.messages) ? e.messages : Ro(s), a = ye(e.datetimeFormats) ? e.datetimeFormats : Ro(s), l = ye(e.numberFormats) ? e.numberFormats : Ro(s), u = xe(ge(), e.modifiers, F0()), c = e.pluralRules || ge(), f = we(e.missing) ? e.missing : null, m = ce(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, E = ce(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, A = !!e.fallbackFormat, T = !!e.unresolving, P = we(e.postTranslation) ? e.postTranslation : null, p = ye(e.processor) ? e.processor : null, y = ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter, b = we(e.messageCompiler) ? e.messageCompiler : zu, I = we(e.messageResolver) ? e.messageResolver : qu || k0, $ = we(e.localeFallbacker) ? e.localeFallbacker : Gu || T0, C = ie(e.fallbackContext) ? e.fallbackContext : void 0, V = e, N = ie(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), j = ie(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), z = ie(V.__meta) ? V.__meta : {};
  dl++;
  const U = {
    version: n,
    cid: dl,
    locale: r,
    fallbackLocale: o,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: m,
    fallbackWarn: E,
    fallbackFormat: A,
    unresolving: T,
    postTranslation: P,
    processor: p,
    warnHtmlMessage: y,
    escapeParameter: R,
    messageCompiler: b,
    messageResolver: I,
    localeFallbacker: $,
    fallbackContext: C,
    onWarn: t,
    __meta: z
  };
  return U.datetimeFormats = a, U.numberFormats = l, U.__datetimeFormatters = N, U.__numberFormatters = j, __INTLIFY_PROD_DEVTOOLS__ && S0(U, n, z), U;
}
const Ro = (e) => ({ [e]: ge() });
function Xu(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const a = o(e, n, t, s);
    return Y(a) ? a : t;
  } else
    return t;
}
function hl(e, t) {
  var r, s;
  const n = e;
  ie(t) ? (r = n.__localeChainObjectCache) == null || r.delete(t) : (s = n.__localeChainCache) == null || s.delete(t);
}
function es(e, t, n) {
  hl(e, n), e.fallbackContext && hl(e.fallbackContext, n), e.localeFallbacker(e, n, t);
}
function K0(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function z0(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (K0(e, t[r]))
      return !0;
  return !1;
}
function Qu(e, t, n, r, s, o, i) {
  const { fallbackLocale: a, localeFallbacker: l, onWarn: u } = e, c = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    n
  );
  for (let f = 0; f < c.length; f++) {
    const m = c[f], E = (r[m] || {})[t];
    if (ye(E) && Y(m))
      return m;
    Xu(e, t, m, s, i);
  }
  return null;
}
function Zu(e, t, n) {
  let r = `${e}__${t}`;
  return ye(n) && !ki(n) && (r = `${r}__${JSON.stringify(n)}`), r;
}
function ef(e, t, n) {
  for (const r in n) {
    const s = `${t}__${r}`;
    for (const o of e.keys())
      (o === s || o.startsWith(`${s}__`)) && e.delete(o);
  }
}
function tf(e, t, n, r) {
  const [, s, o, i] = e;
  let a = n;
  return Y(s) ? t.key = s : ye(s) && Object.keys(s).forEach((l) => {
    r.includes(l) ? a[l] = s[l] : t[l] = s[l];
  }), Y(o) ? t.locale = o : ye(o) && (a = o), ye(i) && (a = i), a;
}
function pl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, onWarn: s } = e, { __datetimeFormatters: o } = e;
  if (!Y(t[0]) && !Mu(t[0]) && !Ne(t[0]))
    return Ls;
  const [i, a, l, u] = ni(...t), c = ce(l.missingWarn) ? l.missingWarn : e.missingWarn, f = ce(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, m = !!l.part, E = Vi(e, l);
  if (!Y(i) || i === "") {
    const y = new Intl.DateTimeFormat(E.replace(/!/g, ""), u);
    return m ? y.formatToParts(a) : y.format(a);
  }
  const A = Qu(e, i, E, n, c, f, "datetime format");
  if (!Y(A))
    return r ? no : i;
  const T = n[A][i], P = Zu(A, i, u);
  let p = o.get(P);
  return p || (p = new Intl.DateTimeFormat(A, xe({}, T, u)), o.set(P, p)), m ? p.formatToParts(a) : p.format(a);
}
const nf = [
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
function ni(...e) {
  const [t] = e, n = ge(), r = ge();
  let s;
  if (Y(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Ht(Vt.INVALID_ISO_DATE_ARGUMENT);
    const a = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    s = new Date(a);
    try {
      s.toISOString();
    } catch {
      throw Ht(Vt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Mu(t)) {
    if (isNaN(t.getTime()))
      throw Ht(Vt.INVALID_DATE_ARGUMENT);
    s = t;
  } else if (Ne(t))
    s = t;
  else
    throw Ht(Vt.INVALID_ARGUMENT);
  const o = tf(e, n, r, nf);
  return [n.key || "", s, n, o];
}
function ml(e, t, n) {
  ef(e.__datetimeFormatters, t, n);
}
function gl(e, ...t) {
  const { numberFormats: n, unresolving: r, onWarn: s } = e, { __numberFormatters: o } = e;
  if (!Ne(t[0]))
    return Ls;
  const [i, a, l, u] = ri(...t), c = ce(l.missingWarn) ? l.missingWarn : e.missingWarn, f = ce(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, m = !!l.part, E = Vi(e, l);
  if (!Y(i) || i === "") {
    const y = new Intl.NumberFormat(E.replace(/!/g, ""), u);
    return m ? y.formatToParts(a) : y.format(a);
  }
  const A = Qu(e, i, E, n, c, f, "number format");
  if (!Y(A))
    return r ? no : i;
  const T = n[A][i], P = Zu(A, i, u);
  let p = o.get(P);
  return p || (p = new Intl.NumberFormat(A, xe({}, T, u)), o.set(P, p)), m ? p.formatToParts(a) : p.format(a);
}
const rf = [
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
function ri(...e) {
  const [t] = e, n = ge(), r = ge();
  if (!Ne(t))
    throw Ht(Vt.INVALID_ARGUMENT);
  const s = t, o = tf(e, n, r, rf);
  return [n.key || "", s, n, o];
}
function _l(e, t, n) {
  ef(e.__numberFormatters, t, n);
}
const q0 = (e) => e, G0 = (e) => "", Y0 = "text", J0 = (e) => e.length === 0 ? "" : Di(e), X0 = Em;
function Lo(e, t) {
  return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Q0(e) {
  var n, r;
  const t = Ne(e.pluralIndex) ? e.pluralIndex : -1;
  return Ne((n = e.named) == null ? void 0 : n.count) ? e.named.count : Ne((r = e.named) == null ? void 0 : r.n) ? e.named.n : t;
}
function Z0(e = {}) {
  var p, y, R, b;
  const t = e.locale, n = Q0(e), r = Y(t) && we((p = e.pluralRules) == null ? void 0 : p[t]) ? e.pluralRules[t] : Lo, s = r === Lo ? void 0 : Lo, o = (I) => I[r(n, I.length, s)], i = e.list || [], a = (I) => i[I], l = e.named || ge();
  Ne(e.pluralIndex) && (l.count || (l.count = e.pluralIndex), l.n || (l.n = e.pluralIndex));
  const u = (I) => l[I];
  function c(I, $) {
    const C = we(e.messages) ? e.messages(I, !!$) : ie(e.messages) ? e.messages[I] : !1;
    return C || (e.parent ? e.parent.message(I) : G0);
  }
  const f = (I) => e.modifiers ? e.modifiers[I] : q0, m = we((y = e.processor) == null ? void 0 : y.normalize) ? e.processor.normalize : J0, E = we((R = e.processor) == null ? void 0 : R.interpolate) ? e.processor.interpolate : X0, A = Y((b = e.processor) == null ? void 0 : b.type) ? e.processor.type : Y0, P = {
    list: a,
    named: u,
    plural: o,
    linked: (I, ...$) => {
      const [C, V] = $;
      let N = "text", j = "";
      $.length === 1 ? ie(C) ? (j = C.modifier || j, N = C.type || N) : Y(C) && (j = C || j) : $.length === 2 && (Y(C) && (j = C || j), Y(V) && (N = V || N));
      const z = c(I, !0)(P), U = z === "" || z === void 0 ? I : z, X = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && Se(U) && j ? U[0] : U
      );
      return j ? f(j)(X, N) : X;
    },
    message: c,
    type: A,
    interpolate: E,
    normalize: m,
    values: xe(ge(), i, l)
  };
  return P;
}
const yl = () => "", jt = (e) => we(e), Ps = (e) => Y(e) || Rn(e) || jt(e);
function bl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: o, fallbackLocale: i, messages: a } = e, [l, u] = si(...t), c = ce(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ce(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, E = !!u.resolvedMessage, A = Y(u.default) || ce(u.default) ? ce(u.default) ? o ? l : () => l : u.default : n ? o ? l : () => l : null, T = n || A != null && (Y(A) || we(A)), P = Vi(e, u);
  m && e1(u);
  let [p, y, R] = E ? [
    l,
    P,
    a[P] || ge()
  ] : sf(e, l, P, i, f, c), b = p, I = l;
  if (!E && !Ps(b) && T && (b = A, I = b), !E && (!Ps(b) || !Y(y)))
    return s ? no : l;
  let $ = !1;
  const C = () => {
    $ = !0;
  }, V = jt(b) ? b : of(e, l, y, b, I, C);
  if ($)
    return b;
  const N = r1(e, y, R, u), j = Z0(N), z = t1(e, V, j);
  let U = r ? r(z, l) : z;
  if (m && Y(U) && (U = Dm(U)), __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: Y(l) ? l : jt(b) ? b.key : "",
      locale: y || (jt(b) ? b.locale : ""),
      format: Y(b) ? b : jt(b) ? b.source : "",
      message: U
    };
    X.meta = xe({}, e.__meta, /* @__PURE__ */ j0() || {}), v0(X);
  }
  return U;
}
function e1(e) {
  if (Se(e.list) && (e.list = e.list.map((t) => Y(t) ? el(t) : t)), ie(e.named)) {
    const t = e.named, n = ge();
    for (const r of Object.keys(t)) {
      const s = t[r];
      n[r] = Y(s) ? el(s) : s;
    }
    e.named = n;
  }
}
function sf(e, t, n, r, s, o) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = ge(), m, E = null;
  const A = "translate";
  for (let T = 0; T < c.length && (m = c[T], f = i[m] || ge(), (E = l(f, t)) === null && (E = f[t]), !Ps(E)); T++)
    if (!z0(m, c)) {
      const P = Xu(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        o,
        A
      );
      P !== t && (E = P);
    }
  return [E, m, f];
}
function of(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (jt(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (i == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = i(r, n1(e, n, s, r, a, o));
  return l.locale = n, l.key = t, l.source = r, l;
}
function t1(e, t, n) {
  return t(n);
}
function si(...e) {
  const [t, n, r] = e, s = ge();
  if (!Y(t) && !Ne(t) && !jt(t) && !Rn(t))
    throw Ht(Vt.INVALID_ARGUMENT);
  const o = Ne(t) ? String(t) : (jt(t), t);
  return Ne(n) ? s.plural = n : Y(n) ? s.default = n : ye(n) && !ki(n) ? s.named = n : Se(n) && (s.list = n), Ne(r) ? s.plural = r : Y(r) ? s.default = r : ye(r) && xe(s, r), [o, s];
}
function n1(e, t, n, r, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (i) => {
      throw o && o(i), i;
    },
    onCacheKey: (i) => pm(t, n, i)
  };
}
function r1(e, t, n, r) {
  const { modifiers: s, pluralRules: o, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (E, A) => {
      let T = i(n, E);
      if (T == null && (c || A)) {
        const [P, , p] = sf(
          c || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          E,
          t,
          a,
          l,
          u
        );
        T = P ?? i(p, E);
      }
      if (Y(T) || Rn(T)) {
        let P = !1;
        const y = of(e, E, t, T, E, () => {
          P = !0;
        });
        return P ? yl : y;
      } else return jt(T) ? T : yl;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ne(r.plural) && (m.pluralIndex = r.plural), m;
}
c0();
/*!
  * vue-i18n v11.4.14
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
const s1 = "11.4.14";
function o1() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (sn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (sn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (sn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (sn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Ze = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: A0,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function nt(e, ...t) {
  return to(e, null, void 0);
}
const oi = /* @__PURE__ */ pn("__translateVNode"), ii = /* @__PURE__ */ pn("__datetimeParts"), ai = /* @__PURE__ */ pn("__numberParts"), af = pn("__setPluralRules"), lf = /* @__PURE__ */ pn("__injectWithOption"), Hn = /* @__PURE__ */ pn("__dispose");
let cf = null;
{
  const e = sn().__VUE_INSTANCE_SETTERS__;
  Se(e) && e.push((t) => {
    cf = t;
  });
}
function tn(e) {
  return !!ym(e);
}
function Ir(e) {
  if (!ie(e) || Rn(e))
    return e;
  for (const t in e)
    if (dt(e, t))
      if (!t.includes("."))
        ie(e[t]) && Ir(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, o = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in s || (s[n[i]] = ge()), !ie(s[n[i]])) {
            o = !0;
            break;
          }
          s = s[n[i]];
        }
        if (o || (Rn(s) ? Ku.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Rn(s)) {
          const i = s[n[r]];
          ie(i) && Ir(i);
        }
      }
  return e;
}
function Hi(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t, i = ye(n) ? n : Se(r) ? ge() : { [e]: ge() };
  if (Se(r) && r.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      if (l) {
        if (tn(l))
          return;
        i[l] = kt(i, l) || ge(), ls(u, i[l]);
      } else
        ls(u, i);
    } else
      Y(a) && ls(JSON.parse(a), i);
  }), s == null && o)
    for (const a in i)
      dt(i, a) && Ir(i[a]);
  return i;
}
function uf(e) {
  return e.type;
}
function ff(e, t, n) {
  let r = ie(t.messages) ? t.messages : ge();
  "__i18nGlobal" in n && (r = Hi(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, r[o]);
  });
  {
    if (ie(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (ie(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function El(e) {
  return Ie($r, null, e, 0);
}
function Nr() {
  return cf ?? hn();
}
const Sl = "__INTLIFY_META__", vl = () => [], i1 = () => !1;
let wl = 0;
function Al(e) {
  return ((t, n, r, s) => e(n, r, Nr() || void 0, s));
}
const a1 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Nr();
  let t = null;
  return e && (t = uf(e)[Sl]) ? { [Sl]: t } : null;
};
function Is(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, o = Rs ? de : Pc;
  let i = ce(e.inheritLocale) ? e.inheritLocale : !0;
  const a = o(
    // prettier-ignore
    t && i ? t.locale.value : Y(e.locale) ? e.locale : Pr
  ), l = o(
    // prettier-ignore
    t && i ? t.fallbackLocale.value : Y(e.fallbackLocale) || Se(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), u = o(Hi(a.value, e)), c = o(ye(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), f = o(ye(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let m = t ? t.missingWarn : ce(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, E = t ? t.fallbackWarn : ce(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, A = t ? t.fallbackRoot : ce(e.fallbackRoot) ? e.fallbackRoot : !0, T = !!e.fallbackFormat, P = we(e.missing) ? e.missing : null, p = we(e.missing) ? Al(e.missing) : null, y = we(e.postTranslation) ? e.postTranslation : null, R = t ? t.warnHtmlMessage : ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const I = t ? t.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let $ = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    r && fl(null);
    const L = {
      version: s1,
      locale: a.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: I,
      pluralRules: $,
      missing: p === null ? void 0 : p,
      missingWarn: m,
      fallbackWarn: E,
      fallbackFormat: T,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: R,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = c.value, L.numberFormats = f.value;
    const D = B0(L);
    return r && fl(D), D;
  })(), es(C, a.value, l.value);
  function N() {
    return [
      a.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const j = Re({
    get: () => a.value,
    set: (L) => {
      C.locale = L, a.value = L;
    }
  });
  function z(L) {
    r || (C.fallbackContext = W0());
    try {
      return L();
    } finally {
      r || (C.fallbackContext = void 0);
    }
  }
  function U(L) {
    z(() => es(C, a.value, L));
  }
  const X = Re({
    get: () => l.value,
    set: (L) => {
      l.value = L, C.fallbackLocale = l.value, U(l.value);
    }
  }), te = Re(() => u.value), _e = /* @__PURE__ */ Re(() => c.value), Z = /* @__PURE__ */ Re(() => f.value);
  function F() {
    return we(y) ? y : null;
  }
  function q(L) {
    y = L, C.postTranslation = L;
  }
  function fe() {
    return P;
  }
  function Ce(L) {
    L !== null && (p = Al(L)), P = L, C.missing = p;
  }
  const le = (L, D, Q, se, Ee, Me) => {
    N();
    let Le;
    try {
      __INTLIFY_PROD_DEVTOOLS__, Le = z(() => L(C));
    } finally {
      __INTLIFY_PROD_DEVTOOLS__;
    }
    if (Q !== "translate exists" && // for not `te` (e.g `t`)
    Ne(Le) && Le === no || Q === "translate exists" && !Le) {
      const [_n, fo] = D();
      return t && A ? se(t) : Ee(_n);
    } else {
      if (Me(Le))
        return Le;
      throw nt(Ze.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ne(...L) {
    return le((D) => Reflect.apply(bl, null, [D, ...L]), () => si(...L), "translate", (D) => Reflect.apply(D.t, D, [...L]), (D) => D, (D) => Y(D));
  }
  function Ve(...L) {
    const [D, Q, se] = L;
    if (se && !ie(se))
      throw nt(Ze.INVALID_ARGUMENT);
    return ne(D, Q, xe({ resolvedMessage: !0 }, se || {}));
  }
  function et(...L) {
    return le((D) => Reflect.apply(pl, null, [D, ...L]), () => ni(...L), "datetime format", (D) => Reflect.apply(D.d, D, [...L]), () => Ls, (D) => Y(D) || Se(D));
  }
  function st(...L) {
    return le((D) => Reflect.apply(gl, null, [D, ...L]), () => ri(...L), "number format", (D) => Reflect.apply(D.n, D, [...L]), () => Ls, (D) => Y(D) || Se(D));
  }
  function tt(L) {
    return L.map((D) => Y(D) || Ne(D) || ce(D) ? El(String(D)) : D);
  }
  const Te = {
    normalize: tt,
    interpolate: (L) => L,
    type: "vnode"
  };
  function Ye(...L) {
    return le((D) => {
      let Q;
      const se = D;
      try {
        se.processor = Te, Q = Reflect.apply(bl, null, [se, ...L]);
      } finally {
        se.processor = null;
      }
      return Q;
    }, () => si(...L), "translate", (D) => D[oi](...L), (D) => [El(D)], (D) => Se(D));
  }
  function He(...L) {
    return le((D) => Reflect.apply(gl, null, [D, ...L]), () => ri(...L), "number format", (D) => D[ai](...L), vl, (D) => Y(D) || Se(D));
  }
  function Yt(...L) {
    return le((D) => Reflect.apply(pl, null, [D, ...L]), () => ni(...L), "datetime format", (D) => D[ii](...L), vl, (D) => Y(D) || Se(D));
  }
  function g(L) {
    $ = L, C.pluralRules = $;
  }
  function _(L, D) {
    return le(() => {
      if (!L)
        return !1;
      const Q = Y(D) ? D : a.value, se = Y(D) ? [Q] : ti(C, l.value, Q);
      for (let Ee = 0; Ee < se.length; Ee++) {
        const Me = x(se[Ee]);
        let Le = C.messageResolver(Me, L);
        if (Le === null && (Le = Me[L]), Ps(Le))
          return !0;
      }
      return !1;
    }, () => [L], "translate exists", (Q) => Reflect.apply(Q.te, Q, [L, D]), i1, (Q) => ce(Q));
  }
  function O(L) {
    let D = null;
    const Q = ti(C, l.value, a.value);
    for (let se = 0; se < Q.length; se++) {
      const Ee = kt(u.value, Q[se]) || {}, Me = C.messageResolver(Ee, L);
      if (Me != null) {
        D = Me;
        break;
      }
    }
    return D;
  }
  function M(L) {
    const D = O(L);
    return D ?? (t ? t.tm(L) || {} : {});
  }
  function x(L) {
    return kt(u.value, L) || {};
  }
  function k(L, D) {
    tn(L) || (s && Ir(D), u.value[L] = D, C.messages = u.value);
  }
  function d(L, D) {
    tn(L) || (u.value[L] = kt(u.value, L) || {}, s && Ir(D), ls(D, u.value[L]), C.messages = u.value);
  }
  function h(L) {
    return kt(c.value, L) || {};
  }
  function v(L, D) {
    tn(L) || (c.value[L] = D, C.datetimeFormats = c.value, ml(C, L, D));
  }
  function w(L, D) {
    tn(L) || (c.value[L] = xe(kt(c.value, L) || {}, D), C.datetimeFormats = c.value, ml(C, L, D));
  }
  function W(L) {
    return kt(f.value, L) || {};
  }
  function H(L, D) {
    tn(L) || (f.value[L] = D, C.numberFormats = f.value, _l(C, L, D));
  }
  function K(L, D) {
    tn(L) || (f.value[L] = xe(kt(f.value, L) || {}, D), C.numberFormats = f.value, _l(C, L, D));
  }
  wl++, an(l, () => U(l.value), { deep: !0, flush: "sync" }), t && Rs && (an(t.locale, (L) => {
    i && (a.value = L, C.locale = L, es(C, a.value, l.value));
  }), an(t.fallbackLocale, (L) => {
    i && (l.value = L, C.fallbackLocale = l.value, es(C, a.value, l.value));
  }));
  const G = {
    id: wl,
    locale: j,
    fallbackLocale: X,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(L) {
      i = L, L && t && (j.value = t.locale.value, X.value = t.fallbackLocale.value);
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: te,
    get modifiers() {
      return I;
    },
    get pluralRules() {
      return $ || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(L) {
      m = L, C.missingWarn = m;
    },
    get fallbackWarn() {
      return E;
    },
    set fallbackWarn(L) {
      E = L, C.fallbackWarn = E;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(L) {
      A = L;
    },
    get fallbackFormat() {
      return T;
    },
    set fallbackFormat(L) {
      T = L, C.fallbackFormat = T;
    },
    get warnHtmlMessage() {
      return R;
    },
    set warnHtmlMessage(L) {
      R = L, C.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(L) {
      b = L, C.escapeParameter = L;
    },
    t: ne,
    getLocaleMessage: x,
    setLocaleMessage: k,
    mergeLocaleMessage: d,
    getPostTranslationHandler: F,
    setPostTranslationHandler: q,
    getMissingHandler: fe,
    setMissingHandler: Ce,
    [af]: g
  };
  return G.datetimeFormats = _e, G.numberFormats = Z, G.rt = Ve, G.te = _, G.tm = M, G.d = et, G.n = st, G.getDateTimeFormat = h, G.setDateTimeFormat = v, G.mergeDateTimeFormat = w, G.getNumberFormat = W, G.setNumberFormat = H, G.mergeNumberFormat = K, G[lf] = n, G[oi] = Ye, G[ii] = Yt, G[ai] = He, G;
}
function l1(e) {
  const t = Y(e.locale) ? e.locale : Pr, n = Y(e.fallbackLocale) || Se(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = we(e.missing) ? e.missing : void 0, s = ce(e.silentTranslationWarn) || qn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = ce(e.silentFallbackWarn) || qn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ce(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = ye(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = we(e.postTranslation) ? e.postTranslation : void 0, f = Y(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, E = ce(e.sync) ? e.sync : !0;
  let A = e.messages;
  if (ye(e.sharedMessages)) {
    const I = e.sharedMessages;
    A = Object.keys(I).reduce((C, V) => {
      if (tn(V))
        return C;
      const N = kt(C, V) || (C[V] = {});
      return xe(N, I[V]), C;
    }, A || {});
  }
  const { __i18n: T, __root: P, __injectWithOption: p } = e, y = e.datetimeFormats, R = e.numberFormats, b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: A,
    flatJson: b,
    datetimeFormats: y,
    numberFormats: R,
    missing: r,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: i,
    fallbackFormat: a,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: f,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: E,
    __i18n: T,
    __root: P,
    __injectWithOption: p
  };
}
function li(e = {}) {
  const t = Is(l1(e)), { __extender: n } = e, r = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(s) {
      t.locale.value = s;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(s) {
      t.fallbackLocale.value = s;
    },
    // messages
    get messages() {
      return t.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return t.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return t.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return t.availableLocales;
    },
    // missing
    get missing() {
      return t.getMissingHandler();
    },
    set missing(s) {
      t.setMissingHandler(s);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return ce(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(s) {
      t.missingWarn = ce(s) ? !s : s;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return ce(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(s) {
      t.fallbackWarn = ce(s) ? !s : s;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(s) {
      t.fallbackFormat = s;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(s) {
      t.setPostTranslationHandler(s);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(s) {
      t.inheritLocale = s;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(s) {
      t.warnHtmlMessage = s !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(s) {
      t.escapeParameter = s;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...s) {
      return Reflect.apply(t.t, t, [...s]);
    },
    // rt
    rt(...s) {
      return Reflect.apply(t.rt, t, [...s]);
    },
    // te
    te(s, o) {
      return t.te(s, o);
    },
    // tm
    tm(s) {
      return t.tm(s);
    },
    // getLocaleMessage
    getLocaleMessage(s) {
      return t.getLocaleMessage(s);
    },
    // setLocaleMessage
    setLocaleMessage(s, o) {
      t.setLocaleMessage(s, o);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(s, o) {
      t.mergeLocaleMessage(s, o);
    },
    // d
    d(...s) {
      return Reflect.apply(t.d, t, [...s]);
    },
    // getDateTimeFormat
    getDateTimeFormat(s) {
      return t.getDateTimeFormat(s);
    },
    // setDateTimeFormat
    setDateTimeFormat(s, o) {
      t.setDateTimeFormat(s, o);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(s, o) {
      t.mergeDateTimeFormat(s, o);
    },
    // n
    n(...s) {
      return Reflect.apply(t.n, t, [...s]);
    },
    // getNumberFormat
    getNumberFormat(s) {
      return t.getNumberFormat(s);
    },
    // setNumberFormat
    setNumberFormat(s, o) {
      t.setNumberFormat(s, o);
    },
    // mergeNumberFormat
    mergeNumberFormat(s, o) {
      t.mergeNumberFormat(s, o);
    }
  };
  return r.__extender = n, r;
}
function c1(e, t, n) {
  return {
    beforeCreate() {
      const r = Nr();
      if (!r)
        throw nt(Ze.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        if (s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root)
          this.$i18n = Tl(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = li(o);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = Tl(e, s);
        else {
          this.$i18n = li({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && ff(t, s, s), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$te = (o, i) => this.$i18n.te(o, i), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = Nr();
      if (!r)
        throw nt(Ze.UNEXPECTED_ERROR);
      const s = this.$i18n;
      s && (delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s != null && s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n);
    }
  };
}
function Tl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[af](t.pluralizationRules || e.pluralizationRules);
  const n = Hi(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const ji = {
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
function u1({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Ue ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, ge());
}
function df() {
  return Ue;
}
const f1 = /* @__PURE__ */ kn({
  /* eslint-disable */
  name: "i18n-t",
  props: xe({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => Ne(e) || !isNaN(e)
    }
  }, ji),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || Wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = () => {
        const l = Object.keys(n).filter((f) => f[0] !== "_"), u = ge();
        e.locale && (u.locale = e.locale), e.plural !== void 0 && (u.plural = Y(e.plural) ? +e.plural : e.plural);
        const c = u1(t, l);
        return s[oi](e.keypath, c, u);
      }, i = xe(ge(), r), a = Y(e.tag) || ie(e.tag) ? e.tag : df();
      return ie(a) ? un(a, i, { default: o }) : un(a, i, o());
    };
  }
}), Ol = f1;
function d1(e) {
  return Se(e) && !Y(e[0]);
}
function hf(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = () => {
      const u = { part: !0 };
      let c = ge();
      e.locale && (u.locale = e.locale), Y(e.format) ? u.key = e.format : ie(e.format) && (Y(e.format.key) && (u.key = e.format.key), c = Object.keys(e.format).reduce((E, A) => n.includes(A) ? xe(ge(), E, { [A]: e.format[A] }) : E, ge()));
      const f = r(e.value, u, c);
      let m = [u.key];
      return Se(f) ? m = f.map((E, A) => {
        const T = s[E.type], P = T ? T({ [E.type]: E.value, index: A, parts: f }) : [E.value];
        return d1(P) && (P[0].key = `${E.type}-${A}`), P;
      }) : Y(f) && (m = [f]), m;
    }, a = xe(ge(), o), l = Y(e.tag) || ie(e.tag) ? e.tag : df();
    return ie(l) ? un(l, a, { default: i }) : un(l, a, i());
  };
}
const h1 = /* @__PURE__ */ kn({
  /* eslint-disable */
  name: "i18n-n",
  props: xe({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ji),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return hf(e, t, rf, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ai](...r)
    ));
  }
}), Cl = h1;
function p1(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function m1(e) {
  const t = (i) => {
    const { instance: a, value: l } = i;
    if (!a || !a.$)
      throw nt(Ze.UNEXPECTED_ERROR);
    const u = p1(e, a.$), c = Rl(l);
    return [
      Reflect.apply(u.t, u, [...Ll(c)]),
      u
    ];
  };
  return {
    created: (i, a) => {
      const [l, u] = t(a);
      Rs && (i.__i18nWatcher = an(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = l;
    },
    unmounted: (i) => {
      Rs && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer, u = Rl(a);
        i.textContent = Reflect.apply(l.t, l, [
          ...Ll(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    }
  };
}
function Rl(e) {
  if (Y(e))
    return { path: e };
  if (ye(e)) {
    if (!("path" in e))
      throw nt(Ze.REQUIRED_VALUE, "path");
    return e;
  } else
    throw nt(Ze.INVALID_VALUE);
}
function Ll(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e, i = {}, a = r || {};
  return Y(n) && (i.locale = n), Ne(s) && (i.plural = s), Ne(o) && (i.plural = o), [t, a, i];
}
function g1(e, t, ...n) {
  const r = ye(n[0]) ? n[0] : {};
  (ce(r.globalInstall) ? r.globalInstall : !0) && ([Ol.name, "I18nT"].forEach((o) => e.component(o, Ol)), [Cl.name, "I18nN"].forEach((o) => e.component(o, Cl)), [Nl.name, "I18nD"].forEach((o) => e.component(o, Nl))), e.directive("t", m1(t));
}
const _1 = /* @__PURE__ */ pn("global-vue-i18n");
function y1(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = ce(e.globalInjection) ? e.globalInjection : !0, r = /* @__PURE__ */ new Map(), [s, o] = b1(e, t), i = /* @__PURE__ */ pn("");
  function a(f) {
    return r.get(f) || null;
  }
  function l(f, m) {
    r.set(f, m);
  }
  function u(f) {
    r.delete(f);
  }
  const c = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
    },
    // install plugin
    async install(f, ...m) {
      if (f.__VUE_I18N_SYMBOL__ = i, f.provide(f.__VUE_I18N_SYMBOL__, c), ye(m[0])) {
        const T = m[0];
        c.__composerExtend = T.__composerExtend, c.__vueI18nExtend = T.__vueI18nExtend;
      }
      let E = null;
      !t && n && (E = O1(f, c.global)), __VUE_I18N_FULL_INSTALL__ && g1(f, c, ...m), __VUE_I18N_LEGACY_API__ && t && f.mixin(c1(o, o.__composer, c));
      const A = f.unmount;
      f.unmount = () => {
        E && E(), c.dispose(), A();
      };
    },
    // global accessor
    get global() {
      return o;
    },
    dispose() {
      s.stop();
    },
    // @internal
    __instances: r,
    // @internal
    __getInstance: a,
    // @internal
    __setInstance: l,
    // @internal
    __deleteInstance: u
  };
  return c;
}
function Wi(e = {}) {
  const t = Nr();
  if (t == null)
    throw nt(Ze.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw nt(Ze.NOT_INSTALLED);
  const n = E1(t), r = v1(n), s = uf(t), o = S1(e, s);
  if (o === "global")
    return ff(r, e, s), r;
  if (o === "parent") {
    let l = Pl(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  if (o === "isolated") {
    if (n.mode !== "composition")
      throw nt(Ze.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const l = n, u = xe({}, e), c = Pl(n, t);
    u.__root = c || r;
    const f = Is(u);
    return l.__composerExtend && (f[Hn] = l.__composerExtend(f)), gi() && pc(() => {
      const E = f[Hn];
      E && (E(), delete f[Hn]);
    }), f;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = xe({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), a = Is(l), i.__composerExtend && (a[Hn] = i.__composerExtend(a)), A1(i, t, a), i.__setInstance(t, a);
  }
  return a;
}
function b1(e, t) {
  const n = mi(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => li(e)) : n.run(() => Is(e));
  if (r == null)
    throw nt(Ze.UNEXPECTED_ERROR);
  return [n, r];
}
function E1(e) {
  const t = yt(e.isCE ? _1 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw nt(e.isCE ? Ze.NOT_INSTALLED_WITH_PROVIDE : Ze.UNEXPECTED_ERROR);
  return t;
}
function S1(e, t) {
  return ki(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function v1(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Pl(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = w1(t, n);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(o);
      a != null && (r = a.__composer, n && r && !r[lf] && (r = null));
    }
    if (r != null || s === o)
      break;
    o = o.parent;
  }
  return r;
}
function w1(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function A1(e, t, n) {
  Oi(() => {
  }, t), Ci(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[Hn];
    s && (s(), delete r[Hn]);
  }, t);
}
const T1 = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Il = ["t", "rt", "d", "n", "tm", "te"];
function O1(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return T1.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o)
      throw nt(Ze.UNEXPECTED_ERROR);
    const i = /* @__PURE__ */ Oe(o.value) ? {
      get() {
        return o.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        o.value.value = a;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, s, i);
  }), e.config.globalProperties.$i18n = n, Il.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value)
      throw nt(Ze.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, Il.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
const C1 = /* @__PURE__ */ kn({
  /* eslint-disable */
  name: "i18n-d",
  props: xe({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ji),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Wi({
      useScope: e.scope,
      __useComponent: !0
    });
    return hf(e, t, nf, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ii](...r)
    ));
  }
}), Nl = C1;
o1();
U0(b0);
$0(M0);
V0(ti);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = sn();
  e.__INTLIFY__ = !0, E0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const R1 = "sub2api_locale", Bi = "en", L1 = {
  en: () => import("./index-WkE-UET7.js"),
  zh: () => import("./index-B6792iEr.js")
};
function pf(e) {
  return e === "en" || e === "zh";
}
function P1() {
  const e = localStorage.getItem(R1);
  return e && pf(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : Bi;
}
const Bn = y1({
  legacy: !1,
  locale: P1(),
  fallbackLocale: Bi,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), xl = /* @__PURE__ */ new Set();
async function mf(e) {
  if (xl.has(e))
    return;
  const t = L1[e], n = await t();
  Bn.global.setLocaleMessage(e, n.default), xl.add(e);
}
async function I1() {
  const e = gf();
  await mf(e), document.documentElement.setAttribute("lang", e);
}
function gf() {
  const e = Bn.global.locale.value;
  return pf(e) ? e : Bi;
}
const I5 = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" }
];
function _f(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: N1 } = Object.prototype, { getPrototypeOf: dn } = Object, { iterator: Hr, toStringTag: yf } = Symbol, xr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), bf = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Ef = (e, t, n) => e === Object.prototype || !n && t === null, x1 = (e) => {
  if (!Object.isExtensible(e))
    return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((n) => {
    if (bf(n))
      return !1;
    const r = Object.getOwnPropertyDescriptor(e, n);
    return !!r && r.configurable && r.writable === !0;
  });
}, kr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    r.push(n);
    const s = dn(n);
    if (Ef(n, s, n === e))
      return !1;
    if (xr(n, t))
      return !0;
    n = s;
  }
  return !1;
}, k1 = (e, t) => e != null && kr(e, t) ? e[t] : void 0, M1 = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function")
    return e;
  const t = dn(e);
  if (t === null && x1(e))
    return e;
  const n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), s = [];
  let o = e;
  for (; o != null && s.indexOf(o) === -1; ) {
    s.push(o);
    const i = o === e ? t : dn(o);
    if (Ef(o, i, o === e))
      break;
    const a = Object.getOwnPropertyNames(o);
    Object.getOwnPropertySymbols && a.push(...Object.getOwnPropertySymbols(o));
    for (const l of a)
      bf(l) || xr(r, l) || (n[l] = e[l], r[l] = !0);
    o = i;
  }
  return n;
}, Ki = /* @__PURE__ */ ((e) => (t) => {
  const n = N1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), mt = (e) => (e = e.toLowerCase(), (t) => Ki(t) === e), ro = (e) => (t) => typeof t === e, { isArray: In } = Array, Nn = ro("undefined");
function Yn(e) {
  return e !== null && !Nn(e) && e.constructor !== null && !Nn(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Sf = mt("ArrayBuffer");
function D1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Sf(e.buffer), t;
}
const F1 = ro("string"), rt = ro("function"), vf = ro("number"), Jn = (e) => e !== null && typeof e == "object", U1 = (e) => e === !0 || e === !1, cs = (e) => {
  if (!Jn(e))
    return !1;
  const t = dn(e);
  return (t === null || t === Object.prototype || dn(t) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !kr(e, yf) && !kr(e, Hr);
}, $1 = (e) => {
  if (!Jn(e) || Yn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, V1 = mt("Date"), H1 = mt("File"), j1 = (e) => !!(e && typeof e.uri < "u"), W1 = (e) => e && typeof e.getParts < "u", B1 = mt("Blob"), K1 = mt("FileList"), z1 = mt("Set"), q1 = (e) => Jn(e) && rt(e.pipe);
function G1() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const kl = G1(), Ml = typeof kl.FormData < "u" ? kl.FormData : void 0, Y1 = (e) => {
  if (!e) return !1;
  if (Ml && e instanceof Ml) return !0;
  const t = dn(e);
  if (!t || t === Object.prototype || !rt(e.append)) return !1;
  const n = Ki(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && rt(e.toString) && e.toString() === "[object FormData]";
}, J1 = mt("URLSearchParams"), [X1, Q1, Z1, eg] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(mt), tg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function jr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), In(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Yn(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function wf(e, t) {
  if (Yn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Af = (e) => !Nn(e) && e !== Tn;
function ci(...e) {
  const { caseless: t, skipUndefined: n } = Af(this) && this || {}, r = {}, s = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && wf(r, i) || i, l = xr(r, a) ? r[a] : void 0;
    cs(l) && cs(o) ? r[a] = ci(l, o) : cs(o) ? r[a] = ci({}, o) : In(o) ? r[a] = o.slice() : (!n || !Nn(o)) && (r[a] = o);
  };
  for (let o = 0, i = e.length; o < i; o++) {
    const a = e[o];
    if (!a || Yn(a) || (jr(a, s), typeof a != "object" || In(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      hg.call(a, c) && s(a[c], c);
    }
  }
  return r;
}
const ng = (e, t, n, { allOwnKeys: r } = {}) => (jr(
  t,
  (s, o) => {
    n && rt(s) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: _f(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), rg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sg = (e, t, n, r) => {
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
}, og = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && dn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ig = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ag = (e) => {
  if (!e) return null;
  if (In(e)) return e;
  let t = e.length;
  if (!vf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, lg = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && dn(Uint8Array)), cg = (e, t) => {
  const r = (e && e[Hr]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ug = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fg = mt("HTMLFormElement"), dg = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), { propertyIsEnumerable: hg } = Object.prototype, pg = mt("RegExp"), Tf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  jr(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, mg = (e) => {
  Tf(e, (t, n) => {
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
}, gg = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return In(e) ? r(e) : r(String(e).split(t)), n;
}, _g = () => {
}, yg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bg(e) {
  return !!(e && rt(e.append) && e[yf] === "FormData" && e[Hr]);
}
const Eg = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Jn(r)) {
      if (t.has(r))
        return;
      if (Yn(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        let s;
        if (z1(r)) {
          s = [];
          for (const o of r) {
            const i = n(o);
            !Nn(i) && s.push(i);
          }
        } else
          s = In(r) ? [] : {}, jr(r, (o, i) => {
            const a = n(o);
            !Nn(a) && (s[i] = a);
          });
        return t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, Sg = mt("AsyncFunction"), vg = (e) => e && (Jn(e) || rt(e)) && rt(e.then) && rt(e.catch), Of = ((e, t) => e ? setImmediate : t ? ((n, r) => (Tn.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Tn && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", rt(Tn.postMessage)), wg = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tn) : typeof process < "u" && process.nextTick || Of, Cf = (e) => e != null && rt(e[Hr]), Ag = (e) => e != null && kr(e, Hr) && Cf(e), S = {
  isArray: In,
  isArrayBuffer: Sf,
  isBuffer: Yn,
  isFormData: Y1,
  isArrayBufferView: D1,
  isString: F1,
  isNumber: vf,
  isBoolean: U1,
  isObject: Jn,
  isPlainObject: cs,
  isEmptyObject: $1,
  isReadableStream: X1,
  isRequest: Q1,
  isResponse: Z1,
  isHeaders: eg,
  isUndefined: Nn,
  isDate: V1,
  isFile: H1,
  isReactNativeBlob: j1,
  isReactNative: W1,
  isBlob: B1,
  isRegExp: pg,
  isFunction: rt,
  isStream: q1,
  isURLSearchParams: J1,
  isTypedArray: lg,
  isFileList: K1,
  forEach: jr,
  merge: ci,
  extend: ng,
  trim: tg,
  stripBOM: rg,
  inherits: sg,
  toFlatObject: og,
  kindOf: Ki,
  kindOfTest: mt,
  endsWith: ig,
  toArray: ag,
  forEachEntry: cg,
  matchAll: ug,
  isHTMLForm: fg,
  hasOwnProperty: xr,
  hasOwnProp: xr,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: kr,
  getSafeProp: k1,
  toSafeFlatObject: M1,
  reduceDescriptors: Tf,
  freezeMethods: mg,
  toObjectSet: gg,
  toCamelCase: dg,
  noop: _g,
  toFiniteNumber: yg,
  findKey: wf,
  global: Tn,
  isContextDefined: Af,
  isSpecCompliantForm: bg,
  toJSONObject: Eg,
  isAsyncFn: Sg,
  isThenable: vg,
  setImmediate: Of,
  asap: wg,
  isIterable: Cf,
  isSafeIterable: Ag
}, Tg = S.toObjectSet([
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
]), Og = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim();
    const a = S.hasOwnProp(t, n);
    !n || a && S.hasOwnProp(Tg, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
  }), t;
};
function Cg(e) {
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
const Rg = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Lg = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function zi(e, t) {
  return S.isArray(e) ? e.map((n) => zi(n, t)) : Cg(String(e).replace(t, ""));
}
const Pg = (e) => zi(e, Rg), Ig = (e) => zi(e, Lg);
function Rf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return S.forEach(e.toJSON(), (n, r) => {
    t[r] = Ig(n);
  }), t;
}
const Dl = Symbol("internals");
function tr(e) {
  return e && String(e).trim().toLowerCase();
}
function us(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(us) : Pg(String(e));
}
function Ng(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const xg = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Po(e) {
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
function kg(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let n = "";
  for (let r = 1; r < t; r++) {
    const s = e.charCodeAt(r);
    if (s === 34 || s === 92 && (r += 1, r >= t))
      return e;
    n += e[r];
  }
  return n;
}
function Mg(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, s = !1, o = !1;
  function i(a) {
    const l = Po(n.slice(r, a)), u = l.indexOf("=");
    if (u < 1)
      return;
    const c = Po(l.slice(0, u));
    if (!xg.test(c))
      return;
    const f = c.toLowerCase();
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return;
    const m = Po(l.slice(u + 1));
    t[f] = kg(m);
  }
  for (let a = 0; a < n.length; a++) {
    const l = n.charCodeAt(a);
    s ? o ? o = !1 : l === 92 ? o = !0 : l === 34 && (s = !1) : l === 34 ? s = !0 : (l === 44 || l === 59) && (i(a), r = a + 1);
  }
  return i(n.length), t;
}
const Dg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Io(e, t, n, r, s) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function Fg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ug(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
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
    const s = this;
    function o(a, l, u) {
      const c = tr(l);
      if (!c)
        return;
      const f = S.findKey(s, c);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || l] = us(a));
    }
    const i = (a, l) => S.forEach(a, (u, c) => o(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !Dg(t))
      i(Og(t), n);
    else if (S.isObject(t) && S.isSafeIterable(t)) {
      let a = /* @__PURE__ */ Object.create(null), l, u;
      for (const c of t) {
        if (!S.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        u = c[0], S.hasOwnProp(a, u) ? (l = a[u], a[u] = S.isArray(l) ? [...l, c[1]] : [l, c[1]]) : a[u] = c[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = tr(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ng(s);
        if (S.isFunction(n))
          return n.call(this, s, r);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tr(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Io(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = tr(i), i) {
        const a = S.findKey(r, i);
        a && (!n || Io(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Io(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (s, o) => {
      const i = S.findKey(r, o);
      if (i) {
        n[i] = us(s), delete n[o];
        return;
      }
      const a = t ? Fg(o) : String(o).trim();
      a !== o && delete n[o], n[a] = us(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && S.isArray(r) ? r.join(", ") : r);
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
    const t = this.get("set-cookie");
    return S.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return Mg(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Dl] = this[Dl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = tr(i);
      r[a] || (Ug(s, i), r[a] = !0);
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
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
const Ns = "[REDACTED ****]";
function $g(e) {
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
function Vg(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], s = (o) => {
    if (o === null || typeof o != "object" || S.isBuffer(o)) return o;
    if (r.indexOf(o) !== -1) return;
    o instanceof Ge && (o = o.toJSON()), r.push(o);
    let i;
    if (S.isArray(o))
      i = [], o.forEach((a, l) => {
        const u = s(a);
        S.isUndefined(u) || (i[l] = u);
      });
    else {
      if (!S.isPlainObject(o) && $g(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(o)) {
        const u = n.has(a.toLowerCase()) ? Ns : s(l);
        S.isUndefined(u) || (i[a] = u);
      }
    }
    return r.pop(), i;
  };
  return s(e);
}
function Fl(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function Hg(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? Fl(n.message) : Fl(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let B = class Lf extends Error {
  static from(t, n, r, s, o, i) {
    let a = t.message;
    !a && S.isArray(t.errors) && t.errors.length && (a = Hg(t));
    const l = new Lf(a, n || t.code, r, s, o);
    return Object.defineProperty(l, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
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
  constructor(t, n, r, s, o) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const t = this.config, n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0, r = S.isArray(n) && n.length > 0 ? Vg(t, n) : S.toJSONObject(t);
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
B.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
B.ERR_BAD_OPTION = "ERR_BAD_OPTION";
B.ECONNABORTED = "ECONNABORTED";
B.ETIMEDOUT = "ETIMEDOUT";
B.ECONNREFUSED = "ECONNREFUSED";
B.ERR_NETWORK = "ERR_NETWORK";
B.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
B.ERR_DEPRECATED = "ERR_DEPRECATED";
B.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
B.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
B.ERR_CANCELED = "ERR_CANCELED";
B.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
B.ERR_INVALID_URL = "ERR_INVALID_URL";
B.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const jg = null, Pf = 100;
function ui(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function If(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function No(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = If(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Wg(e) {
  return S.isArray(e) && !e.some(ui);
}
const Bg = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function so(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const r = (y, R) => {
    const b = S.getSafeProp(n, y);
    return S.isUndefined(b) ? R : b;
  }, s = r("metaTokens", !0), o = r("visitor") || T, i = r("dots", !1), a = r("indexes", !1), l = r("Blob") || typeof Blob < "u" && Blob, u = r("maxDepth", Pf), c = l && S.isSpecCompliantForm(t), f = [];
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(y) {
    if (y === null) return "";
    if (S.isDate(y))
      return y.toISOString();
    if (S.isBoolean(y))
      return y.toString();
    if (!c && S.isBlob(y))
      throw new B("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(y) || S.isTypedArray(y)) {
      if (c && typeof l == "function")
        return new l([y]);
      throw new B(
        "Blob is not supported. Use a Buffer instead.",
        B.ERR_NOT_SUPPORT
      );
    }
    return y;
  }
  function E(y) {
    if (y > u)
      throw new B(
        "Object is too deeply nested (" + y + " levels). Max depth: " + u,
        B.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function A(y, R) {
    if (u === 1 / 0)
      return JSON.stringify(y);
    const b = [];
    return JSON.stringify(y, function($, C) {
      if (!S.isObject(C))
        return C;
      for (; b.length && b[b.length - 1] !== this; )
        b.pop();
      return b.push(C), E(R + b.length - 1), C;
    });
  }
  function T(y, R, b) {
    let I = y;
    if (S.isReactNative(t) && S.isReactNativeBlob(y))
      return t.append(No(b, R, i), m(y)), !1;
    if (y && !b && typeof y == "object") {
      if (S.endsWith(R, "{}"))
        R = s ? R : R.slice(0, -2), y = A(y, 1);
      else if (S.isArray(y) && Wg(y) || (S.isFileList(y) || S.endsWith(R, "[]")) && (I = S.toArray(y)))
        return R = If(R), I.forEach(function(C, V) {
          !(S.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? No([R], V, i) : a === null ? R : R + "[]",
            m(C)
          );
        }), !1;
    }
    return ui(y) ? !0 : (t.append(No(b, R, i), m(y)), !1);
  }
  const P = Object.assign(Bg, {
    defaultVisitor: T,
    convertValue: m,
    isVisitable: ui
  });
  function p(y, R, b = 0) {
    if (!S.isUndefined(y)) {
      if (E(b), f.indexOf(y) !== -1)
        throw new Error("Circular reference detected in " + R.join("."));
      f.push(y), S.forEach(y, function($, C) {
        (!(S.isUndefined($) || $ === null) && o.call(t, $, S.isString(C) ? C.trim() : C, R, P)) === !0 && p($, R ? R.concat(C) : [C], b + 1);
      }), f.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Ul(e) {
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
function qi(e, t) {
  this._pairs = [], e && so(e, this, t);
}
const Nf = qi.prototype;
Nf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Nf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Ul) : Ul;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Kg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function xf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = S.isFunction(n) ? {
    serialize: n
  } : n, s = S.getSafeProp(r, "encode") || Kg, o = S.getSafeProp(r, "serialize");
  let i;
  if (o ? i = o(t, r) : i = S.isURLSearchParams(t) ? t.toString() : new qi(t, r).toString(s), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
const nr = Symbol("internals");
function kf(e) {
  return e ? e.length : 0;
}
function $l(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; )
      e.pop();
}
function rr(e, t) {
  const n = e.handlers, r = kf(n);
  n !== t.handlersRef ? (t.handlersRef = n, t.handlerEntries.clear()) : r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(o, i) {
    n[o.index] !== o.handler && t.handlerEntries.delete(i);
  }) : t.handlerEntries.clear()), t.handlersLength = r;
}
class Vl {
  constructor() {
    this.handlers = [], this[nr] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
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
    const s = {
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }, o = this[nr];
    this.handlers == null && (this.handlers = []), rr(this, o);
    const i = o.nextId++;
    return this.handlers.push(s), o.handlerEntries.set(i, {
      handler: s,
      index: this.handlers.length - 1
    }), o.handlersLength = this.handlers.length, i;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    const n = this[nr];
    rr(this, n);
    const r = n.handlerEntries.get(t);
    if (r) {
      if (n.handlerEntries.delete(t), this.handlers[r.index] !== r.handler)
        return;
      this.handlers[r.index] = null, n.iterationDepth || ($l(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], rr(this, this[nr]));
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
    const n = this[nr];
    rr(this, n), n.iterationDepth++;
    try {
      S.forEach(this.handlers, function(s) {
        s !== null && t(s);
      });
    } finally {
      --n.iterationDepth || (rr(this, n), $l(this.handlers), n.handlersLength = kf(this.handlers));
    }
  }
}
const Gi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, zg = typeof URLSearchParams < "u" ? URLSearchParams : qi, qg = typeof FormData < "u" ? FormData : null, Gg = typeof Blob < "u" ? Blob : null, Yg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zg,
    FormData: qg,
    Blob: Gg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Yi = typeof window < "u" && typeof document < "u", fi = typeof navigator == "object" && navigator || void 0, Jg = Yi && (!fi || ["ReactNative", "NativeScript", "NS"].indexOf(fi.product) < 0), Xg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qg = Yi && window.location.href || "http://localhost", Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Yi,
  hasStandardBrowserEnv: Jg,
  hasStandardBrowserWebWorkerEnv: Xg,
  navigator: fi,
  origin: Qg
}, Symbol.toStringTag, { value: "Module" })), De = {
  ...Zg,
  ...Yg
};
function e_(e, t) {
  return so(e, new De.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return De.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Hl = Pf;
function Mf(e) {
  if (e > Hl)
    throw new B(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Hl,
      B.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function t_(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Mf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function n_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Df(e) {
  function t(n, r, s, o) {
    Mf(o);
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && S.isArray(s) ? s.length : i, l ? (S.hasOwnProp(s, i) ? s[i] = S.isArray(s[i]) ? s[i].concat(r) : [s[i], r] : s[i] = r, !a) : ((!S.hasOwnProp(s, i) || !S.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && S.isArray(s[i]) && (s[i] = n_(s[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, s) => {
      t(t_(r), s, n, 0);
    }), n;
  }
  return null;
}
const Ff = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), Fn = (e, t) => e != null && S.hasOwnProp(e, t) ? e[t] : void 0;
function r_(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Wr = {
  transitional: Gi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = S.isObject(t);
      if (o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
        return s ? JSON.stringify(Df(t)) : t;
      if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
        return t;
      if (S.isArrayBufferView(t))
        return t.buffer;
      if (S.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        const l = Fn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return e_(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Fn(this, "env"), c = u && u.FormData;
          return so(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), r_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Fn(this, "transitional") || Wr.transitional, r = n && n.forcedJSONParsing, s = Fn(this, "responseType"), o = s === "json";
      if (S.isResponse(t) || S.isReadableStream(t))
        return t;
      if (t && S.isString(t) && (r && !s || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Fn(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? B.from(l, B.ERR_BAD_RESPONSE, this, null, Fn(this, "response")) : l;
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
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
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
S.forEach(Ff, (e) => {
  Wr.headers[e] = {};
});
function xo(e, t) {
  const n = this || Wr, r = t || n, s = Ge.from(r.headers);
  let o = r.data;
  return S.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Uf(e) {
  return !!(e && e.__CANCEL__);
}
let Br = class extends B {
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
    super(t ?? "canceled", B.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function $f(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new B(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? B.ERR_BAD_REQUEST : B.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const s_ = /[\t\n\r]/g;
function Vf(e) {
  if (typeof e != "string")
    return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t).replace(s_, "");
}
function ko(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function o_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[o];
    i || (i = u), n[s] = l, r[s] = u;
    let f = o, m = 0;
    for (; f !== s; )
      m += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = c && u - c;
    return E ? Math.round(m * 1e3 / E) : void 0;
  };
}
function i_(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), m = f - n;
    m >= r ? i(c, f) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - m)));
  }, () => s && i(s), (...c) => i(c)];
}
const xs = (e, t, n = 3) => {
  let r = 0;
  const s = o_(50, 250);
  return i_((o) => {
    if (!o || !S.isNumber(o.loaded))
      return;
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = Math.max(0, a != null ? Math.min(i, a) : i), u = Math.max(0, l - r), c = s(u);
    r = Math.max(r, l);
    const f = {
      loaded: l,
      total: a,
      progress: a ? l / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a ? (a - l) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, jl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Wl = (e, t = S.asap) => (...n) => t(() => e(...n)), a_ = De.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, De.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(De.origin),
  De.navigator && /(msie|trident)/i.test(De.navigator.userAgent)
) : () => !0, l_ = De.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      S.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), S.isString(r) && a.push(`path=${r}`), S.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), S.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), s = r.indexOf("=");
        if (s !== -1 && r.slice(0, s) === e)
          try {
            return decodeURIComponent(r.slice(s + 1));
          } catch {
            return r.slice(s + 1);
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
function c_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function u_(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const f_ = /^https?:(?!\/\/)/i;
function d_(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${Ns}`);
}
function h_(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Ns}@`), n = t.indexOf("#"), s = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${Ns}`
  );
  return n === -1 ? s : `${s}#${d_(t.slice(n + 1))}`;
}
function Bl(e, t) {
  if (typeof e == "string") {
    const n = Vf(e);
    if (f_.test(n))
      throw new B(
        `Invalid URL ${JSON.stringify(h_(n))}: missing "//" after protocol`,
        B.ERR_INVALID_URL,
        t
      );
  }
}
function Hf(e, t, n, r) {
  Bl(t, r);
  let s = !c_(t);
  return e && (s || n === !1) ? (Bl(e, r), u_(e, t)) : t;
}
const Kl = (e) => e instanceof Ge ? { ...e } : e, p_ = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function xn(e, t) {
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
  function r(c, f, m, E) {
    return S.isPlainObject(c) && S.isPlainObject(f) ? S.merge.call({ caseless: E }, c, f) : S.isPlainObject(f) ? S.merge({}, f) : S.isArray(f) ? f.slice() : f;
  }
  function s(c, f, m, E) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c))
        return r(void 0, c, m, E);
    } else return r(c, f, m, E);
  }
  function o(c, f) {
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
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutErrorMessage: i,
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
    headers: (c, f, m) => s(Kl(c), Kl(f), m, !0)
  };
  return S.forEach(p_({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = S.hasOwnProp(u, f) ? u[f] : s, E = S.hasOwnProp(e, f) ? e[f] : void 0, A = S.hasOwnProp(t, f) ? t[f] : void 0, T = m(E, A, f);
    S.isUndefined(T) && m !== l || (n[f] = T);
  }), S.hasOwnProp(t, "validateStatus") && S.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const m_ = ["content-type", "content-length"];
function g_(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, s]) => {
    m_.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const __ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function jf(e) {
  const t = xn({}, e), n = (m) => S.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = a = Ge.from(a), t.url = xf(
    Hf(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = S.getSafeProp(l, "username") || "", E = S.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (E ? __(E) : ""))
      );
    } catch (A) {
      throw B.from(A, B.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (S.isFormData(r)) {
    const m = S.getSafeProp(r, "getHeaders");
    De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv || S.isReactNative(r) ? a.setContentType(void 0) : S.isFunction(m) && g_(a, m.call(r), n("formDataHeaderPolicy"));
  }
  if (De.hasStandardBrowserEnv && (S.isFunction(s) && (s = s(t)), s === !0 || s == null && a_(t.url))) {
    const E = o && i && l_.read(i);
    E && a.set(o, E);
  }
  return t;
}
const y_ = typeof XMLHttpRequest < "u", b_ = y_ && function(e) {
  return new Promise(function(n, r) {
    const s = jf(e);
    let o = s.data;
    const i = Ge.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s, c, f, m, E, A, T;
    function P() {
      E && E(), A && A(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function y(b) {
      if (!p)
        return;
      if (p.status === 0 && (ko(Vf(s.url)) || ko(De.origin)) !== "file" && !(p.responseURL && p.responseURL.startsWith("file:"))) {
        r(new B("Request aborted", B.ECONNABORTED, e, p)), P(), p = null;
        return;
      }
      try {
        b ? T && T(b) : A && A();
      } catch (V) {
        setTimeout(() => {
          throw V;
        });
      }
      if (!p)
        return;
      const I = Ge.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), C = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: I,
        config: e,
        request: p
      };
      $f(
        function(N) {
          n(N), P();
        },
        function(N) {
          r(N), P();
        },
        C
      ), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.startsWith("file:")) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new B("Request aborted", B.ECONNABORTED, e, p)), P(), p = null);
    }, p.onerror = function(I) {
      const $ = I && I.message ? I.message : "Network Error", C = new B($, B.ERR_NETWORK, e, p);
      C.event = I || null, r(C), P(), p = null;
    }, p.ontimeout = function() {
      let I = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || Gi;
      s.timeoutErrorMessage && (I = s.timeoutErrorMessage), r(
        new B(
          I,
          $.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
          e,
          p
        )
      ), P(), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && S.forEach(Rf(i), function(I, $) {
      p.setRequestHeader($, I);
    }), S.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), u && ([m, A, T] = xs(
      u,
      !0
    ), p.addEventListener("progress", m)), l && p.upload && ([f, E] = xs(l), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (c = (b) => {
      p && (r(!b || b.type ? new Br(null, e, p) : b), p.abort(), P(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const R = ko(s.url);
    if (R && !De.protocols.includes(R)) {
      r(
        new B(
          "Unsupported protocol " + R + ":",
          B.ERR_BAD_REQUEST,
          e
        )
      ), P();
      return;
    }
    p.send(o || null);
  });
}, E_ = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof B ? u : new Br(u instanceof Error ? u.message : u)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new B(`timeout of ${t}ms exceeded`, B.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((l) => {
    if (!r) {
      if (l.aborted) {
        s.call(l);
        return;
      }
      l.addEventListener("abort", s, { once: !0 });
    }
  });
  const { signal: a } = n;
  return a.unsubscribe = () => S.asap(i), a;
}, S_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, v_ = async function* (e, t) {
  for await (const n of w_(e))
    yield* S_(n, t);
}, w_ = async function* (e) {
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
}, zl = (e, t, n, r) => {
  const s = v_(e, t);
  let o = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: u, value: c } = await s.next();
          if (u) {
            a(), l.close();
            return;
          }
          let f = c.byteLength;
          if (n) {
            let m = o += f;
            n(m);
          }
          l.enqueue(new Uint8Array(c));
        } catch (u) {
          throw a(u), u;
        }
      },
      cancel(l) {
        return a(l), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, ql = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Wf = (e, t, n) => t + 2 < n && ql(e.charCodeAt(t + 1)) && ql(e.charCodeAt(t + 2)), Gl = (e) => e <= 57 ? e - 48 : (e & 223) - 55, A_ = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, T_ = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, O_ = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, C_ = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, R_ = (e) => {
  const t = e.length;
  let n = 0, r = 0, s = !1;
  for (let o = 0; o < t; o++) {
    let i = e.charCodeAt(o);
    if (i === 37 && Wf(e, o, t) && (i = Gl(e.charCodeAt(o + 1)) * 16 + Gl(e.charCodeAt(o + 2)), o += 2), !T_(i)) {
      if (i === 61) {
        r++;
        continue;
      }
      if (!A_(i) || r > 0) {
        s = !0;
        continue;
      }
      n++;
    }
  }
  return s || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? C_(e) : O_(n);
}, L_ = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const r = e.slice(5, n), s = e.slice(n + 1);
  if (/;base64/i.test(r))
    return t(s);
  let i = 0;
  for (let a = 0, l = s.length; a < l; a++) {
    const u = s.charCodeAt(a);
    if (u === 37 && Wf(s, a, l))
      i += 1, a += 2;
    else if (u < 128)
      i += 1;
    else if (u < 2048)
      i += 2;
    else if (u >= 55296 && u <= 56319 && a + 1 < l) {
      const c = s.charCodeAt(a + 1);
      c >= 56320 && c <= 57343 ? (i += 4, a++) : i += 3;
    } else
      i += 3;
  }
  return i;
};
function P_(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return L_(
    t === -1 ? e : e.slice(0, t),
    R_
  );
}
const Ji = "1.20.0", Yl = 64 * 1024, I_ = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: ts } = S, N_ = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Jl = (e) => {
  if (!S.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Xl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, x_ = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, k_ = (e) => {
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
  const { fetch: s, Request: o, Response: i } = e, a = s ? ts(s) : typeof fetch == "function", l = ts(o), u = ts(i);
  if (!a)
    return !1;
  const c = a && ts(n), f = a && (typeof r == "function" ? /* @__PURE__ */ ((p) => (y) => p.encode(y))(new r()) : async (p) => new Uint8Array(await new o(p).arrayBuffer())), m = l && c && Xl(() => {
    let p = !1;
    const y = new o(De.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }), R = y.headers.has("Content-Type");
    return y.body != null && y.body.cancel(), p && !R;
  }), E = u && c && Xl(() => S.isReadableStream(new i("").body)), A = {
    stream: E && ((p) => p.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !A[p] && (A[p] = (y, R) => {
      let b = y && y[p];
      if (b)
        return b.call(y);
      throw new B(
        `Response type '${p}' is not supported`,
        B.ERR_NOT_SUPPORT,
        R
      );
    });
  });
  const T = async (p) => {
    if (p == null)
      return 0;
    if (S.isBlob(p))
      return p.size;
    if (S.isSpecCompliantForm(p))
      return (await new o(De.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(p) || S.isArrayBuffer(p))
      return p.byteLength;
    if (S.isURLSearchParams(p) && (p = p + ""), S.isString(p))
      return (await f(p)).byteLength;
  }, P = async (p, y) => {
    const R = S.toFiniteNumber(p.getContentLength());
    return R ?? T(y);
  };
  return async (p) => {
    let {
      url: y,
      method: R,
      data: b,
      signal: I,
      cancelToken: $,
      timeout: C,
      onDownloadProgress: V,
      onUploadProgress: N,
      responseType: j,
      headers: z,
      withCredentials: U = "same-origin",
      fetchOptions: X,
      maxContentLength: te,
      maxBodyLength: _e,
      maxRedirects: Z
    } = jf(p);
    const F = S.isNumber(te) && te > -1, q = S.isNumber(_e) && _e > -1, fe = (re) => S.hasOwnProp(p, re) ? p[re] : void 0;
    let Ce = s || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let le = E_(
      [I, $ && $.toAbortSignal()],
      C
    ), ne = null;
    const Ve = le && le.unsubscribe && (() => {
      le.unsubscribe();
    });
    let et, st = null;
    const tt = () => new B(
      "Request body larger than maxBodyLength limit",
      B.ERR_BAD_REQUEST,
      p,
      ne
    );
    try {
      let re;
      const Te = fe("auth");
      if (Te) {
        const d = S.getSafeProp(Te, "username") || "", h = S.getSafeProp(Te, "password") || "";
        re = {
          username: d,
          password: h
        };
      }
      if (x_(y)) {
        const d = new URL(y, De.origin);
        if (!re && (d.username || d.password)) {
          const h = Jl(d.username), v = Jl(d.password);
          re = {
            username: h,
            password: v
          };
        }
        (d.username || d.password) && (d.username = "", d.password = "", y = d.href);
      }
      if (re && (z.delete("authorization"), z.set(
        "Authorization",
        "Basic " + btoa(N_((re.username || "") + ":" + (re.password || "")))
      )), F && typeof y == "string" && y.startsWith("data:") && P_(y) > te)
        throw new B(
          "maxContentLength size of " + te + " exceeded",
          B.ERR_BAD_RESPONSE,
          p,
          ne
        );
      if (q && R !== "get" && R !== "head") {
        const d = await T(b);
        if (typeof d == "number" && isFinite(d) && (et = d, d > _e))
          throw tt();
      }
      const Ye = q && (S.isReadableStream(b) || S.isStream(b)), He = (d, h, v) => zl(
        d,
        Yl,
        (w) => {
          if (q && w > _e)
            throw st = tt();
          h && h(w);
        },
        v
      );
      if (m && R !== "get" && R !== "head" && (N || Ye)) {
        if (et = et ?? await P(z, b), et !== 0 || Ye) {
          let d = new o(y, {
            method: "POST",
            body: b,
            duplex: "half"
          }), h;
          if (S.isFormData(b) && (h = d.headers.get("content-type")) && z.setContentType(h), d.body) {
            const [v, w] = N && jl(
              et,
              xs(Wl(N))
            ) || [];
            b = He(d.body, v, w);
          }
        }
      } else if (Ye && !l && c && R !== "get" && R !== "head")
        b = He(b);
      else if (Ye && l && !m && R !== "get" && R !== "head")
        throw new B(
          "Stream request bodies are not supported by the current fetch implementation",
          B.ERR_NOT_SUPPORT,
          p,
          ne
        );
      S.isString(U) || (U = U ? "include" : "omit");
      const Yt = l && "credentials" in o.prototype;
      if (S.isFormData(b)) {
        const d = z.getContentType();
        d && /^multipart\/form-data/i.test(d) && !/boundary=/i.test(d) && z.delete("content-type");
      }
      z.set("User-Agent", "axios/" + Ji, !1);
      const g = X == null ? X : Object.assign(/* @__PURE__ */ Object.create(null), X);
      g && (delete g.body, delete g.headers, delete g.method, delete g.signal, delete g.duplex, delete g.credentials);
      const _ = Object.assign(/* @__PURE__ */ Object.create(null), g, {
        signal: le,
        method: R.toUpperCase(),
        headers: Rf(z.normalize()),
        body: b,
        duplex: "half",
        credentials: Yt ? U : void 0
      });
      l && (S.forEach(I_, (d, h) => {
        _[h] === void 0 && (_[h] = d);
      }), _.signal === void 0 && (_.signal = null), _.body === void 0 && (_.body = null)), Z === 0 && (_.redirect = "manual", g && (g.redirect = "manual")), ne = l && new o(y, _);
      let O = await (l ? Ce(ne, g) : Ce(y, _));
      const M = Ge.from(O.headers);
      if (F) {
        const d = S.toFiniteNumber(M.getContentLength());
        if (d != null && d > te)
          throw new B(
            "maxContentLength size of " + te + " exceeded",
            B.ERR_BAD_RESPONSE,
            p,
            ne
          );
      }
      const x = E && (j === "stream" || j === "response");
      if (E && O.body && (V || F || x && Ve)) {
        const d = {};
        ["status", "statusText", "headers"].forEach((K) => {
          d[K] = O[K];
        });
        const h = S.toFiniteNumber(M.getContentLength()), [v, w] = V && jl(
          h,
          xs(Wl(V), !0)
        ) || [];
        let W = 0;
        const H = (K) => {
          if (F && (W = K, W > te))
            throw new B(
              "maxContentLength size of " + te + " exceeded",
              B.ERR_BAD_RESPONSE,
              p,
              ne
            );
          v && v(K);
        };
        O = new i(
          zl(O.body, Yl, H, () => {
            w && w(), Ve && Ve();
          }),
          d
        );
      }
      j = j || "text";
      let k = await A[S.findKey(A, j) || "text"](
        O,
        p
      );
      if (F && !E && !x) {
        let d;
        if (k != null && (typeof k.byteLength == "number" ? d = k.byteLength : typeof k.size == "number" ? d = k.size : typeof k == "string" && (d = typeof r == "function" ? new r().encode(k).byteLength : k.length)), typeof d == "number" && d > te)
          throw new B(
            "maxContentLength size of " + te + " exceeded",
            B.ERR_BAD_RESPONSE,
            p,
            ne
          );
      }
      return !x && Ve && Ve(), await new Promise((d, h) => {
        $f(d, h, {
          data: k,
          headers: Ge.from(O.headers),
          status: O.status,
          statusText: O.statusText,
          config: p,
          request: ne
        });
      });
    } catch (re) {
      if (Ve && Ve(), le && le.aborted && le.reason instanceof B) {
        const Te = le.reason;
        throw Te.config = p, ne && (Te.request = ne), re !== Te && Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: re,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      if (st)
        throw ne && !st.request && (st.request = ne), st;
      if (re instanceof B)
        throw ne && !re.request && (re.request = ne), re;
      if (re && re.name === "TypeError" && /Load failed|fetch/i.test(re.message)) {
        const Te = new B(
          "Network Error",
          B.ERR_NETWORK,
          p,
          ne,
          re && re.response
        );
        throw Object.defineProperty(Te, "cause", {
          __proto__: null,
          value: re.cause || re,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Te;
      }
      throw B.from(re, re && re.code, p, ne, re && re.response);
    }
  };
}, M_ = /* @__PURE__ */ new Map(), Bf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, a = i, l, u, c = M_;
  for (; a--; )
    l = o[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : k_(t)), c = u;
  return u;
};
Bf();
const Xi = {
  http: jg,
  xhr: b_,
  fetch: {
    get: Bf
  }
};
S.forEach(Xi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Ql = (e) => `- ${e}`, D_ = (e) => S.isFunction(e) || e === null || e === !1;
function F_(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !D_(r) && (s = Xi[(a = String(r)).toLowerCase()], s === void 0))
      throw new B(`Unknown adapter '${a}'`);
    if (s && (S.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Ql).join(`
`) : " " + Ql(i[0]) : "as no adapter specified";
    throw new B(
      "There is no suitable adapter to dispatch the request " + a,
      B.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const Kf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: F_,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Xi
};
function Mo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Br(null, e);
}
function Do(e) {
  const t = S.toSafeFlatObject(e);
  return Mo(t), t.headers = Ge.from(S.getSafeProp(t, "headers")), t.data = xo.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Kf.getAdapter(t.adapter || Wr.adapter, t)(t).then(
    function(s) {
      Mo(t), t.response = s;
      try {
        s.data = xo.call(t, t.transformResponse, s);
      } finally {
        delete t.response;
      }
      return s.headers = Ge.from(s.headers), s;
    },
    function(s) {
      if (!Uf(s) && (Mo(t), s && s.response)) {
        t.response = s.response;
        try {
          s.response.data = xo.call(
            t,
            t.transformResponse,
            s.response
          );
        } finally {
          delete t.response;
        }
        s.response.headers = Ge.from(s.response.headers);
      }
      return Promise.reject(s);
    }
  );
}
const oo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  oo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zl = {};
oo.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ji + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new B(
        s(i, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
      );
    return n && !Zl[i] && (Zl[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
oo.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function U_(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new B(
          "option " + o + " must be " + l,
          B.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + o, B.ERR_BAD_OPTION);
  }
}
const fs = {
  assertOptions: U_,
  validators: oo
}, je = fs.validators;
let Ln = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Vl(),
      response: new Vl()
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
      if (r instanceof Error)
        try {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const o = s.stack;
          let i = "";
          if (typeof o == "string") {
            const a = o.indexOf(`
`);
            i = a === -1 ? "" : o.slice(a + 1);
          }
          if (!r.stack)
            r.stack = i;
          else if (i) {
            const a = i.indexOf(`
`), l = a === -1 ? -1 : i.indexOf(`
`, a + 1), u = l === -1 ? "" : i.slice(l + 1);
            String(r.stack).endsWith(u) || (r.stack += `
` + i);
          }
        } catch {
        }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = xn(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && fs.assertOptions(
      r,
      {
        silentJSONParsing: je.transitional(je.boolean),
        forcedJSONParsing: je.transitional(je.boolean),
        clarifyTimeoutError: je.transitional(je.boolean),
        legacyInterceptorReqResOrdering: je.transitional(je.boolean),
        advertiseZstdAcceptEncoding: je.transitional(je.boolean),
        validateStatusUndefinedResolves: je.transitional(je.boolean)
      },
      !1
    ), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : fs.assertOptions(
      s,
      {
        encode: je.function,
        serialize: je.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fs.assertOptions(
      n,
      {
        baseUrl: je.spelling("baseURL"),
        withXsrfToken: je.spelling("withXSRFToken")
      },
      !0
    ), n.method = (S.getSafeProp(n, "method") || S.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let i = o && S.merge(o.common, o[n.method]);
    o && S.forEach(Ff.concat("common"), (A) => {
      delete o[A];
    }), n.headers = Ge.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(T) {
      if (typeof T.runWhen == "function" && T.runWhen(n) === !1)
        return;
      l = l && T.synchronous;
      const P = n.transitional || Gi;
      P && P.legacyInterceptorReqResOrdering ? a.unshift(T.fulfilled, T.rejected) : a.push(T.fulfilled, T.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(T) {
      u.push(T.fulfilled, T.rejected);
    });
    let c, f = 0, m;
    if (!l) {
      const A = [Do.bind(this), void 0];
      for (A.unshift(...a), A.push(...u), m = A.length, c = Promise.resolve(n); f < m; )
        c = c.then(A[f++], A[f++]);
      return c;
    }
    m = a.length;
    let E = n;
    for (; f < m; ) {
      const A = a[f++], T = a[f++];
      try {
        E = A ? A(E) : E;
      } catch (P) {
        if (!T) {
          c = Promise.reject(P);
          break;
        }
        try {
          const p = T.call(this, P);
          S.isThenable(p) && (c = Promise.resolve(p).then(
            () => Do.call(this, E)
          ));
        } catch (p) {
          c = Promise.reject(p);
        }
        break;
      }
    }
    if (!c)
      try {
        c = Do.call(this, E);
      } catch (A) {
        c = Promise.reject(A);
      }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = xn(this.defaults, t);
    const n = Hf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return xf(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  Ln.prototype[t] = function(n, r) {
    return this.request(
      xn(r || {}, {
        method: t,
        url: n,
        data: r && S.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
S.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(
        xn(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  Ln.prototype[t] = n(), t !== "query" && (Ln.prototype[t + "Form"] = n(!0));
});
let $_ = class zf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Br(o, i, a), n(r.reason));
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
      token: new zf(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function V_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function H_(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const ds = {
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
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
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
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(ds).forEach(([e, t]) => {
  ds[t] === void 0 && (ds[t] = e);
});
function qf(e) {
  const t = new Ln(e), n = _f(Ln.prototype.request, t);
  return S.extend(n, Ln.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return qf(xn(e, s));
  }, n;
}
const Ae = qf(Wr);
Ae.Axios = Ln;
Ae.CanceledError = Br;
Ae.CancelToken = $_;
Ae.isCancel = Uf;
Ae.VERSION = Ji;
Ae.toFormData = so;
Ae.AxiosError = B;
Ae.Cancel = Ae.CanceledError;
Ae.all = function(t) {
  return Promise.all(t);
};
Ae.spread = V_;
Ae.isAxiosError = H_;
Ae.mergeConfig = xn;
Ae.AxiosHeaders = Ge;
Ae.formToJSON = (e) => Df(S.isHTMLForm(e) ? new FormData(e) : e);
Ae.getAdapter = Kf.getAdapter;
Ae.HttpStatusCode = ds;
Ae.default = Ae;
const {
  Axios: M5,
  AxiosError: D5,
  CanceledError: F5,
  isCancel: U5,
  CancelToken: $5,
  VERSION: V5,
  all: H5,
  Cancel: j5,
  isAxiosError: W5,
  spread: B5,
  toFormData: K5,
  AxiosHeaders: z5,
  HttpStatusCode: q5,
  formToJSON: G5,
  getAdapter: Y5,
  mergeConfig: J5,
  create: X5
} = Ae, j_ = "X-Admin-UI-Request", W_ = "X-User-UI-Request";
function ec(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function Gf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function B_(e) {
  const t = Gf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function K_(e) {
  const t = B_(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function z_(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return ec(Gf(e)) || ec(n);
}
function q_(e) {
  return K_(e);
}
const gr = "/api/v1", G_ = Y_();
function Qi(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function Y_(e) {
  const n = (String(gr).trim() || gr).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Qi(n);
}
function Mr() {
  return G_;
}
function Q5(e) {
  const t = Mr().replace(/\/+$/, "");
  let n = Qi(e);
  return n === gr ? n = "" : n.startsWith(`${gr}/`) && (n = n.slice(gr.length)), `${t}${n}`;
}
function Z5(e) {
  const t = Qi(e);
  try {
    return `${typeof window > "u" ? new URL(Mr()).origin : new URL(Mr(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Zi = "auth_token", J_ = "auth_user", io = "refresh_token", ea = "token_expires_at", X_ = "sub2api-auth-token-refresh", tc = 3e4, Yf = 1e3, Q_ = 1e3, Z_ = 25;
let sr = null;
function ta() {
  const e = localStorage.getItem(J_);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function e2() {
  const e = localStorage.getItem(io);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Zi),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(ea)),
    userID: ta()
  };
}
function t2(e) {
  const t = localStorage.getItem(Zi), n = localStorage.getItem(io), r = Number(localStorage.getItem(ea));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || ta() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function ks(e, t) {
  const n = t2(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function n2(e, t, n = Date.now() + Yf) {
  for (; Date.now() < n; ) {
    const r = ks(e, t);
    if (r)
      return r;
    await new Promise((s) => window.setTimeout(s, Z_));
  }
  return ks(e, t);
}
function r2(e) {
  localStorage.setItem(Zi, e.access_token), localStorage.setItem(ea, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(io, e.refresh_token);
}
async function s2(e, t, n = !1) {
  var s;
  const r = Date.now() + tc + Q_;
  try {
    const i = (await Ae.post(
      `${Mr()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: tc }
    )).data;
    if (i.code !== 0 || !i.data)
      throw new Error(i.message || "Token refresh failed");
    if (localStorage.getItem(io) !== e.refreshToken || ta() !== e.userID) {
      const a = ks(e, t);
      if (a)
        return a;
      throw new Error("Session changed during token refresh");
    }
    return r2(i.data), i.data;
  } catch (o) {
    const i = (s = o.response) == null ? void 0 : s.status, a = typeof i == "number" && i >= 400 && i < 500, l = await n2(
      e,
      t,
      a && n ? r : Date.now() + Yf
    );
    if (l)
      return l;
    throw o;
  }
}
async function o2(e) {
  const t = e2(), n = async (r = !1) => {
    const s = ks(t, e.failedAccessToken);
    return s || s2(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(X_, () => n(!1)) : n(!0);
}
function Jf(e = {}) {
  if (sr)
    return sr;
  const t = o2(e);
  sr = t;
  const n = () => {
    sr === t && (sr = null);
  };
  return t.then(n, n), t;
}
const ue = Ae.create({
  baseURL: Mr(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), i2 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
ue.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = gf()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = i2()), e.headers) {
      const n = String(e.url || "");
      z_(n) && (e.headers[j_] = "1"), q_(n) && (e.headers[W_] = "1");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
ue.interceptors.response.use(
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
    var n, r, s, o, i;
    if (e.code === "ERR_CANCELED" || Ae.isCancel(e))
      return Promise.reject(e);
    const t = e.config;
    if (e.response) {
      const { status: a, data: l } = e.response, u = String(((n = e.config) == null ? void 0 : n.url) || ""), c = typeof l == "object" && l !== null ? l : {};
      if (a === 404 && c.message === "Ops monitoring is disabled") {
        try {
          localStorage.setItem("ops_monitoring_enabled_cached", "false");
        } catch {
        }
        try {
          window.dispatchEvent(new CustomEvent("ops-monitoring-disabled"));
        } catch {
        }
        return window.location.pathname.startsWith("/admin/ops") && (window.location.href = "/admin/settings"), Promise.reject({
          status: a,
          code: "OPS_DISABLED",
          message: c.message || e.message,
          url: u
        });
      }
      if (a === 423 && c.code === "ADMIN_COMPLIANCE_ACK_REQUIRED") {
        try {
          window.dispatchEvent(new CustomEvent("admin-compliance-required", {
            detail: c.metadata || {}
          }));
        } catch {
        }
        return Promise.reject({
          status: a,
          code: c.code,
          message: c.message || e.message,
          metadata: c.metadata
        });
      }
      if (a === 401 && !t._retry) {
        const f = localStorage.getItem("refresh_token"), m = u.includes("/auth/login") || u.includes("/auth/register") || u.includes("/auth/refresh");
        if (f && !m) {
          const p = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const y = t.headers, R = (y == null ? void 0 : y.Authorization) ?? (y == null ? void 0 : y.authorization), b = typeof R == "string" && R.startsWith("Bearer ") ? R.slice(7) : null, I = await Jf({ failedAccessToken: b });
            return t.headers && (t.headers.Authorization = `Bearer ${I.access_token}`), ue(t);
          } catch (y) {
            if (localStorage.getItem("refresh_token") !== f || localStorage.getItem("auth_user") !== p)
              return Promise.reject({
                status: 401,
                code: "AUTH_SESSION_CHANGED",
                message: "Authentication session changed while refreshing."
              });
            if (Ae.isAxiosError(y)) {
              const b = ((r = y.response) == null ? void 0 : r.status) ?? 0;
              if (b === 0 || b === 429 || b >= 500)
                return Promise.reject({
                  status: b,
                  code: "TOKEN_REFRESH_UNAVAILABLE",
                  message: ((o = (s = y.response) == null ? void 0 : s.data) == null ? void 0 : o.message) || y.message
                });
            }
            return localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login"), Promise.reject({
              status: 401,
              code: "TOKEN_REFRESH_FAILED",
              message: "Session expired. Please log in again."
            });
          }
        }
        const E = !!localStorage.getItem("auth_token"), A = (i = e.config) == null ? void 0 : i.headers, T = (A == null ? void 0 : A.Authorization) ?? (A == null ? void 0 : A.authorization), P = typeof T == "string" ? T.trim() !== "" : Array.isArray(T) ? T.length > 0 : !!T;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (E || P) && !m && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
      }
      return Promise.reject({
        status: a,
        code: c.code,
        reason: c.reason,
        error: c.error,
        message: c.message || c.detail || e.message,
        metadata: c.metadata
      });
    }
    return Promise.reject({
      status: 0,
      code: e.code || "ERR_NETWORK",
      message: "Network error. Please check your connection."
    });
  }
);
async function a2() {
  const { data: e } = await ue.get("/admin/system/version");
  return e;
}
async function Xf(e = !1) {
  const { data: t } = await ue.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
async function l2() {
  const { data: e } = await ue.get(
    "/admin/system/rollback-versions"
  );
  return e;
}
const Qf = 900 * 1e3;
async function c2() {
  const { data: e } = await ue.post("/admin/system/update", void 0, {
    timeout: Qf
  });
  return e;
}
async function u2(e) {
  const { data: t } = await ue.post(
    "/admin/system/rollback",
    e ? { version: e } : void 0,
    { timeout: Qf }
  );
  return t;
}
async function f2() {
  const { data: e } = await ue.post("/admin/system/restart");
  return e;
}
const ey = {
  getVersion: a2,
  checkUpdates: Xf,
  performUpdate: c2,
  getRollbackVersions: l2,
  rollback: u2,
  restartService: f2
};
function na(e) {
  return "requires_2fa" in e && e.requires_2fa === !0;
}
function ao(e) {
  localStorage.setItem("auth_token", e);
}
function lo(e) {
  localStorage.setItem("refresh_token", e);
}
function co(e) {
  const t = Date.now() + e * 1e3;
  localStorage.setItem("token_expires_at", String(t));
}
function Zf() {
  return localStorage.getItem("auth_token");
}
function ed() {
  return localStorage.getItem("refresh_token");
}
function d2() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function td() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function h2(e) {
  const { data: t } = await ue.post("/auth/login", e);
  return na(t) || (ao(t.access_token), t.refresh_token && lo(t.refresh_token), t.expires_in && co(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function p2(e) {
  const { data: t } = await ue.post("/auth/login/2fa", e);
  return ao(t.access_token), t.refresh_token && lo(t.refresh_token), t.expires_in && co(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function m2(e) {
  const { data: t } = await ue.post("/auth/register", e);
  return ao(t.access_token), t.refresh_token && lo(t.refresh_token), t.expires_in && co(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function g2() {
  return ue.get("/auth/me");
}
async function _2() {
  const e = ed();
  if (e)
    try {
      await ue.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  td();
}
function nd(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function y2(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function b2(e) {
  return y2(e) ? "login" : "bind";
}
function E2(e) {
  return b2(e);
}
function S2(e) {
  return e.error === "invitation_required";
}
function v2(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function w2() {
  return Jf();
}
async function A2() {
  const { data: e } = await ue.post("/auth/revoke-all-sessions");
  return e;
}
function T2() {
  return Zf() !== null;
}
async function rd() {
  const { data: e } = await ue.get("/settings/public");
  return e;
}
async function O2(e) {
  const { data: t } = await ue.post("/auth/send-verify-code", e);
  return t;
}
async function C2(e) {
  const { data: t } = await ue.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function R2(e) {
  const { data: t } = await ue.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function L2(e) {
  const { data: t } = await ue.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function P2(e) {
  const { data: t } = await ue.post("/auth/forgot-password", e);
  return t;
}
async function I2(e) {
  const { data: t } = await ue.post("/auth/reset-password", e);
  return t;
}
async function N2(e, t, n) {
  return sd(e, t, n);
}
async function x2(e, t, n) {
  return od(e, t, n);
}
async function k2(e, t, n) {
  return id(e, t, n);
}
async function uo(e, t, n, r) {
  const s = r == null ? void 0 : r.trim(), { data: o } = await ue.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...s ? { aff_code: s } : {},
      ...nd(n)
    }
  );
  return o;
}
async function sd(e, t, n) {
  return uo("linuxdo", e, t, n);
}
async function od(e, t, n) {
  return uo("oidc", e, t, n);
}
async function id(e, t, n) {
  return uo("wechat", e, t, n);
}
async function M2(e, t, n) {
  return uo("dingtalk", e, t, n);
}
async function ad(e) {
  const { data: t } = await ue.post(
    "/auth/oauth/pending/exchange",
    nd(e)
  );
  return t;
}
async function D2(e) {
  return ad(e);
}
const Un = {
  login: h2,
  login2FA: p2,
  isTotp2FARequired: na,
  register: m2,
  getCurrentUser: g2,
  logout: _2,
  isAuthenticated: T2,
  setAuthToken: ao,
  setRefreshToken: lo,
  setTokenExpiresAt: co,
  getAuthToken: Zf,
  getRefreshToken: ed,
  getTokenExpiresAt: d2,
  clearAuthToken: td,
  getPublicSettings: rd,
  sendVerifyCode: O2,
  sendPendingOAuthVerifyCode: C2,
  validatePromoCode: R2,
  validateInvitationCode: L2,
  forgotPassword: P2,
  resetPassword: I2,
  refreshToken: w2,
  revokeAllSessions: A2,
  getPendingOAuthBindLoginKind: E2,
  isPendingOAuthCreateAccountRequired: S2,
  hasPendingOAuthSuggestedProfile: v2,
  completePendingOAuthBindLogin: ad,
  createPendingLinuxDoOAuthAccount: sd,
  createPendingOIDCOAuthAccount: od,
  createPendingWeChatOAuthAccount: id,
  exchangePendingOAuthCompletion: D2,
  completeLinuxDoOAuthRegistration: N2,
  completeOIDCOAuthRegistration: x2,
  completeWeChatOAuthRegistration: k2,
  createPendingDingTalkOAuthAccount: M2
}, nc = "零一 API", ld = /* @__PURE__ */ ku("app", () => {
  const e = /* @__PURE__ */ de(!1), t = /* @__PURE__ */ de(!1), n = /* @__PURE__ */ de(0), r = /* @__PURE__ */ de(!1), s = /* @__PURE__ */ de([]), o = /* @__PURE__ */ de(!1), i = /* @__PURE__ */ de(!1), a = /* @__PURE__ */ de(nc), l = /* @__PURE__ */ de(""), u = /* @__PURE__ */ de(""), c = /* @__PURE__ */ de(""), f = /* @__PURE__ */ de(""), m = /* @__PURE__ */ de(""), E = /* @__PURE__ */ de(null);
  let A = null, T = null, P = 0;
  const p = /* @__PURE__ */ de(!1), y = /* @__PURE__ */ de(!1), R = /* @__PURE__ */ de(""), b = /* @__PURE__ */ de(""), I = /* @__PURE__ */ de(!1), $ = /* @__PURE__ */ de("source"), C = /* @__PURE__ */ de(null);
  let V = 0;
  const N = Re(() => s.value.length > 0), j = Re(() => {
    var _;
    return ((_ = E.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
  }), z = /* @__PURE__ */ de(0);
  function U() {
    e.value = !e.value;
  }
  function X(_) {
    e.value = _;
  }
  function te() {
    t.value = !t.value;
  }
  function _e(_) {
    t.value = _;
  }
  function Z(_) {
    _ ? z.value++ : z.value = Math.max(0, z.value - 1), r.value = z.value > 0;
  }
  function F(_, O, M) {
    const x = `toast-${++V}`, k = {
      id: x,
      type: _,
      message: O,
      duration: M,
      startTime: M !== void 0 ? Date.now() : void 0
    };
    return s.value.push(k), M !== void 0 && setTimeout(() => {
      ne(x);
    }, M), x;
  }
  function q(_, O = 3e3) {
    return F("success", _, O);
  }
  function fe(_, O = 5e3) {
    return F("error", _, O);
  }
  function Ce(_, O = 3e3) {
    return F("info", _, O);
  }
  function le(_, O = 4e3) {
    return F("warning", _, O);
  }
  function ne(_) {
    const O = s.value.findIndex((M) => M.id === _);
    O !== -1 && s.value.splice(O, 1);
  }
  function Ve() {
    s.value = [];
  }
  async function et(_) {
    Z(!0);
    try {
      return await _();
    } finally {
      Z(!1);
    }
  }
  async function st(_, O) {
    Z(!0);
    try {
      return await _();
    } catch (M) {
      const x = O || M.message || Bn.global.t("common.unknownError");
      return fe(x), null;
    } finally {
      Z(!1);
    }
  }
  function tt() {
    e.value = !1, r.value = !1, z.value = 0, s.value = [];
  }
  async function re(_ = !1) {
    if (p.value && !_)
      return {
        current_version: R.value,
        latest_version: b.value,
        has_update: I.value,
        build_type: $.value,
        release_info: C.value || void 0,
        cached: !0
      };
    if (y.value)
      return null;
    y.value = !0;
    try {
      const O = await Xf(_);
      return R.value = O.current_version, b.value = O.latest_version, I.value = O.has_update, $.value = O.build_type || "source", C.value = O.release_info || null, p.value = !0, O;
    } catch (O) {
      return console.error("Failed to fetch version:", O), null;
    } finally {
      y.value = !1;
    }
  }
  function Te() {
    p.value = !1, I.value = !1;
  }
  function Ye(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), E.value = _, a.value = _.site_name || nc, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", m.value = _.doc_url || "", o.value = !0;
  }
  function He(_ = !1) {
    if (A)
      return _ && !T && (P += 1, T = A.then(() => He(!0)).finally(() => {
        T = null;
      })), _ ? T : A;
    if (_ && (P += 1), !o.value && !_ && window.__APP_CONFIG__)
      return Ye(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
    if (o.value && !_)
      return E.value ? Promise.resolve({ ...E.value }) : Promise.resolve({
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
        subscription_enabled: !0,
        payment_balance_disabled: !1,
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
    const O = P;
    let M;
    try {
      M = rd();
    } catch (k) {
      return console.error("Failed to fetch public settings:", k), i.value = !1, Promise.resolve(null);
    }
    const x = M.then((k) => (O === P && Ye(k), k)).catch((k) => (console.error("Failed to fetch public settings:", k), null)).finally(() => {
      A === x && (A = null, i.value = !1);
    });
    return A = x, x;
  }
  function Yt() {
    P += 1, o.value = !1, E.value = null;
  }
  function g() {
    return window.__APP_CONFIG__ ? (Ye(window.__APP_CONFIG__), !0) : !1;
  }
  return {
    // State
    sidebarCollapsed: e,
    mobileOpen: t,
    sidebarScrollTop: n,
    loading: r,
    toasts: s,
    // Public settings state
    publicSettingsLoaded: o,
    siteName: a,
    siteLogo: l,
    siteVersion: u,
    contactInfo: c,
    apiBaseUrl: f,
    docUrl: m,
    cachedPublicSettings: E,
    // Version state
    versionLoaded: p,
    versionLoading: y,
    currentVersion: R,
    latestVersion: b,
    hasUpdate: I,
    buildType: $,
    releaseInfo: C,
    // Computed
    hasActiveToasts: N,
    backendModeEnabled: j,
    // Actions
    toggleSidebar: U,
    setSidebarCollapsed: X,
    toggleMobileSidebar: te,
    setMobileOpen: _e,
    setLoading: Z,
    showToast: F,
    showSuccess: q,
    showError: fe,
    showInfo: Ce,
    showWarning: le,
    hideToast: ne,
    clearAllToasts: Ve,
    withLoading: et,
    withLoadingAndError: st,
    reset: tt,
    // Version actions
    fetchVersion: re,
    clearVersionCache: Te,
    // Public settings actions
    fetchPublicSettings: He,
    clearPublicSettingsCache: Yt,
    initFromInjectedConfig: g
  };
}), F2 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, U2 = { class: "p-4" }, $2 = { class: "flex items-start gap-3" }, V2 = { class: "mt-0.5 flex-shrink-0" }, H2 = { class: "min-w-0 flex-1" }, j2 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, W2 = ["onClick"], B2 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, K2 = /* @__PURE__ */ kn({
  __name: "Toast",
  setup(e) {
    const t = ld(), n = Re(() => t.toasts), r = (l) => {
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
    }, s = (l) => {
      const u = {
        success: "text-zo-signal-500",
        error: "text-red-500",
        warning: "text-zo-alert-500",
        info: "text-blue-500"
      };
      return u[l] || u.info;
    }, o = (l) => {
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
    return (l, u) => (Ut(), vs(uh, { to: "body" }, [
      gt("div", F2, [
        Ie(xp, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: Uc(() => [
            (Ut(!0), ar(Ue, null, vh(n.value, (c) => (Ut(), ar("div", {
              key: c.id,
              class: rn([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                o(c.type)
              ])
            }, [
              gt("div", U2, [
                gt("div", $2, [
                  gt("div", V2, [
                    Ie(Qa, {
                      name: r(c.type),
                      size: "md",
                      class: rn(s(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  gt("div", H2, [
                    c.title ? (Ut(), ar("p", j2, Uo(c.title), 1)) : Go("", !0),
                    gt("p", {
                      class: rn([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, Uo(c.message), 3)
                  ]),
                  gt("button", {
                    onClick: (f) => a(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    Ie(Qa, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, W2)
                ])
              ]),
              c.duration ? (Ut(), ar("div", B2, [
                gt("div", {
                  class: rn(["h-full toast-progress", i(c.type)]),
                  style: js({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : Go("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), z2 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, q2 = /* @__PURE__ */ z2(K2, [["__scopeId", "data-v-fc5fa96e"]]);
function cd() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function _r(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (o) => o.charCodeAt(0)).buffer;
}
function nn(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function G2(e) {
  const t = { ...e };
  t.challenge = _r(String(t.challenge));
  const n = { ...t.user };
  return n.id = _r(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: _r(String(r.id))
  }))), t;
}
function Y2(e) {
  const t = { ...e };
  return t.challenge = _r(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: _r(String(n.id))
  }))), t;
}
function J2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: nn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: nn(t.attestationObject),
      clientDataJSON: nn(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function X2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: nn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: nn(t.authenticatorData),
      clientDataJSON: nn(t.clientDataJSON),
      signature: nn(t.signature),
      userHandle: nn(t.userHandle)
    }
  };
}
async function Q2(e) {
  cd();
  const { data: t } = e ? await ue.post("/auth/passkey/login/begin", e) : await ue.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: Y2(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await ue.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: X2(n)
  });
  return r;
}
async function Z2(e, t) {
  cd();
  const { data: n } = await ue.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: G2(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: s } = await ue.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: J2(r)
    }
  );
  return s;
}
async function e5() {
  const { data: e } = await ue.get("/user/passkeys");
  return e;
}
async function t5(e, t) {
  await ue.patch(`/user/passkeys/${e}`, { name: t });
}
async function n5(e, t) {
  await ue.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const r5 = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: Q2,
  register: Z2,
  list: e5,
  rename: t5,
  remove: n5
}, ns = "auth_token", Fo = "auth_user", rs = "refresh_token", ss = "token_expires_at", yr = "pending_auth_session", s5 = 60 * 1e3, o5 = 120 * 1e3;
function i5(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function rc() {
  const e = localStorage.getItem(yr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: i5(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(yr), null);
  } catch {
    return localStorage.removeItem(yr), null;
  }
}
function a5(e) {
  localStorage.setItem(yr, JSON.stringify(e));
}
function sc() {
  localStorage.removeItem(yr);
}
const l5 = /* @__PURE__ */ ku("auth", () => {
  const e = /* @__PURE__ */ de(null), t = /* @__PURE__ */ de(null), n = /* @__PURE__ */ de(null), r = /* @__PURE__ */ de(null), s = /* @__PURE__ */ de("standard"), o = /* @__PURE__ */ de(null);
  let i = null, a = null;
  const l = Re(() => !!t.value && !!e.value), u = Re(() => {
    var F;
    return ((F = e.value) == null ? void 0 : F.role) === "admin";
  }), c = Re(() => s.value === "simple"), f = Re(() => o.value !== null);
  function m(F, q) {
    const { run_mode: fe, ...Ce } = F;
    return s.value = q ?? (fe === "simple" ? "simple" : "standard"), e.value = Ce, localStorage.setItem(
      Fo,
      JSON.stringify({ ...Ce, run_mode: s.value })
    ), e.value;
  }
  function E(F) {
    const q = localStorage.getItem(ns), fe = localStorage.getItem(Fo), Ce = localStorage.getItem(rs), le = localStorage.getItem(ss);
    if (o.value = rc(), q && fe)
      try {
        const ne = JSON.parse(fe);
        return t.value = q, m(ne, F), n.value = Ce, r.value = le ? parseInt(le, 10) : null, !0;
      } catch (ne) {
        console.error("Failed to parse saved user data:", ne), Z({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function A(F) {
    s.value = F;
  }
  function T() {
    E() && (_e().catch((F) => {
      console.error("Failed to refresh user on init:", F);
    }), P(), n.value && r.value !== null && y(r.value));
  }
  function P() {
    p(), i = setInterval(() => {
      t.value && _e().catch((F) => {
        console.error("Auto-refresh user failed:", F);
      });
    }, s5);
  }
  function p() {
    i && (clearInterval(i), i = null);
  }
  function y(F) {
    a && (clearTimeout(a), a = null);
    const q = Date.now(), fe = Math.max(0, F - q - o5);
    if (fe <= 0) {
      b();
      return;
    }
    a = setTimeout(() => {
      b();
    }, fe);
  }
  function R(F) {
    const q = Date.now() + F * 1e3;
    r.value = q, localStorage.setItem(ss, String(q)), y(q);
  }
  async function b() {
    if (n.value)
      try {
        const F = await Un.refreshToken();
        t.value = F.access_token, n.value = F.refresh_token, R(F.expires_in);
      } catch (F) {
        console.error("Token refresh failed:", F);
      }
  }
  function I() {
    a && (clearTimeout(a), a = null);
  }
  async function $(F) {
    try {
      const q = await Un.login(F);
      return na(q) || N(q), q;
    } catch (q) {
      throw Z({ preservePendingAuthSession: o.value !== null }), q;
    }
  }
  async function C(F, q) {
    try {
      const fe = await Un.login2FA({ temp_token: F, totp_code: q });
      return N(fe), e.value;
    } catch (fe) {
      throw Z({ preservePendingAuthSession: o.value !== null }), fe;
    }
  }
  async function V(F) {
    try {
      const q = await r5.login(F);
      return N(q), e.value;
    } catch (q) {
      throw Z({ preservePendingAuthSession: o.value !== null }), q;
    }
  }
  function N(F) {
    t.value = F.access_token, F.refresh_token && (n.value = F.refresh_token, localStorage.setItem(rs, F.refresh_token)), m(F.user), localStorage.setItem(ns, F.access_token), X(), P(), F.refresh_token && F.expires_in && R(F.expires_in);
  }
  async function j(F) {
    try {
      const q = await Un.register(F);
      return N(q), e.value;
    } catch (q) {
      throw Z({ preservePendingAuthSession: o.value !== null }), q;
    }
  }
  async function z(F) {
    p(), I(), t.value = null, e.value = null, s.value = "standard", t.value = F, localStorage.setItem(ns, F);
    const q = localStorage.getItem(rs), fe = localStorage.getItem(ss);
    q && (n.value = q), fe && (r.value = parseInt(fe, 10));
    try {
      const Ce = await _e();
      return P(), q && r.value !== null && y(r.value), X(), Ce;
    } catch (Ce) {
      throw Z({ preservePendingAuthSession: o.value !== null }), Ce;
    }
  }
  function U(F) {
    if (o.value = F, F) {
      a5(F);
      return;
    }
    sc();
  }
  function X() {
    U(null);
  }
  async function te() {
    try {
      await Un.logout();
    } catch (F) {
      console.warn("Logout API call failed, clearing local session anyway", F);
    } finally {
      Z();
    }
  }
  async function _e() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const F = await Un.getCurrentUser();
      return m(F.data);
    } catch (F) {
      throw F.status === 401 && Z({ preservePendingAuthSession: o.value !== null }), F;
    }
  }
  function Z(F) {
    if (p(), I(), t.value = null, n.value = null, r.value = null, e.value = null, s.value = "standard", localStorage.removeItem(ns), localStorage.removeItem(Fo), localStorage.removeItem(rs), localStorage.removeItem(ss), F != null && F.preservePendingAuthSession) {
      o.value = rc();
      return;
    }
    o.value = null, sc();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: /* @__PURE__ */ Sr(s),
    pendingAuthSession: /* @__PURE__ */ Sr(o),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: $,
    loginWithPasskey: V,
    login2FA: C,
    register: j,
    setToken: z,
    logout: te,
    checkAuth: T,
    hydrateAuthSnapshot: E,
    setRunModeSnapshot: A,
    refreshUser: _e,
    setPendingAuthSession: U,
    clearPendingAuthSession: X
  };
}), c5 = {
  accounts: () => import("./AccountsView-Bd4DLk7e.js"),
  groups: () => import("./GroupsView-CLVubb1Y.js"),
  channels: () => import("./ChannelsView-CkYRd5wr.js"),
  "channel-monitor": () => import("./ChannelMonitorView-B2P-vEa0.js"),
  "channel-status": () => import("./ChannelStatusView-DbwGG4UP.js"),
  ops: () => import("./OpsDashboard-BBYvn9Qf.js"),
  subscriptions: () => import("./SubscriptionsView-5N99SdWY.js"),
  settings: () => import("./SettingsView-CcXfmiqO.js")
};
function u5() {
  var t, n, r;
  const e = document.querySelector("#app");
  return ((r = (n = (t = e == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$router) || null;
}
function f5(e) {
  const t = u5();
  if (!t) return;
  const n = {};
  for (const r in t.currentRoute.value)
    Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t.currentRoute.value[r]
    });
  e.component("RouterLink", cm), e.provide(eo, t), e.provide(xi, /* @__PURE__ */ Lc(n));
}
async function d5(e, t) {
  const [{ default: n }] = await Promise.all([
    c5[e](),
    I1()
  ]), r = Qp(), s = ld(r), o = l5(r);
  s.initFromInjectedConfig(), o.hydrateAuthSnapshot(t.runMode);
  const a = Yp(/* @__PURE__ */ kn({
    name: "ZeroOneCNProviderAdminRoot",
    setup: () => () => [un(n), un(q2)]
  }));
  a.use(r), f5(a), a.use(Bn);
  let l = !1;
  async function u(c) {
    o.setRunModeSnapshot(c.runMode), Bn.global.locale.value !== c.locale && (await mf(c.locale), Bn.global.locale.value = c.locale);
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
const ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prepareCNProviderSurface: d5
}, Symbol.toStringTag, { value: "Module" }));
export {
  P5 as $,
  R5 as A,
  vs as B,
  wi as C,
  Vp as D,
  Uc as E,
  Ue as F,
  Hp as G,
  $p as H,
  g5 as I,
  Yc as J,
  un as K,
  y5 as L,
  T5 as M,
  E5 as N,
  w5 as O,
  A5 as P,
  Q5 as Q,
  j_ as R,
  Xh as S,
  uh as T,
  I5 as U,
  hn as V,
  ue as W,
  v5 as X,
  S5 as Y,
  L5 as Z,
  Qa as _,
  de as a,
  Oe as a0,
  gi as a1,
  pc as a2,
  m5 as a3,
  Pc as a4,
  ap as a5,
  Ks as a6,
  gf as a7,
  Bn as a8,
  h5 as a9,
  b5 as aa,
  O5 as ab,
  Kd as ac,
  ku as ad,
  _5 as ae,
  Z5 as af,
  ey as ag,
  oh as ah,
  vi as ai,
  ty as aj,
  Oi as b,
  Wi as c,
  kn as d,
  Ut as e,
  ar as f,
  gt as g,
  Uo as h,
  dr as i,
  Ie as j,
  l5 as k,
  Jh as l,
  p5 as m,
  Go as n,
  Ci as o,
  vh as p,
  rn as q,
  Fr as r,
  Re as s,
  oe as t,
  ld as u,
  Ha as v,
  an as w,
  js as x,
  z2 as y,
  C5 as z
};
