import { i as E, w as j, a4 as ct, a9 as Ae, a2 as ut, s as C, d as je, c as Ve, a as D, b as Re, o as ht, e as y, f as b, F as T, p as L, g as u, n as F, N as H, j as G, _ as se, h as I, q as $, z as Te, l as q, x as Fe, C as ee, y as Be, m as ft, v as gt, A as mt } from "./cnProviderAdminLeaf-B6vuXkvp.js";
import { S as pt } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-d3KA2Dbp.js";
const He = 5, yt = 1e3, bt = 20, $e = [10, 20, 50, 100], Ue = (r) => {
  const c = Number(r);
  return !Number.isInteger(c) || c < He || c > yt ? null : c;
}, vt = (r) => {
  const c = Number(r);
  return !Number.isInteger(c) || c < He ? null : c;
}, qe = () => typeof window > "u" ? null : window.__APP_CONFIG__ ?? null, kt = () => {
  var c;
  const r = (c = qe()) == null ? void 0 : c.table_page_size_options;
  return Array.isArray(r) ? Array.from(
    new Set(
      r.map((e) => Ue(e)).filter((e) => e !== null)
    )
  ).sort((e, s) => e - s) : [];
}, Pe = (r, c) => {
  for (const e of c)
    if (e >= r)
      return e;
  return c[c.length - 1];
}, te = () => {
  var c;
  const r = Ue((c = qe()) == null ? void 0 : c.table_default_page_size);
  return r === null ? bt : r;
}, he = () => {
  const r = kt();
  return r.length === 0 ? [...$e] : r.length > 0 ? r : [...$e];
}, J = (r) => {
  const c = vt(r), e = te(), s = he();
  return Pe(c !== null ? c : e, s);
}, Ge = "table-page-size";
function Ns(r = te()) {
  var c;
  if (typeof window < "u" && ((c = window.__APP_CONFIG__) == null ? void 0 : c.table_default_page_size) !== void 0)
    return J(te());
  if (typeof window < "u")
    try {
      const e = window.localStorage.getItem(Ge);
      if (e !== null) {
        const s = Number(e);
        if (Number.isFinite(s))
          return J(s);
      }
    } catch (e) {
      console.warn("Failed to read persisted page size:", e);
    }
  return J(te() || r);
}
function xt(r) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ge, String(r));
    } catch (c) {
      console.warn("Failed to persist page size:", c);
    }
}
function U(r, c, e) {
  let s = e.initialDeps ?? [], n, o = !0;
  function l() {
    var d, v, w;
    let S;
    e.key && ((d = e.debug) != null && d.call(e)) && (S = Date.now());
    const z = r();
    if (!(z.length !== s.length || z.some((p, g) => s[g] !== p)))
      return n;
    s = z;
    let O;
    if (e.key && ((v = e.debug) != null && v.call(e)) && (O = Date.now()), n = c(...z), e.key && ((w = e.debug) != null && w.call(e))) {
      const p = Math.round((Date.now() - S) * 100) / 100, g = Math.round((Date.now() - O) * 100) / 100, m = g / 16, M = (A, h) => {
        for (A = String(A); A.length < h; )
          A = " " + A;
        return A;
      };
      console.info(
        `%c⏱ ${M(g, 5)} /${M(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return e != null && e.onChange && !(o && e.skipInitialOnChange) && e.onChange(n), o = !1, n;
  }
  return l.updateDeps = (d) => {
    s = d;
  }, l;
}
function Le(r, c) {
  if (r === void 0)
    throw new Error("Unexpected undefined");
  return r;
}
const St = (r, c) => Math.abs(r - c) < 1.01, wt = (r, c, e) => {
  let s;
  return function(...n) {
    r.clearTimeout(s), s = r.setTimeout(() => c.apply(this, n), e);
  };
}, Ke = (r) => {
  const { offsetWidth: c, offsetHeight: e } = r;
  return { width: c, height: e };
}, zt = (r) => r, Ct = (r) => {
  const c = Math.max(r.startIndex - r.overscan, 0), e = Math.min(r.endIndex + r.overscan, r.count - 1), s = [];
  for (let n = c; n <= e; n++)
    s.push(n);
  return s;
}, Je = (r, c) => {
  const e = r.scrollElement;
  if (!e)
    return;
  const s = r.targetWindow;
  if (!s)
    return;
  const n = (l) => {
    const { width: d, height: v } = l;
    c({ width: Math.round(d), height: Math.round(v) });
  };
  if (n(Ke(e)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((l) => {
    const d = () => {
      const v = l[0];
      if (v != null && v.borderBoxSize) {
        const w = v.borderBoxSize[0];
        if (w) {
          n({ width: w.inlineSize, height: w.blockSize });
          return;
        }
      }
      n(Ke(e));
    };
    r.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return o.observe(e, { box: "border-box" }), () => {
    o.unobserve(e);
  };
}, De = {
  passive: !0
}, Ne = typeof window > "u" ? !0 : "onscrollend" in window, Et = (r, c) => {
  const e = r.scrollElement;
  if (!e)
    return;
  const s = r.targetWindow;
  if (!s)
    return;
  let n = 0;
  const o = r.options.useScrollendEvent && Ne ? () => {
  } : wt(
    s,
    () => {
      c(n, !1);
    },
    r.options.isScrollingResetDelay
  ), l = (S) => () => {
    const { horizontal: z, isRtl: k } = r.options;
    n = z ? e.scrollLeft * (k && -1 || 1) : e.scrollTop, o(), c(n, S);
  }, d = l(!0), v = l(!1);
  e.addEventListener("scroll", d, De);
  const w = r.options.useScrollendEvent && Ne;
  return w && e.addEventListener("scrollend", v, De), () => {
    e.removeEventListener("scroll", d), w && e.removeEventListener("scrollend", v);
  };
}, _t = (r, c, e) => {
  if (c != null && c.borderBoxSize) {
    const s = c.borderBoxSize[0];
    if (s)
      return Math.round(
        s[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return r[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, It = (r, {
  adjustments: c = 0,
  behavior: e
}, s) => {
  var n, o;
  const l = r + c;
  (o = (n = s.scrollElement) == null ? void 0 : n.scrollTo) == null || o.call(n, {
    [s.options.horizontal ? "left" : "top"]: l,
    behavior: e
  });
};
class Ot {
  constructor(c) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e, s, n;
      return ((n = (s = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : s.now) == null ? void 0 : n.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const s = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((n) => {
        n.forEach((o) => {
          const l = () => {
            const d = o.target, v = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(v) && this.resizeItem(
              v,
              this.options.measureElement(d, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var n;
          (n = s()) == null || n.disconnect(), e = null;
        },
        observe: (n) => {
          var o;
          return (o = s()) == null ? void 0 : o.observe(n, { box: "border-box" });
        },
        unobserve: (n) => {
          var o;
          return (o = s()) == null ? void 0 : o.unobserve(n);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([s, n]) => {
        typeof n > "u" && delete e[s];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: zt,
        rangeExtractor: Ct,
        onChange: () => {
        },
        measureElement: _t,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...e
      };
    }, this.notify = (e) => {
      var s, n;
      (n = (s = this.options).onChange) == null || n.call(s, this, e);
    }, this.maybeNotify = U(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((n) => {
          this.observer.observe(n);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (n) => {
            this.scrollRect = n, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (n, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < n ? "forward" : "backward" : null, this.scrollOffset = n, this.isScrolling = o, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, s) => {
      const n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      for (let l = s - 1; l >= 0; l--) {
        const d = e[l];
        if (n.has(d.lane))
          continue;
        const v = o.get(
          d.lane
        );
        if (v == null || d.end > v.end ? o.set(d.lane, d) : d.end < v.end && n.set(d.lane, !0), n.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((l, d) => l.end === d.end ? l.index - d.index : l.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = U(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (e, s, n, o, l, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: s,
        scrollMargin: n,
        getItemKey: o,
        enabled: l,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = U(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: s, scrollMargin: n, getItemKey: o, enabled: l, lanes: d }, v) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > e)
          for (const k of this.laneAssignments.keys())
            k >= e && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const w = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
        const S = this.measurementsCache.slice(0, w), z = new Array(d).fill(
          void 0
        );
        for (let k = 0; k < w; k++) {
          const O = S[k];
          O && (z[O.lane] = k);
        }
        for (let k = w; k < e; k++) {
          const O = o(k), p = this.laneAssignments.get(k);
          let g, m;
          if (p !== void 0 && this.options.lanes > 1) {
            g = p;
            const _ = z[g], R = _ !== void 0 ? S[_] : void 0;
            m = R ? R.end + this.options.gap : s + n;
          } else {
            const _ = this.options.lanes === 1 ? S[k - 1] : this.getFurthestMeasurement(S, k);
            m = _ ? _.end + this.options.gap : s + n, g = _ ? _.lane : k % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(k, g);
          }
          const M = v.get(O), A = typeof M == "number" ? M : this.options.estimateSize(k), h = m + A;
          S[k] = {
            index: k,
            start: m,
            size: A,
            end: h,
            key: O,
            lane: g
          }, z[g] = k;
        }
        return this.measurementsCache = S, S;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = U(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, s, n, o) => this.range = e.length > 0 && s > 0 ? Mt({
        measurements: e,
        outerSize: s,
        scrollOffset: n,
        lanes: o
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = U(
      () => {
        let e = null, s = null;
        const n = this.calculateRange();
        return n && (e = n.startIndex, s = n.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          s
        ];
      },
      (e, s, n, o, l) => o === null || l === null ? [] : e({
        startIndex: o,
        endIndex: l,
        overscan: s,
        count: n
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const s = this.options.indexAttribute, n = e.getAttribute(s);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (e) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const n = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (n !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), l = Math.max(0, n - o), d = Math.min(
          this.options.count - 1,
          n + o
        );
        return e >= l && e <= d;
      }
      return !0;
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((l, d) => {
          l.isConnected || (this.observer.unobserve(l), this.elementsCache.delete(d));
        });
        return;
      }
      const s = this.indexFromElement(e), n = this.options.getItemKey(s), o = this.elementsCache.get(n);
      o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(n, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(e, void 0, this));
    }, this.resizeItem = (e, s) => {
      var n;
      const o = this.measurementsCache[e];
      if (!o) return;
      const l = this.itemSizeCache.get(o.key) ?? o.size, d = s - l;
      d !== 0 && (((n = this.scrollState) == null ? void 0 : n.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, d, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, s)), this.notify(!1));
    }, this.getVirtualItems = U(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, s) => {
        const n = [];
        for (let o = 0, l = e.length; o < l; o++) {
          const d = e[o], v = s[d];
          n.push(v);
        }
        return n;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const s = this.getMeasurements();
      if (s.length !== 0)
        return Le(
          s[Ze(
            0,
            s.length - 1,
            (n) => Le(s[n]).start,
            e
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const e = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (e, s, n = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), l = this.getScrollOffset();
      s === "auto" && (s = e >= l + o ? "end" : "start"), s === "center" ? e += (n - o) / 2 : s === "end" && (e -= o);
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, e), 0);
    }, this.getOffsetForIndex = (e, s = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const n = this.getSize(), o = this.getScrollOffset(), l = this.measurementsCache[e];
      if (!l) return;
      if (s === "auto")
        if (l.end >= o + n - this.options.scrollPaddingEnd)
          s = "end";
        else if (l.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && e === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const d = s === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, s, l.size),
        s
      ];
    }, this.scrollToOffset = (e, { align: s = "start", behavior: n = "auto" } = {}) => {
      const o = this.getOffsetForAlignment(e, s), l = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: n,
        startedAt: l,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e, {
      align: s = "auto",
      behavior: n = "auto"
    } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const o = this.getOffsetForIndex(e, s);
      if (!o)
        return;
      const [l, d] = o, v = this.now();
      this.scrollState = {
        index: e,
        align: d,
        behavior: n,
        startedAt: v,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e, { behavior: s = "auto" } = {}) => {
      const n = this.getScrollOffset() + e, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: n,
        stableFrames: 0
      }, this._scrollToOffset(n, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var e;
      const s = this.getMeasurements();
      let n;
      if (s.length === 0)
        n = this.options.paddingStart;
      else if (this.options.lanes === 1)
        n = ((e = s[s.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const o = Array(this.options.lanes).fill(null);
        let l = s.length - 1;
        for (; l >= 0 && o.some((d) => d === null); ) {
          const d = s[l];
          o[d.lane] === null && (o[d.lane] = d.end), l--;
        }
        n = Math.max(...o.filter((d) => d !== null));
      }
      return Math.max(
        n - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e, {
      adjustments: s,
      behavior: n
    }) => {
      this.options.scrollToFn(e, { behavior: n, adjustments: s }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(c);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, n = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, l = n !== this.scrollState.lastTargetOffset;
    if (!l && St(n, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, l && (this.scrollState.lastTargetOffset = n, this.scrollState.behavior = "auto", this._scrollToOffset(n, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const Ze = (r, c, e, s) => {
  for (; r <= c; ) {
    const n = (r + c) / 2 | 0, o = e(n);
    if (o < s)
      r = n + 1;
    else if (o > s)
      c = n - 1;
    else
      return n;
  }
  return r > 0 ? r - 1 : 0;
};
function Mt({
  measurements: r,
  outerSize: c,
  scrollOffset: e,
  lanes: s
}) {
  const n = r.length - 1, o = (v) => r[v].start;
  if (r.length <= s)
    return {
      startIndex: 0,
      endIndex: n
    };
  let l = Ze(
    0,
    n,
    o,
    e
  ), d = l;
  if (s === 1)
    for (; d < n && r[d].end < e + c; )
      d++;
  else if (s > 1) {
    const v = Array(s).fill(0);
    for (; d < n && v.some((S) => S < e + c); ) {
      const S = r[d];
      v[S.lane] = S.end, d++;
    }
    const w = Array(s).fill(e + c);
    for (; l >= 0 && w.some((S) => S >= e); ) {
      const S = r[l];
      w[S.lane] = S.start, l--;
    }
    l = Math.max(0, l - l % s), d = Math.min(n, d + (s - 1 - d % s));
  }
  return { startIndex: l, endIndex: d };
}
function At(r) {
  const c = new Ot(E(r)), e = ct(c), s = c._didMount();
  return j(
    () => E(r).getScrollElement(),
    (n) => {
      n && c._willUpdate();
    },
    {
      immediate: !0
    }
  ), j(
    () => E(r),
    (n) => {
      c.setOptions({
        ...n,
        onChange: (o, l) => {
          var d;
          Ae(e), (d = n.onChange) == null || d.call(n, o, l);
        }
      }), c._willUpdate(), Ae(e);
    },
    {
      immediate: !0
    }
  ), ut(s), e;
}
function Rt(r) {
  return At(
    C(() => ({
      observeElementRect: Je,
      observeElementOffset: Et,
      scrollToFn: It,
      ...E(r)
    }))
  );
}
const Tt = {
  key: 0,
  class: "space-y-3"
}, Ft = { class: "space-y-3" }, $t = {
  key: 0,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Pt = {
  key: 1,
  class: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-dark-700 dark:bg-dark-900"
}, Lt = { class: "flex flex-col items-center" }, Kt = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, Dt = {
  key: 0,
  class: "flex items-center justify-end gap-2 px-1"
}, Nt = { class: "flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300" }, Wt = ["checked", "indeterminate"], jt = ["onClick"], Vt = { class: "space-y-3" }, Bt = {
  key: 0,
  class: "flex justify-end"
}, Ht = ["checked", "aria-label", "onChange"], Ut = ["data-field"], qt = { class: "text-xs font-medium text-gray-500 dark:text-dark-400" }, Gt = { class: "min-w-0 max-w-full text-right text-sm text-gray-900 dark:text-gray-100" }, Jt = {
  key: 1,
  class: "border-t border-gray-200 pt-3 dark:border-dark-700"
}, Zt = { class: "w-full min-w-max divide-y divide-gray-200 dark:divide-dark-700" }, Xt = { class: "table-header bg-gray-50 dark:bg-dark-800" }, Qt = {
  key: 0,
  scope: "col",
  class: "sticky-header-cell w-11 min-w-11 px-3 py-3 text-center"
}, Yt = ["checked", "indeterminate", "aria-label"], es = ["aria-sort", "onClick"], ts = {
  key: 0,
  class: "inline-flex h-5 w-4 flex-col items-center justify-center",
  "aria-hidden": "true"
}, ss = { class: "table-body divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900" }, ns = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4"
}, rs = { key: 1 }, is = ["colspan"], as = { class: "flex flex-col items-center" }, os = { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, ls = {
  key: 0,
  "aria-hidden": "true"
}, ds = ["colspan"], cs = ["data-row-id", "data-index", "onClick"], us = {
  key: 0,
  class: "w-11 min-w-11 px-3 py-4 text-center"
}, hs = ["checked", "aria-label", "onChange"], fs = {
  key: 1,
  "aria-hidden": "true"
}, gs = ["colspan"], We = "(min-width: 768px)", ms = /* @__PURE__ */ je({
  __name: "DataTable",
  props: {
    columns: {},
    data: {},
    loading: { type: Boolean, default: !1 },
    stickyFirstColumn: { type: Boolean, default: !0 },
    stickyActionsColumn: { type: Boolean, default: !0 },
    expandableActions: { type: Boolean, default: !0 },
    actionsCount: {},
    rowKey: {},
    defaultSortKey: {},
    defaultSortOrder: { default: "asc" },
    sortStorageKey: {},
    serverSideSort: { type: Boolean, default: !1 },
    clickableRows: { type: Boolean },
    estimateRowHeight: {},
    overscan: {},
    virtualizeThreshold: {},
    selectable: { type: Boolean, default: !1 },
    selectedKeys: { default: () => [] },
    selectionLabel: {}
  },
  emits: ["sort", "rowClick", "update:selectedKeys", "selectionChange"],
  setup(r, { expose: c, emit: e }) {
    const { t: s } = Ve(), n = D(
      typeof window > "u" ? !0 : window.matchMedia(We).matches
    ), o = e, l = D(null), d = D(!1), v = D(!1), w = () => typeof window > "u" ? 600 : Math.max(window.innerHeight - 320, 400), S = (t, i) => Je(t, (a) => {
      a.height > 0 && i(a);
    }), z = () => {
      l.value && (d.value = l.value.scrollWidth > l.value.clientWidth);
    }, k = () => {
      if (!h.expandableActions) {
        v.value = !1, P.value = !1;
        return;
      }
      if (!l.value) return;
      const t = l.value.querySelector("tbody tr:first-child td:last-child");
      if (!t) return;
      const i = t.querySelector("div");
      if (!i) return;
      const a = P.value;
      P.value = !0, ee(() => {
        const f = i.querySelectorAll('button, a, [role="button"]');
        if (f.length <= 2) {
          v.value = !1, P.value = a;
          return;
        }
        let x = 0;
        f.forEach((B, ue) => {
          x += B.offsetWidth, ue < f.length - 1 && (x += 4);
        });
        const W = t.clientWidth - 32;
        v.value = x > W, P.value = a;
      });
    };
    let O = null, p = null, g = null, m = null;
    const M = () => {
      O == null || O.disconnect(), O = null, p && (window.removeEventListener("resize", p), p = null);
    }, A = () => {
      z(), k(), l.value && typeof ResizeObserver < "u" ? (O = new ResizeObserver(() => {
        z(), k();
      }), O.observe(l.value)) : (p = () => {
        z(), k();
      }, window.addEventListener("resize", p));
    };
    Re(() => {
      typeof window < "u" && (g = window.matchMedia(We), n.value = g.matches, m = (t) => {
        n.value = t.matches;
      }, typeof g.addEventListener == "function" ? g.addEventListener("change", m) : g.addListener(m));
    }), ht(() => {
      M(), g && m && (typeof g.removeEventListener == "function" ? g.removeEventListener("change", m) : g.removeListener(m), m = null), g = null;
    });
    const h = r, _ = D(""), R = D("asc"), P = D(!1), Xe = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    }), Qe = () => {
      const t = /* @__PURE__ */ new Set();
      for (const i of h.columns)
        i.sortable && t.add(i.key);
      return t;
    }, Z = (t) => t && Qe().has(t) ? t : "", ne = (t) => t === "desc" ? "desc" : "asc", Ye = () => {
      if (!h.sortStorageKey) return null;
      try {
        const t = localStorage.getItem(h.sortStorageKey);
        if (!t) return null;
        const i = JSON.parse(t), a = Z(typeof i.key == "string" ? i.key : "");
        return a ? { key: a, order: ne(i.order) } : null;
      } catch (t) {
        return console.error("[DataTable] Failed to read persisted sort state:", t), null;
      }
    }, et = (t) => {
      if (h.sortStorageKey)
        try {
          localStorage.setItem(h.sortStorageKey, JSON.stringify(t));
        } catch (i) {
          console.error("[DataTable] Failed to persist sort state:", i);
        }
    }, re = () => {
      const t = Ye();
      if (t) return t;
      const i = Z(h.defaultSortKey || "");
      return i ? { key: i, order: ne(h.defaultSortOrder) } : null;
    }, ie = (t) => {
      t && (_.value = t.key, R.value = t.order);
    }, fe = (t, i) => _.value === t && R.value === i ? "text-primary-600 dark:text-primary-400" : "text-gray-300 transition-colors dark:text-dark-500", tt = (t) => _.value !== t ? "none" : R.value === "asc" ? "ascending" : "descending", st = (t) => {
      const i = t.class || "";
      return i.includes("text-center") ? "justify-center" : i.includes("text-right") ? "justify-end" : "justify-start";
    }, ge = (t) => t == null || t === "", me = (t) => {
      if (typeof t == "number") return Number.isFinite(t) ? t : null;
      if (typeof t == "boolean") return t ? 1 : 0;
      if (typeof t == "string") {
        const i = t.trim();
        if (!i) return null;
        const a = Number(i);
        return Number.isFinite(a) ? a : null;
      }
      return null;
    }, pe = (t) => {
      if (t == null) return "";
      if (typeof t == "string") return t;
      if (typeof t == "number" || typeof t == "boolean") return String(t);
      if (t instanceof Date) return t.toISOString();
      try {
        return JSON.stringify(t);
      } catch {
        return String(t);
      }
    }, nt = (t, i) => {
      const a = ge(t), f = ge(i);
      if (a && f) return 0;
      if (a) return 1;
      if (f) return -1;
      const x = me(t), W = me(i);
      if (x !== null && W !== null)
        return x === W ? 0 : x < W ? -1 : 1;
      const B = pe(t), ue = pe(i), Me = Xe.compare(B, ue);
      return Me === 0 ? 0 : Me < 0 ? -1 : 1;
    }, ye = (t) => typeof h.rowKey == "function" ? h.rowKey(t) ?? void 0 : typeof h.rowKey == "string" && h.rowKey ? (t == null ? void 0 : t[h.rowKey]) ?? void 0 : (t == null ? void 0 : t.id) ?? void 0, K = (t, i) => ye(t) ?? i, be = C(() => h.columns.filter((t) => t.key !== "actions")), ve = C(
      () => h.columns.map((t) => `${t.key}:${t.sortable ? "1" : "0"}`).join("|")
    );
    j(
      n,
      async (t) => {
        M(), t && (await ee(), A());
      },
      { immediate: !0, flush: "post" }
    ), j(
      [() => h.data.length, ve],
      async () => {
        await ee(), z(), k();
      },
      { flush: "post" }
    ), j(P, async () => {
      await ee(), z();
    });
    const rt = (t) => {
      let i = "asc";
      _.value === t && (i = R.value === "asc" ? "desc" : "asc"), h.serverSideSort ? (_.value = t, R.value = i, o("sort", t, i)) : (_.value = t, R.value = i);
    }, N = C(() => {
      if (h.serverSideSort || !_.value || !h.data) return h.data;
      const t = _.value, i = R.value;
      return h.data.map((a, f) => ({ row: a, index: f })).sort((a, f) => {
        var W, B;
        const x = nt((W = a.row) == null ? void 0 : W[t], (B = f.row) == null ? void 0 : B[t]);
        return x !== 0 ? i === "asc" ? x : -x : a.index - f.index;
      }).map((a) => a.row);
    }), ae = C(() => h.columns.length + (h.selectable ? 1 : 0)), oe = C(() => new Set(h.selectedKeys)), X = C(
      () => (N.value ?? []).map((t, i) => K(t, i))
    ), le = C(
      () => X.value.length > 0 && X.value.every((t) => oe.value.has(t))
    ), ke = C(() => le.value ? !1 : X.value.some((t) => oe.value.has(t))), xe = (t) => {
      const i = Array.from(t);
      o("update:selectedKeys", i), o("selectionChange", i);
    }, Q = (t, i) => oe.value.has(K(t, i)), Se = (t, i) => typeof h.selectionLabel == "function" ? h.selectionLabel(t) : h.selectionLabel ? h.selectionLabel : `${s("common.selectOption")} ${K(t, i)}`, we = (t, i, a) => {
      const f = new Set(h.selectedKeys), x = K(t, i);
      a ? f.add(x) : f.delete(x), xe(f);
    }, ze = (t) => {
      const i = new Set(h.selectedKeys);
      for (const a of X.value)
        t ? i.add(a) : i.delete(a);
      xe(i);
    }, de = C(
      () => {
        var t;
        return n.value && (((t = N.value) == null ? void 0 : t.length) ?? 0) > (h.virtualizeThreshold ?? 100);
      }
    ), V = Rt(C(() => {
      var t;
      return {
        count: de.value ? ((t = N.value) == null ? void 0 : t.length) ?? 0 : 0,
        getScrollElement: () => l.value,
        // 用行主键(与模板 :key 一致)而非默认的 index 作为 itemSizeCache 键,
        // 这样排序/筛选/跨阈值来回都能复用正确的已测行高,而不是残留的按 index 缓存 → 消除高度校正抖动。
        getItemKey: (i) => {
          var f;
          const a = (f = N.value) == null ? void 0 : f[i];
          return a != null ? K(a, i) : i;
        },
        estimateSize: () => h.estimateRowHeight ?? 56,
        overscan: h.overscan ?? 5,
        // 兜底高度:首个有效高度读数到来前,先按一屏渲染,避免空白帧
        initialRect: { width: 0, height: w() },
        // 关键:过滤 0 高度读数,杜绝 scrollRect 被钉成 0 → calculateRange 返回 null → 整表空白
        observeElementRect: S,
        // 把测量类 ResizeObserver 回调批到 rAF,避免滚动中同步 reflow 风暴导致的校正抖动/空白
        useAnimationFrameWithResizeObserver: !0
      };
    })), ce = C(() => V.value.getVirtualItems()), Ce = C(() => {
      const t = ce.value;
      return t.length > 0 ? t[0].start : 0;
    }), Ee = C(() => {
      const t = ce.value;
      return t.length === 0 ? 0 : V.value.getTotalSize() - t[t.length - 1].end;
    }), it = (t) => {
      t && V.value.measureElement(t);
    }, at = C(
      () => (N.value ?? []).map((t) => {
        const i = ye(t);
        return i !== void 0 ? i : t !== null && typeof t == "object" ? t : Symbol("unstable-row");
      })
    ), ot = (t, i) => {
      if (t.length !== i.length) return !1;
      const a = new Set(t), f = new Set(i);
      return a.size !== t.length || f.size !== i.length ? !1 : [...a].every((x) => f.has(x));
    };
    j(
      at,
      (t, i) => {
        ot(t, i) || (V.value.measureElement(null), V.value.measure());
      },
      { flush: "post" }
    );
    const lt = C(() => {
      const t = N.value ?? [];
      return de.value ? ce.value.map((i) => ({ index: i.index, row: t[i.index], measure: !0 })) : t.map((i, a) => ({ index: a, row: i, measure: !1 }));
    }), _e = C(() => h.columns.some((t) => t.key === "actions")), dt = C(() => h.columns.length > 0 && h.columns[0].key === "select"), Ie = (t, i) => {
      const a = [];
      return h.stickyFirstColumn && (dt.value ? i === 0 ? a.push("sticky-col sticky-col-left-first") : i === 1 && a.push("sticky-col sticky-col-left-second") : i === 0 && a.push("sticky-col sticky-col-left")), h.stickyActionsColumn && t.key === "actions" && a.push("sticky-col sticky-col-right"), a.join(" ");
    }, Y = () => {
      const t = h.columns.length;
      return t >= 10 ? "px-2" : t >= 7 ? "px-3" : t >= 5 ? "px-4" : "px-6";
    }, Oe = D(!1);
    return Re(() => {
      const t = re();
      ie(t), Oe.value = !0;
    }), j(
      ve,
      () => {
        const t = Z(_.value);
        if (!_.value) {
          const i = re();
          ie(i);
          return;
        }
        if (!t) {
          const i = re();
          i ? ie(i) : (_.value = "", R.value = "asc");
        }
      },
      { flush: "post" }
    ), j(
      [_, R],
      ([t, i]) => {
        if (!Oe.value || !h.sortStorageKey) return;
        const a = Z(t);
        a && et({ key: a, order: ne(i) });
      },
      { flush: "post" }
    ), c({
      virtualizer: V,
      shouldVirtualize: de,
      sortedData: N,
      resolveRowKey: K,
      tableWrapperEl: l
    }), (t, i) => n.value ? (y(), b("div", {
      key: 1,
      ref_key: "tableWrapperRef",
      ref: l,
      class: $(["table-wrapper", {
        "actions-expanded": P.value,
        "is-scrollable": d.value
      }])
    }, [
      u("table", Zt, [
        u("thead", Xt, [
          u("tr", null, [
            r.selectable ? (y(), b("th", Qt, [
              u("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: le.value,
                indeterminate: ke.value,
                "aria-label": E(s)("common.selectAll"),
                "data-test": "select-all",
                onChange: i[2] || (i[2] = (a) => ze(a.target.checked))
              }, null, 40, Yt)
            ])) : F("", !0),
            (y(!0), b(T, null, L(r.columns, (a, f) => (y(), b("th", {
              key: a.key,
              scope: "col",
              "aria-sort": a.sortable ? tt(a.key) : void 0,
              class: $([
                "sticky-header-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-400",
                Y(),
                { "cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700": a.sortable },
                Ie(a, f),
                a.class
              ]),
              onClick: (x) => a.sortable && rt(a.key)
            }, [
              u("div", {
                class: $(["flex items-center space-x-1", st(a)])
              }, [
                H(t.$slots, `header-${a.key}`, {
                  column: a,
                  sortKey: _.value,
                  sortOrder: R.value
                }, () => [
                  u("span", null, I(a.label), 1)
                ], !0),
                a.sortable ? (y(), b("span", ts, [
                  (y(), b("svg", {
                    class: $(["h-2.5 w-2.5", fe(a.key, "asc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...i[6] || (i[6] = [
                    u("path", { d: "M5 2L1.5 6.5h7L5 2z" }, null, -1)
                  ])], 2)),
                  (y(), b("svg", {
                    class: $(["-mt-0.5 h-2.5 w-2.5", fe(a.key, "desc")]),
                    fill: "currentColor",
                    viewBox: "0 0 10 10"
                  }, [...i[7] || (i[7] = [
                    u("path", { d: "M5 8L1.5 3.5h7L5 8z" }, null, -1)
                  ])], 2))
                ])) : F("", !0)
              ], 2)
            ], 10, es))), 128))
          ])
        ]),
        u("tbody", ss, [
          r.loading ? (y(), b(T, { key: 0 }, L(5, (a) => u("tr", { key: a }, [
            r.selectable ? (y(), b("td", ns, [...i[8] || (i[8] = [
              u("div", { class: "mx-auto h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
            ])])) : F("", !0),
            (y(!0), b(T, null, L(r.columns, (f) => (y(), b("td", {
              key: f.key,
              class: $(["whitespace-nowrap py-4", Y()])
            }, [...i[9] || (i[9] = [
              u("div", { class: "animate-pulse" }, [
                u("div", { class: "h-4 w-3/4 rounded bg-gray-200 dark:bg-dark-700" })
              ], -1)
            ])], 2))), 128))
          ])), 64)) : !r.data || r.data.length === 0 ? (y(), b("tr", rs, [
            u("td", {
              colspan: ae.value,
              class: $(["py-12 text-center text-gray-500 dark:text-dark-400", Y()])
            }, [
              H(t.$slots, "empty", {}, () => [
                u("div", as, [
                  G(se, {
                    name: "inbox",
                    size: "xl",
                    class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
                  }),
                  u("p", os, I(E(s)("empty.noData")), 1)
                ])
              ], !0)
            ], 10, is)
          ])) : (y(), b(T, { key: 2 }, [
            Ce.value > 0 ? (y(), b("tr", ls, [
              u("td", {
                colspan: ae.value,
                style: Fe({ height: Ce.value + "px", padding: 0, border: "none" })
              }, null, 12, ds)
            ])) : F("", !0),
            (y(!0), b(T, null, L(lt.value, (a) => (y(), b("tr", {
              key: K(a.row, a.index),
              "data-row-id": K(a.row, a.index),
              "data-index": a.index,
              ref_for: !0,
              ref: a.measure ? it : void 0,
              class: $(["hover:bg-gray-50 dark:hover:bg-dark-800", {
                "cursor-pointer": r.clickableRows,
                "bg-primary-50/40 dark:bg-primary-900/10": r.selectable && Q(a.row, a.index)
              }]),
              onClick: (f) => r.clickableRows && o("rowClick", a.row)
            }, [
              r.selectable ? (y(), b("td", us, [
                u("input", {
                  type: "checkbox",
                  class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                  checked: Q(a.row, a.index),
                  "aria-label": Se(a.row, a.index),
                  "data-test": "select-row",
                  onClick: i[3] || (i[3] = Te(() => {
                  }, ["stop"])),
                  onChange: (f) => we(a.row, a.index, f.target.checked)
                }, null, 40, hs)
              ])) : F("", !0),
              (y(!0), b(T, null, L(r.columns, (f, x) => (y(), b("td", {
                key: f.key,
                class: $([
                  "whitespace-nowrap py-4 text-sm text-gray-900 dark:text-gray-100",
                  Y(),
                  Ie(f, x),
                  f.class
                ])
              }, [
                H(t.$slots, `cell-${f.key}`, {
                  row: a.row,
                  value: a.row[f.key],
                  expanded: P.value
                }, () => [
                  q(I(f.formatter ? f.formatter(a.row[f.key], a.row) : a.row[f.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, cs))), 128)),
            Ee.value > 0 ? (y(), b("tr", fs, [
              u("td", {
                colspan: ae.value,
                style: Fe({ height: Ee.value + "px", padding: 0, border: "none" })
              }, null, 12, gs)
            ])) : F("", !0)
          ], 64))
        ])
      ])
    ], 2)) : (y(), b("div", Tt, [
      r.loading ? (y(), b(T, { key: 0 }, L(5, (a) => u("div", {
        key: a,
        class: "rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900"
      }, [
        u("div", Ft, [
          (y(!0), b(T, null, L(be.value, (f) => (y(), b("div", {
            key: f.key,
            class: "flex justify-between"
          }, [...i[4] || (i[4] = [
            u("div", { class: "h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1),
            u("div", { class: "h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])]))), 128)),
          _e.value ? (y(), b("div", $t, [...i[5] || (i[5] = [
            u("div", { class: "h-8 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-700" }, null, -1)
          ])])) : F("", !0)
        ])
      ])), 64)) : !r.data || r.data.length === 0 ? (y(), b("div", Pt, [
        H(t.$slots, "empty", {}, () => [
          u("div", Lt, [
            G(se, {
              name: "inbox",
              size: "xl",
              class: "mb-4 h-12 w-12 text-gray-400 dark:text-dark-500"
            }),
            u("p", Kt, I(E(s)("empty.noData")), 1)
          ])
        ], !0)
      ])) : (y(), b(T, { key: 2 }, [
        r.selectable ? (y(), b("div", Dt, [
          u("label", Nt, [
            u("input", {
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
              checked: le.value,
              indeterminate: ke.value,
              "data-test": "select-all-mobile",
              onChange: i[0] || (i[0] = (a) => ze(a.target.checked))
            }, null, 40, Wt),
            u("span", null, I(E(s)("common.selectAll")), 1)
          ])
        ])) : F("", !0),
        (y(!0), b(T, null, L(N.value, (a, f) => (y(), b("div", {
          key: K(a, f),
          class: $(["rounded-lg border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-900", {
            "cursor-pointer": r.clickableRows,
            "border-primary-300 bg-primary-50/40 dark:border-primary-700 dark:bg-primary-900/10": r.selectable && Q(a, f)
          }]),
          onClick: (x) => r.clickableRows && o("rowClick", a)
        }, [
          u("div", Vt, [
            r.selectable ? (y(), b("div", Bt, [
              u("input", {
                type: "checkbox",
                class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-dark-600 dark:bg-dark-800",
                checked: Q(a, f),
                "aria-label": Se(a, f),
                "data-test": "select-row",
                onClick: i[1] || (i[1] = Te(() => {
                }, ["stop"])),
                onChange: (x) => we(a, f, x.target.checked)
              }, null, 40, Ht)
            ])) : F("", !0),
            (y(!0), b(T, null, L(be.value, (x) => (y(), b("div", {
              key: x.key,
              "data-field": x.key,
              class: "flex min-w-0 items-start justify-between gap-4"
            }, [
              u("span", qt, I(x.label), 1),
              u("div", Gt, [
                H(t.$slots, `cell-${x.key}`, {
                  row: a,
                  value: a[x.key],
                  expanded: P.value
                }, () => [
                  q(I(x.formatter ? x.formatter(a[x.key], a) : a[x.key]), 1)
                ], !0)
              ])
            ], 8, Ut))), 128)),
            _e.value ? (y(), b("div", Jt, [
              H(t.$slots, "cell-actions", {
                row: a,
                value: a.actions,
                expanded: P.value
              }, void 0, !0)
            ])) : F("", !0)
          ])
        ], 10, jt))), 128))
      ], 64))
    ]));
  }
}), Ws = /* @__PURE__ */ Be(ms, [["__scopeId", "data-v-2280f759"]]), ps = { class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800 sm:px-6" }, ys = { class: "flex flex-1 items-center justify-between sm:hidden" }, bs = ["disabled"], vs = { class: "text-sm text-gray-700 dark:text-gray-300" }, ks = ["disabled"], xs = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Ss = { class: "flex items-center space-x-4" }, ws = { class: "text-sm text-gray-700 dark:text-gray-300" }, zs = { class: "font-medium" }, Cs = { class: "font-medium" }, Es = { class: "font-medium" }, _s = {
  key: 0,
  class: "flex items-center space-x-2"
}, Is = { class: "text-sm text-gray-700 dark:text-gray-300" }, Os = { class: "page-size-select w-20" }, Ms = {
  key: 1,
  class: "flex items-center space-x-2"
}, As = { class: "text-sm text-gray-700 dark:text-gray-300" }, Rs = ["max", "placeholder"], Ts = {
  class: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, Fs = ["disabled", "aria-label"], $s = ["onClick", "disabled", "aria-label", "aria-current"], Ps = ["disabled", "aria-label"], Ls = /* @__PURE__ */ je({
  __name: "Pagination",
  props: {
    total: {},
    page: {},
    pageSize: {},
    pageSizeOptions: { default: () => he() },
    showPageSizeSelector: { type: Boolean, default: !0 },
    showJump: { type: Boolean, default: !1 }
  },
  emits: ["update:page", "update:pageSize"],
  setup(r, { emit: c }) {
    const { t: e } = Ve(), s = r, n = c, o = C(() => Math.ceil(s.total / s.pageSize)), l = C(() => s.total === 0 ? 0 : (s.page - 1) * s.pageSize + 1), d = C(() => {
      const p = s.page * s.pageSize;
      return p > s.total ? s.total : p;
    }), v = C(() => Array.from(
      /* @__PURE__ */ new Set([
        ...he(),
        J(s.pageSize)
      ])
    ).sort((g, m) => g - m).map((g) => ({
      value: g,
      label: String(g)
    }))), w = D(""), S = C(() => {
      const p = [], m = o.value;
      if (m <= 7)
        for (let M = 1; M <= m; M++)
          p.push(M);
      else {
        p.push(1);
        const M = Math.max(2, s.page - 2), A = Math.min(m - 1, s.page + 2);
        M > 2 && p.push("...");
        for (let h = M; h <= A; h++)
          p.push(h);
        A < m - 1 && p.push("..."), p.push(m);
      }
      return p;
    }), z = (p) => {
      p >= 1 && p <= o.value && p !== s.page && n("update:page", p);
    }, k = (p) => {
      if (p === null || typeof p == "boolean") return;
      const g = J(typeof p == "string" ? parseInt(p, 10) : p);
      xt(g), n("update:pageSize", g);
    }, O = () => {
      const p = String(w.value).trim();
      if (!p) return;
      const g = Number.parseInt(p, 10);
      if (Number.isNaN(g)) return;
      const m = Math.min(Math.max(g, 1), o.value);
      w.value = "", z(m);
    };
    return (p, g) => (y(), b("div", ps, [
      u("div", ys, [
        u("button", {
          onClick: g[0] || (g[0] = (m) => z(r.page - 1)),
          disabled: r.page === 1,
          class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, I(E(e)("pagination.previous")), 9, bs),
        u("span", vs, I(E(e)("pagination.pageOf", { page: r.page, total: o.value })), 1),
        u("button", {
          onClick: g[1] || (g[1] = (m) => z(r.page + 1)),
          disabled: r.page === o.value,
          class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600"
        }, I(E(e)("pagination.next")), 9, ks)
      ]),
      u("div", xs, [
        u("div", Ss, [
          u("p", ws, [
            q(I(E(e)("pagination.showing")) + " ", 1),
            u("span", zs, I(l.value), 1),
            q(" " + I(E(e)("pagination.to")) + " ", 1),
            u("span", Cs, I(d.value), 1),
            q(" " + I(E(e)("pagination.of")) + " ", 1),
            u("span", Es, I(r.total), 1),
            q(" " + I(E(e)("pagination.results")), 1)
          ]),
          r.showPageSizeSelector ? (y(), b("div", _s, [
            u("span", Is, I(E(e)("pagination.perPage")) + ":", 1),
            u("div", Os, [
              G(pt, {
                "model-value": r.pageSize,
                options: v.value,
                "onUpdate:modelValue": k
              }, null, 8, ["model-value", "options"])
            ])
          ])) : F("", !0),
          r.showJump ? (y(), b("div", Ms, [
            u("span", As, I(E(e)("pagination.jumpTo")), 1),
            ft(u("input", {
              "onUpdate:modelValue": g[2] || (g[2] = (m) => w.value = m),
              type: "number",
              min: "1",
              max: o.value,
              class: "input w-20 text-sm",
              placeholder: E(e)("pagination.jumpPlaceholder"),
              onKeyup: mt(O, ["enter"])
            }, null, 40, Rs), [
              [gt, w.value]
            ]),
            u("button", {
              type: "button",
              class: "btn btn-ghost btn-sm",
              onClick: O
            }, I(E(e)("pagination.jumpAction")), 1)
          ])) : F("", !0)
        ]),
        u("nav", Ts, [
          u("button", {
            onClick: g[3] || (g[3] = (m) => z(r.page - 1)),
            disabled: r.page === 1,
            class: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": E(e)("pagination.previous")
          }, [
            G(se, {
              name: "chevronLeft",
              size: "md"
            })
          ], 8, Fs),
          (y(!0), b(T, null, L(S.value, (m, M) => (y(), b("button", {
            key: `${m}-${M}`,
            onClick: (A) => typeof m == "number" && z(m),
            disabled: typeof m != "number",
            class: $([
              "relative inline-flex items-center border px-4 py-2 text-sm font-medium",
              m === r.page ? "z-10 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600",
              typeof m != "number" && "cursor-default"
            ]),
            "aria-label": typeof m == "number" ? E(e)("pagination.goToPage", { page: m }) : void 0,
            "aria-current": m === r.page ? "page" : void 0
          }, I(m), 11, $s))), 128)),
          u("button", {
            onClick: g[4] || (g[4] = (m) => z(r.page + 1)),
            disabled: r.page === o.value,
            class: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-600 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-600",
            "aria-label": E(e)("pagination.next")
          }, [
            G(se, {
              name: "chevronRight",
              size: "md"
            })
          ], 8, Ps)
        ])
      ])
    ]));
  }
}), js = /* @__PURE__ */ Be(Ls, [["__scopeId", "data-v-4125afbb"]]);
export {
  Ws as D,
  js as P,
  Ns as g,
  xt as s
};
