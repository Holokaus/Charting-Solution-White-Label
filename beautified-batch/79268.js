/**
 * Module 79268 - Auto-beautified from TradingView webpack bundle
 *
 * @module 79268
 * @date 2026-04-23
 * @size 7674 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 2624, 4539, 4699, 10307, 10555, 12217, 50151, 58221, 85565
 *
 * Exports:
 *   - PaneRendererLine (internal: g)
 *   - PaneRendererLineItemsIterator (internal: m)
 *   - isValidPoint (internal: p)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  PaneRendererLine: () => g,
  PaneRendererLineItemsIterator: () => m,
  isValidPoint: () => p
});
var s = i(50151),
  o = i(10555),
  n = i(2624),
  r = i(2383),
  a = i(4539),
  l = i(58221),
  c = i(10307),
  h = i(4699),
  d = i(12217),
  u = i(85565);
const _ = {
  y: NaN
};

function p(e) {
  return null !== e && !isNaN(e.y)
}
class m {
  constructor(e, t, i, o) {
    this._calculatedPrev = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }, this._calculatedCurrent = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }, this._calculatedNext = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }, this._preallocatedVariable = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }, e.length && ((0, s.assert)(t <= i, "First index must be less or equal to last index"), (0, s.assert)(t < e.length, "First index must be less then array length"), (0, s.assert)(i <= e.length, "Last index must be less or equal to array length")), this._items = e, this._firstIndexWithRange = t, this._lastIndexWithRange = i, this._skipHoles = o
  }
  next() {
    if (0 === this._items.length) return !1;
    if (null !== this._calculatedNext.index) return null !== this._calculatedNext.value && (this._calculatedPrev = this._calculatedCurrent, this._calculatedCurrent = this._calculatedNext, this._calculatedNext = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }, !0);
    let e;
    this._preallocatedVariable = {
      ...this._calculatedCurrent
    };
    do {
      null === this._preallocatedVariable.index ? (this._preallocatedVariable.index = this._firstIndexWithRange, this._preallocatedVariable.currentBreakProcessed = !1, e = this._preallocatedVariable.index < this._lastIndexWithRange) : (this._incrementPointer(this._preallocatedVariable), e = this._isValidPointer(this._preallocatedVariable)), e && this._calcVaue(this._preallocatedVariable)
    } while (e && this._skipHoles && !p(this._preallocatedVariable.value));
    return e && (this._calculatedPrev = this._calculatedCurrent, this._calculatedCurrent = this._preallocatedVariable, this._calculatedNext = {
      index: null,
      currentBreakProcessed: !1,
      value: null
    }), e
  }
  prevValue() {
    return this._calculatedPrev.value
  }
  currentValue() {
    return (0, s.ensureNotNull)(this._calculatedCurrent.value)
  }
  currentValueIsLast() {
    return (0, s.ensureNotNull)(this._calculatedCurrent.index) === this._items.length - 1
  }
  currentValueIsFirst() {
    return 0 === (0, s.ensureNotNull)(this._calculatedCurrent.index)
  }
  nextValue() {
    if (null !== this._calculatedNext.index) return this._calculatedNext.value;
    let e;
    this._calculatedNext = {
      ...this._calculatedCurrent,
      value: null
    };
    do {
      this._incrementPointer(this._calculatedNext), e = this._isValidPointer(this._calculatedNext), e ? this._calcVaue(this._calculatedNext) : this._calculatedNext.value = null
    } while (e && this._skipHoles && !p(this._calculatedNext.value));
    return this._calculatedNext.value
  }
  atStart() {
    return this._calculatedCurrent.index === this._firstIndexWithRange && !this._calculatedCurrent.currentBreakProcessed
  }
  atEnd() {
    const e = (0, s.ensureNotNull)(this._calculatedCurrent.index);
    return e < this._lastIndexWithRange && (this._calculatedCurrent.currentBreakProcessed || !this._needBreakBefore(e))
  }
  _needBreakBefore(e) {
    return !!this._items[e].breakBefore && !this._skipHoles
  }
  _calcVaue(e) {
    const t = (0, s.ensureNotNull)(e.index);
    this._needBreakBefore(t) && !e.currentBreakProcessed ? e.value = _ : e.value = this._items[t]
  }
  _incrementPointer(e) {
    const t = (0, s.ensureNotNull)(e.index);
    this._needBreakBefore(t) && !this._calculatedCurrent.currentBreakProcessed ? e.currentBreakProcessed = !0 : (e.index = t + 1, e.currentBreakProcessed = !1)
  }
  _isValidPointer(e) {
    const t = (0, s.ensureNotNull)(e.index);
    return t < this._lastIndexWithRange || t === this._lastIndexWithRange - 1 && this._needBreakBefore(t) && e.currentBreakProcessed
  }
}
class g extends c.BitmapCoordinatesPaneRenderer {
    constructor(e) {
      super(), this._data = e
    }
    hitTest(e) {
      const t = (0, a.interactionTolerance)().series + this._data.lineWidth / 2;
      let i = this._data.visibleItemsRange?.startItemIndex ?? 0,
        s = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
      for (; s - i > 2;) {
        const t = Math.round((s + i) / 2);
        this._data.items[t].center <= e.x ? i = t : s = t
      }
      i = Math.max(1, i - 1), s = Math.min(this._data.items.length - 1, s + 1);
      for (let a = i; a <= s; ++a) {
        const i = this._data.items[a - 1],
          s = this._data.items[a],
          l = i.center,
          c = s.center;
        if ((0, n.distanceToSegment)(new o.Point(l, i.y), new o.Point(c, s.y), new o.Point(e.x, e.y)).distance <= t) return this._data.hittest ? this._data.hittest : new r.HitTestResult(r.HitTarget.Regular)
      }
      return null
    }
    _drawImpl(e) {
      const {
        context: t,
        horizontalPixelRatio: i,
        verticalPixelRatio: s
      } = e;
      t.scale(i, s), t.lineCap = "round", t.lineJoin = "round", (0, h.applyColor)(e, this._data.lineColor, 0, 3), t.lineWidth = this._data.lineWidth, (0, l.setLineStyle)(t, this._data.lineStyle), (0, a.setValidLineStyle)(t, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(e) : this._drawLines(t)
    }
    _drawSimpleMode(e) {
      const {
        context: t,
        horizontalPixelRatio: i,
        verticalPixelRatio: s
      } = e;
      t.beginPath(), this._walkLine(t, this._data.items, !1, NaN), t.stroke();
      const o = this._data.lineWidth + 2;
      if (this._data.withMarkers && 2 * o < this._data.barSpacing) {
        t.scale(1 / i, 1 / s), (0, h.applyColor)(e, this._data.lineColor, 1, 2);
        const n = Math.max(1, Math.floor(i)) % 2 / 2,
          r = o * s + n,
          a = 2 * Math.PI;
        t.beginPath();
        const l = this._data.visibleItemsRange?.startItemIndex ?? 0;
        for (let e = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1 + 1; e-- >= l;) {
          const o = this._data.items[e];
          if (o) {
            const e = Math.round(o.center * i) + n,
              l = o.y * s;
            t.moveTo(e, l), t.arc(e, l, r, 0, a)
          }
        }
        t.fill()
      }
    }
    _walkLine(e, t, i, s, o, n, r) {
      if (!t) return {
        distance: 0,
        dashPattern: []
      };
      const a = .25 * this._data.barSpacing;
      let l, c, h = null;
      const _ = o ? 0 : this._data.visibleItemsRange?.startItemIndex ?? 0,
        g = o ? t.length : Math.min(this._data.visibleItemsRange?.endItemIndex ?? t.length, t.length);
      if (_ > g || _ >= t.length) return {
        distance: 0,
        dashPattern: []
      };
      if (!n) {
        const {
          distance: n,
          dashPattern: a
        } = this._walkLine(e, t, i, s, o, !0, r), l = (0, d.sum)(a);
        if (l > 0) {
          const t = n % l;
          e.lineDashOffset = l - t - a[1]
        }
      }
      const f = new u.SmartDashCanvas(e, !!n, r),
        y = new m(t, _, g, this._data.skipHoles);
      for (; y.next();) {
        if (l = y.currentValue(), c = y.nextValue(), p(l)) {
          const e = Math.round(l.center);
          h && p(h) ? (f.lineTo(e, l.y), i && !p(c) && f.lineTo(e, s)) : c && p(c) ? i ? (y.atStart() || f.lineTo(e, s), f.lineTo(e, l.y)) : f.moveTo(e, l.y) : i ? (y.atStart() || f.lineTo(e - a, s), f.lineTo(e - a, l.y), f.lineTo(e + a, l.y), f.lineTo(e + a, s)) : (f.moveTo(e - a, l.y), f.lineTo(e + a, l.y))
        }
        h = l
      }
      return {
        distance: f.lastSegmentDistance(),
        dashPattern: f.lastSegmentDashPattern()
      }
    }
    _drawLines(e, t) {
      if (!this._data.items.length || 0 === this._data.lineWidth) return {
        distance: 0,
        dashPattern: []
      };
      let i, s, o = null;
      const n = .25 * this._data.barSpacing,
        r = new u.SmartDashCanvas(e, !!t);
      let a = 0;
      if (!t) {
        const {
          distance: t,
          dashPattern: i
        } = this._drawLines(e, !0), s = (0, d.sum)(i);
        if (s > 0) {
          const o = t % s;
          e.lineDashOffset = a = s - o - i[1]
        }
      }
      r.beginPath();
      const l = this._data.visibleItemsRange?.startItemIndex ?? 0,
        c = this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length;
      if (l > c || l >= this._data.items.length) return {
        distance: 0,
        dashPattern: []
      };
      const h = this._data.items[l];
      h && r.moveTo(h.center, h.y);
      let _, g = e.strokeStyle,
        f = e.lineWidth;
      const y = new m(this._data.items, l, c, this._data.skipHoles);
      for (; y.next();) {
        let l, c, h;
        o = y.prevValue(), i = y.currentValue(), s = y.nextValue();
        let u = !1,
          m = !1,
          w = !1;
        if (p(i) && (i.style && !this._data.forceLineColor ? (l = i.style.color, c = i.style.width, h = i.style.style) : (l = this._data.lineColor, c = this._data.lineWidth, h = this._data.lineStyle), this._data.ignorePaletteLineWidth && (c = this._data.lineWidth), m = h !== _, w = c !== f, u = l !== g || m || w), u) {
          if (g = l, f = c, _ = h, r.stroke(), r.beginPath(), !t) {
            r.setStrokeStyle(l);
            const t = r.lastSegmentDistance(),
              i = r.lastSegmentDashPattern(),
              s = (0, d.sum)(i);
            if (s > 0) {
              const i = t % s;
              e.lineDashOffset = i + a
            }
          }
          if (r.setLineWidth(c), r.setLineStyle(h), p(o)) r.moveTo(o.center, o.y);
          else {
            const e = i;
            r.moveTo(e.center, e.y)
          }
        }
        v = o, b = s, p(S = i) && (p(v) ? r.lineTo(S.center, S.y) : b && p(b) ? r.moveTo(S.center, S.y) : (r.moveTo(S.center - n, S.y), r.lineTo(S.center + n, S.y)))
      }
      var v, S, b;
      return r.stroke(), {
        distance: r.lastSegmentDistance(),
        dashPattern: r.lastSegmentDashPattern()
      }
    }
