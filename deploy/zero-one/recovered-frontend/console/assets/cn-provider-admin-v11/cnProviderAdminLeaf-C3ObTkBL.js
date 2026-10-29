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
const de = {}, Tn = [], It = () => {
}, rc = () => !1, xs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ds = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, hi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ld = Object.prototype.hasOwnProperty, pe = (e, t) => ld.call(e, t), X = Array.isArray, an = (e) => Ur(e) === "[object Map]", qt = (e) => Ur(e) === "[object Set]", ra = (e) => Ur(e) === "[object Date]", re = (e) => typeof e == "function", we = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", _e = (e) => e !== null && typeof e == "object", sc = (e) => (_e(e) || re(e)) && re(e.then) && re(e.catch), oc = Object.prototype.toString, Ur = (e) => oc.call(e), cd = (e) => Ur(e).slice(8, -1), ic = (e) => Ur(e) === "[object Object]", Fs = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hr = /* @__PURE__ */ di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ud = /-\w/g, Xe = Us(
  (e) => e.replace(ud, (t) => t.slice(1).toUpperCase())
), fd = /\B([A-Z])/g, Xt = Us(
  (e) => e.replace(fd, "-$1").toLowerCase()
), $s = Us((e) => e.charAt(0).toUpperCase() + e.slice(1)), po = Us(
  (e) => e ? `on${$s(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), as = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ac = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Hs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, dd = (e) => {
  const t = we(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let sa;
const Vs = () => sa || (sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function js(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = we(r) ? _d(r) : js(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (we(e) || _e(e))
    return e;
}
const hd = /;(?![^(]*\))/g, md = /:([^]+)/, pd = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function _d(e) {
  const t = {};
  return e.replace(pd, (n) => n.startsWith("/*") ? "" : n).split(hd).forEach((n) => {
    if (n) {
      const r = n.split(md);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function on(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const r = on(e[n]);
      r && (t += r + " ");
    }
  else if (_e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bd = /* @__PURE__ */ di(gd);
function lc(e) {
  return !!e || e === "";
}
function yd(e, t, n) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let s = 0; r && s < e.length; s++)
    r = At(e[s], t[s], n);
  return r;
}
function oa(e, t, n) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), s = new Uint8Array(r.length);
  for (const o of e) {
    let i = -1;
    for (let a = 0; a < r.length; a++)
      if (!s[a] && At(o, r[a], n)) {
        i = a;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function Ed(e, t, n) {
  let r = an(e), s = an(t);
  if (r || s || (r = qt(e), s = qt(t), r || s))
    return r && s ? oa(e, t, n) : !1;
  const o = Object.keys(e).length, i = Object.keys(t).length;
  if (o !== i)
    return !1;
  for (const a in e) {
    const l = e.hasOwnProperty(a), u = t.hasOwnProperty(a);
    if (l && !u || !l && u || !At(e[a], t[a], n))
      return !1;
  }
  return String(e) === String(t);
}
function ia(e, t, n, r) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [s, o] = n;
  if (s.has(e) || o.has(t))
    return s.get(e) === t && o.get(t) === e;
  s.set(e, t), o.set(t, e);
  const i = r(e, t, n);
  return s.delete(e), o.delete(t), i;
}
function At(e, t, n) {
  if (e === t) return !0;
  let r = ra(e), s = ra(t);
  return r || s ? r && s ? e.getTime() === t.getTime() : !1 : (r = ut(e), s = ut(t), r || s ? e === t : (r = X(e), s = X(t), r || s ? r && s ? ia(e, t, n, yd) : !1 : (r = _e(e), s = _e(t), r || s ? !r || !s ? !1 : ia(e, t, n, Ed) : String(e) === String(t))));
}
function mi(e, t) {
  return e.findIndex((n) => At(n, t));
}
const cc = (e) => !!(e && e.__v_isRef === !0), $o = (e) => we(e) ? e : e == null ? "" : X(e) || _e(e) && (e.toString === oc || !re(e.toString)) ? cc(e) ? $o(e.value) : JSON.stringify(e, uc, 2) : String(e), uc = (e, t) => cc(t) ? uc(e, t.value) : an(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[_o(r, o) + " =>"] = s, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _o(n))
} : ut(t) ? _o(t) : _e(t) && !X(t) && !ic(t) ? String(t) : t, _o = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ie;
class fc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ie && (Ie.active ? (this.parent = Ie, this.index = (Ie.scopes || (Ie.scopes = [])).push(
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
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ie, Ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ie === this)
        Ie = this.prevScope;
      else {
        let t = Ie;
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
function pi(e) {
  return new fc(e);
}
function dc() {
  return Ie;
}
function vd(e, t = !1) {
  Ie && Ie.cleanups.push(e);
}
let ve;
const go = /* @__PURE__ */ new WeakSet();
class hc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && (Ie.active ? Ie.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, aa(this), _c(this);
    const t = ve, n = vt;
    ve = this, vt = !0;
    try {
      return this.fn();
    } finally {
      gc(this), ve = t, vt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bi(t);
      this.deps = this.depsTail = void 0, aa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? go.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ho(this) && this.run();
  }
  get dirty() {
    return Ho(this);
  }
}
let mc = 0, mr, pr;
function pc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pr, pr = e;
    return;
  }
  e.next = mr, mr = e;
}
function _i() {
  mc++;
}
function gi() {
  if (--mc > 0)
    return;
  if (pr) {
    let t = pr;
    for (pr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; mr; ) {
    let t = mr;
    for (mr = void 0; t; ) {
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
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), bi(r), Sd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Ho(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (bc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function bc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ar) || (e.globalVersion = Ar, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ho(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ve, r = vt;
  ve = e, vt = !0;
  try {
    _c(e);
    const s = e.fn(e._value);
    (t.version === 0 || Ve(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ve = n, vt = r, gc(e), e.flags &= -3;
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
function Sd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vt = !0;
const yc = [];
function Gt() {
  yc.push(vt), vt = !1;
}
function Yt() {
  const e = yc.pop();
  vt = e === void 0 ? !0 : e;
}
function aa(e) {
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
let Ar = 0;
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
    if (!ve || !vt || ve === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ve)
      n = this.activeLink = new Ad(ve, this), ve.deps ? (n.prevDep = ve.depsTail, ve.depsTail.nextDep = n, ve.depsTail = n) : ve.deps = ve.depsTail = n, Ec(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ve.depsTail, n.nextDep = void 0, ve.depsTail.nextDep = n, ve.depsTail = n, ve.deps === n && (ve.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ar++, this.notify(t);
  }
  notify(t) {
    _i();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      gi();
    }
  }
}
function Ec(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ec(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ps = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ Symbol(
  ""
), Vo = /* @__PURE__ */ Symbol(
  ""
), wr = /* @__PURE__ */ Symbol(
  ""
);
function qe(e, t, n) {
  if (vt && ve) {
    let r = ps.get(e);
    r || ps.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ws()), s.map = r, s.key = n), s.track();
  }
}
function Vt(e, t, n, r, s, o) {
  const i = ps.get(e);
  if (!i) {
    Ar++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (_i(), t === "clear")
    i.forEach(a);
  else {
    const l = X(e), u = l && Fs(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, m) => {
        (m === "length" || m === wr || !ut(m) && m >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(wr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Rn)), an(e) && a(i.get(Vo)));
          break;
        case "delete":
          l || (a(i.get(Rn)), an(e) && a(i.get(Vo)));
          break;
        case "set":
          an(e) && a(i.get(Rn));
          break;
      }
  }
  gi();
}
function wd(e, t) {
  const n = ps.get(e);
  return n && n.get(t);
}
function Fn(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e || (qe(t, "iterate", wr), /* @__PURE__ */ ct(e)) ? t : /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Mt(e) ? t.map((n) => ln(mt(n))) : t.map(ln) : t.map(mt);
}
function Bs(e) {
  return qe(e = /* @__PURE__ */ ce(e), "iterate", wr), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ xt(e) ? ln(/* @__PURE__ */ Mt(e) ? mt(t) : t) : mt(t);
}
const Td = {
  __proto__: null,
  [Symbol.iterator]() {
    return bo(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return Fn(this).concat(
      ...e.map((t) => X(t) ? Fn(t) : t)
    );
  },
  entries() {
    return bo(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
  },
  every(e, t) {
    return Dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Dt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ct(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Dt(
      this,
      "find",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Dt(
      this,
      "findLast",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yo(this, "includes", e);
  },
  indexOf(...e) {
    return yo(this, "indexOf", e);
  },
  join(e) {
    return Fn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return er(this, "pop");
  },
  push(...e) {
    return er(this, "push", e);
  },
  reduce(e, ...t) {
    return la(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return la(this, "reduceRight", e, t);
  },
  shift() {
    return er(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return er(this, "splice", e);
  },
  toReversed() {
    return Fn(this).toReversed();
  },
  toSorted(e) {
    return Fn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Fn(this).toSpliced(...e);
  },
  unshift(...e) {
    return er(this, "unshift", e);
  },
  values() {
    return bo(this, "values", (e) => Ct(this, e));
  }
};
function bo(e, t, n) {
  const r = Bs(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ct(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o;
  }), s;
}
const Od = Array.prototype;
function Dt(e, t, n, r, s, o) {
  const i = Bs(e), a = i !== e && !/* @__PURE__ */ ct(e), l = i[t];
  if (l !== Od[t]) {
    const f = l.apply(e, o);
    return a ? mt(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, m) {
    return n.call(this, Ct(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const c = l.call(i, u, r);
  return a && s ? s(c) : c;
}
function la(e, t, n, r) {
  const s = Bs(e), o = s !== e && !/* @__PURE__ */ ct(e);
  let i = n, a = !1;
  s !== e && (o ? (a = r.length === 0, i = function(u, c, f) {
    return a && (a = !1, u = Ct(e, u)), n.call(this, u, Ct(e, c), f, e);
  }) : n.length > 3 && (i = function(u, c, f) {
    return n.call(this, u, c, f, e);
  }));
  const l = s[t](i, ...r);
  return a ? Ct(e, l) : l;
}
function yo(e, t, n) {
  const r = /* @__PURE__ */ ce(e);
  qe(r, "iterate", wr);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ks(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), r[t](...n)) : s;
}
function er(e, t, n = []) {
  Gt(), _i();
  const r = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return gi(), Yt(), r;
}
const Ld = /* @__PURE__ */ di("__proto__,__v_isRef,__isVue"), vc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function Rd(e) {
  ut(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return qe(t, "has", e), t.hasOwnProperty(e);
}
class Sc {
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
      return r === (s ? o ? Ud : Oc : o ? Tc : wc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = X(t);
    if (!s) {
      let l;
      if (i && (l = Td[n]))
        return l;
      if (n === "hasOwnProperty")
        return Rd;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Re(t) ? t : r
    );
    if ((ut(n) ? vc.has(n) : Ld(n)) || (s || qe(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Re(a)) {
      const l = i && Fs(n) ? a : a.value;
      return s && _e(l) ? /* @__PURE__ */ Tr(l) : l;
    }
    return _e(a) ? s ? /* @__PURE__ */ Tr(a) : /* @__PURE__ */ $r(a) : a;
  }
}
class Ac extends Sc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    const i = X(t) && Fs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ xt(o);
      if (!/* @__PURE__ */ ct(r) && !/* @__PURE__ */ xt(r) && (o = /* @__PURE__ */ ce(o), r = /* @__PURE__ */ ce(r)), !i && /* @__PURE__ */ Re(o) && !/* @__PURE__ */ Re(r))
        return u || (o.value = r), !0;
    }
    const a = i ? Number(n) < t.length : pe(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Re(t) ? t : s
    );
    return t === /* @__PURE__ */ ce(s) && l && (a ? Ve(r, o) && Vt(t, "set", n, r) : Vt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = pe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Vt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ut(n) || !vc.has(n)) && qe(t, "has", n), r;
  }
  ownKeys(t) {
    return qe(
      t,
      "iterate",
      X(t) ? "length" : Rn
    ), Reflect.ownKeys(t);
  }
}
class Cd extends Sc {
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
const Pd = /* @__PURE__ */ new Ac(), Nd = /* @__PURE__ */ new Cd(), Id = /* @__PURE__ */ new Ac(!0);
const jo = (e) => e, qr = (e) => Reflect.getPrototypeOf(e);
function Md(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = /* @__PURE__ */ ce(s), i = an(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), c = n ? jo : t ? ln : mt;
    return !t && qe(
      o,
      "iterate",
      l ? Vo : Rn
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
function Gr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kd(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ ce(o), a = /* @__PURE__ */ ce(s);
      e || (Ve(s, a) && qe(i, "get", s), qe(i, "get", a));
      const { has: l } = qr(i), u = t ? jo : e ? ln : mt;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && qe(/* @__PURE__ */ ce(s), "iterate", Rn), s.size;
    },
    has(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ ce(o), a = /* @__PURE__ */ ce(s);
      return e || (Ve(s, a) && qe(i, "has", s), qe(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = /* @__PURE__ */ ce(a), u = t ? jo : e ? ln : mt;
      return !e && qe(l, "iterate", Rn), a.forEach((c, f) => s.call(o, u(c), u(f), i));
    }
  };
  return Pe(
    n,
    e ? {
      add: Gr("add"),
      set: Gr("set"),
      delete: Gr("delete"),
      clear: Gr("clear")
    } : {
      add(s) {
        const o = /* @__PURE__ */ ce(this), i = qr(o), a = /* @__PURE__ */ ce(s), l = !t && !/* @__PURE__ */ ct(s) && !/* @__PURE__ */ xt(s) ? a : s;
        return i.has.call(o, l) || Ve(s, l) && i.has.call(o, s) || Ve(a, l) && i.has.call(o, a) || (o.add(l), Vt(o, "add", l, l)), this;
      },
      set(s, o) {
        !t && !/* @__PURE__ */ ct(o) && !/* @__PURE__ */ xt(o) && (o = /* @__PURE__ */ ce(o));
        const i = /* @__PURE__ */ ce(this), { has: a, get: l } = qr(i);
        let u = a.call(i, s);
        u || (s = /* @__PURE__ */ ce(s), u = a.call(i, s));
        const c = l.call(i, s);
        return i.set(s, o), u ? Ve(o, c) && Vt(i, "set", s, o) : Vt(i, "add", s, o), this;
      },
      delete(s) {
        const o = /* @__PURE__ */ ce(this), { has: i, get: a } = qr(o);
        let l = i.call(o, s);
        l || (s = /* @__PURE__ */ ce(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && Vt(o, "delete", s, void 0), u;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), o = s.size !== 0, i = s.clear();
        return o && Vt(
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
    n[s] = Md(s, e, t);
  }), n;
}
function yi(e, t) {
  const n = kd(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    pe(n, s) && s in r ? n : r,
    s,
    o
  );
}
const xd = {
  get: /* @__PURE__ */ yi(!1, !1)
}, Dd = {
  get: /* @__PURE__ */ yi(!1, !0)
}, Fd = {
  get: /* @__PURE__ */ yi(!0, !1)
};
const wc = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), Ud = /* @__PURE__ */ new WeakMap();
function $d(e) {
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
function $r(e) {
  return /* @__PURE__ */ xt(e) ? e : Ei(
    e,
    !1,
    Pd,
    xd,
    wc
  );
}
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  return Ei(
    e,
    !1,
    Id,
    Dd,
    Tc
  );
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return Ei(
    e,
    !0,
    Nd,
    Fd,
    Oc
  );
}
function Ei(e, t, n, r, s) {
  if (!_e(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = $d(cd(e));
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function vi(e) {
  return !pe(e, "__v_skip") && Object.isExtensible(e) && ac(e, "__v_skip", !0), e;
}
const mt = (e) => _e(e) ? /* @__PURE__ */ $r(e) : e, ln = (e) => _e(e) ? /* @__PURE__ */ Tr(e) : e;
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return Rc(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return Rc(e, !0);
}
function Rc(e, t) {
  return /* @__PURE__ */ Re(e) ? e : new Hd(e, t);
}
class Hd {
  constructor(t, n) {
    this.dep = new Ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ce(t), this._value = n ? t : mt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ct(t) || /* @__PURE__ */ xt(t);
    t = r ? t : /* @__PURE__ */ ce(t), Ve(t, n) && (this._rawValue = t, this._value = r ? t : mt(t), this.dep.trigger());
  }
}
function a5(e) {
  e.dep && e.dep.trigger();
}
function _r(e) {
  return /* @__PURE__ */ Re(e) ? e.value : e;
}
const Vd = {
  get: (e, t, n) => t === "__v_raw" ? e : _r(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Re(s) && !/* @__PURE__ */ Re(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Cc(e) {
  return /* @__PURE__ */ Mt(e) ? e : new Proxy(e, Vd);
}
class jd {
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
function Wd(e) {
  return new jd(e);
}
// @__NO_SIDE_EFFECTS__
function Bd(e) {
  const t = X(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = zd(e, n);
  return t;
}
class Kd {
  constructor(t, n, r) {
    this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = ut(n) ? n : String(n), this._raw = /* @__PURE__ */ ce(t);
    let s = !0, o = t;
    if (!X(t) || ut(this._key) || !Fs(this._key))
      do
        s = !/* @__PURE__ */ Ks(o) || /* @__PURE__ */ ct(o);
      while (s && (o = o.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = _r(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Re(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Re(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return wd(this._raw, this._key);
  }
}
function zd(e, t, n) {
  return new Kd(e, t, n);
}
class qd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ar - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ve !== this)
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
// @__NO_SIDE_EFFECTS__
function Gd(e, t, n = !1) {
  let r, s;
  return re(e) ? r = e : (r = e.get, s = e.set), new qd(r, s, n);
}
const Yr = {}, _s = /* @__PURE__ */ new WeakMap();
let Sn;
function Yd(e, t = !1, n = Sn) {
  if (n) {
    let r = _s.get(n);
    r || _s.set(n, r = []), r.push(e);
  }
}
function Xd(e, t, n = de) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (b) => s ? b : /* @__PURE__ */ ct(b) || s === !1 || s === 0 ? jt(b, 1) : jt(b);
  let c, f, m, y, T = !1, A = !1;
  if (/* @__PURE__ */ Re(e) ? (f = () => e.value, T = /* @__PURE__ */ ct(e)) : /* @__PURE__ */ Mt(e) ? (f = () => u(e), T = !0) : X(e) ? (A = !0, T = e.some((b) => /* @__PURE__ */ Mt(b) || /* @__PURE__ */ ct(b)), f = () => e.map((b) => {
    if (/* @__PURE__ */ Re(b))
      return b.value;
    if (/* @__PURE__ */ Mt(b))
      return u(b);
    if (re(b))
      return l ? l(b, 2) : b();
  })) : re(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (m) {
      Gt();
      try {
        m();
      } finally {
        Yt();
      }
    }
    const b = Sn;
    Sn = c;
    try {
      return l ? l(e, 3, [y]) : e(y);
    } finally {
      Sn = b;
    }
  } : f = It, t && s) {
    const b = f, C = s === !0 ? 1 / 0 : s;
    f = () => jt(b(), C);
  }
  const M = dc(), v = () => {
    c.stop(), M && M.active && hi(M.effects, c);
  };
  if (o && t) {
    const b = t;
    t = (...C) => {
      const N = b(...C);
      return v(), N;
    };
  }
  let w = A ? new Array(e.length).fill(Yr) : Yr;
  const E = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const C = c.run();
        if (b || s || T || (A ? C.some((N, P) => Ve(N, w[P])) : Ve(C, w))) {
          m && m();
          const N = Sn;
          Sn = c;
          try {
            const P = [
              C,
              // pass undefined as the old value when it's changed for the first time
              w === Yr ? void 0 : A && w[0] === Yr ? [] : w,
              y
            ];
            w = C, l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            Sn = N;
          }
        }
      } else
        c.run();
  };
  return a && a(E), c = new hc(f), c.scheduler = i ? () => i(E, !1) : E, y = (b) => Yd(b, !1, c), m = c.onStop = () => {
    const b = _s.get(c);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const C of b) C();
      _s.delete(c);
    }
  }, t ? r ? E(!0) : w = c.run() : i ? i(E.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !_e(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Re(e))
    jt(e.value, t, n);
  else if (X(e))
    for (let r = 0; r < e.length; r++)
      jt(e[r], t, n);
  else if (qt(e) || an(e))
    e.forEach((r) => {
      jt(r, t, n);
    });
  else if (ic(e)) {
    for (const r in e)
      jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    zs(s, t, n);
  }
}
function pt(e, t, n, r) {
  if (re(e)) {
    const s = Hr(e, t, n, r);
    return s && sc(s) && s.catch((o) => {
      zs(o, t, n);
    }), s;
  }
  if (X(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(pt(e[o], t, n, r));
    return s;
  }
}
function zs(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || de;
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
      Gt(), Hr(o, null, 10, [
        e,
        l,
        u
      ]), Yt();
      return;
    }
  }
  Jd(e, n, s, r, i);
}
function Jd(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const rt = [];
let Rt = -1;
const Wn = [];
let rn = null, Vn = 0;
const Pc = /* @__PURE__ */ Promise.resolve();
let gs = null;
function Ai(e) {
  const t = gs || Pc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qd(e) {
  let t = Rt + 1, n = rt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = rt[r], o = Or(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function wi(e) {
  if (!(e.flags & 1)) {
    const t = Or(e), n = rt[rt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Or(n) ? rt.push(e) : rt.splice(Qd(t), 0, e), e.flags |= 1, Nc();
  }
}
function Nc() {
  gs || (gs = Pc.then(Mc));
}
function Zd(e) {
  if (!X(e))
    rn && e.id === -1 ? rn.splice(Vn + 1, 0, e) : e.flags & 1 || (Wn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wn.push(e[t]);
  Nc();
}
function ca(e, t, n = Rt + 1) {
  for (; n < rt.length; n++) {
    const r = rt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      rt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ic(e) {
  if (Wn.length) {
    const t = [...new Set(Wn)].sort(
      (n, r) => Or(n) - Or(r)
    );
    if (Wn.length = 0, rn) {
      for (let n = 0; n < t.length; n++)
        rn.push(t[n]);
      return;
    }
    for (rn = t, Vn = 0; Vn < rn.length; Vn++) {
      const n = rn[Vn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rn = null, Vn = 0;
  }
}
const Or = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mc(e) {
  try {
    for (Rt = 0; Rt < rt.length; Rt++) {
      const t = rt[Rt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Hr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rt < rt.length; Rt++) {
      const t = rt[Rt];
      t && (t.flags &= -2);
    }
    Rt = -1, rt.length = 0, Ic(), gs = null, (rt.length || Wn.length) && Mc();
  }
}
let We = null, kc = null;
function bs(e) {
  const t = We;
  return We = e, kc = e && e.type.__scopeId || null, t;
}
function xc(e, t = We, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && As(-1);
    const o = bs(t), i = zt.length;
    let a;
    try {
      a = e(...s);
    } finally {
      for (let l = zt.length; l > i; l--) Ni();
      bs(o), r._d && As(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function l5(e, t) {
  if (We === null)
    return e;
  const n = Qs(We), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = de] = t[s];
    o && (re(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && jt(i), r.push({
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
function gn(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Gt(), pt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Yt());
  }
}
function eh(e, t) {
  if (Ye) {
    let n = Ye.provides;
    const r = Ye.parent && Ye.parent.provides;
    r === n && (n = Ye.provides = Object.create(r)), n[e] = t;
  }
}
function St(e, t, n = !1) {
  const r = _t();
  if (r || Pn) {
    let s = Pn ? Pn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(r && r.proxy) : t;
  }
}
function th() {
  return !!(_t() || Pn);
}
const nh = /* @__PURE__ */ Symbol.for("v-scx"), rh = () => St(nh);
function c5(e, t) {
  return qs(e, null, t);
}
function sh(e, t) {
  return qs(
    e,
    null,
    { flush: "sync" }
  );
}
function Cn(e, t, n) {
  return qs(e, t, n);
}
function qs(e, t, n = de) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = Pe({}, n), l = t && r || !t && o !== "post";
  let u;
  if (Nr) {
    if (o === "sync") {
      const y = rh();
      u = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!l) {
      const y = () => {
      };
      return y.stop = It, y.resume = It, y.pause = It, y;
    }
  }
  const c = Ye;
  a.call = (y, T, A) => pt(y, c, T, A);
  let f = !1;
  o === "post" ? a.scheduler = (y) => {
    tt(y, c && c.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (y, T) => {
    T ? y() : wi(y);
  }), a.augmentJob = (y) => {
    t && (y.flags |= 4), f && (y.flags |= 2, c && (y.id = c.uid, y.i = c));
  };
  const m = Xd(e, t, a);
  return Nr && (u ? u.push(m) : l && m()), m;
}
function oh(e, t, n) {
  const r = this.proxy, s = we(e) ? e.includes(".") ? Dc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  re(t) ? o = t : (o = t.handler, n = t);
  const i = jr(this), a = qs(s, o.bind(r), n);
  return i(), a;
}
function Dc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const en = /* @__PURE__ */ new WeakMap(), Fc = /* @__PURE__ */ Symbol("_vte"), Gs = (e) => e.__isTeleport, An = (e) => e && (e.disabled || e.disabled === ""), ih = (e) => e && (e.defer || e.defer === ""), ua = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Wo = (e, t) => {
  const n = e && e.to;
  return we(n) ? t ? t(n) : null : n;
}, ah = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: m,
      o: { insert: y, querySelector: T, createText: A, createComment: M, parentNode: v }
    } = u, w = An(t.props);
    let { dynamicChildren: E } = t;
    const b = (P, k, O) => {
      P.shapeFlag & 16 && c(
        P.children,
        k,
        O,
        s,
        o,
        i,
        a,
        l
      );
    }, C = (P = t) => {
      const k = An(P.props), O = P.target = Wo(P.props, T), K = Bo(O, P, A, y);
      O && (i !== "svg" && ua(O) ? i = "svg" : i !== "mathml" && fa(O) && (i = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), k || (b(P, O, K), cr(P, !1)));
    }, N = (P) => {
      const k = () => {
        if (en.get(P) === k) {
          if (en.delete(P), An(P.props)) {
            const O = v(P.el) || n;
            b(P, O, P.anchor), cr(P, !0);
          }
          C(P);
        }
      };
      en.set(P, k), tt(k, o);
    };
    if (e == null) {
      const P = t.el = A(""), k = t.anchor = A("");
      if (y(P, n, r), y(k, n, r), ih(t.props) || o && o.pendingBranch) {
        N(t);
        return;
      }
      w && (b(t, n, k), cr(t, !0)), C();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, k = en.get(e);
      if (k) {
        k.flags |= 8, en.delete(e), N(t);
        return;
      }
      t.targetStart = e.targetStart;
      const O = t.target = e.target, K = t.targetAnchor = e.targetAnchor, Y = An(e.props), H = Y ? n : O, J = Y ? P : K;
      if (i === "svg" || ua(O) ? i = "svg" : (i === "mathml" || fa(O)) && (i = "mathml"), E ? (m(
        e.dynamicChildren,
        E,
        H,
        s,
        o,
        i,
        a
      ), Pi(e, t, !0)) : l || f(
        e,
        t,
        H,
        J,
        s,
        o,
        i,
        a,
        !1
      ), w)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xr(
          t,
          n,
          P,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const se = Wo(t.props, T);
        se && (t.target = se, Xr(
          t,
          se,
          null,
          u,
          0
        ));
      } else Y && Xr(
        t,
        O,
        K,
        u,
        1
      );
      cr(t, w);
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
    } = e, y = An(m), T = o || !y, A = en.get(e);
    if (A && (A.flags |= 8, en.delete(e)), f && (s(u), s(c)), o && s(l), !A && (y || f) && i & 16)
      for (let M = 0; M < a.length; M++) {
        const v = a[M];
        r(
          v,
          t,
          n,
          T,
          !!v.dynamicChildren
        );
      }
  },
  move: Xr,
  hydrate: lh
};
function Xr(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = o === 2;
  if (f && r(i, t, n), !en.has(e) && (!f || An(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      s(
        u[m],
        t,
        n,
        2
      );
  f && r(a, t, n);
}
function lh(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c }
}, f) {
  function m(M, v) {
    let w = v;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor")
          t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, M._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      w = i(w);
    }
  }
  function y(M, v) {
    v.anchor = f(
      i(M),
      v,
      a(M),
      n,
      r,
      s,
      o
    );
  }
  const T = t.target = Wo(
    t.props,
    l
  ), A = An(t.props);
  if (T) {
    const M = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (A ? (y(e, t), m(T, M), t.targetAnchor || Bo(
      T,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === T ? e : null
    )) : (t.anchor = i(e), m(T, M), t.targetAnchor || Bo(T, t, c, u), f(
      M && i(M),
      t,
      T,
      n,
      r,
      s,
      o
    ))), cr(t, A);
  } else A && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const ch = ah;
function cr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Bo(e, t, n, r, s = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[Fc] = i, e && (r(o, e, s), r(i, e, s)), i;
}
const dt = /* @__PURE__ */ Symbol("_leaveCb"), tr = /* @__PURE__ */ Symbol("_enterCb");
function Uc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Oi(() => {
    e.isMounted = !0;
  }), qc(() => {
    e.isUnmounting = !0;
  }), e;
}
const ft = [Function, Array], $c = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ft,
  onEnter: ft,
  onAfterEnter: ft,
  onEnterCancelled: ft,
  // leave
  onBeforeLeave: ft,
  onLeave: ft,
  onAfterLeave: ft,
  onLeaveCancelled: ft,
  // appear
  onBeforeAppear: ft,
  onAppear: ft,
  onAfterAppear: ft,
  onAppearCancelled: ft
}, Hc = (e) => {
  const t = e.subTree;
  return t.component ? Hc(t.component) : t;
}, uh = {
  name: "BaseTransition",
  props: $c,
  setup(e, { slots: t }) {
    const n = _t(), r = Uc();
    return () => {
      const s = t.default && Ti(t.default(), !0), o = s && s.length ? Vc(s) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? Yo() : void 0
      );
      if (!o)
        return;
      const i = /* @__PURE__ */ ce(e), { mode: a } = i;
      if (r.isLeaving)
        return Eo(o);
      const l = ys(o);
      if (!l)
        return Eo(o);
      let u = Lr(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== Ge && In(l, u);
      let c = n.subTree && ys(n.subTree);
      if (c && c.type !== Ge && !wn(c, l) && Hc(n).type !== Ge) {
        let f = Lr(
          c,
          i,
          r,
          n
        );
        if (In(c, f), a === "out-in" && l.type !== Ge)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Eo(o);
        a === "in-out" && l.type !== Ge ? f.delayLeave = (m, y, T) => {
          const A = jc(
            r,
            c
          );
          A[String(c.key)] = c, m[dt] = () => {
            y(), m[dt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            T(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function Vc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ge) {
        t = n;
        break;
      }
  }
  return t;
}
const fh = uh;
function jc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Lr(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: m,
    onLeave: y,
    onAfterLeave: T,
    onLeaveCancelled: A,
    onBeforeAppear: M,
    onAppear: v,
    onAfterAppear: w,
    onAppearCancelled: E
  } = t, b = String(e.key), C = jc(n, e), N = (O, K) => {
    O && pt(
      O,
      r,
      9,
      K
    );
  }, P = (O, K) => {
    const Y = K[1];
    N(O, K), X(O) ? O.every((H) => H.length <= 1) && Y() : O.length <= 1 && Y();
  }, k = {
    mode: i,
    persisted: a,
    beforeEnter(O) {
      let K = l;
      if (!n.isMounted)
        if (o)
          K = M || l;
        else
          return;
      O[dt] && O[dt](
        !0
        /* cancelled */
      );
      const Y = C[b];
      Y && wn(e, Y) && Y.el[dt] && Y.el[dt](), N(K, [O]);
    },
    enter(O) {
      if (C[b] === e) return;
      let K = u, Y = c, H = f;
      if (!n.isMounted)
        if (o)
          K = v || u, Y = w || c, H = E || f;
        else
          return;
      let J = !1;
      O[tr] = (ge) => {
        J || (J = !0, ge ? N(H, [O]) : N(Y, [O]), k.delayedLeave && k.delayedLeave(), O[tr] = void 0);
      };
      const se = O[tr].bind(null, !1);
      K ? P(K, [O, se]) : se();
    },
    leave(O, K) {
      const Y = String(e.key);
      if (O[tr] && O[tr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      N(m, [O]);
      let H = !1;
      O[dt] = (se) => {
        H || (H = !0, K(), se ? N(A, [O]) : N(T, [O]), O[dt] = void 0, C[Y] === e && delete C[Y]);
      };
      const J = O[dt].bind(null, !1);
      C[Y] = e, y ? P(y, [O, J]) : J();
    },
    clone(O) {
      const K = Lr(
        O,
        t,
        n,
        r,
        s
      );
      return s && s(K), K;
    }
  };
  return k;
}
function Eo(e) {
  if (Ys(e))
    return e = cn(e), e.children = null, e;
}
function ys(e) {
  if (!Ys(e))
    return Gs(e.type) && e.children ? Vc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && re(n.default))
      return n.default();
  }
}
function In(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    In(
      Gs(n.type) && ys(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ti(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === je ? (i.patchFlag & 128 && s++, r = r.concat(
      Ti(i.children, t, a)
    )) : (t || i.type !== Ge) && r.push(a != null ? cn(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Dn(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function u5() {
  const e = _t();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Wc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function f5(e) {
  const t = _t(), n = /* @__PURE__ */ Si(null);
  if (t) {
    const s = t.refs === de ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    });
  }
  return n;
}
function da(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Es = /* @__PURE__ */ new WeakMap();
function gr(e, t, n, r, s = !1) {
  if (X(e)) {
    e.forEach(
      (A, M) => gr(
        A,
        t && (X(t) ? t[M] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Bn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && gr(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Qs(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, c = a.refs === de ? a.refs = {} : a.refs, f = a.setupState, m = /* @__PURE__ */ ce(f), y = f === de ? rc : (A) => da(c, A) ? !1 : pe(m, A), T = (A, M) => !(M && da(c, M));
  if (u != null && u !== l) {
    if (ha(t), we(u))
      c[u] = null, y(u) && (f[u] = null);
    else if (/* @__PURE__ */ Re(u)) {
      const A = t;
      T(u, A.k) && (u.value = null), A.k && (c[A.k] = null);
    }
  }
  if (re(l))
    Hr(l, a, 12, [i, c]);
  else {
    const A = we(l), M = /* @__PURE__ */ Re(l);
    if (A || M) {
      const v = () => {
        if (e.f) {
          const w = A ? y(l) ? f[l] : c[l] : T() || !e.k ? l.value : c[e.k];
          if (s)
            X(w) && hi(w, o);
          else if (X(w))
            w.includes(o) || w.push(o);
          else if (A)
            c[l] = [o], y(l) && (f[l] = c[l]);
          else {
            const E = [o];
            T(l, e.k) && (l.value = E), e.k && (c[e.k] = E);
          }
        } else A ? (c[l] = i, y(l) && (f[l] = i)) : M && (T(l, e.k) && (l.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const w = () => {
          v(), Es.delete(e);
        };
        w.id = -1, Es.set(e, w), tt(w, n);
      } else
        ha(e), v();
    }
  }
}
function ha(e) {
  const t = Es.get(e);
  t && (t.flags |= 8, Es.delete(e));
}
Vs().requestIdleCallback;
Vs().cancelIdleCallback;
const Bn = (e) => !!e.type.__asyncLoader, Ys = (e) => e.type.__isKeepAlive;
function dh(e, t) {
  Bc(e, "a", t);
}
function hh(e, t) {
  Bc(e, "da", t);
}
function Bc(e, t, n = Ye) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Xs(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ys(s.parent.vnode) && mh(r, t, n, s), s = s.parent;
  }
}
function mh(e, t, n, r) {
  const s = Xs(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Li(() => {
    hi(r[t], s);
  }, n);
}
function Xs(e, t, n = Ye, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Gt();
      const a = jr(n), l = pt(t, n, e, i);
      return a(), Yt(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Jt = (e) => (t, n = Ye) => {
  (!Nr || e === "sp") && Xs(e, (...r) => t(...r), n);
}, Kc = Jt("bm"), Oi = Jt("m"), ph = Jt(
  "bu"
), zc = Jt("u"), qc = Jt(
  "bum"
), Li = Jt("um"), _h = Jt(
  "sp"
), gh = Jt("rtg"), bh = Jt("rtc");
function yh(e, t = Ye) {
  Xs("ec", e, t);
}
const Gc = "components";
function d5(e, t) {
  return Xc(Gc, e, !0, t) || e;
}
const Yc = /* @__PURE__ */ Symbol.for("v-ndc");
function h5(e) {
  return we(e) ? Xc(Gc, e, !1) || e : e || Yc;
}
function Xc(e, t, n = !0, r = !1) {
  const s = We || Ye;
  if (s) {
    const o = s.type;
    {
      const a = rm(
        o,
        !1
      );
      if (a && (a === t || a === Xe(t) || a === $s(Xe(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      ma(s[e] || o[e], t) || // global registration
      ma(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function ma(e, t) {
  return e && (e[t] || e[Xe(t)] || e[$s(Xe(t))]);
}
function Eh(e, t, n, r) {
  let s;
  const o = n, i = X(e);
  if (i || we(e)) {
    const a = i && /* @__PURE__ */ Mt(e);
    let l = !1, u = !1;
    a && (l = !/* @__PURE__ */ ct(e), u = /* @__PURE__ */ xt(e), e = Bs(e)), s = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      s[c] = t(
        l ? u ? ln(mt(e[c])) : mt(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (_e(e))
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
function m5(e, t, n, r, s, o) {
  if (n == null && (n = {}), We.ce || We.parent && Bn(We.parent) && We.parent.ce) {
    const u = n, c = Object.keys(u).length > 0;
    return t !== "default" && (u.name = t), Wt(), ws(
      je,
      null,
      [Ne("slot", u, r && r())],
      c ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1);
  const a = zt.length;
  Wt();
  let l;
  try {
    const u = i && Jc(i(n)), c = n.key || o || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    u && u.key;
    l = ws(
      je,
      {
        key: (c && !ut(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!u && r ? "_fb" : "")
      },
      u || (r ? r() : []),
      u && e._ === 1 ? 64 : -2
    );
  } catch (u) {
    for (let c = zt.length; c > a; c--) Ni();
    throw u;
  } finally {
    i && i._c && (i._d = !0);
  }
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Jc(e) {
  return e.some((t) => Cr(t) ? !(t.type === Ge || t.type === je && !Jc(t.children)) : !0) ? e : null;
}
const Ko = (e) => e ? gu(e) ? Qs(e) : Ko(e.parent) : null, br = (
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
    $parent: (e) => Ko(e.parent),
    $root: (e) => Ko(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ai.bind(e.proxy)),
    $watch: (e) => oh.bind(e)
  })
), vo = (e, t) => e !== de && !e.__isScriptSetup && pe(e, t), vh = {
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
        if (vo(r, t))
          return i[t] = 1, r[t];
        if (s !== de && pe(s, t))
          return i[t] = 2, s[t];
        if (pe(o, t))
          return i[t] = 3, o[t];
        if (n !== de && pe(n, t))
          return i[t] = 4, n[t];
        zo && (i[t] = 0);
      }
    }
    const u = br[t];
    let c, f;
    if (u)
      return t === "$attrs" && qe(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== de && pe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, pe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return vo(s, t) ? (s[t] = n, !0) : r !== de && pe(r, t) ? (r[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i }
  }, a) {
    let l;
    return !!(n[a] || e !== de && a[0] !== "$" && pe(e, a) || vo(t, a) || pe(o, a) || pe(r, a) || pe(br, a) || pe(s.config.globalProperties, a) || (l = i.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vs(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function p5(e, t) {
  return !e || !t ? e || t : X(e) && X(t) ? e.concat(t) : Pe({}, vs(e), vs(t));
}
let zo = !0;
function Sh(e) {
  const t = Zc(e), n = e.proxy, r = e.ctx;
  zo = !1, t.beforeCreate && pa(t.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: T,
    activated: A,
    deactivated: M,
    beforeDestroy: v,
    beforeUnmount: w,
    destroyed: E,
    unmounted: b,
    render: C,
    renderTracked: N,
    renderTriggered: P,
    errorCaptured: k,
    serverPrefetch: O,
    // public API
    expose: K,
    inheritAttrs: Y,
    // assets
    components: H,
    directives: J,
    filters: se
  } = t;
  if (u && Ah(u, r, null), i)
    for (const V in i) {
      const G = i[V];
      re(G) && (r[V] = G.bind(n));
    }
  if (s) {
    const V = s.call(n, n);
    _e(V) && (e.data = /* @__PURE__ */ $r(V));
  }
  if (zo = !0, o)
    for (const V in o) {
      const G = o[V], ue = re(G) ? G.bind(n, n) : re(G.get) ? G.get.bind(n, n) : It, Te = !re(G) && re(G.set) ? G.set.bind(n) : It, fe = ye({
        get: ue,
        set: Te
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (ne) => fe.value = ne
      });
    }
  if (a)
    for (const V in a)
      Qc(a[V], r, n, V);
  if (l) {
    const V = re(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((G) => {
      eh(G, V[G]);
    });
  }
  c && pa(c, e, "c");
  function Z(V, G) {
    X(G) ? G.forEach((ue) => V(ue.bind(n))) : G && V(G.bind(n));
  }
  if (Z(Kc, f), Z(Oi, m), Z(ph, y), Z(zc, T), Z(dh, A), Z(hh, M), Z(yh, k), Z(bh, N), Z(gh, P), Z(qc, w), Z(Li, b), Z(_h, O), X(K))
    if (K.length) {
      const V = e.exposed || (e.exposed = {});
      K.forEach((G) => {
        Object.defineProperty(V, G, {
          get: () => n[G],
          set: (ue) => n[G] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === It && (e.render = C), Y != null && (e.inheritAttrs = Y), H && (e.components = H), J && (e.directives = J), O && Wc(e);
}
function Ah(e, t, n = It) {
  X(e) && (e = qo(e));
  for (const r in e) {
    const s = e[r];
    let o;
    _e(s) ? "default" in s ? o = St(
      s.from || r,
      s.default,
      !0
    ) : o = St(s.from || r) : o = St(s), /* @__PURE__ */ Re(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function pa(e, t, n) {
  pt(
    X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qc(e, t, n, r) {
  let s = r.includes(".") ? Dc(n, r) : () => n[r];
  if (we(e)) {
    const o = t[e];
    re(o) && Cn(s, o);
  } else if (re(e))
    Cn(s, e.bind(n));
  else if (_e(e))
    if (X(e))
      e.forEach((o) => Qc(o, t, n, r));
    else {
      const o = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(o) && Cn(s, o, e);
    }
}
function Zc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => Ss(l, u, i, !0)
  ), Ss(l, t, i)), _e(t) && o.set(t, l), l;
}
function Ss(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ss(e, o, n, !0), s && s.forEach(
    (i) => Ss(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = wh[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const wh = {
  data: _a,
  props: ga,
  emits: ga,
  // objects
  methods: ur,
  computed: ur,
  // lifecycle
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  // assets
  components: ur,
  directives: ur,
  // watch
  watch: Oh,
  // provide / inject
  provide: _a,
  inject: Th
};
function _a(e, t) {
  return t ? e ? function() {
    return Pe(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Th(e, t) {
  return ur(qo(e), qo(t));
}
function qo(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ur(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ga(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    vs(e),
    vs(t ?? {})
  ) : t;
}
function Oh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = et(e[r], t[r]);
  return n;
}
function eu() {
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
let Lh = 0;
function Rh(e, t) {
  return function(r, s = null) {
    re(r) || (r = Pe({}, r)), s != null && !_e(s) && (s = null);
    const o = eu(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: Lh++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: om,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return i.has(c) || (c && re(c.install) ? (i.add(c), c.install(u, ...f)) : re(c) && (i.add(c), c(u, ...f))), u;
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
          const y = u._ceVNode || Ne(r, s);
          return y.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(y, c, m), l = !0, u._container = c, c.__vue_app__ = u, Qs(y.component);
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
        const f = Pn;
        Pn = u;
        try {
          return c();
        } finally {
          Pn = f;
        }
      }
    };
    return u;
  };
}
let Pn = null;
function _5(e, t, n = de) {
  const r = _t(), s = Xe(t), o = Xt(t), i = tu(e, s), a = Wd((l, u) => {
    let c, f = de, m;
    return sh(() => {
      const y = e[s];
      Ve(c, y) && (c = y, u());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(y) {
        const T = n.set ? n.set(y) : y;
        if (!Ve(T, c) && !(f !== de && Ve(y, f)))
          return;
        const A = r.vnode.props, M = !!(A && // check if parent has passed v-model
        (t in A || s in A || o in A) && (`onUpdate:${t}` in A || `onUpdate:${s}` in A || `onUpdate:${o}` in A));
        M || (c = y, u()), r.emit(`update:${t}`, T), Ve(y, f) && (Ve(y, T) && !Ve(T, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        M && f !== de && !Ve(T, c)) && u(), f = y, m = T;
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
const tu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${Xt(t)}Modifiers`];
function Ch(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || de;
  let s = n;
  const o = t.startsWith("update:"), i = o && tu(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => we(c) ? c.trim() : c)), i.number && (s = s.map(Hs)));
  let a, l = r[a = po(t)] || // also try camelCase event handler (#2249)
  r[a = po(Xe(t))];
  !l && o && (l = r[a = po(Xt(t))]), l && pt(
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
const Ph = /* @__PURE__ */ new WeakMap();
function nu(e, t, n = !1) {
  const r = n ? Ph : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!re(e)) {
    const l = (u) => {
      const c = nu(u, t, !0);
      c && (a = !0, Pe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (_e(e) && r.set(e, null), null) : (X(o) ? o.forEach((l) => i[l] = null) : Pe(i, o), _e(e) && r.set(e, i), i);
}
function Js(e, t) {
  return !e || !xs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, Xt(t)) || pe(e, t));
}
function ba(e) {
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
    setupState: y,
    ctx: T,
    inheritAttrs: A
  } = e, M = bs(e);
  let v, w;
  try {
    if (n.shapeFlag & 4) {
      const b = s || r, C = b;
      v = Pt(
        u.call(
          C,
          b,
          c,
          f,
          y,
          m,
          T
        )
      ), w = a;
    } else {
      const b = t;
      v = Pt(
        b.length > 1 ? b(
          f,
          { attrs: a, slots: i, emit: l }
        ) : b(
          f,
          null
        )
      ), w = t.props ? a : Nh(a);
    }
  } catch (b) {
    zt.length = 0, zs(b, e, 1), v = Ne(Ge);
  }
  let E = v;
  if (w && A !== !1) {
    const b = Object.keys(w), { shapeFlag: C } = E;
    b.length && C & 7 && (o && b.some(Ds) && (w = Ih(
      w,
      o
    )), E = cn(E, w, !1, !0));
  }
  if (n.dirs && (E = cn(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = Gs(E.type) && ys(E) || E;
    In(b, n.transition);
  }
  return v = E, bs(M), v;
}
const Nh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || xs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ih = (e, t) => {
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
      return r ? ya(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const m = c[f];
        if (ru(i, r, m) && !Js(u, m))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? ya(r, i, u) : !0 : !!i;
  return !1;
}
function ya(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (ru(t, e, o) && !Js(n, o))
      return !0;
  }
  return !1;
}
function ru(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && _e(r) && _e(s) ? !At(r, s) : r !== s;
}
function kh({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const su = {}, ou = () => Object.create(su), iu = (e) => Object.getPrototypeOf(e) === su;
function xh(e, t, n, r = !1) {
  const s = {}, o = ou();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), au(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Lc(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function Dh(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = /* @__PURE__ */ ce(s), [l] = e.propsOptions;
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
        if (Js(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (l)
          if (pe(o, m))
            y !== o[m] && (o[m] = y, u = !0);
          else {
            const T = Xe(m);
            s[T] = Go(
              l,
              a,
              T,
              y,
              e,
              !1
            );
          }
        else
          y !== o[m] && (o[m] = y, u = !0);
      }
    }
  } else {
    au(e, t, s, o) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !pe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Xt(f)) === f || !pe(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[f] = Go(
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
  u && Vt(e.attrs, "set", "");
}
function au(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (hr(l))
        continue;
      const u = t[l];
      let c;
      s && pe(s, c = Xe(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Js(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ ce(n), u = a || de;
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      n[f] = Go(
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
function Go(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = pe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && re(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const c = jr(s);
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
    ] && (r === "" || r === Xt(n)) && (r = !0));
  }
  return r;
}
const Fh = /* @__PURE__ */ new WeakMap();
function lu(e, t, n = !1) {
  const r = n ? Fh : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!re(e)) {
    const c = (f) => {
      l = !0;
      const [m, y] = lu(f, t, !0);
      Pe(i, m), y && a.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l)
    return _e(e) && r.set(e, Tn), Tn;
  if (X(o))
    for (let c = 0; c < o.length; c++) {
      const f = Xe(o[c]);
      Ea(f) && (i[f] = de);
    }
  else if (o)
    for (const c in o) {
      const f = Xe(c);
      if (Ea(f)) {
        const m = o[c], y = i[f] = X(m) || re(m) ? { type: m } : Pe({}, m), T = y.type;
        let A = !1, M = !0;
        if (X(T))
          for (let v = 0; v < T.length; ++v) {
            const w = T[v], E = re(w) && w.name;
            if (E === "Boolean") {
              A = !0;
              break;
            } else E === "String" && (M = !1);
          }
        else
          A = re(T) && T.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = A, y[
          1
          /* shouldCastTrue */
        ] = M, (A || pe(y, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return _e(e) && r.set(e, u), u;
}
function Ea(e) {
  return e[0] !== "$" && !hr(e);
}
const Ri = (e) => e === "_" || e === "_ctx" || e === "$stable", Ci = (e) => X(e) ? e.map(Pt) : [Pt(e)], Uh = (e, t, n) => {
  if (t._n)
    return t;
  const r = xc((...s) => Ci(t(...s)), n);
  return r._c = !1, r;
}, cu = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Ri(s)) continue;
    const o = e[s];
    if (re(o))
      t[s] = Uh(s, o, r);
    else if (o != null) {
      const i = Ci(o);
      t[s] = () => i;
    }
  }
}, uu = (e, t) => {
  const n = Ci(t);
  e.slots.default = () => n;
}, fu = (e, t, n) => {
  for (const r in t)
    (n || !Ri(r)) && (e[r] = t[r]);
}, $h = (e, t, n) => {
  const r = e.slots = ou();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (fu(r, t, n), n && ac(r, "_", s, !0)) : cu(t, r);
  } else t && uu(e, t);
}, Hh = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = de;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : fu(s, t, n) : (o = !t.$stable, cu(t, s)), i = t;
  } else t && (uu(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !Ri(a) && i[a] == null && delete s[a];
}, tt = Kh;
function Vh(e) {
  return jh(e);
}
function jh(e, t) {
  const n = Vs();
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
    setScopeId: y = It,
    insertStaticContent: T
  } = e, A = (p, _, g, I = null, U = null, x = null, D = void 0, j = null, d = !!_.dynamicChildren) => {
    if (p === _)
      return;
    p && !wn(p, _) && (I = ie(p), ne(p, U, x, !0), p = null), _.patchFlag === -2 && (d = !1, _.dynamicChildren = null), _.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (_.dynamicChildren === Tn && (_.dynamicChildren = []), _.dynamicChildren.hasOnce = !0);
    const { type: h, ref: L, shapeFlag: F } = _;
    switch (h) {
      case Vr:
        M(p, _, g, I);
        break;
      case Ge:
        v(p, _, g, I);
        break;
      case ls:
        p == null && w(_, g, I, D);
        break;
      case je:
        H(
          p,
          _,
          g,
          I,
          U,
          x,
          D,
          j,
          d
        );
        break;
      default:
        F & 1 ? C(
          p,
          _,
          g,
          I,
          U,
          x,
          D,
          j,
          d
        ) : F & 6 ? J(
          p,
          _,
          g,
          I,
          U,
          x,
          D,
          j,
          d
        ) : (F & 64 || F & 128) && h.process(
          p,
          _,
          g,
          I,
          U,
          x,
          D,
          j,
          d,
          xe
        );
    }
    L != null && U ? gr(L, p && p.ref, x, _ || p, !_) : L == null && p && p.ref != null && gr(p.ref, null, x, p, !0);
  }, M = (p, _, g, I) => {
    if (p == null)
      r(
        _.el = a(_.children),
        g,
        I
      );
    else {
      const U = _.el = p.el;
      _.children !== p.children && u(U, _.children);
    }
  }, v = (p, _, g, I) => {
    p == null ? r(
      _.el = l(_.children || ""),
      g,
      I
    ) : _.el = p.el;
  }, w = (p, _, g, I) => {
    [p.el, p.anchor] = T(
      p.children,
      _,
      g,
      I,
      p.el,
      p.anchor
    );
  }, E = ({ el: p, anchor: _ }, g, I) => {
    let U;
    for (; p && p !== _; )
      U = m(p), r(p, g, I), p = U;
    r(_, g, I);
  }, b = ({ el: p, anchor: _ }) => {
    let g;
    for (; p && p !== _; )
      g = m(p), s(p), p = g;
    s(_);
  }, C = (p, _, g, I, U, x, D, j, d) => {
    if (_.type === "svg" ? D = "svg" : _.type === "math" && (D = "mathml"), p == null)
      N(
        _,
        g,
        I,
        U,
        x,
        D,
        j,
        d
      );
    else {
      const h = p.el && p.el._isVueCE ? p.el : null;
      try {
        h && h._beginPatch(), O(
          p,
          _,
          U,
          x,
          D,
          j,
          d
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, N = (p, _, g, I, U, x, D, j) => {
    let d, h;
    const { props: L, shapeFlag: F, transition: B, dirs: W } = p;
    if (d = p.el = i(
      p.type,
      x,
      L && L.is,
      L
    ), F & 8 ? c(d, p.children) : F & 16 && k(
      p.children,
      d,
      null,
      I,
      U,
      So(p, x),
      D,
      j
    ), W && gn(p, null, I, "created"), P(d, p, p.scopeId, D, I), L) {
      for (const $ in L)
        $ !== "value" && !hr($) && o(d, $, null, L[$], x, I);
      "value" in L && o(d, "value", null, L.value, x), (h = L.onVnodeBeforeMount) && Ot(h, I, p);
    }
    W && gn(p, null, I, "beforeMount");
    const R = Wh(U, B);
    R && B.beforeEnter(d), r(d, _, g), ((h = L && L.onVnodeMounted) || R || W) && tt(() => {
      try {
        h && Ot(h, I, p), R && B.enter(d), W && gn(p, null, I, "mounted");
      } finally {
      }
    }, U);
  }, P = (p, _, g, I, U) => {
    if (g && y(p, g), I)
      for (let x = 0; x < I.length; x++)
        y(p, I[x]);
    if (U) {
      let x = U.subTree;
      if (_ === x || mu(x.type) && (x.ssContent === _ || x.ssFallback === _)) {
        const D = U.vnode;
        P(
          p,
          D,
          D.scopeId,
          D.slotScopeIds,
          U.parent
        );
      }
    }
  }, k = (p, _, g, I, U, x, D, j, d = 0) => {
    for (let h = d; h < p.length; h++) {
      const L = p[h] = j ? Ht(p[h]) : Pt(p[h]);
      A(
        null,
        L,
        _,
        g,
        I,
        U,
        x,
        D,
        j
      );
    }
  }, O = (p, _, g, I, U, x, D) => {
    const j = _.el = p.el;
    let { patchFlag: d, dynamicChildren: h, dirs: L } = _;
    d |= p.patchFlag & 16;
    const F = p.props || de, B = _.props || de;
    let W;
    if (g && bn(g, !1), (W = B.onVnodeBeforeUpdate) && Ot(W, g, _, p), L && gn(_, p, g, "beforeUpdate"), g && bn(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    h && (!p.dynamicChildren || p.dynamicChildren.length !== h.length) && (d = 0, D = !1, h = null), (F.innerHTML && B.innerHTML == null || F.textContent && B.textContent == null) && c(j, ""), h ? K(
      p.dynamicChildren,
      h,
      j,
      g,
      I,
      So(_, U),
      x
    ) : D || G(
      p,
      _,
      j,
      null,
      g,
      I,
      So(_, U),
      x,
      !1
    ), d > 0) {
      if (d & 16)
        Y(j, F, B, g, U);
      else if (d & 2 && F.class !== B.class && o(j, "class", null, B.class, U), d & 4 && o(j, "style", F.style, B.style, U), d & 8) {
        const R = _.dynamicProps;
        for (let $ = 0; $ < R.length; $++) {
          const Q = R[$], oe = F[Q], Ee = B[Q];
          (Ee !== oe || Q === "value") && o(j, Q, oe, Ee, U, g);
        }
      }
      d & 1 && p.children !== _.children && c(j, _.children);
    } else !D && h == null && Y(j, F, B, g, U);
    ((W = B.onVnodeUpdated) || L) && tt(() => {
      W && Ot(W, g, _, p), L && gn(_, p, g, "updated");
    }, I);
  }, K = (p, _, g, I, U, x, D) => {
    for (let j = 0; j < _.length; j++) {
      const d = p[j], h = _[j], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wn(d, h) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? f(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        d,
        h,
        L,
        null,
        I,
        U,
        x,
        D,
        !0
      );
    }
  }, Y = (p, _, g, I, U) => {
    if (_ !== g) {
      if (_ !== de)
        for (const x in _)
          !hr(x) && !(x in g) && o(
            p,
            x,
            _[x],
            null,
            U,
            I
          );
      for (const x in g) {
        if (hr(x)) continue;
        const D = g[x], j = _[x];
        D !== j && x !== "value" && o(p, x, j, D, U, I);
      }
      "value" in g && o(p, "value", _.value, g.value, U);
    }
  }, H = (p, _, g, I, U, x, D, j, d) => {
    const h = _.el = p ? p.el : a(""), L = _.anchor = p ? p.anchor : a("");
    let { patchFlag: F, dynamicChildren: B, slotScopeIds: W } = _;
    W && (j = j ? j.concat(W) : W), p == null ? (r(h, g, I), r(L, g, I), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      g,
      L,
      U,
      x,
      D,
      j,
      d
    )) : F > 0 && F & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === B.length ? (K(
      p.dynamicChildren,
      B,
      g,
      U,
      x,
      D,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || U && _ === U.subTree) && Pi(
      p,
      _,
      !0
      /* shallow */
    )) : G(
      p,
      _,
      g,
      L,
      U,
      x,
      D,
      j,
      d
    );
  }, J = (p, _, g, I, U, x, D, j, d) => {
    _.slotScopeIds = j, p == null ? _.shapeFlag & 512 ? U.ctx.activate(
      _,
      g,
      I,
      D,
      d
    ) : se(
      _,
      g,
      I,
      U,
      x,
      D,
      d
    ) : ge(p, _, d);
  }, se = (p, _, g, I, U, x, D) => {
    const j = p.component = Qh(
      p,
      I,
      U
    );
    if (Ys(p) && (j.ctx.renderer = xe), Zh(j, !1, D), j.asyncDep) {
      if (U && U.registerDep(j, Z, D), !p.el) {
        const d = j.subTree = Ne(Ge);
        v(null, d, _, g), p.placeholder = d.el;
      }
    } else
      Z(
        j,
        p,
        _,
        g,
        U,
        x,
        D
      );
  }, ge = (p, _, g) => {
    const I = _.component = p.component;
    if (Mh(p, _, g))
      if (I.asyncDep && !I.asyncResolved) {
        _.el = p.el, V(I, _, g);
        return;
      } else
        I.next = _, I.update();
    else
      _.el = p.el, I.vnode = _;
  }, Z = (p, _, g, I, U, x, D) => {
    const j = () => {
      if (p.isMounted) {
        let { next: F, bu: B, u: W, parent: R, vnode: $ } = p;
        {
          const He = du(p);
          if (He) {
            F && (F.el = $.el, V(p, F, D)), He.asyncDep.then(() => {
              tt(() => {
                p.isUnmounted || h();
              }, U);
            });
            return;
          }
        }
        let Q = F, oe;
        bn(p, !1), F ? (F.el = $.el, V(p, F, D)) : F = $, B && as(B), (oe = F.props && F.props.onVnodeBeforeUpdate) && Ot(oe, R, F, $), bn(p, !0);
        const Ee = ba(p), Ze = p.subTree;
        p.subTree = Ee, A(
          Ze,
          Ee,
          // parent may have changed if it's in a teleport
          f(Ze.el),
          // anchor may have changed if it's in a fragment
          ie(Ze),
          p,
          U,
          x
        ), F.el = Ee.el, Q === null && kh(p, Ee.el), W && tt(W, U), (oe = F.props && F.props.onVnodeUpdated) && tt(
          () => Ot(oe, R, F, $),
          U
        );
      } else {
        let F;
        const { el: B, props: W } = _, { bm: R, m: $, parent: Q, root: oe, type: Ee } = p, Ze = Bn(_);
        bn(p, !1), R && as(R), !Ze && (F = W && W.onVnodeBeforeMount) && Ot(F, Q, _), bn(p, !0);
        {
          oe.ce && oe.ce._hasShadowRoot() && oe.ce._injectChildStyle(
            Ee,
            p.parent ? p.parent.type : void 0
          );
          const He = p.subTree = ba(p);
          A(
            null,
            He,
            g,
            I,
            p,
            U,
            x
          ), _.el = He.el;
        }
        if ($ && tt($, U), !Ze && (F = W && W.onVnodeMounted)) {
          const He = _;
          tt(
            () => Ot(F, Q, He),
            U
          );
        }
        (_.shapeFlag & 256 || Q && Bn(Q.vnode) && Q.vnode.shapeFlag & 256) && p.a && tt(p.a, U), p.isMounted = !0, _ = g = I = null;
      }
    };
    p.scope.on();
    const d = p.effect = new hc(j);
    p.scope.off();
    const h = p.update = d.run.bind(d), L = p.job = d.runIfDirty.bind(d);
    L.i = p, L.id = p.uid, d.scheduler = () => wi(L), bn(p, !0), h();
  }, V = (p, _, g) => {
    _.component = p;
    const I = p.vnode.props;
    p.vnode = _, p.next = null, Dh(p, _.props, I, g), Hh(p, _.children, g), Gt(), ca(p), Yt();
  }, G = (p, _, g, I, U, x, D, j, d = !1) => {
    const h = p && p.children, L = p ? p.shapeFlag : 0, F = _.children, { patchFlag: B, shapeFlag: W } = _;
    if (B > 0) {
      if (B & 128) {
        Te(
          h,
          F,
          g,
          I,
          U,
          x,
          D,
          j,
          d
        );
        return;
      } else if (B & 256) {
        ue(
          h,
          F,
          g,
          I,
          U,
          x,
          D,
          j,
          d
        );
        return;
      }
    }
    W & 8 ? (L & 16 && Ke(h, U, x), F !== h && c(g, F)) : L & 16 ? W & 16 ? Te(
      h,
      F,
      g,
      I,
      U,
      x,
      D,
      j,
      d
    ) : Ke(h, U, x, !0) : (L & 8 && c(g, ""), W & 16 && k(
      F,
      g,
      I,
      U,
      x,
      D,
      j,
      d
    ));
  }, ue = (p, _, g, I, U, x, D, j, d) => {
    p = p || Tn, _ = _ || Tn;
    const h = p.length, L = _.length, F = Math.min(h, L);
    let B;
    for (B = 0; B < F; B++) {
      const W = _[B] = d ? Ht(_[B]) : Pt(_[B]);
      A(
        p[B],
        W,
        g,
        null,
        U,
        x,
        D,
        j,
        d
      );
    }
    h > L ? Ke(
      p,
      U,
      x,
      !0,
      !1,
      F
    ) : k(
      _,
      g,
      I,
      U,
      x,
      D,
      j,
      d,
      F
    );
  }, Te = (p, _, g, I, U, x, D, j, d) => {
    let h = 0;
    const L = _.length;
    let F = p.length - 1, B = L - 1;
    for (; h <= F && h <= B; ) {
      const W = p[h], R = _[h] = d ? Ht(_[h]) : Pt(_[h]);
      if (wn(W, R))
        A(
          W,
          R,
          g,
          null,
          U,
          x,
          D,
          j,
          d
        );
      else
        break;
      h++;
    }
    for (; h <= F && h <= B; ) {
      const W = p[F], R = _[B] = d ? Ht(_[B]) : Pt(_[B]);
      if (wn(W, R))
        A(
          W,
          R,
          g,
          null,
          U,
          x,
          D,
          j,
          d
        );
      else
        break;
      F--, B--;
    }
    if (h > F) {
      if (h <= B) {
        const W = B + 1, R = W < L ? _[W].el : I;
        for (; h <= B; )
          A(
            null,
            _[h] = d ? Ht(_[h]) : Pt(_[h]),
            g,
            R,
            U,
            x,
            D,
            j,
            d
          ), h++;
      }
    } else if (h > B)
      for (; h <= F; )
        ne(p[h], U, x, !0), h++;
    else {
      const W = h, R = h, $ = /* @__PURE__ */ new Map();
      for (h = R; h <= B; h++) {
        const it = _[h] = d ? Ht(_[h]) : Pt(_[h]);
        it.key != null && $.set(it.key, h);
      }
      let Q, oe = 0;
      const Ee = B - R + 1;
      let Ze = !1, He = 0;
      const _n = new Array(Ee);
      for (h = 0; h < Ee; h++) _n[h] = 0;
      for (h = W; h <= F; h++) {
        const it = p[h];
        if (oe >= Ee) {
          ne(it, U, x, !0);
          continue;
        }
        let Tt;
        if (it.key != null)
          Tt = $.get(it.key);
        else
          for (Q = R; Q <= B; Q++)
            if (_n[Q - R] === 0 && wn(it, _[Q])) {
              Tt = Q;
              break;
            }
        Tt === void 0 ? ne(it, U, x, !0) : (_n[Tt - R] = h + 1, Tt >= He ? He = Tt : Ze = !0, A(
          it,
          _[Tt],
          g,
          null,
          U,
          x,
          D,
          j,
          d
        ), oe++);
      }
      const mo = Ze ? Bh(_n) : Tn;
      for (Q = mo.length - 1, h = Ee - 1; h >= 0; h--) {
        const it = R + h, Tt = _[it], ta = _[it + 1], na = it + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ta.el || hu(ta)
        ) : I;
        _n[h] === 0 ? A(
          null,
          Tt,
          g,
          na,
          U,
          x,
          D,
          j,
          d
        ) : Ze && (Q < 0 || h !== mo[Q] ? fe(Tt, g, na, 2) : Q--);
      }
    }
  }, fe = (p, _, g, I, U = null) => {
    const { el: x, type: D, transition: j, children: d, shapeFlag: h } = p;
    if (h & 6) {
      fe(p.component.subTree, _, g, I);
      return;
    }
    if (h & 128) {
      p.suspense.move(_, g, I);
      return;
    }
    if (h & 64) {
      D.move(p, _, g, xe);
      return;
    }
    if (D === je) {
      r(x, _, g);
      for (let F = 0; F < d.length; F++)
        fe(d[F], _, g, I);
      r(p.anchor, _, g);
      return;
    }
    if (D === ls) {
      E(p, _, g);
      return;
    }
    if (I !== 2 && h & 1 && j)
      if (I === 0)
        j.persisted && !x[dt] ? r(x, _, g) : (j.beforeEnter(x), r(x, _, g), tt(() => j.enter(x), U));
      else {
        const { leave: F, delayLeave: B, afterLeave: W } = j, R = () => {
          p.ctx.isUnmounted ? s(x) : r(x, _, g);
        }, $ = () => {
          const Q = x._isLeaving || !!x[dt];
          x._isLeaving && x[dt](
            !0
            /* cancelled */
          ), j.persisted && !Q ? R() : F(x, () => {
            R(), W && W();
          });
        };
        B ? B(x, R, $) : $();
      }
    else
      r(x, _, g);
  }, ne = (p, _, g, I = !1, U = !1) => {
    const {
      type: x,
      props: D,
      ref: j,
      children: d,
      dynamicChildren: h,
      shapeFlag: L,
      patchFlag: F,
      dirs: B,
      cacheIndex: W,
      memo: R
    } = p;
    if ((F === -2 || h && h.hasOnce) && (U = !1), j != null && (Gt(), gr(j, null, g, p, !0), Yt()), W != null && (!p.ctx || p.ctx === _) && (_.renderCache[W] = void 0), L & 256) {
      _.ctx.deactivate(p);
      return;
    }
    const $ = L & 1 && B, Q = !Bn(p);
    let oe;
    if (Q && (oe = D && D.onVnodeBeforeUnmount) && Ot(oe, _, p), L & 6)
      Qe(p.component, g, I);
    else {
      if (L & 128) {
        p.suspense.unmount(g, I);
        return;
      }
      $ && gn(p, null, _, "beforeUnmount"), L & 64 ? p.type.remove(
        p,
        _,
        g,
        xe,
        I
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== je || F > 0 && F & 64) ? Ke(
        h,
        _,
        g,
        !1,
        !0
      ) : (x === je && F & 384 || !U && L & 16) && Ke(d, _, g), I && ke(p);
    }
    const Ee = R != null && W == null;
    (Q && (oe = D && D.onVnodeUnmounted) || $ || Ee) && tt(() => {
      oe && Ot(oe, _, p), $ && gn(p, null, _, "unmounted"), Ee && (p.el = null);
    }, g);
  }, ke = (p) => {
    const { type: _, el: g, anchor: I, transition: U } = p;
    if (_ === je) {
      Ue(g, I);
      return;
    }
    if (_ === ls) {
      b(p), U && !U.persisted && U.afterLeave && U.afterLeave();
      return;
    }
    const x = () => {
      s(g), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (p.shapeFlag & 1 && U && !U.persisted) {
      const { leave: D, delayLeave: j } = U, d = () => D(g, x);
      j ? j(p.el, x, d) : d();
    } else
      x();
  }, Ue = (p, _) => {
    let g;
    for (; p !== _; )
      g = m(p), s(p), p = g;
    s(_);
  }, Qe = (p, _, g) => {
    const { bum: I, scope: U, job: x, subTree: D, um: j, m: d, a: h } = p;
    va(d), va(h), I && as(I), U.stop(), x ? (x.flags |= 8, ne(D, p, _, g)) : p.vnode.el && D && (D.transition = p.vnode.transition, ne(D, p, _, g)), j && tt(j, _), tt(() => {
      p.isUnmounted = !0;
    }, _);
  }, Ke = (p, _, g, I = !1, U = !1, x = 0) => {
    for (let D = x; D < p.length; D++)
      ne(p[D], _, g, I, U);
  }, ie = (p) => {
    if (p.shapeFlag & 6)
      return ie(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const _ = m(p.anchor || p.el), g = _ && _[Fc];
    return g ? m(g) : _;
  };
  let Oe = !1;
  const $e = (p, _, g) => {
    let I;
    p == null ? _._vnode && (ne(_._vnode, null, null, !0), I = _._vnode.component) : A(
      _._vnode || null,
      p,
      _,
      null,
      null,
      null,
      g
    ), _._vnode = p, Oe || (Oe = !0, ca(I), Ic(), Oe = !1);
  }, xe = {
    p: A,
    um: ne,
    m: fe,
    r: ke,
    mt: se,
    mc: k,
    pc: G,
    pbc: K,
    n: ie,
    o: e
  };
  return {
    render: $e,
    hydrate: void 0,
    createApp: Rh($e)
  };
}
function So({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pi(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (X(r) && X(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Ht(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && Pi(i, a)), a.type === Vr && (a.patchFlag === -1 && (a = s[o] = Ht(a)), a.el = i.el), a.type === Ge && !a.el && (a.el = i.el);
    }
}
function Bh(e) {
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
function du(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : du(t);
}
function va(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function hu(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? hu(t.subTree) : null;
}
const mu = (e) => e.__isSuspense;
function Kh(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Zd(e);
}
const je = /* @__PURE__ */ Symbol.for("v-fgt"), Vr = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), ls = /* @__PURE__ */ Symbol.for("v-stc"), zt = [];
let at = null;
function Wt(e = !1) {
  zt.push(at = e ? null : []);
}
function Ni() {
  zt.pop(), at = zt[zt.length - 1] || null;
}
let Rr = 1;
function As(e, t = !1) {
  Rr += e, e < 0 && at && t && (at.hasOnce = !0);
}
function pu(e) {
  return e.dynamicChildren = Rr > 0 ? at || Tn : null, Ni(), Rr > 0 && at && at.push(e), e;
}
function fr(e, t, n, r, s, o) {
  return pu(
    yt(
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
function ws(e, t, n, r, s) {
  return pu(
    Ne(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Cr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _u = ({ key: e }) => e ?? null, cs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ Re(e) || re(e) ? { i: We, r: e, k: t, f: !!n } : e : null);
function yt(e, t = null, n = null, r = 0, s = null, o = e === je ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _u(t),
    ref: t && cs(t),
    scopeId: kc,
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
    ctx: We
  };
  return a ? (Ts(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= we(n) ? 8 : 16), Rr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  at && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && at.push(l), l;
}
const Ne = zh;
function zh(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Yc) && (e = Ge), Cr(e)) {
    const a = cn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ts(a, n), Rr > 0 && !o && at && (a.shapeFlag & 6 ? at[at.indexOf(e)] = a : at.push(a)), a.patchFlag = -2, a;
  }
  if (sm(e) && (e = e.__vccOpts), t) {
    t = qh(t);
    let { class: a, style: l } = t;
    a && !we(a) && (t.class = on(a)), _e(l) && (/* @__PURE__ */ Ks(l) && !X(l) && (l = Pe({}, l)), t.style = js(l));
  }
  const i = we(e) ? 1 : mu(e) ? 128 : Gs(e) ? 64 : _e(e) ? 4 : re(e) ? 2 : 0;
  return yt(
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
function qh(e) {
  return e ? /* @__PURE__ */ Ks(e) || iu(e) ? Pe({}, e) : e : null;
}
function cn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? Yh(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && _u(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(cs(t)) : [o, cs(t)] : cs(t)
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
    patchFlag: t && e.type !== je ? i === -1 ? 16 : i | 16 : i,
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
  return l && r && In(
    c,
    l.clone(c)
  ), c;
}
function Gh(e = " ", t = 0) {
  return Ne(Vr, null, e, t);
}
function g5(e, t) {
  const n = Ne(ls, null, e);
  return n.staticCount = t, n;
}
function Yo(e = "", t = !1) {
  return t ? (Wt(), ws(Ge, null, e)) : Ne(Ge, null, e);
}
function Pt(e) {
  return e == null || typeof e == "boolean" ? Ne(Ge) : X(e) ? Ne(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Cr(e) ? Ht(e) : Ne(Vr, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cn(e);
}
function Ts(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ts(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !iu(t) ? t._ctx = We : s === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (re(t)) {
    if (r & 65) {
      Ts(e, { default: t });
      return;
    }
    t = { default: t, _ctx: We }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Gh(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Yh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = on([t.class, r.class]));
      else if (s === "style")
        t.style = js([t.style, r.style]);
      else if (xs(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(X(o) && o.includes(i)) ? t[s] = o ? [].concat(o, i) : i : i == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ds(s) && (t[s] = i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ot(e, t, n, r = null) {
  pt(e, t, 7, [
    n,
    r
  ]);
}
const Xh = eu();
let Jh = 0;
function Qh(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Xh, o = {
    uid: Jh++,
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
    scope: new fc(
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
    propsOptions: lu(r, s),
    emitsOptions: nu(r, s),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ch.bind(null, o), e.ce && e.ce(o), o;
}
let Ye = null;
const _t = () => Ye || We;
let Os, Pr;
{
  const e = Vs(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Os = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ye = n
  ), Pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const jr = (e) => {
  const t = Ye;
  return Os(e), e.scope.on(), () => {
    e.scope.off(), Os(t);
  };
}, Sa = () => {
  Ye && Ye.scope.off(), Os(null);
};
function gu(e) {
  return e.vnode.shapeFlag & 4;
}
let Nr = !1;
function Zh(e, t = !1, n = !1) {
  t && Pr(t);
  const { props: r, children: s } = e.vnode, o = gu(e);
  xh(e, r, o, t), $h(e, s, n || t);
  const i = o ? em(e, t) : void 0;
  return t && Pr(!1), i;
}
function em(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vh);
  const { setup: r } = n;
  if (r) {
    Gt();
    const s = e.setupContext = r.length > 1 ? nm(e) : null, o = jr(e), i = Hr(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = sc(i);
    if (Yt(), o(), (a || e.sp) && !Bn(e) && Wc(e), a) {
      if (i.then(Sa, Sa), t)
        return i.then((l) => {
          Pr(!0);
          try {
            Aa(e, l, t);
          } finally {
            Pr(!1);
          }
        }).catch((l) => {
          zs(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Aa(e, i);
  } else
    bu(e);
}
function Aa(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _e(t) && (e.setupState = Cc(t)), bu(e);
}
function bu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || It);
  {
    const s = jr(e);
    Gt();
    try {
      Sh(e);
    } finally {
      Yt(), s();
    }
  }
}
const tm = {
  get(e, t) {
    return qe(e, "get", ""), e[t];
  }
};
function nm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, tm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Cc(vi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in br)
        return br[n](e);
    },
    has(t, n) {
      return n in t || n in br;
    }
  })) : e.proxy;
}
function rm(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sm(e) {
  return re(e) && "__vccOpts" in e;
}
const ye = (e, t) => /* @__PURE__ */ Gd(e, t, Nr);
function zn(e, t, n) {
  try {
    As(-1);
    const r = arguments.length;
    return r === 2 ? _e(t) && !X(t) ? Cr(t) ? Ne(e, null, [t]) : Ne(e, t) : Ne(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Cr(n) && (n = [n]), Ne(e, t, n));
  } finally {
    As(1);
  }
}
const om = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xo;
const wa = typeof window < "u" && window.trustedTypes;
if (wa)
  try {
    Xo = /* @__PURE__ */ wa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yu = Xo ? (e) => Xo.createHTML(e) : (e) => e, im = "http://www.w3.org/2000/svg", am = "http://www.w3.org/1998/Math/MathML", $t = typeof document < "u" ? document : null, Ta = $t && /* @__PURE__ */ $t.createElement("template"), lm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? $t.createElementNS(im, e) : t === "mathml" ? $t.createElementNS(am, e) : n ? $t.createElement(e, { is: n }) : $t.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => $t.createTextNode(e),
  createComment: (e) => $t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $t.querySelector(e),
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
      Ta.innerHTML = yu(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ta.content;
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
}, Qt = "transition", nr = "animation", qn = /* @__PURE__ */ Symbol("_vtc"), Eu = {
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
}, vu = /* @__PURE__ */ Pe(
  {},
  $c,
  Eu
), cm = (e) => (e.displayName = "Transition", e.props = vu, e), b5 = /* @__PURE__ */ cm(
  (e, { slots: t }) => zn(fh, Su(e), t)
), yn = (e, t = []) => {
  X(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Oa = (e) => e ? X(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Su(e) {
  const t = {};
  for (const H in e)
    H in Eu || (t[H] = e[H]);
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
    leaveToClass: y = `${n}-leave-to`
  } = e, T = um(s), A = T && T[0], M = T && T[1], {
    onBeforeEnter: v,
    onEnter: w,
    onEnterCancelled: E,
    onLeave: b,
    onLeaveCancelled: C,
    onBeforeAppear: N = v,
    onAppear: P = w,
    onAppearCancelled: k = E
  } = t, O = (H, J, se, ge) => {
    H._enterCancelled = ge, tn(H, J ? c : a), tn(H, J ? u : i), se && se();
  }, K = (H, J) => {
    H._isLeaving = !1, tn(H, f), tn(H, y), tn(H, m), J && J();
  }, Y = (H) => (J, se) => {
    const ge = H ? P : w, Z = () => O(J, H, se);
    yn(ge, [J, Z]), La(() => {
      tn(J, H ? l : o), Lt(J, H ? c : a), Oa(ge) || Ra(J, r, A, Z);
    });
  };
  return Pe(t, {
    onBeforeEnter(H) {
      yn(v, [H]), Lt(H, o), Lt(H, i);
    },
    onBeforeAppear(H) {
      yn(N, [H]), Lt(H, l), Lt(H, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(H, J) {
      H._isLeaving = !0;
      const se = () => K(H, J);
      Lt(H, f), H._enterCancelled ? (Lt(H, m), Jo(H)) : (Jo(H), Lt(H, m)), La(() => {
        H._isLeaving && (tn(H, f), Lt(H, y), Oa(b) || Ra(H, r, M, se));
      }), yn(b, [H, se]);
    },
    onEnterCancelled(H) {
      O(H, !1, void 0, !0), yn(E, [H]);
    },
    onAppearCancelled(H) {
      O(H, !0, void 0, !0), yn(k, [H]);
    },
    onLeaveCancelled(H) {
      K(H), yn(C, [H]);
    }
  });
}
function um(e) {
  if (e == null)
    return null;
  if (_e(e))
    return [Ao(e.enter), Ao(e.leave)];
  {
    const t = Ao(e);
    return [t, t];
  }
}
function Ao(e) {
  return dd(e);
}
function Lt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[qn] || (e[qn] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[qn];
  n && (n.delete(t), n.size || (e[qn] = void 0));
}
function La(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let fm = 0;
function Ra(e, t, n, r) {
  const s = e._endId = ++fm, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = Au(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, m), o();
  }, m = (y) => {
    y.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, m);
}
function Au(e, t) {
  const n = window.getComputedStyle(e), r = (T) => (n[T] || "").split(", "), s = r(`${Qt}Delay`), o = r(`${Qt}Duration`), i = Ca(s, o), a = r(`${nr}Delay`), l = r(`${nr}Duration`), u = Ca(a, l);
  let c = null, f = 0, m = 0;
  t === Qt ? i > 0 && (c = Qt, f = i, m = o.length) : t === nr ? u > 0 && (c = nr, f = u, m = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Qt : nr : null, m = c ? c === Qt ? o.length : l.length : 0);
  const y = c === Qt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Qt}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: m,
    hasTransform: y
  };
}
function Ca(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Pa(n) + Pa(e[r])));
}
function Pa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Jo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function dm(e, t, n) {
  const r = e[qn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ls = /* @__PURE__ */ Symbol("_vod"), Ii = /* @__PURE__ */ Symbol("_vsh"), y5 = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ls] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : rr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), rr(e, !0), r.enter(e)) : r.leave(e, () => {
      rr(e, !1);
    }) : rr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    rr(e, t);
  }
};
function rr(e, t) {
  e.style.display = t ? e[Ls] : "none", e[Ii] = !t;
}
const hm = /* @__PURE__ */ Symbol(""), mm = /(?:^|;)\s*display\s*:/;
function pm(e, t, n) {
  const r = e.style, s = we(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (we(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && dr(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && dr(r, i, "");
    for (const i in n) {
      i === "display" && (o = !0);
      const a = n[i];
      a != null ? gm(
        e,
        i,
        !we(t) && t ? t[i] : void 0,
        a
      ) || dr(r, i, a) : dr(r, i, "");
    }
  } else if (s) {
    if (t !== n) {
      const i = r[hm];
      i && (n += ";" + i), r.cssText = n, o = mm.test(n);
    }
  } else t && e.removeAttribute("style");
  Ls in e && (e[Ls] = o ? r.display : "", e[Ii] && (r.display = "none"));
}
const Jr = /\s*!important$/;
function dr(e, t, n) {
  if (X(n))
    n.forEach((r) => dr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    Jr.test(n) ? e.setProperty(t, n.replace(Jr, ""), "important") : e.setProperty(t, n);
  else {
    const r = _m(e, t);
    Jr.test(n) ? e.setProperty(
      Xt(r),
      n.replace(Jr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Na = ["Webkit", "Moz", "ms"], wo = {};
function _m(e, t) {
  const n = wo[t];
  if (n)
    return n;
  let r = Xe(t);
  if (r !== "filter" && r in e)
    return wo[t] = r;
  r = $s(r);
  for (let s = 0; s < Na.length; s++) {
    const o = Na[s] + r;
    if (o in e)
      return wo[t] = o;
  }
  return t;
}
function gm(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(r) && n === r;
}
const Ia = "http://www.w3.org/1999/xlink";
function Ma(e, t, n, r, s, o = bd(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ia, t.slice(6, t.length)) : e.setAttributeNS(Ia, t, n) : n == null || o && !lc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ut(n) ? String(n) : n
  );
}
function ka(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yu(n) : n);
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
    a === "boolean" ? n = lc(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function Bt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function bm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const xa = /* @__PURE__ */ Symbol("_vei");
function ym(e, t, n, r, s = null) {
  const o = e[xa] || (e[xa] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = Sm(t);
    if (r) {
      const u = o[t] = Tm(
        r,
        s
      );
      Bt(e, a, u, l);
    } else i && (bm(e, a, i, l), o[t] = void 0);
  }
}
const Em = /(Once|Passive|Capture)$/, vm = /^on:?(?:Once|Passive|Capture)$/;
function Sm(e) {
  let t, n;
  for (; (n = e.match(Em)) && !vm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Xt(e.slice(2)), t];
}
let To = 0;
const Am = /* @__PURE__ */ Promise.resolve(), wm = () => To || (Am.then(() => To = 0), To = Date.now());
function Tm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (X(s)) {
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
  return n.value = e, n.attached = wm(), n;
}
const Da = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Om = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? dm(e, r, i) : t === "style" ? pm(e, n, r) : xs(t) ? Ds(t) || ym(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lm(e, t, r, i)) ? (ka(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ma(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Rm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(r))) ? ka(e, Xe(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ma(e, t, r, i));
};
function Lm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Da(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Da(t) && we(n) ? !1 : t in e;
}
function Rm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Xe(t);
  return Array.isArray(n) ? n.some((s) => Xe(s) === r) : Object.keys(n).some((s) => Xe(s) === r);
}
const wu = /* @__PURE__ */ new WeakMap(), Tu = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ Symbol("_moveCb"), Fa = /* @__PURE__ */ Symbol("_enterCb"), Cm = (e) => (delete e.props.mode, e), Pm = /* @__PURE__ */ Cm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pe({}, vu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = _t(), r = Uc();
    let s, o;
    return zc(() => {
      if (!s.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!xm(
        s[0].el,
        n.vnode.el,
        i
      )) {
        s = [];
        return;
      }
      s.forEach(Im), s.forEach(Mm);
      const a = s.filter(km);
      Jo(n.vnode.el), a.forEach((l) => {
        const u = l.el, c = u.style;
        Lt(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[Rs] = (m) => {
          m && m.target !== u || (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Rs] = null, tn(u, i));
        };
        u.addEventListener("transitionend", f);
      }), s = [];
    }), () => {
      const i = /* @__PURE__ */ ce(e), a = Su(i);
      let l = i.tag || je;
      if (s = [], o)
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c.el && c.el instanceof Element && // Hidden v-show nodes have no previous layout box to animate from.
          !c.el[Ii] && (s.push(c), In(
            c,
            Lr(
              c,
              a,
              r,
              n
            )
          ), wu.set(c, Ou(c.el)));
        }
      o = t.default ? Ti(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const c = o[u];
        c.key != null && In(
          c,
          Lr(c, a, r, n)
        );
      }
      return Ne(l, null, o);
    };
  }
}), Nm = Pm;
function Im(e) {
  const t = e.el;
  t[Rs] && t[Rs](), t[Fa] && t[Fa]();
}
function Mm(e) {
  Tu.set(e, Ou(e.el));
}
function km(e) {
  const t = wu.get(e), n = Tu.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const o = e.el, i = o.style, a = o.getBoundingClientRect();
    let l = 1, u = 1;
    return o.offsetWidth && (l = a.width / o.offsetWidth), o.offsetHeight && (u = a.height / o.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${r / l}px,${s / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Ou(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function xm(e, t, n) {
  const r = e.cloneNode(), s = e[qn];
  s && s.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: i } = Au(r);
  return o.removeChild(r), i;
}
const un = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return X(t) ? (n) => as(t, n) : t;
};
function Dm(e) {
  e.target.composing = !0;
}
function Ua(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const lt = /* @__PURE__ */ Symbol("_assign"), Qr = /* @__PURE__ */ Symbol("_initialValue");
function Oo(e, t, n) {
  return t && (e = e.trim()), n && (e = Hs(e)), e;
}
const $a = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[Qr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Qr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[lt] = un(s);
    const o = r || s.props && s.props.type === "number";
    Bt(e, t ? "change" : "input", (i) => {
      i.target.composing || e[lt](Oo(e.value, n, o));
    }), (n || o) && Bt(e, "change", () => {
      e.value = Oo(e.value, n, o);
    }), t || (Bt(e, "compositionstart", Dm), Bt(e, "compositionend", Ua), Bt(e, "change", Ua));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", o = e[Qr];
    delete e[Qr], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[lt](Oo(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[lt] = un(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hs(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l);
  }
}, Fm = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[lt] = un(n), Bt(e, "change", () => {
      const r = e._modelValue, s = Gn(e), o = e.checked, i = e[lt];
      if (X(r)) {
        const a = mi(r, s), l = a !== -1;
        if (o && !l)
          i(r.concat(s));
        else if (!o && l) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (qt(r)) {
        const a = new Set(r);
        o ? a.add(s) : a.delete(s), i(a);
      } else
        i(Lu(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ha,
  beforeUpdate(e, t, n) {
    e[lt] = un(n), Ha(e, t, n);
  }
};
function Ha(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let s;
  if (X(t))
    s = mi(t, r.props.value) > -1;
  else if (qt(t))
    s = t.has(r.props.value);
  else {
    if (t === n) return;
    s = At(t, Lu(e, !0));
  }
  e.checked !== s && (e.checked = s);
}
const Um = {
  created(e, { value: t }, n) {
    e.checked = At(t, n.props.value), e[lt] = un(n), Bt(e, "change", () => {
      e[lt](Gn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[lt] = un(r), t !== n && (e.checked = At(t, r.props.value));
  }
}, $m = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Bt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Hs(Gn(l)) : Gn(l)
      ), o = e.multiple, i = o ? qt(e._modelValue) ? new Set(s) : s : s[0], a = e._pendingValue = [
        o,
        o ? X(i) ? s.slice() : s : i
      ];
      try {
        e[lt](i);
      } finally {
        Ai(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[lt] = un(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Va(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[lt] = un(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Hm(t, n[1], n[0])) && Va(e, t);
  }
};
function Hm(e, t, n) {
  if (!n || X(e)) return At(e, t);
  if (qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Va(e, t) {
  const n = e.multiple, r = X(t);
  if (!(n && !r && !qt(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s], a = Gn(i);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = mi(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (At(Gn(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Gn(e) {
  return "_value" in e ? e._value : e.value;
}
function Lu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const E5 = {
  created(e, t, n) {
    Zr(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Zr(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Zr(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Zr(e, t, n, r, "updated");
  }
};
function Vm(e, t) {
  switch (e) {
    case "SELECT":
      return $m;
    case "TEXTAREA":
      return $a;
    default:
      switch (t) {
        case "checkbox":
          return Fm;
        case "radio":
          return Um;
        default:
          return $a;
      }
  }
}
function Zr(e, t, n, r, s) {
  const i = Vm(
    e.tagName,
    n.props && n.props.type
  )[s];
  i && i(e, t, n, r);
}
const jm = ["ctrl", "shift", "alt", "meta"], Wm = {
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
  exact: (e, t) => jm.some((n) => e[`${n}Key`] && !t.includes(n))
}, v5 = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = Wm[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  }));
}, Bm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, S5 = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((s) => {
    if (!("key" in s))
      return;
    const o = Xt(s.key);
    if (t.some(
      (i) => i === o || Bm[i] === o
    ))
      return e(s);
  }));
}, Km = /* @__PURE__ */ Pe({ patchProp: Om }, lm);
let ja;
function zm() {
  return ja || (ja = Vh(Km));
}
const qm = ((...e) => {
  const t = zm().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Ym(r);
    if (!s) return;
    const o = t._component;
    !re(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Gm(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function Gm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ym(e) {
  return we(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ru;
const Zs = (e) => Ru = e, Cu = (
  /* istanbul ignore next */
  Symbol()
);
function Qo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var yr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(yr || (yr = {}));
function Xm() {
  const e = pi(!0), t = e.run(() => /* @__PURE__ */ le({}));
  let n = [], r = [];
  const s = vi({
    install(o) {
      Zs(s), s._a = o, o.provide(Cu, s), o.config.globalProperties.$pinia = s, r.forEach((i) => n.push(i)), r = [];
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
const Pu = () => {
};
function Wa(e, t, n, r = Pu) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && dc() && vd(s), s;
}
function Un(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Jm = (e) => e(), Ba = Symbol(), Lo = Symbol();
function Zo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], s = e[n];
    Qo(s) && Qo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ Re(r) && !/* @__PURE__ */ Mt(r) ? e[n] = Zo(s, r) : e[n] = r;
  }
  return e;
}
const Qm = (
  /* istanbul ignore next */
  Symbol()
);
function Zm(e) {
  return !Qo(e) || !e.hasOwnProperty(Qm);
}
const { assign: nn } = Object;
function ep(e) {
  return !!(/* @__PURE__ */ Re(e) && e.effect);
}
function tp(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t, a = n.state.value[e];
  let l;
  function u() {
    a || (n.state.value[e] = s ? s() : {});
    const c = /* @__PURE__ */ Bd(n.state.value[e]);
    return nn(c, o, Object.keys(i || {}).reduce((f, m) => (f[m] = vi(ye(() => {
      Zs(n);
      const y = n._s.get(e);
      return i[m].call(y, y);
    })), f), {}));
  }
  return l = Nu(e, u, t, n, r, !0), l;
}
function Nu(e, t, n = {}, r, s, o) {
  let i;
  const a = nn({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = [], m = [], y;
  const T = r.state.value[e];
  !o && !T && (r.state.value[e] = {});
  let A;
  function M(k) {
    let O;
    u = c = !1, typeof k == "function" ? (k(r.state.value[e]), O = {
      type: yr.patchFunction,
      storeId: e,
      events: y
    }) : (Zo(r.state.value[e], k), O = {
      type: yr.patchObject,
      payload: k,
      storeId: e,
      events: y
    });
    const K = A = Symbol();
    Ai().then(() => {
      A === K && (u = !0);
    }), c = !0, Un(f, O, r.state.value[e]);
  }
  const v = o ? function() {
    const { state: O } = n, K = O ? O() : {};
    this.$patch((Y) => {
      nn(Y, K);
    });
  } : (
    /* istanbul ignore next */
    Pu
  );
  function w() {
    i.stop(), f = [], m = [], r._s.delete(e);
  }
  const E = (k, O = "") => {
    if (Ba in k)
      return k[Lo] = O, k;
    const K = function() {
      Zs(r);
      const Y = Array.from(arguments), H = [], J = [];
      function se(V) {
        H.push(V);
      }
      function ge(V) {
        J.push(V);
      }
      Un(m, {
        args: Y,
        name: K[Lo],
        store: C,
        after: se,
        onError: ge
      });
      let Z;
      try {
        Z = k.apply(this && this.$id === e ? this : C, Y);
      } catch (V) {
        throw Un(J, V), V;
      }
      return Z instanceof Promise ? Z.then((V) => (Un(H, V), V)).catch((V) => (Un(J, V), Promise.reject(V))) : (Un(H, Z), Z);
    };
    return K[Ba] = !0, K[Lo] = O, K;
  }, b = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Wa.bind(null, m),
    $patch: M,
    $reset: v,
    $subscribe(k, O = {}) {
      const K = Wa(f, k, O.detached, () => Y()), Y = i.run(() => Cn(() => r.state.value[e], (H) => {
        (O.flush === "sync" ? c : u) && k({
          storeId: e,
          type: yr.direct,
          events: y
        }, H);
      }, nn({}, l, O)));
      return K;
    },
    $dispose: w
  }, C = /* @__PURE__ */ $r(b);
  r._s.set(e, C);
  const P = (r._a && r._a.runWithContext || Jm)(() => r._e.run(() => (i = pi()).run(() => t({ action: E }))));
  for (const k in P) {
    const O = P[k];
    if (/* @__PURE__ */ Re(O) && !ep(O) || /* @__PURE__ */ Mt(O))
      o || (T && Zm(O) && (/* @__PURE__ */ Re(O) ? O.value = T[k] : Zo(O, T[k])), r.state.value[e][k] = O);
    else if (typeof O == "function") {
      const K = E(O, k);
      P[k] = K, a.actions[k] = O;
    }
  }
  return nn(C, P), nn(/* @__PURE__ */ ce(C), P), Object.defineProperty(C, "$state", {
    get: () => r.state.value[e],
    set: (k) => {
      M((O) => {
        nn(O, k);
      });
    }
  }), r._p.forEach((k) => {
    nn(C, i.run(() => k({
      store: C,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), T && o && n.hydrate && n.hydrate(C.$state, T), u = !0, c = !0, C;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Iu(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  typeof e == "string" ? (r = e, s = o ? n : t) : (s = e, r = e.id);
  function i(a, l) {
    const u = th();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? St(Cu, null) : null), a && Zs(a), a = Ru, a._s.has(r) || (o ? Nu(r, t, s, a) : tp(r, s, a)), a._s.get(r);
  }
  return i.$id = r, i;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const np = () => {
}, Cs = Array.isArray;
function Ka(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function rp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!sp(e[n], t[n])) return !1;
  return !0;
}
function sp(e, t) {
  return Cs(e) ? za(e, t) : Cs(t) ? za(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function za(e, t) {
  return Cs(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
const eo = Symbol(""), Mi = Symbol("");
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function qa(e) {
  const t = St(eo), n = St(Mi), r = ye(() => {
    const l = _r(e.to);
    return t.resolve(l);
  }), s = ye(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const m = f.findIndex(Ka.bind(null, c));
    if (m > -1) return m;
    const y = Ga(l[u - 2]);
    return u > 1 && Ga(c) === y && f[f.length - 1].path !== y ? f.findIndex(Ka.bind(null, l[u - 2])) : m;
  }), o = ye(() => s.value > -1 && cp(n.params, r.value.params)), i = ye(() => s.value > -1 && s.value === n.matched.length - 1 && rp(n.params, r.value.params));
  function a(l = {}) {
    if (lp(l)) {
      const u = t[_r(e.replace) ? "replace" : "push"](_r(e.to)).catch(np);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: ye(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function op(e) {
  return e.length === 1 ? e[0] : e;
}
const ip = /* @__PURE__ */ Dn({
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
  useLink: qa,
  setup(e, { slots: t }) {
    const n = /* @__PURE__ */ $r(qa(e)), { options: r } = St(eo), s = ye(() => ({
      [Ya(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [Ya(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && op(t.default(n));
      return e.custom ? o : zn("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), ap = ip;
function lp(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function cp(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Cs(s) || s.length !== r.length || r.some((o, i) => o.valueOf() !== s[i].valueOf())) return !1;
  }
  return !0;
}
function Ga(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ya = (e, t, n) => e ?? t ?? n;
function A5() {
  return St(eo);
}
function w5(e) {
  return St(Mi);
}
const up = ["stroke-width"], fp = ["d"], Xa = /* @__PURE__ */ Dn({
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
    }, r = ye(() => n[t.name]), s = ye(() => ({
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    })[t.size]);
    return (o, i) => (Wt(), fr("svg", {
      class: on(s.value),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.strokeWidth
    }, [
      yt("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: r.value
      }, null, 8, fp)
    ], 10, up));
  }
});
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ps = typeof window < "u", hn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), hp = (e, t, n) => mp({ l: e, k: t, s: n }), mp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ce = (e) => typeof e == "number" && isFinite(e), pp = (e) => ku(e) === "[object Date]", fn = (e) => ku(e) === "[object RegExp]", to = (e) => te(e) && Object.keys(e).length === 0, Be = Object.assign, _p = Object.create, be = (e = null) => _p(e);
let Ja;
const On = () => Ja || (Ja = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : be());
function Qa(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Za(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function gp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, o) => `${s}="${Za(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, o) => `${s}='${Za(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const bp = Object.prototype.hasOwnProperty;
function Et(e, t) {
  return bp.call(e, t);
}
const Ae = Array.isArray, Se = (e) => typeof e == "function", q = (e) => typeof e == "string", ae = (e) => typeof e == "boolean", he = (e) => e !== null && typeof e == "object", yp = (e) => he(e) && Se(e.then) && Se(e.catch), Mu = Object.prototype.toString, ku = (e) => Mu.call(e), te = (e) => {
  if (!he(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Ep = (e) => e == null ? "" : Ae(e) || te(e) && e.toString === Mu ? JSON.stringify(e, null, 2) : String(e);
function vp(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
function no(e) {
  let t = e;
  return () => ++t;
}
const es = (e) => !he(e) || Ae(e);
function us(e, t) {
  if (es(e) || es(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((o) => {
      o !== "__proto__" && (he(r[o]) && !he(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : be()), es(s[o]) || es(r[o]) ? s[o] = r[o] : n.push({ src: r[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Sp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ns(e, t, n) {
  return { start: e, end: t };
}
const Ap = /\{([0-9a-zA-Z]+)\}/g;
function xu(e, ...t) {
  return t.length === 1 && wp(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ap, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Du = Object.assign, el = (e) => typeof e == "string", wp = (e) => e !== null && typeof e == "object";
function Fu(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const ki = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Tp = {
  [ki.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Op(e, t, ...n) {
  const r = xu(Tp[e], ...n || []), s = { message: String(r), code: e };
  return t && (s.location = t), s;
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
}, Lp = {
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
function Jn(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n, i = xu((s || Lp)[e] || "", ...o || []), a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a;
}
function Rp(e) {
  throw e;
}
const Ft = " ", Cp = "\r", nt = `
`, Pp = "\u2028", Np = "\u2029";
function Ip(e) {
  const t = e;
  let n = 0, r = 1, s = 1, o = 0;
  const i = (P) => t[P] === Cp && t[P + 1] === nt, a = (P) => t[P] === nt, l = (P) => t[P] === Np, u = (P) => t[P] === Pp, c = (P) => i(P) || a(P) || l(P) || u(P), f = () => n, m = () => r, y = () => s, T = () => o, A = (P) => i(P) || l(P) || u(P) ? nt : t[P], M = () => A(n), v = () => A(n + o);
  function w() {
    return o = 0, c(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function E() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function b() {
    n = 0, r = 1, s = 1, o = 0;
  }
  function C(P = 0) {
    o = P;
  }
  function N() {
    const P = n + o;
    for (; P !== n; )
      w();
    o = 0;
  }
  return {
    index: f,
    line: m,
    column: y,
    peekOffset: T,
    charAt: A,
    currentChar: M,
    currentPeek: v,
    next: w,
    peek: E,
    reset: b,
    resetPeek: C,
    skipToPeek: N
  };
}
const Zt = void 0, Mp = ".", tl = "'", kp = "tokenizer";
function xp(e, t = {}) {
  const n = t.location !== !1, r = Ip(e), s = () => r.index(), o = () => Sp(r.line(), r.column(), r.index()), i = o(), a = s(), l = {
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
  function f(d, h, L, ...F) {
    const B = u();
    if (h.column += L, h.offset += L, c) {
      const W = n ? Ns(B.startLoc, h) : null, R = Jn(d, W, {
        domain: kp,
        args: F
      });
      c(R);
    }
  }
  function m(d, h, L) {
    d.endLoc = o(), d.currentType = h;
    const F = { type: h };
    return n && (F.loc = Ns(d.startLoc, d.endLoc)), L != null && (F.value = L), F;
  }
  const y = (d) => m(
    d,
    14
    /* TokenTypes.EOF */
  );
  function T(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (f(ee.EXPECTED_TOKEN, o(), 0, h), "");
  }
  function A(d) {
    let h = "";
    for (; d.currentPeek() === Ft || d.currentPeek() === nt; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function M(d) {
    const h = A(d);
    return d.skipToPeek(), h;
  }
  function v(d) {
    if (d === Zt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function w(d) {
    if (d === Zt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function E(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    A(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function b(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    A(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), B = w(F);
    return d.resetPeek(), B;
  }
  function C(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    A(d);
    const F = d.currentPeek() === tl;
    return d.resetPeek(), F;
  }
  function N(d, h) {
    const { currentType: L } = h;
    if (L !== 8)
      return !1;
    A(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function P(d, h) {
    const { currentType: L } = h;
    if (L !== 9)
      return !1;
    A(d);
    const F = v(d.currentPeek());
    return d.resetPeek(), F;
  }
  function k(d, h) {
    const { currentType: L } = h;
    if (!(L === 8 || L === 12))
      return !1;
    A(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function O(d, h) {
    const { currentType: L } = h;
    if (L !== 10)
      return !1;
    const F = () => {
      const W = d.currentPeek();
      return W === "{" ? v(d.peek()) : W === "@" || W === "%" || W === "|" || W === ":" || W === "." || W === Ft || !W ? !1 : W === nt ? (d.peek(), F()) : H(d, !1);
    }, B = F();
    return d.resetPeek(), B;
  }
  function K(d) {
    A(d);
    const h = d.currentPeek() === "|";
    return d.resetPeek(), h;
  }
  function Y(d) {
    const h = A(d), L = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: L,
      hasSpace: h.length > 0
    };
  }
  function H(d, h = !0) {
    const L = (B = !1, W = "", R = !1) => {
      const $ = d.currentPeek();
      return $ === "{" ? W === "%" ? !1 : B : $ === "@" || !$ ? W === "%" ? !0 : B : $ === "%" ? (d.peek(), L(B, "%", !0)) : $ === "|" ? W === "%" || R ? !0 : !(W === Ft || W === nt) : $ === Ft ? (d.peek(), L(!0, Ft, R)) : $ === nt ? (d.peek(), L(!0, nt, R)) : !0;
    }, F = L();
    return h && d.resetPeek(), F;
  }
  function J(d, h) {
    const L = d.currentChar();
    return L === Zt ? Zt : h(L) ? (d.next(), L) : null;
  }
  function se(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function ge(d) {
    return J(d, se);
  }
  function Z(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function V(d) {
    return J(d, Z);
  }
  function G(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function ue(d) {
    return J(d, G);
  }
  function Te(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function fe(d) {
    return J(d, Te);
  }
  function ne(d) {
    let h = "", L = "";
    for (; h = ue(d); )
      L += h;
    return L;
  }
  function ke(d) {
    M(d);
    const h = d.currentChar();
    return h !== "%" && f(ee.EXPECTED_TOKEN, o(), 0, h), d.next(), "%";
  }
  function Ue(d) {
    let h = "";
    for (; ; ) {
      const L = d.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (H(d))
          h += L, d.next();
        else
          break;
      else if (L === Ft || L === nt)
        if (H(d))
          h += L, d.next();
        else {
          if (K(d))
            break;
          h += L, d.next();
        }
      else
        h += L, d.next();
    }
    return h;
  }
  function Qe(d) {
    M(d);
    let h = "", L = "";
    for (; h = V(d); )
      L += h;
    return d.currentChar() === Zt && f(ee.UNTERMINATED_CLOSING_BRACE, o(), 0), L;
  }
  function Ke(d) {
    M(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${ne(d)}`) : h += ne(d), d.currentChar() === Zt && f(ee.UNTERMINATED_CLOSING_BRACE, o(), 0), h;
  }
  function ie(d) {
    return d !== tl && d !== nt;
  }
  function Oe(d) {
    M(d), T(d, "'");
    let h = "", L = "";
    for (; h = J(d, ie); )
      h === "\\" ? L += $e(d) : L += h;
    const F = d.currentChar();
    return F === nt || F === Zt ? (f(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), F === nt && (d.next(), T(d, "'")), L) : (T(d, "'"), L);
  }
  function $e(d) {
    const h = d.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return d.next(), `\\${h}`;
      case "u":
        return xe(d, h, 4);
      case "U":
        return xe(d, h, 6);
      default:
        return f(ee.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, h), "";
    }
  }
  function xe(d, h, L) {
    T(d, h);
    let F = "";
    for (let B = 0; B < L; B++) {
      const W = fe(d);
      if (!W) {
        f(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${h}${F}${d.currentChar()}`);
        break;
      }
      F += W;
    }
    return `\\${h}${F}`;
  }
  function wt(d) {
    return d !== "{" && d !== "}" && d !== Ft && d !== nt;
  }
  function p(d) {
    M(d);
    let h = "", L = "";
    for (; h = J(d, wt); )
      L += h;
    return L;
  }
  function _(d) {
    let h = "", L = "";
    for (; h = ge(d); )
      L += h;
    return L;
  }
  function g(d) {
    const h = (L) => {
      const F = d.currentChar();
      return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Ft ? L : (L += F, d.next(), h(L));
    };
    return h("");
  }
  function I(d) {
    M(d);
    const h = T(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return M(d), h;
  }
  function U(d, h) {
    let L = null;
    switch (d.currentChar()) {
      case "{":
        return h.braceNest >= 1 && f(ee.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), d.next(), L = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), M(d), h.braceNest++, L;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && f(ee.EMPTY_PLACEHOLDER, o(), 0), d.next(), L = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && M(d), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), L;
      case "@":
        return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, o(), 0), L = x(d, h) || y(h), h.braceNest = 0, L;
      default: {
        let B = !0, W = !0, R = !0;
        if (K(d))
          return h.braceNest > 0 && f(ee.UNTERMINATED_CLOSING_BRACE, o(), 0), L = m(h, 1, I(d)), h.braceNest = 0, h.inLinked = !1, L;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return f(ee.UNTERMINATED_CLOSING_BRACE, o(), 0), h.braceNest = 0, D(d, h);
        if (B = E(d, h))
          return L = m(h, 5, Qe(d)), M(d), L;
        if (W = b(d, h))
          return L = m(h, 6, Ke(d)), M(d), L;
        if (R = C(d, h))
          return L = m(h, 7, Oe(d)), M(d), L;
        if (!B && !W && !R)
          return L = m(h, 13, p(d)), f(ee.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, L.value), M(d), L;
        break;
      }
    }
    return L;
  }
  function x(d, h) {
    const { currentType: L } = h;
    let F = null;
    const B = d.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (B === nt || B === Ft) && f(ee.INVALID_LINKED_FORMAT, o(), 0), B) {
      case "@":
        return d.next(), F = m(
          h,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, F;
      case ".":
        return M(d), d.next(), m(
          h,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return M(d), d.next(), m(
          h,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(d) ? (F = m(h, 1, I(d)), h.braceNest = 0, h.inLinked = !1, F) : N(d, h) || k(d, h) ? (M(d), x(d, h)) : P(d, h) ? (M(d), m(h, 12, _(d))) : O(d, h) ? (M(d), B === "{" ? U(d, h) || F : m(h, 11, g(d))) : (L === 8 && f(ee.INVALID_LINKED_FORMAT, o(), 0), h.braceNest = 0, h.inLinked = !1, D(d, h));
    }
  }
  function D(d, h) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return U(d, h) || y(h);
    if (h.inLinked)
      return x(d, h) || y(h);
    switch (d.currentChar()) {
      case "{":
        return U(d, h) || y(h);
      case "}":
        return f(ee.UNBALANCED_CLOSING_BRACE, o(), 0), d.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return x(d, h) || y(h);
      default: {
        if (K(d))
          return L = m(h, 1, I(d)), h.braceNest = 0, h.inLinked = !1, L;
        const { isModulo: B, hasSpace: W } = Y(d);
        if (B)
          return W ? m(h, 0, Ue(d)) : m(h, 4, ke(d));
        if (H(d))
          return m(h, 0, Ue(d));
        break;
      }
    }
    return L;
  }
  function j() {
    const { currentType: d, offset: h, startLoc: L, endLoc: F } = l;
    return l.lastType = d, l.lastOffset = h, l.lastStartLoc = L, l.lastEndLoc = F, l.offset = s(), l.startLoc = o(), r.currentChar() === Zt ? m(
      l,
      14
      /* TokenTypes.EOF */
    ) : D(r, l);
  }
  return {
    nextToken: j,
    currentOffset: s,
    currentPosition: o,
    context: u
  };
}
const Dp = "parser", Fp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Up(e, t, n) {
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
function $p(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function s(E, b, C, N, ...P) {
    const k = E.currentPosition();
    if (k.offset += N, k.column += N, n) {
      const O = t ? Ns(C, k) : null, K = Jn(b, O, {
        domain: Dp,
        args: P
      });
      n(K);
    }
  }
  function o(E, b, C, N, ...P) {
    const k = E.currentPosition();
    if (k.offset += N, k.column += N, r) {
      const O = t ? Ns(C, k) : null;
      r(Op(b, O, P));
    }
  }
  function i(E, b, C) {
    const N = { type: E };
    return t && (N.start = b, N.end = b, N.loc = { start: C, end: C }), N;
  }
  function a(E, b, C, N) {
    t && (E.end = b, E.loc && (E.loc.end = C));
  }
  function l(E, b) {
    const C = E.context(), N = i(3, C.offset, C.startLoc);
    return N.value = b, a(N, E.currentOffset(), E.currentPosition()), N;
  }
  function u(E, b) {
    const C = E.context(), { lastOffset: N, lastStartLoc: P } = C, k = i(5, N, P);
    return k.index = parseInt(b, 10), E.nextToken(), a(k, E.currentOffset(), E.currentPosition()), k;
  }
  function c(E, b, C) {
    const N = E.context(), { lastOffset: P, lastStartLoc: k } = N, O = i(4, P, k);
    return O.key = b, C === !0 && (O.modulo = !0), E.nextToken(), a(O, E.currentOffset(), E.currentPosition()), O;
  }
  function f(E, b) {
    const C = E.context(), { lastOffset: N, lastStartLoc: P } = C, k = i(9, N, P);
    return k.value = b.replace(Fp, Up), E.nextToken(), a(k, E.currentOffset(), E.currentPosition()), k;
  }
  function m(E) {
    const b = E.nextToken(), C = E.context(), { lastOffset: N, lastStartLoc: P } = C, k = i(8, N, P);
    return b.type !== 12 ? (s(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), k.value = "", a(k, N, P), {
      nextConsumeToken: b,
      node: k
    }) : (b.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(b)), k.value = b.value || "", a(k, E.currentOffset(), E.currentPosition()), {
      node: k
    });
  }
  function y(E, b) {
    const C = E.context(), N = i(7, C.offset, C.startLoc);
    return N.value = b, a(N, E.currentOffset(), E.currentPosition()), N;
  }
  function T(E) {
    const b = E.context(), C = i(6, b.offset, b.startLoc);
    let N = E.nextToken();
    if (N.type === 9) {
      const P = m(E);
      C.modifier = P.node, N = P.nextConsumeToken || E.nextToken();
    }
    switch (N.type !== 10 && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(N)), N = E.nextToken(), N.type === 2 && (N = E.nextToken()), N.type) {
      case 11:
        N.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(N)), C.key = y(E, N.value || "");
        break;
      case 5:
        N.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(N)), C.key = c(E, N.value || "");
        break;
      case 6:
        N.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(N)), C.key = u(E, N.value || "");
        break;
      case 7:
        N.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(N)), C.key = f(E, N.value || "");
        break;
      default: {
        s(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const P = E.context(), k = i(7, P.offset, P.startLoc);
        return k.value = "", a(k, P.offset, P.startLoc), C.key = k, a(C, P.offset, P.startLoc), {
          nextConsumeToken: N,
          node: C
        };
      }
    }
    return a(C, E.currentOffset(), E.currentPosition()), {
      node: C
    };
  }
  function A(E) {
    const b = E.context(), C = b.currentType === 1 ? E.currentOffset() : b.offset, N = b.currentType === 1 ? b.endLoc : b.startLoc, P = i(2, C, N);
    P.items = [];
    let k = null, O = null;
    do {
      const H = k || E.nextToken();
      switch (k = null, H.type) {
        case 0:
          H.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(H)), P.items.push(l(E, H.value || ""));
          break;
        case 6:
          H.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(H)), P.items.push(u(E, H.value || ""));
          break;
        case 4:
          O = !0;
          break;
        case 5:
          H.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(H)), P.items.push(c(E, H.value || "", !!O)), O && (o(E, ki.USE_MODULO_SYNTAX, b.lastStartLoc, 0, bt(H)), O = null);
          break;
        case 7:
          H.value == null && s(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, bt(H)), P.items.push(f(E, H.value || ""));
          break;
        case 8: {
          const J = T(E);
          P.items.push(J.node), k = J.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const K = b.currentType === 1 ? b.lastOffset : E.currentOffset(), Y = b.currentType === 1 ? b.lastEndLoc : E.currentPosition();
    return a(P, K, Y), P;
  }
  function M(E, b, C, N) {
    const P = E.context();
    let k = N.items.length === 0;
    const O = i(1, b, C);
    O.cases = [], O.cases.push(N);
    do {
      const K = A(E);
      k || (k = K.items.length === 0), O.cases.push(K);
    } while (P.currentType !== 14);
    return k && s(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), a(O, E.currentOffset(), E.currentPosition()), O;
  }
  function v(E) {
    const b = E.context(), { offset: C, startLoc: N } = b, P = A(E);
    return b.currentType === 14 ? P : M(E, C, N, P);
  }
  function w(E) {
    const b = xp(E, Du({}, e)), C = b.context(), N = i(0, C.offset, C.startLoc);
    return t && N.loc && (N.loc.source = E), N.body = v(b), e.onCacheKey && (N.cacheKey = e.onCacheKey(E)), C.currentType !== 14 && s(b, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, E[C.offset] || ""), a(N, b.currentOffset(), b.currentPosition()), N;
  }
  return { parse: w };
}
function bt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Hp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function nl(e, t) {
  for (let n = 0; n < e.length; n++)
    xi(e[n], t);
}
function xi(e, t) {
  switch (e.type) {
    case 1:
      nl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      nl(e.items, t);
      break;
    case 6: {
      xi(e.key, t), t.helper(
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
function Vp(e, t = {}) {
  const n = Hp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && xi(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function jp(e) {
  const t = e.body;
  return t.type === 2 ? rl(t) : t.cases.forEach((n) => rl(n)), e;
}
function rl(e) {
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
      e.static = Fu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Wp = "minifier";
function jn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      jn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        jn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        jn(n[r]);
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
      jn(t.key), t.k = t.key, delete t.key, t.modifier && (jn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw Jn(ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Wp,
        args: [e.type]
      });
  }
  delete e.type;
}
const Bp = "parser";
function Kp(e, t) {
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
  function l(A, M) {
    i.code += A;
  }
  function u(A, M = !0) {
    const v = M ? r : "";
    l(s ? v + "  ".repeat(A) : v);
  }
  function c(A = !0) {
    const M = ++i.indentLevel;
    A && u(M);
  }
  function f(A = !0) {
    const M = --i.indentLevel;
    A && u(M);
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
function zp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Yn(e, t.key), t.modifier ? (e.push(", "), Yn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function qp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (Yn(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Gp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (Yn(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Yp(e, t) {
  t.body ? Yn(e, t.body) : e.push("null");
}
function Yn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Yp(e, t);
      break;
    case 1:
      Gp(e, t);
      break;
    case 2:
      qp(e, t);
      break;
    case 6:
      zp(e, t);
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
      throw Jn(ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Bp,
        args: [t.type]
      });
  }
}
const Xp = (e, t = {}) => {
  const n = el(t.mode) ? t.mode : "normal", r = el(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], a = Kp(e, {
    filename: r,
    breakLineCode: s,
    needIndent: o
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(o), i.length > 0 && (a.push(`const { ${Fu(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), a.newline()), a.push("return "), Yn(a, e), a.deindent(o), a.push("}"), delete e.helpers;
  const { code: l, map: u } = a.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Jp(e, t = {}) {
  const n = Du({}, t), r = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, a = $p(n).parse(e);
  return r ? (o && jp(a), s && jn(a), { ast: a, code: "" }) : (Vp(a, n), Xp(a, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Qp() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (On().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (On().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function kt(e) {
  return he(e) && Di(e) === 0 && (Et(e, "b") || Et(e, "body"));
}
const Uu = ["b", "body"];
function Zp(e) {
  return mn(e, Uu);
}
const $u = ["c", "cases"];
function e0(e) {
  return mn(e, $u, []);
}
const Hu = ["s", "static"];
function t0(e) {
  return mn(e, Hu);
}
const Vu = ["i", "items"];
function n0(e) {
  return mn(e, Vu, []);
}
const ju = ["t", "type"];
function Di(e) {
  return mn(e, ju);
}
const Wu = ["v", "value"];
function ts(e, t) {
  const n = mn(e, Wu);
  if (n != null)
    return n;
  throw Ir(t);
}
const Bu = ["m", "modifier"];
function r0(e) {
  return mn(e, Bu);
}
const Ku = ["k", "key"];
function s0(e) {
  const t = mn(e, Ku);
  if (t)
    return t;
  throw Ir(
    6
    /* NodeTypes.Linked */
  );
}
function mn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Et(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const zu = [
  ...Uu,
  ...$u,
  ...Hu,
  ...Vu,
  ...Ku,
  ...Bu,
  ...Wu,
  ...ju
];
function Ir(e) {
  return new Error(`unhandled node type: ${e}`);
}
const pn = [];
pn[
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
pn[
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
pn[
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
pn[
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
pn[
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
pn[
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
pn[
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
const o0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function i0(e) {
  return o0.test(e);
}
function a0(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function l0(e) {
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
function c0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : i0(t) ? a0(t) : "*" + t;
}
function u0(e) {
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
      if (s = 0, i === void 0 || (i = c0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const T = e[n + 1];
    if (r === 5 && T === "'" || r === 6 && T === '"')
      return n++, a = "\\" + T, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, o = e[n], !(o === "\\" && y())) {
      if (l = l0(o), f = pn[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (a = o, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const sl = /* @__PURE__ */ new Map();
function f0(e, t) {
  return he(e) ? e[t] : null;
}
function d0(e, t) {
  if (!he(e))
    return null;
  let n = sl.get(t);
  if (n || (n = u0(t), n && sl.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, o = 0;
  for (; o < r; ) {
    const i = n[o];
    if (zu.includes(i) && kt(s))
      return null;
    const a = s[i];
    if (a === void 0 || Se(s))
      return null;
    s = a, o++;
  }
  return s;
}
const h0 = (e) => e, m0 = (e) => "", p0 = "text", _0 = (e) => e.length === 0 ? "" : vp(e), g0 = Ep;
function ol(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function b0(e) {
  const t = Ce(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ce(e.named.count) || Ce(e.named.n)) ? Ce(e.named.count) ? e.named.count : Ce(e.named.n) ? e.named.n : t : t;
}
function y0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function E0(e = {}) {
  const t = e.locale, n = b0(e), r = he(e.pluralRules) && q(t) && Se(e.pluralRules[t]) ? e.pluralRules[t] : ol, s = he(e.pluralRules) && q(t) && Se(e.pluralRules[t]) ? ol : void 0, o = (v) => v[r(n, v.length, s)], i = e.list || [], a = (v) => i[v], l = e.named || be();
  Ce(e.pluralIndex) && y0(n, l);
  const u = (v) => l[v];
  function c(v) {
    const w = Se(e.messages) ? e.messages(v) : he(e.messages) ? e.messages[v] : !1;
    return w || (e.parent ? e.parent.message(v) : m0);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : h0, m = te(e.processor) && Se(e.processor.normalize) ? e.processor.normalize : _0, y = te(e.processor) && Se(e.processor.interpolate) ? e.processor.interpolate : g0, T = te(e.processor) && q(e.processor.type) ? e.processor.type : p0, M = {
    list: a,
    named: u,
    plural: o,
    linked: (v, ...w) => {
      const [E, b] = w;
      let C = "text", N = "";
      w.length === 1 ? he(E) ? (N = E.modifier || N, C = E.type || C) : q(E) && (N = E || N) : w.length === 2 && (q(E) && (N = E || N), q(b) && (C = b || C));
      const P = c(v)(M), k = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ae(P) && N ? P[0] : P
      );
      return N ? f(N)(k, C) : k;
    },
    message: c,
    type: T,
    interpolate: y,
    normalize: m,
    values: Be(be(), i, l)
  };
  return M;
}
let Mr = null;
function v0(e) {
  Mr = e;
}
function S0(e, t, n) {
  Mr && Mr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const A0 = /* @__PURE__ */ w0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function w0(e) {
  return (t) => Mr && Mr.emit(e, t);
}
const T0 = ki.__EXTEND_POINT__, En = no(T0), O0 = {
  // 2
  FALLBACK_TO_TRANSLATE: En(),
  // 3
  CANNOT_FORMAT_NUMBER: En(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: En(),
  // 5
  CANNOT_FORMAT_DATE: En(),
  // 6
  FALLBACK_TO_DATE_FORMAT: En(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: En(),
  // 8
  __EXTEND_POINT__: En()
  // 9
}, qu = ee.__EXTEND_POINT__, vn = no(qu), Nt = {
  INVALID_ARGUMENT: qu,
  // 17
  INVALID_DATE_ARGUMENT: vn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: vn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: vn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: vn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: vn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: vn(),
  // 23
  __EXTEND_POINT__: vn()
  // 24
};
function Kt(e) {
  return Jn(e, null, void 0);
}
function Fi(e, t) {
  return t.locale != null ? il(t.locale) : il(e.locale);
}
let Ro;
function il(e) {
  if (q(e))
    return e;
  if (Se(e)) {
    if (e.resolvedOnce && Ro != null)
      return Ro;
    if (e.constructor.name === "Function") {
      const t = e();
      if (yp(t))
        throw Kt(Nt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ro = t;
    } else
      throw Kt(Nt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Kt(Nt.NOT_SUPPORT_LOCALE_TYPE);
}
function L0(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ae(t) ? t : he(t) ? Object.keys(t) : q(t) ? [t] : [n]
  ])];
}
function Gu(e, t, n) {
  const r = q(n) ? n : Xn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; Ae(i); )
      i = al(o, i, t);
    const a = Ae(t) || !te(t) ? t : t.default ? t.default : null;
    i = q(a) ? [a] : a, Ae(i) && al(o, i, !1), s.__localeChainCache.set(r, o);
  }
  return o;
}
function al(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ae(r); s++) {
    const o = t[s];
    q(o) && (r = R0(e, t[s], n));
  }
  return r;
}
function R0(e, t, n) {
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
    e.push(s), (Ae(n) || te(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const P0 = "9.14.5", ro = -1, Xn = "en-US", ll = "", cl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function N0() {
  return {
    upper: (e, t) => t === "text" && q(e) ? e.toUpperCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && q(e) ? e.toLowerCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && q(e) ? cl(e) : t === "vnode" && he(e) && "__v_isVNode" in e ? cl(e.children) : e
  };
}
let Yu;
function I0(e) {
  Yu = e;
}
let Xu;
function M0(e) {
  Xu = e;
}
let Ju;
function k0(e) {
  Ju = e;
}
let Qu = null;
const x0 = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Qu = e;
}, D0 = /* @__NO_SIDE_EFFECTS__ */ () => Qu;
let Zu = null;
const ul = (e) => {
  Zu = e;
}, F0 = () => Zu;
let fl = 0;
function U0(e = {}) {
  const t = Se(e.onWarn) ? e.onWarn : dp, n = q(e.version) ? e.version : P0, r = q(e.locale) || Se(e.locale) ? e.locale : Xn, s = Se(r) ? Xn : r, o = Ae(e.fallbackLocale) || te(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, i = te(e.messages) ? e.messages : Co(s), a = te(e.datetimeFormats) ? e.datetimeFormats : Co(s), l = te(e.numberFormats) ? e.numberFormats : Co(s), u = Be(be(), e.modifiers, N0()), c = e.pluralRules || be(), f = Se(e.missing) ? e.missing : null, m = ae(e.missingWarn) || fn(e.missingWarn) ? e.missingWarn : !0, y = ae(e.fallbackWarn) || fn(e.fallbackWarn) ? e.fallbackWarn : !0, T = !!e.fallbackFormat, A = !!e.unresolving, M = Se(e.postTranslation) ? e.postTranslation : null, v = te(e.processor) ? e.processor : null, w = ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, b = Se(e.messageCompiler) ? e.messageCompiler : Yu, C = Se(e.messageResolver) ? e.messageResolver : Xu || f0, N = Se(e.localeFallbacker) ? e.localeFallbacker : Ju || L0, P = he(e.fallbackContext) ? e.fallbackContext : void 0, k = e, O = he(k.__datetimeFormatters) ? k.__datetimeFormatters : /* @__PURE__ */ new Map(), K = he(k.__numberFormatters) ? k.__numberFormatters : /* @__PURE__ */ new Map(), Y = he(k.__meta) ? k.__meta : {};
  fl++;
  const H = {
    version: n,
    cid: fl,
    locale: r,
    fallbackLocale: o,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: m,
    fallbackWarn: y,
    fallbackFormat: T,
    unresolving: A,
    postTranslation: M,
    processor: v,
    warnHtmlMessage: w,
    escapeParameter: E,
    messageCompiler: b,
    messageResolver: C,
    localeFallbacker: N,
    fallbackContext: P,
    onWarn: t,
    __meta: Y
  };
  return H.datetimeFormats = a, H.numberFormats = l, H.__datetimeFormatters = O, H.__numberFormatters = K, __INTLIFY_PROD_DEVTOOLS__ && S0(H, n, Y), H;
}
const Co = (e) => ({ [e]: be() });
function Ui(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const a = o(e, n, t, s);
    return q(a) ? a : t;
  } else
    return t;
}
function sr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function $0(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function H0(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if ($0(e, t[r]))
      return !0;
  return !1;
}
function Po(e) {
  return (n) => V0(n, e);
}
function V0(e, t) {
  const n = Zp(t);
  if (n == null)
    throw Ir(
      0
      /* NodeTypes.Resource */
    );
  if (Di(n) === 1) {
    const o = e0(n);
    return e.plural(o.reduce((i, a) => [
      ...i,
      dl(e, a)
    ], []));
  } else
    return dl(e, n);
}
function dl(e, t) {
  const n = t0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = n0(t).reduce((s, o) => [...s, ei(e, o)], []);
    return e.normalize(r);
  }
}
function ei(e, t) {
  const n = Di(t);
  switch (n) {
    case 3:
      return ts(t, n);
    case 9:
      return ts(t, n);
    case 4: {
      const r = t;
      if (Et(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Et(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ir(n);
    }
    case 5: {
      const r = t;
      if (Et(r, "i") && Ce(r.i))
        return e.interpolate(e.list(r.i));
      if (Et(r, "index") && Ce(r.index))
        return e.interpolate(e.list(r.index));
      throw Ir(n);
    }
    case 6: {
      const r = t, s = r0(r), o = s0(r);
      return e.linked(ei(e, o), s ? ei(e, s) : void 0, e.type);
    }
    case 7:
      return ts(t, n);
    case 8:
      return ts(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const j0 = (e) => e;
let ns = be();
function W0(e, t = {}) {
  let n = !1;
  const r = t.onError || Rp;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...Jp(e, t), detectError: n };
}
function B0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && q(e)) {
    ae(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || j0)(e), s = ns[r];
    if (s)
      return s;
    const { ast: o, detectError: i } = W0(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Po(o);
    return i ? a : ns[r] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = ns[n];
      return r || (ns[n] = Po(e));
    } else
      return Po(e);
  }
}
const hl = () => "", ht = (e) => Se(e);
function ml(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: o, fallbackLocale: i, messages: a } = e, [l, u] = ti(...t), c = ae(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ae(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, T = q(u.default) || ae(u.default) ? ae(u.default) ? o ? l : () => l : u.default : n ? o ? l : () => l : "", A = n || T !== "", M = Fi(e, u);
  m && K0(u);
  let [v, w, E] = y ? [
    l,
    M,
    a[M] || be()
  ] : ef(e, l, M, i, f, c), b = v, C = l;
  if (!y && !(q(b) || kt(b) || ht(b)) && A && (b = T, C = b), !y && (!(q(b) || kt(b) || ht(b)) || !q(w)))
    return s ? ro : l;
  let N = !1;
  const P = () => {
    N = !0;
  }, k = ht(b) ? b : tf(e, l, w, b, C, P);
  if (N)
    return b;
  const O = G0(e, w, E, u), K = E0(O), Y = z0(e, k, K);
  let H = r ? r(Y, l) : Y;
  if (m && q(H) && (H = gp(H)), __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: q(l) ? l : ht(b) ? b.key : "",
      locale: w || (ht(b) ? b.locale : ""),
      format: q(b) ? b : ht(b) ? b.source : "",
      message: H
    };
    J.meta = Be({}, e.__meta, /* @__PURE__ */ D0() || {}), A0(J);
  }
  return H;
}
function K0(e) {
  Ae(e.list) ? e.list = e.list.map((t) => q(t) ? Qa(t) : t) : he(e.named) && Object.keys(e.named).forEach((t) => {
    q(e.named[t]) && (e.named[t] = Qa(e.named[t]));
  });
}
function ef(e, t, n, r, s, o) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let f = be(), m, y = null;
  const T = "translate";
  for (let A = 0; A < c.length && (m = c[A], f = i[m] || be(), (y = l(f, t)) === null && (y = f[t]), !(q(y) || kt(y) || ht(y))); A++)
    if (!H0(m, c)) {
      const M = Ui(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        o,
        T
      );
      M !== t && (y = M);
    }
  return [y, m, f];
}
function tf(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (ht(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (i == null) {
    const u = (() => r);
    return u.locale = n, u.key = t, u;
  }
  const l = i(r, q0(e, n, s, r, a, o));
  return l.locale = n, l.key = t, l.source = r, l;
}
function z0(e, t, n) {
  return t(n);
}
function ti(...e) {
  const [t, n, r] = e, s = be();
  if (!q(t) && !Ce(t) && !ht(t) && !kt(t))
    throw Kt(Nt.INVALID_ARGUMENT);
  const o = Ce(t) ? String(t) : (ht(t), t);
  return Ce(n) ? s.plural = n : q(n) ? s.default = n : te(n) && !to(n) ? s.named = n : Ae(n) && (s.list = n), Ce(r) ? s.plural = r : q(r) ? s.default = r : te(r) && Be(s, r), [o, s];
}
function q0(e, t, n, r, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (i) => {
      throw o && o(i), i;
    },
    onCacheKey: (i) => hp(t, n, i)
  };
}
function G0(e, t, n, r) {
  const { modifiers: s, pluralRules: o, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (y) => {
      let T = i(n, y);
      if (T == null && c) {
        const [, , A] = ef(c, y, t, a, l, u);
        T = i(A, y);
      }
      if (q(T) || kt(T)) {
        let A = !1;
        const v = tf(e, y, t, T, y, () => {
          A = !0;
        });
        return A ? hl : v;
      } else return ht(T) ? T : hl;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ce(r.plural) && (m.pluralIndex = r.plural), m;
}
function pl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = ni(...t), m = ae(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const y = !!c.part, T = Fi(e, c), A = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    T
  );
  if (!q(l) || l === "")
    return new Intl.DateTimeFormat(T, f).format(u);
  let M = {}, v, w = null;
  const E = "datetime format";
  for (let N = 0; N < A.length && (v = A[N], M = n[v] || {}, w = M[l], !te(w)); N++)
    Ui(e, l, v, m, E);
  if (!te(w) || !q(v))
    return r ? ro : l;
  let b = `${v}__${l}`;
  to(f) || (b = `${b}__${JSON.stringify(f)}`);
  let C = a.get(b);
  return C || (C = new Intl.DateTimeFormat(v, Be({}, w, f)), a.set(b, C)), y ? C.formatToParts(u) : C.format(u);
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
  const [t, n, r, s] = e, o = be();
  let i = be(), a;
  if (q(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Kt(Nt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw Kt(Nt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (pp(t)) {
    if (isNaN(t.getTime()))
      throw Kt(Nt.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Ce(t))
    a = t;
  else
    throw Kt(Nt.INVALID_ARGUMENT);
  return q(n) ? o.key = n : te(n) && Object.keys(n).forEach((l) => {
    nf.includes(l) ? i[l] = n[l] : o[l] = n[l];
  }), q(r) ? o.locale = r : te(r) && (i = r), te(s) && (i = s), [o.key || "", a, o, i];
}
function _l(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function gl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __numberFormatters: a } = e, [l, u, c, f] = ri(...t), m = ae(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const y = !!c.part, T = Fi(e, c), A = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    T
  );
  if (!q(l) || l === "")
    return new Intl.NumberFormat(T, f).format(u);
  let M = {}, v, w = null;
  const E = "number format";
  for (let N = 0; N < A.length && (v = A[N], M = n[v] || {}, w = M[l], !te(w)); N++)
    Ui(e, l, v, m, E);
  if (!te(w) || !q(v))
    return r ? ro : l;
  let b = `${v}__${l}`;
  to(f) || (b = `${b}__${JSON.stringify(f)}`);
  let C = a.get(b);
  return C || (C = new Intl.NumberFormat(v, Be({}, w, f)), a.set(b, C)), y ? C.formatToParts(u) : C.format(u);
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
  const [t, n, r, s] = e, o = be();
  let i = be();
  if (!Ce(t))
    throw Kt(Nt.INVALID_ARGUMENT);
  const a = t;
  return q(n) ? o.key = n : te(n) && Object.keys(n).forEach((l) => {
    rf.includes(l) ? i[l] = n[l] : o[l] = n[l];
  }), q(r) ? o.locale = r : te(r) && (i = r), te(s) && (i = s), [o.key || "", a, o, i];
}
function bl(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
Qp();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Y0 = "9.14.5";
function X0() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (On().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (On().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (On().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (On().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const J0 = O0.__EXTEND_POINT__, Ut = no(J0);
Ut(), Ut(), Ut(), Ut(), Ut(), Ut(), Ut(), Ut(), Ut();
const sf = Nt.__EXTEND_POINT__, st = no(sf), Me = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: sf,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: st(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: st(),
  // 26
  NOT_INSTALLED: st(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: st(),
  // 28
  // directive module errors
  REQUIRED_VALUE: st(),
  // 29
  INVALID_VALUE: st(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: st(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: st(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: st(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: st(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: st(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: st(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: st(),
  // 37
  // for enhancement
  __EXTEND_POINT__: st()
  // 38
};
function Fe(e, ...t) {
  return Jn(e, null, void 0);
}
const si = /* @__PURE__ */ hn("__translateVNode"), oi = /* @__PURE__ */ hn("__datetimeParts"), ii = /* @__PURE__ */ hn("__numberParts"), of = hn("__setPluralRules"), af = /* @__PURE__ */ hn("__injectWithOption"), ai = /* @__PURE__ */ hn("__dispose");
function kr(e) {
  if (!he(e) || kt(e))
    return e;
  for (const t in e)
    if (Et(e, t))
      if (!t.includes("."))
        he(e[t]) && kr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, o = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in s || (s[n[i]] = be()), !he(s[n[i]])) {
            o = !0;
            break;
          }
          s = s[n[i]];
        }
        if (o || (kt(s) ? zu.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !kt(s)) {
          const i = s[n[r]];
          he(i) && kr(i);
        }
      }
  return e;
}
function so(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t, i = te(n) ? n : Ae(r) ? be() : { [e]: be() };
  if (Ae(r) && r.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (i[l] = i[l] || be(), us(u, i[l])) : us(u, i);
    } else
      q(a) && us(JSON.parse(a), i);
  }), s == null && o)
    for (const a in i)
      Et(i, a) && kr(i[a]);
  return i;
}
function lf(e) {
  return e.type;
}
function cf(e, t, n) {
  let r = he(t.messages) ? t.messages : be();
  "__i18nGlobal" in n && (r = so(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, r[o]);
  });
  {
    if (he(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (he(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function yl(e) {
  return Ne(Vr, null, e, 0);
}
const El = "__INTLIFY_META__", vl = () => [], Q0 = () => !1;
let Sl = 0;
function Al(e) {
  return ((t, n, r, s) => e(n, r, _t() || void 0, s));
}
const Z0 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = _t();
  let t = null;
  return e && (t = lf(e)[El]) ? { [El]: t } : null;
};
function $i(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0, o = e.flatJson, i = Ps ? le : Si, a = !!e.translateExistCompatible;
  let l = ae(e.inheritLocale) ? e.inheritLocale : !0;
  const u = i(
    // prettier-ignore
    n && l ? n.locale.value : q(e.locale) ? e.locale : Xn
  ), c = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : q(e.fallbackLocale) || Ae(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = i(so(u.value, e)), m = i(te(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), y = i(te(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let T = n ? n.missingWarn : ae(e.missingWarn) || fn(e.missingWarn) ? e.missingWarn : !0, A = n ? n.fallbackWarn : ae(e.fallbackWarn) || fn(e.fallbackWarn) ? e.fallbackWarn : !0, M = n ? n.fallbackRoot : ae(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, w = Se(e.missing) ? e.missing : null, E = Se(e.missing) ? Al(e.missing) : null, b = Se(e.postTranslation) ? e.postTranslation : null, C = n ? n.warnHtmlMessage : ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
  const P = n ? n.modifiers : te(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    s && ul(null);
    const R = {
      version: Y0,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: P,
      pluralRules: k,
      missing: E === null ? void 0 : E,
      missingWarn: T,
      fallbackWarn: A,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: C,
      escapeParameter: N,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = m.value, R.numberFormats = y.value, R.__datetimeFormatters = te(O) ? O.__datetimeFormatters : void 0, R.__numberFormatters = te(O) ? O.__numberFormatters : void 0;
    const $ = U0(R);
    return s && ul($), $;
  })(), sr(O, u.value, c.value);
  function Y() {
    return [
      u.value,
      c.value,
      f.value,
      m.value,
      y.value
    ];
  }
  const H = ye({
    get: () => u.value,
    set: (R) => {
      u.value = R, O.locale = u.value;
    }
  }), J = ye({
    get: () => c.value,
    set: (R) => {
      c.value = R, O.fallbackLocale = c.value, sr(O, u.value, R);
    }
  }), se = ye(() => f.value), ge = /* @__PURE__ */ ye(() => m.value), Z = /* @__PURE__ */ ye(() => y.value);
  function V() {
    return Se(b) ? b : null;
  }
  function G(R) {
    b = R, O.postTranslation = R;
  }
  function ue() {
    return w;
  }
  function Te(R) {
    R !== null && (E = Al(R)), w = R, O.missing = E;
  }
  const fe = (R, $, Q, oe, Ee, Ze) => {
    Y();
    let He;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s || (O.fallbackContext = n ? F0() : void 0), He = R(O);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || (O.fallbackContext = void 0);
    }
    if (Q !== "translate exists" && // for not `te` (e.g `t`)
    Ce(He) && He === ro || Q === "translate exists" && !He) {
      const [_n, mo] = $();
      return n && M ? oe(n) : Ee(_n);
    } else {
      if (Ze(He))
        return He;
      throw Fe(Me.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ne(...R) {
    return fe(($) => Reflect.apply(ml, null, [$, ...R]), () => ti(...R), "translate", ($) => Reflect.apply($.t, $, [...R]), ($) => $, ($) => q($));
  }
  function ke(...R) {
    const [$, Q, oe] = R;
    if (oe && !he(oe))
      throw Fe(Me.INVALID_ARGUMENT);
    return ne($, Q, Be({ resolvedMessage: !0 }, oe || {}));
  }
  function Ue(...R) {
    return fe(($) => Reflect.apply(pl, null, [$, ...R]), () => ni(...R), "datetime format", ($) => Reflect.apply($.d, $, [...R]), () => ll, ($) => q($));
  }
  function Qe(...R) {
    return fe(($) => Reflect.apply(gl, null, [$, ...R]), () => ri(...R), "number format", ($) => Reflect.apply($.n, $, [...R]), () => ll, ($) => q($));
  }
  function Ke(R) {
    return R.map(($) => q($) || Ce($) || ae($) ? yl(String($)) : $);
  }
  const Oe = {
    normalize: Ke,
    interpolate: (R) => R,
    type: "vnode"
  };
  function $e(...R) {
    return fe(
      ($) => {
        let Q;
        const oe = $;
        try {
          oe.processor = Oe, Q = Reflect.apply(ml, null, [oe, ...R]);
        } finally {
          oe.processor = null;
        }
        return Q;
      },
      () => ti(...R),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[si](...R),
      ($) => [yl($)],
      ($) => Ae($)
    );
  }
  function xe(...R) {
    return fe(
      ($) => Reflect.apply(gl, null, [$, ...R]),
      () => ri(...R),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[ii](...R),
      vl,
      ($) => q($) || Ae($)
    );
  }
  function wt(...R) {
    return fe(
      ($) => Reflect.apply(pl, null, [$, ...R]),
      () => ni(...R),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($) => $[oi](...R),
      vl,
      ($) => q($) || Ae($)
    );
  }
  function p(R) {
    k = R, O.pluralRules = k;
  }
  function _(R, $) {
    return fe(() => {
      if (!R)
        return !1;
      const Q = q($) ? $ : u.value, oe = U(Q), Ee = O.messageResolver(oe, R);
      return a ? Ee != null : kt(Ee) || ht(Ee) || q(Ee);
    }, () => [R], "translate exists", (Q) => Reflect.apply(Q.te, Q, [R, $]), Q0, (Q) => ae(Q));
  }
  function g(R) {
    let $ = null;
    const Q = Gu(O, c.value, u.value);
    for (let oe = 0; oe < Q.length; oe++) {
      const Ee = f.value[Q[oe]] || {}, Ze = O.messageResolver(Ee, R);
      if (Ze != null) {
        $ = Ze;
        break;
      }
    }
    return $;
  }
  function I(R) {
    const $ = g(R);
    return $ ?? (n ? n.tm(R) || {} : {});
  }
  function U(R) {
    return f.value[R] || {};
  }
  function x(R, $) {
    if (o) {
      const Q = { [R]: $ };
      for (const oe in Q)
        Et(Q, oe) && kr(Q[oe]);
      $ = Q[R];
    }
    f.value[R] = $, O.messages = f.value;
  }
  function D(R, $) {
    f.value[R] = f.value[R] || {};
    const Q = { [R]: $ };
    if (o)
      for (const oe in Q)
        Et(Q, oe) && kr(Q[oe]);
    $ = Q[R], us($, f.value[R]), O.messages = f.value;
  }
  function j(R) {
    return m.value[R] || {};
  }
  function d(R, $) {
    m.value[R] = $, O.datetimeFormats = m.value, _l(O, R, $);
  }
  function h(R, $) {
    m.value[R] = Be(m.value[R] || {}, $), O.datetimeFormats = m.value, _l(O, R, $);
  }
  function L(R) {
    return y.value[R] || {};
  }
  function F(R, $) {
    y.value[R] = $, O.numberFormats = y.value, bl(O, R, $);
  }
  function B(R, $) {
    y.value[R] = Be(y.value[R] || {}, $), O.numberFormats = y.value, bl(O, R, $);
  }
  Sl++, n && Ps && (Cn(n.locale, (R) => {
    l && (u.value = R, O.locale = R, sr(O, u.value, c.value));
  }), Cn(n.fallbackLocale, (R) => {
    l && (c.value = R, O.fallbackLocale = R, sr(O, u.value, c.value));
  }));
  const W = {
    id: Sl,
    locale: H,
    fallbackLocale: J,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(R) {
      l = R, R && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, sr(O, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: se,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return T;
    },
    set missingWarn(R) {
      T = R, O.missingWarn = T;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(R) {
      A = R, O.fallbackWarn = A;
    },
    get fallbackRoot() {
      return M;
    },
    set fallbackRoot(R) {
      M = R;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(R) {
      v = R, O.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return C;
    },
    set warnHtmlMessage(R) {
      C = R, O.warnHtmlMessage = R;
    },
    get escapeParameter() {
      return N;
    },
    set escapeParameter(R) {
      N = R, O.escapeParameter = R;
    },
    t: ne,
    getLocaleMessage: U,
    setLocaleMessage: x,
    mergeLocaleMessage: D,
    getPostTranslationHandler: V,
    setPostTranslationHandler: G,
    getMissingHandler: ue,
    setMissingHandler: Te,
    [of]: p
  };
  return W.datetimeFormats = ge, W.numberFormats = Z, W.rt = ke, W.te = _, W.tm = I, W.d = Ue, W.n = Qe, W.getDateTimeFormat = j, W.setDateTimeFormat = d, W.mergeDateTimeFormat = h, W.getNumberFormat = L, W.setNumberFormat = F, W.mergeNumberFormat = B, W[af] = r, W[si] = $e, W[oi] = wt, W[ii] = xe, W;
}
function e1(e) {
  const t = q(e.locale) ? e.locale : Xn, n = q(e.fallbackLocale) || Ae(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Se(e.missing) ? e.missing : void 0, s = ae(e.silentTranslationWarn) || fn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = ae(e.silentFallbackWarn) || fn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ae(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = te(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Se(e.postTranslation) ? e.postTranslation : void 0, f = q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, y = ae(e.sync) ? e.sync : !0;
  let T = e.messages;
  if (te(e.sharedMessages)) {
    const N = e.sharedMessages;
    T = Object.keys(N).reduce((k, O) => {
      const K = k[O] || (k[O] = {});
      return Be(K, N[O]), k;
    }, T || {});
  }
  const { __i18n: A, __root: M, __injectWithOption: v } = e, w = e.datetimeFormats, E = e.numberFormats, b = e.flatJson, C = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: T,
    flatJson: b,
    datetimeFormats: w,
    numberFormats: E,
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
    inheritLocale: y,
    translateExistCompatible: C,
    __i18n: A,
    __root: M,
    __injectWithOption: v
  };
}
function li(e = {}, t) {
  {
    const n = $i(e1(e)), { __extender: r } = e, s = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(o) {
        n.locale.value = o;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(o) {
        n.fallbackLocale.value = o;
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
      set formatter(o) {
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(o) {
        n.setMissingHandler(o);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return ae(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(o) {
        n.missingWarn = ae(o) ? !o : o;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ae(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(o) {
        n.fallbackWarn = ae(o) ? !o : o;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(o) {
        n.fallbackFormat = o;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(o) {
        n.setPostTranslationHandler(o);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(o) {
        n.inheritLocale = o;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(o) {
        n.warnHtmlMessage = o !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(o) {
        n.escapeParameter = o;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return !0;
      },
      set preserveDirectiveContent(o) {
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...o) {
        const [i, a, l] = o, u = {};
        let c = null, f = null;
        if (!q(i))
          throw Fe(Me.INVALID_ARGUMENT);
        const m = i;
        return q(a) ? u.locale = a : Ae(a) ? c = a : te(a) && (f = a), Ae(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
          m,
          c || f || {},
          u
        ]);
      },
      rt(...o) {
        return Reflect.apply(n.rt, n, [...o]);
      },
      // tc
      tc(...o) {
        const [i, a, l] = o, u = { plural: 1 };
        let c = null, f = null;
        if (!q(i))
          throw Fe(Me.INVALID_ARGUMENT);
        const m = i;
        return q(a) ? u.locale = a : Ce(a) ? u.plural = a : Ae(a) ? c = a : te(a) && (f = a), q(l) ? u.locale = l : Ae(l) ? c = l : te(l) && (f = l), Reflect.apply(n.t, n, [
          m,
          c || f || {},
          u
        ]);
      },
      // te
      te(o, i) {
        return n.te(o, i);
      },
      // tm
      tm(o) {
        return n.tm(o);
      },
      // getLocaleMessage
      getLocaleMessage(o) {
        return n.getLocaleMessage(o);
      },
      // setLocaleMessage
      setLocaleMessage(o, i) {
        n.setLocaleMessage(o, i);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(o, i) {
        n.mergeLocaleMessage(o, i);
      },
      // d
      d(...o) {
        return Reflect.apply(n.d, n, [...o]);
      },
      // getDateTimeFormat
      getDateTimeFormat(o) {
        return n.getDateTimeFormat(o);
      },
      // setDateTimeFormat
      setDateTimeFormat(o, i) {
        n.setDateTimeFormat(o, i);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(o, i) {
        n.mergeDateTimeFormat(o, i);
      },
      // n
      n(...o) {
        return Reflect.apply(n.n, n, [...o]);
      },
      // getNumberFormat
      getNumberFormat(o) {
        return n.getNumberFormat(o);
      },
      // setNumberFormat
      setNumberFormat(o, i) {
        n.setNumberFormat(o, i);
      },
      // mergeNumberFormat
      mergeNumberFormat(o, i) {
        n.mergeNumberFormat(o, i);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(o, i) {
        return -1;
      }
    };
    return s.__extender = r, s;
  }
}
const Hi = {
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
function t1({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === je ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, be());
}
function uf(e) {
  return je;
}
const n1 = /* @__PURE__ */ Dn({
  /* eslint-disable */
  name: "i18n-t",
  props: Be({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Ce(e) || !isNaN(e)
    }
  }, Hi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || Vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = Object.keys(n).filter((f) => f !== "_"), i = be();
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = q(e.plural) ? +e.plural : e.plural);
      const a = t1(t, o), l = s[si](e.keypath, a, i), u = Be(be(), r), c = q(e.tag) || he(e.tag) ? e.tag : uf();
      return zn(c, u, l);
    };
  }
}), wl = n1;
function r1(e) {
  return Ae(e) && !q(e[0]);
}
function ff(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let a = be();
    e.locale && (i.locale = e.locale), q(e.format) ? i.key = e.format : he(e.format) && (q(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((m, y) => n.includes(y) ? Be(be(), m, { [y]: e.format[y] }) : m, be()));
    const l = r(e.value, i, a);
    let u = [i.key];
    Ae(l) ? u = l.map((m, y) => {
      const T = s[m.type], A = T ? T({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return r1(A) && (A[0].key = `${m.type}-${y}`), A;
    }) : q(l) && (u = [l]);
    const c = Be(be(), o), f = q(e.tag) || he(e.tag) ? e.tag : uf();
    return zn(f, c, u);
  };
}
const s1 = /* @__PURE__ */ Dn({
  /* eslint-disable */
  name: "i18n-n",
  props: Be({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Hi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return ff(e, t, rf, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ii](...r)
    ));
  }
}), Tl = s1, o1 = /* @__PURE__ */ Dn({
  /* eslint-disable */
  name: "i18n-d",
  props: Be({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Hi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Vi({
      useScope: e.scope,
      __useComponent: !0
    });
    return ff(e, t, nf, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[oi](...r)
    ));
  }
}), Ol = o1;
function i1(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function a1(e) {
  const t = (i) => {
    const { instance: a, modifiers: l, value: u } = i;
    if (!a || !a.$)
      throw Fe(Me.UNEXPECTED_ERROR);
    const c = i1(e, a.$), f = Ll(u);
    return [
      Reflect.apply(c.t, c, [...Rl(f)]),
      c
    ];
  };
  return {
    created: (i, a) => {
      const [l, u] = t(a);
      Ps && e.global === u && (i.__i18nWatcher = Cn(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = l;
    },
    unmounted: (i) => {
      Ps && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer, u = Ll(a);
        i.textContent = Reflect.apply(l.t, l, [
          ...Rl(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    }
  };
}
function Ll(e) {
  if (q(e))
    return { path: e };
  if (te(e)) {
    if (!("path" in e))
      throw Fe(Me.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Fe(Me.INVALID_VALUE);
}
function Rl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e, i = {}, a = r || {};
  return q(n) && (i.locale = n), Ce(s) && (i.plural = s), Ce(o) && (i.plural = o), [t, a, i];
}
function l1(e, t, ...n) {
  const r = te(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName;
  (ae(r.globalInstall) ? r.globalInstall : !0) && ([s ? "i18n" : wl.name, "I18nT"].forEach((i) => e.component(i, wl)), [Tl.name, "I18nN"].forEach((i) => e.component(i, Tl)), [Ol.name, "I18nD"].forEach((i) => e.component(i, Ol))), e.directive("t", a1(t));
}
function c1(e, t, n) {
  return {
    beforeCreate() {
      const r = _t();
      if (!r)
        throw Fe(Me.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        if (s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root)
          this.$i18n = Cl(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = li(o);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = Cl(e, s);
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
      s.__i18nGlobal && cf(t, s, s), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, i) => this.$i18n.te(o, i), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = _t();
      if (!r)
        throw Fe(Me.UNEXPECTED_ERROR);
      const s = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Cl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[of](t.pluralizationRules || e.pluralizationRules);
  const n = so(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const u1 = /* @__PURE__ */ hn("global-vue-i18n");
function f1(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ae(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ae(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, o = /* @__PURE__ */ new Map(), [i, a] = d1(e, n), l = /* @__PURE__ */ hn("");
  function u(m) {
    return o.get(m) || null;
  }
  function c(m, y) {
    o.set(m, y);
  }
  function f(m) {
    o.delete(m);
  }
  {
    const m = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(y, ...T) {
        if (y.__VUE_I18N_SYMBOL__ = l, y.provide(y.__VUE_I18N_SYMBOL__, m), te(T[0])) {
          const v = T[0];
          m.__composerExtend = v.__composerExtend, m.__vueI18nExtend = v.__vueI18nExtend;
        }
        let A = null;
        !n && r && (A = v1(y, m.global)), __VUE_I18N_FULL_INSTALL__ && l1(y, m, ...T), __VUE_I18N_LEGACY_API__ && n && y.mixin(c1(a, a.__composer, m));
        const M = y.unmount;
        y.unmount = () => {
          A && A(), m.dispose(), M();
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
      __instances: o,
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
function Vi(e = {}) {
  const t = _t();
  if (t == null)
    throw Fe(Me.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Fe(Me.NOT_INSTALLED);
  const n = h1(t), r = p1(n), s = lf(t), o = m1(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Fe(Me.NOT_AVAILABLE_IN_LEGACY_MODE);
    return y1(t, o, r, e);
  }
  if (o === "global")
    return cf(r, e, s), r;
  if (o === "parent") {
    let l = _1(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = Be({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), a = $i(l), i.__composerExtend && (a[ai] = i.__composerExtend(a)), b1(i, t, a), i.__setInstance(t, a);
  }
  return a;
}
function d1(e, t, n) {
  const r = pi();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => li(e)) : r.run(() => $i(e));
    if (s == null)
      throw Fe(Me.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function h1(e) {
  {
    const t = St(e.isCE ? u1 : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Fe(e.isCE ? Me.NOT_INSTALLED_WITH_PROVIDE : Me.UNEXPECTED_ERROR);
    return t;
  }
}
function m1(e, t) {
  return to(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function p1(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function _1(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = g1(t, n);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(o);
      a != null && (r = a.__composer, n && r && !r[af] && (r = null));
    }
    if (r != null || s === o)
      break;
    o = o.parent;
  }
  return r;
}
function g1(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function b1(e, t, n) {
  Oi(() => {
  }, t), Li(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[ai];
    s && (s(), delete r[ai]);
  }, t);
}
function y1(e, t, n, r = {}) {
  const s = t === "local", o = /* @__PURE__ */ Si(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Fe(Me.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ae(r.inheritLocale) ? r.inheritLocale : !q(r.locale), a = /* @__PURE__ */ le(
    // prettier-ignore
    !s || i ? n.locale.value : q(r.locale) ? r.locale : Xn
  ), l = /* @__PURE__ */ le(
    // prettier-ignore
    !s || i ? n.fallbackLocale.value : q(r.fallbackLocale) || Ae(r.fallbackLocale) || te(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value
  ), u = /* @__PURE__ */ le(so(a.value, r)), c = /* @__PURE__ */ le(te(r.datetimeFormats) ? r.datetimeFormats : { [a.value]: {} }), f = /* @__PURE__ */ le(te(r.numberFormats) ? r.numberFormats : { [a.value]: {} }), m = s ? n.missingWarn : ae(r.missingWarn) || fn(r.missingWarn) ? r.missingWarn : !0, y = s ? n.fallbackWarn : ae(r.fallbackWarn) || fn(r.fallbackWarn) ? r.fallbackWarn : !0, T = s ? n.fallbackRoot : ae(r.fallbackRoot) ? r.fallbackRoot : !0, A = !!r.fallbackFormat, M = Se(r.missing) ? r.missing : null, v = Se(r.postTranslation) ? r.postTranslation : null, w = s ? n.warnHtmlMessage : ae(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, b = s ? n.modifiers : te(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      a.value,
      l.value,
      u.value,
      c.value,
      f.value
    ];
  }
  const P = ye({
    get: () => o.value ? o.value.locale.value : a.value,
    set: (g) => {
      o.value && (o.value.locale.value = g), a.value = g;
    }
  }), k = ye({
    get: () => o.value ? o.value.fallbackLocale.value : l.value,
    set: (g) => {
      o.value && (o.value.fallbackLocale.value = g), l.value = g;
    }
  }), O = ye(() => o.value ? o.value.messages.value : u.value), K = ye(() => c.value), Y = ye(() => f.value);
  function H() {
    return o.value ? o.value.getPostTranslationHandler() : v;
  }
  function J(g) {
    o.value && o.value.setPostTranslationHandler(g);
  }
  function se() {
    return o.value ? o.value.getMissingHandler() : M;
  }
  function ge(g) {
    o.value && o.value.setMissingHandler(g);
  }
  function Z(g) {
    return N(), g();
  }
  function V(...g) {
    return o.value ? Z(() => Reflect.apply(o.value.t, null, [...g])) : Z(() => "");
  }
  function G(...g) {
    return o.value ? Reflect.apply(o.value.rt, null, [...g]) : "";
  }
  function ue(...g) {
    return o.value ? Z(() => Reflect.apply(o.value.d, null, [...g])) : Z(() => "");
  }
  function Te(...g) {
    return o.value ? Z(() => Reflect.apply(o.value.n, null, [...g])) : Z(() => "");
  }
  function fe(g) {
    return o.value ? o.value.tm(g) : {};
  }
  function ne(g, I) {
    return o.value ? o.value.te(g, I) : !1;
  }
  function ke(g) {
    return o.value ? o.value.getLocaleMessage(g) : {};
  }
  function Ue(g, I) {
    o.value && (o.value.setLocaleMessage(g, I), u.value[g] = I);
  }
  function Qe(g, I) {
    o.value && o.value.mergeLocaleMessage(g, I);
  }
  function Ke(g) {
    return o.value ? o.value.getDateTimeFormat(g) : {};
  }
  function ie(g, I) {
    o.value && (o.value.setDateTimeFormat(g, I), c.value[g] = I);
  }
  function Oe(g, I) {
    o.value && o.value.mergeDateTimeFormat(g, I);
  }
  function $e(g) {
    return o.value ? o.value.getNumberFormat(g) : {};
  }
  function xe(g, I) {
    o.value && (o.value.setNumberFormat(g, I), f.value[g] = I);
  }
  function wt(g, I) {
    o.value && o.value.mergeNumberFormat(g, I);
  }
  const p = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: P,
    fallbackLocale: k,
    messages: O,
    datetimeFormats: K,
    numberFormats: Y,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : i;
    },
    set inheritLocale(g) {
      o.value && (o.value.inheritLocale = g);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : b;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : C;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : m;
    },
    set missingWarn(g) {
      o.value && (o.value.missingWarn = g);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : y;
    },
    set fallbackWarn(g) {
      o.value && (o.value.missingWarn = g);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : T;
    },
    set fallbackRoot(g) {
      o.value && (o.value.fallbackRoot = g);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : A;
    },
    set fallbackFormat(g) {
      o.value && (o.value.fallbackFormat = g);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : w;
    },
    set warnHtmlMessage(g) {
      o.value && (o.value.warnHtmlMessage = g);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : E;
    },
    set escapeParameter(g) {
      o.value && (o.value.escapeParameter = g);
    },
    t: V,
    getPostTranslationHandler: H,
    setPostTranslationHandler: J,
    getMissingHandler: se,
    setMissingHandler: ge,
    rt: G,
    d: ue,
    n: Te,
    tm: fe,
    te: ne,
    getLocaleMessage: ke,
    setLocaleMessage: Ue,
    mergeLocaleMessage: Qe,
    getDateTimeFormat: Ke,
    setDateTimeFormat: ie,
    mergeDateTimeFormat: Oe,
    getNumberFormat: $e,
    setNumberFormat: xe,
    mergeNumberFormat: wt
  };
  function _(g) {
    g.locale.value = a.value, g.fallbackLocale.value = l.value, Object.keys(u.value).forEach((I) => {
      g.mergeLocaleMessage(I, u.value[I]);
    }), Object.keys(c.value).forEach((I) => {
      g.mergeDateTimeFormat(I, c.value[I]);
    }), Object.keys(f.value).forEach((I) => {
      g.mergeNumberFormat(I, f.value[I]);
    }), g.escapeParameter = E, g.fallbackFormat = A, g.fallbackRoot = T, g.fallbackWarn = y, g.missingWarn = m, g.warnHtmlMessage = w;
  }
  return Kc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Fe(Me.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const g = o.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = g.locale.value, l.value = g.fallbackLocale.value, u.value = g.messages.value, c.value = g.datetimeFormats.value, f.value = g.numberFormats.value) : s && _(g);
  }), p;
}
const E1 = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Pl = ["t", "rt", "d", "n", "tm", "te"];
function v1(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return E1.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o)
      throw Fe(Me.UNEXPECTED_ERROR);
    const i = /* @__PURE__ */ Re(o.value) ? {
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
  }), e.config.globalProperties.$i18n = n, Pl.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value)
      throw Fe(Me.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, Pl.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
X0();
I0(B0);
M0(d0);
k0(Gu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = On();
  e.__INTLIFY__ = !0, v0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const S1 = "sub2api_locale", ji = "en", A1 = {
  en: () => import("./index-WkE-UET7.js"),
  zh: () => import("./index-B6792iEr.js")
};
function df(e) {
  return e === "en" || e === "zh";
}
function w1() {
  const e = localStorage.getItem(S1);
  return e && df(e) ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : ji;
}
const Kn = f1({
  legacy: !1,
  locale: w1(),
  fallbackLocale: ji,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: !1
}), Nl = /* @__PURE__ */ new Set();
async function hf(e) {
  if (Nl.has(e))
    return;
  const t = A1[e], n = await t();
  Kn.global.setLocaleMessage(e, n.default), Nl.add(e);
}
async function T1() {
  const e = mf();
  await hf(e), document.documentElement.setAttribute("lang", e);
}
function mf() {
  const e = Kn.global.locale.value;
  return df(e) ? e : ji;
}
const T5 = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" }
];
function pf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: O1 } = Object.prototype, { getPrototypeOf: dn } = Object, { iterator: Wr, toStringTag: _f } = Symbol, xr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gf = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), bf = (e, t, n) => e === Object.prototype || !n && t === null, L1 = (e) => {
  if (!Object.isExtensible(e))
    return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((n) => {
    if (gf(n))
      return !1;
    const r = Object.getOwnPropertyDescriptor(e, n);
    return !!r && r.configurable && r.writable === !0;
  });
}, Dr = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    r.push(n);
    const s = dn(n);
    if (bf(n, s, n === e))
      return !1;
    if (xr(n, t))
      return !0;
    n = s;
  }
  return !1;
}, R1 = (e, t) => e != null && Dr(e, t) ? e[t] : void 0, C1 = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function")
    return e;
  const t = dn(e);
  if (t === null && L1(e))
    return e;
  const n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), s = [];
  let o = e;
  for (; o != null && s.indexOf(o) === -1; ) {
    s.push(o);
    const i = o === e ? t : dn(o);
    if (bf(o, i, o === e))
      break;
    const a = Object.getOwnPropertyNames(o);
    Object.getOwnPropertySymbols && a.push(...Object.getOwnPropertySymbols(o));
    for (const l of a)
      gf(l) || xr(r, l) || (n[l] = e[l], r[l] = !0);
    o = i;
  }
  return n;
}, Wi = /* @__PURE__ */ ((e) => (t) => {
  const n = O1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gt = (e) => (e = e.toLowerCase(), (t) => Wi(t) === e), oo = (e) => (t) => typeof t === e, { isArray: Mn } = Array, kn = oo("undefined");
function Qn(e) {
  return e !== null && !kn(e) && e.constructor !== null && !kn(e.constructor) && ot(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yf = gt("ArrayBuffer");
function P1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yf(e.buffer), t;
}
const N1 = oo("string"), ot = oo("function"), Ef = oo("number"), Zn = (e) => e !== null && typeof e == "object", I1 = (e) => e === !0 || e === !1, fs = (e) => {
  if (!Zn(e))
    return !1;
  const t = dn(e);
  return (t === null || t === Object.prototype || dn(t) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !Dr(e, _f) && !Dr(e, Wr);
}, M1 = (e) => {
  if (!Zn(e) || Qn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, k1 = gt("Date"), x1 = gt("File"), D1 = (e) => !!(e && typeof e.uri < "u"), F1 = (e) => e && typeof e.getParts < "u", U1 = gt("Blob"), $1 = gt("FileList"), H1 = gt("Set"), V1 = (e) => Zn(e) && ot(e.pipe);
function j1() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Il = j1(), Ml = typeof Il.FormData < "u" ? Il.FormData : void 0, W1 = (e) => {
  if (!e) return !1;
  if (Ml && e instanceof Ml) return !0;
  const t = dn(e);
  if (!t || t === Object.prototype || !ot(e.append)) return !1;
  const n = Wi(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && ot(e.toString) && e.toString() === "[object FormData]";
}, B1 = gt("URLSearchParams"), [K1, z1, q1, G1] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(gt), Y1 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Br(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Mn(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Qn(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function vf(e, t) {
  if (Qn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ln = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sf = (e) => !kn(e) && e !== Ln;
function ci(...e) {
  const { caseless: t, skipUndefined: n } = Sf(this) && this || {}, r = {}, s = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && vf(r, i) || i, l = xr(r, a) ? r[a] : void 0;
    fs(l) && fs(o) ? r[a] = ci(l, o) : fs(o) ? r[a] = ci({}, o) : Mn(o) ? r[a] = o.slice() : (!n || !kn(o)) && (r[a] = o);
  };
  for (let o = 0, i = e.length; o < i; o++) {
    const a = e[o];
    if (!a || Qn(a) || (Br(a, s), typeof a != "object" || Mn(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      a_.call(a, c) && s(a[c], c);
    }
  }
  return r;
}
const X1 = (e, t, n, { allOwnKeys: r } = {}) => (Br(
  t,
  (s, o) => {
    n && ot(s) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: pf(s, n),
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
), e), J1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Q1 = (e, t, n, r) => {
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
}, Z1 = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && dn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, e_ = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, t_ = (e) => {
  if (!e) return null;
  if (Mn(e)) return e;
  let t = e.length;
  if (!Ef(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, n_ = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && dn(Uint8Array)), r_ = (e, t) => {
  const r = (e && e[Wr]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, s_ = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, o_ = gt("HTMLFormElement"), i_ = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), { propertyIsEnumerable: a_ } = Object.prototype, l_ = gt("RegExp"), Af = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Br(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, c_ = (e) => {
  Af(e, (t, n) => {
    if (ot(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (ot(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, u_ = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Mn(e) ? r(e) : r(String(e).split(t)), n;
}, f_ = () => {
}, d_ = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function h_(e) {
  return !!(e && ot(e.append) && e[_f] === "FormData" && e[Wr]);
}
const m_ = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Zn(r)) {
      if (t.has(r))
        return;
      if (Qn(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        let s;
        if (H1(r)) {
          s = [];
          for (const o of r) {
            const i = n(o);
            !kn(i) && s.push(i);
          }
        } else
          s = Mn(r) ? [] : {}, Br(r, (o, i) => {
            const a = n(o);
            !kn(a) && (s[i] = a);
          });
        return t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, p_ = gt("AsyncFunction"), __ = (e) => e && (Zn(e) || ot(e)) && ot(e.then) && ot(e.catch), wf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ln.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Ln && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ln.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ot(Ln.postMessage)), g_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ln) : typeof process < "u" && process.nextTick || wf, Tf = (e) => e != null && ot(e[Wr]), b_ = (e) => e != null && Dr(e, Wr) && Tf(e), S = {
  isArray: Mn,
  isArrayBuffer: yf,
  isBuffer: Qn,
  isFormData: W1,
  isArrayBufferView: P1,
  isString: N1,
  isNumber: Ef,
  isBoolean: I1,
  isObject: Zn,
  isPlainObject: fs,
  isEmptyObject: M1,
  isReadableStream: K1,
  isRequest: z1,
  isResponse: q1,
  isHeaders: G1,
  isUndefined: kn,
  isDate: k1,
  isFile: x1,
  isReactNativeBlob: D1,
  isReactNative: F1,
  isBlob: U1,
  isRegExp: l_,
  isFunction: ot,
  isStream: V1,
  isURLSearchParams: B1,
  isTypedArray: n_,
  isFileList: $1,
  forEach: Br,
  merge: ci,
  extend: X1,
  trim: Y1,
  stripBOM: J1,
  inherits: Q1,
  toFlatObject: Z1,
  kindOf: Wi,
  kindOfTest: gt,
  endsWith: e_,
  toArray: t_,
  forEachEntry: r_,
  matchAll: s_,
  isHTMLForm: o_,
  hasOwnProperty: xr,
  hasOwnProp: xr,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Dr,
  getSafeProp: R1,
  toSafeFlatObject: C1,
  reduceDescriptors: Af,
  freezeMethods: c_,
  toObjectSet: u_,
  toCamelCase: i_,
  noop: f_,
  toFiniteNumber: d_,
  findKey: vf,
  global: Ln,
  isContextDefined: Sf,
  isSpecCompliantForm: h_,
  toJSONObject: m_,
  isAsyncFn: p_,
  isThenable: __,
  setImmediate: wf,
  asap: g_,
  isIterable: Tf,
  isSafeIterable: b_
}, y_ = S.toObjectSet([
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
]), E_ = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim();
    const a = S.hasOwnProp(t, n);
    !n || a && S.hasOwnProp(y_, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
  }), t;
};
function v_(e) {
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
const S_ = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), A_ = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Bi(e, t) {
  return S.isArray(e) ? e.map((n) => Bi(n, t)) : v_(String(e).replace(t, ""));
}
const w_ = (e) => Bi(e, S_), T_ = (e) => Bi(e, A_);
function Of(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return S.forEach(e.toJSON(), (n, r) => {
    t[r] = T_(n);
  }), t;
}
const kl = Symbol("internals");
function or(e) {
  return e && String(e).trim().toLowerCase();
}
function ds(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(ds) : w_(String(e));
}
function O_(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const L_ = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function No(e) {
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
function R_(e) {
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
function C_(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, s = !1, o = !1;
  function i(a) {
    const l = No(n.slice(r, a)), u = l.indexOf("=");
    if (u < 1)
      return;
    const c = No(l.slice(0, u));
    if (!L_.test(c))
      return;
    const f = c.toLowerCase();
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return;
    const m = No(l.slice(u + 1));
    t[f] = R_(m);
  }
  for (let a = 0; a < n.length; a++) {
    const l = n.charCodeAt(a);
    s ? o ? o = !1 : l === 92 ? o = !0 : l === 34 && (s = !1) : l === 34 ? s = !0 : (l === 44 || l === 59) && (i(a), r = a + 1);
  }
  return i(n.length), t;
}
const P_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function N_(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function I_(e, t) {
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
let Je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, l, u) {
      const c = or(l);
      if (!c)
        return;
      const f = S.findKey(s, c);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || l] = ds(a));
    }
    const i = (a, l) => S.forEach(a, (u, c) => o(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !P_(t))
      i(E_(t), n);
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
    if (t = or(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return O_(s);
        if (S.isFunction(n))
          return n.call(this, s, r);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = or(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Io(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = or(i), i) {
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
        n[i] = ds(s), delete n[o];
        return;
      }
      const a = t ? N_(o) : String(o).trim();
      a !== o && delete n[o], n[a] = ds(s), r[a] = !0;
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
    return C_(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[kl] = this[kl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = or(i);
      r[a] || (I_(s, i), r[a] = !0);
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Je.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
S.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(Je);
const Is = "[REDACTED ****]";
function M_(e) {
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
function k_(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], s = (o) => {
    if (o === null || typeof o != "object" || S.isBuffer(o)) return o;
    if (r.indexOf(o) !== -1) return;
    o instanceof Je && (o = o.toJSON()), r.push(o);
    let i;
    if (S.isArray(o))
      i = [], o.forEach((a, l) => {
        const u = s(a);
        S.isUndefined(u) || (i[l] = u);
      });
    else {
      if (!S.isPlainObject(o) && M_(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(o)) {
        const u = n.has(a.toLowerCase()) ? Is : s(l);
        S.isUndefined(u) || (i[a] = u);
      }
    }
    return r.pop(), i;
  };
  return s(e);
}
function xl(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function x_(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? xl(n.message) : xl(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let z = class Lf extends Error {
  static from(t, n, r, s, o, i) {
    let a = t.message;
    !a && S.isArray(t.errors) && t.errors.length && (a = x_(t));
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
    const t = this.config, n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0, r = S.isArray(n) && n.length > 0 ? k_(t, n) : S.toJSONObject(t);
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
const D_ = null, Rf = 100;
function ui(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Cf(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mo(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Cf(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function F_(e) {
  return S.isArray(e) && !e.some(ui);
}
const U_ = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function io(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const r = (w, E) => {
    const b = S.getSafeProp(n, w);
    return S.isUndefined(b) ? E : b;
  }, s = r("metaTokens", !0), o = r("visitor") || A, i = r("dots", !1), a = r("indexes", !1), l = r("Blob") || typeof Blob < "u" && Blob, u = r("maxDepth", Rf), c = l && S.isSpecCompliantForm(t), f = [];
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(w) {
    if (w === null) return "";
    if (S.isDate(w))
      return w.toISOString();
    if (S.isBoolean(w))
      return w.toString();
    if (!c && S.isBlob(w))
      throw new z("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(w) || S.isTypedArray(w)) {
      if (c && typeof l == "function")
        return new l([w]);
      throw new z(
        "Blob is not supported. Use a Buffer instead.",
        z.ERR_NOT_SUPPORT
      );
    }
    return w;
  }
  function y(w) {
    if (w > u)
      throw new z(
        "Object is too deeply nested (" + w + " levels). Max depth: " + u,
        z.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function T(w, E) {
    if (u === 1 / 0)
      return JSON.stringify(w);
    const b = [];
    return JSON.stringify(w, function(N, P) {
      if (!S.isObject(P))
        return P;
      for (; b.length && b[b.length - 1] !== this; )
        b.pop();
      return b.push(P), y(E + b.length - 1), P;
    });
  }
  function A(w, E, b) {
    let C = w;
    if (S.isReactNative(t) && S.isReactNativeBlob(w))
      return t.append(Mo(b, E, i), m(w)), !1;
    if (w && !b && typeof w == "object") {
      if (S.endsWith(E, "{}"))
        E = s ? E : E.slice(0, -2), w = T(w, 1);
      else if (S.isArray(w) && F_(w) || (S.isFileList(w) || S.endsWith(E, "[]")) && (C = S.toArray(w)))
        return E = Cf(E), C.forEach(function(P, k) {
          !(S.isUndefined(P) || P === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Mo([E], k, i) : a === null ? E : E + "[]",
            m(P)
          );
        }), !1;
    }
    return ui(w) ? !0 : (t.append(Mo(b, E, i), m(w)), !1);
  }
  const M = Object.assign(U_, {
    defaultVisitor: A,
    convertValue: m,
    isVisitable: ui
  });
  function v(w, E, b = 0) {
    if (!S.isUndefined(w)) {
      if (y(b), f.indexOf(w) !== -1)
        throw new Error("Circular reference detected in " + E.join("."));
      f.push(w), S.forEach(w, function(N, P) {
        (!(S.isUndefined(N) || N === null) && o.call(t, N, S.isString(P) ? P.trim() : P, E, M)) === !0 && v(N, E ? E.concat(P) : [P], b + 1);
      }), f.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Dl(e) {
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
function Ki(e, t) {
  this._pairs = [], e && io(e, this, t);
}
const Pf = Ki.prototype;
Pf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Pf.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Dl) : Dl;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function $_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Nf(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = S.isFunction(n) ? {
    serialize: n
  } : n, s = S.getSafeProp(r, "encode") || $_, o = S.getSafeProp(r, "serialize");
  let i;
  if (o ? i = o(t, r) : i = S.isURLSearchParams(t) ? t.toString() : new Ki(t, r).toString(s), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
const ir = Symbol("internals");
function If(e) {
  return e ? e.length : 0;
}
function Fl(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; )
      e.pop();
}
function ar(e, t) {
  const n = e.handlers, r = If(n);
  n !== t.handlersRef ? (t.handlersRef = n, t.handlerEntries.clear()) : r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(o, i) {
    n[o.index] !== o.handler && t.handlerEntries.delete(i);
  }) : t.handlerEntries.clear()), t.handlersLength = r;
}
class Ul {
  constructor() {
    this.handlers = [], this[ir] = {
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
    }, o = this[ir];
    this.handlers == null && (this.handlers = []), ar(this, o);
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
    const n = this[ir];
    ar(this, n);
    const r = n.handlerEntries.get(t);
    if (r) {
      if (n.handlerEntries.delete(t), this.handlers[r.index] !== r.handler)
        return;
      this.handlers[r.index] = null, n.iterationDepth || (Fl(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], ar(this, this[ir]));
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
    const n = this[ir];
    ar(this, n), n.iterationDepth++;
    try {
      S.forEach(this.handlers, function(s) {
        s !== null && t(s);
      });
    } finally {
      --n.iterationDepth || (ar(this, n), Fl(this.handlers), n.handlersLength = If(this.handlers));
    }
  }
}
const zi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, H_ = typeof URLSearchParams < "u" ? URLSearchParams : Ki, V_ = typeof FormData < "u" ? FormData : null, j_ = typeof Blob < "u" ? Blob : null, W_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: H_,
    FormData: V_,
    Blob: j_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qi = typeof window < "u" && typeof document < "u", fi = typeof navigator == "object" && navigator || void 0, B_ = qi && (!fi || ["ReactNative", "NativeScript", "NS"].indexOf(fi.product) < 0), K_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", z_ = qi && window.location.href || "http://localhost", q_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qi,
  hasStandardBrowserEnv: B_,
  hasStandardBrowserWebWorkerEnv: K_,
  navigator: fi,
  origin: z_
}, Symbol.toStringTag, { value: "Module" })), De = {
  ...q_,
  ...W_
};
function G_(e, t) {
  return io(e, new De.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return De.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const $l = Rf;
function Mf(e) {
  if (e > $l)
    throw new z(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + $l,
      z.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Y_(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Mf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function X_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function kf(e) {
  function t(n, r, s, o) {
    Mf(o);
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && S.isArray(s) ? s.length : i, l ? (S.hasOwnProp(s, i) ? s[i] = S.isArray(s[i]) ? s[i].concat(r) : [s[i], r] : s[i] = r, !a) : ((!S.hasOwnProp(s, i) || !S.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && S.isArray(s[i]) && (s[i] = X_(s[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, s) => {
      t(Y_(r), s, n, 0);
    }), n;
  }
  return null;
}
const xf = Object.freeze([
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
]), $n = (e, t) => e != null && S.hasOwnProp(e, t) ? e[t] : void 0;
function J_(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Kr = {
  transitional: zi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = S.isObject(t);
      if (o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
        return s ? JSON.stringify(kf(t)) : t;
      if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
        return t;
      if (S.isArrayBufferView(t))
        return t.buffer;
      if (S.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        const l = $n(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return G_(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = $n(this, "env"), c = u && u.FormData;
          return io(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), J_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = $n(this, "transitional") || Kr.transitional, r = n && n.forcedJSONParsing, s = $n(this, "responseType"), o = s === "json";
      if (S.isResponse(t) || S.isReadableStream(t))
        return t;
      if (t && S.isString(t) && (r && !s || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, $n(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? z.from(l, z.ERR_BAD_RESPONSE, this, null, $n(this, "response")) : l;
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
S.forEach(xf, (e) => {
  Kr.headers[e] = {};
});
function ko(e, t) {
  const n = this || Kr, r = t || n, s = Je.from(r.headers);
  let o = r.data;
  return S.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Df(e) {
  return !!(e && e.__CANCEL__);
}
let zr = class extends z {
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
function Ff(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new z(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? z.ERR_BAD_REQUEST : z.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const Q_ = /[\t\n\r]/g;
function Uf(e) {
  if (typeof e != "string")
    return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t).replace(Q_, "");
}
function xo(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Z_(e, t) {
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
    const y = c && u - c;
    return y ? Math.round(m * 1e3 / y) : void 0;
  };
}
function eg(e, t) {
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
const Ms = (e, t, n = 3) => {
  let r = 0;
  const s = Z_(50, 250);
  return eg((o) => {
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
}, Hl = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Vl = (e, t = S.asap) => (...n) => t(() => e(...n)), tg = De.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, De.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(De.origin),
  De.navigator && /(msie|trident)/i.test(De.navigator.userAgent)
) : () => !0, ng = De.hasStandardBrowserEnv ? (
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
function rg(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sg(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const og = /^https?:(?!\/\/)/i;
function ig(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${Is}`);
}
function ag(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Is}@`), n = t.indexOf("#"), s = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${Is}`
  );
  return n === -1 ? s : `${s}#${ig(t.slice(n + 1))}`;
}
function jl(e, t) {
  if (typeof e == "string") {
    const n = Uf(e);
    if (og.test(n))
      throw new z(
        `Invalid URL ${JSON.stringify(ag(n))}: missing "//" after protocol`,
        z.ERR_INVALID_URL,
        t
      );
  }
}
function $f(e, t, n, r) {
  jl(t, r);
  let s = !rg(t);
  return e && (s || n === !1) ? (jl(e, r), sg(e, t)) : t;
}
const Wl = (e) => e instanceof Je ? { ...e } : e, lg = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
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
  function r(c, f, m, y) {
    return S.isPlainObject(c) && S.isPlainObject(f) ? S.merge.call({ caseless: y }, c, f) : S.isPlainObject(f) ? S.merge({}, f) : S.isArray(f) ? f.slice() : f;
  }
  function s(c, f, m, y) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c))
        return r(void 0, c, m, y);
    } else return r(c, f, m, y);
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
    headers: (c, f, m) => s(Wl(c), Wl(f), m, !0)
  };
  return S.forEach(lg({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = S.hasOwnProp(u, f) ? u[f] : s, y = S.hasOwnProp(e, f) ? e[f] : void 0, T = S.hasOwnProp(t, f) ? t[f] : void 0, A = m(y, T, f);
    S.isUndefined(A) && m !== l || (n[f] = A);
  }), S.hasOwnProp(t, "validateStatus") && S.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const cg = ["content-type", "content-length"];
function ug(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, s]) => {
    cg.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const fg = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Hf(e) {
  const t = xn({}, e), n = (m) => S.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), u = n("baseURL"), c = n("allowAbsoluteUrls"), f = n("url");
  if (t.headers = a = Je.from(a), t.url = Nf(
    $f(u, f, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = S.getSafeProp(l, "username") || "", y = S.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (y ? fg(y) : ""))
      );
    } catch (T) {
      throw z.from(T, z.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (S.isFormData(r)) {
    const m = S.getSafeProp(r, "getHeaders");
    De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv || S.isReactNative(r) ? a.setContentType(void 0) : S.isFunction(m) && ug(a, m.call(r), n("formDataHeaderPolicy"));
  }
  if (De.hasStandardBrowserEnv && (S.isFunction(s) && (s = s(t)), s === !0 || s == null && tg(t.url))) {
    const y = o && i && ng.read(i);
    y && a.set(o, y);
  }
  return t;
}
const dg = typeof XMLHttpRequest < "u", hg = dg && function(e) {
  return new Promise(function(n, r) {
    const s = Hf(e);
    let o = s.data;
    const i = Je.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s, c, f, m, y, T, A;
    function M() {
      y && y(), T && T(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let v = new XMLHttpRequest();
    v.open(s.method.toUpperCase(), s.url, !0), v.timeout = s.timeout;
    function w(b) {
      if (!v)
        return;
      if (v.status === 0 && (xo(Uf(s.url)) || xo(De.origin)) !== "file" && !(v.responseURL && v.responseURL.startsWith("file:"))) {
        r(new z("Request aborted", z.ECONNABORTED, e, v)), M(), v = null;
        return;
      }
      try {
        b ? A && A(b) : T && T();
      } catch (k) {
        setTimeout(() => {
          throw k;
        });
      }
      if (!v)
        return;
      const C = Je.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: C,
        config: e,
        request: v
      };
      Ff(
        function(O) {
          n(O), M();
        },
        function(O) {
          r(O), M();
        },
        P
      ), v = null;
    }
    "onloadend" in v ? v.onloadend = w : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.startsWith("file:")) || setTimeout(w);
    }, v.onabort = function() {
      v && (r(new z("Request aborted", z.ECONNABORTED, e, v)), M(), v = null);
    }, v.onerror = function(C) {
      const N = C && C.message ? C.message : "Network Error", P = new z(N, z.ERR_NETWORK, e, v);
      P.event = C || null, r(P), M(), v = null;
    }, v.ontimeout = function() {
      let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || zi;
      s.timeoutErrorMessage && (C = s.timeoutErrorMessage), r(
        new z(
          C,
          N.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
          e,
          v
        )
      ), M(), v = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in v && S.forEach(Of(i), function(C, N) {
      v.setRequestHeader(N, C);
    }), S.isUndefined(s.withCredentials) || (v.withCredentials = !!s.withCredentials), a && a !== "json" && (v.responseType = s.responseType), u && ([m, T, A] = Ms(
      u,
      !0
    ), v.addEventListener("progress", m)), l && v.upload && ([f, y] = Ms(l), v.upload.addEventListener("progress", f), v.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (c = (b) => {
      v && (r(!b || b.type ? new zr(null, e, v) : b), v.abort(), M(), v = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const E = xo(s.url);
    if (E && !De.protocols.includes(E)) {
      r(
        new z(
          "Unsupported protocol " + E + ":",
          z.ERR_BAD_REQUEST,
          e
        )
      ), M();
      return;
    }
    v.send(o || null);
  });
}, mg = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(
        u instanceof z ? u : new zr(u instanceof Error ? u.message : u)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new z(`timeout of ${t}ms exceeded`, z.ETIMEDOUT));
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
}, pg = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, _g = async function* (e, t) {
  for await (const n of gg(e))
    yield* pg(n, t);
}, gg = async function* (e) {
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
}, Bl = (e, t, n, r) => {
  const s = _g(e, t);
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
}, Kl = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Vf = (e, t, n) => t + 2 < n && Kl(e.charCodeAt(t + 1)) && Kl(e.charCodeAt(t + 2)), zl = (e) => e <= 57 ? e - 48 : (e & 223) - 55, bg = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, yg = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Eg = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, vg = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Sg = (e) => {
  const t = e.length;
  let n = 0, r = 0, s = !1;
  for (let o = 0; o < t; o++) {
    let i = e.charCodeAt(o);
    if (i === 37 && Vf(e, o, t) && (i = zl(e.charCodeAt(o + 1)) * 16 + zl(e.charCodeAt(o + 2)), o += 2), !yg(i)) {
      if (i === 61) {
        r++;
        continue;
      }
      if (!bg(i) || r > 0) {
        s = !0;
        continue;
      }
      n++;
    }
  }
  return s || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? vg(e) : Eg(n);
}, Ag = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const r = e.slice(5, n), s = e.slice(n + 1);
  if (/;base64/i.test(r))
    return t(s);
  let i = 0;
  for (let a = 0, l = s.length; a < l; a++) {
    const u = s.charCodeAt(a);
    if (u === 37 && Vf(s, a, l))
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
function wg(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return Ag(
    t === -1 ? e : e.slice(0, t),
    Sg
  );
}
const Gi = "1.20.0", ql = 64 * 1024, Tg = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: rs } = S, Og = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Gl = (e) => {
  if (!S.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Yl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Lg = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Rg = (e) => {
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
  const { fetch: s, Request: o, Response: i } = e, a = s ? rs(s) : typeof fetch == "function", l = rs(o), u = rs(i);
  if (!a)
    return !1;
  const c = a && rs(n), f = a && (typeof r == "function" ? /* @__PURE__ */ ((v) => (w) => v.encode(w))(new r()) : async (v) => new Uint8Array(await new o(v).arrayBuffer())), m = l && c && Yl(() => {
    let v = !1;
    const w = new o(De.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), E = w.headers.has("Content-Type");
    return w.body != null && w.body.cancel(), v && !E;
  }), y = u && c && Yl(() => S.isReadableStream(new i("").body)), T = {
    stream: y && ((v) => v.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !T[v] && (T[v] = (w, E) => {
      let b = w && w[v];
      if (b)
        return b.call(w);
      throw new z(
        `Response type '${v}' is not supported`,
        z.ERR_NOT_SUPPORT,
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
      return (await new o(De.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(v) || S.isArrayBuffer(v))
      return v.byteLength;
    if (S.isURLSearchParams(v) && (v = v + ""), S.isString(v))
      return (await f(v)).byteLength;
  }, M = async (v, w) => {
    const E = S.toFiniteNumber(v.getContentLength());
    return E ?? A(w);
  };
  return async (v) => {
    let {
      url: w,
      method: E,
      data: b,
      signal: C,
      cancelToken: N,
      timeout: P,
      onDownloadProgress: k,
      onUploadProgress: O,
      responseType: K,
      headers: Y,
      withCredentials: H = "same-origin",
      fetchOptions: J,
      maxContentLength: se,
      maxBodyLength: ge,
      maxRedirects: Z
    } = Hf(v);
    const V = S.isNumber(se) && se > -1, G = S.isNumber(ge) && ge > -1, ue = (ie) => S.hasOwnProp(v, ie) ? v[ie] : void 0;
    let Te = s || fetch;
    K = K ? (K + "").toLowerCase() : "text";
    let fe = mg(
      [C, N && N.toAbortSignal()],
      P
    ), ne = null;
    const ke = fe && fe.unsubscribe && (() => {
      fe.unsubscribe();
    });
    let Ue, Qe = null;
    const Ke = () => new z(
      "Request body larger than maxBodyLength limit",
      z.ERR_BAD_REQUEST,
      v,
      ne
    );
    try {
      let ie;
      const Oe = ue("auth");
      if (Oe) {
        const D = S.getSafeProp(Oe, "username") || "", j = S.getSafeProp(Oe, "password") || "";
        ie = {
          username: D,
          password: j
        };
      }
      if (Lg(w)) {
        const D = new URL(w, De.origin);
        if (!ie && (D.username || D.password)) {
          const j = Gl(D.username), d = Gl(D.password);
          ie = {
            username: j,
            password: d
          };
        }
        (D.username || D.password) && (D.username = "", D.password = "", w = D.href);
      }
      if (ie && (Y.delete("authorization"), Y.set(
        "Authorization",
        "Basic " + btoa(Og((ie.username || "") + ":" + (ie.password || "")))
      )), V && typeof w == "string" && w.startsWith("data:") && wg(w) > se)
        throw new z(
          "maxContentLength size of " + se + " exceeded",
          z.ERR_BAD_RESPONSE,
          v,
          ne
        );
      if (G && E !== "get" && E !== "head") {
        const D = await A(b);
        if (typeof D == "number" && isFinite(D) && (Ue = D, D > ge))
          throw Ke();
      }
      const $e = G && (S.isReadableStream(b) || S.isStream(b)), xe = (D, j, d) => Bl(
        D,
        ql,
        (h) => {
          if (G && h > ge)
            throw Qe = Ke();
          j && j(h);
        },
        d
      );
      if (m && E !== "get" && E !== "head" && (O || $e)) {
        if (Ue = Ue ?? await M(Y, b), Ue !== 0 || $e) {
          let D = new o(w, {
            method: "POST",
            body: b,
            duplex: "half"
          }), j;
          if (S.isFormData(b) && (j = D.headers.get("content-type")) && Y.setContentType(j), D.body) {
            const [d, h] = O && Hl(
              Ue,
              Ms(Vl(O))
            ) || [];
            b = xe(D.body, d, h);
          }
        }
      } else if ($e && !l && c && E !== "get" && E !== "head")
        b = xe(b);
      else if ($e && l && !m && E !== "get" && E !== "head")
        throw new z(
          "Stream request bodies are not supported by the current fetch implementation",
          z.ERR_NOT_SUPPORT,
          v,
          ne
        );
      S.isString(H) || (H = H ? "include" : "omit");
      const wt = l && "credentials" in o.prototype;
      if (S.isFormData(b)) {
        const D = Y.getContentType();
        D && /^multipart\/form-data/i.test(D) && !/boundary=/i.test(D) && Y.delete("content-type");
      }
      Y.set("User-Agent", "axios/" + Gi, !1);
      const p = J == null ? J : Object.assign(/* @__PURE__ */ Object.create(null), J);
      p && (delete p.body, delete p.headers, delete p.method, delete p.signal, delete p.duplex, delete p.credentials);
      const _ = Object.assign(/* @__PURE__ */ Object.create(null), p, {
        signal: fe,
        method: E.toUpperCase(),
        headers: Of(Y.normalize()),
        body: b,
        duplex: "half",
        credentials: wt ? H : void 0
      });
      l && (S.forEach(Tg, (D, j) => {
        _[j] === void 0 && (_[j] = D);
      }), _.signal === void 0 && (_.signal = null), _.body === void 0 && (_.body = null)), Z === 0 && (_.redirect = "manual", p && (p.redirect = "manual")), ne = l && new o(w, _);
      let g = await (l ? Te(ne, p) : Te(w, _));
      const I = Je.from(g.headers);
      if (V) {
        const D = S.toFiniteNumber(I.getContentLength());
        if (D != null && D > se)
          throw new z(
            "maxContentLength size of " + se + " exceeded",
            z.ERR_BAD_RESPONSE,
            v,
            ne
          );
      }
      const U = y && (K === "stream" || K === "response");
      if (y && g.body && (k || V || U && ke)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((B) => {
          D[B] = g[B];
        });
        const j = S.toFiniteNumber(I.getContentLength()), [d, h] = k && Hl(
          j,
          Ms(Vl(k), !0)
        ) || [];
        let L = 0;
        const F = (B) => {
          if (V && (L = B, L > se))
            throw new z(
              "maxContentLength size of " + se + " exceeded",
              z.ERR_BAD_RESPONSE,
              v,
              ne
            );
          d && d(B);
        };
        g = new i(
          Bl(g.body, ql, F, () => {
            h && h(), ke && ke();
          }),
          D
        );
      }
      K = K || "text";
      let x = await T[S.findKey(T, K) || "text"](
        g,
        v
      );
      if (V && !y && !U) {
        let D;
        if (x != null && (typeof x.byteLength == "number" ? D = x.byteLength : typeof x.size == "number" ? D = x.size : typeof x == "string" && (D = typeof r == "function" ? new r().encode(x).byteLength : x.length)), typeof D == "number" && D > se)
          throw new z(
            "maxContentLength size of " + se + " exceeded",
            z.ERR_BAD_RESPONSE,
            v,
            ne
          );
      }
      return !U && ke && ke(), await new Promise((D, j) => {
        Ff(D, j, {
          data: x,
          headers: Je.from(g.headers),
          status: g.status,
          statusText: g.statusText,
          config: v,
          request: ne
        });
      });
    } catch (ie) {
      if (ke && ke(), fe && fe.aborted && fe.reason instanceof z) {
        const Oe = fe.reason;
        throw Oe.config = v, ne && (Oe.request = ne), ie !== Oe && Object.defineProperty(Oe, "cause", {
          __proto__: null,
          value: ie,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Oe;
      }
      if (Qe)
        throw ne && !Qe.request && (Qe.request = ne), Qe;
      if (ie instanceof z)
        throw ne && !ie.request && (ie.request = ne), ie;
      if (ie && ie.name === "TypeError" && /Load failed|fetch/i.test(ie.message)) {
        const Oe = new z(
          "Network Error",
          z.ERR_NETWORK,
          v,
          ne,
          ie && ie.response
        );
        throw Object.defineProperty(Oe, "cause", {
          __proto__: null,
          value: ie.cause || ie,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Oe;
      }
      throw z.from(ie, ie && ie.code, v, ne, ie && ie.response);
    }
  };
}, Cg = /* @__PURE__ */ new Map(), jf = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, a = i, l, u, c = Cg;
  for (; a--; )
    l = o[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : Rg(t)), c = u;
  return u;
};
jf();
const Yi = {
  http: D_,
  xhr: hg,
  fetch: {
    get: jf
  }
};
S.forEach(Yi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Xl = (e) => `- ${e}`, Pg = (e) => S.isFunction(e) || e === null || e === !1;
function Ng(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !Pg(r) && (s = Yi[(a = String(r)).toLowerCase()], s === void 0))
      throw new z(`Unknown adapter '${a}'`);
    if (s && (S.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Xl).join(`
`) : " " + Xl(i[0]) : "as no adapter specified";
    throw new z(
      "There is no suitable adapter to dispatch the request " + a,
      z.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const Wf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ng,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Yi
};
function Do(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new zr(null, e);
}
function Fo(e) {
  const t = S.toSafeFlatObject(e);
  return Do(t), t.headers = Je.from(S.getSafeProp(t, "headers")), t.data = ko.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Kr.adapter, t)(t).then(
    function(s) {
      Do(t), t.response = s;
      try {
        s.data = ko.call(t, t.transformResponse, s);
      } finally {
        delete t.response;
      }
      return s.headers = Je.from(s.headers), s;
    },
    function(s) {
      if (!Df(s) && (Do(t), s && s.response)) {
        t.response = s.response;
        try {
          s.response.data = ko.call(
            t,
            t.transformResponse,
            s.response
          );
        } finally {
          delete t.response;
        }
        s.response.headers = Je.from(s.response.headers);
      }
      return Promise.reject(s);
    }
  );
}
const ao = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ao[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jl = {};
ao.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Gi + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new z(
        s(i, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return n && !Jl[i] && (Jl[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
ao.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ig(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new z(
          "option " + o + " must be " + l,
          z.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new z("Unknown option " + o, z.ERR_BAD_OPTION);
  }
}
const hs = {
  assertOptions: Ig,
  validators: ao
}, ze = hs.validators;
let Nn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ul(),
      response: new Ul()
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
    r !== void 0 && hs.assertOptions(
      r,
      {
        silentJSONParsing: ze.transitional(ze.boolean),
        forcedJSONParsing: ze.transitional(ze.boolean),
        clarifyTimeoutError: ze.transitional(ze.boolean),
        legacyInterceptorReqResOrdering: ze.transitional(ze.boolean),
        advertiseZstdAcceptEncoding: ze.transitional(ze.boolean),
        validateStatusUndefinedResolves: ze.transitional(ze.boolean)
      },
      !1
    ), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : hs.assertOptions(
      s,
      {
        encode: ze.function,
        serialize: ze.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), hs.assertOptions(
      n,
      {
        baseUrl: ze.spelling("baseURL"),
        withXsrfToken: ze.spelling("withXSRFToken")
      },
      !0
    ), n.method = (S.getSafeProp(n, "method") || S.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let i = o && S.merge(o.common, o[n.method]);
    o && S.forEach(xf.concat("common"), (T) => {
      delete o[T];
    }), n.headers = Je.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(A) {
      if (typeof A.runWhen == "function" && A.runWhen(n) === !1)
        return;
      l = l && A.synchronous;
      const M = n.transitional || zi;
      M && M.legacyInterceptorReqResOrdering ? a.unshift(A.fulfilled, A.rejected) : a.push(A.fulfilled, A.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(A) {
      u.push(A.fulfilled, A.rejected);
    });
    let c, f = 0, m;
    if (!l) {
      const T = [Fo.bind(this), void 0];
      for (T.unshift(...a), T.push(...u), m = T.length, c = Promise.resolve(n); f < m; )
        c = c.then(T[f++], T[f++]);
      return c;
    }
    m = a.length;
    let y = n;
    for (; f < m; ) {
      const T = a[f++], A = a[f++];
      try {
        y = T ? T(y) : y;
      } catch (M) {
        if (!A) {
          c = Promise.reject(M);
          break;
        }
        try {
          const v = A.call(this, M);
          S.isThenable(v) && (c = Promise.resolve(v).then(
            () => Fo.call(this, y)
          ));
        } catch (v) {
          c = Promise.reject(v);
        }
        break;
      }
    }
    if (!c)
      try {
        c = Fo.call(this, y);
      } catch (T) {
        c = Promise.reject(T);
      }
    for (f = 0, m = u.length; f < m; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = xn(this.defaults, t);
    const n = $f(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Nf(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  Nn.prototype[t] = function(n, r) {
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
  Nn.prototype[t] = n(), t !== "query" && (Nn.prototype[t + "Form"] = n(!0));
});
let Mg = class Bf {
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
      r.reason || (r.reason = new zr(o, i, a), n(r.reason));
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
      token: new Bf(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function kg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function xg(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const ms = {
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
Object.entries(ms).forEach(([e, t]) => {
  ms[t] === void 0 && (ms[t] = e);
});
function Kf(e) {
  const t = new Nn(e), n = pf(Nn.prototype.request, t);
  return S.extend(n, Nn.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Kf(xn(e, s));
  }, n;
}
const Le = Kf(Kr);
Le.Axios = Nn;
Le.CanceledError = zr;
Le.CancelToken = Mg;
Le.isCancel = Df;
Le.VERSION = Gi;
Le.toFormData = io;
Le.AxiosError = z;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = kg;
Le.isAxiosError = xg;
Le.mergeConfig = xn;
Le.AxiosHeaders = Je;
Le.formToJSON = (e) => kf(S.isHTMLForm(e) ? new FormData(e) : e);
Le.getAdapter = Wf.getAdapter;
Le.HttpStatusCode = ms;
Le.default = Le;
const {
  Axios: C5,
  AxiosError: P5,
  CanceledError: N5,
  isCancel: I5,
  CancelToken: M5,
  VERSION: k5,
  all: x5,
  Cancel: D5,
  isAxiosError: F5,
  spread: U5,
  toFormData: $5,
  AxiosHeaders: H5,
  HttpStatusCode: V5,
  formToJSON: j5,
  getAdapter: W5,
  mergeConfig: B5,
  create: K5
} = Le, Dg = "X-Admin-UI-Request", Fg = "X-User-UI-Request";
function Ql(e) {
  return e === "/admin" || e.startsWith("/admin/") || e === "/api/v1/admin" || e.startsWith("/api/v1/admin/");
}
function zf(e) {
  const t = e.trim();
  if (!t) return "";
  try {
    const n = typeof window < "u" ? window.location.origin : "http://localhost";
    return new URL(t, n).pathname;
  } catch {
    return t.split(/[?#]/, 1)[0];
  }
}
function Ug(e) {
  const t = zf(e);
  return t ? t === "/api/v1" || t.startsWith("/api/v1/") ? t.slice(7) || "/" : t.startsWith("/") ? t : `/${t}` : "";
}
function $g(e) {
  const t = Ug(e);
  return t ? t === "/auth/me" || t === "/auth/revoke-all-sessions" || t === "/auth/oauth/bind-token" || t === "/user" || t.startsWith("/user/") || t === "/keys" || t.startsWith("/keys/") || t === "/groups/available" || t === "/groups/rates" || t === "/channels/available" || t === "/usage" || t.startsWith("/usage/") || t === "/announcements" || t.startsWith("/announcements/") || t === "/redeem" || t.startsWith("/redeem/") || t === "/subscriptions" || t.startsWith("/subscriptions/") || t === "/channel-monitors" || t.startsWith("/channel-monitors/") ? !0 : t.startsWith("/payment/") ? !(t.startsWith("/payment/public") || t.startsWith("/payment/webhook")) : !1 : !1;
}
function Hg(e, t) {
  const n = typeof window < "u" ? window.location.pathname : "";
  return Ql(zf(e)) || Ql(n);
}
function Vg(e) {
  return $g(e);
}
const Er = "/api/v1", jg = Wg();
function Xi(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function Wg(e) {
  const n = (String(Er).trim() || Er).replace(/\/+$/, "");
  return /^[a-z][a-z\d+.-]*:\/\//i.test(n) || n.startsWith("//") ? n : Xi(n);
}
function Fr() {
  return jg;
}
function z5(e) {
  const t = Fr().replace(/\/+$/, "");
  let n = Xi(e);
  return n === Er ? n = "" : n.startsWith(`${Er}/`) && (n = n.slice(Er.length)), `${t}${n}`;
}
function q5(e) {
  const t = Xi(e);
  try {
    return `${typeof window > "u" ? new URL(Fr()).origin : new URL(Fr(), window.location.origin).origin}${t}`;
  } catch {
    return t;
  }
}
const Ji = "auth_token", Bg = "auth_user", lo = "refresh_token", Qi = "token_expires_at", Kg = "sub2api-auth-token-refresh", Zl = 3e4, qf = 1e3, zg = 1e3, qg = 25;
let lr = null;
function Zi() {
  const e = localStorage.getItem(Bg);
  if (!e)
    return null;
  try {
    const t = Number(JSON.parse(e).id);
    return Number.isFinite(t) && t > 0 ? t : null;
  } catch {
    return null;
  }
}
function Gg() {
  const e = localStorage.getItem(lo);
  if (!e)
    throw new Error("No refresh token available");
  return {
    accessToken: localStorage.getItem(Ji),
    refreshToken: e,
    expiresAt: Number(localStorage.getItem(Qi)),
    userID: Zi()
  };
}
function Yg(e) {
  const t = localStorage.getItem(Ji), n = localStorage.getItem(lo), r = Number(localStorage.getItem(Qi));
  return !t || !n || !Number.isFinite(r) || r <= Date.now() || Zi() !== e.userID ? null : {
    access_token: t,
    refresh_token: n,
    expires_in: Math.max(1, Math.ceil((r - Date.now()) / 1e3)),
    token_type: "Bearer"
  };
}
function ks(e, t) {
  const n = Yg(e);
  return n && (n.refresh_token !== e.refreshToken || t && e.accessToken !== t && n.access_token === e.accessToken) ? n : null;
}
async function Xg(e, t, n = Date.now() + qf) {
  for (; Date.now() < n; ) {
    const r = ks(e, t);
    if (r)
      return r;
    await new Promise((s) => window.setTimeout(s, qg));
  }
  return ks(e, t);
}
function Jg(e) {
  localStorage.setItem(Ji, e.access_token), localStorage.setItem(Qi, String(Date.now() + e.expires_in * 1e3)), localStorage.setItem(lo, e.refresh_token);
}
async function Qg(e, t, n = !1) {
  var s;
  const r = Date.now() + Zl + zg;
  try {
    const i = (await Le.post(
      `${Fr()}/auth/refresh`,
      { refresh_token: e.refreshToken },
      { headers: { "Content-Type": "application/json" }, timeout: Zl }
    )).data;
    if (i.code !== 0 || !i.data)
      throw new Error(i.message || "Token refresh failed");
    if (localStorage.getItem(lo) !== e.refreshToken || Zi() !== e.userID) {
      const a = ks(e, t);
      if (a)
        return a;
      throw new Error("Session changed during token refresh");
    }
    return Jg(i.data), i.data;
  } catch (o) {
    const i = (s = o.response) == null ? void 0 : s.status, a = typeof i == "number" && i >= 400 && i < 500, l = await Xg(
      e,
      t,
      a && n ? r : Date.now() + qf
    );
    if (l)
      return l;
    throw o;
  }
}
async function Zg(e) {
  const t = Gg(), n = async (r = !1) => {
    const s = ks(t, e.failedAccessToken);
    return s || Qg(t, e.failedAccessToken, r);
  };
  return typeof navigator < "u" && navigator.locks ? navigator.locks.request(Kg, () => n(!1)) : n(!0);
}
function Gf(e = {}) {
  if (lr)
    return lr;
  const t = Zg(e);
  lr = t;
  const n = () => {
    lr === t && (lr = null);
  };
  return t.then(n, n), t;
}
const me = Le.create({
  baseURL: Fr(),
  withCredentials: !0,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), e2 = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};
me.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("auth_token");
    if (t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e.headers && (e.headers["Accept-Language"] = mf()), e.method === "get" && (e.params || (e.params = {}), e.params.timezone = e2()), e.headers) {
      const n = String(e.url || "");
      Hg(n) && (e.headers[Dg] = "1"), Vg(n) && (e.headers[Fg] = "1");
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
    var n, r, s, o, i;
    if (e.code === "ERR_CANCELED" || Le.isCancel(e))
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
          const v = localStorage.getItem("auth_user");
          t._retry = !0;
          try {
            const w = t.headers, E = (w == null ? void 0 : w.Authorization) ?? (w == null ? void 0 : w.authorization), b = typeof E == "string" && E.startsWith("Bearer ") ? E.slice(7) : null, C = await Gf({ failedAccessToken: b });
            return t.headers && (t.headers.Authorization = `Bearer ${C.access_token}`), me(t);
          } catch (w) {
            if (localStorage.getItem("refresh_token") !== f || localStorage.getItem("auth_user") !== v)
              return Promise.reject({
                status: 401,
                code: "AUTH_SESSION_CHANGED",
                message: "Authentication session changed while refreshing."
              });
            if (Le.isAxiosError(w)) {
              const b = ((r = w.response) == null ? void 0 : r.status) ?? 0;
              if (b === 0 || b === 429 || b >= 500)
                return Promise.reject({
                  status: b,
                  code: "TOKEN_REFRESH_UNAVAILABLE",
                  message: ((o = (s = w.response) == null ? void 0 : s.data) == null ? void 0 : o.message) || w.message
                });
            }
            return localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login"), Promise.reject({
              status: 401,
              code: "TOKEN_REFRESH_FAILED",
              message: "Session expired. Please log in again."
            });
          }
        }
        const y = !!localStorage.getItem("auth_token"), T = (i = e.config) == null ? void 0 : i.headers, A = (T == null ? void 0 : T.Authorization) ?? (T == null ? void 0 : T.authorization), M = typeof A == "string" ? A.trim() !== "" : Array.isArray(A) ? A.length > 0 : !!A;
        localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at"), (y || M) && !m && sessionStorage.setItem("auth_expired", "1"), window.location.pathname.includes("/login") || (window.location.href = "/login");
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
async function t2() {
  const { data: e } = await me.get("/admin/system/version");
  return e;
}
async function Yf(e = !1) {
  const { data: t } = await me.get("/admin/system/check-updates", {
    params: e ? { force: "true" } : void 0
  });
  return t;
}
async function n2() {
  const { data: e } = await me.get(
    "/admin/system/rollback-versions"
  );
  return e;
}
const Xf = 900 * 1e3;
async function r2() {
  const { data: e } = await me.post("/admin/system/update", void 0, {
    timeout: Xf
  });
  return e;
}
async function s2(e) {
  const { data: t } = await me.post(
    "/admin/system/rollback",
    e ? { version: e } : void 0,
    { timeout: Xf }
  );
  return t;
}
async function o2() {
  const { data: e } = await me.post("/admin/system/restart");
  return e;
}
const G5 = {
  getVersion: t2,
  checkUpdates: Yf,
  performUpdate: r2,
  getRollbackVersions: n2,
  rollback: s2,
  restartService: o2
};
function ea(e) {
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
function Jf() {
  return localStorage.getItem("auth_token");
}
function Qf() {
  return localStorage.getItem("refresh_token");
}
function i2() {
  const e = localStorage.getItem("token_expires_at");
  return e ? parseInt(e, 10) : null;
}
function Zf() {
  localStorage.removeItem("auth_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("auth_user"), localStorage.removeItem("token_expires_at");
}
async function a2(e) {
  const { data: t } = await me.post("/auth/login", e);
  return ea(t) || (co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user))), t;
}
async function l2(e) {
  const { data: t } = await me.post("/auth/login/2fa", e);
  return co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function c2(e) {
  const { data: t } = await me.post("/auth/register", e);
  return co(t.access_token), t.refresh_token && uo(t.refresh_token), t.expires_in && fo(t.expires_in), localStorage.setItem("auth_user", JSON.stringify(t.user)), t;
}
async function u2() {
  return me.get("/auth/me");
}
async function f2() {
  const e = Qf();
  if (e)
    try {
      await me.post("/auth/logout", { refresh_token: e });
    } catch {
    }
  Zf();
}
function ed(e) {
  const t = {};
  return typeof (e == null ? void 0 : e.adoptDisplayName) == "boolean" && (t.adopt_display_name = e.adoptDisplayName), typeof (e == null ? void 0 : e.adoptAvatar) == "boolean" && (t.adopt_avatar = e.adoptAvatar), t;
}
function d2(e) {
  return typeof e.access_token == "string" && e.access_token.trim().length > 0;
}
function h2(e) {
  return d2(e) ? "login" : "bind";
}
function m2(e) {
  return h2(e);
}
function p2(e) {
  return e.error === "invitation_required";
}
function _2(e) {
  return !!(e.suggested_display_name || e.suggested_avatar_url);
}
async function g2() {
  return Gf();
}
async function b2() {
  const { data: e } = await me.post("/auth/revoke-all-sessions");
  return e;
}
function y2() {
  return Jf() !== null;
}
async function td() {
  const { data: e } = await me.get("/settings/public");
  return e;
}
async function E2(e) {
  const { data: t } = await me.post("/auth/send-verify-code", e);
  return t;
}
async function v2(e) {
  const { data: t } = await me.post(
    "/auth/oauth/pending/send-verify-code",
    e
  );
  return t;
}
async function S2(e) {
  const { data: t } = await me.post("/auth/validate-promo-code", { code: e });
  return t;
}
async function A2(e) {
  const { data: t } = await me.post("/auth/validate-invitation-code", { code: e });
  return t;
}
async function w2(e) {
  const { data: t } = await me.post("/auth/forgot-password", e);
  return t;
}
async function T2(e) {
  const { data: t } = await me.post("/auth/reset-password", e);
  return t;
}
async function O2(e, t, n) {
  return nd(e, t, n);
}
async function L2(e, t, n) {
  return rd(e, t, n);
}
async function R2(e, t, n) {
  return sd(e, t, n);
}
async function ho(e, t, n, r) {
  const s = r == null ? void 0 : r.trim(), { data: o } = await me.post(
    `/auth/oauth/${e}/complete-registration`,
    {
      invitation_code: t,
      ...s ? { aff_code: s } : {},
      ...ed(n)
    }
  );
  return o;
}
async function nd(e, t, n) {
  return ho("linuxdo", e, t, n);
}
async function rd(e, t, n) {
  return ho("oidc", e, t, n);
}
async function sd(e, t, n) {
  return ho("wechat", e, t, n);
}
async function C2(e, t, n) {
  return ho("dingtalk", e, t, n);
}
async function od(e) {
  const { data: t } = await me.post(
    "/auth/oauth/pending/exchange",
    ed(e)
  );
  return t;
}
async function P2(e) {
  return od(e);
}
const Hn = {
  login: a2,
  login2FA: l2,
  isTotp2FARequired: ea,
  register: c2,
  getCurrentUser: u2,
  logout: f2,
  isAuthenticated: y2,
  setAuthToken: co,
  setRefreshToken: uo,
  setTokenExpiresAt: fo,
  getAuthToken: Jf,
  getRefreshToken: Qf,
  getTokenExpiresAt: i2,
  clearAuthToken: Zf,
  getPublicSettings: td,
  sendVerifyCode: E2,
  sendPendingOAuthVerifyCode: v2,
  validatePromoCode: S2,
  validateInvitationCode: A2,
  forgotPassword: w2,
  resetPassword: T2,
  refreshToken: g2,
  revokeAllSessions: b2,
  getPendingOAuthBindLoginKind: m2,
  isPendingOAuthCreateAccountRequired: p2,
  hasPendingOAuthSuggestedProfile: _2,
  completePendingOAuthBindLogin: od,
  createPendingLinuxDoOAuthAccount: nd,
  createPendingOIDCOAuthAccount: rd,
  createPendingWeChatOAuthAccount: sd,
  exchangePendingOAuthCompletion: P2,
  completeLinuxDoOAuthRegistration: O2,
  completeOIDCOAuthRegistration: L2,
  completeWeChatOAuthRegistration: R2,
  createPendingDingTalkOAuthAccount: C2
}, ec = "零一 API", id = /* @__PURE__ */ Iu("app", () => {
  const e = /* @__PURE__ */ le(!1), t = /* @__PURE__ */ le(!1), n = /* @__PURE__ */ le(0), r = /* @__PURE__ */ le(!1), s = /* @__PURE__ */ le([]), o = /* @__PURE__ */ le(!1), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(ec), l = /* @__PURE__ */ le(""), u = /* @__PURE__ */ le(""), c = /* @__PURE__ */ le(""), f = /* @__PURE__ */ le(""), m = /* @__PURE__ */ le(""), y = /* @__PURE__ */ le(null);
  let T = null, A = null, M = 0;
  const v = /* @__PURE__ */ le(!1), w = /* @__PURE__ */ le(!1), E = /* @__PURE__ */ le(""), b = /* @__PURE__ */ le(""), C = /* @__PURE__ */ le(!1), N = /* @__PURE__ */ le("source"), P = /* @__PURE__ */ le(null);
  let k = 0;
  const O = ye(() => s.value.length > 0), K = ye(() => {
    var _;
    return ((_ = y.value) == null ? void 0 : _.backend_mode_enabled) ?? !1;
  }), Y = /* @__PURE__ */ le(0);
  function H() {
    e.value = !e.value;
  }
  function J(_) {
    e.value = _;
  }
  function se() {
    t.value = !t.value;
  }
  function ge(_) {
    t.value = _;
  }
  function Z(_) {
    _ ? Y.value++ : Y.value = Math.max(0, Y.value - 1), r.value = Y.value > 0;
  }
  function V(_, g, I) {
    const U = `toast-${++k}`, x = {
      id: U,
      type: _,
      message: g,
      duration: I,
      startTime: I !== void 0 ? Date.now() : void 0
    };
    return s.value.push(x), I !== void 0 && setTimeout(() => {
      ne(U);
    }, I), U;
  }
  function G(_, g = 3e3) {
    return V("success", _, g);
  }
  function ue(_, g = 5e3) {
    return V("error", _, g);
  }
  function Te(_, g = 3e3) {
    return V("info", _, g);
  }
  function fe(_, g = 4e3) {
    return V("warning", _, g);
  }
  function ne(_) {
    const g = s.value.findIndex((I) => I.id === _);
    g !== -1 && s.value.splice(g, 1);
  }
  function ke() {
    s.value = [];
  }
  async function Ue(_) {
    Z(!0);
    try {
      return await _();
    } finally {
      Z(!1);
    }
  }
  async function Qe(_, g) {
    Z(!0);
    try {
      return await _();
    } catch (I) {
      const U = g || I.message || Kn.global.t("common.unknownError");
      return ue(U), null;
    } finally {
      Z(!1);
    }
  }
  function Ke() {
    e.value = !1, r.value = !1, Y.value = 0, s.value = [];
  }
  async function ie(_ = !1) {
    if (v.value && !_)
      return {
        current_version: E.value,
        latest_version: b.value,
        has_update: C.value,
        build_type: N.value,
        release_info: P.value || void 0,
        cached: !0
      };
    if (w.value)
      return null;
    w.value = !0;
    try {
      const g = await Yf(_);
      return E.value = g.current_version, b.value = g.latest_version, C.value = g.has_update, N.value = g.build_type || "source", P.value = g.release_info || null, v.value = !0, g;
    } catch (g) {
      return console.error("Failed to fetch version:", g), null;
    } finally {
      w.value = !1;
    }
  }
  function Oe() {
    v.value = !1, C.value = !1;
  }
  function $e(_) {
    typeof window < "u" && (window.__APP_CONFIG__ = { ..._ }), y.value = _, a.value = _.site_name || ec, l.value = _.site_logo || "", u.value = _.version || "", c.value = _.contact_info || "", f.value = _.api_base_url || "", m.value = _.doc_url || "", o.value = !0;
  }
  function xe(_ = !1) {
    if (T)
      return _ && !A && (M += 1, A = T.then(() => xe(!0)).finally(() => {
        A = null;
      })), _ ? A : T;
    if (_ && (M += 1), !o.value && !_ && window.__APP_CONFIG__)
      return $e(window.__APP_CONFIG__), Promise.resolve(window.__APP_CONFIG__);
    if (o.value && !_)
      return y.value ? Promise.resolve({ ...y.value }) : Promise.resolve({
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
    const g = M;
    let I;
    try {
      I = td();
    } catch (x) {
      return console.error("Failed to fetch public settings:", x), i.value = !1, Promise.resolve(null);
    }
    const U = I.then((x) => (g === M && $e(x), x)).catch((x) => (console.error("Failed to fetch public settings:", x), null)).finally(() => {
      T === U && (T = null, i.value = !1);
    });
    return T = U, U;
  }
  function wt() {
    M += 1, o.value = !1, y.value = null;
  }
  function p() {
    return window.__APP_CONFIG__ ? ($e(window.__APP_CONFIG__), !0) : !1;
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
    cachedPublicSettings: y,
    // Version state
    versionLoaded: v,
    versionLoading: w,
    currentVersion: E,
    latestVersion: b,
    hasUpdate: C,
    buildType: N,
    releaseInfo: P,
    // Computed
    hasActiveToasts: O,
    backendModeEnabled: K,
    // Actions
    toggleSidebar: H,
    setSidebarCollapsed: J,
    toggleMobileSidebar: se,
    setMobileOpen: ge,
    setLoading: Z,
    showToast: V,
    showSuccess: G,
    showError: ue,
    showInfo: Te,
    showWarning: fe,
    hideToast: ne,
    clearAllToasts: ke,
    withLoading: Ue,
    withLoadingAndError: Qe,
    reset: Ke,
    // Version actions
    fetchVersion: ie,
    clearVersionCache: Oe,
    // Public settings actions
    fetchPublicSettings: xe,
    clearPublicSettingsCache: wt,
    initFromInjectedConfig: p
  };
}), N2 = {
  class: "pointer-events-none fixed right-4 top-4 z-[9999] space-y-3",
  "aria-live": "polite",
  "aria-atomic": "true"
}, I2 = { class: "p-4" }, M2 = { class: "flex items-start gap-3" }, k2 = { class: "mt-0.5 flex-shrink-0" }, x2 = { class: "min-w-0 flex-1" }, D2 = {
  key: 0,
  class: "text-sm font-semibold text-gray-900 dark:text-white"
}, F2 = ["onClick"], U2 = {
  key: 0,
  class: "h-1 bg-gray-100 dark:bg-dark-700"
}, $2 = /* @__PURE__ */ Dn({
  __name: "Toast",
  setup(e) {
    const t = id(), n = ye(() => t.toasts), r = (l) => {
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
    return (l, u) => (Wt(), ws(ch, { to: "body" }, [
      yt("div", N2, [
        Ne(Nm, {
          "enter-active-class": "transition ease-out duration-300",
          "enter-from-class": "opacity-0 translate-x-full",
          "enter-to-class": "opacity-100 translate-x-0",
          "leave-active-class": "transition ease-in duration-200",
          "leave-from-class": "opacity-100 translate-x-0",
          "leave-to-class": "opacity-0 translate-x-full"
        }, {
          default: xc(() => [
            (Wt(!0), fr(je, null, Eh(n.value, (c) => (Wt(), fr("div", {
              key: c.id,
              class: on([
                "pointer-events-auto min-w-[320px] max-w-md overflow-hidden rounded-lg border shadow-card",
                "bg-white dark:bg-dark-800",
                o(c.type)
              ])
            }, [
              yt("div", I2, [
                yt("div", M2, [
                  yt("div", k2, [
                    Ne(Xa, {
                      name: r(c.type),
                      size: "md",
                      class: on(s(c.type)),
                      "aria-hidden": "true"
                    }, null, 8, ["name", "class"])
                  ]),
                  yt("div", x2, [
                    c.title ? (Wt(), fr("p", D2, $o(c.title), 1)) : Yo("", !0),
                    yt("p", {
                      class: on([
                        "text-sm leading-relaxed",
                        c.title ? "mt-1 text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"
                      ])
                    }, $o(c.message), 3)
                  ]),
                  yt("button", {
                    onClick: (f) => a(c.id),
                    class: "-m-1 flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-dark-700 dark:hover:text-gray-300",
                    "aria-label": "Close notification"
                  }, [
                    Ne(Xa, {
                      name: "x",
                      size: "sm"
                    })
                  ], 8, F2)
                ])
              ]),
              c.duration ? (Wt(), fr("div", U2, [
                yt("div", {
                  class: on(["h-full toast-progress", i(c.type)]),
                  style: js({ animationDuration: `${c.duration}ms` })
                }, null, 6)
              ])) : Yo("", !0)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), H2 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, V2 = /* @__PURE__ */ H2($2, [["__scopeId", "data-v-fc5fa96e"]]);
function ad() {
  if (!window.PublicKeyCredential || !navigator.credentials)
    throw new Error("Passkeys are not supported by this browser");
}
function vr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t + "=".repeat((4 - t.length % 4) % 4), r = atob(n);
  return Uint8Array.from(r, (o) => o.charCodeAt(0)).buffer;
}
function sn(e) {
  if (e === null) return null;
  const t = new Uint8Array(e);
  let n = "";
  for (const r of t) n += String.fromCharCode(r);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function j2(e) {
  const t = { ...e };
  t.challenge = vr(String(t.challenge));
  const n = { ...t.user };
  return n.id = vr(String(n.id)), t.user = n, Array.isArray(t.excludeCredentials) && (t.excludeCredentials = t.excludeCredentials.map((r) => ({
    ...r,
    id: vr(String(r.id))
  }))), t;
}
function W2(e) {
  const t = { ...e };
  return t.challenge = vr(String(t.challenge)), Array.isArray(t.allowCredentials) && (t.allowCredentials = t.allowCredentials.map((n) => ({
    ...n,
    id: vr(String(n.id))
  }))), t;
}
function B2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: sn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      attestationObject: sn(t.attestationObject),
      clientDataJSON: sn(t.clientDataJSON),
      transports: typeof t.getTransports == "function" ? t.getTransports() : []
    }
  };
}
function K2(e) {
  const t = e.response;
  return {
    id: e.id,
    rawId: sn(e.rawId),
    type: e.type,
    authenticatorAttachment: e.authenticatorAttachment,
    clientExtensionResults: e.getClientExtensionResults(),
    response: {
      authenticatorData: sn(t.authenticatorData),
      clientDataJSON: sn(t.clientDataJSON),
      signature: sn(t.signature),
      userHandle: sn(t.userHandle)
    }
  };
}
async function z2(e) {
  ad();
  const { data: t } = e ? await me.post("/auth/passkey/login/begin", e) : await me.post("/auth/passkey/login/begin"), n = await navigator.credentials.get({
    publicKey: W2(t.options.publicKey)
  });
  if (!(n instanceof PublicKeyCredential))
    throw new Error("Passkey sign-in was cancelled");
  const { data: r } = await me.post("/auth/passkey/login/finish", {
    session_token: t.session_token,
    credential: K2(n)
  });
  return r;
}
async function q2(e, t) {
  ad();
  const { data: n } = await me.post(
    "/user/passkeys/register/begin",
    { password: t }
  ), r = await navigator.credentials.create({
    publicKey: j2(n.options.publicKey)
  });
  if (!(r instanceof PublicKeyCredential))
    throw new Error("Passkey creation was cancelled");
  const { data: s } = await me.post(
    "/user/passkeys/register/finish",
    {
      session_token: n.session_token,
      name: e,
      credential: B2(r)
    }
  );
  return s;
}
async function G2() {
  const { data: e } = await me.get("/user/passkeys");
  return e;
}
async function Y2(e, t) {
  await me.patch(`/user/passkeys/${e}`, { name: t });
}
async function X2(e, t) {
  await me.delete(`/user/passkeys/${e}`, { data: { password: t } });
}
const J2 = {
  isSupported: () => !!(window.PublicKeyCredential && navigator.credentials),
  login: z2,
  register: q2,
  list: G2,
  rename: Y2,
  remove: X2
}, ss = "auth_token", Uo = "auth_user", os = "refresh_token", is = "token_expires_at", Sr = "pending_auth_session", Q2 = 60 * 1e3, Z2 = 120 * 1e3;
function e5(e) {
  return e === "pending_oauth_token" ? "pending_oauth_token" : "pending_auth_token";
}
function tc() {
  const e = localStorage.getItem(Sr);
  if (!e)
    return null;
  try {
    const t = JSON.parse(e), n = typeof (t == null ? void 0 : t.provider) == "string" ? t.provider.trim() : "";
    return n ? {
      token: typeof (t == null ? void 0 : t.token) == "string" ? t.token : "",
      token_field: e5(t == null ? void 0 : t.token_field),
      provider: n,
      redirect: typeof (t == null ? void 0 : t.redirect) == "string" ? t.redirect : void 0,
      adoption_required: typeof (t == null ? void 0 : t.adoption_required) == "boolean" ? t.adoption_required : void 0,
      suggested_display_name: typeof (t == null ? void 0 : t.suggested_display_name) == "string" ? t.suggested_display_name : void 0,
      suggested_avatar_url: typeof (t == null ? void 0 : t.suggested_avatar_url) == "string" ? t.suggested_avatar_url : void 0
    } : (localStorage.removeItem(Sr), null);
  } catch {
    return localStorage.removeItem(Sr), null;
  }
}
function t5(e) {
  localStorage.setItem(Sr, JSON.stringify(e));
}
function nc() {
  localStorage.removeItem(Sr);
}
const n5 = /* @__PURE__ */ Iu("auth", () => {
  const e = /* @__PURE__ */ le(null), t = /* @__PURE__ */ le(null), n = /* @__PURE__ */ le(null), r = /* @__PURE__ */ le(null), s = /* @__PURE__ */ le("standard"), o = /* @__PURE__ */ le(null);
  let i = null, a = null;
  const l = ye(() => !!t.value && !!e.value), u = ye(() => {
    var V;
    return ((V = e.value) == null ? void 0 : V.role) === "admin";
  }), c = ye(() => s.value === "simple"), f = ye(() => o.value !== null);
  function m(V, G) {
    const { run_mode: ue, ...Te } = V;
    return s.value = G ?? (ue === "simple" ? "simple" : "standard"), e.value = Te, localStorage.setItem(
      Uo,
      JSON.stringify({ ...Te, run_mode: s.value })
    ), e.value;
  }
  function y(V) {
    const G = localStorage.getItem(ss), ue = localStorage.getItem(Uo), Te = localStorage.getItem(os), fe = localStorage.getItem(is);
    if (o.value = tc(), G && ue)
      try {
        const ne = JSON.parse(ue);
        return t.value = G, m(ne, V), n.value = Te, r.value = fe ? parseInt(fe, 10) : null, !0;
      } catch (ne) {
        console.error("Failed to parse saved user data:", ne), Z({ preservePendingAuthSession: !0 });
      }
    return !1;
  }
  function T(V) {
    s.value = V;
  }
  function A() {
    y() && (ge().catch((V) => {
      console.error("Failed to refresh user on init:", V);
    }), M(), n.value && r.value !== null && w(r.value));
  }
  function M() {
    v(), i = setInterval(() => {
      t.value && ge().catch((V) => {
        console.error("Auto-refresh user failed:", V);
      });
    }, Q2);
  }
  function v() {
    i && (clearInterval(i), i = null);
  }
  function w(V) {
    a && (clearTimeout(a), a = null);
    const G = Date.now(), ue = Math.max(0, V - G - Z2);
    if (ue <= 0) {
      b();
      return;
    }
    a = setTimeout(() => {
      b();
    }, ue);
  }
  function E(V) {
    const G = Date.now() + V * 1e3;
    r.value = G, localStorage.setItem(is, String(G)), w(G);
  }
  async function b() {
    if (n.value)
      try {
        const V = await Hn.refreshToken();
        t.value = V.access_token, n.value = V.refresh_token, E(V.expires_in);
      } catch (V) {
        console.error("Token refresh failed:", V);
      }
  }
  function C() {
    a && (clearTimeout(a), a = null);
  }
  async function N(V) {
    try {
      const G = await Hn.login(V);
      return ea(G) || O(G), G;
    } catch (G) {
      throw Z({ preservePendingAuthSession: o.value !== null }), G;
    }
  }
  async function P(V, G) {
    try {
      const ue = await Hn.login2FA({ temp_token: V, totp_code: G });
      return O(ue), e.value;
    } catch (ue) {
      throw Z({ preservePendingAuthSession: o.value !== null }), ue;
    }
  }
  async function k(V) {
    try {
      const G = await J2.login(V);
      return O(G), e.value;
    } catch (G) {
      throw Z({ preservePendingAuthSession: o.value !== null }), G;
    }
  }
  function O(V) {
    t.value = V.access_token, V.refresh_token && (n.value = V.refresh_token, localStorage.setItem(os, V.refresh_token)), m(V.user), localStorage.setItem(ss, V.access_token), J(), M(), V.refresh_token && V.expires_in && E(V.expires_in);
  }
  async function K(V) {
    try {
      const G = await Hn.register(V);
      return O(G), e.value;
    } catch (G) {
      throw Z({ preservePendingAuthSession: o.value !== null }), G;
    }
  }
  async function Y(V) {
    v(), C(), t.value = null, e.value = null, s.value = "standard", t.value = V, localStorage.setItem(ss, V);
    const G = localStorage.getItem(os), ue = localStorage.getItem(is);
    G && (n.value = G), ue && (r.value = parseInt(ue, 10));
    try {
      const Te = await ge();
      return M(), G && r.value !== null && w(r.value), J(), Te;
    } catch (Te) {
      throw Z({ preservePendingAuthSession: o.value !== null }), Te;
    }
  }
  function H(V) {
    if (o.value = V, V) {
      t5(V);
      return;
    }
    nc();
  }
  function J() {
    H(null);
  }
  async function se() {
    try {
      await Hn.logout();
    } catch (V) {
      console.warn("Logout API call failed, clearing local session anyway", V);
    } finally {
      Z();
    }
  }
  async function ge() {
    if (!t.value)
      throw new Error("Not authenticated");
    try {
      const V = await Hn.getCurrentUser();
      return m(V.data);
    } catch (V) {
      throw V.status === 401 && Z({ preservePendingAuthSession: o.value !== null }), V;
    }
  }
  function Z(V) {
    if (v(), C(), t.value = null, n.value = null, r.value = null, e.value = null, s.value = "standard", localStorage.removeItem(ss), localStorage.removeItem(Uo), localStorage.removeItem(os), localStorage.removeItem(is), V != null && V.preservePendingAuthSession) {
      o.value = tc();
      return;
    }
    o.value = null, nc();
  }
  return {
    // State
    user: e,
    token: t,
    runMode: /* @__PURE__ */ Tr(s),
    pendingAuthSession: /* @__PURE__ */ Tr(o),
    // Computed
    isAuthenticated: l,
    isAdmin: u,
    isSimpleMode: c,
    hasPendingAuthSession: f,
    // Actions
    login: N,
    loginWithPasskey: k,
    login2FA: P,
    register: K,
    setToken: Y,
    logout: se,
    checkAuth: A,
    hydrateAuthSnapshot: y,
    setRunModeSnapshot: T,
    refreshUser: ge,
    setPendingAuthSession: H,
    clearPendingAuthSession: J
  };
}), r5 = {
  accounts: () => import("./AccountsView-BhxJXc9P.js"),
  groups: () => import("./GroupsView-8m5sxYkE.js"),
  channels: () => import("./ChannelsView-DDFgTVEa.js"),
  "channel-monitor": () => import("./ChannelMonitorView-5VBens4d.js"),
  "channel-status": () => import("./ChannelStatusView-ZZlZkZiM.js"),
  ops: () => import("./OpsDashboard-DCYwBkyQ.js"),
  subscriptions: () => import("./SubscriptionsView-BL7Z0xqB.js"),
  settings: () => import("./SettingsView-BKB41usZ.js")
};
function s5() {
  var t, n, r;
  const e = document.querySelector("#app");
  return ((r = (n = (t = e == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$router) || null;
}
function o5(e) {
  const t = s5();
  if (!t) return;
  const n = {};
  for (const r in t.currentRoute.value)
    Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t.currentRoute.value[r]
    });
  e.component("RouterLink", ap), e.provide(eo, t), e.provide(Mi, /* @__PURE__ */ Lc(n));
}
async function i5(e, t) {
  const [{ default: n }] = await Promise.all([
    r5[e](),
    T1()
  ]), r = Xm(), s = id(r), o = n5(r);
  s.initFromInjectedConfig(), o.hydrateAuthSnapshot(t.runMode);
  const a = qm(/* @__PURE__ */ Dn({
    name: "ZeroOneCNProviderAdminRoot",
    setup: () => () => [zn(n), zn(V2)]
  }));
  a.use(r), o5(a), a.use(Kn);
  let l = !1;
  async function u(c) {
    o.setRunModeSnapshot(c.runMode), Kn.global.locale.value !== c.locale && (await hf(c.locale), Kn.global.locale.value = c.locale);
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
const Y5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prepareCNProviderSurface: i5
}, Symbol.toStringTag, { value: "Module" }));
export {
  w5 as $,
  S5 as A,
  ws as B,
  Ai as C,
  Um as D,
  xc as E,
  je as F,
  $m as G,
  Fm as H,
  u5 as I,
  qc as J,
  zn as K,
  d5 as L,
  y5 as M,
  m5 as N,
  g5 as O,
  b5 as P,
  z5 as Q,
  Dg as R,
  Yh as S,
  ch as T,
  T5 as U,
  _t as V,
  me as W,
  _5 as X,
  p5 as Y,
  A5 as Z,
  Xa as _,
  le as a,
  Re as a0,
  dc as a1,
  vd as a2,
  c5 as a3,
  Si as a4,
  om as a5,
  Ks as a6,
  mf as a7,
  Kn as a8,
  a5 as a9,
  h5 as aa,
  E5 as ab,
  Bd as ac,
  Iu as ad,
  f5 as ae,
  q5 as af,
  G5 as ag,
  sh as ah,
  vi as ai,
  Y5 as aj,
  Oi as b,
  Vi as c,
  Dn as d,
  Wt as e,
  fr as f,
  yt as g,
  $o as h,
  _r as i,
  Ne as j,
  n5 as k,
  Gh as l,
  l5 as m,
  Yo as n,
  Li as o,
  Eh as p,
  on as q,
  $r as r,
  ye as s,
  ce as t,
  id as u,
  $a as v,
  Cn as w,
  js as x,
  H2 as y,
  v5 as z
};
